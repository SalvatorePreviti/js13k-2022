let ca = !0,
  ha = 0,
  ka = 0,
  la = 0,
  a = 0,
  ma = 0,
  oa = 0,
  ra = 0,
  sa = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  d = .066,
  Ba,
  Ca,
  Da,
  Ea,
  Fa,
  Ga,
  Ia,
  Ja;
const Ka = [],
  La = [[
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
  Pa = [],
  e = [],
  Qa = [],
  h = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }];
var Ra = -11, Sa = 17, Ta = -90, Ua = 0, Va = 0;
const l = { x: 0, y: 0, z: 0 },
  Wa = Math.PI / 180,
  q = new DOMMatrix(),
  Xa = new Float32Array(16),
  Ya = new Float32Array(624),
  bb = new Int32Array(10725888),
  cb = (b, c) => c < b ? b : c,
  db = b => 0 > b ? -b : b,
  eb = b => 0 > b ? 0 : 1 < b ? 1 : b,
  fb = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)),
  hb = b => Math.atan2(Math.sin(b *= Wa), Math.cos(b)) / Wa,
  ib = (b, c, g) => {
    b *= Wa;
    c = (c * Wa - b) % (2 * Math.PI);
    return (b + (2 * c % (2 * Math.PI) - c) * (0 > g ? 0 : 1 < g ? 1 : g)) / Wa;
  },
  jb = (b, c, g, m) => {
    var p = c - b;
    b += (0 > c - b ? -1 : 1) * cb(0, (0 > p ? -p : p) ** .9 - g) * m * 2;
    return b + (c - b) * eb(m / 7);
  },
  r = (b, c) => Array.from(Array(b), (g, m) => c(m)),
  kb = (b, c, g, m) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (m + g) / (g - m), -1, 0, 0, 2 * m * g / (g - m), 0],
  lb = ({ x: b, y: c, z: g }, m) => b * m.x + c * m.y + g * m.z,
  mb = ({ x: b, y: c, z: g }) => Math.hypot(b - l.x, c - l.y, g - l.z) || 0,
  nb = b => {
    let c = 0, g = 0, m = 0, p, n = b.at(-1);
    for (p of b) {
      c += (n.y - p.y) * (n.z + p.z), g += (n.z - p.z) * (n.x + p.x), m += (n.x - p.x) * (n.y + p.y), n = p;
    }
    return p = Math.hypot(c, g, m), c /= p, g /= p, m /= p, { x: c, y: g, z: m, w: c * n.x + g * n.y + m * n.z };
  },
  ob = (
    b,
    c = Xa,
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
  pb = (b, c, g) => (b.D = g, b.A = c, b),
  qb = (b, c, g = b.A) =>
    pb(
      b.map(m =>
        ((
          { x: p, y: n, z: v },
          t,
        ) => ({ x: p, y: n, z: v } = t.transformPoint({ x: p, y: n, z: v }), { x: p, y: n, z: v }))(m, c)
      ),
      g,
      b.D,
    ),
  w = (b, c, g) => b.map(m => qb(m, c, g)),
  rb = (b, c = 0) =>
    r(b, g => {
      const m = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: .01 > (0 > m ? -m : m) ? m : 0 > m ? m - c : m + c };
    }),
  sb = (b, c, g) =>
    b.map((m, p, { length: n }) => pb([m, c[n - p - 1], c[n - (p + 1) % n - 1], b[(p + 1) % n]], b.A, g)),
  K = (b, c, g = 0, m) => {
    m = b.length ? b : rb(b, m);
    b = qb(m, q.translate(0, 1).scale3d(0 < g ? g : 1));
    g = qb(m, q.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse();
    return [...sb(g, b, c), b, g];
  },
  tb = (
    b,
    c = b,
    g = (
      m,
      p,
    ) => (p *= Math.PI / c,
      { x: Math.cos(m *= 2 * Math.PI / b) * Math.sin(p), y: Math.cos(p), z: Math.sin(m) * Math.sin(p) }),
  ) => {
    const m = [];
    for (let p = 0; b > p; p++) {
      for (let n = 0; c > n; n++) {
        const v = pb([], 0, 1);
        m.push(v);
        v.push(g(p, n, v));
        n && v.push(g((p + 1) % b, n, v));
        c - 1 > n && v.push(g((p + 1) % b, n + 1 % c, v));
        v.push(g(p, n + 1 % c, v));
      }
    }
    return m;
  },
  wb = (b, c, g, m) => {
    let p = 0, n = 0, v = 0, t = 1 / 0, u = -1 / 0, I = 1 / 0, A = -1 / 0, E = 1 / 0, B = -1 / 0;
    const z = 1.1 * (g - c),
      F = (new DOMMatrix(kb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
    b = r(8, x => {
      x = F.transformPoint({ x: 4 & x ? 1 : -1, y: 2 & x ? 1 : -1, z: 1 & x ? 1 : -1 });
      return p -= x.x = (z * x.x | 0) / z / x.w,
        n -= x.y = (z * x.y | 0) / z / x.w,
        v -= x.z = (z * x.z | 0) / z / x.w,
        x;
    });
    c = q.rotate(298, 139).translateSelf(p / 8, n / 8, v / 8);
    return qb(b, c).map(({ x, y: f, z: k }) => {
      t = t < x ? t : x;
      u = x < u ? u : x;
      I = I < f ? I : f;
      A = f < A ? A : f;
      E = E < k ? E : k;
      B = k < B ? B : k;
    }),
      E *= 0 > E ? m : 1 / m,
      B *= 0 < B ? m : 1 / m,
      q.scale(2 / (u - t), 2 / (A - I), 2 / (E - B)).translateSelf((u + t) / -2, (A + I) / -2, (E + B) / 2)
        .multiplySelf(c);
  },
  L = (b, c = q, g) => Ba.s.push(...w(b, c, g)),
  N = (b, c = 1) => {
    const g = Ba;
    c = { l: q, F: Ka.length, H: c, s: [] };
    return Ka.push(Ba = c), b(c), Ba = g, c;
  },
  xb = (b, c = 35633) => {
    c = S.c6x(c);
    return S.s3c(c, b), S.c6a(c), c;
  },
  yb = (b, c) => {
    const g = {}, m = S.c1h();
    return S.abz(m, b), S.abz(m, xb(c, 35632)), S.l8l(m), p => p ? g[p] || (g[p] = S.gan(m, p)) : S.u7y(m);
  },
  Cb = b => Math.sin(b * Math.PI * 2),
  Db = b => .5 > b % 1 ? 1 : -1,
  Eb = b => b % 1 * 2 - 1,
  Fb = b => {
    b = b % 1 * 4;
    return 2 > b ? b - 1 : 3 - b;
  },
  Ib = () => {
    Da || !ca ? Gb.disconnect() : Gb.connect(Hb.destination);
    b4.innerHTML = "Music: " + ca;
  },
  Jb = (b = !1) => {
    if (Da !== b) {
      Da = b;
      Ca = 0;
      try {
        b ? document.exitPointerLock() : Gb.start();
      } catch {
      }
      document.body.className = b ? "l m" : "l";
      Ib();
    }
  },
  Kb = () => {
    let b, c, g, m, p, n, v, t, u, I, A, E;
    const B = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Pa.length = ha = ka = 0;
      m = t = void 0;
      document.hidden && Jb(!0);
    };
    document.onvisibilitychange = onresize = onblur = B;
    b1.onclick = () => Jb();
    b2.onclick = () => {
      Jb();
      Ca = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      ca = !ca;
      Ib();
    };
    b5.onclick = () => Jb(!0);
    onclick = z => {
      E = 1;
      Da || (z.target === hC && (Pa[5] = !0), Ca && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: z, target: F, type: x, repeat: f }) => {
      f || ((F = !!x[5] && F === document.body) && ("Escape" === z || "Enter" === z && Da)
        ? Da && !E || Jb(!Da)
        : (z = {
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
        }[z],
          5 === z ? F && (Pa[z] = 1) : Pa[z] = F));
    };
    onmousemove = ({ movementX: z, movementY: F }) => {
      Ca && (z || F) && (Va += .1 * z, Ua += .1 * F);
    };
    oncontextmenu = () => !1;
    hC.ontouchstart = z => {
      if (!Da) {
        for (const { pageX: F, pageY: x, identifier: f } of z.changedTouches) {
          Ca && F > hC.clientWidth / 2
            ? void 0 === t && (t = f, n = F, v = x, u = 0, I = Va, A = Ua)
            : void 0 === m && (m = f, c = F, g = x, p = 0);
        }
        b = la;
      }
    };
    hC.ontouchmove = ({ changedTouches: z }) => {
      if (!Da) {
        for (const { pageX: F, pageY: x, identifier: f } of z) {
          if (t === f && (Va = I + (F - n) / 3, Ua = A + (x - v) / 3, u = 1), m === f) {
            z = (c - F) / 20;
            let k = 0 > z ? -1 : 1, C = k * z;
            .4 < C && (p = 1, ha = k * C ** 1.5, 1.5 < C && (c = F + 20 * k));
            .4 < (C = (k = 0 > (z = (g - x) / 20) ? -1 : 1) * z)
              && (p = 1, ka = k * C ** 1.5, 1.5 < C && (g = x + 20 * k));
          }
        }
      }
    };
    hC.ontouchend = z => {
      let F;
      z.preventDefault();
      for (const x of z.changedTouches) {
        x.identifier === t
          ? (t = void 0, u || (F = 1), u = 0)
          : x.identifier === m
          ? (m = void 0, ka = ha = 0, p || (F = 1), p = 0)
          : F = 1;
      }
      F && z.target === hC && b && (z = la - b, .06 < z && .7 > z && (Pa[5] = !0));
    };
    B();
    Jb(!0);
  },
  T = (b, c, g) => b + (c - b) * eb(1 - Math.exp(-g * d)),
  Lb = ({ j: b }) => b,
  Mb = () => {
    var b = fb(e[12].g, e[13].g);
    a > oa && (h4.innerHTML = "", oa = 0);
    var c = T(xa, 0, 1);
    xa = c + (hb(xa + 60 * d) - c) * eb(e[5].g - e[6].i);
    c = T(sa, 0, 5);
    sa = c + (hb(sa + 56 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
    c = T(wa, 0, 4);
    wa = c + (hb(wa + 48 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
    b = 2 * e[9].i - 1;
    Aa = T(Aa, e[9].i, .2 + .3 * (0 > b ? -b : b));
    za = T(za, ya ? za + (-9 - za) * eb(1.5 * d) : eb(a / 3), 1);
    e[0].j && .7 < e[0].g && (13 > ma
      ? (ya || (h4.innerHTML = "Not leaving now, there are souls to catch!", oa = a + 3), e[0].j = 0)
      : ya
        || (ya || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", oa = a + 1 / 0), ya = 1));
    for (const g of Ka) {
      g.h && (g.l = g.h(g));
    }
    for (const g of e) {
      g.h();
    }
    for (const g of Qa) {
      g.h();
    }
  },
  Nb = () => {
    ma = Qa.reduce((b, c) => b + c.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ma];
  },
  Ob = () => {
    Nb();
    localStorage.DanteSP22 = JSON.stringify([e.map(Lb), Qa.map(Lb), ra, a, Aa]);
  },
  Pb = () => {
    let b = 0, c;
    const g = [],
      m = [],
      p = [],
      n = [],
      v = new Map(),
      t = new Int32Array(8),
      u = E => {
        let { x: B, y: z, z: F } = c[E];
        A[0] = B;
        A[1] = z;
        A[2] = F;
        E = "" + (c.D ? I : t);
        let x = v.get(E);
        return void 0 !== x
          ? (B = 3 * x, n[B] = (n[B++] + t[5]) / 2, n[B] = (n[B++] + t[6]) / 2, n[B] = (n[B] + t[7]) / 2)
          : (v.set(E, x = v.size), m.push(B, z, F, A[3]), p.push(t[4]), n.push(t[5], t[6], t[7])),
          x;
      },
      I = new Int32Array(t.buffer, 0, 5),
      A = new Float32Array(t.buffer);
    for (const E of Ka) {
      for (c of (A[3] = E.H ? E.F : 0, E.s)) {
        const { x: B, y: z, z: F } = nb(c);
        t[4] = 0 | c.A;
        t[5] = 32767 * B;
        t[6] = 32767 * z;
        t[7] = 32767 * F;
        for (let x = 2, f = u(0), k = u(1); c.length > x; ++x) {
          g.push(f, k, k = u(x));
        }
      }
      E.s = null;
      E.v = b;
      E.G = b = g.length;
    }
    S.b11(34963, S.c1b());
    S.b2v(34963, new Uint16Array(g), 35044);
    S.b11(34962, S.c1b());
    S.b2v(34962, new Float32Array(m), 35044);
    S.v7s(0, 4, 5126, !1, 0, 0);
    S.b11(34962, S.c1b());
    S.b2v(34962, new Int16Array(n), 35044);
    S.v7s(1, 3, 5122, !0, 0, 0);
    S.b11(34962, S.c1b());
    S.b2v(34962, new Uint32Array(p), 35044);
    S.v7s(2, 4, 5121, !0, 0, 0);
    S.e3x(0);
    S.e3x(1);
    S.e3x(2);
  },
  Qb = (b, c) => {
    var g, m, p, n = c.C;
    for (var v = 0; n.length > v; ++v) {
      if (-0.00008 > (p = lb(b, n[v]) - b.w) ? m = c : 8e-5 < p && (g = c), m && g) {
        m = [];
        p = [];
        n = c.C;
        v = c.B;
        let t = n.at(-1), u = lb(b, t) - b.w;
        for (const I of n) {
          g = lb(b, I) - b.w,
            8e-5 > u && p.push(t),
            -0.00008 < u && m.push(t),
            (8e-5 < u && -0.00008 > g || -0.00008 > u && 8e-5 < g)
            && (u /= g - u,
              t = { x: t.x + (t.x - I.x) * u, y: t.y + (t.y - I.y) * u, z: t.z + (t.z - I.z) * u },
              m.push(t),
              p.push(t)),
            t = I,
            u = g;
        }
        return {
          o: 2 < m.length && { C: pb(m, n.A, n.D), B: v, u: c },
          m: 2 < p.length && { C: pb(p, n.A, n.D), B: v, u: c },
        };
      }
    }
    return { o: g, m };
  },
  Rb = (b, c, g = nb(c.C)) => {
    if (b) {
      const { o: m, m: p } = Qb(b, c);
      m || p || b.s.push(c);
      m && (b.o = Rb(b.o, m, g));
      p && (b.m = Rb(b.m, p, g));
    } else {
      b = { x: g.x, y: g.y, z: g.z, w: g.w, s: [c], o: 0, m: 0 };
    }
    return b;
  },
  Sb = (b, c, g) => {
    const m = [],
      p = (n, v) => {
        let { o: t, m: u } = Qb(n, v);
        t || u || (0 < g * lb(n, c) ? t = v : u = v);
        t && (n.o ? p(n.o, t) : m.push(t));
        u && n.m && p(n.m, u);
      };
    for (const n of c.s) {
      p(b, n);
    }
    return m;
  },
  Tb = (b, c) => b && (c(b), Tb(b.o, c), Tb(b.m, c)),
  Ub = b => b.length ? b.reduce((c, g) => Rb(c, { C: g, B: 0, u: 0 }), 0) : b,
  Vb = b => (Tb(b, c => {
    const g = c.m;
    c.m = c.o;
    c.o = g;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const m of c.s) {
      m.B = !m.B;
    }
  }),
    b),
  Wb = (...b) =>
    b.reduce((c, g) => {
      const m = [];
      if (c = Ub(c), g) {
        g = Ub(g);
        Tb(c, p => p.s = Sb(g, p, 1));
        Tb(g, p => m.push([p, Sb(c, p, -1)]));
        for (const [p, n] of m) {
          for (const v of n) {
            Rb(c, v, p);
          }
        }
      }
      return c;
    }),
  U = (b, ...c) => Vb(Wb(Vb(Ub(b)), ...c)),
  V = b => {
    const c = new Map(),
      g = new Map(),
      m = p => {
        if (p.u) {
          const n = c.get(p.u);
          n ? (g.delete(n), p = m(p.u)) : c.set(p.u, p);
        }
        return p;
      };
    return Tb(b, p => {
      for (const n of p.s) {
        g.set(m(n), n.B);
      }
    }),
      Array.from(g, ([{ C: p }, n]) => {
        const v = p.map(({ x: t, y: u, z: I }) => ({ x: t, y: u, z: I }));
        return pb(n ? v.reverse() : v, p.A, p.D);
      });
  },
  Xb = b => {
    const c = Ba,
      g = e.length,
      m = {
        j: 0,
        g: 0,
        i: 0,
        u: c,
        h() {
          const p = m.j, n = m.g, v = m.i, t = c.l.multiply(b);
          m.I = t;
          2.9 > mb(t.transformPoint()) && Pa[5] && (.3 > n || .7 < n)
            && (m.j = p ? 0 : 1, g && (ya || (h4.innerHTML = "* click *", oa = a + 1)), ra = g, Ob());
          m.g = T(n, p, 4);
          m.i = T(v, p, 1);
          m.l = t.rotate(60 * m.g - 30, 0).translateSelf(0, 1);
        },
      };
    e.push(m);
    L(K(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), Y(.4, .5, .5));
    L(K(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), Y(.4, .5, .5));
    L(K(h), b.translate(0, -0.4).scale(.5, .1, .5), Y(.5, .5, .4));
  },
  Yb = (b, ...c) => {
    let g = -1, m = 0, p = 0, n = 0, v = 0, t = 0, u = 1, I = 3;
    const A = {
        j: 0,
        h() {
          if (!A.j) {
            var P = 1, Q = 1 / 0;
            for (var R of z) {
              var ba = R.w, da = Math.hypot(x - R.x, f - R.z), ea = da - ba;
              W ||= da < ba;
              0 < ea && Q > ea && (Q = ea, F = R);
              ba = da / ba;
              P = P < ba ? P : ba;
            }
            if (!W) {
              Q = F.x;
              R = F.z;
              ba = F.w;
              da = x - Q;
              ea = f - R;
              let na = Math.hypot(da, ea), fa = Math.atan2(-ea, da);
              u && (p = (Math.random() - .5) * Math.PI / 2, I = cb(1, I / (1 + Math.random())));
              fa += p;
              g = -Math.cos(fa);
              m = Math.sin(fa);
              .1 < na && (na = (na < ba ? na : ba) / (na || 1), x = da * na + Q, f = ea * na + R);
            }
            u = W;
            I = T(I, 3 + 6 * (1 - P), 3 + P);
            k = T(k, x = T(x, x + g, I), I);
            C = T(C, f = T(f, f + m, I), I);
            n = ib(n, Math.atan2(k - v, C - t) / Wa - 180, 3 * d);
            v = k;
            t = C;
            P = (A.l = E.l.multiply(b.translate(k, 0, C).rotateSelf(0, n, 7 * Math.sin(1.7 * a)))).transformPoint();
            if (1.5 > mb(P)) {
              A.j = 1;
              P = [
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
              var W = ma && 12 > ma ? 5 : 7;
              ya || (h4.innerHTML = P, oa = a + W);
              Ob();
            }
          }
          A.j
            && (P = B % 4 - 2,
              A.l = Ka[2].l.translate(
                B % 4 * 1.2 - 1.7 + Math.sin(a + B) / 7,
                -2,
                1.7 * (B / 4 | 0) - 5.5 + (0 > P ? -P : P) + Math.cos(a / 1.5 + B) / 6,
              ));
        },
      },
      E = Ba,
      B = Qa.length,
      z = c.map(([P, Q, R]) => ({ x: P, z: Q, w: R }));
    let F = z[0], { x, z: f } = F, k = x, C = f;
    Qa.push(A);
  },
  Zb = (b, c, g) => {
    g = g ? Ia : Ga;
    if (Da) {
      g = q.rotate(0, 40 * Math.sin(la) - 70);
      for (var { F: m } of Ja) {
        ob(g, Ya, m - 1);
      }
      S.uae(b, !1, Ya);
      S.d97(4, Ja[2].G - Ja[0].v, 5123, 2 * Ja[0].v);
    } else {
      for (m = 0; Ka.length > m; ++m) {
        const { H: p, F: n, l: v } = Ka[m];
        p && ob(v, Ya, n - 1);
      }
      S.uae(b, !1, Ya);
      S.d97(4, (c ? Ja[2].G : Ja[0].v) - 3, 5123, 6);
      for (c = 0; e.length > c; ++c) {
        const { l: p, g: n } = e[c];
        ob(p, Ya, c);
        Ya[16 * c + 15] = 1 - n;
      }
      S.uae(b, !1, Ya);
      S.das(4, Fa.G - Fa.v, 5123, 2 * Fa.v, e.length);
      for (c = 0; 13 > c; ++c) {
        ob(Qa[c].l, Ya, c);
      }
      S.uae(b, !1, Ya);
      S.das(4, g.G - g.v, 5123, 2 * g.v, 13);
    }
  },
  $b = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls:<b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  Y = NO_INLINE((b, c, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b),
  S = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const b in S) {
  S[b[0] + [...b].reduce((c, g, m) => (c * m + g.charCodeAt(0)) % 434, 0).toString(36)] = S[b];
}
const Hb = new AudioContext(), Gb = Hb.createBufferSource();
setTimeout(() => {
  let b = 0, c = 6;
  const g = () => {
      if (h4.innerHTML += ".", !--c) {
        let v = !1, t = 0, u = 0, I = 0, A = 0, E = 0, B = 1, z, F, x, f, k, C, P, Q, R, ba, da, ea;
        const W = { x: 0, y: 0, z: 0 },
          na = new Int32Array(256),
          fa = new Uint8Array(65536),
          ub = () => {
            const { u: y, I: D } = e[ra], { x: H, y: M, z: J } = D.transformPoint({ x: 0, y: 8, z: -3 });
            l.x = W.x = H;
            l.y = W.y = P = M;
            l.z = W.z = J;
            F =
              C =
              k =
              x =
              f =
                0;
            B = 1;
            t = u = y?.F || 1;
          },
          zb = () => {
            let y = 0, D = 0, H = 0, M = 0, J = 0;
            na.fill(0);
            for (let G = 0; 31 > G; ++G) {
              let Z = 0;
              const aa = 512 * G;
              for (let pa = 0; 128 > pa; pa++) {
                let X = aa + 4 * pa;
                var O = (fa[X] + fa[1 + X]) / 255;
                if (X = fa[2 + X], 14 < pa && 114 > pa && (Z += O), X && O) {
                  O = na[X] + 1, na[X] = O, y > O || (y = O, D = X);
                }
              }
              3 > Z && 5 < G && (M += G / 32);
              3 < Z && (7 < G && (H += G / 15), J = 1);
            }
            D && (J = 1);
            B ? D && (B = 0, u = D) : u = D || t;
            t = D;
            F = J;
            x = T(x, J ? 6.5 : 8, 4);
            W.y += H / 41 - (J ? 1 : x) * M / 41 * x * d;
          },
          Ab = () => {
            for (let J = 32; 128 > J; J += 2) {
              var y = 0;
              let O = 0;
              var D = 0;
              let G = 0;
              const Z = 512 * J;
              for (let aa = 1 & J; 128 > aa; aa += 2) {
                var H = Z + 4 * aa;
                const pa = Z + 4 * (127 - aa), X = fa[H] / 255, ta = fa[1 + pa] / 255;
                var M = aa / 63.5 - 1;
                M = 1 - (0 > M ? -M : M);
                if (
                  10 < aa && 118 > aa
                  && (y = cb(y, cb(X * M, X * fa[pa] / 127.5)), O = cb(O, cb(ta * M, ta * fa[1 + H] / 255))),
                    54 > aa || 74 < aa
                ) {
                  H = (1 - M) * (ta < X ? X : ta) / 3,
                    .001 < H && (64 > aa && H > D ? D = H : 64 < aa && H > G && (G = H));
                }
              }
              D = G - D;
              y = O - y;
              (0 > D ? -D : D) > (0 > Q ? -Q : Q) && (Q = D);
              (0 > y ? -y : y) > (0 > R ? -R : R) && (R = y);
            }
          },
          Ha = () => {
            R = Q = 0;
            NO_INLINE(zb)();
            NO_INLINE(Ab)();
            var y = ha + (Pa[0] ? 1 : 0) + (Pa[2] ? -1 : 0),
              D = ka + (Pa[1] ? 1 : 0) + (Pa[3] ? -1 : 0),
              H = navigator.getGamepads()[0];
            if (H) {
              var M = ta => X[ta]?.pressed || 0 < X[ta]?.value;
              const X = H.buttons;
              H = H.axes;
              var J = M(1) || M(3) || M(2) || M(0);
              J !== v && (v = J) && (Pa[5] = 1);
              y += (.2 < db(-H[0]) ? -H[0] : 0) + (M(14) ? 1 : 0) + (M(15) ? -1 : 0);
              D += (.2 < db(-H[1]) ? -H[1] : 0) + (M(12) ? 1 : 0) + (M(13) ? -1 : 0);
              Ca && (.3 < db(H[2]) && (Va += 80 * H[2] * d), .3 < db(H[3]) && (Ua += 80 * H[3] * d));
            }
            .05 > (0 > D ? -D : D) && (D = 0);
            .05 > (0 > y ? -y : y) && (y = 0);
            M = Math.atan2(D, y);
            H = eb(Math.hypot(D, y));
            J = (y = H * Math.cos(M), D = H * Math.sin(M), eb(1 - 5 * cb(0 > Q ? -Q : Q, 0 > R ? -R : R)));
            var O =
              (u || (Q += k * J * d, R += C * J * d),
                k = T(k, 0, F ? 8 : 4),
                C = T(C, 0, F ? 8 : 4),
                f = T(f, F ? (y || D ? F ? 7 : 4 : 0) * J : 0, F ? .1 < J ? 10 : y || D ? 5 : 7 : 1),
                Ca ? Va * Wa : Math.PI);
            J = Math.sin(O) * f * d;
            O = Math.cos(O) * f * d;
            J = (Q -= y * O - D * J, R -= y * J + D * O, 1 === Ka[u].H && Ka[u].l || q);
            O = J.inverse();
            if (
              O.m41 = 0,
                O.m42 = 0,
                O.m43 = 0,
                { x: Q, z: R } = O.transformPoint({ x: Q, z: R, w: 0 }),
                W.x += Q,
                W.z += R,
                u !== z
            ) {
              z = u;
              const { x: X, y: ta, z: vb } = J.inverse().transformPoint(l);
              W.x = X;
              W.y = ta;
              W.z = vb;
            }
            O = l.x;
            const G = l.z, { x: Z, y: aa, z: pa } = J.transformPoint(W);
            J = (l.x = Z, l.y = aa, l.z = pa, db(P - aa));
            (P = T(P, aa + .1, 50 * J + 5),
                u && (k = (l.x - O) / d, C = (l.z - G) / d),
                (y || D) && (I = 90 - M / Wa),
                A = ib(A, I, 8 * d),
                E += (H - E) * eb(10 * d),
                ba = jb(ba, l.x, .5, d),
                da = jb(da, l.y, 2, d),
                ea = jb(ea, l.z, .5, d),
                Ca)
              ? (y = 200 * B,
                Ra = T(Ra, l.x, 18 + y),
                Sa = T(Sa, l.y + 1.5, 15 + y),
                Ta = T(Ta, l.z, 18 + y),
                Ua = cb(87 > Ua ? Ua : 87, -87))
              : (Ra = jb(Ra, ba, 1, 2 * d),
                Sa = jb(Sa, da + 13 + 15 * B, 4, 2 * d),
                Ta = jb(Ta, ea + -18, 1, 2 * d),
                y = Ta - ea,
                1 < (0
                      > y
                    ? -y
                    : y)
                && (D = Ra - ba,
                  M = Sa - da,
                  Va = 270 + Math.atan2(y, D) / Wa,
                  Ua = 90 - Math.atan2(Math.hypot(y, D), M) / Wa));
            Va = hb(Va);
          },
          Za = y => {
            if (S.i34()) {
              location.reload();
            } else {
              requestAnimationFrame(Za);
              const D = (y - (Ea || y)) / 1e3;
              d = Da ? Pa[5] = 0 : .066 < D ? .066 : D;
              a += d;
              la += D;
              Ea = y;
              0 < d
                && (S.b6o(36160, Ma),
                  S.fa7(),
                  S.r9r(0, 0, 128, 128, 6408, 5121, fa),
                  S.iay(36009, [36064, 36096]),
                  S.iay(36008, [36064, 36096]),
                  NO_INLINE(Ha)(),
                  Mb(),
                  1 === u && (e[9].j = -15 > l.x && 0 > l.z ? 1 : 0),
                  (-25 > l.x || 109 > l.z ? -25 : -9) > l.y && ub(),
                  Pa[5] = 0);
              y = Da
                ? q.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + eb(hC.clientWidth / 1e3))
                : q.rotate(-Ua, -Va, -0).invertSelf().translateSelf(-Ra, -Sa, -Ta);
              0 < d
                && (ia(),
                  S.b6o(36160, Ma),
                  S.v5y(0, 0, 128, 128),
                  S.c4s(16640),
                  S.cbf(!0, !1, !0, !1),
                  S.uae(ia("b"), !1, ob(q.rotate(0, 180).invertSelf().translateSelf(-l.x, -l.y, .3 - l.z))),
                  Zb(ia("c"), 0, 1),
                  S.c4s(256),
                  S.cbf(!1, !0, !0, !1),
                  S.uae(ia("b"), !1, ob(q.translate(-l.x, -l.y, -l.z - .3))),
                  Zb(ia("c"), 0, 1),
                  S.f1s());
              qa();
              S.b6o(36160, gb);
              S.v5y(0, 0, 2048, 2048);
              $a[0](wb(y, .3, 55, 10));
              $a[1](wb(y, 55, 177, 11));
              ja();
              S.b6o(36160, null);
              S.v5y(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
              S.cbf(!0, !0, !0, !0);
              S.c4s(16640);
              $a[0]();
              $a[1]();
              S.uae(ja("a"), !1, kb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
              S.uae(ja("b"), !1, ob(y));
              S.ubu(ja("k"), Ra, Sa, Ta);
              Zb(ja("c"), !Ca, 0);
              ua();
              S.ubu(ua("j"), S.drawingBufferWidth, S.drawingBufferHeight, la);
              Da ? S.ubu(ua("k"), 0, 0, 0) : S.ubu(ua("k"), Ra, Sa, Ta);
              S.uae(ua("b"), !1, ob(y.inverse()));
              S.d97(4, 3, 5123, 0);
              S.b6o(36160, Ma);
              S.f1s();
            }
          },
          ab = p;
        var n = (NO_INLINE(Pb)(),
          xb(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ));
        const qa = yb(
            xb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          ua = yb(
            xb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          ia = yb(
            n,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          ja = yb(
            n,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          gb = S.c5w(),
          Ma = S.c5w();
        n = S.c3z();
        const va = S.c25(),
          $a = r(2, y => {
            const D = new Float32Array(16), H = S.c25(), M = ja(y ? "j" : "i");
            return S.b6o(36160, gb),
              S.d45([0]),
              S.r9l(0),
              ja(),
              S.ubh(ja(y ? "h" : "g"), y),
              S.a4v(33984 + y),
              S.b9j(3553, H),
              S.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              S.t2z(3553, 10241, 9729),
              S.t2z(3553, 10240, 9729),
              S.t2z(3553, 34893, 515),
              S.t2z(3553, 34892, 34894),
              S.t2z(3553, 10243, 33071),
              S.t2z(3553, 10242, 33071),
              J => {
                J
                  ? (ob(J, D), S.uae(qa("b"), !1, D), S.fas(36160, 36096, 3553, H, 0), S.c4s(256), Zb(qa("c"), !Ca, 0))
                  : S.uae(M, !1, D);
              };
          });
        ua();
        S.ubh(ua("q"), 3);
        ia();
        S.uae(ia("a"), !1, kb(1.4, .59, 1e-4, 1));
        ja();
        S.ubh(ja("q"), 3);
        S.e8z(2929);
        S.e8z(2884);
        S.c70(1);
        S.c7a(1029);
        S.d4n(515);
        S.c5t(0, 0, 0, 1);
        S.b6o(36160, Ma);
        S.bb1(36161, n);
        S.r4v(36161, 33189, 128, 128);
        S.f8w(36160, 36096, 36161, n);
        S.a4v(33987);
        S.b9j(3553, va);
        S.fas(36160, 36064, 3553, va, 0);
        S.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        S.a4v(33987);
        S.b9j(3553, S.c25());
        S.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, ab);
        S.gbn(3553);
        S.t2z(3553, 10241, 9987);
        S.t2z(3553, 10240, 9729);
        Ja.map((y, D) => {
          y.h = D
            ? () =>
              Ja[0].l.translate(0, E * eb(.45 * Math.sin(9.1 * a + Math.PI * (D - 1) - Math.PI / 2))).rotateSelf(
                E * Math.sin(9.1 * a + Math.PI * (D - 1)) * .25 / Wa,
                0,
              )
            : () => q.translate(l.x, P, l.z).rotateSelf(0, A);
        });
        try {
          const [y, D, H, M, J] = JSON.parse(localStorage.DanteSP22);
          e.map((O, G) => O.g = O.i = O.j = G ? 0 | y[G] : 0);
          Qa.map((O, G) => O.j = 0 | D[G]);
          ra = H;
          a = M;
          Aa = J;
        } catch (y) {
        }
        za = 0 > ra ? 0 : 1 < ra ? 1 : ra;
        h4.innerHTML = "";
        oa = 0;
        Nb();
        Mb();
        ub();
        Ra = ba = l.x;
        Sa = (da = l.y) + 13;
        Ta = (ea = l.z) + -18;
        NO_INLINE(Kb)();
        requestAnimationFrame(Za);
      }
    },
    m = () => {
      if (5 > b) {
        var n = 0, v = b++;
        let [A, E, B, z, F, x, f, k, C, P, Q, R, ba, da, ea, W, na, fa, ub, zb, Ab] = La[v];
        P = P * P * 4;
        for (const Ha of [5513, 4562, 3891]) {
          let Za = 0, ab = 0, qa, ua, ia, ja, gb;
          const Ma = [],
            va = new Int32Array(768 * Ha),
            $a = 2 ** (R - 9) / Ha,
            y = Math.PI * 2 ** (na - 8) / Ha,
            D = ub * Ha & -2;
          for (let H = 0; 11 >= H; ++H) {
            for (
              let M = 0, J = +"000001234556112341234556011111111112011111111112000001111112"[12 * v + H];
              32 > M;
              ++M
            ) {
              const O = (32 * H + M) * Ha;
              for (var t = 0; 4 > t; ++t) {
                if (qa = 0, J && (qa = Ab[J - 1].charCodeAt(M + 32 * t) - 40, qa += 0 < qa ? 106 : 0), qa) {
                  var u;
                  if (!(u = Ma[qa])) {
                    u = qa;
                    let G = void 0, Z = void 0;
                    var I = qa;
                    let aa = 0, pa = 0;
                    const X = 2 > v ? Eb : Cb, ta = 2 > v ? 1 > v ? Db : Fb : Cb, vb = new Int32Array(k + C + P);
                    for (let Na = 0, Bb = 0; k + C + P > Na; ++Na, ++Bb) {
                      let Oa = 1;
                      k > Na ? Oa = Na / k : k + C > Na || (Oa = (1 - (Oa = (Na - k - C) / P)) * 3 ** (-Q / 16 * Oa));
                      0 > Bb
                        || (Bb -= 4 * Ha,
                          Z = 0.003960 * 2 ** ((I + E - 256) / 12),
                          G = 0.003960 * 2 ** ((I + F - 256) / 12) * (1 + (v ? 0 : 8e-4 * 9)));
                      vb[Na] = 80
                          * (X(aa += Z * Oa ** (B / 32)) * A + ta(pa += G * Oa ** (x / 32)) * z
                            + (f ? (2 * Math.random() - 1) * f : 0))
                          * Oa | 0;
                    }
                    u = Ma[u] = vb;
                  }
                  for (let G = 0, Z = 2 * O; u.length > G; ++G, Z += 2) {
                    va[Z] += u[G];
                  }
                }
              }
              for (let G, Z = 0; Ha > Z; ++Z) {
                t = 0,
                  u = 2 * (O + Z),
                  ((G = va[u]) || gb)
                  && (ia = 0.003080 * ba,
                    1 != v && 4 != v || (ia *= Math.sin($a * u * Math.PI * 2) * zb / 512 + .5),
                    ia = 1.5 * Math.sin(ia),
                    Za += ia * ab,
                    ja = (1 - da / 255) * (G - ab) - Za,
                    ab += ia * ja,
                    G = 4 == v ? ab : 3 == v ? ja : Za,
                    v || (G = 1 > (G *= 22e-5) ? -1 < G ? Math.sin(G / 4 * Math.PI * 2) : -1 : 1, G /= 22e-5),
                    G *= ea / 32,
                    gb = 1e-5 < G * G,
                    ua = Math.sin(y * u) * W / 512 + .5,
                    t = G * (1 - ua),
                    G *= ua),
                  u < D || (t += va[
                    1 + u
                    - D
                  ] * fa / 255,
                    G += va[u - D] * fa / 255),
                  bb[n + u] += va[u] = t,
                  ++u,
                  bb[n + u] += va[u] = G;
              }
            }
          }
          n += va.length;
        }
        setTimeout(m);
      } else {
        n = Hb.createBuffer(2, 5362944, 44100);
        for (v = 0; 2 > v; v++) {
          for (let A = v, E = n.getChannelData(v); 10725888 > A; A += 2) {
            E[A >> 1] = bb[A] / 65536;
          }
        }
        Gb.buffer = n;
        Gb.loop = !0;
      }
      g();
    },
    p = new Image();
  setTimeout(() => {
    let n;
    const v = (A, E, B) =>
        q.translate(A + Math.sin(a + 2) / 5, E + Math.sin(.8 * a) / 3, B).rotateSelf(
          2 * Math.sin(a),
          Math.sin(.7 * a),
          Math.sin(.9 * a),
        ),
      t = (() => {
        const A = r(
            11,
            B => q.translate(Math.sin(B / 10 * Math.PI), B / 10).rotate(+B).scale(1.0001 - B / 10, 0, 1 - B / 10),
          ),
          E = rb(18);
        return r(10, B => sb(qb(E, A[B]).reverse(), qb(E, A[B + 1]), 1)).flat();
      })(),
      u = V(
        U(
          w(K(20, 1, 1.15, 1), q.translate(0, -3).scale(3.5, 1, 3.5), Y(.7, .4, .25, .7)),
          w(K(20, 1, 1.3, 1), q.translate(0, -2.5).scale(2.6, 1, 3), Y(.7, .4, .25, .2)),
          w(K(h), q.translate(4, -1.2).scale3d(2), Y(.7, .4, .25, .3)),
        ),
      ),
      I = V(
        U(
          w(K(h), q.translate(0, -8).scale(6, 15, 2.2)),
          w(K(h), q.translate(0, -14.1).scale(4, 13, 4)),
          w(K(20, 1), q.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      );
    N(() => {
      L([h.slice(1)], q.translate(-2).scale3d(3).rotate(90, 0));
    }, 0);
    N(() => {
      const A = () => {
          var f = e[2].i, k = 1 - e[4].i;
          return f < k ? f : k;
        },
        E = (f, k, C) =>
          N(P => {
            P.h = () => q.translate(A() * Math.sin(3 * f + a * f) * k);
            h.map(({ x: Q, z: R }) => {
              L(K(11, 1), q.translate(4 * Q, 4, C + 4 * R).scale(.8, 3, .8), Y(.5, .3, .7, .6));
              L(K(h), q.translate(4 * Q, 7, C + 4 * R).scale(1, .3), Y(.5, .5, .5, .3));
            });
            L(V(U(
              w(K(h), q.translate(0, 0, C).scale(5, 1, 5), Y(.8, .8, .8, .3)),
              ...[-1, 1].map(Q =>
                w(K(h), q.translate(5 * Q, .2, C).rotate(0, 0, -30 * Q).scale(4, 1, 2), Y(.8, .8, .8, .3))
              ),
            )));
            L(K(h), q.translate(0, -3, C).scale(8, 2, 8), Y(.4, .4, .4, .3));
          }),
        B = (N(f => {
          f.h = () => v(-12, 4.2, 40 * za - 66);
          L(u);
          Xb(q.translate(0, -3, 4));
        }),
          r(7, f => w(K(6, 1), q.translate(4 * (f / 6 - .5), 3).scale(.2, 3, .2), Y(.3, .3, .38))).flat()),
        z = (Yb(q.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Yb(
            q.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...rb(18).map(({ x: f, z: k }) => [7 * f, 10 * k, 4.5 - 2 * (0 > f ? -f : f)]),
          ),
          L(K(h), q.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Y(.8, .8, .8, .2)),
          h.map(({ x: f, z: k }) => L(K(6), q.translate(3 * f, 3, 15 * k).scale(.7, 4, .7), Y(.6, .3, .3, .4))),
          [-23, 22].map(f => L(K(h), q.translate(0, 0, f).scale(3, 1, 8), Y(.9, .9, .9, .2))),
          [-15, 15].map((f, k) => {
            L(K(h), q.translate(0, 6.3, f).scale(4, .3, 1), Y(.3, .3, .3, .4));
            L(K(h), q.translate(0, 1, f).scale(3, .2, .35), Y(.5, .5, .5, .3));
            N(C => {
              C.h = () => q.translate(0, 4.7 * -e[k + 1].g, f);
              L(B);
            });
          }),
          r(5, f =>
            r(2, k =>
              L(
                t,
                q.translate(18.5 * (k - .5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * k).scale(1.2, 10, 1.2),
                Y(1, 1, .8, .2),
              ))),
          L(K(h), q.translate(3, 1.5, -20).scale(.5, 2, 5), Y(.7, .7, .7, .2)),
          L(K(h), q.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Y(.75, .75, .75, .2)),
          L(K(5), q.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Y(.6, .3, .3, .4)),
          Xb(q.translate(-5.4, 1.5, -19).rotate(0, -90)),
          L(K(h), q.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), Y(.8, .2, .2, .5)),
          L(V(
            U(
              Wb(
                w(K(6, 0, 0, .3), q.translate(8, -3, -4).scale(13, 1, 13), Y(.7, .7, .7, .2)),
                w(K(6), q.translate(0, -8).scale(9, 8, 8), Y(.4, .2, .5, .5)),
                w(K(6, 0, 0, .3), q.translate(0, -0.92).scale(13, 2, 13), Y(.8, .8, .8, .2)),
              ),
              w(K(5), q.scale(5, 30, 5), Y(.4, .2, .6, .5)),
              w(K(5, 0, 1.5), q.translate(0, 1).scale(4.5, .3, 4.5), Y(.7, .5, .9, .2)),
              w(K(h), q.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), Y(.5, .5, .5, .5)),
              w(K(6), q.translate(15, -1.5, 4).scale(3.5, 1, 3.5), Y(.5, .5, .5, .5)),
            ),
          )),
          N(f => {
            f.h = () =>
              q.translate(
                0,
                .01 < e[3].g ? (5 * Math.cos(1.5 * a) + 2) * e[3].i * (1 - e[2].g) + -15 * (1 - e[3].g) : -500,
                0,
              );
            Xb(q.translate(0, 1.2));
            L(K(5), q.translate(0, -0.2).scale(5, 1, 5), Y(.6, .65, .7, .3));
          }),
          Xb(q.translate(15, -2, 4)),
          E(.7, 12, 35),
          E(1, 8.2, 55),
          N(f => {
            f.h = () => q.translate(A() * Math.sin(a / 1.5 + 2) * 12);
            L(
              V(U(
                Wb(
                  w(K(h), q.scale(1.5, 1, 5), Y(.9, .9, .9, .2)),
                  w(K(6), q.scale(4, 1, 5), Y(.9, .9, .9, .2)),
                  w(K(h), q.translate(0, -2).scale(2, 3.2, 1.9), Y(.3, .8, .5, .5)),
                  w(K(16, 1, 0, 4), q.scale(1, 1, 1.5).rotate(0, 90), Y(.9, .9, .9, .2)),
                ),
                w(K(h), q.scale(1.3, 10, 1.3), Y(.2, .7, .4, .6)),
              )),
              q.translate(0, 0, 45),
            );
            Yb(q.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          N(f => {
            f.h = () => q.translate(9.8 * (1 - A()));
            L(K(3), q.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), Y(.3, .6, .6, .2));
            L(K(8), q.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Y(.8, .8, .8, .2));
            L(K(h), q.translate(-23, -3, 55).scale(5.2, 1.7, 3), Y(.5, .5, .5, .3));
            L(K(h), q.translate(-23, -2.2, 62).scale(3, 1, 4), Y(.5, .5, .5, .3));
            Xb(q.translate(-23, -0.5, 66.5));
          }),
          L(K(h), q.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Y(.9, .9, .9, .2)),
          N(f => {
            f.h = () => q.translate(0, eb(1 - 5 * A()) * fb(e[4].g, e[5].g) * Math.sin(1.35 * a) * 4);
            L(K(h), q.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Y(.7, .7, .7, .2));
            L(
              V(U(w(K(h), q.scale(3, 1.4, 2.7)), w(K(h), q.scale(1.2, 8, 1.2)))),
              q.translate(-33, -3, 55),
              Y(.7, .7, .7, .2),
            );
          }),
          N(f => {
            f.h = () => q.translate(0, 0, eb(1 - 5 * A()) * fb(e[4].g, e[5].g) * Math.sin(.9 * a) * 8);
            L(V(
              U(
                w(K(h), q.translate(-27, -3, 55).scale(3, 1.4, 2.7), Y(.9, .9, .9, .2)),
                w(K(h), q.translate(-27, -3, 55).scale(1, 3), Y(.9, .9, .9, .2)),
              ),
            ));
            L(K(h), q.translate(-39, -3, 55).scale(3, 1.4, 2.7), Y(.9, .9, .9, .2));
          }),
          N(f => {
            f.h = () => q.translate(0, -6.5 * e[4].i);
            L(K(6), q.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), Y(.7, .7, .7, .4));
          }),
          [...w(
            V(Wb(
              w(K(h), q.translate(0, -3).scale(11, 1.4, 3), Y(.9, .9, .9, .2)),
              U(
                w(K(6), q.rotate(0, 0, 90).scale(6, 8, 6), Y(.3, .6, .6, .3)),
                w(K(4, 0, .01), q.translate(0, 6).scale(12, 2, .75).rotate(0, 45), Y(.3, .6, .6, .3)),
                w(K(6), q.rotate(0, 0, 90).scale(5, 12, 5), Y(.3, .6, .6, .3)),
                ...[5, 0, -5].map(f =>
                  w(K(5), q.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Y(.3, .6, .6, .3))
                ),
              ),
            )),
            q,
          )]),
        F =
          (L(z, q.translate(-53, 0, 55)),
            L(K(6), q.translate(-61.3, -2.4, 49).scale(3, 1, 5), Y(.4, .6, .6, .3)),
            L(K(7), q.translate(-57, -2.6, 46).scale(4, 1, 4), Y(.8, .8, .8, .3)),
            Xb(q.translate(-55, -1.1, 46).rotate(0, 90)),
            N(f => {
              f.h = () => q.translate(-75, (1 - e[5].i) * (1 - e[6].g) * 3, 55).rotate(180 * (1 - e[5].i) + xa, 0);
              L(z);
            }, 2),
            L(K(h), q.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), Y(.7, .7, .7, .2)),
            L(K(3, 0, -0.5), q.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Y(.8, .8, .8, .2)),
            L(
              V(U(
                Wb(
                  w(K(h), q.translate(-100, -2.5, 55).scale(8, 1, 8), Y(.8, .8, .8, .2)),
                  w(K(h), q.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Y(.8, .8, .8, .2)),
                  w(K(h), q.translate(-100, -2.6, 70).scale(3, 1.1, 7), Y(.8, .8, .8, .2)),
                  w(K(h), q.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), Y(.8, .8, .8, .2)),
                  w(K(6), q.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Y(.6, .6, .6, .3)),
                  w(K(h), q.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Y(.8, .8, .8, .2)),
                  w(K(h), q.translate(-100, .42, 92).scale(3, 1.1, 4.1), Y(.8, .8, .8, .2)),
                ),
                w(K(8), q.translate(-100, -1, 55).scale(7, .9, 7), Y(.3, .3, .3, .4)),
                w(K(8), q.translate(-100, -2, 55).scale(4, .3, 4), Y(.4, .4, .4, .5)),
                w(K(8), q.translate(-100, -3, 55).scale(.6, 1, .6), Y(.4, .4, .4, .5)),
              )),
              q,
            ),
            Yb(q.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            Yb(q.translate(-89, .2, 80), [0, 0, 6]),
            L(V(
              U(
                w(K(h), q.translate(-100, 1, 63).scale(7.5, 4), Y(.5, .5, .5, .4)),
                w(K(h), q.translate(-100, 0, 70).scale(2, 2, 10), Y(.5, .5, .5, .4)),
                w(K(20, 1), q.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Y(.5, .5, .5, .4)),
              ),
            )),
            N(f => {
              f.h = () => q.translate(-99.7, 5.3 * -e[6].g - 2, 63.5);
              L(B);
            }),
            h.map(({ x: f, z: k }) => {
              L(K(6), q.translate(7 * f - 100, -3, 7 * k + 55).scale(1, 8.1), Y(.6, .15, .15, .8));
              [4, -0.4].map(C =>
                L(K(6), q.translate(7 * f - 100, C, 7 * k + 55).scale(1.3, .5, 1.3), Y(.4, .2, .2, .8))
              );
            }),
            r(7, f => {
              L(
                K((23 * f + 1) % 5 + 5, 0, .55),
                q.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(
                  5 + f / 2,
                  1 + f / 6,
                  5 + f / 3,
                ),
                Y(.5 - f / 17, .5 - (1 & f) / 9, .6, .3),
              );
            }),
            L(K(h), q.translate(-87, -9.5, 24).scale(7, 1, 3), Y(.4, .5, .6, .4)),
            L(K(4), q.translate(-86, -9.2, 27).scale(5, 1, 5), Y(.5, .6, .7, .3)),
            L(K(12, 1), q.translate(-86, -9, 31).scale(1.5, 1, 1.5), Y(.3, .3, .4, .1)),
            Xb(q.translate(-86, -7.5, 31)),
            N(f => {
              f.h = () => q.translate(0, 3.5 * (1 - cb(e[6].g, e[7].g)) + fb(e[7].i, e[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(k =>
                L(K(h), q.translate(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), Y(.2, .5, .6, .2))
              );
            }),
            N(f => {
              f.h = () => {
                const k = fb(e[7].i, e[6].i);
                return q.translate(0, k * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + k) * k);
              };
              [6, 18].map(k => L(K(h), q.translate(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), Y(.1, .4, .5, .2)));
            }),
            L(
              V(U(
                Wb(
                  w(K(h), q.scale(11, 1, 13), Y(.3, .4, .6, .3)),
                  w(K(5), q.translate(0, 0, -7).scale(2, 1.2, 2), Y(.2, .4, .7, .3)),
                  w(K(5), q.scale(9, 1.2, 9), Y(0, .2, .3, .5)),
                ),
                w(K(5), q.scale(5.4, 5, 5.4), Y(0, .2, .3, .5)),
              )),
              q.translate(-38.9, -11.3, 17),
            ),
            Xb(q.translate(-38.9, -9.6, 10)),
            N(f => {
              f.h = () => q.translate(0, -7.3 * e[7].i);
              L(
                V(U(
                  Wb(
                    w(K(5), q.translate(0, 2).scale(5, 7, 5).skewY(8), Y(.2, .4, .5, .5)),
                    w(K(5), q.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), Y(.25, .35, .5, .5)),
                    w(K(5), q.translate(0, 9).scale(.6, 7, .6).skewY(8), Y(.35, .3, .5, .5)),
                  ),
                  w(K(5), q.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Y(.2, .4, .5, .5)),
                )),
                q.translate(-38.9, -11.3, 17),
              );
              Yb(q.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...rb(15).map(({ x: k, z: C }) => [3 * k, 3 * C, 1.2]));
            }),
            h.map(({ x: f, z: k }) => {
              n = q.translate(9 * f - 38.9, -7.3, 11 * k + 17);
              L(K(14, 1), n.scale(1, 4), Y(.25, .25, .25, 1));
              [1.5, 8].map(C => L(K(17, 1), n.translate(0, C - 4).scale(1.5, .5, 1.5), Y(.6, .6, .6, .3)));
            }),
            L(
              V(U(
                Wb(
                  w(K(6), q.translate(0, 0, -36).scale(15, 1.2, 15), Y(.7, .7, .7, .3)),
                  w(K(h), q.translate(0, 0, -18).scale(4, 1.2, 6), Y(.45, .4, .6, .3)),
                ),
                ...r(6, f =>
                  r(6, k =>
                    w(
                      K(6),
                      q.translate(4.6 * k - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * k)).scale(2, 5, 2),
                      Y(.7, .7, .7, .3),
                    ))).flat(),
              )),
              q.translate(-38.9, -11.3, 17),
            ),
            Yb(q.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
            L(K(5), q.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), Y(.8, .1, .25, .4)),
            Xb(q.translate(-84, -0.5, 85).rotate(0, 45)),
            N(f => {
              f.h = () => v(-123, 1.4, 55 + -65 * Aa);
              Xb(q.translate(0, -3, -4).rotate(0, 180));
              L(u);
            }),
            Yb(q.translate(-115, .2, -12), [0, 0, 3.5]),
            V(U(
              w(K(h), q.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), Y(.25, .25, .35, .3)),
              w(K(3), q.translate(0, 0, -5.5).scale(3, 2), Y(.6, .3, .4, .3)),
              ...[-1.2, 1.2].map(f => w(K(h), q.translate(f, -0.5, 1).scale(.14, .3, 6.5), Y(.7, .2, 0, .3))),
            ))),
        x = (N(f => {
          f.h = () => {
            var k = Math.sin(1.1 * a);
            return q.translate.call(q, 0, -2, fb(e[10].g, e[11].g) * (0 > k ? -k : k) * -8.5 + 10);
          };
          r(2, k => L(F, q.translate(9 * k - 110 + (1 & k), 1.7, -12)));
        }),
          N(f => {
            f.h = () => {
              var k = Math.sin(2.1 * a);
              return q.translate.call(q, 0, -2, fb(e[10].g, e[11].g) * (0 > k ? -k : k) * -8.5 + 10);
            };
            r(2, k => L(F, q.translate(9 * (k + 2) - 110 + (1 & k), 1.7, -12)));
          }),
          N(f => {
            f.h = () => {
              var k = Math.sin(1.5 * a);
              return q.translate.call(
                q,
                0,
                -2,
                -8.5 * cb((1 - e[10].g) * (1 - fb(e[10].g, e[11].g)), fb(e[10].g, e[11].g) * (0 > k ? -k : k)) + 10,
              );
            };
            r(3, k => L(F, q.translate(9 * k - 106, 1.7, -12)));
          }),
          L(
            V(U(
              Wb(
                w(K(h), q.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                w(K(h), q.translate(26.5, -0.6, 10).scale(17, 2, .5)),
              ),
              ...r(4, f => w(K(h), q.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
              ...r(3, f => w(K(h), q.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            q.translate(-123, 0, -12),
            Y(.5, .5, .6, .2),
          ),
          L(K(5), q.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), Y(.25, .25, .35, 1)),
          L(K(h), q.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Y(.8, .8, .8, .2)),
          L(K(6), q.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), Y(.6, .5, .7, .2)),
          Xb(q.translate(-116, -1.4, -18).rotate(0, 180)),
          r(3, f => {
            L(I, q.translate(12 * f - 109, -9, -12), Y(.6, .6, .6, .3));
            L(I, q.translate(-77, -9, -12 * f - 20).rotate(0, 90), Y(.6, .6, .6, .3));
          }),
          L(V(
            U(
              w(K(12), q.translate(-77, -13.9, -12).scale(4, 18.2, 4), Y(.7, .7, .7, .2)),
              w(K(h), q.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), Y(.4, .5, .6, .2)),
              w(K(h), q.translate(-77, 0, -14).scale(1.5, 2.2, 2), Y(.4, .5, .6, .2)),
              w(K(12), q.translate(-77, 2.8, -12).scale(3, 5, 3), Y(.4, .5, .6, .2)),
            ),
          )),
          L(K(h), q.translate(-115.5, -17, -12).scale(.5, 15, 2.2), Y(.6, .6, .6, .3)),
          L(K(h), q.translate(-77, -17, -50.5).scale(2.2, 15, .5), Y(.6, .6, .6, .3)),
          L(K(h), q.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), Y(.6, .6, .6, .3)),
          L(V(
            U(
              w(K(h), q.translate(-93, -5.8, -40).scale(9, 1, 5), Y(.8, .8, .8, .1)),
              w(K(9), q.translate(-98, -5.8, -40).scale(3, 8, 3), Y(.7, .7, .7, .2)),
            ),
          )),
          L(K(9), q.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), Y(.5, .5, .5, .3)),
          Xb(q.translate(-98, -4.4, -40).rotate(0, 90)),
          Yb(q.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          L(V(
            U(
              Wb(
                w(K(6, 0, 0, .6), q.translate(-100, .7, 105.5).scale(8, 1, 11), Y(.7, .7, .7, .2)),
                w(K(h), q.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), Y(.7, .7, .7, .2)),
                w(K(h), q.translate(-91.2, .7, 107).scale(3, 1, 3.3), Y(.7, .7, .7, .2)),
              ),
              w(K(5), q.translate(-100, .7, 113).scale(4, 3, 4), Y(.7, .7, .7, .2)),
            ),
          )),
          r(4, f =>
            N(k => {
              k.h = () => {
                const C = fb(e[8].i, e[12].i);
                return q.translate(
                  (2 < f ? 2 * (1 - C) + C : 0) - 100,
                  C * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + .7,
                  115 + (1 & f ? -1 : 1) * (1 - e[8].i) * (1 - e[12].i) * -7
                    + (.05 > C ? .05 : C) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
                );
              };
              L(
                K(6),
                q.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
                Y(.5 - f / 8, f / 12 + .5, .7, .3),
              );
            })),
          N(f => {
            f.h = () => {
              const k = fb(e[8].i, e[12].i);
              return q.translate(2.5 * (1 - k) - 139.7, -3 * (1 - e[8].g) + k * Math.sin(.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * k + 3), 0);
            };
            L(V(U(w(K(10), q.scale(6, 2, 6), Y(.1, .6, .5, .3)), w(K(10), q.scale(3.3, 6, 3.3), Y(.1, .6, .5, .5)))));
            n = q.translate(-7.5).rotate(0, 90);
            L(K(15, 1), n.scale(3, 2.3, 3), Y(.4, .4, .4, .3));
            L(K(10), n.scale(2, 2.5, 2), Y(.3, .8, .7, .3));
            L(K(5), n.scale(1, 3), Y(.5, .5, .5, .5));
            Xb(n.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(k =>
              L(t, q.rotate(90 * -k, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), Y(1, 1, .8, .2))
            );
            Yb(q.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(f => {
            L(K(12, 1), q.translate(-7.5 * f - 100, 3.7, 96).scale(.8, 4, .8), Y(.6, .24, .2, .5));
            [7.2, 1.5].map(k =>
              L(K(15, 1), q.translate(-7.5 * f - 100, k + .7, 96).scale(1.1, .5, 1.1), Y(.5, .24, .2, .4))
            );
            L(t, q.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), Y(1, 1, .8));
            L(
              V(U(
                w(K(h), q.translate(-4 * f, 3.5, -0.5).scale(4, 4, .7), Y(.5, .5, .5, .4)),
                w(K(h), q.scale(3, 3, 10), Y(.6, .24, .2, .5)),
                w(K(28, 1), q.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Y(.6, .24, .2, .5)),
                w(K(5), q.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Y(.6, .24, .2, .5)),
                w(K(5), q.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), Y(.6, .24, .2, .5)),
              )),
              q.translate(f - 100, .7, 97),
            );
          }),
          N(f => {
            f.h = () => q.translate(-100, .6 - 6 * e[12].g, 96.5).scale(.88, 1.2);
            L(B);
          }),
          [
            ...w(K(25, 1), q.scale(8, 1, 8), Y(.45, .45, .45, .2)),
            ...w(K(5), q.translate(0, 1).scale(1, .2), Y(.3, .3, .3, .2)),
          ]);
      N(f => {
        f.h = () => q.translate(-80, 1, 106).rotate(0, 40 + sa);
        L(V(
          U(
            w(K(25, 1), q.scale(8, 1, 8), Y(.45, .45, .45, .2)),
            w(K(h), q.translate(0, 0, -5.5).scale(1.5, 3, 2.5), Y(.45, .45, .45, .2)),
          ),
        ));
        L(K(8), q.translate(0, 2).scale(3, 1.5, 3), Y(.7, .7, .7, .1));
        L(K(5), q.translate(0, 2).scale(1, 2), Y(.3, .3, .3, .2));
        Yb(q.translate(0, 3), ...rb(10).map(({ x: k, z: C }) => [5.6 * k, 5.6 * C, 2.5]));
      });
      N(f => {
        f.h = () => q.translate(-64, 1, 106).rotate(0, wa);
        L(V(
          U(
            w(K(25, 1), q.translate(0, 2).scale(8, 1, 8), Y(.35, 0, 0, .3)),
            w(K(h), q.scale(9, 5, 2), Y(.3, 0, 0, .3)),
          ),
        ));
        L(x);
        [-1, 1].map(k =>
          L(t, q.rotate(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), Y(1, 1, .8))
        );
      });
      N(f => {
        f.h = () => q.translate(-48, 1, 106).rotate(0, 180 - wa);
        L(V(
          U(
            w(K(25, 1), q.translate(0, 2).scale(8, 1, 8), Y(.35, 0, 0, .3)),
            w(K(h), q.translate(7).scale(9, 5, 2), Y(.3, 0, 0, .3)),
            w(K(h), q.translate(0, 0, 7).scale(2, 5, 9), Y(.3, 0, 0, .3)),
          ),
        ));
        L(x);
      });
      N(f => {
        f.h = () => q.translate(-48, 1, 90).rotate(0, 270 + wa);
        L(V(
          U(
            w(K(25, 1), q.translate(0, 2).scale(8, 1, 8), Y(.35, 0, 0, .3)),
            w(K(h), q.translate(7).scale(9, 5, 2), Y(.3, 0, 0, .3)),
            w(K(h), q.translate(0, 0, -7).scale(2, 5, 9), Y(.3, 0, 0, .3)),
          ),
        ));
        L(x);
      });
      L(K(h), q.translate(-56, 1, 106).scale(.7, .8, 2.5), Y(.7, .7, .7, .2));
      L(K(h), q.translate(-48, 1, 98).scale(2.5, .8, .7), Y(.7, .7, .7, .2));
      L(K(h), q.translate(-39, .4, 90).scale(2, 1, 2), Y(.7, .7, .7, .3));
      L(K(h), q.translate(-34.2, .4, 90).scale(3, 1, 3), Y(.7, .7, .7, .3));
      Xb(q.translate(-34, 2.7, 96).rotate(-12, 0));
      L(K(5), q.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), Y(.2, .5, .5, .6));
      [Y(.1, .55, .45, .2), Y(.2, .5, .5, .3), Y(.3, .45, .55, .4)].map((f, k) =>
        N(C => {
          C.h = () =>
            q.translate(
              0,
              (1 - e[13].i) * (1 - e[14].i) * (k ? 0 : 3) + fb(e[13].i, e[14].i) * Math.sin(1.5 * a + 1.5 * k) * 4,
            );
          L(K(h), q.translate(-23.5, .5, 90 + 6.8 * k).scale(1 === k ? 2 : 3.3, 1, 3.3), f);
          2 === k && L(K(h), q.translate(-29.1, .4, 90).scale(2.1, 1, 3), Y(.7, .7, .7, .3));
          1 === k
            && L(K(h), q.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), Y(.6, .6, .7, .3));
        })
      );
      L(V(
        U(
          w(K(6, 0, 0, .3), q.translate(0, -0.92, 95).scale(14, 2, 14), Y(.8, .8, .8, .2)),
          w(K(5), q.translate(0, 0, 95).scale3d(6), Y(.3, .3, .3, .5)),
        ),
      ));
      [8, -6.1].map((f, k) =>
        r(
          3,
          C =>
            L(
              I,
              q.translate(6 * C - 6, f - (1 & C), 111 - .2 * (1 & C) - k),
              1 & C ? Y(.5, .5, .5, .3) : Y(.35, .35, .35, .5),
            ),
        )
      );
      [-1, 1].map(f => L(t, q.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), Y(1, 1, .8)));
      Xb(q.translate(0, 1.7, 82).rotate(0, 180));
      L(K(5), q.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Y(.5, .3, .3, .4));
      L(V(
        U(
          Wb(
            w(K(h), q.translate(0, 16, 110.5).scale(12, 1, 3), Y(.5, .3, .3, .4)),
            w(K(h), q.translate(0, 16, 111).scale(3, 1, 3.8), Y(.5, .3, .3, .4)),
          ),
          w(K(5), q.translate(0, 16, 103.5).scale(5.5, 5, 5.5), Y(.5, .3, .3, .4)),
        ),
      ));
      N(f => {
        f.h = () => {
          const k = Math.sin(a);
          return q.translate(-2 * k).rotate(0, 0, 25 * k);
        };
        L(K(3), q.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), Y(.5, .3, .3, .4));
        [22, 30].map(k => {
          L(K(6), q.translate(0, 16, k + 95).scale(3, 1, 2.3).rotate(0, 90), Y(.7, .7, .7, .4));
          L(K(h), q.translate(0, 6.2, k + 95).scale(.5, 11, .5), Y(.5, .3, .3, .4));
        });
      });
      L(K(6), q.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Y(.5, .6, .7, .3));
      L(K(h), q.translate(0, 16, 129).scale(1.5, 1, 2), Y(.5, .6, .7, .3));
      L(K(7), q.translate(0, 16.2, 133).scale(5, 1, 5), Y(.4, .5, .6, .4));
      N(f => {
        f.h = () => {
          const k = fb(fb((e[14].g + e[14].i) / 2, e[13].i), (e[15].g + e[15].i) / 2);
          return q.translate(0, 16 * k, 8.5 * eb(2 * k - 1) + 95);
        };
        L(K(5), q.scale(5, 1.1, 5), Y(.5, .3, .3, .4));
        L(K(5), q.scale(5.5, .9, 5.5), Y(.25, .25, .25, .4));
        Xb(q.translate(0, 1.5, -1).rotate(0, 180));
      });
      Yb(q.translate(0, 3, 95), ...rb(9).map(({ x: f, z: k }) => [9 * f, 9 * k, 4]));
      Yb(q.translate(0, 19, 134), [0, 0, 3.5]);
    });
    Ja = [
      N(() => {
        [0, 180].map(E => L(t, q.rotate(0, E).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), Y(1, 1, .8)));
        L(tb(20), q.translate(0, 1).scale(.5, .5, .5), Y(1, .3, .4));
        const A = w(
          V(U(K(15, 1), w(K(h), q.translate(0, 0, 1).scale(2, 2, .5)))),
          q.rotate(-90, 0).scale(.1, .05, .1),
          Y(.3, .3, .3),
        );
        [-1, 1].map(E => L(A, q.translate(.2 * E, 1.2, .4).rotate(0, 20 * E, 20 * E)));
        L(K(h), q.translate(0, .9, .45).scale(.15, .02, .06), Y(.3, .3, .3));
        L(tb(20), q.scale(.7, .8, .55), Y(1, .3, .4));
      }),
      ...[-1, 1].map(A =>
        N(() => {
          L(K(10, 1), q.translate(.3 * A, -0.8).scale(.2, .7, .24), Y(1, .3, .4));
        })
      ),
    ];
    Fa = N(() => {
      L(K(6, 1), q.scale(.13, 1.4, .13), Y(.3, .3, .5, .1));
      L(K(8, 1), q.translate(0, 1).scale(.21, .3, .21), Y(1, .5, .2));
      L(K(3), q.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), Y(.2, .2, .2, .1));
    }, 0);
    Ia = N(() => {
      L(K(6).slice(0, -1), q.scale(.77, 1, .77), Y(1, .3, .5));
    }, 0);
    Ga = N(() => {
      L(
        tb(30, 24, (A, E, B) => {
          const z = E / 24, F = A * Math.PI * 2 / 30, x = z ** .6 * Math.PI / 2;
          A = z * z * Math.sin(A * Math.PI * 14 / 30) / 4;
          return 23 === E
            ? { x: B.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(F) * Math.sin(x),
              y: Math.cos(z * Math.PI) - z - A,
              z: Math.sin(F) * Math.sin(x) + Math.sin(A * Math.PI * 2) / 4,
            };
        }),
        q.scale3d(.7),
        Y(1, 1, 1),
      );
      [-1, 1].map(A => L(tb(12), q.translate(.16 * A, .4, -0.36).scale3d(.09)));
    }, 0);
    setTimeout(m);
  });
  p.onload = p.onerror = g;
  p.src = $b;
});
