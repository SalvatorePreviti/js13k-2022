let fa = !0,
  ia = 0,
  ja = 0,
  ka = 0,
  a = 0,
  ma = 0,
  ua = 0,
  va = 0,
  Aa = 0,
  Ba = 0,
  Ha = 0,
  Ia = 0,
  Ja = 0,
  Ka = 0,
  d = .066,
  La,
  Ma,
  Na,
  Oa,
  Sa,
  Ta,
  Wa,
  Xa,
  Ya;
const Za = Math.PI / 180,
  k = new DOMMatrix(),
  $a = (b, e) => e < b ? b : e,
  ab = b => 0 > b ? -b : b,
  bb = b => 0 > b ? 0 : 1 < b ? 1 : b,
  cb = (b, e) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > e ? 0 : 1 < e ? 1 : e)),
  db = b => Math.atan2(Math.sin(b *= Za), Math.cos(b)) / Za,
  eb = (b, e, g) => {
    b *= Za;
    e = (e * Za - b) % (2 * Math.PI);
    return (b + (2 * e % (2 * Math.PI) - e) * (0 > g ? 0 : 1 < g ? 1 : g)) / Za;
  },
  fb = (b, e, g, h) => {
    var m = e - b;
    b += Math.sign(e - b) * $a(0, (0 > m ? -m : m) ** .9 - g) * h * 2;
    return b + (e - b) * bb(h / 7);
  },
  l = (b, e) => Array.from(Array(b), (g, h) => e(h)),
  gb = (b, e, g, h) => [b, 0, 0, 0, 0, e, 0, 0, 0, 0, (h + g) / (g - h), -1, 0, 0, 2 * h * g / (g - h), 0],
  hb = ({ x: b, y: e, z: g }, h) => b * h.x + e * h.y + g * h.z,
  ib = ({ x: b, y: e, z: g }) => {
    var h = p;
    return Math.hypot(b - h.x, e - h.y, g - h.z) || 0;
  },
  jb = b => {
    let e = 0, g = 0, h = 0, m, q = b.at(-1);
    for (m of b) {
      e += (q.y - m.y) * (q.z + m.z), g += (q.z - m.z) * (q.x + m.x), h += (q.x - m.x) * (q.y + m.y), q = m;
    }
    return m = Math.hypot(e, g, h), e /= m, g /= m, h /= m, { x: e, y: g, z: h, w: e * q.x + g * q.y + h * q.z };
  },
  pb = (b, e) => {
    var g = kb;
    b *= 16;
    g[b++] = e.m11;
    g[b++] = e.m12;
    g[b++] = e.m13;
    g[b++] = e.m14;
    g[b++] = e.m21;
    g[b++] = e.m22;
    g[b++] = e.m23;
    g[b++] = e.m24;
    g[b++] = e.m31;
    g[b++] = e.m32;
    g[b++] = e.m33;
    g[b++] = e.m34;
    g[b++] = e.m41;
    g[b++] = e.m42;
    g[b++] = e.m43;
    g[b] = e.m44;
  },
  qb = (b, e, g) => (b.D = g, b.A = e, b),
  rb = (b, e, g = b.A) =>
    qb(
      b.map(h =>
        ((
          { x: m, y: q, z: c },
          f,
        ) => ({ x: m, y: q, z: c } = f.transformPoint({ x: m, y: q, z: c }), { x: m, y: q, z: c }))(h, e)
      ),
      g,
      b.D,
    ),
  r = (b, e, g) => b.map(h => rb(h, e, g)),
  sb = (b, e = 0) =>
    l(b, g => {
      const h = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: .01 > (0 > h ? -h : h) ? h : 0 > h ? h - e : h + e };
    }),
  tb = (b, e, g) =>
    b.map((h, m, { length: q }) => qb([h, e[q - m - 1], e[q - (m + 1) % q - 1], b[(m + 1) % q]], b.A, g)),
  u = (b, e, g = 0, h) => {
    h = b.length ? b : sb(b, h);
    b = rb(h, k.translate(0, 1).scale3d(0 < g ? g : 1));
    g = rb(h, k.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse();
    return [...tb(g, b, e), g, b];
  },
  vb = (
    b,
    e = b,
    g = (
      h,
      m,
    ) => (m *= Math.PI / e,
      { x: Math.cos(h *= 2 * Math.PI / b) * Math.sin(m), y: Math.cos(m), z: Math.sin(h) * Math.sin(m) }),
  ) => {
    const h = [];
    for (let m = 0; b > m; m++) {
      for (let q = 0; e > q; q++) {
        const c = qb([], 0, 1);
        h.push(c);
        c.push(g(m, q, c));
        q && c.push(g((m + 1) % b, q, c));
        e - 1 > q && c.push(g((m + 1) % b, q + 1 % e, c));
        c.push(g(m, q + 1 % e, c));
      }
    }
    return h;
  },
  wb = (b, e) => {
    var g, h, m, q = e.C;
    for (var c = 0; q.length > c; ++c) {
      if (-0.00008 > (m = hb(b, q[c]) - b.w) ? h = e : 8e-5 < m && (g = e), h && g) {
        h = [];
        m = [];
        q = e.C;
        c = e.B;
        let f = q.at(-1), n = hb(b, f) - b.w;
        for (const D of q) {
          g = hb(b, D) - b.w,
            8e-5 > n && m.push(f),
            -0.00008 < n && h.push(f),
            (8e-5 < n && -0.00008 > g || -0.00008 > n && 8e-5 < g)
            && (n /= g - n,
              f = { x: f.x + (f.x - D.x) * n, y: f.y + (f.y - D.y) * n, z: f.z + (f.z - D.z) * n },
              h.push(f),
              m.push(f)),
            f = D,
            n = g;
        }
        return {
          o: 2 < h.length && { C: qb(h, q.A, q.D), B: c, u: e },
          m: 2 < m.length && { C: qb(m, q.A, q.D), B: c, u: e },
        };
      }
    }
    return { o: g, m: h };
  },
  xb = (b, e, g = jb(e.C)) => {
    if (b) {
      const { o: h, m } = wb(b, e);
      h || m || b.s.push(e);
      h && (b.o = xb(b.o, h, g));
      m && (b.m = xb(b.m, m, g));
    } else {
      b = { x: g.x, y: g.y, z: g.z, w: g.w, s: [e], o: 0, m: 0 };
    }
    return b;
  },
  yb = (b, e, g) => {
    const h = [],
      m = (q, c) => {
        let { o: f, m: n } = wb(q, c);
        f || n || (0 < g * hb(q, e) ? f = c : n = c);
        f && (q.o ? m(q.o, f) : h.push(f));
        n && q.m && m(q.m, n);
      };
    for (const q of e.s) {
      m(b, q);
    }
    return h;
  },
  zb = (b, e) => b && (e(b), zb(b.o, e), zb(b.m, e)),
  Ab = b => b.length ? b.reduce((e, g) => xb(e, { C: g, B: 0, u: 0 }), 0) : b,
  Bb = b => (zb(b, e => {
    const g = e.m;
    e.m = e.o;
    e.o = g;
    e.x *= -1;
    e.y *= -1;
    e.z *= -1;
    e.w *= -1;
    for (const h of e.s) {
      h.B = !h.B;
    }
  }),
    b),
  Cb = (...b) =>
    b.reduce((e, g) => {
      const h = [];
      if (e = Ab(e), g) {
        g = Ab(g);
        zb(e, m => m.s = yb(g, m, 1));
        zb(g, m => h.push([m, yb(e, m, -1)]));
        for (const [m, q] of h) {
          for (const c of q) {
            xb(e, c, m);
          }
        }
      }
      return e;
    }),
  w = (b, ...e) => Bb(Cb(Bb(Ab(b)), ...e)),
  x = b => {
    const e = new Map(),
      g = new Map(),
      h = m => {
        if (m.u) {
          const q = e.get(m.u);
          q ? (g.delete(q), m = h(m.u)) : e.set(m.u, m);
        }
        return m;
      };
    return zb(b, m => {
      for (const q of m.s) {
        g.set(h(q), q.B);
      }
    }),
      Array.from(g, ([{ C: m }, q]) => {
        const c = m.map(({ x: f, y: n, z: D }) => ({ x: f, y: n, z: D }));
        return qb(q ? c.reverse() : c, m.A, m.D);
      });
  },
  z = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Db = [],
  C = (b, e = k, g) => La.s.push(...r(b, e, g)),
  I = (b, e = 1) => {
    const g = La;
    e = { l: k, F: Db.length, H: e, s: [] };
    return Db.push(La = e), b(e), La = g, e;
  };
var Eb = -11, Fb = 17, Gb = -90, Lb = 0, Mb = 0;
const Nb = [[
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
  Ob = b => Math.sin(b * Math.PI * 2),
  Rb = b => .5 > b % 1 ? 1 : -1,
  Sb = b => b % 1 * 2 - 1,
  Tb = b => {
    b = b % 1 * 4;
    return 2 > b ? b - 1 : 3 - b;
  },
  Ub = [],
  Xb = () => {
    Ma || !fa ? Vb.disconnect() : Vb.connect(Wb.destination);
    b4.innerHTML = "Music: " + fa;
  },
  Yb = (b = !1) => {
    if (Ma !== b) {
      Ma = b;
      Na = 0;
      try {
        b ? document.exitPointerLock() : Vb.start();
      } catch {
      }
      document.body.className = b ? "l m" : "l";
      Xb();
    }
  },
  Zb = () => {
    let b = 0, e = 0, g = 0, h, m, q;
    const c = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Ub.length = ia = ja = 0;
      h = m = void 0;
      document.hidden && Yb(!0);
    };
    b1.onclick = () => Yb();
    b2.onclick = () => {
      Yb();
      Na = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      fa = !fa;
      Xb();
    };
    b5.onclick = () => Yb(!0);
    onclick = () => {
      q = 1;
      Ma || (Ub[5] = !0, Na && hC.requestPointerLock());
    };
    document.onvisibilitychange = onresize = onblur = c;
    onkeydown = onkeyup = ({ code: f, target: n, type: D, repeat: A }) => {
      A || ((n = !!D[5] && n === document.body) && ("Escape" === f || "Enter" === f && Ma)
        ? Ma && !q || Yb(!Ma)
        : (f = {
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
        }[f],
          5 === f ? n && (Ub[f] = 1) : Ub[f] = n));
    };
    onmousemove = ({ movementX: f, movementY: n }) => {
      Na && (f || n) && (Mb += .1 * f, Lb += .1 * n);
    };
    hC.ontouchstart = f => {
      if (!Ma) {
        for (const n of f.changedTouches) {
          Na && n.pageX > hC.clientWidth / 2 ? h || (h = n, b = Mb, e = Lb) : m = m || n;
        }
        g = ka;
      }
    };
    hC.ontouchmove = ({ changedTouches: f }) => {
      if (!Ma) {
        for (const { pageX: n, pageY: D, identifier: A } of f) {
          h?.identifier === A && (Mb = b + (n - h.pageX) / 3, Lb = e + (D - h.pageY) / 3),
            m?.identifier === A
            && (ia = -(n - m.pageX) / 18,
              ja = -(D - m.pageY) / 18,
              ia = .35 > (0 > ia ? -ia : ia) ? 0 : .8 * ia,
              ja = .35 > (0 > ja ? -ja : ja) ? 0 : .8 * ja);
        }
      }
    };
    hC.ontouchend = f => {
      for (const n of f.changedTouches) {
        n.identifier === h?.identifier && (h = void 0), n.identifier === m?.identifier && (m = void 0, ja = ia = 0);
      }
      f.preventDefault();
      f = ka - g;
      (!g || .02 < f && .4 > f) && (Ub[5] = !0);
    };
    oncontextmenu = () => !1;
    c();
    Yb(!0);
  },
  J = (b, e, g) => b + (e - b) * bb(1 - Math.exp(-g * d)),
  $b = ({ j: b }) => b,
  Q = [],
  ac = [],
  bc = () => {
    ma = ac.reduce((b, e) => b + e.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ma];
  },
  cc = () => {
    bc();
    localStorage.DanteSP22 = JSON.stringify([Q.map($b), ac.map($b), va, a, Ka]);
  },
  p = { x: 0, y: 0, z: 0 },
  S = b => {
    const e = La,
      g = Q.length,
      h = {
        j: 0,
        g: 0,
        i: 0,
        u: e,
        h() {
          const m = h.j, q = h.g, c = h.i, f = e.l.multiply(b);
          h.I = f;
          2.9 > ib(f.transformPoint()) && Ub[5] && (.3 > q || .7 < q)
            && (h.j = m ? 0 : 1, g && (Ia || (h4.innerHTML = "* click *", ua = a + 1)), va = g, cc());
          h.g = J(q, m, 4);
          h.i = J(c, m, 1);
          h.l = f.rotate(60 * h.g - 30, 0).translateSelf(0, 1);
        },
      };
    Q.push(h);
    C(u(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), 8355686);
    C(u(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), 8355686);
    C(u(z), b.translate(0, -0.4).scale(.5, .1, .5), 6717311);
  },
  dc = (b, ...e) => {
    let g = -1, h = 0, m = 0, q = 0, c = 0, f = 0, n = 3, D = 1;
    const A = {
        j: 0,
        h() {
          if (!A.j) {
            var G = 1, ca = 1 / 0;
            for (var W of ha) {
              var X = W.w, M = Math.hypot(y - W.x, O - W.z), la = M - X;
              Pa ||= M < X;
              0 < la && ca > la && (ca = la, Y = W);
              X = M / X;
              G = G < X ? G : X;
            }
            if (!Pa) {
              ca = Y.x;
              W = Y.z;
              X = Y.w;
              M = y - ca;
              la = O - W;
              let wa = Math.hypot(M, la), Qa = Math.atan2(-la, M);
              D && (m = (Math.random() - .5) * Math.PI / 2, n = $a(1, n / (1 + Math.random())));
              Qa += m;
              g = -Math.cos(Qa);
              h = Math.sin(Qa);
              .1 < wa && (wa = (wa < X ? wa : X) / (wa || 1), y = M * wa + ca, O = la * wa + W);
            }
            D = Pa;
            n = J(n, 3 + 6 * (1 - G), 3 + G);
            N = J(N, y = J(y, y + g, n), n);
            aa = J(aa, O = J(O, O + h, n), n);
            q = eb(q, Math.atan2(N - c, aa - f) / Za - 180, 3 * d);
            c = N;
            f = aa;
            G = (A.l = b.multiply(
              P.l.translate(N, 0, aa).rotateSelf(0, q).skewXSelf(7 * Math.sin(2 * a)).skewYSelf(
                7 * Math.sin(1.4 * a),
              ),
            )).transformPoint();
            if (1.5 > ib(G)) {
              A.j = 1;
              G = [
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
              ][ma] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              var Pa = ma && 12 > ma ? 5 : 7;
              Ia || (h4.innerHTML = G, ua = a + Pa);
              cc();
            }
          }
          A.j
            && (G = U % 4 - 2,
              A.l = Db[2].l.translate(
                U % 4 * 1.2 - 1.7 + Math.sin(a + U) / 7,
                -2,
                1.7 * (U / 4 | 0) - 5.5 + (0 > G ? -G : G) + Math.cos(a / 1.5 + U) / 6,
              ));
        },
      },
      P = La,
      U = ac.length,
      ha = e.map(([G, ca, W]) => ({ x: G, z: ca, w: W }));
    let Y = ha[0], { x: y, z: O } = Y, N = y, aa = O;
    ac.push(A);
  },
  ec = () => {
    for (const b of Db) {
      b.h && (b.l = b.h(b));
    }
    for (const b of Q) {
      b.h();
    }
    for (const b of ac) {
      b.h();
    }
  },
  fc = () => {
  },
  gc = (b, e, g) =>
    k.translate(b + Math.sin(a + 2) / 5, e + Math.sin(.8 * a) / 3, g).rotateSelf(
      2 * Math.sin(a),
      Math.sin(.7 * a),
      Math.sin(.9 * a),
    ),
  hc = (b, e, g, h) => {
    let m = 0, q = 0, c = 0, f = 1 / 0, n = -1 / 0, D = 1 / 0, A = -1 / 0, P = 1 / 0, U = -1 / 0;
    const ha = 1.1 * (g - e),
      Y = (new DOMMatrix(gb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, g))).multiplySelf(b).invertSelf();
    b = l(8, y => {
      y = Y.transformPoint({ x: 4 & y ? 1 : -1, y: 2 & y ? 1 : -1, z: 1 & y ? 1 : -1 });
      return m -= y.x = (ha * y.x | 0) / (ha * y.w),
        q -= y.y = (ha * y.y | 0) / (ha * y.w),
        c -= y.z = (ha * y.z | 0) / (ha * y.w),
        y;
    });
    e = k.rotate(298, 139).translateSelf(m / 8, q / 8, c / 8);
    return rb(b, e).map(({ x: y, y: O, z: N }) => {
      f = f < y ? f : y;
      n = y < n ? n : y;
      D = D < O ? D : O;
      A = O < A ? A : O;
      P = P < N ? P : N;
      U = N < U ? U : N;
    }),
      P *= 0 > P ? h : 1 / h,
      U *= 0 < U ? h : 1 / h,
      k.scale(2 / (n - f), 2 / (A - D), 2 / (P - U)).translateSelf((n + f) / -2, (A + D) / -2, (P + U) / 2)
        .multiplySelf(e).toFloat32Array();
  },
  ic = (b, e = 35633) => {
    e = Z.c6x(e);
    return Z.s3c(e, b), Z.c6a(e), e;
  },
  jc = (b, e) => {
    const g = {}, h = Z.c1h();
    return Z.abz(h, b), Z.abz(h, ic(e, 35632)), Z.l8l(h), m => m ? g[m] || (g[m] = Z.gan(h, m)) : Z.u7y(h);
  },
  kb = new Float32Array(656),
  kc = (b, e, g) => {
    if (Ma) {
      g = k.rotate(0, 40 * Math.sin(ka) - 70);
      for (var { F: h } of Xa) {
        pb(h - 1, g);
      }
      Z.uae(b, !1, kb);
      Z.d97(4, Xa[2].G - Xa[0].v, 5123, 2 * Xa[0].v);
    } else {
      for (const { H: m, F: q, l: c } of Db) {
        m && pb(q - 1, c);
      }
      Z.uae(b, !1, kb);
      Z.d97(4, (e ? Xa[2].G : Xa[0].v) - 3, 5123, 6);
      for (h = 0; Q.length > h; ++h) {
        pb(h, Q[h].l), kb[16 * h + 15] = 1 - Q[h].g;
      }
      Z.uae(b, !1, kb);
      Z.das(4, Sa.G - Sa.v, 5123, 2 * Sa.v, Q.length);
      for (h = 0; 13 > h; ++h) {
        pb(h, ac[h].l);
      }
      g = g ? Wa : Ta;
      Z.uae(b, !1, kb);
      Z.das(4, g.G - g.v, 5123, 2 * g.v, 13);
    }
  },
  lc = new Int32Array(10725888),
  mc = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls:<b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  nc = (() => {
    const b = l(
        11,
        g => k.translate(Math.sin(g / 10 * Math.PI), g / 10).rotate(+g).scale(1.0001 - g / 10, 0, 1 - g / 10),
      ),
      e = sb(18);
    return l(10, g => tb(rb(e, b[g]).reverse(), rb(e, b[g + 1]), 1)).flat();
  })(),
  oc = x(
    w(
      r(u(20, 1, 1.15, 1), k.translate(0, -3).scale(3.5, 1, 3.5), -1304467790),
      r(u(20, 1, 1.3, 1), k.translate(0, -2.5).scale(2.6, 1, 3), 859793074),
      r(u(z), k.translate(4, -1.2).scale3d(2), 1279223474),
    ),
  ),
  pc = x(
    w(
      r(u(z), k.translate(0, -8).scale(6, 15, 2.2)),
      r(u(z), k.translate(0, -14.1).scale(4, 13, 4)),
      r(u(20, 1), k.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  ),
  Wb = new AudioContext(),
  Vb = Wb.createBufferSource(),
  Z = (I(() => {
    C([z.slice(1)], k.translate(-2).scale3d(3).rotate(90, 0));
  }, 0),
    I(() => {
      const b = () => {
          var c = Q[2].i, f = 1 - Q[4].i;
          return c < f ? c : f;
        },
        e = (c, f, n) =>
          I(D => {
            D.h = () => k.translate(b() * Math.sin(3 * c + a * c) * f);
            z.map(({ x: A, z: P }) => {
              C(u(11, 1), k.translate(4 * A, 4, n + 4 * P).scale(.8, 3, .8), -1716368257);
              C(u(z), k.translate(4 * A, 7, n + 4 * P).scale(1, .3), 1283424127);
            });
            C(x(w(
              r(u(z), k.translate(0, 0, n).scale(5, 1, 5), 1288490188),
              ...[-1, 1].map(A => r(u(z), k.translate(5 * A, .2, n).rotate(0, 0, -30 * A).scale(4, 1, 2), 1288490188)),
            )));
            C(u(z), k.translate(0, -3, n).scale(8, 2, 8), 1281779302);
          }),
        g = (I(c => {
          c.h = () => gc(-12, 4.2, 40 * Ja - 66);
          C(oc);
          S(k.translate(0, -3, 4));
        }),
          l(7, c => r(u(6, 1), k.translate(4 * (c / 6 - .5), 3).scale(.2, 3, .2), 6310988)).flat()),
        h = (dc(k.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          dc(
            k.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...sb(18).map(({ x: c, z: f }) => [7 * c, 10 * f, 4.5 - 2 * (0 > c ? -c : c)]),
          ),
          C(u(z), k.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), 869059788),
          z.map(({ x: c, z: f }) => C(u(6), k.translate(3 * c, 3, 15 * f).scale(.7, 4, .7), 1716276377)),
          [-23, 22].map(c => C(u(z), k.translate(0, 0, c).scale(3, 1, 8), 870704613)),
          [-15, 15].map((c, f) => {
            C(u(z), k.translate(0, 6.3, c).scale(4, .3, 1), 1716276300);
            C(u(z), k.translate(0, 1, c).scale(3, .2, .35), 1283424127);
            I(n => {
              n.h = () => k.translate(0, 4.7 * -Q[f + 1].g, c);
              C(g);
            });
          }),
          l(5, c =>
            l(2, f =>
              C(
                nc,
                k.translate(18.5 * (f - .5), 0, 4.8 * c - 9.5).rotate(0, 180 - 180 * f).scale(1.2, 10, 1.2),
                869072895,
              ))),
          C(u(z), k.translate(3, 1.5, -20).scale(.5, 2, 5), 867349170),
          C(u(z), k.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), 868204479),
          C(u(5), k.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), 1716276377),
          S(k.translate(-5.4, 1.5, -19).rotate(0, -90)),
          C(u(z), k.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), 2134062028),
          C(x(
            w(
              Cb(
                r(u(6, 0, 0, .3), k.translate(8, -3, -4).scale(13, 1, 13), 867349170),
                r(u(6), k.translate(0, -8).scale(9, 8, 8), 2139042662),
                r(u(6, 0, 0, .3), k.translate(0, -0.92).scale(13, 2, 13), 869059788),
              ),
              r(u(5), k.scale(5, 30, 5), 2140746598),
              r(u(5, 0, 1.5), k.translate(0, 1).scale(4.5, .3, 4.5), 870678450),
              r(u(z), k.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), 2139062143),
              r(u(6), k.translate(15, -1.5, 4).scale(3.5, 1, 3.5), 2139062143),
            ),
          )),
          I(c => {
            c.h = () =>
              k.translate(
                0,
                .01 < Q[3].g ? (5 * Math.cos(1.5 * a) + 2) * Q[3].i * (1 - Q[2].g) + -15 * (1 - Q[3].g) : -500,
                0,
              );
            S(k.translate(0, 1.2));
            C(u(5), k.translate(0, -0.2).scale(5, 1, 5), 1286776217);
          }),
          S(k.translate(15, -2, 4)),
          e(.7, 12, 35),
          e(1, 8.2, 55),
          I(c => {
            c.h = () => k.translate(b() * Math.sin(a / 1.5 + 2) * 12);
            C(
              x(w(
                Cb(
                  r(u(z), k.scale(1.5, 1, 5), 870704613),
                  r(u(6), k.scale(4, 1, 5), 870704613),
                  r(u(z), k.translate(0, -2).scale(2, 3.2, 1.9), 2139081804),
                  r(u(16, 1, 0, 4), k.scale(1, 1, 1.5).rotate(0, 90), 870704613),
                ),
                r(u(z), k.scale(1.3, 10, 1.3), -1721322957),
              )),
              k.translate(0, 0, 45),
            );
            dc(k.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          I(c => {
            c.h = () => k.translate(9.8 * (1 - b()));
            C(u(3), k.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), 865704268);
            C(u(8), k.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), 869059788);
            C(u(z), k.translate(-23, -3, 55).scale(5.2, 1.7, 3), 1283424127);
            C(u(z), k.translate(-23, -2.2, 62).scale(3, 1, 4), 1283424127);
            S(k.translate(-23, -0.5, 66.5));
          }),
          C(u(z), k.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), 870704613),
          I(c => {
            c.h = () => k.translate(0, bb(1 - 5 * b()) * cb(Q[4].g, Q[5].g) * Math.sin(1.35 * a) * 4);
            C(u(z), k.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), 867349170);
            C(
              x(w(r(u(z), k.scale(3, 1.4, 2.7)), r(u(z), k.scale(1.2, 8, 1.2)))),
              k.translate(-33, -3, 55),
              867349170,
            );
          }),
          I(c => {
            c.h = () => k.translate(0, 0, bb(1 - 5 * b()) * cb(Q[4].g, Q[5].g) * Math.sin(.9 * a) * 8);
            C(x(
              w(
                r(u(z), k.translate(-27, -3, 55).scale(3, 1.4, 2.7), 870704613),
                r(u(z), k.translate(-27, -3, 55).scale(1, 3), 870704613),
              ),
            ));
            C(u(z), k.translate(-39, -3, 55).scale(3, 1.4, 2.7), 870704613);
          }),
          I(c => {
            c.h = () => k.translate(0, -6.5 * Q[4].i);
            C(u(6), k.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), 1722987186);
          }),
          [...r(
            x(Cb(
              r(u(z), k.translate(0, -3).scale(11, 1.4, 3), 870704613),
              w(
                r(u(6), k.rotate(0, 0, 90).scale(6, 8, 6), 1285134668),
                r(u(4, 0, .01), k.translate(0, 6).scale(12, 2, .75).rotate(0, 45), 1285134668),
                r(u(6), k.rotate(0, 0, 90).scale(5, 12, 5), 1285134668),
                ...[5, 0, -5].map(c => r(u(5), k.translate(c, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), 1285134668)),
              ),
            )),
            k,
          )]),
        m =
          (C(h, k.translate(-53, 0, 55)),
            C(u(6), k.translate(-61.3, -2.4, 49).scale(3, 1, 5), 1285134694),
            C(u(7), k.translate(-57, -2.6, 46).scale(4, 1, 4), 1288490188),
            S(k.translate(-55, -1.1, 46).rotate(0, 90)),
            I(c => {
              c.h = () => k.translate(-75, (1 - Q[5].i) * (1 - Q[6].g) * 3, 55).rotate(180 * (1 - Q[5].i) + Ha, 0);
              C(h);
            }, 2),
            C(u(z), k.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), 867349170),
            C(u(3, 0, -0.5), k.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), 869059788),
            C(
              x(w(
                Cb(
                  r(u(z), k.translate(-100, -2.5, 55).scale(8, 1, 8), 869059788),
                  r(u(z), k.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), 869059788),
                  r(u(z), k.translate(-100, -2.6, 70).scale(3, 1.1, 7), 869059788),
                  r(u(z), k.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), 869059788),
                  r(u(6), k.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), 1285134745),
                  r(u(z), k.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), 869059788),
                  r(u(z), k.translate(-100, .42, 92).scale(3, 1.1, 4.1), 869059788),
                ),
                r(u(8), k.translate(-100, -1, 55).scale(7, .9, 7), 1716276300),
                r(u(8), k.translate(-100, -2, 55).scale(4, .3, 4), 2137417318),
                r(u(8), k.translate(-100, -3, 55).scale(.6, 1, .6), 2137417318),
              )),
              k,
            ),
            dc(k.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            dc(k.translate(-89, .2, 80), [0, 0, 6]),
            C(x(
              w(
                r(u(z), k.translate(-100, 1, 63).scale(7.5, 4), 1719631743),
                r(u(z), k.translate(-100, 0, 70).scale(2, 2, 10), 1719631743),
                r(u(20, 1), k.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), 1719631743),
              ),
            )),
            I(c => {
              c.h = () => k.translate(-99.7, 5.3 * -Q[6].g - 2, 63.5);
              C(g);
            }),
            z.map(({ x: c, z: f }) => {
              C(u(6), k.translate(7 * c - 100, -3, 7 * f + 55).scale(1, 8.1), -869914983);
              [4, -0.4].map(n => C(u(6), k.translate(7 * c - 100, n, 7 * f + 55).scale(1.3, .5, 1.3), -869059738));
            }),
            l(7, c => {
              C(
                u((23 * c + 1) % 5 + 5, 0, .55),
                k.translate(5 * Math.sin(c) - 101 + c, -2.3 - c, 44.9 - 2.8 * c).scaleSelf(
                  5 + c / 2,
                  1 + c / 6,
                  5 + c / 3,
                ),
                76.5 << 24 | 10027008 | 255 * (.5 - (1 & c) / 9) << 8 | 255 * (.5 - c / 17),
              );
            }),
            C(u(z), k.translate(-87, -9.5, 24).scale(7, 1, 3), 1721335654),
            C(u(4), k.translate(-86, -9.2, 27).scale(5, 1, 5), 1286773119),
            C(u(18, 1), k.translate(-86, -9, 31).scale(1.5, 1, 1.5), 426134604),
            S(k.translate(-86, -7.5, 31)),
            I(c => {
              c.h = () => k.translate(0, 3.5 * (1 - $a(Q[6].g, Q[7].g)) + cb(Q[7].i, Q[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(f => C(u(z), k.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), 865697587));
            }),
            I(c => {
              c.h = () => {
                const f = cb(Q[7].i, Q[6].i);
                return k.translate(0, f * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + f) * f);
              };
              [6, 18].map(f => C(u(z), k.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), 863987225));
            }),
            C(
              x(w(
                Cb(
                  r(u(z), k.scale(11, 1, 13), 1285121612),
                  r(u(5), k.translate(0, 0, -7).scale(2, 1.2, 2), 1286759987),
                  r(u(5), k.scale(9, 1.2, 9), 2135700224),
                ),
                r(u(5), k.scale(5.4, 5, 5.4), 2135700224),
              )),
              k.translate(-38.9, -11.3, 17),
            ),
            S(k.translate(-38.9, -9.6, 10)),
            I(c => {
              c.h = () => k.translate(0, -7.3 * Q[7].i);
              C(
                x(w(
                  Cb(
                    r(u(5), k.translate(0, 2).scale(5, 7, 5).skewY(8), 2139055667),
                    r(u(5), k.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), 2139052351),
                    r(u(5), k.translate(0, 9).scale(.6, 7, .6).skewY(8), 2139049049),
                  ),
                  r(u(5), k.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), 2139055667),
                )),
                k.translate(-38.9, -11.3, 17),
              );
              dc(k.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...sb(15).map(({ x: f, z: n }) => [3 * f, 3 * n, 1.5]));
            }),
            z.map(({ x: c, z: f }) => {
              Ya = k.translate(9 * c - 38.9, -7.3, 11 * f + 17);
              C(u(18, 1), Ya.scale(1, 4), -12632257);
              [1.5, 8].map(n => C(u(18, 1), Ya.translate(0, n - 4).scale(1.5, .5, 1.5), 1285134745));
            }),
            C(
              x(w(
                Cb(
                  r(u(6), k.translate(0, 0, -36).scale(15, 1.2, 15), 1286779570),
                  r(u(z), k.translate(0, 0, -18).scale(4, 1.2, 6), 1285121650),
                ),
                ...l(6, c =>
                  l(6, f =>
                    r(
                      u(6),
                      k.translate(4.6 * f - 12 + 2 * (1 & c), 0, 4.6 * c - 50 + 2 * Math.sin(4 * f)).scale(2, 5, 2),
                      1286779570,
                    ))).flat(),
              )),
              k.translate(-38.9, -11.3, 17),
            ),
            dc(k.translate(-38.9, -8.4, -21), [0, 0, 12]),
            C(u(5), k.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), 1715411404),
            S(k.translate(-84, -0.5, 85).rotate(0, 45)),
            I(c => {
              c.h = () => gc(-123, 1.4, 55 + -65 * Ka);
              S(k.translate(0, -3, -4).rotate(0, 180));
              C(oc);
            }),
            dc(k.translate(-115, .2, -12), [0, 0, 3.5]),
            x(w(
              r(u(z), k.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), 1280917311),
              r(u(3), k.translate(0, 0, -5.5).scale(3, 2), 1281772697),
              ...[-1.2, 1.2].map(c => r(u(z), k.translate(c, -0.5, 1).scale(.14, .3, 6.5), 1275081650)),
            ))),
        q = (I(c => {
          c.h = () => {
            var f = Math.sin(1.1 * a);
            return k.translate.call(k, 0, -2, cb(Q[10].g, Q[11].g) * (0 > f ? -f : f) * -8.5 + 10);
          };
          l(2, f => C(m, k.translate(9 * f - 110 + (1 & f), 1.7, -12)));
        }),
          I(c => {
            c.h = () => {
              var f = Math.sin(2.1 * a);
              return k.translate.call(k, 0, -2, cb(Q[10].g, Q[11].g) * (0 > f ? -f : f) * -8.5 + 10);
            };
            l(2, f => C(m, k.translate(9 * (f + 2) - 110 + (1 & f), 1.7, -12)));
          }),
          I(c => {
            c.h = () => {
              var f = Math.sin(1.5 * a);
              return k.translate.call(
                k,
                0,
                -2,
                -8.5 * $a((1 - Q[10].g) * (1 - cb(Q[10].g, Q[11].g)), cb(Q[10].g, Q[11].g) * (0 > f ? -f : f)) + 10,
              );
            };
            l(3, f => C(m, k.translate(9 * f - 106, 1.7, -12)));
          }),
          C(
            x(w(
              Cb(
                r(u(z), k.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                r(u(z), k.translate(26.5, -0.6, 10).scale(17, 2, .5)),
              ),
              ...l(4, c => r(u(z), k.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9))),
              ...l(3, c => r(u(z), k.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            k.translate(-123, 0, -12),
            865697663,
          ),
          C(u(5), k.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), -10928321),
          C(u(z), k.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), 869059788),
          C(u(6), k.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), 867336089),
          S(k.translate(-116, -1.4, -18).rotate(0, 180)),
          l(3, c => {
            C(pc, k.translate(12 * c - 109, -9, -12), 1285134745);
            C(pc, k.translate(-77, -9, -12 * c - 20).rotate(0, 90), 1285134745);
          }),
          C(x(
            w(
              r(u(12), k.translate(-77, -13.9, -12).scale(4, 18.2, 4), 867349170),
              r(u(z), k.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), 865697638),
              r(u(z), k.translate(-77, 0, -14).scale(1.5, 2.2, 2), 865697638),
              r(u(12), k.translate(-77, 2.8, -12).scale(3, 5, 3), 865697638),
            ),
          )),
          C(u(z), k.translate(-115.5, -17, -12).scale(.5, 15, 2.2), 1285134745),
          C(u(z), k.translate(-77, -17, -50.5).scale(2.2, 15, .5), 1285134745),
          C(u(z), k.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), 1285134745),
          C(x(
            w(
              r(u(z), k.translate(-93, -5.8, -40).scale(9, 1, 5), 432852172),
              r(u(9), k.translate(-98, -5.8, -40).scale(3, 8, 3), 867349170),
            ),
          )),
          C(u(9), k.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), 1283424127),
          S(k.translate(-98, -4.4, -40).rotate(0, 90)),
          dc(k.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          C(x(
            w(
              Cb(
                r(u(6, 0, 0, .6), k.translate(-100, .7, 105.5).scale(8, 1, 11), 867349170),
                r(u(z), k.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), 867349170),
                r(u(z), k.translate(-91.2, .7, 107).scale(3, 1, 3.3), 867349170),
              ),
              r(u(5), k.translate(-100, .7, 113).scale(4, 3, 4), 867349170),
            ),
          )),
          l(4, c =>
            I(f => {
              f.h = () => {
                const n = cb(Q[8].i, Q[12].i);
                return k.translate(
                  (2 < c ? 2 * (1 - n) + n : 0) - 100,
                  n * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3) + .7,
                  115 + (1 & c ? -1 : 1) * (1 - Q[8].i) * (1 - Q[12].i) * -7
                    + (.05 > n ? .05 : n) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),
                );
              };
              C(
                u(6),
                k.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5),
                76.5 << 24 | 178.5 << 16 | 255 * (c / 12 + .5) << 8 | 255 * (.5 - c / 8),
              );
            })),
          I(c => {
            c.h = () => {
              const f = cb(Q[8].i, Q[12].i);
              return k.translate(2.5 * (1 - f) - 139.7, -3 * (1 - Q[8].g) + f * Math.sin(.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * f + 3), 0);
            };
            C(x(w(r(u(10), k.scale(6, 2, 6), 1283430681), r(u(10), k.scale(3.3, 6, 3.3), 2139068697))));
            Ya = k.translate(-7.5).rotate(0, 90);
            C(u(15), Ya.scale(3, 2.3, 3), 1281779302);
            C(u(10), Ya.scale(2, 2.5, 2), 1286786124);
            C(u(5), Ya.scale(1, 3), 2139062143);
            S(Ya.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(f =>
              C(nc, k.rotate(90 * -f, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), 869072895)
            );
            dc(k.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(c => {
            C(u(15, 1), k.translate(-7.5 * c - 100, 3.7, 96).scale(.8, 4, .8), 2134064537);
            [7.2, 1.5].map(f => C(u(15, 1), k.translate(-7.5 * c - 100, f + .7, 96).scale(1.1, .5, 1.1), 1714634111));
            C(nc, k.translate(-5 * c - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), 13434879);
            C(
              x(w(
                r(u(z), k.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), 1719631743),
                r(u(z), k.scale(3, 3, 10), 2134064537),
                r(u(30, 1), k.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), 2134064537),
                r(u(5), k.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), 2134064537),
                r(u(5), k.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), 2134064537),
              )),
              k.translate(c - 100, .7, 97),
            );
          }),
          I(c => {
            c.h = () => k.translate(-100, .6 - 6 * Q[12].g, 96.5).scale(.88, 1.2);
            C(g);
          }),
          [...r(u(28, 1), k.scale(8, 1, 8), 863138418), ...r(u(5), k.translate(0, 1).scale(1, .2), 860638284)]);
      I(c => {
        c.h = () => k.translate(-80, 1, 106).rotate(0, 40 + Aa);
        C(x(
          w(r(u(28, 1), k.scale(8, 1, 8), 863138418), r(u(z), k.translate(0, 0, -5.5).scale(1.5, 3, 2.5), 863138418)),
        ));
        C(u(8), k.translate(0, 2).scale(3, 1.5, 3), 431141554);
        C(u(5), k.translate(0, 2).scale(1, 2), 860638284);
        dc(k.translate(0, 3), ...sb(10).map(({ x: f, z: n }) => [5.6 * f, 5.6 * n, 2.5]));
      });
      I(c => {
        c.h = () => k.translate(-64, 1, 106).rotate(0, Ba);
        C(x(w(r(u(28, 1), k.translate(0, 2).scale(8, 1, 8), 1275068505), r(u(z), k.scale(9, 5, 2), 1275068492))));
        C(q);
        [-1, 1].map(f =>
          C(nc, k.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), 13434879)
        );
      });
      I(c => {
        c.h = () => k.translate(-48, 1, 106).rotate(0, 180 - Ba);
        C(x(
          w(
            r(u(30, 1), k.translate(0, 2).scale(8, 1, 8), 1275068505),
            r(u(z), k.translate(7).scale(9, 5, 2), 1275068492),
            r(u(z), k.translate(0, 0, 7).scale(2, 5, 9), 1275068492),
          ),
        ));
        C(q);
      });
      I(c => {
        c.h = () => k.translate(-48, 1, 90).rotate(0, 270 + Ba);
        C(x(
          w(
            r(u(30, 1), k.translate(0, 2).scale(8, 1, 8), 1275068505),
            r(u(z), k.translate(7).scale(9, 5, 2), 1275068492),
            r(u(z), k.translate(0, 0, -7).scale(2, 5, 9), 1275068492),
          ),
        ));
        C(q);
      });
      C(u(z), k.translate(-56, 1, 106).scale(.7, .8, 2.5), 867349170);
      C(u(z), k.translate(-48, 1, 98).scale(2.5, .8, .7), 867349170);
      C(u(z), k.translate(-39, .4, 90).scale(2, 1, 2), 1286779570);
      C(u(z), k.translate(-34.2, .4, 90).scale(3, 1, 3), 1286779570);
      S(k.translate(-34, 2.7, 96).rotate(-12, 0));
      C(u(5), k.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), -1719697613);
      [863144985, 1283424051, 1720480332].map((c, f) =>
        I(n => {
          n.h = () =>
            k.translate(
              0,
              (1 - Q[13].i) * (1 - Q[14].i) * 3 + cb(Q[13].i, Q[14].i) * Math.sin(1.5 * a + 1.5 * f) * 4.7,
            );
          C(u(8), k.translate(-23.5, f / 1.5 - .4, 90 + 6.8 * f).scale(3.6, 2 - f / 1.5, 3.6).rotate(0, 22.5), c);
          2 === f && C(u(6), k.translate(-29, .4, 90).scale(2.4, 1, 2.8), 1285141145);
          1 === f && C(u(z), k.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), 1286773145);
        })
      );
      C(x(
        w(
          r(u(6, 0, 0, .3), k.translate(0, -0.92, 95).scale(14, 2, 14), 869059788),
          r(u(5), k.translate(0, 0, 95).scale3d(6), 2135706700),
        ),
      ));
      [8, -6.1].map((c, f) =>
        l(3, n => C(pc, k.translate(6 * n - 6, c - (1 & n), 111 - .2 * (1 & n) - f), 1 & n ? 1283424127 : 2136562009))
      );
      [-1, 1].map(c => C(nc, k.translate(-8 * c, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), 13434879));
      S(k.translate(0, 1.7, 82).rotate(0, 180));
      C(u(5), k.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), 1716276351);
      C(x(
        w(
          Cb(
            r(u(z), k.translate(0, 16, 110.5).scale(12, 1, 3), 1716276351),
            r(u(z), k.translate(0, 16, 111).scale(3, 1, 3.8), 1716276351),
          ),
          r(u(5), k.translate(0, 16, 103.5).scale(5.5, 5, 5.5), 1716276351),
        ),
      ));
      I(c => {
        c.h = () => {
          const f = Math.sin(a);
          return k.translate(-2 * f).rotate(0, 0, 25 * f);
        };
        C(u(3), k.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), 1716276351);
        [22, 30].map(f => {
          C(u(6), k.translate(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), 1722987186);
          C(u(z), k.translate(0, 6.2, f + 95).scale(.5, 11, .5), 1716276351);
        });
      });
      C(u(6), k.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), 1286773119);
      C(u(z), k.translate(0, 16, 129).scale(1.5, 1, 2), 1286773119);
      C(u(7), k.translate(0, 16.2, 133).scale(5, 1, 5), 1721335654);
      I(c => {
        c.h = () => {
          const f = cb(cb((Q[14].g + Q[14].i) / 2, Q[13].i), (Q[15].g + Q[15].i) / 2);
          return k.translate(0, 16 * f, 8.5 * bb(2 * f - 1) + 95);
        };
        C(u(5), k.scale(5, 1.1, 5), 1716276351);
        C(u(5), k.scale(5.5, .9, 5.5), 1715420991);
        S(k.translate(0, 1.5, -1).rotate(0, 180));
      });
      dc(k.translate(0, 3, 95), ...sb(9).map(({ x: c, z: f }) => [9 * c, 9 * f, 4]));
      dc(k.translate(0, 19, 134), [0, 0, 3.5]);
    }),
    Xa = [
      I(() => {
        [0, 180].map(e => C(nc, k.rotate(0, e).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), 13434879));
        C(vb(20), k.translate(0, 1).scale(.5, .5, .5), 6704383);
        const b = r(
          x(w(u(15, 1), r(u(z), k.translate(0, 0, 1).scale(2, 2, .5)))),
          k.rotate(-90, 0).scale(.1, .05, .1),
          5000268,
        );
        [-1, 1].map(e => C(b, k.translate(.2 * e, 1.2, .4).rotate(0, 20 * e, 20 * e)));
        C(u(z), k.translate(0, .9, .45).scale(.15, .02, .06), 5000268);
        C(vb(20), k.scale(.7, .8, .55), 6704383);
      }),
      ...[-1, 1].map(b =>
        I(() => {
          C(u(10, 1), k.translate(.3 * b, -0.8).scale(.2, .7, .24), 6704383);
        })
      ),
    ],
    Sa = I(() => {
      C(u(6, 1), k.scale(.13, 1.4, .13), 427773004);
      C(u(8), k.translate(0, 1).scale(.21, .3, .21), 3375103);
      C(u(3), k.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), 422785843);
    }, 0),
    Wa = I(() => {
      C(u(6), k.scale(.8, 1, .8), 8342783);
    }, 0),
    Ta = I(() => {
      C(
        vb(40, 30, (b, e, g) => {
          const h = e / 30, m = .05 * b * Math.PI, q = h ** .6 * Math.PI / 2;
          b = h * h * Math.sin(b * Math.PI * .35) / 4;
          return 29 === e
            ? { x: g.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(m) * Math.sin(q),
              y: Math.cos(h * Math.PI) - h - b,
              z: Math.sin(m) * Math.sin(q) + Math.sin(b * Math.PI * 2) / 4,
            };
        }),
        k.scale3d(.7),
        16777215,
      );
      [-1, 1].map(b => C(vb(15), k.translate(.16 * b, .4, -0.36).scale3d(.09)));
    }, 0),
    hC.getContext("webgl2"));
for (const b in Z) {
  Z[b[0] + [...b].reduce((e, g, h) => (e * h + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[b];
}
setTimeout(() => {
  let b = 0, e = 6;
  const g = () => {
      if (h4.innerHTML += ".", !--e) {
        let c = 0, f = 0, n = 1, D = 0, A = 0, P = 0, U = !1, ha, Y, y, O, N, aa, G, ca, W, X;
        const M = { x: 0, y: 0, z: 0 },
          la = new Int32Array(256),
          Pa = () => {
            const { u: t, I: v } = Q[va], { x: E, y: F, z: B } = v.transformPoint({ x: 0, y: 8, z: -3 });
            p.x = M.x = E;
            p.y = M.y = G = F;
            p.z = M.z = B;
            Y =
              aa =
              N =
              y =
              O =
                0;
            n = 1;
            c = f = t?.F || 1;
          },
          wa = () => {
            let t = 0,
              v = 0,
              E = (NO_INLINE(() => {
                let ba = 0, R = 0, na = 0, Ca = 0, Da = 0;
                la.fill(0);
                for (let xa = 0; 31 > xa; ++xa) {
                  let lb = 0;
                  const oa = 512 * xa;
                  for (let Ua = 0; 128 > Ua; Ua++) {
                    let pa = oa + 4 * Ua;
                    var Fa = (Ea[pa] + Ea[1 + pa]) / 255;
                    if (pa = Ea[2 + pa], 14 < Ua && 114 > Ua && (lb += Fa), pa && Fa) {
                      Fa = la[pa] + 1, la[pa] = Fa, ba > Fa || (ba = Fa, R = pa);
                    }
                  }
                  3 > lb && 5 < xa && (Ca += xa / 32);
                  3 < lb && (7 < xa && (na += xa / 15), Da = 1);
                }
                R && (Da = 1);
                n ? R && (n = 0, f = R) : f = R || c;
                c = R;
                Y = Da;
                y = J(y, Da ? 6.5 : 8, 4);
                M.y += na / 41 - (Da ? 1 : y) * Ca / 41 * y * d;
              })(),
                NO_INLINE(() => {
                  for (let Da = 32; 128 > Da; Da += 2) {
                    var ba = 0;
                    let Fa = 0;
                    var R = 0;
                    let xa = 0;
                    const lb = 512 * Da;
                    for (let oa = Da >> 1 & 1; 128 > oa; oa += 2) {
                      var na = lb + 4 * oa;
                      const Ua = lb + 4 * (127 - oa), pa = Ea[na] / 255, Hb = Ea[1 + Ua] / 255;
                      var Ca = oa / 63.5 - 1;
                      Ca = 1 - (0 > Ca ? -Ca : Ca);
                      if (
                        10 < oa && 118 > oa
                        && (ba = $a(ba, $a(pa * Ca, pa * Ea[Ua] / 127.5)),
                          Fa = $a(Fa, $a(Hb * Ca, Hb * Ea[1 + na] / 255))), 54 > oa || 74 < oa
                      ) {
                        na = (1 - Ca) * (Hb < pa ? pa : Hb) / 3,
                          .001 < na && (64 > oa && na > R ? R = na : 64 < oa && na > xa && (xa = na));
                      }
                    }
                    R = xa - R;
                    ba = Fa - ba;
                    (0 > R ? -R : R) > (0 > t ? -t : t) && (t = R);
                    (0 > ba ? -ba : ba) > (0 > v ? -v : v) && (v = ba);
                  }
                })(),
                (Ub[0] ? 1 : 0) + (Ub[2] ? -1 : 0) + ia),
              F = (Ub[1] ? 1 : 0) + (Ub[3] ? -1 : 0) + ja;
            var B = navigator.getGamepads()[0];
            if (B) {
              var K = R => ba[R]?.pressed || 0 < ba[R]?.value;
              const ba = B.buttons;
              B = B.axes;
              var L = K(1) || K(3) || K(2) || K(0);
              L !== U && (U = L) && (Ub[5] = 1);
              E += (.2 < ab(-B[0]) ? -B[0] : 0) + (K(14) ? 1 : 0) + (K(15) ? -1 : 0);
              F += (.2 < ab(-B[1]) ? -B[1] : 0) + (K(12) ? 1 : 0) + (K(13) ? -1 : 0);
              Na && (.3 < ab(B[2]) && (Mb += 80 * B[2] * d), .3 < ab(B[3]) && (Lb += 80 * B[3] * d));
            }
            .05 > (0 > F ? -F : F) && (F = 0);
            .05 > (0 > E ? -E : E) && (E = 0);
            K = Math.atan2(F, E);
            B = bb(Math.hypot(F, E));
            var V = (E = B * Math.cos(K), F = B * Math.sin(K), bb(1 - 5 * $a(0 > t ? -t : t, 0 > v ? -v : v)));
            L =
              (f || (t += N * V * d, v += aa * V * d),
                N = J(N, 0, Y ? 8 : 4),
                aa = J(aa, 0, Y ? 8 : 4),
                O = J(O, Y ? (E || F ? Y ? 7 : 4 : 0) * V : 0, Y ? .1 < V ? 10 : E || F ? 5 : 7 : 1),
                Na ? Mb * Za : Math.PI);
            V = Math.sin(L) * O * d;
            var qa = Math.cos(L) * O * d;
            L = (t -= E * qa - F * V, v -= E * V + F * qa, 1 === Db[f].H && Db[f].l || k);
            V = L.inverse();
            if (
              V.m41 = 0,
                V.m42 = 0,
                V.m43 = 0,
                { x: t, z: v } = V.transformPoint({ x: t, z: v, w: 0 }),
                M.x += t,
                M.z += v,
                f !== ha
            ) {
              ha = f;
              const { x: ba, y: R, z: na } = L.inverse().transformPoint(p);
              M.x = ba;
              M.y = R;
              M.z = na;
            }
            V = p.x;
            qa = p.z;
            const { x: qc, y: Pb, z: rc } = L.transformPoint(M);
            L = (p.x = qc, p.y = Pb, p.z = rc, ab(G - Pb));
            G = J(G, Pb + .1, 50 * L + 5);
            f && (N = (p.x - V) / d, aa = (p.z - qa) / d);
            (E || F) && (D = 90 - K / Za);
            A = eb(A, D, 8 * d);
            P += (B - P) * bb(10 * d);
          },
          Qa = t => {
            requestAnimationFrame(Qa);
            var v = (t - (Oa || t)) / 1e3;
            d = Ma ? Ub[5] = 0 : .066 < v ? .066 : v;
            a += d;
            ka += v;
            Oa = t;
            if (
              0 < d
              && (Z.b6o(36160, ra),
                Z.r9r(0, 0, 128, 128, 6408, 5121, Ea),
                Z.iay(36160, [36064]),
                NO_INLINE(wa)(),
                ec()), 0 < d
            ) {
              if (ca = fb(ca, p.x, .5, d), W = fb(W, p.y, 2, d), X = fb(X, p.z, .5, d), Na) {
                t = 200 * n,
                  Eb = J(Eb, p.x, 18 + t),
                  Fb = J(Fb, p.y + 1.5, 15 + t),
                  Gb = J(Gb, p.z, 18 + t),
                  Lb = $a(87 > Lb ? Lb : 87, -87);
              } else {
                if (
                  Eb = fb(Eb, ca, 1, 2 * d),
                    Fb = fb(Fb, W + 13 + 15 * n, 4, 2 * d),
                    Gb = fb(Gb, X + -18, 1, 2 * d),
                    t = Gb - X,
                    1 < (0 > t ? -t : t)
                ) {
                  v = Eb - ca;
                  const E = Fb - W;
                  Mb = 270 + Math.atan2(t, v) / Za;
                  Lb = 90 - Math.atan2(Math.hypot(t, v), E) / Za;
                }
              }
              if (Mb = db(Mb), 0 < d) {
                t = cb(Q[12].g, Q[13].g),
                  a > ua && (h4.innerHTML = "", ua = 0),
                  v = J(Ha, 0, 1),
                  Ha = v + (db(Ha + 60 * d) - v) * bb(Q[5].g - Q[6].i),
                  v = J(Aa, 0, 5),
                  Aa = v + (db(Aa + 56 * d) - v) * (0 > t ? 0 : 1 < t ? 1 : t),
                  v = J(Ba, 0, 4),
                  Ba = v + (db(Ba + 48 * d) - v) * (0 > t ? 0 : 1 < t ? 1 : t),
                  t = 2 * Q[9].i - 1,
                  Ka = J(Ka, Q[9].i, .2 + .3 * (0 > t ? -t : t)),
                  Ja = J(Ja, Ia ? Ja + (-9 - Ja) * bb(1.5 * d) : bb(a / 3), 1),
                  1 === Q[0].j && .8 < Q[0].g && (13 > ma
                    ? (Q[0].j = 0, Ia || (h4.innerHTML = "Not leaving now, there are souls to catch!", ua = a + 3))
                    : Ia
                      || (Ia
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", ua = a + 1 / 0),
                        Ia = 1)),
                  Ub[5] = 0,
                  (-25 > p.x || 109 > p.z ? -25 : -9) > p.y && Pa();
              }
            }
            t = Ma
              ? k.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + bb(hC.clientWidth / 1e3))
              : k.rotate(-Lb, -Mb, -0).invertSelf().translateSelf(-Eb, -Fb, -Gb);
            0 < d
              && (ya(),
                Z.b6o(36160, ra),
                Z.v5y(0, 0, 128, 128),
                Z.cbf(!0, !1, !0, !1),
                Z.c4s(16640),
                Z.uae(ya("b"), !1, k.rotate(0, 180).invertSelf().translateSelf(-p.x, -p.y, .3 - p.z).toFloat32Array()),
                kc(ya("c"), 0, 1),
                Z.cbf(!1, !0, !1, !1),
                Z.c4s(16640),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(ya("b"), !1, k.translate(-p.x, -p.y, -p.z - .3).toFloat32Array()),
                kc(ya("c"), 0, 1),
                Z.cbf(!0, !0, !0, !0),
                1 === f && (Q[9].j = -15 > p.x && 0 > p.z ? 1 : 0));
            ub();
            Z.v5y(0, 0, 2048, 2048);
            za[0](hc(t, .3, 55, 10));
            za[1](hc(t, 55, 177, 11));
            Z.b6o(36160, null);
            da();
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.c4s(16640);
            Z.uae(da("a"), !1, gb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
            Z.uae(da("b"), !1, t.toFloat32Array());
            Z.ubu(da("k"), Eb, Fb, Gb);
            za[0]();
            za[1]();
            kc(da("c"), !Na, 0);
            ea();
            Z.ubu(ea("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ka);
            Ma ? Z.ubu(ea("k"), 0, 0, 0) : Z.ubu(ea("k"), Eb, Fb, Gb);
            Z.uae(ea("b"), !1, t.inverse().toFloat32Array());
            Z.d97(4, 3, 5123, 0);
          },
          Ea = new Uint8Array(65536),
          Qb = m;
        var q = ic(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const ub = jc(
            ic(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          ea = jc(
            ic("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          ya = jc(
            q,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          da = jc(
            q,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          ra =
            (ea(),
              Z.ubh(ea("q"), 3),
              ya(),
              Z.uae(ya("a"), !1, gb(1.4, .59, 1e-4, 1)),
              da(),
              Z.ubh(da("q"), 3),
              Z.c5w());
        q = Z.c3z();
        const mb = Z.c25(),
          za = l(2, t => {
            let v;
            const E = Z.c25(), F = Z.c5w(), B = da(t ? "j" : "i");
            return da(),
              Z.ubh(da(t ? "h" : "g"), t),
              Z.b6o(36160, F),
              Z.d45([0]),
              Z.r9l(0),
              Z.a4v(33984 + t),
              Z.b9j(3553, E),
              Z.fas(36160, 36096, 3553, E, 0),
              Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              Z.t2z(3553, 10241, 9729),
              Z.t2z(3553, 10240, 9729),
              Z.t2z(3553, 34893, 515),
              Z.t2z(3553, 34892, 34894),
              Z.t2z(3553, 10243, 33071),
              Z.t2z(3553, 10242, 33071),
              K => {
                K
                  ? (v = K,
                    Z.b6o(36160, F),
                    Z.iay(36160, [36096]),
                    Z.c4s(256),
                    Z.uae(ub("b"), !1, v),
                    kc(ub("c"), !Na, 0))
                  : Z.uae(B, !1, v);
              };
          });
        let nb = 0, Ga, Ra;
        const sa = [],
          Ib = [],
          Jb = [],
          ta = [],
          Va = new Map(),
          T = new Int32Array(8),
          ob = t => {
            let { x: v, y: E, z: F } = Ra[t];
            H[0] = v;
            H[1] = E;
            H[2] = F;
            t = "" + (Ra.D ? Kb : T);
            let B = Va.get(t);
            return void 0 !== B
              ? (v = 3 * B, ta[v] = (ta[v++] + T[5]) / 2, ta[v] = (ta[v++] + T[6]) / 2, ta[v] = (ta[v] + T[7]) / 2)
              : (Va.set(t, B = Va.size), Ib.push(v, E, F, H[3]), Jb.push(T[4]), ta.push(T[5], T[6], T[7])),
              B;
          },
          Kb = new Int32Array(T.buffer, 0, 5),
          H = new Float32Array(T.buffer);
        for (Ga of Db) {
          for (Ra of (H[3] = Ga.H ? Ga.F : 0, Ga.s)) {
            const { x: t, y: v, z: E } = jb(Ra);
            T[4] = 0 | Ra.A;
            T[5] = 32767 * t;
            T[6] = 32767 * v;
            T[7] = 32767 * E;
            for (let F = 2, B = ob(0), K = ob(1); Ra.length > F; ++F) {
              sa.push(B, K, K = ob(F));
            }
          }
          Ga.s = null;
          Ga.v = nb;
          Ga.G = nb = sa.length;
        }
        Z.b11(34963, Z.c1b());
        Z.b2v(34963, new Uint16Array(sa), 35044);
        Z.b11(34962, Z.c1b());
        Z.b2v(34962, new Float32Array(Ib), 35044);
        Z.v7s(0, 4, 5126, !1, 0, 0);
        Z.b11(34962, Z.c1b());
        Z.b2v(34962, new Int16Array(ta), 35044);
        Z.v7s(1, 3, 5122, !0, 0, 0);
        Z.b11(34962, Z.c1b());
        Z.b2v(34962, new Uint32Array(Jb), 35044);
        Z.v7s(2, 4, 5121, !0, 0, 0);
        Z.e3x(0);
        Z.e3x(1);
        Z.e3x(2);
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        Z.b6o(36160, ra);
        Z.bb1(36161, q);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, q);
        Z.a4v(33987);
        Z.b9j(3553, mb);
        Z.fas(36160, 36064, 3553, mb, 0);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Qb);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        Xa.map((t, v) => {
          t.h = v
            ? () =>
              Xa[0].l.translate(0, P * bb(.45 * Math.sin(9.1 * a + Math.PI * (v - 1) - Math.PI / 2))).rotateSelf(
                P * Math.sin(9.1 * a + Math.PI * (v - 1)) * .25 / Za,
                0,
              )
            : () => k.translate(p.x, G, p.z).rotateSelf(0, A);
        });
        try {
          const [t, v, E, F, B] = JSON.parse(localStorage.DanteSP22);
          Q.map((K, L) => K.g = K.i = K.j = L ? 0 | t[L] : 0);
          ac.map((K, L) => K.j = 0 | v[L]);
          va = E;
          a = F;
          Ka = B;
        } catch (t) {
        }
        Ja = 0 > va ? 0 : 1 < va ? 1 : va;
        h4.innerHTML = "";
        ua = 0;
        bc();
        ec();
        NO_INLINE(Zb)();
        Pa();
        Eb = ca = p.x;
        Fb = (W = p.y) + 13;
        Gb = (X = p.z) + -18;
        requestAnimationFrame(Qa);
      }
    },
    h = () => {
      if (5 > b) {
        var q = 0, c = b++;
        let [A, P, U, ha, Y, y, O, N, aa, G, ca, W, X, M, la, Pa, wa, Qa, Ea, Qb, ub] = Nb[c];
        G = G * G * 4;
        for (const ea of [5513, 4562, 3891]) {
          let ya = 0, da = 0, ra, mb, za, nb, Ga;
          const Ra = [],
            sa = new Int32Array(768 * ea),
            Ib = 2 ** (W - 9) / ea,
            Jb = Math.PI * 2 ** (wa - 8) / ea,
            ta = Ea * ea & -2;
          for (let Va = 0; 11 >= Va; ++Va) {
            for (
              let T = 0, ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + Va];
              32 > T;
              ++T
            ) {
              const Kb = (32 * Va + T) * ea;
              for (var f = 0; 4 > f; ++f) {
                if (ra = 0, ob && (ra = ub[ob - 1].charCodeAt(T + 32 * f) - 40, ra += 0 < ra ? 106 : 0), ra) {
                  var n;
                  if (!(n = Ra[ra])) {
                    n = ra;
                    let H = void 0, t = void 0;
                    var D = ra;
                    let v = 0, E = 0;
                    const F = 2 > c ? Sb : Ob, B = 2 > c ? 1 > c ? Rb : Tb : Ob, K = new Int32Array(N + aa + G);
                    for (let L = 0, V = 0; N + aa + G > L; ++L, ++V) {
                      let qa = 1;
                      N > L ? qa = L / N : N + aa > L || (qa = (1 - (qa = (L - N - aa) / G)) * 3 ** (-ca / 16 * qa));
                      0 > V
                        || (V -= 4 * ea,
                          t = 0.003960 * 2 ** ((D + P - 256) / 12),
                          H = 0.003960 * 2 ** ((D + Y - 256) / 12) * (1 + (c ? 0 : 8e-4 * 9)));
                      K[L] = 80
                          * (F(v += t * qa ** (U / 32)) * A + B(E += H * qa ** (y / 32)) * ha
                            + (O ? (2 * Math.random() - 1) * O : 0))
                          * qa | 0;
                    }
                    n = Ra[n] = K;
                  }
                  for (let H = 0, t = 2 * Kb; n.length > H; ++H, t += 2) {
                    sa[t] += n[H];
                  }
                }
              }
              for (let H, t = 0; ea > t; ++t) {
                f = 0,
                  n = 2 * (Kb + t),
                  ((H = sa[n]) || Ga)
                  && (za = 0.003080 * X,
                    1 != c && 4 != c || (za *= Math.sin(Ib * n * Math.PI * 2) * Qb / 512 + .5),
                    za = 1.5 * Math.sin(za),
                    ya += za * da,
                    nb = (1 - M / 255) * (H - da) - ya,
                    da += za * nb,
                    H = 4 == c ? da : 3 == c ? nb : ya,
                    c || (H = 1 > (H *= 22e-5) ? -1 < H ? Math.sin(H / 4 * Math.PI * 2) : -1 : 1, H /= 22e-5),
                    H *= la / 32,
                    Ga = 1e-5 < H * H,
                    mb = Math.sin(Jb * n) * Pa / 512 + .5,
                    f = H * (1 - mb),
                    H *= mb),
                  ta > n || (f += sa[
                    n - ta
                    + 1
                  ] * Qa / 255,
                    H += sa[n - ta] * Qa / 255),
                  lc[q + n] += sa[n] = f,
                  ++n,
                  lc[q + n] += sa[n] = H;
              }
            }
          }
          q += sa.length;
        }
        setTimeout(h);
      } else {
        q = Wb.createBuffer(2, 5362944, 44100);
        for (c = 0; 2 > c; c++) {
          for (let A = c, P = q.getChannelData(c); 10725888 > A; A += 2) {
            P[A >> 1] = lc[A] / 65536;
          }
        }
        Vb.buffer = q;
        Vb.loop = !0;
      }
      g();
    },
    m = new Image();
  m.onload = m.onerror = () => {
    g();
  };
  m.src = mc;
  setTimeout(h, 50);
  NO_INLINE(fc)();
});
