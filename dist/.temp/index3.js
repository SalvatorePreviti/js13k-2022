let aa,
  ba,
  da,
  ea,
  fa,
  ia,
  ja,
  ma,
  na,
  oa,
  c,
  pa,
  qa,
  ra,
  ta,
  ua,
  va,
  d = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 14,
  Ja = 0.1;
const Ka = Math.PI / 180,
  La = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Ma = [],
  e = [],
  h = [],
  Na = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Oa = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Pa = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Ta = 0, Ua = 180, Va = 0, Wa = 0, Xa = 0;
const Ya = NO_INLINE(a => 0 > a ? -a : a),
  Za = NO_INLINE((a, b) => a < b ? a : b),
  $a = NO_INLINE((a, b) => b < a ? a : b),
  ab = (a, b) => Ya(a) > b ? a : 0,
  bb = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  cb = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka,
  db = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * bb(g) || 0,
  eb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0,
  fb = (a, b) => (a = bb(a), eb(a, 1 - a, b)),
  gb = (a, b, g = 0) =>
    (a * a + b * b + g
        * g) ** 0.5,
  lb = (a = 0, b = 0, g = 0, k = 1) => {
    hb = l.m11 * a + l.m21 * b + l.m31 * g + l.m41 * k;
    ib = l.m12 * a + l.m22 * b + l.m32 * g + l.m42 * k;
    jb = l.m13 * a + l.m23 * b + l.m33 * g + l.m43 * k;
    kb = l.m14 * a + l.m24 * b + l.m34 * g + l.m44 * k;
  };
var hb, ib, jb, kb;
const nb = (
    a,
    b = mb,
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
  ob = (
    a = w,
    b = l,
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
  y = NO_INLINE((a, b, g) => w.translate(a, b, g)),
  pb = (a, b) => Array.from(Array(a), (g, k) => b(k)),
  qb = (a, b, g) => (a.C = g, a.u = b, a),
  rb = (a, b, g = a.u) => (ob(b), qb(a.map(({ x: k, y: p, z: m }) => (lb(k, p, m), { x: hb, y: ib, z: jb })), g, a.C)),
  D = (a, b, g) => a.map(k => rb(k, b, g)),
  sb = (a, b = 0) =>
    pb(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > Ya(k) ? k : 0 > k ? k - b : k + b };
    }),
  tb = (a, b, g) =>
    a.map((k, p, { length: m }) => qb([k, b[m - p - 1], b[m - (p + 1) % m - 1], a[(p + 1) % m]], a.u, g)),
  H = (
    a,
    b,
    g = 0,
    k,
  ) => (a = a ? sb(a, k) : Na,
    k = rb(a, y(0, 1).scale3d(0 < g ? g : 1)),
    a = rb(a, y(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...tb(a, k, b), k, a]),
  wb = (
    a,
    b = a,
    g = (
      k,
      p,
    ) => (p *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(p), y: Math.cos(p), z: Math.sin(k) * Math.sin(p) }),
  ) => {
    const k = [];
    for (let p = 0; a > p; p++) {
      for (let m = 0; b > m; m++) {
        const x = qb([], 0, 1);
        k.push(x);
        x.push(g(p, m, x));
        m && x.push(g((p + 1) % a, m, x));
        b - 1 > m && x.push(g((p + 1) % a, m + 1 % b, x));
        x.push(g(p, m + 1 % b, x));
      }
    }
    return k;
  },
  xb = NO_INLINE(a => 1 - Math.exp(-xa * a)),
  yb = NO_INLINE((a, b, g) => eb(a, b, xb(g))),
  zb = (a, b, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Ab = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Db = a => Math.sin(a * Math.PI * 2),
  Eb = a => 0.5 > a % 1 ? 1 : -1,
  Fb = a => a % 1 * 2 - 1,
  Gb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Hb = a => {
    let b = 0;
    const g = () => {
        let m = 0;
        const x = R => {
            let J, V, Ia, ka = 0, la = 0;
            const ca = [],
              sa = new Int32Array(768 * R),
              cc = 2 ** (t - 9) / R,
              dc = Math.PI * 2 ** (u - 8) / R,
              Bb = A * R & -2;
            for (let ub = 0; 11 >= ub; ++ub) {
              for (
                let vb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ub];
                32 > vb;
                ++vb
              ) {
                const Ob = (32 * ub + vb) * R;
                for (var Qa = 0; 4 > Qa; ++Qa) {
                  if (J = 0, Nb && (J = B[Nb - 1].charCodeAt(vb + 32 * Qa) - 40, J += 0 < J ? 106 : 0), J) {
                    var ha;
                    if (!(ha = ca[J])) {
                      ha = J;
                      let Y = void 0, Aa = void 0;
                      var Pb = J;
                      let ec = 0, fc = 0;
                      const gc = 2 > b ? Fb : Db, hc = 2 > b ? 1 > b ? Eb : Gb : Db, Qb = new Int32Array(S + T + O);
                      for (let Ra = 0, Cb = 0; S + T + O > Ra; ++Ra, ++Cb) {
                        let Sa = 1;
                        S > Ra ? Sa = Ra / S : S + T > Ra || (Sa = (1 - (Sa = (Ra - S - T) / O)) * 3 ** (-q / 16 * Sa));
                        0 > Cb
                          || (Cb -= 4 * R,
                            Aa = 0.00396 * 2 ** ((Pb + r - 256) / 12),
                            Y = 0.00396 * 2 ** ((Pb + K - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Qb[Ra] = 80
                            * (gc(ec += Aa * Sa ** (C / 32)) * f + hc(fc += Y * Sa ** (F / 32)) * I
                              + (W ? (2 * Math.random() - 1) * W : 0))
                            * Sa | 0;
                      }
                      ha = ca[ha] = Qb;
                    }
                    for (let Y = 0, Aa = 2 * Ob; ha.length > Y; ++Y, Aa += 2) {
                      sa[Aa] += ha[Y];
                    }
                  }
                }
                for (let Y, Aa = 0; R > Aa; ++Aa) {
                  Qa = 0;
                  ha = 2 * (Ob + Aa);
                  var Ba = (((Y = sa[ha]) || Ia)
                    && (V = 0.00308 * v,
                      1 !== b && 4 !== b || (V *= Math.sin(cc * ha * Math.PI * 2) * E / 512 + 0.5),
                      V = 1.5 * Math.sin(V),
                      ka += V * la,
                      Ba = (1 - G / 255) * (Y - la) - ka,
                      la += V * Ba,
                      Y = 4 === b ? la : 3 === b ? Ba : ka,
                      b || (Y = 1 > (Y *= 22e-5) ? -1 < Y ? Math.sin(Y / 4 * Math.PI * 2) : -1 : 1, Y /= 22e-5),
                      Y *= L / 32,
                      Ia = 1e-5 < Y * Y,
                      Ba = Math.sin(dc * ha) * n / 512 + 0.5,
                      Qa = Y * (1 - Ba),
                      Y *= Ba),
                    ha < Bb || (Qa += sa[1 + ha - Bb] * z / 255, Y += sa[ha - Bb] * z / 255),
                    m + ha >> 1);
                  k[Ba] += (sa[ha] = Qa) / 65536;
                  p[Ba] += (sa[++ha] = Y) / 65536;
                }
              }
            }
            m += 768 * R;
          },
          B = Oa[b],
          [f, r, C, I, K, F, W, S, T, X, q, t, v, G, L, n, u, z, A, E] = Pa[b],
          O = 4 * X ** 2;
        x(5513);
        x(4562);
        x(3891);
        Ab(5 > ++b ? g : a);
      },
      k = (da = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      p = da.getChannelData(1);
    Ab(g);
  },
  Ib = () => {
    let a, b, g, k, p, m, x, B, f, r, C, I, K, F, W, S, T = !0;
    const X = [],
      q = () => {
        b4.innerHTML = "Music: " + T;
        S && (ba || !T ? S.disconnect() : S.connect(W.destination));
      },
      t = () => {
        const n = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ja = [zb(0.3, 55, n, 1.732051), zb(55, 181, n, 1.732051)];
        ia = zb(0.3, 181, n, 1.732051);
        k = B = void 0;
        X.length =
          ea =
          F =
          I =
          K =
          ya =
          za =
            0;
        document.hidden && v(!0);
      },
      v = n => {
        if (ba !== n) {
          if (ba = n, t(), document.body.className = n ? "l m" : "l", n) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          q();
        }
      },
      G = n => {
        try {
          W || (W = new AudioContext(), (S = W.createBufferSource()).buffer = da, S.loop = !0, S.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        v(!1);
        fa = n;
      },
      L = (n, u) => n.buttons[u]?.pressed || 0 < n.buttons[u]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      G();
    };
    b2.onclick = () => {
      G(1);
    };
    b5.onclick = () => v(!0);
    b4.onclick = () => {
      T = !T;
      q();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
    };
    onclick = n => {
      if (!ba && (n.target === hC && (ea = 1), fa)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = n => {
      let u;
      n.repeat
        || (u = {
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
        }[n.code],
          (X[u] = !!n.type[5] && !0) && (0 === u && (ea = 1), 1 === u && v(!0)));
    };
    onmousemove = ({ movementX: n, movementY: u }) => {
      fa && (n || u) && (Ua += 0.1 * n, Ta += 0.1 * u);
    };
    hC.ontouchstart = n => {
      if (!ba) {
        for (let { pageX: u, pageY: z, identifier: A } of n.changedTouches) {
          fa && u > hC.clientWidth / 2
            ? void 0 === B && (f = 0, m = u, x = z, B = A, C = Ta, r = Ua)
            : void 0 === k && (p = 0, b = u, g = z, k = A);
        }
        a = wa;
      }
    };
    hC.ontouchmove = n => {
      if (!ba) {
        for (let { pageX: O, pageY: R, identifier: J } of n.changedTouches) {
          var u, z, A, E;
          B === J && (Ta = C + (R - x) / 2.3, Ua = r + (O - m) / 2.3, f = 1);
          k === J
            && (J = (b - O) / 20,
              u = Ya(J),
              z = (g - R) / 20,
              A = Ya(z),
              (E = 0.5 < $a(u, A)) && (p = 1),
              I = (E && 0.3 < u) * bb(J, -1),
              K = (E && 0.3 < A) * bb(z, -1),
              2 < u && (b = 20 * (0 > J ? -1 : 1) + O),
              2 < A && (g = 20 * (0 > z ? -1 : 1) + R));
        }
      }
    };
    hC.ontouchend = n => {
      let u;
      document.activeElement === document.body && n.preventDefault();
      for (const z of n.changedTouches) {
        z.identifier === B
          ? (B = void 0, f || (u = 1), f = 0)
          : z.identifier === k
          ? (k = void 0, K = I = 0, p || (u = 1), p = 0)
          : u = 1;
      }
      n.target === hC && u && a && 0.02 < (n = wa - a) && 0.7 > n && (ea = 1);
    };
    ma = () => {
      ya = K + (X[4] ? 1 : 0) - (X[5] ? 1 : 0);
      za = I + (X[2] ? 1 : 0) - (X[3] ? 1 : 0);
      let n = navigator.getGamepads()[0];
      n
        && (fa && (Ta += xa * ab(n.axes[3], 0.3) * 80, Ua += xa * ab(n.axes[2], 0.3) * 80),
          ya += L(n, 12) - L(n, 13) - ab(n.axes[1], 0.2),
          za += L(n, 14) - L(n, 15) - ab(n.axes[0], 0.2),
          L(n, 9) && v(!0),
          (n = L(n, 3) || L(n, 2) || L(n, 1) || L(n, 0)) && !F && (ea = 1),
          F = n);
    };
    document.onvisibilitychange = onblur = onresize = t;
    v(!0);
  },
  Jb = (a, b) => {
    1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
  },
  Kb = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        Ca = Ma.reduce((a, b) => a + b.i, 0)
      ] + " / XIII";
  },
  Lb = () => {
    localStorage.spdnt22 = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Ha, oa, d]);
  },
  M = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  N = () => {
    const a = [];
    c = (b, g = new DOMMatrix(), k) => a.push(...D(b, g, k));
    h.push({ m: new DOMMatrix(), o: a });
  },
  Mb = a => {
    const b = () => {
        b.g = yb(b.g, b.i, 4);
        b.h = yb(b.h, b.i, 1);
        ob(g).multiplySelf(a);
        ea && 3 > (lb(), gb(Va - hb, Wa - ib, Xa - jb))
          ? b.i
            ? 0.7 < b.g && (b.i = 0, Ha = k, Jb("* click *", 1), Lb())
            : 0.3 > b.g && (b.i = 1, Ha = k, Jb("* click *", 1), Lb())
          : b.i && 0.8 < b.g && 14 === k && (b.i = 0,
            13 > Ca
              ? Jb("Not leaving now, there are souls to catch!", 3)
              : Da || (Jb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Da = 1));
        l.rotateSelf(50 * b.g - 25, 0).translateSelf(0, 1).m44 = b.g;
      },
      g = h.at(-1).m,
      k = e.length;
    b.m = g;
    b.F = a;
    e.push(b);
    c(H(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
    c(H(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
    c(H(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), M(0.5, 0.5, 0.4));
  },
  Rb = (a, ...b) => {
    let g, k, p, m, x = 0, B = 0, f = 1, r = -1;
    const C = () => {
      if (!C.i) {
        let q, t, v, G, L, n = 1, u = 1 / 0;
        for (let z = 0; b.length > z; z++) {
          const A = b[z];
          let E = gb(K - A[0], F - A[1]);
          n = Za(n, E / A[2]);
          0 > (E -= A[2]) ? L = 1 : u > E && (u = E, I = A);
        }
        L
          || (q = K - I[0],
            t = F - I[1],
            v = gb(q, t),
            G = Math.atan2(-t, q),
            f && (m = bb(m / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2),
            G += B,
            r = -Math.cos(G),
            x = Math.sin(G),
            0.1 < v && (v = Za(v, I[2]) / v, K = q * v + I[0], F = t * v + I[1]));
        f = L;
        m = yb(m, 3 + 6 * (1 - n), 3 + n);
        W = yb(W, K = yb(K, K + r, m), m);
        S = yb(S, F = yb(F, F + x, m), m);
        g = db(g, Math.atan2(W - k, S - p) / Ka - 180, xb(3));
        ob(T).multiplySelf(a).translateSelf(k = W, 0, p = S).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
        1.6 > (lb(), gb(Va - hb, Wa - ib, Xa - jb))
          && (C.i = 1,
            Jb(
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
              ][Ca] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              6,
            ),
            Kb(),
            Lb());
      }
      C.i
        && ob(h[35].m).translateSelf(
          X % 4 * 1.2 - 1.7 + Math.sin(d + X) / 7,
          -2,
          1.7 * (X / 4 | 0) - 5.5 + Ya(X % 4 - 2) + Math.cos(d / 1.5 + X) / 6,
        );
    };
    let I = b[0], [K, F] = I, [W, S] = I;
    const T = h.at(-1).m, X = Ma.length;
    Ma.push(C);
  },
  Sb = ({ x: a, y: b, z: g }, k) => a * k.x + b * k.y + g * k.z,
  Tb = a => {
    let b, g = 0, k = 0, p = 0, m = a.at(-1);
    for (b of a) {
      g += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), p += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = gb(g, k, p), g /= b, k /= b, p /= b, { x: g, y: k, z: p, w: g * m.x + k * m.y + p * m.z };
  },
  Ub = (a, b) => {
    var g, k, p, m = b.B;
    for (var x = 0; m.length > x; ++x) {
      if (-0.00008 > (g = Sb(a, m[x]) - a.w) ? p = b : 8e-5 < g && (k = b), p && k) {
        k = [];
        p = [];
        m = b.B;
        x = b.v;
        let B = m.at(-1), f = Sb(a, B) - a.w;
        for (const r of m) {
          g = Sb(a, r) - a.w,
            8e-5 > f && p.push(B),
            -0.00008 < f && k.push(B),
            (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g)
            && (f /= g - f,
              B = { x: B.x + (B.x - r.x) * f, y: B.y + (B.y - r.y) * f, z: B.z + (B.z - r.z) * f },
              k.push(B),
              p.push(B)),
            B = r,
            f = g;
        }
        return {
          l: 2 < k.length && { B: qb(k, m.u, m.C), v: x, A: b },
          j: 2 < p.length && { B: qb(p, m.u, m.C), v: x, A: b },
        };
      }
    }
    return { l: k, j: p };
  },
  Vb = (a, b, g = Tb(b.B)) => {
    let k, p;
    return a
      ? ({ l: k, j: p } = Ub(a, b), k || p || a.o.push(b), k && (a.l = Vb(a.l, k, g)), p && (a.j = Vb(a.j, p, g)))
      : a = { x: g.x, y: g.y, z: g.z, w: g.w, o: [b], l: 0, j: 0 },
      a;
  },
  Wb = (a, b, g) => {
    const k = [],
      p = (m, x) => {
        let { l: B, j: f } = Ub(m, x);
        B || f || (0 < g * Sb(m, b) ? B = x : f = x);
        B && (m.l ? p(m.l, B) : k.push(B));
        f && m.j && p(m.j, f);
      };
    for (const m of b.o) {
      p(a, m);
    }
    return k;
  },
  Xb = (a, b) => a && (b(a), Xb(a.l, b), Xb(a.j, b)),
  Yb = a => (Xb(a, b => {
    const g = b.j;
    b.j = b.l;
    b.l = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.o) {
      k.v = !k.v;
    }
  }),
    a),
  Zb = a => a.length ? a.reduce((b, g) => Vb(b, { B: g, v: 0, A: 0 }), 0) : a,
  $b = (...a) =>
    a.reduce((b, g) => {
      const k = [];
      if (b = Zb(b), g) {
        g = Zb(g);
        Xb(b, p => p.o = Wb(g, p, 1));
        Xb(g, p => k.push([p, Wb(b, p, -1)]));
        for (let [p, m] of k) {
          for (const x of m) {
            Vb(b, x, p);
          }
        }
      }
      return b;
    }),
  P = (a, ...b) => {
    const g = m => {
        let x;
        return m.A && ((x = k.get(m.A)) ? (p.delete(x), m = g(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      p = new Map();
    return a = Yb($b(Yb(Zb(a)), ...b)),
      Xb(a, m => {
        for (const x of m.o) {
          p.set(g(x), x.v);
        }
      }),
      Array.from(p, ([{ B: m }, x]) => {
        const B = m.map(({ x: f, y: r, z: C }) => ({ x: f, y: r, z: C }));
        return qb(x ? B.reverse() : B, m.u, m.C);
      });
  },
  Q = (a, b = 0, g = 0) => {
    const k = h[++pa].m;
    return ob(w, k), k.m41 = a, k.m42 = b, k.m43 = g, k;
  },
  bc = () => {
    let a, b, g, k, p, m, x, B, f, r, C, I, K, F = 0, W = 0, S = 0, T = 0, X = 1, q = 2, t = 15;
    const v = () => ob((q ? e[Ha] : h[28 !== F ? F : 0]).m),
      G = u => {
        1 < q ? (ob(e[Ha].m).multiplySelf(e[Ha].F), lb(0, 0.9 < na ? 15 : 1, -2.4)) : (v(), lb(W, S, T));
        u && (p = (hb - Va) / xa, m = (jb - Xa) / xa);
        Va = hb;
        Wa = ib;
        Xa = jb;
      },
      L = () => {
        var u = 0, z = 0, A = 0, E = 0, O = 0, R = 0, J = -1;
        for (var V = 0; 36 > V; ++V) {
          var Ia = 512 * V;
          for (var ka = 96; 416 > ka; ka += 4) {
            for (var la = 0; 2 > la; ++la) {
              var ca = ac[Ia + ka + la];
              const sa = ac[Ia + ka + la + 2];
              ca > E && (E = ca);
              ca + sa && (0 > J || J === V) && (J = V, sa === r ? ++u : z && z !== sa || (z = sa, ++A));
            }
          }
        }
        r = 0 > J ? 0 : A > 2 * u ? z : r;
        for (u = 36; 128 > u; ++u) {
          V =
            J =
            A =
            z =
              0;
          Ia = 512 * u;
          for (ka = 0; 128 > ka; ++ka) {
            la = Ia + 4 * ka,
              ca = ac[la],
              64 > ka ? ca > z && (z = ca) : ca > A && (A = ca),
              (ca = ac[2 + la]) > J && (J = ca),
              ca = ac[1 + la],
              64 < ka ? ca > z && (z = ca) : ca > A && (A = ca),
              (ca = ac[3 + la]) > V && (V = ca);
          }
          (A -= z) * A > O * O && (O = A);
          (V -= J) * V > R * R && (R = V);
        }
        O *= 0.7;
        B = bb(1 - 0.01 * $a(Ya(O), Ya(R)), 0.3);
        O /= 255;
        E /= 255;
        R /= 255;
        v().invertSelf();
        lb(O, E, R, 0);
        W += hb;
        S += E;
        T += jb;
        G();
      },
      n = (u, z, A, E) => eb(u, z, X || (bb(Ya(z - u) ** 0.5 - A) + 1 / 7) * xb(1.5 * E));
    qa = () => {
      G(r);
      U.r9r(0, 0, 128, 128, 6408, 5121, ac);
      NO_INLINE(L)();
      !q && r === F || (F = r, v().invertSelf(), lb(Va, Wa, Xa), W = hb, S = ib, T = jb, q = q && (r ? 0 : 1));
      (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (q = 2);
      1 === r && (e[15].i = -15 > Va && 0 > Xa ? 1 : 0);
      f = eb(yb(f, Wa, 2), Wa, q || 8 * Ya(f - Wa));
      C = n(C, Va, 0.5, 1);
      I = n(I, f, 2, 1);
      K = n(K, Xa, 0.5, 1);
      k = yb(k, ra * (30 < r && 35 > r), 2);
      fa
        ? (u = q + xb(18), Ea = eb(Ea, Va, u), Ga = eb(Ga, Xa, u), Fa = eb(Fa, 1.6 + f, u), Ua = cb(Ua))
        : (Ea = n(Ea, C, 1, 2 + k),
          Ga = n(Ga, K + -18 + 5 * k, 1, 2 + k),
          Fa = n(Fa, $a(I + bb((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          u = Za(-6, -Ya(K - Ga)),
          z = C - Ea,
          Ua = db(Ua, 90 - cb(Math.atan2(u, z) / Ka), X + xb(10)),
          Ta = db(Ta, 90 - Math.atan2(gb(u, z), Fa - I) / Ka, X + xb(10)));
      Ta = bb(Ta, -87, 87);
      X = 0;
      var u = bb(ya, -1), z = bb(za, -1), A = ab(gb(u, z) ** 0.5, 0.1);
      let E = Math.atan2(u, z);
      A && (a = 90 - E / Ka);
      b = db(b, a, xb(8));
      g = yb(g, A, 10);
      Q(Va, 0.06 * B * g * Math.cos(18.2 * d) + f, Xa).rotateSelf(0, b);
      for (var O = 0; 2 > O; ++O) {
        const R = 9.1 * d - Math.PI * O;
        ob(h[37].m, Q(0)).translateSelf(0, g * bb(0.45 * Math.sin(R - Math.PI / 2))).rotateSelf(
          g * Math.sin(R) * 0.25 / Ka,
          0,
        );
      }
      t = r ? 5 : yb(t, q ? 13 : 19 - 2 * Za(0, Wa + 10), 2.2);
      p = r || q ? 0 : yb(p, 0, 3);
      m = r || q ? 0 : yb(m, 0, 3);
      u = (x = q ? 0 : yb(x, r ? 7 * bb(2 * A) * B : 0, r ? 9 : 1)) * A * Ya(u) * Math.sin(E);
      z = x * A * Ya(z) * Math.cos(E);
      E = fa ? (180 + Ua) * Ka : 0;
      A = xa * (p + (z * Math.cos(E) - Math.sin(E) * u));
      O = xa * -t;
      u = xa * (m + (z * Math.sin(E) + Math.cos(E) * u));
      v().invertSelf();
      lb(A, O, u, 0);
      W += hb;
      S += O;
      T += jb;
      G();
    };
  },
  ic = (a, b) => {
    ba
      ? 1100 < hC.width && a.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s)
      : (void 0 !== b && a.das(4, h[40].D - h[40].s, 5123, 2 * h[40].s, Ma.length),
        a.das(4, h[41].D - h[41].s, 5123, 2 * h[41].s, e.length),
        a.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
  },
  jc = (a, b, g) => {
    const k = {}, p = (x, B = 35633) => (B = a.c6x(B), a.s3c(B, x), a.c6a(B), B), m = a.c1h();
    return a.abz(m, p(b, 35633)), a.abz(m, p(g, 35632)), a.l8l(m), x => x ? k[x] || (k[x] = a.gan(m, x)) : a.u7y(m);
  },
  l = new DOMMatrix(),
  w = new DOMMatrix(),
  mb = new Float32Array(16),
  kc = new Float32Array(760),
  ac = new Uint8Array(65536),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  U = hD.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a],
    U[a[0] + [...a].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = U[a];
}
Ab(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const k = q => {
            requestAnimationFrame(k);
            var t = (q - (aa || q)) / 1e3;
            if (wa += t, d += xa = ba ? 0 : Za(0.055, t), aa = q, 0 < xa) {
              t = (G, L, n) =>
                Q(G + Math.sin(d + 2) / 5, L + Math.sin(0.8 * d) / 5, n).rotateSelf(
                  2 * Math.sin(d),
                  Math.sin(0.7 * d),
                  Math.sin(0.9 * d),
                );
              Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
              Da && (fa = 0);
              na = Da ? yb(na, -9, 0.015) : yb(na, bb(d / 3), 1);
              oa = yb(oa, e[14].h, 0.2 + 0.3 * Ya(2 * e[14].h - 1));
              ma();
              q =
                (pa = 1,
                  ra = fb(e[13].g, e[8].g),
                  va = eb(yb(va, 0, 1), cb(va + 60 * xa), e[2].g - e[3].h),
                  ta = eb(yb(ta, 0, 5), cb(ta + 56 * xa), ra),
                  ua = eb(yb(ua, 0, 4), cb(ua + 48 * xa), ra),
                  Q(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g)),
                  Za(1 - e[11].h, e[10].h));
              var v =
                (Q(q * Math.sin(0.6 * d + 1.2) * 12, 0, 35),
                  Q(q * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55),
                  Q(q * Math.sin(0.6 * d) * 12, 0, 45),
                  Q(9.8 * (1 - q)),
                  q = bb(1 - 5 * q) * fb(e[11].g, e[2].g),
                  Q(0, q * Math.sin(1.35 * d) * 4),
                  Q(0, 0, q * Math.sin(0.9 * d) * 8),
                  Q(0, -6.5 * e[11].h),
                  q = fb(e[4].h, e[3].h),
                  Q(0, q * Math.sin(d) * 5 + 3.5 * (1 - $a(e[3].g, e[4].g))),
                  Q(0, q * Math.sin(d + 3) * 6, q * Math.sin(0.6 * d + 1) * 6),
                  Q(0, -7.3 * e[4].h),
                  q = fb(e[6].g, e[7].g),
                  Q(
                    0,
                    -2,
                    10
                      - 8.5 * q * Ya(Math.sin(1.1 * d)),
                  ),
                  Q(0, -2, 10 - 8.5 * q * Ya(Math.sin(2.1 * d))),
                  Q(0, -2, 10 - 8.5 * $a(q * Ya(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - q))),
                  fb(e[5].h, e[13].h));
              for (q = 0; 4 > q; q++) {
                Q(
                  (2 < q ? 2 * (1 - v) + v : 0) - 100,
                  v * Math.sin(1.3 * d + 1.7 * q) * (3 + q / 3) + 0.7,
                  115 - 7 * (1 - e[5].h) * (1 - e[13].h) * (1 & q ? -1 : 1)
                    + $a(0.05, v) * Math.cos(1.3 * d + 7 * q) * (4 - 2 * (1 - q / 3)),
                );
              }
              q = fb(e[8].h, e[9].h);
              for (let G = 0; 3 > G; ++G) {
                Q(0, q * Math.sin(1.5 * d + 1.5 * G) * 4 + (G ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)));
              }
              q = fb(fb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2);
              Q(0, 16 * q, 95 + 8.5 * bb(2 * q - 1));
              Q(0, -4.7 * e[0].g, -15);
              Q(0, -4.7 * e[10].g, 15);
              Q(-99.7, -1.9 - 5.5 * e[3].g, 63.5);
              Q(-100, 0.6 - 5.8 * e[13].g, 96.5);
              Q(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + va, 0);
              Q(2.5 * (1 - v) - 139.7, -3 * (1 - e[5].g) - v * Math.sin(0.8 * d) - 1.8, 93.5).rotateSelf(
                Math.cos(1.3 * d) * (3 + 3 * v),
                0,
              );
              Q(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
              Q(-81, 0.6, 106).rotateSelf(0, 40 + ta);
              Q(-65.8, 0.8, 106).rotateSelf(0, ua);
              Q(-50.7, 0.8, 106).rotateSelf(0, 180 - ua);
              Q(-50.7, 0.8, 91).rotateSelf(0, 270 + ua);
              t(-12, 4.2, 40 * na - 66);
              t(-123, 1.4, 55 - 65 * oa);
              for (t = 0; 13 > t; ++t) {
                Ma[t](), nb(l, kc, 12 + t);
              }
              for (t = 0; 16 > t; ++t) {
                e[t](), nb(l, kc, 25 + t);
              }
              for (let G, L = 0, n = 656; 26 > L; ++L, ++n) {
                G = h[2 + L].m, kc[n++] = G.m41, kc[n++] = G.m42, kc[n++] = G.m43;
              }
              qa();
              for (t = 0; 12 > t; ++t) {
                nb(h[28 + t].m, kc, t);
              }
              U.cbf(!0, !0, !0, !0);
              U.c4s(16640);
              U.u3a(I("j"), kc);
              U.cbf(!0, !1, !0, !1);
              U.uae(I("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa)));
              ic(U);
              U.c4s(256);
              U.cbf(!1, !0, !1, !0);
              U.uae(I("b"), !1, nb(ob().translateSelf(-Va, -Wa, -Xa - 0.3)));
              ic(U);
              U.f1s();
              ea = 0;
            }
            t = Ea;
            v = Fa;
            q = Ga;
            ba
              ? (ob(ia).invertSelf(),
                lb(3.6, 3.5),
                t = hb,
                v = ib,
                q = 5,
                ob(w, m).rotateSelf(-20, 0).invertSelf().translateSelf(-t, -v, -q).rotateSelf(0, 99),
                ob().rotateSelf(0, 40 * Math.sin(wa) - 80, -8),
                nb(l, kc, 9),
                nb(l, kc, 10),
                nb(l, kc, 11))
              : ob(w, m).rotateSelf(-Ta, -Ua).invertSelf().translateSelf(-t, -v, -q);
            C();
            Z.ubu(C("k"), t, v, q);
            Z.u3a(C("j"), kc);
            Z.uae(C("a"), !1, nb(w));
            Z.ubh(C("g"), 3);
            Z.ubh(C("h"), 3);
            Z.b6o(36160, W);
            Z.v5y(0, 0, 2048, 2048);
            K(54.7);
            F(126);
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(C("b"), !1, nb(m));
            Z.uae(C("a"), !1, nb(ia));
            Z.uae(C("i"), !1, x);
            Z.ubh(C("g"), 0);
            Z.ubh(C("h"), 1);
            ic(Z, !fa);
            r();
            Z.uae(r("b"), !1, nb(ob(m).invertSelf()));
            Z.ubu(r("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
            Z.d97(4, 3, 5123, 0);
          },
          p = new DOMMatrix(),
          m = new DOMMatrix(),
          x = new Float32Array(32),
          B = g,
          f = pb(8, () => ({})),
          r = jc(
            Z,
            "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
            "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
          ),
          C = jc(
            Z,
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          I = jc(
            U,
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          [K, F] = pb(2, q => {
            const t = Z.c25();
            return Z.a4v(33984 + q),
              Z.b9j(3553, t),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              v => {
                let G = 0, L = 0, n = 0, u = 1 / 0, z = 1 / 0, A = 1 / 0, E = -1 / 0, O = -1 / 0, R = -1 / 0;
                Z.fas(36160, 36096, 3553, t, 0);
                Z.c4s(256);
                ob().scale3dSelf(v *= 1.1).multiplySelf(ob(ja[q], p).multiplySelf(m).invertSelf());
                for (let J = 0; 8 > J; ++J) {
                  const V = f[J];
                  lb(4 & J ? 1 : -1, 2 & J ? 1 : -1, 1 & J ? 1 : -1);
                  G -= V.x = (0 | hb) / (v * kb);
                  L -= V.y = (0 | ib) / (v * kb);
                  n -= V.z = (0 | jb) / (v * kb);
                }
                ob().rotateSelf(298, 139).translateSelf(G / 8, L / 8, n / 8);
                for (v = 0; 8 > v; ++v) {
                  const { x: J, y: V, z: Ia } = f[v];
                  lb(J, V, Ia);
                  u = Za(u, hb);
                  E = $a(E, hb);
                  z = Za(z, ib);
                  O = $a(O, ib);
                  A = Za(A, jb);
                  R = $a(R, jb);
                }
                v = 10 + q;
                A *= 0 > A ? v : 1 / v;
                R *= 0 < R ? v : 1 / v;
                Z.uae(
                  C("b"),
                  !1,
                  nb(
                    ob(w, p).scaleSelf(2 / (E - u), 2 / (O - z), 2 / (A - R)).translateSelf(
                      (E + u) / -2,
                      (O + z) / -2,
                      (A + R) / 2,
                    ).multiplySelf(l),
                    x,
                    q,
                  ),
                  16 * q,
                  16,
                );
                ic(Z, !fa);
              };
          }),
          W = Z.c5w(),
          S = U.c25(),
          T = U.c3z(),
          X = U.c5w();
        C();
        Z.ubh(C("q"), 2);
        r();
        Z.ubh(r("q"), 2);
        I();
        U.uae(I("a"), !1, nb(zb(1e-4, 2, 1.2, 0.4)));
        Z.b6o(36160, W);
        Z.d45([0]);
        Z.r9l(0);
        U.v5y(0, 0, 128, 128);
        U.b6o(36160, X);
        U.bb1(36161, T);
        U.r4v(36161, 33190, 128, 128);
        U.f8w(36160, 36096, 36161, T);
        U.b9j(3553, S);
        U.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        U.fas(36160, 36064, 3553, S, 0);
        U.c5t(0, 0, 0, 0);
        Z.a4v(33986);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, B);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.c5t(0, 0, 0, 1);
        for (const q of [Z, U]) {
          q.e8z(2929), q.e8z(2884), q.c70(1), q.d4n(515);
        }
        NO_INLINE(Ib)();
        NO_INLINE(bc)();
        requestAnimationFrame(k);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = La;
  NO_INLINE(Hb)(() => {
    Ab(() => {
      let f = 0;
      const r = [],
        C = [],
        I = [],
        K = [],
        F = new Int32Array(8),
        W = new Map(),
        S = new Int32Array(F.buffer, 0, 5),
        T = new Float32Array(F.buffer);
      h.map((t, v) => {
        let G;
        const L = n => {
          let { x: u, y: z, z: A } = G[n], E = (T[0] = u, T[1] = z, T[2] = A, n = "" + (G.C ? S : F), W.get(n));
          return void 0 !== E
            ? (u = 3 * E, K[u] = (K[u++] + F[5]) / 2, K[u] = (K[u++] + F[6]) / 2, K[u] = (K[u] + F[7]) / 2)
            : (W.set(n, E = W.size), C.push(u, z, A, T[3]), I.push(F[4]), K.push(F[5], F[6], F[7])),
            E;
        };
        for (G of (T[3] = 40 === v ? -12 : 41 === v ? -25 : v, t.o)) {
          const { x: n, y: u, z } = Tb(G);
          F[4] = 0 | G.u;
          F[5] = 32767 * n;
          F[6] = 32767 * u;
          F[7] = 32767 * z;
          for (let A = 2, E = L(0), O = L(1); G.length > A; ++A) {
            r.push(E, O, O = L(A));
          }
        }
        t.o = 0;
        t.s = f;
        t.D = f = r.length;
      });
      for (const t of [Z, U]) {
        t.b11(34962, t.c1b()),
          t.b2v(34962, new Float32Array(C), 35044),
          t.v7s(0, 4, 5126, !1, 0, 0),
          t.b11(34962, t.c1b()),
          t.b2v(34962, new Int16Array(K), 35044),
          t.v7s(1, 3, 5122, !0, 0, 0),
          t.b11(34962, t.c1b()),
          t.b2v(34962, new Uint32Array(I), 35044),
          t.v7s(2, 4, 5121, !0, 0, 0),
          t.b11(34963, t.c1b()),
          t.b2v(34963, new Uint16Array(r), 35044),
          t.e3x(0),
          t.e3x(1),
          t.e3x(2);
      }
      let X = [], q = [];
      try {
        const [t, v, G, L, n] = JSON.parse(localStorage.spdnt22);
        X = t;
        q = v;
        Ha = G;
        oa = L;
        d = n;
      } catch {
      }
      e.map((t, v) => t.g = t.h = t.i = 14 !== v && X[v] ? 1 : 0);
      Ma.map((t, v) => t.i = q[v] ? 1 : 0);
      Kb();
      na = Ca || 14 !== Ha ? 1 : 0;
      Ab(b);
    });
    const k = f => y(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f),
      p = f =>
        P(
          D(H(), y(0, -f / 2).scale(6, f - 1, 2.2)),
          D(H(), y(0, -f / 2 - 6).scale(4, f - 3, 4)),
          D(H(32, 1), y(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      m = pb(11, f => tb(rb(sb(18), k(f), M(1, 1, 0.8, 0.2)).reverse(), rb(sb(18), k(f + 1), M(1, 1, 0.8, 0.2)), 1))
        .flat(),
      x = [
        ...D(H(), y(0, -3).scale(11, 1.4, 3), M(0.9, 0.9, 0.9, 0.2)),
        ...D(H(), y(0, -2.2).scale(7.7, 0.5, 4), M(0.5, 0.5, 0.5, 0.2)),
        ...pb(12, f => D(H(), w.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), M(0.6, 0.5, 0.4, 0.3))).flat(),
        ...P(
          D(H(6), w.rotate(90).scale(6, 8, 6), M(0.3, 0.6, 0.6, 0.3)),
          D(H(4, 0, 0.01), y(0, 6).scale(12, 2, 0.75).rotate(0, 45), M(0.3, 0.6, 0.6, 0.3)),
          D(H(6), w.rotate(90).scale(5, 12, 5), M(0.3, 0.6, 0.6, 0.3)),
          ...[-5, 0, 5].map(f => D(H(5), y(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), M(0.3, 0.6, 0.6, 0.3))),
        ),
      ],
      B = P(
        D(H(), y(0, -0.5, 1).scale(1.15, 1.2, 6.5), M(0.25, 0.25, 0.35, 0.3)),
        P(
          D(H(3), y(0, 0, -5.5).scale(3, 2), M(0.6, 0.3, 0.4, 0.3)),
          D(H(), y(0, 0, -3.65).scale(2.5, 3), M(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => D(H(), y(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), M(0.7, 0.2, 0, 0.3))),
      );
    N();
    c([Na.slice(1)], y(-2).scale3d(3).rotate(90, 0));
    N();
    Mb(y(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, r) => {
      c(H(), y(0, 0, r ? 22 : -23).scale(3, 1, 8), M(0.9, 0.9, 0.9, 0.2));
      c(H(), y(0, 6.3, f).scale(4, 0.3, 1), M(0.3, 0.3, 0.3, 0.4));
      c(H(), y(0, 1, f).scale(3, 0.2, 0.35), M(0.5, 0.5, 0.5, 0.3));
    });
    c(H(), y(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), M(0.8, 0.8, 0.8, 0.2));
    c(H(), y(3, 1.5, -20).scale(0.5, 2, 5), M(0.7, 0.7, 0.7, 0.2));
    c(H(), y(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), M(0.75, 0.75, 0.75, 0.2));
    c(H(5), y(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), M(0.6, 0.3, 0.3, 0.4));
    c(P(
      $b(
        D(H(6, 0, 0, 0.3), y(8, -3, -4).scale(13, 1, 13), M(0.7, 0.7, 0.7, 0.2)),
        P(
          D(H(6, 0, 0, 0.3), y(0, -0.92).scale(13, 2, 13), M(0.8, 0.8, 0.8, 0.2)),
          D(H(), w.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), M(0.5, 0.5, 0.5, 0.5)),
        ),
        D(
          H(),
          w.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          M(0.8, 0.2, 0.2, 0.5),
        ),
        D(H(6), y(0, -8).scale(9, 8, 7), M(0.2, 0.1, 0.4, 0.5)),
      ),
      D(H(5), w.scale(5, 30, 5), M(0.4, 0.2, 0.6, 0.5)),
      D(H(5, 0, 1.5), y(0, 1).scale(4.5, 0.3, 4.5), M(0.7, 0.5, 0.9, 0.2)),
      D(H(6), y(15, -1.5, 4).scale(3.5, 1, 3.5), M(0.5, 0.5, 0.5, 0.5)),
    ));
    Mb(y(15, -2, 4));
    c(H(), y(-18.65, -3, 55).scale(2.45, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2));
    Mb(y(-55, -1.1, 46).rotate(0, 90));
    c(H(7), y(-57, -2.6, 46).scale(4, 1, 4), M(0.8, 0.8, 0.8, 0.3));
    c(H(6), y(-61.3, -2.4, 49).scale(3, 1, 5), M(0.4, 0.6, 0.6, 0.3));
    c(x, y(-53, 0, 55));
    c(H(), y(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), M(0.7, 0.7, 0.7, 0.2));
    c(H(3, 0, -0.5), y(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), M(0.8, 0.8, 0.8, 0.2));
    c(P(
      $b(
        D(H(), y(-100, -2.4, 55).scale(8, 0.9, 8), M(0.8, 0.8, 0.8, 0.2)),
        D(H(), y(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), M(0.8, 0.8, 0.8, 0.2)),
        D(H(), y(-100, -2.6, 70).scale(3, 1.1, 7), M(0.8, 0.8, 0.8, 0.2)),
        D(H(), y(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), M(0.8, 0.8, 0.8, 0.2)),
        D(H(6), y(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), M(0.6, 0.6, 0.6, 0.3)),
        D(H(), y(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), M(0.8, 0.8, 0.8, 0.2)),
        D(H(), y(-100, 0.42, 92).scale(3, 1.1, 4.1), M(0.8, 0.8, 0.8, 0.2)),
      ),
      D(H(8), y(-100, -1, 55).scale(7, 0.9, 7), M(0.3, 0.3, 0.3, 0.4)),
      D(H(8), y(-100, -2, 55).scale(4, 0.3, 4), M(0.4, 0.4, 0.4, 0.5)),
      D(H(8, 0, -3.1), y(-100, -3, 55).scale(0.4, 1, 0.4), M(0.4, 0.4, 0.4, 0.5)),
    ));
    c(P(
      D(H(), y(-100, 1, 63).scale(7.5, 4), M(0.5, 0.5, 0.5, 0.4)),
      D(H(), y(-100, 0, 70).scale(2, 2, 10), M(0.5, 0.5, 0.5, 0.4)),
      D(H(20, 1), y(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), M(0.5, 0.5, 0.5, 0.4)),
    ));
    Na.map(({ x: f, z: r }) => {
      c(H(6), y(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), M(0.6, 0.3, 0.3, 0.4));
      c(H(6), y(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), M(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(C => c(H(6), y(7 * f - 100, C, 7 * r + 55).scale(1.3, 0.5, 1.3), M(0.4, 0.2, 0.2, 0.8)));
      c(H(14, 1), y(9 * f - 38.9, -7.3, 11 * r + 17).scale(1, 4), M(0.25, 0.25, 0.25, 1));
      [1.5, 8].map(C =>
        c(H(17, 1), y(9 * f - 38.9, C - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), M(0.6, 0.6, 0.6, 0.3))
      );
    });
    pb(7, f => {
      c(
        H((23 * f + 1) % 5 + 5, 0, 0.5),
        y(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
        M(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    c(H(), y(-87, -9.5, 24).scale(7, 1, 3), M(0.4, 0.5, 0.6, 0.4));
    c(H(4), y(-86, -9.2, 27).scale(5, 1, 5), M(0.5, 0.6, 0.7, 0.3));
    c(H(12, 1), y(-86, -9, 31).scale(1.5, 1, 1.5), M(0.3, 0.3, 0.4, 0.1));
    Mb(y(-86, -7.5, 31));
    c(
      P(
        $b(
          D(H(5), y(0, 0, -7).scale(2, 1.2, 2), M(0.2, 0.4, 0.7, 0.3)),
          D(H(5), w.scale(9, 1.2, 9), M(0, 0.2, 0.3, 0.5)),
          D(H(), w.scale(11, 1, 13), M(0.3, 0.4, 0.6, 0.3)),
        ),
        D(H(5), w.scale(5.4, 5, 5.4), M(0, 0.2, 0.3, 0.5)),
      ),
      y(-38.9, -11.3, 17),
    );
    Mb(y(-38.9, -9.6, 10));
    c(
      P(
        $b(
          D(H(6), y(0, 0, -18).scale(15, 1.2, 15), M(0.7, 0.7, 0.7, 0.3)),
          D(H(), w.scale(4, 1.2, 6), M(0.45, 0.4, 0.6, 0.3)),
        ),
        ...pb(6, f =>
          pb(6, r =>
            D(
              H(6),
              y(4.6 * r - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * r) - 32).scale(2, 5, 2),
              M(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      y(-38.9, -11.3, -1),
    );
    c(H(5), y(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), M(0.8, 0.1, 0.25, 0.4));
    Mb(y(-84, -0.7, 85).rotate(0, 45));
    c(
      P(
        $b(D(H(), y(26.5, -1.6, 10).scale(20, 2.08, 3)), D(H(), y(26.5, -0.5, 10).scale(19, 2, 0.5))),
        ...pb(4, f => D(H(), y(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
        ...pb(3, f => D(H(), y(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
      ),
      y(-123, 0.2, -12),
      M(0.5, 0.5, 0.6, 0.2),
    );
    Mb(y(-116, -1.4, -18).rotate(0, 180));
    c(H(6), y(-116, -2.6, -16.5).scale(3.2, 0.8, 3), M(0.6, 0.5, 0.7, 0.2));
    c(H(), y(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), M(0.8, 0.8, 0.8, 0.2));
    c(H(), y(-115.5, -17, -12).scale(0.5, 15, 2.2), M(0.6, 0.6, 0.6, 0.3));
    c(H(8), y(-114, -17, -2).scale(2, 15, 2), M(0.6, 0.6, 0.6, 0.3));
    c(H(8), y(-79, -17, -2).scale(2, 15, 2), M(1, 1, 1, 0.3));
    c(H(), y(-77, -17, -50.5).scale(2.2, 15, 0.5), M(0.6, 0.6, 0.6, 0.3));
    c(P(
      D(H(12), y(-77, -14.5, -12).scale(4, 17.5, 4), M(0.7, 0.7, 0.7, 0.2)),
      D(H(12), y(-77, 3.1, -12).scale(3, 5, 3), M(0.4, 0.5, 0.6, 0.2)),
      D(H(), y(-79, 0.1, -12).scale(3.5, 2, 1.3), M(0.4, 0.5, 0.6, 0.2)),
      D(H(), y(-77, 0.1, -14).scale(1.5, 2, 2), M(0.4, 0.5, 0.6, 0.2)),
    ));
    c(P(
      D(H(), y(-93, -5.8, -40).scale(9, 1, 5), M(0.8, 0.8, 0.8, 0.1)),
      D(H(9), y(-98, -5.8, -40).scale(3, 8, 3), M(0.7, 0.7, 0.7, 0.2)),
    ));
    c(H(), y(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), M(0.6, 0.6, 0.6, 0.3));
    c(H(9), y(-98, -18.4, -40).scale(2.5, 13.5, 2.5), M(0.5, 0.5, 0.5, 0.3));
    Mb(y(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, r) => {
      c(
        P(
          D(H(), y(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), M(0.5, 0.5, 0.5, 0.4)),
          D(H(), w.scale(3, 3, 10), M(0.6, 0.24, 0.2, 0.5)),
          D(H(32, 1), y(0, 3, -5).scale(3, 4, 10).rotate(90, 0), M(0.6, 0.24, 0.2, 0.5)),
          D(H(5), y(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), M(0.6, 0.24, 0.2, 0.5)),
          D(H(5), y(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), M(0.6, 0.24, 0.2, 0.5)),
        ),
        y(f - 100, 0.7, 97),
      );
      c(H(12, 1), y(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), M(0.6, 0.24, 0.2, 0.5));
      [7.2, 1.5].map(C => c(H(15, 1), y(-7.5 * f - 100, C + 0.7, 96).scale(1.1, 0.5, 1.1), M(0.5, 0.24, 0.2, 0.4)));
      c(m, y(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(m, y(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      pb(5, C => c(m, y(18.5 * (r - 0.5), 0, 4.8 * C - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2)));
    });
    c(P(
      D(H(), y(-82.07, 0.8, 106).scale(11, 0.9, 2.2), M(0.7, 0.7, 0.7, 0.1)),
      D(H(45, 1), y(-81, 0.7, 106).scale3d(7.7), M(0.7, 0.7, 0.7, 0.1)),
    ));
    c(H(), y(-58, 1, 106).scale(2, 0.65, 2), M(0.7, 0.7, 0.7, 0.2));
    c(H(), y(-50.7, 1, 99).scale(2, 0.65, 1), M(0.7, 0.7, 0.7, 0.2));
    c(H(), y(-42, 0.4, 91).scale(5, 1, 2.5), M(0.7, 0.7, 0.7, 0.3));
    c(H(), y(-34.2, 0.4, 91).scale(3, 1, 3), M(0.7, 0.7, 0.7, 0.3));
    c(H(5), y(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), M(0.2, 0.5, 0.5, 0.6));
    Mb(y(-34, 2.7, 96).rotate(-12, 0));
    c(P(
      $b(
        D(H(6, 0, 0, 0.6), y(-100, 0.7, 105.5).scale(8, 1, 11), M(0.7, 0.7, 0.7, 0.2)),
        D(H(), y(-101.5, 0.7, 93.5).scale(10.5, 1, 2), M(0.7, 0.7, 0.7, 0.2)),
      ),
      D(H(5), y(-100, 0.7, 113).scale(4, 3, 4), M(0.7, 0.7, 0.7, 0.2)),
    ));
    pb(3, f => {
      c(p(16), y(-77, -9, -12 * f - 20).rotate(0, 90), M(0.6, 0.6, 0.6, 0.3));
      c(p(16), y(12 * f - 109, -9, -12), M(0.6, 0.6, 0.6, 0.3));
      c(
        p(24.7 - 0.7 * (1 & f)),
        y(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
        1 & f ? M(0.5, 0.5, 0.5, 0.3) : M(0.35, 0.35, 0.35, 0.5),
      );
    });
    c(P(
      D(H(6, 0, 0, 0.3), y(0, -0.92, 95).scale(14, 2, 14), M(0.8, 0.8, 0.8, 0.2)),
      D(H(5), y(0, 0, 95).scale3d(6), M(0.3, 0.3, 0.3, 0.5)),
    ));
    Mb(y(0, 1.7, 82).rotate(0, 180));
    c(H(5), y(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), M(0.5, 0.3, 0.3, 0.4));
    c(H(6), y(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), M(0.5, 0.6, 0.7, 0.3));
    c(H(), y(0, 16, 127.8).scale(1.5, 1, 0.7), M(0.5, 0.6, 0.7, 0.3));
    c(H(7), y(0, 15.1, 133).scale(5, 2, 5), M(0.4, 0.5, 0.6, 0.4));
    c(P(
      $b(
        D(H(), y(0, 16, 110.5).scale(12, 1, 3), M(0.5, 0.3, 0.3, 0.4)),
        D(H(), y(0, 16, 111).scale(3, 1, 3.8), M(0.5, 0.3, 0.3, 0.4)),
      ),
      D(H(5), y(0, 16, 103.5).scale(5.5, 5, 5.5), M(0.5, 0.3, 0.3, 0.4)),
    ));
    Rb(y(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Rb(y(0, 2.8), [5, 10, 3], [-5, 10, 3], ...sb(18).map(({ x: f, z: r }) => [7 * f, 10 * r, 4.5 - 2 * Ya(f)]));
    Rb(y(0, 3, 95), ...sb(9).map(({ x: f, z: r }) => [9 * f, 9 * r, 4]));
    Rb(y(0, 19, 134), [0, 0, 3.5]);
    Rb(y(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Rb(y(-89, 0.2, 80), [0, 0, 6]);
    Rb(y(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Rb(y(-115, 0.2, -12), [0, 0, 3.5]);
    Rb(y(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    N();
    c(H(5), y(0, -0.2).scale(5, 1, 5), M(0.6, 0.65, 0.7, 0.3));
    Mb(y(0, 1.2));
    pb(2, () => {
      N();
      Na.map(({ x: f, z: r }) => {
        c(H(11, 1), y(4 * f, 4, 4 * r).scale(0.8, 3, 0.8), M(0.5, 0.3, 0.7, 0.6));
        c(H(), y(4 * f, 7, 4 * r).scale(1, 0.3), M(0.5, 0.5, 0.5, 0.3));
      });
      c(P(
        D(H(), w.scale(5, 1, 5), M(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(f => D(H(25, 1), y(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), M(0.8, 0.8, 0.8, 0.3))),
      ));
      c(H(), y(0, -3).scale(8, 2, 8), M(0.4, 0.4, 0.4, 0.3));
    });
    N();
    c(P(
      $b(
        D(H(), w.scale(1.5, 1, 5), M(0.9, 0.9, 0.9, 0.2)),
        D(H(6), w.scale(4, 1, 5), M(0.9, 0.9, 0.9, 0.2)),
        D(H(), y(0, -2).scale(2, 3.2, 1.9), M(0.3, 0.8, 0.5, 0.5)),
        D(H(16, 1, 0, 4), w.scale(1, 1, 1.5).rotate(0, 90), M(0.9, 0.9, 0.9, 0.2)),
      ),
      D(H(), w.scale(1.3, 10, 1.3), M(0.2, 0.7, 0.4, 0.6)),
    ));
    Rb(y(0, 2.8), [0, 0, 4.5]);
    N();
    c(H(3), y(-23, -1.7, 55.8).scale(5, 0.7, 8.3), M(0.3, 0.6, 0.6, 0.2));
    c(H(8), y(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), M(0.8, 0.8, 0.8, 0.2));
    c(H(), y(-23, -3, 55).scale(5.2, 1.7, 3), M(0.5, 0.5, 0.5, 0.3));
    c(H(), y(-23, -2.2, 62).scale(3, 1, 4), M(0.5, 0.5, 0.5, 0.3));
    Mb(y(-23, -0.5, 66.5));
    N();
    c(H(), y(-22.55, -3, 55).scale(1.45, 1.4, 2.7), M(0.7, 0.7, 0.7, 0.2));
    c(P(D(H(), w.scale(3, 1.4, 2.7)), D(H(), w.scale(1.2, 8, 1.2))), y(-33, -3, 55), M(0.7, 0.7, 0.7, 0.2));
    N();
    c(P(
      D(H(), y(-27, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2)),
      D(H(), y(-27, -3, 55).scale(1, 3), M(0.9, 0.9, 0.9, 0.2)),
    ));
    c(H(), y(-39, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2));
    N();
    c(H(6), y(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), M(0.7, 0.7, 0.7, 0.4));
    N();
    [0, 12, 24].map(f =>
      c(H(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.2, 0.5, 0.6, 0.2))
    );
    N();
    [6, 18].map(f =>
      c(H(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.1, 0.4, 0.5, 0.2))
    );
    N();
    c(
      P(
        $b(
          D(H(5), y(0, 2).scale(5, 7, 5).skewY(8), M(0.2, 0.4, 0.5, 0.5)),
          D(H(5), y(0, 6).scale(1.1, 7, 1.1).skewY(-8), M(0.25, 0.35, 0.5, 0.5)),
          D(H(5), y(0, 9).scale(0.6, 7, 0.6).skewY(8), M(0.35, 0.3, 0.5, 0.5)),
        ),
        D(H(5), w.scale(4, 8, 4), M(0.2, 0.4, 0.5, 0.5)),
        D(H(5), y(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), M(0.2, 0.4, 0.5, 0.5)),
      ),
      y(-38.9, -11.3, 17),
    );
    Rb(y(-39.1, -0.6, 17).rotate(11), ...sb(15).map(({ x: f, z: r }) => [3 * f, 3 * r, 1.2]));
    N();
    pb(2, f => c(B, y(9 * f - 110 + (1 & f), 1.9, -12)));
    N();
    pb(2, f => c(B, y(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    N();
    pb(3, f => c(B, y(9 * f - 106, 1.9, -12)));
    pb(4, f => {
      N();
      c(
        H(6),
        y(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        M(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [M(0.1, 0.55, 0.45, 0.2), M(0.2, 0.5, 0.5, 0.3), M(0.3, 0.45, 0.55, 0.4)].map((f, r) => {
      N();
      c(H(), y(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
      2 === r && c(H(), y(-29.1, 0.4, 91).scale(2.1, 1, 3), M(0.7, 0.7, 0.7, 0.3));
      1 === r && c(H(), y(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), M(0.6, 0.6, 0.7, 0.3));
    });
    N();
    c(H(5), w.scale(5, 1.1, 5), M(0.5, 0.3, 0.3, 0.4));
    c(H(5), w.scale(5.5, 0.9, 5.5), M(0.25, 0.25, 0.25, 0.4));
    Mb(y(0, 1.5, -1).rotate(0, 180));
    pb(4, f => {
      N();
      pb(
        7,
        r => c(D(H(9, 1), y((2 < f ? 3.5 : 4) * (r / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), M(0.3, 0.3, 0.38))),
      );
    });
    N();
    c(x);
    N();
    c(H(15, 1), y(-7.5).rotate(0, 90).scale(3, 2.3, 3), M(0.4, 0.4, 0.4, 0.3));
    c(H(10), y(-7.5).rotate(0, 90).scale(2, 2.5, 2), M(0.3, 0.8, 0.7, 0.3));
    c(H(5), y(-7.5).rotate(0, 90).scale(1, 3), M(0.5, 0.5, 0.5, 0.5));
    Mb(y(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => c(m, w.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(P(D(H(10), w.scale(6, 2, 6), M(0.1, 0.6, 0.5, 0.3)), D(H(10), w.scale(3.3, 6, 3.3), M(0.1, 0.6, 0.5, 0.5))));
    Rb(y(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    N();
    c(H(3), y(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), M(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      c(H(6), y(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), M(0.7, 0.7, 0.7, 0.4));
      c(H(), y(0, 6.2, f + 95).scale(0.5, 11, 0.5), M(0.5, 0.3, 0.3, 0.4));
    });
    N();
    c(P(
      D(H(45, 1), w.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)),
      D(H(), y(0, 0, -5.5).scale(1.5, 3, 2.7), M(0.45, 0.45, 0.45, 0.2)),
    ));
    c(H(8), y(0, 2).scale(3, 1.5, 3).rotate(0, 22), M(0.7, 0.7, 0.7, 0.1));
    c(H(5), y(0, 2).scale(1, 2), M(0.3, 0.3, 0.3, 0.2));
    Rb(y(0, 3), ...sb(14).map(({ x: f, z: r }) => [5.6 * f, 5.6 * r, 2]));
    N();
    [-1, 1].map(f => c(m, w.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    c(P(D(H(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), D(H(), w.scale(9, 5, 2), M(0.3, 0, 0, 0.3))));
    c(D(H(28, 1), w.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(D(H(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    N();
    c(P(
      D(H(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)),
      D(H(), y(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)),
      D(H(), y(0, 0, 7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),
    ));
    c(D(H(28, 1), w.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(D(H(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    N();
    c(P(
      D(H(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)),
      D(H(), y(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)),
      D(H(), y(0, 0, -7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),
    ));
    c(D(H(28, 1), w.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(D(H(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    pb(2, () => {
      N();
      c(P(
        D(H(30, 1, 1.15, 1), y(0, -3).scale(3.5, 1, 3.5), M(0.7, 0.4, 0.25, 0.7)),
        D(H(30, 1, 1.3, 1), y(0, -2.5).scale(2.6, 1, 3), M(0.7, 0.4, 0.25, 0.2)),
        D(H(), y(4, -1.2).scale3d(2), M(0.7, 0.4, 0.25, 0.3)),
      ));
      Mb(y(0, -3, 4));
    });
    N();
    c(wb(20), y(0, 1).scale3d(0.5), M(1, 0.3, 0.4));
    c(wb(30), w.scale(0.65, 0.8, 0.55), M(1, 0.3, 0.4));
    c(H(), y(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), M(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      c(m, w.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), M(1, 1, 0.8));
      c(
        D(P(H(15, 1), D(H(), y(0, 0, 1).scale(2, 2, 0.5))), w.rotate(-90, 0).scale(0.1, 0.05, 0.1), M(0.3, 0.3, 0.3)),
        y(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map(f => {
      N();
      c(H(20, 1), y(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), M(1, 0.3, 0.4));
    });
    N();
    c(
      wb(30, 24, (f, r, C) => {
        const I = r / 24, K = f * Math.PI * 2 / 30, F = Math.sin(I ** 0.6 * Math.PI / 2);
        f = I * I * Math.sin(f * Math.PI * 14 / 30) / 4;
        return 23 < r
          ? { x: C.C = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(K) * F,
            y: Math.cos(I * Math.PI) - I - f,
            z: Math.sin(K) * F + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      w.scale(0.7, 0.7, 0.7),
      M(1, 1, 1),
    );
    [-1, 1].map(f => c(wb(12), y(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    N();
    c(H(6, 1), w.scale(0.12, 1.2, 0.12), M(0.3, 0.3, 0.5, 0.1));
    c(H(10), y(0, 0.8).scale(0.2, 0.3, 0.2), M(1, 0.5, 0.2));
    c(H(3), y(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), M(0.2, 0.2, 0.2, 0.1));
  });
});
