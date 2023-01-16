let y,
  S,
  k,
  A,
  D,
  Y,
  Z,
  $,
  b,
  e1,
  w,
  t1,
  l,
  g,
  a1,
  l1,
  { PI: E, atan2: r1, sin: L, cos: j, exp: t, random: s1 } = Math,
  T = 0,
  F = 0,
  c1 = 0,
  o1 = 0,
  i1 = 0,
  n1 = 0,
  m1 = 0,
  f1 = 0,
  h1 = 14,
  z = .1,
  u1 = E / 180,
  a = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  p1 = 0,
  C = 180,
  O = 0,
  Q = 0,
  R = 0,
  q = [],
  B = [],
  d1 = [],
  g1 = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  M = (
    e,
    t = r,
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
  X = (
    e = v,
    t = I,
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
  H = (e = 0, t = 0, a = 0, l = 1) => {
    N = I.m11 * e + I.m21 * t + I.m31 * a + I.m41 * l,
      P = I.m12 * e + I.m22 * t + I.m32 * a + I.m42 * l,
      W = I.m13 * e + I.m23 * t + I.m33 * a + I.m43 * l,
      v1 = I.m14 * e + I.m24 * t + I.m34 * a + I.m44 * l;
  };
var N, P, W, v1;
let o = (e, t, a) => v.translate(e, t, a),
  m = (e, a) => Array.from(Array(e), (e, t) => a(t)),
  x1 = (e, t, a) => (e.m = a, e.o = t, e),
  y1 = (e, t, a = e.o) => (X(t), x1(e.map(({ x: e, y: t, z: a }) => (H(e, t, a), { x: N, y: P, z: W })), a, e.m)),
  i = (e, t, a) => e.map(e => y1(e, t, a)),
  U = e => 0 > e ? -e : e,
  w1 = (e, t) => t > e ? e : t,
  z1 = (e, t) => e > t ? e : t,
  S1 = (e, t) => U(e) > t ? e : 0,
  K = (e, t = 0, a = 1) => t > e ? t : e > a ? a : e,
  k1 = e => r1(L(e * u1), j(e * u1)) / u1,
  A1 = (e, t, a) => e + (2 * (t = (t - e) % 360) % 360 - t) * K(a) || 0,
  V = (e, t, a) => (a > 0 ? 1 > a ? e + (t - e) * a : t : e) || 0,
  M1 = (e, t, a = 0) => (e * e + t * t + a * a) ** .5,
  I1 = (a, l = 0) =>
    m(a, e => {
      let t = j(2 * E * e / a);
      return { x: L(2 * E * e / a), y: 0, z: .01 > U(t) ? t : 0 > t ? t - l : t + l };
    }),
  Y1 = (l, r, s) =>
    l.map((e, t, { length: a }) => x1([e, r[a - t - 1], r[a - (t + 1) % a - 1], l[(t + 1) % a]], l.o, s)),
  n = (
    e,
    t,
    a = 0,
    l,
  ) => (e = e ? I1(e, l) : g1,
    l = y1(e, o(0, 1).scale3d(a > 0 ? a : 1)),
    e = y1(e, o(0, -1).scale3d(0 > a ? -a : 1)).reverse(),
    [...Y1(e, l, t), l, e]),
  D1 = (l, r = l, s = ((e, t) => (t *= E / r, { x: j(e *= 2 * E / l) * L(t), y: j(t), z: L(e) * L(t) }))) => {
    let c = [];
    for (let t = 0; l > t; t++) {
      for (let e = 0; r > e; e++) {
        var o = (e, t) => a.push(s(e, t, a));
        let a = x1([], 0, 1);
        c.push(a), o(t, e), e && o((t + 1) % l, e), r - 1 > e && o((t + 1) % l, e + 1 % r), o(t, e + 1 % r);
      }
    }
    return c;
  },
  f = (e, t, a, l = 0) => 255 * l << 24 | 255 * a << 16 | 255 * t << 8 | 255 * e,
  j1 = e => {
    let t, a = 0, l = 0, r = 0, s = e.at(-1);
    for (t of e) a += (s.y - t.y) * (s.z + t.z), l += (s.z - t.z) * (s.x + t.x), r += (s.x - t.x) * (s.y + t.y), s = t;
    return t = M1(a, l, r), a /= t, l /= t, r /= t, { x: a, y: l, z: r, w: a * s.x + l * s.y + r * s.z };
  },
  T1 = ({ x: e, y: t, z: a }, l) => e * l.x + t * l.y + a * l.z,
  F1 = (l, e) => {
    let r, s, c, o = e.h, i = e.s;
    for (let a = 0; o.length > a; ++a) {
      if (-8e-5 > (r = T1(l, o[a]) - l.w) ? c = e : r > 8e-5 && (s = e), c && s) {
        s = [], c = [], a = o.at(-1);
        let t = T1(a, l) - l.w;
        for (let e of o) {
          r = T1(e, l) - l.w,
            8e-5 > t && c.push(a),
            t > -8e-5 && s.push(a),
            (t > 8e-5 && -8e-5 > r || -8e-5 > t && r > 8e-5)
            && (t /= r - t,
              a = { x: a.x + (a.x - e.x) * t, y: a.y + (a.y - e.y) * t, z: a.z + (a.z - e.z) * t },
              s.push(a),
              c.push(a)),
            a = e,
            t = r;
        }
        s = s.length > 2 && { h: x1(s, o.o, o.m), s: i, k: e }, c = c.length > 2 && { h: x1(c, o.o, o.m), s: i, k: e };
        break;
      }
    }
    return { x: s, y: c };
  },
  c = (e, t, a = j1(t.h)) => {
    let l, r;
    return e
      ? (({ x: l, y: r } = F1(e, t)), l || r || e.h.push(t), l && (e.j = c(e.j, l, a)), r && (e.l = c(e.l, r, a)))
      : e = { x: a.x, y: a.y, z: a.z, w: a.w, h: [t], j: 0, l: 0 },
      e;
  },
  C1 = (t, r, s) => {
    let c = [],
      o = (e, t) => {
        let { x: a, y: l } = F1(e, t);
        a || l || (s * T1(e, r) > 0 ? a = t : l = t), a && (e.j ? o(e.j, a) : c.push(a)), l && e.l && o(e.l, l);
      };
    for (let e of r.h) o(t, e);
    return c;
  },
  O1 = (e, t) => e && (t(e), O1(e.j, t), O1(e.l, t)),
  s = e => (O1(e, t => {
    let e = t.l;
    t.l = t.j, t.j = e, t.x *= -1, t.y *= -1, t.z *= -1, t.w *= -1;
    for (let e of t.h) e.s = !e.s;
  }),
    e),
  Q1 = e => e.length ? e.reduce((e, t) => c(e, { h: t, s: 0, k: 0 }), 0) : e,
  R1 = (...e) =>
    e.reduce((l, r) => {
      let s = [];
      if (l = Q1(l), r) {
        let t, a;
        for ([t, a] of (r = Q1(r), O1(l, e => e.h = C1(r, e, 1)), O1(r, e => s.push([e, C1(l, e, -1)])), s)) {
          for (let e of a) {
            c(l, e, t);
          }
        }
      }
      return l;
    }),
  h = (e, ...t) => {
    let a = e => {
        let t;
        return e.k && ((t = r.get(e.k)) ? (l.delete(t), e = a(e.k)) : r.set(e.k, e)), e;
      },
      l = new Map(),
      r = new Map();
    return e = s(R1(s(Q1(e)), ...t)),
      O1(e, t => {
        for (let e of t.h) l.set(a(e), e.s);
      }),
      Array.from(l, ([{ h: e }, t]) => {
        let a = e.map(({ x: e, y: t, z: a }) => ({ x: e, y: t, z: a }));
        return x1(t ? a.reverse() : a, e.o, e.m);
      });
  },
  q1 = e => 1 - t(-T * e),
  _ = (e, t, a) => V(e, t, q1(a)),
  B1 = e =>
    setTimeout(() => {
      h4.innerHTML += ".", e();
    }, 5),
  X1 = (e, t, a, l) =>
    new DOMMatrix([a, 0, 0, 0, 0, l, 0, 0, 0, 0, (t + e) / (e - t), -1, 0, 0, 2 * t * e / (e - t), 0]),
  H1 = () => {
    let r,
      i,
      n,
      m,
      f,
      h,
      u,
      p,
      d,
      g,
      v,
      x,
      y,
      t,
      a,
      l,
      e = !0,
      s = [],
      c = () => {
        b4.innerHTML = "Music: " + e, l && (S || !e ? l.disconnect() : l.connect(a.destination));
      },
      o = () => {
        let e = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        Z = X1(.3, 181, e, 1.732051),
          Y = [X1(.3, 55, e, 1.732051), X1(55, 181, e, 1.732051)],
          m = p = void 0,
          s.length =
            A =
            t =
            x =
            y =
            o1 =
            i1 =
              0,
          document.hidden && b(!0);
      },
      b = e => {
        if (S !== e && (S = e, o(), hB.className = e ? "l m" : "l", c(), e)) {
          try {
            document.exitFullscreen().catch(() => !1), document.exitPointerLock();
          } catch {}
        }
      },
      w = e => {
        try {
          a || ((l = (a = new AudioContext()).createBufferSource()).buffer = k, l.loop = !0, l.start()),
            hB.requestFullscreen().catch(() => !1);
        } catch {}
        b(!1), D = e;
      },
      z = (e, t) => e.buttons[t]?.pressed || e.buttons[t]?.value > 0 ? 1 : 0;
    oncontextmenu = () => !1,
      onclick = e => {
        if (!S && (e.target === hC && (A = 1), D)) {
          try {
            hC.requestPointerLock();
          } catch {}
        }
      },
      b5.onclick = () => b(!0),
      b2.onclick = () => w(1),
      b1.onclick = () => w(),
      b4.onclick = () => {
        e = !e, c();
      },
      b3.onclick = () => {
        confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
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
            (s[t] = !!e.type[5]) && (0 === t && (A = 1), 1 === t) && b(!0));
      },
      onmousemove = e => {
        D && (C += .1 * e.movementX || 0, p1 += .1 * e.movementY || 0);
      },
      hC.ontouchstart = l => {
        if (!S) {
          let e, t, a;
          for ({ identifier: e, pageX: t, pageY: a } of l.changedTouches) {D && t > hC.clientWidth / 2
              ? void 0 === p && (d = 0, h = t, u = a, p = e, v = p1, g = C)
              : void 0 === m && (f = 0, i = t, n = a, m = e);}
          r = c1;
        }
      },
      hC.ontouchmove = l => {
        let r, s, c, o;
        if (!S) {
          let e, t, a;
          for (
            { identifier: e, pageX: t, pageY: a } of l.changedTouches
          ) {
            p === e && (d = 1, p1 = v + (a - u) / 2, C = g + (t - h) / 2),
              m === e
              && (r = U(e = (i - t) / 19),
                c = U(s = (n - a) / 19),
                (o = z1(r, c) > .3) && (f = 1),
                x = K(e, -1) * (o && r > .2),
                y = K(s, -1) * (o && c > .2),
                r > 2 && (i = 19 * (0 > e ? -1 : 1) + t),
                c > 2)
              && (n = 19 * (0 > s ? -1 : 1) + a);
          }
        }
      },
      hC.ontouchend = t => {
        let a;
        document.activeElement === hB && t.preventDefault();
        for (let e of t.changedTouches) {e.identifier === p
            ? (p = void 0, d || (a = 1), d = 0)
            : e.identifier === m
            ? (m = void 0, y = x = 0, f || (a = 1), f = 0)
            : a = 1;}
        t.target === hC && a && r && (t = c1 - r) > .02 && .7 > t && (A = 1);
      },
      H1 = () => {
        o1 = y + (s[4] ? 1 : 0) - (s[5] ? 1 : 0), i1 = x + (s[2] ? 1 : 0) - (s[3] ? 1 : 0);
        let e = navigator.getGamepads()[0];
        e
          && (D && (p1 += 80 * T * S1(e.axes[3], .3), C += 80 * T * S1(e.axes[2], .3)),
            o1 += z(e, 12) - z(e, 13) - S1(e.axes[1], .2),
            i1 += z(e, 14) - z(e, 15) - S1(e.axes[0], .2),
            z(e, 9) && b(!0),
            (e = z(e, 3) || z(e, 2) || z(e, 1) || z(e, 0)) && !t && (A = 1),
            t = e);
      },
      document.onpointerlockchange = () => {
        D = !!document.pointerLockElement;
      },
      document.onvisibilitychange = onblur = onresize = o,
      b(!0);
  },
  E1 = (e, t) => {
    1 / 0 > z && (z = F + t, h4.innerHTML = e);
  },
  L1 = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        $ = d1.reduce((e, t) => t.i + e, 0)
      ] + " / XIII";
  },
  N1 = () => {
    localStorage["Dante-22"] = JSON.stringify([B.map(e => e.i), d1.map(e => e.i), h1, w, F]);
  },
  u = () => {
    q.push({ p: t1 = new DOMMatrix(), h: l = [] });
  },
  p = (e, t = v, a) => l.push(i(e, t, a)),
  d = (n, ...m) => {
    let f,
      h,
      u,
      p,
      d = 0,
      g = 0,
      v = 1,
      x = -1,
      y = () => {
        if (y.i) {
          X(q[35].p).translateSelf(
            e % 4 * 1.2 - 1.7 + L(F + e) / 7,
            -2,
            1.7 * (e >> 2) - 5.5 + U(e % 4 - 2) + j(F / 1.5 + e) / 6,
          );
        } else {
          let t, e, a, l, r, s = 1, c = 1 / 0;
          for (let e = 0; m.length > e; e++) {
            var o = m[e], i = M1(w - o[0], z - o[1]);
            s = w1(s, i / o[2]), 0 > (i -= o[2]) ? t = 1 : c > i && (c = i, b = o);
          }
          t
          || (e = w - b[0],
            a = z - b[1],
            l = M1(e, a),
            r = r1(-a, e),
            v && (p = K(p / (1 + s1())), g = (s1() - .5) * E / 2),
            r += g,
            x = -j(r),
            d = L(r),
            l > .1 && (l = w1(l, b[2]) / l, w = e * l + b[0], z = a * l + b[1])),
            v = t,
            p = _(p, 3 + 6 * (1 - s), 3 + s),
            S = _(S, w = _(w, w + x, p), p),
            k = _(k, z = _(z, z + d, p), p),
            f = A1(f, r1(S - h, k - u) / u1 - 180, q1(3)),
            X(A).multiplySelf(n).translateSelf(h = S, 0, u = k).rotateSelf(0, f, 7 * L(1.7 * F)),
            H(),
            1.6 > M1(O - N, Q - P, R - W)
            && (y.i = 1,
              E1(
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
                ][$] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                6,
              ),
              L1(),
              N1());
        }
        M(I, U1, 28 + e);
      },
      b = m[0],
      [w, z] = b,
      [S, k] = b,
      A = t1,
      e = d1.length;
    d1.push(y);
  },
  J = (e, t = 0, a = 0) => {
    let l = X(v, q[++g].p);
    return l.m41 = e, l.m42 = t, l.m43 = a, l;
  },
  P1 = () => {
    let l, r, s, c = (e, t) => (e = K(e), V(e, 1 - e, t));
    (P1 = () => {
      let e = (e, t, a) => J(e + L(F + 2) / 5, t + L(.8 * F) / 5, a).rotateSelf(2 * L(F), L(.7 * F), L(.9 * F)),
        t =
          (g = 1,
            s = V(_(s, 0, 1), k1(s + 60 * T), B[2].t - B[3].g),
            l1 = c(B[13].t, B[8].t),
            l = V(_(l, 0, 5), k1(l + 56 * T), l1),
            r = V(_(r, 0, 4), k1(r + 48 * T), l1),
            J(0, 270 * (B[1].t - 1) + (2 + 5 * j(1.5 * F)) * (1 - B[10].t)),
            w1(1 - B[11].g, B[10].g)),
        a =
          (J(t * L(.6 * F + 1.2) * 12, 0, 35),
            J(t * L(.6 * F - 1.2) * 8.2, 0, 55),
            J(t * L(.6 * F) * 12, 0, 45),
            J(9.8 * (1 - t)),
            t = K(1 - 5 * t) * c(B[11].t, B[2].t),
            J(0, t * L(1.35 * F) * 4),
            J(0, 0, t * L(.9 * F) * 8),
            J(0, -6.5 * B[11].g),
            t = c(B[4].g, B[3].g),
            J(0, t * L(F) * 5 + 3.5 * (1 - z1(B[3].t, B[4].t))),
            J(0, t * L(F + 3) * 6, t * L(.6 * F + 1) * 6),
            J(0, -7.3 * B[4].g),
            t = c(B[6].t, B[7].t),
            J(0, -2, 10 - 8.5 * t * U(L(1.1 * F))),
            J(0, -2, 10 - 8.5 * t * U(L(2.1 * F))),
            J(0, -2, 10 - 8.5 * z1(t * U(L(1.5 * F)), (1 - B[6].t) * (1 - t))),
            c(B[5].g, B[13].g));
      for (t = 0; 4 > t; t++) {
        J(
          (t > 2 ? 2 * (1 - a) + a : 0) - 100,
          a * L(1.3 * F + 1.7 * t) * (3 + t / 3) + .7,
          115 - 7 * (1 - B[5].g) * (1 - B[13].g) * (1 & t ? -1 : 1)
            + z1(.05, a) * j(1.3 * F + 7 * t) * (4 - 2 * (1 - t / 3)),
        );
      }
      t = c(B[8].g, B[9].g);
      for (let e = 0; 3 > e; ++e) J(0, t * L(1.5 * F + 1.5 * e) * 4 + (e ? 0 : 3 * (1 - B[8].g) * (1 - B[9].g)));
      for (
        t = c(c((B[9].t + B[9].g) / 2, B[8].g), (B[12].t + B[12].g) / 2),
          J(0, 16 * t, 95 + 8.5 * K(2 * t - 1)),
          J(0, -4.7 * B[0].t, -15),
          J(0, -4.7 * B[10].t, 15),
          J(-99.7, -1.9 - 5.5 * B[3].t, 63.5),
          J(-100, .6 - 5.8 * B[13].t, 96.5),
          J(-75, 3 * (1 - B[2].g) * (1 - B[3].t), 55).rotateSelf(180 * (1 - B[2].g) + s, 0),
          J(2.5 * (1 - a) - 139.7, -3 * (1 - B[5].t) - a * L(.8 * F) - 1.8, 93.5).rotateSelf(
            j(1.3 * F) * (3 + 3 * a),
            0,
          ),
          J(-2 * L(F)).rotateSelf(25 * L(F)),
          J(-81, .6, 106).rotateSelf(0, 40 + l),
          J(-65.8, .8, 106).rotateSelf(0, r),
          J(-50.7, .8, 106).rotateSelf(0, 180 - r),
          J(-50.7, .8, 91).rotateSelf(0, 270 + r),
          e(-12, 4.2, 40 * e1 - 66),
          e(-123, 1.4, 55 - 65 * w),
          t = 0;
        16 > t;
        ++t
      ) {
        e = B[t],
          a = e.t = _(e.t, e.i, 4),
          e.g = _(e.g, e.i, 1),
          X(X(e.p).multiplySelf(e.q), J(0)).rotateSelf(50 * a - 25, 0).translateSelf(0, 1).m44 = a,
          A && (H(), 3 > M1(O - N, Q - P, R - W)) && (e.i
            ? a > .7 && (e.i = 0, h1 = t, E1("* click *", 1), N1())
            : .3 > a && (e.i = 1, h1 = t, E1("* click *", 1), N1())),
          14 === t && e.i && a > .8 && (e.i = 0,
            13 > $
              ? E1("Not leaving now, there are souls to catch!", 3)
              : b || (b = 1, E1("Well done. They will be punished.<br>Thanks for playing", 1 / 0))),
          13 > t && d1[t]();
      }
      for (a1(), e = 0; 28 > e; ++e) M(q[28 + e].p, U1, e);
      for (let e, t = 0, a = 656; 26 > t; ++t, ++a) e = q[2 + t].p, U1[a++] = e.m41, U1[a++] = e.m42, U1[a++] = e.m43;
    })();
  },
  v = new DOMMatrix(),
  I = new DOMMatrix(),
  r = new Float32Array(16),
  W1 = new Uint8Array(65536),
  U1 =
    (document.body.innerHTML +=
      "<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle.\"</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}",
      new Float32Array(760)),
  x = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  G = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (let t in G) {
  [x, G].map(e => e[t[0] + [...t].reduce((e, t, a) => (e * a + t.charCodeAt(0)) % 434, 0).toString(36)] = e[t]);
}
B1(() => {
  let e = 0,
    g = () => {
      if (2 == ++e) {
        let h = [],
          l = (e, t, a) => {
            S
              ? hC.width > 1100 && e.d97(4, q[55].v - q[53].u, 5123, 2 * q[53].u)
              : (e.das(4, q[t].v - q[t].u, 5123, 2 * q[t].u, d1.length), e.d97(4, q[a ? 53 : 56].u - 3, 5123, 6));
          },
          e = (
            a,
            e,
            t =
              "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
          ) => {
            let l = {}, r = (e, t) => (t = a.c6x(t), a.s3c(t, e), a.c6a(t), t), s = a.c1h();
            return a.abz(s, r(t, 35633)),
              a.abz(s, r(e, 35632)),
              a.l8l(s),
              e => e ? l[e] || (l[e] = a.gan(s, e)) : a.u7y(s);
          },
          r = e => {
            let t = (e - (y || e)) / 1e3,
              a = (c1 += t,
                F += T = S ? 0 : w1(.055, t),
                y = e,
                requestAnimationFrame(r),
                T > 0
                && (H1(),
                  w = _(w, B[15].g, .2 + .3 * U(2 * B[15].g - 1)),
                  e1 = b ? (D = 0, _(e1, -9, .015)) : _(e1, K(F / 3), 1),
                  z && F > z && (z = 0, h4.innerHTML = ""),
                  P1(),
                  G.u3a(c("j"), U1),
                  G.cbf(!0, !0, !0, !0),
                  G.c4s(16640),
                  G.cbf(!0, !1, !0, !1),
                  G.uae(c("b"), !1, M(X().rotateSelf(0, 180).invertSelf().translateSelf(-O, -Q, .3 - R))),
                  l(G, 56, 1),
                  G.c4s(256),
                  G.cbf(!1, !0, !1, !0),
                  G.uae(c("b"), !1, M(X().translateSelf(-O, -Q, -R - .3))),
                  l(G, 56, 1),
                  G.f1s(),
                  A = 0),
                g(),
                x.u3a(g("j"), U1),
                x.b6o(36160, s),
                x.v5y(0, 0, 2048, 2048),
                x.ubh(g("g"), 4),
                x.ubh(g("h"), 4),
                x.uae(g("a"), !1, M(v)),
                e = n1,
                t = m1,
                f1);
            S
              ? (X().rotateSelf(0, 40 * L(c1) - 80, -8),
                M(I, U1, 25),
                M(I, U1, 26),
                M(I, U1, 27),
                X(Z).invertSelf(),
                H(3.6, 3.5),
                e = N,
                t = P,
                a = 5,
                X(v, p).rotateSelf(20, 0).translateSelf(-e, -t, -a).rotateSelf(0, 99))
              : X(v, p).rotateSelf(-p1, -C).invertSelf().translateSelf(-e, -t, -a),
              i(54.7),
              l(x, 57, D),
              n(126),
              l(x, 57, D),
              x.b6o(36160, null),
              x.v5y(0, 0, x.drawingBufferWidth, x.drawingBufferHeight),
              x.c4s(16640),
              x.ubh(g("g"), 0),
              x.ubh(g("h"), 1),
              x.ubu(g("k"), e, t, a),
              x.uae(g("a"), !1, M(Z)),
              x.uae(g("b"), !1, M(p)),
              x.uae(g("i"), !1, d),
              l(x, 57, D),
              o(),
              x.uae(o("b"), !1, M(p.invertSelf())),
              x.ubu(o("j"), x.drawingBufferWidth, x.drawingBufferHeight, c1),
              x.d97(4, 3, 5123, 0);
          },
          u = new DOMMatrix(),
          p = new DOMMatrix(),
          d = new Float32Array(32),
          s = x.c5w(),
          g = e(
            x,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          c = e(
            G,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          o = e(
            x,
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
          ),
          [i, n] = m(2, e => {
            let t = x.c25();
            return x.a4v(33984 + e),
              x.b9j(3553, t),
              x.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              x.t2z(3553, 10241, 9729),
              x.t2z(3553, 10240, 9729),
              x.t2z(3553, 34893, 515),
              x.t2z(3553, 34892, 34894),
              x.t2z(3553, 10243, 33071),
              x.t2z(3553, 10242, 33071),
              a => {
                let l = 0, r = 0, s = 0, c = 1 / 0, o = 1 / 0, i = 1 / 0, n = -1 / 0, m = -1 / 0, f = -1 / 0;
                x.fas(36160, 36096, 3553, t, 0),
                  x.c4s(256),
                  X().scale3dSelf(a *= 1.1).multiplySelf(X(Y[e], u).multiplySelf(p).invertSelf());
                for (let e = 0, t = 0; 8 > e; ++e) {
                  H(4 & e ? 1 : -1, 2 & e ? 1 : -1, 1 & e ? 1 : -1),
                    l -= h[t++] = (0 | N) / a / v1,
                    r -= h[t++] = (0 | P) / a / v1,
                    s -= h[t++] = (0 | W) / a / v1;
                }
                X().rotateSelf(298, 139).translateSelf(l / 8, r / 8, s / 8);
                for (let e = 0, t = 0; 8 > e; ++e) {
                  H(h[t++], h[t++], h[t++]),
                    n = z1(n, N),
                    m = z1(m, P),
                    f = z1(f, W),
                    c = w1(c, N),
                    o = w1(o, P),
                    i = w1(i, W);
                }
                s = 10 + e,
                  i *= 0 > i ? s : 1 / s,
                  f *= f > 0 ? s : 1 / s,
                  x.uae(
                    g("b"),
                    !1,
                    M(
                      X(v, u).scaleSelf(2 / (n - c), 2 / (m - o), 2 / (i - f)).translateSelf(
                        -(n + c) / 2,
                        -(m + o) / 2,
                        (i + f) / 2,
                      ).multiplySelf(I),
                      d,
                      e,
                    ),
                    16 * e,
                    16,
                  );
              };
          });
        x.a4v(33986),
          x.b9j(3553, x.c25()),
          x.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, t),
          x.t2z(3553, 10241, 9987),
          x.t2z(3553, 10240, 9729),
          x.gbn(3553),
          x.b6o(36160, s),
          x.d45([0]),
          x.r9l(0),
          g(),
          x.ubh(g("q"), 2),
          o(),
          x.ubh(o("q"), 2),
          x.c5t(0, 0, 0, 1),
          x.d4n(515),
          x.e8z(2929),
          x.e8z(2884),
          G.e8z(2929),
          G.e8z(2884),
          G.v5y(0, 0, 128, 128),
          c(),
          G.uae(c("a"), !1, M(X1(1e-4, 2, 1.2, .4))),
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
              p,
              d,
              g,
              v,
              x,
              y,
              b,
              w = 0,
              z = 1,
              S = 2,
              k = 15,
              A = () => X((S ? B[h1] : q[28 !== w ? w : 0]).p),
              M = e => {
                S > 1 ? (X(B[h1].p).multiplySelf(B[h1].q), H(0, e1 > .9 ? 15 : 1, -2.4)) : (A(), H(x, y, b)),
                  e && (n = (N - O) / T, m = (W - R) / T),
                  O = N,
                  Q = P,
                  R = W;
              },
              I = (e, t, a) => {
                A().invertSelf(), H(e, t, a, 0), x += N, y += t, b += W, M();
              },
              Y = (e, t, a, l) => V(e, t, z || (K(U(t - e) ** .5 - a) + 1 / 7) * q1(1.5 * l));
            a1 = () => {
              let e,
                t,
                a = (M(p),
                  G.r9r(0, 0, 128, 128, 6408, 5121, W1),
                  (() => {
                    let r = 0, s = 0, c = 0, o = 0, a = 0, l = 0, i = -1;
                    for (let l = 0; 36 > l; ++l) {
                      for (let t = 96, a = 512 * l; 416 > t; t += 4) {
                        for (let e = 0; 2 > e; ++e) {
                          var n = W1[a + t + e], m = W1[a + t + e + 2];
                          n > o && (o = n),
                            n + m && (0 > i || i === l) && (i = l, m === p ? ++r : s && s !== m || (s = m, ++c));
                        }
                      }
                    }
                    p = 0 > i ? 0 : c > 2 * r ? s : p;
                    for (let e = 36, t = 18432; 128 > e; ++e) {
                      for (
                        n =
                          i =
                          c =
                          s =
                          r =
                            0;
                        128 > n;
                        ++n
                      ) {
                        m = W1[t++],
                          64 > n ? m > r && (r = m) : m > s && (s = m),
                          m = W1[t++],
                          n > 64 ? m > r && (r = m) : m > s && (s = m),
                          (m = W1[t++]) > c && (c = m),
                          (m = W1[t++]) > i && (i = m);
                      }
                      (s -= r) * s > a * a && (a = s), (i -= c) * i > l * l && (l = i);
                    }
                    h = K(1 - .01 * z1(U(a *= .7), U(l)), .3), I(a / 255, o / 255, l / 255);
                  })(),
                  S || p !== w
                    ? (w = p, A().invertSelf(), H(O, Q, R), x = N, y = P, b = W, S &&= p ? 0 : 1)
                    : (-20 > O || 109 > R ? -25 : -9) > Q && (S = 2),
                  1 === p && (B[15].i = -15 > O && 0 > R ? 1 : 0),
                  i = _(i, l1 * (p > 30 && 35 > p), 2),
                  d = Y(d, O, .5, 1),
                  g = Y(g, u = V(_(u, Q, 2), Q, S || 8 * U(u - Q)), 2, 1),
                  v = Y(v, R, .5, 1),
                  D
                    ? (e = S + q1(18), n1 = V(n1, O, e), f1 = V(f1, R, e), m1 = V(m1, 1.6 + u, e), C = k1(C))
                    : (n1 = Y(n1, d, 1, 2 + i),
                      f1 = Y(f1, v + -18 + 5 * i, 1, 2 + i),
                      m1 = Y(m1, z1(g + K((-60 - R) / 8, 0, 20) + 13 + 9 * i, 6), 4, 2),
                      e = w1(-6, -U(v - f1)),
                      C = A1(C, 90 - k1(r1(e, t = d - n1) / u1), z + q1(10)),
                      p1 = A1(p1, 90 - r1(M1(e, t), m1 - g) / u1, z + q1(10))),
                  p1 = K(p1, -87, 87),
                  z = 0,
                  e = K(o1, -1),
                  t = K(i1, -1),
                  S1(M1(e, t) ** .5, .1)),
                l = r1(e, t);
              a && (s = 90 - l / u1),
                o = _(o, a, 10),
                J(O, .06 * h * o * j(18.2 * F) + u, R).rotateSelf(0, c = A1(c, s, q1(8)));
              for (let e = 0; 2 > e; ++e) {
                var r = 9.1 * F - E * e;
                X(q[53].p, J(0)).translateSelf(0, o * K(.45 * L(r - E / 2))).rotateSelf(o * L(r) * .25 / u1, 0);
              }
              k = p ? 5 : _(k, S ? 13 : 19 - 2 * w1(0, Q + 10), 2.2),
                n = p || S ? 0 : _(n, 0, 3),
                m = p || S ? 0 : _(m, 0, 3),
                e = (f = S ? 0 : _(f, p ? 7 * K(2 * a) * h : 0, p ? 9 : 1)) * a * U(e) * L(l),
                t = f * a * U(t) * j(l),
                I(T * (n + (j(l = D ? (180 + C) * u1 : 0) * t - L(l) * e)), -T * k, T * (m + (L(l) * t + j(l) * e)));
            };
          })(),
          H1(),
          requestAnimationFrame(r);
      }
    },
    t = new Image();
  t.onload = g,
    t.src = a,
    (l => {
      let r = 0,
        e = (b, w, z, S, k, A, M, I, Y, D, j, e, T, F, C, O, t, Q, a, R, q, B = r++) =>
          B1(() => {
            let y = 0;
            D = 4 * D ** 2,
              q = q.split("+"),
              [5513, 4562, 3891].map(f => {
                let l,
                  r,
                  s,
                  c,
                  o,
                  i,
                  n,
                  m = 0,
                  h = 0,
                  u = [],
                  p = e => L(e * E * 2),
                  d = new Int32Array(768 * f),
                  g = 2 ** (e - 9) / f,
                  v = E * 2 ** (t - 8) / f,
                  x = a * f & -2;
                for (let e = 0; 11 >= e; ++e) {
                  for (
                    let t = 0, a = +"000001234556112341234556011111111112011111111112000001111112"[12 * B + e];
                    32 > t;
                    ++t
                  ) {
                    l = (32 * e + t) * f;
                    for (let e = 0; 4 > e; ++e) {
                      if (o = 0, a && (o = q[a - 1].charCodeAt(t + 32 * e) - 40, o += o > 0 ? 106 : 0), o) {
                        r = u[o] || (u[o] = (l => {
                          let r,
                            s,
                            c = 0,
                            o = 0,
                            i = new Int32Array(I + Y + D),
                            n = 2 > B
                              ? e => e % 1 * 2 - 1
                              : p,
                            m = 2 > B
                              ? 1 > B
                                ? e => .5 > e % 1 ? 1 : -1
                                : e => 2 > (e = e % 1 * 4) ? e - 1 : 3 - e
                              : p;
                          for (let t = 0, a = 0; I + Y + D > t; ++t, ++a) {
                            let e = 1;
                            I > t ? e = t / I : I + Y > t || (e = (1 - (e = (t - I - Y) / D)) * 3 ** (-j / 16 * e)),
                              0 > a
                              || (a -= 4 * f,
                                r = .00396 * 2 ** ((l + w - 256) / 12),
                                s = .00396 * 2 ** ((l + k - 256) / 12) * (B ? 1 : 1.0072)),
                              i[t] = 80
                                  * (n(c += r * e ** (z / 32)) * b + m(o += s * e ** (A / 32)) * S
                                    + (M && M * (2 * s1() - 1)))
                                  * e | 0;
                          }
                          return i;
                        })(o));
                        for (let e = 0, t = 2 * l; r.length > e; ++e, t += 2) d[t] += r[e];
                      }
                    }
                    for (let e, t = 0; f > t; ++t) {
                      r = 0,
                        ((e = d[c = 2 * (l + t)]) || n)
                        && (i = .00308 * T,
                          1 !== B && 4 !== B || (i *= L(g * c * E * 2) * R / 512 + .5),
                          m += (i = 1.5 * L(i)) * h,
                          h += i * (s = (1 - F / 255) * (e - h) - m),
                          e = 4 === B ? h : 3 === B ? s : m,
                          B || (e = (1 > (e *= 22e-5) ? e > -1 ? L(e / 4 * E * 2) : -1 : 1) / 22e-5),
                          e *= C / 32,
                          n = e * e > 1e-5,
                          r = e * (1 - (s = L(v * c) * O / 512 + .5)),
                          e *= s),
                        x > c || (r += d[1 + c - x] * Q / 255, e += d[c - x] * Q / 255),
                        X[s = y + c >> 1] += (d[c] = r) / 65536,
                        H[s] += (d[++c] = e) / 65536;
                    }
                  }
                }
                y += 768 * f;
              }),
              --r || B1(l);
          }),
        X = (k = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
        H = k.getChannelData(1);
      e(
        69,
        128,
        0,
        143,
        128,
        0,
        0,
        196,
        100,
        36,
        0,
        0,
        149,
        110,
        31,
        47,
        3,
        56,
        2,
        0,
        "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U+(059<59<A9<AE<AEHAEHMEHMQMQTY(Y+(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y+(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^+Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]+QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
      ),
        e(
          100,
          128,
          0,
          201,
          128,
          0,
          0,
          100,
          144,
          35,
          0,
          6,
          135,
          0,
          32,
          147,
          6,
          0,
          6,
          195,
          ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5+-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5+,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5+*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6+5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5+5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
        ),
        e(
          255,
          116,
          85,
          255,
          116,
          37,
          14,
          64,
          144,
          73,
          99,
          0,
          136,
          15,
          32,
          0,
          0,
          66,
          6,
          0,
          "9(((9(((9(((9(((9(((9(((9(((9+9(((Q(((Q(((Q",
        ),
        e(
          0,
          140,
          0,
          0,
          140,
          0,
          81,
          64,
          400,
          47,
          55,
          5,
          239,
          135,
          13,
          176,
          5,
          16,
          4,
          187,
          "9(9(9(9(9(9(9(999(9(9(9(999(9(9+9(9(9(9(9(999(9(((((Q",
        ),
        e(
          221,
          128,
          64,
          210,
          128,
          64,
          255,
          64,
          144,
          73,
          79,
          7,
          195,
          15,
          21,
          20,
          0,
          9,
          3,
          64,
          "((((Q(((((((Q(((((((Q(((((((Q+Q((Q((Q((Q((Q((Q((((Q",
        );
    })(() => {
      B1(() => {
        let o = 0,
          i = [],
          n = [],
          m = [],
          f = [],
          h = new Int32Array(8),
          u = new Map(),
          p = new Int32Array(h.buffer, 0, 5),
          d = new Float32Array(h.buffer),
          s = (q.map((t, e) => {
            let s,
              l = e => {
                let { x: t, y: a, z: l } = s[e], r = (d[0] = t, d[1] = a, d[2] = l, u.get(e = "" + (s.m ? p : h)));
                return void 0 !== r
                  ? (f[t = 3 * r] = (f[t++] + h[5]) / 2, f[t] = (f[t++] + h[6]) / 2, f[t] = (f[t] + h[7]) / 2)
                  : (u.set(e, r = u.size), n.push(t, a, l, d[3]), m.push(h[4]), f.push(h[5], h[6], h[7])),
                  r;
              };
            d[3] = e > 55 ? -28 : e;
            for (let e of t.h) {
              for (s of e) {
                var { x: a, y: r, z: c } = j1(s);
                h[4] = 0 | s.o, h[5] = 32767 * a, h[6] = 32767 * r, h[7] = 32767 * c;
                for (let e = 2, t = l(0), a = l(1); s.length > e; ++e) i.push(t, a, a = l(e));
              }
            }
            t.h = 0, t.u = o, t.v = o = i.length;
          }),
            [x, G].map(e => {
              e.b11(34963, e.c1b()),
                e.b2v(34963, new Uint16Array(i), 35044),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Float32Array(n), 35044),
                e.v7s(0, 4, 5126, !1, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Int16Array(f), 35044),
                e.v7s(1, 3, 5122, !0, 0, 0),
                e.b11(34962, e.c1b()),
                e.b2v(34962, new Uint32Array(m), 35044),
                e.v7s(2, 4, 5121, !0, 0, 0),
                e.e3x(0),
                e.e3x(1),
                e.e3x(2);
            }),
            []),
          c = [];
        try {
          let [e, t, a, l, r] = JSON.parse(localStorage["Dante-22"]);
          s = e, c = t, h1 = a, w = l, F = r;
        } catch {}
        B.map((e, t) => e.t = e.g = e.i = 14 !== t && s[t] ? 1 : 0),
          d1.map((e, t) => e.i = c[t] ? 1 : 0),
          L1(),
          e1 = $ || 14 !== h1 ? 1 : 0,
          B1(g);
      });
      let e = [-110, -100, -92, -82, -106, -97, -88],
        t = e => o(L((e /= 11) * E), e).rotateSelf(10 * e).scaleSelf(1.002 - e, 1, 1.002 - e),
        a = e => {
          B.push({ p: t1, q: e }),
            p(n(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
            p(n(5), e.translate(-.2).rotate(90, 90).scale(.4, .1, .5), f(.4, .5, .5)),
            p(n().slice(0, -1), e.translate(0, -.4).scale(.5, .1, .5), f(.5, .5, .4));
        },
        l = e =>
          h(
            i(n().slice(0, -1), o(0, -e / 2).scale(6, e - 1, 2.2)),
            i(n().slice(0, -1), o(0, -e / 2 - 4).scale(4, e - 5, 4)),
            i(n(28, 1), o(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        r = h(
          i(n(), o(0, -.5, 1).scale(1.15, 1.2, 6.5), f(.25, .25, .35, .3)),
          h(
            i(n(3), o(0, 0, -5.5).scale(3, 2), f(.6, .3, .4, .3)),
            i(n(), o(0, 0, -3.65).scale(2.5, 3), f(.6, .3, .4, .3)),
          ),
          ...[-1, 1].map(e => i(n(), o(1.2 * e, -.5, 1).scale(.14, .3, 6.5), f(.7, .2, 0, .3))),
        ),
        s = [
          i(n(), o(0, -3).scale(11, 1.4, 3), f(.9, .9, .9, .2)),
          i(n(), o(0, -2.2).scale(7.7, .5, 4), f(.5, .5, .5, .2)),
          m(12, e => i(n(), o(e - 5.5, 4.4).scale(.1, .1, 2), f(.6, .5, .3, .2))).flat(),
          i(
            h(
              i(n(6), v.rotate(90).scale(6, 8, 6)),
              i(n(4, 0, .01), o(0, 6).scale(12, 2, .75).rotate(0, 45)),
              i(n(6), v.rotate(90).scale(5, 12, 5)),
              ...[-5, 0, 5].map(e => i(n(5), o(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
            ),
            v,
            f(.3, .6, .6, .3),
          ),
        ].flat(),
        c = m(11, e => Y1(y1(I1(16), t(e), f(1, 1, .8, .2)).reverse(), y1(I1(16), t(e + 1), f(1, 1, .8, .2)), 1))
          .flat();
      for (
        u(),
          p([g1.slice(1)], o(-2).scale3d(3).rotate(90, 0)),
          u(),
          a(o(-5.4, 1.5, -19).rotate(0, -90)),
          [-15, 15].map((e, t) => {
            p(n(), o(0, 0, t ? 22 : -23).scale(3, 1, 8), f(.9, .9, .9, .2)),
              p(n(), o(0, 6.3, e).scale(4, .3, 1), f(.3, .3, .3, .4)),
              p(n().slice(0, -1), o(0, 1, e).scale(3, .2, .35), f(.5, .5, .5, .3));
          }),
          p(n(), o(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), f(.8, .8, .8, .2)),
          p(n(), o(3, 1.5, -20).scale(.5, 2, 5), f(.7, .7, .7, .2)),
          p(n(5), o(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), f(.6, .3, .3, .4)),
          p(n(), o(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), f(.75, .75, .75, .2)),
          p(h(
            R1(
              h(
                i(n(6, 0, 0, .3), o(0, -.92).scale(13, 2, 13), f(.8, .8, .8, .2)),
                i(n(), v.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), f(.5, .5, .5, .5)),
              ),
              i(
                n(),
                v.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
                f(.8, .2, .2, .5),
              ),
              i(n(6), o(0, -8).scale(9, 8, 7), f(.2, .1, .4, .5)),
              i(n(6, 0, 0, .3), o(8, -4, -4).scale(14, 2, 13), f(.7, .7, .7, .2)),
            ),
            i(n(6), o(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), f(.5, .5, .5, .5)),
            i(n(5, 0, 1.5), o(0, 1).scale(4.5, .3, 4.5), f(.7, .5, .9, .2)),
            i(n(5), v.scale(5, 30, 5), f(.4, .2, .6, .5)),
          )),
          a(o(15.8, -2, 3.8)),
          p(n(), o(-18.65, -3, 55).scale(2.45, 1.4, 2.7), f(.9, .9, .9, .2)),
          a(o(-55, -1.1, 46).rotate(0, 90)),
          p(n(7), o(-57, -2.6, 46).scale(4, 1, 4), f(.8, .8, .8, .3)),
          p(n(6), o(-61.3, -2.4, 49).scale(3, 1, 5), f(.4, .6, .6, .3)),
          p(s, o(-53, 0, 55)),
          p(n(), o(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), f(.7, .7, .7, .2)),
          p(n(3, 0, -.5), o(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), f(.8, .8, .8, .2)),
          p(h(
            i(n(), o(-100, 1, 63).scale(7.5, 4), f(.5, .5, .5, .4)),
            i(n(), o(-100, 0, 63).scale(2, 2, 4), f(.5, .5, .5, .4)),
            i(n(20, 1), o(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), f(.5, .5, .5, .4)),
          )),
          p(h(
            R1(
              i(n(), o(-100, -2.6, 70).scale(3, 1.1, 7), f(.8, .8, .8, .2)),
              i(n(), o(-100, -2.4, 55).scale(8, .9, 8), f(.8, .8, .8, .2)),
              i(n(), o(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), f(.8, .8, .8, .2)),
              i(n(6), o(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), f(.6, .6, .6, .3)),
              i(n(), o(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), f(.8, .8, .8, .2)),
              i(n(), o(-100, .42, 92).scale(3, 1.1, 4.1), f(.8, .8, .8, .2)),
              i(n(), o(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), f(.8, .8, .8, .2)),
            ),
            i(n(8), o(-100, -1, 55).scale(7, .9, 7), f(.3, .3, .3, .4)),
            i(n(8), o(-100, -2, 55).scale(4, .3, 4), f(.4, .4, .4, .5)),
            i(n(8, 0, -3.1), o(-100, -3, 55).scale(.4, 1, .4), f(.4, .4, .4, .5)),
          )),
          g1.map(({ x: t, z: a }) => {
            p(n(6), o(3 * t, 3, 15 * a).scale(.7, 4, .7), f(.6, .3, .3, .4)),
              p(n(6), o(7 * t - 100, -3, 7 * a + 55).scale(1, 8.1), f(.6, .15, .15, .8)),
              [4, -.4].map(e => p(n(6), o(7 * t - 100, e, 7 * a + 55).scale(1.3, .5, 1.3), f(.4, .2, .2, .8))),
              [1.5, 8].map(e =>
                p(n(15, 1), o(9 * t - 38.9, e - 11.3, 11 * a + 17).scale(1.5, .5, 1.5), f(.6, .6, .6, .3))
              ),
              p(n(14, 1).slice(0, -2), o(9 * t - 38.9, -18, 11 * a + 17).scale(1, 14.2), f(.25, .25, .25, 1));
          }),
          m(7, e => {
            p(
              n((23 * e + 1) % 5 + 5, 0, .5),
              o(5 * L(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1.1 + e / 6, 5 + e / 3),
              f(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),
            );
          }),
          p(n(), o(-87, -9.5, 24).scale(7, 1, 3), f(.4, .5, .6, .4)),
          p(n(4), o(-86, -9.2, 27).scale(5, 1, 5), f(.5, .6, .7, .3)),
          p(n(12, 1), o(-86, -9, 31).scale(1.5, 1, 1.5), f(.3, .3, .4, .1)),
          a(o(-86, -7.5, 31)),
          p(n(5), o(-38.9, -11.1, 10).scale(2, 1.2, 2), f(.2, .4, .7, .3)),
          p(h(
            R1(
              i(n(), o(-38.9, -11.3, 17).scale(11, 1, 13), f(.3, .4, .6, .3)),
              i(n(5), o(-38.9, -11.1, 17).scale(9, 1, 9), f(0, .2, .3, .5)),
            ),
            i(n(5), o(-38.9, -11.1, 17).scale3d(5.4), f(0, .2, .3, .5)),
          )),
          a(o(-38.9, -9.4, 10)),
          p(
            h(
              R1(
                i(n(6), o(0, 0, -18).scale(15, 1.3, 15), f(.7, .7, .7, .3)),
                i(n(5), v.scale(4.5, 1.2, 9), f(.45, .4, .6, .3)),
              ),
              ...m(6, t =>
                m(
                  6,
                  e =>
                    i(
                      n(6),
                      o(4.6 * e - (1 & t ? 10 : 12), 0, 4.6 * t + 2 * L(4 * e) - 32).scale3d(2),
                      f(.7, .7, .7, .3),
                    ),
                )).flat(),
            ),
            o(-38.9, -11.3, -1),
          ),
          a(o(-84, -.7, 85).rotate(0, 45)),
          p(n(5), o(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), f(.8, .1, .25, .4)),
          a(o(-116, -1.4, -18).rotate(0, 180)),
          p(
            h(i(n(), o(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...e.map(e => i(n(), o(e, .05, -3).scale(1.35, 2, 9)))),
            v,
            f(.5, .5, .6, .2),
          ),
          p(n(), o(-96.5, 1, -2).scale(19, .3, .3), f(.5, .5, .6, .2)),
          p(n(6), o(-116, -2.6, -16.5).scale(3.2, .8, 3), f(.6, .5, .7, .2)),
          p(n(), o(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), f(.8, .8, .8, .2)),
          p(n().slice(0, -1), o(-115.5, -17, -12).scale(.5, 15, 2.2), f(.6, .6, .6, .3)),
          p(n(8).slice(0, -2), o(-114, -17, -2).scale(2, 15, 2), f(.6, .6, .6, .3)),
          p(n(8).slice(0, -2), o(-79, -17, -2).scale(2, 15, 2), f(1, 1, 1, .3)),
          p(n().slice(0, -1), o(-77, -17, -50.5).scale(2.2, 15, .5), f(.6, .6, .6, .3)),
          p(h(
            i(n(12).slice(0, -1), o(-77, -14.5, -12).scale(4, 17.5, 4), f(.7, .7, .7, .2)),
            i(n(12), o(-77, 3.1, -12).scale(3, 5, 3), f(.4, .5, .6, .2)),
            i(n(), o(-79, .1, -12).scale(3.5, 2, 1.3), f(.4, .5, .6, .2)),
            i(n(), o(-77, .1, -14).scale(1.5, 2, 2), f(.4, .5, .6, .2)),
          )),
          p(h(
            i(n(), o(-93, -5.8, -40).scale(9, 1, 5), f(.8, .8, .8, .1)),
            i(n(9), o(-98, -5.8, -40).scale(3, 8, 3), f(.7, .7, .7, .2)),
          )),
          p(n(), o(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), f(.6, .6, .6, .3)),
          p(n(9).slice(0, -1), o(-98, -18.4, -40).scale(2.5, 13.5, 2.5), f(.5, .5, .5, .3)),
          a(o(-98, -4.4, -40).rotate(0, 90)),
          [-1, 1].map((t, a) => {
            p(
              h(
                i(n(), o(-4 * t, 3.5, -.5).scale(4, 4, .7), f(.5, .5, .5, .4)),
                i(n(5), o(-5.3 * t, 7).rotate(90, 0).scale(1.7, 5, 1.7), f(.6, .24, .2, .5)),
                i(n(), v.scale(3, 3, 10), f(.6, .24, .2, .5)),
                i(n(5), o(-5.3 * t, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), f(.6, .24, .2, .5)),
                i(n(32, 1), o(0, 3, -5).scale(3, 4, 10).rotate(90, 0), f(.6, .24, .2, .5)),
              ),
              o(t - 100, .7, 97),
            ),
              p(n(12, 1), o(-7.5 * t - 100, 3.7, 96).scale(.8, 4, .8), f(.6, .24, .2, .5)),
              [7.2, 1.5].map(e => p(n(15, 1), o(-7.5 * t - 100, e + .7, 96).scale(1.1, .5, 1.1), f(.5, .24, .2, .4))),
              p(c, o(-8 * t, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * t + 90)),
              p(c, o(-5 * t - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * t - 90)),
              m(5, e => p(c, o(18.5 * (a - .5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * a).scale(1.2, 10, 1.2)));
          }),
          p(h(
            i(n(), o(-82.07, .8, 106).scale(11, .9, 2.2), f(.7, .7, .7, .1)),
            i(n(45, 1), o(-81, .7, 106).scale3d(7.7), f(.7, .7, .7, .1)),
          )),
          p(n(), o(-50.7, 1, 99).scale(2, .65, 1), f(.7, .7, .7, .2)),
          p(n(), o(-58, 1, 106).scale(2, .65, 2), f(.7, .7, .7, .2)),
          p(n(), o(-34.2, .4, 91).scale(3, 1, 3), f(.7, .7, .7, .3)),
          p(n(), o(-42, .4, 91).scale(5, 1, 2.5), f(.7, .7, .7, .3)),
          p(n(5), o(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), f(.2, .5, .5, .6)),
          a(o(-34, 2.7, 96).rotate(-12, 0)),
          p(h(
            R1(
              i(n(), o(-101.5, .7, 93.5).scale(10.5, 1, 2), f(.7, .7, .7, .2)),
              i(n(6, 0, 0, .6), o(-100, .7, 105.5).scale(8, 1, 11), f(.7, .7, .7, .2)),
            ),
            i(n(5), o(-100, .7, 113).scale(4, 3, 4), f(.7, .7, .7, .2)),
          )),
          m(3, e => {
            p(l(16), o(-77, -9, -12 * e - 20).rotate(0, 90), f(.6, .6, .6, .3)),
              p(l(16), o(12 * e - 109, -9, -12), f(.6, .6, .6, .3)),
              p(
                l(24.7 - .7 * (1 & e)),
                o(6 * e - 6, 4 - (1 & e), 111 - .2 * (1 & e)),
                1 & e ? f(.5, .5, .5, .3) : f(.35, .35, .35, .5),
              );
          }),
          p(h(
            R1(
              i(n(), o(0, 16, 111).scale(3, 1, 3.8), f(.5, .3, .3, .4)),
              i(n(6, 0, 0, .3), o(0, -.92, 95).scale(14, 2, 14), f(.8, .8, .8, .2)),
              i(n(), o(0, 16, 110.5).scale(12, 1, 3), f(.5, .3, .3, .4)),
            ),
            i(n(5), o(0, 0, 95).scale3d(6), f(.3, .3, .3, .5)),
            i(n(5), o(0, 16, 103.5).scale(5.5, 5, 5.5), f(.5, .3, .3, .4)),
          )),
          a(o(0, 1.7, 82).rotate(0, 180)),
          p(n(5).slice(0, -1), o(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), f(.5, .3, .3, .4)),
          p(n(6), o(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), f(.5, .6, .7, .3)),
          p(n(), o(0, 16, 127.8).scale(1.5, 1, .7), f(.5, .6, .7, .3)),
          p(n(7), o(0, 15.1, 133).scale(5, 2, 5), f(.4, .5, .6, .4)),
          d(o(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          d(o(0, 2.8), [5, 10, 3], [-5, 10, 3], ...I1(18).map(({ x: e, z: t }) => [7 * e, 10 * t, 4.5 - 2 * U(e)])),
          d(o(0, 3, 95), ...I1(9).map(({ x: e, z: t }) => [9 * e, 9 * t, 4])),
          d(o(0, 19, 134), [0, 0, 3.5]),
          d(o(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          d(o(-89, .2, 80), [0, 0, 6]),
          d(o(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          d(o(-115, .2, -12), [0, 0, 3.5]),
          d(o(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
          u(),
          p(n(5), o(0, -.2).scale(5, 1, 5), f(.6, .65, .7, .3)),
          a(o(0, 1.2)),
          m(2, () => {
            u(),
              g1.map(({ x: e, z: t }) => {
                p(n(11, 1).slice(0, -2), o(4 * e, 4, 4 * t).scale(.8, 3, .8), f(.5, .3, .7, .6)),
                  p(n(), o(4 * e, 7, 4 * t).scale(1, .3), f(.5, .5, .5, .3));
              }),
              p(h(
                i(n().slice(0, -1), v.scale(5, 1, 5), f(.8, .8, .8, .3)),
                ...[-1, 1].map(e => i(n(25, 1), o(5 * e, .2).rotate(-30 * e).scale(4, 1, 3), f(.8, .8, .8, .3))),
              )),
              p(n(), o(0, -3).scale(8, 2, 8), f(.4, .4, .4, .3));
          }),
          u(),
          p(h(
            R1(
              i(n(), v.scale(1.5, 1, 5), f(.9, .9, .9, .2)),
              i(n(), o(0, -2).scale(2, 3.2, 1.9), f(.3, .8, .5, .5)),
              i(n(6), v.scale(4, 1, 5), f(.9, .9, .9, .2)),
              i(n(16, 1, 0, 4), v.scale(1, 1, 1.5).rotate(0, 90), f(.9, .9, .9, .2)),
            ),
            i(n(), v.scale(1.3, 10, 1.3), f(.2, .7, .4, .6)),
          )),
          d(o(0, 2.8), [0, 0, 4.5]),
          u(),
          p(n(3), o(-23, -1.7, 55.8).scale(5, .7, 8.3), f(.3, .6, .6, .2)),
          p(n(8), o(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), f(.8, .8, .8, .2)),
          p(n(), o(-23, -2.2, 62).scale(3, 1, 4), f(.5, .5, .5, .3)),
          p(n(), o(-23, -3, 55).scale(5.2, 1.7, 3), f(.5, .5, .5, .3)),
          a(o(-23, -.5, 66.5)),
          u(),
          p(n(), o(-22.55, -3, 55).scale(1.45, 1.4, 2.7), f(.7, .7, .7, .2)),
          p(h(i(n(), v.scale(3, 1.4, 2.7)), i(n(), v.scale(1.2, 8, 1.2))), o(-33, -3, 55), f(.7, .7, .7, .2)),
          u(),
          p(h(i(n(), v.scale(3, 1.4, 2.7)), i(n(), v.scale(1, 3))), o(-27, -3, 55), f(.9, .9, .9, .2)),
          p(n(), o(-39, -3, 55).scale(3, 1.4, 2.7), f(.9, .9, .9, .2)),
          u(),
          p(n(6), o(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), f(.7, .7, .7, .4)),
          u(),
          [0, 12, 24].map(e =>
            p(n(), o(e - 76.9, -e / 16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.2, .5, .6, .2))
          ),
          u(),
          [6, 18].map(e =>
            p(n(), o(e - 76.9, -e / 16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), f(.1, .4, .5, .2))
          ),
          u(),
          p(n(5), o(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), f(.3, .3, .5, .5)),
          p(n(5).slice(0, -1), o(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), f(.6, .3, .5, .5)),
          p(
            h(
              i(n(5), o(0, 2).scale(5, 7, 5).skewY(8)),
              i(n(5), o(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
              i(n(), v.scale(2, 8, 3)),
            ),
            o(-38.9, -11.3, 17),
            f(.2, .4, .5, .5),
          ),
          d(o(-39.1, -.6, 17).rotate(11), ...I1(15).map(({ x: e, z: t }) => [3 * e, 3 * t, 1.2])),
          e.map((e, t) => {
            t % 2 || t >= 6 || u(), p(r, o(e, 1.9, -12));
          }),
          m(4, e => {
            u(),
              p(
                n(6),
                o(-14.6 - 4.8 * e - (e > 2 ? 2 : 0), -e / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                  2.6,
                  1,
                  2.5,
                ),
                f(.5 - e / 8, e / 12 + .5, .7, .3),
              );
          }),
          [f(.1, .55, .45, .2), f(.2, .5, .5, .3), f(.3, .45, .55, .4)].map((e, t) => {
            u(),
              p(n(), o(-23.5, .5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), e),
              2 === t && p(n(), o(-29.1, .4, 91).scale(2.1, 1, 3), f(.7, .7, .7, .3)),
              1 === t && p(n(), o(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), f(.6, .6, .7, .3));
          }),
          u(),
          p(n(5), v.scale(5, 1.1, 5), f(.5, .3, .3, .4)),
          p(n(5), v.scale(5.5, .9, 5.5), f(.25, .25, .25, .4)),
          a(o(0, 1.5, -1).rotate(0, 180)),
          m(4, t => {
            u(),
              m(
                7,
                e =>
                  p(i(
                    n(8, 1).slice(0, -1),
                    o((t > 2 ? 3.5 : 4) * (e / 6 - .5), 3).scale(.2, t > 2 ? 4 : 3, .2),
                    f(.3, .3, .38),
                  )),
              );
          }),
          u(),
          p(s),
          u(),
          p(n(5).slice(0, -1), o(-7.5, 2.7).rotate(0, 90).scale(1, .2), f(.5, .5, .5, .5)),
          p(n(10).slice(0, -1), o(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), f(.3, .8, .7, .3)),
          p(n(15, 1), o(-7.5).rotate(0, 90).scale(3, 2.3, 3), f(.4, .4, .4, .3)),
          a(o(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180)),
          [-1, 1].map(e => p(c, v.rotate(90 * e, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3))),
          p(h(i(n(10), v.scale(6, 2, 6), f(.1, .6, .5, .3)), i(n(10), v.scale(3.3, 6, 3.3), f(.1, .6, .5, .5)))),
          d(o(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]),
          u(),
          p(n(3), o(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), f(.5, .3, .3, .4)),
          [22, 30].map(e => {
            p(n(6), o(0, 16, e + 95).scale(3, 1, 2.3).rotate(0, 90), f(.7, .7, .7, .4)),
              p(n(), o(0, 6.2, e + 95).scale(.5, 11, .5), f(.5, .3, .3, .4));
          }),
          u(),
          p(n(5).slice(0, -1), o(0, 2).scale(1, 2), f(.3, .3, .3, .2)),
          p(n(8).slice(0, -1), o(0, 2).scale(3, 1.5, 3).rotate(0, 22), f(.7, .7, .7, .1)),
          p(h(
            i(n(28, 1), v.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
            i(n(), o(0, 0, -5.5).scale(1.5, 3, 2.7), f(.45, .45, .45, .2)),
          )),
          d(o(0, 3), ...I1(14).map(({ x: e, z: t }) => [5.6 * e, 5.6 * t, 2])),
          u(),
          [-1, 1].map(e => p(c, v.rotate(0, 90).translate(-5 * e, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * e + 90))),
          p(h(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2).scale(9, 1.1, 2), f(.3, 0, 0, .3)),
          )),
          p(n(5).slice(0, -1), o(0, 1).scale(1, .2), f(.3, .3, .3, .2)),
          p(n(28, 1), v.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
          u(),
          p(h(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2, 7).scale(2, 1.1, 9), f(.3, 0, 0, .3)),
            i(n().slice(0, -1), o(7, 2).scale(9, 1.1, 2), f(.3, 0, 0, .3)),
          )),
          p(n(5).slice(0, -1), o(0, 1).scale(1, .2), f(.3, .3, .3, .2)),
          p(n(28, 1), v.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
          u(),
          p(h(
            i(n(28, 1).slice(0, -1), o(0, 2).scale(7.5, 1, 7.5), f(.35, 0, 0, .3)),
            i(n().slice(0, -1), o(0, 2, -7).scale(2, 1.1, 9), f(.3, 0, 0, .3)),
            i(n().slice(0, -1), o(7, 2).scale(9, 1.1, 2), f(.3, 0, 0, .3)),
          )),
          p(n(5).slice(0, -1), o(0, 1).scale(1, .2), f(.3, .3, .3, .2)),
          p(n(28, 1), v.scale(7.5, 1, 7.5), f(.45, .45, .45, .2)),
          m(2, () => {
            u(),
              p(h(
                i(n(30, 1, 1.15, 1), o(0, -3).scale(3.5, 1, 3.5), f(.7, .4, .25, .7)),
                i(n(), o(4, -1.2).scale3d(2), f(.7, .4, .25, .3)),
                i(n(30, 1, 1.3, 1), o(0, -2.5).scale(2.6, 1, 3), f(.7, .4, .25, .2)),
              )),
              a(o(0, -3, 4));
          }),
          e = 0;
        16 > e;
        ++e
      ) {
        u(),
          p(n(9, 1), o(0, .8).scale(.2, .3, .2), f(.7, 1, .2)),
          p(n(6, 1).slice(0, -1), v.scale(.12, 1.2, .12), f(.3, .3, .5, .1)),
          p(n(3), o(0, -1).rotate(90, 90).scale(.3, .4, .3), f(.2, .2, .2, .1));
      }
      u(),
        p(D1(20), o(0, 1).scale3d(.5), f(1, .3, .4)),
        p(D1(30), v.scale(.65, .8, .55), f(1, .3, .4)),
        p(n(), o(0, .9, .45).scale(.15, .02, .06), f(.3, .3, .3)),
        [-1, 1].map(e => {
          p(c, v.rotate(0, e > 0 ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), f(1, 1, .8)),
            p(
              i(h(n(15, 1), i(n(), o(0, 0, 1).scale(2, 2, .5))), v.rotate(-90, 0).scale(.1, .05, .1), f(.3, .3, .3)),
              o(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e),
            );
        }),
        [-1, 1].map(e => {
          u(), p(n(20, 1), o(.3 * e, -.8).scale(.2, .7, .24), f(1, .3, .4));
        }),
        u(),
        p(n(6, 1).slice(0, -1), v.scale(.77, 1, .77), f(1, .3, .5)),
        u(),
        p(
          D1(28, 22, (e, t, a) => {
            let l = t / 22, r = e * E * 2 / 28, s = L(l ** .6 * E / 2);
            return e = l * l * L(e * E * .5) / 4,
              t > 21
                ? { x: a.m = 0, y: -.5, z: 0 }
                : { x: j(r) * s, y: j(l * E) - l - e, z: L(r) * s + L(e * E * 2) / 4 };
          }),
          v.scale3d(.7),
          f(1, 1, 1),
        ),
        [-1, 1].map(e => p(D1(10), o(.16 * e, .4, -.36).scale3d(.09)));
    });
});
