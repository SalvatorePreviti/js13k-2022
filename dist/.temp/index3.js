let aa = 0,
  ba = 0,
  a = 0,
  da = 0,
  fa = 0,
  ha = 0,
  ia = 0,
  ja = 0,
  ka = 0,
  la = 0,
  na = 0,
  oa = 0,
  e = 0.066,
  pa = 1,
  qa,
  sa,
  ta,
  ua,
  va;
const wa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  f = [],
  k = [],
  xa = [],
  ya = [],
  za = [[
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
  Ca = { x: 0, y: 0, z: 0 };
var Da = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180,
  m = new DOMMatrix(),
  La = new Float32Array(16),
  Ma = new Float32Array(624),
  r = (c, b) => Array.from(Array(c), (g, l) => b(l)),
  Na = c => 4 < c ? 4 : c,
  Pa = (c, b) => b < c ? c : b,
  Qa = c => 0 > c ? -c : c,
  Ra = c => 0 > c ? 0 : 1 < c ? 1 : c,
  Sa = (c, b, g) => c + (b - c) * (0 > g ? 0 : 1 < g ? 1 : g),
  Ta = (c, b) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > b ? 0 : 1 < b ? 1 : b)),
  Ua = c => Math.atan2(Math.sin(c *= Ka), Math.cos(c)) / Ka,
  Va = (c, b, g) =>
    ((c *= Ka) + (2 * (b = (b * Ka - c) % (2 * Math.PI)) % (2 * Math.PI) - b) * (0 > g ? 0 : 1 < g ? 1 : g)) / Ka,
  Wa = ({ x: c, y: b, z: g }) => Math.hypot(c - Ca.x, b - Ca.y, g - Ca.z),
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
  w = (c, b, g) => c.map(l => bb(l, b, g)),
  cb = (c, b = 0) =>
    r(c, g => {
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
  ) => (c = c ? cb(c, l) : wa,
    l = bb(c, m.translate(0, 1).scale3d(0 < g ? g : 1)),
    c = bb(c, m.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
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
        let z = h.at(-1), x = Xa(c, z) - c.w;
        for (const A of h) {
          g = Xa(c, A) - c.w,
            8e-5 > x && n.push(z),
            -0.00008 < x && l.push(z),
            (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g)
            && (x /= g - x,
              z = { x: z.x + (z.x - A.x) * x, y: z.y + (z.y - A.y) * x, z: z.z + (z.z - A.z) * x },
              l.push(z),
              n.push(z)),
            z = A,
            x = g;
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
        let { o: z, m: x } = hb(h, u);
        z || x || (0 < g * Xa(h, b) ? z = u : x = u);
        z && (h.o ? n(h.o, z) : l.push(z));
        x && h.m && n(h.m, x);
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
  I = (...c) => {
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
        const z = h.map(({ x, y: A, z: E }) => ({ x, y: A, z: E }));
        return ab(u ? z.reverse() : z, h.A, h.D);
      });
  },
  N = (c, b, g) => c + (b - c) * Ra(1 - Math.exp(-g * e)),
  qb = () => {
    const c = Ta(k[12].g, k[13].g);
    ia = Sa(N(ia, 0, 1), Ua(ia + 60 * e), k[5].g - k[6].i);
    fa = Sa(N(fa, 0, 5), Ua(fa + 56 * e), c);
    ha = Sa(N(ha, 0, 4), Ua(ha + 48 * e), c);
    la = N(la, k[9].i, 0.2 + 0.3 * Qa(2 * k[9].i - 1));
    ka = N(ka, ja ? ka + (-9 - ka) * Ra(1.5 * e) : Ra(a / 3), 1);
    pa && a > pa && (pa = 0, h4.innerHTML = "");
    k[0].j && 0.8 < k[0].g && (13 > aa
      ? (1 / 0 > pa && (pa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), k[0].j = 0)
      : ja
        || (1 / 0 > pa && (pa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ja = 1));
    for (const b of f) {
      b.h && (b.l = b.h());
    }
    for (const b of k) {
      b.h();
    }
    for (const b of xa) {
      b.h();
    }
  },
  rb = () => {
    h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[aa = xa.reduce((c, { j: b }) => c + b, 0)];
  },
  sb = () => {
    localStorage.DanteSP22 = JSON.stringify([k.map(({ j: c }) => c), xa.map(({ j: c }) => c), da, a, la]);
  },
  O = (c, b = 1) => {
    const g = ta;
    b = { l: m, H: f.length, G: b, s: [] };
    return f.push(ta = b), c(b), ta = g, b;
  },
  T = (c, b = m, g) => ta.s.push(...w(c, b, g)),
  tb = c => {
    const b = ta,
      g = k.length,
      l = {
        j: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const n = l.j, h = l.g, u = l.i, z = b.l.multiply(c);
          l.I = z;
          3 > Wa(z.transformPoint()) && ya[5] && (0.3 > h || 0.7 < h)
            && (l.j = n ? 0 : 1, g && 1 / 0 > pa && (pa = a + 1, h4.innerHTML = "* click *"), da = g, sb());
          l.g = N(h, n, 4);
          l.i = N(u, n, 1);
          l.l = z.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    k.push(l);
    T(H(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
    T(H(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
    T(H(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), V(0.5, 0.5, 0.4));
  },
  ub = (c, ...b) => {
    let g = -1, l = 0, n = 0, h = 0, u = 0, z = 0, x = 1, A = 3;
    const E = {
        j: 0,
        h() {
          if (!E.j) {
            let Aa, Q, R, S, G, t, J = 1, F = 1 / 0, L;
            for (const W of d) {
              var { x: K, z: M, w: P } = W;
              M = (K = Math.hypot(p - K, v - M)) - P;
              L ||= K < P;
              0 < M && F > M && (F = M, q = W);
              var ca = K / P;
              J = J < ca ? J : ca;
            }
            L
              || ({ x: Aa, z: Q, w: R } = q,
                S = p - Aa,
                G = v - Q,
                t = Math.hypot(S, G),
                Z = Math.atan2(-G, S),
                x && (n = (Math.random() - 0.5) * Math.PI / 2, A = Pa(1, A / (1 + Math.random()))),
                Z += n,
                g = -Math.cos(Z),
                l = Math.sin(Z),
                0.1 < t && (t = (t < R ? t : R) / (t || 1), p = S * t + Aa, v = G * t + Q));
            x = L;
            A = N(A, 3 + 6 * (1 - J), 3 + J);
            y = N(y, p = N(p, p + g, A), A);
            B = N(B, v = N(v, v + l, A), A);
            h = Va(h, Math.atan2(y - u, B - z) / Ka - 180, 3 * e);
            u = y;
            z = B;
            var Z = (E.l = C.l.multiply(c.translate(y, 0, B).rotateSelf(0, h, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.55 > Wa(Z)
              && (E.j = 1,
                ca = [
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
                ][aa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > pa && (pa = a + (aa && 12 > aa ? 5 : 7), h4.innerHTML = ca),
                rb(),
                sb());
          }
          E.j
            && (E.l = f[2].l.translate(
              D % 4 * 1.2 - 1.7 + Math.sin(a + D) / 7,
              -2,
              1.7 * (D / 4 | 0) - 5.5 + Qa(D % 4 - 2) + Math.cos(a / 1.5 + D) / 6,
            ));
        },
      },
      C = ta,
      D = xa.length,
      d = b.map(([K, M, P]) => ({ x: K, z: M, w: P }));
    let q = d[0], { x: p, z: v } = q, y = p, B = v;
    xa.push(E);
  },
  vb = (c, b, g, l) => {
    let n = 0, h = 0, u = 0, z = 1 / 0, x = -1 / 0, A = 1 / 0, E = -1 / 0, C = 1 / 0, D = -1 / 0;
    const d = 1.1 * (g - b),
      q = (new DOMMatrix($a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
    return b = r(
      8,
      p => (p = q.transformPoint({ x: 4 & p ? 1 : -1, y: 2 & p ? 1 : -1, z: 1 & p ? 1 : -1 }),
        n -= p.x = (d * p.x | 0) / d / p.w,
        h -= p.y = (d * p.y | 0) / d / p.w,
        u -= p.z = (d * p.z | 0) / d / p.w,
        p),
    ),
      g = m.rotate(298, 139).translateSelf(n / 8, h / 8, u / 8),
      bb(b, g).map(({ x: p, y: v, z: y }) => {
        z = z < p ? z : p;
        x = p < x ? x : p;
        A = A < v ? A : v;
        E = v < E ? E : v;
        C = C < y ? C : y;
        D = y < D ? D : y;
      }),
      C *= 0 > C ? l : 1 / l,
      D *= 0 < D ? l : 1 / l,
      m.scale(2 / (x - z), 2 / (E - A), 2 / (C - D)).translateSelf((x + z) / -2, (E + A) / -2, (C + D) / 2)
        .multiplySelf(g);
  },
  yb = () => {
    let c = !0, b, g, l, n, h, u, z, x, A, E, C, D;
    const d = () => {
        qa || !c ? wb.disconnect() : wb.connect(xb.destination);
        b4.innerHTML = "Music: " + c;
      },
      q = (p = !1) => {
        if (qa !== p) {
          qa = p;
          try {
            p
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : wb.start();
          } catch {
          }
          ua = 0;
          document.body.className = p ? "l m" : "l";
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
      q();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      q();
      ua = 1;
    };
    b4.onclick = () => {
      c = !c;
      d();
    };
    b5.onclick = () => q(!0);
    onclick = p => {
      D = 1;
      qa || (p.target === hC && (ya[5] = !0), ua && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: p, target: v, type: y, repeat: B }) => {
      B || ((B = !!y[5] && v === document.body) && ("Escape" === p || "Enter" === p && qa)
        ? qa && !D || q(!qa)
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
            }[p])
        ? B && (ya[y] = 1)
        : ya[y] = B);
    };
    onmousemove = ({ movementX: p, movementY: v }) => {
      ua && (p || v) && (Ja += 0.1 * p, Ia += 0.1 * v);
    };
    hC.ontouchstart = p => {
      if (!qa) {
        for (let { pageX: v, pageY: y, identifier: B } of p.changedTouches) {
          ua && v > hC.clientWidth / 2
            ? void 0 === x && (A = 0, u = v, z = y, x = B, E = Ja, C = Ia)
            : void 0 === n && (h = 0, g = v, l = y, n = B);
        }
        b = ba;
      }
    };
    hC.ontouchmove = p => {
      if (!qa) {
        for (let { pageX: P, pageY: ca, identifier: Z } of p.changedTouches) {
          var v, y, B, K, M;
          x === Z && (Ja = E + (P - u) / 2.3, Ia = C + (ca - z) / 2.3, A = 1);
          n === Z
            && (Z = (g - P) / 20,
              v = (l - ca) / 20,
              y = 0 > Z ? -Z : Z,
              B = 0 > v ? -v : v,
              K = Math.atan2(v, Z),
              M = Ra(Math.hypot(v, Z) - 0.5),
              na = 0.2 < y ? Math.cos(K) * M : 0,
              oa = 0.2 < B ? Math.sin(K) * M : 0,
              (na || oa) && (h = 1),
              2 < y && (g = P + 20 * Math.sign(Z)),
              2 < B && (l = ca + 20 * Math.sign(v)));
        }
      }
    };
    hC.ontouchend = p => {
      let v;
      p.preventDefault();
      for (const y of p.changedTouches) {
        y.identifier === x
          ? (x = void 0, A || (v = 1), A = 0)
          : y.identifier === n
          ? (n = void 0, oa = na = 0, h || (v = 1), h = 0)
          : v = 1;
      }
      v && p.target === hC && b && 0.02 < (p = ba - b) && 0.7 > p && (ya[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      ya.length = na = oa = 0;
      n = x = void 0;
      document.hidden && q(!0);
    })();
    q(!0);
  },
  zb = () => {
    let c = 0, b = 0, g = 0, l = 0, n = 0, h = 2, u = !1, z, x, A, E, C, D, d, q, p, v, y, B;
    const K = { x: 0, y: 0, z: 0 },
      M = new Int32Array(256),
      P = new Uint8Array(65536),
      ca = () => {
        h = 2;
        c = b = k[da].u.H || 1;
        A =
          D =
          C =
          E =
            0;
      },
      Z = () => {
        for (let Q = 32; 128 > Q; Q += 2) {
          let R = 0, S = 0, G = 0, t = 0;
          const J = 512 * Q;
          for (let F = 1 & Q; 128 > F; F += 2) {
            const L = J + 4 * F;
            let W = J + 4 * (127 - F);
            const X = P[L] / 255, ea = P[1 + W] / 255, ma = 1 - Qa(F / 63.5 - 1);
            10 < F && 118 > F && (R = Pa(R, Pa(X * ma, X * P[W] / 255)), S = Pa(S, Pa(ea * ma, ea * P[1 + L] / 255)));
            (54 > F || 74 < F) && 1e-3 < (W = (1 - ma) * (ea < X ? X : ea) / 3)
              && (64 > F && W > G ? G = W : 64 < F && W > t && (t = W));
          }
          Qa(t - G) > (0 > q ? -q : q) && (q = t - G);
          Qa(S - R) > (0 > p ? -p : p) && (p = S - R);
        }
      },
      Aa = () => {
        let Q = 0, R = 0, S = 0, G = 0;
        M.fill(0);
        for (let J = 0; 31 > J; ++J) {
          let F = 0;
          const L = 512 * J;
          for (let W = 0; 128 > W; W++) {
            var t = L + 4 * W;
            let X = (P[t] + P[1 + t]) / 255;
            t = P[2 + t];
            14 < W && 114 > W && (F += X);
            t && X && (X = M[t] + 1, M[t] = X, Q > X || (Q = X, R = t));
          }
          3 > F && 5 < J && (G += J / 32);
          3 < F && (7 < J && (S += J / 15), x = 1);
        }
        R && (x = 1);
        h ? R && (h = 0, b = R) : b = R || c;
        c = R;
        A = N(A, x ? 6.5 : 8, 4);
        K.y += S / 41 - (x ? 1 : A) * G / 41 * A * e;
      };
    va = () => {
      var Q = na + (ya[0] ? 1 : 0) + (ya[2] ? -1 : 0);
      let R = oa + (ya[1] ? 1 : 0) + (ya[3] ? -1 : 0), S = navigator.getGamepads()[0];
      if (S) {
        const X = S.buttons;
        var G = S.axes;
        (S = (t = ea => X[ea]?.pressed || 0 < X[ea]?.value)(1) || t(3) || t(2) || t(0)) !== u && (u = S) && (ya[5] = 1);
        Q += (0.2 < Qa(-G[0]) ? -G[0] : 0) + (t(14) ? 1 : 0) + (t(15) ? -1 : 0);
        R += (0.2 < Qa(-G[1]) ? -G[1] : 0) + (t(12) ? 1 : 0) + (t(13) ? -1 : 0);
        ua && (0.3 < Qa(G[2]) && (Ja += 80 * G[2] * e), 0.3 < Qa(G[3]) && (Ia += 80 * G[3] * e));
      }
      S = Math.atan2(R, Q);
      G = Ra(Math.hypot(R, Q));
      0.05 > G && (G = 0);
      Q = G * Math.cos(S);
      R = G * Math.sin(S);
      x = p = q = 0;
      Y.fa7();
      Y.r9r(0, 0, 128, 128, 6408, 5121, P);
      Y.iay(36008, [36064, 36096]);
      Y.iay(36009, [36064, 36096]);
      NO_INLINE(Z)();
      NO_INLINE(Aa)();
      var t = Ra(1 - 5 * Pa(0 > q ? -q : q, 0 > p ? -p : p));
      t =
        (b || (q += C * t * e, p += D * t * e),
          C = N(C, 0, x ? 8 : 4),
          D = N(D, 0, x ? 8 : 4),
          E = N(E, x ? (G ? x ? 7 : 4 : 0) * t : 0, x ? 0.1 < t ? 10 : G ? 5 : 7 : 1),
          ua ? Ja * Ka : Math.PI);
      var J = Math.sin(t) * E * e;
      t = Math.cos(t) * E * e;
      J = (q -= Q * t - R * J, p -= Q * J + R * t, 1 === f[b].G && f[b].l || m);
      var { x: F, y: t, z: L } = (h
        ? ({ x: t, y: F, z: L } = k[da].I.transformPoint({ x: 0, y: 12, z: -2.5 }),
          1 < h && (h = 1, d = Ca.y = F),
          Ca.x = t,
          Ca.z = L)
        : ({ x: t, z: L } = ((F = J.inverse()).m41 = 0, F.m42 = 0, F.m43 = 0, F.transformPoint({ x: q, z: p, w: 0 })),
          K.x += t,
          K.z += L),
        b !== z && (z = b, { x: F, y: t, z: L } = J.inverse().transformPoint(Ca), K.x = F, K.y = t, K.z = L),
        J.transformPoint(K));
      J = F - Ca.x;
      Q = L - Ca.z;
      Ca.x = F;
      Ca.y = t;
      Ca.z = L;
      b && (C = J / e, D = Q / e);
      G && (g = 90 - S / Ka);
      d = Sa(N(d, t, 2), t, 8 * Qa(d - t));
      void 0 === v && (Da = v = F, Ga = (y = d = t) + 13, Ha = (B = L) + -36);
      v = N(v, F, Na(Pa(0.4, Qa(v - F) - 1.5)));
      y = N(y, t, Na(Pa(0.4, Qa(y - t) - 2.2)));
      B = N(B, L, Na(Pa(0.4, Qa(B - L) - 1.5)));
      ua
        ? (Da = N(Da, F, 666 * h + 18), Ga = N(Ga, d + 1.5, 666 * h + 18), Ha = N(Ha, L, 666 * h + 18))
        : (Da = N(Da, v, 2),
          Ga = N(Ga, Pa(y + 13, 6), 2),
          Ha = N(Ha, B + -18, 2),
          J = Ha - B,
          1 < (0 > J ? -J : J)
          && (Q = Da - v, Ja = 270 + Math.atan2(J, Q) / Ka, Ia = 90 - Math.atan2(Math.hypot(J, Q), Ga - y) / Ka));
      Ia = Pa(87 > Ia ? Ia : 87, -87);
      Ja = Ua(Ja);
      t < (-25 > F || 109 > L ? -25 : -9) && ca();
      1 === b && (k[9].j = -15 > F && 0 > L ? 1 : 0);
      const W = f[37].l = m.translate(F, d, L).rotateSelf(0, l = Va(l, g, 8 * e));
      n = N(n, G, 10);
      [38, 39].map((X, ea) => {
        f[X].l = W.translate(0, n * Ra(0.45 * Math.sin(9.1 * a + Math.PI * (ea - 1) - Math.PI / 2))).rotateSelf(
          n * Math.sin(9.1 * a + Math.PI * (ea - 1)) * 0.25 / Ka,
          0,
        );
      });
    };
    ca();
  },
  Ab = (c, b = 35633) => (b = Y.c6x(b), Y.s3c(b, c), Y.c6a(b), b),
  Fb = (c, b) => {
    const g = {}, l = Y.c1h();
    return Y.abz(l, c), Y.abz(l, Ab(b, 35632)), Y.l8l(l), n => n ? g[n] || (g[n] = Y.gan(l, n)) : Y.u7y(l);
  },
  Gb = (c, b, g, l) => {
    if (qa) {
      g = m.rotate(0, 40 * Math.sin(ba) - 70);
      for (var n of [37, 38, 39]) {
        Za(g, Ma, n - 1);
      }
      Y.uae(c, !1, Ma);
      Y.d97(4, f[39].F - f[37].v, 5123, 2 * f[37].v);
    } else {
      for (n = 0; f.length > n; ++n) {
        f[n].G && Za(f[n].l, Ma, n - 1);
      }
      Y.uae(c, !1, Ma);
      Y.d97(4, (b ? f[39].F : f[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        Za(xa[b].l, Ma, b);
      }
      for (b = 0; k.length > b; ++b) {
        Za(k[b].l, Ma, b + 13), l || (Ma[16 * (b + 13) + 15] = 1 - k[b].g);
      }
      Y.uae(c, !1, Ma);
      Y.das(4, f[g].F - f[g].v, 5123, 2 * f[g].v, 13);
      Y.das(4, f[40].F - f[40].v, 5123, 2 * f[40].v, k.length);
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
          for (let z = u, x = h.getChannelData(u); 10725888 > z; z += 2) {
            x[z >> 1] = n[z] / 65536;
          }
        }
        wb.buffer = h;
        wb.loop = !0;
        Hb(c);
      },
      l = () => {
        let h, u = 0, [z, x, A, E, C, D, d, q, p, v, y, B, K, M, P, ca, Z, Aa, Q, R, S] = za[b];
        v = v * v * 4;
        for (const L of [5513, 4562, 3891]) {
          const W = [];
          let X = 0, ea = 0, ma, Oa, Bb;
          const Ba = new Int32Array(768 * L), Mb = 2 ** (B - 9) / L, Nb = Math.PI * 2 ** (Z - 8) / L, lb = Q * L & -2;
          for (let eb = 0; 11 >= eb; ++eb) {
            for (
              let fb = 0, Cb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + eb];
              32 > fb;
              ++fb
            ) {
              const Db = (32 * eb + fb) * L;
              for (var G = 0; 4 > G; ++G) {
                if (ma = 0, Cb && (ma = S[Cb - 1].charCodeAt(fb + 32 * G) - 40, ma += 0 < ma ? 106 : 0), ma) {
                  var t;
                  if (!(t = W[ma])) {
                    t = ma;
                    let U = void 0, ra = void 0;
                    var J = L, F = ma;
                    let Ob = 0, Pb = 0;
                    const Qb = 2 > b ? Kb : Ib, Rb = 2 > b ? 1 > b ? Jb : Lb : Ib, Eb = new Int32Array(q + p + v);
                    for (let Ea = 0, mb = 0; q + p + v > Ea; ++Ea, ++mb) {
                      let Fa = 1;
                      q > Ea ? Fa = Ea / q : q + p > Ea || (Fa = (1 - (Fa = (Ea - q - p) / v)) * 3 ** (-y / 16 * Fa));
                      0 > mb
                        || (mb -= 4 * J,
                          ra = 396e-5 * 2 ** ((F + x - 256) / 12),
                          U = 396e-5 * 2 ** ((F + C - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                      Eb[Ea] = 80
                          * (Qb(Ob += ra * Fa ** (A / 32)) * z + Rb(Pb += U * Fa ** (D / 32)) * E
                            + (d ? (2 * Math.random() - 1) * d : 0))
                          * Fa | 0;
                    }
                    t = W[t] = Eb;
                  }
                  for (let U = 0, ra = 2 * Db; t.length > U; ++U, ra += 2) {
                    Ba[ra] += t[U];
                  }
                }
              }
              for (let U, ra = 0; L > ra; ++ra) {
                G = 0,
                  t = 2 * (Db + ra),
                  ((U = Ba[t]) || Bb)
                  && (Oa = 308e-5 * K,
                    1 !== b && 4 !== b || (Oa *= Math.sin(Mb * t * Math.PI * 2) * R / 512 + 0.5),
                    Oa = 1.5 * Math.sin(Oa),
                    X += Oa * ea,
                    h = (1 - M / 255) * (U - ea) - X,
                    ea += Oa * h,
                    U = 4 === b ? ea : 3 === b ? h : X,
                    b || (U = 1 > (U *= 22e-5) ? -1 < U ? Math.sin(U / 4 * Math.PI * 2) : -1 : 1, U /= 22e-5),
                    U *= P / 32,
                    Bb = 1e-5 < U * U,
                    h = Math.sin(Nb * t) * ca / 512 + 0.5,
                    G = U * (1 - h),
                    U *= h),
                  t < lb || (G += Ba[1 + t - lb]
                    * Aa / 255,
                    U += Ba[t - lb] * Aa / 255),
                  n[u + t] += Ba[t] = G,
                  ++t,
                  n[u + t] += Ba[t] = U;
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
  Y = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Y) {
  Y[c[0] + [...c].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Y[c];
}
Hb(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const l = p => {
            let v, y;
            Y.f1s();
            requestAnimationFrame(l);
            B = (p - (sa || p)) / 1e3;
            qa ? (e = 0, ya[5] = 0) : e = 0.066 < B ? 0.066 : B;
            a += e;
            ba += B;
            sa = p;
            0 < e && (qb(), va(), ya[5] = 0);
            var B = qa
              ? m.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ra(hC.clientWidth / 1e3))
              : m.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ga, -Ha);
            0 < e
              && ({ x: p, y: v, z: y } = Ca,
                D(),
                Y.b6o(36160, u),
                Y.v5y(0, 0, 128, 128),
                Y.c4s(16640),
                Y.cbf(!0, !1, !0, !1),
                Y.uae(D("b"), !1, Za(m.rotate(0, 180).invertSelf().translateSelf(-p, -v, 0.3 - y))),
                Gb(D("c"), 0, 41, 0),
                Y.c4s(256),
                Y.cbf(!1, !0, !0, !1),
                Y.uae(D("b"), !1, Za(m.translate(-p, -v, -y - 0.3))),
                Gb(D("c"), 0, 41, 0),
                Y.f1s());
            E();
            Y.b6o(36160, h);
            Y.v5y(0, 0, 2048, 2048);
            q[0](vb(B, 0.3, 55, 10));
            q[1](vb(B, 55, 177, 11));
            d();
            Y.b6o(36160, null);
            Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
            Y.cbf(!0, !0, !0, !0);
            Y.c4s(16640);
            q[0]();
            q[1]();
            Y.uae(d("a"), !1, $a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
            Y.uae(d("b"), !1, Za(B));
            Y.ubu(d("k"), Da, Ga, Ha);
            Gb(d("c"), !ua, 42, 0);
            C();
            Y.ubu(C("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ba);
            qa ? Y.ubu(C("k"), 0, 0, 0) : Y.ubu(C("k"), Da, Ga, Ha);
            Y.uae(C("b"), !1, Za(B.inverse()));
            Y.d97(4, 3, 5123, 0);
            Y.b6o(36160, u);
            Y.f1s();
          },
          n = g,
          h = Y.c5w(),
          u = Y.c5w(),
          z = Y.c3z(),
          x = Y.c25(),
          A = Ab(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          E = Fb(
            Ab(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          C = Fb(
            Ab("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          D = Fb(
            A,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          d = Fb(
            A,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          q = (D(),
            Y.uae(D("a"), !1, $a(1.4, 0.59, 1e-4, 1)),
            C(),
            Y.ubh(C("q"), 3),
            d(),
            Y.ubh(d("q"), 3),
            r(2, p => {
              const v = new Float32Array(16), y = Y.c25(), B = d(p ? "j" : "i");
              return Y.ubh(d(p ? "h" : "g"), p),
                Y.b6o(36160, h),
                Y.d45([0]),
                Y.r9l(0),
                Y.a4v(33984 + p),
                Y.b9j(3553, y),
                Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                Y.t2z(3553, 10241, 9729),
                Y.t2z(3553, 10240, 9729),
                Y.t2z(3553, 34893, 515),
                Y.t2z(3553, 34892, 34894),
                Y.t2z(3553, 10243, 33071),
                Y.t2z(3553, 10242, 33071),
                K => {
                  K
                    ? (Za(K, v),
                      Y.uae(E("b"), !1, v),
                      Y.fas(36160, 36096, 3553, y, 0),
                      Y.c4s(256),
                      Gb(E("c"), !ua, 42, 1))
                    : Y.uae(B, !1, v);
                };
            }));
        Y.e8z(2929);
        Y.e8z(2884);
        Y.c70(1);
        Y.c7a(1029);
        Y.d4n(515);
        Y.c5t(0, 0, 0, 1);
        Y.b6o(36160, u);
        Y.bb1(36161, z);
        Y.r4v(36161, 33189, 128, 128);
        Y.f8w(36160, 36096, 36161, z);
        Y.a4v(33987);
        Y.b9j(3553, x);
        Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Y.fas(36160, 36064, 3553, x, 0);
        Y.a4v(33987);
        Y.b9j(3553, Y.c25());
        Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
        Y.gbn(3553);
        Y.t2z(3553, 10241, 9987);
        Y.t2z(3553, 10240, 9729);
        try {
          const [p, v, y, B, K] = JSON.parse(localStorage.DanteSP22);
          k.map((M, P) => M.g = M.i = M.j = P ? 0 | p[P] : 0);
          xa.map((M, P) => M.j = 0 | v[P]);
          da = y;
          a = B;
          la = K;
        } catch {
        }
        ka = 0 > da ? 0 : 1 < da ? 1 : da;
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
        u = v => {
          let { x: y, y: B, z: K } = x[v], M = (p[0] = y, p[1] = B, p[2] = K, v = "" + (x.D ? q : d), D.get(v));
          return void 0 !== M
            ? (y = 3 * M, C[y] = (C[y++] + d[5]) / 2, C[y] = (C[y++] + d[6]) / 2, C[y] = (C[y] + d[7]) / 2)
            : (D.set(v, M = D.size), A.push(y, B, K, p[3]), E.push(d[4]), C.push(d[5], d[6], d[7])),
            M;
        };
      let z = 0, x;
      const A = [],
        E = [],
        C = [],
        D = new Map(),
        d = new Int32Array(8),
        q = new Int32Array(d.buffer, 0, 5),
        p = new Float32Array(d.buffer);
      for (const v of f) {
        for (x of (p[3] = 40 === v.H ? -14 : v.G && v.H, v.s)) {
          const { x: y, y: B, z: K } = Ya(x);
          d[4] = 0 | x.A;
          d[5] = 32767 * y;
          d[6] = 32767 * B;
          d[7] = 32767 * K;
          for (let M = 2, P = u(0), ca = u(1); x.length > M; ++M) {
            h.push(P, ca, ca = u(M));
          }
        }
        v.s = null;
        v.v = z;
        v.F = z = h.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(A), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(C), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(E), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(h), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Hb(b);
    });
    const l = r(
        11,
        h => m.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),
      ),
      n = r(10, h => db(bb(cb(18), l[h]).reverse(), bb(cb(18), l[h + 1]), 1)).flat();
    O(() => T([wa.slice(1)], m.translate(-2).scale3d(3).rotate(90, 0)), 0);
    O(() => {
      const h = (d, q, p) =>
          O(v => {
            v.h = () => m.translate(x() * Math.sin(3 * d + a * d) * q);
            wa.map(({ x: y, z: B }) => {
              T(H(11, 1), m.translate(4 * y, 4, p + 4 * B).scale(0.8, 3, 0.8), V(0.5, 0.3, 0.7, 0.6));
              T(H(), m.translate(4 * y, 7, p + 4 * B).scale(1, 0.3), V(0.5, 0.5, 0.5, 0.3));
            });
            T(I(
              w(H(), m.translate(0, 0, p).scale(5, 1, 5), V(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(y =>
                w(H(), m.translate(5 * y, 0.2, p).rotate(-30 * y).scale(4, 1, 2), V(0.8, 0.8, 0.8, 0.3))
              ),
            ));
            T(H(), m.translate(0, -3, p).scale(8, 2, 8), V(0.4, 0.4, 0.4, 0.3));
          }),
        u = (d, q, p) =>
          m.translate(d + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, p).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        z = d =>
          I(
            w(H(), m.translate(0, -d / 2).scale(6, d - 1, 2.2)),
            w(H(), m.translate(0, -d / 2 - 6).scale(4, d - 3, 4)),
            w(H(32, 1), m.translate(0, d / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        x = () => {
          var d = k[2].i, q = 1 - k[4].i;
          return d < q ? d : q;
        },
        A = I(
          w(H(20, 1, 1.15, 1), m.translate(0, -3).scale(3.5, 1, 3.5), V(0.7, 0.4, 0.25, 0.7)),
          w(H(20, 1, 1.3, 1), m.translate(0, -2.5).scale(2.6, 1, 3), V(0.7, 0.4, 0.25, 0.2)),
          w(H(), m.translate(4, -1.2).scale3d(2), V(0.7, 0.4, 0.25, 0.3)),
        ),
        E = r(7, d => w(H(6, 1), m.translate(4 * (d / 6 - 0.5), 3).scale(0.2, 3, 0.2), V(0.3, 0.3, 0.38))).flat(),
        C = (O(d => {
          d.h = () => u(-12, 4.2, 40 * ka - 66);
          T(A);
          tb(m.translate(0, -3, 4));
        }),
          tb(m.translate(-5.4, 1.5, -19).rotate(0, -90)),
          ub(m.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          ub(
            m.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...cb(18).map(({ x: d, z: q }) => [7 * d, 10 * q, 4.5 - 2 * (0 > d ? -d : d)]),
          ),
          T(H(), m.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), V(0.8, 0.8, 0.8, 0.2)),
          wa.map(({ x: d, z: q }) => T(H(6), m.translate(3 * d, 3, 15 * q).scale(0.7, 4, 0.7), V(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(d => T(H(), m.translate(0, 0, d).scale(3, 1, 8), V(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((d, q) => {
            T(H(), m.translate(0, 6.3, d).scale(4, 0.3, 1), V(0.3, 0.3, 0.3, 0.4));
            T(H(), m.translate(0, 1, d).scale(3, 0.2, 0.35), V(0.5, 0.5, 0.5, 0.3));
            O(p => {
              p.h = () => m.translate(0, 0, d).scale(1, Ra(1.22 - k[q + 1].g), 1);
              T(E);
            });
          }),
          r(5, d =>
            r(2, q =>
              T(
                n,
                m.translate(18.5 * (q - 0.5), 0, 4.8 * d - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2),
                V(1, 1, 0.8, 0.2),
              ))),
          T(H(), m.translate(3, 1.5, -20).scale(0.5, 2, 5), V(0.7, 0.7, 0.7, 0.2)),
          T(H(), m.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), V(0.75, 0.75, 0.75, 0.2)),
          T(H(5), m.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), V(0.6, 0.3, 0.3, 0.4)),
          T(H(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), V(0.8, 0.2, 0.2, 0.5)),
          T(I(
            pb(
              w(H(6, 0, 0, 0.3), m.translate(8, -3, -4).scale(13, 1, 13), V(0.7, 0.7, 0.7, 0.2)),
              w(H(6), m.translate(0, -8).scale(9, 8, 8), V(0.4, 0.2, 0.5, 0.5)),
              w(H(6, 0, 0, 0.3), m.translate(0, -0.92).scale(13, 2, 13), V(0.8, 0.8, 0.8, 0.2)),
            ),
            w(H(5), m.scale(5, 30, 5), V(0.4, 0.2, 0.6, 0.5)),
            w(H(5, 0, 1.5), m.translate(0, 1).scale(4.5, 0.3, 4.5), V(0.7, 0.5, 0.9, 0.2)),
            w(H(), m.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), V(0.5, 0.5, 0.5, 0.5)),
            w(H(6), m.translate(15, -1.5, 4).scale(3.5, 1, 3.5), V(0.5, 0.5, 0.5, 0.5)),
          )),
          O(d => {
            d.h = () =>
              m.translate(
                0,
                0.01 < k[3].g ? (5 * Math.cos(1.5 * a) + 2) * k[3].i * (1 - k[2].g) + -15 * (1 - k[3].g) : -500,
                0,
              );
            T(H(5), m.translate(0, -0.2).scale(5, 1, 5), V(0.6, 0.65, 0.7, 0.3));
            tb(m.translate(0, 1.2));
          }),
          tb(m.translate(15, -2, 4)),
          h(0.7, 12, 35),
          h(1, 8.2, 55),
          O(d => {
            d.h = () => m.translate(x() * Math.sin(a / 1.5 + 2) * 12);
            T(
              I(
                pb(
                  w(H(), m.scale(1.5, 1, 5), V(0.9, 0.9, 0.9, 0.2)),
                  w(H(6), m.scale(4, 1, 5), V(0.9, 0.9, 0.9, 0.2)),
                  w(H(), m.translate(0, -2).scale(2, 3.2, 1.9), V(0.3, 0.8, 0.5, 0.5)),
                  w(H(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), V(0.9, 0.9, 0.9, 0.2)),
                ),
                w(H(), m.scale(1.3, 10, 1.3), V(0.2, 0.7, 0.4, 0.6)),
              ),
              m.translate(0, 0, 45),
            );
            ub(m.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          T(H(), m.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2)),
          O(d => {
            d.h = () => m.translate(9.8 * (1 - x()));
            T(H(3), m.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), V(0.3, 0.6, 0.6, 0.2));
            T(H(8), m.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), V(0.8, 0.8, 0.8, 0.2));
            T(H(), m.translate(-23, -3, 55).scale(5.2, 1.7, 3), V(0.5, 0.5, 0.5, 0.3));
            T(H(), m.translate(-23, -2.2, 62).scale(3, 1, 4), V(0.5, 0.5, 0.5, 0.3));
            tb(m.translate(-23, -0.5, 66.5));
          }),
          O(d => {
            d.h = () => m.translate(0, Ra(1 - 5 * x()) * Ta(k[4].g, k[5].g) * Math.sin(1.35 * a) * 4);
            T(H(), m.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), V(0.7, 0.7, 0.7, 0.2));
            T(
              I(w(H(), m.scale(3, 1.4, 2.7)), w(H(), m.scale(1.2, 8, 1.2))),
              m.translate(-33, -3, 55),
              V(0.7, 0.7, 0.7, 0.2),
            );
          }),
          O(d => {
            d.h = () => m.translate(0, 0, Ra(1 - 5 * x()) * Ta(k[4].g, k[5].g) * Math.sin(0.9 * a) * 8);
            T(I(
              w(H(), m.translate(-27, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2)),
              w(H(), m.translate(-27, -3, 55).scale(1, 3), V(0.9, 0.9, 0.9, 0.2)),
            ));
            T(H(), m.translate(-39, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2));
          }),
          O(d => {
            d.h = () => m.translate(0, -6.5 * k[4].i);
            T(H(6), m.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), V(0.7, 0.7, 0.7, 0.4));
          }),
          tb(m.translate(-55, -1.1, 46).rotate(0, 90)),
          T(H(6), m.translate(-61.3, -2.4, 49).scale(3, 1, 5), V(0.4, 0.6, 0.6, 0.3)),
          T(H(7), m.translate(-57, -2.6, 46).scale(4, 1, 4), V(0.8, 0.8, 0.8, 0.3)),
          [
            ...w(H(), m.translate(0, -3).scale(11, 1.4, 3), V(0.9, 0.9, 0.9, 0.2)),
            ...I(
              w(H(6), m.rotate(90).scale(6, 8, 6), V(0.3, 0.6, 0.6, 0.3)),
              w(H(4, 0, 0.01), m.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), V(0.3, 0.6, 0.6, 0.3)),
              w(H(6), m.rotate(90).scale(5, 12, 5), V(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(d =>
                w(H(5), m.translate(d, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), V(0.3, 0.6, 0.6, 0.3))
              ),
            ),
          ]),
        D = (T(C, m.translate(-53, 0, 55)),
          O(d => {
            d.h = () => m.translate(-75, (1 - k[5].i) * (1 - k[6].g) * 3, 55).rotate(180 * (1 - k[5].i) + ia, 0);
            T(C);
          }, 2),
          T(H(), m.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), V(0.7, 0.7, 0.7, 0.2)),
          T(H(3, 0, -0.5), m.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), V(0.8, 0.8, 0.8, 0.2)),
          T(I(
            pb(
              w(H(), m.translate(-100, -2.5, 55).scale(8, 1, 8), V(0.8, 0.8, 0.8, 0.2)),
              w(H(), m.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), V(0.8, 0.8, 0.8, 0.2)),
              w(H(), m.translate(-100, -2.6, 70).scale(3, 1.1, 7), V(0.8, 0.8, 0.8, 0.2)),
              w(H(), m.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), V(0.8, 0.8, 0.8, 0.2)),
              w(H(6), m.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), V(0.6, 0.6, 0.6, 0.3)),
              w(H(), m.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), V(0.8, 0.8, 0.8, 0.2)),
              w(H(), m.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), V(0.8, 0.8, 0.8, 0.2)),
            ),
            w(H(8), m.translate(-100, -1, 55).scale(7, 0.9, 7), V(0.3, 0.3, 0.3, 0.4)),
            w(H(8), m.translate(-100, -2, 55).scale(4, 0.3, 4), V(0.4, 0.4, 0.4, 0.5)),
            w(H(8), m.translate(-100, -3, 55).scale(0.6, 1, 0.6), V(0.4, 0.4, 0.4, 0.5)),
          )),
          ub(m.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          ub(m.translate(-89, 0.2, 80), [0, 0, 6]),
          T(I(
            w(H(), m.translate(-100, 1, 63).scale(7.5, 4), V(0.5, 0.5, 0.5, 0.4)),
            w(H(), m.translate(-100, 0, 70).scale(2, 2, 10), V(0.5, 0.5, 0.5, 0.4)),
            w(H(20, 1), m.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), V(0.5, 0.5, 0.5, 0.4)),
          )),
          O(d => {
            d.h = () => m.translate(-99.7, -1.9, 63.5).scale(1, Ra(1.1 - k[6].g), 1);
            T(E);
          }),
          wa.map(({ x: d, z: q }) => {
            T(H(6), m.translate(7 * d - 100, -3, 7 * q + 55).scale(1, 8.1), V(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(p =>
              T(H(6), m.translate(7 * d - 100, p, 7 * q + 55).scale(1.3, 0.5, 1.3), V(0.4, 0.2, 0.2, 0.8))
            );
          }),
          r(7, d => {
            T(
              H((23 * d + 1) % 5 + 5, 0, 0.55),
              m.translate(5 * Math.sin(d) - 101 + d, -2.3 - d, 44.9 - 2.8 * d).scaleSelf(
                5 + d / 2,
                1 + d / 6,
                5 + d / 3,
              ),
              V(0.5 - d / 17, 0.5 - (1 & d) / 9, 0.6, 0.3),
            );
          }),
          T(H(), m.translate(-87, -9.5, 24).scale(7, 1, 3), V(0.4, 0.5, 0.6, 0.4)),
          T(H(4), m.translate(-86, -9.2, 27).scale(5, 1, 5), V(0.5, 0.6, 0.7, 0.3)),
          T(H(12, 1), m.translate(-86, -9, 31).scale(1.5, 1, 1.5), V(0.3, 0.3, 0.4, 0.1)),
          tb(m.translate(-86, -7.5, 31)),
          O(d => {
            d.h = () => m.translate(0, 3.5 * (1 - Pa(k[6].g, k[7].g)) + Ta(k[7].i, k[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(q =>
              T(H(), m.translate(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.2, 0.5, 0.6, 0.2))
            );
          }),
          O(d => {
            d.h = () =>
              m.translate(0, Ta(k[7].i, k[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ta(k[7].i, k[6].i));
            [6, 18].map(q => T(H(), m.translate(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.1, 0.4, 0.5, 0.2)));
          }),
          T(
            I(
              pb(
                w(H(), m.scale(11, 1, 13), V(0.3, 0.4, 0.6, 0.3)),
                w(H(5), m.translate(0, 0, -7).scale(2, 1.2, 2), V(0.2, 0.4, 0.7, 0.3)),
                w(H(5), m.scale(9, 1.2, 9), V(0, 0.2, 0.3, 0.5)),
              ),
              w(H(5), m.scale(5.4, 5, 5.4), V(0, 0.2, 0.3, 0.5)),
            ),
            m.translate(-38.9, -11.3, 17),
          ),
          tb(m.translate(-38.9, -9.6, 10)),
          O(d => {
            d.h = () => m.translate(0, -7.3 * k[7].i);
            T(
              I(
                pb(
                  w(H(5), m.translate(0, 2).scale(5, 7, 5).skewY(8), V(0.2, 0.4, 0.5, 0.5)),
                  w(H(5), m.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), V(0.25, 0.35, 0.5, 0.5)),
                  w(H(5), m.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), V(0.35, 0.3, 0.5, 0.5)),
                ),
                w(H(5), m.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), V(0.2, 0.4, 0.5, 0.5)),
              ),
              m.translate(-38.9, -11.3, 17),
            );
            ub(m.translate(-39.1, -0.6, 17).rotate(11), ...cb(15).map(({ x: q, z: p }) => [3 * q, 3 * p, 1.2]));
          }),
          wa.map(({ x: d, z: q }) => {
            T(H(14, 1), m.translate(9 * d - 38.9, -7.3, 11 * q + 17).scale(1, 4), V(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(p =>
              T(
                H(17, 1),
                m.translate(9 * d - 38.9, -7.3, 11 * q + 17).translate(0, p - 4).scale(1.5, 0.5, 1.5),
                V(0.6, 0.6, 0.6, 0.3),
              )
            );
          }),
          T(
            I(
              pb(
                w(H(6), m.translate(0, 0, -36).scale(15, 1.2, 15), V(0.7, 0.7, 0.7, 0.3)),
                w(H(), m.translate(0, 0, -18).scale(4, 1.2, 6), V(0.45, 0.4, 0.6, 0.3)),
              ),
              ...r(6, d =>
                r(6, q =>
                  w(
                    H(6),
                    m.translate(4.6 * q - 12 + 2 * (1 & d), 0, 4.6 * d - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2),
                    V(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            m.translate(-38.9, -11.3, 17),
          ),
          ub(m.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          T(H(5), m.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), V(0.8, 0.1, 0.25, 0.4)),
          tb(m.translate(-84, -0.5, 85).rotate(0, 45)),
          O(d => {
            d.h = () => u(-123, 1.4, 55 + -65 * la);
            T(A);
            tb(m.translate(0, -3, -4).rotate(0, 180));
          }),
          ub(m.translate(-115, 0.2, -12), [0, 0, 3.5]),
          I(
            w(H(), m.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), V(0.25, 0.25, 0.35, 0.3)),
            w(H(3), m.translate(0, 0, -5.5).scale(3, 2), V(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(d => w(H(), m.translate(d, -0.5, 1).scale(0.14, 0.3, 6.5), V(0.7, 0.2, 0, 0.3))),
          ));
      O(d => {
        d.h = () => m.translate(0, -2, Ta(k[10].g, k[11].g) * Qa(Math.sin(1.1 * a)) * -8.5 + 10);
        r(2, q => T(D, m.translate(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      O(d => {
        d.h = () => m.translate(0, -2, Ta(k[10].g, k[11].g) * Qa(Math.sin(2.1 * a)) * -8.5 + 10);
        r(2, q => T(D, m.translate(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      O(d => {
        d.h = () =>
          m.translate(
            0,
            -2,
            -8.5 * Pa((1 - k[10].g) * (1 - Ta(k[10].g, k[11].g)), Ta(k[10].g, k[11].g) * Qa(Math.sin(1.5 * a))) + 10,
          );
        r(3, q => T(D, m.translate(9 * q - 106, 1.7, -12)));
      });
      T(
        I(
          pb(
            w(H(), m.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
            w(H(), m.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),
          ),
          ...r(4, d => w(H(), m.translate(13 + 9 * d + (1 & d), -0.8, 9).scale(1.35, 1.35, 9))),
          ...r(3, d => w(H(), m.translate(17 + 9 * d, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        m.translate(-123, 0, -12),
        V(0.5, 0.5, 0.6, 0.2),
      );
      tb(m.translate(-116, -1.4, -18).rotate(0, 180));
      T(H(), m.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), V(0.8, 0.8, 0.8, 0.2));
      T(H(6), m.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), V(0.6, 0.5, 0.7, 0.2));
      T(H(), m.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), V(0.6, 0.6, 0.6, 0.3));
      T(H(8), m.translate(-114, -17, -2).scale(2, 15, 2), V(0.6, 0.6, 0.6, 0.3));
      T(H(8), m.translate(-79, -17, -2).scale(2, 15, 2), V(1, 1, 1, 0.3));
      T(H(), m.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), V(0.6, 0.6, 0.6, 0.3));
      r(3, d => {
        T(z(16), m.translate(12 * d - 109, -9, -12), V(0.6, 0.6, 0.6, 0.3));
        T(z(16), m.translate(-77, -9, -12 * d - 20).rotate(0, 90), V(0.6, 0.6, 0.6, 0.3));
      });
      T(I(
        w(H(12), m.translate(-77, -14.5, -12).scale(4, 17.5, 4), V(0.7, 0.7, 0.7, 0.2)),
        w(H(), m.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), V(0.4, 0.5, 0.6, 0.2)),
        w(H(), m.translate(-77, 0.1, -14).scale(1.5, 2, 2), V(0.4, 0.5, 0.6, 0.2)),
        w(H(12), m.translate(-77, 3.1, -12).scale(3, 5, 3), V(0.4, 0.5, 0.6, 0.2)),
      ));
      T(H(), m.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), V(0.6, 0.6, 0.6, 0.3));
      T(H(9), m.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), V(0.5, 0.5, 0.5, 0.3));
      T(I(
        w(H(), m.translate(-93, -5.8, -40).scale(9, 1, 5), V(0.8, 0.8, 0.8, 0.1)),
        w(H(9), m.translate(-98, -5.8, -40).scale(3, 8, 3), V(0.7, 0.7, 0.7, 0.2)),
      ));
      tb(m.translate(-98, -4.4, -40).rotate(0, 90));
      ub(m.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      T(I(
        pb(
          w(H(6, 0, 0, 0.6), m.translate(-100, 0.7, 105.5).scale(8, 1, 11), V(0.7, 0.7, 0.7, 0.2)),
          w(H(), m.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), V(0.7, 0.7, 0.7, 0.2)),
        ),
        w(H(5), m.translate(-100, 0.7, 113).scale(4, 3, 4), V(0.7, 0.7, 0.7, 0.2)),
      ));
      r(4, d =>
        O(q => {
          q.h = () => {
            const p = Ta(k[8].i, k[12].i);
            return m.translate(
              (2 < d ? 2 * (1 - p) + p : 0) - 100,
              p * Math.sin(1.3 * a + 1.7 * d) * (3 + d / 3) + 0.7,
              115 + (1 & d ? -1 : 1) * (1 - k[8].i) * (1 - k[12].i) * -7
                + (0.05 > p ? 0.05 : p) * Math.cos(1.3 * a + 7 * d) * (4 - 2 * (1 - d / 3)),
            );
          };
          T(
            H(6),
            m.translate(-14.6 - 4.8 * d - (2 < d ? 2 : 0), -d / 2.3, -21.5).scale(2.6, 1, 2.5),
            V(0.5 - d / 8, d / 12 + 0.5, 0.7, 0.3),
          );
        }));
      O(d => {
        d.h = () => {
          const q = Ta(k[8].i, k[12].i);
          return m.translate(2.5 * (1 - q) - 139.7, -3 * (1 - k[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
            .rotateSelf(Math.cos(1.3 * a) * (3 * q + 3), 0);
        };
        T(I(w(H(10), m.scale(6, 2, 6), V(0.1, 0.6, 0.5, 0.3)), w(H(10), m.scale(3.3, 6, 3.3), V(0.1, 0.6, 0.5, 0.5))));
        T(H(15, 1), m.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), V(0.4, 0.4, 0.4, 0.3));
        T(H(10), m.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), V(0.3, 0.8, 0.7, 0.3));
        T(H(5), m.translate(-7.5).rotate(0, 90).scale(1, 3), V(0.5, 0.5, 0.5, 0.5));
        tb(m.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(q =>
          T(n, m.rotate(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), V(1, 1, 0.8, 0.2))
        );
        ub(m.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(d => {
        T(H(12, 1), m.translate(-7.5 * d - 100, 3.7, 96).scale(0.8, 4, 0.8), V(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(q =>
          T(H(15, 1), m.translate(-7.5 * d - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), V(0.5, 0.24, 0.2, 0.4))
        );
        T(n, m.translate(-5 * d - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * d - 90), V(1, 1, 0.8));
        T(
          I(
            w(H(), m.translate(-4 * d, 3.5, -0.5).scale(4, 4, 0.7), V(0.5, 0.5, 0.5, 0.4)),
            w(H(), m.scale(3, 3, 10), V(0.6, 0.24, 0.2, 0.5)),
            w(H(28, 1), m.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), V(0.6, 0.24, 0.2, 0.5)),
            w(H(5), m.translate(-5.3 * d, 7).rotate(90, 0).scale(1.7, 5, 1.7), V(0.6, 0.24, 0.2, 0.5)),
            w(H(5), m.translate(-5.3 * d, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), V(0.6, 0.24, 0.2, 0.5)),
          ),
          m.translate(d - 100, 0.7, 97),
        );
      });
      O(d => {
        d.h = () => m.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - k[12].g);
        T(E);
      });
      T(I(
        w(H(), m.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), V(0.7, 0.7, 0.7, 0.1)),
        w(H(45, 1), m.translate(-81, 0.7, 106).scale3d(7.7), V(0.7, 0.7, 0.7, 0.1)),
      ));
      O(d => {
        d.h = () => m.translate(-81, 0.6, 106).rotate(0, 40 + fa);
        T(I(
          w(H(45, 1), m.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)),
          w(H(), m.translate(0, 0, -5.5).scale(1.5, 3, 2.7), V(0.45, 0.45, 0.45, 0.2)),
        ));
        T(H(8), m.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), V(0.7, 0.7, 0.7, 0.1));
        T(H(5), m.translate(0, 2).scale(1, 2), V(0.3, 0.3, 0.3, 0.2));
        ub(m.translate(0, 3), ...cb(14).map(({ x: q, z: p }) => [5.6 * q, 5.6 * p, 2]));
      });
      O(d => {
        d.h = () => m.translate(-65.8, 0.8, 106).rotate(0, ha);
        [-1, 1].map(q =>
          T(n, m.rotate(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), V(1, 1, 0.8))
        );
        T(I(
          w(H(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), V(0.35, 0, 0, 0.3)),
          w(H(), m.scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
        ));
        T(w(H(28, 1), m.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)));
        T(w(H(5), m.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2)));
      });
      O(d => {
        d.h = () => m.translate(-50.7, 0.8, 106).rotate(0, 180 - ha);
        T(I(
          w(H(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), V(0.35, 0, 0, 0.3)),
          w(H(), m.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
          w(H(), m.translate(0, 0, 7).scale(2, 5, 9), V(0.3, 0, 0, 0.3)),
        ));
        T(w(H(28, 1), m.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)));
        T(w(H(5), m.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2)));
      });
      O(d => {
        d.h = () => m.translate(-50.7, 0.8, 91).rotate(0, 270 + ha);
        T(I(
          w(H(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), V(0.35, 0, 0, 0.3)),
          w(H(), m.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
          w(H(), m.translate(0, 0, -7).scale(2, 5, 9), V(0.3, 0, 0, 0.3)),
        ));
        T(w(H(28, 1), m.scale(7.5, 1, 7.5), V(0.45, 0.45, 0.45, 0.2)));
        T(w(H(5), m.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2)));
      });
      T(H(), m.translate(-58, 1, 106).scale(2, 0.65, 2), V(0.7, 0.7, 0.7, 0.2));
      T(H(), m.translate(-50.7, 1, 99).scale(2, 0.65, 1), V(0.7, 0.7, 0.7, 0.2));
      T(H(), m.translate(-42, 0.4, 91).scale(5, 1, 2.5), V(0.7, 0.7, 0.7, 0.3));
      T(H(), m.translate(-34.2, 0.4, 91).scale(3, 1, 3), V(0.7, 0.7, 0.7, 0.3));
      tb(m.translate(-34, 2.7, 96).rotate(-12, 0));
      T(H(5), m.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), V(0.2, 0.5, 0.5, 0.6));
      [V(0.1, 0.55, 0.45, 0.2), V(0.2, 0.5, 0.5, 0.3), V(0.3, 0.45, 0.55, 0.4)].map((d, q) =>
        O(p => {
          p.h = () =>
            m.translate(
              0,
              (1 - k[13].i) * (1 - k[14].i) * (q ? 0 : 3) + Ta(k[13].i, k[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4,
            );
          T(H(), m.translate(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), d);
          2 === q && T(H(), m.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), V(0.7, 0.7, 0.7, 0.3));
          1 === q
            && T(H(), m.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), V(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(d => T(n, m.translate(-8 * d, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * d + 90), V(1, 1, 0.8)));
      r(
        3,
        d =>
          T(
            z(24.7 - 0.7 * (1 & d)),
            m.translate(6 * d - 6, 4 - (1 & d), 111 - 0.2 * (1 & d)),
            1 & d ? V(0.5, 0.5, 0.5, 0.3) : V(0.35, 0.35, 0.35, 0.5),
          ),
      );
      T(I(
        w(H(6, 0, 0, 0.3), m.translate(0, -0.92, 95).scale(14, 2, 14), V(0.8, 0.8, 0.8, 0.2)),
        w(H(5), m.translate(0, 0, 95).scale3d(6), V(0.3, 0.3, 0.3, 0.5)),
      ));
      tb(m.translate(0, 1.7, 82).rotate(0, 180));
      T(H(5), m.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), V(0.5, 0.3, 0.3, 0.4));
      T(H(6), m.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), V(0.5, 0.6, 0.7, 0.3));
      T(H(), m.translate(0, 16, 129).scale(1.5, 1, 2), V(0.5, 0.6, 0.7, 0.3));
      T(H(7), m.translate(0, 16.2, 133).scale(5, 1, 5), V(0.4, 0.5, 0.6, 0.4));
      T(I(
        pb(
          w(H(), m.translate(0, 16, 110.5).scale(12, 1, 3), V(0.5, 0.3, 0.3, 0.4)),
          w(H(), m.translate(0, 16, 111).scale(3, 1, 3.8), V(0.5, 0.3, 0.3, 0.4)),
        ),
        w(H(5), m.translate(0, 16, 103.5).scale(5.5, 5, 5.5), V(0.5, 0.3, 0.3, 0.4)),
      ));
      O(d => {
        d.h = () => {
          const q = Math.sin(a);
          return m.translate(-2 * q).rotate(25 * q);
        };
        T(H(3), m.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), V(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(q => {
          T(H(6), m.translate(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), V(0.7, 0.7, 0.7, 0.4));
          T(H(), m.translate(0, 6.2, q + 95).scale(0.5, 11, 0.5), V(0.5, 0.3, 0.3, 0.4));
        });
      });
      O(d => {
        d.h = () => {
          const q = Ta(Ta((k[14].g + k[14].i) / 2, k[13].i), (k[15].g + k[15].i) / 2);
          return m.translate(0, 16 * q, 8.5 * Ra(2 * q - 1) + 95);
        };
        T(H(5), m.scale(5, 1.1, 5), V(0.5, 0.3, 0.3, 0.4));
        T(H(5), m.scale(5.5, 0.9, 5.5), V(0.25, 0.25, 0.25, 0.4));
        tb(m.translate(0, 1.5, -1).rotate(0, 180));
      });
      ub(m.translate(0, 3, 95), ...cb(9).map(({ x: d, z: q }) => [9 * d, 9 * q, 4]));
      ub(m.translate(0, 19, 134), [0, 0, 3.5]);
    });
    O(() => {
      [0, 180].map(u => T(n, m.rotate(0, u).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), V(1, 1, 0.8)));
      T(gb(20), m.translate(0, 1).scale(0.5, 0.5, 0.5), V(1, 0.3, 0.4));
      const h = w(
        I(H(15, 1), w(H(), m.translate(0, 0, 1).scale(2, 2, 0.5))),
        m.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        V(0.3, 0.3, 0.3),
      );
      [-1, 1].map(u => T(h, m.translate(0.2 * u, 1.2, 0.4).rotate(0, 20 * u, 20 * u)));
      T(H(), m.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), V(0.3, 0.3, 0.3));
      T(gb(20), m.scale(0.7, 0.8, 0.55), V(1, 0.3, 0.4));
    });
    [-1, 1].map(h =>
      O(() => {
        T(H(10, 1), m.translate(0.3 * h, -0.8).scale(0.2, 0.7, 0.24), V(1, 0.3, 0.4));
      })
    );
    O(() => {
      T(H(6, 1), m.scale(0.13, 1.4, 0.13), V(0.3, 0.3, 0.5, 0.1));
      T(H(8, 1), m.translate(0, 1).scale(0.21, 0.3, 0.21), V(1, 0.5, 0.2));
      T(H(3), m.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), V(0.2, 0.2, 0.2, 0.1));
    }, 0);
    O(() => {
      T(H(6).slice(0, -1), m.scale(0.77, 1, 0.77), V(1, 0.3, 0.5));
    }, 0);
    O(() => {
      T(
        gb(30, 24, (h, u, z) => {
          const x = u / 24, A = h * Math.PI * 2 / 30, E = x ** 0.6 * Math.PI / 2;
          h = x * x * Math.sin(h * Math.PI * 14 / 30) / 4;
          return 23 === u
            ? { x: z.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(A) * Math.sin(E),
              y: Math.cos(x * Math.PI) - x - h,
              z: Math.sin(A) * Math.sin(E) + Math.sin(h * Math.PI * 2) / 4,
            };
        }),
        m.scale3d(0.7),
        V(1, 1, 1),
      );
      [-1, 1].map(h => T(gb(12), m.translate(0.16 * h, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls: <b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n",
);
