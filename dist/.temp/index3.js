let aa,
  ba,
  ca,
  da,
  fa,
  ha,
  na,
  oa,
  pa,
  qa,
  ra,
  sa,
  ta,
  ua,
  va,
  b = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 1,
  d = 0.066;
const Ia = [],
  e = [],
  Ja = [],
  Ka = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  La = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ma = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Ra = { x: 0, y: 0, z: 0 },
  Sa = Math.PI / 180;
var Ta = 0, Ua = 180;
const h = NO_INLINE(a => 0 > a ? -a : a),
  Va = NO_INLINE((a, c) => a < c ? a : c),
  Wa = NO_INLINE((a, c) => c < a ? a : c),
  Xa = (a, c) => h(a) > c ? a : 0,
  Ya = (a, c = 0, g = 1) => a < c ? c : g < a ? g : a,
  Za = a => Math.atan2(Math.sin(a * Sa), Math.cos(a * Sa)) / Sa,
  $a = (a, c, g) => a + (2 * (c = (c - a) % 360) % 360 - c) * Ya(g) || 0,
  ab = (a, c, g) => (0 < g ? 1 > g ? a + (c - a) * g : c : a) || 0,
  bb = (a, c) => (a = Ya(a), ab(a, 1 - a, c)),
  db = (
    a,
    c = cb,
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
  gb = (
    a = eb,
    c = fb,
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
  l = NO_INLINE((a, c, g) => eb.translate(a, c, g)),
  hb = NO_INLINE((a, c, g) => eb.rotate(a, c, g)),
  n = NO_INLINE((a, c, g) => eb.scale(a, c, g)),
  ib = (a, c) => Array.from(Array(a), (g, k) => c(k)),
  jb = (a, c, g) => (a.C = g, a.u = c, a),
  kb = (a, c, g = a.u) =>
    jb(
      a.map(k => {
        let u, q;
        return { x: k, y: u, z: q } = k,
          { x: k, y: u, z: q } = c.transformPoint({ x: k, y: u, z: q }),
          { x: k, y: u, z: q };
      }),
      g,
      a.C,
    ),
  w = (a, c, g) => a.map(k => kb(k, c, g)),
  lb = (a, c = 0) =>
    ib(a, g => {
      const k = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > h(k) ? k : 0 > k ? k - c : k + c };
    }),
  mb = (a, c, g) =>
    a.map((k, u, { length: q }) => jb([k, c[q - u - 1], c[q - (u + 1) % q - 1], a[(u + 1) % q]], a.u, g)),
  G = (
    a,
    c,
    g = 0,
    k,
  ) => (a = a ? lb(a, k) : Ka,
    k = kb(a, l(0, 1).scale3d(0 < g ? g : 1)),
    a = kb(a, l(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...mb(a, k, c), k, a]),
  nb = (
    a,
    c = a,
    g = (
      k,
      u,
    ) => (u *= Math.PI / c,
      { x: Math.cos(k *= 2 * Math.PI / a) * Math.sin(u), y: Math.cos(u), z: Math.sin(k) * Math.sin(u) }),
  ) => {
    const k = [];
    for (let u = 0; a > u; u++) {
      for (let q = 0; c > q; q++) {
        const A = jb([], 0, 1);
        k.push(A);
        A.push(g(u, q, A));
        q && A.push(g((u + 1) % a, q, A));
        c - 1 > q && A.push(g((u + 1) % a, q + 1 % c, A));
        A.push(g(u, q + 1 % c, A));
      }
    }
    return k;
  },
  ob = ({ x: a, y: c, z: g }, k) => a * k.x + c * k.y + g * k.z,
  pb = a => {
    let c, g = 0, k = 0, u = 0, q = a.at(-1);
    for (c of a) {
      g += (q.y - c.y) * (q.z + c.z), k += (q.z - c.z) * (q.x + c.x), u += (q.x - c.x) * (q.y + c.y), q = c;
    }
    return c = Math.hypot(g, k, u), g /= c, k /= c, u /= c, { x: g, y: k, z: u, w: g * q.x + k * q.y + u * q.z };
  },
  qb = (a, c) => {
    var g, k, u, q = c.B;
    for (var A = 0; q.length > A; ++A) {
      if (-0.00008 > (g = ob(a, q[A]) - a.w) ? u = c : 8e-5 < g && (k = c), u && k) {
        k = [];
        u = [];
        q = c.B;
        A = c.v;
        let D = q.at(-1), K = ob(a, D) - a.w;
        for (const I of q) {
          g = ob(a, I) - a.w,
            8e-5 > K && u.push(D),
            -0.00008 < K && k.push(D),
            (8e-5 < K && -0.00008 > g || -0.00008 > K && 8e-5 < g)
            && (K /= g - K,
              D = { x: D.x + (D.x - I.x) * K, y: D.y + (D.y - I.y) * K, z: D.z + (D.z - I.z) * K },
              k.push(D),
              u.push(D)),
            D = I,
            K = g;
        }
        return {
          l: 2 < k.length && { B: jb(k, q.u, q.C), v: A, A: c },
          j: 2 < u.length && { B: jb(u, q.u, q.C), v: A, A: c },
        };
      }
    }
    return { l: k, j: u };
  },
  rb = (a, c, g = pb(c.B)) => {
    let k, u, q;
    return a
      ? ({ l: k, j: u } = qb(a, c), k || u || a.o.push(c), k && (a.l = rb(a.l, k, g)), u && (a.j = rb(a.j, u, g)))
      : ({ x: k, y: u, z: g, w: q } = g, a = { x: k, y: u, z: g, w: q, o: [c], l: 0, j: 0 }),
      a;
  },
  sb = (a, c, g) => {
    const k = [],
      u = (q, A) => {
        let { l: D, j: K } = qb(q, A);
        D || K || (0 < g * ob(q, c) ? D = A : K = A);
        D && (q.l ? u(q.l, D) : k.push(D));
        K && q.j && u(q.j, K);
      };
    for (const q of c.o) {
      u(a, q);
    }
    return k;
  },
  tb = (a, c) => a && (c(a), tb(a.l, c), tb(a.j, c)),
  wb = a => (tb(a, c => {
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
  xb = a => a.length ? a.reduce((c, g) => rb(c, { B: g, v: 0, A: 0 }), 0) : a,
  yb = (...a) =>
    a.reduce((c, g) => {
      const k = [];
      if (c = xb(c), g) {
        g = xb(g);
        tb(c, u => u.o = sb(g, u, 1));
        tb(g, u => k.push([u, sb(c, u, -1)]));
        for (let [u, q] of k) {
          for (const A of q) {
            rb(c, A, u);
          }
        }
      }
      return c;
    }),
  L = (a, ...c) => {
    const g = q => {
        let A;
        return q.A && ((A = k.get(q.A)) ? (u.delete(A), q = g(q.A)) : k.set(q.A, q)), q;
      },
      k = new Map(),
      u = new Map();
    return a = wb(yb(wb(xb(a)), ...c)),
      tb(a, q => {
        for (const A of q.o) {
          u.set(g(A), A.v);
        }
      }),
      Array.from(u, ([{ B: q }, A]) => {
        const D = q.map(({ x: K, y: I, z: N }) => ({ x: K, y: I, z: N }));
        return jb(A ? D.reverse() : D, q.u, q.C);
      });
  },
  Bb = NO_INLINE((a, c, g) => ab(a, c, 1 - Math.exp(-g * d))),
  Cb = () => {
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
      ][za = Ja.reduce((a, { i: c }) => a + c, 0)] + " / XIII";
  },
  Db = () => {
    localStorage.DanteSP22 = JSON.stringify([e.map(({ i: a }) => a), Ja.map(({ i: a }) => a), Ba, b, da]);
  },
  Eb = (a, c, g, k) =>
    new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (c + a) / (a - c), -1, 0, 0, 2 * c * a / (a - c), 0]),
  Hb = () => {
    let a, c, g, k, u, q, A, D, K, I, N, y, J, S, O = !0;
    const B = [],
      E = () => {
        b4.innerHTML = "Music: " + O;
        ba || !O ? Fb.disconnect() : Fb.connect(Gb.destination);
      },
      f = () => {
        const v = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        oa = Eb(0.3, 181, v, 1.732051);
        pa = [Eb(0.3, 55, v, 1.732051), Eb(55, 181, v, 1.732051)];
        k = D = void 0;
        B.length =
          fa =
          S =
          y =
          J =
          Ca =
          Da =
            0;
      },
      r = (v, x = 0) => {
        if (ba !== v) {
          ba = v;
          ha = x;
          f();
          document.body.className = v ? "l m" : "l";
          try {
            v
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Fb.start());
          } catch {
          }
          E();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => r(!1);
    b2.onclick = () => r(!1, 1);
    b5.onclick = () => r(!0);
    b4.onclick = () => {
      O = !O;
      E();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = v => {
      if (!ba && (v.target === hC && (fa = 1), ha)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = v => {
      let x;
      v.repeat
        || (x = {
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
        }[v.code],
          (B[x] = !!v.type[5] && !0) && (0 === x && (fa = 1), 1 === x && r(!0)));
    };
    onmousemove = ({ movementX: v, movementY: x }) => {
      ha && (v || x) && (Ua += 0.1 * v, Ta += 0.1 * x);
    };
    hC.ontouchstart = v => {
      if (!ba) {
        for (let { pageX: x, pageY: M, identifier: C } of v.changedTouches) {
          ha && x > hC.clientWidth / 2
            ? void 0 === D && (K = 0, q = x, A = M, D = C, I = Ua, N = Ta)
            : void 0 === k && (u = 0, c = x, g = M, k = C);
        }
        a = ya;
      }
    };
    hC.ontouchmove = v => {
      if (!ba) {
        for (let { pageX: t, pageY: p, identifier: m } of v.changedTouches) {
          var x, M, C, z;
          D === m && (Ua = I + (t - q) / 2.3, Ta = N + (p - A) / 2.3, K = 1);
          k === m
            && (m = (c - t) / 20,
              x = h(m),
              M = (g - p) / 20,
              C = h(M),
              (z = 0.5 < Wa(x, C)) && (u = 1),
              y = (z && 0.2 < x) * Ya(m, -1),
              J = (z && 0.2 < C) * Ya(M, -1),
              2 < x && (c = t + 20 * (0 > m ? -1 : 1)),
              2 < C && (g = p + 20 * (0 > M ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = v => {
      let x;
      document.activeElement === document.body && v.preventDefault();
      for (const M of v.changedTouches) {
        M.identifier === D
          ? (D = void 0, K || (x = 1), K = 0)
          : M.identifier === k
          ? (k = void 0, J = y = 0, u || (x = 1), u = 0)
          : x = 1;
      }
      v.target === hC && x && a && 0.02 < (v = ya - a) && 0.7 > v && (fa = 1);
    };
    na = () => {
      Ca = J + (B[4] ? 1 : 0) - (B[5] ? 1 : 0);
      Da = y + (B[2] ? 1 : 0) - (B[3] ? 1 : 0);
      var v = navigator.getGamepads()[0];
      if (v) {
        const x = C => M[C]?.pressed || 0 < M[C]?.value ? 1 : 0, M = v.buttons;
        v = v.axes;
        ha && (Ta += d * Xa(v[3], 0.3) * 80, Ua += d * Xa(v[2], 0.3) * 80);
        Ca += x(12) - x(13) - Xa(v[1], 0.2);
        Da += x(14) - x(15) - Xa(v[0], 0.2);
        x(9) && r(!0);
        (v = x(3) || x(2) || x(1) || x(0)) && !S && (fa = 1);
        S = v;
      }
    };
    document.onvisibilitychange = onblur = onresize = f;
    r(!0);
  },
  P = NO_INLINE((a, c, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * c << 8 | 255 * a),
  R = (a, c = new DOMMatrix(), g) => qa.o.push(...w(a, c, g)),
  W = (a, c = 1) => {
    const g = qa;
    c = { m: new DOMMatrix(), H: Ia.length, G: c, o: [] };
    return Ia.push(c), a(qa = c), qa = g, c;
  },
  Ib = a => (a = a.transformPoint(), Math.hypot(Ra.x - a.x, Ra.y - a.y, Ra.z - a.z)),
  Jb = a => {
    const c = qa,
      g = e.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: c.m,
        I: a,
        F() {
          k.g = Bb(k.g, k.i, 4);
          k.h = Bb(k.h, k.i, 1);
          gb(c.m).multiplySelf(a);
          fa && 3 > Ib(fb) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, g && 1 / 0 > Ha && (Ha = b + 1, h4.innerHTML = "* click *"), Ba = g, Db());
          !g && k.i && 0.8 < k.g && (k.i = 0,
            13 > za
              ? 1 / 0 > Ha && (Ha = b + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : Aa
                || (1 / 0 > Ha
                  && (Ha = b + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  Aa = 1));
          fb.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    e.push(k);
    R(G(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
    R(G(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
    R(G(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), P(0.5, 0.5, 0.4));
  },
  Kb = (a, ...c) => {
    let g = -1, k = 0, u = 0, q = 0, A = 0, D = 0, K = 1, I = 3;
    const N = {
        i: 0,
        F() {
          if (!N.i) {
            let z, t, p, m, H, F, ea, T = 1, ka = 1 / 0;
            for (const U of S) {
              var { x: v, z: x, w: M } = U;
              x = (v = Math.hypot(B - v, E - x)) - M;
              ea ||= v < M;
              0 < x && ka > x && (ka = x, O = U);
              T = Va(T, v / M);
            }
            ea
              || ({ x: C, z, w: t } = O,
                p = B - C,
                m = E - z,
                H = Math.hypot(p, m),
                F = Math.atan2(-m, p),
                K && (u = (Math.random() - 0.5) * Math.PI / 2, I = Ya(I / (1 + Math.random()))),
                F += u,
                g = -Math.cos(F),
                k = Math.sin(F),
                0.1 < H && (H = Va(H, t) / (H || 1), B = p * H + C, E = m * H + z));
            K = ea;
            I = Bb(I, 6 * (1 - T) + 3, T + 3);
            f = Bb(f, B = Bb(B, B + g, I), I);
            r = Bb(r, E = Bb(E, E + k, I), I);
            q = $a(q, Math.atan2(f - A, r - D) / Sa - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > Ib(gb(y.m).multiplySelf(a).translateSelf(A = f, 0, D = r).rotateSelf(0, q, 7 * Math.sin(1.7 * b)))
            ) {
              N.i = 1;
              var C = [
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
              ][za] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Ha && (Ha = b + (za && 12 > za ? 5 : 7), h4.innerHTML = C);
              Cb();
              Db();
            }
          }
          N.i
            && gb(Ia[2].m).translateSelf(
              J % 4 * 1.2 - 1.7 + Math.sin(b + J) / 7,
              -2,
              1.7 * (J / 4 | 0) - 5.5 + h(J % 4 - 2) + Math.cos(b / 1.5 + J) / 6,
            );
        },
      },
      y = qa,
      J = Ja.length,
      S = c.map(([v, x, M]) => ({ x: v, z: x, w: M }));
    let O = S[0], { x: B, z: E } = O, f = B, r = E;
    Ja.push(N);
  },
  Lb = (a, c, g, k) => {
    a.translateSelf(c + Math.sin(b + 2) / 5, g + Math.sin(0.8 * b) / 3, k).rotateSelf(
      2 * Math.sin(b),
      Math.sin(0.7 * b),
      Math.sin(0.9 * b),
    );
  },
  Nb = () => {
    let a, c, g, k, u, q, A, D, K, I, N, y, J, S, O = 1, B = 2, E = 15;
    const f = { x: 0, y: 0, z: 0 },
      r = () => (B ? e[Ba] : Ia[c && 1 === Ia[c].G && c || 0]).m,
      v = z => {
        const { x: t, y: p, z: m } = 1 < B
          ? gb(e[Ba].m).multiplySelf(e[Ba].I).transformPoint({ x: 0, y: Ba || 0.9 < ca ? 15 : 1, z: -2.4 })
          : r().transformPoint(f);
        z && (A = (t - Ra.x) / d, D = (m - Ra.z) / d);
        Ra.x = t;
        Ra.y = p;
        Ra.z = m;
      },
      x = (z, t, p) => {
        gb(r()).invertSelf();
        fb.m41 = fb.m42 = fb.m43 = 0;
        z = fb.transformPoint({ x: z, z: p, w: 0 });
        f.x += z.x;
        f.y += t;
        f.z += z.z;
        v();
      },
      M = () => {
        var z = 0, t = 0, p = 0;
        let m = 0;
        var H = -1;
        let F = 0, ea = 0;
        for (var T = 0; 36 > T; ++T) {
          var ka = 512 * T;
          for (var U = 96; 416 > U; U += 4) {
            for (var X = 0; 2 > X; ++X) {
              var Q = Mb[ka + U + X], Y = Mb[ka + U + X + 2];
              Q > m && (m = Q);
              Q + Y && (0 > H || H === T) && (H = T, Y === a ? ++z : t && t !== Y || (t = Y, ++p));
            }
          }
        }
        a = 0 > H ? 0 : p > 2 * z ? t : a;
        for (z = 36; 128 > z; z += 1) {
          T =
            H =
            p =
            t =
              0;
          ka = 512 * z;
          for (U = 0; 128 > U; U += 1) {
            for (X = ka + 4 * U, Q = 0; 2 > Q; ++Q) {
              Y = Mb[X + Q];
              const ja = Mb[X + Q + 2];
              (Q ? 64 < U : 64 > U) ? t = Wa(t, Y) : p = Wa(p, Y);
              Q ? T = Wa(T, ja) : H = Wa(H, ja);
            }
          }
          h(p - t) > h(F) && (F = p - t);
          h(T - H) > h(ea) && (ea = T - H);
        }
        I = Ya(1 - 0.015 * Wa(h(F), h(ea)));
        x(F / 255, m / 255, ea / 255);
      },
      C = (z, t, p, m) => ab(z, t, O || (Ya(h(t - z) ** 0.5 - p) + 1 / 7) * (1 - Math.exp(-(1.5 * m) * d)));
    va = z => {
      v(a);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Mb);
      NO_INLINE(M)();
      !B && a === c || (c = a, t = gb(r()).invertSelf().transformPoint(Ra), f.x = t.x, f.y = t.y, f.z = t.z);
      B = B && (a ? 0 : 1);
      var { x: t, y: p, z: m } = Ra;
      const H =
        (p < (-20 > t || 109 > m ? -25 : -9) && (B = 2),
          1 === a && (e[9].i = -15 > t && 0 > m ? 1 : 0),
          N = ab(Bb(N, p, 2), p, B || 8 * h(N - p)),
          J = C(J, N, 2, 1),
          y = C(y, t, 0.5, 1),
          S = C(S, m, 0.5, 1),
          q = Bb(q, ra * (27 < a && 32 > a), 2),
          ha
            ? (p = B + (1 - Math.exp(-18 * d)),
              Ea = ab(Ea, t, p),
              Fa = ab(Fa, N + 1.5, p),
              Ga = ab(Ga, m, p),
              Ua = Za(Ua))
            : (Ga = C(Ga, S + -18 + 5 * q, 1, 2 + q),
              Fa = C(Fa, Wa(J + Ya((-60 - m) / 8, 0, 20) + 13 + 9 * q, 6), 4, 2),
              Ea = C(
                Ea,
                y,
                1,
                2
                  + q,
              ),
              p = Va(-6, -h(S - Ga)),
              F = y - Ea,
              Ua = $a(Ua, 90 - Za(Math.atan2(p, F) / Sa), O + (1 - Math.exp(-10 * d))),
              Ta = $a(Ta, 90 - Math.atan2(Math.hypot(p, F), Fa - J) / Sa, O + (1 - Math.exp(-10 * d)))),
          Ta = Ya(Ta, -87, 87),
          O = 0,
          z().translateSelf(t, N, m).rotateSelf(0, k));
      for (F = 0; 2 > F; ++F) {
        const ea = 9.1 * b - Math.PI * F;
        gb(H, z()).translateSelf(0, u * Ya(0.45 * Math.sin(ea - Math.PI / 2))).rotateSelf(
          u * Math.sin(ea) * 0.25 / Sa,
          0,
        );
      }
      p = Ya(Ca, -1);
      var F = Ya(Da, -1);
      t = Xa(Math.hypot(p, F) ** 0.5, 0.1);
      m = Math.atan2(p, F);
      p = t * h(p) * Math.sin(m);
      F = t * h(F) * Math.cos(m);
      t && (g = 90 - m / Sa);
      u = Bb(u, t, 10);
      k = $a(k, g, 1 - Math.exp(-8 * d));
      E = a ? 5 : Bb(E, B ? 10 : 19, 2.2);
      A = a || B ? 0 : Bb(A, 0, 3);
      D = a || B ? 0 : Bb(D, 0, 3);
      K = B ? 0 : Bb(K, a ? 7 * Ya(2 * t) * I : 0, a ? 9 : 1);
      m = ha ? (180 + Ua) * Sa : 0;
      x(d * (A + K * (F * Math.cos(m) - p * Math.sin(m))), -E * d, d * (D + K * (F * Math.sin(m) + p * Math.cos(m))));
    };
  },
  Ob = (a, c = 35633) => (c = Z.c6x(c), Z.s3c(c, a), Z.c6a(c), c),
  Pb = (a, c) => {
    const g = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Ob(c, 35632)), Z.l8l(k), u => u ? g[u] || (g[u] = Z.gan(k, u)) : Z.u7y(k);
  },
  Xb = (a, c, g) => {
    let k;
    ba
      ? (k = hb(0, 40 * Math.sin(ya) - 70),
        db(k, Vb, 37),
        db(k, Vb, 38),
        db(k, Vb, 39),
        Z.uae(a, !1, Vb),
        Z.d97(4, Ia[39].D - Ia[37].s, 5123, 2 * Ia[37].s))
      : (Z.uae(a, !1, Vb),
        Z.d97(4, (c ? Ia[39].D : Ia[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Wb),
        Z.das(4, Ia[g].D - Ia[g].s, 5123, 2 * Ia[g].s, Ja.length),
        Z.das(4, Ia[40].D - Ia[40].s, 5123, 2 * Ia[40].s, e.length));
  },
  Yb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Zb = a => Math.sin(a * Math.PI * 2),
  $b = a => 0.5 > a % 1 ? 1 : -1,
  ac = a => a % 1 * 2 - 1,
  bc = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  Gb = new AudioContext(),
  eb = new DOMMatrix(),
  fb = new DOMMatrix(),
  cb = new Float32Array(16),
  Vb = new Float32Array(624),
  Wb = new Float32Array(624),
  Mb = new Uint8Array(65536),
  cc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Fb = Gb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((c, g, k) => (c * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Yb(() => {
  let a = 0;
  const c = () => {
      if (2 == ++a) {
        const N = [new Float32Array(16), new Float32Array(16)],
          y = t => {
            Z.f1s();
            requestAnimationFrame(y);
            var p = (t - (aa || t)) / 1e3;
            if (ya += p, b += d = ba ? 0 : Va(0.066, p), aa = t, 0 < d) {
              na();
              Ha && b > Ha && (Ha = 0, h4.innerHTML = "");
              da = Bb(da, e[9].h, 0.2 + 0.3 * h(2 * e[9].h - 1));
              ca = Bb(ca, Aa ? Bb(ca, -9, 1.5) : Ya(b / 3), 1);
              let F = 1;
              var m = () => gb(eb, Ia[++F].m);
              p =
                (ra = bb(e[12].g, e[13].g),
                  ua = ab(Bb(ua, 0, 1), Za(ua + 60 * d), e[5].g - e[6].h),
                  sa = ab(Bb(sa, 0, 5), Za(sa + 56 * d), ra),
                  ta = ab(Bb(ta, 0, 4), Za(ta + 48 * d), ra),
                  Lb(m(), -12, 4.2, 40 * ca - 66),
                  m().translateSelf(0, 0, -15).scaleSelf(1, Ya(1.22 - e[1].g), 1),
                  m().translateSelf(0, 0, 15).scaleSelf(1, Ya(1.22 - e[2].g), 1),
                  m().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, Ya(1.1 - e[6].g), 1),
                  m().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g),
                  m().translateSelf(
                    0,
                    0.01 > e[3].g ? -500 : (1 - e[2].g) * e[3].h * (5 * Math.cos(1.5 * b) + 2) + 15 * (e[3].g - 1),
                    0,
                  ),
                  Va(e[2].h, 1 - e[4].h));
              t =
                (m().translateSelf(p * Math.sin(0.7 * b + 2) * 12),
                  m().translateSelf(p * Math.sin(b + 3) * 8.2),
                  m().translateSelf(p * Math.sin(b / 1.5 + 2) * 12),
                  m().translateSelf(9.8 * (1 - p)),
                  Ya(1 - 5 * p) * bb(e[4].g, e[5].g));
              p =
                (m().translateSelf(0, t * Math.sin(1.35 * b) * 4),
                  m().translateSelf(0, 0, t * Math.sin(0.9 * b) * 8),
                  m().translateSelf(0, -6.5 * e[4].h),
                  m().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + ua, 0),
                  bb(e[7].h, e[6].h));
              t =
                (m().translateSelf(0, p * Math.sin(b) * 5 + 3.5 * (1 - Wa(e[6].g, e[7].g))),
                  m().translateSelf(0, p * Math.sin(b + 3) * 6, p * Math.sin(0.6 * b + 1) * 6),
                  m().translateSelf(0, -7.3 * e[7].h),
                  Lb(m(), -123, 1.4, 55 + -65 * da),
                  bb(e[10].g, e[11].g));
              t =
                (m().translateSelf(0, -2, t * h(Math.sin(1.1 * b)) * -8.5 + 10),
                  m().translateSelf(0, -2, t * h(Math.sin(2.1 * b)) * -8.5 + 10),
                  m().translateSelf(0, -2, -8.5 * Wa((1 - e[10].g) * (1 - t), t * h(Math.sin(1.5 * b))) + 10),
                  bb(e[8].h, e[12].h));
              for (p = 0; 4 > p; p++) {
                m().translateSelf(
                  (2 < p ? 2 * (1 - t) + t : 0) - 100,
                  t * Math.sin(1.3 * b + 1.7 * p) * (3 + p / 3) + 0.7,
                  115 + (1 & p ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7
                    + Wa(t, 0.05) * Math.cos(1.3 * b + 7 * p) * (4 - 2 * (1 - p / 3)),
                );
              }
              m().translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - e[8].g) + t * Math.sin(0.8 * b) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * b) * (3 * t + 3), 0);
              m().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
              m().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
              m().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
              m().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
              t = bb(e[13].h, e[14].h);
              for (p = 0; 3 > p; ++p) {
                m().translateSelf(0, (1 - e[13].h) * (1 - e[14].h) * (p ? 0 : 3) + t * Math.sin(1.5 * b + 1.5 * p) * 4);
              }
              m().translateSelf(-2 * Math.sin(b)).rotateSelf(25 * Math.sin(b));
              p = bb(bb((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2);
              m().translateSelf(0, 16 * p, 8.5 * Ya(2 * p - 1) + 95);
              va(m);
              for (m = 0; F >= m; ++m) {
                db(Ia[m].m, Vb, m - 1);
              }
              for (m = 0; 13 > m; ++m) {
                Ja[m].F(), db(fb, Wb, m);
              }
              for (m = 0; 16 > m; ++m) {
                e[m].F(), db(fb, Wb, m + 13), Wb[16 * m + 223] = 1 - e[m].g;
              }
              f();
              Z.b6o(36160, z);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: t, y: p, z: H } = Ra;
              Z.uae(f("b"), !1, db(gb().rotateSelf(0, 180).invertSelf().translateSelf(-t, -p, 0.3 - H)));
              Xb(f("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(f("b"), !1, db(gb().translateSelf(-t, -p, -H - 0.3)));
              Xb(f("c"), 0, 41);
              Z.f1s();
            }
            fa = 0;
            gb(eb, J);
            ba
              ? J.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : J.rotateSelf(-Ta, -Ua).invertSelf().translateSelf(-Ea, -Fa, -Ga);
            B();
            Z.b6o(36160, M);
            Z.v5y(0, 0, 2048, 2048);
            x[0](54.7 * 1.1);
            x[1](126 * 1.1);
            r();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(r("a"), !1, db(oa));
            Z.uae(r("b"), !1, db(J));
            Z.uae(r("i"), !1, N[0]);
            Z.uae(r("j"), !1, N[1]);
            Z.ubu(r("k"), Ea, Fa, Ga);
            Xb(r("c"), !ha, 42);
            E();
            Z.ubu(E("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ya);
            Z.ubu(E("k"), Ea, Fa, Ga);
            Z.uae(E("b"), !1, db(gb(J).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, z);
            Z.f1s();
          },
          J = new DOMMatrix(),
          S = new DOMMatrix(),
          O = g;
        var I = Ob(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const B = Pb(
            Ob(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          E = Pb(
            Ob("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          f = Pb(
            I,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          r = Pb(
            I,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          v = ib(8, () => ({})),
          x = ib(2, t => {
            const p = Z.c25();
            return Z.a4v(33984 + t),
              Z.b9j(3553, p),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              m => {
                let H = 0, F = 0, ea = 0, T = 1 / 0, ka = -1 / 0, U = 1 / 0, X = -1 / 0, Q = 1 / 0, Y = -1 / 0;
                Z.fas(36160, 36096, 3553, p, 0);
                Z.c4s(256);
                gb().scale3dSelf(m).multiplySelf(gb(pa[t], S).multiplySelf(J).invertSelf());
                for (let ja = 0; 8 > ja; ++ja) {
                  const la = v[ja],
                    ma =
                      (la.x = 4 & ja ? 1 : -1, la.y = 2 & ja ? 1 : -1, la.z = 1 & ja ? 1 : -1, fb.transformPoint(la));
                  H -= la.x = (0 | ma.x) / m / ma.w;
                  F -= la.y = (0 | ma.y) / m / ma.w;
                  ea -= la.z = (0 | ma.z) / m / ma.w;
                }
                gb().rotateSelf(298, 139).translateSelf(H / 8, F / 8, ea / 8);
                for (m = 0; 8 > m; ++m) {
                  const { x: ja, y: la, z: ma } = fb.transformPoint(v[m]);
                  T = Va(T, ja);
                  ka = Wa(ka, ja);
                  U = Va(U, la);
                  X = Wa(X, la);
                  Q = Va(Q, ma);
                  Y = Wa(Y, ma);
                }
                m = 10 + t;
                Q *= 0 > Q ? m : 1 / m;
                Y *= 0 < Y ? m : 1 / m;
                Z.uae(
                  B("b"),
                  !1,
                  db(
                    gb(eb, S).scaleSelf(2 / (ka - T), 2 / (X - U), 2 / (Q - Y)).translateSelf(
                      (ka + T) / -2,
                      (X + U) / -2,
                      (Q + Y) / 2,
                    ).multiplySelf(fb),
                    N[t],
                  ),
                );
                Xb(B("c"), !ha, 42);
              };
          }),
          M = Z.c5w();
        I = Z.c25();
        const C = Z.c3z(), z = Z.c5w();
        f();
        Z.uae(f("a"), !1, db(Eb(1e-4, 2, 1.4, 0.4)));
        r();
        Z.ubh(r("q"), 2);
        Z.ubh(r("h"), 1);
        Z.ubh(r("g"), 0);
        E();
        Z.ubh(E("q"), 2);
        Z.b6o(36160, M);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, z);
        Z.bb1(36161, C);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, C);
        Z.a4v(33986);
        Z.b9j(3553, I);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, I, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, O);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Hb)();
        NO_INLINE(Nb)();
        requestAnimationFrame(y);
      }
    },
    g = new Image();
  g.onload = g.onerror = c;
  g.src = cc;
  let k = 0;
  const u = () => {
      Yb(() => {
        let y, J = 0;
        const S = [],
          O = [],
          B = [],
          E = [],
          f = C => {
            let { x: z, y: t, z: p } = y[C], m = (M[0] = z, M[1] = t, M[2] = p, C = "" + (y.C ? x : r), v.get(C));
            return void 0 !== m
              ? (z = 3 * m, E[z] = (E[z++] + r[5]) / 2, E[z] = (E[z++] + r[6]) / 2, E[z] = (E[z] + r[7]) / 2)
              : (v.set(C, m = v.size), O.push(z, t, p, M[3]), B.push(r[4]), E.push(r[5], r[6], r[7])),
              m;
          },
          r = new Int32Array(8),
          v = new Map(),
          x = new Int32Array(r.buffer, 0, 5),
          M = new Float32Array(r.buffer);
        for (const C of Ia) {
          for (y of (M[3] = 40 === C.H ? -14 : C.G && C.H, C.o)) {
            const { x: z, y: t, z: p } = pb(y);
            r[4] = 0 | y.u;
            r[5] = 32767 * z;
            r[6] = 32767 * t;
            r[7] = 32767 * p;
            for (let m = 2, H = f(0), F = f(1); y.length > m; ++m) {
              S.push(H, F, F = f(m));
            }
          }
          C.o = null;
          C.s = J;
          C.D = J = S.length;
        }
        Z.b11(34962, Z.c1b());
        Z.b2v(34962, new Float32Array(O), 35044);
        Z.v7s(0, 4, 5126, !1, 0, 0);
        Z.b11(34962, Z.c1b());
        Z.b2v(34962, new Int16Array(E), 35044);
        Z.v7s(1, 3, 5122, !0, 0, 0);
        Z.b11(34962, Z.c1b());
        Z.b2v(34962, new Uint32Array(B), 35044);
        Z.v7s(2, 4, 5121, !0, 0, 0);
        Z.b11(34963, Z.c1b());
        Z.b2v(34963, new Uint16Array(S), 35044);
        Z.e3x(0);
        Z.e3x(1);
        Z.e3x(2);
        Yb(c);
        try {
          const [C, z, t, p, m] = JSON.parse(localStorage.DanteSP22);
          e.map((H, F) => H.g = H.h = H.i = F ? 0 | C[F] : 0);
          Ja.map((H, F) => H.i = 0 | z[F]);
          Ba = t;
          da = m;
          b = p;
          d = 0;
        } catch {
        }
        Cb();
        ca = Ya(Ba);
      });
      const I = ib(11, y => l(Math.sin(y / 10 * Math.PI), y / 10).rotate(+y).scale(1.0001 - y / 10, 0, 1 - y / 10)),
        N = ib(10, y => mb(kb(lb(18), I[y]).reverse(), kb(lb(18), I[y + 1]), 1)).flat();
      W(() => R([Ka.slice(1)], l(-2).scale3d(3).rotate(90, 0)), 0);
      W(() => {
        const y = f =>
            W(() => {
              Ka.map(({ x: r, z: v }) => {
                R(G(11, 1), l(4 * r, 4, f + 4 * v).scale(0.8, 3, 0.8), P(0.5, 0.3, 0.7, 0.6));
                R(G(), l(4 * r, 7, f + 4 * v).scale(1, 0.3), P(0.5, 0.5, 0.5, 0.3));
              });
              R(L(
                w(G(), l(0, 0, f).scale(5, 1, 5), P(0.8, 0.8, 0.8, 0.3)),
                ...[-1, 1].map(r => w(G(), l(5 * r, 0.2, f).rotate(-30 * r).scale(4, 1, 2), P(0.8, 0.8, 0.8, 0.3))),
              ));
              R(G(), l(0, -3, f).scale(8, 2, 8), P(0.4, 0.4, 0.4, 0.3));
            }),
          J = f =>
            L(
              w(G(), l(0, -f / 2).scale(6, f - 1, 2.2)),
              w(G(), l(0, -f / 2 - 6).scale(4, f - 3, 4)),
              w(G(32, 1), l(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
            ),
          S = () => W(() => ib(7, f => R(w(G(6, 1), l(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), P(0.3, 0.3, 0.38))))),
          O = L(
            w(G(30, 1, 1.15, 1), l(0, -3).scale(3.5, 1, 3.5), P(0.7, 0.4, 0.25, 0.7)),
            w(G(30, 1, 1.3, 1), l(0, -2.5).scale(2.6, 1, 3), P(0.7, 0.4, 0.25, 0.2)),
            w(G(), l(4, -1.2).scale3d(2), P(0.7, 0.4, 0.25, 0.3)),
          ),
          B = (W(() => {
            R(O);
            Jb(l(0, -3, 4));
          }),
            Jb(l(-5.4, 1.5, -19).rotate(0, -90)),
            Kb(l(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
            Kb(l(0, 2.8), [5, 10, 3], [-5, 10, 3], ...lb(18).map(({ x: f, z: r }) => [7 * f, 10 * r, 4.5 - 2 * h(f)])),
            Ka.map(({ x: f, z: r }) => R(G(6), l(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), P(0.6, 0.3, 0.3, 0.4))),
            [-15, 15].map((f, r) => {
              S();
              S();
              R(G(), l(0, 6.3, f).scale(4, 0.3, 1), P(0.3, 0.3, 0.3, 0.4));
              R(G(), l(0, 1, f).scale(3, 0.2, 0.35), P(0.5, 0.5, 0.5, 0.3));
              R(G(), l(0, 0, r ? 22 : -23).scale(3, 1, 8), P(0.9, 0.9, 0.9, 0.2));
              ib(5, v =>
                R(
                  N,
                  l(18.5 * (r - 0.5), 0, 4.8 * v - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2),
                  P(1, 1, 0.8, 0.2),
                ));
            }),
            R(G(), l(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), P(0.8, 0.8, 0.8, 0.2)),
            R(G(), l(3, 1.5, -20).scale(0.5, 2, 5), P(0.7, 0.7, 0.7, 0.2)),
            R(G(), l(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(0.75, 0.75, 0.75, 0.2)),
            R(G(5), l(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(0.6, 0.3, 0.3, 0.4)),
            R(G(), hb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), P(0.8, 0.2, 0.2, 0.5)),
            R(L(
              yb(
                w(G(6, 0, 0, 0.3), l(8, -3, -4).scale(13, 1, 13), P(0.7, 0.7, 0.7, 0.2)),
                w(G(6), l(0, -8).scale(9, 8, 8), P(0.4, 0.2, 0.5, 0.5)),
                w(G(6, 0, 0, 0.3), l(0, -0.92).scale(13, 2, 13), P(0.8, 0.8, 0.8, 0.2)),
              ),
              w(G(5), n(5, 30, 5), P(0.4, 0.2, 0.6, 0.5)),
              w(G(5, 0, 1.5), l(0, 1).scale(4.5, 0.3, 4.5), P(0.7, 0.5, 0.9, 0.2)),
              w(G(), hb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), P(0.5, 0.5, 0.5, 0.5)),
              w(G(6), l(15, -1.5, 4).scale(3.5, 1, 3.5), P(0.5, 0.5, 0.5, 0.5)),
            )),
            W(() => {
              R(G(5), l(0, -0.2).scale(5, 1, 5), P(0.6, 0.65, 0.7, 0.3));
              Jb(l(0, 1.2));
            }),
            Jb(l(15, -2, 4)),
            W(() => {
              R(
                L(
                  yb(
                    w(G(), n(1.5, 1, 5), P(0.9, 0.9, 0.9, 0.2)),
                    w(G(6), n(4, 1, 5), P(0.9, 0.9, 0.9, 0.2)),
                    w(G(), l(0, -2).scale(2, 3.2, 1.9), P(0.3, 0.8, 0.5, 0.5)),
                    w(G(16, 1, 0, 4), n(1, 1, 1.5).rotate(0, 90), P(0.9, 0.9, 0.9, 0.2)),
                  ),
                  w(G(), n(1.3, 10, 1.3), P(0.2, 0.7, 0.4, 0.6)),
                ),
                l(0, 0, 45),
              );
              Kb(l(0, 2.8, 45), [0, 0, 4.5]);
            }),
            y(35),
            y(55),
            R(G(), l(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2)),
            W(() => {
              R(G(3), l(-23, -1.7, 55.8).scale(5, 0.7, 8.3), P(0.3, 0.6, 0.6, 0.2));
              R(G(8), l(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(0.8, 0.8, 0.8, 0.2));
              R(G(), l(-23, -3, 55).scale(5.2, 1.7, 3), P(0.5, 0.5, 0.5, 0.3));
              R(G(), l(-23, -2.2, 62).scale(3, 1, 4), P(0.5, 0.5, 0.5, 0.3));
              Jb(l(-23, -0.5, 66.5));
            }),
            W(() => {
              R(G(), l(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(0.7, 0.7, 0.7, 0.2));
              R(L(w(G(), n(3, 1.4, 2.7)), w(G(), n(1.2, 8, 1.2))), l(-33, -3, 55), P(0.7, 0.7, 0.7, 0.2));
            }),
            W(() => {
              R(L(
                w(G(), l(-27, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2)),
                w(G(), l(-27, -3, 55).scale(1, 3), P(0.9, 0.9, 0.9, 0.2)),
              ));
              R(G(), l(-39, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
            }),
            W(() => {
              R(G(6), l(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), P(0.7, 0.7, 0.7, 0.4));
            }),
            Jb(l(-55, -1.1, 46).rotate(0, 90)),
            R(G(6), l(-61.3, -2.4, 49).scale(3, 1, 5), P(0.4, 0.6, 0.6, 0.3)),
            R(G(7), l(-57, -2.6, 46).scale(4, 1, 4), P(0.8, 0.8, 0.8, 0.3)),
            [
              ...w(G(), l(0, -3).scale(11, 1.4, 3), P(0.9, 0.9, 0.9, 0.2)),
              ...L(
                w(G(6), hb(90).scale(6, 8, 6), P(0.3, 0.6, 0.6, 0.3)),
                w(G(4, 0, 0.01), l(0, 6).scale(12, 2, 0.75).rotate(0, 45), P(0.3, 0.6, 0.6, 0.3)),
                w(G(6), hb(90).scale(5, 12, 5), P(0.3, 0.6, 0.6, 0.3)),
                ...[5, 0, -5].map(f => w(G(5), l(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(0.3, 0.6, 0.6, 0.3))),
              ),
            ]),
          E = (R(B, l(-53, 0, 55)),
            W(() => R(B), 2),
            R(G(), l(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), P(0.7, 0.7, 0.7, 0.2)),
            R(G(3, 0, -0.5), l(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(0.8, 0.8, 0.8, 0.2)),
            R(L(
              yb(
                w(G(), l(-100, -2.4, 55).scale(8, 0.9, 8), P(0.8, 0.8, 0.8, 0.2)),
                w(G(), l(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(0.8, 0.8, 0.8, 0.2)),
                w(G(), l(-100, -2.6, 70).scale(3, 1.1, 7), P(0.8, 0.8, 0.8, 0.2)),
                w(G(), l(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(0.8, 0.8, 0.8, 0.2)),
                w(G(6), l(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(0.6, 0.6, 0.6, 0.3)),
                w(G(), l(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(0.8, 0.8, 0.8, 0.2)),
                w(G(), l(-100, 0.42, 92).scale(3, 1.1, 4.1), P(0.8, 0.8, 0.8, 0.2)),
              ),
              w(G(8), l(-100, -1, 55).scale(7, 0.9, 7), P(0.3, 0.3, 0.3, 0.4)),
              w(G(8), l(-100, -2, 55).scale(4, 0.3, 4), P(0.4, 0.4, 0.4, 0.5)),
              w(G(8, 0, -3.1), l(-100, -3, 55).scale(0.4, 1, 0.4), P(0.4, 0.4, 0.4, 0.5)),
            )),
            Kb(l(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            Kb(l(-89, 0.2, 80), [0, 0, 6]),
            R(L(
              w(G(), l(-100, 1, 63).scale(7.5, 4), P(0.5, 0.5, 0.5, 0.4)),
              w(G(), l(-100, 0, 70).scale(2, 2, 10), P(0.5, 0.5, 0.5, 0.4)),
              w(G(20, 1), l(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(0.5, 0.5, 0.5, 0.4)),
            )),
            Ka.map(({ x: f, z: r }) => {
              R(G(6), l(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), P(0.6, 0.15, 0.15, 0.8));
              [4, -0.4].map(v => R(G(6), l(7 * f - 100, v, 7 * r + 55).scale(1.3, 0.5, 1.3), P(0.4, 0.2, 0.2, 0.8)));
            }),
            ib(7, f => {
              R(
                G((23 * f + 1) % 5 + 5, 0, 0.5),
                l(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
                P(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
              );
            }),
            R(G(), l(-87, -9.5, 24).scale(7, 1, 3), P(0.4, 0.5, 0.6, 0.4)),
            R(G(4), l(-86, -9.2, 27).scale(5, 1, 5), P(0.5, 0.6, 0.7, 0.3)),
            R(G(12, 1), l(-86, -9, 31).scale(1.5, 1, 1.5), P(0.3, 0.3, 0.4, 0.1)),
            Jb(l(-86, -7.5, 31)),
            W(() => {
              [0, 12, 24].map(f =>
                R(
                  G(),
                  l(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3),
                  P(0.2, 0.5, 0.6, 0.2),
                )
              );
            }),
            W(() => {
              [6, 18].map(f =>
                R(
                  G(),
                  l(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3),
                  P(0.1, 0.4, 0.5, 0.2),
                )
              );
            }),
            R(
              L(
                yb(
                  w(G(5), l(0, 0, -7).scale(2, 1.2, 2), P(0.2, 0.4, 0.7, 0.3)),
                  w(G(5), n(9, 1.2, 9), P(0, 0.2, 0.3, 0.5)),
                  w(G(), n(11, 1, 13), P(0.3, 0.4, 0.6, 0.3)),
                ),
                w(G(5), n(5.4, 5, 5.4), P(0, 0.2, 0.3, 0.5)),
              ),
              l(-38.9, -11.3, 17),
            ),
            Jb(l(-38.9, -9.6, 10)),
            W(() => {
              R(
                L(
                  yb(
                    w(G(5), l(0, 2).scale(5, 7, 5).skewY(8), P(0.2, 0.4, 0.5, 0.5)),
                    w(G(5), l(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(0.25, 0.35, 0.5, 0.5)),
                    w(G(5), l(0, 9).scale(0.6, 7, 0.6).skewY(8), P(0.35, 0.3, 0.5, 0.5)),
                  ),
                  w(G(5), n(4, 8, 4), P(0.2, 0.4, 0.5, 0.5)),
                  w(G(5), l(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(0.2, 0.4, 0.5, 0.5)),
                ),
                l(-38.9, -11.3, 17),
              );
              Kb(l(-39.1, -0.6, 17).rotate(11), ...lb(15).map(({ x: f, z: r }) => [3 * f, 3 * r, 1.2]));
            }),
            Ka.map(({ x: f, z: r }) => {
              R(G(14, 1), l(9 * f - 38.9, -7.3, 11 * r + 17).scale(1, 4), P(0.25, 0.25, 0.25, 1));
              [1.5, 8].map(v =>
                R(G(17, 1), l(9 * f - 38.9, v - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), P(0.6, 0.6, 0.6, 0.3))
              );
            }),
            R(
              L(
                yb(
                  w(G(6), l(0, 0, -36).scale(15, 1.2, 15), P(0.7, 0.7, 0.7, 0.3)),
                  w(G(), l(0, 0, -18).scale(4, 1.2, 6), P(0.45, 0.4, 0.6, 0.3)),
                ),
                ...ib(6, f =>
                  ib(6, r =>
                    w(
                      G(6),
                      l(4.6 * r - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * r)).scale(2, 5, 2),
                      P(0.7, 0.7, 0.7, 0.3),
                    ))).flat(),
              ),
              l(-38.9, -11.3, 17),
            ),
            Kb(l(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
            R(G(5), l(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), P(0.8, 0.1, 0.25, 0.4)),
            Jb(l(-84, -0.5, 85).rotate(0, 45)),
            W(() => {
              R(O);
              Jb(l(0, -3, -4).rotate(0, 180));
            }),
            L(
              w(G(), l(0, -0.5, 1).scale(1.15, 1.2, 6.5), P(0.25, 0.25, 0.35, 0.3)),
              w(G(3), l(0, 0, -5.5).scale(3, 2), P(0.6, 0.3, 0.4, 0.3)),
              ...[-1.2, 1.2].map(f => w(G(), l(f, -0.5, 1).scale(0.14, 0.3, 6.5), P(0.7, 0.2, 0, 0.3))),
            ));
        W(() => {
          ib(2, f =>
            R(E, l(9 * f - 110 + (1 & f), 1.7, -12)));
        });
        W(() => {
          ib(2, f => R(E, l(9 * (f + 2) - 110 + (1 & f), 1.7, -12)));
        });
        W(() => {
          ib(3, f => R(E, l(9 * f - 106, 1.7, -12)));
        });
        R(
          L(
            yb(w(G(), l(26.5, -1.6, 10).scale(20, 2.08, 3)), w(G(), l(26.5, -0.6, 10).scale(19, 2, 0.5))),
            ...ib(4, f => w(G(), l(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
            ...ib(3, f => w(G(), l(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
          ),
          l(-123, 0, -12),
          P(0.5, 0.5, 0.6, 0.2),
        );
        Jb(l(-116, -1.4, -18).rotate(0, 180));
        R(G(), l(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(0.8, 0.8, 0.8, 0.2));
        R(G(6), l(-116, -2.6, -16.5).scale(3.2, 0.8, 3), P(0.6, 0.5, 0.7, 0.2));
        R(G(), l(-115.5, -17, -12).scale(0.5, 15, 2.2), P(0.6, 0.6, 0.6, 0.3));
        R(G(8), l(-114, -17, -2).scale(2, 15, 2), P(0.6, 0.6, 0.6, 0.3));
        R(G(8), l(-79, -17, -2).scale(2, 15, 2), P(1, 1, 1, 0.3));
        R(G(), l(-77, -17, -50.5).scale(2.2, 15, 0.5), P(0.6, 0.6, 0.6, 0.3));
        ib(3, f => {
          R(J(16), l(12 * f - 109, -9, -12), P(0.6, 0.6, 0.6, 0.3));
          R(J(16), l(-77, -9, -12 * f - 20).rotate(0, 90), P(0.6, 0.6, 0.6, 0.3));
        });
        R(L(
          w(G(12), l(-77, -14.5, -12).scale(4, 17.5, 4), P(0.7, 0.7, 0.7, 0.2)),
          w(G(), l(-79, 0.1, -12).scale(3.5, 2, 1.3), P(0.4, 0.5, 0.6, 0.2)),
          w(G(), l(-77, 0.1, -14).scale(1.5, 2, 2), P(0.4, 0.5, 0.6, 0.2)),
          w(G(12), l(-77, 3.1, -12).scale(3, 5, 3), P(0.4, 0.5, 0.6, 0.2)),
        ));
        R(G(), l(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), P(0.6, 0.6, 0.6, 0.3));
        R(G(9), l(-98, -18.4, -40).scale(2.5, 13.5, 2.5), P(0.5, 0.5, 0.5, 0.3));
        R(L(
          w(G(), l(-93, -5.8, -40).scale(9, 1, 5), P(0.8, 0.8, 0.8, 0.1)),
          w(G(9), l(-98, -5.8, -40).scale(3, 8, 3), P(0.7, 0.7, 0.7, 0.2)),
        ));
        Jb(l(-98, -4.4, -40).rotate(0, 90));
        Kb(l(-115, 0.2, -12), [0, 0, 3.5]);
        Kb(l(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
        R(L(
          yb(
            w(G(6, 0, 0, 0.6), l(-100, 0.7, 105.5).scale(8, 1, 11), P(0.7, 0.7, 0.7, 0.2)),
            w(G(), l(-101.5, 0.7, 93.5).scale(10.5, 1, 2), P(0.7, 0.7, 0.7, 0.2)),
          ),
          w(G(5), l(-100, 0.7, 113).scale(4, 3, 4), P(0.7, 0.7, 0.7, 0.2)),
        ));
        ib(4, f =>
          W(() => {
            R(
              G(6),
              l(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              P(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
            );
          }));
        W(() => {
          R(L(w(G(10), n(6, 2, 6), P(0.1, 0.6, 0.5, 0.3)), w(G(10), n(3.3, 6, 3.3), P(0.1, 0.6, 0.5, 0.5))));
          R(G(15, 1), l(-7.5).rotate(0, 90).scale(3, 2.3, 3), P(0.4, 0.4, 0.4, 0.3));
          R(G(10), l(-7.5).rotate(0, 90).scale(2, 2.5, 2), P(0.3, 0.8, 0.7, 0.3));
          R(G(5), l(-7.5).rotate(0, 90).scale(1, 3), P(0.5, 0.5, 0.5, 0.5));
          Jb(l(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
          [-1, 1].map(f => R(N, hb(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), P(1, 1, 0.8, 0.2)));
          Kb(l(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
        });
        [-1, 1].map(f => {
          [7.2, 1.5].map(r => R(G(15, 1), l(-7.5 * f - 100, r + 0.7, 96).scale(1.1, 0.5, 1.1), P(0.5, 0.24, 0.2, 0.4)));
          R(N, l(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), P(1, 1, 0.8));
          R(G(12, 1), l(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), P(0.6, 0.24, 0.2, 0.5));
          R(
            L(
              w(G(), l(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), P(0.5, 0.5, 0.5, 0.4)),
              w(G(), n(3, 3, 10), P(0.6, 0.24, 0.2, 0.5)),
              w(G(28, 1), l(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(0.6, 0.24, 0.2, 0.5)),
              w(G(5), l(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(0.6, 0.24, 0.2, 0.5)),
              w(G(5), l(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), P(0.6, 0.24, 0.2, 0.5)),
            ),
            l(f - 100, 0.7, 97),
          );
        });
        R(L(
          w(G(), l(-82.07, 0.8, 106).scale(11, 0.9, 2.2), P(0.7, 0.7, 0.7, 0.1)),
          w(G(45, 1), l(-81, 0.7, 106).scale3d(7.7), P(0.7, 0.7, 0.7, 0.1)),
        ));
        W(() => {
          R(L(
            w(G(45, 1), n(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)),
            w(G(), l(0, 0, -5.5).scale(1.5, 3, 2.7), P(0.45, 0.45, 0.45, 0.2)),
          ));
          R(G(8), l(0, 2).scale(3, 1.5, 3).rotate(0, 22), P(0.7, 0.7, 0.7, 0.1));
          R(G(5), l(0, 2).scale(1, 2), P(0.3, 0.3, 0.3, 0.2));
          Kb(l(0, 3), ...lb(14).map(({ x: f, z: r }) => [5.6 * f, 5.6 * r, 2]));
        });
        W(() => {
          [-1, 1].map(f =>
            R(N, hb(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), P(1, 1, 0.8))
          );
          R(L(w(G(28, 1), l(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), w(G(), n(9, 5, 2), P(0.3, 0, 0, 0.3))));
          R(w(G(28, 1), n(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
          R(w(G(5), l(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
        });
        W(() => {
          R(L(
            w(G(28, 1), l(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)),
            w(G(), l(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)),
            w(G(), l(0, 0, 7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),
          ));
          R(w(G(28, 1), n(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
          R(w(G(5), l(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
        });
        W(() => {
          R(L(
            w(G(28, 1), l(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)),
            w(G(), l(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)),
            w(G(), l(0, 0, -7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),
          ));
          R(w(G(28, 1), n(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
          R(w(G(5), l(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
        });
        R(G(), l(-58, 1, 106).scale(2, 0.65, 2), P(0.7, 0.7, 0.7, 0.2));
        R(G(), l(-50.7, 1, 99).scale(2, 0.65, 1), P(0.7, 0.7, 0.7, 0.2));
        R(G(), l(-42, 0.4, 91).scale(5, 1, 2.5), P(0.7, 0.7, 0.7, 0.3));
        R(G(), l(-34.2, 0.4, 91).scale(3, 1, 3), P(0.7, 0.7, 0.7, 0.3));
        Jb(l(-34, 2.7, 96).rotate(-12, 0));
        R(G(5), l(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), P(0.2, 0.5, 0.5, 0.6));
        [P(0.1, 0.55, 0.45, 0.2), P(0.2, 0.5, 0.5, 0.3), P(0.3, 0.45, 0.55, 0.4)].map((f, r) =>
          W(() => {
            R(G(), l(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
            2 === r && R(G(), l(-29.1, 0.4, 91).scale(2.1, 1, 3), P(0.7, 0.7, 0.7, 0.3));
            1 === r && R(G(), l(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), P(0.6, 0.6, 0.7, 0.3));
          })
        );
        [-1, 1].map(f => R(N, l(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), P(1, 1, 0.8)));
        ib(
          3,
          f =>
            R(
              J(24.7 - 0.7 * (1 & f)),
              l(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
              1 & f ? P(0.5, 0.5, 0.5, 0.3) : P(0.35, 0.35, 0.35, 0.5),
            ),
        );
        R(L(
          w(G(6, 0, 0, 0.3), l(0, -0.92, 95).scale(14, 2, 14), P(0.8, 0.8, 0.8, 0.2)),
          w(G(5), l(0, 0, 95).scale3d(6), P(0.3, 0.3, 0.3, 0.5)),
        ));
        Jb(l(0, 1.7, 82).rotate(0, 180));
        R(G(5), l(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(0.5, 0.3, 0.3, 0.4));
        R(G(6), l(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(0.5, 0.6, 0.7, 0.3));
        R(G(), l(0, 16, 129).scale(1.5, 1, 2), P(0.5, 0.6, 0.7, 0.3));
        R(G(7), l(0, 16.2, 133).scale(5, 1, 5), P(0.4, 0.5, 0.6, 0.4));
        R(L(
          yb(
            w(G(), l(0, 16, 110.5).scale(12, 1, 3), P(0.5, 0.3, 0.3, 0.4)),
            w(G(), l(0, 16, 111).scale(3, 1, 3.8), P(0.5, 0.3, 0.3, 0.4)),
          ),
          w(G(5), l(0, 16, 103.5).scale(5.5, 5, 5.5), P(0.5, 0.3, 0.3, 0.4)),
        ));
        W(() => {
          R(G(3), l(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), P(0.5, 0.3, 0.3, 0.4));
          [22, 30].map(f => {
            R(G(6), l(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), P(0.7, 0.7, 0.7, 0.4));
            R(G(), l(0, 6.2, f + 95).scale(0.5, 11, 0.5), P(0.5, 0.3, 0.3, 0.4));
          });
        });
        W(() => {
          R(G(5), n(5, 1.1, 5), P(0.5, 0.3, 0.3, 0.4));
          R(G(5), n(5.5, 0.9, 5.5), P(0.25, 0.25, 0.25, 0.4));
          Jb(l(0, 1.5, -1).rotate(0, 180));
        });
        Kb(l(0, 3, 95), ...lb(9).map(({ x: f, z: r }) => [9 * f, 9 * r, 4]));
        Kb(l(0, 19, 134), [0, 0, 3.5]);
      });
      W(() => {
        R(nb(20), l(0, 1).scale3d(0.5), P(1, 0.3, 0.4));
        R(nb(30), n(0.65, 0.8, 0.55), P(1, 0.3, 0.4));
        R(G(), l(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), P(0.3, 0.3, 0.3));
        [-1, 1].map(y => {
          R(N, hb(0, 0 < y ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), P(1, 1, 0.8));
          R(
            w(L(G(15, 1), w(G(), l(0, 0, 1).scale(2, 2, 0.5))), hb(-90, 0).scale(0.1, 0.05, 0.1), P(0.3, 0.3, 0.3)),
            l(0.2 * y, 1.2, 0.4).rotate(0, 20 * y, 20 * y),
          );
          W(() => {
            R(G(20, 1), l(0.3 * y, -0.8).scale(0.2, 0.7, 0.24), P(1, 0.3, 0.4));
          });
        });
      });
      W(() => {
        R(G(6, 1), n(0.13, 1.4, 0.13), P(0.3, 0.3, 0.5, 0.1));
        R(G(10), l(0, 1).scale(0.21, 0.3, 0.21), P(1, 0.5, 0.2));
        R(G(3), l(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), P(0.2, 0.2, 0.2, 0.1));
      }, 0);
      W(() => {
        R(G(6).slice(0, -1), n(0.77, 1, 0.77), P(1, 0.3, 0.5));
      }, 0);
      W(() => {
        R(
          nb(30, 24, (y, J, S) => {
            const O = J / 24, B = y * Math.PI * 2 / 30, E = Math.sin(O ** 0.6 * Math.PI / 2);
            y = O * O * Math.sin(y * Math.PI * 14 / 30) / 4;
            return 23 < J
              ? { x: S.C = 0, y: -0.5, z: 0 }
              : {
                x: Math.cos(B) * E,
                y: Math.cos(O * Math.PI) - O - y,
                z: Math.sin(B) * E + Math.sin(y * Math.PI * 2) / 4,
              };
          }),
          n(0.7, 0.7, 0.7),
          P(1, 1, 1),
        );
        [-1, 1].map(y => R(nb(12), l(0.16 * y, 0.4, -0.36).scale3d(0.09)));
      }, 0);
    },
    q = () => {
      let I = 0;
      const N = X => {
          let Q, Y, ja, la = 0, ma = 0;
          const Qb = [],
            Na = new Int32Array(768 * X),
            dc = 2 ** (z - 9) / X,
            ec = Math.PI * 2 ** (F - 8) / X,
            zb = T * X & -2;
          for (let ub = 0; 11 >= ub; ++ub) {
            for (
              let vb = 0, Rb = +"000001234556112341234556011111111112011111111112000001111112"[12 * k + ub];
              32 > vb;
              ++vb
            ) {
              const Sb = (32 * ub + vb) * X;
              for (var Oa = 0; 4 > Oa; ++Oa) {
                if (Q = 0, Rb && (Q = y[Rb - 1].charCodeAt(vb + 32 * Oa) - 40, Q += 0 < Q ? 106 : 0), Q) {
                  var ia;
                  if (!(ia = Qb[Q])) {
                    ia = Q;
                    let V = void 0, wa = void 0;
                    var Tb = Q;
                    let fc = 0, gc = 0;
                    const hc = 2 > k ? ac : Zb, ic = 2 > k ? 1 > k ? $b : bc : Zb, Ub = new Int32Array(v + x + U);
                    for (let Pa = 0, Ab = 0; v + x + U > Pa; ++Pa, ++Ab) {
                      let Qa = 1;
                      v > Pa ? Qa = Pa / v : v + x > Pa || (Qa = (1 - (Qa = (Pa - v - x) / U)) * 3 ** (-C / 16 * Qa));
                      0 > Ab
                        || (Ab -= 4 * X,
                          wa = 0.00396 * 2 ** ((Tb + S - 256) / 12),
                          V = 0.00396 * 2 ** ((Tb + E - 256) / 12) * (1 + (k ? 0 : 0.0072)));
                      Ub[Pa] = 80
                          * (hc(fc += wa * Qa ** (O / 32)) * J + ic(gc += V * Qa ** (f / 32)) * B
                            + (r ? (2 * Math.random() - 1) * r : 0))
                          * Qa | 0;
                    }
                    ia = Qb[ia] = Ub;
                  }
                  for (let V = 0, wa = 2 * Sb; ia.length > V; ++V, wa += 2) {
                    Na[wa] += ia[V];
                  }
                }
              }
              for (let V, wa = 0; X > wa; ++wa) {
                Oa = 0;
                ia = 2 * (Sb + wa);
                var xa = (((V = Na[ia]) || ja)
                  && (Y = 0.00308 * t,
                    1 !== k && 4 !== k || (Y *= Math.sin(dc * ia * Math.PI * 2) * ka / 512 + 0.5),
                    Y = 1.5 * Math.sin(Y),
                    la += Y * ma,
                    xa = (1 - p / 255) * (V - ma) - la,
                    ma += Y * xa,
                    V = 4 === k ? ma : 3 === k ? xa : la,
                    k || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5),
                    V *= m / 32,
                    ja = 1e-5 < V * V,
                    xa = Math.sin(ec * ia) * H / 512 + 0.5,
                    Oa = V * (1 - xa),
                    V *= xa),
                  ia < zb || (Oa += Na[1 + ia - zb] * ea
                    / 255,
                    V += Na[ia - zb] * ea / 255),
                  I + ia >> 1);
                D[xa] += (Na[ia] = Oa) / 65536;
                K[xa] += (Na[++ia] = V) / 65536;
              }
            }
          }
          I += 768 * X;
        },
        y = La[k],
        [J, S, O, B, E, f, r, v, x, M, C, z, t, p, m, H, F, ea, T, ka] = Ma[k],
        U = 4 * M ** 2;
      N(5513);
      N(4562);
      N(3891);
      Yb(5 > ++k ? q : u);
    },
    A = Gb.createBuffer(2, 5362944, 44100),
    D = A.getChannelData(0),
    K = A.getChannelData(1);
  Fb.buffer = A;
  Fb.loop = !0;
  Yb(q);
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
