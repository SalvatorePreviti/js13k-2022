let aa,
  ba,
  ca,
  da,
  ea,
  fa,
  ia,
  ja,
  ka,
  la,
  ma,
  qa,
  ra,
  sa,
  ta,
  ua,
  va,
  c = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 1;
const Ia = Math.PI / 180,
  Ja = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Ka = [],
  d = [],
  La = [],
  Ma = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
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
  ];
var Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 180;
const Za = NO_INLINE(a => 0 > a ? -a : a),
  $a = NO_INLINE((a, b) => a < b ? a : b),
  ab = NO_INLINE((a, b) => b < a ? a : b),
  bb = (a, b) => Za(a) > b ? a : 0,
  e = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a,
  cb = a => Math.atan2(Math.sin(a * Ia), Math.cos(a * Ia)) / Ia,
  db = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * e(f) || 0,
  eb = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0,
  fb = (a, b) => (a = e(a), eb(a, 1 - a, b)),
  gb = (a, b, f = 0) =>
    Math.sqrt(
      a * a + b * b
        + f * f,
    ),
  lb = (a = 0, b = 0, f = 0, k = 1) => {
    hb = h.m11 * a + h.m21 * b + h.m31 * f + h.m41 * k;
    ib = h.m12 * a + h.m22 * b + h.m32 * f + h.m42 * k;
    jb = h.m13 * a + h.m23 * b + h.m33 * f + h.m43 * k;
    kb = h.m14 * a + h.m24 * b + h.m34 * f + h.m44 * k;
  };
var hb, ib, jb, kb;
const nb = (
    a,
    b = mb,
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
  ob = (
    a = l,
    b = h,
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
  n = NO_INLINE((a, b, f) => l.translate(a, b, f)),
  pb = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  qb = (a, b, f) => (a.C = f, a.u = b, a),
  rb = (a, b, f = a.u) => (ob(b), qb(a.map(({ x: k, y: r, z: m }) => (lb(k, r, m), { x: hb, y: ib, z: jb })), f, a.C)),
  w = (a, b, f) => a.map(k => rb(k, b, f)),
  sb = (a, b = 0) =>
    pb(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > Za(k) ? k : 0 > k ? k - b : k + b };
    }),
  tb = (a, b, f) =>
    a.map((k, r, { length: m }) => qb([k, b[m - r - 1], b[m - (r + 1) % m - 1], a[(r + 1) % m]], a.u, f)),
  F = (
    a,
    b,
    f = 0,
    k,
  ) => (a = a ? sb(a, k) : Ma,
    k = rb(a, n(0, 1).scale3d(0 < f ? f : 1)),
    a = rb(a, n(0, -1).scale3d(0 > f ? -f : 1)).reverse(),
    [...tb(a, k, b), k, a]),
  ub = (
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
        const v = qb([], 0, 1);
        k.push(v);
        v.push(f(r, m, v));
        m && v.push(f((r + 1) % a, m, v));
        b - 1 > m && v.push(f((r + 1) % a, m + 1 % b, v));
        v.push(f(r, m + 1 % b, v));
      }
    }
    return k;
  },
  vb = NO_INLINE(a => 1 - Math.exp(-a * ca)),
  wb = NO_INLINE((a, b, f) => eb(a, b, vb(f))),
  xb = () => {
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
      ][xa = Ka.reduce((a, { i: b }) => a + b, 0)] + " / XIII";
  },
  yb = () => {
    localStorage.DanteSP22 = JSON.stringify([d.map(({ i: a }) => a), Ka.map(({ i: a }) => a), Ba, c, ea]);
  },
  H = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  zb = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Eb = () => {
    let a, b, f, k, r, m, v, y, x, A, C, g, u, B, M = !0;
    const P = [],
      L = () => {
        b4.innerHTML = "Music: " + M;
        ba || !M ? Cb.disconnect() : Cb.connect(Db.destination);
      },
      U = () => {
        const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ka = [zb(0.3, 55, q, 1.732051), zb(55, 181, q, 1.732051)];
        ja = zb(0.3, 181, q, 1.732051);
        k = y = void 0;
        P.length =
          fa =
          B =
          g =
          u =
          Ca =
          Da =
            0;
      },
      p = (q, z = 0) => {
        if (ba !== q) {
          ba = q;
          ia = z;
          U();
          document.body.className = q ? "l m" : "l";
          try {
            q
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Cb.start());
          } catch {
          }
          L();
        }
      },
      t = (q, z) => q.buttons[z]?.pressed || 0 < q.buttons[z]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => p(!1);
    b2.onclick = () => p(!1, 1);
    b5.onclick = () => p(!0);
    b4.onclick = () => {
      M = !M;
      L();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = q => {
      if (!ba && (q.target === hC && (fa = 1), ia)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = q => {
      let z;
      q.repeat
        || (z = {
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
        }[q.code],
          (P[z] = !!q.type[5] && !0) && (0 === z && (fa = 1), 1 === z && p(!0)));
    };
    onmousemove = ({ movementX: q, movementY: z }) => {
      ia && (q || z) && (Ya += 0.1 * q, Xa += 0.1 * z);
    };
    hC.ontouchstart = q => {
      if (!ba) {
        for (let { pageX: z, pageY: N, identifier: Q } of q.changedTouches) {
          ia && z > hC.clientWidth / 2
            ? void 0 === y && (x = 0, m = z, v = N, y = Q, A = Ya, C = Xa)
            : void 0 === k && (r = 0, b = z, f = N, k = Q);
        }
        a = wa;
      }
    };
    hC.ontouchmove = q => {
      if (!ba) {
        for (let { pageX: I, pageY: G, identifier: E } of q.changedTouches) {
          var z, N, Q, D;
          y === E && (Ya = A + (I - m) / 2.3, Xa = C + (G - v) / 2.3, x = 1);
          k === E
            && (E = (b - I) / 20,
              z = Za(E),
              N = (f - G) / 20,
              Q = Za(N),
              (D = 0.5 < ab(z, Q)) && (r = 1),
              g = (D && 0.2 < z) * e(E, -1),
              u = (D && 0.2 < Q) * e(N, -1),
              2 < z && (b = I + 20 * (0 > E ? -1 : 1)),
              2 < Q && (f = G + 20 * (0 > N ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = q => {
      let z;
      document.activeElement === document.body && q.preventDefault();
      for (const N of q.changedTouches) {
        N.identifier === y
          ? (y = void 0, x || (z = 1), x = 0)
          : N.identifier === k
          ? (k = void 0, u = g = 0, r || (z = 1), r = 0)
          : z = 1;
      }
      q.target === hC && z && a && 0.02 < (q = wa - a) && 0.7 > q && (fa = 1);
    };
    la = () => {
      Ca = u + (P[4] ? 1 : 0) - (P[5] ? 1 : 0);
      Da = g + (P[2] ? 1 : 0) - (P[3] ? 1 : 0);
      let q = navigator.getGamepads()[0];
      q
        && (ia && (Xa += ca * bb(q.axes[3], 0.3) * 80, Ya += ca * bb(q.axes[2], 0.3) * 80),
          Ca += t(q, 12) - t(q, 13) - bb(q.axes[1], 0.2),
          Da += t(q, 14) - t(q, 15) - bb(q.axes[0], 0.2),
          t(q, 9) && p(!0),
          (q = t(q, 3) || t(q, 2) || t(q, 1) || t(q, 0)) && !B && (fa = 1),
          B = q);
    };
    document.onvisibilitychange = onblur = onresize = U;
    p(!0);
  },
  J = (a, b = new DOMMatrix(), f) => ma.o.push(...w(a, b, f)),
  K = (a, b = 1) => {
    const f = ma;
    La.push(ma = { m: new DOMMatrix(), G: b, o: [] });
    a();
    ma = f;
  },
  Fb = a => {
    const b = ma,
      f = d.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = wb(k.g, k.i, 4);
          k.h = wb(k.h, k.i, 1);
          ob(b.m).multiplySelf(a);
          fa && 3 > (lb(), gb(Ua - hb, Va - ib, Wa - jb)) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, f && 1 / 0 > Ha && (Ha = c + 1, h4.innerHTML = "* click *"), Ba = f, yb());
          !f && k.i && 0.8 < k.g && (k.i = 0,
            13 > xa
              ? 1 / 0 > Ha && (Ha = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : ya
                || (1 / 0 > Ha
                  && (Ha = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  ya = 1));
          h.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    d.push(k);
    J(F(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), H(0.4, 0.5, 0.5));
    J(F(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), H(0.4, 0.5, 0.5));
    J(F(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), H(0.5, 0.5, 0.4));
  },
  Gb = (a, ...b) => {
    let f, k, r, m = 0, v = 0, y = 1, x = 3, A = -1;
    const C = {
        i: 0,
        F() {
          if (!C.i) {
            var t;
            let q, z, N, Q, D = 1, I = 1 / 0;
            for (let G = 0; g > G; G++) {
              const E = b[G], V = gb(B - E[0], M - E[1]), W = V - E[2];
              Q ||= 0 > W;
              0 < W && I > W && (I = W, u = E);
              D = $a(D, V / E[2]);
            }
            Q
              || (t = B - u[0],
                q = M - u[1],
                z = gb(t, q),
                N = Math.atan2(-q, t),
                y && (v = (Math.random() - 0.5) * Math.PI / 2, x = e(x / (1 + Math.random()))),
                N += v,
                A = -Math.cos(N),
                m = Math.sin(N),
                0.1 < z && (z = $a(z, u[2]) / z, B = t * z + u[0], M = q * z + u[1]));
            y = Q;
            x = wb(x, 6 * (1 - D) + 3, D + 3);
            P = wb(P, B = wb(B, B + A, x), x);
            L = wb(L, M = wb(M, M + m, x), x);
            f = db(f, Math.atan2(P - k, L - r) / Ia - 180, vb(3));
            ob(U).multiplySelf(a).translateSelf(k = P, 0, r = L).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
            1.6 > (lb(), gb(Ua - hb, Va - ib, Wa - jb))
              && (C.i = 1,
                t = [
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
                ][xa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0 > Ha && (Ha = c + (xa && 12 > xa ? 5 : 7), h4.innerHTML = t),
                xb(),
                yb());
          }
          C.i
            && ob(La[2].m).translateSelf(
              p % 4 * 1.2 - 1.7 + Math.sin(c + p) / 7,
              -2,
              1.7 * (p / 4 | 0) - 5.5 + Za(p % 4 - 2) + Math.cos(c / 1.5 + p) / 6,
            );
        },
      },
      g = b.length;
    let u = b[0], [B, M] = u, P = B, L = M;
    const U = ma.m, p = Ka.length;
    Ka.push(C);
  },
  Jb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  Kb = a => {
    let b, f = 0, k = 0, r = 0, m = a.at(-1);
    for (b of a) {
      f += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), r += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = gb(f, k, r), f /= b, k /= b, r /= b, { x: f, y: k, z: r, w: f * m.x + k * m.y + r * m.z };
  },
  Lb = (a, b) => {
    var f, k, r, m = b.B;
    for (var v = 0; m.length > v; ++v) {
      if (-0.00008 > (f = Jb(a, m[v]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
        k = [];
        r = [];
        m = b.B;
        v = b.v;
        let y = m.at(-1), x = Jb(a, y) - a.w;
        for (const A of m) {
          f = Jb(a, A) - a.w,
            8e-5 > x && r.push(y),
            -0.00008 < x && k.push(y),
            (8e-5 < x && -0.00008 > f || -0.00008 > x && 8e-5 < f)
            && (x /= f - x,
              y = { x: y.x + (y.x - A.x) * x, y: y.y + (y.y - A.y) * x, z: y.z + (y.z - A.z) * x },
              k.push(y),
              r.push(y)),
            y = A,
            x = f;
        }
        return {
          l: 2 < k.length && { B: qb(k, m.u, m.C), v, A: b },
          j: 2 < r.length && { B: qb(r, m.u, m.C), v, A: b },
        };
      }
    }
    return { l: k, j: r };
  },
  Mb = (a, b, f = Kb(b.B)) => {
    let k, r;
    return a
      ? ({ l: k, j: r } = Lb(a, b), k || r || a.o.push(b), k && (a.l = Mb(a.l, k, f)), r && (a.j = Mb(a.j, r, f)))
      : a = { x: f.x, y: f.y, z: f.z, w: f.w, o: [b], l: 0, j: 0 },
      a;
  },
  Nb = (a, b, f) => {
    const k = [],
      r = (m, v) => {
        let { l: y, j: x } = Lb(m, v);
        y || x || (0 < f * Jb(m, b) ? y = v : x = v);
        y && (m.l ? r(m.l, y) : k.push(y));
        x && m.j && r(m.j, x);
      };
    for (const m of b.o) {
      r(a, m);
    }
    return k;
  },
  Ob = (a, b) => a && (b(a), Ob(a.l, b), Ob(a.j, b)),
  Pb = a => (Ob(a, b => {
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
  Qb = a => a.length ? a.reduce((b, f) => Mb(b, { B: f, v: 0, A: 0 }), 0) : a,
  Rb = (...a) =>
    a.reduce((b, f) => {
      const k = [];
      if (b = Qb(b), f) {
        f = Qb(f);
        Ob(b, r => r.o = Nb(f, r, 1));
        Ob(f, r => k.push([r, Nb(b, r, -1)]));
        for (let [r, m] of k) {
          for (const v of m) {
            Mb(b, v, r);
          }
        }
      }
      return b;
    }),
  O = (a, ...b) => {
    const f = m => {
        let v;
        return m.A && ((v = k.get(m.A)) ? (r.delete(v), m = f(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      r = new Map();
    return a = Pb(Rb(Pb(Qb(a)), ...b)),
      Ob(a, m => {
        for (const v of m.o) {
          r.set(f(v), v.v);
        }
      }),
      Array.from(r, ([{ B: m }, v]) => {
        const y = m.map(({ x, y: A, z: C }) => ({ x, y: A, z: C }));
        return qb(v ? y.reverse() : y, m.u, m.C);
      });
  },
  T = () => ob(l, La[++qa].m),
  Tb = () => {
    let a, b, f, k, r, m, v, y, x, A, C, g, u, B, M = 0, P = 0, L = 0, U = 1, p = 2, t = 15;
    const q = () => ob((p ? d[Ba] : La[C && 1 === La[C].G && C || 0]).m),
      z = D => {
        1 < p ? (ob(d[Ba].m).multiplySelf(d[Ba].H), lb(0, Ba || 0.9 < da ? 15 : 1, -2.4)) : (q(), lb(M, P, L));
        D && (r = (hb - Ua) / ca, m = (jb - Wa) / ca);
        Ua = hb;
        Va = ib;
        Wa = jb;
      },
      N = () => {
        var D = 0, I = 0, G = 0, E = 0, V = 0, W = 0, R = -1;
        for (var S = 0; 36 > S; ++S) {
          var na = 512 * S;
          for (var oa = 96; 416 > oa; oa += 4) {
            for (var pa = 0; 2 > pa; ++pa) {
              var X = Sb[na + oa + pa];
              const Pa = Sb[na + oa + pa + 2];
              X > E && (E = X);
              X + Pa && (0 > R || R === S) && (R = S, Pa === A ? ++D : I && I !== Pa || (I = Pa, ++G));
            }
          }
        }
        A = 0 > R ? 0 : G > 2 * D ? I : A;
        for (D = 36; 128 > D; ++D) {
          S =
            R =
            G =
            I =
              0;
          na = 512 * D;
          for (oa = 0; 128 > oa; ++oa) {
            pa = na + 4 * oa,
              X = Sb[pa],
              64 > oa ? X > I && (I = X) : X > G && (G = X),
              (X = Sb[2 + pa]) > R && (R = X),
              X = Sb[1 + pa],
              64 < oa ? X > I && (I = X) : X > G && (G = X),
              (X = Sb[3 + pa]) > S && (S = X);
          }
          (G -= I) * G > V * V && (V = G);
          (S -= R) * S > W * W && (W = S);
        }
        y = e(1 - 0.02 * ab(Za(V), Za(W)));
        V /= 255;
        E /= 255;
        W /= 255;
        q().invertSelf();
        lb(V, E, W, 0);
        M += hb;
        P += E;
        L += jb;
        z();
      },
      Q = (D, I, G, E) => eb(D, I, U || (e(Za(I - D) ** 0.5 - G) + 1 / 7) * vb(1.5 * E));
    ra = () => {
      z(A);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Sb);
      NO_INLINE(N)();
      !p && A === C || (C = A, q().invertSelf(), lb(Ua, Va, Wa), M = hb, P = ib, L = jb);
      p = p && (A ? 0 : 1);
      (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (p = 2);
      1 === A && (d[9].i = -15 > Ua && 0 > Wa ? 1 : 0);
      x = eb(wb(x, Va, 2), Va, p || 8 * Za(x - Va));
      g = Q(g, Ua, 0.5, 1);
      u = Q(u, x, 2, 1);
      B = Q(B, Wa, 0.5, 1);
      k = wb(k, sa * (27 < A && 32 > A), 2);
      ia
        ? (D = p + vb(18), Ea = eb(Ea, Ua, D), Ga = eb(Ga, Wa, D), Fa = eb(Fa, x + 1.5, D), Ya = cb(Ya))
        : (Ea = Q(Ea, g, 1, 2 + k),
          Ga = Q(Ga, B + -18 + 5 * k, 1, 2 + k),
          Fa = Q(Fa, ab(u + e((-60 - Wa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          D = $a(-6, -Za(B - Ga)),
          I = g - Ea,
          Ya = db(Ya, 90 - cb(Math.atan2(D, I) / Ia), U + vb(10)),
          Xa = db(Xa, 90 - Math.atan2(gb(D, I), Fa - u) / Ia, U + vb(10)));
      Xa = e(Xa, -87, 87);
      U = 0;
      var D = e(Ca, -1), I = e(Da, -1), G = bb(gb(D, I) ** 0.5, 0.1), E = Math.atan2(D, I);
      D = G * Za(D) * Math.sin(E);
      I = G * Za(I) * Math.cos(E);
      G && (a = 90 - E / Ia);
      b = db(b, a, vb(8));
      f = wb(f, G, 10);
      T().translateSelf(Ua, x, Wa).rotateSelf(0, b);
      for (E = 0; 2 > E; ++E) {
        var V = 9.1 * c - Math.PI * E;
        ob(La[37].m, T()).translateSelf(0, f * e(0.45 * Math.sin(V - Math.PI / 2))).rotateSelf(
          f * Math.sin(V) * 0.25 / Ia,
          0,
        );
      }
      t = A ? 5 : wb(t, p ? 13 : 19 - 2 * $a(0, Va + 10), 2.2);
      r = A || p ? 0 : wb(r, 0, 3);
      m = A || p ? 0 : wb(m, 0, 3);
      v = p ? 0 : wb(v, A ? 7 * e(2 * G) * y : 0, A ? 9 : 1);
      E = ia ? (180 + Ya) * Ia : 0;
      G = ca * (r + v * (I * Math.cos(E) - D * Math.sin(E)));
      V = -t * ca;
      D = ca * (m + v * (I * Math.sin(E) + D * Math.cos(E)));
      q().invertSelf();
      lb(G, V, D, 0);
      M += hb;
      P += V;
      L += jb;
      z();
    };
  },
  Ub = (a, b, f, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  ac = (a, b, f) => {
    ba
      ? 1100 < hC.width
        && (ob().rotateSelf(0, 40 * Math.sin(wa) - 80, -8),
          nb(h, Vb, 36),
          nb(h, Vb, 37),
          nb(h, Vb, 38),
          Z.uae(a, !1, Vb),
          Z.d97(4, La[39].D - La[37].s, 5123, 2 * La[37].s))
      : (Z.uae(a, !1, Vb),
        Z.d97(4, (b ? La[39].D : La[37].s) - 3, 5123, 6),
        Z.uae(a, !1, $b),
        Z.das(4, La[f].D - La[f].s, 5123, 2 * La[f].s, Ka.length),
        Z.das(4, La[42].D - La[42].s, 5123, 2 * La[42].s, d.length));
  },
  bc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  cc = (a, b) => {
    const f = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, bc(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
  },
  dc = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  ec = a => Math.sin(a * Math.PI * 2),
  fc = a => 0.5 > a % 1 ? 1 : -1,
  gc = a => a % 1 * 2 - 1,
  hc = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  oc = a => {
    let b = 0;
    const f = () => {
        let v = 0;
        const y = R => {
            let S, na, oa, pa = 0, X = 0;
            const Pa = [],
              Qa = new Int32Array(768 * R),
              ic = 2 ** (q - 9) / R,
              jc = Math.PI * 2 ** (I - 8) / R,
              Hb = E * R & -2;
            for (let Ab = 0; 11 >= Ab; ++Ab) {
              for (
                let Bb = 0, Wb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + Ab];
                32 > Bb;
                ++Bb
              ) {
                const Xb = (32 * Ab + Bb) * R;
                for (var Ra = 0; 4 > Ra; ++Ra) {
                  if (S = 0, Wb && (S = x[Wb - 1].charCodeAt(Bb + 32 * Ra) - 40, S += 0 < S ? 106 : 0), S) {
                    var ha;
                    if (!(ha = Pa[S])) {
                      ha = S;
                      let Y = void 0, za = void 0;
                      var Yb = S;
                      let kc = 0, lc = 0;
                      const mc = 2 > b ? gc : ec, nc = 2 > b ? 1 > b ? fc : hc : ec, Zb = new Int32Array(L + U + W);
                      for (let Sa = 0, Ib = 0; L + U + W > Sa; ++Sa, ++Ib) {
                        let Ta = 1;
                        L > Sa ? Ta = Sa / L : L + U > Sa || (Ta = (1 - (Ta = (Sa - L - U) / W)) * 3 ** (-t / 16 * Ta));
                        0 > Ib
                          || (Ib -= 4 * R,
                            za = 0.00396 * 2 ** ((Yb + C - 256) / 12),
                            Y = 0.00396 * 2 ** ((Yb + B - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Zb[Sa] = 80
                            * (mc(kc += za * Ta ** (g / 32)) * A + nc(lc += Y * Ta ** (M / 32)) * u
                              + (P ? (2 * Math.random() - 1) * P : 0))
                            * Ta | 0;
                      }
                      ha = Pa[ha] = Zb;
                    }
                    for (let Y = 0, za = 2 * Xb; ha.length > Y; ++Y, za += 2) {
                      Qa[za] += ha[Y];
                    }
                  }
                }
                for (let Y, za = 0; R > za; ++za) {
                  Ra = 0;
                  ha = 2 * (Xb + za);
                  var Aa = (((Y = Qa[ha]) || oa)
                    && (na = 0.00308 * z,
                      1 !== b && 4 !== b || (na *= Math.sin(ic * ha * Math.PI * 2) * V / 512 + 0.5),
                      na = 1.5 * Math.sin(na),
                      pa += na * X,
                      Aa = (1 - N / 255) * (Y - X) - pa,
                      X += na * Aa,
                      Y = 4 === b ? X : 3 === b ? Aa : pa,
                      b || (Y = 1 > (Y *= 22e-5) ? -1 < Y ? Math.sin(Y / 4 * Math.PI * 2) : -1 : 1, Y /= 22e-5),
                      Y *= Q / 32,
                      oa = 1e-5 < Y * Y,
                      Aa = Math.sin(jc * ha) * D / 512 + 0.5,
                      Ra = Y * (1 - Aa),
                      Y *= Aa),
                    ha < Hb || (Ra += Qa[1 + ha - Hb] * G
                      / 255,
                      Y += Qa[ha - Hb] * G / 255),
                    v + ha >> 1);
                  r[Aa] += (Qa[ha] = Ra) / 65536;
                  m[Aa] += (Qa[++ha] = Y) / 65536;
                }
              }
            }
            v += 768 * R;
          },
          x = Na[b],
          [A, C, g, u, B, M, P, L, U, p, t, q, z, N, Q, D, I, G, E, V] = Oa[b],
          W = 4 * p ** 2;
        y(5513);
        y(4562);
        y(3891);
        dc(5 > ++b ? f : a);
      },
      k = Db.createBuffer(2, 5362944, 44100),
      r = k.getChannelData(0),
      m = k.getChannelData(1);
    Cb.buffer = k;
    Cb.loop = !0;
    dc(f);
  },
  Db = new AudioContext(),
  h = new DOMMatrix(),
  l = new DOMMatrix(),
  mb = new Float32Array(16),
  Vb = new Float32Array(624),
  $b = new Float32Array(624),
  Sb = new Uint8Array(65536),
  Cb = Db.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
dc(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const r = [new Float32Array(16), new Float32Array(16)],
          m = p => {
            requestAnimationFrame(m);
            var t = (p - (aa || p)) / 1e3;
            if (wa += t, c += ca = ba ? 0 : $a(0.066, t), aa = p, 0 < ca) {
              la();
              Ha && c > Ha && (Ha = 0, h4.innerHTML = "");
              da = wb(da, ya ? wb(da, -9, 1.5) : e(c / 3), 1);
              ea = wb(ea, d[9].h, 0.2 + 0.3 * Za(2 * d[9].h - 1));
              qa = 1;
              sa = fb(d[12].g, d[13].g);
              va = eb(wb(va, 0, 1), cb(va + 60 * ca), d[5].g - d[6].h);
              ta = eb(wb(ta, 0, 5), cb(ta + 56 * ca), sa);
              ua = eb(wb(ua, 0, 4), cb(ua + 48 * ca), sa);
              Ub(T(), -12, 4.2, 40 * da - 66);
              T().translateSelf(0, 0, -15).scaleSelf(1, e(1.22 - d[1].g), 1);
              T().translateSelf(0, 0, 15).scaleSelf(1, e(1.22 - d[2].g), 1);
              T().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, e(1.1 - d[6].g), 1);
              T().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
              T().translateSelf(
                0,
                0.01 > d[3].g ? -500 : (1 - d[2].g) * d[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (d[3].g - 1),
                0,
              );
              p = $a(1 - d[4].h, d[2].h);
              T().translateSelf(p * Math.sin(c / 1.5 + 2) * 12);
              T().translateSelf(p * Math.sin(0.7 * c + 2) * 12);
              T().translateSelf(p * Math.sin(c + 3) * 8.2);
              T().translateSelf(9.8 * (1 - p));
              p = e(1 - 5 * p) * fb(d[4].g, d[5].g);
              T().translateSelf(0, p * Math.sin(1.35 * c) * 4);
              T().translateSelf(0, 0, p * Math.sin(0.9 * c) * 8);
              T().translateSelf(0, -6.5 * d[4].h);
              T().translateSelf(-75, (1 - d[5].h) * (1 - d[6].g) * 3, 55).rotateSelf(180 * (1 - d[5].h) + va, 0);
              p = fb(d[7].h, d[6].h);
              T().translateSelf(0, 5 * p * Math.sin(c) + 3.5 * (1 - ab(d[6].g, d[7].g)));
              T().translateSelf(0, 6 * p * Math.sin(c + 3), 6 * p * Math.sin(0.6 * c + 1));
              T().translateSelf(0, -7.3 * d[7].h);
              Ub(T(), -123, 1.4, 55 + -65 * ea);
              p = fb(d[10].g, d[11].g);
              T().translateSelf(0, -2, p * Za(Math.sin(1.1 * c)) * -8.5 + 10);
              T().translateSelf(0, -2, p * Za(Math.sin(2.1 * c)) * -8.5 + 10);
              T().translateSelf(0, -2, 10 - 8.5 * ab(p * Za(Math.sin(1.5 * c)), (1 - d[10].g) * (1 - p)));
              p = fb(d[8].h, d[12].h);
              for (t = 0; 4 > t; t++) {
                T().translateSelf(
                  (2 < t ? 2 * (1 - p) + p : 0) - 100,
                  p * Math.sin(1.3 * c + 1.7 * t) * (3 + t / 3) + 0.7,
                  115 - 7 * (1 - d[8].h) * (1 - d[12].h) * (1 & t ? -1 : 1)
                    + ab(0.05, p) * Math.cos(1.3 * c + 7 * t) * (4 - 2 * (1 - t / 3)),
                );
              }
              T().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - d[8].g) - p * Math.sin(0.8 * c) - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * p + 3), 0);
              T().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ta);
              T().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ua);
              T().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ua);
              T().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ua);
              p = fb(d[13].h, d[14].h);
              for (t = 0; 3 > t; ++t) {
                T().translateSelf(0, p * Math.sin(1.5 * c + 1.5 * t) * 4 + (t ? 0 : (1 - d[13].h) * (1 - d[14].h)));
              }
              T().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              t = fb(fb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2);
              T().translateSelf(0, 16 * t, 95 + 8.5 * e(2 * t - 1));
              for (p = 0; 13 > p; ++p) {
                Ka[p].F(), nb(h, $b, p);
              }
              for (p = 0; 16 > p; ++p) {
                d[p].F(), nb(h, $b, p + 13), $b[223 + 16 * p] = 1 - d[p].g;
              }
              ra();
              for (p = 0; qa >= p; ++p) {
                nb(La[p].m, Vb, p - 1);
              }
              u();
              Z.b6o(36160, U);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              Z.uae(u("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa)));
              ac(u("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(u("b"), !1, nb(ob().translateSelf(-Ua, -Va, -Wa - 0.3)));
              ac(u("c"), 0, 40);
              fa = 0;
            }
            p = Ea;
            t = Fa;
            let q = Ga;
            ba
              ? (ob(ja).invertSelf(),
                lb(3.6, 3.5),
                p = hb,
                t = ib,
                q = 5,
                ob(l, y).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -t, -q).rotateSelf(0, 99))
              : ob(l, y).rotateSelf(-Xa, -Ya).invertSelf().translateSelf(-p, -t, -q);
            C();
            Z.b6o(36160, P);
            Z.v5y(0, 0, 2048, 2048);
            M[0](54.7 * 1.1);
            M[1](126 * 1.1);
            B();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(B("a"), !1, nb(ja));
            Z.uae(B("b"), !1, nb(y));
            Z.uae(B("i"), !1, r[0]);
            Z.uae(B("j"), !1, r[1]);
            Z.ubu(B("k"), p, t, q);
            ac(B("c"), !ia, 41);
            g();
            Z.ubu(g("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
            Z.ubu(g("k"), p, t, q);
            Z.uae(g("b"), !1, nb(ob(y).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, U);
            Z.f1s();
          },
          v = new DOMMatrix(),
          y = new DOMMatrix(),
          x = f,
          A = pb(8, () => ({}));
        var k = bc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const C = cc(
            bc(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          g = cc(
            bc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          u = cc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          B = cc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          M = pb(2, p => {
            const t = Z.c25();
            return Z.a4v(33984 + p),
              Z.b9j(3553, t),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              q => {
                let z = 0, N = 0, Q = 0, D = 1 / 0, I = 1 / 0, G = 1 / 0, E = -1 / 0, V = -1 / 0, W = -1 / 0;
                Z.fas(36160, 36096, 3553, t, 0);
                Z.c4s(256);
                ob().scale3dSelf(q).multiplySelf(ob(ka[p], v).multiplySelf(y).invertSelf());
                for (let R = 0; 8 > R; ++R) {
                  const S = A[R];
                  lb(4 & R ? 1 : -1, 2 & R ? 1 : -1, 1 & R ? 1 : -1);
                  z -= S.x = (0 | hb) / (q * kb);
                  N -= S.y = (0 | ib) / (q * kb);
                  Q -= S.z = (0 | jb) / (q * kb);
                }
                ob().rotateSelf(298, 139).translateSelf(z / 8, N / 8, Q / 8);
                for (q = 0; 8 > q; ++q) {
                  const { x: R, y: S, z: na } = A[q];
                  lb(R, S, na);
                  D = $a(D, hb);
                  E = ab(E, hb);
                  I = $a(I, ib);
                  V = ab(V, ib);
                  G = $a(G, jb);
                  W = ab(W, jb);
                }
                q = 10 + p;
                G *= 0 > G ? q : 1 / q;
                W *= 0 < W ? q : 1 / q;
                Z.uae(
                  C("b"),
                  !1,
                  nb(
                    ob(l, v).scaleSelf(2 / (E - D), 2 / (V - I), 2 / (G - W)).translateSelf(
                      (E + D) / -2,
                      (V + I) / -2,
                      (G + W) / 2,
                    ).multiplySelf(h),
                    r[p],
                  ),
                );
                ac(C("c"), !ia, 41);
              };
          }),
          P = Z.c5w();
        k = Z.c25();
        const L = Z.c3z(), U = Z.c5w();
        u();
        Z.uae(u("a"), !1, nb(zb(1e-4, 2, 1.4, 0.4)));
        B();
        Z.ubh(B("q"), 2);
        Z.ubh(B("h"), 1);
        Z.ubh(B("g"), 0);
        g();
        Z.ubh(g("q"), 2);
        Z.b6o(36160, P);
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
        NO_INLINE(Eb)();
        NO_INLINE(Tb)();
        requestAnimationFrame(m);
      }
    },
    f = new Image();
  f.onload = f.onerror = b;
  f.src = Ja;
  NO_INLINE(oc)(() => {
    dc(() => {
      let m = 0;
      const v = [],
        y = [],
        x = [],
        A = [],
        C = new Int32Array(8),
        g = new Map(),
        u = new Int32Array(C.buffer, 0, 5),
        B = new Float32Array(C.buffer);
      La.map((M, P) => {
        let L;
        const U = p => {
          let { x: t, y: q, z } = L[p], N = (B[0] = t, B[1] = q, B[2] = z, p = "" + (L.C ? u : C), g.get(p));
          return void 0 !== N
            ? (t = 3 * N, A[t] = (A[t++] + C[5]) / 2, A[t] = (A[t++] + C[6]) / 2, A[t] = (A[t] + C[7]) / 2)
            : (g.set(p, N = g.size), y.push(t, q, z, B[3]), x.push(C[4]), A.push(C[5], C[6], C[7])),
            N;
        };
        for (L of (B[3] = 41 < P ? -14 : M.G && P, M.o)) {
          const { x: p, y: t, z: q } = Kb(L);
          C[4] = 0 | L.u;
          C[5] = 32767 * p;
          C[6] = 32767 * t;
          C[7] = 32767 * q;
          for (let z = 2, N = U(0), Q = U(1); L.length > z; ++z) {
            v.push(N, Q, Q = U(z));
          }
        }
        M.o = null;
        M.s = m;
        M.D = m = v.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(y), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(A), 35044);
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
        const [M, P, L, U, p] = JSON.parse(localStorage.DanteSP22);
        d.map((t, q) => t.g = t.h = t.i = q ? 0 | M[q] : 0);
        Ka.map((t, q) => t.i = 0 | P[q]);
        Ba = L;
        ea = p;
        c = U;
        ca = 0;
      } catch {
      }
      xb();
      da = e(Ba);
      dc(b);
    });
    const k = m => n(Math.sin(m / 10 * Math.PI), m / 10).rotateSelf(+m).scaleSelf(1.0001 - m / 10, 0, 1 - m / 10),
      r = pb(10, m => tb(rb(sb(18), k(m)).reverse(), rb(sb(18), k(m + 1)), 1)).flat();
    K(() => J([Ma.slice(1)], n(-2).scale3d(3).rotate(90, 0)), 0);
    K(() => {
      const m = g =>
          K(() => {
            Ma.map(({ x: u, z: B }) => {
              J(F(11, 1), n(4 * u, 4, g + 4 * B).scale(0.8, 3, 0.8), H(0.5, 0.3, 0.7, 0.6));
              J(F(), n(4 * u, 7, g + 4 * B).scale(1, 0.3), H(0.5, 0.5, 0.5, 0.3));
            });
            J(O(
              w(F(), n(0, 0, g).scale(5, 1, 5), H(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(u => w(F(), n(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), H(0.8, 0.8, 0.8, 0.3))),
            ));
            J(F(), n(0, -3, g).scale(8, 2, 8), H(0.4, 0.4, 0.4, 0.3));
          }),
        v = g =>
          O(
            w(F(), n(0, -g / 2).scale(6, g - 1, 2.2)),
            w(F(), n(0, -g / 2 - 6).scale(4, g - 3, 4)),
            w(F(32, 1), n(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        y = () => K(() => pb(7, g => J(w(F(6, 1), n(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), H(0.3, 0.3, 0.38))))),
        x = O(
          w(F(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), H(0.7, 0.4, 0.25, 0.7)),
          w(F(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), H(0.7, 0.4, 0.25, 0.2)),
          w(F(), n(4, -1.2).scale3d(2), H(0.7, 0.4, 0.25, 0.3)),
        ),
        A = (K(() => {
          J(x);
          Fb(n(0, -3, 4));
        }),
          Fb(n(-5.4, 1.5, -19).rotate(0, -90)),
          Gb(n(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Gb(n(0, 2.8), [5, 10, 3], [-5, 10, 3], ...sb(18).map(({ x: g, z: u }) => [7 * g, 10 * u, 4.5 - 2 * Za(g)])),
          Ma.map(({ x: g, z: u }) => J(F(6), n(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), H(0.6, 0.3, 0.3, 0.4))),
          [-15, 15].map((g, u) => {
            y();
            y();
            J(F(), n(0, 6.3, g).scale(4, 0.3, 1), H(0.3, 0.3, 0.3, 0.4));
            J(F(), n(0, 1, g).scale(3, 0.2, 0.35), H(0.5, 0.5, 0.5, 0.3));
            J(F(), n(0, 0, u ? 22 : -23).scale(3, 1, 8), H(0.9, 0.9, 0.9, 0.2));
            pb(5, B =>
              J(
                r,
                n(18.5 * (u - 0.5), 0, 4.8 * B - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2),
                H(1, 1, 0.8, 0.2),
              ));
          }),
          J(F(), n(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), H(0.8, 0.8, 0.8, 0.2)),
          J(F(), n(3, 1.5, -20).scale(0.5, 2, 5), H(0.7, 0.7, 0.7, 0.2)),
          J(F(), n(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), H(0.75, 0.75, 0.75, 0.2)),
          J(F(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), H(0.6, 0.3, 0.3, 0.4)),
          J(F(), l.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), H(0.8, 0.2, 0.2, 0.5)),
          J(O(
            Rb(
              w(F(6, 0, 0, 0.3), n(8, -3, -4).scale(13, 1, 13), H(0.7, 0.7, 0.7, 0.2)),
              w(F(6), n(0, -8).scale(9, 8, 8), H(0.4, 0.2, 0.5, 0.5)),
              w(F(6, 0, 0, 0.3), n(0, -0.92).scale(13, 2, 13), H(0.8, 0.8, 0.8, 0.2)),
            ),
            w(F(5), l.scale(5, 30, 5), H(0.4, 0.2, 0.6, 0.5)),
            w(F(5, 0, 1.5), n(0, 1).scale(4.5, 0.3, 4.5), H(0.7, 0.5, 0.9, 0.2)),
            w(F(), l.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), H(0.5, 0.5, 0.5, 0.5)),
            w(F(6), n(15, -1.5, 4).scale(3.5, 1, 3.5), H(0.5, 0.5, 0.5, 0.5)),
          )),
          K(() => {
            J(F(5), n(0, -0.2).scale(5, 1, 5), H(0.6, 0.65, 0.7, 0.3));
            Fb(n(0, 1.2));
          }),
          Fb(n(15, -2, 4)),
          K(() => {
            J(
              O(
                Rb(
                  w(F(), l.scale(1.5, 1, 5), H(0.9, 0.9, 0.9, 0.2)),
                  w(F(6), l.scale(4, 1, 5), H(0.9, 0.9, 0.9, 0.2)),
                  w(F(), n(0, -2).scale(2, 3.2, 1.9), H(0.3, 0.8, 0.5, 0.5)),
                  w(F(16, 1, 0, 4), l.scale(1, 1, 1.5).rotate(0, 90), H(0.9, 0.9, 0.9, 0.2)),
                ),
                w(F(), l.scale(1.3, 10, 1.3), H(0.2, 0.7, 0.4, 0.6)),
              ),
              n(0, 0, 45),
            );
            Gb(n(0, 2.8, 45), [0, 0, 4.5]);
          }),
          m(35),
          m(55),
          J(F(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), H(0.9, 0.9, 0.9, 0.2)),
          K(() => {
            J(F(3), n(-23, -1.7, 55.8).scale(5, 0.7, 8.3), H(0.3, 0.6, 0.6, 0.2));
            J(F(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), H(0.8, 0.8, 0.8, 0.2));
            J(F(), n(-23, -3, 55).scale(5.2, 1.7, 3), H(0.5, 0.5, 0.5, 0.3));
            J(F(), n(-23, -2.2, 62).scale(3, 1, 4), H(0.5, 0.5, 0.5, 0.3));
            Fb(n(-23, -0.5, 66.5));
          }),
          K(() => {
            J(F(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), H(0.7, 0.7, 0.7, 0.2));
            J(O(w(F(), l.scale(3, 1.4, 2.7)), w(F(), l.scale(1.2, 8, 1.2))), n(-33, -3, 55), H(0.7, 0.7, 0.7, 0.2));
          }),
          K(() => {
            J(O(
              w(F(), n(-27, -3, 55).scale(3, 1.4, 2.7), H(0.9, 0.9, 0.9, 0.2)),
              w(F(), n(-27, -3, 55).scale(1, 3), H(0.9, 0.9, 0.9, 0.2)),
            ));
            J(F(), n(-39, -3, 55).scale(3, 1.4, 2.7), H(0.9, 0.9, 0.9, 0.2));
          }),
          K(() => {
            J(F(6), n(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), H(0.7, 0.7, 0.7, 0.4));
          }),
          Fb(n(-55, -1.1, 46).rotate(0, 90)),
          J(F(6), n(-61.3, -2.4, 49).scale(3, 1, 5), H(0.4, 0.6, 0.6, 0.3)),
          J(F(7), n(-57, -2.6, 46).scale(4, 1, 4), H(0.8, 0.8, 0.8, 0.3)),
          [
            ...w(F(), n(0, -3).scale(11, 1.4, 3), H(0.9, 0.9, 0.9, 0.2)),
            ...w(F(), n(0, -2.2).scale(7.7, 0.5, 4), H(0.5, 0.5, 0.5, 0.2)),
            ...O(
              w(F(6), l.rotate(90).scale(6, 8, 6), H(0.3, 0.6, 0.6, 0.3)),
              w(F(4, 0, 0.01), n(0, 6).scale(12, 2, 0.75).rotate(0, 45), H(0.3, 0.6, 0.6, 0.3)),
              w(F(6), l.rotate(90).scale(5, 12, 5), H(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(g => w(F(5), n(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), H(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        C = (J(A, n(-53, 0, 55)),
          K(() => J(A), 2),
          J(F(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), H(0.7, 0.7, 0.7, 0.2)),
          J(F(3, 0, -0.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), H(0.8, 0.8, 0.8, 0.2)),
          J(O(
            Rb(
              w(F(), n(-100, -2.4, 55).scale(8, 0.9, 8), H(0.8, 0.8, 0.8, 0.2)),
              w(F(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), H(0.8, 0.8, 0.8, 0.2)),
              w(F(), n(-100, -2.6, 70).scale(3, 1.1, 7), H(0.8, 0.8, 0.8, 0.2)),
              w(F(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), H(0.8, 0.8, 0.8, 0.2)),
              w(F(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), H(0.6, 0.6, 0.6, 0.3)),
              w(F(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), H(0.8, 0.8, 0.8, 0.2)),
              w(F(), n(-100, 0.42, 92).scale(3, 1.1, 4.1), H(0.8, 0.8, 0.8, 0.2)),
            ),
            w(F(8), n(-100, -1, 55).scale(7, 0.9, 7), H(0.3, 0.3, 0.3, 0.4)),
            w(F(8), n(-100, -2, 55).scale(4, 0.3, 4), H(0.4, 0.4, 0.4, 0.5)),
            w(F(8, 0, -3.1), n(-100, -3, 55).scale(0.4, 1, 0.4), H(0.4, 0.4, 0.4, 0.5)),
          )),
          Gb(n(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Gb(n(-89, 0.2, 80), [0, 0, 6]),
          J(O(
            w(F(), n(-100, 1, 63).scale(7.5, 4), H(0.5, 0.5, 0.5, 0.4)),
            w(F(), n(-100, 0, 70).scale(2, 2, 10), H(0.5, 0.5, 0.5, 0.4)),
            w(F(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), H(0.5, 0.5, 0.5, 0.4)),
          )),
          Ma.map(({ x: g, z: u }) => {
            J(F(6), n(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), H(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(B => J(F(6), n(7 * g - 100, B, 7 * u + 55).scale(1.3, 0.5, 1.3), H(0.4, 0.2, 0.2, 0.8)));
          }),
          pb(7, g => {
            J(
              F((23 * g + 1) % 5 + 5, 0, 0.5),
              n(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3),
              H(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
            );
          }),
          J(F(), n(-87, -9.5, 24).scale(7, 1, 3), H(0.4, 0.5, 0.6, 0.4)),
          J(F(4), n(-86, -9.2, 27).scale(5, 1, 5), H(0.5, 0.6, 0.7, 0.3)),
          J(F(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), H(0.3, 0.3, 0.4, 0.1)),
          Fb(n(-86, -7.5, 31)),
          K(() => {
            [0, 12, 24].map(g =>
              J(F(), n(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), H(0.2, 0.5, 0.6, 0.2))
            );
          }),
          K(() => {
            [6, 18].map(g =>
              J(F(), n(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), H(0.1, 0.4, 0.5, 0.2))
            );
          }),
          J(
            O(
              Rb(
                w(F(5), n(0, 0, -7).scale(2, 1.2, 2), H(0.2, 0.4, 0.7, 0.3)),
                w(F(5), l.scale(9, 1.2, 9), H(0, 0.2, 0.3, 0.5)),
                w(F(), l.scale(11, 1, 13), H(0.3, 0.4, 0.6, 0.3)),
              ),
              w(F(5), l.scale(5.4, 5, 5.4), H(0, 0.2, 0.3, 0.5)),
            ),
            n(-38.9, -11.3, 17),
          ),
          Fb(n(-38.9, -9.6, 10)),
          K(() => {
            J(
              O(
                Rb(
                  w(F(5), n(0, 2).scale(5, 7, 5).skewY(8), H(0.2, 0.4, 0.5, 0.5)),
                  w(F(5), n(0, 6).scale(1.1, 7, 1.1).skewY(-8), H(0.25, 0.35, 0.5, 0.5)),
                  w(F(5), n(0, 9).scale(0.6, 7, 0.6).skewY(8), H(0.35, 0.3, 0.5, 0.5)),
                ),
                w(F(5), l.scale(4, 8, 4), H(0.2, 0.4, 0.5, 0.5)),
                w(F(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), H(0.2, 0.4, 0.5, 0.5)),
              ),
              n(-38.9, -11.3, 17),
            );
            Gb(n(-39.1, -0.6, 17).rotate(11), ...sb(15).map(({ x: g, z: u }) => [3 * g, 3 * u, 1.2]));
          }),
          Ma.map(({ x: g, z: u }) => {
            J(F(14, 1), n(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), H(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(B =>
              J(F(17, 1), n(9 * g - 38.9, B - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), H(0.6, 0.6, 0.6, 0.3))
            );
          }),
          J(
            O(
              Rb(
                w(F(6), n(0, 0, -36).scale(15, 1.2, 15), H(0.7, 0.7, 0.7, 0.3)),
                w(F(), n(0, 0, -18).scale(4, 1.2, 6), H(0.45, 0.4, 0.6, 0.3)),
              ),
              ...pb(6, g =>
                pb(6, u =>
                  w(
                    F(6),
                    n(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2),
                    H(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            n(-38.9, -11.3, 17),
          ),
          Gb(n(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          J(F(5), n(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), H(0.8, 0.1, 0.25, 0.4)),
          Fb(n(-84, -0.5, 85).rotate(0, 45)),
          K(() => {
            J(x);
            Fb(n(0, -3, -4).rotate(0, 180));
          }),
          O(
            w(F(), n(0, -0.5, 1).scale(1.15, 1.2, 6.5), H(0.25, 0.25, 0.35, 0.3)),
            O(
              w(F(3), n(0, 0, -5.5).scale(3, 2), H(0.6, 0.3, 0.4, 0.3)),
              w(F(), n(0, 0, -3.65).scale(2.5, 3), H(0.6, 0.3, 0.4, 0.3)),
            ),
            ...[-1, 1].map(g => w(F(), n(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), H(0.7, 0.2, 0, 0.3))),
          ));
      K(() =>
        pb(2, g =>
          J(C, n(9 * g - 110 + (1 & g), 1.9, -12)))
      );
      K(() =>
        pb(2, g =>
          J(C, n(9 * (g + 2) - 110 + (1 & g), 1.9, -12)))
      );
      K(() =>
        pb(3, g =>
          J(C, n(9 * g - 106, 1.9, -12)))
      );
      J(
        O(
          Rb(w(F(), n(26.5, -1.6, 10).scale(20, 2.08, 3)), w(F(), n(26.5, -0.5, 10).scale(19, 2, 0.5))),
          ...pb(4, g => w(F(), n(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
          ...pb(3, g => w(F(), n(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        n(-123, 0.2, -12),
        H(0.5, 0.5, 0.6, 0.2),
      );
      Fb(n(-116, -1.4, -18).rotate(0, 180));
      J(F(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), H(0.8, 0.8, 0.8, 0.2));
      J(F(6), n(-116, -2.6, -16.5).scale(3.2, 0.8, 3), H(0.6, 0.5, 0.7, 0.2));
      J(F(), n(-115.5, -17, -12).scale(0.5, 15, 2.2), H(0.6, 0.6, 0.6, 0.3));
      J(F(8), n(-114, -17, -2).scale(2, 15, 2), H(0.6, 0.6, 0.6, 0.3));
      J(F(8), n(-79, -17, -2).scale(2, 15, 2), H(1, 1, 1, 0.3));
      J(F(), n(-77, -17, -50.5).scale(2.2, 15, 0.5), H(0.6, 0.6, 0.6, 0.3));
      pb(3, g => {
        J(v(16), n(12 * g - 109, -9, -12), H(0.6, 0.6, 0.6, 0.3));
        J(v(16), n(-77, -9, -12 * g - 20).rotate(0, 90), H(0.6, 0.6, 0.6, 0.3));
      });
      J(O(
        w(F(12), n(-77, -14.5, -12).scale(4, 17.5, 4), H(0.7, 0.7, 0.7, 0.2)),
        w(F(), n(-79, 0.1, -12).scale(3.5, 2, 1.3), H(0.4, 0.5, 0.6, 0.2)),
        w(F(), n(-77, 0.1, -14).scale(1.5, 2, 2), H(0.4, 0.5, 0.6, 0.2)),
        w(F(12), n(-77, 3.1, -12).scale(3, 5, 3), H(0.4, 0.5, 0.6, 0.2)),
      ));
      J(F(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), H(0.6, 0.6, 0.6, 0.3));
      J(F(9), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), H(0.5, 0.5, 0.5, 0.3));
      J(O(
        w(F(), n(-93, -5.8, -40).scale(9, 1, 5), H(0.8, 0.8, 0.8, 0.1)),
        w(F(9), n(-98, -5.8, -40).scale(3, 8, 3), H(0.7, 0.7, 0.7, 0.2)),
      ));
      Fb(n(-98, -4.4, -40).rotate(0, 90));
      Gb(n(-115, 0.2, -12), [0, 0, 3.5]);
      Gb(n(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      J(O(
        Rb(
          w(F(6, 0, 0, 0.6), n(-100, 0.7, 105.5).scale(8, 1, 11), H(0.7, 0.7, 0.7, 0.2)),
          w(F(), n(-101.5, 0.7, 93.5).scale(10.5, 1, 2), H(0.7, 0.7, 0.7, 0.2)),
        ),
        w(F(5), n(-100, 0.7, 113).scale(4, 3, 4), H(0.7, 0.7, 0.7, 0.2)),
      ));
      pb(
        4,
        g =>
          K(() =>
            J(
              F(6),
              n(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              H(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
            )
          ),
      );
      K(() => {
        J(O(w(F(10), l.scale(6, 2, 6), H(0.1, 0.6, 0.5, 0.3)), w(F(10), l.scale(3.3, 6, 3.3), H(0.1, 0.6, 0.5, 0.5))));
        J(F(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), H(0.4, 0.4, 0.4, 0.3));
        J(F(10), n(-7.5).rotate(0, 90).scale(2, 2.5, 2), H(0.3, 0.8, 0.7, 0.3));
        J(F(5), n(-7.5).rotate(0, 90).scale(1, 3), H(0.5, 0.5, 0.5, 0.5));
        Fb(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g =>
          J(r, l.rotate(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), H(1, 1, 0.8, 0.2))
        );
        Gb(n(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(g => {
        [7.2, 1.5].map(u => J(F(15, 1), n(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), H(0.5, 0.24, 0.2, 0.4)));
        J(r, n(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), H(1, 1, 0.8));
        J(F(12, 1), n(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), H(0.6, 0.24, 0.2, 0.5));
        J(
          O(
            w(F(), n(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), H(0.5, 0.5, 0.5, 0.4)),
            w(F(), l.scale(3, 3, 10), H(0.6, 0.24, 0.2, 0.5)),
            w(F(28, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), H(0.6, 0.24, 0.2, 0.5)),
            w(F(5), n(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), H(0.6, 0.24, 0.2, 0.5)),
            w(F(5), n(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), H(0.6, 0.24, 0.2, 0.5)),
          ),
          n(g - 100, 0.7, 97),
        );
      });
      J(O(
        w(F(), n(-82.07, 0.8, 106).scale(11, 0.9, 2.2), H(0.7, 0.7, 0.7, 0.1)),
        w(F(45, 1), n(-81, 0.7, 106).scale3d(7.7), H(0.7, 0.7, 0.7, 0.1)),
      ));
      K(() => {
        J(O(
          w(F(45, 1), l.scale(7.5, 1, 7.5), H(0.45, 0.45, 0.45, 0.2)),
          w(F(), n(0, 0, -5.5).scale(1.5, 3, 2.7), H(0.45, 0.45, 0.45, 0.2)),
        ));
        J(F(8), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), H(0.7, 0.7, 0.7, 0.1));
        J(F(5), n(0, 2).scale(1, 2), H(0.3, 0.3, 0.3, 0.2));
        Gb(n(0, 3), ...sb(14).map(({ x: g, z: u }) => [5.6 * g, 5.6 * u, 2]));
      });
      K(() => {
        [-1, 1].map(g =>
          J(r, l.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), H(1, 1, 0.8))
        );
        J(O(w(F(28, 1), n(0, 2).scale(7.5, 1, 7.5), H(0.35, 0, 0, 0.3)), w(F(), l.scale(9, 5, 2), H(0.3, 0, 0, 0.3))));
        J(w(F(28, 1), l.scale(7.5, 1, 7.5), H(0.45, 0.45, 0.45, 0.2)));
        J(w(F(5), n(0, 1).scale(1, 0.2), H(0.3, 0.3, 0.3, 0.2)));
      });
      K(() => {
        J(O(
          w(F(28, 1), n(0, 2).scale(7.5, 1, 7.5), H(0.35, 0, 0, 0.3)),
          w(F(), n(7).scale(9, 5, 2), H(0.3, 0, 0, 0.3)),
          w(F(), n(0, 0, 7).scale(2, 5, 9), H(0.3, 0, 0, 0.3)),
        ));
        J(w(F(28, 1), l.scale(7.5, 1, 7.5), H(0.45, 0.45, 0.45, 0.2)));
        J(w(F(5), n(0, 1).scale(1, 0.2), H(0.3, 0.3, 0.3, 0.2)));
      });
      K(() => {
        J(O(
          w(F(28, 1), n(0, 2).scale(7.5, 1, 7.5), H(0.35, 0, 0, 0.3)),
          w(F(), n(7).scale(9, 5, 2), H(0.3, 0, 0, 0.3)),
          w(F(), n(0, 0, -7).scale(2, 5, 9), H(0.3, 0, 0, 0.3)),
        ));
        J(w(F(28, 1), l.scale(7.5, 1, 7.5), H(0.45, 0.45, 0.45, 0.2)));
        J(w(F(5), n(0, 1).scale(1, 0.2), H(0.3, 0.3, 0.3, 0.2)));
      });
      J(F(), n(-58, 1, 106).scale(2, 0.65, 2), H(0.7, 0.7, 0.7, 0.2));
      J(F(), n(-50.7, 1, 99).scale(2, 0.65, 1), H(0.7, 0.7, 0.7, 0.2));
      J(F(), n(-42, 0.4, 91).scale(5, 1, 2.5), H(0.7, 0.7, 0.7, 0.3));
      J(F(), n(-34.2, 0.4, 91).scale(3, 1, 3), H(0.7, 0.7, 0.7, 0.3));
      Fb(n(-34, 2.7, 96).rotate(-12, 0));
      J(F(5), n(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), H(0.2, 0.5, 0.5, 0.6));
      [H(0.1, 0.55, 0.45, 0.2), H(0.2, 0.5, 0.5, 0.3), H(0.3, 0.45, 0.55, 0.4)].map((g, u) =>
        K(() => {
          J(F(), n(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
          2 === u && J(F(), n(-29.1, 0.4, 91).scale(2.1, 1, 3), H(0.7, 0.7, 0.7, 0.3));
          1 === u && J(F(), n(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), H(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(g => J(r, n(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), H(1, 1, 0.8)));
      pb(
        3,
        g =>
          J(
            v(24.7 - 0.7 * (1 & g)),
            n(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)),
            1 & g ? H(0.5, 0.5, 0.5, 0.3) : H(0.35, 0.35, 0.35, 0.5),
          ),
      );
      J(O(
        w(F(6, 0, 0, 0.3), n(0, -0.92, 95).scale(14, 2, 14), H(0.8, 0.8, 0.8, 0.2)),
        w(F(5), n(0, 0, 95).scale3d(6), H(0.3, 0.3, 0.3, 0.5)),
      ));
      Fb(n(0, 1.7, 82).rotate(0, 180));
      J(F(5), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), H(0.5, 0.3, 0.3, 0.4));
      J(F(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), H(0.5, 0.6, 0.7, 0.3));
      J(F(), n(0, 16, 129).scale(1.5, 1, 2), H(0.5, 0.6, 0.7, 0.3));
      J(F(7), n(0, 16.2, 133).scale(5, 1, 5), H(0.4, 0.5, 0.6, 0.4));
      J(O(
        Rb(
          w(F(), n(0, 16, 110.5).scale(12, 1, 3), H(0.5, 0.3, 0.3, 0.4)),
          w(F(), n(0, 16, 111).scale(3, 1, 3.8), H(0.5, 0.3, 0.3, 0.4)),
        ),
        w(F(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), H(0.5, 0.3, 0.3, 0.4)),
      ));
      K(() => {
        J(F(3), n(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), H(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          J(F(6), n(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), H(0.7, 0.7, 0.7, 0.4));
          J(F(), n(0, 6.2, g + 95).scale(0.5, 11, 0.5), H(0.5, 0.3, 0.3, 0.4));
        });
      });
      K(() => {
        J(F(5), l.scale(5, 1.1, 5), H(0.5, 0.3, 0.3, 0.4));
        J(F(5), l.scale(5.5, 0.9, 5.5), H(0.25, 0.25, 0.25, 0.4));
        Fb(n(0, 1.5, -1).rotate(0, 180));
      });
      Gb(n(0, 3, 95), ...sb(9).map(({ x: g, z: u }) => [9 * g, 9 * u, 4]));
      Gb(n(0, 19, 134), [0, 0, 3.5]);
    });
    K(() => {
      J(ub(20), n(0, 1).scale3d(0.5), H(1, 0.3, 0.4));
      J(ub(30), l.scale(0.65, 0.8, 0.55), H(1, 0.3, 0.4));
      J(F(), n(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), H(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        J(r, l.rotate(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), H(1, 1, 0.8));
        J(
          w(O(F(15, 1), w(F(), n(0, 0, 1).scale(2, 2, 0.5))), l.rotate(-90, 0).scale(0.1, 0.05, 0.1), H(0.3, 0.3, 0.3)),
          n(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        K(() => {
          J(F(20, 1), n(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), H(1, 0.3, 0.4));
        });
      });
    });
    K(() => {
      J(F(6).slice(0, -1), l.scale(0.77, 1, 0.77), H(1, 0.3, 0.5));
    }, 0);
    K(() => {
      J(
        ub(30, 24, (m, v, y) => {
          const x = v / 24, A = m * Math.PI * 2 / 30, C = Math.sin(x ** 0.6 * Math.PI / 2);
          m = x * x * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < v
            ? { x: y.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(A) * C,
              y: Math.cos(x * Math.PI) - x - m,
              z: Math.sin(A) * C + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        l.scale(0.7, 0.7, 0.7),
        H(1, 1, 1),
      );
      [-1, 1].map(m => J(ub(12), n(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    K(() => {
      J(F(6, 1), l.scale(0.13, 1.4, 0.13), H(0.3, 0.3, 0.5, 0.1));
      J(F(10), n(0, 1).scale(0.21, 0.3, 0.21), H(1, 0.5, 0.2));
      J(F(3), n(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), H(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
