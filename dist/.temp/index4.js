let a = 0,
  et = !0,
  D = 0,
  Q = 0,
  lt = 0,
  B = 0,
  L = 0,
  O = 0,
  rt = 0,
  y = 0,
  st = 0,
  x = 0,
  nt = 0,
  ot = 0,
  ct = 0,
  R = .066,
  z = Math.PI / 180,
  X = new DOMMatrix(),
  w = (t, a) => a < t ? t : a,
  it = t => t < 0 ? -t : t,
  q = t => t < 0 ? 0 : 1 < t ? 1 : t,
  N = (t, a) => (t = t < 0 ? 0 : 1 < t ? 1 : t) + (1 - t - t) * (a < 0 ? 0 : 1 < a ? 1 : a),
  ht = t => Math.atan2(Math.sin(t *= z), Math.cos(t)) / z,
  ft = (t, a, e) =>
    ((t *= z) + (2 * (a = (a * z - t) % (2 * Math.PI)) % (2 * Math.PI) - a) * (e < 0 ? 0 : 1 < e ? 1 : e)) / z,
  ut = (t, a, e, l) => {
    let r = a - t;
    return (t += Math.sign(a - t) * w(0, (r < 0 ? -r : r) ** .9 - e) * l * 2) + (a - t) * q(l / 7);
  },
  W = (t, e) => Array.from(Array(t), (t, a) => e(a)),
  mt = (t, a, e, l) => [t, 0, 0, 0, 0, a, 0, 0, 0, 0, (l + e) / (e - l), -1, 0, 0, 2 * l * e / (e - l), 0],
  v = ({ x: t, y: a, z: e }, l) => t * l.x + a * l.y + e * l.z,
  j = ({ x: t, y: a, z: e }, l) => Math.hypot(t - l.x, a - l.y, e - l.z) || 0,
  d = t => {
    let a = 0, e = 0, l = 0, r, s = t.at(-1);
    for (r of t) a += (s.y - r.y) * (s.z + r.z), e += (s.z - r.z) * (s.x + r.x), l += (s.x - r.x) * (s.y + r.y), s = r;
    return r = Math.hypot(a, e, l), a /= r, e /= r, l /= r, { x: a, y: e, z: l, w: a * s.x + e * s.y + l * s.z };
  },
  n = (t, a, e, l = 0) => 255 * l << 24 | 255 * e << 16 | 255 * a << 8 | 255 * t,
  b = (t, a, e) => (t.D = e, t.A = a, t),
  I = (t, l, a = t.A) =>
    b(
      t.map(t =>
        ((
          { x: t, y: a, z: e },
        ) => ({ x: t, y: a, z: e } = l.transformPoint({ x: t, y: a, z: e }), { x: t, y: a, z: e }))(t)
      ),
      a,
      t.D,
    ),
  o = (t, a, e) => t.map(t => I(t, a, e)),
  P = (e, l = 0) =>
    W(e, t => {
      let a = Math.cos(2 * Math.PI * t / e);
      return { x: Math.sin(2 * Math.PI * t / e), y: 0, z: (a < 0 ? -a : a) < .01 ? a : a < 0 ? a - l : a + l };
    }),
  r = (l, r, s) => l.map((t, a, { length: e }) => b([t, r[e - a - 1], r[e - (a + 1) % e - 1], l[(a + 1) % e]], l.A, s)),
  c = (
    t,
    a,
    e = 0,
    l,
  ) => (l = t.length ? t : P(t, l),
    t = I(l, X.translate(0, 1).scale3d(0 < e ? e : 1)),
    e = I(l, X.translate(0, -1).scale3d(e < 0 ? -e : 1)).reverse(),
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
  S = (l, r) => {
    let s, n, o, c = r.C;
    for (let t = 0; c.length > t; ++t) {
      if ((o = v(l, c[t]) - l.w) < -8e-5 ? n = r : 8e-5 < o && (s = r), n && s) {
        n = [], o = [], c = r.C, t = r.B;
        let a = c.at(-1), e = v(l, a) - l.w;
        for (let t of c) {
          s = v(l, t) - l.w,
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
          m: 2 < n.length && { C: b(n, c.A, c.D), B: t, o: r },
          l: 2 < o.length && { C: b(o, c.A, c.D), B: t, o: r },
        };
      }
    }
    return { m: s, l: n };
  },
  Y = (e, l, r = d(l.C)) => {
    if (e) {
      let { m: t, l: a } = S(e, l);
      t || a || e.F.push(l), t && (e.m = Y(e.m, t, r)), a && (e.l = Y(e.l, a, r));
    } else e = { x: r.x, y: r.y, z: r.z, w: r.w, F: [l], m: 0, l: 0 };
    return e;
  },
  F = (a, r, s) => {
    let n = [],
      o = (t, a) => {
        let { m: e, l } = S(t, a);
        e || l || (0 < s * v(t, r) ? e = a : l = a), e && (t.m ? o(t.m, e) : n.push(e)), l && t.l && o(t.l, l);
      };
    for (let t of r.F) o(a, t);
    return n;
  },
  k = (t, a) => t && (a(t), k(t.m, a), k(t.l, a)),
  T = t => t.length ? t.reduce((t, a) => Y(t, { C: a, B: 0, o: 0 }), 0) : t,
  l = t => (k(t, a => {
    let t = a.l;
    a.l = a.m, a.m = t, a.x *= -1, a.y *= -1, a.z *= -1, a.w *= -1;
    for (let t of a.F) t.B = !t.B;
  }),
    t),
  i = (...t) =>
    t.reduce((l, a) => {
      let r = [];
      if (l = T(l), a) {
        a = T(a), k(l, t => t.F = F(a, t, 1)), k(a, t => r.push([t, F(l, t, -1)]));
        for (let [a, e] of r) for (let t of e) Y(l, t, a);
      }
      return l;
    }),
  h = (t, ...a) => l(i(l(T(t)), ...a)),
  f = t => {
    let e = new Map(),
      l = new Map(),
      r = a => {
        if (a.o) {
          let t = e.get(a.o);
          t ? (l.delete(t), a = r(a.o)) : e.set(a.o, a);
        }
        return a;
      };
    return k(t, a => {
      for (let t of a.F) l.set(r(t), t.B);
    }),
      Array.from(l, ([{ C: t }, a]) => {
        let e = t.map(({ x: t, y: a, z: e }) => ({ x: t, y: a, z: e }));
        return b(a ? e.reverse() : e, t.A, t.D);
      });
  },
  u = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  yt = [],
  m = (t, a) => {
    Rt.push(Rt.at(-1).multiply(t)), a(), Rt.pop();
  },
  xt = [],
  Mt = [],
  K = [],
  pt = [],
  C = [[]],
  H = new Map(),
  s = new Int32Array(7),
  zt = t => {
    let { x: a, y: e, z: l } = Ct[t], r = (qt[0] = a, qt[1] = e, qt[2] = l, H.get(t = "" + (Ct.D ? Xt : s)));
    return void 0 !== r
      ? (a = 3 * r, K[a] = (K[a++] + s[4]) / 2, K[a] = (K[a++] + s[5]) / 2, K[a] = (K[a] + s[6]) / 2)
      : (H.set(t, r = H.size), Mt.push(a, e, l), K.push(s[4], s[5], s[6]), pt.push(s[3])),
      r;
  },
  M = (t, a = X, e) => C.at(-1).push(...o(t, Rt.at(-1).multiply(a), e)),
  gt = () => {
    let t = C.at(-1);
    for (Ct of t) {
      let { x: t, y: a, z: e } = d(Ct);
      s[3] = 0 | Ct.A, s[4] = 32767 * t, s[5] = 32767 * a, s[6] = 32767 * e;
      for (let t = 2, a = zt(0), e = zt(1); Ct.length > t; ++t) xt.push(a, e, e = zt(t));
    }
    return t.length = 0, { N: t = a, K: (a = xt.length) - t };
  },
  A = (
    t,
    a = 0,
  ) => (a = { ...Lt, o: Ot, G: [], J: Rt.at(-1), u: a },
    Rt.push(X),
    C.push([]),
    Ot.G.push(a),
    t = t(Ot = a) || gt(),
    yt[a.u] = a,
    t && t.K && (a.H = t),
    Ot = a.o,
    Rt.pop(),
    C.pop(),
    a),
  vt = (a, t = X) => {
    let e = a.h;
    a.o && !a.u && (a.u = a.o.u || 1), a.s = t.multiply(a.J), e && (t = e(a)) && (a.s = a.s.multiply(t));
    for (let t of a.G) vt(t, a.s);
  },
  E = { x: -11, y: 17, z: -90 },
  U = 0,
  J = 0,
  dt = t => Math.sin(t * Math.PI * 2),
  G = [],
  bt = () => {
    $ || !et ? Wt.disconnect() : Wt.connect(Nt.destination), b4.innerHTML = "Music: " + et;
  },
  wt = (t = !1) => {
    if ($ !== t) {
      $ = t, tt = 0;
      try {
        t ? document.exitPointerLock() : Wt.start();
      } catch {}
      document.body.className = t ? "l m" : "l", bt();
    }
  },
  V = (t, a, e) => t + (a - t) * q(1 - Math.exp(-e * R)),
  t = ({ j: t }) => t,
  _ = [],
  It = [],
  At = () => {
    L = It.reduce((t, a) => t + a.j, 0),
      h3.innerHTML = " " + ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][L];
  },
  jt = () => {
    At(), localStorage.DanteSP22 = JSON.stringify([_.map(t), It.map(t), rt, B, ct]);
  },
  Z = { x: 0, y: 0, z: 0 },
  p = t => {
    m(t, () => {
      A(s => {
        let n = { j: 0, g: 0, i: 0, M: s }, o = _.push(n) - 1;
        s.h = () => {
          let t = n.j, a = n.g, e = n.i, l = (n.L = s.s).transformPoint(), r = j(l, E);
          return j(l, Z) < 2.9 && G[5] && (a < .3 || .7 < a)
            && (n.j = t ? 0 : 1, o && !nt && (h4.innerHTML = "* click *", O = B + 1), rt = o, jt()),
            n.g = V(a, t, 4),
            n.i = V(e, t, 1),
            s.I = 80 < j(l, E),
            s.v = r < 150,
            s.H = Kt[.5 < a ? 1 : 0],
            X.rotate(60 * n.g - 30, 0).translateSelf(0, 1);
        };
      }),
        M(c(5), X.translate(-.2).rotate(90, 90).scale(.4, .1, .5), n(.4, .5, .5)),
        M(c(5), X.translate(.2).rotate(90, 90).scale(.4, .1, .5), n(.4, .5, .5)),
        M(c(u), X.translate(0, -.4).scale(.5, .1, .5), n(.5, .5, .4));
    });
  },
  g = (t, ...a) => {
    m(t, () => {
      let c = -1,
        i = 0,
        h = 1,
        f = 0,
        u = 0,
        m = 3,
        M = 0,
        p = 0,
        g = { j: 0 },
        v = a.map(([t, a, e]) => ({ x: t, z: a, w: e })),
        y = v[0],
        { x: d, z: x } = y,
        b = d,
        I = x;
      It.push(g),
        A(o => (o.h = () => {
          let t = 1, e = 1 / 0;
          for (var l of v) {
            var r = l.w, s = Math.hypot(d - l.x, x - l.z), n = s - r;
            a ||= s < r, 0 < n && e > n && (e = n, y = l), t = (r = s / r) > t ? t : r;
          }
          if (!a) {
            e = y.x, r = y.w;
            let t = Math.hypot(s = d - e, n = x - (l = y.z)), a = Math.atan2(-n, s);
            h && (f = (Math.random() - .5) * Math.PI / 2, m = w(1, m / (1 + Math.random()))),
              a += f,
              c = -Math.cos(a),
              i = Math.sin(a),
              .1 < t && (t = (r > t ? t : r) / (t || 1), d = s * t + e, x = n * t + l);
          }
          h = a,
            m = V(m, 3 + 6 * (1 - t), 3 + t),
            d = V(d, d + c, m),
            x = V(x, x + i, m),
            b = V(b, d, m),
            I = V(I, x, m),
            u = ft(u, Math.atan2(b - M, I - p) / z - 180, 3 * R),
            M = b,
            p = I,
            t = X.translate(b, 0, I).rotateSelf(0, u).skewXSelf(7 * Math.sin(2 * B)).skewYSelf(7 * Math.sin(1.4 * B));
          var a = o.s.multiply(t).transformPoint();
          return o.v = 1 - g.j,
            o.I = 100 < j(a, E),
            !g.j && j(a, Z) < 1.5
            && (g.j = 1,
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
              ][L] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              e = L && L < 12 ? 5 : 7,
              nt || (h4.innerHTML = a, O = B + e),
              jt()),
            t;
        },
          Ut)
        );
    });
  },
  Pt = () => {
    let r = 3,
      a = t =>
        X.translate(Math.sin(B + 2) / 5, Math.sin(.8 * B) / 3, t).rotateSelf(
          2 * Math.sin(B),
          Math.sin(.7 * B),
          Math.sin(.9 * B),
        ),
      l = f(
        h(
          o(c(u), X.translate(0, -8).scale(6, 15, 2.2)),
          o(c(u), X.translate(0, -14.1).scale(4, 13, 4)),
          o(c(20, 1), X.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      ),
      e = f(
        h(
          o(c(20, 1, 1.15, 1), X.translate(0, -3).scale(3.5, 1, 3.5), n(.7, .4, .25, .7)),
          o(c(20, 1, 1.3, 1), X.translate(0, -2.5).scale(2.6, 1, 3), n(.7, .4, .25, .2)),
          o(c(u), X.translate(4, -1.2).scale3d(2), n(.7, .4, .25, .3)),
        ),
      ),
      s = (W(7, t => M(c(6, 1), X.translate(4 * (t / 6 - .5), 3).scale(.2, 3, .2), n(.3, .3, .38))), gt());
    m(X.translate(-12, 4.2, -66), () => {
      A(t => {
        t.h = () => a(40 * ot),
          p(X.translate(0, -3, 4)),
          M(e),
          W(13, a => {
            m(X.translate(a % 4 * 1.2 - 1.7, -2, 1.7 * (a / 4 | 0) - 5.5 + it(a % 4 - 2)), () =>
              A(t => (t.h = () => {
                if (t.v = L > 12 - a) return X.translate(Math.sin(B + a) / 6, 0, Math.cos(B / 1.5 + a) / 6);
              },
                Ut)
              ));
          });
      }, ++r);
    }),
      M(c(u), X.translate(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), n(.8, .8, .8, .2)),
      g(X.translate(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
      g(
        X.translate(0, 2.8),
        [5, 10, 3],
        [-5, 10, 3],
        ...P(18).map(({ x: t, z: a }) => [7 * t, 10 * a, 4.5 - 2 * (t < 0 ? -t : t)]),
      ),
      u.map(({ x: t, z: a }) => M(c(6), X.translate(3 * t, 3, 15 * a).scale(.7, 4, .7), n(.6, .3, .3, .4))),
      [-23, 22].map(t => M(c(u), X.translate(0, 0, t).scale(3, 1, 8), n(.9, .9, .9, .2))),
      [-15, 15].map((t, e) => {
        M(c(u), X.translate(0, 6.3, t).scale(4, .3, 1), n(.3, .3, .3, .4)),
          M(c(u), X.translate(0, 1, t).scale(3, .2, .35), n(.3, .3, .38, .2)),
          m(X.translate(0, 0, t), () =>
            A(a => (a.h = () => {
              let t = _[e + 1].g;
              return a.v = t < .99, X.translate(0, 5 * -t);
            },
              s)
            ));
      }),
      W(5, a =>
        W(2, t =>
          M(
            Bt,
            X.translate(18.5 * (t - .5), 0, 4.8 * a - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
            n(1, 1, .8, .2),
          ))),
      M(c(u), X.translate(3, 1.5, -20).scale(.5, 2, 5), n(.7, .7, .7, .2)),
      M(c(u), X.translate(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), n(.75, .75, .75, .2)),
      M(c(5), X.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), n(.6, .3, .3, .4)),
      p(X.translate(-5.4, 1.5, -19).rotate(0, -90)),
      M(c(u), X.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), n(.8, .2, .2, .5)),
      M(f(
        h(
          i(
            o(c(6, 0, 0, .3), X.translate(8, -3, -4).scale(13, 1, 13), n(.7, .7, .7, .2)),
            o(c(6), X.translate(0, -8).scale(9, 8, 8), n(.4, .2, .5, .5)),
            o(c(6, 0, 0, .3), X.translate(0, -.92).scale(13, 2, 13), n(.8, .8, .8, .2)),
          ),
          o(c(5), X.scale(5, 30, 5), n(.4, .2, .6, .5)),
          o(c(5, 0, 1.5), X.translate(0, 1).scale(4.5, .3, 4.5), n(.7, .5, .9, .2)),
          o(c(u), X.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), n(.5, .5, .5, .5)),
          o(c(6), X.translate(15, -1.5, 4).scale(3.5, 1, 3.5), n(.5, .5, .5, .5)),
        ),
      )),
      A(t => {
        p(X.translate(0, 1.2)),
          t.h =
            () => (t.v = .01 < _[3].g,
              X.translate(0, (5 * Math.cos(1.5 * B) + 2) * _[3].i * (1 - _[2].g) + -15 * (1 - _[3].g), 0)),
          M(c(5), X.translate(0, -.2).scale(5, 1, 5), n(.6, .65, .7, .3));
      }, ++r),
      p(X.translate(15, -2, 4)),
      m(X.translate(0, 0, 75), () => {
        let l = () => {
            let t = _[2].i, a = 1 - _[4].i;
            return t < a ? t : a;
          },
          t = (a, e) =>
            A(t => {
              t.h = () => X.translate(l() * Math.sin(3 * a + B * a) * e),
                u.map(({ x: t, z: a }) => {
                  M(c(11, 1), X.translate(4 * t, 4, 4 * a - 40).scale(.8, 3, .8), n(.5, .3, .7, .6)),
                    M(c(u), X.translate(4 * t, 7, 4 * a - 40).scale(1, .3), n(.5, .5, .5, .3));
                }),
                M(f(h(
                  o(c(u), X.translate(0, 0, -40).scale(5, 1, 5), n(.8, .8, .8, .3)),
                  ...[-1, 1].map(t =>
                    o(c(u), X.translate(5 * t, .2, -40).rotate(0, 0, -30 * t).scale(4, 1, 2), n(.8, .8, .8, .3))
                  ),
                ))),
                M(c(u), X.translate(0, -3, -40).scale(8, 2, 8), n(.4, .4, .4, .3));
            }, ++r),
          a = (t(.7, 12),
            m(X.translate(0, 0, 20), () => t(1, 8.2)),
            A(t => {
              m(X.translate(0, 0, -30), () => {
                t.h = () => X.translate(l() * Math.sin(B / 1.5 + 2) * 12),
                  M(f(
                    h(
                      i(
                        o(c(u), X.scale(1.5, 1, 5), n(.9, .9, .9, .2)),
                        o(c(6), X.scale(4, 1, 5), n(.9, .9, .9, .2)),
                        o(c(u), X.translate(0, -2).scale(2, 3.2, 1.9), n(.3, .8, .5, .5)),
                        o(c(16, 1, 0, 4), X.scale(1, 1, 1.5).rotate(0, 90), n(.9, .9, .9, .2)),
                      ),
                      o(c(u), X.scale(1.3, 10, 1.3), n(.2, .7, .4, .6)),
                    ),
                  )),
                  g(X.translate(0, 2.8), [0, 0, 4.5]);
              });
            }, ++r),
            A(t => {
              t.h = () => X.translate(9.8 * (1 - l())),
                M(c(3), X.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), n(.3, .6, .6, .2)),
                M(c(8), X.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), n(.8, .8, .8, .2)),
                M(c(u), X.translate(-23, -3, -20).scale(5.2, 1.7, 3), n(.5, .5, .5, .3)),
                M(c(u), X.translate(-23, -2.2, -13).scale(3, 1, 4), n(.5, .5, .5, .3)),
                p(X.translate(-23, -.5, -8.5));
            }, ++r),
            M(c(u), X.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), n(.9, .9, .9, .2)),
            A(t => {
              t.h = () => X.translate(0, q(1 - 5 * l()) * N(_[4].g, _[5].g) * Math.sin(1.35 * B) * 4),
                M(c(u), X.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), n(.7, .7, .7, .2)),
                M(
                  f(h(o(c(u), X.scale(3, 1.4, 2.7)), o(c(u), X.scale(1.2, 8, 1.2)))),
                  X.translate(-33, -3, -20),
                  n(.7, .7, .7, .2),
                );
            }, ++r),
            A(t => {
              t.h = () => X.translate(0, 0, q(1 - 5 * l()) * N(_[4].g, _[5].g) * Math.sin(.9 * B) * 8),
                M(f(
                  h(
                    o(c(u), X.translate(-27, -3, -20).scale(3, 1.4, 2.7), n(.9, .9, .9, .2)),
                    o(c(u), X.translate(-27, -3, -20).scale(1, 3), n(.9, .9, .9, .2)),
                  ),
                )),
                M(c(u), X.translate(-39, -3, -20).scale(3, 1.4, 2.7), n(.9, .9, .9, .2));
            }, ++r),
            m(X.translate(-44.5, 0, -20), () =>
              A(t => {
                t.h = () => X.translate(0, -6.5 * _[4].i),
                  M(c(6), X.rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), n(.7, .7, .7, .4));
              })),
            [...o(
              f(i(
                o(c(u), X.translate(0, -3).scale(11, 1.4, 3), n(.9, .9, .9, .2)),
                h(
                  o(c(6), X.rotate(0, 0, 90).scale(6, 8, 6), n(.3, .6, .6, .3)),
                  o(c(4, 0, .01), X.translate(0, 6).scale(12, 2, .75).rotate(0, 45), n(.3, .6, .6, .3)),
                  o(c(6), X.rotate(0, 0, 90).scale(5, 12, 5), n(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(t =>
                    o(c(5), X.translate(t, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), n(.3, .6, .6, .3))
                  ),
                ),
              )),
              X,
            )]);
        M(a, X.translate(-53, 0, -20)),
          M(c(6), X.translate(-61.3, -2.4, -26).scale(3, 1, 5), n(.4, .6, .6, .3)),
          M(c(7), X.translate(-57, -2.6, -29).scale(4, 1, 4), n(.8, .8, .8, .3)),
          p(X.translate(-55, -1.1, -29).rotate(0, 90)),
          m(X.translate(-75, 0, -20), () =>
            A(t => {
              t.h = () => X.translate(0, (1 - _[5].i) * (1 - _[6].g) * 3).rotate(180 * (1 - _[5].i) + x, 0), M(a);
            })),
          M(c(u), X.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), n(.7, .7, .7, .2)),
          M(c(3, 0, -.5), X.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), n(.8, .8, .8, .2)),
          g(X.translate(-100, .2, -20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          M(
            f(h(
              i(
                o(c(u), X.translate(-100, -2.5, -20).scale(8, 1, 8), n(.8, .8, .8, .2)),
                o(c(u), X.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), n(.8, .8, .8, .2)),
                o(c(u), X.translate(-100, -2.6, -5).scale(3, 1.1, 7), n(.8, .8, .8, .2)),
                o(c(u), X.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), n(.8, .8, .8, .2)),
                o(c(6), X.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), n(.6, .6, .6, .3)),
                o(c(u), X.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), n(.8, .8, .8, .2)),
                o(c(u), X.translate(-100, .42, 17).scale(3, 1.1, 4.1), n(.8, .8, .8, .2)),
              ),
              o(c(8), X.translate(-100, -1, -20).scale(7, .9, 7), n(.3, .3, .3, .4)),
              o(c(8), X.translate(-100, -2, -20).scale(4, .3, 4), n(.4, .4, .4, .5)),
              o(c(8), X.translate(-100, -3, -20).scale(.6, 1, .6), n(.4, .4, .4, .5)),
            )),
            X,
          ),
          M(f(
            h(
              o(c(u), X.translate(-100, 1, -12).scale(7.5, 4), n(.5, .5, .5, .4)),
              o(c(u), X.translate(-100, 0, -5).scale(2, 2, 10), n(.5, .5, .5, .4)),
              o(c(20, 1), X.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), n(.5, .5, .5, .4)),
            ),
          )),
          g(X.translate(-89, .2, 5), [0, 0, 6]),
          m(X.translate(-99.7, -2, -11.5), () => A(t => (t.h = () => X.translate(0, 5.3 * -_[6].g), s))),
          u.map(({ x: a, z: e }) => {
            M(c(6), X.translate(7 * a - 100, -3, 7 * e - 20).scale(1, 8.1), n(.6, .15, .15, .8)),
              [4, -.4].map(t =>
                M(c(6), X.translate(7 * a - 100, t, 7 * e - 20).scale(1.3, .5, 1.3), n(.4, .2, .2, .8))
              );
          }),
          W(7, t => {
            M(
              c((23 * t + 1) % 5 + 5, 0, .55),
              X.translate(5 * Math.sin(t) - 101 + t, -2.3 - t, -30.1 - 2.8 * t).scaleSelf(
                5 + t / 2,
                1 + t / 6,
                5 + t / 3,
              ),
              n(.5 - t / 17, .5 - (1 & t) / 9, .6, .3),
            );
          }),
          M(c(u), X.translate(-87, -9.5, -51).scale(7, 1, 3), n(.4, .5, .6, .4)),
          M(c(4), X.translate(-86, -9.2, -48).scale(5, 1, 5), n(.5, .6, .7, .3)),
          M(c(18, 1), X.translate(-86, -9, -44).scale(1.5, 1, 1.5), n(.3, .3, .4, .1)),
          p(X.translate(-86, -7.5, -44)),
          m(X.translate(-76.9, -10, -51), () => {
            A(t => {
              t.h = () => X.translate(0, 3.5 * (1 - w(_[6].g, _[7].g)) + N(_[7].i, _[6].i) * Math.sin(B) * 5),
                [0, 12, 24].map(t => M(c(u), X.translate(t, t / -13).scale(2.8, 1.5, 3), n(.2, .5, .6, .2)));
            }, ++r),
              A(t => {
                t.h = () => {
                  let t = N(_[7].i, _[6].i);
                  return X.translate(0, t * Math.sin(B + 3) * 6, 6 * Math.sin(.6 * B + t) * t);
                }, [6, 18].map(t => M(c(u), X.translate(t, t / -13).scale(2.8, 1.5, 3), n(.1, .4, .5, .2)));
              }, ++r);
          }),
          m(X.translate(-38.9, -11.3, -58), () => {
            M(f(
              h(
                i(
                  o(c(u), X.scale(11, 1, 13), n(.3, .4, .6, .3)),
                  o(c(5), X.translate(0, 0, -7).scale(2, 1.2, 2), n(.2, .4, .7, .3)),
                  o(c(5), X.scale(9, 1.2, 9), n(0, .2, .3, .5)),
                ),
                o(c(5), X.scale(5.4, 5, 5.4), n(0, .2, .3, .5)),
              ),
            )),
              p(X.translate(0, 1.7, -7)),
              A(t => {
                t.h = () => X.translate(0, -7.3 * _[7].i),
                  g(X.translate(0, 11).rotate(0, 0, 10), ...P(15).map(({ x: t, z: a }) => [3 * t, 3 * a, 1.5])),
                  M(f(
                    h(
                      i(
                        o(c(5), X.translate(0, 2).scale(5, 7, 5).skewY(8), n(.2, .4, .5, .5)),
                        o(c(5), X.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), n(.25, .35, .5, .5)),
                        o(c(5), X.translate(0, 9).scale(.6, 7, .6).skewY(8), n(.35, .3, .5, .5)),
                      ),
                      o(c(5), X.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), n(.2, .4, .5, .5)),
                    ),
                  ));
              }),
              u.map(({ x: a, z: e }) => {
                M(c(18, 1), X.translate(9 * a, 4, 11 * e).scale(1, 4), n(.25, .25, .25, 1)),
                  [1.5, 8].map(t => M(c(18, 1), X.translate(9 * a, t, 11 * e).scale(1.5, .5, 1.5), n(.6, .6, .6, .3)));
              }),
              M(f(
                h(
                  i(
                    o(c(6), X.translate(0, 0, -36).scale(15, 1.2, 15), n(.7, .7, .7, .3)),
                    o(c(u), X.translate(0, 0, -18).scale(4, 1.2, 6), n(.45, .4, .6, .3)),
                  ),
                  ...W(6, a =>
                    W(6, t =>
                      o(
                        c(6),
                        X.translate(4.6 * t - 12 + 2 * (1 & a), 0, 4.6 * a - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                        n(.7, .7, .7, .3),
                      ))).flat(),
                ),
              )),
              g(X.translate(0, 2.9, -38), [0, 0, 12]);
          }),
          M(c(5), X.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), n(.8, .1, .25, .4)),
          p(X.translate(-84, -.5, 10).rotate(0, 45));
      }),
      m(X.translate(-123, 1.4, 55), () => {
        A(t => {
          t.h = () => a(-65 * ct), p(X.translate(0, -3, -4).rotate(0, 180)), M(e);
        }, ++r);
      }),
      m(X.translate(-123, 0, -12), () => {
        let a = f(
          h(
            o(c(u), X.translate(0, -.5, 1).scale(1.15, 1.2, 6.5), n(.25, .25, .35, .3)),
            o(c(3), X.translate(0, 0, -5.5).scale(3, 2), n(.6, .3, .4, .3)),
            ...[-1.2, 1.2].map(t => o(c(u), X.translate(t, -.5, 1).scale(.14, .3, 6.5), n(.7, .2, 0, .3))),
          ),
        );
        M(c(u), X.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), n(.8, .8, .8, .2)),
          M(c(6), X.translate(7, -2.6, -4.5).scale(3.2, .8, 3), n(.6, .5, .7, .2)),
          p(X.translate(7, -1.4, -6).rotate(0, 180)),
          g(X.translate(8, .2), [0, 0, 3.5]),
          W(3, t => M(l, X.translate(12 * t + 14, -9), n(.6, .6, .6, .3))),
          W(3, t => M(l, X.translate(46, -9, -12 * t - 8).rotate(0, 90), n(.6, .6, .6, .3))),
          M(f(
            h(
              o(c(12), X.translate(46, -13.9).scale(4, 18.2, 4), n(.7, .7, .7, .2)),
              o(c(u), X.translate(44).scale(3.5, 2.2, 1.3), n(.4, .5, .6, .2)),
              o(c(u), X.translate(46, 0, -2).scale(1.5, 2.2, 2), n(.4, .5, .6, .2)),
              o(c(12), X.translate(46, 2.8).scale(3, 5, 3), n(.4, .5, .6, .2)),
            ),
          )),
          M(c(u), X.translate(7.5, -17).scale(.5, 15, 2.2), n(.6, .6, .6, .3)),
          M(c(u), X.translate(46, -17, -38.5).scale(2.2, 15, .5), n(.6, .6, .6, .3)),
          M(
            f(h(
              i(
                o(c(u), X.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                o(c(u), X.translate(26.5, -.6, 10).scale(17, 2, .5)),
              ),
              ...W(4, t => o(c(u), X.translate(13 + 9 * t + (1 & t), -.8, 9).scale(1.35, 1.35, 9))),
              ...W(3, t => o(c(u), X.translate(17 + 9 * t, -.8, 9).scale(1.35, 1.35, 9))),
            )),
            X,
            n(.5, .5, .6, .2),
          ),
          M(c(5), X.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), n(.25, .25, .35, 1)),
          A(t => {
            t.h = () => {
              let t = Math.sin(1.1 * B);
              return X.translate.call(X, 0, -2, N(_[10].g, _[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
            }, W(2, t => M(a, X.translate(13 + 9 * t + (1 & t), 1.7)));
          }),
          A(t => {
            t.h = () => {
              let t = Math.sin(2.1 * B);
              return X.translate.call(X, 0, -2, N(_[10].g, _[11].g) * (t < 0 ? -t : t) * -8.5 + 10);
            }, W(2, t => M(a, X.translate(13 + 9 * (t + 2) + (1 & t), 1.7)));
          }),
          A(t => {
            t.h = () => {
              let t = Math.sin(1.5 * B);
              return X.translate.call(
                X,
                0,
                -2,
                -8.5 * w((1 - _[10].g) * (1 - N(_[10].g, _[11].g)), N(_[10].g, _[11].g) * (t < 0 ? -t : t)) + 10,
              );
            }, W(3, t => M(a, X.translate(17 + 9 * t, 1.7)));
          }),
          M(c(u), X.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), n(.6, .6, .6, .3)),
          M(f(
            h(
              o(c(u), X.translate(30, -5.8, -28).scale(9, 1, 5), n(.8, .8, .8, .1)),
              o(c(9), X.translate(25, -5.8, -28).scale(3, 8, 3), n(.7, .7, .7, .2)),
            ),
          )),
          g(X.translate(30, -3, -28).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          M(c(9), X.translate(25, -5.8, -28).scale(2.5, .9, 2.5), n(.5, .5, .5, .3)),
          p(X.translate(25, -4.4, -28).rotate(0, 90));
      }),
      m(X.translate(-100, .7, 115), () => {
        M(f(
          h(
            i(
              o(c(6, 0, 0, .6), X.translate(0, 0, -9.5).scale(8, 1, 11), n(.7, .7, .7, .2)),
              o(c(u), X.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), n(.7, .7, .7, .2)),
              o(c(u), X.translate(8.8, 0, -8).scale(3, 1, 3.3), n(.7, .7, .7, .2)),
            ),
            o(c(5), X.translate(0, 0, -2).scale(4, 3, 4), n(.7, .7, .7, .2)),
          ),
        )),
          W(4, e =>
            A(a => {
              a.h = () => {
                a.v = _[1].j && _[2].j;
                let t = N(_[8].i, _[12].i);
                return X.translate(
                  2 < e ? 2 * (1 - t) + t : 0,
                  t * Math.sin(1.3 * B + 1.7 * e) * (3 + e / 3),
                  (1 & e ? -1 : 1) * (1 - _[8].i) * (1 - _[12].i) * -7
                    + (t < .05 ? .05 : t) * Math.cos(1.3 * B + 7 * e) * (4 - 2 * (1 - e / 3)),
                );
              },
                M(
                  c(6),
                  X.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
                  n(.5 - e / 8, e / 12 + .5, .7, .3),
                );
            }, ++r)),
          m(X.translate(-39.7, -2.5, -21.5), () => {
            A(a => {
              a.h = () => {
                a.v = _[1].j && _[2].j;
                let t = N(_[8].i, _[12].i);
                return X.translate(2.5 * (1 - t), -3 * (1 - _[8].g) + t * Math.sin(.8 * B) * -1).rotateSelf(
                  Math.cos(1.3 * B) * (3 * t + 3),
                  0,
                );
              },
                M(f(
                  h(o(c(10), X.scale(6, 2, 6), n(.1, .6, .5, .3)), o(c(10), X.scale(3.3, 6, 3.3), n(.1, .6, .5, .5))),
                )),
                m(X.translate(-7.5).rotate(0, 90), () => {
                  M(c(15), X.scale(3, 2.3, 3), n(.4, .4, .4, .3)),
                    M(c(10), X.scale(2, 2.5, 2), n(.3, .8, .7, .3)),
                    M(c(5), X.scale(1, 3), n(.5, .5, .5, .5)),
                    p(X.translate(0, 3.4).rotate(0, 180));
                }),
                g(X.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
                [-1, 1].map(t =>
                  M(
                    Bt,
                    X.rotate(90 * -t, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                    n(1, 1, .8, .2),
                  )
                );
            }, ++r);
          }),
          [-1, 1].map(a => {
            M(c(15, 1), X.translate(-7.5 * a, 3, -19).scale(.8, 4, .8), n(.6, .24, .2, .5)),
              [7.2, 1.5].map(t => M(c(15, 1), X.translate(-7.5 * a, t, -19).scale(1.1, .5, 1.1), n(.5, .24, .2, .4))),
              M(Bt, X.translate(-5 * a, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * a - 90), n(1, 1, .8)),
              M(
                f(h(
                  o(c(u), X.translate(-4 * a, 3.5, -.5).scale(4, 4, .7), n(.5, .5, .5, .4)),
                  o(c(u), X.scale(3, 3, 10), n(.6, .24, .2, .5)),
                  o(c(30, 1), X.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), n(.6, .24, .2, .5)),
                  o(c(5), X.translate(-5.3 * a, 7).rotate(90, 0).scale(1.7, 5, 1.7), n(.6, .24, .2, .5)),
                  o(c(5), X.translate(-5.3 * a, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), n(.6, .24, .2, .5)),
                )),
                X.translate(a, 0, -18),
              );
          }),
          A(t => (t.h = () => X.translate(0, -.1 - 6 * _[12].g, -18.5).scale(.88, 1.2), s));
        let a = [
          ...o(c(28, 1), X.scale(8, 1, 8), n(.45, .45, .45, .2)),
          ...o(c(5), X.translate(0, 1).scale(1, .2), n(.3, .3, .3, .2)),
        ];
        m(X.translate(20, .3, -9), () => {
          A(t => {
            t.h = () => X.rotate(0, 40 + y),
              M(f(
                h(
                  o(c(28, 1), X.scale(8, 1, 8), n(.45, .45, .45, .2)),
                  o(c(u), X.translate(0, 0, -5.5).scale(1.5, 3, 2.5), n(.45, .45, .45, .2)),
                ),
              )),
              M(c(8), X.translate(0, 2).scale(3, 1.5, 3), n(.7, .7, .7, .1)),
              M(c(5), X.translate(0, 2).scale(1, 2), n(.3, .3, .3, .2)),
              g(X.translate(0, 3), ...P(10).map(({ x: t, z: a }) => [5.6 * t, 5.6 * a, 2.5]));
          }, ++r);
        }),
          m(X.translate(36, .3, -9), () => {
            M(c(u), X.translate(8).scale(.7, .8, 2.5), n(.7, .7, .7, .2)),
              A(t => {
                t.h = () => X.rotate(0, st),
                  M(f(
                    h(
                      o(c(28, 1), X.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3)),
                      o(c(u), X.scale(9, 5, 2), n(.3, 0, 0, .3)),
                    ),
                  )),
                  M(a),
                  [-1, 1].map(t =>
                    M(
                      Bt,
                      X.rotate(0, 90).translate(-5 * t, 1, -.5).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90),
                      n(1, 1, .8),
                    )
                  );
              }, ++r);
          }),
          m(X.translate(52, .3, -9), () => {
            M(c(u), X.translate(0, 0, -8).scale(2.5, .8, .7), n(.7, .7, .7, .2)),
              A(t => {
                t.h = () => X.rotate(0, 180 - st),
                  M(f(
                    h(
                      o(c(30, 1), X.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3)),
                      o(c(u), X.translate(7).scale(9, 5, 2), n(.3, 0, 0, .3)),
                      o(c(u), X.translate(0, 0, 7).scale(2, 5, 9), n(.3, 0, 0, .3)),
                    ),
                  )),
                  M(a);
              }, ++r);
          }),
          m(X.translate(52, .3, -25), () => {
            A(t => {
              t.h = () => X.rotate(0, 270 + st),
                M(f(
                  h(
                    o(c(30, 1), X.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3)),
                    o(c(u), X.translate(7).scale(9, 5, 2), n(.3, 0, 0, .3)),
                    o(c(u), X.translate(0, 0, -7).scale(2, 5, 9), n(.3, 0, 0, .3)),
                  ),
                )),
                M(a);
            }, ++r);
          }),
          M(c(u), X.translate(61, -.3, -25).scale(2, 1, 2), n(.7, .7, .7, .3)),
          M(c(u), X.translate(68, -.3, -25).scale(5, 1, 3), n(.7, .7, .7, .3)),
          p(X.translate(66, 2, -19).rotate(-12, 0)),
          M(c(5), X.translate(66, -.5, -19).scale(3, 2, 4).rotate(-20, 0), n(.2, .5, .5, .6)),
          [n(.1, .55, .45, .2), n(.2, .5, .5, .3), n(.3, .45, .55, .4)].map((a, e) =>
            A(t => {
              t.h = () =>
                X.translate(
                  0,
                  (1 - _[13].i) * (1 - _[14].i) * 3 + N(_[13].i, _[14].i) * Math.sin(1.5 * B + 1.5 * e) * 4,
                ),
                M(
                  c(u),
                  X.translate(76.5, e / 2 - 2.1, 7.5 * (1 - e / 30) * e - 25).scale(3.3, 3 - e / 2, 3.45 - e / 5),
                  a,
                );
            }, ++r)
          ),
          m(X.translate(100, .2, -20), () => {
            M(c(u), X.translate(-9.7, -.2, 8.9).scale(10, 1, 2.5), n(.6, .6, .6, .2)),
              M(f(
                h(
                  o(c(6, 0, 0, .3), X.translate(0, -.92).scale(14, 2, 14), n(.8, .8, .8, .2)),
                  o(c(5), X.scale3d(6), n(.3, .3, .3, .5)),
                ),
              )),
              [8, -6.1].map((a, e) =>
                W(3, t =>
                  M(
                    l,
                    X.translate(6 * t - 6, a - (1 & t), 16 - .2 * (1 & t) - e),
                    1 & t ? n(.5, .5, .5, .3) : n(.35, .35, .35, .5),
                  ))
              ),
              [-1, 1].map(t =>
                M(Bt, X.translate(-8 * t, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90), n(1, 1, .8))
              ),
              M(c(5), X.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), n(.5, .3, .3, .4)),
              p(X.translate(0, 1.7, -13).rotate(0, 180)),
              g(X.translate(0, 3), ...P(9).map(({ x: t, z: a }) => [9 * t, 9 * a, 4])),
              M(f(
                h(
                  i(
                    o(c(u), X.translate(0, 16, 15.5).scale(12, 1, 3), n(.5, .3, .3, .4)),
                    o(c(u), X.translate(0, 16, 16).scale(3, 1, 3.8), n(.5, .3, .3, .4)),
                  ),
                  o(c(5), X.translate(0, 16, 8.5).scale(5.5, 5, 5.5), n(.5, .3, .3, .4)),
                ),
              )),
              A(t => {
                t.h = () => {
                  let t = Math.sin(B);
                  return X.translate(-2 * t).rotate(0, 0, 25 * t);
                },
                  M(c(3), X.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), n(.5, .3, .3, .4)),
                  [22, 30].map(t => {
                    M(c(6), X.translate(0, 16, t).scale(3, 1, 2.3).rotate(0, 90), n(.7, .7, .7, .4)),
                      M(c(u), X.translate(0, 6.2, t).scale(.5, 11, .5), n(.5, .3, .3, .4));
                  });
              }, ++r),
              M(c(6), X.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), n(.5, .6, .7, .3)),
              M(c(u), X.translate(0, 16, 34).scale(1.5, 1, 2), n(.5, .6, .7, .3)),
              M(c(7), X.translate(0, 16.2, 38).scale(5, 1, 5), n(.4, .5, .6, .4)),
              A(t => {
                t.h = () => {
                  let t = N((_[14].g + _[14].i) / 2, _[13].i);
                  return t = N(t, (_[15].g + _[15].i) / 2), X.translate(0, 16 * t, 8.5 * q(2 * t - 1));
                },
                  M(c(5), X.scale(5, 1.1, 5), n(.5, .3, .3, .4)),
                  M(c(5), X.scale(5.5, .9, 5.5), n(.25, .25, .25, .4)),
                  p(X.translate(0, 1.5, -1).rotate(0, 180));
              }, ++r),
              g(X.translate(0, 19, 39), [0, 0, 3.5]);
          });
      });
  },
  St = (t, a, e, l) => {
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
      y = new DOMMatrix(mt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, a, e)).multiplySelf(t).invertSelf();
    return t = W(
      8,
      t => (t = y.transformPoint({ x: 4 & t ? 1 : -1, y: 2 & t ? 1 : -1, z: 1 & t ? 1 : -1 }),
        r -= t.x = (m * t.x | 0) / m / t.w,
        s -= t.y = (m * t.y | 0) / m / t.w,
        n -= t.z = (m * t.z | 0) / m / t.w,
        t),
    ),
      a = X.rotate(298, 139).translateSelf(r / 8, s / 8, n / 8),
      I(t, a).map(({ x: t, y: a, z: e }) => {
        o = t > o ? o : t,
          c = c > t ? c : t,
          i = a > i ? i : a,
          h = h > a ? h : a,
          f = e > f ? f : e,
          u = u > e ? u : e;
      }),
      f *= f < 0 ? l : 1 / l,
      u *= 0 < u ? l : 1 / l,
      X.scale(2 / (c - o), 2 / (h - i), 2 / (f - u)).translateSelf((c + o) / -2, (h + i) / -2, (f + u) / 2)
        .multiplySelf(a).toFloat32Array();
  },
  Yt = (t, a = 35633) => (a = at.c6x(a), at.s3c(a, t), at.c6a(a), a),
  Ft = (t, a) => {
    let e = {}, l = at.c1h();
    return at.abz(l, t), at.abz(l, Yt(a, 35632)), at.l8l(l), t => t ? e[t] || (e[t] = at.gan(l, t)) : at.u7y(l);
  },
  kt = (r, s, n, o) => {
    let c = t => at.d97(4, t.K, 5123, 2 * t.N),
      i = t => {
        let a = t.u, e = t.H, l = t.G;
        if (!(!s && 2 === t.u || n && t.I) && t.v) {
          for (let t of l) i(t);
          e && (o && at.ube(o, a / 255), at.uae(r, !1, t.s.toFloat32Array()), c(e));
        }
      };
    $ ? (at.uae(r, !1, X.rotate(0, 40 * Math.sin(lt) - 70).toFloat32Array()), c(Et.H), Dt.map(t => t.H).map(c)) : i(Lt);
  },
  Tt = new Int32Array(10725888),
  Ct,
  $,
  tt,
  Ht,
  Dt,
  Qt = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Bt = (() => {
    let a = W(
        11,
        t => X.translate(Math.sin(t / 10 * Math.PI), t / 10).rotate(+t).scale(1.0001 - t / 10, 0, 1 - t / 10),
      ),
      e = P(18);
    return W(10, t => r(I(e, a[t]).reverse(), I(e, a[t + 1]), 1)).flat();
  })(),
  Lt = { G: [], J: X, s: X, u: 1, v: 1, I: 0 },
  Ot = Lt,
  Rt = [X],
  Xt = new Int32Array(s.buffer, 0, 4),
  qt = new Float32Array(s.buffer),
  Nt = new AudioContext(),
  Wt = Nt.createBufferSource(),
  Kt = (M([u.slice(1)], X.translate(-2).scale3d(3).rotate(90, 0)),
    gt(),
    [n(1, .5, .2), n(.7, 1, .2)].map(
      t => (M(c(6, 1), X.scale(.13, 1.4, .13), n(.3, .3, .5)),
        M(c(8), X.translate(0, 1).scale(.21, .3, .21), t),
        M(c(3), X.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), n(.2, .2, .2)),
        gt()),
    )),
  Et = A(() => {
    Dt = [-1, 1].map(t =>
      A(() => {
        M(c(10, 1), X.translate(.3 * t, -.8).scale(.2, .7, .24), n(1, .3, .4));
      })
    ),
      [0, 180].map(t => M(Bt, X.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), n(1, 1, .8))),
      M(e(20), X.translate(0, 1).scale(.5, .5, .5), n(1, .3, .4));
    let a = o(
      f(h(c(15, 1), o(c(u), X.translate(0, 0, 1).scale(2, 2, .5)))),
      X.rotate(-90, 0).scale(.1, .05, .1),
      n(.3, .3, .3),
    );
    [-1, 1].map(t => M(a, X.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t))),
      M(c(u), X.translate(0, .9, .45).scale(.15, .02, .06), n(.3, .3, .3)),
      M(e(20), X.scale(.7, .8, .55), n(1, .3, .4));
  }, 2),
  Ut = (M(
    e(40, 30, (t, a, e) => {
      let l = a / 30, r = .05 * t * Math.PI, s = l ** .6 * Math.PI / 2;
      return t = l * l * Math.sin(t * Math.PI * .35) / 4,
        29 === a
          ? { x: e.D = 0, y: -.5, z: 0 }
          : {
            x: Math.cos(r) * Math.sin(s),
            y: Math.cos(l * Math.PI) - l - t,
            z: Math.sin(r) * Math.sin(s) + Math.sin(t * Math.PI * 2) / 4,
          };
    }),
    X.scale3d(.7),
    n(1, 1, 1),
  ),
    [-1, 1].map(t => M(e(15), X.translate(.16 * t, .4, -.36).scale3d(.09))),
    gt()),
  at = hC.getContext("webgl2");
for (let t in at) at[t[0] + [...t].reduce((t, a, e) => (t * e + a.charCodeAt(0)) % 434, 0).toString(36)] = at[t];
setTimeout(() => {
  let t = 0,
    a = 6,
    e = () => {
      if (h4.innerHTML += ".", !--a) {
        let h = 0,
          f = 0,
          u = 1,
          m = 0,
          M = 0,
          p = 0,
          g = !1,
          v = { x: 0, y: 0, z: 0 },
          d = new Int32Array(256),
          e = () => {
            let { L: t, M: a } = _[rt], { x: e, y: l, z: r } = t.transformPoint({ x: 0, y: 8, z: -3 });
            Z.x = v.x = e,
              Z.y = v.y = F = l,
              Z.z = v.z = r,
              A =
                Y =
                S =
                j =
                P =
                  0,
              u = 1,
              h = f = a.u || 1;
          },
          l = t => {
            requestAnimationFrame(l);
            let a = (t - (Ht || t)) / 1e3;
            R = $ ? G[5] = 0 : .066 < a ? .066 : a,
              B += R,
              lt += a,
              Ht = t,
              0 < R && (at.b6o(36160, T),
                at.r9r(0, 0, 128, 128, 6408, 5121, b),
                at.iay(36160, [36064]),
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
                        j = V(j, o ? 6.5 : 8, 4),
                        v.y += a / 41 - (o ? 1 : j) * e / 41 * j * R;
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
                              && (n = w(n, w(e * r, e * b[a] / 127.5)), o = w(o, w(l * r, l * b[1 + t] / 255))),
                              (s < 54 || 74 < s) && .001 < (t = (1 - r) * (l < e ? e : l) / 3)
                              && (s < 64 && t > c ? c = t : 64 < s && t > i && (i = t));
                          }
                          c = i - c,
                            n = o - n,
                            (c < 0 ? -c : c) > (a < 0 ? -a : a) && (a = c),
                            (n < 0 ? -n : n) > (e < 0 ? -e : e) && (e = n);
                        }
                      })(),
                      (G[0] ? 1 : 0) + (G[2] ? -1 : 0) + D),
                    l = (G[1] ? 1 : 0) + (G[3] ? -1 : 0) + Q,
                    r = navigator.getGamepads()[0];
                  if (r) {
                    var s = t => a[t]?.pressed || 0 < a[t]?.value;
                    let a = r.buttons;
                    r = r.axes;
                    var n = s(1) || s(3) || s(2) || s(0);
                    n !== g && (g = n) && (G[5] = 1),
                      t += (.2 < it(-r[0]) ? -r[0] : 0) + (s(14) ? 1 : 0) + (s(15) ? -1 : 0),
                      l += (.2 < it(-r[1]) ? -r[1] : 0) + (s(12) ? 1 : 0) + (s(13) ? -1 : 0),
                      tt && (.3 < it(r[2]) && (J += 80 * r[2] * R), .3 < it(r[3]) && (U += 80 * r[3] * R));
                  }
                  (l < 0 ? -l : l) < .05 && (l = 0),
                    (t < 0 ? -t : t) < .05 && (t = 0),
                    s = Math.atan2(l, t),
                    r = q(Math.hypot(l, t)),
                    t = r * Math.cos(s),
                    l = r * Math.sin(s);
                  let o = q(1 - 5 * w(a < 0 ? -a : a, e < 0 ? -e : e)),
                    y =
                      (f || (a += S * o * R, e += Y * o * R),
                        S = V(S, 0, A ? 8 : 4),
                        Y = V(Y, 0, A ? 8 : 4),
                        P = V(P, A ? (t || l ? A ? 7 : 4 : 0) * o : 0, A ? .1 < o ? 10 : t || l ? 5 : 7 : 1),
                        o = Math.sin(n = tt ? J * z : Math.PI) * P * R,
                        Math.cos(n) * P * R);
                  if (
                    a -= t * y - l * o,
                      e -= t * o + l * y,
                      (o = (n = yt[f]?.s || X).inverse()).m41 = 0,
                      o.m42 = 0,
                      o.m43 = 0,
                      { x: a, z: e } = o.transformPoint({ x: a, z: e, w: 0 }),
                      v.x += a,
                      v.z += e,
                      f !== I
                  ) {
                    I = f;
                    let { x: t, y: a, z: e } = n.inverse().transformPoint(Z);
                    v.x = t, v.y = a, v.z = e;
                  }
                  o = Z.x, y = Z.z;
                  let { x: c, y: x, z: i } = n.transformPoint(v);
                  Z.x = c,
                    Z.y = x,
                    Z.z = i,
                    n = it(F - x),
                    F = V(F, x + .1, 50 * n + 5),
                    f && (S = (Z.x - o) / R, Y = (Z.z - y) / R),
                    (t || l) && (m = 90 - s / z),
                    M = ft(M, m, 8 * R),
                    p += (r - p) * q(10 * R);
                })(),
                vt(Lt)),
              0 < R && (r = ut(r, Z.x, .5, R),
                s = ut(s, Z.y, 2, R),
                n = ut(n, Z.z, .5, R),
                tt
                  ? (E.x = V(E.x, Z.x, 18 + (t = 200 * u)),
                    E.y = V(E.y, Z.y + 1.5, 15 + t),
                    E.z = V(E.z, Z.z, 18 + t),
                    U = w(U < 87 ? U : 87, -87))
                  : (E.x = ut(E.x, r, 1, 2 * R),
                    E.y = ut(E.y, s + 13 + 15 * u, 4, 2 * R),
                    E.z = ut(E.z, n + -18, 1, 2 * R),
                    1 < ((t = E.z - n) < 0 ? -t : t)
                    && (a = E.x - r,
                      J = 270 + Math.atan2(t, a) / z,
                      U = 90 - Math.atan2(Math.hypot(t, a), E.y - s) / z)),
                J = ht(J),
                0 < R
                && (t = N(_[12].g, _[13].g),
                  B > O && (h4.innerHTML = "", O = 0),
                  a = V(x, 0, 1),
                  x = a + (ht(x + 60 * R) - a) * q(_[5].g - _[6].i),
                  a = V(y, 0, 5),
                  y = a + (ht(y + 56 * R) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  a = V(st, 0, 4),
                  st = a + (ht(st + 48 * R) - a) * (t < 0 ? 0 : 1 < t ? 1 : t),
                  ct = V(ct, _[9].i, .2 + .3 * ((t = 2 * _[9].i - 1) < 0 ? -t : t)),
                  ot = V(ot, nt ? ot + (-9 - ot) * q(1.5 * R) : q(B / 3), 1),
                  1 === _[0].j && .8 < _[0].g && (L < 13
                    ? (_[0].j = 0, nt || (h4.innerHTML = "Not leaving now, there are souls to catch!", O = B + 3))
                    : nt
                      || (nt
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", O = B + 1 / 0),
                        nt = 1)),
                  G[5] = 0,
                  (Z.x < -25 || Z.z < 109 ? -25 : -9) > Z.y && e())),
              t = $
                ? X.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + q(hC.clientWidth / 1e3))
                : X.rotate(-U, -J, -0).invertSelf().translateSelf(-E.x, -E.y, -E.z),
              0 < R
              && (i(),
                at.b6o(36160, T),
                at.v5y(0, 0, 128, 128),
                at.cbf(!0, !1, !0, !1),
                at.c4s(16640),
                at.uae(i("b"), !1, X.rotate(0, 180).invertSelf().translateSelf(-Z.x, -Z.y, .3 - Z.z).toFloat32Array()),
                kt(i("c"), 0, 1, i("j")),
                at.cbf(!1, !0, !1, !1),
                at.c4s(16640),
                at.cbf(!1, !0, !0, !1),
                at.uae(i("b"), !1, X.translate(-Z.x, -Z.y, -Z.z - .3).toFloat32Array()),
                kt(i("c"), 0, 1, i("j")),
                at.cbf(!0, !0, !0, !0),
                1 === f && (_[9].j = Z.x < -15 && Z.z < 0 ? 1 : 0)),
              o(),
              at.v5y(0, 0, 2048, 2048),
              C[0](St(t, .3, 55, 10)),
              C[1](St(t, 55, 177, 11)),
              at.b6o(36160, null),
              k(),
              at.v5y(0, 0, at.drawingBufferWidth, at.drawingBufferHeight),
              at.c4s(16640),
              at.uae(k("a"), !1, mt(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177)),
              at.uae(k("b"), !1, t.toFloat32Array()),
              at.ubu(k("k"), E.x, E.y, E.z),
              C[0](),
              C[1](),
              kt(k("c"), !tt),
              c(),
              at.ubu(c("j"), at.drawingBufferWidth, at.drawingBufferHeight, lt),
              $ ? at.ubu(c("k"), 0, 0, 0) : at.ubu(c("k"), E.x, E.y, E.z),
              at.uae(c("b"), !1, t.inverse().toFloat32Array()),
              at.d97(4, 3, 5123, 0);
          },
          b = new Uint8Array(65536),
          I,
          A,
          j,
          P,
          S,
          Y,
          F,
          r,
          s,
          n,
          t = Yt(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",
          ),
          o = Ft(
            Yt("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"),
            "#version 300 es\nvoid main(){}",
          ),
          c = Ft(
            Yt("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          i = Ft(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",
          ),
          k = Ft(
            t,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          T =
            (c(), at.ubh(c("q"), 3), i(), at.uae(i("a"), !1, mt(1.4, .59, 1e-4, 1)), k(), at.ubh(k("q"), 3), at.c5w()),
          a = (t = at.c3z(), at.c25()),
          C = W(2, t => {
            let a, e = at.c25(), l = at.c5w(), r = k(t ? "j" : "i");
            return k(),
              at.ubh(k(t ? "h" : "g"), t),
              at.b6o(36160, l),
              at.d45([0]),
              at.r9l(0),
              at.a4v(33984 + t),
              at.b9j(3553, e),
              at.fas(36160, 36096, 3553, e, 0),
              at.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              at.t2z(3553, 10241, 9729),
              at.t2z(3553, 10240, 9729),
              at.t2z(3553, 34893, 515),
              at.t2z(3553, 34892, 34894),
              at.t2z(3553, 10243, 33071),
              at.t2z(3553, 10242, 33071),
              t => {
                t
                  ? (a = t,
                    at.b6o(36160, l),
                    at.iay(36160, [36096]),
                    at.c4s(256),
                    at.uae(o("b"), !1, a),
                    kt(o("c"), !tt, 1))
                  : at.uae(r, !1, a);
              };
          });
        at.b11(34963, at.c1b()),
          at.b2v(34963, new Uint16Array(xt), 35044),
          at.b11(34962, at.c1b()),
          at.b2v(34962, new Float32Array(Mt), 35044),
          at.v7s(0, 3, 5126, !1, 0, 0),
          at.b11(34962, at.c1b()),
          at.b2v(34962, new Int16Array(K), 35044),
          at.v7s(1, 3, 5122, !0, 0, 0),
          at.b11(34962, at.c1b()),
          at.b2v(34962, new Uint32Array(pt), 35044),
          at.v7s(2, 4, 5121, !0, 0, 0),
          at.e3x(0),
          at.e3x(1),
          at.e3x(2),
          at.e8z(2929),
          at.e8z(2884),
          at.c70(1),
          at.c7a(1029),
          at.d4n(515),
          at.c5t(0, 0, 0, 1),
          at.b6o(36160, T),
          at.bb1(36161, t),
          at.r4v(36161, 33189, 128, 128),
          at.f8w(36160, 36096, 36161, t),
          at.a4v(33987),
          at.b9j(3553, a),
          at.fas(36160, 36064, 3553, a, 0),
          at.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null),
          at.b9j(3553, at.c25()),
          at.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, H),
          at.gbn(3553),
          at.t2z(3553, 10241, 9987),
          at.t2z(3553, 10240, 9729),
          Et.h = () => X.translate(Z.x, F, Z.z).rotateSelf(0, M),
          Dt.map((t, a) => {
            t.h = () =>
              X.translate(0, p * q(.45 * Math.sin(9.1 * B + Math.PI * a - Math.PI / 2))).rotateSelf(
                p * Math.sin(9.1 * B + Math.PI * a) * .25 / z,
                0,
              );
          });
        try {
          let [e, l, t, a, r] = JSON.parse(localStorage.DanteSP22);
          _.map((t, a) => t.g = t.i = t.j = a ? 0 | e[a] : 0), It.map((t, a) => t.j = 0 | l[a]), rt = t, B = a, ct = r;
        } catch (t) {}
        ot = rt < 0 ? 0 : 1 < rt ? 1 : rt,
          h4.innerHTML = "",
          O = 0,
          At(),
          vt(Lt),
          (() => {
            let r = 0,
              s = 0,
              t = 0,
              a = () => {
                hC.width = innerWidth,
                  hC.height = innerHeight,
                  G.length = D = Q = 0,
                  n = o = void 0,
                  document.hidden && wt(!0);
              },
              n,
              o,
              c;
            b1.onclick = () => wt(),
              b2.onclick = () => {
                wt(), tt = 1;
              },
              b3.onclick = () => {
                confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
              },
              b4.onclick = () => {
                et = !et, bt();
              },
              b5.onclick = () => wt(!0),
              onclick = () => {
                c = 1, $ || (G[5] = !0, tt && hC.requestPointerLock());
              },
              document.onvisibilitychange = onresize = onblur = a,
              onkeydown = onkeyup = ({ code: t, target: a, type: e, repeat: l }) => {
                l || ((a = !!e[5] && a === document.body) && ("Escape" === t || "Enter" === t && $)
                  ? $ && !c || wt(!$)
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
                  ? a && (G[t] = 1)
                  : G[t] = a);
              },
              onmousemove = ({ movementX: t, movementY: a }) => {
                tt && (t || a) && (J += .1 * t, U += .1 * a);
              },
              hC.ontouchstart = a => {
                if (!$) {
                  for (let t of a.changedTouches) {
                    tt && t.pageX > hC.clientWidth / 2
                      ? n || (n = t, r = J, s = U)
                      : o = o || t;
                  }
                  t = lt;
                }
              },
              hC.ontouchmove = ({ changedTouches: l }) => {
                if (!$) {
                  for (
                    let { pageX: t, pageY: a, identifier: e } of l
                  ) {
                    n?.identifier === e && (J = r + (t - n.pageX) / 3, U = s + (a - n.pageY) / 3),
                      o?.identifier === e
                      && (D = -(t - o.pageX) / 18,
                        Q = -(a - o.pageY) / 18,
                        D = (D < 0 ? -D : D) < .35 ? 0 : .8 * D,
                        Q = (Q < 0 ? -Q : Q) < .35 ? 0 : .8 * Q);
                  }
                }
              },
              hC.ontouchend = a => {
                for (let t of a.changedTouches) {
                  t.identifier === n?.identifier && (n = void 0),
                    t.identifier === o?.identifier && (o = void 0, Q = D = 0);
                }
                a.preventDefault(), a = lt - t, (!t || .02 < a && a < .4) && (G[5] = !0);
              },
              oncontextmenu = () => !1,
              a(),
              wt(!0);
          })(),
          e(),
          E.x = r = Z.x,
          E.y = (s = Z.y) + 13,
          E.z = (n = Z.z) + -18,
          requestAnimationFrame(l);
      }
    },
    l = () => {
      if (t < 5) {
        var L = 0, O = t++;
        let [v, d, b, I, A, j, P, S, Y, y, F, x, k, T, C, H, z, D, w, Q, B] =
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
          ]]][O];
        y = y * y * 4;
        for (let g of [5513, 4562, 3891]) {
          let r = 0,
            s = 0,
            f = [],
            u,
            n,
            o,
            c,
            i,
            h = new Int32Array(768 * g),
            m = 2 ** (x - 9) / g,
            M = Math.PI * 2 ** (z - 8) / g,
            p = w * g & -2;
          for (let l = 0; l <= 11; ++l) {
            for (
              let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * O + l];
              t < 32;
              ++t
            ) {
              let e = (32 * l + t) * g;
              for (var R, X = 0; X < 4; ++X) {
                if (u = 0, a && (u = B[a - 1].charCodeAt(t + 32 * X) - 40, u += 0 < u ? 106 : 0), u) {
                  if (!(R = f[u])) {
                    let l = 0,
                      r = 0,
                      s,
                      n,
                      o = R = u,
                      c = O < 2
                        ? t => t % 1 * 2 - 1
                        : dt,
                      i = O < 2
                        ? O < 1
                          ? t => t % 1 < .5 ? 1 : -1
                          : t => (t = t % 1 * 4) < 2 ? t - 1 : 3 - t
                        : dt,
                      h = new Int32Array(S + Y + y);
                    for (let a = 0, e = 0; S + Y + y > a; ++a, ++e) {
                      let t = 1;
                      S > a ? t = a / S : S + Y > a || (t = (1 - (t = (a - S - Y) / y)) * 3 ** (-F / 16 * t)),
                        e < 0
                        || (e -= 4 * g,
                          n = .00396 * 2 ** ((o + d - 256) / 12),
                          s = .00396 * 2 ** ((o + A - 256) / 12) * (1 + (O ? 0 : 8e-4 * 9))),
                        h[a] = 80
                            * (c(l += n * t ** (b / 32)) * v + i(r += s * t ** (j / 32)) * I
                              + (P ? (2 * Math.random() - 1) * P : 0))
                            * t | 0;
                    }
                    R = f[R] = h;
                  }
                  for (let t = 0, a = 2 * e; R.length > t; ++t, a += 2) h[a] += R[t];
                }
              }
              for (let t, a = 0; g > a; ++a) {
                X = 0,
                  ((t = h[R = 2 * (e + a)]) || i)
                  && (o = .00308 * k,
                    1 != O && 4 != O || (o *= Math.sin(m * R * Math.PI * 2) * Q / 512 + .5),
                    o = 1.5 * Math.sin(o),
                    r += o * s,
                    c = (1 - T / 255) * (t - s) - r,
                    s += o * c,
                    t = 4 == O ? s : 3 == O ? c : r,
                    O || (t = (t *= 22e-5) < 1 ? -1 < t ? Math.sin(t / 4 * Math.PI * 2) : -1 : 1, t /= 22e-5),
                    t *= C / 32,
                    i = 1e-5 < t * t,
                    n = Math.sin(M * R) * H / 512 + .5,
                    X = t * (1 - n),
                    t *= n),
                  R < p || (X += h[R - p + 1] * D / 255, t += h[R - p] * D / 255),
                  Tt[L + R] += h[R] = X,
                  ++R,
                  Tt[L + R] += h[R] = t;
              }
            }
          }
          L += h.length;
        }
        setTimeout(l);
      } else {
        for (L = Nt.createBuffer(2, 5362944, 44100), O = 0; O < 2; O++) {
          for (let t = O, a = L.getChannelData(O); t < 10725888; t += 2) {
            a[t >> 1] = Tt[t] / 65536;
          }
        }
        Wt.buffer = L, Wt.loop = !0;
      }
      e();
    },
    H = new Image();
  H.onload = H.onerror = () => {
    e();
  },
    H.src = Qt,
    setTimeout(l, 50),
    A(Pt);
});
