let ca = 0,
  da = 0,
  a = 0,
  ea = 0,
  fa = 0,
  ia = 0,
  ja = 0,
  ka = 0,
  ma = 0,
  na = 0,
  pa = 0,
  qa = 0,
  e = 0.066,
  ra = 1,
  ta,
  ua,
  va,
  wa,
  xa;
const ya = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  f = [],
  l = [],
  za = [],
  Aa = [],
  Ba = [[
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
var Da = 0, Ea = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180,
  q = new DOMMatrix(),
  La = new Float32Array(16),
  Ma = new Float32Array(624),
  Na = (d, c) => Array.from(Array(d), (h, k) => c(k)),
  Oa = d => 4 < d ? 4 : d,
  Qa = (d, c) => c < d ? d : c,
  Ra = d => 0 > d ? -d : d,
  Sa = d => 0 > d ? 0 : 1 < d ? 1 : d,
  Ta = (d, c, h) => d + (c - d) * (0 > h ? 0 : 1 < h ? 1 : h),
  Ua = (d, c) => (d = 0 > d ? 0 : 1 < d ? 1 : d, d + (1 - d - d) * (0 > c ? 0 : 1 < c ? 1 : c)),
  Va = d => Math.atan2(Math.sin(d *= Ka), Math.cos(d)) / Ka,
  Wa = (d, c, h) =>
    ((d *= Ka) + (2 * (c = (c * Ka - d) % (2 * Math.PI)) % (2 * Math.PI) - c) * (0 > h ? 0 : 1 < h ? 1 : h)) / Ka,
  Xa = ({ x: d, y: c, z: h }) => Math.hypot(d - m.x, c - m.y, h - m.z),
  Ya = ({ x: d, y: c, z: h }, k) => d * k.x + c * k.y + h * k.z,
  Za = d => {
    let c = 0, h = 0, k = 0, n, p = d.at(-1);
    for (n of d) {
      c += (p.y - n.y) * (p.z + n.z), h += (p.z - n.z) * (p.x + n.x), k += (p.x - n.x) * (p.y + n.y), p = n;
    }
    return n = Math.hypot(c, h, k), c /= n, h /= n, k /= n, { x: c, y: h, z: k, w: c * p.x + h * p.y + k * p.z };
  },
  $a = (
    d,
    c = La,
    h = 0,
  ) => (h *= 16,
    c[h++] = d.m11,
    c[h++] = d.m12,
    c[h++] = d.m13,
    c[h++] = d.m14,
    c[h++] = d.m21,
    c[h++] = d.m22,
    c[h++] = d.m23,
    c[h++] = d.m24,
    c[h++] = d.m31,
    c[h++] = d.m32,
    c[h++] = d.m33,
    c[h++] = d.m34,
    c[h++] = d.m41,
    c[h++] = d.m42,
    c[h++] = d.m43,
    c[h] = d.m44,
    c),
  ab = (d, c, h, k) => [d, 0, 0, 0, 0, c, 0, 0, 0, 0, (k + h) / (h - k), -1, 0, 0, 2 * k * h / (h - k), 0],
  bb = (d, c, h) => (d.D = h, d.A = c, d),
  cb = (d, c, h = d.A) =>
    bb(
      d.map(k => {
        let n, p;
        return { x: k, y: n, z: p } = k,
          { x: k, y: n, z: p } = c.transformPoint({ x: k, y: n, z: p }),
          { x: k, y: n, z: p };
      }),
      h,
      d.D,
    ),
  r = (d, c, h) => d.map(k => cb(k, c, h)),
  db = (d, c = 0) =>
    Na(d, h => {
      const k = Math.cos(2 * Math.PI * h / d);
      return { x: Math.sin(2 * Math.PI * h / d), y: 0, z: 0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - c : k + c };
    }),
  eb = (d, c, h) =>
    d.map((k, n, { length: p }) => bb([k, c[p - n - 1], c[p - (n + 1) % p - 1], d[(n + 1) % p]], d.A, h)),
  G = (
    d,
    c,
    h = 0,
    k,
  ) => (d = d ? db(d, k) : ya,
    k = cb(d, q.translate(0, 1).scale3d(0 < h ? h : 1)),
    d = cb(d, q.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse(),
    [...eb(d, k, c), k, d]),
  hb = (
    d,
    c = d,
    h = (
      k,
      n,
    ) => (n *= Math.PI / c,
      { x: Math.cos(k *= 2 * Math.PI / d) * Math.sin(n), y: Math.cos(n), z: Math.sin(k) * Math.sin(n) }),
  ) => {
    const k = [];
    for (let n = 0; d > n; n++) {
      for (let p = 0; c > p; p++) {
        const v = bb([], 0, 1);
        k.push(v);
        v.push(h(n, p, v));
        p && v.push(h((n + 1) % d, p, v));
        c - 1 > p && v.push(h((n + 1) % d, p + 1 % c, v));
        v.push(h(n, p + 1 % c, v));
      }
    }
    return k;
  },
  ib = (d, c) => {
    var h, k, n, p = c.C;
    for (var v = 0; p.length > v; ++v) {
      if (-0.00008 > (h = Ya(d, p[v]) - d.w) ? n = c : 8e-5 < h && (k = c), n && k) {
        k = [];
        n = [];
        p = c.C;
        v = c.B;
        let y = p.at(-1), x = Ya(d, y) - d.w;
        for (const D of p) {
          h = Ya(d, D) - d.w,
            8e-5 > x && n.push(y),
            -0.00008 < x && k.push(y),
            (8e-5 < x && -0.00008 > h || -0.00008 > x && 8e-5 < h)
            && (x /= h - x,
              y = { x: y.x + (y.x - D.x) * x, y: y.y + (y.y - D.y) * x, z: y.z + (y.z - D.z) * x },
              k.push(y),
              n.push(y)),
            y = D,
            x = h;
        }
        return {
          o: 2 < k.length && { C: bb(k, p.A, p.D), B: v, u: c },
          m: 2 < n.length && { C: bb(n, p.A, p.D), B: v, u: c },
        };
      }
    }
    return { o: k, m: n };
  },
  jb = (d, c, h = Za(c.C)) => {
    let k, n, p;
    return d
      ? ({ o: k, m: n } = ib(d, c), k || n || d.s.push(c), k && (d.o = jb(d.o, k, h)), n && (d.m = jb(d.m, n, h)))
      : ({ x: k, y: n, z: h, w: p } = h, d = { x: k, y: n, z: h, w: p, s: [c], o: 0, m: 0 }),
      d;
  },
  kb = (d, c, h) => {
    const k = [],
      n = (p, v) => {
        let { o: y, m: x } = ib(p, v);
        y || x || (0 < h * Ya(p, c) ? y = v : x = v);
        y && (p.o ? n(p.o, y) : k.push(y));
        x && p.m && n(p.m, x);
      };
    for (const p of c.s) {
      n(d, p);
    }
    return k;
  },
  lb = (d, c) => d && (c(d), lb(d.o, c), lb(d.m, c)),
  ob = d => d.length ? d.reduce((c, h) => jb(c, { C: h, B: 0, u: 0 }), 0) : d,
  pb = d => (lb(d, c => {
    const h = c.m;
    c.m = c.o;
    c.o = h;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const k of c.s) {
      k.B = !k.B;
    }
  }),
    d),
  qb = (...d) =>
    d.reduce((c, h) => {
      const k = [];
      if (c = ob(c), h) {
        h = ob(h);
        lb(c, n => n.s = kb(h, n, 1));
        lb(h, n => k.push([n, kb(c, n, -1)]));
        for (let [n, p] of k) {
          for (const v of p) {
            jb(c, v, n);
          }
        }
      }
      return c;
    }),
  J = (d, ...c) => pb(qb(pb(ob(d)), ...c)),
  O = d => {
    const c = new Map(),
      h = new Map(),
      k = n => {
        let p;
        return n.u && ((p = c.get(n.u)) ? (h.delete(p), n = k(n.u)) : c.set(n.u, n)), n;
      };
    return lb(d, n => {
      for (const p of n.s) {
        h.set(k(p), p.B);
      }
    }),
      Array.from(h, ([{ C: n }, p]) => {
        const v = n.map(({ x: y, y: x, z: D }) => ({ x: y, y: x, z: D }));
        return bb(p ? v.reverse() : v, n.A, n.D);
      });
  },
  P = (d, c, h) => d + (c - d) * Sa(1 - Math.exp(-h * e)),
  rb = () => {
    const d = Ua(l[12].g, l[13].g);
    ja = Ta(P(ja, 0, 1), Va(ja + 60 * e), l[5].g - l[6].i);
    fa = Ta(P(fa, 0, 5), Va(fa + 56 * e), d);
    ia = Ta(P(ia, 0, 4), Va(ia + 48 * e), d);
    na = P(na, l[9].i, 0.2 + 0.3 * Ra(2 * l[9].i - 1));
    ma = P(ma, ka ? ma + (-9 - ma) * Sa(1.5 * e) : Sa(a / 3), 1);
    ra && a > ra && (ra = 0, h4.innerHTML = "");
    l[0].l && 0.8 < l[0].g && (13 > ca
      ? (1 / 0 > ra && (ra = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), l[0].l = 0)
      : ka
        || (1 / 0 > ra && (ra = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ka = 1));
    for (const c of f) {
      c.h && (c.j = c.h());
    }
    for (const c of l) {
      c.h();
    }
    for (const c of za) {
      c.h();
    }
  },
  sb = () => {
    h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ca = za.reduce((d, { l: c }) => d + c, 0)];
  },
  tb = () => {
    localStorage.DanteSP22 = JSON.stringify([l.map(({ l: d }) => d), za.map(({ l: d }) => d), ea, a, na]);
  },
  T = (d, c = 1) => {
    const h = va;
    c = { j: q, H: f.length, G: c, s: [] };
    return f.push(va = c), d(c), va = h, c;
  },
  V = (d, c = q, h) => va.s.push(...r(d, c, h)),
  ub = d => {
    const c = va,
      h = l.length,
      k = {
        l: 0,
        g: 0,
        i: 0,
        u: c,
        h() {
          const n = k.l, p = k.g, v = k.i, y = c.j.multiply(d);
          k.I = y;
          3 > Xa(y.transformPoint()) && Aa[5] && (0.3 > p || 0.7 < p)
            && (k.l = n ? 0 : 1, h && 1 / 0 > ra && (ra = a + 1, h4.innerHTML = "* click *"), ea = h, tb());
          k.g = P(p, n, 4);
          k.i = P(v, n, 1);
          k.j = y.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    l.push(k);
    V(G(5), d.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    V(G(5), d.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    V(G(), d.translate(0, -0.4).scale(0.5, 0.1, 0.5), X(0.5, 0.5, 0.4));
  },
  vb = (d, ...c) => {
    let h = -1, k = 0, n = 0, p = 0, v = 0, y = 0, x = 1, D = 3;
    const w = {
        l: 0,
        h() {
          if (!w.l) {
            let la, M, Q, R, H, u, N = 1, K = 1 / 0, S;
            for (const U of z) {
              var { x: I, z: L, w: F } = U;
              L = (I = Math.hypot(b - I, g - L)) - F;
              S ||= I < F;
              0 < L && K > L && (K = L, B = U);
              var W = I / F;
              N = N < W ? N : W;
            }
            S
              || ({ x: la, z: M, w: Q } = B,
                R = b - la,
                H = g - M,
                u = Math.hypot(R, H),
                Y = Math.atan2(-H, R),
                x && (n = (Math.random() - 0.5) * Math.PI / 2, D = Qa(1, D / (1 + Math.random()))),
                Y += n,
                h = -Math.cos(Y),
                k = Math.sin(Y),
                0.1 < u && (u = (u < Q ? u : Q) / (u || 1), b = R * u + la, g = H * u + M));
            x = S;
            D = P(D, 3 + 6 * (1 - N), 3 + N);
            t = P(t, b = P(b, b + h, D), D);
            C = P(C, g = P(g, g + k, D), D);
            p = Wa(p, Math.atan2(t - v, C - y) / Ka - 180, 3 * e);
            v = t;
            y = C;
            var Y = (w.j = A.j.multiply(d.translate(t, 0, C).rotateSelf(0, p, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.55 > Xa(Y)
              && (w.l = 1,
                W = [
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
                  > ra && (ra = a + (ca && 12 > ca ? 5 : 7), h4.innerHTML = W),
                sb(),
                tb());
          }
          w.l
            && (w.j = f[2].j.translate(
              E % 4 * 1.2 - 1.7 + Math.sin(a + E) / 7,
              -2,
              1.7 * (E / 4 | 0) - 5.5 + Ra(E % 4 - 2) + Math.cos(a / 1.5 + E) / 6,
            ));
        },
      },
      A = va,
      E = za.length,
      z = c.map(([I, L, F]) => ({ x: I, z: L, w: F }));
    let B = z[0], { x: b, z: g } = B, t = b, C = g;
    za.push(w);
  },
  wb = (d, c, h, k) => {
    let n = 0, p = 0, v = 0, y = 1 / 0, x = -1 / 0, D = 1 / 0, w = -1 / 0, A = 1 / 0, E = -1 / 0;
    const z = 1.1 * (h - c),
      B = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, h))).multiplySelf(d).invertSelf();
    return c = Na(
      8,
      b => (b = B.transformPoint({ x: 4 & b ? 1 : -1, y: 2 & b ? 1 : -1, z: 1 & b ? 1 : -1 }),
        n -= b.x = (z * b.x | 0) / z / b.w,
        p -= b.y = (z * b.y | 0) / z / b.w,
        v -= b.z = (z * b.z | 0) / z / b.w,
        b),
    ),
      h = q.rotate(298, 139).translateSelf(n / 8, p / 8, v / 8),
      cb(c, h).map(({ x: b, y: g, z: t }) => {
        y = y < b ? y : b;
        x = b < x ? x : b;
        D = D < g ? D : g;
        w = g < w ? w : g;
        A = A < t ? A : t;
        E = t < E ? E : t;
      }),
      A *= 0 > A ? k : 1 / k,
      E *= 0 < E ? k : 1 / k,
      q.scale(2 / (x - y), 2 / (w - D), 2 / (A - E)).translateSelf((x + y) / -2, (w + D) / -2, (A + E) / 2)
        .multiplySelf(h);
  },
  zb = () => {
    let d = !0, c, h, k, n, p, v, y, x, D, w, A, E;
    const z = () => {
        ta || !d ? xb.disconnect() : xb.connect(yb.destination);
        b4.innerHTML = "Music: " + d;
      },
      B = (b = !1) => {
        if (ta !== b) {
          ta = b;
          try {
            b
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : xb.start();
          } catch {
          }
          wa = 0;
          document.body.className = b ? "l m" : "l";
          z();
          sb();
        }
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      B();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      B();
      wa = 1;
    };
    b4.onclick = () => {
      d = !d;
      z();
    };
    b5.onclick = () => B(!0);
    onclick = b => {
      E = 1;
      ta || (b.target === hC && (Aa[5] = !0), wa && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: b, target: g, type: t, repeat: C }) => {
      C || ((C = !!t[5] && g === document.body) && ("Escape" === b || "Enter" === b && ta)
        ? ta && !E || B(!ta)
        : 5
            === (t = {
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
            }[b])
        ? C && (Aa[t] = 1)
        : Aa[t] = C);
    };
    onmousemove = ({ movementX: b, movementY: g }) => {
      wa && (b || g) && (Ja += 0.1 * b, Ia += 0.1 * g);
    };
    hC.ontouchstart = b => {
      if (!ta) {
        for (let { pageX: g, pageY: t, identifier: C } of b.changedTouches) {
          wa && g > hC.clientWidth / 2
            ? void 0 === x && (D = 0, v = g, y = t, x = C, w = Ja, A = Ia)
            : void 0 === n && (p = 0, h = g, k = t, n = C);
        }
        c = da;
      }
    };
    hC.ontouchmove = b => {
      if (!ta) {
        for (let { pageX: F, pageY: W, identifier: Y } of b.changedTouches) {
          var g, t, C, I, L;
          x === Y && (Ja = w + (F - v) / 2.3, Ia = A + (W - y) / 2.3, D = 1);
          n === Y
            && (Y = (h - F) / 20,
              g = (k - W) / 20,
              t = 0 > Y ? -Y : Y,
              C = 0 > g ? -g : g,
              I = Math.atan2(g, Y),
              L = Sa(Math.hypot(g, Y) - 0.5),
              pa = 0.2 < t ? Math.cos(I) * L : 0,
              qa = 0.2 < C ? Math.sin(I) * L : 0,
              (pa || qa) && (p = 1),
              2 < t && (h = F + 20 * Math.sign(Y)),
              2 < C && (k = W + 20 * Math.sign(g)));
        }
      }
    };
    hC.ontouchend = b => {
      let g;
      b.preventDefault();
      for (const t of b.changedTouches) {
        t.identifier === x
          ? (x = void 0, D || (g = 1), D = 0)
          : t.identifier === n
          ? (n = void 0, qa = pa = 0, p || (g = 1), p = 0)
          : g = 1;
      }
      g && b.target === hC && c && 0.02 < (b = da - c) && 0.7 > b && (Aa[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Aa.length = pa = qa = 0;
      n = x = void 0;
      document.hidden && B(!0);
    })();
    B(!0);
  },
  Ab = () => {
    let d = 0, c = 0, h = 0, k = 0, n = 0, p = 2, v = !1, y, x, D, w, A, E, z, B, b, g, t, C;
    const I = { x: 0, y: 0, z: 0 },
      L = new Int32Array(256),
      F = new Uint8Array(65536),
      W = () => {
        d = c = l[ea].u.H || 1;
        x =
          E =
          A =
          D =
          w =
            0;
        p = 2;
      },
      Y = () => {
        for (let M = 32; 128 > M; M += 2) {
          let Q = 0, R = 0, H = 0, u = 0;
          const N = 512 * M;
          for (let K = 1 & M; 128 > K; K += 2) {
            const S = N + 4 * K;
            let U = N + 4 * (127 - K);
            const ba = F[S] / 255, ha = F[1 + U] / 255, oa = 1 - Ra(K / 63.5 - 1);
            10 < K && 118 > K && (Q = Qa(Q, Qa(ba * oa, ba * F[U] / 255)), R = Qa(R, Qa(ha * oa, ha * F[1 + S] / 255)));
            (54 > K || 74 < K) && 1e-3 < (U = (1 - oa) * (ha < ba ? ba : ha) / 3)
              && (64 > K && U > H ? H = U : 64 < K && U > u && (u = U));
          }
          Ra(u - H) > (0 > B ? -B : B) && (B = u - H);
          Ra(R - Q) > (0 > b ? -b : b) && (b = R - Q);
        }
      },
      la = () => {
        let M = 0, Q = 0, R = 0, H = 0;
        L.fill(0);
        for (let N = 0; 31 > N; ++N) {
          let K = 0;
          const S = 512 * N;
          for (let U = 0; 128 > U; U++) {
            var u = S + 4 * U;
            let ba = (F[u] + F[1 + u]) / 255;
            u = F[2 + u];
            14 < U && 114 > U && (K += ba);
            u && ba && (ba = L[u] + 1, L[u] = ba, M > ba || (M = ba, Q = u));
          }
          3 > K && 5 < N && (H += N / 32);
          3 < K && (7 < N && (R += N / 15), x = 1);
        }
        Q && (x = 1);
        p ? Q && (p = 0, c = Q) : c = Q || d;
        d = Q;
        D = P(D, x ? 6.5 : 8, 4);
        I.y += R / 41 - (x ? 1 : D) * H / 41 * D * e;
      };
    xa = () => {
      let M = pa + (Aa[0] ? 1 : 0) + (Aa[2] ? -1 : 0),
        Q = qa + (Aa[1] ? 1 : 0) + (Aa[3] ? -1 : 0),
        R = navigator.getGamepads()[0];
      if (R) {
        const ba = R.buttons;
        var H = R.axes;
        (R = (u = ha => ba[ha]?.pressed || 0 < ba[ha]?.value)(1) || u(3) || u(2) || u(0)) !== v && (v = R)
          && (Aa[5] = 1);
        M += (0.2 < Ra(-H[0]) ? -H[0] : 0) + (u(14) ? 1 : 0) + (u(15) ? -1 : 0);
        Q += (0.2 < Ra(-H[1]) ? -H[1] : 0) + (u(12) ? 1 : 0) + (u(13) ? -1 : 0);
        wa && (0.3 < Ra(H[2]) && (Ja += 80 * H[2] * e), 0.3 < Ra(H[3]) && (Ia += 80 * H[3] * e));
      }
      R = Math.atan2(Q, M);
      H = Sa(Math.hypot(Q, M));
      0.05 > H && (H = 0);
      M = H * Math.cos(R);
      Q = H * Math.sin(R);
      x = b = B = 0;
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, F);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(Y)();
      NO_INLINE(la)();
      var u = Sa(1 - 5 * Qa(0 > B ? -B : B, 0 > b ? -b : b)),
        N =
          (c || (B += A * u * e, b += E * u * e),
            A = P(A, 0, x ? 8 : 4),
            E = P(E, 0, x ? 8 : 4),
            w = P(w, x ? (M || Q ? x ? 7 : 4 : 0) * u : 0, x ? 0.1 < u ? 10 : M || Q ? 5 : 7 : 1),
            B += M * w * e,
            b += Q * w * e,
            (K = (u = 1 === f[c].G && f[c].j || q).inverse()).m41 = 0,
            K.m42 = 0,
            K.m43 = 0,
            { x: B, z: b } = K.transformPoint({ x: B, z: b, w: 0 }),
            I.x += B,
            I.z += b,
            p
            && ({ x: K, y: N, z: S } = l[ea].I.transformPoint({ x: 0, y: 12, z: -4 }),
              1 < p && (p = 1, z = m.y = N),
              m.x = K,
              m.z = S),
            c !== y && (y = c, { x: N, y: K, z: S } = u.inverse().transformPoint(m), I.x = N, I.y = K, I.z = S),
            m.x),
        K = m.z,
        { x: S, y: u, z: U } = u.transformPoint(I);
      m.x = S;
      m.y = u;
      m.z = U;
      c && (A = (S - N) / e, E = (U - K) / e);
      H && (h = 90 - R / Ka);
      k = Wa(k, h, 8 * e);
      n += (H - n) * Sa(10 * e);
      z = Ta(P(z, u, 2), u, 8 * Ra(z - u));
      void 0 === g && (Da = g = S, Ea = (t = z = u) + 13, Ha = (C = U) + -36);
      g = P(g, S, Oa(Qa(0.4, Ra(g - S) - 1.5)));
      t = P(t, u, Oa(Qa(0.4, Ra(t - u) - 2.2)));
      C = P(C, U, Oa(Qa(0.4, Ra(C - U) - 1.5)));
      wa
        ? (Da = P(Da, S, 666 * p + 18), Ea = P(Ea, z + 1.5, 666 * p + 18), Ha = P(Ha, U, 666 * p + 18))
        : (Da = P(Da, g, 2),
          Ea = P(Ea, Qa(t + 13, 6), 2),
          Ha = P(Ha, C + -18, 2),
          N = Ha - C,
          1 < (0 > N ? -N : N)
          && (K = Da - g, Ja = 270 + Math.atan2(N, K) / Ka, Ia = 90 - Math.atan2(Math.hypot(N, K), Ea - t) / Ka));
      Ia = Qa(87 > Ia ? Ia : 87, -87);
      Ja = Va(Ja);
      1 === c && (l[9].l = -15 > m.x && 0 > m.z ? 1 : 0);
      (-25 > m.x || 109 > m.z ? -25 : -9) > m.y && W();
      f[37].j = q.translate(m.x, z, m.z).rotateSelf(0, k);
      [38, 39].map((ba, ha) => {
        f[ba].j = f[37].j.translate(0, n * Sa(0.45 * Math.sin(9.1 * a + Math.PI * (ha - 1) - Math.PI / 2))).rotateSelf(
          n * Math.sin(9.1 * a + Math.PI * (ha - 1)) * 0.25 / Ka,
          0,
        );
      });
    };
    W();
  },
  Bb = (d, c = 35633) => (c = Z.c6x(c), Z.s3c(c, d), Z.c6a(c), c),
  Gb = (d, c) => {
    const h = {}, k = Z.c1h();
    return Z.abz(k, d), Z.abz(k, Bb(c, 35632)), Z.l8l(k), n => n ? h[n] || (h[n] = Z.gan(k, n)) : Z.u7y(k);
  },
  Hb = (d, c, h = 42) => {
    if (ta) {
      h = q.rotate(0, 40 * Math.sin(da) - 70);
      for (var k of [37, 38, 39]) {
        $a(h, Ma, k - 1);
      }
      Z.uae(d, !1, Ma);
      Z.d97(4, f[39].F - f[37].v, 5123, 2 * f[37].v);
    } else {
      for (k = 0; f.length > k; ++k) {
        f[k].G && $a(f[k].j, Ma, k - 1);
      }
      Z.uae(d, !1, Ma);
      Z.d97(4, (c ? f[39].F : f[37].v) - 3, 5123, 6);
      for (c = 0; 13 > c; ++c) {
        $a(za[c].j, Ma, c);
      }
      for (c = 0; l.length > c; ++c) {
        $a(l[c].j, Ma, c + 13), Ma[16 * (c + 13) + 15] = 1 - l[c].g;
      }
      Z.uae(d, !1, Ma);
      Z.das(4, f[h].F - f[h].v, 5123, 2 * f[h].v, 13);
      Z.das(4, f[40].F - f[40].v, 5123, 2 * f[40].v, l.length);
    }
  },
  Ib = d => {
    h4.innerHTML += ".";
    setTimeout(d);
  },
  Jb = d => Math.sin(d * Math.PI * 2),
  Kb = d => 0.5 > d % 1 ? 1 : -1,
  Lb = d => d % 1 * 2 - 1,
  Mb = d => 2 > (d = d % 1 * 4) ? d - 1 : 3 - d,
  Tb = d => {
    let c = 0;
    const h = () => {
        const p = yb.createBuffer(2, 5362944, 44100);
        for (let v = 0; 2 > v; v++) {
          for (let y = v, x = p.getChannelData(v); 10725888 > y; y += 2) {
            x[y >> 1] = n[y] / 65536;
          }
        }
        xb.buffer = p;
        xb.loop = !0;
        Ib(d);
      },
      k = () => {
        let p, v = 0, [y, x, D, w, A, E, z, B, b, g, t, C, I, L, F, W, Y, la, M, Q, R] = Ba[c];
        g = g * g * 4;
        for (const S of [5513, 4562, 3891]) {
          const U = [];
          let ba = 0, ha = 0, oa, Pa, Cb;
          const Ca = new Int32Array(768 * S), Nb = 2 ** (C - 9) / S, Ob = Math.PI * 2 ** (Y - 8) / S, mb = M * S & -2;
          for (let fb = 0; 11 >= fb; ++fb) {
            for (
              let gb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + fb];
              32 > gb;
              ++gb
            ) {
              const Eb = (32 * fb + gb) * S;
              for (var H = 0; 4 > H; ++H) {
                if (oa = 0, Db && (oa = R[Db - 1].charCodeAt(gb + 32 * H) - 40, oa += 0 < oa ? 106 : 0), oa) {
                  var u;
                  if (!(u = U[oa])) {
                    u = oa;
                    let aa = void 0, sa = void 0;
                    var N = S, K = oa;
                    let Pb = 0, Qb = 0;
                    const Rb = 2 > c ? Lb : Jb, Sb = 2 > c ? 1 > c ? Kb : Mb : Jb, Fb = new Int32Array(B + b + g);
                    for (let Fa = 0, nb = 0; B + b + g > Fa; ++Fa, ++nb) {
                      let Ga = 1;
                      B > Fa ? Ga = Fa / B : B + b > Fa || (Ga = (1 - (Ga = (Fa - B - b) / g)) * 3 ** (-t / 16 * Ga));
                      0 > nb
                        || (nb -= 4 * N,
                          sa = 396e-5 * 2 ** ((K + x - 256) / 12),
                          aa = 396e-5 * 2 ** ((K + A - 256) / 12) * (1 + (c ? 0 : 0.007200)));
                      Fb[Fa] = 80
                          * (Rb(Pb += sa * Ga ** (D / 32)) * y + Sb(Qb += aa * Ga ** (E / 32)) * w
                            + (z ? (2 * Math.random() - 1) * z : 0))
                          * Ga | 0;
                    }
                    u = U[u] = Fb;
                  }
                  for (let aa = 0, sa = 2 * Eb; u.length > aa; ++aa, sa += 2) {
                    Ca[sa] += u[aa];
                  }
                }
              }
              for (let aa, sa = 0; S > sa; ++sa) {
                H = 0,
                  u = 2 * (Eb + sa),
                  ((aa = Ca[u]) || Cb)
                  && (Pa = 308e-5 * I,
                    1 !== c && 4 !== c || (Pa *= Math.sin(Nb * u * Math.PI * 2) * Q / 512 + 0.5),
                    Pa = 1.5 * Math.sin(Pa),
                    ba += Pa * ha,
                    p = (1 - L / 255) * (aa - ha) - ba,
                    ha += Pa * p,
                    aa = 4 === c ? ha : 3 === c ? p : ba,
                    c || (aa = 1 > (aa *= 22e-5) ? -1 < aa ? Math.sin(aa / 4 * Math.PI * 2) : -1 : 1, aa /= 22e-5),
                    aa *= F / 32,
                    Cb = 1e-5 < aa * aa,
                    p = Math.sin(Ob * u) * W / 512 + 0.5,
                    H = aa * (1 - p),
                    aa *= p),
                  u < mb || (H += Ca[
                    1
                    + u - mb
                  ] * la / 255,
                    aa += Ca[u - mb] * la / 255),
                  n[v + u] += Ca[u] = H,
                  ++u,
                  n[v + u] += Ca[u] = aa;
              }
            }
          }
          v += Ca.length;
        }
        Ib(5 > ++c ? k : h);
      },
      n = new Int32Array(10725888);
    Ib(k);
  },
  Ub = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  X = NO_INLINE((d, c, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * c << 8 | 255 * d),
  yb = new AudioContext(),
  xb = yb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const d in Z) {
  Z[d[0] + [...d].reduce((c, h, k) => (c * k + h.charCodeAt(0)) % 434, 0).toString(36)] = Z[d];
}
Ib(() => {
  let d = 0;
  const c = () => {
      if (2 == ++d) {
        const k = b => {
            Z.f1s();
            requestAnimationFrame(k);
            g = (b - (ua || b)) / 1e3;
            ta ? (e = 0, Aa[5] = 0) : e = 0.066 < g ? 0.066 : g;
            a += e;
            da += g;
            ua = b;
            0 < e && (rb(), xa(), Aa[5] = 0);
            var g = ta
              ? q.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Sa(hC.clientWidth / 1e3))
              : q.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ea, -Ha);
            0 < e
              && (E(),
                Z.b6o(36160, v),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(E("b"), !1, $a(q.rotate(0, 180).invertSelf().translateSelf(-m.x, -m.y, 0.3 - m.z))),
                Hb(E("c"), 0, 41),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(E("b"), !1, $a(q.translate(-m.x, -m.y, -m.z - 0.3))),
                Hb(E("c"), 0, 41),
                Z.f1s());
            w();
            Z.b6o(36160, p);
            Z.v5y(0, 0, 2048, 2048);
            B[0](wb(g, 0.3, 55, 10));
            B[1](wb(g, 55, 177, 11));
            z();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            B[0]();
            B[1]();
            Z.uae(z("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
            Z.uae(z("b"), !1, $a(g));
            Z.ubu(z("k"), Da, Ea, Ha);
            Hb(z("c"), !wa);
            A();
            Z.ubu(A("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, da);
            ta ? Z.ubu(A("k"), 0, 0, 0) : Z.ubu(A("k"), Da, Ea, Ha);
            Z.uae(A("b"), !1, $a(g.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, v);
            Z.f1s();
          },
          n = h,
          p = Z.c5w(),
          v = Z.c5w(),
          y = Z.c3z(),
          x = Z.c25(),
          D = Bb(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          w = Gb(
            Bb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          A = Gb(
            Bb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          E = Gb(
            D,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          z = Gb(
            D,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          B =
            (E(),
              Z.uae(E("a"), !1, ab(1.4, 0.59, 1e-4, 1)),
              A(),
              Z.ubh(A("q"), 3),
              z(),
              Z.ubh(z("q"), 3),
              Na(2, b => {
                const g = new Float32Array(16), t = Z.c25(), C = z(b ? "j" : "i");
                return Z.ubh(z(b ? "h" : "g"), b),
                  Z.b6o(36160, p),
                  Z.d45([0]),
                  Z.r9l(0),
                  Z.a4v(33984 + b),
                  Z.b9j(3553, t),
                  Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                  Z.t2z(3553, 10241, 9729),
                  Z.t2z(3553, 10240, 9729),
                  Z.t2z(3553, 34893, 515),
                  Z.t2z(3553, 34892, 34894),
                  Z.t2z(3553, 10243, 33071),
                  Z.t2z(3553, 10242, 33071),
                  I => {
                    I
                      ? ($a(I, g), Z.uae(w("b"), !1, g), Z.fas(36160, 36096, 3553, t, 0), Z.c4s(256), Hb(w("c"), !wa))
                      : Z.uae(C, !1, g);
                  };
              }));
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        Z.b6o(36160, v);
        Z.bb1(36161, y);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, y);
        Z.a4v(33987);
        Z.b9j(3553, x);
        Z.fas(36160, 36064, 3553, x, 0);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.a4v(33987);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        try {
          const [b, g, t, C, I] = JSON.parse(localStorage.DanteSP22);
          l.map((L, F) => L.g = L.i = L.l = F ? 0 | b[F] : 0);
          za.map((L, F) => L.l = 0 | g[F]);
          ea = t;
          a = C;
          na = I;
        } catch {
        }
        ma = 0 > ea ? 0 : 1 < ea ? 1 : ea;
        rb();
        NO_INLINE(Ab)();
        requestAnimationFrame(k);
        NO_INLINE(zb)();
      }
    },
    h = new Image();
  h.onload = h.onerror = c;
  h.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      const w = [],
        A = F => {
          let { x: W, y: Y, z: la } = z[F], M = (L[0] = W, L[1] = Y, L[2] = la, F = "" + (z.D ? I : C), t.get(F));
          return void 0 !== M
            ? (W = 3 * M, g[W] = (g[W++] + C[5]) / 2, g[W] = (g[W++] + C[6]) / 2, g[W] = (g[W] + C[7]) / 2)
            : (t.set(F, M = t.size), B.push(W, Y, la, L[3]), b.push(C[4]), g.push(C[5], C[6], C[7])),
            M;
        };
      let E = 0, z;
      const B = [],
        b = [],
        g = [],
        t = new Map(),
        C = new Int32Array(8),
        I = new Int32Array(C.buffer, 0, 5),
        L = new Float32Array(C.buffer);
      for (const F of f) {
        for (z of (L[3] = 40 === F.H ? -13 : F.G && F.H, F.s)) {
          const { x: W, y: Y, z: la } = Za(z);
          C[4] = 0 | z.A;
          C[5] = 32767 * W;
          C[6] = 32767 * Y;
          C[7] = 32767 * la;
          for (let M = 2, Q = A(0), R = A(1); z.length > M; ++M) {
            w.push(Q, R, R = A(M));
          }
        }
        F.s = null;
        F.v = E;
        F.F = E = w.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(B), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(g), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(b), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ib(c);
    });
    let k;
    const n = (w, A, E) =>
        q.translate(w + Math.sin(a + 2) / 5, A + Math.sin(0.8 * a) / 3, E).rotateSelf(
          2 * Math.sin(a),
          Math.sin(0.7 * a),
          Math.sin(0.9 * a),
        ),
      p = Na(11, w => q.translate(Math.sin(w / 10 * Math.PI), w / 10).rotate(+w).scale(1.0001 - w / 10, 0, 1 - w / 10)),
      v = Na(10, w => eb(cb(db(18), p[w]).reverse(), cb(db(18), p[w + 1]), 1)).flat(),
      y = O(
        J(
          r(G(20, 1, 1.15, 1), q.translate(0, -3).scale(3.5, 1, 3.5), X(0.7, 0.4, 0.25, 0.7)),
          r(G(20, 1, 1.3, 1), q.translate(0, -2.5).scale(2.6, 1, 3), X(0.7, 0.4, 0.25, 0.2)),
          r(G(), q.translate(4, -1.2).scale3d(2), X(0.7, 0.4, 0.25, 0.3)),
        ),
      ),
      x = O(
        J(
          r(G(), q.translate(0, -8).scale(6, 15, 2.2)),
          r(G(), q.translate(0, -14.1).scale(4, 13, 4)),
          r(G(20, 1), q.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      ),
      D = Na(7, w => r(G(6, 1), q.translate(4 * (w / 6 - 0.5), 3).scale(0.2, 3, 0.2), X(0.3, 0.3, 0.38))).flat();
    T(() => V([ya.slice(1)], q.translate(-2).scale3d(3).rotate(90, 0)), 0);
    T(() => {
      const w = (b, g, t) =>
          T(C => {
            C.h = () => q.translate(A() * Math.sin(3 * b + a * b) * g);
            ya.map(({ x: I, z: L }) => {
              V(G(11, 1), q.translate(4 * I, 4, t + 4 * L).scale(0.8, 3, 0.8), X(0.5, 0.3, 0.7, 0.6));
              V(G(), q.translate(4 * I, 7, t + 4 * L).scale(1, 0.3), X(0.5, 0.5, 0.5, 0.3));
            });
            V(O(J(
              r(G(), q.translate(0, 0, t).scale(5, 1, 5), X(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(I =>
                r(G(), q.translate(5 * I, 0.2, t).rotate(-30 * I).scale(4, 1, 2), X(0.8, 0.8, 0.8, 0.3))
              ),
            )));
            V(G(), q.translate(0, -3, t).scale(8, 2, 8), X(0.4, 0.4, 0.4, 0.3));
          }),
        A = () => {
          var b = l[2].i, g = 1 - l[4].i;
          return b < g ? b : g;
        },
        E = (T(b => {
          b.h = () => n(-12, 4.2, 40 * ma - 66);
          V(y);
          ub(q.translate(0, -3, 4));
        }),
          vb(q.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          vb(
            q.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...db(18).map(({ x: b, z: g }) => [7 * b, 10 * g, 4.5 - 2 * (0 > b ? -b : b)]),
          ),
          V(G(), q.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
          ya.map(({ x: b, z: g }) => V(G(6), q.translate(3 * b, 3, 15 * g).scale(0.7, 4, 0.7), X(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(b => V(G(), q.translate(0, 0, b).scale(3, 1, 8), X(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((b, g) => {
            V(G(), q.translate(0, 6.3, b).scale(4, 0.3, 1), X(0.3, 0.3, 0.3, 0.4));
            V(G(), q.translate(0, 1, b).scale(3, 0.2, 0.35), X(0.5, 0.5, 0.5, 0.3));
            T(t => {
              t.h = () => q.translate(0, 4.7 * -l[g + 1].g, b);
              V(D);
            });
          }),
          Na(5, b =>
            Na(2, g =>
              V(
                v,
                q.translate(18.5 * (g - 0.5), 0, 4.8 * b - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2),
                X(1, 1, 0.8, 0.2),
              ))),
          V(G(), q.translate(3, 1.5, -20).scale(0.5, 2, 5), X(0.7, 0.7, 0.7, 0.2)),
          V(G(), q.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(0.75, 0.75, 0.75, 0.2)),
          V(G(5), q.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(0.6, 0.3, 0.3, 0.4)),
          ub(q.translate(-5.4, 1.5, -19).rotate(0, -90)),
          V(G(), q.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), X(0.8, 0.2, 0.2, 0.5)),
          V(O(
            J(
              qb(
                r(G(6, 0, 0, 0.3), q.translate(8, -3, -4).scale(13, 1, 13), X(0.7, 0.7, 0.7, 0.2)),
                r(G(6), q.translate(0, -8).scale(9, 8, 8), X(0.4, 0.2, 0.5, 0.5)),
                r(G(6, 0, 0, 0.3), q.translate(0, -0.92).scale(13, 2, 13), X(0.8, 0.8, 0.8, 0.2)),
              ),
              r(G(5), q.scale(5, 30, 5), X(0.4, 0.2, 0.6, 0.5)),
              r(G(5, 0, 1.5), q.translate(0, 1).scale(4.5, 0.3, 4.5), X(0.7, 0.5, 0.9, 0.2)),
              r(G(), q.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), X(0.5, 0.5, 0.5, 0.5)),
              r(G(6), q.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(0.5, 0.5, 0.5, 0.5)),
            ),
          )),
          T(b => {
            b.h = () =>
              q.translate(
                0,
                0.01 < l[3].g ? (5 * Math.cos(1.5 * a) + 2) * l[3].i * (1 - l[2].g) + -15 * (1 - l[3].g) : -500,
                0,
              );
            V(G(5), q.translate(0, -0.2).scale(5, 1, 5), X(0.6, 0.65, 0.7, 0.3));
            ub(q.translate(0, 1.2));
          }),
          ub(q.translate(15, -2, 4)),
          w(0.7, 12, 35),
          w(1, 8.2, 55),
          T(b => {
            b.h = () => q.translate(A() * Math.sin(a / 1.5 + 2) * 12);
            V(
              O(J(
                qb(
                  r(G(), q.scale(1.5, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  r(G(6), q.scale(4, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  r(G(), q.translate(0, -2).scale(2, 3.2, 1.9), X(0.3, 0.8, 0.5, 0.5)),
                  r(G(16, 1, 0, 4), q.scale(1, 1, 1.5).rotate(0, 90), X(0.9, 0.9, 0.9, 0.2)),
                ),
                r(G(), q.scale(1.3, 10, 1.3), X(0.2, 0.7, 0.4, 0.6)),
              )),
              q.translate(0, 0, 45),
            );
            vb(q.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          T(b => {
            b.h = () => q.translate(9.8 * (1 - A()));
            V(G(3), q.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), X(0.3, 0.6, 0.6, 0.2));
            V(G(8), q.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(0.8, 0.8, 0.8, 0.2));
            V(G(), q.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(0.5, 0.5, 0.5, 0.3));
            V(G(), q.translate(-23, -2.2, 62).scale(3, 1, 4), X(0.5, 0.5, 0.5, 0.3));
            ub(q.translate(-23, -0.5, 66.5));
          }),
          V(G(), q.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
          T(b => {
            b.h = () => q.translate(0, Sa(1 - 5 * A()) * Ua(l[4].g, l[5].g) * Math.sin(1.35 * a) * 4);
            V(G(), q.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(0.7, 0.7, 0.7, 0.2));
            V(
              O(J(r(G(), q.scale(3, 1.4, 2.7)), r(G(), q.scale(1.2, 8, 1.2)))),
              q.translate(-33, -3, 55),
              X(0.7, 0.7, 0.7, 0.2),
            );
          }),
          T(b => {
            b.h = () => q.translate(0, 0, Sa(1 - 5 * A()) * Ua(l[4].g, l[5].g) * Math.sin(0.9 * a) * 8);
            V(O(
              J(
                r(G(), q.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
                r(G(), q.translate(-27, -3, 55).scale(1, 3), X(0.9, 0.9, 0.9, 0.2)),
              ),
            ));
            V(G(), q.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2));
          }),
          T(b => {
            b.h = () => q.translate(0, -6.5 * l[4].i);
            V(G(6), q.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), X(0.7, 0.7, 0.7, 0.4));
          }),
          [...r(
            O(qb(
              r(G(), q.translate(0, -3).scale(11, 1.4, 3), X(0.9, 0.9, 0.9, 0.2)),
              J(
                r(G(6), q.rotate(90).scale(6, 8, 6), X(0.3, 0.6, 0.6, 0.3)),
                r(G(4, 0, 0.01), q.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), X(0.3, 0.6, 0.6, 0.3)),
                r(G(6), q.rotate(90).scale(5, 12, 5), X(0.3, 0.6, 0.6, 0.3)),
                ...[5, 0, -5].map(b =>
                  r(G(5), q.translate(b, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(0.3, 0.6, 0.6, 0.3))
                ),
              ),
            )),
            q,
          )]),
        z =
          (V(E, q.translate(-53, 0, 55)),
            V(G(6), q.translate(-61.3, -2.4, 49).scale(3, 1, 5), X(0.4, 0.6, 0.6, 0.3)),
            V(G(7), q.translate(-57, -2.6, 46).scale(4, 1, 4), X(0.8, 0.8, 0.8, 0.3)),
            ub(q.translate(-55, -1.1, 46).rotate(0, 90)),
            T(b => {
              b.h = () => q.translate(-75, (1 - l[5].i) * (1 - l[6].g) * 3, 55).rotate(180 * (1 - l[5].i) + ja, 0);
              V(E);
            }, 2),
            V(G(), q.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), X(0.7, 0.7, 0.7, 0.2)),
            V(
              G(3, 0, -0.5),
              q.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
              X(0.8, 0.8, 0.8, 0.2),
            ),
            V(
              O(J(
                qb(
                  r(G(), q.translate(-100, -2.5, 55).scale(8, 1, 8), X(0.8, 0.8, 0.8, 0.2)),
                  r(G(), q.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
                  r(G(), q.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(0.8, 0.8, 0.8, 0.2)),
                  r(G(), q.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), X(0.8, 0.8, 0.8, 0.2)),
                  r(G(6), q.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(0.6, 0.6, 0.6, 0.3)),
                  r(G(), q.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(0.8, 0.8, 0.8, 0.2)),
                  r(G(), q.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), X(0.8, 0.8, 0.8, 0.2)),
                ),
                r(G(8), q.translate(-100, -1, 55).scale(7, 0.9, 7), X(0.3, 0.3, 0.3, 0.4)),
                r(G(8), q.translate(-100, -2, 55).scale(4, 0.3, 4), X(0.4, 0.4, 0.4, 0.5)),
                r(G(8), q.translate(-100, -3, 55).scale(0.6, 1, 0.6), X(0.4, 0.4, 0.4, 0.5)),
              )),
              q,
            ),
            vb(q.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            vb(q.translate(-89, 0.2, 80), [0, 0, 6]),
            V(O(
              J(
                r(G(), q.translate(-100, 1, 63).scale(7.5, 4), X(0.5, 0.5, 0.5, 0.4)),
                r(G(), q.translate(-100, 0, 70).scale(2, 2, 10), X(0.5, 0.5, 0.5, 0.4)),
                r(G(20, 1), q.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(0.5, 0.5, 0.5, 0.4)),
              ),
            )),
            T(b => {
              b.h = () => q.translate(-99.7, 5.3 * -l[6].g - 2, 63.5);
              V(D);
            }),
            ya.map(({ x: b, z: g }) => {
              V(G(6), q.translate(7 * b - 100, -3, 7 * g + 55).scale(1, 8.1), X(0.6, 0.15, 0.15, 0.8));
              [4, -0.4].map(t =>
                V(G(6), q.translate(7 * b - 100, t, 7 * g + 55).scale(1.3, 0.5, 1.3), X(0.4, 0.2, 0.2, 0.8))
              );
            }),
            Na(7, b => {
              V(
                G((23 * b + 1) % 5 + 5, 0, 0.55),
                q.translate(5 * Math.sin(b) - 101 + b, -2.3 - b, 44.9 - 2.8 * b).scaleSelf(
                  5 + b / 2,
                  1 + b / 6,
                  5 + b / 3,
                ),
                X(0.5 - b / 17, 0.5 - (1 & b) / 9, 0.6, 0.3),
              );
            }),
            V(G(), q.translate(-87, -9.5, 24).scale(7, 1, 3), X(0.4, 0.5, 0.6, 0.4)),
            V(G(4), q.translate(-86, -9.2, 27).scale(5, 1, 5), X(0.5, 0.6, 0.7, 0.3)),
            V(G(12, 1), q.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(0.3, 0.3, 0.4, 0.1)),
            ub(q.translate(-86, -7.5, 31)),
            T(b => {
              b.h = () => q.translate(0, 3.5 * (1 - Qa(l[6].g, l[7].g)) + Ua(l[7].i, l[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(g =>
                V(G(), q.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.2, 0.5, 0.6, 0.2))
              );
            }),
            T(b => {
              b.h = () =>
                q.translate(
                  0,
                  Ua(l[7].i, l[6].i) * Math.sin(a + 3) * 6,
                  6 * Math.sin(0.6 * a + 1) * Ua(l[7].i, l[6].i),
                );
              [6, 18].map(g =>
                V(G(), q.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.1, 0.4, 0.5, 0.2))
              );
            }),
            V(
              O(J(
                qb(
                  r(G(), q.scale(11, 1, 13), X(0.3, 0.4, 0.6, 0.3)),
                  r(G(5), q.translate(0, 0, -7).scale(2, 1.2, 2), X(0.2, 0.4, 0.7, 0.3)),
                  r(G(5), q.scale(9, 1.2, 9), X(0, 0.2, 0.3, 0.5)),
                ),
                r(G(5), q.scale(5.4, 5, 5.4), X(0, 0.2, 0.3, 0.5)),
              )),
              q.translate(-38.9, -11.3, 17),
            ),
            ub(q.translate(-38.9, -9.6, 10)),
            T(b => {
              b.h = () => q.translate(0, -7.3 * l[7].i);
              V(
                O(J(
                  qb(
                    r(G(5), q.translate(0, 2).scale(5, 7, 5).skewY(8), X(0.2, 0.4, 0.5, 0.5)),
                    r(G(5), q.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(0.25, 0.35, 0.5, 0.5)),
                    r(G(5), q.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), X(0.35, 0.3, 0.5, 0.5)),
                  ),
                  r(G(5), q.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(0.2, 0.4, 0.5, 0.5)),
                )),
                q.translate(-38.9, -11.3, 17),
              );
              vb(q.translate(-39.1, -0.6, 17).rotate(11), ...db(15).map(({ x: g, z: t }) => [3 * g, 3 * t, 1.2]));
            }),
            ya.map(({ x: b, z: g }) => {
              k = q.translate(9 * b - 38.9, -7.3, 11 * g + 17);
              V(G(14, 1), k.scale(1, 4), X(0.25, 0.25, 0.25, 1));
              [1.5, 8].map(t => V(G(17, 1), k.translate(0, t - 4).scale(1.5, 0.5, 1.5), X(0.6, 0.6, 0.6, 0.3)));
            }),
            V(
              O(J(
                qb(
                  r(G(6), q.translate(0, 0, -36).scale(15, 1.2, 15), X(0.7, 0.7, 0.7, 0.3)),
                  r(G(), q.translate(0, 0, -18).scale(4, 1.2, 6), X(0.45, 0.4, 0.6, 0.3)),
                ),
                ...Na(6, b =>
                  Na(6, g =>
                    r(
                      G(6),
                      q.translate(4.6 * g - 12 + 2 * (1 & b), 0, 4.6 * b - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2),
                      X(0.7, 0.7, 0.7, 0.3),
                    ))).flat(),
              )),
              q.translate(-38.9, -11.3, 17),
            ),
            vb(q.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
            V(G(5), q.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), X(0.8, 0.1, 0.25, 0.4)),
            ub(q.translate(-84, -0.5, 85).rotate(0, 45)),
            T(b => {
              b.h = () => n(-123, 1.4, 55 + -65 * na);
              ub(q.translate(0, -3, -4).rotate(0, 180));
              V(y);
            }),
            vb(q.translate(-115, 0.2, -12), [0, 0, 3.5]),
            O(J(
              r(G(), q.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(0.25, 0.25, 0.35, 0.3)),
              r(G(3), q.translate(0, 0, -5.5).scale(3, 2), X(0.6, 0.3, 0.4, 0.3)),
              ...[-1.2, 1.2].map(b => r(G(), q.translate(b, -0.5, 1).scale(0.14, 0.3, 6.5), X(0.7, 0.2, 0, 0.3))),
            ))),
        B = (T(b => {
          b.h = () => q.translate(0, -2, Ua(l[10].g, l[11].g) * Ra(Math.sin(1.1 * a)) * -8.5 + 10);
          Na(2, g => V(z, q.translate(9 * g - 110 + (1 & g), 1.7, -12)));
        }),
          T(b => {
            b.h = () => q.translate(0, -2, Ua(l[10].g, l[11].g) * Ra(Math.sin(2.1 * a)) * -8.5 + 10);
            Na(2, g => V(z, q.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
          }),
          T(b => {
            b.h = () =>
              q.translate(
                0,
                -2,
                -8.5 * Qa((1 - l[10].g) * (1 - Ua(l[10].g, l[11].g)), Ua(l[10].g, l[11].g) * Ra(Math.sin(1.5 * a)))
                  + 10,
              );
            Na(3, g => V(z, q.translate(9 * g - 106, 1.7, -12)));
          }),
          V(
            O(J(
              qb(
                r(G(), q.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                r(G(), q.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),
              ),
              ...Na(4, b => r(G(), q.translate(13 + 9 * b + (1 & b), -0.8, 9).scale(1.35, 1.35, 9))),
              ...Na(3, b => r(G(), q.translate(17 + 9 * b, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            q.translate(-123, 0, -12),
            X(0.5, 0.5, 0.6, 0.2),
          ),
          V(G(5), q.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), X(0.25, 0.25, 0.35, 1)),
          V(G(), q.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
          V(G(6), q.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), X(0.6, 0.5, 0.7, 0.2)),
          ub(q.translate(-116, -1.4, -18).rotate(0, 180)),
          Na(3, b => {
            V(x, q.translate(12 * b - 109, -9, -12), X(0.6, 0.6, 0.6, 0.3));
            V(x, q.translate(-77, -9, -12 * b - 20).rotate(0, 90), X(0.6, 0.6, 0.6, 0.3));
          }),
          V(O(
            J(
              r(G(12), q.translate(-77, -13.9, -12).scale(4, 18.2, 4), X(0.7, 0.7, 0.7, 0.2)),
              r(G(), q.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), X(0.4, 0.5, 0.6, 0.2)),
              r(G(), q.translate(-77, 0, -14).scale(1.5, 2.2, 2), X(0.4, 0.5, 0.6, 0.2)),
              r(G(12), q.translate(-77, 2.8, -12).scale(3, 5, 3), X(0.4, 0.5, 0.6, 0.2)),
            ),
          )),
          V(G(), q.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), X(0.6, 0.6, 0.6, 0.3)),
          V(G(), q.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), X(0.6, 0.6, 0.6, 0.3)),
          V(G(), q.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), X(0.6, 0.6, 0.6, 0.3)),
          V(O(
            J(
              r(G(), q.translate(-93, -5.8, -40).scale(9, 1, 5), X(0.8, 0.8, 0.8, 0.1)),
              r(G(9), q.translate(-98, -5.8, -40).scale(3, 8, 3), X(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          V(G(9), q.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), X(0.5, 0.5, 0.5, 0.3)),
          ub(q.translate(-98, -4.4, -40).rotate(0, 90)),
          vb(q.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]),
          V(O(
            J(
              qb(
                r(G(6, 0, 0, 0.6), q.translate(-100, 0.7, 105.5).scale(8, 1, 11), X(0.7, 0.7, 0.7, 0.2)),
                r(G(), q.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), X(0.7, 0.7, 0.7, 0.2)),
                r(G(), q.translate(-91.2, 0.7, 107).scale(3, 1, 3.3), X(0.7, 0.7, 0.7, 0.2)),
              ),
              r(G(5), q.translate(-100, 0.7, 113).scale(4, 3, 4), X(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          Na(4, b =>
            T(g => {
              g.h = () => {
                const t = Ua(l[8].i, l[12].i);
                return q.translate(
                  (2 < b ? 2 * (1 - t) + t : 0) - 100,
                  t * Math.sin(1.3 * a + 1.7 * b) * (3 + b / 3) + 0.7,
                  115 + (1 & b ? -1 : 1) * (1 - l[8].i) * (1 - l[12].i) * -7
                    + (0.05 > t ? 0.05 : t) * Math.cos(1.3 * a + 7 * b) * (4 - 2 * (1 - b / 3)),
                );
              };
              V(
                G(6),
                q.translate(-14.6 - 4.8 * b - (2 < b ? 2 : 0), -b / 2.3, -21.5).scale(2.6, 1, 2.5),
                X(0.5 - b / 8, b / 12 + 0.5, 0.7, 0.3),
              );
            })),
          T(b => {
            b.h = () => {
              const g = Ua(l[8].i, l[12].i);
              return q.translate(2.5 * (1 - g) - 139.7, -3 * (1 - l[8].g) + g * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
            };
            V(O(
              J(
                r(G(10), q.scale(6, 2, 6), X(0.1, 0.6, 0.5, 0.3)),
                r(G(10), q.scale(3.3, 6, 3.3), X(0.1, 0.6, 0.5, 0.5)),
              ),
            ));
            k = q.translate(-7.5).rotate(0, 90);
            V(G(15, 1), k.scale(3, 2.3, 3), X(0.4, 0.4, 0.4, 0.3));
            V(G(10), k.scale(2, 2.5, 2), X(0.3, 0.8, 0.7, 0.3));
            V(G(5), k.scale(1, 3), X(0.5, 0.5, 0.5, 0.5));
            ub(k.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(g =>
              V(v, q.rotate(90 * -g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), X(1, 1, 0.8, 0.2))
            );
            vb(q.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(b => {
            V(G(12, 1), q.translate(-7.5 * b - 100, 3.7, 96).scale(0.8, 4, 0.8), X(0.6, 0.24, 0.2, 0.5));
            [7.2, 1.5].map(g =>
              V(G(15, 1), q.translate(-7.5 * b - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), X(0.5, 0.24, 0.2, 0.4))
            );
            V(v, q.translate(-5 * b - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * b - 90), X(1, 1, 0.8));
            V(
              O(J(
                r(G(), q.translate(-4 * b, 3.5, -0.5).scale(4, 4, 0.7), X(0.5, 0.5, 0.5, 0.4)),
                r(G(), q.scale(3, 3, 10), X(0.6, 0.24, 0.2, 0.5)),
                r(G(28, 1), q.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(0.6, 0.24, 0.2, 0.5)),
                r(G(5), q.translate(-5.3 * b, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(0.6, 0.24, 0.2, 0.5)),
                r(G(5), q.translate(-5.3 * b, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), X(0.6, 0.24, 0.2, 0.5)),
              )),
              q.translate(b - 100, 0.7, 97),
            );
          }),
          T(b => {
            b.h = () => q.translate(-100, 0.6 - 6 * l[12].g, 96.5).scale(0.88, 1.2);
            V(D);
          }),
          [
            ...r(G(25, 1), q.scale(8, 1, 8), X(0.45, 0.45, 0.45, 0.2)),
            ...r(G(5), q.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)),
          ]);
      T(b => {
        b.h = () => q.translate(-80, 1, 106).rotate(0, 40 + fa);
        V(O(
          J(
            r(G(25, 1), q.scale(8, 1, 8), X(0.45, 0.45, 0.45, 0.2)),
            r(G(), q.translate(0, 0, -5.5).scale(1.5, 3, 2.5), X(0.45, 0.45, 0.45, 0.2)),
          ),
        ));
        V(G(8), q.translate(0, 2).scale(3, 1.5, 3), X(0.7, 0.7, 0.7, 0.1));
        V(G(5), q.translate(0, 2).scale(1, 2), X(0.3, 0.3, 0.3, 0.2));
        vb(q.translate(0, 3), ...db(10).map(({ x: g, z: t }) => [5.6 * g, 5.6 * t, 2.5]));
      });
      T(b => {
        b.h = () => q.translate(-64, 1, 106).rotate(0, ia);
        V(O(
          J(
            r(G(25, 1), q.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3)),
            r(G(), q.scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
          ),
        ));
        V(B);
        [-1, 1].map(g =>
          V(v, q.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), X(1, 1, 0.8))
        );
      });
      T(b => {
        b.h = () => q.translate(-48, 1, 106).rotate(0, 180 - ia);
        V(O(
          J(
            r(G(25, 1), q.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3)),
            r(G(), q.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
            r(G(), q.translate(0, 0, 7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
          ),
        ));
        V(B);
      });
      T(b => {
        b.h = () => q.translate(-48, 1, 90).rotate(0, 270 + ia);
        V(O(
          J(
            r(G(25, 1), q.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3)),
            r(G(), q.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
            r(G(), q.translate(0, 0, -7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
          ),
        ));
        V(B);
      });
      V(G(), q.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), X(0.7, 0.7, 0.7, 0.2));
      V(G(), q.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), X(0.7, 0.7, 0.7, 0.2));
      V(G(), q.translate(-39, 0.4, 90).scale(2, 1, 2), X(0.7, 0.7, 0.7, 0.3));
      V(G(), q.translate(-34.2, 0.4, 90).scale(3, 1, 3), X(0.7, 0.7, 0.7, 0.3));
      ub(q.translate(-34, 2.7, 96).rotate(-12, 0));
      V(G(5), q.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), X(0.2, 0.5, 0.5, 0.6));
      [X(0.1, 0.55, 0.45, 0.2), X(0.2, 0.5, 0.5, 0.3), X(0.3, 0.45, 0.55, 0.4)].map((b, g) =>
        T(t => {
          t.h = () =>
            q.translate(
              0,
              (1 - l[13].i) * (1 - l[14].i) * (g ? 0 : 3) + Ua(l[13].i, l[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,
            );
          V(G(), q.translate(-23.5, 0.5, 90 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), b);
          2 === g && V(G(), q.translate(-29.1, 0.4, 90).scale(2.1, 1, 3), X(0.7, 0.7, 0.7, 0.3));
          1 === g
            && V(G(), q.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), X(0.6, 0.6, 0.7, 0.3));
        })
      );
      V(O(
        J(
          r(G(6, 0, 0, 0.3), q.translate(0, -0.92, 95).scale(14, 2, 14), X(0.8, 0.8, 0.8, 0.2)),
          r(G(5), q.translate(0, 0, 95).scale3d(6), X(0.3, 0.3, 0.3, 0.5)),
        ),
      ));
      [8, -6.1].map((b, g) =>
        Na(
          3,
          t =>
            V(
              x,
              q.translate(6 * t - 6, b - (1 & t), 111 - 0.2 * (1 & t) - g),
              1 & t ? X(0.5, 0.5, 0.5, 0.3) : X(0.35, 0.35, 0.35, 0.5),
            ),
        )
      );
      [-1, 1].map(b => V(v, q.translate(-8 * b, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * b + 90), X(1, 1, 0.8)));
      ub(q.translate(0, 1.7, 82).rotate(0, 180));
      V(G(5), q.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(0.5, 0.3, 0.3, 0.4));
      V(O(
        J(
          qb(
            r(G(), q.translate(0, 16, 110.5).scale(12, 1, 3), X(0.5, 0.3, 0.3, 0.4)),
            r(G(), q.translate(0, 16, 111).scale(3, 1, 3.8), X(0.5, 0.3, 0.3, 0.4)),
          ),
          r(G(5), q.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(0.5, 0.3, 0.3, 0.4)),
        ),
      ));
      V(G(6), q.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(0.5, 0.6, 0.7, 0.3));
      V(G(), q.translate(0, 16, 129).scale(1.5, 1, 2), X(0.5, 0.6, 0.7, 0.3));
      V(G(7), q.translate(0, 16.2, 133).scale(5, 1, 5), X(0.4, 0.5, 0.6, 0.4));
      T(b => {
        b.h = () => {
          const g = Math.sin(a);
          return q.translate(-2 * g).rotate(25 * g);
        };
        V(G(3), q.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), X(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          V(G(6), q.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), X(0.7, 0.7, 0.7, 0.4));
          V(G(), q.translate(0, 6.2, g + 95).scale(0.5, 11, 0.5), X(0.5, 0.3, 0.3, 0.4));
        });
      });
      T(b => {
        b.h = () => {
          const g = Ua(Ua((l[14].g + l[14].i) / 2, l[13].i), (l[15].g + l[15].i) / 2);
          return q.translate(0, 16 * g, 8.5 * Sa(2 * g - 1) + 95);
        };
        V(G(5), q.scale(5, 1.1, 5), X(0.5, 0.3, 0.3, 0.4));
        V(G(5), q.scale(5.5, 0.9, 5.5), X(0.25, 0.25, 0.25, 0.4));
        ub(q.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(q.translate(0, 3, 95), ...db(9).map(({ x: b, z: g }) => [9 * b, 9 * g, 4]));
      vb(q.translate(0, 19, 134), [0, 0, 3.5]);
    });
    T(() => {
      [0, 180].map(A => V(v, q.rotate(0, A).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), X(1, 1, 0.8)));
      V(hb(20), q.translate(0, 1).scale(0.5, 0.5, 0.5), X(1, 0.3, 0.4));
      const w = r(
        O(J(G(15, 1), r(G(), q.translate(0, 0, 1).scale(2, 2, 0.5)))),
        q.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        X(0.3, 0.3, 0.3),
      );
      [-1, 1].map(A => V(w, q.translate(0.2 * A, 1.2, 0.4).rotate(0, 20 * A, 20 * A)));
      V(G(), q.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), X(0.3, 0.3, 0.3));
      V(hb(20), q.scale(0.7, 0.8, 0.55), X(1, 0.3, 0.4));
    });
    [-1, 1].map(w =>
      T(() => {
        V(G(10, 1), q.translate(0.3 * w, -0.8).scale(0.2, 0.7, 0.24), X(1, 0.3, 0.4));
      })
    );
    T(() => {
      V(G(6, 1), q.scale(0.13, 1.4, 0.13), X(0.3, 0.3, 0.5, 0.1));
      V(G(8, 1), q.translate(0, 1).scale(0.21, 0.3, 0.21), X(1, 0.5, 0.2));
      V(G(3), q.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), X(0.2, 0.2, 0.2, 0.1));
    }, 0);
    T(() => {
      V(G(6).slice(0, -1), q.scale(0.77, 1, 0.77), X(1, 0.3, 0.5));
    }, 0);
    T(() => {
      V(
        hb(30, 24, (w, A, E) => {
          const z = A / 24, B = w * Math.PI * 2 / 30, b = z ** 0.6 * Math.PI / 2;
          w = z * z * Math.sin(w * Math.PI * 14 / 30) / 4;
          return 23 === A
            ? { x: E.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(B) * Math.sin(b),
              y: Math.cos(z * Math.PI) - z - w,
              z: Math.sin(B) * Math.sin(b) + Math.sin(w * Math.PI * 2) / 4,
            };
        }),
        q.scale3d(0.7),
        X(1, 1, 1),
      );
      [-1, 1].map(w => V(hb(12), q.translate(0.16 * w, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls: <b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n",
);
