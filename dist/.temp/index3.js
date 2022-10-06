let ba,
  ca,
  da,
  fa,
  ha,
  ka,
  la,
  ma,
  na,
  oa,
  pa,
  ra,
  sa,
  ta,
  ua,
  va,
  wa,
  za,
  c = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ha = 0,
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
const $a = NO_INLINE((a, b) => a < b ? a : b),
  ab = NO_INLINE((a, b) => b < a ? a : b),
  bb = (a, b) => (0 > a ? -a : a) > b ? a : 0,
  e = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a,
  cb = a => Math.atan2(Math.sin(a * La), Math.cos(a * La)) / La,
  db = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * e(f) || 0,
  eb = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0,
  fb = (a, b) => (a = e(a), eb(a, 1 - a, b)),
  gb = (a, b, f = 0) => Math.sqrt(a * a + b * b + f * f),
  lb = (a = 0, b = 0, f = 0, k = 1) => {
    hb = h.m11 * a + h.m21 * b + h.m31 * f + h.m41 * k;
    ib = h.m12 * a + h.m22 * b + h.m32 * f + h.m42 * k;
    jb = h.m13 * a + h.m23 * b + h.m33 * f + h.m43 * k;
    kb = h.m14 * a + h.m24 * b + h.m34 * f + h.m44 * k;
  };
var hb, ib, jb, kb;
const nb = (
    a,
    b = mb,
    f = 0,
  ) => (f *= 16,
    b[f++] = a.m11,
    b[f++] = a.m12,
    b[f++] = a.m13,
    b[f++] = a.m14,
    b[f++] = a.m21,
    b[f++] = a.m22,
    b[f++] = a.m23,
    b[f++] = a.m24,
    b[f++] = a.m31,
    b[f++] = a.m32,
    b[f++] = a.m33,
    b[f++] = a.m34,
    b[f++] = a.m41,
    b[f++] = a.m42,
    b[f++] = a.m43,
    b[f] = a.m44,
    b),
  ob = (
    a = l,
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
  n = NO_INLINE((a, b, f) => l.translate(a, b, f)),
  pb = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  qb = (a, b, f) => (a.C = f, a.u = b, a),
  tb = (a, b, f = a.u) => (ob(b), qb(a.map(({ x: k, y: q, z: m }) => (lb(k, q, m), { x: hb, y: ib, z: jb })), f, a.C)),
  z = (a, b, f) => a.map(k => tb(k, b, f)),
  ub = (a, b = 0) =>
    pb(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - b : k + b };
    }),
  vb = (a, b, f) =>
    a.map((k, q, { length: m }) => qb([k, b[m - q - 1], b[m - (q + 1) % m - 1], a[(q + 1) % m]], a.u, f)),
  G = (
    a,
    b,
    f = 0,
    k,
  ) => (a = a ? ub(a, k) : Sa,
    k = tb(a, n(0, 1).scale3d(0 < f ? f : 1)),
    a = tb(a, n(0, -1).scale3d(0 > f ? -f : 1)).reverse(),
    [...vb(a, k, b), k, a]),
  wb = (
    a,
    b = a,
    f = (
      k,
      q,
    ) => (q *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(k) * Math.sin(q) }),
  ) => {
    const k = [];
    for (let q = 0; a > q; q++) {
      for (let m = 0; b > m; m++) {
        const x = qb([], 0, 1);
        k.push(x);
        x.push(f(q, m, x));
        m && x.push(f((q + 1) % a, m, x));
        b - 1 > m && x.push(f((q + 1) % a, m + 1 % b, x));
        x.push(f(q, m + 1 % b, x));
      }
    }
    return k;
  },
  xb = NO_INLINE(a => 1 - Math.exp(-a * da)),
  H = NO_INLINE((a, b, f) => eb(a, b, xb(f))),
  yb = () => {
    h3.innerHTML = "Souls: "
      + [
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
      ][Ba = Na.reduce((a, { i: b }) => a + b, 0)] + " / XIII";
  },
  zb = () => {
    localStorage.DanteSP22 = JSON.stringify([d.map(({ i: a }) => a), Na.map(({ i: a }) => a), Da, c, ha]);
  },
  M = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  Ab = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Bb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Cb = a => Math.sin(a * Math.PI * 2),
  Fb = a => 0.5 > a % 1 ? 1 : -1,
  Gb = a => a % 1 * 2 - 1,
  Hb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Ib = a => {
    let b = 0;
    const f = () => {
        let m = 0;
        const x = L => {
            let K, W, Ga, ia = 0, ja = 0;
            const aa = [],
              qa = new Int32Array(768 * L),
              dc = 2 ** (r - 9) / L,
              ec = Math.PI * 2 ** (t - 8) / L,
              Db = F * L & -2;
            for (let rb = 0; 11 >= rb; ++rb) {
              for (
                let sb = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + rb];
                32 > sb;
                ++sb
              ) {
                const Pb = (32 * rb + sb) * L;
                for (var Oa = 0; 4 > Oa; ++Oa) {
                  if (K = 0, Ob && (K = B[Ob - 1].charCodeAt(sb + 32 * Oa) - 40, K += 0 < K ? 106 : 0), K) {
                    var ea;
                    if (!(ea = aa[K])) {
                      ea = K;
                      let X = void 0, xa = void 0;
                      var Qb = K;
                      let fc = 0, gc = 0;
                      const hc = 2 > b ? Gb : Cb, ic = 2 > b ? 1 > b ? Fb : Hb : Cb, Rb = new Int32Array(O + P + I);
                      for (let Pa = 0, Eb = 0; O + P + I > Pa; ++Pa, ++Eb) {
                        let Qa = 1;
                        O > Pa ? Qa = Pa / O : O + P > Pa || (Qa = (1 - (Qa = (Pa - O - P) / I)) * 3 ** (-p / 16 * Qa));
                        0 > Eb
                          || (Eb -= 4 * L,
                            xa = 0.00396 * 2 ** ((Qb + C - 256) / 12),
                            X = 0.00396 * 2 ** ((Qb + v - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Rb[Pa] = 80
                            * (hc(fc += xa * Qa ** (E / 32)) * A + ic(gc += X * Qa ** (D / 32)) * g
                              + (Q ? (2 * Math.random() - 1) * Q : 0))
                            * Qa | 0;
                      }
                      ea = aa[ea] = Rb;
                    }
                    for (let X = 0, xa = 2 * Pb; ea.length > X; ++X, xa += 2) {
                      qa[xa] += ea[X];
                    }
                  }
                }
                for (let X, xa = 0; L > xa; ++xa) {
                  Oa = 0;
                  ea = 2 * (Pb + xa);
                  var ya = (((X = qa[ea]) || Ga)
                    && (W = 0.00308 * w,
                      1 !== b && 4 !== b || (W *= Math.sin(dc * ea * Math.PI * 2) * J / 512 + 0.5),
                      W = 1.5 * Math.sin(W),
                      ia += W * ja,
                      ya = (1 - T / 255) * (X - ja) - ia,
                      ja += W * ya,
                      X = 4 === b ? ja : 3 === b ? ya : ia,
                      b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5),
                      X *= S / 32,
                      Ga = 1e-5 < X * X,
                      ya = Math.sin(ec * ea) * u / 512 + 0.5,
                      Oa = X * (1 - ya),
                      X *= ya),
                    ea < Db || (Oa += qa[1 + ea - Db] * y / 255, X += qa[ea - Db] * y / 255),
                    m + ea >> 1);
                  k[ya] += (qa[ea] = Oa) / 65536;
                  q[ya] += (qa[++ea] = X) / 65536;
                }
              }
            }
            m += 768 * L;
          },
          B = Ta[b],
          [A, C, E, g, v, D, Q, O, P, U, p, r, w, T, S, u, t, y, F, J] = Ua[b],
          I = 4 * U ** 2;
        x(5513);
        x(4562);
        x(3891);
        Bb(5 > ++b ? f : a);
      },
      k = (ka = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      q = ka.getChannelData(1);
    Bb(f);
  },
  Jb = () => {
    let a, b, f, k, q, m, x, B, A, C, E, g, v, D, Q, O, P = !0;
    const U = [],
      p = () => {
        b4.innerHTML = "Music: " + P;
        O && (ca || !P ? O.disconnect() : O.connect(Q.destination));
      },
      r = () => {
        const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        oa = [Ab(0.3, 55, u, 1.732051), Ab(55, 181, u, 1.732051)];
        na = Ab(0.3, 181, u, 1.732051);
        k = B = void 0;
        U.length =
          la =
          D =
          g =
          v =
          Ea =
          Fa =
            0;
      },
      w = u => {
        if (ca !== u) {
          if (ca = u, r(), document.body.className = u ? "l m" : "l", u) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          p();
        }
      },
      T = u => {
        try {
          Q || (Q = new AudioContext(), (O = Q.createBufferSource()).buffer = ka, O.loop = !0, O.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        w(!1);
        ma = u;
      },
      S = (u, t) => u.buttons[t]?.pressed || 0 < u.buttons[t]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      T();
    };
    b2.onclick = () => {
      T(1);
    };
    b5.onclick = () => w(!0);
    b4.onclick = () => {
      P = !P;
      p();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = u => {
      if (!ca && (u.target === hC && (la = 1), ma)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = u => {
      let t;
      u.repeat
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
        }[u.code],
          (U[t] = !!u.type[5] && !0) && (0 === t && (la = 1), 1 === t && w(!0)));
    };
    onmousemove = ({ movementX: u, movementY: t }) => {
      ma && (u || t) && (Za += 0.1 * u, Ya += 0.1 * t);
    };
    hC.ontouchstart = u => {
      if (!ca) {
        for (let { pageX: t, pageY: y, identifier: F } of u.changedTouches) {
          ma && t > hC.clientWidth / 2
            ? void 0 === B && (A = 0, m = t, x = y, B = F, E = Ya, C = Za)
            : void 0 === k && (q = 0, b = t, f = y, k = F);
        }
        a = Aa;
      }
    };
    hC.ontouchmove = u => {
      if (!ca) {
        for (let { pageX: I, pageY: L, identifier: K } of u.changedTouches) {
          var t, y, F, J;
          B === K && (Ya = E + (L - x) / 2.3, Za = C + (I - m) / 2.3, A = 1);
          k === K
            && (K = (b - I) / 20,
              t = 0 > K ? -K : K,
              y = (f - L) / 20,
              F = 0 > y ? -y : y,
              (J = 0.5 < ab(t, F)) && (q = 1),
              g = (J && 0.3 < t) * e(K, -1),
              v = (J && 0.3 < F) * e(y, -1),
              2 < t && (b = 20 * (0 > K ? -1 : 1) + I),
              2 < F && (f = 20 * (0 > y ? -1 : 1) + L));
        }
      }
    };
    hC.ontouchend = u => {
      let t;
      document.activeElement === document.body && u.preventDefault();
      for (const y of u.changedTouches) {
        y.identifier === B
          ? (B = void 0, A || (t = 1), A = 0)
          : y.identifier === k
          ? (k = void 0, v = g = 0, q || (t = 1), q = 0)
          : t = 1;
      }
      u.target === hC && t && a && 0.02 < (u = Aa - a) && 0.7 > u && (la = 1);
    };
    pa = () => {
      Ea = v + (U[4] ? 1 : 0) - (U[5] ? 1 : 0);
      Fa = g + (U[2] ? 1 : 0) - (U[3] ? 1 : 0);
      let u = navigator.getGamepads()[0];
      u
        && (ma && (Ya += da * bb(u.axes[3], 0.3) * 80, Za += da * bb(u.axes[2], 0.3) * 80),
          Ea += S(u, 12) - S(u, 13) - bb(u.axes[1], 0.2),
          Fa += S(u, 14) - S(u, 15) - bb(u.axes[0], 0.2),
          S(u, 9) && w(!0),
          (u = S(u, 3) || S(u, 2) || S(u, 1) || S(u, 0)) && !D && (la = 1),
          D = u);
    };
    document.onvisibilitychange = onblur = onresize = r;
    w(!0);
  },
  N = (a, b = new DOMMatrix(), f) => ra.o.push(...z(a, b, f)),
  R = (a, b = 1) => {
    const f = ra;
    Ra.push(ra = { m: new DOMMatrix(), G: b, o: [] });
    a();
    ra = f;
  },
  Kb = a => {
    const b = ra,
      f = d.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = H(k.g, k.i, 4);
          k.h = H(k.h, k.i, 1);
          ob(b.m).multiplySelf(a);
          la && 3 > (lb(), gb(Va - hb, Wa - ib, Xa - jb)) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, f && 1 / 0 > Ka && (Ka = c + 1, h4.innerHTML = "* click *"), Da = f, zb());
          !f && k.i && 0.8 < k.g && (k.i = 0,
            13 > Ba
              ? 1 / 0 > Ka && (Ka = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : Ca
                || (1 / 0 > Ka
                  && (Ka = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  Ca = 1));
          h.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    d.push(k);
    N(G(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
    N(G(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
    N(G(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), M(0.5, 0.5, 0.4));
  },
  Lb = (a, ...b) => {
    let f, k, q, m = 0, x = 0, B = 1, A = 3, C = -1;
    const E = {
        i: 0,
        F() {
          if (!E.i) {
            var r, w;
            let T, S, u, t = 1, y = 1 / 0;
            for (let F = 0; g > F; F++) {
              const J = b[F], I = gb(D - J[0], Q - J[1]), L = I - J[2];
              u ||= 0 > L;
              0 < L && y > L && (y = L, v = J);
              t = $a(t, I / J[2]);
            }
            u
              || (r = D - v[0],
                w = Q - v[1],
                T = gb(r, w),
                S = Math.atan2(-w, r),
                B && (x = (Math.random() - 0.5) * Math.PI / 2, A = e(A / (1 + Math.random()))),
                S += x,
                C = -Math.cos(S),
                m = Math.sin(S),
                0.1 < T && (T = $a(T, v[2]) / T, D = r * T + v[0], Q = w * T + v[1]));
            B = u;
            A = H(A, 6 * (1 - t) + 3, t + 3);
            O = H(O, D = H(D, D + C, A), A);
            P = H(P, Q = H(Q, Q + m, A), A);
            f = db(f, Math.atan2(O - k, P - q) / La - 180, xb(3));
            ob(U).multiplySelf(a).translateSelf(k = O, 0, q = P).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
            1.6 > (lb(), gb(Va - hb, Wa - ib, Xa - jb))
              && (E.i = 1,
                r = [
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
                1 / 0 > Ka && (Ka = c + (Ba && 12 > Ba ? 5 : 7), h4.innerHTML = r),
                yb(),
                zb());
          }
          E.i
            && (r = ob(Ra[2].m),
              w = p % 4 - 2,
              r.translateSelf.call(
                r,
                p % 4 * 1.2 - 1.7 + Math.sin(c + p) / 7,
                -2,
                1.7 * (p / 4 | 0) - 5.5 + (0 > w ? -w : w) + Math.cos(c / 1.5 + p) / 6,
              ));
        },
      },
      g = b.length;
    let v = b[0], [D, Q] = v, O = D, P = Q;
    const U = ra.m, p = Na.length;
    Na.push(E);
  },
  Mb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  Nb = a => {
    let b, f = 0, k = 0, q = 0, m = a.at(-1);
    for (b of a) {
      f += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), q += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = gb(f, k, q), f /= b, k /= b, q /= b, { x: f, y: k, z: q, w: f * m.x + k * m.y + q * m.z };
  },
  Sb = (a, b) => {
    var f, k, q, m = b.B;
    for (var x = 0; m.length > x; ++x) {
      if (-0.00008 > (f = Mb(a, m[x]) - a.w) ? q = b : 8e-5 < f && (k = b), q && k) {
        k = [];
        q = [];
        m = b.B;
        x = b.v;
        let B = m.at(-1), A = Mb(a, B) - a.w;
        for (const C of m) {
          f = Mb(a, C) - a.w,
            8e-5 > A && q.push(B),
            -0.00008 < A && k.push(B),
            (8e-5 < A && -0.00008 > f || -0.00008 > A && 8e-5 < f)
            && (A /= f - A,
              B = { x: B.x + (B.x - C.x) * A, y: B.y + (B.y - C.y) * A, z: B.z + (B.z - C.z) * A },
              k.push(B),
              q.push(B)),
            B = C,
            A = f;
        }
        return {
          l: 2 < k.length && { B: qb(k, m.u, m.C), v: x, A: b },
          j: 2 < q.length && { B: qb(q, m.u, m.C), v: x, A: b },
        };
      }
    }
    return { l: k, j: q };
  },
  Tb = (a, b, f = Nb(b.B)) => {
    let k, q;
    return a
      ? ({ l: k, j: q } = Sb(a, b), k || q || a.o.push(b), k && (a.l = Tb(a.l, k, f)), q && (a.j = Tb(a.j, q, f)))
      : a = { x: f.x, y: f.y, z: f.z, w: f.w, o: [b], l: 0, j: 0 },
      a;
  },
  Ub = (a, b, f) => {
    const k = [],
      q = (m, x) => {
        let { l: B, j: A } = Sb(m, x);
        B || A || (0 < f * Mb(m, b) ? B = x : A = x);
        B && (m.l ? q(m.l, B) : k.push(B));
        A && m.j && q(m.j, A);
      };
    for (const m of b.o) {
      q(a, m);
    }
    return k;
  },
  Vb = (a, b) => a && (b(a), Vb(a.l, b), Vb(a.j, b)),
  Wb = a => (Vb(a, b => {
    const f = b.j;
    b.j = b.l;
    b.l = f;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.o) {
      k.v = !k.v;
    }
  }),
    a),
  Xb = a => a.length ? a.reduce((b, f) => Tb(b, { B: f, v: 0, A: 0 }), 0) : a,
  Yb = (...a) =>
    a.reduce((b, f) => {
      const k = [];
      if (b = Xb(b), f) {
        f = Xb(f);
        Vb(b, q => q.o = Ub(f, q, 1));
        Vb(f, q => k.push([q, Ub(b, q, -1)]));
        for (let [q, m] of k) {
          for (const x of m) {
            Tb(b, x, q);
          }
        }
      }
      return b;
    }),
  V = (a, ...b) => {
    const f = m => {
        let x;
        return m.A && ((x = k.get(m.A)) ? (q.delete(x), m = f(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      q = new Map();
    return a = Wb(Yb(Wb(Xb(a)), ...b)),
      Vb(a, m => {
        for (const x of m.o) {
          q.set(f(x), x.v);
        }
      }),
      Array.from(q, ([{ B: m }, x]) => {
        const B = m.map(({ x: A, y: C, z: E }) => ({ x: A, y: C, z: E }));
        return qb(x ? B.reverse() : B, m.u, m.C);
      });
  },
  Y = () => ob(l, Ra[++sa].m),
  $b = () => {
    let a, b, f, k, q, m, x, B, A, C, E, g, v, D, Q = 0, O = 0, P = 0, U = 1, p = 2, r = 15;
    const w = () => ob((p ? d[Da] : Ra[E && 1 === Ra[E].G && E || 0]).m),
      T = t => {
        1 < p ? (ob(d[Da].m).multiplySelf(d[Da].H), lb(0, Da || 0.9 < fa ? 15 : 1, -2.4)) : (w(), lb(Q, O, P));
        t && (q = (hb - Va) / da, m = (jb - Xa) / da);
        Va = hb;
        Wa = ib;
        Xa = jb;
      },
      S = () => {
        var t = 0, y = 0, F = 0, J = 0, I = 0, L = 0, K = -1;
        for (var W = 0; 36 > W; ++W) {
          var Ga = 512 * W;
          for (var ia = 96; 416 > ia; ia += 4) {
            for (var ja = 0; 2 > ja; ++ja) {
              var aa = Zb[Ga + ia + ja];
              const qa = Zb[Ga + ia + ja + 2];
              aa > J && (J = aa);
              aa + qa && (0 > K || K === W) && (K = W, qa === C ? ++t : y && y !== qa || (y = qa, ++F));
            }
          }
        }
        C = 0 > K ? 0 : F > 2 * t ? y : C;
        for (t = 36; 128 > t; ++t) {
          W =
            K =
            F =
            y =
              0;
          Ga = 512 * t;
          for (ia = 0; 128 > ia; ++ia) {
            ja = Ga + 4 * ia,
              aa = Zb[ja],
              64 > ia ? aa > y && (y = aa) : aa > F && (F = aa),
              (aa = Zb[2 + ja]) > K && (K = aa),
              aa = Zb[1 + ja],
              64 < ia ? aa > y && (y = aa) : aa > F && (F = aa),
              (aa = Zb[3 + ja]) > W && (W = aa);
          }
          (F -= y) * F > I * I && (I = F);
          (W -= K) * W > L * L && (L = W);
        }
        B = e(1 - 0.02 * ab(0 > I ? -I : I, 0 > L ? -L : L));
        I /= 255;
        J /= 255;
        L /= 255;
        w().invertSelf();
        lb(I, J, L, 0);
        Q += hb;
        O += J;
        P += jb;
        T();
      },
      u = (t, y, F, J) => {
        var I;
        (I = U) || (I = y - t, I = (e((0 > I ? -I : I) ** .5 - F) + 1 / 7) * xb(1.5 * J));
        return eb(t, y, I);
      };
    ta = () => {
      T(C);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Zb);
      NO_INLINE(S)();
      !p && C === E || (E = C, w().invertSelf(), lb(Va, Wa, Xa), Q = hb, O = ib, P = jb);
      p = p && (C ? 0 : 1);
      (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (p = 2);
      1 === C && (d[9].i = -15 > Va && 0 > Xa ? 1 : 0);
      var t = H(A, Wa, 2), y;
      (y = p) || (y = A - Wa, y = 8 * (0 > y ? -y : y));
      A = eb(t, Wa, y);
      g = u(g, Va, 0.5, 1);
      v = u(v, A, 2, 1);
      D = u(D, Xa, 0.5, 1);
      k = H(k, ua * (27 < C && 32 > C), 2);
      ma
        ? (t = p + xb(18), Ha = eb(Ha, Va, t), Ja = eb(Ja, Xa, t), Ia = eb(Ia, A + 1.5, t), Za = cb(Za))
        : (Ha = u(Ha, g, 1, 2 + k),
          Ja = u(Ja, D + -18 + 5 * k, 1, 2 + k),
          Ia = u(Ia, ab(v + e((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          t = D - Ja,
          t = $a(-6, -(0 > t ? -t : t)),
          y = g - Ha,
          Za = db(Za, 90 - cb(Math.atan2(t, y) / La), U + xb(10)),
          Ya = db(Ya, 90 - Math.atan2(gb(t, y), Ia - v) / La, U + xb(10)));
      Ya = e(Ya, -87, 87);
      U = 0;
      t = e(Ea, -1);
      y = e(Fa, -1);
      var F = bb(gb(t, y) ** 0.5, 0.1), J = Math.atan2(t, y);
      t = F * (0 > t ? -t : t) * Math.sin(J);
      y = F * (0 > y ? -y : y) * Math.cos(J);
      F && (a = 90 - J / La);
      b = db(b, a, xb(8));
      f = H(f, F, 10);
      Y().translateSelf(Va, 0.06 * f * Math.cos(18.2 * c) + A, Xa).rotateSelf(0, b);
      for (J = 0; 2 > J; ++J) {
        var I = 9.1 * c - Math.PI * J;
        ob(Ra[37].m, Y()).translateSelf(0, f * e(0.45 * Math.sin(I - Math.PI / 2))).rotateSelf(
          f * Math.sin(I) * 0.25 / La,
          0,
        );
      }
      r = C ? 5 : H(r, p ? 13 : 19 - 2 * $a(0, Wa + 10), 2.2);
      q = C || p ? 0 : H(q, 0, 3);
      m = C || p ? 0 : H(m, 0, 3);
      x = p ? 0 : H(x, C ? 7 * e(2 * F) * B : 0, C ? 9 : 1);
      J = ma ? (180 + Za) * La : 0;
      F = da * (q + x * (y * Math.cos(J) - t * Math.sin(J)));
      I = -r * da;
      t = da * (m + x * (y * Math.sin(J) + t * Math.cos(J)));
      w().invertSelf();
      lb(F, I, t, 0);
      Q += hb;
      O += I;
      P += jb;
      T();
    };
  },
  ac = (a, b, f, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  jc = (a, b, f) => {
    ca
      ? 1100 < hC.width
        && (ob().rotateSelf(0, 40 * Math.sin(Aa) - 80, -8),
          nb(h, bc, 36),
          nb(h, bc, 37),
          nb(h, bc, 38),
          Z.uae(a, !1, bc),
          Z.d97(4, Ra[39].D - Ra[37].s, 5123, 2 * Ra[37].s))
      : (Z.uae(a, !1, cc),
        Z.das(4, Ra[f].D - Ra[f].s, 5123, 2 * Ra[f].s, Na.length),
        Z.das(4, Ra[42].D - Ra[42].s, 5123, 2 * Ra[42].s, d.length),
        Z.uae(a, !1, bc),
        Z.d97(4, (b ? Ra[39].D : Ra[37].s) - 3, 5123, 6));
  },
  kc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  lc = (a, b) => {
    const f = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, kc(b, 35632)), Z.l8l(k), q => q ? f[q] || (f[q] = Z.gan(k, q)) : Z.u7y(k);
  },
  h = new DOMMatrix(),
  l = new DOMMatrix(),
  mb = new Float32Array(16),
  bc = new Float32Array(624),
  cc = new Float32Array(624),
  Zb = new Uint8Array(65536),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Bb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const q = [new Float32Array(16), new Float32Array(16)],
          m = p => {
            requestAnimationFrame(m);
            var r = (p - (ba || p)) / 1e3;
            if (Aa += r, c += da = ca ? 0 : $a(0.066, r), ba = p, 0 < da) {
              pa();
              Ka && c > Ka && (Ka = 0, h4.innerHTML = "");
              fa = H(fa, Ca ? H(fa, -9, 1.5) : e(c / 3), 1);
              p = 2 * d[9].h - 1;
              ha = H(ha, d[9].h, 0.2 + 0.3 * (0 > p ? -p : p));
              sa = 1;
              ua = fb(d[12].g, d[13].g);
              za = eb(H(za, 0, 1), cb(za + 60 * da), d[5].g - d[6].h);
              va = eb(H(va, 0, 5), cb(va + 56 * da), ua);
              wa = eb(H(wa, 0, 4), cb(wa + 48 * da), ua);
              ac(Y(), -12, 4.2, 40 * fa - 66);
              Y().translateSelf(0, 0, -15).scaleSelf(1, e(1.22 - d[1].g), 1);
              Y().translateSelf(0, 0, 15).scaleSelf(1, e(1.22 - d[2].g), 1);
              Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, e(1.1 - d[6].g), 1);
              Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
              Y().translateSelf(
                0,
                0.01 > d[3].g ? -500 : (1 - d[2].g) * d[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (d[3].g - 1),
                0,
              );
              p = $a(1 - d[4].h, d[2].h);
              Y().translateSelf(p * Math.sin(c / 1.5 + 2) * 12);
              Y().translateSelf(p * Math.sin(0.7 * c + 2) * 12);
              Y().translateSelf(p * Math.sin(c + 3) * 8.2);
              Y().translateSelf(9.8 * (1 - p));
              p = e(1 - 5 * p) * fb(d[4].g, d[5].g);
              Y().translateSelf(0, p * Math.sin(1.35 * c) * 4);
              Y().translateSelf(0, 0, p * Math.sin(0.9 * c) * 8);
              Y().translateSelf(0, -6.5 * d[4].h);
              Y().translateSelf(-75, (1 - d[5].h) * (1 - d[6].g) * 3, 55).rotateSelf(180 * (1 - d[5].h) + za, 0);
              p = fb(d[7].h, d[6].h);
              Y().translateSelf(0, 5 * p * Math.sin(c) + 3.5 * (1 - ab(d[6].g, d[7].g)));
              Y().translateSelf(0, 6 * p * Math.sin(c + 3), 6 * p * Math.sin(0.6 * c + 1));
              Y().translateSelf(0, -7.3 * d[7].h);
              ac(Y(), -123, 1.4, 55 + -65 * ha);
              p = fb(d[10].g, d[11].g);
              r = Y();
              var w = Math.sin(1.1 * c);
              r.translateSelf.call(r, 0, -2, p * (0 > w ? -w : w) * -8.5 + 10);
              r = Y();
              w = Math.sin(2.1 * c);
              r.translateSelf.call(r, 0, -2, p * (0 > w ? -w : w) * -8.5 + 10);
              r = Y();
              w = Math.sin(1.5 * c);
              r.translateSelf.call(r, 0, -2, 10 - 8.5 * ab(p * (0 > w ? -w : w), (1 - d[10].g) * (1 - p)));
              p = fb(d[8].h, d[12].h);
              for (r = 0; 4 > r; r++) {
                Y().translateSelf(
                  (2 < r ? 2 * (1 - p) + p : 0) - 100,
                  p * Math.sin(1.3 * c + 1.7 * r) * (3 + r / 3) + 0.7,
                  115 - 7 * (1 - d[8].h) * (1 - d[12].h) * (1 & r ? -1 : 1)
                    + ab(0.05, p) * Math.cos(1.3 * c + 7 * r) * (4 - 2 * (1 - r / 3)),
                );
              }
              Y().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - d[8].g) - p * Math.sin(0.8 * c) - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * p + 3), 0);
              Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + va);
              Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, wa);
              Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
              Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
              p = fb(d[13].h, d[14].h);
              for (r = 0; 3 > r; ++r) {
                Y().translateSelf(0, p * Math.sin(1.5 * c + 1.5 * r) * 4 + (r ? 0 : (1 - d[13].h) * (1 - d[14].h)));
              }
              Y().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              r = fb(fb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2);
              Y().translateSelf(0, 16 * r, 95 + 8.5 * e(2 * r - 1));
              for (p = 0; 13 > p; ++p) {
                Na[p].F(), nb(h, cc, p);
              }
              for (p = 0; 16 > p; ++p) {
                d[p].F(), nb(h, cc, p + 13), cc[223 + 16 * p] = 1 - d[p].g;
              }
              ta();
              for (p = 0; sa >= p; ++p) {
                nb(Ra[p].m, bc, p - 1);
              }
              v();
              Z.b6o(36160, U);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              Z.uae(v("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa)));
              jc(v("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(v("b"), !1, nb(ob().translateSelf(-Va, -Wa, -Xa - 0.3)));
              jc(v("c"), 0, 40);
              la = 0;
            }
            p = Ha;
            r = Ia;
            w = Ja;
            ca
              ? (ob(na).invertSelf(),
                lb(3.6, 3.5),
                p = hb,
                r = ib,
                w = 5,
                ob(l, B).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -r, -w).rotateSelf(0, 99))
              : ob(l, B).rotateSelf(-Ya, -Za).invertSelf().translateSelf(-p, -r, -w);
            E();
            Z.b6o(36160, O);
            Z.v5y(0, 0, 2048, 2048);
            Q[0](54.7 * 1.1);
            Q[1](126 * 1.1);
            D();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(D("a"), !1, nb(na));
            Z.uae(D("b"), !1, nb(B));
            Z.uae(D("i"), !1, q[0]);
            Z.uae(D("j"), !1, q[1]);
            Z.ubu(D("k"), p, r, w);
            jc(D("c"), !ma, 41);
            g();
            Z.ubu(g("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, Aa);
            Z.ubu(g("k"), p, r, w);
            Z.uae(g("b"), !1, nb(ob(B).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, U);
            Z.f1s();
          },
          x = new DOMMatrix(),
          B = new DOMMatrix(),
          A = f,
          C = pb(8, () => ({}));
        var k = kc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const E = lc(
            kc(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          g = lc(
            kc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          v = lc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          D = lc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          Q = pb(2, p => {
            const r = Z.c25();
            return Z.a4v(33984 + p),
              Z.b9j(3553, r),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              w => {
                let T = 0, S = 0, u = 0, t = 1 / 0, y = 1 / 0, F = 1 / 0, J = -1 / 0, I = -1 / 0, L = -1 / 0;
                Z.fas(36160, 36096, 3553, r, 0);
                Z.c4s(256);
                ob().scale3dSelf(w).multiplySelf(ob(oa[p], x).multiplySelf(B).invertSelf());
                for (let K = 0; 8 > K; ++K) {
                  const W = C[K];
                  lb(4 & K ? 1 : -1, 2 & K ? 1 : -1, 1 & K ? 1 : -1);
                  T -= W.x = (0 | hb) / (w * kb);
                  S -= W.y = (0 | ib) / (w * kb);
                  u -= W.z = (0 | jb) / (w * kb);
                }
                ob().rotateSelf(298, 139).translateSelf(T / 8, S / 8, u / 8);
                for (w = 0; 8 > w; ++w) {
                  const { x: K, y: W, z: Ga } = C[w];
                  lb(K, W, Ga);
                  t = $a(t, hb);
                  J = ab(J, hb);
                  y = $a(y, ib);
                  I = ab(I, ib);
                  F = $a(F, jb);
                  L = ab(L, jb);
                }
                w = 10 + p;
                F *= 0 > F ? w : 1 / w;
                L *= 0 < L ? w : 1 / w;
                Z.uae(
                  E("b"),
                  !1,
                  nb(
                    ob(l, x).scaleSelf(2 / (J - t), 2 / (I - y), 2 / (F - L)).translateSelf(
                      (J + t) / -2,
                      (I + y) / -2,
                      (F + L) / 2,
                    ).multiplySelf(h),
                    q[p],
                  ),
                );
                jc(E("c"), !ma, 41);
              };
          }),
          O = Z.c5w();
        k = Z.c25();
        const P = Z.c3z(), U = Z.c5w();
        v();
        Z.uae(v("a"), !1, nb(Ab(1e-4, 2, 1.4, 0.4)));
        D();
        Z.ubh(D("q"), 2);
        Z.ubh(D("h"), 1);
        Z.ubh(D("g"), 0);
        g();
        Z.ubh(g("q"), 2);
        Z.b6o(36160, O);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, U);
        Z.bb1(36161, P);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, P);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, A);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Jb)();
        NO_INLINE($b)();
        requestAnimationFrame(m);
      }
    },
    f = new Image();
  f.onload = f.onerror = b;
  f.src = Ma;
  NO_INLINE(Ib)(() => {
    Bb(() => {
      let m = 0;
      const x = [],
        B = [],
        A = [],
        C = [],
        E = new Int32Array(8),
        g = new Map(),
        v = new Int32Array(E.buffer, 0, 5),
        D = new Float32Array(E.buffer);
      Ra.map((Q, O) => {
        let P;
        const U = p => {
          let { x: r, y: w, z: T } = P[p], S = (D[0] = r, D[1] = w, D[2] = T, p = "" + (P.C ? v : E), g.get(p));
          return void 0 !== S
            ? (r = 3 * S, C[r] = (C[r++] + E[5]) / 2, C[r] = (C[r++] + E[6]) / 2, C[r] = (C[r] + E[7]) / 2)
            : (g.set(p, S = g.size), B.push(r, w, T, D[3]), A.push(E[4]), C.push(E[5], E[6], E[7])),
            S;
        };
        for (P of (D[3] = 41 < O ? -14 : Q.G && O, Q.o)) {
          const { x: p, y: r, z: w } = Nb(P);
          E[4] = 0 | P.u;
          E[5] = 32767 * p;
          E[6] = 32767 * r;
          E[7] = 32767 * w;
          for (let T = 2, S = U(0), u = U(1); P.length > T; ++T) {
            x.push(S, u, u = U(T));
          }
        }
        Q.o = 0;
        Q.s = m;
        Q.D = m = x.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(B), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(C), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(A), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(x), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [Q, O, P, U, p] = JSON.parse(localStorage.DanteSP22);
        d.map((r, w) => r.g = r.h = r.i = w ? 0 | Q[w] : 0);
        Na.map((r, w) => r.i = 0 | O[w]);
        Da = P;
        ha = p;
        c = U;
        da = 0;
      } catch {
      }
      yb();
      fa = e(Da);
      Bb(b);
    });
    const k = m => n(Math.sin(m / 10 * Math.PI), m / 10).rotateSelf(+m).scaleSelf(1.0001 - m / 10, 0, 1 - m / 10),
      q = pb(10, m => vb(tb(ub(18), k(m)).reverse(), tb(ub(18), k(m + 1)), 1)).flat();
    R(() => N([Sa.slice(1)], n(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const m = g =>
          R(() => {
            Sa.map(({ x: v, z: D }) => {
              N(G(11, 1), n(4 * v, 4, g + 4 * D).scale(0.8, 3, 0.8), M(0.5, 0.3, 0.7, 0.6));
              N(G(), n(4 * v, 7, g + 4 * D).scale(1, 0.3), M(0.5, 0.5, 0.5, 0.3));
            });
            N(V(
              z(G(), n(0, 0, g).scale(5, 1, 5), M(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(v => z(G(), n(5 * v, 0.2, g).rotate(-30 * v).scale(4, 1, 2), M(0.8, 0.8, 0.8, 0.3))),
            ));
            N(G(), n(0, -3, g).scale(8, 2, 8), M(0.4, 0.4, 0.4, 0.3));
          }),
        x = g =>
          V(
            z(G(), n(0, -g / 2).scale(6, g - 1, 2.2)),
            z(G(), n(0, -g / 2 - 6).scale(4, g - 3, 4)),
            z(G(32, 1), n(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        B = () => R(() => pb(7, g => N(z(G(6, 1), n(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), M(0.3, 0.3, 0.38))))),
        A = V(
          z(G(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), M(0.7, 0.4, 0.25, 0.7)),
          z(G(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), M(0.7, 0.4, 0.25, 0.2)),
          z(G(), n(4, -1.2).scale3d(2), M(0.7, 0.4, 0.25, 0.3)),
        ),
        C = (R(() => {
          N(A);
          Kb(n(0, -3, 4));
        }),
          Kb(n(-5.4, 1.5, -19).rotate(0, -90)),
          Lb(n(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Lb(
            n(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...ub(18).map(({ x: g, z: v }) => [7 * g, 10 * v, 4.5 - 2 * (0 > g ? -g : g)]),
          ),
          Sa.map(({ x: g, z: v }) => N(G(6), n(3 * g, 3, 15 * v).scale(0.7, 4, 0.7), M(0.6, 0.3, 0.3, 0.4))),
          [-15, 15].map((g, v) => {
            B();
            B();
            N(G(), n(0, 6.3, g).scale(4, 0.3, 1), M(0.3, 0.3, 0.3, 0.4));
            N(G(), n(0, 1, g).scale(3, 0.2, 0.35), M(0.5, 0.5, 0.5, 0.3));
            N(G(), n(0, 0, v ? 22 : -23).scale(3, 1, 8), M(0.9, 0.9, 0.9, 0.2));
            pb(5, D =>
              N(
                q,
                n(18.5 * (v - 0.5), 0, 4.8 * D - 9.5).rotate(0, 180 - 180 * v).scale(1.2, 10, 1.2),
                M(1, 1, 0.8, 0.2),
              ));
          }),
          N(G(), n(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), M(0.8, 0.8, 0.8, 0.2)),
          N(G(), n(3, 1.5, -20).scale(0.5, 2, 5), M(0.7, 0.7, 0.7, 0.2)),
          N(G(), n(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), M(0.75, 0.75, 0.75, 0.2)),
          N(G(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), M(0.6, 0.3, 0.3, 0.4)),
          N(V(
            Yb(
              z(G(6, 0, 0, 0.3), n(8, -3, -4).scale(13, 1, 13), M(0.7, 0.7, 0.7, 0.2)),
              V(
                z(G(6, 0, 0, 0.3), n(0, -0.92).scale(13, 2, 13), M(0.8, 0.8, 0.8, 0.2)),
                z(G(), l.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2).rotate(-4), M(0.5, 0.5, 0.5, 0.5)),
              ),
              z(
                G(),
                l.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                M(0.8, 0.2, 0.2, 0.5),
              ),
              z(G(6), n(0, -8).scale(9, 8, 7), M(0.2, 0.1, 0.4, 0.5)),
            ),
            z(G(5), l.scale(5, 30, 5), M(0.4, 0.2, 0.6, 0.5)),
            z(G(5, 0, 1.5), n(0, 1).scale(4.5, 0.3, 4.5), M(0.7, 0.5, 0.9, 0.2)),
            z(G(6), n(15, -1.5, 4).scale(3.5, 1, 3.5), M(0.5, 0.5, 0.5, 0.5)),
          )),
          R(() => {
            N(G(5), n(0, -0.2).scale(5, 1, 5), M(0.6, 0.65, 0.7, 0.3));
            Kb(n(0, 1.2));
          }),
          Kb(n(15, -2, 4)),
          R(() => {
            N(
              V(
                Yb(
                  z(G(), l.scale(1.5, 1, 5), M(0.9, 0.9, 0.9, 0.2)),
                  z(G(6), l.scale(4, 1, 5), M(0.9, 0.9, 0.9, 0.2)),
                  z(G(), n(0, -2).scale(2, 3.2, 1.9), M(0.3, 0.8, 0.5, 0.5)),
                  z(G(16, 1, 0, 4), l.scale(1, 1, 1.5).rotate(0, 90), M(0.9, 0.9, 0.9, 0.2)),
                ),
                z(G(), l.scale(1.3, 10, 1.3), M(0.2, 0.7, 0.4, 0.6)),
              ),
              n(0, 0, 45),
            );
            Lb(n(0, 2.8, 45), [0, 0, 4.5]);
          }),
          m(35),
          m(55),
          N(G(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2)),
          R(() => {
            N(G(3), n(-23, -1.7, 55.8).scale(5, 0.7, 8.3), M(0.3, 0.6, 0.6, 0.2));
            N(G(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), M(0.8, 0.8, 0.8, 0.2));
            N(G(), n(-23, -3, 55).scale(5.2, 1.7, 3), M(0.5, 0.5, 0.5, 0.3));
            N(G(), n(-23, -2.2, 62).scale(3, 1, 4), M(0.5, 0.5, 0.5, 0.3));
            Kb(n(-23, -0.5, 66.5));
          }),
          R(() => {
            N(G(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), M(0.7, 0.7, 0.7, 0.2));
            N(V(z(G(), l.scale(3, 1.4, 2.7)), z(G(), l.scale(1.2, 8, 1.2))), n(-33, -3, 55), M(0.7, 0.7, 0.7, 0.2));
          }),
          R(() => {
            N(V(
              z(G(), n(-27, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2)),
              z(G(), n(-27, -3, 55).scale(1, 3), M(0.9, 0.9, 0.9, 0.2)),
            ));
            N(G(), n(-39, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2));
          }),
          R(() => {
            N(G(6), n(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), M(0.7, 0.7, 0.7, 0.4));
          }),
          Kb(n(-55, -1.1, 46).rotate(0, 90)),
          N(G(6), n(-61.3, -2.4, 49).scale(3, 1, 5), M(0.4, 0.6, 0.6, 0.3)),
          N(G(7), n(-57, -2.6, 46).scale(4, 1, 4), M(0.8, 0.8, 0.8, 0.3)),
          [
            ...z(G(), n(0, -3).scale(11, 1.4, 3), M(0.9, 0.9, 0.9, 0.2)),
            ...z(G(), n(0, -2.2).scale(7.7, 0.5, 4), M(0.5, 0.5, 0.5, 0.2)),
            ...V(
              z(G(6), l.rotate(90).scale(6, 8, 6), M(0.3, 0.6, 0.6, 0.3)),
              z(G(4, 0, 0.01), n(0, 6).scale(12, 2, 0.75).rotate(0, 45), M(0.3, 0.6, 0.6, 0.3)),
              z(G(6), l.rotate(90).scale(5, 12, 5), M(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(g => z(G(5), n(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), M(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        E = (N(C, n(-53, 0, 55)),
          R(() => N(C), 2),
          N(G(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), M(0.7, 0.7, 0.7, 0.2)),
          N(G(3, 0, -0.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), M(0.8, 0.8, 0.8, 0.2)),
          N(V(
            Yb(
              z(G(), n(-100, -2.4, 55).scale(8, 0.9, 8), M(0.8, 0.8, 0.8, 0.2)),
              z(G(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), M(0.8, 0.8, 0.8, 0.2)),
              z(G(), n(-100, -2.6, 70).scale(3, 1.1, 7), M(0.8, 0.8, 0.8, 0.2)),
              z(G(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), M(0.8, 0.8, 0.8, 0.2)),
              z(G(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), M(0.6, 0.6, 0.6, 0.3)),
              z(G(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), M(0.8, 0.8, 0.8, 0.2)),
              z(G(), n(-100, 0.42, 92).scale(3, 1.1, 4.1), M(0.8, 0.8, 0.8, 0.2)),
            ),
            z(G(8), n(-100, -1, 55).scale(7, 0.9, 7), M(0.3, 0.3, 0.3, 0.4)),
            z(G(8), n(-100, -2, 55).scale(4, 0.3, 4), M(0.4, 0.4, 0.4, 0.5)),
            z(G(8, 0, -3.1), n(-100, -3, 55).scale(0.4, 1, 0.4), M(0.4, 0.4, 0.4, 0.5)),
          )),
          Lb(n(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Lb(n(-89, 0.2, 80), [0, 0, 6]),
          N(V(
            z(G(), n(-100, 1, 63).scale(7.5, 4), M(0.5, 0.5, 0.5, 0.4)),
            z(G(), n(-100, 0, 70).scale(2, 2, 10), M(0.5, 0.5, 0.5, 0.4)),
            z(G(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), M(0.5, 0.5, 0.5, 0.4)),
          )),
          Sa.map(({ x: g, z: v }) => {
            N(G(6), n(7 * g - 100, -3, 7 * v + 55).scale(1, 8.1), M(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(D => N(G(6), n(7 * g - 100, D, 7 * v + 55).scale(1.3, 0.5, 1.3), M(0.4, 0.2, 0.2, 0.8)));
          }),
          pb(7, g => {
            N(
              G((23 * g + 1) % 5 + 5, 0, 0.5),
              n(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3),
              M(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
            );
          }),
          N(G(), n(-87, -9.5, 24).scale(7, 1, 3), M(0.4, 0.5, 0.6, 0.4)),
          N(G(4), n(-86, -9.2, 27).scale(5, 1, 5), M(0.5, 0.6, 0.7, 0.3)),
          N(G(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), M(0.3, 0.3, 0.4, 0.1)),
          Kb(n(-86, -7.5, 31)),
          R(() => {
            [0, 12, 24].map(g =>
              N(G(), n(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.2, 0.5, 0.6, 0.2))
            );
          }),
          R(() => {
            [6, 18].map(g =>
              N(G(), n(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.1, 0.4, 0.5, 0.2))
            );
          }),
          N(
            V(
              Yb(
                z(G(5), n(0, 0, -7).scale(2, 1.2, 2), M(0.2, 0.4, 0.7, 0.3)),
                z(G(5), l.scale(9, 1.2, 9), M(0, 0.2, 0.3, 0.5)),
                z(G(), l.scale(11, 1, 13), M(0.3, 0.4, 0.6, 0.3)),
              ),
              z(G(5), l.scale(5.4, 5, 5.4), M(0, 0.2, 0.3, 0.5)),
            ),
            n(-38.9, -11.3, 17),
          ),
          Kb(n(-38.9, -9.6, 10)),
          R(() => {
            N(
              V(
                Yb(
                  z(G(5), n(0, 2).scale(5, 7, 5).skewY(8), M(0.2, 0.4, 0.5, 0.5)),
                  z(G(5), n(0, 6).scale(1.1, 7, 1.1).skewY(-8), M(0.25, 0.35, 0.5, 0.5)),
                  z(G(5), n(0, 9).scale(0.6, 7, 0.6).skewY(8), M(0.35, 0.3, 0.5, 0.5)),
                ),
                z(G(5), l.scale(4, 8, 4), M(0.2, 0.4, 0.5, 0.5)),
                z(G(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), M(0.2, 0.4, 0.5, 0.5)),
              ),
              n(-38.9, -11.3, 17),
            );
            Lb(n(-39.1, -0.6, 17).rotate(11), ...ub(15).map(({ x: g, z: v }) => [3 * g, 3 * v, 1.2]));
          }),
          Sa.map(({ x: g, z: v }) => {
            N(G(14, 1), n(9 * g - 38.9, -7.3, 11 * v + 17).scale(1, 4), M(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(D =>
              N(G(17, 1), n(9 * g - 38.9, D - 11.3, 11 * v + 17).scale(1.5, 0.5, 1.5), M(0.6, 0.6, 0.6, 0.3))
            );
          }),
          N(
            V(
              Yb(
                z(G(6), n(0, 0, -36).scale(15, 1.2, 15), M(0.7, 0.7, 0.7, 0.3)),
                z(G(), n(0, 0, -18).scale(4, 1.2, 6), M(0.45, 0.4, 0.6, 0.3)),
              ),
              ...pb(6, g =>
                pb(6, v =>
                  z(
                    G(6),
                    n(4.6 * v - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * v)).scale(2, 5, 2),
                    M(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            n(-38.9, -11.3, 17),
          ),
          Lb(n(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          N(G(5), n(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), M(0.8, 0.1, 0.25, 0.4)),
          Kb(n(-84, -0.5, 85).rotate(0, 45)),
          R(() => {
            N(A);
            Kb(n(0, -3, -4).rotate(0, 180));
          }),
          V(
            z(G(), n(0, -0.5, 1).scale(1.15, 1.2, 6.5), M(0.25, 0.25, 0.35, 0.3)),
            V(
              z(G(3), n(0, 0, -5.5).scale(3, 2), M(0.6, 0.3, 0.4, 0.3)),
              z(G(), n(0, 0, -3.65).scale(2.5, 3), M(0.6, 0.3, 0.4, 0.3)),
            ),
            ...[-1, 1].map(g => z(G(), n(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), M(0.7, 0.2, 0, 0.3))),
          ));
      R(() =>
        pb(2, g =>
          N(E, n(9 * g - 110 + (1 & g), 1.9, -12)))
      );
      R(() =>
        pb(2, g =>
          N(E, n(9 * (g + 2) - 110 + (1 & g), 1.9, -12)))
      );
      R(() =>
        pb(3, g =>
          N(E, n(9 * g - 106, 1.9, -12)))
      );
      N(
        V(
          Yb(z(G(), n(26.5, -1.6, 10).scale(20, 2.08, 3)), z(G(), n(26.5, -0.5, 10).scale(19, 2, 0.5))),
          ...pb(4, g => z(G(), n(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
          ...pb(3, g => z(G(), n(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        n(-123, 0.2, -12),
        M(0.5, 0.5, 0.6, 0.2),
      );
      Kb(n(-116, -1.4, -18).rotate(0, 180));
      N(G(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), M(0.8, 0.8, 0.8, 0.2));
      N(G(6), n(-116, -2.6, -16.5).scale(3.2, 0.8, 3), M(0.6, 0.5, 0.7, 0.2));
      N(G(), n(-115.5, -17, -12).scale(0.5, 15, 2.2), M(0.6, 0.6, 0.6, 0.3));
      N(G(8), n(-114, -17, -2).scale(2, 15, 2), M(0.6, 0.6, 0.6, 0.3));
      N(G(8), n(-79, -17, -2).scale(2, 15, 2), M(1, 1, 1, 0.3));
      N(G(), n(-77, -17, -50.5).scale(2.2, 15, 0.5), M(0.6, 0.6, 0.6, 0.3));
      pb(3, g => {
        N(x(16), n(12 * g - 109, -9, -12), M(0.6, 0.6, 0.6, 0.3));
        N(x(16), n(-77, -9, -12 * g - 20).rotate(0, 90), M(0.6, 0.6, 0.6, 0.3));
      });
      N(V(
        z(G(12), n(-77, -14.5, -12).scale(4, 17.5, 4), M(0.7, 0.7, 0.7, 0.2)),
        z(G(), n(-79, 0.1, -12).scale(3.5, 2, 1.3), M(0.4, 0.5, 0.6, 0.2)),
        z(G(), n(-77, 0.1, -14).scale(1.5, 2, 2), M(0.4, 0.5, 0.6, 0.2)),
        z(G(12), n(-77, 3.1, -12).scale(3, 5, 3), M(0.4, 0.5, 0.6, 0.2)),
      ));
      N(G(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), M(0.6, 0.6, 0.6, 0.3));
      N(G(9), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), M(0.5, 0.5, 0.5, 0.3));
      N(V(
        z(G(), n(-93, -5.8, -40).scale(9, 1, 5), M(0.8, 0.8, 0.8, 0.1)),
        z(G(9), n(-98, -5.8, -40).scale(3, 8, 3), M(0.7, 0.7, 0.7, 0.2)),
      ));
      Kb(n(-98, -4.4, -40).rotate(0, 90));
      Lb(n(-115, 0.2, -12), [0, 0, 3.5]);
      Lb(n(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      N(V(
        Yb(
          z(G(6, 0, 0, 0.6), n(-100, 0.7, 105.5).scale(8, 1, 11), M(0.7, 0.7, 0.7, 0.2)),
          z(G(), n(-101.5, 0.7, 93.5).scale(10.5, 1, 2), M(0.7, 0.7, 0.7, 0.2)),
        ),
        z(G(5), n(-100, 0.7, 113).scale(4, 3, 4), M(0.7, 0.7, 0.7, 0.2)),
      ));
      pb(
        4,
        g =>
          R(() =>
            N(
              G(6),
              n(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              M(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
            )
          ),
      );
      R(() => {
        N(V(z(G(10), l.scale(6, 2, 6), M(0.1, 0.6, 0.5, 0.3)), z(G(10), l.scale(3.3, 6, 3.3), M(0.1, 0.6, 0.5, 0.5))));
        N(G(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), M(0.4, 0.4, 0.4, 0.3));
        N(G(10), n(-7.5).rotate(0, 90).scale(2, 2.5, 2), M(0.3, 0.8, 0.7, 0.3));
        N(G(5), n(-7.5).rotate(0, 90).scale(1, 3), M(0.5, 0.5, 0.5, 0.5));
        Kb(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g =>
          N(q, l.rotate(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), M(1, 1, 0.8, 0.2))
        );
        Lb(n(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(g => {
        [7.2, 1.5].map(v => N(G(15, 1), n(-7.5 * g - 100, v + 0.7, 96).scale(1.1, 0.5, 1.1), M(0.5, 0.24, 0.2, 0.4)));
        N(q, n(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), M(1, 1, 0.8));
        N(G(12, 1), n(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), M(0.6, 0.24, 0.2, 0.5));
        N(
          V(
            z(G(), n(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), M(0.5, 0.5, 0.5, 0.4)),
            z(G(), l.scale(3, 3, 10), M(0.6, 0.24, 0.2, 0.5)),
            z(G(28, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), M(0.6, 0.24, 0.2, 0.5)),
            z(G(5), n(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), M(0.6, 0.24, 0.2, 0.5)),
            z(G(5), n(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), M(0.6, 0.24, 0.2, 0.5)),
          ),
          n(g - 100, 0.7, 97),
        );
      });
      N(V(
        z(G(), n(-82.07, 0.8, 106).scale(11, 0.9, 2.2), M(0.7, 0.7, 0.7, 0.1)),
        z(G(45, 1), n(-81, 0.7, 106).scale3d(7.7), M(0.7, 0.7, 0.7, 0.1)),
      ));
      R(() => {
        N(V(
          z(G(45, 1), l.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)),
          z(G(), n(0, 0, -5.5).scale(1.5, 3, 2.7), M(0.45, 0.45, 0.45, 0.2)),
        ));
        N(G(8), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), M(0.7, 0.7, 0.7, 0.1));
        N(G(5), n(0, 2).scale(1, 2), M(0.3, 0.3, 0.3, 0.2));
        Lb(n(0, 3), ...ub(14).map(({ x: g, z: v }) => [5.6 * g, 5.6 * v, 2]));
      });
      R(() => {
        [-1, 1].map(g =>
          N(q, l.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), M(1, 1, 0.8))
        );
        N(V(z(G(28, 1), n(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), z(G(), l.scale(9, 5, 2), M(0.3, 0, 0, 0.3))));
        N(z(G(28, 1), l.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
        N(z(G(5), n(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
      });
      R(() => {
        N(V(
          z(G(28, 1), n(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)),
          z(G(), n(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)),
          z(G(), n(0, 0, 7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),
        ));
        N(z(G(28, 1), l.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
        N(z(G(5), n(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
      });
      R(() => {
        N(V(
          z(G(28, 1), n(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)),
          z(G(), n(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)),
          z(G(), n(0, 0, -7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),
        ));
        N(z(G(28, 1), l.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
        N(z(G(5), n(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
      });
      N(G(), n(-58, 1, 106).scale(2, 0.65, 2), M(0.7, 0.7, 0.7, 0.2));
      N(G(), n(-50.7, 1, 99).scale(2, 0.65, 1), M(0.7, 0.7, 0.7, 0.2));
      N(G(), n(-42, 0.4, 91).scale(5, 1, 2.5), M(0.7, 0.7, 0.7, 0.3));
      N(G(), n(-34.2, 0.4, 91).scale(3, 1, 3), M(0.7, 0.7, 0.7, 0.3));
      Kb(n(-34, 2.7, 96).rotate(-12, 0));
      N(G(5), n(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), M(0.2, 0.5, 0.5, 0.6));
      [M(0.1, 0.55, 0.45, 0.2), M(0.2, 0.5, 0.5, 0.3), M(0.3, 0.45, 0.55, 0.4)].map((g, v) =>
        R(() => {
          N(G(), n(-23.5, 0.5, 91 + 6.8 * v).scale(1 === v ? 2 : 3.3, 1, 3.3), g);
          2 === v && N(G(), n(-29.1, 0.4, 91).scale(2.1, 1, 3), M(0.7, 0.7, 0.7, 0.3));
          1 === v && N(G(), n(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), M(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(g => N(q, n(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), M(1, 1, 0.8)));
      pb(
        3,
        g =>
          N(
            x(24.7 - 0.7 * (1 & g)),
            n(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)),
            1 & g ? M(0.5, 0.5, 0.5, 0.3) : M(0.35, 0.35, 0.35, 0.5),
          ),
      );
      N(V(
        z(G(6, 0, 0, 0.3), n(0, -0.92, 95).scale(14, 2, 14), M(0.8, 0.8, 0.8, 0.2)),
        z(G(5), n(0, 0, 95).scale3d(6), M(0.3, 0.3, 0.3, 0.5)),
      ));
      Kb(n(0, 1.7, 82).rotate(0, 180));
      N(G(5), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), M(0.5, 0.3, 0.3, 0.4));
      N(G(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), M(0.5, 0.6, 0.7, 0.3));
      N(G(), n(0, 16, 129).scale(1.5, 1, 2), M(0.5, 0.6, 0.7, 0.3));
      N(G(7), n(0, 16.2, 133).scale(5, 1, 5), M(0.4, 0.5, 0.6, 0.4));
      N(V(
        Yb(
          z(G(), n(0, 16, 110.5).scale(12, 1, 3), M(0.5, 0.3, 0.3, 0.4)),
          z(G(), n(0, 16, 111).scale(3, 1, 3.8), M(0.5, 0.3, 0.3, 0.4)),
        ),
        z(G(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), M(0.5, 0.3, 0.3, 0.4)),
      ));
      R(() => {
        N(G(3), n(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), M(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          N(G(6), n(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), M(0.7, 0.7, 0.7, 0.4));
          N(G(), n(0, 6.2, g + 95).scale(0.5, 11, 0.5), M(0.5, 0.3, 0.3, 0.4));
        });
      });
      R(() => {
        N(G(5), l.scale(5, 1.1, 5), M(0.5, 0.3, 0.3, 0.4));
        N(G(5), l.scale(5.5, 0.9, 5.5), M(0.25, 0.25, 0.25, 0.4));
        Kb(n(0, 1.5, -1).rotate(0, 180));
      });
      Lb(n(0, 3, 95), ...ub(9).map(({ x: g, z: v }) => [9 * g, 9 * v, 4]));
      Lb(n(0, 19, 134), [0, 0, 3.5]);
    });
    R(() => {
      N(wb(20), n(0, 1).scale3d(0.5), M(1, 0.3, 0.4));
      N(wb(30), l.scale(0.65, 0.8, 0.55), M(1, 0.3, 0.4));
      N(G(), n(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), M(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        N(q, l.rotate(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), M(1, 1, 0.8));
        N(
          z(V(G(15, 1), z(G(), n(0, 0, 1).scale(2, 2, 0.5))), l.rotate(-90, 0).scale(0.1, 0.05, 0.1), M(0.3, 0.3, 0.3)),
          n(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        R(() => {
          N(G(20, 1), n(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), M(1, 0.3, 0.4));
        });
      });
    });
    R(() => {
      N(G(6).slice(0, -1), l.scale(0.77, 1, 0.77), M(1, 0.3, 0.5));
    }, 0);
    R(() => {
      N(
        wb(30, 24, (m, x, B) => {
          const A = x / 24, C = m * Math.PI * 2 / 30, E = Math.sin(A ** 0.6 * Math.PI / 2);
          m = A * A * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < x
            ? { x: B.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(C) * E,
              y: Math.cos(A * Math.PI) - A - m,
              z: Math.sin(C) * E + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        l.scale(0.7, 0.7, 0.7),
        M(1, 1, 1),
      );
      [-1, 1].map(m => N(wb(12), n(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    R(() => {
      N(G(6, 1), l.scale(0.13, 1.4, 0.13), M(0.3, 0.3, 0.5, 0.1));
      N(G(10), n(0, 1).scale(0.21, 0.3, 0.21), M(1, 0.5, 0.2));
      N(G(3), n(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), M(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
