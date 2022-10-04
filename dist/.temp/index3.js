let aa,
  ba,
  ca,
  da,
  ea,
  ha,
  ja,
  ka,
  la,
  na,
  oa,
  pa,
  qa,
  ra,
  va,
  c = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 1,
  d = 0.066;
const Ga = Math.PI / 180,
  La = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Ma = [],
  e = [],
  Na = [],
  Oa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Pa = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Qa = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Ra = 0, Sa = 180;
const Ta = { x: 0, y: 0, z: 0 },
  h = NO_INLINE(a => 0 > a ? -a : a),
  Ua = NO_INLINE((a, b) => a < b ? a : b),
  Va = NO_INLINE((a, b) => b < a ? a : b),
  Wa = (a, b) => h(a) > b ? a : 0,
  n = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a,
  Xa = a => Math.atan2(Math.sin(a * Ga), Math.cos(a * Ga)) / Ga,
  Ya = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * n(f) || 0,
  Za = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0,
  $a = (a, b) => (a = n(a), Za(a, 1 - a, b)),
  ab = (a, b, f = 0) =>
    Math.sqrt(
      a
          * a + b * b + f * f,
    ),
  cb = (
    a,
    b = bb,
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
  gb = (
    a = eb,
    b = fb,
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
  p = NO_INLINE((a, b, f) => eb.translate(a, b, f)),
  hb = NO_INLINE((a, b, f) => eb.rotate(a, b, f)),
  w = NO_INLINE((a, b, f) => eb.scale(a, b, f)),
  ib = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  jb = (a, b, f) => (a.C = f, a.u = b, a),
  kb = (a, b, f = a.u) =>
    jb(
      a.map(k => {
        let r, m;
        return { x: k, y: r, z: m } = k,
          { x: k, y: r, z: m } = b.transformPoint({ x: k, y: r, z: m }),
          { x: k, y: r, z: m };
      }),
      f,
      a.C,
    ),
  F = (a, b, f) => a.map(k => kb(k, b, f)),
  lb = (a, b = 0) =>
    ib(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > h(k) ? k : 0 > k ? k - b : k + b };
    }),
  mb = (a, b, f) =>
    a.map((k, r, { length: m }) => jb([k, b[m - r - 1], b[m - (r + 1) % m - 1], a[(r + 1) % m]], a.u, f)),
  L = (
    a,
    b,
    f = 0,
    k,
  ) => (a = a ? lb(a, k) : Oa,
    k = kb(a, p(0, 1).scale3d(0 < f ? f : 1)),
    a = kb(a, p(0, -1).scale3d(0 > f ? -f : 1)).reverse(),
    [...mb(a, k, b), k, a]),
  nb = (
    a,
    b = a,
    f = (
      k,
      r,
    ) => (r *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(r), y: Math.cos(r), z: Math.sin(k) * Math.sin(r) }),
  ) => {
    const k = [];
    for (let r = 0; a > r; r++) {
      for (let m = 0; b > m; m++) {
        const v = jb([], 0, 1);
        k.push(v);
        v.push(f(r, m, v));
        m && v.push(f((r + 1) % a, m, v));
        b - 1 > m && v.push(f((r + 1) % a, m + 1 % b, v));
        v.push(f(r, m + 1 % b, v));
      }
    }
    return k;
  },
  ob = NO_INLINE((a, b, f) => Za(a, b, 1 - Math.exp(-f * d))),
  pb = () => {
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
      ][xa = Ma.reduce((a, { i: b }) => a + b, 0)] + " / XIII";
  },
  qb = () => {
    localStorage.DanteSP22 = JSON.stringify([e.map(({ i: a }) => a), Ma.map(({ i: a }) => a), za, c, da]);
  },
  T = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  rb = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  wb = () => {
    let a, b, f, k, r, m, v, y, x, z, B, g, u, H, N = !0;
    const I = [],
      O = () => {
        b4.innerHTML = "Music: " + N;
        ba || !N ? sb.disconnect() : sb.connect(vb.destination);
      },
      P = () => {
        const l = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ka = [rb(0.3, 55, l, 1.732051), rb(55, 181, l, 1.732051)];
        ja = rb(0.3, 181, l, 1.732051);
        k = y = void 0;
        I.length =
          ea =
          H =
          g =
          u =
          Aa =
          Ba =
            0;
      },
      t = (l, q = 0) => {
        if (ba !== l) {
          ba = l;
          ha = q;
          P();
          document.body.className = l ? "l m" : "l";
          try {
            l
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), sb.start());
          } catch {
          }
          O();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => t(!1);
    b2.onclick = () => t(!1, 1);
    b5.onclick = () => t(!0);
    b4.onclick = () => {
      N = !N;
      O();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = l => {
      if (!ba && (l.target === hC && (ea = 1), ha)) {
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
          (I[q] = !!l.type[5] && !0) && (0 === q && (ea = 1), 1 === q && t(!0)));
    };
    onmousemove = ({ movementX: l, movementY: q }) => {
      ha && (l || q) && (Sa += 0.1 * l, Ra += 0.1 * q);
    };
    hC.ontouchstart = l => {
      if (!ba) {
        for (let { pageX: q, pageY: J, identifier: E } of l.changedTouches) {
          ha && q > hC.clientWidth / 2
            ? void 0 === y && (x = 0, m = q, v = J, y = E, z = Sa, B = Ra)
            : void 0 === k && (r = 0, b = q, f = J, k = E);
        }
        a = wa;
      }
    };
    hC.ontouchmove = l => {
      if (!ba) {
        for (let { pageX: C, pageY: K, identifier: G } of l.changedTouches) {
          var q, J, E, D;
          y === G && (Sa = z + (C - m) / 2.3, Ra = B + (K - v) / 2.3, x = 1);
          k === G
            && (G = (b - C) / 20,
              q = h(G),
              J = (f - K) / 20,
              E = h(J),
              (D = 0.5 < Va(q, E)) && (r = 1),
              g = (D && 0.2 < q) * n(G, -1),
              u = (D && 0.2 < E) * n(J, -1),
              2 < q && (b = C + 20 * (0 > G ? -1 : 1)),
              2 < E && (f = K + 20 * (0 > J ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = l => {
      let q;
      document.activeElement === document.body && l.preventDefault();
      for (const J of l.changedTouches) {
        J.identifier === y
          ? (y = void 0, x || (q = 1), x = 0)
          : J.identifier === k
          ? (k = void 0, u = g = 0, r || (q = 1), r = 0)
          : q = 1;
      }
      l.target === hC && q && a && 0.02 < (l = wa - a) && 0.7 > l && (ea = 1);
    };
    la = () => {
      Aa = u + (I[4] ? 1 : 0) - (I[5] ? 1 : 0);
      Ba = g + (I[2] ? 1 : 0) - (I[3] ? 1 : 0);
      var l = navigator.getGamepads()[0];
      if (l) {
        const q = E => J[E]?.pressed || 0 < J[E]?.value ? 1 : 0, J = l.buttons;
        l = l.axes;
        ha && (Ra += d * Wa(l[3], 0.3) * 80, Sa += d * Wa(l[2], 0.3) * 80);
        Aa += q(12) - q(13) - Wa(l[1], 0.2);
        Ba += q(14) - q(15) - Wa(l[0], 0.2);
        q(9) && t(!0);
        (l = q(3) || q(2) || q(1) || q(0)) && !H && (ea = 1);
        H = l;
      }
    };
    document.onvisibilitychange = onblur = onresize = P;
    t(!0);
  },
  V = (a, b = new DOMMatrix(), f) => na.o.push(...F(a, b, f)),
  X = (a, b = 1) => {
    const f = na;
    Na.push(na = { m: new DOMMatrix(), G: b, o: [] });
    a();
    na = f;
  },
  xb = a => (a = a.transformPoint(), ab(Ta.x - a.x, Ta.y - a.y, Ta.z - a.z)),
  yb = a => {
    const b = na,
      f = e.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = ob(k.g, k.i, 4);
          k.h = ob(k.h, k.i, 1);
          gb(b.m).multiplySelf(a);
          ea && 3 > xb(fb) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, f && 1 / 0 > Fa && (Fa = c + 1, h4.innerHTML = "* click *"), za = f, qb());
          !f && k.i && 0.8 < k.g && (k.i = 0,
            13 > xa
              ? 1 / 0 > Fa && (Fa = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : ya
                || (1 / 0 > Fa
                  && (Fa = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  ya = 1));
          fb.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    e.push(k);
    V(L(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
    V(L(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
    V(L(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), T(0.5, 0.5, 0.4));
  },
  Bb = (a, ...b) => {
    let f, k, r, m = 0, v = 0, y = 1, x = 3, z = -1;
    const B = {
        i: 0,
        F() {
          if (!B.i) {
            let D, C, K, G, M, U, Q, A = 1, R = 1 / 0;
            for (const S of g) {
              var { x: l, z: q, w: J } = S;
              q = (l = ab(H - l, N - q)) - J;
              Q ||= 0 > q;
              0 < q && R > q && (R = q, u = S);
              A = Ua(A, l / J);
            }
            Q
              || ({ x: E, z: D, w: C } = u,
                K = H - E,
                G = N - D,
                M = ab(K, G),
                U = Math.atan2(-G, K),
                y && (v = (Math.random() - 0.5) * Math.PI / 2, x = n(x / (1 + Math.random()))),
                U += v,
                z = -Math.cos(U),
                m = Math.sin(U),
                0.1 < M && (M = Ua(M, C) / (M || 1), H = K * M + E, N = G * M + D));
            y = Q;
            x = ob(x, 6 * (1 - A) + 3, A + 3);
            I = ob(I, H = ob(H, H + z, x), x);
            O = ob(O, N = ob(N, N + m, x), x);
            f = Ya(f, Math.atan2(I - k, O - r) / Ga - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > xb(gb(P).multiplySelf(a).translateSelf(k = I, 0, r = O).rotateSelf(0, f, 7 * Math.sin(1.7 * c)))
            ) {
              B.i = 1;
              var E = [
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
              ][xa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Fa && (Fa = c + (xa && 12 > xa ? 5 : 7), h4.innerHTML = E);
              pb();
              qb();
            }
          }
          B.i
            && gb(Na[2].m).translateSelf(
              t % 4 * 1.2 - 1.7 + Math.sin(c + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + h(t % 4 - 2) + Math.cos(c / 1.5 + t) / 6,
            );
        },
      },
      g = b.map(([l, q, J]) => ({ x: l, z: q, w: J }));
    let u = g[0], { x: H, z: N } = u, I = H, O = N;
    const P = na.m, t = Ma.length;
    Ma.push(B);
  },
  Cb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  Db = a => {
    let b, f = 0, k = 0, r = 0, m = a.at(-1);
    for (b of a) {
      f += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), r += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = ab(f, k, r), f /= b, k /= b, r /= b, { x: f, y: k, z: r, w: f * m.x + k * m.y + r * m.z };
  },
  Eb = (a, b) => {
    var f, k, r, m = b.B;
    for (var v = 0; m.length > v; ++v) {
      if (-0.00008 > (f = Cb(a, m[v]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
        k = [];
        r = [];
        m = b.B;
        v = b.v;
        let y = m.at(-1), x = Cb(a, y) - a.w;
        for (const z of m) {
          f = Cb(a, z) - a.w,
            8e-5 > x && r.push(y),
            -0.00008 < x && k.push(y),
            (8e-5 < x && -0.00008 > f || -0.00008 > x && 8e-5 < f)
            && (x /= f - x,
              y = { x: y.x + (y.x - z.x) * x, y: y.y + (y.y - z.y) * x, z: y.z + (y.z - z.z) * x },
              k.push(y),
              r.push(y)),
            y = z,
            x = f;
        }
        return {
          l: 2 < k.length && { B: jb(k, m.u, m.C), v, A: b },
          j: 2 < r.length && { B: jb(r, m.u, m.C), v, A: b },
        };
      }
    }
    return { l: k, j: r };
  },
  Fb = (a, b, f = Db(b.B)) => {
    let k, r, m;
    return a
      ? ({ l: k, j: r } = Eb(a, b), k || r || a.o.push(b), k && (a.l = Fb(a.l, k, f)), r && (a.j = Fb(a.j, r, f)))
      : ({ x: k, y: r, z: f, w: m } = f, a = { x: k, y: r, z: f, w: m, o: [b], l: 0, j: 0 }),
      a;
  },
  Gb = (a, b, f) => {
    const k = [],
      r = (m, v) => {
        let { l: y, j: x } = Eb(m, v);
        y || x || (0 < f * Cb(m, b) ? y = v : x = v);
        y && (m.l ? r(m.l, y) : k.push(y));
        x && m.j && r(m.j, x);
      };
    for (const m of b.o) {
      r(a, m);
    }
    return k;
  },
  Hb = (a, b) => a && (b(a), Hb(a.l, b), Hb(a.j, b)),
  Ib = a => (Hb(a, b => {
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
  Jb = a => a.length ? a.reduce((b, f) => Fb(b, { B: f, v: 0, A: 0 }), 0) : a,
  Kb = (...a) =>
    a.reduce((b, f) => {
      const k = [];
      if (b = Jb(b), f) {
        f = Jb(f);
        Hb(b, r => r.o = Gb(f, r, 1));
        Hb(f, r => k.push([r, Gb(b, r, -1)]));
        for (let [r, m] of k) {
          for (const v of m) {
            Fb(b, v, r);
          }
        }
      }
      return b;
    }),
  Y = (a, ...b) => {
    const f = m => {
        let v;
        return m.A && ((v = k.get(m.A)) ? (r.delete(v), m = f(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      r = new Map();
    return a = Ib(Kb(Ib(Jb(a)), ...b)),
      Hb(a, m => {
        for (const v of m.o) {
          r.set(f(v), v.v);
        }
      }),
      Array.from(r, ([{ B: m }, v]) => {
        const y = m.map(({ x, y: z, z: B }) => ({ x, y: z, z: B }));
        return jb(v ? y.reverse() : y, m.u, m.C);
      });
  },
  Mb = () => {
    let a, b, f, k, r, m, v, y, x, z, B, g, u, H, N = 1, I = 2, O = 15;
    const P = { x: 0, y: 0, z: 0 },
      t = () => gb((I ? e[za] : Na[B && 1 === Na[B].G && B || 0]).m),
      l = D => {
        const { x: C, y: K, z: G } = 1 < I
          ? gb(e[za].m).multiplySelf(e[za].H).transformPoint({ x: 0, y: za || 0.9 < ca ? 15 : 1, z: -2.4 })
          : t().transformPoint(P);
        D && (r = (C - Ta.x) / d, m = (G - Ta.z) / d);
        Ta.x = C;
        Ta.y = K;
        Ta.z = G;
      },
      q = (D, C, K) => {
        t().invertSelf();
        fb.m41 = fb.m42 = fb.m43 = 0;
        D = fb.transformPoint({ x: D, z: K, w: 0 });
        P.x += D.x;
        P.y += C;
        P.z += D.z;
        l();
      },
      J = () => {
        var D = 0, C = 0, K = 0;
        let G = 0, M = 0, U = 0;
        var Q = -1;
        for (var A = 0; 36 > A; ++A) {
          var R = 512 * A;
          for (var S = 96; 416 > S; S += 4) {
            for (var sa = 0; 2 > sa; ++sa) {
              var ia = Lb[R + S + sa], ma = Lb[R + S + sa + 2];
              ia > G && (G = ia);
              ia + ma && (0 > Q || Q === A) && (Q = A, ma === z ? ++D : C && C !== ma || (C = ma, ++K));
            }
          }
        }
        z = 0 > Q ? 0 : K > 2 * D ? C : z;
        for (D = 36; 128 > D; D += 1) {
          A =
            Q =
            K =
            C =
              0;
          R = 512 * D;
          for (S = 0; 128 > S; S += 1) {
            for (sa = R + 4 * S, ia = 0; 2 > ia; ++ia) {
              ma = Lb[sa + ia];
              const db = Lb[sa + ia + 2];
              (ia ? 64 < S : 64 > S) ? C = Va(C, ma) : K = Va(K, ma);
              ia ? A = Va(A, db) : Q = Va(Q, db);
            }
          }
          h(K - C) > h(M) && (M = K - C);
          h(A - Q) > h(U) && (U = A - Q);
        }
        y = n(1 - 0.02 * Va(h(M), h(U)));
        q(M / 255, G / 255, U / 255);
      },
      E = (D, C, K, G) => Za(D, C, N || (n(h(C - D) ** 0.5 - K) + 1 / 7) * (1 - Math.exp(-(1.5 * G) * d)));
    oa = D => {
      l(z);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Lb);
      NO_INLINE(J)();
      !I && z === B || (B = z, C = t().invertSelf().transformPoint(Ta), P.x = C.x, P.y = C.y, P.z = C.z);
      I = I && (z ? 0 : 1);
      var { x: C, y: K, z: G } = Ta,
        M =
          (K < (-20 > C || 109 > G ? -25 : -9) && (I = 2),
            1 === z && (e[9].i = -15 > C && 0 > G ? 1 : 0),
            x = Za(ob(x, K, 2), K, I || 8 * h(x - K)),
            u = E(u, x, 2, 1),
            g = E(g, C, 0.5, 1),
            H = E(H, G, 0.5, 1),
            k = ob(k, pa * (27 < z && 32 > z), 2),
            ha
              ? (M = I + (1 - Math.exp(-18 * d)),
                Ca = Za(Ca, C, M),
                Da = Za(Da, x + 1.5, M),
                Ea = Za(Ea, G, M),
                Sa = Xa(Sa))
              : (Ea = E(Ea, H + -18 + 5 * k, 1, 2 + k),
                Da = E(Da, Va(u + n((-60 - G) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
                Ca = E(Ca, g, 1, 2 + k),
                M = Ua(-6, -h(H - Ea)),
                U = g - Ca,
                Sa = Ya(Sa, 90 - Xa(Math.atan2(M, U) / Ga), N + (1 - Math.exp(-10 * d))),
                Ra = Ya(Ra, 90 - Math.atan2(ab(M, U), Da - u) / Ga, N + (1 - Math.exp(-10 * d)))),
            Ra = n(Ra, -87, 87),
            N = 0,
            n(Aa, -1)),
        U = n(Ba, -1);
      const Q = Wa(ab(M, U) ** 0.5, 0.1);
      var A = Math.atan2(M, U);
      M = Q * h(M) * Math.sin(A);
      U = Q * h(U) * Math.cos(A);
      Q && (a = 90 - A / Ga);
      b = Ya(b, a, 1 - Math.exp(-8 * d));
      f = ob(f, Q, 10);
      D().translateSelf(C, x, G).rotateSelf(0, b);
      for (A = 0; 2 > A; ++A) {
        const R = 9.1 * c - Math.PI * A;
        gb(Na[37].m, D()).translateSelf(0, f * n(0.45 * Math.sin(R - Math.PI / 2))).rotateSelf(
          f * Math.sin(R) * 0.25 / Ga,
          0,
        );
      }
      O = z ? 5 : ob(O, I ? 13 : 19 - 2 * Ua(0, K + 10), 2.2);
      r = z || I ? 0 : ob(r, 0, 3);
      m = z || I ? 0 : ob(m, 0, 3);
      v = I ? 0 : ob(v, z ? 7 * n(2 * Q) * y : 0, z ? 9 : 1);
      A = ha ? (180 + Sa) * Ga : 0;
      q(d * (r + v * (U * Math.cos(A) - M * Math.sin(A))), -O * d, d * (m + v * (U * Math.sin(A) + M * Math.cos(A))));
    };
  },
  Nb = (a, b, f, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  Ub = (a, b, f) => {
    ba
      ? 1100 < hC.width
        && (gb().rotateSelf(0, 40 * Math.sin(wa) - 80, -8),
          cb(fb, Ob, 36),
          cb(fb, Ob, 37),
          cb(fb, Ob, 38),
          Z.uae(a, !1, Ob),
          Z.d97(4, Na[39].D - Na[37].s, 5123, 2 * Na[37].s))
      : (Z.uae(a, !1, Ob),
        Z.d97(4, (b ? Na[39].D : Na[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Tb),
        Z.das(4, Na[f].D - Na[f].s, 5123, 2 * Na[f].s, Ma.length),
        Z.das(4, Na[42].D - Na[42].s, 5123, 2 * Na[42].s, e.length));
  },
  Vb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Wb = (a, b) => {
    const f = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Vb(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
  },
  Xb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Yb = a => Math.sin(a * Math.PI * 2),
  Zb = a => 0.5 > a % 1 ? 1 : -1,
  $b = a => a % 1 * 2 - 1,
  ac = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  hc = a => {
    let b = 0;
    const f = () => {
        let v = 0;
        const y = A => {
            let R, S, sa, ia = 0, ma = 0;
            const db = [],
              Ha = new Int32Array(768 * A),
              bc = 2 ** (q - 9) / A,
              cc = Math.PI * 2 ** (K - 8) / A,
              zb = M * A & -2;
            for (let tb = 0; 11 >= tb; ++tb) {
              for (
                let ub = 0, Pb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb];
                32 > ub;
                ++ub
              ) {
                const Qb = (32 * tb + ub) * A;
                for (var Ia = 0; 4 > Ia; ++Ia) {
                  if (R = 0, Pb && (R = x[Pb - 1].charCodeAt(ub + 32 * Ia) - 40, R += 0 < R ? 106 : 0), R) {
                    var fa;
                    if (!(fa = db[R])) {
                      fa = R;
                      let W = void 0, ta = void 0;
                      var Rb = R;
                      let dc = 0, ec = 0;
                      const fc = 2 > b ? $b : Yb, gc = 2 > b ? 1 > b ? Zb : ac : Yb, Sb = new Int32Array(O + P + Q);
                      for (let Ja = 0, Ab = 0; O + P + Q > Ja; ++Ja, ++Ab) {
                        let Ka = 1;
                        O > Ja ? Ka = Ja / O : O + P > Ja || (Ka = (1 - (Ka = (Ja - O - P) / Q)) * 3 ** (-l / 16 * Ka));
                        0 > Ab
                          || (Ab -= 4 * A,
                            ta = 0.00396 * 2 ** ((Rb + B - 256) / 12),
                            W = 0.00396 * 2 ** ((Rb + H - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Sb[Ja] = 80
                            * (fc(dc += ta * Ka ** (g / 32)) * z + gc(ec += W * Ka ** (N / 32)) * u
                              + (I ? (2 * Math.random() - 1) * I : 0))
                            * Ka | 0;
                      }
                      fa = db[fa] = Sb;
                    }
                    for (let W = 0, ta = 2 * Qb; fa.length > W; ++W, ta += 2) {
                      Ha[ta] += fa[W];
                    }
                  }
                }
                for (let W, ta = 0; A > ta; ++ta) {
                  Ia = 0;
                  fa = 2 * (Qb + ta);
                  var ua = (((W = Ha[fa]) || sa)
                    && (S = 0.00308 * J,
                      1 !== b && 4 !== b || (S *= Math.sin(bc * fa * Math.PI * 2) * U / 512 + 0.5),
                      S = 1.5 * Math.sin(S),
                      ia += S * ma,
                      ua = (1 - E / 255) * (W - ma) - ia,
                      ma += S * ua,
                      W = 4 === b ? ma : 3 === b ? ua : ia,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= D / 32,
                      sa = 1e-5 < W * W,
                      ua = Math.sin(cc * fa) * C / 512 + 0.5,
                      Ia = W * (1 - ua),
                      W *= ua),
                    fa < zb || (Ia += Ha[1 + fa - zb] * G / 255, W += Ha[fa - zb] * G / 255),
                    v + fa >> 1);
                  r[ua] += (Ha[fa] = Ia) / 65536;
                  m[ua] += (Ha[++fa] = W) / 65536;
                }
              }
            }
            v += 768 * A;
          },
          x = Pa[b],
          [z, B, g, u, H, N, I, O, P, t, l, q, J, E, D, C, K, G, M, U] = Qa[b],
          Q = 4 * t ** 2;
        y(5513);
        y(4562);
        y(3891);
        Xb(5 > ++b ? f : a);
      },
      k = vb.createBuffer(2, 5362944, 44100),
      r = k.getChannelData(0),
      m = k.getChannelData(1);
    sb.buffer = k;
    sb.loop = !0;
    Xb(f);
  },
  vb = new AudioContext(),
  eb = new DOMMatrix(),
  fb = new DOMMatrix(),
  bb = new Float32Array(16),
  Ob = new Float32Array(624),
  Tb = new Float32Array(624),
  Lb = new Uint8Array(65536),
  sb = vb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Xb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const r = [new Float32Array(16), new Float32Array(16)],
          m = t => {
            requestAnimationFrame(m);
            var l = (t - (aa || t)) / 1e3;
            if (wa += l, c += d = ba ? 0 : Ua(0.066, l), aa = t, 0 < d) {
              la();
              Fa && c > Fa && (Fa = 0, h4.innerHTML = "");
              da = ob(da, e[9].h, 0.2 + 0.3 * h(2 * e[9].h - 1));
              ca = ob(ca, ya ? ob(ca, -9, 1.5) : n(c / 3), 1);
              let C = 1;
              t = () => gb(eb, Na[++C].m);
              pa = $a(e[12].g, e[13].g);
              va = Za(ob(va, 0, 1), Xa(va + 60 * d), e[5].g - e[6].h);
              qa = Za(ob(qa, 0, 5), Xa(qa + 56 * d), pa);
              ra = Za(ob(ra, 0, 4), Xa(ra + 48 * d), pa);
              Nb(t(), -12, 4.2, 40 * ca - 66);
              t().translateSelf(0, 0, -15).scaleSelf(1, n(1.22 - e[1].g), 1);
              t().translateSelf(0, 0, 15).scaleSelf(1, n(1.22 - e[2].g), 1);
              t().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, n(1.1 - e[6].g), 1);
              t().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g);
              t().translateSelf(
                0,
                0.01 > e[3].g ? -500 : (1 - e[2].g) * e[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (e[3].g - 1),
                0,
              );
              l = Ua(e[2].h, 1 - e[4].h);
              t().translateSelf(l * Math.sin(c / 1.5 + 2) * 12);
              t().translateSelf(l * Math.sin(0.7 * c + 2) * 12);
              t().translateSelf(l * Math.sin(c + 3) * 8.2);
              t().translateSelf(9.8 * (1 - l));
              l = n(1 - 5 * l) * $a(e[4].g, e[5].g);
              t().translateSelf(0, l * Math.sin(1.35 * c) * 4);
              t().translateSelf(0, 0, l * Math.sin(0.9 * c) * 8);
              t().translateSelf(0, -6.5 * e[4].h);
              t().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + va, 0);
              l = $a(e[7].h, e[6].h);
              t().translateSelf(0, l * Math.sin(c) * 5 + 3.5 * (1 - Va(e[6].g, e[7].g)));
              t().translateSelf(0, l * Math.sin(c + 3) * 6, l * Math.sin(0.6 * c + 1) * 6);
              t().translateSelf(0, -7.3 * e[7].h);
              Nb(t(), -123, 1.4, 55 + -65 * da);
              l = $a(e[10].g, e[11].g);
              t().translateSelf(0, -2, l * h(Math.sin(1.1 * c)) * -8.5 + 10);
              t().translateSelf(0, -2, l * h(Math.sin(2.1 * c)) * -8.5 + 10);
              t().translateSelf(0, -2, -8.5 * Va((1 - e[10].g) * (1 - l), l * h(Math.sin(1.5 * c))) + 10);
              l = $a(e[8].h, e[12].h);
              for (var q = 0; 4 > q; q++) {
                t().translateSelf(
                  (2 < q ? 2 * (1 - l) + l : 0) - 100,
                  l * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7,
                  115 + (1 & q ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7
                    + Va(l, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),
                );
              }
              t().translateSelf(2.5 * (1 - l) - 139.7, -3 * (1 - e[8].g) + l * Math.sin(0.8 * c) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * l + 3), 0);
              t().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + qa);
              t().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ra);
              t().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ra);
              t().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ra);
              l = $a(e[13].h, e[14].h);
              for (q = 0; 3 > q; ++q) {
                t().translateSelf(0, l * Math.sin(1.5 * c + 1.5 * q) * 4 + (q ? 0 : (1 - e[13].h) * (1 - e[14].h)));
              }
              t().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              l = $a($a((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2);
              t().translateSelf(0, 16 * l, 8.5 * n(2 * l - 1) + 95);
              for (l = 0; 13 > l; ++l) {
                Ma[l].F(), cb(fb, Tb, l);
              }
              for (l = 0; 16 > l; ++l) {
                e[l].F(), cb(fb, Tb, l + 13), Tb[16 * l + 223] = 1 - e[l].g;
              }
              oa(t);
              for (t = 0; C >= t; ++t) {
                cb(Na[t].m, Ob, t - 1);
              }
              ea = 0;
              g();
              Z.b6o(36160, P);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: t, y: l, z: J } = Ta;
              Z.uae(g("b"), !1, cb(gb().rotateSelf(0, 180).invertSelf().translateSelf(-t, -l, 0.3 - J)));
              Ub(g("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(g("b"), !1, cb(gb().translateSelf(-t, -l, -J - 0.3)));
              Ub(g("c"), 0, 40);
              Z.f1s();
            }
            q = Ca;
            let E = Da, D = Ea;
            ba
              ? ({ x: t, y: l } = gb(ja).invertSelf().transformPoint({ x: 3.6, y: 3.5 }),
                q = t,
                E = l,
                D = 5,
                gb(eb, v).rotateSelf(-20, 0).invertSelf().translateSelf(-q, -E, -D).rotateSelf(0, 99))
              : gb(eb, v).rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-q, -E, -D);
            z();
            Z.b6o(36160, I);
            Z.v5y(0, 0, 2048, 2048);
            N[0](54.7 * 1.1);
            N[1](126 * 1.1);
            u();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(u("a"), !1, cb(ja));
            Z.uae(u("b"), !1, cb(v));
            Z.uae(u("i"), !1, r[0]);
            Z.uae(u("j"), !1, r[1]);
            Z.ubu(u("k"), q, E, D);
            Ub(u("c"), !ha, 41);
            B();
            Z.ubu(B("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
            Z.ubu(B("k"), q, E, D);
            Z.uae(B("b"), !1, cb(gb(v).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, P);
            Z.f1s();
          },
          v = new DOMMatrix(),
          y = new DOMMatrix(),
          x = f;
        var k = Vb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const z = Wb(
            Vb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          B = Wb(
            Vb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          g = Wb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          u = Wb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          H = ib(8, () => ({})),
          N = ib(2, t => {
            const l = Z.c25();
            return Z.a4v(33984 + t),
              Z.b9j(3553, l),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              q => {
                let J = 0, E = 0, D = 0, C = 1 / 0, K = 1 / 0, G = 1 / 0, M = -1 / 0, U = -1 / 0, Q = -1 / 0;
                Z.fas(36160, 36096, 3553, l, 0);
                Z.c4s(256);
                gb().scale3dSelf(q).multiplySelf(gb(ka[t], y).multiplySelf(v).invertSelf());
                for (let A = 0; 8 > A; ++A) {
                  const R = H[A],
                    S = (R.x = 4 & A ? 1 : -1, R.y = 2 & A ? 1 : -1, R.z = 1 & A ? 1 : -1, fb.transformPoint(R));
                  J -= R.x = (0 | S.x) / q / S.w;
                  E -= R.y = (0 | S.y) / q / S.w;
                  D -= R.z = (0 | S.z) / q / S.w;
                }
                gb().rotateSelf(298, 139).translateSelf(J / 8, E / 8, D / 8);
                for (q = 0; 8 > q; ++q) {
                  const { x: A, y: R, z: S } = fb.transformPoint(H[q]);
                  C = Ua(C, A);
                  M = Va(M, A);
                  K = Ua(K, R);
                  U = Va(U, R);
                  G = Ua(G, S);
                  Q = Va(Q, S);
                }
                q = 10 + t;
                G *= 0 > G ? q : 1 / q;
                Q *= 0 < Q ? q : 1 / q;
                Z.uae(
                  z("b"),
                  !1,
                  cb(
                    gb(eb, y).scaleSelf(2 / (M - C), 2 / (U - K), 2 / (G - Q)).translateSelf(
                      (M + C) / -2,
                      (U + K) / -2,
                      (G + Q) / 2,
                    ).multiplySelf(fb),
                    r[t],
                  ),
                );
                Ub(z("c"), !ha, 41);
              };
          }),
          I = Z.c5w();
        k = Z.c25();
        const O = Z.c3z(), P = Z.c5w();
        g();
        Z.uae(g("a"), !1, cb(rb(1e-4, 2, 1.4, 0.4)));
        u();
        Z.ubh(u("q"), 2);
        Z.ubh(u("h"), 1);
        Z.ubh(u("g"), 0);
        B();
        Z.ubh(B("q"), 2);
        Z.b6o(36160, I);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, P);
        Z.bb1(36161, O);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, O);
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
        NO_INLINE(wb)();
        NO_INLINE(Mb)();
        requestAnimationFrame(m);
      }
    },
    f = new Image();
  f.onload = f.onerror = b;
  f.src = La;
  NO_INLINE(hc)(() => {
    Xb(() => {
      let m = 0;
      const v = [],
        y = [],
        x = [],
        z = [],
        B = new Int32Array(8),
        g = new Map(),
        u = new Int32Array(B.buffer, 0, 5),
        H = new Float32Array(B.buffer);
      Na.map((N, I) => {
        let O;
        const P = t => {
          let { x: l, y: q, z: J } = O[t], E = (H[0] = l, H[1] = q, H[2] = J, t = "" + (O.C ? u : B), g.get(t));
          return void 0 !== E
            ? (l = 3 * E, z[l] = (z[l++] + B[5]) / 2, z[l] = (z[l++] + B[6]) / 2, z[l] = (z[l] + B[7]) / 2)
            : (g.set(t, E = g.size), y.push(l, q, J, H[3]), x.push(B[4]), z.push(B[5], B[6], B[7])),
            E;
        };
        for (O of (H[3] = 41 < I ? -14 : N.G && I, N.o)) {
          const { x: t, y: l, z: q } = Db(O);
          B[4] = 0 | O.u;
          B[5] = 32767 * t;
          B[6] = 32767 * l;
          B[7] = 32767 * q;
          for (let J = 2, E = P(0), D = P(1); O.length > J; ++J) {
            v.push(E, D, D = P(J));
          }
        }
        N.o = null;
        N.s = m;
        N.D = m = v.length;
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
        const [N, I, O, P, t] = JSON.parse(localStorage.DanteSP22);
        e.map((l, q) => l.g = l.h = l.i = q ? 0 | N[q] : 0);
        Ma.map((l, q) => l.i = 0 | I[q]);
        za = O;
        da = t;
        c = P;
        d = 0;
      } catch {
      }
      pb();
      ca = n(za);
      Xb(b);
    });
    const k = ib(11, m => p(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10)),
      r = ib(10, m => mb(kb(lb(18), k[m]).reverse(), kb(lb(18), k[m + 1]), 1)).flat();
    X(() => V([Oa.slice(1)], p(-2).scale3d(3).rotate(90, 0)), 0);
    X(() => {
      const m = g =>
          X(() => {
            Oa.map(({ x: u, z: H }) => {
              V(L(11, 1), p(4 * u, 4, g + 4 * H).scale(0.8, 3, 0.8), T(0.5, 0.3, 0.7, 0.6));
              V(L(), p(4 * u, 7, g + 4 * H).scale(1, 0.3), T(0.5, 0.5, 0.5, 0.3));
            });
            V(Y(
              F(L(), p(0, 0, g).scale(5, 1, 5), T(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(u => F(L(), p(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), T(0.8, 0.8, 0.8, 0.3))),
            ));
            V(L(), p(0, -3, g).scale(8, 2, 8), T(0.4, 0.4, 0.4, 0.3));
          }),
        v = g =>
          Y(
            F(L(), p(0, -g / 2).scale(6, g - 1, 2.2)),
            F(L(), p(0, -g / 2 - 6).scale(4, g - 3, 4)),
            F(L(32, 1), p(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        y = () => X(() => ib(7, g => V(F(L(6, 1), p(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), T(0.3, 0.3, 0.38))))),
        x = Y(
          F(L(30, 1, 1.15, 1), p(0, -3).scale(3.5, 1, 3.5), T(0.7, 0.4, 0.25, 0.7)),
          F(L(30, 1, 1.3, 1), p(0, -2.5).scale(2.6, 1, 3), T(0.7, 0.4, 0.25, 0.2)),
          F(L(), p(4, -1.2).scale3d(2), T(0.7, 0.4, 0.25, 0.3)),
        ),
        z = (X(() => {
          V(x);
          yb(p(0, -3, 4));
        }),
          yb(p(-5.4, 1.5, -19).rotate(0, -90)),
          Bb(p(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Bb(p(0, 2.8), [5, 10, 3], [-5, 10, 3], ...lb(18).map(({ x: g, z: u }) => [7 * g, 10 * u, 4.5 - 2 * h(g)])),
          Oa.map(({ x: g, z: u }) => V(L(6), p(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), T(0.6, 0.3, 0.3, 0.4))),
          [-15, 15].map((g, u) => {
            y();
            y();
            V(L(), p(0, 6.3, g).scale(4, 0.3, 1), T(0.3, 0.3, 0.3, 0.4));
            V(L(), p(0, 1, g).scale(3, 0.2, 0.35), T(0.5, 0.5, 0.5, 0.3));
            V(L(), p(0, 0, u ? 22 : -23).scale(3, 1, 8), T(0.9, 0.9, 0.9, 0.2));
            ib(5, H =>
              V(
                r,
                p(18.5 * (u - 0.5), 0, 4.8 * H - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2),
                T(1, 1, 0.8, 0.2),
              ));
          }),
          V(L(), p(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), T(0.8, 0.8, 0.8, 0.2)),
          V(L(), p(3, 1.5, -20).scale(0.5, 2, 5), T(0.7, 0.7, 0.7, 0.2)),
          V(L(), p(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), T(0.75, 0.75, 0.75, 0.2)),
          V(L(5), p(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), T(0.6, 0.3, 0.3, 0.4)),
          V(L(), hb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), T(0.8, 0.2, 0.2, 0.5)),
          V(Y(
            Kb(
              F(L(6, 0, 0, 0.3), p(8, -3, -4).scale(13, 1, 13), T(0.7, 0.7, 0.7, 0.2)),
              F(L(6), p(0, -8).scale(9, 8, 8), T(0.4, 0.2, 0.5, 0.5)),
              F(L(6, 0, 0, 0.3), p(0, -0.92).scale(13, 2, 13), T(0.8, 0.8, 0.8, 0.2)),
            ),
            F(L(5), w(5, 30, 5), T(0.4, 0.2, 0.6, 0.5)),
            F(L(5, 0, 1.5), p(0, 1).scale(4.5, 0.3, 4.5), T(0.7, 0.5, 0.9, 0.2)),
            F(L(), hb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), T(0.5, 0.5, 0.5, 0.5)),
            F(L(6), p(15, -1.5, 4).scale(3.5, 1, 3.5), T(0.5, 0.5, 0.5, 0.5)),
          )),
          X(() => {
            V(L(5), p(0, -0.2).scale(5, 1, 5), T(0.6, 0.65, 0.7, 0.3));
            yb(p(0, 1.2));
          }),
          yb(p(15, -2, 4)),
          X(() => {
            V(
              Y(
                Kb(
                  F(L(), w(1.5, 1, 5), T(0.9, 0.9, 0.9, 0.2)),
                  F(L(6), w(4, 1, 5), T(0.9, 0.9, 0.9, 0.2)),
                  F(L(), p(0, -2).scale(2, 3.2, 1.9), T(0.3, 0.8, 0.5, 0.5)),
                  F(L(16, 1, 0, 4), w(1, 1, 1.5).rotate(0, 90), T(0.9, 0.9, 0.9, 0.2)),
                ),
                F(L(), w(1.3, 10, 1.3), T(0.2, 0.7, 0.4, 0.6)),
              ),
              p(0, 0, 45),
            );
            Bb(p(0, 2.8, 45), [0, 0, 4.5]);
          }),
          m(35),
          m(55),
          V(L(), p(-18.65, -3, 55).scale(2.45, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2)),
          X(() => {
            V(L(3), p(-23, -1.7, 55.8).scale(5, 0.7, 8.3), T(0.3, 0.6, 0.6, 0.2));
            V(L(8), p(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), T(0.8, 0.8, 0.8, 0.2));
            V(L(), p(-23, -3, 55).scale(5.2, 1.7, 3), T(0.5, 0.5, 0.5, 0.3));
            V(L(), p(-23, -2.2, 62).scale(3, 1, 4), T(0.5, 0.5, 0.5, 0.3));
            yb(p(-23, -0.5, 66.5));
          }),
          X(() => {
            V(L(), p(-22.55, -3, 55).scale(1.45, 1.4, 2.7), T(0.7, 0.7, 0.7, 0.2));
            V(Y(F(L(), w(3, 1.4, 2.7)), F(L(), w(1.2, 8, 1.2))), p(-33, -3, 55), T(0.7, 0.7, 0.7, 0.2));
          }),
          X(() => {
            V(Y(
              F(L(), p(-27, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2)),
              F(L(), p(-27, -3, 55).scale(1, 3), T(0.9, 0.9, 0.9, 0.2)),
            ));
            V(L(), p(-39, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2));
          }),
          X(() => {
            V(L(6), p(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), T(0.7, 0.7, 0.7, 0.4));
          }),
          yb(p(-55, -1.1, 46).rotate(0, 90)),
          V(L(6), p(-61.3, -2.4, 49).scale(3, 1, 5), T(0.4, 0.6, 0.6, 0.3)),
          V(L(7), p(-57, -2.6, 46).scale(4, 1, 4), T(0.8, 0.8, 0.8, 0.3)),
          [
            ...F(L(), p(0, -3).scale(11, 1.4, 3), T(0.9, 0.9, 0.9, 0.2)),
            ...F(L(), p(0, -2.2).scale(7.7, 0.5, 4), T(0.5, 0.5, 0.5, 0.2)),
            ...Y(
              F(L(6), hb(90).scale(6, 8, 6), T(0.3, 0.6, 0.6, 0.3)),
              F(L(4, 0, 0.01), p(0, 6).scale(12, 2, 0.75).rotate(0, 45), T(0.3, 0.6, 0.6, 0.3)),
              F(L(6), hb(90).scale(5, 12, 5), T(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(g => F(L(5), p(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), T(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        B = (V(z, p(-53, 0, 55)),
          X(() => V(z), 2),
          V(L(), p(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), T(0.7, 0.7, 0.7, 0.2)),
          V(L(3, 0, -0.5), p(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), T(0.8, 0.8, 0.8, 0.2)),
          V(Y(
            Kb(
              F(L(), p(-100, -2.4, 55).scale(8, 0.9, 8), T(0.8, 0.8, 0.8, 0.2)),
              F(L(), p(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), T(0.8, 0.8, 0.8, 0.2)),
              F(L(), p(-100, -2.6, 70).scale(3, 1.1, 7), T(0.8, 0.8, 0.8, 0.2)),
              F(L(), p(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), T(0.8, 0.8, 0.8, 0.2)),
              F(L(6), p(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), T(0.6, 0.6, 0.6, 0.3)),
              F(L(), p(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), T(0.8, 0.8, 0.8, 0.2)),
              F(L(), p(-100, 0.42, 92).scale(3, 1.1, 4.1), T(0.8, 0.8, 0.8, 0.2)),
            ),
            F(L(8), p(-100, -1, 55).scale(7, 0.9, 7), T(0.3, 0.3, 0.3, 0.4)),
            F(L(8), p(-100, -2, 55).scale(4, 0.3, 4), T(0.4, 0.4, 0.4, 0.5)),
            F(L(8, 0, -3.1), p(-100, -3, 55).scale(0.4, 1, 0.4), T(0.4, 0.4, 0.4, 0.5)),
          )),
          Bb(p(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Bb(p(-89, 0.2, 80), [0, 0, 6]),
          V(Y(
            F(L(), p(-100, 1, 63).scale(7.5, 4), T(0.5, 0.5, 0.5, 0.4)),
            F(L(), p(-100, 0, 70).scale(2, 2, 10), T(0.5, 0.5, 0.5, 0.4)),
            F(L(20, 1), p(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), T(0.5, 0.5, 0.5, 0.4)),
          )),
          Oa.map(({ x: g, z: u }) => {
            V(L(6), p(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), T(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(H => V(L(6), p(7 * g - 100, H, 7 * u + 55).scale(1.3, 0.5, 1.3), T(0.4, 0.2, 0.2, 0.8)));
          }),
          ib(7, g => {
            V(
              L((23 * g + 1) % 5 + 5, 0, 0.5),
              p(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3),
              T(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
            );
          }),
          V(L(), p(-87, -9.5, 24).scale(7, 1, 3), T(0.4, 0.5, 0.6, 0.4)),
          V(L(4), p(-86, -9.2, 27).scale(5, 1, 5), T(0.5, 0.6, 0.7, 0.3)),
          V(L(12, 1), p(-86, -9, 31).scale(1.5, 1, 1.5), T(0.3, 0.3, 0.4, 0.1)),
          yb(p(-86, -7.5, 31)),
          X(() => {
            [0, 12, 24].map(g =>
              V(L(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), T(0.2, 0.5, 0.6, 0.2))
            );
          }),
          X(() => {
            [6, 18].map(g =>
              V(L(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), T(0.1, 0.4, 0.5, 0.2))
            );
          }),
          V(
            Y(
              Kb(
                F(L(5), p(0, 0, -7).scale(2, 1.2, 2), T(0.2, 0.4, 0.7, 0.3)),
                F(L(5), w(9, 1.2, 9), T(0, 0.2, 0.3, 0.5)),
                F(L(), w(11, 1, 13), T(0.3, 0.4, 0.6, 0.3)),
              ),
              F(L(5), w(5.4, 5, 5.4), T(0, 0.2, 0.3, 0.5)),
            ),
            p(-38.9, -11.3, 17),
          ),
          yb(p(-38.9, -9.6, 10)),
          X(() => {
            V(
              Y(
                Kb(
                  F(L(5), p(0, 2).scale(5, 7, 5).skewY(8), T(0.2, 0.4, 0.5, 0.5)),
                  F(L(5), p(0, 6).scale(1.1, 7, 1.1).skewY(-8), T(0.25, 0.35, 0.5, 0.5)),
                  F(L(5), p(0, 9).scale(0.6, 7, 0.6).skewY(8), T(0.35, 0.3, 0.5, 0.5)),
                ),
                F(L(5), w(4, 8, 4), T(0.2, 0.4, 0.5, 0.5)),
                F(L(5), p(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), T(0.2, 0.4, 0.5, 0.5)),
              ),
              p(-38.9, -11.3, 17),
            );
            Bb(p(-39.1, -0.6, 17).rotate(11), ...lb(15).map(({ x: g, z: u }) => [3 * g, 3 * u, 1.2]));
          }),
          Oa.map(({ x: g, z: u }) => {
            V(L(14, 1), p(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), T(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(H =>
              V(L(17, 1), p(9 * g - 38.9, H - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), T(0.6, 0.6, 0.6, 0.3))
            );
          }),
          V(
            Y(
              Kb(
                F(L(6), p(0, 0, -36).scale(15, 1.2, 15), T(0.7, 0.7, 0.7, 0.3)),
                F(L(), p(0, 0, -18).scale(4, 1.2, 6), T(0.45, 0.4, 0.6, 0.3)),
              ),
              ...ib(6, g =>
                ib(6, u =>
                  F(
                    L(6),
                    p(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2),
                    T(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            p(-38.9, -11.3, 17),
          ),
          Bb(p(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          V(L(5), p(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), T(0.8, 0.1, 0.25, 0.4)),
          yb(p(-84, -0.5, 85).rotate(0, 45)),
          X(() => {
            V(x);
            yb(p(0, -3, -4).rotate(0, 180));
          }),
          Y(
            F(L(), p(0, -0.5, 1).scale(1.15, 1.2, 6.5), T(0.25, 0.25, 0.35, 0.3)),
            Y(
              F(L(3), p(0, 0, -5.5).scale(3, 2), T(0.6, 0.3, 0.4, 0.3)),
              F(L(), p(0, 0, -3.65).scale(2.5, 3), T(0.6, 0.3, 0.4, 0.3)),
            ),
            ...[-1, 1].map(g => F(L(), p(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), T(0.7, 0.2, 0, 0.3))),
          ));
      X(() =>
        ib(2, g =>
          V(B, p(9 * g - 110 + (1 & g), 1.9, -12)))
      );
      X(() =>
        ib(2, g =>
          V(B, p(9 * (g + 2) - 110 + (1 & g), 1.9, -12)))
      );
      X(() =>
        ib(3, g =>
          V(B, p(9 * g - 106, 1.9, -12)))
      );
      V(
        Y(
          Kb(F(L(), p(26.5, -1.6, 10).scale(20, 2.08, 3)), F(L(), p(26.5, -0.5, 10).scale(19, 2, 0.5))),
          ...ib(4, g => F(L(), p(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
          ...ib(3, g => F(L(), p(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        p(-123, 0.2, -12),
        T(0.5, 0.5, 0.6, 0.2),
      );
      yb(p(-116, -1.4, -18).rotate(0, 180));
      V(L(), p(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), T(0.8, 0.8, 0.8, 0.2));
      V(L(6), p(-116, -2.6, -16.5).scale(3.2, 0.8, 3), T(0.6, 0.5, 0.7, 0.2));
      V(L(), p(-115.5, -17, -12).scale(0.5, 15, 2.2), T(0.6, 0.6, 0.6, 0.3));
      V(L(8), p(-114, -17, -2).scale(2, 15, 2), T(0.6, 0.6, 0.6, 0.3));
      V(L(8), p(-79, -17, -2).scale(2, 15, 2), T(1, 1, 1, 0.3));
      V(L(), p(-77, -17, -50.5).scale(2.2, 15, 0.5), T(0.6, 0.6, 0.6, 0.3));
      ib(3, g => {
        V(v(16), p(12 * g - 109, -9, -12), T(0.6, 0.6, 0.6, 0.3));
        V(v(16), p(-77, -9, -12 * g - 20).rotate(0, 90), T(0.6, 0.6, 0.6, 0.3));
      });
      V(Y(
        F(L(12), p(-77, -14.5, -12).scale(4, 17.5, 4), T(0.7, 0.7, 0.7, 0.2)),
        F(L(), p(-79, 0.1, -12).scale(3.5, 2, 1.3), T(0.4, 0.5, 0.6, 0.2)),
        F(L(), p(-77, 0.1, -14).scale(1.5, 2, 2), T(0.4, 0.5, 0.6, 0.2)),
        F(L(12), p(-77, 3.1, -12).scale(3, 5, 3), T(0.4, 0.5, 0.6, 0.2)),
      ));
      V(L(), p(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), T(0.6, 0.6, 0.6, 0.3));
      V(L(9), p(-98, -18.4, -40).scale(2.5, 13.5, 2.5), T(0.5, 0.5, 0.5, 0.3));
      V(Y(
        F(L(), p(-93, -5.8, -40).scale(9, 1, 5), T(0.8, 0.8, 0.8, 0.1)),
        F(L(9), p(-98, -5.8, -40).scale(3, 8, 3), T(0.7, 0.7, 0.7, 0.2)),
      ));
      yb(p(-98, -4.4, -40).rotate(0, 90));
      Bb(p(-115, 0.2, -12), [0, 0, 3.5]);
      Bb(p(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      V(Y(
        Kb(
          F(L(6, 0, 0, 0.6), p(-100, 0.7, 105.5).scale(8, 1, 11), T(0.7, 0.7, 0.7, 0.2)),
          F(L(), p(-101.5, 0.7, 93.5).scale(10.5, 1, 2), T(0.7, 0.7, 0.7, 0.2)),
        ),
        F(L(5), p(-100, 0.7, 113).scale(4, 3, 4), T(0.7, 0.7, 0.7, 0.2)),
      ));
      ib(
        4,
        g =>
          X(() =>
            V(
              L(6),
              p(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              T(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
            )
          ),
      );
      X(() => {
        V(Y(F(L(10), w(6, 2, 6), T(0.1, 0.6, 0.5, 0.3)), F(L(10), w(3.3, 6, 3.3), T(0.1, 0.6, 0.5, 0.5))));
        V(L(15, 1), p(-7.5).rotate(0, 90).scale(3, 2.3, 3), T(0.4, 0.4, 0.4, 0.3));
        V(L(10), p(-7.5).rotate(0, 90).scale(2, 2.5, 2), T(0.3, 0.8, 0.7, 0.3));
        V(L(5), p(-7.5).rotate(0, 90).scale(1, 3), T(0.5, 0.5, 0.5, 0.5));
        yb(p(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => V(r, hb(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), T(1, 1, 0.8, 0.2)));
        Bb(p(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(g => {
        [7.2, 1.5].map(u => V(L(15, 1), p(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), T(0.5, 0.24, 0.2, 0.4)));
        V(r, p(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), T(1, 1, 0.8));
        V(L(12, 1), p(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), T(0.6, 0.24, 0.2, 0.5));
        V(
          Y(
            F(L(), p(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), T(0.5, 0.5, 0.5, 0.4)),
            F(L(), w(3, 3, 10), T(0.6, 0.24, 0.2, 0.5)),
            F(L(28, 1), p(0, 3, -5).scale(3, 4, 10).rotate(90, 0), T(0.6, 0.24, 0.2, 0.5)),
            F(L(5), p(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), T(0.6, 0.24, 0.2, 0.5)),
            F(L(5), p(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), T(0.6, 0.24, 0.2, 0.5)),
          ),
          p(g - 100, 0.7, 97),
        );
      });
      V(Y(
        F(L(), p(-82.07, 0.8, 106).scale(11, 0.9, 2.2), T(0.7, 0.7, 0.7, 0.1)),
        F(L(45, 1), p(-81, 0.7, 106).scale3d(7.7), T(0.7, 0.7, 0.7, 0.1)),
      ));
      X(() => {
        V(Y(
          F(L(45, 1), w(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)),
          F(L(), p(0, 0, -5.5).scale(1.5, 3, 2.7), T(0.45, 0.45, 0.45, 0.2)),
        ));
        V(L(8), p(0, 2).scale(3, 1.5, 3).rotate(0, 22), T(0.7, 0.7, 0.7, 0.1));
        V(L(5), p(0, 2).scale(1, 2), T(0.3, 0.3, 0.3, 0.2));
        Bb(p(0, 3), ...lb(14).map(({ x: g, z: u }) => [5.6 * g, 5.6 * u, 2]));
      });
      X(() => {
        [-1, 1].map(g =>
          V(r, hb(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), T(1, 1, 0.8))
        );
        V(Y(F(L(28, 1), p(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3)), F(L(), w(9, 5, 2), T(0.3, 0, 0, 0.3))));
        V(F(L(28, 1), w(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        V(F(L(5), p(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)));
      });
      X(() => {
        V(Y(
          F(L(28, 1), p(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3)),
          F(L(), p(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)),
          F(L(), p(0, 0, 7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),
        ));
        V(F(L(28, 1), w(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        V(F(L(5), p(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)));
      });
      X(() => {
        V(Y(
          F(L(28, 1), p(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3)),
          F(L(), p(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)),
          F(L(), p(0, 0, -7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),
        ));
        V(F(L(28, 1), w(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        V(F(L(5), p(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)));
      });
      V(L(), p(-58, 1, 106).scale(2, 0.65, 2), T(0.7, 0.7, 0.7, 0.2));
      V(L(), p(-50.7, 1, 99).scale(2, 0.65, 1), T(0.7, 0.7, 0.7, 0.2));
      V(L(), p(-42, 0.4, 91).scale(5, 1, 2.5), T(0.7, 0.7, 0.7, 0.3));
      V(L(), p(-34.2, 0.4, 91).scale(3, 1, 3), T(0.7, 0.7, 0.7, 0.3));
      yb(p(-34, 2.7, 96).rotate(-12, 0));
      V(L(5), p(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), T(0.2, 0.5, 0.5, 0.6));
      [T(0.1, 0.55, 0.45, 0.2), T(0.2, 0.5, 0.5, 0.3), T(0.3, 0.45, 0.55, 0.4)].map((g, u) =>
        X(() => {
          V(L(), p(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
          2 === u && V(L(), p(-29.1, 0.4, 91).scale(2.1, 1, 3), T(0.7, 0.7, 0.7, 0.3));
          1 === u && V(L(), p(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), T(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(g => V(r, p(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), T(1, 1, 0.8)));
      ib(
        3,
        g =>
          V(
            v(24.7 - 0.7 * (1 & g)),
            p(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)),
            1 & g ? T(0.5, 0.5, 0.5, 0.3) : T(0.35, 0.35, 0.35, 0.5),
          ),
      );
      V(Y(
        F(L(6, 0, 0, 0.3), p(0, -0.92, 95).scale(14, 2, 14), T(0.8, 0.8, 0.8, 0.2)),
        F(L(5), p(0, 0, 95).scale3d(6), T(0.3, 0.3, 0.3, 0.5)),
      ));
      yb(p(0, 1.7, 82).rotate(0, 180));
      V(L(5), p(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), T(0.5, 0.3, 0.3, 0.4));
      V(L(6), p(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), T(0.5, 0.6, 0.7, 0.3));
      V(L(), p(0, 16, 129).scale(1.5, 1, 2), T(0.5, 0.6, 0.7, 0.3));
      V(L(7), p(0, 16.2, 133).scale(5, 1, 5), T(0.4, 0.5, 0.6, 0.4));
      V(Y(
        Kb(
          F(L(), p(0, 16, 110.5).scale(12, 1, 3), T(0.5, 0.3, 0.3, 0.4)),
          F(L(), p(0, 16, 111).scale(3, 1, 3.8), T(0.5, 0.3, 0.3, 0.4)),
        ),
        F(L(5), p(0, 16, 103.5).scale(5.5, 5, 5.5), T(0.5, 0.3, 0.3, 0.4)),
      ));
      X(() => {
        V(L(3), p(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), T(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          V(L(6), p(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), T(0.7, 0.7, 0.7, 0.4));
          V(L(), p(0, 6.2, g + 95).scale(0.5, 11, 0.5), T(0.5, 0.3, 0.3, 0.4));
        });
      });
      X(() => {
        V(L(5), w(5, 1.1, 5), T(0.5, 0.3, 0.3, 0.4));
        V(L(5), w(5.5, 0.9, 5.5), T(0.25, 0.25, 0.25, 0.4));
        yb(p(0, 1.5, -1).rotate(0, 180));
      });
      Bb(p(0, 3, 95), ...lb(9).map(({ x: g, z: u }) => [9 * g, 9 * u, 4]));
      Bb(p(0, 19, 134), [0, 0, 3.5]);
    });
    X(() => {
      V(nb(20), p(0, 1).scale3d(0.5), T(1, 0.3, 0.4));
      V(nb(30), w(0.65, 0.8, 0.55), T(1, 0.3, 0.4));
      V(L(), p(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), T(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        V(r, hb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), T(1, 1, 0.8));
        V(
          F(Y(L(15, 1), F(L(), p(0, 0, 1).scale(2, 2, 0.5))), hb(-90, 0).scale(0.1, 0.05, 0.1), T(0.3, 0.3, 0.3)),
          p(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        X(() => {
          V(L(20, 1), p(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), T(1, 0.3, 0.4));
        });
      });
    });
    X(() => {
      V(L(6).slice(0, -1), w(0.77, 1, 0.77), T(1, 0.3, 0.5));
    }, 0);
    X(() => {
      V(
        nb(30, 24, (m, v, y) => {
          const x = v / 24, z = m * Math.PI * 2 / 30, B = Math.sin(x ** 0.6 * Math.PI / 2);
          m = x * x * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < v
            ? { x: y.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(z) * B,
              y: Math.cos(x * Math.PI) - x - m,
              z: Math.sin(z) * B + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        w(0.7, 0.7, 0.7),
        T(1, 1, 1),
      );
      [-1, 1].map(m => V(nb(12), p(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    X(() => {
      V(L(6, 1), w(0.13, 1.4, 0.13), T(0.3, 0.3, 0.5, 0.1));
      V(L(10), p(0, 1).scale(0.21, 0.3, 0.21), T(1, 0.5, 0.2));
      V(L(3), p(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), T(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
