let ba = 0,
  ca = 0,
  a = 0,
  ea = 0,
  ha = 0,
  ia = 0,
  ja = 0,
  ka = 0,
  la = 0,
  na = 0,
  oa = 0,
  pa = 0,
  e = 0.066,
  ra = 1,
  sa,
  ta,
  ua,
  va,
  wa;
const xa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  f = [],
  k = [],
  ya = [],
  za = [],
  Ca = [[
    69,
    128,
    0,
    143,
    128,
    0,
    0,
    196,
    100,
    36,
    0,
    0,
    149,
    110,
    31,
    47,
    3,
    56,
    2,
    0,
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
  ], [
    100,
    128,
    0,
    201,
    128,
    0,
    0,
    100,
    144,
    35,
    0,
    6,
    135,
    0,
    32,
    147,
    6,
    0,
    6,
    195,
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
  ], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
    "9(((9(((9(((9(((9(((9(((9(((9",
    "9(((Q(((Q(((Q",
  ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
    "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
    "9(9(9(9(9(999(9(((((Q",
  ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
    "((((Q(((((((Q(((((((Q(((((((Q",
    "Q((Q((Q((Q((Q((Q((((Q",
  ]]],
  m = { x: 0, y: 0, z: 0 };
var Da = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180,
  r = new DOMMatrix(),
  La = new Float32Array(16),
  Ma = new Float32Array(624),
  v = (c, b) => Array.from(Array(c), (g, l) => b(l)),
  Na = c => 4 < c ? 4 : c,
  Pa = (c, b) => b < c ? c : b,
  Qa = c => 0 > c ? -c : c,
  Ra = c => 0 > c ? 0 : 1 < c ? 1 : c,
  Sa = (c, b, g) => c + (b - c) * (0 > g ? 0 : 1 < g ? 1 : g),
  Ta = (c, b) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > b ? 0 : 1 < b ? 1 : b)),
  Ua = c => Math.atan2(Math.sin(c *= Ka), Math.cos(c)) / Ka,
  Va = (c, b, g) =>
    ((c *= Ka) + (2 * (b = (b * Ka - c) % (2 * Math.PI)) % (2 * Math.PI) - b) * (0 > g ? 0 : 1 < g ? 1 : g)) / Ka,
  Wa = ({ x: c, y: b, z: g }) => Math.hypot(c - m.x, b - m.y, g - m.z),
  Xa = ({ x: c, y: b, z: g }, l) => c * l.x + b * l.y + g * l.z,
  Ya = c => {
    let b = 0, g = 0, l = 0, n, h = c.at(-1);
    for (n of c) {
      b += (h.y - n.y) * (h.z + n.z), g += (h.z - n.z) * (h.x + n.x), l += (h.x - n.x) * (h.y + n.y), h = n;
    }
    return n = Math.hypot(b, g, l), b /= n, g /= n, l /= n, { x: b, y: g, z: l, w: b * h.x + g * h.y + l * h.z };
  },
  Za = (
    c,
    b = La,
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
  $a = (c, b, g, l) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0],
  ab = (c, b, g) => (c.D = g, c.A = b, c),
  bb = (c, b, g = c.A) =>
    ab(
      c.map(l => {
        let n, h;
        return { x: l, y: n, z: h } = l,
          { x: l, y: n, z: h } = b.transformPoint({ x: l, y: n, z: h }),
          { x: l, y: n, z: h };
      }),
      g,
      c.D,
    ),
  F = (c, b, g) => c.map(l => bb(l, b, g)),
  cb = (c, b = 0) =>
    v(c, g => {
      const l = Math.cos(2 * Math.PI * g / c);
      return { x: Math.sin(2 * Math.PI * g / c), y: 0, z: 0.01 > (0 > l ? -l : l) ? l : 0 > l ? l - b : l + b };
    }),
  db = (c, b, g) =>
    c.map((l, n, { length: h }) => ab([l, b[h - n - 1], b[h - (n + 1) % h - 1], c[(n + 1) % h]], c.A, g)),
  H = (
    c,
    b,
    g = 0,
    l,
  ) => (c = c ? cb(c, l) : xa,
    l = bb(c, r.translate(0, 1).scale3d(0 < g ? g : 1)),
    c = bb(c, r.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...db(c, l, b), l, c]),
  gb = (
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
      for (let h = 0; b > h; h++) {
        const u = ab([], 0, 1);
        l.push(u);
        u.push(g(n, h, u));
        h && u.push(g((n + 1) % c, h, u));
        b - 1 > h && u.push(g((n + 1) % c, h + 1 % b, u));
        u.push(g(n, h + 1 % b, u));
      }
    }
    return l;
  },
  hb = (c, b) => {
    var g, l, n, h = b.C;
    for (var u = 0; h.length > u; ++u) {
      if (-0.00008 > (g = Xa(c, h[u]) - c.w) ? n = b : 8e-5 < g && (l = b), n && l) {
        l = [];
        n = [];
        h = b.C;
        u = b.B;
        let y = h.at(-1), w = Xa(c, y) - c.w;
        for (const A of h) {
          g = Xa(c, A) - c.w,
            8e-5 > w && n.push(y),
            -0.00008 < w && l.push(y),
            (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g)
            && (w /= g - w,
              y = { x: y.x + (y.x - A.x) * w, y: y.y + (y.y - A.y) * w, z: y.z + (y.z - A.z) * w },
              l.push(y),
              n.push(y)),
            y = A,
            w = g;
        }
        return {
          o: 2 < l.length && { C: ab(l, h.A, h.D), B: u, u: b },
          m: 2 < n.length && { C: ab(n, h.A, h.D), B: u, u: b },
        };
      }
    }
    return { o: l, m: n };
  },
  ib = (c, b, g = Ya(b.C)) => {
    let l, n, h;
    return c
      ? ({ o: l, m: n } = hb(c, b), l || n || c.s.push(b), l && (c.o = ib(c.o, l, g)), n && (c.m = ib(c.m, n, g)))
      : ({ x: l, y: n, z: g, w: h } = g, c = { x: l, y: n, z: g, w: h, s: [b], o: 0, m: 0 }),
      c;
  },
  jb = (c, b, g) => {
    const l = [],
      n = (h, u) => {
        let { o: y, m: w } = hb(h, u);
        y || w || (0 < g * Xa(h, b) ? y = u : w = u);
        y && (h.o ? n(h.o, y) : l.push(y));
        w && h.m && n(h.m, w);
      };
    for (const h of b.s) {
      n(c, h);
    }
    return l;
  },
  kb = (c, b) => c && (b(c), kb(c.o, b), kb(c.m, b)),
  nb = c => c.length ? c.reduce((b, g) => ib(b, { C: g, B: 0, u: 0 }), 0) : c,
  ob = c => (kb(c, b => {
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
  pb = (...c) =>
    c.reduce((b, g) => {
      const l = [];
      if (b = nb(b), g) {
        g = nb(g);
        kb(b, n => n.s = jb(g, n, 1));
        kb(g, n => l.push([n, jb(b, n, -1)]));
        for (let [n, h] of l) {
          for (const u of h) {
            ib(b, u, n);
          }
        }
      }
      return b;
    }),
  M = (...c) => {
    let b;
    const g = new Map(),
      l = new Map(),
      n = h => {
        let u;
        return h.u && ((u = g.get(h.u)) ? (l.delete(u), h = n(h.u)) : g.set(h.u, h)), h;
      };
    return [c, ...b] = [...c],
      c = ob(pb(ob(nb(c)), ...b)),
      kb(c, h => {
        for (const u of h.s) {
          l.set(n(u), u.B);
        }
      }),
      Array.from(l, ([{ C: h }, u]) => {
        const y = h.map(({ x: w, y: A, z: D }) => ({ x: w, y: A, z: D }));
        return ab(u ? y.reverse() : y, h.A, h.D);
      });
  },
  P = (c, b, g) => c + (b - c) * Ra(1 - Math.exp(-g * e)),
  qb = () => {
    const c = Ta(k[12].g, k[13].g);
    ja = Sa(P(ja, 0, 1), Ua(ja + 60 * e), k[5].g - k[6].i);
    ha = Sa(P(ha, 0, 5), Ua(ha + 56 * e), c);
    ia = Sa(P(ia, 0, 4), Ua(ia + 48 * e), c);
    na = P(na, k[9].i, 0.2 + 0.3 * Qa(2 * k[9].i - 1));
    la = P(la, ka ? la + (-9 - la) * Ra(1.5 * e) : Ra(a / 3), 1);
    ra && a > ra && (ra = 0, h4.innerHTML = "");
    k[0].l && 0.8 < k[0].g && (13 > ba
      ? (1 / 0 > ra && (ra = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), k[0].l = 0)
      : ka
        || (1 / 0 > ra && (ra = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ka = 1));
    for (const b of f) {
      b.h && (b.j = b.h());
    }
    for (const b of k) {
      b.h();
    }
    for (const b of ya) {
      b.h();
    }
  },
  rb = () => {
    h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ba = ya.reduce((c, { l: b }) => c + b, 0)];
  },
  sb = () => {
    localStorage.DanteSP22 = JSON.stringify([k.map(({ l: c }) => c), ya.map(({ l: c }) => c), ea, a, na]);
  },
  R = (c, b = 1) => {
    const g = ua;
    b = { j: r, H: f.length, G: b, s: [] };
    return f.push(ua = b), c(b), ua = g, b;
  },
  T = (c, b = r, g) => ua.s.push(...F(c, b, g)),
  tb = c => {
    const b = ua,
      g = k.length,
      l = {
        l: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const n = l.l, h = l.g, u = l.i, y = b.j.multiply(c);
          l.I = y;
          3 > Wa(y.transformPoint()) && za[5] && (0.3 > h || 0.7 < h)
            && (l.l = n ? 0 : 1, g && 1 / 0 > ra && (ra = a + 1, h4.innerHTML = "* click *"), ea = g, sb());
          l.g = P(h, n, 4);
          l.i = P(u, n, 1);
          l.j = y.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    k.push(l);
    T(H(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
    T(H(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
    T(H(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), V(0.5, 0.5, 0.4));
  },
  ub = (c, ...b) => {
    let g = -1, l = 0, n = 0, h = 0, u = 0, y = 0, w = 1, A = 3;
    const D = {
        l: 0,
        h() {
          if (!D.l) {
            let Aa, X, S, U, G, x, L = 1, I = 1 / 0, N;
            for (const Q of d) {
              var { x: J, z: K, w: O } = Q;
              K = (J = Math.hypot(q - J, t - K)) - O;
              N ||= J < O;
              0 < K && I > K && (I = K, p = Q);
              var da = J / O;
              L = L < da ? L : da;
            }
            N
              || ({ x: Aa, z: X, w: S } = p,
                U = q - Aa,
                G = t - X,
                x = Math.hypot(U, G),
                aa = Math.atan2(-G, U),
                w && (n = (Math.random() - 0.5) * Math.PI / 2, A = Pa(1, A / (1 + Math.random()))),
                aa += n,
                g = -Math.cos(aa),
                l = Math.sin(aa),
                0.1 < x && (x = (x < S ? x : S) / (x || 1), q = U * x + Aa, t = G * x + X));
            w = N;
            A = P(A, 3 + 6 * (1 - L), 3 + L);
            z = P(z, q = P(q, q + g, A), A);
            E = P(E, t = P(t, t + l, A), A);
            h = Va(h, Math.atan2(z - u, E - y) / Ka - 180, 3 * e);
            u = z;
            y = E;
            var aa = (D.j = B.j.multiply(c.translate(z, 0, E).rotateSelf(0, h, 7 * Math.sin(1.7 * a))))
              .transformPoint();
            1.55 > Wa(aa)
              && (D.l = 1,
                da = [
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
                ][ba] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > ra && (ra = a + (ba && 12 > ba ? 5 : 7), h4.innerHTML = da),
                rb(),
                sb());
          }
          D.l
            && (D.j = f[2].j.translate(
              C % 4 * 1.2 - 1.7 + Math.sin(a + C) / 7,
              -2,
              1.7 * (C / 4 | 0) - 5.5 + Qa(C % 4 - 2) + Math.cos(a / 1.5 + C) / 6,
            ));
        },
      },
      B = ua,
      C = ya.length,
      d = b.map(([J, K, O]) => ({ x: J, z: K, w: O }));
    let p = d[0], { x: q, z: t } = p, z = q, E = t;
    ya.push(D);
  },
  vb = (c, b, g, l) => {
    let n = 0, h = 0, u = 0, y = 1 / 0, w = -1 / 0, A = 1 / 0, D = -1 / 0, B = 1 / 0, C = -1 / 0;
    const d = 1.1 * (g - b),
      p = (new DOMMatrix($a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
    return b = v(
      8,
      q => (q = p.transformPoint({ x: 4 & q ? 1 : -1, y: 2 & q ? 1 : -1, z: 1 & q ? 1 : -1 }),
        n -= q.x = (d * q.x | 0) / d / q.w,
        h -= q.y = (d * q.y | 0) / d / q.w,
        u -= q.z = (d * q.z | 0) / d / q.w,
        q),
    ),
      g = r.rotate(298, 139).translateSelf(n / 8, h / 8, u / 8),
      bb(b, g).map(({ x: q, y: t, z }) => {
        y = y < q ? y : q;
        w = q < w ? w : q;
        A = A < t ? A : t;
        D = t < D ? D : t;
        B = B < z ? B : z;
        C = z < C ? C : z;
      }),
      B *= 0 > B ? l : 1 / l,
      C *= 0 < C ? l : 1 / l,
      r.scale(2 / (w - y), 2 / (D - A), 2 / (B - C)).translateSelf((w + y) / -2, (D + A) / -2, (B + C) / 2)
        .multiplySelf(g);
  },
  yb = () => {
    let c = !0, b, g, l, n, h, u, y, w, A, D, B, C;
    const d = () => {
        sa || !c ? wb.disconnect() : wb.connect(xb.destination);
        b4.innerHTML = "Music: " + c;
      },
      p = (q = !1) => {
        if (sa !== q) {
          sa = q;
          try {
            q
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : wb.start();
          } catch {
          }
          va = 0;
          document.body.className = q ? "l m" : "l";
          d();
          rb();
        }
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      p();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      p();
      va = 1;
    };
    b4.onclick = () => {
      c = !c;
      d();
    };
    b5.onclick = () => p(!0);
    onclick = q => {
      C = 1;
      sa || (q.target === hC && (za[5] = !0), va && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: q, target: t, type: z, repeat: E }) => {
      E || ((E = !!z[5] && t === document.body) && ("Escape" === q || "Enter" === q && sa)
        ? sa && !C || p(!sa)
        : 5
            === (z = {
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
        ? E && (za[z] = 1)
        : za[z] = E);
    };
    onmousemove = ({ movementX: q, movementY: t }) => {
      va && (q || t) && (Ja += 0.1 * q, Ia += 0.1 * t);
    };
    hC.ontouchstart = q => {
      if (!sa) {
        for (let { pageX: t, pageY: z, identifier: E } of q.changedTouches) {
          va && t > hC.clientWidth / 2
            ? void 0 === w && (A = 0, u = t, y = z, w = E, D = Ja, B = Ia)
            : void 0 === n && (h = 0, g = t, l = z, n = E);
        }
        b = ca;
      }
    };
    hC.ontouchmove = q => {
      if (!sa) {
        for (let { pageX: O, pageY: da, identifier: aa } of q.changedTouches) {
          var t, z, E, J, K;
          w === aa && (Ja = D + (O - u) / 2.3, Ia = B + (da - y) / 2.3, A = 1);
          n === aa
            && (aa = (g - O) / 20,
              t = (l - da) / 20,
              z = 0 > aa ? -aa : aa,
              E = 0 > t ? -t : t,
              J = Math.atan2(t, aa),
              K = Ra(Math.hypot(t, aa) - 0.5),
              oa = 0.2 < z ? Math.cos(J) * K : 0,
              pa = 0.2 < E ? Math.sin(J) * K : 0,
              (oa || pa) && (h = 1),
              2 < z && (g = O + 20 * Math.sign(aa)),
              2 < E && (l = da + 20 * Math.sign(t)));
        }
      }
    };
    hC.ontouchend = q => {
      let t;
      q.preventDefault();
      for (const z of q.changedTouches) {
        z.identifier === w
          ? (w = void 0, A || (t = 1), A = 0)
          : z.identifier === n
          ? (n = void 0, pa = oa = 0, h || (t = 1), h = 0)
          : t = 1;
      }
      t && q.target === hC && b && 0.02 < (q = ca - b) && 0.7 > q && (za[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      za.length = oa = pa = 0;
      n = w = void 0;
      document.hidden && p(!0);
    })();
    p(!0);
  },
  zb = () => {
    let c = 0, b = 0, g = 0, l = 0, n = 0, h = 2, u = !1, y, w, A, D, B, C, d, p, q, t, z, E;
    const J = { x: 0, y: 0, z: 0 },
      K = new Int32Array(256),
      O = new Uint8Array(65536),
      da = () => {
        c = b = k[ea].u.H || 1;
        w =
          C =
          B =
          A =
          D =
            0;
        h = 2;
      },
      aa = () => {
        for (let X = 32; 128 > X; X += 2) {
          let S = 0, U = 0, G = 0, x = 0;
          const L = 512 * X;
          for (let I = 1 & X; 128 > I; I += 2) {
            const N = L + 4 * I;
            let Q = L + 4 * (127 - I);
            const Y = O[N] / 255, fa = O[1 + Q] / 255, ma = 1 - Qa(I / 63.5 - 1);
            10 < I && 118 > I && (S = Pa(S, Pa(Y * ma, Y * O[Q] / 255)), U = Pa(U, Pa(fa * ma, fa * O[1 + N] / 255)));
            (54 > I || 74 < I) && 1e-3 < (Q = (1 - ma) * (fa < Y ? Y : fa) / 3)
              && (64 > I && Q > G ? G = Q : 64 < I && Q > x && (x = Q));
          }
          Qa(x - G) > (0 > p ? -p : p) && (p = x - G);
          Qa(U - S) > (0 > q ? -q : q) && (q = U - S);
        }
      },
      Aa = () => {
        let X = 0, S = 0, U = 0, G = 0;
        K.fill(0);
        for (let L = 0; 31 > L; ++L) {
          let I = 0;
          const N = 512 * L;
          for (let Q = 0; 128 > Q; Q++) {
            var x = N + 4 * Q;
            let Y = (O[x] + O[1 + x]) / 255;
            x = O[2 + x];
            14 < Q && 114 > Q && (I += Y);
            x && Y && (Y = K[x] + 1, K[x] = Y, X > Y || (X = Y, S = x));
          }
          3 > I && 5 < L && (G += L / 32);
          3 < I && (7 < L && (U += L / 15), w = 1);
        }
        S && (w = 1);
        h ? S && (h = 0, b = S) : b = S || c;
        c = S;
        A = P(A, w ? 6.5 : 8, 4);
        J.y += U / 41 - (w ? 1 : A) * G / 41 * A * e;
      };
    wa = () => {
      let X = oa + (za[0] ? 1 : 0) + (za[2] ? -1 : 0),
        S = pa + (za[1] ? 1 : 0) + (za[3] ? -1 : 0),
        U = navigator.getGamepads()[0];
      if (U) {
        const Y = U.buttons;
        var G = U.axes;
        (U = (x = fa => Y[fa]?.pressed || 0 < Y[fa]?.value)(1) || x(3) || x(2) || x(0)) !== u && (u = U) && (za[5] = 1);
        X += (0.2 < Qa(-G[0]) ? -G[0] : 0) + (x(14) ? 1 : 0) + (x(15) ? -1 : 0);
        S += (0.2 < Qa(-G[1]) ? -G[1] : 0) + (x(12) ? 1 : 0) + (x(13) ? -1 : 0);
        va && (0.3 < Qa(G[2]) && (Ja += 80 * G[2] * e), 0.3 < Qa(G[3]) && (Ia += 80 * G[3] * e));
      }
      U = Math.atan2(S, X);
      G = Ra(Math.hypot(S, X));
      0.05 > G && (G = 0);
      X = G * Math.cos(U);
      S = G * Math.sin(U);
      w = q = p = 0;
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, O);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(aa)();
      NO_INLINE(Aa)();
      var x = Ra(1 - 5 * Pa(0 > p ? -p : p, 0 > q ? -q : q)),
        L =
          (b || (p += B * x * e, q += C * x * e),
            B = P(B, 0, w ? 8 : 4),
            C = P(C, 0, w ? 8 : 4),
            D = P(D, w ? (X || S ? w ? 7 : 4 : 0) * x : 0, w ? 0.1 < x ? 10 : X || S ? 5 : 7 : 1),
            p += X * D * e,
            q += S * D * e,
            (I = (x = 1 === f[b].G && f[b].j || r).inverse()).m41 = 0,
            I.m42 = 0,
            I.m43 = 0,
            { x: p, z: q } = I.transformPoint({ x: p, z: q, w: 0 }),
            J.x += p,
            J.z += q,
            h && ({ x: I, y: L, z: N } = k[ea].I.transformPoint({ x: 0, y: 12, z: -2.5 }),
              1 < h
              && (h = 1, d = m.y = L),
              m.x = I,
              m.z = N),
            b !== y && (y = b, { x: L, y: I, z: N } = x.inverse().transformPoint(m), J.x = L, J.y = I, J.z = N),
            m.x),
        I = m.z,
        { x: N, y: x, z: Q } = x.transformPoint(J);
      m.x = N;
      m.y = x;
      m.z = Q;
      b && (B = (N - L) / e, C = (Q - I) / e);
      G && (g = 90 - U / Ka);
      l = Va(l, g, 8 * e);
      n += (G - n) * Ra(10 * e);
      d = Sa(P(d, x, 2), x, 8 * Qa(d - x));
      void 0 === t && (Da = t = N, Ga = (z = d = x) + 13, Ha = (E = Q) + -36);
      t = P(t, N, Na(Pa(0.4, Qa(t - N) - 1.5)));
      z = P(z, x, Na(Pa(0.4, Qa(z - x) - 2.2)));
      E = P(E, Q, Na(Pa(0.4, Qa(E - Q) - 1.5)));
      va
        ? (Da = P(Da, N, 666 * h + 18), Ga = P(Ga, d + 1.5, 666 * h + 18), Ha = P(Ha, Q, 666 * h + 18))
        : (Da = P(Da, t, 2),
          Ga = P(Ga, Pa(z + 13, 6), 2),
          Ha = P(Ha, E + -18, 2),
          L = Ha - E,
          1 < (0 > L ? -L : L)
          && (I = Da - t, Ja = 270 + Math.atan2(L, I) / Ka, Ia = 90 - Math.atan2(Math.hypot(L, I), Ga - z) / Ka));
      Ia = Pa(87 > Ia ? Ia : 87, -87);
      Ja = Ua(Ja);
      1 === b && (k[9].l = -15 > m.x && 0 > m.z ? 1 : 0);
      (-25 > m.x || 109 > m.z ? -25 : -9) > m.y && da();
      f[37].j = r.translate(m.x, d, m.z).rotateSelf(0, l);
      [38, 39].map((Y, fa) => {
        f[Y].j = f[37].j.translate(0, n * Ra(0.45 * Math.sin(9.1 * a + Math.PI * (fa - 1) - Math.PI / 2))).rotateSelf(
          n * Math.sin(9.1 * a + Math.PI * (fa - 1)) * 0.25 / Ka,
          0,
        );
      });
    };
    da();
  },
  Ab = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b),
  Fb = (c, b) => {
    const g = {}, l = Z.c1h();
    return Z.abz(l, c), Z.abz(l, Ab(b, 35632)), Z.l8l(l), n => n ? g[n] || (g[n] = Z.gan(l, n)) : Z.u7y(l);
  },
  Gb = (c, b, g, l) => {
    if (sa) {
      g = r.rotate(0, 40 * Math.sin(ca) - 70);
      for (var n of [37, 38, 39]) {
        Za(g, Ma, n - 1);
      }
      Z.uae(c, !1, Ma);
      Z.d97(4, f[39].F - f[37].v, 5123, 2 * f[37].v);
    } else {
      for (n = 0; f.length > n; ++n) {
        f[n].G && Za(f[n].j, Ma, n - 1);
      }
      Z.uae(c, !1, Ma);
      Z.d97(4, (b ? f[39].F : f[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        Za(ya[b].j, Ma, b);
      }
      for (b = 0; k.length > b; ++b) {
        Za(k[b].j, Ma, b + 13), l || (Ma[16 * (b + 13) + 15] = 1 - k[b].g);
      }
      Z.uae(c, !1, Ma);
      Z.das(4, f[g].F - f[g].v, 5123, 2 * f[g].v, 13);
      Z.das(4, f[40].F - f[40].v, 5123, 2 * f[40].v, k.length);
    }
  },
  Hb = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Ib = c => Math.sin(c * Math.PI * 2),
  Jb = c => 0.5 > c % 1 ? 1 : -1,
  Kb = c => c % 1 * 2 - 1,
  Lb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c,
  Sb = c => {
    let b = 0;
    const g = () => {
        const h = xb.createBuffer(2, 5362944, 44100);
        for (let u = 0; 2 > u; u++) {
          for (let y = u, w = h.getChannelData(u); 10725888 > y; y += 2) {
            w[y >> 1] = n[y] / 65536;
          }
        }
        wb.buffer = h;
        wb.loop = !0;
        Hb(c);
      },
      l = () => {
        let h, u = 0, [y, w, A, D, B, C, d, p, q, t, z, E, J, K, O, da, aa, Aa, X, S, U] = Ca[b];
        t = t * t * 4;
        for (const N of [5513, 4562, 3891]) {
          const Q = [];
          let Y = 0, fa = 0, ma, Oa, Bb;
          const Ba = new Int32Array(768 * N), Mb = 2 ** (E - 9) / N, Nb = Math.PI * 2 ** (aa - 8) / N, lb = X * N & -2;
          for (let eb = 0; 11 >= eb; ++eb) {
            for (
              let fb = 0, Cb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + eb];
              32 > fb;
              ++fb
            ) {
              const Db = (32 * eb + fb) * N;
              for (var G = 0; 4 > G; ++G) {
                if (ma = 0, Cb && (ma = U[Cb - 1].charCodeAt(fb + 32 * G) - 40, ma += 0 < ma ? 106 : 0), ma) {
                  var x;
                  if (!(x = Q[ma])) {
                    x = ma;
                    let W = void 0, qa = void 0;
                    var L = N, I = ma;
                    let Ob = 0, Pb = 0;
                    const Qb = 2 > b ? Kb : Ib, Rb = 2 > b ? 1 > b ? Jb : Lb : Ib, Eb = new Int32Array(p + q + t);
                    for (let Ea = 0, mb = 0; p + q + t > Ea; ++Ea, ++mb) {
                      let Fa = 1;
                      p > Ea ? Fa = Ea / p : p + q > Ea || (Fa = (1 - (Fa = (Ea - p - q) / t)) * 3 ** (-z / 16 * Fa));
                      0 > mb
                        || (mb -= 4 * L,
                          qa = 396e-5 * 2 ** ((I + w - 256) / 12),
                          W = 396e-5 * 2 ** ((I + B - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                      Eb[Ea] = 80
                          * (Qb(Ob += qa * Fa ** (A / 32)) * y + Rb(Pb += W * Fa ** (C / 32)) * D
                            + (d ? (2 * Math.random() - 1) * d : 0))
                          * Fa | 0;
                    }
                    x = Q[x] = Eb;
                  }
                  for (let W = 0, qa = 2 * Db; x.length > W; ++W, qa += 2) {
                    Ba[qa] += x[W];
                  }
                }
              }
              for (let W, qa = 0; N > qa; ++qa) {
                G = 0,
                  x = 2 * (Db + qa),
                  ((W = Ba[x]) || Bb)
                  && (Oa = 308e-5 * J,
                    1 !== b && 4 !== b || (Oa *= Math.sin(Mb * x * Math.PI * 2) * S / 512 + 0.5),
                    Oa = 1.5 * Math.sin(Oa),
                    Y += Oa * fa,
                    h = (1 - K / 255) * (W - fa) - Y,
                    fa += Oa * h,
                    W = 4 === b ? fa : 3 === b ? h : Y,
                    b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5),
                    W *= O / 32,
                    Bb = 1e-5 < W * W,
                    h = Math.sin(Nb * x) * da / 512 + 0.5,
                    G = W * (1 - h),
                    W *= h),
                  x < lb || (G += Ba[1 + x - lb]
                    * Aa / 255,
                    W += Ba[x - lb] * Aa / 255),
                  n[u + x] += Ba[x] = G,
                  ++x,
                  n[u + x] += Ba[x] = W;
              }
            }
          }
          u += Ba.length;
        }
        Hb(5 > ++b ? l : g);
      },
      n = new Int32Array(10725888);
    Hb(l);
  },
  Tb = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  V = NO_INLINE((c, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c),
  xb = new AudioContext(),
  wb = xb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Z) {
  Z[c[0] + [...c].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
Hb(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const l = q => {
            Z.f1s();
            requestAnimationFrame(l);
            t = (q - (ta || q)) / 1e3;
            sa ? (e = 0, za[5] = 0) : e = 0.066 < t ? 0.066 : t;
            a += e;
            ca += t;
            ta = q;
            0 < e && (qb(), wa(), za[5] = 0);
            var t = sa
              ? r.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ra(hC.clientWidth / 1e3))
              : r.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ga, -Ha);
            0 < e
              && (C(),
                Z.b6o(36160, u),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(C("b"), !1, Za(r.rotate(0, 180).invertSelf().translateSelf(-m.x, -m.y, 0.3 - m.z))),
                Gb(C("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(C("b"), !1, Za(r.translate(-m.x, -m.y, -m.z - 0.3))),
                Gb(C("c"), 0, 41, 0),
                Z.f1s());
            D();
            Z.b6o(36160, h);
            Z.v5y(0, 0, 2048, 2048);
            p[0](vb(t, 0.3, 55, 10));
            p[1](vb(t, 55, 177, 11));
            d();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            p[0]();
            p[1]();
            Z.uae(d("a"), !1, $a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
            Z.uae(d("b"), !1, Za(t));
            Z.ubu(d("k"), Da, Ga, Ha);
            Gb(d("c"), !va, 42, 0);
            B();
            Z.ubu(B("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ca);
            sa ? Z.ubu(B("k"), 0, 0, 0) : Z.ubu(B("k"), Da, Ga, Ha);
            Z.uae(B("b"), !1, Za(t.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, u);
            Z.f1s();
          },
          n = g,
          h = Z.c5w(),
          u = Z.c5w(),
          y = Z.c3z(),
          w = Z.c25(),
          A = Ab(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          D = Fb(
            Ab(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          B = Fb(
            Ab("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          C = Fb(
            A,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          d = Fb(
            A,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          p = (C(),
            Z.uae(C("a"), !1, $a(1.4, 0.59, 1e-4, 1)),
            B(),
            Z.ubh(B("q"), 3),
            d(),
            Z.ubh(d("q"), 3),
            v(2, q => {
              const t = new Float32Array(16), z = Z.c25(), E = d(q ? "j" : "i");
              return Z.ubh(d(q ? "h" : "g"), q),
                Z.b6o(36160, h),
                Z.d45([0]),
                Z.r9l(0),
                Z.a4v(33984 + q),
                Z.b9j(3553, z),
                Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                Z.t2z(3553, 10241, 9729),
                Z.t2z(3553, 10240, 9729),
                Z.t2z(3553, 34893, 515),
                Z.t2z(3553, 34892, 34894),
                Z.t2z(3553, 10243, 33071),
                Z.t2z(3553, 10242, 33071),
                J => {
                  J
                    ? (Za(J, t),
                      Z.uae(D("b"), !1, t),
                      Z.fas(36160, 36096, 3553, z, 0),
                      Z.c4s(256),
                      Gb(D("c"), !va, 42, 1))
                    : Z.uae(E, !1, t);
                };
            }));
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        Z.b6o(36160, u);
        Z.bb1(36161, y);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, y);
        Z.a4v(33987);
        Z.b9j(3553, w);
        Z.fas(36160, 36064, 3553, w, 0);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.a4v(33987);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        try {
          const [q, t, z, E, J] = JSON.parse(localStorage.DanteSP22);
          k.map((K, O) => K.g = K.i = K.l = O ? 0 | q[O] : 0);
          ya.map((K, O) => K.l = 0 | t[O]);
          ea = z;
          a = E;
          na = J;
        } catch {
        }
        la = 0 > ea ? 0 : 1 < ea ? 1 : ea;
        qb();
        NO_INLINE(zb)();
        requestAnimationFrame(l);
        NO_INLINE(yb)();
      }
    },
    g = new Image();
  g.onload = g.onerror = b;
  g.src = Tb;
  NO_INLINE(Sb)(() => {
    Hb(() => {
      const h = [],
        u = t => {
          let { x: z, y: E, z: J } = w[t], K = (q[0] = z, q[1] = E, q[2] = J, t = "" + (w.D ? p : d), C.get(t));
          return void 0 !== K
            ? (z = 3 * K, B[z] = (B[z++] + d[5]) / 2, B[z] = (B[z++] + d[6]) / 2, B[z] = (B[z] + d[7]) / 2)
            : (C.set(t, K = C.size), A.push(z, E, J, q[3]), D.push(d[4]), B.push(d[5], d[6], d[7])),
            K;
        };
      let y = 0, w;
      const A = [],
        D = [],
        B = [],
        C = new Map(),
        d = new Int32Array(8),
        p = new Int32Array(d.buffer, 0, 5),
        q = new Float32Array(d.buffer);
      for (const t of f) {
        for (w of (q[3] = 40 === t.H ? -14 : t.G && t.H, t.s)) {
          const { x: z, y: E, z: J } = Ya(w);
          d[4] = 0 | w.A;
          d[5] = 32767 * z;
          d[6] = 32767 * E;
          d[7] = 32767 * J;
          for (let K = 2, O = u(0), da = u(1); w.length > K; ++K) {
            h.push(O, da, da = u(K));
          }
        }
        t.s = null;
        t.v = y;
        t.F = y = h.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(A), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(D), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(h), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Hb(b);
    });
    const l = v(
        11,
        h => r.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),
      ),
      n = v(10, h => db(bb(cb(18), l[h]).reverse(), bb(cb(18), l[h + 1]), 1)).flat();
    R(() => T([xa.slice(1)], r.translate(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const h = (d, p, q) =>
          R(t => {
            t.h = () => r.translate(w() * Math.sin(3 * d + a * d) * p);
            xa.map(({ x: z, z: E }) => {
              T(H(11, 1), r.translate(4 * z, 4, q + 4 * E).scale(0.8, 3, 0.8), V(0.5, 0.3, 0.7, 0.6));
              T(H(), r.translate(4 * z, 7, q + 4 * E).scale(1, 0.3), V(0.5, 0.5, 0.5, 0.3));
            });
            T(M(
              F(H(), r.translate(0, 0, q).scale(5, 1, 5), V(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(z =>
                F(H(), r.translate(5 * z, 0.2, q).rotate(-30 * z).scale(4, 1, 2), V(0.8, 0.8, 0.8, 0.3))
              ),
            ));
            T(H(), r.translate(0, -3, q).scale(8, 2, 8), V(0.4, 0.4, 0.4, 0.3));
          }),
        u = (d, p, q) =>
          r.translate(d + Math.sin(a + 2) / 5, p + Math.sin(0.8 * a) / 3, q).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        y = d =>
          M(
            F(H(), r.translate(0, -d / 2).scale(6, d - 1, 2.2)),
            F(H(), r.translate(0, -d / 2 - 6).scale(4, d - 3, 4)),
            F(H(32, 1), r.translate(0, d / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        w = () => {
          var d = k[2].i, p = 1 - k[4].i;
          return d < p ? d : p;
        },
        A = M(
          F(H(20, 1, 1.15, 1), r.translate(0, -3).scale(3.5, 1, 3.5), V(0.7, 0.4, 0.25, 0.7)),
          F(H(20, 1, 1.3, 1), r.translate(0, -2.5).scale(2.6, 1, 3), V(0.7, 0.4, 0.25, 0.2)),
          F(H(), r.translate(4, -1.2).scale3d(2), V(0.7, 0.4, 0.25, 0.3)),
        ),
        D = v(7, d => F(H(6, 1), r.translate(4 * (d / 6 - 0.5), 3).scale(0.2, 3, 0.2), V(0.3, 0.3, 0.38))).flat(),
        B = (R(d => {
          d.h = () => u(-12, 4.2, 40 * la - 66);
          T(A);
          tb(r.translate(0, -3, 4));
        }),
          tb(r.translate(-5.4, 1.5, -19).rotate(0, -90)),
          ub(r.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          ub(
            r.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...cb(18).map(({ x: d, z: p }) => [7 * d, 10 * p, 4.5 - 2 * (0 > d ? -d : d)]),
          ),
          T(H(), r.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), V(0.8, 0.8, 0.8, 0.2)),
          xa.map(({ x: d, z: p }) => T(H(6), r.translate(3 * d, 3, 15 * p).scale(0.7, 4, 0.7), V(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(d => T(H(), r.translate(0, 0, d).scale(3, 1, 8), V(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((d, p) => {
            T(H(), r.translate(0, 6.3, d).scale(4, 0.3, 1), V(0.3, 0.3, 0.3, 0.4));
            T(H(), r.translate(0, 1, d).scale(3, 0.2, 0.35), V(0.5, 0.5, 0.5, 0.3));
            R(q => {
              q.h = () => r.translate(0, 0, d).scale(1, Ra(1.22 - k[p + 1].g), 1);
              T(D);
            });
          }),
          v(5, d =>
            v(2, p =>
              T(
                n,
                r.translate(18.5 * (p - 0.5), 0, 4.8 * d - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2),
                V(1, 1, 0.8, 0.2),
              ))),
          T(H(), r.translate(3, 1.5, -20).scale(0.5, 2, 5), V(0.7, 0.7, 0.7, 0.2)),
          T(H(), r.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), V(0.75, 0.75, 0.75, 0.2)),
          T(H(5), r.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), V(0.6, 0.3, 0.3, 0.4)),
          T(H(), r.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), V(0.8, 0.2, 0.2, 0.5)),
          T(M(
            pb(
              F(H(6, 0, 0, 0.3), r.translate(8, -3, -4).scale(13, 1, 13), V(0.7, 0.7, 0.7, 0.2)),
              F(H(6), r.translate(0, -8).scale(9, 8, 8), V(0.4, 0.2, 0.5, 0.5)),
              F(H(6, 0, 0, 0.3), r.translate(0, -0.92).scale(13, 2, 13), V(0.8, 0.8, 0.8, 0.2)),
            ),
            F(H(5), r.scale(5, 30, 5), V(0.4, 0.2, 0.6, 0.5)),
            F(H(5, 0, 1.5), r.translate(0, 1).scale(4.5, 0.3, 4.5), V(0.7, 0.5, 0.9, 0.2)),
            F(H(), r.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), V(0.5, 0.5, 0.5, 0.5)),
            F(H(6), r.translate(15, -1.5, 4).scale(3.5, 1, 3.5), V(0.5, 0.5, 0.5, 0.5)),
          )),
          R(d => {
            d.h = () =>
              r.translate(
                0,
                0.01 < k[3].g ? (5 * Math.cos(1.5 * a) + 2) * k[3].i * (1 - k[2].g) + -15 * (1 - k[3].g) : -500,
                0,
              );
            T(H(5), r.translate(0, -0.2).scale(5, 1, 5), V(0.6, 0.65, 0.7, 0.3));
            tb(r.translate(0, 1.2));
          }),
          tb(r.translate(15, -2, 4)),
          h(0.7, 12, 35),
          h(1, 8.2, 55),
          R(d => {
            d.h = () => r.translate(w() * Math.sin(a / 1.5 + 2) * 12);
            T(
              M(
                pb(
                  F(H(), r.scale(1.5, 1, 5), V(0.9, 0.9, 0.9, 0.2)),
                  F(H(6), r.scale(4, 1, 5), V(0.9, 0.9, 0.9, 0.2)),
                  F(H(), r.translate(0, -2).scale(2, 3.2, 1.9), V(0.3, 0.8, 0.5, 0.5)),
                  F(H(16, 1, 0, 4), r.scale(1, 1, 1.5).rotate(0, 90), V(0.9, 0.9, 0.9, 0.2)),
                ),
                F(H(), r.scale(1.3, 10, 1.3), V(0.2, 0.7, 0.4, 0.6)),
              ),
              r.translate(0, 0, 45),
            );
            ub(r.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          T(H(), r.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2)),
          R(d => {
            d.h = () => r.translate(9.8 * (1 - w()));
            T(H(3), r.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), V(0.3, 0.6, 0.6, 0.2));
            T(H(8), r.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), V(0.8, 0.8, 0.8, 0.2));
            T(H(), r.translate(-23, -3, 55).scale(5.2, 1.7, 3), V(0.5, 0.5, 0.5, 0.3));
            T(H(), r.translate(-23, -2.2, 62).scale(3, 1, 4), V(0.5, 0.5, 0.5, 0.3));
            tb(r.translate(-23, -0.5, 66.5));
          }),
          R(d => {
            d.h = () => r.translate(0, Ra(1 - 5 * w()) * Ta(k[4].g, k[5].g) * Math.sin(1.35 * a) * 4);
            T(H(), r.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), V(0.7, 0.7, 0.7, 0.2));
            T(
              M(F(H(), r.scale(3, 1.4, 2.7)), F(H(), r.scale(1.2, 8, 1.2))),
              r.translate(-33, -3, 55),
              V(0.7, 0.7, 0.7, 0.2),
            );
          }),
          R(d => {
            d.h = () => r.translate(0, 0, Ra(1 - 5 * w()) * Ta(k[4].g, k[5].g) * Math.sin(0.9 * a) * 8);
            T(M(
              F(H(), r.translate(-27, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2)),
              F(H(), r.translate(-27, -3, 55).scale(1, 3), V(0.9, 0.9, 0.9, 0.2)),
            ));
            T(H(), r.translate(-39, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2));
          }),
          R(d => {
            d.h = () => r.translate(0, -6.5 * k[4].i);
            T(H(6), r.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), V(0.7, 0.7, 0.7, 0.4));
          }),
          tb(r.translate(-55, -1.1, 46).rotate(0, 90)),
          T(H(6), r.translate(-61.3, -2.4, 49).scale(3, 1, 5), V(0.4, 0.6, 0.6, 0.3)),
          T(H(7), r.translate(-57, -2.6, 46).scale(4, 1, 4), V(0.8, 0.8, 0.8, 0.3)),
          [
            ...F(H(), r.translate(0, -3).scale(11, 1.4, 3), V(0.9, 0.9, 0.9, 0.2)),
            ...M(
              F(H(6), r.rotate(90).scale(6, 8, 6), V(0.3, 0.6, 0.6, 0.3)),
              F(H(4, 0, 0.01), r.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), V(0.3, 0.6, 0.6, 0.3)),
              F(H(6), r.rotate(90).scale(5, 12, 5), V(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(d =>
                F(H(5), r.translate(d, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), V(0.3, 0.6, 0.6, 0.3))
              ),
            ),
          ]),
        C = (T(B, r.translate(-53, 0, 55)),
          R(d => {
            d.h = () => r.translate(-75, (1 - k[5].i) * (1 - k[6].g) * 3, 55).rotate(180 * (1 - k[5].i) + ja, 0);
            T(B);
          }, 2),
          T(H(), r.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), V(0.7, 0.7, 0.7, 0.2)),
          T(H(3, 0, -0.5), r.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), V(0.8, 0.8, 0.8, 0.2)),
          T(M(
            pb(
              F(H(), r.translate(-100, -2.5, 55).scale(8, 1, 8), V(0.8, 0.8, 0.8, 0.2)),
              F(H(), r.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), V(0.8, 0.8, 0.8, 0.2)),
              F(H(), r.translate(-100, -2.6, 70).scale(3, 1.1, 7), V(0.8, 0.8, 0.8, 0.2)),
              F(H(), r.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), V(0.8, 0.8, 0.8, 0.2)),
              F(H(6), r.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), V(0.6, 0.6, 0.6, 0.3)),
              F(H(), r.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), V(0.8, 0.8, 0.8, 0.2)),
              F(H(), r.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), V(0.8, 0.8, 0.8, 0.2)),
            ),
            F(H(8), r.translate(-100, -1, 55).scale(7, 0.9, 7), V(0.3, 0.3, 0.3, 0.4)),
            F(H(8), r.translate(-100, -2, 55).scale(4, 0.3, 4), V(0.4, 0.4, 0.4, 0.5)),
            F(H(8), r.translate(-100, -3, 55).scale(0.6, 1, 0.6), V(0.4, 0.4, 0.4, 0.5)),
          )),
          ub(r.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          ub(r.translate(-89, 0.2, 80), [0, 0, 6]),
          T(M(
            F(H(), r.translate(-100, 1, 63).scale(7.5, 4), V(0.5, 0.5, 0.5, 0.4)),
            F(H(), r.translate(-100, 0, 70).scale(2, 2, 10), V(0.5, 0.5, 0.5, 0.4)),
            F(H(20, 1), r.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), V(0.5, 0.5, 0.5, 0.4)),
          )),
          R(d => {
            d.h = () => r.translate(-99.7, -1.9, 63.5).scale(1, Ra(1.1 - k[6].g), 1);
            T(D);
          }),
          xa.map(({ x: d, z: p }) => {
            T(H(6), r.translate(7 * d - 100, -3, 7 * p + 55).scale(1, 8.1), V(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(q =>
              T(H(6), r.translate(7 * d - 100, q, 7 * p + 55).scale(1.3, 0.5, 1.3), V(0.4, 0.2, 0.2, 0.8))
            );
          }),
          v(7, d => {
            T(
              H((23 * d + 1) % 5 + 5, 0, 0.55),
              r.translate(5 * Math.sin(d) - 101 + d, -2.3 - d, 44.9 - 2.8 * d).scaleSelf(
                5 + d / 2,
                1 + d / 6,
                5 + d / 3,
              ),
              V(0.5 - d / 17, 0.5 - (1 & d) / 9, 0.6, 0.3),
            );
          }),
          T(H(), r.translate(-87, -9.5, 24).scale(7, 1, 3), V(0.4, 0.5, 0.6, 0.4)),
          T(H(4), r.translate(-86, -9.2, 27).scale(5, 1, 5), V(0.5, 0.6, 0.7, 0.3)),
          T(H(12, 1), r.translate(-86, -9, 31).scale(1.5, 1, 1.5), V(0.3, 0.3, 0.4, 0.1)),
          tb(r.translate(-86, -7.5, 31)),
          R(d => {
            d.h = () => r.translate(0, 3.5 * (1 - Pa(k[6].g, k[7].g)) + Ta(k[7].i, k[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(p =>
              T(H(), r.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.2, 0.5, 0.6, 0.2))
            );
          }),
          R(d => {
            d.h = () =>
              r.translate(0, Ta(k[7].i, k[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ta(k[7].i, k[6].i));
            [6, 18].map(p => T(H(), r.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.1, 0.4, 0.5, 0.2)));
          }),
          T(
            M(
              pb(
                F(H(), r.scale(11, 1, 13), V(0.3, 0.4, 0.6, 0.3)),
                F(H(5), r.translate(0, 0, -7).scale(2, 1.2, 2), V(0.2, 0.4, 0.7, 0.3)),
                F(H(5), r.scale(9, 1.2, 9), V(0, 0.2, 0.3, 0.5)),
              ),
              F(H(5), r.scale(5.4, 5, 5.4), V(0, 0.2, 0.3, 0.5)),
            ),
            r.translate(-38.9, -11.3, 17),
          ),
          tb(r.translate(-38.9, -9.6, 10)),
          R(d => {
            d.h = () => r.translate(0, -7.3 * k[7].i);
            T(
              M(
                pb(
                  F(H(5), r.translate(0, 2).scale(5, 7, 5).skewY(8), V(0.2, 0.4, 0.5, 0.5)),
                  F(H(5), r.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), V(0.25, 0.35, 0.5, 0.5)),
                  F(H(5), r.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), V(0.35, 0.3, 0.5, 0.5)),
                ),
                F(H(5), r.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), V(0.2, 0.4, 0.5, 0.5)),
              ),
              r.translate(-38.9, -11.3, 17),
            );
            ub(r.translate(-39.1, -0.6, 17).rotate(11), ...cb(15).map(({ x: p, z: q }) => [3 * p, 3 * q, 1.2]));
          }),
          xa.map(({ x: d, z: p }) => {
            T(H(14, 1), r.translate(9 * d - 38.9, -7.3, 11 * p + 17).scale(1, 4), V(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(q =>
              T(
                H(17, 1),
                r.translate(9 * d - 38.9, -7.3, 11 * p + 17).translate(0, q - 4).scale(1.5, 0.5, 1.5),
                V(0.6, 0.6, 0.6, 0.3),
              )
            );
          }),
          T(
            M(
              pb(
                F(H(6), r.translate(0, 0, -36).scale(15, 1.2, 15), V(0.7, 0.7, 0.7, 0.3)),
                F(H(), r.translate(0, 0, -18).scale(4, 1.2, 6), V(0.45, 0.4, 0.6, 0.3)),
              ),
              ...v(6, d =>
                v(6, p =>
                  F(
                    H(6),
                    r.translate(4.6 * p - 12 + 2 * (1 & d), 0, 4.6 * d - 50 + 2 * Math.sin(4 * p)).scale(2, 5, 2),
                    V(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            r.translate(-38.9, -11.3, 17),
          ),
          ub(r.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          T(H(5), r.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), V(0.8, 0.1, 0.25, 0.4)),
          tb(r.translate(-84, -0.5, 85).rotate(0, 45)),
          R(d => {
            d.h = () => u(-123, 1.4, 55 + -65 * na);
            T(A);
            tb(r.translate(0, -3, -4).rotate(0, 180));
          }),
          ub(r.translate(-115, 0.2, -12), [0, 0, 3.5]),
          M(
            F(H(), r.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), V(0.25, 0.25, 0.35, 0.3)),
            F(H(3), r.translate(0, 0, -5.5).scale(3, 2), V(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(d => F(H(), r.translate(d, -0.5, 1).scale(0.14, 0.3, 6.5), V(0.7, 0.2, 0, 0.3))),
          ));
      R(d => {
        d.h = () => r.translate(0, -2, Ta(k[10].g, k[11].g) * Qa(Math.sin(1.1 * a)) * -8.5 + 10);
        v(2, p => T(C, r.translate(9 * p - 110 + (1 & p), 1.7, -12)));
      });
      R(d => {
        d.h = () => r.translate(0, -2, Ta(k[10].g, k[11].g) * Qa(Math.sin(2.1 * a)) * -8.5 + 10);
        v(2, p => T(C, r.translate(9 * (p + 2) - 110 + (1 & p), 1.7, -12)));
      });
      R(d => {
        d.h = () =>
          r.translate(
            0,
            -2,
            -8.5 * Pa((1 - k[10].g) * (1 - Ta(k[10].g, k[11].g)), Ta(k[10].g, k[11].g) * Qa(Math.sin(1.5 * a))) + 10,
          );
        v(3, p => T(C, r.translate(9 * p - 106, 1.7, -12)));
      });
      T(
        M(
          pb(
            F(H(), r.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
            F(H(), r.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),
          ),
          ...v(4, d => F(H(), r.translate(13 + 9 * d + (1 & d), -0.8, 9).scale(1.35, 1.35, 9))),
          ...v(3, d => F(H(), r.translate(17 + 9 * d, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        r.translate(-123, 0, -12),
        V(0.5, 0.5, 0.6, 0.2),
      );
      tb(r.translate(-116, -1.4, -18).rotate(0, 180));
      T(H(), r.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), V(0.8, 0.8, 0.8, 0.2));
      T(H(6), r.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), V(0.6, 0.5, 0.7, 0.2));
      T(H(), r.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), V(0.6, 0.6, 0.6, 0.3));
      T(H(8), r.translate(-114, -17, -2).scale(2, 15, 2), V(0.6, 0.6, 0.6, 0.3));
      T(H(8), r.translate(-79, -17, -2).scale(2, 15, 2), V(1, 1, 1, 0.3));
      T(H(), r.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), V(0.6, 0.6, 0.6, 0.3));
      v(3, d => {
        T(y(16), r.translate(12 * d - 109, -9, -12), V(0.6, 0.6, 0.6, 0.3));
        T(y(16), r.translate(-77, -9, -12 * d - 20).rotate(0, 90), V(0.6, 0.6, 0.6, 0.3));
      });
      T(M(
        F(H(12), r.translate(-77, -14.5, -12).scale(4, 17.5, 4), V(0.7, 0.7, 0.7, 0.2)),
        F(H(), r.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), V(0.4, 0.5, 0.6, 0.2)),
        F(H(), r.translate(-77, 0.1, -14).scale(1.5, 2, 2), V(0.4, 0.5, 0.6, 0.2)),
        F(H(12), r.translate(-77, 3.1, -12).scale(3, 5, 3), V(0.4, 0.5, 0.6, 0.2)),
      ));
      T(H(), r.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), V(0.6, 0.6, 0.6, 0.3));
      T(H(9), r.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), V(0.5, 0.5, 0.5, 0.3));
      T(M(
        F(H(), r.translate(-93, -5.8, -40).scale(9, 1, 5), V(0.8, 0.8, 0.8, 0.1)),
        F(H(9), r.translate(-98, -5.8, -40).scale(3, 8, 3), V(0.7, 0.7, 0.7, 0.2)),
      ));
      tb(r.translate(-98, -4.4, -40).rotate(0, 90));
      ub(r.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      T(M(
        pb(
          F(H(6, 0, 0, 0.6), r.translate(-100, 0.7, 105.5).scale(8, 1, 11), V(0.7, 0.7, 0.7, 0.2)),
          F(H(), r.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), V(0.7, 0.7, 0.7, 0.2)),
        ),
        F(H(5), r.translate(-100, 0.7, 113).scale(4, 3, 4), V(0.7, 0.7, 0.7, 0.2)),
      ));
      v(4, d =>
        R(p => {
          p.h = () => {
            const q = Ta(k[8].i, k[12].i);
            return r.translate(
              (2 < d ? 2 * (1 - q) + q : 0) - 100,
              q * Math.sin(1.3 * a + 1.7 * d) * (3 + d / 3) + 0.7,
              115 + (1 & d ? -1 : 1) * (1 - k[8].i) * (1 - k[12].i) * -7
                + (0.05 > q ? 0.05 : q) * Math.cos(1.3 * a + 7 * d) * (4 - 2 * (1 - d / 3)),
            );
          };
          T(
            H(6),
            r.translate(-14.6 - 4.8 * d - (2 < d ? 2 : 0), -d / 2.3, -21.5).scale(2.6, 1, 2.5),
            V(0.5 - d / 8, d / 12 + 0.5, 0.7, 0.3),
          );
        }));
      R(d => {
        d.h = () => {
          const p = Ta(k[8].i, k[12].i);
          return r.translate(2.5 * (1 - p) - 139.7, -3 * (1 - k[8].g) + p * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
            .rotateSelf(Math.cos(1.3 * a) * (3 * p + 3), 0);
        };
        T(M(F(H(10), r.scale(6, 2, 6), V(0.1, 0.6, 0.5, 0.3)), F(H(10), r.scale(3.3, 6, 3.3), V(0.1, 0.6, 0.5, 0.5))));
        T(H(15, 1), r.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), V(0.4, 0.4, 0.4, 0.3));
        T(H(10), r.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), V(0.3, 0.8, 0.7, 0.3));
        T(H(5), r.translate(-7.5).rotate(0, 90).scale(1, 3), V(0.5, 0.5, 0.5, 0.5));
        tb(r.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(p =>
          T(n, r.rotate(90 * -p, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), V(1, 1, 0.8, 0.2))
        );
        ub(r.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(d => {
        T(H(12, 1), r.translate(-7.5 * d - 100, 3.7, 96).scale(0.8, 4, 0.8), V(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(p =>
          T(H(15, 1), r.translate(-7.5 * d - 100, p + 0.7, 96).scale(1.1, 0.5, 1.1), V(0.5, 0.24, 0.2, 0.4))
        );
        T(n, r.translate(-5 * d - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * d - 90), V(1, 1, 0.8));
        T(
          M(
            F(H(), r.translate(-4 * d, 3.5, -0.5).scale(4, 4, 0.7), V(0.5, 0.5, 0.5, 0.4)),
            F(H(), r.scale(3, 3, 10), V(0.6, 0.24, 0.2, 0.5)),
            F(H(28, 1), r.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), V(0.6, 0.24, 0.2, 0.5)),
            F(H(5), r.translate(-5.3 * d, 7).rotate(90, 0).scale(1.7, 5, 1.7), V(0.6, 0.24, 0.2, 0.5)),
            F(H(5), r.translate(-5.3 * d, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), V(0.6, 0.24, 0.2, 0.5)),
          ),
          r.translate(d - 100, 0.7, 97),
        );
      });
      R(d => {
        d.h = () => r.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - k[12].g);
        T(D);
      });
      T(M(
        F(H(), r.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), V(0.7, 0.7, 0.7, 0.1)),
        F(H(45, 1), r.translate(-81, 0.7, 106).scale3d(7.7), V(0.7, 0.7, 0.7, 0.1)),
      ));
      R(d => {
        d.h = () => r.translate(-81, 0.6, 106).rotate(0, 40 + ha);
        T(M(
          F(H(45, 1), r.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)),
          F(H(), r.translate(0, 0, -5.5).scale(1.5, 3, 2.7), V(0.45, 0.45, 0.45, 0.2)),
        ));
        T(H(8), r.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), V(0.7, 0.7, 0.7, 0.1));
        T(H(5), r.translate(0, 2).scale(1, 2), V(0.3, 0.3, 0.3, 0.2));
        ub(r.translate(0, 3), ...cb(14).map(({ x: p, z: q }) => [5.6 * p, 5.6 * q, 2]));
      });
      R(d => {
        d.h = () => r.translate(-65.8, 0.8, 106).rotate(0, ia);
        [-1, 1].map(p =>
          T(n, r.rotate(0, 90).translate(-5 * p, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * p + 90), V(1, 1, 0.8))
        );
        T(M(
          F(H(28, 1), r.translate(0, 2).scale(7.5, 1, 7.5), V(0.35, 0, 0, 0.3)),
          F(H(), r.scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
        ));
        T(F(H(28, 1), r.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)));
        T(F(H(5), r.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2)));
      });
      R(d => {
        d.h = () => r.translate(-50.7, 0.8, 106).rotate(0, 180 - ia);
        T(M(
          F(H(28, 1), r.translate(0, 2).scale(7.5, 1, 7.5), V(0.35, 0, 0, 0.3)),
          F(H(), r.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
          F(H(), r.translate(0, 0, 7).scale(2, 5, 9), V(0.3, 0, 0, 0.3)),
        ));
        T(F(H(28, 1), r.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)));
        T(F(H(5), r.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2)));
      });
      R(d => {
        d.h = () => r.translate(-50.7, 0.8, 91).rotate(0, 270 + ia);
        T(M(
          F(H(28, 1), r.translate(0, 2).scale(7.5, 1, 7.5), V(0.35, 0, 0, 0.3)),
          F(H(), r.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
          F(H(), r.translate(0, 0, -7).scale(2, 5, 9), V(0.3, 0, 0, 0.3)),
        ));
        T(F(H(28, 1), r.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)));
        T(F(H(5), r.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2)));
      });
      T(H(), r.translate(-58, 1, 106).scale(2, 0.65, 2), V(0.7, 0.7, 0.7, 0.2));
      T(H(), r.translate(-50.7, 1, 99).scale(2, 0.65, 1), V(0.7, 0.7, 0.7, 0.2));
      T(H(), r.translate(-42, 0.4, 91).scale(5, 1, 2.5), V(0.7, 0.7, 0.7, 0.3));
      T(H(), r.translate(-34.2, 0.4, 91).scale(3, 1, 3), V(0.7, 0.7, 0.7, 0.3));
      tb(r.translate(-34, 2.7, 96).rotate(-12, 0));
      T(H(5), r.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), V(0.2, 0.5, 0.5, 0.6));
      [V(0.1, 0.55, 0.45, 0.2), V(0.2, 0.5, 0.5, 0.3), V(0.3, 0.45, 0.55, 0.4)].map((d, p) =>
        R(q => {
          q.h = () =>
            r.translate(
              0,
              (1 - k[13].i) * (1 - k[14].i) * (p ? 0 : 3) + Ta(k[13].i, k[14].i) * Math.sin(1.5 * a + 1.5 * p) * 4,
            );
          T(H(), r.translate(-23.5, 0.5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), d);
          2 === p && T(H(), r.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), V(0.7, 0.7, 0.7, 0.3));
          1 === p
            && T(H(), r.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), V(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(d => T(n, r.translate(-8 * d, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * d + 90), V(1, 1, 0.8)));
      v(
        3,
        d =>
          T(
            y(24.7 - 0.7 * (1 & d)),
            r.translate(6 * d - 6, 4 - (1 & d), 111 - 0.2 * (1 & d)),
            1 & d ? V(0.5, 0.5, 0.5, 0.3) : V(0.35, 0.35, 0.35, 0.5),
          ),
      );
      T(M(
        F(H(6, 0, 0, 0.3), r.translate(0, -0.92, 95).scale(14, 2, 14), V(0.8, 0.8, 0.8, 0.2)),
        F(H(5), r.translate(0, 0, 95).scale3d(6), V(0.3, 0.3, 0.3, 0.5)),
      ));
      tb(r.translate(0, 1.7, 82).rotate(0, 180));
      T(H(5), r.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), V(0.5, 0.3, 0.3, 0.4));
      T(H(6), r.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), V(0.5, 0.6, 0.7, 0.3));
      T(H(), r.translate(0, 16, 129).scale(1.5, 1, 2), V(0.5, 0.6, 0.7, 0.3));
      T(H(7), r.translate(0, 16.2, 133).scale(5, 1, 5), V(0.4, 0.5, 0.6, 0.4));
      T(M(
        pb(
          F(H(), r.translate(0, 16, 110.5).scale(12, 1, 3), V(0.5, 0.3, 0.3, 0.4)),
          F(H(), r.translate(0, 16, 111).scale(3, 1, 3.8), V(0.5, 0.3, 0.3, 0.4)),
        ),
        F(H(5), r.translate(0, 16, 103.5).scale(5.5, 5, 5.5), V(0.5, 0.3, 0.3, 0.4)),
      ));
      R(d => {
        d.h = () => {
          const p = Math.sin(a);
          return r.translate(-2 * p).rotate(25 * p);
        };
        T(H(3), r.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), V(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(p => {
          T(H(6), r.translate(0, 16, p + 95).scale(3, 1, 2.3).rotate(0, 90), V(0.7, 0.7, 0.7, 0.4));
          T(H(), r.translate(0, 6.2, p + 95).scale(0.5, 11, 0.5), V(0.5, 0.3, 0.3, 0.4));
        });
      });
      R(d => {
        d.h = () => {
          const p = Ta(Ta((k[14].g + k[14].i) / 2, k[13].i), (k[15].g + k[15].i) / 2);
          return r.translate(0, 16 * p, 8.5 * Ra(2 * p - 1) + 95);
        };
        T(H(5), r.scale(5, 1.1, 5), V(0.5, 0.3, 0.3, 0.4));
        T(H(5), r.scale(5.5, 0.9, 5.5), V(0.25, 0.25, 0.25, 0.4));
        tb(r.translate(0, 1.5, -1).rotate(0, 180));
      });
      ub(r.translate(0, 3, 95), ...cb(9).map(({ x: d, z: p }) => [9 * d, 9 * p, 4]));
      ub(r.translate(0, 19, 134), [0, 0, 3.5]);
    });
    R(() => {
      [0, 180].map(u => T(n, r.rotate(0, u).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), V(1, 1, 0.8)));
      T(gb(20), r.translate(0, 1).scale(0.5, 0.5, 0.5), V(1, 0.3, 0.4));
      const h = F(
        M(H(15, 1), F(H(), r.translate(0, 0, 1).scale(2, 2, 0.5))),
        r.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        V(0.3, 0.3, 0.3),
      );
      [-1, 1].map(u => T(h, r.translate(0.2 * u, 1.2, 0.4).rotate(0, 20 * u, 20 * u)));
      T(H(), r.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), V(0.3, 0.3, 0.3));
      T(gb(20), r.scale(0.7, 0.8, 0.55), V(1, 0.3, 0.4));
    });
    [-1, 1].map(h =>
      R(() => {
        T(H(10, 1), r.translate(0.3 * h, -0.8).scale(0.2, 0.7, 0.24), V(1, 0.3, 0.4));
      })
    );
    R(() => {
      T(H(6, 1), r.scale(0.13, 1.4, 0.13), V(0.3, 0.3, 0.5, 0.1));
      T(H(8, 1), r.translate(0, 1).scale(0.21, 0.3, 0.21), V(1, 0.5, 0.2));
      T(H(3), r.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), V(0.2, 0.2, 0.2, 0.1));
    }, 0);
    R(() => {
      T(H(6).slice(0, -1), r.scale(0.77, 1, 0.77), V(1, 0.3, 0.5));
    }, 0);
    R(() => {
      T(
        gb(30, 24, (h, u, y) => {
          const w = u / 24, A = h * Math.PI * 2 / 30, D = w ** 0.6 * Math.PI / 2;
          h = w * w * Math.sin(h * Math.PI * 14 / 30) / 4;
          return 23 === u
            ? { x: y.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(A) * Math.sin(D),
              y: Math.cos(w * Math.PI) - w - h,
              z: Math.sin(A) * Math.sin(D) + Math.sin(h * Math.PI * 2) / 4,
            };
        }),
        r.scale3d(0.7),
        V(1, 1, 1),
      );
      [-1, 1].map(h => T(gb(12), r.translate(0.16 * h, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls: <b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n",
);
