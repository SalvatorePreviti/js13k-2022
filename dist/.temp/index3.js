let aa,
  ba,
  ea,
  ha,
  ja,
  ka,
  la,
  ma,
  na,
  pa = 0,
  qa = 0,
  c = 0,
  ra = 0,
  va = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 1,
  d = 0.066;
const e = [],
  h = [],
  Ia = [],
  Ja = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Ka = { x: 0, y: 0, z: 0 };
var Oa = 0, Pa = 180;
const Qa = (a, b) => Array.from(Array(a), (g, m) => b(m)),
  Ra = Math.PI / 180,
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
  Ua = { x: 0, y: 0, z: 0 },
  Va = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  Xa = (a, b) => n(a) > b ? a : 0,
  q = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0,
  Ya = (a, b) => (a = Va(a), q(a, 1 - a, b)),
  Za = a => Math.atan2(Math.sin(a *= Ra), Math.cos(a)) / Ra,
  $a = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * Va(g) || 0,
  ab = ({ x: a, y: b, z: g }) => Math.hypot(a - Ka.x, b - Ka.y, g - Ka.z),
  bb = ({ x: a, y: b, z: g }, m) => a * m.x + b * m.y + g * m.z,
  cb = a => {
    let b, g = 0, m = 0, p = 0, l = a.at(-1);
    for (b of a) {
      g += (l.y - b.y) * (l.z + b.z), m += (l.z - b.z) * (l.x + b.x), p += (l.x - b.x) * (l.y + b.y), l = b;
    }
    return b = Math.hypot(g, m, p), g /= b, m /= b, p /= b, { x: g, y: m, z: p, w: g * l.x + m * l.y + p * l.z };
  },
  eb = (
    a,
    b = db,
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
  fb =
    a => (a.m11 = 1,
      a.m12 = 0,
      a.m13 = 0,
      a.m14 = 0,
      a.m21 = 0,
      a.m22 = 1,
      a.m23 = 0,
      a.m24 = 0,
      a.m31 = 0,
      a.m32 = 0,
      a.m33 = 1,
      a.m34 = 0,
      a.m41 = 0,
      a.m42 = 0,
      a.m43 = 0,
      a.m44 = 1,
      a),
  gb = (a, b, g) => (a.D = g, a.A = b, a),
  hb = (a, b, g = a.A) =>
    gb(
      a.map(m => {
        let p, l;
        return { x: m, y: p, z: l } = m,
          { x: m, y: p, z: l } = b.transformPoint({ x: m, y: p, z: l }),
          { x: m, y: p, z: l };
      }),
      g,
      a.D,
    ),
  t = (a, b, g) => a.map(m => hb(m, b, g)),
  ib = (a, b = 0) =>
    Qa(a, g => {
      const m = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > n(m) ? m : 0 > m ? m - b : m + b };
    }),
  jb = (a, b, g) =>
    a.map((m, p, { length: l }) => gb([m, b[l - p - 1], b[l - (p + 1) % l - 1], a[(p + 1) % l]], a.A, g)),
  H = (
    a,
    b,
    g = 0,
    m,
  ) => (a = a ? ib(a, m) : Sa,
    m = hb(a, G(0, 1).scale3d(0 < g ? g : 1)),
    a = hb(a, G(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...jb(a, m, b), m, a]),
  kb = (
    a,
    b = a,
    g = (
      m,
      p,
    ) => (p *= Math.PI / b,
      { x: Math.cos(m *= 2 * Math.PI / a) * Math.sin(p), y: Math.cos(p), z: Math.sin(m) * Math.sin(p) }),
  ) => {
    const m = [];
    for (let p = 0; a > p; p++) {
      for (let l = 0; b > l; l++) {
        const u = gb([], 0, 1);
        m.push(u);
        u.push(g(p, l, u));
        l && u.push(g((p + 1) % a, l, u));
        b - 1 > l && u.push(g((p + 1) % a, l + 1 % b, u));
        u.push(g(p, l + 1 % b, u));
      }
    }
    return m;
  },
  lb = (a, b) => {
    var g, m, p, l = b.C;
    for (var u = 0; l.length > u; ++u) {
      if (-0.00008 > (g = bb(a, l[u]) - a.w) ? p = b : 8e-5 < g && (m = b), p && m) {
        m = [];
        p = [];
        l = b.C;
        u = b.B;
        let v = l.at(-1), w = bb(a, v) - a.w;
        for (const z of l) {
          g = bb(a, z) - a.w,
            8e-5 > w && p.push(v),
            -0.00008 < w && m.push(v),
            (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g)
            && (w /= g - w,
              v = { x: v.x + (v.x - z.x) * w, y: v.y + (v.y - z.y) * w, z: v.z + (v.z - z.z) * w },
              m.push(v),
              p.push(v)),
            v = z,
            w = g;
        }
        return {
          o: 2 < m.length && { C: gb(m, l.A, l.D), B: u, u: b },
          m: 2 < p.length && { C: gb(p, l.A, l.D), B: u, u: b },
        };
      }
    }
    return { o: m, m: p };
  },
  mb = (a, b, g = cb(b.C)) => {
    let m, p, l;
    return a
      ? ({ o: m, m: p } = lb(a, b), m || p || a.s.push(b), m && (a.o = mb(a.o, m, g)), p && (a.m = mb(a.m, p, g)))
      : ({ x: m, y: p, z: g, w: l } = g, a = { x: m, y: p, z: g, w: l, s: [b], o: 0, m: 0 }),
      a;
  },
  nb = (a, b, g) => {
    const m = [],
      p = (l, u) => {
        let { o: v, m: w } = lb(l, u);
        v || w || (0 < g * bb(l, b) ? v = u : w = u);
        v && (l.o ? p(l.o, v) : m.push(v));
        w && l.m && p(l.m, w);
      };
    for (const l of b.s) {
      p(a, l);
    }
    return m;
  },
  qb = (a, b) => a && (b(a), qb(a.o, b), qb(a.m, b)),
  rb = a => a.length ? a.reduce((b, g) => mb(b, { C: g, B: 0, u: 0 }), 0) : a,
  sb = a => (qb(a, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const m of b.s) {
      m.B = !m.B;
    }
  }),
    a),
  tb = (...a) =>
    a.reduce((b, g) => {
      const m = [];
      if (b = rb(b), g) {
        g = rb(g);
        qb(b, p => p.s = nb(g, p, 1));
        qb(g, p => m.push([p, nb(b, p, -1)]));
        for (let [p, l] of m) {
          for (const u of l) {
            mb(b, u, p);
          }
        }
      }
      return b;
    }),
  L = (...a) => {
    let b;
    const g = l => {
        let u;
        return l.u && ((u = m.get(l.u)) ? (p.delete(u), l = g(l.u)) : m.set(l.u, l)), l;
      },
      m = new Map(),
      p = new Map();
    return [a, ...b] = [...a],
      a = sb(tb(sb(rb(a)), ...b)),
      qb(a, l => {
        for (const u of l.s) {
          p.set(g(u), u.B);
        }
      }),
      Array.from(p, ([{ C: l }, u]) => {
        const v = l.map(({ x: w, y: z, z: B }) => ({ x: w, y: z, z: B }));
        return gb(u ? v.reverse() : v, l.A, l.D);
      });
  },
  wb = () => {
    Ba = Ya(h[12].g, h[13].g);
    xa = q(q(xa, 0, 1 - Math.exp(-1 * d)), Za(xa + 60 * d), h[5].g - h[6].i);
    va = q(q(va, 0, 1 - Math.exp(-5 * d)), Za(va + 56 * d), Ba);
    wa = q(q(wa, 0, 1 - Math.exp(-4 * d)), Za(wa + 48 * d), Ba);
    var a = 0.2 + 0.3 * n(2 * h[9].i - 1);
    Aa = q(Aa, h[9].i, 1 - Math.exp(-a * d));
    za = q(za, ya ? q(za, -9, 1 - Math.exp(-1.5 * d)) : Va(c / 3), 1 - Math.exp(-1 * d));
    Ha && c > Ha && (Ha = 0, h4.innerHTML = "");
    h[0].j && 0.8 < h[0].g && (13 > pa
      ? (1 / 0 > Ha && (Ha = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0)
      : ya
        || (1 / 0 > Ha && (Ha = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ya = 1));
    for (const b of e) {
      b.h(fb(b.l));
    }
    for (const b of h) {
      b.h();
    }
    for (const b of Ia) {
      b.h();
    }
  },
  xb = () => {
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
      ][pa = Ia.reduce((a, { j: b }) => a + b, 0)] + " / XIII";
  },
  yb = () => {
    localStorage.I = JSON.stringify([h.map(({ j: a }) => a), Ia.map(({ j: a }) => a), ra, c, Aa]);
  },
  zb = (
    a,
    b,
    g = ka / ja * 1.732051,
    m = 1.732051,
  ) => [g, 0, 0, 0, 0, m, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0],
  Cb = () => {
    let a, b, g, m, p, l, u, v, w, z, B, M, C, f, k = !0;
    const r = [],
      x = () => {
        aa || !k ? Ab.disconnect() : Ab.connect(Bb.destination);
        b4.innerHTML = "Music: " + k;
      },
      y = () => {
        m = v = void 0;
        r.length =
          ea =
          M =
          Da =
          C =
          f =
            0;
        hC.width = ja = innerWidth;
        hC.height = ka = innerHeight;
        document.hidden && I(!0);
      },
      I = (A, D = 0) => {
        if (aa !== A) {
          aa = A;
          ha = D;
          y();
          xb();
          document.body.className = A ? "l m" : "l";
          try {
            A
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Ab.start());
          } catch {
          }
          x();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => I(!1);
    b2.onclick = () => I(!1, 1);
    b5.onclick = () => I(!0);
    b4.onclick = () => {
      k = !k;
      x();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.I = "", location.reload());
    };
    onclick = A => {
      if (!aa && (A.target === hC && (ea = 1), ha)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = A => {
      let D;
      A.repeat
        || (D = !!A.type[5] && !0,
          A = {
            KeyA: 1,
            ArrowLeft: 1,
            KeyW: 3,
            ArrowUp: 3,
            KeyD: 2,
            ArrowRight: 2,
            KeyS: 4,
            ArrowDown: 4,
            KeyE: 0,
            Space: 0,
            Enter: 0,
            Escape: 5,
          }[A.code],
          (r[A] = D) && (0 === A && (ea = 1), 5 === A && I(!0)));
    };
    onmousemove = ({ movementX: A, movementY: D }) => {
      ha && (A || D) && (Pa += 0.1 * A, Oa += 0.1 * D);
    };
    hC.ontouchstart = A => {
      if (!aa) {
        for (let { pageX: D, pageY: J, identifier: K } of A.changedTouches) {
          ha && D > hC.clientWidth / 2
            ? void 0 === v && (w = 0, l = D, u = J, v = K, z = Pa, B = Oa)
            : void 0 === m && (p = 0, b = D, g = J, m = K);
        }
        a = qa;
      }
    };
    hC.ontouchmove = A => {
      if (!aa) {
        for (let { pageX: Y, pageY: F, identifier: E } of A.changedTouches) {
          var D, J, K, R, ca;
          v === E && (Pa = z + (Y - l) / 2.3, Oa = B + (F - u) / 2.3, w = 1);
          m === E
            && (E = (b - Y) / 20,
              D = (g - F) / 20,
              J = n(E),
              K = n(D),
              R = Math.atan2(D, E),
              ca = Va(Math.hypot(D, E) - 0.5),
              C = 0.2 < J ? Math.cos(R) * ca : 0,
              f = 0.2 < K ? Math.sin(R) * ca : 0,
              (C || f) && (p = 1),
              2 < J && (b = Y + 20 * (0 > E ? -1 : 1)),
              2 < K && (g = F + 20 * (0 > D ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = A => {
      let D;
      document.activeElement === document.body && A.preventDefault();
      for (const J of A.changedTouches) {
        J.identifier === v
          ? (v = void 0, w || (D = 1), w = 0)
          : J.identifier === m
          ? (m = void 0, f = C = 0, p || (D = 1), p = 0)
          : D = 1;
      }
      A.target === hC && D && a && 0.02 < (A = qa - a) && 0.7 > A && (r[0] = !0);
    };
    la = () => {
      let A = f + (r[3] ? 1 : 0) - (r[4] ? 1 : 0),
        D = C + (r[1] ? 1 : 0) - (r[2] ? 1 : 0),
        J = navigator.getGamepads()[0];
      if (J) {
        const K = Y => R[Y]?.pressed || 0 < R[Y]?.value ? 1 : 0, R = J.buttons, ca = J.axes;
        J = K(3) || K(2) || K(1) || K(0);
        A += K(12) - K(13) - Xa(ca[1], 0.2);
        D += K(14) - K(15) - Xa(ca[0], 0.2);
        K(9) && I(!0);
        ha && (Oa += d * Xa(ca[3], 0.3) * 80, Pa += d * Xa(ca[2], 0.3) * 80);
        J && !M && (ea = 1);
        M = J;
      }
      Ca = Math.atan2(A, D);
      Da = Xa(Va(Math.hypot(A, D)), 0.05);
    };
    document.onvisibilitychange = onblur = onresize = y;
    I(!0);
  },
  P = (a, b = 1) => {
    const g = ma;
    b = {
      l: new DOMMatrix(),
      H: e.length,
      G: b,
      s: [],
      h() {
      },
    };
    return e.push(b), a(ma = b), ma = g, b;
  },
  Q = (a, b = new DOMMatrix(), g) => ma.s.push(...t(a, b, g)),
  Db = a => {
    const b = new DOMMatrix(),
      g = new DOMMatrix(),
      m = ma,
      p = h.length,
      l = {
        j: 0,
        g: 0,
        i: 0,
        u: m,
        J: b,
        l: g,
        h() {
          fb(g).multiplySelf(fb(b).multiplySelf(m.l).multiplySelf(a)).rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
          l.g = q(l.g, l.j, 1 - Math.exp(-4 * d));
          l.i = q(l.i, l.j, 1 - Math.exp(-1 * d));
          ea && 3 > ab(b.transformPoint()) && (0.3 > l.g || 0.7 < l.g)
            && (l.j = l.j ? 0 : 1, p && 1 / 0 > Ha && (Ha = c + 1, h4.innerHTML = "* click *"), ra = p, yb());
        },
      };
    h.push(l);
    Q(H(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
    Q(H(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
    Q(H(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), T(0.5, 0.5, 0.4));
  },
  Fb = (a, ...b) => {
    let g = -1, m = 0, p = 0, l = 0, u = 0, v = 0, w = 1, z = 3;
    const B = new DOMMatrix(), M = ma, C = Ia.length, f = b.map(([D, J, K]) => ({ x: D, z: J, w: K }));
    let k = f[0], { x: r, z: x } = k, y = r, I = x;
    const A = {
      j: 0,
      l: B,
      h() {
        if (!A.j) {
          let ca, Y, F, E, S, N, O, W = 1, U = 1 / 0;
          for (const sa of f) {
            var { x: D, z: J, w: K } = sa;
            J = (D = Math.hypot(r - D, x - J)) - K;
            O ||= D < K;
            0 < J && U > J && (U = J, k = sa);
            W = Eb(W, D / K);
          }
          O
            || ({ x: ca, z: Y, w: F } = k,
              E = r - ca,
              S = x - Y,
              N = Math.hypot(E, S),
              R = Math.atan2(-S, E),
              w && (p = (Math.random() - 0.5) * Math.PI / 2, z = Va(z / (1 + Math.random()))),
              R += p,
              g = -Math.cos(R),
              m = Math.sin(R),
              0.1 < N && (N = Eb(N, F) / (N || 1), r = E * N + ca, x = S * N + Y));
          w = O;
          z = q(z, 6 * (1 - W) + 3, 1 - Math.exp(-(W + 3) * d));
          R = r = q(r, r + g, 1 - Math.exp(-z * d));
          y = q(y, R, 1 - Math.exp(-z * d));
          R = x = q(x, x + m, 1 - Math.exp(-z * d));
          I = q(I, R, 1 - Math.exp(-z * d));
          l = $a(l, Math.atan2(y - u, I - v) / Ra - 180, 1 - Math.exp(-3 * d));
          u = y;
          v = I;
          var R = fb(B).multiplySelf(M.l).multiplySelf(a).translateSelf(y, 0, I).rotateSelf(0, l, 7 * Math.sin(1.7 * c))
            .transformPoint();
          1.6 > ab(R)
            && (A.j = 1,
              R = [
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
              ][pa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              1 / 0 > Ha && (Ha = c + (pa && 12 > pa ? 5 : 7), h4.innerHTML = R),
              xb(),
              yb());
        }
        A.j
          && fb(B).multiplySelf(e[2].l).translateSelf(
            C % 4 * 1.2 - 1.7 + Math.sin(c + C) / 7,
            -2,
            1.7 * (C / 4 | 0) - 5.5 + n(C % 4 - 2) + Math.cos(c / 1.5 + C) / 6,
          );
      },
    };
    Ia.push(A);
  },
  Ib = (a, b, g, m) => {
    let p = 0, l = 0, u = 0, v = 1 / 0, w = -1 / 0, z = 1 / 0, B = -1 / 0, M = 1 / 0, C = -1 / 0;
    const f = 1.1 * (g - b), k = (new DOMMatrix(zb(b, g))).multiplySelf(a).invertSelf();
    return b = Qa(
      8,
      r => (r = k.transformPoint({ x: 4 & r ? 1 : -1, y: 2 & r ? 1 : -1, z: 1 & r ? 1 : -1 }),
        p -= r.x = (f * r.x | 0) / f / r.w,
        l -= r.y = (f * r.y | 0) / f / r.w,
        u -= r.z = (f * r.z | 0) / f / r.w,
        r),
    ),
      g = fb(Gb).rotateSelf(298, 139).translateSelf(p / 8, l / 8, u / 8),
      hb(b, g).map(({ x: r, y: x, z: y }) => {
        v = Eb(v, r);
        w = Hb(w, r);
        z = Eb(z, x);
        B = Hb(B, x);
        M = Eb(M, y);
        C = Hb(C, y);
      }),
      M *= 0 > M ? m : 1 / m,
      C *= 0 < C ? m : 1 / m,
      V(2 / (w - v), 2 / (B - z), 2 / (M - C)).translateSelf((w + v) / -2, (B + z) / -2, (M + C) / 2).multiplySelf(g);
  },
  Jb = () => {
    let a, b, g, m, p, l, u, v, w, z, B, M, C, f, k, r, x, y = 1, I = 2, A = 2;
    const D = () => {
        let F = 0, E = 0, S = 0, N = 0;
        m = 0;
        ca.fill(0);
        for (let W = 0; 31 > W; ++W) {
          let U = 0;
          const sa = 512 * W;
          for (let da = 0; 128 > da; da++) {
            var O = sa + 4 * da;
            let ia = (Y[O] + Y[1 + O]) / 255;
            O = Y[2 + O];
            14 < da && 114 > da && (U += ia);
            O && ia && (ia = ca[O] + 1, ca[O] = ia, F > ia || (F = ia, E = O));
          }
          3 > U && 5 < W && (S += W / 32);
          3 < U && (7 < W && (N += W / 15), m = 1);
        }
        E && (m = 1);
        a = E || b;
        b = E;
        A = q(A, m ? 6.5 : -20 > Ua.y ? 11 : 8, 1 - Math.exp(-4 * d));
        Ua.y += N / 41 - (m || A) * S / 41 * A * d;
      },
      J = () => {
        z = w = 0;
        for (let F = 32; 128 > F; F += 2) {
          let E = 0, S = 0, N = 0, O = 0;
          const W = 512 * F;
          for (let U = 1 & F; 128 > U; U += 2) {
            const sa = W + 4 * U;
            let da = W + 4 * (127 - U);
            const ia = Y[sa] / 255, Wa = Y[1 + da] / 255, oa = 1 - n(U / 63.5 - 1);
            10 < U && 118 > U
              && (E = Hb(Hb(ia * oa, ia * Y[da] / 255), E), S = Hb(Hb(Wa * oa, Wa * Y[1 + sa] / 255), S));
            (54 > U || 74 < U) && 1e-3 < (da = (1 - oa) * Hb(ia, Wa) / 3)
              && (64 > U && da > N ? N = da : 64 < U && da > O && (O = da));
          }
          n(O - N) > n(w) && (w = O - N);
          n(S - E) > n(z) && (z = S - E);
        }
      },
      K = () => (I ? h[ra].u : e[g && 1 === e[g].G && g || 0]).l,
      R = (F, E, S, N) => q(F, E, y || (Va(n(E - F) ** 0.9 - S) + 1 / 7) * (1 - Math.exp(-(1.5 * N) * d))),
      ca = new Int32Array(256),
      Y = new Uint8Array(65536);
    na = () => {
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, Y);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(J)();
      NO_INLINE(D)();
      var F = Va(1 - 5 * Hb(n(w), n(z))), E = ha ? Pa * Ra : Math.PI;
      F =
        (C = q(C, m * F * Va(2 * Da) * 7, 1 - Math.exp(-(m ? 0.1 < F ? 10 : 5 + 2 * Da : 1) * d)),
          B = q(B, 0, 1 - Math.exp(-(m ? 8 : 4) * d)),
          w += d * ((a ? 0 : F * B) - Math.cos(Ca + E) * Da * C),
          M = q(M, 0, 1 - Math.exp(-(m ? 8 : 4) * d)),
          z += d * ((a ? 0 : F * M) - Math.sin(Ca + E) * Da * C),
          K());
      var { x: S, y: E, z: N } = 1 < I
        ? h[ra].J.transformPoint({ x: 0, y: ra || 0.9 < za ? 15 : 1, z: -2.4 })
        : (E = F,
          fb(Gb).multiplySelf(E).invertSelf(),
          Gb.m41 = Gb.m42 = Gb.m43 = 0,
          S = Gb.transformPoint({ x: w, z, w: 0 }),
          Ua.x += S.x,
          Ua.z += S.z,
          E.transformPoint(Ua));
      if (
        a && (B = (S - Ka.x) / d, M = (N - Ka.z) / d),
          Ka.x = S,
          Ka.y = E,
          Ka.z = N,
          (I = I && (m && a ? 0 : 1)) || a !== g
      ) {
        g = a;
        const O = (F = K()).inverse().transformPoint(Ka);
        Ua.x = O.x;
        Ua.y = O.y;
        Ua.z = O.z;
      }
      v = q(v, Ba * (27 < a && 32 > a), 1 - Math.exp(-2 * d));
      E < (-25 > S || 109 > N ? -25 : -9) && (B = M = C = 0, I = 2);
      1 === a && (h[9].j = -15 > S && 0 > N ? 1 : 0);
      f = q(q(f, E, 1 - Math.exp(-2 * d)), E, I || 8 * n(f - E));
      r = R(r, f, 2, 1);
      k = R(k, S, 0.5, 1);
      x = R(x, N, 0.5, 1);
      ha
        ? (F = I + (1 - Math.exp(-18 * d)), Ea = q(Ea, S, F), Fa = q(Fa, f + 1.5, F), Ga = q(Ga, N, F), Pa = Za(Pa))
        : (Fa = R(Fa, Hb(r + Va((-60 - N) / 8, 0, 20) + 13 + 9 * v, 6), 4, 2),
          Ga = R(Ga, x + -18 + 5 * v, 1, 2 + v),
          Ea = R(Ea, k, 1, 2 + v),
          E = Eb(4, -n(x - Ga)),
          F = k - Ea,
          Pa = $a(Pa, 90 - Za(Math.atan2(E, F) / Ra), y + (1 - Math.exp(-6 * d))),
          Oa = $a(Oa, 90 - Math.atan2(Math.hypot(E, F), Fa - r) / Ra, y + (1 - Math.exp(-6 * d))));
      Oa = Va(Oa, -87, 87);
      l = $a(l, p, 1 - Math.exp(-8 * d));
      u = q(u, Da, 1 - Math.exp(-10 * d));
      Da && (p = 90 - Ca / Ra);
      y = 0;
      e[37].l.translateSelf(S, f + 0.124, N).rotateSelf(0, l);
      for (F = 0; 2 > F; ++F) {
        e[38 + F].l.multiplySelf(e[37].l).translateSelf(
          0,
          u * Va(0.45 * Math.sin(9.1 * c + Math.PI * (F - 1) - Math.PI / 2)),
        ).rotateSelf(u * Math.sin(9.1 * c + Math.PI * (F - 1)) * 0.25 / Ra, 0);
      }
    };
  },
  Kb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Lb = (a, b) => {
    const g = {}, m = Z.c1h();
    return Z.abz(m, a), Z.abz(m, Kb(b, 35632)), Z.l8l(m), p => p ? g[p] || (g[p] = Z.gan(m, p)) : Z.u7y(m);
  },
  Sb = (a, b, g, m) => {
    if (aa) {
      g = Qb(0, 40 * Math.sin(qa) - 70);
      for (var p of [37, 38, 39]) {
        eb(g, Rb, p - 1);
      }
      Z.uae(a, !1, Rb);
      Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      for (p = 0; e.length > p; ++p) {
        e[p].G && eb(e[p].l, Rb, p - 1);
      }
      Z.uae(a, !1, Rb);
      Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        eb(Ia[b].l, Rb, b);
      }
      for (b = 0; h.length > b; ++b) {
        eb(h[b].l, Rb, b + 13), m || (Rb[16 * (b + 13) + 15] = 1 - h[b].g);
      }
      Z.uae(a, !1, Rb);
      Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13);
      Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
  },
  Tb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Ub = a => Math.sin(a * Math.PI * 2),
  Vb = a => 0.5 > a % 1 ? 1 : -1,
  Wb = a => a % 1 * 2 - 1,
  Xb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  dc = a => {
    let b = 0;
    const g = () => {
        let u = 0;
        const v = O => {
            let W, U, sa, da = 0, ia = 0;
            const Wa = [],
              oa = new Int32Array(768 * O),
              Yb = 2 ** (D - 9) / O,
              Zb = Math.PI * 2 ** (Y - 8) / O,
              ub = E * O & -2;
            for (let ob = 0; 11 >= ob; ++ob) {
              for (
                let pb = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ob];
                32 > pb;
                ++pb
              ) {
                const Nb = (32 * ob + pb) * O;
                for (var La = 0; 4 > La; ++La) {
                  if (W = 0, Mb && (W = w[Mb - 1].charCodeAt(pb + 32 * La) - 40, W += 0 < W ? 106 : 0), W) {
                    var fa;
                    if (!(fa = Wa[W])) {
                      fa = W;
                      let X = void 0, ta = void 0;
                      var Ob = W;
                      let $b = 0, ac = 0;
                      const bc = 2 > b ? Wb : Ub, cc = 2 > b ? 1 > b ? Vb : Xb : Ub, Pb = new Int32Array(x + y + N);
                      for (let Ma = 0, vb = 0; x + y + N > Ma; ++Ma, ++vb) {
                        let Na = 1;
                        x > Ma ? Na = Ma / x : x + y > Ma || (Na = (1 - (Na = (Ma - x - y) / N)) * 3 ** (-A / 16 * Na));
                        0 > vb
                          || (vb -= 4 * O,
                            ta = 396e-5 * 2 ** ((Ob + B - 256) / 12),
                            X = 396e-5 * 2 ** ((Ob + f - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                        Pb[Ma] = 80
                            * (bc($b += ta * Na ** (M / 32)) * z + cc(ac += X * Na ** (k / 32)) * C
                              + (r ? (2 * Math.random() - 1) * r : 0))
                            * Na | 0;
                      }
                      fa = Wa[fa] = Pb;
                    }
                    for (let X = 0, ta = 2 * Nb; fa.length > X; ++X, ta += 2) {
                      oa[ta] += fa[X];
                    }
                  }
                }
                for (let X, ta = 0; O > ta; ++ta) {
                  La = 0;
                  fa = 2 * (Nb + ta);
                  var ua = (((X = oa[fa]) || sa)
                    && (U = 308e-5 * J,
                      1 !== b && 4 !== b || (U *= Math.sin(Yb * fa * Math.PI * 2) * S / 512 + 0.5),
                      U = 1.5 * Math.sin(U),
                      da += U * ia,
                      ua = (1 - K / 255) * (X - ia) - da,
                      ia += U * ua,
                      X = 4 === b ? ia : 3 === b ? ua : da,
                      b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5),
                      X *= R / 32,
                      sa = 1e-5 < X * X,
                      ua = Math.sin(Zb * fa) * ca / 512 + 0.5,
                      La = X * (1 - ua),
                      X *= ua),
                    fa < ub || (La += oa[1 + fa - ub] * F / 255, X += oa[fa - ub] * F / 255),
                    u + fa >> 1);
                  p[ua] += (oa[fa] = La) / 65536;
                  l[ua] += (oa[++fa] = X) / 65536;
                }
              }
            }
            u += 768 * O;
          },
          w = Ta[b],
          [z, B, M, C, f, k, r, x, y, I, A, D, J, K, R, ca, Y, F, E, S] = Ja[b],
          N = 4 * I ** 2;
        v(5513);
        v(4562);
        v(3891);
        Tb(5 > ++b ? g : a);
      },
      m = Bb.createBuffer(2, 5362944, 44100),
      p = m.getChannelData(0),
      l = m.getChannelData(1);
    Ab.buffer = m;
    Ab.loop = !0;
    Tb(g);
  },
  Bb = new AudioContext(),
  Gb = new DOMMatrix(),
  db = new Float32Array(16),
  Rb = new Float32Array(624),
  ec = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Eb = NO_INLINE((a, b) => a < b ? a : b),
  Hb = NO_INLINE((a, b) => b < a ? a : b),
  n = NO_INLINE(a => 0 > a ? -a : a),
  G = NO_INLINE((a, b, g) => (new DOMMatrix()).translateSelf(a, b, g)),
  Qb = NO_INLINE((a, b, g) => (new DOMMatrix()).rotateSelf(a, b, g)),
  V = NO_INLINE((a, b, g) => (new DOMMatrix()).scaleSelf(a, b, g)),
  Ab = Bb.createBufferSource(),
  T = NO_INLINE((a, b, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, m) => (b * m + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Tb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const m = r => {
            let x, y;
            Z.f1s();
            requestAnimationFrame(m);
            y = (r - (ba || r)) / 1e3;
            qa += y;
            c += d = aa ? 0 : Eb(0.066, y);
            ba = r;
            0 < d
              && (la(),
                wb(),
                na(),
                z(),
                Z.b6o(36160, f),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                { x: y, y: r, z: x } = Ka,
                Z.uae(z("b"), !1, eb(fb(Gb).rotateSelf(0, 180).invertSelf().translateSelf(-y, -r, 0.3 - x))),
                Sb(z("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(z("b"), !1, eb(fb(Gb).translateSelf(-y, -r, -x - 0.3))),
                Sb(z("c"), 0, 41, 0),
                Z.f1s());
            ea = 0;
            fb(p);
            aa
              ? p.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : p.rotateSelf(-Oa, -Pa).invertSelf().translateSelf(-Ea, -Fa, -Ga);
            v();
            Z.b6o(36160, C);
            Z.v5y(0, 0, 2048, 2048);
            M[0](Ib(p, 0.3, 55, 10));
            M[1](Ib(p, 55, 181, 11));
            B();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            M[0]();
            M[1]();
            Z.uae(B("a"), !1, zb(0.3, 181));
            Z.uae(B("b"), !1, eb(p));
            Z.ubu(B("k"), Ea, Fa, Ga);
            Sb(B("c"), !ha, 42, 0);
            w();
            Z.ubu(w("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, qa);
            Z.ubu(w("k"), Ea, Fa, Ga);
            Z.uae(w("b"), !1, eb(fb(Gb).multiplySelf(p).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, f);
            Z.f1s();
          },
          p = new DOMMatrix(),
          l = g;
        let u = Kb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const v = Lb(
            Kb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          w = Lb(
            Kb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          z = Lb(
            u,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          B = Lb(
            u,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          M = Qa(2, r => {
            const x = new Float32Array(16), y = Z.c25();
            return Z.a4v(33984 + r),
              Z.b9j(3553, y),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              I => {
                I
                  ? (eb(I, x),
                    Z.uae(v("b"), !1, x),
                    Z.fas(36160, 36096, 3553, y, 0),
                    Z.c4s(256),
                    Sb(v("c"), !ha, 42, 1))
                  : Z.uae(B(r ? "j" : "i"), !1, x);
              };
          }),
          C = Z.c5w(),
          f = (u = Z.c3z(), Z.c5w()),
          k = Z.c25();
        z();
        Z.uae(z("a"), !1, zb(1e-4, 1, 1.4, 0.59));
        B();
        Z.ubh(B("q"), 2);
        Z.ubh(B("h"), 1);
        Z.ubh(B("g"), 0);
        w();
        Z.ubh(w("q"), 2);
        Z.b6o(36160, C);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, f);
        Z.bb1(36161, u);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, u);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        wb();
        NO_INLINE(Cb)();
        NO_INLINE(Jb)();
        requestAnimationFrame(m);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = ec;
  NO_INLINE(dc)(() => {
    Tb(() => {
      let l, u = 0;
      const v = [],
        w = [],
        z = [],
        B = [],
        M = x => {
          let { x: y, y: I, z: A } = l[x], D = (r[0] = y, r[1] = I, r[2] = A, x = "" + (l.D ? k : C), f.get(x));
          return void 0 !== D
            ? (y = 3 * D, B[y] = (B[y++] + C[5]) / 2, B[y] = (B[y++] + C[6]) / 2, B[y] = (B[y] + C[7]) / 2)
            : (f.set(x, D = f.size), w.push(y, I, A, r[3]), z.push(C[4]), B.push(C[5], C[6], C[7])),
            D;
        },
        C = new Int32Array(8),
        f = new Map(),
        k = new Int32Array(C.buffer, 0, 5),
        r = new Float32Array(C.buffer);
      for (const x of e) {
        for (l of (r[3] = 40 === x.H ? -14 : x.G && x.H, x.s)) {
          const { x: y, y: I, z: A } = cb(l);
          C[4] = 0 | l.A;
          C[5] = 32767 * y;
          C[6] = 32767 * I;
          C[7] = 32767 * A;
          for (let D = 2, J = M(0), K = M(1); l.length > D; ++D) {
            v.push(J, K, K = M(D));
          }
        }
        x.s = null;
        x.v = u;
        x.F = u = v.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(w), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(z), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Tb(b);
      try {
        const [x, y, I, A, D] = JSON.parse(localStorage.I);
        h.map((J, K) => J.g = J.i = J.j = K ? 0 | x[K] : 0);
        Ia.map((J, K) => J.j = 0 | y[K]);
        ra = I;
        c = A;
        Aa = D;
      } catch {
      }
      za = Va(ra);
    });
    const m = Qa(11, l => G(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10)),
      p = Qa(10, l => jb(hb(ib(18), m[l]).reverse(), hb(ib(18), m[l + 1]), 1)).flat();
    P(() => Q([Sa.slice(1)], G(-2).scale3d(3).rotate(90, 0)), 0);
    P(() => {
      const l = (f, k, r) =>
          P(x => {
            x.h = y => y.translateSelf(w() * Math.sin(3 * f + c * f) * k);
            Sa.map(({ x: y, z: I }) => {
              Q(H(11, 1), G(4 * y, 4, r + 4 * I).scale(0.8, 3, 0.8), T(0.5, 0.3, 0.7, 0.6));
              Q(H(), G(4 * y, 7, r + 4 * I).scale(1, 0.3), T(0.5, 0.5, 0.5, 0.3));
            });
            Q(L(
              t(H(), G(0, 0, r).scale(5, 1, 5), T(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(y => t(H(), G(5 * y, 0.2, r).rotate(-30 * y).scale(4, 1, 2), T(0.8, 0.8, 0.8, 0.3))),
            ));
            Q(H(), G(0, -3, r).scale(8, 2, 8), T(0.4, 0.4, 0.4, 0.3));
          }),
        u = (f, k, r, x) =>
          f.translateSelf(k + Math.sin(c + 2) / 5, r + Math.sin(0.8 * c) / 3, x).rotateSelf(
            2 * Math.sin(c),
            Math.sin(0.7 * c),
            Math.sin(0.9 * c),
          ),
        v = f =>
          L(
            t(H(), G(0, -f / 2).scale(6, f - 1, 2.2)),
            t(H(), G(0, -f / 2 - 6).scale(4, f - 3, 4)),
            t(H(32, 1), G(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => Eb(h[2].i, 1 - h[4].i),
        z = L(
          t(H(30, 1, 1.15, 1), G(0, -3).scale(3.5, 1, 3.5), T(0.7, 0.4, 0.25, 0.7)),
          t(H(30, 1, 1.3, 1), G(0, -2.5).scale(2.6, 1, 3), T(0.7, 0.4, 0.25, 0.2)),
          t(H(), G(4, -1.2).scale3d(2), T(0.7, 0.4, 0.25, 0.3)),
        ),
        B = Qa(7, f => t(H(6, 1), G(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), T(0.3, 0.3, 0.38))).flat(),
        M = (P(f => {
          f.h = k => u(k, -12, 4.2, 40 * za - 66);
          Q(z);
          Db(G(0, -3, 4));
        }),
          Db(G(-5.4, 1.5, -19).rotate(0, -90)),
          Fb(G(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Fb(G(0, 2.8), [5, 10, 3], [-5, 10, 3], ...ib(18).map(({ x: f, z: k }) => [7 * f, 10 * k, 4.5 - 2 * n(f)])),
          Q(H(), G(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), T(0.8, 0.8, 0.8, 0.2)),
          Sa.map(({ x: f, z: k }) => Q(H(6), G(3 * f, 3, 15 * k).scale(0.7, 4, 0.7), T(0.6, 0.3, 0.3, 0.4))),
          Q(H(), G(0, 0, -23).scale(3, 1, 8), T(0.9, 0.9, 0.9, 0.2)),
          Q(H(), G(0, 0, 22).scale(3, 1, 8), T(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map((f, k) => {
            Q(H(), G(0, 6.3, f).scale(4, 0.3, 1), T(0.3, 0.3, 0.3, 0.4));
            Q(H(), G(0, 1, f).scale(3, 0.2, 0.35), T(0.5, 0.5, 0.5, 0.3));
            P(r => {
              r.h = x => x.translateSelf(0, 0, f).scaleSelf(1, Va(1.22 - h[k + 1].g), 1);
              Q(B);
            });
          }),
          Qa(5, f =>
            Qa(2, k =>
              Q(
                p,
                G(18.5 * (k - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * k).scale(1.2, 10, 1.2),
                T(1, 1, 0.8, 0.2),
              ))),
          Q(H(), G(3, 1.5, -20).scale(0.5, 2, 5), T(0.7, 0.7, 0.7, 0.2)),
          Q(H(), G(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), T(0.75, 0.75, 0.75, 0.2)),
          Q(H(5), G(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), T(0.6, 0.3, 0.3, 0.4)),
          Q(H(), Qb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), T(0.8, 0.2, 0.2, 0.5)),
          Q(L(
            tb(
              t(H(6, 0, 0, 0.3), G(8, -3, -4).scale(13, 1, 13), T(0.7, 0.7, 0.7, 0.2)),
              t(H(6), G(0, -8).scale(9, 8, 8), T(0.4, 0.2, 0.5, 0.5)),
              t(H(6, 0, 0, 0.3), G(0, -0.92).scale(13, 2, 13), T(0.8, 0.8, 0.8, 0.2)),
            ),
            t(H(5), V(5, 30, 5), T(0.4, 0.2, 0.6, 0.5)),
            t(H(5, 0, 1.5), G(0, 1).scale(4.5, 0.3, 4.5), T(0.7, 0.5, 0.9, 0.2)),
            t(H(), Qb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), T(0.5, 0.5, 0.5, 0.5)),
            t(H(6), G(15, -1.5, 4).scale(3.5, 1, 3.5), T(0.5, 0.5, 0.5, 0.5)),
          )),
          P(f => {
            f.h = k =>
              k.translateSelf(
                0,
                0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500,
                0,
              );
            Q(H(5), G(0, -0.2).scale(5, 1, 5), T(0.6, 0.65, 0.7, 0.3));
            Db(G(0, 1.2));
          }),
          Db(G(15, -2, 4)),
          l(0.7, 12, 35),
          l(1, 8.2, 55),
          P(f => {
            f.h = k => k.translateSelf(w() * Math.sin(c / 1.5 + 2) * 12);
            Q(
              L(
                tb(
                  t(H(), V(1.5, 1, 5), T(0.9, 0.9, 0.9, 0.2)),
                  t(H(6), V(4, 1, 5), T(0.9, 0.9, 0.9, 0.2)),
                  t(H(), G(0, -2).scale(2, 3.2, 1.9), T(0.3, 0.8, 0.5, 0.5)),
                  t(H(16, 1, 0, 4), V(1, 1, 1.5).rotate(0, 90), T(0.9, 0.9, 0.9, 0.2)),
                ),
                t(H(), V(1.3, 10, 1.3), T(0.2, 0.7, 0.4, 0.6)),
              ),
              G(0, 0, 45),
            );
            Fb(G(0, 2.8, 45), [0, 0, 4.5]);
          }),
          Q(H(), G(-18.65, -3, 55).scale(2.45, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2)),
          P(f => {
            f.h = k => k.translateSelf(9.8 * (1 - w()));
            Q(H(3), G(-23, -1.7, 55.8).scale(5, 0.7, 8.3), T(0.3, 0.6, 0.6, 0.2));
            Q(H(8), G(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), T(0.8, 0.8, 0.8, 0.2));
            Q(H(), G(-23, -3, 55).scale(5.2, 1.7, 3), T(0.5, 0.5, 0.5, 0.3));
            Q(H(), G(-23, -2.2, 62).scale(3, 1, 4), T(0.5, 0.5, 0.5, 0.3));
            Db(G(-23, -0.5, 66.5));
          }),
          P(f => {
            f.h = k => k.translateSelf(0, Va(1 - 5 * w()) * Ya(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
            Q(H(), G(-22.55, -3, 55).scale(1.45, 1.4, 2.7), T(0.7, 0.7, 0.7, 0.2));
            Q(L(t(H(), V(3, 1.4, 2.7)), t(H(), V(1.2, 8, 1.2))), G(-33, -3, 55), T(0.7, 0.7, 0.7, 0.2));
          }),
          P(f => {
            f.h = k => k.translateSelf(0, 0, Va(1 - 5 * w()) * Ya(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
            Q(L(
              t(H(), G(-27, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2)),
              t(H(), G(-27, -3, 55).scale(1, 3), T(0.9, 0.9, 0.9, 0.2)),
            ));
            Q(H(), G(-39, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2));
          }),
          P(f => {
            f.h = k => k.translateSelf(0, -6.5 * h[4].i);
            Q(H(6), G(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), T(0.7, 0.7, 0.7, 0.4));
          }),
          Db(G(-55, -1.1, 46).rotate(0, 90)),
          Q(H(6), G(-61.3, -2.4, 49).scale(3, 1, 5), T(0.4, 0.6, 0.6, 0.3)),
          Q(H(7), G(-57, -2.6, 46).scale(4, 1, 4), T(0.8, 0.8, 0.8, 0.3)),
          [
            ...t(H(), G(0, -3).scale(11, 1.4, 3), T(0.9, 0.9, 0.9, 0.2)),
            ...L(
              t(H(6), Qb(90).scale(6, 8, 6), T(0.3, 0.6, 0.6, 0.3)),
              t(H(4, 0, 0.01), G(0, 6).scale(12, 2, 0.75).rotate(0, 45), T(0.3, 0.6, 0.6, 0.3)),
              t(H(6), Qb(90).scale(5, 12, 5), T(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => t(H(5), G(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), T(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        C = (Q(M, G(-53, 0, 55)),
          P(f => {
            f.h = k => k.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + xa, 0);
            Q(M);
          }, 2),
          Q(H(), G(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), T(0.7, 0.7, 0.7, 0.2)),
          Q(H(3, 0, -0.5), G(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), T(0.8, 0.8, 0.8, 0.2)),
          Q(L(
            tb(
              t(H(), G(-100, -2.5, 55).scale(8, 1, 8), T(0.8, 0.8, 0.8, 0.2)),
              t(H(), G(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), T(0.8, 0.8, 0.8, 0.2)),
              t(H(), G(-100, -2.6, 70).scale(3, 1.1, 7), T(0.8, 0.8, 0.8, 0.2)),
              t(H(), G(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), T(0.8, 0.8, 0.8, 0.2)),
              t(H(6), G(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), T(0.6, 0.6, 0.6, 0.3)),
              t(H(), G(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), T(0.8, 0.8, 0.8, 0.2)),
              t(H(), G(-100, 0.42, 92).scale(3, 1.1, 4.1), T(0.8, 0.8, 0.8, 0.2)),
            ),
            t(H(8), G(-100, -1, 55).scale(7, 0.9, 7), T(0.3, 0.3, 0.3, 0.4)),
            t(H(8), G(-100, -2, 55).scale(4, 0.3, 4), T(0.4, 0.4, 0.4, 0.5)),
            t(H(8), G(-100, -3, 55).scale(0.6, 1, 0.6), T(0.4, 0.4, 0.4, 0.5)),
          )),
          Fb(G(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Fb(G(-89, 0.2, 80), [0, 0, 6]),
          Q(L(
            t(H(), G(-100, 1, 63).scale(7.5, 4), T(0.5, 0.5, 0.5, 0.4)),
            t(H(), G(-100, 0, 70).scale(2, 2, 10), T(0.5, 0.5, 0.5, 0.4)),
            t(H(20, 1), G(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), T(0.5, 0.5, 0.5, 0.4)),
          )),
          P(f => {
            f.h = k => k.translateSelf(-99.7, -1.9, 63.5).scale(1, Va(1.1 - h[6].g), 1);
            Q(B);
          }),
          Sa.map(({ x: f, z: k }) => {
            Q(H(6), G(7 * f - 100, -3, 7 * k + 55).scale(1, 8.1), T(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(r => Q(H(6), G(7 * f - 100, r, 7 * k + 55).scale(1.3, 0.5, 1.3), T(0.4, 0.2, 0.2, 0.8)));
          }),
          Qa(7, f => {
            Q(
              H((23 * f + 1) % 5 + 5, 0, 0.55),
              G(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              T(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          Q(H(), G(-87, -9.5, 24).scale(7, 1, 3), T(0.4, 0.5, 0.6, 0.4)),
          Q(H(4), G(-86, -9.2, 27).scale(5, 1, 5), T(0.5, 0.6, 0.7, 0.3)),
          Q(H(12, 1), G(-86, -9, 31).scale(1.5, 1, 1.5), T(0.3, 0.3, 0.4, 0.1)),
          Db(G(-86, -7.5, 31)),
          P(f => {
            f.h = k => k.translateSelf(0, 3.5 * (1 - Hb(h[6].g, h[7].g)) + Ya(h[7].i, h[6].i) * Math.sin(c) * 5);
            [0, 12, 24].map(k => Q(H(), G(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), T(0.2, 0.5, 0.6, 0.2)));
          }),
          P(f => {
            f.h = k =>
              k.translateSelf(
                0,
                Ya(h[7].i, h[6].i) * Math.sin(c + 3) * 6,
                6 * Math.sin(0.6 * c + 1) * Ya(h[7].i, h[6].i),
              );
            [6, 18].map(k => Q(H(), G(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), T(0.1, 0.4, 0.5, 0.2)));
          }),
          Q(
            L(
              tb(
                t(H(5), G(0, 0, -7).scale(2, 1.2, 2), T(0.2, 0.4, 0.7, 0.3)),
                t(H(5), V(9, 1.2, 9), T(0, 0.2, 0.3, 0.5)),
                t(H(), V(11, 1, 13), T(0.3, 0.4, 0.6, 0.3)),
              ),
              t(H(5), V(5.4, 5, 5.4), T(0, 0.2, 0.3, 0.5)),
            ),
            G(-38.9, -11.3, 17),
          ),
          Db(G(-38.9, -9.6, 10)),
          P(f => {
            f.h = k => k.translateSelf(0, -7.3 * h[7].i);
            Q(
              L(
                tb(
                  t(H(5), G(0, 2).scale(5, 7, 5).skewY(8), T(0.2, 0.4, 0.5, 0.5)),
                  t(H(5), G(0, 6).scale(1.1, 7, 1.1).skewY(-8), T(0.25, 0.35, 0.5, 0.5)),
                  t(H(5), G(0, 9).scale(0.6, 7, 0.6).skewY(8), T(0.35, 0.3, 0.5, 0.5)),
                ),
                t(H(5), V(4, 8, 4), T(0.2, 0.4, 0.5, 0.5)),
                t(H(5), G(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), T(0.2, 0.4, 0.5, 0.5)),
              ),
              G(-38.9, -11.3, 17),
            );
            Fb(G(-39.1, -0.6, 17).rotate(11), ...ib(15).map(({ x: k, z: r }) => [3 * k, 3 * r, 1.2]));
          }),
          Sa.map(({ x: f, z: k }) => {
            Q(H(14, 1), G(9 * f - 38.9, -7.3, 11 * k + 17).scale(1, 4), T(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(r =>
              Q(H(17, 1), G(9 * f - 38.9, r - 11.3, 11 * k + 17).scale(1.5, 0.5, 1.5), T(0.6, 0.6, 0.6, 0.3))
            );
          }),
          Q(
            L(
              tb(
                t(H(6), G(0, 0, -36).scale(15, 1.2, 15), T(0.7, 0.7, 0.7, 0.3)),
                t(H(), G(0, 0, -18).scale(4, 1.2, 6), T(0.45, 0.4, 0.6, 0.3)),
              ),
              ...Qa(6, f =>
                Qa(6, k =>
                  t(
                    H(6),
                    G(4.6 * k - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * k)).scale(2, 5, 2),
                    T(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            G(-38.9, -11.3, 17),
          ),
          Fb(G(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          Q(H(5), G(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), T(0.8, 0.1, 0.25, 0.4)),
          Db(G(-84, -0.5, 85).rotate(0, 45)),
          P(f => {
            f.h = k => u(k, -123, 1.4, 55 + -65 * Aa);
            Q(z);
            Db(G(0, -3, -4).rotate(0, 180));
          }),
          L(
            t(H(), G(0, -0.5, 1).scale(1.15, 1.2, 6.5), T(0.25, 0.25, 0.35, 0.3)),
            t(H(3), G(0, 0, -5.5).scale(3, 2), T(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => t(H(), G(f, -0.5, 1).scale(0.14, 0.3, 6.5), T(0.7, 0.2, 0, 0.3))),
          ));
      P(f => {
        f.h = k => k.translateSelf(0, -2, Ya(h[10].g, h[11].g) * n(Math.sin(1.1 * c)) * -8.5 + 10);
        Qa(2, k => Q(C, G(9 * k - 110 + (1 & k), 1.7, -12)));
      });
      P(f => {
        f.h = k => k.translateSelf(0, -2, Ya(h[10].g, h[11].g) * n(Math.sin(2.1 * c)) * -8.5 + 10);
        Qa(2, k => Q(C, G(9 * (k + 2) - 110 + (1 & k), 1.7, -12)));
      });
      P(f => {
        f.h = k =>
          k.translateSelf(
            0,
            -2,
            -8.5 * Hb((1 - h[10].g) * (1 - Ya(h[10].g, h[11].g)), Ya(h[10].g, h[11].g) * n(Math.sin(1.5 * c))) + 10,
          );
        Qa(3, k => Q(C, G(9 * k - 106, 1.7, -12)));
      });
      Q(
        L(
          tb(t(H(), G(26.5, -1.6, 10).scale(20, 2.08, 3)), t(H(), G(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...Qa(4, f => t(H(), G(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...Qa(3, f => t(H(), G(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        G(-123, 0, -12),
        T(0.5, 0.5, 0.6, 0.2),
      );
      Db(G(-116, -1.4, -18).rotate(0, 180));
      Q(H(), G(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), T(0.8, 0.8, 0.8, 0.2));
      Q(H(6), G(-116, -2.6, -16.5).scale(3.2, 0.8, 3), T(0.6, 0.5, 0.7, 0.2));
      Q(H(), G(-115.5, -17, -12).scale(0.5, 15, 2.2), T(0.6, 0.6, 0.6, 0.3));
      Q(H(8), G(-114, -17, -2).scale(2, 15, 2), T(0.6, 0.6, 0.6, 0.3));
      Q(H(8), G(-79, -17, -2).scale(2, 15, 2), T(1, 1, 1, 0.3));
      Q(H(), G(-77, -17, -50.5).scale(2.2, 15, 0.5), T(0.6, 0.6, 0.6, 0.3));
      Qa(3, f => {
        Q(v(16), G(12 * f - 109, -9, -12), T(0.6, 0.6, 0.6, 0.3));
        Q(v(16), G(-77, -9, -12 * f - 20).rotate(0, 90), T(0.6, 0.6, 0.6, 0.3));
      });
      Q(L(
        t(H(12), G(-77, -14.5, -12).scale(4, 17.5, 4), T(0.7, 0.7, 0.7, 0.2)),
        t(H(), G(-79, 0.1, -12).scale(3.5, 2, 1.3), T(0.4, 0.5, 0.6, 0.2)),
        t(H(), G(-77, 0.1, -14).scale(1.5, 2, 2), T(0.4, 0.5, 0.6, 0.2)),
        t(H(12), G(-77, 3.1, -12).scale(3, 5, 3), T(0.4, 0.5, 0.6, 0.2)),
      ));
      Q(H(), G(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), T(0.6, 0.6, 0.6, 0.3));
      Q(H(9), G(-98, -18.4, -40).scale(2.5, 13.5, 2.5), T(0.5, 0.5, 0.5, 0.3));
      Q(L(
        t(H(), G(-93, -5.8, -40).scale(9, 1, 5), T(0.8, 0.8, 0.8, 0.1)),
        t(H(9), G(-98, -5.8, -40).scale(3, 8, 3), T(0.7, 0.7, 0.7, 0.2)),
      ));
      Db(G(-98, -4.4, -40).rotate(0, 90));
      Fb(G(-115, 0.2, -12), [0, 0, 3.5]);
      Fb(G(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      Q(L(
        tb(
          t(H(6, 0, 0, 0.6), G(-100, 0.7, 105.5).scale(8, 1, 11), T(0.7, 0.7, 0.7, 0.2)),
          t(H(), G(-101.5, 0.7, 93.5).scale(10.5, 1, 2), T(0.7, 0.7, 0.7, 0.2)),
        ),
        t(H(5), G(-100, 0.7, 113).scale(4, 3, 4), T(0.7, 0.7, 0.7, 0.2)),
      ));
      Qa(4, f =>
        P(k => {
          k.h = r => {
            const x = Ya(h[8].i, h[12].i);
            r.translateSelf(
              (2 < f ? 2 * (1 - x) + x : 0) - 100,
              x * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + Hb(x, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          Q(
            H(6),
            G(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            T(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      P(f => {
        f.h = k => {
          const r = Ya(h[8].i, h[12].i);
          k.translateSelf(2.5 * (1 - r) - 139.7, -3 * (1 - h[8].g) + r * Math.sin(0.8 * c) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * c) * (3 * r + 3),
            0,
          );
        };
        Q(L(t(H(10), V(6, 2, 6), T(0.1, 0.6, 0.5, 0.3)), t(H(10), V(3.3, 6, 3.3), T(0.1, 0.6, 0.5, 0.5))));
        Q(H(15, 1), G(-7.5).rotate(0, 90).scale(3, 2.3, 3), T(0.4, 0.4, 0.4, 0.3));
        Q(H(10), G(-7.5).rotate(0, 90).scale(2, 2.5, 2), T(0.3, 0.8, 0.7, 0.3));
        Q(H(5), G(-7.5).rotate(0, 90).scale(1, 3), T(0.5, 0.5, 0.5, 0.5));
        Db(G(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(k => Q(p, Qb(90 * -k, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), T(1, 1, 0.8, 0.2)));
        Fb(G(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        Q(H(12, 1), G(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), T(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(k => Q(H(15, 1), G(-7.5 * f - 100, k + 0.7, 96).scale(1.1, 0.5, 1.1), T(0.5, 0.24, 0.2, 0.4)));
        Q(p, G(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), T(1, 1, 0.8));
        Q(
          L(
            t(H(), G(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), T(0.5, 0.5, 0.5, 0.4)),
            t(H(), V(3, 3, 10), T(0.6, 0.24, 0.2, 0.5)),
            t(H(28, 1), G(0, 3, -5).scale(3, 4, 10).rotate(90, 0), T(0.6, 0.24, 0.2, 0.5)),
            t(H(5), G(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), T(0.6, 0.24, 0.2, 0.5)),
            t(H(5), G(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), T(0.6, 0.24, 0.2, 0.5)),
          ),
          G(f - 100, 0.7, 97),
        );
      });
      P(f => {
        f.h = k => k.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        Q(B);
      });
      Q(L(
        t(H(), G(-82.07, 0.8, 106).scale(11, 0.9, 2.2), T(0.7, 0.7, 0.7, 0.1)),
        t(H(45, 1), G(-81, 0.7, 106).scale3d(7.7), T(0.7, 0.7, 0.7, 0.1)),
      ));
      P(f => {
        f.h = k => k.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + va);
        Q(L(
          t(H(45, 1), V(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)),
          t(H(), G(0, 0, -5.5).scale(1.5, 3, 2.7), T(0.45, 0.45, 0.45, 0.2)),
        ));
        Q(H(8), G(0, 2).scale(3, 1.5, 3).rotate(0, 22), T(0.7, 0.7, 0.7, 0.1));
        Q(H(5), G(0, 2).scale(1, 2), T(0.3, 0.3, 0.3, 0.2));
        Fb(G(0, 3), ...ib(14).map(({ x: k, z: r }) => [5.6 * k, 5.6 * r, 2]));
      });
      P(f => {
        f.h = k => k.translateSelf(-65.8, 0.8, 106).rotateSelf(0, wa);
        [-1, 1].map(k =>
          Q(p, Qb(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), T(1, 1, 0.8))
        );
        Q(L(t(H(28, 1), G(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3)), t(H(), V(9, 5, 2), T(0.3, 0, 0, 0.3))));
        Q(t(H(28, 1), V(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        Q(t(H(5), G(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)));
      });
      P(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
        Q(L(
          t(H(28, 1), G(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3)),
          t(H(), G(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)),
          t(H(), G(0, 0, 7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),
        ));
        Q(t(H(28, 1), V(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        Q(t(H(5), G(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)));
      });
      P(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
        Q(L(
          t(H(28, 1), G(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3)),
          t(H(), G(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)),
          t(H(), G(0, 0, -7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),
        ));
        Q(t(H(28, 1), V(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        Q(t(H(5), G(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)));
      });
      Q(H(), G(-58, 1, 106).scale(2, 0.65, 2), T(0.7, 0.7, 0.7, 0.2));
      Q(H(), G(-50.7, 1, 99).scale(2, 0.65, 1), T(0.7, 0.7, 0.7, 0.2));
      Q(H(), G(-42, 0.4, 91).scale(5, 1, 2.5), T(0.7, 0.7, 0.7, 0.3));
      Q(H(), G(-34.2, 0.4, 91).scale(3, 1, 3), T(0.7, 0.7, 0.7, 0.3));
      Db(G(-34, 2.7, 96).rotate(-12, 0));
      Q(H(5), G(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), T(0.2, 0.5, 0.5, 0.6));
      [T(0.1, 0.55, 0.45, 0.2), T(0.2, 0.5, 0.5, 0.3), T(0.3, 0.45, 0.55, 0.4)].map((f, k) =>
        P(r => {
          r.h = x => {
            x.translateSelf(
              0,
              (1 - h[13].i) * (1 - h[14].i) * (k ? 0 : 3) + Ya(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * k) * 4,
            );
          };
          Q(H(), G(-23.5, 0.5, 91 + 6.8 * k).scale(1 === k ? 2 : 3.3, 1, 3.3), f);
          2 === k && Q(H(), G(-29.1, 0.4, 91).scale(2.1, 1, 3), T(0.7, 0.7, 0.7, 0.3));
          1 === k && Q(H(), G(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), T(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => Q(p, G(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), T(1, 1, 0.8)));
      Qa(
        3,
        f =>
          Q(
            v(24.7 - 0.7 * (1 & f)),
            G(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? T(0.5, 0.5, 0.5, 0.3) : T(0.35, 0.35, 0.35, 0.5),
          ),
      );
      Q(L(
        t(H(6, 0, 0, 0.3), G(0, -0.92, 95).scale(14, 2, 14), T(0.8, 0.8, 0.8, 0.2)),
        t(H(5), G(0, 0, 95).scale3d(6), T(0.3, 0.3, 0.3, 0.5)),
      ));
      Db(G(0, 1.7, 82).rotate(0, 180));
      Q(H(5), G(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), T(0.5, 0.3, 0.3, 0.4));
      Q(H(6), G(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), T(0.5, 0.6, 0.7, 0.3));
      Q(H(), G(0, 16, 129).scale(1.5, 1, 2), T(0.5, 0.6, 0.7, 0.3));
      Q(H(7), G(0, 16.2, 133).scale(5, 1, 5), T(0.4, 0.5, 0.6, 0.4));
      Q(L(
        tb(
          t(H(), G(0, 16, 110.5).scale(12, 1, 3), T(0.5, 0.3, 0.3, 0.4)),
          t(H(), G(0, 16, 111).scale(3, 1, 3.8), T(0.5, 0.3, 0.3, 0.4)),
        ),
        t(H(5), G(0, 16, 103.5).scale(5.5, 5, 5.5), T(0.5, 0.3, 0.3, 0.4)),
      ));
      P(f => {
        f.h = k => k.translateSelf(-2 * Math.sin(c)).rotate(25 * Math.sin(c));
        Q(H(3), G(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), T(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(k => {
          Q(H(6), G(0, 16, k + 95).scale(3, 1, 2.3).rotate(0, 90), T(0.7, 0.7, 0.7, 0.4));
          Q(H(), G(0, 6.2, k + 95).scale(0.5, 11, 0.5), T(0.5, 0.3, 0.3, 0.4));
        });
      });
      P(f => {
        f.h = k => {
          const r = Ya(Ya((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          k.translateSelf(0, 16 * r, 8.5 * Va(2 * r - 1) + 95);
        };
        Q(H(5), V(5, 1.1, 5), T(0.5, 0.3, 0.3, 0.4));
        Q(H(5), V(5.5, 0.9, 5.5), T(0.25, 0.25, 0.25, 0.4));
        Db(G(0, 1.5, -1).rotate(0, 180));
      });
      Fb(G(0, 3, 95), ...ib(9).map(({ x: f, z: k }) => [9 * f, 9 * k, 4]));
      Fb(G(0, 19, 134), [0, 0, 3.5]);
    });
    P(() => {
      [0, 180].map(u => Q(p, Qb(0, u).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), T(1, 1, 0.8)));
      Q(kb(20), G(0, 1).scale(0.5, 0.5, 0.5), T(1, 0.3, 0.4));
      Q(kb(30), V(0.7, 0.8, 0.55), T(1, 0.3, 0.4));
      const l = t(L(H(15, 1), t(H(), G(0, 0, 1).scale(2, 2, 0.5))), Qb(-90, 0).scale(0.1, 0.05, 0.1), T(0.3, 0.3, 0.3));
      [-1, 1].map(u => Q(l, G(0.2 * u, 1.2, 0.4).rotate(0, 20 * u, 20 * u)));
      Q(H(), G(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), T(0.3, 0.3, 0.3));
    });
    [-1, 1].map(l =>
      P(() => {
        Q(H(20, 1), G(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), T(1, 0.3, 0.4));
      })
    );
    P(() => {
      Q(H(6, 1), V(0.13, 1.4, 0.13), T(0.3, 0.3, 0.5, 0.1));
      Q(H(10), G(0, 1).scale(0.21, 0.3, 0.21), T(1, 0.5, 0.2));
      Q(H(3), G(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), T(0.2, 0.2, 0.2, 0.1));
    }, 0);
    P(() => {
      Q(H(6).slice(0, -1), V(0.77, 1, 0.77), T(1, 0.3, 0.5));
    }, 0);
    P(() => {
      Q(
        kb(30, 24, (l, u, v) => {
          const w = u / 24, z = l * Math.PI * 2 / 30, B = Math.sin(w ** 0.6 * Math.PI / 2);
          l = w * w * Math.sin(l * Math.PI * 14 / 30) / 4;
          return 23 < u
            ? { x: v.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(z) * B,
              y: Math.cos(w * Math.PI) - w - l,
              z: Math.sin(z) * B + Math.sin(l * Math.PI * 2) / 4,
            };
        }),
        V(0.7, 0.7, 0.7),
        T(1, 1, 1),
      );
      [-1, 1].map(l => Q(kb(12), G(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
