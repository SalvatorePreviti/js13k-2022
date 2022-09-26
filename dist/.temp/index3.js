let aa,
  ba,
  ea,
  ha,
  ia,
  ja,
  ka = 0,
  ma = 0,
  a = 0,
  na = 0,
  oa = 0,
  pa = 0,
  ra = 0,
  sa = 0,
  ta = 0,
  ua = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 1,
  d = 0.066;
const Da = [],
  Fa = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ga = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ];
var Ha = 0, Ia = 180;
const Ma = { x: 0, y: 0, z: 0 },
  Na = (c, b) => Array.from(Array(c), (g, l) => b(l)),
  Oa = Math.PI / 180,
  e = [],
  h = [],
  Pa = [],
  Qa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ra = { x: 0, y: 0, z: 0 },
  Sa = (c, b = 0, g = 1) => c < b ? b : g < c ? g : c,
  Ta = (c, b) => m(c) > b ? c : 0,
  p = (c, b, g) => (0 < g ? 1 > g ? c + (b - c) * g : b : c) || 0,
  Ua = (c, b) => (c = Sa(c), p(c, 1 - c, b)),
  Va = c => Math.atan2(Math.sin(c *= Oa), Math.cos(c)) / Oa,
  Wa = (c, b, g) =>
    c + (2 * (b = (b
                  - c) % 360) % 360 - b) * Sa(g) || 0,
  Xa = ({ x: c, y: b, z: g }) => Math.hypot(c - Ra.x, b - Ra.y, g - Ra.z),
  Ya = ({ x: c, y: b, z: g }, l) => c * l.x + b * l.y + g * l.z,
  Za = c => {
    let b, g = 0, l = 0, n = 0, k = c.at(-1);
    for (b of c) {
      g += (k.y - b.y) * (k.z + b.z), l += (k.z - b.z) * (k.x + b.x), n += (k.x - b.x) * (k.y + b.y), k = b;
    }
    return b = Math.hypot(g, l, n), g /= b, l /= b, n /= b, { x: g, y: l, z: n, w: g * k.x + l * k.y + n * k.z };
  },
  bb = (
    c,
    b = $a,
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
  cb = (c, b, g, l) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0],
  db = (c, b, g) => (c.D = g, c.A = b, c),
  eb = (c, b, g = c.A) =>
    db(
      c.map(l => {
        let n, k;
        return { x: l, y: n, z: k } = l,
          { x: l, y: n, z: k } = b.transformPoint({ x: l, y: n, z: k }),
          { x: l, y: n, z: k };
      }),
      g,
      c.D,
    ),
  u = (c, b, g) => c.map(l => eb(l, b, g)),
  fb = (c, b = 0) =>
    Na(c, g => {
      const l = Math.cos(2 * Math.PI * g / c);
      return { x: Math.sin(2 * Math.PI * g / c), y: 0, z: 0.01 > m(l) ? l : 0 > l ? l - b : l + b };
    }),
  gb = (c, b, g) =>
    c.map((l, n, { length: k }) => db([l, b[k - n - 1], b[k - (n + 1) % k - 1], c[(n + 1) % k]], c.A, g)),
  J = (
    c,
    b,
    g = 0,
    l,
  ) => (c = c ? fb(c, l) : Qa,
    l = eb(c, G(0, 1).scale3d(0 < g ? g : 1)),
    c = eb(c, G(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...gb(c, l, b), l, c]),
  hb = (
    c,
    b = c,
    g = (
      l,
      n,
    ) => (n *= Math.PI / b,
      { x: Math.cos(l *= 2 * Math.PI / c) * Math.sin(n), y: Math.cos(n), z: Math.sin(l) * Math.sin(n) }),
  ) => {
    const l = [];
    for (let n = 0; c > n; n++) {
      for (let k = 0; b > k; k++) {
        const t = db([], 0, 1);
        l.push(t);
        t.push(g(n, k, t));
        k && t.push(g((n + 1) % c, k, t));
        b - 1 > k && t.push(g((n + 1) % c, k + 1 % b, t));
        t.push(g(n, k + 1 % b, t));
      }
    }
    return l;
  },
  ib = (c, b) => {
    var g, l, n, k = b.C;
    for (var t = 0; k.length > t; ++t) {
      if (-0.00008 > (g = Ya(c, k[t]) - c.w) ? n = b : 8e-5 < g && (l = b), n && l) {
        l = [];
        n = [];
        k = b.C;
        t = b.B;
        let v = k.at(-1), w = Ya(c, v) - c.w;
        for (const y of k) {
          g = Ya(c, y) - c.w,
            8e-5 > w && n.push(v),
            -0.00008 < w && l.push(v),
            (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g)
            && (w /= g - w,
              v = { x: v.x + (v.x - y.x) * w, y: v.y + (v.y - y.y) * w, z: v.z + (v.z - y.z) * w },
              l.push(v),
              n.push(v)),
            v = y,
            w = g;
        }
        return {
          o: 2 < l.length && { C: db(l, k.A, k.D), B: t, u: b },
          m: 2 < n.length && { C: db(n, k.A, k.D), B: t, u: b },
        };
      }
    }
    return { o: l, m: n };
  },
  jb = (c, b, g = Za(b.C)) => {
    let l, n, k;
    return c
      ? ({ o: l, m: n } = ib(c, b), l || n || c.s.push(b), l && (c.o = jb(c.o, l, g)), n && (c.m = jb(c.m, n, g)))
      : ({ x: l, y: n, z: g, w: k } = g, c = { x: l, y: n, z: g, w: k, s: [b], o: 0, m: 0 }),
      c;
  },
  kb = (c, b, g) => {
    const l = [],
      n = (k, t) => {
        let { o: v, m: w } = ib(k, t);
        v || w || (0 < g * Ya(k, b) ? v = t : w = t);
        v && (k.o ? n(k.o, v) : l.push(v));
        w && k.m && n(k.m, w);
      };
    for (const k of b.s) {
      n(c, k);
    }
    return l;
  },
  lb = (c, b) => c && (b(c), lb(c.o, b), lb(c.m, b)),
  ob = c => c.length ? c.reduce((b, g) => jb(b, { C: g, B: 0, u: 0 }), 0) : c,
  pb = c => (lb(c, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const l of b.s) {
      l.B = !l.B;
    }
  }),
    c),
  qb = (...c) =>
    c.reduce((b, g) => {
      const l = [];
      if (b = ob(b), g) {
        g = ob(g);
        lb(b, n => n.s = kb(g, n, 1));
        lb(g, n => l.push([n, kb(b, n, -1)]));
        for (let [n, k] of l) {
          for (const t of k) {
            jb(b, t, n);
          }
        }
      }
      return b;
    }),
  K = (...c) => {
    let b;
    const g = k => {
        let t;
        return k.u && ((t = l.get(k.u)) ? (n.delete(t), k = g(k.u)) : l.set(k.u, k)), k;
      },
      l = new Map(),
      n = new Map();
    return [c, ...b] = [...c],
      c = pb(qb(pb(ob(c)), ...b)),
      lb(c, k => {
        for (const t of k.s) {
          n.set(g(t), t.B);
        }
      }),
      Array.from(n, ([{ C: k }, t]) => {
        const v = k.map(({ x: w, y, z: D }) => ({ x: w, y, z: D }));
        return db(t ? v.reverse() : v, k.A, k.D);
      });
  },
  rb = () => {
    wa = Ua(h[12].g, h[13].g);
    ra = p(p(ra, 0, 1 - Math.exp(-1 * d)), Va(ra + 60 * d), h[5].g - h[6].i);
    oa = p(p(oa, 0, 1 - Math.exp(-5 * d)), Va(oa + 56 * d), wa);
    pa = p(p(pa, 0, 1 - Math.exp(-4 * d)), Va(pa + 48 * d), wa);
    var c = 0.2 + 0.3 * m(2 * h[9].i - 1);
    ua = p(ua, h[9].i, 1 - Math.exp(-c * d));
    ta = p(ta, sa ? p(ta, -9, 1 - Math.exp(-1.5 * d)) : Sa(a / 3), 1 - Math.exp(-1 * d));
    Ca && a > Ca && (Ca = 0, h4.innerHTML = "");
    h[0].l && 0.8 < h[0].g && (13 > ka
      ? (1 / 0 > Ca && (Ca = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0)
      : sa
        || (1 / 0 > Ca && (Ca = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          sa = 1));
    for (const b of e) {
      b.h && (b.j = b.h());
    }
    for (const b of h) {
      b.h();
    }
    for (const b of Pa) {
      b.h();
    }
  },
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
      ][ka = Pa.reduce((c, { l: b }) => c + b, 0)] + " / XIII";
  },
  vb = () => {
    localStorage.I = JSON.stringify([h.map(({ l: c }) => c), Pa.map(({ l: c }) => c), na, a, ua]);
  },
  P = (c, b = 1) => {
    const g = ea;
    b = { j: wb, H: e.length, G: b, s: [] };
    return e.push(ea = b), c(b), ea = g, b;
  },
  R = (c, b = wb, g) => ea.s.push(...u(c, b, g)),
  xb = c => {
    const b = ea,
      g = h.length,
      l = {
        l: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const n = l.l, k = l.g, t = l.i, v = b.j.multiply(c);
          l.J = v;
          3 > Xa(v.transformPoint()) && Da[5] && (0.3 > k || 0.7 < k)
            && (l.l = n ? 0 : 1, g && 1 / 0 > Ca && (Ca = a + 1, h4.innerHTML = "* click *"), na = g, vb());
          l.g = p(k, n, 1 - Math.exp(-4 * d));
          l.i = p(t, n, 1 - Math.exp(-1 * d));
          l.j = v.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    h.push(l);
    R(J(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    R(J(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    R(J(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), S(0.5, 0.5, 0.4));
  },
  zb = (c, ...b) => {
    let g = -1, l = 0, n = 0, k = 0, t = 0, v = 0, w = 1, y = 3;
    const D = {
        l: 0,
        h() {
          if (!D.l) {
            let V, fa, ca, C, L, H, M, N = 1, Y = 1 / 0;
            for (const W of f) {
              var { x: E, z: F, w: I } = W;
              F = (E = Math.hypot(r - E, x - F)) - I;
              M ||= E < I;
              0 < F && Y > F && (Y = F, q = W);
              N = yb(N, E / I);
            }
            M
              || ({ x: V, z: fa, w: ca } = q,
                C = r - V,
                L = x - fa,
                H = Math.hypot(C, L),
                O = Math.atan2(-L, C),
                w && (n = (Math.random() - 0.5) * Math.PI / 2, y = Sa(y / (1 + Math.random()))),
                O += n,
                g = -Math.cos(O),
                l = Math.sin(O),
                0.1 < H && (H = yb(H, ca) / (H || 1), r = C * H + V, x = L * H + fa));
            w = M;
            y = p(y, 6 * (1 - N) + 3, 1 - Math.exp(-(N + 3) * d));
            O = r = p(r, r + g, 1 - Math.exp(-y * d));
            A = p(A, O, 1 - Math.exp(-y * d));
            O = x = p(x, x + l, 1 - Math.exp(-y * d));
            z = p(z, O, 1 - Math.exp(-y * d));
            k = Wa(k, Math.atan2(A - t, z - v) / Oa - 180, 1 - Math.exp(-3 * d));
            t = A;
            v = z;
            var O = (D.j = Q.j.multiply(c.translate(A, 0, z).rotateSelf(0, k, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.6 > Xa(O)
              && (D.l = 1,
                O = [
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
                ][ka] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > Ca && (Ca = a + (ka && 12 > ka ? 5 : 7), h4.innerHTML = O),
                ub(),
                vb());
          }
          D.l
            && (D.j = e[2].j.translate(
              B % 4 * 1.2 - 1.7 + Math.sin(a + B) / 7,
              -2,
              1.7 * (B / 4 | 0) - 5.5 + m(B % 4 - 2) + Math.cos(a / 1.5 + B) / 6,
            ));
        },
      },
      Q = ea,
      B = Pa.length,
      f = b.map(([E, F, I]) => ({ x: E, z: F, w: I }));
    let q = f[0], { x: r, z: x } = q, A = r, z = x;
    Pa.push(D);
  },
  Cb = (c, b, g, l) => {
    let n = 0, k = 0, t = 0, v = 1 / 0, w = -1 / 0, y = 1 / 0, D = -1 / 0, Q = 1 / 0, B = -1 / 0;
    const f = 1.1 * (g - b),
      q = (new DOMMatrix(cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
    return b = Na(
      8,
      r => (r = q.transformPoint({ x: 4 & r ? 1 : -1, y: 2 & r ? 1 : -1, z: 1 & r ? 1 : -1 }),
        n -= r.x = (f * r.x | 0) / f / r.w,
        k -= r.y = (f * r.y | 0) / f / r.w,
        t -= r.z = (f * r.z | 0) / f / r.w,
        r),
    ),
      g = Ab(298, 139).translateSelf(n / 8, k / 8, t / 8),
      eb(b, g).map(({ x: r, y: x, z: A }) => {
        v = yb(v, r);
        w = Bb(w, r);
        y = yb(y, x);
        D = Bb(D, x);
        Q = yb(Q, A);
        B = Bb(B, A);
      }),
      Q *= 0 > Q ? l : 1 / l,
      B *= 0 < B ? l : 1 / l,
      T(2 / (w - v), 2 / (D - y), 2 / (Q - B)).translateSelf((w + v) / -2, (D + y) / -2, (Q + B) / 2).multiplySelf(g);
  },
  Fb = () => {
    let c, b, g, l, n, k, t, v, w, y, D, Q, B, f, q, r = !0;
    const x = () => {
        aa || !r ? Db.disconnect() : Db.connect(Eb.destination);
        b4.innerHTML = "Music: " + r;
      },
      A = (z = !1) => {
        if (aa !== z) {
          aa = z;
          try {
            z
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : Db.start();
          } catch {
          }
          ha = 0;
          document.body.className = z ? "l m" : "l";
          x();
          ub();
        }
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.I = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      A();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      A();
      ha = 1;
    };
    b4.onclick = () => {
      r = !r;
      x();
    };
    b5.onclick = () => A(!0);
    onclick = z => {
      q = 1;
      aa || (z.target === hC && (Da[5] = !0), ha && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: z, target: E, type: F, repeat: I }) => {
      I || ((I = !!F[5] && E === document.body) && ("Escape" === z || "Enter" === z && aa)
        ? aa && !q || A(!aa)
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
        ? I && (Da[F] = 1)
        : Da[F] = I);
    };
    onmousemove = ({ movementX: z, movementY: E }) => {
      ha && (z || E) && (Ia += 0.1 * z, Ha += 0.1 * E);
    };
    hC.ontouchstart = z => {
      if (!aa) {
        for (let { pageX: E, pageY: F, identifier: I } of z.changedTouches) {
          ha && E > hC.clientWidth / 2
            ? void 0 === v && (w = 0, k = E, t = F, v = I, y = Ia, D = Ha)
            : void 0 === l && (n = 0, b = E, g = F, l = I);
        }
        c = ma;
      }
    };
    hC.ontouchmove = z => {
      if (!aa) {
        for (let { pageX: fa, pageY: ca, identifier: C } of z.changedTouches) {
          var E, F, I, O, V;
          v === C && (Ia = y + (fa - k) / 2.3, Ha = D + (ca - t) / 2.3, w = 1);
          l === C
            && (C = (b - fa) / 20,
              E = (g - ca) / 20,
              F = m(C),
              I = m(E),
              O = Math.atan2(E, C),
              V = Sa(Math.hypot(E, C) - 0.5),
              B = 0.2 < F ? Math.cos(O) * V : 0,
              f = 0.2 < I ? Math.sin(O) * V : 0,
              (B || f) && (n = 1),
              2 < F && (b = fa + 20 * Math.sign(C)),
              2 < I && (g = ca + 20 * Math.sign(E)));
        }
      }
    };
    hC.ontouchend = z => {
      let E;
      document.activeElement === document.body && z.preventDefault();
      for (const F of z.changedTouches) {
        F.identifier === v
          ? (v = void 0, w || (E = 1), w = 0)
          : F.identifier === l
          ? (l = void 0, f = B = 0, n || (E = 1), n = 0)
          : E = 1;
      }
      E && z.target === hC && c && 0.02 < (z = ma - c) && 0.7 > z && (Da[5] = !0);
    };
    ia = () => {
      let z = f + (Da[1] ? 1 : 0) - (Da[3] ? 1 : 0),
        E = B + (Da[0] ? 1 : 0) - (Da[2] ? 1 : 0),
        F = navigator.getGamepads()[0];
      if (F) {
        const I = fa => O[fa]?.pressed || 0 < O[fa]?.value ? 1 : 0, O = F.buttons, V = F.axes;
        F = I(3) || I(2) || I(1) || I(0);
        z += I(12) - I(13) - Ta(V[1], 0.2);
        E += I(14) - I(15) - Ta(V[0], 0.2);
        ha && (Ha += d * Ta(V[3], 0.3) * 80, Ia += d * Ta(V[2], 0.3) * 80);
        F && !Q && (Da[5] = 1);
        Q = F;
      }
      xa = Math.atan2(z, E);
      ya = Ta(Sa(Math.hypot(z, E)), 0.05);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Da.length = B = f = 0;
      l = v = void 0;
      document.hidden && A(!0);
    })();
    A(!0);
  },
  Kb = (c, b) => {
    const g = {}, l = X.c1h();
    return X.abz(l, c), X.abz(l, Gb(b, 35632)), X.l8l(l), n => n ? g[n] || (g[n] = X.gan(l, n)) : X.u7y(l);
  },
  Nb = (c, b, g, l) => {
    if (aa) {
      g = Ab(0, 40 * Math.sin(ma) - 70);
      for (var n of [37, 38, 39]) {
        bb(g, Mb, n - 1);
      }
      X.uae(c, !1, Mb);
      X.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      for (n = 0; e.length > n; ++n) {
        e[n].G && bb(e[n].j, Mb, n - 1);
      }
      X.uae(c, !1, Mb);
      X.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        bb(Pa[b].j, Mb, b);
      }
      for (b = 0; h.length > b; ++b) {
        bb(h[b].j, Mb, b + 13), l || (Mb[16 * (b + 13) + 15] = 1 - h[b].g);
      }
      X.uae(c, !1, Mb);
      X.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13);
      X.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
  },
  Ob = c => 0.5 > c % 1 ? 1 : -1,
  Pb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c,
  Yb = c => {
    let b = 0;
    const g = () => {
        const k = Eb.createBuffer(2, 5362944, 44100);
        for (let t = 0; 2 > t; t++) {
          for (let v = t, w = k.getChannelData(t); 10725888 > v; v += 2) {
            w[v >> 1] = n[v] / 65536;
          }
        }
        Db.buffer = k;
        Db.loop = !0;
        Qb(c);
      },
      l = () => {
        let k = 0;
        const t = H => {
            let M, N, Y, W, Ea = 0, da = 0;
            const la = [],
              qa = new Int32Array(768 * H),
              ab = 2 ** (E - 9) / H,
              Sb = Math.PI * 2 ** (fa - 8) / H,
              sb = C * H & -2;
            for (let mb = 0; 11 >= mb; ++mb) {
              for (
                let nb = 0, Hb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + mb];
                32 > nb;
                ++nb
              ) {
                const Ib = (32 * mb + nb) * H;
                for (var Ja = 0; 4 > Ja; ++Ja) {
                  if (N = 0, Hb && (N = v[Hb - 1].charCodeAt(nb + 32 * Ja) - 40, N += 0 < N ? 106 : 0), N) {
                    var Z;
                    if (!(Z = la[N])) {
                      Z = N;
                      let U = void 0, va = void 0;
                      var Jb = N;
                      let Tb = 0, Ub = 0;
                      const Wb = 2 > b ? Rb : Vb, Xb = 2 > b ? 1 > b ? Ob : Pb : Vb, Lb = new Int32Array(r + x + A);
                      for (let Ka = 0, tb = 0; r + x + A > Ka; ++Ka, ++tb) {
                        let La = 1;
                        r > Ka ? La = Ka / r : r + x > Ka || (La = (1 - (La = (Ka - r - x) / A)) * 3 ** (-z / 16 * La));
                        0 > tb
                          || (tb -= 4 * H,
                            va = 396e-5 * 2 ** ((Jb + y - 256) / 12),
                            U = 396e-5 * 2 ** ((Jb + B - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                        Lb[Ka] = 80
                            * (Wb(Tb += va * La ** (D / 32)) * w + Xb(Ub += U * La ** (f / 32)) * Q
                              + (q ? (2 * Math.random() - 1) * q : 0))
                            * La | 0;
                      }
                      Z = la[Z] = Lb;
                    }
                    for (let U = 0, va = 2 * Ib; Z.length > U; ++U, va += 2) {
                      qa[va] += Z[U];
                    }
                  }
                }
                for (let U, va = 0; H > va; ++va) {
                  Ja = 0,
                    Z = 2 * (Ib + va),
                    ((U = qa[Z]) || W)
                    && (Y = 308e-5 * F,
                      1 !== b && 4 !== b || (Y *= Math.sin(ab * Z * Math.PI * 2) * L / 512 + 0.5),
                      Y = 1.5 * Math.sin(Y),
                      Ea += Y * da,
                      M = (1 - I / 255) * (U - da) - Ea,
                      da += Y * M,
                      U = 4 === b ? da : 3 === b ? M : Ea,
                      b || (U = 1 > (U *= 22e-5) ? -1 < U ? Math.sin(U / 4 * Math.PI * 2) : -1 : 1, U /= 22e-5),
                      U *= O / 32,
                      W = 1e-5 < U * U,
                      M = Math.sin(Sb * Z) * V / 512 + 0.5,
                      Ja = U * (1 - M),
                      U *= M),
                    Z < sb || (Ja += qa[1 + Z - sb] * ca
                      / 255,
                      U += qa[Z - sb] * ca / 255),
                    n[k + Z] += qa[Z] = Ja,
                    ++Z,
                    n[k + Z] += qa[Z] = U;
                }
              }
            }
            k += 768 * H;
          },
          v = Fa[b];
        let [w, y, D, Q, B, f, q, r, x, A, z, E, F, I, O, V, fa, ca, C, L] = Ga[b];
        A = A * A * 4;
        t(5513);
        t(4562);
        t(3891);
        Qb(5 > ++b ? l : g);
      },
      n = new Int32Array(10725888);
    Qb(l);
  },
  Zb = () => {
    let c, b, g, l, n, k, t, v, w, y, D, Q, B, f, q, r, x, A = 1, z = 2, E = 2;
    const F = () => {
        let C = 0, L = 0, H = 0, M = 0;
        l = 0;
        fa.fill(0);
        for (let Y = 0; 31 > Y; ++Y) {
          let W = 0;
          const Ea = 512 * Y;
          for (let da = 0; 128 > da; da++) {
            var N = Ea + 4 * da;
            let la = (ca[N] + ca[1 + N]) / 255;
            N = ca[2 + N];
            14 < da && 114 > da && (W += la);
            N && la && (la = fa[N] + 1, fa[N] = la, C > la || (C = la, L = N));
          }
          3 > W && 5 < Y && (H += Y / 32);
          3 < W && (7 < Y && (M += Y / 15), l = 1);
        }
        L && (l = 1);
        c = L || b;
        b = L;
        E = p(E, l ? 6.5 : -20 > Ma.y ? 11 : 8, 1 - Math.exp(-4 * d));
        Ma.y += M / 41 - (l || E) * H / 41 * E * d;
      },
      I = () => {
        y = w = 0;
        for (let C = 32; 128 > C; C += 2) {
          let L = 0, H = 0, M = 0, N = 0;
          const Y = 512 * C;
          for (let W = 1 & C; 128 > W; W += 2) {
            const Ea = Y + 4 * W;
            let da = Y + 4 * (127 - W);
            const la = ca[Ea] / 255, qa = ca[1 + da] / 255, ab = 1 - m(W / 63.5 - 1);
            10 < W && 118 > W
              && (L = Bb(Bb(la * ab, la * ca[da] / 255), L), H = Bb(Bb(qa * ab, qa * ca[1 + Ea] / 255), H));
            (54 > W || 74 < W) && 1e-3 < (da = (1 - ab) * Bb(la, qa) / 3)
              && (64 > W && da > M ? M = da : 64 < W && da > N && (N = da));
          }
          m(N - M) > m(w) && (w = N - M);
          m(H - L) > m(y) && (y = H - L);
        }
      },
      O = () => z ? h[na].u.j : g && 1 === e[g].G && e[g].j || wb,
      V = (C, L, H, M) => p(C, L, A || (Sa(m(L - C) ** 0.9 - H) + 1 / 7) * (1 - Math.exp(-(1.5 * M) * d))),
      fa = new Int32Array(256),
      ca = new Uint8Array(65536);
    ja = () => {
      X.fa7();
      X.r9r(0, 0, 128, 128, 6408, 5121, ca);
      X.iay(36008, [36064, 36096]);
      X.iay(36009, [36064, 36096]);
      NO_INLINE(I)();
      NO_INLINE(F)();
      var C = Sa(1 - 5 * Bb(m(w), m(y))), L = ha ? Ia * Oa : Math.PI;
      C =
        (B = p(B, l * C * Sa(2 * ya) * 7, 1 - Math.exp(-(l ? 0.1 < C ? 10 : 5 + 2 * ya : 1) * d)),
          D = p(D, 0, 1 - Math.exp(-(l ? 8 : 4) * d)),
          w += d * ((c ? 0 : C * D) - Math.cos(xa + L) * ya * B),
          Q = p(Q, 0, 1 - Math.exp(-(l ? 8 : 4) * d)),
          y += d * ((c ? 0 : C * Q) - Math.sin(xa + L) * ya * B),
          O());
      var { x: H, y: M, z: L } = 1 < z
        ? h[na].J.transformPoint({ x: 0, y: na || 0.9 < ta ? 15 : 1, z: -2.4 })
        : ((H = (L = C).inverse()).m41 = H.m42 = H.m43 = 0,
          M = H.transformPoint({ x: w, z: y, w: 0 }),
          Ma.x += M.x,
          Ma.z += M.z,
          L.transformPoint(Ma));
      if (
        c && (D = (H - Ra.x) / d, Q = (L - Ra.z) / d),
          Ra.x = H,
          Ra.y = M,
          Ra.z = L,
          (z = z && (l && c ? 0 : 1)) || c !== g
      ) {
        g = c;
        const N = (C = O()).inverse().transformPoint(Ra);
        Ma.x = N.x;
        Ma.y = N.y;
        Ma.z = N.z;
      }
      v = p(v, wa * (27 < c && 32 > c), 1 - Math.exp(-2 * d));
      M < (-25 > H || 109 > L ? -25 : -9) && (D = Q = B = 0, z = 2);
      1 === c && (h[9].l = -15 > H && 0 > L ? 1 : 0);
      f = p(p(f, M, 1 - Math.exp(-2 * d)), M, z || 8 * m(f - M));
      r = V(r, f, 2, 1);
      q = V(q, H, 0.5, 1);
      x = V(x, L, 0.5, 1);
      ha
        ? (C = z + (1 - Math.exp(-18 * d)), za = p(za, H, C), Aa = p(Aa, f + 1.5, C), Ba = p(Ba, L, C), Ia = Va(Ia))
        : (Aa = V(Aa, Bb(r + Sa((-60 - L) / 8, 0, 20) + 13 + 9 * v, 6), 4, 2),
          Ba = V(Ba, x + -18 + 5 * v, 1, 2 + v),
          za = V(za, q, 1, 2 + v),
          M = yb(4, -m(x - Ba)),
          C = q - za,
          Ia = Wa(Ia, 90 - Va(Math.atan2(M, C) / Oa), A + (1 - Math.exp(-6 * d))),
          Ha = Wa(Ha, 90 - Math.atan2(Math.hypot(M, C), Aa - r) / Oa, A + (1 - Math.exp(-6 * d))));
      Ha = Sa(Ha, -87, 87);
      k = Wa(k, n, 1 - Math.exp(-8 * d));
      t = p(t, ya, 1 - Math.exp(-10 * d));
      ya && (n = 90 - xa / Oa);
      A = 0;
      e[37].j = G(H, f, L).rotateSelf(0, k);
      for (C = 0; 2 > C; ++C) {
        e[38 + C].j = e[37].j.translate(0, t * Sa(0.45 * Math.sin(9.1 * a + Math.PI * (C - 1) - Math.PI / 2)))
          .rotateSelf(t * Math.sin(9.1 * a + Math.PI * (C - 1)) * 0.25 / Oa, 0);
      }
    };
  },
  Gb = (c, b = 35633) => (b = X.c6x(b), X.s3c(b, c), X.c6a(b), b),
  Qb = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Vb = c => Math.sin(c * Math.PI * 2),
  Rb = c => c % 1 * 2 - 1,
  Eb = new AudioContext(),
  wb = new DOMMatrix(),
  $a = new Float32Array(16),
  Mb = new Float32Array(624),
  $b = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  yb = NO_INLINE((c, b) => c < b ? c : b),
  Bb = NO_INLINE((c, b) => b < c ? c : b),
  m = NO_INLINE(c => 0 > c ? -c : c),
  G = NO_INLINE((c, b, g) => wb.translate(c, b, g)),
  Ab = NO_INLINE((c, b, g) => wb.rotate(c, b, g)),
  T = NO_INLINE((c, b, g) => wb.scale(c, b, g)),
  S = NO_INLINE((c, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c),
  Db = Eb.createBufferSource(),
  X = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in X) {
  X[c[0] + [...c].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = X[c];
}
Qb(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const l = q => {
            let r;
            X.f1s();
            requestAnimationFrame(l);
            x = (q - (ba || q)) / 1e3;
            ma += x;
            a += d = aa ? 0 : yb(0.066, x);
            ba = q;
            0 < d
              && (ia(),
                rb(),
                ja(),
                w(),
                X.b6o(36160, B),
                X.v5y(0, 0, 128, 128),
                X.c4s(16640),
                X.cbf(!0, !1, !0, !1),
                { x, y: q, z: r } = Ra,
                X.uae(w("b"), !1, bb(Ab(0, 180).invertSelf().translateSelf(-x, -q, 0.3 - r))),
                Nb(w("c"), 0, 41, 0),
                X.c4s(256),
                X.cbf(!1, !0, !0, !1),
                X.uae(w("b"), !1, bb(G(-x, -q, -r - 0.3))),
                Nb(w("c"), 0, 41, 0),
                X.f1s());
            Da[5] = 0;
            var x = aa
              ? Ab(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : Ab(-Ha, -Ia).invertSelf().translateSelf(-za, -Aa, -Ba);
            t();
            X.b6o(36160, Q);
            X.v5y(0, 0, 2048, 2048);
            D[0](Cb(x, 0.3, 55, 10));
            D[1](Cb(x, 55, 186, 11));
            y();
            X.b6o(36160, null);
            X.v5y(0, 0, X.drawingBufferWidth, X.drawingBufferHeight);
            X.cbf(!0, !0, !0, !0);
            X.c4s(16640);
            D[0]();
            D[1]();
            X.uae(y("a"), !1, cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
            X.uae(y("b"), !1, bb(x));
            X.ubu(y("k"), za, Aa, Ba);
            Nb(y("c"), !ha, 42, 0);
            v();
            X.ubu(v("j"), X.drawingBufferWidth, X.drawingBufferHeight, ma);
            X.ubu(v("k"), za, Aa, Ba);
            X.uae(v("b"), !1, bb(x.inverse()));
            X.d97(4, 3, 5123, 0);
            X.b6o(36160, B);
            X.f1s();
          },
          n = g;
        let k = Gb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const t = Kb(
            Gb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          v = Kb(
            Gb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          w = Kb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          y = Kb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          D = Na(2, q => {
            const r = new Float32Array(16), x = X.c25();
            return X.a4v(33984 + q),
              X.b9j(3553, x),
              X.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              X.t2z(3553, 10241, 9729),
              X.t2z(3553, 10240, 9729),
              X.t2z(3553, 34893, 515),
              X.t2z(3553, 34892, 34894),
              X.t2z(3553, 10243, 33071),
              X.t2z(3553, 10242, 33071),
              A => {
                A
                  ? (bb(A, r),
                    X.uae(t("b"), !1, r),
                    X.fas(36160, 36096, 3553, x, 0),
                    X.c4s(256),
                    Nb(t("c"), !ha, 42, 1))
                  : X.uae(y(q ? "j" : "i"), !1, r);
              };
          }),
          Q = X.c5w(),
          B = (k = X.c3z(), X.c5w()),
          f = X.c25();
        w();
        X.uae(w("a"), !1, cb(1.4, 0.59, 1e-4, 1));
        y();
        X.ubh(y("q"), 2);
        X.ubh(y("h"), 1);
        X.ubh(y("g"), 0);
        v();
        X.ubh(v("q"), 2);
        X.b6o(36160, Q);
        X.d45([0]);
        X.r9l(0);
        X.b6o(36160, B);
        X.bb1(36161, k);
        X.r4v(36161, 33189, 128, 128);
        X.f8w(36160, 36096, 36161, k);
        X.a4v(33986);
        X.b9j(3553, f);
        X.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        X.fas(36160, 36064, 3553, f, 0);
        X.b9j(3553, X.c25());
        X.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
        X.gbn(3553);
        X.t2z(3553, 10241, 9987);
        X.t2z(3553, 10240, 9729);
        X.e8z(2929);
        X.e8z(2884);
        X.c70(1);
        X.c7a(1029);
        X.d4n(515);
        X.c5t(0, 0, 0, 1);
        rb();
        NO_INLINE(Fb)();
        NO_INLINE(Zb)();
        requestAnimationFrame(l);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = $b;
  NO_INLINE(Yb)(() => {
    Qb(() => {
      let k, t = 0;
      const v = [],
        w = [],
        y = [],
        D = [],
        Q = x => {
          let { x: A, y: z, z: E } = k[x], F = (r[0] = A, r[1] = z, r[2] = E, x = "" + (k.D ? q : B), f.get(x));
          return void 0 !== F
            ? (A = 3 * F, D[A] = (D[A++] + B[5]) / 2, D[A] = (D[A++] + B[6]) / 2, D[A] = (D[A] + B[7]) / 2)
            : (f.set(x, F = f.size), w.push(A, z, E, r[3]), y.push(B[4]), D.push(B[5], B[6], B[7])),
            F;
        },
        B = new Int32Array(8),
        f = new Map(),
        q = new Int32Array(B.buffer, 0, 5),
        r = new Float32Array(B.buffer);
      for (const x of e) {
        for (k of (r[3] = 40 === x.H ? -14 : x.G && x.H, x.s)) {
          const { x: A, y: z, z: E } = Za(k);
          B[4] = 0 | k.A;
          B[5] = 32767 * A;
          B[6] = 32767 * z;
          B[7] = 32767 * E;
          for (let F = 2, I = Q(0), O = Q(1); k.length > F; ++F) {
            v.push(I, O, O = Q(F));
          }
        }
        x.s = null;
        x.v = t;
        x.F = t = v.length;
      }
      X.b11(34962, X.c1b());
      X.b2v(34962, new Float32Array(w), 35044);
      X.v7s(0, 4, 5126, !1, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Int16Array(D), 35044);
      X.v7s(1, 3, 5122, !0, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Uint32Array(y), 35044);
      X.v7s(2, 4, 5121, !0, 0, 0);
      X.b11(34963, X.c1b());
      X.b2v(34963, new Uint16Array(v), 35044);
      X.e3x(0);
      X.e3x(1);
      X.e3x(2);
      Qb(b);
      try {
        const [x, A, z, E, F] = JSON.parse(localStorage.I);
        h.map((I, O) => I.g = I.i = I.l = O ? 0 | x[O] : 0);
        Pa.map((I, O) => I.l = 0 | A[O]);
        na = z;
        a = E;
        ua = F;
      } catch {
      }
      ta = Sa(na);
    });
    const l = Na(11, k => G(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10)),
      n = Na(10, k => gb(eb(fb(18), l[k]).reverse(), eb(fb(18), l[k + 1]), 1)).flat();
    P(() => R([Qa.slice(1)], G(-2).scale3d(3).rotate(90, 0)), 0);
    P(() => {
      const k = (f, q, r) =>
          P(x => {
            x.h = () => G(w() * Math.sin(3 * f + a * f) * q);
            Qa.map(({ x: A, z }) => {
              R(J(11, 1), G(4 * A, 4, r + 4 * z).scale(0.8, 3, 0.8), S(0.5, 0.3, 0.7, 0.6));
              R(J(), G(4 * A, 7, r + 4 * z).scale(1, 0.3), S(0.5, 0.5, 0.5, 0.3));
            });
            R(K(
              u(J(), G(0, 0, r).scale(5, 1, 5), S(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(A => u(J(), G(5 * A, 0.2, r).rotate(-30 * A).scale(4, 1, 2), S(0.8, 0.8, 0.8, 0.3))),
            ));
            R(J(), G(0, -3, r).scale(8, 2, 8), S(0.4, 0.4, 0.4, 0.3));
          }),
        t = (f, q, r) =>
          G(f + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, r).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        v = f =>
          K(
            u(J(), G(0, -f / 2).scale(6, f - 1, 2.2)),
            u(J(), G(0, -f / 2 - 6).scale(4, f - 3, 4)),
            u(J(32, 1), G(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => yb(h[2].i, 1 - h[4].i),
        y = K(
          u(J(20, 1, 1.15, 1), G(0, -3).scale(3.5, 1, 3.5), S(0.7, 0.4, 0.25, 0.7)),
          u(J(20, 1, 1.3, 1), G(0, -2.5).scale(2.6, 1, 3), S(0.7, 0.4, 0.25, 0.2)),
          u(J(), G(4, -1.2).scale3d(2), S(0.7, 0.4, 0.25, 0.3)),
        ),
        D = Na(7, f => u(J(6, 1), G(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), S(0.3, 0.3, 0.38))).flat(),
        Q = (P(f => {
          f.h = () => t(-12, 4.2, 40 * ta - 66);
          R(y);
          xb(G(0, -3, 4));
        }),
          xb(G(-5.4, 1.5, -19).rotate(0, -90)),
          zb(G(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          zb(G(0, 2.8), [5, 10, 3], [-5, 10, 3], ...fb(18).map(({ x: f, z: q }) => [7 * f, 10 * q, 4.5 - 2 * m(f)])),
          R(J(), G(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
          Qa.map(({ x: f, z: q }) => R(J(6), G(3 * f, 3, 15 * q).scale(0.7, 4, 0.7), S(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(f => R(J(), G(0, 0, f).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((f, q) => {
            R(J(), G(0, 6.3, f).scale(4, 0.3, 1), S(0.3, 0.3, 0.3, 0.4));
            R(J(), G(0, 1, f).scale(3, 0.2, 0.35), S(0.5, 0.5, 0.5, 0.3));
            P(r => {
              r.h = () => G(0, 0, f).scale(1, Sa(1.22 - h[q + 1].g), 1);
              R(D);
            });
          }),
          Na(5, f =>
            Na(2, q =>
              R(
                n,
                G(18.5 * (q - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2),
                S(1, 1, 0.8, 0.2),
              ))),
          R(J(), G(3, 1.5, -20).scale(0.5, 2, 5), S(0.7, 0.7, 0.7, 0.2)),
          R(J(), G(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(0.75, 0.75, 0.75, 0.2)),
          R(J(5), G(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(0.6, 0.3, 0.3, 0.4)),
          R(J(), Ab(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), S(0.8, 0.2, 0.2, 0.5)),
          R(K(
            qb(
              u(J(6, 0, 0, 0.3), G(8, -3, -4).scale(13, 1, 13), S(0.7, 0.7, 0.7, 0.2)),
              u(J(6), G(0, -8).scale(9, 8, 8), S(0.4, 0.2, 0.5, 0.5)),
              u(J(6, 0, 0, 0.3), G(0, -0.92).scale(13, 2, 13), S(0.8, 0.8, 0.8, 0.2)),
            ),
            u(J(5), T(5, 30, 5), S(0.4, 0.2, 0.6, 0.5)),
            u(J(5, 0, 1.5), G(0, 1).scale(4.5, 0.3, 4.5), S(0.7, 0.5, 0.9, 0.2)),
            u(J(), Ab(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), S(0.5, 0.5, 0.5, 0.5)),
            u(J(6), G(15, -1.5, 4).scale(3.5, 1, 3.5), S(0.5, 0.5, 0.5, 0.5)),
          )),
          P(f => {
            f.h = () =>
              G(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0);
            R(J(5), G(0, -0.2).scale(5, 1, 5), S(0.6, 0.65, 0.7, 0.3));
            xb(G(0, 1.2));
          }),
          xb(G(15, -2, 4)),
          k(0.7, 12, 35),
          k(1, 8.2, 55),
          P(f => {
            f.h = () => G(w() * Math.sin(a / 1.5 + 2) * 12);
            R(
              K(
                qb(
                  u(J(), T(1.5, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  u(J(6), T(4, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  u(J(), G(0, -2).scale(2, 3.2, 1.9), S(0.3, 0.8, 0.5, 0.5)),
                  u(J(16, 1, 0, 4), T(1, 1, 1.5).rotate(0, 90), S(0.9, 0.9, 0.9, 0.2)),
                ),
                u(J(), T(1.3, 10, 1.3), S(0.2, 0.7, 0.4, 0.6)),
              ),
              G(0, 0, 45),
            );
            zb(G(0, 2.8, 45), [0, 0, 4.5]);
          }),
          R(J(), G(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
          P(f => {
            f.h = () => G(9.8 * (1 - w()));
            R(J(3), G(-23, -1.7, 55.8).scale(5, 0.7, 8.3), S(0.3, 0.6, 0.6, 0.2));
            R(J(8), G(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(0.8, 0.8, 0.8, 0.2));
            R(J(), G(-23, -3, 55).scale(5.2, 1.7, 3), S(0.5, 0.5, 0.5, 0.3));
            R(J(), G(-23, -2.2, 62).scale(3, 1, 4), S(0.5, 0.5, 0.5, 0.3));
            xb(G(-23, -0.5, 66.5));
          }),
          P(f => {
            f.h = () => G(0, Sa(1 - 5 * w()) * Ua(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
            R(J(), G(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(0.7, 0.7, 0.7, 0.2));
            R(K(u(J(), T(3, 1.4, 2.7)), u(J(), T(1.2, 8, 1.2))), G(-33, -3, 55), S(0.7, 0.7, 0.7, 0.2));
          }),
          P(f => {
            f.h = () => G(0, 0, Sa(1 - 5 * w()) * Ua(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
            R(K(
              u(J(), G(-27, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
              u(J(), G(-27, -3, 55).scale(1, 3), S(0.9, 0.9, 0.9, 0.2)),
            ));
            R(J(), G(-39, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2));
          }),
          P(f => {
            f.h = () => G(0, -6.5 * h[4].i);
            R(J(6), G(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), S(0.7, 0.7, 0.7, 0.4));
          }),
          xb(G(-55, -1.1, 46).rotate(0, 90)),
          R(J(6), G(-61.3, -2.4, 49).scale(3, 1, 5), S(0.4, 0.6, 0.6, 0.3)),
          R(J(7), G(-57, -2.6, 46).scale(4, 1, 4), S(0.8, 0.8, 0.8, 0.3)),
          [
            ...u(J(), G(0, -3).scale(11, 1.4, 3), S(0.9, 0.9, 0.9, 0.2)),
            ...K(
              u(J(6), Ab(90).scale(6, 8, 6), S(0.3, 0.6, 0.6, 0.3)),
              u(J(4, 0, 0.01), G(0, 6).scale(12, 2, 0.75).rotate(0, 45), S(0.3, 0.6, 0.6, 0.3)),
              u(J(6), Ab(90).scale(5, 12, 5), S(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => u(J(5), G(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        B = (R(Q, G(-53, 0, 55)),
          P(f => {
            f.h = () => G(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ra, 0);
            R(Q);
          }, 2),
          R(J(), G(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(0.7, 0.7, 0.7, 0.2)),
          R(J(3, 0, -0.5), G(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(0.8, 0.8, 0.8, 0.2)),
          R(K(
            qb(
              u(J(), G(-100, -2.5, 55).scale(8, 1, 8), S(0.8, 0.8, 0.8, 0.2)),
              u(J(), G(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
              u(J(), G(-100, -2.6, 70).scale(3, 1.1, 7), S(0.8, 0.8, 0.8, 0.2)),
              u(J(), G(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(0.8, 0.8, 0.8, 0.2)),
              u(J(6), G(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(0.6, 0.6, 0.6, 0.3)),
              u(J(), G(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(0.8, 0.8, 0.8, 0.2)),
              u(J(), G(-100, 0.42, 92).scale(3, 1.1, 4.1), S(0.8, 0.8, 0.8, 0.2)),
            ),
            u(J(8), G(-100, -1, 55).scale(7, 0.9, 7), S(0.3, 0.3, 0.3, 0.4)),
            u(J(8), G(-100, -2, 55).scale(4, 0.3, 4), S(0.4, 0.4, 0.4, 0.5)),
            u(J(8), G(-100, -3, 55).scale(0.6, 1, 0.6), S(0.4, 0.4, 0.4, 0.5)),
          )),
          zb(G(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          zb(G(-89, 0.2, 80), [0, 0, 6]),
          R(K(
            u(J(), G(-100, 1, 63).scale(7.5, 4), S(0.5, 0.5, 0.5, 0.4)),
            u(J(), G(-100, 0, 70).scale(2, 2, 10), S(0.5, 0.5, 0.5, 0.4)),
            u(J(20, 1), G(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(0.5, 0.5, 0.5, 0.4)),
          )),
          P(f => {
            f.h = () => G(-99.7, -1.9, 63.5).scale(1, Sa(1.1 - h[6].g), 1);
            R(D);
          }),
          Qa.map(({ x: f, z: q }) => {
            R(J(6), G(7 * f - 100, -3, 7 * q + 55).scale(1, 8.1), S(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(r => R(J(6), G(7 * f - 100, r, 7 * q + 55).scale(1.3, 0.5, 1.3), S(0.4, 0.2, 0.2, 0.8)));
          }),
          Na(7, f => {
            R(
              J((23 * f + 1) % 5 + 5, 0, 0.55),
              G(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              S(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          R(J(), G(-87, -9.5, 24).scale(7, 1, 3), S(0.4, 0.5, 0.6, 0.4)),
          R(J(4), G(-86, -9.2, 27).scale(5, 1, 5), S(0.5, 0.6, 0.7, 0.3)),
          R(J(12, 1), G(-86, -9, 31).scale(1.5, 1, 1.5), S(0.3, 0.3, 0.4, 0.1)),
          xb(G(-86, -7.5, 31)),
          P(f => {
            f.h = () => G(0, 3.5 * (1 - Bb(h[6].g, h[7].g)) + Ua(h[7].i, h[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(q => R(J(), G(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.2, 0.5, 0.6, 0.2)));
          }),
          P(f => {
            f.h = () => G(0, Ua(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ua(h[7].i, h[6].i));
            [6, 18].map(q => R(J(), G(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.1, 0.4, 0.5, 0.2)));
          }),
          R(
            K(
              qb(
                u(J(5), G(0, 0, -7).scale(2, 1.2, 2), S(0.2, 0.4, 0.7, 0.3)),
                u(J(5), T(9, 1.2, 9), S(0, 0.2, 0.3, 0.5)),
                u(J(), T(11, 1, 13), S(0.3, 0.4, 0.6, 0.3)),
              ),
              u(J(5), T(5.4, 5, 5.4), S(0, 0.2, 0.3, 0.5)),
            ),
            G(-38.9, -11.3, 17),
          ),
          xb(G(-38.9, -9.6, 10)),
          P(f => {
            f.h = () => G(0, -7.3 * h[7].i);
            R(
              K(
                qb(
                  u(J(5), G(0, 2).scale(5, 7, 5).skewY(8), S(0.2, 0.4, 0.5, 0.5)),
                  u(J(5), G(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(0.25, 0.35, 0.5, 0.5)),
                  u(J(5), G(0, 9).scale(0.6, 7, 0.6).skewY(8), S(0.35, 0.3, 0.5, 0.5)),
                ),
                u(J(5), T(4, 8, 4), S(0.2, 0.4, 0.5, 0.5)),
                u(J(5), G(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(0.2, 0.4, 0.5, 0.5)),
              ),
              G(-38.9, -11.3, 17),
            );
            zb(G(-39.1, -0.6, 17).rotate(11), ...fb(15).map(({ x: q, z: r }) => [3 * q, 3 * r, 1.2]));
          }),
          Qa.map(({ x: f, z: q }) => {
            R(J(14, 1), G(9 * f - 38.9, -7.3, 11 * q + 17).scale(1, 4), S(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(r =>
              R(J(17, 1), G(9 * f - 38.9, r - 11.3, 11 * q + 17).scale(1.5, 0.5, 1.5), S(0.6, 0.6, 0.6, 0.3))
            );
          }),
          R(
            K(
              qb(
                u(J(6), G(0, 0, -36).scale(15, 1.2, 15), S(0.7, 0.7, 0.7, 0.3)),
                u(J(), G(0, 0, -18).scale(4, 1.2, 6), S(0.45, 0.4, 0.6, 0.3)),
              ),
              ...Na(6, f =>
                Na(6, q =>
                  u(
                    J(6),
                    G(4.6 * q - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2),
                    S(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            G(-38.9, -11.3, 17),
          ),
          zb(G(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          R(J(5), G(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), S(0.8, 0.1, 0.25, 0.4)),
          xb(G(-84, -0.5, 85).rotate(0, 45)),
          P(f => {
            f.h = () => t(-123, 1.4, 55 + -65 * ua);
            R(y);
            xb(G(0, -3, -4).rotate(0, 180));
          }),
          K(
            u(J(), G(0, -0.5, 1).scale(1.15, 1.2, 6.5), S(0.25, 0.25, 0.35, 0.3)),
            u(J(3), G(0, 0, -5.5).scale(3, 2), S(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => u(J(), G(f, -0.5, 1).scale(0.14, 0.3, 6.5), S(0.7, 0.2, 0, 0.3))),
          ));
      P(f => {
        f.h = () => G(0, -2, Ua(h[10].g, h[11].g) * m(Math.sin(1.1 * a)) * -8.5 + 10);
        Na(2, q => R(B, G(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      P(f => {
        f.h = () => G(0, -2, Ua(h[10].g, h[11].g) * m(Math.sin(2.1 * a)) * -8.5 + 10);
        Na(2, q => R(B, G(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      P(f => {
        f.h = () =>
          G(
            0,
            -2,
            -8.5 * Bb((1 - h[10].g) * (1 - Ua(h[10].g, h[11].g)), Ua(h[10].g, h[11].g) * m(Math.sin(1.5 * a))) + 10,
          );
        Na(3, q => R(B, G(9 * q - 106, 1.7, -12)));
      });
      R(
        K(
          qb(u(J(), G(26.5, -1.6, 10).scale(20, 2.08, 3)), u(J(), G(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...Na(4, f => u(J(), G(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...Na(3, f => u(J(), G(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        G(-123, 0, -12),
        S(0.5, 0.5, 0.6, 0.2),
      );
      xb(G(-116, -1.4, -18).rotate(0, 180));
      R(J(), G(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(0.8, 0.8, 0.8, 0.2));
      R(J(6), G(-116, -2.6, -16.5).scale(3.2, 0.8, 3), S(0.6, 0.5, 0.7, 0.2));
      R(J(), G(-115.5, -17, -12).scale(0.5, 15, 2.2), S(0.6, 0.6, 0.6, 0.3));
      R(J(8), G(-114, -17, -2).scale(2, 15, 2), S(0.6, 0.6, 0.6, 0.3));
      R(J(8), G(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, 0.3));
      R(J(), G(-77, -17, -50.5).scale(2.2, 15, 0.5), S(0.6, 0.6, 0.6, 0.3));
      Na(3, f => {
        R(v(16), G(12 * f - 109, -9, -12), S(0.6, 0.6, 0.6, 0.3));
        R(v(16), G(-77, -9, -12 * f - 20).rotate(0, 90), S(0.6, 0.6, 0.6, 0.3));
      });
      R(K(
        u(J(12), G(-77, -14.5, -12).scale(4, 17.5, 4), S(0.7, 0.7, 0.7, 0.2)),
        u(J(), G(-79, 0.1, -12).scale(3.5, 2, 1.3), S(0.4, 0.5, 0.6, 0.2)),
        u(J(), G(-77, 0.1, -14).scale(1.5, 2, 2), S(0.4, 0.5, 0.6, 0.2)),
        u(J(12), G(-77, 3.1, -12).scale(3, 5, 3), S(0.4, 0.5, 0.6, 0.2)),
      ));
      R(J(), G(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(0.6, 0.6, 0.6, 0.3));
      R(J(9), G(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(0.5, 0.5, 0.5, 0.3));
      R(K(
        u(J(), G(-93, -5.8, -40).scale(9, 1, 5), S(0.8, 0.8, 0.8, 0.1)),
        u(J(9), G(-98, -5.8, -40).scale(3, 8, 3), S(0.7, 0.7, 0.7, 0.2)),
      ));
      xb(G(-98, -4.4, -40).rotate(0, 90));
      zb(G(-115, 0.2, -12), [0, 0, 3.5]);
      zb(G(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      R(K(
        qb(
          u(J(6, 0, 0, 0.6), G(-100, 0.7, 105.5).scale(8, 1, 11), S(0.7, 0.7, 0.7, 0.2)),
          u(J(), G(-101.5, 0.7, 93.5).scale(10.5, 1, 2), S(0.7, 0.7, 0.7, 0.2)),
        ),
        u(J(5), G(-100, 0.7, 113).scale(4, 3, 4), S(0.7, 0.7, 0.7, 0.2)),
      ));
      Na(4, f =>
        P(q => {
          q.h = () => {
            const r = Ua(h[8].i, h[12].i);
            return G(
              (2 < f ? 2 * (1 - r) + r : 0) - 100,
              r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + Bb(r, 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          R(
            J(6),
            G(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            S(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      P(f => {
        f.h = () => {
          const q = Ua(h[8].i, h[12].i);
          return G(2.5 * (1 - q) - 139.7, -3 * (1 - h[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * a) * (3 * q + 3),
            0,
          );
        };
        R(K(u(J(10), T(6, 2, 6), S(0.1, 0.6, 0.5, 0.3)), u(J(10), T(3.3, 6, 3.3), S(0.1, 0.6, 0.5, 0.5))));
        R(J(15, 1), G(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(0.4, 0.4, 0.4, 0.3));
        R(J(10), G(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(0.3, 0.8, 0.7, 0.3));
        R(J(5), G(-7.5).rotate(0, 90).scale(1, 3), S(0.5, 0.5, 0.5, 0.5));
        xb(G(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(q => R(n, Ab(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, 0.8, 0.2)));
        zb(G(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        R(J(12, 1), G(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), S(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(q => R(J(15, 1), G(-7.5 * f - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), S(0.5, 0.24, 0.2, 0.4)));
        R(n, G(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), S(1, 1, 0.8));
        R(
          K(
            u(J(), G(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), S(0.5, 0.5, 0.5, 0.4)),
            u(J(), T(3, 3, 10), S(0.6, 0.24, 0.2, 0.5)),
            u(J(28, 1), G(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(0.6, 0.24, 0.2, 0.5)),
            u(J(5), G(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(0.6, 0.24, 0.2, 0.5)),
            u(J(5), G(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), S(0.6, 0.24, 0.2, 0.5)),
          ),
          G(f - 100, 0.7, 97),
        );
      });
      P(f => {
        f.h = () => G(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        R(D);
      });
      R(K(
        u(J(), G(-82.07, 0.8, 106).scale(11, 0.9, 2.2), S(0.7, 0.7, 0.7, 0.1)),
        u(J(45, 1), G(-81, 0.7, 106).scale3d(7.7), S(0.7, 0.7, 0.7, 0.1)),
      ));
      P(f => {
        f.h = () => G(-81, 0.6, 106).rotate(0, 40 + oa);
        R(K(
          u(J(45, 1), T(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)),
          u(J(), G(0, 0, -5.5).scale(1.5, 3, 2.7), S(0.45, 0.45, 0.45, 0.2)),
        ));
        R(J(8), G(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(0.7, 0.7, 0.7, 0.1));
        R(J(5), G(0, 2).scale(1, 2), S(0.3, 0.3, 0.3, 0.2));
        zb(G(0, 3), ...fb(14).map(({ x: q, z: r }) => [5.6 * q, 5.6 * r, 2]));
      });
      P(f => {
        f.h = () => G(-65.8, 0.8, 106).rotate(0, pa);
        [-1, 1].map(q =>
          R(n, Ab(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), S(1, 1, 0.8))
        );
        R(K(u(J(28, 1), G(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)), u(J(), T(9, 5, 2), S(0.3, 0, 0, 0.3))));
        R(u(J(28, 1), T(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        R(u(J(5), G(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      P(f => {
        f.h = () => G(-50.7, 0.8, 106).rotate(0, 180 - pa);
        R(K(
          u(J(28, 1), G(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          u(J(), G(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          u(J(), G(0, 0, 7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        R(u(J(28, 1), T(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        R(u(J(5), G(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      P(f => {
        f.h = () => G(-50.7, 0.8, 91).rotate(0, 270 + pa);
        R(K(
          u(J(28, 1), G(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          u(J(), G(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          u(J(), G(0, 0, -7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        R(u(J(28, 1), T(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        R(u(J(5), G(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      R(J(), G(-58, 1, 106).scale(2, 0.65, 2), S(0.7, 0.7, 0.7, 0.2));
      R(J(), G(-50.7, 1, 99).scale(2, 0.65, 1), S(0.7, 0.7, 0.7, 0.2));
      R(J(), G(-42, 0.4, 91).scale(5, 1, 2.5), S(0.7, 0.7, 0.7, 0.3));
      R(J(), G(-34.2, 0.4, 91).scale(3, 1, 3), S(0.7, 0.7, 0.7, 0.3));
      xb(G(-34, 2.7, 96).rotate(-12, 0));
      R(J(5), G(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), S(0.2, 0.5, 0.5, 0.6));
      [S(0.1, 0.55, 0.45, 0.2), S(0.2, 0.5, 0.5, 0.3), S(0.3, 0.45, 0.55, 0.4)].map((f, q) =>
        P(r => {
          r.h = () =>
            G(0, (1 - h[13].i) * (1 - h[14].i) * (q ? 0 : 3) + Ua(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4);
          R(J(), G(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), f);
          2 === q && R(J(), G(-29.1, 0.4, 91).scale(2.1, 1, 3), S(0.7, 0.7, 0.7, 0.3));
          1 === q && R(J(), G(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), S(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => R(n, G(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), S(1, 1, 0.8)));
      Na(
        3,
        f =>
          R(
            v(24.7 - 0.7 * (1 & f)),
            G(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? S(0.5, 0.5, 0.5, 0.3) : S(0.35, 0.35, 0.35, 0.5),
          ),
      );
      R(K(
        u(J(6, 0, 0, 0.3), G(0, -0.92, 95).scale(14, 2, 14), S(0.8, 0.8, 0.8, 0.2)),
        u(J(5), G(0, 0, 95).scale3d(6), S(0.3, 0.3, 0.3, 0.5)),
      ));
      xb(G(0, 1.7, 82).rotate(0, 180));
      R(J(5), G(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(0.5, 0.3, 0.3, 0.4));
      R(J(6), G(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(0.5, 0.6, 0.7, 0.3));
      R(J(), G(0, 16, 129).scale(1.5, 1, 2), S(0.5, 0.6, 0.7, 0.3));
      R(J(7), G(0, 16.2, 133).scale(5, 1, 5), S(0.4, 0.5, 0.6, 0.4));
      R(K(
        qb(
          u(J(), G(0, 16, 110.5).scale(12, 1, 3), S(0.5, 0.3, 0.3, 0.4)),
          u(J(), G(0, 16, 111).scale(3, 1, 3.8), S(0.5, 0.3, 0.3, 0.4)),
        ),
        u(J(5), G(0, 16, 103.5).scale(5.5, 5, 5.5), S(0.5, 0.3, 0.3, 0.4)),
      ));
      P(f => {
        f.h = () => {
          const q = Math.sin(a);
          return G(-2 * q).rotate(25 * q);
        };
        R(J(3), G(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), S(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(q => {
          R(J(6), G(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), S(0.7, 0.7, 0.7, 0.4));
          R(J(), G(0, 6.2, q + 95).scale(0.5, 11, 0.5), S(0.5, 0.3, 0.3, 0.4));
        });
      });
      P(f => {
        f.h = () => {
          const q = Ua(Ua((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          return G(0, 16 * q, 8.5 * Sa(2 * q - 1) + 95);
        };
        R(J(5), T(5, 1.1, 5), S(0.5, 0.3, 0.3, 0.4));
        R(J(5), T(5.5, 0.9, 5.5), S(0.25, 0.25, 0.25, 0.4));
        xb(G(0, 1.5, -1).rotate(0, 180));
      });
      zb(G(0, 3, 95), ...fb(9).map(({ x: f, z: q }) => [9 * f, 9 * q, 4]));
      zb(G(0, 19, 134), [0, 0, 3.5]);
    });
    P(() => {
      [0, 180].map(t => R(n, Ab(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), S(1, 1, 0.8)));
      R(hb(20), G(0, 1).scale(0.5, 0.5, 0.5), S(1, 0.3, 0.4));
      const k = u(K(J(15, 1), u(J(), G(0, 0, 1).scale(2, 2, 0.5))), Ab(-90, 0).scale(0.1, 0.05, 0.1), S(0.3, 0.3, 0.3));
      [-1, 1].map(t => R(k, G(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      R(J(), G(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), S(0.3, 0.3, 0.3));
      R(hb(20), T(0.7, 0.8, 0.55), S(1, 0.3, 0.4));
    });
    [-1, 1].map(k =>
      P(() => {
        R(J(10, 1), G(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), S(1, 0.3, 0.4));
      })
    );
    P(() => {
      R(J(6, 1), T(0.13, 1.4, 0.13), S(0.3, 0.3, 0.5, 0.1));
      R(J(10), G(0, 1).scale(0.21, 0.3, 0.21), S(1, 0.5, 0.2));
      R(J(3), G(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), S(0.2, 0.2, 0.2, 0.1));
    }, 0);
    P(() => {
      R(J(6).slice(0, -1), T(0.77, 1, 0.77), S(1, 0.3, 0.5));
    }, 0);
    P(() => {
      R(
        hb(30, 24, (k, t, v) => {
          const w = t / 24, y = k * Math.PI * 2 / 30, D = w ** 0.6 * Math.PI / 2;
          k = w * w * Math.sin(k * Math.PI * 14 / 30) / 4;
          return 23 === t
            ? { x: v.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(y) * Math.sin(D),
              y: Math.cos(w * Math.PI) - w - k,
              z: Math.sin(y) * Math.sin(D) + Math.sin(k * Math.PI * 2) / 4,
            };
        }),
        T(0.7, 0.7, 0.7),
        S(1, 1, 1),
      );
      [-1, 1].map(k => R(hb(12), G(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
