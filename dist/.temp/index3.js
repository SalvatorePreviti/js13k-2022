let aa = 0,
  ba = 0,
  a = 0,
  ca = 0,
  ea = 0,
  fa = 0,
  ha = 0,
  ia = 0,
  la = 0,
  ma = 0,
  na = 0,
  pa = 0,
  qa = 0,
  ra = 0,
  sa = 0,
  ta = 0,
  ua = 0,
  e = 0.066,
  va = 1,
  wa = 1,
  Ba = !1,
  f,
  Ca,
  Da,
  Ha,
  Ia,
  Ja,
  Ka,
  La,
  Ma,
  Na,
  Oa,
  m,
  p,
  Pa,
  Qa,
  Sa;
const Ua = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  r = [],
  w = [],
  Va = [],
  B = [],
  Wa = [[
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
  D = { x: 0, y: 0, z: 0 };
var Xa = 0, Ya = 0, Za = 0, $a = 0, ab = 0;
const bb = { x: 0, y: 0, z: 0 },
  cb = Math.PI / 180,
  J = new DOMMatrix(),
  gb = new Float32Array(16),
  hb = new Float32Array(624),
  ib = new Int32Array(256),
  jb = new Uint8Array(65536),
  K = (c, b) => Array.from(Array(c), (d, k) => b(k)),
  kb = (c, b) => b < c ? c : b,
  L = c => 0 > c ? -c : c,
  lb = c => 0 > c ? 0 : 1 < c ? 1 : c,
  M = (c, b) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > b ? 0 : 1 < b ? 1 : b)),
  mb = c => Math.atan2(Math.sin(c *= cb), Math.cos(c)) / cb,
  nb = (c, b, d) =>
    ((c *= cb) + (2 * (b = (b * cb - c) % (2 * Math.PI)) % (2 * Math.PI) - b) * (0 > d ? 0 : 1 < d ? 1 : d)) / cb,
  ob = (c, b, d, k) => {
    c += (0 > b - c ? -1 : 1) * kb(0, L(b - c) ** 0.9 - d) * k * 2;
    return c + (b - c) * lb(k / 7);
  },
  pb = ({ x: c, y: b, z: d }) => Math.hypot(c - D.x, b - D.y, d - D.z),
  qb = ({ x: c, y: b, z: d }, k) => c * k.x + b * k.y + d * k.z,
  rb = c => {
    let b = 0, d = 0, k = 0, l, n = c.at(-1);
    for (l of c) {
      b += (n.y - l.y) * (n.z + l.z), d += (n.z - l.z) * (n.x + l.x), k += (n.x - l.x) * (n.y + l.y), n = l;
    }
    return l = Math.hypot(b, d, k), b /= l, d /= l, k /= l, { x: b, y: d, z: k, w: b * n.x + d * n.y + k * n.z };
  },
  sb = (
    c,
    b = gb,
    d = 0,
  ) => (d *= 16,
    b[d++] = c.m11,
    b[d++] = c.m12,
    b[d++] = c.m13,
    b[d++] = c.m14,
    b[d++] = c.m21,
    b[d++] = c.m22,
    b[d++] = c.m23,
    b[d++] = c.m24,
    b[d++] = c.m31,
    b[d++] = c.m32,
    b[d++] = c.m33,
    b[d++] = c.m34,
    b[d++] = c.m41,
    b[d++] = c.m42,
    b[d++] = c.m43,
    b[d] = c.m44,
    b),
  wb = (c, b, d, k) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (k + d) / (d - k), -1, 0, 0, 2 * k * d / (d - k), 0],
  xb = (c, b, d) => (c.D = d, c.A = b, c),
  yb = (c, b, d = c.A) =>
    xb(
      c.map(k => {
        let l, n;
        return { x: k, y: l, z: n } = k,
          { x: k, y: l, z: n } = b.transformPoint({ x: k, y: l, z: n }),
          { x: k, y: l, z: n };
      }),
      d,
      c.D,
    ),
  N = (c, b, d) => c.map(k => yb(k, b, d)),
  zb = (c, b = 0) =>
    K(c, d => {
      const k = Math.cos(2 * Math.PI * d / c);
      return { x: Math.sin(2 * Math.PI * d / c), y: 0, z: 0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - b : k + b };
    }),
  Ab = (c, b, d) =>
    c.map((k, l, { length: n }) => xb([k, b[n - l - 1], b[n - (l + 1) % n - 1], c[(l + 1) % n]], c.A, d)),
  P = (
    c,
    b,
    d = 0,
    k,
  ) => (c = c ? zb(c, k) : Ua,
    k = yb(c, J.translate(0, 1).scale3d(0 < d ? d : 1)),
    c = yb(c, J.translate(0, -1).scale3d(0 > d ? -d : 1)).reverse(),
    [...Ab(c, k, b), k, c]),
  Bb = (
    c,
    b = c,
    d = (
      k,
      l,
    ) => (l *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / c) * Math.sin(l), y: Math.cos(l), z: Math.sin(k) * Math.sin(l) }),
  ) => {
    const k = [];
    for (let l = 0; c > l; l++) {
      for (let n = 0; b > n; n++) {
        const u = xb([], 0, 1);
        k.push(u);
        u.push(d(l, n, u));
        n && u.push(d((l + 1) % c, n, u));
        b - 1 > n && u.push(d((l + 1) % c, n + 1 % b, u));
        u.push(d(l, n + 1 % b, u));
      }
    }
    return k;
  },
  Cb = (c, b) => {
    var d, k, l, n = b.C;
    for (var u = 0; n.length > u; ++u) {
      if (-0.00008 > (d = qb(c, n[u]) - c.w) ? l = b : 8e-5 < d && (k = b), l && k) {
        k = [];
        l = [];
        n = b.C;
        u = b.B;
        let x = n.at(-1), t = qb(c, x) - c.w;
        for (const v of n) {
          d = qb(c, v) - c.w,
            8e-5 > t && l.push(x),
            -0.00008 < t && k.push(x),
            (8e-5 < t && -0.00008 > d || -0.00008 > t && 8e-5 < d)
            && (t /= d - t,
              x = { x: x.x + (x.x - v.x) * t, y: x.y + (x.y - v.y) * t, z: x.z + (x.z - v.z) * t },
              k.push(x),
              l.push(x)),
            x = v,
            t = d;
        }
        return {
          o: 2 < k.length && { C: xb(k, n.A, n.D), B: u, u: b },
          m: 2 < l.length && { C: xb(l, n.A, n.D), B: u, u: b },
        };
      }
    }
    return { o: k, m: l };
  },
  Gb = (c, b, d = rb(b.C)) => {
    let k, l, n;
    return c
      ? ({ o: k, m: l } = Cb(c, b), k || l || c.s.push(b), k && (c.o = Gb(c.o, k, d)), l && (c.m = Gb(c.m, l, d)))
      : ({ x: k, y: l, z: d, w: n } = d, c = { x: k, y: l, z: d, w: n, s: [b], o: 0, m: 0 }),
      c;
  },
  Hb = (c, b, d) => {
    const k = [],
      l = (n, u) => {
        let { o: x, m: t } = Cb(n, u);
        x || t || (0 < d * qb(n, b) ? x = u : t = u);
        x && (n.o ? l(n.o, x) : k.push(x));
        t && n.m && l(n.m, t);
      };
    for (const n of b.s) {
      l(c, n);
    }
    return k;
  },
  Ib = (c, b) => c && (b(c), Ib(c.o, b), Ib(c.m, b)),
  Jb = c => c.length ? c.reduce((b, d) => Gb(b, { C: d, B: 0, u: 0 }), 0) : c,
  Kb = c => (Ib(c, b => {
    const d = b.m;
    b.m = b.o;
    b.o = d;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.s) {
      k.B = !k.B;
    }
  }),
    c),
  Lb = (...c) =>
    c.reduce((b, d) => {
      const k = [];
      if (b = Jb(b), d) {
        d = Jb(d);
        Ib(b, l => l.s = Hb(d, l, 1));
        Ib(d, l => k.push([l, Hb(b, l, -1)]));
        for (let [l, n] of k) {
          for (const u of n) {
            Gb(b, u, l);
          }
        }
      }
      return b;
    }),
  Q = (c, ...b) => Kb(Lb(Kb(Jb(c)), ...b)),
  S = c => {
    const b = new Map(),
      d = new Map(),
      k = l => {
        let n;
        return l.u && ((n = b.get(l.u)) ? (d.delete(n), l = k(l.u)) : b.set(l.u, l)), l;
      };
    return Ib(c, l => {
      for (const n of l.s) {
        d.set(k(n), n.B);
      }
    }),
      Array.from(d, ([{ C: l }, n]) => {
        const u = l.map(({ x, y: t, z: v }) => ({ x, y: t, z: v }));
        return xb(n ? u.reverse() : u, l.A, l.D);
      });
  },
  U = (c, b, d) => c + (b - c) * lb(1 - Math.exp(-d * e)),
  Mb = () => {
    const c = M(w[12].h, w[13].h);
    var b = U(ha, 0, 1);
    ha = b + (mb(ha + 60 * e) - b) * lb(w[5].h - w[6].i);
    b = U(ea, 0, 5);
    ea = b + (mb(ea + 56 * e) - b) * (0 > c ? 0 : 1 < c ? 1 : c);
    b = U(fa, 0, 4);
    fa = b + (mb(fa + 48 * e) - b) * (0 > c ? 0 : 1 < c ? 1 : c);
    ma = U(ma, w[9].i, 0.2 + 0.3 * L(2 * w[9].i - 1));
    la = U(la, ia ? la + (-9 - la) * lb(1.5 * e) : lb(a / 3), 1);
    va && a > va && (va = 0, h4.innerHTML = "");
    w[0].j && 0.8 < w[0].h && (13 > aa
      ? (1 / 0 > va && (va = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), w[0].j = 0)
      : ia
        || (1 / 0 > va && (va = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ia = 1));
    for (const d of r) {
      d.g && (d.l = d.g(d));
    }
    for (const d of w) {
      d.g();
    }
    for (const d of Va) {
      d.g();
    }
  },
  Nb = () => {
    h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[aa = Va.reduce((c, { j: b }) => c + b, 0)];
  },
  Ob = () => {
    localStorage.DanteSP22 = JSON.stringify([w.map(({ j: c }) => c), Va.map(({ j: c }) => c), ca, a, ma]);
  },
  V = (c, b = 1) => {
    const d = Da;
    b = { l: J, F: r.length, H: b, s: [] };
    return r.push(Da = b), c(b), Da = d, b;
  },
  W = (c, b = J, d) => Da.s.push(...N(c, b, d)),
  Y = c => {
    const b = Da,
      d = w.length,
      k = {
        j: 0,
        h: 0,
        i: 0,
        u: b,
        g() {
          const l = k.j, n = k.h, u = k.i, x = b.l.multiply(c);
          k.I = x;
          2.9 > pb(x.transformPoint()) && B[5] && (0.3 > n || 0.7 < n)
            && (k.j = l ? 0 : 1, d && 1 / 0 > va && (va = a + 1, h4.innerHTML = "* click *"), ca = d, Ob());
          k.h = U(n, l, 4);
          k.i = U(u, l, 1);
          k.l = x.rotate(60 * k.h - 30, 0).translateSelf(0, 1);
        },
      };
    w.push(k);
    W(P(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    W(P(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
    W(P(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), X(0.5, 0.5, 0.4));
  },
  Pb = (c, ...b) => {
    let d = -1, k = 0, l = 0, n = 0, u = 0, x = 0, t = 1, v = 3;
    const y = {
        j: 0,
        g() {
          if (!y.j) {
            let xa, ya, db, Ra, da, I, Ea = 1, eb = 1 / 0, ja;
            for (const fb of E) {
              var { x: H, z: G, w: R } = fb;
              G = (H = Math.hypot(h - H, q - G)) - R;
              ja ||= H < R;
              0 < G && eb > G && (eb = G, g = fb);
              var ka = H / R;
              Ea = Ea < ka ? Ea : ka;
            }
            ja
              || ({ x: xa, z: ya, w: db } = g,
                Ra = h - xa,
                da = q - ya,
                I = Math.hypot(Ra, da),
                T = Math.atan2(-da, Ra),
                t && (l = (Math.random() - 0.5) * Math.PI / 2, v = kb(1, v / (1 + Math.random()))),
                T += l,
                d = -Math.cos(T),
                k = Math.sin(T),
                0.1 < I && (I = (I < db ? I : db) / (I || 1), h = Ra * I + xa, q = da * I + ya));
            t = ja;
            v = U(v, 3 + 6 * (1 - Ea), 3 + Ea);
            A = U(A, h = U(h, h + d, v), v);
            F = U(F, q = U(q, q + k, v), v);
            n = nb(n, Math.atan2(A - u, F - x) / cb - 180, 3 * e);
            u = A;
            x = F;
            var T = (y.l = z.l.multiply(c.translate(A, 0, F).rotateSelf(0, n, 7 * Math.sin(1.7 * a)))).transformPoint();
            1.5 > pb(T)
              && (y.j = 1,
                ka = [
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
                  > va && (va = a + (aa && 12 > aa ? 5 : 7), h4.innerHTML = ka),
                Nb(),
                Ob());
          }
          y.j
            && (y.l = r[2].l.translate(
              C % 4 * 1.2 - 1.7 + Math.sin(a + C) / 7,
              -2,
              1.7 * (C / 4 | 0) - 5.5 + L(C % 4 - 2) + Math.cos(a / 1.5 + C) / 6,
            ));
        },
      },
      z = Da,
      C = Va.length,
      E = b.map(([H, G, R]) => ({ x: H, z: G, w: R }));
    let g = E[0], { x: h, z: q } = g, A = h, F = q;
    Va.push(y);
  },
  Qb = (c, b, d, k) => {
    let l = 0, n = 0, u = 0, x = 1 / 0, t = -1 / 0, v = 1 / 0, y = -1 / 0, z = 1 / 0, C = -1 / 0;
    const E = 1.1 * (d - b),
      g = (new DOMMatrix(wb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, d))).multiplySelf(c).invertSelf();
    return b = K(
      8,
      h => (h = g.transformPoint({ x: 4 & h ? 1 : -1, y: 2 & h ? 1 : -1, z: 1 & h ? 1 : -1 }),
        l -= h.x = (E * h.x | 0) / E / h.w,
        n -= h.y = (E * h.y | 0) / E / h.w,
        u -= h.z = (E * h.z | 0) / E / h.w,
        h),
    ),
      d = J.rotate(298, 139).translateSelf(l / 8, n / 8, u / 8),
      yb(b, d).map(({ x: h, y: q, z: A }) => {
        x = x < h ? x : h;
        t = h < t ? t : h;
        v = v < q ? v : q;
        y = q < y ? y : q;
        z = z < A ? z : A;
        C = A < C ? C : A;
      }),
      z *= 0 > z ? k : 1 / k,
      C *= 0 < C ? k : 1 / k,
      J.scale(2 / (t - x), 2 / (y - v), 2 / (z - C)).translateSelf((t + x) / -2, (y + v) / -2, (z + C) / 2)
        .multiplySelf(d);
  },
  Tb = () => {
    let c = !0, b, d, k, l, n, u, x, t, v, y, z, C;
    const E = () => {
        f || !c ? Rb.disconnect() : Rb.connect(Sb.destination);
        b4.innerHTML = "Music: " + c;
      },
      g = (h = !1) => {
        if (f !== h) {
          f = h;
          try {
            h ? document.exitPointerLock() : Rb.start();
          } catch {
          }
          Ha = 0;
          document.body.className = h ? "l m" : "l";
          E();
          Nb();
        }
      };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b1.onclick = () => g();
    b2.onclick = () => {
      g();
      Ha = 1;
    };
    b4.onclick = () => {
      c = !c;
      E();
    };
    b5.onclick = () => g(!0);
    onclick = h => {
      C = 1;
      f || (h.target === hC && (B[5] = !0), Ha && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: h, target: q, type: A, repeat: F }) => {
      F || ((F = !!A[5] && q === document.body) && ("Escape" === h || "Enter" === h && f)
        ? f && !C || g(!f)
        : 5
            === (A = {
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
            }[h])
        ? F && (B[A] = 1)
        : B[A] = F);
    };
    onmousemove = ({ movementX: h, movementY: q }) => {
      Ha && (h || q) && (ab += 0.1 * h, $a += 0.1 * q);
    };
    oncontextmenu = () => !1;
    hC.ontouchstart = h => {
      if (!f) {
        for (let { pageX: q, pageY: A, identifier: F } of h.changedTouches) {
          Ha && q > hC.clientWidth / 2
            ? void 0 === t && (t = F, u = q, x = A, v = 0, y = ab, z = $a)
            : void 0 === l && (l = F, d = q, k = A, n = 0);
        }
        b = ba;
      }
    };
    hC.ontouchmove = ({ changedTouches: h }) => {
      if (!f) {
        for (let { pageX: F, pageY: H, identifier: G } of h) {
          var q, A;
          t === G && (ab = y + (F - u) / 3, $a = z + (H - x) / 3, v = 1);
          l === G
            && (0.4 < (A = (q = 0 > (G = (d - F) / 20) ? -1 : 1) * G)
              && (n = 1, na = q * A ** 1.5, 1.5 < A && (d = F + 20 * q)),
              0.4 < (A = (q = 0 > (G = (k - H) / 20) ? -1 : 1) * G)
              && (n = 1, pa = q * A ** 1.5, 1.5 < A && (k = H + 20 * q)));
        }
      }
    };
    hC.ontouchend = h => {
      let q;
      h.preventDefault();
      for (const A of h.changedTouches) {
        A.identifier === t
          ? (t = void 0, v || (q = 1), v = 0)
          : A.identifier === l
          ? (l = void 0, pa = na = 0, n || (q = 1), n = 0)
          : q = 1;
      }
      q && h.target === hC && b && 0.06 < (h = ba - b) && 0.7 > h && (B[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      B.length = na = pa = 0;
      l = t = void 0;
      document.hidden && g(!0);
    })();
    g(!0);
  },
  Ub = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b),
  Vb = (c, b) => {
    const d = {}, k = Z.c1h();
    return Z.abz(k, c), Z.abz(k, Ub(b, 35632)), Z.l8l(k), l => l ? d[l] || (d[l] = Z.gan(k, l)) : Z.u7y(k);
  },
  Wb = (c, b, d = 42) => {
    if (f) {
      d = J.rotate(0, 40 * Math.sin(ba) - 70);
      for (var k of [37, 38, 39]) {
        sb(d, hb, k - 1);
      }
      Z.uae(c, !1, hb);
      Z.d97(4, r[39].G - r[37].v, 5123, 2 * r[37].v);
    } else {
      for (k = 0; r.length > k; ++k) {
        const { H: l, F: n, l: u } = r[k];
        l && sb(u, hb, n - 1);
      }
      Z.uae(c, !1, hb);
      Z.d97(4, (b ? r[39].G : r[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        sb(Va[b].l, hb, b);
      }
      for (b = 0; w.length > b; ++b) {
        const { l, h: n } = w[b];
        sb(l, hb, b + 13);
        hb[16 * (b + 13) + 15] = 1 - n;
      }
      Z.uae(c, !1, hb);
      Z.das(4, r[d].G - r[d].v, 5123, 2 * r[d].v, 13);
      Z.das(4, r[40].G - r[40].v, 5123, 2 * r[40].v, w.length);
    }
  },
  ac = () => {
    var { u: c, I: b } = w[ca], { x: b, y: d, z: k } = b.transformPoint({ x: 0, y: 8, z: -3 });
    D.x = bb.x = b;
    D.y = bb.y = Oa = d;
    D.z = bb.z = k;
    qa = ra = c.F || 1;
    Ja =
      Na =
      Ma =
      Ka =
      La =
        0;
    wa = 1;
  },
  bc = () => {
    for (let c = 32; 128 > c; c += 2) {
      let b = 0, d = 0, k = 0, l = 0;
      const n = 512 * c;
      for (let u = 1 & c; 128 > u; u += 2) {
        const x = n + 4 * u;
        let t = n + 4 * (127 - u);
        const v = jb[x] / 255, y = jb[1 + t] / 255, z = 1 - L(u / 63.5 - 1);
        10 < u && 118 > u && (b = kb(b, kb(v * z, v * jb[t] / 255)), d = kb(d, kb(y * z, y * jb[1 + x] / 255)));
        (54 > u || 74 < u) && 1e-3 < (t = (1 - z) * (y < v ? v : y) / 3)
          && (64 > u && t > k ? k = t : 64 < u && t > l && (l = t));
      }
      L(l - k) > (0 > m ? -m : m) && (m = l - k);
      L(d - b) > (0 > p ? -p : p) && (p = d - b);
    }
  },
  cc = () => {
    let c = 0, b = 0, d = 0, k = 0;
    ib.fill(0);
    for (let n = 0; 31 > n; ++n) {
      let u = 0;
      const x = 512 * n;
      for (let t = 0; 128 > t; t++) {
        var l = x + 4 * t;
        let v = (jb[l] + jb[1 + l]) / 255;
        l = jb[2 + l];
        14 < t && 114 > t && (u += v);
        l && v && (v = ib[l] + 1, ib[l] = v, c > v || (c = v, b = l));
      }
      3 > u && 5 < n && (k += n / 32);
      3 < u && (7 < n && (d += n / 15), Ja = 1);
    }
    b && (Ja = 1);
    wa ? b && (wa = 0, ra = b) : ra = b || qa;
    qa = b;
    Ka = U(Ka, Ja ? 6.5 : 8, 4);
    bb.y += d / 41 - (Ja ? 1 : Ka) * k / 41 * Ka * e;
  },
  dc = () => {
    Ja = p = m = 0;
    NO_INLINE(bc)();
    NO_INLINE(cc)();
    let c = na + (B[0] ? 1 : 0) + (B[2] ? -1 : 0), b = pa + (B[1] ? 1 : 0) + (B[3] ? -1 : 0);
    if (k = navigator.getGamepads()[0]) {
      const v = k.buttons;
      var d = k.axes;
      (k = (l = y => v[y]?.pressed || 0 < v[y]?.value)(1) || l(3) || l(2) || l(0)) !== Ba && (Ba = k) && (B[5] = 1);
      c += (0.2 < L(-d[0]) ? -d[0] : 0) + (l(14) ? 1 : 0) + (l(15) ? -1 : 0);
      b += (0.2 < L(-d[1]) ? -d[1] : 0) + (l(12) ? 1 : 0) + (l(13) ? -1 : 0);
      Ha && (0.3 < L(d[2]) && (ab += 80 * d[2] * e), 0.3 < L(d[3]) && ($a += 80 * d[3] * e));
    }
    0.05 > (0 > b ? -b : b) && (b = 0);
    0.05 > (0 > c ? -c : c) && (c = 0);
    var k = Math.atan2(b, c), l = lb(Math.hypot(b, c));
    d = (c = l * Math.cos(k), b = l * Math.sin(k), lb(1 - 5 * kb(0 > m ? -m : m, 0 > p ? -p : p)));
    d =
      (ra || (m += Ma * d * e, p += Na * d * e),
        Ma = U(Ma, 0, Ja ? 8 : 4),
        Na = U(Na, 0, Ja ? 8 : 4),
        La = U(La, Ja ? (c || b ? Ja ? 7 : 4 : 0) * d : 0, Ja ? 0.1 < d ? 10 : c || b ? 5 : 7 : 1),
        Ha ? ab * cb : Math.PI);
    var n = Math.sin(d) * La * e;
    d = Math.cos(d) * La * e;
    d =
      (m -= c * d - b * n,
        p -= c * n + b * d,
        (d = (n = 1 === r[ra].H && r[ra].l || J).inverse()).m41 = 0,
        d.m42 = 0,
        d.m43 = 0,
        { x: m, z: p } = d.transformPoint({ x: m, z: p, w: 0 }),
        bb.x += m,
        bb.z += p,
        ra !== Ia && (Ia = ra, { x: d, y: u, z: x } = n.inverse().transformPoint(D), bb.x = d, bb.y = u, bb.z = x),
        D.x);
    var u = D.z, { x, y: n, z: t } = n.transformPoint(bb);
    D.x = x;
    D.y = n;
    D.z = t;
    ra && (Ma = (x - d) / e, Na = (t - u) / e);
    (c || b) && (sa = 90 - k / cb);
    ta = nb(ta, sa, 8 * e);
    ua += (l - ua) * lb(10 * e);
    Oa = 0.03 < L(Oa - n) ? n : U(Oa, n, 2);
    Pa = ob(Pa, x, 0.5, e);
    Qa = ob(Qa, n, 2, e);
    Sa = ob(Sa, t, 0.5, e);
    Ha
      ? (Xa = U(Xa, x, 666 * wa + 18), Ya = U(Ya, Oa + 1.5, 666 * wa + 18), Za = U(Za, t, 666 * wa + 18))
      : (Xa = ob(Xa, Pa, 1, 2 * e),
        Ya = ob(Ya, Qa + 13 + 15 * wa, 4, 2 * e),
        Za = ob(Za, Sa + -18, 1, 2 * e),
        d = Za - Sa,
        1 < (0 > d ? -d : d)
        && (u = Xa - Pa, ab = 270 + Math.atan2(d, u) / cb, $a = 90 - Math.atan2(Math.hypot(d, u), Ya - Qa) / cb));
    $a = kb(87 > $a ? $a : 87, -87);
    ab = mb(ab);
  },
  ec = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  fc = c => Math.sin(c * Math.PI * 2),
  gc = c => 0.5 > c % 1 ? 1 : -1,
  hc = c => c % 1 * 2 - 1,
  ic = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c,
  pc = c => {
    let b = 0;
    const d = () => {
        const n = Sb.createBuffer(2, 5362944, 44100);
        for (let u = 0; 2 > u; u++) {
          for (let x = u, t = n.getChannelData(u); 10725888 > x; x += 2) {
            t[x >> 1] = l[x] / 65536;
          }
        }
        Rb.buffer = n;
        Rb.loop = !0;
        ec(c);
      },
      k = () => {
        let n, u = 0, [x, t, v, y, z, C, E, g, h, q, A, F, H, G, R, ka, T, xa, ya, db, Ra] = Wa[b];
        q = q * q * 4;
        for (const ja of [5513, 4562, 3891]) {
          const fb = [];
          let Db = 0, tb = 0, za, Ta, Xb;
          const Aa = new Int32Array(768 * ja),
            jc = 2 ** (F - 9) / ja,
            kc = Math.PI * 2 ** (T - 8) / ja,
            Eb = ya * ja & -2;
          for (let ub = 0; 11 >= ub; ++ub) {
            for (
              let vb = 0, Yb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ub];
              32 > vb;
              ++vb
            ) {
              const Zb = (32 * ub + vb) * ja;
              for (var da = 0; 4 > da; ++da) {
                if (za = 0, Yb && (za = Ra[Yb - 1].charCodeAt(vb + 32 * da) - 40, za += 0 < za ? 106 : 0), za) {
                  var I;
                  if (!(I = fb[za])) {
                    I = za;
                    let O = void 0, oa = void 0;
                    var Ea = ja, eb = za;
                    let lc = 0, mc = 0;
                    const nc = 2 > b ? hc : fc, oc = 2 > b ? 1 > b ? gc : ic : fc, $b = new Int32Array(g + h + q);
                    for (let Fa = 0, Fb = 0; g + h + q > Fa; ++Fa, ++Fb) {
                      let Ga = 1;
                      g > Fa ? Ga = Fa / g : g + h > Fa || (Ga = (1 - (Ga = (Fa - g - h) / q)) * 3 ** (-A / 16 * Ga));
                      0 > Fb
                        || (Fb -= 4 * Ea,
                          oa = 396e-5 * 2 ** ((eb + t - 256) / 12),
                          O = 396e-5 * 2 ** ((eb + z - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                      $b[Fa] = 80
                          * (nc(lc += oa * Ga ** (v / 32)) * x + oc(mc += O * Ga ** (C / 32)) * y
                            + (E ? (2 * Math.random() - 1) * E : 0))
                          * Ga | 0;
                    }
                    I = fb[I] = $b;
                  }
                  for (let O = 0, oa = 2 * Zb; I.length > O; ++O, oa += 2) {
                    Aa[oa] += I[O];
                  }
                }
              }
              for (let O, oa = 0; ja > oa; ++oa) {
                da = 0,
                  I = 2 * (Zb + oa),
                  ((O = Aa[I]) || Xb)
                  && (Ta = 308e-5 * H,
                    1 !== b && 4 !== b || (Ta *= Math.sin(jc * I * Math.PI * 2) * db / 512 + 0.5),
                    Ta = 1.5 * Math.sin(Ta),
                    Db += Ta * tb,
                    n = (1 - G / 255) * (O - tb) - Db,
                    tb += Ta * n,
                    O = 4 === b ? tb : 3 === b ? n : Db,
                    b || (O = 1 > (O *= 22e-5) ? -1 < O ? Math.sin(O / 4 * Math.PI * 2) : -1 : 1, O /= 22e-5),
                    O *= R / 32,
                    Xb = 1e-5 < O * O,
                    n = Math.sin(kc * I) * ka / 512 + 0.5,
                    da = O * (1 - n),
                    O *= n),
                  I < Eb || (da += Aa[
                    1 + I
                    - Eb
                  ] * xa / 255,
                    O += Aa[I - Eb] * xa / 255),
                  l[u + I] += Aa[I] = da,
                  ++I,
                  l[u + I] += Aa[I] = O;
              }
            }
          }
          u += Aa.length;
        }
        ec(5 > ++b ? k : d);
      },
      l = new Int32Array(10725888);
    ec(k);
  },
  qc = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  X = NO_INLINE((c, b, d, k = 0) => 255 * k << 24 | 255 * d << 16 | 255 * b << 8 | 255 * c),
  Sb = new AudioContext(),
  Rb = Sb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Z) {
  Z[c[0] + [...c].reduce((b, d, k) => (b * k + d.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
ec(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const k = h => {
            requestAnimationFrame(k);
            q = (h - (Ca || h)) / 1e3;
            f ? (e = 0, B[5] = 0) : e = 0.066 < q ? 0.066 : q;
            a += e;
            ba += q;
            Ca = h;
            0 < e
              && (Z.b6o(36160, u),
                Z.fa7(),
                Z.r9r(0, 0, 128, 128, 6408, 5121, jb),
                Z.iay(36009, [36064, 36096]),
                Z.iay(36008, [36064, 36096]),
                NO_INLINE(dc)(),
                Mb(),
                (-25 > D.x || 109 > D.z ? -25 : -9) > D.y && ac(),
                1 === ra && (w[9].j = -15 > D.x && 0 > D.z ? 1 : 0),
                B[5] = 0);
            var q = f
              ? J.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + lb(hC.clientWidth / 1e3))
              : J.rotate(-$a, -ab, -0).invertSelf().translateSelf(-Xa, -Ya, -Za);
            0 < e
              && (C(),
                Z.b6o(36160, u),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(C("b"), !1, sb(J.rotate(0, 180).invertSelf().translateSelf(-D.x, -D.y, 0.3 - D.z))),
                Wb(C("c"), 0, 41),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(C("b"), !1, sb(J.translate(-D.x, -D.y, -D.z - 0.3))),
                Wb(C("c"), 0, 41),
                Z.f1s());
            y();
            Z.b6o(36160, n);
            Z.v5y(0, 0, 2048, 2048);
            g[0](Qb(q, 0.3, 55, 10));
            g[1](Qb(q, 55, 177, 11));
            E();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            g[0]();
            g[1]();
            Z.uae(E("a"), !1, wb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
            Z.uae(E("b"), !1, sb(q));
            Z.ubu(E("k"), Xa, Ya, Za);
            Wb(E("c"), !Ha);
            z();
            Z.ubu(z("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ba);
            f ? Z.ubu(z("k"), 0, 0, 0) : Z.ubu(z("k"), Xa, Ya, Za);
            Z.uae(z("b"), !1, sb(q.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, u);
            Z.f1s();
          },
          l = d,
          n = Z.c5w(),
          u = Z.c5w(),
          x = Z.c3z(),
          t = Z.c25(),
          v = Ub(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          y = Vb(
            Ub(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          z = Vb(
            Ub("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          C = Vb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          E = Vb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          g = (C(),
            Z.uae(C("a"), !1, wb(1.4, 0.59, 1e-4, 1)),
            z(),
            Z.ubh(z("q"), 3),
            E(),
            Z.ubh(E("q"), 3),
            K(2, h => {
              const q = new Float32Array(16), A = Z.c25(), F = E(h ? "j" : "i");
              return Z.ubh(E(h ? "h" : "g"), h),
                Z.b6o(36160, n),
                Z.d45([0]),
                Z.r9l(0),
                Z.a4v(33984 + h),
                Z.b9j(3553, A),
                Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                Z.t2z(3553, 10241, 9729),
                Z.t2z(3553, 10240, 9729),
                Z.t2z(3553, 34893, 515),
                Z.t2z(3553, 34892, 34894),
                Z.t2z(3553, 10243, 33071),
                Z.t2z(3553, 10242, 33071),
                H => {
                  H
                    ? (sb(H, q), Z.uae(y("b"), !1, q), Z.fas(36160, 36096, 3553, A, 0), Z.c4s(256), Wb(y("c"), !Ha))
                    : Z.uae(F, !1, q);
                };
            }));
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        Z.b6o(36160, u);
        Z.bb1(36161, x);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, x);
        Z.a4v(33987);
        Z.b9j(3553, t);
        Z.fas(36160, 36064, 3553, t, 0);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.a4v(33987);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        r[37].g = () => J.translate(D.x, Oa, D.z).rotateSelf(0, ta);
        [38, 39].map((h, q) => {
          r[h].g = () =>
            r[37].l.translate(0, ua * lb(0.45 * Math.sin(9.1 * a + Math.PI * (q - 1) - Math.PI / 2))).rotateSelf(
              ua * Math.sin(9.1 * a + Math.PI * (q - 1)) * 0.25 / cb,
              0,
            );
        });
        try {
          const [h, q, A, F, H] = JSON.parse(localStorage.DanteSP22);
          w.map((G, R) => G.h = G.i = G.j = R ? 0 | h[R] : 0);
          Va.map((G, R) => G.j = 0 | q[R]);
          ca = A;
          a = F;
          ma = H;
        } catch {
        }
        la = 0 > ca ? 0 : 1 < ca ? 1 : ca;
        Mb();
        ac();
        Xa = Pa = D.x;
        Ya = (Qa = D.y) + 13;
        Za = (Sa = D.z) + -18;
        requestAnimationFrame(k);
        NO_INLINE(Tb)();
      }
    },
    d = new Image();
  d.onload = d.onerror = b;
  d.src = qc;
  NO_INLINE(pc)(() => {
    ec(() => {
      const t = [],
        v = H => {
          let { x: G, y: R, z: ka } = z[H], T = (F[0] = G, F[1] = R, F[2] = ka, H = "" + (z.D ? A : q), h.get(H));
          return void 0 !== T
            ? (G = 3 * T, g[G] = (g[G++] + q[5]) / 2, g[G] = (g[G++] + q[6]) / 2, g[G] = (g[G] + q[7]) / 2)
            : (h.set(H, T = h.size), C.push(G, R, ka, F[3]), E.push(q[4]), g.push(q[5], q[6], q[7])),
            T;
        };
      let y = 0, z;
      const C = [],
        E = [],
        g = [],
        h = new Map(),
        q = new Int32Array(8),
        A = new Int32Array(q.buffer, 0, 5),
        F = new Float32Array(q.buffer);
      for (const H of r) {
        for (z of (F[3] = 40 === H.F ? -13 : H.H && H.F, H.s)) {
          const { x: G, y: R, z: ka } = rb(z);
          q[4] = 0 | z.A;
          q[5] = 32767 * G;
          q[6] = 32767 * R;
          q[7] = 32767 * ka;
          for (let T = 2, xa = v(0), ya = v(1); z.length > T; ++T) {
            t.push(xa, ya, ya = v(T));
          }
        }
        H.s = null;
        H.v = y;
        H.G = y = t.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(C), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(g), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(E), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(t), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      ec(b);
    });
    let k;
    const l = (t, v, y) =>
        J.translate(t + Math.sin(a + 2) / 5, v + Math.sin(0.8 * a) / 3, y).rotateSelf(
          2 * Math.sin(a),
          Math.sin(0.7 * a),
          Math.sin(0.9 * a),
        ),
      n = (() => {
        const t = K(
            11,
            y => J.translate(Math.sin(y / 10 * Math.PI), y / 10).rotate(+y).scale(1.0001 - y / 10, 0, 1 - y / 10),
          ),
          v = zb(18);
        return K(10, y => Ab(yb(v, t[y]).reverse(), yb(v, t[y + 1]), 1)).flat();
      })(),
      u = S(
        Q(
          N(P(20, 1, 1.15, 1), J.translate(0, -3).scale(3.5, 1, 3.5), X(0.7, 0.4, 0.25, 0.7)),
          N(P(20, 1, 1.3, 1), J.translate(0, -2.5).scale(2.6, 1, 3), X(0.7, 0.4, 0.25, 0.2)),
          N(P(), J.translate(4, -1.2).scale3d(2), X(0.7, 0.4, 0.25, 0.3)),
        ),
      ),
      x = S(
        Q(
          N(P(), J.translate(0, -8).scale(6, 15, 2.2)),
          N(P(), J.translate(0, -14.1).scale(4, 13, 4)),
          N(P(20, 1), J.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      );
    V(() => {
      W([Ua.slice(1)], J.translate(-2).scale3d(3).rotate(90, 0));
    }, 0);
    V(() => {
      const t = (g, h, q) =>
          V(A => {
            A.g = () => J.translate(v() * Math.sin(3 * g + a * g) * h);
            Ua.map(({ x: F, z: H }) => {
              W(P(11, 1), J.translate(4 * F, 4, q + 4 * H).scale(0.8, 3, 0.8), X(0.5, 0.3, 0.7, 0.6));
              W(P(), J.translate(4 * F, 7, q + 4 * H).scale(1, 0.3), X(0.5, 0.5, 0.5, 0.3));
            });
            W(S(Q(
              N(P(), J.translate(0, 0, q).scale(5, 1, 5), X(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(F =>
                N(P(), J.translate(5 * F, 0.2, q).rotate(0, 0, -30 * F).scale(4, 1, 2), X(0.8, 0.8, 0.8, 0.3))
              ),
            )));
            W(P(), J.translate(0, -3, q).scale(8, 2, 8), X(0.4, 0.4, 0.4, 0.3));
          }),
        v = () => {
          var g = w[2].i, h = 1 - w[4].i;
          return g < h ? g : h;
        },
        y = (V(g => {
          g.g = () => l(-12, 4.2, 40 * la - 66);
          W(u);
          Y(J.translate(0, -3, 4));
        }),
          K(7, g => N(P(6, 1), J.translate(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), X(0.3, 0.3, 0.38))).flat()),
        z = (Pb(J.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          Pb(
            J.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...zb(18).map(({ x: g, z: h }) => [7 * g, 10 * h, 4.5 - 2 * (0 > g ? -g : g)]),
          ),
          W(P(), J.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
          Ua.map(({ x: g, z: h }) => W(P(6), J.translate(3 * g, 3, 15 * h).scale(0.7, 4, 0.7), X(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(g => W(P(), J.translate(0, 0, g).scale(3, 1, 8), X(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((g, h) => {
            W(P(), J.translate(0, 6.3, g).scale(4, 0.3, 1), X(0.3, 0.3, 0.3, 0.4));
            W(P(), J.translate(0, 1, g).scale(3, 0.2, 0.35), X(0.5, 0.5, 0.5, 0.3));
            V(q => {
              q.g = () => J.translate(0, 4.7 * -w[h + 1].h, g);
              W(y);
            });
          }),
          K(5, g =>
            K(2, h =>
              W(
                n,
                J.translate(18.5 * (h - 0.5), 0, 4.8 * g - 9.5).rotate(0, 180 - 180 * h).scale(1.2, 10, 1.2),
                X(1, 1, 0.8, 0.2),
              ))),
          W(P(), J.translate(3, 1.5, -20).scale(0.5, 2, 5), X(0.7, 0.7, 0.7, 0.2)),
          W(P(), J.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(0.75, 0.75, 0.75, 0.2)),
          W(P(5), J.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(0.6, 0.3, 0.3, 0.4)),
          Y(J.translate(-5.4, 1.5, -19).rotate(0, -90)),
          W(
            P(),
            J.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5),
            X(0.8, 0.2, 0.2, 0.5),
          ),
          W(S(
            Q(
              Lb(
                N(P(6, 0, 0, 0.3), J.translate(8, -3, -4).scale(13, 1, 13), X(0.7, 0.7, 0.7, 0.2)),
                N(P(6), J.translate(0, -8).scale(9, 8, 8), X(0.4, 0.2, 0.5, 0.5)),
                N(P(6, 0, 0, 0.3), J.translate(0, -0.92).scale(13, 2, 13), X(0.8, 0.8, 0.8, 0.2)),
              ),
              N(P(5), J.scale(5, 30, 5), X(0.4, 0.2, 0.6, 0.5)),
              N(P(5, 0, 1.5), J.translate(0, 1).scale(4.5, 0.3, 4.5), X(0.7, 0.5, 0.9, 0.2)),
              N(P(), J.rotate(0, 60).translate(14, 0.7, -1).rotate(0, 0, -35).scale(2, 2, 2), X(0.5, 0.5, 0.5, 0.5)),
              N(P(6), J.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(0.5, 0.5, 0.5, 0.5)),
            ),
          )),
          V(g => {
            g.g = () =>
              J.translate(
                0,
                0.01 < w[3].h ? (5 * Math.cos(1.5 * a) + 2) * w[3].i * (1 - w[2].h) + -15 * (1 - w[3].h) : -500,
                0,
              );
            Y(J.translate(0, 1.2));
            W(P(5), J.translate(0, -0.2).scale(5, 1, 5), X(0.6, 0.65, 0.7, 0.3));
          }),
          Y(J.translate(15, -2, 4)),
          t(0.7, 12, 35),
          t(1, 8.2, 55),
          V(g => {
            g.g = () => J.translate(v() * Math.sin(a / 1.5 + 2) * 12);
            W(
              S(Q(
                Lb(
                  N(P(), J.scale(1.5, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  N(P(6), J.scale(4, 1, 5), X(0.9, 0.9, 0.9, 0.2)),
                  N(P(), J.translate(0, -2).scale(2, 3.2, 1.9), X(0.3, 0.8, 0.5, 0.5)),
                  N(P(16, 1, 0, 4), J.scale(1, 1, 1.5).rotate(0, 90), X(0.9, 0.9, 0.9, 0.2)),
                ),
                N(P(), J.scale(1.3, 10, 1.3), X(0.2, 0.7, 0.4, 0.6)),
              )),
              J.translate(0, 0, 45),
            );
            Pb(J.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          V(g => {
            g.g = () => J.translate(9.8 * (1 - v()));
            W(P(3), J.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), X(0.3, 0.6, 0.6, 0.2));
            W(P(8), J.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(0.8, 0.8, 0.8, 0.2));
            W(P(), J.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(0.5, 0.5, 0.5, 0.3));
            W(P(), J.translate(-23, -2.2, 62).scale(3, 1, 4), X(0.5, 0.5, 0.5, 0.3));
            Y(J.translate(-23, -0.5, 66.5));
          }),
          W(P(), J.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
          V(g => {
            g.g = () => J.translate(0, lb(1 - 5 * v()) * M(w[4].h, w[5].h) * Math.sin(1.35 * a) * 4);
            W(P(), J.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(0.7, 0.7, 0.7, 0.2));
            W(
              S(Q(N(P(), J.scale(3, 1.4, 2.7)), N(P(), J.scale(1.2, 8, 1.2)))),
              J.translate(-33, -3, 55),
              X(0.7, 0.7, 0.7, 0.2),
            );
          }),
          V(g => {
            g.g = () => J.translate(0, 0, lb(1 - 5 * v()) * M(w[4].h, w[5].h) * Math.sin(0.9 * a) * 8);
            W(S(
              Q(
                N(P(), J.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2)),
                N(P(), J.translate(-27, -3, 55).scale(1, 3), X(0.9, 0.9, 0.9, 0.2)),
              ),
            ));
            W(P(), J.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2));
          }),
          V(g => {
            g.g = () => J.translate(0, -6.5 * w[4].i);
            W(
              P(6),
              J.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9),
              X(0.7, 0.7, 0.7, 0.4),
            );
          }),
          [...N(
            S(Lb(
              N(P(), J.translate(0, -3).scale(11, 1.4, 3), X(0.9, 0.9, 0.9, 0.2)),
              Q(
                N(P(6), J.rotate(0, 0, 90).scale(6, 8, 6), X(0.3, 0.6, 0.6, 0.3)),
                N(P(4, 0, 0.01), J.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), X(0.3, 0.6, 0.6, 0.3)),
                N(P(6), J.rotate(0, 0, 90).scale(5, 12, 5), X(0.3, 0.6, 0.6, 0.3)),
                ...[5, 0, -5].map(g =>
                  N(P(5), J.translate(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(0.3, 0.6, 0.6, 0.3))
                ),
              ),
            )),
            J,
          )]),
        C =
          (W(z, J.translate(-53, 0, 55)),
            W(P(6), J.translate(-61.3, -2.4, 49).scale(3, 1, 5), X(0.4, 0.6, 0.6, 0.3)),
            W(P(7), J.translate(-57, -2.6, 46).scale(4, 1, 4), X(0.8, 0.8, 0.8, 0.3)),
            Y(J.translate(-55, -1.1, 46).rotate(0, 90)),
            V(g => {
              g.g = () => J.translate(-75, (1 - w[5].i) * (1 - w[6].h) * 3, 55).rotate(180 * (1 - w[5].i) + ha, 0);
              W(z);
            }, 2),
            W(P(), J.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), X(0.7, 0.7, 0.7, 0.2)),
            W(
              P(3, 0, -0.5),
              J.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
              X(0.8, 0.8, 0.8, 0.2),
            ),
            W(
              S(Q(
                Lb(
                  N(P(), J.translate(-100, -2.5, 55).scale(8, 1, 8), X(0.8, 0.8, 0.8, 0.2)),
                  N(P(), J.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
                  N(P(), J.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(0.8, 0.8, 0.8, 0.2)),
                  N(P(), J.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), X(0.8, 0.8, 0.8, 0.2)),
                  N(P(6), J.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(0.6, 0.6, 0.6, 0.3)),
                  N(P(), J.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(0.8, 0.8, 0.8, 0.2)),
                  N(P(), J.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), X(0.8, 0.8, 0.8, 0.2)),
                ),
                N(P(8), J.translate(-100, -1, 55).scale(7, 0.9, 7), X(0.3, 0.3, 0.3, 0.4)),
                N(P(8), J.translate(-100, -2, 55).scale(4, 0.3, 4), X(0.4, 0.4, 0.4, 0.5)),
                N(P(8), J.translate(-100, -3, 55).scale(0.6, 1, 0.6), X(0.4, 0.4, 0.4, 0.5)),
              )),
              J,
            ),
            Pb(J.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            Pb(J.translate(-89, 0.2, 80), [0, 0, 6]),
            W(S(
              Q(
                N(P(), J.translate(-100, 1, 63).scale(7.5, 4), X(0.5, 0.5, 0.5, 0.4)),
                N(P(), J.translate(-100, 0, 70).scale(2, 2, 10), X(0.5, 0.5, 0.5, 0.4)),
                N(P(20, 1), J.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(0.5, 0.5, 0.5, 0.4)),
              ),
            )),
            V(g => {
              g.g = () => J.translate(-99.7, 5.3 * -w[6].h - 2, 63.5);
              W(y);
            }),
            Ua.map(({ x: g, z: h }) => {
              W(P(6), J.translate(7 * g - 100, -3, 7 * h + 55).scale(1, 8.1), X(0.6, 0.15, 0.15, 0.8));
              [4, -0.4].map(q =>
                W(P(6), J.translate(7 * g - 100, q, 7 * h + 55).scale(1.3, 0.5, 1.3), X(0.4, 0.2, 0.2, 0.8))
              );
            }),
            K(7, g => {
              W(
                P((23 * g + 1) % 5 + 5, 0, 0.55),
                J.translate(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(
                  5 + g / 2,
                  1 + g / 6,
                  5 + g / 3,
                ),
                X(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),
              );
            }),
            W(P(), J.translate(-87, -9.5, 24).scale(7, 1, 3), X(0.4, 0.5, 0.6, 0.4)),
            W(P(4), J.translate(-86, -9.2, 27).scale(5, 1, 5), X(0.5, 0.6, 0.7, 0.3)),
            W(P(12, 1), J.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(0.3, 0.3, 0.4, 0.1)),
            Y(J.translate(-86, -7.5, 31)),
            V(g => {
              g.g = () => J.translate(0, 3.5 * (1 - kb(w[6].h, w[7].h)) + M(w[7].i, w[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(h =>
                W(P(), J.translate(h - 76.9, h / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.2, 0.5, 0.6, 0.2))
              );
            }),
            V(g => {
              g.g = () => {
                const h = M(w[7].i, w[6].i);
                return J.translate(0, h * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + h) * h);
              };
              [6, 18].map(h =>
                W(P(), J.translate(h - 76.9, h / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.1, 0.4, 0.5, 0.2))
              );
            }),
            W(
              S(Q(
                Lb(
                  N(P(), J.scale(11, 1, 13), X(0.3, 0.4, 0.6, 0.3)),
                  N(P(5), J.translate(0, 0, -7).scale(2, 1.2, 2), X(0.2, 0.4, 0.7, 0.3)),
                  N(P(5), J.scale(9, 1.2, 9), X(0, 0.2, 0.3, 0.5)),
                ),
                N(P(5), J.scale(5.4, 5, 5.4), X(0, 0.2, 0.3, 0.5)),
              )),
              J.translate(-38.9, -11.3, 17),
            ),
            Y(J.translate(-38.9, -9.6, 10)),
            V(g => {
              g.g = () => J.translate(0, -7.3 * w[7].i);
              W(
                S(Q(
                  Lb(
                    N(P(5), J.translate(0, 2).scale(5, 7, 5).skewY(8), X(0.2, 0.4, 0.5, 0.5)),
                    N(P(5), J.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(0.25, 0.35, 0.5, 0.5)),
                    N(P(5), J.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), X(0.35, 0.3, 0.5, 0.5)),
                  ),
                  N(P(5), J.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(0.2, 0.4, 0.5, 0.5)),
                )),
                J.translate(-38.9, -11.3, 17),
              );
              Pb(J.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...zb(15).map(({ x: h, z: q }) => [3 * h, 3 * q, 1.2]));
            }),
            Ua.map(({ x: g, z: h }) => {
              k = J.translate(9 * g - 38.9, -7.3, 11 * h + 17);
              W(P(14, 1), k.scale(1, 4), X(0.25, 0.25, 0.25, 1));
              [1.5, 8].map(q => W(P(17, 1), k.translate(0, q - 4).scale(1.5, 0.5, 1.5), X(0.6, 0.6, 0.6, 0.3)));
            }),
            W(
              S(Q(
                Lb(
                  N(P(6), J.translate(0, 0, -36).scale(15, 1.2, 15), X(0.7, 0.7, 0.7, 0.3)),
                  N(P(), J.translate(0, 0, -18).scale(4, 1.2, 6), X(0.45, 0.4, 0.6, 0.3)),
                ),
                ...K(6, g =>
                  K(6, h =>
                    N(
                      P(6),
                      J.translate(4.6 * h - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * h)).scale(2, 5, 2),
                      X(0.7, 0.7, 0.7, 0.3),
                    ))).flat(),
              )),
              J.translate(-38.9, -11.3, 17),
            ),
            Pb(J.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
            W(P(5), J.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), X(0.8, 0.1, 0.25, 0.4)),
            Y(J.translate(-84, -0.5, 85).rotate(0, 45)),
            V(g => {
              g.g = () => l(-123, 1.4, 55 + -65 * ma);
              Y(J.translate(0, -3, -4).rotate(0, 180));
              W(u);
            }),
            Pb(J.translate(-115, 0.2, -12), [0, 0, 3.5]),
            S(Q(
              N(P(), J.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(0.25, 0.25, 0.35, 0.3)),
              N(P(3), J.translate(0, 0, -5.5).scale(3, 2), X(0.6, 0.3, 0.4, 0.3)),
              ...[-1.2, 1.2].map(g => N(P(), J.translate(g, -0.5, 1).scale(0.14, 0.3, 6.5), X(0.7, 0.2, 0, 0.3))),
            ))),
        E = (V(g => {
          g.g = () => J.translate(0, -2, M(w[10].h, w[11].h) * L(Math.sin(1.1 * a)) * -8.5 + 10);
          K(2, h => W(C, J.translate(9 * h - 110 + (1 & h), 1.7, -12)));
        }),
          V(g => {
            g.g = () => J.translate(0, -2, M(w[10].h, w[11].h) * L(Math.sin(2.1 * a)) * -8.5 + 10);
            K(2, h => W(C, J.translate(9 * (h + 2) - 110 + (1 & h), 1.7, -12)));
          }),
          V(g => {
            g.g = () =>
              J.translate(
                0,
                -2,
                -8.5 * kb((1 - w[10].h) * (1 - M(w[10].h, w[11].h)), M(w[10].h, w[11].h) * L(Math.sin(1.5 * a))) + 10,
              );
            K(3, h => W(C, J.translate(9 * h - 106, 1.7, -12)));
          }),
          W(
            S(Q(
              Lb(
                N(P(), J.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                N(P(), J.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),
              ),
              ...K(4, g => N(P(), J.translate(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9))),
              ...K(3, g => N(P(), J.translate(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            J.translate(-123, 0, -12),
            X(0.5, 0.5, 0.6, 0.2),
          ),
          W(P(5), J.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), X(0.25, 0.25, 0.35, 1)),
          W(P(), J.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(0.8, 0.8, 0.8, 0.2)),
          W(P(6), J.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), X(0.6, 0.5, 0.7, 0.2)),
          Y(J.translate(-116, -1.4, -18).rotate(0, 180)),
          K(3, g => {
            W(x, J.translate(12 * g - 109, -9, -12), X(0.6, 0.6, 0.6, 0.3));
            W(x, J.translate(-77, -9, -12 * g - 20).rotate(0, 90), X(0.6, 0.6, 0.6, 0.3));
          }),
          W(S(
            Q(
              N(P(12), J.translate(-77, -13.9, -12).scale(4, 18.2, 4), X(0.7, 0.7, 0.7, 0.2)),
              N(P(), J.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), X(0.4, 0.5, 0.6, 0.2)),
              N(P(), J.translate(-77, 0, -14).scale(1.5, 2.2, 2), X(0.4, 0.5, 0.6, 0.2)),
              N(P(12), J.translate(-77, 2.8, -12).scale(3, 5, 3), X(0.4, 0.5, 0.6, 0.2)),
            ),
          )),
          W(P(), J.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), X(0.6, 0.6, 0.6, 0.3)),
          W(P(), J.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), X(0.6, 0.6, 0.6, 0.3)),
          W(P(), J.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), X(0.6, 0.6, 0.6, 0.3)),
          W(S(
            Q(
              N(P(), J.translate(-93, -5.8, -40).scale(9, 1, 5), X(0.8, 0.8, 0.8, 0.1)),
              N(P(9), J.translate(-98, -5.8, -40).scale(3, 8, 3), X(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          W(P(9), J.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), X(0.5, 0.5, 0.5, 0.3)),
          Y(J.translate(-98, -4.4, -40).rotate(0, 90)),
          Pb(J.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          W(S(
            Q(
              Lb(
                N(P(6, 0, 0, 0.6), J.translate(-100, 0.7, 105.5).scale(8, 1, 11), X(0.7, 0.7, 0.7, 0.2)),
                N(P(), J.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), X(0.7, 0.7, 0.7, 0.2)),
                N(P(), J.translate(-91.2, 0.7, 107).scale(3, 1, 3.3), X(0.7, 0.7, 0.7, 0.2)),
              ),
              N(P(5), J.translate(-100, 0.7, 113).scale(4, 3, 4), X(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          K(4, g =>
            V(h => {
              h.g = () => {
                const q = M(w[8].i, w[12].i);
                return J.translate(
                  (2 < g ? 2 * (1 - q) + q : 0) - 100,
                  q * Math.sin(1.3 * a + 1.7 * g) * (3 + g / 3) + 0.7,
                  115 + (1 & g ? -1 : 1) * (1 - w[8].i) * (1 - w[12].i) * -7
                    + (0.05 > q ? 0.05 : q) * Math.cos(1.3 * a + 7 * g) * (4 - 2 * (1 - g / 3)),
                );
              };
              W(
                P(6),
                J.translate(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.3, -21.5).scale(2.6, 1, 2.5),
                X(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),
              );
            })),
          V(g => {
            g.g = () => {
              const h = M(w[8].i, w[12].i);
              return J.translate(2.5 * (1 - h) - 139.7, -3 * (1 - w[8].h) + h * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * h + 3), 0);
            };
            W(S(
              Q(
                N(P(10), J.scale(6, 2, 6), X(0.1, 0.6, 0.5, 0.3)),
                N(P(10), J.scale(3.3, 6, 3.3), X(0.1, 0.6, 0.5, 0.5)),
              ),
            ));
            k = J.translate(-7.5).rotate(0, 90);
            W(P(15, 1), k.scale(3, 2.3, 3), X(0.4, 0.4, 0.4, 0.3));
            W(P(10), k.scale(2, 2.5, 2), X(0.3, 0.8, 0.7, 0.3));
            W(P(5), k.scale(1, 3), X(0.5, 0.5, 0.5, 0.5));
            Y(k.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(h =>
              W(n, J.rotate(90 * -h, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), X(1, 1, 0.8, 0.2))
            );
            Pb(J.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(g => {
            W(P(12, 1), J.translate(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), X(0.6, 0.24, 0.2, 0.5));
            [7.2, 1.5].map(h =>
              W(P(15, 1), J.translate(-7.5 * g - 100, h + 0.7, 96).scale(1.1, 0.5, 1.1), X(0.5, 0.24, 0.2, 0.4))
            );
            W(n, J.translate(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), X(1, 1, 0.8));
            W(
              S(Q(
                N(P(), J.translate(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), X(0.5, 0.5, 0.5, 0.4)),
                N(P(), J.scale(3, 3, 10), X(0.6, 0.24, 0.2, 0.5)),
                N(P(28, 1), J.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(0.6, 0.24, 0.2, 0.5)),
                N(P(5), J.translate(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(0.6, 0.24, 0.2, 0.5)),
                N(P(5), J.translate(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), X(0.6, 0.24, 0.2, 0.5)),
              )),
              J.translate(g - 100, 0.7, 97),
            );
          }),
          V(g => {
            g.g = () => J.translate(-100, 0.6 - 6 * w[12].h, 96.5).scale(0.88, 1.2);
            W(y);
          }),
          [
            ...N(P(25, 1), J.scale(8, 1, 8), X(0.45, 0.45, 0.45, 0.2)),
            ...N(P(5), J.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2)),
          ]);
      V(g => {
        g.g = () => J.translate(-80, 1, 106).rotate(0, 40 + ea);
        W(S(
          Q(
            N(P(25, 1), J.scale(8, 1, 8), X(0.45, 0.45, 0.45, 0.2)),
            N(P(), J.translate(0, 0, -5.5).scale(1.5, 3, 2.5), X(0.45, 0.45, 0.45, 0.2)),
          ),
        ));
        W(P(8), J.translate(0, 2).scale(3, 1.5, 3), X(0.7, 0.7, 0.7, 0.1));
        W(P(5), J.translate(0, 2).scale(1, 2), X(0.3, 0.3, 0.3, 0.2));
        Pb(J.translate(0, 3), ...zb(10).map(({ x: h, z: q }) => [5.6 * h, 5.6 * q, 2.5]));
      });
      V(g => {
        g.g = () => J.translate(-64, 1, 106).rotate(0, fa);
        W(S(
          Q(
            N(P(25, 1), J.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3)),
            N(P(), J.scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
          ),
        ));
        W(E);
        [-1, 1].map(h =>
          W(n, J.rotate(0, 90).translate(-5 * h, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), X(1, 1, 0.8))
        );
      });
      V(g => {
        g.g = () => J.translate(-48, 1, 106).rotate(0, 180 - fa);
        W(S(
          Q(
            N(P(25, 1), J.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3)),
            N(P(), J.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
            N(P(), J.translate(0, 0, 7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
          ),
        ));
        W(E);
      });
      V(g => {
        g.g = () => J.translate(-48, 1, 90).rotate(0, 270 + fa);
        W(S(
          Q(
            N(P(25, 1), J.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3)),
            N(P(), J.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)),
            N(P(), J.translate(0, 0, -7).scale(2, 5, 9), X(0.3, 0, 0, 0.3)),
          ),
        ));
        W(E);
      });
      W(P(), J.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), X(0.7, 0.7, 0.7, 0.2));
      W(P(), J.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), X(0.7, 0.7, 0.7, 0.2));
      W(P(), J.translate(-39, 0.4, 90).scale(2, 1, 2), X(0.7, 0.7, 0.7, 0.3));
      W(P(), J.translate(-34.2, 0.4, 90).scale(3, 1, 3), X(0.7, 0.7, 0.7, 0.3));
      Y(J.translate(-34, 2.7, 96).rotate(-12, 0));
      W(P(5), J.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), X(0.2, 0.5, 0.5, 0.6));
      [X(0.1, 0.55, 0.45, 0.2), X(0.2, 0.5, 0.5, 0.3), X(0.3, 0.45, 0.55, 0.4)].map((g, h) =>
        V(q => {
          q.g = () =>
            J.translate(
              0,
              (1 - w[13].i) * (1 - w[14].i) * (h ? 0 : 3) + M(w[13].i, w[14].i) * Math.sin(1.5 * a + 1.5 * h) * 4,
            );
          W(P(), J.translate(-23.5, 0.5, 90 + 6.8 * h).scale(1 === h ? 2 : 3.3, 1, 3.3), g);
          2 === h && W(P(), J.translate(-29.1, 0.4, 90).scale(2.1, 1, 3), X(0.7, 0.7, 0.7, 0.3));
          1 === h
            && W(
              P(),
              J.translate(-16.1, 0.5, 103.5).rotate(0, 0, -3.5).scale(3.9, 0.8, 2).skewX(-1),
              X(0.6, 0.6, 0.7, 0.3),
            );
        })
      );
      W(S(
        Q(
          N(P(6, 0, 0, 0.3), J.translate(0, -0.92, 95).scale(14, 2, 14), X(0.8, 0.8, 0.8, 0.2)),
          N(P(5), J.translate(0, 0, 95).scale3d(6), X(0.3, 0.3, 0.3, 0.5)),
        ),
      ));
      [8, -6.1].map((g, h) =>
        K(
          3,
          q =>
            W(
              x,
              J.translate(6 * q - 6, g - (1 & q), 111 - 0.2 * (1 & q) - h),
              1 & q ? X(0.5, 0.5, 0.5, 0.3) : X(0.35, 0.35, 0.35, 0.5),
            ),
        )
      );
      [-1, 1].map(g => W(n, J.translate(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), X(1, 1, 0.8)));
      Y(J.translate(0, 1.7, 82).rotate(0, 180));
      W(P(5), J.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(0.5, 0.3, 0.3, 0.4));
      W(S(
        Q(
          Lb(
            N(P(), J.translate(0, 16, 110.5).scale(12, 1, 3), X(0.5, 0.3, 0.3, 0.4)),
            N(P(), J.translate(0, 16, 111).scale(3, 1, 3.8), X(0.5, 0.3, 0.3, 0.4)),
          ),
          N(P(5), J.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(0.5, 0.3, 0.3, 0.4)),
        ),
      ));
      V(g => {
        g.g = () => {
          const h = Math.sin(a);
          return J.translate(-2 * h).rotate(0, 0, 25 * h);
        };
        W(P(3), J.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), X(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(h => {
          W(P(6), J.translate(0, 16, h + 95).scale(3, 1, 2.3).rotate(0, 90), X(0.7, 0.7, 0.7, 0.4));
          W(P(), J.translate(0, 6.2, h + 95).scale(0.5, 11, 0.5), X(0.5, 0.3, 0.3, 0.4));
        });
      });
      W(P(6), J.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(0.5, 0.6, 0.7, 0.3));
      W(P(), J.translate(0, 16, 129).scale(1.5, 1, 2), X(0.5, 0.6, 0.7, 0.3));
      W(P(7), J.translate(0, 16.2, 133).scale(5, 1, 5), X(0.4, 0.5, 0.6, 0.4));
      V(g => {
        g.g = () => {
          const h = M(M((w[14].h + w[14].i) / 2, w[13].i), (w[15].h + w[15].i) / 2);
          return J.translate(0, 16 * h, 8.5 * lb(2 * h - 1) + 95);
        };
        W(P(5), J.scale(5, 1.1, 5), X(0.5, 0.3, 0.3, 0.4));
        W(P(5), J.scale(5.5, 0.9, 5.5), X(0.25, 0.25, 0.25, 0.4));
        Y(J.translate(0, 1.5, -1).rotate(0, 180));
      });
      Pb(J.translate(0, 3, 95), ...zb(9).map(({ x: g, z: h }) => [9 * g, 9 * h, 4]));
      Pb(J.translate(0, 19, 134), [0, 0, 3.5]);
    });
    V(() => {
      [0, 180].map(v => W(n, J.rotate(0, v).translate(0.2, 1.32).rotate(0, 0, -30).scale(0.2, 0.6, 0.2), X(1, 1, 0.8)));
      W(Bb(20), J.translate(0, 1).scale(0.5, 0.5, 0.5), X(1, 0.3, 0.4));
      const t = N(
        S(Q(P(15, 1), N(P(), J.translate(0, 0, 1).scale(2, 2, 0.5)))),
        J.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        X(0.3, 0.3, 0.3),
      );
      [-1, 1].map(v => W(t, J.translate(0.2 * v, 1.2, 0.4).rotate(0, 20 * v, 20 * v)));
      W(P(), J.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), X(0.3, 0.3, 0.3));
      W(Bb(20), J.scale(0.7, 0.8, 0.55), X(1, 0.3, 0.4));
    });
    [-1, 1].map(t =>
      V(() => {
        W(P(10, 1), J.translate(0.3 * t, -0.8).scale(0.2, 0.7, 0.24), X(1, 0.3, 0.4));
      })
    );
    V(() => {
      W(P(6, 1), J.scale(0.13, 1.4, 0.13), X(0.3, 0.3, 0.5, 0.1));
      W(P(8, 1), J.translate(0, 1).scale(0.21, 0.3, 0.21), X(1, 0.5, 0.2));
      W(P(3), J.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), X(0.2, 0.2, 0.2, 0.1));
    }, 0);
    V(() => {
      W(P(6).slice(0, -1), J.scale(0.77, 1, 0.77), X(1, 0.3, 0.5));
    }, 0);
    V(() => {
      W(
        Bb(30, 24, (t, v, y) => {
          const z = v / 24, C = t * Math.PI * 2 / 30, E = z ** 0.6 * Math.PI / 2;
          t = z * z * Math.sin(t * Math.PI * 14 / 30) / 4;
          return 23 === v
            ? { x: y.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(C) * Math.sin(E),
              y: Math.cos(z * Math.PI) - z - t,
              z: Math.sin(C) * Math.sin(E) + Math.sin(t * Math.PI * 2) / 4,
            };
        }),
        J.scale3d(0.7),
        X(1, 1, 1),
      );
      [-1, 1].map(t => W(Bb(12), J.translate(0.16 * t, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls: <b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n",
);
