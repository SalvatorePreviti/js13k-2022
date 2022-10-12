let aa,
  ba,
  ca,
  ea,
  fa,
  ha,
  ia,
  la,
  ma,
  na,
  pa,
  qa,
  c,
  ra,
  ta,
  ua,
  va,
  wa,
  xa,
  d = 0,
  ya = 0,
  za = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 14,
  Ja = 0.1;
const Ka = Math.PI / 180;
var La = 0, Ma = 180, Na = 0, Oa = 0, Pa = 0;
const e = [],
  h = [],
  Ta = [],
  Ua = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Va = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Wa = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Xa = NO_INLINE(b => 0 > b ? -b : b),
  Ya = NO_INLINE((b, a) => b < a ? b : a),
  Za = NO_INLINE((b, a) => a < b ? b : a),
  $a = (b, a) => Xa(b) > a ? b : 0,
  ab = (b, a = 0, g = 1) => b < a ? a : g < b ? g : b,
  bb = b => Math.atan2(Math.sin(b * Ka), Math.cos(b * Ka)) / Ka,
  cb = (b, a, g) => b + (2 * (a = (a - b) % 360) % 360 - a) * ab(g) || 0,
  db = (b, a, g) =>
    (0 < g ? 1 > g ? b + (a - b) * g : a : b)
    || 0,
  eb = (b, a) => (b = ab(b), db(b, 1 - b, a)),
  fb = (b, a, g = 0) => (b * b + a * a + g * g) ** 0.5,
  hb = (
    b,
    a = gb,
    g = 0,
  ) => (g *= 16,
    a[g++] = b.m11,
    a[g++] = b.m12,
    a[g++] = b.m13,
    a[g++] = b.m14,
    a[g++] = b.m21,
    a[g++] = b.m22,
    a[g++] = b.m23,
    a[g++] = b.m24,
    a[g++] = b.m31,
    a[g++] = b.m32,
    a[g++] = b.m33,
    a[g++] = b.m34,
    a[g++] = b.m41,
    a[g++] = b.m42,
    a[g++] = b.m43,
    a[g] = b.m44,
    a),
  ib = (
    b = l,
    a = u,
  ) => (a.m11 = b.m11,
    a.m12 = b.m12,
    a.m13 = b.m13,
    a.m14 = b.m14,
    a.m21 = b.m21,
    a.m22 = b.m22,
    a.m23 = b.m23,
    a.m24 = b.m24,
    a.m31 = b.m31,
    a.m32 = b.m32,
    a.m33 = b.m33,
    a.m34 = b.m34,
    a.m41 = b.m41,
    a.m42 = b.m42,
    a.m43 = b.m43,
    a.m44 = b.m44,
    a),
  nb = (b = 0, a = 0, g = 0, k = 1) => {
    jb = u.m11 * b + u.m21 * a + u.m31 * g + u.m41 * k;
    kb = u.m12 * b + u.m22 * a + u.m32 * g + u.m42 * k;
    lb = u.m13 * b + u.m23 * a + u.m33 * g + u.m43 * k;
    mb = u.m14 * b + u.m24 * a + u.m34 * g + u.m44 * k;
  };
var jb, kb, lb, mb;
const y = NO_INLINE((b, a, g) => l.translate(b, a, g)),
  ob = (b, a) => Array.from(Array(b), (g, k) => a(k)),
  pb = (b, a, g) => (b.B = g, b.u = a, b),
  qb = (b, a, g = b.u) => (ib(a), pb(b.map(({ x: k, y: q, z: m }) => (nb(k, q, m), { x: jb, y: kb, z: lb })), g, b.B)),
  D = (b, a, g) => b.map(k => qb(k, a, g)),
  rb = (b, a = 0) =>
    ob(b, g => {
      const k = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: 0.01 > Xa(k) ? k : 0 > k ? k - a : k + a };
    }),
  sb = (b, a, g) =>
    b.map((k, q, { length: m }) => pb([k, a[m - q - 1], a[m - (q + 1) % m - 1], b[(q + 1) % m]], b.u, g)),
  J = (
    b,
    a,
    g = 0,
    k,
  ) => (b = b ? rb(b, k) : Ua,
    k = qb(b, y(0, 1).scale3d(0 < g ? g : 1)),
    b = qb(b, y(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...sb(b, k, a), k, b]),
  vb = (
    b,
    a = b,
    g = (
      k,
      q,
    ) => (q *= Math.PI / a,
      { x: Math.cos(k *= 2 * Math.PI / b) * Math.sin(q), y: Math.cos(q), z: Math.sin(k) * Math.sin(q) }),
  ) => {
    const k = [];
    for (let q = 0; b > q; q++) {
      for (let m = 0; a > m; m++) {
        const C = pb([], 0, 1);
        k.push(C);
        C.push(g(q, m, C));
        m && C.push(g((q + 1) % b, m, C));
        a - 1 > m && C.push(g((q + 1) % b, m + 1 % a, C));
        C.push(g(q, m + 1 % a, C));
      }
    }
    return k;
  },
  wb = NO_INLINE(b => 1 - Math.exp(-za * b)),
  N = NO_INLINE((b, a, g) => db(b, a, wb(g))),
  xb = b => {
    h4.innerHTML += ".";
    setTimeout(b);
  },
  yb = b => Math.sin(b * Math.PI * 2),
  zb = b => 0.5 > b % 1 ? 1 : -1,
  Ab = b => b % 1 * 2 - 1,
  Db = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b,
  Eb = b => {
    let a = 0;
    const g = () => {
        let m = 0;
        const C = V => {
            let U, da, Qa, ja = 0, ka = 0;
            const Z = [],
              sa = new Int32Array(768 * V),
              ac = 2 ** (v - 9) / V,
              bc = Math.PI * 2 ** (r - 8) / V,
              Bb = A * V & -2;
            for (let tb = 0; 11 >= tb; ++tb) {
              for (
                let ub = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * a + tb];
                32 > ub;
                ++ub
              ) {
                const Nb = (32 * tb + ub) * V;
                for (var oa = 0; 4 > oa; ++oa) {
                  if (U = 0, Mb && (U = B[Mb - 1].charCodeAt(ub + 32 * oa) - 40, U += 0 < U ? 106 : 0), U) {
                    var Aa;
                    if (!(Aa = Z[U])) {
                      Aa = U;
                      let W = void 0, Ba = void 0;
                      var Ob = U;
                      let cc = 0, dc = 0;
                      const ec = 2 > a ? Ab : yb, fc = 2 > a ? 1 > a ? zb : Db : yb, Pb = new Int32Array(x + F + S);
                      for (let Ra = 0, Cb = 0; x + F + S > Ra; ++Ra, ++Cb) {
                        let Sa = 1;
                        x > Ra ? Sa = Ra / x : x + F > Ra || (Sa = (1 - (Sa = (Ra - x - F) / S)) * 3 ** (-G / 16 * Sa));
                        0 > Cb
                          || (Cb -= 4 * V,
                            Ba = 0.00396 * 2 ** ((Ob + p - 256) / 12),
                            W = 0.00396 * 2 ** ((Ob + M - 256) / 12) * (1 + (a ? 0 : 0.0072)));
                        Pb[Ra] = 80
                            * (ec(cc += Ba * Sa ** (H / 32)) * f + fc(dc += W * Sa ** (n / 32)) * O
                              + (z ? (2 * Math.random() - 1) * z : 0))
                            * Sa | 0;
                      }
                      Aa = Z[Aa] = Pb;
                    }
                    for (let W = 0, Ba = 2 * Nb; Aa.length > W; ++W, Ba += 2) {
                      sa[Ba] += Aa[W];
                    }
                  }
                }
                for (let W, Ba = 0; V > Ba; ++Ba) {
                  Aa = 0;
                  oa = 2 * (Nb + Ba);
                  var Ca = (((W = sa[oa]) || Qa)
                    && (da = 0.00308 * E,
                      1 !== a && 4 !== a || (da *= Math.sin(ac * oa * Math.PI * 2) * I / 512 + 0.5),
                      da = 1.5 * Math.sin(da),
                      ja += da * ka,
                      Ca = (1 - L / 255) * (W - ka) - ja,
                      ka += da * Ca,
                      W = 4 === a ? ka : 3 === a ? Ca : ja,
                      a || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= P / 32,
                      Qa = 1e-5 < W * W,
                      Ca = Math.sin(bc * oa) * t / 512 + 0.5,
                      Aa = W * (1 - Ca),
                      W *= Ca),
                    oa < Bb || (Aa += sa[1 + oa - Bb]
                      * w / 255,
                      W += sa[oa - Bb] * w / 255),
                    m + oa >> 1);
                  k[Ca] += (sa[oa] = Aa) / 65536;
                  q[Ca] += (sa[++oa] = W) / 65536;
                }
              }
            }
            m += 768 * V;
          },
          B = Va[a],
          [f, p, H, O, M, n, z, x, F, K, G, v, E, L, P, t, r, w, A, I] = Wa[a],
          S = 4 * K ** 2;
        C(5513);
        C(4562);
        C(3891);
        xb(5 > ++a ? g : b);
      },
      k = (ca = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      q = ca.getChannelData(1);
    xb(g);
  },
  Fb = (b, a, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (a + b) / (b - a), -1, 0, 0, 2 * a * b / (b - a), 0]),
  Gb = () => {
    let b, a, g, k, q, m, C, B, f, p, H, O, M, n, z, x, F = !0;
    const K = [],
      G = () => {
        b4.innerHTML = "Music: " + F;
        x && (ba || !F ? x.disconnect() : x.connect(z.destination));
      },
      v = () => {
        const t = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ia = [Fb(0.3, 55, t, 1.732051), Fb(55, 181, t, 1.732051)];
        ha = Fb(0.3, 181, t, 1.732051);
        k = B = void 0;
        K.length =
          ea =
          n =
          O =
          M =
          Da =
          Ea =
            0;
        document.hidden && E(!0);
      },
      E = t => {
        if (ba !== t) {
          if (ba = t, v(), document.body.className = t ? "l m" : "l", t) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          G();
        }
      },
      L = t => {
        try {
          z || (z = new AudioContext(), (x = z.createBufferSource()).buffer = ca, x.loop = !0, x.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        E(!1);
        fa = t;
      },
      P = (t, r) => t.buttons[r]?.pressed || 0 < t.buttons[r]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      L();
    };
    b2.onclick = () => {
      L(1);
    };
    b5.onclick = () => E(!0);
    b4.onclick = () => {
      F = !F;
      G();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
    };
    onclick = t => {
      if (!ba && (t.target === hC && (ea = 1), fa)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = t => {
      let r;
      t.repeat
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
        }[t.code],
          (K[r] = !!t.type[5] && !0) && (0 === r && (ea = 1), 1 === r && E(!0)));
    };
    onmousemove = ({ movementX: t, movementY: r }) => {
      fa && (t || r) && (Ma += 0.1 * t, La += 0.1 * r);
    };
    hC.ontouchstart = t => {
      if (!ba) {
        for (let { pageX: r, pageY: w, identifier: A } of t.changedTouches) {
          fa && r > hC.clientWidth / 2
            ? void 0 === B && (f = 0, m = r, C = w, B = A, H = La, p = Ma)
            : void 0 === k && (q = 0, a = r, g = w, k = A);
        }
        b = ya;
      }
    };
    hC.ontouchmove = t => {
      if (!ba) {
        for (let { pageX: S, pageY: V, identifier: U } of t.changedTouches) {
          var r, w, A, I;
          B === U && (La = H + (V - C) / 2.3, Ma = p + (S - m) / 2.3, f = 1);
          k === U
            && (U = (a - S) / 19,
              r = Xa(U),
              w = (g - V) / 19,
              A = Xa(w),
              (I = 0.3 < Za(r, A)) && (q = 1),
              O = (I && 0.2 < r) * ab(U, -1),
              M = (I && 0.2 < A) * ab(w, -1),
              2 < r && (a = 19 * (0 > U ? -1 : 1) + S),
              2 < A && (g = 19 * (0 > w ? -1 : 1) + V));
        }
      }
    };
    hC.ontouchend = t => {
      let r;
      document.activeElement === document.body && t.preventDefault();
      for (const w of t.changedTouches) {
        w.identifier === B
          ? (B = void 0, f || (r = 1), f = 0)
          : w.identifier === k
          ? (k = void 0, M = O = 0, q || (r = 1), q = 0)
          : r = 1;
      }
      t.target === hC && r && b && 0.02 < (t = ya - b) && 0.7 > t && (ea = 1);
    };
    la = () => {
      Da = M + (K[4] ? 1 : 0) - (K[5] ? 1 : 0);
      Ea = O + (K[2] ? 1 : 0) - (K[3] ? 1 : 0);
      let t = navigator.getGamepads()[0];
      t
        && (fa && (La += za * $a(t.axes[3], 0.3) * 80, Ma += za * $a(t.axes[2], 0.3) * 80),
          Da += P(t, 12) - P(t, 13) - $a(t.axes[1], 0.2),
          Ea += P(t, 14) - P(t, 15) - $a(t.axes[0], 0.2),
          P(t, 9) && E(!0),
          (t = P(t, 3) || P(t, 2) || P(t, 1) || P(t, 0)) && !n && (ea = 1),
          n = t);
    };
    document.onvisibilitychange = onblur = onresize = v;
    E(!0);
  },
  Hb = (b, a) => {
    1 / 0 > Ja && (Ja = d + a, h4.innerHTML = b);
  },
  Ib = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        ma = Ta.reduce((b, a) => b + a.i, 0)
      ] + " / XIII";
  },
  Jb = () => {
    localStorage["Dante-22"] = JSON.stringify([h.map(b => b.i), Ta.map(b => b.i), Ia, qa, d]);
  },
  Q = NO_INLINE((b, a, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * a << 8 | 255 * b),
  R = NO_INLINE(() => {
    const b = [];
    c = (a, g = l, k) => b.push(...D(a, g, k));
    e.push({ l: new DOMMatrix(), j: b });
  }),
  Kb = b => {
    const a = () => {
        a.g = N(a.g, a.i, 4);
        a.h = N(a.h, a.i, 1);
        ib(g).multiplySelf(b);
        ea && 3 > (nb(), fb(Na - jb, Oa - kb, Pa - lb))
          ? a.i
            ? 0.7 < a.g && (a.i = 0, Ia = k, Hb("* click *", 1), Jb())
            : 0.3 > a.g && (a.i = 1, Ia = k, Hb("* click *", 1), Jb())
          : a.i && 0.8 < a.g && 14 === k && (a.i = 0,
            13 > ma
              ? Hb("Not leaving now, there are souls to catch!", 3)
              : na || (Hb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), na = 1));
        u.rotateSelf(50 * a.g - 25, 0).translateSelf(0, 1).m44 = a.g;
      },
      g = e.at(-1).l,
      k = h.length;
    a.l = g;
    a.D = b;
    h.push(a);
    c(J(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Q(0.4, 0.5, 0.5));
    c(J(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Q(0.4, 0.5, 0.5));
    c(J(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), Q(0.5, 0.5, 0.4));
  },
  Lb = (b, ...a) => {
    let g, k, q, m, C = 0, B = 0, f = 1, p = -1;
    const H = () => {
      if (!H.i) {
        let G, v, E, L, P, t = 1, r = 1 / 0;
        for (let w = 0; a.length > w; w++) {
          let A = a[w], I = fb(M - A[0], n - A[1]);
          t = Ya(t, I / A[2]);
          0 > (I -= A[2]) ? G = 1 : r > I && (r = I, O = A);
        }
        G
          || (v = M - O[0],
            E = n - O[1],
            L = fb(v, E),
            P = Math.atan2(-E, v),
            f && (m = ab(m / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2),
            P += B,
            p = -Math.cos(P),
            C = Math.sin(P),
            0.1 < L && (L = Ya(L, O[2]) / L, M = v * L + O[0], n = E * L + O[1]));
        f = G;
        m = N(m, 3 + 6 * (1 - t), 3 + t);
        z = N(z, M = N(M, M + p, m), m);
        x = N(x, n = N(n, n + C, m), m);
        g = cb(g, Math.atan2(z - k, x - q) / Ka - 180, wb(3));
        ib(F).multiplySelf(b).translateSelf(k = z, 0, q = x).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
        1.6 > (nb(), fb(Na - jb, Oa - kb, Pa - lb))
          && (H.i = 1,
            Hb(
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
              ][ma] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              6,
            ),
            Ib(),
            Jb());
      }
      H.i
        && ib(e[35].l).translateSelf(
          K % 4 * 1.2 - 1.7 + Math.sin(d + K) / 7,
          -2,
          1.7 * (K / 4 | 0) - 5.5 + Xa(K % 4 - 2) + Math.cos(d / 1.5 + K) / 6,
        );
    };
    let O = a[0], [M, n] = O, [z, x] = O;
    const F = e.at(-1).l, K = Ta.length;
    Ta.push(H);
  },
  Qb = b => {
    let a, g = 0, k = 0, q = 0, m = b.at(-1);
    for (a of b) {
      g += (m.y - a.y) * (m.z + a.z), k += (m.z - a.z) * (m.x + a.x), q += (m.x - a.x) * (m.y + a.y), m = a;
    }
    return a = fb(g, k, q), g /= a, k /= a, q /= a, { x: g, y: k, z: q, w: g * m.x + k * m.y + q * m.z };
  },
  Rb = ({ x: b, y: a, z: g }, k) => b * k.x + a * k.y + g * k.z,
  Sb = (b, a) => {
    let g;
    var k, q;
    const m = a.j, C = a.v;
    for (var B = 0; m.length > B; ++B) {
      if (-0.00008 > (g = Rb(b, m[B]) - b.w) ? q = a : 8e-5 < g && (k = a), q && k) {
        k = [];
        q = [];
        B = m.at(-1);
        let f = Rb(B, b) - b.w;
        for (const p of m) {
          g = Rb(p, b) - b.w,
            8e-5 > f && q.push(B),
            -0.00008 < f && k.push(B),
            (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g)
            && (f /= g - f,
              B = { x: B.x + (B.x - p.x) * f, y: B.y + (B.y - p.y) * f, z: B.z + (B.z - p.z) * f },
              k.push(B),
              q.push(B)),
            B = p,
            f = g;
        }
        k = 2 < k.length && { j: pb(k, m.u, m.B), v: C, A: a };
        q = 2 < q.length && { j: pb(q, m.u, m.B), v: C, A: a };
        break;
      }
    }
    return { x: k, y: q };
  },
  Tb = (b, a, g = Qb(a.j)) => {
    let k, q;
    return b
      ? ({ x: k, y: q } = Sb(b, a), k || q || b.j.push(a), k && (b.o = Tb(b.o, k, g)), q && (b.m = Tb(b.m, q, g)))
      : b = { x: g.x, y: g.y, z: g.z, w: g.w, j: [a], o: 0, m: 0 },
      b;
  },
  Ub = (b, a, g) => {
    const k = [],
      q = (m, C) => {
        let { x: B, y: f } = Sb(m, C);
        B || f || (0 < g * Rb(m, a) ? B = C : f = C);
        B && (m.o ? q(m.o, B) : k.push(B));
        f && m.m && q(m.m, f);
      };
    for (const m of a.j) {
      q(b, m);
    }
    return k;
  },
  Vb = (b, a) => b && (a(b), Vb(b.o, a), Vb(b.m, a)),
  Wb = b => (Vb(b, a => {
    const g = a.m;
    a.m = a.o;
    a.o = g;
    a.x *= -1;
    a.y *= -1;
    a.z *= -1;
    a.w *= -1;
    for (const k of a.j) {
      k.v = !k.v;
    }
  }),
    b),
  Xb = b => b.length ? b.reduce((a, g) => Tb(a, { j: g, v: 0, A: 0 }), 0) : b,
  Yb = (...b) =>
    b.reduce((a, g) => {
      const k = [];
      if (a = Xb(a), g) {
        g = Xb(g);
        Vb(a, q => q.j = Ub(g, q, 1));
        Vb(g, q => k.push([q, Ub(a, q, -1)]));
        for (let [q, m] of k) {
          for (const C of m) {
            Tb(a, C, q);
          }
        }
      }
      return a;
    }),
  T = (b, ...a) => {
    const g = m => {
        let C;
        return m.A && ((C = q.get(m.A)) ? (k.delete(C), m = g(m.A)) : q.set(m.A, m)), m;
      },
      k = new Map(),
      q = new Map();
    return b = Wb(Yb(Wb(Xb(b)), ...a)),
      Vb(b, m => {
        for (const C of m.j) {
          k.set(g(C), C.v);
        }
      }),
      Array.from(k, ([{ j: m }, C]) => {
        const B = m.map(({ x: f, y: p, z: H }) => ({ x: f, y: p, z: H }));
        return pb(C ? B.reverse() : B, m.u, m.B);
      });
  },
  X = (b, a = 0, g = 0) => {
    const k = ib(l, e[++ra].l);
    return k.m41 = b, k.m42 = a, k.m43 = g, k;
  },
  gc = () => {
    let b, a, g, k, q, m, C, B, f, p, H, O, M, n, z, x, F = 0, K = 1, G = 2, v = 15;
    const E = (r, w, A, I) => db(r, w, K || (ab(Xa(w - r) ** 0.5 - A) + 1 / 7) * wb(1.5 * I)),
      L = () => ib((G ? h[Ia] : e[28 !== F ? F : 0]).l),
      P = r => {
        1 < G ? (ib(h[Ia].l).multiplySelf(h[Ia].D), nb(0, 0.9 < pa ? 15 : 1, -2.4)) : (L(), nb(n, z, x));
        r && (q = (jb - Na) / za, m = (lb - Pa) / za);
        Na = jb;
        Oa = kb;
        Pa = lb;
      },
      t = () => {
        var r = 0, w = 0, A = 0, I = 0, S = 0, V = 0, U = -1;
        for (var da = 0; 36 > da; ++da) {
          var Qa = 512 * da;
          for (var ja = 96; 416 > ja; ja += 4) {
            for (var ka = 0; 2 > ka; ++ka) {
              var Z = Zb[Qa + ja + ka];
              const sa = Zb[Qa + ja + ka + 2];
              Z > I && (I = Z);
              Z + sa && (0 > U || U === da) && (U = da, sa === p ? ++r : w && w !== sa || (w = sa, ++A));
            }
          }
        }
        p = 0 > U ? 0 : A > 2 * r ? w : p;
        for (r = 36; 128 > r; ++r) {
          da =
            U =
            A =
            w =
              0;
          Qa = 512 * r;
          for (ja = 0; 128 > ja; ++ja) {
            ka = Qa + 4 * ja,
              Z = Zb[ka],
              64 > ja ? Z > w && (w = Z) : Z > A && (A = Z),
              (Z = Zb[2 + ka]) > U && (U = Z),
              Z = Zb[1 + ka],
              64 < ja ? Z > w && (w = Z) : Z > A && (A = Z),
              (Z = Zb[3 + ka]) > da && (da = Z);
          }
          (A -= w) * A > S * S && (S = A);
          (da -= U) * da > V * V && (V = da);
        }
        S *= 0.7;
        B = ab(1 - 0.01 * Za(Xa(S), Xa(V)), 0.3);
        S /= 255;
        I /= 255;
        V /= 255;
        L().invertSelf();
        nb(S, I, V, 0);
        n += jb;
        z += I;
        x += lb;
        P();
      };
    ta = () => {
      P(p);
      $b.r9r(0, 0, 128, 128, 6408, 5121, Zb);
      NO_INLINE(t)();
      !G && p === F || (F = p, L().invertSelf(), nb(Na, Oa, Pa), n = jb, z = kb, x = lb, G = G && (p ? 0 : 1));
      (-20 > Na || 109 > Pa ? -25 : -9) > Oa && (G = 2);
      1 === p && (h[15].i = -15 > Na && 0 > Pa ? 1 : 0);
      k = N(k, ua * (30 < p && 35 > p), 2);
      H = E(H, Na, 0.5, 1);
      O = E(O, f = db(N(f, Oa, 2), Oa, G || 8 * Xa(f - Oa)), 2, 1);
      M = E(M, Pa, 0.5, 1);
      fa
        ? (r = G + wb(18), Fa = db(Fa, Na, r), Ha = db(Ha, Pa, r), Ga = db(Ga, 1.6 + f, r), Ma = bb(Ma))
        : (Fa = E(Fa, H, 1, 2 + k),
          Ha = E(Ha, M + -18 + 5 * k, 1, 2 + k),
          Ga = E(Ga, Za(O + ab((-60 - Pa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          r = Ya(-6, -Xa(M - Ha)),
          w = H - Fa,
          Ma = cb(Ma, 90 - bb(Math.atan2(r, w) / Ka), K + wb(10)),
          La = cb(La, 90 - Math.atan2(fb(r, w), Ga - O) / Ka, K + wb(10)));
      La = ab(La, -87, 87);
      K = 0;
      var r = ab(Da, -1), w = ab(Ea, -1), A = $a(fb(r, w) ** 0.5, 0.1), I = Math.atan2(r, w);
      A && (b = 90 - I / Ka);
      a = cb(a, b, wb(8));
      g = N(g, A, 10);
      X(Na, 0.06 * B * g * Math.cos(18.2 * d) + f, Pa).rotateSelf(0, a);
      for (var S = 0; 2 > S; ++S) {
        const V = 9.1 * d - Math.PI * S;
        ib(e[37].l, X(0)).translateSelf(0, g * ab(0.45 * Math.sin(V - Math.PI / 2))).rotateSelf(
          g * Math.sin(V) * 0.25 / Ka,
          0,
        );
      }
      v = p ? 5 : N(v, G ? 13 : 19 - 2 * Ya(0, Oa + 10), 2.2);
      q = p || G ? 0 : N(q, 0, 3);
      m = p || G ? 0 : N(m, 0, 3);
      r = (C = G ? 0 : N(C, p ? 7 * ab(2 * A) * B : 0, p ? 9 : 1)) * A * Xa(r) * Math.sin(I);
      w = C * A * Xa(w) * Math.cos(I);
      I = fa ? (180 + Ma) * Ka : 0;
      A = za * (q + (Math.cos(I) * w - Math.sin(I) * r));
      S = za * -v;
      r = za * (m + (Math.sin(I) * w + Math.cos(I) * r));
      L().invertSelf();
      nb(A, S, r, 0);
      n += jb;
      z += S;
      x += lb;
      P();
    };
  },
  hc = (b, a, g) => {
    ba
      ? 1100 < hC.width && b.d97(4, e[39].C - e[37].s, 5123, 2 * e[37].s)
      : (b.das(4, e[a].C - e[a].s, 5123, 2 * e[a].s, Ta.length),
        b.das(4, e[40].C - e[40].s, 5123, 2 * e[40].s, h.length),
        b.d97(4, (g ? e[39].C : e[37].s) - 3, 5123, 6));
  },
  jc = b => {
    const a = [{}, {}, {}, {}, {}, {}, {}, {}],
      g = (
        n,
        z,
        x =
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
      ) => {
        const F = {}, K = (v, E) => (E = n.c6x(E), n.s3c(E, v), n.c6a(E), E), G = n.c1h();
        return n.abz(G, K(x, 35633)), n.abz(G, K(z, 35632)), n.l8l(G), v => v ? F[v] || (F[v] = n.gan(G, v)) : n.u7y(G);
      },
      k = n => {
        requestAnimationFrame(k);
        var z = (n - (aa || n)) / 1e3;
        if (ya += z, d += za = ba ? 0 : Ya(0.055, z), aa = n, 0 < za) {
          z = (F, K, G) =>
            X(F + Math.sin(d + 2) / 5, K + Math.sin(0.8 * d) / 5, G).rotateSelf(
              2 * Math.sin(d),
              Math.sin(0.7 * d),
              Math.sin(0.9 * d),
            );
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          qa = N(qa, h[15].h, 0.2 + 0.3 * Xa(2 * h[15].h - 1));
          pa = na ? (fa = 0, N(pa, -9, 0.015)) : N(pa, ab(d / 3), 1);
          la();
          n =
            (ra = 1,
              ua = eb(h[13].g, h[8].g),
              xa = db(N(xa, 0, 1), bb(xa + 60 * za), h[2].g - h[3].h),
              va = db(N(va, 0, 5), bb(va + 56 * za), ua),
              wa = db(N(wa, 0, 4), bb(wa + 48 * za), ua),
              X(0, 270 * (h[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - h[10].g)),
              Ya(1 - h[11].h, h[10].h));
          var x =
            (X(n * Math.sin(0.6 * d + 1.2) * 12, 0, 35),
              X(n * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55),
              X(n * Math.sin(0.6 * d) * 12, 0, 45),
              X(9.8 * (1 - n)),
              n = ab(1 - 5 * n) * eb(h[11].g, h[2].g),
              X(0, n * Math.sin(1.35 * d) * 4),
              X(0, 0, n * Math.sin(0.9 * d) * 8),
              X(0, -6.5 * h[11].h),
              n = eb(h[4].h, h[3].h),
              X(0, n * Math.sin(d) * 5 + 3.5 * (1 - Za(h[3].g, h[4].g))),
              X(0, n * Math.sin(d + 3) * 6, n * Math.sin(0.6 * d + 1) * 6),
              X(0, -7.3 * h[4].h),
              n = eb(h[6].g, h[7].g),
              X(
                0,
                -2,
                10 - 8.5
                    * n * Xa(Math.sin(1.1 * d)),
              ),
              X(0, -2, 10 - 8.5 * n * Xa(Math.sin(2.1 * d))),
              X(0, -2, 10 - 8.5 * Za(n * Xa(Math.sin(1.5 * d)), (1 - h[6].g) * (1 - n))),
              eb(h[5].h, h[13].h));
          for (n = 0; 4 > n; n++) {
            X(
              (2 < n ? 2 * (1 - x) + x : 0) - 100,
              x * Math.sin(1.3 * d + 1.7 * n) * (3 + n / 3) + 0.7,
              115 - 7 * (1 - h[5].h) * (1 - h[13].h) * (1 & n ? -1 : 1)
                + Za(0.05, x) * Math.cos(1.3 * d + 7 * n) * (4 - 2 * (1 - n / 3)),
            );
          }
          n = eb(h[8].h, h[9].h);
          for (let F = 0; 3 > F; ++F) {
            X(0, n * Math.sin(1.5 * d + 1.5 * F) * 4 + (F ? 0 : 3 * (1 - h[8].h) * (1 - h[9].h)));
          }
          n = eb(eb((h[9].g + h[9].h) / 2, h[8].h), (h[12].g + h[12].h) / 2);
          X(0, 16 * n, 95 + 8.5 * ab(2 * n - 1));
          X(0, -4.7 * h[0].g, -15);
          X(0, -4.7 * h[10].g, 15);
          X(-99.7, -1.9 - 5.5 * h[3].g, 63.5);
          X(-100, 0.6 - 5.8 * h[13].g, 96.5);
          X(-75, 3 * (1 - h[2].h) * (1 - h[3].g), 55).rotateSelf(180 * (1 - h[2].h) + xa, 0);
          X(2.5 * (1 - x) - 139.7, -3 * (1 - h[5].g) - x * Math.sin(0.8 * d) - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * d) * (3 + 3 * x),
            0,
          );
          X(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          X(-81, 0.6, 106).rotateSelf(0, 40 + va);
          X(-65.8, 0.8, 106).rotateSelf(0, wa);
          X(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
          X(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
          z(-12, 4.2, 40 * pa - 66);
          z(-123, 1.4, 55 - 65 * qa);
          for (z = 0; 13 > z; ++z) {
            Ta[z](), hb(u, ic, 12 + z);
          }
          for (z = 0; 16 > z; ++z) {
            h[z](), hb(u, ic, 25 + z);
          }
          ta();
          for (z = 0; 12 > z; ++z) {
            hb(e[28 + z].l, ic, z);
          }
          for (let F, K = 0, G = 656; 26 > K; ++K, ++G) {
            F = e[2 + K].l, ic[G++] = F.m41, ic[G++] = F.m42, ic[G++] = F.m43;
          }
          $b.cbf(!0, !0, !0, !0);
          $b.c4s(16640);
          $b.u3a(p("j"), ic);
          $b.cbf(!0, !1, !0, !1);
          $b.uae(p("b"), !1, hb(ib().rotateSelf(0, 180).invertSelf().translateSelf(-Na, -Oa, 0.3 - Pa)));
          hc($b, 41);
          $b.c4s(256);
          $b.cbf(!1, !0, !1, !0);
          $b.uae(p("b"), !1, hb(ib().translateSelf(-Na, -Oa, -Pa - 0.3)));
          hc($b, 41);
          $b.f1s();
          ea = 0;
        }
        f();
        Y.u3a(f("j"), ic);
        Y.b6o(36160, B);
        Y.v5y(0, 0, 2048, 2048);
        Y.ubh(f("g"), 4);
        Y.ubh(f("h"), 4);
        Y.uae(f("a"), !1, hb(l));
        O(54.7);
        hc(Y, 42, !fa);
        M(126);
        hc(Y, 42, !fa);
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.c4s(16640);
        z = Fa;
        x = Ga;
        n = Ha;
        ba
          ? (ib().rotateSelf(0, 40 * Math.sin(ya) - 80, -8),
            hb(u, ic, 9),
            hb(u, ic, 10),
            hb(u, ic, 11),
            ib(ha).invertSelf(),
            nb(3.6, 3.5),
            z = jb,
            x = kb,
            n = 5,
            ib(l, m).rotateSelf(-20, 0).invertSelf().translateSelf(-z, -x, -n).rotateSelf(0, 99))
          : ib(l, m).rotateSelf(-La, -Ma).invertSelf().translateSelf(-z, -x, -n);
        Y.ubh(f("g"), 0);
        Y.ubh(f("h"), 1);
        Y.ubu(f("k"), z, x, n);
        Y.uae(f("a"), !1, hb(ha));
        Y.uae(f("b"), !1, hb(m));
        Y.uae(f("i"), !1, C);
        hc(Y, 42, !fa);
        H();
        Y.uae(H("b"), !1, hb(ib(m).invertSelf()));
        Y.ubu(H("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ya);
        Y.d97(4, 3, 5123, 0);
      },
      q = new DOMMatrix(),
      m = new DOMMatrix(),
      C = new Float32Array(32),
      B = Y.c5w(),
      f = g(
        Y,
        "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ),
      p = g(
        $b,
        "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ),
      H = g(
        Y,
        "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
        "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
      ),
      [O, M] = ob(2, n => {
        const z = Y.c25();
        return Y.a4v(33984 + n),
          Y.b9j(3553, z),
          Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
          Y.t2z(3553, 10241, 9729),
          Y.t2z(3553, 10240, 9729),
          Y.t2z(3553, 34893, 515),
          Y.t2z(3553, 34892, 34894),
          Y.t2z(3553, 10243, 33071),
          Y.t2z(3553, 10242, 33071),
          x => {
            let F = 0, K = 0, G = 0, v = 1 / 0, E = 1 / 0, L = 1 / 0, P = -1 / 0, t = -1 / 0, r = -1 / 0;
            Y.fas(36160, 36096, 3553, z, 0);
            Y.c4s(256);
            ib().scale3dSelf(x *= 1.1).multiplySelf(ib(ia[n], q).multiplySelf(m).invertSelf());
            for (let w = 0; 8 > w; ++w) {
              const A = a[w];
              nb(4 & w ? 1 : -1, 2 & w ? 1 : -1, 1 & w ? 1 : -1);
              F -= A.x = (0 | jb) / (x * mb);
              K -= A.y = (0 | kb) / (x * mb);
              G -= A.z = (0 | lb) / (x * mb);
            }
            ib().rotateSelf(298, 139).translateSelf(F / 8, K / 8, G / 8);
            for (x = 0; 8 > x; ++x) {
              const { x: w, y: A, z: I } = a[x];
              nb(w, A, I);
              P = Za(P, jb);
              t = Za(t, kb);
              r = Za(r, lb);
              v = Ya(v, jb);
              E = Ya(E, kb);
              L = Ya(L, lb);
            }
            x = 10 + n;
            L *= 0 > L ? x : 1 / x;
            r *= 0 < r ? x : 1 / x;
            Y.uae(
              f("b"),
              !1,
              hb(
                ib(l, q).scaleSelf(2 / (P - v), 2 / (t - E), 2 / (L - r)).translateSelf(
                  (P + v) / -2,
                  (t + E) / -2,
                  (L + r) / 2,
                ).multiplySelf(u),
                C,
                n,
              ),
              16 * n,
              16,
            );
          };
      });
    Y.a4v(33986);
    Y.b9j(3553, Y.c25());
    Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, b);
    Y.t2z(3553, 10241, 9987);
    Y.t2z(3553, 10240, 9729);
    Y.gbn(3553);
    Y.b6o(36160, B);
    Y.d45([0]);
    Y.r9l(0);
    f();
    Y.ubh(f("q"), 2);
    H();
    Y.ubh(H("q"), 2);
    Y.c5t(0, 0, 0, 1);
    Y.d4n(515);
    Y.e8z(2929);
    Y.e8z(2884);
    $b.e8z(2929);
    $b.e8z(2884);
    $b.v5y(0, 0, 128, 128);
    p();
    $b.uae(p("a"), !1, hb(Fb(1e-4, 2, 1.2, 0.4)));
    NO_INLINE(Gb)();
    NO_INLINE(gc)();
    requestAnimationFrame(k);
  },
  l = new DOMMatrix(),
  u = new DOMMatrix(),
  gb = new Float32Array(16),
  ic = new Float32Array(760),
  Zb = new Uint8Array(65536),
  kc = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hD\" height=\"128\" width=\"128\"></canvas>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: max(780px, 50vw);\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4,\n#hD {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  Y = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  $b = hD.getContext("webgl2", { powerPreference: "high-performance", antialias: !1, preserveDrawingBuffer: !0 });
for (const b in $b) {
  [Y, $b].map(a => a[b[0] + [...b].reduce((g, k, q) => (g * q + k.charCodeAt(0)) % 434, 0).toString(36)] = a[b]);
}
xb(() => {
  let b = 0;
  const a = () => {
      2 == ++b && NO_INLINE(jc)(g);
    },
    g = new Image();
  g.onerror = g.onload = a;
  g.src = kc;
  NO_INLINE(Eb)(() => {
    xb(() => {
      let f = 0;
      const p = [],
        H = [],
        O = [],
        M = [],
        n = new Int32Array(8),
        z = new Map(),
        x = new Int32Array(n.buffer, 0, 5),
        F = new Float32Array(n.buffer);
      e.map((v, E) => {
        let L;
        const P = t => {
          let { x: r, y: w, z: A } = L[t], I = (F[0] = r, F[1] = w, F[2] = A, t = "" + (L.B ? x : n), z.get(t));
          return void 0 !== I
            ? (r = 3 * I, M[r] = (M[r++] + n[5]) / 2, M[r] = (M[r++] + n[6]) / 2, M[r] = (M[r] + n[7]) / 2)
            : (z.set(t, I = z.size), H.push(r, w, A, F[3]), O.push(n[4]), M.push(n[5], n[6], n[7])),
            I;
        };
        for (L of (F[3] = 40 < E ? -12 : 39 < E ? -25 : E, v.j)) {
          const { x: t, y: r, z: w } = Qb(L);
          n[4] = 0 | L.u;
          n[5] = 32767 * t;
          n[6] = 32767 * r;
          n[7] = 32767 * w;
          for (let A = 2, I = P(0), S = P(1); L.length > A; ++A) {
            p.push(I, S, S = P(A));
          }
        }
        v.j = 0;
        v.s = f;
        v.C = f = p.length;
      });
      [Y, $b].map(v => {
        v.b11(34962, v.c1b());
        v.b2v(34962, new Float32Array(H), 35044);
        v.v7s(0, 4, 5126, !1, 0, 0);
        v.b11(34962, v.c1b());
        v.b2v(34962, new Int16Array(M), 35044);
        v.v7s(1, 3, 5122, !0, 0, 0);
        v.b11(34962, v.c1b());
        v.b2v(34962, new Uint32Array(O), 35044);
        v.v7s(2, 4, 5121, !0, 0, 0);
        v.b11(34963, v.c1b());
        v.b2v(34963, new Uint16Array(p), 35044);
        v.e3x(0);
        v.e3x(1);
        v.e3x(2);
      });
      let K = [], G = [];
      try {
        const [v, E, L, P, t] = JSON.parse(localStorage["Dante-22"]);
        K = v;
        G = E;
        Ia = L;
        qa = P;
        d = t;
      } catch {
      }
      h.map((v, E) => v.g = v.h = v.i = 14 !== E && K[E] ? 1 : 0);
      Ta.map((v, E) => v.i = G[E] ? 1 : 0);
      Ib();
      pa = ma || 14 !== Ia ? 1 : 0;
      xb(a);
    });
    const k = f => y(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f),
      q = f =>
        T(
          D(J(), y(0, -f / 2).scale(6, f - 1, 2.2)),
          D(J(), y(0, -f / 2 - 6).scale(4, f - 3, 4)),
          D(J(28, 1), y(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      m = ob(11, f => sb(qb(rb(16), k(f), Q(1, 1, 0.8, 0.2)).reverse(), qb(rb(16), k(f + 1), Q(1, 1, 0.8, 0.2)), 1))
        .flat(),
      C = [
        ...D(J(), y(0, -3).scale(11, 1.4, 3), Q(0.9, 0.9, 0.9, 0.2)),
        ...D(J(), y(0, -2.2).scale(7.7, 0.5, 4), Q(0.5, 0.5, 0.5, 0.2)),
        ...ob(12, f => D(J(), l.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), Q(0.6, 0.5, 0.3, 0.2))).flat(),
        ...T(
          D(J(6), l.rotate(90).scale(6, 8, 6), Q(0.3, 0.6, 0.6, 0.3)),
          D(J(4, 0, 0.01), y(0, 6).scale(12, 2, 0.75).rotate(0, 45), Q(0.3, 0.6, 0.6, 0.3)),
          D(J(6), l.rotate(90).scale(5, 12, 5), Q(0.3, 0.6, 0.6, 0.3)),
          ...[-5, 0, 5].map(f => D(J(5), y(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Q(0.3, 0.6, 0.6, 0.3))),
        ),
      ],
      B = T(
        D(J(), y(0, -0.5, 1).scale(1.15, 1.2, 6.5), Q(0.25, 0.25, 0.35, 0.3)),
        T(
          D(J(3), y(0, 0, -5.5).scale(3, 2), Q(0.6, 0.3, 0.4, 0.3)),
          D(J(), y(0, 0, -3.65).scale(2.5, 3), Q(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => D(J(), y(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), Q(0.7, 0.2, 0, 0.3))),
      );
    R("MODEL_ID_SKY");
    c([Ua.slice(1)], y(-2).scale3d(3).rotate(90, 0));
    R("MODEL_ID_STATIC_WORLD");
    Kb(y(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, p) => {
      c(J(), y(0, 0, p ? 22 : -23).scale(3, 1, 8), Q(0.9, 0.9, 0.9, 0.2));
      c(J(), y(0, 6.3, f).scale(4, 0.3, 1), Q(0.3, 0.3, 0.3, 0.4));
      c(J(), y(0, 1, f).scale(3, 0.2, 0.35), Q(0.5, 0.5, 0.5, 0.3));
    });
    c(J(), y(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Q(0.8, 0.8, 0.8, 0.2));
    c(J(), y(3, 1.5, -20).scale(0.5, 2, 5), Q(0.7, 0.7, 0.7, 0.2));
    c(J(), y(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Q(0.75, 0.75, 0.75, 0.2));
    c(J(5), y(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Q(0.6, 0.3, 0.3, 0.4));
    c(T(
      Yb(
        D(J(6, 0, 0, 0.3), y(8, -3, -4).scale(13, 1, 13), Q(0.7, 0.7, 0.7, 0.2)),
        T(
          D(J(6, 0, 0, 0.3), y(0, -0.92).scale(13, 2, 13), Q(0.8, 0.8, 0.8, 0.2)),
          D(J(), l.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), Q(0.5, 0.5, 0.5, 0.5)),
        ),
        D(
          J(),
          l.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          Q(0.8, 0.2, 0.2, 0.5),
        ),
        D(J(6), y(0, -8).scale(9, 8, 7), Q(0.2, 0.1, 0.4, 0.5)),
      ),
      D(J(5), l.scale(5, 30, 5), Q(0.4, 0.2, 0.6, 0.5)),
      D(J(5, 0, 1.5), y(0, 1).scale(4.5, 0.3, 4.5), Q(0.7, 0.5, 0.9, 0.2)),
      D(J(6), y(15, -1.5, 4).scale(3.5, 1, 3.5), Q(0.5, 0.5, 0.5, 0.5)),
    ));
    Kb(y(15, -2, 4));
    c(J(), y(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2));
    Kb(y(-55, -1.1, 46).rotate(0, 90));
    c(J(7), y(-57, -2.6, 46).scale(4, 1, 4), Q(0.8, 0.8, 0.8, 0.3));
    c(J(6), y(-61.3, -2.4, 49).scale(3, 1, 5), Q(0.4, 0.6, 0.6, 0.3));
    c(C, y(-53, 0, 55));
    c(J(), y(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), Q(0.7, 0.7, 0.7, 0.2));
    c(J(3, 0, -0.5), y(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Q(0.8, 0.8, 0.8, 0.2));
    c(T(
      Yb(
        D(J(), y(-100, -2.4, 55).scale(8, 0.9, 8), Q(0.8, 0.8, 0.8, 0.2)),
        D(J(), y(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Q(0.8, 0.8, 0.8, 0.2)),
        D(J(), y(-100, -2.6, 70).scale(3, 1.1, 7), Q(0.8, 0.8, 0.8, 0.2)),
        D(J(), y(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), Q(0.8, 0.8, 0.8, 0.2)),
        D(J(6), y(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Q(0.6, 0.6, 0.6, 0.3)),
        D(J(), y(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Q(0.8, 0.8, 0.8, 0.2)),
        D(J(), y(-100, 0.42, 92).scale(3, 1.1, 4.1), Q(0.8, 0.8, 0.8, 0.2)),
      ),
      D(J(8), y(-100, -1, 55).scale(7, 0.9, 7), Q(0.3, 0.3, 0.3, 0.4)),
      D(J(8), y(-100, -2, 55).scale(4, 0.3, 4), Q(0.4, 0.4, 0.4, 0.5)),
      D(J(8, 0, -3.1), y(-100, -3, 55).scale(0.4, 1, 0.4), Q(0.4, 0.4, 0.4, 0.5)),
    ));
    c(T(
      D(J(), y(-100, 1, 63).scale(7.5, 4), Q(0.5, 0.5, 0.5, 0.4)),
      D(J(), y(-100, 0, 70).scale(2, 2, 10), Q(0.5, 0.5, 0.5, 0.4)),
      D(J(20, 1), y(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Q(0.5, 0.5, 0.5, 0.4)),
    ));
    Ua.map(({ x: f, z: p }) => {
      c(J(6), y(3 * f, 3, 15 * p).scale(0.7, 4, 0.7), Q(0.6, 0.3, 0.3, 0.4));
      c(J(6), y(7 * f - 100, -3, 7 * p + 55).scale(1, 8.1), Q(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(H => c(J(6), y(7 * f - 100, H, 7 * p + 55).scale(1.3, 0.5, 1.3), Q(0.4, 0.2, 0.2, 0.8)));
      c(J(14, 1), y(9 * f - 38.9, -7.3, 11 * p + 17).scale(1, 4), Q(0.25, 0.25, 0.25, 1));
      [1.5, 8].map(H =>
        c(J(17, 1), y(9 * f - 38.9, H - 11.3, 11 * p + 17).scale(1.5, 0.5, 1.5), Q(0.6, 0.6, 0.6, 0.3))
      );
    });
    ob(7, f => {
      c(
        J((23 * f + 1) % 5 + 5, 0, 0.5),
        y(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
        Q(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    c(J(), y(-87, -9.5, 24).scale(7, 1, 3), Q(0.4, 0.5, 0.6, 0.4));
    c(J(4), y(-86, -9.2, 27).scale(5, 1, 5), Q(0.5, 0.6, 0.7, 0.3));
    c(J(12, 1), y(-86, -9, 31).scale(1.5, 1, 1.5), Q(0.3, 0.3, 0.4, 0.1));
    Kb(y(-86, -7.5, 31));
    c(
      T(
        Yb(
          D(J(5), y(0, 0, -7).scale(2, 1.2, 2), Q(0.2, 0.4, 0.7, 0.3)),
          D(J(5), l.scale(9, 1.2, 9), Q(0, 0.2, 0.3, 0.5)),
          D(J(), l.scale(11, 1, 13), Q(0.3, 0.4, 0.6, 0.3)),
        ),
        D(J(5), l.scale(5.4, 5, 5.4), Q(0, 0.2, 0.3, 0.5)),
      ),
      y(-38.9, -11.3, 17),
    );
    Kb(y(-38.9, -9.6, 10));
    c(
      T(
        Yb(
          D(J(6), y(0, 0, -18).scale(15, 1.2, 15), Q(0.7, 0.7, 0.7, 0.3)),
          D(J(), l.scale(4, 1.2, 6), Q(0.45, 0.4, 0.6, 0.3)),
        ),
        ...ob(6, f =>
          ob(6, p =>
            D(
              J(6),
              y(4.6 * p - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * p) - 32).scale(2, 5, 2),
              Q(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      y(-38.9, -11.3, -1),
    );
    c(J(5), y(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), Q(0.8, 0.1, 0.25, 0.4));
    Kb(y(-84, -0.7, 85).rotate(0, 45));
    c(
      T(
        Yb(D(J(), y(26.5, -1.6, 10).scale(20, 2.08, 3)), D(J(), y(26.5, -0.5, 10).scale(19, 2, 0.5))),
        ...ob(4, f => D(J(), y(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
        ...ob(3, f => D(J(), y(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
      ),
      y(-123, 0.2, -12),
      Q(0.5, 0.5, 0.6, 0.2),
    );
    Kb(y(-116, -1.4, -18).rotate(0, 180));
    c(J(6), y(-116, -2.6, -16.5).scale(3.2, 0.8, 3), Q(0.6, 0.5, 0.7, 0.2));
    c(J(), y(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Q(0.8, 0.8, 0.8, 0.2));
    c(J(), y(-115.5, -17, -12).scale(0.5, 15, 2.2), Q(0.6, 0.6, 0.6, 0.3));
    c(J(8), y(-114, -17, -2).scale(2, 15, 2), Q(0.6, 0.6, 0.6, 0.3));
    c(J(8), y(-79, -17, -2).scale(2, 15, 2), Q(1, 1, 1, 0.3));
    c(J(), y(-77, -17, -50.5).scale(2.2, 15, 0.5), Q(0.6, 0.6, 0.6, 0.3));
    c(T(
      D(J(12), y(-77, -14.5, -12).scale(4, 17.5, 4), Q(0.7, 0.7, 0.7, 0.2)),
      D(J(12), y(-77, 3.1, -12).scale(3, 5, 3), Q(0.4, 0.5, 0.6, 0.2)),
      D(J(), y(-79, 0.1, -12).scale(3.5, 2, 1.3), Q(0.4, 0.5, 0.6, 0.2)),
      D(J(), y(-77, 0.1, -14).scale(1.5, 2, 2), Q(0.4, 0.5, 0.6, 0.2)),
    ));
    c(T(
      D(J(), y(-93, -5.8, -40).scale(9, 1, 5), Q(0.8, 0.8, 0.8, 0.1)),
      D(J(9), y(-98, -5.8, -40).scale(3, 8, 3), Q(0.7, 0.7, 0.7, 0.2)),
    ));
    c(J(), y(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), Q(0.6, 0.6, 0.6, 0.3));
    c(J(9), y(-98, -18.4, -40).scale(2.5, 13.5, 2.5), Q(0.5, 0.5, 0.5, 0.3));
    Kb(y(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, p) => {
      c(
        T(
          D(J(), y(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), Q(0.5, 0.5, 0.5, 0.4)),
          D(J(), l.scale(3, 3, 10), Q(0.6, 0.24, 0.2, 0.5)),
          D(J(32, 1), y(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Q(0.6, 0.24, 0.2, 0.5)),
          D(J(5), y(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Q(0.6, 0.24, 0.2, 0.5)),
          D(J(5), y(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), Q(0.6, 0.24, 0.2, 0.5)),
        ),
        y(f - 100, 0.7, 97),
      );
      c(J(12, 1), y(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), Q(0.6, 0.24, 0.2, 0.5));
      [7.2, 1.5].map(H => c(J(15, 1), y(-7.5 * f - 100, H + 0.7, 96).scale(1.1, 0.5, 1.1), Q(0.5, 0.24, 0.2, 0.4)));
      c(m, y(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(m, y(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      ob(5, H => c(m, y(18.5 * (p - 0.5), 0, 4.8 * H - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2)));
    });
    c(T(
      D(J(), y(-82.07, 0.8, 106).scale(11, 0.9, 2.2), Q(0.7, 0.7, 0.7, 0.1)),
      D(J(45, 1), y(-81, 0.7, 106).scale3d(7.7), Q(0.7, 0.7, 0.7, 0.1)),
    ));
    c(J(), y(-58, 1, 106).scale(2, 0.65, 2), Q(0.7, 0.7, 0.7, 0.2));
    c(J(), y(-50.7, 1, 99).scale(2, 0.65, 1), Q(0.7, 0.7, 0.7, 0.2));
    c(J(), y(-42, 0.4, 91).scale(5, 1, 2.5), Q(0.7, 0.7, 0.7, 0.3));
    c(J(), y(-34.2, 0.4, 91).scale(3, 1, 3), Q(0.7, 0.7, 0.7, 0.3));
    c(J(5), y(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), Q(0.2, 0.5, 0.5, 0.6));
    Kb(y(-34, 2.7, 96).rotate(-12, 0));
    c(T(
      Yb(
        D(J(6, 0, 0, 0.6), y(-100, 0.7, 105.5).scale(8, 1, 11), Q(0.7, 0.7, 0.7, 0.2)),
        D(J(), y(-101.5, 0.7, 93.5).scale(10.5, 1, 2), Q(0.7, 0.7, 0.7, 0.2)),
      ),
      D(J(5), y(-100, 0.7, 113).scale(4, 3, 4), Q(0.7, 0.7, 0.7, 0.2)),
    ));
    ob(3, f => {
      c(q(16), y(-77, -9, -12 * f - 20).rotate(0, 90), Q(0.6, 0.6, 0.6, 0.3));
      c(q(16), y(12 * f - 109, -9, -12), Q(0.6, 0.6, 0.6, 0.3));
      c(
        q(24.7 - 0.7 * (1 & f)),
        y(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
        1 & f ? Q(0.5, 0.5, 0.5, 0.3) : Q(0.35, 0.35, 0.35, 0.5),
      );
    });
    c(T(
      D(J(6, 0, 0, 0.3), y(0, -0.92, 95).scale(14, 2, 14), Q(0.8, 0.8, 0.8, 0.2)),
      D(J(5), y(0, 0, 95).scale3d(6), Q(0.3, 0.3, 0.3, 0.5)),
    ));
    Kb(y(0, 1.7, 82).rotate(0, 180));
    c(J(5), y(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Q(0.5, 0.3, 0.3, 0.4));
    c(J(6), y(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Q(0.5, 0.6, 0.7, 0.3));
    c(J(), y(0, 16, 127.8).scale(1.5, 1, 0.7), Q(0.5, 0.6, 0.7, 0.3));
    c(J(7), y(0, 15.1, 133).scale(5, 2, 5), Q(0.4, 0.5, 0.6, 0.4));
    c(T(
      Yb(
        D(J(), y(0, 16, 110.5).scale(12, 1, 3), Q(0.5, 0.3, 0.3, 0.4)),
        D(J(), y(0, 16, 111).scale(3, 1, 3.8), Q(0.5, 0.3, 0.3, 0.4)),
      ),
      D(J(5), y(0, 16, 103.5).scale(5.5, 5, 5.5), Q(0.5, 0.3, 0.3, 0.4)),
    ));
    Lb(y(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Lb(y(0, 2.8), [5, 10, 3], [-5, 10, 3], ...rb(18).map(({ x: f, z: p }) => [7 * f, 10 * p, 4.5 - 2 * Xa(f)]));
    Lb(y(0, 3, 95), ...rb(9).map(({ x: f, z: p }) => [9 * f, 9 * p, 4]));
    Lb(y(0, 19, 134), [0, 0, 3.5]);
    Lb(y(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Lb(y(-89, 0.2, 80), [0, 0, 6]);
    Lb(y(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Lb(y(-115, 0.2, -12), [0, 0, 3.5]);
    Lb(y(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    R("MODEL_ID_LEVEL1_CENTRAL_PLATFORM");
    c(J(5), y(0, -0.2).scale(5, 1, 5), Q(0.6, 0.65, 0.7, 0.3));
    Kb(y(0, 1.2));
    ob(2, f => {
      R("MODEL_ID_LEVEL2_BLACK_PLATFORM" + f);
      Ua.map(({ x: p, z: H }) => {
        c(J(11, 1), y(4 * p, 4, 4 * H).scale(0.8, 3, 0.8), Q(0.5, 0.3, 0.7, 0.6));
        c(J(), y(4 * p, 7, 4 * H).scale(1, 0.3), Q(0.5, 0.5, 0.5, 0.3));
      });
      c(T(
        D(J(), l.scale(5, 1, 5), Q(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(p => D(J(25, 1), y(5 * p, 0.2).rotate(-30 * p).scale(4, 1, 3), Q(0.8, 0.8, 0.8, 0.3))),
      ));
      c(J(), y(0, -3).scale(8, 2, 8), Q(0.4, 0.4, 0.4, 0.3));
    });
    R("MODEL_ID_LEVEL2_CENTRAL_PLATFORM");
    c(T(
      Yb(
        D(J(), l.scale(1.5, 1, 5), Q(0.9, 0.9, 0.9, 0.2)),
        D(J(6), l.scale(4, 1, 5), Q(0.9, 0.9, 0.9, 0.2)),
        D(J(), y(0, -2).scale(2, 3.2, 1.9), Q(0.3, 0.8, 0.5, 0.5)),
        D(J(16, 1, 0, 4), l.scale(1, 1, 1.5).rotate(0, 90), Q(0.9, 0.9, 0.9, 0.2)),
      ),
      D(J(), l.scale(1.3, 10, 1.3), Q(0.2, 0.7, 0.4, 0.6)),
    ));
    Lb(y(0, 2.8), [0, 0, 4.5]);
    R("MODEL_ID_TRIANGLE_PLATFORM");
    c(J(3), y(-23, -1.7, 55.8).scale(5, 0.7, 8.3), Q(0.3, 0.6, 0.6, 0.2));
    c(J(8), y(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Q(0.8, 0.8, 0.8, 0.2));
    c(J(), y(-23, -3, 55).scale(5.2, 1.7, 3), Q(0.5, 0.5, 0.5, 0.3));
    c(J(), y(-23, -2.2, 62).scale(3, 1, 4), Q(0.5, 0.5, 0.5, 0.3));
    Kb(y(-23, -0.5, 66.5));
    R("MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL");
    c(J(), y(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Q(0.7, 0.7, 0.7, 0.2));
    c(T(D(J(), l.scale(3, 1.4, 2.7)), D(J(), l.scale(1.2, 8, 1.2))), y(-33, -3, 55), Q(0.7, 0.7, 0.7, 0.2));
    R("MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL");
    c(T(
      D(J(), y(-27, -3, 55).scale(3, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2)),
      D(J(), y(-27, -3, 55).scale(1, 3), Q(0.9, 0.9, 0.9, 0.2)),
    ));
    c(J(), y(-39, -3, 55).scale(3, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2));
    R("MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR");
    c(J(6), y(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), Q(0.7, 0.7, 0.7, 0.4));
    R("MODEL_ID_ELEVATORS0");
    [0, 12, 24].map(f =>
      c(J(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), Q(0.2, 0.5, 0.6, 0.2))
    );
    R("MODEL_ID_ELEVATORS1");
    [6, 18].map(f =>
      c(J(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), Q(0.1, 0.4, 0.5, 0.2))
    );
    R("MODEL_ID_MONUMENT");
    c(
      T(
        Yb(
          D(J(5), y(0, 2).scale(5, 7, 5).skewY(8), Q(0.2, 0.4, 0.5, 0.5)),
          D(J(5), y(0, 6).scale(1.1, 7, 1.1).skewY(-8), Q(0.25, 0.35, 0.5, 0.5)),
          D(J(5), y(0, 9).scale(0.6, 7, 0.6).skewY(8), Q(0.35, 0.3, 0.5, 0.5)),
        ),
        D(J(5), l.scale(4, 8, 4), Q(0.2, 0.4, 0.5, 0.5)),
        D(J(5), y(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Q(0.2, 0.4, 0.5, 0.5)),
      ),
      y(-38.9, -11.3, 17),
    );
    Lb(y(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({ x: f, z: p }) => [3 * f, 3 * p, 1.2]));
    R("MODEL_ID_PUSHING_ROD0");
    ob(2, f => c(B, y(9 * f - 110 + (1 & f), 1.9, -12)));
    R("MODEL_ID_PUSHING_ROD1");
    ob(2, f => c(B, y(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    R("MODEL_ID_PUSHING_ROD2");
    ob(3, f => c(B, y(9 * f - 106, 1.9, -12)));
    ob(4, f => {
      R("MODEL_ID_OSCILLATING_HEX_PAD" + f);
      c(
        J(6),
        y(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        Q(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [Q(0.1, 0.55, 0.45, 0.2), Q(0.2, 0.5, 0.5, 0.3), Q(0.3, 0.45, 0.55, 0.4)].map((f, p) => {
      R("MODEL_ID_JUMPING_PAD" + p);
      c(J(), y(-23.5, 0.5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), f);
      2 === p && c(J(), y(-29.1, 0.4, 91).scale(2.1, 1, 3), Q(0.7, 0.7, 0.7, 0.3));
      1 === p && c(J(), y(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), Q(0.6, 0.6, 0.7, 0.3));
    });
    R("MODEL_ID_FLOATING_ELEVATOR_PAD");
    c(J(5), l.scale(5, 1.1, 5), Q(0.5, 0.3, 0.3, 0.4));
    c(J(5), l.scale(5.5, 0.9, 5.5), Q(0.25, 0.25, 0.25, 0.4));
    Kb(y(0, 1.5, -1).rotate(0, 180));
    ob(4, f => {
      R("MODEL_ID_GATE" + f);
      ob(
        7,
        p => c(D(J(9, 1), y((2 < f ? 3.5 : 4) * (p / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), Q(0.3, 0.3, 0.38))),
      );
    });
    R("MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR");
    c(C);
    R("MODEL_ID_DONUT_PAD");
    c(J(15, 1), y(-7.5).rotate(0, 90).scale(3, 2.3, 3), Q(0.4, 0.4, 0.4, 0.3));
    c(J(10), y(-7.5).rotate(0, 90).scale(2, 2.5, 2), Q(0.3, 0.8, 0.7, 0.3));
    c(J(5), y(-7.5).rotate(0, 90).scale(1, 3), Q(0.5, 0.5, 0.5, 0.5));
    Kb(y(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => c(m, l.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(T(D(J(10), l.scale(6, 2, 6), Q(0.1, 0.6, 0.5, 0.3)), D(J(10), l.scale(3.3, 6, 3.3), Q(0.1, 0.6, 0.5, 0.5))));
    Lb(y(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    R("MODEL_ID_PENDULUMS");
    c(J(3), y(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), Q(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      c(J(6), y(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), Q(0.7, 0.7, 0.7, 0.4));
      c(J(), y(0, 6.2, f + 95).scale(0.5, 11, 0.5), Q(0.5, 0.3, 0.3, 0.4));
    });
    R("MODEL_ID_ROTATING_PLATFORM0");
    c(T(
      D(J(45, 1), l.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)),
      D(J(), y(0, 0, -5.5).scale(1.5, 3, 2.7), Q(0.45, 0.45, 0.45, 0.2)),
    ));
    c(J(8), y(0, 2).scale(3, 1.5, 3).rotate(0, 22), Q(0.7, 0.7, 0.7, 0.1));
    c(J(5), y(0, 2).scale(1, 2), Q(0.3, 0.3, 0.3, 0.2));
    Lb(y(0, 3), ...rb(14).map(({ x: f, z: p }) => [5.6 * f, 5.6 * p, 2]));
    R("MODEL_ID_ROTATING_PLATFORM1");
    [-1, 1].map(f => c(m, l.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90)));
    c(T(D(J(28, 1), y(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)), D(J(), l.scale(9, 5, 2), Q(0.3, 0, 0, 0.3))));
    c(D(J(28, 1), l.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(D(J(5), y(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    R("MODEL_ID_ROTATING_PLATFORM2");
    c(T(
      D(J(28, 1), y(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)),
      D(J(), y(7).scale(9, 5, 2), Q(0.3, 0, 0, 0.3)),
      D(J(), y(0, 0, 7).scale(2, 5, 9), Q(0.3, 0, 0, 0.3)),
    ));
    c(D(J(28, 1), l.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(D(J(5), y(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    R("MODEL_ID_ROTATING_PLATFORM3");
    c(T(
      D(J(28, 1), y(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)),
      D(J(), y(7).scale(9, 5, 2), Q(0.3, 0, 0, 0.3)),
      D(J(), y(0, 0, -7).scale(2, 5, 9), Q(0.3, 0, 0, 0.3)),
    ));
    c(D(J(28, 1), l.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(D(J(5), y(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    ob(2, f => {
      R("MODEL_ID_BOAT" + f);
      c(T(
        D(J(30, 1, 1.15, 1), y(0, -3).scale(3.5, 1, 3.5), Q(0.7, 0.4, 0.25, 0.7)),
        D(J(30, 1, 1.3, 1), y(0, -2.5).scale(2.6, 1, 3), Q(0.7, 0.4, 0.25, 0.2)),
        D(J(), y(4, -1.2).scale3d(2), Q(0.7, 0.4, 0.25, 0.3)),
      ));
      Kb(y(0, -3, 4));
    });
    R("MODEL_ID_PLAYER_BODY");
    c(vb(20), y(0, 1).scale3d(0.5), Q(1, 0.3, 0.4));
    c(vb(30), l.scale(0.65, 0.8, 0.55), Q(1, 0.3, 0.4));
    c(J(), y(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), Q(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      c(m, l.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), Q(1, 1, 0.8));
      c(
        D(T(J(15, 1), D(J(), y(0, 0, 1).scale(2, 2, 0.5))), l.rotate(-90, 0).scale(0.1, 0.05, 0.1), Q(0.3, 0.3, 0.3)),
        y(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map((f, p) => {
      R("MODEL_ID_PLAYER_LEG" + p);
      c(J(20, 1), y(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), Q(1, 0.3, 0.4));
    });
    R("MODEL_ID_LEVER");
    c(J(6, 1), l.scale(0.12, 1.2, 0.12), Q(0.3, 0.3, 0.5, 0.1));
    c(J(9, 1), y(0, 0.8).scale(0.2, 0.3, 0.2), Q(1, 0.5, 0.2));
    c(J(3), y(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), Q(0.2, 0.2, 0.2, 0.1));
    R("MODEL_ID_SOUL_COLLISION");
    c(J(6, 1).slice(0, -1), l.scale(0.77, 1, 0.77), Q(1, 0.3, 0.5));
    R("MODEL_ID_SOUL");
    c(
      vb(28, 22, (f, p, H) => {
        var O = p / 22, M = f * Math.PI * 2 / 28, n = Math.sin(O ** 0.6 * Math.PI / 2);
        f = O * O * Math.sin(f * Math.PI * 0.5) / 4;
        return 21 < p
          ? { x: H.B = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(M) * n,
            y: Math.cos(O * Math.PI) - O - f,
            z: Math.sin(M) * n + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      l.scale(0.7, 0.7, 0.7),
      Q(1, 1, 1),
    );
    [-1, 1].map(f => c(vb(10), y(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});
