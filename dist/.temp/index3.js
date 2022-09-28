let aa,
  ba,
  ea,
  ha,
  ja,
  ka,
  la,
  ma,
  na,
  oa,
  qa = 0,
  ra = 0,
  c = 0,
  ta = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 1,
  d = 0.066;
const e = [],
  h = [],
  Ja = [],
  Na = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Oa = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Pa = { x: 0, y: 0, z: 0 };
var Qa = 0, Ra = 180;
const Sa = (a, b) => Array.from(Array(a), (g, m) => b(m)),
  Ta = Math.PI / 180,
  Ua = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Wa = {},
  Xa = { x: 0, y: 0, z: 0 },
  cb = () => {
    Ca = Ya(h[12].g, h[13].g);
    ya = n(n(ya, 0, 1 - Math.exp(-1 * d)), Za(ya + 60 * d), h[5].g - h[6].i);
    wa = n(n(wa, 0, 1 - Math.exp(-5 * d)), Za(wa + 56 * d), Ca);
    xa = n(n(xa, 0, 1 - Math.exp(-4 * d)), Za(xa + 48 * d), Ca);
    var a = 0.2 + 0.3 * p(2 * h[9].i - 1);
    Ba = n(Ba, h[9].i, 1 - Math.exp(-a * d));
    Aa = n(Aa, za ? n(Aa, -9, 1 - Math.exp(-1.5 * d)) : $a(c / 3), 1 - Math.exp(-1 * d));
    Ia && c > Ia && (Ia = 0, h4.innerHTML = "");
    h[0].j && 0.8 < h[0].g && (13 > qa
      ? (1 / 0 > Ia && (Ia = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0)
      : za
        || (1 / 0 > Ia && (Ia = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          za = 1));
    for (const b of e) {
      b.h(ab(bb, b.l));
    }
    for (const b of h) {
      b.h();
    }
    for (const b of Ja) {
      b.h();
    }
  },
  db = () => {
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
      ][qa = Ja.reduce((a, { j: b }) => a + b, 0)] + " / XIII";
  },
  eb = () => {
    localStorage.I = JSON.stringify([h.map(({ j: a }) => a), Ja.map(({ j: a }) => a), ta, c, Ba]);
  },
  fb = NO_INLINE((a, b, g, m) =>
    new DOMMatrix([g, 0, 0, 0, 0, m, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0])
  ),
  jb = () => {
    let a, b, g, m, q, l, u, v, w, z, A, M, B, f, k = !0;
    const r = [],
      x = () => {
        b4.innerHTML = "Music: " + k;
        aa || !k ? gb.disconnect() : gb.connect(hb.destination);
      },
      D = () => {
        const y = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ka = fb(0.3, 181, y, 1.732051);
        la = fb(0.3, 55, y, 1.732051);
        ma = fb(55, 181, y, 1.732051);
        m = v = void 0;
        r.length =
          ea =
          M =
          Ea =
          B =
          f =
            0;
        document.hidden && I(!0);
      },
      I = (y, C = 0) => {
        if (aa !== y) {
          aa = y;
          ha = C;
          D();
          db();
          document.body.className = y ? "l m" : "l";
          try {
            y
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), gb.start());
          } catch {
          }
          x();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => I(!1);
    b2.onclick = () => I(!1, 1);
    b5.onclick = () => I(!0);
    b4.onclick = () => {
      k = !k;
      x();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.I = "", location.reload());
    };
    onclick = y => {
      if (!aa && (y.target === hC && (ea = 1), ha)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = y => {
      let C;
      y.repeat
        || (C = !!y.type[5] && !0,
          y = {
            KeyA: 1,
            ArrowLeft: 1,
            KeyW: 3,
            ArrowUp: 3,
            KeyD: 2,
            ArrowRight: 2,
            KeyS: 4,
            ArrowDown: 4,
            KeyE: 0,
            Space: 0,
            Enter: 0,
            Escape: 5,
          }[y.code],
          (r[y] = C) && (0 === y && (ea = 1), 5 === y && I(!0)));
    };
    onmousemove = ({ movementX: y, movementY: C }) => {
      ha && (y || C) && (Ra += 0.1 * y, Qa += 0.1 * C);
    };
    hC.ontouchstart = y => {
      if (!aa) {
        for (let { pageX: C, pageY: J, identifier: K } of y.changedTouches) {
          ha && C > hC.clientWidth / 2
            ? void 0 === v && (w = 0, l = C, u = J, v = K, z = Ra, A = Qa)
            : void 0 === m && (q = 0, b = C, g = J, m = K);
        }
        a = ra;
      }
    };
    hC.ontouchmove = y => {
      if (!aa) {
        for (let { pageX: Y, pageY: F, identifier: E } of y.changedTouches) {
          var C, J, K, R, ca;
          v === E && (Ra = z + (Y - l) / 2.3, Qa = A + (F - u) / 2.3, w = 1);
          m === E
            && (E = (b - Y) / 20,
              C = (g - F) / 20,
              J = p(E),
              K = p(C),
              R = Math.atan2(C, E),
              ca = $a(Math.hypot(C, E) - 0.5),
              B = 0.2 < J ? Math.cos(R) * ca : 0,
              f = 0.2 < K ? Math.sin(R) * ca : 0,
              (B || f) && (q = 1),
              2 < J && (b = Y + 20 * (0 > E ? -1 : 1)),
              2 < K && (g = F + 20 * (0 > C ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = y => {
      let C;
      document.activeElement === document.body && y.preventDefault();
      for (const J of y.changedTouches) {
        J.identifier === v
          ? (v = void 0, w || (C = 1), w = 0)
          : J.identifier === m
          ? (m = void 0, f = B = 0, q || (C = 1), q = 0)
          : C = 1;
      }
      y.target === hC && C && a && 0.02 < (y = ra - a) && 0.7 > y && (r[0] = !0);
    };
    ja = () => {
      let y = f + (r[3] ? 1 : 0) - (r[4] ? 1 : 0),
        C = B + (r[1] ? 1 : 0) - (r[2] ? 1 : 0),
        J = navigator.getGamepads()[0];
      if (J) {
        const K = Y => R[Y]?.pressed || 0 < R[Y]?.value ? 1 : 0, R = J.buttons, ca = J.axes;
        J = K(3) || K(2) || K(1) || K(0);
        y += K(12) - K(13) - ib(ca[1], 0.2);
        C += K(14) - K(15) - ib(ca[0], 0.2);
        K(9) && I(!0);
        ha && (Qa += d * ib(ca[3], 0.3) * 80, Ra += d * ib(ca[2], 0.3) * 80);
        J && !M && (ea = 1);
        M = J;
      }
      Da = Math.atan2(y, C);
      Ea = ib($a(Math.hypot(y, C)), 0.05);
    };
    document.onvisibilitychange = onblur = onresize = D;
    I(!0);
  },
  t = NO_INLINE((a, b, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  G = (a, b = 1) => {
    const g = na;
    b = {
      l: new DOMMatrix(),
      H: e.length,
      G: b,
      s: [],
      h() {
      },
    };
    return e.push(b), a(na = b), na = g, b;
  },
  L = (a, b = new DOMMatrix(), g) => na.s.push(...H(a, b, g)),
  lb = a => {
    const b = new DOMMatrix(),
      g = new DOMMatrix(),
      m = na,
      q = h.length,
      l = {
        j: 0,
        g: 0,
        i: 0,
        u: m,
        J: b,
        l: g,
        h() {
          ab(ab(m.l, b).multiplySelf(a), g).rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
          l.g = n(l.g, l.j, 1 - Math.exp(-4 * d));
          l.i = n(l.i, l.j, 1 - Math.exp(-1 * d));
          ea && 3 > kb(b.transformPoint()) && (0.3 > l.g || 0.7 < l.g)
            && (l.j = l.j ? 0 : 1, q && 1 / 0 > Ia && (Ia = c + 1, h4.innerHTML = "* click *"), ta = q, eb());
        },
      };
    h.push(l);
    L(P(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), t(0.4, 0.5, 0.5));
    L(P(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), t(0.4, 0.5, 0.5));
    L(P(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), t(0.5, 0.5, 0.4));
  },
  ob = (a, ...b) => {
    let g = -1, m = 0, q = 0, l = 0, u = 0, v = 0, w = 1, z = 3;
    const A = new DOMMatrix(), M = na, B = Ja.length, f = b.map(([C, J, K]) => ({ x: C, z: J, w: K }));
    let k = f[0], { x: r, z: x } = k, D = r, I = x;
    const y = {
      j: 0,
      l: A,
      h() {
        if (!y.j) {
          let ca, Y, F, E, S, N, O, W = 1, U = 1 / 0;
          for (const sa of f) {
            var { x: C, z: J, w: K } = sa;
            J = (C = Math.hypot(r - C, x - J)) - K;
            O ||= C < K;
            0 < J && U > J && (U = J, k = sa);
            W = mb(W, C / K);
          }
          O
            || ({ x: ca, z: Y, w: F } = k,
              E = r - ca,
              S = x - Y,
              N = Math.hypot(E, S),
              R = Math.atan2(-S, E),
              w && (q = (Math.random() - 0.5) * Math.PI / 2, z = $a(z / (1 + Math.random()))),
              R += q,
              g = -Math.cos(R),
              m = Math.sin(R),
              0.1 < N && (N = mb(N, F) / (N || 1), r = E * N + ca, x = S * N + Y));
          w = O;
          z = n(z, 6 * (1 - W) + 3, 1 - Math.exp(-(W + 3) * d));
          R = r = n(r, r + g, 1 - Math.exp(-z * d));
          D = n(D, R, 1 - Math.exp(-z * d));
          R = x = n(x, x + m, 1 - Math.exp(-z * d));
          I = n(I, R, 1 - Math.exp(-z * d));
          l = nb(l, Math.atan2(D - u, I - v) / Ta - 180, 1 - Math.exp(-3 * d));
          u = D;
          v = I;
          var R = ab(M.l, A).multiplySelf(a).translateSelf(D, 0, I).rotateSelf(0, l, 7 * Math.sin(1.7 * c))
            .transformPoint();
          1.6 > kb(R)
            && (y.j = 1,
              R = [
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
              ][qa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              1 / 0 > Ia && (Ia = c + (qa && 12 > qa ? 5 : 7), h4.innerHTML = R),
              db(),
              eb());
        }
        y.j
          && ab(e[2].l, A).translateSelf(
            B % 4 * 1.2 - 1.7 + Math.sin(c + B) / 7,
            -2,
            1.7 * (B / 4 | 0) - 5.5 + p(B % 4 - 2) + Math.cos(c / 1.5 + B) / 6,
          );
      },
    };
    Ja.push(y);
  },
  sb = (a, b, g, m) => {
    let q = 0, l = 0, u = 0, v = 1 / 0, w = -1 / 0, z = 1 / 0, A = -1 / 0, M = 1 / 0, B = -1 / 0;
    ab().scale3dSelf(g).multiplySelf(b.multiply(a).invertSelf());
    for (a = 0; 8 > a; ++a) {
      Wa.x = 4 & a ? 1 : -1;
      Wa.y = 2 & a ? 1 : -1;
      Wa.z = 1 & a ? 1 : -1;
      b = pb.transformPoint(Wa);
      const f = g * b.w;
      q -= qb[a].x = (0 | b.x) / f;
      l -= qb[a].y = (0 | b.y) / f;
      u -= qb[a].z = (0 | b.z) / f;
    }
    ab().rotateSelf(298, 139).translateSelf(q / 8, l / 8, u / 8);
    for (g = 0; 8 > g; ++g) {
      const { x: f, y: k, z: r } = pb.transformPoint(qb[g]);
      v = mb(v, f);
      w = rb(w, f);
      z = mb(z, k);
      A = rb(A, k);
      M = mb(M, r);
      B = rb(B, r);
    }
    return M *= 0 > M ? m : 1 / m,
      B *= 0 < B ? m : 1 / m,
      Q(2 / (w - v), 2 / (A - z), 2 / (M - B)).translateSelf((w + v) / -2, (A + z) / -2, (M + B) / 2).multiplySelf(pb);
  },
  mb = NO_INLINE((a, b) => a < b ? a : b),
  rb = NO_INLINE((a, b) => b < a ? a : b),
  p = NO_INLINE(a => 0 > a ? -a : a),
  $a = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  ib = (a, b) => p(a) > b ? a : 0,
  n = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0,
  Ya = (a, b) => (a = $a(a), n(a, 1 - a, b)),
  Za = a => Math.atan2(Math.sin(a *= Ta), Math.cos(a)) / Ta,
  nb = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * $a(g) || 0,
  kb = ({ x: a, y: b, z: g }) => Math.hypot(a - Pa.x, b - Pa.y, g - Pa.z),
  vb = ({ x: a, y: b, z: g }, m) => a * m.x + b * m.y + g * m.z,
  wb = a => {
    let b, g = 0, m = 0, q = 0, l = a.at(-1);
    for (b of a) {
      g += (l.y - b.y) * (l.z + b.z), m += (l.z - b.z) * (l.x + b.x), q += (l.x - b.x) * (l.y + b.y), l = b;
    }
    return b = Math.hypot(g, m, q), g /= b, m /= b, q /= b, { x: g, y: m, z: q, w: g * l.x + m * l.y + q * l.z };
  },
  Ab = (
    a,
    b = xb,
    g = 0,
  ) => (g *= 16,
    b[g++] = a.m11,
    b[g++] = a.m12,
    b[g++] = a.m13,
    b[g++] = a.m14,
    b[g++] = a.m21,
    b[g++] = a.m22,
    b[g++] = a.m23,
    b[g++] = a.m24,
    b[g++] = a.m31,
    b[g++] = a.m32,
    b[g++] = a.m33,
    b[g++] = a.m34,
    b[g++] = a.m41,
    b[g++] = a.m42,
    b[g++] = a.m43,
    b[g] = a.m44,
    b),
  ab = (
    a = bb,
    b = pb,
  ) => (b.m11 = a.m11,
    b.m12 = a.m12,
    b.m13 = a.m13,
    b.m14 = a.m14,
    b.m21 = a.m21,
    b.m22 = a.m22,
    b.m23 = a.m23,
    b.m24 = a.m24,
    b.m31 = a.m31,
    b.m32 = a.m32,
    b.m33 = a.m33,
    b.m34 = a.m34,
    b.m41 = a.m41,
    b.m42 = a.m42,
    b.m43 = a.m43,
    b.m44 = a.m44,
    b),
  T = NO_INLINE((a, b, g) => bb.translate(a, b, g)),
  Bb = NO_INLINE((a, b, g) => bb.rotate(a, b, g)),
  Q = NO_INLINE((a, b, g) => bb.scale(a, b, g)),
  Cb = (a, b, g) => (a.D = g, a.A = b, a),
  Db = (a, b, g = a.A) =>
    Cb(
      a.map(m => {
        let q, l;
        return { x: m, y: q, z: l } = m,
          { x: m, y: q, z: l } = b.transformPoint({ x: m, y: q, z: l }),
          { x: m, y: q, z: l };
      }),
      g,
      a.D,
    ),
  H = (a, b, g) => a.map(m => Db(m, b, g)),
  Eb = (a, b = 0) =>
    Sa(a, g => {
      const m = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > p(m) ? m : 0 > m ? m - b : m + b };
    }),
  Fb = (a, b, g) =>
    a.map((m, q, { length: l }) => Cb([m, b[l - q - 1], b[l - (q + 1) % l - 1], a[(q + 1) % l]], a.A, g)),
  P = (
    a,
    b,
    g = 0,
    m,
  ) => (a = a ? Eb(a, m) : Ua,
    m = Db(a, T(0, 1).scale3d(0 < g ? g : 1)),
    a = Db(a, T(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...Fb(a, m, b), m, a]),
  Gb = (
    a,
    b = a,
    g = (
      m,
      q,
    ) => (q *= Math.PI / b,
      { x: Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(m) * Math.sin(q) }),
  ) => {
    const m = [];
    for (let q = 0; a > q; q++) {
      for (let l = 0; b > l; l++) {
        const u = Cb([], 0, 1);
        m.push(u);
        u.push(g(q, l, u));
        l && u.push(g((q + 1) % a, l, u));
        b - 1 > l && u.push(g((q + 1) % a, l + 1 % b, u));
        u.push(g(q, l + 1 % b, u));
      }
    }
    return m;
  },
  Hb = (a, b) => {
    var g, m, q, l = b.C;
    for (var u = 0; l.length > u; ++u) {
      if (-0.00008 > (g = vb(a, l[u]) - a.w) ? q = b : 8e-5 < g && (m = b), q && m) {
        m = [];
        q = [];
        l = b.C;
        u = b.B;
        let v = l.at(-1), w = vb(a, v) - a.w;
        for (const z of l) {
          g = vb(a, z) - a.w,
            8e-5 > w && q.push(v),
            -0.00008 < w && m.push(v),
            (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g)
            && (w /= g - w,
              v = { x: v.x + (v.x - z.x) * w, y: v.y + (v.y - z.y) * w, z: v.z + (v.z - z.z) * w },
              m.push(v),
              q.push(v)),
            v = z,
            w = g;
        }
        return {
          o: 2 < m.length && { C: Cb(m, l.A, l.D), B: u, u: b },
          m: 2 < q.length && { C: Cb(q, l.A, l.D), B: u, u: b },
        };
      }
    }
    return { o: m, m: q };
  },
  Ib = (a, b, g = wb(b.C)) => {
    let m, q, l;
    return a
      ? ({ o: m, m: q } = Hb(a, b), m || q || a.s.push(b), m && (a.o = Ib(a.o, m, g)), q && (a.m = Ib(a.m, q, g)))
      : ({ x: m, y: q, z: g, w: l } = g, a = { x: m, y: q, z: g, w: l, s: [b], o: 0, m: 0 }),
      a;
  },
  Jb = (a, b, g) => {
    const m = [],
      q = (l, u) => {
        let { o: v, m: w } = Hb(l, u);
        v || w || (0 < g * vb(l, b) ? v = u : w = u);
        v && (l.o ? q(l.o, v) : m.push(v));
        w && l.m && q(l.m, w);
      };
    for (const l of b.s) {
      q(a, l);
    }
    return m;
  },
  Kb = (a, b) => a && (b(a), Kb(a.o, b), Kb(a.m, b)),
  Lb = a => a.length ? a.reduce((b, g) => Ib(b, { C: g, B: 0, u: 0 }), 0) : a,
  Mb = a => (Kb(a, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const m of b.s) {
      m.B = !m.B;
    }
  }),
    a),
  Nb = (...a) =>
    a.reduce((b, g) => {
      const m = [];
      if (b = Lb(b), g) {
        g = Lb(g);
        Kb(b, q => q.s = Jb(g, q, 1));
        Kb(g, q => m.push([q, Jb(b, q, -1)]));
        for (let [q, l] of m) {
          for (const u of l) {
            Ib(b, u, q);
          }
        }
      }
      return b;
    }),
  V = (...a) => {
    let b;
    const g = l => {
        let u;
        return l.u && ((u = m.get(l.u)) ? (q.delete(u), l = g(l.u)) : m.set(l.u, l)), l;
      },
      m = new Map(),
      q = new Map();
    return [a, ...b] = [...a],
      a = Mb(Nb(Mb(Lb(a)), ...b)),
      Kb(a, l => {
        for (const u of l.s) {
          q.set(g(u), u.B);
        }
      }),
      Array.from(q, ([{ C: l }, u]) => {
        const v = l.map(({ x: w, y: z, z: A }) => ({ x: w, y: z, z: A }));
        return Cb(u ? v.reverse() : v, l.A, l.D);
      });
  },
  Ob = () => {
    let a, b, g, m, q, l, u, v, w, z, A, M, B, f, k, r, x, D = 1, I = 2, y = 2;
    const C = () => {
        let F = 0, E = 0, S = 0, N = 0;
        m = 0;
        ca.fill(0);
        for (let W = 0; 31 > W; ++W) {
          let U = 0;
          const sa = 512 * W;
          for (let da = 0; 128 > da; da++) {
            var O = sa + 4 * da;
            let ia = (Y[O] + Y[1 + O]) / 255;
            O = Y[2 + O];
            14 < da && 114 > da && (U += ia);
            O && ia && (ia = ca[O] + 1, ca[O] = ia, F > ia || (F = ia, E = O));
          }
          3 > U && 5 < W && (S += W / 32);
          3 < U && (7 < W && (N += W / 15), m = 1);
        }
        E && (m = 1);
        a = E || b;
        b = E;
        y = n(y, m ? 6.5 : -20 > Xa.y ? 11 : 8, 1 - Math.exp(-4 * d));
        Xa.y += N / 41 - (m || y) * S / 41 * y * d;
      },
      J = () => {
        z = w = 0;
        for (let F = 32; 128 > F; F += 2) {
          let E = 0, S = 0, N = 0, O = 0;
          const W = 512 * F;
          for (let U = 1 & F; 128 > U; U += 2) {
            const sa = W + 4 * U;
            let da = W + 4 * (127 - U);
            const ia = Y[sa] / 255, Va = Y[1 + da] / 255, pa = 1 - p(U / 63.5 - 1);
            10 < U && 118 > U
              && (E = rb(rb(ia * pa, ia * Y[da] / 255), E), S = rb(rb(Va * pa, Va * Y[1 + sa] / 255), S));
            (54 > U || 74 < U) && 1e-3 < (da = (1 - pa) * rb(ia, Va) / 3)
              && (64 > U && da > N ? N = da : 64 < U && da > O && (O = da));
          }
          p(O - N) > p(w) && (w = O - N);
          p(S - E) > p(z) && (z = S - E);
        }
      },
      K = () => (I ? h[ta].u : e[g && 1 === e[g].G && g || 0]).l,
      R = (F, E, S, N) => n(F, E, D || ($a(p(E - F) ** 0.9 - S) + 1 / 7) * (1 - Math.exp(-(1.5 * N) * d))),
      ca = new Int32Array(256),
      Y = new Uint8Array(65536);
    oa = () => {
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, Y);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(J)();
      NO_INLINE(C)();
      var F = $a(1 - 5 * rb(p(w), p(z))), E = ha ? Ra * Ta : Math.PI;
      F =
        (B = n(B, m * F * $a(2 * Ea) * 7, 1 - Math.exp(-(m ? 0.1 < F ? 10 : 5 + 2 * Ea : 1) * d)),
          A = n(A, 0, 1 - Math.exp(-(m ? 8 : 4) * d)),
          w += d * ((a ? 0 : F * A) - Math.cos(Da + E) * Ea * B),
          M = n(M, 0, 1 - Math.exp(-(m ? 8 : 4) * d)),
          z += d * ((a ? 0 : F * M) - Math.sin(Da + E) * Ea * B),
          K());
      var { x: S, y: E, z: N } = 1 < I
        ? h[ta].J.transformPoint({ x: 0, y: ta || 0.9 < Aa ? 15 : 1, z: -2.4 })
        : (E = F,
          ab(E).invertSelf(),
          pb.m41 = pb.m42 = pb.m43 = 0,
          S = pb.transformPoint({ x: w, z, w: 0 }),
          Xa.x += S.x,
          Xa.z += S.z,
          E.transformPoint(Xa));
      if (
        a && (A = (S - Pa.x) / d, M = (N - Pa.z) / d),
          Pa.x = S,
          Pa.y = E,
          Pa.z = N,
          (I = I && (m && a ? 0 : 1)) || a !== g
      ) {
        g = a;
        const O = (F = K()).inverse().transformPoint(Pa);
        Xa.x = O.x;
        Xa.y = O.y;
        Xa.z = O.z;
      }
      v = n(v, Ca * (27 < a && 32 > a), 1 - Math.exp(-2 * d));
      E < (-25 > S || 109 > N ? -25 : -9) && (A = M = B = 0, I = 2);
      1 === a && (h[9].j = -15 > S && 0 > N ? 1 : 0);
      f = n(n(f, E, 1 - Math.exp(-2 * d)), E, I || 8 * p(f - E));
      r = R(r, f, 2, 1);
      k = R(k, S, 0.5, 1);
      x = R(x, N, 0.5, 1);
      ha
        ? (F = I + (1 - Math.exp(-18 * d)), Fa = n(Fa, S, F), Ga = n(Ga, f + 1.5, F), Ha = n(Ha, N, F), Ra = Za(Ra))
        : (Ga = R(Ga, rb(r + $a((-60 - N) / 8, 0, 20) + 13 + 9 * v, 6), 4, 2),
          Ha = R(Ha, x + -18 + 5 * v, 1, 2 + v),
          Fa = R(Fa, k, 1, 2 + v),
          E = mb(4, -p(x - Ha)),
          F = k - Fa,
          Ra = nb(Ra, 90 - Za(Math.atan2(E, F) / Ta), D + (1 - Math.exp(-6 * d))),
          Qa = nb(Qa, 90 - Math.atan2(Math.hypot(E, F), Ga - r) / Ta, D + (1 - Math.exp(-6 * d))));
      Qa = $a(Qa, -87, 87);
      l = nb(l, q, 1 - Math.exp(-8 * d));
      u = n(u, Ea, 1 - Math.exp(-10 * d));
      Ea && (q = 90 - Da / Ta);
      D = 0;
      e[37].l.translateSelf(S, f + 0.124, N).rotateSelf(0, l);
      for (F = 0; 2 > F; ++F) {
        e[38 + F].l.multiplySelf(e[37].l).translateSelf(
          0,
          u * $a(0.45 * Math.sin(9.1 * c + Math.PI * (F - 1) - Math.PI / 2)),
        ).rotateSelf(u * Math.sin(9.1 * c + Math.PI * (F - 1)) * 0.25 / Ta, 0);
      }
    };
  },
  Pb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Qb = (a, b) => {
    const g = {}, m = Z.c1h();
    return Z.abz(m, a), Z.abz(m, Pb(b, 35632)), Z.l8l(m), q => q ? g[q] || (g[q] = Z.gan(m, q)) : Z.u7y(m);
  },
  Xb = (a, b, g) => {
    if (aa) {
      b = Bb(0, 40 * Math.sin(ra) - 70);
      for (const m of [37, 38, 39]) {
        Ab(b, Vb, m - 1);
      }
      Z.uae(a, !1, Vb);
      Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      Z.uae(a, !1, Vb),
        Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6),
        Z.uae(a, !1, Wb),
        Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13),
        Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
  },
  Yb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Zb = a => Math.sin(a * Math.PI * 2),
  $b = a => 0.5 > a % 1 ? 1 : -1,
  ac = a => a % 1 * 2 - 1,
  bc = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  ic = a => {
    let b = 0;
    const g = () => {
        let u = 0;
        const v = O => {
            let W, U, sa, da = 0, ia = 0;
            const Va = [],
              pa = new Int32Array(768 * O),
              cc = 2 ** (C - 9) / O,
              dc = Math.PI * 2 ** (Y - 8) / O,
              yb = E * O & -2;
            for (let tb = 0; 11 >= tb; ++tb) {
              for (
                let ub = 0, Rb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb];
                32 > ub;
                ++ub
              ) {
                const Sb = (32 * tb + ub) * O;
                for (var Ka = 0; 4 > Ka; ++Ka) {
                  if (W = 0, Rb && (W = w[Rb - 1].charCodeAt(ub + 32 * Ka) - 40, W += 0 < W ? 106 : 0), W) {
                    var fa;
                    if (!(fa = Va[W])) {
                      fa = W;
                      let X = void 0, ua = void 0;
                      var Tb = W;
                      let ec = 0, fc = 0;
                      const gc = 2 > b ? ac : Zb, hc = 2 > b ? 1 > b ? $b : bc : Zb, Ub = new Int32Array(x + D + N);
                      for (let La = 0, zb = 0; x + D + N > La; ++La, ++zb) {
                        let Ma = 1;
                        x > La ? Ma = La / x : x + D > La || (Ma = (1 - (Ma = (La - x - D) / N)) * 3 ** (-y / 16 * Ma));
                        0 > zb
                          || (zb -= 4 * O,
                            ua = 396e-5 * 2 ** ((Tb + A - 256) / 12),
                            X = 396e-5 * 2 ** ((Tb + f - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                        Ub[La] = 80
                            * (gc(ec += ua * Ma ** (M / 32)) * z + hc(fc += X * Ma ** (k / 32)) * B
                              + (r ? (2 * Math.random() - 1) * r : 0))
                            * Ma | 0;
                      }
                      fa = Va[fa] = Ub;
                    }
                    for (let X = 0, ua = 2 * Sb; fa.length > X; ++X, ua += 2) {
                      pa[ua] += fa[X];
                    }
                  }
                }
                for (let X, ua = 0; O > ua; ++ua) {
                  Ka = 0;
                  fa = 2 * (Sb + ua);
                  var va = (((X = pa[fa]) || sa)
                    && (U = 308e-5 * J,
                      1 !== b && 4 !== b || (U *= Math.sin(cc * fa * Math.PI * 2) * S / 512 + 0.5),
                      U = 1.5 * Math.sin(U),
                      da += U * ia,
                      va = (1 - K / 255) * (X - ia) - da,
                      ia += U * va,
                      X = 4 === b ? ia : 3 === b ? va : da,
                      b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5),
                      X *= R / 32,
                      sa = 1e-5 < X * X,
                      va = Math.sin(dc * fa) * ca / 512 + 0.5,
                      Ka = X * (1 - va),
                      X *= va),
                    fa < yb || (Ka += pa[1 + fa - yb] * F / 255, X += pa[fa - yb] * F / 255),
                    u + fa >> 1);
                  q[va] += (pa[fa] = Ka) / 65536;
                  l[va] += (pa[++fa] = X) / 65536;
                }
              }
            }
            u += 768 * O;
          },
          w = Na[b],
          [z, A, M, B, f, k, r, x, D, I, y, C, J, K, R, ca, Y, F, E, S] = Oa[b],
          N = 4 * I ** 2;
        v(5513);
        v(4562);
        v(3891);
        Yb(5 > ++b ? g : a);
      },
      m = hb.createBuffer(2, 5362944, 44100),
      q = m.getChannelData(0),
      l = m.getChannelData(1);
    gb.buffer = m;
    gb.loop = !0;
    Yb(g);
  },
  hb = new AudioContext(),
  bb = new DOMMatrix(),
  pb = new DOMMatrix(),
  xb = new Float32Array(16),
  Vb = new Float32Array(624),
  Wb = new Float32Array(624),
  jc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  gb = hb.createBufferSource(),
  qb = Sa(8, () => ({})),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, m) => (b * m + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Yb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const m = r => {
            if (
              Z.f1s(),
                requestAnimationFrame(m),
                x = (r - (ba || r)) / 1e3,
                ra += x,
                c += d = aa ? 0 : mb(0.066, x),
                ba = r,
                0 < d
            ) {
              ja();
              cb();
              oa();
              for (r = 0; e.length > r; ++r) {
                e[r].G && Ab(e[r].l, Vb, r - 1);
              }
              for (r = 0; 13 > r; ++r) {
                Ab(Ja[r].l, Wb, r);
              }
              for (r = 0; h.length > r; ++r) {
                Ab(h[r].l, Wb, r + 13), Wb[16 * (r + 13) + 15] = 1 - h[r].g;
              }
              z();
              Z.b6o(36160, f);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x, y: r, z: D } = Pa;
              Z.uae(z("b"), !1, Ab(ab().rotateSelf(0, 180).invertSelf().translateSelf(-x, -r, 0.3 - D)));
              Xb(z("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !0, !1);
              Z.uae(z("b"), !1, Ab(ab().translateSelf(-x, -r, -D - 0.3)));
              Xb(z("c"), 0, 41);
              Z.f1s();
            }
            ea = 0;
            ab(bb, q);
            aa
              ? q.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : q.rotateSelf(-Qa, -Ra).invertSelf().translateSelf(-Fa, -Ga, -Ha);
            v();
            Z.b6o(36160, B);
            Z.v5y(0, 0, 2048, 2048);
            M[0](sb(q, la, 1.1 * 54.7, 10));
            M[1](sb(q, ma, 1.1 * 126, 11));
            A();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            M[0]();
            M[1]();
            Z.uae(A("a"), !1, Ab(ka));
            Z.uae(A("b"), !1, Ab(q));
            Z.ubu(A("k"), Fa, Ga, Ha);
            Xb(A("c"), !ha, 42);
            w();
            Z.ubu(w("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ra);
            Z.ubu(w("k"), Fa, Ga, Ha);
            Z.uae(w("b"), !1, Ab(ab(q).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, f);
            Z.f1s();
          },
          q = new DOMMatrix(),
          l = g;
        let u = Pb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const v = Qb(
            Pb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          w = Qb(
            Pb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          z = Qb(
            u,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          A = Qb(
            u,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          M = Sa(2, r => {
            const x = new Float32Array(16), D = Z.c25();
            return Z.a4v(33984 + r),
              Z.b9j(3553, D),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              I => {
                I
                  ? (Ab(I, x), Z.uae(v("b"), !1, x), Z.fas(36160, 36096, 3553, D, 0), Z.c4s(256), Xb(v("c"), !ha, 42))
                  : Z.uae(A(r ? "j" : "i"), !1, x);
              };
          }),
          B = Z.c5w(),
          f = (u = Z.c3z(), Z.c5w()),
          k = Z.c25();
        z();
        Z.uae(z("a"), !1, Ab(fb(1e-4, 1, 1.4, 0.59)));
        A();
        Z.ubh(A("q"), 2);
        Z.ubh(A("h"), 1);
        Z.ubh(A("g"), 0);
        w();
        Z.ubh(w("q"), 2);
        Z.b6o(36160, B);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, f);
        Z.bb1(36161, u);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, u);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        cb();
        NO_INLINE(jb)();
        NO_INLINE(Ob)();
        requestAnimationFrame(m);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = jc;
  NO_INLINE(ic)(() => {
    Yb(() => {
      let l, u = 0;
      const v = [],
        w = [],
        z = [],
        A = [],
        M = x => {
          let { x: D, y: I, z: y } = l[x], C = (r[0] = D, r[1] = I, r[2] = y, x = "" + (l.D ? k : B), f.get(x));
          return void 0 !== C
            ? (D = 3 * C, A[D] = (A[D++] + B[5]) / 2, A[D] = (A[D++] + B[6]) / 2, A[D] = (A[D] + B[7]) / 2)
            : (f.set(x, C = f.size), w.push(D, I, y, r[3]), z.push(B[4]), A.push(B[5], B[6], B[7])),
            C;
        },
        B = new Int32Array(8),
        f = new Map(),
        k = new Int32Array(B.buffer, 0, 5),
        r = new Float32Array(B.buffer);
      for (const x of e) {
        for (l of (r[3] = 40 === x.H ? -14 : x.G && x.H, x.s)) {
          const { x: D, y: I, z: y } = wb(l);
          B[4] = 0 | l.A;
          B[5] = 32767 * D;
          B[6] = 32767 * I;
          B[7] = 32767 * y;
          for (let C = 2, J = M(0), K = M(1); l.length > C; ++C) {
            v.push(J, K, K = M(C));
          }
        }
        x.s = null;
        x.v = u;
        x.F = u = v.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(w), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(A), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(z), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Yb(b);
      try {
        const [x, D, I, y, C] = JSON.parse(localStorage.I);
        h.map((J, K) => J.g = J.i = J.j = K ? 0 | x[K] : 0);
        Ja.map((J, K) => J.j = 0 | D[K]);
        ta = I;
        c = y;
        Ba = C;
      } catch {
      }
      Aa = $a(ta);
    });
    const m = Sa(11, l => T(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10)),
      q = Sa(10, l => Fb(Db(Eb(18), m[l]).reverse(), Db(Eb(18), m[l + 1]), 1)).flat();
    G(() => L([Ua.slice(1)], T(-2).scale3d(3).rotate(90, 0)), 0);
    G(() => {
      const l = (f, k, r) =>
          G(x => {
            x.h = D => D.translateSelf(w() * Math.sin(3 * f + c * f) * k);
            Ua.map(({ x: D, z: I }) => {
              L(P(11, 1), T(4 * D, 4, r + 4 * I).scale(0.8, 3, 0.8), t(0.5, 0.3, 0.7, 0.6));
              L(P(), T(4 * D, 7, r + 4 * I).scale(1, 0.3), t(0.5, 0.5, 0.5, 0.3));
            });
            L(V(
              H(P(), T(0, 0, r).scale(5, 1, 5), t(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(D => H(P(), T(5 * D, 0.2, r).rotate(-30 * D).scale(4, 1, 2), t(0.8, 0.8, 0.8, 0.3))),
            ));
            L(P(), T(0, -3, r).scale(8, 2, 8), t(0.4, 0.4, 0.4, 0.3));
          }),
        u = (f, k, r, x) =>
          f.translateSelf(k + Math.sin(c + 2) / 5, r + Math.sin(0.8 * c) / 3, x).rotateSelf(
            2 * Math.sin(c),
            Math.sin(0.7 * c),
            Math.sin(0.9 * c),
          ),
        v = f =>
          V(
            H(P(), T(0, -f / 2).scale(6, f - 1, 2.2)),
            H(P(), T(0, -f / 2 - 6).scale(4, f - 3, 4)),
            H(P(32, 1), T(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => mb(h[2].i, 1 - h[4].i),
        z = V(
          H(P(30, 1, 1.15, 1), T(0, -3).scale(3.5, 1, 3.5), t(0.7, 0.4, 0.25, 0.7)),
          H(P(30, 1, 1.3, 1), T(0, -2.5).scale(2.6, 1, 3), t(0.7, 0.4, 0.25, 0.2)),
          H(P(), T(4, -1.2).scale3d(2), t(0.7, 0.4, 0.25, 0.3)),
        ),
        A = Sa(7, f => H(P(6, 1), T(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), t(0.3, 0.3, 0.38))).flat(),
        M = (G(f => {
          f.h = k => u(k, -12, 4.2, 40 * Aa - 66);
          L(z);
          lb(T(0, -3, 4));
        }),
          lb(T(-5.4, 1.5, -19).rotate(0, -90)),
          ob(T(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          ob(T(0, 2.8), [5, 10, 3], [-5, 10, 3], ...Eb(18).map(({ x: f, z: k }) => [7 * f, 10 * k, 4.5 - 2 * p(f)])),
          L(P(), T(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), t(0.8, 0.8, 0.8, 0.2)),
          Ua.map(({ x: f, z: k }) => L(P(6), T(3 * f, 3, 15 * k).scale(0.7, 4, 0.7), t(0.6, 0.3, 0.3, 0.4))),
          L(P(), T(0, 0, -23).scale(3, 1, 8), t(0.9, 0.9, 0.9, 0.2)),
          L(P(), T(0, 0, 22).scale(3, 1, 8), t(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map((f, k) => {
            L(P(), T(0, 6.3, f).scale(4, 0.3, 1), t(0.3, 0.3, 0.3, 0.4));
            L(P(), T(0, 1, f).scale(3, 0.2, 0.35), t(0.5, 0.5, 0.5, 0.3));
            G(r => {
              r.h = x => x.translateSelf(0, 0, f).scaleSelf(1, $a(1.22 - h[k + 1].g), 1);
              L(A);
            });
          }),
          Sa(5, f =>
            Sa(2, k =>
              L(
                q,
                T(18.5 * (k - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * k).scale(1.2, 10, 1.2),
                t(1, 1, 0.8, 0.2),
              ))),
          L(P(), T(3, 1.5, -20).scale(0.5, 2, 5), t(0.7, 0.7, 0.7, 0.2)),
          L(P(), T(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), t(0.75, 0.75, 0.75, 0.2)),
          L(P(5), T(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), t(0.6, 0.3, 0.3, 0.4)),
          L(P(), Bb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), t(0.8, 0.2, 0.2, 0.5)),
          L(V(
            Nb(
              H(P(6, 0, 0, 0.3), T(8, -3, -4).scale(13, 1, 13), t(0.7, 0.7, 0.7, 0.2)),
              H(P(6), T(0, -8).scale(9, 8, 8), t(0.4, 0.2, 0.5, 0.5)),
              H(P(6, 0, 0, 0.3), T(0, -0.92).scale(13, 2, 13), t(0.8, 0.8, 0.8, 0.2)),
            ),
            H(P(5), Q(5, 30, 5), t(0.4, 0.2, 0.6, 0.5)),
            H(P(5, 0, 1.5), T(0, 1).scale(4.5, 0.3, 4.5), t(0.7, 0.5, 0.9, 0.2)),
            H(P(), Bb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), t(0.5, 0.5, 0.5, 0.5)),
            H(P(6), T(15, -1.5, 4).scale(3.5, 1, 3.5), t(0.5, 0.5, 0.5, 0.5)),
          )),
          G(f => {
            f.h = k =>
              k.translateSelf(
                0,
                0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500,
                0,
              );
            L(P(5), T(0, -0.2).scale(5, 1, 5), t(0.6, 0.65, 0.7, 0.3));
            lb(T(0, 1.2));
          }),
          lb(T(15, -2, 4)),
          l(0.7, 12, 35),
          l(1, 8.2, 55),
          G(f => {
            f.h = k => k.translateSelf(w() * Math.sin(c / 1.5 + 2) * 12);
            L(
              V(
                Nb(
                  H(P(), Q(1.5, 1, 5), t(0.9, 0.9, 0.9, 0.2)),
                  H(P(6), Q(4, 1, 5), t(0.9, 0.9, 0.9, 0.2)),
                  H(P(), T(0, -2).scale(2, 3.2, 1.9), t(0.3, 0.8, 0.5, 0.5)),
                  H(P(16, 1, 0, 4), Q(1, 1, 1.5).rotate(0, 90), t(0.9, 0.9, 0.9, 0.2)),
                ),
                H(P(), Q(1.3, 10, 1.3), t(0.2, 0.7, 0.4, 0.6)),
              ),
              T(0, 0, 45),
            );
            ob(T(0, 2.8, 45), [0, 0, 4.5]);
          }),
          L(P(), T(-18.65, -3, 55).scale(2.45, 1.4, 2.7), t(0.9, 0.9, 0.9, 0.2)),
          G(f => {
            f.h = k => k.translateSelf(9.8 * (1 - w()));
            L(P(3), T(-23, -1.7, 55.8).scale(5, 0.7, 8.3), t(0.3, 0.6, 0.6, 0.2));
            L(P(8), T(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), t(0.8, 0.8, 0.8, 0.2));
            L(P(), T(-23, -3, 55).scale(5.2, 1.7, 3), t(0.5, 0.5, 0.5, 0.3));
            L(P(), T(-23, -2.2, 62).scale(3, 1, 4), t(0.5, 0.5, 0.5, 0.3));
            lb(T(-23, -0.5, 66.5));
          }),
          G(f => {
            f.h = k => k.translateSelf(0, $a(1 - 5 * w()) * Ya(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
            L(P(), T(-22.55, -3, 55).scale(1.45, 1.4, 2.7), t(0.7, 0.7, 0.7, 0.2));
            L(V(H(P(), Q(3, 1.4, 2.7)), H(P(), Q(1.2, 8, 1.2))), T(-33, -3, 55), t(0.7, 0.7, 0.7, 0.2));
          }),
          G(f => {
            f.h = k => k.translateSelf(0, 0, $a(1 - 5 * w()) * Ya(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
            L(V(
              H(P(), T(-27, -3, 55).scale(3, 1.4, 2.7), t(0.9, 0.9, 0.9, 0.2)),
              H(P(), T(-27, -3, 55).scale(1, 3), t(0.9, 0.9, 0.9, 0.2)),
            ));
            L(P(), T(-39, -3, 55).scale(3, 1.4, 2.7), t(0.9, 0.9, 0.9, 0.2));
          }),
          G(f => {
            f.h = k => k.translateSelf(0, -6.5 * h[4].i);
            L(P(6), T(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), t(0.7, 0.7, 0.7, 0.4));
          }),
          lb(T(-55, -1.1, 46).rotate(0, 90)),
          L(P(6), T(-61.3, -2.4, 49).scale(3, 1, 5), t(0.4, 0.6, 0.6, 0.3)),
          L(P(7), T(-57, -2.6, 46).scale(4, 1, 4), t(0.8, 0.8, 0.8, 0.3)),
          [
            ...H(P(), T(0, -3).scale(11, 1.4, 3), t(0.9, 0.9, 0.9, 0.2)),
            ...V(
              H(P(6), Bb(90).scale(6, 8, 6), t(0.3, 0.6, 0.6, 0.3)),
              H(P(4, 0, 0.01), T(0, 6).scale(12, 2, 0.75).rotate(0, 45), t(0.3, 0.6, 0.6, 0.3)),
              H(P(6), Bb(90).scale(5, 12, 5), t(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => H(P(5), T(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), t(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        B = (L(M, T(-53, 0, 55)),
          G(f => {
            f.h = k => k.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ya, 0);
            L(M);
          }, 2),
          L(P(), T(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), t(0.7, 0.7, 0.7, 0.2)),
          L(P(3, 0, -0.5), T(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), t(0.8, 0.8, 0.8, 0.2)),
          L(V(
            Nb(
              H(P(), T(-100, -2.5, 55).scale(8, 1, 8), t(0.8, 0.8, 0.8, 0.2)),
              H(P(), T(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), t(0.8, 0.8, 0.8, 0.2)),
              H(P(), T(-100, -2.6, 70).scale(3, 1.1, 7), t(0.8, 0.8, 0.8, 0.2)),
              H(P(), T(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), t(0.8, 0.8, 0.8, 0.2)),
              H(P(6), T(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), t(0.6, 0.6, 0.6, 0.3)),
              H(P(), T(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), t(0.8, 0.8, 0.8, 0.2)),
              H(P(), T(-100, 0.42, 92).scale(3, 1.1, 4.1), t(0.8, 0.8, 0.8, 0.2)),
            ),
            H(P(8), T(-100, -1, 55).scale(7, 0.9, 7), t(0.3, 0.3, 0.3, 0.4)),
            H(P(8), T(-100, -2, 55).scale(4, 0.3, 4), t(0.4, 0.4, 0.4, 0.5)),
            H(P(8), T(-100, -3, 55).scale(0.6, 1, 0.6), t(0.4, 0.4, 0.4, 0.5)),
          )),
          ob(T(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          ob(T(-89, 0.2, 80), [0, 0, 6]),
          L(V(
            H(P(), T(-100, 1, 63).scale(7.5, 4), t(0.5, 0.5, 0.5, 0.4)),
            H(P(), T(-100, 0, 70).scale(2, 2, 10), t(0.5, 0.5, 0.5, 0.4)),
            H(P(20, 1), T(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), t(0.5, 0.5, 0.5, 0.4)),
          )),
          G(f => {
            f.h = k => k.translateSelf(-99.7, -1.9, 63.5).scale(1, $a(1.1 - h[6].g), 1);
            L(A);
          }),
          Ua.map(({ x: f, z: k }) => {
            L(P(6), T(7 * f - 100, -3, 7 * k + 55).scale(1, 8.1), t(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(r => L(P(6), T(7 * f - 100, r, 7 * k + 55).scale(1.3, 0.5, 1.3), t(0.4, 0.2, 0.2, 0.8)));
          }),
          Sa(7, f => {
            L(
              P((23 * f + 1) % 5 + 5, 0, 0.55),
              T(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              t(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          L(P(), T(-87, -9.5, 24).scale(7, 1, 3), t(0.4, 0.5, 0.6, 0.4)),
          L(P(4), T(-86, -9.2, 27).scale(5, 1, 5), t(0.5, 0.6, 0.7, 0.3)),
          L(P(12, 1), T(-86, -9, 31).scale(1.5, 1, 1.5), t(0.3, 0.3, 0.4, 0.1)),
          lb(T(-86, -7.5, 31)),
          G(f => {
            f.h = k => k.translateSelf(0, 3.5 * (1 - rb(h[6].g, h[7].g)) + Ya(h[7].i, h[6].i) * Math.sin(c) * 5);
            [0, 12, 24].map(k => L(P(), T(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), t(0.2, 0.5, 0.6, 0.2)));
          }),
          G(f => {
            f.h = k =>
              k.translateSelf(
                0,
                Ya(h[7].i, h[6].i) * Math.sin(c + 3) * 6,
                6 * Math.sin(0.6 * c + 1) * Ya(h[7].i, h[6].i),
              );
            [6, 18].map(k => L(P(), T(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), t(0.1, 0.4, 0.5, 0.2)));
          }),
          L(
            V(
              Nb(
                H(P(5), T(0, 0, -7).scale(2, 1.2, 2), t(0.2, 0.4, 0.7, 0.3)),
                H(P(5), Q(9, 1.2, 9), t(0, 0.2, 0.3, 0.5)),
                H(P(), Q(11, 1, 13), t(0.3, 0.4, 0.6, 0.3)),
              ),
              H(P(5), Q(5.4, 5, 5.4), t(0, 0.2, 0.3, 0.5)),
            ),
            T(-38.9, -11.3, 17),
          ),
          lb(T(-38.9, -9.6, 10)),
          G(f => {
            f.h = k => k.translateSelf(0, -7.3 * h[7].i);
            L(
              V(
                Nb(
                  H(P(5), T(0, 2).scale(5, 7, 5).skewY(8), t(0.2, 0.4, 0.5, 0.5)),
                  H(P(5), T(0, 6).scale(1.1, 7, 1.1).skewY(-8), t(0.25, 0.35, 0.5, 0.5)),
                  H(P(5), T(0, 9).scale(0.6, 7, 0.6).skewY(8), t(0.35, 0.3, 0.5, 0.5)),
                ),
                H(P(5), Q(4, 8, 4), t(0.2, 0.4, 0.5, 0.5)),
                H(P(5), T(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), t(0.2, 0.4, 0.5, 0.5)),
              ),
              T(-38.9, -11.3, 17),
            );
            ob(T(-39.1, -0.6, 17).rotate(11), ...Eb(15).map(({ x: k, z: r }) => [3 * k, 3 * r, 1.2]));
          }),
          Ua.map(({ x: f, z: k }) => {
            L(P(14, 1), T(9 * f - 38.9, -7.3, 11 * k + 17).scale(1, 4), t(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(r =>
              L(P(17, 1), T(9 * f - 38.9, r - 11.3, 11 * k + 17).scale(1.5, 0.5, 1.5), t(0.6, 0.6, 0.6, 0.3))
            );
          }),
          L(
            V(
              Nb(
                H(P(6), T(0, 0, -36).scale(15, 1.2, 15), t(0.7, 0.7, 0.7, 0.3)),
                H(P(), T(0, 0, -18).scale(4, 1.2, 6), t(0.45, 0.4, 0.6, 0.3)),
              ),
              ...Sa(6, f =>
                Sa(6, k =>
                  H(
                    P(6),
                    T(4.6 * k - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * k)).scale(2, 5, 2),
                    t(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            T(-38.9, -11.3, 17),
          ),
          ob(T(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          L(P(5), T(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), t(0.8, 0.1, 0.25, 0.4)),
          lb(T(-84, -0.5, 85).rotate(0, 45)),
          G(f => {
            f.h = k => u(k, -123, 1.4, 55 + -65 * Ba);
            L(z);
            lb(T(0, -3, -4).rotate(0, 180));
          }),
          V(
            H(P(), T(0, -0.5, 1).scale(1.15, 1.2, 6.5), t(0.25, 0.25, 0.35, 0.3)),
            H(P(3), T(0, 0, -5.5).scale(3, 2), t(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => H(P(), T(f, -0.5, 1).scale(0.14, 0.3, 6.5), t(0.7, 0.2, 0, 0.3))),
          ));
      G(f => {
        f.h = k => k.translateSelf(0, -2, Ya(h[10].g, h[11].g) * p(Math.sin(1.1 * c)) * -8.5 + 10);
        Sa(2, k => L(B, T(9 * k - 110 + (1 & k), 1.7, -12)));
      });
      G(f => {
        f.h = k => k.translateSelf(0, -2, Ya(h[10].g, h[11].g) * p(Math.sin(2.1 * c)) * -8.5 + 10);
        Sa(2, k => L(B, T(9 * (k + 2) - 110 + (1 & k), 1.7, -12)));
      });
      G(f => {
        f.h = k =>
          k.translateSelf(
            0,
            -2,
            -8.5 * rb((1 - h[10].g) * (1 - Ya(h[10].g, h[11].g)), Ya(h[10].g, h[11].g) * p(Math.sin(1.5 * c))) + 10,
          );
        Sa(3, k => L(B, T(9 * k - 106, 1.7, -12)));
      });
      L(
        V(
          Nb(H(P(), T(26.5, -1.6, 10).scale(20, 2.08, 3)), H(P(), T(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...Sa(4, f => H(P(), T(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...Sa(3, f => H(P(), T(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        T(-123, 0, -12),
        t(0.5, 0.5, 0.6, 0.2),
      );
      lb(T(-116, -1.4, -18).rotate(0, 180));
      L(P(), T(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), t(0.8, 0.8, 0.8, 0.2));
      L(P(6), T(-116, -2.6, -16.5).scale(3.2, 0.8, 3), t(0.6, 0.5, 0.7, 0.2));
      L(P(), T(-115.5, -17, -12).scale(0.5, 15, 2.2), t(0.6, 0.6, 0.6, 0.3));
      L(P(8), T(-114, -17, -2).scale(2, 15, 2), t(0.6, 0.6, 0.6, 0.3));
      L(P(8), T(-79, -17, -2).scale(2, 15, 2), t(1, 1, 1, 0.3));
      L(P(), T(-77, -17, -50.5).scale(2.2, 15, 0.5), t(0.6, 0.6, 0.6, 0.3));
      Sa(3, f => {
        L(v(16), T(12 * f - 109, -9, -12), t(0.6, 0.6, 0.6, 0.3));
        L(v(16), T(-77, -9, -12 * f - 20).rotate(0, 90), t(0.6, 0.6, 0.6, 0.3));
      });
      L(V(
        H(P(12), T(-77, -14.5, -12).scale(4, 17.5, 4), t(0.7, 0.7, 0.7, 0.2)),
        H(P(), T(-79, 0.1, -12).scale(3.5, 2, 1.3), t(0.4, 0.5, 0.6, 0.2)),
        H(P(), T(-77, 0.1, -14).scale(1.5, 2, 2), t(0.4, 0.5, 0.6, 0.2)),
        H(P(12), T(-77, 3.1, -12).scale(3, 5, 3), t(0.4, 0.5, 0.6, 0.2)),
      ));
      L(P(), T(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), t(0.6, 0.6, 0.6, 0.3));
      L(P(9), T(-98, -18.4, -40).scale(2.5, 13.5, 2.5), t(0.5, 0.5, 0.5, 0.3));
      L(V(
        H(P(), T(-93, -5.8, -40).scale(9, 1, 5), t(0.8, 0.8, 0.8, 0.1)),
        H(P(9), T(-98, -5.8, -40).scale(3, 8, 3), t(0.7, 0.7, 0.7, 0.2)),
      ));
      lb(T(-98, -4.4, -40).rotate(0, 90));
      ob(T(-115, 0.2, -12), [0, 0, 3.5]);
      ob(T(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      L(V(
        Nb(
          H(P(6, 0, 0, 0.6), T(-100, 0.7, 105.5).scale(8, 1, 11), t(0.7, 0.7, 0.7, 0.2)),
          H(P(), T(-101.5, 0.7, 93.5).scale(10.5, 1, 2), t(0.7, 0.7, 0.7, 0.2)),
        ),
        H(P(5), T(-100, 0.7, 113).scale(4, 3, 4), t(0.7, 0.7, 0.7, 0.2)),
      ));
      Sa(4, f =>
        G(k => {
          k.h = r => {
            const x = Ya(h[8].i, h[12].i);
            r.translateSelf(
              (2 < f ? 2 * (1 - x) + x : 0) - 100,
              x * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + rb(x, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          L(
            P(6),
            T(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            t(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      G(f => {
        f.h = k => {
          const r = Ya(h[8].i, h[12].i);
          k.translateSelf(2.5 * (1 - r) - 139.7, -3 * (1 - h[8].g) + r * Math.sin(0.8 * c) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * c) * (3 * r + 3),
            0,
          );
        };
        L(V(H(P(10), Q(6, 2, 6), t(0.1, 0.6, 0.5, 0.3)), H(P(10), Q(3.3, 6, 3.3), t(0.1, 0.6, 0.5, 0.5))));
        L(P(15, 1), T(-7.5).rotate(0, 90).scale(3, 2.3, 3), t(0.4, 0.4, 0.4, 0.3));
        L(P(10), T(-7.5).rotate(0, 90).scale(2, 2.5, 2), t(0.3, 0.8, 0.7, 0.3));
        L(P(5), T(-7.5).rotate(0, 90).scale(1, 3), t(0.5, 0.5, 0.5, 0.5));
        lb(T(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(k => L(q, Bb(90 * -k, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), t(1, 1, 0.8, 0.2)));
        ob(T(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        L(P(12, 1), T(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), t(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(k => L(P(15, 1), T(-7.5 * f - 100, k + 0.7, 96).scale(1.1, 0.5, 1.1), t(0.5, 0.24, 0.2, 0.4)));
        L(q, T(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), t(1, 1, 0.8));
        L(
          V(
            H(P(), T(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), t(0.5, 0.5, 0.5, 0.4)),
            H(P(), Q(3, 3, 10), t(0.6, 0.24, 0.2, 0.5)),
            H(P(28, 1), T(0, 3, -5).scale(3, 4, 10).rotate(90, 0), t(0.6, 0.24, 0.2, 0.5)),
            H(P(5), T(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), t(0.6, 0.24, 0.2, 0.5)),
            H(P(5), T(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), t(0.6, 0.24, 0.2, 0.5)),
          ),
          T(f - 100, 0.7, 97),
        );
      });
      G(f => {
        f.h = k => k.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        L(A);
      });
      L(V(
        H(P(), T(-82.07, 0.8, 106).scale(11, 0.9, 2.2), t(0.7, 0.7, 0.7, 0.1)),
        H(P(45, 1), T(-81, 0.7, 106).scale3d(7.7), t(0.7, 0.7, 0.7, 0.1)),
      ));
      G(f => {
        f.h = k => k.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + wa);
        L(V(
          H(P(45, 1), Q(7.5, 1, 7.5), t(0.45, 0.45, 0.45, 0.2)),
          H(P(), T(0, 0, -5.5).scale(1.5, 3, 2.7), t(0.45, 0.45, 0.45, 0.2)),
        ));
        L(P(8), T(0, 2).scale(3, 1.5, 3).rotate(0, 22), t(0.7, 0.7, 0.7, 0.1));
        L(P(5), T(0, 2).scale(1, 2), t(0.3, 0.3, 0.3, 0.2));
        ob(T(0, 3), ...Eb(14).map(({ x: k, z: r }) => [5.6 * k, 5.6 * r, 2]));
      });
      G(f => {
        f.h = k => k.translateSelf(-65.8, 0.8, 106).rotateSelf(0, xa);
        [-1, 1].map(k =>
          L(q, Bb(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), t(1, 1, 0.8))
        );
        L(V(H(P(28, 1), T(0, 2).scale(7.5, 1, 7.5), t(0.35, 0, 0, 0.3)), H(P(), Q(9, 5, 2), t(0.3, 0, 0, 0.3))));
        L(H(P(28, 1), Q(7.5, 1, 7.5), t(0.45, 0.45, 0.45, 0.2)));
        L(H(P(5), T(0, 1).scale(1, 0.2), t(0.3, 0.3, 0.3, 0.2)));
      });
      G(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - xa);
        L(V(
          H(P(28, 1), T(0, 2).scale(7.5, 1, 7.5), t(0.35, 0, 0, 0.3)),
          H(P(), T(7).scale(9, 5, 2), t(0.3, 0, 0, 0.3)),
          H(P(), T(0, 0, 7).scale(2, 5, 9), t(0.3, 0, 0, 0.3)),
        ));
        L(H(P(28, 1), Q(7.5, 1, 7.5), t(0.45, 0.45, 0.45, 0.2)));
        L(H(P(5), T(0, 1).scale(1, 0.2), t(0.3, 0.3, 0.3, 0.2)));
      });
      G(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + xa);
        L(V(
          H(P(28, 1), T(0, 2).scale(7.5, 1, 7.5), t(0.35, 0, 0, 0.3)),
          H(P(), T(7).scale(9, 5, 2), t(0.3, 0, 0, 0.3)),
          H(P(), T(0, 0, -7).scale(2, 5, 9), t(0.3, 0, 0, 0.3)),
        ));
        L(H(P(28, 1), Q(7.5, 1, 7.5), t(0.45, 0.45, 0.45, 0.2)));
        L(H(P(5), T(0, 1).scale(1, 0.2), t(0.3, 0.3, 0.3, 0.2)));
      });
      L(P(), T(-58, 1, 106).scale(2, 0.65, 2), t(0.7, 0.7, 0.7, 0.2));
      L(P(), T(-50.7, 1, 99).scale(2, 0.65, 1), t(0.7, 0.7, 0.7, 0.2));
      L(P(), T(-42, 0.4, 91).scale(5, 1, 2.5), t(0.7, 0.7, 0.7, 0.3));
      L(P(), T(-34.2, 0.4, 91).scale(3, 1, 3), t(0.7, 0.7, 0.7, 0.3));
      lb(T(-34, 2.7, 96).rotate(-12, 0));
      L(P(5), T(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), t(0.2, 0.5, 0.5, 0.6));
      [t(0.1, 0.55, 0.45, 0.2), t(0.2, 0.5, 0.5, 0.3), t(0.3, 0.45, 0.55, 0.4)].map((f, k) =>
        G(r => {
          r.h = x => {
            x.translateSelf(
              0,
              (1 - h[13].i) * (1 - h[14].i) * (k ? 0 : 3) + Ya(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * k) * 4,
            );
          };
          L(P(), T(-23.5, 0.5, 91 + 6.8 * k).scale(1 === k ? 2 : 3.3, 1, 3.3), f);
          2 === k && L(P(), T(-29.1, 0.4, 91).scale(2.1, 1, 3), t(0.7, 0.7, 0.7, 0.3));
          1 === k && L(P(), T(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), t(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => L(q, T(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), t(1, 1, 0.8)));
      Sa(
        3,
        f =>
          L(
            v(24.7 - 0.7 * (1 & f)),
            T(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? t(0.5, 0.5, 0.5, 0.3) : t(0.35, 0.35, 0.35, 0.5),
          ),
      );
      L(V(
        H(P(6, 0, 0, 0.3), T(0, -0.92, 95).scale(14, 2, 14), t(0.8, 0.8, 0.8, 0.2)),
        H(P(5), T(0, 0, 95).scale3d(6), t(0.3, 0.3, 0.3, 0.5)),
      ));
      lb(T(0, 1.7, 82).rotate(0, 180));
      L(P(5), T(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), t(0.5, 0.3, 0.3, 0.4));
      L(P(6), T(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), t(0.5, 0.6, 0.7, 0.3));
      L(P(), T(0, 16, 129).scale(1.5, 1, 2), t(0.5, 0.6, 0.7, 0.3));
      L(P(7), T(0, 16.2, 133).scale(5, 1, 5), t(0.4, 0.5, 0.6, 0.4));
      L(V(
        Nb(
          H(P(), T(0, 16, 110.5).scale(12, 1, 3), t(0.5, 0.3, 0.3, 0.4)),
          H(P(), T(0, 16, 111).scale(3, 1, 3.8), t(0.5, 0.3, 0.3, 0.4)),
        ),
        H(P(5), T(0, 16, 103.5).scale(5.5, 5, 5.5), t(0.5, 0.3, 0.3, 0.4)),
      ));
      G(f => {
        f.h = k => k.translateSelf(-2 * Math.sin(c)).rotate(25 * Math.sin(c));
        L(P(3), T(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), t(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(k => {
          L(P(6), T(0, 16, k + 95).scale(3, 1, 2.3).rotate(0, 90), t(0.7, 0.7, 0.7, 0.4));
          L(P(), T(0, 6.2, k + 95).scale(0.5, 11, 0.5), t(0.5, 0.3, 0.3, 0.4));
        });
      });
      G(f => {
        f.h = k => {
          const r = Ya(Ya((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          k.translateSelf(0, 16 * r, 8.5 * $a(2 * r - 1) + 95);
        };
        L(P(5), Q(5, 1.1, 5), t(0.5, 0.3, 0.3, 0.4));
        L(P(5), Q(5.5, 0.9, 5.5), t(0.25, 0.25, 0.25, 0.4));
        lb(T(0, 1.5, -1).rotate(0, 180));
      });
      ob(T(0, 3, 95), ...Eb(9).map(({ x: f, z: k }) => [9 * f, 9 * k, 4]));
      ob(T(0, 19, 134), [0, 0, 3.5]);
    });
    G(() => {
      [0, 180].map(u => L(q, Bb(0, u).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), t(1, 1, 0.8)));
      L(Gb(20), T(0, 1).scale(0.5, 0.5, 0.5), t(1, 0.3, 0.4));
      L(Gb(30), Q(0.7, 0.8, 0.55), t(1, 0.3, 0.4));
      const l = H(V(P(15, 1), H(P(), T(0, 0, 1).scale(2, 2, 0.5))), Bb(-90, 0).scale(0.1, 0.05, 0.1), t(0.3, 0.3, 0.3));
      [-1, 1].map(u => L(l, T(0.2 * u, 1.2, 0.4).rotate(0, 20 * u, 20 * u)));
      L(P(), T(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), t(0.3, 0.3, 0.3));
    });
    [-1, 1].map(l =>
      G(() => {
        L(P(20, 1), T(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), t(1, 0.3, 0.4));
      })
    );
    G(() => {
      L(P(6, 1), Q(0.13, 1.4, 0.13), t(0.3, 0.3, 0.5, 0.1));
      L(P(10), T(0, 1).scale(0.21, 0.3, 0.21), t(1, 0.5, 0.2));
      L(P(3), T(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), t(0.2, 0.2, 0.2, 0.1));
    }, 0);
    G(() => {
      L(P(6).slice(0, -1), Q(0.77, 1, 0.77), t(1, 0.3, 0.5));
    }, 0);
    G(() => {
      L(
        Gb(30, 24, (l, u, v) => {
          const w = u / 24, z = l * Math.PI * 2 / 30, A = Math.sin(w ** 0.6 * Math.PI / 2);
          l = w * w * Math.sin(l * Math.PI * 14 / 30) / 4;
          return 23 < u
            ? { x: v.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(z) * A,
              y: Math.cos(w * Math.PI) - w - l,
              z: Math.sin(z) * A + Math.sin(l * Math.PI * 2) / 4,
            };
        }),
        Q(0.7, 0.7, 0.7),
        t(1, 1, 1),
      );
      [-1, 1].map(l => L(Gb(12), T(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
