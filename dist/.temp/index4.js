let I,
  A,
  J,
  k,
  F,
  T,
  Y,
  D,
  Z,
  r,
  $,
  e1,
  t1,
  a1,
  x,
  y = 0,
  l1 = 0,
  r1 = 0,
  z = 0,
  s1 = 0,
  o1 = 0,
  c1 = 0,
  w = 0,
  n1 = 0,
  i1 = 0,
  j = 0,
  C = 1,
  O = 180,
  Q = .066,
  B = [],
  H = [],
  f1 = [],
  m1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  P = { x: 0, y: 0, z: 0 },
  X = e => e < 0 ? -e : e,
  h1 = (e, t) => e < t ? e : t,
  R = (e, t) => t < e ? e : t,
  u1 = (e, t) => X(e) > t ? e : 0,
  q = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  x1 = e => N1(K(e * _), V(e * _)) / _,
  y1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * q(a) || 0,
  L = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  g1 = (e, t) => (e = q(e), L(e, 1 - e, t)),
  p = (
    e,
    t = X1,
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
  N = (
    e = P1,
    t = U,
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
  o = (e, t, a) => P1.translate(e, t, a),
  c = (e, t, a) => P1.rotate(e, t, a),
  n = (e, t, a) => P1.scale(e, t, a),
  h = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  m = (e, t, a) => (e.C = a, e.u = t, e),
  v1 = (e, l, t = e.u) =>
    m(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.C,
    ),
  i = (e, t, a) => e.map(e => v1(e, t, a)),
  z1 = (a, l = 0) =>
    h(a, e => {
      let t = V(2 * W * e / a);
      return { x: K(2 * W * e / a), y: 0, z: X(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  d1 = (l, r, s) =>
    l.map((e, t, { length: a }) => m([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.u, s)),
  f = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? z1(e, l) : m1,
    l = v1(e, o(0, 1).scale3d(0 < a ? a : 1)),
    e = v1(e, o(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...d1(e, l, t), l, e]),
  l = (l, r = l, s = (e, t) => (t *= W / r, { x: V(e *= 2 * W / l) * K(t), y: V(t), z: K(e) * K(t) })) => {
    let o = [];
    for (let a = 0; l > a; a++) {
      for (let t = 0; r > t; t++) {
        let e = m([], 0, 1);
        o.push(e),
          e.push(s(a, t, e)),
          t && e.push(s((a + 1) % l, t, e)),
          r - 1 > t && e.push(s((a + 1) % l, t + 1 % r, e)),
          e.push(s(a, t + 1 % r, e));
      }
    }
    return o;
  },
  p1 = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  w1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = E1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  S1 = (l, r) => {
    let s, o, c, n = r.B;
    for (let e = 0; n.length > e; ++e) {
      if ((s = p1(l, n[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], n = r.B, e = r.v;
        let t = n.at(-1), a = p1(l, t) - l.w;
        for (let e of n) {
          s = p1(l, e) - l.w,
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
          l: 2 < o.length && { B: m(o, n.u, n.C), v: e, A: r },
          j: 2 < c.length && { B: m(c, n.u, n.C), v: e, A: r },
        };
      }
    }
    return { l: o, j: c };
  },
  A1 = (e, t, a = w1(t.B)) => {
    let l, r, s;
    return e
      ? ({ l, j: r } = S1(e, t), l || r || e.o.push(t), l && (e.l = A1(e.l, l, a)), r && (e.j = A1(e.j, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, o: [t], l: 0, j: 0 }),
      e;
  },
  a = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { l: a, j: l } = S1(e, t);
        a || l || (0 < s * p1(e, r) ? a = t : l = t), a && (e.l ? c(e.l, a) : o.push(a)), l && e.j && c(e.j, l);
      };
    for (let e of r.o) c(t, e);
    return o;
  },
  s = (e, t) => e && (t(e), s(e.l, t), s(e.j, t)),
  M1 = e => (s(e, t => {
    let e = t.j;
    t.j = t.l, t.l = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.o) e.v = !e.v;
  }),
    e),
  I1 = e => e.length ? e.reduce((e, t) => A1(e, { B: t, v: 0, A: 0 }), 0) : e,
  u = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = I1(l), t) {
        t = I1(t), s(l, e => e.o = a(t, e, 1)), s(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) A1(l, e, t);
      }
      return l;
    }),
  g = (e, ...t) => {
    let a = e => {
        let t;
        return e.A && ((t = l.get(e.A)) ? (r.delete(t), e = a(e.A)) : l.set(e.A, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = M1(u(M1(I1(e)), ...t)),
      s(e, t => {
        for (let e of t.o) r.set(a(e), e.v);
      }),
      Array.from(r, ([{ B: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return m(t ? a.reverse() : a, e.u, e.C);
      });
  },
  E = (e, t, a) => L(e, t, 1 - U1(-a * Q)),
  k1 = () => {
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
      ][r1 = f1.reduce((e, { i: t }) => e + t, 0)] + " / XIII";
  },
  F1 = () => {
    localStorage.DanteSP22 = JSON.stringify([H.map(({ i: e }) => e), f1.map(({ i: e }) => e), s1, y, k]);
  },
  Y1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  v = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  d = (e, t = new DOMMatrix(), a) => r.o.push(...i(e, t, a)),
  b = (e, t = 1) => {
    let a = r;
    return B.push(t = { m: new DOMMatrix(), H: B.length, G: t, o: [] }), e(r = t), r = a, t;
  },
  D1 = e => (e = e.transformPoint(), E1(P.x - e.x, P.y - e.y, P.z - e.z)),
  S = e => {
    let t = r,
      a = H.length,
      l = {
        i: 0,
        g: 0,
        h: 0,
        m: t.m,
        I: e,
        F() {
          l.g = E(l.g, l.i, 4),
            l.h = E(l.h, l.i, 1),
            N(t.m).multiplySelf(e),
            F && D1(U) < 3 && (l.g < .3 || .7 < l.g)
            && (l.i = l.i ? 0 : 1, a && 1 / 0 > C && (C = y + 1, h4.innerHTML = "* click *"), s1 = a, F1()),
            !a && l.i && .8 < l.g && (l.i = 0,
              r1 < 13
                ? 1 / 0 > C && (C = y + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
                : z
                  || (1 / 0 > C
                    && (C = y + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                    z = 1)),
            U.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    H.push(l),
      d(f(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
      d(f(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
      d(f(), e.translate(0, -.4).scale(.5, .1, .5), v(.5, .5, .4));
  },
  M = (f, ...e) => {
    let m = -1,
      h = 0,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      S = {
        i: 0,
        F() {
          if (!S.i) {
            let e, t, a, l, r, s, o, c, n = 1, i = 1 / 0;
            for (let l of M) {
              let { x: e, z: t, w: a } = l;
              t = (e = E1(k - e, F - t)) - a, c ||= e < a, 0 < t && i > t && (i = t, I = l), n = h1(n, e / a);
            }
            c
            || ({ x: e, z: t, w: a } = I,
              l = k - e,
              r = F - t,
              s = E1(l, r),
              o = N1(-r, l),
              p && (u = (W1() - .5) * W / 2, b = q(b / (1 + W1()))),
              o += u,
              m = -V(o),
              h = K(o),
              .1 < s && (s = h1(s, a) / (s || 1), k = l * s + e, F = r * s + t)),
              p = c,
              b = E(b, 6 * (1 - n) + 3, n + 3),
              Y = E(Y, k = E(k, k + m, b), b),
              D = E(D, F = E(F, F + h, b), b),
              g = y1(g, N1(Y - v, D - d) / _ - 180, 1 - U1(-3 * Q)),
              D1(N(A.m).multiplySelf(f).translateSelf(v = Y, 0, d = D).rotateSelf(0, g, 7 * K(1.7 * y))) < 1.6
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
                ][r1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > C && (C = y + (r1 && r1 < 12 ? 5 : 7), h4.innerHTML = e),
                k1(),
                F1());
          }
          S.i
            && N(B[2].m).translateSelf(
              t % 4 * 1.2 - 1.7 + K(y + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + X(t % 4 - 2) + V(y / 1.5 + t) / 6,
            );
        },
      },
      A = r,
      t = f1.length,
      M = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      I = M[0],
      { x: k, z: F } = I,
      Y = k,
      D = F;
    f1.push(S);
  },
  C1 = (e, t, a, l) => {
    e.translateSelf(t + K(y + 2) / 5, a + K(.8 * y) / 3, l).rotateSelf(2 * K(y), K(.7 * y), K(.9 * y));
  },
  T1 = (e, t = 35633) => (t = G.c6x(t), G.s3c(t, e), G.c6a(t), t),
  j1 = (e, t) => {
    let a = {}, l = G.c1h();
    return G.abz(l, e), G.abz(l, T1(t, 35632)), G.l8l(l), e => e ? a[e] || (a[e] = G.gan(l, e)) : G.u7y(l);
  },
  O1 = (e, t, a) => {
    let l;
    A
      ? (l = c(0, 40 * K(l1) - 70),
        p(l, R1, 37),
        p(l, R1, 38),
        p(l, R1, 39),
        G.uae(e, !1, R1),
        G.d97(4, B[39].D - B[37].s, 5123, 2 * B[37].s))
      : (G.uae(e, !1, R1),
        G.d97(4, (t ? B[39].D : B[37].s) - 3, 5123, 6),
        G.uae(e, !1, q1),
        G.das(4, B[a].D - B[a].s, 5123, 2 * B[a].s, f1.length),
        G.das(4, B[40].D - B[40].s, 5123, 2 * B[40].s, H.length));
  },
  Q1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  B1 = e => K(e * W * 2),
  H1 = new AudioContext(),
  P1 = new DOMMatrix(),
  U = new DOMMatrix(),
  X1 = new Float32Array(16),
  R1 = new Float32Array(624),
  q1 = new Float32Array(624),
  L1 = new Uint8Array(65536),
  { PI: W, atan2: N1, sin: K, cos: V, hypot: E1, exp: U1, random: W1 } = Math,
  _ = W / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  K1 = H1.createBufferSource(),
  G = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in G) G[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = G[e];
Q1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let u = [new Float32Array(16), new Float32Array(16)],
          e = a => {
            if (
              G.f1s(),
                requestAnimationFrame(e),
                l1 += l = (a - (I || a)) / 1e3,
                y += Q = A ? 0 : h1(.066, l),
                I = a,
                0 < Q
            ) {
              let e = 1, t = () => N(P1, B[++e].m);
              for (
                Y(),
                  C && y > C && (C = 0, h4.innerHTML = ""),
                  k = E(k, H[9].h, .2 + .3 * X(2 * H[9].h - 1)),
                  J = E(J, z ? E(J, -9, 1.5) : q(y / 3), 1),
                  a1 = g1(H[12].g, H[13].g),
                  t1 = L(E(t1, 0, 1), x1(t1 + 60 * Q), H[5].g - H[6].h),
                  $ = L(E($, 0, 5), x1($ + 56 * Q), a1),
                  e1 = L(E(e1, 0, 4), x1(e1 + 48 * Q), a1),
                  C1(t(), -12, 4.2, 40 * J - 66),
                  t().translateSelf(0, 0, -15).scaleSelf(1, q(1.22 - H[1].g), 1),
                  t().translateSelf(0, 0, 15).scaleSelf(1, q(1.22 - H[2].g), 1),
                  t().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, q(1.1 - H[6].g), 1),
                  t().translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - H[12].g),
                  t().translateSelf(
                    0,
                    .01 < H[3].g ? (5 * V(1.5 * y) + 2) * H[3].h * (1 - H[2].g) + -15 * (1 - H[3].g) : -500,
                    0,
                  ),
                  l = h1(H[2].h, 1 - H[4].h),
                  t().translateSelf(l * K(.7 * 3 + .7 * y) * 12),
                  t().translateSelf(l * K(3 + y) * 8.2),
                  t().translateSelf(l * K(y / 1.5 + 2) * 12),
                  t().translateSelf(9.8 * (1 - l)),
                  a = q(1 - 5 * l) * g1(H[4].g, H[5].g),
                  t().translateSelf(0, a * K(1.35 * y) * 4),
                  t().translateSelf(0, 0, a * K(.9 * y) * 8),
                  t().translateSelf(0, -6.5 * H[4].h),
                  t().translateSelf(-75, (1 - H[5].h) * (1 - H[6].g) * 3, 55).rotateSelf(180 * (1 - H[5].h) + t1, 0),
                  l = g1(H[7].h, H[6].h),
                  t().translateSelf(0, 3.5 * (1 - R(H[6].g, H[7].g)) + l * K(y) * 5),
                  t().translateSelf(0, l * K(y + 3) * 6, 6 * K(.6 * y + 1) * l),
                  t().translateSelf(0, -7.3 * H[7].h),
                  C1(t(), -123, 1.4, 55 + -65 * k),
                  a = g1(H[10].g, H[11].g),
                  t().translateSelf(0, -2, a * X(K(1.1 * y)) * -8.5 + 10),
                  t().translateSelf(0, -2, a * X(K(2.1 * y)) * -8.5 + 10),
                  l = (1 - H[10].g) * (1 - a),
                  t().translateSelf(0, -2, -8.5 * R(l, a * X(K(1.5 * y))) + 10),
                  a = g1(H[8].h, H[12].h),
                  l = 0;
                l < 4;
                l++
              ) {
                t().translateSelf(
                  (2 < l ? 2 * (1 - a) + a : 0) - 100,
                  a * K(1.3 * y + 1.7 * l) * (3 + l / 3) + .7,
                  115 + (1 & l ? -1 : 1) * (1 - H[8].h) * (1 - H[12].h) * -7
                    + R(a, .05) * V(1.3 * y + 7 * l) * (4 - 2 * (1 - l / 3)),
                );
              }
              for (
                t().translateSelf(2.5 * (1 - a) - 139.7, -3 * (1 - H[8].g) + a * K(.8 * y) * -1 - 1.8, 93.5).rotateSelf(
                  V(1.3 * y) * (3 * a + 3),
                  0,
                ),
                  t().translateSelf(-81, .6, 106).rotateSelf(0, 40 + $),
                  t().translateSelf(-65.8, .8, 106).rotateSelf(0, e1),
                  t().translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - e1),
                  t().translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + e1),
                  a = g1(H[13].h, H[14].h),
                  l = 0;
                l < 3;
                ++l
              ) {
                t().translateSelf(0, (1 - H[13].h) * (1 - H[14].h) * (l ? 0 : 3) + a * K(1.5 * y + 1.5 * l) * 4);
              }
              for (
                t().translateSelf(-2 * K(y)).rotateSelf(25 * K(y)),
                  l = g1(g1((H[14].g + H[14].h) / 2, H[13].h), (H[15].g + H[15].h) / 2),
                  t().translateSelf(0, 16 * l, 8.5 * q(2 * l - 1) + 95),
                  x(t),
                  t = 0;
                e >= t;
                ++t
              ) {
                p(B[t].m, R1, t - 1);
              }
              for (t = 0; t < 13; ++t) f1[t].F(), p(U, q1, t);
              for (t = 0; t < 16; ++t) H[t].F(), p(U, q1, t + 13), q1[16 * t + 223] = 1 - H[t].g;
              o(), G.b6o(36160, f), G.v5y(0, 0, 128, 128), G.c4s(16640), G.cbf(!0, !1, !0, !1);
              var { x: a, y: l, z: r } = P;
              G.uae(o("b"), !1, p(N().rotateSelf(0, 180).invertSelf().translateSelf(-a, -l, .3 - r))),
                O1(o("c"), 0, 41),
                G.c4s(256),
                G.cbf(!1, !0, !1, !0),
                G.uae(o("b"), !1, p(N().translateSelf(-a, -l, -r - .3))),
                O1(o("c"), 0, 41),
                G.f1s();
            }
            F = 0,
              N(P1, g),
              A
                ? g.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
                : g.rotateSelf(-j, -O).invertSelf().translateSelf(-w, -n1, -i1),
              v(),
              G.b6o(36160, i),
              G.v5y(0, 0, 2048, 2048),
              n[0](54.7 * 1.1),
              n[1](126 * 1.1),
              c(),
              G.b6o(36160, null),
              G.v5y(0, 0, G.drawingBufferWidth, G.drawingBufferHeight),
              G.cbf(!0, !0, !0, !0),
              G.c4s(16640),
              G.uae(c("a"), !1, p(D)),
              G.uae(c("b"), !1, p(g)),
              G.uae(c("i"), !1, u[0]),
              G.uae(c("j"), !1, u[1]),
              G.ubu(c("k"), w, n1, i1),
              O1(c("c"), !T, 42),
              s(),
              G.ubu(s("j"), G.drawingBufferWidth, G.drawingBufferHeight, l1),
              G.ubu(s("k"), w, n1, i1),
              G.uae(s("b"), !1, p(N(g).invertSelf())),
              G.d97(4, 3, 5123, 0),
              G.b6o(36160, f),
              G.f1s();
          },
          g = new DOMMatrix(),
          a = new DOMMatrix(),
          t = m,
          l = T1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          v = j1(
            T1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          s = j1(
            T1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          o = j1(
            l,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`,
          ),
          c = j1(
            l,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          d = h(8, () => ({})),
          n = h(2, e => {
            let t = G.c25();
            return G.a4v(33984 + e),
              G.b9j(3553, t),
              G.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              G.t2z(3553, 10241, 9729),
              G.t2z(3553, 10240, 9729),
              G.t2z(3553, 34893, 515),
              G.t2z(3553, 34892, 34894),
              G.t2z(3553, 10243, 33071),
              G.t2z(3553, 10242, 33071),
              l => {
                let r = 0, s = 0, o = 0, c = 1 / 0, n = -1 / 0, i = 1 / 0, f = -1 / 0, m = 1 / 0, h = -1 / 0;
                G.fas(36160, 36096, 3553, t, 0),
                  G.c4s(256),
                  N().scale3dSelf(l).multiplySelf(N(Z[e], a).multiplySelf(g).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = d[a],
                    t = (e.x = 4 & a ? 1 : -1, e.y = 2 & a ? 1 : -1, e.z = 1 & a ? 1 : -1, U.transformPoint(e));
                  r -= e.x = (0 | t.x) / l / t.w, s -= e.y = (0 | t.y) / l / t.w, o -= e.z = (0 | t.z) / l / t.w;
                }
                for (N().rotateSelf(298, 139).translateSelf(r / 8, s / 8, o / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: t, z: a } = U.transformPoint(d[l]);
                  c = h1(c, e), n = R(n, e), i = h1(i, t), f = R(f, t), m = h1(m, a), h = R(h, a);
                }
                l = 10 + e,
                  m *= m < 0 ? l : 1 / l,
                  h *= 0 < h ? l : 1 / l,
                  G.uae(
                    v("b"),
                    !1,
                    p(
                      N(P1, a).scaleSelf(2 / (n - c), 2 / (f - i), 2 / (m - h)).translateSelf(
                        (n + c) / -2,
                        (f + i) / -2,
                        (m + h) / 2,
                      ).multiplySelf(U),
                      u[e],
                    ),
                  ),
                  O1(v("c"), !T, 42);
              };
          }),
          i = G.c5w(),
          r = (l = G.c25(), G.c3z()),
          f = G.c5w();
        o(),
          G.uae(o("a"), !1, p(Y1(1e-4, 2, 1.4, .4))),
          c(),
          G.ubh(c("q"), 2),
          G.ubh(c("h"), 1),
          G.ubh(c("g"), 0),
          s(),
          G.ubh(s("q"), 2),
          G.b6o(36160, i),
          G.d45([0]),
          G.r9l(0),
          G.b6o(36160, f),
          G.bb1(36161, r),
          G.r4v(36161, 33190, 128, 128),
          G.f8w(36160, 36096, 36161, r),
          G.a4v(33986),
          G.b9j(3553, l),
          G.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null),
          G.fas(36160, 36064, 3553, l, 0),
          G.b9j(3553, G.c25()),
          G.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, t),
          G.t2z(3553, 10241, 9987),
          G.t2z(3553, 10240, 9729),
          G.gbn(3553),
          G.e8z(2929),
          G.e8z(2884),
          G.c70(1),
          G.c7a(1029),
          G.d4n(515),
          G.c5t(0, 0, 0, 0),
          (() => {
            let e,
              n,
              i,
              f,
              m,
              h,
              u,
              g,
              v,
              d,
              p,
              b,
              S,
              l,
              t = !0,
              r = [],
              a = () => {
                b4.innerHTML = "Music: " + t, A || !t ? K1.disconnect() : K1.connect(H1.destination);
              },
              s = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                D = Y1(.3, 181, e, 1.732051),
                  Z = [Y1(.3, 55, e, 1.732051), Y1(55, 181, e, 1.732051)],
                  f = g = void 0,
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
                  A = e, T = t, s(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), K1.start());
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
                if (!A && (e.target === hC && (F = 1), T)) {
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
                T && (e || t) && (O += .1 * e, j += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    T && e > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, h = e, u = t, g = a, d = O, p = j)
                      : void 0 === f && (m = 0, n = e, i = t, f = a);
                  }
                  e = l1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c;
                if (!A) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    g === a && (O = d + (e - h) / 2.3, j = p + (t - u) / 2.3, v = 1),
                      f === a
                      && (a = (n - e) / 20,
                        r = X(a),
                        o = X(s = (i - t) / 20),
                        (c = .5 < R(r, o)) && (m = 1),
                        b = (c && .2 < r) * q(a, -1),
                        S = (c && .2 < o) * q(s, -1),
                        2 < r && (n = e + 20 * (a < 0 ? -1 : 1)),
                        2 < o && (i = t + 20 * (s < 0 ? -1 : 1)));
                  }
                }
              },
              hC.ontouchend = t => {
                let a;
                document.activeElement === document.body && t.preventDefault();
                for (let e of t.changedTouches) {
                  e.identifier === g
                    ? (g = void 0, v || (a = 1), v = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (a = 1), m = 0)
                    : a = 1;
                }
                t.target === hC && a && e && .02 < (t = l1 - e) && t < .7 && (F = 1);
              },
              Y = () => {
                o1 = S + (r[4] ? 1 : 0) - (r[5] ? 1 : 0), c1 = b + (r[2] ? 1 : 0) - (r[3] ? 1 : 0);
                let a = navigator.getGamepads()[0];
                if (a) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = a.buttons;
                  a = a.axes,
                    T && (j += Q * u1(a[3], .3) * 80, O += Q * u1(a[2], .3) * 80),
                    o1 += e(12) - e(13) - u1(a[1], .2),
                    c1 += e(14) - e(15) - u1(a[0], .2),
                    e(9) && o(!0),
                    (a = e(3) || e(2) || e(1) || e(0)) && !l && (F = 1),
                    l = a;
                }
              },
              document.onvisibilitychange = onblur = onresize = s,
              o(!0);
          })(),
          (() => {
            let u,
              o,
              c,
              n,
              i,
              f,
              m,
              h,
              g,
              v,
              d,
              p,
              b,
              S,
              A = 1,
              M = 2,
              I = 15,
              k = { x: 0, y: 0, z: 0 },
              F = () => (M ? H[s1] : B[o && 1 === B[o].G && o || 0]).m,
              Y = e => {
                let { x: t, y: a, z: l } = 1 < M
                  ? N(H[s1].m).multiplySelf(H[s1].I).transformPoint({ x: 0, y: s1 || .9 < J ? 15 : 1, z: -2.4 })
                  : F().transformPoint(k);
                e && (m = (t - P.x) / Q, h = (l - P.z) / Q), P.x = t, P.y = a, P.z = l;
              },
              D = (e, t, a) => {
                N(F()).invertSelf(),
                  U.m41 = U.m42 = U.m43 = 0,
                  e = U.transformPoint({ x: e, z: a, w: 0 }),
                  k.x += e.x,
                  k.y += t,
                  k.z += e.z,
                  Y();
              },
              C = (e, t, a, l) => L(e, t, A || (q(X(t - e) ** .5 - a) + 1 / 7) * (1 - U1(-1.5 * l * Q)));
            x = t => {
              let a;
              Y(u),
                G.r9r(0, 0, 128, 128, 6408, 5121, L1),
                (() => {
                  let t, e, a, l, r, s, o = 0, c = 0, n = 0, i = 0, f = -1, m = 0, h = 0;
                  for (t = 0; t < 36; ++t) {
                    for (e = 512 * t, a = 96; a < 416; a += 4) {
                      for (l = 0; l < 2; ++l) {
                        (r = L1[e + a + l]) > i && (i = r),
                          r + (s = L1[e + a + l + 2]) && (f < 0 || f === t)
                          && (f = t, s === u ? ++o : c && c !== s || (c = s, ++n));
                      }
                    }
                  }
                  for (u = f < 0 ? 0 : n > 2 * o ? c : u, o = 36; o < 128; o += 1) {
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
                        s = L1[l + r];
                        let e = L1[l + r + 2];
                        (r ? 64 < a : a < 64) ? c = R(c, s) : n = R(n, s), r ? t = R(t, e) : f = R(f, e);
                      }
                    }
                    X(n - c) > X(m) && (m = n - c), X(t - f) > X(h) && (h = t - f);
                  }
                  v = q(1 - .015 * R(X(m), X(h))), D(m / 255, i / 255, h / 255);
                })(),
                !M && u === o || (o = u, e = N(F()).invertSelf().transformPoint(P), k.x = e.x, k.y = e.y, k.z = e.z),
                M = M && (u ? 0 : 1);
              var { x: e, y: l, z: r } = P;
              l < (e < -20 || r < 109 ? -25 : -9) && (M = 2),
                1 === u && (H[9].i = e < -15 && r < 0 ? 1 : 0),
                d = L(E(d, l, 2), l, M || 8 * X(d - l)),
                b = C(b, d, 2, 1),
                p = C(p, e, .5, 1),
                S = C(S, r, .5, 1),
                f = E(f, a1 * (27 < u && u < 32), 2),
                T
                  ? (l = M + (1 - U1(-18 * Q)), w = L(w, e, l), n1 = L(n1, d + 1.5, l), i1 = L(i1, r, l), O = x1(O))
                  : (i1 = C(i1, S + -18 + 5 * f, 1, 2 + f),
                    n1 = C(n1, R(b + q((-60 - r) / 8, 0, 20) + 13 + 9 * f, 6), 4, 2),
                    w = C(w, p, 1, 2 + f),
                    l = h1(-6, -X(S - i1)),
                    O = y1(O, 90 - x1(N1(l, a = p - w) / _), A + (1 - U1(-10 * Q))),
                    j = y1(j, 90 - N1(E1(l, a), n1 - b) / _, A + (1 - U1(-10 * Q)))),
                j = q(j, -87, 87),
                A = 0;
              let s = t().translateSelf(e, d, r).rotateSelf(0, n);
              for (a = 0; a < 2; ++a) {
                let e = 9.1 * y - W * a;
                N(s, t()).translateSelf(0, i * q(.45 * K(e - W / 2))).rotateSelf(i * K(e) * .25 / _, 0);
              }
              l = q(o1, -1),
                a = q(c1, -1),
                e = u1(E1(l, a) ** .5, .1),
                r = N1(l, a),
                l = e * X(l) * K(r),
                a = e * X(a) * V(r),
                e && (c = 90 - r / _),
                i = E(i, e, 10),
                n = y1(n, c, 1 - U1(-8 * Q)),
                I = u ? 5 : E(I, M ? 10 : 19, 2.2),
                m = u || M ? 0 : E(m, 0, 3),
                h = u || M ? 0 : E(h, 0, 3),
                g = M ? 0 : E(g, u ? 7 * q(2 * e) * v : 0, u ? 9 : 1),
                D(
                  Q * (m + g * (a * V(r = T ? (180 + O) * _ : 0) - l * K(r))),
                  -I * Q,
                  Q * (h + g * (a * K(r) + l * V(r))),
                );
            };
          })(),
          requestAnimationFrame(e);
      }
    },
    m = new Image();
  m.onload = m.onerror = a,
    m.src = t,
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
                g = [],
                f = new Int32Array(768 * m),
                v = 2 ** (a - 9) / m,
                d = W * 2 ** (l - 8) / m,
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
                      if (!(h = g[u])) {
                        let l,
                          r,
                          s = 0,
                          o = 0,
                          c = h = u,
                          n = L < 2
                            ? e => e % 1 * 2 - 1
                            : B1,
                          i = L < 2
                            ? L < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : B1,
                          f = new Int32Array(C + T + q);
                        for (let t = 0, a = 0; C + T + q > t; ++t, ++a) {
                          let e = 1;
                          C > t ? e = t / C : C + T > t || (e = (1 - (e = (t - C - T) / q)) * 3 ** (-j / 16 * e)),
                            a < 0
                            || (a -= 4 * m,
                              r = .00396 * 2 ** ((c + M - 256) / 12),
                              l = .00396 * 2 ** ((c + F - 256) / 12) * (1 + (L ? 0 : .0072))),
                            f[t] = 80
                                * (n(s += r * e ** (I / 32)) * A + i(o += l * e ** (Y / 32)) * k
                                  + (D ? (2 * W1() - 1) * D : 0))
                                * e | 0;
                        }
                        h = g[h] = f;
                      }
                      for (let e = 0, t = 2 * a; h.length > e; ++e, t += 2) f[t] += h[e];
                    }
                  }
                  for (let e, t = 0; m > t; ++t) {
                    r = 0,
                      h = 2 * (a + t),
                      ((e = f[h]) || c)
                      && (o = .00308 * O,
                        1 !== L && 4 !== L || (o *= K(v * h * W * 2) * R / 512 + .5),
                        o = 1.5 * K(o),
                        n += o * i,
                        i += o * (s = (1 - Q / 255) * (e - i) - n),
                        e = 4 === L ? i : 3 === L ? s : n,
                        L || (e = (e *= 22e-5) < 1 ? -1 < e ? K(e / 4 * W * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = K(d * h) * H / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * P / 255, e += f[h - p] * P / 255),
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
            [A, M, I, k, F, Y, D, C, T, t, j, a, O, Q, B, H, l, P, X, R] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][L],
            q = 4 * t ** 2;
          e(5513), e(4562), e(3891), Q1(++L < 5 ? s : r);
        },
        e = H1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        E = e.getChannelData(1);
      K1.buffer = e, K1.loop = !0, Q1(s);
    })(() => {
      Q1(() => {
        let s,
          t = 0,
          l = [],
          o = [],
          c = [],
          n = [],
          r = e => {
            let { x: t, y: a, z: l } = s[e], r = (h[0] = t, h[1] = a, h[2] = l, f.get(e = "" + (s.C ? m : i)));
            return void 0 !== r
              ? (t = 3 * r, n[t] = (n[t++] + i[5]) / 2, n[t] = (n[t++] + i[6]) / 2, n[t] = (n[t] + i[7]) / 2)
              : (f.set(e, r = f.size), o.push(t, a, l, h[3]), c.push(i[4]), n.push(i[5], i[6], i[7])),
              r;
          },
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        for (let e of B) {
          for (s of (h[3] = 40 === e.H ? -14 : e.G && e.H, e.o)) {
            let { x: e, y: t, z: a } = w1(s);
            i[4] = 0 | s.u, i[5] = 32767 * e, i[6] = 32767 * t, i[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); s.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.o = null, e.s = t, e.D = t = l.length;
        }
        G.b11(34962, G.c1b()),
          G.b2v(34962, new Float32Array(o), 35044),
          G.v7s(0, 4, 5126, !1, 0, 0),
          G.b11(34962, G.c1b()),
          G.b2v(34962, new Int16Array(n), 35044),
          G.v7s(1, 3, 5122, !0, 0, 0),
          G.b11(34962, G.c1b()),
          G.b2v(34962, new Uint32Array(c), 35044),
          G.v7s(2, 4, 5121, !0, 0, 0),
          G.b11(34963, G.c1b()),
          G.b2v(34963, new Uint16Array(l), 35044),
          G.e3x(0),
          G.e3x(1),
          G.e3x(2),
          Q1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.DanteSP22);
          H.map((e, t) => e.g = e.h = e.i = t ? 0 | a[t] : 0),
            f1.map((e, t) => e.i = 0 | l[t]),
            s1 = e,
            k = r,
            y = t,
            Q = 0;
        } catch {}
        k1(), J = q(s1);
      });
      let t = h(11, e => o(K(e / 10 * W), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        s = h(10, e => d1(v1(z1(18), t[e]).reverse(), v1(z1(18), t[e + 1]), 1)).flat();
      b(() => d([m1.slice(1)], o(-2).scale3d(3).rotate(90, 0)), 0),
        b(() => {
          let t = e =>
              g(
                i(f(), o(0, -e / 2).scale(6, e - 1, 2.2)),
                i(f(), o(0, -e / 2 - 6).scale(4, e - 3, 4)),
                i(f(32, 1), o(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            a = () => b(() => h(7, e => d(i(f(6, 1), o(4 * (e / 6 - .5), 3).scale(.2, 3, .2), v(.3, .3, .38))))),
            e = g(
              i(f(30, 1, 1.15, 1), o(0, -3).scale(3.5, 1, 3.5), v(.7, .4, .25, .7)),
              i(f(30, 1, 1.3, 1), o(0, -2.5).scale(2.6, 1, 3), v(.7, .4, .25, .2)),
              i(f(), o(4, -1.2).scale3d(2), v(.7, .4, .25, .3)),
            ),
            l = (b(() => {
              d(e), S(o(0, -3, 4));
            }),
              S(o(-5.4, 1.5, -19).rotate(0, -90)),
              M(o(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              M(o(0, 2.8), [5, 10, 3], [-5, 10, 3], ...z1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * X(e)])),
              m1.map(({ x: e, z: t }) => d(f(6), o(3 * e, 3, 15 * t).scale(.7, 4, .7), v(.6, .3, .3, .4))),
              [-15, 15].map((e, t) => {
                a(),
                  a(),
                  d(f(), o(0, 6.3, e).scale(4, .3, 1), v(.3, .3, .3, .4)),
                  d(f(), o(0, 1, e).scale(3, .2, .35), v(.5, .5, .5, .3)),
                  d(f(), o(0, 0, t ? 22 : -23).scale(3, 1, 8), v(.9, .9, .9, .2)),
                  h(5, e =>
                    d(
                      s,
                      o(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                      v(1, 1, .8, .2),
                    ));
              }),
              d(f(), o(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), v(.8, .8, .8, .2)),
              d(f(), o(3, 1.5, -20).scale(.5, 2, 5), v(.7, .7, .7, .2)),
              d(f(), o(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), v(.75, .75, .75, .2)),
              d(f(5), o(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), v(.6, .3, .3, .4)),
              d(f(), c(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), v(.8, .2, .2, .5)),
              d(g(
                u(
                  i(f(6, 0, 0, .3), o(8, -3, -4).scale(13, 1, 13), v(.7, .7, .7, .2)),
                  i(f(6), o(0, -8).scale(9, 8, 8), v(.4, .2, .5, .5)),
                  i(f(6, 0, 0, .3), o(0, -.92).scale(13, 2, 13), v(.8, .8, .8, .2)),
                ),
                i(f(5), n(5, 30, 5), v(.4, .2, .6, .5)),
                i(f(5, 0, 1.5), o(0, 1).scale(4.5, .3, 4.5), v(.7, .5, .9, .2)),
                i(f(), c(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), v(.5, .5, .5, .5)),
                i(f(6), o(15, -1.5, 4).scale(3.5, 1, 3.5), v(.5, .5, .5, .5)),
              )),
              b(() => {
                d(f(5), o(0, -.2).scale(5, 1, 5), v(.6, .65, .7, .3)), S(o(0, 1.2));
              }),
              S(o(15, -2, 4)),
              b(() => {
                d(
                  g(
                    u(
                      i(f(), n(1.5, 1, 5), v(.9, .9, .9, .2)),
                      i(f(6), n(4, 1, 5), v(.9, .9, .9, .2)),
                      i(f(), o(0, -2).scale(2, 3.2, 1.9), v(.3, .8, .5, .5)),
                      i(f(16, 1, 0, 4), n(1, 1, 1.5).rotate(0, 90), v(.9, .9, .9, .2)),
                    ),
                    i(f(), n(1.3, 10, 1.3), v(.2, .7, .4, .6)),
                  ),
                  o(0, 0, 45),
                ), M(o(0, 2.8, 45), [0, 0, 4.5]);
              }),
              [35, 55].map(a =>
                b(() => {
                  m1.map(({ x: e, z: t }) => {
                    d(f(11, 1), o(4 * e, 4, a + 4 * t).scale(.8, 3, .8), v(.5, .3, .7, .6)),
                      d(f(), o(4 * e, 7, a + 4 * t).scale(1, .3), v(.5, .5, .5, .3));
                  }),
                    d(g(
                      i(f(), o(0, 0, a).scale(5, 1, 5), v(.8, .8, .8, .3)),
                      ...[-1, 1].map(e => i(f(), o(5 * e, .2, a).rotate(-30 * e).scale(4, 1, 2), v(.8, .8, .8, .3))),
                    )),
                    d(f(), o(0, -3, a).scale(8, 2, 8), v(.4, .4, .4, .3));
                })
              ),
              d(f(), o(-18.65, -3, 55).scale(2.45, 1.4, 2.7), v(.9, .9, .9, .2)),
              b(() => {
                d(f(3), o(-23, -1.7, 55.8).scale(5, .7, 8.3), v(.3, .6, .6, .2)),
                  d(f(8), o(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), v(.8, .8, .8, .2)),
                  d(f(), o(-23, -3, 55).scale(5.2, 1.7, 3), v(.5, .5, .5, .3)),
                  d(f(), o(-23, -2.2, 62).scale(3, 1, 4), v(.5, .5, .5, .3)),
                  S(o(-23, -.5, 66.5));
              }),
              b(() => {
                d(f(), o(-22.55, -3, 55).scale(1.45, 1.4, 2.7), v(.7, .7, .7, .2)),
                  d(g(i(f(), n(3, 1.4, 2.7)), i(f(), n(1.2, 8, 1.2))), o(-33, -3, 55), v(.7, .7, .7, .2));
              }),
              b(() => {
                d(g(
                  i(f(), o(-27, -3, 55).scale(3, 1.4, 2.7), v(.9, .9, .9, .2)),
                  i(f(), o(-27, -3, 55).scale(1, 3), v(.9, .9, .9, .2)),
                )), d(f(), o(-39, -3, 55).scale(3, 1.4, 2.7), v(.9, .9, .9, .2));
              }),
              b(() => {
                d(f(6), o(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), v(.7, .7, .7, .4));
              }),
              S(o(-55, -1.1, 46).rotate(0, 90)),
              d(f(6), o(-61.3, -2.4, 49).scale(3, 1, 5), v(.4, .6, .6, .3)),
              d(f(7), o(-57, -2.6, 46).scale(4, 1, 4), v(.8, .8, .8, .3)),
              [
                ...i(f(), o(0, -3).scale(11, 1.4, 3), v(.9, .9, .9, .2)),
                ...g(
                  i(f(6), c(90).scale(6, 8, 6), v(.3, .6, .6, .3)),
                  i(f(4, 0, .01), o(0, 6).scale(12, 2, .75).rotate(0, 45), v(.3, .6, .6, .3)),
                  i(f(6), c(90).scale(5, 12, 5), v(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => i(f(5), o(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), v(.3, .6, .6, .3))),
                ),
              ]),
            r = (d(l, o(-53, 0, 55)),
              b(() => d(l), 2),
              d(f(), o(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), v(.7, .7, .7, .2)),
              d(f(3, 0, -.5), o(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), v(.8, .8, .8, .2)),
              d(g(
                u(
                  i(f(), o(-100, -2.4, 55).scale(8, .9, 8), v(.8, .8, .8, .2)),
                  i(f(), o(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), v(.8, .8, .8, .2)),
                  i(f(), o(-100, -2.6, 70).scale(3, 1.1, 7), v(.8, .8, .8, .2)),
                  i(f(), o(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), v(.8, .8, .8, .2)),
                  i(f(6), o(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), v(.6, .6, .6, .3)),
                  i(f(), o(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), v(.8, .8, .8, .2)),
                  i(f(), o(-100, .42, 92).scale(3, 1.1, 4.1), v(.8, .8, .8, .2)),
                ),
                i(f(8), o(-100, -1, 55).scale(7, .9, 7), v(.3, .3, .3, .4)),
                i(f(8), o(-100, -2, 55).scale(4, .3, 4), v(.4, .4, .4, .5)),
                i(f(8, 0, -3.1), o(-100, -3, 55).scale(.4, 1, .4), v(.4, .4, .4, .5)),
              )),
              M(o(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              M(o(-89, .2, 80), [0, 0, 6]),
              d(g(
                i(f(), o(-100, 1, 63).scale(7.5, 4), v(.5, .5, .5, .4)),
                i(f(), o(-100, 0, 70).scale(2, 2, 10), v(.5, .5, .5, .4)),
                i(f(20, 1), o(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), v(.5, .5, .5, .4)),
              )),
              m1.map(({ x: t, z: a }) => {
                d(f(6), o(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), v(.6, .15, .15, .8)),
                  [4, -.4].map(e => d(f(6), o(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), v(.4, .2, .2, .8)));
              }),
              h(7, e => {
                d(
                  f((23 * e + 1) % 5 + 5, 0, .5),
                  o(5 * K(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  v(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              d(f(), o(-87, -9.5, 24).scale(7, 1, 3), v(.4, .5, .6, .4)),
              d(f(4), o(-86, -9.2, 27).scale(5, 1, 5), v(.5, .6, .7, .3)),
              d(f(12, 1), o(-86, -9, 31).scale(1.5, 1, 1.5), v(.3, .3, .4, .1)),
              S(o(-86, -7.5, 31)),
              b(() => {
                [0, 12, 24].map(e =>
                  d(f(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.2, .5, .6, .2))
                );
              }),
              b(() => {
                [6, 18].map(e =>
                  d(f(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.1, .4, .5, .2))
                );
              }),
              d(
                g(
                  u(
                    i(f(5), o(0, 0, -7).scale(2, 1.2, 2), v(.2, .4, .7, .3)),
                    i(f(5), n(9, 1.2, 9), v(0, .2, .3, .5)),
                    i(f(), n(11, 1, 13), v(.3, .4, .6, .3)),
                  ),
                  i(f(5), n(5.4, 5, 5.4), v(0, .2, .3, .5)),
                ),
                o(-38.9, -11.3, 17),
              ),
              S(o(-38.9, -9.6, 10)),
              b(() => {
                d(
                  g(
                    u(
                      i(f(5), o(0, 2).scale(5, 7, 5).skewY(8), v(.2, .4, .5, .5)),
                      i(f(5), o(0, 6).scale(1.1, 7, 1.1).skewY(-8), v(.25, .35, .5, .5)),
                      i(f(5), o(0, 9).scale(.6, 7, .6).skewY(8), v(.35, .3, .5, .5)),
                    ),
                    i(f(5), n(4, 8, 4), v(.2, .4, .5, .5)),
                    i(f(5), o(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), v(.2, .4, .5, .5)),
                  ),
                  o(-38.9, -11.3, 17),
                ), M(o(-39.1, -.6, 17).rotate(11), ...z1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              m1.map(({ x: t, z: a }) => {
                d(f(14, 1), o(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), v(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    d(f(17, 1), o(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), v(.6, .6, .6, .3))
                  );
              }),
              d(
                g(
                  u(
                    i(f(6), o(0, 0, -36).scale(15, 1.2, 15), v(.7, .7, .7, .3)),
                    i(f(), o(0, 0, -18).scale(4, 1.2, 6), v(.45, .4, .6, .3)),
                  ),
                  ...h(6, t =>
                    h(6, e =>
                      i(
                        f(6),
                        o(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * K(4 * e)).scale(2, 5, 2),
                        v(.7, .7, .7, .3),
                      ))).flat(),
                ),
                o(-38.9, -11.3, 17),
              ),
              M(o(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              d(f(5), o(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), v(.8, .1, .25, .4)),
              S(o(-84, -.5, 85).rotate(0, 45)),
              b(() => {
                d(e), S(o(0, -3, -4).rotate(0, 180));
              }),
              g(
                i(f(), o(0, -.5, 1).scale(1.15, 1.2, 6.5), v(.25, .25, .35, .3)),
                i(f(3), o(0, 0, -5.5).scale(3, 2), v(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => i(f(), o(e, -.5, 1).scale(.14, .3, 6.5), v(.7, .2, 0, .3))),
              ));
          b(() => {
            h(2, e =>
              d(r, o(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            b(() => {
              h(2, e => d(r, o(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            b(() => {
              h(3, e => d(r, o(9 * e - 106, 1.7, -12)));
            }),
            d(
              g(
                u(i(f(), o(26.5, -1.6, 10).scale(20, 2.08, 3)), i(f(), o(26.5, -.6, 10).scale(19, 2, .5))),
                ...h(4, e => i(f(), o(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...h(3, e =>
                  i(f(), o(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              o(-123, 0, -12),
              v(.5, .5, .6, .2),
            ),
            S(o(-116, -1.4, -18).rotate(0, 180)),
            d(f(), o(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), v(.8, .8, .8, .2)),
            d(f(6), o(-116, -2.6, -16.5).scale(3.2, .8, 3), v(.6, .5, .7, .2)),
            d(f(), o(-115.5, -17, -12).scale(.5, 15, 2.2), v(.6, .6, .6, .3)),
            d(f(8), o(-114, -17, -2).scale(2, 15, 2), v(.6, .6, .6, .3)),
            d(f(8), o(-79, -17, -2).scale(2, 15, 2), v(1, 1, 1, .3)),
            d(f(), o(-77, -17, -50.5).scale(2.2, 15, .5), v(.6, .6, .6, .3)),
            h(3, e => {
              d(t(16), o(12 * e - 109, -9, -12), v(.6, .6, .6, .3)),
                d(t(16), o(-77, -9, -12 * e - 20).rotate(0, 90), v(.6, .6, .6, .3));
            }),
            d(g(
              i(f(12), o(-77, -14.5, -12).scale(4, 17.5, 4), v(.7, .7, .7, .2)),
              i(f(), o(-79, .1, -12).scale(3.5, 2, 1.3), v(.4, .5, .6, .2)),
              i(f(), o(-77, .1, -14).scale(1.5, 2, 2), v(.4, .5, .6, .2)),
              i(f(12), o(-77, 3.1, -12).scale(3, 5, 3), v(.4, .5, .6, .2)),
            )),
            d(f(), o(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), v(.6, .6, .6, .3)),
            d(f(9), o(-98, -18.4, -40).scale(2.5, 13.5, 2.5), v(.5, .5, .5, .3)),
            d(g(
              i(f(), o(-93, -5.8, -40).scale(9, 1, 5), v(.8, .8, .8, .1)),
              i(f(9), o(-98, -5.8, -40).scale(3, 8, 3), v(.7, .7, .7, .2)),
            )),
            S(o(-98, -4.4, -40).rotate(0, 90)),
            M(o(-115, .2, -12), [0, 0, 3.5]),
            M(o(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            d(g(
              u(
                i(f(6, 0, 0, .6), o(-100, .7, 105.5).scale(8, 1, 11), v(.7, .7, .7, .2)),
                i(f(), o(-101.5, .7, 93.5).scale(10.5, 1, 2), v(.7, .7, .7, .2)),
              ),
              i(f(5), o(-100, .7, 113).scale(4, 3, 4), v(.7, .7, .7, .2)),
            )),
            h(4, e =>
              b(() => {
                d(
                  f(6),
                  o(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                    2.6,
                    1,
                    2.5,
                  ),
                  v(.5 - e / 8, e / 12 + .5, .7, .3),
                );
              })),
            b(() => {
              d(g(i(f(10), n(6, 2, 6), v(.1, .6, .5, .3)), i(f(10), n(3.3, 6, 3.3), v(.1, .6, .5, .5)))),
                d(f(15, 1), o(-7.5).rotate(0, 90).scale(3, 2.3, 3), v(.4, .4, .4, .3)),
                d(f(10), o(-7.5).rotate(0, 90).scale(2, 2.5, 2), v(.3, .8, .7, .3)),
                d(f(5), o(-7.5).rotate(0, 90).scale(1, 3), v(.5, .5, .5, .5)),
                S(o(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  d(s, c(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), v(1, 1, .8, .2))
                ),
                M(o(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(t => {
              [7.2, 1.5].map(e => d(f(15, 1), o(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), v(.5, .24, .2, .4))),
                d(s, o(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), v(1, 1, .8)),
                d(f(12, 1), o(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), v(.6, .24, .2, .5)),
                d(
                  g(
                    i(f(), o(-4 * t, 3.5, -.5).scale(4, 4, .7), v(.5, .5, .5, .4)),
                    i(f(), n(3, 3, 10), v(.6, .24, .2, .5)),
                    i(f(28, 1), o(0, 3, -5).scale(3, 4, 10).rotate(90, 0), v(.6, .24, .2, .5)),
                    i(f(5), o(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), v(.6, .24, .2, .5)),
                    i(f(5), o(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), v(.6, .24, .2, .5)),
                  ),
                  o(t - 100, .7, 97),
                );
            }),
            d(g(
              i(f(), o(-82.07, .8, 106).scale(11, .9, 2.2), v(.7, .7, .7, .1)),
              i(f(45, 1), o(-81, .7, 106).scale3d(7.7), v(.7, .7, .7, .1)),
            )),
            b(() => {
              d(g(
                i(f(45, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2)),
                i(f(), o(0, 0, -5.5).scale(1.5, 3, 2.7), v(.45, .45, .45, .2)),
              )),
                d(f(8), o(0, 2).scale(3, 1.5, 3).rotate(0, 22), v(.7, .7, .7, .1)),
                d(f(5), o(0, 2).scale(1, 2), v(.3, .3, .3, .2)),
                M(o(0, 3), ...z1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            b(() => {
              [-1, 1].map(e =>
                d(s, c(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), v(1, 1, .8))
              ),
                d(g(i(f(28, 1), o(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)), i(f(), n(9, 5, 2), v(.3, 0, 0, .3)))),
                d(i(f(28, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                d(i(f(5), o(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            b(() => {
              d(g(
                i(f(28, 1), o(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
                i(f(), o(7).scale(9, 5, 2), v(.3, 0, 0, .3)),
                i(f(), o(0, 0, 7).scale(2, 5, 9), v(.3, 0, 0, .3)),
              )),
                d(i(f(28, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                d(i(f(5), o(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            b(() => {
              d(g(
                i(f(28, 1), o(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
                i(f(), o(7).scale(9, 5, 2), v(.3, 0, 0, .3)),
                i(f(), o(0, 0, -7).scale(2, 5, 9), v(.3, 0, 0, .3)),
              )),
                d(i(f(28, 1), n(7.5, 1, 7.5), v(.45, .45, .45, .2))),
                d(i(f(5), o(0, 1).scale(1, .2), v(.3, .3, .3, .2)));
            }),
            d(f(), o(-58, 1, 106).scale(2, .65, 2), v(.7, .7, .7, .2)),
            d(f(), o(-50.7, 1, 99).scale(2, .65, 1), v(.7, .7, .7, .2)),
            d(f(), o(-42, .4, 91).scale(5, 1, 2.5), v(.7, .7, .7, .3)),
            d(f(), o(-34.2, .4, 91).scale(3, 1, 3), v(.7, .7, .7, .3)),
            S(o(-34, 2.7, 96).rotate(-12, 0)),
            d(f(5), o(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), v(.2, .5, .5, .6)),
            [v(.1, .55, .45, .2), v(.2, .5, .5, .3), v(.3, .45, .55, .4)].map((e, t) =>
              b(() => {
                d(f(), o(-23.5, .5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), e),
                  2 === t && d(f(), o(-29.1, .4, 91).scale(2.1, 1, 3), v(.7, .7, .7, .3)),
                  1 === t && d(f(), o(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), v(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => d(s, o(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), v(1, 1, .8))),
            h(3, e =>
              d(
                t(24.7 - .7 * (1 & e)),
                o(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? v(.5, .5, .5, .3) : v(.35, .35, .35, .5),
              )),
            d(g(
              i(f(6, 0, 0, .3), o(0, -.92, 95).scale(14, 2, 14), v(.8, .8, .8, .2)),
              i(f(5), o(0, 0, 95).scale3d(6), v(.3, .3, .3, .5)),
            )),
            S(o(0, 1.7, 82).rotate(0, 180)),
            d(f(5), o(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), v(.5, .3, .3, .4)),
            d(f(6), o(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), v(.5, .6, .7, .3)),
            d(f(), o(0, 16, 129).scale(1.5, 1, 2), v(.5, .6, .7, .3)),
            d(f(7), o(0, 16.2, 133).scale(5, 1, 5), v(.4, .5, .6, .4)),
            d(g(
              u(
                i(f(), o(0, 16, 110.5).scale(12, 1, 3), v(.5, .3, .3, .4)),
                i(f(), o(0, 16, 111).scale(3, 1, 3.8), v(.5, .3, .3, .4)),
              ),
              i(f(5), o(0, 16, 103.5).scale(5.5, 5, 5.5), v(.5, .3, .3, .4)),
            )),
            b(() => {
              d(f(3), o(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), v(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  d(f(6), o(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), v(.7, .7, .7, .4)),
                    d(f(), o(0, 6.2, e + 95).scale(.5, 11, .5), v(.5, .3, .3, .4));
                });
            }),
            b(() => {
              d(f(5), n(5, 1.1, 5), v(.5, .3, .3, .4)),
                d(f(5), n(5.5, .9, 5.5), v(.25, .25, .25, .4)),
                S(o(0, 1.5, -1).rotate(0, 180));
            }),
            M(o(0, 3, 95), ...z1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            M(o(0, 19, 134), [0, 0, 3.5]);
        }),
        b(() => {
          d(l(20), o(0, 1).scale3d(.5), v(1, .3, .4)),
            d(l(30), n(.65, .8, .55), v(1, .3, .4)),
            d(f(), o(0, .9, .45).scale(.15, .02, .06), v(.3, .3, .3)),
            [-1, 1].map(e => {
              d(s, c(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), v(1, 1, .8)),
                d(
                  i(g(f(15, 1), i(f(), o(0, 0, 1).scale(2, 2, .5))), c(-90, 0).scale(.1, .05, .1), v(.3, .3, .3)),
                  o(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
                ),
                b(() => {
                  d(f(20, 1), o(.3 * e, -.8).scale(.2, .7, .24), v(1, .3, .4));
                });
            });
        }),
        b(() => {
          d(f(6, 1), n(.13, 1.4, .13), v(.3, .3, .5, .1)),
            d(f(10), o(0, 1).scale(.21, .3, .21), v(1, .5, .2)),
            d(f(3), o(0, -1).rotate(90, 90).scale(.3, .4, .3), v(.2, .2, .2, .1));
        }, 0),
        b(() => {
          d(f(6).slice(0, -1), n(.77, 1, .77), v(1, .3, .5));
        }, 0),
        b(() => {
          d(
            l(30, 24, (e, t, a) => {
              let l = t / 24, r = e * W * 2 / 30, s = K(l ** .6 * W / 2);
              return e = l * l * K(e * W * 14 / 30) / 4,
                23 < t
                  ? { x: a.C = 0, y: -.5, z: 0 }
                  : { x: V(r) * s, y: V(l * W) - l - e, z: K(r) * s + K(e * W * 2) / 4 };
            }),
            n(.7, .7, .7),
            v(1, 1, 1),
          ), [-1, 1].map(e => d(l(12), o(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
