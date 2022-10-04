let ba,
  ca,
  da,
  ea,
  fa,
  ha,
  ka,
  la,
  ma,
  na,
  oa,
  pa,
  qa,
  ra,
  ta,
  c = 0,
  ua = 0,
  va = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 1,
  Ia = 0.066;
const Ja = Math.PI / 180,
  Ka = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  La = [],
  d = [],
  Ma = [],
  Ra = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Sa = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ta = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Ua = 0, Va = 180;
const Wa = { x: 0, y: 0, z: 0 },
  e = NO_INLINE(a => 0 > a ? -a : a),
  Xa = NO_INLINE((a, b) => a < b ? a : b),
  Ya = NO_INLINE((a, b) => b < a ? a : b),
  Za = (a, b) => e(a) > b ? a : 0,
  h = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a,
  $a = a => Math.atan2(Math.sin(a * Ja), Math.cos(a * Ja)) / Ja,
  ab = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * h(f) || 0,
  bb = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0,
  cb = (a, b) => (a = h(a), bb(a, 1 - a, b)),
  db = (a, b, f = 0) =>
    Math.sqrt(
      a
          * a + b * b + f * f,
    ),
  fb = (
    a,
    b = eb,
    f = 0,
  ) => (f *= 16,
    b[f++] = a.m11,
    b[f++] = a.m12,
    b[f++] = a.m13,
    b[f++] = a.m14,
    b[f++] = a.m21,
    b[f++] = a.m22,
    b[f++] = a.m23,
    b[f++] = a.m24,
    b[f++] = a.m31,
    b[f++] = a.m32,
    b[f++] = a.m33,
    b[f++] = a.m34,
    b[f++] = a.m41,
    b[f++] = a.m42,
    b[f++] = a.m43,
    b[f] = a.m44,
    b),
  hb = (
    a = gb,
    b = m,
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
  p = NO_INLINE((a, b, f) => gb.translate(a, b, f)),
  ib = NO_INLINE((a, b, f) => gb.rotate(a, b, f)),
  w = NO_INLINE((a, b, f) => gb.scale(a, b, f)),
  jb = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  ob = (a = 0, b = 0, f = 0, k = 1) => {
    kb = m.m11 * a + m.m21 * b + m.m31 * f + m.m41 * k;
    lb = m.m12 * a + m.m22 * b + m.m32 * f + m.m42 * k;
    mb = m.m13 * a + m.m23 * b + m.m33 * f + m.m43 * k;
    nb = m.m14 * a + m.m24 * b + m.m34 * f + m.m44 * k;
  };
var kb, lb, mb, nb;
const pb = (a, b, f) => (a.C = f, a.u = b, a),
  qb = (a, b, f = a.u) => (hb(b), pb(a.map(({ x: k, y: t, z: n }) => (ob(k, t, n), { x: kb, y: lb, z: mb })), f, a.C)),
  D = (a, b, f) => a.map(k => qb(k, b, f)),
  rb = (a, b = 0) =>
    jb(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > e(k) ? k : 0 > k ? k - b : k + b };
    }),
  sb = (a, b, f) =>
    a.map((k, t, { length: n }) => pb([k, b[n - t - 1], b[n - (t + 1) % n - 1], a[(t + 1) % n]], a.u, f)),
  I = (
    a,
    b,
    f = 0,
    k,
  ) => (a = a ? rb(a, k) : Ra,
    k = qb(a, p(0, 1).scale3d(0 < f ? f : 1)),
    a = qb(a, p(0, -1).scale3d(0 > f ? -f : 1)).reverse(),
    [...sb(a, k, b), k, a]),
  tb = (
    a,
    b = a,
    f = (
      k,
      t,
    ) => (t *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(t), y: Math.cos(t), z: Math.sin(k) * Math.sin(t) }),
  ) => {
    const k = [];
    for (let t = 0; a > t; t++) {
      for (let n = 0; b > n; n++) {
        const v = pb([], 0, 1);
        k.push(v);
        v.push(f(t, n, v));
        n && v.push(f((t + 1) % a, n, v));
        b - 1 > n && v.push(f((t + 1) % a, n + 1 % b, v));
        v.push(f(t, n + 1 % b, v));
      }
    }
    return k;
  },
  Q = NO_INLINE((a, b, f) => bb(a, b, 1 - Math.exp(-f * Ia))),
  ub = () => {
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
      ][va = La.reduce((a, { i: b }) => a + b, 0)] + " / XIII";
  },
  vb = () => {
    localStorage.DanteSP22 = JSON.stringify([d.map(({ i: a }) => a), La.map(({ i: a }) => a), Ba, c, ea]);
  },
  S = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  wb = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Bb = () => {
    let a, b, f, k, t, n, v, y, x, z, A, g, u, H, N = !0;
    const R = [],
      L = () => {
        b4.innerHTML = "Music: " + N;
        ca || !N ? xb.disconnect() : xb.connect(Ab.destination);
      },
      U = () => {
        const l = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        la = [wb(0.3, 55, l, 1.732051), wb(55, 181, l, 1.732051)];
        ka = wb(0.3, 181, l, 1.732051);
        k = y = void 0;
        R.length =
          fa =
          H =
          g =
          u =
          Ca =
          Da =
            0;
      },
      r = (l, q = 0) => {
        if (ca !== l) {
          ca = l;
          ha = q;
          U();
          document.body.className = l ? "l m" : "l";
          try {
            l
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), xb.start());
          } catch {
          }
          L();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => r(!1);
    b2.onclick = () => r(!1, 1);
    b5.onclick = () => r(!0);
    b4.onclick = () => {
      N = !N;
      L();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = l => {
      if (!ca && (l.target === hC && (fa = 1), ha)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = l => {
      let q;
      l.repeat
        || (q = {
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
        }[l.code],
          (R[q] = !!l.type[5] && !0) && (0 === q && (fa = 1), 1 === q && r(!0)));
    };
    onmousemove = ({ movementX: l, movementY: q }) => {
      ha && (l || q) && (Va += 0.1 * l, Ua += 0.1 * q);
    };
    hC.ontouchstart = l => {
      if (!ca) {
        for (let { pageX: q, pageY: E, identifier: K } of l.changedTouches) {
          ha && q > hC.clientWidth / 2
            ? void 0 === y && (x = 0, n = q, v = E, y = K, z = Va, A = Ua)
            : void 0 === k && (t = 0, b = q, f = E, k = K);
        }
        a = ua;
      }
    };
    hC.ontouchmove = l => {
      if (!ca) {
        for (let { pageX: O, pageY: F, identifier: G } of l.changedTouches) {
          var q, E, K, V;
          y === G && (Va = z + (O - n) / 2.3, Ua = A + (F - v) / 2.3, x = 1);
          k === G
            && (G = (b - O) / 20,
              q = e(G),
              E = (f - F) / 20,
              K = e(E),
              (V = 0.5 < Ya(q, K)) && (t = 1),
              g = (V && 0.2 < q) * h(G, -1),
              u = (V && 0.2 < K) * h(E, -1),
              2 < q && (b = O + 20 * (0 > G ? -1 : 1)),
              2 < K && (f = F + 20 * (0 > E ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = l => {
      let q;
      document.activeElement === document.body && l.preventDefault();
      for (const E of l.changedTouches) {
        E.identifier === y
          ? (y = void 0, x || (q = 1), x = 0)
          : E.identifier === k
          ? (k = void 0, u = g = 0, t || (q = 1), t = 0)
          : q = 1;
      }
      l.target === hC && q && a && 0.02 < (l = ua - a) && 0.7 > l && (fa = 1);
    };
    ma = () => {
      Ca = u + (R[4] ? 1 : 0) - (R[5] ? 1 : 0);
      Da = g + (R[2] ? 1 : 0) - (R[3] ? 1 : 0);
      var l = navigator.getGamepads()[0];
      if (l) {
        const q = K => E[K]?.pressed || 0 < E[K]?.value ? 1 : 0, E = l.buttons;
        l = l.axes;
        ha && (Ua += Ia * Za(l[3], 0.3) * 80, Va += Ia * Za(l[2], 0.3) * 80);
        Ca += q(12) - q(13) - Za(l[1], 0.2);
        Da += q(14) - q(15) - Za(l[0], 0.2);
        q(9) && r(!0);
        (l = q(3) || q(2) || q(1) || q(0)) && !H && (fa = 1);
        H = l;
      }
    };
    document.onvisibilitychange = onblur = onresize = U;
    r(!0);
  },
  T = (a, b = new DOMMatrix(), f) => na.o.push(...D(a, b, f)),
  X = (a, b = 1) => {
    const f = na;
    Ma.push(na = { m: new DOMMatrix(), G: b, o: [] });
    a();
    na = f;
  },
  Cb = a => {
    const b = na,
      f = d.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = Q(k.g, k.i, 4);
          k.h = Q(k.h, k.i, 1);
          hb(b.m).multiplySelf(a);
          fa && 3 > (ob(), db(Wa.x - kb, Wa.y - lb, Wa.z - mb)) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, f && 1 / 0 > Ha && (Ha = c + 1, h4.innerHTML = "* click *"), Ba = f, vb());
          !f && k.i && 0.8 < k.g && (k.i = 0,
            13 > va
              ? 1 / 0 > Ha && (Ha = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : Aa
                || (1 / 0 > Ha
                  && (Ha = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  Aa = 1));
          m.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    d.push(k);
    T(I(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    T(I(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    T(I(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), S(0.5, 0.5, 0.4));
  },
  Db = (a, ...b) => {
    let f, k, t, n = 0, v = 0, y = 1, x = 3, z = -1;
    const A = {
        i: 0,
        F() {
          if (!A.i) {
            let V, O, F, G, M, J, P, B = 1, C = 1 / 0;
            for (const aa of g) {
              var { x: l, z: q, w: E } = aa;
              q = (l = db(H - l, N - q)) - E;
              P ||= 0 > q;
              0 < q && C > q && (C = q, u = aa);
              B = Xa(B, l / E);
            }
            P
              || ({ x: K, z: V, w: O } = u,
                F = H - K,
                G = N - V,
                M = db(F, G),
                J = Math.atan2(-G, F),
                y && (v = (Math.random() - 0.5) * Math.PI / 2, x = h(x / (1 + Math.random()))),
                J += v,
                z = -Math.cos(J),
                n = Math.sin(J),
                0.1 < M && (M = Xa(M, O) / (M || 1), H = F * M + K, N = G * M + V));
            y = P;
            x = Q(x, 6 * (1 - B) + 3, B + 3);
            R = Q(R, H = Q(H, H + z, x), x);
            L = Q(L, N = Q(N, N + n, x), x);
            f = ab(f, Math.atan2(R - k, L - t) / Ja - 180, 1 - Math.exp(-3 * Ia));
            hb(U).multiplySelf(a).translateSelf(k = R, 0, t = L).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
            if (1.6 > (ob(), db(Wa.x - kb, Wa.y - lb, Wa.z - mb))) {
              A.i = 1;
              var K = [
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
              ][va] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Ha && (Ha = c + (va && 12 > va ? 5 : 7), h4.innerHTML = K);
              ub();
              vb();
            }
          }
          A.i
            && hb(Ma[2].m).translateSelf(
              r % 4 * 1.2 - 1.7 + Math.sin(c + r) / 7,
              -2,
              1.7 * (r / 4 | 0) - 5.5 + e(r % 4 - 2) + Math.cos(c / 1.5 + r) / 6,
            );
        },
      },
      g = b.map(([l, q, E]) => ({ x: l, z: q, w: E }));
    let u = g[0], { x: H, z: N } = u, R = H, L = N;
    const U = na.m, r = La.length;
    La.push(A);
  },
  Gb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  Hb = a => {
    let b, f = 0, k = 0, t = 0, n = a.at(-1);
    for (b of a) {
      f += (n.y - b.y) * (n.z + b.z), k += (n.z - b.z) * (n.x + b.x), t += (n.x - b.x) * (n.y + b.y), n = b;
    }
    return b = db(f, k, t), f /= b, k /= b, t /= b, { x: f, y: k, z: t, w: f * n.x + k * n.y + t * n.z };
  },
  Ib = (a, b) => {
    var f, k, t, n = b.B;
    for (var v = 0; n.length > v; ++v) {
      if (-0.00008 > (f = Gb(a, n[v]) - a.w) ? t = b : 8e-5 < f && (k = b), t && k) {
        k = [];
        t = [];
        n = b.B;
        v = b.v;
        let y = n.at(-1), x = Gb(a, y) - a.w;
        for (const z of n) {
          f = Gb(a, z) - a.w,
            8e-5 > x && t.push(y),
            -0.00008 < x && k.push(y),
            (8e-5 < x && -0.00008 > f || -0.00008 > x && 8e-5 < f)
            && (x /= f - x,
              y = { x: y.x + (y.x - z.x) * x, y: y.y + (y.y - z.y) * x, z: y.z + (y.z - z.z) * x },
              k.push(y),
              t.push(y)),
            y = z,
            x = f;
        }
        return {
          l: 2 < k.length && { B: pb(k, n.u, n.C), v, A: b },
          j: 2 < t.length && { B: pb(t, n.u, n.C), v, A: b },
        };
      }
    }
    return { l: k, j: t };
  },
  Jb = (a, b, f = Hb(b.B)) => {
    let k, t, n;
    return a
      ? ({ l: k, j: t } = Ib(a, b), k || t || a.o.push(b), k && (a.l = Jb(a.l, k, f)), t && (a.j = Jb(a.j, t, f)))
      : ({ x: k, y: t, z: f, w: n } = f, a = { x: k, y: t, z: f, w: n, o: [b], l: 0, j: 0 }),
      a;
  },
  Kb = (a, b, f) => {
    const k = [],
      t = (n, v) => {
        let { l: y, j: x } = Ib(n, v);
        y || x || (0 < f * Gb(n, b) ? y = v : x = v);
        y && (n.l ? t(n.l, y) : k.push(y));
        x && n.j && t(n.j, x);
      };
    for (const n of b.o) {
      t(a, n);
    }
    return k;
  },
  Lb = (a, b) => a && (b(a), Lb(a.l, b), Lb(a.j, b)),
  Mb = a => (Lb(a, b => {
    const f = b.j;
    b.j = b.l;
    b.l = f;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.o) {
      k.v = !k.v;
    }
  }),
    a),
  Nb = a => a.length ? a.reduce((b, f) => Jb(b, { B: f, v: 0, A: 0 }), 0) : a,
  Ob = (...a) =>
    a.reduce((b, f) => {
      const k = [];
      if (b = Nb(b), f) {
        f = Nb(f);
        Lb(b, t => t.o = Kb(f, t, 1));
        Lb(f, t => k.push([t, Kb(b, t, -1)]));
        for (let [t, n] of k) {
          for (const v of n) {
            Jb(b, v, t);
          }
        }
      }
      return b;
    }),
  Y = (a, ...b) => {
    const f = n => {
        let v;
        return n.A && ((v = k.get(n.A)) ? (t.delete(v), n = f(n.A)) : k.set(n.A, n)), n;
      },
      k = new Map(),
      t = new Map();
    return a = Mb(Ob(Mb(Nb(a)), ...b)),
      Lb(a, n => {
        for (const v of n.o) {
          t.set(f(v), v.v);
        }
      }),
      Array.from(t, ([{ B: n }, v]) => {
        const y = n.map(({ x, y: z, z: A }) => ({ x, y: z, z: A }));
        return pb(v ? y.reverse() : y, n.u, n.C);
      });
  },
  Qb = () => {
    let a, b, f, k, t, n, v, y, x, z, A, g, u, H, N = 0, R = 0, L = 0, U = 1, r = 2, l = 15;
    const q = () => hb((r ? d[Ba] : Ma[A && 1 === Ma[A].G && A || 0]).m),
      E = O => {
        1 < r ? (hb(d[Ba].m).multiplySelf(d[Ba].H), ob(0, Ba || 0.9 < da ? 15 : 1, -2.4)) : (q(), ob(N, R, L));
        O && (t = (kb - Wa.x) / Ia, n = (mb - Wa.z) / Ia);
        Wa.x = kb;
        Wa.y = lb;
        Wa.z = mb;
      },
      K = () => {
        var O = 0, F = 0, G = 0, M = 0, J = 0, P = 0, B = -1;
        for (var C = 0; 36 > C; ++C) {
          var aa = 512 * C;
          for (var wa = 96; 416 > wa; wa += 4) {
            for (var ja = 0; 2 > ja; ++ja) {
              var sa = Pb[aa + wa + ja], xa = Pb[aa + wa + ja + 2];
              sa > M && (M = sa);
              sa + xa && (0 > B || B === C) && (B = C, xa === z ? ++O : F && F !== xa || (F = xa, ++G));
            }
          }
        }
        z = 0 > B ? 0 : G > 2 * O ? F : z;
        for (O = 36; 128 > O; O += 1) {
          B =
            M =
            G =
            F =
              0;
          C = 512 * O;
          for (aa = 0; 128 > aa; aa += 1) {
            for (wa = C + 4 * aa, ja = 0; 2 > ja; ++ja) {
              sa = Pb[wa + ja],
                xa = Pb[wa + ja + 2],
                (ja ? 64 < aa : 64 > aa) ? F = Ya(F, sa) : G = Ya(G, sa),
                ja ? B = Ya(B, xa) : M = Ya(M, xa);
            }
          }
          e(G - F) > e(J) && (J = G - F);
          e(B - M) > e(P) && (P = B - M);
        }
        y = h(1 - 0.02 * Ya(e(J), e(P)));
        J /= 255;
        P /= 255;
        q().invertSelf();
        ob(J, 0, P, 0);
        N += kb;
        R += lb;
        L += mb;
        E();
      },
      V = (O, F, G, M) => bb(O, F, U || (h(e(F - O) ** 0.5 - G) + 1 / 7) * (1 - Math.exp(-(1.5 * M) * Ia)));
    oa = O => {
      E(z);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Pb);
      NO_INLINE(K)();
      !r && z === A || (A = z, q().invertSelf(), ob(Wa.x, Wa.y, Wa.z), N = kb, R = lb, L = mb);
      r = r && (z ? 0 : 1);
      var F = Wa.x;
      const G = Wa.y, M = Wa.z;
      var J =
          (G < (-20 > F || 109 > M ? -25 : -9) && (r = 2),
            1 === z && (d[9].i = -15 > F && 0 > M ? 1 : 0),
            x = bb(Q(x, G, 2), G, r || 8 * e(x - G)),
            u = V(u, x, 2, 1),
            g = V(g, F, 0.5, 1),
            H = V(H, M, 0.5, 1),
            k = Q(k, pa * (27 < z && 32 > z), 2),
            ha
              ? (J = r + (1 - Math.exp(-18 * Ia)),
                Ea = bb(Ea, F, J),
                Fa = bb(Fa, x + 1.5, J),
                Ga = bb(Ga, M, J),
                Va = $a(Va))
              : (Ga = V(Ga, H + -18 + 5 * k, 1, 2 + k),
                Fa = V(Fa, Ya(u + h((-60 - M) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
                Ea = V(Ea, g, 1, 2 + k),
                J = Xa(-6, -e(H - Ga)),
                P = g - Ea,
                Va = ab(Va, 90 - $a(Math.atan2(J, P) / Ja), U + (1 - Math.exp(-10 * Ia))),
                Ua = ab(Ua, 90 - Math.atan2(db(J, P), Fa - u) / Ja, U + (1 - Math.exp(-10 * Ia)))),
            Ua = h(Ua, -87, 87),
            U = 0,
            h(Ca, -1)),
        P = h(Da, -1);
      const B = Za(db(J, P) ** 0.5, 0.1);
      var C = Math.atan2(J, P);
      J = B * e(J) * Math.sin(C);
      P = B * e(P) * Math.cos(C);
      B && (a = 90 - C / Ja);
      b = ab(b, a, 1 - Math.exp(-8 * Ia));
      f = Q(f, B, 10);
      O().translateSelf(F, x, M).rotateSelf(0, b);
      for (C = 0; 2 > C; ++C) {
        F = 9.1 * c - Math.PI * C,
          hb(Ma[37].m, O()).translateSelf(0, f * h(0.45 * Math.sin(F - Math.PI / 2))).rotateSelf(
            f * Math.sin(F) * 0.25 / Ja,
            0,
          );
      }
      l = z ? 5 : Q(l, r ? 13 : 19 - 2 * Xa(0, G + 10), 2.2);
      t = z || r ? 0 : Q(t, 0, 3);
      n = z || r ? 0 : Q(n, 0, 3);
      v = r ? 0 : Q(v, z ? 7 * h(2 * B) * y : 0, z ? 9 : 1);
      C = ha ? (180 + Va) * Ja : 0;
      O = Ia * (t + v * (P * Math.cos(C) - J * Math.sin(C)));
      J = Ia * (n + v * (P * Math.sin(C) + J * Math.cos(C)));
      q().invertSelf();
      ob(O, 0, J, 0);
      N += kb;
      R += lb;
      L += mb;
      E();
    };
  },
  Rb = (a, b, f, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  Yb = (a, b, f) => {
    ca
      ? 1100 < hC.width
        && (hb().rotateSelf(0, 40 * Math.sin(ua) - 80, -8),
          fb(m, Sb, 36),
          fb(m, Sb, 37),
          fb(m, Sb, 38),
          Z.uae(a, !1, Sb),
          Z.d97(4, Ma[39].D - Ma[37].s, 5123, 2 * Ma[37].s))
      : (Z.uae(a, !1, Sb),
        Z.d97(4, (b ? Ma[39].D : Ma[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Xb),
        Z.das(4, Ma[f].D - Ma[f].s, 5123, 2 * Ma[f].s, La.length),
        Z.das(4, Ma[42].D - Ma[42].s, 5123, 2 * Ma[42].s, d.length));
  },
  Zb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  $b = (a, b) => {
    const f = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Zb(b, 35632)), Z.l8l(k), t => t ? f[t] || (f[t] = Z.gan(k, t)) : Z.u7y(k);
  },
  ac = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  bc = a => Math.sin(a * Math.PI * 2),
  cc = a => 0.5 > a % 1 ? 1 : -1,
  dc = a => a % 1 * 2 - 1,
  ec = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  lc = a => {
    let b = 0;
    const f = () => {
        let v = 0;
        const y = B => {
            let C, aa, wa, ja = 0, sa = 0;
            const xa = [],
              Na = new Int32Array(768 * B),
              fc = 2 ** (q - 9) / B,
              gc = Math.PI * 2 ** (F - 8) / B,
              Eb = M * B & -2;
            for (let yb = 0; 11 >= yb; ++yb) {
              for (
                let zb = 0, Tb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + yb];
                32 > zb;
                ++zb
              ) {
                const Ub = (32 * yb + zb) * B;
                for (var Oa = 0; 4 > Oa; ++Oa) {
                  if (C = 0, Tb && (C = x[Tb - 1].charCodeAt(zb + 32 * Oa) - 40, C += 0 < C ? 106 : 0), C) {
                    var ia;
                    if (!(ia = xa[C])) {
                      ia = C;
                      let W = void 0, ya = void 0;
                      var Vb = C;
                      let hc = 0, ic = 0;
                      const jc = 2 > b ? dc : bc, kc = 2 > b ? 1 > b ? cc : ec : bc, Wb = new Int32Array(L + U + P);
                      for (let Pa = 0, Fb = 0; L + U + P > Pa; ++Pa, ++Fb) {
                        let Qa = 1;
                        L > Pa ? Qa = Pa / L : L + U > Pa || (Qa = (1 - (Qa = (Pa - L - U) / P)) * 3 ** (-l / 16 * Qa));
                        0 > Fb
                          || (Fb -= 4 * B,
                            ya = 0.00396 * 2 ** ((Vb + A - 256) / 12),
                            W = 0.00396 * 2 ** ((Vb + H - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Wb[Pa] = 80
                            * (jc(hc += ya * Qa ** (g / 32)) * z + kc(ic += W * Qa ** (N / 32)) * u
                              + (R ? (2 * Math.random() - 1) * R : 0))
                            * Qa | 0;
                      }
                      ia = xa[ia] = Wb;
                    }
                    for (let W = 0, ya = 2 * Ub; ia.length > W; ++W, ya += 2) {
                      Na[ya] += ia[W];
                    }
                  }
                }
                for (let W, ya = 0; B > ya; ++ya) {
                  Oa = 0;
                  ia = 2 * (Ub + ya);
                  var za = (((W = Na[ia]) || wa)
                    && (aa = 0.00308 * E,
                      1 !== b && 4 !== b || (aa *= Math.sin(fc * ia * Math.PI * 2) * J / 512 + 0.5),
                      aa = 1.5 * Math.sin(aa),
                      ja += aa * sa,
                      za = (1 - K / 255) * (W - sa) - ja,
                      sa += aa * za,
                      W = 4 === b ? sa : 3 === b ? za : ja,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= V / 32,
                      wa = 1e-5 < W * W,
                      za = Math.sin(gc * ia) * O / 512 + 0.5,
                      Oa = W * (1 - za),
                      W *= za),
                    ia < Eb || (Oa += Na[1 + ia - Eb]
                      * G / 255,
                      W += Na[ia - Eb] * G / 255),
                    v + ia >> 1);
                  t[za] += (Na[ia] = Oa) / 65536;
                  n[za] += (Na[++ia] = W) / 65536;
                }
              }
            }
            v += 768 * B;
          },
          x = Sa[b],
          [z, A, g, u, H, N, R, L, U, r, l, q, E, K, V, O, F, G, M, J] = Ta[b],
          P = 4 * r ** 2;
        y(5513);
        y(4562);
        y(3891);
        ac(5 > ++b ? f : a);
      },
      k = Ab.createBuffer(2, 5362944, 44100),
      t = k.getChannelData(0),
      n = k.getChannelData(1);
    xb.buffer = k;
    xb.loop = !0;
    ac(f);
  },
  Ab = new AudioContext(),
  gb = new DOMMatrix(),
  m = new DOMMatrix(),
  eb = new Float32Array(16),
  Sb = new Float32Array(624),
  Xb = new Float32Array(624),
  Pb = new Uint8Array(65536),
  xb = Ab.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
ac(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const t = [new Float32Array(16), new Float32Array(16)],
          n = r => {
            requestAnimationFrame(n);
            var l = (r - (ba || r)) / 1e3;
            if (ua += l, c += Ia = ca ? 0 : Xa(0.066, l), ba = r, 0 < Ia) {
              ma();
              Ha && c > Ha && (Ha = 0, h4.innerHTML = "");
              ea = Q(ea, d[9].h, 0.2 + 0.3 * e(2 * d[9].h - 1));
              da = Q(da, Aa ? Q(da, -9, 1.5) : h(c / 3), 1);
              let K = 1;
              r = () => hb(gb, Ma[++K].m);
              pa = cb(d[12].g, d[13].g);
              ta = bb(Q(ta, 0, 1), $a(ta + 60 * Ia), d[5].g - d[6].h);
              qa = bb(Q(qa, 0, 5), $a(qa + 56 * Ia), pa);
              ra = bb(Q(ra, 0, 4), $a(ra + 48 * Ia), pa);
              Rb(r(), -12, 4.2, 40 * da - 66);
              r().translateSelf(0, 0, -15).scaleSelf(1, h(1.22 - d[1].g), 1);
              r().translateSelf(0, 0, 15).scaleSelf(1, h(1.22 - d[2].g), 1);
              r().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, h(1.1 - d[6].g), 1);
              r().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
              r().translateSelf(
                0,
                0.01 > d[3].g ? -500 : (1 - d[2].g) * d[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (d[3].g - 1),
                0,
              );
              l = Xa(d[2].h, 1 - d[4].h);
              r().translateSelf(l * Math.sin(c / 1.5 + 2) * 12);
              r().translateSelf(l * Math.sin(0.7 * c + 2) * 12);
              r().translateSelf(l * Math.sin(c + 3) * 8.2);
              r().translateSelf(9.8 * (1 - l));
              l = h(1 - 5 * l) * cb(d[4].g, d[5].g);
              r().translateSelf(0, l * Math.sin(1.35 * c) * 4);
              r().translateSelf(0, 0, l * Math.sin(0.9 * c) * 8);
              r().translateSelf(0, -6.5 * d[4].h);
              r().translateSelf(-75, (1 - d[5].h) * (1 - d[6].g) * 3, 55).rotateSelf(180 * (1 - d[5].h) + ta, 0);
              l = cb(d[7].h, d[6].h);
              r().translateSelf(0, l * Math.sin(c) * 5 + 3.5 * (1 - Ya(d[6].g, d[7].g)));
              r().translateSelf(0, l * Math.sin(c + 3) * 6, l * Math.sin(0.6 * c + 1) * 6);
              r().translateSelf(0, -7.3 * d[7].h);
              Rb(r(), -123, 1.4, 55 + -65 * ea);
              l = cb(d[10].g, d[11].g);
              r().translateSelf(0, -2, l * e(Math.sin(1.1 * c)) * -8.5 + 10);
              r().translateSelf(0, -2, l * e(Math.sin(2.1 * c)) * -8.5 + 10);
              r().translateSelf(0, -2, -8.5 * Ya((1 - d[10].g) * (1 - l), l * e(Math.sin(1.5 * c))) + 10);
              l = cb(d[8].h, d[12].h);
              for (var q = 0; 4 > q; q++) {
                r().translateSelf(
                  (2 < q ? 2 * (1 - l) + l : 0) - 100,
                  l * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7,
                  115 + (1 & q ? -1 : 1) * (1 - d[8].h) * (1 - d[12].h) * -7
                    + Ya(l, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),
                );
              }
              r().translateSelf(2.5 * (1 - l) - 139.7, -3 * (1 - d[8].g) + l * Math.sin(0.8 * c) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * l + 3), 0);
              r().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + qa);
              r().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ra);
              r().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ra);
              r().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ra);
              l = cb(d[13].h, d[14].h);
              for (q = 0; 3 > q; ++q) {
                r().translateSelf(0, l * Math.sin(1.5 * c + 1.5 * q) * 4 + (q ? 0 : (1 - d[13].h) * (1 - d[14].h)));
              }
              r().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              l = cb(cb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2);
              r().translateSelf(0, 16 * l, 8.5 * h(2 * l - 1) + 95);
              for (l = 0; 13 > l; ++l) {
                La[l].F(), fb(m, Xb, l);
              }
              for (l = 0; 16 > l; ++l) {
                d[l].F(), fb(m, Xb, l + 13), Xb[16 * l + 223] = 1 - d[l].g;
              }
              oa(r);
              for (r = 0; K >= r; ++r) {
                fb(Ma[r].m, Sb, r - 1);
              }
              fa = 0;
              g();
              Z.b6o(36160, U);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: r, y: l, z: E } = Wa;
              Z.uae(g("b"), !1, fb(hb().rotateSelf(0, 180).invertSelf().translateSelf(-r, -l, 0.3 - E)));
              Yb(g("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(g("b"), !1, fb(hb().translateSelf(-r, -l, -E - 0.3)));
              Yb(g("c"), 0, 40);
              Z.f1s();
            }
            r = Ea;
            l = Fa;
            q = Ga;
            ca
              ? (hb(ka).invertSelf(),
                ob(3.6, 3.5),
                r = kb,
                l = lb,
                q = 5,
                hb(gb, v).rotateSelf(-20, 0).invertSelf().translateSelf(-r, -l, -q).rotateSelf(0, 99))
              : hb(gb, v).rotateSelf(-Ua, -Va).invertSelf().translateSelf(-r, -l, -q);
            z();
            Z.b6o(36160, R);
            Z.v5y(0, 0, 2048, 2048);
            N[0](54.7 * 1.1);
            N[1](126 * 1.1);
            u();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(u("a"), !1, fb(ka));
            Z.uae(u("b"), !1, fb(v));
            Z.uae(u("i"), !1, t[0]);
            Z.uae(u("j"), !1, t[1]);
            Z.ubu(u("k"), r, l, q);
            Yb(u("c"), !ha, 41);
            A();
            Z.ubu(A("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ua);
            Z.ubu(A("k"), r, l, q);
            Z.uae(A("b"), !1, fb(hb(v).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, U);
            Z.f1s();
          },
          v = new DOMMatrix(),
          y = new DOMMatrix(),
          x = f;
        var k = Zb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const z = $b(
            Zb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          A = $b(
            Zb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          g = $b(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          u = $b(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          H = jb(8, () => ({})),
          N = jb(2, r => {
            const l = Z.c25();
            return Z.a4v(33984 + r),
              Z.b9j(3553, l),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              q => {
                let E = 0, K = 0, V = 0, O = 1 / 0, F = 1 / 0, G = 1 / 0, M = -1 / 0, J = -1 / 0, P = -1 / 0;
                Z.fas(36160, 36096, 3553, l, 0);
                Z.c4s(256);
                hb().scale3dSelf(q).multiplySelf(hb(la[r], y).multiplySelf(v).invertSelf());
                for (let B = 0; 8 > B; ++B) {
                  const C = H[B];
                  ob(4 & B ? 1 : -1, 2 & B ? 1 : -1, 1 & B ? 1 : -1);
                  E -= C.x = (0 | kb) / (q * nb);
                  K -= C.y = (0 | lb) / (q * nb);
                  V -= C.z = (0 | mb) / (q * nb);
                }
                hb().rotateSelf(298, 139).translateSelf(E / 8, K / 8, V / 8);
                for (q = 0; 8 > q; ++q) {
                  const { x: B, y: C, z: aa } = H[q];
                  ob(B, C, aa);
                  O = Xa(O, kb);
                  M = Ya(M, kb);
                  F = Xa(F, lb);
                  J = Ya(J, lb);
                  G = Xa(G, mb);
                  P = Ya(P, mb);
                }
                q = 10 + r;
                G *= 0 > G ? q : 1 / q;
                P *= 0 < P ? q : 1 / q;
                Z.uae(
                  z("b"),
                  !1,
                  fb(
                    hb(gb, y).scaleSelf(2 / (M - O), 2 / (J - F), 2 / (G - P)).translateSelf(
                      (M + O) / -2,
                      (J + F) / -2,
                      (G + P) / 2,
                    ).multiplySelf(m),
                    t[r],
                  ),
                );
                Yb(z("c"), !ha, 41);
              };
          }),
          R = Z.c5w();
        k = Z.c25();
        const L = Z.c3z(), U = Z.c5w();
        g();
        Z.uae(g("a"), !1, fb(wb(1e-4, 2, 1.4, 0.4)));
        u();
        Z.ubh(u("q"), 2);
        Z.ubh(u("h"), 1);
        Z.ubh(u("g"), 0);
        A();
        Z.ubh(A("q"), 2);
        Z.b6o(36160, R);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, U);
        Z.bb1(36161, L);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, L);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, x);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Bb)();
        NO_INLINE(Qb)();
        requestAnimationFrame(n);
      }
    },
    f = new Image();
  f.onload = f.onerror = b;
  f.src = Ka;
  NO_INLINE(lc)(() => {
    ac(() => {
      let n = 0;
      const v = [],
        y = [],
        x = [],
        z = [],
        A = new Int32Array(8),
        g = new Map(),
        u = new Int32Array(A.buffer, 0, 5),
        H = new Float32Array(A.buffer);
      Ma.map((N, R) => {
        let L;
        const U = r => {
          let { x: l, y: q, z: E } = L[r], K = (H[0] = l, H[1] = q, H[2] = E, r = "" + (L.C ? u : A), g.get(r));
          return void 0 !== K
            ? (l = 3 * K, z[l] = (z[l++] + A[5]) / 2, z[l] = (z[l++] + A[6]) / 2, z[l] = (z[l] + A[7]) / 2)
            : (g.set(r, K = g.size), y.push(l, q, E, H[3]), x.push(A[4]), z.push(A[5], A[6], A[7])),
            K;
        };
        for (L of (H[3] = 41 < R ? -14 : N.G && R, N.o)) {
          const { x: r, y: l, z: q } = Hb(L);
          A[4] = 0 | L.u;
          A[5] = 32767 * r;
          A[6] = 32767 * l;
          A[7] = 32767 * q;
          for (let E = 2, K = U(0), V = U(1); L.length > E; ++E) {
            v.push(K, V, V = U(E));
          }
        }
        N.o = null;
        N.s = n;
        N.D = n = v.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(y), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(z), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(x), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [N, R, L, U, r] = JSON.parse(localStorage.DanteSP22);
        d.map((l, q) => l.g = l.h = l.i = q ? 0 | N[q] : 0);
        La.map((l, q) => l.i = 0 | R[q]);
        Ba = L;
        ea = r;
        c = U;
        Ia = 0;
      } catch {
      }
      ub();
      da = h(Ba);
      ac(b);
    });
    const k = jb(11, n => p(Math.sin(n / 10 * Math.PI), n / 10).rotate(+n).scale(1.0001 - n / 10, 0, 1 - n / 10)),
      t = jb(10, n => sb(qb(rb(18), k[n]).reverse(), qb(rb(18), k[n + 1]), 1)).flat();
    X(() => T([Ra.slice(1)], p(-2).scale3d(3).rotate(90, 0)), 0);
    X(() => {
      const n = g =>
          X(() => {
            Ra.map(({ x: u, z: H }) => {
              T(I(11, 1), p(4 * u, 4, g + 4 * H).scale(0.8, 3, 0.8), S(0.5, 0.3, 0.7, 0.6));
              T(I(), p(4 * u, 7, g + 4 * H).scale(1, 0.3), S(0.5, 0.5, 0.5, 0.3));
            });
            T(Y(
              D(I(), p(0, 0, g).scale(5, 1, 5), S(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(u => D(I(), p(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), S(0.8, 0.8, 0.8, 0.3))),
            ));
            T(I(), p(0, -3, g).scale(8, 2, 8), S(0.4, 0.4, 0.4, 0.3));
          }),
        v = g =>
          Y(
            D(I(), p(0, -g / 2).scale(6, g - 1, 2.2)),
            D(I(), p(0, -g / 2 - 6).scale(4, g - 3, 4)),
            D(I(32, 1), p(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        y = () => X(() => jb(7, g => T(D(I(6, 1), p(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), S(0.3, 0.3, 0.38))))),
        x = Y(
          D(I(30, 1, 1.15, 1), p(0, -3).scale(3.5, 1, 3.5), S(0.7, 0.4, 0.25, 0.7)),
          D(I(30, 1, 1.3, 1), p(0, -2.5).scale(2.6, 1, 3), S(0.7, 0.4, 0.25, 0.2)),
          D(I(), p(4, -1.2).scale3d(2), S(0.7, 0.4, 0.25, 0.3)),
        ),
        z = (X(() => {
          T(x);
          Cb(p(0, -3, 4));
        }),
          Cb(p(-5.4, 1.5, -19).rotate(0, -90)),
          Db(p(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Db(p(0, 2.8), [5, 10, 3], [-5, 10, 3], ...rb(18).map(({ x: g, z: u }) => [7 * g, 10 * u, 4.5 - 2 * e(g)])),
          Ra.map(({ x: g, z: u }) => T(I(6), p(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), S(0.6, 0.3, 0.3, 0.4))),
          [-15, 15].map((g, u) => {
            y();
            y();
            T(I(), p(0, 6.3, g).scale(4, 0.3, 1), S(0.3, 0.3, 0.3, 0.4));
            T(I(), p(0, 1, g).scale(3, 0.2, 0.35), S(0.5, 0.5, 0.5, 0.3));
            T(I(), p(0, 0, u ? 22 : -23).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2));
            jb(5, H =>
              T(
                t,
                p(18.5 * (u - 0.5), 0, 4.8 * H - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2),
                S(1, 1, 0.8, 0.2),
              ));
          }),
          T(I(), p(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
          T(I(), p(3, 1.5, -20).scale(0.5, 2, 5), S(0.7, 0.7, 0.7, 0.2)),
          T(I(), p(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(0.75, 0.75, 0.75, 0.2)),
          T(I(5), p(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(0.6, 0.3, 0.3, 0.4)),
          T(I(), ib(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), S(0.8, 0.2, 0.2, 0.5)),
          T(Y(
            Ob(
              D(I(6, 0, 0, 0.3), p(8, -3, -4).scale(13, 1, 13), S(0.7, 0.7, 0.7, 0.2)),
              D(I(6), p(0, -8).scale(9, 8, 8), S(0.4, 0.2, 0.5, 0.5)),
              D(I(6, 0, 0, 0.3), p(0, -0.92).scale(13, 2, 13), S(0.8, 0.8, 0.8, 0.2)),
            ),
            D(I(5), w(5, 30, 5), S(0.4, 0.2, 0.6, 0.5)),
            D(I(5, 0, 1.5), p(0, 1).scale(4.5, 0.3, 4.5), S(0.7, 0.5, 0.9, 0.2)),
            D(I(), ib(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), S(0.5, 0.5, 0.5, 0.5)),
            D(I(6), p(15, -1.5, 4).scale(3.5, 1, 3.5), S(0.5, 0.5, 0.5, 0.5)),
          )),
          X(() => {
            T(I(5), p(0, -0.2).scale(5, 1, 5), S(0.6, 0.65, 0.7, 0.3));
            Cb(p(0, 1.2));
          }),
          Cb(p(15, -2, 4)),
          X(() => {
            T(
              Y(
                Ob(
                  D(I(), w(1.5, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  D(I(6), w(4, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  D(I(), p(0, -2).scale(2, 3.2, 1.9), S(0.3, 0.8, 0.5, 0.5)),
                  D(I(16, 1, 0, 4), w(1, 1, 1.5).rotate(0, 90), S(0.9, 0.9, 0.9, 0.2)),
                ),
                D(I(), w(1.3, 10, 1.3), S(0.2, 0.7, 0.4, 0.6)),
              ),
              p(0, 0, 45),
            );
            Db(p(0, 2.8, 45), [0, 0, 4.5]);
          }),
          n(35),
          n(55),
          T(I(), p(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
          X(() => {
            T(I(3), p(-23, -1.7, 55.8).scale(5, 0.7, 8.3), S(0.3, 0.6, 0.6, 0.2));
            T(I(8), p(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(0.8, 0.8, 0.8, 0.2));
            T(I(), p(-23, -3, 55).scale(5.2, 1.7, 3), S(0.5, 0.5, 0.5, 0.3));
            T(I(), p(-23, -2.2, 62).scale(3, 1, 4), S(0.5, 0.5, 0.5, 0.3));
            Cb(p(-23, -0.5, 66.5));
          }),
          X(() => {
            T(I(), p(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(0.7, 0.7, 0.7, 0.2));
            T(Y(D(I(), w(3, 1.4, 2.7)), D(I(), w(1.2, 8, 1.2))), p(-33, -3, 55), S(0.7, 0.7, 0.7, 0.2));
          }),
          X(() => {
            T(Y(
              D(I(), p(-27, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
              D(I(), p(-27, -3, 55).scale(1, 3), S(0.9, 0.9, 0.9, 0.2)),
            ));
            T(I(), p(-39, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2));
          }),
          X(() => {
            T(I(6), p(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), S(0.7, 0.7, 0.7, 0.4));
          }),
          Cb(p(-55, -1.1, 46).rotate(0, 90)),
          T(I(6), p(-61.3, -2.4, 49).scale(3, 1, 5), S(0.4, 0.6, 0.6, 0.3)),
          T(I(7), p(-57, -2.6, 46).scale(4, 1, 4), S(0.8, 0.8, 0.8, 0.3)),
          [
            ...D(I(), p(0, -3).scale(11, 1.4, 3), S(0.9, 0.9, 0.9, 0.2)),
            ...D(I(), p(0, -2.2).scale(7.7, 0.5, 4), S(0.5, 0.5, 0.5, 0.2)),
            ...Y(
              D(I(6), ib(90).scale(6, 8, 6), S(0.3, 0.6, 0.6, 0.3)),
              D(I(4, 0, 0.01), p(0, 6).scale(12, 2, 0.75).rotate(0, 45), S(0.3, 0.6, 0.6, 0.3)),
              D(I(6), ib(90).scale(5, 12, 5), S(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(g => D(I(5), p(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        A = (T(z, p(-53, 0, 55)),
          X(() => T(z), 2),
          T(I(), p(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(0.7, 0.7, 0.7, 0.2)),
          T(I(3, 0, -0.5), p(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(0.8, 0.8, 0.8, 0.2)),
          T(Y(
            Ob(
              D(I(), p(-100, -2.4, 55).scale(8, 0.9, 8), S(0.8, 0.8, 0.8, 0.2)),
              D(I(), p(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
              D(I(), p(-100, -2.6, 70).scale(3, 1.1, 7), S(0.8, 0.8, 0.8, 0.2)),
              D(I(), p(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(0.8, 0.8, 0.8, 0.2)),
              D(I(6), p(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(0.6, 0.6, 0.6, 0.3)),
              D(I(), p(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(0.8, 0.8, 0.8, 0.2)),
              D(I(), p(-100, 0.42, 92).scale(3, 1.1, 4.1), S(0.8, 0.8, 0.8, 0.2)),
            ),
            D(I(8), p(-100, -1, 55).scale(7, 0.9, 7), S(0.3, 0.3, 0.3, 0.4)),
            D(I(8), p(-100, -2, 55).scale(4, 0.3, 4), S(0.4, 0.4, 0.4, 0.5)),
            D(I(8, 0, -3.1), p(-100, -3, 55).scale(0.4, 1, 0.4), S(0.4, 0.4, 0.4, 0.5)),
          )),
          Db(p(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Db(p(-89, 0.2, 80), [0, 0, 6]),
          T(Y(
            D(I(), p(-100, 1, 63).scale(7.5, 4), S(0.5, 0.5, 0.5, 0.4)),
            D(I(), p(-100, 0, 70).scale(2, 2, 10), S(0.5, 0.5, 0.5, 0.4)),
            D(I(20, 1), p(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(0.5, 0.5, 0.5, 0.4)),
          )),
          Ra.map(({ x: g, z: u }) => {
            T(I(6), p(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), S(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(H => T(I(6), p(7 * g - 100, H, 7 * u + 55).scale(1.3, 0.5, 1.3), S(0.4, 0.2, 0.2, 0.8)));
          }),
          jb(7, g => {
            T(
              I((23 * g + 1) % 5 + 5, 0, 0.5),
              p(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3),
              S(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
            );
          }),
          T(I(), p(-87, -9.5, 24).scale(7, 1, 3), S(0.4, 0.5, 0.6, 0.4)),
          T(I(4), p(-86, -9.2, 27).scale(5, 1, 5), S(0.5, 0.6, 0.7, 0.3)),
          T(I(12, 1), p(-86, -9, 31).scale(1.5, 1, 1.5), S(0.3, 0.3, 0.4, 0.1)),
          Cb(p(-86, -7.5, 31)),
          X(() => {
            [0, 12, 24].map(g =>
              T(I(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), S(0.2, 0.5, 0.6, 0.2))
            );
          }),
          X(() => {
            [6, 18].map(g =>
              T(I(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), S(0.1, 0.4, 0.5, 0.2))
            );
          }),
          T(
            Y(
              Ob(
                D(I(5), p(0, 0, -7).scale(2, 1.2, 2), S(0.2, 0.4, 0.7, 0.3)),
                D(I(5), w(9, 1.2, 9), S(0, 0.2, 0.3, 0.5)),
                D(I(), w(11, 1, 13), S(0.3, 0.4, 0.6, 0.3)),
              ),
              D(I(5), w(5.4, 5, 5.4), S(0, 0.2, 0.3, 0.5)),
            ),
            p(-38.9, -11.3, 17),
          ),
          Cb(p(-38.9, -9.6, 10)),
          X(() => {
            T(
              Y(
                Ob(
                  D(I(5), p(0, 2).scale(5, 7, 5).skewY(8), S(0.2, 0.4, 0.5, 0.5)),
                  D(I(5), p(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(0.25, 0.35, 0.5, 0.5)),
                  D(I(5), p(0, 9).scale(0.6, 7, 0.6).skewY(8), S(0.35, 0.3, 0.5, 0.5)),
                ),
                D(I(5), w(4, 8, 4), S(0.2, 0.4, 0.5, 0.5)),
                D(I(5), p(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(0.2, 0.4, 0.5, 0.5)),
              ),
              p(-38.9, -11.3, 17),
            );
            Db(p(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({ x: g, z: u }) => [3 * g, 3 * u, 1.2]));
          }),
          Ra.map(({ x: g, z: u }) => {
            T(I(14, 1), p(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), S(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(H =>
              T(I(17, 1), p(9 * g - 38.9, H - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), S(0.6, 0.6, 0.6, 0.3))
            );
          }),
          T(
            Y(
              Ob(
                D(I(6), p(0, 0, -36).scale(15, 1.2, 15), S(0.7, 0.7, 0.7, 0.3)),
                D(I(), p(0, 0, -18).scale(4, 1.2, 6), S(0.45, 0.4, 0.6, 0.3)),
              ),
              ...jb(6, g =>
                jb(6, u =>
                  D(
                    I(6),
                    p(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2),
                    S(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            p(-38.9, -11.3, 17),
          ),
          Db(p(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          T(I(5), p(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), S(0.8, 0.1, 0.25, 0.4)),
          Cb(p(-84, -0.5, 85).rotate(0, 45)),
          X(() => {
            T(x);
            Cb(p(0, -3, -4).rotate(0, 180));
          }),
          Y(
            D(I(), p(0, -0.5, 1).scale(1.15, 1.2, 6.5), S(0.25, 0.25, 0.35, 0.3)),
            Y(
              D(I(3), p(0, 0, -5.5).scale(3, 2), S(0.6, 0.3, 0.4, 0.3)),
              D(I(), p(0, 0, -3.65).scale(2.5, 3), S(0.6, 0.3, 0.4, 0.3)),
            ),
            ...[-1, 1].map(g => D(I(), p(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), S(0.7, 0.2, 0, 0.3))),
          ));
      X(() =>
        jb(2, g =>
          T(A, p(9 * g - 110 + (1 & g), 1.9, -12)))
      );
      X(() =>
        jb(2, g =>
          T(A, p(9 * (g + 2) - 110 + (1 & g), 1.9, -12)))
      );
      X(() =>
        jb(3, g =>
          T(A, p(9 * g - 106, 1.9, -12)))
      );
      T(
        Y(
          Ob(D(I(), p(26.5, -1.6, 10).scale(20, 2.08, 3)), D(I(), p(26.5, -0.5, 10).scale(19, 2, 0.5))),
          ...jb(4, g => D(I(), p(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
          ...jb(3, g => D(I(), p(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        p(-123, 0.2, -12),
        S(0.5, 0.5, 0.6, 0.2),
      );
      Cb(p(-116, -1.4, -18).rotate(0, 180));
      T(I(), p(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(0.8, 0.8, 0.8, 0.2));
      T(I(6), p(-116, -2.6, -16.5).scale(3.2, 0.8, 3), S(0.6, 0.5, 0.7, 0.2));
      T(I(), p(-115.5, -17, -12).scale(0.5, 15, 2.2), S(0.6, 0.6, 0.6, 0.3));
      T(I(8), p(-114, -17, -2).scale(2, 15, 2), S(0.6, 0.6, 0.6, 0.3));
      T(I(8), p(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, 0.3));
      T(I(), p(-77, -17, -50.5).scale(2.2, 15, 0.5), S(0.6, 0.6, 0.6, 0.3));
      jb(3, g => {
        T(v(16), p(12 * g - 109, -9, -12), S(0.6, 0.6, 0.6, 0.3));
        T(v(16), p(-77, -9, -12 * g - 20).rotate(0, 90), S(0.6, 0.6, 0.6, 0.3));
      });
      T(Y(
        D(I(12), p(-77, -14.5, -12).scale(4, 17.5, 4), S(0.7, 0.7, 0.7, 0.2)),
        D(I(), p(-79, 0.1, -12).scale(3.5, 2, 1.3), S(0.4, 0.5, 0.6, 0.2)),
        D(I(), p(-77, 0.1, -14).scale(1.5, 2, 2), S(0.4, 0.5, 0.6, 0.2)),
        D(I(12), p(-77, 3.1, -12).scale(3, 5, 3), S(0.4, 0.5, 0.6, 0.2)),
      ));
      T(I(), p(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(0.6, 0.6, 0.6, 0.3));
      T(I(9), p(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(0.5, 0.5, 0.5, 0.3));
      T(Y(
        D(I(), p(-93, -5.8, -40).scale(9, 1, 5), S(0.8, 0.8, 0.8, 0.1)),
        D(I(9), p(-98, -5.8, -40).scale(3, 8, 3), S(0.7, 0.7, 0.7, 0.2)),
      ));
      Cb(p(-98, -4.4, -40).rotate(0, 90));
      Db(p(-115, 0.2, -12), [0, 0, 3.5]);
      Db(p(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      T(Y(
        Ob(
          D(I(6, 0, 0, 0.6), p(-100, 0.7, 105.5).scale(8, 1, 11), S(0.7, 0.7, 0.7, 0.2)),
          D(I(), p(-101.5, 0.7, 93.5).scale(10.5, 1, 2), S(0.7, 0.7, 0.7, 0.2)),
        ),
        D(I(5), p(-100, 0.7, 113).scale(4, 3, 4), S(0.7, 0.7, 0.7, 0.2)),
      ));
      jb(
        4,
        g =>
          X(() =>
            T(
              I(6),
              p(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              S(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
            )
          ),
      );
      X(() => {
        T(Y(D(I(10), w(6, 2, 6), S(0.1, 0.6, 0.5, 0.3)), D(I(10), w(3.3, 6, 3.3), S(0.1, 0.6, 0.5, 0.5))));
        T(I(15, 1), p(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(0.4, 0.4, 0.4, 0.3));
        T(I(10), p(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(0.3, 0.8, 0.7, 0.3));
        T(I(5), p(-7.5).rotate(0, 90).scale(1, 3), S(0.5, 0.5, 0.5, 0.5));
        Cb(p(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => T(t, ib(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, 0.8, 0.2)));
        Db(p(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(g => {
        [7.2, 1.5].map(u => T(I(15, 1), p(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), S(0.5, 0.24, 0.2, 0.4)));
        T(t, p(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), S(1, 1, 0.8));
        T(I(12, 1), p(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), S(0.6, 0.24, 0.2, 0.5));
        T(
          Y(
            D(I(), p(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), S(0.5, 0.5, 0.5, 0.4)),
            D(I(), w(3, 3, 10), S(0.6, 0.24, 0.2, 0.5)),
            D(I(28, 1), p(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(0.6, 0.24, 0.2, 0.5)),
            D(I(5), p(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(0.6, 0.24, 0.2, 0.5)),
            D(I(5), p(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), S(0.6, 0.24, 0.2, 0.5)),
          ),
          p(g - 100, 0.7, 97),
        );
      });
      T(Y(
        D(I(), p(-82.07, 0.8, 106).scale(11, 0.9, 2.2), S(0.7, 0.7, 0.7, 0.1)),
        D(I(45, 1), p(-81, 0.7, 106).scale3d(7.7), S(0.7, 0.7, 0.7, 0.1)),
      ));
      X(() => {
        T(Y(
          D(I(45, 1), w(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)),
          D(I(), p(0, 0, -5.5).scale(1.5, 3, 2.7), S(0.45, 0.45, 0.45, 0.2)),
        ));
        T(I(8), p(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(0.7, 0.7, 0.7, 0.1));
        T(I(5), p(0, 2).scale(1, 2), S(0.3, 0.3, 0.3, 0.2));
        Db(p(0, 3), ...rb(14).map(({ x: g, z: u }) => [5.6 * g, 5.6 * u, 2]));
      });
      X(() => {
        [-1, 1].map(g =>
          T(t, ib(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), S(1, 1, 0.8))
        );
        T(Y(D(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)), D(I(), w(9, 5, 2), S(0.3, 0, 0, 0.3))));
        T(D(I(28, 1), w(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        T(D(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      X(() => {
        T(Y(
          D(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          D(I(), p(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          D(I(), p(0, 0, 7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        T(D(I(28, 1), w(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        T(D(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      X(() => {
        T(Y(
          D(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          D(I(), p(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          D(I(), p(0, 0, -7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        T(D(I(28, 1), w(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        T(D(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      T(I(), p(-58, 1, 106).scale(2, 0.65, 2), S(0.7, 0.7, 0.7, 0.2));
      T(I(), p(-50.7, 1, 99).scale(2, 0.65, 1), S(0.7, 0.7, 0.7, 0.2));
      T(I(), p(-42, 0.4, 91).scale(5, 1, 2.5), S(0.7, 0.7, 0.7, 0.3));
      T(I(), p(-34.2, 0.4, 91).scale(3, 1, 3), S(0.7, 0.7, 0.7, 0.3));
      Cb(p(-34, 2.7, 96).rotate(-12, 0));
      T(I(5), p(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), S(0.2, 0.5, 0.5, 0.6));
      [S(0.1, 0.55, 0.45, 0.2), S(0.2, 0.5, 0.5, 0.3), S(0.3, 0.45, 0.55, 0.4)].map((g, u) =>
        X(() => {
          T(I(), p(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
          2 === u && T(I(), p(-29.1, 0.4, 91).scale(2.1, 1, 3), S(0.7, 0.7, 0.7, 0.3));
          1 === u && T(I(), p(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), S(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(g => T(t, p(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), S(1, 1, 0.8)));
      jb(
        3,
        g =>
          T(
            v(24.7 - 0.7 * (1 & g)),
            p(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)),
            1 & g ? S(0.5, 0.5, 0.5, 0.3) : S(0.35, 0.35, 0.35, 0.5),
          ),
      );
      T(Y(
        D(I(6, 0, 0, 0.3), p(0, -0.92, 95).scale(14, 2, 14), S(0.8, 0.8, 0.8, 0.2)),
        D(I(5), p(0, 0, 95).scale3d(6), S(0.3, 0.3, 0.3, 0.5)),
      ));
      Cb(p(0, 1.7, 82).rotate(0, 180));
      T(I(5), p(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(0.5, 0.3, 0.3, 0.4));
      T(I(6), p(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(0.5, 0.6, 0.7, 0.3));
      T(I(), p(0, 16, 129).scale(1.5, 1, 2), S(0.5, 0.6, 0.7, 0.3));
      T(I(7), p(0, 16.2, 133).scale(5, 1, 5), S(0.4, 0.5, 0.6, 0.4));
      T(Y(
        Ob(
          D(I(), p(0, 16, 110.5).scale(12, 1, 3), S(0.5, 0.3, 0.3, 0.4)),
          D(I(), p(0, 16, 111).scale(3, 1, 3.8), S(0.5, 0.3, 0.3, 0.4)),
        ),
        D(I(5), p(0, 16, 103.5).scale(5.5, 5, 5.5), S(0.5, 0.3, 0.3, 0.4)),
      ));
      X(() => {
        T(I(3), p(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), S(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          T(I(6), p(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), S(0.7, 0.7, 0.7, 0.4));
          T(I(), p(0, 6.2, g + 95).scale(0.5, 11, 0.5), S(0.5, 0.3, 0.3, 0.4));
        });
      });
      X(() => {
        T(I(5), w(5, 1.1, 5), S(0.5, 0.3, 0.3, 0.4));
        T(I(5), w(5.5, 0.9, 5.5), S(0.25, 0.25, 0.25, 0.4));
        Cb(p(0, 1.5, -1).rotate(0, 180));
      });
      Db(p(0, 3, 95), ...rb(9).map(({ x: g, z: u }) => [9 * g, 9 * u, 4]));
      Db(p(0, 19, 134), [0, 0, 3.5]);
    });
    X(() => {
      T(tb(20), p(0, 1).scale3d(0.5), S(1, 0.3, 0.4));
      T(tb(30), w(0.65, 0.8, 0.55), S(1, 0.3, 0.4));
      T(I(), p(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), S(0.3, 0.3, 0.3));
      [-1, 1].map(n => {
        T(t, ib(0, 0 < n ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), S(1, 1, 0.8));
        T(
          D(Y(I(15, 1), D(I(), p(0, 0, 1).scale(2, 2, 0.5))), ib(-90, 0).scale(0.1, 0.05, 0.1), S(0.3, 0.3, 0.3)),
          p(0.2 * n, 1.2, 0.4).rotate(0, 20 * n, 20 * n),
        );
        X(() => {
          T(I(20, 1), p(0.3 * n, -0.8).scale(0.2, 0.7, 0.24), S(1, 0.3, 0.4));
        });
      });
    });
    X(() => {
      T(I(6).slice(0, -1), w(0.77, 1, 0.77), S(1, 0.3, 0.5));
    }, 0);
    X(() => {
      T(
        tb(30, 24, (n, v, y) => {
          const x = v / 24, z = n * Math.PI * 2 / 30, A = Math.sin(x ** 0.6 * Math.PI / 2);
          n = x * x * Math.sin(n * Math.PI * 14 / 30) / 4;
          return 23 < v
            ? { x: y.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(z) * A,
              y: Math.cos(x * Math.PI) - x - n,
              z: Math.sin(z) * A + Math.sin(n * Math.PI * 2) / 4,
            };
        }),
        w(0.7, 0.7, 0.7),
        S(1, 1, 1),
      );
      [-1, 1].map(n => T(tb(12), p(0.16 * n, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    X(() => {
      T(I(6, 1), w(0.13, 1.4, 0.13), S(0.3, 0.3, 0.5, 0.1));
      T(I(10), p(0, 1).scale(0.21, 0.3, 0.21), S(1, 0.5, 0.2));
      T(I(3), p(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), S(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
