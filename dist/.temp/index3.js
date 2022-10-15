let da,
  ea,
  fa,
  ia,
  ja,
  ka,
  la,
  ma,
  oa,
  pa,
  qa,
  ra,
  sa,
  ta,
  ua,
  va,
  wa,
  Aa,
  Ba,
  a = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 0,
  Ka = 14,
  La = 0.1;
const Ma = Math.PI / 180,
  Na = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    );
var Oa = 0, Ta = 180, Ua = 0, Va = 0, Wa = 0;
const Xa = [],
  d = [],
  Ya = [],
  Za = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  $a = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  ab = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  bb = NO_INLINE(c => 0 > c ? -c : c),
  cb = NO_INLINE((c, b) => c < b ? c : b),
  db = NO_INLINE((c, b) => b < c ? c : b),
  eb = (c, b) => bb(c) > b ? c : 0,
  fb = (c, b = 0, g = 1) => c < b ? b : g < c ? g : c,
  gb = c => Math.atan2(Math.sin(c * Ma), Math.cos(c * Ma)) / Ma,
  hb = (c, b, g) => c + (2 * (b = (b - c) % 360) % 360 - b) * fb(g) || 0,
  ib = (c, b, g) =>
    (0 < g ? 1 > g ? c + (b - c) * g : b : c)
    || 0,
  jb = (c, b) => (c = fb(c), ib(c, 1 - c, b)),
  kb = (c, b, g = 0) => (c * c + b * b + g * g) ** 0.5,
  mb = (
    c,
    b = lb,
    g = 0,
  ) => (g *= 16,
    b[g++] = c.m11,
    b[g++] = c.m12,
    b[g++] = c.m13,
    b[g++] = c.m14,
    b[g++] = c.m21,
    b[g++] = c.m22,
    b[g++] = c.m23,
    b[g++] = c.m24,
    b[g++] = c.m31,
    b[g++] = c.m32,
    b[g++] = c.m33,
    b[g++] = c.m34,
    b[g++] = c.m41,
    b[g++] = c.m42,
    b[g++] = c.m43,
    b[g] = c.m44,
    b),
  l = (
    c = e,
    b = h,
  ) => (b.m11 = c.m11,
    b.m12 = c.m12,
    b.m13 = c.m13,
    b.m14 = c.m14,
    b.m21 = c.m21,
    b.m22 = c.m22,
    b.m23 = c.m23,
    b.m24 = c.m24,
    b.m31 = c.m31,
    b.m32 = c.m32,
    b.m33 = c.m33,
    b.m34 = c.m34,
    b.m41 = c.m41,
    b.m42 = c.m42,
    b.m43 = c.m43,
    b.m44 = c.m44,
    b),
  rb = (c = 0, b = 0, g = 0, k = 1) => {
    nb = h.m11 * c + h.m21 * b + h.m31 * g + h.m41 * k;
    ob = h.m12 * c + h.m22 * b + h.m32 * g + h.m42 * k;
    pb = h.m13 * c + h.m23 * b + h.m33 * g + h.m43 * k;
    qb = h.m14 * c + h.m24 * b + h.m34 * g + h.m44 * k;
  };
var nb, ob, pb, qb;
const x = NO_INLINE((c, b, g) => e.translate(c, b, g)),
  sb = (c, b) => Array.from(Array(c), (g, k) => b(k)),
  tb = (c, b, g) => (c.A = g, c.s = b, c),
  xb = (c, b, g = c.s) => (l(b), tb(c.map(({ x: k, y: m, z: p }) => (rb(k, m, p), { x: nb, y: ob, z: pb })), g, c.A)),
  B = (c, b, g) => c.map(k => xb(k, b, g)),
  yb = (c, b = 0) =>
    sb(c, g => {
      const k = Math.cos(2 * Math.PI * g / c);
      return { x: Math.sin(2 * Math.PI * g / c), y: 0, z: 0.01 > bb(k) ? k : 0 > k ? k - b : k + b };
    }),
  zb = (c, b, g) =>
    c.map((k, m, { length: p }) => tb([k, b[p - m - 1], b[p - (m + 1) % p - 1], c[(m + 1) % p]], c.s, g)),
  G = (
    c,
    b,
    g = 0,
    k,
  ) => (c = c ? yb(c, k) : Za,
    k = xb(c, x(0, 1).scale3d(0 < g ? g : 1)),
    c = xb(c, x(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...zb(c, k, b), k, c]),
  Ab = (
    c,
    b = c,
    g = (
      k,
      m,
    ) => (m *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / c) * Math.sin(m), y: Math.cos(m), z: Math.sin(k) * Math.sin(m) }),
  ) => {
    const k = [];
    for (let m = 0; c > m; m++) {
      for (let p = 0; b > p; p++) {
        const D = tb([], 0, 1);
        k.push(D);
        D.push(g(m, p, D));
        p && D.push(g((m + 1) % c, p, D));
        b - 1 > p && D.push(g((m + 1) % c, p + 1 % b, D));
        D.push(g(m, p + 1 % b, D));
      }
    }
    return k;
  },
  L = NO_INLINE((c, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c),
  Bb = c => {
    let b, g = 0, k = 0, m = 0, p = c.at(-1);
    for (b of c) {
      g += (p.y - b.y) * (p.z + b.z), k += (p.z - b.z) * (p.x + b.x), m += (p.x - b.x) * (p.y + b.y), p = b;
    }
    return b = kb(g, k, m), g /= b, k /= b, m /= b, { x: g, y: k, z: m, w: g * p.x + k * p.y + m * p.z };
  },
  Cb = ({ x: c, y: b, z: g }, k) => c * k.x + b * k.y + g * k.z,
  Eb = (c, b) => {
    let g;
    var k, m;
    const p = b.i, D = b.u;
    for (var z = 0; p.length > z; ++z) {
      if (-0.00008 > (g = Cb(c, p[z]) - c.w) ? m = b : 8e-5 < g && (k = b), m && k) {
        k = [];
        m = [];
        z = p.at(-1);
        let I = Cb(z, c) - c.w;
        for (const C of p) {
          g = Cb(C, c) - c.w,
            8e-5 > I && m.push(z),
            -0.00008 < I && k.push(z),
            (8e-5 < I && -0.00008 > g || -0.00008 > I && 8e-5 < g)
            && (I /= g - I,
              z = { x: z.x + (z.x - C.x) * I, y: z.y + (z.y - C.y) * I, z: z.z + (z.z - C.z) * I },
              k.push(z),
              m.push(z)),
            z = C,
            I = g;
        }
        k = 2 < k.length && { i: tb(k, p.s, p.A), u: D, v: b };
        m = 2 < m.length && { i: tb(m, p.s, p.A), u: D, v: b };
        break;
      }
    }
    return { x: k, y: m };
  },
  Hb = (c, b, g = Bb(b.i)) => {
    let k, m;
    return c
      ? ({ x: k, y: m } = Eb(c, b), k || m || c.i.push(b), k && (c.o = Hb(c.o, k, g)), m && (c.m = Hb(c.m, m, g)))
      : c = { x: g.x, y: g.y, z: g.z, w: g.w, i: [b], o: 0, m: 0 },
      c;
  },
  Ib = (c, b, g) => {
    const k = [],
      m = (p, D) => {
        let { x: z, y: I } = Eb(p, D);
        z || I || (0 < g * Cb(p, b) ? z = D : I = D);
        z && (p.o ? m(p.o, z) : k.push(z));
        I && p.m && m(p.m, I);
      };
    for (const p of b.i) {
      m(c, p);
    }
    return k;
  },
  Jb = (c, b) => c && (b(c), Jb(c.o, b), Jb(c.m, b)),
  Kb = c => (Jb(c, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.i) {
      k.u = !k.u;
    }
  }),
    c),
  Lb = c => c.length ? c.reduce((b, g) => Hb(b, { i: g, u: 0, v: 0 }), 0) : c,
  Mb = (...c) =>
    c.reduce((b, g) => {
      const k = [];
      if (b = Lb(b), g) {
        g = Lb(g);
        Jb(b, m => m.i = Ib(g, m, 1));
        Jb(g, m => k.push([m, Ib(b, m, -1)]));
        for (let [m, p] of k) {
          for (const D of p) {
            Hb(b, D, m);
          }
        }
      }
      return b;
    }),
  Q = (c, ...b) => {
    const g = p => {
        let D;
        return p.v && ((D = m.get(p.v)) ? (k.delete(D), p = g(p.v)) : m.set(p.v, p)), p;
      },
      k = new Map(),
      m = new Map();
    return c = Kb(Mb(Kb(Lb(c)), ...b)),
      Jb(c, p => {
        for (const D of p.i) {
          k.set(g(D), D.u);
        }
      }),
      Array.from(k, ([{ i: p }, D]) => {
        const z = p.map(({ x: I, y: C, z: f }) => ({ x: I, y: C, z: f }));
        return tb(D ? z.reverse() : z, p.s, p.A);
      });
  },
  Nb = NO_INLINE(c => 1 - Math.exp(-Da * c)),
  R = NO_INLINE((c, b, g) => ib(c, b, Nb(g))),
  Ob = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Rb = NO_INLINE(c => {
    let b = 0;
    const g = C => Math.sin(C * Math.PI * 2),
      k = C => 0.5 > C % 1 ? 1 : -1,
      m = C => C % 1 * 2 - 1,
      p = C => 2 > (C = C % 1 * 4) ? C - 1 : 3 - C,
      D = () => {
        let C = 0;
        const f = aa => {
            let ca, U, Pa, Db = 0, ub = 0;
            const Tb = [],
              Qa = new Int32Array(aa * Pb),
              cc = 2 ** (q - 9) / aa,
              dc = Math.PI * 2 ** (M - 8) / aa,
              Fb = T * aa & -2;
            for (let vb = 0; 11 >= vb; ++vb) {
              for (
                let wb = 0, Ub = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + vb];
                32 > wb;
                ++wb
              ) {
                const Vb = (32 * vb + wb) * aa;
                for (var na = 0; 4 > na; ++na) {
                  if (ca = 0, Ub && (ca = u[Ub - 1].charCodeAt(wb + 32 * na) - 40, ca += 0 < ca ? 106 : 0), ca) {
                    var xa;
                    if (!(xa = Tb[ca])) {
                      xa = ca;
                      let W = void 0, ya = void 0;
                      var Wb = ca;
                      let ec = 0, fc = 0;
                      const gc = 2 > b ? m : g, hc = 2 > b ? 1 > b ? k : p : g, Xb = new Int32Array(t + H + Ja);
                      for (let Ra = 0, Gb = 0; t + H + Ja > Ra; ++Ra, ++Gb) {
                        let Sa = 1;
                        t > Ra
                          ? Sa = Ra / t
                          : t + H > Ra || (Sa = (1 - (Sa = (Ra - t - H) / Ja)) * 3 ** (-E / 16 * Sa));
                        0 > Gb
                          || (Gb -= 4 * aa,
                            ya = 0.00396 * 2 ** ((Wb + O - 256) / 12),
                            W = 0.00396 * 2 ** ((Wb + ba - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Xb[Ra] = 80
                            * (gc(ec += ya * Sa ** (N / 32)) * F + hc(fc += W * Sa ** (n / 32)) * J
                              + (v ? (2 * Math.random() - 1) * v : 0))
                            * Sa | 0;
                      }
                      xa = Tb[xa] = Xb;
                    }
                    for (let W = 0, ya = 2 * Vb; xa.length > W; ++W, ya += 2) {
                      Qa[ya] += xa[W];
                    }
                  }
                }
                for (let W, ya = 0; aa > ya; ++ya) {
                  xa = 0;
                  na = 2 * (Vb + ya);
                  var za = (((W = Qa[na]) || Pa)
                    && (U = 0.00308 * r,
                      1 !== b && 4 !== b || (U *= Math.sin(cc * na * Math.PI * 2) * ha / 512 + 0.5),
                      U = 1.5 * Math.sin(U),
                      Db += U * ub,
                      za = (1 - y / 255) * (W - ub) - Db,
                      ub += U * za,
                      W = 4 === b ? ub : 3 === b ? za : Db,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= A / 32,
                      Pa = 1e-5 < W * W,
                      za = Math.sin(dc * na) * K / 512 + 0.5,
                      xa = W * (1 - za),
                      W *= za),
                    na < Fb || (xa += Qa[1 + na - Fb] * P / 255, W += Qa[na - Fb] * P / 255),
                    C + na >> 1);
                  z[za] += (Qa[na] = xa) / 65536;
                  I[za] += (Qa[++na] = W) / 65536;
                }
              }
            }
            C += aa * Pb;
          },
          u = $a[b],
          [F, O, N, J, ba, n, v, t, H, w, E, q, r, y, A, K, M, P, T, ha] = ab[b],
          Ja = 4 * w ** 2;
        f(5513);
        f(4562);
        f(3891);
        Ob(5 > ++b ? D : c);
      },
      z = (fa = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: Qb / 2 })).getChannelData(0),
      I = fa.getChannelData(1);
    Ob(D);
  }),
  Sb = (c, b, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + c) / (c - b), -1, 0, 0, 2 * b * c / (c - b), 0]);
let Yb = () => {
  let c, b, g, k, m, p, D, z, I, C, f, u, F, O, N, J, ba = !0;
  const n = [],
    v = () => {
      b4.innerHTML = "Music: " + ba;
      J && (ea || !ba ? J.disconnect() : J.connect(N.destination));
    },
    t = () => {
      const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
      ka = [Sb(0.3, 55, q, 1.732051), Sb(55, 181, q, 1.732051)];
      la = Sb(0.3, 181, q, 1.732051);
      k = z = void 0;
      n.length =
        ia =
        O =
        u =
        F =
        Ea =
        Fa =
          0;
      document.hidden && H(!0);
    },
    H = q => {
      if (ea !== q) {
        if (ea = q, t(), document.body.className = q ? "l m" : "l", q) {
          try {
            document.exitFullscreen().catch(() => 0), document.exitPointerLock();
          } catch {
          }
        }
        v();
      }
    },
    w = q => {
      try {
        N || (N = new AudioContext(), (J = N.createBufferSource()).buffer = fa, J.loop = !0, J.start()),
          document.body.requestFullscreen().catch(() => 0);
      } catch {
      }
      H(!1);
      ja = q;
    },
    E = (q, r) => q.buttons[r]?.pressed || 0 < q.buttons[r]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => w();
  b2.onclick = () => w(1);
  b5.onclick = () => H(!0);
  b4.onclick = () => {
    ba = !ba;
    v();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onclick = q => {
    if (!ea && (q.target === hC && (ia = 1), ja)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = q => {
    let r;
    q.repeat
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
      }[q.code],
        (n[r] = !!q.type[5] && !0) && (0 === r && (ia = 1), 1 === r && H(!0)));
  };
  onmousemove = ({ movementX: q, movementY: r }) => {
    ja && (q || r) && (Ta += 0.1 * q, Oa += 0.1 * r);
  };
  hC.ontouchstart = q => {
    if (!ea) {
      for (let { pageX: r, pageY: y, identifier: A } of q.changedTouches) {
        ja && r > hC.clientWidth / 2
          ? void 0 === z && (I = 0, p = r, D = y, z = A, f = Oa, C = Ta)
          : void 0 === k && (m = 0, b = r, g = y, k = A);
      }
      c = Ca;
    }
  };
  hC.ontouchmove = q => {
    if (!ea) {
      for (let { pageX: M, pageY: P, identifier: T } of q.changedTouches) {
        var r, y, A, K;
        z === T && (Oa = f + (P - D) / 2.3, Ta = C + (M - p) / 2.3, I = 1);
        k === T
          && (T = (b - M) / 19,
            r = bb(T),
            y = (g - P) / 19,
            A = bb(y),
            (K = 0.3 < db(r, A)) && (m = 1),
            u = fb(T, -1) * (K && 0.2 < r),
            F = fb(y, -1) * (K && 0.2 < A),
            2 < r && (b = 19 * (0 > T ? -1 : 1) + M),
            2 < A && (g = 19 * (0 > y ? -1 : 1) + P));
      }
    }
  };
  hC.ontouchend = q => {
    let r;
    document.activeElement === document.body && q.preventDefault();
    for (const y of q.changedTouches) {
      y.identifier === z
        ? (z = void 0, I || (r = 1), I = 0)
        : y.identifier === k
        ? (k = void 0, F = u = 0, m || (r = 1), m = 0)
        : r = 1;
    }
    q.target === hC && r && c && 0.02 < (q = Ca - c) && 0.7 > q && (ia = 1);
  };
  Yb = () => {
    Ea = F + (n[4] ? 1 : 0) - (n[5] ? 1 : 0);
    Fa = u + (n[2] ? 1 : 0) - (n[3] ? 1 : 0);
    let q = navigator.getGamepads()[0];
    q
      && (ja && (Oa += 80 * Da * eb(q.axes[3], 0.3), Ta += 80 * Da * eb(q.axes[2], 0.3)),
        Ea += E(q, 12) - E(q, 13) - eb(q.axes[1], 0.2),
        Fa += E(q, 14) - E(q, 15) - eb(q.axes[0], 0.2),
        E(q, 9) && H(!0),
        (q = E(q, 3) || E(q, 2) || E(q, 1) || E(q, 0)) && !O && (ia = 1),
        O = q);
  };
  document.onvisibilitychange = onblur = onresize = t;
  H(!0);
  DEV_ROOT_FUNCTION();
};
const Zb = (c, b) => {
    1 / 0 > La && (La = a + b, h4.innerHTML = c);
  },
  $b = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        ma = Ya.reduce((c, b) => c + b.j, 0)
      ] + " / XIII";
  },
  ac = () => {
    localStorage["Dante-22"] = JSON.stringify([d.map(c => c.j), Ya.map(c => c.j), Ka, qa, a]);
  },
  S = () => {
    Xa.push({ l: ra = new DOMMatrix(), i: sa = [] });
  },
  V = (c, b = e, g) => sa.push(...B(c, b, g)),
  ic = (c, ...b) => {
    let g, k, m, p, D = 0, z = 0, I = 1, C = -1;
    const f = () => {
      if (f.j) {
        l(Xa[35].l).translateSelf(
          n % 4 * 1.2 - 1.7 + Math.sin(a + n) / 7,
          -2,
          1.7 * (n >> 2) - 5.5 + bb(n % 4 - 2) + Math.cos(a / 1.5 + n) / 6,
        );
      } else {
        let v, t, H, w, E, q = 1, r = 1 / 0;
        for (let y = 0; b.length > y; y++) {
          let A = b[y], K = kb(F - A[0], O - A[1]);
          q = cb(q, K / A[2]);
          0 > (K -= A[2]) ? v = 1 : r > K && (r = K, u = A);
        }
        v
          || (t = F - u[0],
            H = O - u[1],
            w = kb(t, H),
            E = Math.atan2(-H, t),
            I && (p = fb(p / (1 + Math.random())), z = (Math.random() - 0.5) * Math.PI / 2),
            E += z,
            C = -Math.cos(E),
            D = Math.sin(E),
            0.1 < w && (w = cb(w, u[2]) / w, F = t * w + u[0], O = H * w + u[1]));
        I = v;
        p = R(p, 3 + 6 * (1 - q), 3 + q);
        N = R(N, F = R(F, F + C, p), p);
        J = R(J, O = R(O, O + D, p), p);
        g = hb(g, Math.atan2(N - k, J - m) / Ma - 180, Nb(3));
        l(ba).multiplySelf(c).translateSelf(k = N, 0, m = J).rotateSelf(0, g, 7 * Math.sin(1.7 * a));
        1.6 > (rb(), kb(Ua - nb, Va - ob, Wa - pb))
          && (f.j = 1,
            Zb(
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
              ][ma] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              6,
            ),
            $b(),
            ac());
      }
      mb(h, bc, 28 + n);
    };
    let u = b[0], [F, O] = u, [N, J] = u;
    const ba = ra, n = Ya.length;
    Ya.push(f);
  },
  X = (c, b = 0, g = 0) => {
    const k = l(e, Xa[++ta].l);
    return k.m41 = c, k.m42 = b, k.m43 = g, k;
  },
  kc = NO_INLINE(() => {
    let c, b, g, k, m, p, D, z, I, C, f, u, F, O, N, J, ba = 0, n = 1, v = 2, t = 15;
    const H = (r, y, A, K) => ib(r, y, n || (fb(bb(y - r) ** 0.5 - A) + 1 / 7) * Nb(1.5 * K)),
      w = () => l((v ? d[Ka] : Xa[28 !== ba ? ba : 0]).l),
      E = r => {
        1 < v ? (l(d[Ka].l).multiplySelf(d[Ka].C), rb(0, 0.9 < pa ? 15 : 1, -2.4)) : (w(), rb(O, N, J));
        r && (m = (nb - Ua) / Da, p = (pb - Wa) / Da);
        Ua = nb;
        Va = ob;
        Wa = pb;
      },
      q = NO_INLINE(() => {
        var r = 0, y = 0, A = 0, K = 0, M = 0, P = 0, T = -1;
        for (var ha = 0; 36 > ha; ++ha) {
          var Ja = 512 * ha;
          for (var aa = 96; 416 > aa; aa += 4) {
            for (var ca = 0; 2 > ca; ++ca) {
              var U = jc[Ja + aa + ca];
              const Pa = jc[Ja + aa + ca + 2];
              U > K && (K = U);
              U + Pa && (0 > T || T === ha) && (T = ha, Pa === C ? ++r : y && y !== Pa || (y = Pa, ++A));
            }
          }
        }
        C = 0 > T ? 0 : A > 2 * r ? y : C;
        for (r = 36; 128 > r; ++r) {
          ha =
            T =
            A =
            y =
              0;
          Ja = 512 * r;
          for (aa = 0; 128 > aa; ++aa) {
            ca = Ja + 4 * aa,
              U = jc[ca],
              64 > aa ? U > y && (y = U) : U > A && (A = U),
              (U = jc[2 + ca]) > T && (T = U),
              U = jc[1 + ca],
              64 < aa ? U > y && (y = U) : U > A && (A = U),
              (U = jc[3 + ca]) > ha && (ha = U);
          }
          (A -= y) * A > M * M && (M = A);
          (ha -= T) * ha > P * P && (P = ha);
        }
        M *= 0.7;
        z = fb(1 - 0.01 * db(bb(M), bb(P)), 0.3);
        M /= 255;
        K /= 255;
        P /= 255;
        w().invertSelf();
        rb(M, K, P, 0);
        O += nb;
        N += K;
        J += pb;
        E();
      });
    ua = () => {
      E(C);
      Y.r9r(0, 0, 128, 128, 6408, 5121, jc);
      q();
      !v && C === ba || (ba = C, w().invertSelf(), rb(Ua, Va, Wa), O = nb, N = ob, J = pb, v = v && (C ? 0 : 1));
      (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (v = 2);
      1 === C && (d[15].j = -15 > Ua && 0 > Wa ? 1 : 0);
      k = R(k, va * (30 < C && 35 > C), 2);
      f = H(f, Ua, 0.5, 1);
      u = H(u, I = ib(R(I, Va, 2), Va, v || 8 * bb(I - Va)), 2, 1);
      F = H(F, Wa, 0.5, 1);
      ja
        ? (r = v + Nb(18), Ga = ib(Ga, Ua, r), Ia = ib(Ia, Wa, r), Ha = ib(Ha, 1.6 + I, r), Ta = gb(Ta))
        : (Ga = H(Ga, f, 1, 2 + k),
          Ia = H(Ia, F + -18 + 5 * k, 1, 2 + k),
          Ha = H(Ha, db(u + fb((-60 - Wa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          r = cb(-6, -bb(F - Ia)),
          y = f - Ga,
          Ta = hb(Ta, 90 - gb(Math.atan2(r, y) / Ma), n + Nb(10)),
          Oa = hb(Oa, 90 - Math.atan2(kb(r, y), Ha - u) / Ma, n + Nb(10)));
      Oa = fb(Oa, -87, 87);
      n = 0;
      var r = fb(Ea, -1), y = fb(Fa, -1), A = eb(kb(r, y) ** 0.5, 0.1), K = Math.atan2(r, y);
      A && (c = 90 - K / Ma);
      b = hb(b, c, Nb(8));
      g = R(g, A, 10);
      X(Ua, 0.06 * z * g * Math.cos(18.2 * a) + I, Wa).rotateSelf(0, b);
      for (var M = 0; 2 > M; ++M) {
        const P = 9.1 * a - Math.PI * M;
        l(Xa[53].l, X(0)).translateSelf(0, g * fb(0.45 * Math.sin(P - Math.PI / 2))).rotateSelf(
          g * Math.sin(P) * 0.25 / Ma,
          0,
        );
      }
      t = C ? 5 : R(t, v ? 13 : 19 - 2 * cb(0, Va + 10), 2.2);
      m = C || v ? 0 : R(m, 0, 3);
      p = C || v ? 0 : R(p, 0, 3);
      r = (D = v ? 0 : R(D, C ? 7 * fb(2 * A) * z : 0, C ? 9 : 1)) * A * bb(r) * Math.sin(K);
      y = D * A * bb(y) * Math.cos(K);
      K = ja ? (180 + Ta) * Ma : 0;
      A = Da * (m + (Math.cos(K) * y - Math.sin(K) * r));
      M = Da * -t;
      r = Da * (p + (Math.sin(K) * y + Math.cos(K) * r));
      w().invertSelf();
      rb(A, M, r, 0);
      O += nb;
      N += M;
      J += pb;
      E();
    };
    DEV_ROOT_FUNCTION();
  }),
  e = new DOMMatrix(),
  h = new DOMMatrix(),
  lb = new Float32Array(16),
  bc = new Float32Array(760),
  jc = new Uint8Array(65536),
  Pb =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      768),
  Qb = 13966 * Pb,
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  Y = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (const c in Y) {
  [Z, Y].map(b => b[c[0] + [...c].reduce((g, k, m) => (g * m + k.charCodeAt(0)) % 434, 0).toString(36)] = b[c]);
}
Ob(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const k = [{}, {}, {}, {}, {}, {}, {}, {}],
          m = (
            n,
            v,
            t =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            const H = {}, w = (q, r) => (r = n.c6x(r), n.s3c(r, q), n.c6a(r), r), E = n.c1h();
            return n.abz(E, w(t, 35633)),
              n.abz(E, w(v, 35632)),
              n.l8l(E),
              q => q ? H[q] || (H[q] = n.gan(E, q)) : n.u7y(E);
          },
          p = (n, v, t) => {
            ea
              ? 1100 < hC.width && n.d97(4, Xa[55].D - Xa[53].B, 5123, 2 * Xa[53].B)
              : (n.das(4, Xa[v].D - Xa[v].B, 5123, 2 * Xa[v].B, Ya.length), n.d97(4, Xa[t ? 53 : 56].B - 3, 5123, 6));
          },
          D = n => {
            requestAnimationFrame(D);
            var v = (n - (da || n)) / 1e3;
            if (Ca += v, a += Da = ea ? 0 : cb(0.055, v), da = n, 0 < Da) {
              v = (H, w, E) =>
                X(H + Math.sin(a + 2) / 5, w + Math.sin(0.8 * a) / 5, E).rotateSelf(
                  2 * Math.sin(a),
                  Math.sin(0.7 * a),
                  Math.sin(0.9 * a),
                );
              qa = R(qa, d[15].g, 0.2 + 0.3 * bb(2 * d[15].g - 1));
              pa = oa ? (ja = 0, R(pa, -9, 0.015)) : R(pa, fb(a / 3), 1);
              La && a > La && (La = 0, h4.innerHTML = "");
              Yb();
              n =
                (ta = 1,
                  va = jb(d[13].h, d[8].h),
                  Ba = ib(R(Ba, 0, 1), gb(Ba + 60 * Da), d[2].h - d[3].g),
                  wa = ib(R(wa, 0, 5), gb(wa + 56 * Da), va),
                  Aa = ib(R(Aa, 0, 4), gb(Aa + 48 * Da), va),
                  X(0, 270 * (d[1].h - 1) + (2 + 5 * Math.cos(1.5 * a)) * (1 - d[10].h)),
                  cb(1 - d[11].g, d[10].g));
              var t =
                (X(n * Math.sin(0.6 * a + 1.2) * 12, 0, 35),
                  X(n * Math.sin(0.6 * a - 1.2) * 8.2, 0, 55),
                  X(n * Math.sin(0.6 * a) * 12, 0, 45),
                  X(9.8 * (1 - n)),
                  n = fb(1 - 5 * n) * jb(d[11].h, d[2].h),
                  X(0, n * Math.sin(1.35 * a) * 4),
                  X(0, 0, n * Math.sin(0.9 * a) * 8),
                  X(0, -6.5 * d[11].g),
                  n = jb(d[4].g, d[3].g),
                  X(0, n * Math.sin(a) * 5 + 3.5 * (1 - db(d[3].h, d[4].h))),
                  X(0, n * Math.sin(a + 3) * 6, n * Math.sin(0.6 * a + 1) * 6),
                  X(0, -7.3 * d[4].g),
                  n = jb(d[6].h, d[7].h),
                  X(
                    0,
                    -2,
                    10
                      - 8.5 * n * bb(Math.sin(1.1 * a)),
                  ),
                  X(0, -2, 10 - 8.5 * n * bb(Math.sin(2.1 * a))),
                  X(0, -2, 10 - 8.5 * db(n * bb(Math.sin(1.5 * a)), (1 - d[6].h) * (1 - n))),
                  jb(d[5].g, d[13].g));
              for (n = 0; 4 > n; n++) {
                X(
                  (2 < n ? 2 * (1 - t) + t : 0) - 100,
                  t * Math.sin(1.3 * a + 1.7 * n) * (3 + n / 3) + 0.7,
                  115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & n ? -1 : 1)
                    + db(0.05, t) * Math.cos(1.3 * a + 7 * n) * (4 - 2 * (1 - n / 3)),
                );
              }
              n = jb(d[8].g, d[9].g);
              for (let H = 0; 3 > H; ++H) {
                X(0, n * Math.sin(1.5 * a + 1.5 * H) * 4 + (H ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)));
              }
              n = jb(jb((d[9].h + d[9].g) / 2, d[8].g), (d[12].h + d[12].g) / 2);
              X(0, 16 * n, 95 + 8.5 * fb(2 * n - 1));
              X(0, -4.7 * d[0].h, -15);
              X(0, -4.7 * d[10].h, 15);
              X(-99.7, -1.9 - 5.5 * d[3].h, 63.5);
              X(-100, 0.6 - 5.8 * d[13].h, 96.5);
              X(-75, 3 * (1 - d[2].g) * (1 - d[3].h), 55).rotateSelf(180 * (1 - d[2].g) + Ba, 0);
              X(2.5 * (1 - t) - 139.7, -3 * (1 - d[5].h) - t * Math.sin(0.8 * a) - 1.8, 93.5).rotateSelf(
                Math.cos(1.3 * a) * (3 + 3 * t),
                0,
              );
              X(-2 * Math.sin(a)).rotateSelf(25 * Math.sin(a));
              X(-81, 0.6, 106).rotateSelf(0, 40 + wa);
              X(-65.8, 0.8, 106).rotateSelf(0, Aa);
              X(-50.7, 0.8, 106).rotateSelf(0, 180 - Aa);
              X(-50.7, 0.8, 91).rotateSelf(0, 270 + Aa);
              v(-12, 4.2, 40 * pa - 66);
              v(-123, 1.4, 55 - 65 * qa);
              for (v = 0; 16 > v; ++v) {
                13 > v && Ya[v](),
                  t = d[v],
                  n = t.h = R(t.h, t.j, 4),
                  t.g = R(t.g, t.j, 1),
                  l(l(t.l).multiplySelf(t.C), X(0)).rotateSelf(50 * n - 25, 0).translateSelf(0, 1).m44 = n,
                  ia && 3 > (rb(), kb(Ua - nb, Va - ob, Wa - pb)) && (t.j
                    ? 0.7 < n && (t.j = 0, Ka = v, Zb("* click *", 1), ac())
                    : 0.3 > n && (t.j = 1, Ka = v, Zb("* click *", 1), ac())),
                  14 === v && t.j && 0.8 < n && (t.j = 0,
                    13 > ma
                      ? Zb("Not leaving now, there are souls to catch!", 3)
                      : oa || (Zb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), oa = 1));
              }
              ua();
              for (v = 0; 28 > v; ++v) {
                mb(Xa[28 + v].l, bc, v);
              }
              for (let H, w = 0, E = 656; 26 > w; ++w, ++E) {
                H = Xa[2 + w].l, bc[E++] = H.m41, bc[E++] = H.m42, bc[E++] = H.m43;
              }
              DEV_ROOT_FUNCTION();
              Y.cbf(!0, !0, !0, !0);
              Y.c4s(16640);
              Y.u3a(O("j"), bc);
              Y.cbf(!0, !1, !0, !1);
              Y.uae(O("b"), !1, mb(l().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa)));
              p(Y, 56, 1);
              Y.c4s(256);
              Y.cbf(!1, !0, !1, !0);
              Y.uae(O("b"), !1, mb(l().translateSelf(-Ua, -Va, -Wa - 0.3)));
              p(Y, 56, 1);
              Y.f1s();
              ia = 0;
            }
            F();
            Z.u3a(F("j"), bc);
            Z.b6o(36160, u);
            Z.v5y(0, 0, 2048, 2048);
            Z.ubh(F("g"), 4);
            Z.ubh(F("h"), 4);
            Z.uae(F("a"), !1, mb(e));
            v = Ga;
            t = Ha;
            n = Ia;
            ea
              ? (l().rotateSelf(0, 40 * Math.sin(Ca) - 80, -8),
                mb(h, bc, 25),
                mb(h, bc, 26),
                mb(h, bc, 27),
                l(la).invertSelf(),
                rb(3.6, 3.5),
                v = nb,
                t = ob,
                n = 5,
                l(e, I).rotateSelf(20, 0).translateSelf(-v, -t, -n).rotateSelf(0, 99))
              : l(e, I).rotateSelf(-Oa, -Ta).invertSelf().translateSelf(-v, -t, -n);
            J(54.7);
            p(Z, 57, ja);
            ba(126);
            p(Z, 57, ja);
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.c4s(16640);
            Z.ubh(F("g"), 0);
            Z.ubh(F("h"), 1);
            Z.ubu(F("k"), v, t, n);
            Z.uae(F("a"), !1, mb(la));
            Z.uae(F("b"), !1, mb(I));
            Z.uae(F("i"), !1, C);
            p(Z, 57, ja);
            N();
            Z.uae(N("b"), !1, mb(I.invertSelf()));
            Z.ubu(N("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, Ca);
            Z.d97(4, 3, 5123, 0);
          },
          z = new DOMMatrix(),
          I = new DOMMatrix(),
          C = new Float32Array(32),
          f = g,
          u = Z.c5w(),
          F = m(
            Z,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          O = m(
            Y,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          N = m(
            Z,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [J, ba] = sb(2, n => {
            const v = Z.c25();
            return Z.a4v(33984 + n),
              Z.b9j(3553, v),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              t => {
                let H = 0, w = 0, E = 0, q = 1 / 0, r = 1 / 0, y = 1 / 0, A = -1 / 0, K = -1 / 0, M = -1 / 0;
                Z.fas(36160, 36096, 3553, v, 0);
                Z.c4s(256);
                l().scale3dSelf(t *= 1.1).multiplySelf(l(ka[n], z).multiplySelf(I).invertSelf());
                for (let P = 0; 8 > P; ++P) {
                  const T = k[P];
                  rb(4 & P ? 1 : -1, 2 & P ? 1 : -1, 1 & P ? 1 : -1);
                  H -= T.x = (0 | nb) / (t * qb);
                  w -= T.y = (0 | ob) / (t * qb);
                  E -= T.z = (0 | pb) / (t * qb);
                }
                l().rotateSelf(298, 139).translateSelf(H / 8, w / 8, E / 8);
                for (t = 0; 8 > t; ++t) {
                  const { x: P, y: T, z: ha } = k[t];
                  rb(P, T, ha);
                  A = db(A, nb);
                  K = db(K, ob);
                  M = db(M, pb);
                  q = cb(q, nb);
                  r = cb(r, ob);
                  y = cb(y, pb);
                }
                t = 10 + n;
                y *= 0 > y ? t : 1 / t;
                M *= 0 < M ? t : 1 / t;
                Z.uae(
                  F("b"),
                  !1,
                  mb(
                    l(e, z).scaleSelf(2 / (A - q), 2 / (K - r), 2 / (y - M)).translateSelf(
                      (A + q) / -2,
                      (K + r) / -2,
                      (y + M) / 2,
                    ).multiplySelf(h),
                    C,
                    n,
                  ),
                  16 * n,
                  16,
                );
              };
          });
        Z.a4v(33986);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.b6o(36160, u);
        Z.d45([0]);
        Z.r9l(0);
        F();
        Z.ubh(F("q"), 2);
        N();
        Z.ubh(N("q"), 2);
        Z.c5t(0, 0, 0, 1);
        Z.d4n(515);
        Z.e8z(2929);
        Z.e8z(2884);
        Y.e8z(2929);
        Y.e8z(2884);
        Y.v5y(0, 0, 128, 128);
        O();
        Y.uae(O("a"), !1, mb(Sb(1e-4, 2, 1.2, 0.4)));
        kc();
        Yb();
        requestAnimationFrame(D);
        DEV_ROOT_FUNCTION();
      }
    },
    g = new Image();
  g.onload = b;
  g.src = Na;
  Rb(() => {
    Ob(() => {
      let f = 0;
      const u = [],
        F = [],
        O = [],
        N = [],
        J = new Int32Array(8),
        ba = new Map(),
        n = new Int32Array(J.buffer, 0, 5),
        v = new Float32Array(J.buffer);
      Xa.map((w, E) => {
        let q;
        const r = y => {
          let { x: A, y: K, z: M } = q[y], P = (v[0] = A, v[1] = K, v[2] = M, y = "" + (q.A ? n : J), ba.get(y));
          return void 0 !== P
            ? (A = 3 * P, N[A] = (N[A++] + J[5]) / 2, N[A] = (N[A++] + J[6]) / 2, N[A] = (N[A] + J[7]) / 2)
            : (ba.set(y, P = ba.size), F.push(A, K, M, v[3]), O.push(J[4]), N.push(J[5], J[6], J[7])),
            P;
        };
        for (q of (v[3] = 55 < E ? -28 : E, w.i)) {
          const { x: y, y: A, z: K } = Bb(q);
          J[4] = 0 | q.s;
          J[5] = 32767 * y;
          J[6] = 32767 * A;
          J[7] = 32767 * K;
          for (let M = 2, P = r(0), T = r(1); q.length > M; ++M) {
            u.push(P, T, T = r(M));
          }
        }
        w.i = 0;
        w.B = f;
        w.D = f = u.length;
      });
      [Z, Y].map(w => {
        w.b11(34962, w.c1b());
        w.b2v(34962, new Float32Array(F), 35044);
        w.v7s(0, 4, 5126, !1, 0, 0);
        w.b11(34962, w.c1b());
        w.b2v(34962, new Int16Array(N), 35044);
        w.v7s(1, 3, 5122, !0, 0, 0);
        w.b11(34962, w.c1b());
        w.b2v(34962, new Uint32Array(O), 35044);
        w.v7s(2, 4, 5121, !0, 0, 0);
        w.b11(34963, w.c1b());
        w.b2v(34963, new Uint16Array(u), 35044);
        w.e3x(0);
        w.e3x(1);
        w.e3x(2);
      });
      DEV_ROOT_FUNCTION();
      let t = [], H = [];
      try {
        const [w, E, q, r, y] = JSON.parse(localStorage["Dante-22"]);
        t = w;
        H = E;
        Ka = q;
        qa = r;
        a = y;
      } catch {
      }
      d.map((w, E) => w.h = w.g = w.j = 14 !== E && t[E] ? 1 : 0);
      Ya.map((w, E) => w.j = H[E] ? 1 : 0);
      $b();
      pa = ma || 14 !== Ka ? 1 : 0;
      Ob(b);
    });
    var k = [-110, -100, -92, -82, -106, -97, -88];
    const m = f => {
        d.push({ l: ra, C: f });
        V(G(5), f.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
        V(G(5), f.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
        V(G().slice(0, -1), f.translate(0, -0.4).scale(0.5, 0.1, 0.5), L(0.5, 0.5, 0.4));
      },
      p = f => x(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f),
      D = f =>
        Q(
          B(G().slice(0, -1), x(0, -f / 2).scale(6, f - 1, 2.2)),
          B(G().slice(0, -1), x(0, -f / 2 - 4).scale(4, f - 5, 4)),
          B(G(28, 1), x(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      z = sb(11, f => zb(xb(yb(16), p(f), L(1, 1, 0.8, 0.2)).reverse(), xb(yb(16), p(f + 1), L(1, 1, 0.8, 0.2)), 1))
        .flat(),
      I = Q(
        B(G(), x(0, -0.5, 1).scale(1.15, 1.2, 6.5), L(0.25, 0.25, 0.35, 0.3)),
        Q(
          B(G(3), x(0, 0, -5.5).scale(3, 2), L(0.6, 0.3, 0.4, 0.3)),
          B(G(), x(0, 0, -3.65).scale(2.5, 3), L(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => B(G(), x(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), L(0.7, 0.2, 0, 0.3))),
      ),
      C = [
        B(G(), x(0, -3).scale(11, 1.4, 3), L(0.9, 0.9, 0.9, 0.2)),
        B(G(), x(0, -2.2).scale(7.7, 0.5, 4), L(0.5, 0.5, 0.5, 0.2)),
        sb(12, f => B(G(), e.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), L(0.6, 0.5, 0.3, 0.2))).flat(),
        B(
          Q(
            B(G(6), e.rotate(90).scale(6, 8, 6)),
            B(G(4, 0, 0.01), x(0, 6).scale(12, 2, 0.75).rotate(0, 45)),
            B(G(6), e.rotate(90).scale(5, 12, 5)),
            ...[-5, 0, 5].map(f => B(G(5), x(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
          ),
          e,
          L(0.3, 0.6, 0.6, 0.3),
        ),
      ].flat();
    S();
    V([Za.slice(1)], x(-2).scale3d(3).rotate(90, 0));
    S();
    m(x(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, u) => {
      V(G(), x(0, 0, u ? 22 : -23).scale(3, 1, 8), L(0.9, 0.9, 0.9, 0.2));
      V(G(), x(0, 6.3, f).scale(4, 0.3, 1), L(0.3, 0.3, 0.3, 0.4));
      V(G().slice(0, -1), x(0, 1, f).scale(3, 0.2, 0.35), L(0.5, 0.5, 0.5, 0.3));
    });
    V(G(), x(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), L(0.8, 0.8, 0.8, 0.2));
    V(G(), x(3, 1.5, -20).scale(0.5, 2, 5), L(0.7, 0.7, 0.7, 0.2));
    V(G(5), x(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), L(0.6, 0.3, 0.3, 0.4));
    V(G(), x(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), L(0.75, 0.75, 0.75, 0.2));
    V(Q(
      Mb(
        Q(
          B(G(6, 0, 0, 0.3), x(0, -0.92).scale(13, 2, 13), L(0.8, 0.8, 0.8, 0.2)),
          B(G(), e.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), L(0.5, 0.5, 0.5, 0.5)),
        ),
        B(
          G(),
          e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          L(0.8, 0.2, 0.2, 0.5),
        ),
        B(G(6), x(0, -8).scale(9, 8, 7), L(0.2, 0.1, 0.4, 0.5)),
        B(G(6, 0, 0, 0.3), x(8, -4, -4).scale(14, 2, 13), L(0.7, 0.7, 0.7, 0.2)),
      ),
      B(G(6), x(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), L(0.5, 0.5, 0.5, 0.5)),
      B(G(5, 0, 1.5), x(0, 1).scale(4.5, 0.3, 4.5), L(0.7, 0.5, 0.9, 0.2)),
      B(G(5), e.scale(5, 30, 5), L(0.4, 0.2, 0.6, 0.5)),
    ));
    m(x(15.8, -2, 3.8));
    V(G(), x(-18.65, -3, 55).scale(2.45, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2));
    m(x(-55, -1.1, 46).rotate(0, 90));
    V(G(7), x(-57, -2.6, 46).scale(4, 1, 4), L(0.8, 0.8, 0.8, 0.3));
    V(G(6), x(-61.3, -2.4, 49).scale(3, 1, 5), L(0.4, 0.6, 0.6, 0.3));
    V(C, x(-53, 0, 55));
    V(G(), x(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), L(0.7, 0.7, 0.7, 0.2));
    V(G(3, 0, -0.5), x(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), L(0.8, 0.8, 0.8, 0.2));
    V(Q(
      B(G(), x(-100, 1, 63).scale(7.5, 4), L(0.5, 0.5, 0.5, 0.4)),
      B(G(), x(-100, 0, 63).scale(2, 2, 4), L(0.5, 0.5, 0.5, 0.4)),
      B(G(20, 1), x(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), L(0.5, 0.5, 0.5, 0.4)),
    ));
    V(Q(
      Mb(
        B(G(), x(-100, -2.6, 70).scale(3, 1.1, 7), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), x(-100, -2.4, 55).scale(8, 0.9, 8), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), x(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), L(0.8, 0.8, 0.8, 0.2)),
        B(G(6), x(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), L(0.6, 0.6, 0.6, 0.3)),
        B(G(), x(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), x(-100, 0.42, 92).scale(3, 1.1, 4.1), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), x(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), L(0.8, 0.8, 0.8, 0.2)),
      ),
      B(G(8), x(-100, -1, 55).scale(7, 0.9, 7), L(0.3, 0.3, 0.3, 0.4)),
      B(G(8), x(-100, -2, 55).scale(4, 0.3, 4), L(0.4, 0.4, 0.4, 0.5)),
      B(G(8, 0, -3.1), x(-100, -3, 55).scale(0.4, 1, 0.4), L(0.4, 0.4, 0.4, 0.5)),
    ));
    Za.map(({ x: f, z: u }) => {
      V(G(6), x(3 * f, 3, 15 * u).scale(0.7, 4, 0.7), L(0.6, 0.3, 0.3, 0.4));
      V(G(6), x(7 * f - 100, -3, 7 * u + 55).scale(1, 8.1), L(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(F => V(G(6), x(7 * f - 100, F, 7 * u + 55).scale(1.3, 0.5, 1.3), L(0.4, 0.2, 0.2, 0.8)));
      [1.5, 8].map(F =>
        V(G(15, 1), x(9 * f - 38.9, F - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), L(0.6, 0.6, 0.6, 0.3))
      );
      V(G(14, 1).slice(0, -2), x(9 * f - 38.9, -18, 11 * u + 17).scale(1, 14.2), L(0.25, 0.25, 0.25, 1));
    });
    sb(7, f => {
      V(
        G((23 * f + 1) % 5 + 5, 0, 0.5),
        x(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3),
        L(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    V(G(), x(-87, -9.5, 24).scale(7, 1, 3), L(0.4, 0.5, 0.6, 0.4));
    V(G(4), x(-86, -9.2, 27).scale(5, 1, 5), L(0.5, 0.6, 0.7, 0.3));
    V(G(12, 1), x(-86, -9, 31).scale(1.5, 1, 1.5), L(0.3, 0.3, 0.4, 0.1));
    m(x(-86, -7.5, 31));
    V(G(5), x(-38.9, -11.1, 10).scale(2, 1.2, 2), L(0.2, 0.4, 0.7, 0.3));
    V(Q(
      Mb(
        B(G(), x(-38.9, -11.3, 17).scale(11, 1, 13), L(0.3, 0.4, 0.6, 0.3)),
        B(G(5), x(-38.9, -11.1, 17).scale(9, 1, 9), L(0, 0.2, 0.3, 0.5)),
      ),
      B(G(5), x(-38.9, -11.1, 17).scale3d(5.4), L(0, 0.2, 0.3, 0.5)),
    ));
    m(x(-38.9, -9.4, 10));
    V(
      Q(
        Mb(
          B(G(6), x(0, 0, -18).scale(15, 1.3, 15), L(0.7, 0.7, 0.7, 0.3)),
          B(G(6), e.scale(4, 1.2, 8), L(0.45, 0.4, 0.6, 0.3)),
        ),
        ...sb(6, f =>
          sb(6, u =>
            B(
              G(6),
              x(4.6 * u - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * u) - 32).scale3d(2),
              L(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      x(-38.9, -11.3, -1),
    );
    V(G(5), x(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), L(0.8, 0.1, 0.25, 0.4));
    m(x(-84, -0.7, 85).rotate(0, 45));
    V(
      Q(B(G(), x(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...k.map(f => B(G(), x(f, 0.05, -3).scale(1.35, 2, 9)))),
      e,
      L(0.5, 0.5, 0.6, 0.2),
    );
    V(G(), x(-96.5, 1, -2).scale(19, 0.3, 0.3), L(0.5, 0.5, 0.6, 0.2));
    m(x(-116, -1.4, -18).rotate(0, 180));
    V(G(6), x(-116, -2.6, -16.5).scale(3.2, 0.8, 3), L(0.6, 0.5, 0.7, 0.2));
    V(G(), x(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), L(0.8, 0.8, 0.8, 0.2));
    V(G().slice(0, -1), x(-115.5, -17, -12).scale(0.5, 15, 2.2), L(0.6, 0.6, 0.6, 0.3));
    V(G(8).slice(0, -2), x(-114, -17, -2).scale(2, 15, 2), L(0.6, 0.6, 0.6, 0.3));
    V(G(8).slice(0, -2), x(-79, -17, -2).scale(2, 15, 2), L(1, 1, 1, 0.3));
    V(G().slice(0, -1), x(-77, -17, -50.5).scale(2.2, 15, 0.5), L(0.6, 0.6, 0.6, 0.3));
    V(Q(
      B(G(12).slice(0, -1), x(-77, -14.5, -12).scale(4, 17.5, 4), L(0.7, 0.7, 0.7, 0.2)),
      B(G(12), x(-77, 3.1, -12).scale(3, 5, 3), L(0.4, 0.5, 0.6, 0.2)),
      B(G(), x(-79, 0.1, -12).scale(3.5, 2, 1.3), L(0.4, 0.5, 0.6, 0.2)),
      B(G(), x(-77, 0.1, -14).scale(1.5, 2, 2), L(0.4, 0.5, 0.6, 0.2)),
    ));
    V(Q(
      B(G(), x(-93, -5.8, -40).scale(9, 1, 5), L(0.8, 0.8, 0.8, 0.1)),
      B(G(9), x(-98, -5.8, -40).scale(3, 8, 3), L(0.7, 0.7, 0.7, 0.2)),
    ));
    V(G(), x(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), L(0.6, 0.6, 0.6, 0.3));
    V(G(9).slice(0, -1), x(-98, -18.4, -40).scale(2.5, 13.5, 2.5), L(0.5, 0.5, 0.5, 0.3));
    m(x(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, u) => {
      V(
        Q(
          B(G(), x(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), L(0.5, 0.5, 0.5, 0.4)),
          B(G(5), x(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), L(0.6, 0.24, 0.2, 0.5)),
          B(G(), e.scale(3, 3, 10), L(0.6, 0.24, 0.2, 0.5)),
          B(G(5), x(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), L(0.6, 0.24, 0.2, 0.5)),
          B(G(32, 1), x(0, 3, -5).scale(3, 4, 10).rotate(90, 0), L(0.6, 0.24, 0.2, 0.5)),
        ),
        x(f - 100, 0.7, 97),
      );
      V(G(12, 1), x(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), L(0.6, 0.24, 0.2, 0.5));
      [7.2, 1.5].map(F => V(G(15, 1), x(-7.5 * f - 100, F + 0.7, 96).scale(1.1, 0.5, 1.1), L(0.5, 0.24, 0.2, 0.4)));
      V(z, x(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      V(z, x(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      sb(5, F => V(z, x(18.5 * (u - 0.5), 0, 4.8 * F - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2)));
    });
    V(Q(
      B(G(), x(-82.07, 0.8, 106).scale(11, 0.9, 2.2), L(0.7, 0.7, 0.7, 0.1)),
      B(G(45, 1), x(-81, 0.7, 106).scale3d(7.7), L(0.7, 0.7, 0.7, 0.1)),
    ));
    V(G(), x(-58, 1, 106).scale(2, 0.65, 2), L(0.7, 0.7, 0.7, 0.2));
    V(G(), x(-50.7, 1, 99).scale(2, 0.65, 1), L(0.7, 0.7, 0.7, 0.2));
    V(G(), x(-42, 0.4, 91).scale(5, 1, 2.5), L(0.7, 0.7, 0.7, 0.3));
    V(G(), x(-34.2, 0.4, 91).scale(3, 1, 3), L(0.7, 0.7, 0.7, 0.3));
    V(G(5), x(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), L(0.2, 0.5, 0.5, 0.6));
    m(x(-34, 2.7, 96).rotate(-12, 0));
    V(Q(
      Mb(
        B(G(), x(-101.5, 0.7, 93.5).scale(10.5, 1, 2), L(0.7, 0.7, 0.7, 0.2)),
        B(G(6, 0, 0, 0.6), x(-100, 0.7, 105.5).scale(8, 1, 11), L(0.7, 0.7, 0.7, 0.2)),
      ),
      B(G(5), x(-100, 0.7, 113).scale(4, 3, 4), L(0.7, 0.7, 0.7, 0.2)),
    ));
    sb(3, f => {
      V(D(16), x(-77, -9, -12 * f - 20).rotate(0, 90), L(0.6, 0.6, 0.6, 0.3));
      V(D(16), x(12 * f - 109, -9, -12), L(0.6, 0.6, 0.6, 0.3));
      V(
        D(24.7 - 0.7 * (1 & f)),
        x(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
        1 & f ? L(0.5, 0.5, 0.5, 0.3) : L(0.35, 0.35, 0.35, 0.5),
      );
    });
    V(Q(
      Mb(
        B(G(), x(0, 16, 111).scale(3, 1, 3.8), L(0.5, 0.3, 0.3, 0.4)),
        B(G(6, 0, 0, 0.3), x(0, -0.92, 95).scale(14, 2, 14), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), x(0, 16, 110.5).scale(12, 1, 3), L(0.5, 0.3, 0.3, 0.4)),
      ),
      B(G(5), x(0, 0, 95).scale3d(6), L(0.3, 0.3, 0.3, 0.5)),
      B(G(5), x(0, 16, 103.5).scale(5.5, 5, 5.5), L(0.5, 0.3, 0.3, 0.4)),
    ));
    m(x(0, 1.7, 82).rotate(0, 180));
    V(G(5).slice(0, -1), x(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), L(0.5, 0.3, 0.3, 0.4));
    V(G(6), x(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), L(0.5, 0.6, 0.7, 0.3));
    V(G(), x(0, 16, 127.8).scale(1.5, 1, 0.7), L(0.5, 0.6, 0.7, 0.3));
    V(G(7), x(0, 15.1, 133).scale(5, 2, 5), L(0.4, 0.5, 0.6, 0.4));
    ic(x(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    ic(x(0, 2.8), [5, 10, 3], [-5, 10, 3], ...yb(18).map(({ x: f, z: u }) => [7 * f, 10 * u, 4.5 - 2 * bb(f)]));
    ic(x(0, 3, 95), ...yb(9).map(({ x: f, z: u }) => [9 * f, 9 * u, 4]));
    ic(x(0, 19, 134), [0, 0, 3.5]);
    ic(x(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    ic(x(-89, 0.2, 80), [0, 0, 6]);
    ic(x(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    ic(x(-115, 0.2, -12), [0, 0, 3.5]);
    ic(x(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    S();
    V(G(5), x(0, -0.2).scale(5, 1, 5), L(0.6, 0.65, 0.7, 0.3));
    m(x(0, 1.2));
    sb(2, () => {
      S();
      Za.map(({ x: f, z: u }) => {
        V(G(11, 1).slice(0, -2), x(4 * f, 4, 4 * u).scale(0.8, 3, 0.8), L(0.5, 0.3, 0.7, 0.6));
        V(G(), x(4 * f, 7, 4 * u).scale(1, 0.3), L(0.5, 0.5, 0.5, 0.3));
      });
      V(Q(
        B(G().slice(0, -1), e.scale(5, 1, 5), L(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(f => B(G(25, 1), x(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), L(0.8, 0.8, 0.8, 0.3))),
      ));
      V(G(), x(0, -3).scale(8, 2, 8), L(0.4, 0.4, 0.4, 0.3));
    });
    S();
    V(Q(
      Mb(
        B(G(), e.scale(1.5, 1, 5), L(0.9, 0.9, 0.9, 0.2)),
        B(G(), x(0, -2).scale(2, 3.2, 1.9), L(0.3, 0.8, 0.5, 0.5)),
        B(G(6), e.scale(4, 1, 5), L(0.9, 0.9, 0.9, 0.2)),
        B(G(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), L(0.9, 0.9, 0.9, 0.2)),
      ),
      B(G(), e.scale(1.3, 10, 1.3), L(0.2, 0.7, 0.4, 0.6)),
    ));
    ic(x(0, 2.8), [0, 0, 4.5]);
    S();
    V(G(3), x(-23, -1.7, 55.8).scale(5, 0.7, 8.3), L(0.3, 0.6, 0.6, 0.2));
    V(G(8), x(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), L(0.8, 0.8, 0.8, 0.2));
    V(G(), x(-23, -3, 55).scale(5.2, 1.7, 3), L(0.5, 0.5, 0.5, 0.3));
    V(G(), x(-23, -2.2, 62).scale(3, 1, 4), L(0.5, 0.5, 0.5, 0.3));
    m(x(-23, -0.5, 66.5));
    S();
    V(G(), x(-22.55, -3, 55).scale(1.45, 1.4, 2.7), L(0.7, 0.7, 0.7, 0.2));
    V(Q(B(G(), e.scale(3, 1.4, 2.7)), B(G(), e.scale(1.2, 8, 1.2))), x(-33, -3, 55), L(0.7, 0.7, 0.7, 0.2));
    S();
    V(Q(B(G(), e.scale(3, 1.4, 2.7)), B(G(), e.scale(1, 3))), x(-27, -3, 55), L(0.9, 0.9, 0.9, 0.2));
    V(G(), x(-39, -3, 55).scale(3, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2));
    S();
    V(G(6), x(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), L(0.7, 0.7, 0.7, 0.4));
    S();
    [0, 12, 24].map(f =>
      V(G(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.2, 0.5, 0.6, 0.2))
    );
    S();
    [6, 18].map(f =>
      V(G(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.1, 0.4, 0.5, 0.2))
    );
    S();
    V(G(5), x(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), L(0.3, 0.3, 0.5, 0.5));
    V(G(5).slice(0, -1), x(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), L(0.6, 0.3, 0.5, 0.5));
    V(
      Q(
        B(G(5), x(0, 2).scale(5, 7, 5).skewY(8)),
        B(G(5), x(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
        B(G(), e.scale(2, 8, 3)),
      ),
      x(-38.9, -11.3, 17),
      L(0.2, 0.4, 0.5, 0.5),
    );
    ic(x(-39.1, -0.6, 17).rotate(11), ...yb(15).map(({ x: f, z: u }) => [3 * f, 3 * u, 1.2]));
    k.map((f, u) => {
      u % 2 || 6 <= u || S();
      V(I, x(f, 1.9, -12));
    });
    sb(4, f => {
      S();
      V(
        G(6),
        x(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        L(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [L(0.1, 0.55, 0.45, 0.2), L(0.2, 0.5, 0.5, 0.3), L(0.3, 0.45, 0.55, 0.4)].map((f, u) => {
      S();
      V(G(), x(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), f);
      2 === u && V(G(), x(-29.1, 0.4, 91).scale(2.1, 1, 3), L(0.7, 0.7, 0.7, 0.3));
      1 === u && V(G(), x(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), L(0.6, 0.6, 0.7, 0.3));
    });
    S();
    V(G(5), e.scale(5, 1.1, 5), L(0.5, 0.3, 0.3, 0.4));
    V(G(5), e.scale(5.5, 0.9, 5.5), L(0.25, 0.25, 0.25, 0.4));
    m(x(0, 1.5, -1).rotate(0, 180));
    sb(4, f => {
      S();
      sb(
        7,
        u =>
          V(B(
            G(8, 1).slice(0, -1),
            x((2 < f ? 3.5 : 4) * (u / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2),
            L(0.3, 0.3, 0.38),
          )),
      );
    });
    S();
    V(C);
    S();
    V(G(15, 1), x(-7.5).rotate(0, 90).scale(3, 2.3, 3), L(0.4, 0.4, 0.4, 0.3));
    V(G(10).slice(0, -1), x(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), L(0.3, 0.8, 0.7, 0.3));
    V(G(5).slice(0, -1), x(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), L(0.5, 0.5, 0.5, 0.5));
    m(x(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => V(z, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    V(Q(B(G(10), e.scale(6, 2, 6), L(0.1, 0.6, 0.5, 0.3)), B(G(10), e.scale(3.3, 6, 3.3), L(0.1, 0.6, 0.5, 0.5))));
    ic(x(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    S();
    V(G(3), x(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), L(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      V(G(6), x(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), L(0.7, 0.7, 0.7, 0.4));
      V(G(), x(0, 6.2, f + 95).scale(0.5, 11, 0.5), L(0.5, 0.3, 0.3, 0.4));
    });
    S();
    V(Q(
      B(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)),
      B(G(), x(0, 0, -5.5).scale(1.5, 3, 2.7), L(0.45, 0.45, 0.45, 0.2)),
    ));
    V(G(8).slice(0, -1), x(0, 2).scale(3, 1.5, 3).rotate(0, 22), L(0.7, 0.7, 0.7, 0.1));
    V(G(5).slice(0, -1), x(0, 2).scale(1, 2), L(0.3, 0.3, 0.3, 0.2));
    ic(x(0, 3), ...yb(14).map(({ x: f, z: u }) => [5.6 * f, 5.6 * u, 2]));
    S();
    [-1, 1].map(f => V(z, e.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90)));
    V(Q(
      B(G(28, 1).slice(0, -1), x(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)),
      B(G().slice(0, -1), x(0, 2).scale(9, 1.1, 2), L(0.3, 0, 0, 0.3)),
    ));
    V(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2));
    V(G(5).slice(0, -1), x(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2));
    S();
    V(Q(
      B(G(28, 1).slice(0, -1), x(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)),
      B(G().slice(0, -1), x(0, 2, 7).scale(2, 1.1, 9), L(0.3, 0, 0, 0.3)),
      B(G().slice(0, -1), x(7, 2).scale(9, 1.1, 2), L(0.3, 0, 0, 0.3)),
    ));
    V(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2));
    V(G(5).slice(0, -1), x(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2));
    S();
    V(Q(
      B(G(28, 1).slice(0, -1), x(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)),
      B(G().slice(0, -1), x(0, 2, -7).scale(2, 1.1, 9), L(0.3, 0, 0, 0.3)),
      B(G().slice(0, -1), x(7, 2).scale(9, 1.1, 2), L(0.3, 0, 0, 0.3)),
    ));
    V(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2));
    V(G(5).slice(0, -1), x(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2));
    sb(2, () => {
      S();
      V(Q(
        B(G(30, 1, 1.15, 1), x(0, -3).scale(3.5, 1, 3.5), L(0.7, 0.4, 0.25, 0.7)),
        B(G(), x(4, -1.2).scale3d(2), L(0.7, 0.4, 0.25, 0.3)),
        B(G(30, 1, 1.3, 1), x(0, -2.5).scale(2.6, 1, 3), L(0.7, 0.4, 0.25, 0.2)),
      ));
      m(x(0, -3, 4));
    });
    for (k = 0; 16 > k; ++k) {
      S(),
        V(G(6, 1).slice(0, -1), e.scale(0.12, 1.2, 0.12), L(0.3, 0.3, 0.5, 0.1)),
        V(G(9, 1), x(0, 0.8).scale(0.2, 0.3, 0.2), L(0.7, 1, 0.2)),
        V(G(3), x(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), L(0.2, 0.2, 0.2, 0.1));
    }
    S();
    V(Ab(20), x(0, 1).scale3d(0.5), L(1, 0.3, 0.4));
    V(Ab(30), e.scale(0.65, 0.8, 0.55), L(1, 0.3, 0.4));
    V(G(), x(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), L(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      V(z, e.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), L(1, 1, 0.8));
      V(
        B(Q(G(15, 1), B(G(), x(0, 0, 1).scale(2, 2, 0.5))), e.rotate(-90, 0).scale(0.1, 0.05, 0.1), L(0.3, 0.3, 0.3)),
        x(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map(f => {
      S();
      V(G(20, 1), x(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), L(1, 0.3, 0.4));
    });
    S();
    V(G(6, 1).slice(0, -1), e.scale(0.77, 1, 0.77), L(1, 0.3, 0.5));
    S();
    V(
      Ab(28, 22, (f, u, F) => {
        var O = u / 22, N = f * Math.PI * 2 / 28, J = Math.sin(O ** 0.6 * Math.PI / 2);
        f = O * O * Math.sin(f * Math.PI * 0.5) / 4;
        return 21 < u
          ? { x: F.A = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(N) * J,
            y: Math.cos(O * Math.PI) - O - f,
            z: Math.sin(N) * J + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      e.scale(0.7, 0.7, 0.7),
      L(1, 1, 1),
    );
    [-1, 1].map(f => V(Ab(10), x(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    DEV_ROOT_FUNCTION();
  });
});
