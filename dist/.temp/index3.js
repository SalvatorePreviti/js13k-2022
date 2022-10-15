let ba,
  ea,
  fa,
  la,
  na,
  pa,
  qa,
  sa,
  ta,
  ua,
  va,
  ya,
  za,
  Aa,
  Ba,
  Ca,
  Da = 0,
  a = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ia = 0,
  Ja = 0,
  Ka = 0,
  La = 14,
  Ma = 0.1;
const Na = Math.PI / 180,
  Qa = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    );
var Ra = 0, Ta = 180, Ua = 0, Va = 0, Wa = 0;
const Xa = [],
  d = [],
  ab = [],
  bb = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  cb = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  db = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  fb = (
    c,
    b = eb,
    k = 0,
  ) => (k *= 16,
    b[k++] = c.m11,
    b[k++] = c.m12,
    b[k++] = c.m13,
    b[k++] = c.m14,
    b[k++] = c.m21,
    b[k++] = c.m22,
    b[k++] = c.m23,
    b[k++] = c.m24,
    b[k++] = c.m31,
    b[k++] = c.m32,
    b[k++] = c.m33,
    b[k++] = c.m34,
    b[k++] = c.m41,
    b[k++] = c.m42,
    b[k++] = c.m43,
    b[k] = c.m44,
    b),
  gb = (
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
  ob = (c = 0, b = 0, k = 0, l = 1) => {
    kb = h.m11 * c + h.m21 * b + h.m31 * k + h.m41 * l;
    lb = h.m12 * c + h.m22 * b + h.m32 * k + h.m42 * l;
    mb = h.m13 * c + h.m23 * b + h.m33 * k + h.m43 * l;
    nb = h.m14 * c + h.m24 * b + h.m34 * k + h.m44 * l;
  };
var kb, lb, mb, nb;
const m = NO_INLINE((c, b, k) => e.translate(c, b, k)),
  pb = (c, b) => Array.from(Array(c), (k, l) => b(l)),
  qb = (c, b, k) => (c.A = k, c.s = b, c),
  rb = (c, b, k = c.s) => (gb(b), qb(c.map(({ x: l, y: n, z: g }) => (ob(l, n, g), { x: kb, y: lb, z: mb })), k, c.A)),
  t = (c, b, k) => c.map(l => rb(l, b, k)),
  sb = NO_INLINE(c => 0 > c ? -c : c),
  tb = NO_INLINE((c, b) => c < b ? c : b),
  ub = NO_INLINE((c, b) => b < c ? c : b),
  vb = (c, b) => sb(c) > b ? c : 0,
  wb = (c, b = 0, k = 1) =>
    c < b ? b : k < c
      ? k
      : c,
  xb = c => Math.atan2(Math.sin(c * Na), Math.cos(c * Na)) / Na,
  yb = (c, b, k) => c + (2 * (b = (b - c) % 360) % 360 - b) * wb(k) || 0,
  zb = (c, b, k) => (0 < k ? 1 > k ? c + (b - c) * k : b : c) || 0,
  Ab = (c, b, k = 0) => (c * c + b * b + k * k) ** 0.5,
  Bb = (c, b = 0) =>
    pb(c, k => {
      const l = Math.cos(2 * Math.PI * k / c);
      return { x: Math.sin(2 * Math.PI * k / c), y: 0, z: 0.01 > sb(l) ? l : 0 > l ? l - b : l + b };
    }),
  Cb = (c, b, k) =>
    c.map((l, n, { length: g }) => qb([l, b[g - n - 1], b[g - (n + 1) % g - 1], c[(n + 1) % g]], c.s, k)),
  w = (
    c,
    b,
    k = 0,
    l,
  ) => (c = c ? Bb(c, l) : bb,
    l = rb(c, m(0, 1).scale3d(0 < k ? k : 1)),
    c = rb(c, m(0, -1).scale3d(0 > k ? -k : 1)).reverse(),
    [...Cb(c, l, b), l, c]),
  Db = (
    c,
    b = c,
    k = (
      l,
      n,
    ) => (n *= Math.PI / b,
      { x: Math.cos(l *= 2 * Math.PI / c) * Math.sin(n), y: Math.cos(n), z: Math.sin(l) * Math.sin(n) }),
  ) => {
    const l = [];
    for (let n = 0; c > n; n++) {
      for (let g = 0; b > g; g++) {
        const q = qb([], 0, 1);
        l.push(q);
        q.push(k(n, g, q));
        g && q.push(k((n + 1) % c, g, q));
        b - 1 > g && q.push(k((n + 1) % c, g + 1 % b, q));
        q.push(k(n, g + 1 % b, q));
      }
    }
    return l;
  },
  z = NO_INLINE((c, b, k, l = 0) => 255 * l << 24 | 255 * k << 16 | 255 * b << 8 | 255 * c),
  Eb = c => {
    let b, k = 0, l = 0, n = 0, g = c.at(-1);
    for (b of c) {
      k += (g.y - b.y) * (g.z + b.z), l += (g.z - b.z) * (g.x + b.x), n += (g.x - b.x) * (g.y + b.y), g = b;
    }
    return b = Ab(k, l, n), k /= b, l /= b, n /= b, { x: k, y: l, z: n, w: k * g.x + l * g.y + n * g.z };
  },
  Fb = ({ x: c, y: b, z: k }, l) => c * l.x + b * l.y + k * l.z,
  Gb = (c, b) => {
    let k;
    var l, n;
    const g = b.i, q = b.u;
    for (var v = 0; g.length > v; ++v) {
      if (-8e-5 > (k = Fb(c, g[v]) - c.w) ? n = b : 8e-5 < k && (l = b), n && l) {
        l = [];
        n = [];
        v = g.at(-1);
        let B = Fb(v, c) - c.w;
        for (const A of g) {
          k = Fb(A, c) - c.w,
            8e-5 > B && n.push(v),
            -8e-5 < B && l.push(v),
            (8e-5 < B && -8e-5 > k || -8e-5 > B && 8e-5 < k)
            && (B /= k - B,
              v = { x: v.x + (v.x - A.x) * B, y: v.y + (v.y - A.y) * B, z: v.z + (v.z - A.z) * B },
              l.push(v),
              n.push(v)),
            v = A,
            B = k;
        }
        l = 2 < l.length && { i: qb(l, g.s, g.A), u: q, v: b };
        n = 2 < n.length && { i: qb(n, g.s, g.A), u: q, v: b };
        break;
      }
    }
    return { x: l, y: n };
  },
  Hb = (c, b, k = Eb(b.i)) => {
    let l, n;
    return c
      ? ({ x: l, y: n } = Gb(c, b), l || n || c.i.push(b), l && (c.o = Hb(c.o, l, k)), n && (c.m = Hb(c.m, n, k)))
      : c = { x: k.x, y: k.y, z: k.z, w: k.w, i: [b], o: 0, m: 0 },
      c;
  },
  Kb = (c, b, k) => {
    const l = [],
      n = (g, q) => {
        let { x: v, y: B } = Gb(g, q);
        v || B || (0 < k * Fb(g, b) ? v = q : B = q);
        v && (g.o ? n(g.o, v) : l.push(v));
        B && g.m && n(g.m, B);
      };
    for (const g of b.i) {
      n(c, g);
    }
    return l;
  },
  Lb = (c, b) => c && (b(c), Lb(c.o, b), Lb(c.m, b)),
  Mb = c => (Lb(c, b => {
    const k = b.m;
    b.m = b.o;
    b.o = k;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const l of b.i) {
      l.u = !l.u;
    }
  }),
    c),
  Nb = c => c.length ? c.reduce((b, k) => Hb(b, { i: k, u: 0, v: 0 }), 0) : c,
  Ob = (...c) =>
    c.reduce((b, k) => {
      const l = [];
      if (b = Nb(b), k) {
        k = Nb(k);
        Lb(b, n => n.i = Kb(k, n, 1));
        Lb(k, n => l.push([n, Kb(b, n, -1)]));
        for (let [n, g] of l) {
          for (const q of g) {
            Hb(b, q, n);
          }
        }
      }
      return b;
    }),
  H = (c, ...b) => {
    const k = g => {
        let q;
        return g.v && ((q = n.get(g.v)) ? (l.delete(q), g = k(g.v)) : n.set(g.v, g)), g;
      },
      l = new Map(),
      n = new Map();
    return c = Mb(Ob(Mb(Nb(c)), ...b)),
      Lb(c, g => {
        for (const q of g.i) {
          l.set(k(q), q.u);
        }
      }),
      Array.from(l, ([{ i: g }, q]) => {
        const v = g.map(({ x: B, y: A, z: f }) => ({ x: B, y: A, z: f }));
        return qb(q ? v.reverse() : v, g.s, g.A);
      });
  },
  Pb = NO_INLINE(c => 1 - Math.exp(-Da * c)),
  Qb = NO_INLINE((c, b, k) => zb(c, b, Pb(k))),
  Rb = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Tb = NO_INLINE(c => {
    let b = 0;
    const k = A => Math.sin(A * Math.PI * 2),
      l = A => 0.5 > A % 1 ? 1 : -1,
      n = A => A % 1 * 2 - 1,
      g = A => 2 > (A = A % 1 * 4) ? A - 1 : 3 - A,
      q = () => {
        let A = 0;
        const f = wa => {
            let xa, ha, hb, Ha = 0, Oa = 0;
            const ib = [],
              Pa = new Int32Array(768 * wa),
              u = 2 ** (p - 9) / wa,
              D = Math.PI * 2 ** (ma - 8) / wa,
              x = oa * wa & -2;
            for (let S = 0; 11 >= S; ++S) {
              for (
                let Z = 0, U = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + S];
                32 > Z;
                ++Z
              ) {
                const ia = (32 * S + Z) * wa;
                for (var G = 0; 4 > G; ++G) {
                  if (xa = 0, U && (xa = r[U - 1].charCodeAt(Z + 32 * G) - 40, xa += 0 < xa ? 106 : 0), xa) {
                    var O;
                    if (!(O = ib[xa])) {
                      O = xa;
                      let I = void 0, V = void 0;
                      var aa = xa;
                      let Ya = 0, Ib = 0;
                      const cc = 2 > b ? n : k, dc = 2 > b ? 1 > b ? l : g : k, Wb = new Int32Array(X + W + Sa);
                      for (let Za = 0, Jb = 0; X + W + Sa > Za; ++Za, ++Jb) {
                        let $a = 1;
                        X > Za
                          ? $a = Za / X
                          : X + W > Za || ($a = (1 - ($a = (Za - X - W) / Sa)) * 3 ** (-L / 16 * $a));
                        0 > Jb
                          || (Jb -= 4 * wa,
                            V = 0.00396 * 2 ** ((aa + T - 256) / 12),
                            I = 0.00396 * 2 ** ((aa + ra - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Wb[Za] = 80
                            * (cc(Ya += V * $a ** (R / 32)) * E + dc(Ib += I * $a ** (ca / 32)) * J
                              + (ja ? (2 * Math.random() - 1) * ja : 0))
                            * $a | 0;
                      }
                      O = ib[O] = Wb;
                    }
                    for (let I = 0, V = 2 * ia; O.length > I; ++I, V += 2) {
                      Pa[V] += O[I];
                    }
                  }
                }
                for (let I, V = 0; wa > V; ++V) {
                  O = 0;
                  G = 2 * (ia + V);
                  var M = (((I = Pa[G]) || hb)
                    && (ha = 0.00308 * F,
                      1 !== b && 4 !== b || (ha *= Math.sin(u * G * Math.PI * 2) * jb / 512 + 0.5),
                      ha = 1.5 * Math.sin(ha),
                      Ha += ha * Oa,
                      M = (1 - N / 255) * (I - Oa) - Ha,
                      Oa += ha * M,
                      I = 4 === b ? Oa : 3 === b ? M : Ha,
                      b || (I = 1 > (I *= 22e-5) ? -1 < I ? Math.sin(I / 4 * Math.PI * 2) : -1 : 1, I /= 22e-5),
                      I *= C / 32,
                      hb = 1e-5 < I * I,
                      M = Math.sin(D * G) * da / 512 + 0.5,
                      O = I * (1 - M),
                      I *= M),
                    G < x || (O += Pa[1 + G - x] * ka / 255,
                      I += Pa[
                        G
                        - x
                      ] * ka / 255),
                    A + G >> 1);
                  v[M] += (Pa[G] = O) / 65536;
                  B[M] += (Pa[++G] = I) / 65536;
                }
              }
            }
            A += 768 * wa;
          },
          r = cb[b],
          [E, T, R, J, ra, ca, ja, X, W, y, L, p, F, N, C, da, ma, ka, oa, jb] = db[b],
          Sa = 4 * y ** 2;
        f(5513);
        f(4562);
        f(3891);
        Rb(5 > ++b ? q : c);
      },
      v = (fa = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: Sb / 2 })).getChannelData(0),
      B = fa.getChannelData(1);
    Rb(q);
  }),
  Ub = (c, b, k, l) =>
    new DOMMatrix([k, 0, 0, 0, 0, l, 0, 0, 0, 0, (b + c) / (c - b), -1, 0, 0, 2 * b * c / (c - b), 0]);
let Vb = () => {
  let c, b, k, l, n, g, q, v, B, A, f, r, E, T, R, J, ra = !0;
  const ca = [],
    ja = () => {
      b4.innerHTML = "Music: " + ra;
      J && (ea || !ra ? J.disconnect() : J.connect(R.destination));
    },
    X = () => {
      const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
      pa = [Ub(0.3, 55, p, 1.732051), Ub(55, 181, p, 1.732051)];
      qa = Ub(0.3, 181, p, 1.732051);
      l = v = void 0;
      ca.length =
        la =
        T =
        r =
        E =
        Fa =
        Ga =
          0;
      document.hidden && W(!0);
    },
    W = p => {
      if (ea !== p) {
        if (ea = p, X(), document.body.className = p ? "l m" : "l", p) {
          try {
            document.exitFullscreen().catch(() => 0), document.exitPointerLock();
          } catch {
          }
        }
        ja();
      }
    },
    y = p => {
      try {
        R || (R = new AudioContext(), (J = R.createBufferSource()).buffer = fa, J.loop = !0, J.start()),
          document.body.requestFullscreen().catch(() => 0);
      } catch {
      }
      W(!1);
      na = p;
    },
    L = (p, F) => p.buttons[F]?.pressed || 0 < p.buttons[F]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => y();
  b2.onclick = () => y(1);
  b5.onclick = () => W(!0);
  b4.onclick = () => {
    ra = !ra;
    ja();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onclick = p => {
    if (!ea && (p.target === hC && (la = 1), na)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = p => {
    let F;
    p.repeat
      || (F = {
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
        (ca[F] = !!p.type[5] && !0) && (0 === F && (la = 1), 1 === F && W(!0)));
  };
  onmousemove = ({ movementX: p, movementY: F }) => {
    na && (p || F) && (Ta += 0.1 * p, Ra += 0.1 * F);
  };
  hC.ontouchstart = p => {
    if (!ea) {
      for (let { pageX: F, pageY: N, identifier: C } of p.changedTouches) {
        na && F > hC.clientWidth / 2
          ? void 0 === v && (B = 0, g = F, q = N, v = C, f = Ra, A = Ta)
          : void 0 === l && (n = 0, b = F, k = N, l = C);
      }
      c = Ea;
    }
  };
  hC.ontouchmove = p => {
    if (!ea) {
      for (let { pageX: ma, pageY: ka, identifier: oa } of p.changedTouches) {
        var F, N, C, da;
        v === oa && (Ra = f + (ka - q) / 2.3, Ta = A + (ma - g) / 2.3, B = 1);
        l === oa
          && (oa = (b - ma) / 19,
            F = sb(oa),
            N = (k - ka) / 19,
            C = sb(N),
            (da = 0.3 < ub(F, C)) && (n = 1),
            r = wb(oa, -1) * (da && 0.2 < F),
            E = wb(N, -1) * (da && 0.2 < C),
            2 < F && (b = 19 * (0 > oa ? -1 : 1) + ma),
            2 < C && (k = 19 * (0 > N ? -1 : 1) + ka));
      }
    }
  };
  hC.ontouchend = p => {
    let F;
    document.activeElement === document.body && p.preventDefault();
    for (const N of p.changedTouches) {
      N.identifier === v
        ? (v = void 0, B || (F = 1), B = 0)
        : N.identifier === l
        ? (l = void 0, E = r = 0, n || (F = 1), n = 0)
        : F = 1;
    }
    p.target === hC && F && c && 0.02 < (p = Ea - c) && 0.7 > p && (la = 1);
  };
  Vb = () => {
    Fa = E + (ca[4] ? 1 : 0) - (ca[5] ? 1 : 0);
    Ga = r + (ca[2] ? 1 : 0) - (ca[3] ? 1 : 0);
    let p = navigator.getGamepads()[0];
    p
      && (na && (Ra += 80 * Da * vb(p.axes[3], 0.3), Ta += 80 * Da * vb(p.axes[2], 0.3)),
        Fa += L(p, 12) - L(p, 13) - vb(p.axes[1], 0.2),
        Ga += L(p, 14) - L(p, 15) - vb(p.axes[0], 0.2),
        L(p, 9) && W(!0),
        (p = L(p, 3) || L(p, 2) || L(p, 1) || L(p, 0)) && !T && (la = 1),
        T = p);
  };
  document.onvisibilitychange = onblur = onresize = X;
  W(!0);
};
const Xb = (c, b) => {
    1 / 0 > Ma && (Ma = a + b, h4.innerHTML = c);
  },
  Yb = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        sa = ab.reduce((c, b) => c + b.j, 0)
      ] + " / XIII";
  },
  Zb = () => {
    localStorage["Dante-22"] = JSON.stringify([d.map(c => c.j), ab.map(c => c.j), La, va, a]);
  },
  K = (c, b = e, k) => za.push(...t(c, b, k)),
  P = () => {
    Xa.push({ l: ya = new DOMMatrix(), i: za = [] });
  },
  ac = (c, ...b) => {
    let k, l, n, g, q = 0, v = 0, B = 1, A = -1;
    const f = () => {
      if (f.j) {
        gb(Xa[35].l).translateSelf(
          ca % 4 * 1.2 - 1.7 + Math.sin(a + ca) / 7,
          -2,
          1.7 * (ca >> 2) - 5.5 + sb(ca % 4 - 2) + Math.cos(a / 1.5 + ca) / 6,
        );
      } else {
        let ja, X = 1, W = 1 / 0;
        for (let N = 0; b.length > N; N++) {
          let C = b[N], da = Ab(E - C[0], T - C[1]);
          X = tb(X, da / C[2]);
          0 > (da -= C[2]) ? ja = 1 : W > da && (W = da, r = C);
        }
        let y, L, p, F;
        ja
          || (y = E - r[0],
            L = T - r[1],
            p = Ab(y, L),
            F = Math.atan2(-L, y),
            B && (g = wb(g / (1 + Math.random())), v = (Math.random() - 0.5) * Math.PI / 2),
            F += v,
            A = -Math.cos(F),
            q = Math.sin(F),
            0.1 < p && (p = tb(p, r[2]) / p, E = y * p + r[0], T = L * p + r[1]));
        B = ja;
        g = Qb(g, 3 + 6 * (1 - X), 3 + X);
        R = Qb(R, E = Qb(E, E + A, g), g);
        J = Qb(J, T = Qb(T, T + q, g), g);
        k = yb(k, Math.atan2(R - l, J - n) / Na - 180, Pb(3));
        gb(ra).multiplySelf(c).translateSelf(l = R, 0, n = J).rotateSelf(0, k, 7 * Math.sin(1.7 * a));
        1.6 > (ob(), Ab(Ua - kb, Va - lb, Wa - mb))
          && (f.j = 1,
            Xb(
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
              ][sa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              6,
            ),
            Yb(),
            Zb());
      }
      fb(h, $b, 28 + ca);
    };
    let r = b[0], [E, T] = r, [R, J] = r;
    const ra = ya, ca = ab.length;
    ab.push(f);
  },
  Q = (c, b = 0, k = 0) => {
    const l = gb(e, Xa[++Aa].l);
    return l.m41 = c, l.m42 = b, l.m43 = k, l;
  };
let bc = () => {
  let c, b, k;
  const l = (n, g) => (n = wb(n), zb(n, 1 - n, g));
  (bc = () => {
    var n = (v, B, A) =>
      Q(v + Math.sin(a + 2) / 5, B + Math.sin(0.8 * a) / 5, A).rotateSelf(
        2 * Math.sin(a),
        Math.sin(0.7 * a),
        Math.sin(0.9 * a),
      );
    Aa = 1;
    k = zb(Qb(k, 0, 1), xb(k + 60 * Da), d[2].h - d[3].g);
    Ca = l(d[13].h, d[8].h);
    c = zb(Qb(c, 0, 5), xb(c + 56 * Da), Ca);
    b = zb(Qb(b, 0, 4), xb(b + 48 * Da), Ca);
    Q(0, 270 * (d[1].h - 1) + (2 + 5 * Math.cos(1.5 * a)) * (1 - d[10].h));
    var g = tb(1 - d[11].g, d[10].g);
    Q(g * Math.sin(0.6 * a + 1.2) * 12, 0, 35);
    Q(g * Math.sin(0.6 * a - 1.2) * 8.2, 0, 55);
    Q(g * Math.sin(0.6 * a) * 12, 0, 45);
    Q(9.8 * (1 - g));
    g = wb(1 - 5 * g) * l(d[11].h, d[2].h);
    Q(0, g * Math.sin(1.35 * a) * 4);
    Q(0, 0, g * Math.sin(0.9 * a) * 8);
    Q(0, -6.5 * d[11].g);
    g = l(d[4].g, d[3].g);
    Q(0, g * Math.sin(a) * 5 + 3.5 * (1 - ub(d[3].h, d[4].h)));
    Q(0, g * Math.sin(a + 3) * 6, g * Math.sin(0.6 * a + 1) * 6);
    Q(0, -7.3 * d[4].g);
    g = l(d[6].h, d[7].h);
    Q(0, -2, 10 - 8.5 * g * sb(Math.sin(1.1 * a)));
    Q(0, -2, 10 - 8.5 * g * sb(Math.sin(2.1 * a)));
    Q(0, -2, 10 - 8.5 * ub(g * sb(Math.sin(1.5 * a)), (1 - d[6].h) * (1 - g)));
    var q = l(d[5].g, d[13].g);
    for (g = 0; 4 > g; g++) {
      Q(
        (2 < g ? 2 * (1 - q) + q : 0) - 100,
        q * Math.sin(1.3 * a + 1.7 * g) * (3 + g / 3) + 0.7,
        115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & g ? -1 : 1)
          + ub(0.05, q) * Math.cos(1.3 * a + 7 * g) * (4 - 2 * (1 - g / 3)),
      );
    }
    g = l(d[8].g, d[9].g);
    for (let v = 0; 3 > v; ++v) {
      Q(0, g * Math.sin(1.5 * a + 1.5 * v) * 4 + (v ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)));
    }
    g = l(l((d[9].h + d[9].g) / 2, d[8].g), (d[12].h + d[12].g) / 2);
    Q(0, 16 * g, 95 + 8.5 * wb(2 * g - 1));
    Q(0, -4.7 * d[0].h, -15);
    Q(0, -4.7 * d[10].h, 15);
    Q(-99.7, -1.9 - 5.5 * d[3].h, 63.5);
    Q(-100, 0.6 - 5.8 * d[13].h, 96.5);
    Q(-75, 3 * (1 - d[2].g) * (1 - d[3].h), 55).rotateSelf(180 * (1 - d[2].g) + k, 0);
    Q(2.5 * (1 - q) - 139.7, -3 * (1 - d[5].h) - q * Math.sin(0.8 * a) - 1.8, 93.5).rotateSelf(
      Math.cos(1.3 * a) * (3 + 3 * q),
      0,
    );
    Q(-2 * Math.sin(a)).rotateSelf(25 * Math.sin(a));
    Q(-81, 0.6, 106).rotateSelf(0, 40 + c);
    Q(-65.8, 0.8, 106).rotateSelf(0, b);
    Q(-50.7, 0.8, 106).rotateSelf(0, 180 - b);
    Q(-50.7, 0.8, 91).rotateSelf(0, 270 + b);
    n(-12, 4.2, 40 * ua - 66);
    n(-123, 1.4, 55 - 65 * va);
    for (n = 0; 16 > n; ++n) {
      q = d[n],
        g = q.h = Qb(q.h, q.j, 4),
        q.g = Qb(q.g, q.j, 1),
        gb(gb(q.l).multiplySelf(q.C), Q(0)).rotateSelf(50 * g - 25, 0).translateSelf(0, 1).m44 = g,
        la && 3 > (ob(), Ab(Ua - kb, Va - lb, Wa - mb)) && (q.j
          ? 0.7 < g && (q.j = 0, La = n, Xb("* click *", 1), Zb())
          : 0.3 > g && (q.j = 1, La = n, Xb("* click *", 1), Zb())),
        14 === n && q.j && 0.8 < g && (q.j = 0,
          13 > sa
            ? Xb("Not leaving now, there are souls to catch!", 3)
            : ta || (ta = 1, Xb("Well done. They will be punished.<br>Thanks for playing", 1 / 0))),
        13 > n && ab[n]();
    }
    Ba();
    for (n = 0; 28 > n; ++n) {
      fb(Xa[28 + n].l, $b, n);
    }
    for (let v, B = 0, A = 656; 26 > B; ++B, ++A) {
      v = Xa[2 + B].l, $b[A++] = v.m41, $b[A++] = v.m42, $b[A++] = v.m43;
    }
  })();
};
const e = new DOMMatrix(),
  h = new DOMMatrix(),
  eb = new Float32Array(16),
  $b = new Float32Array(760),
  ec = new Uint8Array(65536),
  Sb =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      10725888),
  Y = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  fc = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (const c in fc) {
  [Y, fc].map(b => b[c[0] + [...c].reduce((k, l, n) => (k * n + l.charCodeAt(0)) % 434, 0).toString(36)] = b[c]);
}
Rb(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const l = [{}, {}, {}, {}, {}, {}, {}, {}],
          n = (
            u,
            D,
            x =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            const G = {}, O = (M, S) => (S = u.c6x(S), u.s3c(S, M), u.c6a(S), S), aa = u.c1h();
            return u.abz(aa, O(x, 35633)),
              u.abz(aa, O(D, 35632)),
              u.l8l(aa),
              M => M ? G[M] || (G[M] = u.gan(aa, M)) : u.u7y(aa);
          },
          g = (u, D, x) => {
            ea
              ? 1100 < hC.width && u.d97(4, Xa[55].D - Xa[53].B, 5123, 2 * Xa[53].B)
              : (u.das(4, Xa[D].D - Xa[D].B, 5123, 2 * Xa[D].B, ab.length), u.d97(4, Xa[x ? 53 : 56].B - 3, 5123, 6));
          },
          q = u => {
            requestAnimationFrame(q);
            var D = (u - (ba || u)) / 1e3;
            Ea += D;
            a += Da = ea ? 0 : tb(0.055, D);
            ba = u;
            0 < Da
              && (va = Qb(va, d[15].g, 0.2 + 0.3 * sb(2 * d[15].g - 1)),
                ua = ta ? (na = 0, Qb(ua, -9, 0.015)) : Qb(ua, wb(a / 3), 1),
                Ma && a > Ma && (Ma = 0, h4.innerHTML = ""),
                Vb(),
                bc(),
                fc.cbf(!0, !0, !0, !0),
                fc.c4s(16640),
                fc.u3a(T("j"), $b),
                fc.cbf(!0, !1, !0, !1),
                fc.uae(T("b"), !1, fb(gb().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa))),
                g(fc, 56, 1),
                fc.c4s(256),
                fc.cbf(!1, !0, !1, !0),
                fc.uae(T("b"), !1, fb(gb().translateSelf(-Ua, -Va, -Wa - 0.3))),
                g(fc, 56, 1),
                fc.f1s(),
                la = 0);
            E();
            Y.u3a(E("j"), $b);
            Y.b6o(36160, r);
            Y.v5y(0, 0, 2048, 2048);
            Y.ubh(E("g"), 4);
            Y.ubh(E("h"), 4);
            Y.uae(E("a"), !1, fb(e));
            u = Ia;
            D = Ja;
            let x = Ka;
            ea
              ? (gb().rotateSelf(0, 40 * Math.sin(Ea) - 80, -8),
                fb(h, $b, 25),
                fb(h, $b, 26),
                fb(h, $b, 27),
                gb(qa).invertSelf(),
                ob(3.6, 3.5),
                u = kb,
                D = lb,
                x = 5,
                gb(e, B).rotateSelf(20, 0).translateSelf(-u, -D, -x).rotateSelf(0, 99))
              : gb(e, B).rotateSelf(-Ra, -Ta).invertSelf().translateSelf(-u, -D, -x);
            J(54.7);
            g(Y, 57, na);
            ra(126);
            g(Y, 57, na);
            Y.b6o(36160, null);
            Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
            Y.c4s(16640);
            Y.ubh(E("g"), 0);
            Y.ubh(E("h"), 1);
            Y.ubu(E("k"), u, D, x);
            Y.uae(E("a"), !1, fb(qa));
            Y.uae(E("b"), !1, fb(B));
            Y.uae(E("i"), !1, A);
            g(Y, 57, na);
            R();
            Y.uae(R("b"), !1, fb(B.invertSelf()));
            Y.ubu(R("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, Ea);
            Y.d97(4, 3, 5123, 0);
          },
          v = new DOMMatrix(),
          B = new DOMMatrix(),
          A = new Float32Array(32),
          f = k,
          r = Y.c5w(),
          E = n(
            Y,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          T = n(
            fc,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          R = n(
            Y,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [J, ra] = pb(2, u => {
            const D = Y.c25();
            return Y.a4v(33984 + u),
              Y.b9j(3553, D),
              Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Y.t2z(3553, 10241, 9729),
              Y.t2z(3553, 10240, 9729),
              Y.t2z(3553, 34893, 515),
              Y.t2z(3553, 34892, 34894),
              Y.t2z(3553, 10243, 33071),
              Y.t2z(3553, 10242, 33071),
              x => {
                let G = 0, O = 0, aa = 0, M = 1 / 0, S = 1 / 0, Z = 1 / 0, U = -1 / 0, ia = -1 / 0, I = -1 / 0;
                Y.fas(36160, 36096, 3553, D, 0);
                Y.c4s(256);
                gb().scale3dSelf(x *= 1.1).multiplySelf(gb(pa[u], v).multiplySelf(B).invertSelf());
                for (let V = 0; 8 > V; ++V) {
                  const Ya = l[V];
                  ob(4 & V ? 1 : -1, 2 & V ? 1 : -1, 1 & V ? 1 : -1);
                  G -= Ya.x = (0 | kb) / (x * nb);
                  O -= Ya.y = (0 | lb) / (x * nb);
                  aa -= Ya.z = (0 | mb) / (x * nb);
                }
                gb().rotateSelf(298, 139).translateSelf(G / 8, O / 8, aa / 8);
                for (x = 0; 8 > x; ++x) {
                  const { x: V, y: Ya, z: Ib } = l[x];
                  ob(V, Ya, Ib);
                  U = ub(U, kb);
                  ia = ub(ia, lb);
                  I = ub(I, mb);
                  M = tb(M, kb);
                  S = tb(S, lb);
                  Z = tb(Z, mb);
                }
                x = 10 + u;
                Z *= 0 > Z ? x : 1 / x;
                I *= 0 < I ? x : 1 / x;
                Y.uae(
                  E("b"),
                  !1,
                  fb(
                    gb(e, v).scaleSelf(2 / (U - M), 2 / (ia - S), 2 / (Z - I)).translateSelf(
                      (U + M) / -2,
                      (ia + S) / -2,
                      (Z + I) / 2,
                    ).multiplySelf(h),
                    A,
                    u,
                  ),
                  16 * u,
                  16,
                );
              };
          });
        Y.a4v(33986);
        Y.b9j(3553, Y.c25());
        Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f);
        Y.t2z(3553, 10241, 9987);
        Y.t2z(3553, 10240, 9729);
        Y.gbn(3553);
        Y.b6o(36160, r);
        Y.d45([0]);
        Y.r9l(0);
        E();
        Y.ubh(E("q"), 2);
        R();
        Y.ubh(R("q"), 2);
        Y.c5t(0, 0, 0, 1);
        Y.d4n(515);
        Y.e8z(2929);
        Y.e8z(2884);
        fc.e8z(2929);
        fc.e8z(2884);
        fc.v5y(0, 0, 128, 128);
        T();
        fc.uae(T("a"), !1, fb(Ub(1e-4, 2, 1.2, 0.4)));
        let ca, ja, X, W, y, L, p, F, N, C, da, ma, ka, oa, jb, Sa, wa = 0, xa = 1, ha = 2, hb = 15;
        const Ha = (u, D, x, G) => zb(u, D, xa || (wb(sb(D - u) ** 0.5 - x) + 1 / 7) * Pb(1.5 * G)),
          Oa = () => gb((ha ? d[La] : Xa[28 !== wa ? wa : 0]).l),
          ib = u => {
            1 < ha ? (gb(d[La].l).multiplySelf(d[La].C), ob(0, 0.9 < ua ? 15 : 1, -2.4)) : (Oa(), ob(oa, jb, Sa));
            u && (y = (kb - Ua) / Da, L = (mb - Wa) / Da);
            Ua = kb;
            Va = lb;
            Wa = mb;
          },
          Pa = NO_INLINE(() => {
            var u = 0, D = 0, x = 0, G = 0, O = 0, aa = 0, M = -1;
            for (var S = 0; 36 > S; ++S) {
              for (let ia = 96, I = 512 * S; 416 > ia; ia += 4) {
                for (var Z = 0; 2 > Z; ++Z) {
                  var U = ec[I + ia + Z];
                  const V = ec[I + ia + Z + 2];
                  U > G && (G = U);
                  U + V && (0 > M || M === S) && (M = S, V === C ? ++u : D && D !== V || (D = V, ++x));
                }
              }
            }
            C = 0 > M ? 0 : x > 2 * u ? D : C;
            for (u = 36; 128 > u; ++u) {
              S =
                M =
                x =
                D =
                  0;
              for (let ia = 0, I = 512 * u; 128 > ia; ++ia) {
                Z = I + 4 * ia,
                  U = ec[Z],
                  64 > ia ? U > D && (D = U) : U > x && (x = U),
                  (U = ec[2 + Z]) > M && (M = U),
                  U = ec[1 + Z],
                  64 < ia ? U > D && (D = U) : U > x && (x = U),
                  (U = ec[3 + Z]) > S && (S = U);
              }
              (x -= D) * x > O * O && (O = x);
              (S -= M) * S > aa * aa && (aa = S);
            }
            F = wb(1 - 0.01 * ub(sb(O *= 0.7), sb(aa)), 0.3);
            O /= 255;
            G /= 255;
            aa /= 255;
            Oa().invertSelf();
            ob(O, G, aa, 0);
            oa += kb;
            jb += G;
            Sa += mb;
            ib();
          });
        Ba = () => {
          ib(C);
          fc.r9r(0, 0, 128, 128, 6408, 5121, ec);
          Pa();
          !ha && C === wa
            || (wa = C, Oa().invertSelf(), ob(Ua, Va, Wa), oa = kb, jb = lb, Sa = mb, ha = ha && (C ? 0 : 1));
          (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (ha = 2);
          1 === C && (d[15].j = -15 > Ua && 0 > Wa ? 1 : 0);
          W = Qb(W, Ca * (30 < C && 35 > C), 2);
          da = Ha(da, Ua, 0.5, 1);
          ma = Ha(ma, N = zb(Qb(N, Va, 2), Va, ha || 8 * sb(N - Va)), 2, 1);
          ka = Ha(ka, Wa, 0.5, 1);
          na
            ? (u = ha + Pb(18), Ia = zb(Ia, Ua, u), Ka = zb(Ka, Wa, u), Ja = zb(Ja, 1.6 + N, u), Ta = xb(Ta))
            : (Ia = Ha(Ia, da, 1, 2 + W),
              Ka = Ha(Ka, ka + -18 + 5 * W, 1, 2 + W),
              Ja = Ha(Ja, ub(ma + wb((-60 - Wa) / 8, 0, 20) + 13 + 9 * W, 6), 4, 2),
              u = tb(-6, -sb(ka - Ka)),
              D = da - Ia,
              Ta = yb(Ta, 90 - xb(Math.atan2(u, D) / Na), xa + Pb(10)),
              Ra = yb(Ra, 90 - Math.atan2(Ab(u, D), Ja - ma) / Na, xa + Pb(10)));
          Ra = wb(Ra, -87, 87);
          xa = 0;
          var u = wb(Fa, -1), D = wb(Ga, -1), x = vb(Ab(u, D) ** 0.5, 0.1), G = Math.atan2(u, D);
          x && (ca = 90 - G / Na);
          X = Qb(X, x, 10);
          Q(Ua, 0.06 * F * X * Math.cos(18.2 * a) + N, Wa).rotateSelf(0, ja = yb(ja, ca, Pb(8)));
          for (var O = 0; 2 > O; ++O) {
            const aa = 9.1 * a - Math.PI * O;
            gb(Xa[53].l, Q(0)).translateSelf(0, X * wb(0.45 * Math.sin(aa - Math.PI / 2))).rotateSelf(
              X * Math.sin(aa) * 0.25 / Na,
              0,
            );
          }
          hb = C ? 5 : Qb(hb, ha ? 13 : 19 - 2 * tb(0, Va + 10), 2.2);
          y = C || ha ? 0 : Qb(y, 0, 3);
          L = C || ha ? 0 : Qb(L, 0, 3);
          u = (p = ha ? 0 : Qb(p, C ? 7 * wb(2 * x) * F : 0, C ? 9 : 1)) * x * sb(u) * Math.sin(G);
          D = p * x * sb(D) * Math.cos(G);
          G = na ? (180 + Ta) * Na : 0;
          x = Da * (y + (Math.cos(G) * D - Math.sin(G) * u));
          O = Da * -hb;
          u = Da * (L + (Math.sin(G) * D + Math.cos(G) * u));
          Oa().invertSelf();
          ob(x, O, u, 0);
          oa += kb;
          jb += O;
          Sa += mb;
          ib();
        };
        Vb();
        requestAnimationFrame(q);
      }
    },
    k = new Image();
  k.onload = b;
  k.src = Qa;
  Tb(() => {
    Rb(() => {
      let f = 0;
      const r = [],
        E = [],
        T = [],
        R = [],
        J = new Int32Array(8),
        ra = new Map(),
        ca = new Int32Array(J.buffer, 0, 5),
        ja = new Float32Array(J.buffer);
      Xa.map((y, L) => {
        let p;
        const F = N => {
          let { x: C, y: da, z: ma } = p[N],
            ka = (ja[0] = C, ja[1] = da, ja[2] = ma, N = "" + (p.A ? ca : J), ra.get(N));
          return void 0 !== ka
            ? (C = 3 * ka, R[C] = (R[C++] + J[5]) / 2, R[C] = (R[C++] + J[6]) / 2, R[C] = (R[C] + J[7]) / 2)
            : (ra.set(N, ka = ra.size), E.push(C, da, ma, ja[3]), T.push(J[4]), R.push(J[5], J[6], J[7])),
            ka;
        };
        for (p of (ja[3] = 55 < L ? -28 : L, y.i)) {
          const { x: N, y: C, z: da } = Eb(p);
          J[4] = 0 | p.s;
          J[5] = 32767 * N;
          J[6] = 32767 * C;
          J[7] = 32767 * da;
          for (let ma = 2, ka = F(0), oa = F(1); p.length > ma; ++ma) {
            r.push(ka, oa, oa = F(ma));
          }
        }
        y.i = 0;
        y.B = f;
        y.D = f = r.length;
      });
      [Y, fc].map(y => {
        y.b11(34962, y.c1b());
        y.b2v(34962, new Float32Array(E), 35044);
        y.v7s(0, 4, 5126, !1, 0, 0);
        y.b11(34962, y.c1b());
        y.b2v(34962, new Int16Array(R), 35044);
        y.v7s(1, 3, 5122, !0, 0, 0);
        y.b11(34962, y.c1b());
        y.b2v(34962, new Uint32Array(T), 35044);
        y.v7s(2, 4, 5121, !0, 0, 0);
        y.b11(34963, y.c1b());
        y.b2v(34963, new Uint16Array(r), 35044);
        y.e3x(0);
        y.e3x(1);
        y.e3x(2);
      });
      let X = [], W = [];
      try {
        const [y, L, p, F, N] = JSON.parse(localStorage["Dante-22"]);
        X = y;
        W = L;
        La = p;
        va = F;
        a = N;
      } catch {
      }
      d.map((y, L) => y.h = y.g = y.j = 14 !== L && X[L] ? 1 : 0);
      ab.map((y, L) => y.j = W[L] ? 1 : 0);
      Yb();
      ua = sa || 14 !== La ? 1 : 0;
      Rb(b);
    });
    var l = [-110, -100, -92, -82, -106, -97, -88];
    const n = f => m(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f),
      g = f => {
        d.push({ l: ya, C: f });
        K(w(5), f.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), z(0.4, 0.5, 0.5));
        K(w(5), f.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), z(0.4, 0.5, 0.5));
        K(w().slice(0, -1), f.translate(0, -0.4).scale(0.5, 0.1, 0.5), z(0.5, 0.5, 0.4));
      },
      q = f =>
        H(
          t(w().slice(0, -1), m(0, -f / 2).scale(6, f - 1, 2.2)),
          t(w().slice(0, -1), m(0, -f / 2 - 4).scale(4, f - 5, 4)),
          t(w(28, 1), m(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      v = H(
        t(w(), m(0, -0.5, 1).scale(1.15, 1.2, 6.5), z(0.25, 0.25, 0.35, 0.3)),
        H(
          t(w(3), m(0, 0, -5.5).scale(3, 2), z(0.6, 0.3, 0.4, 0.3)),
          t(w(), m(0, 0, -3.65).scale(2.5, 3), z(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => t(w(), m(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), z(0.7, 0.2, 0, 0.3))),
      ),
      B = [
        t(w(), m(0, -3).scale(11, 1.4, 3), z(0.9, 0.9, 0.9, 0.2)),
        t(w(), m(0, -2.2).scale(7.7, 0.5, 4), z(0.5, 0.5, 0.5, 0.2)),
        pb(12, f => t(w(), e.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), z(0.6, 0.5, 0.3, 0.2))).flat(),
        t(
          H(
            t(w(6), e.rotate(90).scale(6, 8, 6)),
            t(w(4, 0, 0.01), m(0, 6).scale(12, 2, 0.75).rotate(0, 45)),
            t(w(6), e.rotate(90).scale(5, 12, 5)),
            ...[-5, 0, 5].map(f => t(w(5), m(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
          ),
          e,
          z(0.3, 0.6, 0.6, 0.3),
        ),
      ].flat(),
      A = pb(11, f => Cb(rb(Bb(16), n(f), z(1, 1, 0.8, 0.2)).reverse(), rb(Bb(16), n(f + 1), z(1, 1, 0.8, 0.2)), 1))
        .flat();
    P();
    K([bb.slice(1)], m(-2).scale3d(3).rotate(90, 0));
    P();
    g(m(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, r) => {
      K(w(), m(0, 0, r ? 22 : -23).scale(3, 1, 8), z(0.9, 0.9, 0.9, 0.2));
      K(w(), m(0, 6.3, f).scale(4, 0.3, 1), z(0.3, 0.3, 0.3, 0.4));
      K(w().slice(0, -1), m(0, 1, f).scale(3, 0.2, 0.35), z(0.5, 0.5, 0.5, 0.3));
    });
    K(w(), m(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), z(0.8, 0.8, 0.8, 0.2));
    K(w(), m(3, 1.5, -20).scale(0.5, 2, 5), z(0.7, 0.7, 0.7, 0.2));
    K(w(5), m(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), z(0.6, 0.3, 0.3, 0.4));
    K(w(), m(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), z(0.75, 0.75, 0.75, 0.2));
    K(H(
      Ob(
        H(
          t(w(6, 0, 0, 0.3), m(0, -0.92).scale(13, 2, 13), z(0.8, 0.8, 0.8, 0.2)),
          t(w(), e.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), z(0.5, 0.5, 0.5, 0.5)),
        ),
        t(
          w(),
          e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          z(0.8, 0.2, 0.2, 0.5),
        ),
        t(w(6), m(0, -8).scale(9, 8, 7), z(0.2, 0.1, 0.4, 0.5)),
        t(w(6, 0, 0, 0.3), m(8, -4, -4).scale(14, 2, 13), z(0.7, 0.7, 0.7, 0.2)),
      ),
      t(w(6), m(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), z(0.5, 0.5, 0.5, 0.5)),
      t(w(5, 0, 1.5), m(0, 1).scale(4.5, 0.3, 4.5), z(0.7, 0.5, 0.9, 0.2)),
      t(w(5), e.scale(5, 30, 5), z(0.4, 0.2, 0.6, 0.5)),
    ));
    g(m(15.8, -2, 3.8));
    K(w(), m(-18.65, -3, 55).scale(2.45, 1.4, 2.7), z(0.9, 0.9, 0.9, 0.2));
    g(m(-55, -1.1, 46).rotate(0, 90));
    K(w(7), m(-57, -2.6, 46).scale(4, 1, 4), z(0.8, 0.8, 0.8, 0.3));
    K(w(6), m(-61.3, -2.4, 49).scale(3, 1, 5), z(0.4, 0.6, 0.6, 0.3));
    K(B, m(-53, 0, 55));
    K(w(), m(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), z(0.7, 0.7, 0.7, 0.2));
    K(w(3, 0, -0.5), m(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), z(0.8, 0.8, 0.8, 0.2));
    K(H(
      t(w(), m(-100, 1, 63).scale(7.5, 4), z(0.5, 0.5, 0.5, 0.4)),
      t(w(), m(-100, 0, 63).scale(2, 2, 4), z(0.5, 0.5, 0.5, 0.4)),
      t(w(20, 1), m(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), z(0.5, 0.5, 0.5, 0.4)),
    ));
    K(H(
      Ob(
        t(w(), m(-100, -2.6, 70).scale(3, 1.1, 7), z(0.8, 0.8, 0.8, 0.2)),
        t(w(), m(-100, -2.4, 55).scale(8, 0.9, 8), z(0.8, 0.8, 0.8, 0.2)),
        t(w(), m(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), z(0.8, 0.8, 0.8, 0.2)),
        t(w(6), m(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), z(0.6, 0.6, 0.6, 0.3)),
        t(w(), m(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), z(0.8, 0.8, 0.8, 0.2)),
        t(w(), m(-100, 0.42, 92).scale(3, 1.1, 4.1), z(0.8, 0.8, 0.8, 0.2)),
        t(w(), m(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), z(0.8, 0.8, 0.8, 0.2)),
      ),
      t(w(8), m(-100, -1, 55).scale(7, 0.9, 7), z(0.3, 0.3, 0.3, 0.4)),
      t(w(8), m(-100, -2, 55).scale(4, 0.3, 4), z(0.4, 0.4, 0.4, 0.5)),
      t(w(8, 0, -3.1), m(-100, -3, 55).scale(0.4, 1, 0.4), z(0.4, 0.4, 0.4, 0.5)),
    ));
    bb.map(({ x: f, z: r }) => {
      K(w(6), m(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), z(0.6, 0.3, 0.3, 0.4));
      K(w(6), m(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), z(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(E => K(w(6), m(7 * f - 100, E, 7 * r + 55).scale(1.3, 0.5, 1.3), z(0.4, 0.2, 0.2, 0.8)));
      [1.5, 8].map(E =>
        K(w(15, 1), m(9 * f - 38.9, E - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), z(0.6, 0.6, 0.6, 0.3))
      );
      K(w(14, 1).slice(0, -2), m(9 * f - 38.9, -18, 11 * r + 17).scale(1, 14.2), z(0.25, 0.25, 0.25, 1));
    });
    pb(7, f => {
      K(
        w((23 * f + 1) % 5 + 5, 0, 0.5),
        m(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3),
        z(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    K(w(), m(-87, -9.5, 24).scale(7, 1, 3), z(0.4, 0.5, 0.6, 0.4));
    K(w(4), m(-86, -9.2, 27).scale(5, 1, 5), z(0.5, 0.6, 0.7, 0.3));
    K(w(12, 1), m(-86, -9, 31).scale(1.5, 1, 1.5), z(0.3, 0.3, 0.4, 0.1));
    g(m(-86, -7.5, 31));
    K(w(5), m(-38.9, -11.1, 10).scale(2, 1.2, 2), z(0.2, 0.4, 0.7, 0.3));
    K(H(
      Ob(
        t(w(), m(-38.9, -11.3, 17).scale(11, 1, 13), z(0.3, 0.4, 0.6, 0.3)),
        t(w(5), m(-38.9, -11.1, 17).scale(9, 1, 9), z(0, 0.2, 0.3, 0.5)),
      ),
      t(w(5), m(-38.9, -11.1, 17).scale3d(5.4), z(0, 0.2, 0.3, 0.5)),
    ));
    g(m(-38.9, -9.4, 10));
    K(
      H(
        Ob(
          t(w(6), m(0, 0, -18).scale(15, 1.3, 15), z(0.7, 0.7, 0.7, 0.3)),
          t(w(5), e.scale(4.5, 1.2, 9), z(0.45, 0.4, 0.6, 0.3)),
        ),
        ...pb(6, f =>
          pb(6, r =>
            t(
              w(6),
              m(4.6 * r - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * r) - 32).scale3d(2),
              z(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      m(-38.9, -11.3, -1),
    );
    g(m(-84, -0.7, 85).rotate(0, 45));
    K(w(5), m(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), z(0.8, 0.1, 0.25, 0.4));
    g(m(-116, -1.4, -18).rotate(0, 180));
    K(
      H(t(w(), m(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...l.map(f => t(w(), m(f, 0.05, -3).scale(1.35, 2, 9)))),
      e,
      z(0.5, 0.5, 0.6, 0.2),
    );
    K(w(), m(-96.5, 1, -2).scale(19, 0.3, 0.3), z(0.5, 0.5, 0.6, 0.2));
    K(w(6), m(-116, -2.6, -16.5).scale(3.2, 0.8, 3), z(0.6, 0.5, 0.7, 0.2));
    K(w(), m(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), z(0.8, 0.8, 0.8, 0.2));
    K(w().slice(0, -1), m(-115.5, -17, -12).scale(0.5, 15, 2.2), z(0.6, 0.6, 0.6, 0.3));
    K(w(8).slice(0, -2), m(-114, -17, -2).scale(2, 15, 2), z(0.6, 0.6, 0.6, 0.3));
    K(w(8).slice(0, -2), m(-79, -17, -2).scale(2, 15, 2), z(1, 1, 1, 0.3));
    K(w().slice(0, -1), m(-77, -17, -50.5).scale(2.2, 15, 0.5), z(0.6, 0.6, 0.6, 0.3));
    K(H(
      t(w(12).slice(0, -1), m(-77, -14.5, -12).scale(4, 17.5, 4), z(0.7, 0.7, 0.7, 0.2)),
      t(w(12), m(-77, 3.1, -12).scale(3, 5, 3), z(0.4, 0.5, 0.6, 0.2)),
      t(w(), m(-79, 0.1, -12).scale(3.5, 2, 1.3), z(0.4, 0.5, 0.6, 0.2)),
      t(w(), m(-77, 0.1, -14).scale(1.5, 2, 2), z(0.4, 0.5, 0.6, 0.2)),
    ));
    K(H(
      t(w(), m(-93, -5.8, -40).scale(9, 1, 5), z(0.8, 0.8, 0.8, 0.1)),
      t(w(9), m(-98, -5.8, -40).scale(3, 8, 3), z(0.7, 0.7, 0.7, 0.2)),
    ));
    K(w(), m(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), z(0.6, 0.6, 0.6, 0.3));
    K(w(9).slice(0, -1), m(-98, -18.4, -40).scale(2.5, 13.5, 2.5), z(0.5, 0.5, 0.5, 0.3));
    g(m(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, r) => {
      K(
        H(
          t(w(), m(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), z(0.5, 0.5, 0.5, 0.4)),
          t(w(5), m(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), z(0.6, 0.24, 0.2, 0.5)),
          t(w(), e.scale(3, 3, 10), z(0.6, 0.24, 0.2, 0.5)),
          t(w(5), m(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), z(0.6, 0.24, 0.2, 0.5)),
          t(w(32, 1), m(0, 3, -5).scale(3, 4, 10).rotate(90, 0), z(0.6, 0.24, 0.2, 0.5)),
        ),
        m(f - 100, 0.7, 97),
      );
      K(w(12, 1), m(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), z(0.6, 0.24, 0.2, 0.5));
      [7.2, 1.5].map(E => K(w(15, 1), m(-7.5 * f - 100, E + 0.7, 96).scale(1.1, 0.5, 1.1), z(0.5, 0.24, 0.2, 0.4)));
      K(A, m(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      K(A, m(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      pb(5, E => K(A, m(18.5 * (r - 0.5), 0, 4.8 * E - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2)));
    });
    K(H(
      t(w(), m(-82.07, 0.8, 106).scale(11, 0.9, 2.2), z(0.7, 0.7, 0.7, 0.1)),
      t(w(45, 1), m(-81, 0.7, 106).scale3d(7.7), z(0.7, 0.7, 0.7, 0.1)),
    ));
    K(w(), m(-50.7, 1, 99).scale(2, 0.65, 1), z(0.7, 0.7, 0.7, 0.2));
    K(w(), m(-58, 1, 106).scale(2, 0.65, 2), z(0.7, 0.7, 0.7, 0.2));
    K(w(), m(-34.2, 0.4, 91).scale(3, 1, 3), z(0.7, 0.7, 0.7, 0.3));
    K(w(), m(-42, 0.4, 91).scale(5, 1, 2.5), z(0.7, 0.7, 0.7, 0.3));
    K(w(5), m(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), z(0.2, 0.5, 0.5, 0.6));
    g(m(-34, 2.7, 96).rotate(-12, 0));
    K(H(
      Ob(
        t(w(), m(-101.5, 0.7, 93.5).scale(10.5, 1, 2), z(0.7, 0.7, 0.7, 0.2)),
        t(w(6, 0, 0, 0.6), m(-100, 0.7, 105.5).scale(8, 1, 11), z(0.7, 0.7, 0.7, 0.2)),
      ),
      t(w(5), m(-100, 0.7, 113).scale(4, 3, 4), z(0.7, 0.7, 0.7, 0.2)),
    ));
    pb(3, f => {
      K(q(16), m(-77, -9, -12 * f - 20).rotate(0, 90), z(0.6, 0.6, 0.6, 0.3));
      K(q(16), m(12 * f - 109, -9, -12), z(0.6, 0.6, 0.6, 0.3));
      K(
        q(24.7 - 0.7 * (1 & f)),
        m(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
        1 & f ? z(0.5, 0.5, 0.5, 0.3) : z(0.35, 0.35, 0.35, 0.5),
      );
    });
    K(H(
      Ob(
        t(w(), m(0, 16, 111).scale(3, 1, 3.8), z(0.5, 0.3, 0.3, 0.4)),
        t(w(6, 0, 0, 0.3), m(0, -0.92, 95).scale(14, 2, 14), z(0.8, 0.8, 0.8, 0.2)),
        t(w(), m(0, 16, 110.5).scale(12, 1, 3), z(0.5, 0.3, 0.3, 0.4)),
      ),
      t(w(5), m(0, 0, 95).scale3d(6), z(0.3, 0.3, 0.3, 0.5)),
      t(w(5), m(0, 16, 103.5).scale(5.5, 5, 5.5), z(0.5, 0.3, 0.3, 0.4)),
    ));
    g(m(0, 1.7, 82).rotate(0, 180));
    K(w(5).slice(0, -1), m(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), z(0.5, 0.3, 0.3, 0.4));
    K(w(6), m(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), z(0.5, 0.6, 0.7, 0.3));
    K(w(), m(0, 16, 127.8).scale(1.5, 1, 0.7), z(0.5, 0.6, 0.7, 0.3));
    K(w(7), m(0, 15.1, 133).scale(5, 2, 5), z(0.4, 0.5, 0.6, 0.4));
    ac(m(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    ac(m(0, 2.8), [5, 10, 3], [-5, 10, 3], ...Bb(18).map(({ x: f, z: r }) => [7 * f, 10 * r, 4.5 - 2 * sb(f)]));
    ac(m(0, 3, 95), ...Bb(9).map(({ x: f, z: r }) => [9 * f, 9 * r, 4]));
    ac(m(0, 19, 134), [0, 0, 3.5]);
    ac(m(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    ac(m(-89, 0.2, 80), [0, 0, 6]);
    ac(m(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    ac(m(-115, 0.2, -12), [0, 0, 3.5]);
    ac(m(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    P();
    K(w(5), m(0, -0.2).scale(5, 1, 5), z(0.6, 0.65, 0.7, 0.3));
    g(m(0, 1.2));
    pb(2, () => {
      P();
      bb.map(({ x: f, z: r }) => {
        K(w(11, 1).slice(0, -2), m(4 * f, 4, 4 * r).scale(0.8, 3, 0.8), z(0.5, 0.3, 0.7, 0.6));
        K(w(), m(4 * f, 7, 4 * r).scale(1, 0.3), z(0.5, 0.5, 0.5, 0.3));
      });
      K(H(
        t(w().slice(0, -1), e.scale(5, 1, 5), z(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(f => t(w(25, 1), m(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), z(0.8, 0.8, 0.8, 0.3))),
      ));
      K(w(), m(0, -3).scale(8, 2, 8), z(0.4, 0.4, 0.4, 0.3));
    });
    P();
    K(H(
      Ob(
        t(w(), e.scale(1.5, 1, 5), z(0.9, 0.9, 0.9, 0.2)),
        t(w(), m(0, -2).scale(2, 3.2, 1.9), z(0.3, 0.8, 0.5, 0.5)),
        t(w(6), e.scale(4, 1, 5), z(0.9, 0.9, 0.9, 0.2)),
        t(w(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), z(0.9, 0.9, 0.9, 0.2)),
      ),
      t(w(), e.scale(1.3, 10, 1.3), z(0.2, 0.7, 0.4, 0.6)),
    ));
    ac(m(0, 2.8), [0, 0, 4.5]);
    P();
    K(w(3), m(-23, -1.7, 55.8).scale(5, 0.7, 8.3), z(0.3, 0.6, 0.6, 0.2));
    K(w(8), m(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), z(0.8, 0.8, 0.8, 0.2));
    K(w(), m(-23, -2.2, 62).scale(3, 1, 4), z(0.5, 0.5, 0.5, 0.3));
    K(w(), m(-23, -3, 55).scale(5.2, 1.7, 3), z(0.5, 0.5, 0.5, 0.3));
    g(m(-23, -0.5, 66.5));
    P();
    K(w(), m(-22.55, -3, 55).scale(1.45, 1.4, 2.7), z(0.7, 0.7, 0.7, 0.2));
    K(H(t(w(), e.scale(3, 1.4, 2.7)), t(w(), e.scale(1.2, 8, 1.2))), m(-33, -3, 55), z(0.7, 0.7, 0.7, 0.2));
    P();
    K(H(t(w(), e.scale(3, 1.4, 2.7)), t(w(), e.scale(1, 3))), m(-27, -3, 55), z(0.9, 0.9, 0.9, 0.2));
    K(w(), m(-39, -3, 55).scale(3, 1.4, 2.7), z(0.9, 0.9, 0.9, 0.2));
    P();
    K(w(6), m(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), z(0.7, 0.7, 0.7, 0.4));
    P();
    [0, 12, 24].map(f =>
      K(w(), m(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), z(0.2, 0.5, 0.6, 0.2))
    );
    P();
    [6, 18].map(f =>
      K(w(), m(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), z(0.1, 0.4, 0.5, 0.2))
    );
    P();
    K(w(5), m(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), z(0.3, 0.3, 0.5, 0.5));
    K(w(5).slice(0, -1), m(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), z(0.6, 0.3, 0.5, 0.5));
    K(
      H(
        t(w(5), m(0, 2).scale(5, 7, 5).skewY(8)),
        t(w(5), m(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
        t(w(), e.scale(2, 8, 3)),
      ),
      m(-38.9, -11.3, 17),
      z(0.2, 0.4, 0.5, 0.5),
    );
    ac(m(-39.1, -0.6, 17).rotate(11), ...Bb(15).map(({ x: f, z: r }) => [3 * f, 3 * r, 1.2]));
    l.map((f, r) => {
      r % 2 || 6 <= r || P();
      K(v, m(f, 1.9, -12));
    });
    pb(4, f => {
      P();
      K(
        w(6),
        m(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        z(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [z(0.1, 0.55, 0.45, 0.2), z(0.2, 0.5, 0.5, 0.3), z(0.3, 0.45, 0.55, 0.4)].map((f, r) => {
      P();
      K(w(), m(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
      2 === r && K(w(), m(-29.1, 0.4, 91).scale(2.1, 1, 3), z(0.7, 0.7, 0.7, 0.3));
      1 === r && K(w(), m(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), z(0.6, 0.6, 0.7, 0.3));
    });
    P();
    K(w(5), e.scale(5, 1.1, 5), z(0.5, 0.3, 0.3, 0.4));
    K(w(5), e.scale(5.5, 0.9, 5.5), z(0.25, 0.25, 0.25, 0.4));
    g(m(0, 1.5, -1).rotate(0, 180));
    pb(4, f => {
      P();
      pb(
        7,
        r =>
          K(t(
            w(8, 1).slice(0, -1),
            m((2 < f ? 3.5 : 4) * (r / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2),
            z(0.3, 0.3, 0.38),
          )),
      );
    });
    P();
    K(B);
    P();
    K(w(5).slice(0, -1), m(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), z(0.5, 0.5, 0.5, 0.5));
    K(w(10).slice(0, -1), m(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), z(0.3, 0.8, 0.7, 0.3));
    K(w(15, 1), m(-7.5).rotate(0, 90).scale(3, 2.3, 3), z(0.4, 0.4, 0.4, 0.3));
    g(m(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => K(A, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    K(H(t(w(10), e.scale(6, 2, 6), z(0.1, 0.6, 0.5, 0.3)), t(w(10), e.scale(3.3, 6, 3.3), z(0.1, 0.6, 0.5, 0.5))));
    ac(m(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    P();
    K(w(3), m(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), z(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      K(w(6), m(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), z(0.7, 0.7, 0.7, 0.4));
      K(w(), m(0, 6.2, f + 95).scale(0.5, 11, 0.5), z(0.5, 0.3, 0.3, 0.4));
    });
    P();
    K(w(5).slice(0, -1), m(0, 2).scale(1, 2), z(0.3, 0.3, 0.3, 0.2));
    K(w(8).slice(0, -1), m(0, 2).scale(3, 1.5, 3).rotate(0, 22), z(0.7, 0.7, 0.7, 0.1));
    K(H(
      t(w(28, 1), e.scale(7.5, 1, 7.5), z(0.45, 0.45, 0.45, 0.2)),
      t(w(), m(0, 0, -5.5).scale(1.5, 3, 2.7), z(0.45, 0.45, 0.45, 0.2)),
    ));
    ac(m(0, 3), ...Bb(14).map(({ x: f, z: r }) => [5.6 * f, 5.6 * r, 2]));
    P();
    [-1, 1].map(f => K(A, e.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90)));
    K(H(
      t(w(28, 1).slice(0, -1), m(0, 2).scale(7.5, 1, 7.5), z(0.35, 0, 0, 0.3)),
      t(w().slice(0, -1), m(0, 2).scale(9, 1.1, 2), z(0.3, 0, 0, 0.3)),
    ));
    K(w(5).slice(0, -1), m(0, 1).scale(1, 0.2), z(0.3, 0.3, 0.3, 0.2));
    K(w(28, 1), e.scale(7.5, 1, 7.5), z(0.45, 0.45, 0.45, 0.2));
    P();
    K(H(
      t(w(28, 1).slice(0, -1), m(0, 2).scale(7.5, 1, 7.5), z(0.35, 0, 0, 0.3)),
      t(w().slice(0, -1), m(0, 2, 7).scale(2, 1.1, 9), z(0.3, 0, 0, 0.3)),
      t(w().slice(0, -1), m(7, 2).scale(9, 1.1, 2), z(0.3, 0, 0, 0.3)),
    ));
    K(w(5).slice(0, -1), m(0, 1).scale(1, 0.2), z(0.3, 0.3, 0.3, 0.2));
    K(w(28, 1), e.scale(7.5, 1, 7.5), z(0.45, 0.45, 0.45, 0.2));
    P();
    K(H(
      t(w(28, 1).slice(0, -1), m(0, 2).scale(7.5, 1, 7.5), z(0.35, 0, 0, 0.3)),
      t(w().slice(0, -1), m(0, 2, -7).scale(2, 1.1, 9), z(0.3, 0, 0, 0.3)),
      t(w().slice(0, -1), m(7, 2).scale(9, 1.1, 2), z(0.3, 0, 0, 0.3)),
    ));
    K(w(5).slice(0, -1), m(0, 1).scale(1, 0.2), z(0.3, 0.3, 0.3, 0.2));
    K(w(28, 1), e.scale(7.5, 1, 7.5), z(0.45, 0.45, 0.45, 0.2));
    pb(2, () => {
      P();
      K(H(
        t(w(30, 1, 1.15, 1), m(0, -3).scale(3.5, 1, 3.5), z(0.7, 0.4, 0.25, 0.7)),
        t(w(), m(4, -1.2).scale3d(2), z(0.7, 0.4, 0.25, 0.3)),
        t(w(30, 1, 1.3, 1), m(0, -2.5).scale(2.6, 1, 3), z(0.7, 0.4, 0.25, 0.2)),
      ));
      g(m(0, -3, 4));
    });
    for (l = 0; 16 > l; ++l) {
      P(),
        K(w(9, 1), m(0, 0.8).scale(0.2, 0.3, 0.2), z(0.7, 1, 0.2)),
        K(w(6, 1).slice(0, -1), e.scale(0.12, 1.2, 0.12), z(0.3, 0.3, 0.5, 0.1)),
        K(w(3), m(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), z(0.2, 0.2, 0.2, 0.1));
    }
    P();
    K(Db(20), m(0, 1).scale3d(0.5), z(1, 0.3, 0.4));
    K(Db(30), e.scale(0.65, 0.8, 0.55), z(1, 0.3, 0.4));
    K(w(), m(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), z(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      K(A, e.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), z(1, 1, 0.8));
      K(
        t(H(w(15, 1), t(w(), m(0, 0, 1).scale(2, 2, 0.5))), e.rotate(-90, 0).scale(0.1, 0.05, 0.1), z(0.3, 0.3, 0.3)),
        m(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map(f => {
      P();
      K(w(20, 1), m(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), z(1, 0.3, 0.4));
    });
    P();
    K(w(6, 1).slice(0, -1), e.scale(0.77, 1, 0.77), z(1, 0.3, 0.5));
    P();
    K(
      Db(28, 22, (f, r, E) => {
        var T = r / 22, R = f * Math.PI * 2 / 28, J = Math.sin(T ** 0.6 * Math.PI / 2);
        f = T * T * Math.sin(f * Math.PI * 0.5) / 4;
        return 21 < r
          ? { x: E.A = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(R) * J,
            y: Math.cos(T * Math.PI) - T - f,
            z: Math.sin(R) * J + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      e.scale3d(0.7),
      z(1, 1, 1),
    );
    [-1, 1].map(f => K(Db(10), m(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});
