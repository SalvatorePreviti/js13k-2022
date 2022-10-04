let T,
  j,
  O,
  M,
  I,
  k,
  e1,
  Y,
  C,
  a1,
  D,
  t1,
  l1,
  r,
  r1,
  s1,
  x,
  y,
  c1,
  Q = 0,
  z = 0,
  o1 = 0,
  n1 = 0,
  w = 0,
  i1 = 0,
  f1 = 0,
  m1 = 0,
  h1 = 0,
  u1 = 0,
  B = 0,
  H = 0,
  X = 0,
  v1 = 0,
  F = 1,
  q = 180,
  R = .066,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  g1 = [],
  L = [],
  N = [],
  x1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  P = e => e < 0 ? -e : e,
  y1 = (e, a) => e < a ? e : a,
  E = (e, a) => a < e ? e : a,
  d1 = (e, a) => P(e) > a ? e : 0,
  U = (e, a = 0, t = 1) => e < a ? a : t < e ? t : e,
  p1 = e => K1(J(e * J1), Z(e * J1)) / J1,
  z1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * U(t) || 0,
  W = (e, a, t) => (0 < t ? t < 1 ? e + (a - e) * t : a : e) || 0,
  S1 = (e, a) => (e = U(e), W(e, 1 - e, a)),
  w1 = (e, a, t = 0) => V1(e * e + a * a + t * t),
  K = (e = 0, a = 0, t = 0, l = 1) => {
    T = S.m11 * e + S.m21 * a + S.m31 * t + S.m41 * l,
      j = S.m12 * e + S.m22 * a + S.m32 * t + S.m42 * l,
      O = S.m13 * e + S.m23 * a + S.m33 * t + S.m43 * l,
      M = S.m14 * e + S.m24 * a + S.m34 * t + S.m44 * l;
  },
  p = (
    e,
    a = l,
    t = 0,
  ) => (t *= 16,
    a[t++] = e.m11,
    a[t++] = e.m12,
    a[t++] = e.m13,
    a[t++] = e.m14,
    a[t++] = e.m21,
    a[t++] = e.m22,
    a[t++] = e.m23,
    a[t++] = e.m24,
    a[t++] = e.m31,
    a[t++] = e.m32,
    a[t++] = e.m33,
    a[t++] = e.m34,
    a[t++] = e.m41,
    a[t++] = e.m42,
    a[t++] = e.m43,
    a[t] = e.m44,
    a),
  V = (
    e = A,
    a = S,
  ) => (a.m11 = e.m11,
    a.m12 = e.m12,
    a.m13 = e.m13,
    a.m14 = e.m14,
    a.m21 = e.m21,
    a.m22 = e.m22,
    a.m23 = e.m23,
    a.m24 = e.m24,
    a.m31 = e.m31,
    a.m32 = e.m32,
    a.m33 = e.m33,
    a.m34 = e.m34,
    a.m41 = e.m41,
    a.m42 = e.m42,
    a.m43 = e.m43,
    a.m44 = e.m44,
    a),
  o = (e, a, t) => A.translate(e, a, t),
  m = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  f = (e, a, t) => (e.C = t, e.u = a, e),
  s = (e, a, t = e.u) => (V(a), f(e.map(({ x: e, y: a, z: t }) => (K(e, a, t), { x: T, y: j, z: O })), t, e.C)),
  n = (e, a, t) => e.map(e => s(e, a, t)),
  A1 = (t, l = 0) =>
    m(t, e => {
      let a = Z(2 * G * e / t);
      return { x: J(2 * G * e / t), y: 0, z: P(a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  M1 = (l, r, s) =>
    l.map((e, a, { length: t }) => f([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.u, s)),
  i = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? A1(e, l) : x1,
    l = s(e, o(0, 1).scale3d(0 < t ? t : 1)),
    e = s(e, o(0, -1).scale3d(t < 0 ? -t : 1)).reverse(),
    [...M1(e, l, a), l, e]),
  t = (l, r = l, s = (e, a) => (a *= G / r, { x: Z(e *= 2 * G / l) * J(a), y: Z(a), z: J(e) * J(a) })) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let a = 0; r > a; a++) {
        let e = f([], 0, 1);
        c.push(e),
          e.push(s(t, a, e)),
          a && e.push(s((t + 1) % l, a, e)),
          r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
          e.push(s(t, a + 1 % r, e));
      }
    }
    return c;
  },
  _ = (e, a, t) => W(e, a, 1 - _1(-t * R)),
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
      ][o1 = g1.reduce((e, { i: a }) => e + a, 0)] + " / XIII";
  },
  k1 = () => {
    localStorage.DanteSP22 = JSON.stringify([L.map(({ i: e }) => e), g1.map(({ i: e }) => e), w, Q, Y]);
  },
  h = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  F1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  u = (e, a = new DOMMatrix(), t) => r.o.push(...n(e, a, t)),
  v = (e, a = 1) => {
    let t = r;
    N.push(r = { m: new DOMMatrix(), G: a, o: [] }), e(), r = t;
  },
  g = e => {
    let a = r,
      t = L.length,
      l = {
        i: 0,
        g: 0,
        h: 0,
        m: a.m,
        H: e,
        F() {
          l.g = _(l.g, l.i, 4),
            l.h = _(l.h, l.i, 1),
            V(a.m).multiplySelf(e),
            C && (K(), w1(B - T, H - j, X - O) < 3) && (l.g < .3 || .7 < l.g)
            && (l.i = l.i ? 0 : 1, t && 1 / 0 > F && (F = Q + 1, h4.innerHTML = "* click *"), w = t, k1()),
            !t && l.i && .8 < l.g && (l.i = 0,
              o1 < 13
                ? 1 / 0 > F && (F = Q + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
                : n1
                  || (1 / 0 > F
                    && (F = Q + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                    n1 = 1)),
            S.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    L.push(l),
      u(i(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), h(.4, .5, .5)),
      u(i(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), h(.4, .5, .5)),
      u(i(), e.translate(0, -.4).scale(.5, .1, .5), h(.5, .5, .4));
  },
  d = (o, ...e) => {
    let n,
      i,
      f,
      m = 0,
      h = 0,
      u = 1,
      v = 3,
      g = -1,
      d = {
        i: 0,
        F() {
          if (!d.i) {
            let e, a, t, l, r, s = 1, c = 1 / 0;
            for (let t of p) {
              let e = w1(S - t.x, A - t.z), a = e - t.w;
              r ||= a < 0, 0 < a && c > a && (c = a, b = t), s = y1(s, e / t.w);
            }
            r
            || (e = S - b.x,
              a = A - b.z,
              t = w1(e, a),
              l = K1(-a, e),
              u && (h = (G1() - .5) * G / 2, v = U(v / (1 + G1()))),
              l += h,
              g = -Z(l),
              m = J(l),
              .1 < t && (t = y1(t, b.w) / (t || 1), S = e * t + b.x, A = a * t + b.z)),
              u = r,
              v = _(v, 6 * (1 - s) + 3, s + 3),
              M = _(M, S = _(S, S + g, v), v),
              I = _(I, A = _(A, A + m, v), v),
              n = z1(n, K1(M - i, I - f) / J1 - 180, 1 - _1(-3 * R)),
              V(k).multiplySelf(o).translateSelf(i = M, 0, f = I).rotateSelf(0, n, 7 * J(1.7 * Q)),
              K(),
              w1(B - T, H - j, X - O) < 1.6
              && (d.i = 1,
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
                ][o1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > F && (F = Q + (o1 && o1 < 12 ? 5 : 7), h4.innerHTML = e),
                I1(),
                k1());
          }
          d.i
            && V(N[2].m).translateSelf(
              a % 4 * 1.2 - 1.7 + J(Q + a) / 7,
              -2,
              1.7 * (a / 4 | 0) - 5.5 + P(a % 4 - 2) + Z(Q / 1.5 + a) / 6,
            );
        },
      },
      p = e.map(([e, a, t]) => ({ x: e, z: a, w: t })),
      b = p[0],
      { x: S, z: A } = b,
      M = S,
      I = A,
      k = r.m,
      a = g1.length;
    g1.push(d);
  },
  Y1 = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  C1 = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = w1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  D1 = (l, r) => {
    let s, c, o, n = r.B;
    for (let e = 0; n.length > e; ++e) {
      if ((s = Y1(l, n[e]) - l.w) < -8e-5 ? o = r : 8e-5 < s && (c = r), o && c) {
        c = [], o = [], n = r.B, e = r.v;
        let a = n.at(-1), t = Y1(l, a) - l.w;
        for (let e of n) {
          s = Y1(l, e) - l.w,
            t < 8e-5 && o.push(a),
            -8e-5 < t && c.push(a),
            (8e-5 < t && s < -8e-5 || t < -8e-5 && 8e-5 < s)
            && (t /= s - t,
              a = { x: a.x + (a.x - e.x) * t, y: a.y + (a.y - e.y) * t, z: a.z + (a.z - e.z) * t },
              c.push(a),
              o.push(a)),
            a = e,
            t = s;
        }
        return {
          l: 2 < c.length && { B: f(c, n.u, n.C), v: e, A: r },
          j: 2 < o.length && { B: f(o, n.u, n.C), v: e, A: r },
        };
      }
    }
    return { l: c, j: o };
  },
  c = (e, a, t = C1(a.B)) => {
    let l, r;
    return e
      ? ({ l, j: r } = D1(e, a), l || r || e.o.push(a), l && (e.l = c(e.l, l, t)), r && (e.j = c(e.j, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, o: [a], l: 0, j: 0 },
      e;
  },
  T1 = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { l: t, j: l } = D1(e, a);
        t || l || (0 < s * Y1(e, r) ? t = a : l = a), t && (e.l ? o(e.l, t) : c.push(t)), l && e.j && o(e.j, l);
      };
    for (let e of r.o) o(a, e);
    return c;
  },
  j1 = (e, a) => e && (a(e), j1(e.l, a), j1(e.j, a)),
  O1 = e => (j1(e, a => {
    let e = a.j;
    a.j = a.l, a.l = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.o) e.v = !e.v;
  }),
    e),
  Q1 = e => e.length ? e.reduce((e, a) => c(e, { B: a, v: 0, A: 0 }), 0) : e,
  B1 = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = Q1(l), a) {
        a = Q1(a), j1(l, e => e.o = T1(a, e, 1)), j1(a, e => r.push([e, T1(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) c(l, e, a);
      }
      return l;
    }),
  b = (e, ...a) => {
    let t = e => {
        let a;
        return e.A && ((a = l.get(e.A)) ? (r.delete(a), e = t(e.A)) : l.set(e.A, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = O1(B1(O1(Q1(e)), ...a)),
      j1(e, a => {
        for (let e of a.o) r.set(t(e), e.v);
      }),
      Array.from(r, ([{ B: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return f(a ? t.reverse() : t, e.u, e.C);
      });
  },
  H1 = (e, a, t, l) => {
    e.translateSelf(a + J(Q + 2) / 5, t + J(.8 * Q) / 3, l).rotateSelf(2 * J(Q), J(.7 * Q), J(.9 * Q));
  },
  X1 = (e, a, t) => {
    k
      ? 1100 < hC.width
        && (V().rotateSelf(0, 40 * J(z) - 80, -8),
          p(S, E1, 36),
          p(S, E1, 37),
          p(S, E1, 38),
          $.uae(e, !1, E1),
          $.d97(4, N[39].D - N[37].s, 5123, 2 * N[37].s))
      : ($.uae(e, !1, E1),
        $.d97(4, (a ? N[39].D : N[37].s) - 3, 5123, 6),
        $.uae(e, !1, U1),
        $.das(4, N[t].D - N[t].s, 5123, 2 * N[t].s, g1.length),
        $.das(4, N[42].D - N[42].s, 5123, 2 * N[42].s, L.length));
  },
  q1 = (e, a = 35633) => (a = $.c6x(a), $.s3c(a, e), $.c6a(a), a),
  R1 = (e, a) => {
    let t = {}, l = $.c1h();
    return $.abz(l, e), $.abz(l, q1(a, 35632)), $.l8l(l), e => e ? t[e] || (t[e] = $.gan(l, e)) : $.u7y(l);
  },
  L1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  N1 = e => J(e * G * 2),
  P1 = new AudioContext(),
  S = new DOMMatrix(),
  A = new DOMMatrix(),
  l = new Float32Array(16),
  E1 = new Float32Array(624),
  U1 = new Float32Array(624),
  W1 = new Uint8Array(65536),
  { PI: G, atan2: K1, sin: J, cos: Z, sqrt: V1, exp: _1, random: G1 } = Math,
  J1 = G / 180,
  Z1 = P1.createBufferSource(),
  $ = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in $) $[e[0] + [...e].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = $[e];
L1(() => {
  let e = 0,
    l = () => {
      if (2 == ++e) {
        let h = [new Float32Array(16), new Float32Array(16)],
          e = a => {
            requestAnimationFrame(e);
            let t = (a - (I || a)) / 1e3;
            if (z += t, Q += R = k ? 0 : y1(.066, t), I = a, 0 < R) {
              let e = 1;
              l1(),
                F && Q > F && (F = 0, h4.innerHTML = ""),
                e1 = _(e1, n1 ? _(e1, -9, 1.5) : U(Q / 3), 1),
                Y = _(Y, L[9].h, .2 + .3 * P(2 * L[9].h - 1)),
                a = () => V(A, N[++e].m),
                s1 = S1(L[12].g, L[13].g),
                c1 = W(_(c1, 0, 1), p1(c1 + 60 * R), L[5].g - L[6].h),
                x = W(_(x, 0, 5), p1(x + 56 * R), s1),
                y = W(_(y, 0, 4), p1(y + 48 * R), s1),
                H1(a(), -12, 4.2, 40 * e1 - 66),
                a().translateSelf(0, 0, -15).scaleSelf(1, U(1.22 - L[1].g), 1),
                a().translateSelf(0, 0, 15).scaleSelf(1, U(1.22 - L[2].g), 1),
                a().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, U(1.1 - L[6].g), 1),
                a().translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - L[12].g),
                a().translateSelf(
                  0,
                  L[3].g < .01 ? -500 : (1 - L[2].g) * L[3].h * (5 * Z(1.5 * Q) + 2) + 15 * (L[3].g - 1),
                  0,
                ),
                t = y1(L[2].h, 1 - L[4].h),
                a().translateSelf(t * J(Q / 1.5 + 2) * 12),
                a().translateSelf(t * J(.7 * Q + 2) * 12),
                a().translateSelf(t * J(Q + 3) * 8.2),
                a().translateSelf(9.8 * (1 - t)),
                t = U(1 - 5 * t) * S1(L[4].g, L[5].g),
                a().translateSelf(0, t * J(1.35 * Q) * 4),
                a().translateSelf(0, 0, t * J(.9 * Q) * 8),
                a().translateSelf(0, -6.5 * L[4].h),
                a().translateSelf(-75, (1 - L[5].h) * (1 - L[6].g) * 3, 55).rotateSelf(180 * (1 - L[5].h) + c1, 0),
                t = S1(L[7].h, L[6].h),
                a().translateSelf(0, t * J(Q) * 5 + 3.5 * (1 - E(L[6].g, L[7].g))),
                a().translateSelf(0, t * J(Q + 3) * 6, t * J(.6 * Q + 1) * 6),
                a().translateSelf(0, -7.3 * L[7].h),
                H1(a(), -123, 1.4, 55 + -65 * Y),
                t = S1(L[10].g, L[11].g),
                a().translateSelf(0, -2, t * P(J(1.1 * Q)) * -8.5 + 10),
                a().translateSelf(0, -2, t * P(J(2.1 * Q)) * -8.5 + 10),
                a().translateSelf(0, -2, -8.5 * E((1 - L[10].g) * (1 - t), t * P(J(1.5 * Q))) + 10),
                t = S1(L[8].h, L[12].h);
              for (var l = 0; l < 4; l++) {
                a().translateSelf(
                  (2 < l ? 2 * (1 - t) + t : 0) - 100,
                  t * J(1.3 * Q + 1.7 * l) * (3 + l / 3) + .7,
                  115 + (1 & l ? -1 : 1) * (1 - L[8].h) * (1 - L[12].h) * -7
                    + E(t, .05) * Z(1.3 * Q + 7 * l) * (4 - 2 * (1 - l / 3)),
                );
              }
              for (
                a().translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - L[8].g) + t * J(.8 * Q) * -1 - 1.8, 93.5).rotateSelf(
                  Z(1.3 * Q) * (3 * t + 3),
                  0,
                ),
                  a().translateSelf(-81, .6, 106).rotateSelf(0, 40 + x),
                  a().translateSelf(-65.8, .8, 106).rotateSelf(0, y),
                  a().translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - y),
                  a().translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + y),
                  t = S1(L[13].h, L[14].h),
                  l = 0;
                l < 3;
                ++l
              ) {
                a().translateSelf(0, t * J(1.5 * Q + 1.5 * l) * 4 + (l ? 0 : (1 - L[13].h) * (1 - L[14].h)));
              }
              for (
                a().translateSelf(-2 * J(Q)).rotateSelf(25 * J(Q)),
                  t = S1(S1((L[14].g + L[14].h) / 2, L[13].h), (L[15].g + L[15].h) / 2),
                  a().translateSelf(0, 16 * t, 8.5 * U(2 * t - 1) + 95),
                  t = 0;
                t < 13;
                ++t
              ) {
                g1[t].F(), p(S, U1, t);
              }
              for (t = 0; t < 16; ++t) L[t].F(), p(S, U1, t + 13), U1[16 * t + 223] = 1 - L[t].g;
              for (r1(a), a = 0; e >= a; ++a) p(N[a].m, E1, a - 1);
              C = 0,
                s(),
                $.b6o(36160, i),
                $.v5y(0, 0, 128, 128),
                $.c4s(16640),
                $.cbf(!0, !1, !0, !1),
                $.uae(s("b"), !1, p(V().rotateSelf(0, 180).invertSelf().translateSelf(-B, -H, .3 - X))),
                X1(s("c"), 0, 40),
                $.c4s(256),
                $.cbf(!1, !0, !1, !0),
                $.uae(s("b"), !1, p(V().translateSelf(-B, -H, -X - .3))),
                X1(s("c"), 0, 40),
                $.f1s();
            }
            a = m1,
              t = h1,
              l = u1,
              k
                ? (V(D).invertSelf(),
                  K(3.6, 3.5),
                  a = T,
                  t = j,
                  l = 5,
                  V(A, v).rotateSelf(-20, 0).invertSelf().translateSelf(-a, -t, -l).rotateSelf(0, 99))
                : V(A, v).rotateSelf(-v1, -q).invertSelf().translateSelf(-a, -t, -l),
              d(),
              $.b6o(36160, n),
              $.v5y(0, 0, 2048, 2048),
              o[0](54.7 * 1.1),
              o[1](126 * 1.1),
              c(),
              $.b6o(36160, null),
              $.v5y(0, 0, $.drawingBufferWidth, $.drawingBufferHeight),
              $.cbf(!0, !0, !0, !0),
              $.c4s(16640),
              $.uae(c("a"), !1, p(D)),
              $.uae(c("b"), !1, p(v)),
              $.uae(c("i"), !1, h[0]),
              $.uae(c("j"), !1, h[1]),
              $.ubu(c("k"), a, t, l),
              X1(c("c"), !a1, 41),
              r(),
              $.ubu(r("j"), $.drawingBufferWidth, $.drawingBufferHeight, z),
              $.ubu(r("k"), a, t, l),
              $.uae(r("b"), !1, p(V(v).invertSelf())),
              $.d97(4, 3, 5123, 0),
              $.b6o(36160, i),
              $.f1s();
          },
          u = new DOMMatrix(),
          v = new DOMMatrix(),
          a = f,
          g = m(8, () => ({})),
          t = q1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          d = R1(
            q1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          r = R1(
            q1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          s = R1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}`,
          ),
          c = R1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          o = m(2, e => {
            let a = $.c25();
            return $.a4v(33984 + e),
              $.b9j(3553, a),
              $.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              $.t2z(3553, 10241, 9729),
              $.t2z(3553, 10240, 9729),
              $.t2z(3553, 34893, 515),
              $.t2z(3553, 34892, 34894),
              $.t2z(3553, 10243, 33071),
              $.t2z(3553, 10242, 33071),
              l => {
                let t = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, n = 1 / 0, i = -1 / 0, f = -1 / 0, m = -1 / 0;
                $.fas(36160, 36096, 3553, a, 0),
                  $.c4s(256),
                  V().scale3dSelf(l).multiplySelf(V(t1[e], u).multiplySelf(v).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = g[a];
                  K(4 & a ? 1 : -1, 2 & a ? 1 : -1, 1 & a ? 1 : -1),
                    t -= e.x = (0 | T) / l / M,
                    r -= e.y = (0 | j) / l / M,
                    s -= e.z = (0 | O) / l / M;
                }
                for (V().rotateSelf(298, 139).translateSelf(t / 8, r / 8, s / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: a, z: t } = g[l];
                  K(e, a, t), c = y1(c, T), i = E(i, T), o = y1(o, j), f = E(f, j), n = y1(n, O), m = E(m, O);
                }
                l = 10 + e,
                  n *= n < 0 ? l : 1 / l,
                  m *= 0 < m ? l : 1 / l,
                  $.uae(
                    d("b"),
                    !1,
                    p(
                      V(A, u).scaleSelf(2 / (i - c), 2 / (f - o), 2 / (n - m)).translateSelf(
                        (i + c) / -2,
                        (f + o) / -2,
                        (n + m) / 2,
                      ).multiplySelf(S),
                      h[e],
                    ),
                  ),
                  X1(d("c"), !a1, 41);
              };
          }),
          n = $.c5w(),
          l = (t = $.c25(), $.c3z()),
          i = $.c5w();
        s(),
          $.uae(s("a"), !1, p(F1(1e-4, 2, 1.4, .4))),
          c(),
          $.ubh(c("q"), 2),
          $.ubh(c("h"), 1),
          $.ubh(c("g"), 0),
          r(),
          $.ubh(r("q"), 2),
          $.b6o(36160, n),
          $.d45([0]),
          $.r9l(0),
          $.b6o(36160, i),
          $.bb1(36161, l),
          $.r4v(36161, 33190, 128, 128),
          $.f8w(36160, 36096, 36161, l),
          $.a4v(33986),
          $.b9j(3553, t),
          $.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null),
          $.fas(36160, 36064, 3553, t, 0),
          $.b9j(3553, $.c25()),
          $.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, a),
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
              a = !0,
              r = [],
              t = () => {
                b4.innerHTML = "Music: " + a, k || !a ? Z1.disconnect() : Z1.connect(P1.destination);
              },
              s = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                t1 = [F1(.3, 55, e, 1.732051), F1(55, 181, e, 1.732051)],
                  D = F1(.3, 181, e, 1.732051),
                  f = v = void 0,
                  r.length =
                    C =
                    l =
                    b =
                    S =
                    i1 =
                    f1 =
                      0;
              },
              c = (e, a = 0) => {
                if (k !== e) {
                  k = e, a1 = a, s(), document.body.className = e ? "l m" : "l";
                  try {
                    e
                      ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
                      : (document.body.requestFullscreen().catch(() => 0), Z1.start());
                  } catch {}
                  t();
                }
              };
            oncontextmenu = () => !1,
              b1.onclick = () => c(!1),
              b2.onclick = () => c(!1, 1),
              b5.onclick = () => c(!0),
              b4.onclick = () => {
                a = !a, t();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              onclick = e => {
                if (!k && (e.target === hC && (C = 1), a1)) {
                  try {
                    hC.requestPointerLock();
                  } catch {}
                }
              },
              onkeyup = onkeydown = e => {
                let a;
                e.repeat
                  || (a = {
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
                    (r[a] = !!e.type[5] && !0) && (0 === a && (C = 1), 1 === a && c(!0)));
              },
              onmousemove = ({ movementX: e, movementY: a }) => {
                a1 && (e || a) && (q += .1 * e, v1 += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!k) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    a1 && e > hC.clientWidth / 2
                      ? void 0 === v && (g = 0, h = e, u = a, v = t, d = q, p = v1)
                      : void 0 === f && (m = 0, n = e, i = a, f = t);
                  }
                  e = z;
                }
              },
              hC.ontouchmove = l => {
                let r, s, c, o;
                if (!k) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    v === t && (q = d + (e - h) / 2.3, v1 = p + (a - u) / 2.3, g = 1),
                      f === t
                      && (t = (n - e) / 20,
                        r = P(t),
                        s = (i - a) / 20,
                        c = P(s),
                        (o = .5 < E(r, c)) && (m = 1),
                        b = (o && .2 < r) * U(t, -1),
                        S = (o && .2 < c) * U(s, -1),
                        2 < r && (n = e + 20 * (t < 0 ? -1 : 1)),
                        2 < c && (i = a + 20 * (s < 0 ? -1 : 1)));
                  }
                }
              },
              hC.ontouchend = a => {
                let t;
                document.activeElement === document.body && a.preventDefault();
                for (let e of a.changedTouches) {
                  e.identifier === v
                    ? (v = void 0, g || (t = 1), g = 0)
                    : e.identifier === f
                    ? (f = void 0, S = b = 0, m || (t = 1), m = 0)
                    : t = 1;
                }
                a.target === hC && t && e && .02 < (a = z - e) && a < .7 && (C = 1);
              },
              l1 = () => {
                i1 = S + (r[4] ? 1 : 0) - (r[5] ? 1 : 0), f1 = b + (r[2] ? 1 : 0) - (r[3] ? 1 : 0);
                let t = navigator.getGamepads()[0];
                if (t) {
                  let e = e => a[e]?.pressed || 0 < a[e]?.value ? 1 : 0, a = t.buttons;
                  t = t.axes,
                    a1 && (v1 += R * d1(t[3], .3) * 80, q += R * d1(t[2], .3) * 80),
                    i1 += e(12) - e(13) - d1(t[1], .2),
                    f1 += e(14) - e(15) - d1(t[0], .2),
                    e(9) && c(!0),
                    (t = e(3) || e(2) || e(1) || e(0)) && !l && (C = 1),
                    l = t;
                }
              },
              document.onvisibilitychange = onblur = onresize = s,
              c(!0);
          })(),
          (() => {
            let s,
              c,
              o,
              n,
              i,
              f,
              m,
              u,
              h,
              v,
              g,
              d,
              p,
              b,
              S = 0,
              A = 0,
              M = 0,
              I = 1,
              k = 2,
              F = 15,
              Y = () => V((k ? L[w] : N[g && 1 === N[g].G && g || 0]).m),
              C = e => {
                1 < k ? (V(L[w].m).multiplySelf(L[w].H), K(0, w || .9 < e1 ? 15 : 1, -2.4)) : (Y(), K(S, A, M)),
                  e && (i = (T - B) / R, f = (O - X) / R),
                  B = T,
                  H = j,
                  X = O;
              },
              D = (e, a, t, l) => W(e, a, I || (U(P(a - e) ** .5 - t) + 1 / 7) * (1 - _1(-1.5 * l * R)));
            r1 = a => {
              let e, t, l, r;
              for (
                C(v),
                  $.r9r(0, 0, 128, 128, 6408, 5121, W1),
                  (() => {
                    let a, e, t, l, r, s, c = 0, o = 0, n = 0, i = 0, f = 0, m = 0, h = -1;
                    for (a = 0; a < 36; ++a) {
                      for (e = 512 * a, t = 96; t < 416; t += 4) {
                        for (l = 0; l < 2; ++l) {
                          (r = W1[e + t + l]) > i && (i = r),
                            r + (s = W1[e + t + l + 2]) && (h < 0 || h === a)
                            && (h = a, s === v ? ++c : o && o !== s || (o = s, ++n));
                        }
                      }
                    }
                    for (v = h < 0 ? 0 : n > 2 * c ? o : v, c = 36; c < 128; c += 1) {
                      for (
                        a =
                          h =
                          n =
                          o =
                            0,
                          e = 512 * c,
                          t = 0;
                        t < 128;
                        t += 1
                      ) {
                        for (l = e + 4 * t, r = 0; r < 2; ++r) {
                          s = W1[l + r];
                          let e = W1[l + r + 2];
                          (r ? 64 < t : t < 64) ? o = E(o, s) : n = E(n, s), r ? a = E(a, e) : h = E(h, e);
                        }
                      }
                      P(n - o) > P(f) && (f = n - o), P(a - h) > P(m) && (m = a - h);
                    }
                    u = U(1 - .02 * E(P(f), P(m))),
                      f /= 255,
                      i /= 255,
                      m /= 255,
                      Y().invertSelf(),
                      K(f, i, m, 0),
                      S += T,
                      A += i,
                      M += O,
                      C();
                  })(),
                  !k && v === g || (g = v, Y().invertSelf(), K(B, H, X), S = T, A = j, M = O),
                  k = k && (v ? 0 : 1),
                  (B < -20 || X < 109 ? -25 : -9) > H && (k = 2),
                  1 === v && (L[9].i = B < -15 && X < 0 ? 1 : 0),
                  h = W(_(h, H, 2), H, k || 8 * P(h - H)),
                  p = D(p, h, 2, 1),
                  d = D(d, B, .5, 1),
                  b = D(b, X, .5, 1),
                  n = _(n, s1 * (27 < v && v < 32), 2),
                  a1
                    ? (e = k + (1 - _1(-18 * R)), m1 = W(m1, B, e), h1 = W(h1, h + 1.5, e), u1 = W(u1, X, e), q = p1(q))
                    : (u1 = D(u1, b + -18 + 5 * n, 1, 2 + n),
                      h1 = D(h1, E(p + U((-60 - X) / 8, 0, 20) + 13 + 9 * n, 6), 4, 2),
                      m1 = D(m1, d, 1, 2 + n),
                      e = y1(-6, -P(b - u1)),
                      q = z1(q, 90 - p1(K1(e, t = d - m1) / J1), I + (1 - _1(-10 * R))),
                      v1 = z1(v1, 90 - K1(w1(e, t), h1 - p) / J1, I + (1 - _1(-10 * R)))),
                  v1 = U(v1, -87, 87),
                  I = 0,
                  e = U(i1, -1),
                  t = U(f1, -1),
                  l = d1(w1(e, t) ** .5, .1),
                  r = K1(e, t),
                  e = l * P(e) * J(r),
                  t = l * P(t) * Z(r),
                  l && (s = 90 - r / J1),
                  c = z1(c, s, 1 - _1(-8 * R)),
                  o = _(o, l, 10),
                  a().translateSelf(B, h, X).rotateSelf(0, c),
                  r = 0;
                r < 2;
                ++r
              ) {
                let e = 9.1 * Q - G * r;
                V(N[37].m, a()).translateSelf(0, o * U(.45 * J(e - G / 2))).rotateSelf(o * J(e) * .25 / J1, 0);
              }
              F = v ? 5 : _(F, k ? 13 : 19 - 2 * y1(0, H + 10), 2.2),
                i = v || k ? 0 : _(i, 0, 3),
                f = v || k ? 0 : _(f, 0, 3),
                m = k ? 0 : _(m, v ? 7 * U(2 * l) * u : 0, v ? 9 : 1),
                a = R * (i + m * (t * Z(r = a1 ? (180 + q) * J1 : 0) - e * J(r))),
                l = -F * R,
                e = R * (f + m * (t * J(r) + e * Z(r))),
                Y().invertSelf(),
                K(a, l, e, 0),
                S += T,
                A += l,
                M += O,
                C();
            };
          })(),
          requestAnimationFrame(e);
      }
    },
    f = new Image();
  f.onload = f.onerror = l,
    f.src = a,
    (r => {
      let N = 0,
        s = () => {
          let b = 0,
            e = m => {
              let r,
                h,
                s,
                u,
                c,
                o,
                n = 0,
                i = 0,
                v = [],
                f = new Int32Array(768 * m),
                g = 2 ** (t - 9) / m,
                d = G * 2 ** (l - 8) / m,
                p = q * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * N + l];
                  e < 32;
                  ++e
                ) {
                  let t = (32 * l + e) * m;
                  for (r = 0; r < 4; ++r) {
                    if (u = 0, a && (u = S[a - 1].charCodeAt(e + 32 * r) - 40, u += 0 < u ? 106 : 0), u) {
                      if (!(h = v[u])) {
                        let l,
                          r,
                          s = 0,
                          c = 0,
                          o = h = u,
                          n = N < 2
                            ? e => e % 1 * 2 - 1
                            : N1,
                          i = N < 2
                            ? N < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : N1,
                          f = new Int32Array(D + T + L);
                        for (let a = 0, t = 0; D + T + L > a; ++a, ++t) {
                          let e = 1;
                          D > a ? e = a / D : D + T > a || (e = (1 - (e = (a - D - T) / L)) * 3 ** (-j / 16 * e)),
                            t < 0
                            || (t -= 4 * m,
                              r = .00396 * 2 ** ((o + M - 256) / 12),
                              l = .00396 * 2 ** ((o + F - 256) / 12) * (1 + (N ? 0 : .0072))),
                            f[a] = 80
                                * (n(s += r * e ** (I / 32)) * A + i(c += l * e ** (Y / 32)) * k
                                  + (C ? (2 * G1() - 1) * C : 0))
                                * e | 0;
                        }
                        h = v[h] = f;
                      }
                      for (let e = 0, a = 2 * t; h.length > e; ++e, a += 2) f[a] += h[e];
                    }
                  }
                  for (let e, a = 0; m > a; ++a) {
                    r = 0,
                      h = 2 * (t + a),
                      ((e = f[h]) || o)
                      && (c = .00308 * O,
                        1 !== N && 4 !== N || (c *= J(g * h * G * 2) * R / 512 + .5),
                        c = 1.5 * J(c),
                        n += c * i,
                        i += c * (s = (1 - Q / 255) * (e - i) - n),
                        e = 4 === N ? i : 3 === N ? s : n,
                        N || (e = (e *= 22e-5) < 1 ? -1 < e ? J(e / 4 * G * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        o = 1e-5 < e * e,
                        r = e * (1 - (s = J(d * h) * H / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * X / 255, e += f[h - p] * X / 255),
                      P[s = b + h >> 1] += (f[h] = r) / 65536,
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
            ][N],
            [A, M, I, k, F, Y, C, D, T, a, j, t, O, Q, B, H, l, X, q, R] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][N],
            L = 4 * a ** 2;
          e(5513), e(4562), e(3891), L1(++N < 5 ? s : r);
        },
        e = P1.createBuffer(2, 5362944, 44100),
        P = e.getChannelData(0),
        E = e.getChannelData(1);
      Z1.buffer = e, Z1.loop = !0, L1(s);
    })(() => {
      L1(() => {
        let t = 0,
          r = [],
          c = [],
          o = [],
          n = [],
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        N.map((e, a) => {
          let s,
            l = e => {
              let { x: a, y: t, z: l } = s[e], r = (h[0] = a, h[1] = t, h[2] = l, f.get(e = "" + (s.C ? m : i)));
              return void 0 !== r
                ? (a = 3 * r, n[a] = (n[a++] + i[5]) / 2, n[a] = (n[a++] + i[6]) / 2, n[a] = (n[a] + i[7]) / 2)
                : (f.set(e, r = f.size), c.push(a, t, l, h[3]), o.push(i[4]), n.push(i[5], i[6], i[7])),
                r;
            };
          for (s of (h[3] = 41 < a ? -14 : e.G && a, e.o)) {
            let { x: e, y: a, z: t } = C1(s);
            i[4] = 0 | s.u, i[5] = 32767 * e, i[6] = 32767 * a, i[7] = 32767 * t;
            for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
          }
          e.o = null, e.s = t, e.D = t = r.length;
        }),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Float32Array(c), 35044),
          $.v7s(0, 4, 5126, !1, 0, 0),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Int16Array(n), 35044),
          $.v7s(1, 3, 5122, !0, 0, 0),
          $.b11(34962, $.c1b()),
          $.b2v(34962, new Uint32Array(o), 35044),
          $.v7s(2, 4, 5121, !0, 0, 0),
          $.b11(34963, $.c1b()),
          $.b2v(34963, new Uint16Array(r), 35044),
          $.e3x(0),
          $.e3x(1),
          $.e3x(2);
        try {
          let [t, l, e, a, r] = JSON.parse(localStorage.DanteSP22);
          L.map((e, a) => e.g = e.h = e.i = a ? 0 | t[a] : 0),
            g1.map((e, a) => e.i = 0 | l[a]),
            w = e,
            Y = r,
            Q = a,
            R = 0;
        } catch {}
        I1(), e1 = U(w), L1(l);
      });
      let a = m(11, e => o(J(e / 10 * G), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        c = m(10, e => M1(s(A1(18), a[e]).reverse(), s(A1(18), a[e + 1]), 1)).flat();
      v(() => u([x1.slice(1)], o(-2).scale3d(3).rotate(90, 0)), 0),
        v(() => {
          let e = t =>
              v(() => {
                x1.map(({ x: e, z: a }) => {
                  u(i(11, 1), o(4 * e, 4, t + 4 * a).scale(.8, 3, .8), h(.5, .3, .7, .6)),
                    u(i(), o(4 * e, 7, t + 4 * a).scale(1, .3), h(.5, .5, .5, .3));
                }),
                  u(b(
                    n(i(), o(0, 0, t).scale(5, 1, 5), h(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => n(i(), o(5 * e, .2, t).rotate(-30 * e).scale(4, 1, 2), h(.8, .8, .8, .3))),
                  )),
                  u(i(), o(0, -3, t).scale(8, 2, 8), h(.4, .4, .4, .3));
              }),
            a = e =>
              b(
                n(i(), o(0, -e / 2).scale(6, e - 1, 2.2)),
                n(i(), o(0, -e / 2 - 6).scale(4, e - 3, 4)),
                n(i(32, 1), o(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            t = () => v(() => m(7, e => u(n(i(6, 1), o(4 * (e / 6 - .5), 3).scale(.2, 3, .2), h(.3, .3, .38))))),
            l = b(
              n(i(30, 1, 1.15, 1), o(0, -3).scale(3.5, 1, 3.5), h(.7, .4, .25, .7)),
              n(i(30, 1, 1.3, 1), o(0, -2.5).scale(2.6, 1, 3), h(.7, .4, .25, .2)),
              n(i(), o(4, -1.2).scale3d(2), h(.7, .4, .25, .3)),
            ),
            r = (v(() => {
              u(l), g(o(0, -3, 4));
            }),
              g(o(-5.4, 1.5, -19).rotate(0, -90)),
              d(o(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              d(o(0, 2.8), [5, 10, 3], [-5, 10, 3], ...A1(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * P(e)])),
              x1.map(({ x: e, z: a }) => u(i(6), o(3 * e, 3, 15 * a).scale(.7, 4, .7), h(.6, .3, .3, .4))),
              [-15, 15].map((e, a) => {
                t(),
                  t(),
                  u(i(), o(0, 6.3, e).scale(4, .3, 1), h(.3, .3, .3, .4)),
                  u(i(), o(0, 1, e).scale(3, .2, .35), h(.5, .5, .5, .3)),
                  u(i(), o(0, 0, a ? 22 : -23).scale(3, 1, 8), h(.9, .9, .9, .2)),
                  m(5, e =>
                    u(
                      c,
                      o(18.5 * (a - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * a).scale(1.2, 10, 1.2),
                      h(1, 1, .8, .2),
                    ));
              }),
              u(i(), o(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), h(.8, .8, .8, .2)),
              u(i(), o(3, 1.5, -20).scale(.5, 2, 5), h(.7, .7, .7, .2)),
              u(i(), o(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), h(.75, .75, .75, .2)),
              u(i(5), o(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), h(.6, .3, .3, .4)),
              u(i(), A.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), h(.8, .2, .2, .5)),
              u(b(
                B1(
                  n(i(6, 0, 0, .3), o(8, -3, -4).scale(13, 1, 13), h(.7, .7, .7, .2)),
                  n(i(6), o(0, -8).scale(9, 8, 8), h(.4, .2, .5, .5)),
                  n(i(6, 0, 0, .3), o(0, -.92).scale(13, 2, 13), h(.8, .8, .8, .2)),
                ),
                n(i(5), A.scale(5, 30, 5), h(.4, .2, .6, .5)),
                n(i(5, 0, 1.5), o(0, 1).scale(4.5, .3, 4.5), h(.7, .5, .9, .2)),
                n(i(), A.rotate(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), h(.5, .5, .5, .5)),
                n(i(6), o(15, -1.5, 4).scale(3.5, 1, 3.5), h(.5, .5, .5, .5)),
              )),
              v(() => {
                u(i(5), o(0, -.2).scale(5, 1, 5), h(.6, .65, .7, .3)), g(o(0, 1.2));
              }),
              g(o(15, -2, 4)),
              v(() => {
                u(
                  b(
                    B1(
                      n(i(), A.scale(1.5, 1, 5), h(.9, .9, .9, .2)),
                      n(i(6), A.scale(4, 1, 5), h(.9, .9, .9, .2)),
                      n(i(), o(0, -2).scale(2, 3.2, 1.9), h(.3, .8, .5, .5)),
                      n(i(16, 1, 0, 4), A.scale(1, 1, 1.5).rotate(0, 90), h(.9, .9, .9, .2)),
                    ),
                    n(i(), A.scale(1.3, 10, 1.3), h(.2, .7, .4, .6)),
                  ),
                  o(0, 0, 45),
                ), d(o(0, 2.8, 45), [0, 0, 4.5]);
              }),
              e(35),
              e(55),
              u(i(), o(-18.65, -3, 55).scale(2.45, 1.4, 2.7), h(.9, .9, .9, .2)),
              v(() => {
                u(i(3), o(-23, -1.7, 55.8).scale(5, .7, 8.3), h(.3, .6, .6, .2)),
                  u(i(8), o(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), h(.8, .8, .8, .2)),
                  u(i(), o(-23, -3, 55).scale(5.2, 1.7, 3), h(.5, .5, .5, .3)),
                  u(i(), o(-23, -2.2, 62).scale(3, 1, 4), h(.5, .5, .5, .3)),
                  g(o(-23, -.5, 66.5));
              }),
              v(() => {
                u(i(), o(-22.55, -3, 55).scale(1.45, 1.4, 2.7), h(.7, .7, .7, .2)),
                  u(b(n(i(), A.scale(3, 1.4, 2.7)), n(i(), A.scale(1.2, 8, 1.2))), o(-33, -3, 55), h(.7, .7, .7, .2));
              }),
              v(() => {
                u(b(
                  n(i(), o(-27, -3, 55).scale(3, 1.4, 2.7), h(.9, .9, .9, .2)),
                  n(i(), o(-27, -3, 55).scale(1, 3), h(.9, .9, .9, .2)),
                )), u(i(), o(-39, -3, 55).scale(3, 1.4, 2.7), h(.9, .9, .9, .2));
              }),
              v(() => {
                u(i(6), o(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), h(.7, .7, .7, .4));
              }),
              g(o(-55, -1.1, 46).rotate(0, 90)),
              u(i(6), o(-61.3, -2.4, 49).scale(3, 1, 5), h(.4, .6, .6, .3)),
              u(i(7), o(-57, -2.6, 46).scale(4, 1, 4), h(.8, .8, .8, .3)),
              [
                ...n(i(), o(0, -3).scale(11, 1.4, 3), h(.9, .9, .9, .2)),
                ...n(i(), o(0, -2.2).scale(7.7, .5, 4), h(.5, .5, .5, .2)),
                ...b(
                  n(i(6), A.rotate(90).scale(6, 8, 6), h(.3, .6, .6, .3)),
                  n(i(4, 0, .01), o(0, 6).scale(12, 2, .75).rotate(0, 45), h(.3, .6, .6, .3)),
                  n(i(6), A.rotate(90).scale(5, 12, 5), h(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => n(i(5), o(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), h(.3, .6, .6, .3))),
                ),
              ]),
            s = (u(r, o(-53, 0, 55)),
              v(() => u(r), 2),
              u(i(), o(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), h(.7, .7, .7, .2)),
              u(i(3, 0, -.5), o(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), h(.8, .8, .8, .2)),
              u(b(
                B1(
                  n(i(), o(-100, -2.4, 55).scale(8, .9, 8), h(.8, .8, .8, .2)),
                  n(i(), o(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), h(.8, .8, .8, .2)),
                  n(i(), o(-100, -2.6, 70).scale(3, 1.1, 7), h(.8, .8, .8, .2)),
                  n(i(), o(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), h(.8, .8, .8, .2)),
                  n(i(6), o(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), h(.6, .6, .6, .3)),
                  n(i(), o(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), h(.8, .8, .8, .2)),
                  n(i(), o(-100, .42, 92).scale(3, 1.1, 4.1), h(.8, .8, .8, .2)),
                ),
                n(i(8), o(-100, -1, 55).scale(7, .9, 7), h(.3, .3, .3, .4)),
                n(i(8), o(-100, -2, 55).scale(4, .3, 4), h(.4, .4, .4, .5)),
                n(i(8, 0, -3.1), o(-100, -3, 55).scale(.4, 1, .4), h(.4, .4, .4, .5)),
              )),
              d(o(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              d(o(-89, .2, 80), [0, 0, 6]),
              u(b(
                n(i(), o(-100, 1, 63).scale(7.5, 4), h(.5, .5, .5, .4)),
                n(i(), o(-100, 0, 70).scale(2, 2, 10), h(.5, .5, .5, .4)),
                n(i(20, 1), o(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), h(.5, .5, .5, .4)),
              )),
              x1.map(({ x: a, z: t }) => {
                u(i(6), o(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), h(.6, .15, .15, .8)),
                  [4, -.4].map(e => u(i(6), o(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), h(.4, .2, .2, .8)));
              }),
              m(7, e => {
                u(
                  i((23 * e + 1) % 5 + 5, 0, .5),
                  o(5 * J(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  h(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              u(i(), o(-87, -9.5, 24).scale(7, 1, 3), h(.4, .5, .6, .4)),
              u(i(4), o(-86, -9.2, 27).scale(5, 1, 5), h(.5, .6, .7, .3)),
              u(i(12, 1), o(-86, -9, 31).scale(1.5, 1, 1.5), h(.3, .3, .4, .1)),
              g(o(-86, -7.5, 31)),
              v(() => {
                [0, 12, 24].map(e =>
                  u(i(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), h(.2, .5, .6, .2))
                );
              }),
              v(() => {
                [6, 18].map(e =>
                  u(i(), o(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), h(.1, .4, .5, .2))
                );
              }),
              u(
                b(
                  B1(
                    n(i(5), o(0, 0, -7).scale(2, 1.2, 2), h(.2, .4, .7, .3)),
                    n(i(5), A.scale(9, 1.2, 9), h(0, .2, .3, .5)),
                    n(i(), A.scale(11, 1, 13), h(.3, .4, .6, .3)),
                  ),
                  n(i(5), A.scale(5.4, 5, 5.4), h(0, .2, .3, .5)),
                ),
                o(-38.9, -11.3, 17),
              ),
              g(o(-38.9, -9.6, 10)),
              v(() => {
                u(
                  b(
                    B1(
                      n(i(5), o(0, 2).scale(5, 7, 5).skewY(8), h(.2, .4, .5, .5)),
                      n(i(5), o(0, 6).scale(1.1, 7, 1.1).skewY(-8), h(.25, .35, .5, .5)),
                      n(i(5), o(0, 9).scale(.6, 7, .6).skewY(8), h(.35, .3, .5, .5)),
                    ),
                    n(i(5), A.scale(4, 8, 4), h(.2, .4, .5, .5)),
                    n(i(5), o(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), h(.2, .4, .5, .5)),
                  ),
                  o(-38.9, -11.3, 17),
                ), d(o(-39.1, -.6, 17).rotate(11), ...A1(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2]));
              }),
              x1.map(({ x: a, z: t }) => {
                u(i(14, 1), o(9 * a - 38.9, -7.3, 11 * t + 17).scale(1, 4), h(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    u(i(17, 1), o(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), h(.6, .6, .6, .3))
                  );
              }),
              u(
                b(
                  B1(
                    n(i(6), o(0, 0, -36).scale(15, 1.2, 15), h(.7, .7, .7, .3)),
                    n(i(), o(0, 0, -18).scale(4, 1.2, 6), h(.45, .4, .6, .3)),
                  ),
                  ...m(6, a =>
                    m(6, e =>
                      n(
                        i(6),
                        o(4.6 * e - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * J(4 * e)).scale(2, 5, 2),
                        h(.7, .7, .7, .3),
                      ))).flat(),
                ),
                o(-38.9, -11.3, 17),
              ),
              d(o(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              u(i(5), o(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), h(.8, .1, .25, .4)),
              g(o(-84, -.5, 85).rotate(0, 45)),
              v(() => {
                u(l), g(o(0, -3, -4).rotate(0, 180));
              }),
              b(
                n(i(), o(0, -.5, 1).scale(1.15, 1.2, 6.5), h(.25, .25, .35, .3)),
                b(
                  n(i(3), o(0, 0, -5.5).scale(3, 2), h(.6, .3, .4, .3)),
                  n(i(), o(0, 0, -3.65).scale(2.5, 3), h(.6, .3, .4, .3)),
                ),
                ...[-1, 1].map(e => n(i(), o(1.2 * e, -.5, 1).scale(.14, .3, 6.5), h(.7, .2, 0, .3))),
              ));
          v(() =>
            m(2, e =>
              u(s, o(9 * e - 110 + (1 & e), 1.9, -12)))
          ),
            v(() =>
              m(2, e => u(s, o(9 * (e + 2) - 110 + (1 & e), 1.9, -12)))
            ),
            v(() =>
              m(3, e => u(s, o(9 * e - 106, 1.9, -12)))
            ),
            u(
              b(
                B1(n(i(), o(26.5, -1.6, 10).scale(20, 2.08, 3)), n(i(), o(26.5, -.5, 10).scale(19, 2, .5))),
                ...m(4, e => n(i(), o(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...m(3, e =>
                  n(i(), o(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              o(-123, .2, -12),
              h(.5, .5, .6, .2),
            ),
            g(o(-116, -1.4, -18).rotate(0, 180)),
            u(i(), o(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), h(.8, .8, .8, .2)),
            u(i(6), o(-116, -2.6, -16.5).scale(3.2, .8, 3), h(.6, .5, .7, .2)),
            u(i(), o(-115.5, -17, -12).scale(.5, 15, 2.2), h(.6, .6, .6, .3)),
            u(i(8), o(-114, -17, -2).scale(2, 15, 2), h(.6, .6, .6, .3)),
            u(i(8), o(-79, -17, -2).scale(2, 15, 2), h(1, 1, 1, .3)),
            u(i(), o(-77, -17, -50.5).scale(2.2, 15, .5), h(.6, .6, .6, .3)),
            m(3, e => {
              u(a(16), o(12 * e - 109, -9, -12), h(.6, .6, .6, .3)),
                u(a(16), o(-77, -9, -12 * e - 20).rotate(0, 90), h(.6, .6, .6, .3));
            }),
            u(b(
              n(i(12), o(-77, -14.5, -12).scale(4, 17.5, 4), h(.7, .7, .7, .2)),
              n(i(), o(-79, .1, -12).scale(3.5, 2, 1.3), h(.4, .5, .6, .2)),
              n(i(), o(-77, .1, -14).scale(1.5, 2, 2), h(.4, .5, .6, .2)),
              n(i(12), o(-77, 3.1, -12).scale(3, 5, 3), h(.4, .5, .6, .2)),
            )),
            u(i(), o(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), h(.6, .6, .6, .3)),
            u(i(9), o(-98, -18.4, -40).scale(2.5, 13.5, 2.5), h(.5, .5, .5, .3)),
            u(b(
              n(i(), o(-93, -5.8, -40).scale(9, 1, 5), h(.8, .8, .8, .1)),
              n(i(9), o(-98, -5.8, -40).scale(3, 8, 3), h(.7, .7, .7, .2)),
            )),
            g(o(-98, -4.4, -40).rotate(0, 90)),
            d(o(-115, .2, -12), [0, 0, 3.5]),
            d(o(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            u(b(
              B1(
                n(i(6, 0, 0, .6), o(-100, .7, 105.5).scale(8, 1, 11), h(.7, .7, .7, .2)),
                n(i(), o(-101.5, .7, 93.5).scale(10.5, 1, 2), h(.7, .7, .7, .2)),
              ),
              n(i(5), o(-100, .7, 113).scale(4, 3, 4), h(.7, .7, .7, .2)),
            )),
            m(4, e =>
              v(() =>
                u(
                  i(6),
                  o(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                    2.6,
                    1,
                    2.5,
                  ),
                  h(.5 - e / 8, e / 12 + .5, .7, .3),
                )
              )),
            v(() => {
              u(b(n(i(10), A.scale(6, 2, 6), h(.1, .6, .5, .3)), n(i(10), A.scale(3.3, 6, 3.3), h(.1, .6, .5, .5)))),
                u(i(15, 1), o(-7.5).rotate(0, 90).scale(3, 2.3, 3), h(.4, .4, .4, .3)),
                u(i(10), o(-7.5).rotate(0, 90).scale(2, 2.5, 2), h(.3, .8, .7, .3)),
                u(i(5), o(-7.5).rotate(0, 90).scale(1, 3), h(.5, .5, .5, .5)),
                g(o(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  u(c, A.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), h(1, 1, .8, .2))
                ),
                d(o(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(a => {
              [7.2, 1.5].map(e => u(i(15, 1), o(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), h(.5, .24, .2, .4))),
                u(c, o(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), h(1, 1, .8)),
                u(i(12, 1), o(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), h(.6, .24, .2, .5)),
                u(
                  b(
                    n(i(), o(-4 * a, 3.5, -.5).scale(4, 4, .7), h(.5, .5, .5, .4)),
                    n(i(), A.scale(3, 3, 10), h(.6, .24, .2, .5)),
                    n(i(28, 1), o(0, 3, -5).scale(3, 4, 10).rotate(90, 0), h(.6, .24, .2, .5)),
                    n(i(5), o(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), h(.6, .24, .2, .5)),
                    n(i(5), o(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), h(.6, .24, .2, .5)),
                  ),
                  o(a - 100, .7, 97),
                );
            }),
            u(b(
              n(i(), o(-82.07, .8, 106).scale(11, .9, 2.2), h(.7, .7, .7, .1)),
              n(i(45, 1), o(-81, .7, 106).scale3d(7.7), h(.7, .7, .7, .1)),
            )),
            v(() => {
              u(b(
                n(i(45, 1), A.scale(7.5, 1, 7.5), h(.45, .45, .45, .2)),
                n(i(), o(0, 0, -5.5).scale(1.5, 3, 2.7), h(.45, .45, .45, .2)),
              )),
                u(i(8), o(0, 2).scale(3, 1.5, 3).rotate(0, 22), h(.7, .7, .7, .1)),
                u(i(5), o(0, 2).scale(1, 2), h(.3, .3, .3, .2)),
                d(o(0, 3), ...A1(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2]));
            }),
            v(() => {
              [-1, 1].map(e =>
                u(c, A.rotate(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), h(1, 1, .8))
              ),
                u(b(
                  n(i(28, 1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
                  n(i(), A.scale(9, 5, 2), h(.3, 0, 0, .3)),
                )),
                u(n(i(28, 1), A.scale(7.5, 1, 7.5), h(.45, .45, .45, .2))),
                u(n(i(5), o(0, 1).scale(1, .2), h(.3, .3, .3, .2)));
            }),
            v(() => {
              u(b(
                n(i(28, 1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
                n(i(), o(7).scale(9, 5, 2), h(.3, 0, 0, .3)),
                n(i(), o(0, 0, 7).scale(2, 5, 9), h(.3, 0, 0, .3)),
              )),
                u(n(i(28, 1), A.scale(7.5, 1, 7.5), h(.45, .45, .45, .2))),
                u(n(i(5), o(0, 1).scale(1, .2), h(.3, .3, .3, .2)));
            }),
            v(() => {
              u(b(
                n(i(28, 1), o(0, 2).scale(7.5, 1, 7.5), h(.35, 0, 0, .3)),
                n(i(), o(7).scale(9, 5, 2), h(.3, 0, 0, .3)),
                n(i(), o(0, 0, -7).scale(2, 5, 9), h(.3, 0, 0, .3)),
              )),
                u(n(i(28, 1), A.scale(7.5, 1, 7.5), h(.45, .45, .45, .2))),
                u(n(i(5), o(0, 1).scale(1, .2), h(.3, .3, .3, .2)));
            }),
            u(i(), o(-58, 1, 106).scale(2, .65, 2), h(.7, .7, .7, .2)),
            u(i(), o(-50.7, 1, 99).scale(2, .65, 1), h(.7, .7, .7, .2)),
            u(i(), o(-42, .4, 91).scale(5, 1, 2.5), h(.7, .7, .7, .3)),
            u(i(), o(-34.2, .4, 91).scale(3, 1, 3), h(.7, .7, .7, .3)),
            g(o(-34, 2.7, 96).rotate(-12, 0)),
            u(i(5), o(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), h(.2, .5, .5, .6)),
            [h(.1, .55, .45, .2), h(.2, .5, .5, .3), h(.3, .45, .55, .4)].map((e, a) =>
              v(() => {
                u(i(), o(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
                  2 === a && u(i(), o(-29.1, .4, 91).scale(2.1, 1, 3), h(.7, .7, .7, .3)),
                  1 === a && u(i(), o(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), h(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => u(c, o(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), h(1, 1, .8))),
            m(3, e =>
              u(
                a(24.7 - .7 * (1 & e)),
                o(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? h(.5, .5, .5, .3) : h(.35, .35, .35, .5),
              )),
            u(b(
              n(i(6, 0, 0, .3), o(0, -.92, 95).scale(14, 2, 14), h(.8, .8, .8, .2)),
              n(i(5), o(0, 0, 95).scale3d(6), h(.3, .3, .3, .5)),
            )),
            g(o(0, 1.7, 82).rotate(0, 180)),
            u(i(5), o(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), h(.5, .3, .3, .4)),
            u(i(6), o(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), h(.5, .6, .7, .3)),
            u(i(), o(0, 16, 129).scale(1.5, 1, 2), h(.5, .6, .7, .3)),
            u(i(7), o(0, 16.2, 133).scale(5, 1, 5), h(.4, .5, .6, .4)),
            u(b(
              B1(
                n(i(), o(0, 16, 110.5).scale(12, 1, 3), h(.5, .3, .3, .4)),
                n(i(), o(0, 16, 111).scale(3, 1, 3.8), h(.5, .3, .3, .4)),
              ),
              n(i(5), o(0, 16, 103.5).scale(5.5, 5, 5.5), h(.5, .3, .3, .4)),
            )),
            v(() => {
              u(i(3), o(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), h(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  u(i(6), o(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), h(.7, .7, .7, .4)),
                    u(i(), o(0, 6.2, e + 95).scale(.5, 11, .5), h(.5, .3, .3, .4));
                });
            }),
            v(() => {
              u(i(5), A.scale(5, 1.1, 5), h(.5, .3, .3, .4)),
                u(i(5), A.scale(5.5, .9, 5.5), h(.25, .25, .25, .4)),
                g(o(0, 1.5, -1).rotate(0, 180));
            }),
            d(o(0, 3, 95), ...A1(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
            d(o(0, 19, 134), [0, 0, 3.5]);
        }),
        v(() => {
          u(t(20), o(0, 1).scale3d(.5), h(1, .3, .4)),
            u(t(30), A.scale(.65, .8, .55), h(1, .3, .4)),
            u(i(), o(0, .9, .45).scale(.15, .02, .06), h(.3, .3, .3)),
            [-1, 1].map(e => {
              u(c, A.rotate(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), h(1, 1, .8)),
                u(
                  n(
                    b(i(15, 1), n(i(), o(0, 0, 1).scale(2, 2, .5))),
                    A.rotate(-90, 0).scale(.1, .05, .1),
                    h(.3, .3, .3),
                  ),
                  o(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
                ),
                v(() => {
                  u(i(20, 1), o(.3 * e, -.8).scale(.2, .7, .24), h(1, .3, .4));
                });
            });
        }),
        v(() => {
          u(i(6).slice(0, -1), A.scale(.77, 1, .77), h(1, .3, .5));
        }, 0),
        v(() => {
          u(
            t(30, 24, (e, a, t) => {
              let l = a / 24, r = e * G * 2 / 30, s = J(l ** .6 * G / 2);
              return e = l * l * J(e * G * 14 / 30) / 4,
                23 < a
                  ? { x: t.C = 0, y: -.5, z: 0 }
                  : { x: Z(r) * s, y: Z(l * G) - l - e, z: J(r) * s + J(e * G * 2) / 4 };
            }),
            A.scale(.7, .7, .7),
            h(1, 1, 1),
          ), [-1, 1].map(e => u(t(12), o(.16 * e, .4, -.36).scale3d(.09)));
        }, 0),
        v(() => {
          u(i(6, 1), A.scale(.13, 1.4, .13), h(.3, .3, .5, .1)),
            u(i(10), o(0, 1).scale(.21, .3, .21), h(1, .5, .2)),
            u(i(3), o(0, -1).rotate(90, 90).scale(.3, .4, .3), h(.2, .2, .2, .1));
        }, 0);
    });
});
