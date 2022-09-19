let g1 = !0,
  K = 0,
  V = 0,
  z1 = 0,
  J = 0,
  y = 0,
  x = 0,
  G = 0,
  v1 = 0,
  p1 = 0,
  d1 = 0,
  _ = 0,
  z = 0,
  w1 = 0,
  w = .066,
  Z = Math.PI / 180,
  $ = new DOMMatrix(),
  t1 = (t, a) => a < t ? t : a,
  A1 = t => t < 0 ? -t : t,
  a1 = t => t < 0 ? 0 : 1 < t ? 1 : t,
  e1 = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  I1 = t => Math.atan2(Math.sin(t *= Z), Math.cos(t)) / Z,
  P1 = (t, a, e) =>
    ((t *= Z) + (2 * (a = (a * Z - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / Z,
  S1 = (t, a, e, l) => {
    let r = a - t;
    return (t += Math.sign(a - t) * t1(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * a1(l / 7);
  },
  l1 = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  Y1 = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  p = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  Y = ({ x: t, y: a, z: e }) => Math.hypot(t - m1.x, a - m1.y, e - m1.z) || 0,
  k1 = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  d = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  b = (t, a, e) => (t.C = e, t.v = a, t),
  A = (t, l, a = t.v) =>
    b(
      t.map(t =>
        ((
          { x: t, y: a, z: e },
        ) => ({ x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }), { x: t, y: a, z: e }))(t)
      ),
      a,
      t.C,
    ),
  o = (t, a, e) => t.map(t => A(t, a, e)),
  I = (e, l = 0) =>
    l1(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  r = (l, r, s) => l.map((t, a, { length: e }) => b([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.v, s)),
  c = (
    t,
    a,
    e = 0,
    l,
  ) => (l = t.length ? t : I(t, l),
    t = A(l, $.translate(0, 1).scale3d(0 < e ? e : 1)),
    e = A(l, $.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
    [...r(e, t, a), e, t]),
  e = (
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
        let t = b([], 0, 1);
        n.push(t),
          t.push(s(e, a, t)),
          a && t.push(s((e + 1) % l, a, t)),
          r - 1 > a && t.push(s((e + 1) % l, a + 1 % r, t)),
          t.push(s(e, a + 1 % r, t));
      }
    }
    return n;
  },
  P = (l, r) => {
    let s, n, o, c = r.B;
    for (let t = 0; c.length > t; ++t) {
      if ((o = p(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
        n = [], o = [], c = r.B, t = r.A;
        let a = c.at(-1), e = p(l, a) - l.w;
        for (let t of c) {
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
          o: 2 < n.length && { B: b(n, c.v, c.C), A: t, u: r },
          m: 2 < o.length && { B: b(o, c.v, c.C), A: t, u: r },
        };
      }
    }
    return { o: s, m: n };
  },
  s = (e, l, r = k1(l.B)) => {
    if (e) {
      let { o: t, m: a } = P(e, l);
      t || a || e.s.push(l), t && (e.o = s(e.o, t, r)), a && (e.m = s(e.m, a, r));
    } else e = { x: r.x, y: r.y, z: r.z, w: r.w, s: [l], o: 0, m: 0 };
    return e;
  },
  n = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { o: e, m: l } = P(t, a);
        e || l || (0 < s * p(t, r) ? e = a : l = a), e && (t.o ? o(t.o, e) : n.push(e)), l && t.m && o(t.m, l);
      };
    for (let t of r.s) o(a, t);
    return n;
  },
  S = (t, a) => t && (a(t), S(t.o, a), S(t.m, a)),
  k = t => t.length ? t.reduce((t, a) => s(t, { B: a, A: 0, u: 0 }), 0) : t,
  l = t => (S(t, a => {
    let t = a.m;
    a.m = a.o, a.o = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.s) t.A = !t.A;
  }),
    t),
  i = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = k(l), a) {
        a = k(a), S(l, t => t.s = n(a, t, 1)), S(a, t => r.push([t, n(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) s(l, t, a);
      }
      return l;
    }),
  h = (t, ...a) => l(i(l(k(t)), ...a)),
  f = t => {
    let e = new Map(),
      l = new Map(),
      r = a => {
        if (a.u) {
          let t = e.get(a.u);
          t ? (l.delete(t), a = r(a.u)) : e.set(a.u, a);
        }
        return a;
      };
    return S(t, a => {
      for (let t of a.s) l.set(r(t), t.A);
    }),
      Array.from(l, ([{ B: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return b(a ? e.reverse() : e, t.v, t.C);
      });
  },
  u = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  r1 = [],
  m = (t, a = $, e) => j.s.push(...o(t, a, e)),
  M = (t, a = 1) => {
    let e = j;
    return r1.push(j = a = { l: $, F: r1.length, D: a, s: [] }), t(a), j = e, a;
  },
  s1 = -11,
  n1 = 17,
  o1 = -90,
  c1 = 0,
  i1 = 0,
  R = t => Math.sin(t * Math.PI * 2),
  h1 = [],
  F1 = () => {
    y1 || !g1 ? W.disconnect() : W.connect(q.destination), b4.innerHTML = "Music: " + g1;
  },
  T1 = (t = !1) => {
    if (y1 !== t) {
      y1 = t, x1 = 0;
      try {
        t ? document.exitPointerLock() : W.start();
      } catch {}
      document.body.className = t ? "l m" : "l", F1();
    }
  },
  f1 = (t, a, e) => t + (a - t) * a1(1 - Math.exp(-e * w)),
  t = ({ j: t }) => t,
  u1 = [],
  j1 = [],
  C1 = () => {
    y = j1.reduce((t, a) => t + a.j, 0),
      h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][y];
  },
  F = () => {
    C1(), localStorage.DanteSP22 = JSON.stringify([u1.map(t), j1.map(t), G, J, w1]);
  },
  m1 = { x: 0, y: 0, z: 0 },
  T = (t, a, e) =>
    $.translate(t + Math.sin(J + 2) / 5, a + Math.sin(.8 * J) / 3, e).rotateSelf(
      2 * Math.sin(J),
      Math.sin(.7 * J),
      Math.sin(.9 * J),
    ),
  g = r => {
    let s = j,
      n = u1.length,
      o = {
        j: 0,
        h: 0,
        i: 0,
        u: s,
        g() {
          let t = o.j, a = o.h, e = o.i, l = s.l.multiply(r);
          o.G = l,
            Y(l.transformPoint()) < 2.9 && h1[5] && (a < .3 || .7 < a)
            && (o.j = t ? 0 : 1, n && !_ && (h4.innerHTML = "* click *", x = J + 1), G = n, F()),
            o.h = f1(a, t, 4),
            o.i = f1(e, t, 1),
            o.l = l.rotate(60 * o.h - 30, 0).translateSelf(0, 1);
        },
      };
    u1.push(o),
      m(c(5), r.translate(-.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
      m(c(5), r.translate(.2).rotate(90, 90).scale(.4, .1, .5), 8355686),
      m(c(u), r.translate(0, -.4).scale(.5, .1, .5), 6717311);
  },
  v = (o, ...t) => {
    let c = -1,
      i = 0,
      h = 0,
      f = 0,
      u = 0,
      m = 0,
      M = 3,
      g = 1,
      v = {
        j: 0,
        g() {
          if (!v.j) {
            var e, t, a = 1, l = 1 / 0;
            for (e of b) {
              var r = e.w, s = Math.hypot(I - e.x, z - e.z), n = s - r;
              t ||= s < r, 0 < n && n < l && (l = n, A = e), a = a < (r = s / r) ? a : r;
            }
            if (!t) {
              r = A.w;
              let t = Math.hypot(s = I - (l = A.x), n = z - (e = A.z)), a = Math.atan2(-n, s);
              g && (h = (Math.random() - .5) * Math.PI / 2, M = t1(1, M / (1 + Math.random()))),
                a += h,
                c = -Math.cos(a),
                i = Math.sin(a),
                .1 < t && (t = (r > t ? t : r) / (t || 1), I = s * t + l, z = n * t + e);
            }
            g = t,
              M = f1(M, 3 + 6 * (1 - a), 3 + a),
              P = f1(P, I = f1(I, I + c, M), M),
              S = f1(S, z = f1(z, z + i, M), M),
              f = P1(f, Math.atan2(P - u, S - m) / Z - 180, 3 * w),
              u = P,
              m = S,
              a = (v.l = o.multiply(
                p.l.translate(P, 0, S).rotateSelf(0, f).skewXSelf(7 * Math.sin(2 * J)).skewYSelf(
                  7 * Math.sin(1.4 * J),
                ),
              )).transformPoint(),
              Y(a) < 1.5
              && (v.j = 1,
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
                ][y] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                t = y && y < 12 ? 5 : 7,
                _ || (h4.innerHTML = a, x = J + t),
                F());
          }
          v.j
            && (a = d % 4 - 2,
              v.l = r1[2].l.translate(
                d % 4 * 1.2 - 1.7 + Math.sin(J + d) / 7,
                -2,
                1.7 * (d / 4 | 0) - 5.5 + (a < 0 ? -a : a) + Math.cos(J / 1.5 + d) / 6,
              ));
        },
      },
      p = j,
      d = j1.length,
      b = t.map(([t, a, e]) => ({ x: t, z: a, w: e })),
      A = b[0],
      { x: I, z } = A,
      P = I,
      S = z;
    j1.push(v);
  },
  H1 = () => {
    for (let t of r1) t.g && (t.l = t.g(t));
    for (let t of u1) t.g();
    for (let t of j1) t.g();
  },
  Q1 = (t, a, e, l) => {
    let r = 0,
      s = 0,
      n = 0,
      o = 1 / 0,
      c = -1 / 0,
      i = 1 / 0,
      h = -1 / 0,
      f = 1 / 0,
      u = -1 / 0,
      m = 1.1 * (e - a),
      y = new DOMMatrix(Y1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return t = l1(
      8,
      t => (t = y.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (m * t.x | 0) / m / t.w,
        s -= t.y = (m * t.y | 0) / m / t.w,
        n -= t.z = (m * t.z | 0) / m / t.w,
        t),
    ),
      a = $.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      A(t, a).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          u = u > e ? u : e;
      }),
      f *= f < 0 ? l : 1 / l,
      u *= 0 < u ? l : 1 / l,
      $.scale(2 / (c - o), 2 / (h - i), 2 / (f - u)).translateSelf((c + o) / -2, (h + i) / -2, (f + u) / 2)
        .multiplySelf(a).toFloat32Array();
  },
  B1 = (t, a = 35633) => (a = M1.c6x(a), M1.s3c(a, t), M1.c6a(a), a),
  D1 = (t, a) => {
    let e = {}, l = M1.c1h();
    return M1.abz(l, t), M1.abz(l, B1(a, 35632)), M1.l8l(l), t => t ? e[t] || (e[t] = M1.gan(l, t)) : M1.u7y(l);
  },
  O1 = (a, e, l) => {
    let r = t => M1.d97(4, t.H, 5123, 2 * t.I);
    if (y1) M1.uae(a, !1, $.rotate(0, 40 * Math.sin(z1) - 70).toFloat32Array()), r(L1), X1.map(r);
    else {
      for (let t of r1) {
        (e || t !== L1 && t !== X1[0] && t !== X1[1]) && t.D
          && (M1.uae(a, !1, t.l.toFloat32Array()), r(t));
      }
      for (let t of u1) M1.uae(a, !1, t.l.toFloat32Array()), r(C[.5 < t.h ? 1 : 0]);
      for (let t of j1) M1.uae(a, !1, t.l.toFloat32Array()), r(l ? Q : H);
    }
  },
  X = new Int32Array(10725888),
  j,
  y1,
  x1,
  R1,
  C,
  H,
  Q,
  X1,
  L1,
  B = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  D = (() => {
    let a = l1(
        11,
        t => $.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
      ),
      e = I(18);
    return l1(10, t => r(A(e, a[t]).reverse(), A(e, a[t + 1]), 1)).flat();
  })(),
  O = f(
    h(
      o(c(20, 1, 1.15, 1), $.translate(0, -3).scale(3.5, 1, 3.5), -1304467790),
      o(c(20, 1, 1.3, 1), $.translate(0, -2.5).scale(2.6, 1, 3), 859793074),
      o(c(u), $.translate(4, -1.2).scale3d(2), 1279223474),
    ),
  ),
  L = f(
    h(
      o(c(u), $.translate(0, -8).scale(6, 15, 2.2)),
      o(c(u), $.translate(0, -14.1).scale(4, 13, 4)),
      o(c(20, 1), $.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  ),
  q = new AudioContext(),
  W = q.createBufferSource(),
  M1 = hC.getContext("webgl2");
for (let t in M1) M1[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = M1[t];
setTimeout(() => {
  let l = 0,
    t = 6,
    a = () => {
      if (h4.innerHTML += ".", !--t) {
        let h = 0,
          f = 0,
          u = 1,
          m = 0,
          M = 0,
          g = 0,
          v = !1,
          p = { x: 0, y: 0, z: 0 },
          d = new Int32Array(256),
          e = () => {
            let { u: t, G: a } = u1[G], { x: e, y: l, z: r } = a.transformPoint({ x: 0, y: 8, z: -3 });
            m1.x = p.x = e,
              m1.y = p.y = k = l,
              m1.z = p.z = r,
              A =
                Y =
                S =
                I =
                P =
                  0,
              u = 1,
              h = f = t?.F || 1;
          },
          X = t => {
            requestAnimationFrame(X);
            let a = (t - (R1 || t)) / 1e3;
            w = y1 ? h1[5] = 0 : .066 < a ? .066 : a,
              J += w,
              z1 += a,
              R1 = t,
              0 < w && (M1.b6o(36160, D),
                M1.r9r(0, 0, 128, 128, 6408, 5121, b),
                M1.iay(36160, [36064]),
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
                        I = f1(I, o ? 6.5 : 8, 4),
                        p.y += a / 41 - (o ? 1 : I) * e / 41 * I * w;
                    })(),
                      (() => {
                        for (let t = 32; t < 128; t += 2) {
                          let n = 0, o = 0, c = 0, i = 0, h = 512 * t;
                          for (let s = t >> 1 & 1; s < 128; s += 2) {
                            let t = h + 4 * s,
                              a = h + 4 * (127 - s),
                              e = b[t] / 255,
                              l = b[1 + a] / 255,
                              r = s / 63.5 - 1;
                            r = 1 - (r < 0 ? -r : r),
                              10 < s && s < 118
                              && (n = t1(n, t1(e * r, e * b[a] / 127.5)), o = t1(o, t1(l * r, l * b[1 + t] / 255))),
                              (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < e ? e : l) / 3)
                              && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                          }
                          c = i - c,
                            n = o - n,
                            (c < 0 ? -c : c) > (a < 0 ? -a : a) && (a = c),
                            (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                        }
                      })(),
                      (h1[0] ? 1 : 0) + (h1[2] ? -1 : 0) + K),
                    l = (h1[1] ? 1 : 0) + (h1[3] ? -1 : 0) + V,
                    r = navigator.getGamepads()[0];
                  if (r) {
                    var s = t => a[t]?.pressed || 0 < a[t]?.value;
                    let a = r.buttons;
                    r = r.axes;
                    var n = s(1) || s(3) || s(2) || s(0);
                    n !== v && (v = n) && (h1[5] = 1),
                      t += (.2 < A1(-r[0]) ? -r[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                      l += (.2 < A1(-r[1]) ? -r[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                      x1 && (.3 < A1(r[2]) && (i1 += 80 * r[2] * w), .3 < A1(r[3]) && (c1 += 80 * r[3] * w));
                  }
                  (l < 0 ? -l : l) < .05 && (l = 0),
                    (t < 0 ? -t : t) < .05 && (t = 0),
                    s = Math.atan2(l, t),
                    r = a1(Math.hypot(l, t)),
                    t = r * Math.cos(s),
                    l = r * Math.sin(s);
                  let y = a1(1 - 5 * t1(a < 0 ? -a : a, e < 0 ? -e : e)),
                    x =
                      (f || (a += S * y * w, e += Y * y * w),
                        S = f1(S, 0, A ? 8 : 4),
                        Y = f1(Y, 0, A ? 8 : 4),
                        P = f1(P, A ? (t || l ? A ? 7 : 4 : 0) * y : 0, A ? .1 < y ? 10 : t || l ? 5 : 7 : 1),
                        y = Math.sin(n = x1 ? i1 * Z : Math.PI) * P * w,
                        Math.cos(n) * P * w);
                  if (
                    a -= t * x - l * y,
                      e -= t * y + l * x,
                      (y = (n = 1 === r1[f].D && r1[f].l || $).inverse()).m41 = 0,
                      y.m42 = 0,
                      y.m43 = 0,
                      { x: a, z: e } = y.transformPoint({ x: a, z: e, w: 0 }),
                      p.x += a,
                      p.z += e,
                      f !== W
                  ) {
                    W = f;
                    let { x: t, y: a, z: e } = n.inverse().transformPoint(m1);
                    p.x = t, p.y = a, p.z = e;
                  }
                  y = m1.x, x = m1.z;
                  let { x: o, y: c, z: i } = n.transformPoint(p);
                  m1.x = o,
                    m1.y = c,
                    m1.z = i,
                    n = A1(k - c),
                    k = f1(k, c + .1, 50 * n + 5),
                    f && (S = (m1.x - y) / w, Y = (m1.z - x) / w),
                    (t || l) && (m = 90 - s / Z),
                    M = P1(M, m, 8 * w),
                    g += (r - g) * a1(10 * w);
                })(),
                H1()),
              0 < w && (c = S1(c, m1.x, .5, w),
                i = S1(i, m1.y, 2, w),
                F = S1(F, m1.z, .5, w),
                x1
                  ? (s1 = f1(s1, m1.x, 18 + (t = 200 * u)),
                    n1 = f1(n1, m1.y + 1.5, 15 + t),
                    o1 = f1(o1, m1.z, 18 + t),
                    c1 = t1(c1 < 87 ? c1 : 87, -87))
                  : (s1 = S1(s1, c, 1, 2 * w),
                    n1 = S1(n1, i + 13 + 15 * u, 4, 2 * w),
                    1 < ((t = (o1 = S1(o1, F + -18, 1, 2 * w)) - F) < 0 ? -t : t)
                    && (a = s1 - c,
                      i1 = 270 + Math.atan2(t, a) / Z,
                      c1 = 90 - Math.atan2(Math.hypot(t, a), n1 - i) / Z)),
                i1 = I1(i1),
                0 < w
                && (t = e1(u1[12].h, u1[13].h),
                  J > x && (h4.innerHTML = "", x = 0),
                  a = f1(d1, 0, 1),
                  d1 = a + (I1(d1 + 60 * w) - a) * a1(u1[5].h - u1[6].i),
                  a = f1(v1, 0, 5),
                  v1 = a + (I1(v1 + 56 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  a = f1(p1, 0, 4),
                  p1 = a + (I1(p1 + 48 * w) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  w1 = f1(w1, u1[9].i, .2 + .3 * ((t = 2 * u1[9].i - 1) < 0 ? -t : t)),
                  z = f1(z, _ ? z + (-9 - z) * a1(1.5 * w) : a1(J / 3), 1),
                  1 === u1[0].j && .8 < u1[0].h && (y < 13
                    ? (u1[0].j = 0, _ || (h4.innerHTML = "Not leaving now, there are souls to catch!", x = J + 3))
                    : _
                      || (_
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", x = J + 1 / 0),
                        _ = 1)),
                  h1[5] = 0,
                  (m1.x < -25 || m1.z < 109 ? -25 : -9) > m1.y && e())),
              t = y1
                ? $.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + a1(hC.clientWidth / 1e3))
                : $.rotate(-c1, -i1, -0).invertSelf().translateSelf(-s1, -n1, -o1),
              0 < w
              && (Q(),
                M1.b6o(36160, D),
                M1.v5y(0, 0, 128, 128),
                M1.cbf(!0, !1, !0, !1),
                M1.c4s(16640),
                M1.uae(
                  Q("b"),
                  !1,
                  $.rotate(0, 180).invertSelf().translateSelf(-m1.x, -m1.y, .3 - m1.z).toFloat32Array(),
                ),
                O1(Q("c"), 0, 1),
                M1.cbf(!1, !0, !1, !1),
                M1.c4s(16640),
                M1.cbf(!1, !0, !0, !1),
                M1.uae(Q("b"), !1, $.translate(-m1.x, -m1.y, -m1.z - .3).toFloat32Array()),
                O1(Q("c"), 0, 1),
                M1.cbf(!0, !0, !0, !0),
                1 === f && (u1[9].j = m1.x < -15 && m1.z < 0 ? 1 : 0)),
              C(),
              M1.v5y(0, 0, 2048, 2048),
              O[0](Q1(t, .3, 55, 10)),
              O[1](Q1(t, 55, 177, 11)),
              M1.b6o(36160, null),
              B(),
              M1.v5y(0, 0, M1.drawingBufferWidth, M1.drawingBufferHeight),
              M1.c4s(16640),
              M1.uae(B("a"), !1, Y1(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              M1.uae(B("b"), !1, t.toFloat32Array()),
              M1.ubu(B("k"), s1, n1, o1),
              O[0](),
              O[1](),
              O1(B("c"), !x1),
              H(),
              M1.ubu(H("j"), M1.drawingBufferWidth, M1.drawingBufferHeight, z1),
              y1 ? M1.ubu(H("k"), 0, 0, 0) : M1.ubu(H("k"), s1, n1, o1),
              M1.uae(H("b"), !1, t.inverse().toFloat32Array()),
              M1.d97(4, 3, 5123, 0);
          },
          b = new Uint8Array(65536),
          a = 0,
          l = [],
          L = [],
          q = [],
          s = [],
          n = new Map(),
          o = new Int32Array(8),
          r = t => {
            let { x: a, y: e, z: l } = j[t], r = (R[0] = a, R[1] = e, R[2] = l, n.get(t = "" + (j.C ? E : o)));
            return void 0 !== r
              ? (a = 3 * r, s[a] = (s[a++] + o[5]) / 2, s[a] = (s[a++] + o[6]) / 2, s[a] = (s[a] + o[7]) / 2)
              : (n.set(t, r = n.size), L.push(a, e, l, R[3]), q.push(o[4]), s.push(o[5], o[6], o[7])),
              r;
          },
          W,
          A,
          I,
          P,
          S,
          Y,
          k,
          c,
          i,
          F,
          T,
          j,
          t = B1(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=c*vec4(e,0);}",
          ),
          C = D1(
            B1("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*vec4(f.xyz,1);}"),
            "#version 300 es\nvoid main(){}",
          ),
          H = D1(
            B1("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          Q = D1(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=m.w>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          B = D1(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          D =
            (H(), M1.ubh(H("q"), 3), Q(), M1.uae(Q("a"), !1, Y1(1.4, .59, 1e-4, 1)), B(), M1.ubh(B("q"), 3), M1.c5w()),
          N = (t = M1.c3z(), M1.c25()),
          O = l1(2, t => {
            let a, e = M1.c25(), l = M1.c5w(), r = B(t ? "j" : "i");
            return B(),
              M1.ubh(B(t ? "h" : "g"), t),
              M1.b6o(36160, l),
              M1.d45([0]),
              M1.r9l(0),
              M1.a4v(33984 + t),
              M1.b9j(3553, e),
              M1.fas(36160, 36096, 3553, e, 0),
              M1.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              M1.t2z(3553, 10241, 9729),
              M1.t2z(3553, 10240, 9729),
              M1.t2z(3553, 34893, 515),
              M1.t2z(3553, 34892, 34894),
              M1.t2z(3553, 10243, 33071),
              M1.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (a = t,
                    M1.b6o(36160, l),
                    M1.iay(36160, [36096]),
                    M1.c4s(256),
                    M1.uae(C("b"), !1, a),
                    O1(C("c"), !x1))
                  : M1.uae(r, !1, a);
              };
          }),
          E = new Int32Array(o.buffer, 0, 5),
          R = new Float32Array(o.buffer);
        for (T of r1) {
          for (j of (R[3] = T.F, T.s)) {
            let { x: t, y: a, z: e } = k1(j);
            o[4] = 0 | j.v, o[5] = 32767 * t, o[6] = 32767 * a, o[7] = 32767 * e;
            for (let t = 2, a = r(0), e = r(1); j.length > t; ++t) l.push(a, e, e = r(t));
          }
          T.s = null;
          let t = a;
          T.I = a, T.H = (a = l.length) - t;
        }
        M1.b11(34963, M1.c1b()),
          M1.b2v(34963, new Uint16Array(l), 35044),
          M1.b11(34962, M1.c1b()),
          M1.b2v(34962, new Float32Array(L), 35044),
          M1.v7s(0, 4, 5126, !1, 0, 0),
          M1.b11(34962, M1.c1b()),
          M1.b2v(34962, new Int16Array(s), 35044),
          M1.v7s(1, 3, 5122, !0, 0, 0),
          M1.b11(34962, M1.c1b()),
          M1.b2v(34962, new Uint32Array(q), 35044),
          M1.v7s(2, 4, 5121, !0, 0, 0),
          M1.e3x(0),
          M1.e3x(1),
          M1.e3x(2),
          M1.e8z(2929),
          M1.e8z(2884),
          M1.c70(1),
          M1.c7a(1029),
          M1.d4n(515),
          M1.c5t(0, 0, 0, 1),
          M1.b6o(36160, D),
          M1.bb1(36161, t),
          M1.r4v(36161, 33189, 128, 128),
          M1.f8w(36160, 36096, 36161, t),
          M1.a4v(33987),
          M1.b9j(3553, N),
          M1.fas(36160, 36064, 3553, N, 0),
          M1.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          M1.b9j(3553, M1.c25()),
          M1.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, U),
          M1.gbn(3553),
          M1.t2z(3553, 10241, 9987),
          M1.t2z(3553, 10240, 9729),
          L1.g = () => $.translate(m1.x, k, m1.z).rotateSelf(0, M),
          X1.map((t, a) => {
            t.g = () =>
              L1.l.translate(0, g * a1(.45 * Math.sin(9.1 * J + Math.PI * a - Math.PI / 2))).rotateSelf(
                g * Math.sin(9.1 * J + Math.PI * a) * .25 / Z,
                0,
              );
          });
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          u1.map((t, a) => t.h = t.i = t.j = a ? 0 | e[a] : 0), j1.map((t, a) => t.j = 0 | l[a]), G = t, J = a, w1 = r;
        } catch (t) {}
        z = G < 0 ? 0 : 1 < G ? 1 : G,
          h4.innerHTML = "",
          x = 0,
          C1(),
          H1(),
          (() => {
            let r = 0,
              s = 0,
              t = 0,
              a = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  h1.length = K = V = 0,
                  n = o = void 0,
                  document.hidden && T1(!0);
              },
              n,
              o,
              c;
            b1.onclick = () => T1(),
              b2.onclick = () => {
                T1(), x1 = 1;
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b4.onclick = () => {
                g1 = !g1, F1();
              },
              b5.onclick = () => T1(!0),
              onclick = () => {
                c = 1, y1 || (h1[5] = !0, x1 && hC.requestPointerLock());
              },
              document.onvisibilitychange = onresize = onblur = a,
              onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && y1)
                  ? y1 && !c || T1(!y1)
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
                  ? a && (h1[t] = 1)
                  : h1[t] = a);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                x1 && (t || a) && (i1 += .1 * t, c1 += .1 * a);
              },
              hC.ontouchstart = a => {
                if (!y1) {
                  for (let t of a.changedTouches) {
                    x1 && t.pageX > hC.clientWidth / 2
                      ? n || (n = t, r = i1, s = c1)
                      : o = o || t;
                  }
                  t = z1;
                }
              },
              hC.ontouchmove = ({ changedTouches: l }) => {
                if (!y1) {
                  for (
                    let { pageX: t, pageY: a, identifier: e } of l
                  ) {
                    n?.identifier === e && (i1 = r + (t - n.pageX) / 3, c1 = s + (a - n.pageY) / 3),
                      o?.identifier === e
                      && (K = -(t - o.pageX) / 18,
                        V = -(a - o.pageY) / 18,
                        K = (K < 0 ? -K : K) < .35 ? 0 : .8 * K,
                        V = (V < 0 ? -V : V) < .35 ? 0 : .8 * V);
                  }
                }
              },
              hC.ontouchend = a => {
                for (let t of a.changedTouches) {
                  t.identifier === n?.identifier && (n = void 0),
                    t.identifier === o?.identifier && (o = void 0, V = K = 0);
                }
                a.preventDefault(), a = z1 - t, (!t || .02 < a && a < .4) && (h1[5] = !0);
              },
              oncontextmenu = () => !1,
              a(),
              T1(!0);
          })(),
          e(),
          s1 = c = m1.x,
          n1 = (i = m1.y) + 13,
          o1 = (F = m1.z) + -18,
          requestAnimationFrame(X);
      }
    },
    r = () => {
      if (l < 5) {
        var Q = 0, B = l++;
        let [p, d, b, A, I, P, S, Y, y, x, k, t, F, T, j, z, a, w, e, C, H] =
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
          ]]][B];
        x = x * x * 4;
        for (let v of [5513, 4562, 3891]) {
          let r = 0,
            s = 0,
            f = [],
            u,
            n,
            o,
            c,
            i,
            h = new Int32Array(768 * v),
            m = 2 ** (t - 9) / v,
            M = Math.PI * 2 ** (a - 8) / v,
            g = e * v & -2;
          for (let l = 0; l <= 11; ++l) {
            for (
              let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * B + l];
              t < 32;
              ++t
            ) {
              let e = (32 * l + t) * v;
              for (var D, O = 0; O < 4; ++O) {
                if (u = 0, a && (u = H[a - 1].charCodeAt(t + 32 * O) - 40, u += 0 < u ? 106 : 0), u) {
                  if (!(D = f[u])) {
                    let l = 0,
                      r = 0,
                      s,
                      n,
                      o = D = u,
                      c = B < 2
                        ? t => t % 1 * 2 - 1
                        : R,
                      i = B < 2
                        ? B < 1
                          ? t => t % 1 < .5 ? 1 : -1
                          : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                        : R,
                      h = new Int32Array(Y + y + x);
                    for (let a = 0, e = 0; Y + y + x > a; ++a, ++e) {
                      let t = 1;
                      Y > a ? t = a / Y : Y + y > a || (t = (1 - (t = (a - Y - y) / x)) * 3 ** (-k / 16 * t)),
                        e < 0
                        || (e -= 4 * v,
                          n = .00396 * 2 ** ((o + d - 256) / 12),
                          s = .00396 * 2 ** ((o + I - 256) / 12) * (1 + (B ? 0 : 8e-4 * 9))),
                        h[a] = 80
                            * (c(l += n * t ** (b / 32)) * p + i(r += s * t ** (P / 32)) * A
                              + (S ? (2 * Math.random() - 1) * S : 0))
                            * t | 0;
                    }
                    D = f[D] = h;
                  }
                  for (let t = 0, a = 2 * e; D.length > t; ++t, a += 2) h[a] += D[t];
                }
              }
              for (let t, a = 0; v > a; ++a) {
                O = 0,
                  ((t = h[D = 2 * (e + a)]) || i)
                  && (o = .00308 * F,
                    1 != B && 4 != B || (o *= Math.sin(m * D * Math.PI * 2) * C / 512 + .5),
                    o = 1.5 * Math.sin(o),
                    r += o * s,
                    c = (1 - T / 255) * (t - s) - r,
                    s += o * c,
                    t = 4 == B ? s : 3 == B ? c : r,
                    B || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                    t *= j / 32,
                    i = 1e-5 < t * t,
                    n = Math.sin(M * D) * z / 512 + .5,
                    O = t * (1 - n),
                    t *= n),
                  D < g || (O += h[D - g + 1] * w / 255, t += h[D - g] * w / 255),
                  X[Q + D] += h[D] = O,
                  ++D,
                  X[Q + D] += h[D] = t;
              }
            }
          }
          Q += h.length;
        }
        setTimeout(r);
      } else {
        for (Q = q.createBuffer(2, 5362944, 44100), B = 0; B < 2; B++) {
          for (let t = B, a = Q.getChannelData(B); t < 10725888; t += 2) {
            a[t >> 1] = X[t] / 65536;
          }
        }
        W.buffer = Q, W.loop = !0;
      }
      a();
    },
    U = new Image();
  U.onload = U.onerror = () => {
    a();
  },
    U.src = B,
    setTimeout(r, 50),
    (() => {
      let n;
      M(() => {
        m([u.slice(1)], $.translate(-2).scale3d(3).rotate(90, 0));
      }, 0),
        M(() => {
          let r = () => {
              let t = u1[2].i, a = 1 - u1[4].i;
              return t < a ? t : a;
            },
            t = (a, e, l) =>
              M(t => {
                t.g = () => $.translate(r() * Math.sin(3 * a + J * a) * e),
                  u.map(({ x: t, z: a }) => {
                    m(c(11, 1), $.translate(4 * t, 4, l + 4 * a).scale(.8, 3, .8), -1716368257),
                      m(c(u), $.translate(4 * t, 7, l + 4 * a).scale(1, .3), 1283424127);
                  }),
                  m(f(h(
                    o(c(u), $.translate(0, 0, l).scale(5, 1, 5), 1288490188),
                    ...[-1, 1].map(t =>
                      o(c(u), $.translate(5 * t, .2, l).rotate(0, 0, -30 * t).scale(4, 1, 2), 1288490188)
                    ),
                  ))),
                  m(c(u), $.translate(0, -3, l).scale(8, 2, 8), 1281779302);
              }),
            l = (M(t => {
              t.g = () => T(-12, 4.2, 40 * z - 66), m(O), g($.translate(0, -3, 4));
            }),
              l1(7, t => o(c(6, 1), $.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), 6310988)).flat()),
            a = (v($.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
              v(
                $.translate(0, 2.8),
                [5, 10, 3],
                [-5, 10, 3],
                ...I(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
              ),
              m(c(u), $.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), 869059788),
              u.map(({ x: t, z: a }) => m(c(6), $.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), 1716276377)),
              [-23, 22].map(t => m(c(u), $.translate(0, 0, t).scale(3, 1, 8), 870704613)),
              [-15, 15].map((a, e) => {
                m(c(u), $.translate(0, 6.3, a).scale(4, .3, 1), 1716276300),
                  m(c(u), $.translate(0, 1, a).scale(3, .2, .35), 1283424127),
                  M(t => {
                    t.g = () => $.translate(0, 4.7 * -u1[e + 1].h, a), m(l);
                  });
              }),
              l1(5, a =>
                l1(2, t =>
                  m(
                    D,
                    $.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                    869072895,
                  ))),
              m(c(u), $.translate(3, 1.5, -20).scale(.5, 2, 5), 867349170),
              m(c(u), $.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), 868204479),
              m(c(5), $.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), 1716276377),
              g($.translate(-5.4, 1.5, -19).rotate(0, -90)),
              m(c(u), $.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), 2134062028),
              m(f(
                h(
                  i(
                    o(c(6, 0, 0, .3), $.translate(8, -3, -4).scale(13, 1, 13), 867349170),
                    o(c(6), $.translate(0, -8).scale(9, 8, 8), 2139042662),
                    o(c(6, 0, 0, .3), $.translate(0, -.92).scale(13, 2, 13), 869059788),
                  ),
                  o(c(5), $.scale(5, 30, 5), 2140746598),
                  o(c(5, 0, 1.5), $.translate(0, 1).scale(4.5, .3, 4.5), 870678450),
                  o(c(u), $.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), 2139062143),
                  o(c(6), $.translate(15, -1.5, 4).scale(3.5, 1, 3.5), 2139062143),
                ),
              )),
              M(t => {
                t.g = () =>
                  $.translate(
                    0,
                    .01 < u1[3].h
                      ? (5 * Math.cos(1.5 * J) + 2) * u1[3].i * (1 - u1[2].h) + -15 * (1 - u1[3].h)
                      : -500,
                    0,
                  ),
                  g($.translate(0, 1.2)),
                  m(c(5), $.translate(0, -.2).scale(5, 1, 5), 1286776217);
              }),
              g($.translate(15, -2, 4)),
              t(.7, 12, 35),
              t(1, 8.2, 55),
              M(t => {
                t.g = () => $.translate(r() * Math.sin(J / 1.5 + 2) * 12),
                  m(
                    f(h(
                      i(
                        o(c(u), $.scale(1.5, 1, 5), 870704613),
                        o(c(6), $.scale(4, 1, 5), 870704613),
                        o(c(u), $.translate(0, -2).scale(2, 3.2, 1.9), 2139081804),
                        o(c(16, 1, 0, 4), $.scale(1, 1, 1.5).rotate(0, 90), 870704613),
                      ),
                      o(c(u), $.scale(1.3, 10, 1.3), -1721322957),
                    )),
                    $.translate(0, 0, 45),
                  ),
                  v($.translate(0, 2.8, 45), [0, 0, 4.5]);
              }),
              M(t => {
                t.g = () => $.translate(9.8 * (1 - r())),
                  m(c(3), $.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), 865704268),
                  m(c(8), $.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), 869059788),
                  m(c(u), $.translate(-23, -3, 55).scale(5.2, 1.7, 3), 1283424127),
                  m(c(u), $.translate(-23, -2.2, 62).scale(3, 1, 4), 1283424127),
                  g($.translate(-23, -.5, 66.5));
              }),
              m(c(u), $.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), 870704613),
              M(t => {
                t.g = () => $.translate(0, a1(1 - 5 * r()) * e1(u1[4].h, u1[5].h) * Math.sin(1.35 * J) * 4),
                  m(c(u), $.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), 867349170),
                  m(
                    f(h(o(c(u), $.scale(3, 1.4, 2.7)), o(c(u), $.scale(1.2, 8, 1.2)))),
                    $.translate(-33, -3, 55),
                    867349170,
                  );
              }),
              M(t => {
                t.g = () => $.translate(0, 0, a1(1 - 5 * r()) * e1(u1[4].h, u1[5].h) * Math.sin(.9 * J) * 8),
                  m(f(
                    h(
                      o(c(u), $.translate(-27, -3, 55).scale(3, 1.4, 2.7), 870704613),
                      o(c(u), $.translate(-27, -3, 55).scale(1, 3), 870704613),
                    ),
                  )),
                  m(c(u), $.translate(-39, -3, 55).scale(3, 1.4, 2.7), 870704613);
              }),
              M(t => {
                t.g = () => $.translate(0, -6.5 * u1[4].i),
                  m(c(6), $.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), 1722987186);
              }),
              [...o(
                f(i(
                  o(c(u), $.translate(0, -3).scale(11, 1.4, 3), 870704613),
                  h(
                    o(c(6), $.rotate(0, 0, 90).scale(6, 8, 6), 1285134668),
                    o(c(4, 0, .01), $.translate(0, 6).scale(12, 2, .75).rotate(0, 45), 1285134668),
                    o(c(6), $.rotate(0, 0, 90).scale(5, 12, 5), 1285134668),
                    ...[5, 0, -5].map(t =>
                      o(c(5), $.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), 1285134668)
                    ),
                  ),
                )),
                $,
              )]),
            e =
              (m(a, $.translate(-53, 0, 55)),
                m(c(6), $.translate(-61.3, -2.4, 49).scale(3, 1, 5), 1285134694),
                m(c(7), $.translate(-57, -2.6, 46).scale(4, 1, 4), 1288490188),
                g($.translate(-55, -1.1, 46).rotate(0, 90)),
                M(t => {
                  t.g = () =>
                    $.translate(-75, (1 - u1[5].i) * (1 - u1[6].h) * 3, 55).rotate(180 * (1 - u1[5].i) + d1, 0), m(a);
                }, 2),
                m(c(u), $.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), 867349170),
                m(c(3, 0, -.5), $.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), 869059788),
                m(
                  f(h(
                    i(
                      o(c(u), $.translate(-100, -2.5, 55).scale(8, 1, 8), 869059788),
                      o(c(u), $.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), 869059788),
                      o(c(u), $.translate(-100, -2.6, 70).scale(3, 1.1, 7), 869059788),
                      o(c(u), $.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), 869059788),
                      o(c(6), $.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), 1285134745),
                      o(c(u), $.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), 869059788),
                      o(c(u), $.translate(-100, .42, 92).scale(3, 1.1, 4.1), 869059788),
                    ),
                    o(c(8), $.translate(-100, -1, 55).scale(7, .9, 7), 1716276300),
                    o(c(8), $.translate(-100, -2, 55).scale(4, .3, 4), 2137417318),
                    o(c(8), $.translate(-100, -3, 55).scale(.6, 1, .6), 2137417318),
                  )),
                  $,
                ),
                v($.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
                v($.translate(-89, .2, 80), [0, 0, 6]),
                m(f(
                  h(
                    o(c(u), $.translate(-100, 1, 63).scale(7.5, 4), 1719631743),
                    o(c(u), $.translate(-100, 0, 70).scale(2, 2, 10), 1719631743),
                    o(c(20, 1), $.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), 1719631743),
                  ),
                )),
                M(t => {
                  t.g = () => $.translate(-99.7, 5.3 * -u1[6].h - 2, 63.5), m(l);
                }),
                u.map(({ x: a, z: e }) => {
                  m(c(6), $.translate(7 * a - 100, -3, 7 * e + 55).scale(1, 8.1), -869914983),
                    [4, -.4].map(t => m(c(6), $.translate(7 * a - 100, t, 7 * e + 55).scale(1.3, .5, 1.3), -869059738));
                }),
                l1(7, t => {
                  m(
                    c((23 * t + 1) % 5 + 5, 0, .55),
                    $.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, 44.9 - 2.8 * t).scaleSelf(
                      5 + t / 2,
                      1 + t / 6,
                      5 + t / 3,
                    ),
                    d(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
                  );
                }),
                m(c(u), $.translate(-87, -9.5, 24).scale(7, 1, 3), 1721335654),
                m(c(4), $.translate(-86, -9.2, 27).scale(5, 1, 5), 1286773119),
                m(c(18, 1), $.translate(-86, -9, 31).scale(1.5, 1, 1.5), 426134604),
                g($.translate(-86, -7.5, 31)),
                M(t => {
                  t.g = () => $.translate(0, 3.5 * (1 - t1(u1[6].h, u1[7].h)) + e1(u1[7].i, u1[6].i) * Math.sin(J) * 5),
                    [0, 12, 24].map(t =>
                      m(c(u), $.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), 865697587)
                    );
                }),
                M(t => {
                  t.g = () => {
                    let t = e1(u1[7].i, u1[6].i);
                    return $.translate(0, t * Math.sin(J + 3) * 6, 6 * Math.sin(.6 * J + t) * t);
                  }, [6, 18].map(t => m(c(u), $.translate(t - 76.9, t / -13 - 10, 24).scale(2.8, 1.5, 3), 863987225));
                }),
                m(
                  f(h(
                    i(
                      o(c(u), $.scale(11, 1, 13), 1285121612),
                      o(c(5), $.translate(0, 0, -7).scale(2, 1.2, 2), 1286759987),
                      o(c(5), $.scale(9, 1.2, 9), 2135700224),
                    ),
                    o(c(5), $.scale(5.4, 5, 5.4), 2135700224),
                  )),
                  $.translate(-38.9, -11.3, 17),
                ),
                g($.translate(-38.9, -9.6, 10)),
                M(t => {
                  t.g = () => $.translate(0, -7.3 * u1[7].i),
                    m(
                      f(h(
                        i(
                          o(c(5), $.translate(0, 2).scale(5, 7, 5).skewY(8), 2139055667),
                          o(c(5), $.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), 2139052351),
                          o(c(5), $.translate(0, 9).scale(.6, 7, .6).skewY(8), 2139049049),
                        ),
                        o(c(5), $.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), 2139055667),
                      )),
                      $.translate(-38.9, -11.3, 17),
                    ),
                    v(
                      $.translate(-38.9, -.3, 17).rotate(0, 0, 10),
                      ...I(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5]),
                    );
                }),
                u.map(({ x: t, z: a }) => {
                  n = $.translate(9 * t - 38.9, -7.3, 11 * a + 17),
                    m(c(18, 1), n.scale(1, 4), -12632257),
                    [1.5, 8].map(t => m(c(18, 1), n.translate(0, t - 4).scale(1.5, .5, 1.5), 1285134745));
                }),
                m(
                  f(h(
                    i(
                      o(c(6), $.translate(0, 0, -36).scale(15, 1.2, 15), 1286779570),
                      o(c(u), $.translate(0, 0, -18).scale(4, 1.2, 6), 1285121650),
                    ),
                    ...l1(6, a =>
                      l1(6, t =>
                        o(
                          c(6),
                          $.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                          1286779570,
                        ))).flat(),
                  )),
                  $.translate(-38.9, -11.3, 17),
                ),
                v($.translate(-38.9, -8.4, -21), [0, 0, 12]),
                m(c(5), $.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), 1715411404),
                g($.translate(-84, -.5, 85).rotate(0, 45)),
                M(t => {
                  t.g = () => T(-123, 1.4, 55 + -65 * w1), g($.translate(0, -3, -4).rotate(0, 180)), m(O);
                }),
                v($.translate(-115, .2, -12), [0, 0, 3.5]),
                f(h(
                  o(c(u), $.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), 1280917311),
                  o(c(3), $.translate(0, 0, -5.5).scale(3, 2), 1281772697),
                  ...[-1.2, 1.2].map(t => o(c(u), $.translate(t, -.5, 1).scale(.14, .3, 6.5), 1275081650)),
                ))),
            s = (M(t => {
              t.g = () => {
                let t = Math.sin(1.1 * J);
                return $.translate.call($, 0, -2, e1(u1[10].h, u1[11].h) * (t < 0 ? -t : t) * -8.5 + 10);
              }, l1(2, t => m(e, $.translate(9 * t - 110 + (1 & t), 1.7, -12)));
            }),
              M(t => {
                t.g = () => {
                  let t = Math.sin(2.1 * J);
                  return $.translate.call($, 0, -2, e1(u1[10].h, u1[11].h) * (t < 0 ? -t : t) * -8.5 + 10);
                }, l1(2, t => m(e, $.translate(9 * (t + 2) - 110 + (1 & t), 1.7, -12)));
              }),
              M(t => {
                t.g = () => {
                  let t = Math.sin(1.5 * J);
                  return $.translate.call(
                    $,
                    0,
                    -2,
                    -8.5 * t1((1 - u1[10].h) * (1 - e1(u1[10].h, u1[11].h)), e1(u1[10].h, u1[11].h) * (t < 0 ? -t : t))
                      + 10,
                  );
                }, l1(3, t => m(e, $.translate(9 * t - 106, 1.7, -12)));
              }),
              m(
                f(h(
                  i(
                    o(c(u), $.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                    o(c(u), $.translate(26.5, -.6, 10).scale(17, 2, .5)),
                  ),
                  ...l1(4, t => o(c(u), $.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
                  ...l1(3, t => o(c(u), $.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
                )),
                $.translate(-123, 0, -12),
                865697663,
              ),
              m(c(5), $.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), -10928321),
              m(c(u), $.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), 869059788),
              m(c(6), $.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), 867336089),
              g($.translate(-116, -1.4, -18).rotate(0, 180)),
              l1(3, t => {
                m(L, $.translate(12 * t - 109, -9, -12), 1285134745),
                  m(L, $.translate(-77, -9, -12 * t - 20).rotate(0, 90), 1285134745);
              }),
              m(f(
                h(
                  o(c(12), $.translate(-77, -13.9, -12).scale(4, 18.2, 4), 867349170),
                  o(c(u), $.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), 865697638),
                  o(c(u), $.translate(-77, 0, -14).scale(1.5, 2.2, 2), 865697638),
                  o(c(12), $.translate(-77, 2.8, -12).scale(3, 5, 3), 865697638),
                ),
              )),
              m(c(u), $.translate(-115.5, -17, -12).scale(.5, 15, 2.2), 1285134745),
              m(c(u), $.translate(-77, -17, -50.5).scale(2.2, 15, .5), 1285134745),
              m(c(u), $.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), 1285134745),
              m(f(
                h(
                  o(c(u), $.translate(-93, -5.8, -40).scale(9, 1, 5), 432852172),
                  o(c(9), $.translate(-98, -5.8, -40).scale(3, 8, 3), 867349170),
                ),
              )),
              m(c(9), $.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), 1283424127),
              g($.translate(-98, -4.4, -40).rotate(0, 90)),
              v($.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
              m(f(
                h(
                  i(
                    o(c(6, 0, 0, .6), $.translate(-100, .7, 105.5).scale(8, 1, 11), 867349170),
                    o(c(u), $.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), 867349170),
                    o(c(u), $.translate(-91.2, .7, 107).scale(3, 1, 3.3), 867349170),
                  ),
                  o(c(5), $.translate(-100, .7, 113).scale(4, 3, 4), 867349170),
                ),
              )),
              l1(4, a =>
                M(t => {
                  t.g = () => {
                    let t = e1(u1[8].i, u1[12].i);
                    return $.translate(
                      (2 < a ? 2 * (1 - t) + t : 0) - 100,
                      t * Math.sin(1.3 * J + 1.7 * a) * (3 + a / 3) + .7,
                      115 + (1 & a ? -1 : 1) * (1 - u1[8].i) * (1 - u1[12].i) * -7
                        + (t < .05 ? .05 : t) * Math.cos(1.3 * J + 7 * a) * (4 - 2 * (1 - a / 3)),
                    );
                  },
                    m(
                      c(6),
                      $.translate(-14.6 - 4.8 * a - (2 < a ? 2 : 0), -a / 2.3, -21.5).scale(2.6, 1, 2.5),
                      d(.5 - a / 8, a / 12 + .5, .7, .3),
                    );
                })),
              M(t => {
                t.g = () => {
                  let t = e1(u1[8].i, u1[12].i);
                  return $.translate(2.5 * (1 - t) - 139.7, -3 * (1 - u1[8].h) + t * Math.sin(.8 * J) * -1 - 1.8, 93.5)
                    .rotateSelf(Math.cos(1.3 * J) * (3 * t + 3), 0);
                },
                  m(f(h(o(c(10), $.scale(6, 2, 6), 1283430681), o(c(10), $.scale(3.3, 6, 3.3), 2139068697)))),
                  n = $.translate(-7.5).rotate(0, 90),
                  m(c(15), n.scale(3, 2.3, 3), 1281779302),
                  m(c(10), n.scale(2, 2.5, 2), 1286786124),
                  m(c(5), n.scale(1, 3), 2139062143),
                  g(n.translate(0, 3.4).rotate(0, 180)),
                  [-1, 1].map(t =>
                    m(D, $.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), 869072895)
                  ),
                  v($.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              }),
              [-1, 1].map(a => {
                m(c(15, 1), $.translate(-7.5 * a - 100, 3.7, 96).scale(.8, 4, .8), 2134064537),
                  [7.2, 1.5].map(t =>
                    m(c(15, 1), $.translate(-7.5 * a - 100, t + .7, 96).scale(1.1, .5, 1.1), 1714634111)
                  ),
                  m(D, $.translate(-5 * a - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), 13434879),
                  m(
                    f(h(
                      o(c(u), $.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), 1719631743),
                      o(c(u), $.scale(3, 3, 10), 2134064537),
                      o(c(30, 1), $.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), 2134064537),
                      o(c(5), $.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), 2134064537),
                      o(c(5), $.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), 2134064537),
                    )),
                    $.translate(a - 100, .7, 97),
                  );
              }),
              M(t => {
                t.g = () => $.translate(-100, .6 - 6 * u1[12].h, 96.5).scale(.88, 1.2), m(l);
              }),
              [...o(c(28, 1), $.scale(8, 1, 8), 863138418), ...o(c(5), $.translate(0, 1).scale(1, .2), 860638284)]);
          M(t => {
            t.g = () => $.translate(-80, 1, 106).rotate(0, 40 + v1),
              m(f(
                h(
                  o(c(28, 1), $.scale(8, 1, 8), 863138418),
                  o(c(u), $.translate(0, 0, -5.5).scale(1.5, 3, 2.5), 863138418),
                ),
              )),
              m(c(8), $.translate(0, 2).scale(3, 1.5, 3), 431141554),
              m(c(5), $.translate(0, 2).scale(1, 2), 860638284),
              v($.translate(0, 3), ...I(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
          }),
            M(t => {
              t.g = () => $.translate(-64, 1, 106).rotate(0, p1),
                m(f(
                  h(o(c(28, 1), $.translate(0, 2).scale(8, 1, 8), 1275068505), o(c(u), $.scale(9, 5, 2), 1275068492)),
                )),
                m(s),
                [-1, 1].map(t =>
                  m(D, $.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), 13434879)
                );
            }),
            M(t => {
              t.g = () => $.translate(-48, 1, 106).rotate(0, 180 - p1),
                m(f(
                  h(
                    o(c(30, 1), $.translate(0, 2).scale(8, 1, 8), 1275068505),
                    o(c(u), $.translate(7).scale(9, 5, 2), 1275068492),
                    o(c(u), $.translate(0, 0, 7).scale(2, 5, 9), 1275068492),
                  ),
                )),
                m(s);
            }),
            M(t => {
              t.g = () => $.translate(-48, 1, 90).rotate(0, 270 + p1),
                m(f(
                  h(
                    o(c(30, 1), $.translate(0, 2).scale(8, 1, 8), 1275068505),
                    o(c(u), $.translate(7).scale(9, 5, 2), 1275068492),
                    o(c(u), $.translate(0, 0, -7).scale(2, 5, 9), 1275068492),
                  ),
                )),
                m(s);
            }),
            m(c(u), $.translate(-56, 1, 106).scale(.7, .8, 2.5), 867349170),
            m(c(u), $.translate(-48, 1, 98).scale(2.5, .8, .7), 867349170),
            m(c(u), $.translate(-39, .4, 90).scale(2, 1, 2), 1286779570),
            m(c(u), $.translate(-34.2, .4, 90).scale(3, 1, 3), 1286779570),
            g($.translate(-34, 2.7, 96).rotate(-12, 0)),
            m(c(5), $.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), -1719697613),
            [863144985, 1283424051, 1720480332].map((a, e) =>
              M(t => {
                t.g = () =>
                  $.translate(
                    0,
                    (1 - u1[13].i) * (1 - u1[14].i) * 3 + e1(u1[13].i, u1[14].i) * Math.sin(1.5 * J + 1.5 * e) * 4.7,
                  ),
                  m(
                    c(8),
                    $.translate(-23.5, e / 1.5 - .4, 90 + 6.8 * e).scale(3.6, 2 - e / 1.5, 3.6).rotate(0, 22.5),
                    a,
                  ),
                  2 === e && m(c(6), $.translate(-29, .4, 90).scale(2.4, 1, 2.8), 1285141145),
                  1 === e
                  && m(c(u), $.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), 1286773145);
              })
            ),
            m(f(
              h(
                o(c(6, 0, 0, .3), $.translate(0, -.92, 95).scale(14, 2, 14), 869059788),
                o(c(5), $.translate(0, 0, 95).scale3d(6), 2135706700),
              ),
            )),
            [8, -6.1].map((a, e) =>
              l1(
                3,
                t => m(L, $.translate(6 * t - 6, a - (1 & t), 111 - .2 * (1 & t) - e), 1 & t ? 1283424127 : 2136562009),
              )
            ),
            [-1, 1].map(t => m(D, $.translate(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), 13434879)),
            g($.translate(0, 1.7, 82).rotate(0, 180)),
            m(c(5), $.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), 1716276351),
            m(f(
              h(
                i(
                  o(c(u), $.translate(0, 16, 110.5).scale(12, 1, 3), 1716276351),
                  o(c(u), $.translate(0, 16, 111).scale(3, 1, 3.8), 1716276351),
                ),
                o(c(5), $.translate(0, 16, 103.5).scale(5.5, 5, 5.5), 1716276351),
              ),
            )),
            M(t => {
              t.g = () => {
                let t = Math.sin(J);
                return $.translate(-2 * t).rotate(0, 0, 25 * t);
              },
                m(c(3), $.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), 1716276351),
                [22, 30].map(t => {
                  m(c(6), $.translate(0, 16, t + 95).scale(3, 1, 2.3).rotate(0, 90), 1722987186),
                    m(c(u), $.translate(0, 6.2, t + 95).scale(.5, 11, .5), 1716276351);
                });
            }),
            m(c(6), $.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), 1286773119),
            m(c(u), $.translate(0, 16, 129).scale(1.5, 1, 2), 1286773119),
            m(c(7), $.translate(0, 16.2, 133).scale(5, 1, 5), 1721335654),
            M(t => {
              t.g = () => {
                let t = e1(e1((u1[14].h + u1[14].i) / 2, u1[13].i), (u1[15].h + u1[15].i) / 2);
                return $.translate(0, 16 * t, 8.5 * a1(2 * t - 1) + 95);
              },
                m(c(5), $.scale(5, 1.1, 5), 1716276351),
                m(c(5), $.scale(5.5, .9, 5.5), 1715420991),
                g($.translate(0, 1.5, -1).rotate(0, 180));
            }),
            v($.translate(0, 3, 95), ...I(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
            v($.translate(0, 19, 134), [0, 0, 3.5]);
        }),
        L1 = M(() => {
          X1 = [-1, 1].map(t =>
            M(() => {
              m(c(10, 1), $.translate(.3 * t, -.8).scale(.2, .7, .24), 6704383);
            })
          ),
            [0, 180].map(t => m(D, $.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), 13434879)),
            m(e(20), $.translate(0, 1).scale(.5, .5, .5), 6704383);
          let a = o(
            f(h(c(15, 1), o(c(u), $.translate(0, 0, 1).scale(2, 2, .5)))),
            $.rotate(-90, 0).scale(.1, .05, .1),
            5000268,
          );
          [-1, 1].map(t => m(a, $.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
            m(c(u), $.translate(0, .9, .45).scale(.15, .02, .06), 5000268),
            m(e(20), $.scale(.7, .8, .55), 6704383);
        }),
        C = [3375103, 3407794].map(t =>
          M(() => {
            m(c(6, 1), $.scale(.13, 1.4, .13), 8342604),
              m(c(8), $.translate(0, 1).scale(.21, .3, .21), t),
              m(c(3), $.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), 3355443);
          }), 0),
        Q = M(() => {
          m(c(6), $.scale(.85, 1, .85), 8342783);
        }, 0),
        H = M(() => {
          m(
            e(40, 30, (t, a, e) => {
              let l = a / 30, r = .05 * t * Math.PI, s = l ** .6 * Math.PI / 2;
              return t = l * l * Math.sin(t * Math.PI * .35) / 4,
                29 === a
                  ? { x: e.C = 0, y: -.5, z: 0 }
                  : {
                    x: Math.cos(r) * Math.sin(s),
                    y: Math.cos(l * Math.PI) - l - t,
                    z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
                  };
            }),
            $.scale3d(.7),
            16777215,
          ), [-1, 1].map(t => m(e(15), $.translate(.16 * t, .4, -.36).scale3d(.09)));
        }, 0);
    })();
});
