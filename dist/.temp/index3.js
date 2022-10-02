let aa,
  ba,
  ca,
  da,
  ea,
  ia,
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
const g = NO_INLINE(a => 0 > a ? -a : a),
  Ta = NO_INLINE((a, b) => a < b ? a : b),
  Ua = NO_INLINE((a, b) => b < a ? a : b),
  Va = (a, b) => g(a) > b ? a : 0,
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
  v = NO_INLINE((a, b, f) => bb.scale(a, b, f)),
  gb = (a, b) => Array.from(Array(a), (f, k) => b(k)),
  hb = (a, b, f) => (a.C = f, a.u = b, a),
  ib = (a, b, f = a.u) =>
    hb(
      a.map(k => {
        let r, l;
        return { x: k, y: r, z: l } = k,
          { x: k, y: r, z: l } = b.transformPoint({ x: k, y: r, z: l }),
          { x: k, y: r, z: l };
      }),
      f,
      a.C,
    ),
  H = (a, b, f) => a.map(k => ib(k, b, f)),
  jb = (a, b = 0) =>
    gb(a, f => {
      const k = Math.cos(2 * Math.PI * f / a);
      return { x: Math.sin(2 * Math.PI * f / a), y: 0, z: 0.01 > g(k) ? k : 0 > k ? k - b : k + b };
    }),
  kb = (a, b, f) =>
    a.map((k, r, { length: l }) => hb([k, b[l - r - 1], b[l - (r + 1) % l - 1], a[(r + 1) % l]], a.u, f)),
  K = (
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
      for (let l = 0; b > l; l++) {
        const u = hb([], 0, 1);
        k.push(u);
        u.push(f(r, l, u));
        l && u.push(f((r + 1) % a, l, u));
        b - 1 > l && u.push(f((r + 1) % a, l + 1 % b, u));
        u.push(f(r, l + 1 % b, u));
      }
    }
    return k;
  },
  mb = ({ x: a, y: b, z: f }, k) => a * k.x + b * k.y + f * k.z,
  nb = a => {
    let b, f = 0, k = 0, r = 0, l = a.at(-1);
    for (b of a) {
      f += (l.y - b.y) * (l.z + b.z), k += (l.z - b.z) * (l.x + b.x), r += (l.x - b.x) * (l.y + b.y), l = b;
    }
    return b = Math.hypot(f, k, r), f /= b, k /= b, r /= b, { x: f, y: k, z: r, w: f * l.x + k * l.y + r * l.z };
  },
  ob = (a, b) => {
    var f, k, r, l = b.B;
    for (var u = 0; l.length > u; ++u) {
      if (-0.00008 > (f = mb(a, l[u]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
        k = [];
        r = [];
        l = b.B;
        u = b.v;
        let x = l.at(-1), z = mb(a, x) - a.w;
        for (const I of l) {
          f = mb(a, I) - a.w,
            8e-5 > z && r.push(x),
            -0.00008 < z && k.push(x),
            (8e-5 < z && -0.00008 > f || -0.00008 > z && 8e-5 < f)
            && (z /= f - z,
              x = { x: x.x + (x.x - I.x) * z, y: x.y + (x.y - I.y) * z, z: x.z + (x.z - I.z) * z },
              k.push(x),
              r.push(x)),
            x = I,
            z = f;
        }
        return {
          l: 2 < k.length && { B: hb(k, l.u, l.C), v: u, A: b },
          j: 2 < r.length && { B: hb(r, l.u, l.C), v: u, A: b },
        };
      }
    }
    return { l: k, j: r };
  },
  pb = (a, b, f = nb(b.B)) => {
    let k, r, l;
    return a
      ? ({ l: k, j: r } = ob(a, b), k || r || a.o.push(b), k && (a.l = pb(a.l, k, f)), r && (a.j = pb(a.j, r, f)))
      : ({ x: k, y: r, z: f, w: l } = f, a = { x: k, y: r, z: f, w: l, o: [b], l: 0, j: 0 }),
      a;
  },
  qb = (a, b, f) => {
    const k = [],
      r = (l, u) => {
        let { l: x, j: z } = ob(l, u);
        x || z || (0 < f * mb(l, b) ? x = u : z = u);
        x && (l.l ? r(l.l, x) : k.push(x));
        z && l.j && r(l.j, z);
      };
    for (const l of b.o) {
      r(a, l);
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
        for (let [r, l] of k) {
          for (const u of l) {
            pb(b, u, r);
          }
        }
      }
      return b;
    }),
  Q = (a, ...b) => {
    const f = l => {
        let u;
        return l.A && ((u = k.get(l.A)) ? (r.delete(u), l = f(l.A)) : k.set(l.A, l)), l;
      },
      k = new Map(),
      r = new Map();
    return a = ub(wb(ub(vb(a)), ...b)),
      rb(a, l => {
        for (const u of l.o) {
          r.set(f(u), u.v);
        }
      }),
      Array.from(r, ([{ B: l }, u]) => {
        const x = l.map(({ x: z, y: I, z: D }) => ({ x: z, y: I, z: D }));
        return hb(u ? x.reverse() : x, l.u, l.C);
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
      ][xa = Ha.reduce((a, { i: b }) => a + b, 0)] + " / XIII";
  },
  Bb = () => {
    localStorage.DanteSP22 = JSON.stringify([e.map(({ i: a }) => a), Ha.map(({ i: a }) => a), za, c, da]);
  },
  Cb = (a, b, f, k) =>
    new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Fb = () => {
    let a, b, f, k, r, l, u, x, z, I, D, h, t, O, S = !0;
    const C = [],
      F = () => {
        b4.innerHTML = "Music: " + S;
        ba || !S ? Db.disconnect() : Db.connect(Eb.destination);
      },
      E = () => {
        const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ka = Cb(0.3, 181, q, 1.732051);
        la = [Cb(0.3, 55, q, 1.732051), Cb(55, 181, q, 1.732051)];
        k = x = void 0;
        C.length =
          ea =
          O =
          h =
          t =
          Aa =
          Ba =
            0;
      },
      w = (q, m = 0) => {
        if (ba !== q) {
          ba = q;
          ia = m;
          E();
          document.body.className = q ? "l m" : "l";
          try {
            q
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Db.start());
          } catch {
          }
          F();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => w(!1);
    b2.onclick = () => w(!1, 1);
    b5.onclick = () => w(!0);
    b4.onclick = () => {
      S = !S;
      F();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = q => {
      if (!ba && (q.target === hC && (ea = 1), ia)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = q => {
      let m;
      q.repeat
        || (m = {
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
          (C[m] = !!q.type[5] && !0) && (0 === m && (ea = 1), 1 === m && w(!0)));
    };
    onmousemove = ({ movementX: q, movementY: m }) => {
      ia && (q || m) && (Sa += 0.1 * q, Ra += 0.1 * m);
    };
    hC.ontouchstart = q => {
      if (!ba) {
        for (let { pageX: m, pageY: J, identifier: G } of q.changedTouches) {
          ia && m > hC.clientWidth / 2
            ? void 0 === x && (z = 0, l = m, u = J, x = G, I = Sa, D = Ra)
            : void 0 === k && (r = 0, b = m, f = J, k = G);
        }
        a = wa;
      }
    };
    hC.ontouchmove = q => {
      if (!ba) {
        for (let { pageX: A, pageY: y, identifier: B } of q.changedTouches) {
          var m, J, G, M;
          x === B && (Sa = I + (A - l) / 2.3, Ra = D + (y - u) / 2.3, z = 1);
          k === B
            && (B = (b - A) / 20,
              m = g(B),
              J = (f - y) / 20,
              G = g(J),
              (M = 0.5 < Ua(m, G)) && (r = 1),
              h = (M && 0.2 < m) * n(B, -1),
              t = (M && 0.2 < G) * n(J, -1),
              2 < m && (b = A + 20 * (0 > B ? -1 : 1)),
              2 < G && (f = y + 20 * (0 > J ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = q => {
      let m;
      document.activeElement === document.body && q.preventDefault();
      for (const J of q.changedTouches) {
        J.identifier === x
          ? (x = void 0, z || (m = 1), z = 0)
          : J.identifier === k
          ? (k = void 0, t = h = 0, r || (m = 1), r = 0)
          : m = 1;
      }
      q.target === hC && m && a && 0.02 < (q = wa - a) && 0.7 > q && (ea = 1);
    };
    ja = () => {
      Aa = t + (C[4] ? 1 : 0) - (C[5] ? 1 : 0);
      Ba = h + (C[2] ? 1 : 0) - (C[3] ? 1 : 0);
      var q = navigator.getGamepads()[0];
      if (q) {
        const m = G => J[G]?.pressed || 0 < J[G]?.value ? 1 : 0, J = q.buttons;
        q = q.axes;
        ia && (Ra += d * Va(q[3], 0.3) * 80, Sa += d * Va(q[2], 0.3) * 80);
        Aa += m(12) - m(13) - Va(q[1], 0.2);
        Ba += m(14) - m(15) - Va(q[0], 0.2);
        m(9) && w(!0);
        (q = m(3) || m(2) || m(1) || m(0)) && !O && (ea = 1);
        O = q;
      }
    };
    document.onvisibilitychange = onblur = onresize = E;
    w(!0);
  },
  U = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a),
  X = (a, b = new DOMMatrix(), f) => na.o.push(...H(a, b, f)),
  Y = (a, b = 1) => {
    const f = na;
    b = { m: new DOMMatrix(), H: Ga.length, G: b, o: [] };
    return Ga.push(b), a(na = b), na = f, b;
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
        I: a,
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
    X(K(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(K(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(K(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
  },
  Ib = (a, ...b) => {
    let f = -1, k = 0, r = 0, l = 0, u = 0, x = 0, z = 1, I = 3;
    const D = {
        i: 0,
        F() {
          if (!D.i) {
            let M, A, y, B, T, N, V, L = 1, R = 1 / 0;
            for (const P of O) {
              var { x: q, z: m, w: J } = P;
              m = (q = Math.hypot(C - q, F - m)) - J;
              V ||= q < J;
              0 < m && R > m && (R = m, S = P);
              L = Ta(L, q / J);
            }
            V
              || ({ x: G, z: M, w: A } = S,
                y = C - G,
                B = F - M,
                T = Math.hypot(y, B),
                N = Math.atan2(-B, y),
                z && (r = (Math.random() - 0.5) * Math.PI / 2, I = n(I / (1 + Math.random()))),
                N += r,
                f = -Math.cos(N),
                k = Math.sin(N),
                0.1 < T && (T = Ta(T, A) / (T || 1), C = y * T + G, F = B * T + M));
            z = V;
            I = zb(I, 6 * (1 - L) + 3, L + 3);
            E = zb(E, C = zb(C, C + f, I), I);
            w = zb(w, F = zb(F, F + k, I), I);
            l = Xa(l, Math.atan2(E - u, w - x) / Qa - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > Gb(eb(h.m).multiplySelf(a).translateSelf(u = E, 0, x = w).rotateSelf(0, l, 7 * Math.sin(1.7 * c)))
            ) {
              D.i = 1;
              var G = [
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
              1 / 0 > Fa && (Fa = c + (xa && 12 > xa ? 5 : 7), h4.innerHTML = G);
              Ab();
              Bb();
            }
          }
          D.i
            && eb(Ga[2].m).translateSelf(
              t % 4 * 1.2 - 1.7 + Math.sin(c + t) / 7,
              -2,
              1.7 * (t / 4 | 0) - 5.5 + g(t % 4 - 2) + Math.cos(c / 1.5 + t) / 6,
            );
        },
      },
      h = na,
      t = Ha.length,
      O = b.map(([q, m, J]) => ({ x: q, z: m, w: J }));
    let S = O[0], { x: C, z: F } = S, E = C, w = F;
    Ha.push(D);
  },
  Jb = (a, b, f, k) => {
    a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(
      2 * Math.sin(c),
      Math.sin(0.7 * c),
      Math.sin(0.9 * c),
    );
  },
  Lb = () => {
    let a, b, f, k, r, l, u, x, z, I, D, h, t, O, S = 1, C = 2, F = 15;
    const E = { x: 0, y: 0, z: 0 },
      w = () => (C ? e[za] : Ga[b && 1 === Ga[b].G && b || 0]).m,
      q = M => {
        const { x: A, y, z: B } = 1 < C
          ? eb(e[za].m).multiplySelf(e[za].I).transformPoint({ x: 0, y: za || 0.9 < ca ? 15 : 1, z: -2.4 })
          : w().transformPoint(E);
        M && (u = (A - Pa.x) / d, x = (B - Pa.z) / d);
        Pa.x = A;
        Pa.y = y;
        Pa.z = B;
      },
      m = (M, A, y) => {
        eb(w()).invertSelf();
        db.m41 = db.m42 = db.m43 = 0;
        M = db.transformPoint({ x: M, z: y, w: 0 });
        E.x += M.x;
        E.y += A;
        E.z += M.z;
        q();
      },
      J = () => {
        var M = 0, A = 0, y = 0;
        let B = 0;
        var T = -1;
        let N = 0, V = 0;
        for (var L = 0; 36 > L; ++L) {
          var R = 512 * L;
          for (var P = 96; 416 > P; P += 4) {
            for (var sa = 0; 2 > sa; ++sa) {
              var ha = Kb[R + P + sa], ma = Kb[R + P + sa + 2];
              ha > B && (B = ha);
              ha + ma && (0 > T || T === L) && (T = L, ma === a ? ++M : A && A !== ma || (A = ma, ++y));
            }
          }
        }
        a = 0 > T ? 0 : y > 2 * M ? A : a;
        for (M = 36; 128 > M; M += 1) {
          L =
            T =
            y =
            A =
              0;
          R = 512 * M;
          for (P = 0; 128 > P; P += 1) {
            for (sa = R + 4 * P, ha = 0; 2 > ha; ++ha) {
              ma = Kb[sa + ha];
              const cb = Kb[sa + ha + 2];
              (ha ? 64 < P : 64 > P) ? A = Ua(A, ma) : y = Ua(y, ma);
              ha ? L = Ua(L, cb) : T = Ua(T, cb);
            }
          }
          g(y - A) > g(N) && (N = y - A);
          g(L - T) > g(V) && (V = L - T);
        }
        I = n(1 - 0.015 * Ua(g(N), g(V)));
        m(N / 255, B / 255, V / 255);
      },
      G = (M, A, y, B) => Ya(M, A, S || (n(g(A - M) ** 0.5 - y) + 1 / 7) * (1 - Math.exp(-(1.5 * B) * d)));
    va = M => {
      q(a);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Kb);
      NO_INLINE(J)();
      !C && a === b || (b = a, A = eb(w()).invertSelf().transformPoint(Pa), E.x = A.x, E.y = A.y, E.z = A.z);
      C = C && (a ? 0 : 1);
      var { x: A, y, z: B } = Pa;
      const T =
        (y < (-20 > A || 109 > B ? -25 : -9) && (C = 2),
          1 === a && (e[9].i = -15 > A && 0 > B ? 1 : 0),
          D = Ya(zb(D, y, 2), y, C || 8 * g(D - y)),
          t = G(t, D, 2, 1),
          h = G(h, A, 0.5, 1),
          O = G(O, B, 0.5, 1),
          l = zb(l, ra * (27 < a && 32 > a), 2),
          ia
            ? (y = C + (1 - Math.exp(-18 * d)),
              Ca = Ya(Ca, A, y),
              Da = Ya(Da, D + 1.5, y),
              Ea = Ya(Ea, B, y),
              Sa = Wa(Sa))
            : (Ea = G(Ea, O + -18 + 5 * l, 1, 2 + l),
              Da = G(Da, Ua(t + n((-60 - B) / 8, 0, 20) + 13 + 9 * l, 6), 4, 2),
              Ca = G(
                Ca,
                h,
                1,
                2
                  + l,
              ),
              y = Ta(-6, -g(O - Ea)),
              N = h - Ca,
              Sa = Xa(Sa, 90 - Wa(Math.atan2(y, N) / Qa), S + (1 - Math.exp(-10 * d))),
              Ra = Xa(Ra, 90 - Math.atan2(Math.hypot(y, N), Da - t) / Qa, S + (1 - Math.exp(-10 * d)))),
          Ra = n(Ra, -87, 87),
          S = 0,
          M().translateSelf(A, D, B).rotateSelf(0, k));
      for (N = 0; 2 > N; ++N) {
        const V = 9.1 * c - Math.PI * N;
        eb(T, M()).translateSelf(0, r * n(0.45 * Math.sin(V - Math.PI / 2))).rotateSelf(r * Math.sin(V) * 0.25 / Qa, 0);
      }
      y = n(Aa, -1);
      var N = n(Ba, -1);
      A = Va(Math.hypot(y, N) ** 0.5, 0.1);
      B = Math.atan2(y, N);
      y = A * g(y) * Math.sin(B);
      N = A * g(N) * Math.cos(B);
      A && (f = 90 - B / Qa);
      r = zb(r, A, 10);
      k = Xa(k, f, 1 - Math.exp(-8 * d));
      F = a ? 5 : zb(F, C ? 10 : 19, 2.2);
      u = a || C ? 0 : zb(u, 0, 3);
      x = a || C ? 0 : zb(x, 0, 3);
      z = C ? 0 : zb(z, a ? 7 * n(2 * A) * I : 0, a ? 9 : 1);
      B = ia ? (180 + Sa) * Qa : 0;
      m(d * (u + z * (N * Math.cos(B) - y * Math.sin(B))), -F * d, d * (x + z * (N * Math.sin(B) + y * Math.cos(B))));
    };
  },
  Mb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Nb = (a, b) => {
    const f = {}, k = Z.c1h();
    return Z.abz(k, a), Z.abz(k, Mb(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
  },
  Ub = (a, b, f) => {
    let k;
    ba
      ? (k = fb(0, 40 * Math.sin(wa) - 70),
        ab(k, Sb, 37),
        ab(k, Sb, 38),
        ab(k, Sb, 39),
        Z.uae(a, !1, Sb),
        Z.d97(4, Ga[39].D - Ga[37].s, 5123, 2 * Ga[37].s))
      : (Z.uae(a, !1, Sb),
        Z.d97(4, (b ? Ga[39].D : Ga[37].s) - 3, 5123, 6),
        Z.uae(a, !1, Tb),
        Z.das(4, Ga[f].D - Ga[f].s, 5123, 2 * Ga[f].s, Ha.length),
        Z.das(4, Ga[40].D - Ga[40].s, 5123, 2 * Ga[40].s, e.length));
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
        const x = L => {
            let R, P, sa, ha = 0, ma = 0;
            const cb = [],
              Ka = new Int32Array(768 * L),
              $b = 2 ** (m - 9) / L,
              ac = Math.PI * 2 ** (y - 8) / L,
              xb = T * L & -2;
            for (let sb = 0; 11 >= sb; ++sb) {
              for (
                let tb = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb];
                32 > tb;
                ++tb
              ) {
                const Pb = (32 * sb + tb) * L;
                for (var La = 0; 4 > La; ++La) {
                  if (R = 0, Ob && (R = z[Ob - 1].charCodeAt(tb + 32 * La) - 40, R += 0 < R ? 106 : 0), R) {
                    var fa;
                    if (!(fa = cb[R])) {
                      fa = R;
                      let W = void 0, ta = void 0;
                      var Qb = R;
                      let bc = 0, cc = 0;
                      const dc = 2 > b ? Yb : Wb, ec = 2 > b ? 1 > b ? Xb : Zb : Wb, Rb = new Int32Array(F + E + V);
                      for (let Ma = 0, yb = 0; F + E + V > Ma; ++Ma, ++yb) {
                        let Na = 1;
                        F > Ma ? Na = Ma / F : F + E > Ma || (Na = (1 - (Na = (Ma - F - E) / V)) * 3 ** (-q / 16 * Na));
                        0 > yb
                          || (yb -= 4 * L,
                            ta = 0.00396 * 2 ** ((Qb + D - 256) / 12),
                            W = 0.00396 * 2 ** ((Qb + O - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Rb[Ma] = 80
                            * (dc(bc += ta * Na ** (h / 32)) * I + ec(cc += W * Na ** (S / 32)) * t
                              + (C ? (2 * Math.random() - 1) * C : 0))
                            * Na | 0;
                      }
                      fa = cb[fa] = Rb;
                    }
                    for (let W = 0, ta = 2 * Pb; fa.length > W; ++W, ta += 2) {
                      Ka[ta] += fa[W];
                    }
                  }
                }
                for (let W, ta = 0; L > ta; ++ta) {
                  La = 0;
                  fa = 2 * (Pb + ta);
                  var ua = (((W = Ka[fa]) || sa)
                    && (P = 0.00308 * J,
                      1 !== b && 4 !== b || (P *= Math.sin($b * fa * Math.PI * 2) * N / 512 + 0.5),
                      P = 1.5 * Math.sin(P),
                      ha += P * ma,
                      ua = (1 - G / 255) * (W - ma) - ha,
                      ma += P * ua,
                      W = 4 === b ? ma : 3 === b ? ua : ha,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= M / 32,
                      sa = 1e-5 < W * W,
                      ua = Math.sin(ac * fa) * A / 512 + 0.5,
                      La = W * (1 - ua),
                      W *= ua),
                    fa < xb || (La += Ka[1 + fa - xb] * B / 255, W += Ka[fa - xb] * B / 255),
                    u + fa >> 1);
                  r[ua] += (Ka[fa] = La) / 65536;
                  l[ua] += (Ka[++fa] = W) / 65536;
                }
              }
            }
            u += 768 * L;
          },
          z = Ja[b],
          [I, D, h, t, O, S, C, F, E, w, q, m, J, G, M, A, y, B, T, N] = Oa[b],
          V = 4 * w ** 2;
        x(5513);
        x(4562);
        x(3891);
        Vb(5 > ++b ? f : a);
      },
      k = Eb.createBuffer(2, 5362944, 44100),
      r = k.getChannelData(0),
      l = k.getChannelData(1);
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
          l = w => {
            Z.f1s();
            requestAnimationFrame(l);
            var q = (w - (aa || w)) / 1e3;
            if (wa += q, c += d = ba ? 0 : Ta(0.066, q), aa = w, 0 < d) {
              ja();
              Fa && c > Fa && (Fa = 0, h4.innerHTML = "");
              da = zb(da, e[9].h, 0.2 + 0.3 * g(2 * e[9].h - 1));
              ca = zb(ca, ya ? zb(ca, -9, 1.5) : n(c / 3), 1);
              let G = 1;
              var m = () => eb(bb, Ga[++G].m);
              q =
                (ra = Za(e[12].g, e[13].g),
                  qa = Ya(zb(qa, 0, 1), Wa(qa + 60 * d), e[5].g - e[6].h),
                  oa = Ya(zb(oa, 0, 5), Wa(oa + 56 * d), ra),
                  pa = Ya(zb(pa, 0, 4), Wa(pa + 48 * d), ra),
                  Jb(m(), -12, 4.2, 40 * ca - 66),
                  m().translateSelf(0, 0, -15).scaleSelf(1, n(1.22 - e[1].g), 1),
                  m().translateSelf(0, 0, 15).scaleSelf(1, n(1.22 - e[2].g), 1),
                  m().translateSelf(
                    0,
                    0.01 < e[3].g ? (5 * Math.cos(1.5 * c) + 2) * e[3].h * (1 - e[2].g) + -15 * (1 - e[3].g) : -500,
                    0,
                  ),
                  Ta(e[2].h, 1 - e[4].h));
              w =
                (m().translateSelf(q * Math.sin(0.7 * 3 + 0.7 * c) * 12),
                  m().translateSelf(q * Math.sin(3 + c) * 8.2),
                  m().translateSelf(q * Math.sin(c / 1.5 + 2) * 12),
                  m().translateSelf(9.8 * (1 - q)),
                  n(1 - 5 * q) * Za(e[4].g, e[5].g));
              q =
                (m().translateSelf(0, w * Math.sin(1.35 * c) * 4),
                  m().translateSelf(0, 0, w * Math.sin(0.9 * c) * 8),
                  m().translateSelf(0, -6.5 * e[4].h),
                  m().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + qa, 0),
                  m().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, n(1.1 - e[6].g), 1),
                  Za(e[7].h, e[6].h));
              w =
                (m().translateSelf(0, 3.5 * (1 - Ua(e[6].g, e[7].g)) + q * Math.sin(c) * 5),
                  m().translateSelf(0, q * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * q),
                  m().translateSelf(0, -7.3 * e[7].h),
                  Jb(m(), -123, 1.4, 55 + -65 * da),
                  Za(e[10].g, e[11].g));
              q =
                (m().translateSelf(0, -2, w * g(Math.sin(1.1 * c)) * -8.5 + 10),
                  m().translateSelf(0, -2, w * g(Math.sin(2.1 * c)) * -8.5 + 10),
                  (1 - e[10].g) * (1 - w));
              w = (m().translateSelf(0, -2, -8.5 * Ua(q, w * g(Math.sin(1.5 * c))) + 10), Za(e[8].h, e[12].h));
              for (q = 0; 4 > q; q++) {
                m().translateSelf(
                  (2 < q ? 2 * (1 - w) + w : 0) - 100,
                  w * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7,
                  115 + (1 & q ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7
                    + Ua(w, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),
                );
              }
              m().translateSelf(2.5 * (1 - w) - 139.7, -3 * (1 - e[8].g) + w * Math.sin(0.8 * c) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * c) * (3 * w + 3), 0);
              m().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g);
              m().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + oa);
              m().translateSelf(-65.8, 0.8, 106).rotateSelf(0, pa);
              m().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - pa);
              m().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + pa);
              w = Za(e[13].h, e[14].h);
              for (q = 0; 3 > q; ++q) {
                m().translateSelf(0, (1 - e[13].h) * (1 - e[14].h) * (q ? 0 : 3) + w * Math.sin(1.5 * c + 1.5 * q) * 4);
              }
              m().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
              q = Za(Za((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2);
              m().translateSelf(0, 16 * q, 8.5 * n(2 * q - 1) + 95);
              va(m);
              for (m = 0; G >= m; ++m) {
                ab(Ga[m].m, Sb, m - 1);
              }
              for (m = 0; 13 > m; ++m) {
                Ha[m].F(), ab(db, Tb, m);
              }
              for (m = 0; 16 > m; ++m) {
                e[m].F(), ab(db, Tb, m + 13), Tb[16 * m + 223] = 1 - e[m].g;
              }
              h();
              Z.b6o(36160, E);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: w, y: q, z: J } = Pa;
              Z.uae(h("b"), !1, ab(eb().rotateSelf(0, 180).invertSelf().translateSelf(-w, -q, 0.3 - J)));
              Ub(h("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(h("b"), !1, ab(eb().translateSelf(-w, -q, -J - 0.3)));
              Ub(h("c"), 0, 41);
              Z.f1s();
            }
            ea = 0;
            eb(bb, u);
            ba
              ? u.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : u.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ca, -Da, -Ea);
            I();
            Z.b6o(36160, C);
            Z.v5y(0, 0, 2048, 2048);
            S[0](54.7 * 1.1);
            S[1](126 * 1.1);
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
            Ub(t("c"), !ia, 42);
            D();
            Z.ubu(D("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
            Z.ubu(D("k"), Ca, Da, Ea);
            Z.uae(D("b"), !1, ab(eb(u).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, E);
            Z.f1s();
          },
          u = new DOMMatrix(),
          x = new DOMMatrix(),
          z = f;
        var k = Mb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const I = Nb(
            Mb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          D = Nb(
            Mb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          h = Nb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
          ),
          t = Nb(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          O = gb(8, () => ({})),
          S = gb(2, w => {
            const q = Z.c25();
            return Z.a4v(33984 + w),
              Z.b9j(3553, q),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              m => {
                let J = 0, G = 0, M = 0, A = 1 / 0, y = -1 / 0, B = 1 / 0, T = -1 / 0, N = 1 / 0, V = -1 / 0;
                Z.fas(36160, 36096, 3553, q, 0);
                Z.c4s(256);
                eb().scale3dSelf(m).multiplySelf(eb(la[w], x).multiplySelf(u).invertSelf());
                for (let L = 0; 8 > L; ++L) {
                  const R = O[L],
                    P = (R.x = 4 & L ? 1 : -1, R.y = 2 & L ? 1 : -1, R.z = 1 & L ? 1 : -1, db.transformPoint(R));
                  J -= R.x = (0 | P.x) / m / P.w;
                  G -= R.y = (0 | P.y) / m / P.w;
                  M -= R.z = (0 | P.z) / m / P.w;
                }
                eb().rotateSelf(298, 139).translateSelf(J / 8, G / 8, M / 8);
                for (m = 0; 8 > m; ++m) {
                  const { x: L, y: R, z: P } = db.transformPoint(O[m]);
                  A = Ta(A, L);
                  y = Ua(y, L);
                  B = Ta(B, R);
                  T = Ua(T, R);
                  N = Ta(N, P);
                  V = Ua(V, P);
                }
                m = 10 + w;
                N *= 0 > N ? m : 1 / m;
                V *= 0 < V ? m : 1 / m;
                Z.uae(
                  I("b"),
                  !1,
                  ab(
                    eb(bb, x).scaleSelf(2 / (y - A), 2 / (T - B), 2 / (N - V)).translateSelf(
                      (y + A) / -2,
                      (T + B) / -2,
                      (N + V) / 2,
                    ).multiplySelf(db),
                    r[w],
                  ),
                );
                Ub(I("c"), !ia, 42);
              };
          }),
          C = Z.c5w();
        k = Z.c25();
        const F = Z.c3z(), E = Z.c5w();
        h();
        Z.uae(h("a"), !1, ab(Cb(1e-4, 2, 1.4, 0.4)));
        t();
        Z.ubh(t("q"), 2);
        Z.ubh(t("h"), 1);
        Z.ubh(t("g"), 0);
        D();
        Z.ubh(D("q"), 2);
        Z.b6o(36160, C);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, E);
        Z.bb1(36161, F);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, F);
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
        NO_INLINE(Fb)();
        NO_INLINE(Lb)();
        requestAnimationFrame(l);
      }
    },
    f = new Image();
  f.onload = f.onerror = b;
  f.src = gc;
  NO_INLINE(fc)(() => {
    Vb(() => {
      let l, u = 0;
      const x = [],
        z = [],
        I = [],
        D = [],
        h = F => {
          let { x: E, y: w, z: q } = l[F], m = (C[0] = E, C[1] = w, C[2] = q, F = "" + (l.C ? S : t), O.get(F));
          return void 0 !== m
            ? (E = 3 * m, D[E] = (D[E++] + t[5]) / 2, D[E] = (D[E++] + t[6]) / 2, D[E] = (D[E] + t[7]) / 2)
            : (O.set(F, m = O.size), z.push(E, w, q, C[3]), I.push(t[4]), D.push(t[5], t[6], t[7])),
            m;
        },
        t = new Int32Array(8),
        O = new Map(),
        S = new Int32Array(t.buffer, 0, 5),
        C = new Float32Array(t.buffer);
      for (const F of Ga) {
        for (l of (C[3] = 40 === F.H ? -14 : F.G && F.H, F.o)) {
          const { x: E, y: w, z: q } = nb(l);
          t[4] = 0 | l.u;
          t[5] = 32767 * E;
          t[6] = 32767 * w;
          t[7] = 32767 * q;
          for (let m = 2, J = h(0), G = h(1); l.length > m; ++m) {
            x.push(J, G, G = h(m));
          }
        }
        F.o = null;
        F.s = u;
        F.D = u = x.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(z), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(D), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(I), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(x), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Vb(b);
      try {
        const [F, E, w, q, m] = JSON.parse(localStorage.DanteSP22);
        e.map((J, G) => J.g = J.h = J.i = G ? 0 | F[G] : 0);
        Ha.map((J, G) => J.i = 0 | E[G]);
        za = w;
        da = m;
        c = q;
        d = 0;
      } catch {
      }
      Ab();
      ca = n(za);
    });
    const k = gb(11, l => p(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10)),
      r = gb(10, l => kb(ib(jb(18), k[l]).reverse(), ib(jb(18), k[l + 1]), 1)).flat();
    Y(() => X([Ia.slice(1)], p(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const l = (h, t, O) =>
          Y(() => {
            Ia.map(({ x: S, z: C }) => {
              X(K(11, 1), p(4 * S, 4, O + 4 * C).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6));
              X(K(), p(4 * S, 7, O + 4 * C).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
            });
            X(Q(
              H(K(), p(0, 0, O).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(S => H(K(), p(5 * S, 0.2, O).rotate(-30 * S).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3))),
            ));
            X(K(), p(0, -3, O).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
          }),
        u = h =>
          Q(
            H(K(), p(0, -h / 2).scale(6, h - 1, 2.2)),
            H(K(), p(0, -h / 2 - 6).scale(4, h - 3, 4)),
            H(K(32, 1), p(0, h / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        x = Q(
          H(K(30, 1, 1.15, 1), p(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7)),
          H(K(30, 1, 1.3, 1), p(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2)),
          H(K(), p(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),
        ),
        z = gb(7, h => H(K(6, 1), p(4 * (h / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38))).flat(),
        I = (Y(() => {
          X(x);
          Hb(p(0, -3, 4));
        }),
          Hb(p(-5.4, 1.5, -19).rotate(0, -90)),
          Ib(p(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Ib(p(0, 2.8), [5, 10, 3], [-5, 10, 3], ...jb(18).map(({ x: h, z: t }) => [7 * h, 10 * t, 4.5 - 2 * g(h)])),
          X(K(), p(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
          Ia.map(({ x: h, z: t }) => X(K(6), p(3 * h, 3, 15 * t).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))),
          X(K(), p(0, 0, -23).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)),
          X(K(), p(0, 0, 22).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map(h => {
            X(K(), p(0, 6.3, h).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
            X(K(), p(0, 1, h).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
            Y(() => {
              X(z);
            });
          }),
          gb(5, h =>
            gb(2, t =>
              X(
                r,
                p(18.5 * (t - 0.5), 0, 4.8 * h - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),
                U(1, 1, 0.8, 0.2),
              ))),
          X(K(), p(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)),
          X(K(), p(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2)),
          X(K(5), p(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4)),
          X(K(), fb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5)),
          X(Q(
            wb(
              H(K(6, 0, 0, 0.3), p(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2)),
              H(K(6), p(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)),
              H(K(6, 0, 0, 0.3), p(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2)),
            ),
            H(K(5), v(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)),
            H(K(5, 0, 1.5), p(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2)),
            H(K(), fb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5)),
            H(K(6), p(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5)),
          )),
          Y(() => {
            X(K(5), p(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
            Hb(p(0, 1.2));
          }),
          Hb(p(15, -2, 4)),
          l(0, 0, 35),
          l(0, 0, 55),
          Y(() => {
            X(
              Q(
                wb(
                  H(K(), v(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  H(K(6), v(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  H(K(), p(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5)),
                  H(K(16, 1, 0, 4), v(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2)),
                ),
                H(K(), v(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),
              ),
              p(0, 0, 45),
            );
            Ib(p(0, 2.8, 45), [0, 0, 4.5]);
          }),
          X(K(), p(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
          Y(() => {
            X(K(3), p(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
            X(K(8), p(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
            X(K(), p(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
            X(K(), p(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
            Hb(p(-23, -0.5, 66.5));
          }),
          Y(() => {
            X(K(), p(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
            X(Q(H(K(), v(3, 1.4, 2.7)), H(K(), v(1.2, 8, 1.2))), p(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2));
          }),
          Y(() => {
            X(Q(
              H(K(), p(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
              H(K(), p(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),
            ));
            X(K(), p(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
          }),
          Y(() => {
            X(K(6), p(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4));
          }),
          Hb(p(-55, -1.1, 46).rotate(0, 90)),
          X(K(6), p(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)),
          X(K(7), p(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)),
          [
            ...H(K(), p(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)),
            ...Q(
              H(K(6), fb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)),
              H(K(4, 0, 0.01), p(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3)),
              H(K(6), fb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(h => H(K(5), p(h, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        D = (X(I, p(-53, 0, 55)),
          Y(() => {
            X(I);
          }, 2),
          X(K(), p(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2)),
          X(K(3, 0, -0.5), p(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2)),
          X(Q(
            wb(
              H(K(), p(-100, -2.4, 55).scale(8, 0.9, 8), U(0.8, 0.8, 0.8, 0.2)),
              H(K(), p(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
              H(K(), p(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2)),
              H(K(), p(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2)),
              H(K(6), p(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3)),
              H(K(), p(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2)),
              H(K(), p(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2)),
            ),
            H(K(8), p(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4)),
            H(K(8), p(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5)),
            H(K(8, 0, -3.1), p(-100, -3, 55).scale(0.4, 1, 0.4), U(0.4, 0.4, 0.4, 0.5)),
          )),
          Ib(p(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Ib(p(-89, 0.2, 80), [0, 0, 6]),
          X(Q(
            H(K(), p(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)),
            H(K(), p(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4)),
            H(K(20, 1), p(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4)),
          )),
          Y(() => {
            X(z);
          }),
          Ia.map(({ x: h, z: t }) => {
            X(K(6), p(7 * h - 100, -3, 7 * t + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(O => X(K(6), p(7 * h - 100, O, 7 * t + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8)));
          }),
          gb(7, h => {
            X(
              K((23 * h + 1) % 5 + 5, 0, 0.5),
              p(5 * Math.sin(h) - 101 + h, -2.3 - h, 44.9 - 2.8 * h).scaleSelf(5 + h / 2, 1 + h / 6, 5 + h / 3),
              U(0.5 - h / 17, 0.5 - (1 & h) / 9, 0.6, 0.3),
            );
          }),
          X(K(), p(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)),
          X(K(4), p(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)),
          X(K(12, 1), p(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)),
          Hb(p(-86, -7.5, 31)),
          Y(() => {
            [0, 12, 24].map(h =>
              X(K(), p(h - 76.9, h / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.2, 0.5, 0.6, 0.2))
            );
          }),
          Y(() => {
            [6, 18].map(h =>
              X(K(), p(h - 76.9, h / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.1, 0.4, 0.5, 0.2))
            );
          }),
          X(
            Q(
              wb(
                H(K(5), p(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3)),
                H(K(5), v(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),
                H(K(), v(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),
              ),
              H(K(5), v(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),
            ),
            p(-38.9, -11.3, 17),
          ),
          Hb(p(-38.9, -9.6, 10)),
          Y(() => {
            X(
              Q(
                wb(
                  H(K(5), p(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5)),
                  H(K(5), p(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5)),
                  H(K(5), p(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5)),
                ),
                H(K(5), v(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)),
                H(K(5), p(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5)),
              ),
              p(-38.9, -11.3, 17),
            );
            Ib(p(-39.1, -0.6, 17).rotate(11), ...jb(15).map(({ x: h, z: t }) => [3 * h, 3 * t, 1.2]));
          }),
          Ia.map(({ x: h, z: t }) => {
            X(K(14, 1), p(9 * h - 38.9, -7.3, 11 * t + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(O =>
              X(K(17, 1), p(9 * h - 38.9, O - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3))
            );
          }),
          X(
            Q(
              wb(
                H(K(6), p(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3)),
                H(K(), p(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3)),
              ),
              ...gb(6, h =>
                gb(6, t =>
                  H(
                    K(6),
                    p(4.6 * t - 12 + 2 * (1 & h), 0, 4.6 * h - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2),
                    U(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            p(-38.9, -11.3, 17),
          ),
          Ib(p(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          X(K(5), p(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4)),
          Hb(p(-84, -0.5, 85).rotate(0, 45)),
          Y(() => {
            X(x);
            Hb(p(0, -3, -4).rotate(0, 180));
          }),
          Q(
            H(K(), p(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3)),
            H(K(3), p(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(h => H(K(), p(h, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3))),
          ));
      Y(() => {
        gb(2, h => X(D, p(9 * h - 110 + (1 & h), 1.7, -12)));
      });
      Y(() => {
        gb(2, h => X(D, p(9 * (h + 2) - 110 + (1 & h), 1.7, -12)));
      });
      Y(() => {
        gb(3, h => X(D, p(9 * h - 106, 1.7, -12)));
      });
      X(
        Q(
          wb(H(K(), p(26.5, -1.6, 10).scale(20, 2.08, 3)), H(K(), p(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...gb(4, h => H(K(), p(13 + 9 * h + (1 & h), -0.8, 9).scale(1.35, 1.35, 9))),
          ...gb(3, h => H(K(), p(17 + 9 * h, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        p(-123, 0, -12),
        U(0.5, 0.5, 0.6, 0.2),
      );
      Hb(p(-116, -1.4, -18).rotate(0, 180));
      X(K(), p(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2));
      X(K(6), p(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      X(K(), p(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      X(K(8), p(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      X(K(8), p(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      X(K(), p(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      gb(3, h => {
        X(u(16), p(12 * h - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        X(u(16), p(-77, -9, -12 * h - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3));
      });
      X(Q(
        H(K(12), p(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2)),
        H(K(), p(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2)),
        H(K(), p(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2)),
        H(K(12), p(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2)),
      ));
      X(K(), p(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3));
      X(K(9), p(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      X(Q(
        H(K(), p(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1)),
        H(K(9), p(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2)),
      ));
      Hb(p(-98, -4.4, -40).rotate(0, 90));
      Ib(p(-115, 0.2, -12), [0, 0, 3.5]);
      Ib(p(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      X(Q(
        wb(
          H(K(6, 0, 0, 0.6), p(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2)),
          H(K(), p(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2)),
        ),
        H(K(5), p(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2)),
      ));
      gb(4, h =>
        Y(() => {
          X(
            K(6),
            p(-14.6 - 4.8 * h - (2 < h ? 2 : 0), -h / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5),
            U(0.5 - h / 8, h / 12 + 0.5, 0.7, 0.3),
          );
        }));
      Y(() => {
        X(Q(H(K(10), v(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), H(K(10), v(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5))));
        X(K(15, 1), p(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3));
        X(K(10), p(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        X(K(5), p(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        Hb(p(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(h => X(r, fb(90 * h, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2)));
        Ib(p(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      Y(() => {
        X(z);
      });
      [-1, 1].map(h => {
        [7.2, 1.5].map(t => X(K(15, 1), p(-7.5 * h - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4)));
        X(r, p(-5 * h - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * h - 90), U(1, 1, 0.8));
        X(K(12, 1), p(-7.5 * h - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5));
        X(
          Q(
            H(K(), p(-4 * h, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4)),
            H(K(), v(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)),
            H(K(28, 1), p(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5)),
            H(K(5), p(-5.3 * h, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5)),
            H(K(5), p(-5.3 * h, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5)),
          ),
          p(h - 100, 0.7, 97),
        );
      });
      X(Q(
        H(K(), p(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1)),
        H(K(45, 1), p(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1)),
      ));
      Y(() => {
        X(Q(
          H(K(45, 1), v(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),
          H(K(), p(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2)),
        ));
        X(K(8), p(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        X(K(5), p(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Ib(p(0, 3), ...jb(14).map(({ x: h, z: t }) => [5.6 * h, 5.6 * t, 2]));
      });
      Y(() => {
        [-1, 1].map(h =>
          X(r, fb(0, 90).translate(-5 * h, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), U(1, 1, 0.8))
        );
        X(Q(H(K(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)), H(K(), v(9, 5, 2), U(0.3, 0, 0, 0.3))));
        X(H(K(28, 1), v(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(H(K(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(Q(
          H(K(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          H(K(), p(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          H(K(), p(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(H(K(28, 1), v(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(H(K(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(() => {
        X(Q(
          H(K(28, 1), p(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          H(K(), p(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          H(K(), p(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(H(K(28, 1), v(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(H(K(5), p(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      X(K(), p(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      X(K(), p(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      X(K(), p(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      X(K(), p(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      Hb(p(-34, 2.7, 96).rotate(-12, 0));
      X(K(5), p(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6));
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((h, t) =>
        Y(() => {
          X(K(), p(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), h);
          2 === t && X(K(), p(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
          1 === t && X(K(), p(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(h => X(r, p(-8 * h, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), U(1, 1, 0.8)));
      gb(
        3,
        h =>
          X(
            u(24.7 - 0.7 * (1 & h)),
            p(6 * h - 6, 4 - (1 & h), 111 - 0.2 * (1 & h)),
            1 & h ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),
          ),
      );
      X(Q(
        H(K(6, 0, 0, 0.3), p(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2)),
        H(K(5), p(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),
      ));
      Hb(p(0, 1.7, 82).rotate(0, 180));
      X(K(5), p(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4));
      X(K(6), p(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3));
      X(K(), p(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      X(K(7), p(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      X(Q(
        wb(
          H(K(), p(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4)),
          H(K(), p(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4)),
        ),
        H(K(5), p(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4)),
      ));
      Y(() => {
        X(K(3), p(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(h => {
          X(K(6), p(0, 16, h + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4));
          X(K(), p(0, 6.2, h + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4));
        });
      });
      Y(() => {
        X(K(5), v(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        X(K(5), v(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        Hb(p(0, 1.5, -1).rotate(0, 180));
      });
      Ib(p(0, 3, 95), ...jb(9).map(({ x: h, z: t }) => [9 * h, 9 * t, 4]));
      Ib(p(0, 19, 134), [0, 0, 3.5]);
    });
    Y(() => {
      X(lb(20), p(0, 1).scale3d(0.5), U(1, 0.3, 0.4));
      X(lb(30), v(0.65, 0.8, 0.55), U(1, 0.3, 0.4));
      X(K(), p(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      [-1, 1].map(l => {
        X(r, fb(0, 0 < l ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8));
        X(
          H(Q(K(15, 1), H(K(), p(0, 0, 1).scale(2, 2, 0.5))), fb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3)),
          p(0.2 * l, 1.2, 0.4).rotate(0, 20 * l, 20 * l),
        );
        Y(() => {
          X(K(20, 1), p(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(K(6, 1), v(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      X(K(10), p(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      X(K(3), p(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1));
    }, 0);
    Y(() => {
      X(K(6).slice(0, -1), v(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(
        lb(30, 24, (l, u, x) => {
          const z = u / 24, I = l * Math.PI * 2 / 30, D = Math.sin(z ** 0.6 * Math.PI / 2);
          l = z * z * Math.sin(l * Math.PI * 14 / 30) / 4;
          return 23 < u
            ? { x: x.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(I) * D,
              y: Math.cos(z * Math.PI) - z - l,
              z: Math.sin(I) * D + Math.sin(l * Math.PI * 2) / 4,
            };
        }),
        v(0.7, 0.7, 0.7),
        U(1, 1, 1),
      );
      [-1, 1].map(l => X(lb(12), p(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
