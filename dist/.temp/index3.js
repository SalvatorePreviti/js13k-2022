let aa,
  ba,
  ca,
  da,
  ea,
  fa,
  ka,
  la,
  ma,
  na,
  pa,
  qa,
  ra,
  ta,
  ua,
  c = 0,
  va = 0,
  wa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 1,
  d = 0.066;
const Ja = Math.PI / 180,
  Ka = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  La = [],
  e = [],
  Ma = [],
  Na = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ra = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Sa = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Ta = 0, Ua = 180;
const Va = { x: 0, y: 0, z: 0 },
  h = NO_INLINE(a => 0 > a ? -a : a),
  Wa = NO_INLINE((a, b) => a < b ? a : b),
  Xa = NO_INLINE((a, b) => b < a ? a : b),
  Ya = (a, b) => h(a) > b ? a : 0,
  m = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a,
  Za = a => Math.atan2(Math.sin(a * Ja), Math.cos(a * Ja)) / Ja,
  $a = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * m(f) || 0,
  ab = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0,
  bb = (a, b) => (a = m(a), ab(a, 1 - a, b)),
  cb = (a, b, f = 0) =>
    Math.sqrt(
      a
          * a + b * b + f * f,
    ),
  hb = (a = 0, b = 0, f = 0, k = 1) => {
    db = p.m11 * a + p.m21 * b + p.m31 * f + p.m41 * k;
    eb = p.m12 * a + p.m22 * b + p.m32 * f + p.m42 * k;
    fb = p.m13 * a + p.m23 * b + p.m33 * f + p.m43 * k;
    gb = p.m14 * a + p.m24 * b + p.m34 * f + p.m44 * k;
  };
var db, eb, fb, gb;
const jb = (
    a,
    b = ib,
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
  lb = (
    a = kb,
    b = p,
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
  w = NO_INLINE((a, b, f) => kb.translate(a, b, f)),
  mb = NO_INLINE((a, b, f) => kb.rotate(a, b, f)),
  E = NO_INLINE((a, b, f) => kb.scale(a, b, f)),
  nb = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  ob = (a, b, f) => (a.C = f, a.u = b, a),
  pb = (a, b, f = a.u) => (lb(b), ob(a.map(({ x: k, y: t, z: n }) => (hb(k, t, n), { x: db, y: eb, z: fb })), f, a.C)),
  I = (a, b, f) => a.map(k => pb(k, b, f)),
  qb = (a, b = 0) =>
    nb(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > h(k) ? k : 0 > k ? k - b : k + b };
    }),
  rb = (a, b, f) =>
    a.map((k, t, { length: n }) => ob([k, b[n - t - 1], b[n - (t + 1) % n - 1], a[(t + 1) % n]], a.u, f)),
  Q = (
    a,
    b,
    f = 0,
    k,
  ) => (a = a ? qb(a, k) : Na,
    k = pb(a, w(0, 1).scale3d(0 < f ? f : 1)),
    a = pb(a, w(0, -1).scale3d(0 > f ? -f : 1)).reverse(),
    [...rb(a, k, b), k, a]),
  sb = (
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
        const v = ob([], 0, 1);
        k.push(v);
        v.push(f(t, n, v));
        n && v.push(f((t + 1) % a, n, v));
        b - 1 > n && v.push(f((t + 1) % a, n + 1 % b, v));
        v.push(f(t, n + 1 % b, v));
      }
    }
    return k;
  },
  tb = NO_INLINE((a, b, f) => ab(a, b, 1 - Math.exp(-f * d))),
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
      ][wa = La.reduce((a, { i: b }) => a + b, 0)] + " / XIII";
  },
  vb = () => {
    localStorage.DanteSP22 = JSON.stringify([e.map(({ i: a }) => a), La.map(({ i: a }) => a), Ca, c, da]);
  },
  S = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  wb = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Bb = () => {
    let a, b, f, k, t, n, v, y, x, z, A, g, u, H, M = !0;
    const R = [],
      L = () => {
        b4.innerHTML = "Music: " + M;
        ba || !M ? xb.disconnect() : xb.connect(Ab.destination);
      },
      U = () => {
        const l = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        la = [wb(0.3, 55, l, 1.732051), wb(55, 181, l, 1.732051)];
        ka = wb(0.3, 181, l, 1.732051);
        k = y = void 0;
        R.length =
          ea =
          H =
          g =
          u =
          Da =
          Ea =
            0;
      },
      r = (l, q = 0) => {
        if (ba !== l) {
          ba = l;
          fa = q;
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
      M = !M;
      L();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = l => {
      if (!ba && (l.target === hC && (ea = 1), fa)) {
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
          (R[q] = !!l.type[5] && !0) && (0 === q && (ea = 1), 1 === q && r(!0)));
    };
    onmousemove = ({ movementX: l, movementY: q }) => {
      fa && (l || q) && (Ua += 0.1 * l, Ta += 0.1 * q);
    };
    hC.ontouchstart = l => {
      if (!ba) {
        for (let { pageX: q, pageY: F, identifier: K } of l.changedTouches) {
          fa && q > hC.clientWidth / 2
            ? void 0 === y && (x = 0, n = q, v = F, y = K, z = Ua, A = Ta)
            : void 0 === k && (t = 0, b = q, f = F, k = K);
        }
        a = va;
      }
    };
    hC.ontouchmove = l => {
      if (!ba) {
        for (let { pageX: N, pageY: G, identifier: C } of l.changedTouches) {
          var q, F, K, V;
          y === C && (Ua = z + (N - n) / 2.3, Ta = A + (G - v) / 2.3, x = 1);
          k === C
            && (C = (b - N) / 20,
              q = h(C),
              F = (f - G) / 20,
              K = h(F),
              (V = 0.5 < Xa(q, K)) && (t = 1),
              g = (V && 0.2 < q) * m(C, -1),
              u = (V && 0.2 < K) * m(F, -1),
              2 < q && (b = N + 20 * (0 > C ? -1 : 1)),
              2 < K && (f = G + 20 * (0 > F ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = l => {
      let q;
      document.activeElement === document.body && l.preventDefault();
      for (const F of l.changedTouches) {
        F.identifier === y
          ? (y = void 0, x || (q = 1), x = 0)
          : F.identifier === k
          ? (k = void 0, u = g = 0, t || (q = 1), t = 0)
          : q = 1;
      }
      l.target === hC && q && a && 0.02 < (l = va - a) && 0.7 > l && (ea = 1);
    };
    ma = () => {
      Da = u + (R[4] ? 1 : 0) - (R[5] ? 1 : 0);
      Ea = g + (R[2] ? 1 : 0) - (R[3] ? 1 : 0);
      var l = navigator.getGamepads()[0];
      if (l) {
        const q = K => F[K]?.pressed || 0 < F[K]?.value ? 1 : 0, F = l.buttons;
        l = l.axes;
        fa && (Ta += d * Ya(l[3], 0.3) * 80, Ua += d * Ya(l[2], 0.3) * 80);
        Da += q(12) - q(13) - Ya(l[1], 0.2);
        Ea += q(14) - q(15) - Ya(l[0], 0.2);
        q(9) && r(!0);
        (l = q(3) || q(2) || q(1) || q(0)) && !H && (ea = 1);
        H = l;
      }
    };
    document.onvisibilitychange = onblur = onresize = U;
    r(!0);
  },
  T = (a, b = new DOMMatrix(), f) => na.o.push(...I(a, b, f)),
  X = (a, b = 1) => {
    const f = na;
    Ma.push(na = { m: new DOMMatrix(), G: b, o: [] });
    a();
    na = f;
  },
  Cb = a => {
    const b = na,
      f = e.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = tb(k.g, k.i, 4);
          k.h = tb(k.h, k.i, 1);
          lb(b.m).multiplySelf(a);
          ea && 3 > (hb(), cb(Va.x - db, Va.y - eb, Va.z - fb)) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, f && 1 / 0 > Ia && (Ia = c + 1, h4.innerHTML = "* click *"), Ca = f, vb());
          !f && k.i && 0.8 < k.g && (k.i = 0,
            13 > wa
              ? 1 / 0 > Ia && (Ia = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : Ba
                || (1 / 0 > Ia
                  && (Ia = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  Ba = 1));
          p.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    e.push(k);
    T(Q(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    T(Q(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    T(Q(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), S(0.5, 0.5, 0.4));
  },
  Db = (a, ...b) => {
    let f, k, t, n = 0, v = 0, y = 1, x = 3, z = -1;
    const A = {
        i: 0,
        F() {
          if (!A.i) {
            let V, N, G, C, P, J, O, D = 1, B = 1 / 0;
            for (const ha of g) {
              var { x: l, z: q, w: F } = ha;
              q = (l = cb(H - l, M - q)) - F;
              O ||= 0 > q;
              0 < q && B > q && (B = q, u = ha);
              D = Wa(D, l / F);
            }
            O
              || ({ x: K, z: V, w: N } = u,
                G = H - K,
                C = M - V,
                P = cb(G, C),
                J = Math.atan2(-C, G),
                y && (v = (Math.random() - 0.5) * Math.PI / 2, x = m(x / (1 + Math.random()))),
                J += v,
                z = -Math.cos(J),
                n = Math.sin(J),
                0.1 < P && (P = Wa(P, N) / (P || 1), H = G * P + K, M = C * P + V));
            y = O;
            x = tb(x, 6 * (1 - D) + 3, D + 3);
            R = tb(R, H = tb(H, H + z, x), x);
            L = tb(L, M = tb(M, M + n, x), x);
            f = $a(f, Math.atan2(R - k, L - t) / Ja - 180, 1 - Math.exp(-3 * d));
            lb(U).multiplySelf(a).translateSelf(k = R, 0, t = L).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
            if (1.6 > (hb(), cb(Va.x - db, Va.y - eb, Va.z - fb))) {
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
              ][wa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Ia && (Ia = c + (wa && 12 > wa ? 5 : 7), h4.innerHTML = K);
              ub();
              vb();
            }
          }
          A.i
            && lb(Ma[2].m).translateSelf(
              r % 4 * 1.2 - 1.7 + Math.sin(c + r) / 7,
              -2,
              1.7 * (r / 4 | 0) - 5.5 + h(r % 4 - 2) + Math.cos(c / 1.5 + r) / 6,
            );
        },
      },
      g = b.map(([l, q, F]) => ({ x: l, z: q, w: F }));
    let u = g[0], { x: H, z: M } = u, R = H, L = M;
    const U = na.m, r = La.length;
    La.push(A);
  },
  Gb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  Hb = a => {
    let b, f = 0, k = 0, t = 0, n = a.at(-1);
    for (b of a) {
      f += (n.y - b.y) * (n.z + b.z), k += (n.z - b.z) * (n.x + b.x), t += (n.x - b.x) * (n.y + b.y), n = b;
    }
    return b = cb(f, k, t), f /= b, k /= b, t /= b, { x: f, y: k, z: t, w: f * n.x + k * n.y + t * n.z };
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
          l: 2 < k.length && { B: ob(k, n.u, n.C), v, A: b },
          j: 2 < t.length && { B: ob(t, n.u, n.C), v, A: b },
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
        return ob(v ? y.reverse() : y, n.u, n.C);
      });
  },
  Qb = () => {
    let a, b, f, k, t, n, v, y, x, z, A, g, u, H, M = 0, R = 0, L = 0, U = 1, r = 2, l = 15;
    const q = () => lb((r ? e[Ca] : Ma[A && 1 === Ma[A].G && A || 0]).m),
      F = N => {
        1 < r ? (lb(e[Ca].m).multiplySelf(e[Ca].H), hb(0, Ca || 0.9 < ca ? 15 : 1, -2.4)) : (q(), hb(M, R, L));
        N && (t = (db - Va.x) / d, n = (fb - Va.z) / d);
        Va.x = db;
        Va.y = eb;
        Va.z = fb;
      },
      K = () => {
        var N = 0, G = 0, C = 0, P = 0, J = 0, O = 0, D = -1;
        for (var B = 0; 36 > B; ++B) {
          var ha = 512 * B;
          for (var oa = 96; 416 > oa; oa += 4) {
            for (var sa = 0; 2 > sa; ++sa) {
              var ja = Pb[ha + oa + sa], xa = Pb[ha + oa + sa + 2];
              ja > P && (P = ja);
              ja + xa && (0 > D || D === B) && (D = B, xa === z ? ++N : G && G !== xa || (G = xa, ++C));
            }
          }
        }
        z = 0 > D ? 0 : C > 2 * N ? G : z;
        for (N = 36; 128 > N; N += 1) {
          B =
            D =
            C =
            G =
              0;
          ha = 512 * N;
          for (oa = 0; 128 > oa; oa += 1) {
            for (sa = ha + 4 * oa, ja = 0; 2 > ja; ++ja) {
              xa = Pb[sa + ja];
              const ya = Pb[sa + ja + 2];
              (ja ? 64 < oa : 64 > oa) ? G = Xa(G, xa) : C = Xa(C, xa);
              ja ? B = Xa(B, ya) : D = Xa(D, ya);
            }
          }
          h(C - G) > h(J) && (J = C - G);
          h(B - D) > h(O) && (O = B - D);
        }
        y = m(1 - 0.02 * Xa(h(J), h(O)));
        J /= 255;
        P /= 255;
        O /= 255;
        q().invertSelf();
        hb(J, P, O, 0);
        M += db;
        R += P;
        L += fb;
        F();
      },
      V = (N, G, C, P) => ab(N, G, U || (m(h(G - N) ** 0.5 - C) + 1 / 7) * (1 - Math.exp(-(1.5 * P) * d)));
    pa = N => {
      F(z);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Pb);
      NO_INLINE(K)();
      !r && z === A || (A = z, q().invertSelf(), hb(Va.x, Va.y, Va.z), M = db, R = eb, L = fb);
      r = r && (z ? 0 : 1);
      var G = Va.x, C = Va.y;
      const P = Va.z;
      var J =
          (C < (-20 > G || 109 > P ? -25 : -9) && (r = 2),
            1 === z && (e[9].i = -15 > G && 0 > P ? 1 : 0),
            x = ab(tb(x, C, 2), C, r || 8 * h(x - C)),
            u = V(u, x, 2, 1),
            g = V(g, G, 0.5, 1),
            H = V(H, P, 0.5, 1),
            k = tb(k, qa * (27 < z && 32 > z), 2),
            fa
              ? (J = r + (1 - Math.exp(-18 * d)),
                Fa = ab(Fa, G, J),
                Ga = ab(Ga, x + 1.5, J),
                Ha = ab(Ha, P, J),
                Ua = Za(Ua))
              : (Ha = V(Ha, H + -18 + 5 * k, 1, 2 + k),
                Ga = V(Ga, Xa(u + m((-60 - P) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
                Fa = V(Fa, g, 1, 2 + k),
                J = Wa(-6, -h(H - Ha)),
                O = g - Fa,
                Ua = $a(Ua, 90 - Za(Math.atan2(J, O) / Ja), U + (1 - Math.exp(-10 * d))),
                Ta = $a(Ta, 90 - Math.atan2(cb(J, O), Ga - u) / Ja, U + (1 - Math.exp(-10 * d)))),
            Ta = m(Ta, -87, 87),
            U = 0,
            m(Da, -1)),
        O = m(Ea, -1);
      const D = Ya(cb(J, O) ** 0.5, 0.1);
      var B = Math.atan2(J, O);
      J = D * h(J) * Math.sin(B);
      O = D * h(O) * Math.cos(B);
      D && (a = 90 - B / Ja);
      b = $a(b, a, 1 - Math.exp(-8 * d));
      f = tb(f, D, 10);
      N().translateSelf(G, x, P).rotateSelf(0, b);
      for (B = 0; 2 > B; ++B) {
        G = 9.1 * c - Math.PI * B,
          lb(Ma[37].m, N()).translateSelf(0, f * m(0.45 * Math.sin(G - Math.PI / 2))).rotateSelf(
            f * Math.sin(G) * 0.25 / Ja,
            0,
          );
      }
      l = z ? 5 : tb(l, r ? 13 : 19 - 2 * Wa(0, C + 10), 2.2);
      t = z || r ? 0 : tb(t, 0, 3);
      n = z || r ? 0 : tb(n, 0, 3);
      v = r ? 0 : tb(v, z ? 7 * m(2 * D) * y : 0, z ? 9 : 1);
      B = fa ? (180 + Ua) * Ja : 0;
      N = d * (t + v * (O * Math.cos(B) - J * Math.sin(B)));
      C = -l * d;
      J = d * (n + v * (O * Math.sin(B) + J * Math.cos(B)));
      q().invertSelf();
      hb(N, C, J, 0);
      M += db;
      R += C;
      L += fb;
      F();
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
    ba
      ? 1100 < hC.width
        && (lb().rotateSelf(0, 40 * Math.sin(va) - 80, -8),
          jb(p, Sb, 36),
          jb(p, Sb, 37),
          jb(p, Sb, 38),
          Z.uae(a, !1, Sb),
          Z.d97(4, Ma[39].D - Ma[37].s, 5123, 2 * Ma[37].s))
      : (Z.uae(a, !1, Sb),
        Z.d97(4, (b ? Ma[39].D : Ma[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Xb),
        Z.das(4, Ma[f].D - Ma[f].s, 5123, 2 * Ma[f].s, La.length),
        Z.das(4, Ma[42].D - Ma[42].s, 5123, 2 * Ma[42].s, e.length));
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
        const y = D => {
            let B, ha, oa, sa = 0, ja = 0;
            const xa = [],
              ya = new Int32Array(768 * D),
              fc = 2 ** (q - 9) / D,
              gc = Math.PI * 2 ** (G - 8) / D,
              Eb = P * D & -2;
            for (let yb = 0; 11 >= yb; ++yb) {
              for (
                let zb = 0, Tb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + yb];
                32 > zb;
                ++zb
              ) {
                const Ub = (32 * yb + zb) * D;
                for (var Oa = 0; 4 > Oa; ++Oa) {
                  if (B = 0, Tb && (B = x[Tb - 1].charCodeAt(zb + 32 * Oa) - 40, B += 0 < B ? 106 : 0), B) {
                    var ia;
                    if (!(ia = xa[B])) {
                      ia = B;
                      let W = void 0, za = void 0;
                      var Vb = B;
                      let hc = 0, ic = 0;
                      const jc = 2 > b ? dc : bc, kc = 2 > b ? 1 > b ? cc : ec : bc, Wb = new Int32Array(L + U + O);
                      for (let Pa = 0, Fb = 0; L + U + O > Pa; ++Pa, ++Fb) {
                        let Qa = 1;
                        L > Pa ? Qa = Pa / L : L + U > Pa || (Qa = (1 - (Qa = (Pa - L - U) / O)) * 3 ** (-l / 16 * Qa));
                        0 > Fb
                          || (Fb -= 4 * D,
                            za = 0.00396 * 2 ** ((Vb + A - 256) / 12),
                            W = 0.00396 * 2 ** ((Vb + H - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Wb[Pa] = 80
                            * (jc(hc += za * Qa ** (g / 32)) * z + kc(ic += W * Qa ** (M / 32)) * u
                              + (R ? (2 * Math.random() - 1) * R : 0))
                            * Qa | 0;
                      }
                      ia = xa[ia] = Wb;
                    }
                    for (let W = 0, za = 2 * Ub; ia.length > W; ++W, za += 2) {
                      ya[za] += ia[W];
                    }
                  }
                }
                for (let W, za = 0; D > za; ++za) {
                  Oa = 0;
                  ia = 2 * (Ub + za);
                  var Aa = (((W = ya[ia]) || oa)
                    && (ha = 0.00308 * F,
                      1 !== b && 4 !== b || (ha *= Math.sin(fc * ia * Math.PI * 2) * J / 512 + 0.5),
                      ha = 1.5 * Math.sin(ha),
                      sa += ha * ja,
                      Aa = (1 - K / 255) * (W - ja) - sa,
                      ja += ha * Aa,
                      W = 4 === b ? ja : 3 === b ? Aa : sa,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= V / 32,
                      oa = 1e-5 < W * W,
                      Aa = Math.sin(gc * ia) * N / 512 + 0.5,
                      Oa = W * (1 - Aa),
                      W *= Aa),
                    ia < Eb || (Oa += ya[1 + ia - Eb]
                      * C / 255,
                      W += ya[ia - Eb] * C / 255),
                    v + ia >> 1);
                  t[Aa] += (ya[ia] = Oa) / 65536;
                  n[Aa] += (ya[++ia] = W) / 65536;
                }
              }
            }
            v += 768 * D;
          },
          x = Ra[b],
          [z, A, g, u, H, M, R, L, U, r, l, q, F, K, V, N, G, C, P, J] = Sa[b],
          O = 4 * r ** 2;
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
  p = new DOMMatrix(),
  kb = new DOMMatrix(),
  ib = new Float32Array(16),
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
            var l = (r - (aa || r)) / 1e3;
            if (va += l, c += d = ba ? 0 : Wa(0.066, l), aa = r, 0 < d) {
              ma();
              Ia && c > Ia && (Ia = 0, h4.innerHTML = "");
              da = tb(da, e[9].h, 0.2 + 0.3 * h(2 * e[9].h - 1));
              ca = tb(ca, Ba ? tb(ca, -9, 1.5) : m(c / 3), 1);
              let K = 1;
              r = () => lb(kb, Ma[++K].m);
              qa = bb(e[12].g, e[13].g);
              ua = ab(tb(ua, 0, 1), Za(ua + 60 * d), e[5].g - e[6].h);
              ra = ab(tb(ra, 0, 5), Za(ra + 56 * d), qa);
              ta = ab(tb(ta, 0, 4), Za(ta + 48 * d), qa);
              Rb(r(), -12, 4.2, 40 * ca - 66);
              r().translateSelf(0, 0, -15).scaleSelf(1, m(1.22 - e[1].g), 1);
              r().translateSelf(0, 0, 15).scaleSelf(1, m(1.22 - e[2].g), 1);
              r().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, m(1.1 - e[6].g), 1);
              r().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g);
              r().translateSelf(
                0,
                0.01 > e[3].g ? -500 : (1 - e[2].g) * e[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (e[3].g - 1),
                0,
              );
              l = Wa(e[2].h, 1 - e[4].h);
              r().translateSelf(l * Math.sin(c / 1.5 + 2) * 12);
              r().translateSelf(l * Math.sin(0.7 * c + 2) * 12);
              r().translateSelf(l * Math.sin(c + 3) * 8.2);
              r().translateSelf(9.8 * (1 - l));
              l = m(1 - 5 * l) * bb(e[4].g, e[5].g);
              r().translateSelf(0, l * Math.sin(1.35 * c) * 4);
              r().translateSelf(0, 0, l * Math.sin(0.9 * c) * 8);
              r().translateSelf(0, -6.5 * e[4].h);
              r().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + ua, 0);
              l = bb(e[7].h, e[6].h);
              r().translateSelf(0, l * Math.sin(c) * 5 + 3.5 * (1 - Xa(e[6].g, e[7].g)));
              r().translateSelf(0, l * Math.sin(c + 3) * 6, l * Math.sin(0.6 * c + 1) * 6);
              r().translateSelf(0, -7.3 * e[7].h);
              Rb(r(), -123, 1.4, 55 + -65 * da);
              l = bb(e[10].g, e[11].g);
              r().translateSelf(0, -2, l * h(Math.sin(1.1 * c)) * -8.5 + 10);
              r().translateSelf(0, -2, l * h(Math.sin(2.1 * c)) * -8.5 + 10);
              r().translateSelf(0, -2, -8.5 * Xa((1 - e[10].g) * (1 - l), l * h(Math.sin(1.5 * c))) + 10);
              l = bb(e[8].h, e[12].h);
              for (var q = 0; 4 > q; q++) {
                r().translateSelf(
                  (2 < q ? 2 * (1 - l) + l : 0) - 100,
                  l * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7,
                  115 + (1 & q ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7
                    + Xa(l, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),
                );
              }
              r().translateSelf(2.5 * (1 - l) - 139.7, -3 * (1 - e[8].g) + l * Math.sin(0.8 * c) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * l + 3), 0);
              r().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ra);
              r().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
              r().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
              r().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
              l = bb(e[13].h, e[14].h);
              for (q = 0; 3 > q; ++q) {
                r().translateSelf(0, l * Math.sin(1.5 * c + 1.5 * q) * 4 + (q ? 0 : (1 - e[13].h) * (1 - e[14].h)));
              }
              r().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              l = bb(bb((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2);
              r().translateSelf(0, 16 * l, 8.5 * m(2 * l - 1) + 95);
              for (l = 0; 13 > l; ++l) {
                La[l].F(), jb(p, Xb, l);
              }
              for (l = 0; 16 > l; ++l) {
                e[l].F(), jb(p, Xb, l + 13), Xb[16 * l + 223] = 1 - e[l].g;
              }
              pa(r);
              for (r = 0; K >= r; ++r) {
                jb(Ma[r].m, Sb, r - 1);
              }
              ea = 0;
              g();
              Z.b6o(36160, U);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: r, y: l, z: F } = Va;
              Z.uae(g("b"), !1, jb(lb().rotateSelf(0, 180).invertSelf().translateSelf(-r, -l, 0.3 - F)));
              Yb(g("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(g("b"), !1, jb(lb().translateSelf(-r, -l, -F - 0.3)));
              Yb(g("c"), 0, 40);
              Z.f1s();
            }
            r = Fa;
            l = Ga;
            q = Ha;
            ba
              ? (lb(ka).invertSelf(),
                hb(3.6, 3.5),
                r = db,
                l = eb,
                q = 5,
                lb(kb, v).rotateSelf(-20, 0).invertSelf().translateSelf(-r, -l, -q).rotateSelf(0, 99))
              : lb(kb, v).rotateSelf(-Ta, -Ua).invertSelf().translateSelf(-r, -l, -q);
            z();
            Z.b6o(36160, R);
            Z.v5y(0, 0, 2048, 2048);
            M[0](54.7 * 1.1);
            M[1](126 * 1.1);
            u();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(u("a"), !1, jb(ka));
            Z.uae(u("b"), !1, jb(v));
            Z.uae(u("i"), !1, t[0]);
            Z.uae(u("j"), !1, t[1]);
            Z.ubu(u("k"), r, l, q);
            Yb(u("c"), !fa, 41);
            A();
            Z.ubu(A("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, va);
            Z.ubu(A("k"), r, l, q);
            Z.uae(A("b"), !1, jb(lb(v).invertSelf()));
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
          H = nb(8, () => ({})),
          M = nb(2, r => {
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
                let F = 0, K = 0, V = 0, N = 1 / 0, G = 1 / 0, C = 1 / 0, P = -1 / 0, J = -1 / 0, O = -1 / 0;
                Z.fas(36160, 36096, 3553, l, 0);
                Z.c4s(256);
                lb().scale3dSelf(q).multiplySelf(lb(la[r], y).multiplySelf(v).invertSelf());
                for (let D = 0; 8 > D; ++D) {
                  const B = H[D];
                  hb(4 & D ? 1 : -1, 2 & D ? 1 : -1, 1 & D ? 1 : -1);
                  F -= B.x = (0 | db) / (q * gb);
                  K -= B.y = (0 | eb) / (q * gb);
                  V -= B.z = (0 | fb) / (q * gb);
                }
                lb().rotateSelf(298, 139).translateSelf(F / 8, K / 8, V / 8);
                for (q = 0; 8 > q; ++q) {
                  const { x: D, y: B, z: ha } = H[q];
                  hb(D, B, ha);
                  N = Wa(N, db);
                  P = Xa(P, db);
                  G = Wa(G, eb);
                  J = Xa(J, eb);
                  C = Wa(C, fb);
                  O = Xa(O, fb);
                }
                q = 10 + r;
                C *= 0 > C ? q : 1 / q;
                O *= 0 < O ? q : 1 / q;
                Z.uae(
                  z("b"),
                  !1,
                  jb(
                    lb(kb, y).scaleSelf(2 / (P - N), 2 / (J - G), 2 / (C - O)).translateSelf(
                      (P + N) / -2,
                      (J + G) / -2,
                      (C + O) / 2,
                    ).multiplySelf(p),
                    t[r],
                  ),
                );
                Yb(z("c"), !fa, 41);
              };
          }),
          R = Z.c5w();
        k = Z.c25();
        const L = Z.c3z(), U = Z.c5w();
        g();
        Z.uae(g("a"), !1, jb(wb(1e-4, 2, 1.4, 0.4)));
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
      Ma.map((M, R) => {
        let L;
        const U = r => {
          let { x: l, y: q, z: F } = L[r], K = (H[0] = l, H[1] = q, H[2] = F, r = "" + (L.C ? u : A), g.get(r));
          return void 0 !== K
            ? (l = 3 * K, z[l] = (z[l++] + A[5]) / 2, z[l] = (z[l++] + A[6]) / 2, z[l] = (z[l] + A[7]) / 2)
            : (g.set(r, K = g.size), y.push(l, q, F, H[3]), x.push(A[4]), z.push(A[5], A[6], A[7])),
            K;
        };
        for (L of (H[3] = 41 < R ? -14 : M.G && R, M.o)) {
          const { x: r, y: l, z: q } = Hb(L);
          A[4] = 0 | L.u;
          A[5] = 32767 * r;
          A[6] = 32767 * l;
          A[7] = 32767 * q;
          for (let F = 2, K = U(0), V = U(1); L.length > F; ++F) {
            v.push(K, V, V = U(F));
          }
        }
        M.o = null;
        M.s = n;
        M.D = n = v.length;
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
        const [M, R, L, U, r] = JSON.parse(localStorage.DanteSP22);
        e.map((l, q) => l.g = l.h = l.i = q ? 0 | M[q] : 0);
        La.map((l, q) => l.i = 0 | R[q]);
        Ca = L;
        da = r;
        c = U;
        d = 0;
      } catch {
      }
      ub();
      ca = m(Ca);
      ac(b);
    });
    const k = nb(11, n => w(Math.sin(n / 10 * Math.PI), n / 10).rotate(+n).scale(1.0001 - n / 10, 0, 1 - n / 10)),
      t = nb(10, n => rb(pb(qb(18), k[n]).reverse(), pb(qb(18), k[n + 1]), 1)).flat();
    X(() => T([Na.slice(1)], w(-2).scale3d(3).rotate(90, 0)), 0);
    X(() => {
      const n = g =>
          X(() => {
            Na.map(({ x: u, z: H }) => {
              T(Q(11, 1), w(4 * u, 4, g + 4 * H).scale(0.8, 3, 0.8), S(0.5, 0.3, 0.7, 0.6));
              T(Q(), w(4 * u, 7, g + 4 * H).scale(1, 0.3), S(0.5, 0.5, 0.5, 0.3));
            });
            T(Y(
              I(Q(), w(0, 0, g).scale(5, 1, 5), S(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(u => I(Q(), w(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), S(0.8, 0.8, 0.8, 0.3))),
            ));
            T(Q(), w(0, -3, g).scale(8, 2, 8), S(0.4, 0.4, 0.4, 0.3));
          }),
        v = g =>
          Y(
            I(Q(), w(0, -g / 2).scale(6, g - 1, 2.2)),
            I(Q(), w(0, -g / 2 - 6).scale(4, g - 3, 4)),
            I(Q(32, 1), w(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        y = () => X(() => nb(7, g => T(I(Q(6, 1), w(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), S(0.3, 0.3, 0.38))))),
        x = Y(
          I(Q(30, 1, 1.15, 1), w(0, -3).scale(3.5, 1, 3.5), S(0.7, 0.4, 0.25, 0.7)),
          I(Q(30, 1, 1.3, 1), w(0, -2.5).scale(2.6, 1, 3), S(0.7, 0.4, 0.25, 0.2)),
          I(Q(), w(4, -1.2).scale3d(2), S(0.7, 0.4, 0.25, 0.3)),
        ),
        z = (X(() => {
          T(x);
          Cb(w(0, -3, 4));
        }),
          Cb(w(-5.4, 1.5, -19).rotate(0, -90)),
          Db(w(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Db(w(0, 2.8), [5, 10, 3], [-5, 10, 3], ...qb(18).map(({ x: g, z: u }) => [7 * g, 10 * u, 4.5 - 2 * h(g)])),
          Na.map(({ x: g, z: u }) => T(Q(6), w(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), S(0.6, 0.3, 0.3, 0.4))),
          [-15, 15].map((g, u) => {
            y();
            y();
            T(Q(), w(0, 6.3, g).scale(4, 0.3, 1), S(0.3, 0.3, 0.3, 0.4));
            T(Q(), w(0, 1, g).scale(3, 0.2, 0.35), S(0.5, 0.5, 0.5, 0.3));
            T(Q(), w(0, 0, u ? 22 : -23).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2));
            nb(5, H =>
              T(
                t,
                w(18.5 * (u - 0.5), 0, 4.8 * H - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2),
                S(1, 1, 0.8, 0.2),
              ));
          }),
          T(Q(), w(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
          T(Q(), w(3, 1.5, -20).scale(0.5, 2, 5), S(0.7, 0.7, 0.7, 0.2)),
          T(Q(), w(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(0.75, 0.75, 0.75, 0.2)),
          T(Q(5), w(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(0.6, 0.3, 0.3, 0.4)),
          T(Q(), mb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), S(0.8, 0.2, 0.2, 0.5)),
          T(Y(
            Ob(
              I(Q(6, 0, 0, 0.3), w(8, -3, -4).scale(13, 1, 13), S(0.7, 0.7, 0.7, 0.2)),
              I(Q(6), w(0, -8).scale(9, 8, 8), S(0.4, 0.2, 0.5, 0.5)),
              I(Q(6, 0, 0, 0.3), w(0, -0.92).scale(13, 2, 13), S(0.8, 0.8, 0.8, 0.2)),
            ),
            I(Q(5), E(5, 30, 5), S(0.4, 0.2, 0.6, 0.5)),
            I(Q(5, 0, 1.5), w(0, 1).scale(4.5, 0.3, 4.5), S(0.7, 0.5, 0.9, 0.2)),
            I(Q(), mb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), S(0.5, 0.5, 0.5, 0.5)),
            I(Q(6), w(15, -1.5, 4).scale(3.5, 1, 3.5), S(0.5, 0.5, 0.5, 0.5)),
          )),
          X(() => {
            T(Q(5), w(0, -0.2).scale(5, 1, 5), S(0.6, 0.65, 0.7, 0.3));
            Cb(w(0, 1.2));
          }),
          Cb(w(15, -2, 4)),
          X(() => {
            T(
              Y(
                Ob(
                  I(Q(), E(1.5, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  I(Q(6), E(4, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  I(Q(), w(0, -2).scale(2, 3.2, 1.9), S(0.3, 0.8, 0.5, 0.5)),
                  I(Q(16, 1, 0, 4), E(1, 1, 1.5).rotate(0, 90), S(0.9, 0.9, 0.9, 0.2)),
                ),
                I(Q(), E(1.3, 10, 1.3), S(0.2, 0.7, 0.4, 0.6)),
              ),
              w(0, 0, 45),
            );
            Db(w(0, 2.8, 45), [0, 0, 4.5]);
          }),
          n(35),
          n(55),
          T(Q(), w(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
          X(() => {
            T(Q(3), w(-23, -1.7, 55.8).scale(5, 0.7, 8.3), S(0.3, 0.6, 0.6, 0.2));
            T(Q(8), w(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(0.8, 0.8, 0.8, 0.2));
            T(Q(), w(-23, -3, 55).scale(5.2, 1.7, 3), S(0.5, 0.5, 0.5, 0.3));
            T(Q(), w(-23, -2.2, 62).scale(3, 1, 4), S(0.5, 0.5, 0.5, 0.3));
            Cb(w(-23, -0.5, 66.5));
          }),
          X(() => {
            T(Q(), w(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(0.7, 0.7, 0.7, 0.2));
            T(Y(I(Q(), E(3, 1.4, 2.7)), I(Q(), E(1.2, 8, 1.2))), w(-33, -3, 55), S(0.7, 0.7, 0.7, 0.2));
          }),
          X(() => {
            T(Y(
              I(Q(), w(-27, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
              I(Q(), w(-27, -3, 55).scale(1, 3), S(0.9, 0.9, 0.9, 0.2)),
            ));
            T(Q(), w(-39, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2));
          }),
          X(() => {
            T(Q(6), w(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), S(0.7, 0.7, 0.7, 0.4));
          }),
          Cb(w(-55, -1.1, 46).rotate(0, 90)),
          T(Q(6), w(-61.3, -2.4, 49).scale(3, 1, 5), S(0.4, 0.6, 0.6, 0.3)),
          T(Q(7), w(-57, -2.6, 46).scale(4, 1, 4), S(0.8, 0.8, 0.8, 0.3)),
          [
            ...I(Q(), w(0, -3).scale(11, 1.4, 3), S(0.9, 0.9, 0.9, 0.2)),
            ...I(Q(), w(0, -2.2).scale(7.7, 0.5, 4), S(0.5, 0.5, 0.5, 0.2)),
            ...Y(
              I(Q(6), mb(90).scale(6, 8, 6), S(0.3, 0.6, 0.6, 0.3)),
              I(Q(4, 0, 0.01), w(0, 6).scale(12, 2, 0.75).rotate(0, 45), S(0.3, 0.6, 0.6, 0.3)),
              I(Q(6), mb(90).scale(5, 12, 5), S(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(g => I(Q(5), w(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        A = (T(z, w(-53, 0, 55)),
          X(() => T(z), 2),
          T(Q(), w(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(0.7, 0.7, 0.7, 0.2)),
          T(Q(3, 0, -0.5), w(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(0.8, 0.8, 0.8, 0.2)),
          T(Y(
            Ob(
              I(Q(), w(-100, -2.4, 55).scale(8, 0.9, 8), S(0.8, 0.8, 0.8, 0.2)),
              I(Q(), w(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
              I(Q(), w(-100, -2.6, 70).scale(3, 1.1, 7), S(0.8, 0.8, 0.8, 0.2)),
              I(Q(), w(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(0.8, 0.8, 0.8, 0.2)),
              I(Q(6), w(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(0.6, 0.6, 0.6, 0.3)),
              I(Q(), w(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(0.8, 0.8, 0.8, 0.2)),
              I(Q(), w(-100, 0.42, 92).scale(3, 1.1, 4.1), S(0.8, 0.8, 0.8, 0.2)),
            ),
            I(Q(8), w(-100, -1, 55).scale(7, 0.9, 7), S(0.3, 0.3, 0.3, 0.4)),
            I(Q(8), w(-100, -2, 55).scale(4, 0.3, 4), S(0.4, 0.4, 0.4, 0.5)),
            I(Q(8, 0, -3.1), w(-100, -3, 55).scale(0.4, 1, 0.4), S(0.4, 0.4, 0.4, 0.5)),
          )),
          Db(w(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Db(w(-89, 0.2, 80), [0, 0, 6]),
          T(Y(
            I(Q(), w(-100, 1, 63).scale(7.5, 4), S(0.5, 0.5, 0.5, 0.4)),
            I(Q(), w(-100, 0, 70).scale(2, 2, 10), S(0.5, 0.5, 0.5, 0.4)),
            I(Q(20, 1), w(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(0.5, 0.5, 0.5, 0.4)),
          )),
          Na.map(({ x: g, z: u }) => {
            T(Q(6), w(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), S(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(H => T(Q(6), w(7 * g - 100, H, 7 * u + 55).scale(1.3, 0.5, 1.3), S(0.4, 0.2, 0.2, 0.8)));
          }),
          nb(7, g => {
            T(
              Q((23 * g + 1) % 5 + 5, 0, 0.5),
              w(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3),
              S(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
            );
          }),
          T(Q(), w(-87, -9.5, 24).scale(7, 1, 3), S(0.4, 0.5, 0.6, 0.4)),
          T(Q(4), w(-86, -9.2, 27).scale(5, 1, 5), S(0.5, 0.6, 0.7, 0.3)),
          T(Q(12, 1), w(-86, -9, 31).scale(1.5, 1, 1.5), S(0.3, 0.3, 0.4, 0.1)),
          Cb(w(-86, -7.5, 31)),
          X(() => {
            [0, 12, 24].map(g =>
              T(Q(), w(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), S(0.2, 0.5, 0.6, 0.2))
            );
          }),
          X(() => {
            [6, 18].map(g =>
              T(Q(), w(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), S(0.1, 0.4, 0.5, 0.2))
            );
          }),
          T(
            Y(
              Ob(
                I(Q(5), w(0, 0, -7).scale(2, 1.2, 2), S(0.2, 0.4, 0.7, 0.3)),
                I(Q(5), E(9, 1.2, 9), S(0, 0.2, 0.3, 0.5)),
                I(Q(), E(11, 1, 13), S(0.3, 0.4, 0.6, 0.3)),
              ),
              I(Q(5), E(5.4, 5, 5.4), S(0, 0.2, 0.3, 0.5)),
            ),
            w(-38.9, -11.3, 17),
          ),
          Cb(w(-38.9, -9.6, 10)),
          X(() => {
            T(
              Y(
                Ob(
                  I(Q(5), w(0, 2).scale(5, 7, 5).skewY(8), S(0.2, 0.4, 0.5, 0.5)),
                  I(Q(5), w(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(0.25, 0.35, 0.5, 0.5)),
                  I(Q(5), w(0, 9).scale(0.6, 7, 0.6).skewY(8), S(0.35, 0.3, 0.5, 0.5)),
                ),
                I(Q(5), E(4, 8, 4), S(0.2, 0.4, 0.5, 0.5)),
                I(Q(5), w(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(0.2, 0.4, 0.5, 0.5)),
              ),
              w(-38.9, -11.3, 17),
            );
            Db(w(-39.1, -0.6, 17).rotate(11), ...qb(15).map(({ x: g, z: u }) => [3 * g, 3 * u, 1.2]));
          }),
          Na.map(({ x: g, z: u }) => {
            T(Q(14, 1), w(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), S(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(H =>
              T(Q(17, 1), w(9 * g - 38.9, H - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), S(0.6, 0.6, 0.6, 0.3))
            );
          }),
          T(
            Y(
              Ob(
                I(Q(6), w(0, 0, -36).scale(15, 1.2, 15), S(0.7, 0.7, 0.7, 0.3)),
                I(Q(), w(0, 0, -18).scale(4, 1.2, 6), S(0.45, 0.4, 0.6, 0.3)),
              ),
              ...nb(6, g =>
                nb(6, u =>
                  I(
                    Q(6),
                    w(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2),
                    S(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            w(-38.9, -11.3, 17),
          ),
          Db(w(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          T(Q(5), w(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), S(0.8, 0.1, 0.25, 0.4)),
          Cb(w(-84, -0.5, 85).rotate(0, 45)),
          X(() => {
            T(x);
            Cb(w(0, -3, -4).rotate(0, 180));
          }),
          Y(
            I(Q(), w(0, -0.5, 1).scale(1.15, 1.2, 6.5), S(0.25, 0.25, 0.35, 0.3)),
            Y(
              I(Q(3), w(0, 0, -5.5).scale(3, 2), S(0.6, 0.3, 0.4, 0.3)),
              I(Q(), w(0, 0, -3.65).scale(2.5, 3), S(0.6, 0.3, 0.4, 0.3)),
            ),
            ...[-1, 1].map(g => I(Q(), w(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), S(0.7, 0.2, 0, 0.3))),
          ));
      X(() =>
        nb(2, g =>
          T(A, w(9 * g - 110 + (1 & g), 1.9, -12)))
      );
      X(() =>
        nb(2, g =>
          T(A, w(9 * (g + 2) - 110 + (1 & g), 1.9, -12)))
      );
      X(() =>
        nb(3, g =>
          T(A, w(9 * g - 106, 1.9, -12)))
      );
      T(
        Y(
          Ob(I(Q(), w(26.5, -1.6, 10).scale(20, 2.08, 3)), I(Q(), w(26.5, -0.5, 10).scale(19, 2, 0.5))),
          ...nb(4, g => I(Q(), w(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
          ...nb(3, g => I(Q(), w(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        w(-123, 0.2, -12),
        S(0.5, 0.5, 0.6, 0.2),
      );
      Cb(w(-116, -1.4, -18).rotate(0, 180));
      T(Q(), w(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(0.8, 0.8, 0.8, 0.2));
      T(Q(6), w(-116, -2.6, -16.5).scale(3.2, 0.8, 3), S(0.6, 0.5, 0.7, 0.2));
      T(Q(), w(-115.5, -17, -12).scale(0.5, 15, 2.2), S(0.6, 0.6, 0.6, 0.3));
      T(Q(8), w(-114, -17, -2).scale(2, 15, 2), S(0.6, 0.6, 0.6, 0.3));
      T(Q(8), w(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, 0.3));
      T(Q(), w(-77, -17, -50.5).scale(2.2, 15, 0.5), S(0.6, 0.6, 0.6, 0.3));
      nb(3, g => {
        T(v(16), w(12 * g - 109, -9, -12), S(0.6, 0.6, 0.6, 0.3));
        T(v(16), w(-77, -9, -12 * g - 20).rotate(0, 90), S(0.6, 0.6, 0.6, 0.3));
      });
      T(Y(
        I(Q(12), w(-77, -14.5, -12).scale(4, 17.5, 4), S(0.7, 0.7, 0.7, 0.2)),
        I(Q(), w(-79, 0.1, -12).scale(3.5, 2, 1.3), S(0.4, 0.5, 0.6, 0.2)),
        I(Q(), w(-77, 0.1, -14).scale(1.5, 2, 2), S(0.4, 0.5, 0.6, 0.2)),
        I(Q(12), w(-77, 3.1, -12).scale(3, 5, 3), S(0.4, 0.5, 0.6, 0.2)),
      ));
      T(Q(), w(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(0.6, 0.6, 0.6, 0.3));
      T(Q(9), w(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(0.5, 0.5, 0.5, 0.3));
      T(Y(
        I(Q(), w(-93, -5.8, -40).scale(9, 1, 5), S(0.8, 0.8, 0.8, 0.1)),
        I(Q(9), w(-98, -5.8, -40).scale(3, 8, 3), S(0.7, 0.7, 0.7, 0.2)),
      ));
      Cb(w(-98, -4.4, -40).rotate(0, 90));
      Db(w(-115, 0.2, -12), [0, 0, 3.5]);
      Db(w(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      T(Y(
        Ob(
          I(Q(6, 0, 0, 0.6), w(-100, 0.7, 105.5).scale(8, 1, 11), S(0.7, 0.7, 0.7, 0.2)),
          I(Q(), w(-101.5, 0.7, 93.5).scale(10.5, 1, 2), S(0.7, 0.7, 0.7, 0.2)),
        ),
        I(Q(5), w(-100, 0.7, 113).scale(4, 3, 4), S(0.7, 0.7, 0.7, 0.2)),
      ));
      nb(
        4,
        g =>
          X(() =>
            T(
              Q(6),
              w(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              S(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
            )
          ),
      );
      X(() => {
        T(Y(I(Q(10), E(6, 2, 6), S(0.1, 0.6, 0.5, 0.3)), I(Q(10), E(3.3, 6, 3.3), S(0.1, 0.6, 0.5, 0.5))));
        T(Q(15, 1), w(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(0.4, 0.4, 0.4, 0.3));
        T(Q(10), w(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(0.3, 0.8, 0.7, 0.3));
        T(Q(5), w(-7.5).rotate(0, 90).scale(1, 3), S(0.5, 0.5, 0.5, 0.5));
        Cb(w(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => T(t, mb(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, 0.8, 0.2)));
        Db(w(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(g => {
        [7.2, 1.5].map(u => T(Q(15, 1), w(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), S(0.5, 0.24, 0.2, 0.4)));
        T(t, w(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), S(1, 1, 0.8));
        T(Q(12, 1), w(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), S(0.6, 0.24, 0.2, 0.5));
        T(
          Y(
            I(Q(), w(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), S(0.5, 0.5, 0.5, 0.4)),
            I(Q(), E(3, 3, 10), S(0.6, 0.24, 0.2, 0.5)),
            I(Q(28, 1), w(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(0.6, 0.24, 0.2, 0.5)),
            I(Q(5), w(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(0.6, 0.24, 0.2, 0.5)),
            I(Q(5), w(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), S(0.6, 0.24, 0.2, 0.5)),
          ),
          w(g - 100, 0.7, 97),
        );
      });
      T(Y(
        I(Q(), w(-82.07, 0.8, 106).scale(11, 0.9, 2.2), S(0.7, 0.7, 0.7, 0.1)),
        I(Q(45, 1), w(-81, 0.7, 106).scale3d(7.7), S(0.7, 0.7, 0.7, 0.1)),
      ));
      X(() => {
        T(Y(
          I(Q(45, 1), E(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)),
          I(Q(), w(0, 0, -5.5).scale(1.5, 3, 2.7), S(0.45, 0.45, 0.45, 0.2)),
        ));
        T(Q(8), w(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(0.7, 0.7, 0.7, 0.1));
        T(Q(5), w(0, 2).scale(1, 2), S(0.3, 0.3, 0.3, 0.2));
        Db(w(0, 3), ...qb(14).map(({ x: g, z: u }) => [5.6 * g, 5.6 * u, 2]));
      });
      X(() => {
        [-1, 1].map(g =>
          T(t, mb(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), S(1, 1, 0.8))
        );
        T(Y(I(Q(28, 1), w(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)), I(Q(), E(9, 5, 2), S(0.3, 0, 0, 0.3))));
        T(I(Q(28, 1), E(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        T(I(Q(5), w(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      X(() => {
        T(Y(
          I(Q(28, 1), w(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          I(Q(), w(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          I(Q(), w(0, 0, 7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        T(I(Q(28, 1), E(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        T(I(Q(5), w(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      X(() => {
        T(Y(
          I(Q(28, 1), w(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          I(Q(), w(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          I(Q(), w(0, 0, -7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        T(I(Q(28, 1), E(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        T(I(Q(5), w(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      T(Q(), w(-58, 1, 106).scale(2, 0.65, 2), S(0.7, 0.7, 0.7, 0.2));
      T(Q(), w(-50.7, 1, 99).scale(2, 0.65, 1), S(0.7, 0.7, 0.7, 0.2));
      T(Q(), w(-42, 0.4, 91).scale(5, 1, 2.5), S(0.7, 0.7, 0.7, 0.3));
      T(Q(), w(-34.2, 0.4, 91).scale(3, 1, 3), S(0.7, 0.7, 0.7, 0.3));
      Cb(w(-34, 2.7, 96).rotate(-12, 0));
      T(Q(5), w(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), S(0.2, 0.5, 0.5, 0.6));
      [S(0.1, 0.55, 0.45, 0.2), S(0.2, 0.5, 0.5, 0.3), S(0.3, 0.45, 0.55, 0.4)].map((g, u) =>
        X(() => {
          T(Q(), w(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
          2 === u && T(Q(), w(-29.1, 0.4, 91).scale(2.1, 1, 3), S(0.7, 0.7, 0.7, 0.3));
          1 === u && T(Q(), w(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), S(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(g => T(t, w(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), S(1, 1, 0.8)));
      nb(
        3,
        g =>
          T(
            v(24.7 - 0.7 * (1 & g)),
            w(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)),
            1 & g ? S(0.5, 0.5, 0.5, 0.3) : S(0.35, 0.35, 0.35, 0.5),
          ),
      );
      T(Y(
        I(Q(6, 0, 0, 0.3), w(0, -0.92, 95).scale(14, 2, 14), S(0.8, 0.8, 0.8, 0.2)),
        I(Q(5), w(0, 0, 95).scale3d(6), S(0.3, 0.3, 0.3, 0.5)),
      ));
      Cb(w(0, 1.7, 82).rotate(0, 180));
      T(Q(5), w(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(0.5, 0.3, 0.3, 0.4));
      T(Q(6), w(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(0.5, 0.6, 0.7, 0.3));
      T(Q(), w(0, 16, 129).scale(1.5, 1, 2), S(0.5, 0.6, 0.7, 0.3));
      T(Q(7), w(0, 16.2, 133).scale(5, 1, 5), S(0.4, 0.5, 0.6, 0.4));
      T(Y(
        Ob(
          I(Q(), w(0, 16, 110.5).scale(12, 1, 3), S(0.5, 0.3, 0.3, 0.4)),
          I(Q(), w(0, 16, 111).scale(3, 1, 3.8), S(0.5, 0.3, 0.3, 0.4)),
        ),
        I(Q(5), w(0, 16, 103.5).scale(5.5, 5, 5.5), S(0.5, 0.3, 0.3, 0.4)),
      ));
      X(() => {
        T(Q(3), w(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), S(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          T(Q(6), w(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), S(0.7, 0.7, 0.7, 0.4));
          T(Q(), w(0, 6.2, g + 95).scale(0.5, 11, 0.5), S(0.5, 0.3, 0.3, 0.4));
        });
      });
      X(() => {
        T(Q(5), E(5, 1.1, 5), S(0.5, 0.3, 0.3, 0.4));
        T(Q(5), E(5.5, 0.9, 5.5), S(0.25, 0.25, 0.25, 0.4));
        Cb(w(0, 1.5, -1).rotate(0, 180));
      });
      Db(w(0, 3, 95), ...qb(9).map(({ x: g, z: u }) => [9 * g, 9 * u, 4]));
      Db(w(0, 19, 134), [0, 0, 3.5]);
    });
    X(() => {
      T(sb(20), w(0, 1).scale3d(0.5), S(1, 0.3, 0.4));
      T(sb(30), E(0.65, 0.8, 0.55), S(1, 0.3, 0.4));
      T(Q(), w(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), S(0.3, 0.3, 0.3));
      [-1, 1].map(n => {
        T(t, mb(0, 0 < n ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), S(1, 1, 0.8));
        T(
          I(Y(Q(15, 1), I(Q(), w(0, 0, 1).scale(2, 2, 0.5))), mb(-90, 0).scale(0.1, 0.05, 0.1), S(0.3, 0.3, 0.3)),
          w(0.2 * n, 1.2, 0.4).rotate(0, 20 * n, 20 * n),
        );
        X(() => {
          T(Q(20, 1), w(0.3 * n, -0.8).scale(0.2, 0.7, 0.24), S(1, 0.3, 0.4));
        });
      });
    });
    X(() => {
      T(Q(6).slice(0, -1), E(0.77, 1, 0.77), S(1, 0.3, 0.5));
    }, 0);
    X(() => {
      T(
        sb(30, 24, (n, v, y) => {
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
        E(0.7, 0.7, 0.7),
        S(1, 1, 1),
      );
      [-1, 1].map(n => T(sb(12), w(0.16 * n, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    X(() => {
      T(Q(6, 1), E(0.13, 1.4, 0.13), S(0.3, 0.3, 0.5, 0.1));
      T(Q(10), w(0, 1).scale(0.21, 0.3, 0.21), S(1, 0.5, 0.2));
      T(Q(3), w(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), S(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
