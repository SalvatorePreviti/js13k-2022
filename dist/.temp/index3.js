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
  ya = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 13,
  Ja = 0.1;
const Ka = Math.PI / 180,
  La = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Ma = [],
  e = [],
  k = [],
  Na = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
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
  lb = (a = 0, b = 0, g = 0, h = 1) => {
    hb = m.m11 * a + m.m21 * b + m.m31 * g + m.m41 * h;
    ib = m.m12 * a + m.m22 * b + m.m32 * g + m.m42 * h;
    jb = m.m13 * a + m.m23 * b + m.m33 * g + m.m43 * h;
    kb = m.m14 * a + m.m24 * b + m.m34 * g + m.m44 * h;
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
  E = NO_INLINE((a, b, g) => y.translate(a, b, g)),
  I = (a, b) => Array.from(Array(a), (g, h) => b(h)),
  pb = (a, b, g) => (a.C = g, a.u = b, a),
  qb = (a, b, g = a.u) => (ob(b), pb(a.map(({ x: h, y: p, z: n }) => (lb(h, p, n), { x: hb, y: ib, z: jb })), g, a.C)),
  M = (a, b, g) => a.map(h => qb(h, b, g)),
  rb = (a, b = 0) =>
    I(a, g => {
      const h = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > Za(h) ? h : 0 > h ? h - b : h + b };
    }),
  sb = (a, b, g) =>
    a.map((h, p, { length: n }) => pb([h, b[n - p - 1], b[n - (p + 1) % n - 1], a[(p + 1) % n]], a.u, g)),
  N = (
    a,
    b,
    g = 0,
    h,
  ) => (a = a ? rb(a, h) : Na,
    h = qb(a, E(0, 1).scale3d(0 < g ? g : 1)),
    a = qb(a, E(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...sb(a, h, b), h, a]),
  vb = (
    a,
    b = a,
    g = (
      h,
      p,
    ) => (p *= Math.PI / b,
      { x: Math.cos(h *= 2 * Math.PI / a) * Math.sin(p), y: Math.cos(p), z: Math.sin(h) * Math.sin(p) }),
  ) => {
    const h = [];
    for (let p = 0; a > p; p++) {
      for (let n = 0; b > n; n++) {
        const w = pb([], 0, 1);
        h.push(w);
        w.push(g(p, n, w));
        n && w.push(g((p + 1) % a, n, w));
        b - 1 > n && w.push(g((p + 1) % a, n + 1 % b, w));
        w.push(g(p, n + 1 % b, w));
      }
    }
    return h;
  },
  wb = NO_INLINE(a => 1 - Math.exp(-ya * a)),
  xb = NO_INLINE((a, b, g) => eb(a, b, wb(g))),
  yb = (a, b, g, h) =>
    new DOMMatrix([g, 0, 0, 0, 0, h, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  zb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Cb = a => Math.sin(a * Math.PI * 2),
  Db = a => 0.5 > a % 1 ? 1 : -1,
  Eb = a => a % 1 * 2 - 1,
  Fb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Gb = a => {
    let b = 0;
    const g = () => {
        let n = 0;
        const w = O => {
            let P, ba, Oa, ja = 0, ka = 0;
            const ca = [],
              ra = new Int32Array(768 * O),
              cc = 2 ** (z - 9) / O,
              dc = Math.PI * 2 ** (u - 8) / O,
              Ab = D * O & -2;
            for (let tb = 0; 11 >= tb; ++tb) {
              for (
                let ub = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb];
                32 > ub;
                ++ub
              ) {
                const Pb = (32 * tb + ub) * O;
                for (var Pa = 0; 4 > Pa; ++Pa) {
                  if (P = 0, Ob && (P = B[Ob - 1].charCodeAt(ub + 32 * Pa) - 40, P += 0 < P ? 106 : 0), P) {
                    var fa;
                    if (!(fa = ca[P])) {
                      fa = P;
                      let W = void 0, za = void 0;
                      var Qb = P;
                      let ec = 0, fc = 0;
                      const gc = 2 > b ? Eb : Cb, hc = 2 > b ? 1 > b ? Db : Fb : Cb, Rb = new Int32Array(S + T + R);
                      for (let Qa = 0, Bb = 0; S + T + R > Qa; ++Qa, ++Bb) {
                        let Ra = 1;
                        S > Qa ? Ra = Qa / S : S + T > Qa || (Ra = (1 - (Ra = (Qa - S - T) / R)) * 3 ** (-x / 16 * Ra));
                        0 > Bb
                          || (Bb -= 4 * O,
                            za = 0.00396 * 2 ** ((Qb + r - 256) / 12),
                            W = 0.00396 * 2 ** ((Qb + C - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Rb[Qa] = 80
                            * (gc(ec += za * Ra ** (J / 32)) * f + hc(fc += W * Ra ** (G / 32)) * H
                              + (V ? (2 * Math.random() - 1) * V : 0))
                            * Ra | 0;
                      }
                      fa = ca[fa] = Rb;
                    }
                    for (let W = 0, za = 2 * Pb; fa.length > W; ++W, za += 2) {
                      ra[za] += fa[W];
                    }
                  }
                }
                for (let W, za = 0; O > za; ++za) {
                  Pa = 0;
                  fa = 2 * (Pb + za);
                  var Aa = (((W = ra[fa]) || Oa)
                    && (ba = 0.00308 * A,
                      1 !== b && 4 !== b || (ba *= Math.sin(cc * fa * Math.PI * 2) * K / 512 + 0.5),
                      ba = 1.5 * Math.sin(ba),
                      ja += ba * ka,
                      Aa = (1 - L / 255) * (W - ka) - ja,
                      ka += ba * Aa,
                      W = 4 === b ? ka : 3 === b ? Aa : ja,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= F / 32,
                      Oa = 1e-5 < W * W,
                      Aa = Math.sin(dc * fa) * q / 512 + 0.5,
                      Pa = W * (1 - Aa),
                      W *= Aa),
                    fa < Ab || (Pa += ra[1 + fa - Ab]
                      * v / 255,
                      W += ra[fa - Ab] * v / 255),
                    n + fa >> 1);
                  h[Aa] += (ra[fa] = Pa) / 65536;
                  p[Aa] += (ra[++fa] = W) / 65536;
                }
              }
            }
            n += 768 * O;
          },
          B = Sa[b],
          [f, r, J, H, C, G, V, S, T, t, x, z, A, L, F, q, u, v, D, K] = Ta[b],
          R = 4 * t ** 2;
        w(5513);
        w(4562);
        w(3891);
        zb(5 > ++b ? g : a);
      },
      h = (ea = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      p = ea.getChannelData(1);
    zb(g);
  },
  Hb = () => {
    let a, b, g, h, p, n, w, B, f, r, J, H, C, G, V, S, T = !0;
    const t = [],
      x = () => {
        b4.innerHTML = "Music: " + T;
        S && (da || !T ? S.disconnect() : S.connect(V.destination));
      },
      z = () => {
        const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ma = [yb(0.3, 55, q, 1.732051), yb(55, 181, q, 1.732051)];
        la = yb(0.3, 181, q, 1.732051);
        h = B = void 0;
        t.length =
          ha =
          G =
          H =
          C =
          Ba =
          Ca =
            0;
        document.hidden && A(!0);
      },
      A = q => {
        if (da !== q) {
          if (da = q, z(), document.body.className = q ? "l m" : "l", q) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          x();
        }
      },
      L = q => {
        try {
          V || (V = new AudioContext(), (S = V.createBufferSource()).buffer = ea, S.loop = !0, S.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        A(!1);
        ia = q;
      },
      F = (q, u) => q.buttons[u]?.pressed || 0 < q.buttons[u]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      L();
    };
    b2.onclick = () => {
      L(1);
    };
    b5.onclick = () => A(!0);
    b4.onclick = () => {
      T = !T;
      x();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
    };
    onclick = q => {
      if (!da && (q.target === hC && (ha = 1), ia)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = q => {
      let u;
      q.repeat
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
        }[q.code],
          (t[u] = !!q.type[5] && !0) && (0 === u && (ha = 1), 1 === u && A(!0)));
    };
    onmousemove = ({ movementX: q, movementY: u }) => {
      ia && (q || u) && (Ya += 0.1 * q, Xa += 0.1 * u);
    };
    hC.ontouchstart = q => {
      if (!da) {
        for (let { pageX: u, pageY: v, identifier: D } of q.changedTouches) {
          ia && u > hC.clientWidth / 2
            ? void 0 === B && (f = 0, n = u, w = v, B = D, J = Xa, r = Ya)
            : void 0 === h && (p = 0, b = u, g = v, h = D);
        }
        a = xa;
      }
    };
    hC.ontouchmove = q => {
      if (!da) {
        for (let { pageX: R, pageY: O, identifier: P } of q.changedTouches) {
          var u, v, D, K;
          B === P && (Xa = J + (O - w) / 2.3, Ya = r + (R - n) / 2.3, f = 1);
          h === P
            && (P = (b - R) / 20,
              u = Za(P),
              v = (g - O) / 20,
              D = Za(v),
              (K = 0.5 < ab(u, D)) && (p = 1),
              H = (K && 0.3 < u) * l(P, -1),
              C = (K && 0.3 < D) * l(v, -1),
              2 < u && (b = 20 * (0 > P ? -1 : 1) + R),
              2 < D && (g = 20 * (0 > v ? -1 : 1) + O));
        }
      }
    };
    hC.ontouchend = q => {
      let u;
      document.activeElement === document.body && q.preventDefault();
      for (const v of q.changedTouches) {
        v.identifier === B
          ? (B = void 0, f || (u = 1), f = 0)
          : v.identifier === h
          ? (h = void 0, C = H = 0, p || (u = 1), p = 0)
          : u = 1;
      }
      q.target === hC && u && a && 0.02 < (q = xa - a) && 0.7 > q && (ha = 1);
    };
    na = () => {
      Ba = C + (t[4] ? 1 : 0) - (t[5] ? 1 : 0);
      Ca = H + (t[2] ? 1 : 0) - (t[3] ? 1 : 0);
      let q = navigator.getGamepads()[0];
      q
        && (ia && (Xa += ya * bb(q.axes[3], 0.3) * 80, Ya += ya * bb(q.axes[2], 0.3) * 80),
          Ba += F(q, 12) - F(q, 13) - bb(q.axes[1], 0.2),
          Ca += F(q, 14) - F(q, 15) - bb(q.axes[0], 0.2),
          F(q, 9) && A(!0),
          (q = F(q, 3) || F(q, 2) || F(q, 1) || F(q, 0)) && !G && (ha = 1),
          G = q);
    };
    document.onvisibilitychange = onblur = onresize = z;
    A(!0);
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
    localStorage.spdnt22 = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Ia, d, pa]);
  },
  Q = NO_INLINE((a, b, g, h = 0) => 255 * h << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  U = () => {
    const a = [];
    c = (b, g = new DOMMatrix(), h) => a.push(...M(b, g, h));
    k.push({ m: new DOMMatrix(), o: a });
  },
  Lb = a => {
    const b = k.at(-1).m,
      g = e.length,
      h = {
        i: 0,
        g: 0,
        h: 0,
        m: b,
        G: a,
        F() {
          h.g = xb(h.g, h.i, 4);
          h.h = xb(h.h, h.i, 1);
          ob(b).multiplySelf(a);
          ha && 3 > (lb(), gb(Ua - hb, Va - ib, Wa - jb))
            ? h.i
              ? 0.7 < h.g && (h.i = 0, (Ia = g) && Ib("* click *", 1), Kb())
              : 0.3 > h.g && (h.i = 1, (Ia = g) && Ib("* click *", 1), Kb())
            : h.i && 0.8 < h.g && 13 === g && (h.i = 0,
              13 > Da
                ? Ib("Not leaving now, there are souls to catch!", 3)
                : Ea || (Ib("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ea = 1));
          m.rotateSelf(50 * h.g - 25, 0).translateSelf(0, 1).m44 = h.g;
        },
      };
    e.push(h);
    c(N(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Q(0.4, 0.5, 0.5));
    c(N(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Q(0.4, 0.5, 0.5));
    c(N(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), Q(0.5, 0.5, 0.4));
  },
  Mb = (a, ...b) => {
    let g, h, p, n, w = 0, B = 0, f = 1, r = -1;
    const J = {
      i: 0,
      F() {
        if (!J.i) {
          let x, z, A, L, F, q = 1, u = 1 / 0;
          for (let v = 0; b.length > v; v++) {
            const D = b[v];
            let K = gb(C - D[0], G - D[1]);
            q = $a(q, K / D[2]);
            0 > (K -= D[2]) ? F = 1 : u > K && (u = K, H = D);
          }
          F
            || (x = C - H[0],
              z = G - H[1],
              A = gb(x, z),
              L = Math.atan2(-z, x),
              f && (n = l(n / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2),
              L += B,
              r = -Math.cos(L),
              w = Math.sin(L),
              0.1 < A && (A = $a(A, H[2]) / A, C = x * A + H[0], G = z * A + H[1]));
          f = F;
          n = xb(n, 3 + 6 * (1 - q), 3 + q);
          V = xb(V, C = xb(C, C + r, n), n);
          S = xb(S, G = xb(G, G + w, n), n);
          g = db(g, Math.atan2(V - h, S - p) / Ka - 180, wb(3));
          ob(T).multiplySelf(a).translateSelf(h = V, 0, p = S).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
          1.6 > (lb(), gb(Ua - hb, Va - ib, Wa - jb))
            && (J.i = 1,
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
        J.i
          && ob(k[24].m).translateSelf(
            t % 4 * 1.2 - 1.7 + Math.sin(d + t) / 7,
            -2,
            1.7 * (t / 4 | 0) - 5.5 + Za(t % 4 - 2) + Math.cos(d / 1.5 + t) / 6,
          );
      },
    };
    let H = b[0], [C, G] = H, [V, S] = H;
    const T = k.at(-1).m, t = Ma.length;
    Ma.push(J);
  },
  Nb = ({ x: a, y: b, z: g }, h) => a * h.x + b * h.y + g * h.z,
  Sb = a => {
    let b, g = 0, h = 0, p = 0, n = a.at(-1);
    for (b of a) {
      g += (n.y - b.y) * (n.z + b.z), h += (n.z - b.z) * (n.x + b.x), p += (n.x - b.x) * (n.y + b.y), n = b;
    }
    return b = gb(g, h, p), g /= b, h /= b, p /= b, { x: g, y: h, z: p, w: g * n.x + h * n.y + p * n.z };
  },
  Tb = (a, b) => {
    var g, h, p, n = b.B;
    for (var w = 0; n.length > w; ++w) {
      if (-0.00008 > (g = Nb(a, n[w]) - a.w) ? p = b : 8e-5 < g && (h = b), p && h) {
        h = [];
        p = [];
        n = b.B;
        w = b.v;
        let B = n.at(-1), f = Nb(a, B) - a.w;
        for (const r of n) {
          g = Nb(a, r) - a.w,
            8e-5 > f && p.push(B),
            -0.00008 < f && h.push(B),
            (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g)
            && (f /= g - f,
              B = { x: B.x + (B.x - r.x) * f, y: B.y + (B.y - r.y) * f, z: B.z + (B.z - r.z) * f },
              h.push(B),
              p.push(B)),
            B = r,
            f = g;
        }
        return {
          l: 2 < h.length && { B: pb(h, n.u, n.C), v: w, A: b },
          j: 2 < p.length && { B: pb(p, n.u, n.C), v: w, A: b },
        };
      }
    }
    return { l: h, j: p };
  },
  Ub = (a, b, g = Sb(b.B)) => {
    let h, p;
    return a
      ? ({ l: h, j: p } = Tb(a, b), h || p || a.o.push(b), h && (a.l = Ub(a.l, h, g)), p && (a.j = Ub(a.j, p, g)))
      : a = { x: g.x, y: g.y, z: g.z, w: g.w, o: [b], l: 0, j: 0 },
      a;
  },
  Vb = (a, b, g) => {
    const h = [],
      p = (n, w) => {
        let { l: B, j: f } = Tb(n, w);
        B || f || (0 < g * Nb(n, b) ? B = w : f = w);
        B && (n.l ? p(n.l, B) : h.push(B));
        f && n.j && p(n.j, f);
      };
    for (const n of b.o) {
      p(a, n);
    }
    return h;
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
    for (const h of b.o) {
      h.v = !h.v;
    }
  }),
    a),
  Yb = a => a.length ? a.reduce((b, g) => Ub(b, { B: g, v: 0, A: 0 }), 0) : a,
  Zb = (...a) =>
    a.reduce((b, g) => {
      const h = [];
      if (b = Yb(b), g) {
        g = Yb(g);
        Wb(b, p => p.o = Vb(g, p, 1));
        Wb(g, p => h.push([p, Vb(b, p, -1)]));
        for (let [p, n] of h) {
          for (const w of n) {
            Ub(b, w, p);
          }
        }
      }
      return b;
    }),
  X = (a, ...b) => {
    const g = n => {
        let w;
        return n.A && ((w = h.get(n.A)) ? (p.delete(w), n = g(n.A)) : h.set(n.A, n)), n;
      },
      h = new Map(),
      p = new Map();
    return a = Xb(Zb(Xb(Yb(a)), ...b)),
      Wb(a, n => {
        for (const w of n.o) {
          p.set(g(w), w.v);
        }
      }),
      Array.from(p, ([{ B: n }, w]) => {
        const B = n.map(({ x: f, y: r, z: J }) => ({ x: f, y: r, z: J }));
        return pb(w ? B.reverse() : B, n.u, n.C);
      });
  },
  Y = (a, b = 0, g = 0) => {
    const h = k[++qa].m;
    return ob(y, h), h.m41 = a, h.m42 = b, h.m43 = g, h;
  },
  ac = () => {
    let a, b, g, h, p, n, w, B, f, r, J, H, C, G = 0, V = 0, S = 0, T = 0, t = 1, x = 2, z = 15;
    const A = () => ob((x ? e[Ia] : k[33 !== G ? G : 0]).m),
      L = u => {
        1 < x ? (ob(e[Ia].m).multiplySelf(e[Ia].G), lb(0, 0.9 < Ia + oa ? 15 : 1, -2.4)) : (A(), lb(V, S, T));
        u && (p = (hb - Ua) / ya, n = (jb - Wa) / ya);
        Ua = hb;
        Va = ib;
        Wa = jb;
      },
      F = () => {
        var u = 0, v = 0, D = 0, K = 0, R = 0, O = 0, P = -1;
        for (var ba = 0; 36 > ba; ++ba) {
          var Oa = 512 * ba;
          for (var ja = 96; 416 > ja; ja += 4) {
            for (var ka = 0; 2 > ka; ++ka) {
              var ca = $b[Oa + ja + ka];
              const ra = $b[Oa + ja + ka + 2];
              ca > K && (K = ca);
              ca + ra && (0 > P || P === ba) && (P = ba, ra === r ? ++u : v && v !== ra || (v = ra, ++D));
            }
          }
        }
        r = 0 > P ? 0 : D > 2 * u ? v : r;
        for (u = 36; 128 > u; ++u) {
          ba =
            P =
            D =
            v =
              0;
          Oa = 512 * u;
          for (ja = 0; 128 > ja; ++ja) {
            ka = Oa + 4 * ja,
              ca = $b[ka],
              64 > ja ? ca > v && (v = ca) : ca > D && (D = ca),
              (ca = $b[2 + ka]) > P && (P = ca),
              ca = $b[1 + ka],
              64 < ja ? ca > v && (v = ca) : ca > D && (D = ca),
              (ca = $b[3 + ka]) > ba && (ba = ca);
          }
          (D -= v) * D > R * R && (R = D);
          (ba -= P) * ba > O * O && (O = ba);
        }
        R *= 0.7;
        B = l(1 - 0.01 * ab(Za(R), Za(O)), 0.3);
        R /= 255;
        K /= 255;
        O /= 255;
        A().invertSelf();
        lb(R, K, O, 0);
        V += hb;
        S += K;
        T += jb;
        L();
      },
      q = (u, v, D, K) => eb(u, v, t || (l(Za(v - u) ** 0.5 - D) + 1 / 7) * wb(1.5 * K));
    sa = () => {
      L(r);
      Z.r9r(0, 0, 128, 128, 6408, 5121, $b);
      NO_INLINE(F)();
      !x && r === G || (G = r, A().invertSelf(), lb(Ua, Va, Wa), V = hb, S = ib, T = jb, x = x && (r ? 0 : 1));
      (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (x = 2);
      1 === r && (e[14].i = -15 > Ua && 0 > Wa ? 1 : 0);
      f = eb(xb(f, Va, 2), Va, x || 8 * Za(f - Va));
      J = q(J, Ua, 0.5, 1);
      H = q(H, f, 2, 1);
      C = q(C, Wa, 0.5, 1);
      h = xb(h, ta * (32 < r && 37 > r), 2);
      ia
        ? (u = x + wb(18), Fa = eb(Fa, Ua, u), Ha = eb(Ha, Wa, u), Ga = eb(Ga, 1.6 + f, u), Ya = cb(Ya))
        : (Fa = q(Fa, J, 1, 2 + h),
          Ha = q(Ha, C + -18 + 5 * h, 1, 2 + h),
          Ga = q(Ga, ab(H + l((-60 - Wa) / 8, 0, 20) + 13 + 9 * h, 6), 4, 2),
          u = $a(-6, -Za(C - Ha)),
          v = J - Fa,
          Ya = db(Ya, 90 - cb(Math.atan2(u, v) / Ka), t + wb(10)),
          Xa = db(Xa, 90 - Math.atan2(gb(u, v), Ga - H) / Ka, t + wb(10)));
      Xa = l(Xa, -87, 87);
      t = 0;
      var u = l(Ba, -1), v = l(Ca, -1), D = bb(gb(u, v) ** 0.5, 0.1);
      let K = Math.atan2(u, v);
      D && (a = 90 - K / Ka);
      b = db(b, a, wb(8));
      g = xb(g, D, 10);
      Y(Ua, 0.06 * B * g * Math.cos(18.2 * d) + f, Wa).rotateSelf(0, b);
      for (var R = 0; 2 > R; ++R) {
        const O = 9.1 * d - Math.PI * R;
        ob(k[37].m, Y(0)).translateSelf(0, g * l(0.45 * Math.sin(O - Math.PI / 2))).rotateSelf(
          g * Math.sin(O) * 0.25 / Ka,
          0,
        );
      }
      z = r ? 5 : xb(z, x ? 13 : 19 - 2 * $a(0, Va + 10), 2.2);
      p = r || x ? 0 : xb(p, 0, 3);
      n = r || x ? 0 : xb(n, 0, 3);
      u = (w = x ? 0 : xb(w, r ? 7 * l(2 * D) * B : 0, r ? 9 : 1)) * D * Za(u) * Math.sin(K);
      v = w * D * Za(v) * Math.cos(K);
      K = ia ? (180 + Ya) * Ka : 0;
      D = ya * (p + (v * Math.cos(K) - Math.sin(K) * u));
      R = ya * -z;
      u = ya * (n + (v * Math.sin(K) + Math.cos(K) * u));
      A().invertSelf();
      lb(D, R, u, 0);
      V += hb;
      S += R;
      T += jb;
      L();
    };
  },
  bc = (a, b) => {
    da
      ? 1100 < hC.width && Z.d97(4, k[39].D - k[37].s, 5123, 2 * k[37].s)
      : (Z.das(4, k[b].D - k[b].s, 5123, 2 * k[b].s, Ma.length),
        Z.das(4, k[42].D - k[42].s, 5123, 2 * k[42].s, e.length),
        Z.d97(4, (a ? k[39].D : k[37].s) - 3, 5123, 6));
  },
  ic = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  jc = (a, b) => {
    const g = {}, h = Z.c1h();
    return Z.abz(h, a), Z.abz(h, ic(b, 35632)), Z.l8l(h), p => p ? g[p] || (g[p] = Z.gan(h, p)) : Z.u7y(h);
  },
  m = new DOMMatrix(),
  y = new DOMMatrix(),
  mb = new Float32Array(16),
  kc = new Float32Array(808),
  $b = new Uint8Array(65536),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, h) => (b * h + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
zb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const p = t => {
            requestAnimationFrame(p);
            var x = (t - (aa || t)) / 1e3;
            if (xa += x, d += ya = da ? 0 : $a(0.055, x), aa = t, 0 < ya) {
              x = A =>
                A.translateSelf(Math.sin(d + 2) / 5, Math.sin(0.8 * d) / 4).rotateSelf(
                  2 * Math.sin(d),
                  Math.sin(0.7 * d),
                  Math.sin(0.9 * d),
                );
              na();
              Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
              Ea && (ia = 0);
              oa = Ea ? xb(oa, -9, 0.015) : xb(oa, l(d / 3), 1);
              pa = xb(pa, e[13].h, 0.2 + 0.3 * Za(2 * e[13].h - 1));
              t =
                (qa = 1,
                  ta = fb(e[15].g, e[8].g),
                  wa = eb(xb(wa, 0, 1), cb(wa + 60 * ya), e[2].g - e[3].h),
                  ua = eb(xb(ua, 0, 5), cb(ua + 56 * ya), ta),
                  va = eb(xb(va, 0, 4), cb(va + 48 * ya), ta),
                  Y(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g)).translateSelf(0),
                  $a(1 - e[11].h, e[10].h));
              var z =
                (Y(t * Math.sin(0.6 * d + 1.2) * 12, 0, 35),
                  Y(t * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55),
                  Y(t * Math.sin(0.6 * d) * 12, 0, 45),
                  Y(9.8 * (1 - t)),
                  t = l(1 - 5 * t) * fb(e[11].g, e[2].g),
                  Y(0, t * Math.sin(1.35 * d) * 4),
                  Y(0, 0, t * Math.sin(0.9 * d) * 8),
                  Y(0, -6.5 * e[11].h),
                  t = fb(e[4].h, e[3].h),
                  Y(0, t * Math.sin(d) * 5 + 3.5 * (1 - ab(e[3].g, e[4].g))),
                  Y(0, t * Math.sin(d + 3) * 6, t * Math.sin(0.6 * d + 1) * 6),
                  Y(0, -7.3 * e[4].h),
                  t = fb(e[6].g, e[7].g),
                  Y(
                    0,
                    -2,
                    10
                      - 8.5 * t * Za(Math.sin(1.1 * d)),
                  ),
                  Y(0, -2, 10 - 8.5 * t * Za(Math.sin(2.1 * d))),
                  Y(0, -2, 10 - 8.5 * ab(t * Za(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - t))),
                  fb(e[5].h, e[15].h));
              for (t = 0; 4 > t; t++) {
                Y(
                  (2 < t ? 2 * (1 - z) + z : 0) - 100,
                  z * Math.sin(1.3 * d + 1.7 * t) * (3 + t / 3) + 0.7,
                  115 - 7 * (1 - e[5].h) * (1 - e[15].h) * (1 & t ? -1 : 1)
                    + ab(0.05, z) * Math.cos(1.3 * d + 7 * t) * (4 - 2 * (1 - t / 3)),
                );
              }
              t = fb(e[8].h, e[9].h);
              for (let A = 0; 3 > A; ++A) {
                Y(0, t * Math.sin(1.5 * d + 1.5 * A) * 4 + (A ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)));
              }
              t = fb(fb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2);
              Y(0, 16 * t, 95 + 8.5 * l(2 * t - 1));
              x(Y(-12, 4.2, 40 * oa - 66));
              x(Y(-123, 1.4, 55 - 65 * pa));
              Y(0, 0, -15).scaleSelf(1, l(1.22 - e[0].g), 1);
              Y(0, 0, 15).scaleSelf(1, l(1.22 - e[10].g), 1);
              Y(-99.7, -1.9, 63.5).scaleSelf(1, l(1.1 - e[3].g), 1);
              Y(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[15].g);
              Y(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + wa, 0);
              Y(2.5 * (1 - z) - 139.7, -3 * (1 - e[5].g) - z * Math.sin(0.8 * d) - 1.8, 93.5).rotateSelf(
                Math.cos(1.3 * d) * (3 + 3 * z),
                0,
              );
              Y(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
              Y(-81, 0.6, 106).rotateSelf(0, 40 + ua);
              Y(-65.8, 0.8, 106).rotateSelf(0, va);
              Y(-50.7, 0.8, 106).rotateSelf(0, 180 - va);
              Y(-50.7, 0.8, 91).rotateSelf(0, 270 + va);
              for (x = 0; 13 > x; ++x) {
                Ma[x].F(), nb(m, kc, 16 + x);
              }
              for (x = 0; 16 > x; ++x) {
                e[x].F(), nb(m, kc, 29 + x);
              }
              sa();
              for (let A, L = 2, F = 720; 23 >= L; ++L, ++F) {
                A = k[L].m, kc[F++] = A.m41, kc[F++] = A.m42, kc[F++] = A.m43;
              }
              for (let A = 24, L = 0; 39 >= A; ++A, L++) {
                nb(k[A].m, kc, L);
              }
              H();
              Z.u3a(H("j"), kc);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              Z.uae(H("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa)));
              bc(0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(H("b"), !1, nb(ob().translateSelf(-Ua, -Va, -Wa - 0.3)));
              bc(0, 40);
              ha = 0;
            }
            x = Fa;
            z = Ga;
            t = Ha;
            da
              ? (ob(la).invertSelf(),
                lb(3.6, 3.5),
                x = hb,
                z = ib,
                t = 5,
                ob(y, w).rotateSelf(-20, 0).invertSelf().translateSelf(-x, -z, -t).rotateSelf(0, 99),
                ob().rotateSelf(0, 40 * Math.sin(xa) - 80, -8),
                nb(m, kc, 35),
                nb(m, kc, 36),
                nb(m, kc, 37))
              : ob(y, w).rotateSelf(-Xa, -Ya).invertSelf().translateSelf(-x, -z, -t);
            C();
            Z.ubu(C("k"), x, z, t);
            Z.u3a(C("j"), kc);
            Z.uae(C("a"), !1, nb(y));
            Z.ubh(C("g"), 3);
            Z.ubh(C("h"), 3);
            Z.b6o(36160, V);
            Z.v5y(0, 0, 2048, 2048);
            G[0](60.17);
            G[1](138.6);
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(C("b"), !1, nb(w));
            Z.uae(C("a"), !1, nb(la));
            Z.uae(C("i"), !1, B);
            Z.ubh(C("g"), 0);
            Z.ubh(C("h"), 1);
            bc(!ia, 41);
            J();
            Z.uae(J("b"), !1, nb(ob(w).invertSelf()));
            Z.ubu(J("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, xa);
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, T);
            Z.v5y(0, 0, 128, 128);
            Z.f1s();
          },
          n = new DOMMatrix(),
          w = new DOMMatrix(),
          B = new Float32Array(32),
          f = g,
          r = I(8, () => ({})),
          J = jc(
            ic("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
          );
        var h = ic(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[202];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<24.){vec4 s=j[i+178];m.xyz+=(r[3].xyz=s.xyz);}else if(f.w!=1.)i=(i<1?gl_InstanceID-i:i-24)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l=mix(l,vec4(.7,1,.2,0),l.w==0.&&f.w==-29.?r[3][3]:0.),r[3][3]=1.,m=r*m;gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
        );
        const H = jc(
            h,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          C = jc(
            h,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          G = I(2, t => {
            const x = Z.c25();
            return Z.a4v(33984 + t),
              Z.b9j(3553, x),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              z => {
                let A = 0, L = 0, F = 0, q = 1 / 0, u = 1 / 0, v = 1 / 0, D = -1 / 0, K = -1 / 0, R = -1 / 0;
                Z.fas(36160, 36096, 3553, x, 0);
                Z.c4s(256);
                ob().scale3dSelf(z).multiplySelf(ob(ma[t], n).multiplySelf(w).invertSelf());
                for (let O = 0; 8 > O; ++O) {
                  const P = r[O];
                  lb(4 & O ? 1 : -1, 2 & O ? 1 : -1, 1 & O ? 1 : -1);
                  A -= P.x = (0 | hb) / (z * kb);
                  L -= P.y = (0 | ib) / (z * kb);
                  F -= P.z = (0 | jb) / (z * kb);
                }
                ob().rotateSelf(298, 139).translateSelf(A / 8, L / 8, F / 8);
                for (z = 0; 8 > z; ++z) {
                  const { x: O, y: P, z: ba } = r[z];
                  lb(O, P, ba);
                  q = $a(q, hb);
                  D = ab(D, hb);
                  u = $a(u, ib);
                  K = ab(K, ib);
                  v = $a(v, jb);
                  R = ab(R, jb);
                }
                z = 10 + t;
                v *= 0 > v ? z : 1 / z;
                R *= 0 < R ? z : 1 / z;
                Z.uae(
                  C("b"),
                  !1,
                  nb(
                    ob(y, n).scaleSelf(2 / (D - q), 2 / (K - u), 2 / (v - R)).translateSelf(
                      (D + q) / -2,
                      (K + u) / -2,
                      (v + R) / 2,
                    ).multiplySelf(m),
                  ),
                );
                bc(!ia, 41);
                B.set(mb, 16 * t);
              };
          }),
          V = Z.c5w();
        h = Z.c25();
        const S = Z.c3z(), T = Z.c5w();
        H();
        Z.uae(H("a"), !1, nb(yb(1e-4, 2, 1.2, 0.4)));
        C();
        Z.ubh(C("q"), 2);
        J();
        Z.ubh(J("q"), 2);
        Z.b6o(36160, V);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, T);
        Z.bb1(36161, S);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, S);
        Z.a4v(33986);
        Z.b9j(3553, h);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, h, 0);
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
        requestAnimationFrame(p);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = La;
  NO_INLINE(Gb)(() => {
    zb(() => {
      let f = 0;
      const r = [],
        J = [],
        H = [],
        C = [],
        G = new Int32Array(8),
        V = new Map(),
        S = new Int32Array(G.buffer, 0, 5),
        T = new Float32Array(G.buffer);
      k.map((t, x) => {
        let z;
        const A = L => {
          let { x: F, y: q, z: u } = z[L], v = (T[0] = F, T[1] = q, T[2] = u, L = "" + (z.C ? S : G), V.get(L));
          return void 0 !== v
            ? (F = 3 * v, C[F] = (C[F++] + G[5]) / 2, C[F] = (C[F++] + G[6]) / 2, C[F] = (C[F] + G[7]) / 2)
            : (V.set(L, v = V.size), J.push(F, q, u, T[3]), H.push(G[4]), C.push(G[5], G[6], G[7])),
            v;
        };
        for (z of (T[3] = 41 === x || 40 === x ? -16 : 42 === x ? -29 : x, t.o)) {
          const { x: L, y: F, z: q } = Sb(z);
          G[4] = 0 | z.u;
          G[5] = 32767 * L;
          G[6] = 32767 * F;
          G[7] = 32767 * q;
          for (let u = 2, v = A(0), D = A(1); z.length > u; ++u) {
            r.push(v, D, D = A(u));
          }
        }
        t.o = 0;
        t.s = f;
        t.D = f = r.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(J), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(C), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(H), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(r), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [t, x, z, A, L] = JSON.parse(localStorage.spdnt22);
        e.map((F, q) => F.g = F.h = F.i = q ? 0 | t[q] : 0);
        Ma.map((F, q) => F.i = 0 | x[q]);
        Ia = z;
        d = A;
        pa = L;
      } catch {
      }
      Jb();
      oa = 13 === Ia ? 0 : l(Da);
      zb(b);
    });
    const h = f => E(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.001 - f, 1, 1.001 - f),
      p = f =>
        X(
          M(N(), E(0, -f / 2).scale(6, f - 1, 2.2)),
          M(N(), E(0, -f / 2 - 6).scale(4, f - 3, 4)),
          M(N(32, 1), E(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      n = I(11, f => sb(qb(rb(19), h(f), Q(1, 1, 0.8, 0.2)).reverse(), qb(rb(19), h(f + 1), Q(1, 1, 0.8, 0.2)), 1))
        .flat(),
      w = [
        ...M(N(), E(0, -3).scale(11, 1.4, 3), Q(0.9, 0.9, 0.9, 0.2)),
        ...M(N(), E(0, -2.2).scale(7.7, 0.5, 4), Q(0.5, 0.5, 0.5, 0.2)),
        ...I(12, f => M(N(), y.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), Q(0.6, 0.5, 0.4, 0.3))).flat(),
        ...X(
          M(N(6), y.rotate(90).scale(6, 8, 6), Q(0.3, 0.6, 0.6, 0.3)),
          M(N(4, 0, 0.01), E(0, 6).scale(12, 2, 0.75).rotate(0, 45), Q(0.3, 0.6, 0.6, 0.3)),
          M(N(6), y.rotate(90).scale(5, 12, 5), Q(0.3, 0.6, 0.6, 0.3)),
          ...[-5, 0, 5].map(f => M(N(5), E(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Q(0.3, 0.6, 0.6, 0.3))),
        ),
      ],
      B = X(
        M(N(), E(0, -0.5, 1).scale(1.15, 1.2, 6.5), Q(0.25, 0.25, 0.35, 0.3)),
        X(
          M(N(3), E(0, 0, -5.5).scale(3, 2), Q(0.6, 0.3, 0.4, 0.3)),
          M(N(), E(0, 0, -3.65).scale(2.5, 3), Q(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => M(N(), E(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), Q(0.7, 0.2, 0, 0.3))),
      );
    U();
    c([Na.slice(1)], E(-2).scale3d(3).rotate(90, 0));
    U();
    Lb(E(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, r) => {
      c(N(), E(0, 0, r ? 22 : -23).scale(3, 1, 8), Q(0.9, 0.9, 0.9, 0.2));
      c(N(), E(0, 6.3, f).scale(4, 0.3, 1), Q(0.3, 0.3, 0.3, 0.4));
      c(N(), E(0, 1, f).scale(3, 0.2, 0.35), Q(0.5, 0.5, 0.5, 0.3));
      I(5, J => c(n, E(18.5 * (r - 0.5), 0, 4.8 * J - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2)));
    });
    c(N(), E(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Q(0.8, 0.8, 0.8, 0.2));
    c(N(), E(3, 1.5, -20).scale(0.5, 2, 5), Q(0.7, 0.7, 0.7, 0.2));
    c(N(), E(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Q(0.75, 0.75, 0.75, 0.2));
    c(N(5), E(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Q(0.6, 0.3, 0.3, 0.4));
    c(X(
      Zb(
        M(N(6, 0, 0, 0.3), E(8, -3, -4).scale(13, 1, 13), Q(0.7, 0.7, 0.7, 0.2)),
        X(
          M(N(6, 0, 0, 0.3), E(0, -0.92).scale(13, 2, 13), Q(0.8, 0.8, 0.8, 0.2)),
          M(N(), y.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), Q(0.5, 0.5, 0.5, 0.5)),
        ),
        M(
          N(),
          y.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          Q(0.8, 0.2, 0.2, 0.5),
        ),
        M(N(6), E(0, -8).scale(9, 8, 7), Q(0.2, 0.1, 0.4, 0.5)),
      ),
      M(N(5), y.scale(5, 30, 5), Q(0.4, 0.2, 0.6, 0.5)),
      M(N(5, 0, 1.5), E(0, 1).scale(4.5, 0.3, 4.5), Q(0.7, 0.5, 0.9, 0.2)),
      M(N(6), E(15, -1.5, 4).scale(3.5, 1, 3.5), Q(0.5, 0.5, 0.5, 0.5)),
    ));
    Lb(E(15, -2, 4));
    c(N(), E(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2));
    Lb(E(-55, -1.1, 46).rotate(0, 90));
    c(N(7), E(-57, -2.6, 46).scale(4, 1, 4), Q(0.8, 0.8, 0.8, 0.3));
    c(N(6), E(-61.3, -2.4, 49).scale(3, 1, 5), Q(0.4, 0.6, 0.6, 0.3));
    c(w, E(-53, 0, 55));
    c(N(), E(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), Q(0.7, 0.7, 0.7, 0.2));
    c(N(3, 0, -0.5), E(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Q(0.8, 0.8, 0.8, 0.2));
    c(X(
      Zb(
        M(N(), E(-100, -2.4, 55).scale(8, 0.9, 8), Q(0.8, 0.8, 0.8, 0.2)),
        M(N(), E(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Q(0.8, 0.8, 0.8, 0.2)),
        M(N(), E(-100, -2.6, 70).scale(3, 1.1, 7), Q(0.8, 0.8, 0.8, 0.2)),
        M(N(), E(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), Q(0.8, 0.8, 0.8, 0.2)),
        M(N(6), E(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Q(0.6, 0.6, 0.6, 0.3)),
        M(N(), E(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Q(0.8, 0.8, 0.8, 0.2)),
        M(N(), E(-100, 0.42, 92).scale(3, 1.1, 4.1), Q(0.8, 0.8, 0.8, 0.2)),
      ),
      M(N(8), E(-100, -1, 55).scale(7, 0.9, 7), Q(0.3, 0.3, 0.3, 0.4)),
      M(N(8), E(-100, -2, 55).scale(4, 0.3, 4), Q(0.4, 0.4, 0.4, 0.5)),
      M(N(8, 0, -3.1), E(-100, -3, 55).scale(0.4, 1, 0.4), Q(0.4, 0.4, 0.4, 0.5)),
    ));
    c(X(
      M(N(), E(-100, 1, 63).scale(7.5, 4), Q(0.5, 0.5, 0.5, 0.4)),
      M(N(), E(-100, 0, 70).scale(2, 2, 10), Q(0.5, 0.5, 0.5, 0.4)),
      M(N(20, 1), E(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Q(0.5, 0.5, 0.5, 0.4)),
    ));
    Na.map(({ x: f, z: r }) => {
      c(N(6), E(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), Q(0.6, 0.3, 0.3, 0.4));
      c(N(6), E(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), Q(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(J => c(N(6), E(7 * f - 100, J, 7 * r + 55).scale(1.3, 0.5, 1.3), Q(0.4, 0.2, 0.2, 0.8)));
      c(N(14, 1), E(9 * f - 38.9, -7.3, 11 * r + 17).scale(1, 4), Q(0.25, 0.25, 0.25, 1));
      [1.5, 8].map(J =>
        c(N(17, 1), E(9 * f - 38.9, J - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), Q(0.6, 0.6, 0.6, 0.3))
      );
    });
    I(7, f => {
      c(
        N((23 * f + 1) % 5 + 5, 0, 0.5),
        E(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
        Q(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    c(N(), E(-87, -9.5, 24).scale(7, 1, 3), Q(0.4, 0.5, 0.6, 0.4));
    c(N(4), E(-86, -9.2, 27).scale(5, 1, 5), Q(0.5, 0.6, 0.7, 0.3));
    c(N(12, 1), E(-86, -9, 31).scale(1.5, 1, 1.5), Q(0.3, 0.3, 0.4, 0.1));
    Lb(E(-86, -7.5, 31));
    c(
      X(
        Zb(
          M(N(5), E(0, 0, -7).scale(2, 1.2, 2), Q(0.2, 0.4, 0.7, 0.3)),
          M(N(5), y.scale(9, 1.2, 9), Q(0, 0.2, 0.3, 0.5)),
          M(N(), y.scale(11, 1, 13), Q(0.3, 0.4, 0.6, 0.3)),
        ),
        M(N(5), y.scale(5.4, 5, 5.4), Q(0, 0.2, 0.3, 0.5)),
      ),
      E(-38.9, -11.3, 17),
    );
    Lb(E(-38.9, -9.6, 10));
    c(
      X(
        Zb(
          M(N(6), E(0, 0, -18).scale(15, 1.2, 15), Q(0.7, 0.7, 0.7, 0.3)),
          M(N(), y.scale(4, 1.2, 6), Q(0.45, 0.4, 0.6, 0.3)),
        ),
        ...I(6, f =>
          I(6, r =>
            M(
              N(6),
              E(4.6 * r - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * r) - 32).scale(2, 5, 2),
              Q(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      E(-38.9, -11.3, -1),
    );
    c(N(5), E(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), Q(0.8, 0.1, 0.25, 0.4));
    Lb(E(-84, -0.7, 85).rotate(0, 45));
    I(3, f => {
      c(p(16), E(12 * f - 109, -9, -12), Q(0.6, 0.6, 0.6, 0.3));
      c(p(16), E(-77, -9, -12 * f - 20).rotate(0, 90), Q(0.6, 0.6, 0.6, 0.3));
    });
    c(
      X(
        Zb(M(N(), E(26.5, -1.6, 10).scale(20, 2.08, 3)), M(N(), E(26.5, -0.5, 10).scale(19, 2, 0.5))),
        ...I(4, f => M(N(), E(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
        ...I(3, f => M(N(), E(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
      ),
      E(-123, 0.2, -12),
      Q(0.5, 0.5, 0.6, 0.2),
    );
    Lb(E(-116, -1.4, -18).rotate(0, 180));
    c(N(6), E(-116, -2.6, -16.5).scale(3.2, 0.8, 3), Q(0.6, 0.5, 0.7, 0.2));
    c(N(), E(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Q(0.8, 0.8, 0.8, 0.2));
    c(N(), E(-115.5, -17, -12).scale(0.5, 15, 2.2), Q(0.6, 0.6, 0.6, 0.3));
    c(N(8), E(-114, -17, -2).scale(2, 15, 2), Q(0.6, 0.6, 0.6, 0.3));
    c(N(8), E(-79, -17, -2).scale(2, 15, 2), Q(1, 1, 1, 0.3));
    c(N(), E(-77, -17, -50.5).scale(2.2, 15, 0.5), Q(0.6, 0.6, 0.6, 0.3));
    c(X(
      M(N(12), E(-77, -14.5, -12).scale(4, 17.5, 4), Q(0.7, 0.7, 0.7, 0.2)),
      M(N(12), E(-77, 3.1, -12).scale(3, 5, 3), Q(0.4, 0.5, 0.6, 0.2)),
      M(N(), E(-79, 0.1, -12).scale(3.5, 2, 1.3), Q(0.4, 0.5, 0.6, 0.2)),
      M(N(), E(-77, 0.1, -14).scale(1.5, 2, 2), Q(0.4, 0.5, 0.6, 0.2)),
    ));
    c(N(), E(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), Q(0.6, 0.6, 0.6, 0.3));
    c(N(9), E(-98, -18.4, -40).scale(2.5, 13.5, 2.5), Q(0.5, 0.5, 0.5, 0.3));
    c(X(
      M(N(), E(-93, -5.8, -40).scale(9, 1, 5), Q(0.8, 0.8, 0.8, 0.1)),
      M(N(9), E(-98, -5.8, -40).scale(3, 8, 3), Q(0.7, 0.7, 0.7, 0.2)),
    ));
    Lb(E(-98, -4.4, -40).rotate(0, 90));
    c(X(
      Zb(
        M(N(6, 0, 0, 0.6), E(-100, 0.7, 105.5).scale(8, 1, 11), Q(0.7, 0.7, 0.7, 0.2)),
        M(N(), E(-101.5, 0.7, 93.5).scale(10.5, 1, 2), Q(0.7, 0.7, 0.7, 0.2)),
      ),
      M(N(5), E(-100, 0.7, 113).scale(4, 3, 4), Q(0.7, 0.7, 0.7, 0.2)),
    ));
    [-1, 1].map(f => {
      [7.2, 1.5].map(r => c(N(15, 1), E(-7.5 * f - 100, r + 0.7, 96).scale(1.1, 0.5, 1.1), Q(0.5, 0.24, 0.2, 0.4)));
      c(n, E(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      c(N(12, 1), E(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), Q(0.6, 0.24, 0.2, 0.5));
      c(
        X(
          M(N(), E(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), Q(0.5, 0.5, 0.5, 0.4)),
          M(N(), y.scale(3, 3, 10), Q(0.6, 0.24, 0.2, 0.5)),
          M(N(28, 1), E(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Q(0.6, 0.24, 0.2, 0.5)),
          M(N(5), E(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Q(0.6, 0.24, 0.2, 0.5)),
          M(N(5), E(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), Q(0.6, 0.24, 0.2, 0.5)),
        ),
        E(f - 100, 0.7, 97),
      );
    });
    c(X(
      M(N(), E(-82.07, 0.8, 106).scale(11, 0.9, 2.2), Q(0.7, 0.7, 0.7, 0.1)),
      M(N(45, 1), E(-81, 0.7, 106).scale3d(7.7), Q(0.7, 0.7, 0.7, 0.1)),
    ));
    c(N(), E(-58, 1, 106).scale(2, 0.65, 2), Q(0.7, 0.7, 0.7, 0.2));
    c(N(), E(-50.7, 1, 99).scale(2, 0.65, 1), Q(0.7, 0.7, 0.7, 0.2));
    c(N(), E(-42, 0.4, 91).scale(5, 1, 2.5), Q(0.7, 0.7, 0.7, 0.3));
    c(N(), E(-34.2, 0.4, 91).scale(3, 1, 3), Q(0.7, 0.7, 0.7, 0.3));
    c(N(5), E(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), Q(0.2, 0.5, 0.5, 0.6));
    Lb(E(-34, 2.7, 96).rotate(-12, 0));
    [-1, 1].map(f => c(n, E(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    I(
      3,
      f =>
        c(
          p(24.7 - 0.7 * (1 & f)),
          E(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
          1 & f ? Q(0.5, 0.5, 0.5, 0.3) : Q(0.35, 0.35, 0.35, 0.5),
        ),
    );
    c(X(
      M(N(6, 0, 0, 0.3), E(0, -0.92, 95).scale(14, 2, 14), Q(0.8, 0.8, 0.8, 0.2)),
      M(N(5), E(0, 0, 95).scale3d(6), Q(0.3, 0.3, 0.3, 0.5)),
    ));
    Lb(E(0, 1.7, 82).rotate(0, 180));
    c(N(5), E(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Q(0.5, 0.3, 0.3, 0.4));
    c(N(6), E(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Q(0.5, 0.6, 0.7, 0.3));
    c(N(), E(0, 16, 129).scale(1.5, 1, 2), Q(0.5, 0.6, 0.7, 0.3));
    c(N(7), E(0, 16.2, 133).scale(5, 1, 5), Q(0.4, 0.5, 0.6, 0.4));
    c(X(
      Zb(
        M(N(), E(0, 16, 110.5).scale(12, 1, 3), Q(0.5, 0.3, 0.3, 0.4)),
        M(N(), E(0, 16, 111).scale(3, 1, 3.8), Q(0.5, 0.3, 0.3, 0.4)),
      ),
      M(N(5), E(0, 16, 103.5).scale(5.5, 5, 5.5), Q(0.5, 0.3, 0.3, 0.4)),
    ));
    Mb(E(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Mb(E(0, 2.8), [5, 10, 3], [-5, 10, 3], ...rb(18).map(({ x: f, z: r }) => [7 * f, 10 * r, 4.5 - 2 * Za(f)]));
    Mb(E(0, 3, 95), ...rb(9).map(({ x: f, z: r }) => [9 * f, 9 * r, 4]));
    Mb(E(0, 19, 134), [0, 0, 3.5]);
    Mb(E(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Mb(E(-89, 0.2, 80), [0, 0, 6]);
    Mb(E(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Mb(E(-115, 0.2, -12), [0, 0, 3.5]);
    Mb(E(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    U();
    c(N(5), E(0, -0.2).scale(5, 1, 5), Q(0.6, 0.65, 0.7, 0.3));
    Lb(E(0, 1.2));
    I(2, () => {
      U();
      Na.map(({ x: f, z: r }) => {
        c(N(11, 1), E(4 * f, 4, 4 * r).scale(0.8, 3, 0.8), Q(0.5, 0.3, 0.7, 0.6));
        c(N(), E(4 * f, 7, 4 * r).scale(1, 0.3), Q(0.5, 0.5, 0.5, 0.3));
      });
      c(X(
        M(N(), y.scale(5, 1, 5), Q(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(f => M(N(25, 1), E(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), Q(0.8, 0.8, 0.8, 0.3))),
      ));
      c(N(), E(0, -3).scale(8, 2, 8), Q(0.4, 0.4, 0.4, 0.3));
    });
    U();
    c(X(
      Zb(
        M(N(), y.scale(1.5, 1, 5), Q(0.9, 0.9, 0.9, 0.2)),
        M(N(6), y.scale(4, 1, 5), Q(0.9, 0.9, 0.9, 0.2)),
        M(N(), E(0, -2).scale(2, 3.2, 1.9), Q(0.3, 0.8, 0.5, 0.5)),
        M(N(16, 1, 0, 4), y.scale(1, 1, 1.5).rotate(0, 90), Q(0.9, 0.9, 0.9, 0.2)),
      ),
      M(N(), y.scale(1.3, 10, 1.3), Q(0.2, 0.7, 0.4, 0.6)),
    ));
    Mb(E(0, 2.8), [0, 0, 4.5]);
    U();
    c(N(3), E(-23, -1.7, 55.8).scale(5, 0.7, 8.3), Q(0.3, 0.6, 0.6, 0.2));
    c(N(8), E(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Q(0.8, 0.8, 0.8, 0.2));
    c(N(), E(-23, -3, 55).scale(5.2, 1.7, 3), Q(0.5, 0.5, 0.5, 0.3));
    c(N(), E(-23, -2.2, 62).scale(3, 1, 4), Q(0.5, 0.5, 0.5, 0.3));
    Lb(E(-23, -0.5, 66.5));
    U();
    c(N(), E(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Q(0.7, 0.7, 0.7, 0.2));
    c(X(M(N(), y.scale(3, 1.4, 2.7)), M(N(), y.scale(1.2, 8, 1.2))), E(-33, -3, 55), Q(0.7, 0.7, 0.7, 0.2));
    U();
    c(X(
      M(N(), E(-27, -3, 55).scale(3, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2)),
      M(N(), E(-27, -3, 55).scale(1, 3), Q(0.9, 0.9, 0.9, 0.2)),
    ));
    c(N(), E(-39, -3, 55).scale(3, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2));
    U();
    c(N(6), E(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), Q(0.7, 0.7, 0.7, 0.4));
    U();
    [0, 12, 24].map(f =>
      c(N(), E(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), Q(0.2, 0.5, 0.6, 0.2))
    );
    U();
    [6, 18].map(f =>
      c(N(), E(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), Q(0.1, 0.4, 0.5, 0.2))
    );
    U();
    c(
      X(
        Zb(
          M(N(5), E(0, 2).scale(5, 7, 5).skewY(8), Q(0.2, 0.4, 0.5, 0.5)),
          M(N(5), E(0, 6).scale(1.1, 7, 1.1).skewY(-8), Q(0.25, 0.35, 0.5, 0.5)),
          M(N(5), E(0, 9).scale(0.6, 7, 0.6).skewY(8), Q(0.35, 0.3, 0.5, 0.5)),
        ),
        M(N(5), y.scale(4, 8, 4), Q(0.2, 0.4, 0.5, 0.5)),
        M(N(5), E(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Q(0.2, 0.4, 0.5, 0.5)),
      ),
      E(-38.9, -11.3, 17),
    );
    Mb(E(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({ x: f, z: r }) => [3 * f, 3 * r, 1.2]));
    U();
    I(2, f => c(B, E(9 * f - 110 + (1 & f), 1.9, -12)));
    U();
    I(2, f => c(B, E(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    U();
    I(3, f => c(B, E(9 * f - 106, 1.9, -12)));
    I(4, f => {
      U();
      c(
        N(6),
        E(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        Q(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [Q(0.1, 0.55, 0.45, 0.2), Q(0.2, 0.5, 0.5, 0.3), Q(0.3, 0.45, 0.55, 0.4)].map((f, r) => {
      U();
      c(N(), E(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
      2 === r && c(N(), E(-29.1, 0.4, 91).scale(2.1, 1, 3), Q(0.7, 0.7, 0.7, 0.3));
      1 === r && c(N(), E(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), Q(0.6, 0.6, 0.7, 0.3));
    });
    U();
    c(N(5), y.scale(5, 1.1, 5), Q(0.5, 0.3, 0.3, 0.4));
    c(N(5), y.scale(5.5, 0.9, 5.5), Q(0.25, 0.25, 0.25, 0.4));
    Lb(E(0, 1.5, -1).rotate(0, 180));
    I(2, () => {
      U();
      c(X(
        M(N(30, 1, 1.15, 1), E(0, -3).scale(3.5, 1, 3.5), Q(0.7, 0.4, 0.25, 0.7)),
        M(N(30, 1, 1.3, 1), E(0, -2.5).scale(2.6, 1, 3), Q(0.7, 0.4, 0.25, 0.2)),
        M(N(), E(4, -1.2).scale3d(2), Q(0.7, 0.4, 0.25, 0.3)),
      ));
      Lb(E(0, -3, 4));
    });
    I(4, () => {
      U();
      I(7, f => c(M(N(9, 1), E(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), Q(0.3, 0.3, 0.38))));
    });
    U();
    c(w);
    U();
    c(N(15, 1), E(-7.5).rotate(0, 90).scale(3, 2.3, 3), Q(0.4, 0.4, 0.4, 0.3));
    c(N(10), E(-7.5).rotate(0, 90).scale(2, 2.5, 2), Q(0.3, 0.8, 0.7, 0.3));
    c(N(5), E(-7.5).rotate(0, 90).scale(1, 3), Q(0.5, 0.5, 0.5, 0.5));
    Lb(E(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => c(n, y.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    Mb(E(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    c(X(M(N(10), y.scale(6, 2, 6), Q(0.1, 0.6, 0.5, 0.3)), M(N(10), y.scale(3.3, 6, 3.3), Q(0.1, 0.6, 0.5, 0.5))));
    U();
    c(N(3), E(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), Q(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      c(N(6), E(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), Q(0.7, 0.7, 0.7, 0.4));
      c(N(), E(0, 6.2, f + 95).scale(0.5, 11, 0.5), Q(0.5, 0.3, 0.3, 0.4));
    });
    U();
    c(X(
      M(N(45, 1), y.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)),
      M(N(), E(0, 0, -5.5).scale(1.5, 3, 2.7), Q(0.45, 0.45, 0.45, 0.2)),
    ));
    c(N(8), E(0, 2).scale(3, 1.5, 3).rotate(0, 22), Q(0.7, 0.7, 0.7, 0.1));
    c(N(5), E(0, 2).scale(1, 2), Q(0.3, 0.3, 0.3, 0.2));
    Mb(E(0, 3), ...rb(14).map(({ x: f, z: r }) => [5.6 * f, 5.6 * r, 2]));
    U();
    [-1, 1].map(f => c(n, y.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    c(X(M(N(28, 1), E(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)), M(N(), y.scale(9, 5, 2), Q(0.3, 0, 0, 0.3))));
    c(M(N(28, 1), y.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(M(N(5), E(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(
      M(N(28, 1), E(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)),
      M(N(), E(7).scale(9, 5, 2), Q(0.3, 0, 0, 0.3)),
      M(N(), E(0, 0, 7).scale(2, 5, 9), Q(0.3, 0, 0, 0.3)),
    ));
    c(M(N(28, 1), y.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(M(N(5), E(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(
      M(N(28, 1), E(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)),
      M(N(), E(7).scale(9, 5, 2), Q(0.3, 0, 0, 0.3)),
      M(N(), E(0, 0, -7).scale(2, 5, 9), Q(0.3, 0, 0, 0.3)),
    ));
    c(M(N(28, 1), y.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(M(N(5), E(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    U();
    c(vb(20), E(0, 1).scale3d(0.5), Q(1, 0.3, 0.4));
    c(vb(30), y.scale(0.65, 0.8, 0.55), Q(1, 0.3, 0.4));
    c(N(), E(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), Q(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      c(n, y.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), Q(1, 1, 0.8));
      c(
        M(X(N(15, 1), M(N(), E(0, 0, 1).scale(2, 2, 0.5))), y.rotate(-90, 0).scale(0.1, 0.05, 0.1), Q(0.3, 0.3, 0.3)),
        E(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map(f => {
      U();
      c(N(20, 1), E(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), Q(1, 0.3, 0.4));
    });
    U();
    c(N(6).slice(0, -1), y.scale(0.77, 1, 0.77), Q(1, 0.3, 0.5));
    U();
    c(
      vb(30, 24, (f, r, J) => {
        const H = r / 24, C = f * Math.PI * 2 / 30, G = Math.sin(H ** 0.6 * Math.PI / 2);
        f = H * H * Math.sin(f * Math.PI * 14 / 30) / 4;
        return 23 < r
          ? { x: J.C = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(C) * G,
            y: Math.cos(H * Math.PI) - H - f,
            z: Math.sin(C) * G + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      y.scale(0.7, 0.7, 0.7),
      Q(1, 1, 1),
    );
    [-1, 1].map(f => c(vb(12), E(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    U();
    c(N(6, 1), y.scale(0.12, 1.2, 0.12), Q(0.3, 0.3, 0.5, 0.1));
    c(N(10), E(0, 0.8).scale(0.2, 0.3, 0.2), Q(1, 0.5, 0.2));
    c(N(3), E(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), Q(0.2, 0.2, 0.2, 0.1));
  });
});
