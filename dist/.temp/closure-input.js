let _globalTime;
let mainMenuVisible;
let firstBoatLerp;
let secondBoatLerp;
let audioBuffer;
let interact_pressed;
let player_first_person;
let projection;
let csm_projections;
let updateInput;
let currentEditModel;
let modelsUpdateCounter;
let player_update;
let shouldRotatePlatforms;
let rotatingPlatform1Rotation;
let rotatingPlatform2Rotation;
let rotatingHexCorridorRotation;
let gameTime = 0;
let absoluteTime = 0;
let gameTimeDelta = 0;
let souls_collected_count = 0;
let game_completed = 0;
let player_last_pulled_lever = 0;
let input_forward = 0;
let input_strafe = 0;
let camera_position_x = 0;
let camera_position_y = 0;
let camera_position_z = 0;
let _messageEndTime = 1;
const DEG_TO_RAD = Math.PI / 180;
const groundTextureSvg = "data:image/svg+xml;base64,"
  + btoa(
    "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
  );
const souls = [];
const levers = [];
const allModels = [];
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
const player_position_final = {
  x: 0,
  y: 0,
  z: 0,
};
const camera_rotation = {
  x: 0,
  y: 180,
};
const abs = NO_INLINE((a) => a < 0 ? -a : a);
const min = NO_INLINE((a, b) => a < b ? a : b);
const max = NO_INLINE((a, b) => b < a ? a : b);
const threshold = (value, amount) => abs(value) > amount ? value : 0;
const clamp = (value, minValue = 0, maxValue = 1) => value < minValue ? minValue : maxValue < value ? maxValue : value;
const angle_wrap_degrees = (degrees) =>
  Math.atan2(Math.sin(degrees * DEG_TO_RAD), Math.cos(degrees * DEG_TO_RAD)) / DEG_TO_RAD;
const angle_lerp_degrees = (a0, a1, t) => a0 + (2 * (a1 = (a1 - a0) % 360) % 360 - a1) * clamp(t) || 0;
const lerp = (a, b, t) => (0 < t ? t < 1 ? a + (b - a) * t : b : a) || 0;
const lerpneg = (v, t) => (v = clamp(v), lerp(v, 1 - v, t));
const hypot = (a, b, c = 0) => Math.sqrt(a * a + b * b + c * c);
const matrixTransformPoint = (x = 0, y = 0, z = 0, w = 1) => {
  matrixTransformPoint.x = tempMatrix.m11 * x + tempMatrix.m21 * y + tempMatrix.m31 * z + tempMatrix.m41 * w,
    matrixTransformPoint.y = tempMatrix.m12 * x + tempMatrix.m22 * y + tempMatrix.m32 * z + tempMatrix.m42 * w,
    matrixTransformPoint.z = tempMatrix.m13 * x + tempMatrix.m23 * y + tempMatrix.m33 * z + tempMatrix.m43 * w,
    matrixTransformPoint.w = tempMatrix.m14 * x + tempMatrix.m24 * y + tempMatrix.m34 * z + tempMatrix.m44 * w;
};
const matrixToArray = (
  $matrix,
  output = float32Array16Temp,
  index = 0,
) => (index *= 16,
  output[index++] = $matrix.m11,
  output[index++] = $matrix.m12,
  output[index++] = $matrix.m13,
  output[index++] = $matrix.m14,
  output[index++] = $matrix.m21,
  output[index++] = $matrix.m22,
  output[index++] = $matrix.m23,
  output[index++] = $matrix.m24,
  output[index++] = $matrix.m31,
  output[index++] = $matrix.m32,
  output[index++] = $matrix.m33,
  output[index++] = $matrix.m34,
  output[index++] = $matrix.m41,
  output[index++] = $matrix.m42,
  output[index++] = $matrix.m43,
  output[index] = $matrix.m44,
  output);
const matrixCopy = (
  source = identity,
  target = tempMatrix,
) => (target.m11 = source.m11,
  target.m12 = source.m12,
  target.m13 = source.m13,
  target.m14 = source.m14,
  target.m21 = source.m21,
  target.m22 = source.m22,
  target.m23 = source.m23,
  target.m24 = source.m24,
  target.m31 = source.m31,
  target.m32 = source.m32,
  target.m33 = source.m33,
  target.m34 = source.m34,
  target.m41 = source.m41,
  target.m42 = source.m42,
  target.m43 = source.m43,
  target.m44 = source.m44,
  target);
const translation = NO_INLINE((x, y, z) => identity.translate(x, y, z));
const integers_map = (n, fn) => Array.from(Array(n), (_, i) => fn(i));
const polygon_color = (polygon, color, smooth) => (polygon.$smooth = smooth, polygon.$color = color, polygon);
const polygon_transform = (
  polygon,
  m,
  color = polygon.$color,
) => (matrixCopy(m),
  polygon_color(
    polygon.map(({ x, y, z }) => (matrixTransformPoint(x, y, z), {
      x: matrixTransformPoint.x,
      y: matrixTransformPoint.y,
      z: matrixTransformPoint.z,
    })),
    color,
    polygon.$smooth,
  ));
const polygons_transform = (polygons, m, color) => polygons.map((polygon) => polygon_transform(polygon, m, color));
const polygon_regular = (segments, elongate = 0) =>
  integers_map(segments, (i) => {
    const z = Math.cos(2 * Math.PI * i / segments);
    return {
      x: Math.sin(2 * Math.PI * i / segments),
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
const cylinder = (
  segments,
  smooth,
  topSize = 0,
  elongate,
) => (segments = segments ? polygon_regular(segments, elongate) : GQuad,
  elongate = polygon_transform(segments, translation(0, 1).scale3d(0 < topSize ? topSize : 1)),
  segments = polygon_transform(segments, translation(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse(),
  [
    ...cylinder_sides(segments, elongate, smooth),
    elongate,
    segments,
  ]);
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
const damp = NO_INLINE((speed) => 1 - Math.exp(-gameTimeDelta * speed));
const lerpDamp = NO_INLINE((from, to, speed) => lerp(from, to, damp(speed)));
const showMessage = (message, duration) => {
  1 / 0 > _messageEndTime && (_messageEndTime = gameTime + duration, h4.innerHTML = message);
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
  ][souls_collected_count = souls.reduce((acc, v) => acc + v.$value, 0)] + " / XIII";
};
const saveGame = () => {
  localStorage["DanteSP22"] = JSON.stringify([
    levers.map((v) => v.$value),
    souls.map((v) => v.$value),
    player_last_pulled_lever,
    gameTime,
    secondBoatLerp,
  ]);
};
const onPlayerPullLever = (leverIndex) => {
  (player_last_pulled_lever = leverIndex) && showMessage("* click *", 1), saveGame();
};
const material = NO_INLINE((r, g, b, a = 0) => 255 * a << 24 | 255 * b << 16 | 255 * g << 8 | 255 * r);
const mat_perspective = (near, far, mx, my) =>
  new DOMMatrix([
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
  ]);
const loadStep = (fn) => {
  h4.innerHTML += ".", setTimeout(fn);
};
const getnotefreq = (n) => 0.00396 * 2 ** ((n - 256) / 12);
const osc_sin = (value) => Math.sin(value * Math.PI * 2);
const osc_square = (value) => value % 1 < 0.5 ? 1 : -1;
const osc_saw = (value) => value % 1 * 2 - 1;
const osc_tri = (value) => (value = value % 1 * 4) < 2 ? value - 1 : 3 - value;
const loadSong = (done) => {
  let channelIndex = 0;
  const next = () => {
    let mixIndex = 0;
    const make = (song_rowLen) => {
      let n;
      let f;
      let filterActive;
      let low = 0;
      let band = 0;
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
              const noteBuf = noteCache[n] || (noteCache[n] = ((note) => {
                let o1t;
                let o2t;
                let c1 = 0;
                let c2 = 0;
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
                    || (j2 -= 4 * song_rowLen,
                      o1t = getnotefreq(note + OSC1_SEMI),
                      o2t = getnotefreq(note + OSC2_SEMI) * (1 + (channelIndex ? 0 : 0.0072))),
                    noteBuf2[j1] = 80
                        * (OSC1_WAVEFORM(c1 += o1t * e ** (OSC1_XENV / 32)) * OSC1_VOL
                          + OSC2_WAVEFORM(c2 += o2t * e ** (OSC2_XENV / 32)) * OSC2_VOL
                          + (NOISE_VOL ? (2 * Math.random() - 1) * NOISE_VOL : 0))
                        * e | 0;
                }
                return noteBuf2;
              })(n));
              for (let j = 0, i = 2 * rowStartSample; noteBuf.length > j; ++j, i += 2) chnBuf[i] += noteBuf[j];
            }
          }
          for (let rsample, j1 = 0; song_rowLen > j1; ++j1) {
            let lsample = 0;
            let k = 2 * (rowStartSample + j1);
            var high = (((rsample = chnBuf[k]) || filterActive)
              && (f = 0.00308 * FX_FREQ,
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
              mixIndex + k >> 1);
            mixBufferA[high] += (chnBuf[k] = lsample) / 65536, mixBufferB[high] += (chnBuf[++k] = rsample) / 65536;
          }
        }
      }
      mixIndex += 768 * song_rowLen;
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
    make(5513), make(4562), make(3891), loadStep(++channelIndex < 5 ? next : done);
  };
  const mixBufferA = (audioBuffer = new AudioBuffer({
    numberOfChannels: 2,
    sampleRate: 44100,
    length: 5362944,
  })).getChannelData(0);
  const mixBufferB = audioBuffer.getChannelData(1);
  loadStep(next);
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
  let touch_movementX;
  let touch_movementY;
  let gamepadInteractPressed;
  let audioContext;
  let songAudioSource;
  let music_on = !0;
  const keyboard_downKeys = [];
  const updateMusicOnState = () => {
    b4.innerHTML = "Music: " + music_on,
      songAudioSource
      && (mainMenuVisible || !music_on
        ? songAudioSource.disconnect()
        : songAudioSource.connect(audioContext.destination));
  };
  const handleResize = () => {
    const mx = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    csm_projections = [
      mat_perspective(0.3, 55, mx, 1.732051),
      mat_perspective(55, 181, mx, 1.732051),
    ],
      projection = mat_perspective(0.3, 181, mx, 1.732051),
      touchPosIdentifier = touchRotIdentifier = void 0,
      keyboard_downKeys.length =
        interact_pressed =
        gamepadInteractPressed =
        touch_movementX =
        touch_movementY =
        input_forward =
        input_strafe =
          0;
  };
  const mainMenu = (value) => {
    if (mainMenuVisible !== value) {
      if (mainMenuVisible = value, handleResize(), document.body.className = value ? "l m" : "l", value) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {}
      }
      updateMusicOnState();
    }
  };
  const start = (firstPerson) => {
    try {
      audioContext
      || (audioContext = new AudioContext(),
        (songAudioSource = audioContext.createBufferSource()).buffer = audioBuffer,
        songAudioSource.loop = !0,
        songAudioSource.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {}
    mainMenu(!1), player_first_person = firstPerson;
  };
  const getGamepadButtonState = (gamepad, index) =>
    gamepad.buttons[index]?.pressed || 0 < gamepad.buttons[index]?.value ? 1 : 0;
  oncontextmenu = () => !1,
    b1.onclick = () => {
      start();
    },
    b2.onclick = () => {
      start(1);
    },
    b5.onclick = () => mainMenu(!0),
    b4.onclick = () => {
      music_on = !music_on, updateMusicOnState();
    },
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage["DanteSP22"] = "", location.reload());
    },
    onclick = (e) => {
      if (!mainMenuVisible && (e.target === hC && (interact_pressed = 1), player_first_person)) {try {
          hC.requestPointerLock();
        } catch {}}
    },
    onkeyup = onkeydown = (e) => {
      let mapped;
      e.repeat || (mapped = ({
        "KeyE": 0,
        "Space": 0,
        "Enter": 0,
        "Escape": 1,
        "KeyA": 2,
        "ArrowLeft": 2,
        "KeyD": 3,
        "ArrowRight": 3,
        "KeyW": 4,
        "ArrowUp": 4,
        "KeyS": 5,
        "ArrowDown": 5,
      })[e.code],
        (keyboard_downKeys[mapped] = !!e.type[5] && !0)
        && (mapped === 0 && (interact_pressed = 1), mapped === 1 && mainMenu(!0)));
    },
    onmousemove = ({ movementX, movementY }) => {
      player_first_person && (movementX || movementY)
        && (camera_rotation.y += 0.1 * movementX, camera_rotation.x += 0.1 * movementY);
    },
    hC.ontouchstart = (e) => {
      if (!mainMenuVisible) {
        for (let { pageX, pageY, identifier } of e.changedTouches) {
          player_first_person && pageX > hC.clientWidth / 2
            ? touchRotIdentifier === void 0
              && (touchRotMoved = 0,
                touchRotX = pageX,
                touchRotY = pageY,
                touchRotIdentifier = identifier,
                touchStartCameraRotY = camera_rotation.x,
                touchStartCameraRotX = camera_rotation.y)
            : touchPosIdentifier === void 0
              && (touchPosMoved = 0, touchPosStartX = pageX, touchPosStartY = pageY, touchPosIdentifier = identifier);
        }
        touchStartTime = absoluteTime;
      }
    },
    hC.ontouchmove = (e) => {
      if (!mainMenuVisible) {
        for (let { pageX, pageY, identifier } of e.changedTouches) {
          var absDeltaX;
          var deltaY;
          var absDeltaY;
          var m;
          touchRotIdentifier === identifier
          && (camera_rotation.x = touchStartCameraRotY + (pageY - touchRotY) / 2.3,
            camera_rotation.y = touchStartCameraRotX + (pageX - touchRotX) / 2.3,
            touchRotMoved = 1),
            touchPosIdentifier === identifier
            && (identifier = (touchPosStartX - pageX) / 20,
              absDeltaX = abs(identifier),
              deltaY = (touchPosStartY - pageY) / 20,
              absDeltaY = abs(deltaY),
              (m = 0.5 < max(absDeltaX, absDeltaY)) && (touchPosMoved = 1),
              touch_movementX = (m && 0.3 < absDeltaX) * clamp(identifier, -1),
              touch_movementY = (m && 0.3 < absDeltaY) * clamp(deltaY, -1),
              2 < absDeltaX && (touchPosStartX = 20 * (identifier < 0 ? -1 : 1) + pageX),
              2 < absDeltaY && (touchPosStartY = 20 * (deltaY < 0 ? -1 : 1) + pageY));
        }
      }
    },
    hC.ontouchend = (e) => {
      let click;
      document.activeElement === document.body && e.preventDefault();
      for (const touch of e.changedTouches) {touch.identifier === touchRotIdentifier
          ? (touchRotIdentifier = void 0, touchRotMoved || (click = 1), touchRotMoved = 0)
          : touch.identifier === touchPosIdentifier
          ? (touchPosIdentifier = void 0,
            touch_movementY = touch_movementX = 0,
            touchPosMoved || (click = 1),
            touchPosMoved = 0)
          : click = 1;}
      e.target === hC && click && touchStartTime && 0.02 < (e = absoluteTime - touchStartTime) && e < 0.7
        && (interact_pressed = 1);
    },
    updateInput = () => {
      input_forward = touch_movementY + (keyboard_downKeys[4] ? 1 : 0) - (keyboard_downKeys[5] ? 1 : 0),
        input_strafe = touch_movementX + (keyboard_downKeys[2] ? 1 : 0) - (keyboard_downKeys[3] ? 1 : 0);
      let gamepad = navigator.getGamepads()[0];
      gamepad
        && (player_first_person
          && (camera_rotation.x += gameTimeDelta * threshold(gamepad.axes[3], 0.3) * 80,
            camera_rotation.y += gameTimeDelta * threshold(gamepad.axes[2], 0.3) * 80),
          input_forward += getGamepadButtonState(gamepad, 12) - getGamepadButtonState(gamepad, 13)
            - threshold(gamepad.axes[1], 0.2),
          input_strafe += getGamepadButtonState(gamepad, 14) - getGamepadButtonState(gamepad, 15)
            - threshold(gamepad.axes[0], 0.2),
          getGamepadButtonState(gamepad, 9) && mainMenu(!0),
          (gamepad = getGamepadButtonState(gamepad, 3) || getGamepadButtonState(gamepad, 2)
            || getGamepadButtonState(gamepad, 1) || getGamepadButtonState(gamepad, 0))
          && !gamepadInteractPressed && (interact_pressed = 1),
          gamepadInteractPressed = gamepad);
    },
    document.onvisibilitychange = onblur = onresize = handleResize,
    mainMenu(!0);
};
const meshAdd = (polygons, transform = new DOMMatrix(), color) =>
  currentEditModel.$polygons.push(...polygons_transform(polygons, transform, color));
const newModel = (fn, $kind = 1) => {
  const previousModel = currentEditModel;
  allModels.push(
    currentEditModel = {
      $matrix: new DOMMatrix(),
      $kind,
      $polygons: [],
    },
  ),
    fn(),
    currentEditModel = previousModel;
};
const distanceToPlayer = () => (matrixTransformPoint(),
  hypot(
    player_position_final.x - matrixTransformPoint.x,
    player_position_final.y - matrixTransformPoint.y,
    player_position_final.z - matrixTransformPoint.z,
  ));
const newLever = ($transform) => {
  const parentModel = currentEditModel;
  const index = levers.length;
  const lever = {
    $value: 0,
    $lerpValue: 0,
    $lerpValue2: 0,
    $matrix: parentModel.$matrix,
    $transform,
    _update() {
      lever.$lerpValue = lerpDamp(lever.$lerpValue, lever.$value, 4),
        lever.$lerpValue2 = lerpDamp(lever.$lerpValue2, lever.$value, 1),
        matrixCopy(parentModel.$matrix).multiplySelf($transform),
        interact_pressed && distanceToPlayer() < 3
          ? lever.$value
            ? 0.7 < lever.$lerpValue && (lever.$value = 0, onPlayerPullLever(index))
            : lever.$lerpValue < 0.3 && (lever.$value = 1, onPlayerPullLever(index))
          : lever.$value && 0.8 < lever.$lerpValue && !index
            && (lever.$value = 0,
              souls_collected_count < 13
                ? showMessage("Not leaving now, there are souls to catch!", 3)
                : game_completed
                  || (showMessage("Well done. They will be punished.<br>Thanks for playing", 1 / 0),
                    game_completed = 1)),
        tempMatrix.rotateSelf(60 * lever.$lerpValue - 30, 0).translateSelf(0, 1).m44 = 1 - lever.$lerpValue;
    },
  };
  levers.push(lever),
    meshAdd(cylinder(5), $transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5)),
    meshAdd(cylinder(5), $transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5)),
    meshAdd(cylinder(), $transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};
const newSoul = (transform, ...walkingPath) => {
  let lookAngle;
  let prevX;
  let prevZ;
  let velocity;
  let dirZ = 0;
  let randAngle = 0;
  let wasInside = 1;
  let dirX = -1;
  const soul = {
    $value: 0,
    _update() {
      if (!soul.$value) {
        let ax;
        let az;
        let magnitude;
        let angle;
        let isInside;
        let contextualVelocity = 1;
        let mindist = 1 / 0;
        for (let i = 0; walkingPath.length > i; i++) {
          const c = walkingPath[i];
          let distance = hypot(targetX - c[0], targetZ - c[1]);
          contextualVelocity = min(contextualVelocity, distance / c[2]),
            (distance -= c[2]) < 0 ? isInside = 1 : mindist > distance && (mindist = distance, circle = c);
        }
        isInside
        || (ax = targetX - circle[0],
          az = targetZ - circle[1],
          magnitude = hypot(ax, az),
          angle = Math.atan2(-az, ax),
          wasInside
          && (velocity = clamp(velocity / (1 + Math.random())), randAngle = (Math.random() - 0.5) * Math.PI / 2),
          angle += randAngle,
          dirX = -Math.cos(angle),
          dirZ = Math.sin(angle),
          0.1 < magnitude
          && (magnitude = min(magnitude, circle[2]) / magnitude,
            targetX = ax * magnitude + circle[0],
            targetZ = az * magnitude + circle[1])),
          wasInside = isInside,
          velocity = lerpDamp(velocity, 3 + 6 * (1 - contextualVelocity), 3 + contextualVelocity),
          soulX = lerpDamp(soulX, targetX = lerpDamp(targetX, targetX + dirX, velocity), velocity),
          soulZ = lerpDamp(soulZ, targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity), velocity),
          lookAngle = angle_lerp_degrees(
            lookAngle,
            Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180,
            damp(3),
          ),
          matrixCopy(parentModelMatrix).multiplySelf(transform).translateSelf(prevX = soulX, 0, prevZ = soulZ)
            .rotateSelf(0, lookAngle, 7 * Math.sin(1.7 * gameTime)),
          distanceToPlayer() < 1.6 && (soul.$value = 1,
            showMessage(
              [
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
                "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
              ][souls_collected_count] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              6,
            ),
            updateCollectedSoulsCounter(),
            saveGame());
      }
      soul.$value
        && matrixCopy(allModels[2].$matrix).translateSelf(
          index % 4 * 1.2 - 1.7 + Math.sin(gameTime + index) / 7,
          -2,
          1.7 * (index / 4 | 0) - 5.5 + abs(index % 4 - 2) + Math.cos(gameTime / 1.5 + index) / 6,
        );
    },
  };
  let circle = walkingPath[0];
  let [targetX, targetZ] = circle;
  let [soulX, soulZ] = circle;
  const parentModelMatrix = currentEditModel.$matrix;
  const index = souls.length;
  souls.push(soul);
};
const vec3_dot = ({ x, y, z }, b) => x * b.x + y * b.y + z * b.z;
const plane_fromPolygon = (polygon) => {
  let b;
  let x = 0;
  let y = 0;
  let z = 0;
  let a = polygon.at(-1);
  for (b of polygon) {
    x += (a.y - b.y) * (a.z + b.z), y += (a.z - b.z) * (a.x + b.x), z += (a.x - b.x) * (a.y + b.y), a = b;
  }
  return b = hypot(x, y, z), x /= b, y /= b, z /= b, {
    x,
    y,
    z,
    w: x * a.x + y * a.y + z * a.z,
  };
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
        let jd;
        const fpoints = [];
        const bpoints = [];
        const { $polygon: $polygon2, $flipped } = polygon2;
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
  return node
    ? ({ $front, $back } = CSGPolygon_split(node, polygon),
      $front || $back || node.$polygons.push(polygon),
      $front && (node.$front = csg_tree_addPolygon(node.$front, $front, plane)),
      $back && (node.$back = csg_tree_addPolygon(node.$back, $back, plane)))
    : node = {
      x: plane.x,
      y: plane.y,
      z: plane.z,
      w: plane.w,
      $polygons: [
        polygon,
      ],
      $front: 0,
      $back: 0,
    },
    node;
};
const csg_tree_clipNode = (anode, bnode, polygonPlaneFlipped) => {
  const result = [];
  const recursion = (node, polygon) => {
    let { $front, $back } = CSGPolygon_split(node, polygon);
    $front || $back || (0 < polygonPlaneFlipped * vec3_dot(node, bnode) ? $front = polygon : $back = polygon),
      $front && (node.$front ? recursion(node.$front, $front) : result.push($front)),
      $back && node.$back && recursion(node.$back, $back);
  };
  for (const polygon of bnode.$polygons) recursion(anode, polygon);
  return result;
};
const csg_tree_each = (node, fn) => node && (fn(node), csg_tree_each(node.$front, fn), csg_tree_each(node.$back, fn));
const csg_tree_flip = (root) => (csg_tree_each(root, (node) => {
  const back = node.$back;
  node.$back = node.$front, node.$front = back, node.x *= -1, node.y *= -1, node.z *= -1, node.w *= -1;
  for (const polygon of node.$polygons) polygon.$flipped = !polygon.$flipped;
}),
  root);
const csg_tree = (n) =>
  n.length
    ? n.reduce((prev, $polygon) =>
      csg_tree_addPolygon(prev, {
        $polygon,
        $flipped: 0,
        $parent: 0,
      }), 0)
    : n;
const csg_union = (...inputs) =>
  inputs.reduce((a, b) => {
    const polygonsToAdd = [];
    if (a = csg_tree(a), b) {
      b = csg_tree(b),
        csg_tree_each(a, (node) => node.$polygons = csg_tree_clipNode(b, node, 1)),
        csg_tree_each(b, (node) =>
          polygonsToAdd.push([
            node,
            csg_tree_clipNode(a, node, -1),
          ]));
      for (let [plane, polygons] of polygonsToAdd) for (const pp of polygons) csg_tree_addPolygon(a, pp, plane);
    }
    return a;
  });
const csg_polygons_subtract = (a, ...b) => {
  {
    const add = (polygon) => {
      let found;
      return polygon.$parent
        && ((found = byParent.get(polygon.$parent))
          ? (allPolygons.delete(found), polygon = add(polygon.$parent))
          : byParent.set(polygon.$parent, polygon)),
        polygon;
    };
    const byParent = new Map();
    const allPolygons = new Map();
    return a = csg_tree_flip(csg_union(csg_tree_flip(csg_tree(a)), ...b)),
      csg_tree_each(a, (node) => {
        for (const polygon of node.$polygons) allPolygons.set(add(polygon), polygon.$flipped);
      }),
      Array.from(allPolygons, ([{ $polygon }, flipped]) => {
        const polygon = $polygon.map(({ x, y, z }) => ({
          x,
          y,
          z,
        }));
        return polygon_color(flipped ? polygon.reverse() : polygon, $polygon.$color, $polygon.$smooth);
      });
  }
};
const modelsNextUpdate = () => matrixCopy(identity, allModels[++modelsUpdateCounter].$matrix);
const player_init = () => {
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
  let oldModelId;
  let camera_pos_lookat_x;
  let camera_pos_lookat_y;
  let camera_pos_lookat_z;
  let player_position_global_x = 0;
  let player_position_global_y = 0;
  let player_position_global_z = 0;
  let boot = 1;
  let player_respawned = 2;
  let player_gravity = 15;
  const loadReferenceMatrix = () =>
    matrixCopy(
      (player_respawned
        ? levers[player_last_pulled_lever]
        : allModels[oldModelId && allModels[oldModelId].$kind === 1 && oldModelId || 0]).$matrix,
    );
  const updatePlayerPositionFinal = (updateVelocity) => {
    1 < player_respawned
      ? (matrixCopy(levers[player_last_pulled_lever].$matrix).multiplySelf(levers[player_last_pulled_lever].$transform),
        matrixTransformPoint(0, player_last_pulled_lever || 0.9 < firstBoatLerp ? 15 : 1, -2.4))
      : (loadReferenceMatrix(),
        matrixTransformPoint(player_position_global_x, player_position_global_y, player_position_global_z)),
      updateVelocity
      && (player_fly_velocity_x = (matrixTransformPoint.x - player_position_final.x) / gameTimeDelta,
        player_fly_velocity_z = (matrixTransformPoint.z - player_position_final.z) / gameTimeDelta),
      player_position_final.x = matrixTransformPoint.x,
      player_position_final.y = matrixTransformPoint.y,
      player_position_final.z = matrixTransformPoint.z;
  };
  const movePlayer = (mx, my, mz) => {
    loadReferenceMatrix().invertSelf(),
      matrixTransformPoint(mx, my, mz, 0),
      player_position_global_x += matrixTransformPoint.x,
      player_position_global_y += my,
      player_position_global_z += matrixTransformPoint.z,
      updatePlayerPositionFinal();
  };
  const doCollisions = () => {
    let modelACount = 0;
    let modelB = 0;
    let modelBCount = 0;
    let movY = 0;
    let movX = 0;
    let movZ = 0;
    let lineToProcess = -1;
    for (let y = 0; y < 36; ++y) {
      const yindex = 512 * y;
      for (let x = 96; x < 416; x += 4) {
        for (let k = 0; k < 2; ++k) {
          const v = collision_buffer[yindex + x + k];
          const m = collision_buffer[yindex + x + k + 2];
          v > movY && (movY = v),
            v + m && (lineToProcess < 0 || lineToProcess === y)
            && (lineToProcess = y,
              m === currentModelId ? ++modelACount : modelB && modelB !== m || (modelB = m, ++modelBCount));
        }
      }
    }
    currentModelId = lineToProcess < 0 ? 0 : modelBCount > 2 * modelACount ? modelB : currentModelId;
    for (let y1 = 36; y1 < 128; ++y1) {
      let left = 0;
      let right = 0;
      let front = 0;
      let back = 0;
      const yindex1 = 512 * y1;
      for (let tx = 0; tx < 128; ++tx) {
        const index = yindex1 + 4 * tx;
        let v1 = collision_buffer[index];
        tx < 64 ? v1 > left && (left = v1) : v1 > right && (right = v1),
          (v1 = collision_buffer[2 + index]) > front && (front = v1),
          v1 = collision_buffer[1 + index],
          64 < tx ? v1 > left && (left = v1) : v1 > right && (right = v1),
          (v1 = collision_buffer[3 + index]) > back && (back = v1);
      }
      (right -= left) * right > movX * movX && (movX = right), (back -= front) * back > movZ * movZ && (movZ = back);
    }
    player_speed_collision_limiter = clamp(1 - 0.02 * max(abs(movX), abs(movZ))),
      movePlayer(movX / 255, movY / 255, movZ / 255);
  };
  const interpolate_with_hysteresis = (previous, desired, hysteresis, speed) =>
    lerp(previous, desired, boot || (clamp(abs(desired - previous) ** 0.5 - hysteresis) + 1 / 7) * damp(1.5 * speed));
  player_update = () => {
    updatePlayerPositionFinal(currentModelId),
      gl["r9r"](0, 0, 128, 128, 6408, 5121, collision_buffer),
      NO_INLINE(doCollisions)(),
      !player_respawned && currentModelId === oldModelId
      || (oldModelId = currentModelId,
        loadReferenceMatrix().invertSelf(),
        matrixTransformPoint(player_position_final.x, player_position_final.y, player_position_final.z),
        player_position_global_x = matrixTransformPoint.x,
        player_position_global_y = matrixTransformPoint.y,
        player_position_global_z = matrixTransformPoint.z,
        player_respawned = player_respawned && (currentModelId ? 0 : 1)),
      (player_position_final.x < -20 || player_position_final.z < 109 ? -25 : -9) > player_position_final.y
      && (player_respawned = 2),
      currentModelId === 1 && (levers[9].$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0),
      player_model_y = lerp(
        lerpDamp(player_model_y, player_position_final.y, 2),
        player_position_final.y,
        player_respawned || 8 * abs(player_model_y - player_position_final.y),
      ),
      camera_pos_lookat_x = interpolate_with_hysteresis(camera_pos_lookat_x, player_position_final.x, 0.5, 1),
      camera_pos_lookat_y = interpolate_with_hysteresis(camera_pos_lookat_y, player_model_y, 2, 1),
      camera_pos_lookat_z = interpolate_with_hysteresis(camera_pos_lookat_z, player_position_final.z, 0.5, 1),
      player_on_rotating_platforms = lerpDamp(
        player_on_rotating_platforms,
        shouldRotatePlatforms * (27 < currentModelId && currentModelId < 32),
        2,
      ),
      player_first_person
        ? (d = player_respawned + damp(18),
          camera_position_x = lerp(camera_position_x, player_position_final.x, d),
          camera_position_z = lerp(camera_position_z, player_position_final.z, d),
          camera_position_y = lerp(camera_position_y, 1.6 + player_model_y, d),
          camera_rotation.y = angle_wrap_degrees(camera_rotation.y))
        : (camera_position_x = interpolate_with_hysteresis(
          camera_position_x,
          camera_pos_lookat_x,
          1,
          2 + player_on_rotating_platforms,
        ),
          camera_position_z = interpolate_with_hysteresis(
            camera_position_z,
            camera_pos_lookat_z + -18 + 5 * player_on_rotating_platforms,
            1,
            2 + player_on_rotating_platforms,
          ),
          camera_position_y = interpolate_with_hysteresis(
            camera_position_y,
            max(
              camera_pos_lookat_y + clamp((-60 - player_position_final.z) / 8, 0, 20) + 13
                + 9 * player_on_rotating_platforms,
              6,
            ),
            4,
            2,
          ),
          d = min(-6, -abs(camera_pos_lookat_z - camera_position_z)),
          viewDirDiffx = camera_pos_lookat_x - camera_position_x,
          camera_rotation.y = angle_lerp_degrees(
            camera_rotation.y,
            90 - angle_wrap_degrees(Math.atan2(d, viewDirDiffx) / DEG_TO_RAD),
            boot + damp(10),
          ),
          camera_rotation.x = angle_lerp_degrees(
            camera_rotation.x,
            90 - Math.atan2(hypot(d, viewDirDiffx), camera_position_y - camera_pos_lookat_y) / DEG_TO_RAD,
            boot + damp(10),
          )),
      camera_rotation.x = clamp(camera_rotation.x, -87, 87),
      boot = 0;
    var d = clamp(input_forward, -1);
    var viewDirDiffx = clamp(input_strafe, -1);
    const movAmount = threshold(hypot(d, viewDirDiffx) ** 0.5, 0.1);
    let movAngle = Math.atan2(d, viewDirDiffx);
    movAmount && (player_look_angle_target = 90 - movAngle / DEG_TO_RAD),
      player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, damp(8)),
      player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10),
      modelsNextUpdate().translateSelf(
        player_position_final.x,
        0.06 * player_speed_collision_limiter * player_legs_speed * Math.cos(18.2 * gameTime) + player_model_y,
        player_position_final.z,
      ).rotateSelf(0, player_look_angle);
    for (let i = 0; i < 2; ++i) {
      const t = 9.1 * gameTime - Math.PI * i;
      matrixCopy(allModels[37].$matrix, modelsNextUpdate()).translateSelf(
        0,
        player_legs_speed * clamp(0.45 * Math.sin(t - Math.PI / 2)),
      ).rotateSelf(player_legs_speed * Math.sin(t) * 0.25 / DEG_TO_RAD, 0);
    }
    player_gravity = currentModelId
      ? 5
      : lerpDamp(player_gravity, player_respawned ? 13 : 19 - 2 * min(0, player_position_final.y + 10), 2.2),
      player_fly_velocity_x = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_x, 0, 3),
      player_fly_velocity_z = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_z, 0, 3),
      d = (player_speed = player_respawned
        ? 0
        : lerpDamp(
          player_speed,
          currentModelId ? 7 * clamp(2 * movAmount) * player_speed_collision_limiter : 0,
          currentModelId ? 9 : 1,
        )) * movAmount * abs(d) * Math.sin(movAngle),
      viewDirDiffx = player_speed * movAmount * abs(viewDirDiffx) * Math.cos(movAngle),
      movAngle = player_first_person ? (180 + camera_rotation.y) * DEG_TO_RAD : 0,
      movePlayer(
        gameTimeDelta * (player_fly_velocity_x + (viewDirDiffx * Math.cos(movAngle) - Math.sin(movAngle) * d)),
        gameTimeDelta * -player_gravity,
        gameTimeDelta * (player_fly_velocity_z + (viewDirDiffx * Math.sin(movAngle) + Math.cos(movAngle) * d)),
      );
  };
};
const boatAnimationMatrix = (matrix, x, y, z) =>
  matrix.translateSelf(x + Math.sin(gameTime + 2) / 5, y + Math.sin(0.8 * gameTime) / 3, z).rotateSelf(
    2 * Math.sin(gameTime),
    Math.sin(0.7 * gameTime),
    Math.sin(0.9 * gameTime),
  );
const renderModels = (worldMatrixLoc, renderPlayer, soulModelId) => {
  mainMenuVisible
    ? 1100 < hC.width
      && (matrixCopy().rotateSelf(0, 40 * Math.sin(absoluteTime) - 80, -8),
        matrixToArray(tempMatrix, worldMatricesBuffer, 36),
        matrixToArray(tempMatrix, worldMatricesBuffer, 37),
        matrixToArray(tempMatrix, worldMatricesBuffer, 38),
        gl["uae"](worldMatrixLoc, !1, worldMatricesBuffer),
        gl["d97"](4, allModels[39].$vertexEnd - allModels[37].$vertexBegin, 5123, 2 * allModels[37].$vertexBegin))
    : (gl["uae"](worldMatrixLoc, !1, objectsMatricesBuffer),
      gl["das"](
        4,
        allModels[soulModelId].$vertexEnd - allModels[soulModelId].$vertexBegin,
        5123,
        2 * allModels[soulModelId].$vertexBegin,
        souls.length,
      ),
      gl["das"](
        4,
        allModels[42].$vertexEnd - allModels[42].$vertexBegin,
        5123,
        2 * allModels[42].$vertexBegin,
        levers.length,
      ),
      gl["uae"](worldMatrixLoc, !1, worldMatricesBuffer),
      gl["d97"](4, (renderPlayer ? allModels[39].$vertexEnd : allModels[37].$vertexBegin) - 3, 5123, 6));
};
const loadShader = (source, type = 35633) => (type = gl["c6x"](type), gl["s3c"](type, source), gl["c6a"](type), type);
const initShaderProgram = (vertexShader, sfsSource) => {
  const uniforms = {};
  const program = gl["c1h"]();
  return gl["abz"](program, vertexShader),
    gl["abz"](program, loadShader(sfsSource, 35632)),
    gl["l8l"](program),
    (name) => name ? uniforms[name] || (uniforms[name] = gl["gan"](program, name)) : gl["u7y"](program);
};
const tempMatrix = new DOMMatrix();
const identity = new DOMMatrix();
const float32Array16Temp = new Float32Array(16);
const worldMatricesBuffer = new Float32Array(624);
const objectsMatricesBuffer = new Float32Array(624);
const collision_buffer = new Uint8Array(65536);
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
loadStep(() => {
  let loadStatus = 0;
  const end = () => {
    if (++loadStatus == 2) {
      const csm_lightSpaceMatrices = [
        new Float32Array(16),
        new Float32Array(16),
      ];
      const mainLoop = (globalTime) => {
        requestAnimationFrame(mainLoop);
        let dt = (globalTime - (_globalTime || globalTime)) / 1e3;
        if (
          absoluteTime += dt,
            gameTime += gameTimeDelta = mainMenuVisible ? 0 : min(0.066, dt),
            _globalTime = globalTime,
            0 < gameTimeDelta
        ) {
          updateInput(),
            _messageEndTime && gameTime > _messageEndTime && (_messageEndTime = 0, h4.innerHTML = ""),
            firstBoatLerp = lerpDamp(
              firstBoatLerp,
              game_completed ? lerpDamp(firstBoatLerp, -9, 1.5) : clamp(gameTime / 3),
              1,
            ),
            secondBoatLerp = lerpDamp(
              secondBoatLerp,
              levers[9].$lerpValue2,
              0.2 + 0.3 * abs(2 * levers[9].$lerpValue2 - 1),
            );
          {
            modelsUpdateCounter = 1,
              shouldRotatePlatforms = lerpneg(levers[12].$lerpValue, levers[13].$lerpValue),
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
              boatAnimationMatrix(modelsNextUpdate(), -12, 4.2, 40 * firstBoatLerp - 66),
              modelsNextUpdate().translateSelf(0, 0, -15).scaleSelf(1, clamp(1.22 - levers[1].$lerpValue), 1),
              modelsNextUpdate().translateSelf(0, 0, 15).scaleSelf(1, clamp(1.22 - levers[2].$lerpValue), 1),
              modelsNextUpdate().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, clamp(1.1 - levers[6].$lerpValue), 1),
              modelsNextUpdate().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - levers[12].$lerpValue),
              modelsNextUpdate().translateSelf(
                0,
                levers[3].$lerpValue < 0.01
                  ? -500
                  : (2 + 5 * Math.cos(1.5 * gameTime)) * (1 - levers[2].$lerpValue) * levers[3].$lerpValue2
                    + 15 * (levers[3].$lerpValue - 1),
              );
            let oscillation = min(1 - levers[4].$lerpValue2, levers[2].$lerpValue2);
            modelsNextUpdate().translateSelf(oscillation * Math.sin(gameTime / 1.5 + 2) * 12),
              modelsNextUpdate().translateSelf(oscillation * Math.sin(0.7 * gameTime + 2) * 12),
              modelsNextUpdate().translateSelf(oscillation * Math.sin(gameTime + 3) * 8.2),
              modelsNextUpdate().translateSelf(9.8 * (1 - oscillation)),
              oscillation = clamp(1 - 5 * oscillation) * lerpneg(levers[4].$lerpValue, levers[5].$lerpValue),
              modelsNextUpdate().translateSelf(0, oscillation * Math.sin(1.35 * gameTime) * 4),
              modelsNextUpdate().translateSelf(0, 0, oscillation * Math.sin(0.9 * gameTime) * 8),
              modelsNextUpdate().translateSelf(0, -6.5 * levers[4].$lerpValue2),
              modelsNextUpdate().translateSelf(-75, 3 * (1 - levers[5].$lerpValue2) * (1 - levers[6].$lerpValue), 55)
                .rotateSelf(180 * (1 - levers[5].$lerpValue2) + rotatingHexCorridorRotation, 0),
              oscillation = lerpneg(levers[7].$lerpValue2, levers[6].$lerpValue2),
              modelsNextUpdate().translateSelf(
                0,
                oscillation * Math.sin(gameTime) * 5 + 3.5 * (1 - max(levers[6].$lerpValue, levers[7].$lerpValue)),
              ),
              modelsNextUpdate().translateSelf(
                0,
                oscillation * Math.sin(gameTime + 3) * 6,
                oscillation * Math.sin(0.6 * gameTime + 1) * 6,
              ),
              modelsNextUpdate().translateSelf(0, -7.3 * levers[7].$lerpValue2),
              boatAnimationMatrix(modelsNextUpdate(), -123, 1.4, 55 - 65 * secondBoatLerp),
              oscillation = lerpneg(levers[10].$lerpValue, levers[11].$lerpValue),
              modelsNextUpdate().translateSelf(0, -2, 10 - 8.5 * oscillation * abs(Math.sin(1.1 * gameTime))),
              modelsNextUpdate().translateSelf(0, -2, 10 - 8.5 * oscillation * abs(Math.sin(2.1 * gameTime))),
              modelsNextUpdate().translateSelf(
                0,
                -2,
                10
                  - 8.5
                    * max(oscillation * abs(Math.sin(1.5 * gameTime)), (1 - levers[10].$lerpValue) * (1 - oscillation)),
              ),
              oscillation = lerpneg(levers[8].$lerpValue2, levers[12].$lerpValue2);
            for (let i = 0; i < 4; i++) {
              modelsNextUpdate().translateSelf(
                (2 < i ? 2 * (1 - oscillation) + oscillation : 0) - 100,
                oscillation * Math.sin(1.3 * gameTime + 1.7 * i) * (3 + i / 3) + 0.7,
                115 - 7 * (1 - levers[8].$lerpValue2) * (1 - levers[12].$lerpValue2) * (1 & i ? -1 : 1)
                  + max(0.05, oscillation) * Math.cos(1.3 * gameTime + 7 * i) * (4 - 2 * (1 - i / 3)),
              );
            }
            modelsNextUpdate().translateSelf(
              2.5 * (1 - oscillation) - 139.7,
              -3 * (1 - levers[8].$lerpValue) - oscillation * Math.sin(0.8 * gameTime) - 1.8,
              93.5,
            ).rotateSelf(Math.cos(1.3 * gameTime) * (3 + 3 * oscillation), 0),
              modelsNextUpdate().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + rotatingPlatform1Rotation),
              modelsNextUpdate().translateSelf(-65.8, 0.8, 106).rotateSelf(0, rotatingPlatform2Rotation),
              modelsNextUpdate().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - rotatingPlatform2Rotation),
              modelsNextUpdate().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + rotatingPlatform2Rotation),
              oscillation = lerpneg(levers[13].$lerpValue2, levers[14].$lerpValue2);
            for (let i1 = 0; i1 < 3; ++i1) {
              modelsNextUpdate().translateSelf(
                0,
                oscillation * Math.sin(1.5 * gameTime + 1.5 * i1) * 4
                  + (i1 ? 0 : (1 - levers[13].$lerpValue2) * (1 - levers[14].$lerpValue2)),
              );
            }
            modelsNextUpdate().translateSelf(-2 * Math.sin(gameTime)).rotateSelf(25 * Math.sin(gameTime)),
              dt = lerpneg(
                lerpneg((levers[14].$lerpValue + levers[14].$lerpValue2) / 2, levers[13].$lerpValue2),
                (levers[15].$lerpValue + levers[15].$lerpValue2) / 2,
              ),
              modelsNextUpdate().translateSelf(0, 16 * dt, 95 + 8.5 * clamp(2 * dt - 1));
            for (let i2 = 0; i2 < 13; ++i2) souls[i2]._update(), matrixToArray(tempMatrix, objectsMatricesBuffer, i2);
            for (let i3 = 0; i3 < 16; ++i3) {
              levers[i3]._update(), matrixToArray(tempMatrix, objectsMatricesBuffer, 13 + i3);
            }
            player_update();
            for (let i4 = 0; modelsUpdateCounter >= i4; ++i4) {
              matrixToArray(allModels[i4].$matrix, worldMatricesBuffer, i4 - 1);
            }
          }
          collisionShader(),
            gl["b6o"](36160, collision_frameBuffer),
            gl["v5y"](0, 0, 128, 128),
            gl["c4s"](16640),
            gl["cbf"](!0, !1, !0, !1),
            gl["uae"](
              collisionShader("b"),
              !1,
              matrixToArray(
                matrixCopy().rotateSelf(0, 180).invertSelf().translateSelf(
                  -player_position_final.x,
                  -player_position_final.y,
                  0.3 - player_position_final.z,
                ),
              ),
            ),
            renderModels(collisionShader("c"), 0, 40),
            gl["c4s"](256),
            gl["cbf"](!1, !0, !1, !0),
            gl["uae"](
              collisionShader("b"),
              !1,
              matrixToArray(
                matrixCopy().translateSelf(
                  -player_position_final.x,
                  -player_position_final.y,
                  -player_position_final.z - 0.3,
                ),
              ),
            ),
            renderModels(collisionShader("c"), 0, 40),
            interact_pressed = 0;
        }
        let cameraX = camera_position_x;
        let cameraY = camera_position_y;
        let cameraZ = camera_position_z;
        mainMenuVisible
          ? (matrixCopy(projection).invertSelf(),
            matrixTransformPoint(3.6, 3.5),
            cameraX = matrixTransformPoint.x,
            cameraY = matrixTransformPoint.y,
            cameraZ = 5,
            matrixCopy(identity, camera_view).rotateSelf(-20, 0).invertSelf().translateSelf(
              -cameraX,
              -cameraY,
              -cameraZ,
            ).rotateSelf(0, 99))
          : matrixCopy(identity, camera_view).rotateSelf(-camera_rotation.x, -camera_rotation.y).invertSelf()
            .translateSelf(-cameraX, -cameraY, -cameraZ),
          csmShader(),
          gl["b6o"](36160, csm_framebuffer),
          gl["v5y"](0, 0, 2048, 2048),
          csm_render[0](54.7 * 1.1),
          csm_render[1](126 * 1.1),
          mainShader(),
          gl["b6o"](36160, null),
          gl["v5y"](0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight),
          gl["cbf"](!0, !0, !0, !0),
          gl["c4s"](16640),
          gl["uae"](mainShader("a"), !1, matrixToArray(projection)),
          gl["uae"](mainShader("b"), !1, matrixToArray(camera_view)),
          gl["uae"](mainShader("i"), !1, csm_lightSpaceMatrices[0]),
          gl["uae"](mainShader("j"), !1, csm_lightSpaceMatrices[1]),
          gl["ubu"](mainShader("k"), cameraX, cameraY, cameraZ),
          renderModels(mainShader("c"), !player_first_person, 41),
          skyShader(),
          gl["ubu"](skyShader("j"), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime),
          gl["ubu"](skyShader("k"), cameraX, cameraY, cameraZ),
          gl["uae"](skyShader("b"), !1, matrixToArray(matrixCopy(camera_view).invertSelf())),
          gl["d97"](4, 3, 5123, 0),
          gl["b6o"](36160, collision_frameBuffer),
          gl["f1s"]();
      };
      const csm_tempMatrix = new DOMMatrix();
      const camera_view = new DOMMatrix();
      const groundTextureImage = image;
      const csm_tempFrustumCorners = integers_map(8, () => ({}));
      var mainVertexShader = loadShader(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`);
      const csmShader = initShaderProgram(
        loadShader(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
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
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`,
      );
      const mainShader = initShaderProgram(
        mainVertexShader,
        `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
      );
      const csm_render = integers_map(2, (split) => {
        const texture = gl["c25"]();
        return gl["a4v"](33984 + split),
          gl["b9j"](3553, texture),
          gl["t60"](3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
          gl["t2z"](3553, 10241, 9729),
          gl["t2z"](3553, 10240, 9729),
          gl["t2z"](3553, 34893, 515),
          gl["t2z"](3553, 34892, 34894),
          gl["t2z"](3553, 10243, 33071),
          gl["t2z"](3553, 10242, 33071),
          (roundingRadius) => {
            let tx = 0;
            let ty = 0;
            let tz = 0;
            let left = 1 / 0;
            let bottom = 1 / 0;
            let near = 1 / 0;
            let right = -1 / 0;
            let top = -1 / 0;
            let far = -1 / 0;
            gl["fas"](36160, 36096, 3553, texture, 0),
              gl["c4s"](256),
              matrixCopy().scale3dSelf(roundingRadius).multiplySelf(
                matrixCopy(csm_projections[split], csm_tempMatrix).multiplySelf(camera_view).invertSelf(),
              );
            for (let i = 0; i < 8; ++i) {
              const p = csm_tempFrustumCorners[i];
              matrixTransformPoint(4 & i ? 1 : -1, 2 & i ? 1 : -1, 1 & i ? 1 : -1),
                tx -= p.x = (0 | matrixTransformPoint.x) / (roundingRadius * matrixTransformPoint.w),
                ty -= p.y = (0 | matrixTransformPoint.y) / (roundingRadius * matrixTransformPoint.w),
                tz -= p.z = (0 | matrixTransformPoint.z) / (roundingRadius * matrixTransformPoint.w);
            }
            matrixCopy().rotateSelf(298, 139).translateSelf(tx / 8, ty / 8, tz / 8);
            for (let i1 = 0; i1 < 8; ++i1) {
              const { x, y, z } = csm_tempFrustumCorners[i1];
              matrixTransformPoint(x, y, z),
                left = min(left, matrixTransformPoint.x),
                right = max(right, matrixTransformPoint.x),
                bottom = min(bottom, matrixTransformPoint.y),
                top = max(top, matrixTransformPoint.y),
                near = min(near, matrixTransformPoint.z),
                far = max(far, matrixTransformPoint.z);
            }
            const zMultiplier = 10 + split;
            near *= near < 0 ? zMultiplier : 1 / zMultiplier,
              far *= 0 < far ? zMultiplier : 1 / zMultiplier,
              gl["uae"](
                csmShader("b"),
                !1,
                matrixToArray(
                  matrixCopy(identity, csm_tempMatrix).scaleSelf(
                    2 / (right - left),
                    2 / (top - bottom),
                    2 / (near - far),
                  ).translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2).multiplySelf(tempMatrix),
                  csm_lightSpaceMatrices[split],
                ),
              ),
              renderModels(csmShader("c"), !player_first_person, 41);
          };
      });
      const csm_framebuffer = gl["c5w"]();
      var mainVertexShader = gl["c25"]();
      const collision_renderBuffer = gl["c3z"]();
      const collision_frameBuffer = gl["c5w"]();
      collisionShader(),
        gl["uae"](collisionShader("a"), !1, matrixToArray(mat_perspective(1e-4, 2, 1.4, 0.4))),
        mainShader(),
        gl["ubh"](mainShader("q"), 2),
        gl["ubh"](mainShader("h"), 1),
        gl["ubh"](mainShader("g"), 0),
        skyShader(),
        gl["ubh"](skyShader("q"), 2),
        gl["b6o"](36160, csm_framebuffer),
        gl["d45"]([
          0,
        ]),
        gl["r9l"](0),
        gl["b6o"](36160, collision_frameBuffer),
        gl["bb1"](36161, collision_renderBuffer),
        gl["r4v"](36161, 33190, 128, 128),
        gl["f8w"](36160, 36096, 36161, collision_renderBuffer),
        gl["a4v"](33986),
        gl["b9j"](3553, mainVertexShader),
        gl["t60"](3553, 0, 6408, 128, 128, 0, 6408, 5121, null),
        gl["fas"](36160, 36064, 3553, mainVertexShader, 0),
        gl["b9j"](3553, gl["c25"]()),
        gl["t60"](3553, 0, 6408, 1024, 1024, 0, 6408, 5121, groundTextureImage),
        gl["t2z"](3553, 10241, 9987),
        gl["t2z"](3553, 10240, 9729),
        gl["gbn"](3553),
        gl["e8z"](2929),
        gl["e8z"](2884),
        gl["c70"](1),
        gl["c7a"](1029),
        gl["d4n"](515),
        gl["c5t"](0, 0, 0, 0),
        NO_INLINE(initPage)(),
        NO_INLINE(player_init)(),
        requestAnimationFrame(mainLoop);
    }
  };
  const image = new Image();
  image.onload = image.onerror = end,
    image.src = groundTextureSvg,
    NO_INLINE(loadSong)(() => {
      loadStep(() => {
        {
          let meshFirstIndex = 0;
          const _triangleIndices = [];
          const _vertexPositions = [];
          const _vertexColors = [];
          const _vertexNormals = [];
          const _vertexInts = new Int32Array(8);
          const _vertexMap = new Map();
          const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 5);
          const _vertexFloats = new Float32Array(_vertexInts.buffer);
          allModels.map((model, index) => {
            let polygon;
            const getVertex = (i) => {
              let { x, y, z } = polygon[i];
              let vertexIndex =
                (_vertexFloats[0] = x,
                  _vertexFloats[1] = y,
                  _vertexFloats[2] = z,
                  i = "" + (polygon.$smooth ? _vertexIntsSmooth : _vertexInts),
                  _vertexMap.get(i));
              return vertexIndex !== void 0
                ? (x = 3 * vertexIndex,
                  _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[5]) / 2,
                  _vertexNormals[x] = (_vertexNormals[x++] + _vertexInts[6]) / 2,
                  _vertexNormals[x] = (_vertexNormals[x] + _vertexInts[7]) / 2)
                : (_vertexMap.set(i, vertexIndex = _vertexMap.size),
                  _vertexPositions.push(x, y, z, _vertexFloats[3]),
                  _vertexColors.push(_vertexInts[4]),
                  _vertexNormals.push(_vertexInts[5], _vertexInts[6], _vertexInts[7])),
                vertexIndex;
            };
            for (polygon of (_vertexFloats[3] = 41 < index ? -14 : model.$kind && index, model.$polygons)) {
              const { x, y, z } = plane_fromPolygon(polygon);
              _vertexInts[4] = 0 | polygon.$color,
                _vertexInts[5] = 32767 * x,
                _vertexInts[6] = 32767 * y,
                _vertexInts[7] = 32767 * z;
              for (let i = 2, a = getVertex(0), b = getVertex(1); polygon.length > i; ++i) {
                _triangleIndices.push(a, b, b = getVertex(i));
              }
            }
            model.$polygons = 0,
              model.$vertexBegin = meshFirstIndex,
              model.$vertexEnd = meshFirstIndex = _triangleIndices.length;
          }),
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
        try {
          const [savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedSecondBoatLerp] = JSON.parse(
            localStorage["DanteSP22"],
          );
          levers.map((lever, index) =>
            lever.$lerpValue = lever.$lerpValue2 = lever.$value = index ? 0 | savedLevers[index] : 0
          ),
            souls.map((soul, index) => soul.$value = 0 | savedSouls[index]),
            player_last_pulled_lever = savedLastPulledLever,
            gameTime = savedGameTime,
            secondBoatLerp = savedSecondBoatLerp;
        } catch {}
        updateCollectedSoulsCounter(), firstBoatLerp = clamp(player_last_pulled_lever), loadStep(end);
      });
      {
        const hornMatrix = (i) =>
          translation(Math.sin((i /= 11) * Math.PI), i).rotateSelf(10 * i).scaleSelf(1.001 - i, 1, 1.001 - i);
        const hornPolygons = integers_map(11, (i) =>
          cylinder_sides(
            polygon_transform(polygon_regular(19), hornMatrix(i), material(1, 1, 0.8, 0.2)).reverse(),
            polygon_transform(polygon_regular(19), hornMatrix(i + 1), material(1, 1, 0.8, 0.2)),
            1,
          )).flat();
        newModel(() =>
          meshAdd([
            GQuad.slice(1),
          ], translation(-2).scale3d(3).rotate(90, 0)), 0),
          newModel(() => {
            const blackPlatform = (pz) =>
              newModel(() => {
                GQuad.map(({ x, z }) => {
                  meshAdd(
                    cylinder(11, 1),
                    translation(4 * x, 4, pz + 4 * z).scale(0.8, 3, 0.8),
                    material(0.5, 0.3, 0.7, 0.6),
                  ), meshAdd(cylinder(), translation(4 * x, 7, pz + 4 * z).scale(1, 0.3), material(0.5, 0.5, 0.5, 0.3));
                }),
                  meshAdd(
                    csg_polygons_subtract(
                      polygons_transform(
                        cylinder(),
                        translation(0, 0, pz).scale(5, 1, 5),
                        material(0.8, 0.8, 0.8, 0.3),
                      ),
                      ...[
                        -1,
                        1,
                      ].map((i) =>
                        polygons_transform(
                          cylinder(),
                          translation(5 * i, 0.2, pz).rotate(-30 * i).scale(4, 1, 2),
                          material(0.8, 0.8, 0.8, 0.3),
                        )
                      ),
                    ),
                  ),
                  meshAdd(cylinder(), translation(0, -3, pz).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
              });
            const makeBigArcPolygons = (height) =>
              csg_polygons_subtract(
                polygons_transform(cylinder(), translation(0, -height / 2).scale(6, height - 1, 2.2)),
                polygons_transform(cylinder(), translation(0, -height / 2 - 6).scale(4, height - 3, 4)),
                polygons_transform(cylinder(32, 1), translation(0, height / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              );
            const gateBarsModel = () =>
              newModel(() =>
                integers_map(7, (i) =>
                  meshAdd(
                    polygons_transform(
                      cylinder(9, 1),
                      translation(4 * (i / 6 - 0.5), 3).scale(0.2, 3, 0.2),
                      material(0.3, 0.3, 0.38),
                    ),
                  ))
              );
            const boatPolygons = csg_polygons_subtract(
              polygons_transform(
                cylinder(30, 1, 1.15, 1),
                translation(0, -3).scale(3.5, 1, 3.5),
                material(0.7, 0.4, 0.25, 0.7),
              ),
              polygons_transform(
                cylinder(30, 1, 1.3, 1),
                translation(0, -2.5).scale(2.6, 1, 3),
                material(0.7, 0.4, 0.25, 0.2),
              ),
              polygons_transform(cylinder(), translation(4, -1.2).scale3d(2), material(0.7, 0.4, 0.25, 0.3)),
            );
            const hexCorridorPolygons = (newModel(() => {
              meshAdd(boatPolygons), newLever(translation(0, -3, 4));
            }),
              newLever(translation(-5.4, 1.5, -19).rotate(0, -90)),
              newSoul(translation(-0.5, 2.8, -20), [
                0,
                0,
                2.5,
              ], [
                0,
                -3,
                2.5,
              ]),
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
                  7 * x,
                  10 * z,
                  4.5 - 2 * abs(x),
                ]),
              ),
              [
                -15,
                15,
              ].map((z, j) => {
                gateBarsModel(),
                  gateBarsModel(),
                  meshAdd(cylinder(), translation(0, 0, j ? 22 : -23).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2)),
                  meshAdd(cylinder(), translation(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4)),
                  meshAdd(cylinder(), translation(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3)),
                  integers_map(5, (i) =>
                    meshAdd(
                      hornPolygons,
                      translation(18.5 * (j - 0.5), 0, 4.8 * i - 9.5).rotate(0, 180 - 180 * j).scale(1.2, 10, 1.2),
                    ));
              }),
              meshAdd(cylinder(), translation(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), material(0.8, 0.8, 0.8, 0.2)),
              meshAdd(cylinder(), translation(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2)),
              meshAdd(
                cylinder(),
                translation(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90),
                material(0.75, 0.75, 0.75, 0.2),
              ),
              meshAdd(
                cylinder(5),
                translation(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90),
                material(0.6, 0.3, 0.3, 0.4),
              ),
              meshAdd(
                csg_polygons_subtract(
                  csg_union(
                    polygons_transform(
                      cylinder(6, 0, 0, 0.3),
                      translation(8, -3, -4).scale(13, 1, 13),
                      material(0.7, 0.7, 0.7, 0.2),
                    ),
                    csg_polygons_subtract(
                      polygons_transform(
                        cylinder(6, 0, 0, 0.3),
                        translation(0, -0.92).scale(13, 2, 13),
                        material(0.8, 0.8, 0.8, 0.2),
                      ),
                      polygons_transform(
                        cylinder(),
                        identity.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2),
                        material(0.5, 0.5, 0.5, 0.5),
                      ),
                    ),
                    polygons_transform(
                      cylinder(),
                      identity.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(
                        4.03,
                        1.6,
                        4.5,
                      ),
                      material(0.8, 0.2, 0.2, 0.5),
                    ),
                    polygons_transform(cylinder(6), translation(0, -8).scale(9, 8, 7), material(0.2, 0.1, 0.4, 0.5)),
                  ),
                  polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),
                  polygons_transform(
                    cylinder(5, 0, 1.5),
                    translation(0, 1).scale(4.5, 0.3, 4.5),
                    material(0.7, 0.5, 0.9, 0.2),
                  ),
                  polygons_transform(
                    cylinder(6),
                    translation(15, -1.5, 4).scale(3.5, 1, 3.5),
                    material(0.5, 0.5, 0.5, 0.5),
                  ),
                ),
              ),
              newModel(() => {
                meshAdd(cylinder(5), translation(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3)),
                  newLever(translation(0, 1.2));
              }),
              newLever(translation(15, -2, 4)),
              newModel(() => {
                meshAdd(
                  csg_polygons_subtract(
                    csg_union(
                      polygons_transform(cylinder(), identity.scale(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
                      polygons_transform(cylinder(6), identity.scale(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
                      polygons_transform(
                        cylinder(),
                        translation(0, -2).scale(2, 3.2, 1.9),
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
                  translation(0, 0, 45),
                ),
                  newSoul(translation(0, 2.8, 45), [
                    0,
                    0,
                    4.5,
                  ]);
              }),
              blackPlatform(35),
              blackPlatform(55),
              meshAdd(cylinder(), translation(-18.65, -3, 55).scale(2.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2)),
              newModel(() => {
                meshAdd(cylinder(3), translation(-23, -1.7, 55.8).scale(5, 0.7, 8.3), material(0.3, 0.6, 0.6, 0.2)),
                  meshAdd(cylinder(8), translation(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), material(0.8, 0.8, 0.8, 0.2)),
                  meshAdd(cylinder(), translation(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3)),
                  meshAdd(cylinder(), translation(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3)),
                  newLever(translation(-23, -0.5, 66.5));
              }),
              newModel(() => {
                meshAdd(cylinder(), translation(-22.55, -3, 55).scale(1.45, 1.4, 2.7), material(0.7, 0.7, 0.7, 0.2)),
                  meshAdd(
                    csg_polygons_subtract(
                      polygons_transform(cylinder(), identity.scale(3, 1.4, 2.7)),
                      polygons_transform(cylinder(), identity.scale(1.2, 8, 1.2)),
                    ),
                    translation(-33, -3, 55),
                    material(0.7, 0.7, 0.7, 0.2),
                  );
              }),
              newModel(() => {
                meshAdd(
                  csg_polygons_subtract(
                    polygons_transform(
                      cylinder(),
                      translation(-27, -3, 55).scale(3, 1.4, 2.7),
                      material(0.9, 0.9, 0.9, 0.2),
                    ),
                    polygons_transform(cylinder(), translation(-27, -3, 55).scale(1, 3), material(0.9, 0.9, 0.9, 0.2)),
                  ),
                ), meshAdd(cylinder(), translation(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
              }),
              newModel(() => {
                meshAdd(
                  cylinder(6),
                  translation(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9),
                  material(0.7, 0.7, 0.7, 0.4),
                );
              }),
              newLever(translation(-55, -1.1, 46).rotate(0, 90)),
              meshAdd(cylinder(7), translation(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3)),
              meshAdd(cylinder(6), translation(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3)),
              [
                ...polygons_transform(cylinder(), translation(0, -3).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
                ...polygons_transform(
                  cylinder(),
                  translation(0, -2.2).scale(7.7, 0.5, 4),
                  material(0.5, 0.5, 0.5, 0.2),
                ),
                ...csg_polygons_subtract(
                  polygons_transform(cylinder(6), identity.rotate(90).scale(6, 8, 6), material(0.3, 0.6, 0.6, 0.3)),
                  polygons_transform(
                    cylinder(4, 0, 0.01),
                    translation(0, 6).scale(12, 2, 0.75).rotate(0, 45),
                    material(0.3, 0.6, 0.6, 0.3),
                  ),
                  polygons_transform(cylinder(6), identity.rotate(90).scale(5, 12, 5), material(0.3, 0.6, 0.6, 0.3)),
                  ...[
                    -5,
                    0,
                    5,
                  ].map((x) =>
                    polygons_transform(
                      cylinder(5),
                      translation(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8),
                      material(0.3, 0.6, 0.6, 0.3),
                    )
                  ),
                ),
              ]);
            const pushingRod = (newModel(() =>
              meshAdd(hexCorridorPolygons), 2),
              meshAdd(hexCorridorPolygons, translation(-53, 0, 55)),
              meshAdd(
                cylinder(),
                translation(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5),
                material(0.7, 0.7, 0.7, 0.2),
              ),
              meshAdd(
                cylinder(3, 0, -0.5),
                translation(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              meshAdd(
                csg_polygons_subtract(
                  csg_union(
                    polygons_transform(
                      cylinder(),
                      translation(-100, -2.4, 55).scale(8, 0.9, 8),
                      material(0.8, 0.8, 0.8, 0.2),
                    ),
                    polygons_transform(
                      cylinder(),
                      translation(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3),
                      material(0.8, 0.8, 0.8, 0.2),
                    ),
                    polygons_transform(
                      cylinder(),
                      translation(-100, -2.6, 70).scale(3, 1.1, 7),
                      material(0.8, 0.8, 0.8, 0.2),
                    ),
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
                    polygons_transform(
                      cylinder(),
                      translation(-100, 0.42, 92).scale(3, 1.1, 4.1),
                      material(0.8, 0.8, 0.8, 0.2),
                    ),
                  ),
                  polygons_transform(
                    cylinder(8),
                    translation(-100, -1, 55).scale(7, 0.9, 7),
                    material(0.3, 0.3, 0.3, 0.4),
                  ),
                  polygons_transform(
                    cylinder(8),
                    translation(-100, -2, 55).scale(4, 0.3, 4),
                    material(0.4, 0.4, 0.4, 0.5),
                  ),
                  polygons_transform(
                    cylinder(8, 0, -3.1),
                    translation(-100, -3, 55).scale(0.4, 1, 0.4),
                    material(0.4, 0.4, 0.4, 0.5),
                  ),
                ),
              ),
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
              ]),
              newSoul(translation(-89, 0.2, 80), [
                0,
                0,
                6,
              ]),
              meshAdd(
                csg_polygons_subtract(
                  polygons_transform(cylinder(), translation(-100, 1, 63).scale(7.5, 4), material(0.5, 0.5, 0.5, 0.4)),
                  polygons_transform(
                    cylinder(),
                    translation(-100, 0, 70).scale(2, 2, 10),
                    material(0.5, 0.5, 0.5, 0.4),
                  ),
                  polygons_transform(
                    cylinder(20, 1),
                    translation(-100, 2, 70).scale(2, 2, 10).rotate(90, 0),
                    material(0.5, 0.5, 0.5, 0.4),
                  ),
                ),
              ),
              GQuad.map(({ x, z }) => {
                meshAdd(cylinder(6), translation(3 * x, 3, 15 * z).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4)),
                  meshAdd(
                    cylinder(6),
                    translation(7 * x - 100, -3, 7 * z + 55).scale(1, 8.1),
                    material(0.6, 0.15, 0.15, 0.8),
                  ),
                  [
                    4,
                    -0.4,
                  ].map((i) =>
                    meshAdd(
                      cylinder(6),
                      translation(7 * x - 100, i, 7 * z + 55).scale(1.3, 0.5, 1.3),
                      material(0.4, 0.2, 0.2, 0.8),
                    )
                  ),
                  meshAdd(
                    cylinder(14, 1),
                    translation(9 * x - 38.9, -7.3, 11 * z + 17).scale(1, 4),
                    material(0.25, 0.25, 0.25, 1),
                  ),
                  [
                    1.5,
                    8,
                  ].map((y) =>
                    meshAdd(
                      cylinder(17, 1),
                      translation(9 * x - 38.9, y - 11.3, 11 * z + 17).scale(1.5, 0.5, 1.5),
                      material(0.6, 0.6, 0.6, 0.3),
                    )
                  );
              }),
              integers_map(7, (i) => {
                meshAdd(
                  cylinder((23 * i + 1) % 5 + 5, 0, 0.5),
                  translation(5 * Math.sin(i) - 101 + i, -2.3 - i, 44.9 - 2.8 * i).scaleSelf(
                    5 + i / 2,
                    1 + i / 6,
                    5 + i / 3,
                  ),
                  material(0.5 - i / 17, 0.5 - (1 & i) / 9, 0.6, 0.3),
                );
              }),
              meshAdd(cylinder(), translation(-87, -9.5, 24).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4)),
              meshAdd(cylinder(4), translation(-86, -9.2, 27).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3)),
              meshAdd(cylinder(12, 1), translation(-86, -9, 31).scale(1.5, 1, 1.5), material(0.3, 0.3, 0.4, 0.1)),
              newLever(translation(-86, -7.5, 31)),
              newModel(() => {
                [
                  0,
                  12,
                  24,
                ].map((x) =>
                  meshAdd(
                    cylinder(),
                    translation(x - 76.9, x / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3),
                    material(0.2, 0.5, 0.6, 0.2),
                  )
                );
              }),
              newModel(() => {
                [
                  6,
                  18,
                ].map((x) =>
                  meshAdd(
                    cylinder(),
                    translation(x - 76.9, x / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3),
                    material(0.1, 0.4, 0.5, 0.2),
                  )
                );
              }),
              meshAdd(
                csg_polygons_subtract(
                  csg_union(
                    polygons_transform(
                      cylinder(5),
                      translation(0, 0, -7).scale(2, 1.2, 2),
                      material(0.2, 0.4, 0.7, 0.3),
                    ),
                    polygons_transform(cylinder(5), identity.scale(9, 1.2, 9), material(0, 0.2, 0.3, 0.5)),
                    polygons_transform(cylinder(), identity.scale(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)),
                  ),
                  polygons_transform(cylinder(5), identity.scale(5.4, 5, 5.4), material(0, 0.2, 0.3, 0.5)),
                ),
                translation(-38.9, -11.3, 17),
              ),
              newLever(translation(-38.9, -9.6, 10)),
              newModel(() => {
                meshAdd(
                  csg_polygons_subtract(
                    csg_union(
                      polygons_transform(
                        cylinder(5),
                        translation(0, 2).scale(5, 7, 5).skewY(8),
                        material(0.2, 0.4, 0.5, 0.5),
                      ),
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
                    polygons_transform(cylinder(5), identity.scale(4, 8, 4), material(0.2, 0.4, 0.5, 0.5)),
                    polygons_transform(
                      cylinder(5),
                      translation(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35),
                      material(0.2, 0.4, 0.5, 0.5),
                    ),
                  ),
                  translation(-38.9, -11.3, 17),
                ),
                  newSoul(
                    translation(-39.1, -0.6, 17).rotate(11),
                    ...polygon_regular(15).map(({ x, z }) => [
                      3 * x,
                      3 * z,
                      1.2,
                    ]),
                  );
              }),
              meshAdd(
                csg_polygons_subtract(
                  csg_union(
                    polygons_transform(
                      cylinder(6),
                      translation(0, 0, -18).scale(15, 1.2, 15),
                      material(0.7, 0.7, 0.7, 0.3),
                    ),
                    polygons_transform(cylinder(), identity.scale(4, 1.2, 6), material(0.45, 0.4, 0.6, 0.3)),
                  ),
                  ...integers_map(6, (z) =>
                    integers_map(6, (x) =>
                      polygons_transform(
                        cylinder(6),
                        translation(4.6 * x - 12 + 2 * (1 & z), 0, 4.6 * z + 2 * Math.sin(4 * x) - 32).scale(2, 5, 2),
                        material(0.7, 0.7, 0.7, 0.3),
                      ))).flat(),
                ),
                translation(-38.9, -11.3, -1),
              ),
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
              ]),
              meshAdd(
                cylinder(5),
                translation(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10),
                material(0.8, 0.1, 0.25, 0.4),
              ),
              newLever(translation(-84, -0.5, 85).rotate(0, 45)),
              newModel(() => {
                meshAdd(boatPolygons), newLever(translation(0, -3, -4).rotate(0, 180));
              }),
              csg_polygons_subtract(
                polygons_transform(
                  cylinder(),
                  translation(0, -0.5, 1).scale(1.15, 1.2, 6.5),
                  material(0.25, 0.25, 0.35, 0.3),
                ),
                csg_polygons_subtract(
                  polygons_transform(cylinder(3), translation(0, 0, -5.5).scale(3, 2), material(0.6, 0.3, 0.4, 0.3)),
                  polygons_transform(cylinder(), translation(0, 0, -3.65).scale(2.5, 3), material(0.6, 0.3, 0.4, 0.3)),
                ),
                ...[
                  -1,
                  1,
                ].map((i) =>
                  polygons_transform(
                    cylinder(),
                    translation(1.2 * i, -0.5, 1).scale(0.14, 0.3, 6.5),
                    material(0.7, 0.2, 0, 0.3),
                  )
                ),
              ));
            newModel(() => integers_map(2, (x) => meshAdd(pushingRod, translation(9 * x - 110 + (1 & x), 1.9, -12)))),
              newModel(() =>
                integers_map(2, (x) =>
                  meshAdd(pushingRod, translation(9 * (x + 2) - 110 + (1 & x), 1.9, -12)))
              ),
              newModel(() =>
                integers_map(3, (x) => meshAdd(pushingRod, translation(9 * x - 106, 1.9, -12)))
              ),
              integers_map(3, (i) => {
                meshAdd(makeBigArcPolygons(16), translation(12 * i - 109, -9, -12), material(0.6, 0.6, 0.6, 0.3)),
                  meshAdd(
                    makeBigArcPolygons(16),
                    translation(-77, -9, -12 * i - 20).rotate(0, 90),
                    material(0.6, 0.6, 0.6, 0.3),
                  );
              }),
              meshAdd(
                csg_polygons_subtract(
                  csg_union(
                    polygons_transform(cylinder(), translation(26.5, -1.6, 10).scale(20, 2.08, 3)),
                    polygons_transform(cylinder(), translation(26.5, -0.5, 10).scale(19, 2, 0.5)),
                  ),
                  ...integers_map(
                    4,
                    (x) =>
                      polygons_transform(cylinder(), translation(13 + 9 * x + (1 & x), -0.8, 9).scale(1.35, 1.35, 9)),
                  ),
                  ...integers_map(
                    3,
                    (x) => polygons_transform(cylinder(), translation(17 + 9 * x, -0.8, 9).scale(1.35, 1.35, 9)),
                  ),
                ),
                translation(-123, 0.2, -12),
                material(0.5, 0.5, 0.6, 0.2),
              ),
              newLever(translation(-116, -1.4, -18).rotate(0, 180)),
              meshAdd(cylinder(6), translation(-116, -2.6, -16.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2)),
              meshAdd(
                cylinder(),
                translation(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              meshAdd(cylinder(), translation(-115.5, -17, -12).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3)),
              meshAdd(cylinder(8), translation(-114, -17, -2).scale(2, 15, 2), material(0.6, 0.6, 0.6, 0.3)),
              meshAdd(cylinder(8), translation(-79, -17, -2).scale(2, 15, 2), material(1, 1, 1, 0.3)),
              meshAdd(cylinder(), translation(-77, -17, -50.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3)),
              meshAdd(
                csg_polygons_subtract(
                  polygons_transform(
                    cylinder(12),
                    translation(-77, -14.5, -12).scale(4, 17.5, 4),
                    material(0.7, 0.7, 0.7, 0.2),
                  ),
                  polygons_transform(
                    cylinder(12),
                    translation(-77, 3.1, -12).scale(3, 5, 3),
                    material(0.4, 0.5, 0.6, 0.2),
                  ),
                  polygons_transform(
                    cylinder(),
                    translation(-79, 0.1, -12).scale(3.5, 2, 1.3),
                    material(0.4, 0.5, 0.6, 0.2),
                  ),
                  polygons_transform(
                    cylinder(),
                    translation(-77, 0.1, -14).scale(1.5, 2, 2),
                    material(0.4, 0.5, 0.6, 0.2),
                  ),
                ),
              ),
              meshAdd(
                cylinder(),
                translation(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3),
                material(0.6, 0.6, 0.6, 0.3),
              ),
              meshAdd(cylinder(9), translation(-98, -18.4, -40).scale(2.5, 13.5, 2.5), material(0.5, 0.5, 0.5, 0.3)),
              meshAdd(
                csg_polygons_subtract(
                  polygons_transform(
                    cylinder(),
                    translation(-93, -5.8, -40).scale(9, 1, 5),
                    material(0.8, 0.8, 0.8, 0.1),
                  ),
                  polygons_transform(
                    cylinder(9),
                    translation(-98, -5.8, -40).scale(3, 8, 3),
                    material(0.7, 0.7, 0.7, 0.2),
                  ),
                ),
              ),
              newLever(translation(-98, -4.4, -40).rotate(0, 90)),
              newSoul(translation(-115, 0.2, -12), [
                0,
                0,
                3.5,
              ]),
              newSoul(translation(-93, -3, -40).rotate(4), [
                0,
                -2,
                3.5,
              ], [
                0,
                2,
                3.5,
              ]),
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
                  polygons_transform(
                    cylinder(5),
                    translation(-100, 0.7, 113).scale(4, 3, 4),
                    material(0.7, 0.7, 0.7, 0.2),
                  ),
                ),
              ),
              integers_map(
                4,
                (i) => newModel(() => meshAdd(
                  cylinder(6),
                  translation(-14.6 - 4.8 * i - (2 < i ? 2 : 0), -i / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5)
                    .scale(2.6, 1, 2.5),
                  material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3),
                )),
              ),
              newModel(() => {
                meshAdd(
                  csg_polygons_subtract(
                    polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
                    polygons_transform(cylinder(10), identity.scale(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5)),
                  ),
                ),
                  meshAdd(
                    cylinder(15, 1),
                    translation(-7.5).rotate(0, 90).scale(3, 2.3, 3),
                    material(0.4, 0.4, 0.4, 0.3),
                  ),
                  meshAdd(cylinder(10), translation(-7.5).rotate(0, 90).scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3)),
                  meshAdd(cylinder(5), translation(-7.5).rotate(0, 90).scale(1, 3), material(0.5, 0.5, 0.5, 0.5)),
                  newLever(translation(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                  [
                    -1,
                    1,
                  ].map((i) =>
                    meshAdd(
                      hornPolygons,
                      identity.rotate(90 * i, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3),
                    )
                  ),
                  newSoul(translation(-5, 4), [
                    0,
                    -1.2,
                    1.7,
                  ], [
                    0,
                    1.2,
                    1.7,
                  ]);
              }),
              [
                -1,
                1,
              ].map((x) => {
                [
                  7.2,
                  1.5,
                ].map((y) =>
                  meshAdd(
                    cylinder(15, 1),
                    translation(-7.5 * x - 100, y + 0.7, 96).scale(1.1, 0.5, 1.1),
                    material(0.5, 0.24, 0.2, 0.4),
                  )
                ),
                  meshAdd(
                    hornPolygons,
                    translation(-5 * x - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * x - 90),
                  ),
                  meshAdd(
                    cylinder(12, 1),
                    translation(-7.5 * x - 100, 3.7, 96).scale(0.8, 4, 0.8),
                    material(0.6, 0.24, 0.2, 0.5),
                  ),
                  meshAdd(
                    csg_polygons_subtract(
                      polygons_transform(
                        cylinder(),
                        translation(-4 * x, 3.5, -0.5).scale(4, 4, 0.7),
                        material(0.5, 0.5, 0.5, 0.4),
                      ),
                      polygons_transform(cylinder(), identity.scale(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)),
                      polygons_transform(
                        cylinder(28, 1),
                        translation(0, 3, -5).scale(3, 4, 10).rotate(90, 0),
                        material(0.6, 0.24, 0.2, 0.5),
                      ),
                      polygons_transform(
                        cylinder(5),
                        translation(-5.3 * x, 7).rotate(90, 0).scale(1.7, 5, 1.7),
                        material(0.6, 0.24, 0.2, 0.5),
                      ),
                      polygons_transform(
                        cylinder(5),
                        translation(-5.3 * x, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75),
                        material(0.6, 0.24, 0.2, 0.5),
                      ),
                    ),
                    translation(x - 100, 0.7, 97),
                  );
              }),
              newModel(() => {
                meshAdd(
                  csg_polygons_subtract(
                    polygons_transform(cylinder(45, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
                    polygons_transform(
                      cylinder(),
                      translation(0, 0, -5.5).scale(1.5, 3, 2.7),
                      material(0.45, 0.45, 0.45, 0.2),
                    ),
                  ),
                ),
                  meshAdd(cylinder(8), translation(0, 2).scale(3, 1.5, 3).rotate(0, 22), material(0.7, 0.7, 0.7, 0.1)),
                  meshAdd(cylinder(5), translation(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2)),
                  newSoul(
                    translation(0, 3),
                    ...polygon_regular(14).map(({ x, z }) => [
                      5.6 * x,
                      5.6 * z,
                      2,
                    ]),
                  );
              }),
              newModel(() => {
                [
                  -1,
                  1,
                ].map((x) =>
                  meshAdd(
                    hornPolygons,
                    identity.rotate(0, 90).translate(-5 * x, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90),
                  )
                ),
                  meshAdd(
                    csg_polygons_subtract(
                      polygons_transform(
                        cylinder(28, 1),
                        translation(0, 2).scale(7.5, 1, 7.5),
                        material(0.35, 0, 0, 0.3),
                      ),
                      polygons_transform(cylinder(), identity.scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                    ),
                  ),
                  meshAdd(
                    polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
                  ),
                  meshAdd(
                    polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)),
                  );
              }),
              newModel(() => {
                meshAdd(
                  csg_polygons_subtract(
                    polygons_transform(
                      cylinder(28, 1),
                      translation(0, 2).scale(7.5, 1, 7.5),
                      material(0.35, 0, 0, 0.3),
                    ),
                    polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                    polygons_transform(cylinder(), translation(0, 0, 7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
                  ),
                ),
                  meshAdd(
                    polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
                  ),
                  meshAdd(
                    polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)),
                  );
              }),
              newModel(() => {
                meshAdd(
                  csg_polygons_subtract(
                    polygons_transform(
                      cylinder(28, 1),
                      translation(0, 2).scale(7.5, 1, 7.5),
                      material(0.35, 0, 0, 0.3),
                    ),
                    polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                    polygons_transform(cylinder(), translation(0, 0, -7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
                  ),
                ),
                  meshAdd(
                    polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
                  ),
                  meshAdd(
                    polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)),
                  );
              }),
              meshAdd(
                csg_polygons_subtract(
                  polygons_transform(
                    cylinder(),
                    translation(-82.07, 0.8, 106).scale(11, 0.9, 2.2),
                    material(0.7, 0.7, 0.7, 0.1),
                  ),
                  polygons_transform(
                    cylinder(45, 1),
                    translation(-81, 0.7, 106).scale3d(7.7),
                    material(0.7, 0.7, 0.7, 0.1),
                  ),
                ),
              ),
              meshAdd(cylinder(), translation(-58, 1, 106).scale(2, 0.65, 2), material(0.7, 0.7, 0.7, 0.2)),
              meshAdd(cylinder(), translation(-50.7, 1, 99).scale(2, 0.65, 1), material(0.7, 0.7, 0.7, 0.2)),
              meshAdd(cylinder(), translation(-42, 0.4, 91).scale(5, 1, 2.5), material(0.7, 0.7, 0.7, 0.3)),
              meshAdd(cylinder(), translation(-34.2, 0.4, 91).scale(3, 1, 3), material(0.7, 0.7, 0.7, 0.3)),
              meshAdd(
                cylinder(5),
                translation(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0),
                material(0.2, 0.5, 0.5, 0.6),
              ),
              newLever(translation(-34, 2.7, 96).rotate(-12, 0)),
              [
                material(0.1, 0.55, 0.45, 0.2),
                material(0.2, 0.5, 0.5, 0.3),
                material(0.3, 0.45, 0.55, 0.4),
              ].map((m, i) => newModel(() => {
                meshAdd(cylinder(), translation(-23.5, 0.5, 91 + 6.8 * i).scale(i === 1 ? 2 : 3.3, 1, 3.3), m),
                  i === 2
                  && meshAdd(cylinder(), translation(-29.1, 0.4, 91).scale(2.1, 1, 3), material(0.7, 0.7, 0.7, 0.3)),
                  i === 1
                  && meshAdd(
                    cylinder(),
                    translation(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1),
                    material(0.6, 0.6, 0.7, 0.3),
                  );
              })),
              [
                -1,
                1,
              ].map((x) =>
                meshAdd(hornPolygons, translation(-8 * x, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * x + 90))
              ),
              integers_map(3, (i) =>
                meshAdd(
                  makeBigArcPolygons(24.7 - 0.7 * (1 & i)),
                  translation(6 * i - 6, 4 - (1 & i), 111 - 0.2 * (1 & i)),
                  1 & i ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5),
                )),
              meshAdd(
                csg_polygons_subtract(
                  polygons_transform(
                    cylinder(6, 0, 0, 0.3),
                    translation(0, -0.92, 95).scale(14, 2, 14),
                    material(0.8, 0.8, 0.8, 0.2),
                  ),
                  polygons_transform(cylinder(5), translation(0, 0, 95).scale3d(6), material(0.3, 0.3, 0.3, 0.5)),
                ),
              ),
              newLever(translation(0, 1.7, 82).rotate(0, 180)),
              meshAdd(
                cylinder(5),
                translation(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35),
                material(0.5, 0.3, 0.3, 0.4),
              ),
              meshAdd(
                cylinder(6),
                translation(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90),
                material(0.5, 0.6, 0.7, 0.3),
              ),
              meshAdd(cylinder(), translation(0, 16, 129).scale(1.5, 1, 2), material(0.5, 0.6, 0.7, 0.3)),
              meshAdd(cylinder(7), translation(0, 16.2, 133).scale(5, 1, 5), material(0.4, 0.5, 0.6, 0.4)),
              meshAdd(
                csg_polygons_subtract(
                  csg_union(
                    polygons_transform(
                      cylinder(),
                      translation(0, 16, 110.5).scale(12, 1, 3),
                      material(0.5, 0.3, 0.3, 0.4),
                    ),
                    polygons_transform(
                      cylinder(),
                      translation(0, 16, 111).scale(3, 1, 3.8),
                      material(0.5, 0.3, 0.3, 0.4),
                    ),
                  ),
                  polygons_transform(
                    cylinder(5),
                    translation(0, 16, 103.5).scale(5.5, 5, 5.5),
                    material(0.5, 0.3, 0.3, 0.4),
                  ),
                ),
              ),
              newModel(() => {
                meshAdd(
                  cylinder(3),
                  translation(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60),
                  material(0.5, 0.3, 0.3, 0.4),
                ),
                  [
                    22,
                    30,
                  ].map((z) => {
                    meshAdd(
                      cylinder(6),
                      translation(0, 16, z + 95).scale(3, 1, 2.3).rotate(0, 90),
                      material(0.7, 0.7, 0.7, 0.4),
                    ),
                      meshAdd(
                        cylinder(),
                        translation(0, 6.2, z + 95).scale(0.5, 11, 0.5),
                        material(0.5, 0.3, 0.3, 0.4),
                      );
                  });
              }),
              newModel(() => {
                meshAdd(cylinder(5), identity.scale(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4)),
                  meshAdd(cylinder(5), identity.scale(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4)),
                  newLever(translation(0, 1.5, -1).rotate(0, 180));
              }),
              newSoul(
                translation(0, 3, 95),
                ...polygon_regular(9).map(({ x, z }) => [
                  9 * x,
                  9 * z,
                  4,
                ]),
              ),
              newSoul(translation(0, 19, 134), [
                0,
                0,
                3.5,
              ]);
          }),
          newModel(() => {
            meshAdd(sphere(20), translation(0, 1).scale3d(0.5), material(1, 0.3, 0.4)),
              meshAdd(sphere(30), identity.scale(0.65, 0.8, 0.55), material(1, 0.3, 0.4)),
              meshAdd(cylinder(), translation(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3)),
              [
                -1,
                1,
              ].map((i) => {
                meshAdd(
                  hornPolygons,
                  identity.rotate(0, 0 < i ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2),
                  material(1, 1, 0.8),
                ),
                  meshAdd(
                    polygons_transform(
                      csg_polygons_subtract(
                        cylinder(15, 1),
                        polygons_transform(cylinder(), translation(0, 0, 1).scale(2, 2, 0.5)),
                      ),
                      identity.rotate(-90, 0).scale(0.1, 0.05, 0.1),
                      material(0.3, 0.3, 0.3),
                    ),
                    translation(0.2 * i, 1.2, 0.4).rotate(0, 20 * i, 20 * i),
                  ),
                  newModel(() => {
                    meshAdd(cylinder(20, 1), translation(0.3 * i, -0.8).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
                  });
              });
          }),
          newModel(() => {
            meshAdd(cylinder(6).slice(0, -1), identity.scale(0.77, 1, 0.77), material(1, 0.3, 0.5));
          }, 0),
          newModel(() => {
            meshAdd(
              sphere(30, 24, (a, b, polygon) => {
                const bm = b / 24;
                const theta = a * Math.PI * 2 / 30;
                const phixz = Math.sin(bm ** 0.6 * Math.PI / 2);
                var a = bm * bm * Math.sin(a * Math.PI * 14 / 30) / 4;
                return 23 < b
                  ? {
                    x: polygon.$smooth = 0,
                    y: -0.5,
                    z: 0,
                  }
                  : {
                    x: Math.cos(theta) * phixz,
                    y: Math.cos(bm * Math.PI) - bm - a,
                    z: Math.sin(theta) * phixz + Math.sin(a * Math.PI * 2) / 4,
                  };
              }),
              identity.scale(0.7, 0.7, 0.7),
              material(1, 1, 1),
            ),
              [
                -1,
                1,
              ].map((x) => meshAdd(sphere(12), translation(0.16 * x, 0.4, -0.36).scale3d(0.09)));
          }, 0),
          newModel(() => {
            meshAdd(cylinder(6, 1), identity.scale(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5, 0.1)),
              meshAdd(cylinder(10), translation(0, 1).scale(0.21, 0.3, 0.21), material(1, 0.5, 0.2)),
              meshAdd(
                cylinder(3),
                translation(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3),
                material(0.2, 0.2, 0.2, 0.1),
              );
          }, 0);
      }
    });
});
