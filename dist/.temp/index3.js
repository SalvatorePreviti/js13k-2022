let ca = 0,
  da = 0,
  a = 0,
  ea = 0,
  ha = 0,
  ia = 0,
  ka = 0,
  la = 0,
  ma = 0,
  na = 0,
  oa = 0,
  pa = 0,
  qa = 0,
  ra = 0,
  sa = 0,
  c = 0.066,
  ua = 1,
  va,
  wa,
  xa,
  ya,
  Aa;
const e = [],
  h = [],
  Ba = [],
  Ca = [],
  Ha = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Ia = [
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
    ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"],
    ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"],
    ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],
  ],
  Ja = [
    [69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0],
    [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195],
    [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0],
    [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187],
    [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],
  ],
  Ka = { x: 0, y: 0, z: 0 };
var La = 0, Ma = 180;
const Na = { x: 0, y: 0, z: 0 },
  Oa = Math.PI / 180,
  n = new DOMMatrix(),
  Qa = new Float32Array(16),
  Ra = new Float32Array(624),
  r = (d, b) => Array.from(Array(d), (g, l) => b(l)),
  Sa = (d, b) => b < d ? d : b,
  u = (d, b = 0, g = 1) => d < b ? b : g < d ? g : d,
  Ta = (d, b) => b < Math.abs(d) ? d : 0,
  C = (d, b, g) => (0 < g ? 1 > g ? d + (b - d) * g : b : d) || 0,
  Ua = (d, b) => (d = u(d), C(d, 1 - d, b)),
  Va = d => Math.atan2(Math.sin(d *= Oa), Math.cos(d)) / Oa,
  Wa = (d, b, g) =>
    d + (2 * (b = (b
                  - d) % 360) % 360 - b) * u(g) || 0,
  Xa = ({ x: d, y: b, z: g }) => Math.hypot(d - Ka.x, b - Ka.y, g - Ka.z),
  $a = ({ x: d, y: b, z: g }, l) => d * l.x + b * l.y + g * l.z,
  ab = d => {
    let b = 0, g = 0, l = 0, m, k = d.at(-1);
    for (m of d) {
      b += (k.y - m.y) * (k.z + m.z), g += (k.z - m.z) * (k.x + m.x), l += (k.x - m.x) * (k.y + m.y), k = m;
    }
    return m = Math.hypot(b, g, l), b /= m, g /= m, l /= m, { x: b, y: g, z: l, w: b * k.x + g * k.y + l * k.z };
  },
  bb = (
    d,
    b = Qa,
    g = 0,
  ) => (g *= 16,
    b[g++] = d.m11,
    b[g++] = d.m12,
    b[g++] = d.m13,
    b[g++] = d.m14,
    b[g++] = d.m21,
    b[g++] = d.m22,
    b[g++] = d.m23,
    b[g++] = d.m24,
    b[g++] = d.m31,
    b[g++] = d.m32,
    b[g++] = d.m33,
    b[g++] = d.m34,
    b[g++] = d.m41,
    b[g++] = d.m42,
    b[g++] = d.m43,
    b[g] = d.m44,
    b),
  cb = (d, b, g, l) => [d, 0, 0, 0, 0, b, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0],
  db = (d, b, g) => (d.D = g, d.A = b, d),
  eb = (d, b, g = d.A) =>
    db(
      d.map(l => {
        let m, k;
        return { x: l, y: m, z: k } = l,
          { x: l, y: m, z: k } = b.transformPoint({ x: l, y: m, z: k }),
          { x: l, y: m, z: k };
      }),
      g,
      d.D,
    ),
  G = (d, b, g) => d.map(l => eb(l, b, g)),
  fb = (d, b = 0) =>
    r(d, g => {
      const l = Math.cos(2 * Math.PI * g / d);
      return { x: Math.sin(2 * Math.PI * g / d), y: 0, z: 0.01 > Math.abs(l) ? l : 0 > l ? l - b : l + b };
    }),
  gb = (d, b, g) =>
    d.map((l, m, { length: k }) => db([l, b[k - m - 1], b[k - (m + 1) % k - 1], d[(m + 1) % k]], d.A, g)),
  J = (
    d,
    b,
    g = 0,
    l,
  ) => (d = d ? fb(d, l) : Ha,
    l = eb(d, n.translate(0, 1).scale3d(0 < g ? g : 1)),
    d = eb(d, n.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...gb(d, l, b), l, d]),
  hb = (
    d,
    b = d,
    g = (
      l,
      m,
    ) => (m *= Math.PI / b,
      { x: Math.cos(l *= 2 * Math.PI / d) * Math.sin(m), y: Math.cos(m), z: Math.sin(l) * Math.sin(m) }),
  ) => {
    const l = [];
    for (let m = 0; d > m; m++) {
      for (let k = 0; b > k; k++) {
        const t = db([], 0, 1);
        l.push(t);
        t.push(g(m, k, t));
        k && t.push(g((m + 1) % d, k, t));
        b - 1 > k && t.push(g((m + 1) % d, k + 1 % b, t));
        t.push(g(m, k + 1 % b, t));
      }
    }
    return l;
  },
  kb = (d, b) => {
    var g, l, m, k = b.C;
    for (var t = 0; k.length > t; ++t) {
      if (-0.00008 > (g = $a(d, k[t]) - d.w) ? m = b : 8e-5 < g && (l = b), m && l) {
        l = [];
        m = [];
        k = b.C;
        t = b.B;
        let x = k.at(-1), v = $a(d, x) - d.w;
        for (const z of k) {
          g = $a(d, z) - d.w,
            8e-5 > v && m.push(x),
            -0.00008 < v && l.push(x),
            (8e-5 < v && -0.00008 > g || -0.00008 > v && 8e-5 < g)
            && (v /= g - v,
              x = { x: x.x + (x.x - z.x) * v, y: x.y + (x.y - z.y) * v, z: x.z + (x.z - z.z) * v },
              l.push(x),
              m.push(x)),
            x = z,
            v = g;
        }
        return {
          o: 2 < l.length && { C: db(l, k.A, k.D), B: t, u: b },
          m: 2 < m.length && { C: db(m, k.A, k.D), B: t, u: b },
        };
      }
    }
    return { o: l, m };
  },
  lb = (d, b, g = ab(b.C)) => {
    let l, m, k;
    return d
      ? ({ o: l, m } = kb(d, b), l || m || d.s.push(b), l && (d.o = lb(d.o, l, g)), m && (d.m = lb(d.m, m, g)))
      : ({ x: l, y: m, z: g, w: k } = g, d = { x: l, y: m, z: g, w: k, s: [b], o: 0, m: 0 }),
      d;
  },
  mb = (d, b, g) => {
    const l = [],
      m = (k, t) => {
        let { o: x, m: v } = kb(k, t);
        x || v || (0 < g * $a(k, b) ? x = t : v = t);
        x && (k.o ? m(k.o, x) : l.push(x));
        v && k.m && m(k.m, v);
      };
    for (const k of b.s) {
      m(d, k);
    }
    return l;
  },
  nb = (d, b) => d && (b(d), nb(d.o, b), nb(d.m, b)),
  qb = d => d.length ? d.reduce((b, g) => lb(b, { C: g, B: 0, u: 0 }), 0) : d,
  rb = d => (nb(d, b => {
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
    d),
  sb = (...d) =>
    d.reduce((b, g) => {
      const l = [];
      if (b = qb(b), g) {
        g = qb(g);
        nb(b, m => m.s = mb(g, m, 1));
        nb(g, m => l.push([m, mb(b, m, -1)]));
        for (let [m, k] of l) {
          for (const t of k) {
            lb(b, t, m);
          }
        }
      }
      return b;
    }),
  N = (...d) => {
    let b;
    const g = new Map(),
      l = new Map(),
      m = k => {
        let t;
        return k.u && ((t = g.get(k.u)) ? (l.delete(t), k = m(k.u)) : g.set(k.u, k)), k;
      };
    return [d, ...b] = [...d],
      d = rb(sb(rb(qb(d)), ...b)),
      nb(d, k => {
        for (const t of k.s) {
          l.set(m(t), t.B);
        }
      }),
      Array.from(l, ([{ C: k }, t]) => {
        const x = k.map(({ x: v, y: z, z: B }) => ({ x: v, y: z, z: B }));
        return db(t ? x.reverse() : x, k.A, k.D);
      });
  },
  tb = () => {
    const d = Ua(h[12].g, h[13].g);
    ka = C(C(ka, 0, 1 - Math.exp(-1 * c)), Va(ka + 60 * c), h[5].g - h[6].i);
    ha = C(C(ha, 0, 1 - Math.exp(-5 * c)), Va(ha + 56 * c), d);
    ia = C(C(ia, 0, 1 - Math.exp(-4 * c)), Va(ia + 48 * c), d);
    na = C(na, h[9].i, 1 - Math.exp(-(0.2 + 0.3 * Math.abs(2 * h[9].i - 1)) * c));
    ma = C(ma, la ? C(ma, -9, 1 - Math.exp(-1.5 * c)) : u(a / 3), 1 - Math.exp(-1 * c));
    ua && a > ua && (ua = 0, h4.innerHTML = "");
    h[0].l && 0.8 < h[0].g && (13 > ca
      ? (1 / 0 > ua && (ua = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0)
      : la
        || (1 / 0 > ua && (ua = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          la = 1));
    for (const b of e) {
      b.h && (b.j = b.h());
    }
    for (const b of h) {
      b.h();
    }
    for (const b of Ba) {
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
      ][ca = Ba.reduce((d, { l: b }) => d + b, 0)] + " / XIII";
  },
  vb = () => {
    localStorage.I = JSON.stringify([h.map(({ l: d }) => d), Ba.map(({ l: d }) => d), ea, a, na]);
  },
  P = (d, b = 1) => {
    const g = xa;
    b = { j: n, H: e.length, G: b, s: [] };
    return e.push(xa = b), d(b), xa = g, b;
  },
  U = (d, b = n, g) => xa.s.push(...G(d, b, g)),
  wb = d => {
    const b = xa,
      g = h.length,
      l = {
        l: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const m = l.l, k = l.g, t = l.i, x = b.j.multiply(d);
          l.J = x;
          3 > Xa(x.transformPoint()) && Ca[5] && (0.3 > k || 0.7 < k)
            && (l.l = m ? 0 : 1, g && 1 / 0 > ua && (ua = a + 1, h4.innerHTML = "* click *"), ea = g, vb());
          l.g = C(k, m, 1 - Math.exp(-4 * c));
          l.i = C(t, m, 1 - Math.exp(-1 * c));
          l.j = x.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    h.push(l);
    U(J(5), d.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Y(0.4, 0.5, 0.5));
    U(J(5), d.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Y(0.4, 0.5, 0.5));
    U(J(), d.translate(0, -0.4).scale(0.5, 0.1, 0.5), Y(0.5, 0.5, 0.4));
  },
  xb = (d, ...b) => {
    let g = 0, l = 0, m = 0, k = 0, t = 0, x = 1, v = 3, z = -1;
    const B = {
        l: 0,
        h() {
          if (!B.l) {
            let ta = 1, Da = 1 / 0, Ea, H, D, A, E, I, O;
            for (const M of f) {
              var { x: T, z: Q, w: R } = M;
              Q = (T = Math.hypot(q - T, w - Q)) - R;
              O ||= T < R;
              0 < Q && Da > Q && (Da = Q, p = M);
              var S = T / R;
              ta = ta < S ? ta : S;
            }
            O
              || ({ x: Ea, z: H, w: D } = p,
                A = q - Ea,
                E = w - H,
                I = Math.hypot(A, E),
                aa = Math.atan2(-E, A),
                x && (l = (Math.random() - 0.5) * Math.PI / 2, v = u(v / (1 + Math.random()))),
                aa += l,
                z = -Math.cos(aa),
                g = Math.sin(aa),
                0.1 < I && (I = (I < D ? I : D) / (I || 1), q = A * I + Ea, w = E * I + H));
            x = O;
            v = C(v, 6 * (1 - ta) + 3, 1 - Math.exp(-(ta + 3) * c));
            S = q = C(q, q + z, 1 - Math.exp(-v * c));
            y = C(y, S, 1 - Math.exp(-v * c));
            S = w = C(w, w + g, 1 - Math.exp(-v * c));
            L = C(L, S, 1 - Math.exp(-v * c));
            m = Wa(m, Math.atan2(y - k, L - t) / Oa - 180, 3 * c);
            k = y;
            t = L;
            var aa = (B.j = F.j.multiply(d.translate(y, 0, L).rotateSelf(0, m, 7 * Math.sin(1.7 * a))))
              .transformPoint();
            1.55 > Xa(aa)
              && (B.l = 1,
                S = [
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
                ][ca] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > ua && (ua = a + (ca && 12 > ca ? 5 : 7), h4.innerHTML = S),
                ub(),
                vb());
          }
          B.l
            && (B.j = e[2].j.translate(
              K % 4 * 1.2 - 1.7 + Math.sin(a + K) / 7,
              -2,
              1.7 * (K / 4 | 0) - 5.5 + Math.abs(K % 4 - 2) + Math.cos(a / 1.5 + K) / 6,
            ));
        },
      },
      F = xa,
      K = Ba.length,
      f = b.map(([T, Q, R]) => ({ x: T, z: Q, w: R }));
    let p = f[0], { x: q, z: w } = p, y = q, L = w;
    Ba.push(B);
  },
  yb = (d, b, g, l) => {
    let m = 0, k = 0, t = 0, x = 1 / 0, v = -1 / 0, z = 1 / 0, B = -1 / 0, F = 1 / 0, K = -1 / 0;
    const f = 1.1 * (g - b),
      p = (new DOMMatrix(cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(d).invertSelf();
    return b = r(
      8,
      q => (q = p.transformPoint({ x: 4 & q ? 1 : -1, y: 2 & q ? 1 : -1, z: 1 & q ? 1 : -1 }),
        m -= q.x = (f * q.x | 0) / f / q.w,
        k -= q.y = (f * q.y | 0) / f / q.w,
        t -= q.z = (f * q.z | 0) / f / q.w,
        q),
    ),
      g = n.rotate(298, 139).translateSelf(m / 8, k / 8, t / 8),
      eb(b, g).map(({ x: q, y: w, z: y }) => {
        x = x < q ? x : q;
        v = q < v ? v : q;
        z = z < w ? z : w;
        B = w < B ? B : w;
        F = F < y ? F : y;
        K = y < K ? K : y;
      }),
      F *= 0 > F ? l : 1 / l,
      K *= 0 < K ? l : 1 / l,
      n.scale(2 / (v - x), 2 / (B - z), 2 / (F - K)).translateSelf((v + x) / -2, (B + z) / -2, (F + K) / 2)
        .multiplySelf(g);
  },
  Bb = () => {
    let d = !0, b, g, l, m, k, t, x, v, z, B, F, K;
    const f = () => {
        va || !d ? zb.disconnect() : zb.connect(Ab.destination);
        b4.innerHTML = "Music: " + d;
      },
      p = (q = !1) => {
        if (va !== q) {
          va = q;
          try {
            q
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : zb.start();
          } catch {
          }
          ya = 0;
          document.body.className = q ? "l m" : "l";
          f();
          ub();
        }
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.I = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      p();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      p();
      ya = 1;
    };
    b4.onclick = () => {
      d = !d;
      f();
    };
    b5.onclick = () => p(!0);
    onclick = q => {
      K = 1;
      va || (q.target === hC && (Ca[5] = !0), ya && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: q, target: w, type: y, repeat: L }) => {
      L || ((L = !!y[5] && w === document.body) && ("Escape" === q || "Enter" === q && va)
        ? va && !K || p(!va)
        : 5
            === (y = {
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
            }[q])
        ? L && (Ca[y] = 1)
        : Ca[y] = L);
    };
    onmousemove = ({ movementX: q, movementY: w }) => {
      ya && (q || w) && (Ma += 0.1 * q, La += 0.1 * w);
    };
    hC.ontouchstart = q => {
      if (!va) {
        for (let { pageX: w, pageY: y, identifier: L } of q.changedTouches) {
          ya && w > hC.clientWidth / 2
            ? void 0 === v && (z = 0, t = w, x = y, v = L, B = Ma, F = La)
            : void 0 === m && (k = 0, g = w, l = y, m = L);
        }
        b = da;
      }
    };
    hC.ontouchmove = q => {
      if (!va) {
        for (let { pageX: R, pageY: S, identifier: aa } of q.changedTouches) {
          var w, y, L, T, Q;
          v === aa && (Ma = B + (R - t) / 2.3, La = F + (S - x) / 2.3, z = 1);
          m === aa
            && (aa = (g - R) / 20,
              w = (l - S) / 20,
              y = Math.abs(aa),
              L = Math.abs(w),
              T = Math.atan2(w, aa),
              Q = u(Math.hypot(w, aa) - 0.5),
              oa = 0.2 < y ? Math.cos(T) * Q : 0,
              pa = 0.2 < L ? Math.sin(T) * Q : 0,
              (oa || pa) && (k = 1),
              2 < y && (g = R + 20 * Math.sign(aa)),
              2 < L && (l = S + 20 * Math.sign(w)));
        }
      }
    };
    hC.ontouchend = q => {
      let w;
      q.preventDefault();
      for (const y of q.changedTouches) {
        y.identifier === v
          ? (v = void 0, z || (w = 1), z = 0)
          : y.identifier === m
          ? (m = void 0, pa = oa = 0, k || (w = 1), k = 0)
          : w = 1;
      }
      w && q.target === hC && b && 0.02 < (q = da - b) && 0.7 > q && (Ca[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Ca.length = oa = pa = 0;
      m = v = void 0;
      document.hidden && p(!0);
    })();
    p(!0);
  },
  Cb = () => {
    let d = 1, b = 2, g = 2, l, m, k, t, x, v, z, B, F, K, f, p, q, w, y, L, T;
    const Q = new Int32Array(256),
      R = new Uint8Array(65536),
      S = (H, D, A) => d ? D : C(H + Math.sign(D - H) * Sa(0, Math.abs(D - H) ** 0.9 - A) * c * 2, D, c / 7),
      aa = () => g ? h[ea].u.j : t && 1 === e[t].G && e[t].j || n,
      ta = () => {
        let H = aa();
        var { x: D, y: A, z: E } = 1 < g
          ? h[ea].J.transformPoint({ x: 0, y: ea || 0.9 < ma ? 15 : 1, z: -2.4 })
          : ((D = (E = H).inverse()).m41 = D.m42 = D.m43 = 0,
            A = D.transformPoint({ x: q, z: w, w: 0 }),
            Na.x += A.x,
            Na.z += A.z,
            E.transformPoint(Na));
        let I = D - Ka.x, O = E - Ka.z;
        if (g = g && (z && m ? 0 : 1), Ka.x = D, Ka.y = A, Ka.z = E, g || m !== t) {
          t = m;
          const ba = (H = aa()).inverse().transformPoint(Ka);
          Na.x = ba.x;
          Na.y = ba.y;
          Na.z = ba.z;
        }
        A < (-25 > D || 109 > E ? -25 : -9) && (g = 2);
        m && (K = I / c, f = O / c);
        1 === m && (h[9].l = -15 > D && 0 > E ? 1 : 0);
        p = C(C(p, A, 1 - Math.exp(-2 * c)), A, g || 8 * Math.abs(p - A));
        L = S(L, p, 3);
        y = S(y, D, 2);
        T = S(T, E, 2);
        ya
          ? (H = g + (1 - Math.exp(-18 * c)), qa = C(qa, D, H), ra = C(ra, p + 1.5, H), sa = C(sa, E, H), Ma = Va(Ma))
          : (I = d + (1 - Math.exp(-2 * c)),
            qa = C(qa, y, I),
            ra = C(ra, Sa(L + u((-60 - E) / 8, 0, 20) + 13, 6), I),
            sa = C(sa, T + -18, I),
            O = y - qa,
            A = -Math.abs(T - sa),
            H = d + (1 - Math.exp(-4 * c)),
            La = Wa(La, 90 - Math.atan2(Math.hypot(A, O), ra - L) / Oa, H),
            Ma = Wa(Ma, 90 - Va(Math.atan2(A, O) / Oa), H));
        La = u(La, -87, 87);
        const M = n.translate(D, p, E).rotateSelf(0, v);
        e[37].j = M;
        [39].map((ba, X) => {
          e[ba].j = M.translate(X, B * u(0.45 * Math.sin(9.1 * a + Math.PI * (X - 1) - Math.PI / 2))).rotateSelf(
            B * Math.sin(9.1 * a + Math.PI * (X - 1)) * 0.25 / Oa,
            0,
          );
        });
        d = 0;
      },
      Da = () => {
        let H = 0, D = 0, A = 0, E = 0;
        z = 0;
        Q.fill(0);
        for (let O = 0; 31 > O; ++O) {
          let M = 0;
          const ba = 512 * O;
          for (let X = 0; 128 > X; X++) {
            var I = ba + 4 * X;
            let fa = (R[I] + R[1 + I]) / 255;
            I = R[2 + I];
            14 < X && 114 > X && (M += fa);
            I && fa && (fa = Q[I] + 1, Q[I] = fa, H > fa || (H = fa, D = I));
          }
          3 > M && 5 < O && (A += O / 32);
          3 < M && (7 < O && (E += O / 15), z = 1);
        }
        D && (z = 1);
        m = D || k;
        k = D;
        b = C(b, z ? 6.5 : 8, 1 - Math.exp(-4 * c));
        Na.y += E / 41 - (z || b) * A / 41 * b * c;
      },
      Ea = () => {
        w = q = 0;
        for (let H = 32; 128 > H; H += 2) {
          let D = 0, A = 0, E = 0, I = 0;
          const O = 512 * H;
          for (let M = 1 & H; 128 > M; M += 2) {
            const ba = O + 4 * M;
            let X = O + 4 * (127 - M);
            const fa = R[ba] / 255, ja = R[1 + X] / 255, Ya = 1 - Math.abs(M / 63.5 - 1);
            10 < M && 118 > M
              && (D = Sa(Sa(fa * Ya, fa * R[X] / 255), D), A = Sa(Sa(ja * Ya, ja * R[1 + ba] / 255), A));
            (54 > M || 74 < M) && 1e-3 < (X = (1 - Ya) * (ja < fa ? fa : ja) / 3)
              && (64 > M && X > E ? E = X : 64 < M && X > I && (I = X));
          }
          Math.abs(I - E) > Math.abs(q) && (q = I - E);
          Math.abs(A - D) > Math.abs(w) && (w = A - D);
        }
      };
    Aa = () => {
      var H = pa + (Ca[1] ? 1 : 0) - (Ca[3] ? 1 : 0), D = oa + (Ca[0] ? 1 : 0) - (Ca[2] ? 1 : 0);
      if (E = navigator.getGamepads()[0]) {
        const I = E.buttons, O = E.axes;
        E = (A = M => I[M]?.pressed || 0 < I[M]?.value ? 1 : 0)(3) || A(2) || A(1) || A(0);
        H += A(12) - A(13) - Ta(O[1], 0.2);
        D += A(14) - A(15) - Ta(O[0], 0.2);
        ya && (La += 80 * Ta(O[3], 0.3) * c, Ma += 80 * Ta(O[2], 0.3) * c);
        E && !l && (Ca[5] = 1);
        l = E;
      }
      var A = Math.atan2(H, D), E = Ta(u(Math.hypot(H, D)), 0.05);
      H =
        (Z.fa7(),
          Z.r9r(0, 0, 128, 128, 6408, 5121, R),
          Z.iay(36008, [36064, 36096]),
          Z.iay(36009, [36064, 36096]),
          NO_INLINE(Ea)(),
          NO_INLINE(Da)(),
          u(1 - 5 * Sa(Math.abs(q), Math.abs(w))));
      D = ya ? Ma * Oa : Math.PI;
      B = C(B, E, 1 - Math.exp(-10 * c));
      E && (x = 90 - A / Oa);
      v = Wa(v, x, 8 * c);
      F = C(F, z * H * u(2 * E) * 7, 1 - Math.exp(-(z ? 0.1 < H ? 10 : 5 + 2 * E : 1) * c));
      K = C(K, 0, 1 - Math.exp(-(z ? 8 : 4) * c));
      q += c * ((m ? 0 : H * K) - Math.cos(A + D) * E * F);
      f = C(f, 0, 1 - Math.exp(-(z ? 8 : 4) * c));
      w += c * ((m ? 0 : H * f) - Math.sin(A + D) * E * F);
      NO_INLINE(ta)();
      Ca[5] = 0;
    };
  },
  Hb = (d, b = 35633) => (b = Z.c6x(b), Z.s3c(b, d), Z.c6a(b), b),
  Ib = (d, b) => {
    const g = {}, l = Z.c1h();
    return Z.abz(l, d), Z.abz(l, Hb(b, 35632)), Z.l8l(l), m => m ? g[m] || (g[m] = Z.gan(l, m)) : Z.u7y(l);
  },
  Jb = (d, b, g, l) => {
    if (va) {
      g = n.rotate(0, 40 * Math.sin(da) - 70);
      for (var m of [37, 38, 39]) {
        bb(g, Ra, m - 1);
      }
      Z.uae(d, !1, Ra);
      Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
    } else {
      for (m = 0; e.length > m; ++m) {
        e[m].G && bb(e[m].j, Ra, m - 1);
      }
      Z.uae(d, !1, Ra);
      Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        bb(Ba[b].j, Ra, b);
      }
      for (b = 0; h.length > b; ++b) {
        bb(h[b].j, Ra, b + 13), l || (Ra[16 * (b + 13) + 15] = 1 - h[b].g);
      }
      Z.uae(d, !1, Ra);
      Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13);
      Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length);
    }
  },
  Kb = d => {
    h4.innerHTML += ".";
    setTimeout(d);
  },
  Lb = d => Math.sin(d * Math.PI * 2),
  Mb = d => 0.5 > d % 1 ? 1 : -1,
  Nb = d => d % 1 * 2 - 1,
  Ob = d => 2 > (d = d % 1 * 4) ? d - 1 : 3 - d,
  Tb = d => {
    let b = 0;
    const g = new Int32Array(10725888),
      l = () => {
        const k = Ab.createBuffer(2, 5362944, 44100);
        for (let t = 0; 2 > t; t++) {
          for (let x = t, v = k.getChannelData(t); 10725888 > x; x += 2) {
            v[x >> 1] = g[x] / 65536;
          }
        }
        zb.buffer = k;
        zb.loop = !0;
        Kb(d);
      },
      m = () => {
        let k = 0;
        const t = A => {
            let E = 0, I = 0, O, M, ba, X;
            const fa = [],
              ja = new Int32Array(768 * A),
              Ya = 2 ** (T - 9) / A,
              Pb = Math.PI * 2 ** (ta - 8) / A,
              ob = Ea * A & -2;
            for (let ib = 0; 11 >= ib; ++ib) {
              for (
                let jb = 0,
                  Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ib],
                  Eb = (32 * ib + jb) * A;
                32 > jb;
                ++jb
              ) {
                for (let za = 0; 4 > za; ++za) {
                  if (M = 0, Db && (M = x[Db - 1].charCodeAt(jb + 32 * za) - 40, M += 0 < M ? 106 : 0), M) {
                    var Pa;
                    if (!(Pa = fa[M])) {
                      Pa = M;
                      let V = void 0, W = void 0;
                      var Fb = M;
                      let Za = 0, Qb = 0;
                      const Rb = 2 > b ? Nb : Lb, Sb = 2 > b ? 1 > b ? Mb : Ob : Lb, Gb = new Int32Array(q + w + D);
                      for (let Fa = 0, pb = 0; q + w + D > Fa; ++Fa, ++pb) {
                        let Ga = 1;
                        q > Fa ? Ga = Fa / q : q + w > Fa || (Ga = (1 - (Ga = (Fa - q - w) / D)) * 3 ** (L / -16 * Ga));
                        0 > pb
                          || (W = 396e-5 * 2 ** ((Fb + z - 256) / 12),
                            V = 396e-5 * 2 ** ((Fb + K - 256) / 12) * (b ? 1 : 1.0072),
                            pb -= 4 * A);
                        Gb[Fa] = 80
                          * (Rb(Za += W * Ga ** (B / 32)) * v + Sb(Qb += V * Ga ** (f / 32)) * F
                            + (p ? (2 * Math.random() - 1) * p : 0))
                          * Ga;
                      }
                      Pa = fa[Pa] = Gb;
                    }
                    for (let V = 0, W = 2 * Eb; Pa.length > V; ++V, W += 2) {
                      ja[W] += Pa[V];
                    }
                  }
                }
                for (let za, V, W, Za = 0; A > Za; ++Za) {
                  W = 2 * (Eb + Za),
                    za = 0,
                    ((V = ja[W]) || X)
                    && (ba = 308e-5 * Q,
                      1 !== b && 4 !== b || (ba *= Math.sin(Ya * W * Math.PI * 2) * H / 512 + 0.5),
                      ba = 1.5 * Math.sin(ba),
                      E += ba * I,
                      O = (1 - R / 255) * (V - I) - E,
                      I += ba * O,
                      V = 4 === b ? I : 3 === b ? O : E,
                      b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5),
                      V *= S / 32,
                      X = 1e-5 < V * V,
                      O = Math.sin(Pb * W) * aa / 512 + 0.5,
                      za = V * (1 - O),
                      V *= O),
                    W < ob || (za += ja[1 + W - ob] * Da
                      / 255,
                      V += ja[W - ob] * Da / 255),
                    g[k + W] += ja[W] = za,
                    ++W,
                    g[k + W] += ja[W] = V;
                }
              }
            }
            k += 768 * A;
          },
          x = Ia[b],
          [v, z, B, F, K, f, p, q, w, y, L, T, Q, R, S, aa, ta, Da, Ea, H] = Ja[b],
          D = 4 * y ** 2;
        t(5513);
        t(4562);
        t(3891);
        Kb(5 > ++b ? m : l);
      };
    Kb(m);
  },
  Ub = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  Y = NO_INLINE((d, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * d),
  Ab = new AudioContext(),
  zb = Ab.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const d in Z) {
  Z[d[0] + [...d].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[d];
}
Kb(() => {
  let d = 0;
  const b = () => {
      if (2 == ++d) {
        const l = p => {
            let q, w;
            Z.f1s();
            requestAnimationFrame(l);
            y = (p - (wa || p)) / 1e3;
            va ? (c = 0, Ca[5] = 0) : c = 0.066 < y ? 0.066 : y;
            a += c;
            da += y;
            wa = p;
            0 < c && (tb(), Aa());
            var y = (va ? n.rotate(-20, -90) : n.rotate(-La, -Ma)).invertSelf().translateSelf(
              va ? -4.5 : -qa,
              va ? 2 : -ra,
              va ? 3.2 - u(hC.clientWidth / 1e3) : -sa,
            );
            0 < c
              && ({ x: p, y: q, z: w } = Ka,
                v(),
                Z.b6o(36160, K),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(v("b"), !1, bb(n.rotate(0, 180).invertSelf().translateSelf(-p, -q, 0.3 - w))),
                Jb(v("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(v("b"), !1, bb(n.translate(-p, -q, -w - 0.3))),
                Jb(v("c"), 0, 41, 0),
                Z.f1s());
            t();
            Z.b6o(36160, F);
            Z.v5y(0, 0, 2048, 2048);
            B[0](yb(y, 0.3, 55, 10));
            B[1](yb(y, 55, 186, 11));
            z();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            B[0]();
            B[1]();
            Z.uae(z("a"), !1, cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
            Z.uae(z("b"), !1, bb(y));
            Z.ubu(z("k"), qa, ra, sa);
            Jb(z("c"), !ya, 42, 0);
            x();
            Z.ubu(x("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, da);
            Z.ubu(x("k"), qa, ra, sa);
            Z.uae(x("b"), !1, bb(y.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, K);
            Z.f1s();
          },
          m = g;
        let k = Hb(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const t = Ib(
            Hb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          x = Ib(
            Hb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          v = Ib(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          z = Ib(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          B = r(2, p => {
            const q = new Float32Array(16), w = Z.c25();
            return Z.a4v(33984 + p),
              Z.b9j(3553, w),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              y => {
                y
                  ? (bb(y, q),
                    Z.uae(t("b"), !1, q),
                    Z.fas(36160, 36096, 3553, w, 0),
                    Z.c4s(256),
                    Jb(t("c"), !ya, 42, 1))
                  : Z.uae(z(p ? "j" : "i"), !1, q);
              };
          }),
          F = Z.c5w(),
          K = (k = Z.c3z(), Z.c5w()),
          f = Z.c25();
        v();
        Z.uae(v("a"), !1, cb(1.4, 0.59, 1e-4, 1));
        z();
        Z.ubh(z("q"), 2);
        Z.ubh(z("h"), 1);
        Z.ubh(z("g"), 0);
        x();
        Z.ubh(x("q"), 2);
        Z.b6o(36160, F);
        Z.d45([0]);
        Z.r9l(0);
        Z.b6o(36160, K);
        Z.bb1(36161, k);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, k);
        Z.a4v(33986);
        Z.b9j(3553, f);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, f, 0);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, m);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        tb();
        NO_INLINE(Cb)();
        NO_INLINE(Bb)();
        requestAnimationFrame(l);
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = Ub;
  NO_INLINE(Tb)(() => {
    Kb(() => {
      let k = 0, t;
      const x = [],
        v = [],
        z = [],
        B = [],
        F = new Int32Array(8),
        K = new Map(),
        f = w => {
          let { x: y, y: L, z: T } = t[w], Q = (q[0] = y, q[1] = L, q[2] = T, w = "" + (t.D ? p : F), K.get(w));
          return void 0 !== Q
            ? (y = 3 * Q, B[y] = (B[y++] + F[5]) / 2, B[y] = (B[y++] + F[6]) / 2, B[y] = (B[y] + F[7]) / 2)
            : (K.set(w, Q = K.size), v.push(y, L, T, q[3]), z.push(F[4]), B.push(F[5], F[6], F[7])),
            Q;
        },
        p = new Int32Array(F.buffer, 0, 5),
        q = new Float32Array(F.buffer);
      for (const w of e) {
        for (t of (q[3] = 40 === w.H ? -14 : w.G && w.H, w.s)) {
          const { x: y, y: L, z: T } = ab(t);
          F[4] = 0 | t.A;
          F[5] = 32767 * y;
          F[6] = 32767 * L;
          F[7] = 32767 * T;
          for (let Q = 2, R = f(0), S = f(1); t.length > Q; ++Q) {
            x.push(R, S, S = f(Q));
          }
        }
        w.s = null;
        w.v = k;
        w.F = k = x.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(v), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(z), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(x), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Kb(b);
      try {
        const [w, y, L, T, Q] = JSON.parse(localStorage.I);
        h.map((R, S) => R.g = R.i = R.l = S ? 0 | w[S] : 0);
        Ba.map((R, S) => R.l = 0 | y[S]);
        ea = L;
        a = T;
        na = Q;
      } catch {
      }
      ma = u(ea);
    });
    const l = r(
        11,
        k => n.translate(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),
      ),
      m = r(10, k => gb(eb(fb(18), l[k]).reverse(), eb(fb(18), l[k + 1]), 1)).flat();
    P(() => U([Ha.slice(1)], n.translate(-2).scale3d(3).rotate(90, 0)), 0);
    P(() => {
      const k = (f, p, q) =>
          P(w => {
            w.h = () => n.translate(v() * Math.sin(3 * f + a * f) * p);
            Ha.map(({ x: y, z: L }) => {
              U(J(11, 1), n.translate(4 * y, 4, q + 4 * L).scale(0.8, 3, 0.8), Y(0.5, 0.3, 0.7, 0.6));
              U(J(), n.translate(4 * y, 7, q + 4 * L).scale(1, 0.3), Y(0.5, 0.5, 0.5, 0.3));
            });
            U(N(
              G(J(), n.translate(0, 0, q).scale(5, 1, 5), Y(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(y =>
                G(J(), n.translate(5 * y, 0.2, q).rotate(-30 * y).scale(4, 1, 2), Y(0.8, 0.8, 0.8, 0.3))
              ),
            ));
            U(J(), n.translate(0, -3, q).scale(8, 2, 8), Y(0.4, 0.4, 0.4, 0.3));
          }),
        t = (f, p, q) =>
          n.translate(f + Math.sin(a + 2) / 5, p + Math.sin(0.8 * a) / 3, q).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        x = f =>
          N(
            G(J(), n.translate(0, -f / 2).scale(6, f - 1, 2.2)),
            G(J(), n.translate(0, -f / 2 - 6).scale(4, f - 3, 4)),
            G(J(32, 1), n.translate(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        v = () => {
          var f = h[2].i, p = 1 - h[4].i;
          return f < p ? f : p;
        },
        z = N(
          G(J(20, 1, 1.15, 1), n.translate(0, -3).scale(3.5, 1, 3.5), Y(0.7, 0.4, 0.25, 0.7)),
          G(J(20, 1, 1.3, 1), n.translate(0, -2.5).scale(2.6, 1, 3), Y(0.7, 0.4, 0.25, 0.2)),
          G(J(), n.translate(4, -1.2).scale3d(2), Y(0.7, 0.4, 0.25, 0.3)),
        ),
        B = r(7, f => G(J(6, 1), n.translate(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), Y(0.3, 0.3, 0.38))).flat(),
        F = (P(f => {
          f.h = () => t(-12, 4.2, 40 * ma - 66);
          U(z);
          wb(n.translate(0, -3, 4));
        }),
          wb(n.translate(-5.4, 1.5, -19).rotate(0, -90)),
          xb(n.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          xb(
            n.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...fb(18).map(({ x: f, z: p }) => [7 * f, 10 * p, 4.5 - 2 * Math.abs(f)]),
          ),
          U(J(), n.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Y(0.8, 0.8, 0.8, 0.2)),
          Ha.map(({ x: f, z: p }) => U(J(6), n.translate(3 * f, 3, 15 * p).scale(0.7, 4, 0.7), Y(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(f => U(J(), n.translate(0, 0, f).scale(3, 1, 8), Y(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((f, p) => {
            U(J(), n.translate(0, 6.3, f).scale(4, 0.3, 1), Y(0.3, 0.3, 0.3, 0.4));
            U(J(), n.translate(0, 1, f).scale(3, 0.2, 0.35), Y(0.5, 0.5, 0.5, 0.3));
            P(q => {
              q.h = () => n.translate(0, 0, f).scale(1, u(1.22 - h[p + 1].g), 1);
              U(B);
            });
          }),
          r(5, f =>
            r(2, p =>
              U(
                m,
                n.translate(18.5 * (p - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2),
                Y(1, 1, 0.8, 0.2),
              ))),
          U(J(), n.translate(3, 1.5, -20).scale(0.5, 2, 5), Y(0.7, 0.7, 0.7, 0.2)),
          U(J(), n.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Y(0.75, 0.75, 0.75, 0.2)),
          U(J(5), n.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Y(0.6, 0.3, 0.3, 0.4)),
          U(J(), n.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), Y(0.8, 0.2, 0.2, 0.5)),
          U(N(
            sb(
              G(J(6, 0, 0, 0.3), n.translate(8, -3, -4).scale(13, 1, 13), Y(0.7, 0.7, 0.7, 0.2)),
              G(J(6), n.translate(0, -8).scale(9, 8, 8), Y(0.4, 0.2, 0.5, 0.5)),
              G(J(6, 0, 0, 0.3), n.translate(0, -0.92).scale(13, 2, 13), Y(0.8, 0.8, 0.8, 0.2)),
            ),
            G(J(5), n.scale(5, 30, 5), Y(0.4, 0.2, 0.6, 0.5)),
            G(J(5, 0, 1.5), n.translate(0, 1).scale(4.5, 0.3, 4.5), Y(0.7, 0.5, 0.9, 0.2)),
            G(J(), n.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), Y(0.5, 0.5, 0.5, 0.5)),
            G(J(6), n.translate(15, -1.5, 4).scale(3.5, 1, 3.5), Y(0.5, 0.5, 0.5, 0.5)),
          )),
          P(f => {
            f.h = () =>
              n.translate(
                0,
                0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500,
                0,
              );
            U(J(5), n.translate(0, -0.2).scale(5, 1, 5), Y(0.6, 0.65, 0.7, 0.3));
            wb(n.translate(0, 1.2));
          }),
          wb(n.translate(15, -2, 4)),
          k(0.7, 12, 35),
          k(1, 8.2, 55),
          P(f => {
            f.h = () => n.translate(v() * Math.sin(a / 1.5 + 2) * 12);
            U(
              N(
                sb(
                  G(J(), n.scale(1.5, 1, 5), Y(0.9, 0.9, 0.9, 0.2)),
                  G(J(6), n.scale(4, 1, 5), Y(0.9, 0.9, 0.9, 0.2)),
                  G(J(), n.translate(0, -2).scale(2, 3.2, 1.9), Y(0.3, 0.8, 0.5, 0.5)),
                  G(J(16, 1, 0, 4), n.scale(1, 1, 1.5).rotate(0, 90), Y(0.9, 0.9, 0.9, 0.2)),
                ),
                G(J(), n.scale(1.3, 10, 1.3), Y(0.2, 0.7, 0.4, 0.6)),
              ),
              n.translate(0, 0, 45),
            );
            xb(n.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          U(J(), n.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2)),
          P(f => {
            f.h = () => n.translate(9.8 * (1 - v()));
            U(J(3), n.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), Y(0.3, 0.6, 0.6, 0.2));
            U(J(8), n.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Y(0.8, 0.8, 0.8, 0.2));
            U(J(), n.translate(-23, -3, 55).scale(5.2, 1.7, 3), Y(0.5, 0.5, 0.5, 0.3));
            U(J(), n.translate(-23, -2.2, 62).scale(3, 1, 4), Y(0.5, 0.5, 0.5, 0.3));
            wb(n.translate(-23, -0.5, 66.5));
          }),
          P(f => {
            f.h = () => n.translate(0, u(1 - 5 * v()) * Ua(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
            U(J(), n.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Y(0.7, 0.7, 0.7, 0.2));
            U(
              N(G(J(), n.scale(3, 1.4, 2.7)), G(J(), n.scale(1.2, 8, 1.2))),
              n.translate(-33, -3, 55),
              Y(0.7, 0.7, 0.7, 0.2),
            );
          }),
          P(f => {
            f.h = () => n.translate(0, 0, u(1 - 5 * v()) * Ua(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
            U(N(
              G(J(), n.translate(-27, -3, 55).scale(3, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2)),
              G(J(), n.translate(-27, -3, 55).scale(1, 3), Y(0.9, 0.9, 0.9, 0.2)),
            ));
            U(J(), n.translate(-39, -3, 55).scale(3, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2));
          }),
          P(f => {
            f.h = () => n.translate(0, -6.5 * h[4].i);
            U(J(6), n.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), Y(0.7, 0.7, 0.7, 0.4));
          }),
          wb(n.translate(-55, -1.1, 46).rotate(0, 90)),
          U(J(6), n.translate(-61.3, -2.4, 49).scale(3, 1, 5), Y(0.4, 0.6, 0.6, 0.3)),
          U(J(7), n.translate(-57, -2.6, 46).scale(4, 1, 4), Y(0.8, 0.8, 0.8, 0.3)),
          [
            ...G(J(), n.translate(0, -3).scale(11, 1.4, 3), Y(0.9, 0.9, 0.9, 0.2)),
            ...N(
              G(J(6), n.rotate(90).scale(6, 8, 6), Y(0.3, 0.6, 0.6, 0.3)),
              G(J(4, 0, 0.01), n.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), Y(0.3, 0.6, 0.6, 0.3)),
              G(J(6), n.rotate(90).scale(5, 12, 5), Y(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(f =>
                G(J(5), n.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Y(0.3, 0.6, 0.6, 0.3))
              ),
            ),
          ]),
        K = (U(F, n.translate(-53, 0, 55)),
          P(f => {
            f.h = () => n.translate(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ka, 0);
            U(F);
          }, 2),
          U(J(), n.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), Y(0.7, 0.7, 0.7, 0.2)),
          U(J(3, 0, -0.5), n.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Y(0.8, 0.8, 0.8, 0.2)),
          U(N(
            sb(
              G(J(), n.translate(-100, -2.5, 55).scale(8, 1, 8), Y(0.8, 0.8, 0.8, 0.2)),
              G(J(), n.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Y(0.8, 0.8, 0.8, 0.2)),
              G(J(), n.translate(-100, -2.6, 70).scale(3, 1.1, 7), Y(0.8, 0.8, 0.8, 0.2)),
              G(J(), n.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), Y(0.8, 0.8, 0.8, 0.2)),
              G(J(6), n.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Y(0.6, 0.6, 0.6, 0.3)),
              G(J(), n.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Y(0.8, 0.8, 0.8, 0.2)),
              G(J(), n.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), Y(0.8, 0.8, 0.8, 0.2)),
            ),
            G(J(8), n.translate(-100, -1, 55).scale(7, 0.9, 7), Y(0.3, 0.3, 0.3, 0.4)),
            G(J(8), n.translate(-100, -2, 55).scale(4, 0.3, 4), Y(0.4, 0.4, 0.4, 0.5)),
            G(J(8), n.translate(-100, -3, 55).scale(0.6, 1, 0.6), Y(0.4, 0.4, 0.4, 0.5)),
          )),
          xb(n.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          xb(n.translate(-89, 0.2, 80), [0, 0, 6]),
          U(N(
            G(J(), n.translate(-100, 1, 63).scale(7.5, 4), Y(0.5, 0.5, 0.5, 0.4)),
            G(J(), n.translate(-100, 0, 70).scale(2, 2, 10), Y(0.5, 0.5, 0.5, 0.4)),
            G(J(20, 1), n.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Y(0.5, 0.5, 0.5, 0.4)),
          )),
          P(f => {
            f.h = () => n.translate(-99.7, -1.9, 63.5).scale(1, u(1.1 - h[6].g), 1);
            U(B);
          }),
          Ha.map(({ x: f, z: p }) => {
            U(J(6), n.translate(7 * f - 100, -3, 7 * p + 55).scale(1, 8.1), Y(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(q =>
              U(J(6), n.translate(7 * f - 100, q, 7 * p + 55).scale(1.3, 0.5, 1.3), Y(0.4, 0.2, 0.2, 0.8))
            );
          }),
          r(7, f => {
            U(
              J((23 * f + 1) % 5 + 5, 0, 0.55),
              n.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(
                5 + f / 2,
                1 + f / 6,
                5 + f / 3,
              ),
              Y(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),
            );
          }),
          U(J(), n.translate(-87, -9.5, 24).scale(7, 1, 3), Y(0.4, 0.5, 0.6, 0.4)),
          U(J(4), n.translate(-86, -9.2, 27).scale(5, 1, 5), Y(0.5, 0.6, 0.7, 0.3)),
          U(J(12, 1), n.translate(-86, -9, 31).scale(1.5, 1, 1.5), Y(0.3, 0.3, 0.4, 0.1)),
          wb(n.translate(-86, -7.5, 31)),
          P(f => {
            f.h = () => n.translate(0, 3.5 * (1 - Sa(h[6].g, h[7].g)) + Ua(h[7].i, h[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(p =>
              U(J(), n.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), Y(0.2, 0.5, 0.6, 0.2))
            );
          }),
          P(f => {
            f.h = () =>
              n.translate(0, Ua(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ua(h[7].i, h[6].i));
            [6, 18].map(p => U(J(), n.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), Y(0.1, 0.4, 0.5, 0.2)));
          }),
          U(
            N(
              sb(
                G(J(5), n.translate(0, 0, -7).scale(2, 1.2, 2), Y(0.2, 0.4, 0.7, 0.3)),
                G(J(5), n.scale(9, 1.2, 9), Y(0, 0.2, 0.3, 0.5)),
                G(J(), n.scale(11, 1, 13), Y(0.3, 0.4, 0.6, 0.3)),
              ),
              G(J(5), n.scale(5.4, 5, 5.4), Y(0, 0.2, 0.3, 0.5)),
            ),
            n.translate(-38.9, -11.3, 17),
          ),
          wb(n.translate(-38.9, -9.6, 10)),
          P(f => {
            f.h = () => n.translate(0, -7.3 * h[7].i);
            U(
              N(
                sb(
                  G(J(5), n.translate(0, 2).scale(5, 7, 5).skewY(8), Y(0.2, 0.4, 0.5, 0.5)),
                  G(J(5), n.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), Y(0.25, 0.35, 0.5, 0.5)),
                  G(J(5), n.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), Y(0.35, 0.3, 0.5, 0.5)),
                ),
                G(J(5), n.scale(4, 8, 4), Y(0.2, 0.4, 0.5, 0.5)),
                G(J(5), n.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Y(0.2, 0.4, 0.5, 0.5)),
              ),
              n.translate(-38.9, -11.3, 17),
            );
            xb(n.translate(-39.1, -0.6, 17).rotate(11), ...fb(15).map(({ x: p, z: q }) => [3 * p, 3 * q, 1.2]));
          }),
          Ha.map(({ x: f, z: p }) => {
            U(J(14, 1), n.translate(9 * f - 38.9, -7.3, 11 * p + 17).scale(1, 4), Y(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(q =>
              U(
                J(17, 1),
                n.translate(9 * f - 38.9, -7.3, 11 * p + 17).translate(0, q - 4).scale(1.5, 0.5, 1.5),
                Y(0.6, 0.6, 0.6, 0.3),
              )
            );
          }),
          U(
            N(
              sb(
                G(J(6), n.translate(0, 0, -36).scale(15, 1.2, 15), Y(0.7, 0.7, 0.7, 0.3)),
                G(J(), n.translate(0, 0, -18).scale(4, 1.2, 6), Y(0.45, 0.4, 0.6, 0.3)),
              ),
              ...r(6, f =>
                r(6, p =>
                  G(
                    J(6),
                    n.translate(4.6 * p - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * p)).scale(2, 5, 2),
                    Y(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            n.translate(-38.9, -11.3, 17),
          ),
          xb(n.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          U(J(5), n.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), Y(0.8, 0.1, 0.25, 0.4)),
          wb(n.translate(-84, -0.5, 85).rotate(0, 45)),
          P(f => {
            f.h = () => t(-123, 1.4, 55 + -65 * na);
            U(z);
            wb(n.translate(0, -3, -4).rotate(0, 180));
          }),
          N(
            G(J(), n.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), Y(0.25, 0.25, 0.35, 0.3)),
            G(J(3), n.translate(0, 0, -5.5).scale(3, 2), Y(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(f => G(J(), n.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), Y(0.7, 0.2, 0, 0.3))),
          ));
      P(f => {
        f.h = () => n.translate(0, -2, Ua(h[10].g, h[11].g) * Math.abs(Math.sin(1.1 * a)) * -8.5 + 10);
        r(2, p => U(K, n.translate(9 * p - 110 + (1 & p), 1.7, -12)));
      });
      P(f => {
        f.h = () => n.translate(0, -2, Ua(h[10].g, h[11].g) * Math.abs(Math.sin(2.1 * a)) * -8.5 + 10);
        r(2, p => U(K, n.translate(9 * (p + 2) - 110 + (1 & p), 1.7, -12)));
      });
      P(f => {
        f.h = () =>
          n.translate(
            0,
            -2,
            -8.5 * Sa((1 - h[10].g) * (1 - Ua(h[10].g, h[11].g)), Ua(h[10].g, h[11].g) * Math.abs(Math.sin(1.5 * a)))
              + 10,
          );
        r(3, p => U(K, n.translate(9 * p - 106, 1.7, -12)));
      });
      U(
        N(
          sb(
            G(J(), n.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
            G(J(), n.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),
          ),
          ...r(4, f => G(J(), n.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9))),
          ...r(3, f => G(J(), n.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        n.translate(-123, 0, -12),
        Y(0.5, 0.5, 0.6, 0.2),
      );
      wb(n.translate(-116, -1.4, -18).rotate(0, 180));
      U(J(), n.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Y(0.8, 0.8, 0.8, 0.2));
      U(J(6), n.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), Y(0.6, 0.5, 0.7, 0.2));
      U(J(), n.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), Y(0.6, 0.6, 0.6, 0.3));
      U(J(8), n.translate(-114, -17, -2).scale(2, 15, 2), Y(0.6, 0.6, 0.6, 0.3));
      U(J(8), n.translate(-79, -17, -2).scale(2, 15, 2), Y(1, 1, 1, 0.3));
      U(J(), n.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), Y(0.6, 0.6, 0.6, 0.3));
      r(3, f => {
        U(x(16), n.translate(12 * f - 109, -9, -12), Y(0.6, 0.6, 0.6, 0.3));
        U(x(16), n.translate(-77, -9, -12 * f - 20).rotate(0, 90), Y(0.6, 0.6, 0.6, 0.3));
      });
      U(N(
        G(J(12), n.translate(-77, -14.5, -12).scale(4, 17.5, 4), Y(0.7, 0.7, 0.7, 0.2)),
        G(J(), n.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), Y(0.4, 0.5, 0.6, 0.2)),
        G(J(), n.translate(-77, 0.1, -14).scale(1.5, 2, 2), Y(0.4, 0.5, 0.6, 0.2)),
        G(J(12), n.translate(-77, 3.1, -12).scale(3, 5, 3), Y(0.4, 0.5, 0.6, 0.2)),
      ));
      U(J(), n.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), Y(0.6, 0.6, 0.6, 0.3));
      U(J(9), n.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), Y(0.5, 0.5, 0.5, 0.3));
      U(N(
        G(J(), n.translate(-93, -5.8, -40).scale(9, 1, 5), Y(0.8, 0.8, 0.8, 0.1)),
        G(J(9), n.translate(-98, -5.8, -40).scale(3, 8, 3), Y(0.7, 0.7, 0.7, 0.2)),
      ));
      wb(n.translate(-98, -4.4, -40).rotate(0, 90));
      xb(n.translate(-115, 0.2, -12), [0, 0, 3.5]);
      xb(n.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      U(N(
        sb(
          G(J(6, 0, 0, 0.6), n.translate(-100, 0.7, 105.5).scale(8, 1, 11), Y(0.7, 0.7, 0.7, 0.2)),
          G(J(), n.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), Y(0.7, 0.7, 0.7, 0.2)),
        ),
        G(J(5), n.translate(-100, 0.7, 113).scale(4, 3, 4), Y(0.7, 0.7, 0.7, 0.2)),
      ));
      r(4, f =>
        P(p => {
          p.h = () => {
            const q = Ua(h[8].i, h[12].i);
            return n.translate(
              (2 < f ? 2 * (1 - q) + q : 0) - 100,
              q * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7,
              115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7
                + (0.05 < q ? q : 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),
            );
          };
          U(
            J(6),
            n.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5),
            Y(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),
          );
        }));
      P(f => {
        f.h = () => {
          const p = Ua(h[8].i, h[12].i);
          return n.translate(2.5 * (1 - p) - 139.7, -3 * (1 - h[8].g) + p * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
            .rotateSelf(Math.cos(1.3 * a) * (3 * p + 3), 0);
        };
        U(N(G(J(10), n.scale(6, 2, 6), Y(0.1, 0.6, 0.5, 0.3)), G(J(10), n.scale(3.3, 6, 3.3), Y(0.1, 0.6, 0.5, 0.5))));
        U(J(15, 1), n.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), Y(0.4, 0.4, 0.4, 0.3));
        U(J(10), n.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), Y(0.3, 0.8, 0.7, 0.3));
        U(J(5), n.translate(-7.5).rotate(0, 90).scale(1, 3), Y(0.5, 0.5, 0.5, 0.5));
        wb(n.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(p =>
          U(m, n.rotate(90 * -p, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), Y(1, 1, 0.8, 0.2))
        );
        xb(n.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        U(J(12, 1), n.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), Y(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(p =>
          U(J(15, 1), n.translate(-7.5 * f - 100, p + 0.7, 96).scale(1.1, 0.5, 1.1), Y(0.5, 0.24, 0.2, 0.4))
        );
        U(m, n.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), Y(1, 1, 0.8));
        U(
          N(
            G(J(), n.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), Y(0.5, 0.5, 0.5, 0.4)),
            G(J(), n.scale(3, 3, 10), Y(0.6, 0.24, 0.2, 0.5)),
            G(J(28, 1), n.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Y(0.6, 0.24, 0.2, 0.5)),
            G(J(5), n.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Y(0.6, 0.24, 0.2, 0.5)),
            G(J(5), n.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), Y(0.6, 0.24, 0.2, 0.5)),
          ),
          n.translate(f - 100, 0.7, 97),
        );
      });
      P(f => {
        f.h = () => n.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        U(B);
      });
      U(N(
        G(J(), n.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), Y(0.7, 0.7, 0.7, 0.1)),
        G(J(45, 1), n.translate(-81, 0.7, 106).scale3d(7.7), Y(0.7, 0.7, 0.7, 0.1)),
      ));
      P(f => {
        f.h = () => n.translate(-81, 0.6, 106).rotate(0, 40 + ha);
        U(N(
          G(J(45, 1), n.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)),
          G(J(), n.translate(0, 0, -5.5).scale(1.5, 3, 2.7), Y(0.45, 0.45, 0.45, 0.2)),
        ));
        U(J(8), n.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), Y(0.7, 0.7, 0.7, 0.1));
        U(J(5), n.translate(0, 2).scale(1, 2), Y(0.3, 0.3, 0.3, 0.2));
        xb(n.translate(0, 3), ...fb(14).map(({ x: p, z: q }) => [5.6 * p, 5.6 * q, 2]));
      });
      P(f => {
        f.h = () => n.translate(-65.8, 0.8, 106).rotate(0, ia);
        [-1, 1].map(p =>
          U(m, n.rotate(0, 90).translate(-5 * p, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * p + 90), Y(1, 1, 0.8))
        );
        U(N(
          G(J(28, 1), n.translate(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3)),
          G(J(), n.scale(9, 5, 2), Y(0.3, 0, 0, 0.3)),
        ));
        U(G(J(28, 1), n.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)));
        U(G(J(5), n.translate(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2)));
      });
      P(f => {
        f.h = () => n.translate(-50.7, 0.8, 106).rotate(0, 180 - ia);
        U(N(
          G(J(28, 1), n.translate(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3)),
          G(J(), n.translate(7).scale(9, 5, 2), Y(0.3, 0, 0, 0.3)),
          G(J(), n.translate(0, 0, 7).scale(2, 5, 9), Y(0.3, 0, 0, 0.3)),
        ));
        U(G(J(28, 1), n.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)));
        U(G(J(5), n.translate(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2)));
      });
      P(f => {
        f.h = () => n.translate(-50.7, 0.8, 91).rotate(0, 270 + ia);
        U(N(
          G(J(28, 1), n.translate(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3)),
          G(J(), n.translate(7).scale(9, 5, 2), Y(0.3, 0, 0, 0.3)),
          G(J(), n.translate(0, 0, -7).scale(2, 5, 9), Y(0.3, 0, 0, 0.3)),
        ));
        U(G(J(28, 1), n.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)));
        U(G(J(5), n.translate(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2)));
      });
      U(J(), n.translate(-58, 1, 106).scale(2, 0.65, 2), Y(0.7, 0.7, 0.7, 0.2));
      U(J(), n.translate(-50.7, 1, 99).scale(2, 0.65, 1), Y(0.7, 0.7, 0.7, 0.2));
      U(J(), n.translate(-42, 0.4, 91).scale(5, 1, 2.5), Y(0.7, 0.7, 0.7, 0.3));
      U(J(), n.translate(-34.2, 0.4, 91).scale(3, 1, 3), Y(0.7, 0.7, 0.7, 0.3));
      wb(n.translate(-34, 2.7, 96).rotate(-12, 0));
      U(J(5), n.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), Y(0.2, 0.5, 0.5, 0.6));
      [Y(0.1, 0.55, 0.45, 0.2), Y(0.2, 0.5, 0.5, 0.3), Y(0.3, 0.45, 0.55, 0.4)].map((f, p) =>
        P(q => {
          q.h = () =>
            n.translate(
              0,
              (1 - h[13].i) * (1 - h[14].i) * (p ? 0 : 3) + Ua(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * p) * 4,
            );
          U(J(), n.translate(-23.5, 0.5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), f);
          2 === p && U(J(), n.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), Y(0.7, 0.7, 0.7, 0.3));
          1 === p
            && U(J(), n.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), Y(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(f => U(m, n.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), Y(1, 1, 0.8)));
      r(
        3,
        f =>
          U(
            x(24.7 - 0.7 * (1 & f)),
            n.translate(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)),
            1 & f ? Y(0.5, 0.5, 0.5, 0.3) : Y(0.35, 0.35, 0.35, 0.5),
          ),
      );
      U(N(
        G(J(6, 0, 0, 0.3), n.translate(0, -0.92, 95).scale(14, 2, 14), Y(0.8, 0.8, 0.8, 0.2)),
        G(J(5), n.translate(0, 0, 95).scale3d(6), Y(0.3, 0.3, 0.3, 0.5)),
      ));
      wb(n.translate(0, 1.7, 82).rotate(0, 180));
      U(J(5), n.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Y(0.5, 0.3, 0.3, 0.4));
      U(J(6), n.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Y(0.5, 0.6, 0.7, 0.3));
      U(J(), n.translate(0, 16, 129).scale(1.5, 1, 2), Y(0.5, 0.6, 0.7, 0.3));
      U(J(7), n.translate(0, 16.2, 133).scale(5, 1, 5), Y(0.4, 0.5, 0.6, 0.4));
      U(N(
        sb(
          G(J(), n.translate(0, 16, 110.5).scale(12, 1, 3), Y(0.5, 0.3, 0.3, 0.4)),
          G(J(), n.translate(0, 16, 111).scale(3, 1, 3.8), Y(0.5, 0.3, 0.3, 0.4)),
        ),
        G(J(5), n.translate(0, 16, 103.5).scale(5.5, 5, 5.5), Y(0.5, 0.3, 0.3, 0.4)),
      ));
      P(f => {
        f.h = () => {
          const p = Math.sin(a);
          return n.translate(-2 * p).rotate(25 * p);
        };
        U(J(3), n.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), Y(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(p => {
          U(J(6), n.translate(0, 16, p + 95).scale(3, 1, 2.3).rotate(0, 90), Y(0.7, 0.7, 0.7, 0.4));
          U(J(), n.translate(0, 6.2, p + 95).scale(0.5, 11, 0.5), Y(0.5, 0.3, 0.3, 0.4));
        });
      });
      P(f => {
        f.h = () => {
          const p = Ua(Ua((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2);
          return n.translate(0, 16 * p, 8.5 * u(2 * p - 1) + 95);
        };
        U(J(5), n.scale(5, 1.1, 5), Y(0.5, 0.3, 0.3, 0.4));
        U(J(5), n.scale(5.5, 0.9, 5.5), Y(0.25, 0.25, 0.25, 0.4));
        wb(n.translate(0, 1.5, -1).rotate(0, 180));
      });
      xb(n.translate(0, 3, 95), ...fb(9).map(({ x: f, z: p }) => [9 * f, 9 * p, 4]));
      xb(n.translate(0, 19, 134), [0, 0, 3.5]);
    });
    P(() => {
      [0, 180].map(t => U(m, n.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), Y(1, 1, 0.8)));
      U(hb(20), n.translate(0, 1).scale(0.5, 0.5, 0.5), Y(1, 0.3, 0.4));
      const k = G(
        N(J(15, 1), G(J(), n.translate(0, 0, 1).scale(2, 2, 0.5))),
        n.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        Y(0.3, 0.3, 0.3),
      );
      [-1, 1].map(t => U(k, n.translate(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      U(J(), n.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), Y(0.3, 0.3, 0.3));
      U(hb(20), n.scale(0.7, 0.8, 0.55), Y(1, 0.3, 0.4));
    });
    [-1, 1].map(k =>
      P(() => {
        U(J(10, 1), n.translate(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), Y(1, 0.3, 0.4));
      })
    );
    P(() => {
      U(J(6, 1), n.scale(0.13, 1.4, 0.13), Y(0.3, 0.3, 0.5, 0.1));
      U(J(10), n.translate(0, 1).scale(0.21, 0.3, 0.21), Y(1, 0.5, 0.2));
      U(J(3), n.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), Y(0.2, 0.2, 0.2, 0.1));
    }, 0);
    P(() => {
      U(J(6).slice(0, -1), n.scale(0.77, 1, 0.77), Y(1, 0.3, 0.5));
    }, 0);
    P(() => {
      U(
        hb(30, 24, (k, t, x) => {
          const v = t / 24, z = k * Math.PI * 2 / 30, B = v ** 0.6 * Math.PI / 2;
          k = v * v * Math.sin(k * Math.PI * 14 / 30) / 4;
          return 23 === t
            ? { x: x.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(z) * Math.sin(B),
              y: Math.cos(v * Math.PI) - v - k,
              z: Math.sin(z) * Math.sin(B) + Math.sin(k * Math.PI * 2) / 4,
            };
        }),
        n.scale3d(0.7),
        Y(1, 1, 1),
      );
      [-1, 1].map(k => U(hb(12), n.translate(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h4 id=\"h4\">loading</h4>\n    <b id=\"b5\">☰</b>\n    <h3 id=\"h3\"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n",
);
