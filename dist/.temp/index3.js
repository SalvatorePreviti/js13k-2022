let aa,
  da,
  ea,
  ha,
  ia,
  la,
  ma,
  na,
  oa,
  pa,
  c,
  qa,
  sa,
  ta,
  ua,
  va,
  wa,
  d = 0,
  xa = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 0,
  Ja = 0.1;
const Ka = Math.PI / 180,
  La = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Ma = [],
  e = [],
  h = [],
  Ra = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Sa = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ta = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 180;
const Za = NO_INLINE(a => 0 > a ? -a : a),
  $a = NO_INLINE((a, b) => a < b ? a : b),
  ab = NO_INLINE((a, b) => b < a ? a : b),
  bb = (a, b) => Za(a) > b ? a : 0,
  l = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  cb = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka,
  db = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * l(g) || 0,
  eb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0,
  fb = (a, b) => (a = l(a), eb(a, 1 - a, b)),
  gb = (a, b, g = 0) =>
    Math.sqrt(
      a * a + b * b
        + g * g,
    ),
  lb = (a = 0, b = 0, g = 0, k = 1) => {
    hb = m.m11 * a + m.m21 * b + m.m31 * g + m.m41 * k;
    ib = m.m12 * a + m.m22 * b + m.m32 * g + m.m42 * k;
    jb = m.m13 * a + m.m23 * b + m.m33 * g + m.m43 * k;
    kb = m.m14 * a + m.m24 * b + m.m34 * g + m.m44 * k;
  };
var hb, ib, jb, kb;
const nb = (
    a,
    b = mb,
    g = 0,
  ) => (g *= 16,
    b[g++] = a.m11,
    b[g++] = a.m12,
    b[g++] = a.m13,
    b[g++] = a.m14,
    b[g++] = a.m21,
    b[g++] = a.m22,
    b[g++] = a.m23,
    b[g++] = a.m24,
    b[g++] = a.m31,
    b[g++] = a.m32,
    b[g++] = a.m33,
    b[g++] = a.m34,
    b[g++] = a.m41,
    b[g++] = a.m42,
    b[g++] = a.m43,
    b[g] = a.m44,
    b),
  ob = (
    a = y,
    b = m,
  ) => (b.m11 = a.m11,
    b.m12 = a.m12,
    b.m13 = a.m13,
    b.m14 = a.m14,
    b.m21 = a.m21,
    b.m22 = a.m22,
    b.m23 = a.m23,
    b.m24 = a.m24,
    b.m31 = a.m31,
    b.m32 = a.m32,
    b.m33 = a.m33,
    b.m34 = a.m34,
    b.m41 = a.m41,
    b.m42 = a.m42,
    b.m43 = a.m43,
    b.m44 = a.m44,
    b),
  C = NO_INLINE((a, b, g) => y.translate(a, b, g)),
  H = (a, b) => Array.from(Array(a), (g, k) => b(k)),
  pb = (a, b, g) => (a.C = g, a.u = b, a),
  qb = (a, b, g = a.u) => (ob(b), pb(a.map(({ x: k, y: q, z: n }) => (lb(k, q, n), { x: hb, y: ib, z: jb })), g, a.C)),
  K = (a, b, g) => a.map(k => qb(k, b, g)),
  rb = (a, b = 0) =>
    H(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > Za(k) ? k : 0 > k ? k - b : k + b };
    }),
  sb = (a, b, g) =>
    a.map((k, q, { length: n }) => pb([k, b[n - q - 1], b[n - (q + 1) % n - 1], a[(q + 1) % n]], a.u, g)),
  L = (
    a,
    b,
    g = 0,
    k,
  ) => (a = a ? rb(a, k) : Ra,
    k = qb(a, C(0, 1).scale3d(0 < g ? g : 1)),
    a = qb(a, C(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...sb(a, k, b), k, a]),
  vb = (
    a,
    b = a,
    g = (
      k,
      q,
    ) => (q *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(k) * Math.sin(q) }),
  ) => {
    const k = [];
    for (let q = 0; a > q; q++) {
      for (let n = 0; b > n; n++) {
        const x = pb([], 0, 1);
        k.push(x);
        x.push(g(q, n, x));
        n && x.push(g((q + 1) % a, n, x));
        b - 1 > n && x.push(g((q + 1) % a, n + 1 % b, x));
        x.push(g(q, n + 1 % b, x));
      }
    }
    return k;
  },
  wb = NO_INLINE(a => 1 - Math.exp(-Aa * a)),
  xb = NO_INLINE((a, b, g) => eb(a, b, wb(g))),
  yb = (a, b, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  zb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Ab = a => Math.sin(a * Math.PI * 2),
  Db = a => 0.5 > a % 1 ? 1 : -1,
  Eb = a => a % 1 * 2 - 1,
  Fb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Gb = a => {
    let b = 0;
    const g = () => {
        let n = 0;
        const x = M => {
            let O, ba, Na, ja = 0, ka = 0;
            const ca = [],
              ra = new Int32Array(768 * M),
              dc = 2 ** (D - 9) / M,
              ec = Math.PI * 2 ** (u - 8) / M,
              Bb = B * M & -2;
            for (let tb = 0; 11 >= tb; ++tb) {
              for (
                let ub = 0, Pb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb];
                32 > ub;
                ++ub
              ) {
                const Qb = (32 * tb + ub) * M;
                for (var Oa = 0; 4 > Oa; ++Oa) {
                  if (O = 0, Pb && (O = A[Pb - 1].charCodeAt(ub + 32 * Oa) - 40, O += 0 < O ? 106 : 0), O) {
                    var fa;
                    if (!(fa = ca[O])) {
                      fa = O;
                      let W = void 0, ya = void 0;
                      var Rb = O;
                      let fc = 0, gc = 0;
                      const hc = 2 > b ? Eb : Ab, ic = 2 > b ? 1 > b ? Db : Fb : Ab, Sb = new Int32Array(R + T + Q);
                      for (let Pa = 0, Cb = 0; R + T + Q > Pa; ++Pa, ++Cb) {
                        let Qa = 1;
                        R > Pa ? Qa = Pa / R : R + T > Pa || (Qa = (1 - (Qa = (Pa - R - T) / Q)) * 3 ** (-v / 16 * Qa));
                        0 > Cb
                          || (Cb -= 4 * M,
                            ya = 0.00396 * 2 ** ((Rb + t - 256) / 12),
                            W = 0.00396 * 2 ** ((Rb + z - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Sb[Pa] = 80
                            * (hc(fc += ya * Qa ** (I / 32)) * f + ic(gc += W * Qa ** (F / 32)) * G
                              + (V ? (2 * Math.random() - 1) * V : 0))
                            * Qa | 0;
                      }
                      fa = ca[fa] = Sb;
                    }
                    for (let W = 0, ya = 2 * Qb; fa.length > W; ++W, ya += 2) {
                      ra[ya] += fa[W];
                    }
                  }
                }
                for (let W, ya = 0; M > ya; ++ya) {
                  Oa = 0;
                  fa = 2 * (Qb + ya);
                  var za = (((W = ra[fa]) || Na)
                    && (ba = 0.00308 * N,
                      1 !== b && 4 !== b || (ba *= Math.sin(dc * fa * Math.PI * 2) * J / 512 + 0.5),
                      ba = 1.5 * Math.sin(ba),
                      ja += ba * ka,
                      za = (1 - S / 255) * (W - ka) - ja,
                      ka += ba * za,
                      W = 4 === b ? ka : 3 === b ? za : ja,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= E / 32,
                      Na = 1e-5 < W * W,
                      za = Math.sin(ec * fa) * r / 512 + 0.5,
                      Oa = W * (1 - za),
                      W *= za),
                    fa < Bb || (Oa += ra[1 + fa - Bb]
                      * w / 255,
                      W += ra[fa - Bb] * w / 255),
                    n + fa >> 1);
                  k[za] += (ra[fa] = Oa) / 65536;
                  q[za] += (ra[++fa] = W) / 65536;
                }
              }
            }
            n += 768 * M;
          },
          A = Sa[b],
          [f, t, I, G, z, F, V, R, T, p, v, D, N, S, E, r, u, w, B, J] = Ta[b],
          Q = 4 * p ** 2;
        x(5513);
        x(4562);
        x(3891);
        zb(5 > ++b ? g : a);
      },
      k = (ea = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      q = ea.getChannelData(1);
    zb(g);
  },
  Hb = () => {
    let a, b, g, k, q, n, x, A, f, t, I, G, z, F, V, R, T = !0;
    const p = [],
      v = () => {
        b4.innerHTML = "Music: " + T;
        R && (da || !T ? R.disconnect() : R.connect(V.destination));
      },
      D = () => {
        const r = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ma = [yb(0.3, 55, r, 1.732051), yb(55, 181, r, 1.732051)];
        la = yb(0.3, 181, r, 1.732051);
        k = A = void 0;
        p.length =
          ha =
          F =
          G =
          z =
          Ba =
          Ca =
            0;
      },
      N = r => {
        if (da !== r) {
          if (da = r, D(), document.body.className = r ? "l m" : "l", r) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          v();
        }
      },
      S = r => {
        try {
          V || (V = new AudioContext(), (R = V.createBufferSource()).buffer = ea, R.loop = !0, R.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        N(!1);
        ia = r;
      },
      E = (r, u) => r.buttons[u]?.pressed || 0 < r.buttons[u]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      S();
    };
    b2.onclick = () => {
      S(1);
    };
    b5.onclick = () => N(!0);
    b4.onclick = () => {
      T = !T;
      v();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
    };
    onclick = r => {
      if (!da && (r.target === hC && (ha = 1), ia)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = r => {
      let u;
      r.repeat
        || (u = {
          KeyE: 0,
          Space: 0,
          Enter: 0,
          Escape: 1,
          KeyA: 2,
          ArrowLeft: 2,
          KeyD: 3,
          ArrowRight: 3,
          KeyW: 4,
          ArrowUp: 4,
          KeyS: 5,
          ArrowDown: 5,
        }[r.code],
          (p[u] = !!r.type[5] && !0) && (0 === u && (ha = 1), 1 === u && N(!0)));
    };
    onmousemove = ({ movementX: r, movementY: u }) => {
      ia && (r || u) && (Ya += 0.1 * r, Xa += 0.1 * u);
    };
    hC.ontouchstart = r => {
      if (!da) {
        for (let { pageX: u, pageY: w, identifier: B } of r.changedTouches) {
          ia && u > hC.clientWidth / 2
            ? void 0 === A && (f = 0, n = u, x = w, A = B, I = Xa, t = Ya)
            : void 0 === k && (q = 0, b = u, g = w, k = B);
        }
        a = xa;
      }
    };
    hC.ontouchmove = r => {
      if (!da) {
        for (let { pageX: Q, pageY: M, identifier: O } of r.changedTouches) {
          var u, w, B, J;
          A === O && (Xa = I + (M - x) / 2.3, Ya = t + (Q - n) / 2.3, f = 1);
          k === O
            && (O = (b - Q) / 20,
              u = Za(O),
              w = (g - M) / 20,
              B = Za(w),
              (J = 0.5 < ab(u, B)) && (q = 1),
              G = (J && 0.3 < u) * l(O, -1),
              z = (J && 0.3 < B) * l(w, -1),
              2 < u && (b = 20 * (0 > O ? -1 : 1) + Q),
              2 < B && (g = 20 * (0 > w ? -1 : 1) + M));
        }
      }
    };
    hC.ontouchend = r => {
      let u;
      document.activeElement === document.body && r.preventDefault();
      for (const w of r.changedTouches) {
        w.identifier === A
          ? (A = void 0, f || (u = 1), f = 0)
          : w.identifier === k
          ? (k = void 0, z = G = 0, q || (u = 1), q = 0)
          : u = 1;
      }
      r.target === hC && u && a && 0.02 < (r = xa - a) && 0.7 > r && (ha = 1);
    };
    na = () => {
      Ba = z + (p[4] ? 1 : 0) - (p[5] ? 1 : 0);
      Ca = G + (p[2] ? 1 : 0) - (p[3] ? 1 : 0);
      let r = navigator.getGamepads()[0];
      r
        && (ia && (Xa += Aa * bb(r.axes[3], 0.3) * 80, Ya += Aa * bb(r.axes[2], 0.3) * 80),
          Ba += E(r, 12) - E(r, 13) - bb(r.axes[1], 0.2),
          Ca += E(r, 14) - E(r, 15) - bb(r.axes[0], 0.2),
          E(r, 9) && N(!0),
          (r = E(r, 3) || E(r, 2) || E(r, 1) || E(r, 0)) && !F && (ha = 1),
          F = r);
    };
    document.onvisibilitychange = onblur = onresize = D;
    N(!0);
  },
  Ib = (a, b) => {
    1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
  },
  Jb = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        Da = Ma.reduce((a, b) => a + b.i, 0)
      ] + " / XIII";
  },
  Kb = () => {
    localStorage.spdnt22 = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Fa, d, pa]);
  },
  P = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  U = () => {
    const a = [];
    c = (b, g = new DOMMatrix(), k) => a.push(...K(b, g, k));
    h.push({ m: new DOMMatrix(), o: a });
  },
  Lb = a => {
    const b = h.at(-1).m,
      g = e.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b,
        G: a,
        F() {
          k.g = xb(k.g, k.i, 4);
          k.h = xb(k.h, k.i, 1);
          ob(b).multiplySelf(a);
          ha && 3 > (lb(), gb(Ua - hb, Va - ib, Wa - jb))
            ? k.i
              ? 0.7 < k.g && (k.i = 0, (Fa = g) && Ib("* click *", 1), Kb())
              : 0.3 > k.g && (k.i = 1, (Fa = g) && Ib("* click *", 1), Kb())
            : k.i && 0.8 < k.g && 10 === g && (k.i = 0,
              13 > Da
                ? Ib("Not leaving now, there are souls to catch!", 3)
                : Ea || (Ib("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ea = 1));
          m.rotateSelf(50 * k.g - 25, 0).translateSelf(0, 1).m44 = 1 - k.g;
        },
      };
    e.push(k);
    c(L(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
    c(L(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
    c(L(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), P(0.5, 0.5, 0.4));
  },
  Mb = (a, ...b) => {
    let g, k, q, n, x = 0, A = 0, f = 1, t = -1;
    const I = {
      i: 0,
      F() {
        if (!I.i) {
          let v, D, N, S, E, r = 1, u = 1 / 0;
          for (let w = 0; b.length > w; w++) {
            const B = b[w];
            let J = gb(z - B[0], F - B[1]);
            r = $a(r, J / B[2]);
            0 > (J -= B[2]) ? E = 1 : u > J && (u = J, G = B);
          }
          E
            || (v = z - G[0],
              D = F - G[1],
              N = gb(v, D),
              S = Math.atan2(-D, v),
              f && (n = l(n / (1 + Math.random())), A = (Math.random() - 0.5) * Math.PI / 2),
              S += A,
              t = -Math.cos(S),
              x = Math.sin(S),
              0.1 < N && (N = $a(N, G[2]) / N, z = v * N + G[0], F = D * N + G[1]));
          f = E;
          n = xb(n, 3 + 6 * (1 - r), 3 + r);
          V = xb(V, z = xb(z, z + t, n), n);
          R = xb(R, F = xb(F, F + x, n), n);
          g = db(g, Math.atan2(V - k, R - q) / Ka - 180, wb(3));
          ob(T).multiplySelf(a).translateSelf(k = V, 0, q = R).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
          1.6 > (lb(), gb(Ua - hb, Va - ib, Wa - jb))
            && (I.i = 1,
              Ib(
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
                ][Da] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                6,
              ),
              Jb(),
              Kb());
        }
        I.i
          && ob(h[2].m).translateSelf(
            p % 4 * 1.2 - 1.7 + Math.sin(d + p) / 7,
            -2,
            1.7 * (p / 4 | 0) - 5.5 + Za(p % 4 - 2) + Math.cos(d / 1.5 + p) / 6,
          );
      },
    };
    let G = b[0], [z, F] = G, [V, R] = G;
    const T = h.at(-1).m, p = Ma.length;
    Ma.push(I);
  },
  Nb = ({ x: a, y: b, z: g }, k) => a * k.x + b * k.y + g * k.z,
  Ob = a => {
    let b, g = 0, k = 0, q = 0, n = a.at(-1);
    for (b of a) {
      g += (n.y - b.y) * (n.z + b.z), k += (n.z - b.z) * (n.x + b.x), q += (n.x - b.x) * (n.y + b.y), n = b;
    }
    return b = gb(g, k, q), g /= b, k /= b, q /= b, { x: g, y: k, z: q, w: g * n.x + k * n.y + q * n.z };
  },
  Tb = (a, b) => {
    var g, k, q, n = b.B;
    for (var x = 0; n.length > x; ++x) {
      if (-0.00008 > (g = Nb(a, n[x]) - a.w) ? q = b : 8e-5 < g && (k = b), q && k) {
        k = [];
        q = [];
        n = b.B;
        x = b.v;
        let A = n.at(-1), f = Nb(a, A) - a.w;
        for (const t of n) {
          g = Nb(a, t) - a.w,
            8e-5 > f && q.push(A),
            -0.00008 < f && k.push(A),
            (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g)
            && (f /= g - f,
              A = { x: A.x + (A.x - t.x) * f, y: A.y + (A.y - t.y) * f, z: A.z + (A.z - t.z) * f },
              k.push(A),
              q.push(A)),
            A = t,
            f = g;
        }
        return {
          l: 2 < k.length && { B: pb(k, n.u, n.C), v: x, A: b },
          j: 2 < q.length && { B: pb(q, n.u, n.C), v: x, A: b },
        };
      }
    }
    return { l: k, j: q };
  },
  Ub = (a, b, g = Ob(b.B)) => {
    let k, q;
    return a
      ? ({ l: k, j: q } = Tb(a, b), k || q || a.o.push(b), k && (a.l = Ub(a.l, k, g)), q && (a.j = Ub(a.j, q, g)))
      : a = { x: g.x, y: g.y, z: g.z, w: g.w, o: [b], l: 0, j: 0 },
      a;
  },
  Vb = (a, b, g) => {
    const k = [],
      q = (n, x) => {
        let { l: A, j: f } = Tb(n, x);
        A || f || (0 < g * Nb(n, b) ? A = x : f = x);
        A && (n.l ? q(n.l, A) : k.push(A));
        f && n.j && q(n.j, f);
      };
    for (const n of b.o) {
      q(a, n);
    }
    return k;
  },
  Wb = (a, b) => a && (b(a), Wb(a.l, b), Wb(a.j, b)),
  Xb = a => (Wb(a, b => {
    const g = b.j;
    b.j = b.l;
    b.l = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.o) {
      k.v = !k.v;
    }
  }),
    a),
  Yb = a => a.length ? a.reduce((b, g) => Ub(b, { B: g, v: 0, A: 0 }), 0) : a,
  Zb = (...a) =>
    a.reduce((b, g) => {
      const k = [];
      if (b = Yb(b), g) {
        g = Yb(g);
        Wb(b, q => q.o = Vb(g, q, 1));
        Wb(g, q => k.push([q, Vb(b, q, -1)]));
        for (let [q, n] of k) {
          for (const x of n) {
            Ub(b, x, q);
          }
        }
      }
      return b;
    }),
  X = (a, ...b) => {
    const g = n => {
        let x;
        return n.A && ((x = k.get(n.A)) ? (q.delete(x), n = g(n.A)) : k.set(n.A, n)), n;
      },
      k = new Map(),
      q = new Map();
    return a = Xb(Zb(Xb(Yb(a)), ...b)),
      Wb(a, n => {
        for (const x of n.o) {
          q.set(g(x), x.v);
        }
      }),
      Array.from(q, ([{ B: n }, x]) => {
        const A = n.map(({ x: f, y: t, z: I }) => ({ x: f, y: t, z: I }));
        return pb(x ? A.reverse() : A, n.u, n.C);
      });
  },
  Y = () => ob(y, h[++qa].m),
  ac = () => {
    let a, b, g, k, q, n, x, A, f, t, I, G, z, F = 0, V = 0, R = 0, T = 0, p = 1, v = 2, D = 15;
    const N = () => ob((v ? e[Fa] : h[28 !== F ? F : 0]).m),
      S = u => {
        1 < v ? (ob(e[Fa].m).multiplySelf(e[Fa].G), lb(0, 0.9 < Fa + oa ? 15 : 1, -2.4)) : (N(), lb(V, R, T));
        u && (q = (hb - Ua) / Aa, n = (jb - Wa) / Aa);
        Ua = hb;
        Va = ib;
        Wa = jb;
      },
      E = () => {
        var u = 0, w = 0, B = 0, J = 0, Q = 0, M = 0, O = -1;
        for (var ba = 0; 36 > ba; ++ba) {
          var Na = 512 * ba;
          for (var ja = 96; 416 > ja; ja += 4) {
            for (var ka = 0; 2 > ka; ++ka) {
              var ca = $b[Na + ja + ka];
              const ra = $b[Na + ja + ka + 2];
              ca > J && (J = ca);
              ca + ra && (0 > O || O === ba) && (O = ba, ra === t ? ++u : w && w !== ra || (w = ra, ++B));
            }
          }
        }
        t = 0 > O ? 0 : B > 2 * u ? w : t;
        for (u = 36; 128 > u; ++u) {
          ba =
            O =
            B =
            w =
              0;
          Na = 512 * u;
          for (ja = 0; 128 > ja; ++ja) {
            ka = Na + 4 * ja,
              ca = $b[ka],
              64 > ja ? ca > w && (w = ca) : ca > B && (B = ca),
              (ca = $b[2 + ka]) > O && (O = ca),
              ca = $b[1 + ka],
              64 < ja ? ca > w && (w = ca) : ca > B && (B = ca),
              (ca = $b[3 + ka]) > ba && (ba = ca);
          }
          (B -= w) * B > Q * Q && (Q = B);
          (ba -= O) * ba > M * M && (M = ba);
        }
        Q *= 0.7;
        A = l(1 - 0.01 * ab(Za(Q), Za(M)), 0.3);
        Q /= 255;
        J /= 255;
        M /= 255;
        N().invertSelf();
        lb(Q, J, M, 0);
        V += hb;
        R += J;
        T += jb;
        S();
      },
      r = (u, w, B, J) => eb(u, w, p || (l(Za(w - u) ** 0.5 - B) + 1 / 7) * wb(1.5 * J));
    sa = () => {
      S(t);
      Z.r9r(0, 0, 128, 128, 6408, 5121, $b);
      NO_INLINE(E)();
      !v && t === F || (F = t, N().invertSelf(), lb(Ua, Va, Wa), V = hb, R = ib, T = jb, v = v && (t ? 0 : 1));
      (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (v = 2);
      1 === t && (e[11].i = -15 > Ua && 0 > Wa ? 1 : 0);
      f = eb(xb(f, Va, 2), Va, v || 8 * Za(f - Va));
      I = r(I, Ua, 0.5, 1);
      G = r(G, f, 2, 1);
      z = r(z, Wa, 0.5, 1);
      k = xb(k, ta * (27 < t && 32 > t), 2);
      ia
        ? (u = v + wb(18), Ga = eb(Ga, Ua, u), Ia = eb(Ia, Wa, u), Ha = eb(Ha, 1.6 + f, u), Ya = cb(Ya))
        : (Ga = r(Ga, I, 1, 2 + k),
          Ia = r(Ia, z + -18 + 5 * k, 1, 2 + k),
          Ha = r(Ha, ab(G + l((-60 - Wa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          u = $a(-6, -Za(z - Ia)),
          w = I - Ga,
          Ya = db(Ya, 90 - cb(Math.atan2(u, w) / Ka), p + wb(10)),
          Xa = db(Xa, 90 - Math.atan2(gb(u, w), Ha - G) / Ka, p + wb(10)));
      Xa = l(Xa, -87, 87);
      p = 0;
      var u = l(Ba, -1), w = l(Ca, -1), B = bb(gb(u, w) ** 0.5, 0.1);
      let J = Math.atan2(u, w);
      B && (a = 90 - J / Ka);
      b = db(b, a, wb(8));
      g = xb(g, B, 10);
      Y().translateSelf(Ua, 0.06 * A * g * Math.cos(18.2 * d) + f, Wa).rotateSelf(0, b);
      for (var Q = 0; 2 > Q; ++Q) {
        const M = 9.1 * d - Math.PI * Q;
        ob(h[37].m, Y()).translateSelf(0, g * l(0.45 * Math.sin(M - Math.PI / 2))).rotateSelf(
          g * Math.sin(M) * 0.25 / Ka,
          0,
        );
      }
      D = t ? 5 : xb(D, v ? 13 : 19 - 2 * $a(0, Va + 10), 2.2);
      q = t || v ? 0 : xb(q, 0, 3);
      n = t || v ? 0 : xb(n, 0, 3);
      u = (x = v ? 0 : xb(x, t ? 7 * l(2 * B) * A : 0, t ? 9 : 1)) * B * Za(u) * Math.sin(J);
      w = x * B * Za(w) * Math.cos(J);
      J = ia ? (180 + Ya) * Ka : 0;
      B = Aa * (q + (w * Math.cos(J) - Math.sin(J) * u));
      Q = Aa * -D;
      u = Aa * (n + (w * Math.sin(J) + Math.cos(J) * u));
      N().invertSelf();
      lb(B, Q, u, 0);
      V += hb;
      R += Q;
      T += jb;
      S();
    };
  },
  jc = (a, b, g) => {
    da
      ? 1100 < hC.width
        && (ob().rotateSelf(0, 40 * Math.sin(xa) - 80, -8),
          nb(m, bc, 35),
          nb(m, bc, 36),
          nb(m, bc, 37),
          Z.uae(a, !1, bc),
          Z.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s))
      : (Z.uae(a, !1, cc),
        Z.das(4, h[g].D - h[g].s, 5123, 2 * h[g].s, Ma.length),
        Z.das(4, h[42].D - h[42].s, 5123, 2 * h[42].s, e.length),
        Z.uae(a, !1, bc),
        Z.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
  },
  kc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  lc = (a, b) => {
    const g = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, kc(b, 35632)), Z.l8l(k), q => q ? g[q] || (g[q] = Z.gan(k, q)) : Z.u7y(k);
  },
  m = new DOMMatrix(),
  y = new DOMMatrix(),
  mb = new Float32Array(16),
  cc = new Float32Array(464),
  bc = new Float32Array(608),
  $b = new Uint8Array(65536),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
zb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const q = p => {
            requestAnimationFrame(q);
            var v = (p - (aa || p)) / 1e3;
            if (xa += v, d += Aa = da ? 0 : $a(0.055, v), aa = p, 0 < Aa) {
              na();
              Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
              Ea && (ia = 0);
              oa = Ea ? xb(oa, -9, 0.015) : xb(oa, l(d / 3), 1);
              pa = xb(pa, e[10].h, 0.2 + 0.3 * Za(2 * e[10].h - 1));
              v = (N, S, E, r) =>
                N.translateSelf(S + Math.sin(d + 2) / 5, E + Math.sin(0.8 * d) / 3, r).rotateSelf(
                  2 * Math.sin(d),
                  Math.sin(0.7 * d),
                  Math.sin(0.9 * d),
                );
              qa = 1;
              ta = fb(e[14].g, e[8].g);
              wa = eb(xb(wa, 0, 1), cb(wa + 60 * Aa), e[13].g - e[2].h);
              ua = eb(xb(ua, 0, 5), cb(ua + 56 * Aa), ta);
              va = eb(xb(va, 0, 4), cb(va + 48 * Aa), ta);
              v(Y(), -12, 4.2, 40 * oa - 66);
              v(Y(), -123, 1.4, 55 - 65 * pa);
              Y().translateSelf(0, 0, -15).scaleSelf(1, l(1.22 - e[0].g), 1);
              Y().translateSelf(0, 0, 15).scaleSelf(1, l(1.22 - e[12].g), 1);
              Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, l(1.1 - e[3].g), 1);
              Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[14].g);
              Y().translateSelf(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[12].g));
              p = $a(1 - e[13].h, e[12].h);
              Y().translateSelf(p * Math.sin(0.6 * d + 1.2) * 12, 0, 35);
              Y().translateSelf(p * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55);
              Y().translateSelf(p * Math.sin(0.6 * d) * 12, 0, 45);
              Y().translateSelf(9.8 * (1 - p));
              p = l(1 - 5 * p) * fb(e[12].g, e[13].g);
              Y().translateSelf(0, p * Math.sin(1.35 * d) * 4);
              Y().translateSelf(0, 0, p * Math.sin(0.9 * d) * 8);
              Y().translateSelf(0, -6.5 * e[13].h);
              Y().translateSelf(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + wa, 0);
              p = fb(e[4].h, e[3].h);
              Y().translateSelf(0, p * Math.sin(d) * 5 + 3.5 * (1 - ab(e[3].g, e[4].g)));
              Y().translateSelf(0, p * Math.sin(d + 3) * 6, p * Math.sin(0.6 * d + 1) * 6);
              Y().translateSelf(0, -7.3 * e[4].h);
              p = fb(e[6].g, e[7].g);
              Y().translateSelf(0, -2, 10 - 8.5 * p * Za(Math.sin(1.1 * d)));
              Y().translateSelf(0, -2, 10 - 8.5 * p * Za(Math.sin(2.1 * d)));
              Y().translateSelf(0, -2, 10 - 8.5 * ab(p * Za(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - p)));
              p = fb(e[5].h, e[14].h);
              for (v = 0; 4 > v; v++) {
                Y().translateSelf(
                  (2 < v ? 2 * (1 - p) + p : 0) - 100,
                  p * Math.sin(1.3 * d + 1.7 * v) * (3 + v / 3) + 0.7,
                  115 - 7 * (1 - e[5].h) * (1 - e[14].h) * (1 & v ? -1 : 1)
                    + ab(0.05, p) * Math.cos(1.3 * d + 7 * v) * (4 - 2 * (1 - v / 3)),
                );
              }
              Y().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - e[5].g) - p * Math.sin(0.8 * d) - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * d) * (3 + 3 * p), 0);
              Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ua);
              Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, va);
              Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - va);
              Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + va);
              p = fb(e[8].h, e[9].h);
              for (v = 0; 3 > v; ++v) {
                Y().translateSelf(0, p * Math.sin(1.5 * d + 1.5 * v) * 4 + (v ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)));
              }
              Y().translateSelf(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
              p = fb(fb((e[9].g + e[9].h) / 2, e[8].h), (e[15].g + e[15].h) / 2);
              Y().translateSelf(0, 16 * p, 95 + 8.5 * l(2 * p - 1));
              for (p = 0; 13 > p; ++p) {
                Ma[p].F(), nb(m, cc, p);
              }
              for (p = 0; 16 > p; ++p) {
                e[p].F(), nb(m, cc, 13 + p);
              }
              sa();
              for (p = 2; qa >= p; ++p) {
                nb(h[p].m, bc, p - 2);
              }
              G();
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              Z.uae(G("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa)));
              jc(G("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(G("b"), !1, nb(ob().translateSelf(-Ua, -Va, -Wa - 0.3)));
              jc(G("c"), 0, 40);
              ha = 0;
            }
            p = Ga;
            v = Ha;
            let D = Ia;
            da
              ? (ob(la).invertSelf(),
                lb(3.6, 3.5),
                p = hb,
                v = ib,
                D = 5,
                ob(y, x).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -v, -D).rotateSelf(0, 99))
              : ob(y, x).rotateSelf(-Xa, -Ya).invertSelf().translateSelf(-p, -v, -D);
            z();
            Z.ubu(z("k"), p, v, D);
            Z.uae(z("a"), !1, nb(y));
            Z.ubh(z("g"), 3);
            Z.ubh(z("h"), 3);
            Z.b6o(36160, V);
            Z.v5y(0, 0, 2048, 2048);
            F[0](60.17);
            F[1](138.6);
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(z("b"), !1, nb(x));
            Z.uae(z("i"), !1, A);
            Z.uae(z("a"), !1, nb(la));
            Z.ubh(z("g"), 0);
            Z.ubh(z("h"), 1);
            jc(z("c"), !ia, 41);
            I();
            Z.ubu(I("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, xa);
            Z.uae(I("b"), !1, nb(ob(x).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, T);
            Z.v5y(0, 0, 128, 128);
            Z.f1s();
          },
          n = new DOMMatrix(),
          x = new DOMMatrix(),
          A = new Float32Array(32),
          f = g,
          t = H(8, () => ({})),
          I = lc(
            kc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
          );
        var k = kc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a,c[38];void main(){mat4 i=f.w==1.?mat4(1):c[abs(int(f.w))+gl_InstanceID-2];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const G = lc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          z = lc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          F = H(2, p => {
            const v = Z.c25();
            return Z.a4v(33984 + p),
              Z.b9j(3553, v),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              D => {
                let N = 0, S = 0, E = 0, r = 1 / 0, u = 1 / 0, w = 1 / 0, B = -1 / 0, J = -1 / 0, Q = -1 / 0;
                Z.fas(36160, 36096, 3553, v, 0);
                Z.c4s(256);
                ob().scale3dSelf(D).multiplySelf(ob(ma[p], n).multiplySelf(x).invertSelf());
                for (let M = 0; 8 > M; ++M) {
                  const O = t[M];
                  lb(4 & M ? 1 : -1, 2 & M ? 1 : -1, 1 & M ? 1 : -1);
                  N -= O.x = (0 | hb) / (D * kb);
                  S -= O.y = (0 | ib) / (D * kb);
                  E -= O.z = (0 | jb) / (D * kb);
                }
                ob().rotateSelf(298, 139).translateSelf(N / 8, S / 8, E / 8);
                for (D = 0; 8 > D; ++D) {
                  const { x: M, y: O, z: ba } = t[D];
                  lb(M, O, ba);
                  r = $a(r, hb);
                  B = ab(B, hb);
                  u = $a(u, ib);
                  J = ab(J, ib);
                  w = $a(w, jb);
                  Q = ab(Q, jb);
                }
                D = 10 + p;
                w *= 0 > w ? D : 1 / D;
                Q *= 0 < Q ? D : 1 / D;
                Z.uae(
                  z("b"),
                  !1,
                  nb(
                    ob(y, n).scaleSelf(2 / (B - r), 2 / (J - u), 2 / (w - Q)).translateSelf(
                      (B + r) / -2,
                      (J + u) / -2,
                      (w + Q) / 2,
                    ).multiplySelf(m),
                  ),
                );
                jc(z("c"), !ia, 41);
                A.set(mb, 16 * p);
              };
          }),
          V = Z.c5w();
        k = Z.c25();
        const R = Z.c3z(), T = Z.c5w();
        G();
        Z.uae(G("a"), !1, nb(yb(1e-4, 2, 1.2, 0.4)));
        z();
        Z.ubh(z("q"), 2);
        I();
        Z.ubh(I("q"), 2);
        Z.b6o(36160, V);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, T);
        Z.bb1(36161, R);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, R);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Hb)();
        NO_INLINE(ac)();
        requestAnimationFrame(q);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = La;
  NO_INLINE(Gb)(() => {
    zb(() => {
      let f = 0;
      const t = [],
        I = [],
        G = [],
        z = [],
        F = new Int32Array(8),
        V = new Map(),
        R = new Int32Array(F.buffer, 0, 5),
        T = new Float32Array(F.buffer);
      h.map((p, v) => {
        let D;
        const N = S => {
          let { x: E, y: r, z: u } = D[S], w = (T[0] = E, T[1] = r, T[2] = u, S = "" + (D.C ? R : F), V.get(S));
          return void 0 !== w
            ? (E = 3 * w, z[E] = (z[E++] + F[5]) / 2, z[E] = (z[E++] + F[6]) / 2, z[E] = (z[E] + F[7]) / 2)
            : (V.set(S, w = V.size), I.push(E, r, u, T[3]), G.push(F[4]), z.push(F[5], F[6], F[7])),
            w;
        };
        for (D of (T[3] = 41 === v || 40 === v ? -2 : 42 === v ? -15 : v, p.o)) {
          const { x: S, y: E, z: r } = Ob(D);
          F[4] = 0 | D.u;
          F[5] = 32767 * S;
          F[6] = 32767 * E;
          F[7] = 32767 * r;
          for (let u = 2, w = N(0), B = N(1); D.length > u; ++u) {
            t.push(w, B, B = N(u));
          }
        }
        p.o = 0;
        p.s = f;
        p.D = f = t.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(I), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(z), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(G), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(t), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [p, v, D, N, S] = JSON.parse(localStorage.spdnt22);
        e.map((E, r) => E.g = E.h = E.i = r ? 0 | p[r] : 0);
        Ma.map((E, r) => E.i = 0 | v[r]);
        Fa = D;
        d = N;
        pa = S;
      } catch {
      }
      Jb();
      oa = l(Fa + Da);
      zb(b);
    });
    const k = f => C(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.001 - f, 1, 1.001 - f),
      q = f =>
        X(
          K(L(), C(0, -f / 2).scale(6, f - 1, 2.2)),
          K(L(), C(0, -f / 2 - 6).scale(4, f - 3, 4)),
          K(L(32, 1), C(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      n = H(11, f => sb(qb(rb(19), k(f), P(1, 1, 0.8, 0.2)).reverse(), qb(rb(19), k(f + 1), P(1, 1, 0.8, 0.2)), 1))
        .flat(),
      x = [
        ...K(L(), C(0, -3).scale(11, 1.4, 3), P(0.9, 0.9, 0.9, 0.2)),
        ...K(L(), C(0, -2.2).scale(7.7, 0.5, 4), P(0.5, 0.5, 0.5, 0.2)),
        ...X(
          K(L(6), y.rotate(90).scale(6, 8, 6), P(0.3, 0.6, 0.6, 0.3)),
          K(L(4, 0, 0.01), C(0, 6).scale(12, 2, 0.75).rotate(0, 45), P(0.3, 0.6, 0.6, 0.3)),
          K(L(6), y.rotate(90).scale(5, 12, 5), P(0.3, 0.6, 0.6, 0.3)),
          ...[-5, 0, 5].map(f => K(L(5), C(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(0.3, 0.6, 0.6, 0.3))),
        ),
      ],
      A = X(
        K(L(), C(0, -0.5, 1).scale(1.15, 1.2, 6.5), P(0.25, 0.25, 0.35, 0.3)),
        X(
          K(L(3), C(0, 0, -5.5).scale(3, 2), P(0.6, 0.3, 0.4, 0.3)),
          K(L(), C(0, 0, -3.65).scale(2.5, 3), P(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => K(L(), C(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), P(0.7, 0.2, 0, 0.3))),
      );
    U();
    c([Ra.slice(1)], C(-2).scale3d(3).rotate(90, 0));
    U();
    Lb(C(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, t) => {
      c(L(), C(0, 0, t ? 22 : -23).scale(3, 1, 8), P(0.9, 0.9, 0.9, 0.2));
      c(L(), C(0, 6.3, f).scale(4, 0.3, 1), P(0.3, 0.3, 0.3, 0.4));
      c(L(), C(0, 1, f).scale(3, 0.2, 0.35), P(0.5, 0.5, 0.5, 0.3));
      H(5, I => c(n, C(18.5 * (t - 0.5), 0, 4.8 * I - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2)));
    });
    c(L(), C(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    c(L(), C(3, 1.5, -20).scale(0.5, 2, 5), P(0.7, 0.7, 0.7, 0.2));
    c(L(), C(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(0.75, 0.75, 0.75, 0.2));
    c(L(5), C(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(0.6, 0.3, 0.3, 0.4));
    c(X(
      Zb(
        K(L(6, 0, 0, 0.3), C(8, -3, -4).scale(13, 1, 13), P(0.7, 0.7, 0.7, 0.2)),
        X(
          K(L(6, 0, 0, 0.3), C(0, -0.92).scale(13, 2, 13), P(0.8, 0.8, 0.8, 0.2)),
          K(L(), y.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), P(0.5, 0.5, 0.5, 0.5)),
        ),
        K(
          L(),
          y.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          P(0.8, 0.2, 0.2, 0.5),
        ),
        K(L(6), C(0, -8).scale(9, 8, 7), P(0.2, 0.1, 0.4, 0.5)),
      ),
      K(L(5), y.scale(5, 30, 5), P(0.4, 0.2, 0.6, 0.5)),
      K(L(5, 0, 1.5), C(0, 1).scale(4.5, 0.3, 4.5), P(0.7, 0.5, 0.9, 0.2)),
      K(L(6), C(15, -1.5, 4).scale(3.5, 1, 3.5), P(0.5, 0.5, 0.5, 0.5)),
    ));
    Lb(C(15, -2, 4));
    c(L(), C(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    Lb(C(-55, -1.1, 46).rotate(0, 90));
    c(L(7), C(-57, -2.6, 46).scale(4, 1, 4), P(0.8, 0.8, 0.8, 0.3));
    c(L(6), C(-61.3, -2.4, 49).scale(3, 1, 5), P(0.4, 0.6, 0.6, 0.3));
    c(x, C(-53, 0, 55));
    c(L(), C(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), P(0.7, 0.7, 0.7, 0.2));
    c(L(3, 0, -0.5), C(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(0.8, 0.8, 0.8, 0.2));
    c(X(
      Zb(
        K(L(), C(-100, -2.4, 55).scale(8, 0.9, 8), P(0.8, 0.8, 0.8, 0.2)),
        K(L(), C(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(0.8, 0.8, 0.8, 0.2)),
        K(L(), C(-100, -2.6, 70).scale(3, 1.1, 7), P(0.8, 0.8, 0.8, 0.2)),
        K(L(), C(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(0.8, 0.8, 0.8, 0.2)),
        K(L(6), C(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(0.6, 0.6, 0.6, 0.3)),
        K(L(), C(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(0.8, 0.8, 0.8, 0.2)),
        K(L(), C(-100, 0.42, 92).scale(3, 1.1, 4.1), P(0.8, 0.8, 0.8, 0.2)),
      ),
      K(L(8), C(-100, -1, 55).scale(7, 0.9, 7), P(0.3, 0.3, 0.3, 0.4)),
      K(L(8), C(-100, -2, 55).scale(4, 0.3, 4), P(0.4, 0.4, 0.4, 0.5)),
      K(L(8, 0, -3.1), C(-100, -3, 55).scale(0.4, 1, 0.4), P(0.4, 0.4, 0.4, 0.5)),
    ));
    c(X(
      K(L(), C(-100, 1, 63).scale(7.5, 4), P(0.5, 0.5, 0.5, 0.4)),
      K(L(), C(-100, 0, 70).scale(2, 2, 10), P(0.5, 0.5, 0.5, 0.4)),
      K(L(20, 1), C(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(0.5, 0.5, 0.5, 0.4)),
    ));
    Ra.map(({ x: f, z: t }) => {
      c(L(6), C(3 * f, 3, 15 * t).scale(0.7, 4, 0.7), P(0.6, 0.3, 0.3, 0.4));
      c(L(6), C(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), P(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(I => c(L(6), C(7 * f - 100, I, 7 * t + 55).scale(1.3, 0.5, 1.3), P(0.4, 0.2, 0.2, 0.8)));
      c(L(14, 1), C(9 * f - 38.9, -7.3, 11 * t + 17).scale(1, 4), P(0.25, 0.25, 0.25, 1));
      [1.5, 8].map(I =>
        c(L(17, 1), C(9 * f - 38.9, I - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), P(0.6, 0.6, 0.6, 0.3))
      );
    });
    H(7, f => {
      c(
        L((23 * f + 1) % 5 + 5, 0, 0.5),
        C(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
        P(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    c(L(), C(-87, -9.5, 24).scale(7, 1, 3), P(0.4, 0.5, 0.6, 0.4));
    c(L(4), C(-86, -9.2, 27).scale(5, 1, 5), P(0.5, 0.6, 0.7, 0.3));
    c(L(12, 1), C(-86, -9, 31).scale(1.5, 1, 1.5), P(0.3, 0.3, 0.4, 0.1));
    Lb(C(-86, -7.5, 31));
    c(
      X(
        Zb(
          K(L(5), C(0, 0, -7).scale(2, 1.2, 2), P(0.2, 0.4, 0.7, 0.3)),
          K(L(5), y.scale(9, 1.2, 9), P(0, 0.2, 0.3, 0.5)),
          K(L(), y.scale(11, 1, 13), P(0.3, 0.4, 0.6, 0.3)),
        ),
        K(L(5), y.scale(5.4, 5, 5.4), P(0, 0.2, 0.3, 0.5)),
      ),
      C(-38.9, -11.3, 17),
    );
    Lb(C(-38.9, -9.6, 10));
    c(
      X(
        Zb(
          K(L(6), C(0, 0, -18).scale(15, 1.2, 15), P(0.7, 0.7, 0.7, 0.3)),
          K(L(), y.scale(4, 1.2, 6), P(0.45, 0.4, 0.6, 0.3)),
        ),
        ...H(6, f =>
          H(6, t =>
            K(
              L(6),
              C(4.6 * t - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32).scale(2, 5, 2),
              P(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      C(-38.9, -11.3, -1),
    );
    c(L(5), C(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), P(0.8, 0.1, 0.25, 0.4));
    Lb(C(-84, -0.7, 85).rotate(0, 45));
    H(3, f => {
      c(q(16), C(12 * f - 109, -9, -12), P(0.6, 0.6, 0.6, 0.3));
      c(q(16), C(-77, -9, -12 * f - 20).rotate(0, 90), P(0.6, 0.6, 0.6, 0.3));
    });
    c(
      X(
        Zb(K(L(), C(26.5, -1.6, 10).scale(20, 2.08, 3)), K(L(), C(26.5, -0.5, 10).scale(19, 2, 0.5))),
        ...H(4, f => K(L(), C(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
        ...H(3, f => K(L(), C(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
      ),
      C(-123, 0.2, -12),
      P(0.5, 0.5, 0.6, 0.2),
    );
    Lb(C(-116, -1.4, -18).rotate(0, 180));
    c(L(6), C(-116, -2.6, -16.5).scale(3.2, 0.8, 3), P(0.6, 0.5, 0.7, 0.2));
    c(L(), C(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    c(L(), C(-115.5, -17, -12).scale(0.5, 15, 2.2), P(0.6, 0.6, 0.6, 0.3));
    c(L(8), C(-114, -17, -2).scale(2, 15, 2), P(0.6, 0.6, 0.6, 0.3));
    c(L(8), C(-79, -17, -2).scale(2, 15, 2), P(1, 1, 1, 0.3));
    c(L(), C(-77, -17, -50.5).scale(2.2, 15, 0.5), P(0.6, 0.6, 0.6, 0.3));
    c(X(
      K(L(12), C(-77, -14.5, -12).scale(4, 17.5, 4), P(0.7, 0.7, 0.7, 0.2)),
      K(L(12), C(-77, 3.1, -12).scale(3, 5, 3), P(0.4, 0.5, 0.6, 0.2)),
      K(L(), C(-79, 0.1, -12).scale(3.5, 2, 1.3), P(0.4, 0.5, 0.6, 0.2)),
      K(L(), C(-77, 0.1, -14).scale(1.5, 2, 2), P(0.4, 0.5, 0.6, 0.2)),
    ));
    c(L(), C(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), P(0.6, 0.6, 0.6, 0.3));
    c(L(9), C(-98, -18.4, -40).scale(2.5, 13.5, 2.5), P(0.5, 0.5, 0.5, 0.3));
    c(X(
      K(L(), C(-93, -5.8, -40).scale(9, 1, 5), P(0.8, 0.8, 0.8, 0.1)),
      K(L(9), C(-98, -5.8, -40).scale(3, 8, 3), P(0.7, 0.7, 0.7, 0.2)),
    ));
    Lb(C(-98, -4.4, -40).rotate(0, 90));
    c(X(
      Zb(
        K(L(6, 0, 0, 0.6), C(-100, 0.7, 105.5).scale(8, 1, 11), P(0.7, 0.7, 0.7, 0.2)),
        K(L(), C(-101.5, 0.7, 93.5).scale(10.5, 1, 2), P(0.7, 0.7, 0.7, 0.2)),
      ),
      K(L(5), C(-100, 0.7, 113).scale(4, 3, 4), P(0.7, 0.7, 0.7, 0.2)),
    ));
    [-1, 1].map(f => {
      [7.2, 1.5].map(t => c(L(15, 1), C(-7.5 * f - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), P(0.5, 0.24, 0.2, 0.4)));
      c(n, C(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      c(L(12, 1), C(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), P(0.6, 0.24, 0.2, 0.5));
      c(
        X(
          K(L(), C(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), P(0.5, 0.5, 0.5, 0.4)),
          K(L(), y.scale(3, 3, 10), P(0.6, 0.24, 0.2, 0.5)),
          K(L(28, 1), C(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(0.6, 0.24, 0.2, 0.5)),
          K(L(5), C(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(0.6, 0.24, 0.2, 0.5)),
          K(L(5), C(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), P(0.6, 0.24, 0.2, 0.5)),
        ),
        C(f - 100, 0.7, 97),
      );
    });
    c(X(
      K(L(), C(-82.07, 0.8, 106).scale(11, 0.9, 2.2), P(0.7, 0.7, 0.7, 0.1)),
      K(L(45, 1), C(-81, 0.7, 106).scale3d(7.7), P(0.7, 0.7, 0.7, 0.1)),
    ));
    c(L(), C(-58, 1, 106).scale(2, 0.65, 2), P(0.7, 0.7, 0.7, 0.2));
    c(L(), C(-50.7, 1, 99).scale(2, 0.65, 1), P(0.7, 0.7, 0.7, 0.2));
    c(L(), C(-42, 0.4, 91).scale(5, 1, 2.5), P(0.7, 0.7, 0.7, 0.3));
    c(L(), C(-34.2, 0.4, 91).scale(3, 1, 3), P(0.7, 0.7, 0.7, 0.3));
    c(L(5), C(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), P(0.2, 0.5, 0.5, 0.6));
    Lb(C(-34, 2.7, 96).rotate(-12, 0));
    [-1, 1].map(f => c(n, C(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    H(
      3,
      f =>
        c(
          q(24.7 - 0.7 * (1 & f)),
          C(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
          1 & f ? P(0.5, 0.5, 0.5, 0.3) : P(0.35, 0.35, 0.35, 0.5),
        ),
    );
    c(X(
      K(L(6, 0, 0, 0.3), C(0, -0.92, 95).scale(14, 2, 14), P(0.8, 0.8, 0.8, 0.2)),
      K(L(5), C(0, 0, 95).scale3d(6), P(0.3, 0.3, 0.3, 0.5)),
    ));
    Lb(C(0, 1.7, 82).rotate(0, 180));
    c(L(5), C(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(0.5, 0.3, 0.3, 0.4));
    c(L(6), C(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(0.5, 0.6, 0.7, 0.3));
    c(L(), C(0, 16, 129).scale(1.5, 1, 2), P(0.5, 0.6, 0.7, 0.3));
    c(L(7), C(0, 16.2, 133).scale(5, 1, 5), P(0.4, 0.5, 0.6, 0.4));
    c(X(
      Zb(
        K(L(), C(0, 16, 110.5).scale(12, 1, 3), P(0.5, 0.3, 0.3, 0.4)),
        K(L(), C(0, 16, 111).scale(3, 1, 3.8), P(0.5, 0.3, 0.3, 0.4)),
      ),
      K(L(5), C(0, 16, 103.5).scale(5.5, 5, 5.5), P(0.5, 0.3, 0.3, 0.4)),
    ));
    Mb(C(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Mb(C(0, 2.8), [5, 10, 3], [-5, 10, 3], ...rb(18).map(({ x: f, z: t }) => [7 * f, 10 * t, 4.5 - 2 * Za(f)]));
    Mb(C(0, 3, 95), ...rb(9).map(({ x: f, z: t }) => [9 * f, 9 * t, 4]));
    Mb(C(0, 19, 134), [0, 0, 3.5]);
    Mb(C(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Mb(C(-89, 0.2, 80), [0, 0, 6]);
    Mb(C(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Mb(C(-115, 0.2, -12), [0, 0, 3.5]);
    Mb(C(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    H(2, () => {
      U();
      c(X(
        K(L(30, 1, 1.15, 1), C(0, -3).scale(3.5, 1, 3.5), P(0.7, 0.4, 0.25, 0.7)),
        K(L(30, 1, 1.3, 1), C(0, -2.5).scale(2.6, 1, 3), P(0.7, 0.4, 0.25, 0.2)),
        K(L(), C(4, -1.2).scale3d(2), P(0.7, 0.4, 0.25, 0.3)),
      ));
      Lb(C(0, -3, 4));
    });
    H(4, () => {
      U();
      H(7, f => c(K(L(9, 1), C(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), P(0.3, 0.3, 0.38))));
    });
    U();
    c(L(5), C(0, -0.2).scale(5, 1, 5), P(0.6, 0.65, 0.7, 0.3));
    Lb(C(0, 1.2));
    H(2, () => {
      U();
      Ra.map(({ x: f, z: t }) => {
        c(L(11, 1), C(4 * f, 4, 4 * t).scale(0.8, 3, 0.8), P(0.5, 0.3, 0.7, 0.6));
        c(L(), C(4 * f, 7, 4 * t).scale(1, 0.3), P(0.5, 0.5, 0.5, 0.3));
      });
      c(X(
        K(L(), y.scale(5, 1, 5), P(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(f => K(L(25, 1), C(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), P(0.8, 0.8, 0.8, 0.3))),
      ));
      c(L(), C(0, -3).scale(8, 2, 8), P(0.4, 0.4, 0.4, 0.3));
    });
    U();
    c(X(
      Zb(
        K(L(), y.scale(1.5, 1, 5), P(0.9, 0.9, 0.9, 0.2)),
        K(L(6), y.scale(4, 1, 5), P(0.9, 0.9, 0.9, 0.2)),
        K(L(), C(0, -2).scale(2, 3.2, 1.9), P(0.3, 0.8, 0.5, 0.5)),
        K(L(16, 1, 0, 4), y.scale(1, 1, 1.5).rotate(0, 90), P(0.9, 0.9, 0.9, 0.2)),
      ),
      K(L(), y.scale(1.3, 10, 1.3), P(0.2, 0.7, 0.4, 0.6)),
    ));
    Mb(C(0, 2.8), [0, 0, 4.5]);
    U();
    c(L(3), C(-23, -1.7, 55.8).scale(5, 0.7, 8.3), P(0.3, 0.6, 0.6, 0.2));
    c(L(8), C(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(0.8, 0.8, 0.8, 0.2));
    c(L(), C(-23, -3, 55).scale(5.2, 1.7, 3), P(0.5, 0.5, 0.5, 0.3));
    c(L(), C(-23, -2.2, 62).scale(3, 1, 4), P(0.5, 0.5, 0.5, 0.3));
    Lb(C(-23, -0.5, 66.5));
    U();
    c(L(), C(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(0.7, 0.7, 0.7, 0.2));
    c(X(K(L(), y.scale(3, 1.4, 2.7)), K(L(), y.scale(1.2, 8, 1.2))), C(-33, -3, 55), P(0.7, 0.7, 0.7, 0.2));
    U();
    c(X(
      K(L(), C(-27, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2)),
      K(L(), C(-27, -3, 55).scale(1, 3), P(0.9, 0.9, 0.9, 0.2)),
    ));
    c(L(), C(-39, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    U();
    c(L(6), C(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), P(0.7, 0.7, 0.7, 0.4));
    U();
    c(x);
    U();
    [0, 12, 24].map(f =>
      c(L(), C(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.2, 0.5, 0.6, 0.2))
    );
    U();
    [6, 18].map(f =>
      c(L(), C(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.1, 0.4, 0.5, 0.2))
    );
    U();
    c(
      X(
        Zb(
          K(L(5), C(0, 2).scale(5, 7, 5).skewY(8), P(0.2, 0.4, 0.5, 0.5)),
          K(L(5), C(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(0.25, 0.35, 0.5, 0.5)),
          K(L(5), C(0, 9).scale(0.6, 7, 0.6).skewY(8), P(0.35, 0.3, 0.5, 0.5)),
        ),
        K(L(5), y.scale(4, 8, 4), P(0.2, 0.4, 0.5, 0.5)),
        K(L(5), C(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(0.2, 0.4, 0.5, 0.5)),
      ),
      C(-38.9, -11.3, 17),
    );
    Mb(C(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({ x: f, z: t }) => [3 * f, 3 * t, 1.2]));
    U();
    H(2, f => c(A, C(9 * f - 110 + (1 & f), 1.9, -12)));
    U();
    H(2, f => c(A, C(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    U();
    H(3, f => c(A, C(9 * f - 106, 1.9, -12)));
    H(4, f => {
      U();
      c(
        L(6),
        C(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        P(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    U();
    c(X(K(L(10), y.scale(6, 2, 6), P(0.1, 0.6, 0.5, 0.3)), K(L(10), y.scale(3.3, 6, 3.3), P(0.1, 0.6, 0.5, 0.5))));
    c(L(15, 1), C(-7.5).rotate(0, 90).scale(3, 2.3, 3), P(0.4, 0.4, 0.4, 0.3));
    c(L(10), C(-7.5).rotate(0, 90).scale(2, 2.5, 2), P(0.3, 0.8, 0.7, 0.3));
    c(L(5), C(-7.5).rotate(0, 90).scale(1, 3), P(0.5, 0.5, 0.5, 0.5));
    Lb(C(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => c(n, y.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    Mb(C(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    U();
    c(X(
      K(L(45, 1), y.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)),
      K(L(), C(0, 0, -5.5).scale(1.5, 3, 2.7), P(0.45, 0.45, 0.45, 0.2)),
    ));
    c(L(8), C(0, 2).scale(3, 1.5, 3).rotate(0, 22), P(0.7, 0.7, 0.7, 0.1));
    c(L(5), C(0, 2).scale(1, 2), P(0.3, 0.3, 0.3, 0.2));
    Mb(C(0, 3), ...rb(14).map(({ x: f, z: t }) => [5.6 * f, 5.6 * t, 2]));
    U();
    [-1, 1].map(f => c(n, y.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    c(X(K(L(28, 1), C(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), K(L(), y.scale(9, 5, 2), P(0.3, 0, 0, 0.3))));
    c(K(L(28, 1), y.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(K(L(5), C(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(
      K(L(28, 1), C(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)),
      K(L(), C(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)),
      K(L(), C(0, 0, 7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),
    ));
    c(K(L(28, 1), y.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(K(L(5), C(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(
      K(L(28, 1), C(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)),
      K(L(), C(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)),
      K(L(), C(0, 0, -7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),
    ));
    c(K(L(28, 1), y.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(K(L(5), C(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    [P(0.1, 0.55, 0.45, 0.2), P(0.2, 0.5, 0.5, 0.3), P(0.3, 0.45, 0.55, 0.4)].map((f, t) => {
      U();
      c(L(), C(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && c(L(), C(-29.1, 0.4, 91).scale(2.1, 1, 3), P(0.7, 0.7, 0.7, 0.3));
      1 === t && c(L(), C(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), P(0.6, 0.6, 0.7, 0.3));
    });
    U();
    c(L(3), C(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), P(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      c(L(6), C(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), P(0.7, 0.7, 0.7, 0.4));
      c(L(), C(0, 6.2, f + 95).scale(0.5, 11, 0.5), P(0.5, 0.3, 0.3, 0.4));
    });
    U();
    c(L(5), y.scale(5, 1.1, 5), P(0.5, 0.3, 0.3, 0.4));
    c(L(5), y.scale(5.5, 0.9, 5.5), P(0.25, 0.25, 0.25, 0.4));
    Lb(C(0, 1.5, -1).rotate(0, 180));
    U();
    c(vb(20), C(0, 1).scale3d(0.5), P(1, 0.3, 0.4));
    c(vb(30), y.scale(0.65, 0.8, 0.55), P(1, 0.3, 0.4));
    c(L(), C(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), P(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      c(n, y.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), P(1, 1, 0.8));
      c(
        K(X(L(15, 1), K(L(), C(0, 0, 1).scale(2, 2, 0.5))), y.rotate(-90, 0).scale(0.1, 0.05, 0.1), P(0.3, 0.3, 0.3)),
        C(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map(f => {
      U();
      c(L(20, 1), C(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), P(1, 0.3, 0.4));
    });
    U();
    c(L(6).slice(0, -1), y.scale(0.77, 1, 0.77), P(1, 0.3, 0.5));
    U();
    c(
      vb(30, 24, (f, t, I) => {
        const G = t / 24, z = f * Math.PI * 2 / 30, F = Math.sin(G ** 0.6 * Math.PI / 2);
        f = G * G * Math.sin(f * Math.PI * 14 / 30) / 4;
        return 23 < t
          ? { x: I.C = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(z) * F,
            y: Math.cos(G * Math.PI) - G - f,
            z: Math.sin(z) * F + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      y.scale(0.7, 0.7, 0.7),
      P(1, 1, 1),
    );
    [-1, 1].map(f => c(vb(12), C(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    U();
    c(L(6, 1), y.scale(0.12, 1.2, 0.12), P(0.3, 0.3, 0.5, 0.1));
    c(L(10), C(0, 0.8).scale(0.2, 0.3, 0.2), P(1, 0.5, 0.2));
    c(L(3), C(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), P(0.2, 0.2, 0.2, 0.1));
  });
});
