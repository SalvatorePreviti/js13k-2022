let M,
  I,
  C,
  Z,
  T,
  $,
  e1,
  a1,
  t1,
  k,
  l1,
  r1,
  s1,
  m,
  c1,
  o1,
  F,
  O,
  Q,
  i1,
  z = 0,
  n1 = 0,
  B = 0,
  m1 = 0,
  f1 = 0,
  h1 = 0,
  u1 = 0,
  d1 = 0,
  v1 = 0,
  N = 0,
  R = 0,
  X = 0,
  g1 = 14,
  q = 180,
  p1 = .1,
  H = [],
  E = [],
  x1 = [],
  p = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  { PI: W, atan2: y1, sin: x, cos: y, exp: a, random: w } = Math,
  L = e => e < 0 ? -e : e,
  w1 = (e, a) => e < a ? e : a,
  z1 = (e, a) => a < e ? e : a,
  S1 = (e, a) => L(e) > a ? e : 0,
  P = (e, a = 0, t = 1) => e < a ? a : t < e ? t : e,
  A1 = e => y1(x(e * H1), y(e * H1)) / H1,
  M1 = (e, a, t) => e + (2 * (a = (a - e) % 360) % 360 - a) * P(t) || 0,
  U = (e, a, t) => (0 < t ? t < 1 ? e + (a - e) * t : a : e) || 0,
  k1 = (e, a, t = 0) => (e * e + a * a + t * t) ** .5,
  j = (
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
  K = (
    e = S,
    a = D,
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
  V = (e = 0, a = 0, t = 0, l = 1) => {
    F = D.m11 * e + D.m21 * a + D.m31 * t + D.m41 * l,
      O = D.m12 * e + D.m22 * a + D.m32 * t + D.m42 * l,
      Q = D.m13 * e + D.m23 * a + D.m33 * t + D.m43 * l,
      i1 = D.m14 * e + D.m24 * a + D.m34 * t + D.m44 * l;
  },
  f = (e, a, t) => S.translate(e, a, t),
  b = (e, t) => Array.from(Array(e), (e, a) => t(a)),
  I1 = (e, a, t) => (e.A = t, e.s = a, e),
  j1 = (e, a, t = e.s) => (K(a), I1(e.map(({ x: e, y: a, z: t }) => (V(e, a, t), { x: F, y: O, z: Q })), t, e.A)),
  h = (e, a, t) => e.map(e => j1(e, a, t)),
  D1 = (t, l = 0) =>
    b(t, e => {
      let a = y(2 * W * e / t);
      return { x: x(2 * W * e / t), y: 0, z: L(a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  Y1 = (l, r, s) =>
    l.map((e, a, { length: t }) => I1([e, r[t - a - 1], r[t - (a + 1) % t - 1], l[(a + 1) % t]], l.s, s)),
  u = (
    e,
    a,
    t = 0,
    l,
  ) => (e = e ? D1(e, l) : p,
    l = j1(e, f(0, 1).scale3d(0 < t ? t : 1)),
    e = j1(e, f(0, -1).scale3d(t < 0 ? -t : 1)).reverse(),
    [...Y1(e, l, a), l, e]),
  C1 = e => 1 - a(-B * e),
  _ = (e, a, t) => U(e, a, C1(t)),
  T1 = e => {
    h4.innerHTML += ".", setTimeout(e);
  },
  F1 = e => x(e * W * 2),
  O1 = (e, a, t, l) =>
    new DOMMatrix([t, 0, 0, 0, 0, l, 0, 0, 0, 0, (a + e) / (e - a), -1, 0, 0, 2 * a * e / (e - a), 0]),
  Q1 = (e, a) => {
    1 / 0 > p1 && (p1 = z + a, h4.innerHTML = e);
  },
  B1 = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        t1 = x1.reduce((e, a) => e + a.j, 0)
      ] + " / XIII";
  },
  N1 = () => {
    localStorage["Dante-22"] = JSON.stringify([E.map(e => e.j), x1.map(e => e.j), g1, r1, z]);
  },
  v = (e, a, t, l = 0) => 255 * l << 24 | 255 * t << 16 | 255 * a << 8 | 255 * e,
  J = (e, a = 0, t = 0) => {
    let l = K(S, H[++s1].l);
    return l.m41 = e, l.m42 = a, l.m43 = t, l;
  },
  R1 = e => {
    let a, t = 0, l = 0, r = 0, s = e.at(-1);
    for (a of e) t += (s.y - a.y) * (s.z + a.z), l += (s.z - a.z) * (s.x + a.x), r += (s.x - a.x) * (s.y + a.y), s = a;
    return a = k1(t, l, r), t /= a, l /= a, r /= a, { x: t, y: l, z: r, w: t * s.x + l * s.y + r * s.z };
  },
  n = ({ x: e, y: a, z: t }, l) => e * l.x + a * l.y + t * l.z,
  i = (l, e) => {
    let r, s, c, o = e.i, i = e.u;
    for (let t = 0; o.length > t; ++t) {
      if ((r = n(l, o[t]) - l.w) < -8e-5 ? c = e : 8e-5 < r && (s = e), c && s) {
        s = [], c = [], t = o.at(-1);
        let a = n(t, l) - l.w;
        for (let e of o) {
          r = n(e, l) - l.w,
            a < 8e-5 && c.push(t),
            -8e-5 < a && s.push(t),
            (8e-5 < a && r < -8e-5 || a < -8e-5 && 8e-5 < r)
            && (a /= r - a,
              t = { x: t.x + (t.x - e.x) * a, y: t.y + (t.y - e.y) * a, z: t.z + (t.z - e.z) * a },
              s.push(t),
              c.push(t)),
            t = e,
            a = r;
        }
        s = 2 < s.length && { i: I1(s, o.s, o.A), u: i, v: e }, c = 2 < c.length && { i: I1(c, o.s, o.A), u: i, v: e };
        break;
      }
    }
    return { x: s, y: c };
  },
  s = (e, a, t = R1(a.i)) => {
    let l, r;
    return e
      ? ({ x: l, y: r } = i(e, a), l || r || e.i.push(a), l && (e.o = s(e.o, l, t)), r && (e.m = s(e.m, r, t)))
      : e = { x: t.x, y: t.y, z: t.z, w: t.w, i: [a], o: 0, m: 0 },
      e;
  },
  t = (a, r, s) => {
    let c = [],
      o = (e, a) => {
        let { x: t, y: l } = i(e, a);
        t || l || (0 < s * n(e, r) ? t = a : l = a), t && (e.o ? o(e.o, t) : c.push(t)), l && e.m && o(e.m, l);
      };
    for (let e of r.i) o(a, e);
    return c;
  },
  c = (e, a) => e && (a(e), c(e.o, a), c(e.m, a)),
  o = e => (c(e, a => {
    let e = a.m;
    a.m = a.o, a.o = e, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let e of a.i) e.u = !e.u;
  }),
    e),
  d = e => e.length ? e.reduce((e, a) => s(e, { i: a, u: 0, v: 0 }), 0) : e,
  X1 = (...e) =>
    e.reduce((l, a) => {
      let r = [];
      if (l = d(l), a) {
        a = d(a), c(l, e => e.i = t(a, e, 1)), c(a, e => r.push([e, t(l, e, -1)]));
        for (let [a, t] of r) for (let e of t) s(l, e, a);
      }
      return l;
    }),
  g = (e, ...a) => {
    let t = e => {
        let a;
        return e.v && ((a = r.get(e.v)) ? (l.delete(a), e = t(e.v)) : r.set(e.v, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = o(X1(o(d(e)), ...a)),
      c(e, a => {
        for (let e of a.i) l.set(t(e), e.u);
      }),
      Array.from(l, ([{ i: e }, a]) => {
        let t = e.map(({ x: e, y: a, z: t }) => ({ x: e, y: a, z: t }));
        return I1(a ? t.reverse() : t, e.s, e.A);
      });
  },
  S = new DOMMatrix(),
  D = new DOMMatrix(),
  l = new Float32Array(16),
  Y = new Float32Array(760),
  q1 = new Uint8Array(65536),
  H1 = W / 180,
  r =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      "data:image/svg+xml;base64,"
      + btoa(
        "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
      )),
  A = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  G = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (let a in G) {
  [A, G].map(e => e[a[0] + [...a].reduce((e, a, t) => (e * t + a.charCodeAt(0)) % 434, 0).toString(36)] = e[a]);
}
T1(() => {
  let e = 0,
    d = () => {
      if (2 == ++e) {
        let h = [{}, {}, {}, {}, {}, {}, {}, {}],
          e = (
            t,
            e,
            a =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            let l = {}, r = (e, a) => (a = t.c6x(a), t.s3c(a, e), t.c6a(a), a), s = t.c1h();
            return t.abz(s, r(a, 35633)),
              t.abz(s, r(e, 35632)),
              t.l8l(s),
              e => e ? l[e] || (l[e] = t.gan(s, e)) : t.u7y(s);
          },
          o = (e, a, t) => {
            I
              ? 1100 < hC.width && e.d97(4, H[55].C - H[53].B, 5123, 2 * H[53].B)
              : (e.das(4, H[a].C - H[a].B, 5123, 2 * H[a].B, x1.length), e.d97(4, H[t ? 53 : 56].B - 3, 5123, 6));
          },
          a = t => {
            requestAnimationFrame(a);
            let l = (t - (M || t)) / 1e3;
            if (n1 += l, z += B = I ? 0 : w1(.055, l), M = t, 0 < B) {
              var r, s, c;
              l = (e, a) => (e = P(e), U(e, 1 - e, a)),
                t = (e, a, t) => J(e + x(z + 2) / 5, a + x(.8 * z) / 5, t).rotateSelf(2 * x(z), x(.7 * z), x(.9 * z)),
                p1 && z > p1 && (p1 = 0, h4.innerHTML = ""),
                r1 = _(r1, E[15].g, .2 + .3 * L(2 * E[15].g - 1)),
                l1 = k ? (T = 0, _(l1, -9, .015)) : _(l1, P(z / 3), 1),
                a1(),
                s1 = 1,
                o1 = l(E[13].h, E[8].h),
                r = U(_(void 0, 0, 1), A1(NaN + 60 * B), E[2].h - E[3].g),
                s = U(_(void 0, 0, 5), A1(NaN + 56 * B), o1),
                c = U(_(void 0, 0, 4), A1(NaN + 48 * B), o1),
                J(0, 270 * (E[1].h - 1) + (2 + 5 * y(1.5 * z)) * (1 - E[10].h));
              let a = w1(1 - E[11].g, E[10].g),
                e =
                  (J(a * x(.6 * z + 1.2) * 12, 0, 35),
                    J(a * x(.6 * z - 1.2) * 8.2, 0, 55),
                    J(a * x(.6 * z) * 12, 0, 45),
                    J(9.8 * (1 - a)),
                    a = P(1 - 5 * a) * l(E[11].h, E[2].h),
                    J(0, a * x(1.35 * z) * 4),
                    J(0, 0, a * x(.9 * z) * 8),
                    J(0, -6.5 * E[11].g),
                    a = l(E[4].g, E[3].g),
                    J(0, a * x(z) * 5 + 3.5 * (1 - z1(E[3].h, E[4].h))),
                    J(0, a * x(z + 3) * 6, a * x(.6 * z + 1) * 6),
                    J(0, -7.3 * E[4].g),
                    a = l(E[6].h, E[7].h),
                    J(0, -2, 10 - 8.5 * a * L(x(1.1 * z))),
                    J(0, -2, 10 - 8.5 * a * L(x(2.1 * z))),
                    J(0, -2, 10 - 8.5 * z1(a * L(x(1.5 * z)), (1 - E[6].h) * (1 - a))),
                    l(E[5].g, E[13].g));
              for (a = 0; a < 4; a++) {
                J(
                  (2 < a ? 2 * (1 - e) + e : 0) - 100,
                  e * x(1.3 * z + 1.7 * a) * (3 + a / 3) + .7,
                  115 - 7 * (1 - E[5].g) * (1 - E[13].g) * (1 & a ? -1 : 1)
                    + z1(.05, e) * y(1.3 * z + 7 * a) * (4 - 2 * (1 - a / 3)),
                );
              }
              a = l(E[8].g, E[9].g);
              for (let e = 0; e < 3; ++e) {
                J(0, a * x(1.5 * z + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - E[8].g) * (1 - E[9].g)));
              }
              for (
                l = l(l((E[9].h + E[9].g) / 2, E[8].g), (E[12].h + E[12].g) / 2),
                  J(0, 16 * l, 95 + 8.5 * P(2 * l - 1)),
                  J(0, -4.7 * E[0].h, -15),
                  J(0, -4.7 * E[10].h, 15),
                  J(-99.7, -1.9 - 5.5 * E[3].h, 63.5),
                  J(-100, .6 - 5.8 * E[13].h, 96.5),
                  J(-75, 3 * (1 - E[2].g) * (1 - E[3].h), 55).rotateSelf(180 * (1 - E[2].g) + r, 0),
                  J(2.5 * (1 - e) - 139.7, -3 * (1 - E[5].h) - e * x(.8 * z) - 1.8, 93.5).rotateSelf(
                    y(1.3 * z) * (3 + 3 * e),
                    0,
                  ),
                  J(-2 * x(z)).rotateSelf(25 * x(z)),
                  J(-81, .6, 106).rotateSelf(0, 40 + s),
                  J(-65.8, .8, 106).rotateSelf(0, c),
                  J(-50.7, .8, 106).rotateSelf(0, 180 - c),
                  J(-50.7, .8, 91).rotateSelf(0, 270 + c),
                  t(-12, 4.2, 40 * l1 - 66),
                  t(-123, 1.4, 55 - 65 * r1),
                  t = 0;
                t < 16;
                ++t
              ) {
                t < 13 && x1[t](), E[t]();
              }
              for (c1(), t = 0; t < 28; ++t) {
                j(H[28 + t].l, Y, t);
              }
              for (let e, a = 0, t = 656; a < 26; ++a, ++t) {
                e = H[2 + a].l, Y[t++] = e.m41, Y[t++] = e.m42, Y[t++] = e.m43;
              }
              G.cbf(!0, !0, !0, !0),
                G.c4s(16640),
                G.u3a(n("j"), Y),
                G.cbf(!0, !1, !0, !1),
                G.uae(n("b"), !1, j(K().rotateSelf(0, 180).invertSelf().translateSelf(-N, -R, .3 - X))),
                o(G, 56, 1),
                G.c4s(256),
                G.cbf(!1, !0, !1, !0),
                G.uae(n("b"), !1, j(K().translateSelf(-N, -R, -X - .3))),
                o(G, 56, 1),
                G.f1s(),
                Z = 0;
            }
            g(),
              A.u3a(g("j"), Y),
              A.b6o(36160, i),
              A.v5y(0, 0, 2048, 2048),
              A.ubh(g("g"), 4),
              A.ubh(g("h"), 4),
              A.uae(g("a"), !1, j(S)),
              t = h1,
              l = u1,
              r = d1,
              I
                ? (K().rotateSelf(0, 40 * x(n1) - 80, -8),
                  j(D, Y, 25),
                  j(D, Y, 26),
                  j(D, Y, 27),
                  K($).invertSelf(),
                  V(3.6, 3.5),
                  t = F,
                  l = O,
                  r = 5,
                  K(S, d).rotateSelf(20, 0).translateSelf(-t, -l, -r).rotateSelf(0, 99))
                : K(S, d).rotateSelf(-v1, -q).invertSelf().translateSelf(-t, -l, -r),
              f(54.7),
              o(A, 57, T),
              p(126),
              o(A, 57, T),
              A.b6o(36160, null),
              A.v5y(0, 0, A.drawingBufferWidth, A.drawingBufferHeight),
              A.c4s(16640),
              A.ubh(g("g"), 0),
              A.ubh(g("h"), 1),
              A.ubu(g("k"), t, l, r),
              A.uae(g("a"), !1, j($)),
              A.uae(g("b"), !1, j(d)),
              A.uae(g("i"), !1, v),
              o(A, 57, T),
              m(),
              A.uae(m("b"), !1, j(d.invertSelf())),
              A.ubu(m("j"), A.drawingBufferWidth, A.drawingBufferHeight, n1),
              A.d97(4, 3, 5123, 0);
          },
          u = new DOMMatrix(),
          d = new DOMMatrix(),
          v = new Float32Array(32),
          t = l,
          i = A.c5w(),
          g = e(
            A,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          n = e(
            G,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          m = e(
            A,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [f, p] = b(2, e => {
            let a = A.c25();
            return A.a4v(33984 + e),
              A.b9j(3553, a),
              A.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              A.t2z(3553, 10241, 9729),
              A.t2z(3553, 10240, 9729),
              A.t2z(3553, 34893, 515),
              A.t2z(3553, 34892, 34894),
              A.t2z(3553, 10243, 33071),
              A.t2z(3553, 10242, 33071),
              l => {
                let t = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, i = 1 / 0, n = -1 / 0, m = -1 / 0, f = -1 / 0;
                A.fas(36160, 36096, 3553, a, 0),
                  A.c4s(256),
                  K().scale3dSelf(l *= 1.1).multiplySelf(K(e1[e], u).multiplySelf(d).invertSelf());
                for (let a = 0; a < 8; ++a) {
                  let e = h[a];
                  V(4 & a ? 1 : -1, 2 & a ? 1 : -1, 1 & a ? 1 : -1),
                    t -= e.x = (0 | F) / l / i1,
                    r -= e.y = (0 | O) / l / i1,
                    s -= e.z = (0 | Q) / l / i1;
                }
                for (K().rotateSelf(298, 139).translateSelf(t / 8, r / 8, s / 8), l = 0; l < 8; ++l) {
                  let { x: e, y: a, z: t } = h[l];
                  V(e, a, t), n = z1(n, F), m = z1(m, O), f = z1(f, Q), c = w1(c, F), o = w1(o, O), i = w1(i, Q);
                }
                l = 10 + e,
                  i *= i < 0 ? l : 1 / l,
                  f *= 0 < f ? l : 1 / l,
                  A.uae(
                    g("b"),
                    !1,
                    j(
                      K(S, u).scaleSelf(2 / (n - c), 2 / (m - o), 2 / (i - f)).translateSelf(
                        (n + c) / -2,
                        (m + o) / -2,
                        (i + f) / 2,
                      ).multiplySelf(D),
                      v,
                      e,
                    ),
                    16 * e,
                    16,
                  );
              };
          });
        A.a4v(33986),
          A.b9j(3553, A.c25()),
          A.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, t),
          A.t2z(3553, 10241, 9987),
          A.t2z(3553, 10240, 9729),
          A.gbn(3553),
          A.b6o(36160, i),
          A.d45([0]),
          A.r9l(0),
          g(),
          A.ubh(g("q"), 2),
          m(),
          A.ubh(m("q"), 2),
          A.c5t(0, 0, 0, 1),
          A.d4n(515),
          A.e8z(2929),
          A.e8z(2884),
          G.e8z(2929),
          G.e8z(2884),
          G.v5y(0, 0, 128, 128),
          n(),
          G.uae(n("a"), !1, j(O1(1e-4, 2, 1.2, .4))),
          (() => {
            let e,
              i,
              n,
              m,
              f,
              h,
              u,
              d,
              v,
              g,
              p,
              b,
              S,
              a,
              t,
              l,
              r = !0,
              s = [],
              c = () => {
                b4.innerHTML = "Music: " + r, l && (I || !r ? l.disconnect() : l.connect(t.destination));
              },
              o = () => {
                let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
                e1 = [O1(.3, 55, e, 1.732051), O1(55, 181, e, 1.732051)],
                  $ = O1(.3, 181, e, 1.732051),
                  m = d = void 0,
                  s.length =
                    Z =
                    a =
                    b =
                    S =
                    m1 =
                    f1 =
                      0,
                  document.hidden && A(!0);
              },
              A = e => {
                if (I !== e) {
                  if (I = e, o(), document.body.className = e ? "l m" : "l", e) {
                    try {
                      document.exitFullscreen().catch(() => 0), document.exitPointerLock();
                    } catch {}
                  }
                  c();
                }
              },
              M = e => {
                try {
                  t || (t = new AudioContext(), (l = t.createBufferSource()).buffer = C, l.loop = !0, l.start()),
                    document.body.requestFullscreen().catch(() => 0);
                } catch {}
                A(!1), T = e;
              },
              k = (e, a) => e.buttons[a]?.pressed || 0 < e.buttons[a]?.value ? 1 : 0;
            oncontextmenu = () => !1,
              b1.onclick = () => M(),
              b2.onclick = () => M(1),
              b5.onclick = () => A(!0),
              b4.onclick = () => {
                r = !r, c();
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
              },
              onclick = e => {
                if (!I && (e.target === hC && (Z = 1), T)) {
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
                    (s[a] = !!e.type[5] && !0) && (0 === a && (Z = 1), 1 === a && A(!0)));
              },
              onmousemove = ({ movementX: e, movementY: a }) => {
                T && (e || a) && (q += .1 * e, v1 += .1 * a);
              },
              hC.ontouchstart = l => {
                if (!I) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    T && e > hC.clientWidth / 2
                      ? void 0 === d && (v = 0, h = e, u = a, d = t, p = v1, g = q)
                      : void 0 === m && (f = 0, i = e, n = a, m = t);
                  }
                  e = n1;
                }
              },
              hC.ontouchmove = l => {
                if (!I) {
                  for (let { pageX: e, pageY: a, identifier: t } of l.changedTouches) {
                    var r, s, c, o;
                    d === t && (v1 = p + (a - u) / 2.3, q = g + (e - h) / 2.3, v = 1),
                      m === t
                      && (t = (i - e) / 19,
                        r = L(t),
                        c = L(s = (n - a) / 19),
                        (o = .3 < z1(r, c)) && (f = 1),
                        b = P(t, -1) * (o && .2 < r),
                        S = P(s, -1) * (o && .2 < c),
                        2 < r && (i = 19 * (t < 0 ? -1 : 1) + e),
                        2 < c && (n = 19 * (s < 0 ? -1 : 1) + a));
                  }
                }
              },
              hC.ontouchend = a => {
                let t;
                document.activeElement === document.body && a.preventDefault();
                for (let e of a.changedTouches) {
                  e.identifier === d
                    ? (d = void 0, v || (t = 1), v = 0)
                    : e.identifier === m
                    ? (m = void 0, S = b = 0, f || (t = 1), f = 0)
                    : t = 1;
                }
                a.target === hC && t && e && .02 < (a = n1 - e) && a < .7 && (Z = 1);
              },
              a1 = () => {
                m1 = S + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), f1 = b + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
                let e = navigator.getGamepads()[0];
                e
                  && (T && (v1 += 80 * B * S1(e.axes[3], .3), q += 80 * B * S1(e.axes[2], .3)),
                    m1 += k(e, 12) - k(e, 13) - S1(e.axes[1], .2),
                    f1 += k(e, 14) - k(e, 15) - S1(e.axes[0], .2),
                    k(e, 9) && A(!0),
                    (e = k(e, 3) || k(e, 2) || k(e, 1) || k(e, 0)) && !a && (Z = 1),
                    a = e);
              },
              document.onvisibilitychange = onblur = onresize = o,
              A(!0);
          })(),
          (() => {
            let s,
              c,
              o,
              i,
              n,
              m,
              f,
              h,
              u,
              d,
              v,
              g,
              p,
              b,
              S,
              A,
              M = 0,
              k = 1,
              I = 2,
              j = 15,
              D = (e, a, t, l) => U(e, a, k || (P(L(a - e) ** .5 - t) + 1 / 7) * C1(1.5 * l)),
              Y = () => K((I ? E[g1] : H[28 !== M ? M : 0]).l),
              C = e => {
                1 < I ? (K(E[g1].l).multiplySelf(E[g1].D), V(0, .9 < l1 ? 15 : 1, -2.4)) : (Y(), V(b, S, A)),
                  e && (n = (F - N) / B, m = (Q - X) / B),
                  N = F,
                  R = O,
                  X = Q;
              };
            c1 = () => {
              let e, a, t, l, r;
              for (
                C(d),
                  G.r9r(0, 0, 128, 128, 6408, 5121, q1),
                  (() => {
                    let a, t, l, r, s, c = 0, o = 0, i = 0, n = 0, e = 0, m = 0, f = -1;
                    for (a = 0; a < 36; ++a) {
                      for (t = 512 * a, l = 96; l < 416; l += 4) {
                        for (r = 0; r < 2; ++r) {
                          let e = q1[t + l + r + 2];
                          (s = q1[t + l + r]) > n && (n = s),
                            s + e && (f < 0 || f === a) && (f = a, e === d ? ++c : o && o !== e || (o = e, ++i));
                        }
                      }
                    }
                    for (d = f < 0 ? 0 : i > 2 * c ? o : d, c = 36; c < 128; ++c) {
                      for (
                        a =
                          f =
                          i =
                          o =
                            0,
                          t = 512 * c,
                          l = 0;
                        l < 128;
                        ++l
                      ) {
                        s = q1[r = t + 4 * l],
                          l < 64 ? s > o && (o = s) : s > i && (i = s),
                          (s = q1[2 + r]) > f && (f = s),
                          s = q1[1 + r],
                          64 < l ? s > o && (o = s) : s > i && (i = s),
                          (s = q1[3 + r]) > a && (a = s);
                      }
                      (i -= o) * i > e * e && (e = i), (a -= f) * a > m * m && (m = a);
                    }
                    e *= .7,
                      h = P(1 - .01 * z1(L(e), L(m)), .3),
                      e /= 255,
                      n /= 255,
                      m /= 255,
                      Y().invertSelf(),
                      V(e, n, m, 0),
                      b += F,
                      S += n,
                      A += Q,
                      C();
                  })(),
                  !I && d === M || (M = d, Y().invertSelf(), V(N, R, X), b = F, S = O, A = Q, I = I && (d ? 0 : 1)),
                  (N < -20 || X < 109 ? -25 : -9) > R && (I = 2),
                  1 === d && (E[15].j = N < -15 && X < 0 ? 1 : 0),
                  i = _(i, o1 * (30 < d && d < 35), 2),
                  v = D(v, N, .5, 1),
                  g = D(g, u = U(_(u, R, 2), R, I || 8 * L(u - R)), 2, 1),
                  p = D(p, X, .5, 1),
                  T
                    ? (e = I + C1(18), h1 = U(h1, N, e), d1 = U(d1, X, e), u1 = U(u1, 1.6 + u, e), q = A1(q))
                    : (h1 = D(h1, v, 1, 2 + i),
                      d1 = D(d1, p + -18 + 5 * i, 1, 2 + i),
                      u1 = D(u1, z1(g + P((-60 - X) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                      e = w1(-6, -L(p - d1)),
                      q = M1(q, 90 - A1(y1(e, a = v - h1) / H1), k + C1(10)),
                      v1 = M1(v1, 90 - y1(k1(e, a), u1 - g) / H1, k + C1(10))),
                  v1 = P(v1, -87, 87),
                  k = 0,
                  e = P(m1, -1),
                  a = P(f1, -1),
                  t = S1(k1(e, a) ** .5, .1),
                  l = y1(e, a),
                  t && (s = 90 - l / H1),
                  c = M1(c, s, C1(8)),
                  o = _(o, t, 10),
                  J(N, .06 * h * o * y(18.2 * z) + u, X).rotateSelf(0, c),
                  r = 0;
                r < 2;
                ++r
              ) {
                let e = 9.1 * z - W * r;
                K(H[53].l, J(0)).translateSelf(0, o * P(.45 * x(e - W / 2))).rotateSelf(o * x(e) * .25 / H1, 0);
              }
              j = d ? 5 : _(j, I ? 13 : 19 - 2 * w1(0, R + 10), 2.2),
                n = d || I ? 0 : _(n, 0, 3),
                m = d || I ? 0 : _(m, 0, 3),
                e = (f = I ? 0 : _(f, d ? 7 * P(2 * t) * h : 0, d ? 9 : 1)) * t * L(e) * x(l),
                a = f * t * L(a) * y(l),
                t = B * (n + (y(l = T ? (180 + q) * H1 : 0) * a - x(l) * e)),
                r = B * -j,
                e = B * (m + (x(l) * a + y(l) * e)),
                Y().invertSelf(),
                V(t, r, e, 0),
                b += F,
                S += r,
                A += Q,
                C();
            };
          })(),
          requestAnimationFrame(a);
      }
    },
    l = new Image();
  l.onerror = l.onload = d,
    l.src = r,
    (r => {
      let E = 0,
        s = () => {
          let b = 0,
            e = f => {
              let h,
                r,
                s,
                c,
                u,
                o,
                i = 0,
                n = 0,
                d = [],
                m = new Int32Array(768 * f),
                v = 2 ** (t - 9) / f,
                g = W * 2 ** (l - 8) / f,
                p = X * f & -2;
              for (let l = 0; l <= 11; ++l) {
                for (
                  let e = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * E + l];
                  e < 32;
                  ++e
                ) {
                  let t = (32 * l + e) * f;
                  for (c = 0; c < 4; ++c) {
                    if (h = 0, a && (h = S[a - 1].charCodeAt(e + 32 * c) - 40, h += 0 < h ? 106 : 0), h) {
                      if (!(u = d[h])) {
                        let l,
                          r,
                          s = 0,
                          c = 0,
                          o = u = h,
                          i = E < 2
                            ? e => e % 1 * 2 - 1
                            : F1,
                          n = E < 2
                            ? E < 1
                              ? e => e % 1 < .5 ? 1 : -1
                              : e => (e = e % 1 * 4) < 2 ? e - 1 : 3 - e
                            : F1,
                          m = new Int32Array(C + T + H);
                        for (let a = 0, t = 0; C + T + H > a; ++a, ++t) {
                          let e = 1;
                          C > a ? e = a / C : C + T > a || (e = (1 - (e = (a - C - T) / H)) * 3 ** (-F / 16 * e)),
                            t < 0
                            || (t -= 4 * f,
                              r = .00396 * 2 ** ((o + M - 256) / 12),
                              l = .00396 * 2 ** ((o + j - 256) / 12) * (1 + (E ? 0 : .0072))),
                            m[a] = 80
                                * (i(s += r * e ** (k / 32)) * A + n(c += l * e ** (D / 32)) * I
                                  + (Y ? (2 * w() - 1) * Y : 0))
                                * e | 0;
                        }
                        u = d[u] = m;
                      }
                      for (let e = 0, a = 2 * t; u.length > e; ++e, a += 2) m[a] += u[e];
                    }
                  }
                  for (let e, a = 0; f > a; ++a) {
                    u = 0,
                      ((e = m[c = 2 * (t + a)]) || s)
                      && (r = .00308 * O,
                        1 !== E && 4 !== E || (r *= x(v * c * W * 2) * q / 512 + .5),
                        r = 1.5 * x(r),
                        i += r * n,
                        n += r * (o = (1 - Q / 255) * (e - n) - i),
                        e = 4 === E ? n : 3 === E ? o : i,
                        E || (e = (e *= 22e-5) < 1 ? -1 < e ? x(e / 4 * W * 2) : -1 : 1, e /= 22e-5),
                        e *= B / 32,
                        s = 1e-5 < e * e,
                        u = e * (1 - (o = x(g * c) * N / 512 + .5)),
                        e *= o),
                      p > c || (u += m[1 + c - p] * R / 255, e += m[c - p] * R / 255),
                      L[o = b + c >> 1] += (m[c] = u) / 65536,
                      P[o] += (m[++c] = e) / 65536;
                  }
                }
              }
              b += 768 * f;
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
            ][E],
            [A, M, k, I, j, D, Y, C, T, a, F, t, O, Q, B, N, l, R, X, q] = [
              [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
              [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
              [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
              [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
              [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
            ][E],
            H = 4 * a ** 2;
          e(5513), e(4562), e(3891), T1(++E < 5 ? s : r);
        },
        L = (C = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        P = C.getChannelData(1);
      T1(s);
    })(() => {
      let e = [-110, -100, -92, -82, -106, -97, -88],
        t = () => {
          let l = [];
          m = (e, a = S, t) => l.push(...h(e, a, t)), H.push({ l: new DOMMatrix(), i: l });
        },
        a = a => {
          let t = () => {
              let e = t.h = _(t.h, t.j, 4);
              t.g = _(t.g, t.j, 1),
                K(K(l).multiplySelf(a), J(0)).rotateSelf(50 * e - 25, 0).translateSelf(0, 1).m44 = e,
                Z && (V(), k1(N - F, R - O, X - Q) < 3)
                  ? t.j
                    ? .7 < e && (t.j = 0, g1 = r, Q1("* click *", 1), N1())
                    : e < .3 && (t.j = 1, g1 = r, Q1("* click *", 1), N1())
                  : t.j && .8 < e && 14 === r && (t.j = 0,
                    t1 < 13
                      ? Q1("Not leaving now, there are souls to catch!", 3)
                      : k || (Q1("Well done. They will be punished.<br>Thanks for playing", 1 / 0), k = 1));
            },
            l = H.at(-1).l,
            r = E.length;
          t.l = l,
            t.D = a,
            E.push(t),
            m(u(5), a.translate(.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
            m(u(5), a.translate(-.2).rotate(90, 90).scale(.4, .1, .5), v(.4, .5, .5)),
            m(u().slice(0, -1), a.translate(0, -.4).scale(.5, .1, .5), v(.5, .5, .4));
        },
        l = (o, ...i) => {
          let n,
            m,
            f,
            h,
            u = 0,
            d = 0,
            v = 1,
            g = -1,
            p = () => {
              if (p.j) {
                K(H[35].l).translateSelf(
                  e % 4 * 1.2 - 1.7 + x(z + e) / 7,
                  -2,
                  1.7 * (e >> 2) - 5.5 + L(e % 4 - 2) + y(z / 1.5 + e) / 6,
                );
              } else {
                let l, e, a, t, r, s = 1, c = 1 / 0;
                for (let t = 0; i.length > t; t++) {
                  let e = i[t], a = k1(S - e[0], A - e[1]);
                  s = w1(s, a / e[2]), (a -= e[2]) < 0 ? l = 1 : c > a && (c = a, b = e);
                }
                l
                || (e = S - b[0],
                  a = A - b[1],
                  t = k1(e, a),
                  r = y1(-a, e),
                  v && (h = P(h / (1 + w())), d = (w() - .5) * W / 2),
                  r += d,
                  g = -y(r),
                  u = x(r),
                  .1 < t && (t = w1(t, b[2]) / t, S = e * t + b[0], A = a * t + b[1])),
                  v = l,
                  h = _(h, 3 + 6 * (1 - s), 3 + s),
                  M = _(M, S = _(S, S + g, h), h),
                  k = _(k, A = _(A, A + u, h), h),
                  n = M1(n, y1(M - m, k - f) / H1 - 180, C1(3)),
                  K(I).multiplySelf(o).translateSelf(m = M, 0, f = k).rotateSelf(0, n, 7 * x(1.7 * z)),
                  V(),
                  k1(N - F, R - O, X - Q) < 1.6
                  && (p.j = 1,
                    Q1(
                      [
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
                      ][t1] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                      6,
                    ),
                    B1(),
                    N1());
              }
              j(D, Y, 28 + e);
            },
            b = i[0],
            [S, A] = b,
            [M, k] = b,
            I = H.at(-1).l,
            e = x1.length;
          x1.push(p);
        },
        r = (l, r = l, s = (e, a) => (a *= W / r, { x: y(e *= 2 * W / l) * x(a), y: y(a), z: x(e) * x(a) })) => {
          let c = [];
          for (let t = 0; l > t; t++) {
            for (let a = 0; r > a; a++) {
              let e = I1([], 0, 1);
              c.push(e),
                e.push(s(t, a, e)),
                a && e.push(s((t + 1) % l, a, e)),
                r - 1 > a && e.push(s((t + 1) % l, a + 1 % r, e)),
                e.push(s(t, a + 1 % r, e));
            }
          }
          return c;
        },
        s = e => f(x((e /= 11) * W), e).rotateSelf(10 * e).scaleSelf(1.002 - e, 1, 1.002 - e),
        c = e =>
          g(
            h(u().slice(0, -1), f(0, -e / 2).scale(6, e - 1, 2.2)),
            h(u().slice(0, -1), f(0, -e / 2 - 4).scale(4, e - 5, 4)),
            h(u(28, 1), f(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        o = (T1(() => {
          let t = 0,
            r = [],
            c = [],
            o = [],
            i = [],
            s = [],
            n = [],
            m = new Int32Array(8),
            f = new Map(),
            h = new Int32Array(m.buffer, 0, 5),
            u = new Float32Array(m.buffer);
          H.map((e, a) => {
            let s,
              l = e => {
                let { x: a, y: t, z: l } = s[e], r = (u[0] = a, u[1] = t, u[2] = l, f.get(e = "" + (s.A ? h : m)));
                return void 0 !== r
                  ? (a = 3 * r, i[a] = (i[a++] + m[5]) / 2, i[a] = (i[a++] + m[6]) / 2, i[a] = (i[a] + m[7]) / 2)
                  : (f.set(e, r = f.size), c.push(a, t, l, u[3]), o.push(m[4]), i.push(m[5], m[6], m[7])),
                  r;
              };
            for (s of (u[3] = 55 < a ? -28 : a, e.i)) {
              let { x: e, y: a, z: t } = R1(s);
              m[4] = 0 | s.s, m[5] = 32767 * e, m[6] = 32767 * a, m[7] = 32767 * t;
              for (let e = 2, a = l(0), t = l(1); s.length > e; ++e) r.push(a, t, t = l(e));
            }
            e.i = 0, e.B = t, e.C = t = r.length;
          }),
            [A, G].map(e => {
              e.b11(34962, e.c1b()),
                e.b2v(34962, new Float32Array(c), 35044),
                e.v7s(0, 4, 5126, !1, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Int16Array(i), 35044),
                e.v7s(1, 3, 5122, !0, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Uint32Array(o), 35044),
                e.v7s(2, 4, 5121, !0, 0, 0),
                e.b11(34963, e.c1b()),
                e.b2v(34963, new Uint16Array(r), 35044),
                e.e3x(0),
                e.e3x(1),
                e.e3x(2);
            });
          try {
            let [e, a, t, l, r] = JSON.parse(localStorage["Dante-22"]);
            s = e, n = a, g1 = t, r1 = l, z = r;
          } catch {}
          E.map((e, a) => e.h = e.g = e.j = 14 !== a && s[a] ? 1 : 0),
            x1.map((e, a) => e.j = n[a] ? 1 : 0),
            B1(),
            l1 = t1 || 14 !== g1 ? 1 : 0,
            T1(d);
        }),
          b(11, e => Y1(j1(D1(16), s(e), v(1, 1, .8, .2)).reverse(), j1(D1(16), s(e + 1), v(1, 1, .8, .2)), 1)).flat()),
        i = g(
          h(u(), f(0, -.5, 1).scale(1.15, 1.2, 6.5), v(.25, .25, .35, .3)),
          g(
            h(u(3), f(0, 0, -5.5).scale(3, 2), v(.6, .3, .4, .3)),
            h(u(), f(0, 0, -3.65).scale(2.5, 3), v(.6, .3, .4, .3)),
          ),
          ...[-1, 1].map(e => h(u(), f(1.2 * e, -.5, 1).scale(.14, .3, 6.5), v(.7, .2, 0, .3))),
        ),
        n = [
          h(u(), f(0, -3).scale(11, 1.4, 3), v(.9, .9, .9, .2)),
          h(u(), f(0, -2.2).scale(7.7, .5, 4), v(.5, .5, .5, .2)),
          b(12, e => h(u(), S.translate(e - 5.5, 4.4).scale(.1, .1, 2), v(.6, .5, .3, .2))).flat(),
          h(
            g(
              h(u(6), S.rotate(90).scale(6, 8, 6)),
              h(u(4, 0, .01), f(0, 6).scale(12, 2, .75).rotate(0, 45)),
              h(u(6), S.rotate(90).scale(5, 12, 5)),
              ...[-5, 0, 5].map(e => h(u(5), f(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
            ),
            S,
            v(.3, .6, .6, .3),
          ),
        ].flat();
      for (
        t(),
          m([p.slice(1)], f(-2).scale3d(3).rotate(90, 0)),
          t(),
          a(f(-5.4, 1.5, -19).rotate(0, -90)),
          [-15, 15].map((e, a) => {
            m(u(), f(0, 0, a ? 22 : -23).scale(3, 1, 8), v(.9, .9, .9, .2)),
              m(u(), f(0, 6.3, e).scale(4, .3, 1), v(.3, .3, .3, .4)),
              m(u().slice(0, -1), f(0, 1, e).scale(3, .2, .35), v(.5, .5, .5, .3));
          }),
          m(u(), f(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), v(.8, .8, .8, .2)),
          m(u(), f(3, 1.5, -20).scale(.5, 2, 5), v(.7, .7, .7, .2)),
          m(u(5), f(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), v(.6, .3, .3, .4)),
          m(u(), f(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), v(.75, .75, .75, .2)),
          m(g(
            X1(
              g(
                h(u(6, 0, 0, .3), f(0, -.92).scale(13, 2, 13), v(.8, .8, .8, .2)),
                h(u(), S.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), v(.5, .5, .5, .5)),
              ),
              h(
                u(),
                S.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                v(.8, .2, .2, .5),
              ),
              h(u(6), f(0, -8).scale(9, 8, 7), v(.2, .1, .4, .5)),
              h(u(6, 0, 0, .3), f(8, -4, -4).scale(14, 2, 13), v(.7, .7, .7, .2)),
            ),
            h(u(6), f(15.5, -1.5, 3.5).scale(3.5, 1, 3.5), v(.5, .5, .5, .5)),
            h(u(5, 0, 1.5), f(0, 1).scale(4.5, .3, 4.5), v(.7, .5, .9, .2)),
            h(u(5), S.scale(5, 30, 5), v(.4, .2, .6, .5)),
          )),
          a(f(15, -2, 4)),
          m(u(), f(-18.65, -3, 55).scale(2.45, 1.4, 2.7), v(.9, .9, .9, .2)),
          a(f(-55, -1.1, 46).rotate(0, 90)),
          m(u(7), f(-57, -2.6, 46).scale(4, 1, 4), v(.8, .8, .8, .3)),
          m(u(6), f(-61.3, -2.4, 49).scale(3, 1, 5), v(.4, .6, .6, .3)),
          m(n, f(-53, 0, 55)),
          m(u(), f(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), v(.7, .7, .7, .2)),
          m(u(3, 0, -.5), f(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), v(.8, .8, .8, .2)),
          m(g(
            h(u(), f(-100, 1, 63).scale(7.5, 4), v(.5, .5, .5, .4)),
            h(u(), f(-100, 0, 63).scale(2, 2, 4), v(.5, .5, .5, .4)),
            h(u(20, 1), f(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), v(.5, .5, .5, .4)),
          )),
          m(g(
            X1(
              h(u(), f(-100, -2.6, 70).scale(3, 1.1, 7), v(.8, .8, .8, .2)),
              h(u(), f(-100, -2.4, 55).scale(8, .9, 8), v(.8, .8, .8, .2)),
              h(u(), f(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), v(.8, .8, .8, .2)),
              h(u(6), f(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), v(.6, .6, .6, .3)),
              h(u(), f(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), v(.8, .8, .8, .2)),
              h(u(), f(-100, .42, 92).scale(3, 1.1, 4.1), v(.8, .8, .8, .2)),
              h(u(), f(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), v(.8, .8, .8, .2)),
            ),
            h(u(8), f(-100, -1, 55).scale(7, .9, 7), v(.3, .3, .3, .4)),
            h(u(8), f(-100, -2, 55).scale(4, .3, 4), v(.4, .4, .4, .5)),
            h(u(8, 0, -3.1), f(-100, -3, 55).scale(.4, 1, .4), v(.4, .4, .4, .5)),
          )),
          p.map(({ x: a, z: t }) => {
            m(u(6), f(3 * a, 3, 15 * t).scale(.7, 4, .7), v(.6, .3, .3, .4)),
              m(u(6), f(7 * a - 100, -3, 7 * t + 55).scale(1, 8.1), v(.6, .15, .15, .8)),
              [4, -.4].map(e => m(u(6), f(7 * a - 100, e, 7 * t + 55).scale(1.3, .5, 1.3), v(.4, .2, .2, .8))),
              [1.5, 8].map(e =>
                m(u(15, 1), f(9 * a - 38.9, e - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), v(.6, .6, .6, .3))
              ),
              m(u(14, 1).slice(0, -2), f(9 * a - 38.9, -18, 11 * t + 17).scale(1, 14.2), v(.25, .25, .25, 1));
          }),
          b(7, e => {
            m(
              u((23 * e + 1) % 5 + 5, 0, .5),
              f(5 * x(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1.1 + e / 6, 5 + e / 3),
              v(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
            );
          }),
          m(u(), f(-87, -9.5, 24).scale(7, 1, 3), v(.4, .5, .6, .4)),
          m(u(4), f(-86, -9.2, 27).scale(5, 1, 5), v(.5, .6, .7, .3)),
          m(u(12, 1), f(-86, -9, 31).scale(1.5, 1, 1.5), v(.3, .3, .4, .1)),
          a(f(-86, -7.5, 31)),
          m(u(5), f(-38.9, -11.1, 10).scale(2, 1.2, 2), v(.2, .4, .7, .3)),
          m(g(
            X1(
              h(u(), f(-38.9, -11.3, 17).scale(11, 1, 13), v(.3, .4, .6, .3)),
              h(u(5), f(-38.9, -11.1, 17).scale(9, 1, 9), v(0, .2, .3, .5)),
            ),
            h(u(5), f(-38.9, -11.1, 17).scale3d(5.4), v(0, .2, .3, .5)),
          )),
          a(f(-38.9, -9.4, 10)),
          m(
            g(
              X1(
                h(u(6), f(0, 0, -18).scale(15, 1.3, 15), v(.7, .7, .7, .3)),
                h(u(6), S.scale(4, 1.2, 8), v(.45, .4, .6, .3)),
              ),
              ...b(6, a =>
                b(
                  6,
                  e =>
                    h(
                      u(6),
                      f(4.6 * e - (1 & a ? 10 : 12), 0, 4.6 * a + 2 * x(4 * e) - 32).scale3d(2),
                      v(.7, .7, .7, .3),
                    ),
                )).flat(),
            ),
            f(-38.9, -11.3, -1),
          ),
          m(u(5), f(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), v(.8, .1, .25, .4)),
          a(f(-84, -.7, 85).rotate(0, 45)),
          m(
            g(h(u(), f(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...e.map(e => h(u(), f(e, .05, -3).scale(1.35, 2, 9)))),
            S,
            v(.5, .5, .6, .2),
          ),
          m(u(), f(-96.5, 1, -2).scale(19, .3, .3), v(.5, .5, .6, .2)),
          a(f(-116, -1.4, -18).rotate(0, 180)),
          m(u(6), f(-116, -2.6, -16.5).scale(3.2, .8, 3), v(.6, .5, .7, .2)),
          m(u(), f(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), v(.8, .8, .8, .2)),
          m(u().slice(0, -1), f(-115.5, -17, -12).scale(.5, 15, 2.2), v(.6, .6, .6, .3)),
          m(u(8).slice(0, -2), f(-114, -17, -2).scale(2, 15, 2), v(.6, .6, .6, .3)),
          m(u(8).slice(0, -2), f(-79, -17, -2).scale(2, 15, 2), v(1, 1, 1, .3)),
          m(u().slice(0, -1), f(-77, -17, -50.5).scale(2.2, 15, .5), v(.6, .6, .6, .3)),
          m(g(
            h(u(12).slice(0, -1), f(-77, -14.5, -12).scale(4, 17.5, 4), v(.7, .7, .7, .2)),
            h(u(12), f(-77, 3.1, -12).scale(3, 5, 3), v(.4, .5, .6, .2)),
            h(u(), f(-79, .1, -12).scale(3.5, 2, 1.3), v(.4, .5, .6, .2)),
            h(u(), f(-77, .1, -14).scale(1.5, 2, 2), v(.4, .5, .6, .2)),
          )),
          m(g(
            h(u(), f(-93, -5.8, -40).scale(9, 1, 5), v(.8, .8, .8, .1)),
            h(u(9), f(-98, -5.8, -40).scale(3, 8, 3), v(.7, .7, .7, .2)),
          )),
          m(u(), f(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), v(.6, .6, .6, .3)),
          m(u(9).slice(0, -1), f(-98, -18.4, -40).scale(2.5, 13.5, 2.5), v(.5, .5, .5, .3)),
          a(f(-98, -4.4, -40).rotate(0, 90)),
          [-1, 1].map((a, t) => {
            m(
              g(
                h(u(), f(-4 * a, 3.5, -.5).scale(4, 4, .7), v(.5, .5, .5, .4)),
                h(u(5), f(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), v(.6, .24, .2, .5)),
                h(u(), S.scale(3, 3, 10), v(.6, .24, .2, .5)),
                h(u(5), f(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), v(.6, .24, .2, .5)),
                h(u(32, 1), f(0, 3, -5).scale(3, 4, 10).rotate(90, 0), v(.6, .24, .2, .5)),
              ),
              f(a - 100, .7, 97),
            ),
              m(u(12, 1), f(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), v(.6, .24, .2, .5)),
              [7.2, 1.5].map(e => m(u(15, 1), f(-7.5 * a - 100, e + .7, 96).scale(1.1, .5, 1.1), v(.5, .24, .2, .4))),
              m(o, f(-8 * a, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * a + 90)),
              m(o, f(-5 * a - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90)),
              b(5, e => m(o, f(18.5 * (t - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2)));
          }),
          m(g(
            h(u(), f(-82.07, .8, 106).scale(11, .9, 2.2), v(.7, .7, .7, .1)),
            h(u(45, 1), f(-81, .7, 106).scale3d(7.7), v(.7, .7, .7, .1)),
          )),
          m(u(), f(-58, 1, 106).scale(2, .65, 2), v(.7, .7, .7, .2)),
          m(u(), f(-50.7, 1, 99).scale(2, .65, 1), v(.7, .7, .7, .2)),
          m(u(), f(-42, .4, 91).scale(5, 1, 2.5), v(.7, .7, .7, .3)),
          m(u(), f(-34.2, .4, 91).scale(3, 1, 3), v(.7, .7, .7, .3)),
          m(u(5), f(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), v(.2, .5, .5, .6)),
          a(f(-34, 2.7, 96).rotate(-12, 0)),
          m(g(
            X1(
              h(u(), f(-101.5, .7, 93.5).scale(10.5, 1, 2), v(.7, .7, .7, .2)),
              h(u(6, 0, 0, .6), f(-100, .7, 105.5).scale(8, 1, 11), v(.7, .7, .7, .2)),
            ),
            h(u(5), f(-100, .7, 113).scale(4, 3, 4), v(.7, .7, .7, .2)),
          )),
          b(3, e => {
            m(c(16), f(-77, -9, -12 * e - 20).rotate(0, 90), v(.6, .6, .6, .3)),
              m(c(16), f(12 * e - 109, -9, -12), v(.6, .6, .6, .3)),
              m(
                c(24.7 - .7 * (1 & e)),
                f(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? v(.5, .5, .5, .3) : v(.35, .35, .35, .5),
              );
          }),
          m(g(
            X1(
              h(u(), f(0, 16, 111).scale(3, 1, 3.8), v(.5, .3, .3, .4)),
              h(u(6, 0, 0, .3), f(0, -.92, 95).scale(14, 2, 14), v(.8, .8, .8, .2)),
              h(u(), f(0, 16, 110.5).scale(12, 1, 3), v(.5, .3, .3, .4)),
            ),
            h(u(5), f(0, 0, 95).scale3d(6), v(.3, .3, .3, .5)),
            h(u(5), f(0, 16, 103.5).scale(5.5, 5, 5.5), v(.5, .3, .3, .4)),
          )),
          a(f(0, 1.7, 82).rotate(0, 180)),
          m(u(5).slice(0, -1), f(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), v(.5, .3, .3, .4)),
          m(u(6), f(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), v(.5, .6, .7, .3)),
          m(u(), f(0, 16, 127.8).scale(1.5, 1, .7), v(.5, .6, .7, .3)),
          m(u(7), f(0, 15.1, 133).scale(5, 2, 5), v(.4, .5, .6, .4)),
          l(f(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          l(f(0, 2.8), [5, 10, 3], [-5, 10, 3], ...D1(18).map(({ x: e, z: a }) => [7 * e, 10 * a, 4.5 - 2 * L(e)])),
          l(f(0, 3, 95), ...D1(9).map(({ x: e, z: a }) => [9 * e, 9 * a, 4])),
          l(f(0, 19, 134), [0, 0, 3.5]),
          l(f(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          l(f(-89, .2, 80), [0, 0, 6]),
          l(f(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          l(f(-115, .2, -12), [0, 0, 3.5]),
          l(f(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
          t(),
          m(u(5), f(0, -.2).scale(5, 1, 5), v(.6, .65, .7, .3)),
          a(f(0, 1.2)),
          b(2, () => {
            t(),
              p.map(({ x: e, z: a }) => {
                m(u(11, 1).slice(0, -2), f(4 * e, 4, 4 * a).scale(.8, 3, .8), v(.5, .3, .7, .6)),
                  m(u(), f(4 * e, 7, 4 * a).scale(1, .3), v(.5, .5, .5, .3));
              }),
              m(g(
                h(u().slice(0, -1), S.scale(5, 1, 5), v(.8, .8, .8, .3)),
                ...[-1, 1].map(e => h(u(25, 1), f(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), v(.8, .8, .8, .3))),
              )),
              m(u(), f(0, -3).scale(8, 2, 8), v(.4, .4, .4, .3));
          }),
          t(),
          m(g(
            X1(
              h(u(), S.scale(1.5, 1, 5), v(.9, .9, .9, .2)),
              h(u(), f(0, -2).scale(2, 3.2, 1.9), v(.3, .8, .5, .5)),
              h(u(6), S.scale(4, 1, 5), v(.9, .9, .9, .2)),
              h(u(16, 1, 0, 4), S.scale(1, 1, 1.5).rotate(0, 90), v(.9, .9, .9, .2)),
            ),
            h(u(), S.scale(1.3, 10, 1.3), v(.2, .7, .4, .6)),
          )),
          l(f(0, 2.8), [0, 0, 4.5]),
          t(),
          m(u(3), f(-23, -1.7, 55.8).scale(5, .7, 8.3), v(.3, .6, .6, .2)),
          m(u(8), f(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), v(.8, .8, .8, .2)),
          m(u(), f(-23, -3, 55).scale(5.2, 1.7, 3), v(.5, .5, .5, .3)),
          m(u(), f(-23, -2.2, 62).scale(3, 1, 4), v(.5, .5, .5, .3)),
          a(f(-23, -.5, 66.5)),
          t(),
          m(u(), f(-22.55, -3, 55).scale(1.45, 1.4, 2.7), v(.7, .7, .7, .2)),
          m(g(h(u(), S.scale(3, 1.4, 2.7)), h(u(), S.scale(1.2, 8, 1.2))), f(-33, -3, 55), v(.7, .7, .7, .2)),
          t(),
          m(g(h(u(), S.scale(3, 1.4, 2.7)), h(u(), S.scale(1, 3))), f(-27, -3, 55), v(.9, .9, .9, .2)),
          m(u(), f(-39, -3, 55).scale(3, 1.4, 2.7), v(.9, .9, .9, .2)),
          t(),
          m(u(6), f(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), v(.7, .7, .7, .4)),
          t(),
          [0, 12, 24].map(e =>
            m(u(), f(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.2, .5, .6, .2))
          ),
          t(),
          [6, 18].map(e =>
            m(u(), f(e - 76.9, e / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), v(.1, .4, .5, .2))
          ),
          t(),
          m(u(5), f(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), v(.3, .3, .5, .5)),
          m(u(5).slice(0, -1), f(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), v(.6, .3, .5, .5)),
          m(
            g(
              h(u(5), f(0, 2).scale(5, 7, 5).skewY(8)),
              h(u(5), f(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
              h(u(), S.scale(2, 8, 3)),
            ),
            f(-38.9, -11.3, 17),
            v(.2, .4, .5, .5),
          ),
          l(f(-39.1, -.6, 17).rotate(11), ...D1(15).map(({ x: e, z: a }) => [3 * e, 3 * a, 1.2])),
          e.map((e, a) => {
            a % 2 || 6 <= a || t(), m(i, f(e, 1.9, -12));
          }),
          b(4, e => {
            t(),
              m(
                u(6),
                f(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                  2.6,
                  1,
                  2.5,
                ),
                v(.5 - e / 8, e / 12 + .5, .7, .3),
              );
          }),
          [v(.1, .55, .45, .2), v(.2, .5, .5, .3), v(.3, .45, .55, .4)].map((e, a) => {
            t(),
              m(u(), f(-23.5, .5, 91 + 6.8 * a).scale(1 === a ? 2 : 3.3, 1, 3.3), e),
              2 === a && m(u(), f(-29.1, .4, 91).scale(2.1, 1, 3), v(.7, .7, .7, .3)),
              1 === a && m(u(), f(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), v(.6, .6, .7, .3));
          }),
          t(),
          m(u(5), S.scale(5, 1.1, 5), v(.5, .3, .3, .4)),
          m(u(5), S.scale(5.5, .9, 5.5), v(.25, .25, .25, .4)),
          a(f(0, 1.5, -1).rotate(0, 180)),
          b(4, a => {
            t(),
              b(
                7,
                e =>
                  m(h(
                    u(8, 1).slice(0, -1),
                    f((2 < a ? 3.5 : 4) * (e / 6 - .5), 3).scale(.2, 2 < a ? 4 : 3, .2),
                    v(.3, .3, .38),
                  )),
              );
          }),
          t(),
          m(n),
          t(),
          m(u(15, 1), f(-7.5).rotate(0, 90).scale(3, 2.3, 3), v(.4, .4, .4, .3)),
          m(u(10).slice(0, -1), f(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), v(.3, .8, .7, .3)),
          m(u(5).slice(0, -1), f(-7.5, 2.7).rotate(0, 90).scale(1, .2), v(.5, .5, .5, .5)),
          a(f(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
          [-1, 1].map(e => m(o, S.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
          m(g(h(u(10), S.scale(6, 2, 6), v(.1, .6, .5, .3)), h(u(10), S.scale(3.3, 6, 3.3), v(.1, .6, .5, .5)))),
          l(f(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
          t(),
          m(u(3), f(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), v(.5, .3, .3, .4)),
          [22, 30].map(e => {
            m(u(6), f(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), v(.7, .7, .7, .4)),
              m(u(), f(0, 6.2, e + 95).scale(.5, 11, .5), v(.5, .3, .3, .4));
          }),
          t(),
          m(g(
            h(u(28, 1), S.scale(7.5, 1, 7.5), v(.45, .45, .45, .2)),
            h(u(), f(0, 0, -5.5).scale(1.5, 3, 2.7), v(.45, .45, .45, .2)),
          )),
          m(u(8).slice(0, -1), f(0, 2).scale(3, 1.5, 3).rotate(0, 22), v(.7, .7, .7, .1)),
          m(u(5).slice(0, -1), f(0, 2).scale(1, 2), v(.3, .3, .3, .2)),
          l(f(0, 3), ...D1(14).map(({ x: e, z: a }) => [5.6 * e, 5.6 * a, 2])),
          t(),
          [-1, 1].map(e => m(o, S.rotate(0, 90).translate(-5 * e, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * e + 90))),
          m(g(
            h(u(28, 1).slice(0, -1), f(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
            h(u().slice(0, -1), f(0, 2).scale(9, 1.1, 2), v(.3, 0, 0, .3)),
          )),
          m(u(28, 1), S.scale(7.5, 1, 7.5), v(.45, .45, .45, .2)),
          m(u(5).slice(0, -1), f(0, 1).scale(1, .2), v(.3, .3, .3, .2)),
          t(),
          m(g(
            h(u(28, 1).slice(0, -1), f(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
            h(u().slice(0, -1), f(0, 2, 7).scale(2, 1.1, 9), v(.3, 0, 0, .3)),
            h(u().slice(0, -1), f(7, 2).scale(9, 1.1, 2), v(.3, 0, 0, .3)),
          )),
          m(u(28, 1), S.scale(7.5, 1, 7.5), v(.45, .45, .45, .2)),
          m(u(5).slice(0, -1), f(0, 1).scale(1, .2), v(.3, .3, .3, .2)),
          t(),
          m(g(
            h(u(28, 1).slice(0, -1), f(0, 2).scale(7.5, 1, 7.5), v(.35, 0, 0, .3)),
            h(u().slice(0, -1), f(0, 2, -7).scale(2, 1.1, 9), v(.3, 0, 0, .3)),
            h(u().slice(0, -1), f(7, 2).scale(9, 1.1, 2), v(.3, 0, 0, .3)),
          )),
          m(u(28, 1), S.scale(7.5, 1, 7.5), v(.45, .45, .45, .2)),
          m(u(5).slice(0, -1), f(0, 1).scale(1, .2), v(.3, .3, .3, .2)),
          b(2, () => {
            t(),
              m(g(
                h(u(30, 1, 1.15, 1), f(0, -3).scale(3.5, 1, 3.5), v(.7, .4, .25, .7)),
                h(u(), f(4, -1.2).scale3d(2), v(.7, .4, .25, .3)),
                h(u(30, 1, 1.3, 1), f(0, -2.5).scale(2.6, 1, 3), v(.7, .4, .25, .2)),
              )),
              a(f(0, -3, 4));
          }),
          e = 0;
        e < 16;
        ++e
      ) {
        t(),
          m(u(6, 1).slice(0, -1), S.scale(.12, 1.2, .12), v(.3, .3, .5, .1)),
          m(u(9, 1), f(0, .8).scale(.2, .3, .2), v(.7, 1, .2)),
          m(u(3), f(0, -1).rotate(90, 90).scale(.3, .4, .3), v(.2, .2, .2, .1));
      }
      t(),
        m(r(20), f(0, 1).scale3d(.5), v(1, .3, .4)),
        m(r(30), S.scale(.65, .8, .55), v(1, .3, .4)),
        m(u(), f(0, .9, .45).scale(.15, .02, .06), v(.3, .3, .3)),
        [-1, 1].map(e => {
          m(o, S.rotate(0, 0 < e ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), v(1, 1, .8)),
            m(
              h(g(u(15, 1), h(u(), f(0, 0, 1).scale(2, 2, .5))), S.rotate(-90, 0).scale(.1, .05, .1), v(.3, .3, .3)),
              f(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          t(), m(u(20, 1), f(.3 * e, -.8).scale(.2, .7, .24), v(1, .3, .4));
        }),
        t(),
        m(u(6, 1).slice(0, -1), S.scale(.77, 1, .77), v(1, .3, .5)),
        t(),
        m(
          r(28, 22, (e, a, t) => {
            let l = a / 22, r = e * W * 2 / 28, s = x(l ** .6 * W / 2);
            return e = l * l * x(e * W * .5) / 4,
              21 < a
                ? { x: t.A = 0, y: -.5, z: 0 }
                : { x: y(r) * s, y: y(l * W) - l - e, z: x(r) * s + x(e * W * 2) / 4 };
          }),
          S.scale(.7, .7, .7),
          v(1, 1, 1),
        ),
        [-1, 1].map(e => m(r(10), f(.16 * e, .4, -.36).scale3d(.09)));
    });
});
