let M,
  S,
  F,
  T,
  Z,
  l,
  $,
  e1 = 0,
  t1 = 0,
  D = 0,
  a1 = 0,
  l1 = 0,
  r1 = 0,
  o1 = 0,
  e = 0,
  x = 0,
  y = 0,
  s1 = 0,
  z = 0,
  H = 0,
  Q = 0,
  c1 = 0,
  w = 0,
  B = 0,
  k = 1,
  O = 180,
  P = .066,
  R = [],
  q = [],
  i1 = [],
  n1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  L = { x: 0, y: 0, z: 0 },
  f1 = { x: 0, y: 0, z: 0 },
  v = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  X = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  h1 = (e, t) => E(e) > t ? e : 0,
  N = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  n = (e, t) => (e = X(e), N(e, 1 - e, t)),
  m1 = e => O1(J(e *= q1), V(e)) / q1,
  u1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * X(a) || 0,
  g1 = ({ x: e, y: t, z: a }) => P1(e - L.x, t - L.y, a - L.z),
  h = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  x1 = e => {
    let t, a = 0, l = 0, r = 0, o = e.at(-1);
    for (t of e) a += (o.y - t.y) * (o.z + t.z), l += (o.z - t.z) * (o.x + t.x), r += (o.x - t.x) * (o.y + t.y), o = t;
    return t = P1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * o.x + l * o.y + r * o.z };
  },
  m = (
    e,
    t = Q1,
    a = 0,
  ) => (a *= 16,
    t[a++] = e.m11,
    t[a++] = e.m12,
    t[a++] = e.m13,
    t[a++] = e.m14,
    t[a++] = e.m21,
    t[a++] = e.m22,
    t[a++] = e.m23,
    t[a++] = e.m24,
    t[a++] = e.m31,
    t[a++] = e.m32,
    t[a++] = e.m33,
    t[a++] = e.m34,
    t[a++] = e.m41,
    t[a++] = e.m42,
    t[a++] = e.m43,
    t[a] = e.m44,
    t),
  y1 = (e, t, a, l) => [e, 0, 0, 0, 0, t, 0, 0, 0, 0, (l + a) / (a - l), -1, 0, 0, 2 * l * a / (a - l), 0],
  v1 = (e, t, a) => (e.D = a, e.A = t, e),
  z1 = (e, l, t = e.A) =>
    v1(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  f = (e, t, a) => e.map(e => z1(e, t, a)),
  d1 = (a, l = 0) =>
    v(a, e => {
      let t = V(2 * K * e / a);
      return { x: J(2 * K * e / a), y: 0, z: E(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  r = (l, r, o) =>
    l.map((e, t, { length: a }) => v1([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, o)),
  u = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? d1(e, l) : n1,
    l = z1(e, U(0, 1).scale3d(0 < a ? a : 1)),
    e = z1(e, U(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...r(e, l, t), l, e]),
  o = (l, r = l, o = (e, t) => (t *= K / r, { x: V(e *= 2 * K / l) * J(t), y: V(t), z: J(e) * J(t) })) => {
    let s = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = v1([], 0, 1);
        s.push(e),
          e.push(o(a, t, e)),
          t && e.push(o((a + 1) % l, t, e)),
          r - 1 > t && e.push(o((a + 1) % l, t + 1 % r, e)),
          e.push(o(a, t + 1 % r, e));
      }
    }
    return s;
  },
  i = (l, r) => {
    let o, s, c, i = r.C;
    for (let e = 0; i.length > e; ++e) {
      if ((o = h(l, i[e]) - l.w) < -8e-5 ? c = r : 8e-5 < o && (s = r), c && s) {
        s = [], c = [], i = r.C, e = r.B;
        let t = i.at(-1), a = h(l, t) - l.w;
        for (let e of i) {
          o = h(l, e) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && s.push(t),
            (8e-5 < a && o < -8e-5 || a < -8e-5 && 8e-5 < o)
            && (a /= o - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              s.push(t),
              c.push(t)),
            t = e,
            a = o;
        }
        return {
          o: 2 < s.length && { C: v1(s, i.A, i.D), B: e, u: r },
          m: 2 < c.length && { C: v1(c, i.A, i.D), B: e, u: r },
        };
      }
    }
    return { o: s, m: c };
  },
  s = (e, t, a = x1(t.C)) => {
    let l, r, o;
    return e
      ? ({ o: l, m: r } = i(e, t), l || r || e.s.push(t), l && (e.o = s(e.o, l, a)), r && (e.m = s(e.m, r, a)))
      : ({ x: l, y: r, z: a, w: o } = a, e = { x: l, y: r, z: a, w: o, s: [t], o: 0, m: 0 }),
      e;
  },
  a = (t, r, o) => {
    let s = [],
      c = (e, t) => {
        let { o: a, m: l } = i(e, t);
        a || l || (0 < o * h(e, r) ? a = t : l = t), a && (e.o ? c(e.o, a) : s.push(a)), l && e.m && c(e.m, l);
      };
    for (let e of r.s) c(t, e);
    return s;
  },
  c = (e, t) => e && (t(e), c(e.o, t), c(e.m, t)),
  p1 = e => e.length ? e.reduce((e, t) => s(e, { C: t, B: 0, u: 0 }), 0) : e,
  w1 = e => (c(e, t => {
    let e = t.m;
    t.m = t.o, t.o = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.s) e.B = !e.B;
  }),
    e),
  g = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = p1(l), t) {
        t = p1(t), c(l, e => e.s = a(t, e, 1)), c(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) s(l, e, t);
      }
      return l;
    }),
  d = (...e) => {
    let t,
      a = e => {
        let t;
        return e.u && ((t = l.get(e.u)) ? (r.delete(t), e = a(e.u)) : l.set(e.u, e)), e;
      },
      l = new Map(),
      r = new Map();
    return [e, ...t] = [...e],
      e = w1(g(w1(p1(e)), ...t)),
      c(e, t => {
        for (let e of t.s) r.set(a(e), e.B);
      }),
      Array.from(r, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return v1(t ? a.reverse() : a, e.A, e.D);
      });
  },
  A1 = () => {
    s1 = n(q[12].g, q[13].g),
      o1 = N(N(o1, 0, 1 - G(-1 * P)), m1(o1 + 60 * P), q[5].g - q[6].i),
      l1 = N(N(l1, 0, 1 - G(-5 * P)), m1(l1 + 56 * P), s1),
      r1 = N(N(r1, 0, 1 - G(-4 * P)), m1(r1 + 48 * P), s1),
      y = N(y, q[9].i, 1 - G(-(.2 + .3 * E(2 * q[9].i - 1)) * P)),
      x = N(x, e ? N(x, -9, 1 - G(-1.5 * P)) : X(D / 3), 1 - G(-1 * P)),
      k && D > k && (k = 0, h4.innerHTML = ""),
      q[0].l && .8 < q[0].g && (e1 < 13
        ? (1 / 0 > k && (k = D + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), q[0].l = 0)
        : e
          || (1 / 0 > k && (k = D + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            e = 1));
    for (let e of R) e.h && (e.j = e.h());
    for (let e of q) e.h();
    for (let e of i1) e.h();
  },
  I1 = () => {
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
      ][e1 = i1.reduce((e, { l: t }) => e + t, 0)] + " / XIII";
  },
  M1 = () => {
    localStorage.I = JSON.stringify([q.map(({ l: e }) => e), i1.map(({ l: e }) => e), a1, D, y]);
  },
  p = (e, t = 1) => {
    let a = l;
    return R.push(l = t = { j: H1, H: R.length, G: t, s: [] }), e(t), l = a, t;
  },
  b = (e, t = H1, a) => l.s.push(...f(e, t, a)),
  A = r => {
    let o = l,
      s = q.length,
      c = {
        l: 0,
        g: 0,
        i: 0,
        u: o,
        h() {
          let e = c.l, t = c.g, a = c.i, l = o.j.multiply(r);
          c.J = l,
            g1(l.transformPoint()) < 3 && F && (t < .3 || .7 < t)
            && (c.l = e ? 0 : 1, s && 1 / 0 > k && (k = D + 1, h4.innerHTML = "* click *"), a1 = s, M1()),
            c.g = N(t, e, 1 - G(-4 * P)),
            c.i = N(a, e, 1 - G(-1 * P)),
            c.j = l.rotate(60 * c.g - 30, 0).translateSelf(0, 1);
        },
      };
    q.push(c),
      b(u(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), C(.4, .5, .5)),
      b(u(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), C(.4, .5, .5)),
      b(u(), r.translate(0, -.4).scale(.5, .1, .5), C(.5, .5, .4));
  },
  I = (f, ...e) => {
    let h = -1,
      m = 0,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      A = {
        l: 0,
        h() {
          if (!A.l) {
            let e, t, a, l, r, o, s, c = 1, i = 1 / 0;
            for (let l of M) {
              let { x: e, z: t, w: a } = l;
              t = (e = P1(j - e, C - t)) - a, s ||= e < a, 0 < t && i > t && (i = t, Y = l), c = T1(c, e / a);
            }
            s
            || ({ x: e, z: t, w: a } = Y,
              l = j - e,
              r = C - t,
              o = P1(l, r),
              n = O1(-r, l),
              p && (u = (R1() - .5) * K / 2, b = X(b / (1 + R1()))),
              h = -V(n += u),
              m = J(n),
              .1 < o && (o = T1(o, a) / (o || 1), j = l * o + e, C = r * o + t)),
              p = s,
              b = N(b, 6 * (1 - c) + 3, 1 - G(-(c + 3) * P)),
              n = j = N(j, j + h, 1 - G(-b * P)),
              S = N(S, n, 1 - G(-b * P)),
              n = C = N(C, C + m, 1 - G(-b * P)),
              F = N(F, n, 1 - G(-b * P)),
              g = u1(g, O1(S - v, F - d) / q1 - 180, 1 - G(-3 * P)),
              v = S,
              d = F;
            var n = (A.j = I.j.multiply(f.translate(S, 0, F).rotateSelf(0, g, 7 * J(1.7 * D)))).transformPoint();
            g1(n) < 1.6
              && (A.l = 1,
                n = [
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
                ][e1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > k && (k = D + (e1 && e1 < 12 ? 5 : 7), h4.innerHTML = n),
                I1(),
                M1());
          }
          A.l
            && (A.j = R[2].j.translate(
              t % 4 * 1.2 - 1.7 + J(D + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + E(t % 4 - 2) + V(D / 1.5 + t) / 6,
            ));
        },
      },
      I = l,
      t = i1.length,
      M = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      Y = M[0],
      { x: j, z: C } = Y,
      S = j,
      F = C;
    i1.push(A);
  },
  Y1 = (e, t, a, l) => {
    let r = 0,
      o = 0,
      s = 0,
      c = 1 / 0,
      i = -1 / 0,
      n = 1 / 0,
      f = -1 / 0,
      h = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (a - t),
      g = new DOMMatrix(y1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, t, a)).multiplySelf(e).invertSelf();
    return t = v(
      8,
      e => (e = g.transformPoint({ x: 4 & e ? 1 : -1, y: 2 & e ? 1 : -1, z: 1 & e ? 1 : -1 }),
        r -= e.x = (u * e.x | 0) / u / e.w,
        o -= e.y = (u * e.y | 0) / u / e.w,
        s -= e.z = (u * e.z | 0) / u / e.w,
        e),
    ),
      a = Y(298, 139).translateSelf(r / 8, o / 8, s / 8),
      z1(t, a).map(({ x: e, y: t, z: a }) => {
        c = T1(c, e), i = W(i, e), n = T1(n, t), f = W(f, t), h = T1(h, a), m = W(m, a);
      }),
      h *= h < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      j(2 / (i - c), 2 / (f - n), 2 / (h - m)).translateSelf((i + c) / -2, (f + n) / -2, (h + m) / 2).multiplySelf(a);
  },
  j1 = (e, t = 35633) => (t = _.c6x(t), _.s3c(t, e), _.c6a(t), t),
  C1 = (e, t) => {
    let a = {}, l = _.c1h();
    return _.abz(l, e), _.abz(l, j1(t, 35632)), _.l8l(l), e => e ? a[e] || (a[e] = _.gan(l, e)) : _.u7y(l);
  },
  S1 = (e, t, a, l) => {
    if (M) {
      for (var r of (a = Y(0, 40 * J(t1) - 70), [37, 38, 39])) m(a, B1, r - 1);
      _.uae(e, !1, B1), _.d97(4, R[39].F - R[37].v, 5123, 2 * R[37].v);
    } else {
      for (r = 0; R.length > r; ++r) R[r].G && m(R[r].j, B1, r - 1);
      for (_.uae(e, !1, B1), _.d97(4, (t ? R[39].F : R[37].v) - 3, 5123, 6), t = 0; t < 13; ++t) m(i1[t].j, B1, t);
      for (t = 0; q.length > t; ++t) m(q[t].j, B1, t + 13), l || (B1[16 * (t + 13) + 15] = 1 - q[t].g);
      _.uae(e, !1, B1),
        _.das(4, R[a].F - R[a].v, 5123, 2 * R[a].v, 13),
        _.das(4, R[40].F - R[40].v, 5123, 2 * R[40].v, q.length);
    }
  },
  F1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  k1 = e => J(e * K * 2),
  T1 = (e, t) => e < t ? e : t,
  W = (e, t) => t < e ? e : t,
  E = e => e < 0 ? -e : e,
  U = (e, t, a) => H1.translate(e, t, a),
  Y = (e, t, a) => H1.rotate(e, t, a),
  j = (e, t, a) => H1.scale(e, t, a),
  C = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  D1 = new AudioContext(),
  H1 = new DOMMatrix(),
  Q1 = new Float32Array(16),
  B1 = new Float32Array(624),
  { PI: K, atan2: O1, sin: J, cos: V, hypot: P1, exp: G, random: R1 } = Math,
  q1 = K / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  L1 = D1.createBufferSource(),
  _ = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in _) _[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = _[e];
F1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let l = e => {
            let t;
            _.f1s(),
              requestAnimationFrame(l),
              t1 += a = (e - (S || e)) / 1e3,
              D += P = M ? 0 : T1(.066, a),
              S = e,
              0 < P
              && (Z(),
                A1(),
                $(),
                s(),
                _.b6o(36160, f),
                _.v5y(0, 0, 128, 128),
                _.c4s(16640),
                _.cbf(!0, !1, !0, !1),
                { x: a, y: e, z: t } = L,
                _.uae(s("b"), !1, m(Y(0, 180).invertSelf().translateSelf(-a, -e, .3 - t))),
                S1(s("c"), 0, 41, 0),
                _.c4s(256),
                _.cbf(!1, !0, !0, !1),
                _.uae(s("b"), !1, m(U(-a, -e, -t - .3))),
                S1(s("c"), 0, 41, 0),
                _.f1s()),
              F = 0;
            var a = M
              ? Y(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : Y(-B, -O).invertSelf().translateSelf(-Q, -c1, -w);
            r(),
              _.b6o(36160, n),
              _.v5y(0, 0, 2048, 2048),
              i[0](Y1(a, .3, 55, 10)),
              i[1](Y1(a, 55, 186, 11)),
              c(),
              _.b6o(36160, null),
              _.v5y(0, 0, _.drawingBufferWidth, _.drawingBufferHeight),
              _.cbf(!0, !0, !0, !0),
              _.c4s(16640),
              i[0](),
              i[1](),
              _.uae(c("a"), !1, y1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 186)),
              _.uae(c("b"), !1, m(a)),
              _.ubu(c("k"), Q, c1, w),
              S1(c("c"), !T, 42, 0),
              o(),
              _.ubu(o("j"), _.drawingBufferWidth, _.drawingBufferHeight, t1),
              _.ubu(o("k"), Q, c1, w),
              _.uae(o("b"), !1, m(a.inverse())),
              _.d97(4, 3, 5123, 0),
              _.b6o(36160, f),
              _.f1s();
          },
          e = h,
          t = j1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          r = C1(
            j1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          o = C1(
            j1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          s = C1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          c = C1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          i = v(2, t => {
            let a = new Float32Array(16), l = _.c25();
            return _.a4v(33984 + t),
              _.b9j(3553, l),
              _.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              _.t2z(3553, 10241, 9729),
              _.t2z(3553, 10240, 9729),
              _.t2z(3553, 34893, 515),
              _.t2z(3553, 34892, 34894),
              _.t2z(3553, 10243, 33071),
              _.t2z(3553, 10242, 33071),
              e => {
                e
                  ? (m(e, a), _.uae(r("b"), !1, a), _.fas(36160, 36096, 3553, l, 0), _.c4s(256), S1(r("c"), !T, 42, 1))
                  : _.uae(c(t ? "j" : "i"), !1, a);
              };
          }),
          n = _.c5w(),
          f = (t = _.c3z(), _.c5w()),
          a = _.c25();
        s(),
          _.uae(s("a"), !1, y1(1.4, .59, 1e-4, 1)),
          c(),
          _.ubh(c("q"), 2),
          _.ubh(c("h"), 1),
          _.ubh(c("g"), 0),
          o(),
          _.ubh(o("q"), 2),
          _.b6o(36160, n),
          _.d45([0]),
          _.r9l(0),
          _.b6o(36160, f),
          _.bb1(36161, t),
          _.r4v(36161, 33189, 128, 128),
          _.f8w(36160, 36096, 36161, t),
          _.a4v(33986),
          _.b9j(3553, a),
          _.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          _.fas(36160, 36064, 3553, a, 0),
          _.b9j(3553, _.c25()),
          _.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          _.gbn(3553),
          _.t2z(3553, 10241, 9987),
          _.t2z(3553, 10240, 9729),
          _.e8z(2929),
          _.e8z(2884),
          _.c70(1),
          _.c7a(1029),
          _.d4n(515),
          _.c5t(0, 0, 0, 1),
          A1(),
          (() => {
            let e,
              n,
              f,
              h,
              m,
              u,
              g,
              v,
              d,
              p,
              b,
              s,
              A,
              I,
              t = !0,
              c = [],
              a = () => {
                M || !t ? L1.disconnect() : L1.connect(D1.destination), b4.innerHTML = "Music: " + t;
              },
              l = () => {
                h = v = void 0,
                  c.length =
                    F =
                    s =
                    H =
                    A =
                    I =
                      0,
                  hC.width = innerWidth,
                  hC.height = innerHeight,
                  document.hidden && i(!0);
              },
              i = (e, t = 0) => {
                if (M !== e) {
                  M = e, T = t, l(), I1(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), L1.start());
                  } catch {}
                  a();
                }
              };
            oncontextmenu = () => !1,
              b1.onclick = () => i(!1),
              b2.onclick = () => i(!1, 1),
              b5.onclick = () => i(!0),
              b4.onclick = () => {
                t = !t, a();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.I = "", location.reload());
              },
              onclick = e => {
                if (!M && (e.target === hC && (F = 1), T)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let t;
                e.repeat
                  || (t = !!e.type[5] && !0,
                    (c[
                      e = {
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
                      }[e.code]
                    ] = t) && (0 === e && (F = 1), 5 === e && i(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                T && (e || t) && (O += .1 * e, B += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    T && e > hC.clientWidth / 2
                      ? void 0 === v && (d = 0, u = e, g = t, v = a, p = O, b = B)
                      : void 0 === h && (m = 0, n = e, f = t, h = a);
                  }
                  e = t1;
                }
              },
              hC.ontouchmove = l => {
                let r, o, s, c, i;
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    v === a && (O = p + (e - u) / 2.3, B = b + (t - g) / 2.3, d = 1),
                      h === a
                      && (a = (n - e) / 20,
                        r = (f - t) / 20,
                        o = E(a),
                        s = E(r),
                        c = O1(r, a),
                        i = X(P1(r, a) - .5),
                        A = .2 < o ? V(c) * i : 0,
                        I = .2 < s ? J(c) * i : 0,
                        (A || I) && (m = 1),
                        2 < o && (n = e + 20 * (a < 0 ? -1 : 1)),
                        2 < s && (f = t + 20 * (r < 0 ? -1 : 1)));
                  }
                }
              },
              hC.ontouchend = t => {
                let a;
                document.activeElement === document.body && t.preventDefault();
                for (let e of t.changedTouches) {
                  e.identifier === v
                    ? (v = void 0, d || (a = 1), d = 0)
                    : e.identifier === h
                    ? (h = void 0, I = A = 0, m || (a = 1), m = 0)
                    : a = 1;
                }
                t.target === hC && a && e && .02 < (t = t1 - e) && t < .7 && (c[0] = !0);
              },
              Z = () => {
                let l = I + (c[3] ? 1 : 0) - (c[4] ? 1 : 0),
                  r = A + (c[1] ? 1 : 0) - (c[2] ? 1 : 0),
                  o = navigator.getGamepads()[0];
                if (o) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = o.buttons, a = o.axes;
                  o = e(3) || e(2) || e(1) || e(0),
                    l += e(12) - e(13) - h1(a[1], .2),
                    r += e(14) - e(15) - h1(a[0], .2),
                    e(9) && i(!0),
                    T && (B += P * h1(a[3], .3) * 80, O += P * h1(a[2], .3) * 80),
                    o && !s && (F = 1),
                    s = o;
                }
                z = O1(l, r), H = h1(X(P1(l, r)), .05);
              },
              document.onvisibilitychange = onblur = onresize = l,
              i(!0);
          })(),
          (() => {
            let r,
              c,
              o,
              i,
              s,
              n,
              f,
              h,
              m,
              u,
              g,
              v,
              d,
              p,
              b,
              A,
              I,
              M = 1,
              Y = 2,
              j = 2,
              C = () => Y ? q[a1].u.j : o && 1 === R[o].G && R[o].j || H1,
              S = (e, t, a, l) => N(e, t, M || (X(E(t - e) ** .9 - a) + 1 / 7) * (1 - G(-1.5 * l * P))),
              F = new Int32Array(256),
              k = new Uint8Array(65536);
            $ = () => {
              let t;
              _.fa7(),
                _.r9r(0, 0, 128, 128, 6408, 5121, k),
                _.iay(36008, [36064, 36096]),
                _.iay(36009, [36064, 36096]),
                (() => {
                  u = m = 0;
                  for (let e = 32; e < 128; e += 2) {
                    let s = 0, c = 0, i = 0, n = 0, f = 512 * e;
                    for (let o = 1 & e; o < 128; o += 2) {
                      let e = f + 4 * o,
                        t = f + 4 * (127 - o),
                        a = k[e] / 255,
                        l = k[1 + t] / 255,
                        r = 1 - E(o / 63.5 - 1);
                      10 < o && o < 118 && (s = W(W(a * r, a * k[t] / 255), s), c = W(W(l * r, l * k[1 + e] / 255), c)),
                        (o < 54 || 74 < o) && .001 < (t = (1 - r) * W(a, l) / 3)
                        && (o < 64 && t > i ? i = t : 64 < o && t > n && (n = t));
                    }
                    E(n - i) > E(m) && (m = n - i), E(c - s) > E(u) && (u = c - s);
                  }
                })(),
                (() => {
                  let o = 0, s = 0, t = 0, a = 0;
                  i = 0, F.fill(0);
                  for (let e = 0; e < 31; ++e) {
                    let l = 0, r = 512 * e;
                    for (let a = 0; a < 128; a++) {
                      let e = r + 4 * a, t = (k[e] + k[1 + e]) / 255;
                      e = k[2 + e],
                        14 < a && a < 114 && (l += t),
                        e && t && (t = F[e] + 1, F[e] = t, o > t || (o = t, s = e));
                    }
                    l < 3 && 5 < e && (t += e / 32), 3 < l && (7 < e && (a += e / 15), i = 1);
                  }
                  s && (i = 1),
                    r = s || c,
                    c = s,
                    j = N(j, i ? 6.5 : f1.y < -20 ? 11 : 8, 1 - G(-4 * P)),
                    f1.y += a / 41 - (i || j) * t / 41 * j * P;
                })(),
                t = X(1 - 5 * W(E(m), E(u))),
                l = T ? O * q1 : K,
                d = N(d, i * t * X(2 * H) * 7, 1 - G(-(i ? .1 < t ? 10 : 5 + 2 * H : 1) * P)),
                g = N(g, 0, 1 - G(-(i ? 8 : 4) * P)),
                m += P * ((r ? 0 : t * g) - V(z + l) * H * d),
                v = N(v, 0, 1 - G(-(i ? 8 : 4) * P)),
                u += P * ((r ? 0 : t * v) - J(z + l) * H * d),
                t = C();
              var { x: e, y: a, z: l } = 1 < Y
                ? q[a1].J.transformPoint({ x: 0, y: a1 || .9 < x ? 15 : 1, z: -2.4 })
                : ((e = (l = t).inverse()).m41 = e.m42 = e.m43 = 0,
                  a = e.transformPoint({ x: m, z: u, w: 0 }),
                  f1.x += a.x,
                  f1.z += a.z,
                  l.transformPoint(f1));
              if (
                r && (g = (e - L.x) / P, v = (l - L.z) / P),
                  L.x = e,
                  L.y = a,
                  L.z = l,
                  (Y = Y && (i && r ? 0 : 1)) || r !== o
              ) {
                o = r;
                let e = (t = C()).inverse().transformPoint(L);
                f1.x = e.x, f1.y = e.y, f1.z = e.z;
              }
              for (
                h = N(h, s1 * (27 < r && r < 32), 1 - G(-2 * P)),
                  a < (e < -25 || l < 109 ? -25 : -9) && (g = v = d = 0, Y = 2),
                  1 === r && (q[9].l = e < -15 && l < 0 ? 1 : 0),
                  p = N(N(p, a, 1 - G(-2 * P)), a, Y || 8 * E(p - a)),
                  A = S(A, p, 2, 1),
                  b = S(b, e, .5, 1),
                  I = S(I, l, .5, 1),
                  T
                    ? (t = Y + (1 - G(-18 * P)), Q = N(Q, e, t), c1 = N(c1, p + 1.5, t), w = N(w, l, t), O = m1(O))
                    : (c1 = S(c1, W(A + X((-60 - l) / 8, 0, 20) + 13 + 9 * h, 6), 4, 2),
                      w = S(w, I + -18 + 5 * h, 1, 2 + h),
                      Q = S(Q, b, 1, 2 + h),
                      a = T1(4, -E(I - w)),
                      O = u1(O, 90 - m1(O1(a, t = b - Q) / q1), M + (1 - G(-6 * P))),
                      B = u1(B, 90 - O1(P1(a, t), c1 - A) / q1, M + (1 - G(-6 * P)))),
                  B = X(B, -87, 87),
                  n = u1(n, s, 1 - G(-8 * P)),
                  f = N(f, H, 1 - G(-10 * P)),
                  H && (s = 90 - z / q1),
                  M = 0,
                  R[37].j = U(e, p, l).rotateSelf(0, n),
                  t = 0;
                t < 2;
                ++t
              ) {
                R[38 + t].j = R[37].j.translate(0, f * X(.45 * J(9.1 * D + K * (t - 1) - K / 2))).rotateSelf(
                  f * J(9.1 * D + K * (t - 1)) * .25 / q1,
                  0,
                );
              }
            };
          })(),
          requestAnimationFrame(l);
      }
    },
    h = new Image();
  h.onload = h.onerror = a,
    h.src = t,
    (r => {
      let X = 0,
        o = () => {
          let b = 0,
            e = h => {
              let r,
                m,
                o,
                u,
                s,
                c,
                i = 0,
                n = 0,
                g = [],
                f = new Int32Array(768 * h),
                v = 2 ** (a - 9) / h,
                d = K * 2 ** (l - 8) / h,
                p = R * h & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, t = +"000001234556112341234556011111111112011111111112000001111112"[12 * X + l];
                  e < 32;
                  ++e
                ) {
                  let a = (32 * l + e) * h;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, t && (u = A[t - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(m = g[u])) {
                        let l,
                          r,
                          o = 0,
                          s = 0,
                          c = m = u,
                          i = X < 2
                            ? e => e % 1 * 2 - 1
                            : k1,
                          n = X < 2
                            ? X < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : k1,
                          f = new Int32Array(k + T + L);
                        for (let t = 0, a = 0; k + T + L > t; ++t, ++a) {
                          let e = 1;
                          k > t ? e = t / k : k + T > t || (e = (1 - (e = (t - k - T) / L)) * 3 ** (-D / 16 * e)),
                            a < 0
                            || (a -= 4 * h,
                              r = .00396 * 2 ** ((c + M - 256) / 12),
                              l = .00396 * 2 ** ((c + C - 256) / 12) * (1 + (X ? 0 : .0072))),
                            f[t] = 80
                                * (i(o += r * e ** (Y / 32)) * I + n(s += l * e ** (S / 32)) * j
                                  + (F ? (2 * R1() - 1) * F : 0))
                                * e | 0;
                        }
                        m = g[m] = f;
                      }
                      for (let e = 0, t = 2 * a; m.length > e; ++e, t += 2) f[t] += m[e];
                    }
                  }
                  for (let e, t = 0; h > t; ++t) {
                    r = 0,
                      m = 2 * (a + t),
                      ((e = f[m]) || c)
                      && (s = .00308 * H,
                        1 !== X && 4 !== X || (s *= J(v * m * K * 2) * q / 512 + .5),
                        s = 1.5 * J(s),
                        i += s * n,
                        n += s * (o = (1 - Q / 255) * (e - n) - i),
                        e = 4 === X ? n : 3 === X ? o : i,
                        X || (e = (e *= 22e-5) < 1 ? -1 < e ? J(e / 4 * K * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (o = J(d * m) * O / 512 + .5)),
                        e *= o),
                      p > m || (r += f[1 + m - p] * P / 255, e += f[m - p] * P / 255),
                      N[o = b + m >> 1] += (f[m] = r) / 65536,
                      W[o] += (f[++m] = e) / 65536;
                  }
                }
              }
              b += 768 * h;
            },
            A = [
              [
                "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
                "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
                "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
                "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
                "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
                "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
              ],
              [
                ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
                "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
                ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
                "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
                "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
                "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
              ],
              ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
              ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
              ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
            ][X],
            [I, M, Y, j, C, S, F, k, T, t, D, a, H, Q, B, O, l, P, R, q] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][X],
            L = 4 * t ** 2;
          e(5513), e(4562), e(3891), F1(++X < 5 ? o : r);
        },
        e = D1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        W = e.getChannelData(1);
      L1.buffer = e, L1.loop = !0, F1(o);
    })(() => {
      F1(() => {
        let o,
          t = 0,
          l = [],
          s = [],
          c = [],
          i = [],
          r = e => {
            let { x: t, y: a, z: l } = o[e], r = (m[0] = t, m[1] = a, m[2] = l, f.get(e = "" + (o.D ? h : n)));
            return void 0 !== r
              ? (t = 3 * r, i[t] = (i[t++] + n[5]) / 2, i[t] = (i[t++] + n[6]) / 2, i[t] = (i[t] + n[7]) / 2)
              : (f.set(e, r = f.size), s.push(t, a, l, m[3]), c.push(n[4]), i.push(n[5], n[6], n[7])),
              r;
          },
          n = new Int32Array(8),
          f = new Map(),
          h = new Int32Array(n.buffer, 0, 5),
          m = new Float32Array(n.buffer);
        for (let e of R) {
          for (o of (m[3] = 40 === e.H ? -14 : e.G && e.H, e.s)) {
            let { x: e, y: t, z: a } = x1(o);
            n[4] = 0 | o.A, n[5] = 32767 * e, n[6] = 32767 * t, n[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); o.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.s = null, e.v = t, e.F = t = l.length;
        }
        _.b11(34962, _.c1b()),
          _.b2v(34962, new Float32Array(s), 35044),
          _.v7s(0, 4, 5126, !1, 0, 0),
          _.b11(34962, _.c1b()),
          _.b2v(34962, new Int16Array(i), 35044),
          _.v7s(1, 3, 5122, !0, 0, 0),
          _.b11(34962, _.c1b()),
          _.b2v(34962, new Uint32Array(c), 35044),
          _.v7s(2, 4, 5121, !0, 0, 0),
          _.b11(34963, _.c1b()),
          _.b2v(34963, new Uint16Array(l), 35044),
          _.e3x(0),
          _.e3x(1),
          _.e3x(2),
          F1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.I);
          q.map((e, t) => e.g = e.i = e.l = t ? 0 | a[t] : 0), i1.map((e, t) => e.l = 0 | l[t]), a1 = e, D = t, y = r;
        } catch {}
        x = X(a1);
      });
      let t = v(11, e => U(J(e / 10 * K), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        i = v(10, e => r(z1(d1(18), t[e]).reverse(), z1(d1(18), t[e + 1]), 1)).flat();
      p(() => b([n1.slice(1)], U(-2).scale3d(3).rotate(90, 0)), 0),
        p(() => {
          let e = (t, a, l) =>
              p(e => {
                e.h = () => U(r() * J(3 * t + D * t) * a),
                  n1.map(({ x: e, z: t }) => {
                    b(u(11, 1), U(4 * e, 4, l + 4 * t).scale(.8, 3, .8), C(.5, .3, .7, .6)),
                      b(u(), U(4 * e, 7, l + 4 * t).scale(1, .3), C(.5, .5, .5, .3));
                  }),
                  b(d(
                    f(u(), U(0, 0, l).scale(5, 1, 5), C(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => f(u(), U(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), C(.8, .8, .8, .3))),
                  )),
                  b(u(), U(0, -3, l).scale(8, 2, 8), C(.4, .4, .4, .3));
              }),
            t = (e, t, a) => U(e + J(D + 2) / 5, t + J(.8 * D) / 3, a).rotateSelf(2 * J(D), J(.7 * D), J(.9 * D)),
            a = e =>
              d(
                f(u(), U(0, -e / 2).scale(6, e - 1, 2.2)),
                f(u(), U(0, -e / 2 - 6).scale(4, e - 3, 4)),
                f(u(32, 1), U(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => T1(q[2].i, 1 - q[4].i),
            l = d(
              f(u(20, 1, 1.15, 1), U(0, -3).scale(3.5, 1, 3.5), C(.7, .4, .25, .7)),
              f(u(20, 1, 1.3, 1), U(0, -2.5).scale(2.6, 1, 3), C(.7, .4, .25, .2)),
              f(u(), U(4, -1.2).scale3d(2), C(.7, .4, .25, .3)),
            ),
            o = v(7, e => f(u(6, 1), U(4 * (e / 6 - .5), 3).scale(.2, 3, .2), C(.3, .3, .38))).flat(),
            s = (p(e => {
              e.h = () => t(-12, 4.2, 40 * x - 66), b(l), A(U(0, -3, 4));
            }),
              A(U(-5.4, 1.5, -19).rotate(0, -90)),
              I(U(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              I(U(0, 2.8), [5, 10, 3], [-5, 10, 3], ...d1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * E(e)])),
              b(u(), U(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), C(.8, .8, .8, .2)),
              n1.map(({ x: e, z: t }) => b(u(6), U(3 * e, 3, 15 * t).scale(.7, 4, .7), C(.6, .3, .3, .4))),
              [-23, 22].map(e => b(u(), U(0, 0, e).scale(3, 1, 8), C(.9, .9, .9, .2))),
              [-15, 15].map((t, a) => {
                b(u(), U(0, 6.3, t).scale(4, .3, 1), C(.3, .3, .3, .4)),
                  b(u(), U(0, 1, t).scale(3, .2, .35), C(.5, .5, .5, .3)),
                  p(e => {
                    e.h = () => U(0, 0, t).scale(1, X(1.22 - q[a + 1].g), 1), b(o);
                  });
              }),
              v(5, t =>
                v(2, e =>
                  b(
                    i,
                    U(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    C(1, 1, .8, .2),
                  ))),
              b(u(), U(3, 1.5, -20).scale(.5, 2, 5), C(.7, .7, .7, .2)),
              b(u(), U(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), C(.75, .75, .75, .2)),
              b(u(5), U(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), C(.6, .3, .3, .4)),
              b(u(), Y(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), C(.8, .2, .2, .5)),
              b(d(
                g(
                  f(u(6, 0, 0, .3), U(8, -3, -4).scale(13, 1, 13), C(.7, .7, .7, .2)),
                  f(u(6), U(0, -8).scale(9, 8, 8), C(.4, .2, .5, .5)),
                  f(u(6, 0, 0, .3), U(0, -.92).scale(13, 2, 13), C(.8, .8, .8, .2)),
                ),
                f(u(5), j(5, 30, 5), C(.4, .2, .6, .5)),
                f(u(5, 0, 1.5), U(0, 1).scale(4.5, .3, 4.5), C(.7, .5, .9, .2)),
                f(u(), Y(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), C(.5, .5, .5, .5)),
                f(u(6), U(15, -1.5, 4).scale(3.5, 1, 3.5), C(.5, .5, .5, .5)),
              )),
              p(e => {
                e.h = () =>
                  U(0, .01 < q[3].g ? (5 * V(1.5 * D) + 2) * q[3].i * (1 - q[2].g) + -15 * (1 - q[3].g) : -500, 0),
                  b(u(5), U(0, -.2).scale(5, 1, 5), C(.6, .65, .7, .3)),
                  A(U(0, 1.2));
              }),
              A(U(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              p(e => {
                e.h = () => U(r() * J(D / 1.5 + 2) * 12),
                  b(
                    d(
                      g(
                        f(u(), j(1.5, 1, 5), C(.9, .9, .9, .2)),
                        f(u(6), j(4, 1, 5), C(.9, .9, .9, .2)),
                        f(u(), U(0, -2).scale(2, 3.2, 1.9), C(.3, .8, .5, .5)),
                        f(u(16, 1, 0, 4), j(1, 1, 1.5).rotate(0, 90), C(.9, .9, .9, .2)),
                      ),
                      f(u(), j(1.3, 10, 1.3), C(.2, .7, .4, .6)),
                    ),
                    U(0, 0, 45),
                  ),
                  I(U(0, 2.8, 45), [0, 0, 4.5]);
              }),
              b(u(), U(-18.65, -3, 55).scale(2.45, 1.4, 2.7), C(.9, .9, .9, .2)),
              p(e => {
                e.h = () => U(9.8 * (1 - r())),
                  b(u(3), U(-23, -1.7, 55.8).scale(5, .7, 8.3), C(.3, .6, .6, .2)),
                  b(u(8), U(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), C(.8, .8, .8, .2)),
                  b(u(), U(-23, -3, 55).scale(5.2, 1.7, 3), C(.5, .5, .5, .3)),
                  b(u(), U(-23, -2.2, 62).scale(3, 1, 4), C(.5, .5, .5, .3)),
                  A(U(-23, -.5, 66.5));
              }),
              p(e => {
                e.h = () => U(0, X(1 - 5 * r()) * n(q[4].g, q[5].g) * J(1.35 * D) * 4),
                  b(u(), U(-22.55, -3, 55).scale(1.45, 1.4, 2.7), C(.7, .7, .7, .2)),
                  b(d(f(u(), j(3, 1.4, 2.7)), f(u(), j(1.2, 8, 1.2))), U(-33, -3, 55), C(.7, .7, .7, .2));
              }),
              p(e => {
                e.h = () => U(0, 0, X(1 - 5 * r()) * n(q[4].g, q[5].g) * J(.9 * D) * 8),
                  b(d(
                    f(u(), U(-27, -3, 55).scale(3, 1.4, 2.7), C(.9, .9, .9, .2)),
                    f(u(), U(-27, -3, 55).scale(1, 3), C(.9, .9, .9, .2)),
                  )),
                  b(u(), U(-39, -3, 55).scale(3, 1.4, 2.7), C(.9, .9, .9, .2));
              }),
              p(e => {
                e.h = () => U(0, -6.5 * q[4].i),
                  b(u(6), U(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), C(.7, .7, .7, .4));
              }),
              A(U(-55, -1.1, 46).rotate(0, 90)),
              b(u(6), U(-61.3, -2.4, 49).scale(3, 1, 5), C(.4, .6, .6, .3)),
              b(u(7), U(-57, -2.6, 46).scale(4, 1, 4), C(.8, .8, .8, .3)),
              [
                ...f(u(), U(0, -3).scale(11, 1.4, 3), C(.9, .9, .9, .2)),
                ...d(
                  f(u(6), Y(90).scale(6, 8, 6), C(.3, .6, .6, .3)),
                  f(u(4, 0, .01), U(0, 6).scale(12, 2, .75).rotate(0, 45), C(.3, .6, .6, .3)),
                  f(u(6), Y(90).scale(5, 12, 5), C(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => f(u(5), U(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), C(.3, .6, .6, .3))),
                ),
              ]),
            c = (b(s, U(-53, 0, 55)),
              p(e => {
                e.h = () => U(-75, (1 - q[5].i) * (1 - q[6].g) * 3, 55).rotate(180 * (1 - q[5].i) + o1, 0), b(s);
              }, 2),
              b(u(), U(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), C(.7, .7, .7, .2)),
              b(u(3, 0, -.5), U(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), C(.8, .8, .8, .2)),
              b(d(
                g(
                  f(u(), U(-100, -2.5, 55).scale(8, 1, 8), C(.8, .8, .8, .2)),
                  f(u(), U(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), C(.8, .8, .8, .2)),
                  f(u(), U(-100, -2.6, 70).scale(3, 1.1, 7), C(.8, .8, .8, .2)),
                  f(u(), U(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), C(.8, .8, .8, .2)),
                  f(u(6), U(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), C(.6, .6, .6, .3)),
                  f(u(), U(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), C(.8, .8, .8, .2)),
                  f(u(), U(-100, .42, 92).scale(3, 1.1, 4.1), C(.8, .8, .8, .2)),
                ),
                f(u(8), U(-100, -1, 55).scale(7, .9, 7), C(.3, .3, .3, .4)),
                f(u(8), U(-100, -2, 55).scale(4, .3, 4), C(.4, .4, .4, .5)),
                f(u(8), U(-100, -3, 55).scale(.6, 1, .6), C(.4, .4, .4, .5)),
              )),
              I(U(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              I(U(-89, .2, 80), [0, 0, 6]),
              b(d(
                f(u(), U(-100, 1, 63).scale(7.5, 4), C(.5, .5, .5, .4)),
                f(u(), U(-100, 0, 70).scale(2, 2, 10), C(.5, .5, .5, .4)),
                f(u(20, 1), U(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), C(.5, .5, .5, .4)),
              )),
              p(e => {
                e.h = () => U(-99.7, -1.9, 63.5).scale(1, X(1.1 - q[6].g), 1), b(o);
              }),
              n1.map(({ x: t, z: a }) => {
                b(u(6), U(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), C(.6, .15, .15, .8)),
                  [4, -.4].map(e => b(u(6), U(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), C(.4, .2, .2, .8)));
              }),
              v(7, e => {
                b(
                  u((23 * e + 1) % 5 + 5, 0, .55),
                  U(5 * J(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  C(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              b(u(), U(-87, -9.5, 24).scale(7, 1, 3), C(.4, .5, .6, .4)),
              b(u(4), U(-86, -9.2, 27).scale(5, 1, 5), C(.5, .6, .7, .3)),
              b(u(12, 1), U(-86, -9, 31).scale(1.5, 1, 1.5), C(.3, .3, .4, .1)),
              A(U(-86, -7.5, 31)),
              p(e => {
                e.h = () => U(0, 3.5 * (1 - W(q[6].g, q[7].g)) + n(q[7].i, q[6].i) * J(D) * 5),
                  [0, 12, 24].map(e => b(u(), U(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), C(.2, .5, .6, .2)));
              }),
              p(e => {
                e.h = () => U(0, n(q[7].i, q[6].i) * J(D + 3) * 6, 6 * J(.6 * D + 1) * n(q[7].i, q[6].i)),
                  [6, 18].map(e => b(u(), U(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), C(.1, .4, .5, .2)));
              }),
              b(
                d(
                  g(
                    f(u(5), U(0, 0, -7).scale(2, 1.2, 2), C(.2, .4, .7, .3)),
                    f(u(5), j(9, 1.2, 9), C(0, .2, .3, .5)),
                    f(u(), j(11, 1, 13), C(.3, .4, .6, .3)),
                  ),
                  f(u(5), j(5.4, 5, 5.4), C(0, .2, .3, .5)),
                ),
                U(-38.9, -11.3, 17),
              ),
              A(U(-38.9, -9.6, 10)),
              p(e => {
                e.h = () => U(0, -7.3 * q[7].i),
                  b(
                    d(
                      g(
                        f(u(5), U(0, 2).scale(5, 7, 5).skewY(8), C(.2, .4, .5, .5)),
                        f(u(5), U(0, 6).scale(1.1, 7, 1.1).skewY(-8), C(.25, .35, .5, .5)),
                        f(u(5), U(0, 9).scale(.6, 7, .6).skewY(8), C(.35, .3, .5, .5)),
                      ),
                      f(u(5), j(4, 8, 4), C(.2, .4, .5, .5)),
                      f(u(5), U(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), C(.2, .4, .5, .5)),
                    ),
                    U(-38.9, -11.3, 17),
                  ),
                  I(U(-39.1, -.6, 17).rotate(11), ...d1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              n1.map(({ x: t, z: a }) => {
                b(u(14, 1), U(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), C(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    b(u(17, 1), U(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), C(.6, .6, .6, .3))
                  );
              }),
              b(
                d(
                  g(
                    f(u(6), U(0, 0, -36).scale(15, 1.2, 15), C(.7, .7, .7, .3)),
                    f(u(), U(0, 0, -18).scale(4, 1.2, 6), C(.45, .4, .6, .3)),
                  ),
                  ...v(6, t =>
                    v(6, e =>
                      f(
                        u(6),
                        U(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * J(4 * e)).scale(2, 5, 2),
                        C(.7, .7, .7, .3),
                      ))).flat(),
                ),
                U(-38.9, -11.3, 17),
              ),
              I(U(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              b(u(5), U(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), C(.8, .1, .25, .4)),
              A(U(-84, -.5, 85).rotate(0, 45)),
              p(e => {
                e.h = () => t(-123, 1.4, 55 + -65 * y), b(l), A(U(0, -3, -4).rotate(0, 180));
              }),
              d(
                f(u(), U(0, -.5, 1).scale(1.15, 1.2, 6.5), C(.25, .25, .35, .3)),
                f(u(3), U(0, 0, -5.5).scale(3, 2), C(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => f(u(), U(e, -.5, 1).scale(.14, .3, 6.5), C(.7, .2, 0, .3))),
              ));
          p(e => {
            e.h = () => U(0, -2, n(q[10].g, q[11].g) * E(J(1.1 * D)) * -8.5 + 10),
              v(2, e => b(c, U(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            p(e => {
              e.h = () => U(0, -2, n(q[10].g, q[11].g) * E(J(2.1 * D)) * -8.5 + 10),
                v(2, e => b(c, U(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            p(e => {
              e.h = () =>
                U(0, -2, -8.5 * W((1 - q[10].g) * (1 - n(q[10].g, q[11].g)), n(q[10].g, q[11].g) * E(J(1.5 * D))) + 10),
                v(3, e => b(c, U(9 * e - 106, 1.7, -12)));
            }),
            b(
              d(
                g(f(u(), U(26.5, -1.6, 10).scale(20, 2.08, 3)), f(u(), U(26.5, -.6, 10).scale(19, 2, .5))),
                ...v(4, e => f(u(), U(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...v(3, e => f(u(), U(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              U(-123, 0, -12),
              C(.5, .5, .6, .2),
            ),
            A(U(-116, -1.4, -18).rotate(0, 180)),
            b(u(), U(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), C(.8, .8, .8, .2)),
            b(u(6), U(-116, -2.6, -16.5).scale(3.2, .8, 3), C(.6, .5, .7, .2)),
            b(u(), U(-115.5, -17, -12).scale(.5, 15, 2.2), C(.6, .6, .6, .3)),
            b(u(8), U(-114, -17, -2).scale(2, 15, 2), C(.6, .6, .6, .3)),
            b(u(8), U(-79, -17, -2).scale(2, 15, 2), C(1, 1, 1, .3)),
            b(u(), U(-77, -17, -50.5).scale(2.2, 15, .5), C(.6, .6, .6, .3)),
            v(3, e => {
              b(a(16), U(12 * e - 109, -9, -12), C(.6, .6, .6, .3)),
                b(a(16), U(-77, -9, -12 * e - 20).rotate(0, 90), C(.6, .6, .6, .3));
            }),
            b(d(
              f(u(12), U(-77, -14.5, -12).scale(4, 17.5, 4), C(.7, .7, .7, .2)),
              f(u(), U(-79, .1, -12).scale(3.5, 2, 1.3), C(.4, .5, .6, .2)),
              f(u(), U(-77, .1, -14).scale(1.5, 2, 2), C(.4, .5, .6, .2)),
              f(u(12), U(-77, 3.1, -12).scale(3, 5, 3), C(.4, .5, .6, .2)),
            )),
            b(u(), U(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), C(.6, .6, .6, .3)),
            b(u(9), U(-98, -18.4, -40).scale(2.5, 13.5, 2.5), C(.5, .5, .5, .3)),
            b(d(
              f(u(), U(-93, -5.8, -40).scale(9, 1, 5), C(.8, .8, .8, .1)),
              f(u(9), U(-98, -5.8, -40).scale(3, 8, 3), C(.7, .7, .7, .2)),
            )),
            A(U(-98, -4.4, -40).rotate(0, 90)),
            I(U(-115, .2, -12), [0, 0, 3.5]),
            I(U(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            b(d(
              g(
                f(u(6, 0, 0, .6), U(-100, .7, 105.5).scale(8, 1, 11), C(.7, .7, .7, .2)),
                f(u(), U(-101.5, .7, 93.5).scale(10.5, 1, 2), C(.7, .7, .7, .2)),
              ),
              f(u(5), U(-100, .7, 113).scale(4, 3, 4), C(.7, .7, .7, .2)),
            )),
            v(4, t =>
              p(e => {
                e.h = () => {
                  let e = n(q[8].i, q[12].i);
                  return U(
                    (2 < t ? 2 * (1 - e) + e : 0) - 100,
                    e * J(1.3 * D + 1.7 * t) * (3 + t / 3) + .7,
                    115 + (1 & t ? -1 : 1) * (1 - q[8].i) * (1 - q[12].i) * -7
                      + W(e, .05) * V(1.3 * D + 7 * t) * (4 - 2 * (1 - t / 3)),
                  );
                },
                  b(
                    u(6),
                    U(-14.6 - 4.8 * t - (2 < t ? 2 : 0), -t / 2.3, -21.5).scale(2.6, 1, 2.5),
                    C(.5 - t / 8, t / 12 + .5, .7, .3),
                  );
              })),
            p(e => {
              e.h = () => {
                let e = n(q[8].i, q[12].i);
                return U(2.5 * (1 - e) - 139.7, -3 * (1 - q[8].g) + e * J(.8 * D) * -1 - 1.8, 93.5).rotateSelf(
                  V(1.3 * D) * (3 * e + 3),
                  0,
                );
              },
                b(d(f(u(10), j(6, 2, 6), C(.1, .6, .5, .3)), f(u(10), j(3.3, 6, 3.3), C(.1, .6, .5, .5)))),
                b(u(15, 1), U(-7.5).rotate(0, 90).scale(3, 2.3, 3), C(.4, .4, .4, .3)),
                b(u(10), U(-7.5).rotate(0, 90).scale(2, 2.5, 2), C(.3, .8, .7, .3)),
                b(u(5), U(-7.5).rotate(0, 90).scale(1, 3), C(.5, .5, .5, .5)),
                A(U(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  b(i, Y(90 * -e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), C(1, 1, .8, .2))
                ),
                I(U(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              b(u(12, 1), U(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), C(.6, .24, .2, .5)),
                [7.2, 1.5].map(e => b(u(15, 1), U(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), C(.5, .24, .2, .4))),
                b(i, U(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), C(1, 1, .8)),
                b(
                  d(
                    f(u(), U(-4 * t, 3.5, -.5).scale(4, 4, .7), C(.5, .5, .5, .4)),
                    f(u(), j(3, 3, 10), C(.6, .24, .2, .5)),
                    f(u(28, 1), U(0, 3, -5).scale(3, 4, 10).rotate(90, 0), C(.6, .24, .2, .5)),
                    f(u(5), U(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), C(.6, .24, .2, .5)),
                    f(u(5), U(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), C(.6, .24, .2, .5)),
                  ),
                  U(t - 100, .7, 97),
                );
            }),
            p(e => {
              e.h = () => U(-100, .6, 96.5).scale(.88, 1.2 - q[12].g), b(o);
            }),
            b(d(
              f(u(), U(-82.07, .8, 106).scale(11, .9, 2.2), C(.7, .7, .7, .1)),
              f(u(45, 1), U(-81, .7, 106).scale3d(7.7), C(.7, .7, .7, .1)),
            )),
            p(e => {
              e.h = () => U(-81, .6, 106).rotate(0, 40 + l1),
                b(d(
                  f(u(45, 1), j(7.5, 1, 7.5), C(.45, .45, .45, .2)),
                  f(u(), U(0, 0, -5.5).scale(1.5, 3, 2.7), C(.45, .45, .45, .2)),
                )),
                b(u(8), U(0, 2).scale(3, 1.5, 3).rotate(0, 22), C(.7, .7, .7, .1)),
                b(u(5), U(0, 2).scale(1, 2), C(.3, .3, .3, .2)),
                I(U(0, 3), ...d1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            p(e => {
              e.h = () => U(-65.8, .8, 106).rotate(0, r1),
                [-1, 1].map(e =>
                  b(i, Y(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), C(1, 1, .8))
                ),
                b(d(f(u(28, 1), U(0, 2).scale(7.5, 1, 7.5), C(.35, 0, 0, .3)), f(u(), j(9, 5, 2), C(.3, 0, 0, .3)))),
                b(f(u(28, 1), j(7.5, 1, 7.5), C(.45, .45, .45, .2))),
                b(f(u(5), U(0, 1).scale(1, .2), C(.3, .3, .3, .2)));
            }),
            p(e => {
              e.h = () => U(-50.7, .8, 106).rotate(0, 180 - r1),
                b(d(
                  f(u(28, 1), U(0, 2).scale(7.5, 1, 7.5), C(.35, 0, 0, .3)),
                  f(u(), U(7).scale(9, 5, 2), C(.3, 0, 0, .3)),
                  f(u(), U(0, 0, 7).scale(2, 5, 9), C(.3, 0, 0, .3)),
                )),
                b(f(u(28, 1), j(7.5, 1, 7.5), C(.45, .45, .45, .2))),
                b(f(u(5), U(0, 1).scale(1, .2), C(.3, .3, .3, .2)));
            }),
            p(e => {
              e.h = () => U(-50.7, .8, 91).rotate(0, 270 + r1),
                b(d(
                  f(u(28, 1), U(0, 2).scale(7.5, 1, 7.5), C(.35, 0, 0, .3)),
                  f(u(), U(7).scale(9, 5, 2), C(.3, 0, 0, .3)),
                  f(u(), U(0, 0, -7).scale(2, 5, 9), C(.3, 0, 0, .3)),
                )),
                b(f(u(28, 1), j(7.5, 1, 7.5), C(.45, .45, .45, .2))),
                b(f(u(5), U(0, 1).scale(1, .2), C(.3, .3, .3, .2)));
            }),
            b(u(), U(-58, 1, 106).scale(2, .65, 2), C(.7, .7, .7, .2)),
            b(u(), U(-50.7, 1, 99).scale(2, .65, 1), C(.7, .7, .7, .2)),
            b(u(), U(-42, .4, 91).scale(5, 1, 2.5), C(.7, .7, .7, .3)),
            b(u(), U(-34.2, .4, 91).scale(3, 1, 3), C(.7, .7, .7, .3)),
            A(U(-34, 2.7, 96).rotate(-12, 0)),
            b(u(5), U(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), C(.2, .5, .5, .6)),
            [C(.1, .55, .45, .2), C(.2, .5, .5, .3), C(.3, .45, .55, .4)].map((t, a) =>
              p(e => {
                e.h = () =>
                  U(0, (1 - q[13].i) * (1 - q[14].i) * (a ? 0 : 3) + n(q[13].i, q[14].i) * J(1.5 * D + 1.5 * a) * 4),
                  b(u(), U(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && b(u(), U(-29.1, .4, 91).scale(2.1, 1, 3), C(.7, .7, .7, .3)),
                  1 === a && b(u(), U(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), C(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => b(i, U(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), C(1, 1, .8))),
            v(3, e =>
              b(
                a(24.7 - .7 * (1 & e)),
                U(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? C(.5, .5, .5, .3) : C(.35, .35, .35, .5),
              )),
            b(d(
              f(u(6, 0, 0, .3), U(0, -.92, 95).scale(14, 2, 14), C(.8, .8, .8, .2)),
              f(u(5), U(0, 0, 95).scale3d(6), C(.3, .3, .3, .5)),
            )),
            A(U(0, 1.7, 82).rotate(0, 180)),
            b(u(5), U(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), C(.5, .3, .3, .4)),
            b(u(6), U(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), C(.5, .6, .7, .3)),
            b(u(), U(0, 16, 129).scale(1.5, 1, 2), C(.5, .6, .7, .3)),
            b(u(7), U(0, 16.2, 133).scale(5, 1, 5), C(.4, .5, .6, .4)),
            b(d(
              g(
                f(u(), U(0, 16, 110.5).scale(12, 1, 3), C(.5, .3, .3, .4)),
                f(u(), U(0, 16, 111).scale(3, 1, 3.8), C(.5, .3, .3, .4)),
              ),
              f(u(5), U(0, 16, 103.5).scale(5.5, 5, 5.5), C(.5, .3, .3, .4)),
            )),
            p(e => {
              e.h = () => {
                let e = J(D);
                return U(-2 * e).rotate(25 * e);
              },
                b(u(3), U(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), C(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  b(u(6), U(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), C(.7, .7, .7, .4)),
                    b(u(), U(0, 6.2, e + 95).scale(.5, 11, .5), C(.5, .3, .3, .4));
                });
            }),
            p(e => {
              e.h = () => {
                let e = n(n((q[14].g + q[14].i) / 2, q[13].i), (q[15].g + q[15].i) / 2);
                return U(0, 16 * e, 8.5 * X(2 * e - 1) + 95);
              },
                b(u(5), j(5, 1.1, 5), C(.5, .3, .3, .4)),
                b(u(5), j(5.5, .9, 5.5), C(.25, .25, .25, .4)),
                A(U(0, 1.5, -1).rotate(0, 180));
            }),
            I(U(0, 3, 95), ...d1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            I(U(0, 19, 134), [0, 0, 3.5]);
        }),
        p(() => {
          [0, 180].map(e => b(i, Y(0, e).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), C(1, 1, .8))),
            b(o(20), U(0, 1).scale(.5, .5, .5), C(1, .3, .4));
          let t = f(d(u(15, 1), f(u(), U(0, 0, 1).scale(2, 2, .5))), Y(-90, 0).scale(.1, .05, .1), C(.3, .3, .3));
          [-1, 1].map(e => b(t, U(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e))),
            b(u(), U(0, .9, .45).scale(.15, .02, .06), C(.3, .3, .3)),
            b(o(20), j(.7, .8, .55), C(1, .3, .4));
        }),
        [-1, 1].map(e =>
          p(() => {
            b(u(10, 1), U(.3 * e, -.8).scale(.2, .7, .24), C(1, .3, .4));
          })
        ),
        p(() => {
          b(u(6, 1), j(.13, 1.4, .13), C(.3, .3, .5, .1)),
            b(u(10), U(0, 1).scale(.21, .3, .21), C(1, .5, .2)),
            b(u(3), U(0, -1).rotate(90, 90).scale(.3, .4, .3), C(.2, .2, .2, .1));
        }, 0),
        p(() => {
          b(u(6).slice(0, -1), j(.77, 1, .77), C(1, .3, .5));
        }, 0),
        p(() => {
          b(
            o(30, 24, (e, t, a) => {
              let l = t / 24, r = e * K * 2 / 30, o = l ** .6 * K / 2;
              return e = l * l * J(e * K * 14 / 30) / 4,
                23 === t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: V(r) * J(o), y: V(l * K) - l - e, z: J(r) * J(o) + J(e * K * 2) / 4 };
            }),
            j(.7, .7, .7),
            C(1, 1, 1),
          ), [-1, 1].map(e => b(o(12), U(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
