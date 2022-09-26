NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\"></script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
const groundTextureSvg = `data:image/svg+xml;base64,${
  /* @__PURE__ */ btoa(
    "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
  )
}`;
const code$6 =
  "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}";
const uniformName_csm_matrix0 = "i";
const uniformName_csm_matrix1 = "j";
const uniformName_csm_texture0 = "g";
const uniformName_csm_texture1 = "h";
const uniformName_groundTexture = "q";
const uniformName_viewPos = "k";
const constDef_CSM_TEXTURE_SIZE = 2048;
const constDef_zNear = 0.3;
const constDef_CSM_PLANE_DISTANCE = 55;
const constDef_zFar = 186;
const integers_map = (n, fn) => Array.from(/* @__PURE__ */ Array(n), (_, i) => fn(i));
const DEG_TO_RAD = Math.PI / 180;
const fieldOfViewDegrees = 60;
const clamp = (value, minValue = 0, maxValue = 1) => value < minValue ? minValue : value > maxValue ? maxValue : value;
const threshold = (value, amount) => abs(value) > amount ? value : 0;
const lerp = (a, b, t) => (t <= 0 ? a : t >= 1 ? b : a + (b - a) * t) || 0;
const lerpneg = (v, t) => {
  v = clamp(v);
  return lerp(v, 1 - v, t);
};
const angle_wrap_radians = (radians) =>
  /* @__PURE__ */ Math.atan2(/* @__PURE__ */ Math.sin(radians), /* @__PURE__ */ Math.cos(radians));
const angle_wrap_degrees = (degrees) => angle_wrap_radians(degrees * DEG_TO_RAD) / DEG_TO_RAD;
const angle_lerp_degrees = (a0, a1, t) => {
  const da = (a1 - a0) % 360;
  return a0 + (2 * da % 360 - da) * clamp(t) || 0;
};
const vec3_distance = ({ x, y, z }, b) => /* @__PURE__ */ Math.hypot(x - b.x, y - b.y, z - b.z);
const vec3_dot = ({ x, y, z }, b) => x * b.x + y * b.y + z * b.z;
const plane_fromPolygon = (polygon) => {
  let b;
  let x = 0;
  let y = 0;
  let z = 0;
  let a = polygon.at(-1);
  for (b of polygon) {
    x += (a.y - b.y) * (a.z + b.z);
    y += (a.z - b.z) * (a.x + b.x);
    z += (a.x - b.x) * (a.y + b.y);
    a = b;
  }
  b = /* @__PURE__ */ Math.hypot(x, y, z);
  x /= b;
  y /= b;
  z /= b;
  return {
    x,
    y,
    z,
    w: x * a.x + y * a.y + z * a.z,
  };
};
const matrixToArray = ($matrix, output = float32Array16Temp, index = 0) => {
  index *= 16;
  output[index++] = $matrix.m11;
  output[index++] = $matrix.m12;
  output[index++] = $matrix.m13;
  output[index++] = $matrix.m14;
  output[index++] = $matrix.m21;
  output[index++] = $matrix.m22;
  output[index++] = $matrix.m23;
  output[index++] = $matrix.m24;
  output[index++] = $matrix.m31;
  output[index++] = $matrix.m32;
  output[index++] = $matrix.m33;
  output[index++] = $matrix.m34;
  output[index++] = $matrix.m41;
  output[index++] = $matrix.m42;
  output[index++] = $matrix.m43;
  output[index] = $matrix.m44;
  return output;
};
const mat_perspectiveXY = (mx, my, near, far) => [
  mx,
  0,
  0,
  0,
  0,
  my,
  0,
  0,
  0,
  0,
  (far + near) / (near - far),
  -1,
  0,
  0,
  2 * far * near / (near - far),
  0,
];
const mat_perspective = (near, far) =>
  mat_perspectiveXY(hC.clientHeight / hC.clientWidth * fieldOfViewAmount, fieldOfViewAmount, near, far);
const identity = new DOMMatrix();
const float32Array16Temp = new Float32Array(16);
const min = NO_INLINE((a, b) => a < b ? a : b);
const max = NO_INLINE((a, b) => a > b ? a : b);
const abs = NO_INLINE((a) => a < 0 ? -a : a);
const translation = NO_INLINE((x, y, z) => identity.translate(x, y, z));
const rotation = NO_INLINE((x, y, z) => identity.rotate(x, y, z));
const scaling = NO_INLINE((x, y, z) => identity.scale(x, y, z));
const zNear = constDef_zNear;
const zFar = constDef_zFar;
const fieldOfViewRadians = fieldOfViewDegrees * DEG_TO_RAD;
const fieldOfViewAmount = 1 / /* @__PURE__ */ Math.tan(fieldOfViewRadians / 2);
const GQuad = [
  {
    x: -1,
    z: 1,
  },
  {
    x: 1,
    z: 1,
  },
  {
    x: 1,
    z: -1,
  },
  {
    x: -1,
    z: -1,
  },
];
const polygon_color = (polygon, color, smooth) => {
  polygon.$smooth = smooth;
  polygon.$color = color;
  return polygon;
};
const vec3_transform = ({ x, y, z }, m) => {
  ({ x, y, z } = m.transformPoint({
    x,
    y,
    z,
  }));
  return {
    x,
    y,
    z,
  };
};
const polygon_transform = (polygon, m, color = polygon.$color) =>
  polygon_color(polygon.map((p) => vec3_transform(p, m)), color, polygon.$smooth);
const polygons_transform = (polygons, m, color) => polygons.map((polygon) => polygon_transform(polygon, m, color));
const polygon_regular = (segments, elongate = 0) =>
  integers_map(segments, (i) => {
    const z = /* @__PURE__ */ Math.cos(Math.PI * 2 * (i / segments));
    return {
      x: /* @__PURE__ */ Math.sin(Math.PI * 2 * (i / segments)),
      y: 0,
      z: abs(z) < 0.01 ? z : z < 0 ? z - elongate : z + elongate,
    };
  });
const cylinder_sides = (btm, top, smooth) =>
  btm.map((btmi, i, { length }) =>
    polygon_color(
      [
        btmi,
        top[length - i - 1],
        top[length - (i + 1) % length - 1],
        btm[(i + 1) % length],
      ],
      btm.$color,
      smooth,
    )
  );
const cylinder = (segments, smooth, topSize = 0, elongate) => {
  const points = segments ? polygon_regular(segments, elongate) : GQuad;
  const top = polygon_transform(points, translation(0, 1).scale3d(topSize > 0 ? topSize : 1));
  const bottom = polygon_transform(points, translation(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse();
  return [
    ...cylinder_sides(bottom, top, smooth),
    top,
    bottom,
  ];
};
const sphere = (slices, stacks = slices, vertexFunc = (x, y) => {
  y *= Math.PI / stacks;
  x *= Math.PI * 2 / slices;
  return {
    x: /* @__PURE__ */ Math.cos(x) * /* @__PURE__ */ Math.sin(y),
    y: /* @__PURE__ */ Math.cos(y),
    z: /* @__PURE__ */ Math.sin(x) * /* @__PURE__ */ Math.sin(y),
  };
}) => {
  const polygons = [];
  for (let i = 0; i < slices; i++) {
    for (let j = 0; j < stacks; j++) {
      const vertex = (x, y) => polygon.push(vertexFunc(x, y, polygon));
      const polygon = polygon_color([], 0, 1);
      polygons.push(polygon);
      vertex(i, j);
      if (j) {
        vertex((i + 1) % slices, j);
      }
      if (j < stacks - 1) {
        vertex((i + 1) % slices, j + 1 % stacks);
      }
      vertex(i, j + 1 % stacks);
    }
  }
  return polygons;
};
const PLANE_EPSILON = 8e-5;
const CSGPolygon_splitSpanning = (plane, polygon) => {
  let jd;
  const fpoints = [];
  const bpoints = [];
  const { $polygon, $flipped } = polygon;
  let iv = $polygon.at(-1);
  let id = vec3_dot(plane, iv) - plane.w;
  for (const jv of $polygon) {
    jd = vec3_dot(plane, jv) - plane.w;
    if (id < PLANE_EPSILON) {
      bpoints.push(iv);
    }
    if (id > -PLANE_EPSILON) {
      fpoints.push(iv);
    }
    if (id > PLANE_EPSILON && jd < -PLANE_EPSILON || id < -PLANE_EPSILON && jd > PLANE_EPSILON) {
      id /= jd - id;
      iv = {
        x: iv.x + (iv.x - jv.x) * id,
        y: iv.y + (iv.y - jv.y) * id,
        z: iv.z + (iv.z - jv.z) * id,
      };
      fpoints.push(iv);
      bpoints.push(iv);
    }
    iv = jv;
    id = jd;
  }
  return {
    $front: fpoints.length > 2 && {
      $polygon: polygon_color(fpoints, $polygon.$color, $polygon.$smooth),
      $flipped,
      $parent: polygon,
    },
    $back: bpoints.length > 2 && {
      $polygon: polygon_color(bpoints, $polygon.$color, $polygon.$smooth),
      $flipped,
      $parent: polygon,
    },
  };
};
const CSGPolygon_split = (plane, polygon) => {
  let $front;
  let $back;
  let d;
  const { $polygon } = polygon;
  for (let i = 0; i < $polygon.length; ++i) {
    d = vec3_dot(plane, $polygon[i]) - plane.w;
    if (d < -PLANE_EPSILON) {
      $back = polygon;
    } else if (d > PLANE_EPSILON) {
      $front = polygon;
    }
    if ($back && $front) {
      return CSGPolygon_splitSpanning(plane, polygon);
    }
  }
  return {
    $front,
    $back,
  };
};
const csg_tree_addPolygon = (node, polygon, plane = plane_fromPolygon(polygon.$polygon)) => {
  if (node) {
    const { $front, $back } = CSGPolygon_split(node, polygon);
    if (!$front && !$back) {
      node.$polygons.push(polygon);
    }
    if ($front) {
      node.$front = csg_tree_addPolygon(node.$front, $front, plane);
    }
    if ($back) {
      node.$back = csg_tree_addPolygon(node.$back, $back, plane);
    }
  } else {
    const { x, y, z, w } = plane;
    node = {
      x,
      y,
      z,
      w,
      $polygons: [
        polygon,
      ],
      $front: 0,
      $back: 0,
    };
  }
  return node;
};
const csg_tree_clipNode = (anode, bnode, polygonPlaneFlipped) => {
  const result = [];
  const recursion = (node, polygon) => {
    let { $front, $back } = CSGPolygon_split(node, polygon);
    if (!$front && !$back) {
      if (polygonPlaneFlipped * vec3_dot(node, bnode) > 0) {
        $front = polygon;
      } else {
        $back = polygon;
      }
    }
    if ($front) {
      if (node.$front) {
        recursion(node.$front, $front);
      } else {
        result.push($front);
      }
    }
    if ($back && node.$back) {
      recursion(node.$back, $back);
    }
  };
  for (const polygon of bnode.$polygons) {
    recursion(anode, polygon);
  }
  return result;
};
const csg_tree_each = (node, fn) => node && (fn(node), csg_tree_each(node.$front, fn), csg_tree_each(node.$back, fn));
const csg_tree = (n) =>
  n.length
    ? n.reduce((prev, $polygon) =>
      csg_tree_addPolygon(prev, {
        $polygon,
        $flipped: 0,
        $parent: 0,
      }), 0)
    : n;
const csg_tree_flip = (root) => {
  csg_tree_each(root, (node) => {
    const { $front, $back } = node;
    node.$back = $front;
    node.$front = $back;
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    for (const polygon of node.$polygons) {
      polygon.$flipped = !polygon.$flipped;
    }
  });
  return root;
};
const csg_union = (...inputs) =>
  inputs.reduce((a, b) => {
    const polygonsToAdd = [];
    a = csg_tree(a);
    if (b) {
      b = csg_tree(b);
      csg_tree_each(a, (node) => node.$polygons = csg_tree_clipNode(b, node, 1));
      csg_tree_each(b, (node) =>
        polygonsToAdd.push([
          node,
          csg_tree_clipNode(a, node, -1),
        ]));
      for (const [plane, polygons] of polygonsToAdd) {
        for (const pp of polygons) {
          csg_tree_addPolygon(a, pp, plane);
        }
      }
    }
    return a;
  });
const csg_subtract = (a, ...b) => csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b));
const csg_polygons = (tree) => {
  const add = (polygon) => {
    if (polygon.$parent) {
      const found = byParent.get(polygon.$parent);
      if (found) {
        allPolygons.delete(found);
        polygon = add(polygon.$parent);
      } else {
        byParent.set(polygon.$parent, polygon);
      }
    }
    return polygon;
  };
  const byParent = /* @__PURE__ */ new Map();
  const allPolygons = /* @__PURE__ */ new Map();
  csg_tree_each(tree, (node) => {
    for (const polygon of node.$polygons) {
      allPolygons.set(add(polygon), polygon.$flipped);
    }
  });
  return Array.from(allPolygons, ([{ $polygon }, flipped]) => {
    const polygon = $polygon.map(({ x, y, z }) => ({
      x,
      y,
      z,
    }));
    return polygon_color(flipped ? polygon.reverse() : polygon, $polygon.$color, $polygon.$smooth);
  });
};
const csg_polygons_subtract = (...input) => csg_polygons(csg_subtract(...input));
const MODEL_KIND_MESH = 0;
const MODEL_KIND_GAME = 1;
const MODEL_KIND_GAME_NO_ATTACH_PLAYER = 2;
const MODEL_ID_FIRST_BOAT = 2;
const SOULS_COUNT = 13;
const MODEL_ID_ROTATING_PLATFORM = 28;
const MODEL_ID_PLAYER_BODY = 37;
const MODEL_ID_PLAYER_LEG0 = 38;
const MODEL_ID_PLAYER_LEG1 = 39;
const MODEL_ID_LEVER = 40;
const MODEL_ID_SOUL_COLLISION = 41;
const MODEL_ID_SOUL = 42;
const allModels = [];
const levers = [];
const souls = [];
const player_position_final = {
  x: 0,
  y: 0,
  z: 0,
};
let mainMenuVisible;
let _globalTime;
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
let shouldRotatePlatforms = 0;
let _messageEndTime = 1;
const KEY_LEFT = 0;
const KEY_FRONT = 1;
const KEY_RIGHT = 2;
const KEY_BACK = 3;
const KEY_INTERACT = 5;
const GAME_TIME_MAX_DELTA_TIME = 0.066;
const LOCAL_STORAGE_SAVED_GAME_KEY = "DanteSP22";
const keyboard_downKeys = [];
const setMainMenuVisible = (visible) => {
  mainMenuVisible = visible;
};
const damp = (speed) => 1 - /* @__PURE__ */ Math.exp(-speed * gameTimeDelta);
const lerpDamp = (from, to, speed) => lerp(from, to, damp(speed));
const gameTimeUpdate = (time) => {
  const dt = (time - (_globalTime || time)) / 1e3;
  absoluteTime += dt;
  gameTime += gameTimeDelta = mainMenuVisible ? 0 : min(GAME_TIME_MAX_DELTA_TIME, dt);
  _globalTime = time;
};
const showMessage = (message, duration) => {
  if (_messageEndTime < Infinity) {
    _messageEndTime = gameTime + duration;
    h4.innerHTML = message;
  }
};
const worldStateUpdate = () => {
  shouldRotatePlatforms = lerpneg(levers[12].$lerpValue, levers[13].$lerpValue);
  rotatingHexCorridorRotation = lerp(
    lerpDamp(rotatingHexCorridorRotation, 0, 1),
    angle_wrap_degrees(rotatingHexCorridorRotation + gameTimeDelta * 60),
    levers[5].$lerpValue - levers[6].$lerpValue2,
  );
  rotatingPlatform1Rotation = lerp(
    lerpDamp(rotatingPlatform1Rotation, 0, 5),
    angle_wrap_degrees(rotatingPlatform1Rotation + gameTimeDelta * 56),
    shouldRotatePlatforms,
  );
  rotatingPlatform2Rotation = lerp(
    lerpDamp(rotatingPlatform2Rotation, 0, 4),
    angle_wrap_degrees(rotatingPlatform2Rotation + gameTimeDelta * 48),
    shouldRotatePlatforms,
  );
  secondBoatLerp = lerpDamp(secondBoatLerp, levers[9].$lerpValue2, 0.2 + 0.3 * abs(levers[9].$lerpValue2 * 2 - 1));
  firstBoatLerp = lerpDamp(firstBoatLerp, game_completed ? lerpDamp(firstBoatLerp, -9, 1.5) : clamp(gameTime / 3), 1);
  if (_messageEndTime && gameTime > _messageEndTime) {
    _messageEndTime = 0;
    h4.innerHTML = "";
  }
  if (levers[0].$value && levers[0].$lerpValue > 0.8) {
    if (souls_collected_count < SOULS_COUNT) {
      showMessage("Not leaving now, there are souls to catch!", 3);
      levers[0].$value = 0;
    } else if (!game_completed) {
      showMessage("Well done. They will be punished.<br>Thanks for playing", Infinity);
      game_completed = 1;
    }
  }
  for (const model of allModels) {
    if (model._update) {
      model.$matrix = model._update();
    }
  }
  for (const lever of levers) {
    lever._update();
  }
  for (const soul of souls) {
    soul._update();
  }
};
const updateCollectedSoulsCounter = () => {
  h3.innerHTML = "Souls: " + [
    0,
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
  ][souls_collected_count = souls.reduce((acc, { $value }) => acc + $value, 0)] + " / XIII";
};
const loadGame = () => {
  try {
    const [savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedSecondBoatLerp] = JSON.parse(
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY],
    );
    levers.map((lever, index) =>
      lever.$lerpValue = lever.$lerpValue2 = lever.$value = index ? savedLevers[index] | 0 : 0
    );
    souls.map((soul, index) => soul.$value = savedSouls[index] | 0);
    player_last_pulled_lever = savedLastPulledLever;
    gameTime = savedGameTime;
    secondBoatLerp = savedSecondBoatLerp;
  } catch (e) {
  }
  firstBoatLerp = clamp(player_last_pulled_lever);
};
const saveGame = () => {
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
    levers.map(({ $value }) => $value),
    souls.map(({ $value }) => $value),
    player_last_pulled_lever,
    gameTime,
    secondBoatLerp,
  ]);
};
const onSoulCollected = () => {
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
  );
  updateCollectedSoulsCounter();
  saveGame();
};
const onPlayerPullLever = (leverIndex) => {
  if (leverIndex) {
    showMessage("* click *", 1);
  }
  player_last_pulled_lever = leverIndex;
  saveGame();
};
let gameTimeDelta = GAME_TIME_MAX_DELTA_TIME;
let currentEditModel;
const LEVER_SENSITIVITY_RADIUS = 3;
const SOUL_SENSITIVITY_RADIUS = 1.6;
const newModel = (fn, $kind = MODEL_KIND_GAME) => {
  const previousModel = currentEditModel;
  const model = {
    $matrix: identity,
    $modelId: allModels.length,
    $kind,
    $polygons: [],
  };
  allModels.push(currentEditModel = model);
  fn(model);
  currentEditModel = previousModel;
  return model;
};
const meshAdd = (polygons, transform = identity, color) =>
  currentEditModel.$polygons.push(...polygons_transform(polygons, transform, color));
const newLever = (transform) => {
  const $parent = currentEditModel;
  const index = levers.length;
  const lever = {
    $value: 0,
    $lerpValue: 0,
    $lerpValue2: 0,
    $parent,
    _update: () => {
      const { $value, $lerpValue, $lerpValue2 } = lever;
      const locMatrix = $parent.$matrix.multiply(transform);
      lever.$locMatrix = locMatrix;
      if (
        vec3_distance(locMatrix.transformPoint(), player_position_final) < LEVER_SENSITIVITY_RADIUS
        && keyboard_downKeys[KEY_INTERACT]
      ) {
        if ($lerpValue < 0.3 || $lerpValue > 0.7) {
          lever.$value = $value ? 0 : 1;
          onPlayerPullLever(index);
        }
      }
      lever.$lerpValue = lerpDamp($lerpValue, $value, 4);
      lever.$lerpValue2 = lerpDamp($lerpValue2, $value, 1);
      lever.$matrix = locMatrix.rotate(lever.$lerpValue * 60 - 30, 0).translateSelf(0, 1);
    },
  };
  levers.push(lever);
  meshAdd(cylinder(5), transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
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
    _update: () => {
      if (!soul.$value) {
        let isInside;
        let contextualVelocity = 1;
        let mindist = Infinity;
        for (const c of circles) {
          const { x, z, w } = c;
          const distance = /* @__PURE__ */ Math.hypot(targetX - x, targetZ - z);
          const circleSDF = distance - w;
          isInside ||= distance < w;
          if (circleSDF > 0 && circleSDF < mindist) {
            mindist = circleSDF;
            circle = c;
          }
          contextualVelocity = min(contextualVelocity, distance / w);
        }
        if (!isInside) {
          const { x: x1, z: z1, w: w1 } = circle;
          const ax = targetX - x1;
          const az = targetZ - z1;
          let magnitude = /* @__PURE__ */ Math.hypot(ax, az);
          let angle = /* @__PURE__ */ Math.atan2(-az, ax);
          if (wasInside) {
            randAngle = (/* @__PURE__ */ Math.random() - 0.5) * Math.PI / 2;
            velocity = clamp(velocity / (1 + /* @__PURE__ */ Math.random()));
          }
          angle += randAngle;
          dirX = -/* @__PURE__ */ Math.cos(angle);
          dirZ = /* @__PURE__ */ Math.sin(angle);
          if (magnitude > 0.1) {
            magnitude = min(magnitude, w1) / (magnitude || 1);
            targetX = ax * magnitude + x1;
            targetZ = az * magnitude + z1;
          }
        }
        wasInside = isInside;
        velocity = lerpDamp(velocity, (1 - contextualVelocity) * 6 + 3, contextualVelocity + 3);
        soulX = lerpDamp(soulX, targetX = lerpDamp(targetX, targetX + dirX, velocity), velocity);
        soulZ = lerpDamp(soulZ, targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity), velocity);
        lookAngle = angle_lerp_degrees(
          lookAngle,
          /* @__PURE__ */ Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180,
          damp(3),
        );
        prevX = soulX;
        prevZ = soulZ;
        const soulPos = (soul.$matrix = parentModel.$matrix.multiply(
          transform.translate(soulX, 0, soulZ).rotateSelf(0, lookAngle, /* @__PURE__ */ Math.sin(gameTime * 1.7) * 7),
        )).transformPoint();
        if (vec3_distance(soulPos, player_position_final) < SOUL_SENSITIVITY_RADIUS) {
          soul.$value = 1;
          onSoulCollected();
        }
      }
      if (soul.$value) {
        soul.$matrix = allModels[MODEL_ID_FIRST_BOAT].$matrix.translate(
          index % 4 * 1.2 - 1.7 + /* @__PURE__ */ Math.sin(gameTime + index) / 7,
          -2,
          -5.5 + (index / 4 | 0) * 1.7 + abs(index % 4 - 2) + /* @__PURE__ */ Math.cos(gameTime / 1.5 + index) / 6,
        );
      }
    },
  };
  const parentModel = currentEditModel;
  const index = souls.length;
  const circles = walkingPath.map(([x, z, w]) => ({
    x,
    z,
    w,
  }));
  let circle = circles[0];
  let { x: targetX, z: targetZ } = circle;
  let soulX = targetX;
  let soulZ = targetZ;
  souls.push(soul);
};
const material = NO_INLINE((r, g, b, a = 0) => a * 255 << 24 | b * 255 << 16 | g * 255 << 8 | r * 255);
const build_life_the_universe_and_everything = () => {
  const HORN_STACKS = 10;
  const hornsMatrices = integers_map(
    HORN_STACKS + 1,
    (i) =>
      translation(/* @__PURE__ */ Math.sin(i / HORN_STACKS * Math.PI), i / HORN_STACKS).rotate(10 * (i / HORN_STACKS))
        .scale(1.0001 - i / HORN_STACKS, 0, 1 - i / HORN_STACKS),
  );
  const hornPolygons = integers_map(
    HORN_STACKS,
    (i) =>
      cylinder_sides(
        polygon_transform(polygon_regular(18), hornsMatrices[i]).reverse(),
        polygon_transform(polygon_regular(18), hornsMatrices[i + 1]),
        1,
      ),
  ).flat();
  newModel(() =>
    meshAdd([
      GQuad.slice(1),
    ], translation(-2).scale3d(3).rotate(90, 0)), MODEL_KIND_MESH);
  newModel(() => {
    const getBoatAnimationMatrix = (x, y, z) =>
      translation(x + /* @__PURE__ */ Math.sin(gameTime + 2) / 5, y + /* @__PURE__ */ Math.sin(gameTime * 0.8) / 3, z)
        .rotateSelf(
          /* @__PURE__ */ Math.sin(gameTime) * 2,
          /* @__PURE__ */ Math.sin(gameTime * 0.7),
          /* @__PURE__ */ Math.sin(gameTime * 0.9),
        );
    const makeBigArcPolygons = (height) =>
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(0, -height / 2).scale(6, height - 1, 2.2)),
        polygons_transform(cylinder(), translation(0, -height / 2 - 6).scale(4, height - 3, 4)),
        polygons_transform(cylinder(32, 1), translation(0, height / 2 - 9).rotate(90, 0, 90).scale3d(4)),
      );
    const level2Oscillation = () => min(levers[2].$lerpValue2, 1 - levers[4].$lerpValue2);
    const blackPlatform = (freq, amplitude, pz) =>
      newModel((model) => {
        model._update = () =>
          translation(level2Oscillation() * /* @__PURE__ */ Math.sin(freq * 3 + gameTime * freq) * amplitude);
        GQuad.map(({ x, z }) => {
          meshAdd(cylinder(11, 1), translation(x * 4, 4, pz + z * 4).scale(0.8, 3, 0.8), material(0.5, 0.3, 0.7, 0.6));
          meshAdd(cylinder(), translation(x * 4, 7, pz + z * 4).scale(1, 0.3), material(0.5, 0.5, 0.5, 0.3));
        });
        meshAdd(
          csg_polygons_subtract(
            polygons_transform(cylinder(), translation(0, 0, pz).scale(5, 1, 5), material(0.8, 0.8, 0.8, 0.3)),
            ...[
              -1,
              1,
            ].map((i) =>
              polygons_transform(
                cylinder(),
                translation(5 * i, 0.2, pz).rotate(i * -30).scale(4, 1, 2),
                material(0.8, 0.8, 0.8, 0.3),
              )
            ),
          ),
        );
        meshAdd(cylinder(), translation(0, -3, pz).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
      });
    const level3Oscillation = () =>
      clamp(1 - level2Oscillation() * 5) * lerpneg(levers[4].$lerpValue, levers[5].$lerpValue);
    const shouldOscillate = () => lerpneg(levers[7].$lerpValue2, levers[6].$lerpValue2);
    const shouldPushRods = () => lerpneg(levers[10].$lerpValue, levers[11].$lerpValue);
    const shouldBlockRods = () => (1 - levers[10].$lerpValue) * (1 - shouldPushRods());
    const hexPadShouldOscillate = () => lerpneg(levers[8].$lerpValue2, levers[12].$lerpValue2);
    const boatPolygons = csg_polygons_subtract(
      polygons_transform(
        cylinder(20, 1, 1.15, 1),
        translation(0, -3).scale(3.5, 1, 3.5),
        material(0.7, 0.4, 0.25, 0.7),
      ),
      polygons_transform(cylinder(20, 1, 1.3, 1), translation(0, -2.5).scale(2.6, 1, 3), material(0.7, 0.4, 0.25, 0.2)),
      polygons_transform(cylinder(), translation(4, -1.2).scale3d(2), material(0.7, 0.4, 0.25, 0.3)),
    );
    const gateBarsPolygons = integers_map(
      7,
      (i) =>
        polygons_transform(
          cylinder(6, 1),
          translation(4 * (i / 6 - 0.5), 3).scale(0.2, 3, 0.2),
          material(0.3, 0.3, 0.38),
        ),
    ).flat();
    newModel((model) => {
      model._update = () => getBoatAnimationMatrix(-12, 4.2, -66 + firstBoatLerp * 40);
      meshAdd(boatPolygons);
      newLever(translation(0, -3, 4));
    });
    newLever(translation(-5.4, 1.5, -19).rotate(0, -90));
    newSoul(translation(-0.5, 2.8, -20), [
      0,
      0,
      2.5,
    ], [
      0,
      -3,
      2.5,
    ]);
    newSoul(
      translation(0, 2.8),
      [
        5,
        10,
        3,
      ],
      [
        -5,
        10,
        3,
      ],
      ...polygon_regular(18).map(({ x, z }) => [
        x * 7,
        z * 10,
        4.5 - abs(x) * 2,
      ]),
    );
    meshAdd(cylinder(), translation(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), material(0.8, 0.8, 0.8, 0.2));
    GQuad.map(({ x, z }) =>
      meshAdd(cylinder(6), translation(x * 3, 3, z * 15).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4))
    );
    [
      -23,
      22,
    ].map((z) => meshAdd(cylinder(), translation(0, 0, z).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2)));
    [
      -15,
      15,
    ].map((z, i) => {
      meshAdd(cylinder(), translation(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4));
      meshAdd(cylinder(), translation(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3));
      newModel((model) => {
        model._update = () => translation(0, 0, z).scale(1, clamp(1.22 - levers[i + 1].$lerpValue), 1);
        meshAdd(gateBarsPolygons);
      });
    });
    integers_map(
      5,
      (i) =>
        integers_map(2, (j) =>
          meshAdd(
            hornPolygons,
            translation((j - 0.5) * 18.5, 0, i * 4.8 - 9.5).rotate(0, 180 - j * 180).scale(1.2, 10, 1.2),
            material(1, 1, 0.8, 0.2),
          )),
    );
    meshAdd(cylinder(), translation(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2));
    meshAdd(cylinder(), translation(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), material(0.75, 0.75, 0.75, 0.2));
    meshAdd(cylinder(5), translation(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), material(0.6, 0.3, 0.3, 0.4));
    meshAdd(
      cylinder(),
      rotation(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5),
      material(0.8, 0.2, 0.2, 0.5),
    );
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            translation(8, -3, -4).scale(13, 1, 13),
            material(0.7, 0.7, 0.7, 0.2),
          ),
          polygons_transform(cylinder(6), translation(0, -8).scale(9, 8, 8), material(0.4, 0.2, 0.5, 0.5)),
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            translation(0, -0.92).scale(13, 2, 13),
            material(0.8, 0.8, 0.8, 0.2),
          ),
        ),
        polygons_transform(cylinder(5), scaling(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),
        polygons_transform(cylinder(5, 0, 1.5), translation(0, 1).scale(4.5, 0.3, 4.5), material(0.7, 0.5, 0.9, 0.2)),
        polygons_transform(
          cylinder(),
          rotation(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2),
          material(0.5, 0.5, 0.5, 0.5),
        ),
        polygons_transform(cylinder(6), translation(15, -1.5, 4).scale(3.5, 1, 3.5), material(0.5, 0.5, 0.5, 0.5)),
      ),
    );
    newModel((model) => {
      model._update = () =>
        translation(
          0,
          levers[3].$lerpValue > 0.01
            ? (/* @__PURE__ */ Math.cos(gameTime * 1.5) * 5 + 2) * levers[3].$lerpValue2 * (1 - levers[2].$lerpValue)
              + (1 - levers[3].$lerpValue) * -15
            : -500,
          0,
        );
      meshAdd(cylinder(5), translation(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3));
      newLever(translation(0, 1.2));
    });
    newLever(translation(15, -2, 4));
    blackPlatform(0.7, 12, 35);
    blackPlatform(1, 8.2, 55);
    newModel((model) => {
      model._update = () => translation(level2Oscillation() * /* @__PURE__ */ Math.sin(gameTime / 1.5 + 2) * 12);
      meshAdd(
        csg_polygons_subtract(
          csg_union(
            polygons_transform(cylinder(), scaling(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
            polygons_transform(cylinder(6), scaling(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
            polygons_transform(cylinder(), translation(0, -2).scale(2, 3.2, 1.9), material(0.3, 0.8, 0.5, 0.5)),
            polygons_transform(cylinder(16, 1, 0, 4), scaling(1, 1, 1.5).rotate(0, 90), material(0.9, 0.9, 0.9, 0.2)),
          ),
          polygons_transform(cylinder(), scaling(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6)),
        ),
        translation(0, 0, 45),
      );
      newSoul(translation(0, 2.8, 45), [
        0,
        0,
        4.5,
      ]);
    });
    meshAdd(cylinder(), translation(-21.1 + 2.45, -3, 55).scale(2.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
    newModel((model) => {
      model._update = () => translation((1 - level2Oscillation()) * 9.8);
      meshAdd(cylinder(3), translation(-23, -1.7, 55.8).scale(5, 0.7, 8.3), material(0.3, 0.6, 0.6, 0.2));
      meshAdd(cylinder(8), translation(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), material(0.8, 0.8, 0.8, 0.2));
      meshAdd(cylinder(), translation(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3));
      meshAdd(cylinder(), translation(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3));
      newLever(translation(-23, -0.5, 66.5));
    });
    newModel((model) => {
      model._update = () => translation(0, level3Oscillation() * /* @__PURE__ */ Math.sin(gameTime * 1.35) * 4);
      meshAdd(cylinder(), translation(-22.55, -3, 55).scale(1.45, 1.4, 2.7), material(0.7, 0.7, 0.7, 0.2));
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), scaling(3, 1.4, 2.7)),
          polygons_transform(cylinder(), scaling(1.2, 8, 1.2)),
        ),
        translation(-33, -3, 55),
        material(0.7, 0.7, 0.7, 0.2),
      );
    });
    newModel((model) => {
      model._update = () => translation(0, 0, level3Oscillation() * /* @__PURE__ */ Math.sin(gameTime * 0.9) * 8);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), translation(-27, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2)),
          polygons_transform(cylinder(), translation(-27, -3, 55).scale(1, 3), material(0.9, 0.9, 0.9, 0.2)),
        ),
      );
      meshAdd(cylinder(), translation(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
    });
    newModel((model) => {
      model._update = () => translation(0, levers[4].$lerpValue2 * -6.5);
      meshAdd(
        cylinder(6),
        translation(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9),
        material(0.7, 0.7, 0.7, 0.4),
      );
    });
    newLever(translation(-55, -1.1, 46).rotate(0, 90));
    meshAdd(cylinder(6), translation(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3));
    meshAdd(cylinder(7), translation(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3));
    const hexCorridorPolygons = [
      ...polygons_transform(cylinder(), translation(0, -3).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
      ...csg_polygons_subtract(
        polygons_transform(cylinder(6), rotation(90).scale(6, 8, 6), material(0.3, 0.6, 0.6, 0.3)),
        polygons_transform(
          cylinder(4, 0, 0.01),
          translation(0, 6).scale(12, 2, 0.75).rotate(0, 45),
          material(0.3, 0.6, 0.6, 0.3),
        ),
        polygons_transform(cylinder(6), rotation(90).scale(5, 12, 5), material(0.3, 0.6, 0.6, 0.3)),
        ...[
          5,
          0,
          -5,
        ].map((x) =>
          polygons_transform(
            cylinder(5),
            translation(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8),
            material(0.3, 0.6, 0.6, 0.3),
          )
        ),
      ),
    ];
    meshAdd(hexCorridorPolygons, translation(-53, 0, 55));
    newModel((model) => {
      model._update = () => {
        return translation(-75, (1 - levers[5].$lerpValue2) * (1 - levers[6].$lerpValue) * 3, 55).rotate(
          180 * (1 - levers[5].$lerpValue2) + rotatingHexCorridorRotation,
          0,
        );
      };
      meshAdd(hexCorridorPolygons);
    }, MODEL_KIND_GAME_NO_ATTACH_PLAYER);
    meshAdd(cylinder(), translation(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), material(0.7, 0.7, 0.7, 0.2));
    meshAdd(
      cylinder(3, 0, -0.5),
      translation(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
      material(0.8, 0.8, 0.8, 0.2),
    );
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(), translation(-100, -2.5, 55).scale(8, 1, 8), material(0.8, 0.8, 0.8, 0.2)),
          polygons_transform(
            cylinder(),
            translation(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3),
            material(0.8, 0.8, 0.8, 0.2),
          ),
          polygons_transform(cylinder(), translation(-100, -2.6, 70).scale(3, 1.1, 7), material(0.8, 0.8, 0.8, 0.2)),
          polygons_transform(
            cylinder(),
            translation(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5),
            material(0.8, 0.8, 0.8, 0.2),
          ),
          polygons_transform(
            cylinder(6),
            translation(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15),
            material(0.6, 0.6, 0.6, 0.3),
          ),
          polygons_transform(
            cylinder(),
            translation(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6),
            material(0.8, 0.8, 0.8, 0.2),
          ),
          polygons_transform(cylinder(), translation(-100, 0.42, 92).scale(3, 1.1, 4.1), material(0.8, 0.8, 0.8, 0.2)),
        ),
        polygons_transform(cylinder(8), translation(-100, -1, 55).scale(7, 0.9, 7), material(0.3, 0.3, 0.3, 0.4)),
        polygons_transform(cylinder(8), translation(-100, -2, 55).scale(4, 0.3, 4), material(0.4, 0.4, 0.4, 0.5)),
        polygons_transform(cylinder(8), translation(-100, -3, 55).scale(0.6, 1, 0.6), material(0.4, 0.4, 0.4, 0.5)),
      ),
    );
    newSoul(translation(-100, 0.2, 55), [
      0,
      0,
      7.5,
    ], [
      -8,
      0,
      3.5,
    ], [
      -12,
      0,
      3.5,
    ], [
      -15,
      0,
      3.5,
    ]);
    newSoul(translation(-89, 0.2, 80), [
      0,
      0,
      6,
    ]);
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(-100, 1, 63).scale(7.5, 4), material(0.5, 0.5, 0.5, 0.4)),
        polygons_transform(cylinder(), translation(-100, 0, 70).scale(2, 2, 10), material(0.5, 0.5, 0.5, 0.4)),
        polygons_transform(
          cylinder(20, 1),
          translation(-100, 2, 70).scale(2, 2, 10).rotate(90, 0),
          material(0.5, 0.5, 0.5, 0.4),
        ),
      ),
    );
    newModel((model) => {
      model._update = () => translation(-99.7, -1.9, 63.5).scale(1, clamp(1.1 - levers[6].$lerpValue), 1);
      meshAdd(gateBarsPolygons);
    });
    GQuad.map(({ x, z }) => {
      meshAdd(cylinder(6), translation(-100 + x * 7, -3, z * 7 + 55).scale(1, 8.1), material(0.6, 0.15, 0.15, 0.8));
      [
        4,
        -0.4,
      ].map((i) =>
        meshAdd(
          cylinder(6),
          translation(-100 + x * 7, i, z * 7 + 55).scale(1.3, 0.5, 1.3),
          material(0.4, 0.2, 0.2, 0.8),
        )
      );
    });
    integers_map(7, (i) => {
      meshAdd(
        cylinder((i * 23 + 1) % 5 + 5, 0, 0.55),
        translation(-101 + /* @__PURE__ */ Math.sin(i) * 5 + i, -2.3 - i, 44.9 - i * 2.8).scaleSelf(
          5 + i / 2,
          1 + i / 6,
          5 + i / 3,
        ),
        material(0.5 - i / 17, 0.5 - (i & 1) / 9, 0.6, 0.3),
      );
    });
    meshAdd(cylinder(), translation(-87, -9.5, 24).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4));
    meshAdd(cylinder(4), translation(-86, -9.2, 27).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3));
    meshAdd(cylinder(12, 1), translation(-86, -9, 31).scale(1.5, 1, 1.5), material(0.3, 0.3, 0.4, 0.1));
    newLever(translation(-86, -7.5, 31));
    newModel((model) => {
      model._update = () =>
        translation(
          0,
          (1 - max(levers[6].$lerpValue, levers[7].$lerpValue)) * 3.5
            + shouldOscillate() * /* @__PURE__ */ Math.sin(gameTime) * 5,
        );
      [
        0,
        12,
        24,
      ].map((x) =>
        meshAdd(cylinder(), translation(x - 76.9, x / -13 - 10, 24).scale(2.8, 1.5, 3), material(0.2, 0.5, 0.6, 0.2))
      );
    });
    newModel((model) => {
      model._update = () =>
        translation(
          0,
          shouldOscillate() * /* @__PURE__ */ Math.sin(gameTime + 3) * 6,
          /* @__PURE__ */ Math.sin(gameTime * 0.6 + 1) * 6 * shouldOscillate(),
        );
      [
        6,
        18,
      ].map((x) =>
        meshAdd(cylinder(), translation(x - 76.9, x / -13 - 10, 24).scale(2.8, 1.5, 3), material(0.1, 0.4, 0.5, 0.2))
      );
    });
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(5), translation(0, 0, -7).scale(2, 1.2, 2), material(0.2, 0.4, 0.7, 0.3)),
          polygons_transform(cylinder(5), scaling(9, 1.2, 9), material(0, 0.2, 0.3, 0.5)),
          polygons_transform(cylinder(), scaling(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)),
        ),
        polygons_transform(cylinder(5), scaling(5.4, 5, 5.4), material(0, 0.2, 0.3, 0.5)),
      ),
      translation(-38.9, -11.3, 17),
    );
    newLever(translation(-38.9, -9.6, 10));
    newModel((model) => {
      model._update = () => translation(0, levers[7].$lerpValue2 * -7.3);
      meshAdd(
        csg_polygons_subtract(
          csg_union(
            polygons_transform(cylinder(5), translation(0, 2).scale(5, 7, 5).skewY(8), material(0.2, 0.4, 0.5, 0.5)),
            polygons_transform(
              cylinder(5),
              translation(0, 6).scale(1.1, 7, 1.1).skewY(-8),
              material(0.25, 0.35, 0.5, 0.5),
            ),
            polygons_transform(
              cylinder(5),
              translation(0, 9).scale(0.6, 7, 0.6).skewY(8),
              material(0.35, 0.3, 0.5, 0.5),
            ),
          ),
          polygons_transform(cylinder(5), scaling(4, 8, 4), material(0.2, 0.4, 0.5, 0.5)),
          polygons_transform(
            cylinder(5),
            translation(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35),
            material(0.2, 0.4, 0.5, 0.5),
          ),
        ),
        translation(-38.9, -11.3, 17),
      );
      newSoul(
        translation(-39.1, -0.6, 17).rotate(11),
        ...polygon_regular(15).map(({ x, z }) => [
          x * 3,
          z * 3,
          1.2,
        ]),
      );
    });
    GQuad.map(({ x, z }) => {
      meshAdd(cylinder(14, 1), translation(x * 9 - 38.9, -7.3, z * 11 + 17).scale(1, 4), material(0.25, 0.25, 0.25, 1));
      [
        1.5,
        8,
      ].map((y) =>
        meshAdd(
          cylinder(17, 1),
          translation(x * 9 - 38.9, y - 11.3, z * 11 + 17).scale(1.5, 0.5, 1.5),
          material(0.6, 0.6, 0.6, 0.3),
        )
      );
    });
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(6), translation(0, 0, -36).scale(15, 1.2, 15), material(0.7, 0.7, 0.7, 0.3)),
          polygons_transform(cylinder(), translation(0, 0, -18).scale(4, 1.2, 6), material(0.45, 0.4, 0.6, 0.3)),
        ),
        ...integers_map(6, (z) =>
          integers_map(6, (x) =>
            polygons_transform(
              cylinder(6),
              translation(x * 4.6 - 12 + 2 * (z & 1), 0, z * 4.6 - 50 + /* @__PURE__ */ Math.sin(x * 4) * 2).scale(
                2,
                5,
                2,
              ),
              material(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      translation(-38.9, -11.3, 17),
    );
    newSoul(translation(-38.9, -8.4, -21), [
      -7,
      -2.5,
      6,
    ], [
      6,
      -3,
      6,
    ], [
      0,
      -5,
      7,
    ]);
    meshAdd(cylinder(5), translation(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), material(0.8, 0.1, 0.25, 0.4));
    newLever(translation(-84, -0.5, 85).rotate(0, 45));
    newModel((model) => {
      model._update = () => getBoatAnimationMatrix(-123, 1.4, 55 + secondBoatLerp * -65);
      meshAdd(boatPolygons);
      newLever(translation(0, -3, -4).rotate(0, 180));
    });
    const pushingRod = csg_polygons_subtract(
      polygons_transform(cylinder(), translation(0, -0.5, 1).scale(1.15, 1.2, 6.5), material(0.25, 0.25, 0.35, 0.3)),
      polygons_transform(cylinder(3), translation(0, 0, -5.5).scale(3, 2), material(0.6, 0.3, 0.4, 0.3)),
      ...[
        -1.2,
        1.2,
      ].map((i) =>
        polygons_transform(cylinder(), translation(i, -0.5, 1).scale(0.14, 0.3, 6.5), material(0.7, 0.2, 0, 0.3))
      ),
    );
    newModel((model) => {
      model._update = () =>
        translation(0, -2, shouldPushRods() * abs(/* @__PURE__ */ Math.sin(gameTime * 1.1)) * -8.5 + 10);
      integers_map(2, (x) => meshAdd(pushingRod, translation(-110 + x * 9 + (x & 1), 1.7, -12)));
    });
    newModel((model) => {
      model._update = () =>
        translation(0, -2, shouldPushRods() * abs(/* @__PURE__ */ Math.sin(gameTime * 2.1)) * -8.5 + 10);
      integers_map(2, (x) => meshAdd(pushingRod, translation(-110 + (x + 2) * 9 + (x & 1), 1.7, -12)));
    });
    newModel((model) => {
      model._update = () =>
        translation(
          0,
          -2,
          max(shouldBlockRods(), shouldPushRods() * abs(/* @__PURE__ */ Math.sin(gameTime * 1.5))) * -8.5 + 10,
        );
      integers_map(3, (x) => meshAdd(pushingRod, translation(-106 + x * 9, 1.7, -12)));
    });
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(), translation(26.5, -1.6, 10).scale(20, 2.08, 3)),
          polygons_transform(cylinder(), translation(26.5, -0.6, 10).scale(19, 2, 0.5)),
        ),
        ...integers_map(
          4,
          (x) => polygons_transform(cylinder(), translation(13 + x * 9 + (x & 1), -0.8, 9).scale(1.35, 1.35, 9)),
        ),
        ...integers_map(
          3,
          (x) => polygons_transform(cylinder(), translation(17 + x * 9, -0.8, 9).scale(1.35, 1.35, 9)),
        ),
      ),
      translation(-123, 0, -12),
      material(0.5, 0.5, 0.6, 0.2),
    );
    newLever(translation(-116, -1.4, -18).rotate(0, 180));
    meshAdd(cylinder(), translation(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), material(0.8, 0.8, 0.8, 0.2));
    meshAdd(cylinder(6), translation(-116, -2.6, -16.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2));
    meshAdd(cylinder(), translation(-115.5, -17, -12).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(cylinder(8), translation(-114, -17, -2).scale(2, 15, 2), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(cylinder(8), translation(-79, -17, -2).scale(2, 15, 2), material(1, 1, 1, 0.3));
    meshAdd(cylinder(), translation(-77, -17, -50.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3));
    integers_map(3, (i) => {
      meshAdd(makeBigArcPolygons(16), translation(i * 12 - 109, -9, -12), material(0.6, 0.6, 0.6, 0.3));
      meshAdd(
        makeBigArcPolygons(16),
        translation(-77, -9, i * -12 - 8 - 12).rotate(0, 90),
        material(0.6, 0.6, 0.6, 0.3),
      );
    });
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(12), translation(-77, -14.5, -12).scale(4, 17.5, 4), material(0.7, 0.7, 0.7, 0.2)),
        polygons_transform(cylinder(), translation(-79, 0.1, -12).scale(3.5, 2, 1.3), material(0.4, 0.5, 0.6, 0.2)),
        polygons_transform(cylinder(), translation(-77, 0.1, -14).scale(1.5, 2, 2), material(0.4, 0.5, 0.6, 0.2)),
        polygons_transform(cylinder(12), translation(-77, 3.1, -12).scale(3, 5, 3), material(0.4, 0.5, 0.6, 0.2)),
      ),
    );
    meshAdd(cylinder(), translation(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(cylinder(9), translation(-98, -18.4, -40).scale(2.5, 13.5, 2.5), material(0.5, 0.5, 0.5, 0.3));
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(-93, -5.8, -40).scale(9, 1, 5), material(0.8, 0.8, 0.8, 0.1)),
        polygons_transform(cylinder(9), translation(-98, -5.8, -40).scale(3, 8, 3), material(0.7, 0.7, 0.7, 0.2)),
      ),
    );
    newLever(translation(-98, -4.4, -40).rotate(0, 90));
    newSoul(translation(-115, 0.2, -12), [
      0,
      0,
      3.5,
    ]);
    newSoul(translation(-93, -3, -40).rotate(4), [
      0,
      -2,
      3.5,
    ], [
      0,
      2,
      3.5,
    ]);
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(
            cylinder(6, 0, 0, 0.6),
            translation(-100, 0.7, 105.5).scale(8, 1, 11),
            material(0.7, 0.7, 0.7, 0.2),
          ),
          polygons_transform(
            cylinder(),
            translation(-101.5, 0.7, 93.5).scale(10.5, 1, 2),
            material(0.7, 0.7, 0.7, 0.2),
          ),
        ),
        polygons_transform(cylinder(5), translation(-100, 0.7, 113).scale(4, 3, 4), material(0.7, 0.7, 0.7, 0.2)),
      ),
    );
    integers_map(4, (i) =>
      newModel((model) => {
        model._update = () => {
          const osc = hexPadShouldOscillate();
          return translation(
            (i > 2 ? (1 - osc) * 2 + osc : 0) - 100,
            osc * /* @__PURE__ */ Math.sin(gameTime * 1.3 + i * 1.7) * (3 + i / 3) + 0.7,
            (i & 1 ? -1 : 1) * (1 - levers[8].$lerpValue2) * (1 - levers[12].$lerpValue2) * -7
              + max(osc, 0.05) * /* @__PURE__ */ Math.cos(gameTime * 1.3 + i * 7) * (4 - 2 * (1 - i / 3)) + 115,
          );
        };
        meshAdd(
          cylinder(6),
          translation(-14.6 - i * 4.8 - (i > 2 ? 2 : 0), -i / 2.3, -21.5).scale(2.6, 1, 2.5),
          material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3),
        );
      }));
    newModel((model) => {
      model._update = () => {
        const osc = hexPadShouldOscillate();
        return translation(
          (1 - osc) * 2.5 - 139.7,
          (1 - levers[8].$lerpValue) * -3 + osc * /* @__PURE__ */ Math.sin(gameTime * 0.8) * -1 - 1.8,
          93.5,
        ).rotateSelf(/* @__PURE__ */ Math.cos(gameTime * 1.3) * (osc * 3 + 3), 0);
      };
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(10), scaling(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
          polygons_transform(cylinder(10), scaling(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5)),
        ),
      );
      meshAdd(cylinder(15, 1), translation(-7.5).rotate(0, 90).scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3));
      meshAdd(cylinder(10), translation(-7.5).rotate(0, 90).scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3));
      meshAdd(cylinder(5), translation(-7.5).rotate(0, 90).scale(1, 3), material(0.5, 0.5, 0.5, 0.5));
      newLever(translation(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
      [
        -1,
        1,
      ].map((i) =>
        meshAdd(
          hornPolygons,
          rotation(-i * 90, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3),
          material(1, 1, 0.8, 0.2),
        )
      );
      newSoul(translation(-5, 4), [
        0,
        -1.2,
        1.7,
      ], [
        0,
        1.2,
        1.7,
      ]);
    });
    [
      -1,
      1,
    ].map((x) => {
      meshAdd(cylinder(12, 1), translation(-7.5 * x - 100, 3.7, 96).scale(0.8, 4, 0.8), material(0.6, 0.24, 0.2, 0.5));
      [
        7.2,
        1.5,
      ].map((y) =>
        meshAdd(
          cylinder(15, 1),
          translation(-7.5 * x - 100, y + 0.7, 96).scale(1.1, 0.5, 1.1),
          material(0.5, 0.24, 0.2, 0.4),
        )
      );
      meshAdd(
        hornPolygons,
        translation(x * -5 - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * x - 90),
        material(1, 1, 0.8),
      );
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), translation(x * -4, 3.5, -0.5).scale(4, 4, 0.7), material(0.5, 0.5, 0.5, 0.4)),
          polygons_transform(cylinder(), scaling(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)),
          polygons_transform(
            cylinder(28, 1),
            translation(0, 3, -5).scale(3, 4, 10).rotate(90, 0),
            material(0.6, 0.24, 0.2, 0.5),
          ),
          polygons_transform(
            cylinder(5),
            translation(x * -5.3, 7).rotate(90, 0).scale(1.7, 5, 1.7),
            material(0.6, 0.24, 0.2, 0.5),
          ),
          polygons_transform(
            cylinder(5),
            translation(x * -5.3, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75),
            material(0.6, 0.24, 0.2, 0.5),
          ),
        ),
        translation(x - 100, 0.7, 97),
      );
    });
    newModel((model) => {
      model._update = () => translation(-100, 0.6, 96.5).scale(0.88, 1.2 - levers[12].$lerpValue);
      meshAdd(gateBarsPolygons);
    });
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(-82.07, 0.8, 106).scale(11, 0.9, 2.2), material(0.7, 0.7, 0.7, 0.1)),
        polygons_transform(cylinder(45, 1), translation(-81, 0.7, 106).scale3d(7.7), material(0.7, 0.7, 0.7, 0.1)),
      ),
    );
    newModel((model) => {
      model._update = () => translation(-81, 0.6, 106).rotate(0, 40 + rotatingPlatform1Rotation);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(45, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
          polygons_transform(cylinder(), translation(0, 0, -5.5).scale(1.5, 3, 2.7), material(0.45, 0.45, 0.45, 0.2)),
        ),
      );
      meshAdd(cylinder(8), translation(0, 2).scale(3, 1.5, 3).rotate(0, 22), material(0.7, 0.7, 0.7, 0.1));
      meshAdd(cylinder(5), translation(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2));
      newSoul(
        translation(0, 3),
        ...polygon_regular(14).map(({ x, z }) => [
          x * 5.6,
          z * 5.6,
          2,
        ]),
      );
    });
    newModel((model) => {
      model._update = () => translation(-65.8, 0.8, 106).rotate(0, rotatingPlatform2Rotation);
      [
        -1,
        1,
      ].map((x) =>
        meshAdd(
          hornPolygons,
          rotation(0, 90).translate(x * -5, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90),
          material(1, 1, 0.8),
        )
      );
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), scaling(9, 5, 2), material(0.3, 0, 0, 0.3)),
        ),
      );
      meshAdd(polygons_transform(cylinder(28, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });
    newModel((model) => {
      model._update = () => translation(-50.7, 0.8, 106).rotate(0, 180 - rotatingPlatform2Rotation);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(0, 0, 7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
        ),
      );
      meshAdd(polygons_transform(cylinder(28, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });
    newModel((model) => {
      model._update = () => translation(-50.7, 0.8, 91).rotate(0, 270 + rotatingPlatform2Rotation);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(0, 0, -7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
        ),
      );
      meshAdd(polygons_transform(cylinder(28, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });
    meshAdd(cylinder(), translation(-58, 1, 106).scale(2, 0.65, 2), material(0.7, 0.7, 0.7, 0.2));
    meshAdd(cylinder(), translation(-50.7, 1, 99).scale(2, 0.65, 1), material(0.7, 0.7, 0.7, 0.2));
    meshAdd(cylinder(), translation(-42, 0.4, 91).scale(5, 1, 2.5), material(0.7, 0.7, 0.7, 0.3));
    meshAdd(cylinder(), translation(-34.2, 0.4, 91).scale(3, 1, 3), material(0.7, 0.7, 0.7, 0.3));
    newLever(translation(-34, 2.7, 96).rotate(-12, 0));
    meshAdd(cylinder(5), translation(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), material(0.2, 0.5, 0.5, 0.6));
    [
      material(0.1, 0.55, 0.45, 0.2),
      material(0.2, 0.5, 0.5, 0.3),
      material(0.3, 0.45, 0.55, 0.4),
    ].map((m, i) =>
      newModel((model) => {
        model._update = () => {
          const v = lerpneg(levers[13].$lerpValue2, levers[14].$lerpValue2);
          return translation(
            0,
            (1 - levers[13].$lerpValue2) * (1 - levers[14].$lerpValue2) * (i ? 0 : 3)
              + v * /* @__PURE__ */ Math.sin(gameTime * 1.5 + i * 1.5) * 4,
          );
        };
        meshAdd(cylinder(), translation(-23.5, 0.5, 91 + 6.8 * i).scale(i === 1 ? 2 : 3.3, 1, 3.3), m);
        if (i === 2) {
          meshAdd(cylinder(), translation(-29.1, 0.4, 91).scale(2.1, 1, 3), material(0.7, 0.7, 0.7, 0.3));
        }
        if (i === 1) {
          meshAdd(
            cylinder(),
            translation(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1),
            material(0.6, 0.6, 0.7, 0.3),
          );
        }
      })
    );
    [
      -1,
      1,
    ].map((x) =>
      meshAdd(hornPolygons, translation(x * -8, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90), material(1, 1, 0.8))
    );
    integers_map(
      3,
      (i) =>
        meshAdd(
          makeBigArcPolygons(24.7 - (i & 1) * 0.7),
          translation(i * 6 - 6, 4 - (i & 1), 111 - 0.2 * (i & 1)),
          i & 1 ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5),
        ),
    );
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(
          cylinder(6, 0, 0, 0.3),
          translation(0, -0.92, 95).scale(14, 2, 14),
          material(0.8, 0.8, 0.8, 0.2),
        ),
        polygons_transform(cylinder(5), translation(0, 0, 95).scale3d(6), material(0.3, 0.3, 0.3, 0.5)),
      ),
    );
    newLever(translation(0, 1.7, 82).rotate(0, 180));
    meshAdd(cylinder(5), translation(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), material(0.5, 0.3, 0.3, 0.4));
    meshAdd(cylinder(6), translation(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), material(0.5, 0.6, 0.7, 0.3));
    meshAdd(cylinder(), translation(0, 16, 129).scale(1.5, 1, 2), material(0.5, 0.6, 0.7, 0.3));
    meshAdd(cylinder(7), translation(0, 16.2, 133).scale(5, 1, 5), material(0.4, 0.5, 0.6, 0.4));
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(), translation(0, 16, 110.5).scale(12, 1, 3), material(0.5, 0.3, 0.3, 0.4)),
          polygons_transform(cylinder(), translation(0, 16, 111).scale(3, 1, 3.8), material(0.5, 0.3, 0.3, 0.4)),
        ),
        polygons_transform(cylinder(5), translation(0, 16, 103.5).scale(5.5, 5, 5.5), material(0.5, 0.3, 0.3, 0.4)),
      ),
    );
    newModel((model) => {
      model._update = () => {
        const k = /* @__PURE__ */ Math.sin(gameTime);
        return translation(k * -2).rotate(k * 25);
      };
      meshAdd(
        cylinder(3),
        translation(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60),
        material(0.5, 0.3, 0.3, 0.4),
      );
      [
        22,
        30,
      ].map((z) => {
        meshAdd(cylinder(6), translation(0, 16, z + 95).scale(3, 1, 2.3).rotate(0, 90), material(0.7, 0.7, 0.7, 0.4));
        meshAdd(cylinder(), translation(0, 6.2, z + 95).scale(0.5, 11, 0.5), material(0.5, 0.3, 0.3, 0.4));
      });
    });
    newModel((model) => {
      model._update = () => {
        const v = lerpneg(
          lerpneg((levers[14].$lerpValue + levers[14].$lerpValue2) / 2, levers[13].$lerpValue2),
          (levers[15].$lerpValue + levers[15].$lerpValue2) / 2,
        );
        return translation(0, v * 16, clamp(v * 2 - 1) * 8.5 + 95);
      };
      meshAdd(cylinder(5), scaling(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4));
      meshAdd(cylinder(5), scaling(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4));
      newLever(translation(0, 1.5, -1).rotate(0, 180));
    });
    newSoul(
      translation(0, 3, 95),
      ...polygon_regular(9).map(({ x, z }) => [
        x * 9,
        z * 9,
        4,
      ]),
    );
    newSoul(translation(0, 19, 134), [
      0,
      0,
      3.5,
    ]);
  });
  newModel(() => {
    [
      0,
      180,
    ].map((r) =>
      meshAdd(hornPolygons, rotation(0, r).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), material(1, 1, 0.8))
    );
    meshAdd(sphere(20), translation(0, 1).scale(0.5, 0.5, 0.5), material(1, 0.3, 0.4));
    const eye = polygons_transform(
      csg_polygons_subtract(cylinder(15, 1), polygons_transform(cylinder(), translation(0, 0, 1).scale(2, 2, 0.5))),
      rotation(-90, 0).scale(0.1, 0.05, 0.1),
      material(0.3, 0.3, 0.3),
    );
    [
      -1,
      1,
    ].map((i) => meshAdd(eye, translation(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20)));
    meshAdd(cylinder(), translation(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));
    meshAdd(sphere(20), scaling(0.7, 0.8, 0.55), material(1, 0.3, 0.4));
  });
  [
    -1,
    1,
  ].map((x) =>
    newModel(() => {
      meshAdd(cylinder(10, 1), translation(x * 0.3, -0.8).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
    })
  );
  newModel(() => {
    meshAdd(cylinder(6, 1), scaling(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5, 0.1));
    meshAdd(cylinder(10), translation(0, 1).scale(0.21, 0.3, 0.21), material(1, 0.5, 0.2));
    meshAdd(cylinder(3), translation(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2, 0.1));
  }, MODEL_KIND_MESH);
  newModel(() => {
    meshAdd(cylinder(6).slice(0, -1), scaling(0.77, 1, 0.77), material(1, 0.3, 0.5));
  }, MODEL_KIND_MESH);
  newModel(() => {
    const GHOST_STACKS = 24;
    const GHOST_SLICES = 30;
    meshAdd(
      sphere(GHOST_SLICES, GHOST_STACKS, (a, b, polygon) => {
        const bm = b / GHOST_STACKS;
        const theta = a * (Math.PI * (2 / GHOST_SLICES));
        const phixz = bm ** 0.6 * Math.PI / 2;
        const osc = bm * bm * /* @__PURE__ */ Math.sin(a * Math.PI * (14 / GHOST_SLICES)) / 4;
        if (b === GHOST_STACKS - 1) {
          polygon.$smooth = 0;
          return {
            x: 0,
            y: -0.5,
            z: 0,
          };
        }
        return {
          x: /* @__PURE__ */ Math.cos(theta) * /* @__PURE__ */ Math.sin(phixz),
          y: /* @__PURE__ */ Math.cos(bm * Math.PI) - bm - osc,
          z: /* @__PURE__ */ Math.sin(theta) * /* @__PURE__ */ Math.sin(phixz)
            + /* @__PURE__ */ Math.sin(osc * Math.PI * 2) / 4,
        };
      }),
      scaling(0.7, 0.7, 0.7),
      material(1, 1, 1),
    );
    [
      -1,
      1,
    ].map((x) => meshAdd(sphere(12), translation(x * 0.16, 0.4, -0.36).scale3d(0.09)));
  }, MODEL_KIND_MESH);
};
const code$5 =
  "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}";
const code$4 =
  "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}";
const uniformName_projectionMatrix = "a";
const uniformName_viewMatrix = "b";
const uniformName_worldMatrices = "c";
const code$3 =
  "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}";
const code$2 = "#version 300 es\nvoid main(){}";
const code$1 = "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}";
const code =
  "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}";
const uniformName_iResolution = "j";
const LIGHT_ROT_Y = 139;
const LIGHT_ROT_X = 298;
const csm_buildMatrix = (camera_view, nearPlane, farPlane, zMultiplier) => {
  let tx = 0;
  let ty = 0;
  let tz = 0;
  const roundingRadius = (farPlane - nearPlane) * 1.1;
  const projViewInverse = new DOMMatrix(mat_perspective(nearPlane, farPlane)).multiplySelf(camera_view).invertSelf();
  const frustumCorners = integers_map(8, (i) => {
    const v = projViewInverse.transformPoint({
      x: 4 & i ? 1 : -1,
      y: 2 & i ? 1 : -1,
      z: 1 & i ? 1 : -1,
    });
    tx -= v.x = (roundingRadius * v.x | 0) / (roundingRadius * v.w);
    ty -= v.y = (roundingRadius * v.y | 0) / (roundingRadius * v.w);
    tz -= v.z = (roundingRadius * v.z | 0) / (roundingRadius * v.w);
    return v;
  });
  const lightViewTranslated = rotation(LIGHT_ROT_X, LIGHT_ROT_Y).translateSelf(tx / 8, ty / 8, tz / 8);
  let left = Infinity;
  let right = -Infinity;
  let bottom = Infinity;
  let top = -Infinity;
  let near = Infinity;
  let far = -Infinity;
  polygon_transform(frustumCorners, lightViewTranslated).map(({ x, y, z }) => {
    left = min(left, x);
    right = max(right, x);
    bottom = min(bottom, y);
    top = max(top, y);
    near = min(near, z);
    far = max(far, z);
  });
  near *= near < 0 ? zMultiplier : 1 / zMultiplier;
  far *= far > 0 ? zMultiplier : 1 / zMultiplier;
  return scaling(2 / (right - left), 2 / (top - bottom), 2 / (near - far)).translateSelf(
    (right + left) / -2,
    (top + bottom) / -2,
    (near + far) / 2,
  ).multiplySelf(lightViewTranslated);
};
const GAMEPAD_BUTTON_B = 0;
const GAMEPAD_BUTTON_A = 1;
const GAMEPAD_BUTTON_Y = 2;
const GAMEPAD_BUTTON_X = 3;
const GAMEPAD_BUTTON_UP = 12;
const GAMEPAD_BUTTON_DOWN = 13;
const GAMEPAD_BUTTON_LEFT = 14;
const GAMEPAD_BUTTON_RIGHT = 15;
const audioContext = new AudioContext();
const songAudioSource = audioContext.createBufferSource();
let player_first_person;
let updateInput;
let movAngle = 0;
let movAmount = 0;
const camera_rotation = {
  x: 0,
  y: 180,
};
const initPage = () => {
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
  let gamepadInteractPressed;
  let touch_movementX;
  let touch_movementY;
  let pageClicked;
  let music_on = true;
  const TOUCH_SIZE = 20;
  const TOUCH_MOVE_SNAP = 0.2;
  const TOUCH_MOVE_THRESHOLD = 0.5;
  const updateMusicOnState = () => {
    if (mainMenuVisible || !music_on) {
      songAudioSource.disconnect();
    } else {
      songAudioSource.connect(audioContext.destination);
    }
    b4.innerHTML = "Music: " + music_on;
  };
  const toggleMusic = () => {
    music_on = !music_on;
    updateMusicOnState();
  };
  const mainMenu = (value = false) => {
    if (mainMenuVisible !== value) {
      setMainMenuVisible(value);
      try {
        if (value) {
          document.exitFullscreen().catch(() => {
          });
          document.exitPointerLock();
        } else {
          songAudioSource.start();
        }
      } catch {
      }
      player_first_person = 0;
      document.body.className = value ? "l m" : "l";
      updateMusicOnState();
      updateCollectedSoulsCounter();
    }
  };
  const handleResize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    keyboard_downKeys.length = touch_movementX = touch_movementY = 0;
    touchPosIdentifier = touchRotIdentifier = void 0;
    if (document.hidden) {
      mainMenu(true);
    }
  };
  oncontextmenu = () => false;
  b3.onclick = () => {
    if (confirm("Restart game?")) {
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
      location.reload();
    }
  };
  b1.onclick = () => {
    document.body.requestFullscreen();
    mainMenu();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    mainMenu();
    player_first_person = 1;
  };
  b4.onclick = toggleMusic;
  b5.onclick = () => mainMenu(true);
  onclick = (e) => {
    pageClicked = 1;
    if (!mainMenuVisible) {
      if (e.target === hC) {
        keyboard_downKeys[KEY_INTERACT] = true;
      }
      if (player_first_person) {
        hC.requestPointerLock();
      }
    }
  };
  onkeyup = onkeydown = ({ code: code2, target, type, repeat }) => {
    if (!repeat) {
      const pressed = !!type[5] && target === document.body;
      if (pressed && (code2 === "Escape" || code2 === "Enter" && mainMenuVisible)) {
        if (!mainMenuVisible || pageClicked) {
          mainMenu(!mainMenuVisible);
        }
      } else {
        const mapped = {
          ["KeyA"]: KEY_LEFT,
          ["ArrowLeft"]: KEY_LEFT,
          ["KeyW"]: KEY_FRONT,
          ["ArrowUp"]: KEY_FRONT,
          ["KeyD"]: KEY_RIGHT,
          ["ArrowRight"]: KEY_RIGHT,
          ["KeyS"]: KEY_BACK,
          ["ArrowDown"]: KEY_BACK,
          ["KeyE"]: KEY_INTERACT,
          ["Space"]: KEY_INTERACT,
          ["Enter"]: KEY_INTERACT,
        }[code2];
        if (mapped === KEY_INTERACT) {
          if (pressed) {
            keyboard_downKeys[mapped] = 1;
          }
        } else {
          keyboard_downKeys[mapped] = pressed;
        }
      }
    }
  };
  onmousemove = ({ movementX, movementY }) => {
    if (player_first_person && (movementX || movementY)) {
      camera_rotation.y += movementX * 0.1;
      camera_rotation.x += movementY * 0.1;
    }
  };
  hC.ontouchstart = (e) => {
    if (!mainMenuVisible) {
      for (const { pageX, pageY, identifier } of e.changedTouches) {
        if (player_first_person && pageX > hC.clientWidth / 2) {
          if (touchRotIdentifier === void 0) {
            touchRotMoved = 0;
            touchRotX = pageX;
            touchRotY = pageY;
            touchRotIdentifier = identifier;
            touchStartCameraRotX = camera_rotation.y;
            touchStartCameraRotY = camera_rotation.x;
          }
        } else if (touchPosIdentifier === void 0) {
          touchPosMoved = 0;
          touchPosStartX = pageX;
          touchPosStartY = pageY;
          touchPosIdentifier = identifier;
        }
      }
      touchStartTime = absoluteTime;
    }
  };
  hC.ontouchmove = (e) => {
    if (!mainMenuVisible) {
      for (const { pageX, pageY, identifier } of e.changedTouches) {
        if (touchRotIdentifier === identifier) {
          camera_rotation.y = touchStartCameraRotX + (pageX - touchRotX) / 2.3;
          camera_rotation.x = touchStartCameraRotY + (pageY - touchRotY) / 2.3;
          touchRotMoved = 1;
        }
        if (touchPosIdentifier === identifier) {
          const deltaX = (touchPosStartX - pageX) / TOUCH_SIZE;
          const deltaY = (touchPosStartY - pageY) / TOUCH_SIZE;
          const absDeltaX = abs(deltaX);
          const absDeltaY = abs(deltaY);
          const angle = /* @__PURE__ */ Math.atan2(deltaY, deltaX);
          const speed = clamp(/* @__PURE__ */ Math.hypot(deltaY, deltaX) - TOUCH_MOVE_THRESHOLD);
          touch_movementX = absDeltaX > TOUCH_MOVE_SNAP ? /* @__PURE__ */ Math.cos(angle) * speed : 0;
          touch_movementY = absDeltaY > TOUCH_MOVE_SNAP ? /* @__PURE__ */ Math.sin(angle) * speed : 0;
          if (touch_movementX || touch_movementY) {
            touchPosMoved = 1;
          }
          if (absDeltaX > 2) {
            touchPosStartX = pageX + /* @__PURE__ */ Math.sign(deltaX) * TOUCH_SIZE;
          }
          if (absDeltaY > 2) {
            touchPosStartY = pageY + /* @__PURE__ */ Math.sign(deltaY) * TOUCH_SIZE;
          }
        }
      }
    }
  };
  hC.ontouchend = (e) => {
    let click;
    if (document.activeElement === document.body) {
      e.preventDefault();
    }
    for (const touch of e.changedTouches) {
      if (touch.identifier === touchRotIdentifier) {
        touchRotIdentifier = void 0;
        if (!touchRotMoved) {
          click = 1;
        }
        touchRotMoved = 0;
      } else if (touch.identifier === touchPosIdentifier) {
        touchPosIdentifier = void 0;
        touch_movementY = touch_movementX = 0;
        if (!touchPosMoved) {
          click = 1;
        }
        touchPosMoved = 0;
      } else {
        click = 1;
      }
    }
    if (click && e.target === hC && touchStartTime) {
      const diff = absoluteTime - touchStartTime;
      if (diff > 0.02 && diff < 0.7) {
        keyboard_downKeys[KEY_INTERACT] = true;
      }
    }
  };
  updateInput = () => {
    let input_forward = touch_movementY + (keyboard_downKeys[KEY_FRONT] ? 1 : 0)
      - (keyboard_downKeys[KEY_BACK] ? 1 : 0);
    let input_strafe = touch_movementX + (keyboard_downKeys[KEY_LEFT] ? 1 : 0) - (keyboard_downKeys[KEY_RIGHT] ? 1 : 0);
    const gamepad = navigator.getGamepads()[0];
    if (gamepad) {
      const getGamepadButtonState = (index) => buttons[index]?.pressed || buttons[index]?.value > 0 ? 1 : 0;
      const { buttons, axes } = gamepad;
      const interactButtonPressed = getGamepadButtonState(GAMEPAD_BUTTON_X) || getGamepadButtonState(GAMEPAD_BUTTON_Y)
        || getGamepadButtonState(GAMEPAD_BUTTON_A) || getGamepadButtonState(GAMEPAD_BUTTON_B);
      input_forward += getGamepadButtonState(GAMEPAD_BUTTON_UP) - getGamepadButtonState(GAMEPAD_BUTTON_DOWN)
        - threshold(axes[1], 0.2);
      input_strafe += getGamepadButtonState(GAMEPAD_BUTTON_LEFT) - getGamepadButtonState(GAMEPAD_BUTTON_RIGHT)
        - threshold(axes[0], 0.2);
      if (player_first_person) {
        camera_rotation.x += gameTimeDelta * threshold(axes[3], 0.3) * 80;
        camera_rotation.y += gameTimeDelta * threshold(axes[2], 0.3) * 80;
      }
      if (interactButtonPressed && !gamepadInteractPressed) {
        keyboard_downKeys[KEY_INTERACT] = 1;
      }
      gamepadInteractPressed = interactButtonPressed;
    }
    movAngle = /* @__PURE__ */ Math.atan2(input_forward, input_strafe);
    movAmount = threshold(clamp(/* @__PURE__ */ Math.hypot(input_forward, input_strafe)), 0.05);
  };
  document.onvisibilitychange = onblur = onresize = handleResize;
  handleResize();
  mainMenu(true);
};
const gl = hC.getContext("webgl2", {
  powerPreference: "high-performance",
});
for (const s in gl) {
  gl[
    s[0] + [
      ...s,
    ].reduce((p, c, i) => (p * i + c.charCodeAt(0)) % 434, 0).toString(36)
  ] = gl[s];
}
let player_update;
let camera_position_x = 0;
let camera_position_y = 0;
let camera_position_z = 0;
const CAMERA_PLAYER_Y_DIST = 13;
const CAMERA_PLAYER_Z_DIST = -18;
const PLAYER_LEGS_VELOCITY = 9.1;
const PLAYER_RESPAWN_Z = -2.4;
const COLLISION_TEXTURE_SIZE = 128;
const player_position_global = {
  x: 0,
  y: 0,
  z: 0,
};
const player_init = () => {
  let currentModelId;
  let currentModelIdTMinus1;
  let oldModelId;
  let player_has_ground;
  let player_look_angle_target;
  let player_look_angle;
  let player_legs_speed;
  let player_on_rotating_platforms;
  let player_mov_x;
  let player_mov_z;
  let player_collision_velocity_x;
  let player_collision_velocity_z;
  let player_speed;
  let player_model_y;
  let camera_pos_lookat_x;
  let camera_pos_lookat_y;
  let camera_pos_lookat_z;
  let boot = 1;
  let player_respawned = 2;
  let player_gravity = 2;
  const doVerticalCollisions = () => {
    let maxModelIdCount = 0;
    let nextModelId = 0;
    let grav = 0;
    let lines = 0;
    player_has_ground = 0;
    player_collision_modelIdCounter.fill(0);
    for (let y = 0; y < 31; ++y) {
      let up = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = 0; x < COLLISION_TEXTURE_SIZE - 0; x++) {
        let i = yindex + x * 4;
        const a = (collision_buffer[i] + collision_buffer[i + 1]) / 255;
        i = collision_buffer[i + 2];
        if (x > 14 && x < COLLISION_TEXTURE_SIZE - 14) {
          up += a;
        }
        if (i && a) {
          const count = player_collision_modelIdCounter[i] + 1;
          player_collision_modelIdCounter[i] = count;
          if (count >= maxModelIdCount) {
            maxModelIdCount = count;
            nextModelId = i;
          }
        }
      }
      if (up < 3 && y > 5) {
        grav += y / 32;
      }
      if (up > 3) {
        if (y > 7) {
          lines += y / 15;
        }
        player_has_ground = 1;
      }
    }
    if (nextModelId) {
      player_has_ground = 1;
    }
    currentModelId = nextModelId || currentModelIdTMinus1;
    currentModelIdTMinus1 = nextModelId;
    player_gravity = lerpDamp(player_gravity, player_has_ground ? 6.5 : player_position_global.y < -20 ? 11 : 8, 4);
    player_position_global.y += lines / 41
      - (player_has_ground || player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;
  };
  const doHorizontalCollisions = () => {
    player_mov_x = 0;
    player_mov_z = 0;
    for (let y = 32; y < COLLISION_TEXTURE_SIZE; y += 2) {
      let front = 0;
      let back = 0;
      let left = 0;
      let right = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = y & 1; x < COLLISION_TEXTURE_SIZE; x += 2) {
        const i1 = yindex + x * 4;
        const i2 = yindex + (COLLISION_TEXTURE_SIZE - 1 - x) * 4;
        const dist1 = collision_buffer[i1] / 255;
        const dist2 = collision_buffer[i2 + 1] / 255;
        const t = 1 - abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);
        if (x > 10 && x < COLLISION_TEXTURE_SIZE - 10) {
          front = max(max(dist1 * t, dist1 * collision_buffer[i2] / 255), front);
          back = max(max(dist2 * t, dist2 * collision_buffer[i1 + 1] / 255), back);
        }
        if (x < COLLISION_TEXTURE_SIZE / 2 - 10 || x > COLLISION_TEXTURE_SIZE / 2 + 10) {
          const xdist = (1 - t) * max(dist1, dist2) / 3;
          if (xdist > 1e-3) {
            if (x < COLLISION_TEXTURE_SIZE / 2 && left < xdist) {
              left = xdist;
            } else if (x > COLLISION_TEXTURE_SIZE / 2 && right < xdist) {
              right = xdist;
            }
          }
        }
      }
      if (abs(right - left) > abs(player_mov_x)) {
        player_mov_x = right - left;
      }
      if (abs(back - front) > abs(player_mov_z)) {
        player_mov_z = back - front;
      }
    }
  };
  const getReferenceMatrix = () =>
    player_respawned
      ? levers[player_last_pulled_lever].$parent.$matrix
      : oldModelId && allModels[oldModelId].$kind === MODEL_KIND_GAME && allModels[oldModelId].$matrix || identity;
  const interpolate_with_hysteresis = (previous, desired, hysteresis, speed) =>
    lerp(previous, desired, boot || (clamp(abs(desired - previous) ** 0.9 - hysteresis) + 1 / 7) * damp(speed * 1.5));
  const playerMovedGlobalPos = (referenceMatrix) => {
    const inverseReferenceRotationMatrix = referenceMatrix.inverse();
    inverseReferenceRotationMatrix.m41 = inverseReferenceRotationMatrix.m42 = inverseReferenceRotationMatrix.m43 = 0;
    const v = inverseReferenceRotationMatrix.transformPoint({
      x: player_mov_x,
      z: player_mov_z,
      w: 0,
    });
    player_position_global.x += v.x;
    player_position_global.z += v.z;
    return referenceMatrix.transformPoint(player_position_global);
  };
  const player_collision_modelIdCounter = new Int32Array(256);
  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);
  player_update = () => {
    gl["fa7"]();
    gl["r9r"](0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, 6408, 5121, collision_buffer);
    gl["iay"](36008, [
      36064,
      36096,
    ]);
    gl["iay"](36009, [
      36064,
      36096,
    ]);
    NO_INLINE(doHorizontalCollisions)();
    NO_INLINE(doVerticalCollisions)();
    const playerSpeedCollision = clamp(1 - max(abs(player_mov_x), abs(player_mov_z)) * 5);
    const movementRadians = player_first_person ? camera_rotation.y * DEG_TO_RAD : Math.PI;
    player_speed = lerpDamp(
      player_speed,
      player_has_ground * playerSpeedCollision * clamp(2 * movAmount) * 7,
      player_has_ground ? playerSpeedCollision > 0.1 ? 10 : 5 + 2 * movAmount : 1,
    );
    player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4);
    player_mov_x += gameTimeDelta
      * ((currentModelId ? 0 : playerSpeedCollision * player_collision_velocity_x)
        - /* @__PURE__ */ Math.cos(movAngle + movementRadians) * movAmount * player_speed);
    player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4);
    player_mov_z += gameTimeDelta
      * ((currentModelId ? 0 : playerSpeedCollision * player_collision_velocity_z)
        - /* @__PURE__ */ Math.sin(movAngle + movementRadians) * movAmount * player_speed);
    let referenceMatrix = getReferenceMatrix();
    const { x, y, z } = player_respawned > 1
      ? levers[player_last_pulled_lever].$locMatrix.transformPoint({
        x: 0,
        y: player_last_pulled_lever || firstBoatLerp > 0.9 ? 15 : 1,
        z: PLAYER_RESPAWN_Z,
      })
      : playerMovedGlobalPos(referenceMatrix);
    if (currentModelId) {
      player_collision_velocity_x = (x - player_position_final.x) / gameTimeDelta;
      player_collision_velocity_z = (z - player_position_final.z) / gameTimeDelta;
    }
    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;
    if (player_respawned) {
      player_respawned = player_has_ground && currentModelId ? 0 : 1;
    }
    if (player_respawned || currentModelId !== oldModelId) {
      oldModelId = currentModelId;
      referenceMatrix = getReferenceMatrix();
      const v = referenceMatrix.inverse().transformPoint(player_position_final);
      player_position_global.x = v.x;
      player_position_global.y = v.y;
      player_position_global.z = v.z;
    }
    player_on_rotating_platforms = lerpDamp(
      player_on_rotating_platforms,
      shouldRotatePlatforms
        * (currentModelId > MODEL_ID_ROTATING_PLATFORM - 1 && currentModelId < MODEL_ID_ROTATING_PLATFORM + 4),
      2,
    );
    if (y < (x < -25 || z < 109 ? -25 : -9)) {
      player_collision_velocity_x = player_collision_velocity_z = player_speed = 0;
      player_respawned = 2;
    }
    if (currentModelId === 1) {
      levers[9].$value = x < -15 && z < 0 ? 1 : 0;
    }
    player_model_y = lerp(lerpDamp(player_model_y, y, 2), y, player_respawned || abs(player_model_y - y) * 8);
    camera_pos_lookat_y = interpolate_with_hysteresis(camera_pos_lookat_y, player_model_y, 2, 1);
    camera_pos_lookat_x = interpolate_with_hysteresis(camera_pos_lookat_x, x, 0.5, 1);
    camera_pos_lookat_z = interpolate_with_hysteresis(camera_pos_lookat_z, z, 0.5, 1);
    if (player_first_person) {
      const d = player_respawned + damp(18);
      camera_position_x = lerp(camera_position_x, x, d);
      camera_position_y = lerp(camera_position_y, player_model_y + 1.5, d);
      camera_position_z = lerp(camera_position_z, z, d);
      camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
    } else {
      camera_position_y = interpolate_with_hysteresis(
        camera_position_y,
        max(
          camera_pos_lookat_y + clamp((-60 - z) / 8, 0, 20) + CAMERA_PLAYER_Y_DIST + player_on_rotating_platforms * 9,
          6,
        ),
        4,
        2,
      );
      camera_position_z = interpolate_with_hysteresis(
        camera_position_z,
        camera_pos_lookat_z + CAMERA_PLAYER_Z_DIST + player_on_rotating_platforms * 5,
        1,
        2 + player_on_rotating_platforms,
      );
      camera_position_x = interpolate_with_hysteresis(
        camera_position_x,
        camera_pos_lookat_x,
        1,
        2 + player_on_rotating_platforms,
      );
      const viewDirDiffz = min(4, -abs(camera_pos_lookat_z - camera_position_z));
      const viewDirDiffx = camera_pos_lookat_x - camera_position_x;
      camera_rotation.y = angle_lerp_degrees(
        camera_rotation.y,
        90 - angle_wrap_degrees(/* @__PURE__ */ Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD),
        boot + damp(6),
      );
      camera_rotation.x = angle_lerp_degrees(
        camera_rotation.x,
        90
          - /* @__PURE__ */ Math.atan2(
              /* @__PURE__ */ Math.hypot(viewDirDiffz, viewDirDiffx),
              camera_position_y - camera_pos_lookat_y,
            ) / DEG_TO_RAD,
        boot + damp(6),
      );
    }
    camera_rotation.x = clamp(camera_rotation.x, -87, 87);
    player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, damp(8));
    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);
    if (movAmount) {
      player_look_angle_target = 90 - movAngle / DEG_TO_RAD;
    }
    boot = 0;
    allModels[MODEL_ID_PLAYER_BODY].$matrix = translation(x, player_model_y, z).rotateSelf(0, player_look_angle);
    for (let i = 0; i < 2; ++i) {
      allModels[MODEL_ID_PLAYER_LEG0 + i].$matrix = allModels[MODEL_ID_PLAYER_BODY].$matrix.translate(
        0,
        player_legs_speed
          * clamp(/* @__PURE__ */ Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1) - Math.PI / 2) * 0.45),
      ).rotateSelf(
        player_legs_speed * /* @__PURE__ */ Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1))
          * (0.25 / DEG_TO_RAD),
        0,
      );
    }
  };
};
const loadShader = (source, type = 35633) => {
  const shader = gl["c6x"](type);
  gl["s3c"](shader, source);
  gl["c6a"](shader);
  return shader;
};
const initShaderProgram = (vertexShader, sfsSource) => {
  const uniforms = {};
  const program = gl["c1h"]();
  gl["abz"](program, vertexShader);
  gl["abz"](program, loadShader(sfsSource, 35632));
  gl["l8l"](program);
  return (name) => name ? uniforms[name] || (uniforms[name] = gl["gan"](program, name)) : gl["u7y"](program);
};
const renderModels = (worldMatrixLoc, renderPlayer, soulModelId, isShadowRender) => {
  if (mainMenuVisible) {
    const matrix = rotation(0, /* @__PURE__ */ Math.sin(absoluteTime) * 40 - 70);
    for (
      const modelId of [
        MODEL_ID_PLAYER_BODY,
        MODEL_ID_PLAYER_LEG0,
        MODEL_ID_PLAYER_LEG1,
      ]
    ) {
      matrixToArray(matrix, worldMatricesBuffer, modelId - 1);
    }
    gl["uae"](worldMatrixLoc, false, worldMatricesBuffer);
    gl["d97"](
      4,
      allModels[MODEL_ID_PLAYER_LEG1].$vertexEnd - allModels[MODEL_ID_PLAYER_BODY].$vertexBegin,
      5123,
      allModels[MODEL_ID_PLAYER_BODY].$vertexBegin * 2,
    );
    return;
  }
  for (let i = 0; i < allModels.length; ++i) {
    if (allModels[i].$kind) {
      matrixToArray(allModels[i].$matrix, worldMatricesBuffer, i - 1);
    }
  }
  gl["uae"](worldMatrixLoc, false, worldMatricesBuffer);
  gl["d97"](
    4,
    (renderPlayer ? allModels[MODEL_ID_PLAYER_LEG1].$vertexEnd : allModels[MODEL_ID_PLAYER_BODY].$vertexBegin) - 3,
    5123,
    6,
  );
  for (let i1 = 0; i1 < SOULS_COUNT; ++i1) {
    matrixToArray(souls[i1].$matrix, worldMatricesBuffer, i1);
  }
  for (let i2 = 0; i2 < levers.length; ++i2) {
    matrixToArray(levers[i2].$matrix, worldMatricesBuffer, i2 + SOULS_COUNT);
    if (!isShadowRender) {
      worldMatricesBuffer[(i2 + SOULS_COUNT) * 16 + 15] = 1 - levers[i2].$lerpValue;
    }
  }
  gl["uae"](worldMatrixLoc, false, worldMatricesBuffer);
  gl["das"](
    4,
    allModels[soulModelId].$vertexEnd - allModels[soulModelId].$vertexBegin,
    5123,
    allModels[soulModelId].$vertexBegin * 2,
    13,
  );
  gl["das"](
    4,
    allModels[MODEL_ID_LEVER].$vertexEnd - allModels[MODEL_ID_LEVER].$vertexBegin,
    5123,
    allModels[MODEL_ID_LEVER].$vertexBegin * 2,
    levers.length,
  );
};
const worldMatricesBuffer = new Float32Array(624);
const startMainLoop = (groundTextureImage) => {
  const mainLoop = (globalTime) => {
    gl["f1s"]();
    requestAnimationFrame(mainLoop);
    gameTimeUpdate(globalTime);
    if (gameTimeDelta > 0) {
      updateInput();
      worldStateUpdate();
      player_update();
      collisionShader();
      gl["b6o"](36160, collision_frameBuffer);
      gl["v5y"](0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
      gl["c4s"](16640);
      gl["cbf"](true, false, true, false);
      const { x, y, z } = player_position_final;
      gl["uae"](
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(rotation(0, 180).invertSelf().translateSelf(-x, -y, 0.3 - z)),
      );
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION, 0);
      gl["c4s"](256);
      gl["cbf"](false, true, true, false);
      gl["uae"](collisionShader(uniformName_viewMatrix), false, matrixToArray(translation(-x, -y, -z - 0.3)));
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION, 0);
      gl["f1s"]();
    }
    keyboard_downKeys[KEY_INTERACT] = 0;
    const camera_view = mainMenuVisible
      ? rotation(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
      : rotation(-camera_rotation.x, -camera_rotation.y).invertSelf().translateSelf(
        -camera_position_x,
        -camera_position_y,
        -camera_position_z,
      );
    csmShader();
    gl["b6o"](36160, csm_framebuffer);
    gl["v5y"](0, 0, constDef_CSM_TEXTURE_SIZE, constDef_CSM_TEXTURE_SIZE);
    csm_render[0](csm_buildMatrix(camera_view, zNear, constDef_CSM_PLANE_DISTANCE, 10));
    csm_render[1](csm_buildMatrix(camera_view, constDef_CSM_PLANE_DISTANCE, zFar, 11));
    mainShader();
    gl["b6o"](36160, null);
    gl["v5y"](0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl["cbf"](true, true, true, true);
    gl["c4s"](16640);
    csm_render[0]();
    csm_render[1]();
    gl["uae"](mainShader(uniformName_projectionMatrix), false, mat_perspective(zNear, zFar));
    gl["uae"](mainShader(uniformName_viewMatrix), false, matrixToArray(camera_view));
    gl["ubu"](mainShader(uniformName_viewPos), camera_position_x, camera_position_y, camera_position_z);
    renderModels(mainShader(uniformName_worldMatrices), !player_first_person, MODEL_ID_SOUL, 0);
    skyShader();
    gl["ubu"](skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);
    gl["ubu"](skyShader(uniformName_viewPos), camera_position_x, camera_position_y, camera_position_z);
    gl["uae"](skyShader(uniformName_viewMatrix), false, matrixToArray(camera_view.inverse()));
    gl["d97"](4, 3, 5123, 0);
    gl["b6o"](36160, collision_frameBuffer);
    gl["f1s"]();
  };
  const mainVertexShader = loadShader(code$4);
  const csmShader = initShaderProgram(loadShader(code$5), code$2);
  const skyShader = initShaderProgram(loadShader(code$1), code);
  const collisionShader = initShaderProgram(mainVertexShader, code$3);
  const mainShader = initShaderProgram(mainVertexShader, code$6);
  const csm_render = integers_map(2, (csmSplit) => {
    const lightSpaceMatrix = new Float32Array(16);
    const texture = gl["c25"]();
    gl["a4v"](33984 + csmSplit);
    gl["b9j"](3553, texture);
    gl["t60"](3553, 0, 33190, constDef_CSM_TEXTURE_SIZE, constDef_CSM_TEXTURE_SIZE, 0, 6402, 5125, null);
    gl["t2z"](3553, 10241, 9729);
    gl["t2z"](3553, 10240, 9729);
    gl["t2z"](3553, 34893, 515);
    gl["t2z"](3553, 34892, 34894);
    gl["t2z"](3553, 10243, 33071);
    gl["t2z"](3553, 10242, 33071);
    return (matrix) => {
      if (matrix) {
        matrixToArray(matrix, lightSpaceMatrix);
        gl["uae"](csmShader(uniformName_viewMatrix), false, lightSpaceMatrix);
        gl["fas"](36160, 36096, 3553, texture, 0);
        gl["c4s"](256);
        renderModels(csmShader(uniformName_worldMatrices), !player_first_person, MODEL_ID_SOUL, 1);
      } else {
        gl["uae"](mainShader(csmSplit ? uniformName_csm_matrix1 : uniformName_csm_matrix0), false, lightSpaceMatrix);
      }
    };
  });
  const csm_framebuffer = gl["c5w"]();
  const collision_renderBuffer = gl["c3z"]();
  const collision_frameBuffer = gl["c5w"]();
  const collision_texture = gl["c25"]();
  collisionShader();
  gl["uae"](collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1.4, 0.59, 1e-4, 1));
  mainShader();
  gl["ubh"](mainShader(uniformName_groundTexture), 2);
  gl["ubh"](mainShader(uniformName_csm_texture1), 1);
  gl["ubh"](mainShader(uniformName_csm_texture0), 0);
  skyShader();
  gl["ubh"](skyShader(uniformName_groundTexture), 2);
  gl["b6o"](36160, csm_framebuffer);
  gl["d45"]([
    0,
  ]);
  gl["r9l"](0);
  gl["b6o"](36160, collision_frameBuffer);
  gl["bb1"](36161, collision_renderBuffer);
  gl["r4v"](36161, 33189, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  gl["f8w"](36160, 36096, 36161, collision_renderBuffer);
  gl["a4v"](33986);
  gl["b9j"](3553, collision_texture);
  gl["t60"](3553, 0, 6407, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, 0, 6407, 5121, null);
  gl["fas"](36160, 36064, 3553, collision_texture, 0);
  gl["b9j"](3553, gl["c25"]());
  gl["t60"](3553, 0, 6408, 1024, 1024, 0, 6408, 5121, groundTextureImage);
  gl["gbn"](3553);
  gl["t2z"](3553, 10241, 9987);
  gl["t2z"](3553, 10240, 9729);
  gl["e8z"](2929);
  gl["e8z"](2884);
  gl["c70"](1);
  gl["c7a"](1029);
  gl["d4n"](515);
  gl["c5t"](0, 0, 0, 1);
  worldStateUpdate();
  NO_INLINE(initPage)();
  NO_INLINE(player_init)();
  requestAnimationFrame(mainLoop);
};
const initTriangleBuffers = () => {
  let polygon;
  let meshFirstIndex = 0;
  const _triangleIndices = [];
  const _vertexPositions = [];
  const _vertexColors = [];
  const _vertexNormals = [];
  const getVertex = (i) => {
    let { x, y, z } = polygon[i];
    _vertexFloats[0] = x;
    _vertexFloats[1] = y;
    _vertexFloats[2] = z;
    const key = "" + (polygon.$smooth ? _vertexIntsSmooth : _vertexInts);
    let index = _vertexMap.get(key);
    if (index !== void 0) {
      x = index * 3;
      _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[5]) / 2;
      _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[6]) / 2;
      _vertexNormals[x] = (_vertexNormals[x] + _vertexInts[7]) / 2;
    } else {
      _vertexMap.set(key, index = _vertexMap.size);
      _vertexPositions.push(x, y, z, _vertexFloats[3]);
      _vertexColors.push(_vertexInts[4]);
      _vertexNormals.push(_vertexInts[5], _vertexInts[6], _vertexInts[7]);
    }
    return index;
  };
  const _vertexInts = new Int32Array(8);
  const _vertexMap = /* @__PURE__ */ new Map();
  const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 5);
  const _vertexFloats = new Float32Array(_vertexInts.buffer);
  for (const model of allModels) {
    _vertexFloats[3] = model.$modelId === MODEL_ID_LEVER ? -SOULS_COUNT - 1 : model.$kind && model.$modelId;
    for (polygon of model.$polygons) {
      const { x, y, z } = plane_fromPolygon(polygon);
      _vertexInts[4] = polygon.$color | 0;
      _vertexInts[5] = x * 32767;
      _vertexInts[6] = y * 32767;
      _vertexInts[7] = z * 32767;
      for (let i = 2, a = getVertex(0), b = getVertex(1); i < polygon.length; ++i) {
        _triangleIndices.push(a, b, b = getVertex(i));
      }
    }
    model.$polygons = null;
    model.$vertexBegin = meshFirstIndex;
    model.$vertexEnd = meshFirstIndex = _triangleIndices.length;
  }
  gl["b11"](34962, gl["c1b"]());
  gl["b2v"](34962, new Float32Array(_vertexPositions), 35044);
  gl["v7s"](0, 4, 5126, false, 0, 0);
  gl["b11"](34962, gl["c1b"]());
  gl["b2v"](34962, new Int16Array(_vertexNormals), 35044);
  gl["v7s"](1, 3, 5122, true, 0, 0);
  gl["b11"](34962, gl["c1b"]());
  gl["b2v"](34962, new Uint32Array(_vertexColors), 35044);
  gl["v7s"](2, 4, 5121, true, 0, 0);
  gl["b11"](34963, gl["c1b"]());
  gl["b2v"](34963, new Uint16Array(_triangleIndices), 35044);
  gl["e3x"](0);
  gl["e3x"](1);
  gl["e3x"](2);
};
const song_numChannels = 5;
const song_endPattern = 11;
const song_patternLen = 32;
const song_rowLen2 = 3891;
const song_rowLen1 = 4562;
const song_rowLen0 = 5513;
const song_patterns = "000001234556112341234556011111111112011111111112000001111112";
const song_columns = [
  [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
    "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
    "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
    "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
    "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
    "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
  ],
  [
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
    "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
    ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
    "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
    "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
    "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
  ],
  [
    "9(((9(((9(((9(((9(((9(((9(((9",
    "9(((Q(((Q(((Q",
  ],
  [
    "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
    "9(9(9(9(9(999(9(((((Q",
  ],
  [
    "((((Q(((((((Q(((((((Q(((((((Q",
    "Q((Q((Q((Q((Q((Q((((Q",
  ],
];
const song_instruments = [
  [
    69,
    128,
    0,
    143,
    128,
    0,
    0,
    196,
    100,
    36,
    0,
    0,
    149,
    110,
    31,
    47,
    3,
    56,
    2,
    0,
  ],
  [
    100,
    128,
    0,
    201,
    128,
    0,
    0,
    100,
    144,
    35,
    0,
    6,
    135,
    0,
    32,
    147,
    6,
    0,
    6,
    195,
  ],
  [
    255,
    116,
    85,
    255,
    116,
    37,
    14,
    64,
    144,
    73,
    99,
    0,
    136,
    15,
    32,
    0,
    0,
    66,
    6,
    0,
  ],
  [
    0,
    140,
    0,
    0,
    140,
    0,
    81,
    64,
    400,
    47,
    55,
    5,
    239,
    135,
    13,
    176,
    5,
    16,
    4,
    187,
  ],
  [
    221,
    128,
    64,
    210,
    128,
    64,
    255,
    64,
    144,
    73,
    79,
    7,
    195,
    15,
    21,
    20,
    0,
    9,
    3,
    64,
  ],
];
const loadStep = (fn) => {
  h4.innerHTML += ".";
  setTimeout(fn);
};
const getnotefreq = (n) => 0.003959503758 * 2 ** ((n - 256) / 12);
const osc_sin = (value) => /* @__PURE__ */ Math.sin(value * Math.PI * 2);
const osc_square = (value) => value % 1 < 0.5 ? 1 : -1;
const osc_saw = (value) => 2 * (value % 1) - 1;
const osc_tri = (value) => {
  const v2 = value % 1 * 4;
  return v2 < 2 ? v2 - 1 : 3 - v2;
};
const loadSong = (done) => {
  let channelIndex = 0;
  const next = () => {
    let mixIndex = 0;
    const make = (song_rowLen) => {
      let n;
      let t;
      let f;
      let high;
      let filterActive;
      let low = 0;
      let band = 0;
      const noteCache = [];
      const createNote = (note) => {
        let o1t;
        let o2t;
        let c1 = 0;
        let c2 = 0;
        const OSC1_WAVEFORM = channelIndex < 2 ? osc_saw : osc_sin;
        const OSC2_WAVEFORM = channelIndex < 2 ? channelIndex < 1 ? osc_square : osc_tri : osc_sin;
        const noteBuf = new Int32Array(ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE);
        for (let j1 = 0, j2 = 0; j1 < ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE; ++j1, ++j2) {
          let e = 1;
          if (j1 < ENV_ATTACK) {
            e = j1 / ENV_ATTACK;
          } else if (j1 >= ENV_ATTACK + ENV_SUSTAIN) {
            e = (j1 - ENV_ATTACK - ENV_SUSTAIN) / ENV_RELEASE;
            e = (1 - e) * 3 ** (-ENV_EXP_DECAY / 16 * e);
          }
          if (j2 >= 0) {
            j2 -= song_rowLen * 4;
            o1t = getnotefreq(note + OSC1_SEMI);
            o2t = getnotefreq(note + OSC2_SEMI) * (1 + (channelIndex ? 0 : 8e-4 * 9));
          }
          noteBuf[j1] = 80
              * (OSC1_WAVEFORM(c1 += o1t * e ** (OSC1_XENV / 32)) * OSC1_VOL
                + OSC2_WAVEFORM(c2 += o2t * e ** (OSC2_XENV / 32)) * OSC2_VOL
                + (NOISE_VOL ? (/* @__PURE__ */ Math.random() * 2 - 1) * NOISE_VOL : 0))
              * e | 0;
        }
        return noteBuf;
      };
      const chnBuf = new Int32Array(song_rowLen * SONG_WORDS);
      const lfoFreq = 2 ** (LFO_FREQ - 9) / song_rowLen;
      const panFreq = Math.PI * 2 ** (FX_PAN_FREQ - 8) / song_rowLen;
      const dly = FX_DELAY_TIME * song_rowLen & -2;
      for (let p = 0; p <= song_endPattern; ++p) {
        for (let row = 0, cp = +song_patterns[channelIndex * 12 + p]; row < song_patternLen; ++row) {
          const rowStartSample = (p * song_patternLen + row) * song_rowLen;
          for (let col = 0; col < 4; ++col) {
            n = 0;
            if (cp) {
              n = COLUMNS[cp - 1].charCodeAt(row + col * song_patternLen) - 40;
              n += n > 0 ? 106 : 0;
            }
            if (n) {
              const noteBuf = noteCache[n] || (noteCache[n] = createNote(n));
              for (let j = 0, i = rowStartSample * 2; j < noteBuf.length; ++j, i += 2) {
                chnBuf[i] += noteBuf[j];
              }
            }
          }
          for (let j1 = 0, rsample; j1 < song_rowLen; ++j1) {
            let lsample = 0;
            let k = (rowStartSample + j1) * 2;
            rsample = chnBuf[k];
            if (rsample || filterActive) {
              f = FX_FREQ * 0.003079991863530159;
              if (channelIndex === 1 || channelIndex === 4) {
                f *= osc_sin(lfoFreq * k) * LFO_AMT / 512 + 0.5;
              }
              f = 1.5 * /* @__PURE__ */ Math.sin(f);
              low += f * band;
              high = (1 - FX_RESONANCE / 255) * (rsample - band) - low;
              band += f * high;
              rsample = channelIndex === 4 ? band : channelIndex === 3 ? high : low;
              if (!channelIndex) {
                rsample *= 22e-5;
                rsample = rsample < 1 ? rsample > -1 ? osc_sin(rsample / 4) : -1 : 1;
                rsample /= 22e-5;
              }
              rsample *= FX_DRIVE / 32;
              filterActive = rsample * rsample > 1e-5;
              t = /* @__PURE__ */ Math.sin(panFreq * k) * FX_PAN_AMT / 512 + 0.5;
              lsample = rsample * (1 - t);
              rsample *= t;
            }
            if (k >= dly) {
              lsample += chnBuf[k - dly + 1] * FX_DELAY_AMT / 255;
              rsample += chnBuf[k - dly] * FX_DELAY_AMT / 255;
            }
            const mixBufferIndex = mixIndex + k >> 1;
            mixBufferA[mixBufferIndex] += (chnBuf[k] = lsample) / 65536;
            mixBufferB[mixBufferIndex] += (chnBuf[++k] = rsample) / 65536;
          }
        }
      }
      mixIndex += song_rowLen * SONG_WORDS;
    };
    const COLUMNS = song_columns[channelIndex];
    const [
      OSC1_VOL,
      OSC1_SEMI,
      OSC1_XENV,
      OSC2_VOL,
      OSC2_SEMI,
      OSC2_XENV,
      NOISE_VOL,
      ENV_ATTACK,
      ENV_SUSTAIN,
      _ENV_RELEASE,
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
    ] = song_instruments[channelIndex];
    const ENV_RELEASE = _ENV_RELEASE ** 2 * 4;
    make(song_rowLen0);
    make(song_rowLen1);
    make(song_rowLen2);
    loadStep(++channelIndex < song_numChannels ? next : done);
  };
  const audioBuffer = audioContext.createBuffer(2, SONG_TOTAL_WORDS / 2, 44100);
  const mixBufferA = audioBuffer.getChannelData(0);
  const mixBufferB = audioBuffer.getChannelData(1);
  songAudioSource.buffer = audioBuffer;
  songAudioSource.loop = true;
  loadStep(next);
};
const SONG_WORDS = song_patternLen * (song_endPattern + 1) * 2;
const SONG_TOTAL_WORDS = (song_rowLen0 + song_rowLen1 + song_rowLen2) * SONG_WORDS;
loadStep(() => {
  let loadStatus = 0;
  const end = () => {
    if (++loadStatus === 2) {
      startMainLoop(image);
    }
  };
  const songLoaded = () => {
    loadStep(() => {
      initTriangleBuffers();
      loadStep(end);
      loadGame();
    });
    build_life_the_universe_and_everything();
  };
  const image = new Image();
  image.onload = image.onerror = end;
  image.src = groundTextureSvg;
  NO_INLINE(loadSong)(songLoaded);
});
