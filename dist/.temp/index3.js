let aa,
  ba,
  ea,
  ha,
  ja,
  ka,
  la = 0,
  ma = 0,
  a = 0,
  na = 0,
  oa = 0,
  pa = 0,
  ra = 0,
  sa = 0,
  ta = 0,
  ua = 0,
  va = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 1,
  d = 0.066;
const e = [],
  h = [],
  Ca = [],
  Ea = [],
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
  ],
  Ha = { x: 0, y: 0, z: 0 };
var La = 0, Ma = 180;
const Na = { x: 0, y: 0, z: 0 },
  Oa = (c, b) => Array.from(Array(c), (g, l) => b(l)),
  Pa = Math.PI / 180,
  Qa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ra = (c, b = 0, g = 1) => c < b ? b : g < c ? g : c,
  Sa = (c, b) => m(c) > b ? c : 0,
  p = (c, b, g) => (0 < g ? 1 > g ? c + (b - c) * g : b : c) || 0,
  Ta = (c, b) => (c = Ra(c), p(c, 1 - c, b)),
  Wa = c => Math.atan2(Math.sin(c *= Pa), Math.cos(c)) / Pa,
  Xa = (c, b, g) => c + (2 * (b = (b - c) % 360) % 360 - b) * Ra(g) || 0,
  Ya = ({ x: c, y: b, z: g }) => Math.hypot(c - Ha.x, b - Ha.y, g - Ha.z),
  Za = ({ x: c, y: b, z: g }, l) => c * l.x + b * l.y + g * l.z,
  $a = c => {
    let b, g = 0, l = 0, n = 0, k = c.at(-1);
    for (b of c) {
      g += (k.y - b.y) * (k.z + b.z), l += (k.z - b.z) * (k.x + b.x), n += (k.x - b.x) * (k.y + b.y), k = b;
    }
    return b = Math.hypot(g, l, n), g /= b, l /= b, n /= b, { x: g, y: l, z: n, w: g * k.x + l * k.y + n * k.z };
  },
  cb = (
    c,
    b = ab,
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
  db = (c, b, g, l) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0],
  eb = (c, b, g) => (c.D = g, c.A = b, c),
  fb = (c, b, g = c.A) =>
    eb(
      c.map(l => {
        let n, k;
        return { x: l, y: n, z: k } = l,
          { x: l, y: n, z: k } = b.transformPoint({ x: l, y: n, z: k }),
          { x: l, y: n, z: k };
      }),
      g,
      c.D,
    ),
  u = (c, b, g) => c.map(l => fb(l, b, g)),
  gb = (c, b = 0) =>
    Oa(c, g => {
      const l = Math.cos(2 * Math.PI * g / c);
      return { x: Math.sin(2 * Math.PI * g / c), y: 0, z: 0.01 > m(l) ? l : 0 > l ? l - b : l + b };
    }),
  hb = (c, b, g) =>
    c.map((l, n, { length: k }) => eb([l, b[k - n - 1], b[k - (n + 1) % k - 1], c[(n + 1) % k]], c.A, g)),
  I = (
    c,
    b,
    g = 0,
    l,
  ) => (c = c ? gb(c, l) : Qa,
    l = fb(c, G(0, 1).scale3d(0 < g ? g : 1)),
    c = fb(c, G(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...hb(c, l, b), l, c]),
  ib = (
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
        const t = eb([], 0, 1);
        l.push(t);
        t.push(g(n, k, t));
        k && t.push(g((n + 1) % c, k, t));
        b - 1 > k && t.push(g((n + 1) % c, k + 1 % b, t));
        t.push(g(n, k + 1 % b, t));
      }
    }
    return l;
  },
  jb = (c, b) => {
    var g, l, n, k = b.C;
    for (var t = 0; k.length > t; ++t) {
      if (-0.00008 > (g = Za(c, k[t]) - c.w) ? n = b : 8e-5 < g && (l = b), n && l) {
        l = [];
        n = [];
        k = b.C;
        t = b.B;
        let v = k.at(-1), w = Za(c, v) - c.w;
        for (const y of k) {
          g = Za(c, y) - c.w,
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
          o: 2 < l.length && { C: eb(l, k.A, k.D), B: t, u: b },
          m: 2 < n.length && { C: eb(n, k.A, k.D), B: t, u: b },
        };
      }
    }
    return { o: l, m: n };
  },
  kb = (c, b, g = $a(b.C)) => {
    let l, n, k;
    return c
      ? ({ o: l, m: n } = jb(c, b), l || n || c.s.push(b), l && (c.o = kb(c.o, l, g)), n && (c.m = kb(c.m, n, g)))
      : ({ x: l, y: n, z: g, w: k } = g, c = { x: l, y: n, z: g, w: k, s: [b], o: 0, m: 0 }),
      c;
  },
  lb = (c, b, g) => {
    const l = [],
      n = (k, t) => {
        let { o: v, m: w } = jb(k, t);
        v || w || (0 < g * Za(k, b) ? v = t : w = t);
        v && (k.o ? n(k.o, v) : l.push(v));
        w && k.m && n(k.m, w);
      };
    for (const k of b.s) {
      n(c, k);
    }
    return l;
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
    for (const l of b.s) {
      l.B = !l.B;
    }
  }),
    c),
  rb = (...c) =>
    c.reduce((b, g) => {
      const l = [];
      if (b = pb(b), g) {
        g = pb(g);
        mb(b, n => n.s = lb(g, n, 1));
        mb(g, n => l.push([n, lb(b, n, -1)]));
        for (let [n, k] of l) {
          for (const t of k) {
            kb(b, t, n);
          }
        }
      }
      return b;
    }),
  J = (...c) => {
    let b;
    const g = k => {
        let t;
        return k.u && ((t = l.get(k.u)) ? (n.delete(t), k = g(k.u)) : l.set(k.u, k)), k;
      },
      l = new Map(),
      n = new Map();
    return [c, ...b] = [...c],
      c = qb(rb(qb(pb(c)), ...b)),
      mb(c, k => {
        for (const t of k.s) {
          n.set(g(t), t.B);
        }
      }),
      Array.from(n, ([{ C: k }, t]) => {
        const v = k.map(({ x: w, y, z: C }) => ({ x: w, y, z: C }));
        return eb(t ? v.reverse() : v, k.A, k.D);
      });
  },
  sb = () => {
    va = Ta(h[12].g, h[13].g);
    ra = p(p(ra, 0, 1 - Math.exp(-1 * d)), Wa(ra + 60 * d), h[5].g - h[6].i);
    oa = p(p(oa, 0, 1 - Math.exp(-5 * d)), Wa(oa + 56 * d), va);
    pa = p(p(pa, 0, 1 - Math.exp(-4 * d)), Wa(pa + 48 * d), va);
    var c = 0.2 + 0.3 * m(2 * h[9].i - 1);
    ua = p(ua, h[9].i, 1 - Math.exp(-c * d));
    ta = p(ta, sa ? p(ta, -9, 1 - Math.exp(-1.5 * d)) : Ra(a / 3), 1 - Math.exp(-1 * d));
    Ba && a > Ba && (Ba = 0, h4.innerHTML = "");
    h[0].l && 0.8 < h[0].g && (13 > la
      ? (1 / 0 > Ba && (Ba = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0)
      : sa
        || (1 / 0 > Ba && (Ba = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          sa = 1));
    for (const b of e) {
      b.h && (b.j = b.h());
    }
    for (const b of h) {
      b.h();
    }
    for (const b of Ca) {
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
      ][la = Ca.reduce((c, { l: b }) => c + b, 0)] + " / XIII";
  },
  wb = () => {
    localStorage.I = JSON.stringify([h.map(({ l: c }) => c), Ca.map(({ l: c }) => c), na, a, ua]);
  },
  O = (c, b = 1) => {
    const g = ea;
    b = { j: xb, H: e.length, G: b, s: [] };
    return e.push(ea = b), c(b), ea = g, b;
  },
  R = (c, b = xb, g) => ea.s.push(...u(c, b, g)),
  yb = c => {
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
          3 > Ya(v.transformPoint()) && Ea[5] && (0.3 > k || 0.7 < k)
            && (l.l = n ? 0 : 1, g && 1 / 0 > Ba && (Ba = a + 1, h4.innerHTML = "* click *"), na = g, wb());
          l.g = p(k, n, 1 - Math.exp(-4 * d));
          l.i = p(t, n, 1 - Math.exp(-1 * d));
          l.j = v.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    h.push(l);
    R(I(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    R(I(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
    R(I(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), S(0.5, 0.5, 0.4));
  },
  Ab = (c, ...b) => {
    let g = -1, l = 0, n = 0, k = 0, t = 0, v = 0, w = 1, y = 3;
    const C = {
        l: 0,
        h() {
          if (!C.l) {
            let X, fa, ca, B, L, M, K, P = 1, V = 1 / 0;
            for (const T of f) {
              var { x: E, z: F, w: H } = T;
              F = (E = Math.hypot(r - E, x - F)) - H;
              K ||= E < H;
              0 < F && V > F && (V = F, q = T);
              P = zb(P, E / H);
            }
            K
              || ({ x: X, z: fa, w: ca } = q,
                B = r - X,
                L = x - fa,
                M = Math.hypot(B, L),
                N = Math.atan2(-L, B),
                w && (n = (Math.random() - 0.5) * Math.PI / 2, y = Ra(y / (1 + Math.random()))),
                N += n,
                g = -Math.cos(N),
                l = Math.sin(N),
                0.1 < M && (M = zb(M, ca) / (M || 1), r = B * M + X, x = L * M + fa));
            w = K;
            y = p(y, 6 * (1 - P) + 3, 1 - Math.exp(-(P + 3) * d));
            N = r = p(r, r + g, 1 - Math.exp(-y * d));
            D = p(D, N, 1 - Math.exp(-y * d));
            N = x = p(x, x + l, 1 - Math.exp(-y * d));
            z = p(z, N, 1 - Math.exp(-y * d));
            k = Xa(k, Math.atan2(D - t, z - v) / Pa - 180, 1 - Math.exp(-3 * d));
            t = D;
            v = z;
            var N = (C.j = Q.j.multiply(c.translate(D, 0, z).rotateSelf(0, k, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.6 > Ya(N)
              && (C.l = 1,
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
                ][la] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > Ba && (Ba = a + (la && 12 > la ? 5 : 7), h4.innerHTML = N),
                vb(),
                wb());
          }
          C.l
            && (C.j = e[2].j.translate(
              A % 4 * 1.2 - 1.7 + Math.sin(a + A) / 7,
              -2,
              1.7 * (A / 4 | 0) - 5.5 + m(A % 4 - 2) + Math.cos(a / 1.5 + A) / 6,
            ));
        },
      },
      Q = ea,
      A = Ca.length,
      f = b.map(([E, F, H]) => ({ x: E, z: F, w: H }));
    let q = f[0], { x: r, z: x } = q, D = r, z = x;
    Ca.push(C);
  },
  Db = (c, b, g, l) => {
    let n = 0, k = 0, t = 0, v = 1 / 0, w = -1 / 0, y = 1 / 0, C = -1 / 0, Q = 1 / 0, A = -1 / 0;
    const f = 1.1 * (g - b),
      q = (new DOMMatrix(db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
    return b = Oa(
      8,
      r => (r = q.transformPoint({ x: 4 & r ? 1 : -1, y: 2 & r ? 1 : -1, z: 1 & r ? 1 : -1 }),
        n -= r.x = (f * r.x | 0) / f / r.w,
        k -= r.y = (f * r.y | 0) / f / r.w,
        t -= r.z = (f * r.z | 0) / f / r.w,
        r),
    ),
      g = Bb(298, 139).translateSelf(n / 8, k / 8, t / 8),
      fb(b, g).map(({ x: r, y: x, z: D }) => {
        v = zb(v, r);
        w = Cb(w, r);
        y = zb(y, x);
        C = Cb(C, x);
        Q = zb(Q, D);
        A = Cb(A, D);
      }),
      Q *= 0 > Q ? l : 1 / l,
      A *= 0 < A ? l : 1 / l,
      U(2 / (w - v), 2 / (C - y), 2 / (Q - A)).translateSelf((w + v) / -2, (C + y) / -2, (Q + A) / 2).multiplySelf(g);
  },
  Gb = () => {
    let c, b, g, l, n, k, t, v, w, y, C, Q, A, f, q, r = !0;
    const x = () => {
        aa || !r ? Eb.disconnect() : Eb.connect(Fb.destination);
        b4.innerHTML = "Music: " + r;
      },
      D = (z = !1) => {
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
          ha = 0;
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
      D();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      D();
      ha = 1;
    };
    b4.onclick = () => {
      r = !r;
      x();
    };
    b5.onclick = () => D(!0);
    onclick = z => {
      q = 1;
      aa || (z.target === hC && (Ea[5] = !0), ha && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: z, target: E, type: F, repeat: H }) => {
      H || ((H = !!F[5] && E === document.body) && ("Escape" === z || "Enter" === z && aa)
        ? aa && !q || D(!aa)
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
        ? H && (Ea[F] = 1)
        : Ea[F] = H);
    };
    onmousemove = ({ movementX: z, movementY: E }) => {
      ha && (z || E) && (Ma += 0.1 * z, La += 0.1 * E);
    };
    hC.ontouchstart = z => {
      if (!aa) {
        for (let { pageX: E, pageY: F, identifier: H } of z.changedTouches) {
          ha && E > hC.clientWidth / 2
            ? void 0 === v && (w = 0, k = E, t = F, v = H, y = Ma, C = La)
            : void 0 === l && (n = 0, b = E, g = F, l = H);
        }
        c = ma;
      }
    };
    hC.ontouchmove = z => {
      if (!aa) {
        for (let { pageX: fa, pageY: ca, identifier: B } of z.changedTouches) {
          var E, F, H, N, X;
          v === B && (Ma = y + (fa - k) / 2.3, La = C + (ca - t) / 2.3, w = 1);
          l === B
            && (B = (b - fa) / 20,
              E = (g - ca) / 20,
              F = m(B),
              H = m(E),
              N = Math.atan2(E, B),
              X = Ra(Math.hypot(E, B) - 0.5),
              A = 0.2 < F ? Math.cos(N) * X : 0,
              f = 0.2 < H ? Math.sin(N) * X : 0,
              (A || f) && (n = 1),
              2 < F && (b = fa + 20 * Math.sign(B)),
              2 < H && (g = ca + 20 * Math.sign(E)));
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
          ? (l = void 0, f = A = 0, n || (E = 1), n = 0)
          : E = 1;
      }
      E && z.target === hC && c && 0.02 < (z = ma - c) && 0.7 > z && (Ea[5] = !0);
    };
    ja = () => {
      let z = f + (Ea[1] ? 1 : 0) - (Ea[3] ? 1 : 0),
        E = A + (Ea[0] ? 1 : 0) - (Ea[2] ? 1 : 0),
        F = navigator.getGamepads()[0];
      if (F) {
        const H = fa => N[fa]?.pressed || 0 < N[fa]?.value ? 1 : 0, N = F.buttons, X = F.axes;
        F = H(3) || H(2) || H(1) || H(0);
        z += H(12) - H(13) - Sa(X[1], 0.2);
        E += H(14) - H(15) - Sa(X[0], 0.2);
        ha && (La += d * Sa(X[3], 0.3) * 80, Ma += d * Sa(X[2], 0.3) * 80);
        F && !Q && (Ea[5] = 1);
        Q = F;
      }
      wa = Math.atan2(z, E);
      xa = Sa(Ra(Math.hypot(z, E)), 0.05);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Ea.length = A = f = 0;
      l = v = void 0;
      document.hidden && D(!0);
    })();
    D(!0);
  },
  Lb = (c, b) => {
    const g = {}, l = Z.c1h();
    return Z.abz(l, c), Z.abz(l, Hb(b, 35632)), Z.l8l(l), n => n ? g[n] || (g[n] = Z.gan(l, n)) : Z.u7y(l);
  },
  Ob = (c, b, g, l) => {
    if (aa) {
      g = Bb(0, 40 * Math.sin(ma) - 70);
      for (var n of [37, 38, 39]) {
        cb(g, Nb, n - 1);
      }
      Z.uae(c, !1, Nb);
      Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      for (n = 0; e.length > n; ++n) {
        e[n].G && cb(e[n].j, Nb, n - 1);
      }
      Z.uae(c, !1, Nb);
      Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        cb(Ca[b].j, Nb, b);
      }
      for (b = 0; h.length > b; ++b) {
        cb(h[b].j, Nb, b + 13), l || (Nb[16 * (b + 13) + 15] = 1 - h[b].g);
      }
      Z.uae(c, !1, Nb);
      Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13);
      Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
  },
  Pb = c => 0.5 > c % 1 ? 1 : -1,
  Qb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c,
  Zb = c => {
    let b = 0;
    const g = () => {
        const k = Fb.createBuffer(2, 5362944, 44100);
        for (let t = 0; 2 > t; t++) {
          for (let v = t, w = k.getChannelData(t); 10725888 > v; v += 2) {
            w[v >> 1] = n[v] / 65536;
          }
        }
        Eb.buffer = k;
        Eb.loop = !0;
        Rb(c);
      },
      l = () => {
        let k = 0;
        const t = K => {
            let P, V, T, Ia, da = 0, ia = 0;
            const Ua = [],
              qa = new Int32Array(768 * K),
              Tb = 2 ** (E - 9) / K,
              Ub = Math.PI * 2 ** (fa - 8) / K,
              tb = B * K & -2;
            for (let nb = 0; 11 >= nb; ++nb) {
              for (
                let ob = 0,
                  Ib = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + nb],
                  Jb = (32 * nb + ob) * K;
                32 > ob;
                ++ob
              ) {
                for (let Da = 0; 4 > Da; ++Da) {
                  if (V = 0, Ib && (V = v[Ib - 1].charCodeAt(ob + 32 * Da) - 40, V += 0 < V ? 106 : 0), V) {
                    var Va;
                    if (!(Va = Ua[V])) {
                      Va = V;
                      let W = void 0, Y = void 0;
                      var Kb = V;
                      let bb = 0, Vb = 0;
                      const Xb = 2 > b ? Sb : Wb, Yb = 2 > b ? 1 > b ? Pb : Qb : Wb, Mb = new Int32Array(r + x + M);
                      for (let Ja = 0, ub = 0; r + x + M > Ja; ++Ja, ++ub) {
                        let Ka = 1;
                        r > Ja ? Ka = Ja / r : r + x > Ja || (Ka = (1 - (Ka = (Ja - r - x) / M)) * 3 ** (z / -16 * Ka));
                        0 > ub
                          || (Y = 396e-5 * 2 ** ((Kb + y - 256) / 12),
                            W = 396e-5 * 2 ** ((Kb + A - 256) / 12) * (b ? 1 : 1.0072),
                            ub -= 4 * K);
                        Mb[Ja] = 80
                          * (Xb(bb += Y * Ka ** (C / 32)) * w + Yb(Vb += W * Ka ** (f / 32)) * Q
                            + (q ? (2 * Math.random() - 1) * q : 0))
                          * Ka;
                      }
                      Va = Ua[Va] = Mb;
                    }
                    for (let W = 0, Y = 2 * Jb; Va.length > W; ++W, Y += 2) {
                      qa[Y] += Va[W];
                    }
                  }
                }
                for (let Da, W, Y, bb = 0; K > bb; ++bb) {
                  Y = 2 * (Jb + bb),
                    Da = 0,
                    ((W = qa[Y]) || Ia)
                    && (T = 308e-5 * F,
                      1 !== b && 4 !== b || (T *= Math.sin(Tb * Y * Math.PI * 2) * L / 512 + 0.5),
                      T = 1.5 * Math.sin(T),
                      da += T * ia,
                      P = (1 - H / 255) * (W - ia) - da,
                      ia += T * P,
                      W = 4 === b ? ia : 3 === b ? P : da,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= N / 32,
                      Ia = 1e-5 < W * W,
                      P = Math.sin(Ub * Y) * X / 512 + 0.5,
                      Da = W * (1 - P),
                      W *= P),
                    Y < tb || (Da += qa[1 + Y - tb] * ca
                      / 255,
                      W += qa[Y - tb] * ca / 255),
                    n[k + Y] += qa[Y] = Da,
                    ++Y,
                    n[k + Y] += qa[Y] = W;
                }
              }
            }
            k += 768 * K;
          },
          v = Fa[b],
          [w, y, C, Q, A, f, q, r, x, D, z, E, F, H, N, X, fa, ca, B, L] = Ga[b],
          M = 4 * D ** 2;
        t(5513);
        t(4562);
        t(3891);
        Rb(5 > ++b ? l : g);
      },
      n = new Int32Array(10725888);
    Rb(l);
  },
  $b = () => {
    let c, b, g, l, n, k, t, v, w, y, C, Q, A, f, q, r, x, D = 1, z = 2, E = 2;
    const F = () => {
        let B = 0, L = 0, M = 0, K = 0;
        l = 0;
        fa.fill(0);
        for (let V = 0; 31 > V; ++V) {
          let T = 0;
          const Ia = 512 * V;
          for (let da = 0; 128 > da; da++) {
            var P = Ia + 4 * da;
            let ia = (ca[P] + ca[1 + P]) / 255;
            P = ca[2 + P];
            14 < da && 114 > da && (T += ia);
            P && ia && (ia = fa[P] + 1, fa[P] = ia, B > ia || (B = ia, L = P));
          }
          3 > T && 5 < V && (M += V / 32);
          3 < T && (7 < V && (K += V / 15), l = 1);
        }
        L && (l = 1);
        c = L || b;
        b = L;
        E = p(E, l ? 6.5 : -20 > Na.y ? 11 : 8, 1 - Math.exp(-4 * d));
        Na.y += K / 41 - (l || E) * M / 41 * E * d;
      },
      H = () => {
        y = w = 0;
        for (let B = 32; 128 > B; B += 2) {
          let L = 0, M = 0, K = 0, P = 0;
          const V = 512 * B;
          for (let T = 1 & B; 128 > T; T += 2) {
            const Ia = V + 4 * T;
            let da = V + 4 * (127 - T);
            const ia = ca[Ia] / 255, Ua = ca[1 + da] / 255, qa = 1 - m(T / 63.5 - 1);
            10 < T && 118 > T
              && (L = Cb(Cb(ia * qa, ia * ca[da] / 255), L), M = Cb(Cb(Ua * qa, Ua * ca[1 + Ia] / 255), M));
            (54 > T || 74 < T) && 1e-3 < (da = (1 - qa) * Cb(ia, Ua) / 3)
              && (64 > T && da > K ? K = da : 64 < T && da > P && (P = da));
          }
          m(P - K) > m(w) && (w = P - K);
          m(M - L) > m(y) && (y = M - L);
        }
      },
      N = () => z ? h[na].u.j : g && 1 === e[g].G && e[g].j || xb,
      X = (B, L, M, K) => p(B, L, D || (Ra(m(L - B) ** 0.9 - M) + 1 / 7) * (1 - Math.exp(-(1.5 * K) * d))),
      fa = new Int32Array(256),
      ca = new Uint8Array(65536);
    ka = () => {
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, ca);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(H)();
      NO_INLINE(F)();
      var B = Ra(1 - 5 * Cb(m(w), m(y))), L = ha ? Ma * Pa : Math.PI;
      B =
        (A = p(A, l * B * Ra(2 * xa) * 7, 1 - Math.exp(-(l ? 0.1 < B ? 10 : 5 + 2 * xa : 1) * d)),
          C = p(C, 0, 1 - Math.exp(-(l ? 8 : 4) * d)),
          w += d * ((c ? 0 : B * C) - Math.cos(wa + L) * xa * A),
          Q = p(Q, 0, 1 - Math.exp(-(l ? 8 : 4) * d)),
          y += d * ((c ? 0 : B * Q) - Math.sin(wa + L) * xa * A),
          N());
      var { x: M, y: K, z: L } = 1 < z
        ? h[na].J.transformPoint({ x: 0, y: na || 0.9 < ta ? 15 : 1, z: -2.4 })
        : ((M = (L = B).inverse()).m41 = M.m42 = M.m43 = 0,
          K = M.transformPoint({ x: w, z: y, w: 0 }),
          Na.x += K.x,
          Na.z += K.z,
          L.transformPoint(Na));
      if (
        c && (C = (M - Ha.x) / d, Q = (L - Ha.z) / d),
          Ha.x = M,
          Ha.y = K,
          Ha.z = L,
          (z = z && (l && c ? 0 : 1)) || c !== g
      ) {
        g = c;
        const P = (B = N()).inverse().transformPoint(Ha);
        Na.x = P.x;
        Na.y = P.y;
        Na.z = P.z;
      }
      v = p(v, va * (27 < c && 32 > c), 1 - Math.exp(-2 * d));
      K < (-25 > M || 109 > L ? -25 : -9) && (C = Q = A = 0, z = 2);
      1 === c && (h[9].l = -15 > M && 0 > L ? 1 : 0);
      f = p(p(f, K, 1 - Math.exp(-2 * d)), K, z || 8 * m(f - K));
      r = X(r, f, 2, 1);
      q = X(q, M, 0.5, 1);
      x = X(x, L, 0.5, 1);
      ha
        ? (B = z + (1 - Math.exp(-18 * d)), ya = p(ya, M, B), za = p(za, f + 1.5, B), Aa = p(Aa, L, B), Ma = Wa(Ma))
        : (za = X(za, Cb(r + Ra((-60 - L) / 8, 0, 20) + 13 + 9 * v, 6), 4, 2),
          Aa = X(Aa, x + -18 + 5 * v, 1, 2 + v),
          ya = X(ya, q, 1, 2 + v),
          K = zb(4, -m(x - Aa)),
          B = q - ya,
          Ma = Xa(Ma, 90 - Wa(Math.atan2(K, B) / Pa), D + (1 - Math.exp(-6 * d))),
          La = Xa(La, 90 - Math.atan2(Math.hypot(K, B), za - r) / Pa, D + (1 - Math.exp(-6 * d))));
      La = Ra(La, -87, 87);
      k = Xa(k, n, 1 - Math.exp(-8 * d));
      t = p(t, xa, 1 - Math.exp(-10 * d));
      xa && (n = 90 - wa / Pa);
      D = 0;
      e[37].j = G(M, f, L).rotateSelf(0, k);
      for (B = 0; 2 > B; ++B) {
        e[38 + B].j = e[37].j.translate(0, t * Ra(0.45 * Math.sin(9.1 * a + Math.PI * (B - 1) - Math.PI / 2)))
          .rotateSelf(t * Math.sin(9.1 * a + Math.PI * (B - 1)) * 0.25 / Pa, 0);
      }
    };
  },
  Hb = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b),
  Rb = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Wb = c => Math.sin(c * Math.PI * 2),
  Sb = c => c % 1 * 2 - 1,
  Fb = new AudioContext(),
  xb = new DOMMatrix(),
  ab = new Float32Array(16),
  Nb = new Float32Array(624),
  ac = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  zb = NO_INLINE((c, b) => c < b ? c : b),
  Cb = NO_INLINE((c, b) => b < c ? c : b),
  m = NO_INLINE(c => 0 > c ? -c : c),
  G = NO_INLINE((c, b, g) => xb.translate(c, b, g)),
  Bb = NO_INLINE((c, b, g) => xb.rotate(c, b, g)),
  U = NO_INLINE((c, b, g) => xb.scale(c, b, g)),
  S = NO_INLINE((c, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c),
  Eb = Fb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Z) {
  Z[c[0] + [...c].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
Rb(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const l = q => {
            let r;
            Z.f1s();
            requestAnimationFrame(l);
            x = (q - (ba || q)) / 1e3;
            ma += x;
            a += d = aa ? 0 : zb(0.066, x);
            ba = q;
            0 < d
              && (ja(),
                sb(),
                ka(),
                w(),
                Z.b6o(36160, A),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                { x, y: q, z: r } = Ha,
                Z.uae(w("b"), !1, cb(Bb(0, 180).invertSelf().translateSelf(-x, -q, 0.3 - r))),
                Ob(w("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(w("b"), !1, cb(G(-x, -q, -r - 0.3))),
                Ob(w("c"), 0, 41, 0),
                Z.f1s());
            Ea[5] = 0;
            var x = aa
              ? Bb(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : Bb(-La, -Ma).invertSelf().translateSelf(-ya, -za, -Aa);
            t();
            Z.b6o(36160, Q);
            Z.v5y(0, 0, 2048, 2048);
            C[0](Db(x, 0.3, 55, 10));
            C[1](Db(x, 55, 186, 11));
            y();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            C[0]();
            C[1]();
            Z.uae(y("a"), !1, db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
            Z.uae(y("b"), !1, cb(x));
            Z.ubu(y("k"), ya, za, Aa);
            Ob(y("c"), !ha, 42, 0);
            v();
            Z.ubu(v("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ma);
            Z.ubu(v("k"), ya, za, Aa);
            Z.uae(v("b"), !1, cb(x.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, A);
            Z.f1s();
          },
          n = g;
        let k = Hb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const t = Lb(
            Hb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          v = Lb(
            Hb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          w = Lb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          y = Lb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          C = Oa(2, q => {
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
              D => {
                D
                  ? (cb(D, r),
                    Z.uae(t("b"), !1, r),
                    Z.fas(36160, 36096, 3553, x, 0),
                    Z.c4s(256),
                    Ob(t("c"), !ha, 42, 1))
                  : Z.uae(y(q ? "j" : "i"), !1, r);
              };
          }),
          Q = Z.c5w(),
          A = (k = Z.c3z(), Z.c5w()),
          f = Z.c25();
        w();
        Z.uae(w("a"), !1, db(1.4, 0.59, 1e-4, 1));
        y();
        Z.ubh(y("q"), 2);
        Z.ubh(y("h"), 1);
        Z.ubh(y("g"), 0);
        v();
        Z.ubh(v("q"), 2);
        Z.b6o(36160, Q);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, A);
        Z.bb1(36161, k);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, k);
        Z.a4v(33986);
        Z.b9j(3553, f);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, f, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
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
        NO_INLINE($b)();
        NO_INLINE(Gb)();
        requestAnimationFrame(l);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = ac;
  NO_INLINE(Zb)(() => {
    Rb(() => {
      let k, t = 0;
      const v = [],
        w = [],
        y = [],
        C = [],
        Q = x => {
          let { x: D, y: z, z: E } = k[x], F = (r[0] = D, r[1] = z, r[2] = E, x = "" + (k.D ? q : A), f.get(x));
          return void 0 !== F
            ? (D = 3 * F, C[D] = (C[D++] + A[5]) / 2, C[D] = (C[D++] + A[6]) / 2, C[D] = (C[D] + A[7]) / 2)
            : (f.set(x, F = f.size), w.push(D, z, E, r[3]), y.push(A[4]), C.push(A[5], A[6], A[7])),
            F;
        },
        A = new Int32Array(8),
        f = new Map(),
        q = new Int32Array(A.buffer, 0, 5),
        r = new Float32Array(A.buffer);
      for (const x of e) {
        for (k of (r[3] = 40 === x.H ? -14 : x.G && x.H, x.s)) {
          const { x: D, y: z, z: E } = $a(k);
          A[4] = 0 | k.A;
          A[5] = 32767 * D;
          A[6] = 32767 * z;
          A[7] = 32767 * E;
          for (let F = 2, H = Q(0), N = Q(1); k.length > F; ++F) {
            v.push(H, N, N = Q(F));
          }
        }
        x.s = null;
        x.v = t;
        x.F = t = v.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(w), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(C), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(y), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Rb(b);
      try {
        const [x, D, z, E, F] = JSON.parse(localStorage.I);
        h.map((H, N) => H.g = H.i = H.l = N ? 0 | x[N] : 0);
        Ca.map((H, N) => H.l = 0 | D[N]);
        na = z;
        a = E;
        ua = F;
      } catch {
      }
      ta = Ra(na);
    });
    const l = Oa(11, k => G(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10)),
      n = Oa(10, k => hb(fb(gb(18), l[k]).reverse(), fb(gb(18), l[k + 1]), 1)).flat();
    O(() => R([Qa.slice(1)], G(-2).scale3d(3).rotate(90, 0)), 0);
    O(() => {
      const k = (f, q, r) =>
          O(x => {
            x.h = () => G(w() * Math.sin(3 * f + a * f) * q);
            Qa.map(({ x: D, z }) => {
              R(I(11, 1), G(4 * D, 4, r + 4 * z).scale(0.8, 3, 0.8), S(0.5, 0.3, 0.7, 0.6));
              R(I(), G(4 * D, 7, r + 4 * z).scale(1, 0.3), S(0.5, 0.5, 0.5, 0.3));
            });
            R(J(
              u(I(), G(0, 0, r).scale(5, 1, 5), S(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(D => u(I(), G(5 * D, 0.2, r).rotate(-30 * D).scale(4, 1, 2), S(0.8, 0.8, 0.8, 0.3))),
            ));
            R(I(), G(0, -3, r).scale(8, 2, 8), S(0.4, 0.4, 0.4, 0.3));
          }),
        t = (f, q, r) =>
          G(f + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, r).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        v = f =>
          J(
            u(I(), G(0, -f / 2).scale(6, f - 1, 2.2)),
            u(I(), G(0, -f / 2 - 6).scale(4, f - 3, 4)),
            u(I(32, 1), G(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => zb(h[2].i, 1 - h[4].i),
        y = J(
          u(I(20, 1, 1.15, 1), G(0, -3).scale(3.5, 1, 3.5), S(0.7, 0.4, 0.25, 0.7)),
          u(I(20, 1, 1.3, 1), G(0, -2.5).scale(2.6, 1, 3), S(0.7, 0.4, 0.25, 0.2)),
          u(I(), G(4, -1.2).scale3d(2), S(0.7, 0.4, 0.25, 0.3)),
        ),
        C = Oa(7, f => u(I(6, 1), G(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), S(0.3, 0.3, 0.38))).flat(),
        Q = (O(f => {
          f.h = () => t(-12, 4.2, 40 * ta - 66);
          R(y);
          yb(G(0, -3, 4));
        }),
          yb(G(-5.4, 1.5, -19).rotate(0, -90)),
          Ab(G(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Ab(G(0, 2.8), [5, 10, 3], [-5, 10, 3], ...gb(18).map(({ x: f, z: q }) => [7 * f, 10 * q, 4.5 - 2 * m(f)])),
          R(I(), G(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
          Qa.map(({ x: f, z: q }) => R(I(6), G(3 * f, 3, 15 * q).scale(0.7, 4, 0.7), S(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(f => R(I(), G(0, 0, f).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((f, q) => {
            R(I(), G(0, 6.3, f).scale(4, 0.3, 1), S(0.3, 0.3, 0.3, 0.4));
            R(I(), G(0, 1, f).scale(3, 0.2, 0.35), S(0.5, 0.5, 0.5, 0.3));
            O(r => {
              r.h = () => G(0, 0, f).scale(1, Ra(1.22 - h[q + 1].g), 1);
              R(C);
            });
          }),
          Oa(5, f =>
            Oa(2, q =>
              R(
                n,
                G(18.5 * (q - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2),
                S(1, 1, 0.8, 0.2),
              ))),
          R(I(), G(3, 1.5, -20).scale(0.5, 2, 5), S(0.7, 0.7, 0.7, 0.2)),
          R(I(), G(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(0.75, 0.75, 0.75, 0.2)),
          R(I(5), G(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(0.6, 0.3, 0.3, 0.4)),
          R(I(), Bb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), S(0.8, 0.2, 0.2, 0.5)),
          R(J(
            rb(
              u(I(6, 0, 0, 0.3), G(8, -3, -4).scale(13, 1, 13), S(0.7, 0.7, 0.7, 0.2)),
              u(I(6), G(0, -8).scale(9, 8, 8), S(0.4, 0.2, 0.5, 0.5)),
              u(I(6, 0, 0, 0.3), G(0, -0.92).scale(13, 2, 13), S(0.8, 0.8, 0.8, 0.2)),
            ),
            u(I(5), U(5, 30, 5), S(0.4, 0.2, 0.6, 0.5)),
            u(I(5, 0, 1.5), G(0, 1).scale(4.5, 0.3, 4.5), S(0.7, 0.5, 0.9, 0.2)),
            u(I(), Bb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), S(0.5, 0.5, 0.5, 0.5)),
            u(I(6), G(15, -1.5, 4).scale(3.5, 1, 3.5), S(0.5, 0.5, 0.5, 0.5)),
          )),
          O(f => {
            f.h = () =>
              G(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0);
            R(I(5), G(0, -0.2).scale(5, 1, 5), S(0.6, 0.65, 0.7, 0.3));
            yb(G(0, 1.2));
          }),
          yb(G(15, -2, 4)),
          k(0.7, 12, 35),
          k(1, 8.2, 55),
          O(f => {
            f.h = () => G(w() * Math.sin(a / 1.5 + 2) * 12);
            R(
              J(
                rb(
                  u(I(), U(1.5, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  u(I(6), U(4, 1, 5), S(0.9, 0.9, 0.9, 0.2)),
                  u(I(), G(0, -2).scale(2, 3.2, 1.9), S(0.3, 0.8, 0.5, 0.5)),
                  u(I(16, 1, 0, 4), U(1, 1, 1.5).rotate(0, 90), S(0.9, 0.9, 0.9, 0.2)),
                ),
                u(I(), U(1.3, 10, 1.3), S(0.2, 0.7, 0.4, 0.6)),
              ),
              G(0, 0, 45),
            );
            Ab(G(0, 2.8, 45), [0, 0, 4.5]);
          }),
          R(I(), G(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
          O(f => {
            f.h = () => G(9.8 * (1 - w()));
            R(I(3), G(-23, -1.7, 55.8).scale(5, 0.7, 8.3), S(0.3, 0.6, 0.6, 0.2));
            R(I(8), G(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(0.8, 0.8, 0.8, 0.2));
            R(I(), G(-23, -3, 55).scale(5.2, 1.7, 3), S(0.5, 0.5, 0.5, 0.3));
            R(I(), G(-23, -2.2, 62).scale(3, 1, 4), S(0.5, 0.5, 0.5, 0.3));
            yb(G(-23, -0.5, 66.5));
          }),
          O(f => {
            f.h = () => G(0, Ra(1 - 5 * w()) * Ta(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
            R(I(), G(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(0.7, 0.7, 0.7, 0.2));
            R(J(u(I(), U(3, 1.4, 2.7)), u(I(), U(1.2, 8, 1.2))), G(-33, -3, 55), S(0.7, 0.7, 0.7, 0.2));
          }),
          O(f => {
            f.h = () => G(0, 0, Ra(1 - 5 * w()) * Ta(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
            R(J(
              u(I(), G(-27, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)),
              u(I(), G(-27, -3, 55).scale(1, 3), S(0.9, 0.9, 0.9, 0.2)),
            ));
            R(I(), G(-39, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2));
          }),
          O(f => {
            f.h = () => G(0, -6.5 * h[4].i);
            R(I(6), G(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), S(0.7, 0.7, 0.7, 0.4));
          }),
          yb(G(-55, -1.1, 46).rotate(0, 90)),
          R(I(6), G(-61.3, -2.4, 49).scale(3, 1, 5), S(0.4, 0.6, 0.6, 0.3)),
          R(I(7), G(-57, -2.6, 46).scale(4, 1, 4), S(0.8, 0.8, 0.8, 0.3)),
          [
            ...u(I(), G(0, -3).scale(11, 1.4, 3), S(0.9, 0.9, 0.9, 0.2)),
            ...J(
              u(I(6), Bb(90).scale(6, 8, 6), S(0.3, 0.6, 0.6, 0.3)),
              u(I(4, 0, 0.01), G(0, 6).scale(12, 2, 0.75).rotate(0, 45), S(0.3, 0.6, 0.6, 0.3)),
              u(I(6), Bb(90).scale(5, 12, 5), S(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => u(I(5), G(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        A = (R(Q, G(-53, 0, 55)),
          O(f => {
            f.h = () => G(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ra, 0);
            R(Q);
          }, 2),
          R(I(), G(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(0.7, 0.7, 0.7, 0.2)),
          R(I(3, 0, -0.5), G(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(0.8, 0.8, 0.8, 0.2)),
          R(J(
            rb(
              u(I(), G(-100, -2.5, 55).scale(8, 1, 8), S(0.8, 0.8, 0.8, 0.2)),
              u(I(), G(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(0.8, 0.8, 0.8, 0.2)),
              u(I(), G(-100, -2.6, 70).scale(3, 1.1, 7), S(0.8, 0.8, 0.8, 0.2)),
              u(I(), G(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(0.8, 0.8, 0.8, 0.2)),
              u(I(6), G(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(0.6, 0.6, 0.6, 0.3)),
              u(I(), G(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(0.8, 0.8, 0.8, 0.2)),
              u(I(), G(-100, 0.42, 92).scale(3, 1.1, 4.1), S(0.8, 0.8, 0.8, 0.2)),
            ),
            u(I(8), G(-100, -1, 55).scale(7, 0.9, 7), S(0.3, 0.3, 0.3, 0.4)),
            u(I(8), G(-100, -2, 55).scale(4, 0.3, 4), S(0.4, 0.4, 0.4, 0.5)),
            u(I(8), G(-100, -3, 55).scale(0.6, 1, 0.6), S(0.4, 0.4, 0.4, 0.5)),
          )),
          Ab(G(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Ab(G(-89, 0.2, 80), [0, 0, 6]),
          R(J(
            u(I(), G(-100, 1, 63).scale(7.5, 4), S(0.5, 0.5, 0.5, 0.4)),
            u(I(), G(-100, 0, 70).scale(2, 2, 10), S(0.5, 0.5, 0.5, 0.4)),
            u(I(20, 1), G(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(0.5, 0.5, 0.5, 0.4)),
          )),
          O(f => {
            f.h = () => G(-99.7, -1.9, 63.5).scale(1, Ra(1.1 - h[6].g), 1);
            R(C);
          }),
          Qa.map(({ x: f, z: q }) => {
            R(I(6), G(7 * f - 100, -3, 7 * q + 55).scale(1, 8.1), S(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(r => R(I(6), G(7 * f - 100, r, 7 * q + 55).scale(1.3, 0.5, 1.3), S(0.4, 0.2, 0.2, 0.8)));
          }),
          Oa(7, f => {
            R(
              I((23 * f + 1) % 5 + 5, 0, 0.55),
              G(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              S(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          R(I(), G(-87, -9.5, 24).scale(7, 1, 3), S(0.4, 0.5, 0.6, 0.4)),
          R(I(4), G(-86, -9.2, 27).scale(5, 1, 5), S(0.5, 0.6, 0.7, 0.3)),
          R(I(12, 1), G(-86, -9, 31).scale(1.5, 1, 1.5), S(0.3, 0.3, 0.4, 0.1)),
          yb(G(-86, -7.5, 31)),
          O(f => {
            f.h = () => G(0, 3.5 * (1 - Cb(h[6].g, h[7].g)) + Ta(h[7].i, h[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(q => R(I(), G(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.2, 0.5, 0.6, 0.2)));
          }),
          O(f => {
            f.h = () => G(0, Ta(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ta(h[7].i, h[6].i));
            [6, 18].map(q => R(I(), G(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.1, 0.4, 0.5, 0.2)));
          }),
          R(
            J(
              rb(
                u(I(5), G(0, 0, -7).scale(2, 1.2, 2), S(0.2, 0.4, 0.7, 0.3)),
                u(I(5), U(9, 1.2, 9), S(0, 0.2, 0.3, 0.5)),
                u(I(), U(11, 1, 13), S(0.3, 0.4, 0.6, 0.3)),
              ),
              u(I(5), U(5.4, 5, 5.4), S(0, 0.2, 0.3, 0.5)),
            ),
            G(-38.9, -11.3, 17),
          ),
          yb(G(-38.9, -9.6, 10)),
          O(f => {
            f.h = () => G(0, -7.3 * h[7].i);
            R(
              J(
                rb(
                  u(I(5), G(0, 2).scale(5, 7, 5).skewY(8), S(0.2, 0.4, 0.5, 0.5)),
                  u(I(5), G(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(0.25, 0.35, 0.5, 0.5)),
                  u(I(5), G(0, 9).scale(0.6, 7, 0.6).skewY(8), S(0.35, 0.3, 0.5, 0.5)),
                ),
                u(I(5), U(4, 8, 4), S(0.2, 0.4, 0.5, 0.5)),
                u(I(5), G(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(0.2, 0.4, 0.5, 0.5)),
              ),
              G(-38.9, -11.3, 17),
            );
            Ab(G(-39.1, -0.6, 17).rotate(11), ...gb(15).map(({ x: q, z: r }) => [3 * q, 3 * r, 1.2]));
          }),
          Qa.map(({ x: f, z: q }) => {
            R(I(14, 1), G(9 * f - 38.9, -7.3, 11 * q + 17).scale(1, 4), S(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(r =>
              R(I(17, 1), G(9 * f - 38.9, r - 11.3, 11 * q + 17).scale(1.5, 0.5, 1.5), S(0.6, 0.6, 0.6, 0.3))
            );
          }),
          R(
            J(
              rb(
                u(I(6), G(0, 0, -36).scale(15, 1.2, 15), S(0.7, 0.7, 0.7, 0.3)),
                u(I(), G(0, 0, -18).scale(4, 1.2, 6), S(0.45, 0.4, 0.6, 0.3)),
              ),
              ...Oa(6, f =>
                Oa(6, q =>
                  u(
                    I(6),
                    G(4.6 * q - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2),
                    S(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            G(-38.9, -11.3, 17),
          ),
          Ab(G(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          R(I(5), G(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), S(0.8, 0.1, 0.25, 0.4)),
          yb(G(-84, -0.5, 85).rotate(0, 45)),
          O(f => {
            f.h = () => t(-123, 1.4, 55 + -65 * ua);
            R(y);
            yb(G(0, -3, -4).rotate(0, 180));
          }),
          J(
            u(I(), G(0, -0.5, 1).scale(1.15, 1.2, 6.5), S(0.25, 0.25, 0.35, 0.3)),
            u(I(3), G(0, 0, -5.5).scale(3, 2), S(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => u(I(), G(f, -0.5, 1).scale(0.14, 0.3, 6.5), S(0.7, 0.2, 0, 0.3))),
          ));
      O(f => {
        f.h = () => G(0, -2, Ta(h[10].g, h[11].g) * m(Math.sin(1.1 * a)) * -8.5 + 10);
        Oa(2, q => R(A, G(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      O(f => {
        f.h = () => G(0, -2, Ta(h[10].g, h[11].g) * m(Math.sin(2.1 * a)) * -8.5 + 10);
        Oa(2, q => R(A, G(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      O(f => {
        f.h = () =>
          G(
            0,
            -2,
            -8.5 * Cb((1 - h[10].g) * (1 - Ta(h[10].g, h[11].g)), Ta(h[10].g, h[11].g) * m(Math.sin(1.5 * a))) + 10,
          );
        Oa(3, q => R(A, G(9 * q - 106, 1.7, -12)));
      });
      R(
        J(
          rb(u(I(), G(26.5, -1.6, 10).scale(20, 2.08, 3)), u(I(), G(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...Oa(4, f => u(I(), G(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...Oa(3, f => u(I(), G(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        G(-123, 0, -12),
        S(0.5, 0.5, 0.6, 0.2),
      );
      yb(G(-116, -1.4, -18).rotate(0, 180));
      R(I(), G(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(0.8, 0.8, 0.8, 0.2));
      R(I(6), G(-116, -2.6, -16.5).scale(3.2, 0.8, 3), S(0.6, 0.5, 0.7, 0.2));
      R(I(), G(-115.5, -17, -12).scale(0.5, 15, 2.2), S(0.6, 0.6, 0.6, 0.3));
      R(I(8), G(-114, -17, -2).scale(2, 15, 2), S(0.6, 0.6, 0.6, 0.3));
      R(I(8), G(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, 0.3));
      R(I(), G(-77, -17, -50.5).scale(2.2, 15, 0.5), S(0.6, 0.6, 0.6, 0.3));
      Oa(3, f => {
        R(v(16), G(12 * f - 109, -9, -12), S(0.6, 0.6, 0.6, 0.3));
        R(v(16), G(-77, -9, -12 * f - 20).rotate(0, 90), S(0.6, 0.6, 0.6, 0.3));
      });
      R(J(
        u(I(12), G(-77, -14.5, -12).scale(4, 17.5, 4), S(0.7, 0.7, 0.7, 0.2)),
        u(I(), G(-79, 0.1, -12).scale(3.5, 2, 1.3), S(0.4, 0.5, 0.6, 0.2)),
        u(I(), G(-77, 0.1, -14).scale(1.5, 2, 2), S(0.4, 0.5, 0.6, 0.2)),
        u(I(12), G(-77, 3.1, -12).scale(3, 5, 3), S(0.4, 0.5, 0.6, 0.2)),
      ));
      R(I(), G(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(0.6, 0.6, 0.6, 0.3));
      R(I(9), G(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(0.5, 0.5, 0.5, 0.3));
      R(J(
        u(I(), G(-93, -5.8, -40).scale(9, 1, 5), S(0.8, 0.8, 0.8, 0.1)),
        u(I(9), G(-98, -5.8, -40).scale(3, 8, 3), S(0.7, 0.7, 0.7, 0.2)),
      ));
      yb(G(-98, -4.4, -40).rotate(0, 90));
      Ab(G(-115, 0.2, -12), [0, 0, 3.5]);
      Ab(G(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      R(J(
        rb(
          u(I(6, 0, 0, 0.6), G(-100, 0.7, 105.5).scale(8, 1, 11), S(0.7, 0.7, 0.7, 0.2)),
          u(I(), G(-101.5, 0.7, 93.5).scale(10.5, 1, 2), S(0.7, 0.7, 0.7, 0.2)),
        ),
        u(I(5), G(-100, 0.7, 113).scale(4, 3, 4), S(0.7, 0.7, 0.7, 0.2)),
      ));
      Oa(4, f =>
        O(q => {
          q.h = () => {
            const r = Ta(h[8].i, h[12].i);
            return G(
              (2 < f ? 2 * (1 - r) + r : 0) - 100,
              r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + Cb(r, 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          R(
            I(6),
            G(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            S(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      O(f => {
        f.h = () => {
          const q = Ta(h[8].i, h[12].i);
          return G(2.5 * (1 - q) - 139.7, -3 * (1 - h[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * a) * (3 * q + 3),
            0,
          );
        };
        R(J(u(I(10), U(6, 2, 6), S(0.1, 0.6, 0.5, 0.3)), u(I(10), U(3.3, 6, 3.3), S(0.1, 0.6, 0.5, 0.5))));
        R(I(15, 1), G(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(0.4, 0.4, 0.4, 0.3));
        R(I(10), G(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(0.3, 0.8, 0.7, 0.3));
        R(I(5), G(-7.5).rotate(0, 90).scale(1, 3), S(0.5, 0.5, 0.5, 0.5));
        yb(G(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(q => R(n, Bb(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, 0.8, 0.2)));
        Ab(G(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        R(I(12, 1), G(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), S(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(q => R(I(15, 1), G(-7.5 * f - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), S(0.5, 0.24, 0.2, 0.4)));
        R(n, G(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), S(1, 1, 0.8));
        R(
          J(
            u(I(), G(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), S(0.5, 0.5, 0.5, 0.4)),
            u(I(), U(3, 3, 10), S(0.6, 0.24, 0.2, 0.5)),
            u(I(28, 1), G(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(0.6, 0.24, 0.2, 0.5)),
            u(I(5), G(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(0.6, 0.24, 0.2, 0.5)),
            u(I(5), G(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), S(0.6, 0.24, 0.2, 0.5)),
          ),
          G(f - 100, 0.7, 97),
        );
      });
      O(f => {
        f.h = () => G(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        R(C);
      });
      R(J(
        u(I(), G(-82.07, 0.8, 106).scale(11, 0.9, 2.2), S(0.7, 0.7, 0.7, 0.1)),
        u(I(45, 1), G(-81, 0.7, 106).scale3d(7.7), S(0.7, 0.7, 0.7, 0.1)),
      ));
      O(f => {
        f.h = () => G(-81, 0.6, 106).rotate(0, 40 + oa);
        R(J(
          u(I(45, 1), U(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)),
          u(I(), G(0, 0, -5.5).scale(1.5, 3, 2.7), S(0.45, 0.45, 0.45, 0.2)),
        ));
        R(I(8), G(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(0.7, 0.7, 0.7, 0.1));
        R(I(5), G(0, 2).scale(1, 2), S(0.3, 0.3, 0.3, 0.2));
        Ab(G(0, 3), ...gb(14).map(({ x: q, z: r }) => [5.6 * q, 5.6 * r, 2]));
      });
      O(f => {
        f.h = () => G(-65.8, 0.8, 106).rotate(0, pa);
        [-1, 1].map(q =>
          R(n, Bb(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), S(1, 1, 0.8))
        );
        R(J(u(I(28, 1), G(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)), u(I(), U(9, 5, 2), S(0.3, 0, 0, 0.3))));
        R(u(I(28, 1), U(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        R(u(I(5), G(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      O(f => {
        f.h = () => G(-50.7, 0.8, 106).rotate(0, 180 - pa);
        R(J(
          u(I(28, 1), G(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          u(I(), G(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          u(I(), G(0, 0, 7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        R(u(I(28, 1), U(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        R(u(I(5), G(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      O(f => {
        f.h = () => G(-50.7, 0.8, 91).rotate(0, 270 + pa);
        R(J(
          u(I(28, 1), G(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3)),
          u(I(), G(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)),
          u(I(), G(0, 0, -7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),
        ));
        R(u(I(28, 1), U(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        R(u(I(5), G(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)));
      });
      R(I(), G(-58, 1, 106).scale(2, 0.65, 2), S(0.7, 0.7, 0.7, 0.2));
      R(I(), G(-50.7, 1, 99).scale(2, 0.65, 1), S(0.7, 0.7, 0.7, 0.2));
      R(I(), G(-42, 0.4, 91).scale(5, 1, 2.5), S(0.7, 0.7, 0.7, 0.3));
      R(I(), G(-34.2, 0.4, 91).scale(3, 1, 3), S(0.7, 0.7, 0.7, 0.3));
      yb(G(-34, 2.7, 96).rotate(-12, 0));
      R(I(5), G(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), S(0.2, 0.5, 0.5, 0.6));
      [S(0.1, 0.55, 0.45, 0.2), S(0.2, 0.5, 0.5, 0.3), S(0.3, 0.45, 0.55, 0.4)].map((f, q) =>
        O(r => {
          r.h = () =>
            G(0, (1 - h[13].i) * (1 - h[14].i) * (q ? 0 : 3) + Ta(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4);
          R(I(), G(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), f);
          2 === q && R(I(), G(-29.1, 0.4, 91).scale(2.1, 1, 3), S(0.7, 0.7, 0.7, 0.3));
          1 === q && R(I(), G(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), S(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => R(n, G(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), S(1, 1, 0.8)));
      Oa(
        3,
        f =>
          R(
            v(24.7 - 0.7 * (1 & f)),
            G(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? S(0.5, 0.5, 0.5, 0.3) : S(0.35, 0.35, 0.35, 0.5),
          ),
      );
      R(J(
        u(I(6, 0, 0, 0.3), G(0, -0.92, 95).scale(14, 2, 14), S(0.8, 0.8, 0.8, 0.2)),
        u(I(5), G(0, 0, 95).scale3d(6), S(0.3, 0.3, 0.3, 0.5)),
      ));
      yb(G(0, 1.7, 82).rotate(0, 180));
      R(I(5), G(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(0.5, 0.3, 0.3, 0.4));
      R(I(6), G(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(0.5, 0.6, 0.7, 0.3));
      R(I(), G(0, 16, 129).scale(1.5, 1, 2), S(0.5, 0.6, 0.7, 0.3));
      R(I(7), G(0, 16.2, 133).scale(5, 1, 5), S(0.4, 0.5, 0.6, 0.4));
      R(J(
        rb(
          u(I(), G(0, 16, 110.5).scale(12, 1, 3), S(0.5, 0.3, 0.3, 0.4)),
          u(I(), G(0, 16, 111).scale(3, 1, 3.8), S(0.5, 0.3, 0.3, 0.4)),
        ),
        u(I(5), G(0, 16, 103.5).scale(5.5, 5, 5.5), S(0.5, 0.3, 0.3, 0.4)),
      ));
      O(f => {
        f.h = () => {
          const q = Math.sin(a);
          return G(-2 * q).rotate(25 * q);
        };
        R(I(3), G(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), S(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(q => {
          R(I(6), G(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), S(0.7, 0.7, 0.7, 0.4));
          R(I(), G(0, 6.2, q + 95).scale(0.5, 11, 0.5), S(0.5, 0.3, 0.3, 0.4));
        });
      });
      O(f => {
        f.h = () => {
          const q = Ta(Ta((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          return G(0, 16 * q, 8.5 * Ra(2 * q - 1) + 95);
        };
        R(I(5), U(5, 1.1, 5), S(0.5, 0.3, 0.3, 0.4));
        R(I(5), U(5.5, 0.9, 5.5), S(0.25, 0.25, 0.25, 0.4));
        yb(G(0, 1.5, -1).rotate(0, 180));
      });
      Ab(G(0, 3, 95), ...gb(9).map(({ x: f, z: q }) => [9 * f, 9 * q, 4]));
      Ab(G(0, 19, 134), [0, 0, 3.5]);
    });
    O(() => {
      [0, 180].map(t => R(n, Bb(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), S(1, 1, 0.8)));
      R(ib(20), G(0, 1).scale(0.5, 0.5, 0.5), S(1, 0.3, 0.4));
      const k = u(J(I(15, 1), u(I(), G(0, 0, 1).scale(2, 2, 0.5))), Bb(-90, 0).scale(0.1, 0.05, 0.1), S(0.3, 0.3, 0.3));
      [-1, 1].map(t => R(k, G(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      R(I(), G(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), S(0.3, 0.3, 0.3));
      R(ib(20), U(0.7, 0.8, 0.55), S(1, 0.3, 0.4));
    });
    [-1, 1].map(k =>
      O(() => {
        R(I(10, 1), G(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), S(1, 0.3, 0.4));
      })
    );
    O(() => {
      R(I(6, 1), U(0.13, 1.4, 0.13), S(0.3, 0.3, 0.5, 0.1));
      R(I(10), G(0, 1).scale(0.21, 0.3, 0.21), S(1, 0.5, 0.2));
      R(I(3), G(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), S(0.2, 0.2, 0.2, 0.1));
    }, 0);
    O(() => {
      R(I(6).slice(0, -1), U(0.77, 1, 0.77), S(1, 0.3, 0.5));
    }, 0);
    O(() => {
      R(
        ib(30, 24, (k, t, v) => {
          const w = t / 24, y = k * Math.PI * 2 / 30, C = w ** 0.6 * Math.PI / 2;
          k = w * w * Math.sin(k * Math.PI * 14 / 30) / 4;
          return 23 === t
            ? { x: v.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(y) * Math.sin(C),
              y: Math.cos(w * Math.PI) - w - k,
              z: Math.sin(y) * Math.sin(C) + Math.sin(k * Math.PI * 2) / 4,
            };
        }),
        U(0.7, 0.7, 0.7),
        S(1, 1, 1),
      );
      [-1, 1].map(k => R(ib(12), G(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
