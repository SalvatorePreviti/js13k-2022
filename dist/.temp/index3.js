let aa = !0,
  ha = 0,
  ja = 0,
  ka = 0,
  a = 0,
  la = 0,
  na = 0,
  va = 0,
  wa = 0,
  Ba = 0,
  Ca = 0,
  Ia = 0,
  Ja = 0,
  Ka = 0,
  d = .066,
  La,
  Ma,
  Na,
  Oa,
  Sa,
  Va,
  Wa,
  Xa,
  Ya;
const Za = Math.PI / 180,
  f = new DOMMatrix(),
  $a = (b, e) => e < b ? b : e,
  ab = b => 0 > b ? -b : b,
  bb = b => 0 > b ? 0 : 1 < b ? 1 : b,
  cb = (b, e) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > e ? 0 : 1 < e ? 1 : e)),
  db = b => Math.atan2(Math.sin(b *= Za), Math.cos(b)) / Za,
  eb = (b, e, h) => {
    b *= Za;
    e = (e * Za - b) % (2 * Math.PI);
    return (b + (2 * e % (2 * Math.PI) - e) * (0 > h ? 0 : 1 < h ? 1 : h)) / Za;
  },
  fb = (b, e, h, k) => {
    var m = e - b;
    b += Math.sign(e - b) * $a(0, (0 > m ? -m : m) ** .9 - h) * k * 2;
    return b + (e - b) * bb(k / 7);
  },
  l = (b, e) => Array.from(Array(b), (h, k) => e(k)),
  gb = (b, e, h, k) => [b, 0, 0, 0, 0, e, 0, 0, 0, 0, (k + h) / (h - k), -1, 0, 0, 2 * k * h / (h - k), 0],
  hb = ({ x: b, y: e, z: h }, k) => b * k.x + e * k.y + h * k.z,
  ib = ({ x: b, y: e, z: h }) => {
    var k = n;
    return Math.hypot(b - k.x, e - k.y, h - k.z) || 0;
  },
  jb = b => {
    let e = 0, h = 0, k = 0, m, q = b.at(-1);
    for (m of b) {
      e += (q.y - m.y) * (q.z + m.z), h += (q.z - m.z) * (q.x + m.x), k += (q.x - m.x) * (q.y + m.y), q = m;
    }
    return m = Math.hypot(e, h, k), e /= m, h /= m, k /= m, { x: e, y: h, z: k, w: e * q.x + h * q.y + k * q.z };
  },
  pb = (b, e) => {
    var h = kb;
    b *= 16;
    h[b++] = e.m11;
    h[b++] = e.m12;
    h[b++] = e.m13;
    h[b++] = e.m14;
    h[b++] = e.m21;
    h[b++] = e.m22;
    h[b++] = e.m23;
    h[b++] = e.m24;
    h[b++] = e.m31;
    h[b++] = e.m32;
    h[b++] = e.m33;
    h[b++] = e.m34;
    h[b++] = e.m41;
    h[b++] = e.m42;
    h[b++] = e.m43;
    h[b] = e.m44;
  },
  p = (b, e, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * e << 8 | 255 * b,
  qb = (b, e, h) => (b.D = h, b.A = e, b),
  rb = (b, e, h = b.A) =>
    qb(
      b.map(k =>
        ((
          { x: m, y: q, z: u },
          c,
        ) => ({ x: m, y: q, z: u } = c.transformPoint({ x: m, y: q, z: u }), { x: m, y: q, z: u }))(k, e)
      ),
      h,
      b.D,
    ),
  r = (b, e, h) => b.map(k => rb(k, e, h)),
  sb = (b, e = 0) =>
    l(b, h => {
      const k = Math.cos(2 * Math.PI * h / b);
      return { x: Math.sin(2 * Math.PI * h / b), y: 0, z: .01 > (0 > k ? -k : k) ? k : 0 > k ? k - e : k + e };
    }),
  tb = (b, e, h) =>
    b.map((k, m, { length: q }) => qb([k, e[q - m - 1], e[q - (m + 1) % q - 1], b[(m + 1) % q]], b.A, h)),
  v = (b, e, h = 0, k) => {
    k = b.length ? b : sb(b, k);
    b = rb(k, f.translate(0, 1).scale3d(0 < h ? h : 1));
    h = rb(k, f.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse();
    return [...tb(h, b, e), h, b];
  },
  ub = (
    b,
    e = b,
    h = (
      k,
      m,
    ) => (m *= Math.PI / e,
      { x: Math.cos(k *= 2 * Math.PI / b) * Math.sin(m), y: Math.cos(m), z: Math.sin(k) * Math.sin(m) }),
  ) => {
    const k = [];
    for (let m = 0; b > m; m++) {
      for (let q = 0; e > q; q++) {
        const u = qb([], 0, 1);
        k.push(u);
        u.push(h(m, q, u));
        q && u.push(h((m + 1) % b, q, u));
        e - 1 > q && u.push(h((m + 1) % b, q + 1 % e, u));
        u.push(h(m, q + 1 % e, u));
      }
    }
    return k;
  },
  wb = (b, e) => {
    var h, k, m, q = e.C;
    for (var u = 0; q.length > u; ++u) {
      if (-0.00008 > (m = hb(b, q[u]) - b.w) ? k = e : 8e-5 < m && (h = e), k && h) {
        k = [];
        m = [];
        q = e.C;
        u = e.B;
        let c = q.at(-1), g = hb(b, c) - b.w;
        for (const w of q) {
          h = hb(b, w) - b.w,
            8e-5 > g && m.push(c),
            -0.00008 < g && k.push(c),
            (8e-5 < g && -0.00008 > h || -0.00008 > g && 8e-5 < h)
            && (g /= h - g,
              c = { x: c.x + (c.x - w.x) * g, y: c.y + (c.y - w.y) * g, z: c.z + (c.z - w.z) * g },
              k.push(c),
              m.push(c)),
            c = w,
            g = h;
        }
        return {
          o: 2 < k.length && { C: qb(k, q.A, q.D), B: u, u: e },
          m: 2 < m.length && { C: qb(m, q.A, q.D), B: u, u: e },
        };
      }
    }
    return { o: h, m: k };
  },
  xb = (b, e, h = jb(e.C)) => {
    if (b) {
      const { o: k, m } = wb(b, e);
      k || m || b.s.push(e);
      k && (b.o = xb(b.o, k, h));
      m && (b.m = xb(b.m, m, h));
    } else {
      b = { x: h.x, y: h.y, z: h.z, w: h.w, s: [e], o: 0, m: 0 };
    }
    return b;
  },
  yb = (b, e, h) => {
    const k = [],
      m = (q, u) => {
        let { o: c, m: g } = wb(q, u);
        c || g || (0 < h * hb(q, e) ? c = u : g = u);
        c && (q.o ? m(q.o, c) : k.push(c));
        g && q.m && m(q.m, g);
      };
    for (const q of e.s) {
      m(b, q);
    }
    return k;
  },
  zb = (b, e) => b && (e(b), zb(b.o, e), zb(b.m, e)),
  Ab = b => b.length ? b.reduce((e, h) => xb(e, { C: h, B: 0, u: 0 }), 0) : b,
  Bb = b => (zb(b, e => {
    const h = e.m;
    e.m = e.o;
    e.o = h;
    e.x *= -1;
    e.y *= -1;
    e.z *= -1;
    e.w *= -1;
    for (const k of e.s) {
      k.B = !k.B;
    }
  }),
    b),
  Cb = (...b) =>
    b.reduce((e, h) => {
      const k = [];
      if (e = Ab(e), h) {
        h = Ab(h);
        zb(e, m => m.s = yb(h, m, 1));
        zb(h, m => k.push([m, yb(e, m, -1)]));
        for (const [m, q] of k) {
          for (const u of q) {
            xb(e, u, m);
          }
        }
      }
      return e;
    }),
  y = (b, ...e) => Bb(Cb(Bb(Ab(b)), ...e)),
  z = b => {
    const e = new Map(),
      h = new Map(),
      k = m => {
        if (m.u) {
          const q = e.get(m.u);
          q ? (h.delete(q), m = k(m.u)) : e.set(m.u, m);
        }
        return m;
      };
    return zb(b, m => {
      for (const q of m.s) {
        h.set(k(q), q.B);
      }
    }),
      Array.from(h, ([{ C: m }, q]) => {
        const u = m.map(({ x: c, y: g, z: w }) => ({ x: c, y: g, z: w }));
        return qb(q ? u.reverse() : u, m.A, m.D);
      });
  },
  B = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Db = [],
  E = (b, e = f, h) => La.s.push(...r(b, e, h)),
  J = (b, e = 1) => {
    const h = La;
    e = { l: f, F: Db.length, H: e, s: [] };
    return Db.push(La = e), b(e), La = h, e;
  };
var Eb = -11, Fb = 17, Gb = -90, Hb = 0, Mb = 0;
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
  Pb = b => .5 > b % 1 ? 1 : -1,
  Sb = b => b % 1 * 2 - 1,
  Tb = b => {
    b = b % 1 * 4;
    return 2 > b ? b - 1 : 3 - b;
  },
  Ub = [],
  Xb = () => {
    Ma || !aa ? Vb.disconnect() : Vb.connect(Wb.destination);
    b4.innerHTML = "Music: " + aa;
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
    let b = 0, e = 0, h = 0, k, m, q;
    const u = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Ub.length = ha = ja = 0;
      k = m = void 0;
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
      aa = !aa;
      Xb();
    };
    b5.onclick = () => Yb(!0);
    onclick = () => {
      q = 1;
      Ma || (Ub[5] = !0, Na && hC.requestPointerLock());
    };
    document.onvisibilitychange = onresize = onblur = u;
    onkeydown = onkeyup = ({ code: c, target: g, type: w, repeat: D }) => {
      D || ((g = !!w[5] && g === document.body) && ("Escape" === c || "Enter" === c && Ma)
        ? Ma && !q || Yb(!Ma)
        : (c = {
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
        }[c],
          5 === c ? g && (Ub[c] = 1) : Ub[c] = g));
    };
    onmousemove = ({ movementX: c, movementY: g }) => {
      Na && (c || g) && (Mb += .1 * c, Hb += .1 * g);
    };
    hC.ontouchstart = c => {
      if (!Ma) {
        for (const g of c.changedTouches) {
          Na && g.pageX > hC.clientWidth / 2 ? k || (k = g, b = Mb, e = Hb) : m = m || g;
        }
        h = ka;
      }
    };
    hC.ontouchmove = ({ changedTouches: c }) => {
      if (!Ma) {
        for (const { pageX: g, pageY: w, identifier: D } of c) {
          k?.identifier === D && (Mb = b + (g - k.pageX) / 3, Hb = e + (w - k.pageY) / 3),
            m?.identifier === D
            && (ha = -(g - m.pageX) / 18,
              ja = -(w - m.pageY) / 18,
              ha = .35 > (0 > ha ? -ha : ha) ? 0 : .8 * ha,
              ja = .35 > (0 > ja ? -ja : ja) ? 0 : .8 * ja);
        }
      }
    };
    hC.ontouchend = c => {
      for (const g of c.changedTouches) {
        g.identifier === k?.identifier && (k = void 0), g.identifier === m?.identifier && (m = void 0, ja = ha = 0);
      }
      c.preventDefault();
      c = ka - h;
      (!h || .02 < c && .4 > c) && (Ub[5] = !0);
    };
    oncontextmenu = () => !1;
    u();
    Yb(!0);
  },
  K = (b, e, h) => b + (e - b) * bb(1 - Math.exp(-h * d)),
  $b = ({ j: b }) => b,
  S = [],
  ac = [],
  bc = () => {
    la = ac.reduce((b, e) => b + e.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[la];
  },
  cc = () => {
    bc();
    localStorage.DanteSP22 = JSON.stringify([S.map($b), ac.map($b), va, a, Ka]);
  },
  n = { x: 0, y: 0, z: 0 },
  dc = (b, e, h) =>
    f.translate(b + Math.sin(a + 2) / 5, e + Math.sin(.8 * a) / 3, h).rotateSelf(
      2 * Math.sin(a),
      Math.sin(.7 * a),
      Math.sin(.9 * a),
    ),
  ec = b => {
    const e = La,
      h = S.length,
      k = {
        j: 0,
        h: 0,
        i: 0,
        u: e,
        g() {
          const m = k.j, q = k.h, u = k.i, c = e.l.multiply(b);
          k.I = c;
          2.9 > ib(c.transformPoint()) && Ub[5] && (.3 > q || .7 < q)
            && (k.j = m ? 0 : 1, h && (Ia || (h4.innerHTML = "* click *", na = a + 1)), va = h, cc());
          k.h = K(q, m, 4);
          k.i = K(u, m, 1);
          k.l = c.rotate(60 * k.h - 30, 0).translateSelf(0, 1);
        },
      };
    S.push(k);
    E(v(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    E(v(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    E(v(B), b.translate(0, -0.4).scale(.5, .1, .5), p(.5, .5, .4));
  },
  fc = (b, ...e) => {
    let h = -1, k = 0, m = 0, q = 0, u = 0, c = 0, g = 3, w = 1;
    const D = {
        j: 0,
        g() {
          if (!D.j) {
            var H = 1, da = 1 / 0;
            for (var X of ia) {
              var Y = X.w, O = Math.hypot(A - X.x, Q - X.z), ma = O - Y;
              Pa ||= O < Y;
              0 < ma && da > ma && (da = ma, Z = X);
              Y = O / Y;
              H = H < Y ? H : Y;
            }
            if (!Pa) {
              da = Z.x;
              X = Z.z;
              Y = Z.w;
              O = A - da;
              ma = Q - X;
              let xa = Math.hypot(O, ma), Qa = Math.atan2(-ma, O);
              w && (m = (Math.random() - .5) * Math.PI / 2, g = $a(1, g / (1 + Math.random())));
              Qa += m;
              h = -Math.cos(Qa);
              k = Math.sin(Qa);
              .1 < xa && (xa = (xa < Y ? xa : Y) / (xa || 1), A = O * xa + da, Q = ma * xa + X);
            }
            w = Pa;
            g = K(g, 3 + 6 * (1 - H), 3 + H);
            P = K(P, A = K(A, A + h, g), g);
            ba = K(ba, Q = K(Q, Q + k, g), g);
            q = eb(q, Math.atan2(P - u, ba - c) / Za - 180, 3 * d);
            u = P;
            c = ba;
            H = (D.l = b.multiply(
              M.l.translate(P, 0, ba).rotateSelf(0, q).skewXSelf(7 * Math.sin(2 * a)).skewYSelf(
                7 * Math.sin(1.4 * a),
              ),
            )).transformPoint();
            if (1.5 > ib(H)) {
              D.j = 1;
              H = [
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
              ][la] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              var Pa = la && 12 > la ? 5 : 7;
              Ia || (h4.innerHTML = H, na = a + Pa);
              cc();
            }
          }
          D.j
            && (H = R % 4 - 2,
              D.l = Db[2].l.translate(
                R % 4 * 1.2 - 1.7 + Math.sin(a + R) / 7,
                -2,
                1.7 * (R / 4 | 0) - 5.5 + (0 > H ? -H : H) + Math.cos(a / 1.5 + R) / 6,
              ));
        },
      },
      M = La,
      R = ac.length,
      ia = e.map(([H, da, X]) => ({ x: H, z: da, w: X }));
    let Z = ia[0], { x: A, z: Q } = Z, P = A, ba = Q;
    ac.push(D);
  },
  gc = () => {
    for (const b of Db) {
      b.g && (b.l = b.g(b));
    }
    for (const b of S) {
      b.g();
    }
    for (const b of ac) {
      b.g();
    }
  },
  kc = () => {
    let b;
    J(() => {
      E([B.slice(1)], f.translate(-2).scale3d(3).rotate(90, 0));
    }, 0);
    J(() => {
      const e = () => {
          var c = S[2].i, g = 1 - S[4].i;
          return c < g ? c : g;
        },
        h = (c, g, w) =>
          J(D => {
            D.g = () => f.translate(e() * Math.sin(3 * c + a * c) * g);
            B.map(({ x: M, z: R }) => {
              E(v(11, 1), f.translate(4 * M, 4, w + 4 * R).scale(.8, 3, .8), p(.5, .3, .7, .6));
              E(v(B), f.translate(4 * M, 7, w + 4 * R).scale(1, .3), p(.5, .5, .5, .3));
            });
            E(z(y(
              r(v(B), f.translate(0, 0, w).scale(5, 1, 5), p(.8, .8, .8, .3)),
              ...[-1, 1].map(M =>
                r(v(B), f.translate(5 * M, .2, w).rotate(0, 0, -30 * M).scale(4, 1, 2), p(.8, .8, .8, .3))
              ),
            )));
            E(v(B), f.translate(0, -3, w).scale(8, 2, 8), p(.4, .4, .4, .3));
          }),
        k = (J(c => {
          c.g = () => dc(-12, 4.2, 40 * Ja - 66);
          E(hc);
          ec(f.translate(0, -3, 4));
        }),
          l(7, c => r(v(6, 1), f.translate(4 * (c / 6 - .5), 3).scale(.2, 3, .2), p(.3, .3, .38))).flat()),
        m = (fc(f.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          fc(
            f.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...sb(18).map(({ x: c, z: g }) => [7 * c, 10 * g, 4.5 - 2 * (0 > c ? -c : c)]),
          ),
          E(v(B), f.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), p(.8, .8, .8, .2)),
          B.map(({ x: c, z: g }) => E(v(6), f.translate(3 * c, 3, 15 * g).scale(.7, 4, .7), p(.6, .3, .3, .4))),
          [-23, 22].map(c => E(v(B), f.translate(0, 0, c).scale(3, 1, 8), p(.9, .9, .9, .2))),
          [-15, 15].map((c, g) => {
            E(v(B), f.translate(0, 6.3, c).scale(4, .3, 1), p(.3, .3, .3, .4));
            E(v(B), f.translate(0, 1, c).scale(3, .2, .35), p(.5, .5, .5, .3));
            J(w => {
              w.g = () => f.translate(0, 4.7 * -S[g + 1].h, c);
              E(k);
            });
          }),
          l(5, c =>
            l(2, g =>
              E(
                ic,
                f.translate(18.5 * (g - .5), 0, 4.8 * c - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2),
                p(1, 1, .8, .2),
              ))),
          E(v(B), f.translate(3, 1.5, -20).scale(.5, 2, 5), p(.7, .7, .7, .2)),
          E(v(B), f.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), p(.75, .75, .75, .2)),
          E(v(5), f.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), p(.6, .3, .3, .4)),
          ec(f.translate(-5.4, 1.5, -19).rotate(0, -90)),
          E(v(B), f.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), p(.8, .2, .2, .5)),
          E(z(
            y(
              Cb(
                r(v(6, 0, 0, .3), f.translate(8, -3, -4).scale(13, 1, 13), p(.7, .7, .7, .2)),
                r(v(6), f.translate(0, -8).scale(9, 8, 8), p(.4, .2, .5, .5)),
                r(v(6, 0, 0, .3), f.translate(0, -0.92).scale(13, 2, 13), p(.8, .8, .8, .2)),
              ),
              r(v(5), f.scale(5, 30, 5), p(.4, .2, .6, .5)),
              r(v(5, 0, 1.5), f.translate(0, 1).scale(4.5, .3, 4.5), p(.7, .5, .9, .2)),
              r(v(B), f.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), p(.5, .5, .5, .5)),
              r(v(6), f.translate(15, -1.5, 4).scale(3.5, 1, 3.5), p(.5, .5, .5, .5)),
            ),
          )),
          J(c => {
            c.g = () =>
              f.translate(
                0,
                .01 < S[3].h ? (5 * Math.cos(1.5 * a) + 2) * S[3].i * (1 - S[2].h) + -15 * (1 - S[3].h) : -500,
                0,
              );
            ec(f.translate(0, 1.2));
            E(v(5), f.translate(0, -0.2).scale(5, 1, 5), p(.6, .65, .7, .3));
          }),
          ec(f.translate(15, -2, 4)),
          h(.7, 12, 35),
          h(1, 8.2, 55),
          J(c => {
            c.g = () => f.translate(e() * Math.sin(a / 1.5 + 2) * 12);
            E(
              z(y(
                Cb(
                  r(v(B), f.scale(1.5, 1, 5), p(.9, .9, .9, .2)),
                  r(v(6), f.scale(4, 1, 5), p(.9, .9, .9, .2)),
                  r(v(B), f.translate(0, -2).scale(2, 3.2, 1.9), p(.3, .8, .5, .5)),
                  r(v(16, 1, 0, 4), f.scale(1, 1, 1.5).rotate(0, 90), p(.9, .9, .9, .2)),
                ),
                r(v(B), f.scale(1.3, 10, 1.3), p(.2, .7, .4, .6)),
              )),
              f.translate(0, 0, 45),
            );
            fc(f.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          J(c => {
            c.g = () => f.translate(9.8 * (1 - e()));
            E(v(3), f.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), p(.3, .6, .6, .2));
            E(v(8), f.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), p(.8, .8, .8, .2));
            E(v(B), f.translate(-23, -3, 55).scale(5.2, 1.7, 3), p(.5, .5, .5, .3));
            E(v(B), f.translate(-23, -2.2, 62).scale(3, 1, 4), p(.5, .5, .5, .3));
            ec(f.translate(-23, -0.5, 66.5));
          }),
          E(v(B), f.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), p(.9, .9, .9, .2)),
          J(c => {
            c.g = () => f.translate(0, bb(1 - 5 * e()) * cb(S[4].h, S[5].h) * Math.sin(1.35 * a) * 4);
            E(v(B), f.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), p(.7, .7, .7, .2));
            E(
              z(y(r(v(B), f.scale(3, 1.4, 2.7)), r(v(B), f.scale(1.2, 8, 1.2)))),
              f.translate(-33, -3, 55),
              p(.7, .7, .7, .2),
            );
          }),
          J(c => {
            c.g = () => f.translate(0, 0, bb(1 - 5 * e()) * cb(S[4].h, S[5].h) * Math.sin(.9 * a) * 8);
            E(z(
              y(
                r(v(B), f.translate(-27, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2)),
                r(v(B), f.translate(-27, -3, 55).scale(1, 3), p(.9, .9, .9, .2)),
              ),
            ));
            E(v(B), f.translate(-39, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2));
          }),
          J(c => {
            c.g = () => f.translate(0, -6.5 * S[4].i);
            E(v(6), f.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), p(.7, .7, .7, .4));
          }),
          [...r(
            z(Cb(
              r(v(B), f.translate(0, -3).scale(11, 1.4, 3), p(.9, .9, .9, .2)),
              y(
                r(v(6), f.rotate(0, 0, 90).scale(6, 8, 6), p(.3, .6, .6, .3)),
                r(v(4, 0, .01), f.translate(0, 6).scale(12, 2, .75).rotate(0, 45), p(.3, .6, .6, .3)),
                r(v(6), f.rotate(0, 0, 90).scale(5, 12, 5), p(.3, .6, .6, .3)),
                ...[5, 0, -5].map(c =>
                  r(v(5), f.translate(c, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), p(.3, .6, .6, .3))
                ),
              ),
            )),
            f,
          )]),
        q =
          (E(m, f.translate(-53, 0, 55)),
            E(v(6), f.translate(-61.3, -2.4, 49).scale(3, 1, 5), p(.4, .6, .6, .3)),
            E(v(7), f.translate(-57, -2.6, 46).scale(4, 1, 4), p(.8, .8, .8, .3)),
            ec(f.translate(-55, -1.1, 46).rotate(0, 90)),
            J(c => {
              c.g = () => f.translate(-75, (1 - S[5].i) * (1 - S[6].h) * 3, 55).rotate(180 * (1 - S[5].i) + Ca, 0);
              E(m);
            }, 2),
            E(v(B), f.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), p(.7, .7, .7, .2)),
            E(v(3, 0, -0.5), f.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), p(.8, .8, .8, .2)),
            E(
              z(y(
                Cb(
                  r(v(B), f.translate(-100, -2.5, 55).scale(8, 1, 8), p(.8, .8, .8, .2)),
                  r(v(B), f.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), p(.8, .8, .8, .2)),
                  r(v(B), f.translate(-100, -2.6, 70).scale(3, 1.1, 7), p(.8, .8, .8, .2)),
                  r(v(B), f.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), p(.8, .8, .8, .2)),
                  r(v(6), f.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), p(.6, .6, .6, .3)),
                  r(v(B), f.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), p(.8, .8, .8, .2)),
                  r(v(B), f.translate(-100, .42, 92).scale(3, 1.1, 4.1), p(.8, .8, .8, .2)),
                ),
                r(v(8), f.translate(-100, -1, 55).scale(7, .9, 7), p(.3, .3, .3, .4)),
                r(v(8), f.translate(-100, -2, 55).scale(4, .3, 4), p(.4, .4, .4, .5)),
                r(v(8), f.translate(-100, -3, 55).scale(.6, 1, .6), p(.4, .4, .4, .5)),
              )),
              f,
            ),
            fc(f.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            fc(f.translate(-89, .2, 80), [0, 0, 6]),
            E(z(
              y(
                r(v(B), f.translate(-100, 1, 63).scale(7.5, 4), p(.5, .5, .5, .4)),
                r(v(B), f.translate(-100, 0, 70).scale(2, 2, 10), p(.5, .5, .5, .4)),
                r(v(20, 1), f.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), p(.5, .5, .5, .4)),
              ),
            )),
            J(c => {
              c.g = () => f.translate(-99.7, 5.3 * -S[6].h - 2, 63.5);
              E(k);
            }),
            B.map(({ x: c, z: g }) => {
              E(v(6), f.translate(7 * c - 100, -3, 7 * g + 55).scale(1, 8.1), p(.6, .15, .15, .8));
              [4, -0.4].map(w =>
                E(v(6), f.translate(7 * c - 100, w, 7 * g + 55).scale(1.3, .5, 1.3), p(.4, .2, .2, .8))
              );
            }),
            l(7, c => {
              E(
                v((23 * c + 1) % 5 + 5, 0, .55),
                f.translate(5 * Math.sin(c) - 101 + c, -2.3 - c, 44.9 - 2.8 * c).scaleSelf(
                  5 + c / 2,
                  1 + c / 6,
                  5 + c / 3,
                ),
                p(.5 - c / 17, .5 - (1 & c) / 9, .6, .3),
              );
            }),
            E(v(B), f.translate(-87, -9.5, 24).scale(7, 1, 3), p(.4, .5, .6, .4)),
            E(v(4), f.translate(-86, -9.2, 27).scale(5, 1, 5), p(.5, .6, .7, .3)),
            E(v(18, 1), f.translate(-86, -9, 31).scale(1.5, 1, 1.5), p(.3, .3, .4, .1)),
            ec(f.translate(-86, -7.5, 31)),
            J(c => {
              c.g = () => f.translate(0, 3.5 * (1 - $a(S[6].h, S[7].h)) + cb(S[7].i, S[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(g =>
                E(v(B), f.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), p(.2, .5, .6, .2))
              );
            }),
            J(c => {
              c.g = () => {
                const g = cb(S[7].i, S[6].i);
                return f.translate(0, g * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + g) * g);
              };
              [6, 18].map(g => E(v(B), f.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), p(.1, .4, .5, .2)));
            }),
            E(
              z(y(
                Cb(
                  r(v(B), f.scale(11, 1, 13), p(.3, .4, .6, .3)),
                  r(v(5), f.translate(0, 0, -7).scale(2, 1.2, 2), p(.2, .4, .7, .3)),
                  r(v(5), f.scale(9, 1.2, 9), p(0, .2, .3, .5)),
                ),
                r(v(5), f.scale(5.4, 5, 5.4), p(0, .2, .3, .5)),
              )),
              f.translate(-38.9, -11.3, 17),
            ),
            ec(f.translate(-38.9, -9.6, 10)),
            J(c => {
              c.g = () => f.translate(0, -7.3 * S[7].i);
              E(
                z(y(
                  Cb(
                    r(v(5), f.translate(0, 2).scale(5, 7, 5).skewY(8), p(.2, .4, .5, .5)),
                    r(v(5), f.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), p(.25, .35, .5, .5)),
                    r(v(5), f.translate(0, 9).scale(.6, 7, .6).skewY(8), p(.35, .3, .5, .5)),
                  ),
                  r(v(5), f.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), p(.2, .4, .5, .5)),
                )),
                f.translate(-38.9, -11.3, 17),
              );
              fc(f.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...sb(15).map(({ x: g, z: w }) => [3 * g, 3 * w, 1.5]));
            }),
            B.map(({ x: c, z: g }) => {
              b = f.translate(9 * c - 38.9, -7.3, 11 * g + 17);
              E(v(18, 1), b.scale(1, 4), p(.25, .25, .25, 1));
              [1.5, 8].map(w => E(v(18, 1), b.translate(0, w - 4).scale(1.5, .5, 1.5), p(.6, .6, .6, .3)));
            }),
            E(
              z(y(
                Cb(
                  r(v(6), f.translate(0, 0, -36).scale(15, 1.2, 15), p(.7, .7, .7, .3)),
                  r(v(B), f.translate(0, 0, -18).scale(4, 1.2, 6), p(.45, .4, .6, .3)),
                ),
                ...l(6, c =>
                  l(6, g =>
                    r(
                      v(6),
                      f.translate(4.6 * g - 12 + 2 * (1 & c), 0, 4.6 * c - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2),
                      p(.7, .7, .7, .3),
                    ))).flat(),
              )),
              f.translate(-38.9, -11.3, 17),
            ),
            fc(f.translate(-38.9, -8.4, -21), [0, 0, 12]),
            E(v(5), f.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), p(.8, .1, .25, .4)),
            ec(f.translate(-84, -0.5, 85).rotate(0, 45)),
            J(c => {
              c.g = () => dc(-123, 1.4, 55 + -65 * Ka);
              ec(f.translate(0, -3, -4).rotate(0, 180));
              E(hc);
            }),
            fc(f.translate(-115, .2, -12), [0, 0, 3.5]),
            z(y(
              r(v(B), f.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), p(.25, .25, .35, .3)),
              r(v(3), f.translate(0, 0, -5.5).scale(3, 2), p(.6, .3, .4, .3)),
              ...[-1.2, 1.2].map(c => r(v(B), f.translate(c, -0.5, 1).scale(.14, .3, 6.5), p(.7, .2, 0, .3))),
            ))),
        u = (J(c => {
          c.g = () => {
            var g = Math.sin(1.1 * a);
            return f.translate.call(f, 0, -2, cb(S[10].h, S[11].h) * (0 > g ? -g : g) * -8.5 + 10);
          };
          l(2, g => E(q, f.translate(9 * g - 110 + (1 & g), 1.7, -12)));
        }),
          J(c => {
            c.g = () => {
              var g = Math.sin(2.1 * a);
              return f.translate.call(f, 0, -2, cb(S[10].h, S[11].h) * (0 > g ? -g : g) * -8.5 + 10);
            };
            l(2, g => E(q, f.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
          }),
          J(c => {
            c.g = () => {
              var g = Math.sin(1.5 * a);
              return f.translate.call(
                f,
                0,
                -2,
                -8.5 * $a((1 - S[10].h) * (1 - cb(S[10].h, S[11].h)), cb(S[10].h, S[11].h) * (0 > g ? -g : g)) + 10,
              );
            };
            l(3, g => E(q, f.translate(9 * g - 106, 1.7, -12)));
          }),
          E(
            z(y(
              Cb(
                r(v(B), f.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                r(v(B), f.translate(26.5, -0.6, 10).scale(17, 2, .5)),
              ),
              ...l(4, c => r(v(B), f.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9))),
              ...l(3, c => r(v(B), f.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            f.translate(-123, 0, -12),
            p(.5, .5, .6, .2),
          ),
          E(v(5), f.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), p(.25, .25, .35, 1)),
          E(v(B), f.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), p(.8, .8, .8, .2)),
          E(v(6), f.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), p(.6, .5, .7, .2)),
          ec(f.translate(-116, -1.4, -18).rotate(0, 180)),
          l(3, c => {
            E(jc, f.translate(12 * c - 109, -9, -12), p(.6, .6, .6, .3));
            E(jc, f.translate(-77, -9, -12 * c - 20).rotate(0, 90), p(.6, .6, .6, .3));
          }),
          E(z(
            y(
              r(v(12), f.translate(-77, -13.9, -12).scale(4, 18.2, 4), p(.7, .7, .7, .2)),
              r(v(B), f.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), p(.4, .5, .6, .2)),
              r(v(B), f.translate(-77, 0, -14).scale(1.5, 2.2, 2), p(.4, .5, .6, .2)),
              r(v(12), f.translate(-77, 2.8, -12).scale(3, 5, 3), p(.4, .5, .6, .2)),
            ),
          )),
          E(v(B), f.translate(-115.5, -17, -12).scale(.5, 15, 2.2), p(.6, .6, .6, .3)),
          E(v(B), f.translate(-77, -17, -50.5).scale(2.2, 15, .5), p(.6, .6, .6, .3)),
          E(v(B), f.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), p(.6, .6, .6, .3)),
          E(z(
            y(
              r(v(B), f.translate(-93, -5.8, -40).scale(9, 1, 5), p(.8, .8, .8, .1)),
              r(v(9), f.translate(-98, -5.8, -40).scale(3, 8, 3), p(.7, .7, .7, .2)),
            ),
          )),
          E(v(9), f.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), p(.5, .5, .5, .3)),
          ec(f.translate(-98, -4.4, -40).rotate(0, 90)),
          fc(f.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          E(z(
            y(
              Cb(
                r(v(6, 0, 0, .6), f.translate(-100, .7, 105.5).scale(8, 1, 11), p(.7, .7, .7, .2)),
                r(v(B), f.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), p(.7, .7, .7, .2)),
                r(v(B), f.translate(-91.2, .7, 107).scale(3, 1, 3.3), p(.7, .7, .7, .2)),
              ),
              r(v(5), f.translate(-100, .7, 113).scale(4, 3, 4), p(.7, .7, .7, .2)),
            ),
          )),
          l(4, c =>
            J(g => {
              g.g = () => {
                const w = cb(S[8].i, S[12].i);
                return f.translate(
                  (2 < c ? 2 * (1 - w) + w : 0) - 100,
                  w * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3) + .7,
                  115 + (1 & c ? -1 : 1) * (1 - S[8].i) * (1 - S[12].i) * -7
                    + (.05 > w ? .05 : w) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),
                );
              };
              E(
                v(6),
                f.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5),
                p(.5 - c / 8, c / 12 + .5, .7, .3),
              );
            })),
          J(c => {
            c.g = () => {
              const g = cb(S[8].i, S[12].i);
              return f.translate(2.5 * (1 - g) - 139.7, -3 * (1 - S[8].h) + g * Math.sin(.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
            };
            E(z(y(r(v(10), f.scale(6, 2, 6), p(.1, .6, .5, .3)), r(v(10), f.scale(3.3, 6, 3.3), p(.1, .6, .5, .5)))));
            b = f.translate(-7.5).rotate(0, 90);
            E(v(15), b.scale(3, 2.3, 3), p(.4, .4, .4, .3));
            E(v(10), b.scale(2, 2.5, 2), p(.3, .8, .7, .3));
            E(v(5), b.scale(1, 3), p(.5, .5, .5, .5));
            ec(b.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(g =>
              E(ic, f.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), p(1, 1, .8, .2))
            );
            fc(f.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(c => {
            E(v(15, 1), f.translate(-7.5 * c - 100, 3.7, 96).scale(.8, 4, .8), p(.6, .24, .2, .5));
            [7.2, 1.5].map(g =>
              E(v(15, 1), f.translate(-7.5 * c - 100, g + .7, 96).scale(1.1, .5, 1.1), p(.5, .24, .2, .4))
            );
            E(ic, f.translate(-5 * c - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), p(1, 1, .8));
            E(
              z(y(
                r(v(B), f.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), p(.5, .5, .5, .4)),
                r(v(B), f.scale(3, 3, 10), p(.6, .24, .2, .5)),
                r(v(30, 1), f.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), p(.6, .24, .2, .5)),
                r(v(5), f.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), p(.6, .24, .2, .5)),
                r(v(5), f.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), p(.6, .24, .2, .5)),
              )),
              f.translate(c - 100, .7, 97),
            );
          }),
          J(c => {
            c.g = () => f.translate(-100, .6 - 6 * S[12].h, 96.5).scale(.88, 1.2);
            E(k);
          }),
          [
            ...r(v(28, 1), f.scale(8, 1, 8), p(.45, .45, .45, .2)),
            ...r(v(5), f.translate(0, 1).scale(1, .2), p(.3, .3, .3, .2)),
          ]);
      J(c => {
        c.g = () => f.translate(-80, 1, 106).rotate(0, 40 + wa);
        E(z(
          y(
            r(v(28, 1), f.scale(8, 1, 8), p(.45, .45, .45, .2)),
            r(v(B), f.translate(0, 0, -5.5).scale(1.5, 3, 2.5), p(.45, .45, .45, .2)),
          ),
        ));
        E(v(8), f.translate(0, 2).scale(3, 1.5, 3), p(.7, .7, .7, .1));
        E(v(5), f.translate(0, 2).scale(1, 2), p(.3, .3, .3, .2));
        fc(f.translate(0, 3), ...sb(10).map(({ x: g, z: w }) => [5.6 * g, 5.6 * w, 2.5]));
      });
      J(c => {
        c.g = () => f.translate(-64, 1, 106).rotate(0, Ba);
        E(z(
          y(
            r(v(28, 1), f.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
            r(v(B), f.scale(9, 5, 2), p(.3, 0, 0, .3)),
          ),
        ));
        E(u);
        [-1, 1].map(g =>
          E(ic, f.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), p(1, 1, .8))
        );
      });
      J(c => {
        c.g = () => f.translate(-48, 1, 106).rotate(0, 180 - Ba);
        E(z(
          y(
            r(v(30, 1), f.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
            r(v(B), f.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)),
            r(v(B), f.translate(0, 0, 7).scale(2, 5, 9), p(.3, 0, 0, .3)),
          ),
        ));
        E(u);
      });
      J(c => {
        c.g = () => f.translate(-48, 1, 90).rotate(0, 270 + Ba);
        E(z(
          y(
            r(v(30, 1), f.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
            r(v(B), f.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)),
            r(v(B), f.translate(0, 0, -7).scale(2, 5, 9), p(.3, 0, 0, .3)),
          ),
        ));
        E(u);
      });
      E(v(B), f.translate(-56, 1, 106).scale(.7, .8, 2.5), p(.7, .7, .7, .2));
      E(v(B), f.translate(-48, 1, 98).scale(2.5, .8, .7), p(.7, .7, .7, .2));
      E(v(B), f.translate(-39, .4, 90).scale(2, 1, 2), p(.7, .7, .7, .3));
      E(v(B), f.translate(-34.2, .4, 90).scale(3, 1, 3), p(.7, .7, .7, .3));
      ec(f.translate(-34, 2.7, 96).rotate(-12, 0));
      E(v(5), f.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), p(.2, .5, .5, .6));
      [p(.1, .55, .45, .2), p(.2, .5, .5, .3), p(.3, .45, .55, .4)].map((c, g) =>
        J(w => {
          w.g = () =>
            f.translate(
              0,
              (1 - S[13].i) * (1 - S[14].i) * 3 + cb(S[13].i, S[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4.7,
            );
          E(v(8), f.translate(-23.5, g / 1.5 - .4, 90 + 6.8 * g).scale(3.6, 2 - g / 1.5, 3.6).rotate(0, 22.5), c);
          2 === g && E(v(6), f.translate(-29, .4, 90).scale(2.4, 1, 2.8), p(.6, .7, .6, .3));
          1 === g
            && E(v(B), f.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), p(.6, .6, .7, .3));
        })
      );
      E(z(
        y(
          r(v(6, 0, 0, .3), f.translate(0, -0.92, 95).scale(14, 2, 14), p(.8, .8, .8, .2)),
          r(v(5), f.translate(0, 0, 95).scale3d(6), p(.3, .3, .3, .5)),
        ),
      ));
      [8, -6.1].map((c, g) =>
        l(3, w =>
          E(
            jc,
            f.translate(6 * w - 6, c - (1 & w), 111 - .2 * (1 & w) - g),
            1 & w ? p(.5, .5, .5, .3) : p(.35, .35, .35, .5),
          ))
      );
      [-1, 1].map(c => E(ic, f.translate(-8 * c, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), p(1, 1, .8)));
      ec(f.translate(0, 1.7, 82).rotate(0, 180));
      E(v(5), f.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), p(.5, .3, .3, .4));
      E(z(
        y(
          Cb(
            r(v(B), f.translate(0, 16, 110.5).scale(12, 1, 3), p(.5, .3, .3, .4)),
            r(v(B), f.translate(0, 16, 111).scale(3, 1, 3.8), p(.5, .3, .3, .4)),
          ),
          r(v(5), f.translate(0, 16, 103.5).scale(5.5, 5, 5.5), p(.5, .3, .3, .4)),
        ),
      ));
      J(c => {
        c.g = () => {
          const g = Math.sin(a);
          return f.translate(-2 * g).rotate(0, 0, 25 * g);
        };
        E(v(3), f.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), p(.5, .3, .3, .4));
        [22, 30].map(g => {
          E(v(6), f.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), p(.7, .7, .7, .4));
          E(v(B), f.translate(0, 6.2, g + 95).scale(.5, 11, .5), p(.5, .3, .3, .4));
        });
      });
      E(v(6), f.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), p(.5, .6, .7, .3));
      E(v(B), f.translate(0, 16, 129).scale(1.5, 1, 2), p(.5, .6, .7, .3));
      E(v(7), f.translate(0, 16.2, 133).scale(5, 1, 5), p(.4, .5, .6, .4));
      J(c => {
        c.g = () => {
          const g = cb(cb((S[14].h + S[14].i) / 2, S[13].i), (S[15].h + S[15].i) / 2);
          return f.translate(0, 16 * g, 8.5 * bb(2 * g - 1) + 95);
        };
        E(v(5), f.scale(5, 1.1, 5), p(.5, .3, .3, .4));
        E(v(5), f.scale(5.5, .9, 5.5), p(.25, .25, .25, .4));
        ec(f.translate(0, 1.5, -1).rotate(0, 180));
      });
      fc(f.translate(0, 3, 95), ...sb(9).map(({ x: c, z: g }) => [9 * c, 9 * g, 4]));
      fc(f.translate(0, 19, 134), [0, 0, 3.5]);
    });
    Ya = J(() => {
      Xa = [-1, 1].map(h =>
        J(() => {
          E(v(10, 1), f.translate(.3 * h, -0.8).scale(.2, .7, .24), p(1, .3, .4));
        })
      );
      [0, 180].map(h => E(ic, f.rotate(0, h).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), p(1, 1, .8)));
      E(ub(20), f.translate(0, 1).scale(.5, .5, .5), p(1, .3, .4));
      const e = r(
        z(y(v(15, 1), r(v(B), f.translate(0, 0, 1).scale(2, 2, .5)))),
        f.rotate(-90, 0).scale(.1, .05, .1),
        p(.3, .3, .3),
      );
      [-1, 1].map(h => E(e, f.translate(.2 * h, 1.2, .4).rotate(0, 20 * h, 20 * h)));
      E(v(B), f.translate(0, .9, .45).scale(.15, .02, .06), p(.3, .3, .3));
      E(ub(20), f.scale(.7, .8, .55), p(1, .3, .4));
    });
    Sa = J(() => {
      E(v(6, 1), f.scale(.13, 1.4, .13), p(.3, .3, .5, .1));
      E(v(8), f.translate(0, 1).scale(.21, .3, .21), p(1, .5, .2));
      E(v(3), f.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), p(.2, .2, .2, .1));
    }, 0);
    Wa = J(() => {
      E(v(6), f.scale(.8, 1, .8), p(1, .3, .5));
    }, 0);
    Va = J(() => {
      E(
        ub(40, 30, (e, h, k) => {
          const m = h / 30, q = .05 * e * Math.PI, u = m ** .6 * Math.PI / 2;
          e = m * m * Math.sin(e * Math.PI * .35) / 4;
          return 29 === h
            ? { x: k.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(q) * Math.sin(u),
              y: Math.cos(m * Math.PI) - m - e,
              z: Math.sin(q) * Math.sin(u) + Math.sin(e * Math.PI * 2) / 4,
            };
        }),
        f.scale3d(.7),
        p(1, 1, 1),
      );
      [-1, 1].map(e => E(ub(15), f.translate(.16 * e, .4, -0.36).scale3d(.09)));
    }, 0);
  },
  lc = (b, e, h, k) => {
    let m = 0, q = 0, u = 0, c = 1 / 0, g = -1 / 0, w = 1 / 0, D = -1 / 0, M = 1 / 0, R = -1 / 0;
    const ia = 1.1 * (h - e),
      Z = (new DOMMatrix(gb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, h))).multiplySelf(b).invertSelf();
    b = l(8, A => {
      A = Z.transformPoint({ x: 4 & A ? 1 : -1, y: 2 & A ? 1 : -1, z: 1 & A ? 1 : -1 });
      return m -= A.x = (ia * A.x | 0) / (ia * A.w),
        q -= A.y = (ia * A.y | 0) / (ia * A.w),
        u -= A.z = (ia * A.z | 0) / (ia * A.w),
        A;
    });
    e = f.rotate(298, 139).translateSelf(m / 8, q / 8, u / 8);
    return rb(b, e).map(({ x: A, y: Q, z: P }) => {
      c = c < A ? c : A;
      g = A < g ? g : A;
      w = w < Q ? w : Q;
      D = Q < D ? D : Q;
      M = M < P ? M : P;
      R = P < R ? R : P;
    }),
      M *= 0 > M ? k : 1 / k,
      R *= 0 < R ? k : 1 / k,
      f.scale(2 / (g - c), 2 / (D - w), 2 / (M - R)).translateSelf((g + c) / -2, (D + w) / -2, (M + R) / 2)
        .multiplySelf(e).toFloat32Array();
  },
  mc = (b, e = 35633) => {
    e = U.c6x(e);
    return U.s3c(e, b), U.c6a(e), e;
  },
  nc = (b, e) => {
    const h = {}, k = U.c1h();
    return U.abz(k, b), U.abz(k, mc(e, 35632)), U.l8l(k), m => m ? h[m] || (h[m] = U.gan(k, m)) : U.u7y(k);
  },
  kb = new Float32Array(656),
  oc = (b, e, h) => {
    if (Ma) {
      h = f.rotate(0, 40 * Math.sin(ka) - 70);
      for (var { F: k } of [Ya, ...Xa]) {
        pb(k - 1, h);
      }
      U.uae(b, !1, kb);
      U.d97(4, Xa[1].G - Ya.v, 5123, 2 * Ya.v);
    } else {
      for (const { H: m, F: q, l: u } of Db) {
        m && pb(q - 1, u);
      }
      U.uae(b, !1, kb);
      U.d97(4, (e ? Xa[1].G : Ya.v) - 3, 5123, 6);
      for (k = 0; S.length > k; ++k) {
        pb(k, S[k].l), kb[16 * k + 15] = 1 - S[k].h;
      }
      U.uae(b, !1, kb);
      U.das(4, Sa.G - Sa.v, 5123, 2 * Sa.v, S.length);
      for (k = 0; 13 > k; ++k) {
        pb(k, ac[k].l);
      }
      h = h ? Wa : Va;
      U.uae(b, !1, kb);
      U.das(4, h.G - h.v, 5123, 2 * h.v, 13);
    }
  },
  pc = new Int32Array(10725888),
  qc = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls:<b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  ic = (() => {
    const b = l(
        11,
        h => f.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),
      ),
      e = sb(18);
    return l(10, h => tb(rb(e, b[h]).reverse(), rb(e, b[h + 1]), 1)).flat();
  })(),
  hc = z(
    y(
      r(v(20, 1, 1.15, 1), f.translate(0, -3).scale(3.5, 1, 3.5), p(.7, .4, .25, .7)),
      r(v(20, 1, 1.3, 1), f.translate(0, -2.5).scale(2.6, 1, 3), p(.7, .4, .25, .2)),
      r(v(B), f.translate(4, -1.2).scale3d(2), p(.7, .4, .25, .3)),
    ),
  ),
  jc = z(
    y(
      r(v(B), f.translate(0, -8).scale(6, 15, 2.2)),
      r(v(B), f.translate(0, -14.1).scale(4, 13, 4)),
      r(v(20, 1), f.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  ),
  Wb = new AudioContext(),
  Vb = Wb.createBufferSource(),
  U = hC.getContext("webgl2");
for (const b in U) {
  U[b[0] + [...b].reduce((e, h, k) => (e * k + h.charCodeAt(0)) % 434, 0).toString(36)] = U[b];
}
setTimeout(() => {
  let b = 0, e = 6;
  const h = () => {
      if (h4.innerHTML += ".", !--e) {
        let u = 0, c = 0, g = 1, w = 0, D = 0, M = 0, R = !1, ia, Z, A, Q, P, ba, H, da, X, Y;
        const O = { x: 0, y: 0, z: 0 },
          ma = new Int32Array(256),
          Pa = () => {
            const { u: t, I: x } = S[va], { x: F, y: G, z: C } = x.transformPoint({ x: 0, y: 8, z: -3 });
            n.x = O.x = F;
            n.y = O.y = H = G;
            n.z = O.z = C;
            Z =
              ba =
              P =
              A =
              Q =
                0;
            g = 1;
            u = c = t?.F || 1;
          },
          xa = () => {
            let t = 0,
              x = 0,
              F = (NO_INLINE(() => {
                let ca = 0, T = 0, oa = 0, Da = 0, Ea = 0;
                ma.fill(0);
                for (let ya = 0; 31 > ya; ++ya) {
                  let lb = 0;
                  const pa = 512 * ya;
                  for (let Ta = 0; 128 > Ta; Ta++) {
                    let qa = pa + 4 * Ta;
                    var Ga = (Fa[qa] + Fa[1 + qa]) / 255;
                    if (qa = Fa[2 + qa], 14 < Ta && 114 > Ta && (lb += Ga), qa && Ga) {
                      Ga = ma[qa] + 1, ma[qa] = Ga, ca > Ga || (ca = Ga, T = qa);
                    }
                  }
                  3 > lb && 5 < ya && (Da += ya / 32);
                  3 < lb && (7 < ya && (oa += ya / 15), Ea = 1);
                }
                T && (Ea = 1);
                g ? T && (g = 0, c = T) : c = T || u;
                u = T;
                Z = Ea;
                A = K(A, Ea ? 6.5 : 8, 4);
                O.y += oa / 41 - (Ea ? 1 : A) * Da / 41 * A * d;
              })(),
                NO_INLINE(() => {
                  for (let Ea = 32; 128 > Ea; Ea += 2) {
                    var ca = 0;
                    let Ga = 0;
                    var T = 0;
                    let ya = 0;
                    const lb = 512 * Ea;
                    for (let pa = Ea >> 1 & 1; 128 > pa; pa += 2) {
                      var oa = lb + 4 * pa;
                      const Ta = lb + 4 * (127 - pa), qa = Fa[oa] / 255, Ib = Fa[1 + Ta] / 255;
                      var Da = pa / 63.5 - 1;
                      Da = 1 - (0 > Da ? -Da : Da);
                      if (
                        10 < pa && 118 > pa
                        && (ca = $a(ca, $a(qa * Da, qa * Fa[Ta] / 127.5)),
                          Ga = $a(Ga, $a(Ib * Da, Ib * Fa[1 + oa] / 255))), 54 > pa || 74 < pa
                      ) {
                        oa = (1 - Da) * (Ib < qa ? qa : Ib) / 3,
                          .001 < oa && (64 > pa && oa > T ? T = oa : 64 < pa && oa > ya && (ya = oa));
                      }
                    }
                    T = ya - T;
                    ca = Ga - ca;
                    (0 > T ? -T : T) > (0 > t ? -t : t) && (t = T);
                    (0 > ca ? -ca : ca) > (0 > x ? -x : x) && (x = ca);
                  }
                })(),
                (Ub[0] ? 1 : 0) + (Ub[2] ? -1 : 0) + ha),
              G = (Ub[1] ? 1 : 0) + (Ub[3] ? -1 : 0) + ja;
            var C = navigator.getGamepads()[0];
            if (C) {
              var L = T => ca[T]?.pressed || 0 < ca[T]?.value;
              const ca = C.buttons;
              C = C.axes;
              var N = L(1) || L(3) || L(2) || L(0);
              N !== R && (R = N) && (Ub[5] = 1);
              F += (.2 < ab(-C[0]) ? -C[0] : 0) + (L(14) ? 1 : 0) + (L(15) ? -1 : 0);
              G += (.2 < ab(-C[1]) ? -C[1] : 0) + (L(12) ? 1 : 0) + (L(13) ? -1 : 0);
              Na && (.3 < ab(C[2]) && (Mb += 80 * C[2] * d), .3 < ab(C[3]) && (Hb += 80 * C[3] * d));
            }
            .05 > (0 > G ? -G : G) && (G = 0);
            .05 > (0 > F ? -F : F) && (F = 0);
            L = Math.atan2(G, F);
            C = bb(Math.hypot(G, F));
            var W = (F = C * Math.cos(L), G = C * Math.sin(L), bb(1 - 5 * $a(0 > t ? -t : t, 0 > x ? -x : x)));
            N =
              (c || (t += P * W * d, x += ba * W * d),
                P = K(P, 0, Z ? 8 : 4),
                ba = K(ba, 0, Z ? 8 : 4),
                Q = K(Q, Z ? (F || G ? Z ? 7 : 4 : 0) * W : 0, Z ? .1 < W ? 10 : F || G ? 5 : 7 : 1),
                Na ? Mb * Za : Math.PI);
            W = Math.sin(N) * Q * d;
            var ra = Math.cos(N) * Q * d;
            N = (t -= F * ra - G * W, x -= F * W + G * ra, 1 === Db[c].H && Db[c].l || f);
            W = N.inverse();
            if (
              W.m41 = 0,
                W.m42 = 0,
                W.m43 = 0,
                { x: t, z: x } = W.transformPoint({ x: t, z: x, w: 0 }),
                O.x += t,
                O.z += x,
                c !== ia
            ) {
              ia = c;
              const { x: ca, y: T, z: oa } = N.inverse().transformPoint(n);
              O.x = ca;
              O.y = T;
              O.z = oa;
            }
            W = n.x;
            ra = n.z;
            const { x: rc, y: Qb, z: sc } = N.transformPoint(O);
            N = (n.x = rc, n.y = Qb, n.z = sc, ab(H - Qb));
            H = K(H, Qb + .1, 50 * N + 5);
            c && (P = (n.x - W) / d, ba = (n.z - ra) / d);
            (F || G) && (w = 90 - L / Za);
            D = eb(D, w, 8 * d);
            M += (C - M) * bb(10 * d);
          },
          Qa = t => {
            requestAnimationFrame(Qa);
            var x = (t - (Oa || t)) / 1e3;
            d = Ma ? Ub[5] = 0 : .066 < x ? .066 : x;
            a += d;
            ka += x;
            Oa = t;
            if (
              0 < d
              && (U.b6o(36160, sa),
                U.r9r(0, 0, 128, 128, 6408, 5121, Fa),
                U.iay(36160, [36064]),
                NO_INLINE(xa)(),
                gc()), 0 < d
            ) {
              if (da = fb(da, n.x, .5, d), X = fb(X, n.y, 2, d), Y = fb(Y, n.z, .5, d), Na) {
                t = 200 * g,
                  Eb = K(Eb, n.x, 18 + t),
                  Fb = K(Fb, n.y + 1.5, 15 + t),
                  Gb = K(Gb, n.z, 18 + t),
                  Hb = $a(87 > Hb ? Hb : 87, -87);
              } else {
                if (
                  Eb = fb(Eb, da, 1, 2 * d),
                    Fb = fb(Fb, X + 13 + 15 * g, 4, 2 * d),
                    Gb = fb(Gb, Y + -18, 1, 2 * d),
                    t = Gb - Y,
                    1 < (0 > t ? -t : t)
                ) {
                  x = Eb - da;
                  const F = Fb - X;
                  Mb = 270 + Math.atan2(t, x) / Za;
                  Hb = 90 - Math.atan2(Math.hypot(t, x), F) / Za;
                }
              }
              if (Mb = db(Mb), 0 < d) {
                t = cb(S[12].h, S[13].h),
                  a > na && (h4.innerHTML = "", na = 0),
                  x = K(Ca, 0, 1),
                  Ca = x + (db(Ca + 60 * d) - x) * bb(S[5].h - S[6].i),
                  x = K(wa, 0, 5),
                  wa = x + (db(wa + 56 * d) - x) * (0 > t ? 0 : 1 < t ? 1 : t),
                  x = K(Ba, 0, 4),
                  Ba = x + (db(Ba + 48 * d) - x) * (0 > t ? 0 : 1 < t ? 1 : t),
                  t = 2 * S[9].i - 1,
                  Ka = K(Ka, S[9].i, .2 + .3 * (0 > t ? -t : t)),
                  Ja = K(Ja, Ia ? Ja + (-9 - Ja) * bb(1.5 * d) : bb(a / 3), 1),
                  1 === S[0].j && .8 < S[0].h && (13 > la
                    ? (S[0].j = 0, Ia || (h4.innerHTML = "Not leaving now, there are souls to catch!", na = a + 3))
                    : Ia
                      || (Ia
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", na = a + 1 / 0),
                        Ia = 1)),
                  Ub[5] = 0,
                  (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && Pa();
              }
            }
            t = Ma
              ? f.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + bb(hC.clientWidth / 1e3))
              : f.rotate(-Hb, -Mb, -0).invertSelf().translateSelf(-Eb, -Fb, -Gb);
            0 < d
              && (za(),
                U.b6o(36160, sa),
                U.v5y(0, 0, 128, 128),
                U.cbf(!0, !1, !0, !1),
                U.c4s(16640),
                U.uae(za("b"), !1, f.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, .3 - n.z).toFloat32Array()),
                oc(za("c"), 0, 1),
                U.cbf(!1, !0, !1, !1),
                U.c4s(16640),
                U.cbf(!1, !0, !0, !1),
                U.uae(za("b"), !1, f.translate(-n.x, -n.y, -n.z - .3).toFloat32Array()),
                oc(za("c"), 0, 1),
                U.cbf(!0, !0, !0, !0),
                1 === c && (S[9].j = -15 > n.x && 0 > n.z ? 1 : 0));
            vb();
            U.v5y(0, 0, 2048, 2048);
            Aa[0](lc(t, .3, 55, 10));
            Aa[1](lc(t, 55, 177, 11));
            U.b6o(36160, null);
            ea();
            U.v5y(0, 0, U.drawingBufferWidth, U.drawingBufferHeight);
            U.c4s(16640);
            U.uae(ea("a"), !1, gb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
            U.uae(ea("b"), !1, t.toFloat32Array());
            U.ubu(ea("k"), Eb, Fb, Gb);
            Aa[0]();
            Aa[1]();
            oc(ea("c"), !Na, 0);
            fa();
            U.ubu(fa("j"), U.drawingBufferWidth, U.drawingBufferHeight, ka);
            Ma ? U.ubu(fa("k"), 0, 0, 0) : U.ubu(fa("k"), Eb, Fb, Gb);
            U.uae(fa("b"), !1, t.inverse().toFloat32Array());
            U.d97(4, 3, 5123, 0);
          },
          Fa = new Uint8Array(65536),
          Rb = m;
        var q = mc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
        );
        const vb = nc(
            mc(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[40];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          fa = nc(
            mc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          za = nc(
            q,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          ea = nc(
            q,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          sa =
            (fa(),
              U.ubh(fa("q"), 3),
              za(),
              U.uae(za("a"), !1, gb(1.4, .59, 1e-4, 1)),
              ea(),
              U.ubh(ea("q"), 3),
              U.c5w());
        q = U.c3z();
        const mb = U.c25(),
          Aa = l(2, t => {
            let x;
            const F = U.c25(), G = U.c5w(), C = ea(t ? "j" : "i");
            return ea(),
              U.ubh(ea(t ? "h" : "g"), t),
              U.b6o(36160, G),
              U.d45([0]),
              U.r9l(0),
              U.a4v(33984 + t),
              U.b9j(3553, F),
              U.fas(36160, 36096, 3553, F, 0),
              U.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              U.t2z(3553, 10241, 9729),
              U.t2z(3553, 10240, 9729),
              U.t2z(3553, 34893, 515),
              U.t2z(3553, 34892, 34894),
              U.t2z(3553, 10243, 33071),
              U.t2z(3553, 10242, 33071),
              L => {
                L
                  ? (x = L,
                    U.b6o(36160, G),
                    U.iay(36160, [36096]),
                    U.c4s(256),
                    U.uae(vb("b"), !1, x),
                    oc(vb("c"), !Na, 0))
                  : U.uae(C, !1, x);
              };
          });
        let nb = 0, Ha, Ra;
        const ta = [],
          Jb = [],
          Kb = [],
          ua = [],
          Ua = new Map(),
          V = new Int32Array(8),
          ob = t => {
            let { x, y: F, z: G } = Ra[t];
            I[0] = x;
            I[1] = F;
            I[2] = G;
            t = "" + (Ra.D ? Lb : V);
            let C = Ua.get(t);
            return void 0 !== C
              ? (x = 3 * C, ua[x] = (ua[x++] + V[5]) / 2, ua[x] = (ua[x++] + V[6]) / 2, ua[x] = (ua[x] + V[7]) / 2)
              : (Ua.set(t, C = Ua.size), Jb.push(x, F, G, I[3]), Kb.push(V[4]), ua.push(V[5], V[6], V[7])),
              C;
          },
          Lb = new Int32Array(V.buffer, 0, 5),
          I = new Float32Array(V.buffer);
        for (Ha of Db) {
          for (Ra of (I[3] = Ha.H ? Ha.F : 0, Ha.s)) {
            const { x: t, y: x, z: F } = jb(Ra);
            V[4] = 0 | Ra.A;
            V[5] = 32767 * t;
            V[6] = 32767 * x;
            V[7] = 32767 * F;
            for (let G = 2, C = ob(0), L = ob(1); Ra.length > G; ++G) {
              ta.push(C, L, L = ob(G));
            }
          }
          Ha.s = null;
          Ha.v = nb;
          Ha.G = nb = ta.length;
        }
        U.b11(34963, U.c1b());
        U.b2v(34963, new Uint16Array(ta), 35044);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Float32Array(Jb), 35044);
        U.v7s(0, 4, 5126, !1, 0, 0);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Int16Array(ua), 35044);
        U.v7s(1, 3, 5122, !0, 0, 0);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Uint32Array(Kb), 35044);
        U.v7s(2, 4, 5121, !0, 0, 0);
        U.e3x(0);
        U.e3x(1);
        U.e3x(2);
        U.e8z(2929);
        U.e8z(2884);
        U.c70(1);
        U.c7a(1029);
        U.d4n(515);
        U.c5t(0, 0, 0, 1);
        U.b6o(36160, sa);
        U.bb1(36161, q);
        U.r4v(36161, 33189, 128, 128);
        U.f8w(36160, 36096, 36161, q);
        U.a4v(33987);
        U.b9j(3553, mb);
        U.fas(36160, 36064, 3553, mb, 0);
        U.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        U.b9j(3553, U.c25());
        U.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Rb);
        U.gbn(3553);
        U.t2z(3553, 10241, 9987);
        U.t2z(3553, 10240, 9729);
        Ya.g = () => f.translate(n.x, H, n.z).rotateSelf(0, D);
        Xa.map((t, x) => {
          t.g = () =>
            Ya.l.translate(0, M * bb(.45 * Math.sin(9.1 * a + Math.PI * x - Math.PI / 2))).rotateSelf(
              M * Math.sin(9.1 * a + Math.PI * x) * .25 / Za,
              0,
            );
        });
        try {
          const [t, x, F, G, C] = JSON.parse(localStorage.DanteSP22);
          S.map((L, N) => L.h = L.i = L.j = N ? 0 | t[N] : 0);
          ac.map((L, N) => L.j = 0 | x[N]);
          va = F;
          a = G;
          Ka = C;
        } catch (t) {
        }
        Ja = 0 > va ? 0 : 1 < va ? 1 : va;
        h4.innerHTML = "";
        na = 0;
        bc();
        gc();
        NO_INLINE(Zb)();
        Pa();
        Eb = da = n.x;
        Fb = (X = n.y) + 13;
        Gb = (Y = n.z) + -18;
        requestAnimationFrame(Qa);
      }
    },
    k = () => {
      if (5 > b) {
        var q = 0, u = b++;
        let [D, M, R, ia, Z, A, Q, P, ba, H, da, X, Y, O, ma, Pa, xa, Qa, Fa, Rb, vb] = Nb[u];
        H = H * H * 4;
        for (const fa of [5513, 4562, 3891]) {
          let za = 0, ea = 0, sa, mb, Aa, nb, Ha;
          const Ra = [],
            ta = new Int32Array(768 * fa),
            Jb = 2 ** (X - 9) / fa,
            Kb = Math.PI * 2 ** (xa - 8) / fa,
            ua = Fa * fa & -2;
          for (let Ua = 0; 11 >= Ua; ++Ua) {
            for (
              let V = 0, ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * u + Ua];
              32 > V;
              ++V
            ) {
              const Lb = (32 * Ua + V) * fa;
              for (var c = 0; 4 > c; ++c) {
                if (sa = 0, ob && (sa = vb[ob - 1].charCodeAt(V + 32 * c) - 40, sa += 0 < sa ? 106 : 0), sa) {
                  var g;
                  if (!(g = Ra[sa])) {
                    g = sa;
                    let I = void 0, t = void 0;
                    var w = sa;
                    let x = 0, F = 0;
                    const G = 2 > u ? Sb : Ob, C = 2 > u ? 1 > u ? Pb : Tb : Ob, L = new Int32Array(P + ba + H);
                    for (let N = 0, W = 0; P + ba + H > N; ++N, ++W) {
                      let ra = 1;
                      P > N ? ra = N / P : P + ba > N || (ra = (1 - (ra = (N - P - ba) / H)) * 3 ** (-da / 16 * ra));
                      0 > W
                        || (W -= 4 * fa,
                          t = 0.003960 * 2 ** ((w + M - 256) / 12),
                          I = 0.003960 * 2 ** ((w + Z - 256) / 12) * (1 + (u ? 0 : 8e-4 * 9)));
                      L[N] = 80
                          * (G(x += t * ra ** (R / 32)) * D + C(F += I * ra ** (A / 32)) * ia
                            + (Q ? (2 * Math.random() - 1) * Q : 0))
                          * ra | 0;
                    }
                    g = Ra[g] = L;
                  }
                  for (let I = 0, t = 2 * Lb; g.length > I; ++I, t += 2) {
                    ta[t] += g[I];
                  }
                }
              }
              for (let I, t = 0; fa > t; ++t) {
                c = 0,
                  g = 2 * (Lb + t),
                  ((I = ta[g]) || Ha)
                  && (Aa = 0.003080 * Y,
                    1 != u && 4 != u || (Aa *= Math.sin(Jb * g * Math.PI * 2) * Rb / 512 + .5),
                    Aa = 1.5 * Math.sin(Aa),
                    za += Aa * ea,
                    nb = (1 - O / 255) * (I - ea) - za,
                    ea += Aa * nb,
                    I = 4 == u ? ea : 3 == u ? nb : za,
                    u || (I = 1 > (I *= 22e-5) ? -1 < I ? Math.sin(I / 4 * Math.PI * 2) : -1 : 1, I /= 22e-5),
                    I *= ma / 32,
                    Ha = 1e-5 < I * I,
                    mb = Math.sin(Kb * g) * Pa / 512 + .5,
                    c = I * (1 - mb),
                    I *= mb),
                  ua > g || (c += ta[
                    g - ua
                    + 1
                  ] * Qa / 255,
                    I += ta[g - ua] * Qa / 255),
                  pc[q + g] += ta[g] = c,
                  ++g,
                  pc[q + g] += ta[g] = I;
              }
            }
          }
          q += ta.length;
        }
        setTimeout(k);
      } else {
        q = Wb.createBuffer(2, 5362944, 44100);
        for (u = 0; 2 > u; u++) {
          for (let D = u, M = q.getChannelData(u); 10725888 > D; D += 2) {
            M[D >> 1] = pc[D] / 65536;
          }
        }
        Vb.buffer = q;
        Vb.loop = !0;
      }
      h();
    },
    m = new Image();
  m.onload = m.onerror = () => {
    h();
  };
  m.src = qc;
  setTimeout(k, 50);
  NO_INLINE(kc)();
});
