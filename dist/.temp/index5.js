let I,
  A,
  e1,
  k,
  F,
  O,
  Y,
  C,
  T,
  r,
  t1,
  a1,
  j,
  l1,
  x,
  y = 0,
  r1 = 0,
  s1 = 0,
  z = 0,
  s = 0,
  o1 = 0,
  c1 = 0,
  w = 0,
  n1 = 0,
  i1 = 0,
  Q = 0,
  D = 1,
  B = 180,
  P = .066,
  f1 = [],
  H = [],
  X = [],
  m1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  q = { x: 0, y: 0, z: 0 },
  R = e => e < 0 ? -e : e,
  L = (e, t) => e < t ? e : t,
  N = (e, t) => t < e ? e : t,
  h1 = (e, t) => R(e) > t ? e : 0,
  E = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  u1 = e => E1(G(e * Z), J(e * Z)) / Z,
  x1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * E(a) || 0,
  U = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  y1 = (e, t) => (e = E(e), U(e, 1 - e, t)),
  v1 = (e, t, a = 0) => U1(e * e + t * t + a * a),
  p = (
    e,
    t = l,
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
  W = (
    e = q1,
    t = V,
  ) => (t.m11 = e.m11,
    t.m12 = e.m12,
    t.m13 = e.m13,
    t.m14 = e.m14,
    t.m21 = e.m21,
    t.m22 = e.m22,
    t.m23 = e.m23,
    t.m24 = e.m24,
    t.m31 = e.m31,
    t.m32 = e.m32,
    t.m33 = e.m33,
    t.m34 = e.m34,
    t.m41 = e.m41,
    t.m42 = e.m42,
    t.m43 = e.m43,
    t.m44 = e.m44,
    t),
  n = (e, t, a) => q1.translate(e, t, a),
  g1 = (e, t, a) => q1.rotate(e, t, a),
  i = (e, t, a) => q1.scale(e, t, a),
  b = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  z1 = (e, t, a) => (e.C = a, e.u = t, e),
  o = (e, l, t = e.u) =>
    z1(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.C,
    ),
  f = (e, t, a) => e.map(e => o(e, t, a)),
  d1 = (a, l = 0) =>
    b(a, e => {
      let t = J(2 * _ * e / a);
      return { x: G(2 * _ * e / a), y: 0, z: R(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  p1 = (l, r, s) =>
    l.map((e, t, { length: a }) => z1([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.u, s)),
  m = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? d1(e, l) : m1,
    l = o(e, n(0, 1).scale3d(0 < a ? a : 1)),
    e = o(e, n(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...p1(e, l, t), l, e]),
  a = (l, r = l, s = (e, t) => (t *= _ / r, { x: J(e *= 2 * _ / l) * G(t), y: J(t), z: G(e) * G(t) })) => {
    let o = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = z1([], 0, 1);
        o.push(e),
          e.push(s(a, t, e)),
          t && e.push(s((a + 1) % l, t, e)),
          r - 1 > t && e.push(s((a + 1) % l, t + 1 % r, e)),
          e.push(s(a, t + 1 % r, e));
      }
    }
    return o;
  },
  w1 = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  S1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = v1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  A1 = (l, r) => {
    let s, o, c, n = r.B;
    for (let e = 0; n.length > e; ++e) {
      if ((s = w1(l, n[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], n = r.B, e = r.v;
        let t = n.at(-1), a = w1(l, t) - l.w;
        for (let e of n) {
          s = w1(l, e) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && o.push(t),
            (8e-5 < a && s < -8e-5 || a < -8e-5 && 8e-5 < s)
            && (a /= s - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              o.push(t),
              c.push(t)),
            t = e,
            a = s;
        }
        return {
          l: 2 < o.length && { B: z1(o, n.u, n.C), v: e, A: r },
          j: 2 < c.length && { B: z1(c, n.u, n.C), v: e, A: r },
        };
      }
    }
    return { l: o, j: c };
  },
  c = (e, t, a = S1(t.B)) => {
    let l, r, s;
    return e
      ? ({ l, j: r } = A1(e, t), l || r || e.o.push(t), l && (e.l = c(e.l, l, a)), r && (e.j = c(e.j, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, o: [t], l: 0, j: 0 }),
      e;
  },
  M1 = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { l: a, j: l } = A1(e, t);
        a || l || (0 < s * w1(e, r) ? a = t : l = t), a && (e.l ? c(e.l, a) : o.push(a)), l && e.j && c(e.j, l);
      };
    for (let e of r.o) c(t, e);
    return o;
  },
  I1 = (e, t) => e && (t(e), I1(e.l, t), I1(e.j, t)),
  k1 = e => (I1(e, t => {
    let e = t.j;
    t.j = t.l, t.l = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.o) e.v = !e.v;
  }),
    e),
  F1 = e => e.length ? e.reduce((e, t) => c(e, { B: t, v: 0, A: 0 }), 0) : e,
  h = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = F1(l), t) {
        t = F1(t), I1(l, e => e.o = M1(t, e, 1)), I1(t, e => r.push([e, M1(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) c(l, e, t);
      }
      return l;
    }),
  u = (e, ...t) => {
    let a = e => {
        let t;
        return e.A && ((t = l.get(e.A)) ? (r.delete(t), e = a(e.A)) : l.set(e.A, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = k1(h(k1(F1(e)), ...t)),
      I1(e, t => {
        for (let e of t.o) r.set(a(e), e.v);
      }),
      Array.from(r, ([{ B: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return z1(t ? a.reverse() : a, e.u, e.C);
      });
  },
  K = (e, t, a) => U(e, t, 1 - W1(-a * P)),
  Y1 = () => {
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
      ][s1 = f1.reduce((e, { i: t }) => e + t, 0)] + " / XIII";
  },
  C1 = () => {
    localStorage.DanteSP22 = JSON.stringify([H.map(({ i: e }) => e), f1.map(({ i: e }) => e), s, y, k]);
  },
  D1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  v = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  g = (e, t = new DOMMatrix(), a) => r.o.push(...f(e, t, a)),
  d = (e, t = 1) => {
    let a = r;
    X.push(r = { m: new DOMMatrix(), G: t, o: [] }), e(), r = a;
  },
  T1 = e => (e = e.transformPoint(), v1(q.x - e.x, q.y - e.y, q.z - e.z)),
  S = e => {
    let t = r,
      a = H.length,
      l = {
        i: 0,
        g: 0,
        h: 0,
        m: t.m,
        H: e,
        F() {
          l.g = K(l.g, l.i, 4),
            l.h = K(l.h, l.i, 1),
            W(t.m).multiplySelf(e),
            F && T1(V) < 3 && (l.g < .3 || .7 < l.g)
            && (l.i = l.i ? 0 : 1, a && 1 / 0 > D && (D = y + 1, h4.innerHTML = "* click *"), s = a, C1()),
            !a && l.i && .8 < l.g && (l.i = 0,
              s1 < 13
                ? 1 / 0 > D && (D = y + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
                : z
                  || (1 / 0 > D
                    && (D = y + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                    z = 1)),
            V.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    H.push(l),
      g(m(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
      g(m(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
      g(m(), e.translate(0, -.4).scale(.5, .1, .5), v(.5, .5, .4));
  },
  M = (f, ...e) => {
    let m,
      h,
      u,
      v = -1,
      g = 0,
      d = 0,
      p = 1,
      b = 3,
      S = {
        i: 0,
        F() {
          if (!S.i) {
            let e, t, a, l, r, s, o, c, n = 1, i = 1 / 0;
            for (let l of A) {
              let { x: e, z: t, w: a } = l;
              t = (e = v1(I - e, k - t)) - a, c ||= t < 0, 0 < t && i > t && (i = t, M = l), n = L(n, e / a);
            }
            c
            || ({ x: e, z: t, w: a } = M,
              l = I - e,
              r = k - t,
              s = v1(l, r),
              o = E1(-r, l),
              p && (d = (K1() - .5) * _ / 2, b = E(b / (1 + K1()))),
              o += d,
              v = -J(o),
              g = G(o),
              .1 < s && (s = L(s, a) / (s || 1), I = l * s + e, k = r * s + t)),
              p = c,
              b = K(b, 6 * (1 - n) + 3, n + 3),
              F = K(F, I = K(I, I + v, b), b),
              Y = K(Y, k = K(k, k + g, b), b),
              m = x1(m, E1(F - h, Y - u) / Z - 180, 1 - W1(-3 * P)),
              T1(W(C).multiplySelf(f).translateSelf(h = F, 0, u = Y).rotateSelf(0, m, 7 * G(1.7 * y))) < 1.6
              && (S.i = 1,
                e = [
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
                ][s1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > D && (D = y + (s1 && s1 < 12 ? 5 : 7), h4.innerHTML = e),
                Y1(),
                C1());
          }
          S.i
            && W(X[2].m).translateSelf(
              t % 4 * 1.2 - 1.7 + G(y + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + R(t % 4 - 2) + J(y / 1.5 + t) / 6,
            );
        },
      },
      A = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      M = A[0],
      { x: I, z: k } = M,
      F = I,
      Y = k,
      C = r.m,
      t = f1.length;
    f1.push(S);
  },
  j1 = (e, t, a, l) => {
    e.translateSelf(t + G(y + 2) / 5, a + G(.8 * y) / 3, l).rotateSelf(2 * G(y), G(.7 * y), G(.9 * y));
  },
  O1 = (e, t, a) => {
    A
      ? 1100 < hC.width
        && (W().rotateSelf(0, 40 * G(r1) - 80, -8),
          p(V, R1, 36),
          p(V, R1, 37),
          p(V, R1, 38),
          $.uae(e, !1, R1),
          $.d97(4, X[39].D - X[37].s, 5123, 2 * X[37].s))
      : ($.uae(e, !1, R1),
        $.d97(4, (t ? X[39].D : X[37].s) - 3, 5123, 6),
        $.uae(e, !1, L1),
        $.das(4, X[a].D - X[a].s, 5123, 2 * X[a].s, f1.length),
        $.das(4, X[42].D - X[42].s, 5123, 2 * X[42].s, H.length));
  },
  Q1 = (e, t = 35633) => (t = $.c6x(t), $.s3c(t, e), $.c6a(t), t),
  B1 = (e, t) => {
    let a = {}, l = $.c1h();
    return $.abz(l, e), $.abz(l, Q1(t, 35632)), $.l8l(l), e => e ? a[e] || (a[e] = $.gan(l, e)) : $.u7y(l);
  },
  P1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  H1 = e => G(e * _ * 2),
  X1 = new AudioContext(),
  q1 = new DOMMatrix(),
  V = new DOMMatrix(),
  l = new Float32Array(16),
  R1 = new Float32Array(624),
  L1 = new Float32Array(624),
  N1 = new Uint8Array(65536),
  { PI: _, atan2: E1, sin: G, cos: J, sqrt: U1, exp: W1, random: K1 } = Math,
  Z = _ / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  V1 = X1.createBufferSource(),
  $ = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in $) $[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = $[e];
P1(() => {
  let e = 0,
    l = () => {
      if (2 == ++e) {
        let u = [new Float32Array(16), new Float32Array(16)],
          o = t => {
            let a;
            if (requestAnimationFrame(o), r1 += l = (t - (I || t)) / 1e3, y += P = A ? 0 : L(.066, l), I = t, 0 < P) {
              let e = 1;
              for (
                a = () => W(q1, X[++e].m),
                  T(),
                  D && y > D && (D = 0, h4.innerHTML = ""),
                  k = K(k, H[9].h, .2 + .3 * R(2 * H[9].h - 1)),
                  e1 = K(e1, z ? K(e1, -9, 1.5) : E(y / 3), 1),
                  a1 = y1(H[12].g, H[13].g),
                  x = U(K(x, 0, 1), u1(x + 60 * P), H[5].g - H[6].h),
                  j = U(K(j, 0, 5), u1(j + 56 * P), a1),
                  l1 = U(K(l1, 0, 4), u1(l1 + 48 * P), a1),
                  j1(a(), -12, 4.2, 40 * e1 - 66),
                  a().translateSelf(0, 0, -15).scaleSelf(1, E(1.22 - H[1].g), 1),
                  a().translateSelf(0, 0, 15).scaleSelf(1, E(1.22 - H[2].g), 1),
                  a().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, E(1.1 - H[6].g), 1),
                  a().translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - H[12].g),
                  a().translateSelf(
                    0,
                    H[3].g < .01 ? -500 : (1 - H[2].g) * H[3].h * (5 * J(1.5 * y) + 2) + 15 * (H[3].g - 1),
                    0,
                  ),
                  l = L(H[2].h, 1 - H[4].h),
                  a().translateSelf(l * G(y / 1.5 + 2) * 12),
                  a().translateSelf(l * G(.7 * y + 2) * 12),
                  a().translateSelf(l * G(y + 3) * 8.2),
                  a().translateSelf(9.8 * (1 - l)),
                  t = E(1 - 5 * l) * y1(H[4].g, H[5].g),
                  a().translateSelf(0, t * G(1.35 * y) * 4),
                  a().translateSelf(0, 0, t * G(.9 * y) * 8),
                  a().translateSelf(0, -6.5 * H[4].h),
                  a().translateSelf(-75, (1 - H[5].h) * (1 - H[6].g) * 3, 55).rotateSelf(180 * (1 - H[5].h) + x, 0),
                  l = y1(H[7].h, H[6].h),
                  a().translateSelf(0, l * G(y) * 5 + 3.5 * (1 - N(H[6].g, H[7].g))),
                  a().translateSelf(0, l * G(y + 3) * 6, l * G(.6 * y + 1) * 6),
                  a().translateSelf(0, -7.3 * H[7].h),
                  j1(a(), -123, 1.4, 55 + -65 * k),
                  t = y1(H[10].g, H[11].g),
                  a().translateSelf(0, -2, t * R(G(1.1 * y)) * -8.5 + 10),
                  a().translateSelf(0, -2, t * R(G(2.1 * y)) * -8.5 + 10),
                  a().translateSelf(0, -2, -8.5 * N((1 - H[10].g) * (1 - t), t * R(G(1.5 * y))) + 10),
                  t = y1(H[8].h, H[12].h),
                  l = 0;
                l < 4;
                l++
              ) {
                a().translateSelf(
                  (2 < l ? 2 * (1 - t) + t : 0) - 100,
                  t * G(1.3 * y + 1.7 * l) * (3 + l / 3) + .7,
                  115 + (1 & l ? -1 : 1) * (1 - H[8].h) * (1 - H[12].h) * -7
                    + N(t, .05) * J(1.3 * y + 7 * l) * (4 - 2 * (1 - l / 3)),
                );
              }
              for (
                a().translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - H[8].g) + t * G(.8 * y) * -1 - 1.8, 93.5).rotateSelf(
                  J(1.3 * y) * (3 * t + 3),
                  0,
                ),
                  a().translateSelf(-81, .6, 106).rotateSelf(0, 40 + j),
                  a().translateSelf(-65.8, .8, 106).rotateSelf(0, l1),
                  a().translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - l1),
                  a().translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + l1),
                  t = y1(H[13].h, H[14].h),
                  l = 0;
                l < 3;
                ++l
              ) {
                a().translateSelf(0, (1 - H[13].h) * (1 - H[14].h) * (l ? 0 : 3) + t * G(1.5 * y + 1.5 * l) * 4);
              }
              for (
                a().translateSelf(-2 * G(y)).rotateSelf(25 * G(y)),
                  l = y1(y1((H[14].g + H[14].h) / 2, H[13].h), (H[15].g + H[15].h) / 2),
                  a().translateSelf(0, 16 * l, 8.5 * E(2 * l - 1) + 95),
                  t = 0;
                t < 13;
                ++t
              ) {
                f1[t].F(), p(V, L1, t);
              }
              for (t = 0; t < 16; ++t) H[t].F(), p(V, L1, t + 13), L1[16 * t + 223] = 1 - H[t].g;
              for (t1(a), a = 0; e >= a; ++a) p(X[a].m, R1, a - 1);
              F = 0, n(), $.b6o(36160, h), $.v5y(0, 0, 128, 128), $.c4s(16640), $.cbf(!0, !1, !0, !1);
              var { x: t, y: l, z: r } = q;
              $.uae(n("b"), !1, p(W().rotateSelf(0, 180).invertSelf().translateSelf(-t, -l, .3 - r))),
                O1(n("c"), 0, 40),
                $.c4s(256),
                $.cbf(!1, !0, !1, !0),
                $.uae(n("b"), !1, p(W().translateSelf(-t, -l, -r - .3))),
                O1(n("c"), 0, 40),
                $.f1s();
            }
            a = w;
            let e = n1, s = i1;
            A
              ? ({ x: t, y: l } = W(Y).invertSelf().transformPoint({ x: 3.6, y: 3.5 }),
                a = t,
                e = l,
                s = 5,
                W(q1, v).rotateSelf(-20, 0).invertSelf().translateSelf(-a, -e, -s).rotateSelf(0, 99))
              : W(q1, v).rotateSelf(-Q, -B).invertSelf().translateSelf(-a, -e, -s),
              g(),
              $.b6o(36160, m),
              $.v5y(0, 0, 2048, 2048),
              f[0](54.7 * 1.1),
              f[1](126 * 1.1),
              i(),
              $.b6o(36160, null),
              $.v5y(0, 0, $.drawingBufferWidth, $.drawingBufferHeight),
              $.cbf(!0, !0, !0, !0),
              $.c4s(16640),
              $.uae(i("a"), !1, p(Y)),
              $.uae(i("b"), !1, p(v)),
              $.uae(i("i"), !1, u[0]),
              $.uae(i("j"), !1, u[1]),
              $.ubu(i("k"), a, e, s),
              O1(i("c"), !O, 41),
              c(),
              $.ubu(c("j"), $.drawingBufferWidth, $.drawingBufferHeight, r1),
              $.ubu(c("k"), a, e, s),
              $.uae(c("b"), !1, p(W(v).invertSelf())),
              $.d97(4, 3, 5123, 0),
              $.b6o(36160, h),
              $.f1s();
          },
          v = new DOMMatrix(),
          a = new DOMMatrix(),
          e = r,
          t = Q1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          g = B1(
            Q1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          c = B1(
            Q1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          n = B1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`,
          ),
          i = B1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          d = b(8, () => ({})),
          f = b(2, e => {
            let t = $.c25();
            return $.a4v(33984 + e),
              $.b9j(3553, t),
              $.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              $.t2z(3553, 10241, 9729),
              $.t2z(3553, 10240, 9729),
              $.t2z(3553, 34893, 515),
              $.t2z(3553, 34892, 34894),
              $.t2z(3553, 10243, 33071),
              $.t2z(3553, 10242, 33071),
              l => {
                let r = 0, s = 0, o = 0, c = 1 / 0, n = -1 / 0, i = 1 / 0, f = -1 / 0, m = 1 / 0, h = -1 / 0;
                $.fas(36160, 36096, 3553, t, 0),
                  $.c4s(256),
                  W().scale3dSelf(l).multiplySelf(W(C[e], a).multiplySelf(v).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = d[a],
                    t = (e.x = 4 & a ? 1 : -1, e.y = 2 & a ? 1 : -1, e.z = 1 & a ? 1 : -1, V.transformPoint(e));
                  r -= e.x = (0 | t.x) / l / t.w, s -= e.y = (0 | t.y) / l / t.w, o -= e.z = (0 | t.z) / l / t.w;
                }
                for (W().rotateSelf(298, 139).translateSelf(r / 8, s / 8, o / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: t, z: a } = V.transformPoint(d[l]);
                  c = L(c, e), n = N(n, e), i = L(i, t), f = N(f, t), m = L(m, a), h = N(h, a);
                }
                l = 10 + e,
                  m *= m < 0 ? l : 1 / l,
                  h *= 0 < h ? l : 1 / l,
                  $.uae(
                    g("b"),
                    !1,
                    p(
                      W(q1, a).scaleSelf(2 / (n - c), 2 / (f - i), 2 / (m - h)).translateSelf(
                        (n + c) / -2,
                        (f + i) / -2,
                        (m + h) / 2,
                      ).multiplySelf(V),
                      u[e],
                    ),
                  ),
                  O1(g("c"), !O, 41);
              };
          }),
          m = $.c5w(),
          l = (t = $.c25(), $.c3z()),
          h = $.c5w();
        n(),
          $.uae(n("a"), !1, p(D1(1e-4, 2, 1.4, .4))),
          i(),
          $.ubh(i("q"), 2),
          $.ubh(i("h"), 1),
          $.ubh(i("g"), 0),
          c(),
          $.ubh(c("q"), 2),
          $.b6o(36160, m),
          $.d45([0]),
          $.r9l(0),
          $.b6o(36160, h),
          $.bb1(36161, l),
          $.r4v(36161, 33190, 128, 128),
          $.f8w(36160, 36096, 36161, l),
          $.a4v(33986),
          $.b9j(3553, t),
          $.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null),
          $.fas(36160, 36064, 3553, t, 0),
          $.b9j(3553, $.c25()),
          $.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          $.t2z(3553, 10241, 9987),
          $.t2z(3553, 10240, 9729),
          $.gbn(3553),
          $.e8z(2929),
          $.e8z(2884),
          $.c70(1),
          $.c7a(1029),
          $.d4n(515),
          $.c5t(0, 0, 0, 0),
          (() => {
            let e,
              n,
              i,
              f,
              m,
              h,
              u,
              v,
              g,
              d,
              p,
              b,
              S,
              l,
              t = !0,
              r = [],
              a = () => {
                b4.innerHTML = "Music: " + t, A || !t ? V1.disconnect() : V1.connect(X1.destination);
              },
              s = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                C = [D1(.3, 55, e, 1.732051), D1(55, 181, e, 1.732051)],
                  Y = D1(.3, 181, e, 1.732051),
                  f = v = void 0,
                  r.length =
                    F =
                    l =
                    b =
                    S =
                    o1 =
                    c1 =
                      0;
              },
              o = (e, t = 0) => {
                if (A !== e) {
                  A = e, O = t, s(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), V1.start());
                  } catch {}
                  a();
                }
              };
            oncontextmenu = () => !1,
              b1.onclick = () => o(!1),
              b2.onclick = () => o(!1, 1),
              b5.onclick = () => o(!0),
              b4.onclick = () => {
                t = !t, a();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              onclick = e => {
                if (!A && (e.target === hC && (F = 1), O)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let t;
                e.repeat
                  || (t = {
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
                  }[e.code],
                    (r[t] = !!e.type[5] && !0) && (0 === t && (F = 1), 1 === t && o(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                O && (e || t) && (B += .1 * e, Q += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    O && e > hC.clientWidth / 2
                      ? void 0 === v && (g = 0, h = e, u = t, v = a, d = B, p = Q)
                      : void 0 === f && (m = 0, n = e, i = t, f = a);
                  }
                  e = r1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c;
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    v === a && (B = d + (e - h) / 2.3, Q = p + (t - u) / 2.3, g = 1),
                      f === a
                      && (a = (n - e) / 20,
                        r = R(a),
                        s = (i - t) / 20,
                        o = R(s),
                        (c = .5 < N(r, o)) && (m = 1),
                        b = (c && .2 < r) * E(a, -1),
                        S = (c && .2 < o) * E(s, -1),
                        2 < r && (n = e + 20 * (a < 0 ? -1 : 1)),
                        2 < o && (i = t + 20 * (s < 0 ? -1 : 1)));
                  }
                }
              },
              hC.ontouchend = t => {
                let a;
                document.activeElement === document.body && t.preventDefault();
                for (let e of t.changedTouches) {
                  e.identifier === v
                    ? (v = void 0, g || (a = 1), g = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (a = 1), m = 0)
                    : a = 1;
                }
                t.target === hC && a && e && .02 < (t = r1 - e) && t < .7 && (F = 1);
              },
              T = () => {
                o1 = S + (r[4] ? 1 : 0) - (r[5] ? 1 : 0), c1 = b + (r[2] ? 1 : 0) - (r[3] ? 1 : 0);
                let a = navigator.getGamepads()[0];
                if (a) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = a.buttons;
                  a = a.axes,
                    O && (Q += P * h1(a[3], .3) * 80, B += P * h1(a[2], .3) * 80),
                    o1 += e(12) - e(13) - h1(a[1], .2),
                    c1 += e(14) - e(15) - h1(a[0], .2),
                    e(9) && o(!0),
                    (a = e(3) || e(2) || e(1) || e(0)) && !l && (F = 1),
                    l = a;
                }
              },
              document.onvisibilitychange = onblur = onresize = s,
              o(!0);
          })(),
          (() => {
            let n,
              i,
              f,
              m,
              h,
              u,
              v,
              g,
              d,
              p,
              b,
              S,
              A,
              M,
              I = 1,
              k = 2,
              F = 15,
              Y = { x: 0, y: 0, z: 0 },
              C = () => W((k ? H[s] : X[b && 1 === X[b].G && b || 0]).m),
              D = e => {
                let { x: t, y: a, z: l } = 1 < k
                  ? W(H[s].m).multiplySelf(H[s].H).transformPoint({ x: 0, y: s || .9 < e1 ? 15 : 1, z: -2.4 })
                  : C().transformPoint(Y);
                e && (h = (t - q.x) / P, u = (l - q.z) / P), q.x = t, q.y = a, q.z = l;
              },
              T = (e, t, a) => {
                C().invertSelf(),
                  V.m41 = V.m42 = V.m43 = 0,
                  e = V.transformPoint({ x: e, z: a, w: 0 }),
                  Y.x += e.x,
                  Y.y += t,
                  Y.z += e.z,
                  D();
              },
              j = (e, t, a, l) => U(e, t, I || (E(R(t - e) ** .5 - a) + 1 / 7) * (1 - W1(-1.5 * l * P)));
            t1 = t => {
              let e, a;
              D(p),
                $.r9r(0, 0, 128, 128, 6408, 5121, N1),
                (() => {
                  let t, e, a, l, r, s, o = 0, c = 0, n = 0, i = 0, f = -1, m = 0, h = 0;
                  for (t = 0; t < 36; ++t) {
                    for (e = 512 * t, a = 96; a < 416; a += 4) {
                      for (l = 0; l < 2; ++l) {
                        (r = N1[e + a + l]) > i && (i = r),
                          r + (s = N1[e + a + l + 2]) && (f < 0 || f === t)
                          && (f = t, s === p ? ++o : c && c !== s || (c = s, ++n));
                      }
                    }
                  }
                  for (p = f < 0 ? 0 : n > 2 * o ? c : p, o = 36; o < 128; o += 1) {
                    for (
                      t =
                        f =
                        n =
                        c =
                          0,
                        e = 512 * o,
                        a = 0;
                      a < 128;
                      a += 1
                    ) {
                      for (l = e + 4 * a, r = 0; r < 2; ++r) {
                        s = N1[l + r];
                        let e = N1[l + r + 2];
                        (r ? 64 < a : a < 64) ? c = N(c, s) : n = N(n, s), r ? t = N(t, e) : f = N(f, e);
                      }
                    }
                    R(n - c) > R(m) && (m = n - c), R(t - f) > R(h) && (h = t - f);
                  }
                  g = E(1 - .02 * N(R(m), R(h))), T(m / 255, i / 255, h / 255);
                })(),
                !k && p === b || (b = p, l = C().invertSelf().transformPoint(q), Y.x = l.x, Y.y = l.y, Y.z = l.z),
                k = k && (p ? 0 : 1);
              var { x: l, y: r, z: s } = q;
              r < (l < -20 || s < 109 ? -25 : -9) && (k = 2),
                1 === p && (H[9].i = l < -15 && s < 0 ? 1 : 0),
                d = U(K(d, r, 2), r, k || 8 * R(d - r)),
                A = j(A, d, 2, 1),
                S = j(S, l, .5, 1),
                M = j(M, s, .5, 1),
                m = K(m, a1 * (27 < p && p < 32), 2),
                O
                  ? (e = k + (1 - W1(-18 * P)), w = U(w, l, e), n1 = U(n1, d + 1.5, e), i1 = U(i1, s, e), B = u1(B))
                  : (i1 = j(i1, M + -18 + 5 * m, 1, 2 + m),
                    n1 = j(n1, N(A + E((-60 - s) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2),
                    w = j(w, S, 1, 2 + m),
                    e = L(-6, -R(M - i1)),
                    B = x1(B, 90 - u1(E1(e, a = S - w) / Z), I + (1 - W1(-10 * P))),
                    Q = x1(Q, 90 - E1(v1(e, a), n1 - A) / Z, I + (1 - W1(-10 * P)))),
                Q = E(Q, -87, 87),
                I = 0,
                e = E(o1, -1),
                a = E(c1, -1);
              let o = h1(v1(e, a) ** .5, .1), c = E1(e, a);
              for (
                e = o * R(e) * G(c),
                  a = o * R(a) * J(c),
                  o && (n = 90 - c / Z),
                  i = x1(i, n, 1 - W1(-8 * P)),
                  f = K(f, o, 10),
                  t().translateSelf(l, d, s).rotateSelf(0, i),
                  c = 0;
                c < 2;
                ++c
              ) {
                let e = 9.1 * y - _ * c;
                W(X[37].m, t()).translateSelf(0, f * E(.45 * G(e - _ / 2))).rotateSelf(f * G(e) * .25 / Z, 0);
              }
              F = p ? 5 : K(F, k ? 13 : 19 - 2 * L(0, r + 10), 2.2),
                h = p || k ? 0 : K(h, 0, 3),
                u = p || k ? 0 : K(u, 0, 3),
                v = k ? 0 : K(v, p ? 7 * E(2 * o) * g : 0, p ? 9 : 1),
                c = O ? (180 + B) * Z : 0,
                T(P * (h + v * (a * J(c) - e * G(c))), -F * P, P * (u + v * (a * G(c) + e * J(c))));
            };
          })(),
          requestAnimationFrame(o);
      }
    },
    r = new Image();
  r.onload = r.onerror = l,
    r.src = t,
    (r => {
      let L = 0,
        s = () => {
          let b = 0,
            e = m => {
              let r,
                h,
                s,
                u,
                o,
                c,
                n = 0,
                i = 0,
                v = [],
                f = new Int32Array(768 * m),
                g = 2 ** (a - 9) / m,
                d = _ * 2 ** (l - 8) / m,
                p = X * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, t = +"000001234556112341234556011111111112011111111112000001111112"[12 * L + l];
                  e < 32;
                  ++e
                ) {
                  let a = (32 * l + e) * m;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, t && (u = S[t - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(h = v[u])) {
                        let l,
                          r,
                          s = 0,
                          o = 0,
                          c = h = u,
                          n = L < 2
                            ? e => e % 1 * 2 - 1
                            : H1,
                          i = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : H1,
                          f = new Int32Array(D + T + R);
                        for (let t = 0, a = 0; D + T + R > t; ++t, ++a) {
                          let e = 1;
                          D > t ? e = t / D : D + T > t || (e = (1 - (e = (t - D - T) / R)) * 3 ** (-j / 16 * e)),
                            a < 0
                            || (a -= 4 * m,
                              r = .00396 * 2 ** ((c + M - 256) / 12),
                              l = .00396 * 2 ** ((c + F - 256) / 12) * (1 + (L ? 0 : .0072))),
                            f[t] = 80
                                * (n(s += r * e ** (I / 32)) * A + i(o += l * e ** (Y / 32)) * k
                                  + (C ? (2 * K1() - 1) * C : 0))
                                * e | 0;
                        }
                        h = v[h] = f;
                      }
                      for (let e = 0, t = 2 * a; h.length > e; ++e, t += 2) f[t] += h[e];
                    }
                  }
                  for (let e, t = 0; m > t; ++t) {
                    r = 0,
                      h = 2 * (a + t),
                      ((e = f[h]) || c)
                      && (o = .00308 * O,
                        1 !== L && 4 !== L || (o *= G(g * h * _ * 2) * q / 512 + .5),
                        o = 1.5 * G(o),
                        n += o * i,
                        i += o * (s = (1 - Q / 255) * (e - i) - n),
                        e = 4 === L ? i : 3 === L ? s : n,
                        L || (e = (e *= 22e-5) < 1 ? -1 < e ? G(e / 4 * _ * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = G(d * h) * P / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * H / 255, e += f[h - p] * H / 255),
                      N[s = b + h >> 1] += (f[h] = r) / 65536,
                      E[s] += (f[++h] = e) / 65536;
                  }
                }
              }
              b += 768 * m;
            },
            S = [
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
            ][L],
            [A, M, I, k, F, Y, C, D, T, t, j, a, O, Q, B, P, l, H, X, q] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            R = 4 * t ** 2;
          e(5513), e(4562), e(3891), P1(++L < 5 ? s : r);
        },
        e = X1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        E = e.getChannelData(1);
      V1.buffer = e, V1.loop = !0, P1(s);
    })(() => {
      P1(() => {
        let a = 0,
          r = [],
          o = [],
          c = [],
          n = [],
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        X.map((e, t) => {
          let s,
            l = e => {
              let { x: t, y: a, z: l } = s[e], r = (h[0] = t, h[1] = a, h[2] = l, f.get(e = "" + (s.C ? m : i)));
              return void 0 !== r
                ? (t = 3 * r, n[t] = (n[t++] + i[5]) / 2, n[t] = (n[t++] + i[6]) / 2, n[t] = (n[t] + i[7]) / 2)
                : (f.set(e, r = f.size), o.push(t, a, l, h[3]), c.push(i[4]), n.push(i[5], i[6], i[7])),
                r;
            };
          for (s of (h[3] = 41 < t ? -14 : e.G && t, e.o)) {
            let { x: e, y: t, z: a } = S1(s);
            i[4] = 0 | s.u, i[5] = 32767 * e, i[6] = 32767 * t, i[7] = 32767 * a;
            for (let e = 2, t = l(0), a = l(1); s.length > e; ++e) r.push(t, a, a = l(e));
          }
          e.o = null, e.s = a, e.D = a = r.length;
        }),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Float32Array(o), 35044),
          $.v7s(0, 4, 5126, !1, 0, 0),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Int16Array(n), 35044),
          $.v7s(1, 3, 5122, !0, 0, 0),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Uint32Array(c), 35044),
          $.v7s(2, 4, 5121, !0, 0, 0),
          $.b11(34963, $.c1b()),
          $.b2v(34963, new Uint16Array(r), 35044),
          $.e3x(0),
          $.e3x(1),
          $.e3x(2);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.DanteSP22);
          H.map((e, t) => e.g = e.h = e.i = t ? 0 | a[t] : 0),
            f1.map((e, t) => e.i = 0 | l[t]),
            s = e,
            k = r,
            y = t,
            P = 0;
        } catch {}
        Y1(), e1 = E(s), P1(l);
      });
      let t = b(11, e => n(G(e / 10 * _), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        c = b(10, e => p1(o(d1(18), t[e]).reverse(), o(d1(18), t[e + 1]), 1)).flat();
      d(() => g([m1.slice(1)], n(-2).scale3d(3).rotate(90, 0)), 0),
        d(() => {
          let e,
            t = a =>
              d(() => {
                m1.map(({ x: e, z: t }) => {
                  g(m(11, 1), n(4 * e, 4, a + 4 * t).scale(.8, 3, .8), v(.5, .3, .7, .6)),
                    g(m(), n(4 * e, 7, a + 4 * t).scale(1, .3), v(.5, .5, .5, .3));
                }),
                  g(u(
                    f(m(), n(0, 0, a).scale(5, 1, 5), v(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => f(m(), n(5 * e, .2, a).rotate(-30 * e).scale(4, 1, 2), v(.8, .8, .8, .3))),
                  )),
                  g(m(), n(0, -3, a).scale(8, 2, 8), v(.4, .4, .4, .3));
              }),
            a = e =>
              u(
                f(m(), n(0, -e / 2).scale(6, e - 1, 2.2)),
                f(m(), n(0, -e / 2 - 6).scale(4, e - 3, 4)),
                f(m(32, 1), n(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            l = () => d(() => b(7, e => g(f(m(6, 1), n(4 * (e / 6 - .5), 3).scale(.2, 3, .2), v(.3, .3, .38))))),
            r = u(
              f(m(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), v(.7, .4, .25, .7)),
              f(m(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), v(.7, .4, .25, .2)),
              f(m(), n(4, -1.2).scale3d(2), v(.7, .4, .25, .3)),
            ),
            s = (d(() => {
              g(r), S(n(0, -3, 4));
            }),
              S(n(-5.4, 1.5, -19).rotate(0, -90)),
              M(n(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              M(n(0, 2.8), [5, 10, 3], [-5, 10, 3], ...d1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * R(e)])),
              m1.map(({ x: e, z: t }) => g(m(6), n(3 * e, 3, 15 * t).scale(.7, 4, .7), v(.6, .3, .3, .4))),
              [-15, 15].map((e, t) => {
                l(),
                  l(),
                  g(m(), n(0, 6.3, e).scale(4, .3, 1), v(.3, .3, .3, .4)),
                  g(m(), n(0, 1, e).scale(3, .2, .35), v(.5, .5, .5, .3)),
                  g(m(), n(0, 0, t ? 22 : -23).scale(3, 1, 8), v(.9, .9, .9, .2)),
                  b(5, e =>
                    g(
                      c,
                      n(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                      v(1, 1, .8, .2),
                    ));
              }),
              g(m(), n(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), v(.8, .8, .8, .2)),
              g(m(), n(3, 1.5, -20).scale(.5, 2, 5), v(.7, .7, .7, .2)),
              g(m(), n(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), v(.75, .75, .75, .2)),
              g(m(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), v(.6, .3, .3, .4)),
              g(m(), g1(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), v(.8, .2, .2, .5)),
              g(u(
                h(
                  f(m(6, 0, 0, .3), n(8, -3, -4).scale(13, 1, 13), v(.7, .7, .7, .2)),
                  f(m(6), n(0, -8).scale(9, 8, 8), v(.4, .2, .5, .5)),
                  f(m(6, 0, 0, .3), n(0, -.92).scale(13, 2, 13), v(.8, .8, .8, .2)),
                ),
                f(m(5), i(5, 30, 5), v(.4, .2, .6, .5)),
                f(m(5, 0, 1.5), n(0, 1).scale(4.5, .3, 4.5), v(.7, .5, .9, .2)),
                f(m(), g1(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), v(.5, .5, .5, .5)),
                f(m(6), n(15, -1.5, 4).scale(3.5, 1, 3.5), v(.5, .5, .5, .5)),
              )),
              d(() => {
                g(m(5), n(0, -.2).scale(5, 1, 5), v(.6, .65, .7, .3)), S(n(0, 1.2));
              }),
              S(n(15, -2, 4)),
              d(() => {
                g(
                  u(
                    h(
                      f(m(), i(1.5, 1, 5), v(.9, .9, .9, .2)),
                      f(m(6), i(4, 1, 5), v(.9, .9, .9, .2)),
                      f(m(), n(0, -2).scale(2, 3.2, 1.9), v(.3, .8, .5, .5)),
                      f(m(16, 1, 0, 4), i(1, 1, 1.5).rotate(0, 90), v(.9, .9, .9, .2)),
                    ),
                    f(m(), i(1.3, 10, 1.3), v(.2, .7, .4, .6)),
                  ),
                  n(0, 0, 45),
                ), M(n(0, 2.8, 45), [0, 0, 4.5]);
              }),
              t(35),
              t(55),
              g(m(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), v(.9, .9, .9, .2)),
              d(() => {
                g(m(3), n(-23, -1.7, 55.8).scale(5, .7, 8.3), v(.3, .6, .6, .2)),
                  g(m(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), v(.8, .8, .8, .2)),
                  g(m(), n(-23, -3, 55).scale(5.2, 1.7, 3), v(.5, .5, .5, .3)),
                  g(m(), n(-23, -2.2, 62).scale(3, 1, 4), v(.5, .5, .5, .3)),
                  S(n(-23, -.5, 66.5));
              }),
              d(() => {
                g(m(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), v(.7, .7, .7, .2)),
                  g(u(f(m(), i(3, 1.4, 2.7)), f(m(), i(1.2, 8, 1.2))), n(-33, -3, 55), v(.7, .7, .7, .2));
              }),
              d(() => {
                g(u(
                  f(m(), n(-27, -3, 55).scale(3, 1.4, 2.7), v(.9, .9, .9, .2)),
                  f(m(), n(-27, -3, 55).scale(1, 3), v(.9, .9, .9, .2)),
                )), g(m(), n(-39, -3, 55).scale(3, 1.4, 2.7), v(.9, .9, .9, .2));
              }),
              d(() => {
                g(m(6), n(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), v(.7, .7, .7, .4));
              }),
              S(n(-55, -1.1, 46).rotate(0, 90)),
              g(m(6), n(-61.3, -2.4, 49).scale(3, 1, 5), v(.4, .6, .6, .3)),
              g(m(7), n(-57, -2.6, 46).scale(4, 1, 4), v(.8, .8, .8, .3)),
              [
                ...f(m(), n(0, -3).scale(11, 1.4, 3), v(.9, .9, .9, .2)),
                ...f(m(), n(0, -2.2).scale(7.7, .5, 4), v(.6, .4, .4, .3)),
                ...u(
                  f(m(6), g1(90).scale(6, 8, 6), v(.3, .6, .6, .3)),
                  f(m(4, 0, .01), n(0, 6).scale(12, 2, .75).rotate(0, 45), v(.3, .6, .6, .3)),
                  f(m(6), g1(90).scale(5, 12, 5), v(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => f(m(5), n(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), v(.3, .6, .6, .3))),
                ),
              ]),
            o = (g(s, n(-53, 0, 55)),
              d(() => g(s), 2),
              g(m(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), v(.7, .7, .7, .2)),
              g(m(3, 0, -.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), v(.8, .8, .8, .2)),
              g(u(
                h(
                  f(m(), n(-100, -2.4, 55).scale(8, .9, 8), v(.8, .8, .8, .2)),
                  f(m(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), v(.8, .8, .8, .2)),
                  f(m(), n(-100, -2.6, 70).scale(3, 1.1, 7), v(.8, .8, .8, .2)),
                  f(m(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), v(.8, .8, .8, .2)),
                  f(m(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), v(.6, .6, .6, .3)),
                  f(m(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), v(.8, .8, .8, .2)),
                  f(m(), n(-100, .42, 92).scale(3, 1.1, 4.1), v(.8, .8, .8, .2)),
                ),
                f(m(8), n(-100, -1, 55).scale(7, .9, 7), v(.3, .3, .3, .4)),
                f(m(8), n(-100, -2, 55).scale(4, .3, 4), v(.4, .4, .4, .5)),
                f(m(8, 0, -3.1), n(-100, -3, 55).scale(.4, 1, .4), v(.4, .4, .4, .5)),
              )),
              M(n(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              M(n(-89, .2, 80), [0, 0, 6]),
              g(u(
                f(m(), n(-100, 1, 63).scale(7.5, 4), v(.5, .5, .5, .4)),
                f(m(), n(-100, 0, 70).scale(2, 2, 10), v(.5, .5, .5, .4)),
                f(m(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), v(.5, .5, .5, .4)),
              )),
              m1.map(({ x: t, z: a }) => {
                g(m(6), n(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), v(.6, .15, .15, .8)),
                  [4, -.4].map(e => g(m(6), n(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), v(.4, .2, .2, .8)));
              }),
              b(7, e => {
                g(
                  m((23 * e + 1) % 5 + 5, 0, .5),
                  n(5 * G(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  v(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              g(m(), n(-87, -9.5, 24).scale(7, 1, 3), v(.4, .5, .6, .4)),
              g(m(4), n(-86, -9.2, 27).scale(5, 1, 5), v(.5, .6, .7, .3)),
              g(m(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), v(.3, .3, .4, .1)),
              S(n(-86, -7.5, 31)),
              d(() => {
                [0, 12, 24].map(e =>
                  g(m(), n(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.2, .5, .6, .2))
                );
              }),
              d(() => {
                [6, 18].map(e =>
                  g(m(), n(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.1, .4, .5, .2))
                );
              }),
              g(
                u(
                  h(
                    f(m(5), n(0, 0, -7).scale(2, 1.2, 2), v(.2, .4, .7, .3)),
                    f(m(5), i(9, 1.2, 9), v(0, .2, .3, .5)),
                    f(m(), i(11, 1, 13), v(.3, .4, .6, .3)),
                  ),
                  f(m(5), i(5.4, 5, 5.4), v(0, .2, .3, .5)),
                ),
                n(-38.9, -11.3, 17),
              ),
              S(n(-38.9, -9.6, 10)),
              d(() => {
                g(
                  u(
                    h(
                      f(m(5), n(0, 2).scale(5, 7, 5).skewY(8), v(.2, .4, .5, .5)),
                      f(m(5), n(0, 6).scale(1.1, 7, 1.1).skewY(-8), v(.25, .35, .5, .5)),
                      f(m(5), n(0, 9).scale(.6, 7, .6).skewY(8), v(.35, .3, .5, .5)),
                    ),
                    f(m(5), i(4, 8, 4), v(.2, .4, .5, .5)),
                    f(m(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), v(.2, .4, .5, .5)),
                  ),
                  n(-38.9, -11.3, 17),
                ), M(n(-39.1, -.6, 17).rotate(11), ...d1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              m1.map(({ x: t, z: a }) => {
                g(m(14, 1), n(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), v(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    g(m(17, 1), n(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), v(.6, .6, .6, .3))
                  );
              }),
              g(
                u(
                  h(
                    f(m(6), n(0, 0, -36).scale(15, 1.2, 15), v(.7, .7, .7, .3)),
                    f(m(), n(0, 0, -18).scale(4, 1.2, 6), v(.45, .4, .6, .3)),
                  ),
                  ...b(6, t =>
                    b(6, e =>
                      f(
                        m(6),
                        n(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * G(4 * e)).scale(2, 5, 2),
                        v(.7, .7, .7, .3),
                      ))).flat(),
                ),
                n(-38.9, -11.3, 17),
              ),
              M(n(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              g(m(5), n(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), v(.8, .1, .25, .4)),
              S(n(-84, -.5, 85).rotate(0, 45)),
              d(() => {
                g(r), S(n(0, -3, -4).rotate(0, 180));
              }),
              u(
                f(m(), n(0, -.5, 1).scale(1.15, 1.2, 6.5), v(.25, .25, .35, .3)),
                (t = f(m(), n(0, 0, -3.65).scale(2.5, 3), v(.6, .3, .4, .3)),
                  e = [f(m(3), n(0, 0, -5.5).scale(3, 2), v(.6, .3, .4, .3))],
                  k1(h(k1(F1(t)), ...e))),
                ...[-1, 1].map(e => f(m(), n(1.2 * e, -.5, 1).scale(.14, .3, 6.5), v(.7, .2, 0, .3))),
              ));
          d(() =>
            b(2, e =>
              g(o, n(9 * e - 110 + (1 & e), 1.9, -12)))
          ),
            d(() =>
              b(2, e => g(o, n(9 * (e + 2) - 110 + (1 & e), 1.9, -12)))
            ),
            d(() =>
              b(3, e => g(o, n(9 * e - 106, 1.9, -12)))
            ),
            g(
              u(
                h(f(m(), n(26.5, -1.6, 10).scale(20, 2.08, 3)), f(m(), n(26.5, -.5, 10).scale(19, 2, .5))),
                ...b(4, e => f(m(), n(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...b(3, e =>
                  f(m(), n(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              n(-123, .2, -12),
              v(.5, .5, .6, .2),
            ),
            S(n(-116, -1.4, -18).rotate(0, 180)),
            g(m(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), v(.8, .8, .8, .2)),
            g(m(6), n(-116, -2.6, -16.5).scale(3.2, .8, 3), v(.6, .5, .7, .2)),
            g(m(), n(-115.5, -17, -12).scale(.5, 15, 2.2), v(.6, .6, .6, .3)),
            g(m(8), n(-114, -17, -2).scale(2, 15, 2), v(.6, .6, .6, .3)),
            g(m(8), n(-79, -17, -2).scale(2, 15, 2), v(1, 1, 1, .3)),
            g(m(), n(-77, -17, -50.5).scale(2.2, 15, .5), v(.6, .6, .6, .3)),
            b(3, e => {
              g(a(16), n(12 * e - 109, -9, -12), v(.6, .6, .6, .3)),
                g(a(16), n(-77, -9, -12 * e - 20).rotate(0, 90), v(.6, .6, .6, .3));
            }),
            g(u(
              f(m(12), n(-77, -14.5, -12).scale(4, 17.5, 4), v(.7, .7, .7, .2)),
              f(m(), n(-79, .1, -12).scale(3.5, 2, 1.3), v(.4, .5, .6, .2)),
              f(m(), n(-77, .1, -14).scale(1.5, 2, 2), v(.4, .5, .6, .2)),
              f(m(12), n(-77, 3.1, -12).scale(3, 5, 3), v(.4, .5, .6, .2)),
            )),
            g(m(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), v(.6, .6, .6, .3)),
            g(m(9), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), v(.5, .5, .5, .3)),
            g(u(
              f(m(), n(-93, -5.8, -40).scale(9, 1, 5), v(.8, .8, .8, .1)),
              f(m(9), n(-98, -5.8, -40).scale(3, 8, 3), v(.7, .7, .7, .2)),
            )),
            S(n(-98, -4.4, -40).rotate(0, 90)),
            M(n(-115, .2, -12), [0, 0, 3.5]),
            M(n(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            g(u(
              h(
                f(m(6, 0, 0, .6), n(-100, .7, 105.5).scale(8, 1, 11), v(.7, .7, .7, .2)),
                f(m(), n(-101.5, .7, 93.5).scale(10.5, 1, 2), v(.7, .7, .7, .2)),
              ),
              f(m(5), n(-100, .7, 113).scale(4, 3, 4), v(.7, .7, .7, .2)),
            )),
            b(4, e =>
              d(() =>
                g(
                  m(6),
                  n(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                    2.6,
                    1,
                    2.5,
                  ),
                  v(.5 - e / 8, e / 12 + .5, .7, .3),
                )
              )),
            d(() => {
              g(u(f(m(10), i(6, 2, 6), v(.1, .6, .5, .3)), f(m(10), i(3.3, 6, 3.3), v(.1, .6, .5, .5)))),
                g(m(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), v(.4, .4, .4, .3)),
                g(m(10), n(-7.5).rotate(0, 90).scale(2, 2.5, 2), v(.3, .8, .7, .3)),
                g(m(5), n(-7.5).rotate(0, 90).scale(1, 3), v(.5, .5, .5, .5)),
                S(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  g(c, g1(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), v(1, 1, .8, .2))
                ),
                M(n(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              [7.2, 1.5].map(e => g(m(15, 1), n(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), v(.5, .24, .2, .4))),
                g(c, n(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), v(1, 1, .8)),
                g(m(12, 1), n(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), v(.6, .24, .2, .5)),
                g(
                  u(
                    f(m(), n(-4 * t, 3.5, -.5).scale(4, 4, .7), v(.5, .5, .5, .4)),
                    f(m(), i(3, 3, 10), v(.6, .24, .2, .5)),
                    f(m(28, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), v(.6, .24, .2, .5)),
                    f(m(5), n(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), v(.6, .24, .2, .5)),
                    f(m(5), n(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), v(.6, .24, .2, .5)),
                  ),
                  n(t - 100, .7, 97),
                );
            }),
            g(u(
              f(m(), n(-82.07, .8, 106).scale(11, .9, 2.2), v(.7, .7, .7, .1)),
              f(m(45, 1), n(-81, .7, 106).scale3d(7.7), v(.7, .7, .7, .1)),
            )),
            d(() => {
              g(u(
                f(m(45, 1), i(7.5, 1, 7.5), v(.45, .45, .45, .2)),
                f(m(), n(0, 0, -5.5).scale(1.5, 3, 2.7), v(.45, .45, .45, .2)),
              )),
                g(m(8), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), v(.7, .7, .7, .1)),
                g(m(5), n(0, 2).scale(1, 2), v(.3, .3, .3, .2)),
                M(n(0, 3), ...d1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            d(() => {
              [-1, 1].map(e =>
                g(c, g1(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), v(1, 1, .8))
              ),
                g(u(f(m(28, 1), n(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)), f(m(), i(9, 5, 2), v(.3, 0, 0, .3)))),
                g(f(m(28, 1), i(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                g(f(m(5), n(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            d(() => {
              g(u(
                f(m(28, 1), n(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
                f(m(), n(7).scale(9, 5, 2), v(.3, 0, 0, .3)),
                f(m(), n(0, 0, 7).scale(2, 5, 9), v(.3, 0, 0, .3)),
              )),
                g(f(m(28, 1), i(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                g(f(m(5), n(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            d(() => {
              g(u(
                f(m(28, 1), n(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
                f(m(), n(7).scale(9, 5, 2), v(.3, 0, 0, .3)),
                f(m(), n(0, 0, -7).scale(2, 5, 9), v(.3, 0, 0, .3)),
              )),
                g(f(m(28, 1), i(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                g(f(m(5), n(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            g(m(), n(-58, 1, 106).scale(2, .65, 2), v(.7, .7, .7, .2)),
            g(m(), n(-50.7, 1, 99).scale(2, .65, 1), v(.7, .7, .7, .2)),
            g(m(), n(-42, .4, 91).scale(5, 1, 2.5), v(.7, .7, .7, .3)),
            g(m(), n(-34.2, .4, 91).scale(3, 1, 3), v(.7, .7, .7, .3)),
            S(n(-34, 2.7, 96).rotate(-12, 0)),
            g(m(5), n(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), v(.2, .5, .5, .6)),
            [v(.1, .55, .45, .2), v(.2, .5, .5, .3), v(.3, .45, .55, .4)].map((e, t) =>
              d(() => {
                g(m(), n(-23.5, .5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), e),
                  2 === t && g(m(), n(-29.1, .4, 91).scale(2.1, 1, 3), v(.7, .7, .7, .3)),
                  1 === t && g(m(), n(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), v(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => g(c, n(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), v(1, 1, .8))),
            b(3, e =>
              g(
                a(24.7 - .7 * (1 & e)),
                n(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? v(.5, .5, .5, .3) : v(.35, .35, .35, .5),
              )),
            g(u(
              f(m(6, 0, 0, .3), n(0, -.92, 95).scale(14, 2, 14), v(.8, .8, .8, .2)),
              f(m(5), n(0, 0, 95).scale3d(6), v(.3, .3, .3, .5)),
            )),
            S(n(0, 1.7, 82).rotate(0, 180)),
            g(m(5), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), v(.5, .3, .3, .4)),
            g(m(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), v(.5, .6, .7, .3)),
            g(m(), n(0, 16, 129).scale(1.5, 1, 2), v(.5, .6, .7, .3)),
            g(m(7), n(0, 16.2, 133).scale(5, 1, 5), v(.4, .5, .6, .4)),
            g(u(
              h(
                f(m(), n(0, 16, 110.5).scale(12, 1, 3), v(.5, .3, .3, .4)),
                f(m(), n(0, 16, 111).scale(3, 1, 3.8), v(.5, .3, .3, .4)),
              ),
              f(m(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), v(.5, .3, .3, .4)),
            )),
            d(() => {
              g(m(3), n(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), v(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  g(m(6), n(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), v(.7, .7, .7, .4)),
                    g(m(), n(0, 6.2, e + 95).scale(.5, 11, .5), v(.5, .3, .3, .4));
                });
            }),
            d(() => {
              g(m(5), i(5, 1.1, 5), v(.5, .3, .3, .4)),
                g(m(5), i(5.5, .9, 5.5), v(.25, .25, .25, .4)),
                S(n(0, 1.5, -1).rotate(0, 180));
            }),
            M(n(0, 3, 95), ...d1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            M(n(0, 19, 134), [0, 0, 3.5]);
        }),
        d(() => {
          g(a(20), n(0, 1).scale3d(.5), v(1, .3, .4)),
            g(a(30), i(.65, .8, .55), v(1, .3, .4)),
            g(m(), n(0, .9, .45).scale(.15, .02, .06), v(.3, .3, .3)),
            [-1, 1].map(e => {
              g(c, g1(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), v(1, 1, .8)),
                g(
                  f(u(m(15, 1), f(m(), n(0, 0, 1).scale(2, 2, .5))), g1(-90, 0).scale(.1, .05, .1), v(.3, .3, .3)),
                  n(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
                ),
                d(() => {
                  g(m(20, 1), n(.3 * e, -.8).scale(.2, .7, .24), v(1, .3, .4));
                });
            });
        }),
        d(() => {
          g(m(6).slice(0, -1), i(.77, 1, .77), v(1, .3, .5));
        }, 0),
        d(() => {
          g(
            a(30, 24, (e, t, a) => {
              let l = t / 24, r = e * _ * 2 / 30, s = G(l ** .6 * _ / 2);
              return e = l * l * G(e * _ * 14 / 30) / 4,
                23 < t
                  ? { x: a.C = 0, y: -.5, z: 0 }
                  : { x: J(r) * s, y: J(l * _) - l - e, z: G(r) * s + G(e * _ * 2) / 4 };
            }),
            i(.7, .7, .7),
            v(1, 1, 1),
          ), [-1, 1].map(e => g(a(12), n(.16 * e, .4, -.36).scale3d(.09)));
        }, 0),
        d(() => {
          g(m(6, 1), i(.13, 1.4, .13), v(.3, .3, .5, .1)),
            g(m(10), n(0, 1).scale(.21, .3, .21), v(1, .5, .2)),
            g(m(3), n(0, -1).rotate(90, 90).scale(.3, .4, .3), v(.2, .2, .2, .1));
        }, 0);
    });
});
