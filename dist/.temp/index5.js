let Y,
  M,
  k,
  O,
  Z,
  $,
  e1,
  o,
  t1,
  Q = 0,
  a1 = 0,
  l1 = 0,
  r1 = 0,
  s1 = 0,
  x = 0,
  o1 = 0,
  y = 0,
  c1 = 0,
  z = 0,
  n1 = 0,
  i1 = 0,
  f1 = 0,
  w = 0,
  m1 = 0,
  h1 = 0,
  B = 0,
  T = 1,
  H = 180,
  P = .066,
  q = [],
  R = [],
  C = [],
  u1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  L = { x: 0, y: 0, z: 0 },
  x1 = { x: 0, y: 0, z: 0 },
  g1 = (e, t) => e < t ? e : t,
  X = (e, t) => t < e ? e : t,
  N = e => e < 0 ? -e : e,
  U = (e, t = 0, a = 1) => e < t ? t : a < e ? a : e,
  y1 = (e, t) => N(e) > t ? e : 0,
  E = (e, t, a) => (0 < a ? a < 1 ? e + (t - e) * a : t : e) || 0,
  i = (e, t) => (e = U(e), E(e, 1 - e, t)),
  v1 = e => X1(G(e *= W1), V(e)) / W1,
  z1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * U(a) || 0,
  p = (
    e,
    t = q1,
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
    e = H1,
    t = P1,
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
  f = (e, t, a) => H1.translate(e, t, a),
  h = (e, t, a) => H1.rotate(e, t, a),
  u = (e, t, a) => H1.scale(e, t, a),
  b = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  m = (e, t, a) => (e.D = a, e.A = t, e),
  r = (e, l, t = e.A) =>
    m(
      e.map(e => {
        let t, a;
        return { x: e, y: t, z: a } = e,
          { x: e, y: t, z: a } = l.transformPoint({ x: e, y: t, z: a }),
          { x: e, y: t, z: a };
      }),
      t,
      e.D,
    ),
  g = (e, t, a) => e.map(e => r(e, t, a)),
  d1 = (a, l = 0) =>
    b(a, e => {
      let t = V(2 * K * e / a);
      return { x: G(2 * K * e / a), y: 0, z: N(t) < .01 ? t : t < 0 ? t - l : t + l };
    }),
  s = (l, r, s) => l.map((e, t, { length: a }) => m([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.A, s)),
  v = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? d1(e, l) : u1,
    l = r(e, f(0, 1).scale3d(0 < a ? a : 1)),
    e = r(e, f(0, -1).scale3d(a < 0 ? -a : 1)).reverse(),
    [...s(e, l, t), l, e]),
  l = (l, r = l, s = (e, t) => (t *= K / r, { x: V(e *= 2 * K / l) * G(t), y: V(t), z: G(e) * G(t) })) => {
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
    return t = N1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  n = (l, r) => {
    let s, o, c, n = r.C;
    for (let e = 0; n.length > e; ++e) {
      if ((s = p1(l, n[e]) - l.w) < -8e-5 ? c = r : 8e-5 < s && (o = r), c && o) {
        o = [], c = [], n = r.C, e = r.B;
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
          o: 2 < o.length && { C: m(o, n.A, n.D), B: e, u: r },
          m: 2 < c.length && { C: m(c, n.A, n.D), B: e, u: r },
        };
      }
    }
    return { o, m: c };
  },
  c = (e, t, a = w1(t.C)) => {
    let l, r, s;
    return e
      ? ({ o: l, m: r } = n(e, t), l || r || e.s.push(t), l && (e.o = c(e.o, l, a)), r && (e.m = c(e.m, r, a)))
      : ({ x: l, y: r, z: a, w: s } = a, e = { x: l, y: r, z: a, w: s, s: [t], o: 0, m: 0 }),
      e;
  },
  a = (t, r, s) => {
    let o = [],
      c = (e, t) => {
        let { o: a, m: l } = n(e, t);
        a || l || (0 < s * p1(e, r) ? a = t : l = t), a && (e.o ? c(e.o, a) : o.push(a)), l && e.m && c(e.m, l);
      };
    for (let e of r.s) c(t, e);
    return o;
  },
  S1 = (e, t) => e && (t(e), S1(e.o, t), S1(e.m, t)),
  M1 = e => (S1(e, t => {
    let e = t.m;
    t.m = t.o, t.o = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.s) e.B = !e.B;
  }),
    e),
  A1 = e => e.length ? e.reduce((e, t) => c(e, { C: t, B: 0, u: 0 }), 0) : e,
  d = (...e) =>
    e.reduce((l, t) => {
      let r = [];
      if (l = A1(l), t) {
        t = A1(t), S1(l, e => e.s = a(t, e, 1)), S1(t, e => r.push([e, a(l, e, -1)]));
        for (let [t, a] of r) for (let e of a) c(l, e, t);
      }
      return l;
    }),
  S = (e, ...t) => {
    let a = e => {
        let t;
        return e.u && ((t = l.get(e.u)) ? (r.delete(t), e = a(e.u)) : l.set(e.u, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = M1(d(M1(A1(e)), ...t)),
      S1(e, t => {
        for (let e of t.s) r.set(a(e), e.B);
      }),
      Array.from(r, ([{ C: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return m(t ? a.reverse() : a, e.A, e.D);
      });
  },
  I1 = () => {
    n1 = i(R[12].g, R[13].g),
      o1 = E(E(o1, 0, 1 - J(-1 * P)), v1(o1 + 60 * P), R[5].g - R[6].i),
      s1 = E(E(s1, 0, 1 - J(-5 * P)), v1(s1 + 56 * P), n1),
      x = E(E(x, 0, 1 - J(-4 * P)), v1(x + 48 * P), n1),
      z = E(z, R[9].i, 1 - J(-(.2 + .3 * N(2 * R[9].i - 1)) * P)),
      c1 = E(c1, y ? E(c1, -9, 1 - J(-1.5 * P)) : U(Q / 3), 1 - J(-1 * P)),
      T && Q > T && (T = 0, h4.innerHTML = ""),
      R[0].j && .8 < R[0].g && (l1 < 13
        ? (1 / 0 > T && (T = Q + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), R[0].j = 0)
        : y
          || (1 / 0 > T && (T = Q + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            y = 1));
    for (let e of q) e.h(W(H1, e.l));
    for (let e of R) e.h();
    for (let e of C) e.h();
  },
  D1 = () => {
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
      ][l1 = C.reduce((e, { j: t }) => e + t, 0)] + " / XIII";
  },
  j1 = () => {
    localStorage.DanteSP22 = JSON.stringify([R.map(({ j: e }) => e), C.map(({ j: e }) => e), r1, Q, z]);
  },
  F1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  A = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  I = (e, t = new DOMMatrix(), a) => o.s.push(...g(e, t, a)),
  D = (e, t = 1) => {
    let a = o;
    return q.push(t = { l: new DOMMatrix(), H: q.length, G: t, s: [], h() {} }), e(o = t), o = a, t;
  },
  Y1 = e => (e = e.transformPoint(), N1(L.x - e.x, L.y - e.y, L.z - e.z)),
  j = e => {
    let t = new DOMMatrix(),
      a = new DOMMatrix(),
      l = o,
      r = R.length,
      s = {
        j: 0,
        g: 0,
        i: 0,
        u: l,
        I: t,
        l: a,
        h() {
          W(W(l.l, t).multiplySelf(e), a).rotateSelf(60 * s.g - 30, 0).translateSelf(0, 1),
            s.g = E(s.g, s.j, 1 - J(-4 * P)),
            s.i = E(s.i, s.j, 1 - J(-1 * P)),
            k && Y1(t) < 3 && (s.g < .3 || .7 < s.g)
            && (s.j = s.j ? 0 : 1, r && 1 / 0 > T && (T = Q + 1, h4.innerHTML = "* click *"), r1 = r, j1());
        },
      };
    R.push(s),
      I(v(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), A(.4, .5, .5)),
      I(v(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), A(.4, .5, .5)),
      I(v(), e.translate(0, -.4).scale(.5, .1, .5), A(.5, .5, .4));
  },
  F = (f, ...e) => {
    let m = -1,
      h = 0,
      u = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      S = new DOMMatrix(),
      M = o,
      t = C.length,
      A = e.map(([e, t, a]) => ({ x: e, z: t, w: a })),
      I = A[0],
      { x: D, z: j } = I,
      F = D,
      Y = j,
      k = {
        j: 0,
        l: S,
        h() {
          if (!k.j) {
            let e, t, a, l, r, s, o, c = 1, n = 1 / 0;
            for (let l of A) {
              let { x: e, z: t, w: a } = l;
              t = (e = N1(D - e, j - t)) - a, o ||= e < a, 0 < t && n > t && (n = t, I = l), c = g1(c, e / a);
            }
            o
            || ({ x: i, z: e, w: t } = I,
              a = D - i,
              l = j - e,
              r = N1(a, l),
              s = X1(-l, a),
              p && (u = (U1() - .5) * K / 2, b = U(b / (1 + U1()))),
              s += u,
              m = -V(s),
              h = G(s),
              .1 < r && (r = g1(r, t) / (r || 1), D = a * r + i, j = l * r + e)),
              p = o,
              b = E(b, 6 * (1 - c) + 3, 1 - J(-(c + 3) * P));
            var i = D = E(D, D + m, 1 - J(-b * P));
            F = E(F, i, 1 - J(-b * P)),
              i = j = E(j, j + h, 1 - J(-b * P)),
              Y = E(Y, i, 1 - J(-b * P)),
              g = z1(g, X1(F - v, Y - d) / W1 - 180, 1 - J(-3 * P)),
              Y1(W(M.l, S).multiplySelf(f).translateSelf(v = F, 0, d = Y).rotateSelf(0, g, 7 * G(1.7 * Q))) < 1.6
              && (k.j = 1,
                i = [
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
                ][l1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > T && (T = Q + (l1 && l1 < 12 ? 5 : 7), h4.innerHTML = i),
                D1(),
                j1());
          }
          k.j
            && W(q[2].l, S).translateSelf(
              t % 4 * 1.2 - 1.7 + G(Q + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + N(t % 4 - 2) + V(Q / 1.5 + t) / 6,
            );
        },
      };
    C.push(k);
  },
  k1 = (e, t = 35633) => (t = _.c6x(t), _.s3c(t, e), _.c6a(t), t),
  T1 = (e, t) => {
    let a = {}, l = _.c1h();
    return _.abz(l, e), _.abz(l, k1(t, 35632)), _.l8l(l), e => e ? a[e] || (a[e] = _.gan(l, e)) : _.u7y(l);
  },
  C1 = (e, t, a) => {
    if (M) {
      t = h(0, 40 * G(a1) - 70);
      for (let e of [37, 38, 39]) p(t, R1, e - 1);
      _.uae(e, !1, R1), _.d97(4, q[39].F - q[37].v, 5123, 2 * q[37].v);
    } else {
      _.uae(e, !1, R1),
        _.d97(4, (t ? q[39].F : q[37].v) - 3, 5123, 6),
        _.uae(e, !1, L1),
        _.das(4, q[a].F - q[a].v, 5123, 2 * q[a].v, C.length),
        _.das(4, q[40].F - q[40].v, 5123, 2 * q[40].v, R.length);
    }
  },
  O1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  Q1 = e => G(e * K * 2),
  B1 = new AudioContext(),
  H1 = new DOMMatrix(),
  P1 = new DOMMatrix(),
  q1 = new Float32Array(16),
  R1 = new Float32Array(624),
  L1 = new Float32Array(624),
  { PI: K, atan2: X1, sin: G, cos: V, hypot: N1, exp: J, random: U1, sqrt: E1 } = Math,
  W1 = K / 180,
  t = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  K1 = B1.createBufferSource(),
  _ = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let e in _) _[e[0] + [...e].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = _[e];
O1(() => {
  let e = 0,
    a = () => {
      if (2 == ++e) {
        let u = [new Float32Array(16), new Float32Array(16)],
          l = e => {
            if (
              _.f1s(),
                requestAnimationFrame(l),
                a1 += t = (e - (Y || e)) / 1e3,
                Q += P = M ? 0 : g1(.066, t),
                Y = e,
                0 < P
            ) {
              for (Z(), I1(), t1(), e = 0; q.length > e; ++e) q[e].G && p(q[e].l, R1, e - 1);
              for (e = 0; C.length > e; ++e) p(C[e].l, L1, e);
              for (t = 0; R.length > t; ++t) p(R[t].l, L1, e), L1[16 * e++ + 15] = 1 - R[t].g;
              s(), _.b6o(36160, f), _.v5y(0, 0, 128, 128), _.c4s(16640), _.cbf(!0, !1, !0, !1);
              var { x: t, y: e, z: a } = L;
              _.uae(s("b"), !1, p(W().rotateSelf(0, 180).invertSelf().translateSelf(-t, -e, .3 - a))),
                C1(s("c"), 0, 41),
                _.c4s(256),
                _.cbf(!1, !0, !0, !1),
                _.uae(s("b"), !1, p(W().translateSelf(-t, -e, -a - .3))),
                C1(s("c"), 0, 41),
                _.f1s();
            }
            k = 0,
              W(H1, g),
              M
                ? g.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
                : g.rotateSelf(-B, -H).invertSelf().translateSelf(-w, -m1, -h1),
              v(),
              _.b6o(36160, n),
              _.v5y(0, 0, 2048, 2048),
              c[0](54.7 * 1.1),
              c[1](126 * 1.1),
              o(),
              _.b6o(36160, null),
              _.v5y(0, 0, _.drawingBufferWidth, _.drawingBufferHeight),
              _.cbf(!0, !0, !0, !0),
              _.c4s(16640),
              _.uae(o("a"), !1, p($)),
              _.uae(o("b"), !1, p(g)),
              _.uae(o("i"), !1, u[0]),
              _.uae(o("j"), !1, u[1]),
              _.ubu(o("k"), w, m1, h1),
              C1(o("c"), !O, 42),
              r(),
              _.ubu(r("j"), _.drawingBufferWidth, _.drawingBufferHeight, a1),
              _.ubu(r("k"), w, m1, h1),
              _.uae(r("b"), !1, p(W(g).invertSelf())),
              _.d97(4, 3, 5123, 0),
              _.b6o(36160, f),
              _.f1s();
          },
          g = new DOMMatrix(),
          a = new DOMMatrix(),
          e = m,
          t = k1(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          v = T1(
            k1(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          r = T1(
            k1(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          s = T1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          o = T1(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          d = b(8, () => ({})),
          c = b(2, e => {
            let t = _.c25();
            return _.a4v(33984 + e),
              _.b9j(3553, t),
              _.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              _.t2z(3553, 10241, 9729),
              _.t2z(3553, 10240, 9729),
              _.t2z(3553, 34893, 515),
              _.t2z(3553, 34892, 34894),
              _.t2z(3553, 10243, 33071),
              _.t2z(3553, 10242, 33071),
              l => {
                let r = 0, s = 0, o = 0, c = 1 / 0, n = -1 / 0, i = 1 / 0, f = -1 / 0, m = 1 / 0, h = -1 / 0;
                _.fas(36160, 36096, 3553, t, 0),
                  _.c4s(256),
                  W().scale3dSelf(l).multiplySelf(W(e1[e], a).multiplySelf(g).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = d[a],
                    t = (e.x = 4 & a ? 1 : -1, e.y = 2 & a ? 1 : -1, e.z = 1 & a ? 1 : -1, P1.transformPoint(e));
                  r -= e.x = (0 | t.x) / l / t.w, s -= e.y = (0 | t.y) / l / t.w, o -= e.z = (0 | t.z) / l / t.w;
                }
                for (W().rotateSelf(298, 139).translateSelf(r / 8, s / 8, o / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: t, z: a } = P1.transformPoint(d[l]);
                  c = g1(c, e), n = X(n, e), i = g1(i, t), f = X(f, t), m = g1(m, a), h = X(h, a);
                }
                l = 10 + e,
                  m *= m < 0 ? l : 1 / l,
                  h *= 0 < h ? l : 1 / l,
                  _.uae(
                    v("b"),
                    !1,
                    p(
                      W(H1, a).scaleSelf(2 / (n - c), 2 / (f - i), 2 / (m - h)).translateSelf(
                        (n + c) / -2,
                        (f + i) / -2,
                        (m + h) / 2,
                      ).multiplySelf(P1),
                      u[e],
                    ),
                  ),
                  C1(v("c"), !O, 42);
              };
          }),
          n = _.c5w(),
          i = (t = _.c25(), _.c3z()),
          f = _.c5w();
        s(),
          _.uae(s("a"), !1, p(F1(1e-4, 1, 1.4, .59))),
          o(),
          _.ubh(o("q"), 2),
          _.ubh(o("h"), 1),
          _.ubh(o("g"), 0),
          r(),
          _.ubh(r("q"), 2),
          _.b6o(36160, n),
          _.d45([0]),
          _.r9l(0),
          _.b6o(36160, f),
          _.bb1(36161, i),
          _.r4v(36161, 33189, 128, 128),
          _.f8w(36160, 36096, 36161, i),
          _.a4v(33986),
          _.b9j(3553, t),
          _.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          _.fas(36160, 36064, 3553, t, 0),
          _.b9j(3553, _.c25()),
          _.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, e),
          _.t2z(3553, 10241, 9987),
          _.t2z(3553, 10240, 9729),
          _.gbn(3553),
          _.e8z(2929),
          _.e8z(2884),
          _.c70(1),
          _.c7a(1029),
          _.d4n(515),
          _.c5t(0, 0, 0, 1),
          I1(),
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
                b4.innerHTML = "Music: " + t, M || !t ? K1.disconnect() : K1.connect(B1.destination);
              },
              s = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                $ = F1(.3, 181, e, 1.732051),
                  e1 = [F1(.3, 55, e, 1.732051), F1(55, 181, e, 1.732051)],
                  f = g = void 0,
                  r.length =
                    k =
                    l =
                    b =
                    S =
                    i1 =
                    f1 =
                      0;
              },
              o = (e, t = 0) => {
                if (M !== e) {
                  M = e, O = t, s(), D1(), document.body.className = e ? "l m" : "l";
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
                if (!M && (e.target === hC && (k = 1), O)) {
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
                    (r[t] = !!e.type[5] && !0) && (0 === t && (k = 1), 1 === t && o(!0)));
              },
              onmousemove = ({ movementX: e, movementY: t }) => {
                O && (e || t) && (H += .1 * e, B += .1 * t);
              },
              hC.ontouchstart = l => {
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    O && e > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, h = e, u = t, g = a, d = H, p = B)
                      : void 0 === f && (m = 0, n = e, i = t, f = a);
                  }
                  e = a1;
                }
              },
              hC.ontouchmove = l => {
                let r, s, o, c;
                if (!M) {
                  for (let { pageX: e, pageY: t, identifier: a } of l.changedTouches) {
                    g === a && (H = d + (e - h) / 2.3, B = p + (t - u) / 2.3, v = 1),
                      f === a
                      && (a = (n - e) / 20,
                        r = N(a),
                        s = (i - t) / 20,
                        o = N(s),
                        (c = .5 < X(r, o)) && (m = 1),
                        b = (c && .2 < r) * U(a, -1),
                        S = (c && .2 < o) * U(s, -1),
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
                t.target === hC && a && e && .02 < (t = a1 - e) && t < .7 && (k = 1);
              },
              Z = () => {
                i1 = S + (r[4] ? 1 : 0) - (r[5] ? 1 : 0), f1 = b + (r[2] ? 1 : 0) - (r[3] ? 1 : 0);
                let a = navigator.getGamepads()[0];
                if (a) {
                  let e = e => t[e]?.pressed || 0 < t[e]?.value ? 1 : 0, t = a.buttons;
                  a = a.axes,
                    O && (B += P * y1(a[3], .3) * 80, H += P * y1(a[2], .3) * 80),
                    i1 += e(12) - e(13) - y1(a[1], .2),
                    f1 += e(14) - e(15) - y1(a[0], .2),
                    e(9) && o(!0),
                    (a = e(3) || e(2) || e(1) || e(0)) && !l && (k = 1),
                    l = a;
                }
              },
              document.onvisibilitychange = onblur = onresize = s,
              o(!0);
          })(),
          (() => {
            let c,
              n,
              o,
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
              M,
              A,
              I,
              D = 1,
              j = 2,
              F = 2,
              Y = () => (j ? R[r1].u : q[o && 1 === q[o].G && o || 0]).l,
              k = (e, t, a, l) => E(e, t, D || (U(E1(N(t - e)) - a) + 1 / 7) * (1 - J(-1.5 * l * P))),
              T = new Uint8Array(256),
              C = new Uint8Array(65536);
            t1 = () => {
              let e,
                t = (l = U(i1, -1), U(f1, -1)),
                a =
                  (e = y1(E1(N1(l, t)), .1),
                    r = X1(l, t),
                    e && (f = 90 - r / W1),
                    m = z1(m, f, 1 - J(-8 * P)),
                    h = E(h, e, 1 - J(-10 * P)),
                    l = e * N(l) * G(r),
                    t = e * N(t) * V(r),
                    _.r9r(0, 0, 128, 128, 6408, 5121, C),
                    (() => {
                      let s = 0, o = 0, t = 0, a = 0;
                      i = 0, T.fill(0);
                      for (let e = 0; e < 31; ++e) {
                        let l = 0, r = 512 * e;
                        for (let a = 0; a < 128; a++) {
                          let e = r + 4 * a, t = (C[e] + C[1 + e]) / 255;
                          e = C[2 + e],
                            14 < a && a < 114 && (l += t),
                            e && t && (t = T[e] + 1, T[e] = t, s > t || (s = t, o = e, i = 1));
                        }
                        l < 3 && 5 < e && (t += e / 32), 3 < l && (7 < e && (a += e / 15), i = 1);
                      }
                      c = o || n,
                        n = o,
                        F = E(F, i ? 6.5 : x1.y < -20 ? 11 : 8, 1 - J(-4 * P)),
                        x1.y += a / 41 - (i || F) * t / 41 * F * P;
                    })(),
                    (() => {
                      v = g = 0;
                      for (let e = 32; e < 128; e += 2) {
                        let o = 0, c = 0, n = 0, i = 0, f = 512 * e;
                        for (let s = 1 & e; s < 128; s += 2) {
                          let e = f + 4 * s,
                            t = f + 4 * (127 - s),
                            a = C[e] / 255,
                            l = C[1 + t] / 255,
                            r = 1 - N(s / 63.5 - 1);
                          10 < s && s < 118
                          && (o = X(o, X(a * r, a * C[t] / 255)), c = X(c, X(l * r, l * C[1 + e] / 255))),
                            (s < 54 || 74 < s) && .001 < (t = (1 - r) * X(a, l) / 3)
                            && (s < 64 && t > n ? n = t : 64 < s && t > i && (i = t));
                        }
                        N(i - n) > N(g) && (g = i - n), N(c - o) > N(v) && (v = c - o);
                      }
                    })(),
                    U(1 - 5 * X(N(g), N(v))));
              b = E(b, i * a * U(2 * e) * 7, 1 - J(-(i ? .1 < a ? 10 : 5 + 2 * e : 1) * P)),
                d = E(d, 0, 1 - J(-(i ? 8 : 4) * P)),
                p = E(p, 0, 1 - J(-(i ? 8 : 4) * P)),
                c && (a = 0),
                g += P * (a * d + b * (t * V(r = O ? (180 - H) * W1 : 0) - l * G(r))),
                v += P * (a * p + b * (t * G(r) + l * V(r))),
                e = Y();
              var { x: l, y: r, z: s } = 1 < j
                ? R[r1].I.transformPoint({ x: 0, y: r1 || .9 < c1 ? 15 : 1, z: -2.4 })
                : (t = e,
                  W(t).invertSelf(),
                  P1.m41 = P1.m42 = P1.m43 = 0,
                  s = P1.transformPoint({ x: g, z: v, w: 0 }),
                  x1.x += s.x,
                  x1.z += s.z,
                  t.transformPoint(x1));
              for (
                c && (d = (l - L.x) / P, p = (s - L.z) / P),
                  L.x = l,
                  L.y = r,
                  L.z = s,
                  !(j = j && (i && c ? 0 : 1)) && c === o
                  || (o = c, a = (e = Y()).inverse().transformPoint(L), x1.x = a.x, x1.y = a.y, x1.z = a.z),
                  u = E(u, n1 * (27 < c && c < 32), 1 - J(-2 * P)),
                  r < (l < -20 || s < 109 ? -25 : -9) && (d = p = b = 0, j = 2),
                  1 === c && (R[9].j = l < -15 && s < 0 ? 1 : 0),
                  S = E(E(S, r, 1 - J(-2 * P)), r, j || 8 * N(S - r)),
                  A = k(A, S, 2, 1),
                  M = k(M, l, .5, 1),
                  I = k(I, s, .5, 1),
                  O
                    ? (t = j + (1 - J(-18 * P)), w = E(w, l, t), m1 = E(m1, S + 1.5, t), h1 = E(h1, s, t), H = v1(H))
                    : (m1 = k(m1, X(A + U((-60 - s) / 8, 0, 20) + 13 + 9 * u, 6), 4, 2),
                      h1 = k(h1, I + -18 + 5 * u, 1, 2 + u),
                      w = k(w, M, 1, 2 + u),
                      e = g1(-6, -N(I - h1)),
                      H = z1(H, 90 - v1(X1(e, r = M - w) / W1), D + (1 - J(-10 * P))),
                      B = z1(B, 90 - X1(N1(e, r), m1 - A) / W1, D + (1 - J(-10 * P)))),
                  B = U(B, -87, 87),
                  D = 0,
                  q[37].l.translateSelf(l, S + .124, s).rotateSelf(0, m),
                  l = 0;
                l < 2;
                ++l
              ) {
                q[38 + l].l.multiplySelf(q[37].l).translateSelf(0, h * U(.45 * G(9.1 * Q + K * (l - 1) - K / 2)))
                  .rotateSelf(h * G(9.1 * Q + K * (l - 1)) * .25 / W1, 0);
              }
            };
          })(),
          requestAnimationFrame(l);
      }
    },
    m = new Image();
  m.onload = m.onerror = a,
    m.src = t,
    (r => {
      let X = 0,
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
                d = K * 2 ** (l - 8) / m,
                p = q * m & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, t = +"000001234556112341234556011111111112011111111112000001111112"[12 * X + l];
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
                          n = X < 2
                            ? e => e % 1 * 2 - 1
                            : Q1,
                          i = X < 2
                            ? X < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : Q1,
                          f = new Int32Array(k + T + L);
                        for (let t = 0, a = 0; k + T + L > t; ++t, ++a) {
                          let e = 1;
                          k > t ? e = t / k : k + T > t || (e = (1 - (e = (t - k - T) / L)) * 3 ** (-C / 16 * e)),
                            a < 0
                            || (a -= 4 * m,
                              r = .00396 * 2 ** ((c + A - 256) / 12),
                              l = .00396 * 2 ** ((c + j - 256) / 12) * (1 + (X ? 0 : .0072))),
                            f[t] = 80
                                * (n(s += r * e ** (I / 32)) * M + i(o += l * e ** (F / 32)) * D
                                  + (Y ? (2 * U1() - 1) * Y : 0))
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
                        1 !== X && 4 !== X || (o *= G(v * h * K * 2) * R / 512 + .5),
                        o = 1.5 * G(o),
                        n += o * i,
                        i += o * (s = (1 - Q / 255) * (e - i) - n),
                        e = 4 === X ? i : 3 === X ? s : n,
                        X || (e = (e *= 22e-5) < 1 ? -1 < e ? G(e / 4 * K * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        c = 1e-5 < e * e,
                        r = e * (1 - (s = G(d * h) * H / 512 + .5)),
                        e *= s),
                      p > h || (r += f[1 + h - p] * P / 255, e += f[h - p] * P / 255),
                      N[s = b + h >> 1] += (f[h] = r) / 65536,
                      U[s] += (f[++h] = e) / 65536;
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
            ][X],
            [M, A, I, D, j, F, Y, k, T, t, C, a, O, Q, B, H, l, P, q, R] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][X],
            L = 4 * t ** 2;
          e(5513), e(4562), e(3891), O1(++X < 5 ? s : r);
        },
        e = B1.createBuffer(2, 5362944, 44100),
        N = e.getChannelData(0),
        U = e.getChannelData(1);
      K1.buffer = e, K1.loop = !0, O1(s);
    })(() => {
      O1(() => {
        let s,
          t = 0,
          l = [],
          o = [],
          c = [],
          n = [],
          r = e => {
            let { x: t, y: a, z: l } = s[e], r = (h[0] = t, h[1] = a, h[2] = l, f.get(e = "" + (s.D ? m : i)));
            return void 0 !== r
              ? (t = 3 * r, n[t] = (n[t++] + i[5]) / 2, n[t] = (n[t++] + i[6]) / 2, n[t] = (n[t] + i[7]) / 2)
              : (f.set(e, r = f.size), o.push(t, a, l, h[3]), c.push(i[4]), n.push(i[5], i[6], i[7])),
              r;
          },
          i = new Int32Array(8),
          f = new Map(),
          m = new Int32Array(i.buffer, 0, 5),
          h = new Float32Array(i.buffer);
        for (let e of q) {
          for (s of (h[3] = 40 === e.H ? -14 : e.G && e.H, e.s)) {
            let { x: e, y: t, z: a } = w1(s);
            i[4] = 0 | s.A, i[5] = 32767 * e, i[6] = 32767 * t, i[7] = 32767 * a;
            for (let e = 2, t = r(0), a = r(1); s.length > e; ++e) l.push(t, a, a = r(e));
          }
          e.s = null, e.v = t, e.F = t = l.length;
        }
        _.b11(34962, _.c1b()),
          _.b2v(34962, new Float32Array(o), 35044),
          _.v7s(0, 4, 5126, !1, 0, 0),
          _.b11(34962, _.c1b()),
          _.b2v(34962, new Int16Array(n), 35044),
          _.v7s(1, 3, 5122, !0, 0, 0),
          _.b11(34962, _.c1b()),
          _.b2v(34962, new Uint32Array(c), 35044),
          _.v7s(2, 4, 5121, !0, 0, 0),
          _.b11(34963, _.c1b()),
          _.b2v(34963, new Uint16Array(l), 35044),
          _.e3x(0),
          _.e3x(1),
          _.e3x(2),
          O1(a);
        try {
          let [a, l, e, t, r] = JSON.parse(localStorage.DanteSP22);
          R.map((e, t) => e.g = e.i = e.j = t ? 0 | a[t] : 0),
            C.map((e, t) => e.j = 0 | l[t]),
            r1 = e,
            z = r,
            Q = t,
            P = 0;
        } catch {}
        c1 = U(r1);
      });
      let t = b(11, e => f(G(e / 10 * K), e / 10).rotate(+e).scale(1.0001 - e / 10, 0, 1 - e / 10)),
        n = b(10, e => s(r(d1(18), t[e]).reverse(), r(d1(18), t[e + 1]), 1)).flat();
      D(() => I([u1.slice(1)], f(-2).scale3d(3).rotate(90, 0)), 0),
        D(() => {
          let e = (t, a, l) =>
              D(e => {
                e.h = e => e.translateSelf(r() * G(3 * t + Q * t) * a),
                  u1.map(({ x: e, z: t }) => {
                    I(v(11, 1), f(4 * e, 4, l + 4 * t).scale(.8, 3, .8), A(.5, .3, .7, .6)),
                      I(v(), f(4 * e, 7, l + 4 * t).scale(1, .3), A(.5, .5, .5, .3));
                  }),
                  I(S(
                    g(v(), f(0, 0, l).scale(5, 1, 5), A(.8, .8, .8, .3)),
                    ...[-1, 1].map(e => g(v(), f(5 * e, .2, l).rotate(-30 * e).scale(4, 1, 2), A(.8, .8, .8, .3))),
                  )),
                  I(v(), f(0, -3, l).scale(8, 2, 8), A(.4, .4, .4, .3));
              }),
            t = (e, t, a, l) =>
              e.translateSelf(t + G(Q + 2) / 5, a + G(.8 * Q) / 3, l).rotateSelf(2 * G(Q), G(.7 * Q), G(.9 * Q)),
            a = e =>
              S(
                g(v(), f(0, -e / 2).scale(6, e - 1, 2.2)),
                g(v(), f(0, -e / 2 - 6).scale(4, e - 3, 4)),
                g(v(32, 1), f(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            r = () => g1(R[2].i, 1 - R[4].i),
            l = S(
              g(v(30, 1, 1.15, 1), f(0, -3).scale(3.5, 1, 3.5), A(.7, .4, .25, .7)),
              g(v(30, 1, 1.3, 1), f(0, -2.5).scale(2.6, 1, 3), A(.7, .4, .25, .2)),
              g(v(), f(4, -1.2).scale3d(2), A(.7, .4, .25, .3)),
            ),
            s = b(7, e => g(v(6, 1), f(4 * (e / 6 - .5), 3).scale(.2, 3, .2), A(.3, .3, .38))).flat(),
            o = (D(e => {
              e.h = e => t(e, -12, 4.2, 40 * c1 - 66), I(l), j(f(0, -3, 4));
            }),
              j(f(-5.4, 1.5, -19).rotate(0, -90)),
              F(f(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              F(f(0, 2.8), [5, 10, 3], [-5, 10, 3], ...d1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * N(e)])),
              I(v(), f(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), A(.8, .8, .8, .2)),
              u1.map(({ x: e, z: t }) => I(v(6), f(3 * e, 3, 15 * t).scale(.7, 4, .7), A(.6, .3, .3, .4))),
              I(v(), f(0, 0, -23).scale(3, 1, 8), A(.9, .9, .9, .2)),
              I(v(), f(0, 0, 22).scale(3, 1, 8), A(.9, .9, .9, .2)),
              [-15, 15].map((t, a) => {
                I(v(), f(0, 6.3, t).scale(4, .3, 1), A(.3, .3, .3, .4)),
                  I(v(), f(0, 1, t).scale(3, .2, .35), A(.5, .5, .5, .3)),
                  D(e => {
                    e.h = e => e.translateSelf(0, 0, t).scaleSelf(1, U(1.22 - R[a + 1].g), 1), I(s);
                  });
              }),
              b(5, t =>
                b(2, e =>
                  I(
                    n,
                    f(18.5 * (e - .5), 0, 4.8 * t - 9.5).rotate(0, 180 - 180 * e).scale(1.2, 10, 1.2),
                    A(1, 1, .8, .2),
                  ))),
              I(v(), f(3, 1.5, -20).scale(.5, 2, 5), A(.7, .7, .7, .2)),
              I(v(), f(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), A(.75, .75, .75, .2)),
              I(v(5), f(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), A(.6, .3, .3, .4)),
              I(v(), h(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), A(.8, .2, .2, .5)),
              I(S(
                d(
                  g(v(6, 0, 0, .3), f(8, -3, -4).scale(13, 1, 13), A(.7, .7, .7, .2)),
                  g(v(6), f(0, -8).scale(9, 8, 8), A(.4, .2, .5, .5)),
                  g(v(6, 0, 0, .3), f(0, -.92).scale(13, 2, 13), A(.8, .8, .8, .2)),
                ),
                g(v(5), u(5, 30, 5), A(.4, .2, .6, .5)),
                g(v(5, 0, 1.5), f(0, 1).scale(4.5, .3, 4.5), A(.7, .5, .9, .2)),
                g(v(), h(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), A(.5, .5, .5, .5)),
                g(v(6), f(15, -1.5, 4).scale(3.5, 1, 3.5), A(.5, .5, .5, .5)),
              )),
              D(e => {
                e.h = e =>
                  e.translateSelf(
                    0,
                    .01 < R[3].g ? (5 * V(1.5 * Q) + 2) * R[3].i * (1 - R[2].g) + -15 * (1 - R[3].g) : -500,
                    0,
                  ),
                  I(v(5), f(0, -.2).scale(5, 1, 5), A(.6, .65, .7, .3)),
                  j(f(0, 1.2));
              }),
              j(f(15, -2, 4)),
              e(.7, 12, 35),
              e(1, 8.2, 55),
              D(e => {
                e.h = e => e.translateSelf(r() * G(Q / 1.5 + 2) * 12),
                  I(
                    S(
                      d(
                        g(v(), u(1.5, 1, 5), A(.9, .9, .9, .2)),
                        g(v(6), u(4, 1, 5), A(.9, .9, .9, .2)),
                        g(v(), f(0, -2).scale(2, 3.2, 1.9), A(.3, .8, .5, .5)),
                        g(v(16, 1, 0, 4), u(1, 1, 1.5).rotate(0, 90), A(.9, .9, .9, .2)),
                      ),
                      g(v(), u(1.3, 10, 1.3), A(.2, .7, .4, .6)),
                    ),
                    f(0, 0, 45),
                  ),
                  F(f(0, 2.8, 45), [0, 0, 4.5]);
              }),
              I(v(), f(-18.65, -3, 55).scale(2.45, 1.4, 2.7), A(.9, .9, .9, .2)),
              D(e => {
                e.h = e => e.translateSelf(9.8 * (1 - r())),
                  I(v(3), f(-23, -1.7, 55.8).scale(5, .7, 8.3), A(.3, .6, .6, .2)),
                  I(v(8), f(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), A(.8, .8, .8, .2)),
                  I(v(), f(-23, -3, 55).scale(5.2, 1.7, 3), A(.5, .5, .5, .3)),
                  I(v(), f(-23, -2.2, 62).scale(3, 1, 4), A(.5, .5, .5, .3)),
                  j(f(-23, -.5, 66.5));
              }),
              D(e => {
                e.h = e => e.translateSelf(0, U(1 - 5 * r()) * i(R[4].g, R[5].g) * G(1.35 * Q) * 4),
                  I(v(), f(-22.55, -3, 55).scale(1.45, 1.4, 2.7), A(.7, .7, .7, .2)),
                  I(S(g(v(), u(3, 1.4, 2.7)), g(v(), u(1.2, 8, 1.2))), f(-33, -3, 55), A(.7, .7, .7, .2));
              }),
              D(e => {
                e.h = e => e.translateSelf(0, 0, U(1 - 5 * r()) * i(R[4].g, R[5].g) * G(.9 * Q) * 8),
                  I(S(
                    g(v(), f(-27, -3, 55).scale(3, 1.4, 2.7), A(.9, .9, .9, .2)),
                    g(v(), f(-27, -3, 55).scale(1, 3), A(.9, .9, .9, .2)),
                  )),
                  I(v(), f(-39, -3, 55).scale(3, 1.4, 2.7), A(.9, .9, .9, .2));
              }),
              D(e => {
                e.h = e => e.translateSelf(0, -6.5 * R[4].i),
                  I(v(6), f(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), A(.7, .7, .7, .4));
              }),
              j(f(-55, -1.1, 46).rotate(0, 90)),
              I(v(6), f(-61.3, -2.4, 49).scale(3, 1, 5), A(.4, .6, .6, .3)),
              I(v(7), f(-57, -2.6, 46).scale(4, 1, 4), A(.8, .8, .8, .3)),
              [
                ...g(v(), f(0, -3).scale(11, 1.4, 3), A(.9, .9, .9, .2)),
                ...S(
                  g(v(6), h(90).scale(6, 8, 6), A(.3, .6, .6, .3)),
                  g(v(4, 0, .01), f(0, 6).scale(12, 2, .75).rotate(0, 45), A(.3, .6, .6, .3)),
                  g(v(6), h(90).scale(5, 12, 5), A(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(e => g(v(5), f(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), A(.3, .6, .6, .3))),
                ),
              ]),
            c = (I(o, f(-53, 0, 55)),
              D(e => {
                e.h = e => e.translateSelf(-75, (1 - R[5].i) * (1 - R[6].g) * 3, 55).rotate(180 * (1 - R[5].i) + o1, 0),
                  I(o);
              }, 2),
              I(v(), f(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), A(.7, .7, .7, .2)),
              I(v(3, 0, -.5), f(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), A(.8, .8, .8, .2)),
              I(S(
                d(
                  g(v(), f(-100, -2.5, 55).scale(8, 1, 8), A(.8, .8, .8, .2)),
                  g(v(), f(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), A(.8, .8, .8, .2)),
                  g(v(), f(-100, -2.6, 70).scale(3, 1.1, 7), A(.8, .8, .8, .2)),
                  g(v(), f(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), A(.8, .8, .8, .2)),
                  g(v(6), f(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), A(.6, .6, .6, .3)),
                  g(v(), f(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), A(.8, .8, .8, .2)),
                  g(v(), f(-100, .42, 92).scale(3, 1.1, 4.1), A(.8, .8, .8, .2)),
                ),
                g(v(8), f(-100, -1, 55).scale(7, .9, 7), A(.3, .3, .3, .4)),
                g(v(8), f(-100, -2, 55).scale(4, .3, 4), A(.4, .4, .4, .5)),
                g(v(8), f(-100, -3, 55).scale(.6, 1, .6), A(.4, .4, .4, .5)),
              )),
              F(f(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              F(f(-89, .2, 80), [0, 0, 6]),
              I(S(
                g(v(), f(-100, 1, 63).scale(7.5, 4), A(.5, .5, .5, .4)),
                g(v(), f(-100, 0, 70).scale(2, 2, 10), A(.5, .5, .5, .4)),
                g(v(20, 1), f(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), A(.5, .5, .5, .4)),
              )),
              D(e => {
                e.h = e => e.translateSelf(-99.7, -1.9, 63.5).scale(1, U(1.1 - R[6].g), 1), I(s);
              }),
              u1.map(({ x: t, z: a }) => {
                I(v(6), f(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), A(.6, .15, .15, .8)),
                  [4, -.4].map(e => I(v(6), f(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), A(.4, .2, .2, .8)));
              }),
              b(7, e => {
                I(
                  v((23 * e + 1) % 5 + 5, 0, .55),
                  f(5 * G(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3),
                  A(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
                );
              }),
              I(v(), f(-87, -9.5, 24).scale(7, 1, 3), A(.4, .5, .6, .4)),
              I(v(4), f(-86, -9.2, 27).scale(5, 1, 5), A(.5, .6, .7, .3)),
              I(v(12, 1), f(-86, -9, 31).scale(1.5, 1, 1.5), A(.3, .3, .4, .1)),
              j(f(-86, -7.5, 31)),
              D(e => {
                e.h = e => e.translateSelf(0, 3.5 * (1 - X(R[6].g, R[7].g)) + i(R[7].i, R[6].i) * G(Q) * 5),
                  [0, 12, 24].map(e => I(v(), f(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), A(.2, .5, .6, .2)));
              }),
              D(e => {
                e.h = e => e.translateSelf(0, i(R[7].i, R[6].i) * G(Q + 3) * 6, 6 * G(.6 * Q + 1) * i(R[7].i, R[6].i)),
                  [6, 18].map(e => I(v(), f(e - 76.9, e / -13 - 10, 24).scale(2.8, 1.5, 3), A(.1, .4, .5, .2)));
              }),
              I(
                S(
                  d(
                    g(v(5), f(0, 0, -7).scale(2, 1.2, 2), A(.2, .4, .7, .3)),
                    g(v(5), u(9, 1.2, 9), A(0, .2, .3, .5)),
                    g(v(), u(11, 1, 13), A(.3, .4, .6, .3)),
                  ),
                  g(v(5), u(5.4, 5, 5.4), A(0, .2, .3, .5)),
                ),
                f(-38.9, -11.3, 17),
              ),
              j(f(-38.9, -9.6, 10)),
              D(e => {
                e.h = e => e.translateSelf(0, -7.3 * R[7].i),
                  I(
                    S(
                      d(
                        g(v(5), f(0, 2).scale(5, 7, 5).skewY(8), A(.2, .4, .5, .5)),
                        g(v(5), f(0, 6).scale(1.1, 7, 1.1).skewY(-8), A(.25, .35, .5, .5)),
                        g(v(5), f(0, 9).scale(.6, 7, .6).skewY(8), A(.35, .3, .5, .5)),
                      ),
                      g(v(5), u(4, 8, 4), A(.2, .4, .5, .5)),
                      g(v(5), f(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), A(.2, .4, .5, .5)),
                    ),
                    f(-38.9, -11.3, 17),
                  ),
                  F(f(-39.1, -.6, 17).rotate(11), ...d1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2]));
              }),
              u1.map(({ x: t, z: a }) => {
                I(v(14, 1), f(9 * t - 38.9, -7.3, 11 * a + 17).scale(1, 4), A(.25, .25, .25, 1)),
                  [1.5, 8].map(e =>
                    I(v(17, 1), f(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), A(.6, .6, .6, .3))
                  );
              }),
              I(
                S(
                  d(
                    g(v(6), f(0, 0, -36).scale(15, 1.2, 15), A(.7, .7, .7, .3)),
                    g(v(), f(0, 0, -18).scale(4, 1.2, 6), A(.45, .4, .6, .3)),
                  ),
                  ...b(6, t =>
                    b(6, e =>
                      g(
                        v(6),
                        f(4.6 * e - 12 + 2 * (1 & t), 0, 4.6 * t - 50 + 2 * G(4 * e)).scale(2, 5, 2),
                        A(.7, .7, .7, .3),
                      ))).flat(),
                ),
                f(-38.9, -11.3, 17),
              ),
              F(f(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              I(v(5), f(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), A(.8, .1, .25, .4)),
              j(f(-84, -.5, 85).rotate(0, 45)),
              D(e => {
                e.h = e => t(e, -123, 1.4, 55 + -65 * z), I(l), j(f(0, -3, -4).rotate(0, 180));
              }),
              S(
                g(v(), f(0, -.5, 1).scale(1.15, 1.2, 6.5), A(.25, .25, .35, .3)),
                g(v(3), f(0, 0, -5.5).scale(3, 2), A(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(e => g(v(), f(e, -.5, 1).scale(.14, .3, 6.5), A(.7, .2, 0, .3))),
              ));
          D(e => {
            e.h = e => e.translateSelf(0, -2, i(R[10].g, R[11].g) * N(G(1.1 * Q)) * -8.5 + 10),
              b(2, e => I(c, f(9 * e - 110 + (1 & e), 1.7, -12)));
          }),
            D(e => {
              e.h = e => e.translateSelf(0, -2, i(R[10].g, R[11].g) * N(G(2.1 * Q)) * -8.5 + 10),
                b(2, e => I(c, f(9 * (e + 2) - 110 + (1 & e), 1.7, -12)));
            }),
            D(e => {
              e.h = e =>
                e.translateSelf(
                  0,
                  -2,
                  -8.5 * X((1 - R[10].g) * (1 - i(R[10].g, R[11].g)), i(R[10].g, R[11].g) * N(G(1.5 * Q))) + 10,
                ), b(3, e => I(c, f(9 * e - 106, 1.7, -12)));
            }),
            I(
              S(
                d(g(v(), f(26.5, -1.6, 10).scale(20, 2.08, 3)), g(v(), f(26.5, -.6, 10).scale(19, 2, .5))),
                ...b(4, e => g(v(), f(13 + 9 * e + (1 & e), -.8, 9).scale(1.35, 1.35, 9))),
                ...b(3, e => g(v(), f(17 + 9 * e, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              f(-123, 0, -12),
              A(.5, .5, .6, .2),
            ),
            j(f(-116, -1.4, -18).rotate(0, 180)),
            I(v(), f(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), A(.8, .8, .8, .2)),
            I(v(6), f(-116, -2.6, -16.5).scale(3.2, .8, 3), A(.6, .5, .7, .2)),
            I(v(), f(-115.5, -17, -12).scale(.5, 15, 2.2), A(.6, .6, .6, .3)),
            I(v(8), f(-114, -17, -2).scale(2, 15, 2), A(.6, .6, .6, .3)),
            I(v(8), f(-79, -17, -2).scale(2, 15, 2), A(1, 1, 1, .3)),
            I(v(), f(-77, -17, -50.5).scale(2.2, 15, .5), A(.6, .6, .6, .3)),
            b(3, e => {
              I(a(16), f(12 * e - 109, -9, -12), A(.6, .6, .6, .3)),
                I(a(16), f(-77, -9, -12 * e - 20).rotate(0, 90), A(.6, .6, .6, .3));
            }),
            I(S(
              g(v(12), f(-77, -14.5, -12).scale(4, 17.5, 4), A(.7, .7, .7, .2)),
              g(v(), f(-79, .1, -12).scale(3.5, 2, 1.3), A(.4, .5, .6, .2)),
              g(v(), f(-77, .1, -14).scale(1.5, 2, 2), A(.4, .5, .6, .2)),
              g(v(12), f(-77, 3.1, -12).scale(3, 5, 3), A(.4, .5, .6, .2)),
            )),
            I(v(), f(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), A(.6, .6, .6, .3)),
            I(v(9), f(-98, -18.4, -40).scale(2.5, 13.5, 2.5), A(.5, .5, .5, .3)),
            I(S(
              g(v(), f(-93, -5.8, -40).scale(9, 1, 5), A(.8, .8, .8, .1)),
              g(v(9), f(-98, -5.8, -40).scale(3, 8, 3), A(.7, .7, .7, .2)),
            )),
            j(f(-98, -4.4, -40).rotate(0, 90)),
            F(f(-115, .2, -12), [0, 0, 3.5]),
            F(f(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            I(S(
              d(
                g(v(6, 0, 0, .6), f(-100, .7, 105.5).scale(8, 1, 11), A(.7, .7, .7, .2)),
                g(v(), f(-101.5, .7, 93.5).scale(10.5, 1, 2), A(.7, .7, .7, .2)),
              ),
              g(v(5), f(-100, .7, 113).scale(4, 3, 4), A(.7, .7, .7, .2)),
            )),
            b(4, a =>
              D(e => {
                e.h = e => {
                  let t = i(R[8].i, R[12].i);
                  e.translateSelf(
                    (2 < a ? 2 * (1 - t) + t : 0) - 100,
                    t * G(1.3 * Q + 1.7 * a) * (3 + a / 3) + .7,
                    115 + (1 & a ? -1 : 1) * (1 - R[8].i) * (1 - R[12].i) * -7
                      + X(t, .05) * V(1.3 * Q + 7 * a) * (4 - 2 * (1 - a / 3)),
                  );
                },
                  I(
                    v(6),
                    f(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                    A(.5 - a / 8, a / 12 + .5, .7, .3),
                  );
              })),
            D(e => {
              e.h = e => {
                let t = i(R[8].i, R[12].i);
                e.translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - R[8].g) + t * G(.8 * Q) * -1 - 1.8, 93.5).rotateSelf(
                  V(1.3 * Q) * (3 * t + 3),
                  0,
                );
              },
                I(S(g(v(10), u(6, 2, 6), A(.1, .6, .5, .3)), g(v(10), u(3.3, 6, 3.3), A(.1, .6, .5, .5)))),
                I(v(15, 1), f(-7.5).rotate(0, 90).scale(3, 2.3, 3), A(.4, .4, .4, .3)),
                I(v(10), f(-7.5).rotate(0, 90).scale(2, 2.5, 2), A(.3, .8, .7, .3)),
                I(v(5), f(-7.5).rotate(0, 90).scale(1, 3), A(.5, .5, .5, .5)),
                j(f(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(e =>
                  I(n, h(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), A(1, 1, .8, .2))
                ),
                F(f(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            D(e => {
              e.h = e => e.translateSelf(-100, .6, 96.5).scaleSelf(.88, 1.2 - R[12].g), I(s);
            }),
            [-1, 1].map(t => {
              [7.2, 1.5].map(e => I(v(15, 1), f(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), A(.5, .24, .2, .4))),
                I(n, f(-5 * t - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90), A(1, 1, .8)),
                I(v(12, 1), f(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), A(.6, .24, .2, .5)),
                I(
                  S(
                    g(v(), f(-4 * t, 3.5, -.5).scale(4, 4, .7), A(.5, .5, .5, .4)),
                    g(v(), u(3, 3, 10), A(.6, .24, .2, .5)),
                    g(v(28, 1), f(0, 3, -5).scale(3, 4, 10).rotate(90, 0), A(.6, .24, .2, .5)),
                    g(v(5), f(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), A(.6, .24, .2, .5)),
                    g(v(5), f(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), A(.6, .24, .2, .5)),
                  ),
                  f(t - 100, .7, 97),
                );
            }),
            I(S(
              g(v(), f(-82.07, .8, 106).scale(11, .9, 2.2), A(.7, .7, .7, .1)),
              g(v(45, 1), f(-81, .7, 106).scale3d(7.7), A(.7, .7, .7, .1)),
            )),
            D(e => {
              e.h = e => e.translateSelf(-81, .6, 106).rotateSelf(0, 40 + s1),
                I(S(
                  g(v(45, 1), u(7.5, 1, 7.5), A(.45, .45, .45, .2)),
                  g(v(), f(0, 0, -5.5).scale(1.5, 3, 2.7), A(.45, .45, .45, .2)),
                )),
                I(v(8), f(0, 2).scale(3, 1.5, 3).rotate(0, 22), A(.7, .7, .7, .1)),
                I(v(5), f(0, 2).scale(1, 2), A(.3, .3, .3, .2)),
                F(f(0, 3), ...d1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2]));
            }),
            D(e => {
              e.h = e => e.translateSelf(-65.8, .8, 106).rotateSelf(0, x),
                [-1, 1].map(e =>
                  I(n, h(0, 90).translate(-5 * e, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), A(1, 1, .8))
                ),
                I(S(g(v(28, 1), f(0, 2).scale(7.5, 1, 7.5), A(.35, 0, 0, .3)), g(v(), u(9, 5, 2), A(.3, 0, 0, .3)))),
                I(g(v(28, 1), u(7.5, 1, 7.5), A(.45, .45, .45, .2))),
                I(g(v(5), f(0, 1).scale(1, .2), A(.3, .3, .3, .2)));
            }),
            D(e => {
              e.h = e => e.translateSelf(-50.7, .8, 106).rotateSelf(0, 180 - x),
                I(S(
                  g(v(28, 1), f(0, 2).scale(7.5, 1, 7.5), A(.35, 0, 0, .3)),
                  g(v(), f(7).scale(9, 5, 2), A(.3, 0, 0, .3)),
                  g(v(), f(0, 0, 7).scale(2, 5, 9), A(.3, 0, 0, .3)),
                )),
                I(g(v(28, 1), u(7.5, 1, 7.5), A(.45, .45, .45, .2))),
                I(g(v(5), f(0, 1).scale(1, .2), A(.3, .3, .3, .2)));
            }),
            D(e => {
              e.h = e => e.translateSelf(-50.7, .8, 91).rotateSelf(0, 270 + x),
                I(S(
                  g(v(28, 1), f(0, 2).scale(7.5, 1, 7.5), A(.35, 0, 0, .3)),
                  g(v(), f(7).scale(9, 5, 2), A(.3, 0, 0, .3)),
                  g(v(), f(0, 0, -7).scale(2, 5, 9), A(.3, 0, 0, .3)),
                )),
                I(g(v(28, 1), u(7.5, 1, 7.5), A(.45, .45, .45, .2))),
                I(g(v(5), f(0, 1).scale(1, .2), A(.3, .3, .3, .2)));
            }),
            I(v(), f(-58, 1, 106).scale(2, .65, 2), A(.7, .7, .7, .2)),
            I(v(), f(-50.7, 1, 99).scale(2, .65, 1), A(.7, .7, .7, .2)),
            I(v(), f(-42, .4, 91).scale(5, 1, 2.5), A(.7, .7, .7, .3)),
            I(v(), f(-34.2, .4, 91).scale(3, 1, 3), A(.7, .7, .7, .3)),
            j(f(-34, 2.7, 96).rotate(-12, 0)),
            I(v(5), f(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), A(.2, .5, .5, .6)),
            [A(.1, .55, .45, .2), A(.2, .5, .5, .3), A(.3, .45, .55, .4)].map((t, a) =>
              D(e => {
                e.h = e => {
                  e.translateSelf(
                    0,
                    (1 - R[13].i) * (1 - R[14].i) * (a ? 0 : 3) + i(R[13].i, R[14].i) * G(1.5 * Q + 1.5 * a) * 4,
                  );
                },
                  I(v(), f(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), t),
                  2 === a && I(v(), f(-29.1, .4, 91).scale(2.1, 1, 3), A(.7, .7, .7, .3)),
                  1 === a && I(v(), f(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), A(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(e => I(n, f(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), A(1, 1, .8))),
            b(
              3,
              e =>
                I(
                  a(24.7 - .7 * (1 & e)),
                  f(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                  1 & e ? A(.5, .5, .5, .3) : A(.35, .35, .35, .5),
                ),
            ),
            I(S(
              g(v(6, 0, 0, .3), f(0, -.92, 95).scale(14, 2, 14), A(.8, .8, .8, .2)),
              g(v(5), f(0, 0, 95).scale3d(6), A(.3, .3, .3, .5)),
            )),
            j(f(0, 1.7, 82).rotate(0, 180)),
            I(v(5), f(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), A(.5, .3, .3, .4)),
            I(v(6), f(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), A(.5, .6, .7, .3)),
            I(v(), f(0, 16, 129).scale(1.5, 1, 2), A(.5, .6, .7, .3)),
            I(v(7), f(0, 16.2, 133).scale(5, 1, 5), A(.4, .5, .6, .4)),
            I(S(
              d(
                g(v(), f(0, 16, 110.5).scale(12, 1, 3), A(.5, .3, .3, .4)),
                g(v(), f(0, 16, 111).scale(3, 1, 3.8), A(.5, .3, .3, .4)),
              ),
              g(v(5), f(0, 16, 103.5).scale(5.5, 5, 5.5), A(.5, .3, .3, .4)),
            )),
            D(e => {
              e.h = e => e.translateSelf(-2 * G(Q)).rotate(25 * G(Q)),
                I(v(3), f(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), A(.5, .3, .3, .4)),
                [22, 30].map(e => {
                  I(v(6), f(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), A(.7, .7, .7, .4)),
                    I(v(), f(0, 6.2, e + 95).scale(.5, 11, .5), A(.5, .3, .3, .4));
                });
            }),
            D(e => {
              e.h = e => {
                let t = i(i((R[14].g + R[14].i) / 2, R[13].i), (R[15].g + R[15].i) / 2);
                e.translateSelf(0, 16 * t, 8.5 * U(2 * t - 1) + 95);
              },
                I(v(5), u(5, 1.1, 5), A(.5, .3, .3, .4)),
                I(v(5), u(5.5, .9, 5.5), A(.25, .25, .25, .4)),
                j(f(0, 1.5, -1).rotate(0, 180));
            }),
            F(f(0, 3, 95), ...d1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
            F(f(0, 19, 134), [0, 0, 3.5]);
        }),
        D(() => {
          I(l(20), f(0, 1).scale(.5, .5, .5), A(1, .3, .4)),
            I(l(30), u(.7, .8, .55), A(1, .3, .4)),
            I(v(), f(0, .9, .45).scale(.15, .02, .06), A(.3, .3, .3)),
            [-1, 1].map(e => {
              I(n, h(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), A(1, 1, .8)),
                I(
                  g(S(v(15, 1), g(v(), f(0, 0, 1).scale(2, 2, .5))), h(-90, 0).scale(.1, .05, .1), A(.3, .3, .3)),
                  f(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
                ),
                D(() => {
                  I(v(20, 1), f(.3 * e, -.8).scale(.2, .7, .24), A(1, .3, .4));
                });
            });
        }),
        D(() => {
          I(v(6, 1), u(.13, 1.4, .13), A(.3, .3, .5, .1)),
            I(v(10), f(0, 1).scale(.21, .3, .21), A(1, .5, .2)),
            I(v(3), f(0, -1).rotate(90, 90).scale(.3, .4, .3), A(.2, .2, .2, .1));
        }, 0),
        D(() => {
          I(v(6).slice(0, -1), u(.77, 1, .77), A(1, .3, .5));
        }, 0),
        D(() => {
          I(
            l(30, 24, (e, t, a) => {
              let l = t / 24, r = e * K * 2 / 30, s = G(l ** .6 * K / 2);
              return e = l * l * G(e * K * 14 / 30) / 4,
                23 < t
                  ? { x: a.D = 0, y: -.5, z: 0 }
                  : { x: V(r) * s, y: V(l * K) - l - e, z: G(r) * s + G(e * K * 2) / 4 };
            }),
            u(.7, .7, .7),
            A(1, 1, 1),
          ), [-1, 1].map(e => I(l(12), f(.16 * e, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
