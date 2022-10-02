let aa,
  da,
  ea,
  ha,
  ia,
  ja,
  ka,
  la,
  c = 0,
  ma = 0,
  na = 0,
  oa = 0,
  pa = 0,
  qa = 0,
  ra = 0,
  va = 0,
  wa = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 1,
  d = 0.066;
const e = [],
  k = [],
  Fa = [],
  Ga = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ha = { x: 0, y: 0, z: 0 },
  Ia = Math.PI / 180,
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
const Ra = { x: 0, y: 0, z: 0 },
  n = NO_INLINE(a => 0 > a ? -a : a),
  Sa = NO_INLINE((a, b) => a < b ? a : b),
  Ua = NO_INLINE((a, b) => b < a ? a : b),
  Va = (a, b) => n(a) > b ? a : 0,
  p = (a, b = 0, h = 1) => a < b ? b : h < a ? h : a,
  Wa = a => Math.atan2(Math.sin(a * Ia), Math.cos(a * Ia)) / Ia,
  Xa = (a, b, h) => a + (2 * (b = (b - a) % 360) % 360 - b) * p(h) || 0,
  Ya = (a, b, h) => (0 < h ? 1 > h ? a + (b - a) * h : b : a) || 0,
  Za = (a, b) => (a = p(a), Ya(a, 1 - a, b)),
  ab = (
    a,
    b = $a,
    h = 0,
  ) => (h *= 16,
    b[h++] = a.m11,
    b[h++] = a.m12,
    b[h++] = a.m13,
    b[h++] = a.m14,
    b[h++] = a.m21,
    b[h++] = a.m22,
    b[h++] = a.m23,
    b[h++] = a.m24,
    b[h++] = a.m31,
    b[h++] = a.m32,
    b[h++] = a.m33,
    b[h++] = a.m34,
    b[h++] = a.m41,
    b[h++] = a.m42,
    b[h++] = a.m43,
    b[h] = a.m44,
    b),
  db = (
    a = bb,
    b = cb,
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
  t = NO_INLINE((a, b, h) => bb.translate(a, b, h)),
  eb = NO_INLINE((a, b, h) => bb.rotate(a, b, h)),
  I = NO_INLINE((a, b, h) => bb.scale(a, b, h)),
  fb = (a, b) => Array.from(Array(a), (h, l) => b(l)),
  gb = (a, b, h) => (a.D = h, a.A = b, a),
  hb = (a, b, h = a.A) =>
    gb(
      a.map(l => {
        let q, m;
        return { x: l, y: q, z: m } = l,
          { x: l, y: q, z: m } = b.transformPoint({ x: l, y: q, z: m }),
          { x: l, y: q, z: m };
      }),
      h,
      a.D,
    ),
  K = (a, b, h) => a.map(l => hb(l, b, h)),
  ib = (a, b = 0) =>
    fb(a, h => {
      const l = Math.cos(2 * Math.PI * h / a);
      return { x: Math.sin(2 * Math.PI * h / a), y: 0, z: 0.01 > n(l) ? l : 0 > l ? l - b : l + b };
    }),
  jb = (a, b, h) =>
    a.map((l, q, { length: m }) => gb([l, b[m - q - 1], b[m - (q + 1) % m - 1], a[(q + 1) % m]], a.A, h)),
  P = (
    a,
    b,
    h = 0,
    l,
  ) => (a = a ? ib(a, l) : Ga,
    l = hb(a, t(0, 1).scale3d(0 < h ? h : 1)),
    a = hb(a, t(0, -1).scale3d(0 > h ? -h : 1)).reverse(),
    [...jb(a, l, b), l, a]),
  kb = (
    a,
    b = a,
    h = (
      l,
      q,
    ) => (q *= Math.PI / b,
      { x: Math.cos(l *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(l) * Math.sin(q) }),
  ) => {
    const l = [];
    for (let q = 0; a > q; q++) {
      for (let m = 0; b > m; m++) {
        const x = gb([], 0, 1);
        l.push(x);
        x.push(h(q, m, x));
        m && x.push(h((q + 1) % a, m, x));
        b - 1 > m && x.push(h((q + 1) % a, m + 1 % b, x));
        x.push(h(q, m + 1 % b, x));
      }
    }
    return l;
  },
  lb = ({ x: a, y: b, z: h }, l) => a * l.x + b * l.y + h * l.z,
  mb = a => {
    let b, h = 0, l = 0, q = 0, m = a.at(-1);
    for (b of a) {
      h += (m.y - b.y) * (m.z + b.z), l += (m.z - b.z) * (m.x + b.x), q += (m.x - b.x) * (m.y + b.y), m = b;
    }
    return b = Math.hypot(h, l, q), h /= b, l /= b, q /= b, { x: h, y: l, z: q, w: h * m.x + l * m.y + q * m.z };
  },
  nb = (a, b) => {
    var h, l, q, m = b.C;
    for (var x = 0; m.length > x; ++x) {
      if (-0.00008 > (h = lb(a, m[x]) - a.w) ? q = b : 8e-5 < h && (l = b), q && l) {
        l = [];
        q = [];
        m = b.C;
        x = b.B;
        let z = m.at(-1), B = lb(a, z) - a.w;
        for (const E of m) {
          h = lb(a, E) - a.w,
            8e-5 > B && q.push(z),
            -0.00008 < B && l.push(z),
            (8e-5 < B && -0.00008 > h || -0.00008 > B && 8e-5 < h)
            && (B /= h - B,
              z = { x: z.x + (z.x - E.x) * B, y: z.y + (z.y - E.y) * B, z: z.z + (z.z - E.z) * B },
              l.push(z),
              q.push(z)),
            z = E,
            B = h;
        }
        return {
          m: 2 < l.length && { C: gb(l, m.A, m.D), B: x, s: b },
          l: 2 < q.length && { C: gb(q, m.A, m.D), B: x, s: b },
        };
      }
    }
    return { m: l, l: q };
  },
  ob = (a, b, h = mb(b.C)) => {
    let l, q, m;
    return a
      ? ({ m: l, l: q } = nb(a, b), l || q || a.u.push(b), l && (a.m = ob(a.m, l, h)), q && (a.l = ob(a.l, q, h)))
      : ({ x: l, y: q, z: h, w: m } = h, a = { x: l, y: q, z: h, w: m, u: [b], m: 0, l: 0 }),
      a;
  },
  pb = (a, b, h) => {
    const l = [],
      q = (m, x) => {
        let { m: z, l: B } = nb(m, x);
        z || B || (0 < h * lb(m, b) ? z = x : B = x);
        z && (m.m ? q(m.m, z) : l.push(z));
        B && m.l && q(m.l, B);
      };
    for (const m of b.u) {
      q(a, m);
    }
    return l;
  },
  qb = (a, b) => a && (b(a), qb(a.m, b), qb(a.l, b)),
  ub = a => (qb(a, b => {
    const h = b.l;
    b.l = b.m;
    b.m = h;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const l of b.u) {
      l.B = !l.B;
    }
  }),
    a),
  vb = a => a.length ? a.reduce((b, h) => ob(b, { C: h, B: 0, s: 0 }), 0) : a,
  wb = (...a) =>
    a.reduce((b, h) => {
      const l = [];
      if (b = vb(b), h) {
        h = vb(h);
        qb(b, q => q.u = pb(h, q, 1));
        qb(h, q => l.push([q, pb(b, q, -1)]));
        for (let [q, m] of l) {
          for (const x of m) {
            ob(b, x, q);
          }
        }
      }
      return b;
    }),
  R = (a, ...b) => {
    const h = m => {
        let x;
        return m.s && ((x = l.get(m.s)) ? (q.delete(x), m = h(m.s)) : l.set(m.s, m)), m;
      },
      l = new Map(),
      q = new Map();
    return a = ub(wb(ub(vb(a)), ...b)),
      qb(a, m => {
        for (const x of m.u) {
          q.set(h(x), x.B);
        }
      }),
      Array.from(q, ([{ C: m }, x]) => {
        const z = m.map(({ x: B, y: E, z: G }) => ({ x: B, y: E, z: G }));
        return gb(x ? z.reverse() : z, m.A, m.D);
      });
  },
  V = NO_INLINE((a, b, h) => Ya(a, b, 1 - Math.exp(-h * d))),
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
      ][na = Fa.reduce((a, { j: b }) => a + b, 0)] + " / XIII";
  },
  Ab = () => {
    localStorage.DanteSP22 = JSON.stringify([k.map(({ j: a }) => a), Fa.map(({ j: a }) => a), oa, c, xa]);
  },
  Bb = (a, b, h, l) =>
    new DOMMatrix([h, 0, 0, 0, 0, l, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Eb = () => {
    let a, b, h, l, q, m, x, z, B, E, G, Q, C, f, g = !0;
    const y = [],
      A = () => {
        b4.innerHTML = "Music: " + g;
        da || !g ? Cb.disconnect() : Cb.connect(Db.destination);
      },
      F = () => {
        const w = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        ja = Bb(0.3, 181, w, 1.732051);
        ka = [Bb(0.3, 55, w, 1.732051), Bb(55, 181, w, 1.732051)];
        l = z = void 0;
        y.length =
          ea =
          f =
          Q =
          C =
          za =
          Aa =
            0;
      },
      H = (w, r = 0) => {
        if (da !== w) {
          da = w;
          ha = r;
          F();
          zb();
          document.body.className = w ? "l m" : "l";
          try {
            w
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Cb.start());
          } catch {
          }
          A();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => H(!1);
    b2.onclick = () => H(!1, 1);
    b5.onclick = () => H(!0);
    b4.onclick = () => {
      g = !g;
      A();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = w => {
      if (!da && (w.target === hC && (ea = 1), ha)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = w => {
      let r;
      w.repeat
        || (r = {
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
        }[w.code],
          (y[r] = !!w.type[5] && !0) && (0 === r && (ea = 1), 1 === r && H(!0)));
    };
    onmousemove = ({ movementX: w, movementY: r }) => {
      ha && (w || r) && (Qa += 0.1 * w, Pa += 0.1 * r);
    };
    hC.ontouchstart = w => {
      if (!da) {
        for (let { pageX: r, pageY: u, identifier: v } of w.changedTouches) {
          ha && r > hC.clientWidth / 2
            ? void 0 === z && (B = 0, m = r, x = u, z = v, E = Qa, G = Pa)
            : void 0 === l && (q = 0, b = r, h = u, l = v);
        }
        a = ma;
      }
    };
    hC.ontouchmove = w => {
      if (!da) {
        for (let { pageX: O, pageY: J, identifier: T } of w.changedTouches) {
          var r, u, v, D;
          z === T && (Qa = E + (O - m) / 2.3, Pa = G + (J - x) / 2.3, B = 1);
          l === T
            && (T = (b - O) / 20,
              r = n(T),
              u = (h - J) / 20,
              v = n(u),
              (D = 0.5 < Ua(r, v)) && (q = 1),
              Q = (D && 0.2 < r) * p(T, -1),
              C = (D && 0.2 < v) * p(u, -1),
              2 < r && (b = O + 20 * (0 > T ? -1 : 1)),
              2 < v && (h = J + 20 * (0 > u ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = w => {
      let r;
      document.activeElement === document.body && w.preventDefault();
      for (const u of w.changedTouches) {
        u.identifier === z
          ? (z = void 0, B || (r = 1), B = 0)
          : u.identifier === l
          ? (l = void 0, C = Q = 0, q || (r = 1), q = 0)
          : r = 1;
      }
      w.target === hC && r && a && 0.02 < (w = ma - a) && 0.7 > w && (ea = 1);
    };
    ia = () => {
      za = C + (y[4] ? 1 : 0) - (y[5] ? 1 : 0);
      Aa = Q + (y[2] ? 1 : 0) - (y[3] ? 1 : 0);
      var w = navigator.getGamepads()[0];
      if (w) {
        const r = v => u[v]?.pressed || 0 < u[v]?.value ? 1 : 0, u = w.buttons;
        w = w.axes;
        ha && (Pa += d * Va(w[3], 0.3) * 80, Qa += d * Va(w[2], 0.3) * 80);
        za += r(12) - r(13) - Va(w[1], 0.2);
        Aa += r(14) - r(15) - Va(w[0], 0.2);
        r(9) && H(!0);
        (w = r(3) || r(2) || r(1) || r(0)) && !f && (ea = 1);
        f = w;
      }
    };
    document.onvisibilitychange = onblur = onresize = F;
    H(!0);
  },
  W = NO_INLINE((a, b, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * b << 8 | 255 * a),
  X = (a, b = new DOMMatrix(), h) => la.u.push(...K(a, b, h)),
  Y = (a, b = 1) => {
    const h = la;
    b = { o: new DOMMatrix(), H: e.length, G: b, u: [] };
    return e.push(b), a(la = b), la = h, b;
  },
  Fb = a => (a = a.transformPoint(), Math.hypot(Ha.x - a.x, Ha.y - a.y, Ha.z - a.z)),
  Hb = a => {
    const b = la,
      h = k.length,
      l = {
        j: 0,
        g: 0,
        i: 0,
        s: b,
        o: a,
        h() {
          l.g = V(l.g, l.j, 4);
          l.i = V(l.i, l.j, 1);
          db(b.o).multiplySelf(a);
          ea && 3 > Fb(cb) && (0.3 > l.g || 0.7 < l.g)
            && (l.j = l.j ? 0 : 1, h && 1 / 0 > Ea && (Ea = c + 1, h4.innerHTML = "* click *"), oa = h, Ab());
          ab(cb.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1), Gb, h + 13);
          Gb[16 * h + 223] = 1 - l.g;
        },
      };
    k.push(l);
    X(P(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
    X(P(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
    X(P(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), W(0.5, 0.5, 0.4));
  },
  Ib = (a, ...b) => {
    let h = -1, l = 0, q = 0, m = 0, x = 0, z = 0, B = 1, E = 3;
    const G = {
        j: 0,
        h() {
          if (!G.j) {
            let D, O, J, T, ca, S, ba, L = 1, M = 1 / 0;
            for (const N of f) {
              var { x: w, z: r, w: u } = N;
              r = (w = Math.hypot(y - w, A - r)) - u;
              ba ||= w < u;
              0 < r && M > r && (M = r, g = N);
              L = Sa(L, w / u);
            }
            ba
              || ({ x: v, z: D, w: O } = g,
                J = y - v,
                T = A - D,
                ca = Math.hypot(J, T),
                S = Math.atan2(-T, J),
                B && (q = (Math.random() - 0.5) * Math.PI / 2, E = p(E / (1 + Math.random()))),
                S += q,
                h = -Math.cos(S),
                l = Math.sin(S),
                0.1 < ca && (ca = Sa(ca, O) / (ca || 1), y = J * ca + v, A = T * ca + D));
            B = ba;
            E = V(E, 6 * (1 - L) + 3, L + 3);
            F = V(F, y = V(y, y + h, E), E);
            H = V(H, A = V(A, A + l, E), E);
            m = Xa(m, Math.atan2(F - x, H - z) / Ia - 180, 1 - Math.exp(-3 * d));
            if (
              1.6 > Fb(db(Q.o).multiplySelf(a).translateSelf(x = F, 0, z = H).rotateSelf(0, m, 7 * Math.sin(1.7 * c)))
            ) {
              G.j = 1;
              var v = [
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
              ][na] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              1 / 0 > Ea && (Ea = c + (na && 12 > na ? 5 : 7), h4.innerHTML = v);
              zb();
              Ab();
            }
          }
          G.j
            && db(e[2].o).translateSelf(
              C % 4 * 1.2 - 1.7 + Math.sin(c + C) / 7,
              -2,
              1.7 * (C / 4 | 0) - 5.5 + n(C % 4 - 2) + Math.cos(c / 1.5 + C) / 6,
            );
          ab(cb, Gb, C);
        },
      },
      Q = la,
      C = Fa.length,
      f = b.map(([w, r, u]) => ({ x: w, z: r, w: u }));
    let g = f[0], { x: y, z: A } = g, F = y, H = A;
    Fa.push(G);
  },
  Kb = () => {
    let a, b, h, l, q, m, x, z, B, E, G, Q, C, f = 1, g = 2, y = 15;
    const A = () => (g ? k[oa].s : e[b && 1 === e[b].G && b || 0]).o,
      F = u => {
        const { x: v, y: D, z: O } = 1 < g
          ? db(k[oa].s.o).multiplySelf(k[oa].o).transformPoint({ x: 0, y: oa || 0.9 < wa ? 15 : 1, z: -2.4 })
          : A().transformPoint(Ra);
        u && (x = (v - Ha.x) / d, z = (O - Ha.z) / d);
        Ha.x = v;
        Ha.y = D;
        Ha.z = O;
      },
      H = (u, v, D) => {
        db(A()).invertSelf();
        cb.m41 = cb.m42 = cb.m43 = 0;
        u = cb.transformPoint({ x: u, z: D, w: 0 });
        Ra.x += u.x;
        Ra.y += v;
        Ra.z += u.z;
        F();
      },
      w = () => {
        var u = 0, v = 0, D = 0;
        let O = 0;
        var J = -1;
        let T = 0, ca = 0;
        for (var S = 0; 36 > S; ++S) {
          var ba = 512 * S;
          for (var L = 96; 416 > L; L += 4) {
            for (var M = 0; 2 > M; ++M) {
              var N = Jb[ba + L + M], sa = Jb[ba + L + M + 2];
              N > O && (O = N);
              N + sa && (0 > J || J === S) && (J = S, sa === a ? ++u : v && v !== sa || (v = sa, ++D));
            }
          }
        }
        a = 0 > J ? 0 : D > 2 * u ? v : a;
        for (u = 36; 128 > u; u += 1) {
          S =
            J =
            D =
            v =
              0;
          ba = 512 * u;
          for (L = 0; 128 > L; L += 1) {
            for (M = ba + 4 * L, N = 0; 2 > N; ++N) {
              sa = Jb[M + N];
              const Ta = Jb[M + N + 2];
              (N ? 64 < L : 64 > L) ? v = Ua(v, sa) : D = Ua(D, sa);
              N ? S = Ua(S, Ta) : J = Ua(J, Ta);
            }
          }
          n(D - v) > n(T) && (T = D - v);
          n(S - J) > n(ca) && (ca = S - J);
        }
        H(T / 255, O / 255, ca / 255);
      },
      r = (u, v, D, O) => Ya(u, v, f || (p(n(v - u) ** 0.5 - D) + 1 / 7) * (1 - Math.exp(-(1.5 * O) * d)));
    e[37].h = u => {
      F(a);
      Z.r9r(0, 0, 128, 128, 6408, 5121, Jb);
      NO_INLINE(w)();
      !g && a === b || (b = a, v = db(A()).invertSelf().transformPoint(Ha), Ra.x = v.x, Ra.y = v.y, Ra.z = v.z);
      g = g && (a ? 0 : 1);
      var { x: v, y: D, z: O } = Ha;
      D =
        (D < (-20 > v || 109 > O ? -25 : -9) && (g = 2),
          1 === a && (k[9].j = -15 > v && 0 > O ? 1 : 0),
          E = Ya(V(E, D, 2), D, g || 8 * n(E - D)),
          Q = r(Q, E, 2, 1),
          G = r(G, v, 0.5, 1),
          C = r(C, O, 0.5, 1),
          m = V(m, ya * (27 < a && 32 > a), 2),
          ha
            ? (D = g + (1 - Math.exp(-18 * d)),
              Ba = Ya(Ba, v, D),
              Ca = Ya(Ca, E + 1.5, D),
              Da = Ya(Da, O, D),
              Qa = Wa(Qa))
            : (Da = r(Da, C + -18 + 5 * m, 1, 2 + m),
              Ca = r(Ca, Ua(Q + p((-60 - O) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2),
              Ba = r(Ba, G, 1, 2 + m),
              D = Sa(-6, -n(C - Da)),
              J = G - Ba,
              Qa = Xa(Qa, 90 - Wa(Math.atan2(D, J) / Ia), f + (1 - Math.exp(-10 * d))),
              Pa = Xa(Pa, 90 - Math.atan2(Math.hypot(D, J), Ca - Q) / Ia, f + (1 - Math.exp(-10 * d)))),
          Pa = p(Pa, -87, 87),
          f = 0,
          u.translateSelf(v, E, O).rotateSelf(0, l),
          p(za, -1));
      var J = p(Aa, -1);
      u = Va(Math.hypot(D, J) ** 0.5, 0.1);
      v = Math.atan2(D, J);
      D = u * n(D) * Math.sin(v);
      J = u * n(J) * Math.cos(v);
      u && (h = 90 - v / Ia);
      q = V(q, u, 10);
      l = Xa(l, h, 1 - Math.exp(-8 * d));
      x = a || g ? 0 : V(x, 0, 3);
      z = a || g ? 0 : V(z, 0, 3);
      B = g ? 0 : V(B, a ? 7 * p(2 * u) : 0, a ? 9 : 1);
      v = ha ? (180 + Qa) * Ia : 0;
      y = a ? 5 : V(y, g ? 10 : 19, 2.2);
      H(d * (x + B * (J * Math.cos(v) - D * Math.sin(v))), -y * d, d * (z + B * (J * Math.sin(v) + D * Math.cos(v))));
    };
    [39, 38].map((u, v) =>
      e[u].h = D =>
        db(e[37].o, D).translateSelf(0, q * p(0.45 * Math.sin(9.1 * c - Math.PI * v - Math.PI / 2))).rotateSelf(
          q * Math.sin(9.1 * c - Math.PI * v) * 0.25 / Ia,
          0,
        )
    );
  },
  Lb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Rb = (a, b) => {
    const h = {}, l = Z.c1h();
    return Z.abz(l, a), Z.abz(l, Lb(b, 35632)), Z.l8l(l), q => q ? h[q] || (h[q] = Z.gan(l, q)) : Z.u7y(l);
  },
  Tb = (a, b, h) => {
    let l;
    da
      ? (l = eb(0, 40 * Math.sin(ma) - 70),
        ab(l, Sb, 37),
        ab(l, Sb, 38),
        ab(l, Sb, 39),
        Z.uae(a, !1, Sb),
        Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v))
      : (Z.uae(a, !1, Sb),
        Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6),
        Z.uae(a, !1, Gb),
        Z.das(4, e[h].F - e[h].v, 5123, 2 * e[h].v, Fa.length),
        Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, k.length));
  },
  Ub = a => {
    h4.innerHTML += ".";
    setTimeout(a);
  },
  Vb = a => Math.sin(a * Math.PI * 2),
  Wb = a => 0.5 > a % 1 ? 1 : -1,
  Xb = a => a % 1 * 2 - 1,
  Yb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a,
  ec = a => {
    let b = 0;
    const h = () => {
        let x = 0;
        const z = L => {
            let M, N, sa, Ta = 0, rb = 0;
            const Mb = [],
              Ja = new Int32Array(768 * L),
              Zb = 2 ** (r - 9) / L,
              $b = Math.PI * 2 ** (J - 8) / L,
              xb = ca * L & -2;
            for (let sb = 0; 11 >= sb; ++sb) {
              for (
                let tb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb];
                32 > tb;
                ++tb
              ) {
                const Ob = (32 * sb + tb) * L;
                for (var Ka = 0; 4 > Ka; ++Ka) {
                  if (M = 0, Nb && (M = B[Nb - 1].charCodeAt(tb + 32 * Ka) - 40, M += 0 < M ? 106 : 0), M) {
                    var fa;
                    if (!(fa = Mb[M])) {
                      fa = M;
                      let U = void 0, ta = void 0;
                      var Pb = M;
                      let ac = 0, bc = 0;
                      const cc = 2 > b ? Xb : Vb, dc = 2 > b ? 1 > b ? Wb : Yb : Vb, Qb = new Int32Array(A + F + ba);
                      for (let La = 0, yb = 0; A + F + ba > La; ++La, ++yb) {
                        let Ma = 1;
                        A > La
                          ? Ma = La / A
                          : A + F > La || (Ma = (1 - (Ma = (La - A - F) / ba)) * 3 ** (-w / 16 * Ma));
                        0 > yb
                          || (yb -= 4 * L,
                            ta = 0.00396 * 2 ** ((Pb + G - 256) / 12),
                            U = 0.00396 * 2 ** ((Pb + f - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Qb[La] = 80
                            * (cc(ac += ta * Ma ** (Q / 32)) * E + dc(bc += U * Ma ** (g / 32)) * C
                              + (y ? (2 * Math.random() - 1) * y : 0))
                            * Ma | 0;
                      }
                      fa = Mb[fa] = Qb;
                    }
                    for (let U = 0, ta = 2 * Ob; fa.length > U; ++U, ta += 2) {
                      Ja[ta] += fa[U];
                    }
                  }
                }
                for (let U, ta = 0; L > ta; ++ta) {
                  Ka = 0;
                  fa = 2 * (Ob + ta);
                  var ua = (((U = Ja[fa]) || sa)
                    && (N = 0.00308 * u,
                      1 !== b && 4 !== b || (N *= Math.sin(Zb * fa * Math.PI * 2) * S / 512 + 0.5),
                      N = 1.5 * Math.sin(N),
                      Ta += N * rb,
                      ua = (1 - v / 255) * (U - rb) - Ta,
                      rb += N * ua,
                      U = 4 === b ? rb : 3 === b ? ua : Ta,
                      b || (U = 1 > (U *= 22e-5) ? -1 < U ? Math.sin(U / 4 * Math.PI * 2) : -1 : 1, U /= 22e-5),
                      U *= D / 32,
                      sa = 1e-5 < U * U,
                      ua = Math.sin($b * fa) * O / 512 + 0.5,
                      Ka = U * (1 - ua),
                      U *= ua),
                    fa < xb || (Ka += Ja[1 + fa - xb] * T / 255, U += Ja[fa - xb] * T / 255),
                    x + fa >> 1);
                  q[ua] += (Ja[fa] = Ka) / 65536;
                  m[ua] += (Ja[++fa] = U) / 65536;
                }
              }
            }
            x += 768 * L;
          },
          B = Na[b],
          [E, G, Q, C, f, g, y, A, F, H, w, r, u, v, D, O, J, T, ca, S] = Oa[b],
          ba = 4 * H ** 2;
        z(5513);
        z(4562);
        z(3891);
        Ub(5 > ++b ? h : a);
      },
      l = Db.createBuffer(2, 5362944, 44100),
      q = l.getChannelData(0),
      m = l.getChannelData(1);
    Cb.buffer = l;
    Cb.loop = !0;
    Ub(h);
  },
  Db = new AudioContext(),
  bb = new DOMMatrix(),
  cb = new DOMMatrix(),
  $a = new Float32Array(16),
  Sb = new Float32Array(624),
  Gb = new Float32Array(624),
  Jb = new Uint8Array(65536),
  fc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Cb = Db.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, h, l) => (b * l + h.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Ub(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const q = [new Float32Array(16), new Float32Array(16)],
          m = H => {
            Z.f1s();
            requestAnimationFrame(m);
            var w = (H - (aa || H)) / 1e3;
            if (ma += w, c += d = da ? 0 : Sa(0.066, w), aa = H, 0 < d) {
              ia();
              ya = Za(k[12].g, k[13].g);
              ra = Ya(V(ra, 0, 1), Wa(ra + 60 * d), k[5].g - k[6].i);
              pa = Ya(V(pa, 0, 5), Wa(pa + 56 * d), ya);
              qa = Ya(V(qa, 0, 4), Wa(qa + 48 * d), ya);
              xa = V(xa, k[9].i, 0.2 + 0.3 * n(2 * k[9].i - 1));
              wa = V(wa, va ? V(wa, -9, 1.5) : p(c / 3), 1);
              Ea && c > Ea && (Ea = 0, h4.innerHTML = "");
              k[0].j && 0.8 < k[0].g && (13 > na
                ? (1 / 0 > Ea && (Ea = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), k[0].j = 0)
                : va
                  || (1 / 0 > Ea
                    && (Ea = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
                    va = 1));
              for (const u of e) {
                u.G && (u.h && u.h(db(bb, u.o)), ab(u.o, Sb, u.H - 1));
              }
              for (const u of k) {
                u.h();
              }
              for (const u of Fa) {
                u.h();
              }
              Q();
              Z.b6o(36160, F);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: w, y: H, z: r } = Ha;
              Z.uae(Q("b"), !1, ab(db().rotateSelf(0, 180).invertSelf().translateSelf(-w, -H, 0.3 - r)));
              Tb(Q("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !1, !0);
              Z.uae(Q("b"), !1, ab(db().translateSelf(-w, -H, -r - 0.3)));
              Tb(Q("c"), 0, 41);
              Z.f1s();
            }
            ea = 0;
            db(bb, x);
            da
              ? x.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : x.rotateSelf(-Pa, -Qa).invertSelf().translateSelf(-Ba, -Ca, -Da);
            E();
            Z.b6o(36160, y);
            Z.v5y(0, 0, 2048, 2048);
            g[0](54.7 * 1.1);
            g[1](126 * 1.1);
            C();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(C("a"), !1, ab(ja));
            Z.uae(C("b"), !1, ab(x));
            Z.uae(C("i"), !1, q[0]);
            Z.uae(C("j"), !1, q[1]);
            Z.ubu(C("k"), Ba, Ca, Da);
            Tb(C("c"), !ha, 42);
            G();
            Z.ubu(G("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ma);
            Z.ubu(G("k"), Ba, Ca, Da);
            Z.uae(G("b"), !1, ab(db(x).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, F);
            Z.f1s();
          },
          x = new DOMMatrix(),
          z = new DOMMatrix(),
          B = h;
        var l = Lb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const E = Rb(
            Lb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          G = Rb(
            Lb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          Q = Rb(
            l,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz+vec3(0,1.49,b[0][0]*.3),1);if(gl_FragCoord.y>36.){float r=1.-sin(gl_FragCoord.x*.02454369),e=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?e*(1.-abs(a.x)):0.)*r,vec2(b[0][0]*o.z>0.?e*(1.-r):0.));return;}float r=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(r),vec2(r>0.?m.w/255.:0.));}",
          ),
          C = Rb(
            l,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          f = fb(8, () => ({})),
          g = fb(2, H => {
            const w = Z.c25();
            return Z.a4v(33984 + H),
              Z.b9j(3553, w),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              r => {
                let u = 0, v = 0, D = 0, O = 1 / 0, J = -1 / 0, T = 1 / 0, ca = -1 / 0, S = 1 / 0, ba = -1 / 0;
                Z.fas(36160, 36096, 3553, w, 0);
                Z.c4s(256);
                db().scale3dSelf(r).multiplySelf(db(ka[H], z).multiplySelf(x).invertSelf());
                for (let L = 0; 8 > L; ++L) {
                  const M = f[L],
                    N = (M.x = 4 & L ? 1 : -1, M.y = 2 & L ? 1 : -1, M.z = 1 & L ? 1 : -1, cb.transformPoint(M));
                  u -= M.x = (0 | N.x) / r / N.w;
                  v -= M.y = (0 | N.y) / r / N.w;
                  D -= M.z = (0 | N.z) / r / N.w;
                }
                db().rotateSelf(298, 139).translateSelf(u / 8, v / 8, D / 8);
                for (r = 0; 8 > r; ++r) {
                  const { x: L, y: M, z: N } = cb.transformPoint(f[r]);
                  O = Sa(O, L);
                  J = Ua(J, L);
                  T = Sa(T, M);
                  ca = Ua(ca, M);
                  S = Sa(S, N);
                  ba = Ua(ba, N);
                }
                r = 10 + H;
                S *= 0 > S ? r : 1 / r;
                ba *= 0 < ba ? r : 1 / r;
                Z.uae(
                  E("b"),
                  !1,
                  ab(
                    db(bb, z).scaleSelf(2 / (J - O), 2 / (ca - T), 2 / (S - ba)).translateSelf(
                      (J + O) / -2,
                      (ca + T) / -2,
                      (S + ba) / 2,
                    ).multiplySelf(cb),
                    q[H],
                  ),
                );
                Tb(E("c"), !ha, 42);
              };
          }),
          y = Z.c5w();
        l = Z.c25();
        const A = Z.c3z(), F = Z.c5w();
        Q();
        Z.uae(Q("a"), !1, ab(Bb(1e-4, 2, 1.4, 0.4)));
        C();
        Z.ubh(C("q"), 2);
        Z.ubh(C("h"), 1);
        Z.ubh(C("g"), 0);
        G();
        Z.ubh(G("q"), 2);
        Z.b6o(36160, y);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, F);
        Z.bb1(36161, A);
        Z.r4v(36161, 33190, 128, 128);
        Z.f8w(36160, 36096, 36161, A);
        Z.a4v(33986);
        Z.b9j(3553, l);
        Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
        Z.fas(36160, 36064, 3553, l, 0);
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
        NO_INLINE(Eb)();
        NO_INLINE(Kb)();
        requestAnimationFrame(m);
      }
    },
    h = new Image();
  h.onload = h.onerror = b;
  h.src = fc;
  NO_INLINE(ec)(() => {
    Ub(() => {
      let m, x = 0;
      const z = [],
        B = [],
        E = [],
        G = [],
        Q = A => {
          let { x: F, y: H, z: w } = m[A], r = (y[0] = F, y[1] = H, y[2] = w, A = "" + (m.D ? g : C), f.get(A));
          return void 0 !== r
            ? (F = 3 * r, G[F] = (G[F++] + C[5]) / 2, G[F] = (G[F++] + C[6]) / 2, G[F] = (G[F] + C[7]) / 2)
            : (f.set(A, r = f.size), B.push(F, H, w, y[3]), E.push(C[4]), G.push(C[5], C[6], C[7])),
            r;
        },
        C = new Int32Array(8),
        f = new Map(),
        g = new Int32Array(C.buffer, 0, 5),
        y = new Float32Array(C.buffer);
      for (const A of e) {
        for (m of (y[3] = 40 === A.H ? -14 : A.G && A.H, A.u)) {
          const { x: F, y: H, z: w } = mb(m);
          C[4] = 0 | m.A;
          C[5] = 32767 * F;
          C[6] = 32767 * H;
          C[7] = 32767 * w;
          for (let r = 2, u = Q(0), v = Q(1); m.length > r; ++r) {
            z.push(u, v, v = Q(r));
          }
        }
        A.u = null;
        A.v = x;
        A.F = x = z.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(B), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(G), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(E), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(z), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ub(b);
      try {
        const [A, F, H, w, r] = JSON.parse(localStorage.DanteSP22);
        k.map((u, v) => u.g = u.i = u.j = v ? 0 | A[v] : 0);
        Fa.map((u, v) => u.j = 0 | F[v]);
        oa = H;
        xa = r;
        c = w;
        d = 0;
      } catch {
      }
      wa = p(oa);
    });
    const l = fb(11, m => t(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10)),
      q = fb(10, m => jb(hb(ib(18), l[m]).reverse(), hb(ib(18), l[m + 1]), 1)).flat();
    Y(() => X([Ga.slice(1)], t(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const m = (f, g, y) =>
          Y(A => {
            A.h = F => F.translateSelf(B() * Math.sin(3 * f + c * f) * g);
            Ga.map(({ x: F, z: H }) => {
              X(P(11, 1), t(4 * F, 4, y + 4 * H).scale(0.8, 3, 0.8), W(0.5, 0.3, 0.7, 0.6));
              X(P(), t(4 * F, 7, y + 4 * H).scale(1, 0.3), W(0.5, 0.5, 0.5, 0.3));
            });
            X(R(
              K(P(), t(0, 0, y).scale(5, 1, 5), W(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(F => K(P(), t(5 * F, 0.2, y).rotate(-30 * F).scale(4, 1, 2), W(0.8, 0.8, 0.8, 0.3))),
            ));
            X(P(), t(0, -3, y).scale(8, 2, 8), W(0.4, 0.4, 0.4, 0.3));
          }),
        x = (f, g, y, A) =>
          f.translateSelf(g + Math.sin(c + 2) / 5, y + Math.sin(0.8 * c) / 3, A).rotateSelf(
            2 * Math.sin(c),
            Math.sin(0.7 * c),
            Math.sin(0.9 * c),
          ),
        z = f =>
          R(
            K(P(), t(0, -f / 2).scale(6, f - 1, 2.2)),
            K(P(), t(0, -f / 2 - 6).scale(4, f - 3, 4)),
            K(P(32, 1), t(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        B = () => Sa(k[2].i, 1 - k[4].i),
        E = R(
          K(P(30, 1, 1.15, 1), t(0, -3).scale(3.5, 1, 3.5), W(0.7, 0.4, 0.25, 0.7)),
          K(P(30, 1, 1.3, 1), t(0, -2.5).scale(2.6, 1, 3), W(0.7, 0.4, 0.25, 0.2)),
          K(P(), t(4, -1.2).scale3d(2), W(0.7, 0.4, 0.25, 0.3)),
        ),
        G = fb(7, f => K(P(6, 1), t(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), W(0.3, 0.3, 0.38))).flat(),
        Q = (Y(f => {
          f.h = g => x(g, -12, 4.2, 40 * wa - 66);
          X(E);
          Hb(t(0, -3, 4));
        }),
          Hb(t(-5.4, 1.5, -19).rotate(0, -90)),
          Ib(t(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Ib(t(0, 2.8), [5, 10, 3], [-5, 10, 3], ...ib(18).map(({ x: f, z: g }) => [7 * f, 10 * g, 4.5 - 2 * n(f)])),
          X(P(), t(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), W(0.8, 0.8, 0.8, 0.2)),
          Ga.map(({ x: f, z: g }) => X(P(6), t(3 * f, 3, 15 * g).scale(0.7, 4, 0.7), W(0.6, 0.3, 0.3, 0.4))),
          X(P(), t(0, 0, -23).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)),
          X(P(), t(0, 0, 22).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map((f, g) => {
            X(P(), t(0, 6.3, f).scale(4, 0.3, 1), W(0.3, 0.3, 0.3, 0.4));
            X(P(), t(0, 1, f).scale(3, 0.2, 0.35), W(0.5, 0.5, 0.5, 0.3));
            Y(y => {
              y.h = A => A.translateSelf(0, 0, f).scaleSelf(1, p(1.22 - k[g + 1].g), 1);
              X(G);
            });
          }),
          fb(5, f =>
            fb(2, g =>
              X(
                q,
                t(18.5 * (g - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2),
                W(1, 1, 0.8, 0.2),
              ))),
          X(P(), t(3, 1.5, -20).scale(0.5, 2, 5), W(0.7, 0.7, 0.7, 0.2)),
          X(P(), t(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), W(0.75, 0.75, 0.75, 0.2)),
          X(P(5), t(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), W(0.6, 0.3, 0.3, 0.4)),
          X(P(), eb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), W(0.8, 0.2, 0.2, 0.5)),
          X(R(
            wb(
              K(P(6, 0, 0, 0.3), t(8, -3, -4).scale(13, 1, 13), W(0.7, 0.7, 0.7, 0.2)),
              K(P(6), t(0, -8).scale(9, 8, 8), W(0.4, 0.2, 0.5, 0.5)),
              K(P(6, 0, 0, 0.3), t(0, -0.92).scale(13, 2, 13), W(0.8, 0.8, 0.8, 0.2)),
            ),
            K(P(5), I(5, 30, 5), W(0.4, 0.2, 0.6, 0.5)),
            K(P(5, 0, 1.5), t(0, 1).scale(4.5, 0.3, 4.5), W(0.7, 0.5, 0.9, 0.2)),
            K(P(), eb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), W(0.5, 0.5, 0.5, 0.5)),
            K(P(6), t(15, -1.5, 4).scale(3.5, 1, 3.5), W(0.5, 0.5, 0.5, 0.5)),
          )),
          Y(f => {
            f.h = g =>
              g.translateSelf(
                0,
                0.01 < k[3].g ? (5 * Math.cos(1.5 * c) + 2) * k[3].i * (1 - k[2].g) + -15 * (1 - k[3].g) : -500,
                0,
              );
            X(P(5), t(0, -0.2).scale(5, 1, 5), W(0.6, 0.65, 0.7, 0.3));
            Hb(t(0, 1.2));
          }),
          Hb(t(15, -2, 4)),
          m(0.7, 12, 35),
          m(1, 8.2, 55),
          Y(f => {
            f.h = g => g.translateSelf(B() * Math.sin(c / 1.5 + 2) * 12);
            X(
              R(
                wb(
                  K(P(), I(1.5, 1, 5), W(0.9, 0.9, 0.9, 0.2)),
                  K(P(6), I(4, 1, 5), W(0.9, 0.9, 0.9, 0.2)),
                  K(P(), t(0, -2).scale(2, 3.2, 1.9), W(0.3, 0.8, 0.5, 0.5)),
                  K(P(16, 1, 0, 4), I(1, 1, 1.5).rotate(0, 90), W(0.9, 0.9, 0.9, 0.2)),
                ),
                K(P(), I(1.3, 10, 1.3), W(0.2, 0.7, 0.4, 0.6)),
              ),
              t(0, 0, 45),
            );
            Ib(t(0, 2.8, 45), [0, 0, 4.5]);
          }),
          X(P(), t(-18.65, -3, 55).scale(2.45, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)),
          Y(f => {
            f.h = g => g.translateSelf(9.8 * (1 - B()));
            X(P(3), t(-23, -1.7, 55.8).scale(5, 0.7, 8.3), W(0.3, 0.6, 0.6, 0.2));
            X(P(8), t(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), W(0.8, 0.8, 0.8, 0.2));
            X(P(), t(-23, -3, 55).scale(5.2, 1.7, 3), W(0.5, 0.5, 0.5, 0.3));
            X(P(), t(-23, -2.2, 62).scale(3, 1, 4), W(0.5, 0.5, 0.5, 0.3));
            Hb(t(-23, -0.5, 66.5));
          }),
          Y(f => {
            f.h = g => g.translateSelf(0, p(1 - 5 * B()) * Za(k[4].g, k[5].g) * Math.sin(1.35 * c) * 4);
            X(P(), t(-22.55, -3, 55).scale(1.45, 1.4, 2.7), W(0.7, 0.7, 0.7, 0.2));
            X(R(K(P(), I(3, 1.4, 2.7)), K(P(), I(1.2, 8, 1.2))), t(-33, -3, 55), W(0.7, 0.7, 0.7, 0.2));
          }),
          Y(f => {
            f.h = g => g.translateSelf(0, 0, p(1 - 5 * B()) * Za(k[4].g, k[5].g) * Math.sin(0.9 * c) * 8);
            X(R(
              K(P(), t(-27, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)),
              K(P(), t(-27, -3, 55).scale(1, 3), W(0.9, 0.9, 0.9, 0.2)),
            ));
            X(P(), t(-39, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2));
          }),
          Y(f => {
            f.h = g => g.translateSelf(0, -6.5 * k[4].i);
            X(P(6), t(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), W(0.7, 0.7, 0.7, 0.4));
          }),
          Hb(t(-55, -1.1, 46).rotate(0, 90)),
          X(P(6), t(-61.3, -2.4, 49).scale(3, 1, 5), W(0.4, 0.6, 0.6, 0.3)),
          X(P(7), t(-57, -2.6, 46).scale(4, 1, 4), W(0.8, 0.8, 0.8, 0.3)),
          [
            ...K(P(), t(0, -3).scale(11, 1.4, 3), W(0.9, 0.9, 0.9, 0.2)),
            ...R(
              K(P(6), eb(90).scale(6, 8, 6), W(0.3, 0.6, 0.6, 0.3)),
              K(P(4, 0, 0.01), t(0, 6).scale(12, 2, 0.75).rotate(0, 45), W(0.3, 0.6, 0.6, 0.3)),
              K(P(6), eb(90).scale(5, 12, 5), W(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => K(P(5), t(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), W(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        C = (X(Q, t(-53, 0, 55)),
          Y(f => {
            f.h = g => g.translateSelf(-75, (1 - k[5].i) * (1 - k[6].g) * 3, 55).rotateSelf(180 * (1 - k[5].i) + ra, 0);
            X(Q);
          }, 2),
          X(P(), t(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), W(0.7, 0.7, 0.7, 0.2)),
          X(P(3, 0, -0.5), t(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), W(0.8, 0.8, 0.8, 0.2)),
          X(R(
            wb(
              K(P(), t(-100, -2.4, 55).scale(8, 0.9, 8), W(0.8, 0.8, 0.8, 0.2)),
              K(P(), t(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), W(0.8, 0.8, 0.8, 0.2)),
              K(P(), t(-100, -2.6, 70).scale(3, 1.1, 7), W(0.8, 0.8, 0.8, 0.2)),
              K(P(), t(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), W(0.8, 0.8, 0.8, 0.2)),
              K(P(6), t(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), W(0.6, 0.6, 0.6, 0.3)),
              K(P(), t(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), W(0.8, 0.8, 0.8, 0.2)),
              K(P(), t(-100, 0.42, 92).scale(3, 1.1, 4.1), W(0.8, 0.8, 0.8, 0.2)),
            ),
            K(P(8), t(-100, -1, 55).scale(7, 0.9, 7), W(0.3, 0.3, 0.3, 0.4)),
            K(P(8), t(-100, -2, 55).scale(4, 0.3, 4), W(0.4, 0.4, 0.4, 0.5)),
            K(P(8, 0, -3.1), t(-100, -3, 55).scale(0.4, 1, 0.4), W(0.4, 0.4, 0.4, 0.5)),
          )),
          Ib(t(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Ib(t(-89, 0.2, 80), [0, 0, 6]),
          X(R(
            K(P(), t(-100, 1, 63).scale(7.5, 4), W(0.5, 0.5, 0.5, 0.4)),
            K(P(), t(-100, 0, 70).scale(2, 2, 10), W(0.5, 0.5, 0.5, 0.4)),
            K(P(20, 1), t(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), W(0.5, 0.5, 0.5, 0.4)),
          )),
          Y(f => {
            f.h = g => g.translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, p(1.1 - k[6].g), 1);
            X(G);
          }),
          Ga.map(({ x: f, z: g }) => {
            X(P(6), t(7 * f - 100, -3, 7 * g + 55).scale(1, 8.1), W(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(y => X(P(6), t(7 * f - 100, y, 7 * g + 55).scale(1.3, 0.5, 1.3), W(0.4, 0.2, 0.2, 0.8)));
          }),
          fb(7, f => {
            X(
              P((23 * f + 1) % 5 + 5, 0, 0.5),
              t(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              W(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          X(P(), t(-87, -9.5, 24).scale(7, 1, 3), W(0.4, 0.5, 0.6, 0.4)),
          X(P(4), t(-86, -9.2, 27).scale(5, 1, 5), W(0.5, 0.6, 0.7, 0.3)),
          X(P(12, 1), t(-86, -9, 31).scale(1.5, 1, 1.5), W(0.3, 0.3, 0.4, 0.1)),
          Hb(t(-86, -7.5, 31)),
          Y(f => {
            f.h = g => g.translateSelf(0, 3.5 * (1 - Ua(k[6].g, k[7].g)) + Za(k[7].i, k[6].i) * Math.sin(c) * 5);
            [0, 12, 24].map(g =>
              X(P(), t(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -3).skewX(-3).scale(2.8, 1.4, 3), W(0.2, 0.5, 0.6, 0.2))
            );
          }),
          Y(f => {
            f.h = g =>
              g.translateSelf(
                0,
                Za(k[7].i, k[6].i) * Math.sin(c + 3) * 6,
                6 * Math.sin(0.6 * c + 1) * Za(k[7].i, k[6].i),
              );
            [6, 18].map(g =>
              X(P(), t(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -3).skewX(-3).scale(2.8, 1.4, 3), W(0.1, 0.4, 0.5, 0.2))
            );
          }),
          X(
            R(
              wb(
                K(P(5), t(0, 0, -7).scale(2, 1.2, 2), W(0.2, 0.4, 0.7, 0.3)),
                K(P(5), I(9, 1.2, 9), W(0, 0.2, 0.3, 0.5)),
                K(P(), I(11, 1, 13), W(0.3, 0.4, 0.6, 0.3)),
              ),
              K(P(5), I(5.4, 5, 5.4), W(0, 0.2, 0.3, 0.5)),
            ),
            t(-38.9, -11.3, 17),
          ),
          Hb(t(-38.9, -9.6, 10)),
          Y(f => {
            f.h = g => g.translateSelf(0, -7.3 * k[7].i);
            X(
              R(
                wb(
                  K(P(5), t(0, 2).scale(5, 7, 5).skewY(8), W(0.2, 0.4, 0.5, 0.5)),
                  K(P(5), t(0, 6).scale(1.1, 7, 1.1).skewY(-8), W(0.25, 0.35, 0.5, 0.5)),
                  K(P(5), t(0, 9).scale(0.6, 7, 0.6).skewY(8), W(0.35, 0.3, 0.5, 0.5)),
                ),
                K(P(5), I(4, 8, 4), W(0.2, 0.4, 0.5, 0.5)),
                K(P(5), t(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), W(0.2, 0.4, 0.5, 0.5)),
              ),
              t(-38.9, -11.3, 17),
            );
            Ib(t(-39.1, -0.6, 17).rotate(11), ...ib(15).map(({ x: g, z: y }) => [3 * g, 3 * y, 1.2]));
          }),
          Ga.map(({ x: f, z: g }) => {
            X(P(14, 1), t(9 * f - 38.9, -7.3, 11 * g + 17).scale(1, 4), W(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(y =>
              X(P(17, 1), t(9 * f - 38.9, y - 11.3, 11 * g + 17).scale(1.5, 0.5, 1.5), W(0.6, 0.6, 0.6, 0.3))
            );
          }),
          X(
            R(
              wb(
                K(P(6), t(0, 0, -36).scale(15, 1.2, 15), W(0.7, 0.7, 0.7, 0.3)),
                K(P(), t(0, 0, -18).scale(4, 1.2, 6), W(0.45, 0.4, 0.6, 0.3)),
              ),
              ...fb(6, f =>
                fb(6, g =>
                  K(
                    P(6),
                    t(4.6 * g - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2),
                    W(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            t(-38.9, -11.3, 17),
          ),
          Ib(t(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          X(P(5), t(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), W(0.8, 0.1, 0.25, 0.4)),
          Hb(t(-84, -0.5, 85).rotate(0, 45)),
          Y(f => {
            f.h = g => x(g, -123, 1.4, 55 + -65 * xa);
            X(E);
            Hb(t(0, -3, -4).rotate(0, 180));
          }),
          R(
            K(P(), t(0, -0.5, 1).scale(1.15, 1.2, 6.5), W(0.25, 0.25, 0.35, 0.3)),
            K(P(3), t(0, 0, -5.5).scale(3, 2), W(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => K(P(), t(f, -0.5, 1).scale(0.14, 0.3, 6.5), W(0.7, 0.2, 0, 0.3))),
          ));
      Y(f => {
        f.h = g => g.translateSelf(0, -2, Za(k[10].g, k[11].g) * n(Math.sin(1.1 * c)) * -8.5 + 10);
        fb(2, g => X(C, t(9 * g - 110 + (1 & g), 1.7, -12)));
      });
      Y(f => {
        f.h = g => g.translateSelf(0, -2, Za(k[10].g, k[11].g) * n(Math.sin(2.1 * c)) * -8.5 + 10);
        fb(2, g => X(C, t(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
      });
      Y(f => {
        f.h = g =>
          g.translateSelf(
            0,
            -2,
            -8.5 * Ua((1 - k[10].g) * (1 - Za(k[10].g, k[11].g)), Za(k[10].g, k[11].g) * n(Math.sin(1.5 * c))) + 10,
          );
        fb(3, g => X(C, t(9 * g - 106, 1.7, -12)));
      });
      X(
        R(
          wb(K(P(), t(26.5, -1.6, 10).scale(20, 2.08, 3)), K(P(), t(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...fb(4, f => K(P(), t(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...fb(3, f => K(P(), t(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        t(-123, 0, -12),
        W(0.5, 0.5, 0.6, 0.2),
      );
      Hb(t(-116, -1.4, -18).rotate(0, 180));
      X(P(), t(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), W(0.8, 0.8, 0.8, 0.2));
      X(P(6), t(-116, -2.6, -16.5).scale(3.2, 0.8, 3), W(0.6, 0.5, 0.7, 0.2));
      X(P(), t(-115.5, -17, -12).scale(0.5, 15, 2.2), W(0.6, 0.6, 0.6, 0.3));
      X(P(8), t(-114, -17, -2).scale(2, 15, 2), W(0.6, 0.6, 0.6, 0.3));
      X(P(8), t(-79, -17, -2).scale(2, 15, 2), W(1, 1, 1, 0.3));
      X(P(), t(-77, -17, -50.5).scale(2.2, 15, 0.5), W(0.6, 0.6, 0.6, 0.3));
      fb(3, f => {
        X(z(16), t(12 * f - 109, -9, -12), W(0.6, 0.6, 0.6, 0.3));
        X(z(16), t(-77, -9, -12 * f - 20).rotate(0, 90), W(0.6, 0.6, 0.6, 0.3));
      });
      X(R(
        K(P(12), t(-77, -14.5, -12).scale(4, 17.5, 4), W(0.7, 0.7, 0.7, 0.2)),
        K(P(), t(-79, 0.1, -12).scale(3.5, 2, 1.3), W(0.4, 0.5, 0.6, 0.2)),
        K(P(), t(-77, 0.1, -14).scale(1.5, 2, 2), W(0.4, 0.5, 0.6, 0.2)),
        K(P(12), t(-77, 3.1, -12).scale(3, 5, 3), W(0.4, 0.5, 0.6, 0.2)),
      ));
      X(P(), t(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), W(0.6, 0.6, 0.6, 0.3));
      X(P(9), t(-98, -18.4, -40).scale(2.5, 13.5, 2.5), W(0.5, 0.5, 0.5, 0.3));
      X(R(
        K(P(), t(-93, -5.8, -40).scale(9, 1, 5), W(0.8, 0.8, 0.8, 0.1)),
        K(P(9), t(-98, -5.8, -40).scale(3, 8, 3), W(0.7, 0.7, 0.7, 0.2)),
      ));
      Hb(t(-98, -4.4, -40).rotate(0, 90));
      Ib(t(-115, 0.2, -12), [0, 0, 3.5]);
      Ib(t(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      X(R(
        wb(
          K(P(6, 0, 0, 0.6), t(-100, 0.7, 105.5).scale(8, 1, 11), W(0.7, 0.7, 0.7, 0.2)),
          K(P(), t(-101.5, 0.7, 93.5).scale(10.5, 1, 2), W(0.7, 0.7, 0.7, 0.2)),
        ),
        K(P(5), t(-100, 0.7, 113).scale(4, 3, 4), W(0.7, 0.7, 0.7, 0.2)),
      ));
      fb(4, f =>
        Y(g => {
          g.h = y => {
            const A = Za(k[8].i, k[12].i);
            y.translateSelf(
              (2 < f ? 2 * (1 - A) + A : 0) - 100,
              A * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - k[8].i) * (1 - k[12].i) * -7
                + Ua(A, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          X(
            P(6),
            t(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 4).skewX(4).scale(2.6, 1, 2.5),
            W(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      Y(f => {
        f.h = g => {
          const y = Za(k[8].i, k[12].i);
          g.translateSelf(2.5 * (1 - y) - 139.7, -3 * (1 - k[8].g) + y * Math.sin(0.8 * c) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * c) * (3 * y + 3),
            0,
          );
        };
        X(R(K(P(10), I(6, 2, 6), W(0.1, 0.6, 0.5, 0.3)), K(P(10), I(3.3, 6, 3.3), W(0.1, 0.6, 0.5, 0.5))));
        X(P(15, 1), t(-7.5).rotate(0, 90).scale(3, 2.3, 3), W(0.4, 0.4, 0.4, 0.3));
        X(P(10), t(-7.5).rotate(0, 90).scale(2, 2.5, 2), W(0.3, 0.8, 0.7, 0.3));
        X(P(5), t(-7.5).rotate(0, 90).scale(1, 3), W(0.5, 0.5, 0.5, 0.5));
        Hb(t(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => X(q, eb(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), W(1, 1, 0.8, 0.2)));
        Ib(t(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      Y(f => {
        f.h = g => g.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - k[12].g);
        X(G);
      });
      [-1, 1].map(f => {
        [7.2, 1.5].map(g => X(P(15, 1), t(-7.5 * f - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), W(0.5, 0.24, 0.2, 0.4)));
        X(q, t(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), W(1, 1, 0.8));
        X(P(12, 1), t(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), W(0.6, 0.24, 0.2, 0.5));
        X(
          R(
            K(P(), t(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), W(0.5, 0.5, 0.5, 0.4)),
            K(P(), I(3, 3, 10), W(0.6, 0.24, 0.2, 0.5)),
            K(P(28, 1), t(0, 3, -5).scale(3, 4, 10).rotate(90, 0), W(0.6, 0.24, 0.2, 0.5)),
            K(P(5), t(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), W(0.6, 0.24, 0.2, 0.5)),
            K(P(5), t(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), W(0.6, 0.24, 0.2, 0.5)),
          ),
          t(f - 100, 0.7, 97),
        );
      });
      X(R(
        K(P(), t(-82.07, 0.8, 106).scale(11, 0.9, 2.2), W(0.7, 0.7, 0.7, 0.1)),
        K(P(45, 1), t(-81, 0.7, 106).scale3d(7.7), W(0.7, 0.7, 0.7, 0.1)),
      ));
      Y(f => {
        f.h = g => g.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + pa);
        X(R(
          K(P(45, 1), I(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)),
          K(P(), t(0, 0, -5.5).scale(1.5, 3, 2.7), W(0.45, 0.45, 0.45, 0.2)),
        ));
        X(P(8), t(0, 2).scale(3, 1.5, 3).rotate(0, 22), W(0.7, 0.7, 0.7, 0.1));
        X(P(5), t(0, 2).scale(1, 2), W(0.3, 0.3, 0.3, 0.2));
        Ib(t(0, 3), ...ib(14).map(({ x: g, z: y }) => [5.6 * g, 5.6 * y, 2]));
      });
      Y(f => {
        f.h = g => g.translateSelf(-65.8, 0.8, 106).rotateSelf(0, qa);
        [-1, 1].map(g =>
          X(q, eb(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), W(1, 1, 0.8))
        );
        X(R(K(P(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3)), K(P(), I(9, 5, 2), W(0.3, 0, 0, 0.3))));
        X(K(P(28, 1), I(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(K(P(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)));
      });
      Y(f => {
        f.h = g => g.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - qa);
        X(R(
          K(P(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3)),
          K(P(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)),
          K(P(), t(0, 0, 7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),
        ));
        X(K(P(28, 1), I(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(K(P(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)));
      });
      Y(f => {
        f.h = g => g.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + qa);
        X(R(
          K(P(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3)),
          K(P(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)),
          K(P(), t(0, 0, -7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),
        ));
        X(K(P(28, 1), I(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(K(P(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)));
      });
      X(P(), t(-58, 1, 106).scale(2, 0.65, 2), W(0.7, 0.7, 0.7, 0.2));
      X(P(), t(-50.7, 1, 99).scale(2, 0.65, 1), W(0.7, 0.7, 0.7, 0.2));
      X(P(), t(-42, 0.4, 91).scale(5, 1, 2.5), W(0.7, 0.7, 0.7, 0.3));
      X(P(), t(-34.2, 0.4, 91).scale(3, 1, 3), W(0.7, 0.7, 0.7, 0.3));
      Hb(t(-34, 2.7, 96).rotate(-12, 0));
      X(P(5), t(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), W(0.2, 0.5, 0.5, 0.6));
      [W(0.1, 0.55, 0.45, 0.2), W(0.2, 0.5, 0.5, 0.3), W(0.3, 0.45, 0.55, 0.4)].map((f, g) =>
        Y(y => {
          y.h = A => {
            A.translateSelf(
              0,
              (1 - k[13].i) * (1 - k[14].i) * (g ? 0 : 3) + Za(k[13].i, k[14].i) * Math.sin(1.5 * c + 1.5 * g) * 4,
            );
          };
          X(P(), t(-23.5, 0.5, 91 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), f);
          2 === g && X(P(), t(-29.1, 0.4, 91).scale(2.1, 1, 3), W(0.7, 0.7, 0.7, 0.3));
          1 === g && X(P(), t(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), W(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => X(q, t(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), W(1, 1, 0.8)));
      fb(
        3,
        f =>
          X(
            z(24.7 - 0.7 * (1 & f)),
            t(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? W(0.5, 0.5, 0.5, 0.3) : W(0.35, 0.35, 0.35, 0.5),
          ),
      );
      X(R(
        K(P(6, 0, 0, 0.3), t(0, -0.92, 95).scale(14, 2, 14), W(0.8, 0.8, 0.8, 0.2)),
        K(P(5), t(0, 0, 95).scale3d(6), W(0.3, 0.3, 0.3, 0.5)),
      ));
      Hb(t(0, 1.7, 82).rotate(0, 180));
      X(P(5), t(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), W(0.5, 0.3, 0.3, 0.4));
      X(P(6), t(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), W(0.5, 0.6, 0.7, 0.3));
      X(P(), t(0, 16, 129).scale(1.5, 1, 2), W(0.5, 0.6, 0.7, 0.3));
      X(P(7), t(0, 16.2, 133).scale(5, 1, 5), W(0.4, 0.5, 0.6, 0.4));
      X(R(
        wb(
          K(P(), t(0, 16, 110.5).scale(12, 1, 3), W(0.5, 0.3, 0.3, 0.4)),
          K(P(), t(0, 16, 111).scale(3, 1, 3.8), W(0.5, 0.3, 0.3, 0.4)),
        ),
        K(P(5), t(0, 16, 103.5).scale(5.5, 5, 5.5), W(0.5, 0.3, 0.3, 0.4)),
      ));
      Y(f => {
        f.h = g => g.translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
        X(P(3), t(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), W(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          X(P(6), t(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), W(0.7, 0.7, 0.7, 0.4));
          X(P(), t(0, 6.2, g + 95).scale(0.5, 11, 0.5), W(0.5, 0.3, 0.3, 0.4));
        });
      });
      Y(f => {
        f.h = g => {
          const y = Za(Za((k[14].g + k[14].i) / 2, k[13].i), (k[15].g + k[15].i) / 2);
          g.translateSelf(0, 16 * y, 8.5 * p(2 * y - 1) + 95);
        };
        X(P(5), I(5, 1.1, 5), W(0.5, 0.3, 0.3, 0.4));
        X(P(5), I(5.5, 0.9, 5.5), W(0.25, 0.25, 0.25, 0.4));
        Hb(t(0, 1.5, -1).rotate(0, 180));
      });
      Ib(t(0, 3, 95), ...ib(9).map(({ x: f, z: g }) => [9 * f, 9 * g, 4]));
      Ib(t(0, 19, 134), [0, 0, 3.5]);
    });
    Y(() => {
      X(kb(20), t(0, 1).scale3d(0.5), W(1, 0.3, 0.4));
      X(kb(30), I(0.65, 0.8, 0.55), W(1, 0.3, 0.4));
      X(P(), t(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), W(0.3, 0.3, 0.3));
      [-1, 1].map(m => {
        X(q, eb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), W(1, 1, 0.8));
        X(
          K(R(P(15, 1), K(P(), t(0, 0, 1).scale(2, 2, 0.5))), eb(-90, 0).scale(0.1, 0.05, 0.1), W(0.3, 0.3, 0.3)),
          t(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),
        );
        Y(() => {
          X(P(20, 1), t(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), W(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(P(6, 1), I(0.13, 1.4, 0.13), W(0.3, 0.3, 0.5, 0.1));
      X(P(10), t(0, 1).scale(0.21, 0.3, 0.21), W(1, 0.5, 0.2));
      X(P(3), t(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), W(0.2, 0.2, 0.2, 0.1));
    }, 0);
    Y(() => {
      X(P(6).slice(0, -1), I(0.77, 1, 0.77), W(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(
        kb(30, 24, (m, x, z) => {
          const B = x / 24, E = m * Math.PI * 2 / 30, G = Math.sin(B ** 0.6 * Math.PI / 2);
          m = B * B * Math.sin(m * Math.PI * 14 / 30) / 4;
          return 23 < x
            ? { x: z.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(E) * G,
              y: Math.cos(B * Math.PI) - B - m,
              z: Math.sin(E) * G + Math.sin(m * Math.PI * 2) / 4,
            };
        }),
        I(0.7, 0.7, 0.7),
        W(1, 1, 1),
      );
      [-1, 1].map(m => X(kb(12), t(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
