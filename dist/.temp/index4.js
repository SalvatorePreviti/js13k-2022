let a = 0,
  l1 = !0,
  D = 0,
  Q = 0,
  r1 = 0,
  B = 0,
  s1 = 0,
  y = 0,
  n1 = 0,
  x = 0,
  o1 = 0,
  i1 = 0,
  c1 = 0,
  h1 = 0,
  z = 0,
  w = .066,
  O = Math.PI / 180,
  R = new DOMMatrix(),
  L = (t, a) => a < t ? t : a,
  f1 = t => t < 0 ? -t : t,
  X = t => t < 0 ? 0 : 1 < t ? 1 : t,
  q = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  u1 = t => Math.atan2(Math.sin(t *= O), Math.cos(t)) / O,
  m1 = (t, a, e) =>
    ((t *= O) + (2 * (a = (a * O - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / O,
  y1 = (t, a, e, l) => {
    let r = a - t;
    return (t += Math.sign(a - t) * L(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * X(l / 7);
  },
  W = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  M1 = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  p = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  P = ({ x: t, y: a, z: e }) => Math.hypot(t - $.x, a - $.y, e - $.z) || 0,
  g = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  v = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  d = (t, a, e) => (t.B = e, t.u = a, t),
  b = (t, l, a = t.u) =>
    d(
      t.map(t =>
        ((
          { x: t, y: a, z: e },
        ) => ({ x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }), { x: t, y: a, z: e }))(t)
      ),
      a,
      t.B,
    ),
  r = (t, a, e) => t.map(t => b(t, a, e)),
  I = (e, l = 0) =>
    W(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  S = (l, r, s) => l.map((t, a, { length: e }) => d([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.u, s)),
  s = (
    t,
    a,
    e = 0,
    l,
  ) => (l = t.length ? t : I(t, l),
    t = b(l, R.translate(0, 1).scale3d(0 < e ? e : 1)),
    e = b(l, R.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...S(e, t, a), e, t]),
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
        let t = d([], 0, 1);
        n.push(t),
          t.push(s(e, a, t)),
          a && t.push(s((e + 1) % l, a, t)),
          r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
          t.push(s(e, a + 1 % r, t));
      }
    }
    return n;
  },
  Y = (l, r) => {
    let s, n, o, i = r.A;
    for (let t = 0; i.length > t; ++t) {
      if ((o = p(l, i[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
        n = [], o = [], i = r.A, t = r.v;
        let a = i.at(-1), e = p(l, a) - l.w;
        for (let t of i) {
          s = p(l, t) - l.w,
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
          o: 2 < n.length && { A: d(n, i.u, i.B), v: t, j: r },
          m: 2 < o.length && { A: d(o, i.u, i.B), v: t, j: r },
        };
      }
    }
    return { o: s, m: n };
  },
  k = (e, l, r = g(l.A)) => {
    if (e) {
      let { o: t, m: a } = Y(e, l);
      t || a || e.C.push(l), t && (e.o = k(e.o, t, r)), a && (e.m = k(e.m, a, r));
    } else e = { x: r.x, y: r.y, z: r.z, w: r.w, C: [l], o: 0, m: 0 };
    return e;
  },
  e = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = Y(t, a);
        e || l || (0 < s * p(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of r.C) o(a, t);
    return n;
  },
  F = (t, a) => t && (a(t), F(t.o, a), F(t.m, a)),
  T = t => t.length ? t.reduce((t, a) => k(t, { A: a, v: 0, j: 0 }), 0) : t,
  l = t => (F(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.C) t.v = !t.v;
  }),
    t),
  n = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = T(l), a) {
        a = T(a), F(l, t => t.C = e(a, t, 1)), F(a, t => r.push([t, e(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) k(l, t, a);
      }
      return l;
    }),
  o = (t, ...a) => l(n(l(T(t)), ...a)),
  i = t => {
    let e = new Map(),
      l = new Map(),
      r = a => {
        if (a.j) {
          let t = e.get(a.j);
          t ? (l.delete(t), a = r(a.j)) : e.set(a.j, a);
        }
        return a;
      };
    return F(t, a => {
      for (let t of a.C) l.set(r(t), t.v);
    }),
      Array.from(l, ([{ A: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return d(a ? e.reverse() : e, t.u, t.B);
      });
  },
  c = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  x1 = [],
  h = (t, a) => (E1.push(E1.at(-1).multiply(t)), t = a(), E1.pop(), t),
  p1 = [],
  g1 = [],
  N = [],
  z1 = [],
  C = [[]],
  H = new Map(),
  f = new Int32Array(7),
  v1 = t => {
    let { x: a, y: e, z: l } = B1[t], r = (J1[0] = a, J1[1] = e, J1[2] = l, H.get(t = "" + (B1.B ? U1 : f)));
    return void 0 !== r
      ? (a = 3 * r, N[a] = (N[a++] + f[4]) / 2, N[a] = (N[a++] + f[5]) / 2, N[a] = (N[a] + f[6]) / 2)
      : (H.set(t, r = H.size), g1.push(a, e, l), N.push(f[4], f[5], f[6]), z1.push(f[3])),
      r;
  },
  u = (t, a = R, e) => C.at(-1).push(...r(t, E1.at(-1).multiply(a), e)),
  d1 = () => {
    let t = C.at(-1);
    for (B1 of t) {
      let { x: t, y: a, z: e } = g(B1);
      f[3] = 0 | B1.u, f[4] = 32767 * t, f[5] = 32767 * a, f[6] = 32767 * e;
      for (let t = 2, a = v1(0), e = v1(1); B1.length > t; ++t) p1.push(a, e, e = v1(t));
    }
    return t.length = 0, { K: t = a, J: (a = p1.length) - t };
  },
  A = t => {
    let a = Q1, e = { F: E1.at(-1), s: R, H: x1.length + 1, G: 1, j: a === x1[0] ? void 0 : a };
    return Q1 = e, x1.push(e), E1.push(R), C.push([]), t = t(e) || d1(), e.D = t, E1.pop(), C.pop(), Q1 = a, e;
  },
  w1 = () => {
    for (let a of x1) {
      let t = a.h;
      a.s = a.j ? a.j.s.multiply(a.F) : a.F, (t = t && t(a)) && (a.s = a.s.multiply(t));
    }
  },
  K = -11,
  E = 17,
  U = -90,
  J = 0,
  V = 0,
  I1 = t => Math.sin(t * Math.PI * 2),
  G = [],
  A1 = () => {
    t1 || !l1 ? G1.disconnect() : G1.connect(V1.destination), b4.innerHTML = "Music: " + l1;
  },
  P1 = (t = !1) => {
    if (t1 !== t) {
      t1 = t, a1 = 0;
      try {
        t ? document.exitPointerLock() : G1.start();
      } catch {}
      document.body.className = t ? "l m" : "l", A1();
    }
  },
  _ = (t, a, e) => t + (a - t) * X(1 - Math.exp(-e * w)),
  t = ({ l: t }) => t,
  Z = [],
  S1 = [],
  j1 = () => {
    s1 = S1.reduce((t, a) => t + a.l, 0),
      h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][s1];
  },
  Y1 = () => {
    j1(), localStorage.DanteSP22 = JSON.stringify([Z.map(t), S1.map(t), n1, B, z]);
  },
  $ = { x: 0, y: 0, z: 0 },
  m = t => {
    h(t, () => {
      A(r => {
        let s = { l: 0, g: 0, i: 0, j: r.j }, n = Z.push(s) - 1;
        r.h = () => {
          let t = s.l, a = s.g, e = s.i, l = (s.I = r.s).transformPoint();
          return P(l) < 2.9 && G[5] && (a < .3 || .7 < a)
            && (s.l = t ? 0 : 1, n && !c1 && (h4.innerHTML = "* click *", y = B + 1), n1 = n, Y1()),
            s.g = _(a, t, 4),
            s.i = _(e, t, 1),
            r.D = _1[.5 < a ? 1 : 0],
            R.rotate(60 * s.g - 30, 0).translateSelf(0, 1);
        };
      }),
        u(s(5), R.translate(-.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
        u(s(5), R.translate(.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
        u(s(c), R.translate(0, -.4).scale(.5, .1, .5), 6717311);
    });
  },
  k1 = t =>
    R.translate(Math.sin(B + 2) / 5, Math.sin(.8 * B) / 3, t).rotateSelf(
      2 * Math.sin(B),
      Math.sin(.7 * B),
      Math.sin(.9 * B),
    ),
  M = (t, ...a) => {
    h(t, () => {
      let o = -1,
        i = 0,
        c = 1,
        h = 0,
        f = 0,
        u = 3,
        m = 0,
        M = 0,
        p = { l: 0 },
        g = a.map(([t, a, e]) => ({ x: t, z: a, w: e })),
        v = g[0],
        { x: d, z: x } = v,
        b = d,
        I = x,
        e = S1.push(p) - 1;
      A(n => (n.h = () => {
        if (!p.l) {
          var z, t = 1;
          let e = 1 / 0;
          for (z of g) {
            var l = z.w, r = Math.hypot(d - z.x, x - z.z), s = r - l;
            a ||= r < l, 0 < s && e > s && (e = s, v = z), t = t < (l = r / l) ? t : l;
          }
          if (!a) {
            e = v.z, l = v.w;
            let t = Math.hypot(r = d - (z = v.x), s = x - e), a = Math.atan2(-s, r);
            c && (h = (Math.random() - .5) * Math.PI / 2, u = L(1, u / (1 + Math.random()))),
              a += h,
              o = -Math.cos(a),
              i = Math.sin(a),
              .1 < t && (t = (l > t ? t : l) / (t || 1), d = r * t + z, x = s * t + e);
          }
          c = a,
            u = _(u, 3 + 6 * (1 - t), 3 + t),
            d = _(d, d + o, u),
            x = _(x, x + i, u),
            b = _(b, d, u),
            I = _(I, x, u),
            f = m1(f, Math.atan2(b - m, I - M) / O - 180, 3 * w),
            m = b,
            M = I;
          var t = R.translate(b, 0, I).rotateSelf(0, f).skewXSelf(7 * Math.sin(2 * B)).skewYSelf(7 * Math.sin(1.4 * B)),
            a = n.s.multiply(t).transformPoint();
          P(a) < 1.5
            && (p.l = 1,
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
              ][s1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              z = s1 && s1 < 12 ? 5 : 7,
              c1 || (h4.innerHTML = a, y = B + z),
              Y1());
        }
        return p.l
          && (n.j = X1,
            n.F = R,
            a = e % 4 - 2,
            t = R.translate(
              e % 4 * 1.2 - 1.7 + Math.sin(B + e) / 6,
              -2,
              1.7 * (e / 4 | 0) - 5.5 + (a < 0 ? -a : a) + Math.cos(B / 1.5 + e) / 6,
            )),
          t;
      },
        Z1)
      );
    });
  },
  F1 = (t, a, e, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      i = -1 / 0,
      c = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      u = -1 / 0,
      m = 1.1 * (e - a),
      M = new DOMMatrix(M1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return t = W(
      8,
      t => (t = M.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (m * t.x | 0) / m / t.w,
        s -= t.y = (m * t.y | 0) / m / t.w,
        n -= t.z = (m * t.z | 0) / m / t.w,
        t),
    ),
      a = R.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      b(t, a).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          i = i > t ? i : t,
          c = a > c ? c : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          u = u > e ? u : e;
      }),
      f *= f < 0 ? l : 1 / l,
      u *= 0 < u ? l : 1 / l,
      R.scale(2 / (i - o), 2 / (h - c), 2 / (f - u)).translateSelf((i + o) / -2, (h + c) / -2, (f + u) / 2)
        .multiplySelf(a).toFloat32Array();
  },
  T1 = (t, a = 35633) => (a = e1.c6x(a), e1.s3c(a, t), e1.c6a(a), a),
  C1 = (t, a) => {
    let e = {}, l = e1.c1h();
    return e1.abz(l, t), e1.abz(l, T1(a, 35632)), e1.l8l(l), t => t ? e[t] || (e[t] = e1.gan(l, t)) : e1.u7y(l);
  },
  H1 = (l, r, s) => {
    let n = t => e1.d97(4, t.J, 5123, 2 * t.K);
    if (t1) e1.uae(l, !1, R.rotate(0, 40 * Math.sin(r1) - 70).toFloat32Array()), n(L1.D), R1.map(t => t.D).map(n);
    else {
      for (let e of x1) {
        let t = e.H, a = e.D;
        (r || e !== L1 && e !== R1[0] && e !== R1[1]) && a
          && (s && e1.ube(s, t / 255), e1.uae(l, !1, e.s.toFloat32Array()), n(a));
      }
    }
  },
  D1 = new Int32Array(10725888),
  Q1,
  B1,
  t1,
  a1,
  O1,
  R1,
  L1,
  X1,
  q1 = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  W1 = (() => {
    let a = W(
        11,
        t => R.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
      ),
      e = I(18);
    return W(10, t => S(b(e, a[t]).reverse(), b(e, a[t + 1]), 1)).flat();
  })(),
  N1 = i(
    o(
      r(s(20, 1, 1.15, 1), R.translate(0, -3).scale(3.5, 1, 3.5), -1304467790),
      r(s(20, 1, 1.3, 1), R.translate(0, -2.5).scale(2.6, 1, 3), 859793074),
      r(s(c), R.translate(4, -1.2).scale3d(2), 1279223474),
    ),
  ),
  K1 = i(
    o(
      r(s(c), R.translate(0, -8).scale(6, 15, 2.2)),
      r(s(c), R.translate(0, -14.1).scale(4, 13, 4)),
      r(s(20, 1), R.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  ),
  E1 = [R],
  U1 = new Int32Array(f.buffer, 0, 4),
  J1 = new Float32Array(f.buffer),
  V1 = new AudioContext(),
  G1 = V1.createBufferSource(),
  _1 = (u([c.slice(1)], R.translate(-2).scale3d(3).rotate(90, 0)),
    d1(),
    [3375103, 3407794].map(
      t => (u(s(6, 1), R.scale(.13, 1.4, .13), 8342604),
        u(s(8), R.translate(0, 1).scale(.21, .3, .21), t),
        u(s(3), R.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), 3355443),
        d1()),
    )),
  Z1 = (u(
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
    R.scale3d(.7),
    16777215,
  ),
    [-1, 1].map(t => u(j(15), R.translate(.16 * t, .4, -.36).scale3d(.09))),
    d1()),
  e1 = hC.getContext("webgl2");
for (let t in e1) e1[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = e1[t];
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
          p = 0,
          g = !1,
          v = { x: 0, y: 0, z: 0 },
          d = new Int32Array(256),
          e = () => {
            let { j: t, I: a } = Z[n1], { x: e, y: l, z: r } = a.transformPoint({ x: 0, y: 8, z: -3 });
            $.x = v.x = e,
              $.y = v.y = k = l,
              $.z = v.z = r,
              A =
                Y =
                j =
                P =
                S =
                  0,
              u = 1,
              h = f = t?.H || 1;
          },
          l = t => {
            requestAnimationFrame(l);
            let a = (t - (O1 || t)) / 1e3;
            w = t1 ? G[5] = 0 : .066 < a ? .066 : a,
              B += w,
              r1 += a,
              O1 = t,
              0 < w && (e1.b6o(36160, T),
                e1.r9r(0, 0, 128, 128, 6408, 5121, b),
                e1.iay(36160, [36064]),
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
                        P = _(P, o ? 6.5 : 8, 4),
                        v.y += a / 41 - (o ? 1 : P) * e / 41 * P * w;
                    })(),
                      (() => {
                        for (let t = 32; t < 128; t += 2) {
                          let n = 0, o = 0, i = 0, c = 0, h = 512 * t;
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
                              && (s < 64 && t > i ? i = t : 64 < s && t > c && (c = t));
                          }
                          i = c - i,
                            n = o - n,
                            (i < 0 ? -i : i) > (a < 0 ? -a : a) && (a = i),
                            (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                        }
                      })(),
                      (G[0] ? 1 : 0) + (G[2] ? -1 : 0) + D),
                    l = (G[1] ? 1 : 0) + (G[3] ? -1 : 0) + Q,
                    r = navigator.getGamepads()[0];
                  if (r) {
                    var s = t => a[t]?.pressed || 0 < a[t]?.value;
                    let a = r.buttons;
                    r = r.axes;
                    var n = s(1) || s(3) || s(2) || s(0);
                    n !== g && (g = n) && (G[5] = 1),
                      t += (.2 < f1(-r[0]) ? -r[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                      l += (.2 < f1(-r[1]) ? -r[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                      a1 && (.3 < f1(r[2]) && (V += 80 * r[2] * w), .3 < f1(r[3]) && (J += 80 * r[3] * w));
                  }
                  (l < 0 ? -l : l) < .05 && (l = 0),
                    (t < 0 ? -t : t) < .05 && (t = 0),
                    s = Math.atan2(l, t),
                    r = X(Math.hypot(l, t)),
                    t = r * Math.cos(s),
                    l = r * Math.sin(s);
                  let o = X(1 - 5 * L(a < 0 ? -a : a, e < 0 ? -e : e)),
                    y =
                      (f || (a += j * o * w, e += Y * o * w),
                        j = _(j, 0, A ? 8 : 4),
                        Y = _(Y, 0, A ? 8 : 4),
                        S = _(S, A ? (t || l ? A ? 7 : 4 : 0) * o : 0, A ? .1 < o ? 10 : t || l ? 5 : 7 : 1),
                        o = Math.sin(n = a1 ? V * O : Math.PI) * S * w,
                        Math.cos(n) * S * w);
                  if (
                    a -= t * y - l * o,
                      e -= t * o + l * y,
                      (o = (n = f && x1[f - 1].G && x1[f - 1].s || R).inverse()).m41 = 0,
                      o.m42 = 0,
                      o.m43 = 0,
                      { x: a, z: e } = o.transformPoint({ x: a, z: e, w: 0 }),
                      v.x += a,
                      v.z += e,
                      f !== I
                  ) {
                    I = f;
                    let { x: t, y: a, z: e } = n.inverse().transformPoint($);
                    v.x = t, v.y = a, v.z = e;
                  }
                  o = $.x, y = $.z;
                  let { x: i, y: x, z: c } = n.transformPoint(v);
                  $.x = i,
                    $.y = x,
                    $.z = c,
                    n = f1(k - x),
                    k = _(k, x + .1, 50 * n + 5),
                    f && (j = ($.x - o) / w, Y = ($.z - y) / w),
                    (t || l) && (m = 90 - s / O),
                    M = m1(M, m, 8 * w),
                    p += (r - p) * X(10 * w);
                })(),
                w1()),
              0 < w && (r = y1(r, $.x, .5, w),
                s = y1(s, $.y, 2, w),
                n = y1(n, $.z, .5, w),
                a1
                  ? (K = _(K, $.x, 18 + (t = 200 * u)),
                    E = _(E, $.y + 1.5, 15 + t),
                    U = _(U, $.z, 18 + t),
                    J = L(J < 87 ? J : 87, -87))
                  : (K = y1(K, r, 1, 2 * w),
                    E = y1(E, s + 13 + 15 * u, 4, 2 * w),
                    1 < ((t = (U = y1(U, n + -18, 1, 2 * w)) - n) < 0 ? -t : t)
                    && (a = K - r, V = 270 + Math.atan2(t, a) / O, J = 90 - Math.atan2(Math.hypot(t, a), E - s) / O)),
                V = u1(V),
                0 < w
                && (t = q(Z[12].g, Z[13].g),
                  B > y && (h4.innerHTML = "", y = 0),
                  a = _(i1, 0, 1),
                  i1 = a + (u1(i1 + 60 * w) - a) * X(Z[5].g - Z[6].i),
                  a = _(x, 0, 5),
                  x = a + (u1(x + 56 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  a = _(o1, 0, 4),
                  o1 = a + (u1(o1 + 48 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  z = _(z, Z[9].i, .2 + .3 * ((t = 2 * Z[9].i - 1) < 0 ? -t : t)),
                  h1 = _(h1, c1 ? h1 + (-9 - h1) * X(1.5 * w) : X(B / 3), 1),
                  1 === Z[0].l && .8 < Z[0].g && (s1 < 13
                    ? (Z[0].l = 0, c1 || (h4.innerHTML = "Not leaving now, there are souls to catch!", y = B + 3))
                    : c1
                      || (c1
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", y = B + 1 / 0),
                        c1 = 1)),
                  G[5] = 0,
                  ($.x < -25 || $.z < 109 ? -25 : -9) > $.y && e())),
              t = t1
                ? R.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + X(hC.clientWidth / 1e3))
                : R.rotate(-J, -V, -0).invertSelf().translateSelf(-K, -E, -U),
              0 < w
              && (c(),
                e1.b6o(36160, T),
                e1.v5y(0, 0, 128, 128),
                e1.cbf(!0, !1, !0, !1),
                e1.c4s(16640),
                e1.uae(c("b"), !1, R.rotate(0, 180).invertSelf().translateSelf(-$.x, -$.y, .3 - $.z).toFloat32Array()),
                H1(c("c"), 0, c("j")),
                e1.cbf(!1, !0, !1, !1),
                e1.c4s(16640),
                e1.cbf(!1, !0, !0, !1),
                e1.uae(c("b"), !1, R.translate(-$.x, -$.y, -$.z - .3).toFloat32Array()),
                H1(c("c"), 0, c("j")),
                e1.cbf(!0, !0, !0, !0),
                1 === f && (Z[9].l = $.x < -15 && $.z < 0 ? 1 : 0)),
              o(),
              e1.v5y(0, 0, 2048, 2048),
              C[0](F1(t, .3, 55, 10)),
              C[1](F1(t, 55, 177, 11)),
              e1.b6o(36160, null),
              F(),
              e1.v5y(0, 0, e1.drawingBufferWidth, e1.drawingBufferHeight),
              e1.c4s(16640),
              e1.uae(F("a"), !1, M1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              e1.uae(F("b"), !1, t.toFloat32Array()),
              e1.ubu(F("k"), K, E, U),
              C[0](),
              C[1](),
              H1(F("c"), !a1),
              i(),
              e1.ubu(i("j"), e1.drawingBufferWidth, e1.drawingBufferHeight, r1),
              t1 ? e1.ubu(i("k"), 0, 0, 0) : e1.ubu(i("k"), K, E, U),
              e1.uae(i("b"), !1, t.inverse().toFloat32Array()),
              e1.d97(4, 3, 5123, 0);
          },
          b = new Uint8Array(65536),
          I,
          A,
          P,
          S,
          j,
          Y,
          k,
          r,
          s,
          n,
          t = T1(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",
          ),
          o = C1(
            T1("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"),
            "#version 300 es\nvoid main(){}",
          ),
          i = C1(
            T1("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          c = C1(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",
          ),
          F = C1(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          T =
            (i(), e1.ubh(i("q"), 3), c(), e1.uae(c("a"), !1, M1(1.4, .59, 1e-4, 1)), F(), e1.ubh(F("q"), 3), e1.c5w()),
          a = (t = e1.c3z(), e1.c25()),
          C = W(2, t => {
            let a, e = e1.c25(), l = e1.c5w(), r = F(t ? "j" : "i");
            return F(),
              e1.ubh(F(t ? "h" : "g"), t),
              e1.b6o(36160, l),
              e1.d45([0]),
              e1.r9l(0),
              e1.a4v(33984 + t),
              e1.b9j(3553, e),
              e1.fas(36160, 36096, 3553, e, 0),
              e1.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              e1.t2z(3553, 10241, 9729),
              e1.t2z(3553, 10240, 9729),
              e1.t2z(3553, 34893, 515),
              e1.t2z(3553, 34892, 34894),
              e1.t2z(3553, 10243, 33071),
              e1.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (a = t,
                    e1.b6o(36160, l),
                    e1.iay(36160, [36096]),
                    e1.c4s(256),
                    e1.uae(o("b"), !1, a),
                    H1(o("c"), !a1))
                  : e1.uae(r, !1, a);
              };
          });
        e1.b11(34963, e1.c1b()),
          e1.b2v(34963, new Uint16Array(p1), 35044),
          e1.b11(34962, e1.c1b()),
          e1.b2v(34962, new Float32Array(g1), 35044),
          e1.v7s(0, 3, 5126, !1, 0, 0),
          e1.b11(34962, e1.c1b()),
          e1.b2v(34962, new Int16Array(N), 35044),
          e1.v7s(1, 3, 5122, !0, 0, 0),
          e1.b11(34962, e1.c1b()),
          e1.b2v(34962, new Uint32Array(z1), 35044),
          e1.v7s(2, 4, 5121, !0, 0, 0),
          e1.e3x(0),
          e1.e3x(1),
          e1.e3x(2),
          e1.e8z(2929),
          e1.e8z(2884),
          e1.c70(1),
          e1.c7a(1029),
          e1.d4n(515),
          e1.c5t(0, 0, 0, 1),
          e1.b6o(36160, T),
          e1.bb1(36161, t),
          e1.r4v(36161, 33189, 128, 128),
          e1.f8w(36160, 36096, 36161, t),
          e1.a4v(33987),
          e1.b9j(3553, a),
          e1.fas(36160, 36064, 3553, a, 0),
          e1.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          e1.b9j(3553, e1.c25()),
          e1.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, H),
          e1.gbn(3553),
          e1.t2z(3553, 10241, 9987),
          e1.t2z(3553, 10240, 9729),
          L1.h = () => R.translate($.x, k, $.z).rotateSelf(0, M),
          R1.map((t, a) => {
            t.h = () =>
              R.translate(0, p * X(.45 * Math.sin(9.1 * B + Math.PI * a - Math.PI / 2))).rotateSelf(
                p * Math.sin(9.1 * B + Math.PI * a) * .25 / O,
                0,
              );
          });
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          Z.map((t, a) => t.g = t.i = t.l = a ? 0 | e[a] : 0), S1.map((t, a) => t.l = 0 | l[a]), n1 = t, B = a, z = r;
        } catch (t) {}
        h1 = n1 < 0 ? 0 : 1 < n1 ? 1 : n1,
          h4.innerHTML = "",
          y = 0,
          j1(),
          w1(),
          (() => {
            let r = 0,
              s = 0,
              t = 0,
              a = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  G.length = D = Q = 0,
                  n = o = void 0,
                  document.hidden && P1(!0);
              },
              n,
              o,
              i;
            b1.onclick = () => P1(),
              b2.onclick = () => {
                P1(), a1 = 1;
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b4.onclick = () => {
                l1 = !l1, A1();
              },
              b5.onclick = () => P1(!0),
              onclick = () => {
                i = 1, t1 || (G[5] = !0, a1 && hC.requestPointerLock());
              },
              document.onvisibilitychange = onresize = onblur = a,
              onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && t1)
                  ? t1 && !i || P1(!t1)
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
                  ? a && (G[t] = 1)
                  : G[t] = a);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                a1 && (t || a) && (V += .1 * t, J += .1 * a);
              },
              hC.ontouchstart = a => {
                if (!t1) {
                  for (let t of a.changedTouches) {
                    a1 && t.pageX > hC.clientWidth / 2
                      ? n || (n = t, r = V, s = J)
                      : o = o || t;
                  }
                  t = r1;
                }
              },
              hC.ontouchmove = ({ changedTouches: l }) => {
                if (!t1) {
                  for (
                    let { pageX: t, pageY: a, identifier: e } of l
                  ) {
                    n?.identifier === e && (V = r + (t - n.pageX) / 3, J = s + (a - n.pageY) / 3),
                      o?.identifier === e
                      && (D = -(t - o.pageX) / 18,
                        Q = -(a - o.pageY) / 18,
                        D = (D < 0 ? -D : D) < .35 ? 0 : .8 * D,
                        Q = (Q < 0 ? -Q : Q) < .35 ? 0 : .8 * Q);
                  }
                }
              },
              hC.ontouchend = a => {
                for (let t of a.changedTouches) {
                  t.identifier === n?.identifier && (n = void 0),
                    t.identifier === o?.identifier && (o = void 0, Q = D = 0);
                }
                a.preventDefault(), a = r1 - t, (!t || .02 < a && a < .4) && (G[5] = !0);
              },
              oncontextmenu = () => !1,
              a(),
              P1(!0);
          })(),
          e(),
          K = r = $.x,
          E = (s = $.y) + 13,
          U = (n = $.z) + -18,
          requestAnimationFrame(l);
      }
    },
    l = () => {
      if (a < 5) {
        var B = 0, O = a++;
        let [v, d, b, I, A, P, S, j, Y, y, k, x, F, T, C, H, z, w, t, D, Q] =
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
        y = y * y * 4;
        for (let g of [5513, 4562, 3891]) {
          let r = 0,
            s = 0,
            f = [],
            u,
            n,
            o,
            i,
            c,
            h = new Int32Array(768 * g),
            m = 2 ** (x - 9) / g,
            M = Math.PI * 2 ** (z - 8) / g,
            p = t * g & -2;
          for (let l = 0; l <= 11; ++l) {
            for (
              let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * O + l];
              t < 32;
              ++t
            ) {
              let e = (32 * l + t) * g;
              for (var R, L = 0; L < 4; ++L) {
                if (u = 0, a && (u = Q[a - 1].charCodeAt(t + 32 * L) - 40, u += 0 < u ? 106 : 0), u) {
                  if (!(R = f[u])) {
                    let l = 0,
                      r = 0,
                      s,
                      n,
                      o = R = u,
                      i = O < 2
                        ? t => t % 1 * 2 - 1
                        : I1,
                      c = O < 2
                        ? O < 1
                          ? t => t % 1 < .5 ? 1 : -1
                          : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                        : I1,
                      h = new Int32Array(j + Y + y);
                    for (let a = 0, e = 0; j + Y + y > a; ++a, ++e) {
                      let t = 1;
                      j > a ? t = a / j : j + Y > a || (t = (1 - (t = (a - j - Y) / y)) * 3 ** (-k / 16 * t)),
                        e < 0
                        || (e -= 4 * g,
                          n = .00396 * 2 ** ((o + d - 256) / 12),
                          s = .00396 * 2 ** ((o + A - 256) / 12) * (1 + (O ? 0 : 8e-4 * 9))),
                        h[a] = 80
                            * (i(l += n * t ** (b / 32)) * v + c(r += s * t ** (P / 32)) * I
                              + (S ? (2 * Math.random() - 1) * S : 0))
                            * t | 0;
                    }
                    R = f[R] = h;
                  }
                  for (let t = 0, a = 2 * e; R.length > t; ++t, a += 2) h[a] += R[t];
                }
              }
              for (let t, a = 0; g > a; ++a) {
                L = 0,
                  ((t = h[R = 2 * (e + a)]) || c)
                  && (o = .00308 * F,
                    1 != O && 4 != O || (o *= Math.sin(m * R * Math.PI * 2) * D / 512 + .5),
                    o = 1.5 * Math.sin(o),
                    r += o * s,
                    i = (1 - T / 255) * (t - s) - r,
                    s += o * i,
                    t = 4 == O ? s : 3 == O ? i : r,
                    O || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                    t *= C / 32,
                    c = 1e-5 < t * t,
                    n = Math.sin(M * R) * H / 512 + .5,
                    L = t * (1 - n),
                    t *= n),
                  R < p || (L += h[R - p + 1] * w / 255, t += h[R - p] * w / 255),
                  D1[B + R] += h[R] = L,
                  ++R,
                  D1[B + R] += h[R] = t;
              }
            }
          }
          B += h.length;
        }
        setTimeout(l);
      } else {
        for (B = V1.createBuffer(2, 5362944, 44100), O = 0; O < 2; O++) {
          for (let t = O, a = B.getChannelData(O); t < 10725888; t += 2) {
            a[t >> 1] = D1[t] / 65536;
          }
        }
        G1.buffer = B, G1.loop = !0;
      }
      e();
    },
    H = new Image();
  H.onload = H.onerror = () => {
    e();
  },
    H.src = q1,
    setTimeout(l, 50),
    (() => {
      A(() => {
        X1 = h(R.translate(-12, 4.2, -66), () =>
          A(t => {
            t.h = () => k1(40 * h1), m(R.translate(0, -3, 4)), u(N1);
          })), W(7, t => u(s(6, 1), R.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), 6310988));
        let e = d1();
        u(s(c), R.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), 869059788),
          c.map(({ x: t, z: a }) => u(s(6), R.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), 1716276377)),
          [-23, 22].map(t => u(s(c), R.translate(0, 0, t).scale(3, 1, 8), 870704613)),
          [-15, 15].map((t, a) => {
            u(s(c), R.translate(0, 6.3, t).scale(4, .3, 1), 1716276300),
              u(s(c), R.translate(0, 1, t).scale(3, .2, .35), 1283424127),
              h(R.translate(0, 0, t), () => A(t => (t.h = () => R.translate(0, 4.7 * -Z[a + 1].g), e)));
          }),
          W(5, a =>
            W(2, t =>
              u(
                W1,
                R.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                869072895,
              ))),
          u(s(c), R.translate(3, 1.5, -20).scale(.5, 2, 5), 867349170),
          u(s(c), R.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), 868204479),
          u(s(5), R.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), 1716276377),
          m(R.translate(-5.4, 1.5, -19).rotate(0, -90)),
          u(s(c), R.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), 2134062028),
          u(i(
            o(
              n(
                r(s(6, 0, 0, .3), R.translate(8, -3, -4).scale(13, 1, 13), 867349170),
                r(s(6), R.translate(0, -8).scale(9, 8, 8), 2139042662),
                r(s(6, 0, 0, .3), R.translate(0, -.92).scale(13, 2, 13), 869059788),
              ),
              r(s(5), R.scale(5, 30, 5), 2140746598),
              r(s(5, 0, 1.5), R.translate(0, 1).scale(4.5, .3, 4.5), 870678450),
              r(s(c), R.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), 2139062143),
              r(s(6), R.translate(15, -1.5, 4).scale(3.5, 1, 3.5), 2139062143),
            ),
          )),
          A(t => {
            m(R.translate(0, 1.2)),
              t.h = () =>
                R.translate(
                  0,
                  .01 < Z[3].g ? (5 * Math.cos(1.5 * B) + 2) * Z[3].i * (1 - Z[2].g) + -15 * (1 - Z[3].g) : -500,
                  0,
                ),
              u(s(5), R.translate(0, -.2).scale(5, 1, 5), 1286776217);
          }),
          m(R.translate(15, -2, 4)),
          h(R.translate(0, 0, 75), () => {
            let l = () => {
                let t = Z[2].i, a = 1 - Z[4].i;
                return t < a ? t : a;
              },
              t = (a, e) =>
                A(t => {
                  t.h = () => R.translate(l() * Math.sin(3 * a + B * a) * e),
                    c.map(({ x: t, z: a }) => {
                      u(s(11, 1), R.translate(4 * t, 4, 4 * a - 40).scale(.8, 3, .8), -1716368257),
                        u(s(c), R.translate(4 * t, 7, 4 * a - 40).scale(1, .3), 1283424127);
                    }),
                    u(i(o(
                      r(s(c), R.translate(0, 0, -40).scale(5, 1, 5), 1288490188),
                      ...[-1, 1].map(t =>
                        r(s(c), R.translate(5 * t, .2, -40).rotate(0, 0, -30 * t).scale(4, 1, 2), 1288490188)
                      ),
                    ))),
                    u(s(c), R.translate(0, -3, -40).scale(8, 2, 8), 1281779302);
                }),
              a = (t(.7, 12),
                h(R.translate(0, 0, 20), () => t(1, 8.2)),
                A(t => {
                  h(R.translate(0, 0, -30), () => {
                    t.h = () => R.translate(l() * Math.sin(B / 1.5 + 2) * 12),
                      u(i(
                        o(
                          n(
                            r(s(c), R.scale(1.5, 1, 5), 870704613),
                            r(s(6), R.scale(4, 1, 5), 870704613),
                            r(s(c), R.translate(0, -2).scale(2, 3.2, 1.9), 2139081804),
                            r(s(16, 1, 0, 4), R.scale(1, 1, 1.5).rotate(0, 90), 870704613),
                          ),
                          r(s(c), R.scale(1.3, 10, 1.3), -1721322957),
                        ),
                      )),
                      M(R.translate(0, 2.8), [0, 0, 4.5]);
                  });
                }),
                A(t => {
                  t.h = () => R.translate(9.8 * (1 - l())),
                    u(s(3), R.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), 865704268),
                    u(s(8), R.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), 869059788),
                    u(s(c), R.translate(-23, -3, -20).scale(5.2, 1.7, 3), 1283424127),
                    u(s(c), R.translate(-23, -2.2, -13).scale(3, 1, 4), 1283424127),
                    m(R.translate(-23, -.5, -8.5));
                }),
                u(s(c), R.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), 870704613),
                A(t => {
                  t.h = () => R.translate(0, X(1 - 5 * l()) * q(Z[4].g, Z[5].g) * Math.sin(1.35 * B) * 4),
                    u(s(c), R.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), 867349170),
                    u(
                      i(o(r(s(c), R.scale(3, 1.4, 2.7)), r(s(c), R.scale(1.2, 8, 1.2)))),
                      R.translate(-33, -3, -20),
                      867349170,
                    );
                }),
                A(t => {
                  t.h = () => R.translate(0, 0, X(1 - 5 * l()) * q(Z[4].g, Z[5].g) * Math.sin(.9 * B) * 8),
                    u(i(
                      o(
                        r(s(c), R.translate(-27, -3, -20).scale(3, 1.4, 2.7), 870704613),
                        r(s(c), R.translate(-27, -3, -20).scale(1, 3), 870704613),
                      ),
                    )),
                    u(s(c), R.translate(-39, -3, -20).scale(3, 1.4, 2.7), 870704613);
                }),
                A(t => {
                  t.h = () => R.translate(0, -6.5 * Z[4].i),
                    u(s(6), R.translate(-44.5, 0, -20).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), 1722987186);
                }),
                [...r(
                  i(n(
                    r(s(c), R.translate(0, -3).scale(11, 1.4, 3), 870704613),
                    o(
                      r(s(6), R.rotate(0, 0, 90).scale(6, 8, 6), 1285134668),
                      r(s(4, 0, .01), R.translate(0, 6).scale(12, 2, .75).rotate(0, 45), 1285134668),
                      r(s(6), R.rotate(0, 0, 90).scale(5, 12, 5), 1285134668),
                      ...[5, 0, -5].map(t =>
                        r(s(5), R.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), 1285134668)
                      ),
                    ),
                  )),
                  R,
                )]);
            u(a, R.translate(-53, 0, -20)),
              u(s(6), R.translate(-61.3, -2.4, -26).scale(3, 1, 5), 1285134694),
              u(s(7), R.translate(-57, -2.6, -29).scale(4, 1, 4), 1288490188),
              m(R.translate(-55, -1.1, -29).rotate(0, 90)),
              h(R.translate(-75, 0, -20), () =>
                A(t => {
                  t.G = 0,
                    t.h = () => R.translate(0, (1 - Z[5].i) * (1 - Z[6].g) * 3).rotate(180 * (1 - Z[5].i) + i1, 0),
                    u(a);
                })),
              u(s(c), R.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), 867349170),
              u(s(3, 0, -.5), R.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), 869059788),
              u(
                i(o(
                  n(
                    r(s(c), R.translate(-100, -2.5, -20).scale(8, 1, 8), 869059788),
                    r(s(c), R.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), 869059788),
                    r(s(c), R.translate(-100, -2.6, -5).scale(3, 1.1, 7), 869059788),
                    r(s(c), R.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), 869059788),
                    r(s(6), R.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), 1285134745),
                    r(s(c), R.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), 869059788),
                    r(s(c), R.translate(-100, .42, 17).scale(3, 1.1, 4.1), 869059788),
                  ),
                  r(s(8), R.translate(-100, -1, -20).scale(7, .9, 7), 1716276300),
                  r(s(8), R.translate(-100, -2, -20).scale(4, .3, 4), 2137417318),
                  r(s(8), R.translate(-100, -3, -20).scale(.6, 1, .6), 2137417318),
                )),
                R,
              ),
              u(i(
                o(
                  r(s(c), R.translate(-100, 1, -12).scale(7.5, 4), 1719631743),
                  r(s(c), R.translate(-100, 0, -5).scale(2, 2, 10), 1719631743),
                  r(s(20, 1), R.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), 1719631743),
                ),
              )),
              h(R.translate(-99.7, -2, -11.5), () => A(t => (t.h = () => R.translate(0, 5.3 * -Z[6].g), e))),
              c.map(({ x: a, z: e }) => {
                u(s(6), R.translate(7 * a - 100, -3, 7 * e - 20).scale(1, 8.1), -869914983),
                  [4, -.4].map(t => u(s(6), R.translate(7 * a - 100, t, 7 * e - 20).scale(1.3, .5, 1.3), -869059738));
              }),
              W(7, t => {
                u(
                  s((23 * t + 1) % 5 + 5, 0, .55),
                  R.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, -30.1 - 2.8 * t).scaleSelf(
                    5 + t / 2,
                    1 + t / 6,
                    5 + t / 3,
                  ),
                  v(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                );
              }),
              u(s(c), R.translate(-87, -9.5, -51).scale(7, 1, 3), 1721335654),
              u(s(4), R.translate(-86, -9.2, -48).scale(5, 1, 5), 1286773119),
              u(s(18, 1), R.translate(-86, -9, -44).scale(1.5, 1, 1.5), 426134604),
              m(R.translate(-86, -7.5, -44)),
              h(R.translate(-76.9, -10, -51), () => {
                A(t => {
                  t.h = () => R.translate(0, 3.5 * (1 - L(Z[6].g, Z[7].g)) + q(Z[7].i, Z[6].i) * Math.sin(B) * 5),
                    [0, 12, 24].map(t => u(s(c), R.translate(t, t / -13).scale(2.8, 1.5, 3), 865697587));
                }),
                  A(t => {
                    t.h = () => {
                      let t = q(Z[7].i, Z[6].i);
                      return R.translate(0, t * Math.sin(B + 3) * 6, 6 * Math.sin(.6 * B + t) * t);
                    }, [6, 18].map(t => u(s(c), R.translate(t, t / -13).scale(2.8, 1.5, 3), 863987225));
                  });
              }),
              h(R.translate(-38.9, -11.3, -58), () => {
                u(i(
                  o(
                    n(
                      r(s(c), R.scale(11, 1, 13), 1285121612),
                      r(s(5), R.translate(0, 0, -7).scale(2, 1.2, 2), 1286759987),
                      r(s(5), R.scale(9, 1.2, 9), 2135700224),
                    ),
                    r(s(5), R.scale(5.4, 5, 5.4), 2135700224),
                  ),
                )),
                  m(R.translate(0, 1.7, -7)),
                  A(t => {
                    t.h = () => R.translate(0, -7.3 * Z[7].i),
                      M(R.translate(0, 11).rotate(0, 0, 10), ...I(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5])),
                      u(i(
                        o(
                          n(
                            r(s(5), R.translate(0, 2).scale(5, 7, 5).skewY(8), 2139055667),
                            r(s(5), R.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), 2139052351),
                            r(s(5), R.translate(0, 9).scale(.6, 7, .6).skewY(8), 2139049049),
                          ),
                          r(s(5), R.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), 2139055667),
                        ),
                      ));
                  }),
                  c.map(({ x: a, z: e }) => {
                    u(s(18, 1), R.translate(9 * a, 4, 11 * e).scale(1, 4), -12632257),
                      [1.5, 8].map(t => u(s(18, 1), R.translate(9 * a, t, 11 * e).scale(1.5, .5, 1.5), 1285134745));
                  }),
                  u(i(
                    o(
                      n(
                        r(s(6), R.translate(0, 0, -36).scale(15, 1.2, 15), 1286779570),
                        r(s(c), R.translate(0, 0, -18).scale(4, 1.2, 6), 1285121650),
                      ),
                      ...W(6, a =>
                        W(6, t =>
                          r(
                            s(6),
                            R.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(
                              2,
                              5,
                              2,
                            ),
                            1286779570,
                          ))).flat(),
                    ),
                  ));
              }),
              u(s(5), R.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), 1715411404),
              m(R.translate(-84, -.5, 10).rotate(0, 45));
          }),
          h(R.translate(-123, 1.4, 55), () => {
            A(t => {
              t.h = () => k1(-65 * z), m(R.translate(0, -3, -4).rotate(0, 180)), u(N1);
            });
          }),
          h(R.translate(-123, 0, -12), () => {
            let a = i(
              o(
                r(s(c), R.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), 1280917311),
                r(s(3), R.translate(0, 0, -5.5).scale(3, 2), 1281772697),
                ...[-1.2, 1.2].map(t => r(s(c), R.translate(t, -.5, 1).scale(.14, .3, 6.5), 1275081650)),
              ),
            );
            u(s(c), R.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), 869059788),
              u(s(6), R.translate(7, -2.6, -4.5).scale(3.2, .8, 3), 867336089),
              m(R.translate(7, -1.4, -6).rotate(0, 180)),
              W(3, t => {
                u(K1, R.translate(12 * t + 14, -9), 1285134745),
                  u(K1, R.translate(46, -9, -12 * t - 8).rotate(0, 90), 1285134745);
              }),
              u(i(
                o(
                  r(s(12), R.translate(46, -13.9).scale(4, 18.2, 4), 867349170),
                  r(s(c), R.translate(44).scale(3.5, 2.2, 1.3), 865697638),
                  r(s(c), R.translate(46, 0, -2).scale(1.5, 2.2, 2), 865697638),
                  r(s(12), R.translate(46, 2.8).scale(3, 5, 3), 865697638),
                ),
              )),
              u(s(c), R.translate(7.5, -17).scale(.5, 15, 2.2), 1285134745),
              u(s(c), R.translate(46, -17, -38.5).scale(2.2, 15, .5), 1285134745),
              u(
                i(o(
                  n(
                    r(s(c), R.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    r(s(c), R.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...W(4, t => r(s(c), R.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...W(3, t => r(s(c), R.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                R,
                865697663,
              ),
              u(s(5), R.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), -10928321),
              A(t => {
                t.h = () => {
                  let t = Math.sin(1.1 * B);
                  return R.translate.call(R, 0, -2, q(Z[10].g, Z[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
                }, W(2, t => u(a, R.translate(13 + 9 * t + (1 & t), 1.7)));
              }),
              A(t => {
                t.h = () => {
                  let t = Math.sin(2.1 * B);
                  return R.translate.call(R, 0, -2, q(Z[10].g, Z[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
                }, W(2, t => u(a, R.translate(13 + 9 * (t + 2) + (1 & t), 1.7)));
              }),
              A(t => {
                t.h = () => {
                  let t = Math.sin(1.5 * B);
                  return R.translate.call(
                    R,
                    0,
                    -2,
                    -8.5 * L((1 - Z[10].g) * (1 - q(Z[10].g, Z[11].g)), q(Z[10].g, Z[11].g) * (t < 0 ? -t : t)) + 10,
                  );
                }, W(3, t => u(a, R.translate(17 + 9 * t, 1.7)));
              }),
              u(s(c), R.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), 1285134745),
              u(i(
                o(
                  r(s(c), R.translate(30, -5.8, -28).scale(9, 1, 5), 432852172),
                  r(s(9), R.translate(25, -5.8, -28).scale(3, 8, 3), 867349170),
                ),
              )),
              u(s(9), R.translate(25, -5.8, -28).scale(2.5, .9, 2.5), 1283424127),
              m(R.translate(25, -4.4, -28).rotate(0, 90));
          }),
          h(R.translate(-100, .7, 115), () => {
            u(i(
              o(
                n(
                  r(s(6, 0, 0, .6), R.translate(0, 0, -9.5).scale(8, 1, 11), 867349170),
                  r(s(c), R.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), 867349170),
                  r(s(c), R.translate(8.8, 0, -8).scale(3, 1, 3.3), 867349170),
                ),
                r(s(5), R.translate(0, 0, -2).scale(4, 3, 4), 867349170),
              ),
            )),
              W(4, a =>
                A(t => {
                  t.h = () => {
                    let t = q(Z[8].i, Z[12].i);
                    return R.translate(
                      2 < a ? 2 * (1 - t) + t : 0,
                      t * Math.sin(1.3 * B + 1.7 * a) * (3 + a / 3),
                      (1 & a ? -1 : 1) * (1 - Z[8].i) * (1 - Z[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * B + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    u(
                      s(6),
                      R.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      v(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              h(R.translate(-39.7, -2.5, -21.5), () => {
                A(t => {
                  t.h = () => {
                    let t = q(Z[8].i, Z[12].i);
                    return R.translate(2.5 * (1 - t), -3 * (1 - Z[8].g) + t * Math.sin(.8 * B) * -1).rotateSelf(
                      Math.cos(1.3 * B) * (3 * t + 3),
                      0,
                    );
                  },
                    u(i(o(r(s(10), R.scale(6, 2, 6), 1283430681), r(s(10), R.scale(3.3, 6, 3.3), 2139068697)))),
                    h(R.translate(-7.5).rotate(0, 90), () => {
                      u(s(15), R.scale(3, 2.3, 3), 1281779302),
                        u(s(10), R.scale(2, 2.5, 2), 1286786124),
                        u(s(5), R.scale(1, 3), 2139062143),
                        m(R.translate(0, 3.4).rotate(0, 180));
                    }),
                    M(R.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
                    [-1, 1].map(t =>
                      u(W1, R.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), 869072895)
                    );
                });
              }),
              [-1, 1].map(a => {
                u(s(15, 1), R.translate(-7.5 * a, 3, -19).scale(.8, 4, .8), 2134064537),
                  [7.2, 1.5].map(t => u(s(15, 1), R.translate(-7.5 * a, t, -19).scale(1.1, .5, 1.1), 1714634111)),
                  u(W1, R.translate(-5 * a, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), 13434879),
                  u(
                    i(o(
                      r(s(c), R.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), 1719631743),
                      r(s(c), R.scale(3, 3, 10), 2134064537),
                      r(s(30, 1), R.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), 2134064537),
                      r(s(5), R.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), 2134064537),
                      r(s(5), R.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), 2134064537),
                    )),
                    R.translate(a, 0, -18),
                  );
              }),
              A(t => (t.h = () => R.translate(0, -.1 - 6 * Z[12].g, -18.5).scale(.88, 1.2), e));
            let a = [
              ...r(s(28, 1), R.scale(8, 1, 8), 863138418),
              ...r(s(5), R.translate(0, 1).scale(1, .2), 860638284),
            ];
            h(R.translate(20, .3, -9), () => {
              A(t => {
                t.h = () => R.rotate(0, 40 + x),
                  u(i(
                    o(
                      r(s(28, 1), R.scale(8, 1, 8), 863138418),
                      r(s(c), R.translate(0, 0, -5.5).scale(1.5, 3, 2.5), 863138418),
                    ),
                  )),
                  u(s(8), R.translate(0, 2).scale(3, 1.5, 3), 431141554),
                  u(s(5), R.translate(0, 2).scale(1, 2), 860638284),
                  M(R.translate(0, 3), ...I(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
              });
            }),
              h(R.translate(36, .3, -9), () => {
                u(s(c), R.translate(8).scale(.7, .8, 2.5), 867349170),
                  A(t => {
                    t.h = () => R.rotate(0, o1),
                      u(i(
                        o(
                          r(s(28, 1), R.translate(0, 2).scale(8, 1, 8), 1275068505),
                          r(s(c), R.scale(9, 5, 2), 1275068492),
                        ),
                      )),
                      u(a),
                      [-1, 1].map(t =>
                        u(
                          W1,
                          R.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                          13434879,
                        )
                      );
                  });
              }),
              h(R.translate(52, .3, -9), () => {
                u(s(c), R.translate(0, 0, -8).scale(2.5, .8, .7), 867349170),
                  A(t => {
                    t.h = () => R.rotate(0, 180 - o1),
                      u(i(
                        o(
                          r(s(30, 1), R.translate(0, 2).scale(8, 1, 8), 1275068505),
                          r(s(c), R.translate(7).scale(9, 5, 2), 1275068492),
                          r(s(c), R.translate(0, 0, 7).scale(2, 5, 9), 1275068492),
                        ),
                      )),
                      u(a);
                  });
              }),
              h(R.translate(52, .3, -25), () => {
                A(t => {
                  t.h = () => R.rotate(0, 270 + o1),
                    u(i(
                      o(
                        r(s(30, 1), R.translate(0, 2).scale(8, 1, 8), 1275068505),
                        r(s(c), R.translate(7).scale(9, 5, 2), 1275068492),
                        r(s(c), R.translate(0, 0, -7).scale(2, 5, 9), 1275068492),
                      ),
                    )),
                    u(a);
                });
              }),
              u(s(c), R.translate(61, -.3, -25).scale(2, 1, 2), 1286779570),
              u(s(c), R.translate(68, -.3, -25).scale(5, 1, 3), 1286779570),
              m(R.translate(66, 2, -19).rotate(-12, 0)),
              u(s(5), R.translate(66, -.5, -19).scale(3, 2, 4).rotate(-20, 0), -1719697613),
              [863144985, 1283424051, 1720480332].map((a, e) =>
                A(t => {
                  t.h = () =>
                    R.translate(
                      0,
                      (1 - Z[13].i) * (1 - Z[14].i) * 3 + q(Z[13].i, Z[14].i) * Math.sin(1.5 * B + 1.5 * e) * 4,
                    ),
                    u(
                      s(c),
                      R.translate(76.5, e / 2 - 2.1, 7.5 * (1 - e / 30) * e - 25).scale(3.3, 3 - e / 2, 3.45 - e / 5),
                      a,
                    );
                })
              );
          }),
          h(R.translate(0, .9, 95), () => {
            u(s(c), R.translate(-9.7, -.2, 8.9).scale(10, 1, 2.5), 865704345),
              u(i(
                o(
                  r(s(6, 0, 0, .3), R.translate(0, -.92).scale(14, 2, 14), 869059788),
                  r(s(5), R.scale3d(6), 2135706700),
                ),
              )),
              [8, -6.1].map((a, e) =>
                W(
                  3,
                  t =>
                    u(K1, R.translate(6 * t - 6, a - (1 & t), 16 - .2 * (1 & t) - e), 1 & t ? 1283424127 : 2136562009),
                )
              ),
              [-1, 1].map(t => u(W1, R.translate(-8 * t, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), 13434879)),
              u(s(5), R.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), 1716276351),
              m(R.translate(0, 1.7, -13).rotate(0, 180)),
              u(i(
                o(
                  n(
                    r(s(c), R.translate(0, 16, 15.5).scale(12, 1, 3), 1716276351),
                    r(s(c), R.translate(0, 16, 16).scale(3, 1, 3.8), 1716276351),
                  ),
                  r(s(5), R.translate(0, 16, 8.5).scale(5.5, 5, 5.5), 1716276351),
                ),
              )),
              A(t => {
                t.h = () => {
                  let t = Math.sin(B);
                  return R.translate(-2 * t).rotate(0, 0, 25 * t);
                },
                  u(s(3), R.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), 1716276351),
                  [22, 30].map(t => {
                    u(s(6), R.translate(0, 16, t).scale(3, 1, 2.3).rotate(0, 90), 1722987186),
                      u(s(c), R.translate(0, 6.2, t).scale(.5, 11, .5), 1716276351);
                  });
              }),
              u(s(6), R.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), 1286773119),
              u(s(c), R.translate(0, 16, 34).scale(1.5, 1, 2), 1286773119),
              u(s(7), R.translate(0, 16.2, 38).scale(5, 1, 5), 1721335654),
              A(t => {
                t.h = () => {
                  let t = q((Z[14].g + Z[14].i) / 2, Z[13].i);
                  return t = q(t, (Z[15].g + Z[15].i) / 2), R.translate(0, 16 * t, 8.5 * X(2 * t - 1));
                },
                  u(s(5), R.scale(5, 1.1, 5), 1716276351),
                  u(s(5), R.scale(5.5, .9, 5.5), 1715420991),
                  m(R.translate(0, 1.5, -1).rotate(0, 180));
              });
          }),
          M(R.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          M(
            R.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...I(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
          ),
          M(R.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          M(R.translate(-89, .2, 80), [0, 0, 6]),
          M(R.translate(-38.9, -8.4, -21), [0, 0, 12]),
          M(R.translate(-115, .2, -12), [0, 0, 3.5]),
          M(R.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          M(R.translate(0, 3.9, 95), ...I(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
          M(R.translate(0, 19.9, 134), [0, 0, 3.5]);
      });
    })(),
    L1 = A(() => {
      R1 = [-1, 1].map(t =>
        A(() => {
          u(s(10, 1), R.translate(.3 * t, -.8).scale(.2, .7, .24), 6704383);
        })
      ),
        [0, 180].map(t => u(W1, R.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), 13434879)),
        u(j(20), R.translate(0, 1).scale(.5, .5, .5), 6704383);
      let a = r(
        i(o(s(15, 1), r(s(c), R.translate(0, 0, 1).scale(2, 2, .5)))),
        R.rotate(-90, 0).scale(.1, .05, .1),
        5000268,
      );
      [-1, 1].map(t => u(a, R.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
        u(s(c), R.translate(0, .9, .45).scale(.15, .02, .06), 5000268),
        u(j(20), R.scale(.7, .8, .55), 6704383);
    });
});
