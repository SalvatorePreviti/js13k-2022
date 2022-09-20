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
  d = .066,
  Da,
  Ea,
  Fa,
  Ga,
  Ha,
  Ia,
  Ja,
  Ka;
const La = Math.PI / 180,
  e = new DOMMatrix(),
  Ma = (b, c) => c < b ? b : c,
  Na = b => 0 > b ? -b : b,
  Ta = b => 0 > b ? 0 : 1 < b ? 1 : b,
  Ua = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)),
  Va = b => Math.atan2(Math.sin(b *= La), Math.cos(b)) / La,
  Wa = (b, c, g) => {
    b *= La;
    c = (c * La - b) % (2 * Math.PI);
    return (b + (2 * c % (2 * Math.PI) - c) * (0 > g ? 0 : 1 < g ? 1 : g)) / La;
  },
  Xa = (b, c, g, k) => {
    var n = c - b;
    b += (0 > c - b ? -1 : 1) * Ma(0, (0 > n ? -n : n) ** .9 - g) * k * 2;
    return b + (c - b) * Ta(k / 7);
  },
  Ya = (b, c) => Array.from(Array(b), (g, k) => c(k)),
  Za = (b, c, g, k) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (k + g) / (g - k), -1, 0, 0, 2 * k * g / (g - k), 0],
  $a = ({ x: b, y: c, z: g }, k) => b * k.x + c * k.y + g * k.z,
  ab = ({ x: b, y: c, z: g }) => {
    var k = h;
    return Math.hypot(b - k.x, c - k.y, g - k.z) || 0;
  },
  bb = b => {
    let c = 0, g = 0, k = 0, n, q = b.at(-1);
    for (n of b) {
      c += (q.y - n.y) * (q.z + n.z), g += (q.z - n.z) * (q.x + n.x), k += (q.x - n.x) * (q.y + n.y), q = n;
    }
    return n = Math.hypot(c, g, k), c /= n, g /= n, k /= n, { x: c, y: g, z: k, w: c * q.x + g * q.y + k * q.z };
  },
  eb = new Float32Array(16),
  fb = (
    b,
    c = eb,
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
    c);
var gb = -11, hb = 17, ib = -90, mb = 0, nb = 0;
const ob = (b, c, g) => (b.D = g, b.A = c, b),
  pb = (b, c, g = b.A) =>
    ob(
      b.map(k =>
        ((
          { x: n, y: q, z: C },
          w,
        ) => ({ x: n, y: q, z: C } = w.transformPoint({ x: n, y: q, z: C }), { x: n, y: q, z: C }))(k, c)
      ),
      g,
      b.D,
    ),
  l = (b, c, g) => b.map(k => pb(k, c, g)),
  qb = (b, c = 0) =>
    Ya(b, g => {
      const k = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: .01 > (0 > k ? -k : k) ? k : 0 > k ? k - c : k + c };
    }),
  rb = (b, c, g) =>
    b.map((k, n, { length: q }) => ob([k, c[q - n - 1], c[q - (n + 1) % q - 1], b[(n + 1) % q]], b.A, g)),
  p = (b, c, g = 0, k) => {
    k = b.length ? b : qb(b, k);
    b = pb(k, e.translate(0, 1).scale3d(0 < g ? g : 1));
    g = pb(k, e.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse();
    return [...rb(g, b, c), b, g];
  },
  sb = (
    b,
    c = b,
    g = (
      k,
      n,
    ) => (n *= Math.PI / c,
      { x: Math.cos(k *= 2 * Math.PI / b) * Math.sin(n), y: Math.cos(n), z: Math.sin(k) * Math.sin(n) }),
  ) => {
    const k = [];
    for (let n = 0; b > n; n++) {
      for (let q = 0; c > q; q++) {
        const C = ob([], 0, 1);
        k.push(C);
        C.push(g(n, q, C));
        q && C.push(g((n + 1) % b, q, C));
        c - 1 > q && C.push(g((n + 1) % b, q + 1 % c, C));
        C.push(g(n, q + 1 % c, C));
      }
    }
    return k;
  },
  tb = (b, c, g, k) => {
    let n = 0, q = 0, C = 0, w = 1 / 0, F = -1 / 0, S = 1 / 0, z = -1 / 0, y = 1 / 0, x = -1 / 0;
    const t = 1.1 * (g - c),
      D = (new DOMMatrix(Za(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
    b = Ya(8, v => {
      v = D.transformPoint({ x: 4 & v ? 1 : -1, y: 2 & v ? 1 : -1, z: 1 & v ? 1 : -1 });
      return n -= v.x = (t * v.x | 0) / t / v.w,
        q -= v.y = (t * v.y | 0) / t / v.w,
        C -= v.z = (t * v.z | 0) / t / v.w,
        v;
    });
    c = e.rotate(298, 139).translateSelf(n / 8, q / 8, C / 8);
    return pb(b, c).map(({ x: v, y: f, z: m }) => {
      w = w < v ? w : v;
      F = v < F ? F : v;
      S = S < f ? S : f;
      z = f < z ? z : f;
      y = y < m ? y : m;
      x = m < x ? x : m;
    }),
      y *= 0 > y ? k : 1 / k,
      x *= 0 < x ? k : 1 / k,
      e.scale(2 / (F - w), 2 / (z - S), 2 / (y - x)).translateSelf((F + w) / -2, (z + S) / -2, (y + x) / 2)
        .multiplySelf(c);
  },
  ub = [],
  r = (b, c = e, g) => Da.s.push(...l(b, c, g)),
  u = (b, c = 1) => {
    const g = Da;
    c = { l: e, F: ub.length, H: c, s: [] };
    return ub.push(Da = c), b(c), Da = g, c;
  },
  vb = (b, c = 35633) => {
    c = J.c6x(c);
    return J.s3c(c, b), J.c6a(c), c;
  },
  wb = (b, c) => {
    const g = {}, k = J.c1h();
    return J.abz(k, b), J.abz(k, vb(c, 35632)), J.l8l(k), n => n ? g[n] || (g[n] = J.gan(k, n)) : J.u7y(k);
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
    Fa || !ba ? Ib.disconnect() : Ib.connect(Jb.destination);
    b4.innerHTML = "Music: " + ba;
  },
  Lb = (b = !1) => {
    if (Fa !== b) {
      Fa = b;
      Ea = 0;
      try {
        b ? document.exitPointerLock() : Ib.start();
      } catch {
      }
      document.body.className = b ? "l m" : "l";
      Kb();
    }
  },
  Mb = () => {
    let b, c, g, k, n, q, C, w, F, S, z, y;
    const x = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Hb.length = fa = ia = 0;
      k = w = void 0;
      document.hidden && Lb(!0);
    };
    document.onvisibilitychange = onresize = onblur = x;
    b1.onclick = () => Lb();
    b2.onclick = () => {
      Lb();
      Ea = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      ba = !ba;
      Kb();
    };
    b5.onclick = () => Lb(!0);
    onclick = t => {
      y = 1;
      Fa || (t.target === hC && (Hb[5] = !0), Ea && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: t, target: D, type: v, repeat: f }) => {
      f || ((D = !!v[5] && D === document.body) && ("Escape" === t || "Enter" === t && Fa)
        ? Fa && !y || Lb(!Fa)
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
          5 === t ? D && (Hb[t] = 1) : Hb[t] = D));
    };
    onmousemove = ({ movementX: t, movementY: D }) => {
      Ea && (t || D) && (nb += .1 * t, mb += .1 * D);
    };
    oncontextmenu = () => !1;
    hC.ontouchstart = t => {
      if (!Fa) {
        for (const { pageX: D, pageY: v, identifier: f } of t.changedTouches) {
          Ea && D > hC.clientWidth / 2
            ? void 0 === w && (w = f, q = D, C = v, F = 0, S = nb, z = mb)
            : void 0 === k && (k = f, c = D, g = v, n = 0);
        }
        b = la;
      }
    };
    hC.ontouchmove = ({ changedTouches: t }) => {
      if (!Fa) {
        for (const { pageX: D, pageY: v, identifier: f } of t) {
          if (w === f && (nb = S + (D - q) / 3, mb = z + (v - C) / 3, F = 1), k === f) {
            t = (c - D) / 20;
            let m = 0 > t ? -1 : 1, E = m * t;
            .4 < E && (n = 1, fa = m * E ** 1.5, 1.5 < E && (c = D + 20 * m));
            .4 < (E = (m = 0 > (t = (g - v) / 20) ? -1 : 1) * t)
              && (n = 1, ia = m * E ** 1.5, 1.5 < E && (g = v + 20 * m));
          }
        }
      }
    };
    hC.ontouchend = t => {
      let D;
      t.preventDefault();
      for (const v of t.changedTouches) {
        v.identifier === w
          ? (w = void 0, F || (D = 1), F = 0)
          : v.identifier === k
          ? (k = void 0, ia = fa = 0, n || (D = 1), n = 0)
          : D = 1;
      }
      D && t.target === hC && b && (t = la - b, .06 < t && .7 > t && (Hb[5] = !0));
    };
    x();
    Lb(!0);
  },
  L = (b, c, g) => b + (c - b) * Ta(1 - Math.exp(-g * d)),
  Nb = ({ j: b }) => b,
  M = [],
  Ob = [],
  Pb = () => {
    var b = Ua(M[12].g, M[13].g);
    a > na && (h4.innerHTML = "", na = 0);
    var c = L(ya, 0, 1);
    ya = c + (Va(ya + 60 * d) - c) * Ta(M[5].g - M[6].i);
    c = L(sa, 0, 5);
    sa = c + (Va(sa + 56 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
    c = L(ta, 0, 4);
    ta = c + (Va(ta + 48 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
    b = 2 * M[9].i - 1;
    Ca = L(Ca, M[9].i, .2 + .3 * (0 > b ? -b : b));
    Ba = L(Ba, za ? Ba + (-9 - Ba) * Ta(1.5 * d) : Ta(a / 3), 1);
    M[0].j && .7 < M[0].g && (13 > ma
      ? (za || (h4.innerHTML = "Not leaving now, there are souls to catch!", na = a + 3), M[0].j = 0)
      : za
        || (za || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", na = a + 1 / 0), za = 1));
    for (const g of ub) {
      g.h && (g.l = g.h(g));
    }
    for (const g of M) {
      g.h();
    }
    for (const g of Ob) {
      g.h();
    }
  },
  Qb = () => {
    ma = Ob.reduce((b, c) => b + c.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ma];
  },
  Rb = () => {
    Qb();
    localStorage.DanteSP22 = JSON.stringify([M.map(Nb), Ob.map(Nb), oa, a, Ca]);
  },
  Sb = () => {
    let b = 0, c;
    const g = [],
      k = [],
      n = [],
      q = [],
      C = new Map(),
      w = new Int32Array(8),
      F = y => {
        let { x, y: t, z: D } = c[y];
        z[0] = x;
        z[1] = t;
        z[2] = D;
        y = "" + (c.D ? S : w);
        let v = C.get(y);
        return void 0 !== v
          ? (x = 3 * v, q[x] = (q[x++] + w[5]) / 2, q[x] = (q[x++] + w[6]) / 2, q[x] = (q[x] + w[7]) / 2)
          : (C.set(y, v = C.size), k.push(x, t, D, z[3]), n.push(w[4]), q.push(w[5], w[6], w[7])),
          v;
      },
      S = new Int32Array(w.buffer, 0, 5),
      z = new Float32Array(w.buffer);
    for (const y of ub) {
      for (c of (z[3] = y.H ? y.F : 0, y.s)) {
        const { x, y: t, z: D } = bb(c);
        w[4] = 0 | c.A;
        w[5] = 32767 * x;
        w[6] = 32767 * t;
        w[7] = 32767 * D;
        for (let v = 2, f = F(0), m = F(1); c.length > v; ++v) {
          g.push(f, m, m = F(v));
        }
      }
      y.s = null;
      y.v = b;
      y.G = b = g.length;
    }
    J.b11(34963, J.c1b());
    J.b2v(34963, new Uint16Array(g), 35044);
    J.b11(34962, J.c1b());
    J.b2v(34962, new Float32Array(k), 35044);
    J.v7s(0, 4, 5126, !1, 0, 0);
    J.b11(34962, J.c1b());
    J.b2v(34962, new Int16Array(q), 35044);
    J.v7s(1, 3, 5122, !0, 0, 0);
    J.b11(34962, J.c1b());
    J.b2v(34962, new Uint32Array(n), 35044);
    J.v7s(2, 4, 5121, !0, 0, 0);
    J.e3x(0);
    J.e3x(1);
    J.e3x(2);
  },
  Tb = (b, c) => {
    var g, k, n, q = c.C;
    for (var C = 0; q.length > C; ++C) {
      if (-0.00008 > (n = $a(b, q[C]) - b.w) ? k = c : 8e-5 < n && (g = c), k && g) {
        k = [];
        n = [];
        q = c.C;
        C = c.B;
        let w = q.at(-1), F = $a(b, w) - b.w;
        for (const S of q) {
          g = $a(b, S) - b.w,
            8e-5 > F && n.push(w),
            -0.00008 < F && k.push(w),
            (8e-5 < F && -0.00008 > g || -0.00008 > F && 8e-5 < g)
            && (F /= g - F,
              w = { x: w.x + (w.x - S.x) * F, y: w.y + (w.y - S.y) * F, z: w.z + (w.z - S.z) * F },
              k.push(w),
              n.push(w)),
            w = S,
            F = g;
        }
        return {
          o: 2 < k.length && { C: ob(k, q.A, q.D), B: C, u: c },
          m: 2 < n.length && { C: ob(n, q.A, q.D), B: C, u: c },
        };
      }
    }
    return { o: g, m: k };
  },
  Ub = (b, c, g = bb(c.C)) => {
    if (b) {
      const { o: k, m: n } = Tb(b, c);
      k || n || b.s.push(c);
      k && (b.o = Ub(b.o, k, g));
      n && (b.m = Ub(b.m, n, g));
    } else {
      b = { x: g.x, y: g.y, z: g.z, w: g.w, s: [c], o: 0, m: 0 };
    }
    return b;
  },
  Vb = (b, c, g) => {
    const k = [],
      n = (q, C) => {
        let { o: w, m: F } = Tb(q, C);
        w || F || (0 < g * $a(q, c) ? w = C : F = C);
        w && (q.o ? n(q.o, w) : k.push(w));
        F && q.m && n(q.m, F);
      };
    for (const q of c.s) {
      n(b, q);
    }
    return k;
  },
  Wb = (b, c) => b && (c(b), Wb(b.o, c), Wb(b.m, c)),
  Xb = b => b.length ? b.reduce((c, g) => Ub(c, { C: g, B: 0, u: 0 }), 0) : b,
  Yb = b => (Wb(b, c => {
    const g = c.m;
    c.m = c.o;
    c.o = g;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const k of c.s) {
      k.B = !k.B;
    }
  }),
    b),
  Zb = (...b) =>
    b.reduce((c, g) => {
      const k = [];
      if (c = Xb(c), g) {
        g = Xb(g);
        Wb(c, n => n.s = Vb(g, n, 1));
        Wb(g, n => k.push([n, Vb(c, n, -1)]));
        for (const [n, q] of k) {
          for (const C of q) {
            Ub(c, C, n);
          }
        }
      }
      return c;
    }),
  O = (b, ...c) => Yb(Zb(Yb(Xb(b)), ...c)),
  P = b => {
    const c = new Map(),
      g = new Map(),
      k = n => {
        if (n.u) {
          const q = c.get(n.u);
          q ? (g.delete(q), n = k(n.u)) : c.set(n.u, n);
        }
        return n;
      };
    return Wb(b, n => {
      for (const q of n.s) {
        g.set(k(q), q.B);
      }
    }),
      Array.from(g, ([{ C: n }, q]) => {
        const C = n.map(({ x: w, y: F, z: S }) => ({ x: w, y: F, z: S }));
        return ob(q ? C.reverse() : C, n.A, n.D);
      });
  },
  h = { x: 0, y: 0, z: 0 },
  Q = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  $b = b => {
    const c = Da,
      g = M.length,
      k = {
        j: 0,
        g: 0,
        i: 0,
        u: c,
        h() {
          const n = k.j, q = k.g, C = k.i, w = c.l.multiply(b);
          k.I = w;
          2.9 > ab(w.transformPoint()) && Hb[5] && (.3 > q || .7 < q)
            && (k.j = n ? 0 : 1, g && (za || (h4.innerHTML = "* click *", na = a + 1)), oa = g, Rb());
          k.g = L(q, n, 4);
          k.i = L(C, n, 1);
          k.l = w.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    M.push(k);
    r(p(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), X(.4, .5, .5));
    r(p(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), X(.4, .5, .5));
    r(p(Q), b.translate(0, -0.4).scale(.5, .1, .5), X(.5, .5, .4));
  },
  ac = (b, ...c) => {
    let g = -1, k = 0, n = 0, q = 0, C = 0, w = 0, F = 3, S = 1;
    const z = {
        j: 0,
        h() {
          if (!z.j) {
            var R = 1, V = 1 / 0;
            for (var W of t) {
              var U = W.w, ea = Math.hypot(v - W.x, f - W.z), Y = ea - U;
              Z ||= ea < U;
              0 < Y && V > Y && (V = Y, D = W);
              U = ea / U;
              R = R < U ? R : U;
            }
            if (!Z) {
              V = D.x;
              W = D.z;
              U = D.w;
              ea = v - V;
              Y = f - W;
              let T = Math.hypot(ea, Y), ua = Math.atan2(-Y, ea);
              S && (n = (Math.random() - .5) * Math.PI / 2, F = Ma(1, F / (1 + Math.random())));
              ua += n;
              g = -Math.cos(ua);
              k = Math.sin(ua);
              .1 < T && (T = (T < U ? T : U) / (T || 1), v = ea * T + V, f = Y * T + W);
            }
            S = Z;
            F = L(F, 3 + 6 * (1 - R), 3 + R);
            m = L(m, v = L(v, v + g, F), F);
            E = L(E, f = L(f, f + k, F), F);
            q = Wa(q, Math.atan2(m - C, E - w) / La - 180, 3 * d);
            C = m;
            w = E;
            R = (z.l = y.l.multiply(b.translate(m, 0, E).rotateSelf(0, q, 7 * Math.sin(1.7 * a)))).transformPoint();
            if (1.5 > ab(R)) {
              z.j = 1;
              R = [
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
              za || (h4.innerHTML = R, na = a + Z);
              Rb();
            }
          }
          z.j
            && (R = x % 4 - 2,
              z.l = ub[2].l.translate(
                x % 4 * 1.2 - 1.7 + Math.sin(a + x) / 7,
                -2,
                1.7 * (x / 4 | 0) - 5.5 + (0 > R ? -R : R) + Math.cos(a / 1.5 + x) / 6,
              ));
        },
      },
      y = Da,
      x = Ob.length,
      t = c.map(([R, V, W]) => ({ x: R, z: V, w: W }));
    let D = t[0], { x: v, z: f } = D, m = v, E = f;
    Ob.push(z);
  },
  bc = new Float32Array(624),
  cc = (b, c, g) => {
    g = g ? Ja : Ia;
    if (Fa) {
      g = e.rotate(0, 40 * Math.sin(la) - 70);
      for (var { F: k } of Ka) {
        fb(g, bc, k - 1);
      }
      J.uae(b, !1, bc);
      J.d97(4, Ka[2].G - Ka[0].v, 5123, 2 * Ka[0].v);
    } else {
      for (k = 0; ub.length > k; ++k) {
        const { H: n, F: q, l: C } = ub[k];
        n && fb(C, bc, q - 1);
      }
      J.uae(b, !1, bc);
      J.d97(4, (c ? Ka[2].G : Ka[0].v) - 3, 5123, 6);
      for (c = 0; M.length > c; ++c) {
        const { l: n, g: q } = M[c];
        fb(n, bc, c);
        bc[16 * c + 15] = 1 - q;
      }
      J.uae(b, !1, bc);
      J.das(4, Ha.G - Ha.v, 5123, 2 * Ha.v, M.length);
      for (c = 0; 13 > c; ++c) {
        fb(Ob[c].l, bc, c);
      }
      J.uae(b, !1, bc);
      J.das(4, g.G - g.v, 5123, 2 * g.v, 13);
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
  X = NO_INLINE((b, c, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b),
  J = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const b in J) {
  J[b[0] + [...b].reduce((c, g, k) => (c * k + g.charCodeAt(0)) % 434, 0).toString(36)] = J[b];
}
const Jb = new AudioContext(), Ib = Jb.createBufferSource();
setTimeout(() => {
  let b = 0, c = 6;
  const g = () => {
      if (h4.innerHTML += ".", !--c) {
        let y = 0, x = 0, t = 1, D = 0, v = 0, f = 0, m = !1, E, R, V, W, U, ea, Y, Z, T, ua, Oa, Pa;
        const ha = { x: 0, y: 0, z: 0 },
          jb = new Int32Array(256),
          kb = () => {
            const { u: A, I: B } = M[oa], { x: H, y: K, z: I } = B.transformPoint({ x: 0, y: 8, z: -3 });
            h.x = ha.x = H;
            h.y = ha.y = Y = K;
            h.z = ha.z = I;
            R =
              ea =
              U =
              V =
              W =
                0;
            t = 1;
            y = x = A?.F || 1;
          },
          Db = () => {
            let A = 0, B = 0, H = 0, K = 0, I = 0;
            jb.fill(0);
            for (let G = 0; 31 > G; ++G) {
              let ca = 0;
              const da = 512 * G;
              for (let pa = 0; 128 > pa; pa++) {
                let aa = da + 4 * pa;
                var N = (qa[aa] + qa[1 + aa]) / 255;
                if (aa = qa[2 + aa], 14 < pa && 114 > pa && (ca += N), aa && N) {
                  N = jb[aa] + 1, jb[aa] = N, A > N || (A = N, B = aa);
                }
              }
              3 > ca && 5 < G && (K += G / 32);
              3 < ca && (7 < G && (H += G / 15), I = 1);
            }
            B && (I = 1);
            t ? B && (t = 0, x = B) : x = B || y;
            y = B;
            R = I;
            V = L(V, I ? 6.5 : 8, 4);
            ha.y += H / 41 - (I ? 1 : V) * K / 41 * V * d;
          },
          Eb = () => {
            for (let I = 32; 128 > I; I += 2) {
              var A = 0;
              let N = 0;
              var B = 0;
              let G = 0;
              const ca = 512 * I;
              for (let da = 1 & I; 128 > da; da += 2) {
                var H = ca + 4 * da;
                const pa = ca + 4 * (127 - da), aa = qa[H] / 255, va = qa[1 + pa] / 255;
                var K = da / 63.5 - 1;
                K = 1 - (0 > K ? -K : K);
                if (
                  10 < da && 118 > da
                  && (A = Ma(A, Ma(aa * K, aa * qa[pa] / 127.5)), N = Ma(N, Ma(va * K, va * qa[1 + H] / 255))),
                    54 > da || 74 < da
                ) {
                  H = (1 - K) * (va < aa ? aa : va) / 3,
                    .001 < H && (64 > da && H > B ? B = H : 64 < da && H > G && (G = H));
                }
              }
              B = G - B;
              A = N - A;
              (0 > B ? -B : B) > (0 > Z ? -Z : Z) && (Z = B);
              (0 > A ? -A : A) > (0 > T ? -T : T) && (T = A);
            }
          },
          Fb = () => {
            T = Z = 0;
            NO_INLINE(Db)();
            NO_INLINE(Eb)();
            var A = fa + (Hb[0] ? 1 : 0) + (Hb[2] ? -1 : 0),
              B = ia + (Hb[1] ? 1 : 0) + (Hb[3] ? -1 : 0),
              H = navigator.getGamepads()[0];
            if (H) {
              var K = va => aa[va]?.pressed || 0 < aa[va]?.value;
              const aa = H.buttons;
              H = H.axes;
              var I = K(1) || K(3) || K(2) || K(0);
              I !== m && (m = I) && (Hb[5] = 1);
              A += (.2 < Na(-H[0]) ? -H[0] : 0) + (K(14) ? 1 : 0) + (K(15) ? -1 : 0);
              B += (.2 < Na(-H[1]) ? -H[1] : 0) + (K(12) ? 1 : 0) + (K(13) ? -1 : 0);
              Ea && (.3 < Na(H[2]) && (nb += 80 * H[2] * d), .3 < Na(H[3]) && (mb += 80 * H[3] * d));
            }
            .05 > (0 > B ? -B : B) && (B = 0);
            .05 > (0 > A ? -A : A) && (A = 0);
            K = Math.atan2(B, A);
            H = Ta(Math.hypot(B, A));
            I = (A = H * Math.cos(K), B = H * Math.sin(K), Ta(1 - 5 * Ma(0 > Z ? -Z : Z, 0 > T ? -T : T)));
            var N =
              (x || (Z += U * I * d, T += ea * I * d),
                U = L(U, 0, R ? 8 : 4),
                ea = L(ea, 0, R ? 8 : 4),
                W = L(W, R ? (A || B ? R ? 7 : 4 : 0) * I : 0, R ? .1 < I ? 10 : A || B ? 5 : 7 : 1),
                Ea ? nb * La : Math.PI);
            I = Math.sin(N) * W * d;
            N = Math.cos(N) * W * d;
            I = (Z -= A * N - B * I, T -= A * I + B * N, 1 === ub[x].H && ub[x].l || e);
            N = I.inverse();
            if (
              N.m41 = 0,
                N.m42 = 0,
                N.m43 = 0,
                { x: Z, z: T } = N.transformPoint({ x: Z, z: T, w: 0 }),
                ha.x += Z,
                ha.z += T,
                x !== E
            ) {
              E = x;
              const { x: aa, y: va, z: zb } = I.inverse().transformPoint(h);
              ha.x = aa;
              ha.y = va;
              ha.z = zb;
            }
            N = h.x;
            const G = h.z, { x: ca, y: da, z: pa } = I.transformPoint(ha);
            I = (h.x = ca, h.y = da, h.z = pa, Na(Y - da));
            (Y = L(Y, da + .1, 50 * I + 5),
                x && (U = (h.x - N) / d, ea = (h.z - G) / d),
                (A || B) && (D = 90 - K / La),
                v = Wa(v, D, 8 * d),
                f += (H - f) * Ta(10 * d),
                ua = Xa(ua, h.x, .5, d),
                Oa = Xa(Oa, h.y, 2, d),
                Pa = Xa(Pa, h.z, .5, d),
                Ea)
              ? (A = 200 * t,
                gb = L(gb, h.x, 18 + A),
                hb = L(hb, h.y + 1.5, 15 + A),
                ib = L(ib, h.z, 18 + A),
                mb = Ma(87 > mb ? mb : 87, -87))
              : (gb = Xa(gb, ua, 1, 2 * d),
                hb = Xa(hb, Oa + 13 + 15 * t, 4, 2 * d),
                ib = Xa(ib, Pa + -18, 1, 2 * d),
                A = ib - Pa,
                1 < (0
                      > A
                    ? -A
                    : A)
                && (B = gb - ua,
                  K = hb - Oa,
                  nb = 270 + Math.atan2(A, B) / La,
                  mb = 90 - Math.atan2(Math.hypot(A, B), K) / La));
            nb = Va(nb);
          },
          Aa = A => {
            if (J.i34()) {
              location.reload();
            } else {
              requestAnimationFrame(Aa);
              const B = (A - (Ga || A)) / 1e3;
              d = Fa ? Hb[5] = 0 : .066 < B ? .066 : B;
              a += d;
              la += B;
              Ga = A;
              0 < d
                && (J.b6o(36160, Qa),
                  J.fa7(),
                  J.r9r(0, 0, 128, 128, 6408, 5121, qa),
                  J.iay(36009, [36064, 36096]),
                  J.iay(36008, [36064, 36096]),
                  NO_INLINE(Fb)(),
                  Pb(),
                  1 === x && (M[9].j = -15 > h.x && 0 > h.z ? 1 : 0),
                  (-25 > h.x || 109 > h.z ? -25 : -9) > h.y && kb(),
                  Hb[5] = 0);
              A = Fa
                ? e.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ta(hC.clientWidth / 1e3))
                : e.rotate(-mb, -nb, -0).invertSelf().translateSelf(-gb, -hb, -ib);
              0 < d
                && (ja(),
                  J.b6o(36160, Qa),
                  J.v5y(0, 0, 128, 128),
                  J.c4s(16640),
                  J.cbf(!0, !1, !0, !1),
                  J.uae(ja("b"), !1, fb(e.rotate(0, 180).invertSelf().translateSelf(-h.x, -h.y, .3 - h.z))),
                  cc(ja("c"), 0, 1),
                  J.c4s(256),
                  J.cbf(!1, !0, !0, !1),
                  J.uae(ja("b"), !1, fb(e.translate(-h.x, -h.y, -h.z - .3))),
                  cc(ja("c"), 0, 1),
                  J.f1s());
              ra();
              J.b6o(36160, lb);
              J.v5y(0, 0, 2048, 2048);
              cb[0](tb(A, .3, 55, 10));
              cb[1](tb(A, 55, 177, 11));
              ka();
              J.b6o(36160, null);
              J.v5y(0, 0, J.drawingBufferWidth, J.drawingBufferHeight);
              J.cbf(!0, !0, !0, !0);
              J.c4s(16640);
              cb[0]();
              cb[1]();
              J.uae(ka("a"), !1, Za(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
              J.uae(ka("b"), !1, fb(A));
              J.ubu(ka("k"), gb, hb, ib);
              cc(ka("c"), !Ea, 0);
              wa();
              J.ubu(wa("j"), J.drawingBufferWidth, J.drawingBufferHeight, la);
              Fa ? J.ubu(wa("k"), 0, 0, 0) : J.ubu(wa("k"), gb, hb, ib);
              J.uae(wa("b"), !1, fb(A.inverse()));
              J.d97(4, 3, 5123, 0);
              J.b6o(36160, Qa);
              J.f1s();
            }
          },
          qa = new Uint8Array(65536),
          db = n;
        var z = (NO_INLINE(Sb)(),
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
            z,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          ka = wb(
            z,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          lb = J.c5w(),
          Qa = J.c5w();
        z = J.c3z();
        const xa = J.c25(),
          cb = Ya(2, A => {
            const B = new Float32Array(16), H = J.c25(), K = ka(A ? "j" : "i");
            return J.b6o(36160, lb),
              J.d45([0]),
              J.r9l(0),
              ka(),
              J.ubh(ka(A ? "h" : "g"), A),
              J.a4v(33984 + A),
              J.b9j(3553, H),
              J.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              J.t2z(3553, 10241, 9729),
              J.t2z(3553, 10240, 9729),
              J.t2z(3553, 34893, 515),
              J.t2z(3553, 34892, 34894),
              J.t2z(3553, 10243, 33071),
              J.t2z(3553, 10242, 33071),
              I => {
                I
                  ? (fb(I, B), J.uae(ra("b"), !1, B), J.fas(36160, 36096, 3553, H, 0), J.c4s(256), cc(ra("c"), !Ea, 0))
                  : J.uae(K, !1, B);
              };
          });
        wa();
        J.ubh(wa("q"), 3);
        ja();
        J.uae(ja("a"), !1, Za(1.4, .59, 1e-4, 1));
        ka();
        J.ubh(ka("q"), 3);
        J.e8z(2929);
        J.e8z(2884);
        J.c70(1);
        J.c7a(1029);
        J.d4n(515);
        J.c5t(0, 0, 0, 1);
        J.b6o(36160, Qa);
        J.bb1(36161, z);
        J.r4v(36161, 33189, 128, 128);
        J.f8w(36160, 36096, 36161, z);
        J.a4v(33987);
        J.b9j(3553, xa);
        J.fas(36160, 36064, 3553, xa, 0);
        J.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        J.a4v(33987);
        J.b9j(3553, J.c25());
        J.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, db);
        J.gbn(3553);
        J.t2z(3553, 10241, 9987);
        J.t2z(3553, 10240, 9729);
        Ka.map((A, B) => {
          A.h = B
            ? () =>
              Ka[0].l.translate(0, f * Ta(.45 * Math.sin(9.1 * a + Math.PI * (B - 1) - Math.PI / 2))).rotateSelf(
                f * Math.sin(9.1 * a + Math.PI * (B - 1)) * .25 / La,
                0,
              )
            : () => e.translate(h.x, Y, h.z).rotateSelf(0, v);
        });
        try {
          const [A, B, H, K, I] = JSON.parse(localStorage.DanteSP22);
          M.map((N, G) => N.g = N.i = N.j = G ? 0 | A[G] : 0);
          Ob.map((N, G) => N.j = 0 | B[G]);
          oa = H;
          a = K;
          Ca = I;
        } catch (A) {
        }
        Ba = 0 > oa ? 0 : 1 < oa ? 1 : oa;
        h4.innerHTML = "";
        na = 0;
        Qb();
        Pb();
        kb();
        gb = ua = h.x;
        hb = (Oa = h.y) + 13;
        ib = (Pa = h.z) + -18;
        NO_INLINE(Mb)();
        requestAnimationFrame(Aa);
      }
    },
    k = () => {
      if (5 > b) {
        var z = 0, y = b++;
        let [v, f, m, E, R, V, W, U, ea, Y, Z, T, ua, Oa, Pa, ha, jb, kb, Db, Eb, Fb] = xb[y];
        Y = Y * Y * 4;
        for (const Aa of [5513, 4562, 3891]) {
          let qa = 0, db = 0, ra, wa, ja, ka, lb;
          const Qa = [],
            xa = new Int32Array(768 * Aa),
            cb = 2 ** (T - 9) / Aa,
            A = Math.PI * 2 ** (jb - 8) / Aa,
            B = Db * Aa & -2;
          for (let H = 0; 11 >= H; ++H) {
            for (
              let K = 0, I = +"000001234556112341234556011111111112011111111112000001111112"[12 * y + H];
              32 > K;
              ++K
            ) {
              const N = (32 * H + K) * Aa;
              for (var x = 0; 4 > x; ++x) {
                if (ra = 0, I && (ra = Fb[I - 1].charCodeAt(K + 32 * x) - 40, ra += 0 < ra ? 106 : 0), ra) {
                  var t;
                  if (!(t = Qa[ra])) {
                    t = ra;
                    let G = void 0, ca = void 0;
                    var D = ra;
                    let da = 0, pa = 0;
                    const aa = 2 > y ? Bb : yb, va = 2 > y ? 1 > y ? Ab : Cb : yb, zb = new Int32Array(U + ea + Y);
                    for (let Ra = 0, Gb = 0; U + ea + Y > Ra; ++Ra, ++Gb) {
                      let Sa = 1;
                      U > Ra ? Sa = Ra / U : U + ea > Ra || (Sa = (1 - (Sa = (Ra - U - ea) / Y)) * 3 ** (-Z / 16 * Sa));
                      0 > Gb
                        || (Gb -= 4 * Aa,
                          ca = 0.003960 * 2 ** ((D + f - 256) / 12),
                          G = 0.003960 * 2 ** ((D + R - 256) / 12) * (1 + (y ? 0 : 8e-4 * 9)));
                      zb[Ra] = 80
                          * (aa(da += ca * Sa ** (m / 32)) * v + va(pa += G * Sa ** (V / 32)) * E
                            + (W ? (2 * Math.random() - 1) * W : 0))
                          * Sa | 0;
                    }
                    t = Qa[t] = zb;
                  }
                  for (let G = 0, ca = 2 * N; t.length > G; ++G, ca += 2) {
                    xa[ca] += t[G];
                  }
                }
              }
              for (let G, ca = 0; Aa > ca; ++ca) {
                x = 0,
                  t = 2 * (N + ca),
                  ((G = xa[t]) || lb)
                  && (ja = 0.003080 * ua,
                    1 != y && 4 != y || (ja *= Math.sin(cb * t * Math.PI * 2) * Eb / 512 + .5),
                    ja = 1.5 * Math.sin(ja),
                    qa += ja * db,
                    ka = (1 - Oa / 255) * (G - db) - qa,
                    db += ja * ka,
                    G = 4 == y ? db : 3 == y ? ka : qa,
                    y || (G = 1 > (G *= 22e-5) ? -1 < G ? Math.sin(G / 4 * Math.PI * 2) : -1 : 1, G /= 22e-5),
                    G *= Pa / 32,
                    lb = 1e-5 < G * G,
                    wa = Math.sin(A * t) * ha / 512 + .5,
                    x = G * (1 - wa),
                    G *= wa),
                  t < B || (x += xa[
                    1 + t
                    - B
                  ] * kb / 255,
                    G += xa[t - B] * kb / 255),
                  dc[z + t] += xa[t] = x,
                  ++t,
                  dc[z + t] += xa[t] = G;
              }
            }
          }
          z += xa.length;
        }
        setTimeout(k);
      } else {
        z = Jb.createBuffer(2, 5362944, 44100);
        for (y = 0; 2 > y; y++) {
          for (let v = y, f = z.getChannelData(y); 10725888 > v; v += 2) {
            f[v >> 1] = dc[v] / 65536;
          }
        }
        Ib.buffer = z;
        Ib.loop = !0;
      }
      g();
    },
    n = new Image();
  n.onload = n.onerror = () => {
    g();
  };
  n.src = ec;
  setTimeout(k, 9);
  let q;
  const C = (z, y, x) =>
      e.translate(z + Math.sin(a + 2) / 5, y + Math.sin(.8 * a) / 3, x).rotateSelf(
        2 * Math.sin(a),
        Math.sin(.7 * a),
        Math.sin(.9 * a),
      ),
    w = (() => {
      const z = Ya(
          11,
          x => e.translate(Math.sin(x / 10 * Math.PI), x / 10).rotate(+x).scale(1.0001 - x / 10, 0, 1 - x / 10),
        ),
        y = qb(18);
      return Ya(10, x => rb(pb(y, z[x]).reverse(), pb(y, z[x + 1]), 1)).flat();
    })(),
    F = P(
      O(
        l(p(20, 1, 1.15, 1), e.translate(0, -3).scale(3.5, 1, 3.5), X(.7, .4, .25, .7)),
        l(p(20, 1, 1.3, 1), e.translate(0, -2.5).scale(2.6, 1, 3), X(.7, .4, .25, .2)),
        l(p(Q), e.translate(4, -1.2).scale3d(2), X(.7, .4, .25, .3)),
      ),
    ),
    S = P(
      O(
        l(p(Q), e.translate(0, -8).scale(6, 15, 2.2)),
        l(p(Q), e.translate(0, -14.1).scale(4, 13, 4)),
        l(p(20, 1), e.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
      ),
    );
  u(() => {
    r([Q.slice(1)], e.translate(-2).scale3d(3).rotate(90, 0));
  }, 0);
  u(() => {
    const z = () => {
        var f = M[2].i, m = 1 - M[4].i;
        return f < m ? f : m;
      },
      y = (f, m, E) =>
        u(R => {
          R.h = () => e.translate(z() * Math.sin(3 * f + a * f) * m);
          Q.map(({ x: V, z: W }) => {
            r(p(11, 1), e.translate(4 * V, 4, E + 4 * W).scale(.8, 3, .8), X(.5, .3, .7, .6));
            r(p(Q), e.translate(4 * V, 7, E + 4 * W).scale(1, .3), X(.5, .5, .5, .3));
          });
          r(P(O(
            l(p(Q), e.translate(0, 0, E).scale(5, 1, 5), X(.8, .8, .8, .3)),
            ...[-1, 1].map(V =>
              l(p(Q), e.translate(5 * V, .2, E).rotate(0, 0, -30 * V).scale(4, 1, 2), X(.8, .8, .8, .3))
            ),
          )));
          r(p(Q), e.translate(0, -3, E).scale(8, 2, 8), X(.4, .4, .4, .3));
        }),
      x = (u(f => {
        f.h = () => C(-12, 4.2, 40 * Ba - 66);
        r(F);
        $b(e.translate(0, -3, 4));
      }),
        Ya(7, f => l(p(6, 1), e.translate(4 * (f / 6 - .5), 3).scale(.2, 3, .2), X(.3, .3, .38))).flat()),
      t = (ac(e.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
        ac(
          e.translate(0, 2.8),
          [5, 10, 3],
          [-5, 10, 3],
          ...qb(18).map(({ x: f, z: m }) => [7 * f, 10 * m, 4.5 - 2 * (0 > f ? -f : f)]),
        ),
        r(p(Q), e.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(.8, .8, .8, .2)),
        Q.map(({ x: f, z: m }) => r(p(6), e.translate(3 * f, 3, 15 * m).scale(.7, 4, .7), X(.6, .3, .3, .4))),
        [-23, 22].map(f => r(p(Q), e.translate(0, 0, f).scale(3, 1, 8), X(.9, .9, .9, .2))),
        [-15, 15].map((f, m) => {
          r(p(Q), e.translate(0, 6.3, f).scale(4, .3, 1), X(.3, .3, .3, .4));
          r(p(Q), e.translate(0, 1, f).scale(3, .2, .35), X(.5, .5, .5, .3));
          u(E => {
            E.h = () => e.translate(0, 4.7 * -M[m + 1].g, f);
            r(x);
          });
        }),
        Ya(5, f =>
          Ya(2, m =>
            r(
              w,
              e.translate(18.5 * (m - .5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * m).scale(1.2, 10, 1.2),
              X(1, 1, .8, .2),
            ))),
        r(p(Q), e.translate(3, 1.5, -20).scale(.5, 2, 5), X(.7, .7, .7, .2)),
        r(p(Q), e.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(.75, .75, .75, .2)),
        r(p(5), e.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(.6, .3, .3, .4)),
        $b(e.translate(-5.4, 1.5, -19).rotate(0, -90)),
        r(p(Q), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), X(.8, .2, .2, .5)),
        r(P(
          O(
            Zb(
              l(p(6, 0, 0, .3), e.translate(8, -3, -4).scale(13, 1, 13), X(.7, .7, .7, .2)),
              l(p(6), e.translate(0, -8).scale(9, 8, 8), X(.4, .2, .5, .5)),
              l(p(6, 0, 0, .3), e.translate(0, -0.92).scale(13, 2, 13), X(.8, .8, .8, .2)),
            ),
            l(p(5), e.scale(5, 30, 5), X(.4, .2, .6, .5)),
            l(p(5, 0, 1.5), e.translate(0, 1).scale(4.5, .3, 4.5), X(.7, .5, .9, .2)),
            l(p(Q), e.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), X(.5, .5, .5, .5)),
            l(p(6), e.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(.5, .5, .5, .5)),
          ),
        )),
        u(f => {
          f.h = () =>
            e.translate(
              0,
              .01 < M[3].g ? (5 * Math.cos(1.5 * a) + 2) * M[3].i * (1 - M[2].g) + -15 * (1 - M[3].g) : -500,
              0,
            );
          $b(e.translate(0, 1.2));
          r(p(5), e.translate(0, -0.2).scale(5, 1, 5), X(.6, .65, .7, .3));
        }),
        $b(e.translate(15, -2, 4)),
        y(.7, 12, 35),
        y(1, 8.2, 55),
        u(f => {
          f.h = () => e.translate(z() * Math.sin(a / 1.5 + 2) * 12);
          r(
            P(O(
              Zb(
                l(p(Q), e.scale(1.5, 1, 5), X(.9, .9, .9, .2)),
                l(p(6), e.scale(4, 1, 5), X(.9, .9, .9, .2)),
                l(p(Q), e.translate(0, -2).scale(2, 3.2, 1.9), X(.3, .8, .5, .5)),
                l(p(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), X(.9, .9, .9, .2)),
              ),
              l(p(Q), e.scale(1.3, 10, 1.3), X(.2, .7, .4, .6)),
            )),
            e.translate(0, 0, 45),
          );
          ac(e.translate(0, 2.8, 45), [0, 0, 4.5]);
        }),
        u(f => {
          f.h = () => e.translate(9.8 * (1 - z()));
          r(p(3), e.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), X(.3, .6, .6, .2));
          r(p(8), e.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(.8, .8, .8, .2));
          r(p(Q), e.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(.5, .5, .5, .3));
          r(p(Q), e.translate(-23, -2.2, 62).scale(3, 1, 4), X(.5, .5, .5, .3));
          $b(e.translate(-23, -0.5, 66.5));
        }),
        r(p(Q), e.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(.9, .9, .9, .2)),
        u(f => {
          f.h = () => e.translate(0, Ta(1 - 5 * z()) * Ua(M[4].g, M[5].g) * Math.sin(1.35 * a) * 4);
          r(p(Q), e.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(.7, .7, .7, .2));
          r(
            P(O(l(p(Q), e.scale(3, 1.4, 2.7)), l(p(Q), e.scale(1.2, 8, 1.2)))),
            e.translate(-33, -3, 55),
            X(.7, .7, .7, .2),
          );
        }),
        u(f => {
          f.h = () => e.translate(0, 0, Ta(1 - 5 * z()) * Ua(M[4].g, M[5].g) * Math.sin(.9 * a) * 8);
          r(P(
            O(
              l(p(Q), e.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(.9, .9, .9, .2)),
              l(p(Q), e.translate(-27, -3, 55).scale(1, 3), X(.9, .9, .9, .2)),
            ),
          ));
          r(p(Q), e.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(.9, .9, .9, .2));
        }),
        u(f => {
          f.h = () => e.translate(0, -6.5 * M[4].i);
          r(p(6), e.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), X(.7, .7, .7, .4));
        }),
        [...l(
          P(Zb(
            l(p(Q), e.translate(0, -3).scale(11, 1.4, 3), X(.9, .9, .9, .2)),
            O(
              l(p(6), e.rotate(0, 0, 90).scale(6, 8, 6), X(.3, .6, .6, .3)),
              l(p(4, 0, .01), e.translate(0, 6).scale(12, 2, .75).rotate(0, 45), X(.3, .6, .6, .3)),
              l(p(6), e.rotate(0, 0, 90).scale(5, 12, 5), X(.3, .6, .6, .3)),
              ...[5, 0, -5].map(f =>
                l(p(5), e.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(.3, .6, .6, .3))
              ),
            ),
          )),
          e,
        )]),
      D =
        (r(t, e.translate(-53, 0, 55)),
          r(p(6), e.translate(-61.3, -2.4, 49).scale(3, 1, 5), X(.4, .6, .6, .3)),
          r(p(7), e.translate(-57, -2.6, 46).scale(4, 1, 4), X(.8, .8, .8, .3)),
          $b(e.translate(-55, -1.1, 46).rotate(0, 90)),
          u(f => {
            f.h = () => e.translate(-75, (1 - M[5].i) * (1 - M[6].g) * 3, 55).rotate(180 * (1 - M[5].i) + ya, 0);
            r(t);
          }, 2),
          r(p(Q), e.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), X(.7, .7, .7, .2)),
          r(p(3, 0, -0.5), e.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), X(.8, .8, .8, .2)),
          r(
            P(O(
              Zb(
                l(p(Q), e.translate(-100, -2.5, 55).scale(8, 1, 8), X(.8, .8, .8, .2)),
                l(p(Q), e.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(.8, .8, .8, .2)),
                l(p(Q), e.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(.8, .8, .8, .2)),
                l(p(Q), e.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), X(.8, .8, .8, .2)),
                l(p(6), e.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(.6, .6, .6, .3)),
                l(p(Q), e.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(.8, .8, .8, .2)),
                l(p(Q), e.translate(-100, .42, 92).scale(3, 1.1, 4.1), X(.8, .8, .8, .2)),
              ),
              l(p(8), e.translate(-100, -1, 55).scale(7, .9, 7), X(.3, .3, .3, .4)),
              l(p(8), e.translate(-100, -2, 55).scale(4, .3, 4), X(.4, .4, .4, .5)),
              l(p(8), e.translate(-100, -3, 55).scale(.6, 1, .6), X(.4, .4, .4, .5)),
            )),
            e,
          ),
          ac(e.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          ac(e.translate(-89, .2, 80), [0, 0, 6]),
          r(P(
            O(
              l(p(Q), e.translate(-100, 1, 63).scale(7.5, 4), X(.5, .5, .5, .4)),
              l(p(Q), e.translate(-100, 0, 70).scale(2, 2, 10), X(.5, .5, .5, .4)),
              l(p(20, 1), e.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(.5, .5, .5, .4)),
            ),
          )),
          u(f => {
            f.h = () => e.translate(-99.7, 5.3 * -M[6].g - 2, 63.5);
            r(x);
          }),
          Q.map(({ x: f, z: m }) => {
            r(p(6), e.translate(7 * f - 100, -3, 7 * m + 55).scale(1, 8.1), X(.6, .15, .15, .8));
            [4, -0.4].map(E => r(p(6), e.translate(7 * f - 100, E, 7 * m + 55).scale(1.3, .5, 1.3), X(.4, .2, .2, .8)));
          }),
          Ya(7, f => {
            r(
              p((23 * f + 1) % 5 + 5, 0, .55),
              e.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(
                5 + f / 2,
                1 + f / 6,
                5 + f / 3,
              ),
              X(.5 - f / 17, .5 - (1 & f) / 9, .6, .3),
            );
          }),
          r(p(Q), e.translate(-87, -9.5, 24).scale(7, 1, 3), X(.4, .5, .6, .4)),
          r(p(4), e.translate(-86, -9.2, 27).scale(5, 1, 5), X(.5, .6, .7, .3)),
          r(p(12, 1), e.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(.3, .3, .4, .1)),
          $b(e.translate(-86, -7.5, 31)),
          u(f => {
            f.h = () => e.translate(0, 3.5 * (1 - Ma(M[6].g, M[7].g)) + Ua(M[7].i, M[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(m =>
              r(p(Q), e.translate(m - 76.9, m / -13 - 10, 24).scale(2.8, 1.5, 3), X(.2, .5, .6, .2))
            );
          }),
          u(f => {
            f.h = () => {
              const m = Ua(M[7].i, M[6].i);
              return e.translate(0, m * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + m) * m);
            };
            [6, 18].map(m => r(p(Q), e.translate(m - 76.9, m / -13 - 10, 24).scale(2.8, 1.5, 3), X(.1, .4, .5, .2)));
          }),
          r(
            P(O(
              Zb(
                l(p(Q), e.scale(11, 1, 13), X(.3, .4, .6, .3)),
                l(p(5), e.translate(0, 0, -7).scale(2, 1.2, 2), X(.2, .4, .7, .3)),
                l(p(5), e.scale(9, 1.2, 9), X(0, .2, .3, .5)),
              ),
              l(p(5), e.scale(5.4, 5, 5.4), X(0, .2, .3, .5)),
            )),
            e.translate(-38.9, -11.3, 17),
          ),
          $b(e.translate(-38.9, -9.6, 10)),
          u(f => {
            f.h = () => e.translate(0, -7.3 * M[7].i);
            r(
              P(O(
                Zb(
                  l(p(5), e.translate(0, 2).scale(5, 7, 5).skewY(8), X(.2, .4, .5, .5)),
                  l(p(5), e.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(.25, .35, .5, .5)),
                  l(p(5), e.translate(0, 9).scale(.6, 7, .6).skewY(8), X(.35, .3, .5, .5)),
                ),
                l(p(5), e.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(.2, .4, .5, .5)),
              )),
              e.translate(-38.9, -11.3, 17),
            );
            ac(e.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...qb(15).map(({ x: m, z: E }) => [3 * m, 3 * E, 1.2]));
          }),
          Q.map(({ x: f, z: m }) => {
            q = e.translate(9 * f - 38.9, -7.3, 11 * m + 17);
            r(p(14, 1), q.scale(1, 4), X(.25, .25, .25, 1));
            [1.5, 8].map(E => r(p(17, 1), q.translate(0, E - 4).scale(1.5, .5, 1.5), X(.6, .6, .6, .3)));
          }),
          r(
            P(O(
              Zb(
                l(p(6), e.translate(0, 0, -36).scale(15, 1.2, 15), X(.7, .7, .7, .3)),
                l(p(Q), e.translate(0, 0, -18).scale(4, 1.2, 6), X(.45, .4, .6, .3)),
              ),
              ...Ya(6, f =>
                Ya(6, m =>
                  l(
                    p(6),
                    e.translate(4.6 * m - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * m)).scale(2, 5, 2),
                    X(.7, .7, .7, .3),
                  ))).flat(),
            )),
            e.translate(-38.9, -11.3, 17),
          ),
          ac(e.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          r(p(5), e.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), X(.8, .1, .25, .4)),
          $b(e.translate(-84, -0.5, 85).rotate(0, 45)),
          u(f => {
            f.h = () => C(-123, 1.4, 55 + -65 * Ca);
            $b(e.translate(0, -3, -4).rotate(0, 180));
            r(F);
          }),
          ac(e.translate(-115, .2, -12), [0, 0, 3.5]),
          P(O(
            l(p(Q), e.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(.25, .25, .35, .3)),
            l(p(3), e.translate(0, 0, -5.5).scale(3, 2), X(.6, .3, .4, .3)),
            ...[-1.2, 1.2].map(f => l(p(Q), e.translate(f, -0.5, 1).scale(.14, .3, 6.5), X(.7, .2, 0, .3))),
          ))),
      v = (u(f => {
        f.h = () => {
          var m = Math.sin(1.1 * a);
          return e.translate.call(e, 0, -2, Ua(M[10].g, M[11].g) * (0 > m ? -m : m) * -8.5 + 10);
        };
        Ya(2, m => r(D, e.translate(9 * m - 110 + (1 & m), 1.7, -12)));
      }),
        u(f => {
          f.h = () => {
            var m = Math.sin(2.1 * a);
            return e.translate.call(e, 0, -2, Ua(M[10].g, M[11].g) * (0 > m ? -m : m) * -8.5 + 10);
          };
          Ya(2, m => r(D, e.translate(9 * (m + 2) - 110 + (1 & m), 1.7, -12)));
        }),
        u(f => {
          f.h = () => {
            var m = Math.sin(1.5 * a);
            return e.translate.call(
              e,
              0,
              -2,
              -8.5 * Ma((1 - M[10].g) * (1 - Ua(M[10].g, M[11].g)), Ua(M[10].g, M[11].g) * (0 > m ? -m : m)) + 10,
            );
          };
          Ya(3, m => r(D, e.translate(9 * m - 106, 1.7, -12)));
        }),
        r(
          P(O(
            Zb(
              l(p(Q), e.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
              l(p(Q), e.translate(26.5, -0.6, 10).scale(17, 2, .5)),
            ),
            ...Ya(4, f => l(p(Q), e.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
            ...Ya(3, f => l(p(Q), e.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
          )),
          e.translate(-123, 0, -12),
          X(.5, .5, .6, .2),
        ),
        r(p(5), e.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), X(.25, .25, .35, 1)),
        r(p(Q), e.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(.8, .8, .8, .2)),
        r(p(6), e.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), X(.6, .5, .7, .2)),
        $b(e.translate(-116, -1.4, -18).rotate(0, 180)),
        Ya(3, f => {
          r(S, e.translate(12 * f - 109, -9, -12), X(.6, .6, .6, .3));
          r(S, e.translate(-77, -9, -12 * f - 20).rotate(0, 90), X(.6, .6, .6, .3));
        }),
        r(P(
          O(
            l(p(12), e.translate(-77, -13.9, -12).scale(4, 18.2, 4), X(.7, .7, .7, .2)),
            l(p(Q), e.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), X(.4, .5, .6, .2)),
            l(p(Q), e.translate(-77, 0, -14).scale(1.5, 2.2, 2), X(.4, .5, .6, .2)),
            l(p(12), e.translate(-77, 2.8, -12).scale(3, 5, 3), X(.4, .5, .6, .2)),
          ),
        )),
        r(p(Q), e.translate(-115.5, -17, -12).scale(.5, 15, 2.2), X(.6, .6, .6, .3)),
        r(p(Q), e.translate(-77, -17, -50.5).scale(2.2, 15, .5), X(.6, .6, .6, .3)),
        r(p(Q), e.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), X(.6, .6, .6, .3)),
        r(P(
          O(
            l(p(Q), e.translate(-93, -5.8, -40).scale(9, 1, 5), X(.8, .8, .8, .1)),
            l(p(9), e.translate(-98, -5.8, -40).scale(3, 8, 3), X(.7, .7, .7, .2)),
          ),
        )),
        r(p(9), e.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), X(.5, .5, .5, .3)),
        $b(e.translate(-98, -4.4, -40).rotate(0, 90)),
        ac(e.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
        r(P(
          O(
            Zb(
              l(p(6, 0, 0, .6), e.translate(-100, .7, 105.5).scale(8, 1, 11), X(.7, .7, .7, .2)),
              l(p(Q), e.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), X(.7, .7, .7, .2)),
              l(p(Q), e.translate(-91.2, .7, 107).scale(3, 1, 3.3), X(.7, .7, .7, .2)),
            ),
            l(p(5), e.translate(-100, .7, 113).scale(4, 3, 4), X(.7, .7, .7, .2)),
          ),
        )),
        Ya(4, f =>
          u(m => {
            m.h = () => {
              const E = Ua(M[8].i, M[12].i);
              return e.translate(
                (2 < f ? 2 * (1 - E) + E : 0) - 100,
                E * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + .7,
                115 + (1 & f ? -1 : 1) * (1 - M[8].i) * (1 - M[12].i) * -7
                  + (.05 > E ? .05 : E) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
              );
            };
            r(
              p(6),
              e.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
              X(.5 - f / 8, f / 12 + .5, .7, .3),
            );
          })),
        u(f => {
          f.h = () => {
            const m = Ua(M[8].i, M[12].i);
            return e.translate(2.5 * (1 - m) - 139.7, -3 * (1 - M[8].g) + m * Math.sin(.8 * a) * -1 - 1.8, 93.5)
              .rotateSelf(Math.cos(1.3 * a) * (3 * m + 3), 0);
          };
          r(P(O(l(p(10), e.scale(6, 2, 6), X(.1, .6, .5, .3)), l(p(10), e.scale(3.3, 6, 3.3), X(.1, .6, .5, .5)))));
          q = e.translate(-7.5).rotate(0, 90);
          r(p(15, 1), q.scale(3, 2.3, 3), X(.4, .4, .4, .3));
          r(p(10), q.scale(2, 2.5, 2), X(.3, .8, .7, .3));
          r(p(5), q.scale(1, 3), X(.5, .5, .5, .5));
          $b(q.translate(0, 3.4).rotate(0, 180));
          [-1, 1].map(m =>
            r(w, e.rotate(90 * -m, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), X(1, 1, .8, .2))
          );
          ac(e.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
        }),
        [-1, 1].map(f => {
          r(p(12, 1), e.translate(-7.5 * f - 100, 3.7, 96).scale(.8, 4, .8), X(.6, .24, .2, .5));
          [7.2, 1.5].map(m =>
            r(p(15, 1), e.translate(-7.5 * f - 100, m + .7, 96).scale(1.1, .5, 1.1), X(.5, .24, .2, .4))
          );
          r(w, e.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), X(1, 1, .8));
          r(
            P(O(
              l(p(Q), e.translate(-4 * f, 3.5, -0.5).scale(4, 4, .7), X(.5, .5, .5, .4)),
              l(p(Q), e.scale(3, 3, 10), X(.6, .24, .2, .5)),
              l(p(28, 1), e.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(.6, .24, .2, .5)),
              l(p(5), e.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(.6, .24, .2, .5)),
              l(p(5), e.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), X(.6, .24, .2, .5)),
            )),
            e.translate(f - 100, .7, 97),
          );
        }),
        u(f => {
          f.h = () => e.translate(-100, .6 - 6 * M[12].g, 96.5).scale(.88, 1.2);
          r(x);
        }),
        [
          ...l(p(25, 1), e.scale(8, 1, 8), X(.45, .45, .45, .2)),
          ...l(p(5), e.translate(0, 1).scale(1, .2), X(.3, .3, .3, .2)),
        ]);
    u(f => {
      f.h = () => e.translate(-80, 1, 106).rotate(0, 40 + sa);
      r(P(
        O(
          l(p(25, 1), e.scale(8, 1, 8), X(.45, .45, .45, .2)),
          l(p(Q), e.translate(0, 0, -5.5).scale(1.5, 3, 2.5), X(.45, .45, .45, .2)),
        ),
      ));
      r(p(8), e.translate(0, 2).scale(3, 1.5, 3), X(.7, .7, .7, .1));
      r(p(5), e.translate(0, 2).scale(1, 2), X(.3, .3, .3, .2));
      ac(e.translate(0, 3), ...qb(10).map(({ x: m, z: E }) => [5.6 * m, 5.6 * E, 2.5]));
    });
    u(f => {
      f.h = () => e.translate(-64, 1, 106).rotate(0, ta);
      r(P(
        O(l(p(25, 1), e.translate(0, 2).scale(8, 1, 8), X(.35, 0, 0, .3)), l(p(Q), e.scale(9, 5, 2), X(.3, 0, 0, .3))),
      ));
      r(v);
      [-1, 1].map(m =>
        r(w, e.rotate(0, 90).translate(-5 * m, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * m + 90), X(1, 1, .8))
      );
    });
    u(f => {
      f.h = () => e.translate(-48, 1, 106).rotate(0, 180 - ta);
      r(P(
        O(
          l(p(25, 1), e.translate(0, 2).scale(8, 1, 8), X(.35, 0, 0, .3)),
          l(p(Q), e.translate(7).scale(9, 5, 2), X(.3, 0, 0, .3)),
          l(p(Q), e.translate(0, 0, 7).scale(2, 5, 9), X(.3, 0, 0, .3)),
        ),
      ));
      r(v);
    });
    u(f => {
      f.h = () => e.translate(-48, 1, 90).rotate(0, 270 + ta);
      r(P(
        O(
          l(p(25, 1), e.translate(0, 2).scale(8, 1, 8), X(.35, 0, 0, .3)),
          l(p(Q), e.translate(7).scale(9, 5, 2), X(.3, 0, 0, .3)),
          l(p(Q), e.translate(0, 0, -7).scale(2, 5, 9), X(.3, 0, 0, .3)),
        ),
      ));
      r(v);
    });
    r(p(Q), e.translate(-56, 1, 106).scale(.7, .8, 2.5), X(.7, .7, .7, .2));
    r(p(Q), e.translate(-48, 1, 98).scale(2.5, .8, .7), X(.7, .7, .7, .2));
    r(p(Q), e.translate(-39, .4, 90).scale(2, 1, 2), X(.7, .7, .7, .3));
    r(p(Q), e.translate(-34.2, .4, 90).scale(3, 1, 3), X(.7, .7, .7, .3));
    $b(e.translate(-34, 2.7, 96).rotate(-12, 0));
    r(p(5), e.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), X(.2, .5, .5, .6));
    [X(.1, .55, .45, .2), X(.2, .5, .5, .3), X(.3, .45, .55, .4)].map((f, m) =>
      u(E => {
        E.h = () =>
          e.translate(
            0,
            (1 - M[13].i) * (1 - M[14].i) * (m ? 0 : 3) + Ua(M[13].i, M[14].i) * Math.sin(1.5 * a + 1.5 * m) * 4,
          );
        r(p(Q), e.translate(-23.5, .5, 90 + 6.8 * m).scale(1 === m ? 2 : 3.3, 1, 3.3), f);
        2 === m && r(p(Q), e.translate(-29.1, .4, 90).scale(2.1, 1, 3), X(.7, .7, .7, .3));
        1 === m
          && r(p(Q), e.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), X(.6, .6, .7, .3));
      })
    );
    r(P(
      O(
        l(p(6, 0, 0, .3), e.translate(0, -0.92, 95).scale(14, 2, 14), X(.8, .8, .8, .2)),
        l(p(5), e.translate(0, 0, 95).scale3d(6), X(.3, .3, .3, .5)),
      ),
    ));
    [8, -6.1].map((f, m) =>
      Ya(
        3,
        E =>
          r(
            S,
            e.translate(6 * E - 6, f - (1 & E), 111 - .2 * (1 & E) - m),
            1 & E ? X(.5, .5, .5, .3) : X(.35, .35, .35, .5),
          ),
      )
    );
    [-1, 1].map(f => r(w, e.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), X(1, 1, .8)));
    $b(e.translate(0, 1.7, 82).rotate(0, 180));
    r(p(5), e.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(.5, .3, .3, .4));
    r(P(
      O(
        Zb(
          l(p(Q), e.translate(0, 16, 110.5).scale(12, 1, 3), X(.5, .3, .3, .4)),
          l(p(Q), e.translate(0, 16, 111).scale(3, 1, 3.8), X(.5, .3, .3, .4)),
        ),
        l(p(5), e.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(.5, .3, .3, .4)),
      ),
    ));
    u(f => {
      f.h = () => {
        const m = Math.sin(a);
        return e.translate(-2 * m).rotate(0, 0, 25 * m);
      };
      r(p(3), e.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), X(.5, .3, .3, .4));
      [22, 30].map(m => {
        r(p(6), e.translate(0, 16, m + 95).scale(3, 1, 2.3).rotate(0, 90), X(.7, .7, .7, .4));
        r(p(Q), e.translate(0, 6.2, m + 95).scale(.5, 11, .5), X(.5, .3, .3, .4));
      });
    });
    r(p(6), e.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(.5, .6, .7, .3));
    r(p(Q), e.translate(0, 16, 129).scale(1.5, 1, 2), X(.5, .6, .7, .3));
    r(p(7), e.translate(0, 16.2, 133).scale(5, 1, 5), X(.4, .5, .6, .4));
    u(f => {
      f.h = () => {
        const m = Ua(Ua((M[14].g + M[14].i) / 2, M[13].i), (M[15].g + M[15].i) / 2);
        return e.translate(0, 16 * m, 8.5 * Ta(2 * m - 1) + 95);
      };
      r(p(5), e.scale(5, 1.1, 5), X(.5, .3, .3, .4));
      r(p(5), e.scale(5.5, .9, 5.5), X(.25, .25, .25, .4));
      $b(e.translate(0, 1.5, -1).rotate(0, 180));
    });
    ac(e.translate(0, 3, 95), ...qb(9).map(({ x: f, z: m }) => [9 * f, 9 * m, 4]));
    ac(e.translate(0, 19, 134), [0, 0, 3.5]);
  });
  Ka = [
    u(() => {
      [0, 180].map(y => r(w, e.rotate(0, y).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), X(1, 1, .8)));
      r(sb(20), e.translate(0, 1).scale(.5, .5, .5), X(1, .3, .4));
      const z = l(
        P(O(p(15, 1), l(p(Q), e.translate(0, 0, 1).scale(2, 2, .5)))),
        e.rotate(-90, 0).scale(.1, .05, .1),
        X(.3, .3, .3),
      );
      [-1, 1].map(y => r(z, e.translate(.2 * y, 1.2, .4).rotate(0, 20 * y, 20 * y)));
      r(p(Q), e.translate(0, .9, .45).scale(.15, .02, .06), X(.3, .3, .3));
      r(sb(20), e.scale(.7, .8, .55), X(1, .3, .4));
    }),
    ...[-1, 1].map(z =>
      u(() => {
        r(p(10, 1), e.translate(.3 * z, -0.8).scale(.2, .7, .24), X(1, .3, .4));
      })
    ),
  ];
  Ha = u(() => {
    r(p(6, 1), e.scale(.13, 1.4, .13), X(.3, .3, .5, .1));
    r(p(8, 1), e.translate(0, 1).scale(.21, .3, .21), X(1, .5, .2));
    r(p(3), e.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), X(.2, .2, .2, .1));
  }, 0);
  Ja = u(() => {
    r(p(6).slice(0, -1), e.scale(.77, 1, .77), X(1, .3, .5));
  }, 0);
  Ia = u(() => {
    r(
      sb(30, 24, (z, y, x) => {
        const t = y / 24, D = z * Math.PI * 2 / 30, v = t ** .6 * Math.PI / 2;
        z = t * t * Math.sin(z * Math.PI * 14 / 30) / 4;
        return 23 === y
          ? { x: x.D = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(D) * Math.sin(v),
            y: Math.cos(t * Math.PI) - t - z,
            z: Math.sin(D) * Math.sin(v) + Math.sin(z * Math.PI * 2) / 4,
          };
      }),
      e.scale3d(.7),
      X(1, 1, 1),
    );
    [-1, 1].map(z => r(sb(12), e.translate(.16 * z, .4, -0.36).scale3d(.09)));
  }, 0);
});
