let ha,
  ja,
  pa,
  qa,
  ta,
  ua,
  ya,
  za,
  Ba,
  Ca,
  Da,
  Ea,
  Ga,
  Ha,
  Ia,
  b = 0,
  Ja = 0,
  Ka = 0,
  La = 0,
  Ma = 0,
  Na = 0,
  Oa = 0,
  Pa = 0,
  Qa = 0,
  Ta = 0,
  Ua = 1,
  d = 0.066;
const e = [],
  f = [],
  Va = [],
  Wa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  $a = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  ab = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  bb = { x: 0, y: 0, z: 0 },
  cb = Math.PI / 180;
var db = 0, eb = 180;
const fb = { x: 0, y: 0, z: 0 },
  l = NO_INLINE(a => 0 > a ? -a : a),
  gb = NO_INLINE((a, c) => a < c ? a : c),
  hb = NO_INLINE((a, c) => c < a ? a : c),
  ib = (a, c) => l(a) > c ? a : 0,
  p = (a, c = 0, g = 1) => a < c ? c : g < a ? g : a,
  jb = a => Math.atan2(Math.sin(a * cb), Math.cos(a * cb)) / cb,
  kb = (a, c, g) => a + (2 * (c = (c - a) % 360) % 360 - c) * p(g) || 0,
  lb = (a, c, g) => (0 < g ? 1 > g ? a + (c - a) * g : c : a) || 0,
  mb = (a, c) => (a = p(a), lb(a, 1 - a, c)),
  pb = (
    a,
    c = nb,
    g = 0,
  ) => (g *= 16,
    c[g++] = a.m11,
    c[g++] = a.m12,
    c[g++] = a.m13,
    c[g++] = a.m14,
    c[g++] = a.m21,
    c[g++] = a.m22,
    c[g++] = a.m23,
    c[g++] = a.m24,
    c[g++] = a.m31,
    c[g++] = a.m32,
    c[g++] = a.m33,
    c[g++] = a.m34,
    c[g++] = a.m41,
    c[g++] = a.m42,
    c[g++] = a.m43,
    c[g] = a.m44,
    c),
  sb = (
    a = qb,
    c = rb,
  ) => (c.m11 = a.m11,
    c.m12 = a.m12,
    c.m13 = a.m13,
    c.m14 = a.m14,
    c.m21 = a.m21,
    c.m22 = a.m22,
    c.m23 = a.m23,
    c.m24 = a.m24,
    c.m31 = a.m31,
    c.m32 = a.m32,
    c.m33 = a.m33,
    c.m34 = a.m34,
    c.m41 = a.m41,
    c.m42 = a.m42,
    c.m43 = a.m43,
    c.m44 = a.m44,
    c),
  x = NO_INLINE((a, c, g) => qb.translate(a, c, g)),
  tb = NO_INLINE((a, c, g) => qb.rotate(a, c, g)),
  C = NO_INLINE((a, c, g) => qb.scale(a, c, g)),
  F = (a, c) => Array.from(Array(a), (g, k) => c(k)),
  ub = (a, c, g) => (a.C = g, a.u = c, a),
  vb = (a, c, g = a.u) =>
    ub(
      a.map(k => {
        let q, m;
        return { x: k, y: q, z: m } = k,
          { x: k, y: q, z: m } = c.transformPoint({ x: k, y: q, z: m }),
          { x: k, y: q, z: m };
      }),
      g,
      a.C,
    ),
  N = (a, c, g) => a.map(k => vb(k, c, g)),
  wb = (a, c = 0) =>
    F(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > l(k) ? k : 0 > k ? k - c : k + c };
    }),
  xb = (a, c, g) =>
    a.map((k, q, { length: m }) => ub([k, c[m - q - 1], c[m - (q + 1) % m - 1], a[(q + 1) % m]], a.u, g)),
  Q = (
    a,
    c,
    g = 0,
    k,
  ) => (a = a ? wb(a, k) : Wa,
    k = vb(a, x(0, 1).scale3d(0 < g ? g : 1)),
    a = vb(a, x(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...xb(a, k, c), k, a]),
  yb = (
    a,
    c = a,
    g = (
      k,
      q,
    ) => (q *= Math.PI / c,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(k) * Math.sin(q) }),
  ) => {
    const k = [];
    for (let q = 0; a > q; q++) {
      for (let m = 0; c > m; m++) {
        const w = ub([], 0, 1);
        k.push(w);
        w.push(g(q, m, w));
        m && w.push(g((q + 1) % a, m, w));
        c - 1 > m && w.push(g((q + 1) % a, m + 1 % c, w));
        w.push(g(q, m + 1 % c, w));
      }
    }
    return k;
  },
  zb = ({ x: a, y: c, z: g }, k) => a * k.x + c * k.y + g * k.z,
  Ab = a => {
    let c, g = 0, k = 0, q = 0, m = a.at(-1);
    for (c of a) {
      g += (m.y - c.y) * (m.z + c.z), k += (m.z - c.z) * (m.x + c.x), q += (m.x - c.x) * (m.y + c.y), m = c;
    }
    return c = Math.hypot(g, k, q), g /= c, k /= c, q /= c, { x: g, y: k, z: q, w: g * m.x + k * m.y + q * m.z };
  },
  Bb = (a, c) => {
    var g, k, q, m = c.B;
    for (var w = 0; m.length > w; ++w) {
      if (-0.00008 > (g = zb(a, m[w]) - a.w) ? q = c : 8e-5 < g && (k = c), q && k) {
        k = [];
        q = [];
        m = c.B;
        w = c.v;
        let z = m.at(-1), A = zb(a, z) - a.w;
        for (const G of m) {
          g = zb(a, G) - a.w,
            8e-5 > A && q.push(z),
            -0.00008 < A && k.push(z),
            (8e-5 < A && -0.00008 > g || -0.00008 > A && 8e-5 < g)
            && (A /= g - A,
              z = { x: z.x + (z.x - G.x) * A, y: z.y + (z.y - G.y) * A, z: z.z + (z.z - G.z) * A },
              k.push(z),
              q.push(z)),
            z = G,
            A = g;
        }
        return {
          l: 2 < k.length && { B: ub(k, m.u, m.C), v: w, A: c },
          j: 2 < q.length && { B: ub(q, m.u, m.C), v: w, A: c },
        };
      }
    }
    return { l: k, j: q };
  },
  Cb = (a, c, g = Ab(c.B)) => {
    let k, q, m;
    return a
      ? ({ l: k, j: q } = Bb(a, c), k || q || a.o.push(c), k && (a.l = Cb(a.l, k, g)), q && (a.j = Cb(a.j, q, g)))
      : ({ x: k, y: q, z: g, w: m } = g, a = { x: k, y: q, z: g, w: m, o: [c], l: 0, j: 0 }),
      a;
  },
  Db = (a, c, g) => {
    const k = [],
      q = (m, w) => {
        let { l: z, j: A } = Bb(m, w);
        z || A || (0 < g * zb(m, c) ? z = w : A = w);
        z && (m.l ? q(m.l, z) : k.push(z));
        A && m.j && q(m.j, A);
      };
    for (const m of c.o) {
      q(a, m);
    }
    return k;
  },
  Eb = (a, c) => a && (c(a), Eb(a.l, c), Eb(a.j, c)),
  Fb = a => (Eb(a, c => {
    const g = c.j;
    c.j = c.l;
    c.l = g;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const k of c.o) {
      k.v = !k.v;
    }
  }),
    a),
  Gb = a => a.length ? a.reduce((c, g) => Cb(c, { B: g, v: 0, A: 0 }), 0) : a,
  Jb = (...a) =>
    a.reduce((c, g) => {
      const k = [];
      if (c = Gb(c), g) {
        g = Gb(g);
        Eb(c, q => q.o = Db(g, q, 1));
        Eb(g, q => k.push([q, Db(c, q, -1)]));
        for (let [q, m] of k) {
          for (const w of m) {
            Cb(c, w, q);
          }
        }
      }
      return c;
    }),
  T = (a, ...c) => {
    const g = m => {
        let w;
        return m.A && ((w = k.get(m.A)) ? (q.delete(w), m = g(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      q = new Map();
    return a = Fb(Jb(Fb(Gb(a)), ...c)),
      Eb(a, m => {
        for (const w of m.o) {
          q.set(g(w), w.v);
        }
      }),
      Array.from(q, ([{ B: m }, w]) => {
        const z = m.map(({ x: A, y: G, z: H }) => ({ x: A, y: G, z: H }));
        return ub(w ? z.reverse() : z, m.u, m.C);
      });
  },
  V = NO_INLINE((a, c, g) => lb(a, c, 1 - Math.exp(-g * d))),
  Kb = () => {
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
      ][Ka = Va.reduce((a, { i: c }) => a + c, 0)] + " / XIII";
  },
  Lb = () => {
    localStorage.DanteSP22 = JSON.stringify([f.map(({ i: a }) => a), Va.map(({ i: a }) => a), Ma, b, qa]);
  },
  Mb = (a, c, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (c + a) / (a - c), -1, 0, 0, 2 * c * a / (a - c), 0]),
  Pb = () => {
    let a, c, g, k, q, m, w, z, A, G, H, h, t, R, U = !0;
    const M = [],
      E = () => {
        b4.innerHTML = "Music: " + U;
        ja || !U ? Nb.disconnect() : Nb.connect(Ob.destination);
      },
      K = () => {
        const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        za = Mb(0.3, 181, u, 1.732051);
        Ba = [Mb(0.3, 55, u, 1.732051), Mb(55, 181, u, 1.732051)];
        k = z = void 0;
        M.length =
          ta =
          R =
          h =
          t =
          Na =
          Oa =
            0;
      },
      D = (u, v = 0) => {
        if (ja !== u) {
          ja = u;
          ua = v;
          K();
          document.body.className = u ? "l m" : "l";
          try {
            u
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Nb.start());
          } catch {
          }
          E();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => D(!1);
    b2.onclick = () => D(!1, 1);
    b5.onclick = () => D(!0);
    b4.onclick = () => {
      U = !U;
      E();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = u => {
      if (!ja && (u.target === hC && (ta = 1), ua)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = u => {
      let v;
      u.repeat
        || (v = {
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
        }[u.code],
          (M[v] = !!u.type[5] && !0) && (0 === v && (ta = 1), 1 === v && D(!0)));
    };
    onmousemove = ({ movementX: u, movementY: v }) => {
      ua && (u || v) && (eb += 0.1 * u, db += 0.1 * v);
    };
    hC.ontouchstart = u => {
      if (!ja) {
        for (let { pageX: v, pageY: I, identifier: L } of u.changedTouches) {
          ua && v > hC.clientWidth / 2
            ? void 0 === z && (A = 0, m = v, w = I, z = L, G = eb, H = db)
            : void 0 === k && (q = 0, c = v, g = I, k = L);
        }
        a = Ja;
      }
    };
    hC.ontouchmove = u => {
      if (!ja) {
        for (let { pageX: ra, pageY: la, identifier: aa } of u.changedTouches) {
          var v, I, L, ia;
          z === aa && (eb = G + (ra - m) / 2.3, db = H + (la - w) / 2.3, A = 1);
          k === aa
            && (aa = (c - ra) / 20,
              v = l(aa),
              I = (g - la) / 20,
              L = l(I),
              (ia = 0.5 < hb(v, L)) && (q = 1),
              h = (ia && 0.2 < v) * p(aa, -1),
              t = (ia && 0.2 < L) * p(I, -1),
              2 < v && (c = ra + 20 * (0 > aa ? -1 : 1)),
              2 < L && (g = la + 20 * (0 > I ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = u => {
      let v;
      document.activeElement === document.body && u.preventDefault();
      for (const I of u.changedTouches) {
        I.identifier === z
          ? (z = void 0, A || (v = 1), A = 0)
          : I.identifier === k
          ? (k = void 0, t = h = 0, q || (v = 1), q = 0)
          : v = 1;
      }
      u.target === hC && v && a && 0.02 < (u = Ja - a) && 0.7 > u && (ta = 1);
    };
    ya = () => {
      Na = t + (M[4] ? 1 : 0) - (M[5] ? 1 : 0);
      Oa = h + (M[2] ? 1 : 0) - (M[3] ? 1 : 0);
      var u = navigator.getGamepads()[0];
      if (u) {
        const v = L => I[L]?.pressed || 0 < I[L]?.value ? 1 : 0, I = u.buttons;
        u = u.axes;
        ua && (db += d * ib(u[3], 0.3) * 80, eb += d * ib(u[2], 0.3) * 80);
        Na += v(12) - v(13) - ib(u[1], 0.2);
        Oa += v(14) - v(15) - ib(u[0], 0.2);
        v(9) && D(!0);
        (u = v(3) || v(2) || v(1) || v(0)) && !R && (ta = 1);
        R = u;
      }
    };
    document.onvisibilitychange = onblur = onresize = K;
    D(!0);
  },
  W = NO_INLINE((a, c, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * c << 8 | 255 * a),
  X = (a, c = new DOMMatrix(), g) => Ca.o.push(...N(a, c, g)),
  Y = (a, c = 1) => {
    const g = Ca;
    c = { m: new DOMMatrix(), H: e.length, G: c, o: [] };
    return e.push(c), a(Ca = c), Ca = g, c;
  },
  Qb = a => (a = a.transformPoint(), Math.hypot(bb.x - a.x, bb.y - a.y, bb.z - a.z)),
  Rb = a => {
    const c = Ca,
      g = f.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: c.m,
        I: a,
        F() {
          k.g = V(k.g, k.i, 4);
          k.h = V(k.h, k.i, 1);
          sb(c.m).multiplySelf(a);
          ta && 3 > Qb(rb) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, g && 1 / 0 > Ua && (Ua = b + 1, h4.innerHTML = "* click *"), Ma = g, Lb());
          !g && k.i && 0.8 < k.g && (k.i = 0,
            13 > Ka
              ? 1 / 0 > Ua && (Ua = b + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : La
                || (1 / 0 > Ua
                  && (Ua = b + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  La = 1));
          rb.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    f.push(k);
    X(Q(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
    X(Q(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
    X(Q(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), W(0.5, 0.5, 0.4));
  },
  Sb = (a, ...c) => {
    let g = -1, k = 0, q = 0, m = 0, w = 0, z = 0, A = 1, G = 3;
    const H = {
        i: 0,
        F() {
          if (!H.i) {
            let ia, ra, la, aa, va, sa, wa, da = 1, ka = 1 / 0;
            for (const oa of R) {
              var { x: u, z: v, w: I } = oa;
              v = (u = Math.hypot(M - u, E - v)) - I;
              wa ||= u < I;
              0 < v && ka > v && (ka = v, U = oa);
              da = gb(da, u / I);
            }
            wa
              || ({ x: L, z: ia, w: ra } = U,
                la = M - L,
                aa = E - ia,
                va = Math.hypot(la, aa),
                sa = Math.atan2(-aa, la),
                A && (q = (Math.random() - 0.5) * Math.PI / 2, G = p(G / (1 + Math.random()))),
                sa += q,
                g = -Math.cos(sa),
                k = Math.sin(sa),
                0.1 < va && (va = gb(va, ra) / (va || 1), M = la * va + L, E = aa * va + ia));
            A = wa;
            G = V(G, 6 * (1 - da) + 3, da + 3);
            K = V(K, M = V(M, M + g, G), G);
            D = V(D, E = V(E, E + k, G), G);
            m = kb(m, Math.atan2(K - w, D - z) / cb - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > Qb(sb(h.m).multiplySelf(a).translateSelf(w = K, 0, z = D).rotateSelf(0, m, 7 * Math.sin(1.7 * b)))
            ) {
              H.i = 1;
              var L = [
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
              ][Ka] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Ua && (Ua = b + (Ka && 12 > Ka ? 5 : 7), h4.innerHTML = L);
              Kb();
              Lb();
            }
          }
          H.i
            && sb(e[2].m).translateSelf(
              t % 4 * 1.2 - 1.7 + Math.sin(b + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + l(t % 4 - 2) + Math.cos(b / 1.5 + t) / 6,
            );
        },
      },
      h = Ca,
      t = Va.length,
      R = c.map(([u, v, I]) => ({ x: u, z: v, w: I }));
    let U = R[0], { x: M, z: E } = U, K = M, D = E;
    Va.push(H);
  },
  Tb = (a, c, g, k) => {
    a.translateSelf(c + Math.sin(b + 2) / 5, g + Math.sin(0.8 * b) / 3, k).rotateSelf(
      2 * Math.sin(b),
      Math.sin(0.7 * b),
      Math.sin(0.9 * b),
    );
  },
  Ub = (a, c = 35633) => (c = Z.c6x(c), Z.s3c(c, a), Z.c6a(c), c),
  Vb = (a, c) => {
    const g = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Ub(c, 35632)), Z.l8l(k), q => q ? g[q] || (g[q] = Z.gan(k, q)) : Z.u7y(k);
  },
  Zb = (a, c, g) => {
    let k;
    ja
      ? (k = tb(0, 40 * Math.sin(Ja) - 70),
        pb(k, Wb, 37),
        pb(k, Wb, 38),
        pb(k, Wb, 39),
        Z.uae(a, !1, Wb),
        Z.d97(4, e[39].D - e[37].s, 5123, 2 * e[37].s))
      : (Z.uae(a, !1, Wb),
        Z.d97(4, (c ? e[39].D : e[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Xb),
        Z.das(4, e[g].D - e[g].s, 5123, 2 * e[g].s, Va.length),
        Z.das(4, e[40].D - e[40].s, 5123, 2 * e[40].s, f.length));
  },
  $b = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  ac = a => Math.sin(a * Math.PI * 2),
  bc = a => 0.5 > a % 1 ? 1 : -1,
  cc = a => a % 1 * 2 - 1,
  dc = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  ec = a => {
    let c = 0;
    const g = () => {
        let w = 0;
        const z = da => {
            let ka, oa, ma, Xa = 0, Ra = 0;
            const ob = [],
              Fa = new Int32Array(768 * da),
              Hb = 2 ** (v - 9) / da,
              Sa = Math.PI * 2 ** (la - 8) / da,
              y = va * da & -2;
            for (let P = 0; 11 >= P; ++P) {
              for (
                let fa = 0, ea = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + P];
                32 > fa;
                ++fa
              ) {
                const xa = (32 * P + fa) * da;
                for (var r = 0; 4 > r; ++r) {
                  if (ka = 0, ea && (ka = A[ea - 1].charCodeAt(fa + 32 * r) - 40, ka += 0 < ka ? 106 : 0), ka) {
                    var n;
                    if (!(n = ob[ka])) {
                      n = ka;
                      let B = void 0, S = void 0;
                      var J = ka;
                      let ba = 0, ca = 0;
                      const na = 2 > c ? cc : ac, Aa = 2 > c ? 1 > c ? bc : dc : ac, Yb = new Int32Array(E + K + wa);
                      for (let Ya = 0, Ib = 0; E + K + wa > Ya; ++Ya, ++Ib) {
                        let Za = 1;
                        E > Ya
                          ? Za = Ya / E
                          : E + K > Ya || (Za = (1 - (Za = (Ya - E - K) / wa)) * 3 ** (-u / 16 * Za));
                        0 > Ib
                          || (Ib -= 4 * da,
                            S = 0.00396 * 2 ** ((J + H - 256) / 12),
                            B = 0.00396 * 2 ** ((J + R - 256) / 12) * (1 + (c ? 0 : 0.0072)));
                        Yb[Ya] = 80
                            * (na(ba += S * Za ** (h / 32)) * G + Aa(ca += B * Za ** (U / 32)) * t
                              + (M ? (2 * Math.random() - 1) * M : 0))
                            * Za | 0;
                      }
                      n = ob[n] = Yb;
                    }
                    for (let B = 0, S = 2 * xa; n.length > B; ++B, S += 2) {
                      Fa[S] += n[B];
                    }
                  }
                }
                for (let B, S = 0; da > S; ++S) {
                  r = 0;
                  n = 2 * (xa + S);
                  var O = (((B = Fa[n]) || ma)
                    && (oa = 0.00308 * I,
                      1 !== c && 4 !== c || (oa *= Math.sin(Hb * n * Math.PI * 2) * sa / 512 + 0.5),
                      oa = 1.5 * Math.sin(oa),
                      Xa += oa * Ra,
                      O = (1 - L / 255) * (B - Ra) - Xa,
                      Ra += oa * O,
                      B = 4 === c ? Ra : 3 === c ? O : Xa,
                      c || (B = 1 > (B *= 22e-5) ? -1 < B ? Math.sin(B / 4 * Math.PI * 2) : -1 : 1, B /= 22e-5),
                      B *= ia / 32,
                      ma = 1e-5 < B * B,
                      O = Math.sin(Sa * n) * ra / 512 + 0.5,
                      r = B * (1 - O),
                      B *= O),
                    n < y || (r += Fa[1 + n - y] * aa / 255, B += Fa[n - y] * aa / 255),
                    w + n >> 1);
                  q[O] += (Fa[n] = r) / 65536;
                  m[O] += (Fa[++n] = B) / 65536;
                }
              }
            }
            w += 768 * da;
          },
          A = $a[c],
          [G, H, h, t, R, U, M, E, K, D, u, v, I, L, ia, ra, la, aa, va, sa] = ab[c],
          wa = 4 * D ** 2;
        z(5513);
        z(4562);
        z(3891);
        $b(5 > ++c ? g : a);
      },
      k = Ob.createBuffer(2, 5362944, 44100),
      q = k.getChannelData(0),
      m = k.getChannelData(1);
    Nb.buffer = k;
    Nb.loop = !0;
    $b(g);
  },
  Ob = new AudioContext(),
  qb = new DOMMatrix(),
  rb = new DOMMatrix(),
  nb = new Float32Array(16),
  Wb = new Float32Array(624),
  Xb = new Float32Array(624),
  fc = new Uint8Array(65536),
  gc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Nb = Ob.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((c, g, k) => (c * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
$b(() => {
  let a = 0;
  const c = () => {
      if (2 == ++a) {
        const q = [new Float32Array(16), new Float32Array(16)],
          m = y => {
            Z.f1s();
            requestAnimationFrame(m);
            var r = (y - (ha || y)) / 1e3;
            if (Ja += r, b += d = ja ? 0 : gb(0.066, r), ha = y, 0 < d) {
              ya();
              Ua && b > Ua && (Ua = 0, h4.innerHTML = "");
              qa = V(qa, f[9].h, 0.2 + 0.3 * l(2 * f[9].h - 1));
              pa = V(pa, La ? V(pa, -9, 1.5) : p(b / 3), 1);
              let O = 1;
              var n = () => sb(qb, e[++O].m);
              r =
                (Ha = mb(f[12].g, f[13].g),
                  Ga = lb(V(Ga, 0, 1), jb(Ga + 60 * d), f[5].g - f[6].h),
                  Da = lb(V(Da, 0, 5), jb(Da + 56 * d), Ha),
                  Ea = lb(V(Ea, 0, 4), jb(Ea + 48 * d), Ha),
                  Tb(n(), -12, 4.2, 40 * pa - 66),
                  n().translateSelf(0, 0, -15).scaleSelf(1, p(1.22 - f[1].g), 1),
                  n().translateSelf(0, 0, 15).scaleSelf(1, p(1.22 - f[2].g), 1),
                  n().translateSelf(
                    0,
                    0.01 < f[3].g ? (5 * Math.cos(1.5 * b) + 2) * f[3].h * (1 - f[2].g) + -15 * (1 - f[3].g) : -500,
                    0,
                  ),
                  gb(f[2].h, 1 - f[4].h));
              y =
                (n().translateSelf(r * Math.sin(0.7 * 3 + 0.7 * b) * 12),
                  n().translateSelf(r * Math.sin(3 + b) * 8.2),
                  n().translateSelf(r * Math.sin(b / 1.5 + 2) * 12),
                  n().translateSelf(9.8 * (1 - r)),
                  p(1 - 5 * r) * mb(f[4].g, f[5].g));
              r =
                (n().translateSelf(0, y * Math.sin(1.35 * b) * 4),
                  n().translateSelf(0, 0, y * Math.sin(0.9 * b) * 8),
                  n().translateSelf(0, -6.5 * f[4].h),
                  n().translateSelf(-75, (1 - f[5].h) * (1 - f[6].g) * 3, 55).rotateSelf(180 * (1 - f[5].h) + Ga, 0),
                  n().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, p(1.1 - f[6].g), 1),
                  mb(f[7].h, f[6].h));
              y =
                (n().translateSelf(0, 3.5 * (1 - hb(f[6].g, f[7].g)) + r * Math.sin(b) * 5),
                  n().translateSelf(0, r * Math.sin(b + 3) * 6, 6 * Math.sin(0.6 * b + 1) * r),
                  n().translateSelf(0, -7.3 * f[7].h),
                  Tb(n(), -123, 1.4, 55 + -65 * qa),
                  mb(f[10].g, f[11].g));
              r =
                (n().translateSelf(0, -2, y * l(Math.sin(1.1 * b)) * -8.5 + 10),
                  n().translateSelf(0, -2, y * l(Math.sin(2.1 * b)) * -8.5 + 10),
                  (1 - f[10].g) * (1 - y));
              y = (n().translateSelf(0, -2, -8.5 * hb(r, y * l(Math.sin(1.5 * b))) + 10), mb(f[8].h, f[12].h));
              for (r = 0; 4 > r; r++) {
                n().translateSelf(
                  (2 < r ? 2 * (1 - y) + y : 0) - 100,
                  y * Math.sin(1.3 * b + 1.7 * r) * (3 + r / 3) + 0.7,
                  115 + (1 & r ? -1 : 1) * (1 - f[8].h) * (1 - f[12].h) * -7
                    + hb(y, 0.05) * Math.cos(1.3 * b + 7 * r) * (4 - 2 * (1 - r / 3)),
                );
              }
              n().translateSelf(2.5 * (1 - y) - 139.7, -3 * (1 - f[8].g) + y * Math.sin(0.8 * b) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * b) * (3 * y + 3), 0);
              n().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - f[12].g);
              n().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + Da);
              n().translateSelf(-65.8, 0.8, 106).rotateSelf(0, Ea);
              n().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - Ea);
              n().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + Ea);
              y = mb(f[13].h, f[14].h);
              for (r = 0; 3 > r; ++r) {
                n().translateSelf(0, (1 - f[13].h) * (1 - f[14].h) * (r ? 0 : 3) + y * Math.sin(1.5 * b + 1.5 * r) * 4);
              }
              n().translateSelf(-2 * Math.sin(b)).rotateSelf(25 * Math.sin(b));
              r = mb(mb((f[14].g + f[14].h) / 2, f[13].h), (f[15].g + f[15].h) / 2);
              n().translateSelf(0, 16 * r, 8.5 * p(2 * r - 1) + 95);
              Ia(n);
              for (n = 0; O >= n; ++n) {
                pb(e[n].m, Wb, n - 1);
              }
              for (n = 0; 13 > n; ++n) {
                Va[n].F(), pb(rb, Xb, n);
              }
              for (n = 0; 16 > n; ++n) {
                f[n].F(), pb(rb, Xb, n + 13), Xb[16 * n + 223] = 1 - f[n].g;
              }
              h();
              Z.b6o(36160, K);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: y, y: r, z: J } = bb;
              Z.uae(h("b"), !1, pb(sb().rotateSelf(0, 180).invertSelf().translateSelf(-y, -r, 0.3 - J)));
              Zb(h("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(h("b"), !1, pb(sb().translateSelf(-y, -r, -J - 0.3)));
              Zb(h("c"), 0, 41);
              Z.f1s();
            }
            ta = 0;
            sb(qb, w);
            ja
              ? w.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : w.rotateSelf(-db, -eb).invertSelf().translateSelf(-Pa, -Qa, -Ta);
            G();
            Z.b6o(36160, M);
            Z.v5y(0, 0, 2048, 2048);
            U[0](54.7 * 1.1);
            U[1](126 * 1.1);
            t();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(t("a"), !1, pb(za));
            Z.uae(t("b"), !1, pb(w));
            Z.uae(t("i"), !1, q[0]);
            Z.uae(t("j"), !1, q[1]);
            Z.ubu(t("k"), Pa, Qa, Ta);
            Zb(t("c"), !ua, 42);
            H();
            Z.ubu(H("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, Ja);
            Z.ubu(H("k"), Pa, Qa, Ta);
            Z.uae(H("b"), !1, pb(sb(w).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, K);
            Z.f1s();
          },
          w = new DOMMatrix(),
          z = new DOMMatrix(),
          A = g;
        var k = Ub(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const G = Vb(
            Ub(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          H = Vb(
            Ub("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          h = Vb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          t = Vb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          R = F(8, () => ({})),
          U = F(2, y => {
            const r = Z.c25();
            return Z.a4v(33984 + y),
              Z.b9j(3553, r),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              n => {
                let J = 0, O = 0, P = 0, fa = 1 / 0, ea = -1 / 0, xa = 1 / 0, B = -1 / 0, S = 1 / 0, ba = -1 / 0;
                Z.fas(36160, 36096, 3553, r, 0);
                Z.c4s(256);
                sb().scale3dSelf(n).multiplySelf(sb(Ba[y], z).multiplySelf(w).invertSelf());
                for (let ca = 0; 8 > ca; ++ca) {
                  const na = R[ca],
                    Aa =
                      (na.x = 4 & ca ? 1 : -1, na.y = 2 & ca ? 1 : -1, na.z = 1 & ca ? 1 : -1, rb.transformPoint(na));
                  J -= na.x = (0 | Aa.x) / n / Aa.w;
                  O -= na.y = (0 | Aa.y) / n / Aa.w;
                  P -= na.z = (0 | Aa.z) / n / Aa.w;
                }
                sb().rotateSelf(298, 139).translateSelf(J / 8, O / 8, P / 8);
                for (n = 0; 8 > n; ++n) {
                  const { x: ca, y: na, z: Aa } = rb.transformPoint(R[n]);
                  fa = gb(fa, ca);
                  ea = hb(ea, ca);
                  xa = gb(xa, na);
                  B = hb(B, na);
                  S = gb(S, Aa);
                  ba = hb(ba, Aa);
                }
                n = 10 + y;
                S *= 0 > S ? n : 1 / n;
                ba *= 0 < ba ? n : 1 / n;
                Z.uae(
                  G("b"),
                  !1,
                  pb(
                    sb(qb, z).scaleSelf(2 / (ea - fa), 2 / (B - xa), 2 / (S - ba)).translateSelf(
                      (ea + fa) / -2,
                      (B + xa) / -2,
                      (S + ba) / 2,
                    ).multiplySelf(rb),
                    q[y],
                  ),
                );
                Zb(G("c"), !ua, 42);
              };
          }),
          M = Z.c5w();
        k = Z.c25();
        const E = Z.c3z(), K = Z.c5w();
        h();
        Z.uae(h("a"), !1, pb(Mb(1e-4, 2, 1.4, 0.4)));
        t();
        Z.ubh(t("q"), 2);
        Z.ubh(t("h"), 1);
        Z.ubh(t("g"), 0);
        H();
        Z.ubh(H("q"), 2);
        Z.b6o(36160, M);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, K);
        Z.bb1(36161, E);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, E);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, A);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Pb)();
        let D, u, v, I, L, ia, ra, la, aa, va, sa, wa, da, ka, oa = 1, ma = 2, Xa = 15;
        const Ra = () => (ma ? f[Ma] : e[u && 1 === e[u].G && u || 0]).m,
          ob = y => {
            const { x: r, y: n, z: J } = 1 < ma
              ? sb(f[Ma].m).multiplySelf(f[Ma].I).transformPoint({ x: 0, y: Ma || 0.9 < pa ? 15 : 1, z: -2.4 })
              : Ra().transformPoint(fb);
            y && (ra = (r - bb.x) / d, la = (J - bb.z) / d);
            bb.x = r;
            bb.y = n;
            bb.z = J;
          },
          Fa = (y, r, n) => {
            sb(Ra()).invertSelf();
            rb.m41 = rb.m42 = rb.m43 = 0;
            y = rb.transformPoint({ x: y, z: n, w: 0 });
            fb.x += y.x;
            fb.y += r;
            fb.z += y.z;
            ob();
          },
          Hb = () => {
            var y = 0, r = 0, n = 0;
            let J = 0;
            var O = -1;
            let P = 0, fa = 0;
            for (var ea = 0; 36 > ea; ++ea) {
              var xa = 512 * ea;
              for (var B = 96; 416 > B; B += 4) {
                for (var S = 0; 2 > S; ++S) {
                  var ba = fc[xa + B + S], ca = fc[xa + B + S + 2];
                  ba > J && (J = ba);
                  ba + ca && (0 > O || O === ea) && (O = ea, ca === D ? ++y : r && r !== ca || (r = ca, ++n));
                }
              }
            }
            D = 0 > O ? 0 : n > 2 * y ? r : D;
            for (y = 36; 128 > y; y += 1) {
              ea =
                O =
                n =
                r =
                  0;
              xa = 512 * y;
              for (B = 0; 128 > B; B += 1) {
                for (S = xa + 4 * B, ba = 0; 2 > ba; ++ba) {
                  ca = fc[S + ba];
                  const na = fc[S + ba + 2];
                  (ba ? 64 < B : 64 > B) ? r = hb(r, ca) : n = hb(n, ca);
                  ba ? ea = hb(ea, na) : O = hb(O, na);
                }
              }
              l(n - r) > l(P) && (P = n - r);
              l(ea - O) > l(fa) && (fa = ea - O);
            }
            va = p(1 - 0.015 * hb(l(P), l(fa)));
            Fa(P / 255, J / 255, fa / 255);
          },
          Sa = (y, r, n, J) => lb(y, r, oa || (p(l(r - y) ** 0.5 - n) + 1 / 7) * (1 - Math.exp(-(1.5 * J) * d)));
        Ia = y => {
          ob(D);
          Z.r9r(0, 0, 128, 128, 6408, 5121, fc);
          NO_INLINE(Hb)();
          !ma && D === u || (u = D, r = sb(Ra()).invertSelf().transformPoint(bb), fb.x = r.x, fb.y = r.y, fb.z = r.z);
          ma = ma && (D ? 0 : 1);
          var { x: r, y: n, z: J } = bb;
          const O =
            (n < (-20 > r || 109 > J ? -25 : -9) && (ma = 2),
              1 === D && (f[9].i = -15 > r && 0 > J ? 1 : 0),
              sa = lb(V(sa, n, 2), n, ma || 8 * l(sa - n)),
              da = Sa(da, sa, 2, 1),
              wa = Sa(wa, r, 0.5, 1),
              ka = Sa(ka, J, 0.5, 1),
              ia = V(ia, Ha * (27 < D && 32 > D), 2),
              ua
                ? (n = ma + (1 - Math.exp(-18 * d)),
                  Pa = lb(Pa, r, n),
                  Qa = lb(Qa, sa + 1.5, n),
                  Ta = lb(Ta, J, n),
                  eb = jb(eb))
                : (Ta = Sa(Ta, ka + -18 + 5 * ia, 1, 2 + ia),
                  Qa = Sa(Qa, hb(da + p((-60 - J) / 8, 0, 20) + 13 + 9 * ia, 6), 4, 2),
                  Pa = Sa(Pa, wa, 1, 2 + ia),
                  n = gb(-6, -l(ka - Ta)),
                  P = wa - Pa,
                  eb = kb(eb, 90 - jb(Math.atan2(n, P) / cb), oa + (1 - Math.exp(-10 * d))),
                  db = kb(db, 90 - Math.atan2(Math.hypot(n, P), Qa - da) / cb, oa + (1 - Math.exp(-10 * d)))),
              db = p(db, -87, 87),
              oa = 0,
              y().translateSelf(r, sa, J).rotateSelf(0, I));
          for (P = 0; 2 > P; ++P) {
            const fa = 9.1 * b - Math.PI * P;
            sb(O, y()).translateSelf(0, L * p(0.45 * Math.sin(fa - Math.PI / 2))).rotateSelf(
              L * Math.sin(fa) * 0.25 / cb,
              0,
            );
          }
          n = p(Na, -1);
          var P = p(Oa, -1);
          r = ib(Math.hypot(n, P) ** 0.5, 0.1);
          J = Math.atan2(n, P);
          n = r * l(n) * Math.sin(J);
          P = r * l(P) * Math.cos(J);
          r && (v = 90 - J / cb);
          L = V(L, r, 10);
          I = kb(I, v, 1 - Math.exp(-8 * d));
          Xa = D ? 5 : V(Xa, ma ? 10 : 19, 2.2);
          ra = D || ma ? 0 : V(ra, 0, 3);
          la = D || ma ? 0 : V(la, 0, 3);
          aa = ma ? 0 : V(aa, D ? 7 * p(2 * r) * va : 0, D ? 9 : 1);
          J = ua ? (180 + eb) * cb : 0;
          Fa(
            d * (ra + aa * (P * Math.cos(J) - n * Math.sin(J))),
            -Xa * d,
            d * (la + aa * (P * Math.sin(J) + n * Math.cos(J))),
          );
        };
        requestAnimationFrame(m);
      }
    },
    g = new Image();
  g.onload = g.onerror = c;
  g.src = gc;
  NO_INLINE(ec)(() => {
    $b(() => {
      let m, w = 0;
      const z = [],
        A = [],
        G = [],
        H = [],
        h = E => {
          let { x: K, y: D, z: u } = m[E], v = (M[0] = K, M[1] = D, M[2] = u, E = "" + (m.C ? U : t), R.get(E));
          return void 0 !== v
            ? (K = 3 * v, H[K] = (H[K++] + t[5]) / 2, H[K] = (H[K++] + t[6]) / 2, H[K] = (H[K] + t[7]) / 2)
            : (R.set(E, v = R.size), A.push(K, D, u, M[3]), G.push(t[4]), H.push(t[5], t[6], t[7])),
            v;
        },
        t = new Int32Array(8),
        R = new Map(),
        U = new Int32Array(t.buffer, 0, 5),
        M = new Float32Array(t.buffer);
      for (const E of e) {
        for (m of (M[3] = 40 === E.H ? -14 : E.G && E.H, E.o)) {
          const { x: K, y: D, z: u } = Ab(m);
          t[4] = 0 | m.u;
          t[5] = 32767 * K;
          t[6] = 32767 * D;
          t[7] = 32767 * u;
          for (let v = 2, I = h(0), L = h(1); m.length > v; ++v) {
            z.push(I, L, L = h(v));
          }
        }
        E.o = null;
        E.s = w;
        E.D = w = z.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(A), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(H), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(G), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(z), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      $b(c);
      try {
        const [E, K, D, u, v] = JSON.parse(localStorage.DanteSP22);
        f.map((I, L) => I.g = I.h = I.i = L ? 0 | E[L] : 0);
        Va.map((I, L) => I.i = 0 | K[L]);
        Ma = D;
        qa = v;
        b = u;
        d = 0;
      } catch {
      }
      Kb();
      pa = p(Ma);
    });
    const k = F(11, m => x(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10)),
      q = F(10, m => xb(vb(wb(18), k[m]).reverse(), vb(wb(18), k[m + 1]), 1)).flat();
    Y(() => X([Wa.slice(1)], x(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const m = (h, t, R) =>
          Y(() => {
            Wa.map(({ x: U, z: M }) => {
              X(Q(11, 1), x(4 * U, 4, R + 4 * M).scale(0.8, 3, 0.8), W(0.5, 0.3, 0.7, 0.6));
              X(Q(), x(4 * U, 7, R + 4 * M).scale(1, 0.3), W(0.5, 0.5, 0.5, 0.3));
            });
            X(T(
              N(Q(), x(0, 0, R).scale(5, 1, 5), W(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(U => N(Q(), x(5 * U, 0.2, R).rotate(-30 * U).scale(4, 1, 2), W(0.8, 0.8, 0.8, 0.3))),
            ));
            X(Q(), x(0, -3, R).scale(8, 2, 8), W(0.4, 0.4, 0.4, 0.3));
          }),
        w = h =>
          T(
            N(Q(), x(0, -h / 2).scale(6, h - 1, 2.2)),
            N(Q(), x(0, -h / 2 - 6).scale(4, h - 3, 4)),
            N(Q(32, 1), x(0, h / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        z = T(
          N(Q(30, 1, 1.15, 1), x(0, -3).scale(3.5, 1, 3.5), W(0.7, 0.4, 0.25, 0.7)),
          N(Q(30, 1, 1.3, 1), x(0, -2.5).scale(2.6, 1, 3), W(0.7, 0.4, 0.25, 0.2)),
          N(Q(), x(4, -1.2).scale3d(2), W(0.7, 0.4, 0.25, 0.3)),
        ),
        A = F(7, h => N(Q(6, 1), x(4 * (h / 6 - 0.5), 3).scale(0.2, 3, 0.2), W(0.3, 0.3, 0.38))).flat(),
        G = (Y(() => {
          X(z);
          Rb(x(0, -3, 4));
        }),
          Rb(x(-5.4, 1.5, -19).rotate(0, -90)),
          Sb(x(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Sb(x(0, 2.8), [5, 10, 3], [-5, 10, 3], ...wb(18).map(({ x: h, z: t }) => [7 * h, 10 * t, 4.5 - 2 * l(h)])),
          X(Q(), x(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), W(0.8, 0.8, 0.8, 0.2)),
          Wa.map(({ x: h, z: t }) => X(Q(6), x(3 * h, 3, 15 * t).scale(0.7, 4, 0.7), W(0.6, 0.3, 0.3, 0.4))),
          X(Q(), x(0, 0, -23).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)),
          X(Q(), x(0, 0, 22).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map(h => {
            X(Q(), x(0, 6.3, h).scale(4, 0.3, 1), W(0.3, 0.3, 0.3, 0.4));
            X(Q(), x(0, 1, h).scale(3, 0.2, 0.35), W(0.5, 0.5, 0.5, 0.3));
            Y(() => {
              X(A);
            });
          }),
          F(5, h =>
            F(2, t =>
              X(
                q,
                x(18.5 * (t - 0.5), 0, 4.8 * h - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                W(1, 1, 0.8, 0.2),
              ))),
          X(Q(), x(3, 1.5, -20).scale(0.5, 2, 5), W(0.7, 0.7, 0.7, 0.2)),
          X(Q(), x(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), W(0.75, 0.75, 0.75, 0.2)),
          X(Q(5), x(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), W(0.6, 0.3, 0.3, 0.4)),
          X(Q(), tb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), W(0.8, 0.2, 0.2, 0.5)),
          X(T(
            Jb(
              N(Q(6, 0, 0, 0.3), x(8, -3, -4).scale(13, 1, 13), W(0.7, 0.7, 0.7, 0.2)),
              N(Q(6), x(0, -8).scale(9, 8, 8), W(0.4, 0.2, 0.5, 0.5)),
              N(Q(6, 0, 0, 0.3), x(0, -0.92).scale(13, 2, 13), W(0.8, 0.8, 0.8, 0.2)),
            ),
            N(Q(5), C(5, 30, 5), W(0.4, 0.2, 0.6, 0.5)),
            N(Q(5, 0, 1.5), x(0, 1).scale(4.5, 0.3, 4.5), W(0.7, 0.5, 0.9, 0.2)),
            N(Q(), tb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), W(0.5, 0.5, 0.5, 0.5)),
            N(Q(6), x(15, -1.5, 4).scale(3.5, 1, 3.5), W(0.5, 0.5, 0.5, 0.5)),
          )),
          Y(() => {
            X(Q(5), x(0, -0.2).scale(5, 1, 5), W(0.6, 0.65, 0.7, 0.3));
            Rb(x(0, 1.2));
          }),
          Rb(x(15, -2, 4)),
          m(0, 0, 35),
          m(0, 0, 55),
          Y(() => {
            X(
              T(
                Jb(
                  N(Q(), C(1.5, 1, 5), W(0.9, 0.9, 0.9, 0.2)),
                  N(Q(6), C(4, 1, 5), W(0.9, 0.9, 0.9, 0.2)),
                  N(Q(), x(0, -2).scale(2, 3.2, 1.9), W(0.3, 0.8, 0.5, 0.5)),
                  N(Q(16, 1, 0, 4), C(1, 1, 1.5).rotate(0, 90), W(0.9, 0.9, 0.9, 0.2)),
                ),
                N(Q(), C(1.3, 10, 1.3), W(0.2, 0.7, 0.4, 0.6)),
              ),
              x(0, 0, 45),
            );
            Sb(x(0, 2.8, 45), [0, 0, 4.5]);
          }),
          X(Q(), x(-18.65, -3, 55).scale(2.45, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)),
          Y(() => {
            X(Q(3), x(-23, -1.7, 55.8).scale(5, 0.7, 8.3), W(0.3, 0.6, 0.6, 0.2));
            X(Q(8), x(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), W(0.8, 0.8, 0.8, 0.2));
            X(Q(), x(-23, -3, 55).scale(5.2, 1.7, 3), W(0.5, 0.5, 0.5, 0.3));
            X(Q(), x(-23, -2.2, 62).scale(3, 1, 4), W(0.5, 0.5, 0.5, 0.3));
            Rb(x(-23, -0.5, 66.5));
          }),
          Y(() => {
            X(Q(), x(-22.55, -3, 55).scale(1.45, 1.4, 2.7), W(0.7, 0.7, 0.7, 0.2));
            X(T(N(Q(), C(3, 1.4, 2.7)), N(Q(), C(1.2, 8, 1.2))), x(-33, -3, 55), W(0.7, 0.7, 0.7, 0.2));
          }),
          Y(() => {
            X(T(
              N(Q(), x(-27, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)),
              N(Q(), x(-27, -3, 55).scale(1, 3), W(0.9, 0.9, 0.9, 0.2)),
            ));
            X(Q(), x(-39, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2));
          }),
          Y(() => {
            X(Q(6), x(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), W(0.7, 0.7, 0.7, 0.4));
          }),
          Rb(x(-55, -1.1, 46).rotate(0, 90)),
          X(Q(6), x(-61.3, -2.4, 49).scale(3, 1, 5), W(0.4, 0.6, 0.6, 0.3)),
          X(Q(7), x(-57, -2.6, 46).scale(4, 1, 4), W(0.8, 0.8, 0.8, 0.3)),
          [
            ...N(Q(), x(0, -3).scale(11, 1.4, 3), W(0.9, 0.9, 0.9, 0.2)),
            ...T(
              N(Q(6), tb(90).scale(6, 8, 6), W(0.3, 0.6, 0.6, 0.3)),
              N(Q(4, 0, 0.01), x(0, 6).scale(12, 2, 0.75).rotate(0, 45), W(0.3, 0.6, 0.6, 0.3)),
              N(Q(6), tb(90).scale(5, 12, 5), W(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(h => N(Q(5), x(h, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), W(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        H = (X(G, x(-53, 0, 55)),
          Y(() => {
            X(G);
          }, 2),
          X(Q(), x(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), W(0.7, 0.7, 0.7, 0.2)),
          X(Q(3, 0, -0.5), x(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), W(0.8, 0.8, 0.8, 0.2)),
          X(T(
            Jb(
              N(Q(), x(-100, -2.4, 55).scale(8, 0.9, 8), W(0.8, 0.8, 0.8, 0.2)),
              N(Q(), x(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), W(0.8, 0.8, 0.8, 0.2)),
              N(Q(), x(-100, -2.6, 70).scale(3, 1.1, 7), W(0.8, 0.8, 0.8, 0.2)),
              N(Q(), x(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), W(0.8, 0.8, 0.8, 0.2)),
              N(Q(6), x(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), W(0.6, 0.6, 0.6, 0.3)),
              N(Q(), x(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), W(0.8, 0.8, 0.8, 0.2)),
              N(Q(), x(-100, 0.42, 92).scale(3, 1.1, 4.1), W(0.8, 0.8, 0.8, 0.2)),
            ),
            N(Q(8), x(-100, -1, 55).scale(7, 0.9, 7), W(0.3, 0.3, 0.3, 0.4)),
            N(Q(8), x(-100, -2, 55).scale(4, 0.3, 4), W(0.4, 0.4, 0.4, 0.5)),
            N(Q(8, 0, -3.1), x(-100, -3, 55).scale(0.4, 1, 0.4), W(0.4, 0.4, 0.4, 0.5)),
          )),
          Sb(x(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Sb(x(-89, 0.2, 80), [0, 0, 6]),
          X(T(
            N(Q(), x(-100, 1, 63).scale(7.5, 4), W(0.5, 0.5, 0.5, 0.4)),
            N(Q(), x(-100, 0, 70).scale(2, 2, 10), W(0.5, 0.5, 0.5, 0.4)),
            N(Q(20, 1), x(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), W(0.5, 0.5, 0.5, 0.4)),
          )),
          Y(() => {
            X(A);
          }),
          Wa.map(({ x: h, z: t }) => {
            X(Q(6), x(7 * h - 100, -3, 7 * t + 55).scale(1, 8.1), W(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(R => X(Q(6), x(7 * h - 100, R, 7 * t + 55).scale(1.3, 0.5, 1.3), W(0.4, 0.2, 0.2, 0.8)));
          }),
          F(7, h => {
            X(
              Q((23 * h + 1) % 5 + 5, 0, 0.5),
              x(5 * Math.sin(h) - 101 + h, -2.3 - h, 44.9 - 2.8 * h).scaleSelf(5 + h / 2, 1 + h / 6, 5 + h / 3),
              W(0.5 - h / 17, 0.5 - (1 & h) / 9, 0.6, 0.3),
            );
          }),
          X(Q(), x(-87, -9.5, 24).scale(7, 1, 3), W(0.4, 0.5, 0.6, 0.4)),
          X(Q(4), x(-86, -9.2, 27).scale(5, 1, 5), W(0.5, 0.6, 0.7, 0.3)),
          X(Q(12, 1), x(-86, -9, 31).scale(1.5, 1, 1.5), W(0.3, 0.3, 0.4, 0.1)),
          Rb(x(-86, -7.5, 31)),
          Y(() => {
            [0, 12, 24].map(h =>
              X(Q(), x(h - 76.9, h / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), W(0.2, 0.5, 0.6, 0.2))
            );
          }),
          Y(() => {
            [6, 18].map(h =>
              X(Q(), x(h - 76.9, h / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), W(0.1, 0.4, 0.5, 0.2))
            );
          }),
          X(
            T(
              Jb(
                N(Q(5), x(0, 0, -7).scale(2, 1.2, 2), W(0.2, 0.4, 0.7, 0.3)),
                N(Q(5), C(9, 1.2, 9), W(0, 0.2, 0.3, 0.5)),
                N(Q(), C(11, 1, 13), W(0.3, 0.4, 0.6, 0.3)),
              ),
              N(Q(5), C(5.4, 5, 5.4), W(0, 0.2, 0.3, 0.5)),
            ),
            x(-38.9, -11.3, 17),
          ),
          Rb(x(-38.9, -9.6, 10)),
          Y(() => {
            X(
              T(
                Jb(
                  N(Q(5), x(0, 2).scale(5, 7, 5).skewY(8), W(0.2, 0.4, 0.5, 0.5)),
                  N(Q(5), x(0, 6).scale(1.1, 7, 1.1).skewY(-8), W(0.25, 0.35, 0.5, 0.5)),
                  N(Q(5), x(0, 9).scale(0.6, 7, 0.6).skewY(8), W(0.35, 0.3, 0.5, 0.5)),
                ),
                N(Q(5), C(4, 8, 4), W(0.2, 0.4, 0.5, 0.5)),
                N(Q(5), x(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), W(0.2, 0.4, 0.5, 0.5)),
              ),
              x(-38.9, -11.3, 17),
            );
            Sb(x(-39.1, -0.6, 17).rotate(11), ...wb(15).map(({ x: h, z: t }) => [3 * h, 3 * t, 1.2]));
          }),
          Wa.map(({ x: h, z: t }) => {
            X(Q(14, 1), x(9 * h - 38.9, -7.3, 11 * t + 17).scale(1, 4), W(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(R =>
              X(Q(17, 1), x(9 * h - 38.9, R - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), W(0.6, 0.6, 0.6, 0.3))
            );
          }),
          X(
            T(
              Jb(
                N(Q(6), x(0, 0, -36).scale(15, 1.2, 15), W(0.7, 0.7, 0.7, 0.3)),
                N(Q(), x(0, 0, -18).scale(4, 1.2, 6), W(0.45, 0.4, 0.6, 0.3)),
              ),
              ...F(6, h =>
                F(6, t =>
                  N(
                    Q(6),
                    x(4.6 * t - 12 + 2 * (1 & h), 0, 4.6 * h - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                    W(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            x(-38.9, -11.3, 17),
          ),
          Sb(x(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          X(Q(5), x(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), W(0.8, 0.1, 0.25, 0.4)),
          Rb(x(-84, -0.5, 85).rotate(0, 45)),
          Y(() => {
            X(z);
            Rb(x(0, -3, -4).rotate(0, 180));
          }),
          T(
            N(Q(), x(0, -0.5, 1).scale(1.15, 1.2, 6.5), W(0.25, 0.25, 0.35, 0.3)),
            N(Q(3), x(0, 0, -5.5).scale(3, 2), W(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(h => N(Q(), x(h, -0.5, 1).scale(0.14, 0.3, 6.5), W(0.7, 0.2, 0, 0.3))),
          ));
      Y(() => {
        F(2, h => X(H, x(9 * h - 110 + (1 & h), 1.7, -12)));
      });
      Y(() => {
        F(2, h => X(H, x(9 * (h + 2) - 110 + (1 & h), 1.7, -12)));
      });
      Y(() => {
        F(3, h => X(H, x(9 * h - 106, 1.7, -12)));
      });
      X(
        T(
          Jb(N(Q(), x(26.5, -1.6, 10).scale(20, 2.08, 3)), N(Q(), x(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...F(4, h => N(Q(), x(13 + 9 * h + (1 & h), -0.8, 9).scale(1.35, 1.35, 9))),
          ...F(3, h => N(Q(), x(17 + 9 * h, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        x(-123, 0, -12),
        W(0.5, 0.5, 0.6, 0.2),
      );
      Rb(x(-116, -1.4, -18).rotate(0, 180));
      X(Q(), x(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), W(0.8, 0.8, 0.8, 0.2));
      X(Q(6), x(-116, -2.6, -16.5).scale(3.2, 0.8, 3), W(0.6, 0.5, 0.7, 0.2));
      X(Q(), x(-115.5, -17, -12).scale(0.5, 15, 2.2), W(0.6, 0.6, 0.6, 0.3));
      X(Q(8), x(-114, -17, -2).scale(2, 15, 2), W(0.6, 0.6, 0.6, 0.3));
      X(Q(8), x(-79, -17, -2).scale(2, 15, 2), W(1, 1, 1, 0.3));
      X(Q(), x(-77, -17, -50.5).scale(2.2, 15, 0.5), W(0.6, 0.6, 0.6, 0.3));
      F(3, h => {
        X(w(16), x(12 * h - 109, -9, -12), W(0.6, 0.6, 0.6, 0.3));
        X(w(16), x(-77, -9, -12 * h - 20).rotate(0, 90), W(0.6, 0.6, 0.6, 0.3));
      });
      X(T(
        N(Q(12), x(-77, -14.5, -12).scale(4, 17.5, 4), W(0.7, 0.7, 0.7, 0.2)),
        N(Q(), x(-79, 0.1, -12).scale(3.5, 2, 1.3), W(0.4, 0.5, 0.6, 0.2)),
        N(Q(), x(-77, 0.1, -14).scale(1.5, 2, 2), W(0.4, 0.5, 0.6, 0.2)),
        N(Q(12), x(-77, 3.1, -12).scale(3, 5, 3), W(0.4, 0.5, 0.6, 0.2)),
      ));
      X(Q(), x(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), W(0.6, 0.6, 0.6, 0.3));
      X(Q(9), x(-98, -18.4, -40).scale(2.5, 13.5, 2.5), W(0.5, 0.5, 0.5, 0.3));
      X(T(
        N(Q(), x(-93, -5.8, -40).scale(9, 1, 5), W(0.8, 0.8, 0.8, 0.1)),
        N(Q(9), x(-98, -5.8, -40).scale(3, 8, 3), W(0.7, 0.7, 0.7, 0.2)),
      ));
      Rb(x(-98, -4.4, -40).rotate(0, 90));
      Sb(x(-115, 0.2, -12), [0, 0, 3.5]);
      Sb(x(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      X(T(
        Jb(
          N(Q(6, 0, 0, 0.6), x(-100, 0.7, 105.5).scale(8, 1, 11), W(0.7, 0.7, 0.7, 0.2)),
          N(Q(), x(-101.5, 0.7, 93.5).scale(10.5, 1, 2), W(0.7, 0.7, 0.7, 0.2)),
        ),
        N(Q(5), x(-100, 0.7, 113).scale(4, 3, 4), W(0.7, 0.7, 0.7, 0.2)),
      ));
      F(4, h =>
        Y(() => {
          X(
            Q(6),
            x(-14.6 - 4.8 * h - (2 < h ? 2 : 0), -h / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
            W(0.5 - h / 8, h / 12 + 0.5, 0.7, 0.3),
          );
        }));
      Y(() => {
        X(T(N(Q(10), C(6, 2, 6), W(0.1, 0.6, 0.5, 0.3)), N(Q(10), C(3.3, 6, 3.3), W(0.1, 0.6, 0.5, 0.5))));
        X(Q(15, 1), x(-7.5).rotate(0, 90).scale(3, 2.3, 3), W(0.4, 0.4, 0.4, 0.3));
        X(Q(10), x(-7.5).rotate(0, 90).scale(2, 2.5, 2), W(0.3, 0.8, 0.7, 0.3));
        X(Q(5), x(-7.5).rotate(0, 90).scale(1, 3), W(0.5, 0.5, 0.5, 0.5));
        Rb(x(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(h => X(q, tb(90 * h, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), W(1, 1, 0.8, 0.2)));
        Sb(x(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      Y(() => {
        X(A);
      });
      [-1, 1].map(h => {
        [7.2, 1.5].map(t => X(Q(15, 1), x(-7.5 * h - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), W(0.5, 0.24, 0.2, 0.4)));
        X(q, x(-5 * h - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * h - 90), W(1, 1, 0.8));
        X(Q(12, 1), x(-7.5 * h - 100, 3.7, 96).scale(0.8, 4, 0.8), W(0.6, 0.24, 0.2, 0.5));
        X(
          T(
            N(Q(), x(-4 * h, 3.5, -0.5).scale(4, 4, 0.7), W(0.5, 0.5, 0.5, 0.4)),
            N(Q(), C(3, 3, 10), W(0.6, 0.24, 0.2, 0.5)),
            N(Q(28, 1), x(0, 3, -5).scale(3, 4, 10).rotate(90, 0), W(0.6, 0.24, 0.2, 0.5)),
            N(Q(5), x(-5.3 * h, 7).rotate(90, 0).scale(1.7, 5, 1.7), W(0.6, 0.24, 0.2, 0.5)),
            N(Q(5), x(-5.3 * h, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), W(0.6, 0.24, 0.2, 0.5)),
          ),
          x(h - 100, 0.7, 97),
        );
      });
      X(T(
        N(Q(), x(-82.07, 0.8, 106).scale(11, 0.9, 2.2), W(0.7, 0.7, 0.7, 0.1)),
        N(Q(45, 1), x(-81, 0.7, 106).scale3d(7.7), W(0.7, 0.7, 0.7, 0.1)),
      ));
      Y(() => {
        X(T(
          N(Q(45, 1), C(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)),
          N(Q(), x(0, 0, -5.5).scale(1.5, 3, 2.7), W(0.45, 0.45, 0.45, 0.2)),
        ));
        X(Q(8), x(0, 2).scale(3, 1.5, 3).rotate(0, 22), W(0.7, 0.7, 0.7, 0.1));
        X(Q(5), x(0, 2).scale(1, 2), W(0.3, 0.3, 0.3, 0.2));
        Sb(x(0, 3), ...wb(14).map(({ x: h, z: t }) => [5.6 * h, 5.6 * t, 2]));
      });
      Y(() => {
        [-1, 1].map(h =>
          X(q, tb(0, 90).translate(-5 * h, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), W(1, 1, 0.8))
        );
        X(T(N(Q(28, 1), x(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3)), N(Q(), C(9, 5, 2), W(0.3, 0, 0, 0.3))));
        X(N(Q(28, 1), C(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(N(Q(5), x(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(T(
          N(Q(28, 1), x(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3)),
          N(Q(), x(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)),
          N(Q(), x(0, 0, 7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),
        ));
        X(N(Q(28, 1), C(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(N(Q(5), x(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(T(
          N(Q(28, 1), x(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3)),
          N(Q(), x(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)),
          N(Q(), x(0, 0, -7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),
        ));
        X(N(Q(28, 1), C(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(N(Q(5), x(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)));
      });
      X(Q(), x(-58, 1, 106).scale(2, 0.65, 2), W(0.7, 0.7, 0.7, 0.2));
      X(Q(), x(-50.7, 1, 99).scale(2, 0.65, 1), W(0.7, 0.7, 0.7, 0.2));
      X(Q(), x(-42, 0.4, 91).scale(5, 1, 2.5), W(0.7, 0.7, 0.7, 0.3));
      X(Q(), x(-34.2, 0.4, 91).scale(3, 1, 3), W(0.7, 0.7, 0.7, 0.3));
      Rb(x(-34, 2.7, 96).rotate(-12, 0));
      X(Q(5), x(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), W(0.2, 0.5, 0.5, 0.6));
      [W(0.1, 0.55, 0.45, 0.2), W(0.2, 0.5, 0.5, 0.3), W(0.3, 0.45, 0.55, 0.4)].map((h, t) =>
        Y(() => {
          X(Q(), x(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), h);
          2 === t && X(Q(), x(-29.1, 0.4, 91).scale(2.1, 1, 3), W(0.7, 0.7, 0.7, 0.3));
          1 === t && X(Q(), x(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), W(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(h => X(q, x(-8 * h, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), W(1, 1, 0.8)));
      F(
        3,
        h =>
          X(
            w(24.7 - 0.7 * (1 & h)),
            x(6 * h - 6, 4 - (1 & h), 111 - 0.2 * (1 & h)),
            1 & h ? W(0.5, 0.5, 0.5, 0.3) : W(0.35, 0.35, 0.35, 0.5),
          ),
      );
      X(T(
        N(Q(6, 0, 0, 0.3), x(0, -0.92, 95).scale(14, 2, 14), W(0.8, 0.8, 0.8, 0.2)),
        N(Q(5), x(0, 0, 95).scale3d(6), W(0.3, 0.3, 0.3, 0.5)),
      ));
      Rb(x(0, 1.7, 82).rotate(0, 180));
      X(Q(5), x(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), W(0.5, 0.3, 0.3, 0.4));
      X(Q(6), x(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), W(0.5, 0.6, 0.7, 0.3));
      X(Q(), x(0, 16, 129).scale(1.5, 1, 2), W(0.5, 0.6, 0.7, 0.3));
      X(Q(7), x(0, 16.2, 133).scale(5, 1, 5), W(0.4, 0.5, 0.6, 0.4));
      X(T(
        Jb(
          N(Q(), x(0, 16, 110.5).scale(12, 1, 3), W(0.5, 0.3, 0.3, 0.4)),
          N(Q(), x(0, 16, 111).scale(3, 1, 3.8), W(0.5, 0.3, 0.3, 0.4)),
        ),
        N(Q(5), x(0, 16, 103.5).scale(5.5, 5, 5.5), W(0.5, 0.3, 0.3, 0.4)),
      ));
      Y(() => {
        X(Q(3), x(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), W(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(h => {
          X(Q(6), x(0, 16, h + 95).scale(3, 1, 2.3).rotate(0, 90), W(0.7, 0.7, 0.7, 0.4));
          X(Q(), x(0, 6.2, h + 95).scale(0.5, 11, 0.5), W(0.5, 0.3, 0.3, 0.4));
        });
      });
      Y(() => {
        X(Q(5), C(5, 1.1, 5), W(0.5, 0.3, 0.3, 0.4));
        X(Q(5), C(5.5, 0.9, 5.5), W(0.25, 0.25, 0.25, 0.4));
        Rb(x(0, 1.5, -1).rotate(0, 180));
      });
      Sb(x(0, 3, 95), ...wb(9).map(({ x: h, z: t }) => [9 * h, 9 * t, 4]));
      Sb(x(0, 19, 134), [0, 0, 3.5]);
    });
    Y(() => {
      X(yb(20), x(0, 1).scale3d(0.5), W(1, 0.3, 0.4));
      X(yb(30), C(0.65, 0.8, 0.55), W(1, 0.3, 0.4));
      X(Q(), x(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), W(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        X(q, tb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), W(1, 1, 0.8));
        X(
          N(T(Q(15, 1), N(Q(), x(0, 0, 1).scale(2, 2, 0.5))), tb(-90, 0).scale(0.1, 0.05, 0.1), W(0.3, 0.3, 0.3)),
          x(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        Y(() => {
          X(Q(20, 1), x(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), W(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(Q(6, 1), C(0.13, 1.4, 0.13), W(0.3, 0.3, 0.5, 0.1));
      X(Q(10), x(0, 1).scale(0.21, 0.3, 0.21), W(1, 0.5, 0.2));
      X(Q(3), x(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), W(0.2, 0.2, 0.2, 0.1));
    }, 0);
    Y(() => {
      X(Q(6).slice(0, -1), C(0.77, 1, 0.77), W(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(
        yb(30, 24, (m, w, z) => {
          const A = w / 24, G = m * Math.PI * 2 / 30, H = Math.sin(A ** 0.6 * Math.PI / 2);
          m = A * A * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < w
            ? { x: z.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(G) * H,
              y: Math.cos(A * Math.PI) - A - m,
              z: Math.sin(G) * H + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        C(0.7, 0.7, 0.7),
        W(1, 1, 1),
      );
      [-1, 1].map(m => X(yb(12), x(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
