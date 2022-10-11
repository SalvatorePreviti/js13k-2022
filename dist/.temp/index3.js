let aa,
  ca,
  ea,
  fa,
  ia,
  ja,
  ma,
  na,
  oa,
  pa,
  c,
  qa,
  ra,
  ta,
  ua,
  va,
  wa,
  d = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 14,
  Ja = 0.1;
const Ka = Math.PI / 180,
  La = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Ma = [],
  e = [],
  h = [],
  Na = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Oa = [
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
var Ua = 0, Va = 180, Wa = 0, Xa = 0, Ya = 0;
const Za = NO_INLINE(a => 0 > a ? -a : a),
  $a = NO_INLINE((a, b) => a < b ? a : b),
  ab = NO_INLINE((a, b) => b < a ? a : b),
  bb = (a, b) => Za(a) > b ? a : 0,
  cb = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  db = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka,
  eb = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * cb(g) || 0,
  fb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0,
  gb = (a, b) => (a = cb(a), fb(a, 1 - a, b)),
  hb = (a, b, g = 0) =>
    (a * a + b * b + g
        * g) ** 0.5,
  mb = (a = 0, b = 0, g = 0, k = 1) => {
    ib = l.m11 * a + l.m21 * b + l.m31 * g + l.m41 * k;
    jb = l.m12 * a + l.m22 * b + l.m32 * g + l.m42 * k;
    kb = l.m13 * a + l.m23 * b + l.m33 * g + l.m43 * k;
    lb = l.m14 * a + l.m24 * b + l.m34 * g + l.m44 * k;
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
    a = u,
    b = l,
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
  x = NO_INLINE((a, b, g) => u.translate(a, b, g)),
  F = (a, b) => Array.from(Array(a), (g, k) => b(k)),
  qb = (a, b, g) => (a.C = g, a.u = b, a),
  rb = (a, b, g = a.u) => (pb(b), qb(a.map(({ x: k, y: n, z: m }) => (mb(k, n, m), { x: ib, y: jb, z: kb })), g, a.C)),
  J = (a, b, g) => a.map(k => rb(k, b, g)),
  sb = (a, b = 0) =>
    F(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > Za(k) ? k : 0 > k ? k - b : k + b };
    }),
  tb = (a, b, g) =>
    a.map((k, n, { length: m }) => qb([k, b[m - n - 1], b[m - (n + 1) % m - 1], a[(n + 1) % m]], a.u, g)),
  N = (
    a,
    b,
    g = 0,
    k,
  ) => (a = a ? sb(a, k) : Na,
    k = rb(a, x(0, 1).scale3d(0 < g ? g : 1)),
    a = rb(a, x(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...tb(a, k, b), k, a]),
  ub = (
    a,
    b = a,
    g = (
      k,
      n,
    ) => (n *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(n), y: Math.cos(n), z: Math.sin(k) * Math.sin(n) }),
  ) => {
    const k = [];
    for (let n = 0; a > n; n++) {
      for (let m = 0; b > m; m++) {
        const v = qb([], 0, 1);
        k.push(v);
        v.push(g(n, m, v));
        m && v.push(g((n + 1) % a, m, v));
        b - 1 > m && v.push(g((n + 1) % a, m + 1 % b, v));
        v.push(g(n, m + 1 % b, v));
      }
    }
    return k;
  },
  xb = NO_INLINE(a => 1 - Math.exp(-ya * a)),
  yb = NO_INLINE((a, b, g) => fb(a, b, xb(g))),
  zb = (a, b, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Ab = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Db = a => Math.sin(a * Math.PI * 2),
  Eb = a => 0.5 > a % 1 ? 1 : -1,
  Fb = a => a % 1 * 2 - 1,
  Gb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Hb = a => {
    let b = 0;
    const g = () => {
        let m = 0;
        const v = T => {
            let U, da, Pa, ka = 0, la = 0;
            const ba = [],
              sa = new Int32Array(768 * T),
              cc = 2 ** (w - 9) / T,
              dc = Math.PI * 2 ** (r - 8) / T,
              Bb = A * T & -2;
            for (let vb = 0; 11 >= vb; ++vb) {
              for (
                let wb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + vb];
                32 > wb;
                ++wb
              ) {
                const Ob = (32 * vb + wb) * T;
                for (var Qa = 0; 4 > Qa; ++Qa) {
                  if (U = 0, Nb && (U = B[Nb - 1].charCodeAt(wb + 32 * Qa) - 40, U += 0 < U ? 106 : 0), U) {
                    var ha;
                    if (!(ha = ba[U])) {
                      ha = U;
                      let W = void 0, Aa = void 0;
                      var Pb = U;
                      let ec = 0, fc = 0;
                      const gc = 2 > b ? Fb : Db, hc = 2 > b ? 1 > b ? Eb : Gb : Db, Qb = new Int32Array(t + y + M);
                      for (let Ra = 0, Cb = 0; t + y + M > Ra; ++Ra, ++Cb) {
                        let Sa = 1;
                        t > Ra ? Sa = Ra / t : t + y > Ra || (Sa = (1 - (Sa = (Ra - t - y) / M)) * 3 ** (-H / 16 * Sa));
                        0 > Cb
                          || (Cb -= 4 * T,
                            Aa = 0.00396 * 2 ** ((Pb + q - 256) / 12),
                            W = 0.00396 * 2 ** ((Pb + L - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Qb[Ra] = 80
                            * (gc(ec += Aa * Sa ** (D / 32)) * f + hc(fc += W * Sa ** (I / 32)) * K
                              + (V ? (2 * Math.random() - 1) * V : 0))
                            * Sa | 0;
                      }
                      ha = ba[ha] = Qb;
                    }
                    for (let W = 0, Aa = 2 * Ob; ha.length > W; ++W, Aa += 2) {
                      sa[Aa] += ha[W];
                    }
                  }
                }
                for (let W, Aa = 0; T > Aa; ++Aa) {
                  Qa = 0;
                  ha = 2 * (Ob + Aa);
                  var Ba = (((W = sa[ha]) || Pa)
                    && (da = 0.00308 * G,
                      1 !== b && 4 !== b || (da *= Math.sin(cc * ha * Math.PI * 2) * E / 512 + 0.5),
                      da = 1.5 * Math.sin(da),
                      ka += da * la,
                      Ba = (1 - R / 255) * (W - la) - ka,
                      la += da * Ba,
                      W = 4 === b ? la : 3 === b ? Ba : ka,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= Q / 32,
                      Pa = 1e-5 < W * W,
                      Ba = Math.sin(dc * ha) * p / 512 + 0.5,
                      Qa = W * (1 - Ba),
                      W *= Ba),
                    ha < Bb || (Qa += sa[1 + ha - Bb]
                      * z / 255,
                      W += sa[ha - Bb] * z / 255),
                    m + ha >> 1);
                  k[Ba] += (sa[ha] = Qa) / 65536;
                  n[Ba] += (sa[++ha] = W) / 65536;
                }
              }
            }
            m += 768 * T;
          },
          B = Oa[b],
          [f, q, D, K, L, I, V, t, y, C, H, w, G, R, Q, p, r, z, A, E] = Ta[b],
          M = 4 * C ** 2;
        v(5513);
        v(4562);
        v(3891);
        Ab(5 > ++b ? g : a);
      },
      k = (ea = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      n = ea.getChannelData(1);
    Ab(g);
  },
  Ib = () => {
    let a, b, g, k, n, m, v, B, f, q, D, K, L, I, V, t, y = !0;
    const C = [],
      H = () => {
        b4.innerHTML = "Music: " + y;
        t && (ca || !y ? t.disconnect() : t.connect(V.destination));
      },
      w = () => {
        const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ma = [zb(0.3, 55, p, 1.732051), zb(55, 181, p, 1.732051)];
        ja = zb(0.3, 181, p, 1.732051);
        k = B = void 0;
        C.length =
          fa =
          I =
          K =
          L =
          za =
          Ca =
            0;
        document.hidden && G(!0);
      },
      G = p => {
        if (ca !== p) {
          if (ca = p, w(), document.body.className = p ? "l m" : "l", p) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          H();
        }
      },
      R = p => {
        try {
          V || (V = new AudioContext(), (t = V.createBufferSource()).buffer = ea, t.loop = !0, t.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        G(!1);
        ia = p;
      },
      Q = (p, r) => p.buttons[r]?.pressed || 0 < p.buttons[r]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      R();
    };
    b2.onclick = () => {
      R(1);
    };
    b5.onclick = () => G(!0);
    b4.onclick = () => {
      y = !y;
      H();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
    };
    onclick = p => {
      if (!ca && (p.target === hC && (fa = 1), ia)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = p => {
      let r;
      p.repeat
        || (r = {
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
        }[p.code],
          (C[r] = !!p.type[5] && !0) && (0 === r && (fa = 1), 1 === r && G(!0)));
    };
    onmousemove = ({ movementX: p, movementY: r }) => {
      ia && (p || r) && (Va += 0.1 * p, Ua += 0.1 * r);
    };
    hC.ontouchstart = p => {
      if (!ca) {
        for (let { pageX: r, pageY: z, identifier: A } of p.changedTouches) {
          ia && r > hC.clientWidth / 2
            ? void 0 === B && (f = 0, m = r, v = z, B = A, D = Ua, q = Va)
            : void 0 === k && (n = 0, b = r, g = z, k = A);
        }
        a = xa;
      }
    };
    hC.ontouchmove = p => {
      if (!ca) {
        for (let { pageX: M, pageY: T, identifier: U } of p.changedTouches) {
          var r, z, A, E;
          B === U && (Ua = D + (T - v) / 2.3, Va = q + (M - m) / 2.3, f = 1);
          k === U
            && (U = (b - M) / 20,
              r = Za(U),
              z = (g - T) / 20,
              A = Za(z),
              (E = 0.5 < ab(r, A)) && (n = 1),
              K = (E && 0.3 < r) * cb(U, -1),
              L = (E && 0.3 < A) * cb(z, -1),
              2 < r && (b = 20 * (0 > U ? -1 : 1) + M),
              2 < A && (g = 20 * (0 > z ? -1 : 1) + T));
        }
      }
    };
    hC.ontouchend = p => {
      let r;
      document.activeElement === document.body && p.preventDefault();
      for (const z of p.changedTouches) {
        z.identifier === B
          ? (B = void 0, f || (r = 1), f = 0)
          : z.identifier === k
          ? (k = void 0, L = K = 0, n || (r = 1), n = 0)
          : r = 1;
      }
      p.target === hC && r && a && 0.02 < (p = xa - a) && 0.7 > p && (fa = 1);
    };
    na = () => {
      za = L + (C[4] ? 1 : 0) - (C[5] ? 1 : 0);
      Ca = K + (C[2] ? 1 : 0) - (C[3] ? 1 : 0);
      let p = navigator.getGamepads()[0];
      p
        && (ia && (Ua += ya * bb(p.axes[3], 0.3) * 80, Va += ya * bb(p.axes[2], 0.3) * 80),
          za += Q(p, 12) - Q(p, 13) - bb(p.axes[1], 0.2),
          Ca += Q(p, 14) - Q(p, 15) - bb(p.axes[0], 0.2),
          Q(p, 9) && G(!0),
          (p = Q(p, 3) || Q(p, 2) || Q(p, 1) || Q(p, 0)) && !I && (fa = 1),
          I = p);
    };
    document.onvisibilitychange = onblur = onresize = w;
    G(!0);
  },
  Jb = (a, b) => {
    1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
  },
  Kb = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        Da = Ma.reduce((a, b) => a + b.i, 0)
      ] + " / XIII";
  },
  Lb = () => {
    localStorage.spdnt22 = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Ia, pa, d]);
  },
  O = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  P = () => {
    const a = [];
    c = (b, g = new DOMMatrix(), k) => a.push(...J(b, g, k));
    h.push({ m: new DOMMatrix(), o: a });
  },
  Mb = a => {
    const b = () => {
        b.g = yb(b.g, b.i, 4);
        b.h = yb(b.h, b.i, 1);
        pb(g).multiplySelf(a);
        fa && 3 > (mb(), hb(Wa - ib, Xa - jb, Ya - kb))
          ? b.i
            ? 0.7 < b.g && (b.i = 0, Ia = k, Jb("* click *", 1), Lb())
            : 0.3 > b.g && (b.i = 1, Ia = k, Jb("* click *", 1), Lb())
          : b.i && 0.8 < b.g && 14 === k && (b.i = 0,
            13 > Da
              ? Jb("Not leaving now, there are souls to catch!", 3)
              : Ea || (Jb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ea = 1));
        l.rotateSelf(50 * b.g - 25, 0).translateSelf(0, 1).m44 = b.g;
      },
      g = h.at(-1).m,
      k = e.length;
    b.m = g;
    b.F = a;
    e.push(b);
    c(N(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
    c(N(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
    c(N(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), O(0.5, 0.5, 0.4));
  },
  Rb = (a, ...b) => {
    let g, k, n, m, v = 0, B = 0, f = 1, q = -1;
    const D = () => {
      if (!D.i) {
        let H, w, G, R, Q, p = 1, r = 1 / 0;
        for (let z = 0; b.length > z; z++) {
          const A = b[z];
          let E = hb(L - A[0], I - A[1]);
          p = $a(p, E / A[2]);
          0 > (E -= A[2]) ? Q = 1 : r > E && (r = E, K = A);
        }
        Q
          || (H = L - K[0],
            w = I - K[1],
            G = hb(H, w),
            R = Math.atan2(-w, H),
            f && (m = cb(m / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2),
            R += B,
            q = -Math.cos(R),
            v = Math.sin(R),
            0.1 < G && (G = $a(G, K[2]) / G, L = H * G + K[0], I = w * G + K[1]));
        f = Q;
        m = yb(m, 3 + 6 * (1 - p), 3 + p);
        V = yb(V, L = yb(L, L + q, m), m);
        t = yb(t, I = yb(I, I + v, m), m);
        g = eb(g, Math.atan2(V - k, t - n) / Ka - 180, xb(3));
        pb(y).multiplySelf(a).translateSelf(k = V, 0, n = t).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
        1.6 > (mb(), hb(Wa - ib, Xa - jb, Ya - kb))
          && (D.i = 1,
            Jb(
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
            Kb(),
            Lb());
      }
      D.i
        && pb(h[35].m).translateSelf(
          C % 4 * 1.2 - 1.7 + Math.sin(d + C) / 7,
          -2,
          1.7 * (C / 4 | 0) - 5.5 + Za(C % 4 - 2) + Math.cos(d / 1.5 + C) / 6,
        );
    };
    let K = b[0], [L, I] = K, [V, t] = K;
    const y = h.at(-1).m, C = Ma.length;
    Ma.push(D);
  },
  Sb = ({ x: a, y: b, z: g }, k) => a * k.x + b * k.y + g * k.z,
  Tb = a => {
    let b, g = 0, k = 0, n = 0, m = a.at(-1);
    for (b of a) {
      g += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), n += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = hb(g, k, n), g /= b, k /= b, n /= b, { x: g, y: k, z: n, w: g * m.x + k * m.y + n * m.z };
  },
  Ub = (a, b) => {
    var g, k, n, m = b.B;
    for (var v = 0; m.length > v; ++v) {
      if (-0.00008 > (g = Sb(a, m[v]) - a.w) ? n = b : 8e-5 < g && (k = b), n && k) {
        k = [];
        n = [];
        m = b.B;
        v = b.v;
        let B = m.at(-1), f = Sb(a, B) - a.w;
        for (const q of m) {
          g = Sb(a, q) - a.w,
            8e-5 > f && n.push(B),
            -0.00008 < f && k.push(B),
            (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g)
            && (f /= g - f,
              B = { x: B.x + (B.x - q.x) * f, y: B.y + (B.y - q.y) * f, z: B.z + (B.z - q.z) * f },
              k.push(B),
              n.push(B)),
            B = q,
            f = g;
        }
        return {
          l: 2 < k.length && { B: qb(k, m.u, m.C), v, A: b },
          j: 2 < n.length && { B: qb(n, m.u, m.C), v, A: b },
        };
      }
    }
    return { l: k, j: n };
  },
  Vb = (a, b, g = Tb(b.B)) => {
    let k, n;
    return a
      ? ({ l: k, j: n } = Ub(a, b), k || n || a.o.push(b), k && (a.l = Vb(a.l, k, g)), n && (a.j = Vb(a.j, n, g)))
      : a = { x: g.x, y: g.y, z: g.z, w: g.w, o: [b], l: 0, j: 0 },
      a;
  },
  Wb = (a, b, g) => {
    const k = [],
      n = (m, v) => {
        let { l: B, j: f } = Ub(m, v);
        B || f || (0 < g * Sb(m, b) ? B = v : f = v);
        B && (m.l ? n(m.l, B) : k.push(B));
        f && m.j && n(m.j, f);
      };
    for (const m of b.o) {
      n(a, m);
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
        Xb(b, n => n.o = Wb(g, n, 1));
        Xb(g, n => k.push([n, Wb(b, n, -1)]));
        for (let [n, m] of k) {
          for (const v of m) {
            Vb(b, v, n);
          }
        }
      }
      return b;
    }),
  S = (a, ...b) => {
    const g = m => {
        let v;
        return m.A && ((v = k.get(m.A)) ? (n.delete(v), m = g(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      n = new Map();
    return a = Yb($b(Yb(Zb(a)), ...b)),
      Xb(a, m => {
        for (const v of m.o) {
          n.set(g(v), v.v);
        }
      }),
      Array.from(n, ([{ B: m }, v]) => {
        const B = m.map(({ x: f, y: q, z: D }) => ({ x: f, y: q, z: D }));
        return qb(v ? B.reverse() : B, m.u, m.C);
      });
  },
  X = (a, b = 0, g = 0) => {
    const k = h[++qa].m;
    return pb(u, k), k.m41 = a, k.m42 = b, k.m43 = g, k;
  },
  bc = () => {
    let a, b, g, k, n, m, v, B, f, q, D, K, L, I = 0, V = 0, t = 0, y = 0, C = 1, H = 2, w = 15;
    const G = () => pb((H ? e[Ia] : h[28 !== I ? I : 0]).m),
      R = r => {
        1 < H ? (pb(e[Ia].m).multiplySelf(e[Ia].F), mb(0, 0.9 < oa ? 15 : 1, -2.4)) : (G(), mb(V, t, y));
        r && (n = (ib - Wa) / ya, m = (kb - Ya) / ya);
        Wa = ib;
        Xa = jb;
        Ya = kb;
      },
      Q = () => {
        var r = 0, z = 0, A = 0, E = 0, M = 0, T = 0, U = -1;
        for (var da = 0; 36 > da; ++da) {
          var Pa = 512 * da;
          for (var ka = 96; 416 > ka; ka += 4) {
            for (var la = 0; 2 > la; ++la) {
              var ba = ac[Pa + ka + la];
              const sa = ac[Pa + ka + la + 2];
              ba > E && (E = ba);
              ba + sa && (0 > U || U === da) && (U = da, sa === q ? ++r : z && z !== sa || (z = sa, ++A));
            }
          }
        }
        q = 0 > U ? 0 : A > 2 * r ? z : q;
        for (r = 36; 128 > r; ++r) {
          da =
            U =
            A =
            z =
              0;
          Pa = 512 * r;
          for (ka = 0; 128 > ka; ++ka) {
            la = Pa + 4 * ka,
              ba = ac[la],
              64 > ka ? ba > z && (z = ba) : ba > A && (A = ba),
              (ba = ac[2 + la]) > U && (U = ba),
              ba = ac[1 + la],
              64 < ka ? ba > z && (z = ba) : ba > A && (A = ba),
              (ba = ac[3 + la]) > da && (da = ba);
          }
          (A -= z) * A > M * M && (M = A);
          (da -= U) * da > T * T && (T = da);
        }
        M *= 0.7;
        B = cb(1 - 0.01 * ab(Za(M), Za(T)), 0.3);
        M /= 255;
        E /= 255;
        T /= 255;
        G().invertSelf();
        mb(M, E, T, 0);
        V += ib;
        t += E;
        y += kb;
        R();
      },
      p = (r, z, A, E) => fb(r, z, C || (cb(Za(z - r) ** 0.5 - A) + 1 / 7) * xb(1.5 * E));
    ra = () => {
      R(q);
      Y.r9r(0, 0, 128, 128, 6408, 5121, ac);
      NO_INLINE(Q)();
      !H && q === I || (I = q, G().invertSelf(), mb(Wa, Xa, Ya), V = ib, t = jb, y = kb, H = H && (q ? 0 : 1));
      (-20 > Wa || 109 > Ya ? -25 : -9) > Xa && (H = 2);
      1 === q && (e[15].i = -15 > Wa && 0 > Ya ? 1 : 0);
      f = fb(yb(f, Xa, 2), Xa, H || 8 * Za(f - Xa));
      D = p(D, Wa, 0.5, 1);
      K = p(K, f, 2, 1);
      L = p(L, Ya, 0.5, 1);
      k = yb(k, ta * (30 < q && 35 > q), 2);
      ia
        ? (r = H + xb(18), Fa = fb(Fa, Wa, r), Ha = fb(Ha, Ya, r), Ga = fb(Ga, 1.6 + f, r), Va = db(Va))
        : (Fa = p(Fa, D, 1, 2 + k),
          Ha = p(Ha, L + -18 + 5 * k, 1, 2 + k),
          Ga = p(Ga, ab(K + cb((-60 - Ya) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          r = $a(-6, -Za(L - Ha)),
          z = D - Fa,
          Va = eb(Va, 90 - db(Math.atan2(r, z) / Ka), C + xb(10)),
          Ua = eb(Ua, 90 - Math.atan2(hb(r, z), Ga - K) / Ka, C + xb(10)));
      Ua = cb(Ua, -87, 87);
      C = 0;
      var r = cb(za, -1), z = cb(Ca, -1), A = bb(hb(r, z) ** 0.5, 0.1);
      let E = Math.atan2(r, z);
      A && (a = 90 - E / Ka);
      b = eb(b, a, xb(8));
      g = yb(g, A, 10);
      X(Wa, 0.06 * B * g * Math.cos(18.2 * d) + f, Ya).rotateSelf(0, b);
      for (var M = 0; 2 > M; ++M) {
        const T = 9.1 * d - Math.PI * M;
        pb(h[37].m, X(0)).translateSelf(0, g * cb(0.45 * Math.sin(T - Math.PI / 2))).rotateSelf(
          g * Math.sin(T) * 0.25 / Ka,
          0,
        );
      }
      w = q ? 5 : yb(w, H ? 13 : 19 - 2 * $a(0, Xa + 10), 2.2);
      n = q || H ? 0 : yb(n, 0, 3);
      m = q || H ? 0 : yb(m, 0, 3);
      r = (v = H ? 0 : yb(v, q ? 7 * cb(2 * A) * B : 0, q ? 9 : 1)) * A * Za(r) * Math.sin(E);
      z = v * A * Za(z) * Math.cos(E);
      E = ia ? (180 + Va) * Ka : 0;
      A = ya * (n + (z * Math.cos(E) - Math.sin(E) * r));
      M = ya * -w;
      r = ya * (m + (z * Math.sin(E) + Math.cos(E) * r));
      G().invertSelf();
      mb(A, M, r, 0);
      V += ib;
      t += M;
      y += kb;
      R();
    };
  },
  ic = (a, b) => {
    ca
      ? 1100 < hC.width && a.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s)
      : (void 0 !== b && a.das(4, h[40].D - h[40].s, 5123, 2 * h[40].s, Ma.length),
        a.das(4, h[41].D - h[41].s, 5123, 2 * h[41].s, e.length),
        a.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
  },
  jc = (a, b, g) => {
    const k = {}, n = (v, B = 35633) => (B = a.c6x(B), a.s3c(B, v), a.c6a(B), B), m = a.c1h();
    return a.abz(m, n(b, 35633)), a.abz(m, n(g, 35632)), a.l8l(m), v => v ? k[v] || (k[v] = a.gan(m, v)) : a.u7y(m);
  },
  l = new DOMMatrix(),
  u = new DOMMatrix(),
  nb = new Float32Array(16),
  kc = new Float32Array(760),
  ac = new Uint8Array(65536),
  Y = hD.getContext("webgl2", { powerPreference: "high-performance", preserveDrawingBuffer: !0, antialias: !1 }),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a],
    Y[a[0] + [...a].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Y[a];
}
Ab(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const k = t => {
            requestAnimationFrame(k);
            var y = (t - (aa || t)) / 1e3;
            if (xa += y, d += ya = ca ? 0 : $a(0.055, y), aa = t, 0 < ya) {
              y = (H, w, G) =>
                X(H + Math.sin(d + 2) / 5, w + Math.sin(0.8 * d) / 5, G).rotateSelf(
                  2 * Math.sin(d),
                  Math.sin(0.7 * d),
                  Math.sin(0.9 * d),
                );
              Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
              Ea && (ia = 0);
              oa = Ea ? yb(oa, -9, 0.015) : yb(oa, cb(d / 3), 1);
              pa = yb(pa, e[14].h, 0.2 + 0.3 * Za(2 * e[14].h - 1));
              na();
              t =
                (qa = 1,
                  ta = gb(e[13].g, e[8].g),
                  wa = fb(yb(wa, 0, 1), db(wa + 60 * ya), e[2].g - e[3].h),
                  ua = fb(yb(ua, 0, 5), db(ua + 56 * ya), ta),
                  va = fb(yb(va, 0, 4), db(va + 48 * ya), ta),
                  X(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g)),
                  $a(1 - e[11].h, e[10].h));
              var C =
                (X(t * Math.sin(0.6 * d + 1.2) * 12, 0, 35),
                  X(t * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55),
                  X(t * Math.sin(0.6 * d) * 12, 0, 45),
                  X(9.8 * (1 - t)),
                  t = cb(1 - 5 * t) * gb(e[11].g, e[2].g),
                  X(0, t * Math.sin(1.35 * d) * 4),
                  X(0, 0, t * Math.sin(0.9 * d) * 8),
                  X(0, -6.5 * e[11].h),
                  t = gb(e[4].h, e[3].h),
                  X(0, t * Math.sin(d) * 5 + 3.5 * (1 - ab(e[3].g, e[4].g))),
                  X(0, t * Math.sin(d + 3) * 6, t * Math.sin(0.6 * d + 1) * 6),
                  X(0, -7.3 * e[4].h),
                  t = gb(e[6].g, e[7].g),
                  X(
                    0,
                    -2,
                    10
                      - 8.5 * t * Za(Math.sin(1.1 * d)),
                  ),
                  X(0, -2, 10 - 8.5 * t * Za(Math.sin(2.1 * d))),
                  X(0, -2, 10 - 8.5 * ab(t * Za(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - t))),
                  gb(e[5].h, e[13].h));
              for (t = 0; 4 > t; t++) {
                X(
                  (2 < t ? 2 * (1 - C) + C : 0) - 100,
                  C * Math.sin(1.3 * d + 1.7 * t) * (3 + t / 3) + 0.7,
                  115 - 7 * (1 - e[5].h) * (1 - e[13].h) * (1 & t ? -1 : 1)
                    + ab(0.05, C) * Math.cos(1.3 * d + 7 * t) * (4 - 2 * (1 - t / 3)),
                );
              }
              t = gb(e[8].h, e[9].h);
              for (let H = 0; 3 > H; ++H) {
                X(0, t * Math.sin(1.5 * d + 1.5 * H) * 4 + (H ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)));
              }
              t = gb(gb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2);
              X(0, 16 * t, 95 + 8.5 * cb(2 * t - 1));
              X(0, -4.7 * e[0].g, -15);
              X(0, -4.7 * e[10].g, 15);
              X(-99.7, -1.9 - 5.5 * e[3].g, 63.5);
              X(-100, 0.6 - 5.8 * e[13].g, 96.5);
              X(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + wa, 0);
              X(2.5 * (1 - C) - 139.7, -3 * (1 - e[5].g) - C * Math.sin(0.8 * d) - 1.8, 93.5).rotateSelf(
                Math.cos(1.3 * d) * (3 + 3 * C),
                0,
              );
              X(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
              X(-81, 0.6, 106).rotateSelf(0, 40 + ua);
              X(-65.8, 0.8, 106).rotateSelf(0, va);
              X(-50.7, 0.8, 106).rotateSelf(0, 180 - va);
              X(-50.7, 0.8, 91).rotateSelf(0, 270 + va);
              y(-12, 4.2, 40 * oa - 66);
              y(-123, 1.4, 55 - 65 * pa);
              for (y = 0; 13 > y; ++y) {
                Ma[y](), ob(l, kc, 12 + y);
              }
              for (y = 0; 16 > y; ++y) {
                e[y](), ob(l, kc, 25 + y);
              }
              for (let H, w = 0, G = 656; 26 > w; ++w, ++G) {
                H = h[2 + w].m, kc[G++] = H.m41, kc[G++] = H.m42, kc[G++] = H.m43;
              }
              ra();
              for (y = 0; 12 > y; ++y) {
                ob(h[28 + y].m, kc, y);
              }
              Y.cbf(!0, !0, !0, !0);
              Y.c4s(16640);
              Y.u3a(q("j"), kc);
              Y.cbf(!0, !1, !0, !1);
              Y.uae(q("b"), !1, ob(pb().rotateSelf(0, 180).invertSelf().translateSelf(-Wa, -Xa, 0.3 - Ya)));
              ic(Y);
              Y.c4s(256);
              Y.cbf(!1, !0, !1, !0);
              Y.uae(q("b"), !1, ob(pb().translateSelf(-Wa, -Xa, -Ya - 0.3)));
              ic(Y);
              Y.f1s();
              fa = 0;
            }
            y = Fa;
            C = Ga;
            t = Ha;
            ca
              ? (pb(ja).invertSelf(),
                mb(3.6, 3.5),
                y = ib,
                C = jb,
                t = 5,
                pb(u, m).rotateSelf(-20, 0).invertSelf().translateSelf(-y, -C, -t).rotateSelf(0, 99),
                pb().rotateSelf(0, 40 * Math.sin(xa) - 80, -8),
                ob(l, kc, 9),
                ob(l, kc, 10),
                ob(l, kc, 11))
              : pb(u, m).rotateSelf(-Ua, -Va).invertSelf().translateSelf(-y, -C, -t);
            D();
            Z.u3a(D("j"), kc);
            Z.ubu(D("k"), y, C, t);
            Z.uae(D("a"), !1, ob(u));
            Z.ubh(D("g"), 3);
            Z.ubh(D("h"), 3);
            Z.b6o(36160, V);
            Z.v5y(0, 0, 2048, 2048);
            L(54.7);
            ic(Z, !ia);
            I(126);
            ic(Z, !ia);
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(D("b"), !1, ob(m));
            Z.uae(D("a"), !1, ob(ja));
            Z.uae(D("i"), !1, v);
            Z.ubh(D("g"), 0);
            Z.ubh(D("h"), 1);
            ic(Z, !ia);
            K();
            Z.uae(K("b"), !1, ob(pb(m).invertSelf()));
            Z.ubu(K("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, xa);
            Z.d97(4, 3, 5123, 0);
          },
          n = new DOMMatrix(),
          m = new DOMMatrix(),
          v = new Float32Array(32),
          B = g,
          f = F(8, () => ({})),
          q = jc(
            Y,
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          D = jc(
            Z,
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          K = jc(
            Z,
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
          ),
          [L, I] = F(2, t => {
            const y = Z.c25();
            return Z.a4v(33984 + t),
              Z.b9j(3553, y),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              C => {
                let H = 0, w = 0, G = 0, R = 1 / 0, Q = 1 / 0, p = 1 / 0, r = -1 / 0, z = -1 / 0, A = -1 / 0;
                Z.fas(36160, 36096, 3553, y, 0);
                Z.c4s(256);
                pb().scale3dSelf(C *= 1.1).multiplySelf(pb(ma[t], n).multiplySelf(m).invertSelf());
                for (let E = 0; 8 > E; ++E) {
                  const M = f[E];
                  mb(4 & E ? 1 : -1, 2 & E ? 1 : -1, 1 & E ? 1 : -1);
                  H -= M.x = (0 | ib) / (C * lb);
                  w -= M.y = (0 | jb) / (C * lb);
                  G -= M.z = (0 | kb) / (C * lb);
                }
                pb().rotateSelf(298, 139).translateSelf(H / 8, w / 8, G / 8);
                for (C = 0; 8 > C; ++C) {
                  const { x: E, y: M, z: T } = f[C];
                  mb(E, M, T);
                  R = $a(R, ib);
                  r = ab(r, ib);
                  Q = $a(Q, jb);
                  z = ab(z, jb);
                  p = $a(p, kb);
                  A = ab(A, kb);
                }
                C = 10 + t;
                p *= 0 > p ? C : 1 / C;
                A *= 0 < A ? C : 1 / C;
                Z.uae(
                  D("b"),
                  !1,
                  ob(
                    pb(u, n).scaleSelf(2 / (r - R), 2 / (z - Q), 2 / (p - A)).translateSelf(
                      (r + R) / -2,
                      (z + Q) / -2,
                      (p + A) / 2,
                    ).multiplySelf(l),
                    v,
                    t,
                  ),
                  16 * t,
                  16,
                );
              };
          }),
          V = Z.c5w();
        q();
        Y.uae(q("a"), !1, ob(zb(1e-4, 2, 1.2, 0.4)));
        Y.c5t(0, 0, 0, 0);
        Y.v5y(0, 0, 128, 128);
        Y.e8z(2929);
        Y.e8z(2884);
        D();
        Z.ubh(D("q"), 2);
        K();
        Z.ubh(K("q"), 2);
        Z.b6o(36160, V);
        Z.d45([0]);
        Z.r9l(0);
        Z.a4v(33986);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, B);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.c5t(0, 0, 0, 1);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.d4n(515);
        NO_INLINE(Ib)();
        NO_INLINE(bc)();
        requestAnimationFrame(k);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = La;
  NO_INLINE(Hb)(() => {
    Ab(() => {
      let f = 0;
      const q = [],
        D = [],
        K = [],
        L = [],
        I = new Int32Array(8),
        V = new Map(),
        t = new Int32Array(I.buffer, 0, 5),
        y = new Float32Array(I.buffer);
      h.map((w, G) => {
        let R;
        const Q = p => {
          let { x: r, y: z, z: A } = R[p], E = (y[0] = r, y[1] = z, y[2] = A, p = "" + (R.C ? t : I), V.get(p));
          return void 0 !== E
            ? (r = 3 * E, L[r] = (L[r++] + I[5]) / 2, L[r] = (L[r++] + I[6]) / 2, L[r] = (L[r] + I[7]) / 2)
            : (V.set(p, E = V.size), D.push(r, z, A, y[3]), K.push(I[4]), L.push(I[5], I[6], I[7])),
            E;
        };
        for (R of (y[3] = 40 === G ? -12 : 41 === G ? -25 : G, w.o)) {
          const { x: p, y: r, z } = Tb(R);
          I[4] = 0 | R.u;
          I[5] = 32767 * p;
          I[6] = 32767 * r;
          I[7] = 32767 * z;
          for (let A = 2, E = Q(0), M = Q(1); R.length > A; ++A) {
            q.push(E, M, M = Q(A));
          }
        }
        w.o = 0;
        w.s = f;
        w.D = f = q.length;
      });
      for (const w of [Z, Y]) {
        w.b11(34962, w.c1b()),
          w.b2v(34962, new Float32Array(D), 35044),
          w.v7s(0, 4, 5126, !1, 0, 0),
          w.b11(34962, w.c1b()),
          w.b2v(34962, new Int16Array(L), 35044),
          w.v7s(1, 3, 5122, !0, 0, 0),
          w.b11(34962, w.c1b()),
          w.b2v(34962, new Uint32Array(K), 35044),
          w.v7s(2, 4, 5121, !0, 0, 0),
          w.b11(34963, w.c1b()),
          w.b2v(34963, new Uint16Array(q), 35044),
          w.e3x(0),
          w.e3x(1),
          w.e3x(2);
      }
      let C = [], H = [];
      try {
        const [w, G, R, Q, p] = JSON.parse(localStorage.spdnt22);
        C = w;
        H = G;
        Ia = R;
        pa = Q;
        d = p;
      } catch {
      }
      e.map((w, G) => w.g = w.h = w.i = 14 !== G && C[G] ? 1 : 0);
      Ma.map((w, G) => w.i = H[G] ? 1 : 0);
      Kb();
      oa = Da || 14 !== Ia ? 1 : 0;
      Ab(b);
    });
    const k = f => x(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f),
      n = f =>
        S(
          J(N(), x(0, -f / 2).scale(6, f - 1, 2.2)),
          J(N(), x(0, -f / 2 - 6).scale(4, f - 3, 4)),
          J(N(32, 1), x(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      m = F(11, f => tb(rb(sb(18), k(f), O(1, 1, 0.8, 0.2)).reverse(), rb(sb(18), k(f + 1), O(1, 1, 0.8, 0.2)), 1))
        .flat(),
      v = [
        ...J(N(), x(0, -3).scale(11, 1.4, 3), O(0.9, 0.9, 0.9, 0.2)),
        ...J(N(), x(0, -2.2).scale(7.7, 0.5, 4), O(0.5, 0.5, 0.5, 0.2)),
        ...F(12, f => J(N(), u.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), O(0.6, 0.5, 0.4, 0.3))).flat(),
        ...S(
          J(N(6), u.rotate(90).scale(6, 8, 6), O(0.3, 0.6, 0.6, 0.3)),
          J(N(4, 0, 0.01), x(0, 6).scale(12, 2, 0.75).rotate(0, 45), O(0.3, 0.6, 0.6, 0.3)),
          J(N(6), u.rotate(90).scale(5, 12, 5), O(0.3, 0.6, 0.6, 0.3)),
          ...[-5, 0, 5].map(f => J(N(5), x(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), O(0.3, 0.6, 0.6, 0.3))),
        ),
      ],
      B = S(
        J(N(), x(0, -0.5, 1).scale(1.15, 1.2, 6.5), O(0.25, 0.25, 0.35, 0.3)),
        S(
          J(N(3), x(0, 0, -5.5).scale(3, 2), O(0.6, 0.3, 0.4, 0.3)),
          J(N(), x(0, 0, -3.65).scale(2.5, 3), O(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => J(N(), x(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), O(0.7, 0.2, 0, 0.3))),
      );
    P();
    c([Na.slice(1)], x(-2).scale3d(3).rotate(90, 0));
    P();
    Mb(x(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, q) => {
      c(N(), x(0, 0, q ? 22 : -23).scale(3, 1, 8), O(0.9, 0.9, 0.9, 0.2));
      c(N(), x(0, 6.3, f).scale(4, 0.3, 1), O(0.3, 0.3, 0.3, 0.4));
      c(N(), x(0, 1, f).scale(3, 0.2, 0.35), O(0.5, 0.5, 0.5, 0.3));
    });
    c(N(), x(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(N(), x(3, 1.5, -20).scale(0.5, 2, 5), O(0.7, 0.7, 0.7, 0.2));
    c(N(), x(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), O(0.75, 0.75, 0.75, 0.2));
    c(N(5), x(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), O(0.6, 0.3, 0.3, 0.4));
    c(S(
      $b(
        J(N(6, 0, 0, 0.3), x(8, -3, -4).scale(13, 1, 13), O(0.7, 0.7, 0.7, 0.2)),
        S(
          J(N(6, 0, 0, 0.3), x(0, -0.92).scale(13, 2, 13), O(0.8, 0.8, 0.8, 0.2)),
          J(N(), u.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), O(0.5, 0.5, 0.5, 0.5)),
        ),
        J(
          N(),
          u.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          O(0.8, 0.2, 0.2, 0.5),
        ),
        J(N(6), x(0, -8).scale(9, 8, 7), O(0.2, 0.1, 0.4, 0.5)),
      ),
      J(N(5), u.scale(5, 30, 5), O(0.4, 0.2, 0.6, 0.5)),
      J(N(5, 0, 1.5), x(0, 1).scale(4.5, 0.3, 4.5), O(0.7, 0.5, 0.9, 0.2)),
      J(N(6), x(15, -1.5, 4).scale(3.5, 1, 3.5), O(0.5, 0.5, 0.5, 0.5)),
    ));
    Mb(x(15, -2, 4));
    c(N(), x(-18.65, -3, 55).scale(2.45, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    Mb(x(-55, -1.1, 46).rotate(0, 90));
    c(N(7), x(-57, -2.6, 46).scale(4, 1, 4), O(0.8, 0.8, 0.8, 0.3));
    c(N(6), x(-61.3, -2.4, 49).scale(3, 1, 5), O(0.4, 0.6, 0.6, 0.3));
    c(v, x(-53, 0, 55));
    c(N(), x(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), O(0.7, 0.7, 0.7, 0.2));
    c(N(3, 0, -0.5), x(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), O(0.8, 0.8, 0.8, 0.2));
    c(S(
      $b(
        J(N(), x(-100, -2.4, 55).scale(8, 0.9, 8), O(0.8, 0.8, 0.8, 0.2)),
        J(N(), x(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), O(0.8, 0.8, 0.8, 0.2)),
        J(N(), x(-100, -2.6, 70).scale(3, 1.1, 7), O(0.8, 0.8, 0.8, 0.2)),
        J(N(), x(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), O(0.8, 0.8, 0.8, 0.2)),
        J(N(6), x(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), O(0.6, 0.6, 0.6, 0.3)),
        J(N(), x(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), O(0.8, 0.8, 0.8, 0.2)),
        J(N(), x(-100, 0.42, 92).scale(3, 1.1, 4.1), O(0.8, 0.8, 0.8, 0.2)),
      ),
      J(N(8), x(-100, -1, 55).scale(7, 0.9, 7), O(0.3, 0.3, 0.3, 0.4)),
      J(N(8), x(-100, -2, 55).scale(4, 0.3, 4), O(0.4, 0.4, 0.4, 0.5)),
      J(N(8, 0, -3.1), x(-100, -3, 55).scale(0.4, 1, 0.4), O(0.4, 0.4, 0.4, 0.5)),
    ));
    c(S(
      J(N(), x(-100, 1, 63).scale(7.5, 4), O(0.5, 0.5, 0.5, 0.4)),
      J(N(), x(-100, 0, 70).scale(2, 2, 10), O(0.5, 0.5, 0.5, 0.4)),
      J(N(20, 1), x(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), O(0.5, 0.5, 0.5, 0.4)),
    ));
    Na.map(({ x: f, z: q }) => {
      c(N(6), x(3 * f, 3, 15 * q).scale(0.7, 4, 0.7), O(0.6, 0.3, 0.3, 0.4));
      c(N(6), x(7 * f - 100, -3, 7 * q + 55).scale(1, 8.1), O(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(D => c(N(6), x(7 * f - 100, D, 7 * q + 55).scale(1.3, 0.5, 1.3), O(0.4, 0.2, 0.2, 0.8)));
      c(N(14, 1), x(9 * f - 38.9, -7.3, 11 * q + 17).scale(1, 4), O(0.25, 0.25, 0.25, 1));
      [1.5, 8].map(D =>
        c(N(17, 1), x(9 * f - 38.9, D - 11.3, 11 * q + 17).scale(1.5, 0.5, 1.5), O(0.6, 0.6, 0.6, 0.3))
      );
    });
    F(7, f => {
      c(
        N((23 * f + 1) % 5 + 5, 0, 0.5),
        x(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
        O(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    c(N(), x(-87, -9.5, 24).scale(7, 1, 3), O(0.4, 0.5, 0.6, 0.4));
    c(N(4), x(-86, -9.2, 27).scale(5, 1, 5), O(0.5, 0.6, 0.7, 0.3));
    c(N(12, 1), x(-86, -9, 31).scale(1.5, 1, 1.5), O(0.3, 0.3, 0.4, 0.1));
    Mb(x(-86, -7.5, 31));
    c(
      S(
        $b(
          J(N(5), x(0, 0, -7).scale(2, 1.2, 2), O(0.2, 0.4, 0.7, 0.3)),
          J(N(5), u.scale(9, 1.2, 9), O(0, 0.2, 0.3, 0.5)),
          J(N(), u.scale(11, 1, 13), O(0.3, 0.4, 0.6, 0.3)),
        ),
        J(N(5), u.scale(5.4, 5, 5.4), O(0, 0.2, 0.3, 0.5)),
      ),
      x(-38.9, -11.3, 17),
    );
    Mb(x(-38.9, -9.6, 10));
    c(
      S(
        $b(
          J(N(6), x(0, 0, -18).scale(15, 1.2, 15), O(0.7, 0.7, 0.7, 0.3)),
          J(N(), u.scale(4, 1.2, 6), O(0.45, 0.4, 0.6, 0.3)),
        ),
        ...F(6, f =>
          F(6, q =>
            J(
              N(6),
              x(4.6 * q - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * q) - 32).scale(2, 5, 2),
              O(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      x(-38.9, -11.3, -1),
    );
    c(N(5), x(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), O(0.8, 0.1, 0.25, 0.4));
    Mb(x(-84, -0.7, 85).rotate(0, 45));
    c(
      S(
        $b(J(N(), x(26.5, -1.6, 10).scale(20, 2.08, 3)), J(N(), x(26.5, -0.5, 10).scale(19, 2, 0.5))),
        ...F(4, f => J(N(), x(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
        ...F(3, f => J(N(), x(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
      ),
      x(-123, 0.2, -12),
      O(0.5, 0.5, 0.6, 0.2),
    );
    Mb(x(-116, -1.4, -18).rotate(0, 180));
    c(N(6), x(-116, -2.6, -16.5).scale(3.2, 0.8, 3), O(0.6, 0.5, 0.7, 0.2));
    c(N(), x(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(N(), x(-115.5, -17, -12).scale(0.5, 15, 2.2), O(0.6, 0.6, 0.6, 0.3));
    c(N(8), x(-114, -17, -2).scale(2, 15, 2), O(0.6, 0.6, 0.6, 0.3));
    c(N(8), x(-79, -17, -2).scale(2, 15, 2), O(1, 1, 1, 0.3));
    c(N(), x(-77, -17, -50.5).scale(2.2, 15, 0.5), O(0.6, 0.6, 0.6, 0.3));
    c(S(
      J(N(12), x(-77, -14.5, -12).scale(4, 17.5, 4), O(0.7, 0.7, 0.7, 0.2)),
      J(N(12), x(-77, 3.1, -12).scale(3, 5, 3), O(0.4, 0.5, 0.6, 0.2)),
      J(N(), x(-79, 0.1, -12).scale(3.5, 2, 1.3), O(0.4, 0.5, 0.6, 0.2)),
      J(N(), x(-77, 0.1, -14).scale(1.5, 2, 2), O(0.4, 0.5, 0.6, 0.2)),
    ));
    c(S(
      J(N(), x(-93, -5.8, -40).scale(9, 1, 5), O(0.8, 0.8, 0.8, 0.1)),
      J(N(9), x(-98, -5.8, -40).scale(3, 8, 3), O(0.7, 0.7, 0.7, 0.2)),
    ));
    c(N(), x(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), O(0.6, 0.6, 0.6, 0.3));
    c(N(9), x(-98, -18.4, -40).scale(2.5, 13.5, 2.5), O(0.5, 0.5, 0.5, 0.3));
    Mb(x(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, q) => {
      c(
        S(
          J(N(), x(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), O(0.5, 0.5, 0.5, 0.4)),
          J(N(), u.scale(3, 3, 10), O(0.6, 0.24, 0.2, 0.5)),
          J(N(32, 1), x(0, 3, -5).scale(3, 4, 10).rotate(90, 0), O(0.6, 0.24, 0.2, 0.5)),
          J(N(5), x(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), O(0.6, 0.24, 0.2, 0.5)),
          J(N(5), x(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), O(0.6, 0.24, 0.2, 0.5)),
        ),
        x(f - 100, 0.7, 97),
      );
      c(N(12, 1), x(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), O(0.6, 0.24, 0.2, 0.5));
      [7.2, 1.5].map(D => c(N(15, 1), x(-7.5 * f - 100, D + 0.7, 96).scale(1.1, 0.5, 1.1), O(0.5, 0.24, 0.2, 0.4)));
      c(m, x(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(m, x(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      F(5, D => c(m, x(18.5 * (q - 0.5), 0, 4.8 * D - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2)));
    });
    c(S(
      J(N(), x(-82.07, 0.8, 106).scale(11, 0.9, 2.2), O(0.7, 0.7, 0.7, 0.1)),
      J(N(45, 1), x(-81, 0.7, 106).scale3d(7.7), O(0.7, 0.7, 0.7, 0.1)),
    ));
    c(N(), x(-58, 1, 106).scale(2, 0.65, 2), O(0.7, 0.7, 0.7, 0.2));
    c(N(), x(-50.7, 1, 99).scale(2, 0.65, 1), O(0.7, 0.7, 0.7, 0.2));
    c(N(), x(-42, 0.4, 91).scale(5, 1, 2.5), O(0.7, 0.7, 0.7, 0.3));
    c(N(), x(-34.2, 0.4, 91).scale(3, 1, 3), O(0.7, 0.7, 0.7, 0.3));
    c(N(5), x(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), O(0.2, 0.5, 0.5, 0.6));
    Mb(x(-34, 2.7, 96).rotate(-12, 0));
    c(S(
      $b(
        J(N(6, 0, 0, 0.6), x(-100, 0.7, 105.5).scale(8, 1, 11), O(0.7, 0.7, 0.7, 0.2)),
        J(N(), x(-101.5, 0.7, 93.5).scale(10.5, 1, 2), O(0.7, 0.7, 0.7, 0.2)),
      ),
      J(N(5), x(-100, 0.7, 113).scale(4, 3, 4), O(0.7, 0.7, 0.7, 0.2)),
    ));
    F(3, f => {
      c(n(16), x(-77, -9, -12 * f - 20).rotate(0, 90), O(0.6, 0.6, 0.6, 0.3));
      c(n(16), x(12 * f - 109, -9, -12), O(0.6, 0.6, 0.6, 0.3));
      c(
        n(24.7 - 0.7 * (1 & f)),
        x(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
        1 & f ? O(0.5, 0.5, 0.5, 0.3) : O(0.35, 0.35, 0.35, 0.5),
      );
    });
    c(S(
      J(N(6, 0, 0, 0.3), x(0, -0.92, 95).scale(14, 2, 14), O(0.8, 0.8, 0.8, 0.2)),
      J(N(5), x(0, 0, 95).scale3d(6), O(0.3, 0.3, 0.3, 0.5)),
    ));
    Mb(x(0, 1.7, 82).rotate(0, 180));
    c(N(5), x(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), O(0.5, 0.3, 0.3, 0.4));
    c(N(6), x(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), O(0.5, 0.6, 0.7, 0.3));
    c(N(), x(0, 16, 127.8).scale(1.5, 1, 0.7), O(0.5, 0.6, 0.7, 0.3));
    c(N(7), x(0, 15.1, 133).scale(5, 2, 5), O(0.4, 0.5, 0.6, 0.4));
    c(S(
      $b(
        J(N(), x(0, 16, 110.5).scale(12, 1, 3), O(0.5, 0.3, 0.3, 0.4)),
        J(N(), x(0, 16, 111).scale(3, 1, 3.8), O(0.5, 0.3, 0.3, 0.4)),
      ),
      J(N(5), x(0, 16, 103.5).scale(5.5, 5, 5.5), O(0.5, 0.3, 0.3, 0.4)),
    ));
    Rb(x(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Rb(x(0, 2.8), [5, 10, 3], [-5, 10, 3], ...sb(18).map(({ x: f, z: q }) => [7 * f, 10 * q, 4.5 - 2 * Za(f)]));
    Rb(x(0, 3, 95), ...sb(9).map(({ x: f, z: q }) => [9 * f, 9 * q, 4]));
    Rb(x(0, 19, 134), [0, 0, 3.5]);
    Rb(x(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Rb(x(-89, 0.2, 80), [0, 0, 6]);
    Rb(x(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Rb(x(-115, 0.2, -12), [0, 0, 3.5]);
    Rb(x(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    P();
    c(N(5), x(0, -0.2).scale(5, 1, 5), O(0.6, 0.65, 0.7, 0.3));
    Mb(x(0, 1.2));
    F(2, () => {
      P();
      Na.map(({ x: f, z: q }) => {
        c(N(11, 1), x(4 * f, 4, 4 * q).scale(0.8, 3, 0.8), O(0.5, 0.3, 0.7, 0.6));
        c(N(), x(4 * f, 7, 4 * q).scale(1, 0.3), O(0.5, 0.5, 0.5, 0.3));
      });
      c(S(
        J(N(), u.scale(5, 1, 5), O(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(f => J(N(25, 1), x(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), O(0.8, 0.8, 0.8, 0.3))),
      ));
      c(N(), x(0, -3).scale(8, 2, 8), O(0.4, 0.4, 0.4, 0.3));
    });
    P();
    c(S(
      $b(
        J(N(), u.scale(1.5, 1, 5), O(0.9, 0.9, 0.9, 0.2)),
        J(N(6), u.scale(4, 1, 5), O(0.9, 0.9, 0.9, 0.2)),
        J(N(), x(0, -2).scale(2, 3.2, 1.9), O(0.3, 0.8, 0.5, 0.5)),
        J(N(16, 1, 0, 4), u.scale(1, 1, 1.5).rotate(0, 90), O(0.9, 0.9, 0.9, 0.2)),
      ),
      J(N(), u.scale(1.3, 10, 1.3), O(0.2, 0.7, 0.4, 0.6)),
    ));
    Rb(x(0, 2.8), [0, 0, 4.5]);
    P();
    c(N(3), x(-23, -1.7, 55.8).scale(5, 0.7, 8.3), O(0.3, 0.6, 0.6, 0.2));
    c(N(8), x(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), O(0.8, 0.8, 0.8, 0.2));
    c(N(), x(-23, -3, 55).scale(5.2, 1.7, 3), O(0.5, 0.5, 0.5, 0.3));
    c(N(), x(-23, -2.2, 62).scale(3, 1, 4), O(0.5, 0.5, 0.5, 0.3));
    Mb(x(-23, -0.5, 66.5));
    P();
    c(N(), x(-22.55, -3, 55).scale(1.45, 1.4, 2.7), O(0.7, 0.7, 0.7, 0.2));
    c(S(J(N(), u.scale(3, 1.4, 2.7)), J(N(), u.scale(1.2, 8, 1.2))), x(-33, -3, 55), O(0.7, 0.7, 0.7, 0.2));
    P();
    c(S(
      J(N(), x(-27, -3, 55).scale(3, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2)),
      J(N(), x(-27, -3, 55).scale(1, 3), O(0.9, 0.9, 0.9, 0.2)),
    ));
    c(N(), x(-39, -3, 55).scale(3, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    P();
    c(N(6), x(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), O(0.7, 0.7, 0.7, 0.4));
    P();
    [0, 12, 24].map(f =>
      c(N(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.2, 0.5, 0.6, 0.2))
    );
    P();
    [6, 18].map(f =>
      c(N(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.1, 0.4, 0.5, 0.2))
    );
    P();
    c(
      S(
        $b(
          J(N(5), x(0, 2).scale(5, 7, 5).skewY(8), O(0.2, 0.4, 0.5, 0.5)),
          J(N(5), x(0, 6).scale(1.1, 7, 1.1).skewY(-8), O(0.25, 0.35, 0.5, 0.5)),
          J(N(5), x(0, 9).scale(0.6, 7, 0.6).skewY(8), O(0.35, 0.3, 0.5, 0.5)),
        ),
        J(N(5), u.scale(4, 8, 4), O(0.2, 0.4, 0.5, 0.5)),
        J(N(5), x(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), O(0.2, 0.4, 0.5, 0.5)),
      ),
      x(-38.9, -11.3, 17),
    );
    Rb(x(-39.1, -0.6, 17).rotate(11), ...sb(15).map(({ x: f, z: q }) => [3 * f, 3 * q, 1.2]));
    P();
    F(2, f => c(B, x(9 * f - 110 + (1 & f), 1.9, -12)));
    P();
    F(2, f => c(B, x(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    P();
    F(3, f => c(B, x(9 * f - 106, 1.9, -12)));
    F(4, f => {
      P();
      c(
        N(6),
        x(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        O(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [O(0.1, 0.55, 0.45, 0.2), O(0.2, 0.5, 0.5, 0.3), O(0.3, 0.45, 0.55, 0.4)].map((f, q) => {
      P();
      c(N(), x(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), f);
      2 === q && c(N(), x(-29.1, 0.4, 91).scale(2.1, 1, 3), O(0.7, 0.7, 0.7, 0.3));
      1 === q && c(N(), x(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), O(0.6, 0.6, 0.7, 0.3));
    });
    P();
    c(N(5), u.scale(5, 1.1, 5), O(0.5, 0.3, 0.3, 0.4));
    c(N(5), u.scale(5.5, 0.9, 5.5), O(0.25, 0.25, 0.25, 0.4));
    Mb(x(0, 1.5, -1).rotate(0, 180));
    F(4, f => {
      P();
      F(
        7,
        q => c(J(N(9, 1), x((2 < f ? 3.5 : 4) * (q / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), O(0.3, 0.3, 0.38))),
      );
    });
    P();
    c(v);
    P();
    c(N(15, 1), x(-7.5).rotate(0, 90).scale(3, 2.3, 3), O(0.4, 0.4, 0.4, 0.3));
    c(N(10), x(-7.5).rotate(0, 90).scale(2, 2.5, 2), O(0.3, 0.8, 0.7, 0.3));
    c(N(5), x(-7.5).rotate(0, 90).scale(1, 3), O(0.5, 0.5, 0.5, 0.5));
    Mb(x(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => c(m, u.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(S(J(N(10), u.scale(6, 2, 6), O(0.1, 0.6, 0.5, 0.3)), J(N(10), u.scale(3.3, 6, 3.3), O(0.1, 0.6, 0.5, 0.5))));
    Rb(x(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    P();
    c(N(3), x(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), O(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      c(N(6), x(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), O(0.7, 0.7, 0.7, 0.4));
      c(N(), x(0, 6.2, f + 95).scale(0.5, 11, 0.5), O(0.5, 0.3, 0.3, 0.4));
    });
    P();
    c(S(
      J(N(45, 1), u.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)),
      J(N(), x(0, 0, -5.5).scale(1.5, 3, 2.7), O(0.45, 0.45, 0.45, 0.2)),
    ));
    c(N(8), x(0, 2).scale(3, 1.5, 3).rotate(0, 22), O(0.7, 0.7, 0.7, 0.1));
    c(N(5), x(0, 2).scale(1, 2), O(0.3, 0.3, 0.3, 0.2));
    Rb(x(0, 3), ...sb(14).map(({ x: f, z: q }) => [5.6 * f, 5.6 * q, 2]));
    P();
    [-1, 1].map(f => c(m, u.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    c(S(J(N(28, 1), x(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), J(N(), u.scale(9, 5, 2), O(0.3, 0, 0, 0.3))));
    c(J(N(28, 1), u.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(J(N(5), x(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    P();
    c(S(
      J(N(28, 1), x(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)),
      J(N(), x(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)),
      J(N(), x(0, 0, 7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),
    ));
    c(J(N(28, 1), u.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(J(N(5), x(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    P();
    c(S(
      J(N(28, 1), x(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)),
      J(N(), x(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)),
      J(N(), x(0, 0, -7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),
    ));
    c(J(N(28, 1), u.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(J(N(5), x(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    F(2, () => {
      P();
      c(S(
        J(N(30, 1, 1.15, 1), x(0, -3).scale(3.5, 1, 3.5), O(0.7, 0.4, 0.25, 0.7)),
        J(N(30, 1, 1.3, 1), x(0, -2.5).scale(2.6, 1, 3), O(0.7, 0.4, 0.25, 0.2)),
        J(N(), x(4, -1.2).scale3d(2), O(0.7, 0.4, 0.25, 0.3)),
      ));
      Mb(x(0, -3, 4));
    });
    P();
    c(ub(20), x(0, 1).scale3d(0.5), O(1, 0.3, 0.4));
    c(ub(30), u.scale(0.65, 0.8, 0.55), O(1, 0.3, 0.4));
    c(N(), x(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), O(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      c(m, u.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), O(1, 1, 0.8));
      c(
        J(S(N(15, 1), J(N(), x(0, 0, 1).scale(2, 2, 0.5))), u.rotate(-90, 0).scale(0.1, 0.05, 0.1), O(0.3, 0.3, 0.3)),
        x(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map(f => {
      P();
      c(N(20, 1), x(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), O(1, 0.3, 0.4));
    });
    P();
    c(
      ub(30, 24, (f, q, D) => {
        const K = q / 24, L = f * Math.PI * 2 / 30, I = Math.sin(K ** 0.6 * Math.PI / 2);
        f = K * K * Math.sin(f * Math.PI * 14 / 30) / 4;
        return 23 < q
          ? { x: D.C = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(L) * I,
            y: Math.cos(K * Math.PI) - K - f,
            z: Math.sin(L) * I + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      u.scale(0.7, 0.7, 0.7),
      O(1, 1, 1),
    );
    [-1, 1].map(f => c(ub(12), x(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    P();
    c(N(6, 1), u.scale(0.12, 1.2, 0.12), O(0.3, 0.3, 0.5, 0.1));
    c(N(10), x(0, 0.8).scale(0.2, 0.3, 0.2), O(1, 0.5, 0.2));
    c(N(3), x(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), O(0.2, 0.2, 0.2, 0.1));
  });
});
