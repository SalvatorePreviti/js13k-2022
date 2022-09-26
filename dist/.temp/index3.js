let da,
  ea,
  ha,
  ia,
  ja,
  la,
  ma = 0,
  na = 0,
  a = 0,
  pa = 0,
  qa = 0,
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
  Da = 0,
  Ea = 1,
  d = 0.066;
const e = [],
  h = [],
  Fa = [],
  Ja = [],
  Ka = { x: 0, y: 0, z: 0 },
  m = (c, b) => Array.from(Array(c), (g, k) => b(k)),
  La = Math.PI / 180,
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
var Pa = 0, Qa = 180;
const Sa = { x: 0, y: 0, z: 0 },
  q = (c, b = 0, g = 1) => c < b ? b : g < c ? g : c,
  Ta = (c, b) => (0 > c ? -c : c) > b ? c : 0,
  v = (c, b, g) => (0 < g ? 1 > g ? c + (b - c) * g : b : c) || 0,
  Ua = (c, b) => (c = q(c), v(c, 1 - c, b)),
  Va = c => Math.atan2(Math.sin(c *= La), Math.cos(c)) / La,
  Wa = (c, b, g) => c + (2 * (b = (b - c) % 360) % 360 - b) * q(g) || 0,
  Xa = ({ x: c, y: b, z: g }) => Math.hypot(c - Ka.x, b - Ka.y, g - Ka.z),
  Ya = ({ x: c, y: b, z: g }, k) => c * k.x + b * k.y + g * k.z,
  Za = c => {
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
    m(c, g => {
      const k = Math.cos(2 * Math.PI * g / c);
      return { x: Math.sin(2 * Math.PI * g / c), y: 0, z: 0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - b : k + b };
    }),
  hb = (c, b, g) =>
    c.map((k, p, { length: l }) => eb([k, b[l - p - 1], b[l - (p + 1) % l - 1], c[(p + 1) % l]], c.A, g)),
  J = (
    c,
    b,
    g = 0,
    k,
  ) => (c = c ? gb(c, k) : Ma,
    k = fb(c, H(0, 1).scale3d(0 < g ? g : 1)),
    c = fb(c, H(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
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
        const t = eb([], 0, 1);
        k.push(t);
        t.push(g(p, l, t));
        l && t.push(g((p + 1) % c, l, t));
        b - 1 > l && t.push(g((p + 1) % c, l + 1 % b, t));
        t.push(g(p, l + 1 % b, t));
      }
    }
    return k;
  },
  jb = (c, b) => {
    var g, k, p, l = b.C;
    for (var t = 0; l.length > t; ++t) {
      if (-0.00008 > (g = Ya(c, l[t]) - c.w) ? p = b : 8e-5 < g && (k = b), p && k) {
        k = [];
        p = [];
        l = b.C;
        t = b.B;
        let w = l.at(-1), x = Ya(c, w) - c.w;
        for (const y of l) {
          g = Ya(c, y) - c.w,
            8e-5 > x && p.push(w),
            -0.00008 < x && k.push(w),
            (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g)
            && (x /= g - x,
              w = { x: w.x + (w.x - y.x) * x, y: w.y + (w.y - y.y) * x, z: w.z + (w.z - y.z) * x },
              k.push(w),
              p.push(w)),
            w = y,
            x = g;
        }
        return {
          o: 2 < k.length && { C: eb(k, l.A, l.D), B: t, u: b },
          m: 2 < p.length && { C: eb(p, l.A, l.D), B: t, u: b },
        };
      }
    }
    return { o: k, m: p };
  },
  kb = (c, b, g = Za(b.C)) => {
    let k, p, l;
    return c
      ? ({ o: k, m: p } = jb(c, b), k || p || c.s.push(b), k && (c.o = kb(c.o, k, g)), p && (c.m = kb(c.m, p, g)))
      : ({ x: k, y: p, z: g, w: l } = g, c = { x: k, y: p, z: g, w: l, s: [b], o: 0, m: 0 }),
      c;
  },
  nb = (c, b, g) => {
    const k = [],
      p = (l, t) => {
        let { o: w, m: x } = jb(l, t);
        w || x || (0 < g * Ya(l, b) ? w = t : x = t);
        w && (l.o ? p(l.o, w) : k.push(w));
        x && l.m && p(l.m, x);
      };
    for (const l of b.s) {
      p(c, l);
    }
    return k;
  },
  ob = (c, b) => c && (b(c), ob(c.o, b), ob(c.m, b)),
  pb = c => c.length ? c.reduce((b, g) => kb(b, { C: g, B: 0, u: 0 }), 0) : c,
  qb = c => (ob(c, b => {
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
  tb = (...c) =>
    c.reduce((b, g) => {
      const k = [];
      if (b = pb(b), g) {
        g = pb(g);
        ob(b, p => p.s = nb(g, p, 1));
        ob(g, p => k.push([p, nb(b, p, -1)]));
        for (let [p, l] of k) {
          for (const t of l) {
            kb(b, t, p);
          }
        }
      }
      return b;
    }),
  L = (...c) => {
    let b;
    const g = l => {
        let t;
        return l.u && ((t = k.get(l.u)) ? (p.delete(t), l = g(l.u)) : k.set(l.u, l)), l;
      },
      k = new Map(),
      p = new Map();
    return [c, ...b] = [...c],
      c = qb(tb(qb(pb(c)), ...b)),
      ob(c, l => {
        for (const t of l.s) {
          p.set(g(t), t.B);
        }
      }),
      Array.from(p, ([{ C: l }, t]) => {
        const w = l.map(({ x, y, z: D }) => ({ x, y, z: D }));
        return eb(t ? w.reverse() : w, l.A, l.D);
      });
  },
  ub = () => {
    xa = Ua(h[12].g, h[13].g);
    sa = v(v(sa, 0, 1 - Math.exp(-1 * d)), Va(sa + 60 * d), h[5].g - h[6].i);
    qa = v(v(qa, 0, 1 - Math.exp(-5 * d)), Va(qa + 56 * d), xa);
    ra = v(v(ra, 0, 1 - Math.exp(-4 * d)), Va(ra + 48 * d), xa);
    var c = 2 * h[9].i - 1;
    wa = v(wa, h[9].i, 1 - Math.exp(-(0.2 + 0.3 * (0 > c ? -c : c)) * d));
    ua = v(ua, ta ? v(ua, -9, 1 - Math.exp(-1.5 * d)) : q(a / 3), 1 - Math.exp(-1 * d));
    Ea && a > Ea && (Ea = 0, h4.innerHTML = "");
    h[0].l && 0.8 < h[0].g && (13 > ma
      ? (1 / 0 > Ea && (Ea = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0)
      : ta
        || (1 / 0 > Ea && (Ea = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ta = 1));
    for (const b of e) {
      b.h && (b.j = b.h());
    }
    for (const b of h) {
      b.h();
    }
    for (const b of Fa) {
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
      ][ma = Fa.reduce((c, { l: b }) => c + b, 0)] + " / XIII";
  },
  wb = () => {
    localStorage.I = JSON.stringify([h.map(({ l: c }) => c), Fa.map(({ l: c }) => c), pa, a, wa]);
  },
  R = (c, b = 1) => {
    const g = ha;
    b = { j: O, H: e.length, G: b, s: [] };
    return e.push(ha = b), c(b), ha = g, b;
  },
  T = (c, b = O, g) => ha.s.push(...G(c, b, g)),
  xb = c => {
    const b = ha,
      g = h.length,
      k = {
        l: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const p = k.l, l = k.g, t = k.i, w = b.j.multiply(c);
          k.J = w;
          3 > Xa(w.transformPoint()) && Ja[5] && (0.3 > l || 0.7 < l)
            && (k.l = p ? 0 : 1, g && 1 / 0 > Ea && (Ea = a + 1, h4.innerHTML = "* click *"), pa = g, wb());
          k.g = v(l, p, 1 - Math.exp(-4 * d));
          k.i = v(t, p, 1 - Math.exp(-1 * d));
          k.j = w.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    h.push(k);
    T(J(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    T(J(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    T(J(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), X(0.5, 0.5, 0.4));
  },
  zb = (c, ...b) => {
    let g = -1, k = 0, p = 0, l = 0, t = 0, w = 0, x = 1, y = 3;
    const D = {
        l: 0,
        h() {
          if (!D.l) {
            let aa, Ga, va, fa, z, E, C, F = 1, I = 1 / 0;
            for (const N of f) {
              var { x: S, z: P, w: U } = N;
              P = (S = Math.hypot(r - S, u - P)) - U;
              C ||= S < U;
              0 < P && I > P && (I = P, n = N);
              F = yb(F, S / U);
            }
            C
              || ({ x: aa, z: Ga, w: va } = n,
                fa = r - aa,
                z = u - Ga,
                E = Math.hypot(fa, z),
                K = Math.atan2(-z, fa),
                x && (p = (Math.random() - 0.5) * Math.PI / 2, y = q(y / (1 + Math.random()))),
                K += p,
                g = -Math.cos(K),
                k = Math.sin(K),
                0.1 < E && (E = yb(E, va) / (E || 1), r = fa * E + aa, u = z * E + Ga));
            x = C;
            y = v(y, 6 * (1 - F) + 3, 1 - Math.exp(-(F + 3) * d));
            K = r = v(r, r + g, 1 - Math.exp(-y * d));
            A = v(A, K, 1 - Math.exp(-y * d));
            K = u = v(u, u + k, 1 - Math.exp(-y * d));
            M = v(M, K, 1 - Math.exp(-y * d));
            l = Wa(l, Math.atan2(A - t, M - w) / La - 180, 1 - Math.exp(-3 * d));
            t = A;
            w = M;
            var K = (D.j = Q.j.multiply(c.translate(A, 0, M).rotateSelf(0, l, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.6 > Xa(K)
              && (D.l = 1,
                K = [
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
                  > Ea && (Ea = a + (ma && 12 > ma ? 5 : 7), h4.innerHTML = K),
                vb(),
                wb());
          }
          D.l
            && (K = B % 4 - 2,
              D.j = e[2].j.translate(
                B % 4 * 1.2 - 1.7 + Math.sin(a + B) / 7,
                -2,
                1.7 * (B / 4 | 0) - 5.5 + (0 > K ? -K : K) + Math.cos(a / 1.5 + B) / 6,
              ));
        },
      },
      Q = ha,
      B = Fa.length,
      f = b.map(([S, P, U]) => ({ x: S, z: P, w: U }));
    let n = f[0], { x: r, z: u } = n, A = r, M = u;
    Fa.push(D);
  },
  Bb = (c, b, g, k) => {
    let p = 0, l = 0, t = 0, w = 1 / 0, x = -1 / 0, y = 1 / 0, D = -1 / 0, Q = 1 / 0, B = -1 / 0;
    const f = 1.1 * (g - b),
      n = (new DOMMatrix(db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
    return b = m(
      8,
      r => (r = n.transformPoint({ x: 4 & r ? 1 : -1, y: 2 & r ? 1 : -1, z: 1 & r ? 1 : -1 }),
        p -= r.x = (f * r.x | 0) / f / r.w,
        l -= r.y = (f * r.y | 0) / f / r.w,
        t -= r.z = (f * r.z | 0) / f / r.w,
        r),
    ),
      g = O.rotate(298, 139).translateSelf(p / 8, l / 8, t / 8),
      fb(b, g).map(({ x: r, y: u, z: A }) => {
        w = yb(w, r);
        x = Ab(x, r);
        y = yb(y, u);
        D = Ab(D, u);
        Q = yb(Q, A);
        B = Ab(B, A);
      }),
      Q *= 0 > Q ? k : 1 / k,
      B *= 0 < B ? k : 1 / k,
      O.scale(2 / (x - w), 2 / (D - y), 2 / (Q - B)).translateSelf((x + w) / -2, (D + y) / -2, (Q + B) / 2)
        .multiplySelf(g);
  },
  Eb = () => {
    let c, b, g, k, p, l, t, w, x, y, D, Q, B = !0;
    const f = () => {
        da || !B ? Cb.disconnect() : Cb.connect(Db.destination);
        b4.innerHTML = "Music: " + B;
      },
      n = (r = !1) => {
        if (da !== r) {
          da = r;
          try {
            r
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : Cb.start();
          } catch {
          }
          ia = 0;
          document.body.className = r ? "l m" : "l";
          f();
          vb();
        }
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.I = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      n();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      n();
      ia = 1;
    };
    b4.onclick = () => {
      B = !B;
      f();
    };
    b5.onclick = () => n(!0);
    onclick = r => {
      Q = 1;
      da || (r.target === hC && (Ja[5] = !0), ia && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: r, target: u, type: A, repeat: M }) => {
      M || ((M = !!A[5] && u === document.body) && ("Escape" === r || "Enter" === r && da)
        ? da && !Q || n(!da)
        : 5
            === (A = {
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
            }[r])
        ? M && (Ja[A] = 1)
        : Ja[A] = M);
    };
    onmousemove = ({ movementX: r, movementY: u }) => {
      ia && (r || u) && (Qa += 0.1 * r, Pa += 0.1 * u);
    };
    hC.ontouchstart = r => {
      if (!da) {
        for (let { pageX: u, pageY: A, identifier: M } of r.changedTouches) {
          ia && u > hC.clientWidth / 2
            ? void 0 === w && (x = 0, l = u, t = A, w = M, y = Qa, D = Pa)
            : void 0 === k && (p = 0, b = u, g = A, k = M);
        }
        c = na;
      }
    };
    hC.ontouchmove = r => {
      if (!da) {
        for (let { pageX: U, pageY: K, identifier: aa } of r.changedTouches) {
          var u, A, M, S, P;
          w === aa && (Qa = y + (U - l) / 2.3, Pa = D + (K - t) / 2.3, x = 1);
          k === aa
            && (aa = (b - U) / 20,
              u = (g - K) / 20,
              A = 0 > aa ? -aa : aa,
              M = 0 > u ? -u : u,
              S = Math.atan2(u, aa),
              P = q(Math.hypot(u, aa) - 0.5),
              ya = 0.2 < A ? Math.cos(S) * P : 0,
              za = 0.2 < M ? Math.sin(S) * P : 0,
              (ya || za) && (p = 1),
              2 < A && (b = U + 20 * Math.sign(aa)),
              2 < M && (g = K + 20 * Math.sign(u)));
        }
      }
    };
    hC.ontouchend = r => {
      let u;
      document.activeElement === document.body && r.preventDefault();
      for (const A of r.changedTouches) {
        A.identifier === w
          ? (w = void 0, x || (u = 1), x = 0)
          : A.identifier === k
          ? (k = void 0, za = ya = 0, p || (u = 1), p = 0)
          : u = 1;
      }
      u && r.target === hC && c && 0.02 < (r = na - c) && 0.7 > r && (Ja[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Ja.length = ya = za = 0;
      k = w = void 0;
      document.hidden && n(!0);
    })();
    n(!0);
  },
  Fb = () => {
    let c, b, g, k, p, l, t, w, x, y, D, Q, B, f, n, r, u, A, M = 1, S = 2, P = 2;
    const U = () => S ? h[pa].u.j : g && 1 === e[g].G && e[g].j || O,
      K = (z, E, C, F) => {
        var I;
        (I = M) || (I = E - z, I = (q((0 > I ? -I : I) ** .9 - C) + 1 / 7) * (1 - Math.exp(-(1.5 * F) * d)));
        return v(z, E, I);
      },
      aa = () => {
        let z = 0, E = 0, C = 0, F = 0;
        k = 0;
        va.fill(0);
        for (let N = 0; 31 > N; ++N) {
          let Z = 0;
          const ba = 512 * N;
          for (let ka = 0; 128 > ka; ka++) {
            var I = ba + 4 * ka;
            let ca = (fa[I] + fa[1 + I]) / 255;
            I = fa[2 + I];
            14 < ka && 114 > ka && (Z += ca);
            I && ca && (ca = va[I] + 1, va[I] = ca, z > ca || (z = ca, E = I));
          }
          3 > Z && 5 < N && (C += N / 32);
          3 < Z && (7 < N && (F += N / 15), k = 1);
        }
        E && (k = 1);
        c = E || b;
        b = E;
        P = v(P, k ? 6.5 : -20 > Sa.y ? 11 : 8, 1 - Math.exp(-4 * d));
        Sa.y += F / 41 - (k || P) * C / 41 * P * d;
      },
      Ga = () => {
        y = x = 0;
        for (let F = 32; 128 > F; F += 2) {
          let I = 0, N = 0;
          var z = 0;
          let Z = 0;
          var E = 512 * F;
          for (let ba = 1 & F; 128 > ba; ba += 2) {
            const ka = E + 4 * ba;
            let ca = E + 4 * (127 - ba);
            const oa = fa[ka] / 255, $a = fa[1 + ca] / 255;
            var C = ba / 63.5 - 1;
            C = 1 - (0 > C ? -C : C);
            10 < ba && 118 > ba
              && (I = Ab(Ab(oa * C, oa * fa[ca] / 255), I), N = Ab(Ab($a * C, $a * fa[1 + ka] / 255), N));
            (54 > ba || 74 < ba) && 1e-3 < (ca = (1 - C) * Ab(oa, $a) / 3)
              && (64 > ba && ca > z ? z = ca : 64 < ba && ca > Z && (Z = ca));
          }
          E = Z - z;
          (0 > E ? -E : E) > (0 > x ? -x : x) && (x = Z - z);
          z = N - I;
          (0 > z ? -z : z) > (0 > y ? -y : y) && (y = N - I);
        }
      },
      va = new Int32Array(256),
      fa = new Uint8Array(65536);
    la = () => {
      var z = U(),
        { x: E, y: C, z: F } = 1 < S
          ? h[pa].J.transformPoint({ x: 0, y: pa || 0.9 < ua ? 15 : 1, z: -2.4 })
          : ((E = (F = z).inverse()).m41 = E.m42 = E.m43 = 0,
            C = E.transformPoint({ x, z: y, w: 0 }),
            Sa.x += C.x,
            Sa.z += C.z,
            F.transformPoint(Sa));
      let I = E - Ka.x, N = F - Ka.z;
      if (S = S && (k && c ? 0 : 1), Ka.x = E, Ka.y = C, Ka.z = F, S || c !== g) {
        g = c;
        const Z = (z = U()).inverse().transformPoint(Ka);
        Sa.x = Z.x;
        Sa.y = Z.y;
        Sa.z = Z.z;
      }
      c && (D = I / d, Q = N / d);
      w = v(w, xa * (27 < c && 32 > c), 1 - Math.exp(-2 * d));
      C < (-25 > E || 109 > F ? -25 : -9) && (D = Q = B = 0, S = 2);
      1 === c && (h[9].l = -15 > E && 0 > F ? 1 : 0);
      (z = S) || (z = f - C, z = 8 * (0 > z ? -z : z));
      f = v(v(f, C, 1 - Math.exp(-2 * d)), C, z);
      r = K(r, f, 2, 1);
      n = K(n, E, 0.5, 1);
      u = K(u, F, 0.5, 1);
      ia
        ? (z = S + (1 - Math.exp(-18 * d)), Aa = v(Aa, E, z), Ba = v(Ba, f + 1.5, z), Da = v(Da, F, z), Qa = Va(Qa))
        : (Ba = K(Ba, Ab(r + q((-60 - F) / 8, 0, 20) + 13 + 9 * w, 6), 4, 2),
          Da = K(Da, u + -18 + 5 * w, 1, 2 + w),
          Aa = K(Aa, n, 1, 2 + w),
          z = u - Da,
          I = yb(4, -(0 > z ? -z : z)),
          N = n - Aa,
          Qa = Wa(Qa, 90 - Va(Math.atan2(I, N) / La), M + (1 - Math.exp(-6 * d))),
          Pa = Wa(Pa, 90 - Math.atan2(Math.hypot(I, N), Ba - r) / La, M + (1 - Math.exp(-6 * d))));
      Pa = q(Pa, -87, 87);
      M = 0;
      e[37].j = H(E, f, F).rotateSelf(0, l);
      for (z = 0; 2 > z; ++z) {
        e[38 + z].j = e[37].j.translate(0, t * q(0.45 * Math.sin(9.1 * a + Math.PI * (z - 1) - Math.PI / 2)))
          .rotateSelf(t * Math.sin(9.1 * a + Math.PI * (z - 1)) * 0.25 / La, 0);
      }
    };
    ja = () => {
      var z = za + (Ja[1] ? 1 : 0) - (Ja[3] ? 1 : 0), E = ya + (Ja[0] ? 1 : 0) - (Ja[2] ? 1 : 0);
      if (F = navigator.getGamepads()[0]) {
        const I = F.buttons, N = F.axes;
        F = (C = Z => I[Z]?.pressed || 0 < I[Z]?.value ? 1 : 0)(3) || C(2) || C(1) || C(0);
        z += C(12) - C(13) - Ta(N[1], 0.2);
        E += C(14) - C(15) - Ta(N[0], 0.2);
        ia && (Pa += d * Ta(N[3], 0.3) * 80, Qa += d * Ta(N[2], 0.3) * 80);
        F && !A && (Ja[5] = 1);
        A = F;
      }
      var C = Math.atan2(z, E), F = Ta(q(Math.hypot(z, E)), 0.05);
      z =
        (Y.fa7(),
          Y.r9r(0, 0, 128, 128, 6408, 5121, fa),
          Y.iay(36008, [36064, 36096]),
          Y.iay(36009, [36064, 36096]),
          NO_INLINE(Ga)(),
          NO_INLINE(aa)(),
          q(1 - 5 * Ab(0 > x ? -x : x, 0 > y ? -y : y)));
      E = ia ? Qa * La : Math.PI;
      t = v(t, F, 1 - Math.exp(-10 * d));
      F && (p = 90 - C / La);
      l = Wa(l, p, 8 * d);
      B = v(B, k * z * q(2 * F) * 7, 1 - Math.exp(-(k ? 0.1 < z ? 10 : 5 + 2 * F : 1) * d));
      D = v(D, 0, 1 - Math.exp(-(k ? 8 : 4) * d));
      x += d * ((c ? 0 : z * D) - Math.cos(C + E) * F * B);
      Q = v(Q, 0, 1 - Math.exp(-(k ? 8 : 4) * d));
      y += d * ((c ? 0 : z * Q) - Math.sin(C + E) * F * B);
      NO_INLINE(la)();
      Ja[5] = 0;
    };
  },
  Gb = (c, b = 35633) => (b = Y.c6x(b), Y.s3c(b, c), Y.c6a(b), b),
  Lb = (c, b) => {
    const g = {}, k = Y.c1h();
    return Y.abz(k, c), Y.abz(k, Gb(b, 35632)), Y.l8l(k), p => p ? g[p] || (g[p] = Y.gan(k, p)) : Y.u7y(k);
  },
  Nb = (c, b, g, k) => {
    if (da) {
      g = O.rotate(0, 40 * Math.sin(na) - 70);
      for (var p of [37, 38, 39]) {
        cb(g, Mb, p - 1);
      }
      Y.uae(c, !1, Mb);
      Y.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      for (p = 0; e.length > p; ++p) {
        e[p].G && cb(e[p].j, Mb, p - 1);
      }
      Y.uae(c, !1, Mb);
      Y.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        cb(Fa[b].j, Mb, b);
      }
      for (b = 0; h.length > b; ++b) {
        cb(h[b].j, Mb, b + 13), k || (Mb[16 * (b + 13) + 15] = 1 - h[b].g);
      }
      Y.uae(c, !1, Mb);
      Y.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13);
      Y.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
  },
  Ob = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Pb = c => Math.sin(c * Math.PI * 2),
  Qb = c => 0.5 > c % 1 ? 1 : -1,
  Rb = c => c % 1 * 2 - 1,
  Sb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c,
  Xb = c => {
    let b = 0;
    const g = () => {
        const l = Db.createBuffer(2, 5362944, 44100);
        for (let t = 0; 2 > t; t++) {
          for (let w = t, x = l.getChannelData(t); 10725888 > w; w += 2) {
            x[w >> 1] = p[w] / 65536;
          }
        }
        Cb.buffer = l;
        Cb.loop = !0;
        Ob(c);
      },
      k = () => {
        let l = 0;
        const t = C => {
            let F, I, N, Z, ba = 0, ka = 0;
            const ca = [],
              oa = new Int32Array(768 * C),
              $a = 2 ** (S - 9) / C,
              Tb = Math.PI * 2 ** (Ga - 8) / C,
              rb = fa * C & -2;
            for (let lb = 0; 11 >= lb; ++lb) {
              for (
                let mb = 0,
                  Hb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + lb],
                  Ib = (32 * lb + mb) * C;
                32 > mb;
                ++mb
              ) {
                for (let Ca = 0; 4 > Ca; ++Ca) {
                  if (I = 0, Hb && (I = w[Hb - 1].charCodeAt(mb + 32 * Ca) - 40, I += 0 < I ? 106 : 0), I) {
                    var Ra;
                    if (!(Ra = ca[I])) {
                      Ra = I;
                      let V = void 0, W = void 0;
                      var Jb = I;
                      let ab = 0, Ub = 0;
                      const Vb = 2 > b ? Rb : Pb, Wb = 2 > b ? 1 > b ? Qb : Sb : Pb, Kb = new Int32Array(r + u + E);
                      for (let Ha = 0, sb = 0; r + u + E > Ha; ++Ha, ++sb) {
                        let Ia = 1;
                        r > Ha ? Ia = Ha / r : r + u > Ha || (Ia = (1 - (Ia = (Ha - r - u) / E)) * 3 ** (M / -16 * Ia));
                        0 > sb
                          || (W = 396e-5 * 2 ** ((Jb + y - 256) / 12),
                            V = 396e-5 * 2 ** ((Jb + B - 256) / 12) * (b ? 1 : 1.0072),
                            sb -= 4 * C);
                        Kb[Ha] = 80
                          * (Vb(ab += W * Ia ** (D / 32)) * x + Wb(Ub += V * Ia ** (f / 32)) * Q
                            + (n ? (2 * Math.random() - 1) * n : 0))
                          * Ia;
                      }
                      Ra = ca[Ra] = Kb;
                    }
                    for (let V = 0, W = 2 * Ib; Ra.length > V; ++V, W += 2) {
                      oa[W] += Ra[V];
                    }
                  }
                }
                for (let Ca, V, W, ab = 0; C > ab; ++ab) {
                  W = 2 * (Ib + ab),
                    Ca = 0,
                    ((V = oa[W]) || Z)
                    && (N = 308e-5 * P,
                      1 !== b && 4 !== b || (N *= Math.sin($a * W * Math.PI * 2) * z / 512 + 0.5),
                      N = 1.5 * Math.sin(N),
                      ba += N * ka,
                      F = (1 - U / 255) * (V - ka) - ba,
                      ka += N * F,
                      V = 4 === b ? ka : 3 === b ? F : ba,
                      b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5),
                      V *= K / 32,
                      Z = 1e-5 < V * V,
                      F = Math.sin(Tb * W) * aa / 512 + 0.5,
                      Ca = V * (1 - F),
                      V *= F),
                    W < rb || (Ca += oa[1 + W - rb] * va
                      / 255,
                      V += oa[W - rb] * va / 255),
                    p[l + W] += oa[W] = Ca,
                    ++W,
                    p[l + W] += oa[W] = V;
                }
              }
            }
            l += 768 * C;
          },
          w = Na[b],
          [x, y, D, Q, B, f, n, r, u, A, M, S, P, U, K, aa, Ga, va, fa, z] = Oa[b],
          E = 4 * A ** 2;
        t(5513);
        t(4562);
        t(3891);
        Ob(5 > ++b ? k : g);
      },
      p = new Int32Array(10725888);
    Ob(k);
  },
  Db = new AudioContext(),
  O = new DOMMatrix(),
  bb = new Float32Array(16),
  Mb = new Float32Array(624),
  Yb = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  yb = NO_INLINE((c, b) => c < b ? c : b),
  Ab = NO_INLINE((c, b) => b < c ? c : b),
  H = NO_INLINE((c, b, g) => O.translate(c, b, g)),
  X = NO_INLINE((c, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c),
  Cb = Db.createBufferSource(),
  Y = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Y) {
  Y[c[0] + [...c].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Y[c];
}
Ob(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const k = n => {
            let r;
            Y.f1s();
            requestAnimationFrame(k);
            u = (n - (ea || n)) / 1e3;
            da ? (d = 0, Ja[5] = 0) : d = yb(0.066, u);
            a += d;
            na += u;
            ea = n;
            0 < d && (ub(), ja());
            0 < d
              && ({ x: u, y: n, z: r } = Ka,
                x(),
                Y.b6o(36160, B),
                Y.v5y(0, 0, 128, 128),
                Y.c4s(16640),
                Y.cbf(!0, !1, !0, !1),
                Y.uae(x("b"), !1, cb(O.rotate(0, 180).invertSelf().translateSelf(-u, -n, 0.3 - r))),
                Nb(x("c"), 0, 41, 0),
                Y.c4s(256),
                Y.cbf(!1, !0, !0, !1),
                Y.uae(x("b"), !1, cb(H(-u, -n, -r - 0.3))),
                Nb(x("c"), 0, 41, 0),
                Y.f1s());
            var u = da
              ? O.rotate(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : O.rotate(-Pa, -Qa).invertSelf().translateSelf(-Aa, -Ba, -Da);
            t();
            Y.b6o(36160, Q);
            Y.v5y(0, 0, 2048, 2048);
            D[0](Bb(u, 0.3, 55, 10));
            D[1](Bb(u, 55, 186, 11));
            y();
            Y.b6o(36160, null);
            Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
            Y.cbf(!0, !0, !0, !0);
            Y.c4s(16640);
            D[0]();
            D[1]();
            Y.uae(y("a"), !1, db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
            Y.uae(y("b"), !1, cb(u));
            Y.ubu(y("k"), Aa, Ba, Da);
            Nb(y("c"), !ia, 42, 0);
            w();
            Y.ubu(w("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, na);
            Y.ubu(w("k"), Aa, Ba, Da);
            Y.uae(w("b"), !1, cb(u.inverse()));
            Y.d97(4, 3, 5123, 0);
            Y.b6o(36160, B);
            Y.f1s();
          },
          p = g;
        let l = Gb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const t = Lb(
            Gb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          w = Lb(
            Gb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          x = Lb(
            l,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          y = Lb(
            l,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          D = m(2, n => {
            const r = new Float32Array(16), u = Y.c25();
            return Y.a4v(33984 + n),
              Y.b9j(3553, u),
              Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Y.t2z(3553, 10241, 9729),
              Y.t2z(3553, 10240, 9729),
              Y.t2z(3553, 34893, 515),
              Y.t2z(3553, 34892, 34894),
              Y.t2z(3553, 10243, 33071),
              Y.t2z(3553, 10242, 33071),
              A => {
                A
                  ? (cb(A, r),
                    Y.uae(t("b"), !1, r),
                    Y.fas(36160, 36096, 3553, u, 0),
                    Y.c4s(256),
                    Nb(t("c"), !ia, 42, 1))
                  : Y.uae(y(n ? "j" : "i"), !1, r);
              };
          }),
          Q = Y.c5w(),
          B = (l = Y.c3z(), Y.c5w()),
          f = Y.c25();
        x();
        Y.uae(x("a"), !1, db(1.4, 0.59, 1e-4, 1));
        y();
        Y.ubh(y("q"), 2);
        Y.ubh(y("h"), 1);
        Y.ubh(y("g"), 0);
        w();
        Y.ubh(w("q"), 2);
        Y.b6o(36160, Q);
        Y.d45([0]);
        Y.r9l(0);
        Y.b6o(36160, B);
        Y.bb1(36161, l);
        Y.r4v(36161, 33189, 128, 128);
        Y.f8w(36160, 36096, 36161, l);
        Y.a4v(33986);
        Y.b9j(3553, f);
        Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Y.fas(36160, 36064, 3553, f, 0);
        Y.b9j(3553, Y.c25());
        Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, p);
        Y.gbn(3553);
        Y.t2z(3553, 10241, 9987);
        Y.t2z(3553, 10240, 9729);
        Y.e8z(2929);
        Y.e8z(2884);
        Y.c70(1);
        Y.c7a(1029);
        Y.d4n(515);
        Y.c5t(0, 0, 0, 1);
        ub();
        NO_INLINE(Fb)();
        NO_INLINE(Eb)();
        requestAnimationFrame(k);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = Yb;
  NO_INLINE(Xb)(() => {
    Ob(() => {
      let l, t = 0;
      const w = [],
        x = [],
        y = [],
        D = [],
        Q = u => {
          let { x: A, y: M, z: S } = l[u], P = (r[0] = A, r[1] = M, r[2] = S, u = "" + (l.D ? n : B), f.get(u));
          return void 0 !== P
            ? (A = 3 * P, D[A] = (D[A++] + B[5]) / 2, D[A] = (D[A++] + B[6]) / 2, D[A] = (D[A] + B[7]) / 2)
            : (f.set(u, P = f.size), x.push(A, M, S, r[3]), y.push(B[4]), D.push(B[5], B[6], B[7])),
            P;
        },
        B = new Int32Array(8),
        f = new Map(),
        n = new Int32Array(B.buffer, 0, 5),
        r = new Float32Array(B.buffer);
      for (const u of e) {
        for (l of (r[3] = 40 === u.H ? -14 : u.G && u.H, u.s)) {
          const { x: A, y: M, z: S } = Za(l);
          B[4] = 0 | l.A;
          B[5] = 32767 * A;
          B[6] = 32767 * M;
          B[7] = 32767 * S;
          for (let P = 2, U = Q(0), K = Q(1); l.length > P; ++P) {
            w.push(U, K, K = Q(P));
          }
        }
        u.s = null;
        u.v = t;
        u.F = t = w.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(x), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(D), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(y), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(w), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Ob(b);
      try {
        const [u, A, M, S, P] = JSON.parse(localStorage.I);
        h.map((U, K) => U.g = U.i = U.l = K ? 0 | u[K] : 0);
        Fa.map((U, K) => U.l = 0 | A[K]);
        pa = M;
        a = S;
        wa = P;
      } catch {
      }
      ua = q(pa);
    });
    const k = m(11, l => H(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10)),
      p = m(10, l => hb(fb(gb(18), k[l]).reverse(), fb(gb(18), k[l + 1]), 1)).flat();
    R(() => T([Ma.slice(1)], H(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const l = (f, n, r) =>
          R(u => {
            u.h = () => H(x() * Math.sin(3 * f + a * f) * n);
            Ma.map(({ x: A, z: M }) => {
              T(J(11, 1), H(4 * A, 4, r + 4 * M).scale(0.8, 3, 0.8), X(0.5, 0.3, 0.7, 0.6));
              T(J(), H(4 * A, 7, r + 4 * M).scale(1, 0.3), X(0.5, 0.5, 0.5, 0.3));
            });
            T(L(
              G(J(), H(0, 0, r).scale(5, 1, 5), X(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(A => G(J(), H(5 * A, 0.2, r).rotate(-30 * A).scale(4, 1, 2), X(0.8, 0.8, 0.8, 0.3))),
            ));
            T(J(), H(0, -3, r).scale(8, 2, 8), X(0.4, 0.4, 0.4, 0.3));
          }),
        t = (f, n, r) =>
          H(f + Math.sin(a + 2) / 5, n + Math.sin(0.8 * a) / 3, r).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        w = f =>
          L(
            G(J(), H(0, -f / 2).scale(6, f - 1, 2.2)),
            G(J(), H(0, -f / 2 - 6).scale(4, f - 3, 4)),
            G(J(32, 1), H(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        x = () => yb(h[2].i, 1 - h[4].i),
        y = L(
          G(J(20, 1, 1.15, 1), H(0, -3).scale(3.5, 1, 3.5), X(0.7, 0.4, 0.25, 0.7)),
          G(J(20, 1, 1.3, 1), H(0, -2.5).scale(2.6, 1, 3), X(0.7, 0.4, 0.25, 0.2)),
          G(J(), H(4, -1.2).scale3d(2), X(0.7, 0.4, 0.25, 0.3)),
        ),
        D = m(7, f => G(J(6, 1), H(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), X(0.3, 0.3, 0.38))).flat(),
        Q = (R(f => {
          f.h = () => t(-12, 4.2, 40 * ua - 66);
          T(y);
          xb(H(0, -3, 4));
        }),
          xb(H(-5.4, 1.5, -19).rotate(0, -90)),
          zb(H(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          zb(
            H(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...gb(18).map(({ x: f, z: n }) => [7 * f, 10 * n, 4.5 - 2 * (0 > f ? -f : f)]),
          ),
          T(J(), H(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
          Ma.map(({ x: f, z: n }) => T(J(6), H(3 * f, 3, 15 * n).scale(0.7, 4, 0.7), X(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(f => T(J(), H(0, 0, f).scale(3, 1, 8), X(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((f, n) => {
            T(J(), H(0, 6.3, f).scale(4, 0.3, 1), X(0.3, 0.3, 0.3, 0.4));
            T(J(), H(0, 1, f).scale(3, 0.2, 0.35), X(0.5, 0.5, 0.5, 0.3));
            R(r => {
              r.h = () => H(0, 0, f).scale(1, q(1.22 - h[n + 1].g), 1);
              T(D);
            });
          }),
          m(5, f =>
            m(2, n =>
              T(
                p,
                H(18.5 * (n - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * n).scale(1.2, 10, 1.2),
                X(1, 1, 0.8, 0.2),
              ))),
          T(J(), H(3, 1.5, -20).scale(0.5, 2, 5), X(0.7, 0.7, 0.7, 0.2)),
          T(J(), H(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(0.75, 0.75, 0.75, 0.2)),
          T(J(5), H(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(0.6, 0.3, 0.3, 0.4)),
          T(J(), O.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), X(0.8, 0.2, 0.2, 0.5)),
          T(L(
            tb(
              G(J(6, 0, 0, 0.3), H(8, -3, -4).scale(13, 1, 13), X(0.7, 0.7, 0.7, 0.2)),
              G(J(6), H(0, -8).scale(9, 8, 8), X(0.4, 0.2, 0.5, 0.5)),
              G(J(6, 0, 0, 0.3), H(0, -0.92).scale(13, 2, 13), X(0.8, 0.8, 0.8, 0.2)),
            ),
            G(J(5), O.scale(5, 30, 5), X(0.4, 0.2, 0.6, 0.5)),
            G(J(5, 0, 1.5), H(0, 1).scale(4.5, 0.3, 4.5), X(0.7, 0.5, 0.9, 0.2)),
            G(J(), O.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), X(0.5, 0.5, 0.5, 0.5)),
            G(J(6), H(15, -1.5, 4).scale(3.5, 1, 3.5), X(0.5, 0.5, 0.5, 0.5)),
          )),
          R(f => {
            f.h = () =>
              H(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0);
            T(J(5), H(0, -0.2).scale(5, 1, 5), X(0.6, 0.65, 0.7, 0.3));
            xb(H(0, 1.2));
          }),
          xb(H(15, -2, 4)),
          l(0.7, 12, 35),
          l(1, 8.2, 55),
          R(f => {
            f.h = () => H(x() * Math.sin(a / 1.5 + 2) * 12);
            T(
              L(
                tb(
                  G(J(), O.scale(1.5, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  G(J(6), O.scale(4, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  G(J(), H(0, -2).scale(2, 3.2, 1.9), X(0.3, 0.8, 0.5, 0.5)),
                  G(J(16, 1, 0, 4), O.scale(1, 1, 1.5).rotate(0, 90), X(0.9, 0.9, 0.9, 0.2)),
                ),
                G(J(), O.scale(1.3, 10, 1.3), X(0.2, 0.7, 0.4, 0.6)),
              ),
              H(0, 0, 45),
            );
            zb(H(0, 2.8, 45), [0, 0, 4.5]);
          }),
          T(J(), H(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
          R(f => {
            f.h = () => H(9.8 * (1 - x()));
            T(J(3), H(-23, -1.7, 55.8).scale(5, 0.7, 8.3), X(0.3, 0.6, 0.6, 0.2));
            T(J(8), H(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(0.8, 0.8, 0.8, 0.2));
            T(J(), H(-23, -3, 55).scale(5.2, 1.7, 3), X(0.5, 0.5, 0.5, 0.3));
            T(J(), H(-23, -2.2, 62).scale(3, 1, 4), X(0.5, 0.5, 0.5, 0.3));
            xb(H(-23, -0.5, 66.5));
          }),
          R(f => {
            f.h = () => H(0, q(1 - 5 * x()) * Ua(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
            T(J(), H(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(0.7, 0.7, 0.7, 0.2));
            T(L(G(J(), O.scale(3, 1.4, 2.7)), G(J(), O.scale(1.2, 8, 1.2))), H(-33, -3, 55), X(0.7, 0.7, 0.7, 0.2));
          }),
          R(f => {
            f.h = () => H(0, 0, q(1 - 5 * x()) * Ua(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
            T(L(
              G(J(), H(-27, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
              G(J(), H(-27, -3, 55).scale(1, 3), X(0.9, 0.9, 0.9, 0.2)),
            ));
            T(J(), H(-39, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2));
          }),
          R(f => {
            f.h = () => H(0, -6.5 * h[4].i);
            T(J(6), H(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), X(0.7, 0.7, 0.7, 0.4));
          }),
          xb(H(-55, -1.1, 46).rotate(0, 90)),
          T(J(6), H(-61.3, -2.4, 49).scale(3, 1, 5), X(0.4, 0.6, 0.6, 0.3)),
          T(J(7), H(-57, -2.6, 46).scale(4, 1, 4), X(0.8, 0.8, 0.8, 0.3)),
          [
            ...G(J(), H(0, -3).scale(11, 1.4, 3), X(0.9, 0.9, 0.9, 0.2)),
            ...L(
              G(J(6), O.rotate(90).scale(6, 8, 6), X(0.3, 0.6, 0.6, 0.3)),
              G(J(4, 0, 0.01), H(0, 6).scale(12, 2, 0.75).rotate(0, 45), X(0.3, 0.6, 0.6, 0.3)),
              G(J(6), O.rotate(90).scale(5, 12, 5), X(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => G(J(5), H(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        B = (T(Q, H(-53, 0, 55)),
          R(f => {
            f.h = () => H(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + sa, 0);
            T(Q);
          }, 2),
          T(J(), H(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), X(0.7, 0.7, 0.7, 0.2)),
          T(J(3, 0, -0.5), H(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), X(0.8, 0.8, 0.8, 0.2)),
          T(L(
            tb(
              G(J(), H(-100, -2.5, 55).scale(8, 1, 8), X(0.8, 0.8, 0.8, 0.2)),
              G(J(), H(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
              G(J(), H(-100, -2.6, 70).scale(3, 1.1, 7), X(0.8, 0.8, 0.8, 0.2)),
              G(J(), H(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), X(0.8, 0.8, 0.8, 0.2)),
              G(J(6), H(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(0.6, 0.6, 0.6, 0.3)),
              G(J(), H(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(0.8, 0.8, 0.8, 0.2)),
              G(J(), H(-100, 0.42, 92).scale(3, 1.1, 4.1), X(0.8, 0.8, 0.8, 0.2)),
            ),
            G(J(8), H(-100, -1, 55).scale(7, 0.9, 7), X(0.3, 0.3, 0.3, 0.4)),
            G(J(8), H(-100, -2, 55).scale(4, 0.3, 4), X(0.4, 0.4, 0.4, 0.5)),
            G(J(8), H(-100, -3, 55).scale(0.6, 1, 0.6), X(0.4, 0.4, 0.4, 0.5)),
          )),
          zb(H(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          zb(H(-89, 0.2, 80), [0, 0, 6]),
          T(L(
            G(J(), H(-100, 1, 63).scale(7.5, 4), X(0.5, 0.5, 0.5, 0.4)),
            G(J(), H(-100, 0, 70).scale(2, 2, 10), X(0.5, 0.5, 0.5, 0.4)),
            G(J(20, 1), H(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(0.5, 0.5, 0.5, 0.4)),
          )),
          R(f => {
            f.h = () => H(-99.7, -1.9, 63.5).scale(1, q(1.1 - h[6].g), 1);
            T(D);
          }),
          Ma.map(({ x: f, z: n }) => {
            T(J(6), H(7 * f - 100, -3, 7 * n + 55).scale(1, 8.1), X(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(r => T(J(6), H(7 * f - 100, r, 7 * n + 55).scale(1.3, 0.5, 1.3), X(0.4, 0.2, 0.2, 0.8)));
          }),
          m(7, f => {
            T(
              J((23 * f + 1) % 5 + 5, 0, 0.55),
              H(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              X(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          T(J(), H(-87, -9.5, 24).scale(7, 1, 3), X(0.4, 0.5, 0.6, 0.4)),
          T(J(4), H(-86, -9.2, 27).scale(5, 1, 5), X(0.5, 0.6, 0.7, 0.3)),
          T(J(12, 1), H(-86, -9, 31).scale(1.5, 1, 1.5), X(0.3, 0.3, 0.4, 0.1)),
          xb(H(-86, -7.5, 31)),
          R(f => {
            f.h = () => H(0, 3.5 * (1 - Ab(h[6].g, h[7].g)) + Ua(h[7].i, h[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(n => T(J(), H(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.2, 0.5, 0.6, 0.2)));
          }),
          R(f => {
            f.h = () => H(0, Ua(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ua(h[7].i, h[6].i));
            [6, 18].map(n => T(J(), H(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.1, 0.4, 0.5, 0.2)));
          }),
          T(
            L(
              tb(
                G(J(5), H(0, 0, -7).scale(2, 1.2, 2), X(0.2, 0.4, 0.7, 0.3)),
                G(J(5), O.scale(9, 1.2, 9), X(0, 0.2, 0.3, 0.5)),
                G(J(), O.scale(11, 1, 13), X(0.3, 0.4, 0.6, 0.3)),
              ),
              G(J(5), O.scale(5.4, 5, 5.4), X(0, 0.2, 0.3, 0.5)),
            ),
            H(-38.9, -11.3, 17),
          ),
          xb(H(-38.9, -9.6, 10)),
          R(f => {
            f.h = () => H(0, -7.3 * h[7].i);
            T(
              L(
                tb(
                  G(J(5), H(0, 2).scale(5, 7, 5).skewY(8), X(0.2, 0.4, 0.5, 0.5)),
                  G(J(5), H(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(0.25, 0.35, 0.5, 0.5)),
                  G(J(5), H(0, 9).scale(0.6, 7, 0.6).skewY(8), X(0.35, 0.3, 0.5, 0.5)),
                ),
                G(J(5), O.scale(4, 8, 4), X(0.2, 0.4, 0.5, 0.5)),
                G(J(5), H(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(0.2, 0.4, 0.5, 0.5)),
              ),
              H(-38.9, -11.3, 17),
            );
            zb(H(-39.1, -0.6, 17).rotate(11), ...gb(15).map(({ x: n, z: r }) => [3 * n, 3 * r, 1.2]));
          }),
          Ma.map(({ x: f, z: n }) => {
            T(J(14, 1), H(9 * f - 38.9, -7.3, 11 * n + 17).scale(1, 4), X(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(r =>
              T(J(17, 1), H(9 * f - 38.9, r - 11.3, 11 * n + 17).scale(1.5, 0.5, 1.5), X(0.6, 0.6, 0.6, 0.3))
            );
          }),
          T(
            L(
              tb(
                G(J(6), H(0, 0, -36).scale(15, 1.2, 15), X(0.7, 0.7, 0.7, 0.3)),
                G(J(), H(0, 0, -18).scale(4, 1.2, 6), X(0.45, 0.4, 0.6, 0.3)),
              ),
              ...m(6, f =>
                m(6, n =>
                  G(
                    J(6),
                    H(4.6 * n - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * n)).scale(2, 5, 2),
                    X(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            H(-38.9, -11.3, 17),
          ),
          zb(H(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          T(J(5), H(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), X(0.8, 0.1, 0.25, 0.4)),
          xb(H(-84, -0.5, 85).rotate(0, 45)),
          R(f => {
            f.h = () => t(-123, 1.4, 55 + -65 * wa);
            T(y);
            xb(H(0, -3, -4).rotate(0, 180));
          }),
          L(
            G(J(), H(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(0.25, 0.25, 0.35, 0.3)),
            G(J(3), H(0, 0, -5.5).scale(3, 2), X(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => G(J(), H(f, -0.5, 1).scale(0.14, 0.3, 6.5), X(0.7, 0.2, 0, 0.3))),
          ));
      R(f => {
        f.h = () => {
          var n = Math.sin(1.1 * a);
          return H(0, -2, Ua(h[10].g, h[11].g) * (0 > n ? -n : n) * -8.5 + 10);
        };
        m(2, n => T(B, H(9 * n - 110 + (1 & n), 1.7, -12)));
      });
      R(f => {
        f.h = () => {
          var n = Math.sin(2.1 * a);
          return H(0, -2, Ua(h[10].g, h[11].g) * (0 > n ? -n : n) * -8.5 + 10);
        };
        m(2, n => T(B, H(9 * (n + 2) - 110 + (1 & n), 1.7, -12)));
      });
      R(f => {
        f.h = () => {
          var n = Math.sin(1.5 * a);
          return H(
            0,
            -2,
            -8.5 * Ab((1 - h[10].g) * (1 - Ua(h[10].g, h[11].g)), Ua(h[10].g, h[11].g) * (0 > n ? -n : n)) + 10,
          );
        };
        m(3, n => T(B, H(9 * n - 106, 1.7, -12)));
      });
      T(
        L(
          tb(G(J(), H(26.5, -1.6, 10).scale(20, 2.08, 3)), G(J(), H(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...m(4, f => G(J(), H(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...m(3, f => G(J(), H(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        H(-123, 0, -12),
        X(0.5, 0.5, 0.6, 0.2),
      );
      xb(H(-116, -1.4, -18).rotate(0, 180));
      T(J(), H(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(0.8, 0.8, 0.8, 0.2));
      T(J(6), H(-116, -2.6, -16.5).scale(3.2, 0.8, 3), X(0.6, 0.5, 0.7, 0.2));
      T(J(), H(-115.5, -17, -12).scale(0.5, 15, 2.2), X(0.6, 0.6, 0.6, 0.3));
      T(J(8), H(-114, -17, -2).scale(2, 15, 2), X(0.6, 0.6, 0.6, 0.3));
      T(J(8), H(-79, -17, -2).scale(2, 15, 2), X(1, 1, 1, 0.3));
      T(J(), H(-77, -17, -50.5).scale(2.2, 15, 0.5), X(0.6, 0.6, 0.6, 0.3));
      m(3, f => {
        T(w(16), H(12 * f - 109, -9, -12), X(0.6, 0.6, 0.6, 0.3));
        T(w(16), H(-77, -9, -12 * f - 20).rotate(0, 90), X(0.6, 0.6, 0.6, 0.3));
      });
      T(L(
        G(J(12), H(-77, -14.5, -12).scale(4, 17.5, 4), X(0.7, 0.7, 0.7, 0.2)),
        G(J(), H(-79, 0.1, -12).scale(3.5, 2, 1.3), X(0.4, 0.5, 0.6, 0.2)),
        G(J(), H(-77, 0.1, -14).scale(1.5, 2, 2), X(0.4, 0.5, 0.6, 0.2)),
        G(J(12), H(-77, 3.1, -12).scale(3, 5, 3), X(0.4, 0.5, 0.6, 0.2)),
      ));
      T(J(), H(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), X(0.6, 0.6, 0.6, 0.3));
      T(J(9), H(-98, -18.4, -40).scale(2.5, 13.5, 2.5), X(0.5, 0.5, 0.5, 0.3));
      T(L(
        G(J(), H(-93, -5.8, -40).scale(9, 1, 5), X(0.8, 0.8, 0.8, 0.1)),
        G(J(9), H(-98, -5.8, -40).scale(3, 8, 3), X(0.7, 0.7, 0.7, 0.2)),
      ));
      xb(H(-98, -4.4, -40).rotate(0, 90));
      zb(H(-115, 0.2, -12), [0, 0, 3.5]);
      zb(H(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      T(L(
        tb(
          G(J(6, 0, 0, 0.6), H(-100, 0.7, 105.5).scale(8, 1, 11), X(0.7, 0.7, 0.7, 0.2)),
          G(J(), H(-101.5, 0.7, 93.5).scale(10.5, 1, 2), X(0.7, 0.7, 0.7, 0.2)),
        ),
        G(J(5), H(-100, 0.7, 113).scale(4, 3, 4), X(0.7, 0.7, 0.7, 0.2)),
      ));
      m(4, f =>
        R(n => {
          n.h = () => {
            const r = Ua(h[8].i, h[12].i);
            return H(
              (2 < f ? 2 * (1 - r) + r : 0) - 100,
              r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + Ab(r, 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          T(
            J(6),
            H(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            X(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      R(f => {
        f.h = () => {
          const n = Ua(h[8].i, h[12].i);
          return H(2.5 * (1 - n) - 139.7, -3 * (1 - h[8].g) + n * Math.sin(0.8 * a) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * a) * (3 * n + 3),
            0,
          );
        };
        T(L(G(J(10), O.scale(6, 2, 6), X(0.1, 0.6, 0.5, 0.3)), G(J(10), O.scale(3.3, 6, 3.3), X(0.1, 0.6, 0.5, 0.5))));
        T(J(15, 1), H(-7.5).rotate(0, 90).scale(3, 2.3, 3), X(0.4, 0.4, 0.4, 0.3));
        T(J(10), H(-7.5).rotate(0, 90).scale(2, 2.5, 2), X(0.3, 0.8, 0.7, 0.3));
        T(J(5), H(-7.5).rotate(0, 90).scale(1, 3), X(0.5, 0.5, 0.5, 0.5));
        xb(H(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(n =>
          T(p, O.rotate(90 * -n, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), X(1, 1, 0.8, 0.2))
        );
        zb(H(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        T(J(12, 1), H(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), X(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(n => T(J(15, 1), H(-7.5 * f - 100, n + 0.7, 96).scale(1.1, 0.5, 1.1), X(0.5, 0.24, 0.2, 0.4)));
        T(p, H(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), X(1, 1, 0.8));
        T(
          L(
            G(J(), H(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), X(0.5, 0.5, 0.5, 0.4)),
            G(J(), O.scale(3, 3, 10), X(0.6, 0.24, 0.2, 0.5)),
            G(J(28, 1), H(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(0.6, 0.24, 0.2, 0.5)),
            G(J(5), H(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(0.6, 0.24, 0.2, 0.5)),
            G(J(5), H(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), X(0.6, 0.24, 0.2, 0.5)),
          ),
          H(f - 100, 0.7, 97),
        );
      });
      R(f => {
        f.h = () => H(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        T(D);
      });
      T(L(
        G(J(), H(-82.07, 0.8, 106).scale(11, 0.9, 2.2), X(0.7, 0.7, 0.7, 0.1)),
        G(J(45, 1), H(-81, 0.7, 106).scale3d(7.7), X(0.7, 0.7, 0.7, 0.1)),
      ));
      R(f => {
        f.h = () => H(-81, 0.6, 106).rotate(0, 40 + qa);
        T(L(
          G(J(45, 1), O.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),
          G(J(), H(0, 0, -5.5).scale(1.5, 3, 2.7), X(0.45, 0.45, 0.45, 0.2)),
        ));
        T(J(8), H(0, 2).scale(3, 1.5, 3).rotate(0, 22), X(0.7, 0.7, 0.7, 0.1));
        T(J(5), H(0, 2).scale(1, 2), X(0.3, 0.3, 0.3, 0.2));
        zb(H(0, 3), ...gb(14).map(({ x: n, z: r }) => [5.6 * n, 5.6 * r, 2]));
      });
      R(f => {
        f.h = () => H(-65.8, 0.8, 106).rotate(0, ra);
        [-1, 1].map(n =>
          T(p, O.rotate(0, 90).translate(-5 * n, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * n + 90), X(1, 1, 0.8))
        );
        T(L(G(J(28, 1), H(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3)), G(J(), O.scale(9, 5, 2), X(0.3, 0, 0, 0.3))));
        T(G(J(28, 1), O.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)));
        T(G(J(5), H(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)));
      });
      R(f => {
        f.h = () => H(-50.7, 0.8, 106).rotate(0, 180 - ra);
        T(L(
          G(J(28, 1), H(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3)),
          G(J(), H(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
          G(J(), H(0, 0, 7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
        ));
        T(G(J(28, 1), O.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)));
        T(G(J(5), H(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)));
      });
      R(f => {
        f.h = () => H(-50.7, 0.8, 91).rotate(0, 270 + ra);
        T(L(
          G(J(28, 1), H(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3)),
          G(J(), H(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
          G(J(), H(0, 0, -7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
        ));
        T(G(J(28, 1), O.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)));
        T(G(J(5), H(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)));
      });
      T(J(), H(-58, 1, 106).scale(2, 0.65, 2), X(0.7, 0.7, 0.7, 0.2));
      T(J(), H(-50.7, 1, 99).scale(2, 0.65, 1), X(0.7, 0.7, 0.7, 0.2));
      T(J(), H(-42, 0.4, 91).scale(5, 1, 2.5), X(0.7, 0.7, 0.7, 0.3));
      T(J(), H(-34.2, 0.4, 91).scale(3, 1, 3), X(0.7, 0.7, 0.7, 0.3));
      xb(H(-34, 2.7, 96).rotate(-12, 0));
      T(J(5), H(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), X(0.2, 0.5, 0.5, 0.6));
      [X(0.1, 0.55, 0.45, 0.2), X(0.2, 0.5, 0.5, 0.3), X(0.3, 0.45, 0.55, 0.4)].map((f, n) =>
        R(r => {
          r.h = () =>
            H(0, (1 - h[13].i) * (1 - h[14].i) * (n ? 0 : 3) + Ua(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * n) * 4);
          T(J(), H(-23.5, 0.5, 91 + 6.8 * n).scale(1 === n ? 2 : 3.3, 1, 3.3), f);
          2 === n && T(J(), H(-29.1, 0.4, 91).scale(2.1, 1, 3), X(0.7, 0.7, 0.7, 0.3));
          1 === n && T(J(), H(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), X(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => T(p, H(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), X(1, 1, 0.8)));
      m(
        3,
        f =>
          T(
            w(24.7 - 0.7 * (1 & f)),
            H(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? X(0.5, 0.5, 0.5, 0.3) : X(0.35, 0.35, 0.35, 0.5),
          ),
      );
      T(L(
        G(J(6, 0, 0, 0.3), H(0, -0.92, 95).scale(14, 2, 14), X(0.8, 0.8, 0.8, 0.2)),
        G(J(5), H(0, 0, 95).scale3d(6), X(0.3, 0.3, 0.3, 0.5)),
      ));
      xb(H(0, 1.7, 82).rotate(0, 180));
      T(J(5), H(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(0.5, 0.3, 0.3, 0.4));
      T(J(6), H(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(0.5, 0.6, 0.7, 0.3));
      T(J(), H(0, 16, 129).scale(1.5, 1, 2), X(0.5, 0.6, 0.7, 0.3));
      T(J(7), H(0, 16.2, 133).scale(5, 1, 5), X(0.4, 0.5, 0.6, 0.4));
      T(L(
        tb(
          G(J(), H(0, 16, 110.5).scale(12, 1, 3), X(0.5, 0.3, 0.3, 0.4)),
          G(J(), H(0, 16, 111).scale(3, 1, 3.8), X(0.5, 0.3, 0.3, 0.4)),
        ),
        G(J(5), H(0, 16, 103.5).scale(5.5, 5, 5.5), X(0.5, 0.3, 0.3, 0.4)),
      ));
      R(f => {
        f.h = () => {
          const n = Math.sin(a);
          return H(-2 * n).rotate(25 * n);
        };
        T(J(3), H(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), X(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(n => {
          T(J(6), H(0, 16, n + 95).scale(3, 1, 2.3).rotate(0, 90), X(0.7, 0.7, 0.7, 0.4));
          T(J(), H(0, 6.2, n + 95).scale(0.5, 11, 0.5), X(0.5, 0.3, 0.3, 0.4));
        });
      });
      R(f => {
        f.h = () => {
          const n = Ua(Ua((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          return H(0, 16 * n, 8.5 * q(2 * n - 1) + 95);
        };
        T(J(5), O.scale(5, 1.1, 5), X(0.5, 0.3, 0.3, 0.4));
        T(J(5), O.scale(5.5, 0.9, 5.5), X(0.25, 0.25, 0.25, 0.4));
        xb(H(0, 1.5, -1).rotate(0, 180));
      });
      zb(H(0, 3, 95), ...gb(9).map(({ x: f, z: n }) => [9 * f, 9 * n, 4]));
      zb(H(0, 19, 134), [0, 0, 3.5]);
    });
    R(() => {
      [0, 180].map(t => T(p, O.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), X(1, 1, 0.8)));
      T(ib(20), H(0, 1).scale(0.5, 0.5, 0.5), X(1, 0.3, 0.4));
      const l = G(
        L(J(15, 1), G(J(), H(0, 0, 1).scale(2, 2, 0.5))),
        O.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        X(0.3, 0.3, 0.3),
      );
      [-1, 1].map(t => T(l, H(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      T(J(), H(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), X(0.3, 0.3, 0.3));
      T(ib(20), O.scale(0.7, 0.8, 0.55), X(1, 0.3, 0.4));
    });
    [-1, 1].map(l =>
      R(() => {
        T(J(10, 1), H(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), X(1, 0.3, 0.4));
      })
    );
    R(() => {
      T(J(6, 1), O.scale(0.13, 1.4, 0.13), X(0.3, 0.3, 0.5, 0.1));
      T(J(10), H(0, 1).scale(0.21, 0.3, 0.21), X(1, 0.5, 0.2));
      T(J(3), H(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), X(0.2, 0.2, 0.2, 0.1));
    }, 0);
    R(() => {
      T(J(6).slice(0, -1), O.scale(0.77, 1, 0.77), X(1, 0.3, 0.5));
    }, 0);
    R(() => {
      T(
        ib(30, 24, (l, t, w) => {
          const x = t / 24, y = l * Math.PI * 2 / 30, D = x ** 0.6 * Math.PI / 2;
          l = x * x * Math.sin(l * Math.PI * 14 / 30) / 4;
          return 23 === t
            ? { x: w.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(y) * Math.sin(D),
              y: Math.cos(x * Math.PI) - x - l,
              z: Math.sin(y) * Math.sin(D) + Math.sin(l * Math.PI * 2) / 4,
            };
        }),
        O.scale3d(0.7),
        X(1, 1, 1),
      );
      [-1, 1].map(l => T(ib(12), H(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
