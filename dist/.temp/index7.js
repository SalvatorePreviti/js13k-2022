(() => {
  document.body.innerHTML +=
    "<canvas id=hC></canvas><h3>Souls:<b id=h3></b> / XIII</h3><h4 id=h4>loading</h4><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 SalvatorePreviti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><b id=b5>☰</b><style>body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none;-webkit-user-select:none}body>*{position:absolute}.l #b5,.l h3{display:block;padding:10px}.l h3{bottom:0;right:5%;text-align:right}.m main,h4{right:0;top:0}h4{left:0;text-align:center}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:800px;min-width:50%;padding:1em}p{font-size:.7em}h2{color:#f61;margin:0 0 .7em}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}.m h4,h3,main{display:none}";
  let a = 0,
    r1 = !0,
    H = 0,
    Q = 0,
    s1 = 0,
    B = 0,
    n1 = 0,
    O = 0,
    y = 0,
    x = 0,
    o1 = 0,
    c1 = 0,
    i1 = 0,
    h1 = 0,
    z = 0,
    w = .066,
    R = Math.PI / 180,
    X = new DOMMatrix(),
    L = (t, a) => a < t ? t : a,
    f1 = t => t < 0 ? -t : t,
    q = t => t < 0 ? 0 : 1 < t ? 1 : t,
    W = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
    u1 = t => Math.atan2(Math.sin(t *= R), Math.cos(t)) / R,
    m1 = (t, a, e) =>
      ((t *= R) + (2 * (a = (a * R - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / R,
    y1 = (t, a, e, l) => {
      let r = a - t;
      return (t += Math.sign(a - t) * L(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * q(l / 7);
    },
    N = (t, e) => Array.from(Array(t), (t, a) => e(a)),
    M1 = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
    v = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
    P = ({ x: t, y: a, z: e }) => Math.hypot(t - t1.x, a - t1.y, e - t1.z) || 0,
    n = t => {
      let a = 0, e = 0, l = 0, r, s = t.at(-1);
      for (r of t) {
        a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
      }
      return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
    },
    d = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
    b = (t, a, e) => (t.B = e, t.u = a, t),
    A = (t, l, a = t.u) =>
      b(
        t.map(t =>
          ((
            { x: t, y: a, z: e },
          ) => ({ x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }), { x: t, y: a, z: e }))(t)
        ),
        a,
        t.B,
      ),
    o = (t, a, e) => t.map(t => A(t, a, e)),
    I = (e, l = 0) =>
      N(e, t => {
        let a = Math.cos(2 * Math.PI * t / e);
        return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
      }),
    r = (l, r, s) =>
      l.map((t, a, { length: e }) => b([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.u, s)),
    c = (
      t,
      a,
      e = 0,
      l,
    ) => (l = t.length ? t : I(t, l),
      t = A(l, X.translate(0, 1).scale3d(0 < e ? e : 1)),
      e = A(l, X.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
      [...r(e, t, a), e, t]),
    j = (
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
          let t = b([], 0, 1);
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
        if ((o = v(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
          n = [], o = [], c = r.A, t = r.v;
          let a = c.at(-1), e = v(l, a) - l.w;
          for (let t of c) {
            s = v(l, t) - l.w,
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
            s: 2 < n.length && { A: b(n, c.u, c.B), v: t, m: r },
            o: 2 < o.length && { A: b(o, c.u, c.B), v: t, m: r },
          };
        }
      }
      return { s, o: n };
    },
    Y = (e, l, r = n(l.A)) => {
      if (e) {
        let { s: t, o: a } = S(e, l);
        t || a || e.C.push(l), t && (e.s = Y(e.s, t, r)), a && (e.o = Y(e.o, a, r));
      } else e = { x: r.x, y: r.y, z: r.z, w: r.w, C: [l], s: 0, o: 0 };
      return e;
    },
    e = (a, r, s) => {
      let n = [],
        o = (t, a) => {
          let { s: e, o: l } = S(t, a);
          e || l || (0 < s * v(t, r) ? e = a : l = a), e && (t.s ? o(t.s, e) : n.push(e)), l && t.o && o(t.o, l);
        };
      for (let t of r.C) o(a, t);
      return n;
    },
    k = (t, a) => t && (a(t), k(t.s, a), k(t.o, a)),
    F = t => t.length ? t.reduce((t, a) => Y(t, { A: a, v: 0, m: 0 }), 0) : t,
    l = t => (k(t, a => {
      let t = a.o;
      a.o = a.s, a.s = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
      for (let t of a.C) t.v = !t.v;
    }),
      t),
    i = (...t) =>
      t.reduce((l, a) => {
        let r = [];
        if (l = F(l), a) {
          a = F(a), k(l, t => t.C = e(a, t, 1)), k(a, t => r.push([t, e(l, t, -1)]));
          for (let [a, e] of r) for (let t of e) Y(l, t, a);
        }
        return l;
      }),
    h = (t, ...a) => l(i(l(F(t)), ...a)),
    f = t => {
      let e = new Map(),
        l = new Map(),
        r = a => {
          if (a.m) {
            let t = e.get(a.m);
            t ? (l.delete(t), a = r(a.m)) : e.set(a.m, a);
          }
          return a;
        };
      return k(t, a => {
        for (let t of a.C) l.set(r(t), t.v);
      }),
        Array.from(l, ([{ A: t }, a]) => {
          let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
          return b(a ? e.reverse() : e, t.u, t.B);
        });
    },
    u = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
    x1 = [],
    g1 = [],
    p1 = [],
    E = [],
    z1 = [],
    T = [[]],
    C = new Map(),
    s = new Int32Array(7),
    D = t => {
      let { x: a, y: e, z: l } = Q1[t], r = (U1[0] = a, U1[1] = e, U1[2] = l, C.get(t = "" + (Q1.B ? E1 : s)));
      return void 0 !== r
        ? (a = 3 * r, E[a] = (E[a++] + s[4]) / 2, E[a] = (E[a++] + s[5]) / 2, E[a] = (E[a] + s[6]) / 2)
        : (C.set(t, r = C.size), p1.push(a, e, l), E.push(s[4], s[5], s[6]), z1.push(s[3])),
        r;
    },
    m = (t, a = X, e) => T.at(-1).push(...o(t, a, e)),
    v1 = () => {
      let t = T.at(-1);
      for (Q1 of t) {
        let { x: t, y: a, z: e } = n(Q1);
        s[3] = 0 | Q1.u, s[4] = 32767 * t, s[5] = 32767 * a, s[6] = 32767 * e;
        for (let t = 2, a = D(0), e = D(1); Q1.length > t; ++t) g1.push(a, e, e = D(t));
      }
      return t.length = 0, { I: t = a, H: (a = g1.length) - t };
    },
    M = t => {
      let a = H1, e = { j: X, G: x1.length + 1, F: 1, m: a === x1[0] ? void 0 : a };
      return H1 = e, x1.push(e), T.push([]), t = t(e) || v1(), e.D = t, T.pop(), H1 = a, e;
    },
    U = -11,
    K = 17,
    V = -90,
    J = 0,
    G = 0,
    d1 = t => Math.sin(t * Math.PI * 2),
    _ = [],
    w1 = () => {
      a1 || !r1 ? V1.disconnect() : V1.connect(K1.destination), b4.innerHTML = "Music: " + r1;
    },
    A1 = (t = !1) => {
      if (a1 !== t) {
        a1 = t, e1 = 0;
        try {
          t ? document.exitPointerLock() : V1.start();
        } catch {}
        document.body.className = t ? "l m" : "l", w1();
      }
    },
    Z = (t, a, e) => t + (a - t) * q(1 - Math.exp(-e * w)),
    t = ({ l: t }) => t,
    $ = [],
    I1 = [],
    P1 = () => {
      n1 = I1.reduce((t, a) => t + a.l, 0),
        h3.innerHTML = " "
          + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][n1];
    },
    j1 = () => {
      P1(), localStorage.DanteSP22 = JSON.stringify([$.map(t), I1.map(t), y, B, z]);
    },
    t1 = { x: 0, y: 0, z: 0 },
    S1 = (t, a, e) =>
      X.translate(t + Math.sin(B + 2) / 5, a + Math.sin(.8 * B) / 3, e).rotateSelf(
        2 * Math.sin(B),
        Math.sin(.7 * B),
        Math.sin(.9 * B),
      ),
    g = o => {
      m(c(5), o.translate(-.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
        m(c(5), o.translate(.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
        m(c(u), o.translate(0, -.4).scale(.5, .1, .5), 6717311),
        M(r => {
          let s = { l: 0, g: 0, i: 0, m: r.m }, n = $.push(s) - 1;
          r.h = () => {
            let t = s.l, a = s.g, e = s.i, l = (s.j = o.multiply(r.j)).transformPoint();
            return P(l) < 2.9 && _[5] && (a < .3 || .7 < a)
              && (s.l = t ? 0 : 1, n && !i1 && (h4.innerHTML = "* click *", O = B + 1), y = n, j1()),
              s.g = Z(a, t, 4),
              s.i = Z(e, t, 1),
              r.D = J1[.5 < a ? 1 : 0],
              o.rotate(60 * s.g - 30, 0).translateSelf(0, 1);
          };
        });
    },
    p = (o, ...t) => {
      let c = -1,
        i = 0,
        h = 0,
        f = 0,
        u = 0,
        m = 0,
        M = 3,
        g = 1,
        p = H1,
        y = I1.length,
        x = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
        v = x[0],
        { x: d, z: b } = v,
        z = d,
        A = b,
        I = {
          l: 0,
          j: X,
          h() {
            if (!I.l) {
              a = 1, l = 1 / 0;
              for (e of x) {
                var e, t, a, l, r = e.w, s = Math.hypot(d - e.x, b - e.z), n = s - r;
                t ||= s < r, 0 < n && n < l && (l = n, v = e), a = a < (r = s / r) ? a : r;
              }
              if (!t) {
                r = v.w;
                let t = Math.hypot(s = d - (l = v.x), n = b - (e = v.z)), a = Math.atan2(-n, s);
                g && (h = (Math.random() - .5) * Math.PI / 2, M = L(1, M / (1 + Math.random()))),
                  a += h,
                  c = -Math.cos(a),
                  i = Math.sin(a),
                  .1 < t && (t = (r > t ? t : r) / (t || 1), d = s * t + l, b = n * t + e);
              }
              g = t,
                M = Z(M, 3 + 6 * (1 - a), 3 + a),
                z = Z(z, d = Z(d, d + c, M), M),
                A = Z(A, b = Z(b, b + i, M), M),
                f = m1(f, Math.atan2(z - u, A - m) / R - 180, 3 * w),
                u = z,
                m = A,
                a = (I.j = o.multiply(
                  p.j.translate(z, 0, A).rotateSelf(0, f).skewXSelf(7 * Math.sin(2 * B)).skewYSelf(
                    7 * Math.sin(1.4 * B),
                  ),
                )).transformPoint(),
                P(a) < 1.5
                && (I.l = 1,
                  a = [
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
                  t = n1 && n1 < 12 ? 5 : 7,
                  i1 || (h4.innerHTML = a, O = B + t),
                  j1());
            }
            I.l
              && (a = y % 4 - 2,
                I.j = X1.j.translate(
                  y % 4 * 1.2 - 1.7 + Math.sin(B + y) / 6,
                  -2,
                  1.7 * (y / 4 | 0) - 5.5 + (a < 0 ? -a : a) + Math.cos(B / 1.5 + y) / 6,
                ));
          },
        };
      I1.push(I);
    },
    Y1 = () => {
      for (let a of x1) {
        let t = a.h;
        a.j = a.m ? a.m.j : X, (t = t && t(a)) && (a.j = a.j.multiply(t));
      }
      for (let t of I1) t.h();
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
      return t = N(
        8,
        t => (t = M.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
          r -= t.x = (m * t.x | 0) / m / t.w,
          s -= t.y = (m * t.y | 0) / m / t.w,
          n -= t.z = (m * t.z | 0) / m / t.w,
          t),
      ),
        a = X.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
        A(t, a).map(({ x: t, y: a, z: e }) => {
          o = t > o ? o : t,
            c = c > t ? c : t,
            i = a > i ? i : a,
            h = h > a ? h : a,
            f = e > f ? f : e,
            u = u > e ? u : e;
        }),
        f *= f < 0 ? l : 1 / l,
        u *= 0 < u ? l : 1 / l,
        X.scale(2 / (c - o), 2 / (h - i), 2 / (f - u)).translateSelf((c + o) / -2, (h + i) / -2, (f + u) / 2)
          .multiplySelf(a).toFloat32Array();
    },
    F1 = (t, a = 35633) => (a = l1.c6x(a), l1.s3c(a, t), l1.c6a(a), a),
    T1 = (t, a) => {
      let e = {}, l = l1.c1h();
      return l1.abz(l, t), l1.abz(l, F1(a, 35632)), l1.l8l(l), t => t ? e[t] || (e[t] = l1.gan(l, t)) : l1.u7y(l);
    },
    C1 = (l, r, s) => {
      let n = t => l1.d97(4, t.H, 5123, 2 * t.I);
      if (a1) l1.uae(l, !1, X.rotate(0, 40 * Math.sin(s1) - 70).toFloat32Array()), n(R1.D), O1.map(t => t.D).map(n);
      else {
        for (let e of x1) {
          let t = e.G, a = e.D;
          (r || e !== R1 && e !== O1[0] && e !== O1[1]) && a
            && (s && l1.ube(s, t / 255), l1.uae(l, !1, e.j.toFloat32Array()), n(a));
        }
        for (let t of I1) l1.uae(l, !1, t.j.toFloat32Array()), n(G1);
      }
    },
    D1 = new Int32Array(10725888),
    H1,
    Q1,
    a1,
    e1,
    B1,
    O1,
    R1,
    X1,
    L1 = "data:image/svg+xml;base64,"
      + btoa(
        "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
      ),
    q1 = (() => {
      let a = N(
          11,
          t => X.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
        ),
        e = I(18);
      return N(10, t => r(A(e, a[t]).reverse(), A(e, a[t + 1]), 1)).flat();
    })(),
    W1 = f(
      h(
        o(c(20, 1, 1.15, 1), X.translate(0, -3).scale(3.5, 1, 3.5), -1304467790),
        o(c(20, 1, 1.3, 1), X.translate(0, -2.5).scale(2.6, 1, 3), 859793074),
        o(c(u), X.translate(4, -1.2).scale3d(2), 1279223474),
      ),
    ),
    N1 = f(
      h(
        o(c(u), X.translate(0, -8).scale(6, 15, 2.2)),
        o(c(u), X.translate(0, -14.1).scale(4, 13, 4)),
        o(c(20, 1), X.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
      ),
    ),
    E1 = new Int32Array(s.buffer, 0, 4),
    U1 = new Float32Array(s.buffer),
    K1 = new AudioContext(),
    V1 = K1.createBufferSource(),
    J1 = (m([u.slice(1)], X.translate(-2).scale3d(3).rotate(90, 0)),
      v1(),
      [3375103, 3407794].map(
        t => (m(c(6, 1), X.scale(.13, 1.4, .13), 8342604),
          m(c(8), X.translate(0, 1).scale(.21, .3, .21), t),
          m(c(3), X.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), 3355443),
          v1()),
      )),
    G1 = (m(
      j(40, 30, (t, a, e) => {
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
      X.scale3d(.7),
      16777215,
    ),
      [-1, 1].map(t => m(j(15), X.translate(.16 * t, .4, -.36).scale3d(.09))),
      v1()),
    l1 = hC.getContext("webgl2");
  for (let t in l1) l1[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = l1[t];
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
              let { m: t, j: a } = $[y], { x: e, y: l, z: r } = a.transformPoint({ x: 0, y: 8, z: -3 });
              t1.x = v.x = e,
                t1.y = v.y = k = l,
                t1.z = v.z = r,
                I =
                  Y =
                  S =
                  P =
                  j =
                    0,
                u = 1,
                h = f = t?.G || 1;
            },
            l = t => {
              requestAnimationFrame(l);
              let a = (t - (B1 || t)) / 1e3;
              w = a1 ? _[5] = 0 : .066 < a ? .066 : a,
                B += w,
                s1 += a,
                B1 = t,
                0 < w && (l1.b6o(36160, T),
                  l1.r9r(0, 0, 128, 128, 6408, 5121, b),
                  l1.iay(36160, [36064]),
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
                          I = o,
                          P = Z(P, o ? 6.5 : 8, 4),
                          v.y += a / 41 - (o ? 1 : P) * e / 41 * P * w;
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
                                && (n = L(n, L(e * r, e * b[a] / 127.5)), o = L(o, L(l * r, l * b[1 + t] / 255))),
                                (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < e ? e : l) / 3)
                                && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                            }
                            c = i - c,
                              n = o - n,
                              (c < 0 ? -c : c) > (a < 0 ? -a : a) && (a = c),
                              (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                          }
                        })(),
                        (_[0] ? 1 : 0) + (_[2] ? -1 : 0) + H),
                      l = (_[1] ? 1 : 0) + (_[3] ? -1 : 0) + Q,
                      r = navigator.getGamepads()[0];
                    if (r) {
                      var n, s = t => a[t]?.pressed || 0 < a[t]?.value;
                      let a = r.buttons;
                      r = r.axes,
                        n = s(1) || s(3) || s(2) || s(0),
                        n !== p && (p = n) && (_[5] = 1),
                        t += (.2 < f1(-r[0]) ? -r[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                        l += (.2 < f1(-r[1]) ? -r[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                        e1 && (.3 < f1(r[2]) && (G += 80 * r[2] * w), .3 < f1(r[3]) && (J += 80 * r[3] * w));
                    }
                    (l < 0 ? -l : l) < .05 && (l = 0),
                      (t < 0 ? -t : t) < .05 && (t = 0),
                      s = Math.atan2(l, t),
                      r = q(Math.hypot(l, t)),
                      t = r * Math.cos(s),
                      l = r * Math.sin(s);
                    let o = q(1 - 5 * L(a < 0 ? -a : a, e < 0 ? -e : e)),
                      c =
                        (f || (a += S * o * w, e += Y * o * w),
                          S = Z(S, 0, I ? 8 : 4),
                          Y = Z(Y, 0, I ? 8 : 4),
                          j = Z(j, I ? (t || l ? I ? 7 : 4 : 0) * o : 0, I ? .1 < o ? 10 : t || l ? 5 : 7 : 1),
                          o = Math.sin(n = e1 ? G * R : Math.PI) * j * w,
                          Math.cos(n) * j * w);
                    if (
                      a -= t * c - l * o,
                        e -= t * o + l * c,
                        (o = (n = f && x1[f - 1].F && x1[f - 1].j || X).inverse()).m41 = 0,
                        o.m42 = 0,
                        o.m43 = 0,
                        { x: a, z: e } = o.transformPoint({ x: a, z: e, w: 0 }),
                        v.x += a,
                        v.z += e,
                        f !== A
                    ) {
                      A = f;
                      let { x: t, y: a, z: e } = n.inverse().transformPoint(t1);
                      v.x = t, v.y = a, v.z = e;
                    }
                    o = t1.x, c = t1.z;
                    let { x: y, y: x, z: i } = n.transformPoint(v);
                    t1.x = y,
                      t1.y = x,
                      t1.z = i,
                      n = f1(k - x),
                      k = Z(k, x + .1, 50 * n + 5),
                      f && (S = (t1.x - o) / w, Y = (t1.z - c) / w),
                      (t || l) && (m = 90 - s / R),
                      M = m1(M, m, 8 * w),
                      g += (r - g) * q(10 * w);
                  })(),
                  Y1()),
                0 < w && (r = y1(r, t1.x, .5, w),
                  s = y1(s, t1.y, 2, w),
                  n = y1(n, t1.z, .5, w),
                  e1
                    ? (U = Z(U, t1.x, 18 + (t = 200 * u)),
                      K = Z(K, t1.y + 1.5, 15 + t),
                      V = Z(V, t1.z, 18 + t),
                      J = L(J < 87 ? J : 87, -87))
                    : (U = y1(U, r, 1, 2 * w),
                      K = y1(K, s + 13 + 15 * u, 4, 2 * w),
                      1 < ((t = (V = y1(V, n + -18, 1, 2 * w)) - n) < 0 ? -t : t)
                      && (a = U - r, G = 270 + Math.atan2(t, a) / R, J = 90 - Math.atan2(Math.hypot(t, a), K - s) / R)),
                  G = u1(G),
                  0 < w
                  && (t = W($[12].g, $[13].g),
                    B > O && (h4.innerHTML = "", O = 0),
                    a = Z(c1, 0, 1),
                    c1 = a + (u1(c1 + 60 * w) - a) * q($[5].g - $[6].i),
                    a = Z(x, 0, 5),
                    x = a + (u1(x + 56 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                    a = Z(o1, 0, 4),
                    o1 = a + (u1(o1 + 48 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                    z = Z(z, $[9].i, .2 + .3 * ((t = 2 * $[9].i - 1) < 0 ? -t : t)),
                    h1 = Z(h1, i1 ? h1 + (-9 - h1) * q(1.5 * w) : q(B / 3), 1),
                    1 === $[0].l && .8 < $[0].g && (n1 < 13
                      ? ($[0].l = 0, i1 || (h4.innerHTML = "Not leaving now, there are souls to catch!", O = B + 3))
                      : i1
                        || (i1
                          || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", O = B + 1 / 0),
                          i1 = 1)),
                    _[5] = 0,
                    (t1.x < -25 || t1.z < 109 ? -25 : -9) > t1.y && e())),
                t = a1
                  ? X.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + q(hC.clientWidth / 1e3))
                  : X.rotate(-J, -G, -0).invertSelf().translateSelf(-U, -K, -V),
                0 < w
                && (i(),
                  l1.b6o(36160, T),
                  l1.v5y(0, 0, 128, 128),
                  l1.cbf(!0, !1, !0, !1),
                  l1.c4s(16640),
                  l1.uae(
                    i("b"),
                    !1,
                    X.rotate(0, 180).invertSelf().translateSelf(-t1.x, -t1.y, .3 - t1.z).toFloat32Array(),
                  ),
                  C1(i("c"), 0, i("j")),
                  l1.cbf(!1, !0, !1, !1),
                  l1.c4s(16640),
                  l1.cbf(!1, !0, !0, !1),
                  l1.uae(i("b"), !1, X.translate(-t1.x, -t1.y, -t1.z - .3).toFloat32Array()),
                  C1(i("c"), 0, i("j")),
                  l1.cbf(!0, !0, !0, !0),
                  1 === f && ($[9].l = t1.x < -15 && t1.z < 0 ? 1 : 0)),
                o(),
                l1.v5y(0, 0, 2048, 2048),
                C[0](k1(t, .3, 55, 10)),
                C[1](k1(t, 55, 177, 11)),
                l1.b6o(36160, null),
                F(),
                l1.v5y(0, 0, l1.drawingBufferWidth, l1.drawingBufferHeight),
                l1.c4s(16640),
                l1.uae(F("a"), !1, M1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
                l1.uae(F("b"), !1, t.toFloat32Array()),
                l1.ubu(F("k"), U, K, V),
                C[0](),
                C[1](),
                C1(F("c"), !e1),
                c(),
                l1.ubu(c("j"), l1.drawingBufferWidth, l1.drawingBufferHeight, s1),
                a1 ? l1.ubu(c("k"), 0, 0, 0) : l1.ubu(c("k"), U, K, V),
                l1.uae(c("b"), !1, t.inverse().toFloat32Array()),
                l1.d97(4, 3, 5123, 0);
            },
            b = new Uint8Array(65536),
            A,
            I,
            P,
            j,
            S,
            Y,
            k,
            r,
            s,
            n,
            t = F1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}`),
            o = T1(
              F1(`#version 300 es
in vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}`),
              `#version 300 es
void main(){}`,
            ),
            c = T1(
              F1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
              `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
            ),
            i = T1(
              t,
              `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}`,
            ),
            F = T1(
              t,
              `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
            ),
            T =
              (c(),
                l1.ubh(c("q"), 3),
                i(),
                l1.uae(i("a"), !1, M1(1.4, .59, 1e-4, 1)),
                F(),
                l1.ubh(F("q"), 3),
                l1.c5w()),
            a = (t = l1.c3z(), l1.c25()),
            C = N(2, t => {
              let a, e = l1.c25(), l = l1.c5w(), r = F(t ? "j" : "i");
              return F(),
                l1.ubh(F(t ? "h" : "g"), t),
                l1.b6o(36160, l),
                l1.d45([0]),
                l1.r9l(0),
                l1.a4v(33984 + t),
                l1.b9j(3553, e),
                l1.fas(36160, 36096, 3553, e, 0),
                l1.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                l1.t2z(3553, 10241, 9729),
                l1.t2z(3553, 10240, 9729),
                l1.t2z(3553, 34893, 515),
                l1.t2z(3553, 34892, 34894),
                l1.t2z(3553, 10243, 33071),
                l1.t2z(3553, 10242, 33071),
                t => {
                  t
                    ? (a = t,
                      l1.b6o(36160, l),
                      l1.iay(36160, [36096]),
                      l1.c4s(256),
                      l1.uae(o("b"), !1, a),
                      C1(o("c"), !e1))
                    : l1.uae(r, !1, a);
                };
            });
          l1.b11(34963, l1.c1b()),
            l1.b2v(34963, new Uint16Array(g1), 35044),
            l1.b11(34962, l1.c1b()),
            l1.b2v(34962, new Float32Array(p1), 35044),
            l1.v7s(0, 3, 5126, !1, 0, 0),
            l1.b11(34962, l1.c1b()),
            l1.b2v(34962, new Int16Array(E), 35044),
            l1.v7s(1, 3, 5122, !0, 0, 0),
            l1.b11(34962, l1.c1b()),
            l1.b2v(34962, new Uint32Array(z1), 35044),
            l1.v7s(2, 4, 5121, !0, 0, 0),
            l1.e3x(0),
            l1.e3x(1),
            l1.e3x(2),
            l1.e8z(2929),
            l1.e8z(2884),
            l1.c70(1),
            l1.c7a(1029),
            l1.d4n(515),
            l1.c5t(0, 0, 0, 1),
            l1.b6o(36160, T),
            l1.bb1(36161, t),
            l1.r4v(36161, 33189, 128, 128),
            l1.f8w(36160, 36096, 36161, t),
            l1.a4v(33987),
            l1.b9j(3553, a),
            l1.fas(36160, 36064, 3553, a, 0),
            l1.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
            l1.b9j(3553, l1.c25()),
            l1.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, D),
            l1.gbn(3553),
            l1.t2z(3553, 10241, 9987),
            l1.t2z(3553, 10240, 9729),
            R1.h = () => X.translate(t1.x, k, t1.z).rotateSelf(0, M),
            O1.map((t, a) => {
              t.h = () =>
                X.translate(0, g * q(.45 * Math.sin(9.1 * B + Math.PI * a - Math.PI / 2))).rotateSelf(
                  g * Math.sin(9.1 * B + Math.PI * a) * .25 / R,
                  0,
                );
            });
          try {
            let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
            $.map((t, a) => t.g = t.i = t.l = a ? 0 | e[a] : 0), I1.map((t, a) => t.l = 0 | l[a]), y = t, B = a, z = r;
          } catch {}
          h1 = y < 0 ? 0 : 1 < y ? 1 : y,
            h4.innerHTML = "",
            O = 0,
            P1(),
            Y1(),
            (() => {
              let r = 0,
                s = 0,
                t = 0,
                a = () => {
                  hC.width = innerWidth,
                    hC.height = innerHeight,
                    _.length = H = Q = 0,
                    n = o = void 0,
                    document.hidden && A1(!0);
                },
                n,
                o,
                c;
              b1.onclick = () => A1(),
                b2.onclick = () => {
                  A1(), e1 = 1;
                },
                b3.onclick = () => {
                  confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
                },
                b4.onclick = () => {
                  r1 = !r1, w1();
                },
                b5.onclick = () => A1(!0),
                onclick = () => {
                  c = 1, a1 || (_[5] = !0, e1 && hC.requestPointerLock());
                },
                document.onvisibilitychange = onresize = onblur = a,
                onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                  l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && a1)
                    ? a1 && !c || A1(!a1)
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
                    ? a && (_[t] = 1)
                    : _[t] = a);
                },
                onmousemove = ({ movementX: t, movementY: a }) => {
                  e1 && (t || a) && (G += .1 * t, J += .1 * a);
                },
                hC.ontouchstart = a => {
                  if (!a1) {
                    for (let t of a.changedTouches) {
                      e1 && t.pageX > hC.clientWidth / 2
                        ? n || (n = t, r = G, s = J)
                        : o = o || t;
                    }
                    t = s1;
                  }
                },
                hC.ontouchmove = ({ changedTouches: l }) => {
                  if (!a1) {
                    for (
                      let { pageX: t, pageY: a, identifier: e } of l
                    ) {
                      n?.identifier === e && (G = r + (t - n.pageX) / 3, J = s + (a - n.pageY) / 3),
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
                  a.preventDefault(), a = s1 - t, (!t || .02 < a && a < .4) && (_[5] = !0);
                },
                oncontextmenu = () => !1,
                a(),
                A1(!0);
            })(),
            e(),
            U = r = t1.x,
            K = (s = t1.y) + 13,
            V = (n = t1.z) + -18,
            requestAnimationFrame(l);
        }
      },
      l = () => {
        if (a < 5) {
          var R, X, B = 0, O = a++;
          let [v, d, b, A, I, P, j, S, Y, k, y, x, F, T, C, D, z, w, t, H, Q] =
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
                          : d1,
                        i = O < 2
                          ? O < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : d1,
                        h = new Int32Array(S + Y + k);
                      for (let a = 0, e = 0; S + Y + k > a; ++a, ++e) {
                        let t = 1;
                        S > a ? t = a / S : S + Y > a || (t = (1 - (t = (a - S - Y) / k)) * 3 ** (-y / 16 * t)),
                          e < 0
                          || (e -= 4 * p,
                            n = .00396 * 2 ** ((o + d - 256) / 12),
                            s = .00396 * 2 ** ((o + I - 256) / 12) * (1 + (O ? 0 : 8e-4 * 9))),
                          h[a] = 80
                              * (c(l += n * t ** (b / 32)) * v + i(r += s * t ** (P / 32)) * A
                                + (j ? (2 * Math.random() - 1) * j : 0))
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
                    && (o = .00308 * F,
                      1 != O && 4 != O || (o *= Math.sin(m * R * Math.PI * 2) * H / 512 + .5),
                      o = 1.5 * Math.sin(o),
                      r += o * s,
                      c = (1 - T / 255) * (t - s) - r,
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
          for (B = K1.createBuffer(2, 5362944, 44100), O = 0; O < 2; O++) {
            for (let t = O, a = B.getChannelData(O); t < 10725888; t += 2) {
              a[t >> 1] = D1[t] / 65536;
            }
          }
          V1.buffer = B, V1.loop = !0;
        }
        e();
      },
      D = new Image();
    D.onload = D.onerror = () => {
      e();
    },
      D.src = L1,
      setTimeout(l, 50),
      (() => {
        let n;
        M(() => {
          let r = () => {
              let t = $[2].i, a = 1 - $[4].i;
              return t < a ? t : a;
            },
            t = (a, e, l) =>
              M(t => {
                t.h = () => X.translate(r() * Math.sin(3 * a + B * a) * e),
                  u.map(({ x: t, z: a }) => {
                    m(c(11, 1), X.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), -1716368257),
                      m(c(u), X.translate(4 * t, 7, l + 4 * a).scale(1, .3), 1283424127);
                  }),
                  m(f(h(
                    o(c(u), X.translate(0, 0, l).scale(5, 1, 5), 1288490188),
                    ...[-1, 1].map(t =>
                      o(c(u), X.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), 1288490188)
                    ),
                  ))),
                  m(c(u), X.translate(0, -3, l).scale(8, 2, 8), 1281779302);
              }),
            l = (X1 = M(t => {
              t.h = () => S1(-12, 4.2, 40 * h1 - 66), g(X.translate(0, -3, 4)), m(W1);
            }),
              N(7, t => m(c(6, 1), X.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), 6310988)),
              v1()),
            a = (p(X.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              p(
                X.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...I(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              m(c(u), X.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), 869059788),
              u.map(({ x: t, z: a }) => m(c(6), X.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), 1716276377)),
              [-23, 22].map(t => m(c(u), X.translate(0, 0, t).scale(3, 1, 8), 870704613)),
              [-15, 15].map((a, e) => {
                m(c(u), X.translate(0, 6.3, a).scale(4, .3, 1), 1716276300),
                  m(c(u), X.translate(0, 1, a).scale(3, .2, .35), 1283424127),
                  M(t => (t.h = () => X.translate(0, 4.7 * -$[e + 1].g, a), l));
              }),
              N(5, a =>
                N(2, t =>
                  m(
                    q1,
                    X.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    869072895,
                  ))),
              m(c(u), X.translate(3, 1.5, -20).scale(.5, 2, 5), 867349170),
              m(c(u), X.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), 868204479),
              m(c(5), X.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), 1716276377),
              g(X.translate(-5.4, 1.5, -19).rotate(0, -90)),
              m(c(u), X.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), 2134062028),
              m(f(
                h(
                  i(
                    o(c(6, 0, 0, .3), X.translate(8, -3, -4).scale(13, 1, 13), 867349170),
                    o(c(6), X.translate(0, -8).scale(9, 8, 8), 2139042662),
                    o(c(6, 0, 0, .3), X.translate(0, -.92).scale(13, 2, 13), 869059788),
                  ),
                  o(c(5), X.scale(5, 30, 5), 2140746598),
                  o(c(5, 0, 1.5), X.translate(0, 1).scale(4.5, .3, 4.5), 870678450),
                  o(c(u), X.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), 2139062143),
                  o(c(6), X.translate(15, -1.5, 4).scale(3.5, 1, 3.5), 2139062143),
                ),
              )),
              M(t => {
                t.h = () =>
                  X.translate(
                    0,
                    .01 < $[3].g ? (5 * Math.cos(1.5 * B) + 2) * $[3].i * (1 - $[2].g) + -15 * (1 - $[3].g) : -500,
                    0,
                  ),
                  g(X.translate(0, 1.2)),
                  m(c(5), X.translate(0, -.2).scale(5, 1, 5), 1286776217);
              }),
              g(X.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              M(t => {
                t.h = () => X.translate(r() * Math.sin(B / 1.5 + 2) * 12),
                  m(
                    f(h(
                      i(
                        o(c(u), X.scale(1.5, 1, 5), 870704613),
                        o(c(6), X.scale(4, 1, 5), 870704613),
                        o(c(u), X.translate(0, -2).scale(2, 3.2, 1.9), 2139081804),
                        o(c(16, 1, 0, 4), X.scale(1, 1, 1.5).rotate(0, 90), 870704613),
                      ),
                      o(c(u), X.scale(1.3, 10, 1.3), -1721322957),
                    )),
                    X.translate(0, 0, 45),
                  ),
                  p(X.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              M(t => {
                t.h = () => X.translate(9.8 * (1 - r())),
                  m(c(3), X.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), 865704268),
                  m(c(8), X.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), 869059788),
                  m(c(u), X.translate(-23, -3, 55).scale(5.2, 1.7, 3), 1283424127),
                  m(c(u), X.translate(-23, -2.2, 62).scale(3, 1, 4), 1283424127),
                  g(X.translate(-23, -.5, 66.5));
              }),
              m(c(u), X.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), 870704613),
              M(t => {
                t.h = () => X.translate(0, q(1 - 5 * r()) * W($[4].g, $[5].g) * Math.sin(1.35 * B) * 4),
                  m(c(u), X.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), 867349170),
                  m(
                    f(h(o(c(u), X.scale(3, 1.4, 2.7)), o(c(u), X.scale(1.2, 8, 1.2)))),
                    X.translate(-33, -3, 55),
                    867349170,
                  );
              }),
              M(t => {
                t.h = () => X.translate(0, 0, q(1 - 5 * r()) * W($[4].g, $[5].g) * Math.sin(.9 * B) * 8),
                  m(f(
                    h(
                      o(c(u), X.translate(-27, -3, 55).scale(3, 1.4, 2.7), 870704613),
                      o(c(u), X.translate(-27, -3, 55).scale(1, 3), 870704613),
                    ),
                  )),
                  m(c(u), X.translate(-39, -3, 55).scale(3, 1.4, 2.7), 870704613);
              }),
              M(t => {
                t.h = () => X.translate(0, -6.5 * $[4].i),
                  m(c(6), X.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), 1722987186);
              }),
              [...o(
                f(i(
                  o(c(u), X.translate(0, -3).scale(11, 1.4, 3), 870704613),
                  h(
                    o(c(6), X.rotate(0, 0, 90).scale(6, 8, 6), 1285134668),
                    o(c(4, 0, .01), X.translate(0, 6).scale(12, 2, .75).rotate(0, 45), 1285134668),
                    o(c(6), X.rotate(0, 0, 90).scale(5, 12, 5), 1285134668),
                    ...[5, 0, -5].map(t =>
                      o(c(5), X.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), 1285134668)
                    ),
                  ),
                )),
                X,
              )]),
            e =
              (m(a, X.translate(-53, 0, 55)),
                m(c(6), X.translate(-61.3, -2.4, 49).scale(3, 1, 5), 1285134694),
                m(c(7), X.translate(-57, -2.6, 46).scale(4, 1, 4), 1288490188),
                g(X.translate(-55, -1.1, 46).rotate(0, 90)),
                M(t => {
                  t.F = 0,
                    t.h = () =>
                      X.translate(-75, (1 - $[5].i) * (1 - $[6].g) * 3, 55).rotate(180 * (1 - $[5].i) + c1, 0),
                    m(a);
                }),
                m(c(u), X.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), 867349170),
                m(c(3, 0, -.5), X.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), 869059788),
                m(
                  f(h(
                    i(
                      o(c(u), X.translate(-100, -2.5, 55).scale(8, 1, 8), 869059788),
                      o(c(u), X.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), 869059788),
                      o(c(u), X.translate(-100, -2.6, 70).scale(3, 1.1, 7), 869059788),
                      o(c(u), X.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), 869059788),
                      o(c(6), X.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), 1285134745),
                      o(c(u), X.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), 869059788),
                      o(c(u), X.translate(-100, .42, 92).scale(3, 1.1, 4.1), 869059788),
                    ),
                    o(c(8), X.translate(-100, -1, 55).scale(7, .9, 7), 1716276300),
                    o(c(8), X.translate(-100, -2, 55).scale(4, .3, 4), 2137417318),
                    o(c(8), X.translate(-100, -3, 55).scale(.6, 1, .6), 2137417318),
                  )),
                  X,
                ),
                p(X.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
                p(X.translate(-89, .2, 80), [0, 0, 6]),
                m(f(
                  h(
                    o(c(u), X.translate(-100, 1, 63).scale(7.5, 4), 1719631743),
                    o(c(u), X.translate(-100, 0, 70).scale(2, 2, 10), 1719631743),
                    o(c(20, 1), X.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), 1719631743),
                  ),
                )),
                M(t => (t.h = () => X.translate(-99.7, 5.3 * -$[6].g - 2, 63.5), l)),
                u.map(({ x: a, z: e }) => {
                  m(c(6), X.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), -869914983),
                    [4, -.4].map(t => m(c(6), X.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), -869059738));
                }),
                N(7, t => {
                  m(
                    c((23 * t + 1) % 5 + 5, 0, .55),
                    X.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                      5 + t / 2,
                      1 + t / 6,
                      5 + t / 3,
                    ),
                    d(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                  );
                }),
                m(c(u), X.translate(-87, -9.5, 24).scale(7, 1, 3), 1721335654),
                m(c(4), X.translate(-86, -9.2, 27).scale(5, 1, 5), 1286773119),
                m(c(18, 1), X.translate(-86, -9, 31).scale(1.5, 1, 1.5), 426134604),
                g(X.translate(-86, -7.5, 31)),
                M(t => {
                  t.h = () => X.translate(0, 3.5 * (1 - L($[6].g, $[7].g)) + W($[7].i, $[6].i) * Math.sin(B) * 5),
                    [0, 12, 24].map(t =>
                      m(c(u), X.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), 865697587)
                    );
                }),
                M(t => {
                  t.h = () => {
                    let t = W($[7].i, $[6].i);
                    return X.translate(0, t * Math.sin(B + 3) * 6, 6 * Math.sin(.6 * B + t) * t);
                  }, [6, 18].map(t => m(c(u), X.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), 863987225));
                }),
                m(
                  f(h(
                    i(
                      o(c(u), X.scale(11, 1, 13), 1285121612),
                      o(c(5), X.translate(0, 0, -7).scale(2, 1.2, 2), 1286759987),
                      o(c(5), X.scale(9, 1.2, 9), 2135700224),
                    ),
                    o(c(5), X.scale(5.4, 5, 5.4), 2135700224),
                  )),
                  X.translate(-38.9, -11.3, 17),
                ),
                g(X.translate(-38.9, -9.6, 10)),
                M(t => {
                  t.h = () => X.translate(0, -7.3 * $[7].i),
                    m(
                      f(h(
                        i(
                          o(c(5), X.translate(0, 2).scale(5, 7, 5).skewY(8), 2139055667),
                          o(c(5), X.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), 2139052351),
                          o(c(5), X.translate(0, 9).scale(.6, 7, .6).skewY(8), 2139049049),
                        ),
                        o(c(5), X.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), 2139055667),
                      )),
                      X.translate(-38.9, -11.3, 17),
                    ),
                    p(
                      X.translate(-38.9, -.3, 17).rotate(0, 0, 10),
                      ...I(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5]),
                    );
                }),
                u.map(({ x: t, z: a }) => {
                  n = X.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                    m(c(18, 1), n.scale(1, 4), -12632257),
                    [1.5, 8].map(t => m(c(18, 1), n.translate(0, t - 4).scale(1.5, .5, 1.5), 1285134745));
                }),
                m(
                  f(h(
                    i(
                      o(c(6), X.translate(0, 0, -36).scale(15, 1.2, 15), 1286779570),
                      o(c(u), X.translate(0, 0, -18).scale(4, 1.2, 6), 1285121650),
                    ),
                    ...N(6, a =>
                      N(6, t =>
                        o(
                          c(6),
                          X.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          1286779570,
                        ))).flat(),
                  )),
                  X.translate(-38.9, -11.3, 17),
                ),
                p(X.translate(-38.9, -8.4, -21), [0, 0, 12]),
                m(c(5), X.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), 1715411404),
                g(X.translate(-84, -.5, 85).rotate(0, 45)),
                M(t => {
                  t.h = () => S1(-123, 1.4, 55 + -65 * z), g(X.translate(0, -3, -4).rotate(0, 180)), m(W1);
                }),
                p(X.translate(-115, .2, -12), [0, 0, 3.5]),
                f(h(
                  o(c(u), X.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), 1280917311),
                  o(c(3), X.translate(0, 0, -5.5).scale(3, 2), 1281772697),
                  ...[-1.2, 1.2].map(t => o(c(u), X.translate(t, -.5, 1).scale(.14, .3, 6.5), 1275081650)),
                ))),
            s = (M(t => {
              t.h = () => {
                let t = Math.sin(1.1 * B);
                return X.translate.call(X, 0, -2, W($[10].g, $[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
              }, N(2, t => m(e, X.translate(9 * t - 110 + (1 & t), 1.7, -12)));
            }),
              M(t => {
                t.h = () => {
                  let t = Math.sin(2.1 * B);
                  return X.translate.call(X, 0, -2, W($[10].g, $[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
                }, N(2, t => m(e, X.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
              }),
              M(t => {
                t.h = () => {
                  let t = Math.sin(1.5 * B);
                  return X.translate.call(
                    X,
                    0,
                    -2,
                    -8.5 * L((1 - $[10].g) * (1 - W($[10].g, $[11].g)), W($[10].g, $[11].g) * (t < 0 ? -t : t)) + 10,
                  );
                }, N(3, t => m(e, X.translate(9 * t - 106, 1.7, -12)));
              }),
              m(
                f(h(
                  i(
                    o(c(u), X.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    o(c(u), X.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...N(4, t => o(c(u), X.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...N(3, t => o(c(u), X.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                X.translate(-123, 0, -12),
                865697663,
              ),
              m(c(5), X.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), -10928321),
              m(c(u), X.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), 869059788),
              m(c(6), X.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), 867336089),
              g(X.translate(-116, -1.4, -18).rotate(0, 180)),
              N(3, t => {
                m(N1, X.translate(12 * t - 109, -9, -12), 1285134745),
                  m(N1, X.translate(-77, -9, -12 * t - 20).rotate(0, 90), 1285134745);
              }),
              m(f(
                h(
                  o(c(12), X.translate(-77, -13.9, -12).scale(4, 18.2, 4), 867349170),
                  o(c(u), X.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), 865697638),
                  o(c(u), X.translate(-77, 0, -14).scale(1.5, 2.2, 2), 865697638),
                  o(c(12), X.translate(-77, 2.8, -12).scale(3, 5, 3), 865697638),
                ),
              )),
              m(c(u), X.translate(-115.5, -17, -12).scale(.5, 15, 2.2), 1285134745),
              m(c(u), X.translate(-77, -17, -50.5).scale(2.2, 15, .5), 1285134745),
              m(c(u), X.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), 1285134745),
              m(f(
                h(
                  o(c(u), X.translate(-93, -5.8, -40).scale(9, 1, 5), 432852172),
                  o(c(9), X.translate(-98, -5.8, -40).scale(3, 8, 3), 867349170),
                ),
              )),
              m(c(9), X.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), 1283424127),
              g(X.translate(-98, -4.4, -40).rotate(0, 90)),
              p(X.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
              m(f(
                h(
                  i(
                    o(c(6, 0, 0, .6), X.translate(-100, .7, 105.5).scale(8, 1, 11), 867349170),
                    o(c(u), X.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), 867349170),
                    o(c(u), X.translate(-91.2, .7, 107).scale(3, 1, 3.3), 867349170),
                  ),
                  o(c(5), X.translate(-100, .7, 113).scale(4, 3, 4), 867349170),
                ),
              )),
              N(4, a =>
                M(t => {
                  t.h = () => {
                    let t = W($[8].i, $[12].i);
                    return X.translate(
                      (2 < a ? 2 * (1 - t) + t : 0) - 100,
                      t * Math.sin(1.3 * B + 1.7 * a) * (3 + a / 3) + .7,
                      115 + (1 & a ? -1 : 1) * (1 - $[8].i) * (1 - $[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * B + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    m(
                      c(6),
                      X.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      d(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              M(t => {
                t.h = () => {
                  let t = W($[8].i, $[12].i);
                  return X.translate(2.5 * (1 - t) - 139.7, -3 * (1 - $[8].g) + t * Math.sin(.8 * B) * -1 - 1.8, 93.5)
                    .rotateSelf(Math.cos(1.3 * B) * (3 * t + 3), 0);
                },
                  m(f(h(o(c(10), X.scale(6, 2, 6), 1283430681), o(c(10), X.scale(3.3, 6, 3.3), 2139068697)))),
                  n = X.translate(-7.5).rotate(0, 90),
                  m(c(15), n.scale(3, 2.3, 3), 1281779302),
                  m(c(10), n.scale(2, 2.5, 2), 1286786124),
                  m(c(5), n.scale(1, 3), 2139062143),
                  g(n.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(t =>
                    m(q1, X.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), 869072895)
                  ),
                  p(X.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              }),
              [-1, 1].map(a => {
                m(c(15, 1), X.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), 2134064537),
                  [7.2, 1.5].map(t =>
                    m(c(15, 1), X.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), 1714634111)
                  ),
                  m(q1, X.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), 13434879),
                  m(
                    f(h(
                      o(c(u), X.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), 1719631743),
                      o(c(u), X.scale(3, 3, 10), 2134064537),
                      o(c(30, 1), X.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), 2134064537),
                      o(c(5), X.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), 2134064537),
                      o(c(5), X.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), 2134064537),
                    )),
                    X.translate(a - 100, .7, 97),
                  );
              }),
              M(t => (t.h = () => X.translate(-100, .6 - 6 * $[12].g, 96.5).scale(.88, 1.2), l)),
              [...o(c(28, 1), X.scale(8, 1, 8), 863138418), ...o(c(5), X.translate(0, 1).scale(1, .2), 860638284)]);
          M(t => {
            t.h = () => X.translate(-80, 1, 106).rotate(0, 40 + x),
              m(f(
                h(
                  o(c(28, 1), X.scale(8, 1, 8), 863138418),
                  o(c(u), X.translate(0, 0, -5.5).scale(1.5, 3, 2.5), 863138418),
                ),
              )),
              m(c(8), X.translate(0, 2).scale(3, 1.5, 3), 431141554),
              m(c(5), X.translate(0, 2).scale(1, 2), 860638284),
              p(X.translate(0, 3), ...I(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
          }),
            M(t => {
              t.h = () => X.translate(-64, 1, 106).rotate(0, o1),
                m(f(
                  h(o(c(28, 1), X.translate(0, 2).scale(8, 1, 8), 1275068505), o(c(u), X.scale(9, 5, 2), 1275068492)),
                )),
                m(s),
                [-1, 1].map(t =>
                  m(q1, X.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), 13434879)
                );
            }),
            M(t => {
              t.h = () => X.translate(-48, 1, 106).rotate(0, 180 - o1),
                m(f(
                  h(
                    o(c(30, 1), X.translate(0, 2).scale(8, 1, 8), 1275068505),
                    o(c(u), X.translate(7).scale(9, 5, 2), 1275068492),
                    o(c(u), X.translate(0, 0, 7).scale(2, 5, 9), 1275068492),
                  ),
                )),
                m(s);
            }),
            M(t => {
              t.h = () => X.translate(-48, 1, 90).rotate(0, 270 + o1),
                m(f(
                  h(
                    o(c(30, 1), X.translate(0, 2).scale(8, 1, 8), 1275068505),
                    o(c(u), X.translate(7).scale(9, 5, 2), 1275068492),
                    o(c(u), X.translate(0, 0, -7).scale(2, 5, 9), 1275068492),
                  ),
                )),
                m(s);
            }),
            m(c(u), X.translate(-56, 1, 106).scale(.7, .8, 2.5), 867349170),
            m(c(u), X.translate(-48, 1, 98).scale(2.5, .8, .7), 867349170),
            m(c(u), X.translate(-39, .4, 90).scale(2, 1, 2), 1286779570),
            m(c(u), X.translate(-34.2, .4, 90).scale(3, 1, 3), 1286779570),
            g(X.translate(-34, 2.7, 96).rotate(-12, 0)),
            m(c(5), X.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), -1719697613),
            [863144985, 1283424051, 1720480332].map((a, e) =>
              M(t => {
                t.h = () =>
                  X.translate(
                    0,
                    (1 - $[13].i) * (1 - $[14].i) * 3 + W($[13].i, $[14].i) * Math.sin(1.5 * B + 1.5 * e) * 4.7,
                  ),
                  m(
                    c(8),
                    X.translate(-23.5, e / 1.5 - .4, 90 + 6.8 * e).scale(3.6, 2 - e / 1.5, 3.6).rotate(0, 22.5),
                    a,
                  ),
                  2 === e && m(c(6), X.translate(-29, .4, 90).scale(2.4, 1, 2.8), 1285141145),
                  1 === e
                  && m(c(u), X.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), 1286773145);
              })
            ),
            m(f(
              h(
                o(c(6, 0, 0, .3), X.translate(0, -.92, 95).scale(14, 2, 14), 869059788),
                o(c(5), X.translate(0, 0, 95).scale3d(6), 2135706700),
              ),
            )),
            [8, -6.1].map((a, e) =>
              N(
                3,
                t =>
                  m(N1, X.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e), 1 & t ? 1283424127 : 2136562009),
              )
            ),
            [-1, 1].map(t => m(q1, X.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), 13434879)),
            g(X.translate(0, 1.7, 82).rotate(0, 180)),
            m(c(5), X.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), 1716276351),
            m(f(
              h(
                i(
                  o(c(u), X.translate(0, 16, 110.5).scale(12, 1, 3), 1716276351),
                  o(c(u), X.translate(0, 16, 111).scale(3, 1, 3.8), 1716276351),
                ),
                o(c(5), X.translate(0, 16, 103.5).scale(5.5, 5, 5.5), 1716276351),
              ),
            )),
            M(t => {
              t.h = () => {
                let t = Math.sin(B);
                return X.translate(-2 * t).rotate(0, 0, 25 * t);
              },
                m(c(3), X.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), 1716276351),
                [22, 30].map(t => {
                  m(c(6), X.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), 1722987186),
                    m(c(u), X.translate(0, 6.2, t + 95).scale(.5, 11, .5), 1716276351);
                });
            }),
            m(c(6), X.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), 1286773119),
            m(c(u), X.translate(0, 16, 129).scale(1.5, 1, 2), 1286773119),
            m(c(7), X.translate(0, 16.2, 133).scale(5, 1, 5), 1721335654),
            M(t => {
              t.h = () => {
                let t = W(W(($[14].g + $[14].i) / 2, $[13].i), ($[15].g + $[15].i) / 2);
                return X.translate(0, 16 * t, 8.5 * q(2 * t - 1) + 95);
              },
                m(c(5), X.scale(5, 1.1, 5), 1716276351),
                m(c(5), X.scale(5.5, .9, 5.5), 1715420991),
                g(X.translate(0, 1.5, -1).rotate(0, 180));
            }),
            p(X.translate(0, 3, 95), ...I(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            p(X.translate(0, 19, 134), [0, 0, 3.5]);
        });
      })(),
      R1 = M(() => {
        O1 = [-1, 1].map(t =>
          M(() => {
            m(c(10, 1), X.translate(.3 * t, -.8).scale(.2, .7, .24), 6704383);
          })
        ),
          [0, 180].map(t => m(q1, X.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), 13434879)),
          m(j(20), X.translate(0, 1).scale(.5, .5, .5), 6704383);
        let a = o(
          f(h(c(15, 1), o(c(u), X.translate(0, 0, 1).scale(2, 2, .5)))),
          X.rotate(-90, 0).scale(.1, .05, .1),
          5000268,
        );
        [-1, 1].map(t => m(a, X.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
          m(c(u), X.translate(0, .9, .45).scale(.15, .02, .06), 5000268),
          m(j(20), X.scale(.7, .8, .55), 6704383);
      });
  });
})();
