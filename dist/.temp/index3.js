let aa,
  ba,
  ca,
  da,
  ea,
  ha,
  ja,
  ka,
  la,
  na,
  oa,
  pa,
  qa,
  ra,
  va,
  c = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 1,
  d = 0.066;
const Ga = [],
  e = [],
  La = [],
  Ma = Math.PI / 180,
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
var Qa = 0, Ra = 180;
const Sa = { x: 0, y: 0, z: 0 },
  h = NO_INLINE(a => 0 > a ? -a : a),
  Ta = NO_INLINE((a, b) => a < b ? a : b),
  Ua = NO_INLINE((a, b) => b < a ? a : b),
  Va = (a, b) => h(a) > b ? a : 0,
  n = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a,
  Wa = a => Math.atan2(Math.sin(a * Ma), Math.cos(a * Ma)) / Ma,
  Xa = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * n(f) || 0,
  Ya = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0,
  Za = (a, b) => (a = n(a), Ya(a, 1 - a, b)),
  $a = (a, b, f = 0) =>
    Math.sqrt(
      a
          * a + b * b + f * f,
    ),
  bb = (
    a,
    b = ab,
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
  fb = (
    a = cb,
    b = eb,
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
  p = NO_INLINE((a, b, f) => cb.translate(a, b, f)),
  gb = NO_INLINE((a, b, f) => cb.rotate(a, b, f)),
  x = NO_INLINE((a, b, f) => cb.scale(a, b, f)),
  hb = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  ib = (a, b, f) => (a.C = f, a.u = b, a),
  jb = (a, b, f = a.u) =>
    ib(
      a.map(k => {
        let r, m;
        return { x: k, y: r, z: m } = k,
          { x: k, y: r, z: m } = b.transformPoint({ x: k, y: r, z: m }),
          { x: k, y: r, z: m };
      }),
      f,
      a.C,
    ),
  H = (a, b, f) => a.map(k => jb(k, b, f)),
  kb = (a, b = 0) =>
    hb(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > h(k) ? k : 0 > k ? k - b : k + b };
    }),
  lb = (a, b, f) =>
    a.map((k, r, { length: m }) => ib([k, b[m - r - 1], b[m - (r + 1) % m - 1], a[(r + 1) % m]], a.u, f)),
  M = (
    a,
    b,
    f = 0,
    k,
  ) => (a = a ? kb(a, k) : Na,
    k = jb(a, p(0, 1).scale3d(0 < f ? f : 1)),
    a = jb(a, p(0, -1).scale3d(0 > f ? -f : 1)).reverse(),
    [...lb(a, k, b), k, a]),
  mb = (
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
        const v = ib([], 0, 1);
        k.push(v);
        v.push(f(r, m, v));
        m && v.push(f((r + 1) % a, m, v));
        b - 1 > m && v.push(f((r + 1) % a, m + 1 % b, v));
        v.push(f(r, m + 1 % b, v));
      }
    }
    return k;
  },
  nb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  ob = a => {
    let b, f = 0, k = 0, r = 0, m = a.at(-1);
    for (b of a) {
      f += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), r += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = $a(f, k, r), f /= b, k /= b, r /= b, { x: f, y: k, z: r, w: f * m.x + k * m.y + r * m.z };
  },
  pb = (a, b) => {
    var f, k, r, m = b.B;
    for (var v = 0; m.length > v; ++v) {
      if (-0.00008 > (f = nb(a, m[v]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
        k = [];
        r = [];
        m = b.B;
        v = b.v;
        let y = m.at(-1), z = nb(a, y) - a.w;
        for (const w of m) {
          f = nb(a, w) - a.w,
            8e-5 > z && r.push(y),
            -0.00008 < z && k.push(y),
            (8e-5 < z && -0.00008 > f || -0.00008 > z && 8e-5 < f)
            && (z /= f - z,
              y = { x: y.x + (y.x - w.x) * z, y: y.y + (y.y - w.y) * z, z: y.z + (y.z - w.z) * z },
              k.push(y),
              r.push(y)),
            y = w,
            z = f;
        }
        return {
          l: 2 < k.length && { B: ib(k, m.u, m.C), v, A: b },
          j: 2 < r.length && { B: ib(r, m.u, m.C), v, A: b },
        };
      }
    }
    return { l: k, j: r };
  },
  qb = (a, b, f = ob(b.B)) => {
    let k, r, m;
    return a
      ? ({ l: k, j: r } = pb(a, b), k || r || a.o.push(b), k && (a.l = qb(a.l, k, f)), r && (a.j = qb(a.j, r, f)))
      : ({ x: k, y: r, z: f, w: m } = f, a = { x: k, y: r, z: f, w: m, o: [b], l: 0, j: 0 }),
      a;
  },
  rb = (a, b, f) => {
    const k = [],
      r = (m, v) => {
        let { l: y, j: z } = pb(m, v);
        y || z || (0 < f * nb(m, b) ? y = v : z = v);
        y && (m.l ? r(m.l, y) : k.push(y));
        z && m.j && r(m.j, z);
      };
    for (const m of b.o) {
      r(a, m);
    }
    return k;
  },
  sb = (a, b) => a && (b(a), sb(a.l, b), sb(a.j, b)),
  tb = a => (sb(a, b => {
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
  ub = a => a.length ? a.reduce((b, f) => qb(b, { B: f, v: 0, A: 0 }), 0) : a,
  xb = (...a) =>
    a.reduce((b, f) => {
      const k = [];
      if (b = ub(b), f) {
        f = ub(f);
        sb(b, r => r.o = rb(f, r, 1));
        sb(f, r => k.push([r, rb(b, r, -1)]));
        for (let [r, m] of k) {
          for (const v of m) {
            qb(b, v, r);
          }
        }
      }
      return b;
    }),
  S = (a, ...b) => {
    const f = m => {
        let v;
        return m.A && ((v = k.get(m.A)) ? (r.delete(v), m = f(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      r = new Map();
    return a = tb(xb(tb(ub(a)), ...b)),
      sb(a, m => {
        for (const v of m.o) {
          r.set(f(v), v.v);
        }
      }),
      Array.from(r, ([{ B: m }, v]) => {
        const y = m.map(({ x: z, y: w, z: B }) => ({ x: z, y: w, z: B }));
        return ib(v ? y.reverse() : y, m.u, m.C);
      });
  },
  yb = NO_INLINE((a, b, f) => Ya(a, b, 1 - Math.exp(-f * d))),
  zb = () => {
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
      ][xa = Ga.reduce((a, { i: b }) => a + b, 0)] + " / XIII";
  },
  Cb = () => {
    localStorage.DanteSP22 = JSON.stringify([e.map(({ i: a }) => a), Ga.map(({ i: a }) => a), za, c, da]);
  },
  Db = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Gb = () => {
    let a, b, f, k, r, m, v, y, z, w, B, N, g, u, F = !0;
    const I = [],
      O = () => {
        b4.innerHTML = "Music: " + F;
        ba || !F ? Eb.disconnect() : Eb.connect(Fb.destination);
      },
      P = () => {
        const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ka = [Db(0.3, 55, q, 1.732051), Db(55, 181, q, 1.732051)];
        ja = Db(0.3, 181, q, 1.732051);
        k = y = void 0;
        I.length =
          ea =
          u =
          N =
          g =
          Aa =
          Ba =
            0;
      },
      t = (q, l = 0) => {
        if (ba !== q) {
          ba = q;
          ha = l;
          P();
          document.body.className = q ? "l m" : "l";
          try {
            q
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Eb.start());
          } catch {
          }
          O();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => t(!1);
    b2.onclick = () => t(!1, 1);
    b5.onclick = () => t(!0);
    b4.onclick = () => {
      F = !F;
      O();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = q => {
      if (!ba && (q.target === hC && (ea = 1), ha)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = q => {
      let l;
      q.repeat
        || (l = {
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
          (I[l] = !!q.type[5] && !0) && (0 === l && (ea = 1), 1 === l && t(!0)));
    };
    onmousemove = ({ movementX: q, movementY: l }) => {
      ha && (q || l) && (Ra += 0.1 * q, Qa += 0.1 * l);
    };
    hC.ontouchstart = q => {
      if (!ba) {
        for (let { pageX: l, pageY: J, identifier: E } of q.changedTouches) {
          ha && l > hC.clientWidth / 2
            ? void 0 === y && (z = 0, m = l, v = J, y = E, w = Ra, B = Qa)
            : void 0 === k && (r = 0, b = l, f = J, k = E);
        }
        a = wa;
      }
    };
    hC.ontouchmove = q => {
      if (!ba) {
        for (let { pageX: C, pageY: K, identifier: L } of q.changedTouches) {
          var l, J, E, D;
          y === L && (Ra = w + (C - m) / 2.3, Qa = B + (K - v) / 2.3, z = 1);
          k === L
            && (L = (b - C) / 20,
              l = h(L),
              J = (f - K) / 20,
              E = h(J),
              (D = 0.5 < Ua(l, E)) && (r = 1),
              N = (D && 0.2 < l) * n(L, -1),
              g = (D && 0.2 < E) * n(J, -1),
              2 < l && (b = C + 20 * (0 > L ? -1 : 1)),
              2 < E && (f = K + 20 * (0 > J ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = q => {
      let l;
      document.activeElement === document.body && q.preventDefault();
      for (const J of q.changedTouches) {
        J.identifier === y
          ? (y = void 0, z || (l = 1), z = 0)
          : J.identifier === k
          ? (k = void 0, g = N = 0, r || (l = 1), r = 0)
          : l = 1;
      }
      q.target === hC && l && a && 0.02 < (q = wa - a) && 0.7 > q && (ea = 1);
    };
    la = () => {
      Aa = g + (I[4] ? 1 : 0) - (I[5] ? 1 : 0);
      Ba = N + (I[2] ? 1 : 0) - (I[3] ? 1 : 0);
      var q = navigator.getGamepads()[0];
      if (q) {
        const l = E => J[E]?.pressed || 0 < J[E]?.value ? 1 : 0, J = q.buttons;
        q = q.axes;
        ha && (Qa += d * Va(q[3], 0.3) * 80, Ra += d * Va(q[2], 0.3) * 80);
        Aa += l(12) - l(13) - Va(q[1], 0.2);
        Ba += l(14) - l(15) - Va(q[0], 0.2);
        l(9) && t(!0);
        (q = l(3) || l(2) || l(1) || l(0)) && !u && (ea = 1);
        u = q;
      }
    };
    document.onvisibilitychange = onblur = onresize = P;
    t(!0);
  },
  U = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  X = (a, b = new DOMMatrix(), f) => na.o.push(...H(a, b, f)),
  Y = (a, b = 1) => {
    const f = na;
    La.push(na = { m: new DOMMatrix(), G: b, o: [] });
    a();
    na = f;
  },
  Hb = a => (a = a.transformPoint(), $a(Sa.x - a.x, Sa.y - a.y, Sa.z - a.z)),
  Ib = a => {
    const b = na,
      f = e.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = yb(k.g, k.i, 4);
          k.h = yb(k.h, k.i, 1);
          fb(b.m).multiplySelf(a);
          ea && 3 > Hb(eb) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, f && 1 / 0 > Fa && (Fa = c + 1, h4.innerHTML = "* click *"), za = f, Cb());
          !f && k.i && 0.8 < k.g && (k.i = 0,
            13 > xa
              ? 1 / 0 > Fa && (Fa = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : ya
                || (1 / 0 > Fa
                  && (Fa = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  ya = 1));
          eb.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    e.push(k);
    X(M(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(M(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(M(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
  },
  Jb = (a, ...b) => {
    let f, k, r, m = -1, v = 0, y = 0, z = 1, w = 3;
    const B = {
        i: 0,
        F() {
          if (!B.i) {
            let D, C, K, L, G, T, V, A = 1, Q = 1 / 0;
            for (const R of N) {
              var { x: q, z: l, w: J } = R;
              l = (q = $a(u - q, F - l)) - J;
              V ||= 0 > l;
              0 < l && Q > l && (Q = l, g = R);
              A = Ta(A, q / J);
            }
            V
              || ({ x: E, z: D, w: C } = g,
                K = u - E,
                L = F - D,
                G = $a(K, L),
                T = Math.atan2(-L, K),
                z && (y = (Math.random() - 0.5) * Math.PI / 2, w = n(w / (1 + Math.random()))),
                T += y,
                m = -Math.cos(T),
                v = Math.sin(T),
                0.1 < G && (G = Ta(G, C) / (G || 1), u = K * G + E, F = L * G + D));
            z = V;
            w = yb(w, 6 * (1 - A) + 3, A + 3);
            I = yb(I, u = yb(u, u + m, w), w);
            O = yb(O, F = yb(F, F + v, w), w);
            f = Xa(f, Math.atan2(I - k, O - r) / Ma - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > Hb(fb(P).multiplySelf(a).translateSelf(k = I, 0, r = O).rotateSelf(0, f, 7 * Math.sin(1.7 * c)))
            ) {
              B.i = 1;
              var E = [
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
              ][xa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Fa && (Fa = c + (xa && 12 > xa ? 5 : 7), h4.innerHTML = E);
              zb();
              Cb();
            }
          }
          B.i
            && fb(La[2].m).translateSelf(
              t % 4 * 1.2 - 1.7 + Math.sin(c + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + h(t % 4 - 2) + Math.cos(c / 1.5 + t) / 6,
            );
        },
      },
      N = b.map(([q, l, J]) => ({ x: q, z: l, w: J }));
    let g = N[0], { x: u, z: F } = g, I = u, O = F;
    const P = na.m, t = Ga.length;
    Ga.push(B);
  },
  Lb = () => {
    let a, b, f, k, r, m, v, y, z, w, B, N, g, u, F = 1, I = 2, O = 15;
    const P = { x: 0, y: 0, z: 0 },
      t = () => fb((I ? e[za] : La[B && 1 === La[B].G && B || 0]).m),
      q = D => {
        const { x: C, y: K, z: L } = 1 < I
          ? fb(e[za].m).multiplySelf(e[za].H).transformPoint({ x: 0, y: za || 0.9 < ca ? 15 : 1, z: -2.4 })
          : t().transformPoint(P);
        D && (r = (C - Sa.x) / d, m = (L - Sa.z) / d);
        Sa.x = C;
        Sa.y = K;
        Sa.z = L;
      },
      l = (D, C, K) => {
        t().invertSelf();
        eb.m41 = eb.m42 = eb.m43 = 0;
        D = eb.transformPoint({ x: D, z: K, w: 0 });
        P.x += D.x;
        P.y += C;
        P.z += D.z;
        q();
      },
      J = () => {
        var D = 0, C = 0, K = 0;
        let L = 0;
        var G = -1;
        let T = 0, V = 0;
        for (var A = 0; 36 > A; ++A) {
          var Q = 512 * A;
          for (var R = 96; 416 > R; R += 4) {
            for (var sa = 0; 2 > sa; ++sa) {
              var ia = Kb[Q + R + sa], ma = Kb[Q + R + sa + 2];
              ia > L && (L = ia);
              ia + ma && (0 > G || G === A) && (G = A, ma === w ? ++D : C && C !== ma || (C = ma, ++K));
            }
          }
        }
        w = 0 > G ? 0 : K > 2 * D ? C : w;
        for (D = 36; 128 > D; D += 1) {
          A =
            G =
            K =
            C =
              0;
          Q = 512 * D;
          for (R = 0; 128 > R; R += 1) {
            for (sa = Q + 4 * R, ia = 0; 2 > ia; ++ia) {
              ma = Kb[sa + ia];
              const db = Kb[sa + ia + 2];
              (ia ? 64 < R : 64 > R) ? C = Ua(C, ma) : K = Ua(K, ma);
              ia ? A = Ua(A, db) : G = Ua(G, db);
            }
          }
          h(K - C) > h(T) && (T = K - C);
          h(A - G) > h(V) && (V = A - G);
        }
        y = n(1 - 0.02 * Ua(h(T), h(V)));
        l(T / 255, L / 255, V / 255);
      },
      E = (D, C, K, L) => Ya(D, C, F || (n(h(C - D) ** 0.5 - K) + 1 / 7) * (1 - Math.exp(-(1.5 * L) * d)));
    oa = D => {
      q(w);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Kb);
      NO_INLINE(J)();
      !I && w === B || (B = w, C = t().invertSelf().transformPoint(Sa), P.x = C.x, P.y = C.y, P.z = C.z);
      I = I && (w ? 0 : 1);
      var { x: C, y: K, z: L } = Sa,
        G =
          (K < (-20 > C || 109 > L ? -25 : -9) && (I = 2),
            1 === w && (e[9].i = -15 > C && 0 > L ? 1 : 0),
            z = Ya(yb(z, K, 2), K, I || 8 * h(z - K)),
            g = E(g, z, 2, 1),
            N = E(N, C, 0.5, 1),
            u = E(u, L, 0.5, 1),
            k = yb(k, pa * (27 < w && 32 > w), 2),
            ha
              ? (G = I + (1 - Math.exp(-18 * d)),
                Ca = Ya(Ca, C, G),
                Da = Ya(Da, z + 1.5, G),
                Ea = Ya(Ea, L, G),
                Ra = Wa(Ra))
              : (Ea = E(Ea, u + -18 + 5 * k, 1, 2 + k),
                Da = E(Da, Ua(g + n((-60 - L) / 8, 0, 20) + 13 + 9 * k, 6), 4, 2),
                Ca = E(Ca, N, 1, 2 + k),
                G = Ta(-6, -h(u - Ea)),
                T = N - Ca,
                Ra = Xa(Ra, 90 - Wa(Math.atan2(G, T) / Ma), F + (1 - Math.exp(-10 * d))),
                Qa = Xa(Qa, 90 - Math.atan2($a(G, T), Da - g) / Ma, F + (1 - Math.exp(-10 * d)))),
            Qa = n(Qa, -87, 87),
            F = 0,
            n(Aa, -1)),
        T = n(Ba, -1);
      const V = Va($a(G, T) ** 0.5, 0.1);
      var A = Math.atan2(G, T);
      G = V * h(G) * Math.sin(A);
      T = V * h(T) * Math.cos(A);
      V && (a = 90 - A / Ma);
      b = Xa(b, a, 1 - Math.exp(-8 * d));
      f = yb(f, V, 10);
      D().translateSelf(C, z, L).rotateSelf(0, b);
      for (A = 0; 2 > A; ++A) {
        const Q = 9.1 * c - Math.PI * A;
        fb(La[37].m, D()).translateSelf(0, f * n(0.45 * Math.sin(Q - Math.PI / 2))).rotateSelf(
          f * Math.sin(Q) * 0.25 / Ma,
          0,
        );
      }
      O = w ? 5 : yb(O, I ? 13 : 19 - 2 * Ta(0, K + 10), 2.2);
      r = w || I ? 0 : yb(r, 0, 3);
      m = w || I ? 0 : yb(m, 0, 3);
      v = I ? 0 : yb(v, w ? 7 * n(2 * V) * y : 0, w ? 9 : 1);
      A = ha ? (180 + Ra) * Ma : 0;
      l(d * (r + v * (T * Math.cos(A) - G * Math.sin(A))), -O * d, d * (m + v * (T * Math.sin(A) + G * Math.cos(A))));
    };
  },
  Mb = (a, b, f, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  Tb = (a, b, f) => {
    ba
      ? 1100 < hC.width
        && (fb().rotateSelf(0, 40 * Math.sin(wa) - 80, -8),
          bb(eb, Nb, 36),
          bb(eb, Nb, 37),
          bb(eb, Nb, 38),
          Z.uae(a, !1, Nb),
          Z.d97(4, La[39].D - La[37].s, 5123, 2 * La[37].s))
      : (Z.uae(a, !1, Nb),
        Z.d97(4, (b ? La[39].D : La[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Ob),
        Z.das(4, La[f].D - La[f].s, 5123, 2 * La[f].s, Ga.length),
        Z.das(4, La[42].D - La[42].s, 5123, 2 * La[42].s, e.length));
  },
  Ub = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Vb = (a, b) => {
    const f = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Ub(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
  },
  Wb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Xb = a => Math.sin(a * Math.PI * 2),
  Yb = a => 0.5 > a % 1 ? 1 : -1,
  Zb = a => a % 1 * 2 - 1,
  $b = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  gc = a => {
    let b = 0;
    const f = () => {
        let v = 0;
        const y = A => {
            let Q, R, sa, ia = 0, ma = 0;
            const db = [],
              Ha = new Int32Array(768 * A),
              ac = 2 ** (l - 9) / A,
              bc = Math.PI * 2 ** (K - 8) / A,
              Ab = G * A & -2;
            for (let vb = 0; 11 >= vb; ++vb) {
              for (
                let wb = 0, Pb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + vb];
                32 > wb;
                ++wb
              ) {
                const Qb = (32 * vb + wb) * A;
                for (var Ia = 0; 4 > Ia; ++Ia) {
                  if (Q = 0, Pb && (Q = z[Pb - 1].charCodeAt(wb + 32 * Ia) - 40, Q += 0 < Q ? 106 : 0), Q) {
                    var fa;
                    if (!(fa = db[Q])) {
                      fa = Q;
                      let W = void 0, ta = void 0;
                      var Rb = Q;
                      let cc = 0, dc = 0;
                      const ec = 2 > b ? Zb : Xb, fc = 2 > b ? 1 > b ? Yb : $b : Xb, Sb = new Int32Array(O + P + V);
                      for (let Ja = 0, Bb = 0; O + P + V > Ja; ++Ja, ++Bb) {
                        let Ka = 1;
                        O > Ja ? Ka = Ja / O : O + P > Ja || (Ka = (1 - (Ka = (Ja - O - P) / V)) * 3 ** (-q / 16 * Ka));
                        0 > Bb
                          || (Bb -= 4 * A,
                            ta = 0.00396 * 2 ** ((Rb + B - 256) / 12),
                            W = 0.00396 * 2 ** ((Rb + u - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Sb[Ja] = 80
                            * (ec(cc += ta * Ka ** (N / 32)) * w + fc(dc += W * Ka ** (F / 32)) * g
                              + (I ? (2 * Math.random() - 1) * I : 0))
                            * Ka | 0;
                      }
                      fa = db[fa] = Sb;
                    }
                    for (let W = 0, ta = 2 * Qb; fa.length > W; ++W, ta += 2) {
                      Ha[ta] += fa[W];
                    }
                  }
                }
                for (let W, ta = 0; A > ta; ++ta) {
                  Ia = 0;
                  fa = 2 * (Qb + ta);
                  var ua = (((W = Ha[fa]) || sa)
                    && (R = 0.00308 * J,
                      1 !== b && 4 !== b || (R *= Math.sin(ac * fa * Math.PI * 2) * T / 512 + 0.5),
                      R = 1.5 * Math.sin(R),
                      ia += R * ma,
                      ua = (1 - E / 255) * (W - ma) - ia,
                      ma += R * ua,
                      W = 4 === b ? ma : 3 === b ? ua : ia,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= D / 32,
                      sa = 1e-5 < W * W,
                      ua = Math.sin(bc * fa) * C / 512 + 0.5,
                      Ia = W * (1 - ua),
                      W *= ua),
                    fa < Ab || (Ia += Ha[1 + fa - Ab] * L / 255, W += Ha[fa - Ab] * L / 255),
                    v + fa >> 1);
                  r[ua] += (Ha[fa] = Ia) / 65536;
                  m[ua] += (Ha[++fa] = W) / 65536;
                }
              }
            }
            v += 768 * A;
          },
          z = Oa[b],
          [w, B, N, g, u, F, I, O, P, t, q, l, J, E, D, C, K, L, G, T] = Pa[b],
          V = 4 * t ** 2;
        y(5513);
        y(4562);
        y(3891);
        Wb(5 > ++b ? f : a);
      },
      k = Fb.createBuffer(2, 5362944, 44100),
      r = k.getChannelData(0),
      m = k.getChannelData(1);
    Eb.buffer = k;
    Eb.loop = !0;
    Wb(f);
  },
  Fb = new AudioContext(),
  cb = new DOMMatrix(),
  eb = new DOMMatrix(),
  ab = new Float32Array(16),
  Nb = new Float32Array(624),
  Ob = new Float32Array(624),
  Kb = new Uint8Array(65536),
  hc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Eb = Fb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Wb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const r = [new Float32Array(16), new Float32Array(16)],
          m = t => {
            requestAnimationFrame(m);
            var q = (t - (aa || t)) / 1e3;
            if (wa += q, c += d = ba ? 0 : Ta(0.066, q), aa = t, 0 < d) {
              la();
              Fa && c > Fa && (Fa = 0, h4.innerHTML = "");
              da = yb(da, e[9].h, 0.2 + 0.3 * h(2 * e[9].h - 1));
              ca = yb(ca, ya ? yb(ca, -9, 1.5) : n(c / 3), 1);
              let C = 1;
              var l = () => fb(cb, La[++C].m);
              q =
                (pa = Za(e[12].g, e[13].g),
                  va = Ya(yb(va, 0, 1), Wa(va + 60 * d), e[5].g - e[6].h),
                  qa = Ya(yb(qa, 0, 5), Wa(qa + 56 * d), pa),
                  ra = Ya(yb(ra, 0, 4), Wa(ra + 48 * d), pa),
                  Mb(l(), -12, 4.2, 40 * ca - 66),
                  l().translateSelf(0, 0, -15).scaleSelf(1, n(1.22 - e[1].g), 1),
                  l().translateSelf(0, 0, 15).scaleSelf(1, n(1.22 - e[2].g), 1),
                  l().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, n(1.1 - e[6].g), 1),
                  l().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g),
                  l().translateSelf(
                    0,
                    0.01 > e[3].g ? -500 : (1 - e[2].g) * e[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (e[3].g - 1),
                    0,
                  ),
                  Ta(e[2].h, 1 - e[4].h));
              t =
                (l().translateSelf(q * Math.sin(c / 1.5 + 2) * 12),
                  l().translateSelf(q * Math.sin(0.7 * c + 2) * 12),
                  l().translateSelf(q * Math.sin(c + 3) * 8.2),
                  l().translateSelf(9.8 * (1 - q)),
                  n(1 - 5 * q) * Za(e[4].g, e[5].g));
              q =
                (l().translateSelf(0, t * Math.sin(1.35 * c) * 4),
                  l().translateSelf(0, 0, t * Math.sin(0.9 * c) * 8),
                  l().translateSelf(0, -6.5 * e[4].h),
                  l().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + va, 0),
                  Za(e[7].h, e[6].h));
              t =
                (l().translateSelf(0, q * Math.sin(c) * 5 + 3.5 * (1 - Ua(e[6].g, e[7].g))),
                  l().translateSelf(0, q * Math.sin(c + 3) * 6, q * Math.sin(0.6 * c + 1) * 6),
                  l().translateSelf(0, -7.3 * e[7].h),
                  Mb(l(), -123, 1.4, 55 + -65 * da),
                  Za(e[10].g, e[11].g));
              t =
                (l().translateSelf(0, -2, t * h(Math.sin(1.1 * c)) * -8.5 + 10),
                  l().translateSelf(0, -2, t * h(Math.sin(2.1 * c)) * -8.5 + 10),
                  l().translateSelf(0, -2, -8.5 * Ua((1 - e[10].g) * (1 - t), t * h(Math.sin(1.5 * c))) + 10),
                  Za(e[8].h, e[12].h));
              for (q = 0; 4 > q; q++) {
                l().translateSelf(
                  (2 < q ? 2 * (1 - t) + t : 0) - 100,
                  t * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7,
                  115 + (1 & q ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7
                    + Ua(t, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),
                );
              }
              l().translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - e[8].g) + t * Math.sin(0.8 * c) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * t + 3), 0);
              l().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + qa);
              l().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ra);
              l().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ra);
              l().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ra);
              t = Za(e[13].h, e[14].h);
              for (q = 0; 3 > q; ++q) {
                l().translateSelf(0, (1 - e[13].h) * (1 - e[14].h) * (q ? 0 : 3) + t * Math.sin(1.5 * c + 1.5 * q) * 4);
              }
              l().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              q = Za(Za((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2);
              l().translateSelf(0, 16 * q, 8.5 * n(2 * q - 1) + 95);
              for (t = 0; 13 > t; ++t) {
                Ga[t].F(), bb(eb, Ob, t);
              }
              for (t = 0; 16 > t; ++t) {
                e[t].F(), bb(eb, Ob, t + 13), Ob[16 * t + 223] = 1 - e[t].g;
              }
              oa(l);
              for (l = 0; C >= l; ++l) {
                bb(La[l].m, Nb, l - 1);
              }
              ea = 0;
              N();
              Z.b6o(36160, P);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: t, y: q, z: J } = Sa;
              Z.uae(N("b"), !1, bb(fb().rotateSelf(0, 180).invertSelf().translateSelf(-t, -q, 0.3 - J)));
              Tb(N("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(N("b"), !1, bb(fb().translateSelf(-t, -q, -J - 0.3)));
              Tb(N("c"), 0, 40);
              Z.f1s();
            }
            l = Ca;
            let E = Da, D = Ea;
            ba
              ? ({ x: t, y: q } = fb(ja).invertSelf().transformPoint({ x: 3.6, y: 3.5 }),
                l = t,
                E = q,
                D = 5,
                fb(cb, v).rotateSelf(-20, 0).invertSelf().translateSelf(-l, -E, -D).rotateSelf(0, 99))
              : fb(cb, v).rotateSelf(-Qa, -Ra).invertSelf().translateSelf(-l, -E, -D);
            w();
            Z.b6o(36160, I);
            Z.v5y(0, 0, 2048, 2048);
            F[0](54.7 * 1.1);
            F[1](126 * 1.1);
            g();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(g("a"), !1, bb(ja));
            Z.uae(g("b"), !1, bb(v));
            Z.uae(g("i"), !1, r[0]);
            Z.uae(g("j"), !1, r[1]);
            Z.ubu(g("k"), l, E, D);
            Tb(g("c"), !ha, 41);
            B();
            Z.ubu(B("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
            Z.ubu(B("k"), l, E, D);
            Z.uae(B("b"), !1, bb(fb(v).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, P);
            Z.f1s();
          },
          v = new DOMMatrix(),
          y = new DOMMatrix(),
          z = f;
        var k = Ub(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const w = Vb(
            Ub(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          B = Vb(
            Ub("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          N = Vb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          g = Vb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          u = hb(8, () => ({})),
          F = hb(2, t => {
            const q = Z.c25();
            return Z.a4v(33984 + t),
              Z.b9j(3553, q),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              l => {
                let J = 0, E = 0, D = 0, C = 1 / 0, K = -1 / 0, L = 1 / 0, G = -1 / 0, T = 1 / 0, V = -1 / 0;
                Z.fas(36160, 36096, 3553, q, 0);
                Z.c4s(256);
                fb().scale3dSelf(l).multiplySelf(fb(ka[t], y).multiplySelf(v).invertSelf());
                for (let A = 0; 8 > A; ++A) {
                  const Q = u[A],
                    R = (Q.x = 4 & A ? 1 : -1, Q.y = 2 & A ? 1 : -1, Q.z = 1 & A ? 1 : -1, eb.transformPoint(Q));
                  J -= Q.x = (0 | R.x) / l / R.w;
                  E -= Q.y = (0 | R.y) / l / R.w;
                  D -= Q.z = (0 | R.z) / l / R.w;
                }
                fb().rotateSelf(298, 139).translateSelf(J / 8, E / 8, D / 8);
                for (l = 0; 8 > l; ++l) {
                  const { x: A, y: Q, z: R } = eb.transformPoint(u[l]);
                  C = Ta(C, A);
                  K = Ua(K, A);
                  L = Ta(L, Q);
                  G = Ua(G, Q);
                  T = Ta(T, R);
                  V = Ua(V, R);
                }
                l = 10 + t;
                T *= 0 > T ? l : 1 / l;
                V *= 0 < V ? l : 1 / l;
                Z.uae(
                  w("b"),
                  !1,
                  bb(
                    fb(cb, y).scaleSelf(2 / (K - C), 2 / (G - L), 2 / (T - V)).translateSelf(
                      (K + C) / -2,
                      (G + L) / -2,
                      (T + V) / 2,
                    ).multiplySelf(eb),
                    r[t],
                  ),
                );
                Tb(w("c"), !ha, 41);
              };
          }),
          I = Z.c5w();
        k = Z.c25();
        const O = Z.c3z(), P = Z.c5w();
        N();
        Z.uae(N("a"), !1, bb(Db(1e-4, 2, 1.4, 0.4)));
        g();
        Z.ubh(g("q"), 2);
        Z.ubh(g("h"), 1);
        Z.ubh(g("g"), 0);
        B();
        Z.ubh(B("q"), 2);
        Z.b6o(36160, I);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, P);
        Z.bb1(36161, O);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, O);
        Z.a4v(33986);
        Z.b9j(3553, k);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, k, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, z);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Gb)();
        NO_INLINE(Lb)();
        requestAnimationFrame(m);
      }
    },
    f = new Image();
  f.onload = f.onerror = b;
  f.src = hc;
  NO_INLINE(gc)(() => {
    Wb(() => {
      let m = 0;
      const v = [],
        y = [],
        z = [],
        w = [],
        B = new Int32Array(8),
        N = new Map(),
        g = new Int32Array(B.buffer, 0, 5),
        u = new Float32Array(B.buffer);
      La.map((F, I) => {
        let O;
        const P = t => {
          let { x: q, y: l, z: J } = O[t], E = (u[0] = q, u[1] = l, u[2] = J, t = "" + (O.C ? g : B), N.get(t));
          return void 0 !== E
            ? (q = 3 * E, w[q] = (w[q++] + B[5]) / 2, w[q] = (w[q++] + B[6]) / 2, w[q] = (w[q] + B[7]) / 2)
            : (N.set(t, E = N.size), y.push(q, l, J, u[3]), z.push(B[4]), w.push(B[5], B[6], B[7])),
            E;
        };
        for (O of (u[3] = 41 < I ? -14 : F.G && I, F.o)) {
          const { x: t, y: q, z: l } = ob(O);
          B[4] = 0 | O.u;
          B[5] = 32767 * t;
          B[6] = 32767 * q;
          B[7] = 32767 * l;
          for (let J = 2, E = P(0), D = P(1); O.length > J; ++J) {
            v.push(E, D, D = P(J));
          }
        }
        F.o = null;
        F.s = m;
        F.D = m = v.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(y), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(w), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(z), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [F, I, O, P, t] = JSON.parse(localStorage.DanteSP22);
        e.map((q, l) => q.g = q.h = q.i = l ? 0 | F[l] : 0);
        Ga.map((q, l) => q.i = 0 | I[l]);
        za = O;
        da = t;
        c = P;
        d = 0;
      } catch {
      }
      zb();
      ca = n(za);
      Wb(b);
    });
    const k = hb(11, m => p(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10)),
      r = hb(10, m => lb(jb(kb(18), k[m]).reverse(), jb(kb(18), k[m + 1]), 1)).flat();
    Y(() => X([Na.slice(1)], p(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      let m,
        v = g =>
          Y(() => {
            Na.map(({ x: u, z: F }) => {
              X(M(11, 1), p(4 * u, 4, g + 4 * F).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6));
              X(M(), p(4 * u, 7, g + 4 * F).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
            });
            X(S(
              H(M(), p(0, 0, g).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(u => H(M(), p(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3))),
            ));
            X(M(), p(0, -3, g).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
          });
      const y = g =>
          S(
            H(M(), p(0, -g / 2).scale(6, g - 1, 2.2)),
            H(M(), p(0, -g / 2 - 6).scale(4, g - 3, 4)),
            H(M(32, 1), p(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        z = () => Y(() => hb(7, g => X(H(M(6, 1), p(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38))))),
        w = S(
          H(M(30, 1, 1.15, 1), p(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7)),
          H(M(30, 1, 1.3, 1), p(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2)),
          H(M(), p(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),
        ),
        B = (Y(() => {
          X(w);
          Ib(p(0, -3, 4));
        }),
          Ib(p(-5.4, 1.5, -19).rotate(0, -90)),
          Jb(p(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Jb(p(0, 2.8), [5, 10, 3], [-5, 10, 3], ...kb(18).map(({ x: g, z: u }) => [7 * g, 10 * u, 4.5 - 2 * h(g)])),
          Na.map(({ x: g, z: u }) => X(M(6), p(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))),
          [-15, 15].map((g, u) => {
            z();
            z();
            X(M(), p(0, 6.3, g).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
            X(M(), p(0, 1, g).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
            X(M(), p(0, 0, u ? 22 : -23).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2));
            hb(5, F =>
              X(
                r,
                p(18.5 * (u - 0.5), 0, 4.8 * F - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2),
                U(1, 1, 0.8, 0.2),
              ));
          }),
          X(M(), p(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
          X(M(), p(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)),
          X(M(), p(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2)),
          X(M(5), p(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4)),
          X(M(), gb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5)),
          X(S(
            xb(
              H(M(6, 0, 0, 0.3), p(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2)),
              H(M(6), p(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)),
              H(M(6, 0, 0, 0.3), p(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2)),
            ),
            H(M(5), x(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)),
            H(M(5, 0, 1.5), p(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2)),
            H(M(), gb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5)),
            H(M(6), p(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5)),
          )),
          Y(() => {
            X(M(5), p(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
            Ib(p(0, 1.2));
          }),
          Ib(p(15, -2, 4)),
          Y(() => {
            X(
              S(
                xb(
                  H(M(), x(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  H(M(6), x(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  H(M(), p(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5)),
                  H(M(16, 1, 0, 4), x(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2)),
                ),
                H(M(), x(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),
              ),
              p(0, 0, 45),
            );
            Jb(p(0, 2.8, 45), [0, 0, 4.5]);
          }),
          v(35),
          v(55),
          X(M(), p(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
          Y(() => {
            X(M(3), p(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
            X(M(8), p(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
            X(M(), p(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
            X(M(), p(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
            Ib(p(-23, -0.5, 66.5));
          }),
          Y(() => {
            X(M(), p(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
            X(S(H(M(), x(3, 1.4, 2.7)), H(M(), x(1.2, 8, 1.2))), p(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2));
          }),
          Y(() => {
            X(S(
              H(M(), p(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
              H(M(), p(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),
            ));
            X(M(), p(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
          }),
          Y(() => {
            X(M(6), p(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4));
          }),
          Ib(p(-55, -1.1, 46).rotate(0, 90)),
          X(M(6), p(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)),
          X(M(7), p(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)),
          [
            ...H(M(), p(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)),
            ...H(M(), p(0, -2.2).scale(7.7, 0.5, 4), U(0.6, 0.4, 0.4, 0.3)),
            ...S(
              H(M(6), gb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)),
              H(M(4, 0, 0.01), p(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3)),
              H(M(6), gb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(g => H(M(5), p(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        N = (X(B, p(-53, 0, 55)),
          Y(() => X(B), 2),
          X(M(), p(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2)),
          X(M(3, 0, -0.5), p(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2)),
          X(S(
            xb(
              H(M(), p(-100, -2.4, 55).scale(8, 0.9, 8), U(0.8, 0.8, 0.8, 0.2)),
              H(M(), p(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
              H(M(), p(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2)),
              H(M(), p(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2)),
              H(M(6), p(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3)),
              H(M(), p(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2)),
              H(M(), p(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2)),
            ),
            H(M(8), p(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4)),
            H(M(8), p(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5)),
            H(M(8, 0, -3.1), p(-100, -3, 55).scale(0.4, 1, 0.4), U(0.4, 0.4, 0.4, 0.5)),
          )),
          Jb(p(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Jb(p(-89, 0.2, 80), [0, 0, 6]),
          X(S(
            H(M(), p(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)),
            H(M(), p(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4)),
            H(M(20, 1), p(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4)),
          )),
          Na.map(({ x: g, z: u }) => {
            X(M(6), p(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(F => X(M(6), p(7 * g - 100, F, 7 * u + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8)));
          }),
          hb(7, g => {
            X(
              M((23 * g + 1) % 5 + 5, 0, 0.5),
              p(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3),
              U(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
            );
          }),
          X(M(), p(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)),
          X(M(4), p(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)),
          X(M(12, 1), p(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)),
          Ib(p(-86, -7.5, 31)),
          Y(() => {
            [0, 12, 24].map(g =>
              X(M(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.2, 0.5, 0.6, 0.2))
            );
          }),
          Y(() => {
            [6, 18].map(g =>
              X(M(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.1, 0.4, 0.5, 0.2))
            );
          }),
          X(
            S(
              xb(
                H(M(5), p(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3)),
                H(M(5), x(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),
                H(M(), x(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),
              ),
              H(M(5), x(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),
            ),
            p(-38.9, -11.3, 17),
          ),
          Ib(p(-38.9, -9.6, 10)),
          Y(() => {
            X(
              S(
                xb(
                  H(M(5), p(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5)),
                  H(M(5), p(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5)),
                  H(M(5), p(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5)),
                ),
                H(M(5), x(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)),
                H(M(5), p(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5)),
              ),
              p(-38.9, -11.3, 17),
            );
            Jb(p(-39.1, -0.6, 17).rotate(11), ...kb(15).map(({ x: g, z: u }) => [3 * g, 3 * u, 1.2]));
          }),
          Na.map(({ x: g, z: u }) => {
            X(M(14, 1), p(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(F =>
              X(M(17, 1), p(9 * g - 38.9, F - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3))
            );
          }),
          X(
            S(
              xb(
                H(M(6), p(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3)),
                H(M(), p(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3)),
              ),
              ...hb(6, g =>
                hb(6, u =>
                  H(
                    M(6),
                    p(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2),
                    U(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            p(-38.9, -11.3, 17),
          ),
          Jb(p(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          X(M(5), p(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4)),
          Ib(p(-84, -0.5, 85).rotate(0, 45)),
          Y(() => {
            X(w);
            Ib(p(0, -3, -4).rotate(0, 180));
          }),
          S(
            H(M(), p(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3)),
            (v = H(M(), p(0, 0, -3.65).scale(2.5, 3), U(0.6, 0.3, 0.4, 0.3)),
              m = [H(M(3), p(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3))],
              tb(xb(tb(ub(v)), ...m))),
            ...[-1, 1].map(g => H(M(), p(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3))),
          ));
      Y(() =>
        hb(2, g =>
          X(N, p(9 * g - 110 + (1 & g), 1.9, -12)))
      );
      Y(() =>
        hb(2, g =>
          X(N, p(9 * (g + 2) - 110 + (1 & g), 1.9, -12)))
      );
      Y(() =>
        hb(3, g =>
          X(N, p(9 * g - 106, 1.9, -12)))
      );
      X(
        S(
          xb(H(M(), p(26.5, -1.6, 10).scale(20, 2.08, 3)), H(M(), p(26.5, -0.5, 10).scale(19, 2, 0.5))),
          ...hb(4, g => H(M(), p(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
          ...hb(3, g => H(M(), p(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        p(-123, 0.2, -12),
        U(0.5, 0.5, 0.6, 0.2),
      );
      Ib(p(-116, -1.4, -18).rotate(0, 180));
      X(M(), p(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2));
      X(M(6), p(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      X(M(), p(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      X(M(8), p(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      X(M(8), p(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      X(M(), p(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      hb(3, g => {
        X(y(16), p(12 * g - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        X(y(16), p(-77, -9, -12 * g - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3));
      });
      X(S(
        H(M(12), p(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2)),
        H(M(), p(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2)),
        H(M(), p(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2)),
        H(M(12), p(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2)),
      ));
      X(M(), p(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3));
      X(M(9), p(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      X(S(
        H(M(), p(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1)),
        H(M(9), p(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2)),
      ));
      Ib(p(-98, -4.4, -40).rotate(0, 90));
      Jb(p(-115, 0.2, -12), [0, 0, 3.5]);
      Jb(p(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      X(S(
        xb(
          H(M(6, 0, 0, 0.6), p(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2)),
          H(M(), p(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2)),
        ),
        H(M(5), p(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2)),
      ));
      hb(
        4,
        g =>
          Y(() =>
            X(
              M(6),
              p(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(
                2.6,
                1,
                2.5,
              ),
              U(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
            )
          ),
      );
      Y(() => {
        X(S(H(M(10), x(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), H(M(10), x(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5))));
        X(M(15, 1), p(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3));
        X(M(10), p(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        X(M(5), p(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        Ib(p(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => X(r, gb(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2)));
        Jb(p(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(g => {
        [7.2, 1.5].map(u => X(M(15, 1), p(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4)));
        X(r, p(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), U(1, 1, 0.8));
        X(M(12, 1), p(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5));
        X(
          S(
            H(M(), p(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4)),
            H(M(), x(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)),
            H(M(28, 1), p(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5)),
            H(M(5), p(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5)),
            H(M(5), p(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5)),
          ),
          p(g - 100, 0.7, 97),
        );
      });
      X(S(
        H(M(), p(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1)),
        H(M(45, 1), p(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1)),
      ));
      Y(() => {
        X(S(
          H(M(45, 1), x(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),
          H(M(), p(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2)),
        ));
        X(M(8), p(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        X(M(5), p(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Jb(p(0, 3), ...kb(14).map(({ x: g, z: u }) => [5.6 * g, 5.6 * u, 2]));
      });
      Y(() => {
        [-1, 1].map(g =>
          X(r, gb(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), U(1, 1, 0.8))
        );
        X(S(H(M(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)), H(M(), x(9, 5, 2), U(0.3, 0, 0, 0.3))));
        X(H(M(28, 1), x(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(H(M(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(S(
          H(M(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          H(M(), p(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          H(M(), p(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(H(M(28, 1), x(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(H(M(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(S(
          H(M(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          H(M(), p(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          H(M(), p(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(H(M(28, 1), x(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(H(M(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      X(M(), p(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      X(M(), p(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      X(M(), p(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      X(M(), p(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      Ib(p(-34, 2.7, 96).rotate(-12, 0));
      X(M(5), p(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6));
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((g, u) =>
        Y(() => {
          X(M(), p(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
          2 === u && X(M(), p(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
          1 === u && X(M(), p(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(g => X(r, p(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), U(1, 1, 0.8)));
      hb(
        3,
        g =>
          X(
            y(24.7 - 0.7 * (1 & g)),
            p(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)),
            1 & g ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),
          ),
      );
      X(S(
        H(M(6, 0, 0, 0.3), p(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2)),
        H(M(5), p(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),
      ));
      Ib(p(0, 1.7, 82).rotate(0, 180));
      X(M(5), p(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4));
      X(M(6), p(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3));
      X(M(), p(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      X(M(7), p(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      X(S(
        xb(
          H(M(), p(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4)),
          H(M(), p(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4)),
        ),
        H(M(5), p(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4)),
      ));
      Y(() => {
        X(M(3), p(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          X(M(6), p(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4));
          X(M(), p(0, 6.2, g + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4));
        });
      });
      Y(() => {
        X(M(5), x(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        X(M(5), x(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        Ib(p(0, 1.5, -1).rotate(0, 180));
      });
      Jb(p(0, 3, 95), ...kb(9).map(({ x: g, z: u }) => [9 * g, 9 * u, 4]));
      Jb(p(0, 19, 134), [0, 0, 3.5]);
    });
    Y(() => {
      X(mb(20), p(0, 1).scale3d(0.5), U(1, 0.3, 0.4));
      X(mb(30), x(0.65, 0.8, 0.55), U(1, 0.3, 0.4));
      X(M(), p(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        X(r, gb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8));
        X(
          H(S(M(15, 1), H(M(), p(0, 0, 1).scale(2, 2, 0.5))), gb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3)),
          p(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        Y(() => {
          X(M(20, 1), p(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(M(6).slice(0, -1), x(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(
        mb(30, 24, (m, v, y) => {
          const z = v / 24, w = m * Math.PI * 2 / 30, B = Math.sin(z ** 0.6 * Math.PI / 2);
          m = z * z * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < v
            ? { x: y.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(w) * B,
              y: Math.cos(z * Math.PI) - z - m,
              z: Math.sin(w) * B + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        x(0.7, 0.7, 0.7),
        U(1, 1, 1),
      );
      [-1, 1].map(m => X(mb(12), p(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    Y(() => {
      X(M(6, 1), x(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      X(M(10), p(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      X(M(3), p(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: max(780px, 50vw);\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
