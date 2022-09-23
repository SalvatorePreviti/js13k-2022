let ba = 0,
  da = 0,
  a = 0,
  ea = 0,
  fa = 0,
  ha = 0,
  ia = 0,
  ja = 0,
  ka = 0,
  la = 0,
  ma = 0,
  oa = 0,
  d = 0.066,
  pa = 1,
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
  Ca = { x: 0, y: 0, z: 0 };
var Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180,
  m = new DOMMatrix(),
  La = new Float32Array(16),
  Ma = new Float32Array(624),
  r = (b, c) => Array.from(Array(b), (g, l) => c(l)),
  Pa = b => 4 < b ? 4 : b,
  Qa = (b, c) => c < b ? b : c,
  Ra = b => 0 > b ? -b : b,
  Sa = (b, c) => (0 > b ? -b : b) > c ? b : 0,
  Ta = b => 0 > b ? 0 : 1 < b ? 1 : b,
  Ua = (b, c, g) => b + (c - b) * (0 > g ? 0 : 1 < g ? 1 : g),
  Va = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)),
  Wa = b => (b *= Ka, Math.atan2(Math.sin(b), Math.cos(b)) / Ka),
  Xa = (b, c, g) =>
    ((b *= Ka) + (2 * (c = (c * Ka - b) % (2 * Math.PI)) % (2 * Math.PI) - c) * (0 > g ? 0 : 1 < g ? 1 : g)) / Ka,
  Ya = ({ x: b, y: c, z: g }) => Math.hypot(b - Ca.x, c - Ca.y, g - Ca.z),
  Za = ({ x: b, y: c, z: g }, l) => b * l.x + c * l.y + g * l.z,
  $a = b => {
    let c = 0, g = 0, l = 0, n, h = b.at(-1);
    for (n of b) {
      c += (h.y - n.y) * (h.z + n.z), g += (h.z - n.z) * (h.x + n.x), l += (h.x - n.x) * (h.y + n.y), h = n;
    }
    return n = Math.hypot(c, g, l), c /= n, g /= n, l /= n, { x: c, y: g, z: l, w: c * h.x + g * h.y + l * h.z };
  },
  ab = (
    b,
    c = La,
    g = 0,
  ) => (g *= 16,
    c[g++] = b.m11,
    c[g++] = b.m12,
    c[g++] = b.m13,
    c[g++] = b.m14,
    c[g++] = b.m21,
    c[g++] = b.m22,
    c[g++] = b.m23,
    c[g++] = b.m24,
    c[g++] = b.m31,
    c[g++] = b.m32,
    c[g++] = b.m33,
    c[g++] = b.m34,
    c[g++] = b.m41,
    c[g++] = b.m42,
    c[g++] = b.m43,
    c[g] = b.m44,
    c),
  bb = (b, c, g, l) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0],
  cb = (b, c, g) => (b.D = g, b.A = c, b),
  db = (b, c, g = b.A) =>
    cb(
      b.map(l => {
        let n, h;
        return { x: l, y: n, z: h } = l,
          { x: l, y: n, z: h } = c.transformPoint({ x: l, y: n, z: h }),
          { x: l, y: n, z: h };
      }),
      g,
      b.D,
    ),
  w = (b, c, g) => b.map(l => db(l, c, g)),
  eb = (b, c = 0) =>
    r(b, g => {
      const l = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: 0.01 > (0 > l ? -l : l) ? l : 0 > l ? l - c : l + c };
    }),
  hb = (b, c, g) =>
    b.map((l, n, { length: h }) => cb([l, c[h - n - 1], c[h - (n + 1) % h - 1], b[(n + 1) % h]], b.A, g)),
  G = (
    b,
    c,
    g = 0,
    l,
  ) => (b = b ? eb(b, l) : xa,
    l = db(b, m.translate(0, 1).scale3d(0 < g ? g : 1)),
    b = db(b, m.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(),
    [...hb(b, l, c), l, b]),
  ib = (
    b,
    c = b,
    g = (
      l,
      n,
    ) => (n *= Math.PI / c,
      { x: Math.cos(l *= 2 * Math.PI / b) * Math.sin(n), y: Math.cos(n), z: Math.sin(l) * Math.sin(n) }),
  ) => {
    const l = [];
    for (let n = 0; b > n; n++) {
      for (let h = 0; c > h; h++) {
        const t = cb([], 0, 1);
        l.push(t);
        t.push(g(n, h, t));
        h && t.push(g((n + 1) % b, h, t));
        c - 1 > h && t.push(g((n + 1) % b, h + 1 % c, t));
        t.push(g(n, h + 1 % c, t));
      }
    }
    return l;
  },
  jb = (b, c) => {
    var g, l, n, h = c.C;
    for (var t = 0; h.length > t; ++t) {
      if (-0.00008 > (g = Za(b, h[t]) - b.w) ? n = c : 8e-5 < g && (l = c), n && l) {
        l = [];
        n = [];
        h = c.C;
        t = c.B;
        let y = h.at(-1), x = Za(b, y) - b.w;
        for (const C of h) {
          g = Za(b, C) - b.w,
            8e-5 > x && n.push(y),
            -0.00008 < x && l.push(y),
            (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g)
            && (x /= g - x,
              y = { x: y.x + (y.x - C.x) * x, y: y.y + (y.y - C.y) * x, z: y.z + (y.z - C.z) * x },
              l.push(y),
              n.push(y)),
            y = C,
            x = g;
        }
        return {
          o: 2 < l.length && { C: cb(l, h.A, h.D), B: t, u: c },
          m: 2 < n.length && { C: cb(n, h.A, h.D), B: t, u: c },
        };
      }
    }
    return { o: l, m: n };
  },
  kb = (b, c, g = $a(c.C)) => {
    let l, n, h;
    return b
      ? ({ o: l, m: n } = jb(b, c), l || n || b.s.push(c), l && (b.o = kb(b.o, l, g)), n && (b.m = kb(b.m, n, g)))
      : ({ x: l, y: n, z: g, w: h } = g, b = { x: l, y: n, z: g, w: h, s: [c], o: 0, m: 0 }),
      b;
  },
  lb = (b, c, g) => {
    const l = [],
      n = (h, t) => {
        let { o: y, m: x } = jb(h, t);
        y || x || (0 < g * Za(h, c) ? y = t : x = t);
        y && (h.o ? n(h.o, y) : l.push(y));
        x && h.m && n(h.m, x);
      };
    for (const h of c.s) {
      n(b, h);
    }
    return l;
  },
  ob = (b, c) => b && (c(b), ob(b.o, c), ob(b.m, c)),
  pb = b => b.length ? b.reduce((c, g) => kb(c, { C: g, B: 0, u: 0 }), 0) : b,
  qb = b => (ob(b, c => {
    const g = c.m;
    c.m = c.o;
    c.o = g;
    c.x *= -1;
    c.y *= -1;
    c.z *= -1;
    c.w *= -1;
    for (const l of c.s) {
      l.B = !l.B;
    }
  }),
    b),
  rb = (...b) =>
    b.reduce((c, g) => {
      const l = [];
      if (c = pb(c), g) {
        g = pb(g);
        ob(c, n => n.s = lb(g, n, 1));
        ob(g, n => l.push([n, lb(c, n, -1)]));
        for (let [n, h] of l) {
          for (const t of h) {
            kb(c, t, n);
          }
        }
      }
      return c;
    }),
  H = (...b) => {
    let c;
    const g = new Map(),
      l = new Map(),
      n = h => {
        let t;
        return h.u && ((t = g.get(h.u)) ? (l.delete(t), h = n(h.u)) : g.set(h.u, h)), h;
      };
    return [b, ...c] = [...b],
      b = qb(rb(qb(pb(b)), ...c)),
      ob(b, h => {
        for (const t of h.s) {
          l.set(n(t), t.B);
        }
      }),
      Array.from(l, ([{ C: h }, t]) => {
        const y = h.map(({ x, y: C, z: E }) => ({ x, y: C, z: E }));
        return cb(t ? y.reverse() : y, h.A, h.D);
      });
  },
  O = (b, c, g) => b + (c - b) * Ta(1 - Math.exp(-g * d)),
  sb = () => {
    const b = Va(k[12].g, k[13].g);
    ia = Ua(O(ia, 0, 1), Wa(ia + 60 * d), k[5].g - k[6].i);
    fa = Ua(O(fa, 0, 5), Wa(fa + 56 * d), b);
    ha = Ua(O(ha, 0, 4), Wa(ha + 48 * d), b);
    la = O(la, k[9].i, 0.2 + 0.3 * Ra(2 * k[9].i - 1));
    ka = O(ka, ja ? ka + (-9 - ka) * Ta(1.5 * d) : Ta(a / 3), 1);
    pa && a > pa && (pa = 0, h4.innerHTML = "");
    k[0].j && 0.8 < k[0].g && (13 > ba
      ? (1 / 0 > pa && (pa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), k[0].j = 0)
      : ja
        || (1 / 0 > pa && (pa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ja = 1));
    for (const c of f) {
      c.h && (c.l = c.h());
    }
    for (const c of k) {
      c.h();
    }
    for (const c of ya) {
      c.h();
    }
  },
  tb = () => {
    h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ba = ya.reduce((b, { j: c }) => b + c, 0)];
  },
  ub = () => {
    localStorage.DanteSP22 = JSON.stringify([k.map(({ j: b }) => b), ya.map(({ j: b }) => b), ea, a, la]);
  },
  Q = (b, c = 1) => {
    const g = ua;
    c = { l: m, H: f.length, G: c, s: [] };
    return f.push(ua = c), b(c), ua = g, c;
  },
  S = (b, c = m, g) => ua.s.push(...w(b, c, g)),
  W = b => {
    const c = ua,
      g = k.length,
      l = {
        j: 0,
        g: 0,
        i: 0,
        u: c,
        h() {
          const n = l.j, h = l.g, t = l.i, y = c.l.multiply(b);
          l.I = y;
          3 > Ya(y.transformPoint()) && za[5] && (0.3 > h || 0.7 < h)
            && (l.j = n ? 0 : 1, g && 1 / 0 > pa && (pa = a + 1, h4.innerHTML = "* click *"), ea = g, ub());
          l.g = O(h, n, 4);
          l.i = O(t, n, 1);
          l.l = y.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
        },
      };
    k.push(l);
    S(G(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    S(G(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
    S(G(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
  },
  vb = (b, ...c) => {
    let g = -1, l = 0, n = 0, h = 0, t = 0, y = 0, x = 1, C = 3;
    const E = {
        j: 0,
        h() {
          if (!E.j) {
            let qa = 1, Na = 1 / 0, M, F, A, v, P, N, K;
            for (const ca of e) {
              var { x: J, z: L, w: R } = ca;
              L = (J = Math.hypot(p - J, u - L)) - R;
              K ||= J < R;
              0 < L && Na > L && (Na = L, q = ca);
              var aa = J / R;
              qa = qa < aa ? qa : aa;
            }
            K
              || ({ x: M, z: F, w: A } = q,
                v = p - M,
                P = u - F,
                N = Math.hypot(v, P),
                X = Math.atan2(-P, v),
                x && (n = (Math.random() - 0.5) * Math.PI / 2, C = Qa(1, C / (1 + Math.random()))),
                X += n,
                g = -Math.cos(X),
                l = Math.sin(X),
                0.1 < N && (N = (N < A ? N : A) / (N || 1), p = v * N + M, u = P * N + F));
            x = K;
            C = O(C, 3 + 6 * (1 - qa), 3 + qa);
            z = O(z, p = O(p, p + g, C), C);
            D = O(D, u = O(u, u + l, C), C);
            h = Xa(h, Math.atan2(z - t, D - y) / Ka - 180, 3 * d);
            t = z;
            y = D;
            var X = (E.l = I.l.multiply(b.translate(z, 0, D).rotateSelf(0, h, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.55 > Ya(X)
              && (E.j = 1,
                aa = [
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
                  > pa && (pa = a + (ba && 12 > ba ? 5 : 7), h4.innerHTML = aa),
                tb(),
                ub());
          }
          E.j
            && (E.l = f[2].l.translate(
              B % 4 * 1.2 - 1.7 + Math.sin(a + B) / 7,
              -2,
              1.7 * (B / 4 | 0) - 5.5 + Ra(B % 4 - 2) + Math.cos(a / 1.5 + B) / 6,
            ));
        },
      },
      I = ua,
      B = ya.length,
      e = c.map(([J, L, R]) => ({ x: J, z: L, w: R }));
    let q = e[0], { x: p, z: u } = q, z = p, D = u;
    ya.push(E);
  },
  wb = (b, c, g, l) => {
    let n = 0, h = 0, t = 0, y = 1 / 0, x = -1 / 0, C = 1 / 0, E = -1 / 0, I = 1 / 0, B = -1 / 0;
    const e = 1.1 * (g - c),
      q = (new DOMMatrix(bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
    return c = r(
      8,
      p => (p = q.transformPoint({ x: 4 & p ? 1 : -1, y: 2 & p ? 1 : -1, z: 1 & p ? 1 : -1 }),
        n -= p.x = (e * p.x | 0) / e / p.w,
        h -= p.y = (e * p.y | 0) / e / p.w,
        t -= p.z = (e * p.z | 0) / e / p.w,
        p),
    ),
      g = m.rotate(298, 139).translateSelf(n / 8, h / 8, t / 8),
      db(c, g).map(({ x: p, y: u, z }) => {
        y = y < p ? y : p;
        x = p < x ? x : p;
        C = C < u ? C : u;
        E = u < E ? E : u;
        I = I < z ? I : z;
        B = z < B ? B : z;
      }),
      I *= 0 > I ? l : 1 / l,
      B *= 0 < B ? l : 1 / l,
      m.scale(2 / (x - y), 2 / (E - C), 2 / (I - B)).translateSelf((x + y) / -2, (E + C) / -2, (I + B) / 2)
        .multiplySelf(g);
  },
  zb = () => {
    let b = !0, c, g, l, n, h, t, y, x, C, E, I, B;
    const e = () => {
        sa || !b ? xb.disconnect() : xb.connect(yb.destination);
        b4.innerHTML = "Music: " + b;
      },
      q = (p = !1) => {
        if (sa !== p) {
          sa = p;
          try {
            p
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : xb.start();
          } catch {
          }
          va = 0;
          document.body.className = p ? "l m" : "l";
          e();
          tb();
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
      va = 1;
    };
    b4.onclick = () => {
      b = !b;
      e();
    };
    b5.onclick = () => q(!0);
    onclick = p => {
      B = 1;
      sa || (p.target === hC && (za[5] = !0), va && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: p, target: u, type: z, repeat: D }) => {
      D || ((D = !!z[5] && u === document.body) && ("Escape" === p || "Enter" === p && sa)
        ? sa && !B || q(!sa)
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
            }[p])
        ? D && (za[z] = 1)
        : za[z] = D);
    };
    onmousemove = ({ movementX: p, movementY: u }) => {
      va && (p || u) && (Ja += 0.1 * p, Ia += 0.1 * u);
    };
    hC.ontouchstart = p => {
      if (!sa) {
        for (let { pageX: u, pageY: z, identifier: D } of p.changedTouches) {
          va && u > hC.clientWidth / 2
            ? void 0 === x && (C = 0, t = u, y = z, x = D, E = Ja, I = Ia)
            : void 0 === n && (h = 0, g = u, l = z, n = D);
        }
        c = da;
      }
    };
    hC.ontouchmove = p => {
      if (!sa) {
        for (let { pageX: R, pageY: aa, identifier: X } of p.changedTouches) {
          var u, z, D, J, L;
          x === X && (Ja = E + (R - t) / 2.3, Ia = I + (aa - y) / 2.3, C = 1);
          n === X
            && (X = (g - R) / 20,
              u = (l - aa) / 20,
              z = 0 > X ? -X : X,
              D = 0 > u ? -u : u,
              J = Math.atan2(u, X),
              L = Ta(Math.hypot(u, X) - 0.5),
              ma = 0.2 < z ? Math.cos(J) * L : 0,
              oa = 0.2 < D ? Math.sin(J) * L : 0,
              (ma || oa) && (h = 1),
              2 < z && (g = R + 20 * Math.sign(X)),
              2 < D && (l = aa + 20 * Math.sign(u)));
        }
      }
    };
    hC.ontouchend = p => {
      let u;
      p.preventDefault();
      for (const z of p.changedTouches) {
        z.identifier === x
          ? (x = void 0, C || (u = 1), C = 0)
          : z.identifier === n
          ? (n = void 0, oa = ma = 0, h || (u = 1), h = 0)
          : u = 1;
      }
      u && p.target === hC && c && 0.02 < (p = da - c) && 0.7 > p && (za[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      za.length = ma = oa = 0;
      n = x = void 0;
      document.hidden && q(!0);
    })();
    q(!0);
  },
  Ab = () => {
    let b = 0, c = 0, g = 0, l = 0, n = 0, h = 2, t, y, x, C, E, I, B, e, q, p, u, z, D;
    const J = { x: 0, y: 0, z: 0 },
      L = new Int32Array(256),
      R = new Uint8Array(65536),
      aa = () => {
        h = 2;
        C =
          B =
          I =
          E =
            0;
        b = c = k[ea].u.H || 1;
      },
      X = () => {
        for (let M = 32; 128 > M; M += 2) {
          let F = 0, A = 0, v = 0, P = 0;
          const N = 512 * M;
          for (let K = 1 & M; 128 > K; K += 2) {
            const ca = N + 4 * K;
            let Y = N + 4 * (127 - K);
            const V = R[ca] / 255, na = R[1 + Y] / 255, Oa = 1 - Ra(K / 63.5 - 1);
            10 < K && 118 > K && (F = Qa(F, Qa(V * Oa, V * R[Y] / 255)), A = Qa(A, Qa(na * Oa, na * R[1 + ca] / 255)));
            (54 > K || 74 < K) && 1e-3 < (Y = (1 - Oa) * (na < V ? V : na) / 3)
              && (64 > K && Y > v ? v = Y : 64 < K && Y > P && (P = Y));
          }
          Ra(P - v) > (0 > q ? -q : q) && (q = P - v);
          Ra(A - F) > (0 > p ? -p : p) && (p = A - F);
        }
      },
      qa = () => {
        let M = 0, F = 0, A = 0, v = 0;
        L.fill(0);
        for (let N = 0; 31 > N; ++N) {
          let K = 0;
          const ca = 512 * N;
          for (let Y = 0; 128 > Y; Y++) {
            var P = ca + 4 * Y;
            let V = (R[P] + R[1 + P]) / 255;
            P = R[2 + P];
            14 < Y && 114 > Y && (K += V);
            P && V && (V = L[P] + 1, L[P] = V, M > V || (M = V, F = P));
          }
          3 > K && 5 < N && (v += N / 32);
          3 < K && (7 < N && (A += N / 15), x = 1);
        }
        F && (x = 1);
        h ? F && (h = 0, c = F) : c = F || b;
        b = F;
        C = O(C, x ? 6.5 : 8, 4);
        J.y += A / 41 - (x ? 1 : C) * v / 41 * C * d;
      },
      Na = () => {
        var M = 1 === f[c].G && f[c].l || m,
          { x: F, y: A, z: v } = (h
            ? ({ x: A, y: F, z: v } = k[ea].I.transformPoint({ x: 0, y: 12, z: -2.5 }),
              1 < h && (h = 1, e = Ca.y = F),
              Ca.x = A,
              Ca.z = v)
            : ({ x: A, z: v } =
              ((F = M.inverse()).m41 = 0, F.m42 = 0, F.m43 = 0, F.transformPoint({ x: q, z: p, w: 0 })),
              J.x += A,
              J.z += v),
            c !== y && (y = c, { x: F, y: A, z: v } = M.inverse().transformPoint(Ca), J.x = F, J.y = A, J.z = v),
            M.transformPoint(J));
        M = F - Ca.x;
        let P = v - Ca.z;
        Ca.x = F;
        Ca.y = A;
        Ca.z = v;
        A < (-25 > F || 109 > v ? -25 : -9) && aa();
        c && (I = M / d, B = P / d);
        e = Ua(O(e, A, 2), A, 8 * Ra(e - A));
        void 0 === u && (Fa = u = F, Ga = (z = e = A) + 13, Ha = (D = v) + -36);
        u = O(u, F, Pa(Qa(0.4, Ra(u - F) - 1.5)));
        z = O(z, A, Pa(Qa(0.4, Ra(z - A) - 2.2)));
        D = O(D, v, Pa(Qa(0.4, Ra(D - v) - 1.5)));
        va
          ? (Fa = O(Fa, F, 666 * h + 18), Ga = O(Ga, e + 1.5, 666 * h + 18), Ha = O(Ha, v, 666 * h + 18))
          : (Fa = O(Fa, u, 2),
            Ga = O(Ga, Qa(z + 13, 6), 2),
            Ha = O(Ha, D + -18, 2),
            M = Fa - u,
            P = Ha - D,
            (A = Sa(Math.hypot(P, M), 0.1))
            && (Ia = 90 - Math.atan2(A, Ga - z) / Ka, Ja = 270 + Math.atan2(P, M) / Ka));
        Ia = Qa(87 > Ia ? Ia : 87, -87);
        Ja = Wa(Ja);
        1 === c && (k[9].j = -15 > F && 0 > v ? 1 : 0);
        const N = f[37].l = m.translate(F, e, v).rotateSelf(0, l = Xa(l, g, 8 * d));
        [38, 39].map((K, ca) => {
          f[K].l = N.translate(0, n * Ta(0.45 * Math.sin(9.1 * a + Math.PI * (ca - 1) - Math.PI / 2))).rotateSelf(
            n * Math.sin(9.1 * a + Math.PI * (ca - 1)) * 0.25 / Ka,
            0,
          );
        });
      };
    wa = () => {
      let M = ma + (za[0] ? 1 : 0) - (za[2] ? 1 : 0),
        F = oa + (za[1] ? 1 : 0) - (za[3] ? 1 : 0),
        A = navigator.getGamepads()[0];
      if (A) {
        var v = K => P[K]?.pressed || 0 < P[K]?.value ? 1 : 0;
        const P = A.buttons, N = A.axes;
        A = v(3) || v(2) || v(1) || v(0);
        M += v(14) - v(15) - Sa(N[0], 0.2);
        F += v(12) - v(13) - Sa(N[1], 0.2);
        va && (Ia += 80 * Sa(N[3], 0.3) * d, Ja += 80 * Sa(N[2], 0.3) * d);
        A && !t && (za[5] = 1);
        t = A;
      }
      v = Math.atan2(F, M);
      A = Sa(Ta(Math.hypot(F, M)), 0.05);
      M = A * Math.cos(v);
      F = A * Math.sin(v);
      n = O(n, A, 10);
      A && (g = 90 - v / Ka);
      x = p = q = 0;
      Z.fa7();
      Z.r9r(0, 0, 128, 128, 6408, 5121, R);
      Z.iay(36008, [36064, 36096]);
      Z.iay(36009, [36064, 36096]);
      NO_INLINE(X)();
      NO_INLINE(qa)();
      v = Ta(1 - 5 * Qa(0 > q ? -q : q, 0 > p ? -p : p));
      c || (q += I * v * d, p += B * v * d);
      I = O(I, 0, x ? 8 : 4);
      B = O(B, 0, x ? 8 : 4);
      E = O(E, x ? (A ? x ? 7 : 4 : 0) * v : 0, x ? 0.1 < v ? 10 : A ? 5 : 7 : 1);
      v = va ? Ja * Ka : Math.PI;
      A = Math.sin(v) * E * d;
      v = Math.cos(v) * E * d;
      q -= M * v - F * A;
      p -= M * A + F * v;
      NO_INLINE(Na)();
    };
    aa();
  },
  Bb = (b, c = 35633) => (c = Z.c6x(c), Z.s3c(c, b), Z.c6a(c), c),
  Gb = (b, c) => {
    const g = {}, l = Z.c1h();
    return Z.abz(l, b), Z.abz(l, Bb(c, 35632)), Z.l8l(l), n => n ? g[n] || (g[n] = Z.gan(l, n)) : Z.u7y(l);
  },
  Hb = (b, c, g, l) => {
    if (sa) {
      g = m.rotate(0, 40 * Math.sin(da) - 70);
      for (var n of [37, 38, 39]) {
        ab(g, Ma, n - 1);
      }
      Z.uae(b, !1, Ma);
      Z.d97(4, f[39].F - f[37].v, 5123, 2 * f[37].v);
    } else {
      for (n = 0; f.length > n; ++n) {
        f[n].G && ab(f[n].l, Ma, n - 1);
      }
      Z.uae(b, !1, Ma);
      Z.d97(4, (c ? f[39].F : f[37].v) - 3, 5123, 6);
      for (c = 0; 13 > c; ++c) {
        ab(ya[c].l, Ma, c);
      }
      for (c = 0; k.length > c; ++c) {
        ab(k[c].l, Ma, c + 13), l || (Ma[16 * (c + 13) + 15] = 1 - k[c].g);
      }
      Z.uae(b, !1, Ma);
      Z.das(4, f[g].F - f[g].v, 5123, 2 * f[g].v, 13);
      Z.das(4, f[40].F - f[40].v, 5123, 2 * f[40].v, k.length);
    }
  },
  Ib = b => {
    h4.innerHTML += ".";
    setTimeout(b);
  },
  Jb = b => Math.sin(b * Math.PI * 2),
  Kb = b => 0.5 > b % 1 ? 1 : -1,
  Lb = b => b % 1 * 2 - 1,
  Mb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b,
  Tb = b => {
    let c = 0;
    const g = () => {
        const h = yb.createBuffer(2, 5362944, 44100);
        for (let t = 0; 2 > t; t++) {
          for (let y = t, x = h.getChannelData(t); 10725888 > y; y += 2) {
            x[y >> 1] = n[y] / 65536;
          }
        }
        xb.buffer = h;
        xb.loop = !0;
        Ib(b);
      },
      l = () => {
        let h = 0, t, [y, x, C, E, I, B, e, q, p, u, z, D, J, L, R, aa, X, qa, Na, M, F] = Ba[c];
        u = u * u * 4;
        for (const K of [5513, 4562, 3891]) {
          let ca = 0, Y = 0, V, na, Oa;
          const Cb = [],
            Aa = new Int32Array(768 * K),
            Nb = 2 ** (D - 9) / K,
            Ob = Math.PI * 2 ** (X - 8) / K,
            mb = Na * K & -2;
          for (let fb = 0; 11 >= fb; ++fb) {
            for (
              let gb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + fb];
              32 > gb;
              ++gb
            ) {
              const Eb = (32 * fb + gb) * K;
              for (var A = 0; 4 > A; ++A) {
                if (V = 0, Db && (V = F[Db - 1].charCodeAt(gb + 32 * A) - 40, V += 0 < V ? 106 : 0), V) {
                  var v;
                  if (!(v = Cb[V])) {
                    v = V;
                    let T = void 0, ra = void 0;
                    var P = K, N = V;
                    let Pb = 0, Qb = 0;
                    const Rb = 2 > c ? Lb : Jb, Sb = 2 > c ? 1 > c ? Kb : Mb : Jb, Fb = new Int32Array(q + p + u);
                    for (let Da = 0, nb = 0; q + p + u > Da; ++Da, ++nb) {
                      let Ea = 1;
                      q > Da ? Ea = Da / q : q + p > Da || (Ea = (1 - (Ea = (Da - q - p) / u)) * 3 ** (-z / 16 * Ea));
                      0 > nb
                        || (nb -= 4 * P,
                          ra = 396e-5 * 2 ** ((N + x - 256) / 12),
                          T = 396e-5 * 2 ** ((N + I - 256) / 12) * (1 + (c ? 0 : 0.007200)));
                      Fb[Da] = 80
                          * (Rb(Pb += ra * Ea ** (C / 32)) * y + Sb(Qb += T * Ea ** (B / 32)) * E
                            + (e ? (2 * Math.random() - 1) * e : 0))
                          * Ea | 0;
                    }
                    v = Cb[v] = Fb;
                  }
                  for (let T = 0, ra = 2 * Eb; v.length > T; ++T, ra += 2) {
                    Aa[ra] += v[T];
                  }
                }
              }
              for (let T, ra = 0; K > ra; ++ra) {
                A = 0,
                  v = 2 * (Eb + ra),
                  ((T = Aa[v]) || Oa)
                  && (na = 308e-5 * J,
                    1 !== c && 4 !== c || (na *= Math.sin(Nb * v * Math.PI * 2) * M / 512 + 0.5),
                    na = 1.5 * Math.sin(na),
                    ca += na * Y,
                    t = (1 - L / 255) * (T - Y) - ca,
                    Y += na * t,
                    T = 4 === c ? Y : 3 === c ? t : ca,
                    c || (T = 1 > (T *= 22e-5) ? -1 < T ? Math.sin(T / 4 * Math.PI * 2) : -1 : 1, T /= 22e-5),
                    T *= R / 32,
                    Oa = 1e-5 < T * T,
                    t = Math.sin(Ob * v) * aa / 512 + 0.5,
                    A = T * (1 - t),
                    T *= t),
                  v < mb || (A += Aa[1 + v - mb] * qa
                    / 255,
                    T += Aa[v - mb] * qa / 255),
                  n[h + v] += Aa[v] = A,
                  ++v,
                  n[h + v] += Aa[v] = T;
              }
            }
          }
          h += Aa.length;
        }
        Ib(5 > ++c ? l : g);
      },
      n = new Int32Array(10725888);
    Ib(l);
  },
  Ub = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  U = NO_INLINE((b, c, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b),
  yb = new AudioContext(),
  xb = yb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const b in Z) {
  Z[b[0] + [...b].reduce((c, g, l) => (c * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[b];
}
Ib(() => {
  let b = 0;
  const c = () => {
      if (2 == ++b) {
        const l = p => {
            let u, z;
            Z.f1s();
            requestAnimationFrame(l);
            D = (p - (ta || p)) / 1e3;
            sa ? (d = 0, za[5] = 0) : d = 0.066 < D ? 0.066 : D;
            a += d;
            da += D;
            ta = p;
            0 < d && (sb(), wa(), za[5] = 0);
            var D = sa
              ? m.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ta(hC.clientWidth / 1e3))
              : m.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Fa, -Ga, -Ha);
            0 < d
              && ({ x: p, y: u, z } = Ca,
                B(),
                Z.b6o(36160, t),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(B("b"), !1, ab(m.rotate(0, 180).invertSelf().translateSelf(-p, -u, 0.3 - z))),
                Hb(B("c"), 0, 41, 0),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(B("b"), !1, ab(m.translate(-p, -u, -z - 0.3))),
                Hb(B("c"), 0, 41, 0),
                Z.f1s());
            E();
            Z.b6o(36160, h);
            Z.v5y(0, 0, 2048, 2048);
            q[0](wb(D, 0.3, 55, 10));
            q[1](wb(D, 55, 177, 11));
            e();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            q[0]();
            q[1]();
            Z.uae(e("a"), !1, bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
            Z.uae(e("b"), !1, ab(D));
            Z.ubu(e("k"), Fa, Ga, Ha);
            Hb(e("c"), !va, 42, 0);
            I();
            Z.ubu(I("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, da);
            sa ? Z.ubu(I("k"), 0, 0, 0) : Z.ubu(I("k"), Fa, Ga, Ha);
            Z.uae(I("b"), !1, ab(D.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, t);
            Z.f1s();
          },
          n = g,
          h = Z.c5w(),
          t = Z.c5w(),
          y = Z.c3z(),
          x = Z.c25(),
          C = Bb(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          E = Gb(
            Bb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          I = Gb(
            Bb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          B = Gb(
            C,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          e = Gb(
            C,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          q = (B(),
            Z.uae(B("a"), !1, bb(1.4, 0.59, 1e-4, 1)),
            I(),
            Z.ubh(I("q"), 3),
            e(),
            Z.ubh(e("q"), 3),
            r(2, p => {
              const u = new Float32Array(16), z = Z.c25(), D = e(p ? "j" : "i");
              return Z.ubh(e(p ? "h" : "g"), p),
                Z.b6o(36160, h),
                Z.d45([0]),
                Z.r9l(0),
                Z.a4v(33984 + p),
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
                    ? (ab(J, u),
                      Z.uae(E("b"), !1, u),
                      Z.fas(36160, 36096, 3553, z, 0),
                      Z.c4s(256),
                      Hb(E("c"), !va, 42, 1))
                    : Z.uae(D, !1, u);
                };
            }));
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        Z.b6o(36160, t);
        Z.bb1(36161, y);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, y);
        Z.a4v(33987);
        Z.b9j(3553, x);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.fas(36160, 36064, 3553, x, 0);
        Z.a4v(33987);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        try {
          const [p, u, z, D, J] = JSON.parse(localStorage.DanteSP22);
          k.map((L, R) => L.g = L.i = L.j = R ? 0 | p[R] : 0);
          ya.map((L, R) => L.j = 0 | u[R]);
          ea = z;
          a = D;
          la = J;
        } catch {
        }
        ka = 0 > ea ? 0 : 1 < ea ? 1 : ea;
        sb();
        NO_INLINE(Ab)();
        requestAnimationFrame(l);
        NO_INLINE(zb)();
      }
    },
    g = new Image();
  g.onload = g.onerror = c;
  g.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      let h = 0, t;
      const y = [],
        x = [],
        C = [],
        E = [],
        I = new Map(),
        B = new Int32Array(8),
        e = u => {
          let { x: z, y: D, z: J } = t[u], L = (p[0] = z, p[1] = D, p[2] = J, u = "" + (t.D ? q : B), I.get(u));
          return void 0 !== L
            ? (z = 3 * L, E[z] = (E[z++] + B[5]) / 2, E[z] = (E[z++] + B[6]) / 2, E[z] = (E[z] + B[7]) / 2)
            : (I.set(u, L = I.size), x.push(z, D, J, p[3]), C.push(B[4]), E.push(B[5], B[6], B[7])),
            L;
        },
        q = new Int32Array(B.buffer, 0, 5),
        p = new Float32Array(B.buffer);
      for (const u of f) {
        for (t of (p[3] = 40 === u.H ? -14 : u.G && u.H, u.s)) {
          const { x: z, y: D, z: J } = $a(t);
          B[4] = 0 | t.A;
          B[5] = 32767 * z;
          B[6] = 32767 * D;
          B[7] = 32767 * J;
          for (let L = 2, R = e(0), aa = e(1); t.length > L; ++L) {
            y.push(R, aa, aa = e(L));
          }
        }
        u.s = null;
        u.v = h;
        u.F = h = y.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(E), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(C), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(y), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ib(c);
    });
    const l = r(
        11,
        h => m.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),
      ),
      n = r(10, h => hb(db(eb(18), l[h]).reverse(), db(eb(18), l[h + 1]), 1)).flat();
    Q(() => S([xa.slice(1)], m.translate(-2).scale3d(3).rotate(90, 0)), 0);
    Q(() => {
      const h = (e, q, p) =>
          Q(u => {
            u.h = () => m.translate(x() * Math.sin(3 * e + a * e) * q);
            xa.map(({ x: z, z: D }) => {
              S(G(11, 1), m.translate(4 * z, 4, p + 4 * D).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6));
              S(G(), m.translate(4 * z, 7, p + 4 * D).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
            });
            S(H(
              w(G(), m.translate(0, 0, p).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(z =>
                w(G(), m.translate(5 * z, 0.2, p).rotate(-30 * z).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3))
              ),
            ));
            S(G(), m.translate(0, -3, p).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
          }),
        t = (e, q, p) =>
          m.translate(e + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, p).rotateSelf(
            2 * Math.sin(a),
            Math.sin(0.7 * a),
            Math.sin(0.9 * a),
          ),
        y = e =>
          H(
            w(G(), m.translate(0, -e / 2).scale(6, e - 1, 2.2)),
            w(G(), m.translate(0, -e / 2 - 6).scale(4, e - 3, 4)),
            w(G(32, 1), m.translate(0, e / 2 - 9).rotate(90, 0, 90).scale3d(4)),
          ),
        x = () => {
          var e = k[2].i, q = 1 - k[4].i;
          return e < q ? e : q;
        },
        C = H(
          w(G(20, 1, 1.15, 1), m.translate(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7)),
          w(G(20, 1, 1.3, 1), m.translate(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2)),
          w(G(), m.translate(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),
        ),
        E = r(7, e => w(G(6, 1), m.translate(4 * (e / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38))).flat(),
        I = (Q(e => {
          e.h = () => t(-12, 4.2, 40 * ka - 66);
          S(C);
          W(m.translate(0, -3, 4));
        }),
          W(m.translate(-5.4, 1.5, -19).rotate(0, -90)),
          vb(m.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          vb(
            m.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...eb(18).map(({ x: e, z: q }) => [7 * e, 10 * q, 4.5 - 2 * (0 > e ? -e : e)]),
          ),
          S(G(), m.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
          xa.map(({ x: e, z: q }) => S(G(6), m.translate(3 * e, 3, 15 * q).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(e => S(G(), m.translate(0, 0, e).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((e, q) => {
            S(G(), m.translate(0, 6.3, e).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
            S(G(), m.translate(0, 1, e).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
            Q(p => {
              p.h = () => m.translate(0, 0, e).scale(1, Ta(1.22 - k[q + 1].g), 1);
              S(E);
            });
          }),
          r(5, e =>
            r(2, q =>
              S(
                n,
                m.translate(18.5 * (q - 0.5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2),
                U(1, 1, 0.8, 0.2),
              ))),
          S(G(), m.translate(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)),
          S(G(), m.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2)),
          S(G(5), m.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4)),
          S(G(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5)),
          S(H(
            rb(
              w(G(6, 0, 0, 0.3), m.translate(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2)),
              w(G(6), m.translate(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)),
              w(G(6, 0, 0, 0.3), m.translate(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2)),
            ),
            w(G(5), m.scale(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)),
            w(G(5, 0, 1.5), m.translate(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2)),
            w(G(), m.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5)),
            w(G(6), m.translate(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5)),
          )),
          Q(e => {
            e.h = () =>
              m.translate(
                0,
                0.01 < k[3].g ? (5 * Math.cos(1.5 * a) + 2) * k[3].i * (1 - k[2].g) + -15 * (1 - k[3].g) : -500,
                0,
              );
            S(G(5), m.translate(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
            W(m.translate(0, 1.2));
          }),
          W(m.translate(15, -2, 4)),
          h(0.7, 12, 35),
          h(1, 8.2, 55),
          Q(e => {
            e.h = () => m.translate(x() * Math.sin(a / 1.5 + 2) * 12);
            S(
              H(
                rb(
                  w(G(), m.scale(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  w(G(6), m.scale(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)),
                  w(G(), m.translate(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5)),
                  w(G(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2)),
                ),
                w(G(), m.scale(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),
              ),
              m.translate(0, 0, 45),
            );
            vb(m.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          S(G(), m.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
          Q(e => {
            e.h = () => m.translate(9.8 * (1 - x()));
            S(G(3), m.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
            S(G(8), m.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
            S(G(), m.translate(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
            S(G(), m.translate(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
            W(m.translate(-23, -0.5, 66.5));
          }),
          Q(e => {
            e.h = () => m.translate(0, Ta(1 - 5 * x()) * Va(k[4].g, k[5].g) * Math.sin(1.35 * a) * 4);
            S(G(), m.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
            S(
              H(w(G(), m.scale(3, 1.4, 2.7)), w(G(), m.scale(1.2, 8, 1.2))),
              m.translate(-33, -3, 55),
              U(0.7, 0.7, 0.7, 0.2),
            );
          }),
          Q(e => {
            e.h = () => m.translate(0, 0, Ta(1 - 5 * x()) * Va(k[4].g, k[5].g) * Math.sin(0.9 * a) * 8);
            S(H(
              w(G(), m.translate(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)),
              w(G(), m.translate(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),
            ));
            S(G(), m.translate(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
          }),
          Q(e => {
            e.h = () => m.translate(0, -6.5 * k[4].i);
            S(G(6), m.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4));
          }),
          W(m.translate(-55, -1.1, 46).rotate(0, 90)),
          S(G(6), m.translate(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)),
          S(G(7), m.translate(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)),
          [
            ...w(G(), m.translate(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)),
            ...H(
              w(G(6), m.rotate(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)),
              w(G(4, 0, 0.01), m.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3)),
              w(G(6), m.rotate(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map(e =>
                w(G(5), m.translate(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3))
              ),
            ),
          ]),
        B = (S(I, m.translate(-53, 0, 55)),
          Q(e => {
            e.h = () => m.translate(-75, (1 - k[5].i) * (1 - k[6].g) * 3, 55).rotate(180 * (1 - k[5].i) + ia, 0);
            S(I);
          }, 2),
          S(G(), m.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2)),
          S(G(3, 0, -0.5), m.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2)),
          S(H(
            rb(
              w(G(), m.translate(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2)),
              w(G(), m.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2)),
              w(G(), m.translate(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2)),
              w(G(), m.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2)),
              w(G(6), m.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3)),
              w(G(), m.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2)),
              w(G(), m.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2)),
            ),
            w(G(8), m.translate(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4)),
            w(G(8), m.translate(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5)),
            w(G(8), m.translate(-100, -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5)),
          )),
          vb(m.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
          vb(m.translate(-89, 0.2, 80), [0, 0, 6]),
          S(H(
            w(G(), m.translate(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)),
            w(G(), m.translate(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4)),
            w(G(20, 1), m.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4)),
          )),
          Q(e => {
            e.h = () => m.translate(-99.7, -1.9, 63.5).scale(1, Ta(1.1 - k[6].g), 1);
            S(E);
          }),
          xa.map(({ x: e, z: q }) => {
            S(G(6), m.translate(7 * e - 100, -3, 7 * q + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8));
            [4, -0.4].map(p =>
              S(G(6), m.translate(7 * e - 100, p, 7 * q + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8))
            );
          }),
          r(7, e => {
            S(
              G((23 * e + 1) % 5 + 5, 0, 0.55),
              m.translate(5 * Math.sin(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(
                5 + e / 2,
                1 + e / 6,
                5 + e / 3,
              ),
              U(0.5 - e / 17, 0.5 - (1 & e) / 9, 0.6, 0.3),
            );
          }),
          S(G(), m.translate(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)),
          S(G(4), m.translate(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)),
          S(G(12, 1), m.translate(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)),
          W(m.translate(-86, -7.5, 31)),
          Q(e => {
            e.h = () => m.translate(0, 3.5 * (1 - Qa(k[6].g, k[7].g)) + Va(k[7].i, k[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(q =>
              S(G(), m.translate(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2))
            );
          }),
          Q(e => {
            e.h = () =>
              m.translate(0, Va(k[7].i, k[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Va(k[7].i, k[6].i));
            [6, 18].map(q => S(G(), m.translate(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2)));
          }),
          S(
            H(
              rb(
                w(G(5), m.translate(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3)),
                w(G(5), m.scale(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),
                w(G(), m.scale(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),
              ),
              w(G(5), m.scale(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),
            ),
            m.translate(-38.9, -11.3, 17),
          ),
          W(m.translate(-38.9, -9.6, 10)),
          Q(e => {
            e.h = () => m.translate(0, -7.3 * k[7].i);
            S(
              H(
                rb(
                  w(G(5), m.translate(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5)),
                  w(G(5), m.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5)),
                  w(G(5), m.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5)),
                ),
                w(G(5), m.scale(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)),
                w(G(5), m.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5)),
              ),
              m.translate(-38.9, -11.3, 17),
            );
            vb(m.translate(-39.1, -0.6, 17).rotate(11), ...eb(15).map(({ x: q, z: p }) => [3 * q, 3 * p, 1.2]));
          }),
          xa.map(({ x: e, z: q }) => {
            S(G(14, 1), m.translate(9 * e - 38.9, -7.3, 11 * q + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1));
            [1.5, 8].map(p =>
              S(
                G(17, 1),
                m.translate(9 * e - 38.9, -7.3, 11 * q + 17).translate(0, p - 4).scale(1.5, 0.5, 1.5),
                U(0.6, 0.6, 0.6, 0.3),
              )
            );
          }),
          S(
            H(
              rb(
                w(G(6), m.translate(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3)),
                w(G(), m.translate(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3)),
              ),
              ...r(6, e =>
                r(6, q =>
                  w(
                    G(6),
                    m.translate(4.6 * q - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2),
                    U(0.7, 0.7, 0.7, 0.3),
                  ))).flat(),
            ),
            m.translate(-38.9, -11.3, 17),
          ),
          vb(m.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
          S(G(5), m.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4)),
          W(m.translate(-84, -0.5, 85).rotate(0, 45)),
          Q(e => {
            e.h = () => t(-123, 1.4, 55 + -65 * la);
            S(C);
            W(m.translate(0, -3, -4).rotate(0, 180));
          }),
          H(
            w(G(), m.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3)),
            w(G(3), m.translate(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)),
            ...[-1.2, 1.2].map(e => w(G(), m.translate(e, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3))),
          ));
      Q(e => {
        e.h = () => m.translate(0, -2, Va(k[10].g, k[11].g) * Ra(Math.sin(1.1 * a)) * -8.5 + 10);
        r(2, q => S(B, m.translate(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      Q(e => {
        e.h = () => m.translate(0, -2, Va(k[10].g, k[11].g) * Ra(Math.sin(2.1 * a)) * -8.5 + 10);
        r(2, q => S(B, m.translate(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      Q(e => {
        e.h = () =>
          m.translate(
            0,
            -2,
            -8.5 * Qa((1 - k[10].g) * (1 - Va(k[10].g, k[11].g)), Va(k[10].g, k[11].g) * Ra(Math.sin(1.5 * a))) + 10,
          );
        r(3, q => S(B, m.translate(9 * q - 106, 1.7, -12)));
      });
      S(
        H(
          rb(
            w(G(), m.translate(26.5, -1.6, 10).scale(20, 2.08, 3)),
            w(G(), m.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),
          ),
          ...r(4, e => w(G(), m.translate(13 + 9 * e + (1 & e), -0.8, 9).scale(1.35, 1.35, 9))),
          ...r(3, e => w(G(), m.translate(17 + 9 * e, -0.8, 9).scale(1.35, 1.35, 9))),
        ),
        m.translate(-123, 0, -12),
        U(0.5, 0.5, 0.6, 0.2),
      );
      W(m.translate(-116, -1.4, -18).rotate(0, 180));
      S(G(), m.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2));
      S(G(6), m.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      S(G(), m.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      S(G(8), m.translate(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      S(G(8), m.translate(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      S(G(), m.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      r(3, e => {
        S(y(16), m.translate(12 * e - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        S(y(16), m.translate(-77, -9, -12 * e - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3));
      });
      S(H(
        w(G(12), m.translate(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2)),
        w(G(), m.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2)),
        w(G(), m.translate(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2)),
        w(G(12), m.translate(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2)),
      ));
      S(G(), m.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3));
      S(G(9), m.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      S(H(
        w(G(), m.translate(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1)),
        w(G(9), m.translate(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2)),
      ));
      W(m.translate(-98, -4.4, -40).rotate(0, 90));
      vb(m.translate(-115, 0.2, -12), [0, 0, 3.5]);
      vb(m.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      S(H(
        rb(
          w(G(6, 0, 0, 0.6), m.translate(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2)),
          w(G(), m.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2)),
        ),
        w(G(5), m.translate(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2)),
      ));
      r(4, e =>
        Q(q => {
          q.h = () => {
            const p = Va(k[8].i, k[12].i);
            return m.translate(
              (2 < e ? 2 * (1 - p) + p : 0) - 100,
              p * Math.sin(1.3 * a + 1.7 * e) * (3 + e / 3) + 0.7,
              115 + (1 & e ? -1 : 1) * (1 - k[8].i) * (1 - k[12].i) * -7
                + (0.05 > p ? 0.05 : p) * Math.cos(1.3 * a + 7 * e) * (4 - 2 * (1 - e / 3)),
            );
          };
          S(
            G(6),
            m.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
            U(0.5 - e / 8, e / 12 + 0.5, 0.7, 0.3),
          );
        }));
      Q(e => {
        e.h = () => {
          const q = Va(k[8].i, k[12].i);
          return m.translate(2.5 * (1 - q) - 139.7, -3 * (1 - k[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
            .rotateSelf(Math.cos(1.3 * a) * (3 * q + 3), 0);
        };
        S(H(w(G(10), m.scale(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), w(G(10), m.scale(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5))));
        S(G(15, 1), m.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3));
        S(G(10), m.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        S(G(5), m.translate(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        W(m.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(q =>
          S(n, m.rotate(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2))
        );
        vb(m.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(e => {
        S(G(12, 1), m.translate(-7.5 * e - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5));
        [7.2, 1.5].map(q =>
          S(G(15, 1), m.translate(-7.5 * e - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4))
        );
        S(n, m.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), U(1, 1, 0.8));
        S(
          H(
            w(G(), m.translate(-4 * e, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4)),
            w(G(), m.scale(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)),
            w(G(28, 1), m.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5)),
            w(G(5), m.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5)),
            w(G(5), m.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5)),
          ),
          m.translate(e - 100, 0.7, 97),
        );
      });
      Q(e => {
        e.h = () => m.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - k[12].g);
        S(E);
      });
      S(H(
        w(G(), m.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1)),
        w(G(45, 1), m.translate(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1)),
      ));
      Q(e => {
        e.h = () => m.translate(-81, 0.6, 106).rotate(0, 40 + fa);
        S(H(
          w(G(45, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),
          w(G(), m.translate(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2)),
        ));
        S(G(8), m.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        S(G(5), m.translate(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        vb(m.translate(0, 3), ...eb(14).map(({ x: q, z: p }) => [5.6 * q, 5.6 * p, 2]));
      });
      Q(e => {
        e.h = () => m.translate(-65.8, 0.8, 106).rotate(0, ha);
        [-1, 1].map(q =>
          S(n, m.rotate(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), U(1, 1, 0.8))
        );
        S(H(
          w(G(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          w(G(), m.scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
        ));
        S(w(G(28, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(w(G(5), m.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Q(e => {
        e.h = () => m.translate(-50.7, 0.8, 106).rotate(0, 180 - ha);
        S(H(
          w(G(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          w(G(), m.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          w(G(), m.translate(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        S(w(G(28, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(w(G(5), m.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      Q(e => {
        e.h = () => m.translate(-50.7, 0.8, 91).rotate(0, 270 + ha);
        S(H(
          w(G(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3)),
          w(G(), m.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)),
          w(G(), m.translate(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),
        ));
        S(w(G(28, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(w(G(5), m.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)));
      });
      S(G(), m.translate(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      S(G(), m.translate(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      S(G(), m.translate(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      S(G(), m.translate(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      W(m.translate(-34, 2.7, 96).rotate(-12, 0));
      S(G(5), m.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6));
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((e, q) =>
        Q(p => {
          p.h = () =>
            m.translate(
              0,
              (1 - k[13].i) * (1 - k[14].i) * (q ? 0 : 3) + Va(k[13].i, k[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4,
            );
          S(G(), m.translate(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), e);
          2 === q && S(G(), m.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
          1 === q
            && S(G(), m.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3));
        })
      );
      [-1, 1].map(e => S(n, m.translate(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), U(1, 1, 0.8)));
      r(
        3,
        e =>
          S(
            y(24.7 - 0.7 * (1 & e)),
            m.translate(6 * e - 6, 4 - (1 & e), 111 - 0.2 * (1 & e)),
            1 & e ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),
          ),
      );
      S(H(
        w(G(6, 0, 0, 0.3), m.translate(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2)),
        w(G(5), m.translate(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),
      ));
      W(m.translate(0, 1.7, 82).rotate(0, 180));
      S(G(5), m.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4));
      S(G(6), m.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3));
      S(G(), m.translate(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      S(G(7), m.translate(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      S(H(
        rb(
          w(G(), m.translate(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4)),
          w(G(), m.translate(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4)),
        ),
        w(G(5), m.translate(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4)),
      ));
      Q(e => {
        e.h = () => {
          const q = Math.sin(a);
          return m.translate(-2 * q).rotate(25 * q);
        };
        S(G(3), m.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(q => {
          S(G(6), m.translate(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4));
          S(G(), m.translate(0, 6.2, q + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4));
        });
      });
      Q(e => {
        e.h = () => {
          const q = Va(Va((k[14].g + k[14].i) / 2, k[13].i), (k[15].g + k[15].i) / 2);
          return m.translate(0, 16 * q, 8.5 * Ta(2 * q - 1) + 95);
        };
        S(G(5), m.scale(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        S(G(5), m.scale(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        W(m.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(m.translate(0, 3, 95), ...eb(9).map(({ x: e, z: q }) => [9 * e, 9 * q, 4]));
      vb(m.translate(0, 19, 134), [0, 0, 3.5]);
    });
    Q(() => {
      [0, 180].map(t => S(n, m.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8)));
      S(ib(20), m.translate(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      const h = w(
        H(G(15, 1), w(G(), m.translate(0, 0, 1).scale(2, 2, 0.5))),
        m.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        U(0.3, 0.3, 0.3),
      );
      [-1, 1].map(t => S(h, m.translate(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      S(G(), m.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      S(ib(20), m.scale(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
    });
    [-1, 1].map(h =>
      Q(() => {
        S(G(10, 1), m.translate(0.3 * h, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
      })
    );
    Q(() => {
      S(G(6, 1), m.scale(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      S(G(10), m.translate(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      S(G(3), m.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1));
    }, 0);
    Q(() => {
      S(G(6).slice(0, -1), m.scale(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Q(() => {
      S(
        ib(30, 24, (h, t, y) => {
          const x = t / 24, C = h * Math.PI * 2 / 30, E = x ** 0.6 * Math.PI / 2;
          h = x * x * Math.sin(h * Math.PI * 14 / 30) / 4;
          return 23 === t
            ? { x: y.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(C) * Math.sin(E),
              y: Math.cos(x * Math.PI) - x - h,
              z: Math.sin(C) * Math.sin(E) + Math.sin(h * Math.PI * 2) / 4,
            };
        }),
        m.scale3d(0.7),
        U(1, 1, 1),
      );
      [-1, 1].map(h => S(ib(12), m.translate(0.16 * h, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls: <b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n",
);
