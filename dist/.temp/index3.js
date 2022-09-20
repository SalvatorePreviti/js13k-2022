let ba = !0,
  fa = 0,
  ia = 0,
  la = 0,
  a = 0,
  ma = 0,
  na = 0,
  oa = 0,
  sa = 0,
  ta = 0,
  ya = 0,
  za = 0,
  Ba = 0,
  Ca = 0,
  c = .066,
  Da,
  Ea,
  Fa,
  Ga,
  Ha,
  Ia,
  Ja,
  Ka;
const La = Math.PI / 180,
  d = new DOMMatrix(),
  Ma = (b, f) => f < b ? b : f,
  Na = b => 0 > b ? -b : b,
  Oa = b => 0 > b ? 0 : 1 < b ? 1 : b,
  Pa = (b, f) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > f ? 0 : 1 < f ? 1 : f)),
  Ua = b => Math.atan2(Math.sin(b *= La), Math.cos(b)) / La,
  Va = (b, f, g) => {
    b *= La;
    f = (f * La - b) % (2 * Math.PI);
    return (b + (2 * f % (2 * Math.PI) - f) * (0 > g ? 0 : 1 < g ? 1 : g)) / La;
  },
  Wa = (b, f, g, k) => {
    var m = f - b;
    b += Math.sign(f - b) * Ma(0, (0 > m ? -m : m) ** .9 - g) * k * 2;
    return b + (f - b) * Oa(k / 7);
  },
  Xa = (b, f) => Array.from(Array(b), (g, k) => f(k)),
  Ya = (b, f, g, k) => [b, 0, 0, 0, 0, f, 0, 0, 0, 0, (k + g) / (g - k), -1, 0, 0, 2 * k * g / (g - k), 0],
  Za = ({ x: b, y: f, z: g }, k) => b * k.x + f * k.y + g * k.z,
  $a = ({ x: b, y: f, z: g }) => {
    var k = h;
    return Math.hypot(b - k.x, f - k.y, g - k.z) || 0;
  },
  ab = b => {
    let f = 0, g = 0, k = 0, m, q = b.at(-1);
    for (m of b) {
      f += (q.y - m.y) * (q.z + m.z), g += (q.z - m.z) * (q.x + m.x), k += (q.x - m.x) * (q.y + m.y), q = m;
    }
    return m = Math.hypot(f, g, k), f /= m, g /= m, k /= m, { x: f, y: g, z: k, w: f * q.x + g * q.y + k * q.z };
  },
  bb = new Float32Array(16),
  cb = (
    {
      m11: b,
      m12: f,
      m13: g,
      m14: k,
      m21: m,
      m22: q,
      m23: D,
      m24: t,
      m31: y,
      m32: N,
      m33: v,
      m34: x,
      m41: w,
      m42: C,
      m43: P,
      m44: A,
    },
    e = bb,
    l = 0,
  ) => (l *= 16,
    e[l++] = b,
    e[l++] = f,
    e[l++] = g,
    e[l++] = k,
    e[l++] = m,
    e[l++] = q,
    e[l++] = D,
    e[l++] = t,
    e[l++] = y,
    e[l++] = N,
    e[l++] = v,
    e[l++] = x,
    e[l++] = w,
    e[l++] = C,
    e[l++] = P,
    e[l] = A,
    e);
var fb = -11, gb = 17, hb = -90, ib = 0, jb = 0;
const ob = (b, f, g) => (b.D = g, b.A = f, b),
  pb = (b, f, g = b.A) =>
    ob(
      b.map(k =>
        ((
          { x: m, y: q, z: D },
          t,
        ) => ({ x: m, y: q, z: D } = t.transformPoint({ x: m, y: q, z: D }), { x: m, y: q, z: D }))(k, f)
      ),
      g,
      b.D,
    ),
  n = (b, f, g) => b.map(k => pb(k, f, g)),
  qb = (b, f = 0) =>
    Xa(b, g => {
      const k = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: .01 > (0 > k ? -k : k) ? k : 0 > k ? k - f : k + f };
    }),
  rb = (b, f, g) =>
    b.map((k, m, { length: q }) => ob([k, f[q - m - 1], f[q - (m + 1) % q - 1], b[(m + 1) % q]], b.A, g)),
  p = (b, f, g = 0, k) => {
    k = b.length ? b : qb(b, k);
    b = pb(k, d.translate(0, 1).scale3d(0 < g ? g : 1));
    g = pb(k, d.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse();
    return [...rb(g, b, f), b, g];
  },
  sb = (
    b,
    f = b,
    g = (
      k,
      m,
    ) => (m *= Math.PI / f,
      { x: Math.cos(k *= 2 * Math.PI / b) * Math.sin(m), y: Math.cos(m), z: Math.sin(k) * Math.sin(m) }),
  ) => {
    const k = [];
    for (let m = 0; b > m; m++) {
      for (let q = 0; f > q; q++) {
        const D = ob([], 0, 1);
        k.push(D);
        D.push(g(m, q, D));
        q && D.push(g((m + 1) % b, q, D));
        f - 1 > q && D.push(g((m + 1) % b, q + 1 % f, D));
        D.push(g(m, q + 1 % f, D));
      }
    }
    return k;
  },
  tb = (b, f, g, k) => {
    let m = 0, q = 0, D = 0, t = 1 / 0, y = -1 / 0, N = 1 / 0, v = -1 / 0, x = 1 / 0, w = -1 / 0;
    const C = 1.1 * (g - f),
      P = (new DOMMatrix(Ya(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, f, g))).multiplySelf(b).invertSelf();
    b = Xa(8, A => {
      A = P.transformPoint({ x: 4 & A ? 1 : -1, y: 2 & A ? 1 : -1, z: 1 & A ? 1 : -1 });
      return m -= A.x = (C * A.x | 0) / C / A.w,
        q -= A.y = (C * A.y | 0) / C / A.w,
        D -= A.z = (C * A.z | 0) / C / A.w,
        A;
    });
    f = d.rotate(298, 139).translateSelf(m / 8, q / 8, D / 8);
    return pb(b, f).map(({ x: A, y: e, z: l }) => {
      t = t < A ? t : A;
      y = A < y ? y : A;
      N = N < e ? N : e;
      v = e < v ? v : e;
      x = x < l ? x : l;
      w = l < w ? w : l;
    }),
      x *= 0 > x ? k : 1 / k,
      w *= 0 < w ? k : 1 / k,
      d.scale(2 / (y - t), 2 / (v - N), 2 / (x - w)).translateSelf((y + t) / -2, (v + N) / -2, (x + w) / 2)
        .multiplySelf(f);
  },
  ub = [],
  r = (b, f = d, g) => Da.s.push(...n(b, f, g)),
  u = (b, f = 1) => {
    const g = Da;
    f = { l: d, F: ub.length, H: f, s: [] };
    return ub.push(Da = f), b(f), Da = g, f;
  },
  vb = (b, f = 35633) => {
    f = I.c6x(f);
    return I.s3c(f, b), I.c6a(f), f;
  },
  wb = (b, f) => {
    const g = {}, k = I.c1h();
    return I.abz(k, b), I.abz(k, vb(f, 35632)), I.l8l(k), m => m ? g[m] || (g[m] = I.gan(k, m)) : I.u7y(k);
  },
  xb = [[
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
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
  ], [
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
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
  ], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
    "9(((9(((9(((9(((9(((9(((9(((9",
    "9(((Q(((Q(((Q",
  ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
    "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
    "9(9(9(9(9(999(9(((((Q",
  ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
    "((((Q(((((((Q(((((((Q(((((((Q",
    "Q((Q((Q((Q((Q((Q((((Q",
  ]]],
  yb = b => Math.sin(b * Math.PI * 2),
  Ab = b => .5 > b % 1 ? 1 : -1,
  Bb = b => b % 1 * 2 - 1,
  Cb = b => {
    b = b % 1 * 4;
    return 2 > b ? b - 1 : 3 - b;
  },
  Hb = [],
  Kb = () => {
    Ea || !ba ? Ib.disconnect() : Ib.connect(Jb.destination);
    b4.innerHTML = "Music: " + ba;
  },
  Lb = (b = !1) => {
    if (Ea !== b) {
      Ea = b;
      Fa = 0;
      try {
        b ? document.exitPointerLock() : Ib.start();
      } catch {
      }
      document.body.className = b ? "l m" : "l";
      Kb();
    }
  },
  Mb = () => {
    let b = 0, f = 0, g = 0, k, m, q;
    const D = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Hb.length = fa = ia = 0;
      k = m = void 0;
      document.hidden && Lb(!0);
    };
    b1.onclick = () => Lb();
    b2.onclick = () => {
      Lb();
      Fa = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      ba = !ba;
      Kb();
    };
    b5.onclick = () => Lb(!0);
    onclick = () => {
      q = 1;
      Ea || (Hb[5] = !0, Fa && hC.requestPointerLock());
    };
    document.onvisibilitychange = onresize = onblur = D;
    onkeydown = onkeyup = ({ code: t, target: y, type: N, repeat: v }) => {
      v || ((y = !!N[5] && y === document.body) && ("Escape" === t || "Enter" === t && Ea)
        ? Ea && !q || Lb(!Ea)
        : (t = {
          KeyA: 0,
          ArrowLeft: 0,
          KeyW: 1,
          ArrowUp: 1,
          KeyD: 2,
          ArrowRight: 2,
          KeyS: 3,
          ArrowDown: 3,
          KeyE: 5,
          Space: 5,
          Enter: 5,
        }[t],
          5 === t ? y && (Hb[t] = 1) : Hb[t] = y));
    };
    onmousemove = ({ movementX: t, movementY: y }) => {
      Fa && (t || y) && (jb += .1 * t, ib += .1 * y);
    };
    hC.ontouchstart = t => {
      if (!Ea) {
        for (const y of t.changedTouches) {
          Fa && y.pageX > hC.clientWidth / 2 ? k || (k = y, b = jb, f = ib) : m = m || y;
        }
        g = la;
      }
    };
    hC.ontouchmove = ({ changedTouches: t }) => {
      if (!Ea) {
        for (const { pageX: y, pageY: N, identifier: v } of t) {
          k?.identifier === v && (jb = b + (y - k.pageX) / 3, ib = f + (N - k.pageY) / 3),
            m?.identifier === v
            && (fa = -(y - m.pageX) / 18,
              ia = -(N - m.pageY) / 18,
              fa = .35 > (0 > fa ? -fa : fa) ? 0 : .8 * fa,
              ia = .35 > (0 > ia ? -ia : ia) ? 0 : .8 * ia);
        }
      }
    };
    hC.ontouchend = t => {
      for (const y of t.changedTouches) {
        y.identifier === k?.identifier && (k = void 0), y.identifier === m?.identifier && (m = void 0, ia = fa = 0);
      }
      t.preventDefault();
      t = la - g;
      (!g || .02 < t && .4 > t) && (Hb[5] = !0);
    };
    oncontextmenu = () => !1;
    D();
    Lb(!0);
  },
  K = (b, f, g) => b + (f - b) * Oa(1 - Math.exp(-g * c)),
  Nb = ({ j: b }) => b,
  L = [],
  Ob = [],
  Pb = () => {
    var b = Pa(L[12].g, L[13].g);
    a > na && (h4.innerHTML = "", na = 0);
    var f = K(ya, 0, 1);
    ya = f + (Ua(ya + 60 * c) - f) * Oa(L[5].g - L[6].i);
    f = K(sa, 0, 5);
    sa = f + (Ua(sa + 56 * c) - f) * (0 > b ? 0 : 1 < b ? 1 : b);
    f = K(ta, 0, 4);
    ta = f + (Ua(ta + 48 * c) - f) * (0 > b ? 0 : 1 < b ? 1 : b);
    b = 2 * L[9].i - 1;
    Ca = K(Ca, L[9].i, .2 + .3 * (0 > b ? -b : b));
    Ba = K(Ba, za ? Ba + (-9 - Ba) * Oa(1.5 * c) : Oa(a / 3), 1);
    L[0].j && .7 < L[0].g && (13 > ma
      ? (za || (h4.innerHTML = "Not leaving now, there are souls to catch!", na = a + 3), L[0].j = 0)
      : za
        || (za || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", na = a + 1 / 0), za = 1));
    for (const g of ub) {
      g.h && (g.l = g.h(g));
    }
    for (const g of L) {
      g.h();
    }
    for (const g of Ob) {
      g.h();
    }
  },
  Qb = () => {
    ma = Ob.reduce((b, f) => b + f.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ma];
  },
  Rb = () => {
    Qb();
    localStorage.DanteSP22 = JSON.stringify([L.map(Nb), Ob.map(Nb), oa, a, Ca]);
  },
  Sb = () => {
    let b = 0, f;
    const g = [],
      k = [],
      m = [],
      q = [],
      D = new Map(),
      t = new Int32Array(8),
      y = x => {
        let { x: w, y: C, z: P } = f[x];
        v[0] = w;
        v[1] = C;
        v[2] = P;
        x = "" + (f.D ? N : t);
        let A = D.get(x);
        return void 0 !== A
          ? (w = 3 * A, q[w] = (q[w++] + t[5]) / 2, q[w] = (q[w++] + t[6]) / 2, q[w] = (q[w] + t[7]) / 2)
          : (D.set(x, A = D.size), k.push(w, C, P, v[3]), m.push(t[4]), q.push(t[5], t[6], t[7])),
          A;
      },
      N = new Int32Array(t.buffer, 0, 5),
      v = new Float32Array(t.buffer);
    for (const x of ub) {
      for (f of (v[3] = x.H ? x.F : 0, x.s)) {
        const { x: w, y: C, z: P } = ab(f);
        t[4] = 0 | f.A;
        t[5] = 32767 * w;
        t[6] = 32767 * C;
        t[7] = 32767 * P;
        for (let A = 2, e = y(0), l = y(1); f.length > A; ++A) {
          g.push(e, l, l = y(A));
        }
      }
      x.s = null;
      x.v = b;
      x.G = b = g.length;
    }
    I.b11(34963, I.c1b());
    I.b2v(34963, new Uint16Array(g), 35044);
    I.b11(34962, I.c1b());
    I.b2v(34962, new Float32Array(k), 35044);
    I.v7s(0, 4, 5126, !1, 0, 0);
    I.b11(34962, I.c1b());
    I.b2v(34962, new Int16Array(q), 35044);
    I.v7s(1, 3, 5122, !0, 0, 0);
    I.b11(34962, I.c1b());
    I.b2v(34962, new Uint32Array(m), 35044);
    I.v7s(2, 4, 5121, !0, 0, 0);
    I.e3x(0);
    I.e3x(1);
    I.e3x(2);
  },
  Tb = (b, f) => {
    var g, k, m, q = f.C;
    for (var D = 0; q.length > D; ++D) {
      if (-0.00008 > (m = Za(b, q[D]) - b.w) ? k = f : 8e-5 < m && (g = f), k && g) {
        k = [];
        m = [];
        q = f.C;
        D = f.B;
        let t = q.at(-1), y = Za(b, t) - b.w;
        for (const N of q) {
          g = Za(b, N) - b.w,
            8e-5 > y && m.push(t),
            -0.00008 < y && k.push(t),
            (8e-5 < y && -0.00008 > g || -0.00008 > y && 8e-5 < g)
            && (y /= g - y,
              t = { x: t.x + (t.x - N.x) * y, y: t.y + (t.y - N.y) * y, z: t.z + (t.z - N.z) * y },
              k.push(t),
              m.push(t)),
            t = N,
            y = g;
        }
        return {
          o: 2 < k.length && { C: ob(k, q.A, q.D), B: D, u: f },
          m: 2 < m.length && { C: ob(m, q.A, q.D), B: D, u: f },
        };
      }
    }
    return { o: g, m: k };
  },
  Ub = (b, f, g = ab(f.C)) => {
    if (b) {
      const { o: k, m } = Tb(b, f);
      k || m || b.s.push(f);
      k && (b.o = Ub(b.o, k, g));
      m && (b.m = Ub(b.m, m, g));
    } else {
      b = { x: g.x, y: g.y, z: g.z, w: g.w, s: [f], o: 0, m: 0 };
    }
    return b;
  },
  Vb = (b, f, g) => {
    const k = [],
      m = (q, D) => {
        let { o: t, m: y } = Tb(q, D);
        t || y || (0 < g * Za(q, f) ? t = D : y = D);
        t && (q.o ? m(q.o, t) : k.push(t));
        y && q.m && m(q.m, y);
      };
    for (const q of f.s) {
      m(b, q);
    }
    return k;
  },
  Wb = (b, f) => b && (f(b), Wb(b.o, f), Wb(b.m, f)),
  Xb = b => b.length ? b.reduce((f, g) => Ub(f, { C: g, B: 0, u: 0 }), 0) : b,
  Yb = b => (Wb(b, f => {
    const g = f.m;
    f.m = f.o;
    f.o = g;
    f.x *= -1;
    f.y *= -1;
    f.z *= -1;
    f.w *= -1;
    for (const k of f.s) {
      k.B = !k.B;
    }
  }),
    b),
  Zb = (...b) =>
    b.reduce((f, g) => {
      const k = [];
      if (f = Xb(f), g) {
        g = Xb(g);
        Wb(f, m => m.s = Vb(g, m, 1));
        Wb(g, m => k.push([m, Vb(f, m, -1)]));
        for (const [m, q] of k) {
          for (const D of q) {
            Ub(f, D, m);
          }
        }
      }
      return f;
    }),
  O = (b, ...f) => Yb(Zb(Yb(Xb(b)), ...f)),
  Q = b => {
    const f = new Map(),
      g = new Map(),
      k = m => {
        if (m.u) {
          const q = f.get(m.u);
          q ? (g.delete(q), m = k(m.u)) : f.set(m.u, m);
        }
        return m;
      };
    return Wb(b, m => {
      for (const q of m.s) {
        g.set(k(q), q.B);
      }
    }),
      Array.from(g, ([{ C: m }, q]) => {
        const D = m.map(({ x: t, y, z: N }) => ({ x: t, y, z: N }));
        return ob(q ? D.reverse() : D, m.A, m.D);
      });
  },
  h = { x: 0, y: 0, z: 0 },
  R = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  $b = b => {
    const f = Da,
      g = L.length,
      k = {
        j: 0,
        g: 0,
        i: 0,
        u: f,
        h() {
          const m = k.j, q = k.g, D = k.i, t = f.l.multiply(b);
          k.I = t;
          2.9 > $a(t.transformPoint()) && Hb[5] && (.3 > q || .7 < q)
            && (k.j = m ? 0 : 1, g && (za || (h4.innerHTML = "* click *", na = a + 1)), oa = g, Rb());
          k.g = K(q, m, 4);
          k.i = K(D, m, 1);
          k.l = t.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    L.push(k);
    r(p(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), X(.4, .5, .5));
    r(p(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), X(.4, .5, .5));
    r(p(R), b.translate(0, -0.4).scale(.5, .1, .5), X(.5, .5, .4));
  },
  ac = (b, ...f) => {
    let g = -1, k = 0, m = 0, q = 0, D = 0, t = 0, y = 3, N = 1;
    const v = {
        j: 0,
        h() {
          if (!v.j) {
            var S = 1, V = 1 / 0;
            for (var W of C) {
              var U = W.w, ea = Math.hypot(A - W.x, e - W.z), Y = ea - U;
              Z ||= ea < U;
              0 < Y && V > Y && (V = Y, P = W);
              U = ea / U;
              S = S < U ? S : U;
            }
            if (!Z) {
              V = P.x;
              W = P.z;
              U = P.w;
              ea = A - V;
              Y = e - W;
              let T = Math.hypot(ea, Y), ua = Math.atan2(-Y, ea);
              N && (m = (Math.random() - .5) * Math.PI / 2, y = Ma(1, y / (1 + Math.random())));
              ua += m;
              g = -Math.cos(ua);
              k = Math.sin(ua);
              .1 < T && (T = (T < U ? T : U) / (T || 1), A = ea * T + V, e = Y * T + W);
            }
            N = Z;
            y = K(y, 3 + 6 * (1 - S), 3 + S);
            l = K(l, A = K(A, A + g, y), y);
            G = K(G, e = K(e, e + k, y), y);
            q = Va(q, Math.atan2(l - D, G - t) / La - 180, 3 * c);
            D = l;
            t = G;
            S = (v.l = x.l.multiply(b.translate(l, 0, G).rotateSelf(0, q, 7 * Math.sin(1.7 * a)))).transformPoint();
            if (1.5 > $a(S)) {
              v.j = 1;
              S = [
                ,
                "Mark Zuckemberg<br>made the world worse",
                ,
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
              ][ma] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              var Z = ma && 12 > ma ? 5 : 7;
              za || (h4.innerHTML = S, na = a + Z);
              Rb();
            }
          }
          v.j
            && (S = w % 4 - 2,
              v.l = ub[2].l.translate(
                w % 4 * 1.2 - 1.7 + Math.sin(a + w) / 7,
                -2,
                1.7 * (w / 4 | 0) - 5.5 + (0 > S ? -S : S) + Math.cos(a / 1.5 + w) / 6,
              ));
        },
      },
      x = Da,
      w = Ob.length,
      C = f.map(([S, V, W]) => ({ x: S, z: V, w: W }));
    let P = C[0], { x: A, z: e } = P, l = A, G = e;
    Ob.push(v);
  },
  bc = new Float32Array(624),
  cc = (b, f, g) => {
    g = g ? Ja : Ia;
    if (Ea) {
      g = d.rotate(0, 40 * Math.sin(la) - 70);
      for (var { F: k } of Ka) {
        cb(g, bc, k - 1);
      }
      I.uae(b, !1, bc);
      I.d97(4, Ka[2].G - Ka[0].v, 5123, 2 * Ka[0].v);
    } else {
      for (k = 0; ub.length > k; ++k) {
        const { H: m, F: q, l: D } = ub[k];
        m && cb(D, bc, q - 1);
      }
      I.uae(b, !1, bc);
      I.d97(4, (f ? Ka[2].G : Ka[0].v) - 3, 5123, 6);
      for (f = 0; L.length > f; ++f) {
        const { l: m, g: q } = L[f];
        cb(m, bc, f);
        bc[16 * f + 15] = 1 - q;
      }
      I.uae(b, !1, bc);
      I.das(4, Ha.G - Ha.v, 5123, 2 * Ha.v, L.length);
      for (f = 0; 13 > f; ++f) {
        cb(Ob[f].l, bc, f);
      }
      I.uae(b, !1, bc);
      I.das(4, g.G - g.v, 5123, 2 * g.v, 13);
    }
  },
  dc = new Int32Array(10725888),
  ec = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls:<b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  X = NO_INLINE((b, f, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * f << 8 | 255 * b),
  I = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const b in I) {
  I[b[0] + [...b].reduce((f, g, k) => (f * k + g.charCodeAt(0)) % 434, 0).toString(36)] = I[b];
}
const Jb = new AudioContext(), Ib = Jb.createBufferSource();
setTimeout(() => {
  let b = 0, f = 6;
  const g = () => {
      if (h4.innerHTML += ".", !--f) {
        let x = 0, w = 0, C = 1, P = 0, A = 0, e = 0, l = !1, G, S, V, W, U, ea, Y, Z, T, ua, Qa, Ra;
        const ha = { x: 0, y: 0, z: 0 },
          kb = new Int32Array(256),
          lb = () => {
            const { u: z, I: B } = L[oa], { x: E, y: J, z: H } = B.transformPoint({ x: 0, y: 8, z: -3 });
            h.x = ha.x = E;
            h.y = ha.y = Y = J;
            h.z = ha.z = H;
            S =
              ea =
              U =
              V =
              W =
                0;
            C = 1;
            x = w = z?.F || 1;
          },
          Db = () => {
            let z = 0, B = 0, E = 0, J = 0, H = 0;
            kb.fill(0);
            for (let F = 0; 31 > F; ++F) {
              let ca = 0;
              const da = 512 * F;
              for (let pa = 0; 128 > pa; pa++) {
                let aa = da + 4 * pa;
                var M = (qa[aa] + qa[1 + aa]) / 255;
                if (aa = qa[2 + aa], 14 < pa && 114 > pa && (ca += M), aa && M) {
                  M = kb[aa] + 1, kb[aa] = M, z > M || (z = M, B = aa);
                }
              }
              3 > ca && 5 < F && (J += F / 32);
              3 < ca && (7 < F && (E += F / 15), H = 1);
            }
            B && (H = 1);
            C ? B && (C = 0, w = B) : w = B || x;
            x = B;
            S = H;
            V = K(V, H ? 6.5 : 8, 4);
            ha.y += E / 41 - (H ? 1 : V) * J / 41 * V * c;
          },
          Eb = () => {
            for (let H = 32; 128 > H; H += 2) {
              var z = 0;
              let M = 0;
              var B = 0;
              let F = 0;
              const ca = 512 * H;
              for (let da = 1 & H; 128 > da; da += 2) {
                var E = ca + 4 * da;
                const pa = ca + 4 * (127 - da), aa = qa[E] / 255, va = qa[1 + pa] / 255;
                var J = da / 63.5 - 1;
                J = 1 - (0 > J ? -J : J);
                if (
                  10 < da && 118 > da
                  && (z = Ma(z, Ma(aa * J, aa * qa[pa] / 127.5)), M = Ma(M, Ma(va * J, va * qa[1 + E] / 255))),
                    54 > da || 74 < da
                ) {
                  E = (1 - J) * (va < aa ? aa : va) / 3,
                    .001 < E && (64 > da && E > B ? B = E : 64 < da && E > F && (F = E));
                }
              }
              B = F - B;
              z = M - z;
              (0 > B ? -B : B) > (0 > Z ? -Z : Z) && (Z = B);
              (0 > z ? -z : z) > (0 > T ? -T : T) && (T = z);
            }
          },
          Fb = () => {
            T = Z = 0;
            NO_INLINE(Db)();
            NO_INLINE(Eb)();
            var z = (Hb[0] ? 1 : 0) + (Hb[2] ? -1 : 0) + fa,
              B = (Hb[1] ? 1 : 0) + (Hb[3] ? -1 : 0) + ia,
              E = navigator.getGamepads()[0];
            if (E) {
              var J = va => aa[va]?.pressed || 0 < aa[va]?.value;
              const aa = E.buttons;
              E = E.axes;
              var H = J(1) || J(3) || J(2) || J(0);
              H !== l && (l = H) && (Hb[5] = 1);
              z += (.2 < Na(-E[0]) ? -E[0] : 0) + (J(14) ? 1 : 0) + (J(15) ? -1 : 0);
              B += (.2 < Na(-E[1]) ? -E[1] : 0) + (J(12) ? 1 : 0) + (J(13) ? -1 : 0);
              Fa && (.3 < Na(E[2]) && (jb += 80 * E[2] * c), .3 < Na(E[3]) && (ib += 80 * E[3] * c));
            }
            .05 > (0 > B ? -B : B) && (B = 0);
            .05 > (0 > z ? -z : z) && (z = 0);
            J = Math.atan2(B, z);
            E = Oa(Math.hypot(B, z));
            H = (z = E * Math.cos(J), B = E * Math.sin(J), Oa(1 - 5 * Ma(0 > Z ? -Z : Z, 0 > T ? -T : T)));
            var M =
              (w || (Z += U * H * c, T += ea * H * c),
                U = K(U, 0, S ? 8 : 4),
                ea = K(ea, 0, S ? 8 : 4),
                W = K(W, S ? (z || B ? S ? 7 : 4 : 0) * H : 0, S ? .1 < H ? 10 : z || B ? 5 : 7 : 1),
                Fa ? jb * La : Math.PI);
            H = Math.sin(M) * W * c;
            M = Math.cos(M) * W * c;
            H = (Z -= z * M - B * H, T -= z * H + B * M, 1 === ub[w].H && ub[w].l || d);
            M = H.inverse();
            if (
              M.m41 = 0,
                M.m42 = 0,
                M.m43 = 0,
                { x: Z, z: T } = M.transformPoint({ x: Z, z: T, w: 0 }),
                ha.x += Z,
                ha.z += T,
                w !== G
            ) {
              G = w;
              const { x: aa, y: va, z: zb } = H.inverse().transformPoint(h);
              ha.x = aa;
              ha.y = va;
              ha.z = zb;
            }
            M = h.x;
            const F = h.z, { x: ca, y: da, z: pa } = H.transformPoint(ha);
            H = (h.x = ca, h.y = da, h.z = pa, Na(Y - da));
            (Y = K(Y, da + .1, 50 * H + 5),
                w && (U = (h.x - M) / c, ea = (h.z - F) / c),
                (z || B) && (P = 90 - J / La),
                A = Va(A, P, 8 * c),
                e += (E - e) * Oa(10 * c),
                ua = Wa(ua, h.x, .5, c),
                Qa = Wa(Qa, h.y, 2, c),
                Ra = Wa(Ra, h.z, .5, c),
                Fa)
              ? (z = 200 * C,
                fb = K(fb, h.x, 18 + z),
                gb = K(gb, h.y + 1.5, 15 + z),
                hb = K(hb, h.z, 18 + z),
                ib = Ma(87 > ib ? ib : 87, -87))
              : (fb = Wa(fb, ua, 1, 2 * c),
                gb = Wa(gb, Qa + 13 + 15 * C, 4, 2 * c),
                hb = Wa(hb, Ra + -18, 1, 2 * c),
                z = hb - Ra,
                1 < (0
                      > z
                    ? -z
                    : z)
                && (B = fb - ua,
                  J = gb - Qa,
                  jb = 270 + Math.atan2(z, B) / La,
                  ib = 90 - Math.atan2(Math.hypot(z, B), J) / La));
            jb = Ua(jb);
          },
          Aa = z => {
            requestAnimationFrame(Aa);
            var B = (z - (Ga || z)) / 1e3;
            c = Ea ? Hb[5] = 0 : .066 < B ? .066 : B;
            a += c;
            la += B;
            Ga = z;
            0 < c
              && (NO_INLINE(Fb)(),
                Pb(),
                1 === w && (L[9].j = -15 > h.x && 0 > h.z ? 1 : 0),
                (-25 > h.x || 109 > h.z ? -25 : -9) > h.y && lb(),
                Hb[5] = 0);
            z = Ea
              ? d.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Oa(hC.clientWidth / 1e3))
              : d.rotate(-ib, -jb, -0).invertSelf().translateSelf(-fb, -gb, -hb);
            B = tb(z, .3, 55, 10);
            const E = tb(z, 55, 177, 11);
            0 < c
              && (ja(),
                I.b6o(36160, mb),
                I.v5y(0, 0, 128, 128),
                I.c4s(16640),
                I.cbf(!0, !1, !0, !1),
                I.uae(ja("b"), !1, cb(d.rotate(0, 180).invertSelf().translateSelf(-h.x, -h.y, .3 - h.z))),
                cc(ja("c"), 0, 1),
                I.c4s(256),
                I.cbf(!1, !0, !0, !1),
                I.uae(ja("b"), !1, cb(d.translate(-h.x, -h.y, -h.z - .3))),
                cc(ja("c"), 0, 1),
                I.r9r(0, 0, 128, 128, 6408, 5121, qa));
            ra();
            I.b6o(36160, nb);
            I.v5y(0, 0, 2048, 2048);
            db[0](B);
            db[1](E);
            ka();
            I.b6o(36160, null);
            I.v5y(0, 0, I.drawingBufferWidth, I.drawingBufferHeight);
            I.cbf(!0, !0, !0, !0);
            I.c4s(16640);
            db[0]();
            db[1]();
            I.uae(ka("a"), !1, Ya(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
            I.uae(ka("b"), !1, cb(z));
            I.ubu(ka("k"), fb, gb, hb);
            cc(ka("c"), !Fa, 0);
            wa();
            I.ubu(wa("j"), I.drawingBufferWidth, I.drawingBufferHeight, la);
            Ea ? I.ubu(wa("k"), 0, 0, 0) : I.ubu(wa("k"), fb, gb, hb);
            I.uae(wa("b"), !1, cb(z.inverse()));
            I.d97(4, 3, 5123, 0);
          },
          qa = new Uint8Array(65536),
          eb = m;
        var v = (NO_INLINE(Sb)(),
          vb(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ));
        const ra = wb(
            vb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          wa = wb(
            vb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          ja = wb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          ka = wb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          nb = I.c5w(),
          mb = I.c5w();
        v = I.c3z();
        const xa = I.c25(),
          db = Xa(2, z => {
            const B = new Float32Array(16), E = I.c25(), J = ka(z ? "j" : "i");
            return I.b6o(36160, nb),
              I.d45([0]),
              I.r9l(0),
              ka(),
              I.ubh(ka(z ? "h" : "g"), z),
              I.a4v(33984 + z),
              I.b9j(3553, E),
              I.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              I.t2z(3553, 10241, 9729),
              I.t2z(3553, 10240, 9729),
              I.t2z(3553, 34893, 515),
              I.t2z(3553, 34892, 34894),
              I.t2z(3553, 10243, 33071),
              I.t2z(3553, 10242, 33071),
              H => {
                H
                  ? (cb(H, B), I.uae(ra("b"), !1, B), I.fas(36160, 36096, 3553, E, 0), I.c4s(256), cc(ra("c"), !Fa, 0))
                  : I.uae(J, !1, B);
              };
          });
        wa();
        I.ubh(wa("q"), 3);
        ja();
        I.uae(ja("a"), !1, Ya(1.4, .59, 1e-4, 1));
        ka();
        I.ubh(ka("q"), 3);
        I.e8z(2929);
        I.e8z(2884);
        I.c70(1);
        I.c7a(1029);
        I.d4n(515);
        I.c5t(0, 0, 0, 1);
        I.b6o(36160, mb);
        I.bb1(36161, v);
        I.r4v(36161, 33189, 128, 128);
        I.f8w(36160, 36096, 36161, v);
        I.a4v(33987);
        I.b9j(3553, xa);
        I.fas(36160, 36064, 3553, xa, 0);
        I.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        I.a4v(33987);
        I.b9j(3553, I.c25());
        I.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, eb);
        I.gbn(3553);
        I.t2z(3553, 10241, 9987);
        I.t2z(3553, 10240, 9729);
        Ka.map((z, B) => {
          z.h = B
            ? () =>
              Ka[0].l.translate(0, e * Oa(.45 * Math.sin(9.1 * a + Math.PI * (B - 1) - Math.PI / 2))).rotateSelf(
                e * Math.sin(9.1 * a + Math.PI * (B - 1)) * .25 / La,
                0,
              )
            : () => d.translate(h.x, Y, h.z).rotateSelf(0, A);
        });
        try {
          const [z, B, E, J, H] = JSON.parse(localStorage.DanteSP22);
          L.map((M, F) => M.g = M.i = M.j = F ? 0 | z[F] : 0);
          Ob.map((M, F) => M.j = 0 | B[F]);
          oa = E;
          a = J;
          Ca = H;
        } catch (z) {
        }
        Ba = 0 > oa ? 0 : 1 < oa ? 1 : oa;
        h4.innerHTML = "";
        na = 0;
        Qb();
        Pb();
        lb();
        fb = ua = h.x;
        gb = (Qa = h.y) + 13;
        hb = (Ra = h.z) + -18;
        NO_INLINE(Mb)();
        requestAnimationFrame(Aa);
      }
    },
    k = () => {
      if (5 > b) {
        var v = 0, x = b++;
        let [A, e, l, G, S, V, W, U, ea, Y, Z, T, ua, Qa, Ra, ha, kb, lb, Db, Eb, Fb] = xb[x];
        Y = Y * Y * 4;
        for (const Aa of [5513, 4562, 3891]) {
          let qa = 0, eb = 0, ra, wa, ja, ka, nb;
          const mb = [],
            xa = new Int32Array(768 * Aa),
            db = 2 ** (T - 9) / Aa,
            z = Math.PI * 2 ** (kb - 8) / Aa,
            B = Db * Aa & -2;
          for (let E = 0; 11 >= E; ++E) {
            for (
              let J = 0, H = +"000001234556112341234556011111111112011111111112000001111112"[12 * x + E];
              32 > J;
              ++J
            ) {
              const M = (32 * E + J) * Aa;
              for (var w = 0; 4 > w; ++w) {
                if (ra = 0, H && (ra = Fb[H - 1].charCodeAt(J + 32 * w) - 40, ra += 0 < ra ? 106 : 0), ra) {
                  var C;
                  if (!(C = mb[ra])) {
                    C = ra;
                    let F = void 0, ca = void 0;
                    var P = ra;
                    let da = 0, pa = 0;
                    const aa = 2 > x ? Bb : yb, va = 2 > x ? 1 > x ? Ab : Cb : yb, zb = new Int32Array(U + ea + Y);
                    for (let Sa = 0, Gb = 0; U + ea + Y > Sa; ++Sa, ++Gb) {
                      let Ta = 1;
                      U > Sa ? Ta = Sa / U : U + ea > Sa || (Ta = (1 - (Ta = (Sa - U - ea) / Y)) * 3 ** (-Z / 16 * Ta));
                      0 > Gb
                        || (Gb -= 4 * Aa,
                          ca = 0.003960 * 2 ** ((P + e - 256) / 12),
                          F = 0.003960 * 2 ** ((P + S - 256) / 12) * (1 + (x ? 0 : 8e-4 * 9)));
                      zb[Sa] = 80
                          * (aa(da += ca * Ta ** (l / 32)) * A + va(pa += F * Ta ** (V / 32)) * G
                            + (W ? (2 * Math.random() - 1) * W : 0))
                          * Ta | 0;
                    }
                    C = mb[C] = zb;
                  }
                  for (let F = 0, ca = 2 * M; C.length > F; ++F, ca += 2) {
                    xa[ca] += C[F];
                  }
                }
              }
              for (let F, ca = 0; Aa > ca; ++ca) {
                w = 0,
                  C = 2 * (M + ca),
                  ((F = xa[C]) || nb)
                  && (ja = 0.003080 * ua,
                    1 != x && 4 != x || (ja *= Math.sin(db * C * Math.PI * 2) * Eb / 512 + .5),
                    ja = 1.5 * Math.sin(ja),
                    qa += ja * eb,
                    ka = (1 - Qa / 255) * (F - eb) - qa,
                    eb += ja * ka,
                    F = 4 == x ? eb : 3 == x ? ka : qa,
                    x || (F = 1 > (F *= 22e-5) ? -1 < F ? Math.sin(F / 4 * Math.PI * 2) : -1 : 1, F /= 22e-5),
                    F *= Ra / 32,
                    nb = 1e-5 < F * F,
                    wa = Math.sin(z * C) * ha / 512 + .5,
                    w = F * (1 - wa),
                    F *= wa),
                  C < B || (w += xa[
                    1 + C
                    - B
                  ] * lb / 255,
                    F += xa[C - B] * lb / 255),
                  dc[v + C] += xa[C] = w,
                  ++C,
                  dc[v + C] += xa[C] = F;
              }
            }
          }
          v += xa.length;
        }
        setTimeout(k);
      } else {
        v = Jb.createBuffer(2, 5362944, 44100);
        for (x = 0; 2 > x; x++) {
          for (let A = x, e = v.getChannelData(x); 10725888 > A; A += 2) {
            e[A >> 1] = dc[A] / 65536;
          }
        }
        Ib.buffer = v;
        Ib.loop = !0;
      }
      g();
    },
    m = new Image();
  m.onload = m.onerror = () => {
    g();
  };
  m.src = ec;
  setTimeout(k, 9);
  let q;
  const D = (v, x, w) =>
      d.translate(v + Math.sin(a + 2) / 5, x + Math.sin(.8 * a) / 3, w).rotateSelf(
        2 * Math.sin(a),
        Math.sin(.7 * a),
        Math.sin(.9 * a),
      ),
    t = (() => {
      const v = Xa(
          11,
          w => d.translate(Math.sin(w / 10 * Math.PI), w / 10).rotate(+w).scale(1.0001 - w / 10, 0, 1 - w / 10),
        ),
        x = qb(18);
      return Xa(10, w => rb(pb(x, v[w]).reverse(), pb(x, v[w + 1]), 1)).flat();
    })(),
    y = Q(
      O(
        n(p(20, 1, 1.15, 1), d.translate(0, -3).scale(3.5, 1, 3.5), X(.7, .4, .25, .7)),
        n(p(20, 1, 1.3, 1), d.translate(0, -2.5).scale(2.6, 1, 3), X(.7, .4, .25, .2)),
        n(p(R), d.translate(4, -1.2).scale3d(2), X(.7, .4, .25, .3)),
      ),
    ),
    N = Q(
      O(
        n(p(R), d.translate(0, -8).scale(6, 15, 2.2)),
        n(p(R), d.translate(0, -14.1).scale(4, 13, 4)),
        n(p(20, 1), d.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
      ),
    );
  u(() => {
    r([R.slice(1)], d.translate(-2).scale3d(3).rotate(90, 0));
  }, 0);
  u(() => {
    const v = () => {
        var e = L[2].i, l = 1 - L[4].i;
        return e < l ? e : l;
      },
      x = (e, l, G) =>
        u(S => {
          S.h = () => d.translate(v() * Math.sin(3 * e + a * e) * l);
          R.map(({ x: V, z: W }) => {
            r(p(11, 1), d.translate(4 * V, 4, G + 4 * W).scale(.8, 3, .8), X(.5, .3, .7, .6));
            r(p(R), d.translate(4 * V, 7, G + 4 * W).scale(1, .3), X(.5, .5, .5, .3));
          });
          r(Q(O(
            n(p(R), d.translate(0, 0, G).scale(5, 1, 5), X(.8, .8, .8, .3)),
            ...[-1, 1].map(V =>
              n(p(R), d.translate(5 * V, .2, G).rotate(0, 0, -30 * V).scale(4, 1, 2), X(.8, .8, .8, .3))
            ),
          )));
          r(p(R), d.translate(0, -3, G).scale(8, 2, 8), X(.4, .4, .4, .3));
        }),
      w = (u(e => {
        e.h = () => D(-12, 4.2, 40 * Ba - 66);
        r(y);
        $b(d.translate(0, -3, 4));
      }),
        Xa(7, e => n(p(6, 1), d.translate(4 * (e / 6 - .5), 3).scale(.2, 3, .2), X(.3, .3, .38))).flat()),
      C = (ac(d.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
        ac(
          d.translate(0, 2.8),
          [5, 10, 3],
          [-5, 10, 3],
          ...qb(18).map(({ x: e, z: l }) => [7 * e, 10 * l, 4.5 - 2 * (0 > e ? -e : e)]),
        ),
        r(p(R), d.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(.8, .8, .8, .2)),
        R.map(({ x: e, z: l }) => r(p(6), d.translate(3 * e, 3, 15 * l).scale(.7, 4, .7), X(.6, .3, .3, .4))),
        [-23, 22].map(e => r(p(R), d.translate(0, 0, e).scale(3, 1, 8), X(.9, .9, .9, .2))),
        [-15, 15].map((e, l) => {
          r(p(R), d.translate(0, 6.3, e).scale(4, .3, 1), X(.3, .3, .3, .4));
          r(p(R), d.translate(0, 1, e).scale(3, .2, .35), X(.5, .5, .5, .3));
          u(G => {
            G.h = () => d.translate(0, 4.7 * -L[l + 1].g, e);
            r(w);
          });
        }),
        Xa(5, e =>
          Xa(2, l =>
            r(
              t,
              d.translate(18.5 * (l - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * l).scale(1.2, 10, 1.2),
              X(1, 1, .8, .2),
            ))),
        r(p(R), d.translate(3, 1.5, -20).scale(.5, 2, 5), X(.7, .7, .7, .2)),
        r(p(R), d.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(.75, .75, .75, .2)),
        r(p(5), d.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(.6, .3, .3, .4)),
        $b(d.translate(-5.4, 1.5, -19).rotate(0, -90)),
        r(p(R), d.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), X(.8, .2, .2, .5)),
        r(Q(
          O(
            Zb(
              n(p(6, 0, 0, .3), d.translate(8, -3, -4).scale(13, 1, 13), X(.7, .7, .7, .2)),
              n(p(6), d.translate(0, -8).scale(9, 8, 8), X(.4, .2, .5, .5)),
              n(p(6, 0, 0, .3), d.translate(0, -0.92).scale(13, 2, 13), X(.8, .8, .8, .2)),
            ),
            n(p(5), d.scale(5, 30, 5), X(.4, .2, .6, .5)),
            n(p(5, 0, 1.5), d.translate(0, 1).scale(4.5, .3, 4.5), X(.7, .5, .9, .2)),
            n(p(R), d.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), X(.5, .5, .5, .5)),
            n(p(6), d.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(.5, .5, .5, .5)),
          ),
        )),
        u(e => {
          e.h = () =>
            d.translate(
              0,
              .01 < L[3].g ? (5 * Math.cos(1.5 * a) + 2) * L[3].i * (1 - L[2].g) + -15 * (1 - L[3].g) : -500,
              0,
            );
          $b(d.translate(0, 1.2));
          r(p(5), d.translate(0, -0.2).scale(5, 1, 5), X(.6, .65, .7, .3));
        }),
        $b(d.translate(15, -2, 4)),
        x(.7, 12, 35),
        x(1, 8.2, 55),
        u(e => {
          e.h = () => d.translate(v() * Math.sin(a / 1.5 + 2) * 12);
          r(
            Q(O(
              Zb(
                n(p(R), d.scale(1.5, 1, 5), X(.9, .9, .9, .2)),
                n(p(6), d.scale(4, 1, 5), X(.9, .9, .9, .2)),
                n(p(R), d.translate(0, -2).scale(2, 3.2, 1.9), X(.3, .8, .5, .5)),
                n(p(16, 1, 0, 4), d.scale(1, 1, 1.5).rotate(0, 90), X(.9, .9, .9, .2)),
              ),
              n(p(R), d.scale(1.3, 10, 1.3), X(.2, .7, .4, .6)),
            )),
            d.translate(0, 0, 45),
          );
          ac(d.translate(0, 2.8, 45), [0, 0, 4.5]);
        }),
        u(e => {
          e.h = () => d.translate(9.8 * (1 - v()));
          r(p(3), d.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), X(.3, .6, .6, .2));
          r(p(8), d.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(.8, .8, .8, .2));
          r(p(R), d.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(.5, .5, .5, .3));
          r(p(R), d.translate(-23, -2.2, 62).scale(3, 1, 4), X(.5, .5, .5, .3));
          $b(d.translate(-23, -0.5, 66.5));
        }),
        r(p(R), d.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(.9, .9, .9, .2)),
        u(e => {
          e.h = () => d.translate(0, Oa(1 - 5 * v()) * Pa(L[4].g, L[5].g) * Math.sin(1.35 * a) * 4);
          r(p(R), d.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(.7, .7, .7, .2));
          r(
            Q(O(n(p(R), d.scale(3, 1.4, 2.7)), n(p(R), d.scale(1.2, 8, 1.2)))),
            d.translate(-33, -3, 55),
            X(.7, .7, .7, .2),
          );
        }),
        u(e => {
          e.h = () => d.translate(0, 0, Oa(1 - 5 * v()) * Pa(L[4].g, L[5].g) * Math.sin(.9 * a) * 8);
          r(Q(
            O(
              n(p(R), d.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(.9, .9, .9, .2)),
              n(p(R), d.translate(-27, -3, 55).scale(1, 3), X(.9, .9, .9, .2)),
            ),
          ));
          r(p(R), d.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(.9, .9, .9, .2));
        }),
        u(e => {
          e.h = () => d.translate(0, -6.5 * L[4].i);
          r(p(6), d.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), X(.7, .7, .7, .4));
        }),
        [...n(
          Q(Zb(
            n(p(R), d.translate(0, -3).scale(11, 1.4, 3), X(.9, .9, .9, .2)),
            O(
              n(p(6), d.rotate(0, 0, 90).scale(6, 8, 6), X(.3, .6, .6, .3)),
              n(p(4, 0, .01), d.translate(0, 6).scale(12, 2, .75).rotate(0, 45), X(.3, .6, .6, .3)),
              n(p(6), d.rotate(0, 0, 90).scale(5, 12, 5), X(.3, .6, .6, .3)),
              ...[5, 0, -5].map(e =>
                n(p(5), d.translate(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(.3, .6, .6, .3))
              ),
            ),
          )),
          d,
        )]),
      P =
        (r(C, d.translate(-53, 0, 55)),
          r(p(6), d.translate(-61.3, -2.4, 49).scale(3, 1, 5), X(.4, .6, .6, .3)),
          r(p(7), d.translate(-57, -2.6, 46).scale(4, 1, 4), X(.8, .8, .8, .3)),
          $b(d.translate(-55, -1.1, 46).rotate(0, 90)),
          u(e => {
            e.h = () => d.translate(-75, (1 - L[5].i) * (1 - L[6].g) * 3, 55).rotate(180 * (1 - L[5].i) + ya, 0);
            r(C);
          }, 2),
          r(p(R), d.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), X(.7, .7, .7, .2)),
          r(p(3, 0, -0.5), d.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), X(.8, .8, .8, .2)),
          r(
            Q(O(
              Zb(
                n(p(R), d.translate(-100, -2.5, 55).scale(8, 1, 8), X(.8, .8, .8, .2)),
                n(p(R), d.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(.8, .8, .8, .2)),
                n(p(R), d.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(.8, .8, .8, .2)),
                n(p(R), d.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), X(.8, .8, .8, .2)),
                n(p(6), d.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(.6, .6, .6, .3)),
                n(p(R), d.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(.8, .8, .8, .2)),
                n(p(R), d.translate(-100, .42, 92).scale(3, 1.1, 4.1), X(.8, .8, .8, .2)),
              ),
              n(p(8), d.translate(-100, -1, 55).scale(7, .9, 7), X(.3, .3, .3, .4)),
              n(p(8), d.translate(-100, -2, 55).scale(4, .3, 4), X(.4, .4, .4, .5)),
              n(p(8), d.translate(-100, -3, 55).scale(.6, 1, .6), X(.4, .4, .4, .5)),
            )),
            d,
          ),
          ac(d.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          ac(d.translate(-89, .2, 80), [0, 0, 6]),
          r(Q(
            O(
              n(p(R), d.translate(-100, 1, 63).scale(7.5, 4), X(.5, .5, .5, .4)),
              n(p(R), d.translate(-100, 0, 70).scale(2, 2, 10), X(.5, .5, .5, .4)),
              n(p(20, 1), d.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(.5, .5, .5, .4)),
            ),
          )),
          u(e => {
            e.h = () => d.translate(-99.7, 5.3 * -L[6].g - 2, 63.5);
            r(w);
          }),
          R.map(({ x: e, z: l }) => {
            r(p(6), d.translate(7 * e - 100, -3, 7 * l + 55).scale(1, 8.1), X(.6, .15, .15, .8));
            [4, -0.4].map(G => r(p(6), d.translate(7 * e - 100, G, 7 * l + 55).scale(1.3, .5, 1.3), X(.4, .2, .2, .8)));
          }),
          Xa(7, e => {
            r(
              p((23 * e + 1) % 5 + 5, 0, .55),
              d.translate(5 * Math.sin(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(
                5 + e / 2,
                1 + e / 6,
                5 + e / 3,
              ),
              X(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
            );
          }),
          r(p(R), d.translate(-87, -9.5, 24).scale(7, 1, 3), X(.4, .5, .6, .4)),
          r(p(4), d.translate(-86, -9.2, 27).scale(5, 1, 5), X(.5, .6, .7, .3)),
          r(p(12, 1), d.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(.3, .3, .4, .1)),
          $b(d.translate(-86, -7.5, 31)),
          u(e => {
            e.h = () => d.translate(0, 3.5 * (1 - Ma(L[6].g, L[7].g)) + Pa(L[7].i, L[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(l =>
              r(p(R), d.translate(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), X(.2, .5, .6, .2))
            );
          }),
          u(e => {
            e.h = () => {
              const l = Pa(L[7].i, L[6].i);
              return d.translate(0, l * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + l) * l);
            };
            [6, 18].map(l => r(p(R), d.translate(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), X(.1, .4, .5, .2)));
          }),
          r(
            Q(O(
              Zb(
                n(p(R), d.scale(11, 1, 13), X(.3, .4, .6, .3)),
                n(p(5), d.translate(0, 0, -7).scale(2, 1.2, 2), X(.2, .4, .7, .3)),
                n(p(5), d.scale(9, 1.2, 9), X(0, .2, .3, .5)),
              ),
              n(p(5), d.scale(5.4, 5, 5.4), X(0, .2, .3, .5)),
            )),
            d.translate(-38.9, -11.3, 17),
          ),
          $b(d.translate(-38.9, -9.6, 10)),
          u(e => {
            e.h = () => d.translate(0, -7.3 * L[7].i);
            r(
              Q(O(
                Zb(
                  n(p(5), d.translate(0, 2).scale(5, 7, 5).skewY(8), X(.2, .4, .5, .5)),
                  n(p(5), d.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(.25, .35, .5, .5)),
                  n(p(5), d.translate(0, 9).scale(.6, 7, .6).skewY(8), X(.35, .3, .5, .5)),
                ),
                n(p(5), d.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(.2, .4, .5, .5)),
              )),
              d.translate(-38.9, -11.3, 17),
            );
            ac(d.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...qb(15).map(({ x: l, z: G }) => [3 * l, 3 * G, 1.2]));
          }),
          R.map(({ x: e, z: l }) => {
            q = d.translate(9 * e - 38.9, -7.3, 11 * l + 17);
            r(p(14, 1), q.scale(1, 4), X(.25, .25, .25, 1));
            [1.5, 8].map(G => r(p(17, 1), q.translate(0, G - 4).scale(1.5, .5, 1.5), X(.6, .6, .6, .3)));
          }),
          r(
            Q(O(
              Zb(
                n(p(6), d.translate(0, 0, -36).scale(15, 1.2, 15), X(.7, .7, .7, .3)),
                n(p(R), d.translate(0, 0, -18).scale(4, 1.2, 6), X(.45, .4, .6, .3)),
              ),
              ...Xa(6, e =>
                Xa(6, l =>
                  n(
                    p(6),
                    d.translate(4.6 * l - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * l)).scale(2, 5, 2),
                    X(.7, .7, .7, .3),
                  ))).flat(),
            )),
            d.translate(-38.9, -11.3, 17),
          ),
          ac(d.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          r(p(5), d.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), X(.8, .1, .25, .4)),
          $b(d.translate(-84, -0.5, 85).rotate(0, 45)),
          u(e => {
            e.h = () => D(-123, 1.4, 55 + -65 * Ca);
            $b(d.translate(0, -3, -4).rotate(0, 180));
            r(y);
          }),
          ac(d.translate(-115, .2, -12), [0, 0, 3.5]),
          Q(O(
            n(p(R), d.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(.25, .25, .35, .3)),
            n(p(3), d.translate(0, 0, -5.5).scale(3, 2), X(.6, .3, .4, .3)),
            ...[-1.2, 1.2].map(e => n(p(R), d.translate(e, -0.5, 1).scale(.14, .3, 6.5), X(.7, .2, 0, .3))),
          ))),
      A = (u(e => {
        e.h = () => {
          var l = Math.sin(1.1 * a);
          return d.translate.call(d, 0, -2, Pa(L[10].g, L[11].g) * (0 > l ? -l : l) * -8.5 + 10);
        };
        Xa(2, l => r(P, d.translate(9 * l - 110 + (1 & l), 1.7, -12)));
      }),
        u(e => {
          e.h = () => {
            var l = Math.sin(2.1 * a);
            return d.translate.call(d, 0, -2, Pa(L[10].g, L[11].g) * (0 > l ? -l : l) * -8.5 + 10);
          };
          Xa(2, l => r(P, d.translate(9 * (l + 2) - 110 + (1 & l), 1.7, -12)));
        }),
        u(e => {
          e.h = () => {
            var l = Math.sin(1.5 * a);
            return d.translate.call(
              d,
              0,
              -2,
              -8.5 * Ma((1 - L[10].g) * (1 - Pa(L[10].g, L[11].g)), Pa(L[10].g, L[11].g) * (0 > l ? -l : l)) + 10,
            );
          };
          Xa(3, l => r(P, d.translate(9 * l - 106, 1.7, -12)));
        }),
        r(
          Q(O(
            Zb(
              n(p(R), d.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
              n(p(R), d.translate(26.5, -0.6, 10).scale(17, 2, .5)),
            ),
            ...Xa(4, e => n(p(R), d.translate(13 + 9 * e + (1 & e), -0.8, 9).scale(1.35, 1.35, 9))),
            ...Xa(3, e => n(p(R), d.translate(17 + 9 * e, -0.8, 9).scale(1.35, 1.35, 9))),
          )),
          d.translate(-123, 0, -12),
          X(.5, .5, .6, .2),
        ),
        r(p(5), d.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), X(.25, .25, .35, 1)),
        r(p(R), d.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(.8, .8, .8, .2)),
        r(p(6), d.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), X(.6, .5, .7, .2)),
        $b(d.translate(-116, -1.4, -18).rotate(0, 180)),
        Xa(3, e => {
          r(N, d.translate(12 * e - 109, -9, -12), X(.6, .6, .6, .3));
          r(N, d.translate(-77, -9, -12 * e - 20).rotate(0, 90), X(.6, .6, .6, .3));
        }),
        r(Q(
          O(
            n(p(12), d.translate(-77, -13.9, -12).scale(4, 18.2, 4), X(.7, .7, .7, .2)),
            n(p(R), d.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), X(.4, .5, .6, .2)),
            n(p(R), d.translate(-77, 0, -14).scale(1.5, 2.2, 2), X(.4, .5, .6, .2)),
            n(p(12), d.translate(-77, 2.8, -12).scale(3, 5, 3), X(.4, .5, .6, .2)),
          ),
        )),
        r(p(R), d.translate(-115.5, -17, -12).scale(.5, 15, 2.2), X(.6, .6, .6, .3)),
        r(p(R), d.translate(-77, -17, -50.5).scale(2.2, 15, .5), X(.6, .6, .6, .3)),
        r(p(R), d.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), X(.6, .6, .6, .3)),
        r(Q(
          O(
            n(p(R), d.translate(-93, -5.8, -40).scale(9, 1, 5), X(.8, .8, .8, .1)),
            n(p(9), d.translate(-98, -5.8, -40).scale(3, 8, 3), X(.7, .7, .7, .2)),
          ),
        )),
        r(p(9), d.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), X(.5, .5, .5, .3)),
        $b(d.translate(-98, -4.4, -40).rotate(0, 90)),
        ac(d.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
        r(Q(
          O(
            Zb(
              n(p(6, 0, 0, .6), d.translate(-100, .7, 105.5).scale(8, 1, 11), X(.7, .7, .7, .2)),
              n(p(R), d.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), X(.7, .7, .7, .2)),
              n(p(R), d.translate(-91.2, .7, 107).scale(3, 1, 3.3), X(.7, .7, .7, .2)),
            ),
            n(p(5), d.translate(-100, .7, 113).scale(4, 3, 4), X(.7, .7, .7, .2)),
          ),
        )),
        Xa(4, e =>
          u(l => {
            l.h = () => {
              const G = Pa(L[8].i, L[12].i);
              return d.translate(
                (2 < e ? 2 * (1 - G) + G : 0) - 100,
                G * Math.sin(1.3 * a + 1.7 * e) * (3 + e / 3) + .7,
                115 + (1 & e ? -1 : 1) * (1 - L[8].i) * (1 - L[12].i) * -7
                  + (.05 > G ? .05 : G) * Math.cos(1.3 * a + 7 * e) * (4 - 2 * (1 - e / 3)),
              );
            };
            r(
              p(6),
              d.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
              X(.5 - e / 8, e / 12 + .5, .7, .3),
            );
          })),
        u(e => {
          e.h = () => {
            const l = Pa(L[8].i, L[12].i);
            return d.translate(2.5 * (1 - l) - 139.7, -3 * (1 - L[8].g) + l * Math.sin(.8 * a) * -1 - 1.8, 93.5)
              .rotateSelf(Math.cos(1.3 * a) * (3 * l + 3), 0);
          };
          r(Q(O(n(p(10), d.scale(6, 2, 6), X(.1, .6, .5, .3)), n(p(10), d.scale(3.3, 6, 3.3), X(.1, .6, .5, .5)))));
          q = d.translate(-7.5).rotate(0, 90);
          r(p(15, 1), q.scale(3, 2.3, 3), X(.4, .4, .4, .3));
          r(p(10), q.scale(2, 2.5, 2), X(.3, .8, .7, .3));
          r(p(5), q.scale(1, 3), X(.5, .5, .5, .5));
          $b(q.translate(0, 3.4).rotate(0, 180));
          [-1, 1].map(l =>
            r(t, d.rotate(90 * -l, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), X(1, 1, .8, .2))
          );
          ac(d.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
        }),
        [-1, 1].map(e => {
          r(p(12, 1), d.translate(-7.5 * e - 100, 3.7, 96).scale(.8, 4, .8), X(.6, .24, .2, .5));
          [7.2, 1.5].map(l =>
            r(p(15, 1), d.translate(-7.5 * e - 100, l + .7, 96).scale(1.1, .5, 1.1), X(.5, .24, .2, .4))
          );
          r(t, d.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), X(1, 1, .8));
          r(
            Q(O(
              n(p(R), d.translate(-4 * e, 3.5, -0.5).scale(4, 4, .7), X(.5, .5, .5, .4)),
              n(p(R), d.scale(3, 3, 10), X(.6, .24, .2, .5)),
              n(p(28, 1), d.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(.6, .24, .2, .5)),
              n(p(5), d.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(.6, .24, .2, .5)),
              n(p(5), d.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), X(.6, .24, .2, .5)),
            )),
            d.translate(e - 100, .7, 97),
          );
        }),
        u(e => {
          e.h = () => d.translate(-100, .6 - 6 * L[12].g, 96.5).scale(.88, 1.2);
          r(w);
        }),
        [
          ...n(p(25, 1), d.scale(8, 1, 8), X(.45, .45, .45, .2)),
          ...n(p(5), d.translate(0, 1).scale(1, .2), X(.3, .3, .3, .2)),
        ]);
    u(e => {
      e.h = () => d.translate(-80, 1, 106).rotate(0, 40 + sa);
      r(Q(
        O(
          n(p(25, 1), d.scale(8, 1, 8), X(.45, .45, .45, .2)),
          n(p(R), d.translate(0, 0, -5.5).scale(1.5, 3, 2.5), X(.45, .45, .45, .2)),
        ),
      ));
      r(p(8), d.translate(0, 2).scale(3, 1.5, 3), X(.7, .7, .7, .1));
      r(p(5), d.translate(0, 2).scale(1, 2), X(.3, .3, .3, .2));
      ac(d.translate(0, 3), ...qb(10).map(({ x: l, z: G }) => [5.6 * l, 5.6 * G, 2.5]));
    });
    u(e => {
      e.h = () => d.translate(-64, 1, 106).rotate(0, ta);
      r(Q(
        O(n(p(25, 1), d.translate(0, 2).scale(8, 1, 8), X(.35, 0, 0, .3)), n(p(R), d.scale(9, 5, 2), X(.3, 0, 0, .3))),
      ));
      r(A);
      [-1, 1].map(l =>
        r(t, d.rotate(0, 90).translate(-5 * l, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * l + 90), X(1, 1, .8))
      );
    });
    u(e => {
      e.h = () => d.translate(-48, 1, 106).rotate(0, 180 - ta);
      r(Q(
        O(
          n(p(25, 1), d.translate(0, 2).scale(8, 1, 8), X(.35, 0, 0, .3)),
          n(p(R), d.translate(7).scale(9, 5, 2), X(.3, 0, 0, .3)),
          n(p(R), d.translate(0, 0, 7).scale(2, 5, 9), X(.3, 0, 0, .3)),
        ),
      ));
      r(A);
    });
    u(e => {
      e.h = () => d.translate(-48, 1, 90).rotate(0, 270 + ta);
      r(Q(
        O(
          n(p(25, 1), d.translate(0, 2).scale(8, 1, 8), X(.35, 0, 0, .3)),
          n(p(R), d.translate(7).scale(9, 5, 2), X(.3, 0, 0, .3)),
          n(p(R), d.translate(0, 0, -7).scale(2, 5, 9), X(.3, 0, 0, .3)),
        ),
      ));
      r(A);
    });
    r(p(R), d.translate(-56, 1, 106).scale(.7, .8, 2.5), X(.7, .7, .7, .2));
    r(p(R), d.translate(-48, 1, 98).scale(2.5, .8, .7), X(.7, .7, .7, .2));
    r(p(R), d.translate(-39, .4, 90).scale(2, 1, 2), X(.7, .7, .7, .3));
    r(p(R), d.translate(-34.2, .4, 90).scale(3, 1, 3), X(.7, .7, .7, .3));
    $b(d.translate(-34, 2.7, 96).rotate(-12, 0));
    r(p(5), d.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), X(.2, .5, .5, .6));
    [X(.1, .55, .45, .2), X(.2, .5, .5, .3), X(.3, .45, .55, .4)].map((e, l) =>
      u(G => {
        G.h = () =>
          d.translate(
            0,
            (1 - L[13].i) * (1 - L[14].i) * (l ? 0 : 3) + Pa(L[13].i, L[14].i) * Math.sin(1.5 * a + 1.5 * l) * 4,
          );
        r(p(R), d.translate(-23.5, .5, 90 + 6.8 * l).scale(1 === l ? 2 : 3.3, 1, 3.3), e);
        2 === l && r(p(R), d.translate(-29.1, .4, 90).scale(2.1, 1, 3), X(.7, .7, .7, .3));
        1 === l
          && r(p(R), d.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), X(.6, .6, .7, .3));
      })
    );
    r(Q(
      O(
        n(p(6, 0, 0, .3), d.translate(0, -0.92, 95).scale(14, 2, 14), X(.8, .8, .8, .2)),
        n(p(5), d.translate(0, 0, 95).scale3d(6), X(.3, .3, .3, .5)),
      ),
    ));
    [8, -6.1].map((e, l) =>
      Xa(
        3,
        G =>
          r(
            N,
            d.translate(6 * G - 6, e - (1 & G), 111 - .2 * (1 & G) - l),
            1 & G ? X(.5, .5, .5, .3) : X(.35, .35, .35, .5),
          ),
      )
    );
    [-1, 1].map(e => r(t, d.translate(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), X(1, 1, .8)));
    $b(d.translate(0, 1.7, 82).rotate(0, 180));
    r(p(5), d.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(.5, .3, .3, .4));
    r(Q(
      O(
        Zb(
          n(p(R), d.translate(0, 16, 110.5).scale(12, 1, 3), X(.5, .3, .3, .4)),
          n(p(R), d.translate(0, 16, 111).scale(3, 1, 3.8), X(.5, .3, .3, .4)),
        ),
        n(p(5), d.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(.5, .3, .3, .4)),
      ),
    ));
    u(e => {
      e.h = () => {
        const l = Math.sin(a);
        return d.translate(-2 * l).rotate(0, 0, 25 * l);
      };
      r(p(3), d.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), X(.5, .3, .3, .4));
      [22, 30].map(l => {
        r(p(6), d.translate(0, 16, l + 95).scale(3, 1, 2.3).rotate(0, 90), X(.7, .7, .7, .4));
        r(p(R), d.translate(0, 6.2, l + 95).scale(.5, 11, .5), X(.5, .3, .3, .4));
      });
    });
    r(p(6), d.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(.5, .6, .7, .3));
    r(p(R), d.translate(0, 16, 129).scale(1.5, 1, 2), X(.5, .6, .7, .3));
    r(p(7), d.translate(0, 16.2, 133).scale(5, 1, 5), X(.4, .5, .6, .4));
    u(e => {
      e.h = () => {
        const l = Pa(Pa((L[14].g + L[14].i) / 2, L[13].i), (L[15].g + L[15].i) / 2);
        return d.translate(0, 16 * l, 8.5 * Oa(2 * l - 1) + 95);
      };
      r(p(5), d.scale(5, 1.1, 5), X(.5, .3, .3, .4));
      r(p(5), d.scale(5.5, .9, 5.5), X(.25, .25, .25, .4));
      $b(d.translate(0, 1.5, -1).rotate(0, 180));
    });
    ac(d.translate(0, 3, 95), ...qb(9).map(({ x: e, z: l }) => [9 * e, 9 * l, 4]));
    ac(d.translate(0, 19, 134), [0, 0, 3.5]);
  });
  Ka = [
    u(() => {
      [0, 180].map(x => r(t, d.rotate(0, x).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), X(1, 1, .8)));
      r(sb(20), d.translate(0, 1).scale(.5, .5, .5), X(1, .3, .4));
      const v = n(
        Q(O(p(15, 1), n(p(R), d.translate(0, 0, 1).scale(2, 2, .5)))),
        d.rotate(-90, 0).scale(.1, .05, .1),
        X(.3, .3, .3),
      );
      [-1, 1].map(x => r(v, d.translate(.2 * x, 1.2, .4).rotate(0, 20 * x, 20 * x)));
      r(p(R), d.translate(0, .9, .45).scale(.15, .02, .06), X(.3, .3, .3));
      r(sb(20), d.scale(.7, .8, .55), X(1, .3, .4));
    }),
    ...[-1, 1].map(v =>
      u(() => {
        r(p(10, 1), d.translate(.3 * v, -0.8).scale(.2, .7, .24), X(1, .3, .4));
      })
    ),
  ];
  Ha = u(() => {
    r(p(6, 1), d.scale(.13, 1.4, .13), X(.3, .3, .5, .1));
    r(p(8, 1), d.translate(0, 1).scale(.21, .3, .21), X(1, .5, .2));
    r(p(3), d.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), X(.2, .2, .2, .1));
  }, 0);
  Ja = u(() => {
    r(p(6).slice(0, -1), d.scale(.77, 1, .77), X(1, .3, .5));
  }, 0);
  Ia = u(() => {
    r(
      sb(30, 24, (v, x, w) => {
        const C = x / 24, P = v * Math.PI * 2 / 30, A = C ** .6 * Math.PI / 2;
        v = C * C * Math.sin(v * Math.PI * 14 / 30) / 4;
        return 23 === x
          ? { x: w.D = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(P) * Math.sin(A),
            y: Math.cos(C * Math.PI) - C - v,
            z: Math.sin(P) * Math.sin(A) + Math.sin(v * Math.PI * 2) / 4,
          };
      }),
      d.scale3d(.7),
      X(1, 1, 1),
    );
    [-1, 1].map(v => r(sb(12), d.translate(.16 * v, .4, -0.36).scale3d(.09)));
  }, 0);
});
