let aa,
  ba,
  da,
  ea,
  fa,
  ha,
  ka,
  la,
  ma,
  na,
  pa,
  qa,
  ra,
  c,
  ta,
  ua,
  va,
  wa,
  xa,
  d = 0,
  ya = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 14,
  Ja = 0.1;
const Ka = Math.PI / 180;
var La = 0, Ma = 180, Na = 0, Oa = 0, Pa = 0;
const Ta = [],
  e = [],
  Ua = [],
  Va = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Wa = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Xa = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Ya = NO_INLINE(a => 0 > a ? -a : a),
  Za = NO_INLINE((a, b) => a < b ? a : b),
  $a = NO_INLINE((a, b) => b < a ? a : b),
  ab = (a, b) => Ya(a) > b ? a : 0,
  bb = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  cb = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka,
  db = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * bb(g) || 0,
  eb = (a, b, g) =>
    (0 < g ? 1 > g ? a + (b - a) * g : b : a)
    || 0,
  fb = (a, b) => (a = bb(a), eb(a, 1 - a, b)),
  gb = (a, b, g = 0) => (a * a + b * b + g * g) ** 0.5,
  ib = (
    a,
    b = hb,
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
  x = (
    a = h,
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
  nb = (a = 0, b = 0, g = 0, k = 1) => {
    jb = l.m11 * a + l.m21 * b + l.m31 * g + l.m41 * k;
    kb = l.m12 * a + l.m22 * b + l.m32 * g + l.m42 * k;
    lb = l.m13 * a + l.m23 * b + l.m33 * g + l.m43 * k;
    mb = l.m14 * a + l.m24 * b + l.m34 * g + l.m44 * k;
  };
var jb, kb, lb, mb;
const z = NO_INLINE((a, b, g) => h.translate(a, b, g)),
  ob = (a, b) => Array.from(Array(a), (g, k) => b(k)),
  pb = (a, b, g) => (a.A = g, a.s = b, a),
  qb = (a, b, g = a.s) => (x(b), pb(a.map(({ x: k, y: p, z: m }) => (nb(k, p, m), { x: jb, y: kb, z: lb })), g, a.A)),
  C = (a, b, g) => a.map(k => qb(k, b, g)),
  rb = (a, b = 0) =>
    ob(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > Ya(k) ? k : 0 > k ? k - b : k + b };
    }),
  sb = (a, b, g) =>
    a.map((k, p, { length: m }) => pb([k, b[m - p - 1], b[m - (p + 1) % m - 1], a[(p + 1) % m]], a.s, g)),
  K = (
    a,
    b,
    g = 0,
    k,
  ) => (a = a ? rb(a, k) : Va,
    k = qb(a, z(0, 1).scale3d(0 < g ? g : 1)),
    a = qb(a, z(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...sb(a, k, b), k, a]),
  vb = (
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
        const B = pb([], 0, 1);
        k.push(B);
        B.push(g(p, m, B));
        m && B.push(g((p + 1) % a, m, B));
        b - 1 > m && B.push(g((p + 1) % a, m + 1 % b, B));
        B.push(g(p, m + 1 % b, B));
      }
    }
    return k;
  },
  wb = NO_INLINE(a => 1 - Math.exp(-Ca * a)),
  N = NO_INLINE((a, b, g) => eb(a, b, wb(g))),
  xb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  yb = a => Math.sin(a * Math.PI * 2),
  zb = a => 0.5 > a % 1 ? 1 : -1,
  Ab = a => a % 1 * 2 - 1,
  Db = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Eb = a => {
    let b = 0;
    const g = () => {
        let m = 0;
        const B = T => {
            let U, ca, Qa, ia = 0, ja = 0;
            const Z = [],
              sa = new Int32Array(768 * T),
              ac = 2 ** (S - 9) / T,
              bc = Math.PI * 2 ** (q - 8) / T,
              Bb = D * T & -2;
            for (let tb = 0; 11 >= tb; ++tb) {
              for (
                let ub = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb];
                32 > ub;
                ++ub
              ) {
                const Nb = (32 * tb + ub) * T;
                for (var oa = 0; 4 > oa; ++oa) {
                  if (U = 0, Mb && (U = E[Mb - 1].charCodeAt(ub + 32 * oa) - 40, U += 0 < U ? 106 : 0), U) {
                    var za;
                    if (!(za = Z[U])) {
                      za = U;
                      let W = void 0, Aa = void 0;
                      var Ob = U;
                      let cc = 0, dc = 0;
                      const ec = 2 > b ? Ab : yb, fc = 2 > b ? 1 > b ? zb : Db : yb, Pb = new Int32Array(y + I + P);
                      for (let Ra = 0, Cb = 0; y + I + P > Ra; ++Ra, ++Cb) {
                        let Sa = 1;
                        y > Ra ? Sa = Ra / y : y + I > Ra || (Sa = (1 - (Sa = (Ra - y - I) / P)) * 3 ** (-F / 16 * Sa));
                        0 > Cb
                          || (Cb -= 4 * T,
                            Aa = 0.00396 * 2 ** ((Ob + f - 256) / 12),
                            W = 0.00396 * 2 ** ((Ob + Q - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Pb[Ra] = 80
                            * (ec(cc += Aa * Sa ** (r / 32)) * A + fc(dc += W * Sa ** (n / 32)) * G
                              + (v ? (2 * Math.random() - 1) * v : 0))
                            * Sa | 0;
                      }
                      za = Z[za] = Pb;
                    }
                    for (let W = 0, Aa = 2 * Nb; za.length > W; ++W, Aa += 2) {
                      sa[Aa] += za[W];
                    }
                  }
                }
                for (let W, Aa = 0; T > Aa; ++Aa) {
                  za = 0;
                  oa = 2 * (Nb + Aa);
                  var Ba = (((W = sa[oa]) || Qa)
                    && (ca = 0.00308 * u,
                      1 !== b && 4 !== b || (ca *= Math.sin(ac * oa * Math.PI * 2) * J / 512 + 0.5),
                      ca = 1.5 * Math.sin(ca),
                      ia += ca * ja,
                      Ba = (1 - L / 255) * (W - ja) - ia,
                      ja += ca * Ba,
                      W = 4 === b ? ja : 3 === b ? Ba : ia,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= M / 32,
                      Qa = 1e-5 < W * W,
                      Ba = Math.sin(bc * oa) * t / 512 + 0.5,
                      za = W * (1 - Ba),
                      W *= Ba),
                    oa < Bb || (za += sa[1 + oa - Bb]
                      * w / 255,
                      W += sa[oa - Bb] * w / 255),
                    m + oa >> 1);
                  k[Ba] += (sa[oa] = za) / 65536;
                  p[Ba] += (sa[++oa] = W) / 65536;
                }
              }
            }
            m += 768 * T;
          },
          E = Wa[b],
          [A, f, r, G, Q, n, v, y, I, H, F, S, u, L, M, t, q, w, D, J] = Xa[b],
          P = 4 * H ** 2;
        B(5513);
        B(4562);
        B(3891);
        xb(5 > ++b ? g : a);
      },
      k = (da = new AudioBuffer({ numberOfChannels: 2, sampleRate: 44100, length: 5362944 })).getChannelData(0),
      p = da.getChannelData(1);
    xb(g);
  },
  Fb = (a, b, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Gb = () => {
    let a, b, g, k, p, m, B, E, A, f, r, G, Q, n, v, y, I = !0;
    const H = [],
      F = () => {
        b4.innerHTML = "Music: " + I;
        y && (ba || !I ? y.disconnect() : y.connect(v.destination));
      },
      S = () => {
        const t = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ka = [Fb(0.3, 55, t, 1.732051), Fb(55, 181, t, 1.732051)];
        ha = Fb(0.3, 181, t, 1.732051);
        k = E = void 0;
        H.length =
          ea =
          n =
          G =
          Q =
          Da =
          Ea =
            0;
        document.hidden && u(!0);
      },
      u = t => {
        if (ba !== t) {
          if (ba = t, S(), document.body.className = t ? "l m" : "l", t) {
            try {
              document.exitFullscreen().catch(() => 0), document.exitPointerLock();
            } catch {
            }
          }
          F();
        }
      },
      L = t => {
        try {
          v || (v = new AudioContext(), (y = v.createBufferSource()).buffer = da, y.loop = !0, y.start()),
            document.body.requestFullscreen().catch(() => 0);
        } catch {
        }
        u(!1);
        fa = t;
      },
      M = (t, q) => t.buttons[q]?.pressed || 0 < t.buttons[q]?.value ? 1 : 0;
    oncontextmenu = () => !1;
    b1.onclick = () => {
      L();
    };
    b2.onclick = () => {
      L(1);
    };
    b5.onclick = () => u(!0);
    b4.onclick = () => {
      I = !I;
      F();
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
      let q;
      t.repeat
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
        }[t.code],
          (H[q] = !!t.type[5] && !0) && (0 === q && (ea = 1), 1 === q && u(!0)));
    };
    onmousemove = ({ movementX: t, movementY: q }) => {
      fa && (t || q) && (Ma += 0.1 * t, La += 0.1 * q);
    };
    hC.ontouchstart = t => {
      if (!ba) {
        for (let { pageX: q, pageY: w, identifier: D } of t.changedTouches) {
          fa && q > hC.clientWidth / 2
            ? void 0 === E && (A = 0, m = q, B = w, E = D, r = La, f = Ma)
            : void 0 === k && (p = 0, b = q, g = w, k = D);
        }
        a = ya;
      }
    };
    hC.ontouchmove = t => {
      if (!ba) {
        for (let { pageX: P, pageY: T, identifier: U } of t.changedTouches) {
          var q, w, D, J;
          E === U && (La = r + (T - B) / 2.3, Ma = f + (P - m) / 2.3, A = 1);
          k === U
            && (U = (b - P) / 19,
              q = Ya(U),
              w = (g - T) / 19,
              D = Ya(w),
              (J = 0.3 < $a(q, D)) && (p = 1),
              G = (J && 0.2 < q) * bb(U, -1),
              Q = (J && 0.2 < D) * bb(w, -1),
              2 < q && (b = 19 * (0 > U ? -1 : 1) + P),
              2 < D && (g = 19 * (0 > w ? -1 : 1) + T));
        }
      }
    };
    hC.ontouchend = t => {
      let q;
      document.activeElement === document.body && t.preventDefault();
      for (const w of t.changedTouches) {
        w.identifier === E
          ? (E = void 0, A || (q = 1), A = 0)
          : w.identifier === k
          ? (k = void 0, Q = G = 0, p || (q = 1), p = 0)
          : q = 1;
      }
      t.target === hC && q && a && 0.02 < (t = ya - a) && 0.7 > t && (ea = 1);
    };
    la = () => {
      Da = Q + (H[4] ? 1 : 0) - (H[5] ? 1 : 0);
      Ea = G + (H[2] ? 1 : 0) - (H[3] ? 1 : 0);
      let t = navigator.getGamepads()[0];
      t
        && (fa && (La += Ca * ab(t.axes[3], 0.3) * 80, Ma += Ca * ab(t.axes[2], 0.3) * 80),
          Da += M(t, 12) - M(t, 13) - ab(t.axes[1], 0.2),
          Ea += M(t, 14) - M(t, 15) - ab(t.axes[0], 0.2),
          M(t, 9) && u(!0),
          (t = M(t, 3) || M(t, 2) || M(t, 1) || M(t, 0)) && !n && (ea = 1),
          n = t);
    };
    document.onvisibilitychange = onblur = onresize = S;
    u(!0);
  },
  Hb = (a, b) => {
    1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
  },
  Ib = () => {
    h3.innerHTML = "Souls: "
      + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
        ma = Ua.reduce((a, b) => a + b.j, 0)
      ] + " / XIII";
  },
  Jb = () => {
    localStorage["Dante-22"] = JSON.stringify([e.map(a => a.j), Ua.map(a => a.j), Ia, qa, d]);
  },
  O = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  R = (a, b = 0, g = 0) => {
    const k = x(h, Ta[++ra].l);
    return k.m41 = a, k.m42 = b, k.m43 = g, k;
  },
  V = NO_INLINE(() => {
    const a = [];
    c = (b, g = h, k) => a.push(...C(b, g, k));
    Ta.push({ l: new DOMMatrix(), i: a });
  }),
  Kb = a => {
    const b = () => {
        const p = b.h = N(b.h, b.j, 4);
        b.g = N(b.g, b.j, 1);
        x(x(g).multiplySelf(a), R(0)).rotateSelf(50 * p - 25, 0).translateSelf(0, 1).m44 = p;
        ea && 3 > (nb(), gb(Na - jb, Oa - kb, Pa - lb))
          ? b.j
            ? 0.7 < p && (b.j = 0, Ia = k, Hb("* click *", 1), Jb())
            : 0.3 > p && (b.j = 1, Ia = k, Hb("* click *", 1), Jb())
          : b.j && 0.8 < p && 14 === k && (b.j = 0,
            13 > ma
              ? Hb("Not leaving now, there are souls to catch!", 3)
              : na || (Hb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), na = 1));
      },
      g = Ta.at(-1).l,
      k = e.length;
    b.l = g;
    b.D = a;
    e.push(b);
    c(K(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
    c(K(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
    c(K().slice(0, -1), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), O(0.5, 0.5, 0.4));
  },
  Qb = (a, ...b) => {
    let g, k, p, m, B = 0, E = 0, A = 1, f = -1;
    const r = () => {
      if (r.j) {
        x(Ta[35].l).translateSelf(
          H % 4 * 1.2 - 1.7 + Math.sin(d + H) / 7,
          -2,
          1.7 * (H >> 2) - 5.5 + Ya(H % 4 - 2) + Math.cos(d / 1.5 + H) / 6,
        );
      } else {
        let F, S, u, L, M, t = 1, q = 1 / 0;
        for (let w = 0; b.length > w; w++) {
          let D = b[w], J = gb(Q - D[0], n - D[1]);
          t = Za(t, J / D[2]);
          0 > (J -= D[2]) ? F = 1 : q > J && (q = J, G = D);
        }
        F
          || (S = Q - G[0],
            u = n - G[1],
            L = gb(S, u),
            M = Math.atan2(-u, S),
            A && (m = bb(m / (1 + Math.random())), E = (Math.random() - 0.5) * Math.PI / 2),
            M += E,
            f = -Math.cos(M),
            B = Math.sin(M),
            0.1 < L && (L = Za(L, G[2]) / L, Q = S * L + G[0], n = u * L + G[1]));
        A = F;
        m = N(m, 3 + 6 * (1 - t), 3 + t);
        v = N(v, Q = N(Q, Q + f, m), m);
        y = N(y, n = N(n, n + B, m), m);
        g = db(g, Math.atan2(v - k, y - p) / Ka - 180, wb(3));
        x(I).multiplySelf(a).translateSelf(k = v, 0, p = y).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
        1.6 > (nb(), gb(Na - jb, Oa - kb, Pa - lb))
          && (r.j = 1,
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
      ib(l, Lb, 28 + H);
    };
    let G = b[0], [Q, n] = G, [v, y] = G;
    const I = Ta.at(-1).l, H = Ua.length;
    Ua.push(r);
  },
  Rb = a => {
    let b, g = 0, k = 0, p = 0, m = a.at(-1);
    for (b of a) {
      g += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), p += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = gb(g, k, p), g /= b, k /= b, p /= b, { x: g, y: k, z: p, w: g * m.x + k * m.y + p * m.z };
  },
  Sb = ({ x: a, y: b, z: g }, k) => a * k.x + b * k.y + g * k.z,
  Tb = (a, b) => {
    let g;
    var k, p;
    const m = b.i, B = b.u;
    for (var E = 0; m.length > E; ++E) {
      if (-0.00008 > (g = Sb(a, m[E]) - a.w) ? p = b : 8e-5 < g && (k = b), p && k) {
        k = [];
        p = [];
        E = m.at(-1);
        let A = Sb(E, a) - a.w;
        for (const f of m) {
          g = Sb(f, a) - a.w,
            8e-5 > A && p.push(E),
            -0.00008 < A && k.push(E),
            (8e-5 < A && -0.00008 > g || -0.00008 > A && 8e-5 < g)
            && (A /= g - A,
              E = { x: E.x + (E.x - f.x) * A, y: E.y + (E.y - f.y) * A, z: E.z + (E.z - f.z) * A },
              k.push(E),
              p.push(E)),
            E = f,
            A = g;
        }
        k = 2 < k.length && { i: pb(k, m.s, m.A), u: B, v: b };
        p = 2 < p.length && { i: pb(p, m.s, m.A), u: B, v: b };
        break;
      }
    }
    return { x: k, y: p };
  },
  Ub = (a, b, g = Rb(b.i)) => {
    let k, p;
    return a
      ? ({ x: k, y: p } = Tb(a, b), k || p || a.i.push(b), k && (a.o = Ub(a.o, k, g)), p && (a.m = Ub(a.m, p, g)))
      : a = { x: g.x, y: g.y, z: g.z, w: g.w, i: [b], o: 0, m: 0 },
      a;
  },
  Vb = (a, b, g) => {
    const k = [],
      p = (m, B) => {
        let { x: E, y: A } = Tb(m, B);
        E || A || (0 < g * Sb(m, b) ? E = B : A = B);
        E && (m.o ? p(m.o, E) : k.push(E));
        A && m.m && p(m.m, A);
      };
    for (const m of b.i) {
      p(a, m);
    }
    return k;
  },
  Wb = (a, b) => a && (b(a), Wb(a.o, b), Wb(a.m, b)),
  Xb = a => (Wb(a, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.i) {
      k.u = !k.u;
    }
  }),
    a),
  Yb = a => a.length ? a.reduce((b, g) => Ub(b, { i: g, u: 0, v: 0 }), 0) : a,
  Zb = (...a) =>
    a.reduce((b, g) => {
      const k = [];
      if (b = Yb(b), g) {
        g = Yb(g);
        Wb(b, p => p.i = Vb(g, p, 1));
        Wb(g, p => k.push([p, Vb(b, p, -1)]));
        for (let [p, m] of k) {
          for (const B of m) {
            Ub(b, B, p);
          }
        }
      }
      return b;
    }),
  X = (a, ...b) => {
    const g = m => {
        let B;
        return m.v && ((B = p.get(m.v)) ? (k.delete(B), m = g(m.v)) : p.set(m.v, m)), m;
      },
      k = new Map(),
      p = new Map();
    return a = Xb(Zb(Xb(Yb(a)), ...b)),
      Wb(a, m => {
        for (const B of m.i) {
          k.set(g(B), B.u);
        }
      }),
      Array.from(k, ([{ i: m }, B]) => {
        const E = m.map(({ x: A, y: f, z: r }) => ({ x: A, y: f, z: r }));
        return pb(B ? E.reverse() : E, m.s, m.A);
      });
  },
  hc = () => {
    let a, b, g, k, p, m, B, E, A, f, r, G, Q, n, v, y, I = 0, H = 1, F = 2, S = 15;
    const u = (q, w, D, J) => eb(q, w, H || (bb(Ya(w - q) ** 0.5 - D) + 1 / 7) * wb(1.5 * J)),
      L = () => x((F ? e[Ia] : Ta[28 !== I ? I : 0]).l),
      M = q => {
        1 < F ? (x(e[Ia].l).multiplySelf(e[Ia].D), nb(0, 0.9 < pa ? 15 : 1, -2.4)) : (L(), nb(n, v, y));
        q && (p = (jb - Na) / Ca, m = (lb - Pa) / Ca);
        Na = jb;
        Oa = kb;
        Pa = lb;
      },
      t = () => {
        var q = 0, w = 0, D = 0, J = 0, P = 0, T = 0, U = -1;
        for (var ca = 0; 36 > ca; ++ca) {
          var Qa = 512 * ca;
          for (var ia = 96; 416 > ia; ia += 4) {
            for (var ja = 0; 2 > ja; ++ja) {
              var Z = $b[Qa + ia + ja];
              const sa = $b[Qa + ia + ja + 2];
              Z > J && (J = Z);
              Z + sa && (0 > U || U === ca) && (U = ca, sa === f ? ++q : w && w !== sa || (w = sa, ++D));
            }
          }
        }
        f = 0 > U ? 0 : D > 2 * q ? w : f;
        for (q = 36; 128 > q; ++q) {
          ca =
            U =
            D =
            w =
              0;
          Qa = 512 * q;
          for (ia = 0; 128 > ia; ++ia) {
            ja = Qa + 4 * ia,
              Z = $b[ja],
              64 > ia ? Z > w && (w = Z) : Z > D && (D = Z),
              (Z = $b[2 + ja]) > U && (U = Z),
              Z = $b[1 + ja],
              64 < ia ? Z > w && (w = Z) : Z > D && (D = Z),
              (Z = $b[3 + ja]) > ca && (ca = Z);
          }
          (D -= w) * D > P * P && (P = D);
          (ca -= U) * ca > T * T && (T = ca);
        }
        P *= 0.7;
        E = bb(1 - 0.01 * $a(Ya(P), Ya(T)), 0.3);
        P /= 255;
        J /= 255;
        T /= 255;
        L().invertSelf();
        nb(P, J, T, 0);
        n += jb;
        v += J;
        y += lb;
        M();
      };
    ta = () => {
      M(f);
      gc.r9r(0, 0, 128, 128, 6408, 5121, $b);
      NO_INLINE(t)();
      !F && f === I || (I = f, L().invertSelf(), nb(Na, Oa, Pa), n = jb, v = kb, y = lb, F = F && (f ? 0 : 1));
      (-20 > Na || 109 > Pa ? -25 : -9) > Oa && (F = 2);
      1 === f && (e[15].j = -15 > Na && 0 > Pa ? 1 : 0);
      k = N(k, ua * (30 < f && 35 > f), 2);
      r = u(r, Na, 0.5, 1);
      G = u(G, A = eb(N(A, Oa, 2), Oa, F || 8 * Ya(A - Oa)), 2, 1);
      Q = u(Q, Pa, 0.5, 1);
      fa
        ? (q = F + wb(18), Fa = eb(Fa, Na, q), Ha = eb(Ha, Pa, q), Ga = eb(Ga, 1.6 + A, q), Ma = cb(Ma))
        : (Fa = u(Fa, r, 1, 2 + k),
          Ha = u(Ha, Q + -18 + 5 * k, 1, 2 + k),
          Ga = u(Ga, $a(G + bb((-60 - Pa) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
          q = Za(-6, -Ya(Q - Ha)),
          w = r - Fa,
          Ma = db(Ma, 90 - cb(Math.atan2(q, w) / Ka), H + wb(10)),
          La = db(La, 90 - Math.atan2(gb(q, w), Ga - G) / Ka, H + wb(10)));
      La = bb(La, -87, 87);
      H = 0;
      var q = bb(Da, -1), w = bb(Ea, -1), D = ab(gb(q, w) ** 0.5, 0.1), J = Math.atan2(q, w);
      D && (a = 90 - J / Ka);
      b = db(b, a, wb(8));
      g = N(g, D, 10);
      R(Na, 0.06 * E * g * Math.cos(18.2 * d) + A, Pa).rotateSelf(0, b);
      for (var P = 0; 2 > P; ++P) {
        const T = 9.1 * d - Math.PI * P;
        x(Ta[53].l, R(0)).translateSelf(0, g * bb(0.45 * Math.sin(T - Math.PI / 2))).rotateSelf(
          g * Math.sin(T) * 0.25 / Ka,
          0,
        );
      }
      S = f ? 5 : N(S, F ? 13 : 19 - 2 * Za(0, Oa + 10), 2.2);
      p = f || F ? 0 : N(p, 0, 3);
      m = f || F ? 0 : N(m, 0, 3);
      q = (B = F ? 0 : N(B, f ? 7 * bb(2 * D) * E : 0, f ? 9 : 1)) * D * Ya(q) * Math.sin(J);
      w = B * D * Ya(w) * Math.cos(J);
      J = fa ? (180 + Ma) * Ka : 0;
      D = Ca * (p + (Math.cos(J) * w - Math.sin(J) * q));
      P = Ca * -S;
      q = Ca * (m + (Math.sin(J) * w + Math.cos(J) * q));
      L().invertSelf();
      nb(D, P, q, 0);
      n += jb;
      v += P;
      y += lb;
      M();
    };
  },
  ic = (a, b, g) => {
    ba
      ? 1100 < hC.width && a.d97(4, Ta[55].C - Ta[53].B, 5123, 2 * Ta[53].B)
      : (a.das(4, Ta[b].C - Ta[b].B, 5123, 2 * Ta[b].B, Ua.length), a.d97(4, (g ? Ta[55].C : Ta[53].B) - 3, 5123, 6));
  },
  jc = a => {
    const b = [{}, {}, {}, {}, {}, {}, {}, {}],
      g = (
        n,
        v,
        y =
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
      ) => {
        const I = {}, H = (S, u) => (u = n.c6x(u), n.s3c(u, S), n.c6a(u), u), F = n.c1h();
        return n.abz(F, H(y, 35633)), n.abz(F, H(v, 35632)), n.l8l(F), S => S ? I[S] || (I[S] = n.gan(F, S)) : n.u7y(F);
      },
      k = n => {
        requestAnimationFrame(k);
        var v = (n - (aa || n)) / 1e3;
        if (ya += v, d += Ca = ba ? 0 : Za(0.055, v), aa = n, 0 < Ca) {
          v = (I, H, F) =>
            R(I + Math.sin(d + 2) / 5, H + Math.sin(0.8 * d) / 5, F).rotateSelf(
              2 * Math.sin(d),
              Math.sin(0.7 * d),
              Math.sin(0.9 * d),
            );
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          qa = N(qa, e[15].g, 0.2 + 0.3 * Ya(2 * e[15].g - 1));
          pa = na ? (fa = 0, N(pa, -9, 0.015)) : N(pa, bb(d / 3), 1);
          la();
          n =
            (ra = 1,
              ua = fb(e[13].h, e[8].h),
              xa = eb(N(xa, 0, 1), cb(xa + 60 * Ca), e[2].h - e[3].g),
              va = eb(N(va, 0, 5), cb(va + 56 * Ca), ua),
              wa = eb(N(wa, 0, 4), cb(wa + 48 * Ca), ua),
              R(0, 270 * (e[1].h - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].h)),
              Za(1 - e[11].g, e[10].g));
          var y =
            (R(n * Math.sin(0.6 * d + 1.2) * 12, 0, 35),
              R(n * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55),
              R(n * Math.sin(0.6 * d) * 12, 0, 45),
              R(9.8 * (1 - n)),
              n = bb(1 - 5 * n) * fb(e[11].h, e[2].h),
              R(0, n * Math.sin(1.35 * d) * 4),
              R(0, 0, n * Math.sin(0.9 * d) * 8),
              R(0, -6.5 * e[11].g),
              n = fb(e[4].g, e[3].g),
              R(0, n * Math.sin(d) * 5 + 3.5 * (1 - $a(e[3].h, e[4].h))),
              R(0, n * Math.sin(d + 3) * 6, n * Math.sin(0.6 * d + 1) * 6),
              R(0, -7.3 * e[4].g),
              n = fb(e[6].h, e[7].h),
              R(
                0,
                -2,
                10 - 8.5
                    * n * Ya(Math.sin(1.1 * d)),
              ),
              R(0, -2, 10 - 8.5 * n * Ya(Math.sin(2.1 * d))),
              R(0, -2, 10 - 8.5 * $a(n * Ya(Math.sin(1.5 * d)), (1 - e[6].h) * (1 - n))),
              fb(e[5].g, e[13].g));
          for (n = 0; 4 > n; n++) {
            R(
              (2 < n ? 2 * (1 - y) + y : 0) - 100,
              y * Math.sin(1.3 * d + 1.7 * n) * (3 + n / 3) + 0.7,
              115 - 7 * (1 - e[5].g) * (1 - e[13].g) * (1 & n ? -1 : 1)
                + $a(0.05, y) * Math.cos(1.3 * d + 7 * n) * (4 - 2 * (1 - n / 3)),
            );
          }
          n = fb(e[8].g, e[9].g);
          for (let I = 0; 3 > I; ++I) {
            R(0, n * Math.sin(1.5 * d + 1.5 * I) * 4 + (I ? 0 : 3 * (1 - e[8].g) * (1 - e[9].g)));
          }
          n = fb(fb((e[9].h + e[9].g) / 2, e[8].g), (e[12].h + e[12].g) / 2);
          R(0, 16 * n, 95 + 8.5 * bb(2 * n - 1));
          R(0, -4.7 * e[0].h, -15);
          R(0, -4.7 * e[10].h, 15);
          R(-99.7, -1.9 - 5.5 * e[3].h, 63.5);
          R(-100, 0.6 - 5.8 * e[13].h, 96.5);
          R(-75, 3 * (1 - e[2].g) * (1 - e[3].h), 55).rotateSelf(180 * (1 - e[2].g) + xa, 0);
          R(2.5 * (1 - y) - 139.7, -3 * (1 - e[5].h) - y * Math.sin(0.8 * d) - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * d) * (3 + 3 * y),
            0,
          );
          R(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          R(-81, 0.6, 106).rotateSelf(0, 40 + va);
          R(-65.8, 0.8, 106).rotateSelf(0, wa);
          R(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
          R(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
          v(-12, 4.2, 40 * pa - 66);
          v(-123, 1.4, 55 - 65 * qa);
          for (v = 0; 16 > v; ++v) {
            13 > v && Ua[v](), e[v]();
          }
          ta();
          for (v = 0; 28 > v; ++v) {
            ib(Ta[28 + v].l, Lb, v);
          }
          for (let I, H = 0, F = 656; 26 > H; ++H, ++F) {
            I = Ta[2 + H].l, Lb[F++] = I.m41, Lb[F++] = I.m42, Lb[F++] = I.m43;
          }
          gc.cbf(!0, !0, !0, !0);
          gc.c4s(16640);
          gc.u3a(f("j"), Lb);
          gc.cbf(!0, !1, !0, !1);
          gc.uae(f("b"), !1, ib(x().rotateSelf(0, 180).invertSelf().translateSelf(-Na, -Oa, 0.3 - Pa)));
          ic(gc, 56);
          gc.c4s(256);
          gc.cbf(!1, !0, !1, !0);
          gc.uae(f("b"), !1, ib(x().translateSelf(-Na, -Oa, -Pa - 0.3)));
          ic(gc, 56);
          gc.f1s();
          ea = 0;
        }
        A();
        Y.u3a(A("j"), Lb);
        Y.b6o(36160, E);
        Y.v5y(0, 0, 2048, 2048);
        Y.ubh(A("g"), 4);
        Y.ubh(A("h"), 4);
        Y.uae(A("a"), !1, ib(h));
        G(54.7);
        ic(Y, 57, !fa);
        Q(126);
        ic(Y, 57, !fa);
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.c4s(16640);
        v = Fa;
        y = Ga;
        n = Ha;
        ba
          ? (x().rotateSelf(0, 40 * Math.sin(ya) - 80, -8),
            ib(l, Lb, 25),
            ib(l, Lb, 26),
            ib(l, Lb, 27),
            x(ha).invertSelf(),
            nb(3.6, 3.5),
            v = jb,
            y = kb,
            n = 5,
            x(h, m).rotateSelf(-20, 0).invertSelf().translateSelf(-v, -y, -n).rotateSelf(0, 99))
          : x(h, m).rotateSelf(-La, -Ma).invertSelf().translateSelf(-v, -y, -n);
        Y.ubh(A("g"), 0);
        Y.ubh(A("h"), 1);
        Y.ubu(A("k"), v, y, n);
        Y.uae(A("a"), !1, ib(ha));
        Y.uae(A("b"), !1, ib(m));
        Y.uae(A("i"), !1, B);
        ic(Y, 57, !fa);
        r();
        Y.uae(r("b"), !1, ib(x(m).invertSelf()));
        Y.ubu(r("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ya);
        Y.d97(4, 3, 5123, 0);
      },
      p = new DOMMatrix(),
      m = new DOMMatrix(),
      B = new Float32Array(32),
      E = Y.c5w(),
      A = g(
        Y,
        "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ),
      f = g(
        gc,
        "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ),
      r = g(
        Y,
        "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
        "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",
      ),
      [G, Q] = ob(2, n => {
        const v = Y.c25();
        return Y.a4v(33984 + n),
          Y.b9j(3553, v),
          Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
          Y.t2z(3553, 10241, 9729),
          Y.t2z(3553, 10240, 9729),
          Y.t2z(3553, 34893, 515),
          Y.t2z(3553, 34892, 34894),
          Y.t2z(3553, 10243, 33071),
          Y.t2z(3553, 10242, 33071),
          y => {
            let I = 0, H = 0, F = 0, S = 1 / 0, u = 1 / 0, L = 1 / 0, M = -1 / 0, t = -1 / 0, q = -1 / 0;
            Y.fas(36160, 36096, 3553, v, 0);
            Y.c4s(256);
            x().scale3dSelf(y *= 1.1).multiplySelf(x(ka[n], p).multiplySelf(m).invertSelf());
            for (let w = 0; 8 > w; ++w) {
              const D = b[w];
              nb(4 & w ? 1 : -1, 2 & w ? 1 : -1, 1 & w ? 1 : -1);
              I -= D.x = (0 | jb) / (y * mb);
              H -= D.y = (0 | kb) / (y * mb);
              F -= D.z = (0 | lb) / (y * mb);
            }
            x().rotateSelf(298, 139).translateSelf(I / 8, H / 8, F / 8);
            for (y = 0; 8 > y; ++y) {
              const { x: w, y: D, z: J } = b[y];
              nb(w, D, J);
              M = $a(M, jb);
              t = $a(t, kb);
              q = $a(q, lb);
              S = Za(S, jb);
              u = Za(u, kb);
              L = Za(L, lb);
            }
            y = 10 + n;
            L *= 0 > L ? y : 1 / y;
            q *= 0 < q ? y : 1 / y;
            Y.uae(
              A("b"),
              !1,
              ib(
                x(h, p).scaleSelf(2 / (M - S), 2 / (t - u), 2 / (L - q)).translateSelf(
                  (M + S) / -2,
                  (t + u) / -2,
                  (L + q) / 2,
                ).multiplySelf(l),
                B,
                n,
              ),
              16 * n,
              16,
            );
          };
      });
    Y.a4v(33986);
    Y.b9j(3553, Y.c25());
    Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, a);
    Y.t2z(3553, 10241, 9987);
    Y.t2z(3553, 10240, 9729);
    Y.gbn(3553);
    Y.b6o(36160, E);
    Y.d45([0]);
    Y.r9l(0);
    A();
    Y.ubh(A("q"), 2);
    r();
    Y.ubh(r("q"), 2);
    Y.c5t(0, 0, 0, 1);
    Y.d4n(515);
    Y.e8z(2929);
    Y.e8z(2884);
    gc.e8z(2929);
    gc.e8z(2884);
    gc.v5y(0, 0, 128, 128);
    f();
    gc.uae(f("a"), !1, ib(Fb(1e-4, 2, 1.2, 0.4)));
    NO_INLINE(Gb)();
    NO_INLINE(hc)();
    requestAnimationFrame(k);
  },
  h = new DOMMatrix(),
  l = new DOMMatrix(),
  hb = new Float32Array(16),
  $b = new Uint8Array(65536),
  kc = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hD\" height=\"128\" width=\"128\"></canvas>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: max(780px, 50vw);\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4,\n#hD {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  Lb = new Float32Array(760),
  Y = hC.getContext("webgl2", { powerPreference: "high-performance" }),
  gc = hD.getContext("webgl2", {
    powerPreference: "high-performance",
    preserveDrawingBuffer: !0,
    desynchronized: !0,
    antialias: !1,
  });
for (const a in gc) {
  [Y, gc].map(b => b[a[0] + [...a].reduce((g, k, p) => (g * p + k.charCodeAt(0)) % 434, 0).toString(36)] = b[a]);
}
xb(() => {
  let a = 0;
  const b = () => {
      2 == ++a && NO_INLINE(jc)(g);
    },
    g = new Image();
  g.onerror = g.onload = b;
  g.src = kc;
  NO_INLINE(Eb)(() => {
    xb(() => {
      let f = 0;
      const r = [],
        G = [],
        Q = [],
        n = [],
        v = new Int32Array(8),
        y = new Map(),
        I = new Int32Array(v.buffer, 0, 5),
        H = new Float32Array(v.buffer);
      Ta.map((u, L) => {
        let M;
        const t = q => {
          let { x: w, y: D, z: J } = M[q], P = (H[0] = w, H[1] = D, H[2] = J, q = "" + (M.A ? I : v), y.get(q));
          return void 0 !== P
            ? (w = 3 * P, n[w] = (n[w++] + v[5]) / 2, n[w] = (n[w++] + v[6]) / 2, n[w] = (n[w] + v[7]) / 2)
            : (y.set(q, P = y.size), G.push(w, D, J, H[3]), Q.push(v[4]), n.push(v[5], v[6], v[7])),
            P;
        };
        for (M of (H[3] = 55 < L ? -28 : L, u.i)) {
          const { x: q, y: w, z: D } = Rb(M);
          v[4] = 0 | M.s;
          v[5] = 32767 * q;
          v[6] = 32767 * w;
          v[7] = 32767 * D;
          for (let J = 2, P = t(0), T = t(1); M.length > J; ++J) {
            r.push(P, T, T = t(J));
          }
        }
        u.i = 0;
        u.B = f;
        u.C = f = r.length;
      });
      [Y, gc].map(u => {
        u.b11(34962, u.c1b());
        u.b2v(34962, new Float32Array(G), 35044);
        u.v7s(0, 4, 5126, !1, 0, 0);
        u.b11(34962, u.c1b());
        u.b2v(34962, new Int16Array(n), 35044);
        u.v7s(1, 3, 5122, !0, 0, 0);
        u.b11(34962, u.c1b());
        u.b2v(34962, new Uint32Array(Q), 35044);
        u.v7s(2, 4, 5121, !0, 0, 0);
        u.b11(34963, u.c1b());
        u.b2v(34963, new Uint16Array(r), 35044);
        u.e3x(0);
        u.e3x(1);
        u.e3x(2);
      });
      let F = [], S = [];
      try {
        const [u, L, M, t, q] = JSON.parse(localStorage["Dante-22"]);
        F = u;
        S = L;
        Ia = M;
        qa = t;
        d = q;
      } catch {
      }
      e.map((u, L) => u.h = u.g = u.j = 14 !== L && F[L] ? 1 : 0);
      Ua.map((u, L) => u.j = S[L] ? 1 : 0);
      Ib();
      pa = ma || 14 !== Ia ? 1 : 0;
      xb(b);
    });
    var k = [-110, -100, -92, -82, -106, -97, -88];
    const p = f => z(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f),
      m = f =>
        X(
          C(K(), z(0, -f / 2).scale(6, f - 1, 2.2)),
          C(K(), z(0, -f / 2 - 6).scale(4, f - 3, 4)),
          C(K(28, 1), z(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
        ),
      B = ob(11, f => sb(qb(rb(16), p(f), O(1, 1, 0.8, 0.2)).reverse(), qb(rb(16), p(f + 1), O(1, 1, 0.8, 0.2)), 1))
        .flat(),
      E = X(
        C(K(), z(0, -0.5, 1).scale(1.15, 1.2, 6.5), O(0.25, 0.25, 0.35, 0.3)),
        X(
          C(K(3), z(0, 0, -5.5).scale(3, 2), O(0.6, 0.3, 0.4, 0.3)),
          C(K(), z(0, 0, -3.65).scale(2.5, 3), O(0.6, 0.3, 0.4, 0.3)),
        ),
        ...[-1, 1].map(f => C(K(), z(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), O(0.7, 0.2, 0, 0.3))),
      ),
      A = [
        C(K(), z(0, -3).scale(11, 1.4, 3), O(0.9, 0.9, 0.9, 0.2)),
        C(K(), z(0, -2.2).scale(7.7, 0.5, 4), O(0.5, 0.5, 0.5, 0.2)),
        ob(12, f => C(K(), h.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), O(0.6, 0.5, 0.3, 0.2))).flat(),
        C(
          X(
            C(K(6), h.rotate(90).scale(6, 8, 6)),
            C(K(4, 0, 0.01), z(0, 6).scale(12, 2, 0.75).rotate(0, 45)),
            C(K(6), h.rotate(90).scale(5, 12, 5)),
            ...[-5, 0, 5].map(f => C(K(5), z(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),
          ),
          h,
          O(0.3, 0.6, 0.6, 0.3),
        ),
      ].flat();
    V("MODEL_ID_SKY");
    c([Va.slice(1)], z(-2).scale3d(3).rotate(90, 0));
    V("MODEL_ID_STATIC_WORLD");
    Kb(z(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, r) => {
      c(K(), z(0, 0, r ? 22 : -23).scale(3, 1, 8), O(0.9, 0.9, 0.9, 0.2));
      c(K(), z(0, 6.3, f).scale(4, 0.3, 1), O(0.3, 0.3, 0.3, 0.4));
      c(K(), z(0, 1, f).scale(3, 0.2, 0.35), O(0.5, 0.5, 0.5, 0.3));
    });
    c(K(), z(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(K(), z(3, 1.5, -20).scale(0.5, 2, 5), O(0.7, 0.7, 0.7, 0.2));
    c(K(5), z(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), O(0.6, 0.3, 0.3, 0.4));
    c(K(), z(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), O(0.75, 0.75, 0.75, 0.2));
    c(X(
      Zb(
        X(
          C(K(6, 0, 0, 0.3), z(0, -0.92).scale(13, 2, 13), O(0.8, 0.8, 0.8, 0.2)),
          C(K(), h.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), O(0.5, 0.5, 0.5, 0.5)),
        ),
        C(
          K(),
          h.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
          O(0.8, 0.2, 0.2, 0.5),
        ),
        C(K(6), z(0, -8).scale(9, 8, 7), O(0.2, 0.1, 0.4, 0.5)),
        C(K(6, 0, 0, 0.3), z(8, -4, -4).scale(14, 2, 13), O(0.7, 0.7, 0.7, 0.2)),
      ),
      C(K(6), z(15.5, -1.5, 3.5).scale(3.5, 1, 3.5), O(0.5, 0.5, 0.5, 0.5)),
      C(K(5, 0, 1.5), z(0, 1).scale(4.5, 0.3, 4.5), O(0.7, 0.5, 0.9, 0.2)),
      C(K(5), h.scale(5, 30, 5), O(0.4, 0.2, 0.6, 0.5)),
    ));
    Kb(z(15, -2, 4));
    c(K(), z(-18.65, -3, 55).scale(2.45, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    Kb(z(-55, -1.1, 46).rotate(0, 90));
    c(K(7), z(-57, -2.6, 46).scale(4, 1, 4), O(0.8, 0.8, 0.8, 0.3));
    c(K(6), z(-61.3, -2.4, 49).scale(3, 1, 5), O(0.4, 0.6, 0.6, 0.3));
    c(A, z(-53, 0, 55));
    c(K(), z(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), O(0.7, 0.7, 0.7, 0.2));
    c(K(3, 0, -0.5), z(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), O(0.8, 0.8, 0.8, 0.2));
    c(X(
      C(K(), z(-100, 1, 63).scale(7.5, 4), O(0.5, 0.5, 0.5, 0.4)),
      C(K(), z(-100, 0, 63).scale(2, 2, 4), O(0.5, 0.5, 0.5, 0.4)),
      C(K(20, 1), z(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), O(0.5, 0.5, 0.5, 0.4)),
    ));
    c(X(
      Zb(
        C(K(), z(-100, -2.6, 70).scale(3, 1.1, 7), O(0.8, 0.8, 0.8, 0.2)),
        C(K(), z(-100, -2.4, 55).scale(8, 0.9, 8), O(0.8, 0.8, 0.8, 0.2)),
        C(K(), z(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), O(0.8, 0.8, 0.8, 0.2)),
        C(K(6), z(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), O(0.6, 0.6, 0.6, 0.3)),
        C(K(), z(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), O(0.8, 0.8, 0.8, 0.2)),
        C(K(), z(-100, 0.42, 92).scale(3, 1.1, 4.1), O(0.8, 0.8, 0.8, 0.2)),
        C(K(), z(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), O(0.8, 0.8, 0.8, 0.2)),
      ),
      C(K(8), z(-100, -1, 55).scale(7, 0.9, 7), O(0.3, 0.3, 0.3, 0.4)),
      C(K(8), z(-100, -2, 55).scale(4, 0.3, 4), O(0.4, 0.4, 0.4, 0.5)),
      C(K(8, 0, -3.1), z(-100, -3, 55).scale(0.4, 1, 0.4), O(0.4, 0.4, 0.4, 0.5)),
    ));
    Va.map(({ x: f, z: r }) => {
      c(K(6), z(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), O(0.6, 0.3, 0.3, 0.4));
      c(K(6), z(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), O(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map(G => c(K(6), z(7 * f - 100, G, 7 * r + 55).scale(1.3, 0.5, 1.3), O(0.4, 0.2, 0.2, 0.8)));
      [1.5, 8].map(G =>
        c(K(15, 1), z(9 * f - 38.9, G - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), O(0.6, 0.6, 0.6, 0.3))
      );
      c(K(14, 1).slice(0, -2), z(9 * f - 38.9, -18, 11 * r + 17).scale(1, 14.2), O(0.25, 0.25, 0.25, 1));
    });
    ob(7, f => {
      c(
        K((23 * f + 1) % 5 + 5, 0, 0.5),
        z(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3),
        O(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
      );
    });
    c(K(), z(-87, -9.5, 24).scale(7, 1, 3), O(0.4, 0.5, 0.6, 0.4));
    c(K(4), z(-86, -9.2, 27).scale(5, 1, 5), O(0.5, 0.6, 0.7, 0.3));
    c(K(12, 1), z(-86, -9, 31).scale(1.5, 1, 1.5), O(0.3, 0.3, 0.4, 0.1));
    Kb(z(-86, -7.5, 31));
    c(
      X(
        Zb(
          C(K(5), z(0, 0, -7).scale(2, 1.2, 2), O(0.2, 0.4, 0.7, 0.3)),
          C(K(), h.scale(11, 1, 13), O(0.3, 0.4, 0.6, 0.3)),
          C(K(5), h.scale(9, 1.2, 9), O(0, 0.2, 0.3, 0.5)),
        ),
        C(K(5), h.scale(5.4, 5, 5.4), O(0, 0.2, 0.3, 0.5)),
      ),
      z(-38.9, -11.3, 17),
    );
    Kb(z(-38.9, -9.6, 10));
    c(
      X(
        Zb(
          C(K(6), z(0, 0, -18).scale(15, 1.3, 15), O(0.7, 0.7, 0.7, 0.3)),
          C(K(6), h.scale(4, 1.2, 8), O(0.45, 0.4, 0.6, 0.3)),
        ),
        ...ob(6, f =>
          ob(6, r =>
            C(
              K(6),
              z(4.6 * r - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * r) - 32).scale3d(2),
              O(0.7, 0.7, 0.7, 0.3),
            ))).flat(),
      ),
      z(-38.9, -11.3, -1),
    );
    c(K(5), z(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), O(0.8, 0.1, 0.25, 0.4));
    Kb(z(-84, -0.7, 85).rotate(0, 45));
    c(
      X(C(K(), z(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...k.map(f => C(K(), z(f, 0.05, -3).scale(1.35, 2, 9)))),
      h,
      O(0.5, 0.5, 0.6, 0.2),
    );
    c(K(), z(-96.5, 1, -2).scale(19, 0.3, 0.3), O(0.5, 0.5, 0.6, 0.2));
    Kb(z(-116, -1.4, -18).rotate(0, 180));
    c(K(6), z(-116, -2.6, -16.5).scale(3.2, 0.8, 3), O(0.6, 0.5, 0.7, 0.2));
    c(K(), z(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(K(), z(-115.5, -17, -12).scale(0.5, 15, 2.2), O(0.6, 0.6, 0.6, 0.3));
    c(K(8), z(-114, -17, -2).scale(2, 15, 2), O(0.6, 0.6, 0.6, 0.3));
    c(K(8), z(-79, -17, -2).scale(2, 15, 2), O(1, 1, 1, 0.3));
    c(K(), z(-77, -17, -50.5).scale(2.2, 15, 0.5), O(0.6, 0.6, 0.6, 0.3));
    c(X(
      C(K(12), z(-77, -14.5, -12).scale(4, 17.5, 4), O(0.7, 0.7, 0.7, 0.2)),
      C(K(12), z(-77, 3.1, -12).scale(3, 5, 3), O(0.4, 0.5, 0.6, 0.2)),
      C(K(), z(-79, 0.1, -12).scale(3.5, 2, 1.3), O(0.4, 0.5, 0.6, 0.2)),
      C(K(), z(-77, 0.1, -14).scale(1.5, 2, 2), O(0.4, 0.5, 0.6, 0.2)),
    ));
    c(X(
      C(K(), z(-93, -5.8, -40).scale(9, 1, 5), O(0.8, 0.8, 0.8, 0.1)),
      C(K(9), z(-98, -5.8, -40).scale(3, 8, 3), O(0.7, 0.7, 0.7, 0.2)),
    ));
    c(K(), z(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), O(0.6, 0.6, 0.6, 0.3));
    c(K(9), z(-98, -18.4, -40).scale(2.5, 13.5, 2.5), O(0.5, 0.5, 0.5, 0.3));
    Kb(z(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, r) => {
      c(
        X(
          C(K(), z(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), O(0.5, 0.5, 0.5, 0.4)),
          C(K(5), z(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), O(0.6, 0.24, 0.2, 0.5)),
          C(K(), h.scale(3, 3, 10), O(0.6, 0.24, 0.2, 0.5)),
          C(K(5), z(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), O(0.6, 0.24, 0.2, 0.5)),
          C(K(32, 1), z(0, 3, -5).scale(3, 4, 10).rotate(90, 0), O(0.6, 0.24, 0.2, 0.5)),
        ),
        z(f - 100, 0.7, 97),
      );
      c(K(12, 1), z(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), O(0.6, 0.24, 0.2, 0.5));
      [7.2, 1.5].map(G => c(K(15, 1), z(-7.5 * f - 100, G + 0.7, 96).scale(1.1, 0.5, 1.1), O(0.5, 0.24, 0.2, 0.4)));
      c(B, z(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(B, z(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      ob(5, G => c(B, z(18.5 * (r - 0.5), 0, 4.8 * G - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2)));
    });
    c(X(
      C(K(), z(-82.07, 0.8, 106).scale(11, 0.9, 2.2), O(0.7, 0.7, 0.7, 0.1)),
      C(K(45, 1), z(-81, 0.7, 106).scale3d(7.7), O(0.7, 0.7, 0.7, 0.1)),
    ));
    c(K(), z(-58, 1, 106).scale(2, 0.65, 2), O(0.7, 0.7, 0.7, 0.2));
    c(K(), z(-50.7, 1, 99).scale(2, 0.65, 1), O(0.7, 0.7, 0.7, 0.2));
    c(K(), z(-42, 0.4, 91).scale(5, 1, 2.5), O(0.7, 0.7, 0.7, 0.3));
    c(K(), z(-34.2, 0.4, 91).scale(3, 1, 3), O(0.7, 0.7, 0.7, 0.3));
    c(K(5), z(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), O(0.2, 0.5, 0.5, 0.6));
    Kb(z(-34, 2.7, 96).rotate(-12, 0));
    c(X(
      Zb(
        C(K(), z(-101.5, 0.7, 93.5).scale(10.5, 1, 2), O(0.7, 0.7, 0.7, 0.2)),
        C(K(6, 0, 0, 0.6), z(-100, 0.7, 105.5).scale(8, 1, 11), O(0.7, 0.7, 0.7, 0.2)),
      ),
      C(K(5), z(-100, 0.7, 113).scale(4, 3, 4), O(0.7, 0.7, 0.7, 0.2)),
    ));
    ob(3, f => {
      c(m(16), z(-77, -9, -12 * f - 20).rotate(0, 90), O(0.6, 0.6, 0.6, 0.3));
      c(m(16), z(12 * f - 109, -9, -12), O(0.6, 0.6, 0.6, 0.3));
      c(
        m(24.7 - 0.7 * (1 & f)),
        z(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
        1 & f ? O(0.5, 0.5, 0.5, 0.3) : O(0.35, 0.35, 0.35, 0.5),
      );
    });
    c(X(
      Zb(
        C(K(), z(0, 16, 111).scale(3, 1, 3.8), O(0.5, 0.3, 0.3, 0.4)),
        C(K(6, 0, 0, 0.3), z(0, -0.92, 95).scale(14, 2, 14), O(0.8, 0.8, 0.8, 0.2)),
        C(K(), z(0, 16, 110.5).scale(12, 1, 3), O(0.5, 0.3, 0.3, 0.4)),
      ),
      C(K(5), z(0, 0, 95).scale3d(6), O(0.3, 0.3, 0.3, 0.5)),
      C(K(5), z(0, 16, 103.5).scale(5.5, 5, 5.5), O(0.5, 0.3, 0.3, 0.4)),
    ));
    Kb(z(0, 1.7, 82).rotate(0, 180));
    c(K(5).slice(0, -1), z(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), O(0.5, 0.3, 0.3, 0.4));
    c(K(6), z(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), O(0.5, 0.6, 0.7, 0.3));
    c(K(), z(0, 16, 127.8).scale(1.5, 1, 0.7), O(0.5, 0.6, 0.7, 0.3));
    c(K(7), z(0, 15.1, 133).scale(5, 2, 5), O(0.4, 0.5, 0.6, 0.4));
    Qb(z(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Qb(z(0, 2.8), [5, 10, 3], [-5, 10, 3], ...rb(18).map(({ x: f, z: r }) => [7 * f, 10 * r, 4.5 - 2 * Ya(f)]));
    Qb(z(0, 3, 95), ...rb(9).map(({ x: f, z: r }) => [9 * f, 9 * r, 4]));
    Qb(z(0, 19, 134), [0, 0, 3.5]);
    Qb(z(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Qb(z(-89, 0.2, 80), [0, 0, 6]);
    Qb(z(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Qb(z(-115, 0.2, -12), [0, 0, 3.5]);
    Qb(z(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    V("MODEL_ID_LEVEL1_CENTRAL_PLATFORM");
    c(K(5), z(0, -0.2).scale(5, 1, 5), O(0.6, 0.65, 0.7, 0.3));
    Kb(z(0, 1.2));
    ob(2, f => {
      V("MODEL_ID_LEVEL2_BLACK_PLATFORM" + f);
      Va.map(({ x: r, z: G }) => {
        c(K(11, 1), z(4 * r, 4, 4 * G).scale(0.8, 3, 0.8), O(0.5, 0.3, 0.7, 0.6));
        c(K(), z(4 * r, 7, 4 * G).scale(1, 0.3), O(0.5, 0.5, 0.5, 0.3));
      });
      c(X(
        C(K().slice(0, -1), h.scale(5, 1, 5), O(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map(r => C(K(25, 1), z(5 * r, 0.2).rotate(-30 * r).scale(4, 1, 3), O(0.8, 0.8, 0.8, 0.3))),
      ));
      c(K(), z(0, -3).scale(8, 2, 8), O(0.4, 0.4, 0.4, 0.3));
    });
    V("MODEL_ID_LEVEL2_CENTRAL_PLATFORM");
    c(X(
      Zb(
        C(K(), h.scale(1.5, 1, 5), O(0.9, 0.9, 0.9, 0.2)),
        C(K(), z(0, -2).scale(2, 3.2, 1.9), O(0.3, 0.8, 0.5, 0.5)),
        C(K(6), h.scale(4, 1, 5), O(0.9, 0.9, 0.9, 0.2)),
        C(K(16, 1, 0, 4), h.scale(1, 1, 1.5).rotate(0, 90), O(0.9, 0.9, 0.9, 0.2)),
      ),
      C(K(), h.scale(1.3, 10, 1.3), O(0.2, 0.7, 0.4, 0.6)),
    ));
    Qb(z(0, 2.8), [0, 0, 4.5]);
    V("MODEL_ID_TRIANGLE_PLATFORM");
    c(K(3), z(-23, -1.7, 55.8).scale(5, 0.7, 8.3), O(0.3, 0.6, 0.6, 0.2));
    c(K(8), z(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), O(0.8, 0.8, 0.8, 0.2));
    c(K(), z(-23, -3, 55).scale(5.2, 1.7, 3), O(0.5, 0.5, 0.5, 0.3));
    c(K(), z(-23, -2.2, 62).scale(3, 1, 4), O(0.5, 0.5, 0.5, 0.3));
    Kb(z(-23, -0.5, 66.5));
    V("MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL");
    c(K(), z(-22.55, -3, 55).scale(1.45, 1.4, 2.7), O(0.7, 0.7, 0.7, 0.2));
    c(X(C(K(), h.scale(3, 1.4, 2.7)), C(K(), h.scale(1.2, 8, 1.2))), z(-33, -3, 55), O(0.7, 0.7, 0.7, 0.2));
    V("MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL");
    c(X(C(K(), h.scale(3, 1.4, 2.7)), C(K(), h.scale(1, 3))), z(-27, -3, 55), O(0.9, 0.9, 0.9, 0.2));
    c(K(), z(-39, -3, 55).scale(3, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    V("MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR");
    c(K(6), z(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), O(0.7, 0.7, 0.7, 0.4));
    V("MODEL_ID_ELEVATORS0");
    [0, 12, 24].map(f =>
      c(K(), z(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.2, 0.5, 0.6, 0.2))
    );
    V("MODEL_ID_ELEVATORS1");
    [6, 18].map(f =>
      c(K(), z(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.1, 0.4, 0.5, 0.2))
    );
    V("MODEL_ID_MONUMENT");
    c(
      X(
        Zb(
          C(K(5), z(0, 2).scale(5, 7, 5).skewY(8), O(0.2, 0.4, 0.5, 0.5)),
          C(K(5), z(0, 6).scale(1.1, 7, 1.1).skewY(-8), O(0.25, 0.35, 0.5, 0.5)),
          C(K(5), z(0, 9).scale(0.6, 7, 0.6).skewY(8), O(0.35, 0.3, 0.5, 0.5)),
        ),
        C(K(5), z(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), O(0.2, 0.4, 0.5, 0.5)),
        C(K(5), h.scale(4, 8, 4), O(0.2, 0.4, 0.5, 0.5)),
      ),
      z(-38.9, -11.3, 17),
    );
    Qb(z(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({ x: f, z: r }) => [3 * f, 3 * r, 1.2]));
    k.map((f, r) => {
      r % 2 || 6 <= r || V("MODEL_ID_PUSHING_ROD" + r / 2);
      c(E, z(f, 1.9, -12));
    });
    ob(4, f => {
      V("MODEL_ID_OSCILLATING_HEX_PAD" + f);
      c(
        K(6),
        z(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
        O(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
      );
    });
    [O(0.1, 0.55, 0.45, 0.2), O(0.2, 0.5, 0.5, 0.3), O(0.3, 0.45, 0.55, 0.4)].map((f, r) => {
      V("MODEL_ID_JUMPING_PAD" + r);
      c(K(), z(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
      2 === r && c(K(), z(-29.1, 0.4, 91).scale(2.1, 1, 3), O(0.7, 0.7, 0.7, 0.3));
      1 === r && c(K(), z(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), O(0.6, 0.6, 0.7, 0.3));
    });
    V("MODEL_ID_FLOATING_ELEVATOR_PAD");
    c(K(5), h.scale(5, 1.1, 5), O(0.5, 0.3, 0.3, 0.4));
    c(K(5), h.scale(5.5, 0.9, 5.5), O(0.25, 0.25, 0.25, 0.4));
    Kb(z(0, 1.5, -1).rotate(0, 180));
    ob(4, f => {
      V("MODEL_ID_GATE" + f);
      ob(
        7,
        r => c(C(K(9, 1), z((2 < f ? 3.5 : 4) * (r / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), O(0.3, 0.3, 0.38))),
      );
    });
    V("MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR");
    c(A);
    V("MODEL_ID_DONUT_PAD");
    c(K(15, 1), z(-7.5).rotate(0, 90).scale(3, 2.3, 3), O(0.4, 0.4, 0.4, 0.3));
    c(K(10), z(-7.5).rotate(0, 90).scale(2, 2.5, 2), O(0.3, 0.8, 0.7, 0.3));
    c(K(5), z(-7.5).rotate(0, 90).scale(1, 3), O(0.5, 0.5, 0.5, 0.5));
    Kb(z(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => c(B, h.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(X(C(K(10), h.scale(6, 2, 6), O(0.1, 0.6, 0.5, 0.3)), C(K(10), h.scale(3.3, 6, 3.3), O(0.1, 0.6, 0.5, 0.5))));
    Qb(z(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    V("MODEL_ID_PENDULUMS");
    c(K(3), z(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), O(0.5, 0.3, 0.3, 0.4));
    [22, 30].map(f => {
      c(K(6), z(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), O(0.7, 0.7, 0.7, 0.4));
      c(K(), z(0, 6.2, f + 95).scale(0.5, 11, 0.5), O(0.5, 0.3, 0.3, 0.4));
    });
    V("MODEL_ID_ROTATING_PLATFORM0");
    c(X(
      C(K(45, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)),
      C(K(), z(0, 0, -5.5).scale(1.5, 3, 2.7), O(0.45, 0.45, 0.45, 0.2)),
    ));
    c(K(8), z(0, 2).scale(3, 1.5, 3).rotate(0, 22), O(0.7, 0.7, 0.7, 0.1));
    c(K(5), z(0, 2).scale(1, 2), O(0.3, 0.3, 0.3, 0.2));
    Qb(z(0, 3), ...rb(14).map(({ x: f, z: r }) => [5.6 * f, 5.6 * r, 2]));
    V("MODEL_ID_ROTATING_PLATFORM1");
    [-1, 1].map(f => c(B, h.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90)));
    c(X(C(K(28, 1), z(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), C(K(), h.scale(9, 5, 2), O(0.3, 0, 0, 0.3))));
    c(K(28, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2));
    c(K(5), z(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2));
    V("MODEL_ID_ROTATING_PLATFORM2");
    c(X(
      C(K(28, 1), z(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)),
      C(K(), z(0, 0, 7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),
      C(K(), z(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)),
    ));
    c(K(28, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2));
    c(K(5), z(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2));
    V("MODEL_ID_ROTATING_PLATFORM3");
    c(X(
      C(K(28, 1), z(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)),
      C(K(), z(0, 0, -7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),
      C(K(), z(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)),
    ));
    c(K(28, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2));
    c(K(5), z(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2));
    ob(2, f => {
      V("MODEL_ID_BOAT" + f);
      c(X(
        C(K(30, 1, 1.15, 1), z(0, -3).scale(3.5, 1, 3.5), O(0.7, 0.4, 0.25, 0.7)),
        C(K(), z(4, -1.2).scale3d(2), O(0.7, 0.4, 0.25, 0.3)),
        C(K(30, 1, 1.3, 1), z(0, -2.5).scale(2.6, 1, 3), O(0.7, 0.4, 0.25, 0.2)),
      ));
      Kb(z(0, -3, 4));
    });
    for (k = 0; 16 > k; ++k) {
      V("MODEL_ID_LEVER" + k),
        c(K(6, 1).slice(0, -1), h.scale(0.12, 1.2, 0.12), O(0.3, 0.3, 0.5, 0.1)),
        c(K(9, 1), z(0, 0.8).scale(0.2, 0.3, 0.2), O(0.7, 1, 0.2)),
        c(K(3), z(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), O(0.2, 0.2, 0.2, 0.1));
    }
    V("MODEL_ID_PLAYER_BODY");
    c(vb(20), z(0, 1).scale3d(0.5), O(1, 0.3, 0.4));
    c(vb(30), h.scale(0.65, 0.8, 0.55), O(1, 0.3, 0.4));
    c(K(), z(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), O(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      c(B, h.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), O(1, 1, 0.8));
      c(
        C(X(K(15, 1), C(K(), z(0, 0, 1).scale(2, 2, 0.5))), h.rotate(-90, 0).scale(0.1, 0.05, 0.1), O(0.3, 0.3, 0.3)),
        z(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),
      );
    });
    [-1, 1].map((f, r) => {
      V("MODEL_ID_PLAYER_LEG" + r);
      c(K(20, 1), z(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), O(1, 0.3, 0.4));
    });
    V("MODEL_ID_SOUL_COLLISION");
    c(K(6, 1).slice(0, -1), h.scale(0.77, 1, 0.77), O(1, 0.3, 0.5));
    V("MODEL_ID_SOUL");
    c(
      vb(28, 22, (f, r, G) => {
        var Q = r / 22, n = f * Math.PI * 2 / 28, v = Math.sin(Q ** 0.6 * Math.PI / 2);
        f = Q * Q * Math.sin(f * Math.PI * 0.5) / 4;
        return 21 < r
          ? { x: G.A = 0, y: -0.5, z: 0 }
          : {
            x: Math.cos(n) * v,
            y: Math.cos(Q * Math.PI) - Q - f,
            z: Math.sin(n) * v + Math.sin(f * Math.PI * 2) / 4,
          };
      }),
      h.scale(0.7, 0.7, 0.7),
      O(1, 1, 1),
    );
    [-1, 1].map(f => c(vb(10), z(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});
