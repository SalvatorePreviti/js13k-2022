let aa,
  ba,
  da,
  fa,
  ha,
  ia,
  ja,
  ka,
  b = 0,
  pa = 0,
  qa = 0,
  ra = 0,
  sa = 0,
  ta = 0,
  ua = 0,
  va = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 1,
  d = 0.066;
const e = [],
  h = [],
  Ia = [],
  Ja = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ka = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  La = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Ma = { x: 0, y: 0, z: 0 },
  Qa = Math.PI / 180;
var Ra = 0, Sa = 180;
const Ta = { x: 0, y: 0, z: 0 },
  n = NO_INLINE(a => 0 > a ? -a : a),
  Ua = NO_INLINE((a, c) => a < c ? a : c),
  Va = NO_INLINE((a, c) => c < a ? a : c),
  Wa = (a, c) => n(a) > c ? a : 0,
  p = (a, c = 0, g = 1) => a < c ? c : g < a ? g : a,
  Xa = a => Math.atan2(Math.sin(a * Qa), Math.cos(a * Qa)) / Qa,
  Ya = (a, c, g) => a + (2 * (c = (c - a) % 360) % 360 - c) * p(g) || 0,
  Za = (a, c, g) => (0 < g ? 1 > g ? a + (c - a) * g : c : a) || 0,
  $a = (a, c) => (a = p(a), Za(a, 1 - a, c)),
  bb = (
    a,
    c = ab,
    g = 0,
  ) => (g *= 16,
    c[g++] = a.m11,
    c[g++] = a.m12,
    c[g++] = a.m13,
    c[g++] = a.m14,
    c[g++] = a.m21,
    c[g++] = a.m22,
    c[g++] = a.m23,
    c[g++] = a.m24,
    c[g++] = a.m31,
    c[g++] = a.m32,
    c[g++] = a.m33,
    c[g++] = a.m34,
    c[g++] = a.m41,
    c[g++] = a.m42,
    c[g++] = a.m43,
    c[g] = a.m44,
    c),
  eb = (
    a = cb,
    c = db,
  ) => (c.m11 = a.m11,
    c.m12 = a.m12,
    c.m13 = a.m13,
    c.m14 = a.m14,
    c.m21 = a.m21,
    c.m22 = a.m22,
    c.m23 = a.m23,
    c.m24 = a.m24,
    c.m31 = a.m31,
    c.m32 = a.m32,
    c.m33 = a.m33,
    c.m34 = a.m34,
    c.m41 = a.m41,
    c.m42 = a.m42,
    c.m43 = a.m43,
    c.m44 = a.m44,
    c),
  t = NO_INLINE((a, c, g) => cb.translate(a, c, g)),
  fb = NO_INLINE((a, c, g) => cb.rotate(a, c, g)),
  L = NO_INLINE((a, c, g) => cb.scale(a, c, g)),
  gb = (a, c) => Array.from(Array(a), (g, k) => c(k)),
  hb = (a, c, g) => (a.D = g, a.A = c, a),
  ib = (a, c, g = a.A) =>
    hb(
      a.map(k => {
        let q, m;
        return { x: k, y: q, z: m } = k,
          { x: k, y: q, z: m } = c.transformPoint({ x: k, y: q, z: m }),
          { x: k, y: q, z: m };
      }),
      g,
      a.D,
    ),
  N = (a, c, g) => a.map(k => ib(k, c, g)),
  jb = (a, c = 0) =>
    gb(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > n(k) ? k : 0 > k ? k - c : k + c };
    }),
  kb = (a, c, g) =>
    a.map((k, q, { length: m }) => hb([k, c[m - q - 1], c[m - (q + 1) % m - 1], a[(q + 1) % m]], a.A, g)),
  R = (
    a,
    c,
    g = 0,
    k,
  ) => (a = a ? jb(a, k) : Ja,
    k = ib(a, t(0, 1).scale3d(0 < g ? g : 1)),
    a = ib(a, t(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...kb(a, k, c), k, a]),
  lb = (
    a,
    c = a,
    g = (
      k,
      q,
    ) => (q *= Math.PI / c,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(k) * Math.sin(q) }),
  ) => {
    const k = [];
    for (let q = 0; a > q; q++) {
      for (let m = 0; c > m; m++) {
        const v = hb([], 0, 1);
        k.push(v);
        v.push(g(q, m, v));
        m && v.push(g((q + 1) % a, m, v));
        c - 1 > m && v.push(g((q + 1) % a, m + 1 % c, v));
        v.push(g(q, m + 1 % c, v));
      }
    }
    return k;
  },
  mb = ({ x: a, y: c, z: g }, k) => a * k.x + c * k.y + g * k.z,
  nb = a => {
    let c, g = 0, k = 0, q = 0, m = a.at(-1);
    for (c of a) {
      g += (m.y - c.y) * (m.z + c.z), k += (m.z - c.z) * (m.x + c.x), q += (m.x - c.x) * (m.y + c.y), m = c;
    }
    return c = Math.hypot(g, k, q), g /= c, k /= c, q /= c, { x: g, y: k, z: q, w: g * m.x + k * m.y + q * m.z };
  },
  ob = (a, c) => {
    var g, k, q, m = c.C;
    for (var v = 0; m.length > v; ++v) {
      if (-0.00008 > (g = mb(a, m[v]) - a.w) ? q = c : 8e-5 < g && (k = c), q && k) {
        k = [];
        q = [];
        m = c.C;
        v = c.B;
        let x = m.at(-1), A = mb(a, x) - a.w;
        for (const I of m) {
          g = mb(a, I) - a.w,
            8e-5 > A && q.push(x),
            -0.00008 < A && k.push(x),
            (8e-5 < A && -0.00008 > g || -0.00008 > A && 8e-5 < g)
            && (A /= g - A,
              x = { x: x.x + (x.x - I.x) * A, y: x.y + (x.y - I.y) * A, z: x.z + (x.z - I.z) * A },
              k.push(x),
              q.push(x)),
            x = I,
            A = g;
        }
        return {
          m: 2 < k.length && { C: hb(k, m.A, m.D), B: v, s: c },
          l: 2 < q.length && { C: hb(q, m.A, m.D), B: v, s: c },
        };
      }
    }
    return { m: k, l: q };
  },
  pb = (a, c, g = nb(c.C)) => {
    let k, q, m;
    return a
      ? ({ m: k, l: q } = ob(a, c), k || q || a.u.push(c), k && (a.m = pb(a.m, k, g)), q && (a.l = pb(a.l, q, g)))
      : ({ x: k, y: q, z: g, w: m } = g, a = { x: k, y: q, z: g, w: m, u: [c], m: 0, l: 0 }),
      a;
  },
  qb = (a, c, g) => {
    const k = [],
      q = (m, v) => {
        let { m: x, l: A } = ob(m, v);
        x || A || (0 < g * mb(m, c) ? x = v : A = v);
        x && (m.m ? q(m.m, x) : k.push(x));
        A && m.l && q(m.l, A);
      };
    for (const m of c.u) {
      q(a, m);
    }
    return k;
  },
  rb = (a, c) => a && (c(a), rb(a.m, c), rb(a.l, c)),
  ub = a => (rb(a, c => {
    const g = c.l;
    c.l = c.m;
    c.m = g;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const k of c.u) {
      k.B = !k.B;
    }
  }),
    a),
  vb = a => a.length ? a.reduce((c, g) => pb(c, { C: g, B: 0, s: 0 }), 0) : a,
  wb = (...a) =>
    a.reduce((c, g) => {
      const k = [];
      if (c = vb(c), g) {
        g = vb(g);
        rb(c, q => q.u = qb(g, q, 1));
        rb(g, q => k.push([q, qb(c, q, -1)]));
        for (let [q, m] of k) {
          for (const v of m) {
            pb(c, v, q);
          }
        }
      }
      return c;
    }),
  T = (a, ...c) => {
    const g = m => {
        let v;
        return m.s && ((v = k.get(m.s)) ? (q.delete(v), m = g(m.s)) : k.set(m.s, m)), m;
      },
      k = new Map(),
      q = new Map();
    return a = ub(wb(ub(vb(a)), ...c)),
      rb(a, m => {
        for (const v of m.u) {
          q.set(g(v), v.B);
        }
      }),
      Array.from(q, ([{ C: m }, v]) => {
        const x = m.map(({ x: A, y: I, z: J }) => ({ x: A, y: I, z: J }));
        return hb(v ? x.reverse() : x, m.A, m.D);
      });
  },
  zb = NO_INLINE((a, c, g) => Za(a, c, 1 - Math.exp(-g * d))),
  Ab = () => {
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
      ][qa = Ia.reduce((a, { j: c }) => a + c, 0)] + " / XIII";
  },
  Bb = () => {
    localStorage.DanteSP22 = JSON.stringify([h.map(({ j: a }) => a), Ia.map(({ j: a }) => a), ra, b, za]);
  },
  Cb = (a, c, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (c + a) / (a - c), -1, 0, 0, 2 * c * a / (a - c), 0]),
  Fb = () => {
    let a, c, g, k, q, m, v, x, A, I, J, Q, B, f, l = !0;
    const w = [],
      z = () => {
        b4.innerHTML = "Music: " + l;
        ba || !l ? Db.disconnect() : Db.connect(Eb.destination);
      },
      E = () => {
        const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ia = Cb(0.3, 181, u, 1.732051);
        ja = [Cb(0.3, 55, u, 1.732051), Cb(55, 181, u, 1.732051)];
        k = x = void 0;
        w.length =
          da =
          f =
          Q =
          B =
          Ba =
          Ca =
            0;
      },
      F = (u, r = 0) => {
        if (ba !== u) {
          ba = u;
          fa = r;
          E();
          Ab();
          document.body.className = u ? "l m" : "l";
          try {
            u
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Db.start());
          } catch {
          }
          z();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => F(!1);
    b2.onclick = () => F(!1, 1);
    b5.onclick = () => F(!0);
    b4.onclick = () => {
      l = !l;
      z();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = u => {
      if (!ba && (u.target === hC && (da = 1), fa)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = u => {
      let r;
      u.repeat
        || (r = {
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
        }[u.code],
          (w[r] = !!u.type[5] && !0) && (0 === r && (da = 1), 1 === r && F(!0)));
    };
    onmousemove = ({ movementX: u, movementY: r }) => {
      fa && (u || r) && (Sa += 0.1 * u, Ra += 0.1 * r);
    };
    hC.ontouchstart = u => {
      if (!ba) {
        for (let { pageX: r, pageY: D, identifier: O } of u.changedTouches) {
          fa && r > hC.clientWidth / 2
            ? void 0 === x && (A = 0, m = r, v = D, x = O, I = Sa, J = Ra)
            : void 0 === k && (q = 0, c = r, g = D, k = O);
        }
        a = pa;
      }
    };
    hC.ontouchmove = u => {
      if (!ba) {
        for (let { pageX: X, pageY: P, identifier: C } of u.changedTouches) {
          var r, D, O, ca;
          x === C && (Sa = I + (X - m) / 2.3, Ra = J + (P - v) / 2.3, A = 1);
          k === C
            && (C = (c - X) / 20,
              r = n(C),
              D = (g - P) / 20,
              O = n(D),
              (ca = 0.5 < Va(r, O)) && (q = 1),
              Q = (ca && 0.2 < r) * p(C, -1),
              B = (ca && 0.2 < O) * p(D, -1),
              2 < r && (c = X + 20 * (0 > C ? -1 : 1)),
              2 < O && (g = P + 20 * (0 > D ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = u => {
      let r;
      document.activeElement === document.body && u.preventDefault();
      for (const D of u.changedTouches) {
        D.identifier === x
          ? (x = void 0, A || (r = 1), A = 0)
          : D.identifier === k
          ? (k = void 0, B = Q = 0, q || (r = 1), q = 0)
          : r = 1;
      }
      u.target === hC && r && a && 0.02 < (u = pa - a) && 0.7 > u && (da = 1);
    };
    ha = () => {
      Ba = B + (w[4] ? 1 : 0) - (w[5] ? 1 : 0);
      Ca = Q + (w[2] ? 1 : 0) - (w[3] ? 1 : 0);
      var u = navigator.getGamepads()[0];
      if (u) {
        const r = O => D[O]?.pressed || 0 < D[O]?.value ? 1 : 0, D = u.buttons;
        u = u.axes;
        fa && (Ra += d * Wa(u[3], 0.3) * 80, Sa += d * Wa(u[2], 0.3) * 80);
        Ba += r(12) - r(13) - Wa(u[1], 0.2);
        Ca += r(14) - r(15) - Wa(u[0], 0.2);
        r(9) && F(!0);
        (u = r(3) || r(2) || r(1) || r(0)) && !f && (da = 1);
        f = u;
      }
    };
    document.onvisibilitychange = onblur = onresize = E;
    F(!0);
  },
  U = NO_INLINE((a, c, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * c << 8 | 255 * a),
  W = (a, c = new DOMMatrix(), g) => ka.u.push(...N(a, c, g)),
  Y = (a, c = 1) => {
    const g = ka;
    c = { o: new DOMMatrix(), H: e.length, G: c, u: [] };
    return e.push(c), a(ka = c), ka = g, c;
  },
  Gb = a => (a = a.transformPoint(), Math.hypot(Ma.x - a.x, Ma.y - a.y, Ma.z - a.z)),
  Ib = a => {
    const c = ka,
      g = h.length,
      k = {
        j: 0,
        g: 0,
        i: 0,
        s: c,
        o: a,
        h() {
          k.g = zb(k.g, k.j, 4);
          k.i = zb(k.i, k.j, 1);
          eb(c.o).multiplySelf(a);
          da && 3 > Gb(db) && (0.3 > k.g || 0.7 < k.g)
            && (k.j = k.j ? 0 : 1, g && 1 / 0 > Ha && (Ha = b + 1, h4.innerHTML = "* click *"), ra = g, Bb());
          bb(db.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1), Hb, g + 13);
          Hb[16 * g + 223] = 1 - k.g;
        },
      };
    h.push(k);
    W(R(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    W(R(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    W(R(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
  },
  Jb = (a, ...c) => {
    let g = -1, k = 0, q = 0, m = 0, v = 0, x = 0, A = 1, I = 3;
    const J = {
        j: 0,
        h() {
          if (!J.j) {
            let ca, X, P, C, G, M, H, K = 1, y = 1 / 0;
            for (const S of f) {
              var { x: u, z: r, w: D } = S;
              r = (u = Math.hypot(w - u, z - r)) - D;
              H ||= u < D;
              0 < r && y > r && (y = r, l = S);
              K = Ua(K, u / D);
            }
            H
              || ({ x: O, z: ca, w: X } = l,
                P = w - O,
                C = z - ca,
                G = Math.hypot(P, C),
                M = Math.atan2(-C, P),
                A && (q = (Math.random() - 0.5) * Math.PI / 2, I = p(I / (1 + Math.random()))),
                M += q,
                g = -Math.cos(M),
                k = Math.sin(M),
                0.1 < G && (G = Ua(G, X) / (G || 1), w = P * G + O, z = C * G + ca));
            A = H;
            I = zb(I, 6 * (1 - K) + 3, K + 3);
            E = zb(E, w = zb(w, w + g, I), I);
            F = zb(F, z = zb(z, z + k, I), I);
            m = Ya(m, Math.atan2(E - v, F - x) / Qa - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > Gb(eb(Q.o).multiplySelf(a).translateSelf(v = E, 0, x = F).rotateSelf(0, m, 7 * Math.sin(1.7 * b)))
            ) {
              J.j = 1;
              var O = [
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
              ][qa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Ha && (Ha = b + (qa && 12 > qa ? 5 : 7), h4.innerHTML = O);
              Ab();
              Bb();
            }
          }
          J.j
            && eb(e[2].o).translateSelf(
              B % 4 * 1.2 - 1.7 + Math.sin(b + B) / 7,
              -2,
              1.7 * (B / 4 | 0) - 5.5 + n(B % 4 - 2) + Math.cos(b / 1.5 + B) / 6,
            );
          bb(db, Hb, B);
        },
      },
      Q = ka,
      B = Ia.length,
      f = c.map(([u, r, D]) => ({ x: u, z: r, w: D }));
    let l = f[0], { x: w, z } = l, E = w, F = z;
    Ia.push(J);
  },
  Kb = () => {
    let a, c, g, k, q, m, v, x, A, I, J, Q, B, f, l, w, z, E = 1, F = 2, u = 2;
    const r = () => {
        I = A = 0;
        for (let P = 32; 128 > P; P += 2) {
          let C = 0, G = 0, M = 0, H = 0;
          const K = 512 * P;
          for (let y = 1 & P; 128 > y; y += 2) {
            const S = K + 4 * y;
            let la = K + 4 * (127 - y);
            const oa = X[S] / 255, ma = X[1 + la] / 255, Da = 1 - n(y / 63.5 - 1);
            10 < y && 118 > y
              && (C = Va(C, Va(oa * Da, oa * X[la] / 255)), G = Va(G, Va(ma * Da, ma * X[1 + S] / 255)));
            (54 > y || 74 < y) && 1e-3 < (la = (1 - Da) * Va(oa, ma) / 3)
              && (64 > y && la > M ? M = la : 64 < y && la > H && (H = la));
          }
          n(H - M) > n(A) && (A = H - M);
          n(G - C) > n(I) && (I = G - C);
        }
      },
      D = () => {
        let P = 0, C = 0;
        var G = -1;
        let M = 0, H = 0, K = 0;
        for (let y = k = 0; 31 > y; ++y) {
          let S = 0;
          const la = 512 * y;
          for (let oa = 56; 456 > oa; oa += 4) {
            for (let ma = 0; 2 > ma; ++ma) {
              const Da = X[la + oa + ma], na = X[la + oa + ma + 2];
              Da && na && 255 > na
                && (S += Da / 255, 0 <= G && G !== y || (G = y, na === a ? ++M : H && H !== na || (H = na, ++K)));
            }
          }
          3 > S && 5 < y && (P += y / 32);
          3 < S && (7 < y && (C += y / 15), k = 1);
        }
        a = (G = K > 2 * M ? H : a) || c;
        c = G;
        u = zb(u, k ? 6.5 : -20 > Ta.y ? 11 : 8, 4);
        Ta.y += C / 41 - (k || u) * P / 41 * u * d;
      },
      O = () => (F ? h[ra].s : e[g && 1 === e[g].G && g || 0]).o,
      ca = (P, C, G, M) => Za(P, C, E || (p(n(C - P) ** 0.5 - G) + 1 / 7) * (1 - Math.exp(-(1.5 * M) * d))),
      X = new Uint8Array(65536);
    e[37].h = P => {
      var C = p(Ba, -1);
      let G = p(Ca, -1);
      var M = Wa(Math.hypot(C, G) ** 0.5, 0.1), H = Math.atan2(C, G);
      M && (q = 90 - H / Qa);
      m = Ya(m, q, 1 - Math.exp(-8 * d));
      v = zb(v, M, 10);
      C = M * n(C) * Math.sin(H);
      G = M * n(G) * Math.cos(H);
      Z.r9r(0, 0, 128, 128, 6408, 5121, X);
      NO_INLINE(D)();
      NO_INLINE(r)();
      var K = p(1 - 5 * Va(n(A), n(I)));
      B = zb(B, k * K * p(2 * M) * 7, k ? 0.1 < K ? 10 : 5 + 2 * M : 1);
      J = zb(J, 0, k ? 8 : 4);
      Q = zb(Q, 0, k ? 8 : 4);
      a && (K = 0);
      H = fa ? (180 - Sa) * Qa : 0;
      M =
        (A += d * (K * J + B * (G * Math.cos(H) - C * Math.sin(H))),
          I += d * (K * Q + B * (G * Math.sin(H) + C * Math.cos(H))),
          O());
      var { x: C, y: H, z: y } = 1 < F
        ? eb(h[ra].s.o).multiplySelf(h[ra].o).transformPoint({ x: 0, y: ra || 0.9 < ya ? 15 : 1, z: -2.4 })
        : (G = M,
          eb(G).invertSelf(),
          db.m41 = db.m42 = db.m43 = 0,
          y = db.transformPoint({ x: A, z: I, w: 0 }),
          Ta.x += y.x,
          Ta.z += y.z,
          G.transformPoint(Ta));
      if (
        a && (J = (C - Ma.x) / d, Q = (y - Ma.z) / d),
          Ma.x = C,
          Ma.y = H,
          Ma.z = y,
          (F = F && (k && a ? 0 : 1)) || a !== g
      ) {
        g = a, K = (M = O()).inverse().transformPoint(Ma), Ta.x = K.x, Ta.y = K.y, Ta.z = K.z;
      }
      x = zb(x, Aa * (27 < a && 32 > a), 2);
      H < (-20 > C || 109 > y ? -25 : -9) && (J = Q = B = 0, F = 2);
      1 === a && (h[9].j = -15 > C && 0 > y ? 1 : 0);
      f = Za(zb(f, H, 2), H, F || 8 * n(f - H));
      w = ca(w, f, 2, 1);
      l = ca(l, C, 0.5, 1);
      z = ca(z, y, 0.5, 1);
      fa
        ? (G = F + (1 - Math.exp(-18 * d)), Ea = Za(Ea, C, G), Fa = Za(Fa, f + 1.5, G), Ga = Za(Ga, y, G), Sa = Xa(Sa))
        : (Fa = ca(Fa, Va(w + p((-60 - y) / 8, 0, 20) + 13 + 9 * x, 6), 4, 2),
          Ga = ca(Ga, z + -18 + 5 * x, 1, 2 + x),
          Ea = ca(Ea, l, 1, 2 + x),
          M = Ua(-6, -n(z - Ga)),
          H = l - Ea,
          Sa = Ya(Sa, 90 - Xa(Math.atan2(M, H) / Qa), E + (1 - Math.exp(-10 * d))),
          Ra = Ya(Ra, 90 - Math.atan2(Math.hypot(M, H), Fa - w) / Qa, E + (1 - Math.exp(-10 * d))));
      Ra = p(Ra, -87, 87);
      E = 0;
      P.translateSelf(C, f + 0.124, y).rotateSelf(0, m);
    };
    [39, 38].map((P, C) =>
      e[P].h = G =>
        eb(e[37].o, G).translateSelf(0, v * p(0.45 * Math.sin(9.1 * b - Math.PI * C - Math.PI / 2))).rotateSelf(
          v * Math.sin(9.1 * b - Math.PI * C) * 0.25 / Qa,
          0,
        )
    );
  },
  Lb = (a, c = 35633) => (c = Z.c6x(c), Z.s3c(c, a), Z.c6a(c), c),
  Qb = (a, c) => {
    const g = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Lb(c, 35632)), Z.l8l(k), q => q ? g[q] || (g[q] = Z.gan(k, q)) : Z.u7y(k);
  },
  Sb = (a, c, g) => {
    let k;
    ba
      ? (k = fb(0, 40 * Math.sin(pa) - 70),
        bb(k, Rb, 37),
        bb(k, Rb, 38),
        bb(k, Rb, 39),
        Z.uae(a, !1, Rb),
        Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v))
      : (Z.uae(a, !1, Rb),
        Z.d97(4, (c ? e[39].F : e[37].v) - 3, 5123, 6),
        Z.uae(a, !1, Hb),
        Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, Ia.length),
        Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length));
  },
  Tb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Ub = a => Math.sin(a * Math.PI * 2),
  Vb = a => 0.5 > a % 1 ? 1 : -1,
  Wb = a => a % 1 * 2 - 1,
  Xb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  dc = a => {
    let c = 0;
    const g = () => {
        let v = 0;
        const x = K => {
            let y, S, la, oa = 0, ma = 0;
            const Da = [],
              na = new Int32Array(768 * K),
              Yb = 2 ** (r - 9) / K,
              Zb = Math.PI * 2 ** (P - 8) / K,
              xb = G * K & -2;
            for (let sb = 0; 11 >= sb; ++sb) {
              for (
                let tb = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + sb];
                32 > tb;
                ++tb
              ) {
                const Nb = (32 * sb + tb) * K;
                for (var Na = 0; 4 > Na; ++Na) {
                  if (y = 0, Mb && (y = A[Mb - 1].charCodeAt(tb + 32 * Na) - 40, y += 0 < y ? 106 : 0), y) {
                    var ea;
                    if (!(ea = Da[y])) {
                      ea = y;
                      let V = void 0, wa = void 0;
                      var Ob = y;
                      let $b = 0, ac = 0;
                      const bc = 2 > c ? Wb : Ub, cc = 2 > c ? 1 > c ? Vb : Xb : Ub, Pb = new Int32Array(z + E + H);
                      for (let Oa = 0, yb = 0; z + E + H > Oa; ++Oa, ++yb) {
                        let Pa = 1;
                        z > Oa ? Pa = Oa / z : z + E > Oa || (Pa = (1 - (Pa = (Oa - z - E) / H)) * 3 ** (-u / 16 * Pa));
                        0 > yb
                          || (yb -= 4 * K,
                            wa = 0.00396 * 2 ** ((Ob + J - 256) / 12),
                            V = 0.00396 * 2 ** ((Ob + f - 256) / 12) * (1 + (c ? 0 : 0.0072)));
                        Pb[Oa] = 80
                            * (bc($b += wa * Pa ** (Q / 32)) * I + cc(ac += V * Pa ** (l / 32)) * B
                              + (w ? (2 * Math.random() - 1) * w : 0))
                            * Pa | 0;
                      }
                      ea = Da[ea] = Pb;
                    }
                    for (let V = 0, wa = 2 * Nb; ea.length > V; ++V, wa += 2) {
                      na[wa] += ea[V];
                    }
                  }
                }
                for (let V, wa = 0; K > wa; ++wa) {
                  Na = 0;
                  ea = 2 * (Nb + wa);
                  var xa = (((V = na[ea]) || la)
                    && (S = 0.00308 * D,
                      1 !== c && 4 !== c || (S *= Math.sin(Yb * ea * Math.PI * 2) * M / 512 + 0.5),
                      S = 1.5 * Math.sin(S),
                      oa += S * ma,
                      xa = (1 - O / 255) * (V - ma) - oa,
                      ma += S * xa,
                      V = 4 === c ? ma : 3 === c ? xa : oa,
                      c || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5),
                      V *= ca / 32,
                      la = 1e-5 < V * V,
                      xa = Math.sin(Zb * ea) * X / 512 + 0.5,
                      Na = V * (1 - xa),
                      V *= xa),
                    ea < xb || (Na += na[1 + ea - xb] * C / 255, V += na[ea - xb] * C / 255),
                    v + ea >> 1);
                  q[xa] += (na[ea] = Na) / 65536;
                  m[xa] += (na[++ea] = V) / 65536;
                }
              }
            }
            v += 768 * K;
          },
          A = Ka[c],
          [I, J, Q, B, f, l, w, z, E, F, u, r, D, O, ca, X, P, C, G, M] = La[c],
          H = 4 * F ** 2;
        x(5513);
        x(4562);
        x(3891);
        Tb(5 > ++c ? g : a);
      },
      k = Eb.createBuffer(2, 5362944, 44100),
      q = k.getChannelData(0),
      m = k.getChannelData(1);
    Db.buffer = k;
    Db.loop = !0;
    Tb(g);
  },
  Eb = new AudioContext(),
  cb = new DOMMatrix(),
  db = new DOMMatrix(),
  ab = new Float32Array(16),
  Rb = new Float32Array(624),
  Hb = new Float32Array(624),
  ec = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Db = Eb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((c, g, k) => (c * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Tb(() => {
  let a = 0;
  const c = () => {
      if (2 == ++a) {
        const q = [new Float32Array(16), new Float32Array(16)],
          m = F => {
            Z.f1s();
            requestAnimationFrame(m);
            var u = (F - (aa || F)) / 1e3;
            if (pa += u, b += d = ba ? 0 : Ua(0.066, u), aa = F, 0 < d) {
              ha();
              Aa = $a(h[12].g, h[13].g);
              ua = Za(zb(ua, 0, 1), Xa(ua + 60 * d), h[5].g - h[6].i);
              sa = Za(zb(sa, 0, 5), Xa(sa + 56 * d), Aa);
              ta = Za(zb(ta, 0, 4), Xa(ta + 48 * d), Aa);
              za = zb(za, h[9].i, 0.2 + 0.3 * n(2 * h[9].i - 1));
              ya = zb(ya, va ? zb(ya, -9, 1.5) : p(b / 3), 1);
              Ha && b > Ha && (Ha = 0, h4.innerHTML = "");
              h[0].j && 0.8 < h[0].g && (13 > qa
                ? (1 / 0 > Ha && (Ha = b + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0)
                : va
                  || (1 / 0 > Ha
                    && (Ha = b + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                    va = 1));
              for (const D of e) {
                D.G && (D.h && D.h(eb(cb, D.o)), bb(D.o, Rb, D.H - 1));
              }
              for (const D of h) {
                D.h();
              }
              for (const D of Ia) {
                D.h();
              }
              Q();
              Z.b6o(36160, E);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: u, y: F, z: r } = Ma;
              Z.uae(Q("b"), !1, bb(eb().rotateSelf(0, 180).invertSelf().translateSelf(-u, -F, 0.3 - r)));
              Sb(Q("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(Q("b"), !1, bb(eb().translateSelf(-u, -F, -r - 0.3)));
              Sb(Q("c"), 0, 41);
              Z.f1s();
            }
            da = 0;
            eb(cb, v);
            ba
              ? v.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : v.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ea, -Fa, -Ga);
            I();
            Z.b6o(36160, w);
            Z.v5y(0, 0, 2048, 2048);
            l[0](54.7 * 1.1);
            l[1](126 * 1.1);
            B();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(B("a"), !1, bb(ia));
            Z.uae(B("b"), !1, bb(v));
            Z.uae(B("i"), !1, q[0]);
            Z.uae(B("j"), !1, q[1]);
            Z.ubu(B("k"), Ea, Fa, Ga);
            Sb(B("c"), !fa, 42);
            J();
            Z.ubu(J("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, pa);
            Z.ubu(J("k"), Ea, Fa, Ga);
            Z.uae(J("b"), !1, bb(eb(v).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, E);
            Z.f1s();
          },
          v = new DOMMatrix(),
          x = new DOMMatrix(),
          A = g;
        var k = Lb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const I = Qb(
            Lb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          J = Qb(
            Lb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          Q = Qb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),vec2(m.w/255.));}",
          ),
          B = Qb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          f = gb(8, () => ({})),
          l = gb(2, F => {
            const u = Z.c25();
            return Z.a4v(33984 + F),
              Z.b9j(3553, u),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              r => {
                let D = 0, O = 0, ca = 0, X = 1 / 0, P = -1 / 0, C = 1 / 0, G = -1 / 0, M = 1 / 0, H = -1 / 0;
                Z.fas(36160, 36096, 3553, u, 0);
                Z.c4s(256);
                eb().scale3dSelf(r).multiplySelf(eb(ja[F], x).multiplySelf(v).invertSelf());
                for (let K = 0; 8 > K; ++K) {
                  const y = f[K],
                    S = (y.x = 4 & K ? 1 : -1, y.y = 2 & K ? 1 : -1, y.z = 1 & K ? 1 : -1, db.transformPoint(y));
                  D -= y.x = (0 | S.x) / r / S.w;
                  O -= y.y = (0 | S.y) / r / S.w;
                  ca -= y.z = (0 | S.z) / r / S.w;
                }
                eb().rotateSelf(298, 139).translateSelf(D / 8, O / 8, ca / 8);
                for (r = 0; 8 > r; ++r) {
                  const { x: K, y, z: S } = db.transformPoint(f[r]);
                  X = Ua(X, K);
                  P = Va(P, K);
                  C = Ua(C, y);
                  G = Va(G, y);
                  M = Ua(M, S);
                  H = Va(H, S);
                }
                r = 10 + F;
                M *= 0 > M ? r : 1 / r;
                H *= 0 < H ? r : 1 / r;
                Z.uae(
                  I("b"),
                  !1,
                  bb(
                    eb(cb, x).scaleSelf(2 / (P - X), 2 / (G - C), 2 / (M - H)).translateSelf(
                      (P + X) / -2,
                      (G + C) / -2,
                      (M + H) / 2,
                    ).multiplySelf(db),
                    q[F],
                  ),
                );
                Sb(I("c"), !fa, 42);
              };
          }),
          w = Z.c5w();
        k = Z.c25();
        const z = Z.c3z(), E = Z.c5w();
        Q();
        Z.uae(Q("a"), !1, bb(Cb(1e-4, 1, 1.4, 0.59)));
        B();
        Z.ubh(B("q"), 2);
        Z.ubh(B("h"), 1);
        Z.ubh(B("g"), 0);
        J();
        Z.ubh(J("q"), 2);
        Z.b6o(36160, w);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, E);
        Z.bb1(36161, z);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, z);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, A);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        NO_INLINE(Fb)();
        NO_INLINE(Kb)();
        requestAnimationFrame(m);
      }
    },
    g = new Image();
  g.onload = g.onerror = c;
  g.src = ec;
  NO_INLINE(dc)(() => {
    Tb(() => {
      let m, v = 0;
      const x = [],
        A = [],
        I = [],
        J = [],
        Q = z => {
          let { x: E, y: F, z: u } = m[z], r = (w[0] = E, w[1] = F, w[2] = u, z = "" + (m.D ? l : B), f.get(z));
          return void 0 !== r
            ? (E = 3 * r, J[E] = (J[E++] + B[5]) / 2, J[E] = (J[E++] + B[6]) / 2, J[E] = (J[E] + B[7]) / 2)
            : (f.set(z, r = f.size), A.push(E, F, u, w[3]), I.push(B[4]), J.push(B[5], B[6], B[7])),
            r;
        },
        B = new Int32Array(8),
        f = new Map(),
        l = new Int32Array(B.buffer, 0, 5),
        w = new Float32Array(B.buffer);
      for (const z of e) {
        for (m of (w[3] = 40 === z.H ? -14 : z.G && z.H, z.u)) {
          const { x: E, y: F, z: u } = nb(m);
          B[4] = 0 | m.A;
          B[5] = 32767 * E;
          B[6] = 32767 * F;
          B[7] = 32767 * u;
          for (let r = 2, D = Q(0), O = Q(1); m.length > r; ++r) {
            x.push(D, O, O = Q(r));
          }
        }
        z.u = null;
        z.v = v;
        z.F = v = x.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(A), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(J), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(I), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(x), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Tb(c);
      try {
        const [z, E, F, u, r] = JSON.parse(localStorage.DanteSP22);
        h.map((D, O) => D.g = D.i = D.j = O ? 0 | z[O] : 0);
        Ia.map((D, O) => D.j = 0 | E[O]);
        ra = F;
        za = r;
        b = u;
        d = 0;
      } catch {
      }
      ya = p(ra);
    });
    const k = gb(11, m => t(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10)),
      q = gb(10, m => kb(ib(jb(18), k[m]).reverse(), ib(jb(18), k[m + 1]), 1)).flat();
    Y(() => W([Ja.slice(1)], t(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const m = (f, l, w) =>
          Y(z => {
            z.h = E => E.translateSelf(A() * Math.sin(3 * f + b * f) * l);
            Ja.map(({ x: E, z: F }) => {
              W(R(11, 1), t(4 * E, 4, w + 4 * F).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6));
              W(R(), t(4 * E, 7, w + 4 * F).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
            });
            W(T(
              N(R(), t(0, 0, w).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(E => N(R(), t(5 * E, 0.2, w).rotate(-30 * E).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3))),
            ));
            W(R(), t(0, -3, w).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
          }),
        v = (f, l, w, z) =>
          f.translateSelf(l + Math.sin(b + 2) / 5, w + Math.sin(0.8 * b) / 3, z).rotateSelf(
            2 * Math.sin(b),
            Math.sin(0.7 * b),
            Math.sin(0.9 * b),
          ),
        x = f =>
          T(
            N(R(), t(0, -f / 2).scale(6, f - 1, 2.2)),
            N(R(), t(0, -f / 2 - 6).scale(4, f - 3, 4)),
            N(R(32, 1), t(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        A = () => Ua(h[2].i, 1 - h[4].i),
        I = T(
          N(R(30, 1, 1.15, 1), t(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7)),
          N(R(30, 1, 1.3, 1), t(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2)),
          N(R(), t(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),
        ),
        J = gb(7, f => N(R(6, 1), t(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38))).flat(),
        Q = (Y(f => {
          f.h = l => v(l, -12, 4.2, 40 * ya - 66);
          W(I);
          Ib(t(0, -3, 4));
        }),
          Ib(t(-5.4, 1.5, -19).rotate(0, -90)),
          Jb(t(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Jb(t(0, 2.8), [5, 10, 3], [-5, 10, 3], ...jb(18).map(({ x: f, z: l }) => [7 * f, 10 * l, 4.5 - 2 * n(f)])),
          W(R(), t(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
          Ja.map(({ x: f, z: l }) => W(R(6), t(3 * f, 3, 15 * l).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))),
          W(R(), t(0, 0, -23).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)),
          W(R(), t(0, 0, 22).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map((f, l) => {
            W(R(), t(0, 6.3, f).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
            W(R(), t(0, 1, f).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
            Y(w => {
              w.h = z => z.translateSelf(0, 0, f).scaleSelf(1, p(1.22 - h[l + 1].g), 1);
              W(J);
            });
          }),
          gb(5, f =>
            gb(2, l =>
              W(
                q,
                t(18.5 * (l - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * l).scale(1.2, 10, 1.2),
                U(1, 1, 0.8, 0.2),
              ))),
          W(R(), t(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)),
          W(R(), t(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2)),
          W(R(5), t(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4)),
          W(R(), fb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5)),
          W(T(
            wb(
              N(R(6, 0, 0, 0.3), t(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2)),
              N(R(6), t(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)),
              N(R(6, 0, 0, 0.3), t(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2)),
            ),
            N(R(5), L(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)),
            N(R(5, 0, 1.5), t(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2)),
            N(R(), fb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5)),
            N(R(6), t(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5)),
          )),
          Y(f => {
            f.h = l =>
              l.translateSelf(
                0,
                0.01 < h[3].g ? (5 * Math.cos(1.5 * b) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500,
                0,
              );
            W(R(5), t(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
            Ib(t(0, 1.2));
          }),
          Ib(t(15, -2, 4)),
          m(0.7, 12, 35),
          m(1, 8.2, 55),
          Y(f => {
            f.h = l => l.translateSelf(A() * Math.sin(b / 1.5 + 2) * 12);
            W(
              T(
                wb(
                  N(R(), L(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  N(R(6), L(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  N(R(), t(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5)),
                  N(R(16, 1, 0, 4), L(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2)),
                ),
                N(R(), L(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),
              ),
              t(0, 0, 45),
            );
            Jb(t(0, 2.8, 45), [0, 0, 4.5]);
          }),
          W(R(), t(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
          Y(f => {
            f.h = l => l.translateSelf(9.8 * (1 - A()));
            W(R(3), t(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
            W(R(8), t(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
            W(R(), t(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
            W(R(), t(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
            Ib(t(-23, -0.5, 66.5));
          }),
          Y(f => {
            f.h = l => l.translateSelf(0, p(1 - 5 * A()) * $a(h[4].g, h[5].g) * Math.sin(1.35 * b) * 4);
            W(R(), t(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
            W(T(N(R(), L(3, 1.4, 2.7)), N(R(), L(1.2, 8, 1.2))), t(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2));
          }),
          Y(f => {
            f.h = l => l.translateSelf(0, 0, p(1 - 5 * A()) * $a(h[4].g, h[5].g) * Math.sin(0.9 * b) * 8);
            W(T(
              N(R(), t(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
              N(R(), t(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),
            ));
            W(R(), t(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
          }),
          Y(f => {
            f.h = l => l.translateSelf(0, -6.5 * h[4].i);
            W(R(6), t(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4));
          }),
          Ib(t(-55, -1.1, 46).rotate(0, 90)),
          W(R(6), t(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)),
          W(R(7), t(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)),
          [
            ...N(R(), t(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)),
            ...T(
              N(R(6), fb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)),
              N(R(4, 0, 0.01), t(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3)),
              N(R(6), fb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => N(R(5), t(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        B = (W(Q, t(-53, 0, 55)),
          Y(f => {
            f.h = l => l.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ua, 0);
            W(Q);
          }, 2),
          W(R(), t(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2)),
          W(R(3, 0, -0.5), t(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2)),
          W(T(
            wb(
              N(R(), t(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), t(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), t(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), t(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2)),
              N(R(6), t(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3)),
              N(R(), t(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), t(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2)),
            ),
            N(R(8), t(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4)),
            N(R(8), t(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5)),
            N(R(8), t(-100, -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5)),
          )),
          Jb(t(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Jb(t(-89, 0.2, 80), [0, 0, 6]),
          W(T(
            N(R(), t(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)),
            N(R(), t(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4)),
            N(R(20, 1), t(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4)),
          )),
          Y(f => {
            f.h = l => l.translateSelf(-99.7, -1.9, 63.5).scale(1, p(1.1 - h[6].g), 1);
            W(J);
          }),
          Ja.map(({ x: f, z: l }) => {
            W(R(6), t(7 * f - 100, -3, 7 * l + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(w => W(R(6), t(7 * f - 100, w, 7 * l + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8)));
          }),
          gb(7, f => {
            W(
              R((23 * f + 1) % 5 + 5, 0, 0.55),
              t(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              U(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          W(R(), t(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)),
          W(R(4), t(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)),
          W(R(12, 1), t(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)),
          Ib(t(-86, -7.5, 31)),
          Y(f => {
            f.h = l => l.translateSelf(0, 3.5 * (1 - Va(h[6].g, h[7].g)) + $a(h[7].i, h[6].i) * Math.sin(b) * 5);
            [0, 12, 24].map(l => W(R(), t(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2)));
          }),
          Y(f => {
            f.h = l =>
              l.translateSelf(
                0,
                $a(h[7].i, h[6].i) * Math.sin(b + 3) * 6,
                6 * Math.sin(0.6 * b + 1) * $a(h[7].i, h[6].i),
              );
            [6, 18].map(l => W(R(), t(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2)));
          }),
          W(
            T(
              wb(
                N(R(5), t(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3)),
                N(R(5), L(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),
                N(R(), L(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),
              ),
              N(R(5), L(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),
            ),
            t(-38.9, -11.3, 17),
          ),
          Ib(t(-38.9, -9.6, 10)),
          Y(f => {
            f.h = l => l.translateSelf(0, -7.3 * h[7].i);
            W(
              T(
                wb(
                  N(R(5), t(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5)),
                  N(R(5), t(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5)),
                  N(R(5), t(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5)),
                ),
                N(R(5), L(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)),
                N(R(5), t(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5)),
              ),
              t(-38.9, -11.3, 17),
            );
            Jb(t(-39.1, -0.6, 17).rotate(11), ...jb(15).map(({ x: l, z: w }) => [3 * l, 3 * w, 1.2]));
          }),
          Ja.map(({ x: f, z: l }) => {
            W(R(14, 1), t(9 * f - 38.9, -7.3, 11 * l + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(w =>
              W(R(17, 1), t(9 * f - 38.9, w - 11.3, 11 * l + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3))
            );
          }),
          W(
            T(
              wb(
                N(R(6), t(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3)),
                N(R(), t(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3)),
              ),
              ...gb(6, f =>
                gb(6, l =>
                  N(
                    R(6),
                    t(4.6 * l - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * l)).scale(2, 5, 2),
                    U(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            t(-38.9, -11.3, 17),
          ),
          Jb(t(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          W(R(5), t(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4)),
          Ib(t(-84, -0.5, 85).rotate(0, 45)),
          Y(f => {
            f.h = l => v(l, -123, 1.4, 55 + -65 * za);
            W(I);
            Ib(t(0, -3, -4).rotate(0, 180));
          }),
          T(
            N(R(), t(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3)),
            N(R(3), t(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => N(R(), t(f, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3))),
          ));
      Y(f => {
        f.h = l => l.translateSelf(0, -2, $a(h[10].g, h[11].g) * n(Math.sin(1.1 * b)) * -8.5 + 10);
        gb(2, l => W(B, t(9 * l - 110 + (1 & l), 1.7, -12)));
      });
      Y(f => {
        f.h = l => l.translateSelf(0, -2, $a(h[10].g, h[11].g) * n(Math.sin(2.1 * b)) * -8.5 + 10);
        gb(2, l => W(B, t(9 * (l + 2) - 110 + (1 & l), 1.7, -12)));
      });
      Y(f => {
        f.h = l =>
          l.translateSelf(
            0,
            -2,
            -8.5 * Va((1 - h[10].g) * (1 - $a(h[10].g, h[11].g)), $a(h[10].g, h[11].g) * n(Math.sin(1.5 * b))) + 10,
          );
        gb(3, l => W(B, t(9 * l - 106, 1.7, -12)));
      });
      W(
        T(
          wb(N(R(), t(26.5, -1.6, 10).scale(20, 2.08, 3)), N(R(), t(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...gb(4, f => N(R(), t(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...gb(3, f => N(R(), t(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        t(-123, 0, -12),
        U(0.5, 0.5, 0.6, 0.2),
      );
      Ib(t(-116, -1.4, -18).rotate(0, 180));
      W(R(), t(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2));
      W(R(6), t(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      W(R(), t(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      W(R(8), t(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      W(R(8), t(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      W(R(), t(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      gb(3, f => {
        W(x(16), t(12 * f - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        W(x(16), t(-77, -9, -12 * f - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3));
      });
      W(T(
        N(R(12), t(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2)),
        N(R(), t(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2)),
        N(R(), t(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2)),
        N(R(12), t(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2)),
      ));
      W(R(), t(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3));
      W(R(9), t(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      W(T(
        N(R(), t(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1)),
        N(R(9), t(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2)),
      ));
      Ib(t(-98, -4.4, -40).rotate(0, 90));
      Jb(t(-115, 0.2, -12), [0, 0, 3.5]);
      Jb(t(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      W(T(
        wb(
          N(R(6, 0, 0, 0.6), t(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2)),
          N(R(), t(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2)),
        ),
        N(R(5), t(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2)),
      ));
      gb(4, f =>
        Y(l => {
          l.h = w => {
            const z = $a(h[8].i, h[12].i);
            w.translateSelf(
              (2 < f ? 2 * (1 - z) + z : 0) - 100,
              z * Math.sin(1.3 * b + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + Va(z, 0.05) * Math.cos(1.3 * b + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          W(
            R(6),
            t(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            U(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      Y(f => {
        f.h = l => {
          const w = $a(h[8].i, h[12].i);
          l.translateSelf(2.5 * (1 - w) - 139.7, -3 * (1 - h[8].g) + w * Math.sin(0.8 * b) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * b) * (3 * w + 3),
            0,
          );
        };
        W(T(N(R(10), L(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), N(R(10), L(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5))));
        W(R(15, 1), t(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3));
        W(R(10), t(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        W(R(5), t(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        Ib(t(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(l => W(q, fb(90 * l, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2)));
        Jb(t(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      Y(f => {
        f.h = l => l.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        W(J);
      });
      [-1, 1].map(f => {
        [7.2, 1.5].map(l => W(R(15, 1), t(-7.5 * f - 100, l + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4)));
        W(q, t(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), U(1, 1, 0.8));
        W(R(12, 1), t(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5));
        W(
          T(
            N(R(), t(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4)),
            N(R(), L(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)),
            N(R(28, 1), t(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5)),
            N(R(5), t(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5)),
            N(R(5), t(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5)),
          ),
          t(f - 100, 0.7, 97),
        );
      });
      W(T(
        N(R(), t(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1)),
        N(R(45, 1), t(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1)),
      ));
      Y(f => {
        f.h = l => l.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
        W(T(
          N(R(45, 1), L(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),
          N(R(), t(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2)),
        ));
        W(R(8), t(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        W(R(5), t(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Jb(t(0, 3), ...jb(14).map(({ x: l, z: w }) => [5.6 * l, 5.6 * w, 2]));
      });
      Y(f => {
        f.h = l => l.translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
        [-1, 1].map(l =>
          W(q, fb(0, 90).translate(-5 * l, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * l + 90), U(1, 1, 0.8))
        );
        W(T(N(R(28, 1), t(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)), N(R(), L(9, 5, 2), U(0.3, 0, 0, 0.3))));
        W(N(R(28, 1), L(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        W(N(R(5), t(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
        W(T(
          N(R(28, 1), t(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          N(R(), t(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          N(R(), t(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        W(N(R(28, 1), L(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        W(N(R(5), t(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
        W(T(
          N(R(28, 1), t(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          N(R(), t(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          N(R(), t(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        W(N(R(28, 1), L(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        W(N(R(5), t(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      W(R(), t(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      W(R(), t(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      W(R(), t(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      W(R(), t(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      Ib(t(-34, 2.7, 96).rotate(-12, 0));
      W(R(5), t(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6));
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((f, l) =>
        Y(w => {
          w.h = z => {
            z.translateSelf(
              0,
              (1 - h[13].i) * (1 - h[14].i) * (l ? 0 : 3) + $a(h[13].i, h[14].i) * Math.sin(1.5 * b + 1.5 * l) * 4,
            );
          };
          W(R(), t(-23.5, 0.5, 91 + 6.8 * l).scale(1 === l ? 2 : 3.3, 1, 3.3), f);
          2 === l && W(R(), t(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
          1 === l && W(R(), t(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => W(q, t(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), U(1, 1, 0.8)));
      gb(
        3,
        f =>
          W(
            x(24.7 - 0.7 * (1 & f)),
            t(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),
          ),
      );
      W(T(
        N(R(6, 0, 0, 0.3), t(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2)),
        N(R(5), t(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),
      ));
      Ib(t(0, 1.7, 82).rotate(0, 180));
      W(R(5), t(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4));
      W(R(6), t(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3));
      W(R(), t(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      W(R(7), t(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      W(T(
        wb(
          N(R(), t(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4)),
          N(R(), t(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4)),
        ),
        N(R(5), t(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4)),
      ));
      Y(f => {
        f.h = l => l.translateSelf(-2 * Math.sin(b)).rotate(25 * Math.sin(b));
        W(R(3), t(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(l => {
          W(R(6), t(0, 16, l + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4));
          W(R(), t(0, 6.2, l + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4));
        });
      });
      Y(f => {
        f.h = l => {
          const w = $a($a((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          l.translateSelf(0, 16 * w, 8.5 * p(2 * w - 1) + 95);
        };
        W(R(5), L(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        W(R(5), L(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        Ib(t(0, 1.5, -1).rotate(0, 180));
      });
      Jb(t(0, 3, 95), ...jb(9).map(({ x: f, z: l }) => [9 * f, 9 * l, 4]));
      Jb(t(0, 19, 134), [0, 0, 3.5]);
    });
    Y(() => {
      W(lb(20), t(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      W(lb(30), L(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
      W(R(), t(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        W(q, fb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8));
        W(
          N(T(R(15, 1), N(R(), t(0, 0, 1).scale(2, 2, 0.5))), fb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3)),
          t(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        Y(() => {
          W(R(20, 1), t(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      W(R(6, 1), L(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      W(R(10), t(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      W(R(3), t(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1));
    }, 0);
    Y(() => {
      W(R(6).slice(0, -1), L(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      W(
        lb(30, 24, (m, v, x) => {
          const A = v / 24, I = m * Math.PI * 2 / 30, J = Math.sin(A ** 0.6 * Math.PI / 2);
          m = A * A * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < v
            ? { x: x.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(I) * J,
              y: Math.cos(A * Math.PI) - A - m,
              z: Math.sin(I) * J + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        L(0.7, 0.7, 0.7),
        U(1, 1, 1),
      );
      [-1, 1].map(m => W(lb(12), t(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
