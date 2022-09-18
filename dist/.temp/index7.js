(() => {
  document.body.innerHTML +=
    "<canvas id=hC></canvas><h3>Souls:<b id=h3></b> / XIII</h3><h4 id=h4>loading</h4><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 SalvatorePreviti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><b id=b5>☰</b><style>body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none;-webkit-user-select:none}body>*{position:absolute}.l #b5,.l h3{display:block;padding:10px}.l h3{bottom:0;right:5%;text-align:right}.m main,h4{right:0;top:0}h4{left:0;text-align:center}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:800px;min-width:50%;padding:1em}p{font-size:.7em}h2{color:#f61;margin:0 0 .7em}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}.m h4,h3,main{display:none}";
  let a = 0,
    s1 = !0,
    H = 0,
    Q = 0,
    y = 0,
    x = 0,
    n1 = 0,
    B = 0,
    O = 0,
    o1 = 0,
    z = 0,
    w = 0,
    c1 = 0,
    i1 = 0,
    h1 = 0,
    R = .066,
    X = Math.PI / 180,
    L = new DOMMatrix(),
    q = (t, a) => a < t ? t : a,
    f1 = t => t < 0 ? -t : t,
    W = t => t < 0 ? 0 : 1 < t ? 1 : t,
    N = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
    u1 = t => Math.atan2(Math.sin(t *= X), Math.cos(t)) / X,
    m1 = (t, a, e) =>
      ((t *= X) + (2 * (a = (a * X - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / X,
    y1 = (t, a, e, l) => {
      let r = a - t;
      return (t += Math.sign(a - t) * q(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * W(l / 7);
    },
    E = (t, e) => Array.from(Array(t), (t, a) => e(a)),
    M1 = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
    g = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
    j = ({ x: t, y: a, z: e }) => Math.hypot(t - a1.x, a - a1.y, e - a1.z) || 0,
    n = t => {
      let a = 0, e = 0, l = 0, r, s = t.at(-1);
      for (r of t) {
        a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
      }
      return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
    },
    p = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
    v = (t, a, e) => (t.B = e, t.u = a, t),
    d = (t, l, a = t.u) =>
      v(
        t.map(t =>
          ((
            { x: t, y: a, z: e },
          ) => ({ x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }), { x: t, y: a, z: e }))(t)
        ),
        a,
        t.B,
      ),
    o = (t, a, e) => t.map(t => d(t, a, e)),
    b = (e, l = 0) =>
      E(e, t => {
        let a = Math.cos(2 * Math.PI * t / e);
        return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
      }),
    I = (l, r, s) =>
      l.map((t, a, { length: e }) => v([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.u, s)),
    c = (
      t,
      a,
      e = 0,
      l,
    ) => (l = t.length ? t : b(t, l),
      t = d(l, L.translate(0, 1).scale3d(0 < e ? e : 1)),
      e = d(l, L.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
      [...I(e, t, a), e, t]),
    P = (
      l,
      r = l,
      s = (
        t,
        a,
      ) => (a *= Math.PI / r,
        { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(a), y: Math.cos(a), z: Math.sin(t) * Math.sin(a) }),
    ) => {
      let n = [];
      for (let e = 0; l > e; e++) {
        for (let a = 0; r > a; a++) {
          let t = v([], 0, 1);
          n.push(t),
            t.push(s(e, a, t)),
            a && t.push(s((e + 1) % l, a, t)),
            r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
            t.push(s(e, a + 1 % r, t));
        }
      }
      return n;
    },
    S = (l, r) => {
      let s, n, o, c = r.A;
      for (let t = 0; c.length > t; ++t) {
        if ((o = g(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
          n = [], o = [], c = r.A, t = r.v;
          let a = c.at(-1), e = g(l, a) - l.w;
          for (let t of c) {
            s = g(l, t) - l.w,
              e < 8e-5 && o.push(a),
              -8e-5 < e && n.push(a),
              (8e-5 < e && s < -8e-5 || e < -8e-5 && 8e-5 < s)
              && (e /= s - e,
                a = { x: a.x + (a.x - t.x) * e, y: a.y + (a.y - t.y) * e, z: a.z + (a.z - t.z) * e },
                n.push(a),
                o.push(a)),
              a = t,
              e = s;
          }
          return {
            o: 2 < n.length && { A: v(n, c.u, c.B), v: t, j: r },
            m: 2 < o.length && { A: v(o, c.u, c.B), v: t, j: r },
          };
        }
      }
      return { o: s, m: n };
    },
    Y = (e, l, r = n(l.A)) => {
      if (e) {
        let { o: t, m: a } = S(e, l);
        t || a || e.C.push(l), t && (e.o = Y(e.o, t, r)), a && (e.m = Y(e.m, a, r));
      } else e = { x: r.x, y: r.y, z: r.z, w: r.w, C: [l], o: 0, m: 0 };
      return e;
    },
    e = (a, r, s) => {
      let n = [],
        o = (t, a) => {
          let { o: e, m: l } = S(t, a);
          e || l || (0 < s * g(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
        };
      for (let t of r.C) o(a, t);
      return n;
    },
    k = (t, a) => t && (a(t), k(t.o, a), k(t.m, a)),
    T = t => t.length ? t.reduce((t, a) => Y(t, { A: a, v: 0, j: 0 }), 0) : t,
    l = t => (k(t, a => {
      let t = a.m;
      a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
      for (let t of a.C) t.v = !t.v;
    }),
      t),
    i = (...t) =>
      t.reduce((l, a) => {
        let r = [];
        if (l = T(l), a) {
          a = T(a), k(l, t => t.C = e(a, t, 1)), k(a, t => r.push([t, e(l, t, -1)]));
          for (let [a, e] of r) for (let t of e) Y(l, t, a);
        }
        return l;
      }),
    h = (t, ...a) => l(i(l(T(t)), ...a)),
    f = t => {
      let e = new Map(),
        l = new Map(),
        r = a => {
          if (a.j) {
            let t = e.get(a.j);
            t ? (l.delete(t), a = r(a.j)) : e.set(a.j, a);
          }
          return a;
        };
      return k(t, a => {
        for (let t of a.C) l.set(r(t), t.v);
      }),
        Array.from(l, ([{ A: t }, a]) => {
          let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
          return v(a ? e.reverse() : e, t.u, t.B);
        });
    },
    u = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
    x1 = [],
    g1 = [],
    p1 = [],
    U = [],
    z1 = [],
    F = [[]],
    C = new Map(),
    s = new Int32Array(7),
    D = t => {
      let { x: a, y: e, z: l } = Q1[t], r = (G1[0] = a, G1[1] = e, G1[2] = l, C.get(t = "" + (Q1.B ? J1 : s)));
      return void 0 !== r
        ? (a = 3 * r, U[a] = (U[a++] + s[4]) / 2, U[a] = (U[a++] + s[5]) / 2, U[a] = (U[a] + s[6]) / 2)
        : (C.set(t, r = C.size), p1.push(a, e, l), U.push(s[4], s[5], s[6]), z1.push(s[3])),
        r;
    },
    m = (t, a = L, e) => F.at(-1).push(...o(t, a, e)),
    v1 = () => {
      let t = F.at(-1);
      for (Q1 of t) {
        let { x: t, y: a, z: e } = n(Q1);
        s[3] = 0 | Q1.u, s[4] = 32767 * t, s[5] = 32767 * a, s[6] = 32767 * e;
        for (let t = 2, a = D(0), e = D(1); Q1.length > t; ++t) g1.push(a, e, e = D(t));
      }
      return t.length = 0, { I: t = a, H: (a = g1.length) - t };
    },
    A = t => {
      let a = H1, e = { s: L, G: x1.length + 1, F: 1, j: a === x1[0] ? void 0 : a };
      return H1 = e, x1.push(e), F.push([]), t = t(e) || v1(), e.D = t, F.pop(), H1 = a, e;
    },
    d1 = () => {
      for (let a of x1) {
        let t = a.h;
        a.s = a.j ? a.j.s : L, (t = t && t(a)) && (a.s = a.s.multiply(t));
      }
    },
    K = -11,
    V = 17,
    J = -90,
    G = 0,
    _ = 0,
    w1 = t => Math.sin(t * Math.PI * 2),
    Z = [],
    I1 = () => {
      e1 || !s1 ? Z1.disconnect() : Z1.connect(_1.destination), b4.innerHTML = "Music: " + s1;
    },
    A1 = (t = !1) => {
      if (e1 !== t) {
        e1 = t, l1 = 0;
        try {
          t ? document.exitPointerLock() : Z1.start();
        } catch {}
        document.body.className = t ? "l m" : "l", I1();
      }
    },
    $ = (t, a, e) => t + (a - t) * W(1 - Math.exp(-e * R)),
    t = ({ l: t }) => t,
    t1 = [],
    j1 = [],
    P1 = () => {
      n1 = j1.reduce((t, a) => t + a.l, 0),
        h3.innerHTML = " "
          + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][n1];
    },
    S1 = () => {
      P1(), localStorage.DanteSP22 = JSON.stringify([t1.map(t), j1.map(t), O, x, h1]);
    },
    a1 = { x: 0, y: 0, z: 0 },
    M = o => {
      A(r => {
        let s = { l: 0, g: 0, i: 0, j: r.j }, n = t1.push(s) - 1;
        r.h = () => {
          let t = s.l, a = s.g, e = s.i, l = (s.s = r.s).transformPoint();
          return j(l) < 2.9 && Z[5] && (a < .3 || .7 < a)
            && (s.l = t ? 0 : 1, n && !c1 && (h4.innerHTML = "* click *", B = x + 1), O = n, S1()),
            s.g = $(a, t, 4),
            s.i = $(e, t, 1),
            r.D = $1[.5 < a ? 1 : 0],
            o.rotate(60 * s.g - 30, 0).translateSelf(0, 1);
        };
      }),
        m(c(5), o.translate(-.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
        m(c(5), o.translate(.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
        m(c(u), o.translate(0, -.4).scale(.5, .1, .5), 6717311);
    },
    Y1 = (t, a, e) =>
      L.translate(t + Math.sin(x + 2) / 5, a + Math.sin(.8 * x) / 3, e).rotateSelf(
        2 * Math.sin(x),
        Math.sin(.7 * x),
        Math.sin(.9 * x),
      ),
    r = (n, ...t) => {
      let o = -1,
        c = 0,
        i = 1,
        h = 0,
        f = 0,
        u = 3,
        m = 0,
        M = 0,
        g = { l: 0 },
        p = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
        v = p[0],
        { x: d, z: b } = v,
        y = d,
        I = b,
        e = j1.push(g) - 1;
      return A(a => (a.h = () => {
        if (!g.l) {
          w = 1;
          let e = 1 / 0;
          for (z of p) {
            var t, w, z, l = z.w, r = Math.hypot(d - z.x, b - z.z), s = r - l;
            t ||= r < l, 0 < s && e > s && (e = s, v = z), w = w < (l = r / l) ? w : l;
          }
          if (!t) {
            e = v.z, l = v.w;
            let t = Math.hypot(r = d - (z = v.x), s = b - e), a = Math.atan2(-s, r);
            i && (h = (Math.random() - .5) * Math.PI / 2, u = q(1, u / (1 + Math.random()))),
              a += h,
              o = -Math.cos(a),
              c = Math.sin(a),
              .1 < t && (t = (l > t ? t : l) / (t || 1), d = r * t + z, b = s * t + e);
          }
          i = t,
            u = $(u, 3 + 6 * (1 - w), 3 + w),
            d = $(d, d + o, u),
            b = $(b, b + c, u),
            y = $(y, d, u),
            I = $(I, b, u),
            f = m1(f, Math.atan2(y - m, I - M) / X - 180, 3 * R),
            m = y,
            M = I,
            w = n.translate(y, 0, I).rotateSelf(0, f).skewXSelf(7 * Math.sin(2 * x)).skewYSelf(7 * Math.sin(1.4 * x)),
            t = a.s.multiply(w).transformPoint(),
            j(t) < 1.5
            && (g.l = 1,
              t = [
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
              ][n1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              z = n1 && n1 < 12 ? 5 : 7,
              c1 || (h4.innerHTML = t, B = x + z),
              S1());
        }
        return g.l
          && (a.j = X1,
            t = e % 4 - 2,
            w = L.translate(
              e % 4 * 1.2 - 1.7 + Math.sin(x + e) / 6,
              -2,
              1.7 * (e / 4 | 0) - 5.5 + (t < 0 ? -t : t) + Math.cos(x / 1.5 + e) / 6,
            )),
          w;
      },
        tt)
      );
    },
    k1 = (t, a, e, l) => {
      let r = 0,
        s = 0,
        n = 0,
        o = 1 / 0,
        c = -1 / 0,
        i = 1 / 0,
        h = -1 / 0,
        f = 1 / 0,
        u = -1 / 0,
        m = 1.1 * (e - a),
        M = new DOMMatrix(M1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
      return t = E(
        8,
        t => (t = M.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
          r -= t.x = (m * t.x | 0) / m / t.w,
          s -= t.y = (m * t.y | 0) / m / t.w,
          n -= t.z = (m * t.z | 0) / m / t.w,
          t),
      ),
        a = L.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
        d(t, a).map(({ x: t, y: a, z: e }) => {
          o = t > o ? o : t,
            c = c > t ? c : t,
            i = a > i ? i : a,
            h = h > a ? h : a,
            f = e > f ? f : e,
            u = u > e ? u : e;
        }),
        f *= f < 0 ? l : 1 / l,
        u *= 0 < u ? l : 1 / l,
        L.scale(2 / (c - o), 2 / (h - i), 2 / (f - u)).translateSelf((c + o) / -2, (h + i) / -2, (f + u) / 2)
          .multiplySelf(a).toFloat32Array();
    },
    T1 = (t, a = 35633) => (a = r1.c6x(a), r1.s3c(a, t), r1.c6a(a), a),
    F1 = (t, a) => {
      let e = {}, l = r1.c1h();
      return r1.abz(l, t), r1.abz(l, T1(a, 35632)), r1.l8l(l), t => t ? e[t] || (e[t] = r1.gan(l, t)) : r1.u7y(l);
    },
    C1 = (l, r, s) => {
      let n = t => r1.d97(4, t.H, 5123, 2 * t.I);
      if (e1) r1.uae(l, !1, L.rotate(0, 40 * Math.sin(y) - 70).toFloat32Array()), n(R1.D), O1.map(t => t.D).map(n);
      else {
        for (let e of x1) {
          let t = e.G, a = e.D;
          (r || e !== R1 && e !== O1[0] && e !== O1[1]) && a
            && (s && r1.ube(s, t / 255), r1.uae(l, !1, e.s.toFloat32Array()), n(a));
        }
      }
    },
    D1 = new Int32Array(10725888),
    H1,
    Q1,
    e1,
    l1,
    B1,
    O1,
    R1,
    X1,
    L1,
    q1,
    W1,
    N1,
    E1 = "data:image/svg+xml;base64,"
      + btoa(
        "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
      ),
    U1 = (() => {
      let a = E(
          11,
          t => L.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
        ),
        e = b(18);
      return E(10, t => I(d(e, a[t]).reverse(), d(e, a[t + 1]), 1)).flat();
    })(),
    K1 = f(
      h(
        o(c(20, 1, 1.15, 1), L.translate(0, -3).scale(3.5, 1, 3.5), -1304467790),
        o(c(20, 1, 1.3, 1), L.translate(0, -2.5).scale(2.6, 1, 3), 859793074),
        o(c(u), L.translate(4, -1.2).scale3d(2), 1279223474),
      ),
    ),
    V1 = f(
      h(
        o(c(u), L.translate(0, -8).scale(6, 15, 2.2)),
        o(c(u), L.translate(0, -14.1).scale(4, 13, 4)),
        o(c(20, 1), L.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
      ),
    ),
    J1 = new Int32Array(s.buffer, 0, 4),
    G1 = new Float32Array(s.buffer),
    _1 = new AudioContext(),
    Z1 = _1.createBufferSource(),
    $1 = (m([u.slice(1)], L.translate(-2).scale3d(3).rotate(90, 0)),
      v1(),
      [3375103, 3407794].map(
        t => (m(c(6, 1), L.scale(.13, 1.4, .13), 8342604),
          m(c(8), L.translate(0, 1).scale(.21, .3, .21), t),
          m(c(3), L.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), 3355443),
          v1()),
      )),
    tt = (m(
      P(40, 30, (t, a, e) => {
        let l = a / 30, r = .05 * t * Math.PI, s = l ** .6 * Math.PI / 2;
        return t = l * l * Math.sin(t * Math.PI * .35) / 4,
          29 === a
            ? { x: e.B = 0, y: -.5, z: 0 }
            : {
              x: Math.cos(r) * Math.sin(s),
              y: Math.cos(l * Math.PI) - l - t,
              z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
            };
      }),
      L.scale3d(.7),
      16777215,
    ),
      [-1, 1].map(t => m(P(15), L.translate(.16 * t, .4, -.36).scale3d(.09))),
      v1()),
    r1 = hC.getContext("webgl2");
  for (let t in r1) r1[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = r1[t];
  setTimeout(() => {
    let a = 0,
      t = 6,
      e = () => {
        if (h4.innerHTML += ".", !--t) {
          let h = 0,
            f = 0,
            u = 1,
            m = 0,
            M = 0,
            g = 0,
            p = !1,
            v = { x: 0, y: 0, z: 0 },
            d = new Int32Array(256),
            e = () => {
              let { j: t, s: a } = t1[O], { x: e, y: l, z: r } = a.transformPoint({ x: 0, y: 8, z: -3 });
              a1.x = v.x = e,
                a1.y = v.y = k = l,
                a1.z = v.z = r,
                A =
                  Y =
                  S =
                  j =
                  P =
                    0,
                u = 1,
                h = f = t?.G || 1;
            },
            l = t => {
              requestAnimationFrame(l);
              let a = (t - (B1 || t)) / 1e3;
              R = e1 ? Z[5] = 0 : .066 < a ? .066 : a,
                x += R,
                y += a,
                B1 = t,
                0 < R && (r1.b6o(36160, F),
                  r1.r9r(0, 0, 128, 128, 6408, 5121, b),
                  r1.iay(36160, [36064]),
                  (() => {
                    let a = 0,
                      e = 0,
                      t = ((() => {
                        let s = 0, n = 0, a = 0, e = 0, o = 0;
                        d.fill(0);
                        for (let t = 0; t < 31; ++t) {
                          let l = 0, r = 512 * t;
                          for (let e = 0; e < 128; e++) {
                            let t = r + 4 * e, a = (b[t] + b[1 + t]) / 255;
                            t = b[2 + t],
                              14 < e && e < 114 && (l += a),
                              t && a && (a = d[t] + 1, d[t] = a, s > a || (s = a, n = t));
                          }
                          l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), o = 1);
                        }
                        n && (o = 1),
                          u ? n && (u = 0, f = n) : f = n || h,
                          h = n,
                          A = o,
                          j = $(j, o ? 6.5 : 8, 4),
                          v.y += a / 41 - (o ? 1 : j) * e / 41 * j * R;
                      })(),
                        (() => {
                          for (let t = 32; t < 128; t += 2) {
                            let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                            for (let s = t >> 1 & 1; s < 128; s += 2) {
                              let t = h + 4 * s,
                                a = h + 4 * (127 - s),
                                e = b[t] / 255,
                                l = b[1 + a] / 255,
                                r = s / 63.5 - 1;
                              r = 1 - (r < 0 ? -r : r),
                                10 < s && s < 118
                                && (n = q(n, q(e * r, e * b[a] / 127.5)), o = q(o, q(l * r, l * b[1 + t] / 255))),
                                (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < e ? e : l) / 3)
                                && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                            }
                            c = i - c,
                              n = o - n,
                              (c < 0 ? -c : c) > (a < 0 ? -a : a) && (a = c),
                              (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                          }
                        })(),
                        (Z[0] ? 1 : 0) + (Z[2] ? -1 : 0) + H),
                      l = (Z[1] ? 1 : 0) + (Z[3] ? -1 : 0) + Q,
                      r = navigator.getGamepads()[0];
                    if (r) {
                      var y, s = t => a[t]?.pressed || 0 < a[t]?.value;
                      let a = r.buttons;
                      r = r.axes,
                        y = s(1) || s(3) || s(2) || s(0),
                        y !== p && (p = y) && (Z[5] = 1),
                        t += (.2 < f1(-r[0]) ? -r[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                        l += (.2 < f1(-r[1]) ? -r[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                        l1 && (.3 < f1(r[2]) && (_ += 80 * r[2] * R), .3 < f1(r[3]) && (G += 80 * r[3] * R));
                    }
                    (l < 0 ? -l : l) < .05 && (l = 0),
                      (t < 0 ? -t : t) < .05 && (t = 0),
                      s = Math.atan2(l, t),
                      r = W(Math.hypot(l, t)),
                      t = r * Math.cos(s),
                      l = r * Math.sin(s);
                    let x = W(1 - 5 * q(a < 0 ? -a : a, e < 0 ? -e : e)),
                      n =
                        (f || (a += S * x * R, e += Y * x * R),
                          S = $(S, 0, A ? 8 : 4),
                          Y = $(Y, 0, A ? 8 : 4),
                          P = $(P, A ? (t || l ? A ? 7 : 4 : 0) * x : 0, A ? .1 < x ? 10 : t || l ? 5 : 7 : 1),
                          x = Math.sin(y = l1 ? _ * X : Math.PI) * P * R,
                          Math.cos(y) * P * R);
                    if (
                      a -= t * n - l * x,
                        e -= t * x + l * n,
                        (x = (y = f && x1[f - 1].F && x1[f - 1].s || L).inverse()).m41 = 0,
                        x.m42 = 0,
                        x.m43 = 0,
                        { x: a, z: e } = x.transformPoint({ x: a, z: e, w: 0 }),
                        v.x += a,
                        v.z += e,
                        f !== I
                    ) {
                      I = f;
                      let { x: t, y: a, z: e } = y.inverse().transformPoint(a1);
                      v.x = t, v.y = a, v.z = e;
                    }
                    x = a1.x, n = a1.z;
                    let { x: o, y: c, z: i } = y.transformPoint(v);
                    a1.x = o,
                      a1.y = c,
                      a1.z = i,
                      y = f1(k - c),
                      k = $(k, c + .1, 50 * y + 5),
                      f && (S = (a1.x - x) / R, Y = (a1.z - n) / R),
                      (t || l) && (m = 90 - s / X),
                      M = m1(M, m, 8 * R),
                      g += (r - g) * W(10 * R);
                  })(),
                  d1()),
                0 < R && (r = y1(r, a1.x, .5, R),
                  s = y1(s, a1.y, 2, R),
                  n = y1(n, a1.z, .5, R),
                  l1
                    ? (K = $(K, a1.x, 18 + (t = 200 * u)),
                      V = $(V, a1.y + 1.5, 15 + t),
                      J = $(J, a1.z, 18 + t),
                      G = q(G < 87 ? G : 87, -87))
                    : (K = y1(K, r, 1, 2 * R),
                      V = y1(V, s + 13 + 15 * u, 4, 2 * R),
                      1 < ((t = (J = y1(J, n + -18, 1, 2 * R)) - n) < 0 ? -t : t)
                      && (a = K - r, _ = 270 + Math.atan2(t, a) / X, G = 90 - Math.atan2(Math.hypot(t, a), V - s) / X)),
                  _ = u1(_),
                  0 < R
                  && (t = N(t1[12].g, t1[13].g),
                    x > B && (h4.innerHTML = "", B = 0),
                    a = $(w, 0, 1),
                    w = a + (u1(w + 60 * R) - a) * W(t1[5].g - t1[6].i),
                    a = $(o1, 0, 5),
                    o1 = a + (u1(o1 + 56 * R) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                    a = $(z, 0, 4),
                    z = a + (u1(z + 48 * R) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                    h1 = $(h1, t1[9].i, .2 + .3 * ((t = 2 * t1[9].i - 1) < 0 ? -t : t)),
                    i1 = $(i1, c1 ? i1 + (-9 - i1) * W(1.5 * R) : W(x / 3), 1),
                    1 === t1[0].l && .8 < t1[0].g && (n1 < 13
                      ? (t1[0].l = 0, c1 || (h4.innerHTML = "Not leaving now, there are souls to catch!", B = x + 3))
                      : c1
                        || (c1
                          || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", B = x + 1 / 0),
                          c1 = 1)),
                    Z[5] = 0,
                    (a1.x < -25 || a1.z < 109 ? -25 : -9) > a1.y && e())),
                t = e1
                  ? L.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + W(hC.clientWidth / 1e3))
                  : L.rotate(-G, -_, -0).invertSelf().translateSelf(-K, -V, -J),
                0 < R
                && (i(),
                  r1.b6o(36160, F),
                  r1.v5y(0, 0, 128, 128),
                  r1.cbf(!0, !1, !0, !1),
                  r1.c4s(16640),
                  r1.uae(
                    i("b"),
                    !1,
                    L.rotate(0, 180).invertSelf().translateSelf(-a1.x, -a1.y, .3 - a1.z).toFloat32Array(),
                  ),
                  C1(i("c"), 0, i("j")),
                  r1.cbf(!1, !0, !1, !1),
                  r1.c4s(16640),
                  r1.cbf(!1, !0, !0, !1),
                  r1.uae(i("b"), !1, L.translate(-a1.x, -a1.y, -a1.z - .3).toFloat32Array()),
                  C1(i("c"), 0, i("j")),
                  r1.cbf(!0, !0, !0, !0),
                  1 === f && (t1[9].l = a1.x < -15 && a1.z < 0 ? 1 : 0)),
                o(),
                r1.v5y(0, 0, 2048, 2048),
                C[0](k1(t, .3, 55, 10)),
                C[1](k1(t, 55, 177, 11)),
                r1.b6o(36160, null),
                T(),
                r1.v5y(0, 0, r1.drawingBufferWidth, r1.drawingBufferHeight),
                r1.c4s(16640),
                r1.uae(T("a"), !1, M1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
                r1.uae(T("b"), !1, t.toFloat32Array()),
                r1.ubu(T("k"), K, V, J),
                C[0](),
                C[1](),
                C1(T("c"), !l1),
                c(),
                r1.ubu(c("j"), r1.drawingBufferWidth, r1.drawingBufferHeight, y),
                e1 ? r1.ubu(c("k"), 0, 0, 0) : r1.ubu(c("k"), K, V, J),
                r1.uae(c("b"), !1, t.inverse().toFloat32Array()),
                r1.d97(4, 3, 5123, 0);
            },
            b = new Uint8Array(65536),
            I,
            A,
            j,
            P,
            S,
            Y,
            k,
            r,
            s,
            n,
            t = T1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}`),
            o = F1(
              T1(`#version 300 es
in vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}`),
              `#version 300 es
void main(){}`,
            ),
            c = F1(
              T1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
              `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
            ),
            i = F1(
              t,
              `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}`,
            ),
            T = F1(
              t,
              `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
            ),
            F =
              (c(),
                r1.ubh(c("q"), 3),
                i(),
                r1.uae(i("a"), !1, M1(1.4, .59, 1e-4, 1)),
                T(),
                r1.ubh(T("q"), 3),
                r1.c5w()),
            a = (t = r1.c3z(), r1.c25()),
            C = E(2, t => {
              let a, e = r1.c25(), l = r1.c5w(), r = T(t ? "j" : "i");
              return T(),
                r1.ubh(T(t ? "h" : "g"), t),
                r1.b6o(36160, l),
                r1.d45([0]),
                r1.r9l(0),
                r1.a4v(33984 + t),
                r1.b9j(3553, e),
                r1.fas(36160, 36096, 3553, e, 0),
                r1.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                r1.t2z(3553, 10241, 9729),
                r1.t2z(3553, 10240, 9729),
                r1.t2z(3553, 34893, 515),
                r1.t2z(3553, 34892, 34894),
                r1.t2z(3553, 10243, 33071),
                r1.t2z(3553, 10242, 33071),
                t => {
                  t
                    ? (a = t,
                      r1.b6o(36160, l),
                      r1.iay(36160, [36096]),
                      r1.c4s(256),
                      r1.uae(o("b"), !1, a),
                      C1(o("c"), !l1))
                    : r1.uae(r, !1, a);
                };
            });
          r1.b11(34963, r1.c1b()),
            r1.b2v(34963, new Uint16Array(g1), 35044),
            r1.b11(34962, r1.c1b()),
            r1.b2v(34962, new Float32Array(p1), 35044),
            r1.v7s(0, 3, 5126, !1, 0, 0),
            r1.b11(34962, r1.c1b()),
            r1.b2v(34962, new Int16Array(U), 35044),
            r1.v7s(1, 3, 5122, !0, 0, 0),
            r1.b11(34962, r1.c1b()),
            r1.b2v(34962, new Uint32Array(z1), 35044),
            r1.v7s(2, 4, 5121, !0, 0, 0),
            r1.e3x(0),
            r1.e3x(1),
            r1.e3x(2),
            r1.e8z(2929),
            r1.e8z(2884),
            r1.c70(1),
            r1.c7a(1029),
            r1.d4n(515),
            r1.c5t(0, 0, 0, 1),
            r1.b6o(36160, F),
            r1.bb1(36161, t),
            r1.r4v(36161, 33189, 128, 128),
            r1.f8w(36160, 36096, 36161, t),
            r1.a4v(33987),
            r1.b9j(3553, a),
            r1.fas(36160, 36064, 3553, a, 0),
            r1.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
            r1.b9j(3553, r1.c25()),
            r1.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, D),
            r1.gbn(3553),
            r1.t2z(3553, 10241, 9987),
            r1.t2z(3553, 10240, 9729),
            R1.h = () => L.translate(a1.x, k, a1.z).rotateSelf(0, M),
            O1.map((t, a) => {
              t.h = () =>
                L.translate(0, g * W(.45 * Math.sin(9.1 * x + Math.PI * a - Math.PI / 2))).rotateSelf(
                  g * Math.sin(9.1 * x + Math.PI * a) * .25 / X,
                  0,
                );
            });
          try {
            let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
            t1.map((t, a) => t.g = t.i = t.l = a ? 0 | e[a] : 0),
              j1.map((t, a) => t.l = 0 | l[a]),
              O = t,
              x = a,
              h1 = r;
          } catch {}
          i1 = O < 0 ? 0 : 1 < O ? 1 : O,
            h4.innerHTML = "",
            B = 0,
            P1(),
            d1(),
            (() => {
              let r = 0,
                s = 0,
                t = 0,
                a = () => {
                  hC.width = innerWidth,
                    hC.height = innerHeight,
                    Z.length = H = Q = 0,
                    n = o = void 0,
                    document.hidden && A1(!0);
                },
                n,
                o,
                c;
              b1.onclick = () => A1(),
                b2.onclick = () => {
                  A1(), l1 = 1;
                },
                b3.onclick = () => {
                  confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
                },
                b4.onclick = () => {
                  s1 = !s1, I1();
                },
                b5.onclick = () => A1(!0),
                onclick = () => {
                  c = 1, e1 || (Z[5] = !0, l1 && hC.requestPointerLock());
                },
                document.onvisibilitychange = onresize = onblur = a,
                onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                  l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && e1)
                    ? e1 && !c || A1(!e1)
                    : 5
                        === (t = {
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
                        }[t])
                    ? a && (Z[t] = 1)
                    : Z[t] = a);
                },
                onmousemove = ({ movementX: t, movementY: a }) => {
                  l1 && (t || a) && (_ += .1 * t, G += .1 * a);
                },
                hC.ontouchstart = a => {
                  if (!e1) {
                    for (let t of a.changedTouches) {
                      l1 && t.pageX > hC.clientWidth / 2
                        ? n || (n = t, r = _, s = G)
                        : o = o || t;
                    }
                    t = y;
                  }
                },
                hC.ontouchmove = ({ changedTouches: l }) => {
                  if (!e1) {
                    for (
                      let { pageX: t, pageY: a, identifier: e } of l
                    ) {
                      n?.identifier === e && (_ = r + (t - n.pageX) / 3, G = s + (a - n.pageY) / 3),
                        o?.identifier === e
                        && (H = -(t - o.pageX) / 18,
                          Q = -(a - o.pageY) / 18,
                          H = (H < 0 ? -H : H) < .35 ? 0 : .8 * H,
                          Q = (Q < 0 ? -Q : Q) < .35 ? 0 : .8 * Q);
                    }
                  }
                },
                hC.ontouchend = a => {
                  for (let t of a.changedTouches) {
                    t.identifier === n?.identifier && (n = void 0),
                      t.identifier === o?.identifier && (o = void 0, Q = H = 0);
                  }
                  a.preventDefault(), a = y - t, (!t || .02 < a && a < .4) && (Z[5] = !0);
                },
                oncontextmenu = () => !1,
                a(),
                A1(!0);
            })(),
            e(),
            K = r = a1.x,
            V = (s = a1.y) + 13,
            J = (n = a1.z) + -18,
            requestAnimationFrame(l);
        }
      },
      l = () => {
        if (a < 5) {
          var R, X, B = 0, O = a++;
          let [v, d, b, I, A, j, P, S, Y, k, y, x, T, F, C, D, z, w, t, H, Q] =
            [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, [
              "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
              "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
              "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
              "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
              "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
              "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
            ]], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, [
              ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
              "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
              ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
              "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
              "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
              "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
            ]], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
              "9(((9(((9(((9(((9(((9(((9(((9",
              "9(((Q(((Q(((Q",
            ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
              "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
              "9(9(9(9(9(999(9(((((Q",
            ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
              "((((Q(((((((Q(((((((Q(((((((Q",
              "Q((Q((Q((Q((Q((Q((((Q",
            ]]][O];
          k = k * k * 4;
          for (let p of [5513, 4562, 3891]) {
            let r = 0,
              s = 0,
              f = [],
              u,
              n,
              o,
              c,
              i,
              h = new Int32Array(768 * p),
              m = 2 ** (x - 9) / p,
              M = Math.PI * 2 ** (z - 8) / p,
              g = t * p & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * O + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * p;
                for (X = 0; X < 4; ++X) {
                  if (u = 0, a && (u = Q[a - 1].charCodeAt(t + 32 * X) - 40, u += 0 < u ? 106 : 0), u) {
                    if (!(R = f[u])) {
                      let l = 0,
                        r = 0,
                        s,
                        n,
                        o = R = u,
                        c = O < 2
                          ? t => t % 1 * 2 - 1
                          : w1,
                        i = O < 2
                          ? O < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : w1,
                        h = new Int32Array(S + Y + k);
                      for (let a = 0, e = 0; S + Y + k > a; ++a, ++e) {
                        let t = 1;
                        S > a ? t = a / S : S + Y > a || (t = (1 - (t = (a - S - Y) / k)) * 3 ** (-y / 16 * t)),
                          e < 0
                          || (e -= 4 * p,
                            n = .00396 * 2 ** ((o + d - 256) / 12),
                            s = .00396 * 2 ** ((o + A - 256) / 12) * (1 + (O ? 0 : 8e-4 * 9))),
                          h[a] = 80
                              * (c(l += n * t ** (b / 32)) * v + i(r += s * t ** (j / 32)) * I
                                + (P ? (2 * Math.random() - 1) * P : 0))
                              * t | 0;
                      }
                      R = f[R] = h;
                    }
                    for (let t = 0, a = 2 * e; R.length > t; ++t, a += 2) h[a] += R[t];
                  }
                }
                for (let t, a = 0; p > a; ++a) {
                  X = 0,
                    ((t = h[R = 2 * (e + a)]) || i)
                    && (o = .00308 * T,
                      1 != O && 4 != O || (o *= Math.sin(m * R * Math.PI * 2) * H / 512 + .5),
                      o = 1.5 * Math.sin(o),
                      r += o * s,
                      c = (1 - F / 255) * (t - s) - r,
                      s += o * c,
                      t = 4 == O ? s : 3 == O ? c : r,
                      O || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= C / 32,
                      i = 1e-5 < t * t,
                      n = Math.sin(M * R) * D / 512 + .5,
                      X = t * (1 - n),
                      t *= n),
                    R < g || (X += h[R - g + 1] * w / 255, t += h[R - g] * w / 255),
                    D1[B + R] += h[R] = X,
                    ++R,
                    D1[B + R] += h[R] = t;
                }
              }
            }
            B += h.length;
          }
          setTimeout(l);
        } else {
          for (B = _1.createBuffer(2, 5362944, 44100), O = 0; O < 2; O++) {
            for (let t = O, a = B.getChannelData(O); t < 10725888; t += 2) {
              a[t >> 1] = D1[t] / 65536;
            }
          }
          Z1.buffer = B, Z1.loop = !0;
        }
        e();
      },
      D = new Image();
    D.onload = D.onerror = () => {
      e();
    },
      D.src = E1,
      setTimeout(l, 50),
      (() => {
        let n;
        A(() => {
          let r = () => {
              let t = t1[2].i, a = 1 - t1[4].i;
              return t < a ? t : a;
            },
            t = (a, e, l) =>
              A(t => {
                t.h = () => L.translate(r() * Math.sin(3 * a + x * a) * e),
                  u.map(({ x: t, z: a }) => {
                    m(c(11, 1), L.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), -1716368257),
                      m(c(u), L.translate(4 * t, 7, l + 4 * a).scale(1, .3), 1283424127);
                  }),
                  m(f(h(
                    o(c(u), L.translate(0, 0, l).scale(5, 1, 5), 1288490188),
                    ...[-1, 1].map(t =>
                      o(c(u), L.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), 1288490188)
                    ),
                  ))),
                  m(c(u), L.translate(0, -3, l).scale(8, 2, 8), 1281779302);
              }),
            l = (X1 = A(t => {
              t.h = () => Y1(-12, 4.2, 40 * i1 - 66), M(L.translate(0, -3, 4)), m(K1);
            }),
              E(7, t => m(c(6, 1), L.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), 6310988)),
              v1()),
            a = (m(c(u), L.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), 869059788),
              u.map(({ x: t, z: a }) => m(c(6), L.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), 1716276377)),
              [-23, 22].map(t =>
                m(c(u), L.translate(0, 0, t).scale(3, 1, 8), 870704613)
              ),
              [-15, 15].map((a, e) => {
                m(c(u), L.translate(0, 6.3, a).scale(4, .3, 1), 1716276300),
                  m(c(u), L.translate(0, 1, a).scale(3, .2, .35), 1283424127),
                  A(t => (t.h = () => L.translate(0, 4.7 * -t1[e + 1].g, a), l));
              }),
              E(5, a =>
                E(2, t =>
                  m(
                    U1,
                    L.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    869072895,
                  ))),
              m(c(u), L.translate(3, 1.5, -20).scale(.5, 2, 5), 867349170),
              m(c(u), L.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), 868204479),
              m(c(5), L.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), 1716276377),
              M(L.translate(-5.4, 1.5, -19).rotate(0, -90)),
              m(c(u), L.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), 2134062028),
              m(f(
                h(
                  i(
                    o(c(6, 0, 0, .3), L.translate(8, -3, -4).scale(13, 1, 13), 867349170),
                    o(c(6), L.translate(0, -8).scale(9, 8, 8), 2139042662),
                    o(c(6, 0, 0, .3), L.translate(0, -.92).scale(13, 2, 13), 869059788),
                  ),
                  o(c(5), L.scale(5, 30, 5), 2140746598),
                  o(c(5, 0, 1.5), L.translate(0, 1).scale(4.5, .3, 4.5), 870678450),
                  o(c(u), L.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), 2139062143),
                  o(c(6), L.translate(15, -1.5, 4).scale(3.5, 1, 3.5), 2139062143),
                ),
              )),
              A(t => {
                t.h = () =>
                  L.translate(
                    0,
                    .01 < t1[3].g
                      ? (5 * Math.cos(1.5 * x) + 2) * t1[3].i * (1 - t1[2].g) + -15 * (1 - t1[3].g)
                      : -500,
                    0,
                  ),
                  M(L.translate(0, 1.2)),
                  m(c(5), L.translate(0, -.2).scale(5, 1, 5), 1286776217);
              }),
              M(L.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              L1 = A(t => {
                t.h = () => L.translate(r() * Math.sin(x / 1.5 + 2) * 12),
                  m(
                    f(h(
                      i(
                        o(c(u), L.scale(1.5, 1, 5), 870704613),
                        o(c(6), L.scale(4, 1, 5), 870704613),
                        o(c(u), L.translate(0, -2).scale(2, 3.2, 1.9), 2139081804),
                        o(c(16, 1, 0, 4), L.scale(1, 1, 1.5).rotate(0, 90), 870704613),
                      ),
                      o(c(u), L.scale(1.3, 10, 1.3), -1721322957),
                    )),
                    L.translate(0, 0, 45),
                  );
              }),
              A(t => {
                t.h = () => L.translate(9.8 * (1 - r())),
                  m(c(3), L.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), 865704268),
                  m(c(8), L.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), 869059788),
                  m(c(u), L.translate(-23, -3, 55).scale(5.2, 1.7, 3), 1283424127),
                  m(c(u), L.translate(-23, -2.2, 62).scale(3, 1, 4), 1283424127),
                  M(L.translate(-23, -.5, 66.5));
              }),
              m(c(u), L.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), 870704613),
              A(t => {
                t.h = () => L.translate(0, W(1 - 5 * r()) * N(t1[4].g, t1[5].g) * Math.sin(1.35 * x) * 4),
                  m(c(u), L.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), 867349170),
                  m(
                    f(h(o(c(u), L.scale(3, 1.4, 2.7)), o(c(u), L.scale(1.2, 8, 1.2)))),
                    L.translate(-33, -3, 55),
                    867349170,
                  );
              }),
              A(t => {
                t.h = () => L.translate(0, 0, W(1 - 5 * r()) * N(t1[4].g, t1[5].g) * Math.sin(.9 * x) * 8),
                  m(f(
                    h(
                      o(c(u), L.translate(-27, -3, 55).scale(3, 1.4, 2.7), 870704613),
                      o(c(u), L.translate(-27, -3, 55).scale(1, 3), 870704613),
                    ),
                  )),
                  m(c(u), L.translate(-39, -3, 55).scale(3, 1.4, 2.7), 870704613);
              }),
              A(t => {
                t.h = () => L.translate(0, -6.5 * t1[4].i),
                  m(c(6), L.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), 1722987186);
              }),
              [...o(
                f(i(
                  o(c(u), L.translate(0, -3).scale(11, 1.4, 3), 870704613),
                  h(
                    o(c(6), L.rotate(0, 0, 90).scale(6, 8, 6), 1285134668),
                    o(c(4, 0, .01), L.translate(0, 6).scale(12, 2, .75).rotate(0, 45), 1285134668),
                    o(c(6), L.rotate(0, 0, 90).scale(5, 12, 5), 1285134668),
                    ...[5, 0, -5].map(t =>
                      o(c(5), L.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), 1285134668)
                    ),
                  ),
                )),
                L,
              )]),
            e =
              (m(a, L.translate(-53, 0, 55)),
                m(c(6), L.translate(-61.3, -2.4, 49).scale(3, 1, 5), 1285134694),
                m(c(7), L.translate(-57, -2.6, 46).scale(4, 1, 4), 1288490188),
                M(L.translate(-55, -1.1, 46).rotate(0, 90)),
                A(t => {
                  t.F = 0,
                    t.h = () =>
                      L.translate(-75, (1 - t1[5].i) * (1 - t1[6].g) * 3, 55).rotate(180 * (1 - t1[5].i) + w, 0),
                    m(a);
                }),
                m(c(u), L.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), 867349170),
                m(c(3, 0, -.5), L.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), 869059788),
                m(
                  f(h(
                    i(
                      o(c(u), L.translate(-100, -2.5, 55).scale(8, 1, 8), 869059788),
                      o(c(u), L.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), 869059788),
                      o(c(u), L.translate(-100, -2.6, 70).scale(3, 1.1, 7), 869059788),
                      o(c(u), L.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), 869059788),
                      o(c(6), L.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), 1285134745),
                      o(c(u), L.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), 869059788),
                      o(c(u), L.translate(-100, .42, 92).scale(3, 1.1, 4.1), 869059788),
                    ),
                    o(c(8), L.translate(-100, -1, 55).scale(7, .9, 7), 1716276300),
                    o(c(8), L.translate(-100, -2, 55).scale(4, .3, 4), 2137417318),
                    o(c(8), L.translate(-100, -3, 55).scale(.6, 1, .6), 2137417318),
                  )),
                  L,
                ),
                m(f(
                  h(
                    o(c(u), L.translate(-100, 1, 63).scale(7.5, 4), 1719631743),
                    o(c(u), L.translate(-100, 0, 70).scale(2, 2, 10), 1719631743),
                    o(c(20, 1), L.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), 1719631743),
                  ),
                )),
                A(t => (t.h = () => L.translate(-99.7, 5.3 * -t1[6].g - 2, 63.5), l)),
                u.map(({ x: a, z: e }) => {
                  m(c(6), L.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), -869914983),
                    [4, -.4].map(t => m(c(6), L.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), -869059738));
                }),
                E(7, t => {
                  m(
                    c((23 * t + 1) % 5 + 5, 0, .55),
                    L.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                      5 + t / 2,
                      1 + t / 6,
                      5 + t / 3,
                    ),
                    p(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                  );
                }),
                m(c(u), L.translate(-87, -9.5, 24).scale(7, 1, 3), 1721335654),
                m(c(4), L.translate(-86, -9.2, 27).scale(5, 1, 5), 1286773119),
                m(c(18, 1), L.translate(-86, -9, 31).scale(1.5, 1, 1.5), 426134604),
                M(L.translate(-86, -7.5, 31)),
                A(t => {
                  t.h = () => L.translate(0, 3.5 * (1 - q(t1[6].g, t1[7].g)) + N(t1[7].i, t1[6].i) * Math.sin(x) * 5),
                    [0, 12, 24].map(t =>
                      m(c(u), L.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), 865697587)
                    );
                }),
                A(t => {
                  t.h = () => {
                    let t = N(t1[7].i, t1[6].i);
                    return L.translate(0, t * Math.sin(x + 3) * 6, 6 * Math.sin(.6 * x + t) * t);
                  }, [6, 18].map(t => m(c(u), L.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), 863987225));
                }),
                m(
                  f(h(
                    i(
                      o(c(u), L.scale(11, 1, 13), 1285121612),
                      o(c(5), L.translate(0, 0, -7).scale(2, 1.2, 2), 1286759987),
                      o(c(5), L.scale(9, 1.2, 9), 2135700224),
                    ),
                    o(c(5), L.scale(5.4, 5, 5.4), 2135700224),
                  )),
                  L.translate(-38.9, -11.3, 17),
                ),
                M(L.translate(-38.9, -9.6, 10)),
                q1 = A(t => {
                  t.h = () => L.translate(0, -7.3 * t1[7].i),
                    m(
                      f(h(
                        i(
                          o(c(5), L.translate(0, 2).scale(5, 7, 5).skewY(8), 2139055667),
                          o(c(5), L.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), 2139052351),
                          o(c(5), L.translate(0, 9).scale(.6, 7, .6).skewY(8), 2139049049),
                        ),
                        o(c(5), L.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), 2139055667),
                      )),
                      L.translate(-38.9, -11.3, 17),
                    );
                }),
                u.map(({ x: t, z: a }) => {
                  n = L.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                    m(c(18, 1), n.scale(1, 4), -12632257),
                    [1.5, 8].map(t => m(c(18, 1), n.translate(0, t - 4).scale(1.5, .5, 1.5), 1285134745));
                }),
                m(
                  f(h(
                    i(
                      o(c(6), L.translate(0, 0, -36).scale(15, 1.2, 15), 1286779570),
                      o(c(u), L.translate(0, 0, -18).scale(4, 1.2, 6), 1285121650),
                    ),
                    ...E(6, a =>
                      E(6, t =>
                        o(
                          c(6),
                          L.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          1286779570,
                        ))).flat(),
                  )),
                  L.translate(-38.9, -11.3, 17),
                ),
                m(c(5), L.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), 1715411404),
                M(L.translate(-84, -.5, 85).rotate(0, 45)),
                A(t => {
                  t.h = () => Y1(-123, 1.4, 55 + -65 * h1), M(L.translate(0, -3, -4).rotate(0, 180)), m(K1);
                }),
                f(h(
                  o(c(u), L.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), 1280917311),
                  o(c(3), L.translate(0, 0, -5.5).scale(3, 2), 1281772697),
                  ...[-1.2, 1.2].map(t => o(c(u), L.translate(t, -.5, 1).scale(.14, .3, 6.5), 1275081650)),
                ))),
            s = (A(t => {
              t.h = () => {
                let t = Math.sin(1.1 * x);
                return L.translate.call(L, 0, -2, N(t1[10].g, t1[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
              }, E(2, t => m(e, L.translate(9 * t - 110 + (1 & t), 1.7, -12)));
            }),
              A(t => {
                t.h = () => {
                  let t = Math.sin(2.1 * x);
                  return L.translate.call(L, 0, -2, N(t1[10].g, t1[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
                }, E(2, t => m(e, L.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
              }),
              A(t => {
                t.h = () => {
                  let t = Math.sin(1.5 * x);
                  return L.translate.call(
                    L,
                    0,
                    -2,
                    -8.5 * q((1 - t1[10].g) * (1 - N(t1[10].g, t1[11].g)), N(t1[10].g, t1[11].g) * (t < 0 ? -t : t))
                      + 10,
                  );
                }, E(3, t => m(e, L.translate(9 * t - 106, 1.7, -12)));
              }),
              m(
                f(h(
                  i(
                    o(c(u), L.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    o(c(u), L.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...E(4, t => o(c(u), L.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...E(3, t => o(c(u), L.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                L.translate(-123, 0, -12),
                865697663,
              ),
              m(c(5), L.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), -10928321),
              m(c(u), L.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), 869059788),
              m(c(6), L.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), 867336089),
              M(L.translate(-116, -1.4, -18).rotate(0, 180)),
              E(3, t => {
                m(V1, L.translate(12 * t - 109, -9, -12), 1285134745),
                  m(V1, L.translate(-77, -9, -12 * t - 20).rotate(0, 90), 1285134745);
              }),
              m(f(
                h(
                  o(c(12), L.translate(-77, -13.9, -12).scale(4, 18.2, 4), 867349170),
                  o(c(u), L.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), 865697638),
                  o(c(u), L.translate(-77, 0, -14).scale(1.5, 2.2, 2), 865697638),
                  o(c(12), L.translate(-77, 2.8, -12).scale(3, 5, 3), 865697638),
                ),
              )),
              m(c(u), L.translate(-115.5, -17, -12).scale(.5, 15, 2.2), 1285134745),
              m(c(u), L.translate(-77, -17, -50.5).scale(2.2, 15, .5), 1285134745),
              m(c(u), L.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), 1285134745),
              m(f(
                h(
                  o(c(u), L.translate(-93, -5.8, -40).scale(9, 1, 5), 432852172),
                  o(c(9), L.translate(-98, -5.8, -40).scale(3, 8, 3), 867349170),
                ),
              )),
              m(c(9), L.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), 1283424127),
              M(L.translate(-98, -4.4, -40).rotate(0, 90)),
              m(f(
                h(
                  i(
                    o(c(6, 0, 0, .6), L.translate(-100, .7, 105.5).scale(8, 1, 11), 867349170),
                    o(c(u), L.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), 867349170),
                    o(c(u), L.translate(-91.2, .7, 107).scale(3, 1, 3.3), 867349170),
                  ),
                  o(c(5), L.translate(-100, .7, 113).scale(4, 3, 4), 867349170),
                ),
              )),
              E(4, a =>
                A(t => {
                  t.h = () => {
                    let t = N(t1[8].i, t1[12].i);
                    return L.translate(
                      (2 < a ? 2 * (1 - t) + t : 0) - 100,
                      t * Math.sin(1.3 * x + 1.7 * a) * (3 + a / 3) + .7,
                      115 + (1 & a ? -1 : 1) * (1 - t1[8].i) * (1 - t1[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * x + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    m(
                      c(6),
                      L.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      p(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              W1 = A(t => {
                t.h = () => {
                  let t = N(t1[8].i, t1[12].i);
                  return L.translate(2.5 * (1 - t) - 139.7, -3 * (1 - t1[8].g) + t * Math.sin(.8 * x) * -1 - 1.8, 93.5)
                    .rotateSelf(Math.cos(1.3 * x) * (3 * t + 3), 0);
                },
                  m(f(h(o(c(10), L.scale(6, 2, 6), 1283430681), o(c(10), L.scale(3.3, 6, 3.3), 2139068697)))),
                  n = L.translate(-7.5).rotate(0, 90),
                  m(c(15), n.scale(3, 2.3, 3), 1281779302),
                  m(c(10), n.scale(2, 2.5, 2), 1286786124),
                  m(c(5), n.scale(1, 3), 2139062143),
                  M(n.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(t =>
                    m(U1, L.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), 869072895)
                  );
              }),
              [-1, 1].map(a => {
                m(c(15, 1), L.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), 2134064537),
                  [7.2, 1.5].map(t =>
                    m(c(15, 1), L.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), 1714634111)
                  ),
                  m(U1, L.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), 13434879),
                  m(
                    f(h(
                      o(c(u), L.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), 1719631743),
                      o(c(u), L.scale(3, 3, 10), 2134064537),
                      o(c(30, 1), L.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), 2134064537),
                      o(c(5), L.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), 2134064537),
                      o(c(5), L.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), 2134064537),
                    )),
                    L.translate(a - 100, .7, 97),
                  );
              }),
              A(t => (t.h = () => L.translate(-100, .6 - 6 * t1[12].g, 96.5).scale(.88, 1.2), l)),
              [...o(c(28, 1), L.scale(8, 1, 8), 863138418), ...o(c(5), L.translate(0, 1).scale(1, .2), 860638284)]);
          N1 = A(t => {
            t.h = () => L.translate(-80, 1, 106).rotate(0, 40 + o1),
              m(f(
                h(
                  o(c(28, 1), L.scale(8, 1, 8), 863138418),
                  o(c(u), L.translate(0, 0, -5.5).scale(1.5, 3, 2.5), 863138418),
                ),
              )),
              m(c(8), L.translate(0, 2).scale(3, 1.5, 3), 431141554),
              m(c(5), L.translate(0, 2).scale(1, 2), 860638284);
          }),
            A(t => {
              t.h = () => L.translate(-64, 1, 106).rotate(0, z),
                m(f(
                  h(o(c(28, 1), L.translate(0, 2).scale(8, 1, 8), 1275068505), o(c(u), L.scale(9, 5, 2), 1275068492)),
                )),
                m(s),
                [-1, 1].map(t =>
                  m(U1, L.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), 13434879)
                );
            }),
            A(t => {
              t.h = () => L.translate(-48, 1, 106).rotate(0, 180 - z),
                m(f(
                  h(
                    o(c(30, 1), L.translate(0, 2).scale(8, 1, 8), 1275068505),
                    o(c(u), L.translate(7).scale(9, 5, 2), 1275068492),
                    o(c(u), L.translate(0, 0, 7).scale(2, 5, 9), 1275068492),
                  ),
                )),
                m(s);
            }),
            A(t => {
              t.h = () => L.translate(-48, 1, 90).rotate(0, 270 + z),
                m(f(
                  h(
                    o(c(30, 1), L.translate(0, 2).scale(8, 1, 8), 1275068505),
                    o(c(u), L.translate(7).scale(9, 5, 2), 1275068492),
                    o(c(u), L.translate(0, 0, -7).scale(2, 5, 9), 1275068492),
                  ),
                )),
                m(s);
            }),
            m(c(u), L.translate(-56, 1, 106).scale(.7, .8, 2.5), 867349170),
            m(c(u), L.translate(-48, 1, 98).scale(2.5, .8, .7), 867349170),
            m(c(u), L.translate(-39, .4, 90).scale(2, 1, 2), 1286779570),
            m(c(u), L.translate(-34.2, .4, 90).scale(3, 1, 3), 1286779570),
            M(L.translate(-34, 2.7, 96).rotate(-12, 0)),
            m(c(5), L.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), -1719697613),
            [863144985, 1283424051, 1720480332].map((a, e) =>
              A(t => {
                t.h = () =>
                  L.translate(
                    0,
                    (1 - t1[13].i) * (1 - t1[14].i) * 3 + N(t1[13].i, t1[14].i) * Math.sin(1.5 * x + 1.5 * e) * 4.7,
                  ),
                  m(
                    c(8),
                    L.translate(-23.5, e / 1.5 - .4, 90 + 6.8 * e).scale(3.6, 2 - e / 1.5, 3.6).rotate(0, 22.5),
                    a,
                  ),
                  2 === e && m(c(6), L.translate(-29, .4, 90).scale(2.4, 1, 2.8), 1285141145),
                  1 === e
                  && m(c(u), L.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), 1286773145);
              })
            ),
            m(f(
              h(
                o(c(6, 0, 0, .3), L.translate(0, -.92, 95).scale(14, 2, 14), 869059788),
                o(c(5), L.translate(0, 0, 95).scale3d(6), 2135706700),
              ),
            )),
            [8, -6.1].map((a, e) =>
              E(
                3,
                t =>
                  m(V1, L.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e), 1 & t ? 1283424127 : 2136562009),
              )
            ),
            [-1, 1].map(t => m(U1, L.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), 13434879)),
            M(L.translate(0, 1.7, 82).rotate(0, 180)),
            m(c(5), L.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), 1716276351),
            m(f(
              h(
                i(
                  o(c(u), L.translate(0, 16, 110.5).scale(12, 1, 3), 1716276351),
                  o(c(u), L.translate(0, 16, 111).scale(3, 1, 3.8), 1716276351),
                ),
                o(c(5), L.translate(0, 16, 103.5).scale(5.5, 5, 5.5), 1716276351),
              ),
            )),
            A(t => {
              t.h = () => {
                let t = Math.sin(x);
                return L.translate(-2 * t).rotate(0, 0, 25 * t);
              },
                m(c(3), L.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), 1716276351),
                [22, 30].map(t => {
                  m(c(6), L.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), 1722987186),
                    m(c(u), L.translate(0, 6.2, t + 95).scale(.5, 11, .5), 1716276351);
                });
            }),
            m(c(6), L.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), 1286773119),
            m(c(u), L.translate(0, 16, 129).scale(1.5, 1, 2), 1286773119),
            m(c(7), L.translate(0, 16.2, 133).scale(5, 1, 5), 1721335654),
            A(t => {
              t.h = () => {
                let t = N(N((t1[14].g + t1[14].i) / 2, t1[13].i), (t1[15].g + t1[15].i) / 2);
                return L.translate(0, 16 * t, 8.5 * W(2 * t - 1) + 95);
              },
                m(c(5), L.scale(5, 1.1, 5), 1716276351),
                m(c(5), L.scale(5.5, .9, 5.5), 1715420991),
                M(L.translate(0, 1.5, -1).rotate(0, 180));
            });
        }),
          r(L.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          r(
            L.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...b(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
          ),
          r(L.translate(0, 2.8, 45), [0, 0, 4.5]).j = L1,
          r(L.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          r(L.translate(-89, .2, 80), [0, 0, 6]),
          r(L.translate(-38.9, -.3, 17).rotate(0, 0, 10), ...b(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5])).j = q1,
          r(L.translate(-38.9, -8.4, -21), [0, 0, 12]),
          r(L.translate(-115, .2, -12), [0, 0, 3.5]),
          r(L.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          r(L.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]).j = W1,
          r(L.translate(0, 3), ...b(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5])).j = N1,
          r(L.translate(0, 3, 95), ...b(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
          r(L.translate(0, 19, 134), [0, 0, 3.5]);
      })(),
      R1 = A(() => {
        O1 = [-1, 1].map(t =>
          A(() => {
            m(c(10, 1), L.translate(.3 * t, -.8).scale(.2, .7, .24), 6704383);
          })
        ),
          [0, 180].map(t => m(U1, L.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), 13434879)),
          m(P(20), L.translate(0, 1).scale(.5, .5, .5), 6704383);
        let a = o(
          f(h(c(15, 1), o(c(u), L.translate(0, 0, 1).scale(2, 2, .5)))),
          L.rotate(-90, 0).scale(.1, .05, .1),
          5000268,
        );
        [-1, 1].map(t => m(a, L.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
          m(c(u), L.translate(0, .9, .45).scale(.15, .02, .06), 5000268),
          m(P(20), L.scale(.7, .8, .55), 6704383);
      });
  });
})();
