const index = "";
const groundTextureSvg = `data:image/svg+xml;base64,${/* @__PURE__ */ btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>')}`;
const DEG_TO_RAD = Math.PI / 180;
const identity = new DOMMatrix();
const min = (a, b) => a < b ? a : b;
const max = (a, b) => a > b ? a : b;
const abs = (n) => n < 0 ? -n : n;
const clamp01 = (t) => t < 0 ? 0 : t > 1 ? 1 : t;
const lerp = (from, to, t) => from + (to - from) * clamp01(t);
const lerpneg = (v, t) => {
  v = clamp01(v);
  return lerp(v, 1 - v, t);
};
const angle_wrap_radians = (radians) => /* @__PURE__ */ Math.atan2(/* @__PURE__ */ Math.sin(radians), /* @__PURE__ */ Math.cos(radians));
const angle_wrap_degrees = (degrees) => angle_wrap_radians(degrees * DEG_TO_RAD) / DEG_TO_RAD;
const angle_lerp = (a0, a1, t) => {
  const da = (a1 - a0) % (Math.PI * 2);
  return a0 + (2 * da % (Math.PI * 2) - da) * clamp01(t);
};
const angle_lerp_degrees = (a0, a1, t) => angle_lerp(a0 * DEG_TO_RAD, a1 * DEG_TO_RAD, t) / DEG_TO_RAD;
const interpolate_with_hysteresis = (previous, desired, hysteresis, t) => lerp(previous + /* @__PURE__ */ Math.sign(desired - previous) * max(0, abs(desired - previous) ** 0.9 - hysteresis) * t * 2, desired, t / 7);
const integers_map = (n, fn) => Array.from(/* @__PURE__ */ Array(n), (_, i) => fn(i));
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
  0
];
const vec3_dot = ({ x, y, z }, v) => x * v.x + y * v.y + z * v.z;
const vec3_distance = ({ x, y, z }, b) => {
  x -= b.x;
  y -= b.y;
  z -= b.z;
  return /* @__PURE__ */ Math.sqrt(x * x + y + y + z * z) || 0;
};
const plane_fromPolygon = (polygon) => {
  let x = 0;
  let y = 0;
  let z = 0;
  let b;
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
    w: x * a.x + y * a.y + z * a.z
  };
};
const material = (r, g, b, a = 0) => a * 255 << 24 | b * 255 << 16 | g * 255 << 8 | r * 255;
const polygon_color = (polygon, color, smooth) => {
  polygon.$smooth = smooth;
  polygon.$color = color;
  return polygon;
};
const vec3_transform = ({ x, y, z }, m) => {
  ({ x, y, z } = m.transformPoint({
    x,
    y,
    z
  }));
  return {
    x,
    y,
    z
  };
};
const polygon_transform = (polygon, m, color = polygon.$color) => polygon_color(polygon.map((p) => vec3_transform(p, m)), color, polygon.$smooth);
const polygons_transform = (polygons, m, color) => polygons.map((polygon) => polygon_transform(polygon, m, color));
const polygon_regular = (segments, elongate = 0) => integers_map(segments, (i) => {
  const z = /* @__PURE__ */ Math.cos(Math.PI * 2 * (i / segments));
  return {
    x: /* @__PURE__ */ Math.sin(Math.PI * 2 * (i / segments)),
    y: 0,
    z: abs(z) < 0.01 ? z : z < 0 ? z - elongate : z + elongate
  };
});
const cylinder_sides = (btm, top, smooth) => btm.map((btmi, i, { length }) => polygon_color([
  btmi,
  top[length - i - 1],
  top[length - (i + 1) % length - 1],
  btm[(i + 1) % length]
], btm.$color, smooth));
const cylinder = (segments, smooth, topSize = 0, elongate) => {
  const points = segments.length ? segments : polygon_regular(segments, elongate);
  const top = polygon_transform(points, identity.translate(0, 1).scale3d(topSize > 0 ? topSize : 1));
  const bottom = polygon_transform(points, identity.translate(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse();
  const sides = cylinder_sides(bottom, top, smooth);
  sides.push(bottom, top);
  return sides;
};
const sphere = (slices, stacks = slices, vertexFunc = (x, y) => {
  y *= Math.PI / stacks;
  x *= Math.PI * 2 / slices;
  return {
    x: /* @__PURE__ */ Math.cos(x) * /* @__PURE__ */ Math.sin(y),
    y: /* @__PURE__ */ Math.cos(y),
    z: /* @__PURE__ */ Math.sin(x) * /* @__PURE__ */ Math.sin(y)
  };
}) => {
  const polygons = [];
  for (let i = 0; i < slices; i++)
    {for (let j = 0; j < stacks; j++) {
      const vertex = (x, y) => polygon.push(vertexFunc(x, y, polygon));
      const polygon = polygon_color([], 0, 1);
      vertex(i, j);
      if (j)
        {vertex((i + 1) % slices, j);}
      if (j < stacks - 1)
        {vertex((i + 1) % slices, j + 1 % stacks);}
      vertex(i, j + 1 % stacks);
      polygons.push(polygon);
    }}
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
    if (id < PLANE_EPSILON)
      {bpoints.push(iv);}
    if (id > -PLANE_EPSILON)
      {fpoints.push(iv);}
    if (id > PLANE_EPSILON && jd < -PLANE_EPSILON || id < -PLANE_EPSILON && jd > PLANE_EPSILON) {
      id /= jd - id;
      iv = {
        x: iv.x + (iv.x - jv.x) * id,
        y: iv.y + (iv.y - jv.y) * id,
        z: iv.z + (iv.z - jv.z) * id
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
      $parent: polygon
    },
    $back: bpoints.length > 2 && {
      $polygon: polygon_color(bpoints, $polygon.$color, $polygon.$smooth),
      $flipped,
      $parent: polygon
    }
  };
};
const CSGPolygon_split = (plane, polygon) => {
  let $front;
  let $back;
  let d;
  const { $polygon } = polygon;
  for (let i = 0; i < $polygon.length; ++i) {
    d = vec3_dot(plane, $polygon[i]) - plane.w;
    if (d < -PLANE_EPSILON)
      {$back = polygon;}
    else if (d > PLANE_EPSILON)
      {$front = polygon;}
    if ($back && $front)
      {return NO_INLINE(CSGPolygon_splitSpanning)(plane, polygon);}
  }
  return {
    $front,
    $back
  };
};
const csg_tree_addPolygon = (node, polygon, plane = plane_fromPolygon(polygon.$polygon)) => {
  if (node) {
    const { $front, $back } = CSGPolygon_split(node, polygon);
    if (!$front && !$back)
      {node.$polygons.push(polygon);}
    if ($front)
      {node.$front = csg_tree_addPolygon(node.$front, $front, plane);}
    if ($back)
      {node.$back = csg_tree_addPolygon(node.$back, $back, plane);}
  } else {
    const { x, y, z, w } = plane;
    node = {
      x,
      y,
      z,
      w,
      $polygons: [
        polygon
      ],
      $front: 0,
      $back: 0
    };
  }
  return node;
};
const csg_tree_clipNode = (anode, bnode, polygonPlaneFlipped) => {
  const result = [];
  const recursion = (node, polygon) => {
    let { $front, $back } = CSGPolygon_split(node, polygon);
    if (!$front && !$back) {
      if (polygonPlaneFlipped * vec3_dot(node, bnode) > 0)
        {$front = polygon;}
      else
        {$back = polygon;}
    }
    if ($front) {
      if (node.$front)
        {recursion(node.$front, $front);}
      else
        {result.push($front);}
    }
    if ($back && node.$back)
      {recursion(node.$back, $back);}
  };
  for (const polygon of bnode.$polygons)
    {recursion(anode, polygon);}
  return result;
};
const csg_tree_each = (node, fn) => node && (fn(node), csg_tree_each(node.$front, fn), csg_tree_each(node.$back, fn));
const csg_tree = (n) => n.length ? n.reduce((prev, $polygon) => csg_tree_addPolygon(prev, {
  $polygon,
  $flipped: 0,
  $parent: 0
}), 0) : n;
const csg_tree_flip = (root) => {
  csg_tree_each(root, (node) => {
    const { $front, $back } = node;
    node.$back = $front;
    node.$front = $back;
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    for (const polygon of node.$polygons)
      {polygon.$flipped = !polygon.$flipped;}
  });
  return root;
};
const csg_union = (...inputs) => inputs.reduce((a, b) => {
  const polygonsToAdd = [];
  a = csg_tree(a);
  if (b) {
    b = csg_tree(b);
    csg_tree_each(a, (node) => node.$polygons = csg_tree_clipNode(b, node, 1));
    csg_tree_each(b, (node) => polygonsToAdd.push([
      node,
      csg_tree_clipNode(a, node, -1)
    ]));
    for (const [plane, polygons] of polygonsToAdd)
      {for (const pp of polygons)
        {csg_tree_addPolygon(a, pp, plane);}}
  }
  return a;
});
const csg_subtract = (a, ...b) => csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b));
const csg_polygons = (tree) => {
  const byParent = /* @__PURE__ */ new Map();
  const allPolygons = /* @__PURE__ */ new Map();
  const add = (polygon) => {
    if (polygon.$parent) {
      const found = byParent.get(polygon.$parent);
      if (found) {
        allPolygons.delete(found);
        polygon = add(polygon.$parent);
      } else
        {byParent.set(polygon.$parent, polygon);}
    }
    return polygon;
  };
  csg_tree_each(tree, (node) => {
    for (const polygon of node.$polygons)
      {allPolygons.set(add(polygon), polygon.$flipped);}
  });
  return Array.from(allPolygons, ([{ $polygon }, flipped]) => {
    const polygon = $polygon.map(({ x, y, z }) => ({
      x,
      y,
      z
    }));
    return polygon_color(flipped ? polygon.reverse() : polygon, $polygon.$color, $polygon.$smooth);
  });
};
const GQuad = [
  {
    x: -1,
    z: 1
  },
  {
    x: 1,
    z: 1
  },
  {
    x: 1,
    z: -1
  },
  {
    x: -1,
    z: -1
  }
];
const HORN_STACKS = 15;
cylinder(GQuad);
const GHorn = (() => {
  const matrices = integers_map(HORN_STACKS + 1, (i) => identity.translate(/* @__PURE__ */ Math.sin(i / HORN_STACKS * Math.PI), i / HORN_STACKS).rotate(10 * (i / HORN_STACKS)).scale(1.0001 - i / HORN_STACKS, 0, 1 - i / HORN_STACKS));
  const p = polygon_regular(20);
  return integers_map(HORN_STACKS, (i) => cylinder_sides(polygon_transform(p, matrices[i]).reverse(), polygon_transform(p, matrices[i + 1]), 1)).flat();
})();
let _meshFirstIndex = 0;
let _polygon;
const modelsByModelId = [];
const withEditMatrix = (matrix, fn) => {
  editMatrixStack.push(editMatrixStack.at(-1).multiply(matrix));
  const result = fn();
  editMatrixStack.pop();
  return result;
};
const _triangleIndices = [];
const _vertexPositions = [];
const _vertexNormals = [];
const _vertexColors = [];
const _pendingPolygonsStack = [
  []
];
const _vertexMap = /* @__PURE__ */ new Map();
const _vertexInts = new Int32Array(7);
const getVertex = (i) => {
  let { x, y, z } = _polygon[i];
  _vertexFloats[0] = x;
  _vertexFloats[1] = y;
  _vertexFloats[2] = z;
  const key = `${  _polygon.$smooth ? _vertexIntsSmooth : _vertexInts}`;
  let index2 = _vertexMap.get(key);
  if (index2 !== void 0) {
    x = index2 * 3;
    _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[4]) / 2;
    _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[5]) / 2;
    _vertexNormals[x] = (_vertexNormals[x] + _vertexInts[6]) / 2;
  } else {
    _vertexMap.set(key, index2 = _vertexMap.size);
    _vertexPositions.push(x, y, z);
    _vertexNormals.push(_vertexInts[4], _vertexInts[5], _vertexInts[6]);
    _vertexColors.push(_vertexInts[3]);
  }
  return index2;
};
const meshAdd = (polygons, transform = identity, color) => _pendingPolygonsStack.at(-1).push(...polygons_transform(polygons, editMatrixStack.at(-1).multiply(transform), color));
const meshEnd = () => {
  const pendingPolygons = _pendingPolygonsStack.at(-1);
  for (_polygon of pendingPolygons) {
    const { x, y, z } = plane_fromPolygon(_polygon);
    _vertexInts[3] = _polygon.$color | 0;
    _vertexInts[4] = x * 32767;
    _vertexInts[5] = y * 32767;
    _vertexInts[6] = z * 32767;
    for (let i = 2, a = getVertex(0), b = getVertex(1); i < _polygon.length; ++i)
      {_triangleIndices.push(a, b, b = getVertex(i));}
  }
  pendingPolygons.length = 0;
  const $vertexOffset = _meshFirstIndex;
  return {
    $vertexOffset,
    $vertexCount: (_meshFirstIndex = _triangleIndices.length) - $vertexOffset
  };
};
const newModel = (fn, $modelId = 0) => {
  const model = {
    ...rootModel,
    $parent: currentEditModel,
    $children: [],
    $initialMatrix: editMatrixStack.at(-1),
    $modelId
  };
  editMatrixStack.push(identity);
  _pendingPolygonsStack.push([]);
  currentEditModel.$children.push(model);
  currentEditModel = model;
  const modelMesh = fn(model) || meshEnd();
  modelsByModelId[model.$modelId] = model;
  if (modelMesh && modelMesh.$vertexCount)
    {model.$mesh = modelMesh;}
  currentEditModel = model.$parent;
  editMatrixStack.pop();
  _pendingPolygonsStack.pop();
  return model;
};
const updateModels = (model, parentMatrix = identity) => {
  const update = model._update;
  if (model.$parent && !model.$modelId)
    {model.$modelId = model.$parent.$modelId || 1;}
  model.$finalMatrix = parentMatrix.multiply(model.$initialMatrix);
  if (update) {
    const updateResult = update(model);
    if (updateResult)
      {model.$finalMatrix = model.$finalMatrix.multiply(updateResult);}
  }
  for (const child of model.$children)
    {updateModels(child, model.$finalMatrix);}
};
const rootModel = {
  $children: [],
  $initialMatrix: identity,
  $finalMatrix: identity,
  $modelId: 1,
  $collisions: 1,
  $visible: 1
};
let currentEditModel = rootModel;
const editMatrixStack = [
  identity
];
const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 4);
const _vertexFloats = new Float32Array(_vertexInts.buffer);
const CPlayer = function() {
  let mSong;
  let mLastRow;
  let mCurrentCol;
  let mNumWords;
  let mMixBuf;
  const osc_sin = function(value) {
    return /* @__PURE__ */ Math.sin(value * 6.283184);
  };
  const osc_saw = function(value) {
    return 2 * (value % 1) - 1;
  };
  const osc_square = function(value) {
    return value % 1 < 0.5 ? 1 : -1;
  };
  const osc_tri = function(value) {
    const v2 = value % 1 * 4;
    if (v2 < 2)
      {return v2 - 1;}
    return 3 - v2;
  };
  const getnotefreq = function(n) {
    return 0.003959503758 * 2 ** ((n - 128) / 12);
  };
  const createNote = function(instr, n, rowLen) {
    let c1 = 0;
    let c2 = 0;
    let j;
    let j2;
    let e;
    let rsample;
    let o1t;
    let o2t;
    const osc1 = mOscillators[instr.i[0]];
    const o1vol = instr.i[1];
    const o1xenv = instr.i[3] / 32;
    const osc2 = mOscillators[instr.i[4]];
    const o2vol = instr.i[5];
    const o2xenv = instr.i[8] / 32;
    const noiseVol = instr.i[9];
    const attack = instr.i[10] * instr.i[10] * 4;
    const sustain = instr.i[11] * instr.i[11] * 4;
    const release = instr.i[12] * instr.i[12] * 4;
    const releaseInv = 1 / release;
    const expDecay = -instr.i[13] / 16;
    let arp = instr.i[14];
    const arpInterval = rowLen * 2 ** (2 - instr.i[15]);
    const noteBuf = new Int32Array(attack + sustain + release);
    for (j = 0, j2 = 0; j < attack + sustain + release; j++, j2++) {
      if (j2 >= 0) {
        arp = arp >> 8 | (arp & 255) << 4;
        j2 -= arpInterval;
        o1t = getnotefreq(n + (arp & 15) + instr.i[2] - 128);
        o2t = getnotefreq(n + (arp & 15) + instr.i[6] - 128) * (1 + 8e-4 * instr.i[7]);
      }
      e = 1;
      if (j < attack)
        {e = j / attack;}
      else if (j >= attack + sustain) {
        e = (j - attack - sustain) * releaseInv;
        e = (1 - e) * 3 ** (expDecay * e);
      }
      c1 += o1t * e ** o1xenv;
      rsample = osc1(c1) * o1vol;
      c2 += o2t * e ** o2xenv;
      rsample += osc2(c2) * o2vol;
      if (noiseVol)
        {rsample += (2 * /* @__PURE__ */ Math.random() - 1) * noiseVol;}
      noteBuf[j] = 80 * rsample * e | 0;
    }
    return noteBuf;
  };
  var mOscillators = [
    osc_sin,
    osc_square,
    osc_saw,
    osc_tri
  ];
  this.init = function(song2) {
    mSong = song2;
    mLastRow = song2.endPattern;
    mCurrentCol = 0;
    mNumWords = song2.rowLen * song2.patternLen * (mLastRow + 1) * 2;
    mMixBuf = new Int32Array(mNumWords);
  };
  this.generate = function() {
    let low = 0;
    let band = 0;
    let filterActive = false;
    let noteCache = [];
    let i;
    let j;
    let p;
    let row;
    let col;
    let n;
    let cp;
    let k;
    let t;
    let rsample;
    let rowStartSample;
    let f;
    let high;
    let lsample;
    console.log("GENERATE");
    const chnBuf = new Int32Array(mNumWords);
    const instr = mSong.songData[mCurrentCol];
    const rowLen = mSong.rowLen;
    const patternLen = mSong.patternLen;
    for (p = 0; p <= mLastRow; ++p) {
      cp = instr.p[p];
      for (row = 0; row < patternLen; ++row) {
        const cmdNo = cp ? instr.c[cp - 1].f[row] : 0;
        if (cmdNo) {
          instr.i[cmdNo - 1] = instr.c[cp - 1].f[row + patternLen] || 0;
          if (cmdNo < 17)
            {noteCache = [];}
        }
        const oscLFO = mOscillators[instr.i[16]];
        const lfoAmt = instr.i[17] / 512;
        const lfoFreq = 2 ** (instr.i[18] - 9) / rowLen;
        const fxLFO = instr.i[19];
        const fxFilter = instr.i[20];
        const fxFreq = instr.i[21] * 135.82764118168 / 44100;
        const q = 1 - instr.i[22] / 255;
        const dist = instr.i[23] * 1e-5;
        const drive = instr.i[24] / 32;
        const panAmt = instr.i[25] / 512;
        const panFreq = 6.283184 * 2 ** (instr.i[26] - 9) / rowLen;
        const dlyAmt = instr.i[27] / 255;
        const dly = instr.i[28] * rowLen & -2;
        rowStartSample = (p * patternLen + row) * rowLen;
        for (col = 0; col < 4; ++col) {
          n = cp ? instr.c[cp - 1].n[row + col * patternLen] : 0;
          if (n) {
            if (!noteCache[n])
              {noteCache[n] = createNote(instr, n, rowLen);}
            const noteBuf = noteCache[n];
            for (j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2)
              {chnBuf[i] += noteBuf[j];}
          }
        }
        for (j = 0; j < rowLen; j++) {
          k = (rowStartSample + j) * 2;
          rsample = chnBuf[k];
          if (rsample || filterActive) {
            f = fxFreq;
            if (fxLFO)
              {f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;}
            f = 1.5 * /* @__PURE__ */ Math.sin(f);
            low += f * band;
            high = q * (rsample - band) - low;
            band += f * high;
            rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;
            if (dist) {
              rsample *= dist;
              rsample = rsample < 1 ? rsample > -1 ? osc_sin(rsample * 0.25) : -1 : 1;
              rsample /= dist;
            }
            rsample *= drive;
            filterActive = rsample * rsample > 1e-5;
            t = /* @__PURE__ */ Math.sin(panFreq * k) * panAmt + 0.5;
            lsample = rsample * (1 - t);
            rsample *= t;
          } else
            {lsample = 0;}
          if (k >= dly) {
            lsample += chnBuf[k - dly + 1] * dlyAmt;
            rsample += chnBuf[k - dly] * dlyAmt;
          }
          chnBuf[k] = lsample | 0;
          chnBuf[k + 1] = rsample | 0;
          mMixBuf[k] += lsample | 0;
          mMixBuf[k + 1] += rsample | 0;
        }
      }
    }
    mCurrentCol++;
    return mCurrentCol / mSong.numChannels;
  };
  this.createAudioBuffer = function(context) {
    console.log("CPLAYER createAudioBuffer");
    const buffer = context.c1b(2, mNumWords / 2, 44100);
    for (let i = 0; i < 2; i++) {
      const data = buffer.getChannelData(i);
      for (let j = i; j < mNumWords; j += 2)
        {data[j >> 1] = mMixBuf[j] / 65536;}
    }
    return buffer;
  };
  this.createWave = function() {
    const headerLen = 44;
    const l1 = headerLen + mNumWords * 2 - 8;
    const l2 = l1 - 36;
    const wave = new Uint8Array(headerLen + mNumWords * 2);
    wave.set([
      82,
      73,
      70,
      70,
      l1 & 255,
      l1 >> 8 & 255,
      l1 >> 16 & 255,
      l1 >> 24 & 255,
      87,
      65,
      86,
      69,
      102,
      109,
      116,
      32,
      16,
      0,
      0,
      0,
      1,
      0,
      2,
      0,
      68,
      172,
      0,
      0,
      16,
      177,
      2,
      0,
      4,
      0,
      16,
      0,
      100,
      97,
      116,
      97,
      l2 & 255,
      l2 >> 8 & 255,
      l2 >> 16 & 255,
      l2 >> 24 & 255
    ]);
    for (let i = 0, idx = headerLen; i < mNumWords; ++i) {
      let y = mMixBuf[i];
      y = y < -32767 ? -32767 : y > 32767 ? 32767 : y;
      wave[idx++] = y & 255;
      wave[idx++] = y >> 8 & 255;
    }
    return wave;
  };
  this.getData = function(t, n) {
    const i = 2 * /* @__PURE__ */ Math.floor(t * 44100);
    const d = new Array(n);
    for (let j = 0; j < 2 * n; j += 1) {
      const k = i + j;
      d[j] = t > 0 && k < mMixBuf.length ? mMixBuf[k] / 32768 : 0;
    }
    return d;
  };
};
const song = {
  songData: [
    {
      i: [
        2,
        69,
        128,
        0,
        1,
        143,
        128,
        9,
        0,
        0,
        7,
        5,
        36,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        149,
        110,
        22,
        31,
        47,
        3,
        56,
        2
      ],
      p: [
        ,
        ,
        ,
        ,
        ,
        1,
        2,
        3,
        4,
        5,
        5,
        6
      ],
      c: [
        {
          n: [
            ,
            112,
            115,
            119,
            124,
            115,
            119,
            124,
            127,
            119,
            124,
            127,
            131,
            124,
            127,
            131,
            136,
            127,
            131,
            136,
            139,
            136,
            139,
            143,
            148,
            143,
            148,
            151,
            155,
            ,
            155,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            143,
            ,
            143,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            148,
            ,
            148,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            151,
            ,
            151
          ],
          f: []
        },
        {
          n: [
            ,
            114,
            119,
            123,
            126,
            119,
            123,
            126,
            131,
            123,
            126,
            131,
            135,
            126,
            131,
            135,
            138,
            131,
            135,
            138,
            143,
            135,
            138,
            143,
            147,
            143,
            147,
            150,
            155,
            ,
            155
          ],
          f: []
        },
        {
          n: [
            ,
            119,
            124,
            128,
            131,
            124,
            128,
            131,
            136,
            128,
            131,
            136,
            140,
            131,
            136,
            140,
            143,
            136,
            140,
            143,
            148,
            140,
            143,
            148,
            152,
            143,
            148,
            152,
            155,
            ,
            155
          ],
          f: []
        },
        {
          n: [
            ,
            124,
            129,
            132,
            136,
            136,
            141,
            144,
            148,
            148,
            153,
            156,
            160,
            ,
            160,
            ,
            ,
            124,
            127,
            130,
            136,
            136,
            139,
            142,
            148,
            148,
            151,
            154,
            160,
            ,
            160
          ],
          f: []
        },
        {
          n: [
            147,
            ,
            143,
            ,
            143,
            ,
            145,
            ,
            147,
            ,
            148,
            ,
            150,
            ,
            147,
            ,
            150,
            ,
            148,
            ,
            153,
            ,
            151,
            ,
            150,
            ,
            148,
            ,
            147,
            ,
            144,
            ,
            153,
            ,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            154,
            159
          ],
          f: []
        },
        {
          n: [
            147,
            144,
            ,
            143,
            ,
            144,
            ,
            143,
            ,
            144,
            ,
            143,
            ,
            144,
            ,
            143,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            153,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            155,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            159
          ],
          f: []
        }
      ]
    },
    {
      i: [
        2,
        100,
        128,
        0,
        3,
        201,
        128,
        0,
        0,
        0,
        5,
        6,
        35,
        0,
        0,
        0,
        0,
        195,
        6,
        1,
        2,
        135,
        0,
        0,
        32,
        147,
        6,
        0,
        6
      ],
      p: [
        1,
        1,
        2,
        3,
        4,
        1,
        2,
        3,
        4,
        5,
        5,
        6
      ],
      c: [
        {
          n: [
            112,
            ,
            119,
            ,
            112,
            ,
            119,
            ,
            112,
            ,
            119,
            ,
            112,
            ,
            119,
            ,
            112,
            ,
            119,
            ,
            112,
            ,
            119,
            ,
            112,
            ,
            119,
            ,
            112,
            ,
            119
          ],
          f: []
        },
        {
          n: [
            111,
            ,
            119,
            ,
            111,
            ,
            119,
            ,
            111,
            ,
            119,
            ,
            111,
            ,
            119,
            ,
            111,
            ,
            119,
            ,
            111,
            ,
            119,
            ,
            111,
            ,
            119,
            ,
            111,
            ,
            119
          ],
          f: []
        },
        {
          n: [
            110,
            ,
            119,
            ,
            110,
            ,
            119,
            ,
            110,
            ,
            119,
            ,
            110,
            ,
            119,
            ,
            110,
            ,
            119,
            ,
            110,
            ,
            119,
            ,
            110,
            ,
            119,
            ,
            110,
            ,
            119
          ],
          f: []
        },
        {
          n: [
            108,
            ,
            120,
            ,
            108,
            ,
            120,
            ,
            108,
            ,
            120,
            ,
            108,
            ,
            120,
            ,
            108,
            ,
            120,
            ,
            108,
            ,
            120,
            ,
            108,
            ,
            120,
            ,
            108,
            ,
            120
          ],
          f: []
        },
        {
          n: [
            119,
            ,
            135,
            ,
            135,
            ,
            136,
            ,
            138,
            ,
            139,
            ,
            141,
            ,
            138,
            ,
            141,
            ,
            139,
            ,
            144,
            ,
            143,
            ,
            141,
            ,
            139,
            ,
            138,
            ,
            136,
            ,
            131,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            119,
            ,
            ,
            ,
            119,
            ,
            ,
            ,
            119,
            ,
            ,
            ,
            119,
            ,
            ,
            ,
            119,
            ,
            ,
            ,
            119,
            ,
            ,
            ,
            119,
            ,
            ,
            ,
            119
          ],
          f: []
        },
        {
          n: [
            119,
            ,
            120,
            ,
            119,
            ,
            120,
            ,
            119,
            ,
            120,
            ,
            119,
            ,
            120,
            ,
            119,
            ,
            ,
            ,
            107,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            131,
            ,
            132,
            ,
            131,
            ,
            132,
            ,
            131,
            ,
            132,
            ,
            131,
            ,
            132,
            ,
            131,
            ,
            ,
            ,
            119
          ],
          f: []
        }
      ]
    },
    {
      i: [
        0,
        255,
        116,
        85,
        0,
        255,
        116,
        0,
        37,
        14,
        4,
        6,
        73,
        99,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        136,
        15,
        0,
        32,
        0,
        0,
        66,
        6
      ],
      p: [
        ,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      c: [
        {
          n: [
            123,
            ,
            ,
            ,
            123,
            ,
            ,
            ,
            123,
            ,
            ,
            ,
            123,
            ,
            ,
            ,
            123,
            ,
            ,
            ,
            123,
            ,
            ,
            ,
            123,
            ,
            ,
            ,
            123
          ],
          f: []
        },
        {
          n: [
            123,
            ,
            ,
            ,
            147,
            ,
            ,
            ,
            147,
            ,
            ,
            ,
            147
          ],
          f: []
        }
      ]
    },
    {
      i: [
        0,
        0,
        140,
        0,
        0,
        0,
        140,
        0,
        0,
        81,
        4,
        10,
        47,
        55,
        0,
        0,
        0,
        187,
        5,
        0,
        1,
        239,
        135,
        0,
        13,
        176,
        5,
        16,
        4
      ],
      p: [
        ,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      c: [
        {
          n: [
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            123,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            123,
            123,
            ,
            123,
            ,
            123
          ],
          f: []
        },
        {
          n: [
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            ,
            123,
            123,
            123,
            ,
            123,
            ,
            ,
            ,
            ,
            ,
            147
          ],
          f: []
        }
      ]
    },
    {
      i: [
        0,
        221,
        128,
        64,
        0,
        210,
        128,
        0,
        64,
        255,
        4,
        6,
        73,
        79,
        0,
        0,
        0,
        64,
        7,
        1,
        3,
        195,
        15,
        0,
        21,
        20,
        0,
        9,
        3
      ],
      p: [
        ,
        ,
        ,
        ,
        ,
        1,
        1,
        1,
        1,
        1,
        1,
        2
      ],
      c: [
        {
          n: [
            ,
            ,
            ,
            ,
            147,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            147,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            147,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            147
          ],
          f: []
        },
        {
          n: [
            147,
            ,
            ,
            147,
            ,
            ,
            147,
            ,
            ,
            147,
            ,
            ,
            147,
            ,
            ,
            147,
            ,
            ,
            ,
            ,
            147
          ],
          f: []
        }
      ]
    }
  ],
  rowLen: 3891,
  patternLen: 32,
  endPattern: 11,
  numChannels: 5
};
const makePlaye = () => {
  console.log("SHOULD PLAY");
  const audioCtx = new window.AudioContext();
  const player = new CPlayer();
  player.init(song);
  while (player.generate() < 1)
    {;}
  const audioBuffer = player.createAudioBuffer(audioCtx);
  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioCtx.destination);
  source.start();
};
let mouse_movementX = 0;
let mouse_movementY = 0;
let mainMenuVisible;
let player_first_person;
const KEY_LEFT = 0;
const KEY_FRONT = 1;
const KEY_RIGHT = 2;
const KEY_BACK = 3;
const KEY_INTERACT = 5;
const keyboard_downKeys = [];
const input_frameReset = () => keyboard_downKeys[KEY_INTERACT] = mouse_movementX = mouse_movementY = 0;
const setMainMenuVisible = (value) => {
  if (mainMenuVisible !== value) {
    mainMenuVisible = value;
    if (mainMenuVisible)
      {document.exitPointerLock();}
    document.body.className = value ? "l m" : "l";
  }
};
const initPage = () => {
  const handleResize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    keyboard_downKeys.length = mouse_movementX = mouse_movementY = 0;
  };
  b1.onclick = () => {
    makePlaye();
    setMainMenuVisible(false);
  };
  b2.onclick = () => {
    hC.requestPointerLock();
  };
  b3.onclick = () => {
    if (confirm("Delete saved game and restart?")) {
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
      location.reload();
    }
  };
  oncontextmenu = () => false;
  onresize = handleResize;
  onblur = handleResize;
  onkeydown = onkeyup = ({ code: code2, target, type, repeat }) => {
    if (!repeat) {
      if (type[5] && (code2 === "Escape" || code2 === "Enter" && mainMenuVisible))
        {setMainMenuVisible(!mainMenuVisible);}
      else
        {keyboard_downKeys[keyMap[code2]] = type[5] ? target === document.body : 0;}
    }
  };
  onmousemove = ({ buttons, movementX, movementY }) => {
    if (document.pointerLockElement || false) {
      mouse_movementX += movementX;
      mouse_movementY += movementY;
    }
  };
  document.onvisibilitychange = () => document.hidden && setMainMenuVisible(true);
  document.onpointerlockchange = () => {
    player_first_person = !!document.pointerLockElement;
    if (player_first_person)
      {setMainMenuVisible(false);}
  };
  loadGame();
  handleResize();
  setMainMenuVisible(true);
};
const keyMap = {
  "KeyA": KEY_LEFT,
  "ArrowLeft": KEY_LEFT,
  "KeyW": KEY_FRONT,
  "ArrowUp": KEY_FRONT,
  "KeyD": KEY_RIGHT,
  "ArrowRight": KEY_RIGHT,
  "KeyS": KEY_BACK,
  "ArrowDown": KEY_BACK,
  "KeyE": KEY_INTERACT,
  "Space": KEY_INTERACT,
  "Enter": KEY_INTERACT
};
let absoluteTime = 0;
let gameTime = 0;
let gameTimeDelta = 0.01;
let player_last_pulled_lever = 0;
let rotatingPlatform1Rotation = 0;
let rotatingPlatform2Rotation = 0;
let rotatingHexCorridorRotation = 0;
let boatLerp = 0;
let _globalTime;
const GAME_TIME_MAX_DELTA_TIME = 0.0666;
const lerpDamp = (from, to, speed) => lerp(from, to, 1 - /* @__PURE__ */ Math.exp(-speed * gameTimeDelta));
const gameTimeUpdate = (time) => {
  const dt = (time - (_globalTime || time)) / 1e3;
  gameTimeDelta = mainMenuVisible ? 0 : min(GAME_TIME_MAX_DELTA_TIME, dt);
  gameTime += gameTimeDelta;
  absoluteTime += dt;
  _globalTime = time;
};
const LOCAL_STORAGE_SAVED_GAME_KEY = "s66622";
const getItemValue = ({ $value }) => $value;
const levers = [];
const souls = [];
const PLAYER_MODEL_ID = 2;
const player_position_initial = {
  x: 0,
  y: 10,
  z: -27
};
const worldStateUpdate = () => {
  const shouldRotatePlatforms = lerpneg(levers[11].$lerpValue, levers[12].$lerpValue);
  rotatingHexCorridorRotation = lerp(lerpDamp(rotatingHexCorridorRotation, 0, 1), angle_wrap_degrees(rotatingHexCorridorRotation + gameTimeDelta * 60), levers[4].$lerpValue - levers[5].$lerpValue2);
  rotatingPlatform1Rotation = lerp(lerpDamp(rotatingPlatform1Rotation, 0, 5), angle_wrap_degrees(rotatingPlatform1Rotation + gameTimeDelta * 56), shouldRotatePlatforms);
  rotatingPlatform2Rotation = lerp(lerpDamp(rotatingPlatform2Rotation, 0, 4), angle_wrap_degrees(rotatingPlatform2Rotation + gameTimeDelta * 48), shouldRotatePlatforms);
  boatLerp = lerpDamp(boatLerp, levers[8].$lerpValue2, 0.2 + 0.3 * abs(levers[8].$lerpValue2 * 2 - 1));
};
const updateCollectedSoulsCounter = () => {
  hS.innerText = ` ${  [
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
    "XIII"
  ][souls.reduce((acc, cur) => acc + cur.$value, 0)]}`;
};
const saveGame = () => {
  updateCollectedSoulsCounter();
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
    666,
    levers.map(getItemValue),
    souls.map(getItemValue),
    player_last_pulled_lever,
    gameTime,
    boatLerp
  ]);
};
const loadGame = () => {
  try {
    const [header, savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedBoatLerp] = JSON.parse(localStorage[LOCAL_STORAGE_SAVED_GAME_KEY]);
    if (header === 666) {
      levers.map((lever, index2) => lever.$lerpValue = lever.$lerpValue2 = lever.$value = savedLevers[index2] | 0);
      souls.map((soul, index2) => {
        soul.$value = savedSouls[index2] | 0;
      });
      player_last_pulled_lever = savedLastPulledLever | 0;
      gameTime = savedGameTime | 0;
      boatLerp = savedBoatLerp | 0;
    }
  } catch (e) {
  }
  updateCollectedSoulsCounter();
};
const onPlayerPullLever = (leverIndex) => {
  player_last_pulled_lever = leverIndex;
  saveGame();
};
const onSoulCollected = () => {
  saveGame();
};
const player_position_global = {
  ...player_position_initial
};
const player_position_final = {
  ...player_position_initial
};
let playerLegsModels;
const LEVER_SENSITIVITY_RADIUS = 2.7;
const SOUL_SENSITIVITY_RADIUS = 1.1;
const newLever = () => {
  newModel(($model) => {
    const lever = {
      $value: 0,
      $lerpValue: 0,
      $lerpValue2: 0,
      $model
    };
    const index2 = levers.push(lever) - 1;
    $model._update = () => {
      const matrix = $model.$finalMatrix;
      lever.$matrix = matrix;
      if (keyboard_downKeys[KEY_INTERACT] && vec3_distance(matrix.transformPoint(), player_position_final) < LEVER_SENSITIVITY_RADIUS) {
        const { $value: value2, $lerpValue: lerpValue } = lever;
        if (lerpValue < 0.3 || lerpValue > 0.7) {
          lever.$value = value2 ? 0 : 1;
          onPlayerPullLever(index2);
        }
      }
      const { $value: value, $lerpValue, $lerpValue2 } = lever;
      lever.$lerpValue = lerpDamp($lerpValue, value, 4);
      lever.$lerpValue2 = lerpDamp($lerpValue2, value, 1);
      $model.$mesh = leverMeshes[$lerpValue > 0.5 ? 1 : 0];
      return identity.rotate(lever.$lerpValue * 60 - 30, 0).translateSelf(0, 1, 0);
    };
  });
  meshAdd(cylinder(5), identity.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), identity.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(GQuad), identity.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};
const GHOST_SLICES = 100;
const GHOST_STACKS = 30;
const newSoul = (transform, walkingPath) => {
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
      $value: 0
    };
    souls.push(soul);
    const circles = walkingPath.map(([x, z, w], i) => ({
      x,
      z,
      w,
      i
    }));
    let circle = circles[0];
    let targetX = circles[0].x;
    let targetZ = circles[0].z;
    let soulX = targetX;
    let soulZ = targetZ;
    newModel((model) => {
      model.$collisions = 0;
      model._update = () => {
        let contextualVelocity = 1;
        let isInside;
        model.$visible = 1 - soul.$value;
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
            velocity = max(1, velocity / (1 + /* @__PURE__ */ Math.random()));
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
        velocity = lerpDamp(velocity, 3 + (1 - contextualVelocity) * 6, 3 + contextualVelocity);
        targetX = lerpDamp(targetX, targetX + dirX, velocity);
        targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity);
        soulX = lerpDamp(soulX, targetX, velocity);
        soulZ = lerpDamp(soulZ, targetZ, velocity);
        lookAngle = angle_lerp_degrees(lookAngle, /* @__PURE__ */ Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180, 3 * gameTimeDelta);
        prevX = soulX;
        prevZ = soulZ;
        const animationMatrix = identity.translate(soulX, 0, soulZ).rotateSelf(0, lookAngle).skewXSelf(/* @__PURE__ */ Math.sin(gameTime * 2) * 7).skewYSelf(/* @__PURE__ */ Math.sin(gameTime * 1.4) * 7);
        const soulPos = model.$finalMatrix.multiply(animationMatrix).transformPoint();
        if (!soul.$value && vec3_distance(soulPos, player_position_final) < SOUL_SENSITIVITY_RADIUS) {
          soul.$value = 1;
          onSoulCollected();
        }
        return animationMatrix;
      };
      return soulMesh;
    });
  });
};
meshAdd([
  GQuad.slice(1)
], identity.translate(-2).scale3d(3).rotate(90, 0));
meshEnd();
const leverMeshes = [
  material(1, 0.5, 0.2),
  material(0.7, 1, 0.2)
].map((handleMaterial) => {
  meshAdd(cylinder(6, 1), identity.scale(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5));
  meshAdd(cylinder(8), identity.translate(0, 1, 0).scale(0.21, 0.3, 0.21), handleMaterial);
  meshAdd(cylinder(3), identity.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2));
  return meshEnd();
});
const playerModel = newModel((model) => {
  model.$collisions = 0;
  playerLegsModels = [
    -0.3,
    0.3
  ].map((x) => newModel(() => {
    meshAdd(cylinder(10, 1), identity.translate(x, -0.8, 0).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
  }));
  [
    0,
    180
  ].map((r) => meshAdd(GHorn, identity.rotate(0, r).translate(0.2, 1.32, 0).rotate(0, 0, -30).scale(0.2, 0.6, 0.2), material(1, 1, 0.8)));
  meshAdd(sphere(30), identity.translate(0, 1, 0).scale(0.5, 0.5, 0.5), material(1, 0.3, 0.4));
  const eye = polygons_transform(csg_polygons(csg_subtract(cylinder(15, 1), polygons_transform(cylinder(GQuad), identity.translate(0, 0, 1).scale(2, 2, 0.5)))), identity.rotate(-90, 0).scale(0.1, 0.05, 0.1), material(0.3, 0.3, 0.3));
  [
    -1,
    1
  ].map((i) => meshAdd(eye, identity.translate(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20)));
  meshAdd(cylinder(GQuad), identity.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));
  meshAdd(sphere(30), identity.scale(0.7, 0.8, 0.55), material(1, 0.3, 0.4));
}, PLAYER_MODEL_ID);
meshAdd(sphere(GHOST_SLICES, GHOST_STACKS, (a, b, polygon) => {
  const am = a / GHOST_SLICES;
  const bm = b / GHOST_STACKS;
  const theta = am * Math.PI * 2;
  const phixz = bm ** 0.6 * Math.PI / 2;
  const osc = bm * bm * /* @__PURE__ */ Math.sin(am * Math.PI * 14) / 4;
  if (b === GHOST_STACKS - 1) {
    polygon.$smooth = 0;
    return {
      x: 0,
      y: -0.5,
      z: 0
    };
  }
  return {
    x: /* @__PURE__ */ Math.cos(theta) * /* @__PURE__ */ Math.sin(phixz),
    y: /* @__PURE__ */ Math.cos(bm * Math.PI) - bm - osc,
    z: /* @__PURE__ */ Math.sin(theta) * /* @__PURE__ */ Math.sin(phixz) + /* @__PURE__ */ Math.sin(osc * Math.PI * 2) / 4
  };
}), identity.scale(0.7, 0.7, 0.7), material(1, 1, 1));
[
  -0.16,
  0.16
].map((x) => meshAdd(sphere(15), identity.translate(x, 0.4, -0.36).scale3d(0.09)));
const soulMesh = meshEnd();
const buildWorld = () => {
  let _modelIdCounter = PLAYER_MODEL_ID + 1;
  const bigArc = csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.translate(0, -8).scale(6, 15, 2.2)), polygons_transform(cylinder(GQuad), identity.translate(0, -14.1, 0).scale(4, 13, 4)), polygons_transform(cylinder(30, 1), identity.translate(0, -1).rotate(90, 0, 90).scale3d(4))));
  integers_map(7, (i) => meshAdd(cylinder(6, 1), identity.translate(4 * (i / 6 - 0.5), 3).scale(0.2, 3, 0.2), material(0.3, 0.3, 0.38)));
  const entranceBarsMesh = meshEnd();
  newModel(() => {
    newSoul(identity.translate(0, 3, 10), [
      [
        0,
        0,
        7
      ]
    ]);
    GQuad.map(({ x, z }) => {
      meshAdd(cylinder(6), identity.translate(x * 3, 3, z * 15).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4));
    });
    [
      -23,
      22
    ].map((z) => {
      meshAdd(cylinder(GQuad), identity.translate(0, 0, z).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2));
    });
    [
      -15,
      15
    ].map((z, i) => {
      meshAdd(cylinder(GQuad), identity.translate(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4));
      meshAdd(cylinder(GQuad), identity.translate(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3));
      withEditMatrix(identity.translate(0, 0, z), () => newModel((model) => {
        model._update = () => identity.translate(0, -levers[i].$lerpValue * 4.7);
        return entranceBarsMesh;
      }));
    });
    integers_map(5, (i) => integers_map(2, (j) => meshAdd(GHorn, identity.translate((j - 0.5) * 18.5, 0, i * 4.8 - 9.5).rotate(0, 180 - j * 180).scale(1.2, 10, 1.2), material(1, 1, 0.8, 0.2))));
    meshAdd(cylinder(GQuad), identity.translate(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2));
    meshAdd(cylinder(5), identity.translate(-5.4, 0.3, -20).scale(3, 0.5, 3).rotate(0, -90), material(0.75, 0.75, 0.75, 0.2));
    withEditMatrix(identity.translate(-5.4, 1.2, -20).rotate(0, -90), newLever);
    meshAdd(cylinder(GQuad), identity.rotate(0, 60, 0).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5), material(0.8, 0.2, 0.2, 0.5));
    meshAdd(csg_polygons(csg_subtract(csg_union(polygons_transform(cylinder(6, 0, 0, 0.3), identity.translate(8, -3, -4).scale(13, 1, 13), material(0.7, 0.7, 0.7, 0.2)), polygons_transform(cylinder(6), identity.translate(0, -8).scale(9, 8, 8), material(0.4, 0.2, 0.5, 0.5)), polygons_transform(cylinder(6, 0, 0, 0.3), identity.translate(0, -0.92).scale(13, 2, 13), material(0.8, 0.8, 0.8, 0.2))), polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)), polygons_transform(cylinder(5, 0, 1.5), identity.translate(0, 1, 0).scale(4.5, 0.3, 4.5), material(0.7, 0.5, 0.9, 0.2)), polygons_transform(cylinder(GQuad), identity.rotate(0, 60).translate(14, 0.7, -1).rotate(0, 0, -35).scale(2, 2, 2), material(0.5, 0.5, 0.5, 0.5)), polygons_transform(cylinder(6), identity.translate(15, -1.5, 4).scale(3.5, 1, 3.5), material(0.5, 0.5, 0.5, 0.5)))));
    newModel((model) => {
      withEditMatrix(identity.translate(0, 1.2), newLever);
      model._update = () => {
        model.$visible = levers[2].$lerpValue > 0.01;
        return identity.translate(0, (/* @__PURE__ */ Math.cos(gameTime * 1.5) * 5 + 2) * levers[2].$lerpValue2 * (1 - levers[1].$lerpValue) + (1 - levers[2].$lerpValue) * -15, 0);
      };
      meshAdd(cylinder(5), identity.translate(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3));
    }, ++_modelIdCounter);
    withEditMatrix(identity.translate(15, -2, 4), newLever);
    withEditMatrix(identity.translate(0, 0, 75), () => {
      const getOscillationAmount = () => min(levers[1].$lerpValue2, 1 - levers[3].$lerpValue2);
      const blackPlatform = (oscillation, amplitude) => newModel((model) => {
        model._update = () => identity.translate(getOscillationAmount() * /* @__PURE__ */ Math.sin(oscillation + gameTime / 1.5) * amplitude);
        GQuad.map(({ x, z }) => {
          meshAdd(cylinder(11, 1), identity.translate(x * 4, 4, z * 4 - 40).scale(0.8, 3, 0.8), material(0.5, 0.3, 0.7, 0.6));
          meshAdd(cylinder(GQuad), identity.translate(x * 4, 7, z * 4 - 40).scale(1, 0.3, 1), material(0.5, 0.5, 0.5, 0.3));
        });
        meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.translate(0, 0, -40).scale(5, 1, 5), material(0.8, 0.8, 0.8, 0.3)), ...[
          -1,
          1
        ].map((i) => polygons_transform(cylinder(GQuad), identity.translate(5 * i, 0.2, -40).rotate(0, 0, i * -30).scale(4, 1, 2), material(0.8, 0.8, 0.8, 0.3))))));
        meshAdd(cylinder(GQuad), identity.translate(0, -3, -40).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
      }, ++_modelIdCounter);
      const level3Oscillation = () => clamp01(1 - getOscillationAmount() * 5) * lerpneg(levers[3].$lerpValue, levers[4].$lerpValue);
      blackPlatform(0, 12);
      withEditMatrix(identity.translate(0, 0, 20), () => blackPlatform(5, 8.2));
      newModel((model) => {
        model._update = () => identity.translate(getOscillationAmount() * /* @__PURE__ */ Math.sin(gameTime / 1.5 + 2) * 12, 0);
        meshAdd(csg_polygons(csg_subtract(csg_union(polygons_transform(cylinder(GQuad), identity.translate(0, 0, -30).scale(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)), polygons_transform(cylinder(6), identity.translate(0, 0, -30).scale(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(0, -2, -30).scale(2, 3.2, 1.9), material(0.3, 0.8, 0.5, 0.5)), polygons_transform(cylinder(30, 1, 0, 4), identity.translate(0, 0, -30).scale(1, 1, 1.5).rotate(0, 90), material(0.9, 0.9, 0.9, 0.2))), polygons_transform(cylinder(GQuad), identity.translate(0, 0, -30).scale(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6)))));
      }, ++_modelIdCounter);
      newModel((model) => {
        model._update = () => identity.translate((1 - getOscillationAmount()) * 9.8);
        meshAdd(cylinder(3), identity.translate(-23, -1.6, -19.2).scale(5, 0.6, 8.3), material(0.3, 0.6, 0.6, 0.2));
        meshAdd(cylinder(GQuad), identity.translate(-23, -3, -20).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3));
        withEditMatrix(identity.translate(-23, -0.5, -14.5), newLever);
      }, ++_modelIdCounter);
      meshAdd(cylinder(GQuad), identity.translate(-21.1 + 2.45, -3, -20).scale(2.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
      newModel((model) => {
        model._update = () => {
          const osc = level3Oscillation();
          return identity.translate(0, osc * /* @__PURE__ */ Math.sin(gameTime * 1.5) * 4);
        };
        meshAdd(cylinder(GQuad), identity.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
        meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.scale(3, 1.4, 2.7)), polygons_transform(cylinder(GQuad), identity.scale(1.2, 8, 1.2)))), identity.translate(-33, -3, -20), material(0.9, 0.9, 0.9, 0.2));
      }, ++_modelIdCounter);
      newModel((model) => {
        model._update = () => identity.translate(0, 0, level3Oscillation() * /* @__PURE__ */ Math.sin(gameTime) * 11);
        meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.translate(-27, -3, -20).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(-27, -3, -20).scale(1, 3, 1), material(0.9, 0.9, 0.9, 0.2)))));
        meshAdd(cylinder(GQuad), identity.translate(-39, -3, -20).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
      }, ++_modelIdCounter);
      withEditMatrix(identity.translate(-44.5, 0, -20), () => newModel((model) => {
        model._update = () => identity.translate(0, levers[3].$lerpValue2 * -6.5);
        meshAdd(cylinder(6), identity.rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), material(0.7, 0.7, 0.7, 0.4));
      }));
      const hexCorridorPolygons = [
        ...polygons_transform(csg_polygons(csg_subtract(polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(6, 8, 6)), polygons_transform(cylinder(4, 0, 0.01), identity.translate(0, 6, 0).scale(12, 2, 0.75).rotate(0, 45), material(1, 1, 1)), polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(5, 12, 5)), ...[
          5,
          0,
          -5
        ].map((x) => polygons_transform(cylinder(5), identity.translate(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))))), identity, material(0.3, 0.6, 0.6, 0.3)),
        ...polygons_transform(cylinder(GQuad), identity.translate(0, -3, 0).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2))
      ];
      meshAdd(hexCorridorPolygons, identity.translate(-53, 0, -20));
      meshAdd(cylinder(6), identity.translate(-61.3, -2.4, -26).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3));
      meshAdd(cylinder(7), identity.translate(-57, -2.6, -29).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3));
      withEditMatrix(identity.translate(-55, -1.1, -29).rotate(0, 90), newLever);
      withEditMatrix(identity.translate(-75, 0, -20), () => newModel((model) => {
        model._update = () => {
          return identity.translate(0, (1 - levers[4].$lerpValue2) * (1 - levers[5].$lerpValue) * 3).rotate(180 * (1 - levers[4].$lerpValue2) - rotatingHexCorridorRotation, 0);
        };
        meshAdd(hexCorridorPolygons);
      }));
      meshAdd(cylinder(GQuad), identity.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.7), material(0.7, 0.7, 0.7, 0.2));
      meshAdd(cylinder(3, 0, -0.5), identity.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), material(0.8, 0.8, 0.8, 0.2));
      meshAdd(csg_polygons(csg_subtract(csg_union(polygons_transform(cylinder(GQuad), identity.translate(-100, -2.5, -20).scale(8, 1, 8), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(-100, -2.6, -5).scale(3, 1.1, 7), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(6), identity.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), material(0.6, 0.6, 0.6, 0.3)), polygons_transform(cylinder(GQuad), identity.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(-100, 0.42, 17).scale(3, 1.1, 4.1), material(0.8, 0.8, 0.8, 0.2))), polygons_transform(cylinder(8), identity.translate(-100, -1, -20).scale(7, 0.9, 7), material(0.3, 0.3, 0.3, 0.4)), polygons_transform(cylinder(8), identity.translate(-100, -2, -20).scale(4, 0.3, 4), material(0.4, 0.4, 0.4, 0.5)), polygons_transform(cylinder(8), identity.translate(-100, -3, -20).scale(0.6, 1, 0.6), material(0.4, 0.4, 0.4, 0.5)))), identity);
      meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.translate(-100, 1, -12).scale(7.5, 4, 1), material(0.5, 0.5, 0.5, 0.4)), polygons_transform(cylinder(GQuad), identity.translate(-100, 0.1, -5).scale(2, 1.7, 10), material(0.5, 0.5, 0.5, 0.4)), polygons_transform(cylinder(25, 1), identity.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), material(0.5, 0.5, 0.5, 0.4)))));
      withEditMatrix(identity.translate(-99.7, -2, -11.5), () => newModel((model) => {
        model._update = () => identity.translate(0, -levers[5].$lerpValue * 5.3);
        return entranceBarsMesh;
      }));
      GQuad.map(({ x, z }) => {
        meshAdd(cylinder(6), identity.translate(-100 + x * 7, -3, z * 7 - 20).scale(1, 8.1, 1), material(0.6, 0.15, 0.15, 0.8));
        [
          4,
          -0.4
        ].map((i) => meshAdd(cylinder(6), identity.translate(-100 + x * 7, i, z * 7 - 20).scale(1.3, 0.5, 1.3), material(0.4, 0.2, 0.2, 0.8)));
      });
      [
        material(0.5, 0.5, 0.6, 0.25),
        material(0.4, 0.4, 0.6, 0.35),
        material(0.35, 0.5, 0.6, 0.45),
        material(0.3, 0.6, 0.6, 0.25),
        material(0.25, 0.5, 0.6, 0.35),
        material(0.2, 0.4, 0.6, 0.25),
        material(0.15, 0.5, 0.6, 0.35)
      ].map((m, i) => {
        meshAdd(cylinder((i * 23 + 1) % 5 + 5, 0, 0.55), identity.translate(-101 + /* @__PURE__ */ Math.sin(i) * 5 + i, -2.3 - i, -30.1 - i * 2.8).scaleSelf(5 + i / 2, 1 + i / 6, 5 + i / 3), m);
      });
      meshAdd(cylinder(GQuad), identity.translate(-87, -9.5, -51).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4));
      meshAdd(cylinder(4), identity.translate(-86, -9.2, -48).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3));
      meshAdd(cylinder(25, 1), identity.translate(-86, -9, -44).scale(1.5, 1, 1.5), material(0.3, 0.3, 0.4, 0.1));
      withEditMatrix(identity.translate(-86, -7.5, -44), newLever);
      withEditMatrix(identity.translate(-76.9, -10, -51), () => {
        const shouldOscillate = () => lerpneg(levers[6].$lerpValue2, levers[5].$lerpValue2);
        newModel((model) => {
          model._update = () => {
            const osc = shouldOscillate();
            return identity.translate(0, (1 - max(levers[5].$lerpValue, levers[6].$lerpValue)) * 3.5 + osc * /* @__PURE__ */ Math.sin(gameTime) * 5);
          };
          [
            0,
            12,
            24
          ].map((x) => meshAdd(cylinder(GQuad), identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(0.2, 0.5, 0.6, 0.2)));
        }, ++_modelIdCounter);
        newModel((model) => {
          model._update = () => {
            const osc = shouldOscillate();
            return identity.translate(0, osc * /* @__PURE__ */ Math.sin(gameTime + 3) * 6, /* @__PURE__ */ Math.sin(gameTime * 0.6 + osc) * 6 * osc);
          };
          [
            6,
            18
          ].map((x) => meshAdd(cylinder(GQuad), identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(0.1, 0.4, 0.5, 0.2)));
        }, ++_modelIdCounter);
      });
      withEditMatrix(identity.translate(-38.9, -11.3, -51), () => {
        meshAdd(csg_polygons(csg_subtract(csg_union(polygons_transform(cylinder(GQuad), identity.scale(11, 1, 8), material(0.3, 0.4, 0.6, 0.3)), polygons_transform(cylinder(5), identity.scale(7, 1.2, 7), material(0, 0.2, 0.3, 0.5))), polygons_transform(cylinder(5), identity.scale(4.4, 5, 4.4), material(0, 0.2, 0.3, 0.5)))));
        newModel((model) => {
          model._update = () => identity.translate(0, levers[6].$lerpValue2 * -5.9);
          meshAdd(csg_polygons(csg_subtract(csg_union(polygons_transform(cylinder(5), identity.translate(0, 2).scale(4, 6, 4).skewY(8), material(0.2, 0.4, 0.5, 0.5)), polygons_transform(cylinder(5), identity.translate(0, 5).scale(2, 6, 2).skewY(-8), material(0.25, 0.35, 0.5, 0.5)), polygons_transform(cylinder(5), identity.translate(0, 9).scale(1.2, 5, 1.2).skewY(8), material(0.35, 0.3, 0.5, 0.5))), polygons_transform(cylinder(5), identity.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), material(0.2, 0.4, 0.5, 0.5)))));
        });
        GQuad.map(({ x, z }) => {
          meshAdd(cylinder(20, 1), identity.translate(x * 9, 4, z * 6).scale(1, 4, 1), material(0.25, 0.25, 0.25, 1));
          [
            1.5,
            8
          ].map((y) => meshAdd(cylinder(20, 1), identity.translate(x * 9, y, z * 6).scale(1.5, 0.5, 1.5), material(0.6, 0.6, 0.6, 0.3)));
        });
        meshAdd(cylinder(GQuad), identity.translate(0, 0, -9).scale(3, 1.2, 3), material(0.35, 0.3, 0.5, 0.5));
        withEditMatrix(identity.translate(0, 1.7, -11).rotate(0, 180), newLever);
      });
      meshAdd(cylinder(5), identity.translate(-84, -2, 10).scale(4, 0.8, 4).rotate(0, 10, 0), material(0.8, 0.1, 0.25, 0.4));
      withEditMatrix(identity.translate(-84, -0.5, 10).rotate(0, 45), newLever);
    });
    withEditMatrix(identity.translate(-123, 1.4, 55), () => {
      newModel((model) => {
        model._update = () => {
          return identity.translate(/* @__PURE__ */ Math.sin(gameTime + 2) / 5, /* @__PURE__ */ Math.sin(gameTime * 0.8) / 3, boatLerp * -65).rotate(/* @__PURE__ */ Math.sin(gameTime) * 2, /* @__PURE__ */ Math.sin(gameTime * 0.7), /* @__PURE__ */ Math.sin(gameTime * 0.9));
        };
        meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(20, 1, 1.15, 1), identity.translate(0, -3).scale(3.5, 1, 3.5), material(0.7, 0.4, 0.25, 0.7)), polygons_transform(cylinder(20, 1, 1.3, 1), identity.translate(0, -2.5).scale(2.6, 1, 3), material(0.7, 0.4, 0.25, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(4, -1.2, 0).scale3d(2), material(0.7, 0.4, 0.25, 0.3)))));
        withEditMatrix(identity.translate(0, -3, -4).rotate(0, 180), newLever);
      }, ++_modelIdCounter);
    });
    withEditMatrix(identity.translate(-123, 0, -12), () => {
      const shouldPushRods = () => lerpneg(levers[9].$lerpValue, levers[10].$lerpValue);
      const shouldBlockRods = () => (1 - levers[9].$lerpValue) * (1 - shouldPushRods());
      const pushingRod = csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), material(0.25, 0.25, 0.35, 0.3)), polygons_transform(cylinder(3), identity.translate(0, 0, -5.5).scale(3, 2, 1), material(0.6, 0.3, 0.4, 0.3)), ...[
        -1.2,
        1.2
      ].map((i) => polygons_transform(cylinder(GQuad), identity.translate(i, -0.5, 1).scale(0.14, 0.3, 6.5), material(0.7, 0.2, 0, 0.3)))));
      meshAdd(cylinder(GQuad), identity.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), material(0.8, 0.8, 0.8, 0.2));
      meshAdd(cylinder(6), identity.translate(7, -2.6, -4.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2));
      withEditMatrix(identity.translate(7, -1.4, -6).rotate(0, 180), newLever);
      integers_map(3, (i) => meshAdd(bigArc, identity.translate(i * 12 + 14, -9), material(0.6, 0.6, 0.6, 0.3)));
      integers_map(3, (i) => meshAdd(bigArc, identity.translate(46, -9, i * -12 - 8).rotate(0, 90), material(0.6, 0.6, 0.6, 0.3)));
      meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(12), identity.translate(46, -13.9).scale(4, 18.2, 4), material(0.7, 0.7, 0.7, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(44, 0).scale(3.5, 2.2, 1.3), material(0.4, 0.5, 0.6, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(46, 0, -2).scale(1.5, 2.2, 2), material(0.4, 0.5, 0.6, 0.2)), polygons_transform(cylinder(12), identity.translate(46, 2.8).scale(3, 5, 3), material(0.4, 0.5, 0.6, 0.2)))));
      meshAdd(cylinder(GQuad), identity.translate(7.5, -17).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3));
      meshAdd(cylinder(GQuad), identity.translate(46, -17, -38.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3));
      meshAdd(csg_polygons(csg_subtract(csg_union(polygons_transform(cylinder(GQuad), identity.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), polygons_transform(cylinder(GQuad), identity.translate(26.5, -0.6, 10).scale(17, 2, 0.5))), ...integers_map(4, (x) => polygons_transform(cylinder(GQuad), identity.translate(13 + x * 9 + (x & 1), -0.8, 9).scale(1.35, 1.35, 9))), ...integers_map(3, (x) => polygons_transform(cylinder(GQuad), identity.translate(17 + x * 9, -0.8, 9).scale(1.35, 1.35, 9))))), identity, material(0.5, 0.5, 0.6, 0.2));
      meshAdd(cylinder(5), identity.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), material(0.25, 0.25, 0.35, 1));
      newModel((model) => {
        model._update = () => identity.translate(0, -2, shouldPushRods() * abs(/* @__PURE__ */ Math.sin(gameTime * 1.1)) * -8.5 + 10);
        integers_map(2, (x) => meshAdd(pushingRod, identity.translate(13 + x * 9 + (x & 1), 1.7)));
      });
      newModel((model) => {
        model._update = () => identity.translate(0, -2, shouldPushRods() * abs(/* @__PURE__ */ Math.sin(gameTime * 2.1)) * -8.5 + 10);
        integers_map(2, (x) => meshAdd(pushingRod, identity.translate(13 + (x + 2) * 9 + (x & 1), 1.7)));
      });
      newModel((model) => {
        model._update = () => identity.translate(0, -2, max(shouldBlockRods(), shouldPushRods() * abs(/* @__PURE__ */ Math.sin(gameTime * 1.5))) * -8.5 + 10);
        integers_map(3, (x) => meshAdd(pushingRod, identity.translate(17 + x * 9, 1.7)));
      });
      meshAdd(cylinder(GQuad), identity.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), material(0.6, 0.6, 0.6, 0.3));
      meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.translate(30, -5.8, -28).scale(9, 1, 5), material(0.8, 0.8, 0.8, 0.1)), polygons_transform(cylinder(9), identity.translate(25, -5.8, -28).scale(3, 8, 3), material(0.7, 0.7, 0.7, 0.2)))));
      meshAdd(cylinder(9), identity.translate(25, -5.8, -28).scale(2.5, 0.9, 2.5), material(0.5, 0.5, 0.5, 0.3));
      withEditMatrix(identity.translate(25, -4.4, -28).rotate(0, 90), newLever);
    });
    withEditMatrix(identity.translate(-100, 0.7, 115), () => {
      const hexPadShouldOscillate = () => lerpneg(levers[7].$lerpValue2, levers[11].$lerpValue2);
      const rotPlatform = () => {
        meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(50, 1), identity.translate(0, 2).scale(8, 1, 8), material(0.35, 0, 0, 0.3)), polygons_transform(cylinder(GQuad), identity.scale(9, 5, 2), material(0.3, 0, 0, 0.3)))));
        meshAdd(rotPlatformBase);
      };
      meshAdd(csg_polygons(csg_subtract(csg_union(polygons_transform(cylinder(6, 0, 0, 0.6), identity.translate(0, 0, -9.5).scale(8, 1, 11), material(0.7, 0.7, 0.7, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), material(0.7, 0.7, 0.7, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(8.8, 0, -8).scale(3, 1, 3.3), material(0.7, 0.7, 0.7, 0.2))), polygons_transform(cylinder(5), identity.translate(0, 0, -2).scale(4, 3, 4), material(0.7, 0.7, 0.7, 0.2)))));
      [
        material(0.5, 0.5, 0.6, 0.25),
        material(0.4, 0.4, 0.6, 0.35),
        material(0.35, 0.5, 0.6, 0.45),
        material(0.3, 0.6, 0.6, 0.25)
      ].map((m, i) => {
        newModel((model) => {
          model._update = () => {
            const osc = hexPadShouldOscillate();
            return identity.translate(i > 2 ? (1 - osc) * 2 + osc : 0, osc * /* @__PURE__ */ Math.sin(gameTime + i * 1.7) * (5 + i / 4), (i & 1 ? -1 : 1) * (1 - levers[7].$lerpValue2) * (1 - levers[11].$lerpValue2) * -7 + max(0.05, osc) * /* @__PURE__ */ Math.cos(gameTime + i * 7) * (6 - 2 * (1 - i / 3)));
          };
          meshAdd(cylinder(6), identity.translate(-14.6 - i * 4.8 - (i > 2 ? 2 : 0), -i / 2.3, -21.5).scale(2.6, 1, 2.5), m);
        }, ++_modelIdCounter);
      });
      withEditMatrix(identity.translate(-40.8, -2.5, -21.5), () => {
        newModel((model) => {
          model._update = () => {
            const osc = hexPadShouldOscillate();
            return identity.translate((1 - osc) * 3.5, (1 - levers[7].$lerpValue) * -4 + osc * /* @__PURE__ */ Math.sin(gameTime * 0.7) * -4, osc * (/* @__PURE__ */ Math.sin(gameTime * 0.9) * 2 - 1) * 3).rotateSelf(/* @__PURE__ */ Math.cos(gameTime * 1.3) * (osc * 4 + 3), 0);
          };
          meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)), polygons_transform(cylinder(10), identity.scale(3.4, 6, 3.4), material(0.1, 0.6, 0.5, 0.5)))));
          withEditMatrix(identity.translate(-7.5).rotate(0, 90), () => {
            meshAdd(cylinder(15), identity.scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3));
            meshAdd(cylinder(10), identity.scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3));
            meshAdd(cylinder(5), identity.scale(1, 3, 1), material(0.5, 0.5, 0.5, 0.5));
            withEditMatrix(identity.translate(0, 3.4).rotate(0, 180), newLever);
          });
          [
            -1,
            1
          ].map((i) => meshAdd(GHorn, identity.rotate(-i * 90, 180, 90).translate(0, 5, 0).rotate(0, 0, 40).scale(1.3, 10, 1.3), material(1, 1, 0.8, 0.2)));
        }, ++_modelIdCounter);
      });
      [
        -1,
        1
      ].map((x) => {
        meshAdd(cylinder(15, 1), identity.translate(-7.5 * x, 3, -19).scale(0.8, 4, 0.8), material(0.6, 0.24, 0.2, 0.5));
        [
          7.2,
          1.5
        ].map((y) => meshAdd(cylinder(15, 1), identity.translate(-7.5 * x, y, -19).scale(1.1, 0.5, 1.1), material(0.5, 0.24, 0.2, 0.4)));
        meshAdd(GHorn, identity.translate(x * -5, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * x - 90), material(1, 1, 0.8));
        meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(GQuad), identity.translate(x * -4, 3.5, -0.5).scale(4, 4, 0.7), material(0.5, 0.5, 0.5, 0.4)), polygons_transform(cylinder(GQuad), identity.scale(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)), polygons_transform(cylinder(40, 1), identity.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), material(0.6, 0.24, 0.2, 0.5)), polygons_transform(cylinder(5), identity.translate(x * -5.3, 7, 0).rotate(90, 0).scale(1.7, 5, 1.7), material(0.6, 0.24, 0.2, 0.5)), polygons_transform(cylinder(5), identity.translate(x * -5.3, 3.8, 0).rotate(90, 0, 35).scale(0.75, 5, 0.75), material(0.6, 0.24, 0.2, 0.5)))), identity.translate(x, 0, -18));
      });
      newModel((model) => {
        model._update = () => identity.translate(0, -0.1 - levers[11].$lerpValue * 6, -18.5).scale(0.88, 1.2, 1);
        return entranceBarsMesh;
      });
      const rotPlatformBase = [
        ...polygons_transform(cylinder(50, 1), identity.scale(8, 1, 8), material(0.45, 0.45, 0.45, 0.2)),
        ...polygons_transform(cylinder(5), identity.translate(0, 1).scale(1, 0.2, 1), material(0.3, 0.3, 0.3, 0.2))
      ];
      withEditMatrix(identity.translate(20, 0.3, -9), () => {
        newModel((model) => {
          model._update = () => identity.rotate(0, 180 + rotatingPlatform1Rotation);
          meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(40, 1), identity.scale(8, 1, 8), material(0.45, 0.45, 0.45, 0.2)), polygons_transform(cylinder(GQuad), identity.translate(0, 0, -5.5).scale(1.5, 3, 2.5), material(0.45, 0.45, 0.45, 0.2)))));
          meshAdd(cylinder(8), identity.translate(0, 2).scale(3, 1.5, 3), material(0.7, 0.7, 0.7, 0.1));
          meshAdd(cylinder(5), identity.translate(0, 2).scale(1, 2, 1), material(0.3, 0.3, 0.3, 0.2));
        }, ++_modelIdCounter);
      });
      withEditMatrix(identity.translate(36, 0.3, -9), () => {
        meshAdd(cylinder(GQuad), identity.translate(8, 0).scale(0.7, 0.8, 2.5), material(0.7, 0.7, 0.7, 0.2));
        newModel((model) => {
          model._update = () => identity.rotate(0, rotatingPlatform2Rotation);
          rotPlatform();
          [
            -1,
            1
          ].map((x) => meshAdd(GHorn, identity.rotate(0, 90).translate(x * -5, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90), material(1, 1, 0.8)));
        }, ++_modelIdCounter);
      });
      withEditMatrix(identity.translate(52, 0.3, -9), () => {
        meshAdd(cylinder(GQuad), identity.translate(0, 0, -8).scale(2.5, 0.8, 0.7), material(0.7, 0.7, 0.7, 0.2));
        newModel((model) => {
          model._update = () => identity.rotate(0, 180 - rotatingPlatform2Rotation);
          meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(30, 1), identity.translate(0, 2).scale(8, 1, 8), material(0.35, 0, 0, 0.3)), polygons_transform(cylinder(GQuad), identity.translate(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)), polygons_transform(cylinder(GQuad), identity.translate(0, 0, 7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)))));
          meshAdd(rotPlatformBase);
        }, ++_modelIdCounter);
      });
      withEditMatrix(identity.translate(52, 0.3, -25), () => {
        newModel((model) => {
          model._update = () => identity.rotate(0, 270 + rotatingPlatform2Rotation);
          meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(30, 1), identity.translate(0, 2).scale(8, 1, 8), material(0.35, 0, 0, 0.3)), polygons_transform(cylinder(GQuad), identity.translate(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)), polygons_transform(cylinder(GQuad), identity.translate(0, 0, -7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)))));
          meshAdd(rotPlatformBase);
        }, ++_modelIdCounter);
      });
      meshAdd(cylinder(GQuad), identity.translate(61, -0.3, -25).scale(2, 1, 2), material(0.7, 0.7, 0.7, 0.3));
      meshAdd(cylinder(GQuad), identity.translate(68, -0.3, -25).scale(5, 1, 3), material(0.7, 0.7, 0.7, 0.3));
      withEditMatrix(identity.translate(66, 2, -19).rotate(-12, 0), newLever);
      meshAdd(cylinder(5), identity.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), material(0.2, 0.5, 0.5, 0.6));
      [
        material(0.1, 0.55, 0.45, 0.2),
        material(0.2, 0.5, 0.5, 0.3),
        material(0.3, 0.45, 0.55, 0.4)
      ].map((m, i) => newModel((model) => {
        model._update = () => identity.translate(0, (1 - levers[12].$lerpValue2) * (1 - levers[13].$lerpValue2) * 3 + lerpneg(levers[12].$lerpValue2, levers[13].$lerpValue2) * /* @__PURE__ */ Math.sin(gameTime * 1.5 + i * 1.5) * 4);
        meshAdd(cylinder(GQuad), identity.translate(76.5, -2.1 + i / 2, -25 + 7.5 * (1 - i / 30) * i).scale(3.3, 3 - i / 2, 3.45 - i / 5), m);
      }, ++_modelIdCounter));
      withEditMatrix(identity.translate(100, 0.2, -20), () => {
        meshAdd(cylinder(GQuad), identity.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), material(0.6, 0.6, 0.6, 0.2));
        meshAdd(csg_polygons(csg_subtract(polygons_transform(cylinder(6, 0, 0, 0.3), identity.translate(0, -0.92).scale(14, 2, 14), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(5), identity.scale3d(5), material(0.3, 0.3, 0.3, 0.5)))));
        [
          8,
          -11
        ].map((y, p) => integers_map(3, (i) => meshAdd(bigArc, identity.translate(i * 6 - 6, y - (i & 1), 14.5 - 0.2 * (i & 1) + p), i & 1 ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5))));
        [
          -1,
          1
        ].map((x) => meshAdd(GHorn, identity.translate(x * -8, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90), material(1, 1, 0.8)));
        meshAdd(cylinder(5), identity.translate(0, 1, -13).scale(3, 0.3, 3).rotate(0, 35), material(0.6, 0, 0, 0.4));
        withEditMatrix(identity.translate(0, 1.7, -13).rotate(0, 180), newLever);
        newModel((model) => {
          model._update = () => identity.translate(0, lerpneg(levers[13].$lerpValue, levers[12].$lerpValue2) * 15);
          meshAdd(cylinder(5), identity.scale(4, 1.1, 4), material(0.5, 0.3, 0.3, 0.4));
          meshAdd(cylinder(5), identity.scale(4.5, 0.9, 4.5), material(0.3, 0.3, 0.3, 0.4));
          meshAdd(cylinder(5), identity.translate(0, -10).scale(0.5, 10, 0.5), material(0.3, 0.3, 0.3, 0.4));
        }, ++_modelIdCounter);
      });
    });
  });
};
const code$6 = "#version 300 es\nlayout(location=0)in vec4 F;uniform mat4 B,C;void main(){gl_Position=B*C*F;}";
const code$5 = "#version 300 es\nlayout(location=0)in vec4 F;layout(location=1)in vec3 E;layout(location=2)in vec4 D;out vec4 N,L,M,K;uniform mat4 A,B,C;void main(){K=D,M=F,L=C*F,gl_Position=A*B*L,N=C*vec4(E,0);}";
const uniformName_projectionMatrix = "A";
const uniformName_viewMatrix = "B";
const uniformName_worldMatrix = "C";
const code$4 = "#version 300 es\nprecision highp float;in vec4 N,L,M,K;uniform vec3 J;uniform mat4 B,I[3];uniform highp sampler2DShadow H[3];uniform highp sampler2D D;out vec4 O;void main(){vec3 e=normalize(N.xyz),m=K.w*(texture(D,M.yz*.035)*e.x+texture(D,M.xz*.035)*e.y+texture(D,M.xy*.035)*e.z).xyz;e=normalize(e+m*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),o=1.,t=abs((B*L).z);vec4 r=I[t<40.?0:t<85.?1:2]*L;if(r=r/r.w*.5+.5,r.z<1.){o=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 s=vec3(r.xy+vec2(e,a)/1024.,r.z-.00034877);o+=t<40.?texture(H[0],s):t<85.?texture(H[1],s):texture(H[2],s);}o/=9.;}vec3 s=K.xyz*(1.-m.x);O=vec4(.1*s+s*(max(0.,a)*.5+s*a*a*.4)*(o*.7+.3)+.7*pow(max(0.,dot(normalize(L.xyz-J),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*o,1);}";
const uniformName_csm_matrices = "I";
const uniformName_csm_textures = "H";
const uniformName_groundTexture = "D";
const uniformName_viewPos = "J";
const constDef_CSM_TEXTURE_SIZE = 1024;
const constDef_zNear = 0.3;
const constDef_CSM_PLANE_DISTANCE0 = 40;
const constDef_CSM_PLANE_DISTANCE1 = 85;
const constDef_zFar = 177;
const code$3 = "#version 300 es\nprecision highp float;in vec4 N,L;uniform mat4 B;uniform float I;out vec4 O;void main(){vec4 o=B*L;float a=I>0.?1.-min(abs(o.z/o.w),1.):0.,i=a*(gl_FragCoord.y>31.?1.:abs(N.y));O=vec4(i,i,a>0.?I:0.,1);}";
const uniformName_modelId = "I";
const code$2 = "#version 300 es\nvoid main(){}";
const code$1 = "#version 300 es\nin vec4 F;void main(){gl_Position=vec4(F.xy,1,1);}";
const code = "#version 300 es\nprecision highp float;uniform vec3 C,J;uniform mat4 B;uniform highp sampler2D D;out vec4 O;void main(){vec2 o=gl_FragCoord.xy/C.xy*2.-1.;vec3 e=(normalize(B*vec4(o.x*-(C.x/C.y),-o.y,sqrt(3.),0.))).xyz;float i=(-32.-J.y)/e.y,u=1.-clamp(abs(i/1e4),0.,1.);if(O=vec4(0,0,0,1),u>.01){if(i>0.){float i=cos(C.z/30.),o=sin(C.z/30.);e.xz*=mat2(i,o,-o,i);vec3 u=abs(e);O.xyz=vec3(dot(vec2(texture(D,e.xy).z,texture(D,e.yz*2.).z),u.zx)*u.y);}else{vec3 t=J+e*i;vec4 r=texture(D,t.xz/150.+vec2(sin(t.z/35.+C.z),cos(t.x/25.+C.z))/80.);float o=(.9-r.y)*u;O.x=o,O.y=o*o*o;}}}";
const uniformName_iResolution = "C";
const fieldOfViewDegrees = 60;
const camera_rotation = {
  x: 0,
  y: 180,
  z: 0
};
const camera_view = new DOMMatrix();
const mat_perspective = (near, far) => mat_perspectiveXY(hC.clientHeight / hC.clientWidth * fieldOfViewAmount, fieldOfViewAmount, near, far);
const zNear = constDef_zNear;
const zFar = constDef_zFar;
const fieldOfViewRadians = fieldOfViewDegrees * DEG_TO_RAD;
const fieldOfViewAmount = 1 / /* @__PURE__ */ Math.tan(fieldOfViewRadians / 2);
const camera_position = {
  x: player_position_global.x,
  y: player_position_global.y + 13,
  z: player_position_global.z - 18
};
const LIGHT_ROT_X = 298;
const LIGHT_ROT_Y = 139;
const csm_buildMatrix = (nearPlane, farPlane, zMultiplier) => {
  let tx = 0;
  let ty = 0;
  let tz = 0;
  const roundingRadius = (farPlane - nearPlane) * 1.1;
  const projViewInverse = new DOMMatrix(mat_perspective(nearPlane, farPlane)).multiplySelf(camera_view).invertSelf();
  const frustumCorners = integers_map(8, (i) => {
    const v = projViewInverse.transformPoint({
      x: 4 & i ? 1 : -1,
      y: 2 & i ? 1 : -1,
      z: 1 & i ? 1 : -1
    });
    tx -= v.x = (roundingRadius * v.x | 0) / (roundingRadius * v.w);
    ty -= v.y = (roundingRadius * v.y | 0) / (roundingRadius * v.w);
    tz -= v.z = (roundingRadius * v.z | 0) / (roundingRadius * v.w);
    return v;
  });
  const lightViewTranslated = identity.rotate(LIGHT_ROT_X, LIGHT_ROT_Y).translateSelf(tx / 8, ty / 8, tz / 8);
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
  return identity.scale(2 / (right - left), 2 / (top - bottom), 2 / (near - far)).translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2).multiplySelf(lightViewTranslated).toFloat32Array();
};
const loadShader = (source, type = 35633) => {
  const shader = gl.c6x(type);
  gl.s3c(shader, source);
  gl.c6a(shader);
  return shader;
};
const initShaderProgram = (vertexShader, sfsSource) => {
  const uniforms = {};
  const program = gl.c1h();
  gl.abz(program, vertexShader);
  gl.abz(program, loadShader(sfsSource, 35632));
  gl.l8l(program);
  return (name) => name ? uniforms[name] || (uniforms[name] = gl.gan(program, name)) : gl.u7y(program);
};
const gl = hC.getContext("webgl2");
for (const s in gl)
  {gl[s[0] + [
    ...s
  ].reduce((p, c, i) => (p * i + c.charCodeAt(0)) % 434, 0).toString(36)] = gl[s];}
const initTriangleBuffers = () => {
  gl.b11(34963, gl.c1b());
  gl.b2v(34963, new Uint16Array(_triangleIndices), 35044);
  gl.b11(34962, gl.c1b());
  gl.b2v(34962, new Float32Array(_vertexPositions), 35044);
  gl.v7s(0, 3, 5126, false, 0, 0);
  gl.b11(34962, gl.c1b());
  gl.b2v(34962, new Int16Array(_vertexNormals), 35044);
  gl.v7s(1, 3, 5122, true, 0, 0);
  gl.b11(34962, gl.c1b());
  gl.b2v(34962, new Uint32Array(_vertexColors), 35044);
  gl.v7s(2, 4, 5121, true, 0, 0);
  gl.e3x(0);
  gl.e3x(1);
  gl.e3x(2);
};
const drawMesh = ($mesh) => gl.d97(4, $mesh.$vertexCount, 5123, $mesh.$vertexOffset * 2);
const renderModels = (worldMatrixLoc, renderPlayer, collisionModelIdUniformLocation) => {
  const recursion = (model) => {
    const { $mesh, $children, $visible, $modelId } = model;
    if (!renderPlayer && model.$modelId === PLAYER_MODEL_ID)
      {return;}
    if (collisionModelIdUniformLocation && !model.$collisions)
      {return;}
    if ($visible) {
      for (const child of $children)
        {recursion(child);}
      if ($mesh) {
        if (collisionModelIdUniformLocation)
          {gl.ube(collisionModelIdUniformLocation, $modelId / 255);}
        gl.uae(worldMatrixLoc, false, model.$finalMatrix.toFloat32Array());
        drawMesh($mesh);
      }
    }
  };
  if (mainMenuVisible) {
    const m = identity.rotate(0, -70);
    gl.uae(worldMatrixLoc, false, m.toFloat32Array());
    drawMesh(playerModel.$mesh);
    playerLegsModels.map((legModel) => drawMesh(legModel.$mesh));
  } else
    {recursion(rootModel);}
};
const GAMEPAD_BUTTON_UP = 12;
const GAMEPAD_BUTTON_DOWN = 13;
const GAMEPAD_BUTTON_LEFT = 14;
const GAMEPAD_BUTTON_RIGHT = 15;
const GAMEPAD_BUTTON_START = 9;
const GAMEPAD_BUTTON_A = 1;
const GAMEPAD_BUTTON_B = 0;
const GAMEPAD_BUTTON_X = 3;
const GAMEPAD_BUTTON_Y = 2;
let movement_strafe = 0;
let movement_forward = 0;
let _gamepadStartPressed = false;
let _gamepadInteractPressed = false;
const input_frameUpdate = () => {
  movement_strafe = (keyboard_downKeys[KEY_LEFT] ? 1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? -1 : 0);
  movement_forward = (keyboard_downKeys[KEY_FRONT] ? 1 : 0) + (keyboard_downKeys[KEY_BACK] ? -1 : 0);
  const gamepad = navigator.getGamepads()[0];
  if (gamepad) {
    const getGamepadButtonState = (index2) => buttons[index2]?.pressed || buttons[index2]?.value > 0;
    const { buttons, axes } = gamepad;
    const startPressed = getGamepadButtonState(GAMEPAD_BUTTON_START);
    movement_strafe += (abs(-axes[0]) > 0.1 ? /* @__PURE__ */ Math.sign(-axes[0]) : 0) + (getGamepadButtonState(GAMEPAD_BUTTON_LEFT) ? 1 : 0) + (getGamepadButtonState(GAMEPAD_BUTTON_RIGHT) ? -1 : 0);
    movement_forward += (abs(-axes[1]) > 0.1 ? /* @__PURE__ */ Math.sign(-axes[1]) : 0) + (getGamepadButtonState(GAMEPAD_BUTTON_UP) ? 1 : 0) + (getGamepadButtonState(GAMEPAD_BUTTON_DOWN) ? -1 : 0);
    if (_gamepadStartPressed !== startPressed) {
      _gamepadStartPressed = startPressed;
      if (startPressed)
        {setMainMenuVisible(!mainMenuVisible);}
    }
    const interactButtonPressed = getGamepadButtonState(GAMEPAD_BUTTON_A) || getGamepadButtonState(GAMEPAD_BUTTON_X) || getGamepadButtonState(GAMEPAD_BUTTON_Y) || getGamepadButtonState(GAMEPAD_BUTTON_B);
    if (interactButtonPressed !== _gamepadInteractPressed) {
      _gamepadInteractPressed = interactButtonPressed;
      keyboard_downKeys[KEY_INTERACT] = interactButtonPressed;
    }
  }
  movement_strafe = /* @__PURE__ */ Math.sign(movement_strafe);
  movement_forward = /* @__PURE__ */ Math.sign(movement_forward);
};
const PLAYER_LEGS_VELOCITY = 9.1;
const COLLISION_TEXTURE_SIZE = 128;
const startMainLoop = (groundTextureImage) => {
  let currentModelIdTMinus1 = 0;
  let currentModelId = 0;
  let player_respawned = 1;
  let player_look_angle_target = 0;
  let player_look_angle = 0;
  let player_legs_speed = 0;
  let player_gravity = 1;
  let player_speed = 0;
  let player_collision_velocity_x = 0;
  let player_collision_velocity_z = 0;
  let player_collision_x = 0;
  let player_collision_z = 0;
  let oldModelId;
  let player_has_ground;
  const player_collision_modelIdCounter = new Int32Array(256);
  const player_respawn = () => {
    const { $matrix, $model } = levers[player_last_pulled_lever];
    const { x, y, z } = player_last_pulled_lever && $matrix ? $matrix.transformPoint({
      x: 0,
      y: 15,
      z: -3
    }) : player_position_initial;
    player_position_final.x = player_position_global.x = x;
    player_position_final.y = player_position_global.y = y;
    player_position_final.z = player_position_global.z = z;
    player_speed = 0;
    player_gravity = 0;
    player_collision_velocity_x = 0;
    player_collision_velocity_z = 0;
    player_has_ground = 0;
    player_collision_x = 0;
    player_collision_z = 0;
    player_respawned = 1;
    currentModelIdTMinus1 = currentModelId = $model.$modelId || 1;
  };
  const updatePlayer = () => {
    const playerSpeedCollision = clamp01(1 - max(abs(player_collision_x), abs(player_collision_z)) * 5);
    if (!currentModelId) {
      player_collision_x += player_collision_velocity_x * playerSpeedCollision * gameTimeDelta;
      player_collision_z += player_collision_velocity_z * playerSpeedCollision * gameTimeDelta;
    }
    player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4);
    player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4);
    player_speed = lerpDamp(player_speed, player_has_ground ? (movement_strafe || movement_forward ? player_has_ground ? 7 : 4 : 0) * playerSpeedCollision : 0, player_has_ground ? playerSpeedCollision > 0.1 ? 10 : movement_strafe || movement_forward ? 5 : 7 : 1);
    const effectivePlayerSpeed = (movement_strafe && movement_forward ? Math.SQRT1_2 : 1) * player_speed * gameTimeDelta;
    if (player_first_person) {
      const yradians = camera_rotation.y * DEG_TO_RAD;
      const s = /* @__PURE__ */ Math.sin(yradians) * effectivePlayerSpeed;
      const c = /* @__PURE__ */ Math.cos(yradians) * effectivePlayerSpeed;
      player_collision_x -= movement_strafe * c - movement_forward * s;
      player_collision_z -= movement_strafe * s + movement_forward * c;
    } else {
      player_collision_x += movement_strafe * effectivePlayerSpeed;
      player_collision_z += movement_forward * effectivePlayerSpeed;
    }
    const referenceMatrix = modelsByModelId[currentModelId]?.$finalMatrix || identity;
    const referenceMatrixInverse = referenceMatrix.inverse();
    ({ x: player_collision_x, z: player_collision_z } = referenceMatrixInverse.transformPoint({
      x: player_collision_x,
      y: 0,
      z: player_collision_z,
      w: 0
    }));
    player_position_global.z += player_collision_z;
    player_position_global.x += player_collision_x;
    if (currentModelId !== oldModelId) {
      oldModelId = currentModelId;
      ({ x: player_position_global.x, y: player_position_global.y, z: player_position_global.z } = referenceMatrixInverse.transformPoint(player_position_final));
    }
    const oldx = player_position_final.x;
    const oldz = player_position_final.z;
    ({ x: player_position_final.x, y: player_position_final.y, z: player_position_final.z } = referenceMatrix.transformPoint(player_position_global));
    if (currentModelId) {
      player_collision_velocity_x = (player_position_final.x - oldx) / gameTimeDelta;
      player_collision_velocity_z = (player_position_final.z - oldz) / gameTimeDelta;
    }
    if (movement_strafe || movement_forward)
      {player_look_angle_target = /* @__PURE__ */ Math.atan2(movement_strafe, movement_forward) / DEG_TO_RAD;}
    player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, gameTimeDelta * 8);
    player_legs_speed = lerp(player_legs_speed, movement_strafe || movement_forward ? 1 : 0, gameTimeDelta * 10);
  };
  const doVerticalCollisions = (_collision_buffer) => {
    let maxModelIdCount = 0;
    let nextModelId = 0;
    let lines = 0;
    let grav = 0;
    let hasGround = 0;
    player_collision_modelIdCounter.fill(0);
    for (let y = 0; y < 31; ++y) {
      let up = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = 0; x < COLLISION_TEXTURE_SIZE - 0; x++) {
        let i = yindex + x * 4;
        const a = (_collision_buffer[i] + _collision_buffer[i + 1]) / 255;
        i = _collision_buffer[i + 2];
        if (x > 14 && x < COLLISION_TEXTURE_SIZE - 14)
          {up += a;}
        if (i && a) {
          const count = player_collision_modelIdCounter[i] + 1;
          player_collision_modelIdCounter[i] = count;
          if (count >= maxModelIdCount) {
            maxModelIdCount = count;
            nextModelId = i;
          }
        }
      }
      if (up < 3 && y > 5)
        {grav += y / 32;}
      if (up > 3) {
        if (y > 7)
          {lines += y / 15;}
        hasGround = 1;
      }
    }
    if (nextModelId)
      {hasGround = 1;}
    if (player_respawned) {
      if (nextModelId) {
        player_respawned = 0;
        currentModelId = nextModelId;
      }
    } else
      {currentModelId = nextModelId || currentModelIdTMinus1;}
    currentModelIdTMinus1 = nextModelId;
    player_has_ground = hasGround;
    player_gravity = lerpDamp(player_gravity, hasGround ? 6.5 : 8, 4);
    player_position_global.y += lines / 41 - (hasGround ? 1 : player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;
  };
  const doHorizontalCollisions = (_collision_buffer) => {
    let ddx = 0;
    let ddz = 0;
    for (let y = 32; y < COLLISION_TEXTURE_SIZE; y += 2) {
      let front = 0;
      let back = 0;
      let left = 0;
      let right = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = y >> 1 & 1; x < COLLISION_TEXTURE_SIZE; x += 2) {
        const i1 = yindex + x * 4;
        const i2 = yindex + (COLLISION_TEXTURE_SIZE - 1 - x) * 4;
        const dist1 = _collision_buffer[i1] / 255;
        const dist2 = _collision_buffer[i2 + 1] / 255;
        const t = 1 - abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);
        if (x > 10 && x < COLLISION_TEXTURE_SIZE - 10) {
          const dist1Opposite = _collision_buffer[i2] / 255;
          front = max(front, max(dist1 * t, dist1 * dist1Opposite * 2));
          const dist2Opposite = _collision_buffer[i1 + 1] / 255;
          back = max(back, max(dist2 * t, dist2 * dist2Opposite));
        }
        if (x < COLLISION_TEXTURE_SIZE / 2 - 10 || x > COLLISION_TEXTURE_SIZE / 2 + 10) {
          const xdist = (1 - t) * max(dist1, dist2) / 3;
          if (xdist > 1e-3) {
            if (x < COLLISION_TEXTURE_SIZE / 2 && left < xdist)
              {left = xdist;}
            else if (x > COLLISION_TEXTURE_SIZE / 2 && right < xdist)
              {right = xdist;}
          }
        }
      }
      const dx = right - left;
      const dz = back - front;
      if (abs(dx) > abs(ddx))
        {ddx = dx;}
      if (abs(dz) > abs(ddz))
        {ddz = dz;}
    }
    player_collision_x = ddx;
    player_collision_z = ddz;
  };
  const mainLoop = (globalTime) => {
    requestAnimationFrame(mainLoop);
    input_frameUpdate();
    if (gameTimeDelta > 0) {
      gl.b6o(36160, collision_frameBuffer);
      gl.r9r(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, 6408, 5121, collision_buffer);
      gl.iay(36160, [
        36064,
        36096
      ]);
      NO_INLINE(doVerticalCollisions)(collision_buffer);
      NO_INLINE(doHorizontalCollisions)(collision_buffer);
      updatePlayer();
    }
    gameTimeUpdate(globalTime);
    if (mainMenuVisible)
      {camera_view.setMatrixValue("none").rotateSelf(-30, -90).invertSelf().translateSelf(4.5 - hC.clientHeight / hC.clientWidth, -2.5, -2.2 + min(1, hC.clientHeight / hC.clientWidth));}
    else {
      camera_player_dir_x = interpolate_with_hysteresis(camera_player_dir_x, player_position_final.x, 0.5, gameTimeDelta);
      camera_player_dir_y = interpolate_with_hysteresis(camera_player_dir_y, player_position_final.y, 2, gameTimeDelta);
      camera_player_dir_z = interpolate_with_hysteresis(camera_player_dir_z, player_position_final.z, 0.5, gameTimeDelta);
      if (player_first_person) {
        const interpolationSpeed = player_respawned * 200;
        camera_position.x = lerpDamp(camera_position.x, player_position_final.x, 18 + interpolationSpeed);
        camera_position.y = lerpDamp(camera_position.y, player_position_final.y + 1.5, 15 + interpolationSpeed);
        camera_position.z = lerpDamp(camera_position.z, player_position_final.z, 18 + interpolationSpeed);
        camera_rotation.y = angle_wrap_degrees(camera_rotation.y + mouse_movementX * 0.1);
        camera_rotation.x = max(min(camera_rotation.x + mouse_movementY * 0.1, 87), -87);
      } else {
        camera_position.x = interpolate_with_hysteresis(camera_position.x, camera_player_dir_x, 1, gameTimeDelta * 2);
        camera_position.y = interpolate_with_hysteresis(camera_position.y, camera_player_dir_y + 13 + player_respawned * 15, 4, gameTimeDelta * 2);
        camera_position.z = interpolate_with_hysteresis(camera_position.z, camera_player_dir_z - 18, 1, gameTimeDelta * 2);
        const viewDirDiffx = camera_position.x - camera_player_dir_x;
        const viewDirDiffy = camera_position.y - camera_player_dir_y;
        const viewDirDiffz = camera_position.z - camera_player_dir_z;
        if (abs(viewDirDiffz) > 1) {
          camera_rotation.y = 270 + /* @__PURE__ */ Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD;
          camera_rotation.x = 90 - /* @__PURE__ */ Math.atan2(/* @__PURE__ */ Math.sqrt(viewDirDiffz * viewDirDiffz + viewDirDiffx * viewDirDiffx) || 0, viewDirDiffy) / DEG_TO_RAD;
        }
      }
      camera_view.setMatrixValue("none").rotateSelf(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z).invertSelf().translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);
      if (gameTimeDelta > 0) {
        const PLAYER_FELL_IN_LAVA_Y = -25;
        worldStateUpdate();
        if (player_position_final.y < PLAYER_FELL_IN_LAVA_Y)
          {player_respawn();}
      }
    }
    csmShader();
    gl.v5y(0, 0, constDef_CSM_TEXTURE_SIZE, constDef_CSM_TEXTURE_SIZE);
    csm_render[0](csm_buildMatrix(zNear, constDef_CSM_PLANE_DISTANCE0, 10));
    csm_render[1](csm_buildMatrix(constDef_CSM_PLANE_DISTANCE0, constDef_CSM_PLANE_DISTANCE1, 11));
    csm_render[2](csm_buildMatrix(constDef_CSM_PLANE_DISTANCE1, zFar, 15));
    gl.b6o(36160, null);
    mainShader();
    gl.v5y(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.c4s(16640);
    gl.uae(mainShader(uniformName_projectionMatrix), false, mat_perspective(zNear, zFar));
    gl.uae(mainShader(uniformName_viewMatrix), false, camera_view.toFloat32Array());
    gl.ubu(mainShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);
    csm_render[0]();
    csm_render[1]();
    csm_render[2]();
    renderModels(mainShader(uniformName_worldMatrix), !player_first_person);
    csm_render[2](1);
    csm_render[1](1);
    csm_render[0](1);
    gl.b6o(36160, null);
    skyShader();
    gl.ubu(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);
    if (mainMenuVisible)
      {gl.ubu(skyShader(uniformName_viewPos), 0, -0, 0);}
    else
      {gl.ubu(skyShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);}
    gl.uae(skyShader(uniformName_viewMatrix), false, camera_view.invertSelf().toFloat32Array());
    gl.d97(4, 3, 5123, 0);
    if (!mainMenuVisible) {
      collisionShader();
      gl.b6o(36160, collision_frameBuffer);
      gl.v5y(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
      gl.cbf(true, false, true, false);
      gl.c4s(16640);
      gl.uae(collisionShader(uniformName_viewMatrix), false, identity.rotate(0, 180).invertSelf().translateSelf(-player_position_final.x, -player_position_final.y, 0.3 - player_position_final.z).toFloat32Array());
      renderModels(collisionShader(uniformName_worldMatrix), 0, collisionShader(uniformName_modelId));
      gl.cbf(false, true, false, false);
      gl.c4s(16640);
      gl.cbf(false, true, true, false);
      gl.uae(collisionShader(uniformName_viewMatrix), false, identity.translate(-player_position_final.x, -player_position_final.y, -player_position_final.z - 0.3).toFloat32Array());
      renderModels(collisionShader(uniformName_worldMatrix), 0, collisionShader(uniformName_modelId));
      gl.cbf(true, true, true, true);
    }
    if (gameTimeDelta > 0) {
      if (currentModelId === 1)
        {levers[8].$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0;}
      updateModels(rootModel);
    }
    input_frameReset();
  };
  let camera_player_dir_x = player_position_global.x;
  let camera_player_dir_y = player_position_global.y + 13;
  let camera_player_dir_z = player_position_global.z - 18;
  const mainVertexShader = loadShader(code$5);
  const skyShader = initShaderProgram(loadShader(code$1), code);
  const csmShader = initShaderProgram(loadShader(code$6), code$2);
  const collisionShader = initShaderProgram(mainVertexShader, code$3);
  const mainShader = initShaderProgram(mainVertexShader, code$4);
  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);
  const collision_texture = gl.c25();
  const collision_frameBuffer = gl.c5w();
  const collision_renderBuffer = gl.c3z();
  const csm_render = integers_map(3, (csmSplit) => {
    let lightSpaceMatrix;
    const texture = gl.c25();
    const frameBuffer = gl.c5w();
    const lightSpaceMatrixLoc = mainShader(`${uniformName_csm_matrices  }[${csmSplit}]`);
    mainShader();
    gl.ubh(mainShader(`${uniformName_csm_textures  }[${csmSplit}]`), csmSplit);
    gl.b6o(36160, frameBuffer);
    gl.d45([
      0
    ]);
    gl.r9l(0);
    gl.a4v(33984 + csmSplit);
    gl.b9j(3553, texture);
    gl.fas(36160, 36096, 3553, texture, 0);
    gl.t60(3553, 0, 36012, constDef_CSM_TEXTURE_SIZE, constDef_CSM_TEXTURE_SIZE, 0, 6402, 5126, null);
    gl.t2z(3553, 10242, 33071);
    gl.t2z(3553, 10243, 33071);
    gl.t2z(3553, 10241, 9729);
    gl.t2z(3553, 10240, 9729);
    gl.t2z(3553, 34893, 515);
    gl.t2z(3553, 34892, 34894);
    return (matrix) => {
      if (matrix) {
        gl.b6o(36160, frameBuffer);
        if (matrix === 1)
          {gl.iay(36160, [
            36064,
            36096
          ]);}
        else {
          gl.c4s(256);
          gl.uae(csmShader(uniformName_viewMatrix), false, lightSpaceMatrix = matrix);
          renderModels(csmShader(uniformName_worldMatrix), !player_first_person);
        }
      } else
        {gl.uae(lightSpaceMatrixLoc, false, lightSpaceMatrix);}
    };
  });
  initTriangleBuffers();
  gl.e8z(2929);
  gl.e8z(2884);
  gl.c70(1);
  gl.c7a(1029);
  gl.d4n(515);
  gl.c5t(0, 0, 0, 1);
  skyShader();
  gl.ubh(skyShader(uniformName_groundTexture), 3);
  collisionShader();
  gl.uae(collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1.4, 0.59, 1e-4, 1));
  mainShader();
  gl.ubh(mainShader(uniformName_groundTexture), 3);
  gl.b6o(36160, collision_frameBuffer);
  gl.bb1(36161, collision_renderBuffer);
  gl.r4v(36161, 33189, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  gl.f8w(36160, 36096, 36161, collision_renderBuffer);
  gl.a4v(33987);
  gl.b9j(3553, collision_texture);
  gl.fas(36160, 36064, 3553, collision_texture, 0);
  gl.t60(3553, 0, 6407, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, 0, 6407, 5121, null);
  gl.b9j(3553, gl.c25());
  gl.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, groundTextureImage);
  gl.gbn(3553);
  gl.t2z(3553, 10241, 9987);
  gl.t2z(3553, 10240, 9729);
  playerModel._update = () => identity.translate(player_position_final.x, player_position_final.y, player_position_final.z).rotateSelf(0, player_look_angle);
  playerLegsModels.map((model, i) => {
    model._update = () => identity.translate(0, player_legs_speed * clamp01(/* @__PURE__ */ Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * i - Math.PI / 2) * 0.45)).rotateSelf(player_legs_speed * /* @__PURE__ */ Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * i) * (0.25 / DEG_TO_RAD), 0);
  });
  updateModels(rootModel);
  initPage();
  player_respawn();
  requestAnimationFrame(mainLoop);
};
requestAnimationFrame(() => {
  const image = new Image();
  image.onload = image.onerror = () => {
    startMainLoop(image);
  };
  image.src = groundTextureSvg;
  newModel(buildWorld);
});
//# sourceMappingURL=index.js.map
