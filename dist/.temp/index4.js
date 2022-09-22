let j = 0,
  C = 0,
  D = 0,
  H = 0,
  k = 0,
  F = 0,
  T = 0,
  a = 0,
  $ = 0,
  x = 0,
  y = 0,
  tt = 0,
  Q = 0,
  B = 0,
  z = 0,
  O = 0,
  R = 0,
  q = .066,
  w = 1,
  at = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  L = [],
  W = [],
  et = [],
  X = [],
  N = { x: 0, y: 0, z: 0 },
  E = Math.PI / 180,
  U = new DOMMatrix(),
  l = new Float32Array(16),
  r = new Float32Array(624),
  g = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  K = (t, a) => a < t ? t : a,
  G = t => t < 0 ? -t : t,
  V = t => t < 0 ? 0 : 1 < t ? 1 : t,
  lt = (t, a, e) => t + (a - t) * (e < 0 ? 0 : 1 < e ? 1 : e),
  f = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  rt = t => Math.atan2(Math.sin(t *= E), Math.cos(t)) / E,
  st = (t, a, e) =>
    ((t *= E) + (2 * (a = (a * E - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / E,
  nt = (t, a, e, l) => lt(t + (a - t < 0 ? -1 : 1) * K(0, G(a - t) ** .9 - e) * l * 2, a, l / 7),
  ot = ({ x: t, y: a, z: e }) => Math.hypot(t - N.x, a - N.y, e - N.z),
  i = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  ct = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  m = (
    t,
    a = l,
    e = 0,
  ) => (e *= 16,
    a[e++] = t.m11,
    a[e++] = t.m12,
    a[e++] = t.m13,
    a[e++] = t.m14,
    a[e++] = t.m21,
    a[e++] = t.m22,
    a[e++] = t.m23,
    a[e++] = t.m24,
    a[e++] = t.m31,
    a[e++] = t.m32,
    a[e++] = t.m33,
    a[e++] = t.m34,
    a[e++] = t.m41,
    a[e++] = t.m42,
    a[e++] = t.m43,
    a[e] = t.m44,
    a),
  it = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  h = (t, a, e) => (t.D = e, t.A = a, t),
  ht = (t, l, a = t.A) =>
    h(
      t.map(t => {
        let a, e;
        return { x: t, y: a, z: e } = t,
          { x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }),
          { x: t, y: a, z: e };
      }),
      a,
      t.D,
    ),
  u = (t, a, e) => t.map(t => ht(t, a, e)),
  ft = (e, l = 0) =>
    g(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  mt = (l, r, s) =>
    l.map((t, a, { length: e }) => h([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, s)),
  M = (
    t,
    a,
    e = 0,
    l,
  ) => (t = t ? ft(t, l) : at,
    l = ht(t, U.translate(0, 1).scale3d(0 < e ? e : 1)),
    t = ht(t, U.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...mt(t, l, a), l, t]),
  ut = (
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
        let t = h([], 0, 1);
        n.push(t),
          t.push(s(e, a, t)),
          a && t.push(s((e + 1) % l, a, t)),
          r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
          t.push(s(e, a + 1 % r, t));
      }
    }
    return n;
  },
  c = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((s = i(l, c[t]) - l.w) < -8e-5 ? o = r : 8e-5 < s && (n = r), o && n) {
        n = [], o = [], c = r.C, t = r.B;
        let a = c.at(-1), e = i(l, a) - l.w;
        for (let t of c) {
          s = i(l, t) - l.w,
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
          o: 2 < n.length && { C: h(n, c.A, c.D), B: t, u: r },
          m: 2 < o.length && { C: h(o, c.A, c.D), B: t, u: r },
        };
      }
    }
    return { o: n, m: o };
  },
  n = (t, a, e = ct(a.C)) => {
    let l, r, s;
    return t
      ? ({ o: l, m: r } = c(t, a), l || r || t.s.push(a), l && (t.o = n(t.o, l, e)), r && (t.m = n(t.m, r, e)))
      : ({ x: l, y: r, z: e, w: s } = e, t = { x: l, y: r, z: e, w: s, s: [a], o: 0, m: 0 }),
      t;
  },
  e = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = c(t, a);
        e || l || (0 < s * i(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(a, t);
    return n;
  },
  s = (t, a) => t && (a(t), s(t.o, a), s(t.m, a)),
  o = t => t.length ? t.reduce((t, a) => n(t, { C: a, B: 0, u: 0 }), 0) : t,
  xt = t => (s(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.s) t.B = !t.B;
  }),
    t),
  v = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = o(l), a) {
        a = o(a), s(l, t => t.s = e(a, t, 1)), s(a, t => r.push([t, e(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) n(l, t, a);
      }
      return l;
    }),
  p = (t, ...a) => xt(v(xt(o(t)), ...a)),
  d = t => {
    let e = new Map(),
      l = new Map(),
      r = t => {
        let a;
        return t.u && ((a = e.get(t.u)) ? (l.delete(a), t = r(t.u)) : e.set(t.u, t)), t;
      };
    return s(t, a => {
      for (let t of a.s) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return h(a ? e.reverse() : e, t.A, t.D);
      });
  },
  J = (t, a, e) => t + (a - t) * V(1 - Math.exp(-e * q)),
  yt = () => {
    let t = f(W[12].g, W[13].g);
    T = lt(J(T, 0, 1), rt(T + 60 * q), W[5].g - W[6].i),
      k = lt(J(k, 0, 5), rt(k + 56 * q), t),
      F = lt(J(F, 0, 4), rt(F + 48 * q), t),
      x = J(x, W[9].i, .2 + .3 * G(2 * W[9].i - 1)),
      $ = J($, a ? $ + (-9 - $) * V(1.5 * q) : V(D / 3), 1),
      w && D > w && (w = 0, h4.innerHTML = ""),
      W[0].l && .8 < W[0].g && (j < 13
        ? (1 / 0 > w && (w = D + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), W[0].l = 0)
        : a
          || (1 / 0 > w && (w = D + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            a = 1));
    for (let t of L) t.h && (t.j = t.h());
    for (let t of W) t.h();
    for (let t of et) t.h();
  },
  gt = () => {
    h3.innerHTML = [
      "0",
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
    ][j = et.reduce((t, { l: a }) => t + a, 0)];
  },
  Mt = () => {
    localStorage.DanteSP22 = JSON.stringify([W.map(({ l: t }) => t), et.map(({ l: t }) => t), H, D, x]);
  },
  b = (t, a = 1) => {
    let e = At;
    return L.push(At = a = { j: U, F: L.length, H: a, s: [] }), t(a), At = e, a;
  },
  I = (t, a = U, e) => At.s.push(...u(t, a, e)),
  A = r => {
    let s = At,
      n = W.length,
      o = {
        l: 0,
        g: 0,
        i: 0,
        u: s,
        h() {
          let t = o.l, a = o.g, e = o.i, l = s.j.multiply(r);
          o.I = l,
            ot(l.transformPoint()) < 2.9 && X[5] && (a < .3 || .7 < a)
            && (o.l = t ? 0 : 1, n && 1 / 0 > w && (w = D + 1, h4.innerHTML = "* click *"), H = n, Mt()),
            o.g = J(a, t, 4),
            o.i = J(e, t, 1),
            o.j = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    W.push(o),
      I(M(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      I(M(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), S(.4, .5, .5)),
      I(M(), r.translate(0, -.4).scale(.5, .1, .5), S(.5, .5, .4));
  },
  P = (f, ...t) => {
    let m = -1,
      u = 0,
      g = 0,
      M = 0,
      v = 0,
      p = 0,
      d = 1,
      b = 3,
      I = {
        l: 0,
        h() {
          if (!I.l) {
            let r = 1, s = 1 / 0, t, a, e, l, n, o, c;
            for (let l of A) {
              let { x: t, z: a, w: e } = l;
              a = (t = Math.hypot(S - t, z - a)) - e, c ||= t < e, 0 < a && s > a && (s = a, P = l);
              var i = t / e;
              r = i > r ? r : i;
            }
            c
            || ({ x: t, z: a, w: e } = P,
              l = S - t,
              n = z - a,
              o = Math.hypot(l, n),
              h = Math.atan2(-n, l),
              d && (g = (Math.random() - .5) * Math.PI / 2, b = K(1, b / (1 + Math.random()))),
              m = -Math.cos(h += g),
              u = Math.sin(h),
              .1 < o && (o = (o < e ? o : e) / (o || 1), S = l * o + t, z = n * o + a)),
              d = c,
              b = J(b, 3 + 6 * (1 - r), 3 + r),
              Y = J(Y, S = J(S, S + m, b), b),
              C = J(C, z = J(z, z + u, b), b),
              M = st(M, Math.atan2(Y - v, C - p) / E - 180, 3 * q),
              v = Y,
              p = C;
            var h = (I.j = x.j.multiply(f.translate(Y, 0, C).rotateSelf(0, M, 7 * Math.sin(1.7 * D)))).transformPoint();
            ot(h) < 1.5
              && (I.l = 1,
                i = [
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
                ][j] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > w && (w = D + (j && j < 12 ? 5 : 7), h4.innerHTML = i),
                gt(),
                Mt());
          }
          I.l
            && (I.j = L[2].j.translate(
              y % 4 * 1.2 - 1.7 + Math.sin(D + y) / 7,
              -2,
              1.7 * (y / 4 | 0) - 5.5 + G(y % 4 - 2) + Math.cos(D / 1.5 + y) / 6,
            ));
        },
      },
      x = At,
      y = et.length,
      A = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      P = A[0],
      { x: S, z } = P,
      Y = S,
      C = z;
    et.push(I);
  },
  vt = (t, a, e, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (e - a),
      x = new DOMMatrix(it(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return a = g(
      8,
      t => (t = x.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (u * t.x | 0) / u / t.w,
        s -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      e = U.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      ht(a, e).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          m = m > e ? m : e;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      U.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(e);
  },
  zt = (t, a = 35633) => (a = Z.c6x(a), Z.s3c(a, t), Z.c6a(a), a),
  pt = (t, a) => {
    let e = {}, l = Z.c1h();
    return Z.abz(l, t), Z.abz(l, zt(a, 35632)), Z.l8l(l), t => t ? e[t] || (e[t] = Z.gan(l, t)) : Z.u7y(l);
  },
  dt = (t, e, a = 42) => {
    if (Y) {
      for (var l of (a = U.rotate(0, 40 * Math.sin(C) - 70), [37, 38, 39])) m(a, r, l - 1);
      Z.uae(t, !1, r), Z.d97(4, L[39].G - L[37].v, 5123, 2 * L[37].v);
    } else {
      for (l = 0; L.length > l; ++l) {
        let { H: t, F: a, j: e } = L[l];
        t && m(e, r, a - 1);
      }
      for (Z.uae(t, !1, r), Z.d97(4, (e ? L[39].G : L[37].v) - 3, 5123, 6), e = 0; e < 13; ++e) m(et[e].j, r, e);
      for (e = 0; W.length > e; ++e) {
        let { j: t, g: a } = W[e];
        m(t, r, e + 13), r[16 * (e + 13) + 15] = 1 - a;
      }
      Z.uae(t, !1, r),
        Z.das(4, L[a].G - L[a].v, 5123, 2 * L[a].v, 13),
        Z.das(4, L[40].G - L[40].v, 5123, 2 * L[40].v, W.length);
    }
  },
  bt = t => {
    h4.innerHTML += ".", setTimeout(t);
  },
  wt = t => Math.sin(t * Math.PI * 2),
  S = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  Y,
  It,
  At,
  _,
  Pt,
  St = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Yt = new AudioContext(),
  Ct = Yt.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in Z) Z[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = Z[t];
bt(() => {
  let t = 0,
    e = () => {
      if (2 == ++t) {
        let e = t => {
            requestAnimationFrame(e),
              a = (t - (It || t)) / 1e3,
              Y ? (q = 0, X[5] = 0) : q = .066 < a ? .066 : a,
              D += q,
              C += a,
              It = t,
              0 < q && (Z.b6o(36160, l), Z.f1s(), yt(), Pt(), X[5] = 0);
            var a = Y
              ? U.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + V(hC.clientWidth / 1e3))
              : U.rotate(-O, -R, -0).invertSelf().translateSelf(-Q, -B, -z);
            0 < q
            && (o(),
              Z.b6o(36160, l),
              Z.v5y(0, 0, 128, 128),
              Z.c4s(16640),
              Z.cbf(!0, !1, !0, !1),
              Z.uae(o("b"), !1, m(U.rotate(0, 180).invertSelf().translateSelf(-N.x, -N.y, .3 - N.z))),
              dt(o("c"), 0, 41),
              Z.c4s(256),
              Z.cbf(!1, !0, !0, !1),
              Z.uae(o("b"), !1, m(U.translate(-N.x, -N.y, -N.z - .3))),
              dt(o("c"), 0, 41),
              Z.f1s()),
              s(),
              Z.b6o(36160, r),
              Z.v5y(0, 0, 2048, 2048),
              i[0](vt(a, .3, 55, 10)),
              i[1](vt(a, 55, 177, 11)),
              c(),
              Z.b6o(36160, null),
              Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight),
              Z.cbf(!0, !0, !0, !0),
              Z.c4s(16640),
              i[0](),
              i[1](),
              Z.uae(c("a"), !1, it(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              Z.uae(c("b"), !1, m(a)),
              Z.ubu(c("k"), Q, B, z),
              dt(c("c"), !_),
              n(),
              Z.ubu(n("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, C),
              Y ? Z.ubu(n("k"), 0, 0, 0) : Z.ubu(n("k"), Q, B, z),
              Z.uae(n("b"), !1, m(a.inverse())),
              Z.d97(4, 3, 5123, 0),
              Z.f1s();
          },
          r = Z.c5w(),
          l = Z.c5w(),
          t = Z.c3z(),
          w = Z.c25(),
          a = zt(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          s = pt(
            zt(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          n = pt(
            zt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          o = pt(
            a,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          c = pt(
            a,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          i = (o(),
            Z.uae(o("a"), !1, it(1.4, .59, 1e-4, 1)),
            n(),
            Z.ubh(n("q"), 3),
            c(),
            Z.ubh(c("q"), 3),
            g(2, t => {
              let a = new Float32Array(16), e = Z.c25(), l = c(t ? "j" : "i");
              return Z.ubh(c(t ? "h" : "g"), t),
                Z.b6o(36160, r),
                Z.d45([0]),
                Z.r9l(0),
                Z.a4v(33984 + t),
                Z.b9j(3553, e),
                Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                Z.t2z(3553, 10241, 9729),
                Z.t2z(3553, 10240, 9729),
                Z.t2z(3553, 34893, 515),
                Z.t2z(3553, 34892, 34894),
                Z.t2z(3553, 10243, 33071),
                Z.t2z(3553, 10242, 33071),
                t => {
                  t
                    ? (m(t, a), Z.uae(s("b"), !1, a), Z.fas(36160, 36096, 3553, e, 0), Z.c4s(256), dt(s("c"), !_))
                    : Z.uae(l, !1, a);
                };
            }));
        Z.e8z(2929),
          Z.e8z(2884),
          Z.c70(1),
          Z.c7a(1029),
          Z.d4n(515),
          Z.c5t(0, 0, 0, 1),
          Z.b6o(36160, l),
          Z.bb1(36161, t),
          Z.r4v(36161, 33189, 128, 128),
          Z.f8w(36160, 36096, 36161, t),
          Z.a4v(33987),
          Z.b9j(3553, w),
          Z.fas(36160, 36064, 3553, w, 0),
          Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          Z.a4v(33987),
          Z.b9j(3553, Z.c25()),
          Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, h),
          Z.gbn(3553),
          Z.t2z(3553, 10241, 9987),
          Z.t2z(3553, 10240, 9729);
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          W.map((t, a) => t.g = t.i = t.l = a ? 0 | e[a] : 0), et.map((t, a) => t.l = 0 | l[a]), H = t, D = a, x = r;
        } catch {}
        $ = H < 0 ? 0 : 1 < H ? 1 : H,
          yt(),
          (() => {
            let i = 0,
              h = 0,
              f = 0,
              m = 0,
              u = 0,
              g = 1,
              M = !1,
              v = { x: 0, y: 0, z: 0 },
              p = new Int32Array(256),
              d = new Uint8Array(65536),
              b = t => {
                var { u: a, I: e } = W[H], { x: e, y: l, z: r } = e.transformPoint({ x: 0, y: 8, z: -3 });
                N.x = v.x = e,
                  N.y = v.y = j = l,
                  N.z = v.z = r,
                  t && (Q = T = e, B = (x = l) + 13, z = (w = r) + -18),
                  i = h = a.F || 1,
                  A =
                    C =
                    Y =
                    P =
                    S =
                      0,
                  g = 1;
              },
              I,
              A,
              P,
              S,
              Y,
              C,
              j,
              k,
              F,
              T,
              x,
              w;
            Pt = () => {
              let t = y + (X[0] ? 1 : 0) + (X[2] ? -1 : 0), e = tt + (X[1] ? 1 : 0) + (X[3] ? -1 : 0);
              if (r = navigator.getGamepads()[0]) {
                let a = r.buttons;
                var l = r.axes;
                (r = (s = t => a[t]?.pressed || 0 < a[t]?.value)(1) || s(3) || s(2) || s(0)) !== M && (M = r)
                && (X[5] = 1),
                  t += (.2 < G(-l[0]) ? -l[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                  e += (.2 < G(-l[1]) ? -l[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                  _ && (.3 < G(l[2]) && (R += 80 * l[2] * q), .3 < G(l[3]) && (O += 80 * l[3] * q));
              }
              (e < 0 ? -e : e) < .05 && (e = 0), (t < 0 ? -t : t) < .05 && (t = 0);
              var r = Math.atan2(e, t),
                s = V(Math.hypot(e, t)),
                a =
                  (t = s * Math.cos(r),
                    e = s * Math.sin(r),
                    k = 0,
                    F = 0,
                    A = 0,
                    Z.r9r(0, 0, 128, 128, 6408, 5121, d),
                    Z.iay(36009, [36064, 36096]),
                    Z.iay(36008, [36064, 36096]),
                    (() => {
                      for (let t = 32; t < 128; t += 2) {
                        let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                        for (let s = 1 & t; s < 128; s += 2) {
                          let t = h + 4 * s,
                            a = h + 4 * (127 - s),
                            e = d[t] / 255,
                            l = d[1 + a] / 255,
                            r = 1 - G(s / 63.5 - 1);
                          10 < s && s < 118
                          && (n = K(n, K(e * r, e * d[a] / 255)), o = K(o, K(l * r, l * d[1 + t] / 255))),
                            (s < 54 || 74 < s) && .001 < (a = (1 - r) * (l < e ? e : l) / 3)
                            && (s < 64 && a > c ? c = a : 64 < s && a > i && (i = a));
                        }
                        G(i - c) > (k < 0 ? -k : k) && (k = i - c), G(o - n) > (F < 0 ? -F : F) && (F = o - n);
                      }
                    })(),
                    (() => {
                      let s = 0, n = 0, a = 0, e = 0;
                      p.fill(0);
                      for (let t = 0; t < 31; ++t) {
                        let l = 0, r = 512 * t;
                        for (let e = 0; e < 128; e++) {
                          let t = r + 4 * e, a = (d[t] + d[1 + t]) / 255;
                          t = d[2 + t],
                            14 < e && e < 114 && (l += a),
                            t && a && (a = p[t] + 1, p[t] = a, s > a || (s = a, n = t));
                        }
                        l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), A = 1);
                      }
                      n && (A = 1),
                        g ? n && (g = 0, h = n) : h = n || i,
                        i = n,
                        P = J(P, A ? 6.5 : 8, 4),
                        v.y += a / 41 - (A ? 1 : P) * e / 41 * P * q;
                    })(),
                    l = V(1 - 5 * K(k < 0 ? -k : k, F < 0 ? -F : F)),
                    h || (k += Y * l * q, F += C * l * q),
                    Y = J(Y, 0, A ? 8 : 4),
                    C = J(C, 0, A ? 8 : 4),
                    S = J(S, A ? (t || e ? A ? 7 : 4 : 0) * l : 0, A ? .1 < l ? 10 : t || e ? 5 : 7 : 1),
                    Math.sin(l = _ ? R * E : Math.PI) * S * q),
                n =
                  (k -= t * (l = Math.cos(l) * S * q) - e * a,
                    F -= t * a + e * l,
                    (l = (a = 1 === L[h].H && L[h].j || U).inverse()).m41 = 0,
                    l.m42 = 0,
                    l.m43 = 0,
                    { x: k, z: F } = l.transformPoint({ x: k, z: F, w: 0 }),
                    v.x += k,
                    v.z += F,
                    h !== I && (I = h, { x: l, y: n, z: o } = a.inverse().transformPoint(N), v.x = l, v.y = n, v.z = o),
                    l = N.x,
                    N.z),
                { x: o, y: a, z: c } = a.transformPoint(v);
              N.x = o,
                N.y = a,
                N.z = c,
                h && (Y = (o - l) / q, C = (c - n) / q),
                (t || e) && (f = 90 - r / E),
                m = st(m, f, 8 * q),
                u += (s - u) * V(10 * q),
                j = lt(J(j, a, 2), a, 8 * G(j - a)),
                T = nt(T, o, .5, q),
                x = nt(x, a, 2, q),
                w = nt(w, c, .5, q),
                _
                  ? (Q = J(Q, o, 666 * g + 18), B = J(B, j + 1.5, 666 * g + 18), z = J(z, c, 666 * g + 18))
                  : (Q = nt(Q, T, 1, 2 * q),
                    B = nt(B, x + 13 + 15 * g, 4, 2 * q),
                    1 < ((l = (z = nt(z, w + -18, 1, 2 * q)) - w) < 0 ? -l : l)
                    && (R = 270 + Math.atan2(l, n = Q - T) / E, O = 90 - Math.atan2(Math.hypot(l, n), B - x) / E)),
                O = K(O < 87 ? O : 87, -87),
                R = rt(R),
                1 === h && (W[9].l = N.x < -15 && N.z < 0 ? 1 : 0),
                (N.x < -25 || N.z < 109 ? -25 : -9) > N.y && b(),
                L[37].j = U.translate(N.x, j, N.z).rotateSelf(0, m),
                [38, 39].map((t, a) => {
                  L[t].j = L[37].j.translate(0, u * V(.45 * Math.sin(9.1 * D + Math.PI * (a - 1) - Math.PI / 2)))
                    .rotateSelf(u * Math.sin(9.1 * D + Math.PI * (a - 1)) * .25 / E, 0);
                });
            }, b(1);
          })(),
          requestAnimationFrame(e),
          (() => {
            let t = !0,
              a = () => {
                Y || !t ? Ct.disconnect() : Ct.connect(Yt.destination), b4.innerHTML = "Music: " + t;
              },
              z = (t = !1) => {
                if (Y !== t) {
                  Y = t;
                  try {
                    t ? document.exitPointerLock() : Ct.start();
                  } catch {}
                  _ = 0, document.body.className = t ? "l m" : "l", a(), gt();
                }
              },
              l,
              s,
              n,
              o,
              c,
              i,
              h,
              f,
              m,
              u,
              g,
              x;
            oncontextmenu = () => !1,
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b1.onclick = () => z(),
              b2.onclick = () => {
                z(), _ = 1;
              },
              b4.onclick = () => {
                t = !t, a();
              },
              b5.onclick = () => z(!0),
              onclick = t => {
                x = 1, Y || (t.target === hC && (X[5] = !0), _ && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((l = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && Y)
                  ? Y && !x || z(!Y)
                  : 5
                      === (e = {
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
                  ? l && (X[e] = 1)
                  : X[e] = l);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                _ && (t || a) && (R += .1 * t, O += .1 * a);
              },
              hC.ontouchstart = x => {
                if (!Y) {
                  for (let { pageX: t, pageY: a, identifier: e } of x.changedTouches) {
                    _ && t > hC.clientWidth / 2
                      ? void 0 === f && (f = e, i = t, h = a, m = 0, u = R, g = O)
                      : void 0 === o && (o = e, s = t, n = a, c = 0);
                  }
                  l = C;
                }
              },
              hC.ontouchmove = e => {
                if (!Y) {
                  for (let { pageX: t, pageY: x, identifier: a } of e.changedTouches) {
                    var l, r;
                    f === a && (R = u + (t - i) / 2.3, O = g + (x - h) / 2.3, m = 1),
                      o === a
                      && (.4 < (r = (l = (a = (s - t) / 20) < 0 ? -1 : 1) * a)
                        && (c = 1, y = l * r ** 1.5, 1.5 < r && (s = t + 20 * l)),
                        .4 < (r = (l = (a = (n - x) / 20) < 0 ? -1 : 1) * a)
                        && (c = 1, tt = l * r ** 1.5, 1.5 < r && (n = x + 20 * l)));
                  }
                }
              },
              hC.ontouchend = a => {
                let e;
                a.preventDefault();
                for (let t of a.changedTouches) {
                  t.identifier === f
                    ? (f = void 0, m || (e = 1), m = 0)
                    : t.identifier === o
                    ? (o = void 0, tt = y = 0, c || (e = 1), c = 0)
                    : e = 1;
                }
                e && a.target === hC && l && .06 < (a = C - l) && a < .7 && (X[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  X.length = y = tt = 0,
                  o = f = void 0,
                  document.hidden && z(!0);
              })(),
              z(!0);
          })();
      }
    },
    h = new Image();
  h.onload = h.onerror = e,
    h.src = St,
    (t => {
      let Q = 0,
        B = new Int32Array(10725888),
        e = () => {
          let l = Yt.createBuffer(2, 5362944, 44100);
          for (let e = 0; e < 2; e++) {
            for (let t = e, a = l.getChannelData(e); t < 10725888; t += 2) {
              a[t >> 1] = B[t] / 65536;
            }
          }
          Ct.buffer = l, Ct.loop = !0, bt(t);
        },
        l = () => {
          let f = 0,
            M,
            [v, p, d, b, I, A, P, S, x, y, Y, , C, z, j, k, t, w, a, F, T] =
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
              ]]][Q];
          y = y * y * 4;
          for (let g of [5513, 4562, 3891]) {
            let r = 0,
              s = 0,
              m = [],
              u,
              n,
              o,
              c = new Int32Array(768 * g),
              i = Math.PI * 2 ** (t - 8) / g,
              h = a * g & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * Q + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * g;
                for (var D, H = 0; H < 4; ++H) {
                  if (u = 0, a && (u = T[a - 1].charCodeAt(t + 32 * H) - 40, u += 0 < u ? 106 : 0), u) {
                    if (!(D = m[u])) {
                      let l = 0,
                        r = 0,
                        s,
                        n,
                        o = (D = u, g),
                        c = u,
                        i = Q < 2
                          ? t => t % 1 * 2 - 1
                          : wt,
                        h = Q < 2
                          ? Q < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : wt,
                        f = new Int32Array(S + x + y);
                      for (let a = 0, e = 0; S + x + y > a; ++a, ++e) {
                        let t = 1;
                        S > a ? t = a / S : S + x > a || (t = (1 - (t = (a - S - x) / y)) * 3 ** (-Y / 16 * t)),
                          e < 0
                          || (e -= 4 * o,
                            n = .00396 * 2 ** ((c + p - 256) / 12),
                            s = .00396 * 2 ** ((c + I - 256) / 12) * (1 + (Q ? 0 : .0072))),
                          f[a] = 80
                              * (i(l += n * t ** (d / 32)) * v + h(r += s * t ** (A / 32)) * b
                                + (P ? (2 * Math.random() - 1) * P : 0))
                              * t | 0;
                      }
                      D = m[D] = f;
                    }
                    for (let t = 0, a = 2 * e; D.length > t; ++t, a += 2) c[a] += D[t];
                  }
                }
                for (let t, a = 0; g > a; ++a) {
                  H = 0,
                    ((t = c[D = 2 * (e + a)]) || o)
                    && (n = .00308 * C,
                      1 !== Q && 4 !== Q || (n *= Math.sin(2 ** (t - 9) / g * D * Math.PI * 2) * F / 512 + .5),
                      n = 1.5 * Math.sin(n),
                      r += n * s,
                      M = (1 - z / 255) * (t - s) - r,
                      s += n * M,
                      t = 4 === Q ? s : 3 === Q ? M : r,
                      Q || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= j / 32,
                      o = 1e-5 < t * t,
                      M = Math.sin(i * D) * k / 512 + .5,
                      H = t * (1 - M),
                      t *= M),
                    D < h || (H += c[1 + D - h] * w / 255, t += c[D - h] * w / 255),
                    B[f + D] += c[D] = H,
                    ++D,
                    B[f + D] += c[D] = t;
                }
              }
            }
            f += c.length;
          }
          bt(++Q < 5 ? l : e);
        };
      bt(l);
    })(() => {
      let s = (t, a, e) =>
          U.translate(t + Math.sin(D + 2) / 5, a + Math.sin(.8 * D) / 3, e).rotateSelf(
            2 * Math.sin(D),
            Math.sin(.7 * D),
            Math.sin(.9 * D),
          ),
        n,
        o = (bt(() => {
          let a = 0,
            l = [],
            s = [],
            n = [],
            o = [],
            c = new Map(),
            i = new Int32Array(8),
            r = t => {
              let { x: a, y: e, z: l } = h[t], r = (m[0] = a, m[1] = e, m[2] = l, c.get(t = "" + (h.D ? f : i)));
              return void 0 !== r
                ? (a = 3 * r, o[a] = (o[a++] + i[5]) / 2, o[a] = (o[a++] + i[6]) / 2, o[a] = (o[a] + i[7]) / 2)
                : (c.set(t, r = c.size), s.push(a, e, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
                r;
            },
            h,
            f = new Int32Array(i.buffer, 0, 5),
            m = new Float32Array(i.buffer);
          for (let t of L) {
            for (h of (m[3] = 40 === t.F ? -13 : t.H && t.F, t.s)) {
              let { x: t, y: a, z: e } = ct(h);
              i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * a, i[7] = 32767 * e;
              for (let t = 2, a = r(0), e = r(1); h.length > t; ++t) l.push(a, e, e = r(t));
            }
            t.s = null, t.v = a, t.G = a = l.length;
          }
          Z.b11(34962, Z.c1b()),
            Z.b2v(34962, new Float32Array(s), 35044),
            Z.v7s(0, 4, 5126, !1, 0, 0),
            Z.b11(34962, Z.c1b()),
            Z.b2v(34962, new Int16Array(o), 35044),
            Z.v7s(1, 3, 5122, !0, 0, 0),
            Z.b11(34962, Z.c1b()),
            Z.b2v(34962, new Uint32Array(n), 35044),
            Z.v7s(2, 4, 5121, !0, 0, 0),
            Z.b11(34963, Z.c1b()),
            Z.b2v(34963, new Uint16Array(l), 35044),
            Z.e3x(0),
            Z.e3x(1),
            Z.e3x(2),
            bt(e);
        }),
          (() => {
            let a = g(
                11,
                t => U.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
              ),
              e = ft(18);
            return g(10, t => mt(ht(e, a[t]).reverse(), ht(e, a[t + 1]), 1)).flat();
          })()),
        c = d(
          p(
            u(M(20, 1, 1.15, 1), U.translate(0, -3).scale(3.5, 1, 3.5), S(.7, .4, .25, .7)),
            u(M(20, 1, 1.3, 1), U.translate(0, -2.5).scale(2.6, 1, 3), S(.7, .4, .25, .2)),
            u(M(), U.translate(4, -1.2).scale3d(2), S(.7, .4, .25, .3)),
          ),
        ),
        i = d(
          p(
            u(M(), U.translate(0, -8).scale(6, 15, 2.2)),
            u(M(), U.translate(0, -14.1).scale(4, 13, 4)),
            u(M(20, 1), U.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
          ),
        );
      b(() => {
        I([at.slice(1)], U.translate(-2).scale3d(3).rotate(90, 0));
      }, 0),
        b(() => {
          let t = (a, e, l) =>
              b(t => {
                t.h = () => U.translate(r() * Math.sin(3 * a + D * a) * e),
                  at.map(({ x: t, z: a }) => {
                    I(M(11, 1), U.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), S(.5, .3, .7, .6)),
                      I(M(), U.translate(4 * t, 7, l + 4 * a).scale(1, .3), S(.5, .5, .5, .3));
                  }),
                  I(d(p(
                    u(M(), U.translate(0, 0, l).scale(5, 1, 5), S(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      u(M(), U.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), S(.8, .8, .8, .3))
                    ),
                  ))),
                  I(M(), U.translate(0, -3, l).scale(8, 2, 8), S(.4, .4, .4, .3));
              }),
            r = () => {
              let t = W[2].i, a = 1 - W[4].i;
              return t < a ? t : a;
            },
            l = (b(t => {
              t.h = () => s(-12, 4.2, 40 * $ - 66), I(c), A(U.translate(0, -3, 4));
            }),
              g(7, t => u(M(6, 1), U.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), S(.3, .3, .38))).flat()),
            a = (P(U.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              P(
                U.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...ft(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              I(M(), U.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), S(.8, .8, .8, .2)),
              at.map(({ x: t, z: a }) => I(M(6), U.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), S(.6, .3, .3, .4))),
              [-23, 22].map(t => I(M(), U.translate(0, 0, t).scale(3, 1, 8), S(.9, .9, .9, .2))),
              [-15, 15].map((a, e) => {
                I(M(), U.translate(0, 6.3, a).scale(4, .3, 1), S(.3, .3, .3, .4)),
                  I(M(), U.translate(0, 1, a).scale(3, .2, .35), S(.5, .5, .5, .3)),
                  b(t => {
                    t.h = () => U.translate(0, 4.7 * -W[e + 1].g, a), I(l);
                  });
              }),
              g(5, a =>
                g(2, t =>
                  I(
                    o,
                    U.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    S(1, 1, .8, .2),
                  ))),
              I(M(), U.translate(3, 1.5, -20).scale(.5, 2, 5), S(.7, .7, .7, .2)),
              I(M(), U.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(.75, .75, .75, .2)),
              I(M(5), U.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(.6, .3, .3, .4)),
              A(U.translate(-5.4, 1.5, -19).rotate(0, -90)),
              I(
                M(),
                U.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5),
                S(.8, .2, .2, .5),
              ),
              I(d(
                p(
                  v(
                    u(M(6, 0, 0, .3), U.translate(8, -3, -4).scale(13, 1, 13), S(.7, .7, .7, .2)),
                    u(M(6), U.translate(0, -8).scale(9, 8, 8), S(.4, .2, .5, .5)),
                    u(M(6, 0, 0, .3), U.translate(0, -.92).scale(13, 2, 13), S(.8, .8, .8, .2)),
                  ),
                  u(M(5), U.scale(5, 30, 5), S(.4, .2, .6, .5)),
                  u(M(5, 0, 1.5), U.translate(0, 1).scale(4.5, .3, 4.5), S(.7, .5, .9, .2)),
                  u(M(), U.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), S(.5, .5, .5, .5)),
                  u(M(6), U.translate(15, -1.5, 4).scale(3.5, 1, 3.5), S(.5, .5, .5, .5)),
                ),
              )),
              b(t => {
                t.h = () =>
                  U.translate(
                    0,
                    .01 < W[3].g ? (5 * Math.cos(1.5 * D) + 2) * W[3].i * (1 - W[2].g) + -15 * (1 - W[3].g) : -500,
                    0,
                  ),
                  A(U.translate(0, 1.2)),
                  I(M(5), U.translate(0, -.2).scale(5, 1, 5), S(.6, .65, .7, .3));
              }),
              A(U.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              b(t => {
                t.h = () => U.translate(r() * Math.sin(D / 1.5 + 2) * 12),
                  I(
                    d(p(
                      v(
                        u(M(), U.scale(1.5, 1, 5), S(.9, .9, .9, .2)),
                        u(M(6), U.scale(4, 1, 5), S(.9, .9, .9, .2)),
                        u(M(), U.translate(0, -2).scale(2, 3.2, 1.9), S(.3, .8, .5, .5)),
                        u(M(16, 1, 0, 4), U.scale(1, 1, 1.5).rotate(0, 90), S(.9, .9, .9, .2)),
                      ),
                      u(M(), U.scale(1.3, 10, 1.3), S(.2, .7, .4, .6)),
                    )),
                    U.translate(0, 0, 45),
                  ),
                  P(U.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              b(t => {
                t.h = () => U.translate(9.8 * (1 - r())),
                  I(M(3), U.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), S(.3, .6, .6, .2)),
                  I(M(8), U.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(.8, .8, .8, .2)),
                  I(M(), U.translate(-23, -3, 55).scale(5.2, 1.7, 3), S(.5, .5, .5, .3)),
                  I(M(), U.translate(-23, -2.2, 62).scale(3, 1, 4), S(.5, .5, .5, .3)),
                  A(U.translate(-23, -.5, 66.5));
              }),
              I(M(), U.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(.9, .9, .9, .2)),
              b(t => {
                t.h = () => U.translate(0, V(1 - 5 * r()) * f(W[4].g, W[5].g) * Math.sin(1.35 * D) * 4),
                  I(M(), U.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(.7, .7, .7, .2)),
                  I(
                    d(p(u(M(), U.scale(3, 1.4, 2.7)), u(M(), U.scale(1.2, 8, 1.2)))),
                    U.translate(-33, -3, 55),
                    S(.7, .7, .7, .2),
                  );
              }),
              b(t => {
                t.h = () => U.translate(0, 0, V(1 - 5 * r()) * f(W[4].g, W[5].g) * Math.sin(.9 * D) * 8),
                  I(d(
                    p(
                      u(M(), U.translate(-27, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2)),
                      u(M(), U.translate(-27, -3, 55).scale(1, 3), S(.9, .9, .9, .2)),
                    ),
                  )),
                  I(M(), U.translate(-39, -3, 55).scale(3, 1.4, 2.7), S(.9, .9, .9, .2));
              }),
              b(t => {
                t.h = () => U.translate(0, -6.5 * W[4].i),
                  I(
                    M(6),
                    U.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    S(.7, .7, .7, .4),
                  );
              }),
              [...u(
                d(v(
                  u(M(), U.translate(0, -3).scale(11, 1.4, 3), S(.9, .9, .9, .2)),
                  p(
                    u(M(6), U.rotate(0, 0, 90).scale(6, 8, 6), S(.3, .6, .6, .3)),
                    u(M(4, 0, .01), U.translate(0, 6).scale(12, 2, .75).rotate(0, 45), S(.3, .6, .6, .3)),
                    u(M(6), U.rotate(0, 0, 90).scale(5, 12, 5), S(.3, .6, .6, .3)),
                    ...[5, 0, -5].map(t =>
                      u(M(5), U.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(.3, .6, .6, .3))
                    ),
                  ),
                )),
                U,
              )]),
            y =
              (I(a, U.translate(-53, 0, 55)),
                I(M(6), U.translate(-61.3, -2.4, 49).scale(3, 1, 5), S(.4, .6, .6, .3)),
                I(M(7), U.translate(-57, -2.6, 46).scale(4, 1, 4), S(.8, .8, .8, .3)),
                A(U.translate(-55, -1.1, 46).rotate(0, 90)),
                b(t => {
                  t.h = () => U.translate(-75, (1 - W[5].i) * (1 - W[6].g) * 3, 55).rotate(180 * (1 - W[5].i) + T, 0),
                    I(a);
                }, 2),
                I(M(), U.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), S(.7, .7, .7, .2)),
                I(M(3, 0, -.5), U.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(.8, .8, .8, .2)),
                I(
                  d(p(
                    v(
                      u(M(), U.translate(-100, -2.5, 55).scale(8, 1, 8), S(.8, .8, .8, .2)),
                      u(M(), U.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(.8, .8, .8, .2)),
                      u(M(), U.translate(-100, -2.6, 70).scale(3, 1.1, 7), S(.8, .8, .8, .2)),
                      u(M(), U.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(.8, .8, .8, .2)),
                      u(M(6), U.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(.6, .6, .6, .3)),
                      u(M(), U.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(.8, .8, .8, .2)),
                      u(M(), U.translate(-100, .42, 92).scale(3, 1.1, 4.1), S(.8, .8, .8, .2)),
                    ),
                    u(M(8), U.translate(-100, -1, 55).scale(7, .9, 7), S(.3, .3, .3, .4)),
                    u(M(8), U.translate(-100, -2, 55).scale(4, .3, 4), S(.4, .4, .4, .5)),
                    u(M(8), U.translate(-100, -3, 55).scale(.6, 1, .6), S(.4, .4, .4, .5)),
                  )),
                  U,
                ),
                P(U.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
                P(U.translate(-89, .2, 80), [0, 0, 6]),
                I(d(
                  p(
                    u(M(), U.translate(-100, 1, 63).scale(7.5, 4), S(.5, .5, .5, .4)),
                    u(M(), U.translate(-100, 0, 70).scale(2, 2, 10), S(.5, .5, .5, .4)),
                    u(M(20, 1), U.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(.5, .5, .5, .4)),
                  ),
                )),
                b(t => {
                  t.h = () => U.translate(-99.7, 5.3 * -W[6].g - 2, 63.5), I(l);
                }),
                at.map(({ x: a, z: e }) => {
                  I(M(6), U.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), S(.6, .15, .15, .8)),
                    [4, -.4].map(t =>
                      I(M(6), U.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), S(.4, .2, .2, .8))
                    );
                }),
                g(7, t => {
                  I(
                    M((23 * t + 1) % 5 + 5, 0, .55),
                    U.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                      5 + t / 2,
                      1 + t / 6,
                      5 + t / 3,
                    ),
                    S(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                  );
                }),
                I(M(), U.translate(-87, -9.5, 24).scale(7, 1, 3), S(.4, .5, .6, .4)),
                I(M(4), U.translate(-86, -9.2, 27).scale(5, 1, 5), S(.5, .6, .7, .3)),
                I(M(12, 1), U.translate(-86, -9, 31).scale(1.5, 1, 1.5), S(.3, .3, .4, .1)),
                A(U.translate(-86, -7.5, 31)),
                b(t => {
                  t.h = () => U.translate(0, 3.5 * (1 - K(W[6].g, W[7].g)) + f(W[7].i, W[6].i) * Math.sin(D) * 5),
                    [0, 12, 24].map(t =>
                      I(M(), U.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), S(.2, .5, .6, .2))
                    );
                }),
                b(t => {
                  t.h = () => {
                    let t = f(W[7].i, W[6].i);
                    return U.translate(0, t * Math.sin(D + 3) * 6, 6 * Math.sin(.6 * D + t) * t);
                  },
                    [6, 18].map(t =>
                      I(M(), U.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), S(.1, .4, .5, .2))
                    );
                }),
                I(
                  d(p(
                    v(
                      u(M(), U.scale(11, 1, 13), S(.3, .4, .6, .3)),
                      u(M(5), U.translate(0, 0, -7).scale(2, 1.2, 2), S(.2, .4, .7, .3)),
                      u(M(5), U.scale(9, 1.2, 9), S(0, .2, .3, .5)),
                    ),
                    u(M(5), U.scale(5.4, 5, 5.4), S(0, .2, .3, .5)),
                  )),
                  U.translate(-38.9, -11.3, 17),
                ),
                A(U.translate(-38.9, -9.6, 10)),
                b(t => {
                  t.h = () => U.translate(0, -7.3 * W[7].i),
                    I(
                      d(p(
                        v(
                          u(M(5), U.translate(0, 2).scale(5, 7, 5).skewY(8), S(.2, .4, .5, .5)),
                          u(M(5), U.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(.25, .35, .5, .5)),
                          u(M(5), U.translate(0, 9).scale(.6, 7, .6).skewY(8), S(.35, .3, .5, .5)),
                        ),
                        u(M(5), U.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(.2, .4, .5, .5)),
                      )),
                      U.translate(-38.9, -11.3, 17),
                    ),
                    P(
                      U.translate(-39.1, -.3, 17).rotate(0, 0, 10),
                      ...ft(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.2]),
                    );
                }),
                at.map(({ x: t, z: a }) => {
                  n = U.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                    I(M(14, 1), n.scale(1, 4), S(.25, .25, .25, 1)),
                    [1.5, 8].map(t => I(M(17, 1), n.translate(0, t - 4).scale(1.5, .5, 1.5), S(.6, .6, .6, .3)));
                }),
                I(
                  d(p(
                    v(
                      u(M(6), U.translate(0, 0, -36).scale(15, 1.2, 15), S(.7, .7, .7, .3)),
                      u(M(), U.translate(0, 0, -18).scale(4, 1.2, 6), S(.45, .4, .6, .3)),
                    ),
                    ...g(6, a =>
                      g(6, t =>
                        u(
                          M(6),
                          U.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          S(.7, .7, .7, .3),
                        ))).flat(),
                  )),
                  U.translate(-38.9, -11.3, 17),
                ),
                P(U.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
                I(M(5), U.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), S(.8, .1, .25, .4)),
                A(U.translate(-84, -.5, 85).rotate(0, 45)),
                b(t => {
                  t.h = () => s(-123, 1.4, 55 + -65 * x), A(U.translate(0, -3, -4).rotate(0, 180)), I(c);
                }),
                P(U.translate(-115, .2, -12), [0, 0, 3.5]),
                d(p(
                  u(M(), U.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), S(.25, .25, .35, .3)),
                  u(M(3), U.translate(0, 0, -5.5).scale(3, 2), S(.6, .3, .4, .3)),
                  ...[-1.2, 1.2].map(t => u(M(), U.translate(t, -.5, 1).scale(.14, .3, 6.5), S(.7, .2, 0, .3))),
                ))),
            e = (b(t => {
              t.h = () => U.translate(0, -2, f(W[10].g, W[11].g) * G(Math.sin(1.1 * D)) * -8.5 + 10),
                g(2, t => I(y, U.translate(9 * t - 110 + (1 & t), 1.7, -12)));
            }),
              b(t => {
                t.h = () => U.translate(0, -2, f(W[10].g, W[11].g) * G(Math.sin(2.1 * D)) * -8.5 + 10),
                  g(2, t => I(y, U.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
              }),
              b(t => {
                t.h = () =>
                  U.translate(
                    0,
                    -2,
                    -8.5 * K((1 - W[10].g) * (1 - f(W[10].g, W[11].g)), f(W[10].g, W[11].g) * G(Math.sin(1.5 * D)))
                      + 10,
                  ), g(3, t => I(y, U.translate(9 * t - 106, 1.7, -12)));
              }),
              I(
                d(p(
                  v(
                    u(M(), U.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    u(M(), U.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...g(4, t => u(M(), U.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...g(3, t => u(M(), U.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                U.translate(-123, 0, -12),
                S(.5, .5, .6, .2),
              ),
              I(M(5), U.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), S(.25, .25, .35, 1)),
              I(M(), U.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(.8, .8, .8, .2)),
              I(M(6), U.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), S(.6, .5, .7, .2)),
              A(U.translate(-116, -1.4, -18).rotate(0, 180)),
              g(3, t => {
                I(i, U.translate(12 * t - 109, -9, -12), S(.6, .6, .6, .3)),
                  I(i, U.translate(-77, -9, -12 * t - 20).rotate(0, 90), S(.6, .6, .6, .3));
              }),
              I(d(
                p(
                  u(M(12), U.translate(-77, -13.9, -12).scale(4, 18.2, 4), S(.7, .7, .7, .2)),
                  u(M(), U.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), S(.4, .5, .6, .2)),
                  u(M(), U.translate(-77, 0, -14).scale(1.5, 2.2, 2), S(.4, .5, .6, .2)),
                  u(M(12), U.translate(-77, 2.8, -12).scale(3, 5, 3), S(.4, .5, .6, .2)),
                ),
              )),
              I(M(), U.translate(-115.5, -17, -12).scale(.5, 15, 2.2), S(.6, .6, .6, .3)),
              I(M(), U.translate(-77, -17, -50.5).scale(2.2, 15, .5), S(.6, .6, .6, .3)),
              I(M(), U.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), S(.6, .6, .6, .3)),
              I(d(
                p(
                  u(M(), U.translate(-93, -5.8, -40).scale(9, 1, 5), S(.8, .8, .8, .1)),
                  u(M(9), U.translate(-98, -5.8, -40).scale(3, 8, 3), S(.7, .7, .7, .2)),
                ),
              )),
              I(M(9), U.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), S(.5, .5, .5, .3)),
              A(U.translate(-98, -4.4, -40).rotate(0, 90)),
              P(U.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
              I(d(
                p(
                  v(
                    u(M(6, 0, 0, .6), U.translate(-100, .7, 105.5).scale(8, 1, 11), S(.7, .7, .7, .2)),
                    u(M(), U.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), S(.7, .7, .7, .2)),
                    u(M(), U.translate(-91.2, .7, 107).scale(3, 1, 3.3), S(.7, .7, .7, .2)),
                  ),
                  u(M(5), U.translate(-100, .7, 113).scale(4, 3, 4), S(.7, .7, .7, .2)),
                ),
              )),
              g(4, a =>
                b(t => {
                  t.h = () => {
                    let t = f(W[8].i, W[12].i);
                    return U.translate(
                      (2 < a ? 2 * (1 - t) + t : 0) - 100,
                      t * Math.sin(1.3 * D + 1.7 * a) * (3 + a / 3) + .7,
                      115 + (1 & a ? -1 : 1) * (1 - W[8].i) * (1 - W[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * D + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    I(
                      M(6),
                      U.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      S(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              b(t => {
                t.h = () => {
                  let t = f(W[8].i, W[12].i);
                  return U.translate(2.5 * (1 - t) - 139.7, -3 * (1 - W[8].g) + t * Math.sin(.8 * D) * -1 - 1.8, 93.5)
                    .rotateSelf(Math.cos(1.3 * D) * (3 * t + 3), 0);
                },
                  I(d(
                    p(u(M(10), U.scale(6, 2, 6), S(.1, .6, .5, .3)), u(M(10), U.scale(3.3, 6, 3.3), S(.1, .6, .5, .5))),
                  )),
                  n = U.translate(-7.5).rotate(0, 90),
                  I(M(15, 1), n.scale(3, 2.3, 3), S(.4, .4, .4, .3)),
                  I(M(10), n.scale(2, 2.5, 2), S(.3, .8, .7, .3)),
                  I(M(5), n.scale(1, 3), S(.5, .5, .5, .5)),
                  A(n.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(t =>
                    I(
                      o,
                      U.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                      S(1, 1, .8, .2),
                    )
                  ),
                  P(U.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              }),
              [-1, 1].map(a => {
                I(M(12, 1), U.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), S(.6, .24, .2, .5)),
                  [7.2, 1.5].map(t =>
                    I(M(15, 1), U.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), S(.5, .24, .2, .4))
                  ),
                  I(o, U.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), S(1, 1, .8)),
                  I(
                    d(p(
                      u(M(), U.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), S(.5, .5, .5, .4)),
                      u(M(), U.scale(3, 3, 10), S(.6, .24, .2, .5)),
                      u(M(28, 1), U.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(.6, .24, .2, .5)),
                      u(M(5), U.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(.6, .24, .2, .5)),
                      u(M(5), U.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), S(.6, .24, .2, .5)),
                    )),
                    U.translate(a - 100, .7, 97),
                  );
              }),
              b(t => {
                t.h = () => U.translate(-100, .6 - 6 * W[12].g, 96.5).scale(.88, 1.2), I(l);
              }),
              [
                ...u(M(25, 1), U.scale(8, 1, 8), S(.45, .45, .45, .2)),
                ...u(M(5), U.translate(0, 1).scale(1, .2), S(.3, .3, .3, .2)),
              ]);
          b(t => {
            t.h = () => U.translate(-80, 1, 106).rotate(0, 40 + k),
              I(d(
                p(
                  u(M(25, 1), U.scale(8, 1, 8), S(.45, .45, .45, .2)),
                  u(M(), U.translate(0, 0, -5.5).scale(1.5, 3, 2.5), S(.45, .45, .45, .2)),
                ),
              )),
              I(M(8), U.translate(0, 2).scale(3, 1.5, 3), S(.7, .7, .7, .1)),
              I(M(5), U.translate(0, 2).scale(1, 2), S(.3, .3, .3, .2)),
              P(U.translate(0, 3), ...ft(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
          }),
            b(t => {
              t.h = () => U.translate(-64, 1, 106).rotate(0, F),
                I(d(
                  p(
                    u(M(25, 1), U.translate(0, 2).scale(8, 1, 8), S(.35, 0, 0, .3)),
                    u(M(), U.scale(9, 5, 2), S(.3, 0, 0, .3)),
                  ),
                )),
                I(e),
                [-1, 1].map(t =>
                  I(
                    o,
                    U.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                    S(1, 1, .8),
                  )
                );
            }),
            b(t => {
              t.h = () => U.translate(-48, 1, 106).rotate(0, 180 - F),
                I(d(
                  p(
                    u(M(25, 1), U.translate(0, 2).scale(8, 1, 8), S(.35, 0, 0, .3)),
                    u(M(), U.translate(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                    u(M(), U.translate(0, 0, 7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                  ),
                )),
                I(e);
            }),
            b(t => {
              t.h = () => U.translate(-48, 1, 90).rotate(0, 270 + F),
                I(d(
                  p(
                    u(M(25, 1), U.translate(0, 2).scale(8, 1, 8), S(.35, 0, 0, .3)),
                    u(M(), U.translate(7).scale(9, 5, 2), S(.3, 0, 0, .3)),
                    u(M(), U.translate(0, 0, -7).scale(2, 5, 9), S(.3, 0, 0, .3)),
                  ),
                )),
                I(e);
            }),
            I(M(), U.translate(-56, 1, 106).scale(.7, .8, 2.5), S(.7, .7, .7, .2)),
            I(M(), U.translate(-48, 1, 98).scale(2.5, .8, .7), S(.7, .7, .7, .2)),
            I(M(), U.translate(-39, .4, 90).scale(2, 1, 2), S(.7, .7, .7, .3)),
            I(M(), U.translate(-34.2, .4, 90).scale(3, 1, 3), S(.7, .7, .7, .3)),
            A(U.translate(-34, 2.7, 96).rotate(-12, 0)),
            I(M(5), U.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), S(.2, .5, .5, .6)),
            [S(.1, .55, .45, .2), S(.2, .5, .5, .3), S(.3, .45, .55, .4)].map((a, e) =>
              b(t => {
                t.h = () =>
                  U.translate(
                    0,
                    (1 - W[13].i) * (1 - W[14].i) * (e ? 0 : 3) + f(W[13].i, W[14].i) * Math.sin(1.5 * D + 1.5 * e) * 4,
                  ),
                  I(M(), U.translate(-23.5, .5, 90 + 6.8 * e).scale(1 === e ? 2 : 3.3, 1, 3.3), a),
                  2 === e && I(M(), U.translate(-29.1, .4, 90).scale(2.1, 1, 3), S(.7, .7, .7, .3)),
                  1 === e
                  && I(
                    M(),
                    U.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1),
                    S(.6, .6, .7, .3),
                  );
              })
            ),
            I(d(
              p(
                u(M(6, 0, 0, .3), U.translate(0, -.92, 95).scale(14, 2, 14), S(.8, .8, .8, .2)),
                u(M(5), U.translate(0, 0, 95).scale3d(6), S(.3, .3, .3, .5)),
              ),
            )),
            [8, -6.1].map((a, e) =>
              g(
                3,
                t =>
                  I(
                    i,
                    U.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e),
                    1 & t ? S(.5, .5, .5, .3) : S(.35, .35, .35, .5),
                  ),
              )
            ),
            [-1, 1].map(t => I(o, U.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), S(1, 1, .8))),
            A(U.translate(0, 1.7, 82).rotate(0, 180)),
            I(M(5), U.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(.5, .3, .3, .4)),
            I(d(
              p(
                v(
                  u(M(), U.translate(0, 16, 110.5).scale(12, 1, 3), S(.5, .3, .3, .4)),
                  u(M(), U.translate(0, 16, 111).scale(3, 1, 3.8), S(.5, .3, .3, .4)),
                ),
                u(M(5), U.translate(0, 16, 103.5).scale(5.5, 5, 5.5), S(.5, .3, .3, .4)),
              ),
            )),
            I(M(6), U.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(.5, .6, .7, .3)),
            I(M(), U.translate(0, 16, 129).scale(1.5, 1, 2), S(.5, .6, .7, .3)),
            I(M(7), U.translate(0, 16.2, 133).scale(5, 1, 5), S(.4, .5, .6, .4)),
            b(t => {
              t.h = () => {
                let t = Math.sin(D);
                return U.translate(-2 * t).rotate(0, 0, 25 * t);
              },
                I(M(3), U.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), S(.5, .3, .3, .4)),
                [22, 30].map(t => {
                  I(M(6), U.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), S(.7, .7, .7, .4)),
                    I(M(), U.translate(0, 6.2, t + 95).scale(.5, 11, .5), S(.5, .3, .3, .4));
                });
            }),
            b(t => {
              t.h = () => {
                let t = f(f((W[14].g + W[14].i) / 2, W[13].i), (W[15].g + W[15].i) / 2);
                return U.translate(0, 16 * t, 8.5 * V(2 * t - 1) + 95);
              },
                I(M(5), U.scale(5, 1.1, 5), S(.5, .3, .3, .4)),
                I(M(5), U.scale(5.5, .9, 5.5), S(.25, .25, .25, .4)),
                A(U.translate(0, 1.5, -1).rotate(0, 180));
            }),
            P(U.translate(0, 3, 95), ...ft(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            P(U.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        b(() => {
          [0, 180].map(t => I(o, U.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), S(1, 1, .8))),
            I(ut(20), U.translate(0, 1).scale(.5, .5, .5), S(1, .3, .4));
          let a = u(
            d(p(M(15, 1), u(M(), U.translate(0, 0, 1).scale(2, 2, .5)))),
            U.rotate(-90, 0).scale(.1, .05, .1),
            S(.3, .3, .3),
          );
          [-1, 1].map(t => I(a, U.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            I(M(), U.translate(0, .9, .45).scale(.15, .02, .06), S(.3, .3, .3)),
            I(ut(20), U.scale(.7, .8, .55), S(1, .3, .4));
        }),
        [-1, 1].map(t =>
          b(() => {
            I(M(10, 1), U.translate(.3 * t, -.8).scale(.2, .7, .24), S(1, .3, .4));
          })
        ),
        b(() => {
          I(M(6, 1), U.scale(.13, 1.4, .13), S(.3, .3, .5, .1)),
            I(M(8, 1), U.translate(0, 1).scale(.21, .3, .21), S(1, .5, .2)),
            I(M(3), U.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), S(.2, .2, .2, .1));
        }, 0),
        b(() => {
          I(M(6).slice(0, -1), U.scale(.77, 1, .77), S(1, .3, .5));
        }, 0),
        b(() => {
          I(
            ut(30, 24, (t, a, e) => {
              let l = a / 24, r = t * Math.PI * 2 / 30, s = l ** .6 * Math.PI / 2;
              return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
                23 === a
                  ? { x: e.D = 0, y: -.5, z: 0 }
                  : {
                    x: Math.cos(r) * Math.sin(s),
                    y: Math.cos(l * Math.PI) - l - t,
                    z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
                  };
            }),
            U.scale3d(.7),
            S(1, 1, 1),
          ), [-1, 1].map(t => I(ut(12), U.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
