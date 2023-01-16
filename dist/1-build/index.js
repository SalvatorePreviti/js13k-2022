const groundTextureSvg = "data:image/svg+xml;base64," + /* @__PURE__ */ btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>');
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
const matrixCopy = (source = identity, target = tempMatrix) => {
  target.m11 = source.m11;
  target.m12 = source.m12;
  target.m13 = source.m13;
  target.m14 = source.m14;
  target.m21 = source.m21;
  target.m22 = source.m22;
  target.m23 = source.m23;
  target.m24 = source.m24;
  target.m31 = source.m31;
  target.m32 = source.m32;
  target.m33 = source.m33;
  target.m34 = source.m34;
  target.m41 = source.m41;
  target.m42 = source.m42;
  target.m43 = source.m43;
  target.m44 = source.m44;
  return target;
};
const matrixTransformPoint = (x = 0, y = 0, z = 0, w = 1) => {
  matrixTransformPoint.x = tempMatrix.m11 * x + tempMatrix.m21 * y + tempMatrix.m31 * z + tempMatrix.m41 * w;
  matrixTransformPoint.y = tempMatrix.m12 * x + tempMatrix.m22 * y + tempMatrix.m32 * z + tempMatrix.m42 * w;
  matrixTransformPoint.z = tempMatrix.m13 * x + tempMatrix.m23 * y + tempMatrix.m33 * z + tempMatrix.m43 * w;
  matrixTransformPoint.w = tempMatrix.m14 * x + tempMatrix.m24 * y + tempMatrix.m34 * z + tempMatrix.m44 * w;
};
const identity = new DOMMatrix();
const tempMatrix = new DOMMatrix();
const float32Array16Temp = new Float32Array(16);
const SOULS_COUNT = 13;
const LEVERS_COUNT = 16;
const MODELS_WITH_SIMPLE_TRANSFORM = 26;
const allModels = [];
const levers = [];
const souls = [];
const MODELS_WITH_FULL_TRANSFORM = 12 + LEVERS_COUNT;
const translation = NO_INLINE((x, y, z) => identity.translate(x, y, z));
const integers_map = (n, fn) => Array.from(/* @__PURE__ */ Array(n), (_, i) => fn(i));
const polygon_color = (polygon, color, smooth) => {
  polygon.$smooth = smooth;
  polygon.$color = color;
  return polygon;
};
const polygon_transform = (polygon, m, color = polygon.$color) => {
  matrixCopy(m);
  return polygon_color(polygon.map(({ x, y, z }) => {
    matrixTransformPoint(x, y, z);
    return {
      x: matrixTransformPoint.x,
      y: matrixTransformPoint.y,
      z: matrixTransformPoint.z
    };
  }), color, polygon.$smooth);
};
const polygons_transform = (polygons, m, color) => polygons.map((polygon) => polygon_transform(polygon, m, color));
const DEG_TO_RAD = Math.PI / 180;
const abs = NO_INLINE((a) => a < 0 ? -a : a);
const min = NO_INLINE((a, b) => a < b ? a : b);
const max = NO_INLINE((a, b) => a > b ? a : b);
const threshold = (value, amount) => abs(value) > amount ? value : 0;
const clamp = (value, minValue = 0, maxValue = 1) => value < minValue ? minValue : value > maxValue ? maxValue : value;
const angle_wrap_degrees = (degrees) => /* @__PURE__ */ Math.atan2(/* @__PURE__ */ Math.sin(degrees * DEG_TO_RAD), /* @__PURE__ */ Math.cos(degrees * DEG_TO_RAD)) / DEG_TO_RAD;
const angle_lerp_degrees = (a0, a1, t) => {
  const da = (a1 - a0) % 360;
  return a0 + (2 * da % 360 - da) * clamp(t) || 0;
};
const lerp = (a, b, t) => (t <= 0 ? a : t >= 1 ? b : a + (b - a) * t) || 0;
const hypot = (a, b, c = 0) => (a * a + b * b + c * c) ** 0.5;
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
  const points = segments ? polygon_regular(segments, elongate) : GQuad;
  const top = polygon_transform(points, translation(0, 1).scale3d(topSize > 0 ? topSize : 1));
  const bottom = polygon_transform(points, translation(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse();
  return [
    ...cylinder_sides(bottom, top, smooth),
    top,
    bottom
  ];
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
    for (let j = 0; j < stacks; j++) {
      const vertex = (x, y) => polygon.push(vertexFunc(x, y, polygon));
      const polygon = polygon_color([], 0, 1);
      polygons.push(polygon);
      vertex(i, j);
      if (j)
        vertex((i + 1) % slices, j);
      if (j < stacks - 1)
        vertex((i + 1) % slices, j + 1 % stacks);
      vertex(i, j + 1 % stacks);
    }
  return polygons;
};
const material = NO_INLINE((r, g, b, a = 0) => a * 255 << 24 | b * 255 << 16 | g * 255 << 8 | r * 255);
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
  b = hypot(x, y, z);
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
const vec3_dot = ({ x, y, z }, b) => x * b.x + y * b.y + z * b.z;
const CSGPolygon_split = (plane, polygon) => {
  let jd;
  let front;
  let back;
  const PLANE_EPSILON = 8e-5;
  const { $polygon, $flipped } = polygon;
  for (let i = 0; i < $polygon.length; ++i) {
    jd = vec3_dot(plane, $polygon[i]) - plane.w;
    if (jd < -PLANE_EPSILON)
      back = polygon;
    else if (jd > PLANE_EPSILON)
      front = polygon;
    if (back && front) {
      const fpoints = [];
      const bpoints = [];
      let iv = $polygon.at(-1);
      let id = vec3_dot(iv, plane) - plane.w;
      for (const jv of $polygon) {
        jd = vec3_dot(jv, plane) - plane.w;
        if (id < PLANE_EPSILON)
          bpoints.push(iv);
        if (id > -PLANE_EPSILON)
          fpoints.push(iv);
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
      front = fpoints.length > 2 && {
        $polygon: polygon_color(fpoints, $polygon.$color, $polygon.$smooth),
        $flipped,
        $parent: polygon
      };
      back = bpoints.length > 2 && {
        $polygon: polygon_color(bpoints, $polygon.$color, $polygon.$smooth),
        $flipped,
        $parent: polygon
      };
      break;
    }
  }
  return {
    x: front,
    y: back
  };
};
const csg_tree_addPolygon = (node, polygon, plane = plane_fromPolygon(polygon.$polygon)) => {
  if (node) {
    const { x: front, y: back } = CSGPolygon_split(node, polygon);
    if (!front && !back)
      node.$polygon.push(polygon);
    if (front)
      node.$front = csg_tree_addPolygon(node.$front, front, plane);
    if (back)
      node.$back = csg_tree_addPolygon(node.$back, back, plane);
  } else
    node = {
      x: plane.x,
      y: plane.y,
      z: plane.z,
      w: plane.w,
      $polygon: [
        polygon
      ],
      $front: 0,
      $back: 0
    };
  return node;
};
const csg_tree_clipNode = (anode, bnode, polygonPlaneFlipped) => {
  const result = [];
  const recursion = (node, polygon) => {
    let { x: front, y: back } = CSGPolygon_split(node, polygon);
    if (!front && !back) {
      if (polygonPlaneFlipped * vec3_dot(node, bnode) > 0)
        front = polygon;
      else
        back = polygon;
    }
    if (front) {
      if (node.$front)
        recursion(node.$front, front);
      else
        result.push(front);
    }
    if (back && node.$back)
      recursion(node.$back, back);
  };
  for (const polygon of bnode.$polygon)
    recursion(anode, polygon);
  return result;
};
const csg_tree_each = (node, fn) => node && (fn(node), csg_tree_each(node.$front, fn), csg_tree_each(node.$back, fn));
const csg_tree_flip = (root) => {
  csg_tree_each(root, (node) => {
    const back = node.$back;
    node.$back = node.$front;
    node.$front = back;
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    for (const polygon of node.$polygon)
      polygon.$flipped = !polygon.$flipped;
  });
  return root;
};
const csg_polygons = (tree) => {
  const add = (polygon) => {
    if (polygon.$parent) {
      const found = byParent.get(polygon.$parent);
      if (found) {
        allPolygons.delete(found);
        polygon = add(polygon.$parent);
      } else
        byParent.set(polygon.$parent, polygon);
    }
    return polygon;
  };
  const allPolygons = /* @__PURE__ */ new Map();
  const byParent = /* @__PURE__ */ new Map();
  csg_tree_each(tree, (node) => {
    for (const polygon of node.$polygon)
      allPolygons.set(add(polygon), polygon.$flipped);
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
const csg_tree = (n) => n.length ? n.reduce((prev, $polygon) => csg_tree_addPolygon(prev, {
  $polygon,
  $flipped: 0,
  $parent: 0
}), 0) : n;
const csg_union = (...inputs) => inputs.reduce((a, b) => {
  const polygonsToAdd = [];
  a = csg_tree(a);
  if (b) {
    b = csg_tree(b);
    csg_tree_each(a, (node) => node.$polygon = csg_tree_clipNode(b, node, 1));
    csg_tree_each(b, (node) => polygonsToAdd.push([
      node,
      csg_tree_clipNode(a, node, -1)
    ]));
    for (const [plane, polygons] of polygonsToAdd)
      for (const pp of polygons)
        csg_tree_addPolygon(a, pp, plane);
  }
  return a;
});
const csg_polygons_subtract = (a, ...b) => csg_polygons(csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b)));
let _globalTime;
let mainMenuVisible;
let gameTimeDelta = 0;
let gameTime = 0;
let absoluteTime = 0;
const GAME_TIME_MAX_DELTA_TIME = 0.055;
const damp = NO_INLINE((speed) => 1 - /* @__PURE__ */ Math.exp(-gameTimeDelta * speed));
const lerpDamp = NO_INLINE((from, to, speed) => lerp(from, to, damp(speed)));
const setMainMenuVisible = (visible) => mainMenuVisible = visible;
const gameTimeUpdate = (time) => {
  const dt = (time - (_globalTime || time)) / 1e3;
  absoluteTime += dt;
  gameTime += gameTimeDelta = mainMenuVisible ? 0 : min(GAME_TIME_MAX_DELTA_TIME, dt);
  _globalTime = time;
};
const setGameTime = (value) => {
  gameTime = value;
};
const GAMEPAD_BUTTON_B = 0;
const GAMEPAD_BUTTON_A = 1;
const GAMEPAD_BUTTON_Y = 2;
const GAMEPAD_BUTTON_X = 3;
const GAMEPAD_BUTTON_START = 9;
const GAMEPAD_BUTTON_UP = 12;
const GAMEPAD_BUTTON_DOWN = 13;
const GAMEPAD_BUTTON_LEFT = 14;
const GAMEPAD_BUTTON_RIGHT = 15;
const loadStep = (fn) => setTimeout(() => {
  h4.innerHTML += ".";
  fn();
}, 5);
let audioBuffer;
const loadSong = NO_INLINE((done) => {
  let pendingChannels = 0;
  const song_endPattern = 11;
  const song_patternLen = 32;
  const song_rowLen2 = 3891;
  const song_rowLen1 = 4562;
  const song_rowLen0 = 5513;
  const song_patterns = "000001234556112341234556011111111112011111111112000001111112";
  const makeChannel = (OSC1_VOL, OSC1_SEMI, OSC1_XENV, OSC2_VOL, OSC2_SEMI, OSC2_XENV, NOISE_VOL, ENV_ATTACK, ENV_SUSTAIN, ENV_RELEASE, ENV_EXP_DECAY, LFO_FREQ, FX_FREQ, FX_RESONANCE, FX_DRIVE, FX_PAN_AMT, FX_PAN_FREQ, FX_DELAY_AMT, FX_DELAY_TIME, LFO_AMT, COLUMNS, channelIndex = pendingChannels++) => loadStep(() => {
    let mixIndex = 0;
    ENV_RELEASE = ENV_RELEASE ** 2 * 4;
    COLUMNS = COLUMNS.split("+");
    [
      song_rowLen0,
      song_rowLen1,
      song_rowLen2
    ].map((song_rowLen) => {
      let n;
      let t;
      let f;
      let high;
      let filterActive;
      let low = 0;
      let band = 0;
      const noteCache = [];
      const osc_sin = (value) => /* @__PURE__ */ Math.sin(value * Math.PI * 2);
      const createNote = NO_INLINE((note) => {
        let o1t;
        let o2t;
        let c1 = 0;
        let c2 = 0;
        const getnotefreq = (noteFreq) => 0.003959503758 * 2 ** ((noteFreq - 256) / 12);
        const osc_square = (value) => value % 1 < 0.5 ? 1 : -1;
        const osc_saw = (value) => 2 * (value % 1) - 1;
        const osc_tri = (value) => {
          const v2 = value % 1 * 4;
          return v2 < 2 ? v2 - 1 : 3 - v2;
        };
        const noteBuf = new Int32Array(ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE);
        const OSC1_WAVEFORM = channelIndex < 2 ? osc_saw : osc_sin;
        const OSC2_WAVEFORM = channelIndex < 2 ? channelIndex < 1 ? osc_square : osc_tri : osc_sin;
        for (let j1 = 0, j2 = 0; j1 < ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE; ++j1, ++j2) {
          let e = 1;
          if (j1 < ENV_ATTACK)
            e = j1 / ENV_ATTACK;
          else if (j1 >= ENV_ATTACK + ENV_SUSTAIN) {
            e = (j1 - ENV_ATTACK - ENV_SUSTAIN) / ENV_RELEASE;
            e = (1 - e) * 3 ** (-ENV_EXP_DECAY / 16 * e);
          }
          if (j2 >= 0) {
            j2 -= song_rowLen * 4;
            o1t = getnotefreq(note + OSC1_SEMI);
            o2t = getnotefreq(note + OSC2_SEMI) * (channelIndex ? 1 : 1.0072);
          }
          noteBuf[j1] = 80 * (OSC1_WAVEFORM(c1 += o1t * e ** (OSC1_XENV / 32)) * OSC1_VOL + OSC2_WAVEFORM(c2 += o2t * e ** (OSC2_XENV / 32)) * OSC2_VOL + (NOISE_VOL && NOISE_VOL * (2 * /* @__PURE__ */ Math.random() - 1))) * e | 0;
        }
        return noteBuf;
      });
      const chnBuf = new Int32Array(song_rowLen * SONG_WORDS);
      const lfoFreq = 2 ** (LFO_FREQ - 9) / song_rowLen;
      const panFreq = Math.PI * 2 ** (FX_PAN_FREQ - 8) / song_rowLen;
      const dly = FX_DELAY_TIME * song_rowLen & -2;
      for (let p = 0; p <= song_endPattern; ++p)
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
              for (let j = 0, i = rowStartSample * 2; j < noteBuf.length; ++j, i += 2)
                chnBuf[i] += noteBuf[j];
            }
          }
          for (let j = 0, rsample; j < song_rowLen; ++j) {
            let lsample = 0;
            let k = (rowStartSample + j) * 2;
            rsample = chnBuf[k];
            if (rsample || filterActive) {
              f = FX_FREQ * 0.003079991863530159;
              if (channelIndex === 1 || channelIndex === 4)
                f *= osc_sin(lfoFreq * k) * LFO_AMT / 512 + 0.5;
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
      mixIndex += song_rowLen * SONG_WORDS;
    });
    if (!--pendingChannels)
      loadStep(done);
  });
  const SONG_WORDS = song_patternLen * (song_endPattern + 1) * 2;
  const SONG_TOTAL_WORDS = (song_rowLen0 + song_rowLen1 + song_rowLen2) * SONG_WORDS;
  audioBuffer = new AudioBuffer({
    numberOfChannels: 2,
    sampleRate: 44100,
    length: SONG_TOTAL_WORDS / 2
  });
  const mixBufferA = audioBuffer.getChannelData(0);
  const mixBufferB = audioBuffer.getChannelData(1);
  makeChannel(69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U+(059<59<A9<AE<AEHAEHMEHMQMQTY(Y+(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y+(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^+Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]+QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]");
  makeChannel(100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5+-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5+,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5+*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6+5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5+5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5");
  makeChannel(255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, "9(((9(((9(((9(((9(((9(((9(((9+9(((Q(((Q(((Q");
  makeChannel(0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, "9(9(9(9(9(9(9(999(9(9(9(999(9(9+9(9(9(9(9(999(9(((((Q");
  makeChannel(221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, "((((Q(((((((Q(((((((Q(((((((Q+Q((Q((Q((Q((Q((Q((((Q");
});
const code$4 = "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}";
const uniformName_csm_matrices = "i";
const uniformName_csm_texture0 = "g";
const uniformName_csm_texture1 = "h";
const uniformName_groundTexture = "q";
const uniformName_viewPos = "k";
const constDef_CSM_TEXTURE_SIZE = 2048;
const constDef_zNear = 0.3;
const constDef_CSM_PLANE_DISTANCE = 55;
const constDef_zFar = 181;
const fieldOfViewDegrees = 60;
const mat_perspective = (near, far, mx, my) => new DOMMatrix([
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
]);
const zNear = constDef_zNear;
const zFar = constDef_zFar;
const fieldOfViewRadians = fieldOfViewDegrees * Math.PI / 180;
const fieldOfViewAmount = 1 / /* @__PURE__ */ Math.tan(fieldOfViewRadians / 2);
let interact_pressed;
let player_first_person;
let csm_projections;
let projection;
let input_forward = 0;
let input_strafe = 0;
const resetInteractPressed = () => interact_pressed = 0;
const exit_player_first_person = () => player_first_person = 0;
let page_update = () => {
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
  let touch_movementX;
  let touch_movementY;
  let gamepadInteractPressed;
  let audioContext;
  let songAudioSource;
  let music_on = true;
  const KEY_INTERACT = 0;
  const KEY_MENU = 1;
  const KEY_LEFT = 2;
  const KEY_RIGHT = 3;
  const KEY_FRONT = 4;
  const KEY_BACK = 5;
  const TOUCH_SIZE = 19;
  const TOUCH_MOVE_SNAP = 0.2;
  const TOUCH_MOVE_THRESHOLD = 0.3;
  const keyboard_downKeys = [];
  const updateMusicOnState = () => {
    b4.innerHTML = "Music: " + music_on;
    if (songAudioSource) {
      if (mainMenuVisible || !music_on)
        songAudioSource.disconnect();
      else
        songAudioSource.connect(audioContext.destination);
    }
  };
  const handleResize = () => {
    const mx = fieldOfViewAmount * ((hC.height = innerHeight) / (hC.width = innerWidth));
    projection = mat_perspective(zNear, zFar, mx, fieldOfViewAmount);
    csm_projections = [
      mat_perspective(zNear, constDef_CSM_PLANE_DISTANCE, mx, fieldOfViewAmount),
      mat_perspective(constDef_CSM_PLANE_DISTANCE, zFar, mx, fieldOfViewAmount)
    ];
    touchPosIdentifier = touchRotIdentifier = void 0;
    keyboard_downKeys.length = interact_pressed = gamepadInteractPressed = touch_movementX = touch_movementY = input_forward = input_strafe = 0;
    if (document.hidden && true)
      mainMenu(true);
  };
  const mainMenu = (value) => {
    if (mainMenuVisible !== value) {
      setMainMenuVisible(value);
      handleResize();
      hB.className = value ? "l m" : "l";
      updateMusicOnState();
      if (value)
        try {
          document.exitFullscreen().catch(() => false);
          document.exitPointerLock();
        } catch {
        }
    }
  };
  const start = (firstPerson) => {
    try {
      if (!audioContext) {
        audioContext = new AudioContext();
        songAudioSource = audioContext.createBufferSource();
        songAudioSource.buffer = audioBuffer;
        songAudioSource.loop = true;
        songAudioSource.start();
      }
      hB.requestFullscreen().catch(() => false);
    } catch {
    }
    mainMenu(false);
    player_first_person = firstPerson;
  };
  const getGamepadButtonState = (gamepad, index) => gamepad.buttons[index]?.pressed || gamepad.buttons[index]?.value > 0 ? 1 : 0;
  oncontextmenu = () => false;
  onclick = (e) => {
    if (!mainMenuVisible) {
      if (e.target === hC)
        interact_pressed = 1;
      if (player_first_person)
        try {
          hC.requestPointerLock();
        } catch {
        }
    }
  };
  b5.onclick = () => mainMenu(true);
  b2.onclick = () => start(1);
  b1.onclick = () => start();
  b4.onclick = () => {
    music_on = !music_on;
    updateMusicOnState();
  };
  b3.onclick = () => {
    if (confirm("Restart game?"))
      resetGame();
  };
  onkeyup = onkeydown = (e) => {
    if (!e.repeat) {
      const pressed = !!e.type[5] && true;
      const mapped = {
        ["KeyE"]: KEY_INTERACT,
        ["Space"]: KEY_INTERACT,
        ["Enter"]: KEY_INTERACT,
        ["Escape"]: KEY_MENU,
        ["KeyA"]: KEY_LEFT,
        ["ArrowLeft"]: KEY_LEFT,
        ["KeyD"]: KEY_RIGHT,
        ["ArrowRight"]: KEY_RIGHT,
        ["KeyW"]: KEY_FRONT,
        ["ArrowUp"]: KEY_FRONT,
        ["KeyS"]: KEY_BACK,
        ["ArrowDown"]: KEY_BACK
      }[e.code];
      keyboard_downKeys[mapped] = pressed;
      if (pressed) {
        if (mapped === KEY_INTERACT)
          interact_pressed = 1;
        if (mapped === KEY_MENU)
          mainMenu(true);
      }
    }
  };
  onmousemove = (e) => {
    if (player_first_person) {
      camera_rotation.y += 0.1 * e.movementX || 0;
      camera_rotation.x += 0.1 * e.movementY || 0;
    }
  };
  hC.ontouchstart = (e) => {
    if (!mainMenuVisible) {
      for (const { identifier, pageX, pageY } of e.changedTouches) {
        if (player_first_person && pageX > hC.clientWidth / 2) {
          if (touchRotIdentifier === void 0) {
            touchRotMoved = 0;
            touchRotX = pageX;
            touchRotY = pageY;
            touchRotIdentifier = identifier;
            touchStartCameraRotY = camera_rotation.x;
            touchStartCameraRotX = camera_rotation.y;
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
    if (!mainMenuVisible)
      for (const { identifier, pageX, pageY } of e.changedTouches) {
        if (touchRotIdentifier === identifier) {
          touchRotMoved = 1;
          camera_rotation.x = touchStartCameraRotY + (pageY - touchRotY) / 2;
          camera_rotation.y = touchStartCameraRotX + (pageX - touchRotX) / 2;
        }
        if (touchPosIdentifier === identifier) {
          const deltaX = (touchPosStartX - pageX) / TOUCH_SIZE;
          const absDeltaX = abs(deltaX);
          const deltaY = (touchPosStartY - pageY) / TOUCH_SIZE;
          const absDeltaY = abs(deltaY);
          const m = max(absDeltaX, absDeltaY) > TOUCH_MOVE_THRESHOLD;
          if (m)
            touchPosMoved = 1;
          touch_movementX = clamp(deltaX, -1) * (m && absDeltaX > TOUCH_MOVE_SNAP);
          touch_movementY = clamp(deltaY, -1) * (m && absDeltaY > TOUCH_MOVE_SNAP);
          if (absDeltaX > 2)
            touchPosStartX = TOUCH_SIZE * (deltaX < 0 ? -1 : 1) + pageX;
          if (absDeltaY > 2)
            touchPosStartY = TOUCH_SIZE * (deltaY < 0 ? -1 : 1) + pageY;
        }
      }
  };
  hC.ontouchend = (e) => {
    let click;
    if (document.activeElement === hB)
      e.preventDefault();
    for (const touch of e.changedTouches) {
      if (touch.identifier === touchRotIdentifier) {
        touchRotIdentifier = void 0;
        if (!touchRotMoved)
          click = 1;
        touchRotMoved = 0;
      } else if (touch.identifier === touchPosIdentifier) {
        touchPosIdentifier = void 0;
        touch_movementY = touch_movementX = 0;
        if (!touchPosMoved)
          click = 1;
        touchPosMoved = 0;
      } else
        click = 1;
    }
    if (e.target === hC && click && touchStartTime) {
      const diff = absoluteTime - touchStartTime;
      if (diff > 0.02 && diff < 0.7)
        interact_pressed = 1;
    }
  };
  page_update = () => {
    input_forward = touch_movementY + (keyboard_downKeys[KEY_FRONT] ? 1 : 0) - (keyboard_downKeys[KEY_BACK] ? 1 : 0);
    input_strafe = touch_movementX + (keyboard_downKeys[KEY_LEFT] ? 1 : 0) - (keyboard_downKeys[KEY_RIGHT] ? 1 : 0);
    const gamepad = navigator.getGamepads()[0];
    if (gamepad) {
      if (player_first_person) {
        camera_rotation.x += 80 * gameTimeDelta * threshold(gamepad.axes[3], 0.3);
        camera_rotation.y += 80 * gameTimeDelta * threshold(gamepad.axes[2], 0.3);
      }
      input_forward += getGamepadButtonState(gamepad, GAMEPAD_BUTTON_UP) - getGamepadButtonState(gamepad, GAMEPAD_BUTTON_DOWN) - threshold(gamepad.axes[1], 0.2);
      input_strafe += getGamepadButtonState(gamepad, GAMEPAD_BUTTON_LEFT) - getGamepadButtonState(gamepad, GAMEPAD_BUTTON_RIGHT) - threshold(gamepad.axes[0], 0.2);
      if (getGamepadButtonState(gamepad, GAMEPAD_BUTTON_START))
        mainMenu(true);
      const interactButtonPressed = getGamepadButtonState(gamepad, GAMEPAD_BUTTON_X) || getGamepadButtonState(gamepad, GAMEPAD_BUTTON_Y) || getGamepadButtonState(gamepad, GAMEPAD_BUTTON_A) || getGamepadButtonState(gamepad, GAMEPAD_BUTTON_B);
      if (interactButtonPressed && !gamepadInteractPressed)
        interact_pressed = 1;
      gamepadInteractPressed = interactButtonPressed;
    }
  };
  document.onpointerlockchange = () => {
    player_first_person = !!document.pointerLockElement;
  };
  document.onvisibilitychange = onblur = onresize = handleResize;
  mainMenu(true);
};
const LEVER_ID_GATE0 = 0;
const LEVER_ID_LEVEL1_DESCENT = 1;
const LEVER_ID_ROTATING_CORRIDOR = 2;
const LEVER_ID_CRYSTALS = 3;
const LEVER_ID_MONUMENT = 4;
const LEVER_ID_DETOUR = 5;
const LEVER_ID_BEFORE_PUSHING_RODS = 6;
const LEVER_ID_AFTER_PUSHING_RODS = 7;
const LEVER_ID_AFTER_ROTATING_PLATFORMS = 8;
const LEVER_ID_AFTER_JUMPING_PADS = 9;
const LEVER_ID_GATE1 = 10;
const LEVER_ID_TRIANGLE_PLATFORM = 11;
const LEVER_ID_FLOATING_ELEVATOR = 12;
const LEVER_ID_DONUT_PAD = 13;
const LEVER_ID_BOAT0 = 14;
const LEVER_ID_BOAT1 = 15;
const MODEL_ID_STATIC_WORLD = 1;
const MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR = 28;
const MODEL_ID_ROTATING_PLATFORM0 = 31;
const MODEL_ID_BOAT0 = 35;
const MODEL_ID_PLAYER_BODY = 53;
const MODEL_ID_PLAYER_LEG0 = 54;
const MODEL_ID_PLAYER_LEG1 = 55;
const MODEL_ID_SOUL_COLLISION = 56;
const MODEL_ID_SOUL = 57;
let souls_collected_count;
let game_completed;
let firstBoatLerp;
let secondBoatLerp;
let _messageEndTime = 0.1;
const LOCAL_STORAGE_SAVED_GAME_KEY = "Dante-22";
const camera_rotation = {
  x: 0,
  y: 180
};
const player_position_final = {
  x: 0,
  y: 0,
  z: 0
};
const worldStateUpdate = () => {
  secondBoatLerp = lerpDamp(secondBoatLerp, levers[LEVER_ID_BOAT1].$lerpValue2, 0.2 + 0.3 * abs(levers[LEVER_ID_BOAT1].$lerpValue2 * 2 - 1));
  if (game_completed) {
    exit_player_first_person();
    firstBoatLerp = lerpDamp(firstBoatLerp, -9, 0.015);
  } else
    firstBoatLerp = lerpDamp(firstBoatLerp, clamp(gameTime / 3), 1);
  if (_messageEndTime && gameTime > _messageEndTime) {
    _messageEndTime = 0;
    h4.innerHTML = "";
  }
};
const showMessage = (message, duration) => {
  if (_messageEndTime < Infinity) {
    _messageEndTime = gameTime + duration;
    h4.innerHTML = message;
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
    "XIII"
  ][souls_collected_count = souls.reduce((acc, v) => v.$value + acc, 0)] + " / XIII";
};
const loadGame = () => {
  let _savedLevers = [];
  let _savedSouls = [];
  try {
    const [savedLevers, savedSouls, savedLastPulledLever, savedSecondBoatLerp, savedGameTime] = JSON.parse(localStorage[LOCAL_STORAGE_SAVED_GAME_KEY]);
    _savedLevers = savedLevers;
    _savedSouls = savedSouls;
    player_last_pulled_lever = savedLastPulledLever;
    secondBoatLerp = savedSecondBoatLerp;
    setGameTime(savedGameTime);
  } catch (e) {
  }
  levers.map((lever, index) => lever.$lerpValue = lever.$lerpValue2 = lever.$value = index !== LEVER_ID_BOAT0 && _savedLevers[index] ? 1 : 0);
  souls.map((soul, index) => soul.$value = _savedSouls[index] ? 1 : 0);
  updateCollectedSoulsCounter();
  firstBoatLerp = souls_collected_count || player_last_pulled_lever !== LEVER_ID_BOAT0 ? 1 : 0;
};
const resetGame = () => {
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
  location.reload();
};
const saveGame = () => {
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
    levers.map((v) => v.$value),
    souls.map((v) => v.$value),
    player_last_pulled_lever,
    secondBoatLerp,
    gameTime
  ]);
};
const onSoulCollected = () => {
  showMessage([
    ,
    "Mark Zuckemberg<br>made the world worse",
    "Giorgia Meloni<br>fascist",
    "Andrzej Mazur<br>for the js13k competition",
    "Donald Trump<br>lies",
    "Kim Jong-un<br>Dictator, liked pineapple on pizza",
    "Maxime Euziere<br>forced me to finish this game",
    "She traded NFTs apes",
    ,
    "Vladimir Putin<br>evil war",
    "He was not a good person",
    ,
    "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat"
  ][souls_collected_count] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 6);
  updateCollectedSoulsCounter();
  saveGame();
};
const onPlayerPullLever = (leverIndex) => {
  player_last_pulled_lever = leverIndex;
  showMessage("* click *", 1);
  saveGame();
};
const onFirstBoatLeverPulled = () => {
  if (souls_collected_count < SOULS_COUNT)
    showMessage("Not leaving now, there are souls to catch!", 3);
  else if (!game_completed) {
    game_completed = 1;
    showMessage("Well done. They will be punished.<br>Thanks for playing", Infinity);
  }
};
let player_last_pulled_lever = LEVER_ID_BOAT0;
const transformsBuffer = new Float32Array(4 * (4 * (MODELS_WITH_FULL_TRANSFORM + SOULS_COUNT) + MODELS_WITH_SIMPLE_TRANSFORM));
const distanceToPlayer = () => {
  matrixTransformPoint();
  return hypot(player_position_final.x - matrixTransformPoint.x, player_position_final.y - matrixTransformPoint.y, player_position_final.z - matrixTransformPoint.z);
};
let currentModelMmatrix;
let currentModelPolygons;
const SOUL_SENSITIVITY_RADIUS = 1.6;
const newModel = (name) => {
  allModels.push({
    $matrix: currentModelMmatrix = new DOMMatrix(),
    $polygon: currentModelPolygons = []
  });
};
const meshAdd = (polygons, transform = identity, color) => currentModelPolygons.push(polygons_transform(polygons, transform, color));
const newSoul = (transform, ...walkingPath) => {
  let lookAngle;
  let prevX;
  let prevZ;
  let velocity;
  let dirZ = 0;
  let randAngle = 0;
  let wasInside = 1;
  let dirX = -1;
  const soul = () => {
    if (soul.$value)
      matrixCopy(allModels[MODEL_ID_BOAT0].$matrix).translateSelf(1.2 * (index % 4) - 1.7 + /* @__PURE__ */ Math.sin(gameTime + index) / 7, -2, -5.5 + (index >> 2) * 1.7 + abs(index % 4 - 2) + /* @__PURE__ */ Math.cos(gameTime / 1.5 + index) / 6);
    else {
      let isInside;
      let contextualVelocity = 1;
      let mindist = Infinity;
      for (let i = 0; i < walkingPath.length; i++) {
        const c = walkingPath[i];
        const distance = hypot(targetX - c[0], targetZ - c[1]);
        contextualVelocity = min(contextualVelocity, distance / c[2]);
        const circleSDF = distance - c[2];
        if (circleSDF < 0)
          isInside = 1;
        else if (circleSDF < mindist) {
          mindist = circleSDF;
          circle = c;
        }
      }
      if (!isInside) {
        const ax = targetX - circle[0];
        const az = targetZ - circle[1];
        let magnitude = hypot(ax, az);
        let angle = /* @__PURE__ */ Math.atan2(-az, ax);
        if (wasInside) {
          velocity = clamp(velocity / (1 + /* @__PURE__ */ Math.random()));
          randAngle = (/* @__PURE__ */ Math.random() - 0.5) * Math.PI / 2;
        }
        angle += randAngle;
        dirX = -/* @__PURE__ */ Math.cos(angle);
        dirZ = /* @__PURE__ */ Math.sin(angle);
        if (magnitude > 0.1) {
          magnitude = min(magnitude, circle[2]) / magnitude;
          targetX = ax * magnitude + circle[0];
          targetZ = az * magnitude + circle[1];
        }
      }
      wasInside = isInside;
      velocity = lerpDamp(velocity, 3 + 6 * (1 - contextualVelocity), 3 + contextualVelocity);
      soulX = lerpDamp(soulX, targetX = lerpDamp(targetX, targetX + dirX, velocity), velocity);
      soulZ = lerpDamp(soulZ, targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity), velocity);
      lookAngle = angle_lerp_degrees(lookAngle, /* @__PURE__ */ Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180, damp(3));
      matrixCopy(parentModelMatrix).multiplySelf(transform).translateSelf(prevX = soulX, 0, prevZ = soulZ).rotateSelf(0, lookAngle, 7 * /* @__PURE__ */ Math.sin(gameTime * 1.7));
      if (distanceToPlayer() < SOUL_SENSITIVITY_RADIUS) {
        soul.$value = 1;
        onSoulCollected();
      }
    }
    matrixToArray(tempMatrix, transformsBuffer, MODELS_WITH_FULL_TRANSFORM + index);
  };
  let circle = walkingPath[0];
  let [targetX, targetZ] = circle;
  let [soulX, soulZ] = circle;
  const parentModelMatrix = currentModelMmatrix;
  const index = souls.length;
  souls.push(soul);
};
const build_life_the_universe_and_everything = () => {
  const HORN_STACKS = 11;
  const GHOST_STACKS = 22;
  const GHOST_SLICES = 28;
  const pushingRodsPositions = [
    -110,
    -100,
    -92,
    -82,
    -106,
    -97,
    -88
  ];
  const hornMatrix = (i) => {
    i /= HORN_STACKS;
    return translation(/* @__PURE__ */ Math.sin(i * Math.PI), i).rotateSelf(10 * i).scaleSelf(1.002 - i, 1, 1.002 - i);
  };
  const newLever = ($transform, name) => {
    levers.push({
      $matrix: currentModelMmatrix,
      $transform
    });
    meshAdd(cylinder(5), $transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
    meshAdd(cylinder(5), $transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
    meshAdd(cylinder().slice(0, -1), $transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
  };
  const makeBigArc = (height) => csg_polygons_subtract(polygons_transform(cylinder().slice(0, -1), translation(0, -height / 2).scale(6, height - 1, 2.2)), polygons_transform(cylinder().slice(0, -1), translation(0, -height / 2 - 4).scale(4, height - 5, 4)), polygons_transform(cylinder(28, 1), translation(0, height / 2 - 9).rotate(90, 0, 90).scale3d(4)));
  const elevatorsMatrix = (x) => translation(x - 76.9, x / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3);
  const pushingRod = csg_polygons_subtract(polygons_transform(cylinder(), translation(0, -0.5, 1).scale(1.15, 1.2, 6.5), material(0.25, 0.25, 0.35, 0.3)), csg_polygons_subtract(polygons_transform(cylinder(3), translation(0, 0, -5.5).scale(3, 2), material(0.6, 0.3, 0.4, 0.3)), polygons_transform(cylinder(), translation(0, 0, -3.65).scale(2.5, 3), material(0.6, 0.3, 0.4, 0.3))), ...[
    -1,
    1
  ].map((i) => polygons_transform(cylinder(), translation(i * 1.2, -0.5, 1).scale(0.14, 0.3, 6.5), material(0.7, 0.2, 0, 0.3))));
  const hexCorridor = [
    polygons_transform(cylinder(), translation(0, -3).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
    polygons_transform(cylinder(), translation(0, -2.2).scale(7.7, 0.5, 4), material(0.5, 0.5, 0.5, 0.2)),
    integers_map(12, (i) => polygons_transform(cylinder(), translation(i - 5.5, 4.4).scale(0.1, 0.1, 2), material(0.6, 0.5, 0.3, 0.2))).flat(),
    polygons_transform(csg_polygons_subtract(polygons_transform(cylinder(6), identity.rotate(90).scale(6, 8, 6)), polygons_transform(cylinder(4, 0, 0.01), translation(0, 6).scale(12, 2, 0.75).rotate(0, 45)), polygons_transform(cylinder(6), identity.rotate(90).scale(5, 12, 5)), ...[
      -5,
      0,
      5
    ].map((x) => polygons_transform(cylinder(5), translation(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8)))), identity, material(0.3, 0.6, 0.6, 0.3))
  ].flat();
  const hornPolygons = integers_map(HORN_STACKS, (i) => cylinder_sides(polygon_transform(polygon_regular(16), hornMatrix(i), material(1, 1, 0.8, 0.2)).reverse(), polygon_transform(polygon_regular(16), hornMatrix(i + 1), material(1, 1, 0.8, 0.2)), 1)).flat();
  newModel();
  meshAdd([
    GQuad.slice(1)
  ], translation(-2).scale3d(3).rotate(90, 0));
  newModel();
  newLever(translation(-5.4, 1.5, -19).rotate(0, -90));
  [
    -15,
    15
  ].map((z, j) => {
    meshAdd(cylinder(), translation(0, 0, j ? 22 : -23).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2));
    meshAdd(cylinder(), translation(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4));
    meshAdd(cylinder().slice(0, -1), translation(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3));
  });
  meshAdd(cylinder(), translation(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), material(0.8, 0.8, 0.8, 0.2));
  meshAdd(cylinder(), translation(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2));
  meshAdd(cylinder(5), translation(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), material(0.6, 0.3, 0.3, 0.4));
  meshAdd(cylinder(), translation(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), material(0.75, 0.75, 0.75, 0.2));
  meshAdd(csg_polygons_subtract(csg_union(csg_polygons_subtract(polygons_transform(cylinder(6, 0, 0, 0.3), translation(0, -0.92).scale(13, 2, 13), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(), identity.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), material(0.5, 0.5, 0.5, 0.5))), polygons_transform(cylinder(), identity.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), material(0.8, 0.2, 0.2, 0.5)), polygons_transform(cylinder(6), translation(0, -8).scale(9, 8, 7), material(0.2, 0.1, 0.4, 0.5)), polygons_transform(cylinder(6, 0, 0, 0.3), translation(8, -4, -4).scale(14, 2, 13), material(0.7, 0.7, 0.7, 0.2))), polygons_transform(cylinder(6), translation(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), material(0.5, 0.5, 0.5, 0.5)), polygons_transform(cylinder(5, 0, 1.5), translation(0, 1).scale(4.5, 0.3, 4.5), material(0.7, 0.5, 0.9, 0.2)), polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5))));
  newLever(translation(15.8, -2, 3.8));
  meshAdd(cylinder(), translation(-21.1 + 2.45, -3, 55).scale(2.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
  newLever(translation(-55, -1.1, 46).rotate(0, 90));
  meshAdd(cylinder(7), translation(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3));
  meshAdd(cylinder(6), translation(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3));
  meshAdd(hexCorridor, translation(-53, 0, 55));
  meshAdd(cylinder(), translation(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), material(0.7, 0.7, 0.7, 0.2));
  meshAdd(cylinder(3, 0, -0.5), translation(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), material(0.8, 0.8, 0.8, 0.2));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(), translation(-100, 1, 63).scale(7.5, 4), material(0.5, 0.5, 0.5, 0.4)), polygons_transform(cylinder(), translation(-100, 0, 63).scale(2, 2, 4), material(0.5, 0.5, 0.5, 0.4)), polygons_transform(cylinder(20, 1), translation(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), material(0.5, 0.5, 0.5, 0.4))));
  meshAdd(csg_polygons_subtract(csg_union(polygons_transform(cylinder(), translation(-100, -2.6, 70).scale(3, 1.1, 7), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(), translation(-100, -2.4, 55).scale(8, 0.9, 8), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(), translation(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(6), translation(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), material(0.6, 0.6, 0.6, 0.3)), polygons_transform(cylinder(), translation(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(), translation(-100, 0.42, 92).scale(3, 1.1, 4.1), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(), translation(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), material(0.8, 0.8, 0.8, 0.2))), polygons_transform(cylinder(8), translation(-100, -1, 55).scale(7, 0.9, 7), material(0.3, 0.3, 0.3, 0.4)), polygons_transform(cylinder(8), translation(-100, -2, 55).scale(4, 0.3, 4), material(0.4, 0.4, 0.4, 0.5)), polygons_transform(cylinder(8, 0, -3.1), translation(-100, -3, 55).scale(0.4, 1, 0.4), material(0.4, 0.4, 0.4, 0.5))));
  GQuad.map(({ x, z }) => {
    meshAdd(cylinder(6), translation(x * 3, 3, z * 15).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4));
    meshAdd(cylinder(6), translation(-100 + x * 7, -3, z * 7 + 55).scale(1, 8.1), material(0.6, 0.15, 0.15, 0.8));
    [
      4,
      -0.4
    ].map((i) => meshAdd(cylinder(6), translation(-100 + x * 7, i, z * 7 + 55).scale(1.3, 0.5, 1.3), material(0.4, 0.2, 0.2, 0.8)));
    [
      1.5,
      8
    ].map((y) => meshAdd(cylinder(15, 1), translation(x * 9 - 38.9, y - 11.3, z * 11 + 17).scale(1.5, 0.5, 1.5), material(0.6, 0.6, 0.6, 0.3)));
    meshAdd(cylinder(14, 1).slice(0, -2), translation(x * 9 - 38.9, -18, z * 11 + 17).scale(1, 14.2), material(0.25, 0.25, 0.25, 1));
  });
  integers_map(7, (i) => {
    meshAdd(cylinder((i * 23 + 1) % 5 + 5, 0, 0.5), translation(-101 + /* @__PURE__ */ Math.sin(i) * 5 + i, -2.3 - i, 44.9 - i * 2.8).scaleSelf(5 + i / 2, 1.1 + i / 6, 5 + i / 3), material(0.5 - i / 17, 0.5 - (i & 1) / 9, 0.6, 0.3));
  });
  meshAdd(cylinder(), translation(-87, -9.5, 24).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4));
  meshAdd(cylinder(4), translation(-86, -9.2, 27).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3));
  meshAdd(cylinder(12, 1), translation(-86, -9, 31).scale(1.5, 1, 1.5), material(0.3, 0.3, 0.4, 0.1));
  newLever(translation(-86, -7.5, 31));
  meshAdd(cylinder(5), translation(-38.9, -11.1, 10).scale(2, 1.2, 2), material(0.2, 0.4, 0.7, 0.3));
  meshAdd(csg_polygons_subtract(csg_union(polygons_transform(cylinder(), translation(-38.9, -11.3, 17).scale(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)), polygons_transform(cylinder(5), translation(-38.9, -11.1, 17).scale(9, 1, 9), material(0, 0.2, 0.3, 0.5))), polygons_transform(cylinder(5), translation(-38.9, -11.1, 17).scale3d(5.4), material(0, 0.2, 0.3, 0.5))));
  newLever(translation(-38.9, -9.4, 10));
  meshAdd(csg_polygons_subtract(csg_union(polygons_transform(cylinder(6), translation(0, 0, -18).scale(15, 1.3, 15), material(0.7, 0.7, 0.7, 0.3)), polygons_transform(cylinder(5), identity.scale(4.5, 1.2, 9), material(0.45, 0.4, 0.6, 0.3))), ...integers_map(6, (z) => integers_map(6, (x) => polygons_transform(cylinder(6), translation(4.6 * x - (z & 1 ? 10 : 12), 0, 4.6 * z + 2 * /* @__PURE__ */ Math.sin(x * 4) - 32).scale3d(2), material(0.7, 0.7, 0.7, 0.3)))).flat()), translation(-38.9, -11.3, -1));
  newLever(translation(-84, -0.7, 85).rotate(0, 45));
  meshAdd(cylinder(5), translation(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), material(0.8, 0.1, 0.25, 0.4));
  newLever(translation(-116, -1.4, -18).rotate(0, 180));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(), translation(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...pushingRodsPositions.map((x) => polygons_transform(cylinder(), translation(x, 0.05, -3).scale(1.35, 2, 9)))), identity, material(0.5, 0.5, 0.6, 0.2));
  meshAdd(cylinder(), translation(-96.5, 1, -2).scale(19, 0.3, 0.3), material(0.5, 0.5, 0.6, 0.2));
  meshAdd(cylinder(6), translation(-116, -2.6, -16.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2));
  meshAdd(cylinder(), translation(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), material(0.8, 0.8, 0.8, 0.2));
  meshAdd(cylinder().slice(0, -1), translation(-115.5, -17, -12).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3));
  meshAdd(cylinder(8).slice(0, -2), translation(-114, -17, -2).scale(2, 15, 2), material(0.6, 0.6, 0.6, 0.3));
  meshAdd(cylinder(8).slice(0, -2), translation(-79, -17, -2).scale(2, 15, 2), material(1, 1, 1, 0.3));
  meshAdd(cylinder().slice(0, -1), translation(-77, -17, -50.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(12).slice(0, -1), translation(-77, -14.5, -12).scale(4, 17.5, 4), material(0.7, 0.7, 0.7, 0.2)), polygons_transform(cylinder(12), translation(-77, 3.1, -12).scale(3, 5, 3), material(0.4, 0.5, 0.6, 0.2)), polygons_transform(cylinder(), translation(-79, 0.1, -12).scale(3.5, 2, 1.3), material(0.4, 0.5, 0.6, 0.2)), polygons_transform(cylinder(), translation(-77, 0.1, -14).scale(1.5, 2, 2), material(0.4, 0.5, 0.6, 0.2))));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(), translation(-93, -5.8, -40).scale(9, 1, 5), material(0.8, 0.8, 0.8, 0.1)), polygons_transform(cylinder(9), translation(-98, -5.8, -40).scale(3, 8, 3), material(0.7, 0.7, 0.7, 0.2))));
  meshAdd(cylinder(), translation(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), material(0.6, 0.6, 0.6, 0.3));
  meshAdd(cylinder(9).slice(0, -1), translation(-98, -18.4, -40).scale(2.5, 13.5, 2.5), material(0.5, 0.5, 0.5, 0.3));
  newLever(translation(-98, -4.4, -40).rotate(0, 90));
  [
    -1,
    1
  ].map((x, j) => {
    meshAdd(csg_polygons_subtract(polygons_transform(cylinder(), translation(x * -4, 3.5, -0.5).scale(4, 4, 0.7), material(0.5, 0.5, 0.5, 0.4)), polygons_transform(cylinder(5), translation(x * -5.3, 7).rotate(90, 0).scale(1.7, 5, 1.7), material(0.6, 0.24, 0.2, 0.5)), polygons_transform(cylinder(), identity.scale(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)), polygons_transform(cylinder(5), translation(x * -5.3, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), material(0.6, 0.24, 0.2, 0.5)), polygons_transform(cylinder(32, 1), translation(0, 3, -5).scale(3, 4, 10).rotate(90, 0), material(0.6, 0.24, 0.2, 0.5))), translation(x - 100, 0.7, 97));
    meshAdd(cylinder(12, 1), translation(-7.5 * x - 100, 3.7, 96).scale(0.8, 4, 0.8), material(0.6, 0.24, 0.2, 0.5));
    [
      7.2,
      1.5
    ].map((y) => meshAdd(cylinder(15, 1), translation(-7.5 * x - 100, y + 0.7, 96).scale(1.1, 0.5, 1.1), material(0.5, 0.24, 0.2, 0.4)));
    meshAdd(hornPolygons, translation(x * -8, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90));
    meshAdd(hornPolygons, translation(x * -5 - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * x - 90));
    integers_map(5, (i) => meshAdd(hornPolygons, translation((j - 0.5) * 18.5, 0, i * 4.8 - 9.5).rotate(0, 180 - j * 180).scale(1.2, 10, 1.2)));
  });
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(), translation(-82.07, 0.8, 106).scale(11, 0.9, 2.2), material(0.7, 0.7, 0.7, 0.1)), polygons_transform(cylinder(45, 1), translation(-81, 0.7, 106).scale3d(7.7), material(0.7, 0.7, 0.7, 0.1))));
  meshAdd(cylinder(), translation(-50.7, 1, 99).scale(2, 0.65, 1), material(0.7, 0.7, 0.7, 0.2));
  meshAdd(cylinder(), translation(-58, 1, 106).scale(2, 0.65, 2), material(0.7, 0.7, 0.7, 0.2));
  meshAdd(cylinder(), translation(-34.2, 0.4, 91).scale(3, 1, 3), material(0.7, 0.7, 0.7, 0.3));
  meshAdd(cylinder(), translation(-42, 0.4, 91).scale(5, 1, 2.5), material(0.7, 0.7, 0.7, 0.3));
  meshAdd(cylinder(5), translation(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), material(0.2, 0.5, 0.5, 0.6));
  newLever(translation(-34, 2.7, 96).rotate(-12, 0));
  meshAdd(csg_polygons_subtract(csg_union(polygons_transform(cylinder(), translation(-101.5, 0.7, 93.5).scale(10.5, 1, 2), material(0.7, 0.7, 0.7, 0.2)), polygons_transform(cylinder(6, 0, 0, 0.6), translation(-100, 0.7, 105.5).scale(8, 1, 11), material(0.7, 0.7, 0.7, 0.2))), polygons_transform(cylinder(5), translation(-100, 0.7, 113).scale(4, 3, 4), material(0.7, 0.7, 0.7, 0.2))));
  integers_map(3, (i) => {
    meshAdd(makeBigArc(16), translation(-77, -9, i * -12 - 8 - 12).rotate(0, 90), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(makeBigArc(16), translation(i * 12 - 109, -9, -12), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(makeBigArc(24.7 - 0.7 * (i & 1)), translation(6 * i - 6, 4 - (i & 1), 111 - 0.2 * (i & 1)), i & 1 ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5));
  });
  meshAdd(csg_polygons_subtract(csg_union(polygons_transform(cylinder(), translation(0, 16, 111).scale(3, 1, 3.8), material(0.5, 0.3, 0.3, 0.4)), polygons_transform(cylinder(6, 0, 0, 0.3), translation(0, -0.92, 95).scale(14, 2, 14), material(0.8, 0.8, 0.8, 0.2)), polygons_transform(cylinder(), translation(0, 16, 110.5).scale(12, 1, 3), material(0.5, 0.3, 0.3, 0.4))), polygons_transform(cylinder(5), translation(0, 0, 95).scale3d(6), material(0.3, 0.3, 0.3, 0.5)), polygons_transform(cylinder(5), translation(0, 16, 103.5).scale(5.5, 5, 5.5), material(0.5, 0.3, 0.3, 0.4))));
  newLever(translation(0, 1.7, 82).rotate(0, 180));
  meshAdd(cylinder(5).slice(0, -1), translation(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), material(0.5, 0.3, 0.3, 0.4));
  meshAdd(cylinder(6), translation(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), material(0.5, 0.6, 0.7, 0.3));
  meshAdd(cylinder(), translation(0, 16, 127.8).scale(1.5, 1, 0.7), material(0.5, 0.6, 0.7, 0.3));
  meshAdd(cylinder(7), translation(0, 15.1, 133).scale(5, 2, 5), material(0.4, 0.5, 0.6, 0.4));
  newSoul(translation(-0.5, 2.8, -20), [
    0,
    0,
    2.5
  ], [
    0,
    -3,
    2.5
  ]);
  newSoul(translation(0, 2.8), [
    5,
    10,
    3
  ], [
    -5,
    10,
    3
  ], ...polygon_regular(18).map(({ x, z }) => [
    x * 7,
    z * 10,
    4.5 - abs(x) * 2
  ]));
  newSoul(translation(0, 3, 95), ...polygon_regular(9).map(({ x, z }) => [
    x * 9,
    z * 9,
    4
  ]));
  newSoul(translation(0, 19, 134), [
    0,
    0,
    3.5
  ]);
  newSoul(translation(-38.9, -8.3, -21), [
    -7,
    -2.5,
    6
  ], [
    6,
    -3,
    6
  ], [
    0,
    -5,
    7
  ]);
  newSoul(translation(-89, 0.2, 80), [
    0,
    0,
    6
  ]);
  newSoul(translation(-100, 0.2, 55), [
    0,
    0,
    7.5
  ], [
    -8,
    0,
    3.5
  ], [
    -12,
    0,
    3.5
  ], [
    -15,
    0,
    3.5
  ]);
  newSoul(translation(-115, 0.2, -12), [
    0,
    0,
    3.5
  ]);
  newSoul(translation(-93, -3, -40).rotate(4), [
    0,
    -2,
    3.5
  ], [
    0,
    2,
    3.5
  ]);
  newModel();
  meshAdd(cylinder(5), translation(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3));
  newLever(translation(0, 1.2));
  integers_map(2, (blackPlatform) => {
    newModel();
    GQuad.map(({ x, z }) => {
      meshAdd(cylinder(11, 1).slice(0, -2), translation(x * 4, 4, z * 4).scale(0.8, 3, 0.8), material(0.5, 0.3, 0.7, 0.6));
      meshAdd(cylinder(), translation(x * 4, 7, z * 4).scale(1, 0.3), material(0.5, 0.5, 0.5, 0.3));
    });
    meshAdd(csg_polygons_subtract(polygons_transform(cylinder().slice(0, -1), identity.scale(5, 1, 5), material(0.8, 0.8, 0.8, 0.3)), ...[
      -1,
      1
    ].map((i) => polygons_transform(cylinder(25, 1), translation(5 * i, 0.2).rotate(i * -30).scale(4, 1, 3), material(0.8, 0.8, 0.8, 0.3)))));
    meshAdd(cylinder(), translation(0, -3).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
  });
  newModel();
  meshAdd(csg_polygons_subtract(csg_union(polygons_transform(cylinder(), identity.scale(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)), polygons_transform(cylinder(), translation(0, -2).scale(2, 3.2, 1.9), material(0.3, 0.8, 0.5, 0.5)), polygons_transform(cylinder(6), identity.scale(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)), polygons_transform(cylinder(16, 1, 0, 4), identity.scale(1, 1, 1.5).rotate(0, 90), material(0.9, 0.9, 0.9, 0.2))), polygons_transform(cylinder(), identity.scale(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6))));
  newSoul(translation(0, 2.8), [
    0,
    0,
    4.5
  ]);
  newModel();
  meshAdd(cylinder(3), translation(-23, -1.7, 55.8).scale(5, 0.7, 8.3), material(0.3, 0.6, 0.6, 0.2));
  meshAdd(cylinder(8), translation(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), material(0.8, 0.8, 0.8, 0.2));
  meshAdd(cylinder(), translation(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3));
  meshAdd(cylinder(), translation(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3));
  newLever(translation(-23, -0.5, 66.5));
  newModel();
  meshAdd(cylinder(), translation(-22.55, -3, 55).scale(1.45, 1.4, 2.7), material(0.7, 0.7, 0.7, 0.2));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(), identity.scale(3, 1.4, 2.7)), polygons_transform(cylinder(), identity.scale(1.2, 8, 1.2))), translation(-33, -3, 55), material(0.7, 0.7, 0.7, 0.2));
  newModel();
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(), identity.scale(3, 1.4, 2.7)), polygons_transform(cylinder(), identity.scale(1, 3))), translation(-27, -3, 55), material(0.9, 0.9, 0.9, 0.2));
  meshAdd(cylinder(), translation(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
  newModel();
  meshAdd(cylinder(6), translation(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), material(0.7, 0.7, 0.7, 0.4));
  newModel();
  [
    0,
    12,
    24
  ].map((x) => meshAdd(cylinder(), elevatorsMatrix(x), material(0.2, 0.5, 0.6, 0.2)));
  newModel();
  [
    6,
    18
  ].map((x) => meshAdd(cylinder(), elevatorsMatrix(x), material(0.1, 0.4, 0.5, 0.2)));
  newModel();
  meshAdd(cylinder(5), translation(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), material(0.3, 0.3, 0.5, 0.5));
  meshAdd(cylinder(5).slice(0, -1), translation(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), material(0.6, 0.3, 0.5, 0.5));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(5), translation(0, 2).scale(5, 7, 5).skewY(8)), polygons_transform(cylinder(5), translation(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), polygons_transform(cylinder(), identity.scale(2, 8, 3))), translation(-38.9, -11.3, 17), material(0.2, 0.4, 0.5, 0.5));
  newSoul(translation(-39.1, -0.6, 17).rotate(11), ...polygon_regular(15).map(({ x, z }) => [
    x * 3,
    z * 3,
    1.2
  ]));
  pushingRodsPositions.map((x, i) => {
    if (!(i % 2) && i < 6)
      newModel();
    meshAdd(pushingRod, translation(x, 1.9, -12));
  });
  integers_map(4, (i) => {
    newModel();
    meshAdd(cylinder(6), translation(-14.6 - i * 4.8 - (i > 2 ? 2 : 0), -i / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3));
  });
  [
    material(0.1, 0.55, 0.45, 0.2),
    material(0.2, 0.5, 0.5, 0.3),
    material(0.3, 0.45, 0.55, 0.4)
  ].map((m, i) => {
    newModel();
    meshAdd(cylinder(), translation(-23.5, 0.5, 91 + 6.8 * i).scale(i === 1 ? 2 : 3.3, 1, 3.3), m);
    if (i === 2)
      meshAdd(cylinder(), translation(-29.1, 0.4, 91).scale(2.1, 1, 3), material(0.7, 0.7, 0.7, 0.3));
    if (i === 1)
      meshAdd(cylinder(), translation(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), material(0.6, 0.6, 0.7, 0.3));
  });
  newModel();
  meshAdd(cylinder(5), identity.scale(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4));
  meshAdd(cylinder(5), identity.scale(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4));
  newLever(translation(0, 1.5, -1).rotate(0, 180));
  integers_map(4, (gate) => {
    newModel();
    integers_map(7, (i) => meshAdd(polygons_transform(cylinder(8, 1).slice(0, -1), translation((gate > 2 ? 3.5 : 4) * (i / 6 - 0.5), 3).scale(0.2, gate > 2 ? 4 : 3, 0.2), material(0.3, 0.3, 0.38))));
  });
  newModel();
  meshAdd(hexCorridor);
  newModel();
  meshAdd(cylinder(5).slice(0, -1), translation(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), material(0.5, 0.5, 0.5, 0.5));
  meshAdd(cylinder(10).slice(0, -1), translation(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), material(0.3, 0.8, 0.7, 0.3));
  meshAdd(cylinder(15, 1), translation(-7.5).rotate(0, 90).scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3));
  newLever(translation(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
  [
    -1,
    1
  ].map((i) => meshAdd(hornPolygons, identity.rotate(i * 90, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)), polygons_transform(cylinder(10), identity.scale(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5))));
  newSoul(translation(-5, 4), [
    0,
    -1.2,
    1.7
  ], [
    0,
    1.2,
    1.7
  ]);
  newModel();
  meshAdd(cylinder(3), translation(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), material(0.5, 0.3, 0.3, 0.4));
  [
    22,
    30
  ].map((z) => {
    meshAdd(cylinder(6), translation(0, 16, z + 95).scale(3, 1, 2.3).rotate(0, 90), material(0.7, 0.7, 0.7, 0.4));
    meshAdd(cylinder(), translation(0, 6.2, z + 95).scale(0.5, 11, 0.5), material(0.5, 0.3, 0.3, 0.4));
  });
  newModel();
  meshAdd(cylinder(5).slice(0, -1), translation(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(8).slice(0, -1), translation(0, 2).scale(3, 1.5, 3).rotate(0, 22), material(0.7, 0.7, 0.7, 0.1));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)), polygons_transform(cylinder(), translation(0, 0, -5.5).scale(1.5, 3, 2.7), material(0.45, 0.45, 0.45, 0.2))));
  newSoul(translation(0, 3), ...polygon_regular(14).map(({ x, z }) => [
    x * 5.6,
    z * 5.6,
    2
  ]));
  newModel();
  [
    -1,
    1
  ].map((x) => meshAdd(hornPolygons, identity.rotate(0, 90).translate(x * -5, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * x + 90)));
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(28, 1).slice(0, -1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)), polygons_transform(cylinder().slice(0, -1), translation(0, 2).scale(9, 1.1, 2), material(0.3, 0, 0, 0.3))));
  meshAdd(cylinder(5).slice(0, -1), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2));
  newModel();
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(28, 1).slice(0, -1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)), polygons_transform(cylinder().slice(0, -1), translation(0, 2, 7).scale(2, 1.1, 9), material(0.3, 0, 0, 0.3)), polygons_transform(cylinder().slice(0, -1), translation(7, 2).scale(9, 1.1, 2), material(0.3, 0, 0, 0.3))));
  meshAdd(cylinder(5).slice(0, -1), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2));
  newModel();
  meshAdd(csg_polygons_subtract(polygons_transform(cylinder(28, 1).slice(0, -1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)), polygons_transform(cylinder().slice(0, -1), translation(0, 2, -7).scale(2, 1.1, 9), material(0.3, 0, 0, 0.3)), polygons_transform(cylinder().slice(0, -1), translation(7, 2).scale(9, 1.1, 2), material(0.3, 0, 0, 0.3))));
  meshAdd(cylinder(5).slice(0, -1), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2));
  integers_map(2, (i) => {
    newModel();
    meshAdd(csg_polygons_subtract(polygons_transform(cylinder(30, 1, 1.15, 1), translation(0, -3).scale(3.5, 1, 3.5), material(0.7, 0.4, 0.25, 0.7)), polygons_transform(cylinder(), translation(4, -1.2).scale3d(2), material(0.7, 0.4, 0.25, 0.3)), polygons_transform(cylinder(30, 1, 1.3, 1), translation(0, -2.5).scale(2.6, 1, 3), material(0.7, 0.4, 0.25, 0.2))));
    newLever(translation(0, -3, 4));
  });
  for (let i = 0; i < LEVERS_COUNT; ++i) {
    newModel();
    meshAdd(cylinder(9, 1), translation(0, 0.8).scale(0.2, 0.3, 0.2), material(0.7, 1, 0.2));
    meshAdd(cylinder(6, 1).slice(0, -1), identity.scale(0.12, 1.2, 0.12), material(0.3, 0.3, 0.5, 0.1));
    meshAdd(cylinder(3), translation(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2, 0.1));
  }
  newModel();
  meshAdd(sphere(20), translation(0, 1).scale3d(0.5), material(1, 0.3, 0.4));
  meshAdd(sphere(30), identity.scale(0.65, 0.8, 0.55), material(1, 0.3, 0.4));
  meshAdd(cylinder(), translation(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));
  [
    -1,
    1
  ].map((v) => {
    meshAdd(hornPolygons, identity.rotate(0, v > 0 ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), material(1, 1, 0.8));
    meshAdd(polygons_transform(csg_polygons_subtract(cylinder(15, 1), polygons_transform(cylinder(), translation(0, 0, 1).scale(2, 2, 0.5))), identity.rotate(-90, 0).scale(0.1, 0.05, 0.1), material(0.3, 0.3, 0.3)), translation(v * 0.2, 1.2, 0.4).rotate(0, 20 * v, 20 * v));
  });
  [
    -1,
    1
  ].map((v, i) => {
    newModel();
    meshAdd(cylinder(20, 1), translation(0.3 * v, -0.8).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
  });
  newModel();
  meshAdd(cylinder(6, 1).slice(0, -1), identity.scale(0.77, 1, 0.77), material(1, 0.3, 0.5));
  newModel();
  meshAdd(sphere(GHOST_SLICES, GHOST_STACKS, (a, b, polygon) => {
    const bm = b / GHOST_STACKS;
    const theta = a * (Math.PI * (2 / GHOST_SLICES));
    const phixz = /* @__PURE__ */ Math.sin(bm ** 0.6 * Math.PI / 2);
    const osc = bm * bm * /* @__PURE__ */ Math.sin(a * Math.PI * (14 / GHOST_SLICES)) / 4;
    return b > GHOST_STACKS - 1 ? {
      x: polygon.$smooth = 0,
      y: -0.5,
      z: 0
    } : {
      x: /* @__PURE__ */ Math.cos(theta) * phixz,
      y: /* @__PURE__ */ Math.cos(bm * Math.PI) - bm - osc,
      z: /* @__PURE__ */ Math.sin(theta) * phixz + /* @__PURE__ */ Math.sin(osc * Math.PI * 2) / 4
    };
  }), identity.scale3d(0.7), material(1, 1, 1));
  [
    -1,
    1
  ].map((x) => meshAdd(sphere(10), translation(0.16 * x, 0.4, -0.36).scale3d(0.09)));
};
const code$3 = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}";
const uniformName_projectionMatrix = "a";
const uniformName_viewMatrix = "b";
const uniformName_worldTransforms = "j";
const code$2 = "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}";
const constDef_COLLISION_TEXTURE_SIZE = 128;
const code$1 = "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}";
const code = "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}";
const uniformName_iResolution = "j";
const gl = hC.getContext("webgl2", {
  powerPreference: "high-performance"
});
const cgl = hD.getContext("webgl2", {
  powerPreference: "high-performance",
  preserveDrawingBuffer: true,
  desynchronized: true,
  antialias: false
});
for (const s in cgl)
  [
    gl,
    cgl
  ].map((xgl) => xgl[s[0] + [
    ...s
  ].reduce((p, c, i) => (p * i + c.charCodeAt(0)) % 434, 0).toString(36)] = xgl[s]);
let modelsUpdateCounter;
const modelsResetUpdateCounter = () => modelsUpdateCounter = 1;
const modelsNextUpdate = (x, y = 0, z = 0) => {
  const m = matrixCopy(identity, allModels[++modelsUpdateCounter].$matrix);
  m.m41 = x;
  m.m42 = y;
  m.m43 = z;
  return m;
};
let player_update;
let camera_position_x = 0;
let camera_position_y = 0;
let camera_position_z = 0;
const CAMERA_PLAYER_Y_DIST = 13;
const PLAYER_LEGS_VELOCITY = 9.1;
const CAMERA_PLAYER_Z_DIST = -18;
const PLAYER_RESPAWN_Z = -2.4;
const player_init = NO_INLINE(() => {
  let player_look_angle_target;
  let player_look_angle;
  let player_legs_speed;
  let player_on_rotating_platforms;
  let player_fly_velocity_x;
  let player_fly_velocity_z;
  let player_speed;
  let player_speed_collision_limiter;
  let player_model_y;
  let currentModelId;
  let camera_pos_lookat_x;
  let camera_pos_lookat_y;
  let camera_pos_lookat_z;
  let player_position_global_x;
  let player_position_global_y;
  let player_position_global_z;
  let oldModelId = 0;
  let boot = 1;
  let player_respawned = 2;
  let player_gravity = 15;
  const loadReferenceMatrix = () => matrixCopy((player_respawned ? levers[player_last_pulled_lever] : allModels[oldModelId !== MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR ? oldModelId : 0]).$matrix);
  const updatePlayerPositionFinal = (updateVelocity) => {
    if (player_respawned > 1) {
      matrixCopy(levers[player_last_pulled_lever].$matrix).multiplySelf(levers[player_last_pulled_lever].$transform);
      matrixTransformPoint(0, firstBoatLerp > 0.9 ? 15 : 1, PLAYER_RESPAWN_Z);
    } else {
      loadReferenceMatrix();
      matrixTransformPoint(player_position_global_x, player_position_global_y, player_position_global_z);
    }
    if (updateVelocity) {
      player_fly_velocity_x = (matrixTransformPoint.x - player_position_final.x) / gameTimeDelta;
      player_fly_velocity_z = (matrixTransformPoint.z - player_position_final.z) / gameTimeDelta;
    }
    player_position_final.x = matrixTransformPoint.x;
    player_position_final.y = matrixTransformPoint.y;
    player_position_final.z = matrixTransformPoint.z;
  };
  const movePlayer = NO_INLINE((mx, my, mz) => {
    loadReferenceMatrix().invertSelf();
    matrixTransformPoint(mx, my, mz, 0);
    player_position_global_x += matrixTransformPoint.x;
    player_position_global_y += my;
    player_position_global_z += matrixTransformPoint.z;
    updatePlayerPositionFinal();
  });
  const doCollisions = NO_INLINE(() => {
    let modelACount = 0;
    let modelB = 0;
    let modelBCount = 0;
    let movY = 0;
    let movX = 0;
    let movZ = 0;
    const LEGS_ROWS = 36;
    let lineToProcess = -1;
    for (let y = 0; y < LEGS_ROWS; ++y) {
      for (let x = 96, yindex = y * (constDef_COLLISION_TEXTURE_SIZE * 4); x < (constDef_COLLISION_TEXTURE_SIZE - 24) * 4; x += 4)
        for (let k = 0; k < 2; ++k) {
          const v = collision_buffer[yindex + x + k];
          const m = collision_buffer[yindex + x + k + 2];
          if (v > movY)
            movY = v;
          if (v + m && (lineToProcess < 0 || lineToProcess === y)) {
            lineToProcess = y;
            if (m === currentModelId)
              ++modelACount;
            else if (!modelB || modelB === m) {
              modelB = m;
              ++modelBCount;
            }
          }
        }
    }
    currentModelId = lineToProcess >= 0 ? modelBCount > modelACount * 2 ? modelB : currentModelId : 0;
    for (let y = LEGS_ROWS, index = constDef_COLLISION_TEXTURE_SIZE * LEGS_ROWS * 4; y < constDef_COLLISION_TEXTURE_SIZE; ++y) {
      let left = 0;
      let right = 0;
      let front = 0;
      let back = 0;
      for (let x = 0; x < constDef_COLLISION_TEXTURE_SIZE; ++x) {
        let v = collision_buffer[index++];
        if (x < constDef_COLLISION_TEXTURE_SIZE / 2) {
          if (v > left)
            left = v;
        } else if (v > right)
          right = v;
        v = collision_buffer[index++];
        if (x > constDef_COLLISION_TEXTURE_SIZE / 2) {
          if (v > left)
            left = v;
        } else if (v > right)
          right = v;
        v = collision_buffer[index++];
        if (v > front)
          front = v;
        v = collision_buffer[index++];
        if (v > back)
          back = v;
      }
      right -= left;
      if (right * right > movX * movX)
        movX = right;
      back -= front;
      if (back * back > movZ * movZ)
        movZ = back;
    }
    player_speed_collision_limiter = clamp(1 - max(abs(movX *= 0.7), abs(movZ)) * 0.01, 0.3);
    movePlayer(movX / 255, movY / 255, movZ / 255);
  });
  const interpolate_with_hysteresis = (previous, desired, hysteresis, speed) => lerp(previous, desired, boot || (clamp(abs(desired - previous) ** 0.5 - hysteresis) + 1 / 7) * damp(speed * 1.5));
  player_update = () => {
    updatePlayerPositionFinal(currentModelId);
    cgl["r9r"](0, 0, constDef_COLLISION_TEXTURE_SIZE, constDef_COLLISION_TEXTURE_SIZE, 6408, 5121, collision_buffer);
    doCollisions();
    if (player_respawned || currentModelId !== oldModelId) {
      oldModelId = currentModelId;
      loadReferenceMatrix().invertSelf();
      matrixTransformPoint(player_position_final.x, player_position_final.y, player_position_final.z);
      player_position_global_x = matrixTransformPoint.x;
      player_position_global_y = matrixTransformPoint.y;
      player_position_global_z = matrixTransformPoint.z;
      player_respawned &&= currentModelId ? 0 : 1;
    } else if (player_position_final.y < (player_position_final.x < -20 || player_position_final.z < 109 ? -25 : -9))
      player_respawned = 2;
    if (currentModelId === MODEL_ID_STATIC_WORLD)
      levers[LEVER_ID_BOAT1].$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0;
    player_on_rotating_platforms = lerpDamp(player_on_rotating_platforms, shouldRotatePlatforms * (currentModelId > MODEL_ID_ROTATING_PLATFORM0 - 1 && currentModelId < MODEL_ID_ROTATING_PLATFORM0 + 4), 2);
    camera_pos_lookat_x = interpolate_with_hysteresis(camera_pos_lookat_x, player_position_final.x, 0.5, 1);
    camera_pos_lookat_y = interpolate_with_hysteresis(camera_pos_lookat_y, player_model_y = lerp(lerpDamp(player_model_y, player_position_final.y, 2), player_position_final.y, player_respawned || abs(player_model_y - player_position_final.y) * 8), 2, 1);
    camera_pos_lookat_z = interpolate_with_hysteresis(camera_pos_lookat_z, player_position_final.z, 0.5, 1);
    if (player_first_person) {
      const d = player_respawned + damp(18);
      camera_position_x = lerp(camera_position_x, player_position_final.x, d);
      camera_position_z = lerp(camera_position_z, player_position_final.z, d);
      camera_position_y = lerp(camera_position_y, 1.6 + player_model_y, d);
      camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
    } else {
      camera_position_x = interpolate_with_hysteresis(camera_position_x, camera_pos_lookat_x, 1, 2 + player_on_rotating_platforms);
      camera_position_z = interpolate_with_hysteresis(camera_position_z, camera_pos_lookat_z + CAMERA_PLAYER_Z_DIST + player_on_rotating_platforms * 5, 1, 2 + player_on_rotating_platforms);
      camera_position_y = interpolate_with_hysteresis(camera_position_y, max(camera_pos_lookat_y + clamp((-60 - player_position_final.z) / 8, 0, 20) + CAMERA_PLAYER_Y_DIST + player_on_rotating_platforms * 9, 6), 4, 2);
      const viewDirDiffz = min(CAMERA_PLAYER_Z_DIST / 3, -abs(camera_pos_lookat_z - camera_position_z));
      const viewDirDiffx = camera_pos_lookat_x - camera_position_x;
      camera_rotation.y = angle_lerp_degrees(camera_rotation.y, 90 - angle_wrap_degrees(/* @__PURE__ */ Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD), boot + damp(10));
      camera_rotation.x = angle_lerp_degrees(camera_rotation.x, 90 - /* @__PURE__ */ Math.atan2(hypot(viewDirDiffz, viewDirDiffx), camera_position_y - camera_pos_lookat_y) / DEG_TO_RAD, boot + damp(10));
    }
    camera_rotation.x = clamp(camera_rotation.x, -87, 87);
    boot = 0;
    let forward = clamp(input_forward, -1);
    let strafe = clamp(input_strafe, -1);
    const movAmount = threshold(hypot(forward, strafe) ** 0.5, 0.1);
    let movAngle = /* @__PURE__ */ Math.atan2(forward, strafe);
    if (movAmount)
      player_look_angle_target = 90 - movAngle / DEG_TO_RAD;
    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);
    modelsNextUpdate(player_position_final.x, 0.06 * player_speed_collision_limiter * player_legs_speed * /* @__PURE__ */ Math.cos(gameTime * (PLAYER_LEGS_VELOCITY * 2)) + player_model_y, player_position_final.z).rotateSelf(0, player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, damp(8)));
    for (let i = 0; i < 2; ++i) {
      const t = gameTime * PLAYER_LEGS_VELOCITY - Math.PI * i;
      matrixCopy(allModels[MODEL_ID_PLAYER_BODY].$matrix, modelsNextUpdate(0)).translateSelf(0, player_legs_speed * clamp(/* @__PURE__ */ Math.sin(t - Math.PI / 2) * 0.45)).rotateSelf(player_legs_speed * /* @__PURE__ */ Math.sin(t) * (0.25 / DEG_TO_RAD), 0);
    }
    player_gravity = currentModelId ? 5 : lerpDamp(player_gravity, player_respawned ? 13 : 19 - min(0, player_position_final.y + 10) * 2, 2.2);
    player_fly_velocity_x = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_x, 0, 3);
    player_fly_velocity_z = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_z, 0, 3);
    player_speed = player_respawned ? 0 : lerpDamp(player_speed, currentModelId ? 7 * clamp(2 * movAmount) * player_speed_collision_limiter : 0, currentModelId ? 9 : 1);
    forward = player_speed * movAmount * abs(forward) * /* @__PURE__ */ Math.sin(movAngle);
    strafe = player_speed * movAmount * abs(strafe) * /* @__PURE__ */ Math.cos(movAngle);
    movAngle = player_first_person ? (180 + camera_rotation.y) * DEG_TO_RAD : 0;
    movePlayer(gameTimeDelta * (player_fly_velocity_x + (/* @__PURE__ */ Math.cos(movAngle) * strafe - /* @__PURE__ */ Math.sin(movAngle) * forward)), gameTimeDelta * -player_gravity, gameTimeDelta * (player_fly_velocity_z + (/* @__PURE__ */ Math.sin(movAngle) * strafe + /* @__PURE__ */ Math.cos(movAngle) * forward)));
  };
});
const collision_buffer = new Uint8Array(constDef_COLLISION_TEXTURE_SIZE * constDef_COLLISION_TEXTURE_SIZE * 4);
let shouldRotatePlatforms;
let eppur_si_muove = () => {
  let rotatingPlatform1Rotation;
  let rotatingPlatform2Rotation;
  let rotatingHexCorridorRotation;
  const LEVER_SENSITIVITY_RADIUS = 3;
  const lerpneg = (v, t) => {
    v = clamp(v);
    return lerp(v, 1 - v, t);
  };
  eppur_si_muove = () => {
    const boatUpdate = (x, y, z) => modelsNextUpdate(x + /* @__PURE__ */ Math.sin(gameTime + 2) / 5, y + /* @__PURE__ */ Math.sin(gameTime * 0.8) / 5, z).rotateSelf(2 * /* @__PURE__ */ Math.sin(gameTime), /* @__PURE__ */ Math.sin(gameTime * 0.7), /* @__PURE__ */ Math.sin(gameTime * 0.9));
    modelsResetUpdateCounter();
    rotatingHexCorridorRotation = lerp(lerpDamp(rotatingHexCorridorRotation, 0, 1), angle_wrap_degrees(rotatingHexCorridorRotation + gameTimeDelta * 60), levers[LEVER_ID_ROTATING_CORRIDOR].$lerpValue - levers[LEVER_ID_CRYSTALS].$lerpValue2);
    shouldRotatePlatforms = lerpneg(levers[LEVER_ID_DONUT_PAD].$lerpValue, levers[LEVER_ID_AFTER_ROTATING_PLATFORMS].$lerpValue);
    rotatingPlatform1Rotation = lerp(lerpDamp(rotatingPlatform1Rotation, 0, 5), angle_wrap_degrees(rotatingPlatform1Rotation + gameTimeDelta * 56), shouldRotatePlatforms);
    rotatingPlatform2Rotation = lerp(lerpDamp(rotatingPlatform2Rotation, 0, 4), angle_wrap_degrees(rotatingPlatform2Rotation + gameTimeDelta * 48), shouldRotatePlatforms);
    modelsNextUpdate(0, 270 * (levers[LEVER_ID_LEVEL1_DESCENT].$lerpValue - 1) + (2 + 5 * /* @__PURE__ */ Math.cos(gameTime * 1.5)) * (1 - levers[LEVER_ID_GATE1].$lerpValue));
    let oscillation = min(1 - levers[LEVER_ID_TRIANGLE_PLATFORM].$lerpValue2, levers[LEVER_ID_GATE1].$lerpValue2);
    modelsNextUpdate(oscillation * /* @__PURE__ */ Math.sin(gameTime * 0.6 + 1.2) * 12, 0, 35);
    modelsNextUpdate(oscillation * /* @__PURE__ */ Math.sin(gameTime * 0.6 - 1.2) * 8.2, 0, 55);
    modelsNextUpdate(oscillation * /* @__PURE__ */ Math.sin(gameTime * 0.6) * 12, 0, 45);
    modelsNextUpdate(9.8 * (1 - oscillation));
    oscillation = clamp(1 - 5 * oscillation) * lerpneg(levers[LEVER_ID_TRIANGLE_PLATFORM].$lerpValue, levers[LEVER_ID_ROTATING_CORRIDOR].$lerpValue);
    modelsNextUpdate(0, oscillation * /* @__PURE__ */ Math.sin(gameTime * 1.35) * 4);
    modelsNextUpdate(0, 0, oscillation * /* @__PURE__ */ Math.sin(gameTime * 0.9) * 8);
    modelsNextUpdate(0, -6.5 * levers[LEVER_ID_TRIANGLE_PLATFORM].$lerpValue2);
    oscillation = lerpneg(levers[LEVER_ID_MONUMENT].$lerpValue2, levers[LEVER_ID_CRYSTALS].$lerpValue2);
    modelsNextUpdate(0, oscillation * /* @__PURE__ */ Math.sin(gameTime) * 5 + 3.5 * (1 - max(levers[LEVER_ID_CRYSTALS].$lerpValue, levers[LEVER_ID_MONUMENT].$lerpValue)));
    modelsNextUpdate(0, oscillation * /* @__PURE__ */ Math.sin(gameTime + 3) * 6, oscillation * /* @__PURE__ */ Math.sin(gameTime * 0.6 + 1) * 6);
    modelsNextUpdate(0, -7.3 * levers[LEVER_ID_MONUMENT].$lerpValue2);
    oscillation = lerpneg(levers[LEVER_ID_BEFORE_PUSHING_RODS].$lerpValue, levers[LEVER_ID_AFTER_PUSHING_RODS].$lerpValue);
    modelsNextUpdate(0, -2, 10 - 8.5 * oscillation * abs(/* @__PURE__ */ Math.sin(gameTime * 1.1)));
    modelsNextUpdate(0, -2, 10 - 8.5 * oscillation * abs(/* @__PURE__ */ Math.sin(gameTime * 2.1)));
    modelsNextUpdate(0, -2, 10 - 8.5 * max(oscillation * abs(/* @__PURE__ */ Math.sin(gameTime * 1.5)), (1 - levers[LEVER_ID_BEFORE_PUSHING_RODS].$lerpValue) * (1 - oscillation)));
    const hexPadsOscillation = lerpneg(levers[LEVER_ID_DETOUR].$lerpValue2, levers[LEVER_ID_DONUT_PAD].$lerpValue2);
    for (let i = 0; i < 4; i++) {
      modelsNextUpdate((i > 2 ? 2 * (1 - hexPadsOscillation) + hexPadsOscillation : 0) - 100, hexPadsOscillation * /* @__PURE__ */ Math.sin(gameTime * 1.3 + i * 1.7) * (3 + i / 3) + 0.7, 115 - 7 * (1 - levers[LEVER_ID_DETOUR].$lerpValue2) * (1 - levers[LEVER_ID_DONUT_PAD].$lerpValue2) * (i & 1 ? -1 : 1) + max(0.05, hexPadsOscillation) * /* @__PURE__ */ Math.cos(gameTime * 1.3 + i * 7) * (4 - 2 * (1 - i / 3)));
    }
    oscillation = lerpneg(levers[LEVER_ID_AFTER_ROTATING_PLATFORMS].$lerpValue2, levers[LEVER_ID_AFTER_JUMPING_PADS].$lerpValue2);
    for (let i = 0; i < 3; ++i) {
      modelsNextUpdate(0, oscillation * /* @__PURE__ */ Math.sin(gameTime * 1.5 + i * 1.5) * 4 + (i ? 0 : 3 * (1 - levers[LEVER_ID_AFTER_ROTATING_PLATFORMS].$lerpValue2) * (1 - levers[LEVER_ID_AFTER_JUMPING_PADS].$lerpValue2)));
    }
    oscillation = lerpneg(lerpneg((levers[LEVER_ID_AFTER_JUMPING_PADS].$lerpValue + levers[LEVER_ID_AFTER_JUMPING_PADS].$lerpValue2) / 2, levers[LEVER_ID_AFTER_ROTATING_PLATFORMS].$lerpValue2), (levers[LEVER_ID_FLOATING_ELEVATOR].$lerpValue + levers[LEVER_ID_FLOATING_ELEVATOR].$lerpValue2) / 2);
    modelsNextUpdate(0, 16 * oscillation, 95 + 8.5 * clamp(oscillation * 2 - 1));
    modelsNextUpdate(0, -4.7 * levers[LEVER_ID_GATE0].$lerpValue, -15);
    modelsNextUpdate(0, -4.7 * levers[LEVER_ID_GATE1].$lerpValue, 15);
    modelsNextUpdate(-99.7, -1.9 - 5.5 * levers[LEVER_ID_CRYSTALS].$lerpValue, 63.5);
    modelsNextUpdate(-100, 0.6 - 5.8 * levers[LEVER_ID_DONUT_PAD].$lerpValue, 96.5);
    modelsNextUpdate(-75, 3 * (1 - levers[LEVER_ID_ROTATING_CORRIDOR].$lerpValue2) * (1 - levers[LEVER_ID_CRYSTALS].$lerpValue), 55).rotateSelf(180 * (1 - levers[LEVER_ID_ROTATING_CORRIDOR].$lerpValue2) + rotatingHexCorridorRotation, 0);
    modelsNextUpdate(2.5 * (1 - hexPadsOscillation) - 139.7, -3 * (1 - levers[LEVER_ID_DETOUR].$lerpValue) - hexPadsOscillation * /* @__PURE__ */ Math.sin(gameTime * 0.8) - 1.8, 93.5).rotateSelf(/* @__PURE__ */ Math.cos(gameTime * 1.3) * (3 + 3 * hexPadsOscillation), 0);
    modelsNextUpdate(-2 * /* @__PURE__ */ Math.sin(gameTime)).rotateSelf(25 * /* @__PURE__ */ Math.sin(gameTime));
    modelsNextUpdate(-81, 0.6, 106).rotateSelf(0, 40 + rotatingPlatform1Rotation);
    modelsNextUpdate(-65.8, 0.8, 106).rotateSelf(0, rotatingPlatform2Rotation);
    modelsNextUpdate(-50.7, 0.8, 106).rotateSelf(0, 180 - rotatingPlatform2Rotation);
    modelsNextUpdate(-50.7, 0.8, 91).rotateSelf(0, 270 + rotatingPlatform2Rotation);
    boatUpdate(-12, 4.2, -66 + 40 * firstBoatLerp);
    boatUpdate(-123, 1.4, 55 - 65 * secondBoatLerp);
    for (let i = 0; i < LEVERS_COUNT; ++i) {
      const lever = levers[i];
      const lerpValue = lever.$lerpValue = lerpDamp(lever.$lerpValue, lever.$value, 4);
      lever.$lerpValue2 = lerpDamp(lever.$lerpValue2, lever.$value, 1);
      matrixCopy(matrixCopy(lever.$matrix).multiplySelf(lever.$transform), modelsNextUpdate(0)).rotateSelf(50 * lerpValue - 25, 0).translateSelf(0, 1).m44 = lerpValue;
      if (interact_pressed && distanceToPlayer() < LEVER_SENSITIVITY_RADIUS) {
        if (lever.$value) {
          if (lerpValue > 0.7) {
            lever.$value = 0;
            onPlayerPullLever(i);
          }
        } else if (lerpValue < 0.3) {
          lever.$value = 1;
          onPlayerPullLever(i);
        }
      }
      if (i === LEVER_ID_BOAT0 && lever.$value && lerpValue > 0.8) {
        lever.$value = 0;
        onFirstBoatLeverPulled();
      }
      if (i < SOULS_COUNT)
        souls[i]();
    }
    player_update();
    for (let i = 0; i < MODELS_WITH_FULL_TRANSFORM; ++i)
      matrixToArray(allModels[2 + MODELS_WITH_SIMPLE_TRANSFORM + i].$matrix, transformsBuffer, i);
    for (let i = 0, j = (MODELS_WITH_FULL_TRANSFORM + SOULS_COUNT) * 16, m; i < MODELS_WITH_SIMPLE_TRANSFORM; ++i, ++j) {
      m = allModels[2 + i].$matrix;
      transformsBuffer[j++] = m.m41;
      transformsBuffer[j++] = m.m42;
      transformsBuffer[j++] = m.m43;
    }
  };
  eppur_si_muove();
};
const LIGHT_ROT_Y = 139;
const LIGHT_ROT_X = 298;
const startMainLoop = (groundTextureImage) => {
  const csm_tempFrustumCorners = [];
  const renderModels = (xgl, soulModelId, doNotRenderPlayer) => {
    if (mainMenuVisible) {
      if (hC.width > 1100)
        xgl["d97"](4, allModels[MODEL_ID_PLAYER_LEG1].$vertexEnd - allModels[MODEL_ID_PLAYER_BODY].$vertexBegin, 5123, allModels[MODEL_ID_PLAYER_BODY].$vertexBegin * 2);
    } else {
      xgl["das"](4, allModels[soulModelId].$vertexEnd - allModels[soulModelId].$vertexBegin, 5123, allModels[soulModelId].$vertexBegin * 2, souls.length);
      xgl["d97"](4, allModels[doNotRenderPlayer ? MODEL_ID_PLAYER_BODY : MODEL_ID_PLAYER_LEG1 + 1].$vertexBegin - 3, 5123, 6);
    }
  };
  const initShaderProgram = (xgl, sfsSource, vfsSource = code$3) => {
    const uniforms = {};
    const loadShader = (source, type) => {
      const shader = xgl["c6x"](type);
      xgl["s3c"](shader, source);
      xgl["c6a"](shader);
      return shader;
    };
    const program = xgl["c1h"]();
    xgl["abz"](program, loadShader(vfsSource, 35633));
    xgl["abz"](program, loadShader(sfsSource, 35632));
    xgl["l8l"](program);
    return (name) => name ? uniforms[name] || (uniforms[name] = xgl["gan"](program, name)) : xgl["u7y"](program);
  };
  const mainLoop = (globalTime) => {
    gameTimeUpdate(globalTime);
    requestAnimationFrame(mainLoop);
    if (gameTimeDelta > 0) {
      page_update();
      worldStateUpdate();
      eppur_si_muove();
      cgl["u3a"](collisionShader(uniformName_worldTransforms), transformsBuffer);
      cgl["cbf"](true, true, true, true);
      cgl["c4s"](16640);
      cgl["cbf"](true, false, true, false);
      cgl["uae"](collisionShader(uniformName_viewMatrix), false, matrixToArray(matrixCopy().rotateSelf(0, 180).invertSelf().translateSelf(-player_position_final.x, -player_position_final.y, -player_position_final.z + 0.3)));
      renderModels(cgl, MODEL_ID_SOUL_COLLISION, 1);
      cgl["c4s"](256);
      cgl["cbf"](false, true, false, true);
      cgl["uae"](collisionShader(uniformName_viewMatrix), false, matrixToArray(matrixCopy().translateSelf(-player_position_final.x, -player_position_final.y, -player_position_final.z - 0.3)));
      renderModels(cgl, MODEL_ID_SOUL_COLLISION, 1);
      cgl["f1s"]();
      resetInteractPressed();
    }
    mainShader();
    gl["u3a"](mainShader(uniformName_worldTransforms), transformsBuffer);
    gl["b6o"](36160, csm_framebuffer);
    gl["v5y"](0, 0, constDef_CSM_TEXTURE_SIZE, constDef_CSM_TEXTURE_SIZE);
    gl["ubh"](mainShader(uniformName_csm_texture0), 4);
    gl["ubh"](mainShader(uniformName_csm_texture1), 4);
    gl["uae"](mainShader(uniformName_projectionMatrix), false, matrixToArray(identity));
    let cameraX = camera_position_x;
    let cameraY = camera_position_y;
    let cameraZ = camera_position_z;
    if (mainMenuVisible) {
      matrixCopy().rotateSelf(0, 40 * /* @__PURE__ */ Math.sin(absoluteTime) - 80, -8);
      matrixToArray(tempMatrix, transformsBuffer, MODEL_ID_PLAYER_BODY - MODELS_WITH_SIMPLE_TRANSFORM - 2);
      matrixToArray(tempMatrix, transformsBuffer, MODEL_ID_PLAYER_LEG0 - MODELS_WITH_SIMPLE_TRANSFORM - 2);
      matrixToArray(tempMatrix, transformsBuffer, MODEL_ID_PLAYER_LEG1 - MODELS_WITH_SIMPLE_TRANSFORM - 2);
      matrixCopy(projection).invertSelf();
      matrixTransformPoint(3.6, 3.5);
      cameraX = matrixTransformPoint.x;
      cameraY = matrixTransformPoint.y;
      cameraZ = 5;
      matrixCopy(identity, camera_view).rotateSelf(20, 0).translateSelf(-cameraX, -cameraY, -cameraZ).rotateSelf(0, 99);
    } else
      matrixCopy(identity, camera_view).rotateSelf(-camera_rotation.x, -camera_rotation.y).invertSelf().translateSelf(-cameraX, -cameraY, -cameraZ);
    csm0(constDef_CSM_PLANE_DISTANCE - zNear);
    renderModels(gl, MODEL_ID_SOUL, player_first_person);
    csm1(zFar - constDef_CSM_PLANE_DISTANCE);
    renderModels(gl, MODEL_ID_SOUL, player_first_person);
    gl["b6o"](36160, null);
    gl["v5y"](0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl["c4s"](16640);
    gl["ubh"](mainShader(uniformName_csm_texture0), 0);
    gl["ubh"](mainShader(uniformName_csm_texture1), 1);
    gl["ubu"](mainShader(uniformName_viewPos), cameraX, cameraY, cameraZ);
    gl["uae"](mainShader(uniformName_projectionMatrix), false, matrixToArray(projection));
    gl["uae"](mainShader(uniformName_viewMatrix), false, matrixToArray(camera_view));
    gl["uae"](mainShader(uniformName_csm_matrices), false, csm_lightSpaceMatrices);
    renderModels(gl, MODEL_ID_SOUL, player_first_person);
    skyShader();
    gl["uae"](skyShader(uniformName_viewMatrix), false, matrixToArray(camera_view.invertSelf()));
    gl["ubu"](skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);
    gl["d97"](4, 3, 5123, 0);
  };
  const csm_tempMatrix = new DOMMatrix();
  const camera_view = new DOMMatrix();
  const csm_lightSpaceMatrices = new Float32Array(32);
  const csm_framebuffer = gl["c5w"]();
  const mainShader = initShaderProgram(gl, code$4);
  const collisionShader = initShaderProgram(cgl, code$2);
  const skyShader = initShaderProgram(gl, code, code$1);
  const [csm0, csm1] = integers_map(2, (split) => {
    const texture = gl["c25"]();
    gl["a4v"](33984 + split);
    gl["b9j"](3553, texture);
    gl["t60"](3553, 0, 33190, constDef_CSM_TEXTURE_SIZE, constDef_CSM_TEXTURE_SIZE, 0, 6402, 5125, null);
    gl["t2z"](3553, 10241, 9729);
    gl["t2z"](3553, 10240, 9729);
    gl["t2z"](3553, 34893, 515);
    gl["t2z"](3553, 34892, 34894);
    gl["t2z"](3553, 10243, 33071);
    gl["t2z"](3553, 10242, 33071);
    return (roundingRadius) => {
      let tx = 0;
      let ty = 0;
      let tz = 0;
      let right = -Infinity;
      let top = -Infinity;
      let far = -Infinity;
      let left = Infinity;
      let bottom = Infinity;
      let near = Infinity;
      gl["fas"](36160, 36096, 3553, texture, 0);
      gl["c4s"](256);
      matrixCopy().scale3dSelf(roundingRadius *= 1.1).multiplySelf(matrixCopy(csm_projections[split], csm_tempMatrix).multiplySelf(camera_view).invertSelf());
      for (let i = 0, j = 0; i < 8; ++i) {
        matrixTransformPoint(4 & i ? 1 : -1, 2 & i ? 1 : -1, 1 & i ? 1 : -1);
        tx -= csm_tempFrustumCorners[j++] = (matrixTransformPoint.x | 0) / (roundingRadius * matrixTransformPoint.w);
        ty -= csm_tempFrustumCorners[j++] = (matrixTransformPoint.y | 0) / (roundingRadius * matrixTransformPoint.w);
        tz -= csm_tempFrustumCorners[j++] = (matrixTransformPoint.z | 0) / (roundingRadius * matrixTransformPoint.w);
      }
      matrixCopy().rotateSelf(LIGHT_ROT_X, LIGHT_ROT_Y).translateSelf(tx / 8, ty / 8, tz / 8);
      for (let i = 0, j = 0; i < 8; ++i) {
        matrixTransformPoint(csm_tempFrustumCorners[j++], csm_tempFrustumCorners[j++], csm_tempFrustumCorners[j++]);
        right = max(right, matrixTransformPoint.x);
        top = max(top, matrixTransformPoint.y);
        far = max(far, matrixTransformPoint.z);
        left = min(left, matrixTransformPoint.x);
        bottom = min(bottom, matrixTransformPoint.y);
        near = min(near, matrixTransformPoint.z);
      }
      tz = 10 + split;
      near *= near < 0 ? tz : 1 / tz;
      far *= far > 0 ? tz : 1 / tz;
      gl["uae"](mainShader(uniformName_viewMatrix), false, matrixToArray(matrixCopy(identity, csm_tempMatrix).scaleSelf(2 / (right - left), 2 / (top - bottom), 2 / (near - far)).translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2).multiplySelf(tempMatrix), csm_lightSpaceMatrices, split), 16 * split, 16);
    };
  });
  gl["a4v"](33986);
  gl["b9j"](3553, gl["c25"]());
  gl["t60"](3553, 0, 6408, 1024, 1024, 0, 6408, 5121, groundTextureImage);
  gl["t2z"](3553, 10241, 9987);
  gl["t2z"](3553, 10240, 9729);
  gl["gbn"](3553);
  gl["b6o"](36160, csm_framebuffer);
  gl["d45"]([
    0
  ]);
  gl["r9l"](0);
  mainShader();
  gl["ubh"](mainShader(uniformName_groundTexture), 2);
  skyShader();
  gl["ubh"](skyShader(uniformName_groundTexture), 2);
  gl["c5t"](0, 0, 0, 1);
  gl["d4n"](515);
  gl["e8z"](2929);
  gl["e8z"](2884);
  cgl["e8z"](2929);
  cgl["e8z"](2884);
  cgl["v5y"](0, 0, constDef_COLLISION_TEXTURE_SIZE, constDef_COLLISION_TEXTURE_SIZE);
  collisionShader();
  cgl["uae"](collisionShader(uniformName_projectionMatrix), false, matrixToArray(mat_perspective(1e-4, 2, 1.2, 0.4)));
  player_init();
  page_update();
  requestAnimationFrame(mainLoop);
};
const initTriangleBuffers = () => {
  let meshFirstIndex = 0;
  const _triangleIndices = [];
  const _vertexPositions = [];
  const _vertexColors = [];
  const _vertexNormals = [];
  const _vertexInts = new Int32Array(8);
  const _vertexMap = /* @__PURE__ */ new Map();
  const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 5);
  const _vertexFloats = new Float32Array(_vertexInts.buffer);
  allModels.map((model, index) => {
    let polygon;
    const getVertex = (i) => {
      let { x, y, z } = polygon[i];
      _vertexFloats[0] = x;
      _vertexFloats[1] = y;
      _vertexFloats[2] = z;
      const key = "" + (polygon.$smooth ? _vertexIntsSmooth : _vertexInts);
      let vertexIndex = _vertexMap.get(key);
      if (vertexIndex !== void 0) {
        x = vertexIndex * 3;
        _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[5]) / 2;
        _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[6]) / 2;
        _vertexNormals[x] = (_vertexNormals[x] + _vertexInts[7]) / 2;
      } else {
        _vertexMap.set(key, vertexIndex = _vertexMap.size);
        _vertexPositions.push(x, y, z, _vertexFloats[3]);
        _vertexColors.push(_vertexInts[4]);
        _vertexNormals.push(_vertexInts[5], _vertexInts[6], _vertexInts[7]);
      }
      return vertexIndex;
    };
    _vertexFloats[3] = index > MODEL_ID_SOUL_COLLISION - 1 ? -MODELS_WITH_FULL_TRANSFORM : index;
    for (const grp of model.$polygon)
      for (polygon of grp) {
        const { x, y, z } = plane_fromPolygon(polygon);
        _vertexInts[4] = polygon.$color | 0;
        _vertexInts[5] = x * 32767;
        _vertexInts[6] = y * 32767;
        _vertexInts[7] = z * 32767;
        for (let i = 2, a = getVertex(0), b = getVertex(1); i < polygon.length; ++i)
          _triangleIndices.push(a, b, b = getVertex(i));
      }
    model.$polygon = 0;
    model.$vertexBegin = meshFirstIndex;
    model.$vertexEnd = meshFirstIndex = _triangleIndices.length;
  });
  [
    gl,
    cgl
  ].map((xgl) => {
    xgl["b11"](34963, xgl["c1b"]());
    xgl["b2v"](34963, new Uint16Array(_triangleIndices), 35044);
    xgl["b11"](34962, xgl["c1b"]());
    xgl["b2v"](34962, new Float32Array(_vertexPositions), 35044);
    xgl["v7s"](0, 4, 5126, false, 0, 0);
    xgl["b11"](34962, xgl["c1b"]());
    xgl["b2v"](34962, new Int16Array(_vertexNormals), 35044);
    xgl["v7s"](1, 3, 5122, true, 0, 0);
    xgl["b11"](34962, xgl["c1b"]());
    xgl["b2v"](34962, new Uint32Array(_vertexColors), 35044);
    xgl["v7s"](2, 4, 5121, true, 0, 0);
    xgl["e3x"](0);
    xgl["e3x"](1);
    xgl["e3x"](2);
  });
};
loadStep(() => {
  let loadStatus = 0;
  const end = () => {
    if (++loadStatus === 2)
      startMainLoop(image);
  };
  const image = new Image();
  image.onload = end;
  image.src = groundTextureSvg;
  loadSong(() => {
    loadStep(() => {
      initTriangleBuffers();
      loadGame();
      loadStep(end);
    });
    build_life_the_universe_and_everything();
  });
});
//# sourceMappingURL=index.js.map
