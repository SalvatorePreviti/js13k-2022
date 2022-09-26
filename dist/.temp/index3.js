let aa,
  da,
  ha,
  ja,
  ka,
  la,
  ma = 0,
  na = 0,
  a = 0,
  oa = 0,
  pa = 0,
  ra = 0,
  sa = 0,
  ta = 0,
  ua = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 1,
  d = 0.066;
const Fa = [],
  Ga = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ha = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Ia = 0, Na = 180;
const Oa = { x: 0, y: 0, z: 0 },
  e = (c, b) => Array.from(Array(c), (g, k) => b(k)),
  Pa = Math.PI / 180,
  h = [],
  m = [],
  Qa = [],
  Ra = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Sa = { x: 0, y: 0, z: 0 },
  Ta = (c, b = 0, g = 1) => c < b ? b : g < c ? g : c,
  Ua = (c, b) => n(c) > b ? c : 0,
  t = (c, b, g) => (0 < g ? 1 > g ? c + (b - c) * g : b : c) || 0,
  Wa = (c, b) => (c = Ta(c), t(c, 1 - c, b)),
  Xa = c => Math.atan2(Math.sin(c *= Pa), Math.cos(c)) / Pa,
  Ya = (c, b, g) =>
    c + (2 * (b = (b
                  - c) % 360) % 360 - b) * Ta(g) || 0,
  Za = ({ x: c, y: b, z: g }) => Math.hypot(c - Sa.x, b - Sa.y, g - Sa.z),
  $a = ({ x: c, y: b, z: g }, k) => c * k.x + b * k.y + g * k.z,
  ab = c => {
    let b, g = 0, k = 0, p = 0, l = c.at(-1);
    for (b of c) {
      g += (l.y - b.y) * (l.z + b.z), k += (l.z - b.z) * (l.x + b.x), p += (l.x - b.x) * (l.y + b.y), l = b;
    }
    return b = Math.hypot(g, k, p), g /= b, k /= b, p /= b, { x: g, y: k, z: p, w: g * l.x + k * l.y + p * l.z };
  },
  cb = (
    c,
    b = bb,
    g = 0,
  ) => (g *= 16,
    b[g++] = c.m11,
    b[g++] = c.m12,
    b[g++] = c.m13,
    b[g++] = c.m14,
    b[g++] = c.m21,
    b[g++] = c.m22,
    b[g++] = c.m23,
    b[g++] = c.m24,
    b[g++] = c.m31,
    b[g++] = c.m32,
    b[g++] = c.m33,
    b[g++] = c.m34,
    b[g++] = c.m41,
    b[g++] = c.m42,
    b[g++] = c.m43,
    b[g] = c.m44,
    b),
  db = (c, b, g, k) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (k + g) / (g - k), -1, 0, 0, 2 * k * g / (g - k), 0],
  eb = (c, b, g) => (c.D = g, c.A = b, c),
  fb = (c, b, g = c.A) =>
    eb(
      c.map(k => {
        let p, l;
        return { x: k, y: p, z: l } = k,
          { x: k, y: p, z: l } = b.transformPoint({ x: k, y: p, z: l }),
          { x: k, y: p, z: l };
      }),
      g,
      c.D,
    ),
  G = (c, b, g) => c.map(k => fb(k, b, g)),
  gb = (c, b = 0) =>
    e(c, g => {
      const k = Math.cos(2 * Math.PI * g / c);
      return { x: Math.sin(2 * Math.PI * g / c), y: 0, z: 0.01 > n(k) ? k : 0 > k ? k - b : k + b };
    }),
  hb = (c, b, g) =>
    c.map((k, p, { length: l }) => eb([k, b[l - p - 1], b[l - (p + 1) % l - 1], c[(p + 1) % l]], c.A, g)),
  J = (
    c,
    b,
    g = 0,
    k,
  ) => (c = c ? gb(c, k) : Ra,
    k = fb(c, I(0, 1).scale3d(0 < g ? g : 1)),
    c = fb(c, I(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...hb(c, k, b), k, c]),
  ib = (
    c,
    b = c,
    g = (
      k,
      p,
    ) => (p *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / c) * Math.sin(p), y: Math.cos(p), z: Math.sin(k) * Math.sin(p) }),
  ) => {
    const k = [];
    for (let p = 0; c > p; p++) {
      for (let l = 0; b > l; l++) {
        const v = eb([], 0, 1);
        k.push(v);
        v.push(g(p, l, v));
        l && v.push(g((p + 1) % c, l, v));
        b - 1 > l && v.push(g((p + 1) % c, l + 1 % b, v));
        v.push(g(p, l + 1 % b, v));
      }
    }
    return k;
  },
  jb = (c, b) => {
    var g, k, p, l = b.C;
    for (var v = 0; l.length > v; ++v) {
      if (-0.00008 > (g = $a(c, l[v]) - c.w) ? p = b : 8e-5 < g && (k = b), p && k) {
        k = [];
        p = [];
        l = b.C;
        v = b.B;
        let u = l.at(-1), w = $a(c, u) - c.w;
        for (const y of l) {
          g = $a(c, y) - c.w,
            8e-5 > w && p.push(u),
            -0.00008 < w && k.push(u),
            (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g)
            && (w /= g - w,
              u = { x: u.x + (u.x - y.x) * w, y: u.y + (u.y - y.y) * w, z: u.z + (u.z - y.z) * w },
              k.push(u),
              p.push(u)),
            u = y,
            w = g;
        }
        return {
          o: 2 < k.length && { C: eb(k, l.A, l.D), B: v, u: b },
          m: 2 < p.length && { C: eb(p, l.A, l.D), B: v, u: b },
        };
      }
    }
    return { o: k, m: p };
  },
  kb = (c, b, g = ab(b.C)) => {
    let k, p, l;
    return c
      ? ({ o: k, m: p } = jb(c, b), k || p || c.s.push(b), k && (c.o = kb(c.o, k, g)), p && (c.m = kb(c.m, p, g)))
      : ({ x: k, y: p, z: g, w: l } = g, c = { x: k, y: p, z: g, w: l, s: [b], o: 0, m: 0 }),
      c;
  },
  lb = (c, b, g) => {
    const k = [],
      p = (l, v) => {
        let { o: u, m: w } = jb(l, v);
        u || w || (0 < g * $a(l, b) ? u = v : w = v);
        u && (l.o ? p(l.o, u) : k.push(u));
        w && l.m && p(l.m, w);
      };
    for (const l of b.s) {
      p(c, l);
    }
    return k;
  },
  mb = (c, b) => c && (b(c), mb(c.o, b), mb(c.m, b)),
  pb = c => c.length ? c.reduce((b, g) => kb(b, { C: g, B: 0, u: 0 }), 0) : c,
  qb = c => (mb(c, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.s) {
      k.B = !k.B;
    }
  }),
    c),
  rb = (...c) =>
    c.reduce((b, g) => {
      const k = [];
      if (b = pb(b), g) {
        g = pb(g);
        mb(b, p => p.s = lb(g, p, 1));
        mb(g, p => k.push([p, lb(b, p, -1)]));
        for (let [p, l] of k) {
          for (const v of l) {
            kb(b, v, p);
          }
        }
      }
      return b;
    }),
  O = (...c) => {
    let b;
    const g = l => {
        let v;
        return l.u && ((v = k.get(l.u)) ? (p.delete(v), l = g(l.u)) : k.set(l.u, l)), l;
      },
      k = new Map(),
      p = new Map();
    return [c, ...b] = [...c],
      c = qb(rb(qb(pb(c)), ...b)),
      mb(c, l => {
        for (const v of l.s) {
          p.set(g(v), v.B);
        }
      }),
      Array.from(p, ([{ C: l }, v]) => {
        const u = l.map(({ x: w, y, z: D }) => ({ x: w, y, z: D }));
        return eb(v ? u.reverse() : u, l.A, l.D);
      });
  },
  sb = () => {
    ya = Wa(m[12].g, m[13].g);
    sa = t(t(sa, 0, 1 - Math.exp(-1 * d)), Xa(sa + 60 * d), m[5].g - m[6].i);
    pa = t(t(pa, 0, 1 - Math.exp(-5 * d)), Xa(pa + 56 * d), ya);
    ra = t(t(ra, 0, 1 - Math.exp(-4 * d)), Xa(ra + 48 * d), ya);
    var c = 0.2 + 0.3 * n(2 * m[9].i - 1);
    xa = t(xa, m[9].i, 1 - Math.exp(-c * d));
    ua = t(ua, ta ? t(ua, -9, 1 - Math.exp(-1.5 * d)) : Ta(a / 3), 1 - Math.exp(-1 * d));
    Ea && a > Ea && (Ea = 0, h4.innerHTML = "");
    m[0].l && 0.8 < m[0].g && (13 > ma
      ? (1 / 0 > Ea && (Ea = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), m[0].l = 0)
      : ta
        || (1 / 0 > Ea && (Ea = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ta = 1));
    for (const b of h) {
      b.h && (b.j = b.h());
    }
    for (const b of m) {
      b.h();
    }
    for (const b of Qa) {
      b.h();
    }
  },
  vb = () => {
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
      ][ma = Qa.reduce((c, { l: b }) => c + b, 0)] + " / XIII";
  },
  wb = () => {
    localStorage.I = JSON.stringify([m.map(({ l: c }) => c), Qa.map(({ l: c }) => c), oa, a, xa]);
  },
  R = (c, b = 1) => {
    const g = ha;
    b = { j: xb, H: h.length, G: b, s: [] };
    return h.push(ha = b), c(b), ha = g, b;
  },
  S = (c, b = xb, g) => ha.s.push(...G(c, b, g)),
  yb = c => {
    const b = ha,
      g = m.length,
      k = {
        l: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const p = k.l, l = k.g, v = k.i, u = b.j.multiply(c);
          k.J = u;
          3 > Za(u.transformPoint()) && Fa[5] && (0.3 > l || 0.7 < l)
            && (k.l = p ? 0 : 1, g && 1 / 0 > Ea && (Ea = a + 1, h4.innerHTML = "* click *"), oa = g, wb());
          k.g = t(l, p, 1 - Math.exp(-4 * d));
          k.i = t(v, p, 1 - Math.exp(-1 * d));
          k.j = u.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    m.push(k);
    S(J(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    S(J(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    S(J(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
  },
  Ab = (c, ...b) => {
    let g = -1, k = 0, p = 0, l = 0, v = 0, u = 0, w = 1, y = 3;
    const D = {
        l: 0,
        h() {
          if (!D.l) {
            let X, ea, ba, C, K, L, P, M = 1, V = 1 / 0;
            for (const T of f) {
              var { x: E, z: F, w: H } = T;
              F = (E = Math.hypot(r - E, x - F)) - H;
              P ||= E < H;
              0 < F && V > F && (V = F, q = T);
              M = zb(M, E / H);
            }
            P
              || ({ x: X, z: ea, w: ba } = q,
                C = r - X,
                K = x - ea,
                L = Math.hypot(C, K),
                N = Math.atan2(-K, C),
                w && (p = (Math.random() - 0.5) * Math.PI / 2, y = Ta(y / (1 + Math.random()))),
                N += p,
                g = -Math.cos(N),
                k = Math.sin(N),
                0.1 < L && (L = zb(L, ba) / (L || 1), r = C * L + X, x = K * L + ea));
            w = P;
            y = t(y, 6 * (1 - M) + 3, 1 - Math.exp(-(M + 3) * d));
            N = r = t(r, r + g, 1 - Math.exp(-y * d));
            B = t(B, N, 1 - Math.exp(-y * d));
            N = x = t(x, x + k, 1 - Math.exp(-y * d));
            z = t(z, N, 1 - Math.exp(-y * d));
            l = Ya(l, Math.atan2(B - v, z - u) / Pa - 180, 1 - Math.exp(-3 * d));
            v = B;
            u = z;
            var N = (D.j = Q.j.multiply(c.translate(B, 0, z).rotateSelf(0, l, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.6 > Za(N)
              && (D.l = 1,
                N = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
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
                1 / 0
                  > Ea && (Ea = a + (ma && 12 > ma ? 5 : 7), h4.innerHTML = N),
                vb(),
                wb());
          }
          D.l
            && (D.j = h[2].j.translate(
              A % 4 * 1.2 - 1.7 + Math.sin(a + A) / 7,
              -2,
              1.7 * (A / 4 | 0) - 5.5 + n(A % 4 - 2) + Math.cos(a / 1.5 + A) / 6,
            ));
        },
      },
      Q = ha,
      A = Qa.length,
      f = b.map(([E, F, H]) => ({ x: E, z: F, w: H }));
    let q = f[0], { x: r, z: x } = q, B = r, z = x;
    Qa.push(D);
  },
  Db = (c, b, g, k) => {
    let p = 0, l = 0, v = 0, u = 1 / 0, w = -1 / 0, y = 1 / 0, D = -1 / 0, Q = 1 / 0, A = -1 / 0;
    const f = 1.1 * (g - b),
      q = (new DOMMatrix(db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
    return b = e(
      8,
      r => (r = q.transformPoint({ x: 4 & r ? 1 : -1, y: 2 & r ? 1 : -1, z: 1 & r ? 1 : -1 }),
        p -= r.x = (f * r.x | 0) / f / r.w,
        l -= r.y = (f * r.y | 0) / f / r.w,
        v -= r.z = (f * r.z | 0) / f / r.w,
        r),
    ),
      g = Bb(298, 139).translateSelf(p / 8, l / 8, v / 8),
      fb(b, g).map(({ x: r, y: x, z: B }) => {
        u = zb(u, r);
        w = Cb(w, r);
        y = zb(y, x);
        D = Cb(D, x);
        Q = zb(Q, B);
        A = Cb(A, B);
      }),
      Q *= 0 > Q ? k : 1 / k,
      A *= 0 < A ? k : 1 / k,
      Y(2 / (w - u), 2 / (D - y), 2 / (Q - A)).translateSelf((w + u) / -2, (D + y) / -2, (Q + A) / 2).multiplySelf(g);
  },
  Gb = () => {
    let c, b, g, k, p, l, v, u, w, y, D, Q, A, f, q, r = !0;
    const x = () => {
        aa || !r ? Eb.disconnect() : Eb.connect(Fb.destination);
        b4.innerHTML = "Music: " + r;
      },
      B = (z = !1) => {
        if (aa !== z) {
          aa = z;
          try {
            z
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : Eb.start();
          } catch {
          }
          ja = 0;
          document.body.className = z ? "l m" : "l";
          x();
          vb();
        }
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.I = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      B();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      B();
      ja = 1;
    };
    b4.onclick = () => {
      r = !r;
      x();
    };
    b5.onclick = () => B(!0);
    onclick = z => {
      q = 1;
      aa || (z.target === hC && (Fa[5] = !0), ja && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: z, target: E, type: F, repeat: H }) => {
      H || ((H = !!F[5] && E === document.body) && ("Escape" === z || "Enter" === z && aa)
        ? aa && !q || B(!aa)
        : 5
            === (F = {
              KeyA: 0,
              ArrowLeft: 0,
              KeyW: 1,
              ArrowUp: 1,
              KeyD: 2,
              ArrowRight: 2,
              KeyS: 3,
              ArrowDown: 3,
              KeyE: 5,
              Space: 5,
              Enter: 5,
            }[z])
        ? H && (Fa[F] = 1)
        : Fa[F] = H);
    };
    onmousemove = ({ movementX: z, movementY: E }) => {
      ja && (z || E) && (Na += 0.1 * z, Ia += 0.1 * E);
    };
    hC.ontouchstart = z => {
      if (!aa) {
        for (let { pageX: E, pageY: F, identifier: H } of z.changedTouches) {
          ja && E > hC.clientWidth / 2
            ? void 0 === u && (w = 0, l = E, v = F, u = H, y = Na, D = Ia)
            : void 0 === k && (p = 0, b = E, g = F, k = H);
        }
        c = na;
      }
    };
    hC.ontouchmove = z => {
      if (!aa) {
        for (let { pageX: ea, pageY: ba, identifier: C } of z.changedTouches) {
          var E, F, H, N, X;
          u === C && (Na = y + (ea - l) / 2.3, Ia = D + (ba - v) / 2.3, w = 1);
          k === C
            && (C = (b - ea) / 20,
              E = (g - ba) / 20,
              F = n(C),
              H = n(E),
              N = Math.atan2(E, C),
              X = Ta(Math.hypot(E, C) - 0.5),
              A = 0.2 < F ? Math.cos(N) * X : 0,
              f = 0.2 < H ? Math.sin(N) * X : 0,
              (A || f) && (p = 1),
              2 < F && (b = ea + 20 * Math.sign(C)),
              2 < H && (g = ba + 20 * Math.sign(E)));
        }
      }
    };
    hC.ontouchend = z => {
      let E;
      document.activeElement === document.body && z.preventDefault();
      for (const F of z.changedTouches) {
        F.identifier === u
          ? (u = void 0, w || (E = 1), w = 0)
          : F.identifier === k
          ? (k = void 0, f = A = 0, p || (E = 1), p = 0)
          : E = 1;
      }
      E && z.target === hC && c && 0.02 < (z = na - c) && 0.7 > z && (Fa[5] = !0);
    };
    ka = () => {
      let z = f + (Fa[1] ? 1 : 0) - (Fa[3] ? 1 : 0),
        E = A + (Fa[0] ? 1 : 0) - (Fa[2] ? 1 : 0),
        F = navigator.getGamepads()[0];
      if (F) {
        const H = ea => N[ea]?.pressed || 0 < N[ea]?.value ? 1 : 0, N = F.buttons, X = F.axes;
        F = H(3) || H(2) || H(1) || H(0);
        z += H(12) - H(13) - Ua(X[1], 0.2);
        E += H(14) - H(15) - Ua(X[0], 0.2);
        ja && (Ia += d * Ua(X[3], 0.3) * 80, Na += d * Ua(X[2], 0.3) * 80);
        F && !Q && (Fa[5] = 1);
        Q = F;
      }
      za = Math.atan2(z, E);
      Aa = Ua(Ta(Math.hypot(z, E)), 0.05);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Fa.length = A = f = 0;
      k = u = void 0;
      document.hidden && B(!0);
    })();
    B(!0);
  },
  Lb = (c, b) => {
    const g = {}, k = Z.c1h();
    return Z.abz(k, c), Z.abz(k, Hb(b, 35632)), Z.l8l(k), p => p ? g[p] || (g[p] = Z.gan(k, p)) : Z.u7y(k);
  },
  Ob = (c, b, g, k) => {
    if (aa) {
      g = Bb(0, 40 * Math.sin(na) - 70);
      for (var p of [37, 38, 39]) {
        cb(g, Nb, p - 1);
      }
      Z.uae(c, !1, Nb);
      Z.d97(4, h[39].F - h[37].v, 5123, 2 * h[37].v);
    } else {
      for (p = 0; h.length > p; ++p) {
        h[p].G && cb(h[p].j, Nb, p - 1);
      }
      Z.uae(c, !1, Nb);
      Z.d97(4, (b ? h[39].F : h[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        cb(Qa[b].j, Nb, b);
      }
      for (b = 0; m.length > b; ++b) {
        cb(m[b].j, Nb, b + 13), k || (Nb[16 * (b + 13) + 15] = 1 - m[b].g);
      }
      Z.uae(c, !1, Nb);
      Z.das(4, h[g].F - h[g].v, 5123, 2 * h[g].v, 13);
      Z.das(4, h[40].F - h[40].v, 5123, 2 * h[40].v, m.length);
    }
  },
  Pb = c => 0.5 > c % 1 ? 1 : -1,
  Qb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c,
  $b = c => {
    let b = 0;
    const g = () => {
        let v = 0;
        const u = M => {
            let V, T, Ja, ca = 0, ia = 0;
            const Va = [],
              qa = new Int32Array(768 * M),
              Tb = 2 ** (F - 9) / M,
              Ub = Math.PI * 2 ** (ba - 8) / M,
              tb = K * M & -2;
            for (let nb = 0; 11 >= nb; ++nb) {
              for (
                let ob = 0, Ib = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + nb];
                32 > ob;
                ++ob
              ) {
                const Jb = (32 * nb + ob) * M;
                for (var Ka = 0; 4 > Ka; ++Ka) {
                  if (V = 0, Ib && (V = w[Ib - 1].charCodeAt(ob + 32 * Ka) - 40, V += 0 < V ? 106 : 0), V) {
                    var fa;
                    if (!(fa = Va[V])) {
                      fa = V;
                      let W = void 0, va = void 0;
                      var Kb = V;
                      let Vb = 0, Wb = 0;
                      const Yb = 2 > b ? Rb : Sb, Zb = 2 > b ? 1 > b ? Pb : Qb : Sb, Mb = new Int32Array(x + B + P);
                      for (let La = 0, ub = 0; x + B + P > La; ++La, ++ub) {
                        let Ma = 1;
                        x > La ? Ma = La / x : x + B > La || (Ma = (1 - (Ma = (La - x - B) / P)) * 3 ** (-E / 16 * Ma));
                        0 > ub
                          || (ub -= 4 * M,
                            va = 396e-5 * 2 ** ((Kb + D - 256) / 12),
                            W = 396e-5 * 2 ** ((Kb + f - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                        Mb[La] = 80
                            * (Yb(Vb += va * Ma ** (Q / 32)) * y + Zb(Wb += W * Ma ** (q / 32)) * A
                              + (r ? (2 * Math.random() - 1) * r : 0))
                            * Ma | 0;
                      }
                      fa = Va[fa] = Mb;
                    }
                    for (let W = 0, va = 2 * Jb; fa.length > W; ++W, va += 2) {
                      qa[va] += fa[W];
                    }
                  }
                }
                for (let W, va = 0; M > va; ++va) {
                  Ka = 0;
                  fa = 2 * (Jb + va);
                  var wa = (((W = qa[fa]) || Ja)
                    && (T = 308e-5 * H,
                      1 !== b && 4 !== b || (T *= Math.sin(Tb * fa * Math.PI * 2) * L / 512 + 0.5),
                      T = 1.5 * Math.sin(T),
                      ca += T * ia,
                      wa = (1 - N / 255) * (W - ia) - ca,
                      ia += T * wa,
                      W = 4 === b ? ia : 3 === b ? wa : ca,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= X / 32,
                      Ja = 1e-5 < W * W,
                      wa = Math.sin(Ub * fa) * ea / 512 + 0.5,
                      Ka = W * (1 - wa),
                      W *= wa),
                    fa < tb || (Ka += qa[1 + fa - tb] * C / 255, W += qa[fa - tb] * C / 255),
                    v + fa >> 1);
                  p[wa] += (qa[fa] = Ka) / 65536;
                  l[wa] += (qa[++fa] = W) / 65536;
                }
              }
            }
            v += 768 * M;
          },
          w = Ga[b],
          [y, D, Q, A, f, q, r, x, B, z, E, F, H, N, X, ea, ba, C, K, L] = Ha[b],
          P = 4 * z ** 2;
        u(5513);
        u(4562);
        u(3891);
        Xb(5 > ++b ? g : c);
      },
      k = Fb.createBuffer(2, 5362944, 44100),
      p = k.getChannelData(0),
      l = k.getChannelData(1);
    Eb.buffer = k;
    Eb.loop = !0;
    Xb(g);
  },
  ac = () => {
    let c, b, g, k, p, l, v, u, w, y, D, Q, A, f, q, r, x, B = 1, z = 2, E = 2;
    const F = () => {
        let C = 0, K = 0, L = 0, P = 0;
        k = 0;
        ea.fill(0);
        for (let V = 0; 31 > V; ++V) {
          let T = 0;
          const Ja = 512 * V;
          for (let ca = 0; 128 > ca; ca++) {
            var M = Ja + 4 * ca;
            let ia = (ba[M] + ba[1 + M]) / 255;
            M = ba[2 + M];
            14 < ca && 114 > ca && (T += ia);
            M && ia && (ia = ea[M] + 1, ea[M] = ia, C > ia || (C = ia, K = M));
          }
          3 > T && 5 < V && (L += V / 32);
          3 < T && (7 < V && (P += V / 15), k = 1);
        }
        K && (k = 1);
        c = K || b;
        b = K;
        E = t(E, k ? 6.5 : -20 > Oa.y ? 11 : 8, 1 - Math.exp(-4 * d));
        Oa.y += P / 41 - (k || E) * L / 41 * E * d;
      },
      H = () => {
        y = w = 0;
        for (let C = 32; 128 > C; C += 2) {
          let K = 0, L = 0, P = 0, M = 0;
          const V = 512 * C;
          for (let T = 1 & C; 128 > T; T += 2) {
            const Ja = V + 4 * T;
            let ca = V + 4 * (127 - T);
            const ia = ba[Ja] / 255, Va = ba[1 + ca] / 255, qa = 1 - n(T / 63.5 - 1);
            10 < T && 118 > T
              && (K = Cb(Cb(ia * qa, ia * ba[ca] / 255), K), L = Cb(Cb(Va * qa, Va * ba[1 + Ja] / 255), L));
            (54 > T || 74 < T) && 1e-3 < (ca = (1 - qa) * Cb(ia, Va) / 3)
              && (64 > T && ca > P ? P = ca : 64 < T && ca > M && (M = ca));
          }
          n(M - P) > n(w) && (w = M - P);
          n(L - K) > n(y) && (y = L - K);
        }
      },
      N = () => z ? m[oa].u.j : g && 1 === h[g].G && h[g].j || xb,
      X = (C, K, L, P) => t(C, K, B || (Ta(n(K - C) ** 0.9 - L) + 1 / 7) * (1 - Math.exp(-(1.5 * P) * d))),
      ea = new Int32Array(256),
      ba = new Uint8Array(65536);
    la = () => {
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, ba);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(H)();
      NO_INLINE(F)();
      var C = Ta(1 - 5 * Cb(n(w), n(y))), K = ja ? Na * Pa : Math.PI;
      C =
        (A = t(A, k * C * Ta(2 * Aa) * 7, 1 - Math.exp(-(k ? 0.1 < C ? 10 : 5 + 2 * Aa : 1) * d)),
          D = t(D, 0, 1 - Math.exp(-(k ? 8 : 4) * d)),
          w += d * ((c ? 0 : C * D) - Math.cos(za + K) * Aa * A),
          Q = t(Q, 0, 1 - Math.exp(-(k ? 8 : 4) * d)),
          y += d * ((c ? 0 : C * Q) - Math.sin(za + K) * Aa * A),
          N());
      var { x: L, y: P, z: K } = 1 < z
        ? m[oa].J.transformPoint({ x: 0, y: oa || 0.9 < ua ? 15 : 1, z: -2.4 })
        : ((L = (K = C).inverse()).m41 = L.m42 = L.m43 = 0,
          P = L.transformPoint({ x: w, z: y, w: 0 }),
          Oa.x += P.x,
          Oa.z += P.z,
          K.transformPoint(Oa));
      if (
        c && (D = (L - Sa.x) / d, Q = (K - Sa.z) / d),
          Sa.x = L,
          Sa.y = P,
          Sa.z = K,
          (z = z && (k && c ? 0 : 1)) || c !== g
      ) {
        g = c;
        const M = (C = N()).inverse().transformPoint(Sa);
        Oa.x = M.x;
        Oa.y = M.y;
        Oa.z = M.z;
      }
      u = t(u, ya * (27 < c && 32 > c), 1 - Math.exp(-2 * d));
      P < (-25 > L || 109 > K ? -25 : -9) && (D = Q = A = 0, z = 2);
      1 === c && (m[9].l = -15 > L && 0 > K ? 1 : 0);
      f = t(t(f, P, 1 - Math.exp(-2 * d)), P, z || 8 * n(f - P));
      r = X(r, f, 2, 1);
      q = X(q, L, 0.5, 1);
      x = X(x, K, 0.5, 1);
      ja
        ? (C = z + (1 - Math.exp(-18 * d)), Ba = t(Ba, L, C), Ca = t(Ca, f + 1.5, C), Da = t(Da, K, C), Na = Xa(Na))
        : (Ca = X(Ca, Cb(r + Ta((-60 - K) / 8, 0, 20) + 13 + 9 * u, 6), 4, 2),
          Da = X(Da, x + -18 + 5 * u, 1, 2 + u),
          Ba = X(Ba, q, 1, 2 + u),
          P = zb(4, -n(x - Da)),
          C = q - Ba,
          Na = Ya(Na, 90 - Xa(Math.atan2(P, C) / Pa), B + (1 - Math.exp(-6 * d))),
          Ia = Ya(Ia, 90 - Math.atan2(Math.hypot(P, C), Ca - r) / Pa, B + (1 - Math.exp(-6 * d))));
      Ia = Ta(Ia, -87, 87);
      l = Ya(l, p, 1 - Math.exp(-8 * d));
      v = t(v, Aa, 1 - Math.exp(-10 * d));
      Aa && (p = 90 - za / Pa);
      B = 0;
      h[37].j = I(L, f, K).rotateSelf(0, l);
      for (C = 0; 2 > C; ++C) {
        h[38 + C].j = h[37].j.translate(0, v * Ta(0.45 * Math.sin(9.1 * a + Math.PI * (C - 1) - Math.PI / 2)))
          .rotateSelf(v * Math.sin(9.1 * a + Math.PI * (C - 1)) * 0.25 / Pa, 0);
      }
    };
  },
  Hb = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b),
  Xb = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Sb = c => Math.sin(c * Math.PI * 2),
  Rb = c => c % 1 * 2 - 1,
  Fb = new AudioContext(),
  xb = new DOMMatrix(),
  bb = new Float32Array(16),
  Nb = new Float32Array(624),
  bc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  zb = NO_INLINE((c, b) => c < b ? c : b),
  Cb = NO_INLINE((c, b) => b < c ? c : b),
  n = NO_INLINE(c => 0 > c ? -c : c),
  I = NO_INLINE((c, b, g) => xb.translate(c, b, g)),
  Bb = NO_INLINE((c, b, g) => xb.rotate(c, b, g)),
  Y = NO_INLINE((c, b, g) => xb.scale(c, b, g)),
  U = NO_INLINE((c, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c),
  Eb = Fb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Z) {
  Z[c[0] + [...c].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
Xb(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const k = q => {
            let r;
            Z.f1s();
            requestAnimationFrame(k);
            x = (q - (da || q)) / 1e3;
            na += x;
            a += d = aa ? 0 : zb(0.066, x);
            da = q;
            0 < d
              && (ka(),
                sb(),
                la(),
                w(),
                Z.b6o(36160, A),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                { x, y: q, z: r } = Sa,
                Z.uae(w("b"), !1, cb(Bb(0, 180).invertSelf().translateSelf(-x, -q, 0.3 - r))),
                Ob(w("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(w("b"), !1, cb(I(-x, -q, -r - 0.3))),
                Ob(w("c"), 0, 41, 0),
                Z.f1s());
            Fa[5] = 0;
            var x = aa
              ? Bb(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : Bb(-Ia, -Na).invertSelf().translateSelf(-Ba, -Ca, -Da);
            v();
            Z.b6o(36160, Q);
            Z.v5y(0, 0, 2048, 2048);
            D[0](Db(x, 0.3, 55, 10));
            D[1](Db(x, 55, 186, 11));
            y();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            D[0]();
            D[1]();
            Z.uae(y("a"), !1, db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
            Z.uae(y("b"), !1, cb(x));
            Z.ubu(y("k"), Ba, Ca, Da);
            Ob(y("c"), !ja, 42, 0);
            u();
            Z.ubu(u("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, na);
            Z.ubu(u("k"), Ba, Ca, Da);
            Z.uae(u("b"), !1, cb(x.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, A);
            Z.f1s();
          },
          p = g;
        let l = Hb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const v = Lb(
            Hb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          u = Lb(
            Hb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          w = Lb(
            l,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          y = Lb(
            l,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          D = e(2, q => {
            const r = new Float32Array(16), x = Z.c25();
            return Z.a4v(33984 + q),
              Z.b9j(3553, x),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              B => {
                B
                  ? (cb(B, r),
                    Z.uae(v("b"), !1, r),
                    Z.fas(36160, 36096, 3553, x, 0),
                    Z.c4s(256),
                    Ob(v("c"), !ja, 42, 1))
                  : Z.uae(y(q ? "j" : "i"), !1, r);
              };
          }),
          Q = Z.c5w(),
          A = (l = Z.c3z(), Z.c5w()),
          f = Z.c25();
        w();
        Z.uae(w("a"), !1, db(1.4, 0.59, 1e-4, 1));
        y();
        Z.ubh(y("q"), 2);
        Z.ubh(y("h"), 1);
        Z.ubh(y("g"), 0);
        u();
        Z.ubh(u("q"), 2);
        Z.b6o(36160, Q);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, A);
        Z.bb1(36161, l);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, l);
        Z.a4v(33986);
        Z.b9j(3553, f);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, f, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, p);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        sb();
        NO_INLINE(Gb)();
        NO_INLINE(ac)();
        requestAnimationFrame(k);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = bc;
  NO_INLINE($b)(() => {
    Xb(() => {
      let l, v = 0;
      const u = [],
        w = [],
        y = [],
        D = [],
        Q = x => {
          let { x: B, y: z, z: E } = l[x], F = (r[0] = B, r[1] = z, r[2] = E, x = "" + (l.D ? q : A), f.get(x));
          return void 0 !== F
            ? (B = 3 * F, D[B] = (D[B++] + A[5]) / 2, D[B] = (D[B++] + A[6]) / 2, D[B] = (D[B] + A[7]) / 2)
            : (f.set(x, F = f.size), w.push(B, z, E, r[3]), y.push(A[4]), D.push(A[5], A[6], A[7])),
            F;
        },
        A = new Int32Array(8),
        f = new Map(),
        q = new Int32Array(A.buffer, 0, 5),
        r = new Float32Array(A.buffer);
      for (const x of h) {
        for (l of (r[3] = 40 === x.H ? -14 : x.G && x.H, x.s)) {
          const { x: B, y: z, z: E } = ab(l);
          A[4] = 0 | l.A;
          A[5] = 32767 * B;
          A[6] = 32767 * z;
          A[7] = 32767 * E;
          for (let F = 2, H = Q(0), N = Q(1); l.length > F; ++F) {
            u.push(H, N, N = Q(F));
          }
        }
        x.s = null;
        x.v = v;
        x.F = v = u.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(w), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(D), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(y), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(u), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Xb(b);
      try {
        const [x, B, z, E, F] = JSON.parse(localStorage.I);
        m.map((H, N) => H.g = H.i = H.l = N ? 0 | x[N] : 0);
        Qa.map((H, N) => H.l = 0 | B[N]);
        oa = z;
        a = E;
        xa = F;
      } catch {
      }
      ua = Ta(oa);
    });
    const k = e(11, l => I(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10)),
      p = e(10, l => hb(fb(gb(18), k[l]).reverse(), fb(gb(18), k[l + 1]), 1)).flat();
    R(() => S([Ra.slice(1)], I(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const l = (f, q, r) =>
          R(x => {
            x.h = () => I(w() * Math.sin(3 * f + a * f) * q);
            Ra.map(({ x: B, z }) => {
              S(J(11, 1), I(4 * B, 4, r + 4 * z).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6));
              S(J(), I(4 * B, 7, r + 4 * z).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
            });
            S(O(
              G(J(), I(0, 0, r).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(B => G(J(), I(5 * B, 0.2, r).rotate(-30 * B).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3))),
            ));
            S(J(), I(0, -3, r).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
          }),
        v = (f, q, r) =>
          I(f + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, r).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        u = f =>
          O(
            G(J(), I(0, -f / 2).scale(6, f - 1, 2.2)),
            G(J(), I(0, -f / 2 - 6).scale(4, f - 3, 4)),
            G(J(32, 1), I(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => zb(m[2].i, 1 - m[4].i),
        y = O(
          G(J(20, 1, 1.15, 1), I(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7)),
          G(J(20, 1, 1.3, 1), I(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2)),
          G(J(), I(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),
        ),
        D = e(7, f => G(J(6, 1), I(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38))).flat(),
        Q = (R(f => {
          f.h = () => v(-12, 4.2, 40 * ua - 66);
          S(y);
          yb(I(0, -3, 4));
        }),
          yb(I(-5.4, 1.5, -19).rotate(0, -90)),
          Ab(I(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Ab(I(0, 2.8), [5, 10, 3], [-5, 10, 3], ...gb(18).map(({ x: f, z: q }) => [7 * f, 10 * q, 4.5 - 2 * n(f)])),
          S(J(), I(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
          Ra.map(({ x: f, z: q }) => S(J(6), I(3 * f, 3, 15 * q).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(f => S(J(), I(0, 0, f).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((f, q) => {
            S(J(), I(0, 6.3, f).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
            S(J(), I(0, 1, f).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
            R(r => {
              r.h = () => I(0, 0, f).scale(1, Ta(1.22 - m[q + 1].g), 1);
              S(D);
            });
          }),
          e(5, f =>
            e(2, q =>
              S(
                p,
                I(18.5 * (q - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2),
                U(1, 1, 0.8, 0.2),
              ))),
          S(J(), I(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)),
          S(J(), I(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2)),
          S(J(5), I(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4)),
          S(J(), Bb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5)),
          S(O(
            rb(
              G(J(6, 0, 0, 0.3), I(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2)),
              G(J(6), I(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)),
              G(J(6, 0, 0, 0.3), I(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2)),
            ),
            G(J(5), Y(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)),
            G(J(5, 0, 1.5), I(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2)),
            G(J(), Bb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5)),
            G(J(6), I(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5)),
          )),
          R(f => {
            f.h = () =>
              I(0, 0.01 < m[3].g ? (5 * Math.cos(1.5 * a) + 2) * m[3].i * (1 - m[2].g) + -15 * (1 - m[3].g) : -500, 0);
            S(J(5), I(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
            yb(I(0, 1.2));
          }),
          yb(I(15, -2, 4)),
          l(0.7, 12, 35),
          l(1, 8.2, 55),
          R(f => {
            f.h = () => I(w() * Math.sin(a / 1.5 + 2) * 12);
            S(
              O(
                rb(
                  G(J(), Y(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  G(J(6), Y(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  G(J(), I(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5)),
                  G(J(16, 1, 0, 4), Y(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2)),
                ),
                G(J(), Y(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),
              ),
              I(0, 0, 45),
            );
            Ab(I(0, 2.8, 45), [0, 0, 4.5]);
          }),
          S(J(), I(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
          R(f => {
            f.h = () => I(9.8 * (1 - w()));
            S(J(3), I(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
            S(J(8), I(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
            S(J(), I(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
            S(J(), I(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
            yb(I(-23, -0.5, 66.5));
          }),
          R(f => {
            f.h = () => I(0, Ta(1 - 5 * w()) * Wa(m[4].g, m[5].g) * Math.sin(1.35 * a) * 4);
            S(J(), I(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
            S(O(G(J(), Y(3, 1.4, 2.7)), G(J(), Y(1.2, 8, 1.2))), I(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2));
          }),
          R(f => {
            f.h = () => I(0, 0, Ta(1 - 5 * w()) * Wa(m[4].g, m[5].g) * Math.sin(0.9 * a) * 8);
            S(O(
              G(J(), I(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
              G(J(), I(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),
            ));
            S(J(), I(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
          }),
          R(f => {
            f.h = () => I(0, -6.5 * m[4].i);
            S(J(6), I(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4));
          }),
          yb(I(-55, -1.1, 46).rotate(0, 90)),
          S(J(6), I(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)),
          S(J(7), I(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)),
          [
            ...G(J(), I(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)),
            ...O(
              G(J(6), Bb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)),
              G(J(4, 0, 0.01), I(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3)),
              G(J(6), Bb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => G(J(5), I(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        A = (S(Q, I(-53, 0, 55)),
          R(f => {
            f.h = () => I(-75, (1 - m[5].i) * (1 - m[6].g) * 3, 55).rotate(180 * (1 - m[5].i) + sa, 0);
            S(Q);
          }, 2),
          S(J(), I(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2)),
          S(J(3, 0, -0.5), I(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2)),
          S(O(
            rb(
              G(J(), I(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2)),
              G(J(), I(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
              G(J(), I(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2)),
              G(J(), I(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2)),
              G(J(6), I(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3)),
              G(J(), I(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2)),
              G(J(), I(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2)),
            ),
            G(J(8), I(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4)),
            G(J(8), I(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5)),
            G(J(8), I(-100, -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5)),
          )),
          Ab(I(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Ab(I(-89, 0.2, 80), [0, 0, 6]),
          S(O(
            G(J(), I(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)),
            G(J(), I(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4)),
            G(J(20, 1), I(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4)),
          )),
          R(f => {
            f.h = () => I(-99.7, -1.9, 63.5).scale(1, Ta(1.1 - m[6].g), 1);
            S(D);
          }),
          Ra.map(({ x: f, z: q }) => {
            S(J(6), I(7 * f - 100, -3, 7 * q + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(r => S(J(6), I(7 * f - 100, r, 7 * q + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8)));
          }),
          e(7, f => {
            S(
              J((23 * f + 1) % 5 + 5, 0, 0.55),
              I(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              U(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          S(J(), I(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)),
          S(J(4), I(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)),
          S(J(12, 1), I(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)),
          yb(I(-86, -7.5, 31)),
          R(f => {
            f.h = () => I(0, 3.5 * (1 - Cb(m[6].g, m[7].g)) + Wa(m[7].i, m[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(q => S(J(), I(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2)));
          }),
          R(f => {
            f.h = () => I(0, Wa(m[7].i, m[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Wa(m[7].i, m[6].i));
            [6, 18].map(q => S(J(), I(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2)));
          }),
          S(
            O(
              rb(
                G(J(5), I(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3)),
                G(J(5), Y(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),
                G(J(), Y(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),
              ),
              G(J(5), Y(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),
            ),
            I(-38.9, -11.3, 17),
          ),
          yb(I(-38.9, -9.6, 10)),
          R(f => {
            f.h = () => I(0, -7.3 * m[7].i);
            S(
              O(
                rb(
                  G(J(5), I(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5)),
                  G(J(5), I(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5)),
                  G(J(5), I(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5)),
                ),
                G(J(5), Y(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)),
                G(J(5), I(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5)),
              ),
              I(-38.9, -11.3, 17),
            );
            Ab(I(-39.1, -0.6, 17).rotate(11), ...gb(15).map(({ x: q, z: r }) => [3 * q, 3 * r, 1.2]));
          }),
          Ra.map(({ x: f, z: q }) => {
            S(J(14, 1), I(9 * f - 38.9, -7.3, 11 * q + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(r =>
              S(J(17, 1), I(9 * f - 38.9, r - 11.3, 11 * q + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3))
            );
          }),
          S(
            O(
              rb(
                G(J(6), I(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3)),
                G(J(), I(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3)),
              ),
              ...e(6, f =>
                e(6, q =>
                  G(
                    J(6),
                    I(4.6 * q - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2),
                    U(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            I(-38.9, -11.3, 17),
          ),
          Ab(I(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          S(J(5), I(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4)),
          yb(I(-84, -0.5, 85).rotate(0, 45)),
          R(f => {
            f.h = () => v(-123, 1.4, 55 + -65 * xa);
            S(y);
            yb(I(0, -3, -4).rotate(0, 180));
          }),
          O(
            G(J(), I(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3)),
            G(J(3), I(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => G(J(), I(f, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3))),
          ));
      R(f => {
        f.h = () => I(0, -2, Wa(m[10].g, m[11].g) * n(Math.sin(1.1 * a)) * -8.5 + 10);
        e(2, q => S(A, I(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      R(f => {
        f.h = () => I(0, -2, Wa(m[10].g, m[11].g) * n(Math.sin(2.1 * a)) * -8.5 + 10);
        e(2, q => S(A, I(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      R(f => {
        f.h = () =>
          I(
            0,
            -2,
            -8.5 * Cb((1 - m[10].g) * (1 - Wa(m[10].g, m[11].g)), Wa(m[10].g, m[11].g) * n(Math.sin(1.5 * a))) + 10,
          );
        e(3, q => S(A, I(9 * q - 106, 1.7, -12)));
      });
      S(
        O(
          rb(G(J(), I(26.5, -1.6, 10).scale(20, 2.08, 3)), G(J(), I(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...e(4, f => G(J(), I(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...e(3, f => G(J(), I(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        I(-123, 0, -12),
        U(0.5, 0.5, 0.6, 0.2),
      );
      yb(I(-116, -1.4, -18).rotate(0, 180));
      S(J(), I(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2));
      S(J(6), I(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      S(J(), I(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      S(J(8), I(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      S(J(8), I(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      S(J(), I(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      e(3, f => {
        S(u(16), I(12 * f - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        S(u(16), I(-77, -9, -12 * f - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3));
      });
      S(O(
        G(J(12), I(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2)),
        G(J(), I(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2)),
        G(J(), I(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2)),
        G(J(12), I(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2)),
      ));
      S(J(), I(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3));
      S(J(9), I(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      S(O(
        G(J(), I(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1)),
        G(J(9), I(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2)),
      ));
      yb(I(-98, -4.4, -40).rotate(0, 90));
      Ab(I(-115, 0.2, -12), [0, 0, 3.5]);
      Ab(I(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      S(O(
        rb(
          G(J(6, 0, 0, 0.6), I(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2)),
          G(J(), I(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2)),
        ),
        G(J(5), I(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2)),
      ));
      e(4, f =>
        R(q => {
          q.h = () => {
            const r = Wa(m[8].i, m[12].i);
            return I(
              (2 < f ? 2 * (1 - r) + r : 0) - 100,
              r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - m[8].i) * (1 - m[12].i) * -7
                + Cb(r, 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          S(
            J(6),
            I(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            U(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      R(f => {
        f.h = () => {
          const q = Wa(m[8].i, m[12].i);
          return I(2.5 * (1 - q) - 139.7, -3 * (1 - m[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * a) * (3 * q + 3),
            0,
          );
        };
        S(O(G(J(10), Y(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), G(J(10), Y(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5))));
        S(J(15, 1), I(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3));
        S(J(10), I(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        S(J(5), I(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        yb(I(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(q => S(p, Bb(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2)));
        Ab(I(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        S(J(12, 1), I(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(q => S(J(15, 1), I(-7.5 * f - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4)));
        S(p, I(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), U(1, 1, 0.8));
        S(
          O(
            G(J(), I(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4)),
            G(J(), Y(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)),
            G(J(28, 1), I(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5)),
            G(J(5), I(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5)),
            G(J(5), I(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5)),
          ),
          I(f - 100, 0.7, 97),
        );
      });
      R(f => {
        f.h = () => I(-100, 0.6, 96.5).scale(0.88, 1.2 - m[12].g);
        S(D);
      });
      S(O(
        G(J(), I(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1)),
        G(J(45, 1), I(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1)),
      ));
      R(f => {
        f.h = () => I(-81, 0.6, 106).rotate(0, 40 + pa);
        S(O(
          G(J(45, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),
          G(J(), I(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2)),
        ));
        S(J(8), I(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        S(J(5), I(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Ab(I(0, 3), ...gb(14).map(({ x: q, z: r }) => [5.6 * q, 5.6 * r, 2]));
      });
      R(f => {
        f.h = () => I(-65.8, 0.8, 106).rotate(0, ra);
        [-1, 1].map(q =>
          S(p, Bb(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), U(1, 1, 0.8))
        );
        S(O(G(J(28, 1), I(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)), G(J(), Y(9, 5, 2), U(0.3, 0, 0, 0.3))));
        S(G(J(28, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(G(J(5), I(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      R(f => {
        f.h = () => I(-50.7, 0.8, 106).rotate(0, 180 - ra);
        S(O(
          G(J(28, 1), I(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          G(J(), I(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          G(J(), I(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        S(G(J(28, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(G(J(5), I(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      R(f => {
        f.h = () => I(-50.7, 0.8, 91).rotate(0, 270 + ra);
        S(O(
          G(J(28, 1), I(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          G(J(), I(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          G(J(), I(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        S(G(J(28, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(G(J(5), I(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      S(J(), I(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      S(J(), I(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      S(J(), I(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      S(J(), I(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      yb(I(-34, 2.7, 96).rotate(-12, 0));
      S(J(5), I(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6));
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((f, q) =>
        R(r => {
          r.h = () =>
            I(0, (1 - m[13].i) * (1 - m[14].i) * (q ? 0 : 3) + Wa(m[13].i, m[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4);
          S(J(), I(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), f);
          2 === q && S(J(), I(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
          1 === q && S(J(), I(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => S(p, I(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), U(1, 1, 0.8)));
      e(
        3,
        f =>
          S(
            u(24.7 - 0.7 * (1 & f)),
            I(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),
          ),
      );
      S(O(
        G(J(6, 0, 0, 0.3), I(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2)),
        G(J(5), I(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),
      ));
      yb(I(0, 1.7, 82).rotate(0, 180));
      S(J(5), I(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4));
      S(J(6), I(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3));
      S(J(), I(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      S(J(7), I(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      S(O(
        rb(
          G(J(), I(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4)),
          G(J(), I(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4)),
        ),
        G(J(5), I(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4)),
      ));
      R(f => {
        f.h = () => {
          const q = Math.sin(a);
          return I(-2 * q).rotate(25 * q);
        };
        S(J(3), I(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(q => {
          S(J(6), I(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4));
          S(J(), I(0, 6.2, q + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4));
        });
      });
      R(f => {
        f.h = () => {
          const q = Wa(Wa((m[14].g + m[14].i) / 2, m[13].i), (m[15].g + m[15].i) / 2);
          return I(0, 16 * q, 8.5 * Ta(2 * q - 1) + 95);
        };
        S(J(5), Y(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        S(J(5), Y(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        yb(I(0, 1.5, -1).rotate(0, 180));
      });
      Ab(I(0, 3, 95), ...gb(9).map(({ x: f, z: q }) => [9 * f, 9 * q, 4]));
      Ab(I(0, 19, 134), [0, 0, 3.5]);
    });
    R(() => {
      [0, 180].map(v => S(p, Bb(0, v).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8)));
      S(ib(20), I(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      const l = G(O(J(15, 1), G(J(), I(0, 0, 1).scale(2, 2, 0.5))), Bb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3));
      [-1, 1].map(v => S(l, I(0.2 * v, 1.2, 0.4).rotate(0, 20 * v, 20 * v)));
      S(J(), I(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      S(ib(20), Y(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
    });
    [-1, 1].map(l =>
      R(() => {
        S(J(10, 1), I(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
      })
    );
    R(() => {
      S(J(6, 1), Y(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      S(J(10), I(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      S(J(3), I(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1));
    }, 0);
    R(() => {
      S(J(6).slice(0, -1), Y(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    R(() => {
      S(
        ib(30, 24, (l, v, u) => {
          const w = v / 24, y = l * Math.PI * 2 / 30, D = w ** 0.6 * Math.PI / 2;
          l = w * w * Math.sin(l * Math.PI * 14 / 30) / 4;
          return 23 === v
            ? { x: u.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(y) * Math.sin(D),
              y: Math.cos(w * Math.PI) - w - l,
              z: Math.sin(y) * Math.sin(D) + Math.sin(l * Math.PI * 2) / 4,
            };
        }),
        Y(0.7, 0.7, 0.7),
        U(1, 1, 1),
      );
      [-1, 1].map(l => S(ib(12), I(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
