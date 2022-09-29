let ba,
  ea,
  ha,
  ja,
  ka,
  la,
  ma,
  na,
  oa,
  c = 0,
  qa = 0,
  ra = 0,
  sa = 0,
  ta = 0,
  xa = 0,
  ya = 0,
  za = 0,
  Aa = 0,
  Ba = 0,
  Ca = 0,
  Da = 0,
  Ea = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  Ia = 1,
  d = 0.066;
const e = [],
  h = [],
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
  Pa = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Qa = { x: 0, y: 0, z: 0 },
  Ra = Math.PI / 180;
var Sa = 0, Ta = 180;
const Ua = { x: 0, y: 0, z: 0 },
  n = NO_INLINE(a => 0 > a ? -a : a),
  Wa = NO_INLINE((a, b) => a < b ? a : b),
  Xa = NO_INLINE((a, b) => b < a ? a : b),
  Ya = (a, b) => n(a) > b ? a : 0,
  p = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a,
  Za = a => Math.atan2(Math.sin(a * Ra), Math.cos(a * Ra)) / Ra,
  $a = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * p(g) || 0,
  ab = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0,
  bb = (a, b) => (a = p(a), ab(a, 1 - a, b)),
  db = (
    a,
    b = cb,
    g = 0,
  ) => (g *= 16,
    b[g++] = a.m11,
    b[g++] = a.m12,
    b[g++] = a.m13,
    b[g++] = a.m14,
    b[g++] = a.m21,
    b[g++] = a.m22,
    b[g++] = a.m23,
    b[g++] = a.m24,
    b[g++] = a.m31,
    b[g++] = a.m32,
    b[g++] = a.m33,
    b[g++] = a.m34,
    b[g++] = a.m41,
    b[g++] = a.m42,
    b[g++] = a.m43,
    b[g] = a.m44,
    b),
  gb = (
    a = eb,
    b = fb,
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
  r = NO_INLINE((a, b, g) => eb.translate(a, b, g)),
  hb = NO_INLINE((a, b, g) => eb.rotate(a, b, g)),
  K = NO_INLINE((a, b, g) => eb.scale(a, b, g)),
  ib = (a, b) => Array.from(Array(a), (g, m) => b(m)),
  jb = (a, b, g) => (a.D = g, a.A = b, a),
  kb = (a, b, g = a.A) =>
    jb(
      a.map(m => {
        let q, k;
        return { x: m, y: q, z: k } = m,
          { x: m, y: q, z: k } = b.transformPoint({ x: m, y: q, z: k }),
          { x: m, y: q, z: k };
      }),
      g,
      a.D,
    ),
  N = (a, b, g) => a.map(m => kb(m, b, g)),
  lb = (a, b = 0) =>
    ib(a, g => {
      const m = Math.cos(2 * Math.PI * g / a);
      return { x: Math.sin(2 * Math.PI * g / a), y: 0, z: 0.01 > n(m) ? m : 0 > m ? m - b : m + b };
    }),
  mb = (a, b, g) =>
    a.map((m, q, { length: k }) => jb([m, b[k - q - 1], b[k - (q + 1) % k - 1], a[(q + 1) % k]], a.A, g)),
  R = (
    a,
    b,
    g = 0,
    m,
  ) => (a = a ? lb(a, m) : Ka,
    m = kb(a, r(0, 1).scale3d(0 < g ? g : 1)),
    a = kb(a, r(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...mb(a, m, b), m, a]),
  nb = (
    a,
    b = a,
    g = (
      m,
      q,
    ) => (q *= Math.PI / b,
      { x: Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y: Math.cos(q), z: Math.sin(m) * Math.sin(q) }),
  ) => {
    const m = [];
    for (let q = 0; a > q; q++) {
      for (let k = 0; b > k; k++) {
        const v = jb([], 0, 1);
        m.push(v);
        v.push(g(q, k, v));
        k && v.push(g((q + 1) % a, k, v));
        b - 1 > k && v.push(g((q + 1) % a, k + 1 % b, v));
        v.push(g(q, k + 1 % b, v));
      }
    }
    return m;
  },
  ob = ({ x: a, y: b, z: g }, m) => a * m.x + b * m.y + g * m.z,
  pb = a => {
    let b, g = 0, m = 0, q = 0, k = a.at(-1);
    for (b of a) {
      g += (k.y - b.y) * (k.z + b.z), m += (k.z - b.z) * (k.x + b.x), q += (k.x - b.x) * (k.y + b.y), k = b;
    }
    return b = Math.hypot(g, m, q), g /= b, m /= b, q /= b, { x: g, y: m, z: q, w: g * k.x + m * k.y + q * k.z };
  },
  qb = (a, b) => {
    var g, m, q, k = b.C;
    for (var v = 0; k.length > v; ++v) {
      if (-0.00008 > (g = ob(a, k[v]) - a.w) ? q = b : 8e-5 < g && (m = b), q && m) {
        m = [];
        q = [];
        k = b.C;
        v = b.B;
        let x = k.at(-1), A = ob(a, x) - a.w;
        for (const H of k) {
          g = ob(a, H) - a.w,
            8e-5 > A && q.push(x),
            -0.00008 < A && m.push(x),
            (8e-5 < A && -0.00008 > g || -0.00008 > A && 8e-5 < g)
            && (A /= g - A,
              x = { x: x.x + (x.x - H.x) * A, y: x.y + (x.y - H.y) * A, z: x.z + (x.z - H.z) * A },
              m.push(x),
              q.push(x)),
            x = H,
            A = g;
        }
        return {
          o: 2 < m.length && { C: jb(m, k.A, k.D), B: v, u: b },
          m: 2 < q.length && { C: jb(q, k.A, k.D), B: v, u: b },
        };
      }
    }
    return { o: m, m: q };
  },
  rb = (a, b, g = pb(b.C)) => {
    let m, q, k;
    return a
      ? ({ o: m, m: q } = qb(a, b), m || q || a.s.push(b), m && (a.o = rb(a.o, m, g)), q && (a.m = rb(a.m, q, g)))
      : ({ x: m, y: q, z: g, w: k } = g, a = { x: m, y: q, z: g, w: k, s: [b], o: 0, m: 0 }),
      a;
  },
  ub = (a, b, g) => {
    const m = [],
      q = (k, v) => {
        let { o: x, m: A } = qb(k, v);
        x || A || (0 < g * ob(k, b) ? x = v : A = v);
        x && (k.o ? q(k.o, x) : m.push(x));
        A && k.m && q(k.m, A);
      };
    for (const k of b.s) {
      q(a, k);
    }
    return m;
  },
  vb = (a, b) => a && (b(a), vb(a.o, b), vb(a.m, b)),
  wb = a => (vb(a, b => {
    const g = b.m;
    b.m = b.o;
    b.o = g;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const m of b.s) {
      m.B = !m.B;
    }
  }),
    a),
  zb = a => a.length ? a.reduce((b, g) => rb(b, { C: g, B: 0, u: 0 }), 0) : a,
  Ab = (...a) =>
    a.reduce((b, g) => {
      const m = [];
      if (b = zb(b), g) {
        g = zb(g);
        vb(b, q => q.s = ub(g, q, 1));
        vb(g, q => m.push([q, ub(b, q, -1)]));
        for (let [q, k] of m) {
          for (const v of k) {
            rb(b, v, q);
          }
        }
      }
      return b;
    }),
  S = (a, ...b) => {
    const g = k => {
        let v;
        return k.u && ((v = m.get(k.u)) ? (q.delete(v), k = g(k.u)) : m.set(k.u, k)), k;
      },
      m = new Map(),
      q = new Map();
    return a = wb(Ab(wb(zb(a)), ...b)),
      vb(a, k => {
        for (const v of k.s) {
          q.set(g(v), v.B);
        }
      }),
      Array.from(q, ([{ C: k }, v]) => {
        const x = k.map(({ x: A, y: H, z: I }) => ({ x: A, y: H, z: I }));
        return jb(v ? x.reverse() : x, k.A, k.D);
      });
  },
  T = NO_INLINE((a, b, g) => ab(a, b, 1 - Math.exp(-g * d))),
  Bb = () => {
    Ca = bb(h[12].g, h[13].g);
    ya = ab(T(ya, 0, 1), Za(ya + 60 * d), h[5].g - h[6].i);
    ta = ab(T(ta, 0, 5), Za(ta + 56 * d), Ca);
    xa = ab(T(xa, 0, 4), Za(xa + 48 * d), Ca);
    Ba = T(Ba, h[9].i, 0.2 + 0.3 * n(2 * h[9].i - 1));
    Aa = T(Aa, za ? T(Aa, -9, 1.5) : p(c / 3), 1);
    Ia && c > Ia && (Ia = 0, h4.innerHTML = "");
    h[0].j && 0.8 < h[0].g && (13 > ra
      ? (1 / 0 > Ia && (Ia = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0)
      : za
        || (1 / 0 > Ia && (Ia = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          za = 1));
    for (const a of e) {
      a.h(gb(eb, a.l));
    }
    for (const a of h) {
      a.h();
    }
    for (const a of Ja) {
      a.h();
    }
  },
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
      ][ra = Ja.reduce((a, { j: b }) => a + b, 0)] + " / XIII";
  },
  Db = () => {
    localStorage.DanteSP22 = JSON.stringify([h.map(({ j: a }) => a), Ja.map(({ j: a }) => a), sa, c, Ba]);
  },
  Eb = (a, b, g, m) =>
    new DOMMatrix([g, 0, 0, 0, 0, m, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0]),
  Hb = () => {
    let a, b, g, m, q, k, v, x, A, H, I, Q, C, f, l = !0;
    const w = [],
      z = () => {
        b4.innerHTML = "Music: " + l;
        ea || !l ? Fb.disconnect() : Fb.connect(Gb.destination);
      },
      F = () => {
        const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
        la = Eb(0.3, 181, u, 1.732051);
        ma = [Eb(0.3, 55, u, 1.732051), Eb(55, 181, u, 1.732051)];
        m = x = void 0;
        w.length =
          ha =
          f =
          Q =
          C =
          Da =
          Ea =
            0;
      },
      y = (u, t = 0) => {
        if (ea !== u) {
          ea = u;
          ja = t;
          F();
          Cb();
          document.body.className = u ? "l m" : "l";
          try {
            u
              ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock())
              : (document.body.requestFullscreen().catch(() => 0), Fb.start());
          } catch {
          }
          z();
        }
      };
    oncontextmenu = () => !1;
    b1.onclick = () => y(!1);
    b2.onclick = () => y(!1, 1);
    b5.onclick = () => y(!0);
    b4.onclick = () => {
      l = !l;
      z();
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    onclick = u => {
      if (!ea && (u.target === hC && (ha = 1), ja)) {
        try {
          hC.requestPointerLock();
        } catch {
        }
      }
    };
    onkeyup = onkeydown = u => {
      let t;
      u.repeat
        || (t = {
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
          (w[t] = !!u.type[5] && !0) && (0 === t && (ha = 1), 1 === t && y(!0)));
    };
    onmousemove = ({ movementX: u, movementY: t }) => {
      ja && (u || t) && (Ta += 0.1 * u, Sa += 0.1 * t);
    };
    hC.ontouchstart = u => {
      if (!ea) {
        for (let { pageX: t, pageY: M, identifier: P } of u.changedTouches) {
          ja && t > hC.clientWidth / 2
            ? void 0 === x && (A = 0, k = t, v = M, x = P, H = Ta, I = Sa)
            : void 0 === m && (q = 0, b = t, g = M, m = P);
        }
        a = qa;
      }
    };
    hC.ontouchmove = u => {
      if (!ea) {
        for (let { pageX: ca, pageY: V, identifier: B } of u.changedTouches) {
          var t, M, P, aa;
          x === B && (Ta = H + (ca - k) / 2.3, Sa = I + (V - v) / 2.3, A = 1);
          m === B
            && (B = (b - ca) / 20,
              t = n(B),
              M = (g - V) / 20,
              P = n(M),
              (aa = 0.5 < Xa(t, P)) && (q = 1),
              Q = (aa && 0.2 < t) * p(B, -1),
              C = (aa && 0.2 < P) * p(M, -1),
              2 < t && (b = ca + 20 * (0 > B ? -1 : 1)),
              2 < P && (g = V + 20 * (0 > M ? -1 : 1)));
        }
      }
    };
    hC.ontouchend = u => {
      let t;
      document.activeElement === document.body && u.preventDefault();
      for (const M of u.changedTouches) {
        M.identifier === x
          ? (x = void 0, A || (t = 1), A = 0)
          : M.identifier === m
          ? (m = void 0, C = Q = 0, q || (t = 1), q = 0)
          : t = 1;
      }
      u.target === hC && t && a && 0.02 < (u = qa - a) && 0.7 > u && (ha = 1);
    };
    ka = () => {
      Da = C + (w[4] ? 1 : 0) - (w[5] ? 1 : 0);
      Ea = Q + (w[2] ? 1 : 0) - (w[3] ? 1 : 0);
      var u = navigator.getGamepads()[0];
      if (u) {
        const t = P => M[P]?.pressed || 0 < M[P]?.value ? 1 : 0, M = u.buttons;
        u = u.axes;
        ja && (Sa += d * Ya(u[3], 0.3) * 80, Ta += d * Ya(u[2], 0.3) * 80);
        Da += t(12) - t(13) - Ya(u[1], 0.2);
        Ea += t(14) - t(15) - Ya(u[0], 0.2);
        t(9) && y(!0);
        (u = t(3) || t(2) || t(1) || t(0)) && !f && (ha = 1);
        f = u;
      }
    };
    document.onvisibilitychange = onblur = onresize = F;
    y(!0);
  },
  U = NO_INLINE((a, b, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a),
  X = (a, b = new DOMMatrix(), g) => na.s.push(...N(a, b, g)),
  Y = (a, b = 1) => {
    const g = na;
    b = {
      l: new DOMMatrix(),
      H: e.length,
      G: b,
      s: [],
      h() {
      },
    };
    return e.push(b), a(na = b), na = g, b;
  },
  Ib = a => (a = a.transformPoint(), Math.hypot(Qa.x - a.x, Qa.y - a.y, Qa.z - a.z)),
  Jb = a => {
    const b = new DOMMatrix(),
      g = new DOMMatrix(),
      m = na,
      q = h.length,
      k = {
        j: 0,
        g: 0,
        i: 0,
        u: m,
        I: b,
        l: g,
        h() {
          gb(gb(m.l, b).multiplySelf(a), g).rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
          k.g = T(k.g, k.j, 4);
          k.i = T(k.i, k.j, 1);
          ha && 3 > Ib(b) && (0.3 > k.g || 0.7 < k.g)
            && (k.j = k.j ? 0 : 1, q && 1 / 0 > Ia && (Ia = c + 1, h4.innerHTML = "* click *"), sa = q, Db());
        },
      };
    h.push(k);
    X(R(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(R(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    X(R(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
  },
  Kb = (a, ...b) => {
    let g = -1, m = 0, q = 0, k = 0, v = 0, x = 0, A = 1, H = 3;
    const I = new DOMMatrix(), Q = na, C = Ja.length, f = b.map(([t, M, P]) => ({ x: t, z: M, w: P }));
    let l = f[0], { x: w, z } = l, F = w, y = z;
    const u = {
      j: 0,
      l: I,
      h() {
        if (!u.j) {
          let ca, V, B, L, J, G, E, D = 1, O = 1 / 0;
          for (const ua of f) {
            var { x: t, z: M, w: P } = ua;
            M = (t = Math.hypot(w - t, z - M)) - P;
            E ||= t < P;
            0 < M && O > M && (O = M, l = ua);
            D = Wa(D, t / P);
          }
          E
            || ({ x: aa, z: ca, w: V } = l,
              B = w - aa,
              L = z - ca,
              J = Math.hypot(B, L),
              G = Math.atan2(-L, B),
              A && (q = (Math.random() - 0.5) * Math.PI / 2, H = p(H / (1 + Math.random()))),
              G += q,
              g = -Math.cos(G),
              m = Math.sin(G),
              0.1 < J && (J = Wa(J, V) / (J || 1), w = B * J + aa, z = L * J + ca));
          A = E;
          H = T(H, 6 * (1 - D) + 3, D + 3);
          F = T(F, w = T(w, w + g, H), H);
          y = T(y, z = T(z, z + m, H), H);
          k = $a(k, Math.atan2(F - v, y - x) / Ra - 180, 1 - Math.exp(-3 * d));
          if (
            1.6 > Ib(gb(Q.l, I).multiplySelf(a).translateSelf(v = F, 0, x = y).rotateSelf(0, k, 7 * Math.sin(1.7 * c)))
          ) {
            u.j = 1;
            var aa = [
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
            ][ra] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
            1 / 0 > Ia && (Ia = c + (ra && 12 > ra ? 5 : 7), h4.innerHTML = aa);
            Cb();
            Db();
          }
        }
        u.j
          && gb(e[2].l, I).translateSelf(
            C % 4 * 1.2 - 1.7 + Math.sin(c + C) / 7,
            -2,
            1.7 * (C / 4 | 0) - 5.5 + n(C % 4 - 2) + Math.cos(c / 1.5 + C) / 6,
          );
      },
    };
    Ja.push(u);
  },
  Lb = () => {
    let a, b, g, m, q, k, v, x, A, H, I, Q, C, f, l, w, z, F = 1, y = 2, u = 2;
    const t = () => {
        H = A = 0;
        for (let B = 32; 128 > B; B += 2) {
          let L = 0, J = 0, G = 0, E = 0;
          const D = 512 * B;
          for (let O = 1 & B; 128 > O; O += 2) {
            const ua = D + 4 * O;
            let da = D + 4 * (127 - O);
            const ia = V[ua] / 255, Va = V[1 + da] / 255, pa = 1 - n(O / 63.5 - 1);
            10 < O && 118 > O
              && (L = Xa(L, Xa(ia * pa, ia * V[da] / 255)), J = Xa(J, Xa(Va * pa, Va * V[1 + ua] / 255)));
            (54 > O || 74 < O) && 1e-3 < (da = (1 - pa) * Xa(ia, Va) / 3)
              && (64 > O && da > G ? G = da : 64 < O && da > E && (E = da));
          }
          n(E - G) > n(A) && (A = E - G);
          n(J - L) > n(H) && (H = J - L);
        }
      },
      M = () => {
        let B = 0, L = 0, J = 0, G = 0;
        m = 0;
        ca.fill(0);
        for (let D = 0; 31 > D; ++D) {
          let O = 0;
          const ua = 512 * D;
          for (let da = 0; 128 > da; da++) {
            var E = ua + 4 * da;
            let ia = (V[E] + V[1 + E]) / 255;
            E = V[2 + E];
            14 < da && 114 > da && (O += ia);
            E && ia && (ia = ca[E] + 1, ca[E] = ia, B > ia || (B = ia, L = E, m = 1));
          }
          3 > O && 5 < D && (J += D / 32);
          3 < O && (7 < D && (G += D / 15), m = 1);
        }
        a = L || b;
        b = L;
        u = T(u, m ? 6.5 : -20 > Ua.y ? 11 : 8, 4);
        Ua.y += G / 41 - (m || u) * J / 41 * u * d;
      },
      P = () => (y ? h[sa].u : e[g && 1 === e[g].G && g || 0]).l,
      aa = (B, L, J, G) => ab(B, L, F || (p(n(L - B) ** 0.5 - J) + 1 / 7) * (1 - Math.exp(-(1.5 * G) * d))),
      ca = new Uint8Array(256),
      V = new Uint8Array(65536);
    oa = () => {
      var B = p(Da, -1);
      let L = p(Ea, -1);
      var J = Ya(Math.hypot(B, L) ** 0.5, 0.1), G = Math.atan2(B, L);
      J && (q = 90 - G / Ra);
      k = $a(k, q, 1 - Math.exp(-8 * d));
      v = T(v, J, 10);
      B = J * n(B) * Math.sin(G);
      L = J * n(L) * Math.cos(G);
      Z.r9r(0, 0, 128, 128, 6408, 5121, V);
      NO_INLINE(M)();
      NO_INLINE(t)();
      var E = p(1 - 5 * Xa(n(A), n(H)));
      C = T(C, m * E * p(2 * J) * 7, m ? 0.1 < E ? 10 : 5 + 2 * J : 1);
      I = T(I, 0, m ? 8 : 4);
      Q = T(Q, 0, m ? 8 : 4);
      a && (E = 0);
      G = ja ? (180 - Ta) * Ra : 0;
      J =
        (A += d * (E * I + C * (L * Math.cos(G) - B * Math.sin(G))),
          H += d * (E * Q + C * (L * Math.sin(G) + B * Math.cos(G))),
          P());
      var { x: B, y: G, z: D } = 1 < y
        ? h[sa].I.transformPoint({ x: 0, y: sa || 0.9 < Aa ? 15 : 1, z: -2.4 })
        : (L = J,
          gb(L).invertSelf(),
          fb.m41 = fb.m42 = fb.m43 = 0,
          D = fb.transformPoint({ x: A, z: H, w: 0 }),
          Ua.x += D.x,
          Ua.z += D.z,
          L.transformPoint(Ua));
      if (
        a && (I = (B - Qa.x) / d, Q = (D - Qa.z) / d),
          Qa.x = B,
          Qa.y = G,
          Qa.z = D,
          (y = y && (m && a ? 0 : 1)) || a !== g
      ) {
        g = a, E = (J = P()).inverse().transformPoint(Qa), Ua.x = E.x, Ua.y = E.y, Ua.z = E.z;
      }
      x = T(x, Ca * (27 < a && 32 > a), 2);
      G < (-20 > B || 109 > D ? -25 : -9) && (I = Q = C = 0, y = 2);
      1 === a && (h[9].j = -15 > B && 0 > D ? 1 : 0);
      f = ab(T(f, G, 2), G, y || 8 * n(f - G));
      w = aa(w, f, 2, 1);
      l = aa(l, B, 0.5, 1);
      z = aa(z, D, 0.5, 1);
      ja
        ? (L = y + (1 - Math.exp(-18 * d)), Fa = ab(Fa, B, L), Ga = ab(Ga, f + 1.5, L), Ha = ab(Ha, D, L), Ta = Za(Ta))
        : (Ga = aa(Ga, Xa(w + p((-60 - D) / 8, 0, 20) + 13 + 9 * x, 6), 4, 2),
          Ha = aa(Ha, z + -18 + 5 * x, 1, 2 + x),
          Fa = aa(Fa, l, 1, 2 + x),
          J = Wa(-6, -n(z - Ha)),
          G = l - Fa,
          Ta = $a(Ta, 90 - Za(Math.atan2(J, G) / Ra), F + (1 - Math.exp(-10 * d))),
          Sa = $a(Sa, 90 - Math.atan2(Math.hypot(J, G), Ga - w) / Ra, F + (1 - Math.exp(-10 * d))));
      Sa = p(Sa, -87, 87);
      F = 0;
      e[37].l.translateSelf(B, f + 0.124, D).rotateSelf(0, k);
      for (B = 0; 2 > B; ++B) {
        e[38 + B].l.multiplySelf(e[37].l).translateSelf(
          0,
          v * p(0.45 * Math.sin(9.1 * c + Math.PI * (B - 1) - Math.PI / 2)),
        ).rotateSelf(v * Math.sin(9.1 * c + Math.PI * (B - 1)) * 0.25 / Ra, 0);
      }
    };
  },
  Mb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b),
  Nb = (a, b) => {
    const g = {}, m = Z.c1h();
    return Z.abz(m, a), Z.abz(m, Mb(b, 35632)), Z.l8l(m), q => q ? g[q] || (g[q] = Z.gan(m, q)) : Z.u7y(m);
  },
  Ub = (a, b, g) => {
    if (ea) {
      b = hb(0, 40 * Math.sin(qa) - 70);
      for (const m of [37, 38, 39]) {
        db(b, Sb, m - 1);
      }
      Z.uae(a, !1, Sb);
      Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      Z.uae(a, !1, Sb),
        Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6),
        Z.uae(a, !1, Tb),
        Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, Ja.length),
        Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
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
    const g = () => {
        let v = 0;
        const x = E => {
            let D, O, ua, da = 0, ia = 0;
            const Va = [],
              pa = new Int32Array(768 * E),
              $b = 2 ** (t - 9) / E,
              ac = Math.PI * 2 ** (V - 8) / E,
              xb = L * E & -2;
            for (let sb = 0; 11 >= sb; ++sb) {
              for (
                let tb = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb];
                32 > tb;
                ++tb
              ) {
                const Pb = (32 * sb + tb) * E;
                for (var Ma = 0; 4 > Ma; ++Ma) {
                  if (D = 0, Ob && (D = A[Ob - 1].charCodeAt(tb + 32 * Ma) - 40, D += 0 < D ? 106 : 0), D) {
                    var fa;
                    if (!(fa = Va[D])) {
                      fa = D;
                      let W = void 0, va = void 0;
                      var Qb = D;
                      let bc = 0, cc = 0;
                      const dc = 2 > b ? Yb : Wb, ec = 2 > b ? 1 > b ? Xb : Zb : Wb, Rb = new Int32Array(z + F + G);
                      for (let Na = 0, yb = 0; z + F + G > Na; ++Na, ++yb) {
                        let Oa = 1;
                        z > Na ? Oa = Na / z : z + F > Na || (Oa = (1 - (Oa = (Na - z - F) / G)) * 3 ** (-u / 16 * Oa));
                        0 > yb
                          || (yb -= 4 * E,
                            va = 0.00396 * 2 ** ((Qb + I - 256) / 12),
                            W = 0.00396 * 2 ** ((Qb + f - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                        Rb[Na] = 80
                            * (dc(bc += va * Oa ** (Q / 32)) * H + ec(cc += W * Oa ** (l / 32)) * C
                              + (w ? (2 * Math.random() - 1) * w : 0))
                            * Oa | 0;
                      }
                      fa = Va[fa] = Rb;
                    }
                    for (let W = 0, va = 2 * Pb; fa.length > W; ++W, va += 2) {
                      pa[va] += fa[W];
                    }
                  }
                }
                for (let W, va = 0; E > va; ++va) {
                  Ma = 0;
                  fa = 2 * (Pb + va);
                  var wa = (((W = pa[fa]) || ua)
                    && (O = 0.00308 * M,
                      1 !== b && 4 !== b || (O *= Math.sin($b * fa * Math.PI * 2) * J / 512 + 0.5),
                      O = 1.5 * Math.sin(O),
                      da += O * ia,
                      wa = (1 - P / 255) * (W - ia) - da,
                      ia += O * wa,
                      W = 4 === b ? ia : 3 === b ? wa : da,
                      b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                      W *= aa / 32,
                      ua = 1e-5 < W * W,
                      wa = Math.sin(ac * fa) * ca / 512 + 0.5,
                      Ma = W * (1 - wa),
                      W *= wa),
                    fa < xb || (Ma += pa[1 + fa - xb] * B
                      / 255,
                      W += pa[fa - xb] * B / 255),
                    v + fa >> 1);
                  q[wa] += (pa[fa] = Ma) / 65536;
                  k[wa] += (pa[++fa] = W) / 65536;
                }
              }
            }
            v += 768 * E;
          },
          A = La[b],
          [H, I, Q, C, f, l, w, z, F, y, u, t, M, P, aa, ca, V, B, L, J] = Pa[b],
          G = 4 * y ** 2;
        x(5513);
        x(4562);
        x(3891);
        Vb(5 > ++b ? g : a);
      },
      m = Gb.createBuffer(2, 5362944, 44100),
      q = m.getChannelData(0),
      k = m.getChannelData(1);
    Fb.buffer = m;
    Fb.loop = !0;
    Vb(g);
  },
  Gb = new AudioContext(),
  eb = new DOMMatrix(),
  fb = new DOMMatrix(),
  cb = new Float32Array(16),
  Sb = new Float32Array(624),
  Tb = new Float32Array(624),
  gc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Fb = Gb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const a in Z) {
  Z[a[0] + [...a].reduce((b, g, m) => (b * m + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Vb(() => {
  let a = 0;
  const b = () => {
      if (2 == ++a) {
        const q = [new Float32Array(16), new Float32Array(16)],
          k = y => {
            Z.f1s();
            requestAnimationFrame(k);
            var u = (y - (ba || y)) / 1e3;
            if (qa += u, c += d = ea ? 0 : Wa(0.066, u), ba = y, 0 < d) {
              ka();
              Bb();
              oa();
              for (y = 0; e.length > y; ++y) {
                e[y].G && db(e[y].l, Sb, y - 1);
              }
              for (y = 0; Ja.length > y; ++y) {
                db(Ja[y].l, Tb, y);
              }
              for (u = 0; h.length > u; ++u) {
                db(h[u].l, Tb, y), Tb[16 * y++ + 15] = 1 - h[u].g;
              }
              Q();
              Z.b6o(36160, F);
              Z.v5y(0, 0, 128, 128);
              Z.c4s(16640);
              Z.cbf(!0, !1, !0, !1);
              var { x: u, y, z: t } = Qa;
              Z.uae(Q("b"), !1, db(gb().rotateSelf(0, 180).invertSelf().translateSelf(-u, -y, 0.3 - t)));
              Ub(Q("c"), 0, 41);
              Z.c4s(256);
              Z.cbf(!1, !0, !0, !1);
              Z.uae(Q("b"), !1, db(gb().translateSelf(-u, -y, -t - 0.3)));
              Ub(Q("c"), 0, 41);
              Z.f1s();
            }
            ha = 0;
            gb(eb, v);
            ea
              ? v.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4)
              : v.rotateSelf(-Sa, -Ta).invertSelf().translateSelf(-Fa, -Ga, -Ha);
            H();
            Z.b6o(36160, w);
            Z.v5y(0, 0, 2048, 2048);
            l[0](54.7 * 1.1);
            l[1](126 * 1.1);
            C();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            Z.uae(C("a"), !1, db(la));
            Z.uae(C("b"), !1, db(v));
            Z.uae(C("i"), !1, q[0]);
            Z.uae(C("j"), !1, q[1]);
            Z.ubu(C("k"), Fa, Ga, Ha);
            Ub(C("c"), !ja, 42);
            I();
            Z.ubu(I("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, qa);
            Z.ubu(I("k"), Fa, Ga, Ha);
            Z.uae(I("b"), !1, db(gb(v).invertSelf()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, F);
            Z.f1s();
          },
          v = new DOMMatrix(),
          x = new DOMMatrix(),
          A = g;
        var m = Mb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const H = Nb(
            Mb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          I = Nb(
            Mb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          Q = Nb(
            m,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          C = Nb(
            m,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          f = ib(8, () => ({})),
          l = ib(2, y => {
            const u = Z.c25();
            return Z.a4v(33984 + y),
              Z.b9j(3553, u),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              t => {
                let M = 0, P = 0, aa = 0, ca = 1 / 0, V = -1 / 0, B = 1 / 0, L = -1 / 0, J = 1 / 0, G = -1 / 0;
                Z.fas(36160, 36096, 3553, u, 0);
                Z.c4s(256);
                gb().scale3dSelf(t).multiplySelf(gb(ma[y], x).multiplySelf(v).invertSelf());
                for (let E = 0; 8 > E; ++E) {
                  const D = f[E],
                    O = (D.x = 4 & E ? 1 : -1, D.y = 2 & E ? 1 : -1, D.z = 1 & E ? 1 : -1, fb.transformPoint(D));
                  M -= D.x = (0 | O.x) / t / O.w;
                  P -= D.y = (0 | O.y) / t / O.w;
                  aa -= D.z = (0 | O.z) / t / O.w;
                }
                gb().rotateSelf(298, 139).translateSelf(M / 8, P / 8, aa / 8);
                for (t = 0; 8 > t; ++t) {
                  const { x: E, y: D, z: O } = fb.transformPoint(f[t]);
                  ca = Wa(ca, E);
                  V = Xa(V, E);
                  B = Wa(B, D);
                  L = Xa(L, D);
                  J = Wa(J, O);
                  G = Xa(G, O);
                }
                t = 10 + y;
                J *= 0 > J ? t : 1 / t;
                G *= 0 < G ? t : 1 / t;
                Z.uae(
                  H("b"),
                  !1,
                  db(
                    gb(eb, x).scaleSelf(2 / (V - ca), 2 / (L - B), 2 / (J - G)).translateSelf(
                      (V + ca) / -2,
                      (L + B) / -2,
                      (J + G) / 2,
                    ).multiplySelf(fb),
                    q[y],
                  ),
                );
                Ub(H("c"), !ja, 42);
              };
          }),
          w = Z.c5w();
        m = Z.c25();
        const z = Z.c3z(), F = Z.c5w();
        Q();
        Z.uae(Q("a"), !1, db(Eb(1e-4, 1, 1.4, 0.59)));
        C();
        Z.ubh(C("q"), 2);
        Z.ubh(C("h"), 1);
        Z.ubh(C("g"), 0);
        I();
        Z.ubh(I("q"), 2);
        Z.b6o(36160, w);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, F);
        Z.bb1(36161, z);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, z);
        Z.a4v(33986);
        Z.b9j(3553, m);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, m, 0);
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
        Z.c5t(0, 0, 0, 1);
        Bb();
        NO_INLINE(Hb)();
        NO_INLINE(Lb)();
        requestAnimationFrame(k);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = gc;
  NO_INLINE(fc)(() => {
    Vb(() => {
      let k, v = 0;
      const x = [],
        A = [],
        H = [],
        I = [],
        Q = z => {
          let { x: F, y, z: u } = k[z], t = (w[0] = F, w[1] = y, w[2] = u, z = "" + (k.D ? l : C), f.get(z));
          return void 0 !== t
            ? (F = 3 * t, I[F] = (I[F++] + C[5]) / 2, I[F] = (I[F++] + C[6]) / 2, I[F] = (I[F] + C[7]) / 2)
            : (f.set(z, t = f.size), A.push(F, y, u, w[3]), H.push(C[4]), I.push(C[5], C[6], C[7])),
            t;
        },
        C = new Int32Array(8),
        f = new Map(),
        l = new Int32Array(C.buffer, 0, 5),
        w = new Float32Array(C.buffer);
      for (const z of e) {
        for (k of (w[3] = 40 === z.H ? -14 : z.G && z.H, z.s)) {
          const { x: F, y, z: u } = pb(k);
          C[4] = 0 | k.A;
          C[5] = 32767 * F;
          C[6] = 32767 * y;
          C[7] = 32767 * u;
          for (let t = 2, M = Q(0), P = Q(1); k.length > t; ++t) {
            x.push(M, P, P = Q(t));
          }
        }
        z.s = null;
        z.v = v;
        z.F = v = x.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(A), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(I), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(H), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(x), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Vb(b);
      try {
        const [z, F, y, u, t] = JSON.parse(localStorage.DanteSP22);
        h.map((M, P) => M.g = M.i = M.j = P ? 0 | z[P] : 0);
        Ja.map((M, P) => M.j = 0 | F[P]);
        sa = y;
        Ba = t;
        c = u;
        d = 0;
      } catch {
      }
      Aa = p(sa);
    });
    const m = ib(11, k => r(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10)),
      q = ib(10, k => mb(kb(lb(18), m[k]).reverse(), kb(lb(18), m[k + 1]), 1)).flat();
    Y(() => X([Ka.slice(1)], r(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const k = (f, l, w) =>
          Y(z => {
            z.h = F => F.translateSelf(A() * Math.sin(3 * f + c * f) * l);
            Ka.map(({ x: F, z: y }) => {
              X(R(11, 1), r(4 * F, 4, w + 4 * y).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6));
              X(R(), r(4 * F, 7, w + 4 * y).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
            });
            X(S(
              N(R(), r(0, 0, w).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(F => N(R(), r(5 * F, 0.2, w).rotate(-30 * F).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3))),
            ));
            X(R(), r(0, -3, w).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
          }),
        v = (f, l, w, z) =>
          f.translateSelf(l + Math.sin(c + 2) / 5, w + Math.sin(0.8 * c) / 3, z).rotateSelf(
            2 * Math.sin(c),
            Math.sin(0.7 * c),
            Math.sin(0.9 * c),
          ),
        x = f =>
          S(
            N(R(), r(0, -f / 2).scale(6, f - 1, 2.2)),
            N(R(), r(0, -f / 2 - 6).scale(4, f - 3, 4)),
            N(R(32, 1), r(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        A = () => Wa(h[2].i, 1 - h[4].i),
        H = S(
          N(R(30, 1, 1.15, 1), r(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7)),
          N(R(30, 1, 1.3, 1), r(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2)),
          N(R(), r(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),
        ),
        I = ib(7, f => N(R(6, 1), r(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38))).flat(),
        Q = (Y(f => {
          f.h = l => v(l, -12, 4.2, 40 * Aa - 66);
          X(H);
          Jb(r(0, -3, 4));
        }),
          Jb(r(-5.4, 1.5, -19).rotate(0, -90)),
          Kb(r(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Kb(r(0, 2.8), [5, 10, 3], [-5, 10, 3], ...lb(18).map(({ x: f, z: l }) => [7 * f, 10 * l, 4.5 - 2 * n(f)])),
          X(R(), r(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
          Ka.map(({ x: f, z: l }) => X(R(6), r(3 * f, 3, 15 * l).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))),
          X(R(), r(0, 0, -23).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)),
          X(R(), r(0, 0, 22).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)),
          [-15, 15].map((f, l) => {
            X(R(), r(0, 6.3, f).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
            X(R(), r(0, 1, f).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
            Y(w => {
              w.h = z => z.translateSelf(0, 0, f).scaleSelf(1, p(1.22 - h[l + 1].g), 1);
              X(I);
            });
          }),
          ib(5, f =>
            ib(2, l =>
              X(
                q,
                r(18.5 * (l - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * l).scale(1.2, 10, 1.2),
                U(1, 1, 0.8, 0.2),
              ))),
          X(R(), r(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)),
          X(R(), r(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2)),
          X(R(5), r(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4)),
          X(R(), hb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5)),
          X(S(
            Ab(
              N(R(6, 0, 0, 0.3), r(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2)),
              N(R(6), r(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)),
              N(R(6, 0, 0, 0.3), r(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2)),
            ),
            N(R(5), K(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)),
            N(R(5, 0, 1.5), r(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2)),
            N(R(), hb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5)),
            N(R(6), r(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5)),
          )),
          Y(f => {
            f.h = l =>
              l.translateSelf(
                0,
                0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500,
                0,
              );
            X(R(5), r(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
            Jb(r(0, 1.2));
          }),
          Jb(r(15, -2, 4)),
          k(0.7, 12, 35),
          k(1, 8.2, 55),
          Y(f => {
            f.h = l => l.translateSelf(A() * Math.sin(c / 1.5 + 2) * 12);
            X(
              S(
                Ab(
                  N(R(), K(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  N(R(6), K(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  N(R(), r(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5)),
                  N(R(16, 1, 0, 4), K(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2)),
                ),
                N(R(), K(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),
              ),
              r(0, 0, 45),
            );
            Kb(r(0, 2.8, 45), [0, 0, 4.5]);
          }),
          X(R(), r(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
          Y(f => {
            f.h = l => l.translateSelf(9.8 * (1 - A()));
            X(R(3), r(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
            X(R(8), r(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
            X(R(), r(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
            X(R(), r(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
            Jb(r(-23, -0.5, 66.5));
          }),
          Y(f => {
            f.h = l => l.translateSelf(0, p(1 - 5 * A()) * bb(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
            X(R(), r(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
            X(S(N(R(), K(3, 1.4, 2.7)), N(R(), K(1.2, 8, 1.2))), r(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2));
          }),
          Y(f => {
            f.h = l => l.translateSelf(0, 0, p(1 - 5 * A()) * bb(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
            X(S(
              N(R(), r(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
              N(R(), r(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),
            ));
            X(R(), r(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
          }),
          Y(f => {
            f.h = l => l.translateSelf(0, -6.5 * h[4].i);
            X(R(6), r(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4));
          }),
          Jb(r(-55, -1.1, 46).rotate(0, 90)),
          X(R(6), r(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)),
          X(R(7), r(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)),
          [
            ...N(R(), r(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)),
            ...S(
              N(R(6), hb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)),
              N(R(4, 0, 0.01), r(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3)),
              N(R(6), hb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f => N(R(5), r(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3))),
            ),
          ]),
        C = (X(Q, r(-53, 0, 55)),
          Y(f => {
            f.h = l => l.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ya, 0);
            X(Q);
          }, 2),
          X(R(), r(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2)),
          X(R(3, 0, -0.5), r(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2)),
          X(S(
            Ab(
              N(R(), r(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), r(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), r(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), r(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2)),
              N(R(6), r(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3)),
              N(R(), r(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2)),
              N(R(), r(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2)),
            ),
            N(R(8), r(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4)),
            N(R(8), r(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5)),
            N(R(8), r(-100, -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5)),
          )),
          Kb(r(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          Kb(r(-89, 0.2, 80), [0, 0, 6]),
          X(S(
            N(R(), r(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)),
            N(R(), r(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4)),
            N(R(20, 1), r(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4)),
          )),
          Y(f => {
            f.h = l => l.translateSelf(-99.7, -1.9, 63.5).scale(1, p(1.1 - h[6].g), 1);
            X(I);
          }),
          Ka.map(({ x: f, z: l }) => {
            X(R(6), r(7 * f - 100, -3, 7 * l + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(w => X(R(6), r(7 * f - 100, w, 7 * l + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8)));
          }),
          ib(7, f => {
            X(
              R((23 * f + 1) % 5 + 5, 0, 0.55),
              r(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3),
              U(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          X(R(), r(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)),
          X(R(4), r(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)),
          X(R(12, 1), r(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)),
          Jb(r(-86, -7.5, 31)),
          Y(f => {
            f.h = l => l.translateSelf(0, 3.5 * (1 - Xa(h[6].g, h[7].g)) + bb(h[7].i, h[6].i) * Math.sin(c) * 5);
            [0, 12, 24].map(l => X(R(), r(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2)));
          }),
          Y(f => {
            f.h = l =>
              l.translateSelf(
                0,
                bb(h[7].i, h[6].i) * Math.sin(c + 3) * 6,
                6 * Math.sin(0.6 * c + 1) * bb(h[7].i, h[6].i),
              );
            [6, 18].map(l => X(R(), r(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2)));
          }),
          X(
            S(
              Ab(
                N(R(5), r(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3)),
                N(R(5), K(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),
                N(R(), K(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),
              ),
              N(R(5), K(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),
            ),
            r(-38.9, -11.3, 17),
          ),
          Jb(r(-38.9, -9.6, 10)),
          Y(f => {
            f.h = l => l.translateSelf(0, -7.3 * h[7].i);
            X(
              S(
                Ab(
                  N(R(5), r(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5)),
                  N(R(5), r(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5)),
                  N(R(5), r(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5)),
                ),
                N(R(5), K(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)),
                N(R(5), r(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5)),
              ),
              r(-38.9, -11.3, 17),
            );
            Kb(r(-39.1, -0.6, 17).rotate(11), ...lb(15).map(({ x: l, z: w }) => [3 * l, 3 * w, 1.2]));
          }),
          Ka.map(({ x: f, z: l }) => {
            X(R(14, 1), r(9 * f - 38.9, -7.3, 11 * l + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(w =>
              X(R(17, 1), r(9 * f - 38.9, w - 11.3, 11 * l + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3))
            );
          }),
          X(
            S(
              Ab(
                N(R(6), r(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3)),
                N(R(), r(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3)),
              ),
              ...ib(6, f =>
                ib(6, l =>
                  N(
                    R(6),
                    r(4.6 * l - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * l)).scale(2, 5, 2),
                    U(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            r(-38.9, -11.3, 17),
          ),
          Kb(r(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          X(R(5), r(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4)),
          Jb(r(-84, -0.5, 85).rotate(0, 45)),
          Y(f => {
            f.h = l => v(l, -123, 1.4, 55 + -65 * Ba);
            X(H);
            Jb(r(0, -3, -4).rotate(0, 180));
          }),
          S(
            N(R(), r(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3)),
            N(R(3), r(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => N(R(), r(f, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3))),
          ));
      Y(f => {
        f.h = l => l.translateSelf(0, -2, bb(h[10].g, h[11].g) * n(Math.sin(1.1 * c)) * -8.5 + 10);
        ib(2, l => X(C, r(9 * l - 110 + (1 & l), 1.7, -12)));
      });
      Y(f => {
        f.h = l => l.translateSelf(0, -2, bb(h[10].g, h[11].g) * n(Math.sin(2.1 * c)) * -8.5 + 10);
        ib(2, l => X(C, r(9 * (l + 2) - 110 + (1 & l), 1.7, -12)));
      });
      Y(f => {
        f.h = l =>
          l.translateSelf(
            0,
            -2,
            -8.5 * Xa((1 - h[10].g) * (1 - bb(h[10].g, h[11].g)), bb(h[10].g, h[11].g) * n(Math.sin(1.5 * c))) + 10,
          );
        ib(3, l => X(C, r(9 * l - 106, 1.7, -12)));
      });
      X(
        S(
          Ab(N(R(), r(26.5, -1.6, 10).scale(20, 2.08, 3)), N(R(), r(26.5, -0.6, 10).scale(19, 2, 0.5))),
          ...ib(4, f => N(R(), r(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...ib(3, f => N(R(), r(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        r(-123, 0, -12),
        U(0.5, 0.5, 0.6, 0.2),
      );
      Jb(r(-116, -1.4, -18).rotate(0, 180));
      X(R(), r(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2));
      X(R(6), r(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      X(R(), r(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      X(R(8), r(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      X(R(8), r(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      X(R(), r(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      ib(3, f => {
        X(x(16), r(12 * f - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        X(x(16), r(-77, -9, -12 * f - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3));
      });
      X(S(
        N(R(12), r(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2)),
        N(R(), r(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2)),
        N(R(), r(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2)),
        N(R(12), r(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2)),
      ));
      X(R(), r(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3));
      X(R(9), r(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      X(S(
        N(R(), r(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1)),
        N(R(9), r(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2)),
      ));
      Jb(r(-98, -4.4, -40).rotate(0, 90));
      Kb(r(-115, 0.2, -12), [0, 0, 3.5]);
      Kb(r(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      X(S(
        Ab(
          N(R(6, 0, 0, 0.6), r(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2)),
          N(R(), r(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2)),
        ),
        N(R(5), r(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2)),
      ));
      ib(4, f =>
        Y(l => {
          l.h = w => {
            const z = bb(h[8].i, h[12].i);
            w.translateSelf(
              (2 < f ? 2 * (1 - z) + z : 0) - 100,
              z * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + Xa(z, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          X(
            R(6),
            r(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            U(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      Y(f => {
        f.h = l => {
          const w = bb(h[8].i, h[12].i);
          l.translateSelf(2.5 * (1 - w) - 139.7, -3 * (1 - h[8].g) + w * Math.sin(0.8 * c) * -1 - 1.8, 93.5).rotateSelf(
            Math.cos(1.3 * c) * (3 * w + 3),
            0,
          );
        };
        X(S(N(R(10), K(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), N(R(10), K(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5))));
        X(R(15, 1), r(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3));
        X(R(10), r(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        X(R(5), r(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        Jb(r(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(l => X(q, hb(90 * l, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2)));
        Kb(r(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      Y(f => {
        f.h = l => l.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        X(I);
      });
      [-1, 1].map(f => {
        [7.2, 1.5].map(l => X(R(15, 1), r(-7.5 * f - 100, l + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4)));
        X(q, r(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), U(1, 1, 0.8));
        X(R(12, 1), r(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5));
        X(
          S(
            N(R(), r(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4)),
            N(R(), K(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)),
            N(R(28, 1), r(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5)),
            N(R(5), r(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5)),
            N(R(5), r(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5)),
          ),
          r(f - 100, 0.7, 97),
        );
      });
      X(S(
        N(R(), r(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1)),
        N(R(45, 1), r(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1)),
      ));
      Y(f => {
        f.h = l => l.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ta);
        X(S(
          N(R(45, 1), K(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),
          N(R(), r(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2)),
        ));
        X(R(8), r(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        X(R(5), r(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Kb(r(0, 3), ...lb(14).map(({ x: l, z: w }) => [5.6 * l, 5.6 * w, 2]));
      });
      Y(f => {
        f.h = l => l.translateSelf(-65.8, 0.8, 106).rotateSelf(0, xa);
        [-1, 1].map(l =>
          X(q, hb(0, 90).translate(-5 * l, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * l + 90), U(1, 1, 0.8))
        );
        X(S(N(R(28, 1), r(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)), N(R(), K(9, 5, 2), U(0.3, 0, 0, 0.3))));
        X(N(R(28, 1), K(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(N(R(5), r(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - xa);
        X(S(
          N(R(28, 1), r(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          N(R(), r(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          N(R(), r(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(N(R(28, 1), K(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(N(R(5), r(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Y(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + xa);
        X(S(
          N(R(28, 1), r(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          N(R(), r(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          N(R(), r(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        X(N(R(28, 1), K(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(N(R(5), r(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      X(R(), r(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      X(R(), r(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      X(R(), r(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      X(R(), r(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      Jb(r(-34, 2.7, 96).rotate(-12, 0));
      X(R(5), r(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6));
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((f, l) =>
        Y(w => {
          w.h = z => {
            z.translateSelf(
              0,
              (1 - h[13].i) * (1 - h[14].i) * (l ? 0 : 3) + bb(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * l) * 4,
            );
          };
          X(R(), r(-23.5, 0.5, 91 + 6.8 * l).scale(1 === l ? 2 : 3.3, 1, 3.3), f);
          2 === l && X(R(), r(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
          1 === l && X(R(), r(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => X(q, r(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), U(1, 1, 0.8)));
      ib(
        3,
        f =>
          X(
            x(24.7 - 0.7 * (1 & f)),
            r(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),
          ),
      );
      X(S(
        N(R(6, 0, 0, 0.3), r(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2)),
        N(R(5), r(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),
      ));
      Jb(r(0, 1.7, 82).rotate(0, 180));
      X(R(5), r(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4));
      X(R(6), r(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3));
      X(R(), r(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      X(R(7), r(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      X(S(
        Ab(
          N(R(), r(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4)),
          N(R(), r(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4)),
        ),
        N(R(5), r(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4)),
      ));
      Y(f => {
        f.h = l => l.translateSelf(-2 * Math.sin(c)).rotate(25 * Math.sin(c));
        X(R(3), r(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(l => {
          X(R(6), r(0, 16, l + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4));
          X(R(), r(0, 6.2, l + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4));
        });
      });
      Y(f => {
        f.h = l => {
          const w = bb(bb((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          l.translateSelf(0, 16 * w, 8.5 * p(2 * w - 1) + 95);
        };
        X(R(5), K(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        X(R(5), K(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        Jb(r(0, 1.5, -1).rotate(0, 180));
      });
      Kb(r(0, 3, 95), ...lb(9).map(({ x: f, z: l }) => [9 * f, 9 * l, 4]));
      Kb(r(0, 19, 134), [0, 0, 3.5]);
    });
    Y(() => {
      X(nb(20), r(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      X(nb(30), K(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
      X(R(), r(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      [-1, 1].map(k => {
        X(q, hb(0, 0 < k ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8));
        X(
          N(S(R(15, 1), N(R(), r(0, 0, 1).scale(2, 2, 0.5))), hb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3)),
          r(0.2 * k, 1.2, 0.4).rotate(0, 20 * k, 20 * k),
        );
        Y(() => {
          X(R(20, 1), r(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(R(6, 1), K(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      X(R(10), r(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      X(R(3), r(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1));
    }, 0);
    Y(() => {
      X(R(6).slice(0, -1), K(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(
        nb(30, 24, (k, v, x) => {
          const A = v / 24, H = k * Math.PI * 2 / 30, I = Math.sin(A ** 0.6 * Math.PI / 2);
          k = A * A * Math.sin(k * Math.PI * 14 / 30) / 4;
          return 23 < v
            ? { x: x.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(H) * I,
              y: Math.cos(A * Math.PI) - A - k,
              z: Math.sin(H) * I + Math.sin(k * Math.PI * 2) / 4,
            };
        }),
        K(0.7, 0.7, 0.7),
        U(1, 1, 1),
      );
      [-1, 1].map(k => X(nb(12), r(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
