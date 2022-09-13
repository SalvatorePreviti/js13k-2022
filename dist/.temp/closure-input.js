let _meshFirstIndex = 0;
let music_on = !0;
let touch_movementX = 0;
let touch_movementY = 0;
let absoluteTime = 0;
let gameTime = 0;
let souls_collected_count = 0;
let _messageEndTime = 0;
let player_last_pulled_lever = 0;
let rotatingPlatform1Rotation = 0;
let rotatingPlatform2Rotation = 0;
let rotatingHexCorridorRotation = 0;
let game_completed = 0;
let firstBoatLerp = 0;
let secondBoatLerp = 0;
let gameTimeDelta = .066;

let _polygon;

let mainMenuVisible;
let player_first_person;

let _globalTime;

let playerLegsModels;
const DEG_TO_RAD = Math.PI / 180;
const identity = new DOMMatrix();

const min = (a, b) => a < b ? a : b;

const max = (a, b) => b < a ? a : b;

const abs = n => n < 0 ? -n : n;

const clamp01 = t => t < 0 ? 0 : 1 < t ? 1 : t;

const lerp = (from, to, t) => from + (to - from) * clamp01(t);

const lerpneg = (v, t) => (v = clamp01(v), lerp(v, 1 - v, t));

const angle_wrap_degrees = degrees => Math.atan2(Math.sin(degrees *= DEG_TO_RAD), Math.cos(degrees)) / DEG_TO_RAD;

const angle_lerp_degrees = (a0, a1, t) =>
  ((a0, a1, t) => {
    const da = (a1 - a0) % (2 * Math.PI);
    return a0 + (2 * da % (2 * Math.PI) - da) * clamp01(t);
  })(a0 * DEG_TO_RAD, a1 * DEG_TO_RAD, t) / DEG_TO_RAD;

const interpolate_with_hysteresis = (previous, desired, hysteresis, t) =>
  lerp(
    previous + Math.sign(desired - previous) * max(0, abs(desired - previous) ** .9 - hysteresis) * t * 2,
    desired,
    t / 7,
  );

const integers_map = (n, fn) => Array.from(Array(n), (_, i) => fn(i));

const mat_perspectiveXY = (
  mx,
  my,
  near,
  far,
) => [mx, 0, 0, 0, 0, my, 0, 0, 0, 0, (far + near) / (near - far), -1, 0, 0, 2 * far * near / (near - far), 0];

const vec3_dot = ({
  x,
  y,
  z,
}, v) => x * v.x + y * v.y + z * v.z;

const vec3_distance = ({
  x,
  y,
  z,
}, b) => Math.hypot(x - b.x, y - b.y, z - b.z) || 0;

const plane_fromPolygon = polygon => {
  let x = 0;
  let y = 0;
  let z = 0;
  let b;
  let a = polygon.at(-1);

  for (b of polygon) {
    x += (a.y - b.y) * (a.z + b.z), y += (a.z - b.z) * (a.x + b.x), z += (a.x - b.x) * (a.y + b.y), a = b;
  }

  return b = Math.hypot(x, y, z), x /= b, y /= b, z /= b, {
    x: x,
    y: y,
    z: z,
    w: x * a.x + y * a.y + z * a.z,
  };
};

const material = (r, g, b, a = 0) => 255 * a << 24 | 255 * b << 16 | 255 * g << 8 | 255 * r;

const polygon_color = (polygon, color, smooth) => (polygon.$smooth = smooth, polygon.$color = color, polygon);

const polygon_transform = (polygon, m, color = polygon.$color) =>
  polygon_color(
    polygon.map(p =>
      (({
        x,
        y,
        z,
      }, m) => (({
        x,
        y,
        z,
      } = m.transformPoint({
        x: x,
        y: y,
        z: z,
      })),
        {
          x: x,
          y: y,
          z: z,
        }))(p, m)
    ),
    color,
    polygon.$smooth,
  );

const polygons_transform = (polygons, m, color) => polygons.map(polygon => polygon_transform(polygon, m, color));

const polygon_regular = (segments, elongate = 0) =>
  integers_map(segments, i => {
    const z = Math.cos(2 * Math.PI * i / segments);
    return {
      x: Math.sin(2 * Math.PI * i / segments),
      y: 0,
      z: abs(z) < .01 ? z : z < 0 ? z - elongate : z + elongate,
    };
  });

const cylinder_sides = (btm, top, smooth) =>
  btm.map((btmi, i, {
    length,
  }) =>
    polygon_color(
      [btmi, top[length - i - 1], top[length - (i + 1) % length - 1], btm[(i + 1) % length]],
      btm.$color,
      smooth,
    )
  );

const cylinder = (segments, smooth, topSize = 0, elongate) => {
  const points = segments.length ? segments : polygon_regular(segments, elongate);
  const top = polygon_transform(points, identity.translate(0, 1).scale3d(0 < topSize ? topSize : 1));
  const bottom = polygon_transform(points, identity.translate(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse();
  return [...cylinder_sides(bottom, top, smooth), bottom, top];
};

const sphere = (slices, stacks = slices, vertexFunc = (x, y) => (y *= Math.PI / stacks, {
  x: Math.cos(x *= 2 * Math.PI / slices) * Math.sin(y),
  y: Math.cos(y),
  z: Math.sin(x) * Math.sin(y),
})) => {
  const polygons = [];

  for (let i = 0; slices > i; i++) {
    for (let j = 0; stacks > j; j++) {
      const vertex = (x, y) => polygon.push(vertexFunc(x, y, polygon));

      const polygon = polygon_color([], 0, 1);
      polygons.push(polygon),
        vertex(i, j),
        j && vertex((i + 1) % slices, j),
        stacks - 1 > j && vertex((i + 1) % slices, j + 1 % stacks),
        vertex(i, j + 1 % stacks);
    }
  }

  return polygons;
};

const CSGPolygon_split = (plane, polygon) => {
  let $front;
  let $back;
  let d;
  const $polygon = polygon.$polygon;

  for (let i = 0; $polygon.length > i; ++i) {
    if (
      (d = vec3_dot(plane, $polygon[i]) - plane.w) < -0.00008 ? $back = polygon : 8e-5 < d && ($front = polygon),
        $back && $front
    ) {
      return ((plane, polygon) => {
        let jd;
        const fpoints = [];
        const bpoints = [];
        const {
          $polygon,
          $flipped,
        } = polygon;
        let iv = $polygon.at(-1);
        let id = vec3_dot(plane, iv) - plane.w;

        for (const jv of $polygon) {
          jd = vec3_dot(plane, jv) - plane.w,
            id < 8e-5 && bpoints.push(iv),
            -0.00008 < id && fpoints.push(iv),
            (8e-5 < id && jd < -0.00008 || id < -0.00008 && 8e-5 < jd) && (id /= jd - id,
              iv = {
                x: iv.x + (iv.x - jv.x) * id,
                y: iv.y + (iv.y - jv.y) * id,
                z: iv.z + (iv.z - jv.z) * id,
              },
              fpoints.push(iv),
              bpoints.push(iv)),
            iv = jv,
            id = jd;
        }

        return {
          $front: 2 < fpoints.length && {
            $polygon: polygon_color(fpoints, $polygon.$color, $polygon.$smooth),
            $flipped: $flipped,
            $parent: polygon,
          },
          $back: 2 < bpoints.length && {
            $polygon: polygon_color(bpoints, $polygon.$color, $polygon.$smooth),
            $flipped: $flipped,
            $parent: polygon,
          },
        };
      })(plane, polygon);
    }
  }

  return {
    $front: $front,
    $back: $back,
  };
};

const csg_tree_addPolygon = (node, polygon, plane = plane_fromPolygon(polygon.$polygon)) => {
  if (node) {
    const {
      $front,
      $back,
    } = CSGPolygon_split(node, polygon);
    $front || $back || node.$polygons.push(polygon),
      $front && (node.$front = csg_tree_addPolygon(node.$front, $front, plane)),
      $back && (node.$back = csg_tree_addPolygon(node.$back, $back, plane));
  } else {
    const {
      x,
      y,
      z,
      w,
    } = plane;
    node = {
      x: x,
      y: y,
      z: z,
      w: w,
      $polygons: [polygon],
      $front: 0,
      $back: 0,
    };
  }

  return node;
};

const csg_tree_clipNode = (anode, bnode, polygonPlaneFlipped) => {
  const result = [];

  const recursion = (node, polygon) => {
    let {
      $front,
      $back,
    } = CSGPolygon_split(node, polygon);
    $front || $back || (0 < polygonPlaneFlipped * vec3_dot(node, bnode) ? $front = polygon : $back = polygon),
      $front && (node.$front ? recursion(node.$front, $front) : result.push($front)),
      $back && node.$back && recursion(node.$back, $back);
  };

  for (const polygon of bnode.$polygons) recursion(anode, polygon);

  return result;
};

const csg_tree_each = (node, fn) => node && (fn(node), csg_tree_each(node.$front, fn), csg_tree_each(node.$back, fn));

const csg_tree = n =>
  n.length
    ? n.reduce((prev, $polygon) =>
      csg_tree_addPolygon(prev, {
        $polygon: $polygon,
        $flipped: 0,
        $parent: 0,
      }), 0)
    : n;

const csg_tree_flip = root => (csg_tree_each(root, node => {
  const {
    $front,
    $back,
  } = node;
  node.$back = $front, node.$front = $back, node.x *= -1, node.y *= -1, node.z *= -1, node.w *= -1;

  for (const polygon of node.$polygons) polygon.$flipped = !polygon.$flipped;
}),
  root);

const csg_union = (...inputs) =>
  inputs.reduce((a, b) => {
    const polygonsToAdd = [];

    if (a = csg_tree(a), b) {
      b = csg_tree(b),
        csg_tree_each(a, node => node.$polygons = csg_tree_clipNode(b, node, 1)),
        csg_tree_each(b, node => polygonsToAdd.push([node, csg_tree_clipNode(a, node, -1)]));

      for (const [plane, polygons] of polygonsToAdd) for (const pp of polygons) csg_tree_addPolygon(a, pp, plane);
    }

    return a;
  });

const csg_subtract = (a, ...b) => csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b));

const csg_polygons = tree => {
  const byParent = new Map();
  const allPolygons = new Map();

  const add = polygon => {
    if (polygon.$parent) {
      const found = byParent.get(polygon.$parent);
      found ? (allPolygons.delete(found), polygon = add(polygon.$parent)) : byParent.set(polygon.$parent, polygon);
    }

    return polygon;
  };

  return csg_tree_each(tree, node => {
    for (const polygon of node.$polygons) allPolygons.set(add(polygon), polygon.$flipped);
  }),
    Array.from(allPolygons, ([{
      $polygon,
    }, flipped]) => {
      const polygon = $polygon.map(({
        x,
        y,
        z,
      }) => ({
        x: x,
        y: y,
        z: z,
      }));
      return polygon_color(flipped ? polygon.reverse() : polygon, $polygon.$color, $polygon.$smooth);
    });
};

const GQuad = [{
  x: -1,
  z: 1,
}, {
  x: 1,
  z: 1,
}, {
  x: 1,
  z: -1,
}, {
  x: -1,
  z: -1,
}];
const modelsByModelId = [];

const withEditMatrix = (matrix, fn) => {
  editMatrixStack.push(editMatrixStack.at(-1).multiply(matrix));
  const result = fn();
  return editMatrixStack.pop(), result;
};

const _triangleIndices = [];
const _vertexPositions = [];
const _vertexNormals = [];
const _vertexColors = [];
const _pendingPolygonsStack = [[]];

const _vertexMap = new Map();

const _vertexInts = new Int32Array(7);

const getVertex = i => {
  let {
    x,
    y,
    z,
  } = _polygon[i];
  _vertexFloats[0] = x, _vertexFloats[1] = y, _vertexFloats[2] = z;
  const key = "" + (_polygon.$smooth ? _vertexIntsSmooth : _vertexInts);

  let index2 = _vertexMap.get(key);

  return void 0 !== index2
    ? (x = 3 * index2,
      _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[4]) / 2,
      _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[5]) / 2,
      _vertexNormals[x] = (_vertexNormals[x] + _vertexInts[6]) / 2)
    : (_vertexMap.set(key, index2 = _vertexMap.size),
      _vertexPositions.push(x, y, z),
      _vertexNormals.push(_vertexInts[4], _vertexInts[5], _vertexInts[6]),
      _vertexColors.push(_vertexInts[3])),
    index2;
};

const meshAdd = (polygons, transform = identity, color) =>
  _pendingPolygonsStack.at(-1).push(...polygons_transform(polygons, editMatrixStack.at(-1).multiply(transform), color));

const meshEnd = () => {
  const pendingPolygons = _pendingPolygonsStack.at(-1);

  for (_polygon of pendingPolygons) {
    const {
      x,
      y,
      z,
    } = plane_fromPolygon(_polygon);
    _vertexInts[3] = 0 | _polygon.$color,
      _vertexInts[4] = 32767 * x,
      _vertexInts[5] = 32767 * y,
      _vertexInts[6] = 32767 * z;

    for (let i = 2, a = getVertex(0), b = getVertex(1); _polygon.length > i; ++i) {
      _triangleIndices.push(a, b, b = getVertex(i));
    }
  }

  pendingPolygons.length = 0;
  const $vertexOffset = _meshFirstIndex;
  return {
    $vertexOffset: $vertexOffset,
    $vertexCount: (_meshFirstIndex = _triangleIndices.length) - $vertexOffset,
  };
};

const newModel = (fn, $modelId = 0) => {
  const model = {
    ...rootModel,
    $parent: currentEditModel,
    $children: [],
    $initialMatrix: editMatrixStack.at(-1),
    $modelId: $modelId,
  };
  const modelMesh =
    (editMatrixStack.push(identity),
      _pendingPolygonsStack.push([]),
      currentEditModel.$children.push(model),
      fn(currentEditModel = model) || meshEnd());
  return modelsByModelId[model.$modelId] = model,
    modelMesh && modelMesh.$vertexCount && (model.$mesh = modelMesh),
    currentEditModel = model.$parent,
    editMatrixStack.pop(),
    _pendingPolygonsStack.pop(),
    model;
};

const updateModels = (model, parentMatrix = identity) => {
  const update = model._update;

  if (
    model.$parent && !model.$modelId && (model.$modelId = model.$parent.$modelId || 1),
      model.$finalMatrix = parentMatrix.multiply(model.$initialMatrix),
      update
  ) {
    const updateResult = update(model);
    updateResult && (model.$finalMatrix = model.$finalMatrix.multiply(updateResult));
  }

  for (const child of model.$children) updateModels(child, model.$finalMatrix);
};

const camera_position = {
  x: -11,
  y: 17,
  z: -90,
};
const camera_rotation = {
  x: 0,
  y: 0,
  z: 0,
};

const mat_perspective = (near, far) =>
  mat_perspectiveXY(hC.clientHeight / hC.clientWidth * fieldOfViewAmount, fieldOfViewAmount, near, far);

const fieldOfViewAmount = 1.732051;
const song_instruments = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, [
  "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
  "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
  "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
  "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
  "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
  "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
]], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, [
  ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
  "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
  ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
  "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
  "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
  "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
]], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
  "9(((9(((9(((9(((9(((9(((9(((9",
  "9(((Q(((Q(((Q",
]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
  "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
  "9(9(9(9(9(999(9(((((Q",
]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
  "((((Q(((((((Q(((((((Q(((((((Q",
  "Q((Q((Q((Q((Q((Q((((Q",
]]];

const getnotefreq = n => 0.003960 * 2 ** ((n - 256) / 12);

const osc_sin = value => Math.sin(value * Math.PI * 2);

const osc_square = value => value % 1 < .5 ? 1 : -1;

const osc_saw = value => value % 1 * 2 - 1;

const osc_tri = value => {
  const v2 = value % 1 * 4;
  return v2 < 2 ? v2 - 1 : 3 - v2;
};

const keyboard_downKeys = [];

const updateMusicOnState = () => {
  mainMenuVisible || !music_on ? songAudioSource.disconnect() : songAudioSource.connect(audioContext.destination),
    b4.innerHTML = "Music: " + music_on;
};

const setMainMenuVisible = (value = !1) => {
  if (mainMenuVisible !== value) {
    mainMenuVisible = value, player_first_person = 0;

    try {
      value ? document.exitPointerLock() : songAudioSource.start();
    } catch {}

    document.body.className = value ? "l m" : "l", updateMusicOnState();
  }
};

const initPage = () => {
  let touchStartCameraRotX = 0;
  let touchStartCameraRotY = 0;
  let touchStartTime = 0;
  let cameraRotTouch;
  let cameraPosTouch;
  let pageClicked;

  const handleResize = () => {
    hC.width = innerWidth,
      hC.height = innerHeight,
      keyboard_downKeys.length = touch_movementX = touch_movementY = 0,
      cameraRotTouch = cameraPosTouch = void 0,
      document.hidden && setMainMenuVisible(!0);
  };

  b1.onclick = () => setMainMenuVisible(),
    b2.onclick = () => {
      setMainMenuVisible(), player_first_person = 1;
    },
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "", location.reload());
    },
    b4.onclick = () => {
      music_on = !music_on, updateMusicOnState();
    },
    b5.onclick = () => setMainMenuVisible(!0),
    onclick = () => {
      pageClicked = 1, mainMenuVisible || (keyboard_downKeys[5] = !0, player_first_person && hC.requestPointerLock());
    },
    document.onvisibilitychange = onresize = onblur = handleResize,
    onkeydown = onkeyup = ({
      code: code2,
      target,
      type,
      repeat,
    }) => {
      if (!repeat) {
        const pressed = !!type[5] && target === document.body;
        if (pressed && ("Escape" === code2 || "Enter" === code2 && mainMenuVisible)) {
          mainMenuVisible && !pageClicked || setMainMenuVisible(!mainMenuVisible);
        } else {
          const mapped = {
            "KeyA": 0,
            "ArrowLeft": 0,
            "KeyW": 1,
            "ArrowUp": 1,
            "KeyD": 2,
            "ArrowRight": 2,
            "KeyS": 3,
            "ArrowDown": 3,
            "KeyE": 5,
            "Space": 5,
            "Enter": 5,
          }[code2];
          5 === mapped ? pressed && (keyboard_downKeys[mapped] = 1) : keyboard_downKeys[mapped] = pressed;
        }
      }
    },
    onmousemove = ({
      movementX,
      movementY,
    }) => {
      player_first_person && (movementX || movementY)
        && (camera_rotation.y += .1 * movementX, camera_rotation.x += .1 * movementY);
    },
    hC.ontouchstart = e => {
      if (!mainMenuVisible) {
        for (const touch of e.changedTouches) {player_first_person && touch.pageX > hC.clientWidth / 2
            ? cameraRotTouch
              || (cameraRotTouch = touch,
                touchStartCameraRotX = camera_rotation.y,
                touchStartCameraRotY = camera_rotation.x)
            : cameraPosTouch = cameraPosTouch || touch;}

        touchStartTime = absoluteTime;
      }
    },
    hC.ontouchmove = ({
      changedTouches,
    }) => {
      if (!mainMenuVisible) {
        for (
          const {
            pageX,
            pageY,
            identifier,
          } of changedTouches
        ) {
          cameraRotTouch?.identifier === identifier
          && (camera_rotation.y = touchStartCameraRotX + (pageX - cameraRotTouch.pageX) / 3,
            camera_rotation.x = touchStartCameraRotY + (pageY - cameraRotTouch.pageY) / 3),
            cameraPosTouch?.identifier === identifier
            && (touch_movementX = -(pageX - cameraPosTouch.pageX) / 18,
              touch_movementY = -(pageY - cameraPosTouch.pageY) / 18,
              touch_movementX = abs(touch_movementX) < .35 ? 0 : .8 * touch_movementX,
              touch_movementY = abs(touch_movementY) < .35 ? 0 : .8 * touch_movementY);
        }
      }
    },
    hC.ontouchend = e => {
      for (
        const touch of e.changedTouches
      ) {
        touch.identifier === cameraRotTouch?.identifier && (cameraRotTouch = void 0),
          touch.identifier === cameraPosTouch?.identifier
          && (cameraPosTouch = void 0, touch_movementY = touch_movementX = 0);
      }

      e.preventDefault();
      const diff = absoluteTime - touchStartTime;
      (!touchStartTime || .02 < diff && diff < .4) && (keyboard_downKeys[5] = !0);
    },
    oncontextmenu = () => !1,
    handleResize(),
    setMainMenuVisible(!0);
};

const lerpDamp = (from, to, speed) => lerp(from, to, 1 - Math.exp(-speed * gameTimeDelta));

const LOCAL_STORAGE_SAVED_GAME_KEY = "DanteSP22";

const getItemValue = ({
  $value,
}) => $value;

const levers = [];
const souls = [];

const showMessage = (message, duration) => {
  game_completed || (h4.innerHTML = message, _messageEndTime = gameTime + duration);
};

const clearMessage = () => {
  h4.innerHTML = "", _messageEndTime = 0;
};

const updateCollectedSoulsCounter = () => {
  souls_collected_count = souls.reduce((acc, cur) => acc + cur.$value, 0),
    h3.innerHTML = " "
      + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][souls_collected_count];
};

const saveGame = () => {
  updateCollectedSoulsCounter(),
    localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
      levers.map(getItemValue),
      souls.map(getItemValue),
      player_last_pulled_lever,
      gameTime,
      secondBoatLerp,
    ]);
};

const player_position_final = {
  x: 0,
  y: 0,
  z: 0,
};

const newLever = transform => {
  withEditMatrix(transform, () => {
    newModel($model => {
      const lever = {
        $value: 0,
        $lerpValue: 0,
        $lerpValue2: 0,
        $model: $model,
      };
      const index2 = levers.push(lever) - 1;

      $model._update = () => {
        let leverIndex;
        const {
          $value,
          $lerpValue,
          $lerpValue2,
        } = lever;
        const point = (lever.$matrix = $model.$finalMatrix).transformPoint();
        const cameraDistance = vec3_distance(point, camera_position);
        return vec3_distance(point, player_position_final) < 2.9 && keyboard_downKeys[5]
          && ($lerpValue < .3 || .7 < $lerpValue)
          && (lever.$value = $value ? 0 : 1,
            (leverIndex = index2) && showMessage("* click *", 1),
            player_last_pulled_lever = leverIndex,
            saveGame()),
          lever.$lerpValue = lerpDamp($lerpValue, $value, 4),
          lever.$lerpValue2 = lerpDamp($lerpValue2, $value, 1),
          $model.$skipShadow = 80 < vec3_distance(point, camera_position),
          $model.$visible = cameraDistance < 150,
          $model.$mesh = leverMeshes[.5 < $lerpValue ? 1 : 0],
          identity.rotate(60 * lever.$lerpValue - 30, 0).translateSelf(0, 1);
      };
    }),
      meshAdd(cylinder(5), identity.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), material(.4, .5, .5)),
      meshAdd(cylinder(5), identity.translate(.2).rotate(90, 90).scale(.4, .1, .5), material(.4, .5, .5)),
      meshAdd(cylinder(GQuad), identity.translate(0, -0.4).scale(.5, .1, .5), material(.5, .5, .4));
  });
};

const newSoul = (transform, ...walkingPath) => {
  withEditMatrix(transform, () => {
    let dirX = -1;
    let dirZ = 0;
    let wasInside = 1;
    let randAngle = 0;
    let lookAngle = 0;
    let velocity = 3;
    let prevX = 0;
    let prevZ = 0;
    const soul = {
      $value: 0,
    };
    const circles = walkingPath.map(([x, z, w]) => ({
      x: x,
      z: z,
      w: w,
    }));
    let circle = circles[0];
    let {
      x: targetX,
      z: targetZ,
    } = circle;
    let soulX = targetX;
    let soulZ = targetZ;
    souls.push(soul),
      newModel(model => (model._update = () => {
        let contextualVelocity = 1;
        let mindist = 1 / 0;
        let isInside;

        for (const c of circles) {
          const {
            x,
            z,
            w,
          } = c;
          const distance = Math.hypot(targetX - x, targetZ - z);
          const circleSDF = distance - w;
          isInside ||= distance < w,
            0 < circleSDF && mindist > circleSDF && (mindist = circleSDF, circle = c),
            contextualVelocity = min(contextualVelocity, distance / w);
        }

        if (!isInside) {
          const {
            x: x1,
            z: z1,
            w: w1,
          } = circle;
          const ax = targetX - x1;
          const az = targetZ - z1;
          let magnitude = Math.hypot(ax, az);
          let angle = Math.atan2(-az, ax);
          wasInside
          && (randAngle = (Math.random() - .5) * Math.PI / 2, velocity = max(1, velocity / (1 + Math.random()))),
            angle += randAngle,
            dirX = -Math.cos(angle),
            dirZ = Math.sin(angle),
            .1 < magnitude
            && (magnitude = min(magnitude, w1) / (magnitude || 1),
              targetX = ax * magnitude + x1,
              targetZ = az * magnitude + z1);
        }

        wasInside = isInside,
          velocity = lerpDamp(velocity, 3 + 6 * (1 - contextualVelocity), 3 + contextualVelocity),
          targetX = lerpDamp(targetX, targetX + dirX, velocity),
          targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity),
          soulX = lerpDamp(soulX, targetX, velocity),
          soulZ = lerpDamp(soulZ, targetZ, velocity),
          lookAngle = angle_lerp_degrees(
            lookAngle,
            Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180,
            3 * gameTimeDelta,
          ),
          prevX = soulX,
          prevZ = soulZ;
        const animationMatrix = identity.translate(soulX, 0, soulZ).rotateSelf(0, lookAngle).skewXSelf(
          7 * Math.sin(2 * gameTime),
        ).skewYSelf(7 * Math.sin(1.4 * gameTime));
        const soulPos = model.$finalMatrix.multiply(animationMatrix).transformPoint();
        return model.$visible = 1 - soul.$value,
          model.$skipShadow = 100 < vec3_distance(soulPos, camera_position),
          !soul.$value && vec3_distance(soulPos, player_position_final) < 1.5
          && (soul.$value = 1,
            showMessage(
              [
                ,
                "Mark Zuckemberg<br>made the world worse",
                ,
                "Andrzej Mazur<br>for the js13k competition",
                "Donald Trump<br>lies",
                "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                "Maxime Euziere<br>forced me to finish this game",
                "She traded NFTs apes",
                ,
                "Vladimir Putin<br>evil, war",
                "He was NOT a good person",
                ,
                "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
              ][souls_collected_count] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              souls_collected_count && souls_collected_count < 12 ? 5 : 7,
            ),
            saveGame()),
          animationMatrix;
      },
        soulMesh)
      );
  });
};

const buildWorld = () => {
  let _modelIdCounter = 3;

  const getBoatAnimationMatrix = z =>
    identity.translate(Math.sin(gameTime + 2) / 5, Math.sin(.8 * gameTime) / 3, z).rotateSelf(
      2 * Math.sin(gameTime),
      Math.sin(.7 * gameTime),
      Math.sin(.9 * gameTime),
    );

  const bigArc = csg_polygons(
    csg_subtract(
      polygons_transform(cylinder(GQuad), identity.translate(0, -8).scale(6, 15, 2.2)),
      polygons_transform(cylinder(GQuad), identity.translate(0, -14.1).scale(4, 13, 4)),
      polygons_transform(cylinder(20, 1), identity.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  );
  const boatPolygons = csg_polygons(
    csg_subtract(
      polygons_transform(
        cylinder(20, 1, 1.15, 1),
        identity.translate(0, -3).scale(3.5, 1, 3.5),
        material(.7, .4, .25, .7),
      ),
      polygons_transform(
        cylinder(20, 1, 1.3, 1),
        identity.translate(0, -2.5).scale(2.6, 1, 3),
        material(.7, .4, .25, .2),
      ),
      polygons_transform(cylinder(GQuad), identity.translate(4, -1.2).scale3d(2), material(.7, .4, .25, .3)),
    ),
  );
  const entranceBarsMesh = (integers_map(
    7,
    i => meshAdd(cylinder(6, 1), identity.translate(4 * (i / 6 - .5), 3).scale(.2, 3, .2), material(.3, .3, .38)),
  ),
    meshEnd());
  withEditMatrix(identity.translate(-12, 4.2, -66), () => {
    newModel(model => {
      model._update = () => getBoatAnimationMatrix(40 * firstBoatLerp),
        newLever(identity.translate(0, -3, 4)),
        meshAdd(boatPolygons),
        integers_map(13, i => {
          withEditMatrix(identity.translate(i % 4 * 1.2 - 1.7, -2, 1.7 * (i / 4 | 0) - 5.5 + abs(i % 4 - 2)), () =>
            newModel(capturedSoulModel => (capturedSoulModel._update = () => {
              if (
                capturedSoulModel.$skipShadow = 60
                  < Math.hypot(
                    camera_position.x + 11,
                    camera_position.y - 4,
                    camera_position.z + 27 - 40 * firstBoatLerp,
                  ), capturedSoulModel.$visible = souls_collected_count > 12 - i
              ) {
                return identity.translate(Math.sin(gameTime + i) / 6, 0, Math.cos(gameTime / 1.5 + i) / 6);
              }
            },
              soulMesh)
            ));
        });
    }, ++_modelIdCounter);
  }),
    meshAdd(cylinder(GQuad), identity.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), material(.8, .8, .8, .2)),
    newSoul(identity.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
    newSoul(
      identity.translate(0, 2.8),
      [5, 10, 3],
      [-5, 10, 3],
      ...polygon_regular(18).map(({
        x,
        z,
      }) => [7 * x, 10 * z, 4.5 - 2 * abs(x)]),
    ),
    GQuad.map(({
      x,
      z,
    }) => meshAdd(cylinder(6), identity.translate(3 * x, 3, 15 * z).scale(.7, 4, .7), material(.6, .3, .3, .4))),
    [-23, 22].map(z => meshAdd(cylinder(GQuad), identity.translate(0, 0, z).scale(3, 1, 8), material(.9, .9, .9, .2))),
    [-15, 15].map((z, i) => {
      meshAdd(cylinder(GQuad), identity.translate(0, 6.3, z).scale(4, .3, 1), material(.3, .3, .3, .4)),
        meshAdd(cylinder(GQuad), identity.translate(0, 1, z).scale(3, .2, .35), material(.3, .3, .38, .2)),
        withEditMatrix(identity.translate(0, 0, z), () =>
          newModel(model => (model._update = () => {
            const v = levers[i + 1].$lerpValue;
            return model.$visible = v < .99, identity.translate(0, 5 * -v);
          },
            entranceBarsMesh)
          ));
    }),
    integers_map(5, i =>
      integers_map(2, j =>
        meshAdd(
          GHorn,
          identity.translate(18.5 * (j - .5), 0, 4.8 * i - 9.5).rotate(0, 180 - 180 * j).scale(1.2, 10, 1.2),
          material(1, 1, .8, .2),
        ))),
    meshAdd(cylinder(GQuad), identity.translate(3, 1.5, -20).scale(.5, 2, 5), material(.7, .7, .7, .2)),
    meshAdd(
      cylinder(GQuad),
      identity.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90),
      material(.75, .75, .75, .2),
    ),
    meshAdd(cylinder(5), identity.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), material(.6, .3, .3, .4)),
    newLever(identity.translate(-5.4, 1.5, -19).rotate(0, -90)),
    meshAdd(
      cylinder(GQuad),
      identity.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5),
      material(.8, .2, .2, .5),
    ),
    meshAdd(
      csg_polygons(
        csg_subtract(
          csg_union(
            polygons_transform(
              cylinder(6, 0, 0, .3),
              identity.translate(8, -3, -4).scale(13, 1, 13),
              material(.7, .7, .7, .2),
            ),
            polygons_transform(cylinder(6), identity.translate(0, -8).scale(9, 8, 8), material(.4, .2, .5, .5)),
            polygons_transform(
              cylinder(6, 0, 0, .3),
              identity.translate(0, -0.92).scale(13, 2, 13),
              material(.8, .8, .8, .2),
            ),
          ),
          polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(.4, .2, .6, .5)),
          polygons_transform(
            cylinder(5, 0, 1.5),
            identity.translate(0, 1).scale(4.5, .3, 4.5),
            material(.7, .5, .9, .2),
          ),
          polygons_transform(
            cylinder(GQuad),
            identity.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2),
            material(.5, .5, .5, .5),
          ),
          polygons_transform(cylinder(6), identity.translate(15, -1.5, 4).scale(3.5, 1, 3.5), material(.5, .5, .5, .5)),
        ),
      ),
    ),
    newModel(model => {
      newLever(identity.translate(0, 1.2)),
        model._update = () => (model.$visible = .01 < levers[3].$lerpValue,
          identity.translate(
            0,
            (5 * Math.cos(1.5 * gameTime) + 2) * levers[3].$lerpValue2 * (1 - levers[2].$lerpValue)
              + -15 * (1 - levers[3].$lerpValue),
            0,
          )),
        meshAdd(cylinder(5), identity.translate(0, -0.2).scale(5, 1, 5), material(.6, .65, .7, .3));
    }, ++_modelIdCounter),
    newLever(identity.translate(15, -2, 4)),
    withEditMatrix(identity.translate(0, 0, 75), () => {
      const getOscillationAmount = () => min(levers[2].$lerpValue2, 1 - levers[4].$lerpValue2);

      const blackPlatform = (freq, amplitude) =>
        newModel(model => {
          model._update = () =>
            identity.translate(getOscillationAmount() * Math.sin(3 * freq + gameTime * freq) * amplitude),
            GQuad.map(({
              x,
              z,
            }) => {
              meshAdd(
                cylinder(11, 1),
                identity.translate(4 * x, 4, 4 * z - 40).scale(.8, 3, .8),
                material(.5, .3, .7, .6),
              ),
                meshAdd(
                  cylinder(GQuad),
                  identity.translate(4 * x, 7, 4 * z - 40).scale(1, .3),
                  material(.5, .5, .5, .3),
                );
            }),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  polygons_transform(
                    cylinder(GQuad),
                    identity.translate(0, 0, -40).scale(5, 1, 5),
                    material(.8, .8, .8, .3),
                  ),
                  ...[-1, 1].map(i =>
                    polygons_transform(
                      cylinder(GQuad),
                      identity.translate(5 * i, .2, -40).rotate(0, 0, -30 * i).scale(4, 1, 2),
                      material(.8, .8, .8, .3),
                    )
                  ),
                ),
              ),
            ),
            meshAdd(cylinder(GQuad), identity.translate(0, -3, -40).scale(8, 2, 8), material(.4, .4, .4, .3));
        }, ++_modelIdCounter);

      const level3Oscillation = () =>
        clamp01(1 - 5 * getOscillationAmount()) * lerpneg(levers[4].$lerpValue, levers[5].$lerpValue);

      const hexCorridorPolygons = (blackPlatform(.7, 12),
        withEditMatrix(identity.translate(0, 0, 20), () => blackPlatform(1, 8.2)),
        newModel(model => {
          withEditMatrix(identity.translate(0, 0, -30), () => {
            model._update = () => identity.translate(getOscillationAmount() * Math.sin(gameTime / 1.5 + 2) * 12),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    csg_union(
                      polygons_transform(cylinder(GQuad), identity.scale(1.5, 1, 5), material(.9, .9, .9, .2)),
                      polygons_transform(cylinder(6), identity.scale(4, 1, 5), material(.9, .9, .9, .2)),
                      polygons_transform(
                        cylinder(GQuad),
                        identity.translate(0, -2).scale(2, 3.2, 1.9),
                        material(.3, .8, .5, .5),
                      ),
                      polygons_transform(
                        cylinder(16, 1, 0, 4),
                        identity.scale(1, 1, 1.5).rotate(0, 90),
                        material(.9, .9, .9, .2),
                      ),
                    ),
                    polygons_transform(cylinder(GQuad), identity.scale(1.3, 10, 1.3), material(.2, .7, .4, .6)),
                  ),
                ),
              ),
              newSoul(identity.translate(0, 2.8), [0, 0, 4.5]);
          });
        }, ++_modelIdCounter),
        newModel(model => {
          model._update = () => identity.translate(9.8 * (1 - getOscillationAmount())),
            meshAdd(cylinder(3), identity.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), material(.3, .6, .6, .2)),
            meshAdd(cylinder(8), identity.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), material(.8, .8, .8, .2)),
            meshAdd(cylinder(GQuad), identity.translate(-23, -3, -20).scale(5.2, 1.7, 3), material(.5, .5, .5, .3)),
            meshAdd(cylinder(GQuad), identity.translate(-23, -2.2, -13).scale(3, 1, 4), material(.5, .5, .5, .3)),
            newLever(identity.translate(-23, -0.5, -8.5));
        }, ++_modelIdCounter),
        meshAdd(cylinder(GQuad), identity.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), material(.9, .9, .9, .2)),
        newModel(model => {
          model._update = () =>
            identity.translate(0, level3Oscillation() * Math.sin(1.35 * gameTime) * 4),
            meshAdd(
              cylinder(GQuad),
              identity.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7),
              material(.7, .7, .7, .2),
            ),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  polygons_transform(cylinder(GQuad), identity.scale(3, 1.4, 2.7)),
                  polygons_transform(cylinder(GQuad), identity.scale(1.2, 8, 1.2)),
                ),
              ),
              identity.translate(-33, -3, -20),
              material(.7, .7, .7, .2),
            );
        }, ++_modelIdCounter),
        newModel(model => {
          model._update = () => identity.translate(0, 0, level3Oscillation() * Math.sin(.9 * gameTime) * 8),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  polygons_transform(
                    cylinder(GQuad),
                    identity.translate(-27, -3, -20).scale(3, 1.4, 2.7),
                    material(.9, .9, .9, .2),
                  ),
                  polygons_transform(
                    cylinder(GQuad),
                    identity.translate(-27, -3, -20).scale(1, 3),
                    material(.9, .9, .9, .2),
                  ),
                ),
              ),
            ),
            meshAdd(cylinder(GQuad), identity.translate(-39, -3, -20).scale(3, 1.4, 2.7), material(.9, .9, .9, .2));
        }, ++_modelIdCounter),
        withEditMatrix(identity.translate(-44.5, 0, -20), () =>
          newModel(model => {
            model._update = () => identity.translate(0, -6.5 * levers[4].$lerpValue2),
              meshAdd(cylinder(6), identity.rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), material(.7, .7, .7, .4));
          })),
        [...polygons_transform(
          csg_polygons(
            csg_union(
              polygons_transform(
                cylinder(GQuad),
                identity.translate(0, -3).scale(11, 1.4, 3),
                material(.9, .9, .9, .2),
              ),
              csg_subtract(
                polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(6, 8, 6), material(.3, .6, .6, .3)),
                polygons_transform(
                  cylinder(4, 0, .01),
                  identity.translate(0, 6).scale(12, 2, .75).rotate(0, 45),
                  material(.3, .6, .6, .3),
                ),
                polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(5, 12, 5), material(.3, .6, .6, .3)),
                ...[5, 0, -5].map(x =>
                  polygons_transform(
                    cylinder(5),
                    identity.translate(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8),
                    material(.3, .6, .6, .3),
                  )
                ),
              ),
            ),
          ),
          identity,
        )]);
      meshAdd(hexCorridorPolygons, identity.translate(-53, 0, -20)),
        meshAdd(cylinder(6), identity.translate(-61.3, -2.4, -26).scale(3, 1, 5), material(.4, .6, .6, .3)),
        meshAdd(cylinder(7), identity.translate(-57, -2.6, -29).scale(4, 1, 4), material(.8, .8, .8, .3)),
        newLever(identity.translate(-55, -1.1, -29).rotate(0, 90)),
        withEditMatrix(identity.translate(-75, 0, -20), () =>
          newModel(model => {
            model._update = () =>
              identity.translate(0, (1 - levers[5].$lerpValue2) * (1 - levers[6].$lerpValue) * 3).rotate(
                180 * (1 - levers[5].$lerpValue2) + rotatingHexCorridorRotation,
                0,
              ), meshAdd(hexCorridorPolygons);
          })),
        meshAdd(
          cylinder(GQuad),
          identity.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5),
          material(.7, .7, .7, .2),
        ),
        meshAdd(
          cylinder(3, 0, -0.5),
          identity.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9),
          material(.8, .8, .8, .2),
        ),
        newSoul(identity.translate(-100, .2, -20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
        meshAdd(
          csg_polygons(
            csg_subtract(
              csg_union(
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(-100, -2.5, -20).scale(8, 1, 8),
                  material(.8, .8, .8, .2),
                ),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3),
                  material(.8, .8, .8, .2),
                ),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(-100, -2.6, -5).scale(3, 1.1, 7),
                  material(.8, .8, .8, .2),
                ),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5),
                  material(.8, .8, .8, .2),
                ),
                polygons_transform(
                  cylinder(6),
                  identity.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15),
                  material(.6, .6, .6, .3),
                ),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6),
                  material(.8, .8, .8, .2),
                ),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(-100, .42, 17).scale(3, 1.1, 4.1),
                  material(.8, .8, .8, .2),
                ),
              ),
              polygons_transform(
                cylinder(8),
                identity.translate(-100, -1, -20).scale(7, .9, 7),
                material(.3, .3, .3, .4),
              ),
              polygons_transform(
                cylinder(8),
                identity.translate(-100, -2, -20).scale(4, .3, 4),
                material(.4, .4, .4, .5),
              ),
              polygons_transform(
                cylinder(8),
                identity.translate(-100, -3, -20).scale(.6, 1, .6),
                material(.4, .4, .4, .5),
              ),
            ),
          ),
          identity,
        ),
        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(
                cylinder(GQuad),
                identity.translate(-100, 1, -12).scale(7.5, 4),
                material(.5, .5, .5, .4),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(-100, 0, -5).scale(2, 2, 10),
                material(.5, .5, .5, .4),
              ),
              polygons_transform(
                cylinder(20, 1),
                identity.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0),
                material(.5, .5, .5, .4),
              ),
            ),
          ),
        ),
        newSoul(identity.translate(-89, .2, 5), [0, 0, 6]),
        withEditMatrix(
          identity.translate(-99.7, -2, -11.5),
          () => newModel(
            model => (model._update = () => identity.translate(0, 5.3 * -levers[6].$lerpValue), entranceBarsMesh),
          ),
        ),
        GQuad.map(({
          x,
          z,
        }) => {
          meshAdd(
            cylinder(6),
            identity.translate(7 * x - 100, -3, 7 * z - 20).scale(1, 8.1),
            material(.6, .15, .15, .8),
          ),
            [4, -0.4].map(i =>
              meshAdd(
                cylinder(6),
                identity.translate(7 * x - 100, i, 7 * z - 20).scale(1.3, .5, 1.3),
                material(.4, .2, .2, .8),
              )
            );
        }),
        integers_map(7, i => {
          meshAdd(
            cylinder((23 * i + 1) % 5 + 5, 0, .55),
            identity.translate(5 * Math.sin(i) - 101 + i, -2.3 - i, -30.1 - 2.8 * i).scaleSelf(
              5 + i / 2,
              1 + i / 6,
              5 + i / 3,
            ),
            material(.5 - i / 17, .5 - (1 & i) / 9, .6, .3),
          );
        }),
        meshAdd(cylinder(GQuad), identity.translate(-87, -9.5, -51).scale(7, 1, 3), material(.4, .5, .6, .4)),
        meshAdd(cylinder(4), identity.translate(-86, -9.2, -48).scale(5, 1, 5), material(.5, .6, .7, .3)),
        meshAdd(cylinder(18, 1), identity.translate(-86, -9, -44).scale(1.5, 1, 1.5), material(.3, .3, .4, .1)),
        newLever(identity.translate(-86, -7.5, -44)),
        withEditMatrix(identity.translate(-76.9, -10, -51), () => {
          const shouldOscillate = () => lerpneg(levers[7].$lerpValue2, levers[6].$lerpValue2);

          newModel(model => {
            model._update = () => {
              const osc = shouldOscillate();
              return identity.translate(
                0,
                3.5 * (1 - max(levers[6].$lerpValue, levers[7].$lerpValue)) + osc * Math.sin(gameTime) * 5,
              );
            },
              [0, 12, 24].map(x =>
                meshAdd(cylinder(GQuad), identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(.2, .5, .6, .2))
              );
          }, ++_modelIdCounter),
            newModel(model => {
              model._update = () => {
                const osc = shouldOscillate();
                return identity.translate(0, osc * Math.sin(gameTime + 3) * 6, 6 * Math.sin(.6 * gameTime + osc) * osc);
              },
                [6, 18].map(x =>
                  meshAdd(cylinder(GQuad), identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(.1, .4, .5, .2))
                );
            }, ++_modelIdCounter);
        }),
        withEditMatrix(identity.translate(-38.9, -11.3, -58), () => {
          meshAdd(
            csg_polygons(
              csg_subtract(
                csg_union(
                  polygons_transform(cylinder(GQuad), identity.scale(11, 1, 13), material(.3, .4, .6, .3)),
                  polygons_transform(
                    cylinder(5),
                    identity.translate(0, 0, -7).scale(2, 1.2, 2),
                    material(.2, .4, .7, .3),
                  ),
                  polygons_transform(cylinder(5), identity.scale(9, 1.2, 9), material(0, .2, .3, .5)),
                ),
                polygons_transform(cylinder(5), identity.scale(5.4, 5, 5.4), material(0, .2, .3, .5)),
              ),
            ),
          ),
            newLever(identity.translate(0, 1.7, -7)),
            newModel(model => {
              model._update = () => identity.translate(0, -7.3 * levers[7].$lerpValue2),
                newSoul(
                  identity.translate(0, 11).rotate(0, 0, 10),
                  ...polygon_regular(15).map(({
                    x,
                    z,
                  }) => [3 * x, 3 * z, 1.5]),
                ),
                meshAdd(
                  csg_polygons(
                    csg_subtract(
                      csg_union(
                        polygons_transform(
                          cylinder(5),
                          identity.translate(0, 2).scale(5, 7, 5).skewY(8),
                          material(.2, .4, .5, .5),
                        ),
                        polygons_transform(
                          cylinder(5),
                          identity.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8),
                          material(.25, .35, .5, .5),
                        ),
                        polygons_transform(
                          cylinder(5),
                          identity.translate(0, 9).scale(.6, 7, .6).skewY(8),
                          material(.35, .3, .5, .5),
                        ),
                      ),
                      polygons_transform(
                        cylinder(5),
                        identity.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35),
                        material(.2, .4, .5, .5),
                      ),
                    ),
                  ),
                );
            }),
            GQuad.map(({
              x,
              z,
            }) => {
              meshAdd(cylinder(18, 1), identity.translate(9 * x, 4, 11 * z).scale(1, 4), material(.25, .25, .25, 1)),
                [1.5, 8].map(y =>
                  meshAdd(
                    cylinder(18, 1),
                    identity.translate(9 * x, y, 11 * z).scale(1.5, .5, 1.5),
                    material(.6, .6, .6, .3),
                  )
                );
            }),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  csg_union(
                    polygons_transform(
                      cylinder(6),
                      identity.translate(0, 0, -36).scale(15, 1.2, 15),
                      material(.7, .7, .7, .3),
                    ),
                    polygons_transform(
                      cylinder(GQuad),
                      identity.translate(0, 0, -18).scale(4, 1.2, 6),
                      material(.45, .4, .6, .3),
                    ),
                  ),
                  ...integers_map(6, z =>
                    integers_map(6, x =>
                      polygons_transform(
                        cylinder(6),
                        identity.translate(4.6 * x - 12 + 2 * (1 & z), 0, 4.6 * z - 50 + 2 * Math.sin(4 * x)).scale(
                          2,
                          5,
                          2,
                        ),
                        material(.7, .7, .7, .3),
                      ))).flat(),
                ),
              ),
            ),
            newSoul(identity.translate(0, 2.9, -38), [0, 0, 12]);
        }),
        meshAdd(cylinder(5), identity.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), material(.8, .1, .25, .4)),
        newLever(identity.translate(-84, -0.5, 10).rotate(0, 45));
    }),
    withEditMatrix(identity.translate(-123, 1.4, 55), () => {
      newModel(model => {
        model._update = () => getBoatAnimationMatrix(-65 * secondBoatLerp),
          newLever(identity.translate(0, -3, -4).rotate(0, 180)),
          meshAdd(boatPolygons);
      }, ++_modelIdCounter);
    }),
    withEditMatrix(identity.translate(-123, 0, -12), () => {
      const shouldPushRods = () => lerpneg(levers[10].$lerpValue, levers[11].$lerpValue);

      const pushingRod = csg_polygons(
        csg_subtract(
          polygons_transform(
            cylinder(GQuad),
            identity.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5),
            material(.25, .25, .35, .3),
          ),
          polygons_transform(cylinder(3), identity.translate(0, 0, -5.5).scale(3, 2), material(.6, .3, .4, .3)),
          ...[-1.2, 1.2].map(i =>
            polygons_transform(
              cylinder(GQuad),
              identity.translate(i, -0.5, 1).scale(.14, .3, 6.5),
              material(.7, .2, 0, .3),
            )
          ),
        ),
      );
      meshAdd(cylinder(GQuad), identity.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), material(.8, .8, .8, .2)),
        meshAdd(cylinder(6), identity.translate(7, -2.6, -4.5).scale(3.2, .8, 3), material(.6, .5, .7, .2)),
        newLever(identity.translate(7, -1.4, -6).rotate(0, 180)),
        newSoul(identity.translate(8, .2), [0, 0, 3.5]),
        integers_map(3, i => meshAdd(bigArc, identity.translate(12 * i + 14, -9), material(.6, .6, .6, .3))),
        integers_map(3, i =>
          meshAdd(bigArc, identity.translate(46, -9, -12 * i - 8).rotate(0, 90), material(.6, .6, .6, .3))),
        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(
                cylinder(12),
                identity.translate(46, -13.9).scale(4, 18.2, 4),
                material(.7, .7, .7, .2),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(44).scale(3.5, 2.2, 1.3),
                material(.4, .5, .6, .2),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(46, 0, -2).scale(1.5, 2.2, 2),
                material(.4, .5, .6, .2),
              ),
              polygons_transform(cylinder(12), identity.translate(46, 2.8).scale(3, 5, 3), material(.4, .5, .6, .2)),
            ),
          ),
        ),
        meshAdd(cylinder(GQuad), identity.translate(7.5, -17).scale(.5, 15, 2.2), material(.6, .6, .6, .3)),
        meshAdd(cylinder(GQuad), identity.translate(46, -17, -38.5).scale(2.2, 15, .5), material(.6, .6, .6, .3)),
        meshAdd(
          csg_polygons(
            csg_subtract(
              csg_union(
                polygons_transform(cylinder(GQuad), identity.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                polygons_transform(cylinder(GQuad), identity.translate(26.5, -0.6, 10).scale(17, 2, .5)),
              ),
              ...integers_map(4, x =>
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(13 + 9 * x + (1 & x), -0.8, 9).scale(1.35, 1.35, 9),
                )),
              ...integers_map(
                3,
                x => polygons_transform(cylinder(GQuad), identity.translate(17 + 9 * x, -0.8, 9).scale(1.35, 1.35, 9)),
              ),
            ),
          ),
          identity,
          material(.5, .5, .6, .2),
        ),
        meshAdd(
          cylinder(5),
          identity.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5),
          material(.25, .25, .35, 1),
        ),
        newModel(model => {
          model._update = () => identity.translate(0, -2, shouldPushRods() * abs(Math.sin(1.1 * gameTime)) * -8.5 + 10),
            integers_map(2, x => meshAdd(pushingRod, identity.translate(13 + 9 * x + (1 & x), 1.7)));
        }),
        newModel(model => {
          model._update = () => identity.translate(0, -2, shouldPushRods() * abs(Math.sin(2.1 * gameTime)) * -8.5 + 10),
            integers_map(2, x => meshAdd(pushingRod, identity.translate(13 + 9 * (x + 2) + (1 & x), 1.7)));
        }),
        newModel(model => {
          model._update = () =>
            identity.translate(
              0,
              -2,
              -8.5
                  * max(
                    (1 - levers[10].$lerpValue) * (1 - shouldPushRods()),
                    shouldPushRods() * abs(Math.sin(1.5 * gameTime)),
                  ) + 10,
            ), integers_map(3, x => meshAdd(pushingRod, identity.translate(17 + 9 * x, 1.7)));
        }),
        meshAdd(
          cylinder(GQuad),
          identity.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3),
          material(.6, .6, .6, .3),
        ),
        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(
                cylinder(GQuad),
                identity.translate(30, -5.8, -28).scale(9, 1, 5),
                material(.8, .8, .8, .1),
              ),
              polygons_transform(
                cylinder(9),
                identity.translate(25, -5.8, -28).scale(3, 8, 3),
                material(.7, .7, .7, .2),
              ),
            ),
          ),
        ),
        newSoul(identity.translate(30, -3, -28).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
        meshAdd(cylinder(9), identity.translate(25, -5.8, -28).scale(2.5, .9, 2.5), material(.5, .5, .5, .3)),
        newLever(identity.translate(25, -4.4, -28).rotate(0, 90));
    }),
    withEditMatrix(identity.translate(-100, .7, 115), () => {
      const hexPadShouldOscillate = () => lerpneg(levers[8].$lerpValue2, levers[12].$lerpValue2);

      const rotPlatformBase = (meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union(
              polygons_transform(
                cylinder(6, 0, 0, .6),
                identity.translate(0, 0, -9.5).scale(8, 1, 11),
                material(.7, .7, .7, .2),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(-1.5, 0, -21.5).scale(10.5, 1, 2),
                material(.7, .7, .7, .2),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(8.8, 0, -8).scale(3, 1, 3.3),
                material(.7, .7, .7, .2),
              ),
            ),
            polygons_transform(cylinder(5), identity.translate(0, 0, -2).scale(4, 3, 4), material(.7, .7, .7, .2)),
          ),
        ),
      ),
        integers_map(4, i =>
          newModel(model => {
            model._update = () => {
              model.$visible = levers[1].$value && levers[2].$value;
              const osc = hexPadShouldOscillate();
              return identity.translate(
                2 < i ? 2 * (1 - osc) + osc : 0,
                osc * Math.sin(1.3 * gameTime + 1.7 * i) * (3 + i / 3),
                (1 & i ? -1 : 1) * (1 - levers[8].$lerpValue2) * (1 - levers[12].$lerpValue2) * -7
                  + max(.05, osc) * Math.cos(1.3 * gameTime + 7 * i) * (4 - 2 * (1 - i / 3)),
              );
            },
              meshAdd(
                cylinder(6),
                identity.translate(-14.6 - 4.8 * i - (2 < i ? 2 : 0), -i / 2.3, -21.5).scale(2.6, 1, 2.5),
                material(.5 - i / 8, i / 12 + .5, .7, .3),
              );
          }, ++_modelIdCounter)),
        withEditMatrix(identity.translate(-39.7, -2.5, -21.5), () => {
          newModel(model => {
            model._update = () => {
              model.$visible = levers[1].$value && levers[2].$value;
              const osc = hexPadShouldOscillate();
              return identity.translate(
                2.5 * (1 - osc),
                -3 * (1 - levers[8].$lerpValue) + osc * Math.sin(.8 * gameTime) * -1,
              ).rotateSelf(Math.cos(1.3 * gameTime) * (3 * osc + 3), 0);
            },
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(.1, .6, .5, .3)),
                    polygons_transform(cylinder(10), identity.scale(3.3, 6, 3.3), material(.1, .6, .5, .5)),
                  ),
                ),
              ),
              withEditMatrix(identity.translate(-7.5).rotate(0, 90), () => {
                meshAdd(cylinder(15), identity.scale(3, 2.3, 3), material(.4, .4, .4, .3)),
                  meshAdd(cylinder(10), identity.scale(2, 2.5, 2), material(.3, .8, .7, .3)),
                  meshAdd(cylinder(5), identity.scale(1, 3), material(.5, .5, .5, .5)),
                  newLever(identity.translate(0, 3.4).rotate(0, 180));
              }),
              newSoul(identity.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
              [-1, 1].map(i =>
                meshAdd(
                  GHorn,
                  identity.rotate(90 * -i, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                  material(1, 1, .8, .2),
                )
              );
          }, ++_modelIdCounter);
        }),
        [-1, 1].map(x => {
          meshAdd(cylinder(15, 1), identity.translate(-7.5 * x, 3, -19).scale(.8, 4, .8), material(.6, .24, .2, .5)),
            [7.2, 1.5].map(y =>
              meshAdd(
                cylinder(15, 1),
                identity.translate(-7.5 * x, y, -19).scale(1.1, .5, 1.1),
                material(.5, .24, .2, .4),
              )
            ),
            meshAdd(
              GHorn,
              identity.translate(-5 * x, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * x - 90),
              material(1, 1, .8),
            ),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  polygons_transform(
                    cylinder(GQuad),
                    identity.translate(-4 * x, 3.5, -0.5).scale(4, 4, .7),
                    material(.5, .5, .5, .4),
                  ),
                  polygons_transform(cylinder(GQuad), identity.scale(3, 3, 10), material(.6, .24, .2, .5)),
                  polygons_transform(
                    cylinder(30, 1),
                    identity.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0),
                    material(.6, .24, .2, .5),
                  ),
                  polygons_transform(
                    cylinder(5),
                    identity.translate(-5.3 * x, 7).rotate(90, 0).scale(1.7, 5, 1.7),
                    material(.6, .24, .2, .5),
                  ),
                  polygons_transform(
                    cylinder(5),
                    identity.translate(-5.3 * x, 3.8).rotate(90, 0, 35).scale(.75, 5, .75),
                    material(.6, .24, .2, .5),
                  ),
                ),
              ),
              identity.translate(x, 0, -18),
            );
        }),
        newModel(
          model => (model._update = () =>
            identity.translate(0, -0.1 - 6 * levers[12].$lerpValue, -18.5).scale(.88, 1.2),
            entranceBarsMesh),
        ),
        [
          ...polygons_transform(cylinder(28, 1), identity.scale(8, 1, 8), material(.45, .45, .45, .2)),
          ...polygons_transform(cylinder(5), identity.translate(0, 1).scale(1, .2), material(.3, .3, .3, .2)),
        ]);
      withEditMatrix(identity.translate(20, .3, -9), () => {
        newModel(model => {
          model._update = () => identity.rotate(0, 40 + rotatingPlatform1Rotation),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  polygons_transform(cylinder(28, 1), identity.scale(8, 1, 8), material(.45, .45, .45, .2)),
                  polygons_transform(
                    cylinder(GQuad),
                    identity.translate(0, 0, -5.5).scale(1.5, 3, 2.5),
                    material(.45, .45, .45, .2),
                  ),
                ),
              ),
            ),
            meshAdd(cylinder(8), identity.translate(0, 2).scale(3, 1.5, 3), material(.7, .7, .7, .1)),
            meshAdd(cylinder(5), identity.translate(0, 2).scale(1, 2), material(.3, .3, .3, .2)),
            newSoul(
              identity.translate(0, 3),
              ...polygon_regular(10).map(({
                x,
                z,
              }) => [5.6 * x, 5.6 * z, 2.5]),
            );
        }, ++_modelIdCounter);
      }),
        withEditMatrix(identity.translate(36, .3, -9), () => {
          meshAdd(cylinder(GQuad), identity.translate(8).scale(.7, .8, 2.5), material(.7, .7, .7, .2)),
            newModel(model => {
              model._update = () => identity.rotate(0, rotatingPlatform2Rotation),
                meshAdd(
                  csg_polygons(
                    csg_subtract(
                      polygons_transform(
                        cylinder(28, 1),
                        identity.translate(0, 2).scale(8, 1, 8),
                        material(.35, 0, 0, .3),
                      ),
                      polygons_transform(cylinder(GQuad), identity.scale(9, 5, 2), material(.3, 0, 0, .3)),
                    ),
                  ),
                ),
                meshAdd(rotPlatformBase),
                [-1, 1].map(x =>
                  meshAdd(
                    GHorn,
                    identity.rotate(0, 90).translate(-5 * x, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90),
                    material(1, 1, .8),
                  )
                );
            }, ++_modelIdCounter);
        }),
        withEditMatrix(identity.translate(52, .3, -9), () => {
          meshAdd(cylinder(GQuad), identity.translate(0, 0, -8).scale(2.5, .8, .7), material(.7, .7, .7, .2)),
            newModel(model => {
              model._update = () => identity.rotate(0, 180 - rotatingPlatform2Rotation),
                meshAdd(
                  csg_polygons(
                    csg_subtract(
                      polygons_transform(
                        cylinder(30, 1),
                        identity.translate(0, 2).scale(8, 1, 8),
                        material(.35, 0, 0, .3),
                      ),
                      polygons_transform(cylinder(GQuad), identity.translate(7).scale(9, 5, 2), material(.3, 0, 0, .3)),
                      polygons_transform(
                        cylinder(GQuad),
                        identity.translate(0, 0, 7).scale(2, 5, 9),
                        material(.3, 0, 0, .3),
                      ),
                    ),
                  ),
                ),
                meshAdd(rotPlatformBase);
            }, ++_modelIdCounter);
        }),
        withEditMatrix(identity.translate(52, .3, -25), () => {
          newModel(model => {
            model._update = () => identity.rotate(0, 270 + rotatingPlatform2Rotation),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    polygons_transform(
                      cylinder(30, 1),
                      identity.translate(0, 2).scale(8, 1, 8),
                      material(.35, 0, 0, .3),
                    ),
                    polygons_transform(cylinder(GQuad), identity.translate(7).scale(9, 5, 2), material(.3, 0, 0, .3)),
                    polygons_transform(
                      cylinder(GQuad),
                      identity.translate(0, 0, -7).scale(2, 5, 9),
                      material(.3, 0, 0, .3),
                    ),
                  ),
                ),
              ),
              meshAdd(rotPlatformBase);
          }, ++_modelIdCounter);
        }),
        meshAdd(cylinder(GQuad), identity.translate(61, -0.3, -25).scale(2, 1, 2), material(.7, .7, .7, .3)),
        meshAdd(cylinder(GQuad), identity.translate(68, -0.3, -25).scale(5, 1, 3), material(.7, .7, .7, .3)),
        newLever(identity.translate(66, 2, -19).rotate(-12, 0)),
        meshAdd(cylinder(5), identity.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), material(.2, .5, .5, .6)),
        [material(.1, .55, .45, .2), material(.2, .5, .5, .3), material(.3, .45, .55, .4)].map((m, i) =>
          newModel(model => {
            model._update = () =>
              identity.translate(
                0,
                (1 - levers[13].$lerpValue2) * (1 - levers[14].$lerpValue2) * 3
                  + lerpneg(levers[13].$lerpValue2, levers[14].$lerpValue2) * Math.sin(1.5 * gameTime + 1.5 * i) * 4,
              ),
              meshAdd(
                cylinder(GQuad),
                identity.translate(76.5, i / 2 - 2.1, 7.5 * (1 - i / 30) * i - 25).scale(3.3, 3 - i / 2, 3.45 - i / 5),
                m,
              );
          }, ++_modelIdCounter)
        ),
        withEditMatrix(identity.translate(100, .2, -20), () => {
          meshAdd(cylinder(GQuad), identity.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), material(.6, .6, .6, .2)),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  polygons_transform(
                    cylinder(6, 0, 0, .3),
                    identity.translate(0, -0.92).scale(14, 2, 14),
                    material(.8, .8, .8, .2),
                  ),
                  polygons_transform(cylinder(5), identity.scale3d(6), material(.3, .3, .3, .5)),
                ),
              ),
            ),
            [8, -6.1].map((y, p) =>
              integers_map(
                3,
                i =>
                  meshAdd(
                    bigArc,
                    identity.translate(6 * i - 6, y - (1 & i), 16 - .2 * (1 & i) - p),
                    1 & i ? material(.5, .5, .5, .3) : material(.35, .35, .35, .5),
                  ),
              )
            ),
            [-1, 1].map(x =>
              meshAdd(
                GHorn,
                identity.translate(-8 * x, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90),
                material(1, 1, .8),
              )
            ),
            meshAdd(
              cylinder(5),
              identity.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35),
              material(.5, .3, .3, .4),
            ),
            newLever(identity.translate(0, 1.7, -13).rotate(0, 180)),
            newSoul(
              identity.translate(0, 3),
              ...polygon_regular(9).map(({
                x,
                z,
              }) => [9 * x, 9 * z, 4]),
            ),
            meshAdd(
              csg_polygons(
                csg_subtract(
                  csg_union(
                    polygons_transform(
                      cylinder(GQuad),
                      identity.translate(0, 16, 15.5).scale(12, 1, 3),
                      material(.5, .3, .3, .4),
                    ),
                    polygons_transform(
                      cylinder(GQuad),
                      identity.translate(0, 16, 16).scale(3, 1, 3.8),
                      material(.5, .3, .3, .4),
                    ),
                  ),
                  polygons_transform(
                    cylinder(5),
                    identity.translate(0, 16, 8.5).scale(5.5, 5, 5.5),
                    material(.5, .3, .3, .4),
                  ),
                ),
              ),
            ),
            newModel(model => {
              model._update = () => {
                const k = Math.sin(gameTime);
                return identity.translate(-2 * k).rotate(0, 0, 25 * k);
              },
                meshAdd(
                  cylinder(3),
                  identity.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60),
                  material(.5, .3, .3, .4),
                ),
                [22, 30].map(z => {
                  meshAdd(
                    cylinder(6),
                    identity.translate(0, 16, z).scale(3, 1, 2.3).rotate(0, 90),
                    material(.7, .7, .7, .4),
                  ),
                    meshAdd(cylinder(GQuad), identity.translate(0, 6.2, z).scale(.5, 11, .5), material(.5, .3, .3, .4));
                });
            }, ++_modelIdCounter),
            meshAdd(
              cylinder(6),
              identity.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90),
              material(.5, .6, .7, .3),
            ),
            meshAdd(cylinder(GQuad), identity.translate(0, 16, 34).scale(1.5, 1, 2), material(.5, .6, .7, .3)),
            meshAdd(cylinder(7), identity.translate(0, 16.2, 38).scale(5, 1, 5), material(.4, .5, .6, .4)),
            newModel(model => {
              model._update = () => {
                let v = lerpneg((levers[14].$lerpValue + levers[14].$lerpValue2) / 2, levers[13].$lerpValue2);
                return v = lerpneg(v, (levers[15].$lerpValue + levers[15].$lerpValue2) / 2),
                  identity.translate(0, 16 * v, 8.5 * clamp01(2 * v - 1));
              },
                meshAdd(cylinder(5), identity.scale(5, 1.1, 5), material(.5, .3, .3, .4)),
                meshAdd(cylinder(5), identity.scale(5.5, .9, 5.5), material(.25, .25, .25, .4)),
                newLever(identity.translate(0, 1.5, -1).rotate(0, 180));
            }, ++_modelIdCounter),
            newSoul(identity.translate(0, 19, 39), [0, 0, 3.5]);
        });
    });
};

const csm_buildMatrix = (camera_view, nearPlane, farPlane, zMultiplier) => {
  let tx = 0;
  let ty = 0;
  let tz = 0;
  let left = 1 / 0;
  let right = -1 / 0;
  let bottom = 1 / 0;
  let top = -1 / 0;
  let near = 1 / 0;
  let far = -1 / 0;
  const roundingRadius = 1.1 * (farPlane - nearPlane);
  const projViewInverse = new DOMMatrix(mat_perspective(nearPlane, farPlane)).multiplySelf(camera_view).invertSelf();
  const frustumCorners = integers_map(8, i => {
    const v = projViewInverse.transformPoint({
      x: 4 & i ? 1 : -1,
      y: 2 & i ? 1 : -1,
      z: 1 & i ? 1 : -1,
    });
    return tx -= v.x = (roundingRadius * v.x | 0) / (roundingRadius * v.w),
      ty -= v.y = (roundingRadius * v.y | 0) / (roundingRadius * v.w),
      tz -= v.z = (roundingRadius * v.z | 0) / (roundingRadius * v.w),
      v;
  });
  const lightViewTranslated = identity.rotate(298, 139).translateSelf(tx / 8, ty / 8, tz / 8);
  return polygon_transform(frustumCorners, lightViewTranslated).map(({
    x,
    y,
    z,
  }) => {
    left = min(left, x),
      right = max(right, x),
      bottom = min(bottom, y),
      top = max(top, y),
      near = min(near, z),
      far = max(far, z);
  }),
    near *= near < 0 ? zMultiplier : 1 / zMultiplier,
    far *= 0 < far ? zMultiplier : 1 / zMultiplier,
    identity.scale(2 / (right - left), 2 / (top - bottom), 2 / (near - far)).translateSelf(
      (right + left) / -2,
      (top + bottom) / -2,
      (near + far) / 2,
    ).multiplySelf(lightViewTranslated).toFloat32Array();
};

const loadShader = (source, type = 35633) => {
  const shader = gl["c6x"](type);
  return gl["s3c"](shader, source), gl["c6a"](shader), shader;
};

const initShaderProgram = (vertexShader, sfsSource) => {
  const uniforms = {};
  const program = gl["c1h"]();
  return gl["abz"](program, vertexShader),
    gl["abz"](program, loadShader(sfsSource, 35632)),
    gl["l8l"](program),
    name => name ? uniforms[name] || (uniforms[name] = gl["gan"](program, name)) : gl["u7y"](program);
};

const renderModels = (worldMatrixLoc, renderPlayer, skipFarObjects, collisionModelIdUniformLocation) => {
  const drawMesh = $mesh => gl["d97"](4, $mesh.$vertexCount, 5123, 2 * $mesh.$vertexOffset);

  const recursion = model => {
    const {
      $modelId,
      $mesh,
      $children,
      $visible,
      $skipShadow,
    } = model;

    if ((renderPlayer || 2 !== model.$modelId) && (!skipFarObjects || !$skipShadow) && $visible) {
      for (const child of $children) recursion(child);

      $mesh
        && (collisionModelIdUniformLocation && gl["ube"](collisionModelIdUniformLocation, $modelId / 255),
          gl["uae"](worldMatrixLoc, !1, model.$finalMatrix.toFloat32Array()),
          drawMesh($mesh));
    }
  };

  mainMenuVisible
    ? (gl["uae"](worldMatrixLoc, !1, identity.rotate(0, 40 * Math.sin(absoluteTime) - 70).toFloat32Array()),
      drawMesh(playerModel.$mesh),
      playerLegsModels.map(legModel => legModel.$mesh).map(drawMesh))
    : recursion(rootModel);
};

const soundbox_mixbuffer = new Int32Array(10725888);
const groundTextureSvg = (NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls:<b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\"><\/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n",
),
  "data:image/svg+xml;base64,"
  + btoa(
    "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
  ));

const GHorn = (() => {
  const matrices = integers_map(
    11,
    i => identity.translate(Math.sin(i / 10 * Math.PI), i / 10).rotate(+i).scale(1.0001 - i / 10, 0, 1 - i / 10),
  );
  const p = polygon_regular(18);
  return integers_map(
    10,
    i => cylinder_sides(polygon_transform(p, matrices[i]).reverse(), polygon_transform(p, matrices[i + 1]), 1),
  ).flat();
})();

const rootModel = {
  $children: [],
  $initialMatrix: identity,
  $finalMatrix: identity,
  $modelId: 1,
  $visible: 1,
  $skipShadow: 0,
};
let currentEditModel = rootModel;
const editMatrixStack = [identity];

const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 4);

const _vertexFloats = new Float32Array(_vertexInts.buffer);

const audioContext = new AudioContext();
const songAudioSource = audioContext.createBufferSource();
const leverMeshes =
  (meshAdd([GQuad.slice(1)], identity.translate(-2).scale3d(3).rotate(90, 0)),
    meshEnd(),
    [material(1, .5, .2), material(.7, 1, .2)].map(
      handleMaterial => (meshAdd(cylinder(6, 1), identity.scale(.13, 1.4, .13), material(.3, .3, .5)),
        meshAdd(cylinder(8), identity.translate(0, 1).scale(.21, .3, .21), handleMaterial),
        meshAdd(cylinder(3), identity.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), material(.2, .2, .2)),
        meshEnd()),
    ));
const playerModel = newModel(() => {
  playerLegsModels = [-1, 1].map(x =>
    newModel(() => {
      meshAdd(cylinder(10, 1), identity.translate(.3 * x, -0.8).scale(.2, .7, .24), material(1, .3, .4));
    })
  ),
    [0, 180].map(r =>
      meshAdd(GHorn, identity.rotate(0, r).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), material(1, 1, .8))
    ),
    meshAdd(sphere(20), identity.translate(0, 1).scale(.5, .5, .5), material(1, .3, .4));
  const eye = polygons_transform(
    csg_polygons(
      csg_subtract(cylinder(15, 1), polygons_transform(cylinder(GQuad), identity.translate(0, 0, 1).scale(2, 2, .5))),
    ),
    identity.rotate(-90, 0).scale(.1, .05, .1),
    material(.3, .3, .3),
  );
  [-1, 1].map(i => meshAdd(eye, identity.translate(.2 * i, 1.2, .4).rotate(0, 20 * i, 20 * i))),
    meshAdd(cylinder(GQuad), identity.translate(0, .9, .45).scale(.15, .02, .06), material(.3, .3, .3)),
    meshAdd(sphere(20), identity.scale(.7, .8, .55), material(1, .3, .4));
}, 2);
const soulMesh = (meshAdd(
  sphere(40, 30, (a, b, polygon) => {
    const bm = b / 30;
    const theta = .05 * a * Math.PI;
    const phixz = bm ** .6 * Math.PI / 2;
    const osc = bm * bm * Math.sin(a * Math.PI * .35) / 4;
    return 29 === b
      ? {
        x: polygon.$smooth = 0,
        y: -0.5,
        z: 0,
      }
      : {
        x: Math.cos(theta) * Math.sin(phixz),
        y: Math.cos(bm * Math.PI) - bm - osc,
        z: Math.sin(theta) * Math.sin(phixz) + Math.sin(osc * Math.PI * 2) / 4,
      };
  }),
  identity.scale3d(.7),
  material(1, 1, 1),
),
  [-1, 1].map(x => meshAdd(sphere(15), identity.translate(.16 * x, .4, -0.36).scale3d(.09))),
  meshEnd());
const gl = hC.getContext("webgl2");

for (const s in gl) gl[s[0] + [...s].reduce((p, c, i) => (p * i + c.charCodeAt(0)) % 434, 0).toString(36)] = gl[s];

setTimeout(() => {
  let songLoad = 0;
  let thingsToLoad = 6;

  const onThingLoaded = () => {
    if (h4.innerHTML += ".", !--thingsToLoad) {
      let currentModelIdTMinus1 = 0;
      let currentModelId = 0;
      let player_respawned = 1;
      let player_look_angle_target = 0;
      let player_look_angle = 0;
      let player_legs_speed = 0;

      let _gamepadInteractPressed = !1;

      let oldModelId;
      let player_has_ground;
      let player_gravity;
      let player_speed;
      let player_collision_velocity_x;
      let player_collision_velocity_z;
      let player_model_y;
      let camera_player_dir_x;
      let camera_player_dir_y;
      let camera_player_dir_z;
      const player_position_global = {
        x: 0,
        y: 0,
        z: 0,
      };
      const player_collision_modelIdCounter = new Int32Array(256);

      const player_respawn = () => {
        const {
          $matrix,
          $model,
        } = levers[player_last_pulled_lever];
        const {
          x,
          y,
          z,
        } = $matrix.transformPoint({
          x: 0,
          y: 8,
          z: -3,
        });
        player_position_final.x = player_position_global.x = x,
          player_position_final.y = player_position_global.y = player_model_y = y,
          player_position_final.z = player_position_global.z = z,
          player_speed = 0,
          player_gravity = 0,
          player_collision_velocity_x = 0,
          player_collision_velocity_z = 0,
          player_has_ground = 0,
          player_respawned = 1,
          currentModelIdTMinus1 = currentModelId = $model.$modelId || 1;
      };

      const updatePlayer = () => {
        let player_collision_x = 0;
        let player_collision_z = 0;
        let strafe = (NO_INLINE(() => {
          let maxModelIdCount = 0;
          let nextModelId = 0;
          let lines = 0;
          let grav = 0;
          let hasGround = 0;
          player_collision_modelIdCounter.fill(0);

          for (let y2 = 0; y2 < 31; ++y2) {
            let up = 0;
            const yindex = 512 * y2;

            for (let x2 = 0; x2 < 128; x2++) {
              let i = yindex + 4 * x2;
              const a = (collision_buffer[i] + collision_buffer[1 + i]) / 255;

              if (i = collision_buffer[2 + i], 14 < x2 && x2 < 114 && (up += a), i && a) {
                const count = player_collision_modelIdCounter[i] + 1;
                player_collision_modelIdCounter[i] = count,
                  maxModelIdCount > count || (maxModelIdCount = count, nextModelId = i);
              }
            }

            up < 3 && 5 < y2 && (grav += y2 / 32), 3 < up && (7 < y2 && (lines += y2 / 15), hasGround = 1);
          }

          nextModelId && (hasGround = 1),
            player_respawned
              ? nextModelId && (player_respawned = 0, currentModelId = nextModelId)
              : currentModelId = nextModelId || currentModelIdTMinus1,
            currentModelIdTMinus1 = nextModelId,
            player_has_ground = hasGround,
            player_gravity = lerpDamp(player_gravity, hasGround ? 6.5 : 8, 4),
            player_position_global.y += lines / 41
              - (hasGround ? 1 : player_gravity) * grav / 41 * player_gravity * gameTimeDelta;
        })(),
          NO_INLINE(() => {
            for (let y2 = 32; y2 < 128; y2 += 2) {
              let front = 0;
              let back = 0;
              let left = 0;
              let right = 0;
              const yindex = 512 * y2;

              for (let x2 = y2 >> 1 & 1; x2 < 128; x2 += 2) {
                const i1 = yindex + 4 * x2;
                const i2 = yindex + 4 * (127 - x2);
                const dist1 = collision_buffer[i1] / 255;
                const dist2 = collision_buffer[1 + i2] / 255;
                const t = 1 - abs(x2 / 63.5 - 1);

                if (
                  10 < x2 && x2 < 118
                  && (front = max(front, max(dist1 * t, dist1 * collision_buffer[i2] / 127.5)),
                    back = max(back, max(dist2 * t, dist2 * collision_buffer[1 + i1] / 255))), x2 < 54 || 74 < x2
                ) {
                  const xdist = (1 - t) * max(dist1, dist2) / 3;
                  .001 < xdist
                    && (x2 < 64 && xdist > left ? left = xdist : 64 < x2 && xdist > right && (right = xdist));
                }
              }

              const dx = right - left;
              const dz = back - front;
              abs(dx) > abs(player_collision_x) && (player_collision_x = dx),
                abs(dz) > abs(player_collision_z) && (player_collision_z = dz);
            }
          })(),
          (keyboard_downKeys[0] ? 1 : 0) + (keyboard_downKeys[2] ? -1 : 0) + touch_movementX);
        let forward = (keyboard_downKeys[1] ? 1 : 0) + (keyboard_downKeys[3] ? -1 : 0) + touch_movementY;
        const gamepad = navigator.getGamepads()[0];

        if (gamepad) {
          const getGamepadButtonState = index2 => buttons[index2]?.pressed || 0 < buttons[index2]?.value;

          const {
            buttons,
            axes,
          } = gamepad;
          const interactButtonPressed = getGamepadButtonState(1) || getGamepadButtonState(3) || getGamepadButtonState(2)
            || getGamepadButtonState(0);
          interactButtonPressed !== _gamepadInteractPressed && (_gamepadInteractPressed = interactButtonPressed)
          && (keyboard_downKeys[5] = 1),
            strafe += (.2 < abs(-axes[0]) ? -axes[0] : 0) + (getGamepadButtonState(14) ? 1 : 0)
              + (getGamepadButtonState(15) ? -1 : 0),
            forward += (.2 < abs(-axes[1]) ? -axes[1] : 0) + (getGamepadButtonState(12) ? 1 : 0)
              + (getGamepadButtonState(13) ? -1 : 0),
            player_first_person
            && (.3 < abs(axes[2]) && (camera_rotation.y += 80 * axes[2] * gameTimeDelta),
              .3 < abs(axes[3]) && (camera_rotation.x += 80 * axes[3] * gameTimeDelta));
        }

        abs(forward) < .05 && (forward = 0), abs(strafe) < .05 && (strafe = 0);
        const angle = Math.atan2(forward, strafe);
        const amount = clamp01(Math.hypot(forward, strafe));
        const playerSpeedCollision =
          (strafe = amount * Math.cos(angle),
            forward = amount * Math.sin(angle),
            clamp01(1 - 5 * max(abs(player_collision_x), abs(player_collision_z))));
        const movementRadians = (currentModelId
          || (player_collision_x += player_collision_velocity_x * playerSpeedCollision * gameTimeDelta,
            player_collision_z += player_collision_velocity_z * playerSpeedCollision * gameTimeDelta),
          player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4),
          player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4),
          player_speed = lerpDamp(
            player_speed,
            player_has_ground ? (strafe || forward ? player_has_ground ? 7 : 4 : 0) * playerSpeedCollision : 0,
            player_has_ground ? .1 < playerSpeedCollision ? 10 : strafe || forward ? 5 : 7 : 1,
          ),
          player_first_person ? camera_rotation.y * DEG_TO_RAD : Math.PI);
        const s = Math.sin(movementRadians) * player_speed * gameTimeDelta;
        const c = Math.cos(movementRadians) * player_speed * gameTimeDelta;
        const referenceMatrix =
          (player_collision_x -= strafe * c - forward * s,
            player_collision_z -= strafe * s + forward * c,
            modelsByModelId[currentModelId]?.$finalMatrix || identity);
        const inverseReferenceRotationMatrix = referenceMatrix.inverse();

        if (
          inverseReferenceRotationMatrix.m41 = 0,
            inverseReferenceRotationMatrix.m42 = 0,
            inverseReferenceRotationMatrix.m43 = 0,
            ({
              x: player_collision_x,
              z: player_collision_z,
            } = inverseReferenceRotationMatrix.transformPoint({
              x: player_collision_x,
              z: player_collision_z,
              w: 0,
            })),
            player_position_global.x += player_collision_x,
            player_position_global.z += player_collision_z,
            currentModelId !== oldModelId
        ) {
          oldModelId = currentModelId;
          const {
            x: x2,
            y: y2,
            z: z2,
          } = referenceMatrix.inverse().transformPoint(player_position_final);
          player_position_global.x = x2, player_position_global.y = y2, player_position_global.z = z2;
        }

        const oldx = player_position_final.x;
        const oldz = player_position_final.z;
        const {
          x,
          y,
          z,
        } = referenceMatrix.transformPoint(player_position_global);
        const ydiff =
          (player_position_final.x = x,
            player_position_final.y = y,
            player_position_final.z = z,
            abs(player_model_y - y));
        player_model_y = lerpDamp(player_model_y, y + .1, 50 * ydiff + 5),
          currentModelId
          && (player_collision_velocity_x = (player_position_final.x - oldx) / gameTimeDelta,
            player_collision_velocity_z = (player_position_final.z - oldz) / gameTimeDelta),
          (strafe || forward) && (player_look_angle_target = 90 - angle / DEG_TO_RAD),
          player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, 8 * gameTimeDelta),
          player_legs_speed = lerp(player_legs_speed, amount, 10 * gameTimeDelta);
      };

      const mainLoop = globalTime => {
        let camera_view = identity;
        requestAnimationFrame(mainLoop);
        {
          const dt = (globalTime - (_globalTime || globalTime)) / 1e3;
          gameTimeDelta = mainMenuVisible ? keyboard_downKeys[5] = 0 : min(.066, dt),
            gameTime += gameTimeDelta,
            absoluteTime += dt,
            _globalTime = globalTime;
        }

        if (
          0 < gameTimeDelta
          && (gl["b6o"](36160, collision_frameBuffer),
            gl["r9r"](0, 0, 128, 128, 6408, 5121, collision_buffer),
            gl["iay"](36160, [36064]),
            NO_INLINE(updatePlayer)(),
            updateModels(rootModel)), 0 < gameTimeDelta
        ) {
          if (
            camera_player_dir_x = interpolate_with_hysteresis(
              camera_player_dir_x,
              player_position_final.x,
              .5,
              gameTimeDelta,
            ),
              camera_player_dir_y = interpolate_with_hysteresis(
                camera_player_dir_y,
                player_position_final.y,
                2,
                gameTimeDelta,
              ),
              camera_player_dir_z = interpolate_with_hysteresis(
                camera_player_dir_z,
                player_position_final.z,
                .5,
                gameTimeDelta,
              ),
              player_first_person
          ) {
            const interpolationSpeed = 200 * player_respawned;
            camera_position.x = lerpDamp(camera_position.x, player_position_final.x, 18 + interpolationSpeed),
              camera_position.y = lerpDamp(camera_position.y, player_position_final.y + 1.5, 15 + interpolationSpeed),
              camera_position.z = lerpDamp(camera_position.z, player_position_final.z, 18 + interpolationSpeed),
              camera_rotation.x = max(min(camera_rotation.x, 87), -87);
          } else {
            camera_position.x = interpolate_with_hysteresis(
              camera_position.x,
              camera_player_dir_x,
              1,
              2 * gameTimeDelta,
            ),
              camera_position.y = interpolate_with_hysteresis(
                camera_position.y,
                camera_player_dir_y + 13 + 15 * player_respawned,
                4,
                2 * gameTimeDelta,
              ),
              camera_position.z = interpolate_with_hysteresis(
                camera_position.z,
                camera_player_dir_z + -18,
                1,
                2 * gameTimeDelta,
              );
            const viewDirDiffz = camera_position.z - camera_player_dir_z;

            if (1 < abs(viewDirDiffz)) {
              const viewDirDiffx = camera_position.x - camera_player_dir_x;
              const viewDirDiffy = camera_position.y - camera_player_dir_y;
              camera_rotation.y = 270 + Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD,
                camera_rotation.x = 90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), viewDirDiffy) / DEG_TO_RAD;
            }
          }

          if (camera_rotation.y = angle_wrap_degrees(camera_rotation.y), 0 < gameTimeDelta) {
            {
              const shouldRotatePlatforms = lerpneg(levers[12].$lerpValue, levers[13].$lerpValue);
              gameTime > _messageEndTime && clearMessage(),
                rotatingHexCorridorRotation = lerp(
                  lerpDamp(rotatingHexCorridorRotation, 0, 1),
                  angle_wrap_degrees(rotatingHexCorridorRotation + 60 * gameTimeDelta),
                  levers[5].$lerpValue - levers[6].$lerpValue2,
                ),
                rotatingPlatform1Rotation = lerp(
                  lerpDamp(rotatingPlatform1Rotation, 0, 5),
                  angle_wrap_degrees(rotatingPlatform1Rotation + 56 * gameTimeDelta),
                  shouldRotatePlatforms,
                ),
                rotatingPlatform2Rotation = lerp(
                  lerpDamp(rotatingPlatform2Rotation, 0, 4),
                  angle_wrap_degrees(rotatingPlatform2Rotation + 48 * gameTimeDelta),
                  shouldRotatePlatforms,
                ),
                secondBoatLerp = lerpDamp(
                  secondBoatLerp,
                  levers[9].$lerpValue2,
                  .2 + .3 * abs(2 * levers[9].$lerpValue2 - 1),
                ),
                firstBoatLerp = lerpDamp(
                  firstBoatLerp,
                  game_completed ? lerp(firstBoatLerp, -9, 1.5 * gameTimeDelta) : clamp01(gameTime / 3),
                  1,
                ),
                1 === levers[0].$value && .8 < levers[0].$lerpValue
                && (souls_collected_count < 13
                  ? (levers[0].$value = 0, showMessage("Not leaving now, there are souls to catch!", 3))
                  : game_completed
                    || (showMessage("Well done. They will be punished.<br>Thanks for playing", 1 / 0),
                      game_completed = 1));
            }
            keyboard_downKeys[5] = 0,
              (player_position_final.x < -25 || player_position_final.z < 109 ? -25 : -9) > player_position_final.y
              && player_respawn();
          }
        }

        camera_view = mainMenuVisible
          ? identity.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + clamp01(hC.clientWidth / 1e3))
          : identity.rotate(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z).invertSelf().translateSelf(
            -camera_position.x,
            -camera_position.y,
            -camera_position.z,
          ),
          0 < gameTimeDelta
          && (collisionShader(),
            gl["b6o"](36160, collision_frameBuffer),
            gl["v5y"](0, 0, 128, 128),
            gl["cbf"](!0, !1, !0, !1),
            gl["c4s"](16640),
            gl["uae"](
              collisionShader("b"),
              !1,
              identity.rotate(0, 180).invertSelf().translateSelf(
                -player_position_final.x,
                -player_position_final.y,
                .3 - player_position_final.z,
              ).toFloat32Array(),
            ),
            renderModels(collisionShader("c"), 0, 1, collisionShader("i")),
            gl["cbf"](!1, !0, !1, !1),
            gl["c4s"](16640),
            gl["cbf"](!1, !0, !0, !1),
            gl["uae"](
              collisionShader("b"),
              !1,
              identity.translate(-player_position_final.x, -player_position_final.y, -player_position_final.z - .3)
                .toFloat32Array(),
            ),
            renderModels(collisionShader("c"), 0, 1, collisionShader("i")),
            gl["cbf"](!0, !0, !0, !0),
            1 === currentModelId
            && (levers[9].$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0)),
          csmShader(),
          gl["v5y"](0, 0, 2048, 2048),
          csm_render[0](csm_buildMatrix(camera_view, .3, 55, 10)),
          csm_render[1](csm_buildMatrix(camera_view, 55, 177, 11)),
          gl["b6o"](36160, null),
          mainShader(),
          gl["v5y"](0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight),
          gl["c4s"](16640),
          gl["uae"](mainShader("a"), !1, mat_perspective(.3, 177)),
          gl["uae"](mainShader("b"), !1, camera_view.toFloat32Array()),
          gl["ubu"](mainShader("j"), camera_position.x, camera_position.y, camera_position.z),
          csm_render[0](),
          csm_render[1](),
          renderModels(mainShader("c"), !player_first_person),
          skyShader(),
          gl["ubu"](skyShader("c"), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime),
          mainMenuVisible
            ? gl["ubu"](skyShader("j"), 0, 0, 0)
            : gl["ubu"](skyShader("j"), camera_position.x, camera_position.y, camera_position.z),
          gl["uae"](skyShader("b"), !1, camera_view.inverse().toFloat32Array()),
          gl["d97"](4, 3, 5123, 0);
      };

      const collision_buffer = new Uint8Array(65536);
      const groundTextureImage = image;
      const mainVertexShader = loadShader(
        "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 n,l,m,k;uniform mat4 a,b,c;void main(){k=d,m=f,l=c*f,gl_Position=a*b*l,n=c*vec4(e,0);}",
      );
      const csmShader = initShaderProgram(
        loadShader("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"),
        "#version 300 es\nvoid main(){}",
      );
      const skyShader = initShaderProgram(
        loadShader("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
        "#version 300 es\nprecision highp float;uniform vec3 c,j;uniform mat4 b;uniform highp sampler2D d;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/c.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(c.x/c.y),-t.y,sqrt(3.),0.))).xyz;float i=(-32.-j.y)/e.y,o=1.-clamp(abs(i/1e4),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(c.z/30.),i=sin(c.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(d,e.xy).z,texture(d,e.yz*2.).z),t.zx)*t.y);}else e=j+e*i,O.x=(o*=.9-texture(d,e.xz/150.+vec2(sin(e.z/35.+c.z),cos(e.x/25.+c.z))/80.).y),O.y=o*o*o;}}",
      );
      const collisionShader = initShaderProgram(
        mainVertexShader,
        "#version 300 es\nprecision highp float;in vec4 n,l;uniform mat4 b;uniform float i;out vec4 O;void main(){vec4 o=b*l;float a=i>0.?1.-min(abs(o.z/o.w),1.):0.;O=vec4(vec2(a*(gl_FragCoord.y>31.?1.:abs(n.y))),a>0.?i:0.,1);}",
      );
      const mainShader = initShaderProgram(
        mainVertexShader,
        "#version 300 es\nprecision highp float;in vec4 n,l,m,k;uniform vec3 j;uniform mat4 b,i,w;uniform highp sampler2DShadow g,h;uniform highp sampler2D d;out vec4 O;void main(){vec3 e=normalize(n.xyz),x=k.w*(texture(d,m.yz*.035)*e.x+texture(d,m.xz*.035)*e.y+texture(d,m.xy*.035)*e.z).xyz;e=normalize(e+x*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),o=1.,c=abs((b*l).z);vec4 r=(c<55.?i:w)*l;if(r=r/r.w*.5+.5,r.z<1.){o=0.;for(float e=-1.;e<=1.;++e)for(float t=-1.;t<=1.;++t){vec3 a=vec3(r.xy+vec2(e,t)/2048.,r.z-.00017439);o+=c<55.?texture(g,a):texture(h,a);}o/=9.;}vec3 t=k.xyz*(1.-x.x);O=vec4(vec3(.09,.05,.1)*t+t*(max(0.,a)*.5+t*a*a*vec3(.5,.45,.3))*(o*.7+.3)+t*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-l.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(l.xyz-j),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*o,1);}",
      );
      const collision_frameBuffer =
        (skyShader(),
          gl["ubh"](skyShader("d"), 3),
          collisionShader(),
          gl["uae"](collisionShader("a"), !1, mat_perspectiveXY(1.4, .59, 1e-4, 1)),
          mainShader(),
          gl["ubh"](mainShader("d"), 3),
          gl["c5w"]());
      const collision_renderBuffer = gl["c3z"]();
      const collision_texture = gl["c25"]();
      const csm_render = integers_map(2, csmSplit => {
        let lightSpaceMatrix;
        const texture = gl["c25"]();
        const frameBuffer = gl["c5w"]();
        const lightSpaceMatrixLoc = mainShader(csmSplit ? "w" : "i");
        return mainShader(),
          gl["ubh"](mainShader(csmSplit ? "h" : "g"), csmSplit),
          gl["b6o"](36160, frameBuffer),
          gl["d45"]([0]),
          gl["r9l"](0),
          gl["a4v"](33984 + csmSplit),
          gl["b9j"](3553, texture),
          gl["fas"](36160, 36096, 3553, texture, 0),
          gl["t60"](3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
          gl["t2z"](3553, 10241, 9729),
          gl["t2z"](3553, 10240, 9729),
          gl["t2z"](3553, 34893, 515),
          gl["t2z"](3553, 34892, 34894),
          gl["t2z"](3553, 10243, 33071),
          gl["t2z"](3553, 10242, 33071),
          matrix => {
            matrix
              ? (lightSpaceMatrix = matrix,
                gl["b6o"](36160, frameBuffer),
                gl["iay"](36160, [36096]),
                gl["c4s"](256),
                gl["uae"](csmShader("b"), !1, lightSpaceMatrix),
                renderModels(csmShader("c"), !player_first_person, 1))
              : gl["uae"](lightSpaceMatrixLoc, !1, lightSpaceMatrix);
          };
      });
      gl["b11"](34963, gl["c1b"]()),
        gl["b2v"](34963, new Uint16Array(_triangleIndices), 35044),
        gl["b11"](34962, gl["c1b"]()),
        gl["b2v"](34962, new Float32Array(_vertexPositions), 35044),
        gl["v7s"](0, 3, 5126, !1, 0, 0),
        gl["b11"](34962, gl["c1b"]()),
        gl["b2v"](34962, new Int16Array(_vertexNormals), 35044),
        gl["v7s"](1, 3, 5122, !0, 0, 0),
        gl["b11"](34962, gl["c1b"]()),
        gl["b2v"](34962, new Uint32Array(_vertexColors), 35044),
        gl["v7s"](2, 4, 5121, !0, 0, 0),
        gl["e3x"](0),
        gl["e3x"](1),
        gl["e3x"](2),
        gl["e8z"](2929),
        gl["e8z"](2884),
        gl["c70"](1),
        gl["c7a"](1029),
        gl["d4n"](515),
        gl["c5t"](0, 0, 0, 1),
        gl["b6o"](36160, collision_frameBuffer),
        gl["bb1"](36161, collision_renderBuffer),
        gl["r4v"](36161, 33189, 128, 128),
        gl["f8w"](36160, 36096, 36161, collision_renderBuffer),
        gl["a4v"](33987),
        gl["b9j"](3553, collision_texture),
        gl["fas"](36160, 36064, 3553, collision_texture, 0),
        gl["t60"](3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
        gl["b9j"](3553, gl["c25"]()),
        gl["t60"](3553, 0, 6408, 1024, 1024, 0, 6408, 5121, groundTextureImage),
        gl["gbn"](3553),
        gl["t2z"](3553, 10241, 9987),
        gl["t2z"](3553, 10240, 9729),
        playerModel._update = () =>
          identity.translate(player_position_final.x, player_model_y, player_position_final.z).rotateSelf(
            0,
            player_look_angle,
          ),
        playerLegsModels.map((model, i) => {
          model._update = () =>
            identity.translate(
              0,
              player_legs_speed * clamp01(.45 * Math.sin(9.1 * gameTime + Math.PI * i - Math.PI / 2)),
            ).rotateSelf(player_legs_speed * Math.sin(9.1 * gameTime + Math.PI * i) * .25 / DEG_TO_RAD, 0);
        });

      try {
        const [savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedSecondBoatLerp] = JSON.parse(
          localStorage[LOCAL_STORAGE_SAVED_GAME_KEY],
        );
        levers.map((lever, index2) =>
          lever.$lerpValue = lever.$lerpValue2 = lever.$value = index2 ? 0 | savedLevers[index2] : 0
        ),
          souls.map((soul, index2) => soul.$value = 0 | savedSouls[index2]),
          player_last_pulled_lever = savedLastPulledLever,
          gameTime = savedGameTime,
          secondBoatLerp = savedSecondBoatLerp;
      } catch (e) {}

      firstBoatLerp = clamp01(player_last_pulled_lever),
        clearMessage(),
        updateCollectedSoulsCounter(),
        updateModels(rootModel),
        NO_INLINE(initPage)(),
        player_respawn(),
        camera_position.x = camera_player_dir_x = player_position_final.x,
        camera_position.y = (camera_player_dir_y = player_position_final.y) + 13,
        camera_position.z = (camera_player_dir_z = player_position_final.z) + -18,
        requestAnimationFrame(mainLoop);
    }
  };

  const asyncLoadSongChannels = () => {
    if (songLoad < 5) {
      {
        let mixIndex = 0;
        const channelIndex = songLoad++;
        let [
          OSC1_VOL,
          OSC1_SEMI,
          OSC1_XENV,
          OSC2_VOL,
          OSC2_SEMI,
          OSC2_XENV,
          NOISE_VOL,
          ENV_ATTACK,
          ENV_SUSTAIN,
          ENV_RELEASE,
          ENV_EXP_DECAY,
          LFO_FREQ,
          FX_FREQ,
          FX_RESONANCE,
          FX_DRIVE,
          FX_PAN_AMT,
          FX_PAN_FREQ,
          FX_DELAY_AMT,
          FX_DELAY_TIME,
          LFO_AMT,
          COLUMNS,
        ] = song_instruments[channelIndex];
        ENV_RELEASE = ENV_RELEASE * ENV_RELEASE * 4;

        for (const song_rowLen of [5513, 4562, 3891]) {
          let low = 0;
          let band = 0;
          let n;
          let t;
          let f;
          let high;
          let filterActive;
          const noteCache = [];
          const chnBuf = new Int32Array(768 * song_rowLen);
          const lfoFreq = 2 ** (LFO_FREQ - 9) / song_rowLen;
          const panFreq = Math.PI * 2 ** (FX_PAN_FREQ - 8) / song_rowLen;
          const dly = FX_DELAY_TIME * song_rowLen & -2;

          for (let p = 0; p <= 11; ++p) {
            for (
              let row = 0, cp = +"000001234556112341234556011111111112011111111112000001111112"[12 * channelIndex + p];
              row < 32;
              ++row
            ) {
              const rowStartSample = (32 * p + row) * song_rowLen;

              for (let col = 0; col < 4; ++col) {
                if (n = 0, cp && (n = COLUMNS[cp - 1].charCodeAt(row + 32 * col) - 40, n += 0 < n ? 106 : 0), n) {
                  const noteBuf = noteCache[n] || (noteCache[n] = (note => {
                    let c1 = 0;
                    let c2 = 0;
                    let o1t;
                    let o2t;
                    const OSC1_WAVEFORM = channelIndex < 2 ? osc_saw : osc_sin;
                    const OSC2_WAVEFORM = channelIndex < 2 ? channelIndex < 1 ? osc_square : osc_tri : osc_sin;
                    const noteBuf = new Int32Array(ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE);

                    for (let j1 = 0, j2 = 0; ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE > j1; ++j1, ++j2) {
                      let e = 1;
                      ENV_ATTACK > j1
                        ? e = j1 / ENV_ATTACK
                        : ENV_ATTACK + ENV_SUSTAIN > j1
                          || (e = (1 - (e = (j1 - ENV_ATTACK - ENV_SUSTAIN) / ENV_RELEASE))
                            * 3 ** (-ENV_EXP_DECAY / 16 * e)),
                        j2 < 0
                        || (j2 -= 4 * song_rowLen,
                          o1t = getnotefreq(note + OSC1_SEMI),
                          o2t = getnotefreq(note + OSC2_SEMI) * (1 + (channelIndex ? 0 : 8e-4 * 9))),
                        noteBuf[j1] = 80
                            * (OSC1_WAVEFORM(c1 += o1t * e ** (OSC1_XENV / 32)) * OSC1_VOL
                              + OSC2_WAVEFORM(c2 += o2t * e ** (OSC2_XENV / 32)) * OSC2_VOL
                              + (NOISE_VOL ? (2 * Math.random() - 1) * NOISE_VOL : 0))
                            * e | 0;
                    }

                    return noteBuf;
                  })(n));

                  for (let j = 0, i = 2 * rowStartSample; noteBuf.length > j; ++j, i += 2) chnBuf[i] += noteBuf[j];
                }
              }

              for (let rsample, j1 = 0; song_rowLen > j1; ++j1) {
                let lsample = 0;
                let k = 2 * (rowStartSample + j1);
                ((rsample = chnBuf[k]) || filterActive)
                && (f = 0.003080 * FX_FREQ,
                  1 != channelIndex && 4 != channelIndex || (f *= osc_sin(lfoFreq * k) * LFO_AMT / 512 + .5),
                  f = 1.5 * Math.sin(f),
                  low += f * band,
                  high = (1 - FX_RESONANCE / 255) * (rsample - band) - low,
                  band += f * high,
                  rsample = 4 == channelIndex ? band : 3 == channelIndex ? high : low,
                  channelIndex
                  || (rsample = (rsample *= 22e-5) < 1 ? -1 < rsample ? osc_sin(rsample / 4) : -1 : 1,
                    rsample /= 22e-5),
                  rsample *= FX_DRIVE / 32,
                  filterActive = 1e-5 < rsample * rsample,
                  t = Math.sin(panFreq * k) * FX_PAN_AMT / 512 + .5,
                  lsample = rsample * (1 - t),
                  rsample *= t),
                  dly > k
                  || (lsample += chnBuf[k - dly + 1] * FX_DELAY_AMT / 255,
                    rsample += chnBuf[k - dly] * FX_DELAY_AMT / 255),
                  soundbox_mixbuffer[mixIndex + k] += chnBuf[k] = lsample,
                  ++k,
                  soundbox_mixbuffer[mixIndex + k] += chnBuf[k] = rsample;
              }
            }
          }

          mixIndex += chnBuf.length;
        }
      }
      setTimeout(asyncLoadSongChannels);
    } else {
      const buffer = audioContext.createBuffer(2, 5362944, 44100);

      for (let i1 = 0; i1 < 2; i1++) {
        for (let j2 = i1, data = buffer.getChannelData(i1); j2 < 10725888; j2 += 2) {
          data[j2 >> 1] = soundbox_mixbuffer[j2] / 65536;
        }
      }

      songAudioSource.buffer = buffer, songAudioSource.loop = !0;
    }

    onThingLoaded();
  };

  const image = new Image();
  image.onload = image.onerror = () => {
    onThingLoaded();
  },
    image.src = groundTextureSvg,
    setTimeout(asyncLoadSongChannels, 50),
    newModel(NO_INLINE(buildWorld));
});
