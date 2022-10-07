let ba,
  ca,
  da,
  ea,
  ha,
  ka,
  la,
  ma,
  na,
  oa,
  pa,
  qa,
  sa,
  ta,
  ua,
  va,
  wa,
  c = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ia = 0,
  Ja = 0,
  Ka = 1;
const La = Math.PI / 180,
  Ma = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Na = [],
  d = [],
  Ra = [],
  Sa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ta = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ua = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 180;
const $a = NO_INLINE(a => 0 > a ? -a : a),
  ab = NO_INLINE((a, b) => a < b ? a : b),
  bb = NO_INLINE((a, b) => b < a ? a : b),
  cb = (a, b) => $a(a) > b ? a : 0,
  e = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  db = a => Math.atan2(Math.sin(a * La), Math.cos(a * La)) / La,
  eb = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * e(g) || 0,
  fb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0,
  gb = (a, b) => (a = e(a), fb(a, 1 - a, b)),
  hb = (a, b, g = 0) =>
    Math.sqrt(
      a * a + b * b
        + g * g,
    ),
  mb = (a = 0, b = 0, g = 0, k = 1) => {
    ib = h.m11 * a + h.m21 * b + h.m31 * g + h.m41 * k;
    jb = h.m12 * a + h.m22 * b + h.m32 * g + h.m42 * k;
    kb = h.m13 * a + h.m23 * b + h.m33 * g + h.m43 * k;
    lb = h.m14 * a + h.m24 * b + h.m34 * g + h.m44 * k;
  };
var ib, jb, kb, lb;
const ob = (
    a,
    b = nb,
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
  pb = (
    a = m,
    b = h,
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
  n = NO_INLINE((a, b, g) => m.translate(a, b, g)),
  qb = (a, b) => Array.from(Array(a), (g, k) => b(k)),
  rb = (a, b, g) => (a.C = g, a.u = b, a),
  ub = (a, b, g = a.u) => (pb(b), rb(a.map(({ x: k, y: q, z: l }) => (mb(k, q, l), { x: ib, y: jb, z: kb })), g, a.C)),
  x = (a, b, g) => a.map(k => ub(k, b, g)),
  vb = (a, b = 0) =>
    qb(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > $a(k) ? k : 0 > k ? k - b : k + b };
    }),
  wb = (a, b, g) =>
    a.map((k, q, { length: l }) => rb([k, b[l - q - 1], b[l - (q + 1) % l - 1], a[(q + 1) % l]], a.u, g)),
  E = (
    a,
    b,
    g = 0,
    k,
  ) => (a = a ? vb(a, k) : Sa,
    k = ub(a, n(0, 1).scale3d(0 < g ? g : 1)),
    a = ub(a, n(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...wb(a, k, b), k, a]),
  xb = (
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
      for (let l = 0; b > l; l++) {
        const w = rb([], 0, 1);
        k.push(w);
        w.push(g(q, l, w));
        l && w.push(g((q + 1) % a, l, w));
        b - 1 > l && w.push(g((q + 1) % a, l + 1 % b, w));
        w.push(g(q, l + 1 % b, w));
      }
    }
    return k;
  },
  yb = NO_INLINE(a => 1 - Math.exp(-Aa * a)),
  F = NO_INLINE((a, b, g) => fb(a, b, yb(g))),
  zb = (a, b) => {
    1 / 0 > Ka && (Ka = c + b, h4.innerHTML = a);
  },
  Ab = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        Ba = Na.reduce((a, b) => a + b.i, 0)
      ] + " / XIII";
  },
  Bb = () => {
    localStorage.DanteSP22 = JSON.stringify([d.map(a => a.i), Na.map(a => a.i), Da, c, ea]);
  },
  J = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  Cb = (a, b, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Db = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Eb = a => Math.sin(a * Math.PI * 2),
  Hb = a => 0.5 > a % 1 ? 1 : -1,
  Ib = a => a % 1 * 2 - 1,
  Jb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Kb = a => {
    let b = 0;
    const g = () => {
        let l = 0;
        const w = O => {
            let I, V, Ha, ia = 0, ja = 0;
            const aa = [],
              ra = new Int32Array(768 * O),
              fc = 2 ** (v - 9) / O,
              gc = Math.PI * 2 ** (t - 8) / O,
              Fb = D * O & -2;
            for (let sb = 0; 11 >= sb; ++sb) {
              for (
                let tb = 0, Qb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb];
                32 > tb;
                ++tb
              ) {
                const Rb = (32 * sb + tb) * O;
                for (var Oa = 0; 4 > Oa; ++Oa) {
                  if (I = 0, Qb && (I = y[Qb - 1].charCodeAt(tb + 32 * Oa) - 40, I += 0 < I ? 106 : 0), I) {
                    var fa;
                    if (!(fa = aa[I])) {
                      fa = I;
                      let X = void 0, xa = void 0;
                      var Sb = I;
                      let hc = 0, ic = 0;
                      const jc = 2 > b ? Ib : Eb, kc = 2 > b ? 1 > b ? Hb : Jb : Eb, Tb = new Int32Array(M + Q + T);
                      for (let Pa = 0, Gb = 0; M + Q + T > Pa; ++Pa, ++Gb) {
                        let Qa = 1;
                        M > Pa ? Qa = Pa / M : M + Q > Pa || (Qa = (1 - (Qa = (Pa - M - Q) / T)) * 3 ** (-p / 16 * Qa));
                        0 > Gb
                          || (Gb -= 4 * O,
                            xa = 0.00396 * 2 ** ((Sb + z - 256) / 12),
                            X = 0.00396 * 2 ** ((Sb + H - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Tb[Pa] = 80
                            * (jc(hc += xa * Qa ** (f / 32)) * B + kc(ic += X * Qa ** (G / 32)) * u
                              + (R ? (2 * Math.random() - 1) * R : 0))
                            * Qa | 0;
                      }
                      fa = aa[fa] = Tb;
                    }
                    for (let X = 0, xa = 2 * Rb; fa.length > X; ++X, xa += 2) {
                      ra[xa] += fa[X];
                    }
                  }
                }
                for (let X, xa = 0; O > xa; ++xa) {
                  Oa = 0;
                  fa = 2 * (Rb + xa);
                  var ya = (((X = ra[fa]) || Ha)
                    && (V = 0.00308 * A,
                      1 !== b && 4 !== b || (V *= Math.sin(fc * fa * Math.PI * 2) * K / 512 + 0.5),
                      V = 1.5 * Math.sin(V),
                      ia += V * ja,
                      ya = (1 - W / 255) * (X - ja) - ia,
                      ja += V * ya,
                      X = 4 === b ? ja : 3 === b ? ya : ia,
                      b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5),
                      X *= S / 32,
                      Ha = 1e-5 < X * X,
                      ya = Math.sin(gc * fa) * r / 512 + 0.5,
                      Oa = X * (1 - ya),
                      X *= ya),
                    fa < Fb || (Oa += ra[1 + fa - Fb] * C / 255, X += ra[fa - Fb] * C / 255),
                    l + fa >> 1);
                  k[ya] += (ra[fa] = Oa) / 65536;
                  q[ya] += (ra[++fa] = X) / 65536;
                }
              }
            }
            l += 768 * O;
          },
          y = Ta[b],
          [B, z, f, u, H, G, R, M, Q, P, p, v, A, W, S, r, t, C, D, K] = Ua[b],
          T = 4 * P ** 2;
        w(5513);
        w(4562);
        w(3891);
        Db(5 > ++b ? g : a);
      },
      k = (ha = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      q = ha.getChannelData(1);
    Db(g);
  },
  Lb = () => {
    let a, b, g, k, q, l, w, y, B, z, f, u, H, G, R, M, Q = !0;
    const P = [],
      p = () => {
        b4.innerHTML = "Music: " + Q;
        M && (ca || !Q ? M.disconnect() : M.connect(R.destination));
      },
      v = () => {
        const r = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        na = [Cb(0.3, 55, r, 1.732051), Cb(55, 181, r, 1.732051)];
        ma = Cb(0.3, 181, r, 1.732051);
        k = y = void 0;
        P.length =
          ka =
          G =
          u =
          H =
          Ea =
          Fa =
            0;
      },
      A = r => {
        if (ca !== r) {
          if (ca = r, v(), document.body.className = r ? "l m" : "l", r) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          p();
        }
      },
      W = r => {
        try {
          R || (R = new AudioContext(), (M = R.createBufferSource()).buffer = ha, M.loop = !0, M.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        A(!1);
        la = r;
      },
      S = (r, t) => r.buttons[t]?.pressed || 0 < r.buttons[t]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      W();
    };
    b2.onclick = () => {
      W(1);
    };
    b5.onclick = () => A(!0);
    b4.onclick = () => {
      Q = !Q;
      p();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = r => {
      if (!ca && (r.target === hC && (ka = 1), la)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = r => {
      let t;
      r.repeat
        || (t = {
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
          (P[t] = !!r.type[5] && !0) && (0 === t && (ka = 1), 1 === t && A(!0)));
    };
    onmousemove = ({ movementX: r, movementY: t }) => {
      la && (r || t) && (Za += 0.1 * r, Ya += 0.1 * t);
    };
    hC.ontouchstart = r => {
      if (!ca) {
        for (let { pageX: t, pageY: C, identifier: D } of r.changedTouches) {
          la && t > hC.clientWidth / 2
            ? void 0 === y && (B = 0, l = t, w = C, y = D, f = Ya, z = Za)
            : void 0 === k && (q = 0, b = t, g = C, k = D);
        }
        a = za;
      }
    };
    hC.ontouchmove = r => {
      if (!ca) {
        for (let { pageX: T, pageY: O, identifier: I } of r.changedTouches) {
          var t, C, D, K;
          y === I && (Ya = f + (O - w) / 2.3, Za = z + (T - l) / 2.3, B = 1);
          k === I
            && (I = (b - T) / 20,
              t = $a(I),
              C = (g - O) / 20,
              D = $a(C),
              (K = 0.5 < bb(t, D)) && (q = 1),
              u = (K && 0.3 < t) * e(I, -1),
              H = (K && 0.3 < D) * e(C, -1),
              2 < t && (b = 20 * (0 > I ? -1 : 1) + T),
              2 < D && (g = 20 * (0 > C ? -1 : 1) + O));
        }
      }
    };
    hC.ontouchend = r => {
      let t;
      document.activeElement === document.body && r.preventDefault();
      for (const C of r.changedTouches) {
        C.identifier === y
          ? (y = void 0, B || (t = 1), B = 0)
          : C.identifier === k
          ? (k = void 0, H = u = 0, q || (t = 1), q = 0)
          : t = 1;
      }
      r.target === hC && t && a && 0.02 < (r = za - a) && 0.7 > r && (ka = 1);
    };
    oa = () => {
      Ea = H + (P[4] ? 1 : 0) - (P[5] ? 1 : 0);
      Fa = u + (P[2] ? 1 : 0) - (P[3] ? 1 : 0);
      let r = navigator.getGamepads()[0];
      r
        && (la && (Ya += Aa * cb(r.axes[3], 0.3) * 80, Za += Aa * cb(r.axes[2], 0.3) * 80),
          Ea += S(r, 12) - S(r, 13) - cb(r.axes[1], 0.2),
          Fa += S(r, 14) - S(r, 15) - cb(r.axes[0], 0.2),
          S(r, 9) && A(!0),
          (r = S(r, 3) || S(r, 2) || S(r, 1) || S(r, 0)) && !G && (ka = 1),
          G = r);
    };
    document.onvisibilitychange = onblur = onresize = v;
    A(!0);
  },
  L = (a, b = new DOMMatrix(), g) => pa.o.push(...x(a, b, g)),
  N = (a, b = 1) => {
    const g = pa;
    Ra.push(pa = { m: new DOMMatrix(), G: b, o: [] });
    a();
    pa = g;
  },
  Mb = a => {
    const b = pa,
      g = d.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = F(k.g, k.i, 4);
          k.h = F(k.h, k.i, 1);
          pb(b.m).multiplySelf(a);
          ka && 3 > (mb(), hb(Va - ib, Wa - jb, Xa - kb))
            ? k.i
              ? 0.7 < k.g && (k.i = 0, (Da = g) && zb("* click *", 1), Bb())
              : 0.3 > k.g && (k.i = 1, (Da = g) && zb("* click *", 1), Bb())
            : k.i && 0.8 < k.g && !g && (k.i = 0,
              13 > Ba
                ? zb("Not leaving now, there are souls to catch!", 3)
                : Ca || (zb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ca = 1));
          h.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1).m44 = 1 - k.g;
        },
      };
    d.push(k);
    L(E(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), J(0.4, 0.5, 0.5));
    L(E(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), J(0.4, 0.5, 0.5));
    L(E(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), J(0.5, 0.5, 0.4));
  },
  Nb = (a, ...b) => {
    let g, k, q, l, w = 0, y = 0, B = 1, z = -1;
    const f = {
      i: 0,
      F() {
        if (!f.i) {
          let p, v, A, W, S, r = 1, t = 1 / 0;
          for (let C = 0; b.length > C; C++) {
            const D = b[C];
            let K = hb(H - D[0], G - D[1]);
            r = ab(r, K / D[2]);
            0 > (K -= D[2]) ? S = 1 : t > K && (t = K, u = D);
          }
          S
            || (p = H - u[0],
              v = G - u[1],
              A = hb(p, v),
              W = Math.atan2(-v, p),
              B && (l = e(l / (1 + Math.random())), y = (Math.random() - 0.5) * Math.PI / 2),
              W += y,
              z = -Math.cos(W),
              w = Math.sin(W),
              0.1 < A && (A = ab(A, u[2]) / A, H = p * A + u[0], G = v * A + u[1]));
          B = S;
          l = F(l, 3 + 6 * (1 - r), 3 + r);
          R = F(R, H = F(H, H + z, l), l);
          M = F(M, G = F(G, G + w, l), l);
          g = eb(g, Math.atan2(R - k, M - q) / La - 180, yb(3));
          pb(Q).multiplySelf(a).translateSelf(k = R, 0, q = M).rotateSelf(0, g, 7 * Math.sin(1.7 * c));
          1.6 > (mb(), hb(Va - ib, Wa - jb, Xa - kb))
            && (f.i = 1,
              zb(
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
                ][Ba] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                6,
              ),
              Ab(),
              Bb());
        }
        f.i
          && pb(Ra[2].m).translateSelf(
            P % 4 * 1.2 - 1.7 + Math.sin(c + P) / 7,
            -2,
            1.7 * (P / 4 | 0) - 5.5 + $a(P % 4 - 2) + Math.cos(c / 1.5 + P) / 6,
          );
      },
    };
    let u = b[0], [H, G] = u, [R, M] = u;
    const Q = pa.m, P = Na.length;
    Na.push(f);
  },
  Ob = ({ x: a, y: b, z: g }, k) => a * k.x + b * k.y + g * k.z,
  Pb = a => {
    let b, g = 0, k = 0, q = 0, l = a.at(-1);
    for (b of a) {
      g += (l.y - b.y) * (l.z + b.z), k += (l.z - b.z) * (l.x + b.x), q += (l.x - b.x) * (l.y + b.y), l = b;
    }
    return b = hb(g, k, q), g /= b, k /= b, q /= b, { x: g, y: k, z: q, w: g * l.x + k * l.y + q * l.z };
  },
  Ub = (a, b) => {
    var g, k, q, l = b.B;
    for (var w = 0; l.length > w; ++w) {
      if (-0.00008 > (g = Ob(a, l[w]) - a.w) ? q = b : 8e-5 < g && (k = b), q && k) {
        k = [];
        q = [];
        l = b.B;
        w = b.v;
        let y = l.at(-1), B = Ob(a, y) - a.w;
        for (const z of l) {
          g = Ob(a, z) - a.w,
            8e-5 > B && q.push(y),
            -0.00008 < B && k.push(y),
            (8e-5 < B && -0.00008 > g || -0.00008 > B && 8e-5 < g)
            && (B /= g - B,
              y = { x: y.x + (y.x - z.x) * B, y: y.y + (y.y - z.y) * B, z: y.z + (y.z - z.z) * B },
              k.push(y),
              q.push(y)),
            y = z,
            B = g;
        }
        return {
          l: 2 < k.length && { B: rb(k, l.u, l.C), v: w, A: b },
          j: 2 < q.length && { B: rb(q, l.u, l.C), v: w, A: b },
        };
      }
    }
    return { l: k, j: q };
  },
  Vb = (a, b, g = Pb(b.B)) => {
    let k, q;
    return a
      ? ({ l: k, j: q } = Ub(a, b), k || q || a.o.push(b), k && (a.l = Vb(a.l, k, g)), q && (a.j = Vb(a.j, q, g)))
      : a = { x: g.x, y: g.y, z: g.z, w: g.w, o: [b], l: 0, j: 0 },
      a;
  },
  Wb = (a, b, g) => {
    const k = [],
      q = (l, w) => {
        let { l: y, j: B } = Ub(l, w);
        y || B || (0 < g * Ob(l, b) ? y = w : B = w);
        y && (l.l ? q(l.l, y) : k.push(y));
        B && l.j && q(l.j, B);
      };
    for (const l of b.o) {
      q(a, l);
    }
    return k;
  },
  Xb = (a, b) => a && (b(a), Xb(a.l, b), Xb(a.j, b)),
  Yb = a => (Xb(a, b => {
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
  Zb = a => a.length ? a.reduce((b, g) => Vb(b, { B: g, v: 0, A: 0 }), 0) : a,
  $b = (...a) =>
    a.reduce((b, g) => {
      const k = [];
      if (b = Zb(b), g) {
        g = Zb(g);
        Xb(b, q => q.o = Wb(g, q, 1));
        Xb(g, q => k.push([q, Wb(b, q, -1)]));
        for (let [q, l] of k) {
          for (const w of l) {
            Vb(b, w, q);
          }
        }
      }
      return b;
    }),
  U = (a, ...b) => {
    const g = l => {
        let w;
        return l.A && ((w = k.get(l.A)) ? (q.delete(w), l = g(l.A)) : k.set(l.A, l)), l;
      },
      k = new Map(),
      q = new Map();
    return a = Yb($b(Yb(Zb(a)), ...b)),
      Xb(a, l => {
        for (const w of l.o) {
          q.set(g(w), w.v);
        }
      }),
      Array.from(q, ([{ B: l }, w]) => {
        const y = l.map(({ x: B, y: z, z: f }) => ({ x: B, y: z, z: f }));
        return rb(w ? y.reverse() : y, l.u, l.C);
      });
  },
  Y = () => pb(m, Ra[++qa].m),
  bc = () => {
    let a, b, g, k, q, l, w, y, B, z, f, u, H, G, R = 0, M = 0, Q = 0, P = 1, p = 2, v = 15;
    const A = () => pb((p ? d[Da] : Ra[f && 1 === Ra[f].G && f || 0]).m),
      W = t => {
        1 < p ? (pb(d[Da].m).multiplySelf(d[Da].H), mb(0, Da || 0.9 < da ? 15 : 1, -2.4)) : (A(), mb(R, M, Q));
        t && (q = (ib - Va) / Aa, l = (kb - Xa) / Aa);
        Va = ib;
        Wa = jb;
        Xa = kb;
      },
      S = () => {
        var t = 0, C = 0, D = 0, K = 0, T = 0, O = 0, I = -1;
        for (var V = 0; 36 > V; ++V) {
          var Ha = 512 * V;
          for (var ia = 96; 416 > ia; ia += 4) {
            for (var ja = 0; 2 > ja; ++ja) {
              var aa = ac[Ha + ia + ja];
              const ra = ac[Ha + ia + ja + 2];
              aa > K && (K = aa);
              aa + ra && (0 > I || I === V) && (I = V, ra === z ? ++t : C && C !== ra || (C = ra, ++D));
            }
          }
        }
        z = 0 > I ? 0 : D > 2 * t ? C : z;
        for (t = 36; 128 > t; ++t) {
          V =
            I =
            D =
            C =
              0;
          Ha = 512 * t;
          for (ia = 0; 128 > ia; ++ia) {
            ja = Ha + 4 * ia,
              aa = ac[ja],
              64 > ia ? aa > C && (C = aa) : aa > D && (D = aa),
              (aa = ac[2 + ja]) > I && (I = aa),
              aa = ac[1 + ja],
              64 < ia ? aa > C && (C = aa) : aa > D && (D = aa),
              (aa = ac[3 + ja]) > V && (V = aa);
          }
          (D -= C) * D > T * T && (T = D);
          (V -= I) * V > O * O && (O = V);
        }
        y = e(1 - 0.02 * bb($a(T), $a(O)));
        T /= 255;
        K /= 255;
        O /= 255;
        A().invertSelf();
        mb(T, K, O, 0);
        R += ib;
        M += K;
        Q += kb;
        W();
      },
      r = (t, C, D, K) => fb(t, C, P || (e($a(C - t) ** 0.5 - D) + 1 / 7) * yb(1.5 * K));
    sa = () => {
      W(z);
      Z.r9r(0, 0, 128, 128, 6408, 5121, ac);
      NO_INLINE(S)();
      !p && z === f || (f = z, A().invertSelf(), mb(Va, Wa, Xa), R = ib, M = jb, Q = kb, p = p && (z ? 0 : 1));
      (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (p = 2);
      1 === z && (d[9].i = -15 > Va && 0 > Xa ? 1 : 0);
      B = fb(F(B, Wa, 2), Wa, p || 8 * $a(B - Wa));
      u = r(u, Va, 0.5, 1);
      H = r(H, B, 2, 1);
      G = r(G, Xa, 0.5, 1);
      k = F(k, ta * (27 < z && 32 > z), 2);
      la
        ? (t = p + yb(18), Ga = fb(Ga, Va, t), Ja = fb(Ja, Xa, t), Ia = fb(Ia, 1.6 + B, t), Za = db(Za))
        : (Ga = r(Ga, u, 1, 2 + k),
          Ja = r(Ja, G + -18 + 5 * k, 1, 2 + k),
          Ia = r(Ia, bb(H + e((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          t = ab(-6, -$a(G - Ja)),
          C = u - Ga,
          Za = eb(Za, 90 - db(Math.atan2(t, C) / La), P + yb(10)),
          Ya = eb(Ya, 90 - Math.atan2(hb(t, C), Ia - H) / La, P + yb(10)));
      Ya = e(Ya, -87, 87);
      P = 0;
      var t = e(Ea, -1), C = e(Fa, -1), D = cb(hb(t, C) ** 0.5, 0.1);
      let K = Math.atan2(t, C);
      D && (a = 90 - K / La);
      b = eb(b, a, yb(8));
      g = F(g, D, 10);
      Y().translateSelf(Va, 0.06 * y * g * Math.cos(18.2 * c) + B, Xa).rotateSelf(0, b);
      for (var T = 0; 2 > T; ++T) {
        const O = 9.1 * c - Math.PI * T;
        pb(Ra[37].m, Y()).translateSelf(0, g * e(0.45 * Math.sin(O - Math.PI / 2))).rotateSelf(
          g * Math.sin(O) * 0.25 / La,
          0,
        );
      }
      v = z ? 5 : F(v, p ? 13 : 19 - 2 * ab(0, Wa + 10), 2.2);
      q = z || p ? 0 : F(q, 0, 3);
      l = z || p ? 0 : F(l, 0, 3);
      t = (w = p ? 0 : F(w, z ? 7 * e(2 * D) * y : 0, z ? 9 : 1)) * D * $a(t) * Math.sin(K);
      C = w * D * $a(C) * Math.cos(K);
      K = la ? (180 + Za) * La : 0;
      D = Aa * (q + (C * Math.cos(K) - Math.sin(K) * t));
      T = Aa * -v;
      t = Aa * (l + (C * Math.sin(K) + Math.cos(K) * t));
      A().invertSelf();
      mb(D, T, t, 0);
      R += ib;
      M += T;
      Q += kb;
      W();
    };
  },
  cc = (a, b, g, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, g + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  lc = (a, b, g) => {
    ca
      ? 1100 < hC.width
        && (pb().rotateSelf(0, 40 * Math.sin(za) - 80, -8),
          ob(h, dc, 36),
          ob(h, dc, 37),
          ob(h, dc, 38),
          Z.uae(a, !1, dc),
          Z.d97(4, Ra[39].D - Ra[37].s, 5123, 2 * Ra[37].s))
      : (Z.uae(a, !1, ec),
        Z.das(4, Ra[g].D - Ra[g].s, 5123, 2 * Ra[g].s, Na.length),
        Z.das(4, Ra[42].D - Ra[42].s, 5123, 2 * Ra[42].s, d.length),
        Z.uae(a, !1, dc),
        Z.d97(4, (b ? Ra[39].D : Ra[37].s) - 3, 5123, 6));
  },
  mc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  nc = (a, b) => {
    const g = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, mc(b, 35632)), Z.l8l(k), q => q ? g[q] || (g[q] = Z.gan(k, q)) : Z.u7y(k);
  },
  h = new DOMMatrix(),
  m = new DOMMatrix(),
  nb = new Float32Array(16),
  dc = new Float32Array(624),
  ec = new Float32Array(624),
  ac = new Uint8Array(65536),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Db(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const q = [new Float32Array(16), new Float32Array(16)],
          l = p => {
            requestAnimationFrame(l);
            var v = (p - (ba || p)) / 1e3;
            if (za += v, c += Aa = ca ? 0 : ab(0.06, v), ba = p, 0 < Aa) {
              oa();
              Ka && c > Ka && (Ka = 0, h4.innerHTML = "");
              da = F(da, Ca ? F(da, -9, 1.5) : e(c / 3), 1);
              ea = F(ea, d[9].h, 0.2 + 0.3 * $a(2 * d[9].h - 1));
              qa = 1;
              ta = gb(d[12].g, d[13].g);
              wa = fb(F(wa, 0, 1), db(wa + 60 * Aa), d[5].g - d[6].h);
              ua = fb(F(ua, 0, 5), db(ua + 56 * Aa), ta);
              va = fb(F(va, 0, 4), db(va + 48 * Aa), ta);
              cc(Y(), -12, 4.2, 40 * da - 66);
              Y().translateSelf(0, 0, -15).scaleSelf(1, e(1.22 - d[1].g), 1);
              Y().translateSelf(0, 0, 15).scaleSelf(1, e(1.22 - d[2].g), 1);
              Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, e(1.1 - d[6].g), 1);
              Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
              Y().translateSelf(
                0,
                0.01 > d[3].g ? -500 : (2 + 5 * Math.cos(1.5 * c)) * (1 - d[2].g) * d[3].h + 15 * (d[3].g - 1),
              );
              p = ab(1 - d[4].h, d[2].h);
              Y().translateSelf(p * Math.sin(0.6 * c + 1.5) * 12, 0, 35);
              Y().translateSelf(p * Math.sin(0.6 * c + 2) * 8.2, 0, 55);
              Y().translateSelf(p * Math.sin(0.6 * c) * 12, 0, 45);
              Y().translateSelf(9.8 * (1 - p));
              p = e(1 - 5 * p) * gb(d[4].g, d[5].g);
              Y().translateSelf(0, p * Math.sin(1.35 * c) * 4);
              Y().translateSelf(0, 0, p * Math.sin(0.9 * c) * 8);
              Y().translateSelf(0, -6.5 * d[4].h);
              Y().translateSelf(-75, 3 * (1 - d[5].h) * (1 - d[6].g), 55).rotateSelf(180 * (1 - d[5].h) + wa, 0);
              p = gb(d[7].h, d[6].h);
              Y().translateSelf(0, p * Math.sin(c) * 5 + 3.5 * (1 - bb(d[6].g, d[7].g)));
              Y().translateSelf(0, p * Math.sin(c + 3) * 6, p * Math.sin(0.6 * c + 1) * 6);
              Y().translateSelf(0, -7.3 * d[7].h);
              cc(Y(), -123, 1.4, 55 - 65 * ea);
              p = gb(d[10].g, d[11].g);
              Y().translateSelf(0, -2, 10 - 8.5 * p * $a(Math.sin(1.1 * c)));
              Y().translateSelf(0, -2, 10 - 8.5 * p * $a(Math.sin(2.1 * c)));
              Y().translateSelf(0, -2, 10 - 8.5 * bb(p * $a(Math.sin(1.5 * c)), (1 - d[10].g) * (1 - p)));
              p = gb(d[8].h, d[12].h);
              for (v = 0; 4 > v; v++) {
                Y().translateSelf(
                  (2 < v ? 2 * (1 - p) + p : 0) - 100,
                  p * Math.sin(1.3 * c + 1.7 * v) * (3 + v / 3) + 0.7,
                  115 - 7 * (1 - d[8].h) * (1 - d[12].h) * (1 & v ? -1 : 1)
                    + bb(0.05, p) * Math.cos(1.3 * c + 7 * v) * (4 - 2 * (1 - v / 3)),
                );
              }
              Y().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - d[8].g) - p * Math.sin(0.8 * c) - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 + 3 * p), 0);
              Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ua);
              Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, va);
              Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - va);
              Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + va);
              p = gb(d[13].h, d[14].h);
              for (v = 0; 3 > v; ++v) {
                Y().translateSelf(0, p * Math.sin(1.5 * c + 1.5 * v) * 4 + (v ? 0 : (1 - d[13].h) * (1 - d[14].h)));
              }
              Y().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              v = gb(gb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2);
              Y().translateSelf(0, 16 * v, 95 + 8.5 * e(2 * v - 1));
              for (p = 0; 13 > p; ++p) {
                Na[p].F(), ob(h, ec, p);
              }
              for (p = 0; 16 > p; ++p) {
                d[p].F(), ob(h, ec, 13 + p);
              }
              sa();
              for (p = 0; qa >= p; ++p) {
                ob(Ra[p].m, dc, p - 1);
              }
              H();
              Z.b6o(36160, P);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              Z.uae(H("b"), !1, ob(pb().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa)));
              lc(H("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(H("b"), !1, ob(pb().translateSelf(-Va, -Wa, -Xa - 0.3)));
              lc(H("c"), 0, 40);
              ka = 0;
            }
            p = Ga;
            v = Ia;
            let A = Ja;
            ca
              ? (pb(ma).invertSelf(),
                mb(3.6, 3.5),
                p = ib,
                v = jb,
                A = 5,
                pb(m, y).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -v, -A).rotateSelf(0, 99))
              : pb(m, y).rotateSelf(-Ya, -Za).invertSelf().translateSelf(-p, -v, -A);
            f();
            Z.b6o(36160, M);
            Z.v5y(0, 0, 2048, 2048);
            R[0](54.7 * 1.1);
            R[1](126 * 1.1);
            G();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(G("a"), !1, ob(ma));
            Z.uae(G("b"), !1, ob(y));
            Z.uae(G("i"), !1, q[0]);
            Z.uae(G("j"), !1, q[1]);
            Z.ubu(G("k"), p, v, A);
            lc(G("c"), !la, 41);
            u();
            Z.ubu(u("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, za);
            Z.ubu(u("k"), p, v, A);
            Z.uae(u("b"), !1, ob(pb(y).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, P);
            Z.f1s();
          },
          w = new DOMMatrix(),
          y = new DOMMatrix(),
          B = g,
          z = qb(8, () => ({}));
        var k = mc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const f = nc(
            mc(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          u = nc(
            mc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          H = nc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          G = nc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          R = qb(2, p => {
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
              A => {
                let W = 0, S = 0, r = 0, t = 1 / 0, C = 1 / 0, D = 1 / 0, K = -1 / 0, T = -1 / 0, O = -1 / 0;
                Z.fas(36160, 36096, 3553, v, 0);
                Z.c4s(256);
                pb().scale3dSelf(A).multiplySelf(pb(na[p], w).multiplySelf(y).invertSelf());
                for (let I = 0; 8 > I; ++I) {
                  const V = z[I];
                  mb(4 & I ? 1 : -1, 2 & I ? 1 : -1, 1 & I ? 1 : -1);
                  W -= V.x = (0 | ib) / (A * lb);
                  S -= V.y = (0 | jb) / (A * lb);
                  r -= V.z = (0 | kb) / (A * lb);
                }
                pb().rotateSelf(298, 139).translateSelf(W / 8, S / 8, r / 8);
                for (A = 0; 8 > A; ++A) {
                  const { x: I, y: V, z: Ha } = z[A];
                  mb(I, V, Ha);
                  t = ab(t, ib);
                  K = bb(K, ib);
                  C = ab(C, jb);
                  T = bb(T, jb);
                  D = ab(D, kb);
                  O = bb(O, kb);
                }
                A = 10 + p;
                D *= 0 > D ? A : 1 / A;
                O *= 0 < O ? A : 1 / A;
                Z.uae(
                  f("b"),
                  !1,
                  ob(
                    pb(m, w).scaleSelf(2 / (K - t), 2 / (T - C), 2 / (D - O)).translateSelf(
                      (K + t) / -2,
                      (T + C) / -2,
                      (D + O) / 2,
                    ).multiplySelf(h),
                    q[p],
                  ),
                );
                lc(f("c"), !la, 41);
              };
          }),
          M = Z.c5w();
        k = Z.c25();
        const Q = Z.c3z(), P = Z.c5w();
        H();
        Z.uae(H("a"), !1, ob(Cb(1e-4, 2, 1.4, 0.4)));
        G();
        Z.ubh(G("q"), 2);
        Z.ubh(G("h"), 1);
        Z.ubh(G("g"), 0);
        u();
        Z.ubh(u("q"), 2);
        Z.b6o(36160, M);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, P);
        Z.bb1(36161, Q);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, Q);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, B);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Lb)();
        NO_INLINE(bc)();
        requestAnimationFrame(l);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = Ma;
  NO_INLINE(Kb)(() => {
    Db(() => {
      let l = 0;
      const w = [],
        y = [],
        B = [],
        z = [],
        f = new Int32Array(8),
        u = new Map(),
        H = new Int32Array(f.buffer, 0, 5),
        G = new Float32Array(f.buffer);
      Ra.map((R, M) => {
        let Q;
        const P = p => {
          let { x: v, y: A, z: W } = Q[p], S = (G[0] = v, G[1] = A, G[2] = W, p = "" + (Q.C ? H : f), u.get(p));
          return void 0 !== S
            ? (v = 3 * S, z[v] = (z[v++] + f[5]) / 2, z[v] = (z[v++] + f[6]) / 2, z[v] = (z[v] + f[7]) / 2)
            : (u.set(p, S = u.size), y.push(v, A, W, G[3]), B.push(f[4]), z.push(f[5], f[6], f[7])),
            S;
        };
        for (Q of (G[3] = 41 < M ? -14 : R.G && M, R.o)) {
          const { x: p, y: v, z: A } = Pb(Q);
          f[4] = 0 | Q.u;
          f[5] = 32767 * p;
          f[6] = 32767 * v;
          f[7] = 32767 * A;
          for (let W = 2, S = P(0), r = P(1); Q.length > W; ++W) {
            w.push(S, r, r = P(W));
          }
        }
        R.o = 0;
        R.s = l;
        R.D = l = w.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(y), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(z), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(B), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [R, M, Q, P, p] = JSON.parse(localStorage.DanteSP22);
        d.map((v, A) => v.g = v.h = v.i = A ? 0 | R[A] : 0);
        Na.map((v, A) => v.i = 0 | M[A]);
        Da = Q;
        c = P;
        ea = p;
      } catch {
      }
      Ab();
      da = e(Da);
      Db(b);
    });
    const k = l => n(Math.sin((l /= 11) * Math.PI), l).rotateSelf(10 * l).scaleSelf(1.001 - l, 1, 1.001 - l),
      q = qb(11, l => wb(ub(vb(19), k(l), J(1, 1, 0.8, 0.2)).reverse(), ub(vb(19), k(l + 1), J(1, 1, 0.8, 0.2)), 1))
        .flat();
    N(() => L([Sa.slice(1)], n(-2).scale3d(3).rotate(90, 0)), 0);
    N(() => {
      const l = f =>
          U(
            x(E(), n(0, -f / 2).scale(6, f - 1, 2.2)),
            x(E(), n(0, -f / 2 - 6).scale(4, f - 3, 4)),
            x(E(32, 1), n(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => N(() => qb(7, f => L(x(E(9, 1), n(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), J(0.3, 0.3, 0.38))))),
        y = U(
          x(E(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), J(0.7, 0.4, 0.25, 0.7)),
          x(E(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), J(0.7, 0.4, 0.25, 0.2)),
          x(E(), n(4, -1.2).scale3d(2), J(0.7, 0.4, 0.25, 0.3)),
        ),
        B = (N(() => {
          L(y);
          Mb(n(0, -3, 4));
        }),
          Mb(n(-5.4, 1.5, -19).rotate(0, -90)),
          Nb(n(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Nb(n(0, 2.8), [5, 10, 3], [-5, 10, 3], ...vb(18).map(({ x: f, z: u }) => [7 * f, 10 * u, 4.5 - 2 * $a(f)])),
          [-15, 15].map((f, u) => {
            w();
            w();
            L(E(), n(0, 0, u ? 22 : -23).scale(3, 1, 8), J(0.9, 0.9, 0.9, 0.2));
            L(E(), n(0, 6.3, f).scale(4, 0.3, 1), J(0.3, 0.3, 0.3, 0.4));
            L(E(), n(0, 1, f).scale(3, 0.2, 0.35), J(0.5, 0.5, 0.5, 0.3));
            qb(5, H => L(q, n(18.5 * (u - 0.5), 0, 4.8 * H - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2)));
          }),
          L(E(), n(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), J(0.8, 0.8, 0.8, 0.2)),
          L(E(), n(3, 1.5, -20).scale(0.5, 2, 5), J(0.7, 0.7, 0.7, 0.2)),
          L(E(), n(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), J(0.75, 0.75, 0.75, 0.2)),
          L(E(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), J(0.6, 0.3, 0.3, 0.4)),
          L(U(
            $b(
              x(E(6, 0, 0, 0.3), n(8, -3, -4).scale(13, 1, 13), J(0.7, 0.7, 0.7, 0.2)),
              U(
                x(E(6, 0, 0, 0.3), n(0, -0.92).scale(13, 2, 13), J(0.8, 0.8, 0.8, 0.2)),
                x(E(), m.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), J(0.5, 0.5, 0.5, 0.5)),
              ),
              x(
                E(),
                m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                J(0.8, 0.2, 0.2, 0.5),
              ),
              x(E(6), n(0, -8).scale(9, 8, 7), J(0.2, 0.1, 0.4, 0.5)),
            ),
            x(E(5), m.scale(5, 30, 5), J(0.4, 0.2, 0.6, 0.5)),
            x(E(5, 0, 1.5), n(0, 1).scale(4.5, 0.3, 4.5), J(0.7, 0.5, 0.9, 0.2)),
            x(E(6), n(15, -1.5, 4).scale(3.5, 1, 3.5), J(0.5, 0.5, 0.5, 0.5)),
          )),
          N(() => {
            L(E(5), n(0, -0.2).scale(5, 1, 5), J(0.6, 0.65, 0.7, 0.3));
            Mb(n(0, 1.2));
          }),
          Mb(n(15, -2, 4)),
          qb(2, () =>
            N(() => {
              Sa.map(({ x: f, z: u }) => {
                L(E(11, 1), n(4 * f, 4, 4 * u).scale(0.8, 3, 0.8), J(0.5, 0.3, 0.7, 0.6));
                L(E(), n(4 * f, 7, 4 * u).scale(1, 0.3), J(0.5, 0.5, 0.5, 0.3));
              });
              L(U(
                x(E(), m.scale(5, 1, 5), J(0.8, 0.8, 0.8, 0.3)),
                ...[-1, 1].map(f => x(E(25, 1), n(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), J(0.8, 0.8, 0.8, 0.3))),
              ));
              L(E(), n(0, -3).scale(8, 2, 8), J(0.4, 0.4, 0.4, 0.3));
            })),
          N(() => {
            L(U(
              $b(
                x(E(), m.scale(1.5, 1, 5), J(0.9, 0.9, 0.9, 0.2)),
                x(E(6), m.scale(4, 1, 5), J(0.9, 0.9, 0.9, 0.2)),
                x(E(), n(0, -2).scale(2, 3.2, 1.9), J(0.3, 0.8, 0.5, 0.5)),
                x(E(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), J(0.9, 0.9, 0.9, 0.2)),
              ),
              x(E(), m.scale(1.3, 10, 1.3), J(0.2, 0.7, 0.4, 0.6)),
            ));
            Nb(n(0, 2.8), [0, 0, 4.5]);
          }),
          L(E(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2)),
          N(() => {
            L(E(3), n(-23, -1.7, 55.8).scale(5, 0.7, 8.3), J(0.3, 0.6, 0.6, 0.2));
            L(E(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), J(0.8, 0.8, 0.8, 0.2));
            L(E(), n(-23, -3, 55).scale(5.2, 1.7, 3), J(0.5, 0.5, 0.5, 0.3));
            L(E(), n(-23, -2.2, 62).scale(3, 1, 4), J(0.5, 0.5, 0.5, 0.3));
            Mb(n(-23, -0.5, 66.5));
          }),
          N(() => {
            L(E(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), J(0.7, 0.7, 0.7, 0.2));
            L(U(x(E(), m.scale(3, 1.4, 2.7)), x(E(), m.scale(1.2, 8, 1.2))), n(-33, -3, 55), J(0.7, 0.7, 0.7, 0.2));
          }),
          N(() => {
            L(U(
              x(E(), n(-27, -3, 55).scale(3, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2)),
              x(E(), n(-27, -3, 55).scale(1, 3), J(0.9, 0.9, 0.9, 0.2)),
            ));
            L(E(), n(-39, -3, 55).scale(3, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2));
          }),
          N(() => {
            L(E(6), n(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), J(0.7, 0.7, 0.7, 0.4));
          }),
          Mb(n(-55, -1.1, 46).rotate(0, 90)),
          L(E(7), n(-57, -2.6, 46).scale(4, 1, 4), J(0.8, 0.8, 0.8, 0.3)),
          L(E(6), n(-61.3, -2.4, 49).scale(3, 1, 5), J(0.4, 0.6, 0.6, 0.3)),
          [
            ...x(E(), n(0, -3).scale(11, 1.4, 3), J(0.9, 0.9, 0.9, 0.2)),
            ...x(E(), n(0, -2.2).scale(7.7, 0.5, 4), J(0.5, 0.5, 0.5, 0.2)),
            ...U(
              x(E(6), m.rotate(90).scale(6, 8, 6), J(0.3, 0.6, 0.6, 0.3)),
              x(E(4, 0, 0.01), n(0, 6).scale(12, 2, 0.75).rotate(0, 45), J(0.3, 0.6, 0.6, 0.3)),
              x(E(6), m.rotate(90).scale(5, 12, 5), J(0.3, 0.6, 0.6, 0.3)),
              ...[-5, 0, 5].map(f => x(E(5), n(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), J(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        z = (N(() =>
          L(B), 2),
          L(B, n(-53, 0, 55)),
          L(E(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), J(0.7, 0.7, 0.7, 0.2)),
          L(E(3, 0, -0.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), J(0.8, 0.8, 0.8, 0.2)),
          L(U(
            $b(
              x(E(), n(-100, -2.4, 55).scale(8, 0.9, 8), J(0.8, 0.8, 0.8, 0.2)),
              x(E(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), J(0.8, 0.8, 0.8, 0.2)),
              x(E(), n(-100, -2.6, 70).scale(3, 1.1, 7), J(0.8, 0.8, 0.8, 0.2)),
              x(E(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), J(0.8, 0.8, 0.8, 0.2)),
              x(E(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), J(0.6, 0.6, 0.6, 0.3)),
              x(E(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), J(0.8, 0.8, 0.8, 0.2)),
              x(E(), n(-100, 0.42, 92).scale(3, 1.1, 4.1), J(0.8, 0.8, 0.8, 0.2)),
            ),
            x(E(8), n(-100, -1, 55).scale(7, 0.9, 7), J(0.3, 0.3, 0.3, 0.4)),
            x(E(8), n(-100, -2, 55).scale(4, 0.3, 4), J(0.4, 0.4, 0.4, 0.5)),
            x(E(8, 0, -3.1), n(-100, -3, 55).scale(0.4, 1, 0.4), J(0.4, 0.4, 0.4, 0.5)),
          )),
          Nb(n(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Nb(n(-89, 0.2, 80), [0, 0, 6]),
          L(U(
            x(E(), n(-100, 1, 63).scale(7.5, 4), J(0.5, 0.5, 0.5, 0.4)),
            x(E(), n(-100, 0, 70).scale(2, 2, 10), J(0.5, 0.5, 0.5, 0.4)),
            x(E(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), J(0.5, 0.5, 0.5, 0.4)),
          )),
          Sa.map(({ x: f, z: u }) => {
            L(E(6), n(3 * f, 3, 15 * u).scale(0.7, 4, 0.7), J(0.6, 0.3, 0.3, 0.4));
            L(E(6), n(7 * f - 100, -3, 7 * u + 55).scale(1, 8.1), J(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(H => L(E(6), n(7 * f - 100, H, 7 * u + 55).scale(1.3, 0.5, 1.3), J(0.4, 0.2, 0.2, 0.8)));
            L(E(14, 1), n(9 * f - 38.9, -7.3, 11 * u + 17).scale(1, 4), J(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(H =>
              L(E(17, 1), n(9 * f - 38.9, H - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), J(0.6, 0.6, 0.6, 0.3))
            );
          }),
          qb(7, f => {
            L(
              E((23 * f + 1) % 5 + 5, 0, 0.5),
              n(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              J(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          L(E(), n(-87, -9.5, 24).scale(7, 1, 3), J(0.4, 0.5, 0.6, 0.4)),
          L(E(4), n(-86, -9.2, 27).scale(5, 1, 5), J(0.5, 0.6, 0.7, 0.3)),
          L(E(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), J(0.3, 0.3, 0.4, 0.1)),
          Mb(n(-86, -7.5, 31)),
          N(() => {
            [0, 12, 24].map(f =>
              L(E(), n(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), J(0.2, 0.5, 0.6, 0.2))
            );
          }),
          N(() => {
            [6, 18].map(f =>
              L(E(), n(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), J(0.1, 0.4, 0.5, 0.2))
            );
          }),
          L(
            U(
              $b(
                x(E(5), n(0, 0, -7).scale(2, 1.2, 2), J(0.2, 0.4, 0.7, 0.3)),
                x(E(5), m.scale(9, 1.2, 9), J(0, 0.2, 0.3, 0.5)),
                x(E(), m.scale(11, 1, 13), J(0.3, 0.4, 0.6, 0.3)),
              ),
              x(E(5), m.scale(5.4, 5, 5.4), J(0, 0.2, 0.3, 0.5)),
            ),
            n(-38.9, -11.3, 17),
          ),
          Mb(n(-38.9, -9.6, 10)),
          N(() => {
            L(
              U(
                $b(
                  x(E(5), n(0, 2).scale(5, 7, 5).skewY(8), J(0.2, 0.4, 0.5, 0.5)),
                  x(E(5), n(0, 6).scale(1.1, 7, 1.1).skewY(-8), J(0.25, 0.35, 0.5, 0.5)),
                  x(E(5), n(0, 9).scale(0.6, 7, 0.6).skewY(8), J(0.35, 0.3, 0.5, 0.5)),
                ),
                x(E(5), m.scale(4, 8, 4), J(0.2, 0.4, 0.5, 0.5)),
                x(E(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), J(0.2, 0.4, 0.5, 0.5)),
              ),
              n(-38.9, -11.3, 17),
            );
            Nb(n(-39.1, -0.6, 17).rotate(11), ...vb(15).map(({ x: f, z: u }) => [3 * f, 3 * u, 1.2]));
          }),
          L(
            U(
              $b(
                x(E(6), n(0, 0, -18).scale(15, 1.2, 15), J(0.7, 0.7, 0.7, 0.3)),
                x(E(), m.scale(4, 1.2, 6), J(0.45, 0.4, 0.6, 0.3)),
              ),
              ...qb(6, f =>
                qb(6, u =>
                  x(
                    E(6),
                    n(4.6 * u - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * u) - 32).scale(2, 5, 2),
                    J(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            n(-38.9, -11.3, -1),
          ),
          Nb(n(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          L(E(5), n(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), J(0.8, 0.1, 0.25, 0.4)),
          Mb(n(-84, -0.5, 85).rotate(0, 45)),
          N(() => {
            L(y);
            Mb(n(0, -3, -4).rotate(0, 180));
          }),
          U(
            x(E(), n(0, -0.5, 1).scale(1.15, 1.2, 6.5), J(0.25, 0.25, 0.35, 0.3)),
            U(
              x(E(3), n(0, 0, -5.5).scale(3, 2), J(0.6, 0.3, 0.4, 0.3)),
              x(E(), n(0, 0, -3.65).scale(2.5, 3), J(0.6, 0.3, 0.4, 0.3)),
            ),
            ...[-1, 1].map(f => x(E(), n(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), J(0.7, 0.2, 0, 0.3))),
          ));
      N(() =>
        qb(2, f =>
          L(z, n(9 * f - 110 + (1 & f), 1.9, -12)))
      );
      N(() =>
        qb(2, f =>
          L(z, n(9 * (f + 2) - 110 + (1 & f), 1.9, -12)))
      );
      N(() =>
        qb(3, f =>
          L(z, n(9 * f - 106, 1.9, -12)))
      );
      qb(3, f => {
        L(l(16), n(12 * f - 109, -9, -12), J(0.6, 0.6, 0.6, 0.3));
        L(l(16), n(-77, -9, -12 * f - 20).rotate(0, 90), J(0.6, 0.6, 0.6, 0.3));
      });
      L(
        U(
          $b(x(E(), n(26.5, -1.6, 10).scale(20, 2.08, 3)), x(E(), n(26.5, -0.5, 10).scale(19, 2, 0.5))),
          ...qb(4, f => x(E(), n(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...qb(3, f => x(E(), n(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        n(-123, 0.2, -12),
        J(0.5, 0.5, 0.6, 0.2),
      );
      Mb(n(-116, -1.4, -18).rotate(0, 180));
      L(E(6), n(-116, -2.6, -16.5).scale(3.2, 0.8, 3), J(0.6, 0.5, 0.7, 0.2));
      L(E(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), J(0.8, 0.8, 0.8, 0.2));
      L(E(), n(-115.5, -17, -12).scale(0.5, 15, 2.2), J(0.6, 0.6, 0.6, 0.3));
      L(E(8), n(-114, -17, -2).scale(2, 15, 2), J(0.6, 0.6, 0.6, 0.3));
      L(E(8), n(-79, -17, -2).scale(2, 15, 2), J(1, 1, 1, 0.3));
      L(E(), n(-77, -17, -50.5).scale(2.2, 15, 0.5), J(0.6, 0.6, 0.6, 0.3));
      L(U(
        x(E(12), n(-77, -14.5, -12).scale(4, 17.5, 4), J(0.7, 0.7, 0.7, 0.2)),
        x(E(12), n(-77, 3.1, -12).scale(3, 5, 3), J(0.4, 0.5, 0.6, 0.2)),
        x(E(), n(-79, 0.1, -12).scale(3.5, 2, 1.3), J(0.4, 0.5, 0.6, 0.2)),
        x(E(), n(-77, 0.1, -14).scale(1.5, 2, 2), J(0.4, 0.5, 0.6, 0.2)),
      ));
      L(E(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), J(0.6, 0.6, 0.6, 0.3));
      L(E(9), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), J(0.5, 0.5, 0.5, 0.3));
      L(U(
        x(E(), n(-93, -5.8, -40).scale(9, 1, 5), J(0.8, 0.8, 0.8, 0.1)),
        x(E(9), n(-98, -5.8, -40).scale(3, 8, 3), J(0.7, 0.7, 0.7, 0.2)),
      ));
      Mb(n(-98, -4.4, -40).rotate(0, 90));
      Nb(n(-115, 0.2, -12), [0, 0, 3.5]);
      Nb(n(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      L(U(
        $b(
          x(E(6, 0, 0, 0.6), n(-100, 0.7, 105.5).scale(8, 1, 11), J(0.7, 0.7, 0.7, 0.2)),
          x(E(), n(-101.5, 0.7, 93.5).scale(10.5, 1, 2), J(0.7, 0.7, 0.7, 0.2)),
        ),
        x(E(5), n(-100, 0.7, 113).scale(4, 3, 4), J(0.7, 0.7, 0.7, 0.2)),
      ));
      qb(4, f =>
        N(() =>
          L(
            E(6),
            n(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
            J(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          )
        ));
      N(() => {
        L(U(x(E(10), m.scale(6, 2, 6), J(0.1, 0.6, 0.5, 0.3)), x(E(10), m.scale(3.3, 6, 3.3), J(0.1, 0.6, 0.5, 0.5))));
        L(E(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), J(0.4, 0.4, 0.4, 0.3));
        L(E(10), n(-7.5).rotate(0, 90).scale(2, 2.5, 2), J(0.3, 0.8, 0.7, 0.3));
        L(E(5), n(-7.5).rotate(0, 90).scale(1, 3), J(0.5, 0.5, 0.5, 0.5));
        Mb(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(f => L(q, m.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
        Nb(n(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        [7.2, 1.5].map(u => L(E(15, 1), n(-7.5 * f - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), J(0.5, 0.24, 0.2, 0.4)));
        L(q, n(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
        L(E(12, 1), n(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), J(0.6, 0.24, 0.2, 0.5));
        L(
          U(
            x(E(), n(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), J(0.5, 0.5, 0.5, 0.4)),
            x(E(), m.scale(3, 3, 10), J(0.6, 0.24, 0.2, 0.5)),
            x(E(28, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), J(0.6, 0.24, 0.2, 0.5)),
            x(E(5), n(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), J(0.6, 0.24, 0.2, 0.5)),
            x(E(5), n(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), J(0.6, 0.24, 0.2, 0.5)),
          ),
          n(f - 100, 0.7, 97),
        );
      });
      N(() => {
        L(U(
          x(E(45, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)),
          x(E(), n(0, 0, -5.5).scale(1.5, 3, 2.7), J(0.45, 0.45, 0.45, 0.2)),
        ));
        L(E(8), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), J(0.7, 0.7, 0.7, 0.1));
        L(E(5), n(0, 2).scale(1, 2), J(0.3, 0.3, 0.3, 0.2));
        Nb(n(0, 3), ...vb(14).map(({ x: f, z: u }) => [5.6 * f, 5.6 * u, 2]));
      });
      N(() => {
        [-1, 1].map(f => L(q, m.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
        L(U(x(E(28, 1), n(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3)), x(E(), m.scale(9, 5, 2), J(0.3, 0, 0, 0.3))));
        L(x(E(28, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)));
        L(x(E(5), n(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)));
      });
      N(() => {
        L(U(
          x(E(28, 1), n(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3)),
          x(E(), n(7).scale(9, 5, 2), J(0.3, 0, 0, 0.3)),
          x(E(), n(0, 0, 7).scale(2, 5, 9), J(0.3, 0, 0, 0.3)),
        ));
        L(x(E(28, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)));
        L(x(E(5), n(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)));
      });
      N(() => {
        L(U(
          x(E(28, 1), n(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3)),
          x(E(), n(7).scale(9, 5, 2), J(0.3, 0, 0, 0.3)),
          x(E(), n(0, 0, -7).scale(2, 5, 9), J(0.3, 0, 0, 0.3)),
        ));
        L(x(E(28, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)));
        L(x(E(5), n(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)));
      });
      L(U(
        x(E(), n(-82.07, 0.8, 106).scale(11, 0.9, 2.2), J(0.7, 0.7, 0.7, 0.1)),
        x(E(45, 1), n(-81, 0.7, 106).scale3d(7.7), J(0.7, 0.7, 0.7, 0.1)),
      ));
      L(E(), n(-58, 1, 106).scale(2, 0.65, 2), J(0.7, 0.7, 0.7, 0.2));
      L(E(), n(-50.7, 1, 99).scale(2, 0.65, 1), J(0.7, 0.7, 0.7, 0.2));
      L(E(), n(-42, 0.4, 91).scale(5, 1, 2.5), J(0.7, 0.7, 0.7, 0.3));
      L(E(), n(-34.2, 0.4, 91).scale(3, 1, 3), J(0.7, 0.7, 0.7, 0.3));
      L(E(5), n(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), J(0.2, 0.5, 0.5, 0.6));
      Mb(n(-34, 2.7, 96).rotate(-12, 0));
      [J(0.1, 0.55, 0.45, 0.2), J(0.2, 0.5, 0.5, 0.3), J(0.3, 0.45, 0.55, 0.4)].map((f, u) =>
        N(() => {
          L(E(), n(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), f);
          2 === u && L(E(), n(-29.1, 0.4, 91).scale(2.1, 1, 3), J(0.7, 0.7, 0.7, 0.3));
          1 === u && L(E(), n(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), J(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => L(q, n(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
      qb(
        3,
        f =>
          L(
            l(24.7 - 0.7 * (1 & f)),
            n(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? J(0.5, 0.5, 0.5, 0.3) : J(0.35, 0.35, 0.35, 0.5),
          ),
      );
      L(U(
        x(E(6, 0, 0, 0.3), n(0, -0.92, 95).scale(14, 2, 14), J(0.8, 0.8, 0.8, 0.2)),
        x(E(5), n(0, 0, 95).scale3d(6), J(0.3, 0.3, 0.3, 0.5)),
      ));
      Mb(n(0, 1.7, 82).rotate(0, 180));
      L(E(5), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), J(0.5, 0.3, 0.3, 0.4));
      L(E(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), J(0.5, 0.6, 0.7, 0.3));
      L(E(), n(0, 16, 129).scale(1.5, 1, 2), J(0.5, 0.6, 0.7, 0.3));
      L(E(7), n(0, 16.2, 133).scale(5, 1, 5), J(0.4, 0.5, 0.6, 0.4));
      L(U(
        $b(
          x(E(), n(0, 16, 110.5).scale(12, 1, 3), J(0.5, 0.3, 0.3, 0.4)),
          x(E(), n(0, 16, 111).scale(3, 1, 3.8), J(0.5, 0.3, 0.3, 0.4)),
        ),
        x(E(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), J(0.5, 0.3, 0.3, 0.4)),
      ));
      N(() => {
        L(E(3), n(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), J(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(f => {
          L(E(6), n(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), J(0.7, 0.7, 0.7, 0.4));
          L(E(), n(0, 6.2, f + 95).scale(0.5, 11, 0.5), J(0.5, 0.3, 0.3, 0.4));
        });
      });
      N(() => {
        L(E(5), m.scale(5, 1.1, 5), J(0.5, 0.3, 0.3, 0.4));
        L(E(5), m.scale(5.5, 0.9, 5.5), J(0.25, 0.25, 0.25, 0.4));
        Mb(n(0, 1.5, -1).rotate(0, 180));
      });
      Nb(n(0, 3, 95), ...vb(9).map(({ x: f, z: u }) => [9 * f, 9 * u, 4]));
      Nb(n(0, 19, 134), [0, 0, 3.5]);
    });
    N(() => {
      L(xb(20), n(0, 1).scale3d(0.5), J(1, 0.3, 0.4));
      L(xb(30), m.scale(0.65, 0.8, 0.55), J(1, 0.3, 0.4));
      L(E(), n(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), J(0.3, 0.3, 0.3));
      [-1, 1].map(l => {
        L(q, m.rotate(0, 0 < l ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), J(1, 1, 0.8));
        L(
          x(U(E(15, 1), x(E(), n(0, 0, 1).scale(2, 2, 0.5))), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), J(0.3, 0.3, 0.3)),
          n(0.2 * l, 1.2, 0.4).rotate(0, 20 * l, 20 * l),
        );
        N(() => {
          L(E(20, 1), n(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), J(1, 0.3, 0.4));
        });
      });
    });
    N(() => {
      L(E(6).slice(0, -1), m.scale(0.77, 1, 0.77), J(1, 0.3, 0.5));
    }, 0);
    N(() => {
      L(
        xb(30, 24, (l, w, y) => {
          const B = w / 24, z = l * Math.PI * 2 / 30, f = Math.sin(B ** 0.6 * Math.PI / 2);
          l = B * B * Math.sin(l * Math.PI * 14 / 30) / 4;
          return 23 < w
            ? { x: y.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(z) * f,
              y: Math.cos(B * Math.PI) - B - l,
              z: Math.sin(z) * f + Math.sin(l * Math.PI * 2) / 4,
            };
        }),
        m.scale(0.7, 0.7, 0.7),
        J(1, 1, 1),
      );
      [-1, 1].map(l => L(xb(12), n(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    N(() => {
      L(E(6, 1), m.scale(0.14, 1.4, 0.14), J(0.3, 0.3, 0.5, 0.1));
      L(E(10), n(0, 1).scale(0.21, 0.3, 0.21), J(1, 0.5, 0.2));
      L(E(3), n(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), J(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
