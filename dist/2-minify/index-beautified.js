let J = 0,
  P = 0,
  k = 0,
  j = 0,
  S = 0,
  Y = 0,
  C = 0,
  a = 0,
  F = 0,
  _ = 0,
  Z = 0,
  y = 0,
  x = 0,
  T = 0,
  D = 0,
  H = 0,
  z = 0,
  Q = .066,
  w = 1,
  $ = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  B = [],
  q = [],
  O = [],
  R = [],
  L = { x: 0, y: 0, z: 0 },
  W = Math.PI / 180,
  X = new DOMMatrix(),
  l = new Float32Array(16),
  r = new Float32Array(624),
  g = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  tt = t => 4 < t ? 4 : t,
  N = (t, a) => a < t ? t : a,
  E = t => t < 0 ? -t : t,
  at = (t, a) => a < (t < 0 ? -t : t) ? t : 0,
  U = t => t < 0 ? 0 : 1 < t ? 1 : t,
  et = (t, a, e) => t + (a - t) * (e < 0 ? 0 : 1 < e ? 1 : e),
  i = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  lt = t => Math.atan2(Math.sin(t *= W), Math.cos(t)) / W,
  st = (t, a, e) =>
    ((t *= W) + (2 * (a = (a * W - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / W,
  rt = ({ x: t, y: a, z: e }) => Math.hypot(t - L.x, a - L.y, e - L.z),
  nt = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  ot = t => {
    let a = 0, e = 0, l = 0, s, r = t.at(-1);
    for (s of t) a += (r.y - s.y) * (r.z + s.z), e += (r.z - s.z) * (r.x + s.x), l += (r.x - s.x) * (r.y + s.y), r = s;
    return s = Math.hypot(a, e, l), a /= s, e /= s, l /= s, { x: a, y: e, z: l, w: a * r.x + e * r.y + l * r.z };
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
  ct = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  it = (t, a, e) => (t.D = e, t.A = a, t),
  ht = (t, l, a = t.A) =>
    it(
      t.map(t => {
        let a, e;
        return { x: t, y: a, z: e } = t,
          { x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }),
          { x: t, y: a, z: e };
      }),
      a,
      t.D,
    ),
  h = (t, a, e) => t.map(t => ht(t, a, e)),
  ft = (e, l = 0) =>
    g(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  s = (l, s, r) =>
    l.map((t, a, { length: e }) => it([t, s[e - a - 1], s[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, r)),
  f = (
    t,
    a,
    e = 0,
    l,
  ) => (t = t ? ft(t, l) : $,
    l = ht(t, X.translate(0, 1).scale3d(0 < e ? e : 1)),
    t = ht(t, X.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...s(t, l, a), l, t]),
  n = (
    l,
    s = l,
    r = (
      t,
      a,
    ) => (a *= Math.PI / s,
      { x: Math.cos(t *= 2 * Math.PI / l) * Math.sin(a), y: Math.cos(a), z: Math.sin(t) * Math.sin(a) }),
  ) => {
    let n = [];
    for (let e = 0; l > e; e++) {
      for (let a = 0; s > a; a++) {
        let t = it([], 0, 1);
        n.push(t),
          t.push(r(e, a, t)),
          a && t.push(r((e + 1) % l, a, t)),
          s - 1 > a && t.push(r((e + 1) % l, a + 1 % s, t)),
          t.push(r(e, a + 1 % s, t));
      }
    }
    return n;
  },
  c = (l, s) => {
    let r, n, o, c = s.C;
    for (let t = 0; c.length > t; ++t) {
      if ((r = nt(l, c[t]) - l.w) < -8e-5 ? o = s : 8e-5 < r && (n = s), o && n) {
        n = [], o = [], c = s.C, t = s.B;
        let a = c.at(-1), e = nt(l, a) - l.w;
        for (let t of c) {
          r = nt(l, t) - l.w,
            e < 8e-5 && o.push(a),
            -8e-5 < e && n.push(a),
            (8e-5 < e && r < -8e-5 || e < -8e-5 && 8e-5 < r)
            && (e /= r - e,
              a = { x: a.x + (a.x - t.x) * e, y: a.y + (a.y - t.y) * e, z: a.z + (a.z - t.z) * e },
              n.push(a),
              o.push(a)),
            a = t,
            e = r;
        }
        return {
          o: 2 < n.length && { C: it(n, c.A, c.D), B: t, u: s },
          m: 2 < o.length && { C: it(o, c.A, c.D), B: t, u: s },
        };
      }
    }
    return { o: n, m: o };
  },
  o = (t, a, e = ot(a.C)) => {
    let l, s, r;
    return t
      ? ({ o: l, m: s } = c(t, a), l || s || t.s.push(a), l && (t.o = o(t.o, l, e)), s && (t.m = o(t.m, s, e)))
      : ({ x: l, y: s, z: e, w: r } = e, t = { x: l, y: s, z: e, w: r, s: [a], o: 0, m: 0 }),
      t;
  },
  e = (a, s, r) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = c(t, a);
        e || l || (0 < r * nt(t, s) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of s.s) o(a, t);
    return n;
  },
  mt = (t, a) => t && (a(t), mt(t.o, a), mt(t.m, a)),
  ut = t => t.length ? t.reduce((t, a) => o(t, { C: a, B: 0, u: 0 }), 0) : t,
  Mt = t => (mt(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.s) t.B = !t.B;
  }),
    t),
  u = (...t) =>
    t.reduce((l, a) => {
      let s = [];
      if (l = ut(l), a) {
        a = ut(a), mt(l, t => t.s = e(a, t, 1)), mt(a, t => s.push([t, e(l, t, -1)]));
        for (let [a, e] of s) for (let t of e) o(l, t, a);
      }
      return l;
    }),
  M = (...t) => {
    let e = new Map(),
      l = new Map(),
      s = t => {
        let a;
        return t.u && ((a = e.get(t.u)) ? (l.delete(a), t = s(t.u)) : e.set(t.u, t)), t;
      },
      a;
    return [t, ...a] = [...t],
      t = Mt(u(Mt(ut(t)), ...a)),
      mt(t, a => {
        for (let t of a.s) l.set(s(t), t.B);
      }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return it(a ? e.reverse() : e, t.A, t.D);
      });
  },
  K = (t, a, e) => t + (a - t) * U(1 - Math.exp(-e * Q)),
  gt = () => {
    let t = i(q[12].g, q[13].g);
    C = et(K(C, 0, 1), lt(C + 60 * Q), q[5].g - q[6].i),
      S = et(K(S, 0, 5), lt(S + 56 * Q), t),
      Y = et(K(Y, 0, 4), lt(Y + 48 * Q), t),
      _ = K(_, q[9].i, .2 + .3 * E(2 * q[9].i - 1)),
      F = K(F, a ? F + (-9 - F) * U(1.5 * Q) : U(k / 3), 1),
      w && k > w && (w = 0, h4.innerHTML = ""),
      q[0].j && .8 < q[0].g && (J < 13
        ? (1 / 0 > w && (w = k + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), q[0].j = 0)
        : a
          || (1 / 0 > w && (w = k + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            a = 1));
    for (let t of B) t.h && (t.l = t.h());
    for (let t of q) t.h();
    for (let t of O) t.h();
  },
  yt = () => {
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
    ][J = O.reduce((t, { j: a }) => t + a, 0)];
  },
  xt = () => {
    localStorage.DanteSP22 = JSON.stringify([q.map(({ j: t }) => t), O.map(({ j: t }) => t), j, k, _]);
  },
  v = (t, a = 1) => {
    let e = At;
    return B.push(At = a = { l: X, H: B.length, G: a, s: [] }), t(a), At = e, a;
  },
  d = (t, a = X, e) => At.s.push(...h(t, a, e)),
  p = s => {
    let r = At,
      n = q.length,
      o = {
        j: 0,
        g: 0,
        i: 0,
        u: r,
        h() {
          let t = o.j, a = o.g, e = o.i, l = r.l.multiply(s);
          o.I = l,
            rt(l.transformPoint()) < 3 && R[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && 1 / 0 > w && (w = k + 1, h4.innerHTML = "* click *"), j = n, xt()),
            o.g = K(a, t, 4),
            o.i = K(e, t, 1),
            o.l = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    q.push(o),
      d(f(5), s.translate(-.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      d(f(5), s.translate(.2).rotate(90, 90).scale(.4, .1, .5), I(.4, .5, .5)),
      d(f(), s.translate(0, -.4).scale(.5, .1, .5), I(.5, .5, .4));
  },
  b = (f, ...t) => {
    let m = -1,
      u = 0,
      M = 0,
      g = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      I = {
        j: 0,
        h() {
          if (!I.j) {
            let s = 1, r = 1 / 0, t, a, e, l, n, o, c;
            for (let l of P) {
              let { x: t, z: a, w: e } = l;
              a = (t = Math.hypot(Y - t, C - a)) - e, c ||= t < e, 0 < a && r > a && (r = a, S = l);
              var i = t / e;
              s = i > s ? s : i;
            }
            c
            || ({ x: t, z: a, w: e } = S,
              l = Y - t,
              n = C - a,
              o = Math.hypot(l, n),
              h = Math.atan2(-n, l),
              p && (M = (Math.random() - .5) * Math.PI / 2, b = N(1, b / (1 + Math.random()))),
              m = -Math.cos(h += M),
              u = Math.sin(h),
              .1 < o && (o = (o < e ? o : e) / (o || 1), Y = l * o + t, C = n * o + a)),
              p = c,
              b = K(b, 3 + 6 * (1 - s), 3 + s),
              F = K(F, Y = K(Y, Y + m, b), b),
              j = K(j, C = K(C, C + u, b), b),
              g = st(g, Math.atan2(F - v, j - d) / W - 180, 3 * Q),
              v = F,
              d = j;
            var h = (I.l = A.l.multiply(f.translate(F, 0, j).rotateSelf(0, g, 7 * Math.sin(1.7 * k)))).transformPoint();
            rt(h) < 1.55
              && (I.j = 1,
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
                ][J] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > w && (w = k + (J && J < 12 ? 5 : 7), h4.innerHTML = i),
                yt(),
                xt());
          }
          I.j
            && (I.l = B[2].l.translate(
              a % 4 * 1.2 - 1.7 + Math.sin(k + a) / 7,
              -2,
              1.7 * (a / 4 | 0) - 5.5 + E(a % 4 - 2) + Math.cos(k / 1.5 + a) / 6,
            ));
        },
      },
      A = At,
      a = O.length,
      P = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      S = P[0],
      { x: Y, z: C } = S,
      F = Y,
      j = C;
    O.push(I);
  },
  vt = (t, a, e, l) => {
    let s = 0,
      r = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      m = -1 / 0,
      u = 1.1 * (e - a),
      M = new DOMMatrix(ct(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return a = g(
      8,
      t => (t = M.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        s -= t.x = (u * t.x | 0) / u / t.w,
        r -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      e = X.rotate(298, 139).translateSelf(s / 8, r / 8, n / 8),
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
      X.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(e);
  },
  dt = (t, a = 35633) => (a = G.c6x(a), G.s3c(a, t), G.c6a(a), a),
  pt = (t, a) => {
    let e = {}, l = G.c1h();
    return G.abz(l, t), G.abz(l, dt(a, 35632)), G.l8l(l), t => t ? e[t] || (e[t] = G.gan(l, t)) : G.u7y(l);
  },
  zt = (t, a, e, l) => {
    if (A) {
      for (var s of (e = X.rotate(0, 40 * Math.sin(P) - 70), [37, 38, 39])) m(e, r, s - 1);
      G.uae(t, !1, r), G.d97(4, B[39].F - B[37].v, 5123, 2 * B[37].v);
    } else {
      for (s = 0; B.length > s; ++s) B[s].G && m(B[s].l, r, s - 1);
      for (G.uae(t, !1, r), G.d97(4, (a ? B[39].F : B[37].v) - 3, 5123, 6), a = 0; a < 13; ++a) m(O[a].l, r, a);
      for (a = 0; q.length > a; ++a) m(q[a].l, r, a + 13), l || (r[16 * (a + 13) + 15] = 1 - q[a].g);
      G.uae(t, !1, r),
        G.das(4, B[e].F - B[e].v, 5123, 2 * B[e].v, 13),
        G.das(4, B[40].F - B[40].v, 5123, 2 * B[40].v, q.length);
    }
  },
  bt = t => {
    h4.innerHTML += ".", setTimeout(t);
  },
  wt = t => Math.sin(t * Math.PI * 2),
  I = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  A,
  It,
  At,
  V,
  Pt,
  St = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Yt = new AudioContext(),
  Ct = Yt.createBufferSource(),
  G = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in G) G[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = G[t];
bt(() => {
  let t = 0,
    e = () => {
      if (2 == ++t) {
        let s = t => {
            let a, e;
            G.f1s(),
              requestAnimationFrame(s),
              l = (t - (It || t)) / 1e3,
              A ? (Q = 0, R[5] = 0) : Q = .066 < l ? .066 : l,
              k += Q,
              P += l,
              It = t,
              0 < Q && (gt(), Pt(), R[5] = 0);
            var l = A
              ? X.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + U(hC.clientWidth / 1e3))
              : X.rotate(-H, -z, -0).invertSelf().translateSelf(-x, -T, -D);
            0 < Q
            && ({ x: t, y: a, z: e } = L,
              i(),
              G.b6o(36160, n),
              G.v5y(0, 0, 128, 128),
              G.c4s(16640),
              G.cbf(!0, !1, !0, !1),
              G.uae(i("b"), !1, m(X.rotate(0, 180).invertSelf().translateSelf(-t, -a, .3 - e))),
              zt(i("c"), 0, 41, 0),
              G.c4s(256),
              G.cbf(!1, !0, !0, !1),
              G.uae(i("b"), !1, m(X.translate(-t, -a, -e - .3))),
              zt(i("c"), 0, 41, 0),
              G.f1s()),
              o(),
              G.b6o(36160, r),
              G.v5y(0, 0, 2048, 2048),
              f[0](vt(l, .3, 55, 10)),
              f[1](vt(l, 55, 177, 11)),
              h(),
              G.b6o(36160, null),
              G.v5y(0, 0, G.drawingBufferWidth, G.drawingBufferHeight),
              G.cbf(!0, !0, !0, !0),
              G.c4s(16640),
              f[0](),
              f[1](),
              G.uae(h("a"), !1, ct(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              G.uae(h("b"), !1, m(l)),
              G.ubu(h("k"), x, T, D),
              zt(h("c"), !V, 42, 0),
              c(),
              G.ubu(c("j"), G.drawingBufferWidth, G.drawingBufferHeight, P),
              A ? G.ubu(c("k"), 0, 0, 0) : G.ubu(c("k"), x, T, D),
              G.uae(c("b"), !1, m(l.inverse())),
              G.d97(4, 3, 5123, 0),
              G.b6o(36160, n),
              G.f1s();
          },
          r = G.c5w(),
          n = G.c5w(),
          t = G.c3z(),
          a = G.c25(),
          e = dt(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          o = pt(
            dt(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          c = pt(
            dt(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          i = pt(
            e,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          h = pt(
            e,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          f = (i(),
            G.uae(i("a"), !1, ct(1.4, .59, 1e-4, 1)),
            c(),
            G.ubh(c("q"), 3),
            h(),
            G.ubh(h("q"), 3),
            g(2, t => {
              let a = new Float32Array(16), e = G.c25(), l = h(t ? "j" : "i");
              return G.ubh(h(t ? "h" : "g"), t),
                G.b6o(36160, r),
                G.d45([0]),
                G.r9l(0),
                G.a4v(33984 + t),
                G.b9j(3553, e),
                G.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                G.t2z(3553, 10241, 9729),
                G.t2z(3553, 10240, 9729),
                G.t2z(3553, 34893, 515),
                G.t2z(3553, 34892, 34894),
                G.t2z(3553, 10243, 33071),
                G.t2z(3553, 10242, 33071),
                t => {
                  t
                    ? (m(t, a),
                      G.uae(o("b"), !1, a),
                      G.fas(36160, 36096, 3553, e, 0),
                      G.c4s(256),
                      zt(o("c"), !V, 42, 1))
                    : G.uae(l, !1, a);
                };
            }));
        G.e8z(2929),
          G.e8z(2884),
          G.c70(1),
          G.c7a(1029),
          G.d4n(515),
          G.c5t(0, 0, 0, 1),
          G.b6o(36160, n),
          G.bb1(36161, t),
          G.r4v(36161, 33189, 128, 128),
          G.f8w(36160, 36096, 36161, t),
          G.a4v(33987),
          G.b9j(3553, a),
          G.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          G.fas(36160, 36064, 3553, a, 0),
          G.a4v(33987),
          G.b9j(3553, G.c25()),
          G.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l),
          G.gbn(3553),
          G.t2z(3553, 10241, 9987),
          G.t2z(3553, 10240, 9729);
        try {
          let [e, l, t, a, s] = JSON.parse(localStorage.DanteSP22);
          q.map((t, a) => t.g = t.i = t.j = a ? 0 | e[a] : 0), O.map((t, a) => t.j = 0 | l[a]), j = t, k = a, _ = s;
        } catch {}
        F = j < 0 ? 0 : 1 < j ? 1 : j,
          gt(),
          (() => {
            let t = 0,
              o = 0,
              n = 0,
              c = 0,
              i = 0,
              h = 2,
              f = { x: 0, y: 0, z: 0 },
              m = new Int32Array(256),
              u = new Uint8Array(65536),
              M = () => {
                h = 2,
                  p =
                    I =
                    b =
                    a =
                      0,
                  t = o = q[j].u.H || 1;
              },
              g,
              v,
              d,
              p,
              a,
              b,
              I,
              A,
              P,
              S,
              Y,
              C,
              F;
            Pt = () => {
              let e = Z + (R[0] ? 1 : 0) - (R[2] ? 1 : 0),
                l = y + (R[1] ? 1 : 0) - (R[3] ? 1 : 0),
                s = navigator.getGamepads()[0];
              if (s) {
                var r = t => a[t]?.pressed || 0 < a[t]?.value ? 1 : 0;
                let a = s.buttons, t = s.axes;
                s = r(3) || r(2) || r(1) || r(0),
                  e += r(14) - r(15) - at(t[0], .2),
                  l += r(12) - r(13) - at(t[1], .2),
                  V && (H += 80 * at(t[3], .3) * Q, z += 80 * at(t[2], .3) * Q),
                  s && !g && (R[5] = 1),
                  g = s;
              }
              r = Math.atan2(l, e),
                s = at(U(Math.hypot(l, e)), .05),
                e = s * Math.cos(r),
                l = s * Math.sin(r),
                i = K(i, s, 10),
                s && (n = 90 - r / W),
                d = S = P = 0,
                G.fa7(),
                G.r9r(0, 0, 128, 128, 6408, 5121, u),
                G.iay(36008, [36064, 36096]),
                G.iay(36009, [36064, 36096]),
                (() => {
                  for (let t = 32; t < 128; t += 2) {
                    let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                    for (let r = 1 & t; r < 128; r += 2) {
                      let t = h + 4 * r,
                        a = h + 4 * (127 - r),
                        e = u[t] / 255,
                        l = u[1 + a] / 255,
                        s = 1 - E(r / 63.5 - 1);
                      10 < r && r < 118 && (n = N(n, N(e * s, e * u[a] / 255)), o = N(o, N(l * s, l * u[1 + t] / 255))),
                        (r < 54 || 74 < r) && .001 < (a = (1 - s) * (l < e ? e : l) / 3)
                        && (r < 64 && a > c ? c = a : 64 < r && a > i && (i = a));
                    }
                    E(i - c) > (P < 0 ? -P : P) && (P = i - c), E(o - n) > (S < 0 ? -S : S) && (S = o - n);
                  }
                })(),
                (() => {
                  let r = 0, n = 0, a = 0, e = 0;
                  m.fill(0);
                  for (let t = 0; t < 31; ++t) {
                    let l = 0, s = 512 * t;
                    for (let e = 0; e < 128; e++) {
                      let t = s + 4 * e, a = (u[t] + u[1 + t]) / 255;
                      t = u[2 + t],
                        14 < e && e < 114 && (l += a),
                        t && a && (a = m[t] + 1, m[t] = a, r > a || (r = a, n = t));
                    }
                    l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), d = 1);
                  }
                  n && (d = 1),
                    h ? n && (h = 0, o = n) : o = n || t,
                    t = n,
                    p = K(p, d ? 6.5 : 8, 4),
                    f.y += a / 41 - (d ? 1 : p) * e / 41 * p * Q;
                })(),
                r = U(1 - 5 * N(P < 0 ? -P : P, S < 0 ? -S : S)),
                o || (P += b * r * Q, S += I * r * Q),
                b = K(b, 0, d ? 8 : 4),
                I = K(I, 0, d ? 8 : 4),
                a = K(a, d ? (s ? d ? 7 : 4 : 0) * r : 0, d ? .1 < r ? 10 : s ? 5 : 7 : 1),
                s = Math.sin(r = V ? z * W : Math.PI) * a * Q,
                P -= e * (r = Math.cos(r) * a * Q) - l * s,
                S -= e * s + l * r,
                (() => {
                  let t = 1 === B[o].G && B[o].l || X;
                  h
                    ? ({ x: e, y: a, z: l } = q[j].I.transformPoint({ x: 0, y: 12, z: -2.5 }),
                      1 < h && (h = 1, A = L.y = a),
                      L.x = e,
                      L.z = l)
                    : ({ x: e, z: l } =
                      ((a = t.inverse()).m41 = 0, a.m42 = 0, a.m43 = 0, a.transformPoint({ x: P, z: S, w: 0 })),
                      f.x += e,
                      f.z += l),
                    o !== v && (v = o, { x: a, y: e, z: l } = t.inverse().transformPoint(L), f.x = a, f.y = e, f.z = l);
                  var { x: a, y: e, z: l } = t.transformPoint(f);
                  t = a - L.x;
                  let s = l - L.z,
                    r =
                      (L.x = a,
                        L.y = e,
                        L.z = l,
                        e < (a < -25 || l < 109 ? -25 : -9) && M(),
                        o && (b = t / Q, I = s / Q),
                        A = et(K(A, e, 2), e, 8 * E(A - e)),
                        void 0 === Y && (x = Y = a, T = (C = A = e) + 13, D = (F = l) + -36),
                        Y = K(Y, a, tt(N(.4, E(Y - a) - 1.5))),
                        C = K(C, e, tt(N(.4, E(C - e) - 2.2))),
                        F = K(F, l, tt(N(.4, E(F - l) - 1.5))),
                        V
                          ? (x = K(x, a, 666 * h + 18), T = K(T, A + 1.5, 666 * h + 18), D = K(D, l, 666 * h + 18))
                          : (x = K(x, Y, 2),
                            T = K(T, N(C + 13, 6), 2),
                            s = (D = K(D, F + -18, 2)) - F,
                            (e = at(Math.hypot(s, t = x - Y), .1))
                            && (H = 90 - Math.atan2(e, T - C) / W, z = 270 + Math.atan2(s, t) / W)),
                        H = N(H < 87 ? H : 87, -87),
                        z = lt(z),
                        1 === o && (q[9].j = a < -15 && l < 0 ? 1 : 0),
                        B[37].l = X.translate(a, A, l).rotateSelf(0, c = st(c, n, 8 * Q)));
                  [38, 39].map((t, a) => {
                    B[t].l = r.translate(0, i * U(.45 * Math.sin(9.1 * k + Math.PI * (a - 1) - Math.PI / 2)))
                      .rotateSelf(i * Math.sin(9.1 * k + Math.PI * (a - 1)) * .25 / W, 0);
                  });
                })();
            }, M();
          })(),
          requestAnimationFrame(s),
          (() => {
            let t = !0,
              a = () => {
                A || !t ? Ct.disconnect() : Ct.connect(Yt.destination), b4.innerHTML = "Music: " + t;
              },
              s = (t = !1) => {
                if (A !== t) {
                  A = t;
                  try {
                    t ? (document.exitFullscreen().catch(() => {}), document.exitPointerLock()) : Ct.start();
                  } catch {}
                  V = 0, document.body.className = t ? "l m" : "l", a(), yt();
                }
              },
              r,
              i,
              h,
              f,
              m,
              u,
              M,
              g,
              v,
              d,
              p,
              n;
            oncontextmenu = () => !1,
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b1.onclick = () => {
                document.body.requestFullscreen(), s();
              },
              b2.onclick = () => {
                document.body.requestFullscreen(), s(), V = 1;
              },
              b4.onclick = () => {
                t = !t, a();
              },
              b5.onclick = () => s(!0),
              onclick = t => {
                n = 1, A || (t.target === hC && (R[5] = !0), V && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((l = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && A)
                  ? A && !n || s(!A)
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
                  ? l && (R[e] = 1)
                  : R[e] = l);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                V && (t || a) && (z += .1 * t, H += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!A) {
                  for (let { pageX: t, pageY: a, identifier: e } of l.changedTouches) {
                    V && t > hC.clientWidth / 2
                      ? void 0 === g && (v = 0, u = t, M = a, g = e, d = z, p = H)
                      : void 0 === f && (m = 0, i = t, h = a, f = e);
                  }
                  r = P;
                }
              },
              hC.ontouchmove = l => {
                if (!A) {
                  for (let { pageX: t, pageY: a, identifier: e } of l.changedTouches) {
                    var s, r, n, o, c;
                    g === e && (z = d + (t - u) / 2.3, H = p + (a - M) / 2.3, v = 1),
                      f === e
                      && (r = (e = (i - t) / 20) < 0 ? -e : e,
                        n = (s = (h - a) / 20) < 0 ? -s : s,
                        o = Math.atan2(s, e),
                        c = U(Math.hypot(s, e) - .5),
                        Z = .2 < r ? Math.cos(o) * c : 0,
                        y = .2 < n ? Math.sin(o) * c : 0,
                        (Z || y) && (m = 1),
                        2 < r && (i = t + 20 * Math.sign(e)),
                        2 < n && (h = a + 20 * Math.sign(s)));
                  }
                }
              },
              hC.ontouchend = a => {
                let e;
                a.preventDefault();
                for (let t of a.changedTouches) {
                  t.identifier === g
                    ? (g = void 0, v || (e = 1), v = 0)
                    : t.identifier === f
                    ? (f = void 0, y = Z = 0, m || (e = 1), m = 0)
                    : e = 1;
                }
                e && a.target === hC && r && .02 < (a = P - r) && a < .7 && (R[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  R.length = Z = y = 0,
                  f = g = void 0,
                  document.hidden && s(!0);
              })(),
              s(!0);
          })();
      }
    },
    l = new Image();
  l.onload = l.onerror = e,
    l.src = St,
    (t => {
      let R = 0,
        L = new Int32Array(10725888),
        e = () => {
          let l = Yt.createBuffer(2, 5362944, 44100);
          for (let e = 0; e < 2; e++) {
            for (let t = e, a = l.getChannelData(e); t < 10725888; t += 2) {
              a[t >> 1] = L[t] / 65536;
            }
          }
          Ct.buffer = l, Ct.loop = !0, bt(t);
        },
        l = () => {
          let f = 0,
            g,
            [v, d, p, b, I, A, P, S, Y, C, F, , j, k, T, D, t, H, a, Q, B] =
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
              ]]][R];
          C = C * C * 4;
          for (let M of [5513, 4562, 3891]) {
            let s = 0,
              r = 0,
              m = [],
              u,
              n,
              o,
              c = new Int32Array(768 * M),
              i = Math.PI * 2 ** (t - 8) / M,
              h = a * M & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * R + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * M;
                for (var q, O = 0; O < 4; ++O) {
                  if (u = 0, a && (u = B[a - 1].charCodeAt(t + 32 * O) - 40, u += 0 < u ? 106 : 0), u) {
                    if (!(q = m[u])) {
                      let l = 0,
                        s = 0,
                        r,
                        n,
                        o = (q = u, M),
                        c = u,
                        i = R < 2
                          ? t => t % 1 * 2 - 1
                          : wt,
                        h = R < 2
                          ? R < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : wt,
                        f = new Int32Array(S + Y + C);
                      for (let a = 0, e = 0; S + Y + C > a; ++a, ++e) {
                        let t = 1;
                        S > a ? t = a / S : S + Y > a || (t = (1 - (t = (a - S - Y) / C)) * 3 ** (-F / 16 * t)),
                          e < 0
                          || (e -= 4 * o,
                            n = .00396 * 2 ** ((c + d - 256) / 12),
                            r = .00396 * 2 ** ((c + I - 256) / 12) * (1 + (R ? 0 : .0072))),
                          f[a] = 80
                              * (i(l += n * t ** (p / 32)) * v + h(s += r * t ** (A / 32)) * b
                                + (P ? (2 * Math.random() - 1) * P : 0))
                              * t | 0;
                      }
                      q = m[q] = f;
                    }
                    for (let t = 0, a = 2 * e; q.length > t; ++t, a += 2) c[a] += q[t];
                  }
                }
                for (let t, a = 0; M > a; ++a) {
                  O = 0,
                    ((t = c[q = 2 * (e + a)]) || o)
                    && (n = .00308 * j,
                      1 !== R && 4 !== R || (n *= Math.sin(2 ** (t - 9) / M * q * Math.PI * 2) * Q / 512 + .5),
                      n = 1.5 * Math.sin(n),
                      s += n * r,
                      g = (1 - k / 255) * (t - r) - s,
                      r += n * g,
                      t = 4 === R ? r : 3 === R ? g : s,
                      R || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= T / 32,
                      o = 1e-5 < t * t,
                      g = Math.sin(i * q) * D / 512 + .5,
                      O = t * (1 - g),
                      t *= g),
                    q < h || (O += c[1 + q - h] * H / 255, t += c[q - h] * H / 255),
                    L[f + q] += c[q] = O,
                    ++q,
                    L[f + q] += c[q] = t;
                }
              }
            }
            f += c.length;
          }
          bt(++R < 5 ? l : e);
        };
      bt(l);
    })(() => {
      bt(() => {
        let a = 0,
          l = [],
          r = [],
          n = [],
          o = [],
          c = new Map(),
          i = new Int32Array(8),
          s = t => {
            let { x: a, y: e, z: l } = h[t], s = (m[0] = a, m[1] = e, m[2] = l, c.get(t = "" + (h.D ? f : i)));
            return void 0 !== s
              ? (a = 3 * s, o[a] = (o[a++] + i[5]) / 2, o[a] = (o[a++] + i[6]) / 2, o[a] = (o[a] + i[7]) / 2)
              : (c.set(t, s = c.size), r.push(a, e, l, m[3]), n.push(i[4]), o.push(i[5], i[6], i[7])),
              s;
          },
          h,
          f = new Int32Array(i.buffer, 0, 5),
          m = new Float32Array(i.buffer);
        for (let t of B) {
          for (h of (m[3] = 40 === t.H ? -14 : t.G && t.H, t.s)) {
            let { x: t, y: a, z: e } = ot(h);
            i[4] = 0 | h.A, i[5] = 32767 * t, i[6] = 32767 * a, i[7] = 32767 * e;
            for (let t = 2, a = s(0), e = s(1); h.length > t; ++t) l.push(a, e, e = s(t));
          }
          t.s = null, t.v = a, t.F = a = l.length;
        }
        G.b11(34962, G.c1b()),
          G.b2v(34962, new Float32Array(r), 35044),
          G.v7s(0, 4, 5126, !1, 0, 0),
          G.b11(34962, G.c1b()),
          G.b2v(34962, new Int16Array(o), 35044),
          G.v7s(1, 3, 5122, !0, 0, 0),
          G.b11(34962, G.c1b()),
          G.b2v(34962, new Uint32Array(n), 35044),
          G.v7s(2, 4, 5121, !0, 0, 0),
          G.b11(34963, G.c1b()),
          G.b2v(34963, new Uint16Array(l), 35044),
          G.e3x(0),
          G.e3x(1),
          G.e3x(2),
          bt(e);
      });
      let a = g(
          11,
          t => X.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
        ),
        c = g(10, t => s(ht(ft(18), a[t]).reverse(), ht(ft(18), a[t + 1]), 1)).flat();
      v(() => d([$.slice(1)], X.translate(-2).scale3d(3).rotate(90, 0)), 0),
        v(() => {
          let t = (a, e, l) =>
              v(t => {
                t.h = () => X.translate(s() * Math.sin(3 * a + k * a) * e),
                  $.map(({ x: t, z: a }) => {
                    d(f(11, 1), X.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), I(.5, .3, .7, .6)),
                      d(f(), X.translate(4 * t, 7, l + 4 * a).scale(1, .3), I(.5, .5, .5, .3));
                  }),
                  d(M(
                    h(f(), X.translate(0, 0, l).scale(5, 1, 5), I(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      h(f(), X.translate(5 * t, .2, l).rotate(-30 * t).scale(4, 1, 2), I(.8, .8, .8, .3))
                    ),
                  )),
                  d(f(), X.translate(0, -3, l).scale(8, 2, 8), I(.4, .4, .4, .3));
              }),
            a = (t, a, e) =>
              X.translate(t + Math.sin(k + 2) / 5, a + Math.sin(.8 * k) / 3, e).rotateSelf(
                2 * Math.sin(k),
                Math.sin(.7 * k),
                Math.sin(.9 * k),
              ),
            e = t =>
              M(
                h(f(), X.translate(0, -t / 2).scale(6, t - 1, 2.2)),
                h(f(), X.translate(0, -t / 2 - 6).scale(4, t - 3, 4)),
                h(f(32, 1), X.translate(0, t / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            s = () => {
              let t = q[2].i, a = 1 - q[4].i;
              return t < a ? t : a;
            },
            l = M(
              h(f(20, 1, 1.15, 1), X.translate(0, -3).scale(3.5, 1, 3.5), I(.7, .4, .25, .7)),
              h(f(20, 1, 1.3, 1), X.translate(0, -2.5).scale(2.6, 1, 3), I(.7, .4, .25, .2)),
              h(f(), X.translate(4, -1.2).scale3d(2), I(.7, .4, .25, .3)),
            ),
            r = g(7, t => h(f(6, 1), X.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), I(.3, .3, .38))).flat(),
            n = (v(t => {
              t.h = () => a(-12, 4.2, 40 * F - 66), d(l), p(X.translate(0, -3, 4));
            }),
              p(X.translate(-5.4, 1.5, -19).rotate(0, -90)),
              b(X.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              b(
                X.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...ft(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              d(f(), X.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), I(.8, .8, .8, .2)),
              $.map(({ x: t, z: a }) => d(f(6), X.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), I(.6, .3, .3, .4))),
              [-23, 22].map(t => d(f(), X.translate(0, 0, t).scale(3, 1, 8), I(.9, .9, .9, .2))),
              [-15, 15].map((a, e) => {
                d(f(), X.translate(0, 6.3, a).scale(4, .3, 1), I(.3, .3, .3, .4)),
                  d(f(), X.translate(0, 1, a).scale(3, .2, .35), I(.5, .5, .5, .3)),
                  v(t => {
                    t.h = () => X.translate(0, 0, a).scale(1, U(1.22 - q[e + 1].g), 1), d(r);
                  });
              }),
              g(5, a =>
                g(2, t =>
                  d(
                    c,
                    X.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    I(1, 1, .8, .2),
                  ))),
              d(f(), X.translate(3, 1.5, -20).scale(.5, 2, 5), I(.7, .7, .7, .2)),
              d(f(), X.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), I(.75, .75, .75, .2)),
              d(f(5), X.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), I(.6, .3, .3, .4)),
              d(f(), X.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), I(.8, .2, .2, .5)),
              d(M(
                u(
                  h(f(6, 0, 0, .3), X.translate(8, -3, -4).scale(13, 1, 13), I(.7, .7, .7, .2)),
                  h(f(6), X.translate(0, -8).scale(9, 8, 8), I(.4, .2, .5, .5)),
                  h(f(6, 0, 0, .3), X.translate(0, -.92).scale(13, 2, 13), I(.8, .8, .8, .2)),
                ),
                h(f(5), X.scale(5, 30, 5), I(.4, .2, .6, .5)),
                h(f(5, 0, 1.5), X.translate(0, 1).scale(4.5, .3, 4.5), I(.7, .5, .9, .2)),
                h(f(), X.rotate(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), I(.5, .5, .5, .5)),
                h(f(6), X.translate(15, -1.5, 4).scale(3.5, 1, 3.5), I(.5, .5, .5, .5)),
              )),
              v(t => {
                t.h = () =>
                  X.translate(
                    0,
                    .01 < q[3].g ? (5 * Math.cos(1.5 * k) + 2) * q[3].i * (1 - q[2].g) + -15 * (1 - q[3].g) : -500,
                    0,
                  ),
                  d(f(5), X.translate(0, -.2).scale(5, 1, 5), I(.6, .65, .7, .3)),
                  p(X.translate(0, 1.2));
              }),
              p(X.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              v(t => {
                t.h = () => X.translate(s() * Math.sin(k / 1.5 + 2) * 12),
                  d(
                    M(
                      u(
                        h(f(), X.scale(1.5, 1, 5), I(.9, .9, .9, .2)),
                        h(f(6), X.scale(4, 1, 5), I(.9, .9, .9, .2)),
                        h(f(), X.translate(0, -2).scale(2, 3.2, 1.9), I(.3, .8, .5, .5)),
                        h(f(16, 1, 0, 4), X.scale(1, 1, 1.5).rotate(0, 90), I(.9, .9, .9, .2)),
                      ),
                      h(f(), X.scale(1.3, 10, 1.3), I(.2, .7, .4, .6)),
                    ),
                    X.translate(0, 0, 45),
                  ),
                  b(X.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              d(f(), X.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), I(.9, .9, .9, .2)),
              v(t => {
                t.h = () => X.translate(9.8 * (1 - s())),
                  d(f(3), X.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), I(.3, .6, .6, .2)),
                  d(f(8), X.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), I(.8, .8, .8, .2)),
                  d(f(), X.translate(-23, -3, 55).scale(5.2, 1.7, 3), I(.5, .5, .5, .3)),
                  d(f(), X.translate(-23, -2.2, 62).scale(3, 1, 4), I(.5, .5, .5, .3)),
                  p(X.translate(-23, -.5, 66.5));
              }),
              v(t => {
                t.h = () => X.translate(0, U(1 - 5 * s()) * i(q[4].g, q[5].g) * Math.sin(1.35 * k) * 4),
                  d(f(), X.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), I(.7, .7, .7, .2)),
                  d(
                    M(h(f(), X.scale(3, 1.4, 2.7)), h(f(), X.scale(1.2, 8, 1.2))),
                    X.translate(-33, -3, 55),
                    I(.7, .7, .7, .2),
                  );
              }),
              v(t => {
                t.h = () => X.translate(0, 0, U(1 - 5 * s()) * i(q[4].g, q[5].g) * Math.sin(.9 * k) * 8),
                  d(M(
                    h(f(), X.translate(-27, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2)),
                    h(f(), X.translate(-27, -3, 55).scale(1, 3), I(.9, .9, .9, .2)),
                  )),
                  d(f(), X.translate(-39, -3, 55).scale(3, 1.4, 2.7), I(.9, .9, .9, .2));
              }),
              v(t => {
                t.h = () => X.translate(0, -6.5 * q[4].i),
                  d(
                    f(6),
                    X.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    I(.7, .7, .7, .4),
                  );
              }),
              p(X.translate(-55, -1.1, 46).rotate(0, 90)),
              d(f(6), X.translate(-61.3, -2.4, 49).scale(3, 1, 5), I(.4, .6, .6, .3)),
              d(f(7), X.translate(-57, -2.6, 46).scale(4, 1, 4), I(.8, .8, .8, .3)),
              [
                ...h(f(), X.translate(0, -3).scale(11, 1.4, 3), I(.9, .9, .9, .2)),
                ...M(
                  h(f(6), X.rotate(90).scale(6, 8, 6), I(.3, .6, .6, .3)),
                  h(f(4, 0, .01), X.translate(0, 6).scale(12, 2, .75).rotate(0, 45), I(.3, .6, .6, .3)),
                  h(f(6), X.rotate(90).scale(5, 12, 5), I(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(t =>
                    h(f(5), X.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), I(.3, .6, .6, .3))
                  ),
                ),
              ]),
            o = (d(n, X.translate(-53, 0, 55)),
              v(t => {
                t.h = () => X.translate(-75, (1 - q[5].i) * (1 - q[6].g) * 3, 55).rotate(180 * (1 - q[5].i) + C, 0),
                  d(n);
              }, 2),
              d(f(), X.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), I(.7, .7, .7, .2)),
              d(f(3, 0, -.5), X.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), I(.8, .8, .8, .2)),
              d(M(
                u(
                  h(f(), X.translate(-100, -2.5, 55).scale(8, 1, 8), I(.8, .8, .8, .2)),
                  h(f(), X.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), I(.8, .8, .8, .2)),
                  h(f(), X.translate(-100, -2.6, 70).scale(3, 1.1, 7), I(.8, .8, .8, .2)),
                  h(f(), X.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), I(.8, .8, .8, .2)),
                  h(f(6), X.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), I(.6, .6, .6, .3)),
                  h(f(), X.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), I(.8, .8, .8, .2)),
                  h(f(), X.translate(-100, .42, 92).scale(3, 1.1, 4.1), I(.8, .8, .8, .2)),
                ),
                h(f(8), X.translate(-100, -1, 55).scale(7, .9, 7), I(.3, .3, .3, .4)),
                h(f(8), X.translate(-100, -2, 55).scale(4, .3, 4), I(.4, .4, .4, .5)),
                h(f(8), X.translate(-100, -3, 55).scale(.6, 1, .6), I(.4, .4, .4, .5)),
              )),
              b(X.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              b(X.translate(-89, .2, 80), [0, 0, 6]),
              d(M(
                h(f(), X.translate(-100, 1, 63).scale(7.5, 4), I(.5, .5, .5, .4)),
                h(f(), X.translate(-100, 0, 70).scale(2, 2, 10), I(.5, .5, .5, .4)),
                h(f(20, 1), X.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), I(.5, .5, .5, .4)),
              )),
              v(t => {
                t.h = () => X.translate(-99.7, -1.9, 63.5).scale(1, U(1.1 - q[6].g), 1), d(r);
              }),
              $.map(({ x: a, z: e }) => {
                d(f(6), X.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), I(.6, .15, .15, .8)),
                  [4, -.4].map(t =>
                    d(f(6), X.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), I(.4, .2, .2, .8))
                  );
              }),
              g(7, t => {
                d(
                  f((23 * t + 1) % 5 + 5, 0, .55),
                  X.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                    5 + t / 2,
                    1 + t / 6,
                    5 + t / 3,
                  ),
                  I(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                );
              }),
              d(f(), X.translate(-87, -9.5, 24).scale(7, 1, 3), I(.4, .5, .6, .4)),
              d(f(4), X.translate(-86, -9.2, 27).scale(5, 1, 5), I(.5, .6, .7, .3)),
              d(f(12, 1), X.translate(-86, -9, 31).scale(1.5, 1, 1.5), I(.3, .3, .4, .1)),
              p(X.translate(-86, -7.5, 31)),
              v(t => {
                t.h = () => X.translate(0, 3.5 * (1 - N(q[6].g, q[7].g)) + i(q[7].i, q[6].i) * Math.sin(k) * 5),
                  [0, 12, 24].map(t =>
                    d(f(), X.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), I(.2, .5, .6, .2))
                  );
              }),
              v(t => {
                t.h = () =>
                  X.translate(0, i(q[7].i, q[6].i) * Math.sin(k + 3) * 6, 6 * Math.sin(.6 * k + 1) * i(q[7].i, q[6].i)),
                  [6, 18].map(t =>
                    d(f(), X.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), I(.1, .4, .5, .2))
                  );
              }),
              d(
                M(
                  u(
                    h(f(5), X.translate(0, 0, -7).scale(2, 1.2, 2), I(.2, .4, .7, .3)),
                    h(f(5), X.scale(9, 1.2, 9), I(0, .2, .3, .5)),
                    h(f(), X.scale(11, 1, 13), I(.3, .4, .6, .3)),
                  ),
                  h(f(5), X.scale(5.4, 5, 5.4), I(0, .2, .3, .5)),
                ),
                X.translate(-38.9, -11.3, 17),
              ),
              p(X.translate(-38.9, -9.6, 10)),
              v(t => {
                t.h = () => X.translate(0, -7.3 * q[7].i),
                  d(
                    M(
                      u(
                        h(f(5), X.translate(0, 2).scale(5, 7, 5).skewY(8), I(.2, .4, .5, .5)),
                        h(f(5), X.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), I(.25, .35, .5, .5)),
                        h(f(5), X.translate(0, 9).scale(.6, 7, .6).skewY(8), I(.35, .3, .5, .5)),
                      ),
                      h(f(5), X.scale(4, 8, 4), I(.2, .4, .5, .5)),
                      h(f(5), X.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), I(.2, .4, .5, .5)),
                    ),
                    X.translate(-38.9, -11.3, 17),
                  ),
                  b(X.translate(-39.1, -.6, 17).rotate(11), ...ft(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.2]));
              }),
              $.map(({ x: a, z: e }) => {
                d(f(14, 1), X.translate(9 * a - 38.9, -7.3, 11 * e + 17).scale(1, 4), I(.25, .25, .25, 1)),
                  [1.5, 8].map(t =>
                    d(
                      f(17, 1),
                      X.translate(9 * a - 38.9, -7.3, 11 * e + 17).translate(0, t - 4).scale(1.5, .5, 1.5),
                      I(.6, .6, .6, .3),
                    )
                  );
              }),
              d(
                M(
                  u(
                    h(f(6), X.translate(0, 0, -36).scale(15, 1.2, 15), I(.7, .7, .7, .3)),
                    h(f(), X.translate(0, 0, -18).scale(4, 1.2, 6), I(.45, .4, .6, .3)),
                  ),
                  ...g(6, a =>
                    g(6, t =>
                      h(
                        f(6),
                        X.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                        I(.7, .7, .7, .3),
                      ))).flat(),
                ),
                X.translate(-38.9, -11.3, 17),
              ),
              b(X.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              d(f(5), X.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), I(.8, .1, .25, .4)),
              p(X.translate(-84, -.5, 85).rotate(0, 45)),
              v(t => {
                t.h = () => a(-123, 1.4, 55 + -65 * _), d(l), p(X.translate(0, -3, -4).rotate(0, 180));
              }),
              M(
                h(f(), X.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), I(.25, .25, .35, .3)),
                h(f(3), X.translate(0, 0, -5.5).scale(3, 2), I(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(t => h(f(), X.translate(t, -.5, 1).scale(.14, .3, 6.5), I(.7, .2, 0, .3))),
              ));
          v(t => {
            t.h = () => X.translate(0, -2, i(q[10].g, q[11].g) * E(Math.sin(1.1 * k)) * -8.5 + 10),
              g(2, t => d(o, X.translate(9 * t - 110 + (1 & t), 1.7, -12)));
          }),
            v(t => {
              t.h = () => X.translate(0, -2, i(q[10].g, q[11].g) * E(Math.sin(2.1 * k)) * -8.5 + 10),
                g(2, t => d(o, X.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
            }),
            v(t => {
              t.h = () =>
                X.translate(
                  0,
                  -2,
                  -8.5 * N((1 - q[10].g) * (1 - i(q[10].g, q[11].g)), i(q[10].g, q[11].g) * E(Math.sin(1.5 * k))) + 10,
                ), g(3, t => d(o, X.translate(9 * t - 106, 1.7, -12)));
            }),
            d(
              M(
                u(
                  h(f(), X.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
                  h(f(), X.translate(26.5, -.6, 10).scale(19, 2, .5)),
                ),
                ...g(4, t => h(f(), X.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                ...g(3, t => h(f(), X.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              X.translate(-123, 0, -12),
              I(.5, .5, .6, .2),
            ),
            p(X.translate(-116, -1.4, -18).rotate(0, 180)),
            d(f(), X.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), I(.8, .8, .8, .2)),
            d(f(6), X.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), I(.6, .5, .7, .2)),
            d(f(), X.translate(-115.5, -17, -12).scale(.5, 15, 2.2), I(.6, .6, .6, .3)),
            d(f(8), X.translate(-114, -17, -2).scale(2, 15, 2), I(.6, .6, .6, .3)),
            d(f(8), X.translate(-79, -17, -2).scale(2, 15, 2), I(1, 1, 1, .3)),
            d(f(), X.translate(-77, -17, -50.5).scale(2.2, 15, .5), I(.6, .6, .6, .3)),
            g(3, t => {
              d(e(16), X.translate(12 * t - 109, -9, -12), I(.6, .6, .6, .3)),
                d(e(16), X.translate(-77, -9, -12 * t - 20).rotate(0, 90), I(.6, .6, .6, .3));
            }),
            d(M(
              h(f(12), X.translate(-77, -14.5, -12).scale(4, 17.5, 4), I(.7, .7, .7, .2)),
              h(f(), X.translate(-79, .1, -12).scale(3.5, 2, 1.3), I(.4, .5, .6, .2)),
              h(f(), X.translate(-77, .1, -14).scale(1.5, 2, 2), I(.4, .5, .6, .2)),
              h(f(12), X.translate(-77, 3.1, -12).scale(3, 5, 3), I(.4, .5, .6, .2)),
            )),
            d(f(), X.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), I(.6, .6, .6, .3)),
            d(f(9), X.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), I(.5, .5, .5, .3)),
            d(M(
              h(f(), X.translate(-93, -5.8, -40).scale(9, 1, 5), I(.8, .8, .8, .1)),
              h(f(9), X.translate(-98, -5.8, -40).scale(3, 8, 3), I(.7, .7, .7, .2)),
            )),
            p(X.translate(-98, -4.4, -40).rotate(0, 90)),
            b(X.translate(-115, .2, -12), [0, 0, 3.5]),
            b(X.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            d(M(
              u(
                h(f(6, 0, 0, .6), X.translate(-100, .7, 105.5).scale(8, 1, 11), I(.7, .7, .7, .2)),
                h(f(), X.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), I(.7, .7, .7, .2)),
              ),
              h(f(5), X.translate(-100, .7, 113).scale(4, 3, 4), I(.7, .7, .7, .2)),
            )),
            g(4, a =>
              v(t => {
                t.h = () => {
                  let t = i(q[8].i, q[12].i);
                  return X.translate(
                    (2 < a ? 2 * (1 - t) + t : 0) - 100,
                    t * Math.sin(1.3 * k + 1.7 * a) * (3 + a / 3) + .7,
                    115 + (1 & a ? -1 : 1) * (1 - q[8].i) * (1 - q[12].i) * -7
                      + (t < .05 ? .05 : t) * Math.cos(1.3 * k + 7 * a) * (4 - 2 * (1 - a / 3)),
                  );
                },
                  d(
                    f(6),
                    X.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                    I(.5 - a / 8, a / 12 + .5, .7, .3),
                  );
              })),
            v(t => {
              t.h = () => {
                let t = i(q[8].i, q[12].i);
                return X.translate(2.5 * (1 - t) - 139.7, -3 * (1 - q[8].g) + t * Math.sin(.8 * k) * -1 - 1.8, 93.5)
                  .rotateSelf(Math.cos(1.3 * k) * (3 * t + 3), 0);
              },
                d(M(h(f(10), X.scale(6, 2, 6), I(.1, .6, .5, .3)), h(f(10), X.scale(3.3, 6, 3.3), I(.1, .6, .5, .5)))),
                d(f(15, 1), X.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), I(.4, .4, .4, .3)),
                d(f(10), X.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), I(.3, .8, .7, .3)),
                d(f(5), X.translate(-7.5).rotate(0, 90).scale(1, 3), I(.5, .5, .5, .5)),
                p(X.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(t =>
                  d(c, X.rotate(90 * -t, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), I(1, 1, .8, .2))
                ),
                b(X.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(a => {
              d(f(12, 1), X.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), I(.6, .24, .2, .5)),
                [7.2, 1.5].map(t =>
                  d(f(15, 1), X.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), I(.5, .24, .2, .4))
                ),
                d(c, X.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), I(1, 1, .8)),
                d(
                  M(
                    h(f(), X.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), I(.5, .5, .5, .4)),
                    h(f(), X.scale(3, 3, 10), I(.6, .24, .2, .5)),
                    h(f(28, 1), X.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), I(.6, .24, .2, .5)),
                    h(f(5), X.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), I(.6, .24, .2, .5)),
                    h(f(5), X.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), I(.6, .24, .2, .5)),
                  ),
                  X.translate(a - 100, .7, 97),
                );
            }),
            v(t => {
              t.h = () => X.translate(-100, .6, 96.5).scale(.88, 1.2 - q[12].g), d(r);
            }),
            d(M(
              h(f(), X.translate(-82.07, .8, 106).scale(11, .9, 2.2), I(.7, .7, .7, .1)),
              h(f(45, 1), X.translate(-81, .7, 106).scale3d(7.7), I(.7, .7, .7, .1)),
            )),
            v(t => {
              t.h = () => X.translate(-81, .6, 106).rotate(0, 40 + S),
                d(M(
                  h(f(45, 1), X.scale(7.5, 1, 7.5), I(.45, .45, .45, .2)),
                  h(f(), X.translate(0, 0, -5.5).scale(1.5, 3, 2.7), I(.45, .45, .45, .2)),
                )),
                d(f(8), X.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), I(.7, .7, .7, .1)),
                d(f(5), X.translate(0, 2).scale(1, 2), I(.3, .3, .3, .2)),
                b(X.translate(0, 3), ...ft(14).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2]));
            }),
            v(t => {
              t.h = () => X.translate(-65.8, .8, 106).rotate(0, Y),
                [-1, 1].map(t =>
                  d(
                    c,
                    X.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                    I(1, 1, .8),
                  )
                ),
                d(M(
                  h(f(28, 1), X.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  h(f(), X.scale(9, 5, 2), I(.3, 0, 0, .3)),
                )),
                d(h(f(28, 1), X.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                d(h(f(5), X.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            v(t => {
              t.h = () => X.translate(-50.7, .8, 106).rotate(0, 180 - Y),
                d(M(
                  h(f(28, 1), X.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  h(f(), X.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                  h(f(), X.translate(0, 0, 7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                )),
                d(h(f(28, 1), X.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                d(h(f(5), X.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            v(t => {
              t.h = () => X.translate(-50.7, .8, 91).rotate(0, 270 + Y),
                d(M(
                  h(f(28, 1), X.translate(0, 2).scale(7.5, 1, 7.5), I(.35, 0, 0, .3)),
                  h(f(), X.translate(7).scale(9, 5, 2), I(.3, 0, 0, .3)),
                  h(f(), X.translate(0, 0, -7).scale(2, 5, 9), I(.3, 0, 0, .3)),
                )),
                d(h(f(28, 1), X.scale(7.5, 1, 7.5), I(.45, .45, .45, .2))),
                d(h(f(5), X.translate(0, 1).scale(1, .2), I(.3, .3, .3, .2)));
            }),
            d(f(), X.translate(-58, 1, 106).scale(2, .65, 2), I(.7, .7, .7, .2)),
            d(f(), X.translate(-50.7, 1, 99).scale(2, .65, 1), I(.7, .7, .7, .2)),
            d(f(), X.translate(-42, .4, 91).scale(5, 1, 2.5), I(.7, .7, .7, .3)),
            d(f(), X.translate(-34.2, .4, 91).scale(3, 1, 3), I(.7, .7, .7, .3)),
            p(X.translate(-34, 2.7, 96).rotate(-12, 0)),
            d(f(5), X.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), I(.2, .5, .5, .6)),
            [I(.1, .55, .45, .2), I(.2, .5, .5, .3), I(.3, .45, .55, .4)].map((a, e) =>
              v(t => {
                t.h = () =>
                  X.translate(
                    0,
                    (1 - q[13].i) * (1 - q[14].i) * (e ? 0 : 3) + i(q[13].i, q[14].i) * Math.sin(1.5 * k + 1.5 * e) * 4,
                  ),
                  d(f(), X.translate(-23.5, .5, 91 + 6.8 * e).scale(1 === e ? 2 : 3.3, 1, 3.3), a),
                  2 === e && d(f(), X.translate(-29.1, .4, 91).scale(2.1, 1, 3), I(.7, .7, .7, .3)),
                  1 === e
                  && d(f(), X.translate(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), I(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(t => d(c, X.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), I(1, 1, .8))),
            g(3, t =>
              d(
                e(24.7 - .7 * (1 & t)),
                X.translate(6 * t - 6, 4 - (1 & t), 111 - .2 * (1 & t)),
                1 & t ? I(.5, .5, .5, .3) : I(.35, .35, .35, .5),
              )),
            d(M(
              h(f(6, 0, 0, .3), X.translate(0, -.92, 95).scale(14, 2, 14), I(.8, .8, .8, .2)),
              h(f(5), X.translate(0, 0, 95).scale3d(6), I(.3, .3, .3, .5)),
            )),
            p(X.translate(0, 1.7, 82).rotate(0, 180)),
            d(f(5), X.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), I(.5, .3, .3, .4)),
            d(f(6), X.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), I(.5, .6, .7, .3)),
            d(f(), X.translate(0, 16, 129).scale(1.5, 1, 2), I(.5, .6, .7, .3)),
            d(f(7), X.translate(0, 16.2, 133).scale(5, 1, 5), I(.4, .5, .6, .4)),
            d(M(
              u(
                h(f(), X.translate(0, 16, 110.5).scale(12, 1, 3), I(.5, .3, .3, .4)),
                h(f(), X.translate(0, 16, 111).scale(3, 1, 3.8), I(.5, .3, .3, .4)),
              ),
              h(f(5), X.translate(0, 16, 103.5).scale(5.5, 5, 5.5), I(.5, .3, .3, .4)),
            )),
            v(t => {
              t.h = () => {
                let t = Math.sin(k);
                return X.translate(-2 * t).rotate(25 * t);
              },
                d(f(3), X.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), I(.5, .3, .3, .4)),
                [22, 30].map(t => {
                  d(f(6), X.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), I(.7, .7, .7, .4)),
                    d(f(), X.translate(0, 6.2, t + 95).scale(.5, 11, .5), I(.5, .3, .3, .4));
                });
            }),
            v(t => {
              t.h = () => {
                let t = i(i((q[14].g + q[14].i) / 2, q[13].i), (q[15].g + q[15].i) / 2);
                return X.translate(0, 16 * t, 8.5 * U(2 * t - 1) + 95);
              },
                d(f(5), X.scale(5, 1.1, 5), I(.5, .3, .3, .4)),
                d(f(5), X.scale(5.5, .9, 5.5), I(.25, .25, .25, .4)),
                p(X.translate(0, 1.5, -1).rotate(0, 180));
            }),
            b(X.translate(0, 3, 95), ...ft(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            b(X.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        v(() => {
          [0, 180].map(t => d(c, X.rotate(0, t).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), I(1, 1, .8))),
            d(n(20), X.translate(0, 1).scale(.5, .5, .5), I(1, .3, .4));
          let a = h(
            M(f(15, 1), h(f(), X.translate(0, 0, 1).scale(2, 2, .5))),
            X.rotate(-90, 0).scale(.1, .05, .1),
            I(.3, .3, .3),
          );
          [-1, 1].map(t => d(a, X.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            d(f(), X.translate(0, .9, .45).scale(.15, .02, .06), I(.3, .3, .3)),
            d(n(20), X.scale(.7, .8, .55), I(1, .3, .4));
        }),
        [-1, 1].map(t =>
          v(() => {
            d(f(10, 1), X.translate(.3 * t, -.8).scale(.2, .7, .24), I(1, .3, .4));
          })
        ),
        v(() => {
          d(f(6, 1), X.scale(.13, 1.4, .13), I(.3, .3, .5, .1)),
            d(f(10), X.translate(0, 1).scale(.21, .3, .21), I(1, .5, .2)),
            d(f(3), X.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), I(.2, .2, .2, .1));
        }, 0),
        v(() => {
          d(f(6).slice(0, -1), X.scale(.77, 1, .77), I(1, .3, .5));
        }, 0),
        v(() => {
          d(
            n(30, 24, (t, a, e) => {
              let l = a / 24, s = t * Math.PI * 2 / 30, r = l ** .6 * Math.PI / 2;
              return t = l * l * Math.sin(t * Math.PI * 14 / 30) / 4,
                23 === a
                  ? { x: e.D = 0, y: -.5, z: 0 }
                  : {
                    x: Math.cos(s) * Math.sin(r),
                    y: Math.cos(l * Math.PI) - l - t,
                    z: Math.sin(s) * Math.sin(r) + Math.sin(t * Math.PI * 2) / 4,
                  };
            }),
            X.scale3d(.7),
            I(1, 1, 1),
          ), [-1, 1].map(t => d(n(12), X.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
