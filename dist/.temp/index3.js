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
  Ha = [],
  Ia = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ja = [
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
  ],
  Pa = { x: 0, y: 0, z: 0 },
  Qa = Math.PI / 180;
var Ra = 0, Sa = 180;
const h = NO_INLINE(a => 0 > a ? -a : a),
  Ta = NO_INLINE((a, b) => a < b ? a : b),
  Ua = NO_INLINE((a, b) => b < a ? a : b),
  Va = (a, b) => h(a) > b ? a : 0,
  n = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a,
  Wa = a => Math.atan2(Math.sin(a * Qa), Math.cos(a * Qa)) / Qa,
  Xa = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * n(f) || 0,
  Ya = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0,
  Za = (a, b) => (a = n(a), Ya(a, 1 - a, b)),
  ab = (
    a,
    b = $a,
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
  eb = (
    a = bb,
    b = db,
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
  p = NO_INLINE((a, b, f) => bb.translate(a, b, f)),
  fb = NO_INLINE((a, b, f) => bb.rotate(a, b, f)),
  w = NO_INLINE((a, b, f) => bb.scale(a, b, f)),
  gb = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  hb = (a, b, f) => (a.C = f, a.u = b, a),
  ib = (a, b, f = a.u) =>
    hb(
      a.map(k => {
        let r, m;
        return { x: k, y: r, z: m } = k,
          { x: k, y: r, z: m } = b.transformPoint({ x: k, y: r, z: m }),
          { x: k, y: r, z: m };
      }),
      f,
      a.C,
    ),
  E = (a, b, f) => a.map(k => ib(k, b, f)),
  jb = (a, b = 0) =>
    gb(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > h(k) ? k : 0 > k ? k - b : k + b };
    }),
  kb = (a, b, f) =>
    a.map((k, r, { length: m }) => hb([k, b[m - r - 1], b[m - (r + 1) % m - 1], a[(r + 1) % m]], a.u, f)),
  L = (
    a,
    b,
    f = 0,
    k,
  ) => (a = a ? jb(a, k) : Ia,
    k = ib(a, p(0, 1).scale3d(0 < f ? f : 1)),
    a = ib(a, p(0, -1).scale3d(0 > f ? -f : 1)).reverse(),
    [...kb(a, k, b), k, a]),
  lb = (
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
        const u = hb([], 0, 1);
        k.push(u);
        u.push(f(r, m, u));
        m && u.push(f((r + 1) % a, m, u));
        b - 1 > m && u.push(f((r + 1) % a, m + 1 % b, u));
        u.push(f(r, m + 1 % b, u));
      }
    }
    return k;
  },
  mb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  nb = a => {
    let b, f = 0, k = 0, r = 0, m = a.at(-1);
    for (b of a) {
      f += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), r += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = Math.hypot(f, k, r), f /= b, k /= b, r /= b, { x: f, y: k, z: r, w: f * m.x + k * m.y + r * m.z };
  },
  ob = (a, b) => {
    var f, k, r, m = b.B;
    for (var u = 0; m.length > u; ++u) {
      if (-0.00008 > (f = mb(a, m[u]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
        k = [];
        r = [];
        m = b.B;
        u = b.v;
        let x = m.at(-1), B = mb(a, x) - a.w;
        for (const D of m) {
          f = mb(a, D) - a.w,
            8e-5 > B && r.push(x),
            -0.00008 < B && k.push(x),
            (8e-5 < B && -0.00008 > f || -0.00008 > B && 8e-5 < f)
            && (B /= f - B,
              x = { x: x.x + (x.x - D.x) * B, y: x.y + (x.y - D.y) * B, z: x.z + (x.z - D.z) * B },
              k.push(x),
              r.push(x)),
            x = D,
            B = f;
        }
        return {
          l: 2 < k.length && { B: hb(k, m.u, m.C), v: u, A: b },
          j: 2 < r.length && { B: hb(r, m.u, m.C), v: u, A: b },
        };
      }
    }
    return { l: k, j: r };
  },
  pb = (a, b, f = nb(b.B)) => {
    let k, r, m;
    return a
      ? ({ l: k, j: r } = ob(a, b), k || r || a.o.push(b), k && (a.l = pb(a.l, k, f)), r && (a.j = pb(a.j, r, f)))
      : ({ x: k, y: r, z: f, w: m } = f, a = { x: k, y: r, z: f, w: m, o: [b], l: 0, j: 0 }),
      a;
  },
  qb = (a, b, f) => {
    const k = [],
      r = (m, u) => {
        let { l: x, j: B } = ob(m, u);
        x || B || (0 < f * mb(m, b) ? x = u : B = u);
        x && (m.l ? r(m.l, x) : k.push(x));
        B && m.j && r(m.j, B);
      };
    for (const m of b.o) {
      r(a, m);
    }
    return k;
  },
  rb = (a, b) => a && (b(a), rb(a.l, b), rb(a.j, b)),
  ub = a => (rb(a, b => {
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
  vb = a => a.length ? a.reduce((b, f) => pb(b, { B: f, v: 0, A: 0 }), 0) : a,
  wb = (...a) =>
    a.reduce((b, f) => {
      const k = [];
      if (b = vb(b), f) {
        f = vb(f);
        rb(b, r => r.o = qb(f, r, 1));
        rb(f, r => k.push([r, qb(b, r, -1)]));
        for (let [r, m] of k) {
          for (const u of m) {
            pb(b, u, r);
          }
        }
      }
      return b;
    }),
  R = (a, ...b) => {
    const f = m => {
        let u;
        return m.A && ((u = k.get(m.A)) ? (r.delete(u), m = f(m.A)) : k.set(m.A, m)), m;
      },
      k = new Map(),
      r = new Map();
    return a = ub(wb(ub(vb(a)), ...b)),
      rb(a, m => {
        for (const u of m.o) {
          r.set(f(u), u.v);
        }
      }),
      Array.from(r, ([{ B: m }, u]) => {
        const x = m.map(({ x: B, y: D, z }) => ({ x: B, y: D, z }));
        return hb(u ? x.reverse() : x, m.u, m.C);
      });
  },
  zb = NO_INLINE((a, b, f) => Ya(a, b, 1 - Math.exp(-f * d))),
  Ab = () => {
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
  Bb = () => {
    localStorage.DanteSP22 = JSON.stringify([e.map(({ i: a }) => a), Ga.map(({ i: a }) => a), za, c, da]);
  },
  Cb = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Fb = () => {
    let a, b, f, k, r, m, u, x, B, D, z, g, t, G, N = !0;
    const I = [],
      O = () => {
        b4.innerHTML = "Music: " + N;
        ba || !N ? Db.disconnect() : Db.connect(Eb.destination);
      },
      P = () => {
        const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ka = Cb(0.3, 181, q, 1.732051);
        la = [Cb(0.3, 55, q, 1.732051), Cb(55, 181, q, 1.732051)];
        k = x = void 0;
        I.length =
          ea =
          G =
          g =
          t =
          Aa =
          Ba =
            0;
      },
      v = (q, l = 0) => {
        if (ba !== q) {
          ba = q;
          ha = l;
          P();
          document.body.className = q ? "l m" : "l";
          try {
            q
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Db.start());
          } catch {
          }
          O();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => v(!1);
    b2.onclick = () => v(!1, 1);
    b5.onclick = () => v(!0);
    b4.onclick = () => {
      N = !N;
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
          (I[l] = !!q.type[5] && !0) && (0 === l && (ea = 1), 1 === l && v(!0)));
    };
    onmousemove = ({ movementX: q, movementY: l }) => {
      ha && (q || l) && (Sa += 0.1 * q, Ra += 0.1 * l);
    };
    hC.ontouchstart = q => {
      if (!ba) {
        for (let { pageX: l, pageY: H, identifier: F } of q.changedTouches) {
          ha && l > hC.clientWidth / 2
            ? void 0 === x && (B = 0, m = l, u = H, x = F, D = Sa, z = Ra)
            : void 0 === k && (r = 0, b = l, f = H, k = F);
        }
        a = wa;
      }
    };
    hC.ontouchmove = q => {
      if (!ba) {
        for (let { pageX: A, pageY: y, identifier: C } of q.changedTouches) {
          var l, H, F, J;
          x === C && (Sa = D + (A - m) / 2.3, Ra = z + (y - u) / 2.3, B = 1);
          k === C
            && (C = (b - A) / 20,
              l = h(C),
              H = (f - y) / 20,
              F = h(H),
              (J = 0.5 < Ua(l, F)) && (r = 1),
              g = (J && 0.2 < l) * n(C, -1),
              t = (J && 0.2 < F) * n(H, -1),
              2 < l && (b = A + 20 * (0 > C ? -1 : 1)),
              2 < F && (f = y + 20 * (0 > H ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = q => {
      let l;
      document.activeElement === document.body && q.preventDefault();
      for (const H of q.changedTouches) {
        H.identifier === x
          ? (x = void 0, B || (l = 1), B = 0)
          : H.identifier === k
          ? (k = void 0, t = g = 0, r || (l = 1), r = 0)
          : l = 1;
      }
      q.target === hC && l && a && 0.02 < (q = wa - a) && 0.7 > q && (ea = 1);
    };
    ja = () => {
      Aa = t + (I[4] ? 1 : 0) - (I[5] ? 1 : 0);
      Ba = g + (I[2] ? 1 : 0) - (I[3] ? 1 : 0);
      var q = navigator.getGamepads()[0];
      if (q) {
        const l = F => H[F]?.pressed || 0 < H[F]?.value ? 1 : 0, H = q.buttons;
        q = q.axes;
        ha && (Ra += d * Va(q[3], 0.3) * 80, Sa += d * Va(q[2], 0.3) * 80);
        Aa += l(12) - l(13) - Va(q[1], 0.2);
        Ba += l(14) - l(15) - Va(q[0], 0.2);
        l(9) && v(!0);
        (q = l(3) || l(2) || l(1) || l(0)) && !G && (ea = 1);
        G = q;
      }
    };
    document.onvisibilitychange = onblur = onresize = P;
    v(!0);
  },
  U = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  X = (a, b = new DOMMatrix(), f) => na.o.push(...E(a, b, f)),
  Y = (a, b = 1) => {
    const f = na;
    Ha.push(na = { m: new DOMMatrix(), G: b, o: [] });
    a();
    na = f;
  },
  Gb = a => (a = a.transformPoint(), Math.hypot(Pa.x - a.x, Pa.y - a.y, Pa.z - a.z)),
  Hb = a => {
    const b = na,
      f = e.length,
      k = {
        i: 0,
        g: 0,
        h: 0,
        m: b.m,
        H: a,
        F() {
          k.g = zb(k.g, k.i, 4);
          k.h = zb(k.h, k.i, 1);
          eb(b.m).multiplySelf(a);
          ea && 3 > Gb(db) && (0.3 > k.g || 0.7 < k.g)
            && (k.i = k.i ? 0 : 1, f && 1 / 0 > Fa && (Fa = c + 1, h4.innerHTML = "* click *"), za = f, Bb());
          !f && k.i && 0.8 < k.g && (k.i = 0,
            13 > xa
              ? 1 / 0 > Fa && (Fa = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!")
              : ya
                || (1 / 0 > Fa
                  && (Fa = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                  ya = 1));
          db.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    e.push(k);
    X(L(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(L(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(L(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
  },
  Ib = (a, ...b) => {
    let f, k, r, m = -1, u = 0, x = 0, B = 1, D = 3;
    const z = {
        i: 0,
        F() {
          if (!z.i) {
            let J, A, y, C, T, M, V, K = 1, S = 1 / 0;
            for (const Q of g) {
              var { x: q, z: l, w: H } = Q;
              l = (q = Math.hypot(G - q, N - l)) - H;
              V ||= q < H;
              0 < l && S > l && (S = l, t = Q);
              K = Ta(K, q / H);
            }
            V
              || ({ x: F, z: J, w: A } = t,
                y = G - F,
                C = N - J,
                T = Math.hypot(y, C),
                M = Math.atan2(-C, y),
                B && (x = (Math.random() - 0.5) * Math.PI / 2, D = n(D / (1 + Math.random()))),
                M += x,
                m = -Math.cos(M),
                u = Math.sin(M),
                0.1 < T && (T = Ta(T, A) / (T || 1), G = y * T + F, N = C * T + J));
            B = V;
            D = zb(D, 6 * (1 - K) + 3, K + 3);
            I = zb(I, G = zb(G, G + m, D), D);
            O = zb(O, N = zb(N, N + u, D), D);
            f = Xa(f, Math.atan2(I - k, O - r) / Qa - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > Gb(eb(P).multiplySelf(a).translateSelf(k = I, 0, r = O).rotateSelf(0, f, 7 * Math.sin(1.7 * c)))
            ) {
              z.i = 1;
              var F = [
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
              1 / 0 > Fa && (Fa = c + (xa && 12 > xa ? 5 : 7), h4.innerHTML = F);
              Ab();
              Bb();
            }
          }
          z.i
            && eb(Ha[2].m).translateSelf(
              v % 4 * 1.2 - 1.7 + Math.sin(c + v) / 7,
              -2,
              1.7 * (v / 4 | 0) - 5.5 + h(v % 4 - 2) + Math.cos(c / 1.5 + v) / 6,
            );
        },
      },
      g = b.map(([q, l, H]) => ({ x: q, z: l, w: H }));
    let t = g[0], { x: G, z: N } = t, I = G, O = N;
    const P = na.m, v = Ga.length;
    Ga.push(z);
  },
  Jb = (a, b, f, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  Lb = () => {
    let a, b, f, k, r, m, u, x, B, D, z, g, t, G, N = 1, I = 2, O = 15;
    const P = { x: 0, y: 0, z: 0 },
      v = () => (I ? e[za] : Ha[b && 1 === Ha[b].G && b || 0]).m,
      q = J => {
        const { x: A, y, z: C } = 1 < I
          ? eb(e[za].m).multiplySelf(e[za].H).transformPoint({ x: 0, y: za || 0.9 < ca ? 15 : 1, z: -2.4 })
          : v().transformPoint(P);
        J && (u = (A - Pa.x) / d, x = (C - Pa.z) / d);
        Pa.x = A;
        Pa.y = y;
        Pa.z = C;
      },
      l = (J, A, y) => {
        eb(v()).invertSelf();
        db.m41 = db.m42 = db.m43 = 0;
        J = db.transformPoint({ x: J, z: y, w: 0 });
        P.x += J.x;
        P.y += A;
        P.z += J.z;
        q();
      },
      H = () => {
        var J = 0, A = 0, y = 0;
        let C = 0;
        var T = -1;
        let M = 0, V = 0;
        for (var K = 0; 36 > K; ++K) {
          var S = 512 * K;
          for (var Q = 96; 416 > Q; Q += 4) {
            for (var sa = 0; 2 > sa; ++sa) {
              var ia = Kb[S + Q + sa], ma = Kb[S + Q + sa + 2];
              ia > C && (C = ia);
              ia + ma && (0 > T || T === K) && (T = K, ma === a ? ++J : A && A !== ma || (A = ma, ++y));
            }
          }
        }
        a = 0 > T ? 0 : y > 2 * J ? A : a;
        for (J = 36; 128 > J; J += 1) {
          K =
            T =
            y =
            A =
              0;
          S = 512 * J;
          for (Q = 0; 128 > Q; Q += 1) {
            for (sa = S + 4 * Q, ia = 0; 2 > ia; ++ia) {
              ma = Kb[sa + ia];
              const cb = Kb[sa + ia + 2];
              (ia ? 64 < Q : 64 > Q) ? A = Ua(A, ma) : y = Ua(y, ma);
              ia ? K = Ua(K, cb) : T = Ua(T, cb);
            }
          }
          h(y - A) > h(M) && (M = y - A);
          h(K - T) > h(V) && (V = K - T);
        }
        D = n(1 - 0.015 * Ua(h(M), h(V)));
        l(M / 255, C / 255, V / 255);
      },
      F = (J, A, y, C) => Ya(J, A, N || (n(h(A - J) ** 0.5 - y) + 1 / 7) * (1 - Math.exp(-(1.5 * C) * d)));
    va = J => {
      q(a);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Kb);
      NO_INLINE(H)();
      !I && a === b || (b = a, A = eb(v()).invertSelf().transformPoint(Pa), P.x = A.x, P.y = A.y, P.z = A.z);
      I = I && (a ? 0 : 1);
      var { x: A, y, z: C } = Pa;
      const T =
        (y < (-20 > A || 109 > C ? -25 : -9) && (I = 2),
          1 === a && (e[9].i = -15 > A && 0 > C ? 1 : 0),
          z = Ya(zb(z, y, 2), y, I || 8 * h(z - y)),
          t = F(t, z, 2, 1),
          g = F(g, A, 0.5, 1),
          G = F(G, C, 0.5, 1),
          m = zb(m, oa * (27 < a && 32 > a), 2),
          ha
            ? (y = I + (1 - Math.exp(-18 * d)),
              Ca = Ya(Ca, A, y),
              Da = Ya(Da, z + 1.5, y),
              Ea = Ya(Ea, C, y),
              Sa = Wa(Sa))
            : (Ea = F(Ea, G + -18 + 5 * m, 1, 2 + m),
              Da = F(Da, Ua(t + n((-60 - C) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2),
              Ca = F(
                Ca,
                g,
                1,
                2
                  + m,
              ),
              y = Ta(-6, -h(G - Ea)),
              M = g - Ca,
              Sa = Xa(Sa, 90 - Wa(Math.atan2(y, M) / Qa), N + (1 - Math.exp(-10 * d))),
              Ra = Xa(Ra, 90 - Math.atan2(Math.hypot(y, M), Da - t) / Qa, N + (1 - Math.exp(-10 * d)))),
          Ra = n(Ra, -87, 87),
          N = 0,
          J().translateSelf(A, z, C).rotateSelf(0, k));
      for (M = 0; 2 > M; ++M) {
        const V = 9.1 * c - Math.PI * M;
        eb(T, J()).translateSelf(0, r * n(0.45 * Math.sin(V - Math.PI / 2))).rotateSelf(r * Math.sin(V) * 0.25 / Qa, 0);
      }
      y = n(Aa, -1);
      var M = n(Ba, -1);
      A = Va(Math.hypot(y, M) ** 0.5, 0.1);
      C = Math.atan2(y, M);
      y = A * h(y) * Math.sin(C);
      M = A * h(M) * Math.cos(C);
      A && (f = 90 - C / Qa);
      r = zb(r, A, 10);
      k = Xa(k, f, 1 - Math.exp(-8 * d));
      O = a ? 5 : zb(O, I ? 10 : 19, 2.2);
      u = a || I ? 0 : zb(u, 0, 3);
      x = a || I ? 0 : zb(x, 0, 3);
      B = I ? 0 : zb(B, a ? 7 * n(2 * A) * D : 0, a ? 9 : 1);
      C = ha ? (180 + Sa) * Qa : 0;
      l(d * (u + B * (M * Math.cos(C) - y * Math.sin(C))), -O * d, d * (x + B * (M * Math.sin(C) + y * Math.cos(C))));
    };
  },
  Mb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Nb = (a, b) => {
    const f = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Mb(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
  },
  Ub = (a, b, f) => {
    ba
      ? (eb().rotateSelf(0, 40 * Math.sin(wa) - 70),
        ab(db, Sb, 37),
        ab(db, Sb, 38),
        ab(db, Sb, 39),
        Z.uae(a, !1, Sb),
        Z.d97(4, Ha[39].D - Ha[37].s, 5123, 2 * Ha[37].s))
      : (Z.uae(a, !1, Sb),
        Z.d97(4, (b ? Ha[39].D : Ha[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Tb),
        Z.das(4, Ha[f].D - Ha[f].s, 5123, 2 * Ha[f].s, Ga.length),
        Z.das(4, Ha[42].D - Ha[42].s, 5123, 2 * Ha[42].s, e.length));
  },
  Vb = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Wb = a => Math.sin(a * Math.PI * 2),
  Xb = a => 0.5 > a % 1 ? 1 : -1,
  Yb = a => a % 1 * 2 - 1,
  Zb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  fc = a => {
    let b = 0;
    const f = () => {
        let u = 0;
        const x = K => {
            let S, Q, sa, ia = 0, ma = 0;
            const cb = [],
              Ka = new Int32Array(768 * K),
              $b = 2 ** (l - 9) / K,
              ac = Math.PI * 2 ** (y - 8) / K,
              xb = T * K & -2;
            for (let sb = 0; 11 >= sb; ++sb) {
              for (
                let tb = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb];
                32 > tb;
                ++tb
              ) {
                const Pb = (32 * sb + tb) * K;
                for (var La = 0; 4 > La; ++La) {
                  if (S = 0, Ob && (S = B[Ob - 1].charCodeAt(tb + 32 * La) - 40, S += 0 < S ? 106 : 0), S) {
                    var fa;
                    if (!(fa = cb[S])) {
                      fa = S;
                      let W = void 0, ta = void 0;
                      var Qb = S;
                      let bc = 0, cc = 0;
                      const dc = 2 > b ? Yb : Wb, ec = 2 > b ? 1 > b ? Xb : Zb : Wb, Rb = new Int32Array(O + P + V);
                      for (let Ma = 0, yb = 0; O + P + V > Ma; ++Ma, ++yb) {
                        let Na = 1;
                        O > Ma ? Na = Ma / O : O + P > Ma || (Na = (1 - (Na = (Ma - O - P) / V)) * 3 ** (-q / 16 * Na));
                        0 > yb
                          || (yb -= 4 * K,
                            ta = 0.00396 * 2 ** ((Qb + z - 256) / 12),
                            W = 0.00396 * 2 ** ((Qb + G - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Rb[Ma] = 80
                            * (dc(bc += ta * Na ** (g / 32)) * D + ec(cc += W * Na ** (N / 32)) * t
                              + (I ? (2 * Math.random() - 1) * I : 0))
                            * Na | 0;
                      }
                      fa = cb[fa] = Rb;
                    }
                    for (let W = 0, ta = 2 * Pb; fa.length > W; ++W, ta += 2) {
                      Ka[ta] += fa[W];
                    }
                  }
                }
                for (let W, ta = 0; K > ta; ++ta) {
                  La = 0;
                  fa = 2 * (Pb + ta);
                  var ua = (((W = Ka[fa]) || sa)
                    && (Q = 0.00308 * H,
                      1 !== b && 4 !== b || (Q *= Math.sin($b * fa * Math.PI * 2) * M / 512 + 0.5),
                      Q = 1.5 * Math.sin(Q),
                      ia += Q * ma,
                      ua = (1 - F / 255) * (W - ma) - ia,
                      ma += Q * ua,
                      W = 4 === b ? ma : 3 === b ? ua : ia,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= J / 32,
                      sa = 1e-5 < W * W,
                      ua = Math.sin(ac * fa) * A / 512 + 0.5,
                      La = W * (1 - ua),
                      W *= ua),
                    fa < xb || (La += Ka[1 + fa - xb] * C / 255, W += Ka[fa - xb] * C / 255),
                    u + fa >> 1);
                  r[ua] += (Ka[fa] = La) / 65536;
                  m[ua] += (Ka[++fa] = W) / 65536;
                }
              }
            }
            u += 768 * K;
          },
          B = Ja[b],
          [D, z, g, t, G, N, I, O, P, v, q, l, H, F, J, A, y, C, T, M] = Oa[b],
          V = 4 * v ** 2;
        x(5513);
        x(4562);
        x(3891);
        Vb(5 > ++b ? f : a);
      },
      k = Eb.createBuffer(2, 5362944, 44100),
      r = k.getChannelData(0),
      m = k.getChannelData(1);
    Db.buffer = k;
    Db.loop = !0;
    Vb(f);
  },
  Eb = new AudioContext(),
  bb = new DOMMatrix(),
  db = new DOMMatrix(),
  $a = new Float32Array(16),
  Sb = new Float32Array(624),
  Tb = new Float32Array(624),
  Kb = new Uint8Array(65536),
  gc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Db = Eb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Vb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const r = [new Float32Array(16), new Float32Array(16)],
          m = v => {
            Z.f1s();
            requestAnimationFrame(m);
            var q = (v - (aa || v)) / 1e3;
            if (wa += q, c += d = ba ? 0 : Ta(0.066, q), aa = v, 0 < d) {
              ja();
              Fa && c > Fa && (Fa = 0, h4.innerHTML = "");
              da = zb(da, e[9].h, 0.2 + 0.3 * h(2 * e[9].h - 1));
              ca = zb(ca, ya ? zb(ca, -9, 1.5) : n(c / 3), 1);
              let F = 1;
              var l = () => eb(bb, Ha[++F].m);
              q =
                (oa = Za(e[12].g, e[13].g),
                  ra = Ya(zb(ra, 0, 1), Wa(ra + 60 * d), e[5].g - e[6].h),
                  pa = Ya(zb(pa, 0, 5), Wa(pa + 56 * d), oa),
                  qa = Ya(zb(qa, 0, 4), Wa(qa + 48 * d), oa),
                  Jb(l(), -12, 4.2, 40 * ca - 66),
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
              v =
                (l().translateSelf(q * Math.sin(0.7 * c + 2) * 12),
                  l().translateSelf(q * Math.sin(c + 3) * 8.2),
                  l().translateSelf(q * Math.sin(c / 1.5 + 2) * 12),
                  l().translateSelf(9.8 * (1 - q)),
                  n(1 - 5 * q) * Za(e[4].g, e[5].g));
              q =
                (l().translateSelf(0, v * Math.sin(1.35 * c) * 4),
                  l().translateSelf(0, 0, v * Math.sin(0.9 * c) * 8),
                  l().translateSelf(0, -6.5 * e[4].h),
                  l().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + ra, 0),
                  Za(e[7].h, e[6].h));
              v =
                (l().translateSelf(0, q * Math.sin(c) * 5 + 3.5 * (1 - Ua(e[6].g, e[7].g))),
                  l().translateSelf(0, q * Math.sin(c + 3) * 6, q * Math.sin(0.6 * c + 1) * 6),
                  l().translateSelf(0, -7.3 * e[7].h),
                  Jb(l(), -123, 1.4, 55 + -65 * da),
                  Za(e[10].g, e[11].g));
              v =
                (l().translateSelf(0, -2, v * h(Math.sin(1.1 * c)) * -8.5 + 10),
                  l().translateSelf(0, -2, v * h(Math.sin(2.1 * c)) * -8.5 + 10),
                  l().translateSelf(0, -2, -8.5 * Ua((1 - e[10].g) * (1 - v), v * h(Math.sin(1.5 * c))) + 10),
                  Za(e[8].h, e[12].h));
              for (q = 0; 4 > q; q++) {
                l().translateSelf(
                  (2 < q ? 2 * (1 - v) + v : 0) - 100,
                  v * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7,
                  115 + (1 & q ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7
                    + Ua(v, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),
                );
              }
              l().translateSelf(2.5 * (1 - v) - 139.7, -3 * (1 - e[8].g) + v * Math.sin(0.8 * c) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * v + 3), 0);
              l().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + pa);
              l().translateSelf(-65.8, 0.8, 106).rotateSelf(0, qa);
              l().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - qa);
              l().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + qa);
              v = Za(e[13].h, e[14].h);
              for (q = 0; 3 > q; ++q) {
                l().translateSelf(0, (1 - e[13].h) * (1 - e[14].h) * (q ? 0 : 3) + v * Math.sin(1.5 * c + 1.5 * q) * 4);
              }
              l().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              q = Za(Za((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2);
              l().translateSelf(0, 16 * q, 8.5 * n(2 * q - 1) + 95);
              va(l);
              for (l = 0; F >= l; ++l) {
                ab(Ha[l].m, Sb, l - 1);
              }
              for (l = 0; 13 > l; ++l) {
                Ga[l].F(), ab(db, Tb, l);
              }
              for (l = 0; 16 > l; ++l) {
                e[l].F(), ab(db, Tb, l + 13), Tb[16 * l + 223] = 1 - e[l].g;
              }
              g();
              Z.b6o(36160, P);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: v, y: q, z: H } = Pa;
              Z.uae(g("b"), !1, ab(eb().rotateSelf(0, 180).invertSelf().translateSelf(-v, -q, 0.3 - H)));
              Ub(g("c"), 0, 40);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(g("b"), !1, ab(eb().translateSelf(-v, -q, -H - 0.3)));
              Ub(g("c"), 0, 40);
              Z.f1s();
            }
            ea = 0;
            eb(bb, u);
            ba
              ? u.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : u.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ca, -Da, -Ea);
            D();
            Z.b6o(36160, I);
            Z.v5y(0, 0, 2048, 2048);
            N[0](54.7 * 1.1);
            N[1](126 * 1.1);
            t();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(t("a"), !1, ab(ka));
            Z.uae(t("b"), !1, ab(u));
            Z.uae(t("i"), !1, r[0]);
            Z.uae(t("j"), !1, r[1]);
            Z.ubu(t("k"), Ca, Da, Ea);
            Ub(t("c"), !ha, 41);
            z();
            Z.ubu(z("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
            Z.ubu(z("k"), Ca, Da, Ea);
            Z.uae(z("b"), !1, ab(eb(u).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, P);
            Z.f1s();
          },
          u = new DOMMatrix(),
          x = new DOMMatrix(),
          B = f;
        var k = Mb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const D = Nb(
            Mb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          z = Nb(
            Mb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          g = Nb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          t = Nb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          G = gb(8, () => ({})),
          N = gb(2, v => {
            const q = Z.c25();
            return Z.a4v(33984 + v),
              Z.b9j(3553, q),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              l => {
                let H = 0, F = 0, J = 0, A = 1 / 0, y = -1 / 0, C = 1 / 0, T = -1 / 0, M = 1 / 0, V = -1 / 0;
                Z.fas(36160, 36096, 3553, q, 0);
                Z.c4s(256);
                eb().scale3dSelf(l).multiplySelf(eb(la[v], x).multiplySelf(u).invertSelf());
                for (let K = 0; 8 > K; ++K) {
                  const S = G[K],
                    Q = (S.x = 4 & K ? 1 : -1, S.y = 2 & K ? 1 : -1, S.z = 1 & K ? 1 : -1, db.transformPoint(S));
                  H -= S.x = (0 | Q.x) / l / Q.w;
                  F -= S.y = (0 | Q.y) / l / Q.w;
                  J -= S.z = (0 | Q.z) / l / Q.w;
                }
                eb().rotateSelf(298, 139).translateSelf(H / 8, F / 8, J / 8);
                for (l = 0; 8 > l; ++l) {
                  const { x: K, y: S, z: Q } = db.transformPoint(G[l]);
                  A = Ta(A, K);
                  y = Ua(y, K);
                  C = Ta(C, S);
                  T = Ua(T, S);
                  M = Ta(M, Q);
                  V = Ua(V, Q);
                }
                l = 10 + v;
                M *= 0 > M ? l : 1 / l;
                V *= 0 < V ? l : 1 / l;
                Z.uae(
                  D("b"),
                  !1,
                  ab(
                    eb(bb, x).scaleSelf(2 / (y - A), 2 / (T - C), 2 / (M - V)).translateSelf(
                      (y + A) / -2,
                      (T + C) / -2,
                      (M + V) / 2,
                    ).multiplySelf(db),
                    r[v],
                  ),
                );
                Ub(D("c"), !ha, 41);
              };
          }),
          I = Z.c5w();
        k = Z.c25();
        const O = Z.c3z(), P = Z.c5w();
        g();
        Z.uae(g("a"), !1, ab(Cb(1e-4, 2, 1.4, 0.4)));
        t();
        Z.ubh(t("q"), 2);
        Z.ubh(t("h"), 1);
        Z.ubh(t("g"), 0);
        z();
        Z.ubh(z("q"), 2);
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
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, B);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.gbn(3553);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 0);
        NO_INLINE(Fb)();
        NO_INLINE(Lb)();
        requestAnimationFrame(m);
      }
    },
    f = new Image();
  f.onload = f.onerror = b;
  f.src = gc;
  NO_INLINE(fc)(() => {
    Vb(() => {
      let m = 0;
      const u = [],
        x = [],
        B = [],
        D = [],
        z = new Int32Array(8),
        g = new Map(),
        t = new Int32Array(z.buffer, 0, 5),
        G = new Float32Array(z.buffer);
      Ha.map((N, I) => {
        let O;
        const P = v => {
          let { x: q, y: l, z: H } = O[v], F = (G[0] = q, G[1] = l, G[2] = H, v = "" + (O.C ? t : z), g.get(v));
          return void 0 !== F
            ? (q = 3 * F, D[q] = (D[q++] + z[5]) / 2, D[q] = (D[q++] + z[6]) / 2, D[q] = (D[q] + z[7]) / 2)
            : (g.set(v, F = g.size), x.push(q, l, H, G[3]), B.push(z[4]), D.push(z[5], z[6], z[7])),
            F;
        };
        for (O of (G[3] = 41 < I ? -14 : N.G && I, N.o)) {
          const { x: v, y: q, z: l } = nb(O);
          z[4] = 0 | O.u;
          z[5] = 32767 * v;
          z[6] = 32767 * q;
          z[7] = 32767 * l;
          for (let H = 2, F = P(0), J = P(1); O.length > H; ++H) {
            u.push(F, J, J = P(H));
          }
        }
        N.o = null;
        N.s = m;
        N.D = m = u.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(D), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(B), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(u), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [N, I, O, P, v] = JSON.parse(localStorage.DanteSP22);
        e.map((q, l) => q.g = q.h = q.i = l ? 0 | N[l] : 0);
        Ga.map((q, l) => q.i = 0 | I[l]);
        za = O;
        da = v;
        c = P;
        d = 0;
      } catch {
      }
      Ab();
      ca = n(za);
      Vb(b);
    });
    const k = gb(11, m => p(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10)),
      r = gb(10, m => kb(ib(jb(18), k[m]).reverse(), ib(jb(18), k[m + 1]), 1)).flat();
    Y(() => X([Ia.slice(1)], p(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const m = g =>
          Y(() => {
            Ia.map(({ x: t, z: G }) => {
              X(L(11, 1), p(4 * t, 4, g + 4 * G).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6));
              X(L(), p(4 * t, 7, g + 4 * G).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
            });
            X(R(
              E(L(), p(0, 0, g).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(t => E(L(), p(5 * t, 0.2, g).rotate(-30 * t).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3))),
            ));
            X(L(), p(0, -3, g).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
          }),
        u = g =>
          R(
            E(L(), p(0, -g / 2).scale(6, g - 1, 2.2)),
            E(L(), p(0, -g / 2 - 6).scale(4, g - 3, 4)),
            E(L(32, 1), p(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        x = () => Y(() => gb(7, g => X(E(L(6, 1), p(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38))))),
        B = R(
          E(L(30, 1, 1.15, 1), p(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7)),
          E(L(30, 1, 1.3, 1), p(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2)),
          E(L(), p(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),
        ),
        D = (Y(() => {
          X(B);
          Hb(p(0, -3, 4));
        }),
          Hb(p(-5.4, 1.5, -19).rotate(0, -90)),
          Ib(p(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Ib(p(0, 2.8), [5, 10, 3], [-5, 10, 3], ...jb(18).map(({ x: g, z: t }) => [7 * g, 10 * t, 4.5 - 2 * h(g)])),
          Ia.map(({ x: g, z: t }) => X(L(6), p(3 * g, 3, 15 * t).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))),
          [-15, 15].map((g, t) => {
            x();
            x();
            X(L(), p(0, 6.3, g).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
            X(L(), p(0, 1, g).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
            X(L(), p(0, 0, t ? 22 : -23).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2));
            gb(5, G =>
              X(
                r,
                p(18.5 * (t - 0.5), 0, 4.8 * G - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                U(1, 1, 0.8, 0.2),
              ));
          }),
          X(L(), p(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
          X(L(), p(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)),
          X(L(), p(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2)),
          X(L(5), p(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4)),
          X(L(), fb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5)),
          X(R(
            wb(
              E(L(6, 0, 0, 0.3), p(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2)),
              E(L(6), p(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)),
              E(L(6, 0, 0, 0.3), p(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2)),
            ),
            E(L(5), w(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)),
            E(L(5, 0, 1.5), p(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2)),
            E(L(), fb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5)),
            E(L(6), p(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5)),
          )),
          Y(() => {
            X(L(5), p(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
            Hb(p(0, 1.2));
          }),
          Hb(p(15, -2, 4)),
          Y(() => {
            X(
              R(
                wb(
                  E(L(), w(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  E(L(6), w(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  E(L(), p(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5)),
                  E(L(16, 1, 0, 4), w(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2)),
                ),
                E(L(), w(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),
              ),
              p(0, 0, 45),
            );
            Ib(p(0, 2.8, 45), [0, 0, 4.5]);
          }),
          m(35),
          m(55),
          X(L(), p(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
          Y(() => {
            X(L(3), p(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
            X(L(8), p(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
            X(L(), p(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
            X(L(), p(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
            Hb(p(-23, -0.5, 66.5));
          }),
          Y(() => {
            X(L(), p(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
            X(R(E(L(), w(3, 1.4, 2.7)), E(L(), w(1.2, 8, 1.2))), p(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2));
          }),
          Y(() => {
            X(R(
              E(L(), p(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
              E(L(), p(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),
            ));
            X(L(), p(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
          }),
          Y(() => {
            X(L(6), p(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4));
          }),
          Hb(p(-55, -1.1, 46).rotate(0, 90)),
          X(L(6), p(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)),
          X(L(7), p(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)),
          [
            ...E(L(), p(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)),
            ...R(
              E(L(6), fb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)),
              E(L(4, 0, 0.01), p(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3)),
              E(L(6), fb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(g => E(L(5), p(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        z = (X(D, p(-53, 0, 55)),
          Y(() => X(D), 2),
          X(L(), p(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2)),
          X(L(3, 0, -0.5), p(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2)),
          X(R(
            wb(
              E(L(), p(-100, -2.4, 55).scale(8, 0.9, 8), U(0.8, 0.8, 0.8, 0.2)),
              E(L(), p(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
              E(L(), p(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2)),
              E(L(), p(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2)),
              E(L(6), p(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3)),
              E(L(), p(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2)),
              E(L(), p(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2)),
            ),
            E(L(8), p(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4)),
            E(L(8), p(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5)),
            E(L(8, 0, -3.1), p(-100, -3, 55).scale(0.4, 1, 0.4), U(0.4, 0.4, 0.4, 0.5)),
          )),
          Ib(p(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Ib(p(-89, 0.2, 80), [0, 0, 6]),
          X(R(
            E(L(), p(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)),
            E(L(), p(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4)),
            E(L(20, 1), p(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4)),
          )),
          Ia.map(({ x: g, z: t }) => {
            X(L(6), p(7 * g - 100, -3, 7 * t + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(G => X(L(6), p(7 * g - 100, G, 7 * t + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8)));
          }),
          gb(7, g => {
            X(
              L((23 * g + 1) % 5 + 5, 0, 0.5),
              p(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3),
              U(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
            );
          }),
          X(L(), p(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)),
          X(L(4), p(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)),
          X(L(12, 1), p(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)),
          Hb(p(-86, -7.5, 31)),
          Y(() => {
            [0, 12, 24].map(g =>
              X(L(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.2, 0.5, 0.6, 0.2))
            );
          }),
          Y(() => {
            [6, 18].map(g =>
              X(L(), p(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.1, 0.4, 0.5, 0.2))
            );
          }),
          X(
            R(
              wb(
                E(L(5), p(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3)),
                E(L(5), w(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),
                E(L(), w(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),
              ),
              E(L(5), w(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),
            ),
            p(-38.9, -11.3, 17),
          ),
          Hb(p(-38.9, -9.6, 10)),
          Y(() => {
            X(
              R(
                wb(
                  E(L(5), p(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5)),
                  E(L(5), p(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5)),
                  E(L(5), p(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5)),
                ),
                E(L(5), w(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)),
                E(L(5), p(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5)),
              ),
              p(-38.9, -11.3, 17),
            );
            Ib(p(-39.1, -0.6, 17).rotate(11), ...jb(15).map(({ x: g, z: t }) => [3 * g, 3 * t, 1.2]));
          }),
          Ia.map(({ x: g, z: t }) => {
            X(L(14, 1), p(9 * g - 38.9, -7.3, 11 * t + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(G =>
              X(L(17, 1), p(9 * g - 38.9, G - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3))
            );
          }),
          X(
            R(
              wb(
                E(L(6), p(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3)),
                E(L(), p(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3)),
              ),
              ...gb(6, g =>
                gb(6, t =>
                  E(
                    L(6),
                    p(4.6 * t - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                    U(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            p(-38.9, -11.3, 17),
          ),
          Ib(p(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          X(L(5), p(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4)),
          Hb(p(-84, -0.5, 85).rotate(0, 45)),
          Y(() => {
            X(B);
            Hb(p(0, -3, -4).rotate(0, 180));
          }),
          R(
            E(L(), p(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3)),
            E(L(3), p(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(g => E(L(), p(g, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3))),
          ));
      Y(() => {
        gb(2, g =>
          X(z, p(9 * g - 110 + (1 & g), 1.7, -12)));
      });
      Y(() => {
        gb(2, g =>
          X(z, p(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
      });
      Y(() => {
        gb(3, g =>
          X(z, p(9 * g - 106, 1.7, -12)));
      });
      X(
        R(
          wb(E(L(), p(26.5, -1.6, 10).scale(20, 2.08, 3)), E(L(), p(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...gb(4, g =>
            E(L(), p(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
          ...gb(3, g =>
            E(L(), p(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        p(-123, 0, -12),
        U(0.5, 0.5, 0.6, 0.2),
      );
      Hb(p(-116, -1.4, -18).rotate(0, 180));
      X(L(), p(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2));
      X(L(6), p(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      X(L(), p(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      X(L(8), p(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      X(L(8), p(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      X(L(), p(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      gb(3, g => {
        X(u(16), p(12 * g - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        X(u(16), p(-77, -9, -12 * g - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3));
      });
      X(R(
        E(L(12), p(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2)),
        E(L(), p(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2)),
        E(L(), p(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2)),
        E(L(12), p(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2)),
      ));
      X(L(), p(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3));
      X(L(9), p(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      X(R(
        E(L(), p(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1)),
        E(L(9), p(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2)),
      ));
      Hb(p(-98, -4.4, -40).rotate(0, 90));
      Ib(p(-115, 0.2, -12), [0, 0, 3.5]);
      Ib(p(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      X(R(
        wb(
          E(L(6, 0, 0, 0.6), p(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2)),
          E(L(), p(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2)),
        ),
        E(L(5), p(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2)),
      ));
      gb(4, g =>
        Y(() => {
          X(
            L(6),
            p(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
            U(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
          );
        }));
      Y(() => {
        X(R(E(L(10), w(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), E(L(10), w(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5))));
        X(L(15, 1), p(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3));
        X(L(10), p(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        X(L(5), p(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        Hb(p(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g =>
          X(r, fb(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2))
        );
        Ib(p(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(g => {
        [7.2, 1.5].map(t =>
          X(L(15, 1), p(-7.5 * g - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4))
        );
        X(r, p(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), U(1, 1, 0.8));
        X(L(12, 1), p(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5));
        X(
          R(
            E(L(), p(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4)),
            E(L(), w(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)),
            E(L(28, 1), p(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5)),
            E(L(5), p(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5)),
            E(L(5), p(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5)),
          ),
          p(g - 100, 0.7, 97),
        );
      });
      X(R(
        E(L(), p(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1)),
        E(L(45, 1), p(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1)),
      ));
      Y(() => {
        X(R(
          E(L(45, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),
          E(L(), p(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2)),
        ));
        X(L(8), p(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        X(L(5), p(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Ib(p(0, 3), ...jb(14).map(({ x: g, z: t }) => [5.6 * g, 5.6 * t, 2]));
      });
      Y(() => {
        [-1, 1].map(g =>
          X(r, fb(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), U(1, 1, 0.8))
        );
        X(R(E(L(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)), E(L(), w(9, 5, 2), U(0.3, 0, 0, 0.3))));
        X(E(L(28, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(E(L(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(R(
          E(L(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          E(L(), p(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          E(L(), p(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(E(L(28, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(E(L(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(R(
          E(L(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          E(L(), p(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          E(L(), p(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(E(L(28, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(E(L(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      X(L(), p(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      X(L(), p(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      X(L(), p(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      X(L(), p(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      Hb(p(-34, 2.7, 96).rotate(-12, 0));
      X(L(5), p(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6));
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((g, t) =>
        Y(() => {
          X(L(), p(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), g);
          2 === t && X(L(), p(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
          1 === t && X(L(), p(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(g => X(r, p(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), U(1, 1, 0.8)));
      gb(
        3,
        g =>
          X(
            u(24.7 - 0.7 * (1 & g)),
            p(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)),
            1 & g ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),
          ),
      );
      X(R(
        E(L(6, 0, 0, 0.3), p(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2)),
        E(L(5), p(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),
      ));
      Hb(p(0, 1.7, 82).rotate(0, 180));
      X(L(5), p(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4));
      X(L(6), p(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3));
      X(L(), p(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      X(L(7), p(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      X(R(
        wb(
          E(L(), p(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4)),
          E(L(), p(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4)),
        ),
        E(L(5), p(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4)),
      ));
      Y(() => {
        X(L(3), p(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          X(L(6), p(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4));
          X(L(), p(0, 6.2, g + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4));
        });
      });
      Y(() => {
        X(L(5), w(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        X(L(5), w(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        Hb(p(0, 1.5, -1).rotate(0, 180));
      });
      Ib(p(0, 3, 95), ...jb(9).map(({ x: g, z: t }) => [9 * g, 9 * t, 4]));
      Ib(p(0, 19, 134), [0, 0, 3.5]);
    });
    Y(() => {
      X(lb(20), p(0, 1).scale3d(0.5), U(1, 0.3, 0.4));
      X(lb(30), w(0.65, 0.8, 0.55), U(1, 0.3, 0.4));
      X(L(), p(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        X(r, fb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8));
        X(
          E(R(L(15, 1), E(L(), p(0, 0, 1).scale(2, 2, 0.5))), fb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3)),
          p(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        Y(() => {
          X(L(20, 1), p(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(L(6).slice(0, -1), w(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(
        lb(30, 24, (m, u, x) => {
          const B = u / 24, D = m * Math.PI * 2 / 30, z = Math.sin(B ** 0.6 * Math.PI / 2);
          m = B * B * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < u
            ? { x: x.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(D) * z,
              y: Math.cos(B * Math.PI) - B - m,
              z: Math.sin(D) * z + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        w(0.7, 0.7, 0.7),
        U(1, 1, 1),
      );
      [-1, 1].map(m => X(lb(12), p(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    Y(() => {
      X(L(6, 1), w(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      X(L(10), p(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      X(L(3), p(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
