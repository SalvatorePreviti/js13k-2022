let souls_collected_count = 0;
let absoluteTime = 0;
let gameTime = 0;
let player_last_pulled_lever = 0;
let rotatingPlatform1Rotation = 0;
let rotatingPlatform2Rotation = 0;
let rotatingHexCorridorRotation = 0;
let game_completed = 0;
let firstBoatLerp = 0;
let secondBoatLerp = 0;
let touch_movementX = 0;
let touch_movementY = 0;
let gameTimeDelta = 0.066;
let _messageEndTime = 1;
let mainMenuVisible;

let _globalTime;

let currentEditModel;
let player_first_person;
let player_update;
const MODEL_ID_PLAYER_LEG0 = 38;
const MODEL_ID_PLAYER_LEG1 = 39;
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
const allModels = [];
const levers = [];
const souls = [];
const keyboard_downKeys = [];
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
const player_position_final = {
  x: 0,
  y: 0,
  z: 0,
};
const camera_position = {
  x: 0,
  y: 0,
  z: 0,
};
const camera_rotation = {
  x: 0,
  y: 0,
  z: 0,
};
const DEG_TO_RAD = Math.PI / 180;
const identity = new DOMMatrix();
const float32Array16Temp = new Float32Array(16);
const worldMatricesBuffer = new Float32Array(624);

const integers_map = (n, fn) => Array.from(Array(n), (_, i) => fn(i));

const min = (a, b) => a < b ? a : b;

const max = (a, b) => b < a ? a : b;

const abs = n => n < 0 ? -n : n;

const clamp01 = t => t < 0 ? 0 : 1 < t ? 1 : t;

const lerp = (a, b, t) => a + (b - a) * clamp01(t);

const lerpneg = (v, t) => (v = clamp01(v), lerp(v, 1 - v, t));

const angle_wrap_degrees = degrees => Math.atan2(Math.sin(degrees *= DEG_TO_RAD), Math.cos(degrees)) / DEG_TO_RAD;

const angle_lerp_degrees = (a0, a1, t) =>
  ((a0 *= DEG_TO_RAD) + (2 * (a1 = (a1 * DEG_TO_RAD - a0) % (2 * Math.PI)) % (2 * Math.PI) - a1) * clamp01(t))
  / DEG_TO_RAD;

const vec3_distance = ({
  x,
  y,
  z,
}, b) => Math.hypot(x - b.x, y - b.y, z - b.z);

const vec3_dot = ({
  x,
  y,
  z,
}, b) => x * b.x + y * b.y + z * b.z;

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
    x,
    y,
    z,
    w: x * a.x + y * a.y + z * a.z,
  };
};

const matrixToArray = (
  $matrix,
  output = float32Array16Temp,
  index2 = 0,
) => (index2 *= 16,
  output[index2++] = $matrix.m11,
  output[index2++] = $matrix.m12,
  output[index2++] = $matrix.m13,
  output[index2++] = $matrix.m14,
  output[index2++] = $matrix.m21,
  output[index2++] = $matrix.m22,
  output[index2++] = $matrix.m23,
  output[index2++] = $matrix.m24,
  output[index2++] = $matrix.m31,
  output[index2++] = $matrix.m32,
  output[index2++] = $matrix.m33,
  output[index2++] = $matrix.m34,
  output[index2++] = $matrix.m41,
  output[index2++] = $matrix.m42,
  output[index2++] = $matrix.m43,
  output[index2] = $matrix.m44,
  output);

const mat_perspectiveXY = (
  mx,
  my,
  near,
  far,
) => [mx, 0, 0, 0, 0, my, 0, 0, 0, 0, (far + near) / (near - far), -1, 0, 0, 2 * far * near / (near - far), 0];

const polygon_color = (polygon, color, smooth) => (polygon.$smooth = smooth, polygon.$color = color, polygon);

const polygon_transform = (polygon, m, color = polygon.$color) =>
  polygon_color(
    polygon.map(p => {
      let y;
      let z;
      return ({
        x: p,
        y,
        z,
      } = p),
        ({
          x: p,
          y,
          z,
        } = m.transformPoint({
          x: p,
          y,
          z,
        })),
        {
          x: p,
          y,
          z,
        };
    }),
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
      z: abs(z) < 0.01 ? z : z < 0 ? z - elongate : z + elongate,
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

const cylinder = (
  segments,
  smooth,
  topSize = 0,
  elongate,
) => (segments = segments ? polygon_regular(segments, elongate) : GQuad,
  elongate = polygon_transform(segments, identity.translate(0, 1).scale3d(0 < topSize ? topSize : 1)),
  segments = polygon_transform(segments, identity.translate(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse(),
  [...cylinder_sides(segments, elongate, smooth), elongate, segments]);

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
  let d;
  let $front;
  let $back;
  const $polygon = polygon.$polygon;

  for (let i = 0; $polygon.length > i; ++i) {
    if (
      (d = vec3_dot(plane, $polygon[i]) - plane.w) < -0.00008 ? $back = polygon : 8e-5 < d && ($front = polygon),
        $back && $front
    ) {
      return ((plane2, polygon2) => {
        const fpoints = [];
        const bpoints = [];
        let jd;
        const {
          $polygon: $polygon2,
          $flipped,
        } = polygon2;
        let iv = $polygon2.at(-1);
        let id = vec3_dot(plane2, iv) - plane2.w;

        for (const jv of $polygon2) {
          jd = vec3_dot(plane2, jv) - plane2.w,
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
            $polygon: polygon_color(fpoints, $polygon2.$color, $polygon2.$smooth),
            $flipped,
            $parent: polygon2,
          },
          $back: 2 < bpoints.length && {
            $polygon: polygon_color(bpoints, $polygon2.$color, $polygon2.$smooth),
            $flipped,
            $parent: polygon2,
          },
        };
      })(plane, polygon);
    }
  }

  return {
    $front,
    $back,
  };
};

const csg_tree_addPolygon = (node, polygon, plane = plane_fromPolygon(polygon.$polygon)) => {
  let $front;
  let $back;
  let w;
  return node
    ? (({
      $front,
      $back,
    } = CSGPolygon_split(node, polygon)),
      $front || $back || node.$polygons.push(polygon),
      $front && (node.$front = csg_tree_addPolygon(node.$front, $front, plane)),
      $back && (node.$back = csg_tree_addPolygon(node.$back, $back, plane)))
    : (({
      x: $front,
      y: $back,
      z: plane,
      w,
    } = plane),
      node = {
        x: $front,
        y: $back,
        z: plane,
        w,
        $polygons: [polygon],
        $front: 0,
        $back: 0,
      }),
    node;
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
        $polygon,
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

      for (let [plane, polygons] of polygonsToAdd) for (const pp of polygons) csg_tree_addPolygon(a, pp, plane);
    }

    return a;
  });

const csg_subtract = (a, ...b) => csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b));

const csg_polygons = tree => {
  const byParent = new Map();
  const allPolygons = new Map();

  const add = polygon => {
    let found;
    return polygon.$parent
      && ((found = byParent.get(polygon.$parent))
        ? (allPolygons.delete(found), polygon = add(polygon.$parent))
        : byParent.set(polygon.$parent, polygon)),
      polygon;
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
        x,
        y,
        z,
      }));
      return polygon_color(flipped ? polygon.reverse() : polygon, $polygon.$color, $polygon.$smooth);
    });
};

const lerpDamp = (from, to, speed) => lerp(from, to, 1 - Math.exp(-speed * gameTimeDelta));

const showMessage = (message, duration) => {
  1 / 0 > _messageEndTime && (_messageEndTime = gameTime + duration, h4.innerHTML = message);
};

const worldStateUpdate = () => {
  const shouldRotatePlatforms = lerpneg(levers[12].$lerpValue, levers[13].$lerpValue);
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
    secondBoatLerp = lerpDamp(secondBoatLerp, levers[9].$lerpValue2, 0.2 + 0.3 * abs(2 * levers[9].$lerpValue2 - 1)),
    firstBoatLerp = lerpDamp(
      firstBoatLerp,
      game_completed ? lerp(firstBoatLerp, -9, 1.5 * gameTimeDelta) : clamp01(gameTime / 3),
      1,
    ),
    _messageEndTime && gameTime > _messageEndTime && (_messageEndTime = 0, h4.innerHTML = ""),
    levers[0].$value && 0.8 < levers[0].$lerpValue && (souls_collected_count < 13
      ? (showMessage("Not leaving now, there are souls to catch!", 3), levers[0].$value = 0)
      : game_completed
        || (showMessage("Well done. They will be punished.<br>Thanks for playing", 1 / 0), game_completed = 1));

  for (const model of allModels) model._update && (model.$matrix = model._update());

  for (const lever of levers) lever._update();

  for (const soul of souls) soul._update();
};

const updateCollectedSoulsCounter = () =>
  h3.innerHTML = [
    "0",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
  ][
    souls_collected_count = souls.reduce((acc, {
      $value,
    }) => acc + $value, 0)
  ];

const saveGame = () => {
  localStorage["DanteSP22"] = JSON.stringify([
    levers.map(({
      $value,
    }) => $value),
    souls.map(({
      $value,
    }) => $value),
    player_last_pulled_lever,
    gameTime,
    secondBoatLerp,
  ]);
};

const newModel = (fn, $kind = 1) => {
  const previousModel = currentEditModel;
  var $kind = {
    $matrix: identity,
    $modelId: allModels.length,
    $kind,
    $polygons: [],
  };
  return allModels.push(currentEditModel = $kind), fn($kind), currentEditModel = previousModel, $kind;
};

const meshAdd = (polygons, transform = identity, color) =>
  currentEditModel.$polygons.push(...polygons_transform(polygons, transform, color));

const newLever = transform => {
  const $parent = currentEditModel;
  const index2 = levers.length;
  const lever = {
    $value: 0,
    $lerpValue: 0,
    $lerpValue2: 0,
    $parent,

    _update() {
      let leverIndex;
      const {
        $value,
        $lerpValue,
        $lerpValue2,
      } = lever;
      const locMatrix = $parent.$matrix.multiply(transform);
      lever.$locMatrix = locMatrix,
        vec3_distance(locMatrix.transformPoint(), player_position_final) < 3 && keyboard_downKeys[5]
        && ($lerpValue < 0.3 || 0.7 < $lerpValue)
        && (lever.$value = $value ? 0 : 1,
          (leverIndex = index2) && showMessage("* click *", 1),
          player_last_pulled_lever = leverIndex,
          saveGame()),
        lever.$lerpValue = lerpDamp($lerpValue, $value, 4),
        lever.$lerpValue2 = lerpDamp($lerpValue2, $value, 1),
        lever.$matrix = locMatrix.rotate(60 * lever.$lerpValue - 30, 0).translateSelf(0, 1);
    },
  };
  levers.push(lever),
    meshAdd(cylinder(5), transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5)),
    meshAdd(cylinder(5), transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5)),
    meshAdd(cylinder(), transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};

const newSoul = (transform, ...walkingPath) => {
  let dirX = -1;
  let dirZ = 0;
  let randAngle = 0;
  let lookAngle = 0;
  let prevX = 0;
  let prevZ = 0;
  let wasInside = 1;
  let velocity = 3;
  const soul = {
    $value: 0,

    _update() {
      if (!soul.$value) {
        let x1;
        let z1;
        let w1;
        let ax;
        let az;
        let magnitude;
        let contextualVelocity = 1;
        let mindist = 1 / 0;
        let isInside;

        for (const c of circles) {
          var {
            x,
            z,
            w,
          } = c;
          var z = (x = Math.hypot(targetX - x, targetZ - z)) - w;
          isInside ||= x < w,
            0 < z && mindist > z && (mindist = z, circle = c),
            contextualVelocity = min(contextualVelocity, x / w);
        }

        isInside || (({
          x: x1,
          z: z1,
          w: w1,
        } = circle),
          ax = targetX - x1,
          az = targetZ - z1,
          magnitude = Math.hypot(ax, az),
          angle = Math.atan2(-az, ax),
          wasInside
          && (randAngle = (Math.random() - 0.5) * Math.PI / 2, velocity = max(1, velocity / (1 + Math.random()))),
          angle += randAngle,
          dirX = -Math.cos(angle),
          dirZ = Math.sin(angle),
          0.1 < magnitude
          && (magnitude = min(magnitude, w1) / (magnitude || 1),
            targetX = ax * magnitude + x1,
            targetZ = az * magnitude + z1)),
          wasInside = isInside,
          velocity = lerpDamp(velocity, 3 + 6 * (1 - contextualVelocity), 3 + contextualVelocity),
          soulX = lerpDamp(soulX, targetX = lerpDamp(targetX, targetX + dirX, velocity), velocity),
          soulZ = lerpDamp(soulZ, targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity), velocity),
          lookAngle = angle_lerp_degrees(
            lookAngle,
            Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180,
            3 * gameTimeDelta,
          ),
          prevX = soulX,
          prevZ = soulZ;
        var angle = (soul.$matrix = parentModel.$matrix.multiply(
          transform.translate(soulX, 0, soulZ).rotateSelf(0, lookAngle, 7 * Math.sin(1.7 * gameTime)),
        )).transformPoint();
        vec3_distance(angle, player_position_final) < 1.55
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
                "Vladimir Putin<br>evil war",
                "He was not a good person",
                ,
                "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
              ][souls_collected_count] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              souls_collected_count && souls_collected_count < 12 ? 5 : 7,
            ),
            updateCollectedSoulsCounter(),
            saveGame());
      }

      soul.$value
        && (soul.$matrix = allModels[2].$matrix.translate(
          index2 % 4 * 1.2 - 1.7 + Math.sin(gameTime + index2) / 7,
          -2,
          1.7 * (index2 / 4 | 0) - 5.5 + abs(index2 % 4 - 2) + Math.cos(gameTime / 1.5 + index2) / 6,
        ));
    },
  };
  const parentModel = currentEditModel;
  const index2 = souls.length;
  const circles = walkingPath.map(([x, z, w]) => ({
    x,
    z,
    w,
  }));
  let circle = circles[0];
  let {
    x: targetX,
    z: targetZ,
  } = circle;
  let soulX = targetX;
  let soulZ = targetZ;
  souls.push(soul);
};

const mat_perspective = (near, far) =>
  mat_perspectiveXY(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, near, far);

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
  return nearPlane = integers_map(8, i => (i = projViewInverse.transformPoint({
    x: 4 & i ? 1 : -1,
    y: 2 & i ? 1 : -1,
    z: 1 & i ? 1 : -1,
  }),
    tx -= i.x = (roundingRadius * i.x | 0) / roundingRadius / i.w,
    ty -= i.y = (roundingRadius * i.y | 0) / roundingRadius / i.w,
    tz -= i.z = (roundingRadius * i.z | 0) / roundingRadius / i.w,
    i)),
    farPlane = identity.rotate(298, 139).translateSelf(tx / 8, ty / 8, tz / 8),
    polygon_transform(nearPlane, farPlane).map(({
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
    ).multiplySelf(farPlane);
};

const initPage = () => {
  let music_on = !0;
  let touchStartTime;
  let touchPosStartX;
  let touchPosStartY;
  let touchPosIdentifier;
  let touchPosMoved;
  let touchRotX;
  let touchRotY;
  let touchRotIdentifier;
  let touchRotMoved;
  let touchStartCameraRotX;
  let touchStartCameraRotY;
  let pageClicked;

  const updateMusicOnState = () => {
    mainMenuVisible || !music_on ? songAudioSource.disconnect() : songAudioSource.connect(audioContext.destination),
      b4.innerHTML = "Music: " + music_on;
  };

  const mainMenu = (value = !1) => {
    if (mainMenuVisible !== value) {
      mainMenuVisible = value;

      try {
        value ? (document.exitFullscreen().catch(() => {}), document.exitPointerLock()) : songAudioSource.start();
      } catch {}

      player_first_person = 0,
        document.body.className = value ? "l m" : "l",
        updateMusicOnState(),
        updateCollectedSoulsCounter();
    }
  };

  oncontextmenu = () => !1,
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage["DanteSP22"] = "", location.reload());
    },
    b1.onclick = () => {
      document.body.requestFullscreen(), mainMenu();
    },
    b2.onclick = () => {
      document.body.requestFullscreen(), mainMenu(), player_first_person = 1;
    },
    b4.onclick = () => {
      music_on = !music_on, updateMusicOnState();
    },
    b5.onclick = () => mainMenu(!0),
    onclick = e => {
      pageClicked = 1,
        mainMenuVisible
        || (e.target === hC && (keyboard_downKeys[5] = !0), player_first_person && hC.requestPointerLock());
    },
    onkeyup = onkeydown = ({
      code: code2,
      target,
      type,
      repeat,
    }) => {
      repeat
        || ((repeat = !!type[5] && target === document.body)
            && (code2 === "Escape" || code2 === "Enter" && mainMenuVisible)
          ? mainMenuVisible && !pageClicked || mainMenu(!mainMenuVisible)
          : (type = {
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
            }[code2]) === 5
          ? repeat && (keyboard_downKeys[type] = 1)
          : keyboard_downKeys[type] = repeat);
    },
    onmousemove = ({
      movementX,
      movementY,
    }) => {
      player_first_person && (movementX || movementY)
        && (camera_rotation.y += 0.1 * movementX, camera_rotation.x += 0.1 * movementY);
    },
    hC.ontouchstart = e => {
      if (!mainMenuVisible) {
        for (
          let {
            pageX,
            pageY,
            identifier,
          } of e.changedTouches
        ) {
          player_first_person && pageX > hC.clientWidth / 2
            ? touchRotIdentifier === void 0
              && (touchRotMoved = 0,
                touchRotX = pageX,
                touchRotY = pageY,
                touchRotIdentifier = identifier,
                touchStartCameraRotX = camera_rotation.y,
                touchStartCameraRotY = camera_rotation.x)
            : touchPosIdentifier === void 0
              && (touchPosMoved = 0, touchPosStartX = pageX, touchPosStartY = pageY, touchPosIdentifier = identifier);
        }

        touchStartTime = absoluteTime;
      }
    },
    hC.ontouchmove = e => {
      if (!mainMenuVisible) {
        for (
          let {
            pageX,
            pageY,
            identifier,
          } of e.changedTouches
        ) {
          var deltaY;
          var absDeltaX;
          var absDeltaY;
          var angle;
          var speed;
          touchRotIdentifier === identifier
          && (camera_rotation.y = touchStartCameraRotX + (pageX - touchRotX) / 2.3,
            camera_rotation.x = touchStartCameraRotY + (pageY - touchRotY) / 2.3,
            touchRotMoved = 1),
            touchPosIdentifier === identifier
            && (identifier = (touchPosStartX - pageX) / 20,
              deltaY = (touchPosStartY - pageY) / 20,
              absDeltaX = abs(identifier),
              absDeltaY = abs(deltaY),
              angle = Math.atan2(deltaY, identifier),
              speed = clamp01(Math.hypot(deltaY, identifier) - 0.5),
              touch_movementX = 0.2 < absDeltaX ? Math.cos(angle) * speed : 0,
              touch_movementY = 0.2 < absDeltaY ? Math.sin(angle) * speed : 0,
              (touch_movementX || touch_movementY) && (touchPosMoved = 1),
              2 < absDeltaX && (touchPosStartX = pageX + 20 * Math.sign(identifier)),
              2 < absDeltaY && (touchPosStartY = pageY + 20 * Math.sign(deltaY)));
        }
      }
    },
    hC.ontouchend = e => {
      let click;
      e.preventDefault();

      for (const touch of e.changedTouches) {touch.identifier === touchRotIdentifier
          ? (touchRotIdentifier = void 0, touchRotMoved || (click = 1), touchRotMoved = 0)
          : touch.identifier === touchPosIdentifier
          ? (touchPosIdentifier = void 0,
            touch_movementY = touch_movementX = 0,
            touchPosMoved || (click = 1),
            touchPosMoved = 0)
          : click = 1;}

      click && e.target === hC && touchStartTime && 0.02 < (e = absoluteTime - touchStartTime) && e < 0.7
        && (keyboard_downKeys[5] = !0);
    },
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth,
        hC.height = innerHeight,
        keyboard_downKeys.length = touch_movementX = touch_movementY = 0,
        touchPosIdentifier = touchRotIdentifier = void 0,
        document.hidden && mainMenu(!0);
    })(),
    mainMenu(!0);
};

const player_init = () => {
  let currentModelIdTMinus1 = 0;
  let currentModelId = 0;
  let player_look_angle_target = 0;
  let player_look_angle = 0;
  let player_legs_speed = 0;
  let player_respawned = 2;

  let _gamepadInteractPressed = !1;

  let oldModelId;
  let player_has_ground;
  let player_gravity;
  let player_speed;
  let player_collision_velocity_x;
  let player_collision_velocity_z;
  let player_model_y;
  let player_collision_x;
  let player_collision_z;
  let camera_lookat_x;
  let camera_lookat_y;
  let camera_lookat_z;
  const player_position_global = {
    x: 0,
    y: 0,
    z: 0,
  };
  const player_collision_modelIdCounter = new Int32Array(256);
  const collision_buffer = new Uint8Array(65536);

  const player_respawn = () => {
    currentModelIdTMinus1 = currentModelId = levers[player_last_pulled_lever].$parent.$modelId || 1,
      player_speed = 0,
      player_gravity = 0,
      player_collision_velocity_x = 0,
      player_collision_velocity_z = 0,
      player_has_ground = 0,
      player_respawned = 2;
  };

  const doHorizontalCollisions = () => {
    for (let y = 32; y < 128; y += 2) {
      let front = 0;
      let back = 0;
      let left = 0;
      let right = 0;
      const yindex = 512 * y;

      for (let x = 1 & y; x < 128; x += 2) {
        const i1 = yindex + 4 * x;
        let i2 = yindex + 4 * (127 - x);
        const dist1 = collision_buffer[i1] / 255;
        const dist2 = collision_buffer[1 + i2] / 255;
        const t = 1 - abs(x / 63.5 - 1);
        10 < x && x < 118
        && (front = max(front, max(dist1 * t, dist1 * collision_buffer[i2] / 255)),
          back = max(back, max(dist2 * t, dist2 * collision_buffer[1 + i1] / 255))),
          (x < 54 || 74 < x) && 1e-3 < (i2 = (1 - t) * max(dist1, dist2) / 3)
          && (x < 64 && i2 > left ? left = i2 : 64 < x && i2 > right && (right = i2));
      }

      abs(right - left) > abs(player_collision_x) && (player_collision_x = right - left),
        abs(back - front) > abs(player_collision_z) && (player_collision_z = back - front);
    }
  };

  const doVerticalCollisions = () => {
    let maxModelIdCount = 0;
    let nextModelId = 0;
    let lines = 0;
    let grav = 0;
    player_collision_modelIdCounter.fill(0);

    for (let y = 0; y < 31; ++y) {
      let up = 0;
      const yindex = 512 * y;

      for (let x = 0; x < 128; x++) {
        var i = yindex + 4 * x;
        let a = (collision_buffer[i] + collision_buffer[1 + i]) / 255;
        var i = collision_buffer[2 + i];
        14 < x && x < 114 && (up += a),
          i && a
          && (a = player_collision_modelIdCounter[i] + 1,
            player_collision_modelIdCounter[i] = a,
            maxModelIdCount > a || (maxModelIdCount = a, nextModelId = i));
      }

      up < 3 && 5 < y && (grav += y / 32), 3 < up && (7 < y && (lines += y / 15), player_has_ground = 1);
    }

    nextModelId && (player_has_ground = 1),
      player_respawned
        ? nextModelId && (player_respawned = 0, currentModelId = nextModelId)
        : currentModelId = nextModelId || currentModelIdTMinus1,
      currentModelIdTMinus1 = nextModelId,
      player_gravity = lerpDamp(player_gravity, player_has_ground ? 6.5 : 8, 4),
      player_position_global.y += lines / 41
        - (player_has_ground ? 1 : player_gravity) * grav / 41 * player_gravity * gameTimeDelta;
  };

  const interpolate_with_hysteresis = (previous, desired, hysteresis) =>
    lerpDamp(previous, desired, min(4, max(0.4, abs(previous - desired) - hysteresis)));

  player_update = () => {
    let strafe = touch_movementX + (keyboard_downKeys[0] ? 1 : 0) + (keyboard_downKeys[2] ? -1 : 0);
    let forward = touch_movementY + (keyboard_downKeys[1] ? 1 : 0) + (keyboard_downKeys[3] ? -1 : 0);
    let gamepad = navigator.getGamepads()[0];

    if (gamepad) {
      const {
        buttons,
        axes,
      } = gamepad;
      (gamepad = (getGamepadButtonState = index2 => buttons[index2]?.pressed || 0 < buttons[index2]?.value)(1)
          || getGamepadButtonState(3) || getGamepadButtonState(2) || getGamepadButtonState(0))
        !== _gamepadInteractPressed && (_gamepadInteractPressed = gamepad) && (keyboard_downKeys[5] = 1),
        strafe += (0.2 < abs(-axes[0]) ? -axes[0] : 0) + (getGamepadButtonState(14) ? 1 : 0)
          + (getGamepadButtonState(15) ? -1 : 0),
        forward += (0.2 < abs(-axes[1]) ? -axes[1] : 0) + (getGamepadButtonState(12) ? 1 : 0)
          + (getGamepadButtonState(13) ? -1 : 0),
        player_first_person
        && (0.3 < abs(axes[2]) && (camera_rotation.y += 80 * axes[2] * gameTimeDelta),
          0.3 < abs(axes[3]) && (camera_rotation.x += 80 * axes[3] * gameTimeDelta));
    }

    gamepad = Math.atan2(forward, strafe);
    let amount = clamp01(Math.hypot(forward, strafe));
    amount < 0.05 && (amount = 0),
      strafe = amount * Math.cos(gamepad),
      forward = amount * Math.sin(gamepad),
      player_collision_x = 0,
      player_collision_z = 0,
      player_has_ground = 0,
      gl["fa7"](),
      gl["r9r"](0, 0, 128, 128, 6408, 5121, collision_buffer),
      gl["iay"](36008, [36064, 36096]),
      gl["iay"](36009, [36064, 36096]),
      NO_INLINE(doHorizontalCollisions)(),
      NO_INLINE(doVerticalCollisions)();
    var getGamepadButtonState = clamp01(1 - 5 * max(abs(player_collision_x), abs(player_collision_z)));
    var ty = (currentModelId
      || (player_collision_x += player_collision_velocity_x * getGamepadButtonState * gameTimeDelta,
        player_collision_z += player_collision_velocity_z * getGamepadButtonState * gameTimeDelta),
      player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4),
      player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4),
      player_speed = lerpDamp(
        player_speed,
        player_has_ground ? (strafe || forward ? player_has_ground ? 7 : 4 : 0) * getGamepadButtonState : 0,
        player_has_ground ? 0.1 < getGamepadButtonState ? 10 : strafe || forward ? 5 : 7 : 1,
      ),
      player_collision_x += strafe * player_speed * gameTimeDelta,
      player_collision_z += forward * player_speed * gameTimeDelta,
      (inverseReferenceRotationMatrix =
        (getGamepadButtonState = allModels[currentModelId].$kind === 1 && allModels[currentModelId].$matrix
          || identity).inverse()).m41 = 0,
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
      player_respawned && (({
        x: inverseReferenceRotationMatrix,
        y: ty,
        z: tz,
      } = levers[player_last_pulled_lever].$locMatrix.transformPoint({
        x: 0,
        y: 12,
        z: -4,
      })),
        1 < player_respawned && (player_respawned = 1, player_model_y = player_position_final.y = ty),
        player_position_final.x = inverseReferenceRotationMatrix,
        player_position_final.z = tz),
      currentModelId !== oldModelId && (oldModelId = currentModelId,
        ({
          x: ty,
          y: inverseReferenceRotationMatrix,
          z: tz,
        } = getGamepadButtonState.inverse().transformPoint(player_position_final)),
        player_position_global.x = ty,
        player_position_global.y = inverseReferenceRotationMatrix,
        player_position_global.z = tz),
      player_position_final.x);
    var inverseReferenceRotationMatrix = player_position_final.z;
    var {
      x: tz,
      y: getGamepadButtonState,
      z,
    } = getGamepadButtonState.transformPoint(player_position_global);
    player_position_final.x = tz,
      player_position_final.y = getGamepadButtonState,
      player_position_final.z = z,
      currentModelId
      && (player_collision_velocity_x = (tz - ty) / gameTimeDelta,
        player_collision_velocity_z = (z - inverseReferenceRotationMatrix) / gameTimeDelta),
      amount && (player_look_angle_target = 90 - gamepad / DEG_TO_RAD),
      player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, 8 * gameTimeDelta),
      player_legs_speed = lerp(player_legs_speed, amount, 10 * gameTimeDelta),
      player_model_y = lerp(
        lerpDamp(player_model_y, getGamepadButtonState, 2),
        getGamepadButtonState,
        8 * abs(player_model_y - getGamepadButtonState),
      ),
      camera_lookat_x === void 0
      && (camera_position.x = camera_lookat_x = tz,
        camera_position.y = (camera_lookat_y = player_model_y = getGamepadButtonState) + 13,
        camera_position.z = (camera_lookat_z = z) + -36),
      camera_lookat_x = interpolate_with_hysteresis(camera_lookat_x, tz, 1.5),
      camera_lookat_y = interpolate_with_hysteresis(camera_lookat_y, getGamepadButtonState, 2.2),
      camera_lookat_z = interpolate_with_hysteresis(camera_lookat_z, z, 1.5),
      player_first_person
        ? (camera_position.x = lerpDamp(camera_position.x, tz, 666 * player_respawned + 18),
          camera_position.y = lerpDamp(camera_position.y, player_model_y + 1.5, 666 * player_respawned + 18),
          camera_position.z = lerpDamp(camera_position.z, z, 666 * player_respawned + 18))
        : (camera_position.x = lerpDamp(camera_position.x, camera_lookat_x, 2),
          camera_position.y = lerpDamp(camera_position.y, max(camera_lookat_y + 13, 6), 2),
          camera_position.z = lerpDamp(camera_position.z, camera_lookat_z + -18, 2),
          ty = camera_position.z - camera_lookat_z,
          1 < abs(ty)
          && (inverseReferenceRotationMatrix = camera_position.x - camera_lookat_x,
            camera_rotation.y = 270 + Math.atan2(ty, inverseReferenceRotationMatrix) / DEG_TO_RAD,
            camera_rotation.x = 90
              - Math.atan2(Math.hypot(ty, inverseReferenceRotationMatrix), camera_position.y - camera_lookat_y)
                / DEG_TO_RAD)),
      camera_rotation.x = max(min(camera_rotation.x, 87), -87),
      camera_rotation.y = angle_wrap_degrees(camera_rotation.y),
      currentModelId === 1 && (levers[9].$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0),
      (player_position_final.x < -25 || player_position_final.z < 109 ? -25 : -9) > player_position_final.y
      && player_respawn(),
      allModels[37].$matrix = identity.translate(player_position_final.x, player_model_y, player_position_final.z)
        .rotateSelf(0, player_look_angle),
      [MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1].map((modelId, i) => {
        allModels[modelId].$matrix = allModels[37].$matrix.translate(
          0,
          player_legs_speed * clamp01(0.45 * Math.sin(9.1 * gameTime + Math.PI * (i - 1) - Math.PI / 2)),
        ).rotateSelf(player_legs_speed * Math.sin(9.1 * gameTime + Math.PI * (i - 1)) * 0.25 / DEG_TO_RAD, 0);
      });
  }, player_respawn();
};

const loadShader = (source, type = 35633) => (type = gl["c6x"](type), gl["s3c"](type, source), gl["c6a"](type), type);

const initShaderProgram = (vertexShader, sfsSource) => {
  const uniforms = {};
  const program = gl["c1h"]();
  return gl["abz"](program, vertexShader),
    gl["abz"](program, loadShader(sfsSource, 35632)),
    gl["l8l"](program),
    name => name ? uniforms[name] || (uniforms[name] = gl["gan"](program, name)) : gl["u7y"](program);
};

const renderModels = (worldMatrixLoc, renderPlayer, soulModelId = 42) => {
  if (mainMenuVisible) {
    const matrix = identity.rotate(0, 40 * Math.sin(absoluteTime) - 70);

    for (const modelId of [37, MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1]) {
      matrixToArray(matrix, worldMatricesBuffer, modelId - 1);
    }

    gl["uae"](worldMatrixLoc, !1, worldMatricesBuffer),
      gl["d97"](
        4,
        allModels[MODEL_ID_PLAYER_LEG1].$vertexEnd - allModels[37].$vertexBegin,
        5123,
        2 * allModels[37].$vertexBegin,
      );
  } else {
    for (let i = 0; allModels.length > i; ++i) {
      allModels[i].$kind && matrixToArray(allModels[i].$matrix, worldMatricesBuffer, i - 1);
    }

    gl["uae"](worldMatrixLoc, !1, worldMatricesBuffer),
      gl["d97"](
        4,
        (renderPlayer ? allModels[MODEL_ID_PLAYER_LEG1].$vertexEnd : allModels[37].$vertexBegin) - 3,
        5123,
        6,
      );

    for (let i1 = 0; i1 < 13; ++i1) matrixToArray(souls[i1].$matrix, worldMatricesBuffer, i1);

    for (let i2 = 0; levers.length > i2; ++i2) {
      matrixToArray(levers[i2].$matrix, worldMatricesBuffer, i2 + 13),
        worldMatricesBuffer[16 * (i2 + 13) + 15] = 1 - levers[i2].$lerpValue;
    }

    gl["uae"](worldMatrixLoc, !1, worldMatricesBuffer),
      gl["das"](
        4,
        allModels[soulModelId].$vertexEnd - allModels[soulModelId].$vertexBegin,
        5123,
        2 * allModels[soulModelId].$vertexBegin,
        13,
      ),
      gl["das"](
        4,
        allModels[40].$vertexEnd - allModels[40].$vertexBegin,
        5123,
        2 * allModels[40].$vertexBegin,
        levers.length,
      );
  }
};

const loadStep = fn => {
  h4.innerHTML += ".", setTimeout(fn);
};

const getnotefreq = n => 396e-5 * 2 ** ((n - 256) / 12);

const osc_sin = value => Math.sin(value * Math.PI * 2);

const osc_square = value => value % 1 < 0.5 ? 1 : -1;

const osc_saw = value => value % 1 * 2 - 1;

const osc_tri = value => (value = value % 1 * 4) < 2 ? value - 1 : 3 - value;

const loadSong = done => {
  let channelIndex = 0;
  const song_numWords = 10725888;

  const finish = () => {
    const audioBuffer = audioContext.createBuffer(2, song_numWords / 2, 44100);

    for (let i = 0; i < 2; i++) {
      for (let j = i, data = audioBuffer.getChannelData(i); song_numWords > j; j += 2) {
        data[j >> 1] = mixBuffer[j] / 65536;
      }
    }

    songAudioSource.buffer = audioBuffer, songAudioSource.loop = !0, loadStep(done);
  };

  const next = () => {
    let high;
    let mixIndex = 0;
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
      const noteCache = [];
      let low = 0;
      let band = 0;
      let n;
      let f;
      let filterActive;
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
              const noteBuf = noteCache[n] || (noteCache[n] = ((song_rowLen2, note) => {
                let c1 = 0;
                let c2 = 0;
                let o1t;
                let o2t;
                const OSC1_WAVEFORM = channelIndex < 2 ? osc_saw : osc_sin;
                const OSC2_WAVEFORM = channelIndex < 2 ? channelIndex < 1 ? osc_square : osc_tri : osc_sin;
                const noteBuf2 = new Int32Array(ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE);

                for (let j1 = 0, j2 = 0; ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE > j1; ++j1, ++j2) {
                  let e = 1;
                  ENV_ATTACK > j1
                    ? e = j1 / ENV_ATTACK
                    : ENV_ATTACK + ENV_SUSTAIN > j1
                      || (e = (1 - (e = (j1 - ENV_ATTACK - ENV_SUSTAIN) / ENV_RELEASE))
                        * 3 ** (-ENV_EXP_DECAY / 16 * e)),
                    j2 < 0
                    || (j2 -= 4 * song_rowLen2,
                      o1t = getnotefreq(note + OSC1_SEMI),
                      o2t = getnotefreq(note + OSC2_SEMI) * (1 + (channelIndex ? 0 : 0.007200))),
                    noteBuf2[j1] = 80
                        * (OSC1_WAVEFORM(c1 += o1t * e ** (OSC1_XENV / 32)) * OSC1_VOL
                          + OSC2_WAVEFORM(c2 += o2t * e ** (OSC2_XENV / 32)) * OSC2_VOL
                          + (NOISE_VOL ? (2 * Math.random() - 1) * NOISE_VOL : 0))
                        * e | 0;
                }

                return noteBuf2;
              })(song_rowLen, n));

              for (let j = 0, i = 2 * rowStartSample; noteBuf.length > j; ++j, i += 2) chnBuf[i] += noteBuf[j];
            }
          }

          for (let rsample, j1 = 0; song_rowLen > j1; ++j1) {
            let lsample = 0;
            let k = 2 * (rowStartSample + j1);
            ((rsample = chnBuf[k]) || filterActive)
            && (f = 308e-5 * FX_FREQ,
              channelIndex !== 1 && channelIndex !== 4 || (f *= osc_sin(lfoFreq * k) * LFO_AMT / 512 + 0.5),
              f = 1.5 * Math.sin(f),
              low += f * band,
              high = (1 - FX_RESONANCE / 255) * (rsample - band) - low,
              band += f * high,
              rsample = channelIndex === 4 ? band : channelIndex === 3 ? high : low,
              channelIndex
              || (rsample = (rsample *= 22e-5) < 1 ? -1 < rsample ? osc_sin(rsample / 4) : -1 : 1, rsample /= 22e-5),
              rsample *= FX_DRIVE / 32,
              filterActive = 1e-5 < rsample * rsample,
              high = Math.sin(panFreq * k) * FX_PAN_AMT / 512 + 0.5,
              lsample = rsample * (1 - high),
              rsample *= high),
              k < dly
              || (lsample += chnBuf[1 + k - dly] * FX_DELAY_AMT / 255, rsample += chnBuf[k - dly] * FX_DELAY_AMT / 255),
              mixBuffer[mixIndex + k] += chnBuf[k] = lsample,
              ++k,
              mixBuffer[mixIndex + k] += chnBuf[k] = rsample;
          }
        }
      }

      mixIndex += chnBuf.length;
    }

    loadStep(++channelIndex < 5 ? next : finish);
  };

  const mixBuffer = new Int32Array(song_numWords);
  loadStep(next);
};

const groundTextureSvg = "data:image/svg+xml;base64,"
  + btoa(
    "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
  );
const material = NO_INLINE((r, g, b, a = 0) => 255 * a << 24 | 255 * b << 16 | 255 * g << 8 | 255 * r);
const audioContext = new AudioContext();
const songAudioSource = audioContext.createBufferSource();
const gl = hC.getContext("webgl2", {
  powerPreference: "high-performance",
});

for (const s in gl) gl[s[0] + [...s].reduce((p, c, i) => (p * i + c.charCodeAt(0)) % 434, 0).toString(36)] = gl[s];

loadStep(() => {
  let loadStatus = 0;

  const end = () => {
    if (++loadStatus == 2) {
      {
        const mainLoop = globalTime => {
          gl["f1s"](),
            requestAnimationFrame(mainLoop),
            dt = (globalTime - (_globalTime || globalTime)) / 1e3,
            mainMenuVisible ? (gameTimeDelta = 0, keyboard_downKeys[5] = 0) : gameTimeDelta = min(0.066, dt),
            gameTime += gameTimeDelta,
            absoluteTime += dt,
            _globalTime = globalTime,
            0 < gameTimeDelta && (worldStateUpdate(), player_update(), keyboard_downKeys[5] = 0);
          var dt = mainMenuVisible
            ? identity.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + clamp01(hC.clientWidth / 1e3))
            : identity.rotate(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z).invertSelf().translateSelf(
              -camera_position.x,
              -camera_position.y,
              -camera_position.z,
            );
          0 < gameTimeDelta
          && (collisionShader(),
            gl["b6o"](36160, collision_frameBuffer),
            gl["v5y"](0, 0, 128, 128),
            gl["c4s"](16640),
            gl["cbf"](!0, !1, !0, !1),
            gl["uae"](
              collisionShader("b"),
              !1,
              matrixToArray(
                identity.rotate(0, 180).invertSelf().translateSelf(
                  -player_position_final.x,
                  -player_position_final.y,
                  0.3 - player_position_final.z,
                ),
              ),
            ),
            renderModels(collisionShader("c"), 0, 41),
            gl["c4s"](256),
            gl["cbf"](!1, !0, !0, !1),
            gl["uae"](
              collisionShader("b"),
              !1,
              matrixToArray(
                identity.translate(-player_position_final.x, -player_position_final.y, -player_position_final.z - 0.3),
              ),
            ),
            renderModels(collisionShader("c"), 0, 41),
            gl["f1s"]()),
            csmShader(),
            gl["b6o"](36160, csm_framebuffer),
            gl["v5y"](0, 0, 2048, 2048),
            csm_render[0](csm_buildMatrix(dt, 0.3, 55, 10)),
            csm_render[1](csm_buildMatrix(dt, 55, 177, 11)),
            mainShader(),
            gl["b6o"](36160, null),
            gl["v5y"](0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight),
            gl["cbf"](!0, !0, !0, !0),
            gl["c4s"](16640),
            csm_render[0](),
            csm_render[1](),
            gl["uae"](mainShader("a"), !1, mat_perspective(0.3, 177)),
            gl["uae"](mainShader("b"), !1, matrixToArray(dt)),
            gl["ubu"](mainShader("k"), camera_position.x, camera_position.y, camera_position.z),
            renderModels(mainShader("c"), !player_first_person),
            skyShader(),
            gl["ubu"](skyShader("j"), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime),
            mainMenuVisible
              ? gl["ubu"](skyShader("k"), 0, 0, 0)
              : gl["ubu"](skyShader("k"), camera_position.x, camera_position.y, camera_position.z),
            gl["uae"](skyShader("b"), !1, matrixToArray(dt.inverse())),
            gl["d97"](4, 3, 5123, 0),
            gl["b6o"](36160, collision_frameBuffer),
            gl["f1s"]();
        };

        const groundTextureImage = image;
        const csm_framebuffer = gl["c5w"]();
        const collision_frameBuffer = gl["c5w"]();
        const collision_renderBuffer = gl["c3z"]();
        const collision_texture = gl["c25"]();
        const mainVertexShader = loadShader(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`);
        const csmShader = initShaderProgram(
          loadShader(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
          `#version 300 es
void main(){}`,
        );
        const skyShader = initShaderProgram(
          loadShader(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
          `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
        );
        const collisionShader = initShaderProgram(
          mainVertexShader,
          `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
        );
        const mainShader = initShaderProgram(
          mainVertexShader,
          `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
        );
        const csm_render =
          (collisionShader(),
            gl["uae"](collisionShader("a"), !1, mat_perspectiveXY(1.4, 0.59, 1e-4, 1)),
            skyShader(),
            gl["ubh"](skyShader("q"), 3),
            mainShader(),
            gl["ubh"](mainShader("q"), 3),
            integers_map(2, csmSplit => {
              const lightSpaceMatrix = new Float32Array(16);
              const texture = gl["c25"]();
              const lightSpaceMatrixLoc = mainShader(csmSplit ? "j" : "i");
              return gl["ubh"](mainShader(csmSplit ? "h" : "g"), csmSplit),
                gl["b6o"](36160, csm_framebuffer),
                gl["d45"]([0]),
                gl["r9l"](0),
                gl["a4v"](33984 + csmSplit),
                gl["b9j"](3553, texture),
                gl["t60"](3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                gl["t2z"](3553, 10241, 9729),
                gl["t2z"](3553, 10240, 9729),
                gl["t2z"](3553, 34893, 515),
                gl["t2z"](3553, 34892, 34894),
                gl["t2z"](3553, 10243, 33071),
                gl["t2z"](3553, 10242, 33071),
                matrix => {
                  matrix
                    ? (matrixToArray(matrix, lightSpaceMatrix),
                      gl["uae"](csmShader("b"), !1, lightSpaceMatrix),
                      gl["fas"](36160, 36096, 3553, texture, 0),
                      gl["c4s"](256),
                      renderModels(csmShader("c"), !player_first_person))
                    : gl["uae"](lightSpaceMatrixLoc, !1, lightSpaceMatrix);
                };
            }));
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
          gl["a4v"](33987),
          gl["b9j"](3553, gl["c25"]()),
          gl["t60"](3553, 0, 6408, 1024, 1024, 0, 6408, 5121, groundTextureImage),
          gl["gbn"](3553),
          gl["t2z"](3553, 10241, 9987),
          gl["t2z"](3553, 10240, 9729);

        try {
          const [savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedSecondBoatLerp] = JSON.parse(
            localStorage["DanteSP22"],
          );
          levers.map((lever, index2) =>
            lever.$lerpValue = lever.$lerpValue2 = lever.$value = index2 ? 0 | savedLevers[index2] : 0
          ),
            souls.map((soul, index2) => soul.$value = 0 | savedSouls[index2]),
            player_last_pulled_lever = savedLastPulledLever,
            gameTime = savedGameTime,
            secondBoatLerp = savedSecondBoatLerp;
        } catch {}

        firstBoatLerp = clamp01(player_last_pulled_lever),
          worldStateUpdate(),
          NO_INLINE(player_init)(),
          requestAnimationFrame(mainLoop);
      }
      NO_INLINE(initPage)();
    }
  };

  const image = new Image();
  image.onload = image.onerror = end,
    image.src = groundTextureSvg,
    NO_INLINE(loadSong)(() => {
      loadStep(() => {
        {
          const _triangleIndices = [];

          const getVertex = i => {
            let {
              x: x2,
              y: y2,
              z: z2,
            } = polygon[i];
            let index2 =
              (_vertexFloats[0] = x2,
                _vertexFloats[1] = y2,
                _vertexFloats[2] = z2,
                i = "" + (polygon.$smooth ? _vertexIntsSmooth : _vertexInts),
                _vertexMap.get(i));
            return index2 !== void 0
              ? (x2 = 3 * index2,
                _vertexNormals[x2] = (_vertexNormals[x2++] + _vertexInts[5]) / 2,
                _vertexNormals[x2] = (_vertexNormals[x2++] + _vertexInts[6]) / 2,
                _vertexNormals[x2] = (_vertexNormals[x2] + _vertexInts[7]) / 2)
              : (_vertexMap.set(i, index2 = _vertexMap.size),
                _vertexPositions.push(x2, y2, z2, _vertexFloats[3]),
                _vertexColors.push(_vertexInts[4]),
                _vertexNormals.push(_vertexInts[5], _vertexInts[6], _vertexInts[7])),
              index2;
          };

          let meshFirstIndex = 0;
          let polygon;
          const _vertexPositions = [];
          const _vertexColors = [];
          const _vertexNormals = [];

          const _vertexMap = new Map();

          const _vertexInts = new Int32Array(8);

          const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 5);

          const _vertexFloats = new Float32Array(_vertexInts.buffer);

          for (const model of allModels) {
            for (
              polygon
                of (_vertexFloats[3] = model.$modelId === 40 ? -13 : model.$kind && model.$modelId, model.$polygons)
            ) {
              const {
                x,
                y,
                z,
              } = plane_fromPolygon(polygon);
              _vertexInts[4] = 0 | polygon.$color,
                _vertexInts[5] = 32767 * x,
                _vertexInts[6] = 32767 * y,
                _vertexInts[7] = 32767 * z;

              for (let i = 2, a = getVertex(0), b = getVertex(1); polygon.length > i; ++i) {
                _triangleIndices.push(a, b, b = getVertex(i));
              }
            }

            model.$polygons = null,
              model.$vertexBegin = meshFirstIndex,
              model.$vertexEnd = meshFirstIndex = _triangleIndices.length;
          }

          gl["b11"](34962, gl["c1b"]()),
            gl["b2v"](34962, new Float32Array(_vertexPositions), 35044),
            gl["v7s"](0, 4, 5126, !1, 0, 0),
            gl["b11"](34962, gl["c1b"]()),
            gl["b2v"](34962, new Int16Array(_vertexNormals), 35044),
            gl["v7s"](1, 3, 5122, !0, 0, 0),
            gl["b11"](34962, gl["c1b"]()),
            gl["b2v"](34962, new Uint32Array(_vertexColors), 35044),
            gl["v7s"](2, 4, 5121, !0, 0, 0),
            gl["b11"](34963, gl["c1b"]()),
            gl["b2v"](34963, new Uint16Array(_triangleIndices), 35044),
            gl["e3x"](0),
            gl["e3x"](1),
            gl["e3x"](2);
        }
        loadStep(end);
      });
      {
        let tmpMatrix;

        const getBoatAnimationMatrix = (x, y, z) =>
          identity.translate(x + Math.sin(gameTime + 2) / 5, y + Math.sin(0.8 * gameTime) / 3, z).rotateSelf(
            2 * Math.sin(gameTime),
            Math.sin(0.7 * gameTime),
            Math.sin(0.9 * gameTime),
          );

        const hornsMatrices = integers_map(
          11,
          i => identity.translate(Math.sin(i / 10 * Math.PI), i / 10).rotate(+i).scale(1.0001 - i / 10, 0, 1 - i / 10),
        );
        const hornPolygons = integers_map(10, i =>
          cylinder_sides(
            polygon_transform(polygon_regular(18), hornsMatrices[i]).reverse(),
            polygon_transform(polygon_regular(18), hornsMatrices[i + 1]),
            1,
          )).flat();
        const boatPolygons = csg_polygons(
          csg_subtract(
            polygons_transform(
              cylinder(20, 1, 1.15, 1),
              identity.translate(0, -3).scale(3.5, 1, 3.5),
              material(0.7, 0.4, 0.25, 0.7),
            ),
            polygons_transform(
              cylinder(20, 1, 1.3, 1),
              identity.translate(0, -2.5).scale(2.6, 1, 3),
              material(0.7, 0.4, 0.25, 0.2),
            ),
            polygons_transform(cylinder(), identity.translate(4, -1.2).scale3d(2), material(0.7, 0.4, 0.25, 0.3)),
          ),
        );
        const bigArcPolygons = csg_polygons(
          csg_subtract(
            polygons_transform(cylinder(), identity.translate(0, -8).scale(6, 15, 2.2)),
            polygons_transform(cylinder(), identity.translate(0, -14.1).scale(4, 13, 4)),
            polygons_transform(cylinder(20, 1), identity.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
          ),
        );
        const gateBarsPolygons = integers_map(7, i =>
          polygons_transform(
            cylinder(6, 1),
            identity.translate(4 * (i / 6 - 0.5), 3).scale(0.2, 3, 0.2),
            material(0.3, 0.3, 0.38),
          )).flat();
        newModel(() => meshAdd([GQuad.slice(1)], identity.translate(-2).scale3d(3).rotate(90, 0)), 0),
          newModel(() => {
            const blackPlatform = (freq, amplitude, pz) =>
              newModel(model => {
                model._update = () =>
                  identity.translate(getOscillationAmount() * Math.sin(3 * freq + gameTime * freq) * amplitude),
                  GQuad.map(({
                    x,
                    z,
                  }) => {
                    meshAdd(
                      cylinder(11, 1),
                      identity.translate(4 * x, 4, pz + 4 * z).scale(0.8, 3, 0.8),
                      material(0.5, 0.3, 0.7, 0.6),
                    ),
                      meshAdd(
                        cylinder(),
                        identity.translate(4 * x, 7, pz + 4 * z).scale(1, 0.3),
                        material(0.5, 0.5, 0.5, 0.3),
                      );
                  }),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(
                          cylinder(),
                          identity.translate(0, 0, pz).scale(5, 1, 5),
                          material(0.8, 0.8, 0.8, 0.3),
                        ),
                        ...[-1, 1].map(i =>
                          polygons_transform(
                            cylinder(),
                            identity.translate(5 * i, 0.2, pz).rotate(-30 * i).scale(4, 1, 2),
                            material(0.8, 0.8, 0.8, 0.3),
                          )
                        ),
                      ),
                    ),
                  ),
                  meshAdd(cylinder(), identity.translate(0, -3, pz).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
              });

            const getOscillationAmount = () => min(levers[2].$lerpValue2, 1 - levers[4].$lerpValue2);

            const level3Oscillation = () =>
              clamp01(1 - 5 * getOscillationAmount()) * lerpneg(levers[4].$lerpValue, levers[5].$lerpValue);

            const shouldOscillate = () => lerpneg(levers[7].$lerpValue2, levers[6].$lerpValue2);

            const shouldPushRods = () => lerpneg(levers[10].$lerpValue, levers[11].$lerpValue);

            const hexPadShouldOscillate = () => lerpneg(levers[8].$lerpValue2, levers[12].$lerpValue2);

            const hexCorridorPolygons = (newModel(model => {
              model._update = () => getBoatAnimationMatrix(-12, 4.2, 40 * firstBoatLerp - 66),
                meshAdd(boatPolygons),
                newLever(identity.translate(0, -3, 4));
            }),
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
              meshAdd(
                cylinder(),
                identity.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              GQuad.map(({
                x,
                z,
              }) =>
                meshAdd(
                  cylinder(6),
                  identity.translate(3 * x, 3, 15 * z).scale(0.7, 4, 0.7),
                  material(0.6, 0.3, 0.3, 0.4),
                )
              ),
              [-23, 22].map(z =>
                meshAdd(cylinder(), identity.translate(0, 0, z).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2))
              ),
              [-15, 15].map((z, i) => {
                meshAdd(cylinder(), identity.translate(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4)),
                  meshAdd(cylinder(), identity.translate(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3)),
                  newModel(model => {
                    model._update = () => identity.translate(0, 4.7 * -levers[i + 1].$lerpValue, z),
                      meshAdd(gateBarsPolygons);
                  });
              }),
              integers_map(5, i =>
                integers_map(
                  2,
                  j =>
                    meshAdd(
                      hornPolygons,
                      identity.translate(18.5 * (j - 0.5), 0, 4.8 * i - 9.5).rotate(0, 180 - 180 * j).scale(
                        1.2,
                        10,
                        1.2,
                      ),
                      material(1, 1, 0.8, 0.2),
                    ),
                )),
              meshAdd(cylinder(), identity.translate(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2)),
              meshAdd(
                cylinder(),
                identity.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90),
                material(0.75, 0.75, 0.75, 0.2),
              ),
              meshAdd(
                cylinder(5),
                identity.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90),
                material(0.6, 0.3, 0.3, 0.4),
              ),
              newLever(identity.translate(-5.4, 1.5, -19).rotate(0, -90)),
              meshAdd(
                cylinder(),
                identity.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5),
                material(0.8, 0.2, 0.2, 0.5),
              ),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    csg_union(
                      polygons_transform(
                        cylinder(6, 0, 0, 0.3),
                        identity.translate(8, -3, -4).scale(13, 1, 13),
                        material(0.7, 0.7, 0.7, 0.2),
                      ),
                      polygons_transform(
                        cylinder(6),
                        identity.translate(0, -8).scale(9, 8, 8),
                        material(0.4, 0.2, 0.5, 0.5),
                      ),
                      polygons_transform(
                        cylinder(6, 0, 0, 0.3),
                        identity.translate(0, -0.92).scale(13, 2, 13),
                        material(0.8, 0.8, 0.8, 0.2),
                      ),
                    ),
                    polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),
                    polygons_transform(
                      cylinder(5, 0, 1.5),
                      identity.translate(0, 1).scale(4.5, 0.3, 4.5),
                      material(0.7, 0.5, 0.9, 0.2),
                    ),
                    polygons_transform(
                      cylinder(),
                      identity.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2),
                      material(0.5, 0.5, 0.5, 0.5),
                    ),
                    polygons_transform(
                      cylinder(6),
                      identity.translate(15, -1.5, 4).scale(3.5, 1, 3.5),
                      material(0.5, 0.5, 0.5, 0.5),
                    ),
                  ),
                ),
              ),
              newModel(model => {
                model._update = () =>
                  identity.translate(
                    0,
                    0.01 < levers[3].$lerpValue
                      ? (5 * Math.cos(1.5 * gameTime) + 2) * levers[3].$lerpValue2 * (1 - levers[2].$lerpValue)
                        + -15 * (1 - levers[3].$lerpValue)
                      : -500,
                    0,
                  ),
                  meshAdd(cylinder(5), identity.translate(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3)),
                  newLever(identity.translate(0, 1.2));
              }),
              newLever(identity.translate(15, -2, 4)),
              blackPlatform(0.7, 12, 35),
              blackPlatform(1, 8.2, 55),
              newModel(model => {
                model._update = () => identity.translate(getOscillationAmount() * Math.sin(gameTime / 1.5 + 2) * 12),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        csg_union(
                          polygons_transform(cylinder(), identity.scale(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
                          polygons_transform(cylinder(6), identity.scale(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
                          polygons_transform(
                            cylinder(),
                            identity.translate(0, -2).scale(2, 3.2, 1.9),
                            material(0.3, 0.8, 0.5, 0.5),
                          ),
                          polygons_transform(
                            cylinder(16, 1, 0, 4),
                            identity.scale(1, 1, 1.5).rotate(0, 90),
                            material(0.9, 0.9, 0.9, 0.2),
                          ),
                        ),
                        polygons_transform(cylinder(), identity.scale(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6)),
                      ),
                    ),
                    identity.translate(0, 0, 45),
                  ),
                  newSoul(identity.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              newModel(model => {
                model._update = () => identity.translate(9.8 * (1 - getOscillationAmount())),
                  meshAdd(
                    cylinder(3),
                    identity.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3),
                    material(0.3, 0.6, 0.6, 0.2),
                  ),
                  meshAdd(
                    cylinder(8),
                    identity.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5),
                    material(0.8, 0.8, 0.8, 0.2),
                  ),
                  meshAdd(cylinder(), identity.translate(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3)),
                  meshAdd(cylinder(), identity.translate(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3)),
                  newLever(identity.translate(-23, -0.5, 66.5));
              }),
              meshAdd(
                cylinder(),
                identity.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7),
                material(0.9, 0.9, 0.9, 0.2),
              ),
              newModel(model => {
                model._update = () => identity.translate(0, level3Oscillation() * Math.sin(1.35 * gameTime) * 4),
                  meshAdd(
                    cylinder(),
                    identity.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7),
                    material(0.7, 0.7, 0.7, 0.2),
                  ),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(cylinder(), identity.scale(3, 1.4, 2.7)),
                        polygons_transform(cylinder(), identity.scale(1.2, 8, 1.2)),
                      ),
                    ),
                    identity.translate(-33, -3, 55),
                    material(0.7, 0.7, 0.7, 0.2),
                  );
              }),
              newModel(model => {
                model._update = () => identity.translate(0, 0, level3Oscillation() * Math.sin(0.9 * gameTime) * 8),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(
                          cylinder(),
                          identity.translate(-27, -3, 55).scale(3, 1.4, 2.7),
                          material(0.9, 0.9, 0.9, 0.2),
                        ),
                        polygons_transform(
                          cylinder(),
                          identity.translate(-27, -3, 55).scale(1, 3),
                          material(0.9, 0.9, 0.9, 0.2),
                        ),
                      ),
                    ),
                  ),
                  meshAdd(cylinder(), identity.translate(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
              }),
              newModel(model => {
                model._update = () => identity.translate(0, -6.5 * levers[4].$lerpValue2),
                  meshAdd(
                    cylinder(6),
                    identity.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9),
                    material(0.7, 0.7, 0.7, 0.4),
                  );
              }),
              [...polygons_transform(
                csg_polygons(
                  csg_union(
                    polygons_transform(
                      cylinder(),
                      identity.translate(0, -3).scale(11, 1.4, 3),
                      material(0.9, 0.9, 0.9, 0.2),
                    ),
                    csg_subtract(
                      polygons_transform(cylinder(6), identity.rotate(90).scale(6, 8, 6), material(0.3, 0.6, 0.6, 0.3)),
                      polygons_transform(
                        cylinder(4, 0, 0.01),
                        identity.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45),
                        material(0.3, 0.6, 0.6, 0.3),
                      ),
                      polygons_transform(
                        cylinder(6),
                        identity.rotate(90).scale(5, 12, 5),
                        material(0.3, 0.6, 0.6, 0.3),
                      ),
                      ...[5, 0, -5].map(x =>
                        polygons_transform(
                          cylinder(5),
                          identity.translate(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8),
                          material(0.3, 0.6, 0.6, 0.3),
                        )
                      ),
                    ),
                  ),
                ),
                identity,
              )]);
            const pushingRod =
              (meshAdd(hexCorridorPolygons, identity.translate(-53, 0, 55)),
                meshAdd(cylinder(6), identity.translate(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3)),
                meshAdd(cylinder(7), identity.translate(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3)),
                newLever(identity.translate(-55, -1.1, 46).rotate(0, 90)),
                newModel(model => {
                  model._update = () =>
                    identity.translate(-75, (1 - levers[5].$lerpValue2) * (1 - levers[6].$lerpValue) * 3, 55).rotate(
                      180 * (1 - levers[5].$lerpValue2) + rotatingHexCorridorRotation,
                      0,
                    ), meshAdd(hexCorridorPolygons);
                }, 2),
                meshAdd(
                  cylinder(),
                  identity.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5),
                  material(0.7, 0.7, 0.7, 0.2),
                ),
                meshAdd(
                  cylinder(3, 0, -0.5),
                  identity.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
                  material(0.8, 0.8, 0.8, 0.2),
                ),
                meshAdd(
                  csg_polygons(
                    csg_subtract(
                      csg_union(
                        polygons_transform(
                          cylinder(),
                          identity.translate(-100, -2.5, 55).scale(8, 1, 8),
                          material(0.8, 0.8, 0.8, 0.2),
                        ),
                        polygons_transform(
                          cylinder(),
                          identity.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3),
                          material(0.8, 0.8, 0.8, 0.2),
                        ),
                        polygons_transform(
                          cylinder(),
                          identity.translate(-100, -2.6, 70).scale(3, 1.1, 7),
                          material(0.8, 0.8, 0.8, 0.2),
                        ),
                        polygons_transform(
                          cylinder(),
                          identity.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5),
                          material(0.8, 0.8, 0.8, 0.2),
                        ),
                        polygons_transform(
                          cylinder(6),
                          identity.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15),
                          material(0.6, 0.6, 0.6, 0.3),
                        ),
                        polygons_transform(
                          cylinder(),
                          identity.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6),
                          material(0.8, 0.8, 0.8, 0.2),
                        ),
                        polygons_transform(
                          cylinder(),
                          identity.translate(-100, 0.42, 92).scale(3, 1.1, 4.1),
                          material(0.8, 0.8, 0.8, 0.2),
                        ),
                      ),
                      polygons_transform(
                        cylinder(8),
                        identity.translate(-100, -1, 55).scale(7, 0.9, 7),
                        material(0.3, 0.3, 0.3, 0.4),
                      ),
                      polygons_transform(
                        cylinder(8),
                        identity.translate(-100, -2, 55).scale(4, 0.3, 4),
                        material(0.4, 0.4, 0.4, 0.5),
                      ),
                      polygons_transform(
                        cylinder(8),
                        identity.translate(-100, -3, 55).scale(0.6, 1, 0.6),
                        material(0.4, 0.4, 0.4, 0.5),
                      ),
                    ),
                  ),
                  identity,
                ),
                newSoul(identity.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
                newSoul(identity.translate(-89, 0.2, 80), [0, 0, 6]),
                meshAdd(
                  csg_polygons(
                    csg_subtract(
                      polygons_transform(
                        cylinder(),
                        identity.translate(-100, 1, 63).scale(7.5, 4),
                        material(0.5, 0.5, 0.5, 0.4),
                      ),
                      polygons_transform(
                        cylinder(),
                        identity.translate(-100, 0, 70).scale(2, 2, 10),
                        material(0.5, 0.5, 0.5, 0.4),
                      ),
                      polygons_transform(
                        cylinder(20, 1),
                        identity.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0),
                        material(0.5, 0.5, 0.5, 0.4),
                      ),
                    ),
                  ),
                ),
                newModel(model => {
                  model._update = () => identity.translate(-99.7, 5.3 * -levers[6].$lerpValue - 2, 63.5),
                    meshAdd(gateBarsPolygons);
                }),
                GQuad.map(({
                  x,
                  z,
                }) => {
                  meshAdd(
                    cylinder(6),
                    identity.translate(7 * x - 100, -3, 7 * z + 55).scale(1, 8.1),
                    material(0.6, 0.15, 0.15, 0.8),
                  ),
                    [4, -0.4].map(i =>
                      meshAdd(
                        cylinder(6),
                        identity.translate(7 * x - 100, i, 7 * z + 55).scale(1.3, 0.5, 1.3),
                        material(0.4, 0.2, 0.2, 0.8),
                      )
                    );
                }),
                integers_map(7, i => {
                  meshAdd(
                    cylinder((23 * i + 1) % 5 + 5, 0, 0.55),
                    identity.translate(5 * Math.sin(i) - 101 + i, -2.3 - i, 44.9 - 2.8 * i).scaleSelf(
                      5 + i / 2,
                      1 + i / 6,
                      5 + i / 3,
                    ),
                    material(0.5 - i / 17, 0.5 - (1 & i) / 9, 0.6, 0.3),
                  );
                }),
                meshAdd(cylinder(), identity.translate(-87, -9.5, 24).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4)),
                meshAdd(cylinder(4), identity.translate(-86, -9.2, 27).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3)),
                meshAdd(
                  cylinder(12, 1),
                  identity.translate(-86, -9, 31).scale(1.5, 1, 1.5),
                  material(0.3, 0.3, 0.4, 0.1),
                ),
                newLever(identity.translate(-86, -7.5, 31)),
                newModel(model => {
                  model._update = () =>
                    identity.translate(
                      0,
                      3.5 * (1 - max(levers[6].$lerpValue, levers[7].$lerpValue))
                        + shouldOscillate() * Math.sin(gameTime) * 5,
                    ),
                    [0, 12, 24].map(x =>
                      meshAdd(
                        cylinder(),
                        identity.translate(x - 76.9, x / -13 - 10, 24).scale(2.8, 1.5, 3),
                        material(0.2, 0.5, 0.6, 0.2),
                      )
                    );
                }),
                newModel(model => {
                  model._update = () =>
                    identity.translate(
                      0,
                      shouldOscillate() * Math.sin(gameTime + 3) * 6,
                      6 * Math.sin(0.6 * gameTime + 1) * shouldOscillate(),
                    ),
                    [6, 18].map(x =>
                      meshAdd(
                        cylinder(),
                        identity.translate(x - 76.9, x / -13 - 10, 24).scale(2.8, 1.5, 3),
                        material(0.1, 0.4, 0.5, 0.2),
                      )
                    );
                }),
                meshAdd(
                  csg_polygons(
                    csg_subtract(
                      csg_union(
                        polygons_transform(cylinder(), identity.scale(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)),
                        polygons_transform(
                          cylinder(5),
                          identity.translate(0, 0, -7).scale(2, 1.2, 2),
                          material(0.2, 0.4, 0.7, 0.3),
                        ),
                        polygons_transform(cylinder(5), identity.scale(9, 1.2, 9), material(0, 0.2, 0.3, 0.5)),
                      ),
                      polygons_transform(cylinder(5), identity.scale(5.4, 5, 5.4), material(0, 0.2, 0.3, 0.5)),
                    ),
                  ),
                  identity.translate(-38.9, -11.3, 17),
                ),
                newLever(identity.translate(-38.9, -9.6, 10)),
                newModel(model => {
                  model._update = () => identity.translate(0, -7.3 * levers[7].$lerpValue2),
                    meshAdd(
                      csg_polygons(
                        csg_subtract(
                          csg_union(
                            polygons_transform(
                              cylinder(5),
                              identity.translate(0, 2).scale(5, 7, 5).skewY(8),
                              material(0.2, 0.4, 0.5, 0.5),
                            ),
                            polygons_transform(
                              cylinder(5),
                              identity.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8),
                              material(0.25, 0.35, 0.5, 0.5),
                            ),
                            polygons_transform(
                              cylinder(5),
                              identity.translate(0, 9).scale(0.6, 7, 0.6).skewY(8),
                              material(0.35, 0.3, 0.5, 0.5),
                            ),
                          ),
                          polygons_transform(
                            cylinder(5),
                            identity.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35),
                            material(0.2, 0.4, 0.5, 0.5),
                          ),
                        ),
                      ),
                      identity.translate(-38.9, -11.3, 17),
                    ),
                    newSoul(
                      identity.translate(-39.1, -0.6, 17).rotate(11),
                      ...polygon_regular(15).map(({
                        x,
                        z,
                      }) => [3 * x, 3 * z, 1.2]),
                    );
                }),
                GQuad.map(({
                  x,
                  z,
                }) => {
                  tmpMatrix = identity.translate(9 * x - 38.9, -7.3, 11 * z + 17),
                    meshAdd(cylinder(14, 1), tmpMatrix.scale(1, 4), material(0.25, 0.25, 0.25, 1)),
                    [1.5, 8].map(y =>
                      meshAdd(
                        cylinder(17, 1),
                        tmpMatrix.translate(0, y - 4).scale(1.5, 0.5, 1.5),
                        material(0.6, 0.6, 0.6, 0.3),
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
                          material(0.7, 0.7, 0.7, 0.3),
                        ),
                        polygons_transform(
                          cylinder(),
                          identity.translate(0, 0, -18).scale(4, 1.2, 6),
                          material(0.45, 0.4, 0.6, 0.3),
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
                            material(0.7, 0.7, 0.7, 0.3),
                          ))).flat(),
                    ),
                  ),
                  identity.translate(-38.9, -11.3, 17),
                ),
                newSoul(identity.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
                meshAdd(
                  cylinder(5),
                  identity.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10),
                  material(0.8, 0.1, 0.25, 0.4),
                ),
                newLever(identity.translate(-84, -0.5, 85).rotate(0, 45)),
                newModel(model => {
                  model._update = () => getBoatAnimationMatrix(-123, 1.4, 55 + -65 * secondBoatLerp),
                    newLever(identity.translate(0, -3, -4).rotate(0, 180)),
                    meshAdd(boatPolygons);
                }),
                newSoul(identity.translate(-115, 0.2, -12), [0, 0, 3.5]),
                csg_polygons(
                  csg_subtract(
                    polygons_transform(
                      cylinder(),
                      identity.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5),
                      material(0.25, 0.25, 0.35, 0.3),
                    ),
                    polygons_transform(
                      cylinder(3),
                      identity.translate(0, 0, -5.5).scale(3, 2),
                      material(0.6, 0.3, 0.4, 0.3),
                    ),
                    ...[-1.2, 1.2].map(i => polygons_transform(
                      cylinder(),
                      identity.translate(i, -0.5, 1).scale(0.14, 0.3, 6.5),
                      material(0.7, 0.2, 0, 0.3),
                    )),
                  ),
                ));
            const rotPlatformBase = (newModel(model => {
              model._update = () =>
                identity.translate(0, -2, shouldPushRods() * abs(Math.sin(1.1 * gameTime)) * -8.5 + 10),
                integers_map(2, x => meshAdd(pushingRod, identity.translate(9 * x - 110 + (1 & x), 1.7, -12)));
            }),
              newModel(model => {
                model._update = () =>
                  identity.translate(0, -2, shouldPushRods() * abs(Math.sin(2.1 * gameTime)) * -8.5 + 10),
                  integers_map(2, x => meshAdd(pushingRod, identity.translate(9 * (x + 2) - 110 + (1 & x), 1.7, -12)));
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
                  ), integers_map(3, x => meshAdd(pushingRod, identity.translate(9 * x - 106, 1.7, -12)));
              }),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    csg_union(
                      polygons_transform(cylinder(), identity.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                      polygons_transform(cylinder(), identity.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),
                    ),
                    ...integers_map(4, x =>
                      polygons_transform(
                        cylinder(),
                        identity.translate(13 + 9 * x + (1 & x), -0.8, 9).scale(1.35, 1.35, 9),
                      )),
                    ...integers_map(
                      3,
                      x => polygons_transform(cylinder(), identity.translate(17 + 9 * x, -0.8, 9).scale(1.35, 1.35, 9)),
                    ),
                  ),
                ),
                identity.translate(-123, 0, -12),
                material(0.5, 0.5, 0.6, 0.2),
              ),
              meshAdd(
                cylinder(5),
                identity.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5),
                material(0.25, 0.25, 0.35, 1),
              ),
              meshAdd(
                cylinder(),
                identity.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              meshAdd(
                cylinder(6),
                identity.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3),
                material(0.6, 0.5, 0.7, 0.2),
              ),
              newLever(identity.translate(-116, -1.4, -18).rotate(0, 180)),
              integers_map(3, i => {
                meshAdd(bigArcPolygons, identity.translate(12 * i - 109, -9, -12), material(0.6, 0.6, 0.6, 0.3)),
                  meshAdd(
                    bigArcPolygons,
                    identity.translate(-77, -9, -12 * i - 20).rotate(0, 90),
                    material(0.6, 0.6, 0.6, 0.3),
                  );
              }),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    polygons_transform(
                      cylinder(12),
                      identity.translate(-77, -13.9, -12).scale(4, 18.2, 4),
                      material(0.7, 0.7, 0.7, 0.2),
                    ),
                    polygons_transform(
                      cylinder(),
                      identity.translate(-79, 0, -12).scale(3.5, 2.2, 1.3),
                      material(0.4, 0.5, 0.6, 0.2),
                    ),
                    polygons_transform(
                      cylinder(),
                      identity.translate(-77, 0, -14).scale(1.5, 2.2, 2),
                      material(0.4, 0.5, 0.6, 0.2),
                    ),
                    polygons_transform(
                      cylinder(12),
                      identity.translate(-77, 2.8, -12).scale(3, 5, 3),
                      material(0.4, 0.5, 0.6, 0.2),
                    ),
                  ),
                ),
              ),
              meshAdd(
                cylinder(),
                identity.translate(-115.5, -17, -12).scale(0.5, 15, 2.2),
                material(0.6, 0.6, 0.6, 0.3),
              ),
              meshAdd(
                cylinder(),
                identity.translate(-77, -17, -50.5).scale(2.2, 15, 0.5),
                material(0.6, 0.6, 0.6, 0.3),
              ),
              meshAdd(
                cylinder(),
                identity.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3),
                material(0.6, 0.6, 0.6, 0.3),
              ),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    polygons_transform(
                      cylinder(),
                      identity.translate(-93, -5.8, -40).scale(9, 1, 5),
                      material(0.8, 0.8, 0.8, 0.1),
                    ),
                    polygons_transform(
                      cylinder(9),
                      identity.translate(-98, -5.8, -40).scale(3, 8, 3),
                      material(0.7, 0.7, 0.7, 0.2),
                    ),
                  ),
                ),
              ),
              meshAdd(
                cylinder(9),
                identity.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5),
                material(0.5, 0.5, 0.5, 0.3),
              ),
              newLever(identity.translate(-98, -4.4, -40).rotate(0, 90)),
              newSoul(identity.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    csg_union(
                      polygons_transform(
                        cylinder(6, 0, 0, 0.6),
                        identity.translate(-100, 0.7, 105.5).scale(8, 1, 11),
                        material(0.7, 0.7, 0.7, 0.2),
                      ),
                      polygons_transform(
                        cylinder(),
                        identity.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2),
                        material(0.7, 0.7, 0.7, 0.2),
                      ),
                      polygons_transform(
                        cylinder(),
                        identity.translate(-91.2, 0.7, 107).scale(3, 1, 3.3),
                        material(0.7, 0.7, 0.7, 0.2),
                      ),
                    ),
                    polygons_transform(
                      cylinder(5),
                      identity.translate(-100, 0.7, 113).scale(4, 3, 4),
                      material(0.7, 0.7, 0.7, 0.2),
                    ),
                  ),
                ),
              ),
              integers_map(4, i =>
                newModel(model => {
                  model._update = () => {
                    const osc = hexPadShouldOscillate();
                    return identity.translate(
                      (2 < i ? 2 * (1 - osc) + osc : 0) - 100,
                      osc * Math.sin(1.3 * gameTime + 1.7 * i) * (3 + i / 3) + 0.7,
                      115 + (1 & i ? -1 : 1) * (1 - levers[8].$lerpValue2) * (1 - levers[12].$lerpValue2) * -7
                        + max(0.05, osc) * Math.cos(1.3 * gameTime + 7 * i) * (4 - 2 * (1 - i / 3)),
                    );
                  },
                    meshAdd(
                      cylinder(6),
                      identity.translate(-14.6 - 4.8 * i - (2 < i ? 2 : 0), -i / 2.3, -21.5).scale(2.6, 1, 2.5),
                      material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3),
                    );
                })),
              newModel(model => {
                model._update = () => {
                  const osc = hexPadShouldOscillate();
                  return identity.translate(
                    2.5 * (1 - osc) - 139.7,
                    -3 * (1 - levers[8].$lerpValue) + osc * Math.sin(0.8 * gameTime) * -1 - 1.8,
                    93.5,
                  ).rotateSelf(Math.cos(1.3 * gameTime) * (3 * osc + 3), 0);
                },
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
                        polygons_transform(cylinder(10), identity.scale(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5)),
                      ),
                    ),
                  ),
                  tmpMatrix = identity.translate(-7.5).rotate(0, 90),
                  meshAdd(cylinder(15, 1), tmpMatrix.scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3)),
                  meshAdd(cylinder(10), tmpMatrix.scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3)),
                  meshAdd(cylinder(5), tmpMatrix.scale(1, 3), material(0.5, 0.5, 0.5, 0.5)),
                  newLever(tmpMatrix.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(i =>
                    meshAdd(
                      hornPolygons,
                      identity.rotate(90 * -i, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3),
                      material(1, 1, 0.8, 0.2),
                    )
                  ),
                  newSoul(identity.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              }),
              [-1, 1].map(x => {
                meshAdd(
                  cylinder(12, 1),
                  identity.translate(-7.5 * x - 100, 3.7, 96).scale(0.8, 4, 0.8),
                  material(0.6, 0.24, 0.2, 0.5),
                ),
                  [7.2, 1.5].map(y =>
                    meshAdd(
                      cylinder(15, 1),
                      identity.translate(-7.5 * x - 100, y + 0.7, 96).scale(1.1, 0.5, 1.1),
                      material(0.5, 0.24, 0.2, 0.4),
                    )
                  ),
                  meshAdd(
                    hornPolygons,
                    identity.translate(-5 * x - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * x - 90),
                    material(1, 1, 0.8),
                  ),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(
                          cylinder(),
                          identity.translate(-4 * x, 3.5, -0.5).scale(4, 4, 0.7),
                          material(0.5, 0.5, 0.5, 0.4),
                        ),
                        polygons_transform(cylinder(), identity.scale(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)),
                        polygons_transform(
                          cylinder(28, 1),
                          identity.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0),
                          material(0.6, 0.24, 0.2, 0.5),
                        ),
                        polygons_transform(
                          cylinder(5),
                          identity.translate(-5.3 * x, 7).rotate(90, 0).scale(1.7, 5, 1.7),
                          material(0.6, 0.24, 0.2, 0.5),
                        ),
                        polygons_transform(
                          cylinder(5),
                          identity.translate(-5.3 * x, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75),
                          material(0.6, 0.24, 0.2, 0.5),
                        ),
                      ),
                    ),
                    identity.translate(x - 100, 0.7, 97),
                  );
              }),
              newModel(model => {
                model._update = () => identity.translate(-100, 0.6 - 6 * levers[12].$lerpValue, 96.5).scale(0.88, 1.2),
                  meshAdd(gateBarsPolygons);
              }),
              [
                ...polygons_transform(cylinder(25, 1), identity.scale(8, 1, 8), material(0.45, 0.45, 0.45, 0.2)),
                ...polygons_transform(
                  cylinder(5),
                  identity.translate(0, 1).scale(1, 0.2),
                  material(0.3, 0.3, 0.3, 0.2),
                ),
              ]);
            newModel(model => {
              model._update = () => identity.translate(-80, 1, 106).rotate(0, 40 + rotatingPlatform1Rotation),
                meshAdd(
                  csg_polygons(
                    csg_subtract(
                      polygons_transform(cylinder(25, 1), identity.scale(8, 1, 8), material(0.45, 0.45, 0.45, 0.2)),
                      polygons_transform(
                        cylinder(),
                        identity.translate(0, 0, -5.5).scale(1.5, 3, 2.5),
                        material(0.45, 0.45, 0.45, 0.2),
                      ),
                    ),
                  ),
                ),
                meshAdd(cylinder(8), identity.translate(0, 2).scale(3, 1.5, 3), material(0.7, 0.7, 0.7, 0.1)),
                meshAdd(cylinder(5), identity.translate(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2)),
                newSoul(
                  identity.translate(0, 3),
                  ...polygon_regular(10).map(({
                    x,
                    z,
                  }) => [5.6 * x, 5.6 * z, 2.5]),
                );
            }),
              newModel(model => {
                model._update = () => identity.translate(-64, 1, 106).rotate(0, rotatingPlatform2Rotation),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(
                          cylinder(25, 1),
                          identity.translate(0, 2).scale(8, 1, 8),
                          material(0.35, 0, 0, 0.3),
                        ),
                        polygons_transform(cylinder(), identity.scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                      ),
                    ),
                  ),
                  meshAdd(rotPlatformBase),
                  [-1, 1].map(x =>
                    meshAdd(
                      hornPolygons,
                      identity.rotate(0, 90).translate(-5 * x, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90),
                      material(1, 1, 0.8),
                    )
                  );
              }),
              newModel(model => {
                model._update = () => identity.translate(-48, 1, 106).rotate(0, 180 - rotatingPlatform2Rotation),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(
                          cylinder(25, 1),
                          identity.translate(0, 2).scale(8, 1, 8),
                          material(0.35, 0, 0, 0.3),
                        ),
                        polygons_transform(cylinder(), identity.translate(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                        polygons_transform(
                          cylinder(),
                          identity.translate(0, 0, 7).scale(2, 5, 9),
                          material(0.3, 0, 0, 0.3),
                        ),
                      ),
                    ),
                  ),
                  meshAdd(rotPlatformBase);
              }),
              newModel(model => {
                model._update = () => identity.translate(-48, 1, 90).rotate(0, 270 + rotatingPlatform2Rotation),
                  meshAdd(
                    csg_polygons(
                      csg_subtract(
                        polygons_transform(
                          cylinder(25, 1),
                          identity.translate(0, 2).scale(8, 1, 8),
                          material(0.35, 0, 0, 0.3),
                        ),
                        polygons_transform(cylinder(), identity.translate(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                        polygons_transform(
                          cylinder(),
                          identity.translate(0, 0, -7).scale(2, 5, 9),
                          material(0.3, 0, 0, 0.3),
                        ),
                      ),
                    ),
                  ),
                  meshAdd(rotPlatformBase);
              }),
              meshAdd(cylinder(), identity.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), material(0.7, 0.7, 0.7, 0.2)),
              meshAdd(cylinder(), identity.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), material(0.7, 0.7, 0.7, 0.2)),
              meshAdd(cylinder(), identity.translate(-39, 0.4, 90).scale(2, 1, 2), material(0.7, 0.7, 0.7, 0.3)),
              meshAdd(cylinder(), identity.translate(-34.2, 0.4, 90).scale(3, 1, 3), material(0.7, 0.7, 0.7, 0.3)),
              newLever(identity.translate(-34, 2.7, 96).rotate(-12, 0)),
              meshAdd(
                cylinder(5),
                identity.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0),
                material(0.2, 0.5, 0.5, 0.6),
              ),
              [material(0.1, 0.55, 0.45, 0.2), material(0.2, 0.5, 0.5, 0.3), material(0.3, 0.45, 0.55, 0.4)].map((
                m,
                i,
              ) =>
                newModel(model => {
                  model._update = () => {
                    const v = lerpneg(levers[13].$lerpValue2, levers[14].$lerpValue2);
                    return identity.translate(
                      0,
                      (1 - levers[13].$lerpValue2) * (1 - levers[14].$lerpValue2) * (i ? 0 : 3)
                        + v * Math.sin(1.5 * gameTime + 1.5 * i) * 4,
                    );
                  },
                    meshAdd(
                      cylinder(),
                      identity.translate(-23.5, 0.5, 90 + 6.8 * i).scale(i === 1 ? 2 : 3.3, 1, 3.3),
                      m,
                    ),
                    i === 2
                    && meshAdd(
                      cylinder(),
                      identity.translate(-29.1, 0.4, 90).scale(2.1, 1, 3),
                      material(0.7, 0.7, 0.7, 0.3),
                    ),
                    i === 1
                    && meshAdd(
                      cylinder(),
                      identity.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1),
                      material(0.6, 0.6, 0.7, 0.3),
                    );
                })
              ),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    polygons_transform(
                      cylinder(6, 0, 0, 0.3),
                      identity.translate(0, -0.92, 95).scale(14, 2, 14),
                      material(0.8, 0.8, 0.8, 0.2),
                    ),
                    polygons_transform(
                      cylinder(5),
                      identity.translate(0, 0, 95).scale3d(6),
                      material(0.3, 0.3, 0.3, 0.5),
                    ),
                  ),
                ),
              ),
              [8, -6.1].map((y, p) =>
                integers_map(
                  3,
                  i =>
                    meshAdd(
                      bigArcPolygons,
                      identity.translate(6 * i - 6, y - (1 & i), 111 - 0.2 * (1 & i) - p),
                      1 & i ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5),
                    ),
                )
              ),
              [-1, 1].map(x =>
                meshAdd(
                  hornPolygons,
                  identity.translate(-8 * x, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90),
                  material(1, 1, 0.8),
                )
              ),
              newLever(identity.translate(0, 1.7, 82).rotate(0, 180)),
              meshAdd(
                cylinder(5),
                identity.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35),
                material(0.5, 0.3, 0.3, 0.4),
              ),
              meshAdd(
                csg_polygons(
                  csg_subtract(
                    csg_union(
                      polygons_transform(
                        cylinder(),
                        identity.translate(0, 16, 110.5).scale(12, 1, 3),
                        material(0.5, 0.3, 0.3, 0.4),
                      ),
                      polygons_transform(
                        cylinder(),
                        identity.translate(0, 16, 111).scale(3, 1, 3.8),
                        material(0.5, 0.3, 0.3, 0.4),
                      ),
                    ),
                    polygons_transform(
                      cylinder(5),
                      identity.translate(0, 16, 103.5).scale(5.5, 5, 5.5),
                      material(0.5, 0.3, 0.3, 0.4),
                    ),
                  ),
                ),
              ),
              meshAdd(
                cylinder(6),
                identity.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90),
                material(0.5, 0.6, 0.7, 0.3),
              ),
              meshAdd(cylinder(), identity.translate(0, 16, 129).scale(1.5, 1, 2), material(0.5, 0.6, 0.7, 0.3)),
              meshAdd(cylinder(7), identity.translate(0, 16.2, 133).scale(5, 1, 5), material(0.4, 0.5, 0.6, 0.4)),
              newModel(model => {
                model._update = () => {
                  const k = Math.sin(gameTime);
                  return identity.translate(-2 * k).rotate(25 * k);
                },
                  meshAdd(
                    cylinder(3),
                    identity.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60),
                    material(0.5, 0.3, 0.3, 0.4),
                  ),
                  [22, 30].map(z => {
                    meshAdd(
                      cylinder(6),
                      identity.translate(0, 16, z + 95).scale(3, 1, 2.3).rotate(0, 90),
                      material(0.7, 0.7, 0.7, 0.4),
                    ),
                      meshAdd(
                        cylinder(),
                        identity.translate(0, 6.2, z + 95).scale(0.5, 11, 0.5),
                        material(0.5, 0.3, 0.3, 0.4),
                      );
                  });
              }),
              newModel(model => {
                model._update = () => {
                  const v = lerpneg(
                    lerpneg((levers[14].$lerpValue + levers[14].$lerpValue2) / 2, levers[13].$lerpValue2),
                    (levers[15].$lerpValue + levers[15].$lerpValue2) / 2,
                  );
                  return identity.translate(0, 16 * v, 8.5 * clamp01(2 * v - 1) + 95);
                },
                  meshAdd(cylinder(5), identity.scale(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4)),
                  meshAdd(cylinder(5), identity.scale(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4)),
                  newLever(identity.translate(0, 1.5, -1).rotate(0, 180));
              }),
              newSoul(
                identity.translate(0, 3, 95),
                ...polygon_regular(9).map(({
                  x,
                  z,
                }) => [9 * x, 9 * z, 4]),
              ),
              newSoul(identity.translate(0, 19, 134), [0, 0, 3.5]);
          }),
          newModel(() => {
            [0, 180].map(r =>
              meshAdd(
                hornPolygons,
                identity.rotate(0, r).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2),
                material(1, 1, 0.8),
              )
            ), meshAdd(sphere(20), identity.translate(0, 1).scale(0.5, 0.5, 0.5), material(1, 0.3, 0.4));
            const eye = polygons_transform(
              csg_polygons(
                csg_subtract(
                  cylinder(15, 1),
                  polygons_transform(cylinder(), identity.translate(0, 0, 1).scale(2, 2, 0.5)),
                ),
              ),
              identity.rotate(-90, 0).scale(0.1, 0.05, 0.1),
              material(0.3, 0.3, 0.3),
            );
            [-1, 1].map(i => meshAdd(eye, identity.translate(0.2 * i, 1.2, 0.4).rotate(0, 20 * i, 20 * i))),
              meshAdd(cylinder(), identity.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3)),
              meshAdd(sphere(20), identity.scale(0.7, 0.8, 0.55), material(1, 0.3, 0.4));
          }),
          [-1, 1].map(x =>
            newModel(() => {
              meshAdd(cylinder(10, 1), identity.translate(0.3 * x, -0.8).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
            })
          ),
          newModel(() => {
            meshAdd(cylinder(6, 1), identity.scale(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5, 0.1)),
              meshAdd(cylinder(8, 1), identity.translate(0, 1).scale(0.21, 0.3, 0.21), material(1, 0.5, 0.2)),
              meshAdd(
                cylinder(3),
                identity.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3),
                material(0.2, 0.2, 0.2, 0.1),
              );
          }, 0),
          newModel(() => {
            meshAdd(cylinder(6).slice(0, -1), identity.scale(0.77, 1, 0.77), material(1, 0.3, 0.5));
          }, 0),
          newModel(() => {
            meshAdd(
              sphere(30, 24, (a, b, polygon) => {
                const bm = b / 24;
                const theta = a * Math.PI * 2 / 30;
                const phixz = bm ** 0.6 * Math.PI / 2;
                var a = bm * bm * Math.sin(a * Math.PI * 14 / 30) / 4;
                return b === 23
                  ? {
                    x: polygon.$smooth = 0,
                    y: -0.5,
                    z: 0,
                  }
                  : {
                    x: Math.cos(theta) * Math.sin(phixz),
                    y: Math.cos(bm * Math.PI) - bm - a,
                    z: Math.sin(theta) * Math.sin(phixz) + Math.sin(a * Math.PI * 2) / 4,
                  };
              }),
              identity.scale3d(0.7),
              material(1, 1, 1),
            ), [-1, 1].map(x => meshAdd(sphere(12), identity.translate(0.16 * x, 0.4, -0.36).scale3d(0.09)));
          }, 0);
      }
    });
}),
  NO_INLINE(`<!DOCTYPE html><html><head>
    <title>666</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    
    
    
  <link rel="stylesheet" href="/index.css"></head>

  <body>
    <canvas id="hC"></canvas>
    <h3>Souls: <b id="h3"></b> / XIII</h3>
    <h4 id="h4">loading</h4>
    <main>
      <nav>
        <h2>DANTE</h2>
        Lucifer:
        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.
          Dante, take them where they belong, to the 8th circle."</i>
        <ul>
          <li id="b1">Play</li>
          <li id="b2">Play first person</li>
          <li id="b3">Restart</li>
          <li id="b4"></li>
        </ul>
        <p>move WASD/arrows, levers E/click, menu Esc</p>
        <p>
          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -
          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>
        </p>
      </nav>
    </main>
    <b id="b5">☰</b>
    
  

<script type="module" src="/index.js" crossorigin=""><\/script></body></html> * {
  font-weight: 100;
  user-select: none;
  touch-action: none;
  overscroll-behavior: contain;
  -webkit-user-select: none;
  color: #fda;
}
body > * {
  position: absolute;
}
html,
body {
  margin: 0;
  font-family: "Times New Roman", serif;
  background: #000;
  font-size: max(min(3.8vw, 3.8vh), 15px);
  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;
}
h3,
h4 {
  pointer-events: none;
}
.l h3,
.l #b5 {
  display: block;
  padding: 10px;
}
.l h3 {
  text-align: right;
  right: 5%;
  bottom: 0;
}
h4 {
  left: 0;
  top: 0;
  right: 0;
  text-align: center;
}
.m main {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 70%;
}
nav {
  min-width: 50%;
  max-width: 800px;
  background: #00000080;
  border-radius: 1em;
  padding: 1em;
}
p {
  font-size: 0.7em;
}
h2 {
  color: #f61;
  margin: 0 0 0.7em;
}
a,
li {
  cursor: pointer;
  margin-bottom: 0.5em;
  text-decoration: none;
  border-bottom: 3px solid #00000000;
}
h2,
a:hover,
li:hover {
  border-bottom: 3px solid;
}
h3,
main,
.m h4 {
  display: none;
}
`);
