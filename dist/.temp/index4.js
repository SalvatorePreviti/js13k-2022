let V = 0,
  C = 0,
  S = 0,
  T = 0,
  F = 0,
  i = 0,
  j = 0,
  a = 0,
  _ = 0,
  y = 0,
  x = 0,
  Z = 0,
  D = 0,
  z = 0,
  H = .066,
  Q = 1,
  k = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  B = [],
  w = [],
  q = [],
  O = [],
  R = { x: 0, y: 0, z: 0 },
  L = { x: 0, y: 0, z: 0 },
  X = Math.PI / 180,
  W = new DOMMatrix(),
  l = new Float32Array(16),
  r = new Float32Array(624),
  M = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  N = (t, a) => a < t ? t : a,
  E = t => t < 0 ? -t : t,
  U = (t, a = 0, e = 1) => t < a ? a : e < t ? e : t,
  $ = (t, a) => a < (t < 0 ? -t : t) ? t : 0,
  tt = (t, a, e) => t + (a - t) * U(e),
  h = (t, a) => (t = U(t)) + (1 - t - t) * U(a),
  at = t => Math.atan2(Math.sin(t *= X), Math.cos(t)) / X,
  et = (t, a, e) => t + (2 * (a = (a - t) % 360) % 360 - a) * U(e),
  lt = ({ x: t, y: a, z: e }) => Math.hypot(t - R.x, a - R.y, e - R.z),
  st = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  rt = t => {
    let a = 0, e = 0, l = 0, s, r = t.at(-1);
    for (s of t) a += (r.y - s.y) * (r.z + s.z), e += (r.z - s.z) * (r.x + s.x), l += (r.x - s.x) * (r.y + s.y), r = s;
    return s = Math.hypot(a, e, l), a /= s, e /= s, l /= s, { x: a, y: e, z: l, w: a * r.x + e * r.y + l * r.z };
  },
  v = (
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
  nt = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  ot = (t, a, e) => (t.D = e, t.A = a, t),
  ct = (t, l, a = t.A) =>
    ot(
      t.map(t => {
        let a, e;
        return { x: t, y: a, z: e } = t,
          { x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }),
          { x: t, y: a, z: e };
      }),
      a,
      t.D,
    ),
  f = (t, a, e) => t.map(t => ct(t, a, e)),
  m = (e, l = 0) =>
    M(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  s = (l, s, r) =>
    l.map((t, a, { length: e }) => ot([t, s[e - a - 1], s[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, r)),
  u = (
    t,
    a,
    e = 0,
    l,
  ) => (t = t ? m(t, l) : k,
    l = ct(t, W.translate(0, 1).scale3d(0 < e ? e : 1)),
    t = ct(t, W.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
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
        let t = ot([], 0, 1);
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
      if ((r = st(l, c[t]) - l.w) < -8e-5 ? o = s : 8e-5 < r && (n = s), o && n) {
        n = [], o = [], c = s.C, t = s.B;
        let a = c.at(-1), e = st(l, a) - l.w;
        for (let t of c) {
          r = st(l, t) - l.w,
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
          o: 2 < n.length && { C: ot(n, c.A, c.D), B: t, s: s },
          m: 2 < o.length && { C: ot(o, c.A, c.D), B: t, s: s },
        };
      }
    }
    return { o: n, m: o };
  },
  o = (t, a, e = rt(a.C)) => {
    let l, s, r;
    return t
      ? ({ o: l, m: s } = c(t, a), l || s || t.u.push(a), l && (t.o = o(t.o, l, e)), s && (t.m = o(t.m, s, e)))
      : ({ x: l, y: s, z: e, w: r } = e, t = { x: l, y: s, z: e, w: r, u: [a], o: 0, m: 0 }),
      t;
  },
  e = (a, s, r) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = c(t, a);
        e || l || (0 < r * st(t, s) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of s.u) o(a, t);
    return n;
  },
  it = (t, a) => t && (a(t), it(t.o, a), it(t.m, a)),
  ht = t => t.length ? t.reduce((t, a) => o(t, { C: a, B: 0, s: 0 }), 0) : t,
  ft = t => (it(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.u) t.B = !t.B;
  }),
    t),
  g = (...t) =>
    t.reduce((l, a) => {
      let s = [];
      if (l = ht(l), a) {
        a = ht(a), it(l, t => t.u = e(a, t, 1)), it(a, t => s.push([t, e(l, t, -1)]));
        for (let [a, e] of s) for (let t of e) o(l, t, a);
      }
      return l;
    }),
  d = (...t) => {
    let e = new Map(),
      l = new Map(),
      s = t => {
        let a;
        return t.s && ((a = e.get(t.s)) ? (l.delete(a), t = s(t.s)) : e.set(t.s, t)), t;
      },
      a;
    return [t, ...a] = [...t],
      t = ft(g(ft(ht(t)), ...a)),
      it(t, a => {
        for (let t of a.u) l.set(s(t), t.B);
      }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return ot(a ? e.reverse() : e, t.A, t.D);
      });
  },
  K = (t, a, e) => t + (a - t) * U(1 - Math.exp(-e * H)),
  mt = () => {
    let t = h(w[12].g, w[13].g);
    j = tt(K(j, 0, 1), at(j + 60 * H), w[5].g - w[6].i),
      F = tt(K(F, 0, 5), at(F + 56 * H), t),
      i = tt(K(i, 0, 4), at(i + 48 * H), t),
      y = K(y, w[9].i, .2 + .3 * E(2 * w[9].i - 1)),
      _ = K(_, a ? K(_, -9, 1.5) : U(S / 3), 1),
      Q && S > Q && (Q = 0, h4.innerHTML = ""),
      w[0].j && .8 < w[0].g && (V < 13
        ? (1 / 0 > Q && (Q = S + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), w[0].j = 0)
        : a
          || (1 / 0 > Q && (Q = S + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
            a = 1));
    for (let t of B) t.h && (t.l = t.h());
    for (let t of w) t.h();
    for (let t of q) t.h();
  },
  ut = () => {
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
      ][V = q.reduce((t, { j: a }) => t + a, 0)] + " / XIII";
  },
  yt = () => {
    localStorage.I = JSON.stringify([w.map(({ j: t }) => t), q.map(({ j: t }) => t), T, S, y]);
  },
  p = (t, a = 1) => {
    let e = bt;
    return B.push(bt = a = { l: W, F: B.length, H: a, u: [] }), t(a), bt = e, a;
  },
  b = (t, a = W, e) => bt.u.push(...f(t, a, e)),
  I = s => {
    let r = bt,
      n = w.length,
      o = {
        j: 0,
        g: 0,
        i: 0,
        s: r,
        h() {
          let t = o.j, a = o.g, e = o.i, l = r.l.multiply(s);
          o.J = l,
            lt(l.transformPoint()) < 3 && O[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && 1 / 0 > Q && (Q = S + 1, h4.innerHTML = "* click *"), T = n, yt()),
            o.g = K(a, t, 4),
            o.i = K(e, t, 1),
            o.l = l.rotate(60 * o.g - 30, 0).translateSelf(0, 1);
        },
      };
    w.push(o),
      b(u(5), s.translate(-.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
      b(u(5), s.translate(.2).rotate(90, 90).scale(.4, .1, .5), P(.4, .5, .5)),
      b(u(), s.translate(0, -.4).scale(.5, .1, .5), P(.5, .5, .4));
  },
  A = (f, ...t) => {
    let m = -1,
      u = 0,
      g = 0,
      M = 0,
      v = 0,
      d = 0,
      p = 1,
      b = 3,
      I = {
        j: 0,
        h() {
          let i, h;
          if (!I.j) {
            let s = 1, r = 1 / 0, t, a, e, l, n, o, c;
            for (let l of P) {
              let { x: t, z: a, w: e } = l;
              a = (t = Math.hypot(C - t, F - a)) - e,
                c ||= t < e,
                0 < a && r > a && (r = a, Y = l),
                s = (i = t / e) > s ? s : i;
            }
            c
            || ({ x: t, z: a, w: e } = Y,
              l = C - t,
              n = F - a,
              o = Math.hypot(l, n),
              h = Math.atan2(-n, l),
              p && (g = (Math.random() - .5) * Math.PI / 2, b = U(b / (1 + Math.random()))),
              m = -Math.cos(h += g),
              u = Math.sin(h),
              .1 < o && (o = (o < e ? o : e) / (o || 1), C = l * o + t, F = n * o + a)),
              p = c,
              b = K(b, 6 * (1 - s) + 3, s + 3),
              j = K(j, C = K(C, C + m, b), b),
              k = K(k, F = K(F, F + u, b), b),
              M = et(M, Math.atan2(j - v, k - d) / X - 180, 3 * H),
              v = j,
              d = k,
              h = (I.l = A.l.multiply(f.translate(j, 0, k).rotateSelf(0, M, 7 * Math.sin(1.7 * S)))).transformPoint(),
              lt(h) < 1.55
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
                ][V] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > Q && (Q = S + (V && V < 12 ? 5 : 7), h4.innerHTML = i),
                ut(),
                yt());
          }
          I.j
            && (I.l = B[2].l.translate(
              a % 4 * 1.2 - 1.7 + Math.sin(S + a) / 7,
              -2,
              1.7 * (a / 4 | 0) - 5.5 + E(a % 4 - 2) + Math.cos(S / 1.5 + a) / 6,
            ));
        },
      },
      A = bt,
      a = q.length,
      P = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      Y = P[0],
      { x: C, z: F } = Y,
      j = C,
      k = F;
    q.push(I);
  },
  xt = (t, a, e, l) => {
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
      g = new DOMMatrix(nt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return a = M(
      8,
      t => (t = g.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        s -= t.x = (u * t.x | 0) / u / t.w,
        r -= t.y = (u * t.y | 0) / u / t.w,
        n -= t.z = (u * t.z | 0) / u / t.w,
        t),
    ),
      e = W.rotate(298, 139).translateSelf(s / 8, r / 8, n / 8),
      ct(a, e).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          m = m > e ? m : e;
      }),
      f *= f < 0 ? l : 1 / l,
      m *= 0 < m ? l : 1 / l,
      W.scale(2 / (c - o), 2 / (h - i), 2 / (f - m)).translateSelf((c + o) / -2, (h + i) / -2, (f + m) / 2)
        .multiplySelf(e);
  },
  gt = (t, a = 35633) => (a = G.c6x(a), G.s3c(a, t), G.c6a(a), a),
  Mt = (t, a) => {
    let e = {}, l = G.c1h();
    return G.abz(l, t), G.abz(l, gt(a, 35632)), G.l8l(l), t => t ? e[t] || (e[t] = G.gan(l, t)) : G.u7y(l);
  },
  zt = (t, a, e, l) => {
    if (Y) {
      for (var s of (e = W.rotate(0, 40 * Math.sin(C) - 70), [37, 38, 39])) v(e, r, s - 1);
      G.uae(t, !1, r), G.d97(4, B[39].G - B[37].v, 5123, 2 * B[37].v);
    } else {
      for (s = 0; B.length > s; ++s) B[s].H && v(B[s].l, r, s - 1);
      for (G.uae(t, !1, r), G.d97(4, (a ? B[39].G : B[37].v) - 3, 5123, 6), a = 0; a < 13; ++a) v(q[a].l, r, a);
      for (a = 0; w.length > a; ++a) v(w[a].l, r, a + 13), l || (r[16 * (a + 13) + 15] = 1 - w[a].g);
      G.uae(t, !1, r),
        G.das(4, B[e].G - B[e].v, 5123, 2 * B[e].v, 13),
        G.das(4, B[40].G - B[40].v, 5123, 2 * B[40].v, w.length);
    }
  },
  vt = t => {
    h4.innerHTML += ".", setTimeout(t);
  },
  dt = t => Math.sin(t * Math.PI * 2),
  P = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  Y,
  pt,
  bt,
  J,
  wt,
  It = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  At = new AudioContext(),
  Pt = At.createBufferSource(),
  G = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (let t in G) G[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = G[t];
vt(() => {
  let t = 0,
    e = () => {
      if (2 == ++t) {
        let o = t => {
            let a,
              e,
              { x: l, y: s, z: r } =
                (G.f1s(),
                  requestAnimationFrame(o),
                  n = (t - (pt || t)) / 1e3,
                  Y ? (H = 0, O[5] = 0) : H = .066 < n ? .066 : n,
                  S += H,
                  C += n,
                  pt = t,
                  0 < H && (mt(), wt(), O[5] = 0),
                  L);
            Y && (l = -4.5, s = 2, r = 3.2 - U(hC.clientWidth / 1e3));
            var n = (Y ? W.rotate(-20, -90) : W.rotate(-D, -z, -0)).invertSelf().translateSelf(-l, -s, -r);
            0 < H
            && ({ x: t, y: a, z: e } = R,
              h(),
              G.b6o(36160, g),
              G.v5y(0, 0, 128, 128),
              G.c4s(16640),
              G.cbf(!0, !1, !0, !1),
              G.uae(h("b"), !1, v(W.rotate(0, 180).invertSelf().translateSelf(-t, -a, .3 - e))),
              zt(h("c"), 0, 41, 0),
              G.c4s(256),
              G.cbf(!1, !0, !0, !1),
              G.uae(h("b"), !1, v(W.translate(-t, -a, -e - .3))),
              zt(h("c"), 0, 41, 0),
              G.f1s()),
              c(),
              G.b6o(36160, u),
              G.v5y(0, 0, 2048, 2048),
              m[0](xt(n, .3, 55, 10)),
              m[1](xt(n, 55, 186, 11)),
              f(),
              G.b6o(36160, null),
              G.v5y(0, 0, G.drawingBufferWidth, G.drawingBufferHeight),
              G.cbf(!0, !0, !0, !0),
              G.c4s(16640),
              m[0](),
              m[1](),
              G.uae(f("a"), !1, nt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 186)),
              G.uae(f("b"), !1, v(n)),
              G.ubu(f("k"), l, s, r),
              zt(f("c"), !J, 42, 0),
              i(),
              G.ubu(i("j"), G.drawingBufferWidth, G.drawingBufferHeight, C),
              G.ubu(i("k"), l, s, r),
              G.uae(i("b"), !1, v(n.inverse())),
              G.d97(4, 3, 5123, 0),
              G.b6o(36160, g),
              G.f1s();
          },
          t = gt(`#version 300 es
layout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}`),
          c = Mt(
            gt(`#version 300 es
in vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}`),
            `#version 300 es
void main(){}`,
          ),
          i = Mt(
            gt(`#version 300 es
in vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}`),
            `#version 300 es
precision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}`,
          ),
          h = Mt(
            t,
            `#version 300 es
precision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}`,
          ),
          f = Mt(
            t,
            `#version 300 es
precision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}`,
          ),
          m = M(2, a => {
            let e = new Float32Array(16), l = G.c25();
            return G.a4v(33984 + a),
              G.b9j(3553, l),
              G.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              G.t2z(3553, 10241, 9729),
              G.t2z(3553, 10240, 9729),
              G.t2z(3553, 34893, 515),
              G.t2z(3553, 34892, 34894),
              G.t2z(3553, 10243, 33071),
              G.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (v(t, e), G.uae(c("b"), !1, e), G.fas(36160, 36096, 3553, l, 0), G.c4s(256), zt(c("c"), !J, 42, 1))
                  : G.uae(f(a ? "j" : "i"), !1, e);
              };
          }),
          u = G.c5w(),
          g = (t = G.c3z(), G.c5w()),
          a = G.c25();
        h(),
          G.uae(h("a"), !1, nt(1.4, .59, 1e-4, 1)),
          f(),
          G.ubh(f("q"), 2),
          G.ubh(f("h"), 1),
          G.ubh(f("g"), 0),
          i(),
          G.ubh(i("q"), 2),
          G.b6o(36160, u),
          G.d45([0]),
          G.r9l(0),
          G.b6o(36160, g),
          G.bb1(36161, t),
          G.r4v(36161, 33189, 128, 128),
          G.f8w(36160, 36096, 36161, t),
          G.a4v(33986),
          G.b9j(3553, a),
          G.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          G.fas(36160, 36064, 3553, a, 0),
          G.b9j(3553, G.c25()),
          G.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l),
          G.gbn(3553),
          G.t2z(3553, 10241, 9987),
          G.t2z(3553, 10240, 9729),
          G.e8z(2929),
          G.e8z(2884),
          G.c70(1),
          G.c7a(1029),
          G.d4n(515),
          G.c5t(0, 0, 0, 1),
          mt(),
          (() => {
            let n = 0,
              o = 0,
              c = 2,
              i = { x: 0, y: 0, z: 0 },
              h = new Int32Array(256),
              f = new Uint8Array(65536),
              m,
              u,
              g,
              M,
              v,
              d,
              p,
              b,
              I,
              A,
              P,
              Y,
              C,
              F,
              j,
              k;
            wt = () => {
              let e = x + (O[0] ? 1 : 0) - (O[2] ? 1 : 0),
                l = Z + (O[1] ? 1 : 0) - (O[3] ? 1 : 0),
                s = navigator.getGamepads()[0];
              if (s) {
                var r = t => a[t]?.pressed || 0 < a[t]?.value ? 1 : 0;
                let a = s.buttons, t = s.axes;
                s = r(3) || r(2) || r(1) || r(0),
                  e += r(14) - r(15) - $(t[0], .2),
                  l += r(12) - r(13) - $(t[1], .2),
                  J && (D += 80 * $(t[3], .3) * H, z += 80 * $(t[2], .3) * H),
                  s && !m && (O[5] = 1),
                  m = s;
              }
              r = Math.atan2(l, e),
                s = $(U(Math.hypot(l, e)), .05),
                e = s * Math.cos(r),
                l = s * Math.sin(r),
                d = K(d, s, 10),
                s && (n = 90 - r / X),
                v = C = Y = 0,
                G.fa7(),
                G.r9r(0, 0, 128, 128, 6408, 5121, f),
                G.iay(36008, [36064, 36096]),
                G.iay(36009, [36064, 36096]),
                (() => {
                  for (let t = 32; t < 128; t += 2) {
                    let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                    for (let r = 1 & t; r < 128; r += 2) {
                      let t = h + 4 * r,
                        a = h + 4 * (127 - r),
                        e = f[t] / 255,
                        l = f[1 + a] / 255,
                        s = 1 - E(r / 63.5 - 1);
                      10 < r && r < 118 && (n = N(N(e * s, e * f[a] / 255), n), o = N(N(l * s, l * f[1 + t] / 255), o)),
                        (r < 54 || 74 < r) && .001 < (a = (1 - s) * (l < e ? e : l) / 3)
                        && (r < 64 && a > c ? c = a : 64 < r && a > i && (i = a));
                    }
                    E(i - c) > (Y < 0 ? -Y : Y) && (Y = i - c), E(o - n) > (C < 0 ? -C : C) && (C = o - n);
                  }
                })(),
                (() => {
                  let r = 0, n = 0, a = 0, e = 0;
                  h.fill(0);
                  for (let t = 0; t < 31; ++t) {
                    let l = 0, s = 512 * t;
                    for (let e = 0; e < 128; e++) {
                      let t = s + 4 * e, a = (f[t] + f[1 + t]) / 255;
                      t = f[2 + t],
                        14 < e && e < 114 && (l += a),
                        t && a && (a = h[t] + 1, h[t] = a, r > a || (r = a, n = t));
                    }
                    l < 3 && 5 < t && (e += t / 32), 3 < l && (7 < t && (a += t / 15), v = 1);
                  }
                  n && (v = 1),
                    p = K(p, v ? 6.5 : 8, 4),
                    i.y += a / 41 - (v || p) * e / 41 * p * H,
                    c ? n && (c = 0, u = n) : u = n || g,
                    g = n;
                })(),
                I = K(I, 0, v ? 8 : 4),
                A = K(A, 0, v ? 8 : 4),
                r = U(1 - 5 * N(Y < 0 ? -Y : Y, C < 0 ? -C : C)),
                u || (Y += I * r * H, C += A * r * H),
                b = K(b, v ? (s ? v ? 7 : 4 : 0) * r : 0, v ? .1 < r ? 10 : s ? 5 : 7 : 1),
                s = Math.sin(r = J ? z * X : Math.PI) * b * H,
                Y -= e * (r = Math.cos(r) * b * H) - l * s,
                C -= e * s + l * r,
                (() => {
                  let t = 1 === B[u].H && B[u].l || W;
                  c
                    ? ({ x: e, y: a, z: l } = w[T].J.transformPoint({ x: 0, y: T || .9 < _ ? 12 : 1, z: -2.5 }),
                      void 0 === F && (L.x = F = e, L.y = (j = P = a) + 13, L.z = (k = l) + -18),
                      1 < c && (c = 1, P = R.y = a),
                      R.x = e,
                      R.z = l)
                    : ({ x: e, z: l } =
                      ((a = t.inverse()).m41 = 0, a.m42 = 0, a.m43 = 0, a.transformPoint({ x: Y, z: C, w: 0 })),
                      i.x += e,
                      i.z += l),
                    u !== M && (M = u, { x: a, y: e, z: l } = t.inverse().transformPoint(R), i.x = a, i.y = e, i.z = l);
                  var { x: a, y: e, z: l } = t.transformPoint(i);
                  t = a - R.x;
                  let s = l - R.z,
                    r =
                      (R.x = a,
                        R.y = e,
                        R.z = l,
                        u && (I = t / H, A = s / H),
                        1 === u && (w[9].j = a < -15 && l < 0 ? 1 : 0),
                        e < (a < -25 || l < 109 ? -25 : -9) && (I =
                          A =
                          p =
                          b =
                            0,
                          g = u = w[T].s.F,
                          c = 2),
                        P = tt(K(P, e, 2), e, 8 * E(P - e)),
                        F = K(F, a, U(E(F - a) - 1.5, .4, 4)),
                        j = K(j, e, U(E(j - e) - 2.2, .4, 4)),
                        k = K(k, l, U(E(k - l) - 1.5, .4, 4)),
                        J
                          ? (L.x = K(L.x, a, 666 * c + 18),
                            L.y = K(L.y, P + 1.5, 666 * c + 18),
                            L.z = K(L.z, l, 666 * c + 18))
                          : (L.x = K(L.x, F, 2),
                            L.y = K(L.y, N(j + 13 + U((-60 - l) / 8, 0, 20), 6), 2),
                            L.z = K(L.z, k + -18, 2),
                            s = L.z - k,
                            (e = $(Math.hypot(s, t = L.x - F), .1))
                            && (D = 90 - Math.atan2(e, L.y - j) / X, z = 270 + Math.atan2(s, t) / X)),
                        D = U(D, -87, 87),
                        z = at(z),
                        B[37].l = W.translate(a, P, l).rotateSelf(0, o = et(o, n, 8 * H)));
                  [38, 39].map((t, a) => {
                    B[t].l = r.translate(0, d * U(.45 * Math.sin(9.1 * S + Math.PI * (a - 1) - Math.PI / 2)))
                      .rotateSelf(d * Math.sin(9.1 * S + Math.PI * (a - 1)) * .25 / X, 0);
                  });
                })();
            },
              d =
                I =
                A =
                p =
                b =
                  0,
              g = u = w[T].s.F;
          })(),
          (() => {
            let t = !0,
              a = () => {
                Y || !t ? Pt.disconnect() : Pt.connect(At.destination), b4.innerHTML = "Music: " + t;
              },
              s = (t = !1) => {
                if (Y !== t) {
                  Y = t;
                  try {
                    t ? (document.exitFullscreen().catch(() => {}), document.exitPointerLock()) : Pt.start();
                  } catch {}
                  J = 0, document.body.className = t ? "l m" : "l", a(), ut();
                }
              },
              r,
              i,
              h,
              f,
              m,
              u,
              g,
              M,
              v,
              d,
              p,
              n;
            oncontextmenu = () => !1,
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.I = "", location.reload());
              },
              b1.onclick = () => {
                document.body.requestFullscreen(), s();
              },
              b2.onclick = () => {
                document.body.requestFullscreen(), s(), J = 1;
              },
              b4.onclick = () => {
                t = !t, a();
              },
              b5.onclick = () => s(!0),
              onclick = t => {
                n = 1, Y || (t.target === hC && (O[5] = !0), J && hC.requestPointerLock());
              },
              onkeyup = onkeydown = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((l = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && Y)
                  ? Y && !n || s(!Y)
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
                  ? l && (O[e] = 1)
                  : O[e] = l);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                J && (t || a) && (z += .1 * t, D += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!Y) {
                  for (let { pageX: t, pageY: a, identifier: e } of l.changedTouches) {
                    J && t > hC.clientWidth / 2
                      ? void 0 === M && (v = 0, u = t, g = a, M = e, d = z, p = D)
                      : void 0 === f && (m = 0, i = t, h = a, f = e);
                  }
                  r = C;
                }
              },
              hC.ontouchmove = l => {
                let s, r, n, o, c;
                if (!Y) {
                  for (let { pageX: t, pageY: a, identifier: e } of l.changedTouches) {
                    M === e && (z = d + (t - u) / 2.3, D = p + (a - g) / 2.3, v = 1),
                      f === e
                      && (e = (i - t) / 20,
                        r = e < 0 ? -e : e,
                        n = (s = (h - a) / 20) < 0 ? -s : s,
                        o = Math.atan2(s, e),
                        c = U(Math.hypot(s, e) - .5),
                        x = .2 < r ? Math.cos(o) * c : 0,
                        Z = .2 < n ? Math.sin(o) * c : 0,
                        (x || Z) && (m = 1),
                        2 < r && (i = t + 20 * Math.sign(e)),
                        2 < n && (h = a + 20 * Math.sign(s)));
                  }
                }
              },
              hC.ontouchend = a => {
                let e;
                a.preventDefault();
                for (let t of a.changedTouches) {
                  t.identifier === M
                    ? (M = void 0, v || (e = 1), v = 0)
                    : t.identifier === f
                    ? (f = void 0, Z = x = 0, m || (e = 1), m = 0)
                    : e = 1;
                }
                e && a.target === hC && r && .02 < (a = C - r) && a < .7 && (O[5] = !0);
              },
              (document.onvisibilitychange = onblur = onresize = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  O.length = x = Z = 0,
                  f = M = void 0,
                  document.hidden && s(!0);
              })(),
              s(!0);
          })(),
          requestAnimationFrame(o);
      }
    },
    l = new Image();
  l.onload = l.onerror = e,
    l.src = It,
    (t => {
      let R = 0,
        L = new Int32Array(10725888),
        e = () => {
          let l = At.createBuffer(2, 5362944, 44100);
          for (let e = 0; e < 2; e++) {
            for (let t = e, a = l.getChannelData(e); t < 10725888; t += 2) {
              a[t >> 1] = L[t] / 65536;
            }
          }
          Pt.buffer = l, Pt.loop = !0, vt(t);
        },
        l = () => {
          let f = 0,
            M,
            [v, d, p, b, I, A, P, Y, C, F, j, , k, S, T, D, t, H, a, Q, B] =
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
          F = F * F * 4;
          for (let g of [5513, 4562, 3891]) {
            let s = 0,
              r = 0,
              m = [],
              u,
              n,
              o,
              c = new Int32Array(768 * g),
              i = Math.PI * 2 ** (t - 8) / g,
              h = a * g & -2;
            for (let l = 0; l <= 11; ++l) {
              for (
                let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * R + l];
                t < 32;
                ++t
              ) {
                let e = (32 * l + t) * g;
                for (var q, O = 0; O < 4; ++O) {
                  if (u = 0, a && (u = B[a - 1].charCodeAt(t + 32 * O) - 40, u += 0 < u ? 106 : 0), u) {
                    if (!(q = m[u])) {
                      let l = 0,
                        s = 0,
                        r,
                        n,
                        o = (q = u, g),
                        c = u,
                        i = R < 2
                          ? t => t % 1 * 2 - 1
                          : dt,
                        h = R < 2
                          ? R < 1
                            ? t => t % 1 < .5 ? 1 : -1
                            : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                          : dt,
                        f = new Int32Array(Y + C + F);
                      for (let a = 0, e = 0; Y + C + F > a; ++a, ++e) {
                        let t = 1;
                        Y > a ? t = a / Y : Y + C > a || (t = (1 - (t = (a - Y - C) / F)) * 3 ** (-j / 16 * t)),
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
                for (let t, a = 0; g > a; ++a) {
                  O = 0,
                    ((t = c[q = 2 * (e + a)]) || o)
                    && (n = .00308 * k,
                      1 !== R && 4 !== R || (n *= Math.sin(2 ** (t - 9) / g * q * Math.PI * 2) * Q / 512 + .5),
                      n = 1.5 * Math.sin(n),
                      s += n * r,
                      M = (1 - S / 255) * (t - r) - s,
                      r += n * M,
                      t = 4 === R ? r : 3 === R ? M : s,
                      R || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                      t *= T / 32,
                      o = 1e-5 < t * t,
                      M = Math.sin(i * q) * D / 512 + .5,
                      O = t * (1 - M),
                      t *= M),
                    q < h || (O += c[1 + q - h] * H / 255, t += c[q - h] * H / 255),
                    L[f + q] += c[q] = O,
                    ++q,
                    L[f + q] += c[q] = t;
                }
              }
            }
            f += c.length;
          }
          vt(++R < 5 ? l : e);
        };
      vt(l);
    })(() => {
      vt(() => {
        let a = 0,
          l = [],
          r = [],
          n = [],
          o = [],
          c = new Int32Array(8),
          i = new Map(),
          s = t => {
            let { x: a, y: e, z: l } = h[t], s = (m[0] = a, m[1] = e, m[2] = l, i.get(t = "" + (h.D ? f : c)));
            return void 0 !== s
              ? (a = 3 * s, o[a] = (o[a++] + c[5]) / 2, o[a] = (o[a++] + c[6]) / 2, o[a] = (o[a] + c[7]) / 2)
              : (i.set(t, s = i.size), r.push(a, e, l, m[3]), n.push(c[4]), o.push(c[5], c[6], c[7])),
              s;
          },
          h,
          f = new Int32Array(c.buffer, 0, 5),
          m = new Float32Array(c.buffer);
        for (let t of B) {
          for (h of (m[3] = 40 === t.F ? -14 : t.H && t.F, t.u)) {
            let { x: t, y: a, z: e } = rt(h);
            c[4] = 0 | h.A, c[5] = 32767 * t, c[6] = 32767 * a, c[7] = 32767 * e;
            for (let t = 2, a = s(0), e = s(1); h.length > t; ++t) l.push(a, e, e = s(t));
          }
          t.u = null, t.v = a, t.G = a = l.length;
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
          vt(e);
        try {
          let [e, l, t, a, s] = JSON.parse(localStorage.I);
          w.map((t, a) => t.g = t.i = t.j = a ? 0 | e[a] : 0), q.map((t, a) => t.j = 0 | l[a]), T = t, S = a, y = s;
        } catch {}
        _ = U(T);
      });
      let a = M(
          11,
          t => W.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
        ),
        c = M(10, t => s(ct(m(18), a[t]).reverse(), ct(m(18), a[t + 1]), 1)).flat();
      p(() => b([k.slice(1)], W.translate(-2).scale3d(3).rotate(90, 0)), 0),
        p(() => {
          let t = (a, e, l) =>
              p(t => {
                t.h = () => W.translate(s() * Math.sin(3 * a + S * a) * e),
                  k.map(({ x: t, z: a }) => {
                    b(u(11, 1), W.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), P(.5, .3, .7, .6)),
                      b(u(), W.translate(4 * t, 7, l + 4 * a).scale(1, .3), P(.5, .5, .5, .3));
                  }),
                  b(d(
                    f(u(), W.translate(0, 0, l).scale(5, 1, 5), P(.8, .8, .8, .3)),
                    ...[-1, 1].map(t =>
                      f(u(), W.translate(5 * t, .2, l).rotate(-30 * t).scale(4, 1, 2), P(.8, .8, .8, .3))
                    ),
                  )),
                  b(u(), W.translate(0, -3, l).scale(8, 2, 8), P(.4, .4, .4, .3));
              }),
            a = (t, a, e) =>
              W.translate(t + Math.sin(S + 2) / 5, a + Math.sin(.8 * S) / 3, e).rotateSelf(
                2 * Math.sin(S),
                Math.sin(.7 * S),
                Math.sin(.9 * S),
              ),
            e = t =>
              d(
                f(u(), W.translate(0, -t / 2).scale(6, t - 1, 2.2)),
                f(u(), W.translate(0, -t / 2 - 6).scale(4, t - 3, 4)),
                f(u(32, 1), W.translate(0, t / 2 - 9).rotate(90, 0, 90).scale3d(4)),
              ),
            s = () => {
              let t = w[2].i, a = 1 - w[4].i;
              return t < a ? t : a;
            },
            l = d(
              f(u(20, 1, 1.15, 1), W.translate(0, -3).scale(3.5, 1, 3.5), P(.7, .4, .25, .7)),
              f(u(20, 1, 1.3, 1), W.translate(0, -2.5).scale(2.6, 1, 3), P(.7, .4, .25, .2)),
              f(u(), W.translate(4, -1.2).scale3d(2), P(.7, .4, .25, .3)),
            ),
            r = M(7, t => f(u(6, 1), W.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), P(.3, .3, .38))).flat(),
            n = (p(t => {
              t.h = () => a(-12, 4.2, 40 * _ - 66), b(l), I(W.translate(0, -3, 4));
            }),
              I(W.translate(-5.4, 1.5, -19).rotate(0, -90)),
              A(W.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              A(
                W.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...m(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              b(u(), W.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), P(.8, .8, .8, .2)),
              k.map(({ x: t, z: a }) => b(u(6), W.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), P(.6, .3, .3, .4))),
              [-23, 22].map(t => b(u(), W.translate(0, 0, t).scale(3, 1, 8), P(.9, .9, .9, .2))),
              [-15, 15].map((a, e) => {
                b(u(), W.translate(0, 6.3, a).scale(4, .3, 1), P(.3, .3, .3, .4)),
                  b(u(), W.translate(0, 1, a).scale(3, .2, .35), P(.5, .5, .5, .3)),
                  p(t => {
                    t.h = () => W.translate(0, 0, a).scale(1, U(1.22 - w[e + 1].g), 1), b(r);
                  });
              }),
              M(5, a =>
                M(2, t =>
                  b(
                    c,
                    W.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    P(1, 1, .8, .2),
                  ))),
              b(u(), W.translate(3, 1.5, -20).scale(.5, 2, 5), P(.7, .7, .7, .2)),
              b(u(), W.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(.75, .75, .75, .2)),
              b(u(5), W.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(.6, .3, .3, .4)),
              b(u(), W.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, .6, 4.5), P(.8, .2, .2, .5)),
              b(d(
                g(
                  f(u(6, 0, 0, .3), W.translate(8, -3, -4).scale(13, 1, 13), P(.7, .7, .7, .2)),
                  f(u(6), W.translate(0, -8).scale(9, 8, 8), P(.4, .2, .5, .5)),
                  f(u(6, 0, 0, .3), W.translate(0, -.92).scale(13, 2, 13), P(.8, .8, .8, .2)),
                ),
                f(u(5), W.scale(5, 30, 5), P(.4, .2, .6, .5)),
                f(u(5, 0, 1.5), W.translate(0, 1).scale(4.5, .3, 4.5), P(.7, .5, .9, .2)),
                f(u(), W.rotate(0, 60).translate(14, .7, -1).rotate(-35).scale(2, 2, 2), P(.5, .5, .5, .5)),
                f(u(6), W.translate(15, -1.5, 4).scale(3.5, 1, 3.5), P(.5, .5, .5, .5)),
              )),
              p(t => {
                t.h = () =>
                  W.translate(
                    0,
                    .01 < w[3].g ? (5 * Math.cos(1.5 * S) + 2) * w[3].i * (1 - w[2].g) + -15 * (1 - w[3].g) : -500,
                    0,
                  ),
                  b(u(5), W.translate(0, -.2).scale(5, 1, 5), P(.6, .65, .7, .3)),
                  I(W.translate(0, 1.2));
              }),
              I(W.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              p(t => {
                t.h = () => W.translate(s() * Math.sin(S / 1.5 + 2) * 12),
                  b(
                    d(
                      g(
                        f(u(), W.scale(1.5, 1, 5), P(.9, .9, .9, .2)),
                        f(u(6), W.scale(4, 1, 5), P(.9, .9, .9, .2)),
                        f(u(), W.translate(0, -2).scale(2, 3.2, 1.9), P(.3, .8, .5, .5)),
                        f(u(16, 1, 0, 4), W.scale(1, 1, 1.5).rotate(0, 90), P(.9, .9, .9, .2)),
                      ),
                      f(u(), W.scale(1.3, 10, 1.3), P(.2, .7, .4, .6)),
                    ),
                    W.translate(0, 0, 45),
                  ),
                  A(W.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              b(u(), W.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(.9, .9, .9, .2)),
              p(t => {
                t.h = () => W.translate(9.8 * (1 - s())),
                  b(u(3), W.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), P(.3, .6, .6, .2)),
                  b(u(8), W.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(.8, .8, .8, .2)),
                  b(u(), W.translate(-23, -3, 55).scale(5.2, 1.7, 3), P(.5, .5, .5, .3)),
                  b(u(), W.translate(-23, -2.2, 62).scale(3, 1, 4), P(.5, .5, .5, .3)),
                  I(W.translate(-23, -.5, 66.5));
              }),
              p(t => {
                t.h = () => W.translate(0, U(1 - 5 * s()) * h(w[4].g, w[5].g) * Math.sin(1.35 * S) * 4),
                  b(u(), W.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(.7, .7, .7, .2)),
                  b(
                    d(f(u(), W.scale(3, 1.4, 2.7)), f(u(), W.scale(1.2, 8, 1.2))),
                    W.translate(-33, -3, 55),
                    P(.7, .7, .7, .2),
                  );
              }),
              p(t => {
                t.h = () => W.translate(0, 0, U(1 - 5 * s()) * h(w[4].g, w[5].g) * Math.sin(.9 * S) * 8),
                  b(d(
                    f(u(), W.translate(-27, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2)),
                    f(u(), W.translate(-27, -3, 55).scale(1, 3), P(.9, .9, .9, .2)),
                  )),
                  b(u(), W.translate(-39, -3, 55).scale(3, 1.4, 2.7), P(.9, .9, .9, .2));
              }),
              p(t => {
                t.h = () => W.translate(0, -6.5 * w[4].i),
                  b(
                    u(6),
                    W.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9),
                    P(.7, .7, .7, .4),
                  );
              }),
              I(W.translate(-55, -1.1, 46).rotate(0, 90)),
              b(u(6), W.translate(-61.3, -2.4, 49).scale(3, 1, 5), P(.4, .6, .6, .3)),
              b(u(7), W.translate(-57, -2.6, 46).scale(4, 1, 4), P(.8, .8, .8, .3)),
              [
                ...f(u(), W.translate(0, -3).scale(11, 1.4, 3), P(.9, .9, .9, .2)),
                ...d(
                  f(u(6), W.rotate(90).scale(6, 8, 6), P(.3, .6, .6, .3)),
                  f(u(4, 0, .01), W.translate(0, 6).scale(12, 2, .75).rotate(0, 45), P(.3, .6, .6, .3)),
                  f(u(6), W.rotate(90).scale(5, 12, 5), P(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(t =>
                    f(u(5), W.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(.3, .6, .6, .3))
                  ),
                ),
              ]),
            o = (b(n, W.translate(-53, 0, 55)),
              p(t => {
                t.h = () => W.translate(-75, (1 - w[5].i) * (1 - w[6].g) * 3, 55).rotate(180 * (1 - w[5].i) + j, 0),
                  b(n);
              }, 2),
              b(u(), W.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), P(.7, .7, .7, .2)),
              b(u(3, 0, -.5), W.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(.8, .8, .8, .2)),
              b(d(
                g(
                  f(u(), W.translate(-100, -2.5, 55).scale(8, 1, 8), P(.8, .8, .8, .2)),
                  f(u(), W.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(.8, .8, .8, .2)),
                  f(u(), W.translate(-100, -2.6, 70).scale(3, 1.1, 7), P(.8, .8, .8, .2)),
                  f(u(), W.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(.8, .8, .8, .2)),
                  f(u(6), W.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(.6, .6, .6, .3)),
                  f(u(), W.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(.8, .8, .8, .2)),
                  f(u(), W.translate(-100, .42, 92).scale(3, 1.1, 4.1), P(.8, .8, .8, .2)),
                ),
                f(u(8), W.translate(-100, -1, 55).scale(7, .9, 7), P(.3, .3, .3, .4)),
                f(u(8), W.translate(-100, -2, 55).scale(4, .3, 4), P(.4, .4, .4, .5)),
                f(u(8), W.translate(-100, -3, 55).scale(.6, 1, .6), P(.4, .4, .4, .5)),
              )),
              A(W.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
              A(W.translate(-89, .2, 80), [0, 0, 6]),
              b(d(
                f(u(), W.translate(-100, 1, 63).scale(7.5, 4), P(.5, .5, .5, .4)),
                f(u(), W.translate(-100, 0, 70).scale(2, 2, 10), P(.5, .5, .5, .4)),
                f(u(20, 1), W.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(.5, .5, .5, .4)),
              )),
              p(t => {
                t.h = () => W.translate(-99.7, -1.9, 63.5).scale(1, U(1.1 - w[6].g), 1), b(r);
              }),
              k.map(({ x: a, z: e }) => {
                b(u(6), W.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), P(.6, .15, .15, .8)),
                  [4, -.4].map(t =>
                    b(u(6), W.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), P(.4, .2, .2, .8))
                  );
              }),
              M(7, t => {
                b(
                  u((23 * t + 1) % 5 + 5, 0, .55),
                  W.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                    5 + t / 2,
                    1 + t / 6,
                    5 + t / 3,
                  ),
                  P(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                );
              }),
              b(u(), W.translate(-87, -9.5, 24).scale(7, 1, 3), P(.4, .5, .6, .4)),
              b(u(4), W.translate(-86, -9.2, 27).scale(5, 1, 5), P(.5, .6, .7, .3)),
              b(u(12, 1), W.translate(-86, -9, 31).scale(1.5, 1, 1.5), P(.3, .3, .4, .1)),
              I(W.translate(-86, -7.5, 31)),
              p(t => {
                t.h = () => W.translate(0, 3.5 * (1 - N(w[6].g, w[7].g)) + h(w[7].i, w[6].i) * Math.sin(S) * 5),
                  [0, 12, 24].map(t =>
                    b(u(), W.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.2, .5, .6, .2))
                  );
              }),
              p(t => {
                t.h = () =>
                  W.translate(0, h(w[7].i, w[6].i) * Math.sin(S + 3) * 6, 6 * Math.sin(.6 * S + 1) * h(w[7].i, w[6].i)),
                  [6, 18].map(t =>
                    b(u(), W.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), P(.1, .4, .5, .2))
                  );
              }),
              b(
                d(
                  g(
                    f(u(5), W.translate(0, 0, -7).scale(2, 1.2, 2), P(.2, .4, .7, .3)),
                    f(u(5), W.scale(9, 1.2, 9), P(0, .2, .3, .5)),
                    f(u(), W.scale(11, 1, 13), P(.3, .4, .6, .3)),
                  ),
                  f(u(5), W.scale(5.4, 5, 5.4), P(0, .2, .3, .5)),
                ),
                W.translate(-38.9, -11.3, 17),
              ),
              I(W.translate(-38.9, -9.6, 10)),
              p(t => {
                t.h = () => W.translate(0, -7.3 * w[7].i),
                  b(
                    d(
                      g(
                        f(u(5), W.translate(0, 2).scale(5, 7, 5).skewY(8), P(.2, .4, .5, .5)),
                        f(u(5), W.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(.25, .35, .5, .5)),
                        f(u(5), W.translate(0, 9).scale(.6, 7, .6).skewY(8), P(.35, .3, .5, .5)),
                      ),
                      f(u(5), W.scale(4, 8, 4), P(.2, .4, .5, .5)),
                      f(u(5), W.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(.2, .4, .5, .5)),
                    ),
                    W.translate(-38.9, -11.3, 17),
                  ),
                  A(W.translate(-39.1, -.6, 17).rotate(11), ...m(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.2]));
              }),
              k.map(({ x: a, z: e }) => {
                b(u(14, 1), W.translate(9 * a - 38.9, -7.3, 11 * e + 17).scale(1, 4), P(.25, .25, .25, 1)),
                  [1.5, 8].map(t =>
                    b(
                      u(17, 1),
                      W.translate(9 * a - 38.9, -7.3, 11 * e + 17).translate(0, t - 4).scale(1.5, .5, 1.5),
                      P(.6, .6, .6, .3),
                    )
                  );
              }),
              b(
                d(
                  g(
                    f(u(6), W.translate(0, 0, -36).scale(15, 1.2, 15), P(.7, .7, .7, .3)),
                    f(u(), W.translate(0, 0, -18).scale(4, 1.2, 6), P(.45, .4, .6, .3)),
                  ),
                  ...M(6, a =>
                    M(6, t =>
                      f(
                        u(6),
                        W.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                        P(.7, .7, .7, .3),
                      ))).flat(),
                ),
                W.translate(-38.9, -11.3, 17),
              ),
              A(W.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
              b(u(5), W.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), P(.8, .1, .25, .4)),
              I(W.translate(-84, -.5, 85).rotate(0, 45)),
              p(t => {
                t.h = () => a(-123, 1.4, 55 + -65 * y), b(l), I(W.translate(0, -3, -4).rotate(0, 180));
              }),
              d(
                f(u(), W.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), P(.25, .25, .35, .3)),
                f(u(3), W.translate(0, 0, -5.5).scale(3, 2), P(.6, .3, .4, .3)),
                ...[-1.2, 1.2].map(t => f(u(), W.translate(t, -.5, 1).scale(.14, .3, 6.5), P(.7, .2, 0, .3))),
              ));
          p(t => {
            t.h = () => W.translate(0, -2, h(w[10].g, w[11].g) * E(Math.sin(1.1 * S)) * -8.5 + 10),
              M(2, t => b(o, W.translate(9 * t - 110 + (1 & t), 1.7, -12)));
          }),
            p(t => {
              t.h = () => W.translate(0, -2, h(w[10].g, w[11].g) * E(Math.sin(2.1 * S)) * -8.5 + 10),
                M(2, t => b(o, W.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
            }),
            p(t => {
              t.h = () =>
                W.translate(
                  0,
                  -2,
                  -8.5 * N((1 - w[10].g) * (1 - h(w[10].g, w[11].g)), h(w[10].g, w[11].g) * E(Math.sin(1.5 * S))) + 10,
                ), M(3, t => b(o, W.translate(9 * t - 106, 1.7, -12)));
            }),
            b(
              d(
                g(
                  f(u(), W.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
                  f(u(), W.translate(26.5, -.6, 10).scale(19, 2, .5)),
                ),
                ...M(4, t => f(u(), W.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                ...M(3, t => f(u(), W.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
              ),
              W.translate(-123, 0, -12),
              P(.5, .5, .6, .2),
            ),
            I(W.translate(-116, -1.4, -18).rotate(0, 180)),
            b(u(), W.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(.8, .8, .8, .2)),
            b(u(6), W.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), P(.6, .5, .7, .2)),
            b(u(), W.translate(-115.5, -17, -12).scale(.5, 15, 2.2), P(.6, .6, .6, .3)),
            b(u(8), W.translate(-114, -17, -2).scale(2, 15, 2), P(.6, .6, .6, .3)),
            b(u(8), W.translate(-79, -17, -2).scale(2, 15, 2), P(1, 1, 1, .3)),
            b(u(), W.translate(-77, -17, -50.5).scale(2.2, 15, .5), P(.6, .6, .6, .3)),
            M(3, t => {
              b(e(16), W.translate(12 * t - 109, -9, -12), P(.6, .6, .6, .3)),
                b(e(16), W.translate(-77, -9, -12 * t - 20).rotate(0, 90), P(.6, .6, .6, .3));
            }),
            b(d(
              f(u(12), W.translate(-77, -14.5, -12).scale(4, 17.5, 4), P(.7, .7, .7, .2)),
              f(u(), W.translate(-79, .1, -12).scale(3.5, 2, 1.3), P(.4, .5, .6, .2)),
              f(u(), W.translate(-77, .1, -14).scale(1.5, 2, 2), P(.4, .5, .6, .2)),
              f(u(12), W.translate(-77, 3.1, -12).scale(3, 5, 3), P(.4, .5, .6, .2)),
            )),
            b(u(), W.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), P(.6, .6, .6, .3)),
            b(u(9), W.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), P(.5, .5, .5, .3)),
            b(d(
              f(u(), W.translate(-93, -5.8, -40).scale(9, 1, 5), P(.8, .8, .8, .1)),
              f(u(9), W.translate(-98, -5.8, -40).scale(3, 8, 3), P(.7, .7, .7, .2)),
            )),
            I(W.translate(-98, -4.4, -40).rotate(0, 90)),
            A(W.translate(-115, .2, -12), [0, 0, 3.5]),
            A(W.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
            b(d(
              g(
                f(u(6, 0, 0, .6), W.translate(-100, .7, 105.5).scale(8, 1, 11), P(.7, .7, .7, .2)),
                f(u(), W.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), P(.7, .7, .7, .2)),
              ),
              f(u(5), W.translate(-100, .7, 113).scale(4, 3, 4), P(.7, .7, .7, .2)),
            )),
            M(4, a =>
              p(t => {
                t.h = () => {
                  let t = h(w[8].i, w[12].i);
                  return W.translate(
                    (2 < a ? 2 * (1 - t) + t : 0) - 100,
                    t * Math.sin(1.3 * S + 1.7 * a) * (3 + a / 3) + .7,
                    115 + (1 & a ? -1 : 1) * (1 - w[8].i) * (1 - w[12].i) * -7
                      + (.05 < t ? t : .05) * Math.cos(1.3 * S + 7 * a) * (4 - 2 * (1 - a / 3)),
                  );
                },
                  b(
                    u(6),
                    W.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                    P(.5 - a / 8, a / 12 + .5, .7, .3),
                  );
              })),
            p(t => {
              t.h = () => {
                let t = h(w[8].i, w[12].i);
                return W.translate(2.5 * (1 - t) - 139.7, -3 * (1 - w[8].g) + t * Math.sin(.8 * S) * -1 - 1.8, 93.5)
                  .rotateSelf(Math.cos(1.3 * S) * (3 * t + 3), 0);
              },
                b(d(f(u(10), W.scale(6, 2, 6), P(.1, .6, .5, .3)), f(u(10), W.scale(3.3, 6, 3.3), P(.1, .6, .5, .5)))),
                b(u(15, 1), W.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), P(.4, .4, .4, .3)),
                b(u(10), W.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), P(.3, .8, .7, .3)),
                b(u(5), W.translate(-7.5).rotate(0, 90).scale(1, 3), P(.5, .5, .5, .5)),
                I(W.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
                [-1, 1].map(t =>
                  b(c, W.rotate(90 * -t, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), P(1, 1, .8, .2))
                ),
                A(W.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
            }),
            [-1, 1].map(a => {
              b(u(12, 1), W.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), P(.6, .24, .2, .5)),
                [7.2, 1.5].map(t =>
                  b(u(15, 1), W.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), P(.5, .24, .2, .4))
                ),
                b(c, W.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), P(1, 1, .8)),
                b(
                  d(
                    f(u(), W.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), P(.5, .5, .5, .4)),
                    f(u(), W.scale(3, 3, 10), P(.6, .24, .2, .5)),
                    f(u(28, 1), W.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(.6, .24, .2, .5)),
                    f(u(5), W.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(.6, .24, .2, .5)),
                    f(u(5), W.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), P(.6, .24, .2, .5)),
                  ),
                  W.translate(a - 100, .7, 97),
                );
            }),
            p(t => {
              t.h = () => W.translate(-100, .6, 96.5).scale(.88, 1.2 - w[12].g), b(r);
            }),
            b(d(
              f(u(), W.translate(-82.07, .8, 106).scale(11, .9, 2.2), P(.7, .7, .7, .1)),
              f(u(45, 1), W.translate(-81, .7, 106).scale3d(7.7), P(.7, .7, .7, .1)),
            )),
            p(t => {
              t.h = () => W.translate(-81, .6, 106).rotate(0, 40 + F),
                b(d(
                  f(u(45, 1), W.scale(7.5, 1, 7.5), P(.45, .45, .45, .2)),
                  f(u(), W.translate(0, 0, -5.5).scale(1.5, 3, 2.7), P(.45, .45, .45, .2)),
                )),
                b(u(8), W.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), P(.7, .7, .7, .1)),
                b(u(5), W.translate(0, 2).scale(1, 2), P(.3, .3, .3, .2)),
                A(W.translate(0, 3), ...m(14).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2]));
            }),
            p(t => {
              t.h = () => W.translate(-65.8, .8, 106).rotate(0, i),
                [-1, 1].map(t =>
                  b(
                    c,
                    W.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                    P(1, 1, .8),
                  )
                ),
                b(d(
                  f(u(28, 1), W.translate(0, 2).scale(7.5, 1, 7.5), P(.35, 0, 0, .3)),
                  f(u(), W.scale(9, 5, 2), P(.3, 0, 0, .3)),
                )),
                b(f(u(28, 1), W.scale(7.5, 1, 7.5), P(.45, .45, .45, .2))),
                b(f(u(5), W.translate(0, 1).scale(1, .2), P(.3, .3, .3, .2)));
            }),
            p(t => {
              t.h = () => W.translate(-50.7, .8, 106).rotate(0, 180 - i),
                b(d(
                  f(u(28, 1), W.translate(0, 2).scale(7.5, 1, 7.5), P(.35, 0, 0, .3)),
                  f(u(), W.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                  f(u(), W.translate(0, 0, 7).scale(2, 5, 9), P(.3, 0, 0, .3)),
                )),
                b(f(u(28, 1), W.scale(7.5, 1, 7.5), P(.45, .45, .45, .2))),
                b(f(u(5), W.translate(0, 1).scale(1, .2), P(.3, .3, .3, .2)));
            }),
            p(t => {
              t.h = () => W.translate(-50.7, .8, 91).rotate(0, 270 + i),
                b(d(
                  f(u(28, 1), W.translate(0, 2).scale(7.5, 1, 7.5), P(.35, 0, 0, .3)),
                  f(u(), W.translate(7).scale(9, 5, 2), P(.3, 0, 0, .3)),
                  f(u(), W.translate(0, 0, -7).scale(2, 5, 9), P(.3, 0, 0, .3)),
                )),
                b(f(u(28, 1), W.scale(7.5, 1, 7.5), P(.45, .45, .45, .2))),
                b(f(u(5), W.translate(0, 1).scale(1, .2), P(.3, .3, .3, .2)));
            }),
            b(u(), W.translate(-58, 1, 106).scale(2, .65, 2), P(.7, .7, .7, .2)),
            b(u(), W.translate(-50.7, 1, 99).scale(2, .65, 1), P(.7, .7, .7, .2)),
            b(u(), W.translate(-42, .4, 91).scale(5, 1, 2.5), P(.7, .7, .7, .3)),
            b(u(), W.translate(-34.2, .4, 91).scale(3, 1, 3), P(.7, .7, .7, .3)),
            I(W.translate(-34, 2.7, 96).rotate(-12, 0)),
            b(u(5), W.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), P(.2, .5, .5, .6)),
            [P(.1, .55, .45, .2), P(.2, .5, .5, .3), P(.3, .45, .55, .4)].map((a, e) =>
              p(t => {
                t.h = () =>
                  W.translate(
                    0,
                    (1 - w[13].i) * (1 - w[14].i) * (e ? 0 : 3) + h(w[13].i, w[14].i) * Math.sin(1.5 * S + 1.5 * e) * 4,
                  ),
                  b(u(), W.translate(-23.5, .5, 91 + 6.8 * e).scale(1 === e ? 2 : 3.3, 1, 3.3), a),
                  2 === e && b(u(), W.translate(-29.1, .4, 91).scale(2.1, 1, 3), P(.7, .7, .7, .3)),
                  1 === e
                  && b(u(), W.translate(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), P(.6, .6, .7, .3));
              })
            ),
            [-1, 1].map(t => b(c, W.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), P(1, 1, .8))),
            M(3, t =>
              b(
                e(24.7 - .7 * (1 & t)),
                W.translate(6 * t - 6, 4 - (1 & t), 111 - .2 * (1 & t)),
                1 & t ? P(.5, .5, .5, .3) : P(.35, .35, .35, .5),
              )),
            b(d(
              f(u(6, 0, 0, .3), W.translate(0, -.92, 95).scale(14, 2, 14), P(.8, .8, .8, .2)),
              f(u(5), W.translate(0, 0, 95).scale3d(6), P(.3, .3, .3, .5)),
            )),
            I(W.translate(0, 1.7, 82).rotate(0, 180)),
            b(u(5), W.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(.5, .3, .3, .4)),
            b(u(6), W.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(.5, .6, .7, .3)),
            b(u(), W.translate(0, 16, 129).scale(1.5, 1, 2), P(.5, .6, .7, .3)),
            b(u(7), W.translate(0, 16.2, 133).scale(5, 1, 5), P(.4, .5, .6, .4)),
            b(d(
              g(
                f(u(), W.translate(0, 16, 110.5).scale(12, 1, 3), P(.5, .3, .3, .4)),
                f(u(), W.translate(0, 16, 111).scale(3, 1, 3.8), P(.5, .3, .3, .4)),
              ),
              f(u(5), W.translate(0, 16, 103.5).scale(5.5, 5, 5.5), P(.5, .3, .3, .4)),
            )),
            p(t => {
              t.h = () => {
                let t = Math.sin(S);
                return W.translate(-2 * t).rotate(25 * t);
              },
                b(u(3), W.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), P(.5, .3, .3, .4)),
                [22, 30].map(t => {
                  b(u(6), W.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), P(.7, .7, .7, .4)),
                    b(u(), W.translate(0, 6.2, t + 95).scale(.5, 11, .5), P(.5, .3, .3, .4));
                });
            }),
            p(t => {
              t.h = () => {
                let t = h(h((w[14].g + w[14].i) / 2, w[13].i), (w[15].g + w[15].i) / 2);
                return W.translate(0, 16 * t, 8.5 * U(2 * t - 1) + 95);
              },
                b(u(5), W.scale(5, 1.1, 5), P(.5, .3, .3, .4)),
                b(u(5), W.scale(5.5, .9, 5.5), P(.25, .25, .25, .4)),
                I(W.translate(0, 1.5, -1).rotate(0, 180));
            }),
            A(W.translate(0, 3, 95), ...m(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            A(W.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        p(() => {
          [0, 180].map(t => b(c, W.rotate(0, t).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), P(1, 1, .8))),
            b(n(20), W.translate(0, 1).scale(.5, .5, .5), P(1, .3, .4));
          let a = f(
            d(u(15, 1), f(u(), W.translate(0, 0, 1).scale(2, 2, .5))),
            W.rotate(-90, 0).scale(.1, .05, .1),
            P(.3, .3, .3),
          );
          [-1, 1].map(t => b(a, W.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            b(u(), W.translate(0, .9, .45).scale(.15, .02, .06), P(.3, .3, .3)),
            b(n(20), W.scale(.7, .8, .55), P(1, .3, .4));
        }),
        [-1, 1].map(t =>
          p(() => {
            b(u(10, 1), W.translate(.3 * t, -.8).scale(.2, .7, .24), P(1, .3, .4));
          })
        ),
        p(() => {
          b(u(6, 1), W.scale(.13, 1.4, .13), P(.3, .3, .5, .1)),
            b(u(10), W.translate(0, 1).scale(.21, .3, .21), P(1, .5, .2)),
            b(u(3), W.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), P(.2, .2, .2, .1));
        }, 0),
        p(() => {
          b(u(6).slice(0, -1), W.scale(.77, 1, .77), P(1, .3, .5));
        }, 0),
        p(() => {
          b(
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
            W.scale3d(.7),
            P(1, 1, 1),
          ), [-1, 1].map(t => b(n(12), W.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    });
});
