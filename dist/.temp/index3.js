let ca,
  da,
  ea,
  ha,
  ia,
  ja,
  ka,
  la,
  oa,
  pa,
  qa,
  ra,
  sa,
  ta,
  va,
  wa,
  xa,
  Ba,
  Ca,
  Da = 0,
  a = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 0,
  Ja = 0,
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
  bb = NO_INLINE(b => 0 > b ? -b : b),
  cb = NO_INLINE((b, c) => b < c ? b : c),
  db = NO_INLINE((b, c) => c < b ? b : c),
  eb = (b, c) => bb(b) > c ? b : 0,
  fb = (b, c = 0, g = 1) => b < c ? c : g < b ? g : b,
  gb = b => Math.atan2(Math.sin(b * Ma), Math.cos(b * Ma)) / Ma,
  hb = (b, c, g) => b + (2 * (c = (c - b) % 360) % 360 - c) * fb(g) || 0,
  ib = (b, c, g) =>
    (0 < g ? 1 > g ? b + (c - b) * g : c : b)
    || 0,
  jb = (b, c) => (b = fb(b), ib(b, 1 - b, c)),
  kb = (b, c, g = 0) => (b * b + c * c + g * g) ** 0.5,
  mb = (
    b,
    c = lb,
    g = 0,
  ) => (g *= 16,
    c[g++] = b.m11,
    c[g++] = b.m12,
    c[g++] = b.m13,
    c[g++] = b.m14,
    c[g++] = b.m21,
    c[g++] = b.m22,
    c[g++] = b.m23,
    c[g++] = b.m24,
    c[g++] = b.m31,
    c[g++] = b.m32,
    c[g++] = b.m33,
    c[g++] = b.m34,
    c[g++] = b.m41,
    c[g++] = b.m42,
    c[g++] = b.m43,
    c[g] = b.m44,
    c),
  m = (
    b = e,
    c = h,
  ) => (c.m11 = b.m11,
    c.m12 = b.m12,
    c.m13 = b.m13,
    c.m14 = b.m14,
    c.m21 = b.m21,
    c.m22 = b.m22,
    c.m23 = b.m23,
    c.m24 = b.m24,
    c.m31 = b.m31,
    c.m32 = b.m32,
    c.m33 = b.m33,
    c.m34 = b.m34,
    c.m41 = b.m41,
    c.m42 = b.m42,
    c.m43 = b.m43,
    c.m44 = b.m44,
    c),
  rb = (b = 0, c = 0, g = 0, k = 1) => {
    nb = h.m11 * b + h.m21 * c + h.m31 * g + h.m41 * k;
    ob = h.m12 * b + h.m22 * c + h.m32 * g + h.m42 * k;
    pb = h.m13 * b + h.m23 * c + h.m33 * g + h.m43 * k;
    qb = h.m14 * b + h.m24 * c + h.m34 * g + h.m44 * k;
  };
var nb, ob, pb, qb;
const w = NO_INLINE((b, c, g) => e.translate(b, c, g)),
  sb = (b, c) => Array.from(Array(b), (g, k) => c(k)),
  tb = (b, c, g) => (b.A = g, b.s = c, b),
  xb = (b, c, g = b.s) => (m(c), tb(b.map(({ x: k, y: q, z: l }) => (rb(k, q, l), { x: nb, y: ob, z: pb })), g, b.A)),
  B = (b, c, g) => b.map(k => xb(k, c, g)),
  yb = (b, c = 0) =>
    sb(b, g => {
      const k = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: 0.01 > bb(k) ? k : 0 > k ? k - c : k + c };
    }),
  zb = (b, c, g) =>
    b.map((k, q, { length: l }) => tb([k, c[l - q - 1], c[l - (q + 1) % l - 1], b[(q + 1) % l]], b.s, g)),
  G = (
    b,
    c,
    g = 0,
    k,
  ) => (b = b ? yb(b, k) : Za,
    k = xb(b, w(0, 1).scale3d(0 < g ? g : 1)),
    b = xb(b, w(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...zb(b, k, c), k, b]),
  Ab = (
    b,
    c = b,
    g = (
      k,
      q,
    ) => (q *= Math.PI / c,
      { x: Math.cos(k *= 2 * Math.PI / b) * Math.sin(q), y: Math.cos(q), z: Math.sin(k) * Math.sin(q) }),
  ) => {
    const k = [];
    for (let q = 0; b > q; q++) {
      for (let l = 0; c > l; l++) {
        const D = tb([], 0, 1);
        k.push(D);
        D.push(g(q, l, D));
        l && D.push(g((q + 1) % b, l, D));
        c - 1 > l && D.push(g((q + 1) % b, l + 1 % c, D));
        D.push(g(q, l + 1 % c, D));
      }
    }
    return k;
  },
  L = NO_INLINE((b, c, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b),
  Bb = b => {
    let c, g = 0, k = 0, q = 0, l = b.at(-1);
    for (c of b) {
      g += (l.y - c.y) * (l.z + c.z), k += (l.z - c.z) * (l.x + c.x), q += (l.x - c.x) * (l.y + c.y), l = c;
    }
    return c = kb(g, k, q), g /= c, k /= c, q /= c, { x: g, y: k, z: q, w: g * l.x + k * l.y + q * l.z };
  },
  Cb = ({ x: b, y: c, z: g }, k) => b * k.x + c * k.y + g * k.z,
  Gb = (b, c) => {
    let g;
    var k, q;
    const l = c.i, D = c.u;
    for (var C = 0; l.length > C; ++C) {
      if (-8e-5 > (g = Cb(b, l[C]) - b.w) ? q = c : 8e-5 < g && (k = c), q && k) {
        k = [];
        q = [];
        C = l.at(-1);
        let H = Cb(C, b) - b.w;
        for (const z of l) {
          g = Cb(z, b) - b.w,
            8e-5 > H && q.push(C),
            -8e-5 < H && k.push(C),
            (8e-5 < H && -8e-5 > g || -8e-5 > H && 8e-5 < g)
            && (H /= g - H,
              C = { x: C.x + (C.x - z.x) * H, y: C.y + (C.y - z.y) * H, z: C.z + (C.z - z.z) * H },
              k.push(C),
              q.push(C)),
            C = z,
            H = g;
        }
        k = 2 < k.length && { i: tb(k, l.s, l.A), u: D, v: c };
        q = 2 < q.length && { i: tb(q, l.s, l.A), u: D, v: c };
        break;
      }
    }
    return { x: k, y: q };
  },
  Hb = (b, c, g = Bb(c.i)) => {
    let k, q;
    return b
      ? ({ x: k, y: q } = Gb(b, c), k || q || b.i.push(c), k && (b.o = Hb(b.o, k, g)), q && (b.m = Hb(b.m, q, g)))
      : b = { x: g.x, y: g.y, z: g.z, w: g.w, i: [c], o: 0, m: 0 },
      b;
  },
  Ib = (b, c, g) => {
    const k = [],
      q = (l, D) => {
        let { x: C, y: H } = Gb(l, D);
        C || H || (0 < g * Cb(l, c) ? C = D : H = D);
        C && (l.o ? q(l.o, C) : k.push(C));
        H && l.m && q(l.m, H);
      };
    for (const l of c.i) {
      q(b, l);
    }
    return k;
  },
  Jb = (b, c) => b && (c(b), Jb(b.o, c), Jb(b.m, c)),
  Kb = b => (Jb(b, c => {
    const g = c.m;
    c.m = c.o;
    c.o = g;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const k of c.i) {
      k.u = !k.u;
    }
  }),
    b),
  Lb = b => b.length ? b.reduce((c, g) => Hb(c, { i: g, u: 0, v: 0 }), 0) : b,
  Mb = (...b) =>
    b.reduce((c, g) => {
      const k = [];
      if (c = Lb(c), g) {
        g = Lb(g);
        Jb(c, q => q.i = Ib(g, q, 1));
        Jb(g, q => k.push([q, Ib(c, q, -1)]));
        for (let [q, l] of k) {
          for (const D of l) {
            Hb(c, D, q);
          }
        }
      }
      return c;
    }),
  Q = (b, ...c) => {
    const g = l => {
        let D;
        return l.v && ((D = q.get(l.v)) ? (k.delete(D), l = g(l.v)) : q.set(l.v, l)), l;
      },
      k = new Map(),
      q = new Map();
    return b = Kb(Mb(Kb(Lb(b)), ...c)),
      Jb(b, l => {
        for (const D of l.i) {
          k.set(g(D), D.u);
        }
      }),
      Array.from(k, ([{ i: l }, D]) => {
        const C = l.map(({ x: H, y: z, z: f }) => ({ x: H, y: z, z: f }));
        return tb(D ? C.reverse() : C, l.s, l.A);
      });
  },
  Nb = NO_INLINE(b => 1 - Math.exp(-Da * b)),
  R = NO_INLINE((b, c, g) => ib(b, c, Nb(g))),
  Ob = b => {
    h4.innerHTML += ".";
    setTimeout(b);
  },
  Qb = NO_INLINE(b => {
    let c = 0;
    const g = z => Math.sin(z * Math.PI * 2),
      k = z => 0.5 > z % 1 ? 1 : -1,
      q = z => z % 1 * 2 - 1,
      l = z => 2 > (z = z % 1 * 4) ? z - 1 : 3 - z,
      D = () => {
        let z = 0;
        const f = T => {
            let aa, ua, Pa, Db = 0, ub = 0;
            const Sb = [],
              Qa = new Int32Array(768 * T),
              bc = 2 ** (n - 9) / T,
              cc = Math.PI * 2 ** (N - 8) / T,
              Eb = U * T & -2;
            for (let vb = 0; 11 >= vb; ++vb) {
              for (
                let wb = 0, Tb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + vb];
                32 > wb;
                ++wb
              ) {
                const Ub = (32 * vb + wb) * T;
                for (var ma = 0; 4 > ma; ++ma) {
                  if (aa = 0, Tb && (aa = u[Tb - 1].charCodeAt(wb + 32 * ma) - 40, aa += 0 < aa ? 106 : 0), aa) {
                    var ya;
                    if (!(ya = Sb[aa])) {
                      ya = aa;
                      let W = void 0, za = void 0;
                      var Vb = aa;
                      let dc = 0, ec = 0;
                      const fc = 2 > c ? q : g, gc = 2 > c ? 1 > c ? k : l : g, Wb = new Int32Array(p + I + na);
                      for (let Ra = 0, Fb = 0; p + I + na > Ra; ++Ra, ++Fb) {
                        let Sa = 1;
                        p > Ra
                          ? Sa = Ra / p
                          : p + I > Ra || (Sa = (1 - (Sa = (Ra - p - I) / na)) * 3 ** (-E / 16 * Sa));
                        0 > Fb
                          || (Fb -= 4 * T,
                            za = 0.00396 * 2 ** ((Vb + O - 256) / 12),
                            W = 0.00396 * 2 ** ((Vb + ba - 256) / 12) * (1 + (c ? 0 : 0.0072)));
                        Wb[Ra] = 80
                            * (fc(dc += za * Sa ** (M / 32)) * F + gc(ec += W * Sa ** (t / 32)) * J
                              + (v ? (2 * Math.random() - 1) * v : 0))
                            * Sa | 0;
                      }
                      ya = Sb[ya] = Wb;
                    }
                    for (let W = 0, za = 2 * Ub; ya.length > W; ++W, za += 2) {
                      Qa[za] += ya[W];
                    }
                  }
                }
                for (let W, za = 0; T > za; ++za) {
                  ya = 0;
                  ma = 2 * (Ub + za);
                  var Aa = (((W = Qa[ma]) || Pa)
                    && (ua = 0.00308 * r,
                      1 !== c && 4 !== c || (ua *= Math.sin(bc * ma * Math.PI * 2) * fa / 512 + 0.5),
                      ua = 1.5 * Math.sin(ua),
                      Db += ua * ub,
                      Aa = (1 - y / 255) * (W - ub) - Db,
                      ub += ua * Aa,
                      W = 4 === c ? ub : 3 === c ? Aa : Db,
                      c || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= A / 32,
                      Pa = 1e-5 < W * W,
                      Aa = Math.sin(cc * ma) * K / 512 + 0.5,
                      ya = W * (1 - Aa),
                      W *= Aa),
                    ma < Eb || (ya += Qa[1 + ma - Eb]
                      * P / 255,
                      W += Qa[ma - Eb] * P / 255),
                    z + ma >> 1);
                  C[Aa] += (Qa[ma] = ya) / 65536;
                  H[Aa] += (Qa[++ma] = W) / 65536;
                }
              }
            }
            z += 768 * T;
          },
          u = $a[c],
          [F, O, M, J, ba, t, v, p, I, x, E, n, r, y, A, K, N, P, U, fa] = ab[c],
          na = 4 * x ** 2;
        f(5513);
        f(4562);
        f(3891);
        Ob(5 > ++c ? D : b);
      },
      C = (ea = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: Pb / 2 })).getChannelData(0),
      H = ea.getChannelData(1);
    Ob(D);
  }),
  Rb = (b, c, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (c + b) / (b - c), -1, 0, 0, 2 * c * b / (b - c), 0]);
let Xb = () => {
  let b, c, g, k, q, l, D, C, H, z, f, u, F, O, M, J, ba = !0;
  const t = [],
    v = () => {
      b4.innerHTML = "Music: " + ba;
      J && (da || !ba ? J.disconnect() : J.connect(M.destination));
    },
    p = () => {
      const n = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
      ja = [Rb(0.3, 55, n, 1.732051), Rb(55, 181, n, 1.732051)];
      ka = Rb(0.3, 181, n, 1.732051);
      k = C = void 0;
      t.length =
        ha =
        O =
        u =
        F =
        Fa =
        Ga =
          0;
      document.hidden && I(!0);
    },
    I = n => {
      if (da !== n) {
        if (da = n, p(), document.body.className = n ? "l m" : "l", n) {
          try {
            document.exitFullscreen().catch(() => 0), document.exitPointerLock();
          } catch {
          }
        }
        v();
      }
    },
    x = n => {
      try {
        M || (M = new AudioContext(), (J = M.createBufferSource()).buffer = ea, J.loop = !0, J.start()),
          document.body.requestFullscreen().catch(() => 0);
      } catch {
      }
      I(!1);
      ia = n;
    },
    E = (n, r) => n.buttons[r]?.pressed || 0 < n.buttons[r]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => x();
  b2.onclick = () => x(1);
  b5.onclick = () => I(!0);
  b4.onclick = () => {
    ba = !ba;
    v();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onclick = n => {
    if (!da && (n.target === hC && (ha = 1), ia)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = n => {
    let r;
    n.repeat
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
      }[n.code],
        (t[r] = !!n.type[5] && !0) && (0 === r && (ha = 1), 1 === r && I(!0)));
  };
  onmousemove = ({ movementX: n, movementY: r }) => {
    ia && (n || r) && (Ta += 0.1 * n, Oa += 0.1 * r);
  };
  hC.ontouchstart = n => {
    if (!da) {
      for (let { pageX: r, pageY: y, identifier: A } of n.changedTouches) {
        ia && r > hC.clientWidth / 2
          ? void 0 === C && (H = 0, l = r, D = y, C = A, f = Oa, z = Ta)
          : void 0 === k && (q = 0, c = r, g = y, k = A);
      }
      b = Ea;
    }
  };
  hC.ontouchmove = n => {
    if (!da) {
      for (let { pageX: N, pageY: P, identifier: U } of n.changedTouches) {
        var r, y, A, K;
        C === U && (Oa = f + (P - D) / 2.3, Ta = z + (N - l) / 2.3, H = 1);
        k === U
          && (U = (c - N) / 19,
            r = bb(U),
            y = (g - P) / 19,
            A = bb(y),
            (K = 0.3 < db(r, A)) && (q = 1),
            u = fb(U, -1) * (K && 0.2 < r),
            F = fb(y, -1) * (K && 0.2 < A),
            2 < r && (c = 19 * (0 > U ? -1 : 1) + N),
            2 < A && (g = 19 * (0 > y ? -1 : 1) + P));
      }
    }
  };
  hC.ontouchend = n => {
    let r;
    document.activeElement === document.body && n.preventDefault();
    for (const y of n.changedTouches) {
      y.identifier === C
        ? (C = void 0, H || (r = 1), H = 0)
        : y.identifier === k
        ? (k = void 0, F = u = 0, q || (r = 1), q = 0)
        : r = 1;
    }
    n.target === hC && r && b && 0.02 < (n = Ea - b) && 0.7 > n && (ha = 1);
  };
  Xb = () => {
    Fa = F + (t[4] ? 1 : 0) - (t[5] ? 1 : 0);
    Ga = u + (t[2] ? 1 : 0) - (t[3] ? 1 : 0);
    let n = navigator.getGamepads()[0];
    n
      && (ia && (Oa += 80 * Da * eb(n.axes[3], 0.3), Ta += 80 * Da * eb(n.axes[2], 0.3)),
        Fa += E(n, 12) - E(n, 13) - eb(n.axes[1], 0.2),
        Ga += E(n, 14) - E(n, 15) - eb(n.axes[0], 0.2),
        E(n, 9) && I(!0),
        (n = E(n, 3) || E(n, 2) || E(n, 1) || E(n, 0)) && !O && (ha = 1),
        O = n);
  };
  document.onvisibilitychange = onblur = onresize = p;
  I(!0);
  DEV_ROOT_FUNCTION();
};
const Yb = (b, c) => {
    1 / 0 > La && (La = a + c, h4.innerHTML = b);
  },
  Zb = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        la = Ya.reduce((b, c) => b + c.j, 0)
      ] + " / XIII";
  },
  $b = () => {
    localStorage["Dante-22"] = JSON.stringify([d.map(b => b.j), Ya.map(b => b.j), Ka, qa, a]);
  },
  S = (b, c = e, g) => sa.push(...B(b, c, g)),
  V = () => {
    Xa.push({ l: ra = new DOMMatrix(), i: sa = [] });
  },
  hc = (b, ...c) => {
    let g, k, q, l, D = 0, C = 0, H = 1, z = -1;
    const f = () => {
      if (f.j) {
        m(Xa[35].l).translateSelf(
          t % 4 * 1.2 - 1.7 + Math.sin(a + t) / 7,
          -2,
          1.7 * (t >> 2) - 5.5 + bb(t % 4 - 2) + Math.cos(a / 1.5 + t) / 6,
        );
      } else {
        let v, p = 1, I = 1 / 0;
        for (let y = 0; c.length > y; y++) {
          let A = c[y], K = kb(F - A[0], O - A[1]);
          p = cb(p, K / A[2]);
          0 > (K -= A[2]) ? v = 1 : I > K && (I = K, u = A);
        }
        let x, E, n, r;
        v
          || (x = F - u[0],
            E = O - u[1],
            n = kb(x, E),
            r = Math.atan2(-E, x),
            H && (l = fb(l / (1 + Math.random())), C = (Math.random() - 0.5) * Math.PI / 2),
            r += C,
            z = -Math.cos(r),
            D = Math.sin(r),
            0.1 < n && (n = cb(n, u[2]) / n, F = x * n + u[0], O = E * n + u[1]));
        H = v;
        l = R(l, 3 + 6 * (1 - p), 3 + p);
        M = R(M, F = R(F, F + z, l), l);
        J = R(J, O = R(O, O + D, l), l);
        g = hb(g, Math.atan2(M - k, J - q) / Ma - 180, Nb(3));
        m(ba).multiplySelf(b).translateSelf(k = M, 0, q = J).rotateSelf(0, g, 7 * Math.sin(1.7 * a));
        1.6 > (rb(), kb(Ua - nb, Va - ob, Wa - pb))
          && (f.j = 1,
            Yb(
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
              ][la] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              6,
            ),
            Zb(),
            $b());
      }
      mb(h, ac, 28 + t);
    };
    let u = c[0], [F, O] = u, [M, J] = u;
    const ba = ra, t = Ya.length;
    Ya.push(f);
  },
  X = (b, c = 0, g = 0) => {
    const k = m(e, Xa[++ta].l);
    return k.m41 = b, k.m42 = c, k.m43 = g, k;
  },
  jc = NO_INLINE(() => {
    let b, c, g, k, q, l, D, C, H, z, f, u, F, O, M, J, ba = 0, t = 1, v = 2, p = 15;
    const I = (r, y, A, K) => ib(r, y, t || (fb(bb(y - r) ** 0.5 - A) + 1 / 7) * Nb(1.5 * K)),
      x = () => m((v ? d[Ka] : Xa[28 !== ba ? ba : 0]).l),
      E = r => {
        1 < v ? (m(d[Ka].l).multiplySelf(d[Ka].C), rb(0, 0.9 < pa ? 15 : 1, -2.4)) : (x(), rb(O, M, J));
        r && (q = (nb - Ua) / Da, l = (pb - Wa) / Da);
        Ua = nb;
        Va = ob;
        Wa = pb;
      },
      n = NO_INLINE(() => {
        var r = 0, y = 0, A = 0, K = 0, N = 0, P = 0, U = -1;
        for (var fa = 0; 36 > fa; ++fa) {
          for (let aa = 96, ua = 512 * fa; 416 > aa; aa += 4) {
            for (var na = 0; 2 > na; ++na) {
              var T = ic[ua + aa + na];
              const Pa = ic[ua + aa + na + 2];
              T > K && (K = T);
              T + Pa && (0 > U || U === fa) && (U = fa, Pa === z ? ++r : y && y !== Pa || (y = Pa, ++A));
            }
          }
        }
        z = 0 > U ? 0 : A > 2 * r ? y : z;
        for (r = 36; 128 > r; ++r) {
          fa =
            U =
            A =
            y =
              0;
          for (let aa = 0, ua = 512 * r; 128 > aa; ++aa) {
            na = ua + 4 * aa,
              T = ic[na],
              64 > aa ? T > y && (y = T) : T > A && (A = T),
              (T = ic[2 + na]) > U && (U = T),
              T = ic[1 + na],
              64 < aa ? T > y && (y = T) : T > A && (A = T),
              (T = ic[3 + na]) > fa && (fa = T);
          }
          (A -= y) * A > N * N && (N = A);
          (fa -= U) * fa > P * P && (P = fa);
        }
        C = fb(1 - 0.01 * db(bb(N *= 0.7), bb(P)), 0.3);
        N /= 255;
        K /= 255;
        P /= 255;
        x().invertSelf();
        rb(N, K, P, 0);
        O += nb;
        M += K;
        J += pb;
        E();
      });
    va = () => {
      E(z);
      Y.r9r(0, 0, 128, 128, 6408, 5121, ic);
      n();
      !v && z === ba || (ba = z, x().invertSelf(), rb(Ua, Va, Wa), O = nb, M = ob, J = pb, v = v && (z ? 0 : 1));
      (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (v = 2);
      1 === z && (d[15].j = -15 > Ua && 0 > Wa ? 1 : 0);
      k = R(k, wa * (30 < z && 35 > z), 2);
      f = I(f, Ua, 0.5, 1);
      u = I(u, H = ib(R(H, Va, 2), Va, v || 8 * bb(H - Va)), 2, 1);
      F = I(F, Wa, 0.5, 1);
      ia
        ? (r = v + Nb(18), Ha = ib(Ha, Ua, r), Ja = ib(Ja, Wa, r), Ia = ib(Ia, 1.6 + H, r), Ta = gb(Ta))
        : (Ha = I(Ha, f, 1, 2 + k),
          Ja = I(Ja, F + -18 + 5 * k, 1, 2 + k),
          Ia = I(Ia, db(u + fb((-60 - Wa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          r = cb(-6, -bb(F - Ja)),
          y = f - Ha,
          Ta = hb(Ta, 90 - gb(Math.atan2(r, y) / Ma), t + Nb(10)),
          Oa = hb(Oa, 90 - Math.atan2(kb(r, y), Ia - u) / Ma, t + Nb(10)));
      Oa = fb(Oa, -87, 87);
      t = 0;
      var r = fb(Fa, -1), y = fb(Ga, -1), A = eb(kb(r, y) ** 0.5, 0.1), K = Math.atan2(r, y);
      A && (b = 90 - K / Ma);
      g = R(g, A, 10);
      X(Ua, 0.06 * C * g * Math.cos(18.2 * a) + H, Wa).rotateSelf(0, c = hb(c, b, Nb(8)));
      for (var N = 0; 2 > N; ++N) {
        const P = 9.1 * a - Math.PI * N;
        m(Xa[53].l, X(0)).translateSelf(0, g * fb(0.45 * Math.sin(P - Math.PI / 2))).rotateSelf(
          g * Math.sin(P) * 0.25 / Ma,
          0,
        );
      }
      p = z ? 5 : R(p, v ? 13 : 19 - 2 * cb(0, Va + 10), 2.2);
      q = z || v ? 0 : R(q, 0, 3);
      l = z || v ? 0 : R(l, 0, 3);
      r = (D = v ? 0 : R(D, z ? 7 * fb(2 * A) * C : 0, z ? 9 : 1)) * A * bb(r) * Math.sin(K);
      y = D * A * bb(y) * Math.cos(K);
      K = ia ? (180 + Ta) * Ma : 0;
      A = Da * (q + (Math.cos(K) * y - Math.sin(K) * r));
      N = Da * -p;
      r = Da * (l + (Math.sin(K) * y + Math.cos(K) * r));
      x().invertSelf();
      rb(A, N, r, 0);
      O += nb;
      M += N;
      J += pb;
      E();
    };
    DEV_ROOT_FUNCTION();
  }),
  e = new DOMMatrix(),
  h = new DOMMatrix(),
  lb = new Float32Array(16),
  ac = new Float32Array(760),
  ic = new Uint8Array(65536),
  Pb =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      10725888),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  Y = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (const b in Y) {
  [Z, Y].map(c => c[b[0] + [...b].reduce((g, k, q) => (g * q + k.charCodeAt(0)) % 434, 0).toString(36)] = c[b]);
}
Ob(() => {
  let b = 0;
  const c = () => {
      if (2 == ++b) {
        const k = [{}, {}, {}, {}, {}, {}, {}, {}],
          q = (
            t,
            v,
            p =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            const I = {}, x = (n, r) => (r = t.c6x(r), t.s3c(r, n), t.c6a(r), r), E = t.c1h();
            return t.abz(E, x(p, 35633)),
              t.abz(E, x(v, 35632)),
              t.l8l(E),
              n => n ? I[n] || (I[n] = t.gan(E, n)) : t.u7y(E);
          },
          l = (t, v, p) => {
            da
              ? 1100 < hC.width && t.d97(4, Xa[55].D - Xa[53].B, 5123, 2 * Xa[53].B)
              : (t.das(4, Xa[v].D - Xa[v].B, 5123, 2 * Xa[v].B, Ya.length), t.d97(4, Xa[p ? 53 : 56].B - 3, 5123, 6));
          },
          D = t => {
            requestAnimationFrame(D);
            var v = (t - (ca || t)) / 1e3;
            if (Ea += v, a += Da = da ? 0 : cb(0.055, v), ca = t, 0 < Da) {
              qa = R(qa, d[15].g, 0.2 + 0.3 * bb(2 * d[15].g - 1));
              pa = oa ? (ia = 0, R(pa, -9, 0.015)) : R(pa, fb(a / 3), 1);
              La && a > La && (La = 0, h4.innerHTML = "");
              Xb();
              v = (I, x, E) =>
                X(I + Math.sin(a + 2) / 5, x + Math.sin(0.8 * a) / 5, E).rotateSelf(
                  2 * Math.sin(a),
                  Math.sin(0.7 * a),
                  Math.sin(0.9 * a),
                );
              ta = 1;
              Ca = ib(R(Ca, 0, 1), gb(Ca + 60 * Da), d[2].h - d[3].g);
              wa = jb(d[13].h, d[8].h);
              xa = ib(R(xa, 0, 5), gb(xa + 56 * Da), wa);
              Ba = ib(R(Ba, 0, 4), gb(Ba + 48 * Da), wa);
              X(0, 270 * (d[1].h - 1) + (2 + 5 * Math.cos(1.5 * a)) * (1 - d[10].h));
              var p = cb(1 - d[11].g, d[10].g);
              X(p * Math.sin(0.6 * a + 1.2) * 12, 0, 35);
              X(p * Math.sin(0.6 * a - 1.2) * 8.2, 0, 55);
              X(p * Math.sin(0.6 * a) * 12, 0, 45);
              X(9.8 * (1 - p));
              p = fb(1 - 5 * p) * jb(d[11].h, d[2].h);
              X(0, p * Math.sin(1.35 * a) * 4);
              X(0, 0, p * Math.sin(0.9 * a) * 8);
              X(0, -6.5 * d[11].g);
              p = jb(d[4].g, d[3].g);
              X(0, p * Math.sin(a) * 5 + 3.5 * (1 - db(d[3].h, d[4].h)));
              X(0, p * Math.sin(a + 3) * 6, p * Math.sin(0.6 * a + 1) * 6);
              X(0, -7.3 * d[4].g);
              p = jb(d[6].h, d[7].h);
              X(0, -2, 10 - 8.5 * p * bb(Math.sin(1.1 * a)));
              X(0, -2, 10 - 8.5 * p * bb(Math.sin(2.1 * a)));
              X(0, -2, 10 - 8.5 * db(p * bb(Math.sin(1.5 * a)), (1 - d[6].h) * (1 - p)));
              t = jb(d[5].g, d[13].g);
              for (p = 0; 4 > p; p++) {
                X(
                  (2 < p ? 2 * (1 - t) + t : 0) - 100,
                  t * Math.sin(1.3 * a + 1.7 * p) * (3 + p / 3) + 0.7,
                  115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & p ? -1 : 1)
                    + db(0.05, t) * Math.cos(1.3 * a + 7 * p) * (4 - 2 * (1 - p / 3)),
                );
              }
              p = jb(d[8].g, d[9].g);
              for (let I = 0; 3 > I; ++I) {
                X(0, p * Math.sin(1.5 * a + 1.5 * I) * 4 + (I ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)));
              }
              p = jb(jb((d[9].h + d[9].g) / 2, d[8].g), (d[12].h + d[12].g) / 2);
              X(0, 16 * p, 95 + 8.5 * fb(2 * p - 1));
              X(0, -4.7 * d[0].h, -15);
              X(0, -4.7 * d[10].h, 15);
              X(-99.7, -1.9 - 5.5 * d[3].h, 63.5);
              X(-100, 0.6 - 5.8 * d[13].h, 96.5);
              X(-75, 3 * (1 - d[2].g) * (1 - d[3].h), 55).rotateSelf(180 * (1 - d[2].g) + Ca, 0);
              X(2.5 * (1 - t) - 139.7, -3 * (1 - d[5].h) - t * Math.sin(0.8 * a) - 1.8, 93.5).rotateSelf(
                Math.cos(1.3 * a) * (3 + 3 * t),
                0,
              );
              X(-2 * Math.sin(a)).rotateSelf(25 * Math.sin(a));
              X(-81, 0.6, 106).rotateSelf(0, 40 + xa);
              X(-65.8, 0.8, 106).rotateSelf(0, Ba);
              X(-50.7, 0.8, 106).rotateSelf(0, 180 - Ba);
              X(-50.7, 0.8, 91).rotateSelf(0, 270 + Ba);
              v(-12, 4.2, 40 * pa - 66);
              v(-123, 1.4, 55 - 65 * qa);
              for (v = 0; 16 > v; ++v) {
                t = d[v],
                  p = t.h = R(t.h, t.j, 4),
                  t.g = R(t.g, t.j, 1),
                  m(m(t.l).multiplySelf(t.C), X(0)).rotateSelf(50 * p - 25, 0).translateSelf(0, 1).m44 = p,
                  ha && 3 > (rb(), kb(Ua - nb, Va - ob, Wa - pb)) && (t.j
                    ? 0.7 < p && (t.j = 0, Ka = v, Yb("* click *", 1), $b())
                    : 0.3 > p && (t.j = 1, Ka = v, Yb("* click *", 1), $b())),
                  14 === v && t.j && 0.8 < p && (t.j = 0,
                    13 > la
                      ? Yb("Not leaving now, there are souls to catch!", 3)
                      : oa || (oa = 1, Yb("Well done. They will be punished.<br>Thanks for playing", 1 / 0))),
                  13 > v && Ya[v]();
              }
              va();
              for (v = 0; 28 > v; ++v) {
                mb(Xa[28 + v].l, ac, v);
              }
              for (let I, x = 0, E = 656; 26 > x; ++x, ++E) {
                I = Xa[2 + x].l, ac[E++] = I.m41, ac[E++] = I.m42, ac[E++] = I.m43;
              }
              DEV_ROOT_FUNCTION();
              Y.cbf(!0, !0, !0, !0);
              Y.c4s(16640);
              Y.u3a(O("j"), ac);
              Y.cbf(!0, !1, !0, !1);
              Y.uae(O("b"), !1, mb(m().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa)));
              l(Y, 56, 1);
              Y.c4s(256);
              Y.cbf(!1, !0, !1, !0);
              Y.uae(O("b"), !1, mb(m().translateSelf(-Ua, -Va, -Wa - 0.3)));
              l(Y, 56, 1);
              Y.f1s();
              ha = 0;
            }
            F();
            Z.u3a(F("j"), ac);
            Z.b6o(36160, u);
            Z.v5y(0, 0, 2048, 2048);
            Z.ubh(F("g"), 4);
            Z.ubh(F("h"), 4);
            Z.uae(F("a"), !1, mb(e));
            v = Ha;
            t = Ia;
            p = Ja;
            da
              ? (m().rotateSelf(0, 40 * Math.sin(Ea) - 80, -8),
                mb(h, ac, 25),
                mb(h, ac, 26),
                mb(h, ac, 27),
                m(ka).invertSelf(),
                rb(3.6, 3.5),
                v = nb,
                t = ob,
                p = 5,
                m(e, H).rotateSelf(20, 0).translateSelf(-v, -t, -p).rotateSelf(0, 99))
              : m(e, H).rotateSelf(-Oa, -Ta).invertSelf().translateSelf(-v, -t, -p);
            J(54.7);
            l(Z, 57, ia);
            ba(126);
            l(Z, 57, ia);
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.c4s(16640);
            Z.ubh(F("g"), 0);
            Z.ubh(F("h"), 1);
            Z.ubu(F("k"), v, t, p);
            Z.uae(F("a"), !1, mb(ka));
            Z.uae(F("b"), !1, mb(H));
            Z.uae(F("i"), !1, z);
            l(Z, 57, ia);
            M();
            Z.uae(M("b"), !1, mb(H.invertSelf()));
            Z.ubu(M("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, Ea);
            Z.d97(4, 3, 5123, 0);
          },
          C = new DOMMatrix(),
          H = new DOMMatrix(),
          z = new Float32Array(32),
          f = g,
          u = Z.c5w(),
          F = q(
            Z,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          O = q(
            Y,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          M = q(
            Z,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [J, ba] = sb(2, t => {
            const v = Z.c25();
            return Z.a4v(33984 + t),
              Z.b9j(3553, v),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              p => {
                let I = 0, x = 0, E = 0, n = 1 / 0, r = 1 / 0, y = 1 / 0, A = -1 / 0, K = -1 / 0, N = -1 / 0;
                Z.fas(36160, 36096, 3553, v, 0);
                Z.c4s(256);
                m().scale3dSelf(p *= 1.1).multiplySelf(m(ja[t], C).multiplySelf(H).invertSelf());
                for (let P = 0; 8 > P; ++P) {
                  const U = k[P];
                  rb(4 & P ? 1 : -1, 2 & P ? 1 : -1, 1 & P ? 1 : -1);
                  I -= U.x = (0 | nb) / (p * qb);
                  x -= U.y = (0 | ob) / (p * qb);
                  E -= U.z = (0 | pb) / (p * qb);
                }
                m().rotateSelf(298, 139).translateSelf(I / 8, x / 8, E / 8);
                for (p = 0; 8 > p; ++p) {
                  const { x: P, y: U, z: fa } = k[p];
                  rb(P, U, fa);
                  A = db(A, nb);
                  K = db(K, ob);
                  N = db(N, pb);
                  n = cb(n, nb);
                  r = cb(r, ob);
                  y = cb(y, pb);
                }
                p = 10 + t;
                y *= 0 > y ? p : 1 / p;
                N *= 0 < N ? p : 1 / p;
                Z.uae(
                  F("b"),
                  !1,
                  mb(
                    m(e, C).scaleSelf(2 / (A - n), 2 / (K - r), 2 / (y - N)).translateSelf(
                      (A + n) / -2,
                      (K + r) / -2,
                      (y + N) / 2,
                    ).multiplySelf(h),
                    z,
                    t,
                  ),
                  16 * t,
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
        M();
        Z.ubh(M("q"), 2);
        Z.c5t(0, 0, 0, 1);
        Z.d4n(515);
        Z.e8z(2929);
        Z.e8z(2884);
        Y.e8z(2929);
        Y.e8z(2884);
        Y.v5y(0, 0, 128, 128);
        O();
        Y.uae(O("a"), !1, mb(Rb(1e-4, 2, 1.2, 0.4)));
        jc();
        Xb();
        requestAnimationFrame(D);
        DEV_ROOT_FUNCTION();
      }
    },
    g = new Image();
  g.onload = c;
  g.src = Na;
  Qb(() => {
    Ob(() => {
      let f = 0;
      const u = [],
        F = [],
        O = [],
        M = [],
        J = new Int32Array(8),
        ba = new Map(),
        t = new Int32Array(J.buffer, 0, 5),
        v = new Float32Array(J.buffer);
      Xa.map((x, E) => {
        let n;
        const r = y => {
          let { x: A, y: K, z: N } = n[y], P = (v[0] = A, v[1] = K, v[2] = N, y = "" + (n.A ? t : J), ba.get(y));
          return void 0 !== P
            ? (A = 3 * P, M[A] = (M[A++] + J[5]) / 2, M[A] = (M[A++] + J[6]) / 2, M[A] = (M[A] + J[7]) / 2)
            : (ba.set(y, P = ba.size), F.push(A, K, N, v[3]), O.push(J[4]), M.push(J[5], J[6], J[7])),
            P;
        };
        for (n of (v[3] = 55 < E ? -28 : E, x.i)) {
          const { x: y, y: A, z: K } = Bb(n);
          J[4] = 0 | n.s;
          J[5] = 32767 * y;
          J[6] = 32767 * A;
          J[7] = 32767 * K;
          for (let N = 2, P = r(0), U = r(1); n.length > N; ++N) {
            u.push(P, U, U = r(N));
          }
        }
        x.i = 0;
        x.B = f;
        x.D = f = u.length;
      });
      [Z, Y].map(x => {
        x.b11(34962, x.c1b());
        x.b2v(34962, new Float32Array(F), 35044);
        x.v7s(0, 4, 5126, !1, 0, 0);
        x.b11(34962, x.c1b());
        x.b2v(34962, new Int16Array(M), 35044);
        x.v7s(1, 3, 5122, !0, 0, 0);
        x.b11(34962, x.c1b());
        x.b2v(34962, new Uint32Array(O), 35044);
        x.v7s(2, 4, 5121, !0, 0, 0);
        x.b11(34963, x.c1b());
        x.b2v(34963, new Uint16Array(u), 35044);
        x.e3x(0);
        x.e3x(1);
        x.e3x(2);
      });
      DEV_ROOT_FUNCTION();
      let p = [], I = [];
      try {
        const [x, E, n, r, y] = JSON.parse(localStorage["Dante-22"]);
        p = x;
        I = E;
        Ka = n;
        qa = r;
        a = y;
      } catch {
      }
      d.map((x, E) => x.h = x.g = x.j = 14 !== E && p[E] ? 1 : 0);
      Ya.map((x, E) => x.j = I[E] ? 1 : 0);
      Zb();
      pa = la || 14 !== Ka ? 1 : 0;
      Ob(c);
    });
    var k = [-110, -100, -92, -82, -106, -97, -88];
    const q = f => w(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f),
      l = f => {
        d.push({ l: ra, C: f });
        S(G(5), f.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
        S(G(5), f.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
        S(G().slice(0, -1), f.translate(0, -0.4).scale(0.5, 0.1, 0.5), L(0.5, 0.5, 0.4));
      },
      D = f =>
        Q(
          B(G().slice(0, -1), w(0, -f / 2).scale(6, f - 1, 2.2)),
          B(G().slice(0, -1), w(0, -f / 2 - 4).scale(4, f - 5, 4)),
          B(G(28, 1), w(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      C = Q(
        B(G(), w(0, -0.5, 1).scale(1.15, 1.2, 6.5), L(0.25, 0.25, 0.35, 0.3)),
        Q(
          B(G(3), w(0, 0, -5.5).scale(3, 2), L(0.6, 0.3, 0.4, 0.3)),
          B(G(), w(0, 0, -3.65).scale(2.5, 3), L(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => B(G(), w(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), L(0.7, 0.2, 0, 0.3))),
      ),
      H = [
        B(G(), w(0, -3).scale(11, 1.4, 3), L(0.9, 0.9, 0.9, 0.2)),
        B(G(), w(0, -2.2).scale(7.7, 0.5, 4), L(0.5, 0.5, 0.5, 0.2)),
        sb(12, f => B(G(), e.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), L(0.6, 0.5, 0.3, 0.2))).flat(),
        B(
          Q(
            B(G(6), e.rotate(90).scale(6, 8, 6)),
            B(G(4, 0, 0.01), w(0, 6).scale(12, 2, 0.75).rotate(0, 45)),
            B(G(6), e.rotate(90).scale(5, 12, 5)),
            ...[-5, 0, 5].map(f => B(G(5), w(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
          ),
          e,
          L(0.3, 0.6, 0.6, 0.3),
        ),
      ].flat(),
      z = sb(11, f => zb(xb(yb(16), q(f), L(1, 1, 0.8, 0.2)).reverse(), xb(yb(16), q(f + 1), L(1, 1, 0.8, 0.2)), 1))
        .flat();
    V();
    S([Za.slice(1)], w(-2).scale3d(3).rotate(90, 0));
    V();
    l(w(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, u) => {
      S(G(), w(0, 0, u ? 22 : -23).scale(3, 1, 8), L(0.9, 0.9, 0.9, 0.2));
      S(G(), w(0, 6.3, f).scale(4, 0.3, 1), L(0.3, 0.3, 0.3, 0.4));
      S(G().slice(0, -1), w(0, 1, f).scale(3, 0.2, 0.35), L(0.5, 0.5, 0.5, 0.3));
    });
    S(G(), w(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), L(0.8, 0.8, 0.8, 0.2));
    S(G(), w(3, 1.5, -20).scale(0.5, 2, 5), L(0.7, 0.7, 0.7, 0.2));
    S(G(5), w(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), L(0.6, 0.3, 0.3, 0.4));
    S(G(), w(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), L(0.75, 0.75, 0.75, 0.2));
    S(Q(
      Mb(
        Q(
          B(G(6, 0, 0, 0.3), w(0, -0.92).scale(13, 2, 13), L(0.8, 0.8, 0.8, 0.2)),
          B(G(), e.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), L(0.5, 0.5, 0.5, 0.5)),
        ),
        B(
          G(),
          e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          L(0.8, 0.2, 0.2, 0.5),
        ),
        B(G(6), w(0, -8).scale(9, 8, 7), L(0.2, 0.1, 0.4, 0.5)),
        B(G(6, 0, 0, 0.3), w(8, -4, -4).scale(14, 2, 13), L(0.7, 0.7, 0.7, 0.2)),
      ),
      B(G(6), w(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), L(0.5, 0.5, 0.5, 0.5)),
      B(G(5, 0, 1.5), w(0, 1).scale(4.5, 0.3, 4.5), L(0.7, 0.5, 0.9, 0.2)),
      B(G(5), e.scale(5, 30, 5), L(0.4, 0.2, 0.6, 0.5)),
    ));
    l(w(15.8, -2, 3.8));
    S(G(), w(-18.65, -3, 55).scale(2.45, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2));
    l(w(-55, -1.1, 46).rotate(0, 90));
    S(G(7), w(-57, -2.6, 46).scale(4, 1, 4), L(0.8, 0.8, 0.8, 0.3));
    S(G(6), w(-61.3, -2.4, 49).scale(3, 1, 5), L(0.4, 0.6, 0.6, 0.3));
    S(H, w(-53, 0, 55));
    S(G(), w(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), L(0.7, 0.7, 0.7, 0.2));
    S(G(3, 0, -0.5), w(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), L(0.8, 0.8, 0.8, 0.2));
    S(Q(
      B(G(), w(-100, 1, 63).scale(7.5, 4), L(0.5, 0.5, 0.5, 0.4)),
      B(G(), w(-100, 0, 63).scale(2, 2, 4), L(0.5, 0.5, 0.5, 0.4)),
      B(G(20, 1), w(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), L(0.5, 0.5, 0.5, 0.4)),
    ));
    S(Q(
      Mb(
        B(G(), w(-100, -2.6, 70).scale(3, 1.1, 7), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), w(-100, -2.4, 55).scale(8, 0.9, 8), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), w(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), L(0.8, 0.8, 0.8, 0.2)),
        B(G(6), w(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), L(0.6, 0.6, 0.6, 0.3)),
        B(G(), w(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), w(-100, 0.42, 92).scale(3, 1.1, 4.1), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), w(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), L(0.8, 0.8, 0.8, 0.2)),
      ),
      B(G(8), w(-100, -1, 55).scale(7, 0.9, 7), L(0.3, 0.3, 0.3, 0.4)),
      B(G(8), w(-100, -2, 55).scale(4, 0.3, 4), L(0.4, 0.4, 0.4, 0.5)),
      B(G(8, 0, -3.1), w(-100, -3, 55).scale(0.4, 1, 0.4), L(0.4, 0.4, 0.4, 0.5)),
    ));
    Za.map(({ x: f, z: u }) => {
      S(G(6), w(3 * f, 3, 15 * u).scale(0.7, 4, 0.7), L(0.6, 0.3, 0.3, 0.4));
      S(G(6), w(7 * f - 100, -3, 7 * u + 55).scale(1, 8.1), L(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(F => S(G(6), w(7 * f - 100, F, 7 * u + 55).scale(1.3, 0.5, 1.3), L(0.4, 0.2, 0.2, 0.8)));
      [1.5, 8].map(F =>
        S(G(15, 1), w(9 * f - 38.9, F - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), L(0.6, 0.6, 0.6, 0.3))
      );
      S(G(14, 1).slice(0, -2), w(9 * f - 38.9, -18, 11 * u + 17).scale(1, 14.2), L(0.25, 0.25, 0.25, 1));
    });
    sb(7, f => {
      S(
        G((23 * f + 1) % 5 + 5, 0, 0.5),
        w(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3),
        L(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    S(G(), w(-87, -9.5, 24).scale(7, 1, 3), L(0.4, 0.5, 0.6, 0.4));
    S(G(4), w(-86, -9.2, 27).scale(5, 1, 5), L(0.5, 0.6, 0.7, 0.3));
    S(G(12, 1), w(-86, -9, 31).scale(1.5, 1, 1.5), L(0.3, 0.3, 0.4, 0.1));
    l(w(-86, -7.5, 31));
    S(G(5), w(-38.9, -11.1, 10).scale(2, 1.2, 2), L(0.2, 0.4, 0.7, 0.3));
    S(Q(
      Mb(
        B(G(), w(-38.9, -11.3, 17).scale(11, 1, 13), L(0.3, 0.4, 0.6, 0.3)),
        B(G(5), w(-38.9, -11.1, 17).scale(9, 1, 9), L(0, 0.2, 0.3, 0.5)),
      ),
      B(G(5), w(-38.9, -11.1, 17).scale3d(5.4), L(0, 0.2, 0.3, 0.5)),
    ));
    l(w(-38.9, -9.4, 10));
    S(
      Q(
        Mb(
          B(G(6), w(0, 0, -18).scale(15, 1.3, 15), L(0.7, 0.7, 0.7, 0.3)),
          B(G(5), e.scale(4.5, 1.2, 9), L(0.45, 0.4, 0.6, 0.3)),
        ),
        ...sb(6, f =>
          sb(6, u =>
            B(
              G(6),
              w(4.6 * u - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * u) - 32).scale3d(2),
              L(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      w(-38.9, -11.3, -1),
    );
    l(w(-84, -0.7, 85).rotate(0, 45));
    S(G(5), w(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), L(0.8, 0.1, 0.25, 0.4));
    l(w(-116, -1.4, -18).rotate(0, 180));
    S(
      Q(B(G(), w(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...k.map(f => B(G(), w(f, 0.05, -3).scale(1.35, 2, 9)))),
      e,
      L(0.5, 0.5, 0.6, 0.2),
    );
    S(G(), w(-96.5, 1, -2).scale(19, 0.3, 0.3), L(0.5, 0.5, 0.6, 0.2));
    S(G(6), w(-116, -2.6, -16.5).scale(3.2, 0.8, 3), L(0.6, 0.5, 0.7, 0.2));
    S(G(), w(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), L(0.8, 0.8, 0.8, 0.2));
    S(G().slice(0, -1), w(-115.5, -17, -12).scale(0.5, 15, 2.2), L(0.6, 0.6, 0.6, 0.3));
    S(G(8).slice(0, -2), w(-114, -17, -2).scale(2, 15, 2), L(0.6, 0.6, 0.6, 0.3));
    S(G(8).slice(0, -2), w(-79, -17, -2).scale(2, 15, 2), L(1, 1, 1, 0.3));
    S(G().slice(0, -1), w(-77, -17, -50.5).scale(2.2, 15, 0.5), L(0.6, 0.6, 0.6, 0.3));
    S(Q(
      B(G(12).slice(0, -1), w(-77, -14.5, -12).scale(4, 17.5, 4), L(0.7, 0.7, 0.7, 0.2)),
      B(G(12), w(-77, 3.1, -12).scale(3, 5, 3), L(0.4, 0.5, 0.6, 0.2)),
      B(G(), w(-79, 0.1, -12).scale(3.5, 2, 1.3), L(0.4, 0.5, 0.6, 0.2)),
      B(G(), w(-77, 0.1, -14).scale(1.5, 2, 2), L(0.4, 0.5, 0.6, 0.2)),
    ));
    S(Q(
      B(G(), w(-93, -5.8, -40).scale(9, 1, 5), L(0.8, 0.8, 0.8, 0.1)),
      B(G(9), w(-98, -5.8, -40).scale(3, 8, 3), L(0.7, 0.7, 0.7, 0.2)),
    ));
    S(G(), w(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), L(0.6, 0.6, 0.6, 0.3));
    S(G(9).slice(0, -1), w(-98, -18.4, -40).scale(2.5, 13.5, 2.5), L(0.5, 0.5, 0.5, 0.3));
    l(w(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, u) => {
      S(
        Q(
          B(G(), w(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), L(0.5, 0.5, 0.5, 0.4)),
          B(G(5), w(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), L(0.6, 0.24, 0.2, 0.5)),
          B(G(), e.scale(3, 3, 10), L(0.6, 0.24, 0.2, 0.5)),
          B(G(5), w(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), L(0.6, 0.24, 0.2, 0.5)),
          B(G(32, 1), w(0, 3, -5).scale(3, 4, 10).rotate(90, 0), L(0.6, 0.24, 0.2, 0.5)),
        ),
        w(f - 100, 0.7, 97),
      );
      S(G(12, 1), w(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), L(0.6, 0.24, 0.2, 0.5));
      [7.2, 1.5].map(F => S(G(15, 1), w(-7.5 * f - 100, F + 0.7, 96).scale(1.1, 0.5, 1.1), L(0.5, 0.24, 0.2, 0.4)));
      S(z, w(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      S(z, w(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      sb(5, F => S(z, w(18.5 * (u - 0.5), 0, 4.8 * F - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2)));
    });
    S(Q(
      B(G(), w(-82.07, 0.8, 106).scale(11, 0.9, 2.2), L(0.7, 0.7, 0.7, 0.1)),
      B(G(45, 1), w(-81, 0.7, 106).scale3d(7.7), L(0.7, 0.7, 0.7, 0.1)),
    ));
    S(G(), w(-50.7, 1, 99).scale(2, 0.65, 1), L(0.7, 0.7, 0.7, 0.2));
    S(G(), w(-58, 1, 106).scale(2, 0.65, 2), L(0.7, 0.7, 0.7, 0.2));
    S(G(), w(-34.2, 0.4, 91).scale(3, 1, 3), L(0.7, 0.7, 0.7, 0.3));
    S(G(), w(-42, 0.4, 91).scale(5, 1, 2.5), L(0.7, 0.7, 0.7, 0.3));
    S(G(5), w(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), L(0.2, 0.5, 0.5, 0.6));
    l(w(-34, 2.7, 96).rotate(-12, 0));
    S(Q(
      Mb(
        B(G(), w(-101.5, 0.7, 93.5).scale(10.5, 1, 2), L(0.7, 0.7, 0.7, 0.2)),
        B(G(6, 0, 0, 0.6), w(-100, 0.7, 105.5).scale(8, 1, 11), L(0.7, 0.7, 0.7, 0.2)),
      ),
      B(G(5), w(-100, 0.7, 113).scale(4, 3, 4), L(0.7, 0.7, 0.7, 0.2)),
    ));
    sb(3, f => {
      S(D(16), w(-77, -9, -12 * f - 20).rotate(0, 90), L(0.6, 0.6, 0.6, 0.3));
      S(D(16), w(12 * f - 109, -9, -12), L(0.6, 0.6, 0.6, 0.3));
      S(
        D(24.7 - 0.7 * (1 & f)),
        w(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
        1 & f ? L(0.5, 0.5, 0.5, 0.3) : L(0.35, 0.35, 0.35, 0.5),
      );
    });
    S(Q(
      Mb(
        B(G(), w(0, 16, 111).scale(3, 1, 3.8), L(0.5, 0.3, 0.3, 0.4)),
        B(G(6, 0, 0, 0.3), w(0, -0.92, 95).scale(14, 2, 14), L(0.8, 0.8, 0.8, 0.2)),
        B(G(), w(0, 16, 110.5).scale(12, 1, 3), L(0.5, 0.3, 0.3, 0.4)),
      ),
      B(G(5), w(0, 0, 95).scale3d(6), L(0.3, 0.3, 0.3, 0.5)),
      B(G(5), w(0, 16, 103.5).scale(5.5, 5, 5.5), L(0.5, 0.3, 0.3, 0.4)),
    ));
    l(w(0, 1.7, 82).rotate(0, 180));
    S(G(5).slice(0, -1), w(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), L(0.5, 0.3, 0.3, 0.4));
    S(G(6), w(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), L(0.5, 0.6, 0.7, 0.3));
    S(G(), w(0, 16, 127.8).scale(1.5, 1, 0.7), L(0.5, 0.6, 0.7, 0.3));
    S(G(7), w(0, 15.1, 133).scale(5, 2, 5), L(0.4, 0.5, 0.6, 0.4));
    hc(w(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    hc(w(0, 2.8), [5, 10, 3], [-5, 10, 3], ...yb(18).map(({ x: f, z: u }) => [7 * f, 10 * u, 4.5 - 2 * bb(f)]));
    hc(w(0, 3, 95), ...yb(9).map(({ x: f, z: u }) => [9 * f, 9 * u, 4]));
    hc(w(0, 19, 134), [0, 0, 3.5]);
    hc(w(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    hc(w(-89, 0.2, 80), [0, 0, 6]);
    hc(w(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    hc(w(-115, 0.2, -12), [0, 0, 3.5]);
    hc(w(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    V();
    S(G(5), w(0, -0.2).scale(5, 1, 5), L(0.6, 0.65, 0.7, 0.3));
    l(w(0, 1.2));
    sb(2, () => {
      V();
      Za.map(({ x: f, z: u }) => {
        S(G(11, 1).slice(0, -2), w(4 * f, 4, 4 * u).scale(0.8, 3, 0.8), L(0.5, 0.3, 0.7, 0.6));
        S(G(), w(4 * f, 7, 4 * u).scale(1, 0.3), L(0.5, 0.5, 0.5, 0.3));
      });
      S(Q(
        B(G().slice(0, -1), e.scale(5, 1, 5), L(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(f => B(G(25, 1), w(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), L(0.8, 0.8, 0.8, 0.3))),
      ));
      S(G(), w(0, -3).scale(8, 2, 8), L(0.4, 0.4, 0.4, 0.3));
    });
    V();
    S(Q(
      Mb(
        B(G(), e.scale(1.5, 1, 5), L(0.9, 0.9, 0.9, 0.2)),
        B(G(), w(0, -2).scale(2, 3.2, 1.9), L(0.3, 0.8, 0.5, 0.5)),
        B(G(6), e.scale(4, 1, 5), L(0.9, 0.9, 0.9, 0.2)),
        B(G(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), L(0.9, 0.9, 0.9, 0.2)),
      ),
      B(G(), e.scale(1.3, 10, 1.3), L(0.2, 0.7, 0.4, 0.6)),
    ));
    hc(w(0, 2.8), [0, 0, 4.5]);
    V();
    S(G(3), w(-23, -1.7, 55.8).scale(5, 0.7, 8.3), L(0.3, 0.6, 0.6, 0.2));
    S(G(8), w(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), L(0.8, 0.8, 0.8, 0.2));
    S(G(), w(-23, -2.2, 62).scale(3, 1, 4), L(0.5, 0.5, 0.5, 0.3));
    S(G(), w(-23, -3, 55).scale(5.2, 1.7, 3), L(0.5, 0.5, 0.5, 0.3));
    l(w(-23, -0.5, 66.5));
    V();
    S(G(), w(-22.55, -3, 55).scale(1.45, 1.4, 2.7), L(0.7, 0.7, 0.7, 0.2));
    S(Q(B(G(), e.scale(3, 1.4, 2.7)), B(G(), e.scale(1.2, 8, 1.2))), w(-33, -3, 55), L(0.7, 0.7, 0.7, 0.2));
    V();
    S(Q(B(G(), e.scale(3, 1.4, 2.7)), B(G(), e.scale(1, 3))), w(-27, -3, 55), L(0.9, 0.9, 0.9, 0.2));
    S(G(), w(-39, -3, 55).scale(3, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2));
    V();
    S(G(6), w(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), L(0.7, 0.7, 0.7, 0.4));
    V();
    [0, 12, 24].map(f =>
      S(G(), w(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.2, 0.5, 0.6, 0.2))
    );
    V();
    [6, 18].map(f =>
      S(G(), w(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.1, 0.4, 0.5, 0.2))
    );
    V();
    S(G(5), w(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), L(0.3, 0.3, 0.5, 0.5));
    S(G(5).slice(0, -1), w(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), L(0.6, 0.3, 0.5, 0.5));
    S(
      Q(
        B(G(5), w(0, 2).scale(5, 7, 5).skewY(8)),
        B(G(5), w(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
        B(G(), e.scale(2, 8, 3)),
      ),
      w(-38.9, -11.3, 17),
      L(0.2, 0.4, 0.5, 0.5),
    );
    hc(w(-39.1, -0.6, 17).rotate(11), ...yb(15).map(({ x: f, z: u }) => [3 * f, 3 * u, 1.2]));
    k.map((f, u) => {
      u % 2 || 6 <= u || V();
      S(C, w(f, 1.9, -12));
    });
    sb(4, f => {
      V();
      S(
        G(6),
        w(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        L(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [L(0.1, 0.55, 0.45, 0.2), L(0.2, 0.5, 0.5, 0.3), L(0.3, 0.45, 0.55, 0.4)].map((f, u) => {
      V();
      S(G(), w(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), f);
      2 === u && S(G(), w(-29.1, 0.4, 91).scale(2.1, 1, 3), L(0.7, 0.7, 0.7, 0.3));
      1 === u && S(G(), w(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), L(0.6, 0.6, 0.7, 0.3));
    });
    V();
    S(G(5), e.scale(5, 1.1, 5), L(0.5, 0.3, 0.3, 0.4));
    S(G(5), e.scale(5.5, 0.9, 5.5), L(0.25, 0.25, 0.25, 0.4));
    l(w(0, 1.5, -1).rotate(0, 180));
    sb(4, f => {
      V();
      sb(
        7,
        u =>
          S(B(
            G(8, 1).slice(0, -1),
            w((2 < f ? 3.5 : 4) * (u / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2),
            L(0.3, 0.3, 0.38),
          )),
      );
    });
    V();
    S(H);
    V();
    S(G(5).slice(0, -1), w(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), L(0.5, 0.5, 0.5, 0.5));
    S(G(10).slice(0, -1), w(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), L(0.3, 0.8, 0.7, 0.3));
    S(G(15, 1), w(-7.5).rotate(0, 90).scale(3, 2.3, 3), L(0.4, 0.4, 0.4, 0.3));
    l(w(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => S(z, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    S(Q(B(G(10), e.scale(6, 2, 6), L(0.1, 0.6, 0.5, 0.3)), B(G(10), e.scale(3.3, 6, 3.3), L(0.1, 0.6, 0.5, 0.5))));
    hc(w(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    V();
    S(G(3), w(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), L(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      S(G(6), w(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), L(0.7, 0.7, 0.7, 0.4));
      S(G(), w(0, 6.2, f + 95).scale(0.5, 11, 0.5), L(0.5, 0.3, 0.3, 0.4));
    });
    V();
    S(G(5).slice(0, -1), w(0, 2).scale(1, 2), L(0.3, 0.3, 0.3, 0.2));
    S(G(8).slice(0, -1), w(0, 2).scale(3, 1.5, 3).rotate(0, 22), L(0.7, 0.7, 0.7, 0.1));
    S(Q(
      B(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)),
      B(G(), w(0, 0, -5.5).scale(1.5, 3, 2.7), L(0.45, 0.45, 0.45, 0.2)),
    ));
    hc(w(0, 3), ...yb(14).map(({ x: f, z: u }) => [5.6 * f, 5.6 * u, 2]));
    V();
    [-1, 1].map(f => S(z, e.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90)));
    S(Q(
      B(G(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)),
      B(G().slice(0, -1), w(0, 2).scale(9, 1.1, 2), L(0.3, 0, 0, 0.3)),
    ));
    S(G(5).slice(0, -1), w(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2));
    S(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2));
    V();
    S(Q(
      B(G(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)),
      B(G().slice(0, -1), w(0, 2, 7).scale(2, 1.1, 9), L(0.3, 0, 0, 0.3)),
      B(G().slice(0, -1), w(7, 2).scale(9, 1.1, 2), L(0.3, 0, 0, 0.3)),
    ));
    S(G(5).slice(0, -1), w(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2));
    S(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2));
    V();
    S(Q(
      B(G(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)),
      B(G().slice(0, -1), w(0, 2, -7).scale(2, 1.1, 9), L(0.3, 0, 0, 0.3)),
      B(G().slice(0, -1), w(7, 2).scale(9, 1.1, 2), L(0.3, 0, 0, 0.3)),
    ));
    S(G(5).slice(0, -1), w(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2));
    S(G(28, 1), e.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2));
    sb(2, () => {
      V();
      S(Q(
        B(G(30, 1, 1.15, 1), w(0, -3).scale(3.5, 1, 3.5), L(0.7, 0.4, 0.25, 0.7)),
        B(G(), w(4, -1.2).scale3d(2), L(0.7, 0.4, 0.25, 0.3)),
        B(G(30, 1, 1.3, 1), w(0, -2.5).scale(2.6, 1, 3), L(0.7, 0.4, 0.25, 0.2)),
      ));
      l(w(0, -3, 4));
    });
    for (k = 0; 16 > k; ++k) {
      V(),
        S(G(9, 1), w(0, 0.8).scale(0.2, 0.3, 0.2), L(0.7, 1, 0.2)),
        S(G(6, 1).slice(0, -1), e.scale(0.12, 1.2, 0.12), L(0.3, 0.3, 0.5, 0.1)),
        S(G(3), w(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), L(0.2, 0.2, 0.2, 0.1));
    }
    V();
    S(Ab(20), w(0, 1).scale3d(0.5), L(1, 0.3, 0.4));
    S(Ab(30), e.scale(0.65, 0.8, 0.55), L(1, 0.3, 0.4));
    S(G(), w(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), L(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      S(z, e.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), L(1, 1, 0.8));
      S(
        B(Q(G(15, 1), B(G(), w(0, 0, 1).scale(2, 2, 0.5))), e.rotate(-90, 0).scale(0.1, 0.05, 0.1), L(0.3, 0.3, 0.3)),
        w(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map(f => {
      V();
      S(G(20, 1), w(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), L(1, 0.3, 0.4));
    });
    V();
    S(G(6, 1).slice(0, -1), e.scale(0.77, 1, 0.77), L(1, 0.3, 0.5));
    V();
    S(
      Ab(28, 22, (f, u, F) => {
        var O = u / 22, M = f * Math.PI * 2 / 28, J = Math.sin(O ** 0.6 * Math.PI / 2);
        f = O * O * Math.sin(f * Math.PI * 0.5) / 4;
        return 21 < u
          ? { x: F.A = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(M) * J,
            y: Math.cos(O * Math.PI) - O - f,
            z: Math.sin(M) * J + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      e.scale3d(0.7),
      L(1, 1, 1),
    );
    [-1, 1].map(f => S(Ab(10), w(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    DEV_ROOT_FUNCTION();
  });
});
