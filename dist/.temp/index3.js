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
  Ha = 0,
  Ia = 0,
  Ja = 0,
  d = .066,
  Ka,
  La,
  Ma,
  Na,
  Sa,
  Va,
  Wa,
  Xa,
  Ya;
const $a = Math.PI / 180,
  e = new DOMMatrix(),
  ab = (c, g) => g < c ? c : g,
  bb = c => 0 > c ? -c : c,
  cb = c => 0 > c ? 0 : 1 < c ? 1 : c,
  db = (c, g) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > g ? 0 : 1 < g ? 1 : g)),
  eb = c => Math.atan2(Math.sin(c *= $a), Math.cos(c)) / $a,
  fb = (c, g, h) => {
    c *= $a;
    g = (g * $a - c) % (2 * Math.PI);
    return (c + (2 * g % (2 * Math.PI) - g) * (0 > h ? 0 : 1 < h ? 1 : h)) / $a;
  },
  gb = (c, g, h, l) => {
    var m = g - c;
    c += Math.sign(g - c) * ab(0, (0 > m ? -m : m) ** .9 - h) * l * 2;
    return c + (g - c) * cb(l / 7);
  },
  k = (c, g) => Array.from(Array(c), (h, l) => g(l)),
  hb = (c, g, h, l) => [c, 0, 0, 0, 0, g, 0, 0, 0, 0, (l + h) / (h - l), -1, 0, 0, 2 * l * h / (h - l), 0],
  ib = ({ x: c, y: g, z: h }, l) => c * l.x + g * l.y + h * l.z,
  jb = ({ x: c, y: g, z: h }) => {
    var l = n;
    return Math.hypot(c - l.x, g - l.y, h - l.z) || 0;
  },
  nb = c => {
    let g = 0, h = 0, l = 0, m, q = c.at(-1);
    for (m of c) {
      g += (q.y - m.y) * (q.z + m.z), h += (q.z - m.z) * (q.x + m.x), l += (q.x - m.x) * (q.y + m.y), q = m;
    }
    return m = Math.hypot(g, h, l), g /= m, h /= m, l /= m, { x: g, y: h, z: l, w: g * q.x + h * q.y + l * q.z };
  },
  p = (c, g, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * g << 8 | 255 * c,
  ob = (c, g, h) => (c.C = h, c.v = g, c),
  pb = (c, g, h = c.v) =>
    ob(
      c.map(l =>
        ((
          { x: m, y: q, z: u },
          b,
        ) => ({ x: m, y: q, z: u } = b.transformPoint({ x: m, y: q, z: u }), { x: m, y: q, z: u }))(l, g)
      ),
      h,
      c.C,
    ),
  r = (c, g, h) => c.map(l => pb(l, g, h)),
  qb = (c, g = 0) =>
    k(c, h => {
      const l = Math.cos(2 * Math.PI * h / c);
      return { x: Math.sin(2 * Math.PI * h / c), y: 0, z: .01 > (0 > l ? -l : l) ? l : 0 > l ? l - g : l + g };
    }),
  rb = (c, g, h) =>
    c.map((l, m, { length: q }) => ob([l, g[q - m - 1], g[q - (m + 1) % q - 1], c[(m + 1) % q]], c.v, h)),
  v = (c, g, h = 0, l) => {
    l = c.length ? c : qb(c, l);
    c = pb(l, e.translate(0, 1).scale3d(0 < h ? h : 1));
    h = pb(l, e.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse();
    return [...rb(h, c, g), h, c];
  },
  sb = (
    c,
    g = c,
    h = (
      l,
      m,
    ) => (m *= Math.PI / g,
      { x: Math.cos(l *= 2 * Math.PI / c) * Math.sin(m), y: Math.cos(m), z: Math.sin(l) * Math.sin(m) }),
  ) => {
    const l = [];
    for (let m = 0; c > m; m++) {
      for (let q = 0; g > q; q++) {
        const u = ob([], 0, 1);
        l.push(u);
        u.push(h(m, q, u));
        q && u.push(h((m + 1) % c, q, u));
        g - 1 > q && u.push(h((m + 1) % c, q + 1 % g, u));
        u.push(h(m, q + 1 % g, u));
      }
    }
    return l;
  },
  tb = (c, g) => {
    var h, l, m, q = g.B;
    for (var u = 0; q.length > u; ++u) {
      if (-0.00008 > (m = ib(c, q[u]) - c.w) ? l = g : 8e-5 < m && (h = g), l && h) {
        l = [];
        m = [];
        q = g.B;
        u = g.A;
        let b = q.at(-1), f = ib(c, b) - c.w;
        for (const w of q) {
          h = ib(c, w) - c.w,
            8e-5 > f && m.push(b),
            -0.00008 < f && l.push(b),
            (8e-5 < f && -0.00008 > h || -0.00008 > f && 8e-5 < h)
            && (f /= h - f,
              b = { x: b.x + (b.x - w.x) * f, y: b.y + (b.y - w.y) * f, z: b.z + (b.z - w.z) * f },
              l.push(b),
              m.push(b)),
            b = w,
            f = h;
        }
        return {
          o: 2 < l.length && { B: ob(l, q.v, q.C), A: u, u: g },
          m: 2 < m.length && { B: ob(m, q.v, q.C), A: u, u: g },
        };
      }
    }
    return { o: h, m: l };
  },
  vb = (c, g, h = nb(g.B)) => {
    if (c) {
      const { o: l, m } = tb(c, g);
      l || m || c.s.push(g);
      l && (c.o = vb(c.o, l, h));
      m && (c.m = vb(c.m, m, h));
    } else {
      c = { x: h.x, y: h.y, z: h.z, w: h.w, s: [g], o: 0, m: 0 };
    }
    return c;
  },
  wb = (c, g, h) => {
    const l = [],
      m = (q, u) => {
        let { o: b, m: f } = tb(q, u);
        b || f || (0 < h * ib(q, g) ? b = u : f = u);
        b && (q.o ? m(q.o, b) : l.push(b));
        f && q.m && m(q.m, f);
      };
    for (const q of g.s) {
      m(c, q);
    }
    return l;
  },
  xb = (c, g) => c && (g(c), xb(c.o, g), xb(c.m, g)),
  yb = c => c.length ? c.reduce((g, h) => vb(g, { B: h, A: 0, u: 0 }), 0) : c,
  zb = c => (xb(c, g => {
    const h = g.m;
    g.m = g.o;
    g.o = h;
    g.x *= -1;
    g.y *= -1;
    g.z *= -1;
    g.w *= -1;
    for (const l of g.s) {
      l.A = !l.A;
    }
  }),
    c),
  Ab = (...c) =>
    c.reduce((g, h) => {
      const l = [];
      if (g = yb(g), h) {
        h = yb(h);
        xb(g, m => m.s = wb(h, m, 1));
        xb(h, m => l.push([m, wb(g, m, -1)]));
        for (const [m, q] of l) {
          for (const u of q) {
            vb(g, u, m);
          }
        }
      }
      return g;
    }),
  y = (c, ...g) => zb(Ab(zb(yb(c)), ...g)),
  z = c => {
    const g = new Map(),
      h = new Map(),
      l = m => {
        if (m.u) {
          const q = g.get(m.u);
          q ? (h.delete(q), m = l(m.u)) : g.set(m.u, m);
        }
        return m;
      };
    return xb(c, m => {
      for (const q of m.s) {
        h.set(l(q), q.A);
      }
    }),
      Array.from(h, ([{ B: m }, q]) => {
        const u = m.map(({ x: b, y: f, z: w }) => ({ x: b, y: f, z: w }));
        return ob(q ? u.reverse() : u, m.v, m.C);
      });
  },
  B = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  Bb = [],
  E = (c, g = e, h) => Ka.s.push(...r(c, g, h)),
  I = c => {
    const g = Ka, h = { l: e, F: Bb.length, D: 1, s: [] };
    return Bb.push(Ka = h), c(h), Ka = g, h;
  };
var Cb = -11, Db = 17, Eb = -90, Jb = 0, Kb = 0;
const Lb = [[
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
  Mb = c => Math.sin(c * Math.PI * 2),
  Pb = c => .5 > c % 1 ? 1 : -1,
  Qb = c => c % 1 * 2 - 1,
  Rb = c => {
    c = c % 1 * 4;
    return 2 > c ? c - 1 : 3 - c;
  },
  Sb = [],
  Vb = () => {
    La || !aa ? Tb.disconnect() : Tb.connect(Ub.destination);
    b4.innerHTML = "Music: " + aa;
  },
  Wb = (c = !1) => {
    if (La !== c) {
      La = c;
      Ma = 0;
      try {
        c ? document.exitPointerLock() : Tb.start();
      } catch {
      }
      document.body.className = c ? "l m" : "l";
      Vb();
    }
  },
  Xb = () => {
    let c = 0, g = 0, h = 0, l, m, q;
    const u = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Sb.length = ha = ja = 0;
      l = m = void 0;
      document.hidden && Wb(!0);
    };
    b1.onclick = () => Wb();
    b2.onclick = () => {
      Wb();
      Ma = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      aa = !aa;
      Vb();
    };
    b5.onclick = () => Wb(!0);
    onclick = () => {
      q = 1;
      La || (Sb[5] = !0, Ma && hC.requestPointerLock());
    };
    document.onvisibilitychange = onresize = onblur = u;
    onkeydown = onkeyup = ({ code: b, target: f, type: w, repeat: D }) => {
      D || ((f = !!w[5] && f === document.body) && ("Escape" === b || "Enter" === b && La)
        ? La && !q || Wb(!La)
        : (b = {
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
        }[b],
          5 === b ? f && (Sb[b] = 1) : Sb[b] = f));
    };
    onmousemove = ({ movementX: b, movementY: f }) => {
      Ma && (b || f) && (Kb += .1 * b, Jb += .1 * f);
    };
    hC.ontouchstart = b => {
      if (!La) {
        for (const f of b.changedTouches) {
          Ma && f.pageX > hC.clientWidth / 2 ? l || (l = f, c = Kb, g = Jb) : m = m || f;
        }
        h = ka;
      }
    };
    hC.ontouchmove = ({ changedTouches: b }) => {
      if (!La) {
        for (const { pageX: f, pageY: w, identifier: D } of b) {
          l?.identifier === D && (Kb = c + (f - l.pageX) / 3, Jb = g + (w - l.pageY) / 3),
            m?.identifier === D
            && (ha = -(f - m.pageX) / 18,
              ja = -(w - m.pageY) / 18,
              ha = .35 > (0 > ha ? -ha : ha) ? 0 : .8 * ha,
              ja = .35 > (0 > ja ? -ja : ja) ? 0 : .8 * ja);
        }
      }
    };
    hC.ontouchend = b => {
      for (const f of b.changedTouches) {
        f.identifier === l?.identifier && (l = void 0), f.identifier === m?.identifier && (m = void 0, ja = ha = 0);
      }
      b.preventDefault();
      b = ka - h;
      (!h || .02 < b && .4 > b) && (Sb[5] = !0);
    };
    oncontextmenu = () => !1;
    u();
    Wb(!0);
  },
  J = (c, g, h) => c + (g - c) * cb(1 - Math.exp(-h * d)),
  Yb = ({ j: c }) => c,
  S = [],
  Zb = [],
  $b = () => {
    la = Zb.reduce((c, g) => c + g.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[la];
  },
  ac = () => {
    $b();
    localStorage.DanteSP22 = JSON.stringify([S.map(Yb), Zb.map(Yb), va, a, Ja]);
  },
  n = { x: 0, y: 0, z: 0 },
  bc = (c, g, h) =>
    e.translate(c + Math.sin(a + 2) / 5, g + Math.sin(.8 * a) / 3, h).rotateSelf(
      2 * Math.sin(a),
      Math.sin(.7 * a),
      Math.sin(.9 * a),
    ),
  cc = c => {
    const g = Ka,
      h = S.length,
      l = {
        j: 0,
        h: 0,
        i: 0,
        u: g,
        g() {
          const m = l.j, q = l.h, u = l.i, b = g.l.multiply(c);
          l.G = b;
          2.9 > jb(b.transformPoint()) && Sb[5] && (.3 > q || .7 < q)
            && (l.j = m ? 0 : 1, h && (Ha || (h4.innerHTML = "* click *", na = a + 1)), va = h, ac());
          l.h = J(q, m, 4);
          l.i = J(u, m, 1);
          l.l = b.rotate(60 * l.h - 30, 0).translateSelf(0, 1);
        },
      };
    S.push(l);
    E(v(5), c.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    E(v(5), c.translate(.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    E(v(B), c.translate(0, -0.4).scale(.5, .1, .5), p(.5, .5, .4));
  },
  dc = (c, ...g) => {
    let h = -1, l = 0, m = 0, q = 0, u = 0, b = 0, f = 3, w = 1;
    const D = {
        j: 0,
        g() {
          if (!D.j) {
            var G = 1, da = 1 / 0;
            for (var X of ia) {
              var Y = X.w, O = Math.hypot(A - X.x, Q - X.z), ma = O - Y;
              Oa ||= O < Y;
              0 < ma && da > ma && (da = ma, Z = X);
              Y = O / Y;
              G = G < Y ? G : Y;
            }
            if (!Oa) {
              da = Z.x;
              X = Z.z;
              Y = Z.w;
              O = A - da;
              ma = Q - X;
              let xa = Math.hypot(O, ma), Pa = Math.atan2(-ma, O);
              w && (m = (Math.random() - .5) * Math.PI / 2, f = ab(1, f / (1 + Math.random())));
              Pa += m;
              h = -Math.cos(Pa);
              l = Math.sin(Pa);
              .1 < xa && (xa = (xa < Y ? xa : Y) / (xa || 1), A = O * xa + da, Q = ma * xa + X);
            }
            w = Oa;
            f = J(f, 3 + 6 * (1 - G), 3 + G);
            P = J(P, A = J(A, A + h, f), f);
            ba = J(ba, Q = J(Q, Q + l, f), f);
            q = fb(q, Math.atan2(P - u, ba - b) / $a - 180, 3 * d);
            u = P;
            b = ba;
            G = (D.l = c.multiply(
              N.l.translate(P, 0, ba).rotateSelf(0, q).skewXSelf(7 * Math.sin(2 * a)).skewYSelf(
                7 * Math.sin(1.4 * a),
              ),
            )).transformPoint();
            if (1.5 > jb(G)) {
              D.j = 1;
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
              ][la] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              var Oa = la && 12 > la ? 5 : 7;
              Ha || (h4.innerHTML = G, na = a + Oa);
              ac();
            }
          }
          D.j
            && (G = R % 4 - 2,
              D.l = Bb[2].l.translate(
                R % 4 * 1.2 - 1.7 + Math.sin(a + R) / 7,
                -2,
                1.7 * (R / 4 | 0) - 5.5 + (0 > G ? -G : G) + Math.cos(a / 1.5 + R) / 6,
              ));
        },
      },
      N = Ka,
      R = Zb.length,
      ia = g.map(([G, da, X]) => ({ x: G, z: da, w: X }));
    let Z = ia[0], { x: A, z: Q } = Z, P = A, ba = Q;
    Zb.push(D);
  },
  ec = () => {
    for (const c of Bb) {
      c.g && (c.l = c.g(c));
    }
    for (const c of S) {
      c.g();
    }
    for (const c of Zb) {
      c.g();
    }
  },
  ic = () => {
    let c;
    I(() => {
      E([B.slice(1)], e.translate(-2).scale3d(3).rotate(90, 0));
    });
    I(() => {
      const g = () => {
          var b = S[2].i, f = 1 - S[4].i;
          return b < f ? b : f;
        },
        h = (b, f, w) =>
          I(D => {
            D.g = () => e.translate(g() * Math.sin(3 * b + a * b) * f);
            B.map(({ x: N, z: R }) => {
              E(v(11, 1), e.translate(4 * N, 4, w + 4 * R).scale(.8, 3, .8), p(.5, .3, .7, .6));
              E(v(B), e.translate(4 * N, 7, w + 4 * R).scale(1, .3), p(.5, .5, .5, .3));
            });
            E(z(y(
              r(v(B), e.translate(0, 0, w).scale(5, 1, 5), p(.8, .8, .8, .3)),
              ...[-1, 1].map(N =>
                r(v(B), e.translate(5 * N, .2, w).rotate(0, 0, -30 * N).scale(4, 1, 2), p(.8, .8, .8, .3))
              ),
            )));
            E(v(B), e.translate(0, -3, w).scale(8, 2, 8), p(.4, .4, .4, .3));
          }),
        l = (I(b => {
          b.g = () => bc(-12, 4.2, 40 * Ia - 66);
          E(fc);
          cc(e.translate(0, -3, 4));
        }),
          k(7, b => r(v(6, 1), e.translate(4 * (b / 6 - .5), 3).scale(.2, 3, .2), p(.3, .3, .38))).flat()),
        m = (dc(e.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          dc(
            e.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...qb(18).map(({ x: b, z: f }) => [7 * b, 10 * f, 4.5 - 2 * (0 > b ? -b : b)]),
          ),
          E(v(B), e.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), p(.8, .8, .8, .2)),
          B.map(({ x: b, z: f }) => E(v(6), e.translate(3 * b, 3, 15 * f).scale(.7, 4, .7), p(.6, .3, .3, .4))),
          [-23, 22].map(b => E(v(B), e.translate(0, 0, b).scale(3, 1, 8), p(.9, .9, .9, .2))),
          [-15, 15].map((b, f) => {
            E(v(B), e.translate(0, 6.3, b).scale(4, .3, 1), p(.3, .3, .3, .4));
            E(v(B), e.translate(0, 1, b).scale(3, .2, .35), p(.5, .5, .5, .3));
            I(w => {
              w.g = () => e.translate(0, 4.7 * -S[f + 1].h, b);
              E(l);
            });
          }),
          k(5, b =>
            k(2, f =>
              E(
                gc,
                e.translate(18.5 * (f - .5), 0, 4.8 * b - 9.5).rotate(0, 180 - 180 * f).scale(1.2, 10, 1.2),
                p(1, 1, .8, .2),
              ))),
          E(v(B), e.translate(3, 1.5, -20).scale(.5, 2, 5), p(.7, .7, .7, .2)),
          E(v(B), e.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), p(.75, .75, .75, .2)),
          E(v(5), e.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), p(.6, .3, .3, .4)),
          cc(e.translate(-5.4, 1.5, -19).rotate(0, -90)),
          E(v(B), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), p(.8, .2, .2, .5)),
          E(z(
            y(
              Ab(
                r(v(6, 0, 0, .3), e.translate(8, -3, -4).scale(13, 1, 13), p(.7, .7, .7, .2)),
                r(v(6), e.translate(0, -8).scale(9, 8, 8), p(.4, .2, .5, .5)),
                r(v(6, 0, 0, .3), e.translate(0, -0.92).scale(13, 2, 13), p(.8, .8, .8, .2)),
              ),
              r(v(5), e.scale(5, 30, 5), p(.4, .2, .6, .5)),
              r(v(5, 0, 1.5), e.translate(0, 1).scale(4.5, .3, 4.5), p(.7, .5, .9, .2)),
              r(v(B), e.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), p(.5, .5, .5, .5)),
              r(v(6), e.translate(15, -1.5, 4).scale(3.5, 1, 3.5), p(.5, .5, .5, .5)),
            ),
          )),
          I(b => {
            b.g = () =>
              e.translate(
                0,
                .01 < S[3].h ? (5 * Math.cos(1.5 * a) + 2) * S[3].i * (1 - S[2].h) + -15 * (1 - S[3].h) : -500,
                0,
              );
            cc(e.translate(0, 1.2));
            E(v(5), e.translate(0, -0.2).scale(5, 1, 5), p(.6, .65, .7, .3));
          }),
          cc(e.translate(15, -2, 4)),
          h(.7, 12, 35),
          h(1, 8.2, 55),
          I(b => {
            b.g = () => e.translate(g() * Math.sin(a / 1.5 + 2) * 12);
            E(
              z(y(
                Ab(
                  r(v(B), e.scale(1.5, 1, 5), p(.9, .9, .9, .2)),
                  r(v(6), e.scale(4, 1, 5), p(.9, .9, .9, .2)),
                  r(v(B), e.translate(0, -2).scale(2, 3.2, 1.9), p(.3, .8, .5, .5)),
                  r(v(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), p(.9, .9, .9, .2)),
                ),
                r(v(B), e.scale(1.3, 10, 1.3), p(.2, .7, .4, .6)),
              )),
              e.translate(0, 0, 45),
            );
            dc(e.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          I(b => {
            b.g = () => e.translate(9.8 * (1 - g()));
            E(v(3), e.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), p(.3, .6, .6, .2));
            E(v(8), e.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), p(.8, .8, .8, .2));
            E(v(B), e.translate(-23, -3, 55).scale(5.2, 1.7, 3), p(.5, .5, .5, .3));
            E(v(B), e.translate(-23, -2.2, 62).scale(3, 1, 4), p(.5, .5, .5, .3));
            cc(e.translate(-23, -0.5, 66.5));
          }),
          E(v(B), e.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), p(.9, .9, .9, .2)),
          I(b => {
            b.g = () => e.translate(0, cb(1 - 5 * g()) * db(S[4].h, S[5].h) * Math.sin(1.35 * a) * 4);
            E(v(B), e.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), p(.7, .7, .7, .2));
            E(
              z(y(r(v(B), e.scale(3, 1.4, 2.7)), r(v(B), e.scale(1.2, 8, 1.2)))),
              e.translate(-33, -3, 55),
              p(.7, .7, .7, .2),
            );
          }),
          I(b => {
            b.g = () => e.translate(0, 0, cb(1 - 5 * g()) * db(S[4].h, S[5].h) * Math.sin(.9 * a) * 8);
            E(z(
              y(
                r(v(B), e.translate(-27, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2)),
                r(v(B), e.translate(-27, -3, 55).scale(1, 3), p(.9, .9, .9, .2)),
              ),
            ));
            E(v(B), e.translate(-39, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2));
          }),
          I(b => {
            b.g = () => e.translate(0, -6.5 * S[4].i);
            E(v(6), e.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), p(.7, .7, .7, .4));
          }),
          [...r(
            z(Ab(
              r(v(B), e.translate(0, -3).scale(11, 1.4, 3), p(.9, .9, .9, .2)),
              y(
                r(v(6), e.rotate(0, 0, 90).scale(6, 8, 6), p(.3, .6, .6, .3)),
                r(v(4, 0, .01), e.translate(0, 6).scale(12, 2, .75).rotate(0, 45), p(.3, .6, .6, .3)),
                r(v(6), e.rotate(0, 0, 90).scale(5, 12, 5), p(.3, .6, .6, .3)),
                ...[5, 0, -5].map(b =>
                  r(v(5), e.translate(b, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), p(.3, .6, .6, .3))
                ),
              ),
            )),
            e,
          )]),
        q =
          (E(m, e.translate(-53, 0, 55)),
            E(v(6), e.translate(-61.3, -2.4, 49).scale(3, 1, 5), p(.4, .6, .6, .3)),
            E(v(7), e.translate(-57, -2.6, 46).scale(4, 1, 4), p(.8, .8, .8, .3)),
            cc(e.translate(-55, -1.1, 46).rotate(0, 90)),
            I(b => {
              b.D = 0;
              b.g = () => e.translate(-75, (1 - S[5].i) * (1 - S[6].h) * 3, 55).rotate(180 * (1 - S[5].i) + Ca, 0);
              E(m);
            }),
            E(v(B), e.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), p(.7, .7, .7, .2)),
            E(v(3, 0, -0.5), e.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), p(.8, .8, .8, .2)),
            E(
              z(y(
                Ab(
                  r(v(B), e.translate(-100, -2.5, 55).scale(8, 1, 8), p(.8, .8, .8, .2)),
                  r(v(B), e.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), p(.8, .8, .8, .2)),
                  r(v(B), e.translate(-100, -2.6, 70).scale(3, 1.1, 7), p(.8, .8, .8, .2)),
                  r(v(B), e.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), p(.8, .8, .8, .2)),
                  r(v(6), e.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), p(.6, .6, .6, .3)),
                  r(v(B), e.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), p(.8, .8, .8, .2)),
                  r(v(B), e.translate(-100, .42, 92).scale(3, 1.1, 4.1), p(.8, .8, .8, .2)),
                ),
                r(v(8), e.translate(-100, -1, 55).scale(7, .9, 7), p(.3, .3, .3, .4)),
                r(v(8), e.translate(-100, -2, 55).scale(4, .3, 4), p(.4, .4, .4, .5)),
                r(v(8), e.translate(-100, -3, 55).scale(.6, 1, .6), p(.4, .4, .4, .5)),
              )),
              e,
            ),
            dc(e.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            dc(e.translate(-89, .2, 80), [0, 0, 6]),
            E(z(
              y(
                r(v(B), e.translate(-100, 1, 63).scale(7.5, 4), p(.5, .5, .5, .4)),
                r(v(B), e.translate(-100, 0, 70).scale(2, 2, 10), p(.5, .5, .5, .4)),
                r(v(20, 1), e.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), p(.5, .5, .5, .4)),
              ),
            )),
            I(b => {
              b.g = () => e.translate(-99.7, 5.3 * -S[6].h - 2, 63.5);
              E(l);
            }),
            B.map(({ x: b, z: f }) => {
              E(v(6), e.translate(7 * b - 100, -3, 7 * f + 55).scale(1, 8.1), p(.6, .15, .15, .8));
              [4, -0.4].map(w =>
                E(v(6), e.translate(7 * b - 100, w, 7 * f + 55).scale(1.3, .5, 1.3), p(.4, .2, .2, .8))
              );
            }),
            k(7, b => {
              E(
                v((23 * b + 1) % 5 + 5, 0, .55),
                e.translate(5 * Math.sin(b) - 101 + b, -2.3 - b, 44.9 - 2.8 * b).scaleSelf(
                  5 + b / 2,
                  1 + b / 6,
                  5 + b / 3,
                ),
                p(.5 - b / 17, .5 - (1 & b) / 9, .6, .3),
              );
            }),
            E(v(B), e.translate(-87, -9.5, 24).scale(7, 1, 3), p(.4, .5, .6, .4)),
            E(v(4), e.translate(-86, -9.2, 27).scale(5, 1, 5), p(.5, .6, .7, .3)),
            E(v(18, 1), e.translate(-86, -9, 31).scale(1.5, 1, 1.5), p(.3, .3, .4, .1)),
            cc(e.translate(-86, -7.5, 31)),
            I(b => {
              b.g = () => e.translate(0, 3.5 * (1 - ab(S[6].h, S[7].h)) + db(S[7].i, S[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(f =>
                E(v(B), e.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), p(.2, .5, .6, .2))
              );
            }),
            I(b => {
              b.g = () => {
                const f = db(S[7].i, S[6].i);
                return e.translate(0, f * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + f) * f);
              };
              [6, 18].map(f => E(v(B), e.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), p(.1, .4, .5, .2)));
            }),
            E(
              z(y(
                Ab(
                  r(v(B), e.scale(11, 1, 13), p(.3, .4, .6, .3)),
                  r(v(5), e.translate(0, 0, -7).scale(2, 1.2, 2), p(.2, .4, .7, .3)),
                  r(v(5), e.scale(9, 1.2, 9), p(0, .2, .3, .5)),
                ),
                r(v(5), e.scale(5.4, 5, 5.4), p(0, .2, .3, .5)),
              )),
              e.translate(-38.9, -11.3, 17),
            ),
            cc(e.translate(-38.9, -9.6, 10)),
            I(b => {
              b.g = () => e.translate(0, -7.3 * S[7].i);
              E(
                z(y(
                  Ab(
                    r(v(5), e.translate(0, 2).scale(5, 7, 5).skewY(8), p(.2, .4, .5, .5)),
                    r(v(5), e.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), p(.25, .35, .5, .5)),
                    r(v(5), e.translate(0, 9).scale(.6, 7, .6).skewY(8), p(.35, .3, .5, .5)),
                  ),
                  r(v(5), e.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), p(.2, .4, .5, .5)),
                )),
                e.translate(-38.9, -11.3, 17),
              );
              dc(e.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...qb(15).map(({ x: f, z: w }) => [3 * f, 3 * w, 1.5]));
            }),
            B.map(({ x: b, z: f }) => {
              c = e.translate(9 * b - 38.9, -7.3, 11 * f + 17);
              E(v(18, 1), c.scale(1, 4), p(.25, .25, .25, 1));
              [1.5, 8].map(w => E(v(18, 1), c.translate(0, w - 4).scale(1.5, .5, 1.5), p(.6, .6, .6, .3)));
            }),
            E(
              z(y(
                Ab(
                  r(v(6), e.translate(0, 0, -36).scale(15, 1.2, 15), p(.7, .7, .7, .3)),
                  r(v(B), e.translate(0, 0, -18).scale(4, 1.2, 6), p(.45, .4, .6, .3)),
                ),
                ...k(6, b =>
                  k(6, f =>
                    r(
                      v(6),
                      e.translate(4.6 * f - 12 + 2 * (1 & b), 0, 4.6 * b - 50 + 2 * Math.sin(4 * f)).scale(2, 5, 2),
                      p(.7, .7, .7, .3),
                    ))).flat(),
              )),
              e.translate(-38.9, -11.3, 17),
            ),
            dc(e.translate(-38.9, -8.4, -21), [0, 0, 12]),
            E(v(5), e.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), p(.8, .1, .25, .4)),
            cc(e.translate(-84, -0.5, 85).rotate(0, 45)),
            I(b => {
              b.g = () => bc(-123, 1.4, 55 + -65 * Ja);
              cc(e.translate(0, -3, -4).rotate(0, 180));
              E(fc);
            }),
            dc(e.translate(-115, .2, -12), [0, 0, 3.5]),
            z(y(
              r(v(B), e.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), p(.25, .25, .35, .3)),
              r(v(3), e.translate(0, 0, -5.5).scale(3, 2), p(.6, .3, .4, .3)),
              ...[-1.2, 1.2].map(b => r(v(B), e.translate(b, -0.5, 1).scale(.14, .3, 6.5), p(.7, .2, 0, .3))),
            ))),
        u = (I(b => {
          b.g = () => {
            var f = Math.sin(1.1 * a);
            return e.translate.call(e, 0, -2, db(S[10].h, S[11].h) * (0 > f ? -f : f) * -8.5 + 10);
          };
          k(2, f => E(q, e.translate(9 * f - 110 + (1 & f), 1.7, -12)));
        }),
          I(b => {
            b.g = () => {
              var f = Math.sin(2.1 * a);
              return e.translate.call(e, 0, -2, db(S[10].h, S[11].h) * (0 > f ? -f : f) * -8.5 + 10);
            };
            k(2, f => E(q, e.translate(9 * (f + 2) - 110 + (1 & f), 1.7, -12)));
          }),
          I(b => {
            b.g = () => {
              var f = Math.sin(1.5 * a);
              return e.translate.call(
                e,
                0,
                -2,
                -8.5 * ab((1 - S[10].h) * (1 - db(S[10].h, S[11].h)), db(S[10].h, S[11].h) * (0 > f ? -f : f)) + 10,
              );
            };
            k(3, f => E(q, e.translate(9 * f - 106, 1.7, -12)));
          }),
          E(
            z(y(
              Ab(
                r(v(B), e.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                r(v(B), e.translate(26.5, -0.6, 10).scale(17, 2, .5)),
              ),
              ...k(4, b => r(v(B), e.translate(13 + 9 * b + (1 & b), -0.8, 9).scale(1.35, 1.35, 9))),
              ...k(3, b => r(v(B), e.translate(17 + 9 * b, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            e.translate(-123, 0, -12),
            p(.5, .5, .6, .2),
          ),
          E(v(5), e.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), p(.25, .25, .35, 1)),
          E(v(B), e.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), p(.8, .8, .8, .2)),
          E(v(6), e.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), p(.6, .5, .7, .2)),
          cc(e.translate(-116, -1.4, -18).rotate(0, 180)),
          k(3, b => {
            E(hc, e.translate(12 * b - 109, -9, -12), p(.6, .6, .6, .3));
            E(hc, e.translate(-77, -9, -12 * b - 20).rotate(0, 90), p(.6, .6, .6, .3));
          }),
          E(z(
            y(
              r(v(12), e.translate(-77, -13.9, -12).scale(4, 18.2, 4), p(.7, .7, .7, .2)),
              r(v(B), e.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), p(.4, .5, .6, .2)),
              r(v(B), e.translate(-77, 0, -14).scale(1.5, 2.2, 2), p(.4, .5, .6, .2)),
              r(v(12), e.translate(-77, 2.8, -12).scale(3, 5, 3), p(.4, .5, .6, .2)),
            ),
          )),
          E(v(B), e.translate(-115.5, -17, -12).scale(.5, 15, 2.2), p(.6, .6, .6, .3)),
          E(v(B), e.translate(-77, -17, -50.5).scale(2.2, 15, .5), p(.6, .6, .6, .3)),
          E(v(B), e.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), p(.6, .6, .6, .3)),
          E(z(
            y(
              r(v(B), e.translate(-93, -5.8, -40).scale(9, 1, 5), p(.8, .8, .8, .1)),
              r(v(9), e.translate(-98, -5.8, -40).scale(3, 8, 3), p(.7, .7, .7, .2)),
            ),
          )),
          E(v(9), e.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), p(.5, .5, .5, .3)),
          cc(e.translate(-98, -4.4, -40).rotate(0, 90)),
          dc(e.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          E(z(
            y(
              Ab(
                r(v(6, 0, 0, .6), e.translate(-100, .7, 105.5).scale(8, 1, 11), p(.7, .7, .7, .2)),
                r(v(B), e.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), p(.7, .7, .7, .2)),
                r(v(B), e.translate(-91.2, .7, 107).scale(3, 1, 3.3), p(.7, .7, .7, .2)),
              ),
              r(v(5), e.translate(-100, .7, 113).scale(4, 3, 4), p(.7, .7, .7, .2)),
            ),
          )),
          k(4, b =>
            I(f => {
              f.g = () => {
                const w = db(S[8].i, S[12].i);
                return e.translate(
                  (2 < b ? 2 * (1 - w) + w : 0) - 100,
                  w * Math.sin(1.3 * a + 1.7 * b) * (3 + b / 3) + .7,
                  115 + (1 & b ? -1 : 1) * (1 - S[8].i) * (1 - S[12].i) * -7
                    + (.05 > w ? .05 : w) * Math.cos(1.3 * a + 7 * b) * (4 - 2 * (1 - b / 3)),
                );
              };
              E(
                v(6),
                e.translate(-14.6 - 4.8 * b - (2 < b ? 2 : 0), -b / 2.3, -21.5).scale(2.6, 1, 2.5),
                p(.5 - b / 8, b / 12 + .5, .7, .3),
              );
            })),
          I(b => {
            b.g = () => {
              const f = db(S[8].i, S[12].i);
              return e.translate(2.5 * (1 - f) - 139.7, -3 * (1 - S[8].h) + f * Math.sin(.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * f + 3), 0);
            };
            E(z(y(r(v(10), e.scale(6, 2, 6), p(.1, .6, .5, .3)), r(v(10), e.scale(3.3, 6, 3.3), p(.1, .6, .5, .5)))));
            c = e.translate(-7.5).rotate(0, 90);
            E(v(15), c.scale(3, 2.3, 3), p(.4, .4, .4, .3));
            E(v(10), c.scale(2, 2.5, 2), p(.3, .8, .7, .3));
            E(v(5), c.scale(1, 3), p(.5, .5, .5, .5));
            cc(c.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(f =>
              E(gc, e.rotate(90 * -f, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), p(1, 1, .8, .2))
            );
            dc(e.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(b => {
            E(v(15, 1), e.translate(-7.5 * b - 100, 3.7, 96).scale(.8, 4, .8), p(.6, .24, .2, .5));
            [7.2, 1.5].map(f =>
              E(v(15, 1), e.translate(-7.5 * b - 100, f + .7, 96).scale(1.1, .5, 1.1), p(.5, .24, .2, .4))
            );
            E(gc, e.translate(-5 * b - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * b - 90), p(1, 1, .8));
            E(
              z(y(
                r(v(B), e.translate(-4 * b, 3.5, -0.5).scale(4, 4, .7), p(.5, .5, .5, .4)),
                r(v(B), e.scale(3, 3, 10), p(.6, .24, .2, .5)),
                r(v(30, 1), e.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), p(.6, .24, .2, .5)),
                r(v(5), e.translate(-5.3 * b, 7).rotate(90, 0).scale(1.7, 5, 1.7), p(.6, .24, .2, .5)),
                r(v(5), e.translate(-5.3 * b, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), p(.6, .24, .2, .5)),
              )),
              e.translate(b - 100, .7, 97),
            );
          }),
          I(b => {
            b.g = () => e.translate(-100, .6 - 6 * S[12].h, 96.5).scale(.88, 1.2);
            E(l);
          }),
          [
            ...r(v(28, 1), e.scale(8, 1, 8), p(.45, .45, .45, .2)),
            ...r(v(5), e.translate(0, 1).scale(1, .2), p(.3, .3, .3, .2)),
          ]);
      I(b => {
        b.g = () => e.translate(-80, 1, 106).rotate(0, 40 + wa);
        E(z(
          y(
            r(v(28, 1), e.scale(8, 1, 8), p(.45, .45, .45, .2)),
            r(v(B), e.translate(0, 0, -5.5).scale(1.5, 3, 2.5), p(.45, .45, .45, .2)),
          ),
        ));
        E(v(8), e.translate(0, 2).scale(3, 1.5, 3), p(.7, .7, .7, .1));
        E(v(5), e.translate(0, 2).scale(1, 2), p(.3, .3, .3, .2));
        dc(e.translate(0, 3), ...qb(10).map(({ x: f, z: w }) => [5.6 * f, 5.6 * w, 2.5]));
      });
      I(b => {
        b.g = () => e.translate(-64, 1, 106).rotate(0, Ba);
        E(z(
          y(
            r(v(28, 1), e.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
            r(v(B), e.scale(9, 5, 2), p(.3, 0, 0, .3)),
          ),
        ));
        E(u);
        [-1, 1].map(f =>
          E(gc, e.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), p(1, 1, .8))
        );
      });
      I(b => {
        b.g = () => e.translate(-48, 1, 106).rotate(0, 180 - Ba);
        E(z(
          y(
            r(v(30, 1), e.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
            r(v(B), e.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)),
            r(v(B), e.translate(0, 0, 7).scale(2, 5, 9), p(.3, 0, 0, .3)),
          ),
        ));
        E(u);
      });
      I(b => {
        b.g = () => e.translate(-48, 1, 90).rotate(0, 270 + Ba);
        E(z(
          y(
            r(v(30, 1), e.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
            r(v(B), e.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)),
            r(v(B), e.translate(0, 0, -7).scale(2, 5, 9), p(.3, 0, 0, .3)),
          ),
        ));
        E(u);
      });
      E(v(B), e.translate(-56, 1, 106).scale(.7, .8, 2.5), p(.7, .7, .7, .2));
      E(v(B), e.translate(-48, 1, 98).scale(2.5, .8, .7), p(.7, .7, .7, .2));
      E(v(B), e.translate(-39, .4, 90).scale(2, 1, 2), p(.7, .7, .7, .3));
      E(v(B), e.translate(-34.2, .4, 90).scale(3, 1, 3), p(.7, .7, .7, .3));
      cc(e.translate(-34, 2.7, 96).rotate(-12, 0));
      E(v(5), e.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), p(.2, .5, .5, .6));
      [p(.1, .55, .45, .2), p(.2, .5, .5, .3), p(.3, .45, .55, .4)].map((b, f) =>
        I(w => {
          w.g = () =>
            e.translate(
              0,
              (1 - S[13].i) * (1 - S[14].i) * 3 + db(S[13].i, S[14].i) * Math.sin(1.5 * a + 1.5 * f) * 4.7,
            );
          E(v(8), e.translate(-23.5, f / 1.5 - .4, 90 + 6.8 * f).scale(3.6, 2 - f / 1.5, 3.6).rotate(0, 22.5), b);
          2 === f && E(v(6), e.translate(-29, .4, 90).scale(2.4, 1, 2.8), p(.6, .7, .6, .3));
          1 === f
            && E(v(B), e.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), p(.6, .6, .7, .3));
        })
      );
      E(z(
        y(
          r(v(6, 0, 0, .3), e.translate(0, -0.92, 95).scale(14, 2, 14), p(.8, .8, .8, .2)),
          r(v(5), e.translate(0, 0, 95).scale3d(6), p(.3, .3, .3, .5)),
        ),
      ));
      [8, -6.1].map((b, f) =>
        k(3, w =>
          E(
            hc,
            e.translate(6 * w - 6, b - (1 & w), 111 - .2 * (1 & w) - f),
            1 & w ? p(.5, .5, .5, .3) : p(.35, .35, .35, .5),
          ))
      );
      [-1, 1].map(b => E(gc, e.translate(-8 * b, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * b + 90), p(1, 1, .8)));
      cc(e.translate(0, 1.7, 82).rotate(0, 180));
      E(v(5), e.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), p(.5, .3, .3, .4));
      E(z(
        y(
          Ab(
            r(v(B), e.translate(0, 16, 110.5).scale(12, 1, 3), p(.5, .3, .3, .4)),
            r(v(B), e.translate(0, 16, 111).scale(3, 1, 3.8), p(.5, .3, .3, .4)),
          ),
          r(v(5), e.translate(0, 16, 103.5).scale(5.5, 5, 5.5), p(.5, .3, .3, .4)),
        ),
      ));
      I(b => {
        b.g = () => {
          const f = Math.sin(a);
          return e.translate(-2 * f).rotate(0, 0, 25 * f);
        };
        E(v(3), e.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), p(.5, .3, .3, .4));
        [22, 30].map(f => {
          E(v(6), e.translate(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), p(.7, .7, .7, .4));
          E(v(B), e.translate(0, 6.2, f + 95).scale(.5, 11, .5), p(.5, .3, .3, .4));
        });
      });
      E(v(6), e.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), p(.5, .6, .7, .3));
      E(v(B), e.translate(0, 16, 129).scale(1.5, 1, 2), p(.5, .6, .7, .3));
      E(v(7), e.translate(0, 16.2, 133).scale(5, 1, 5), p(.4, .5, .6, .4));
      I(b => {
        b.g = () => {
          const f = db(db((S[14].h + S[14].i) / 2, S[13].i), (S[15].h + S[15].i) / 2);
          return e.translate(0, 16 * f, 8.5 * cb(2 * f - 1) + 95);
        };
        E(v(5), e.scale(5, 1.1, 5), p(.5, .3, .3, .4));
        E(v(5), e.scale(5.5, .9, 5.5), p(.25, .25, .25, .4));
        cc(e.translate(0, 1.5, -1).rotate(0, 180));
      });
      dc(e.translate(0, 3, 95), ...qb(9).map(({ x: b, z: f }) => [9 * b, 9 * f, 4]));
      dc(e.translate(0, 19, 134), [0, 0, 3.5]);
    });
    Va = I(() => {
      Sa = [-1, 1].map(h =>
        I(() => {
          E(v(10, 1), e.translate(.3 * h, -0.8).scale(.2, .7, .24), p(1, .3, .4));
        })
      );
      [0, 180].map(h => E(gc, e.rotate(0, h).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), p(1, 1, .8)));
      E(sb(20), e.translate(0, 1).scale(.5, .5, .5), p(1, .3, .4));
      const g = r(
        z(y(v(15, 1), r(v(B), e.translate(0, 0, 1).scale(2, 2, .5)))),
        e.rotate(-90, 0).scale(.1, .05, .1),
        p(.3, .3, .3),
      );
      [-1, 1].map(h => E(g, e.translate(.2 * h, 1.2, .4).rotate(0, 20 * h, 20 * h)));
      E(v(B), e.translate(0, .9, .45).scale(.15, .02, .06), p(.3, .3, .3));
      E(sb(20), e.scale(.7, .8, .55), p(1, .3, .4));
    });
    Wa = [p(1, .5, .2), p(.7, 1, .2)].map(g =>
      I(() => {
        E(v(6, 1), e.scale(.13, 1.4, .13), p(.3, .3, .5));
        E(v(8), e.translate(0, 1).scale(.21, .3, .21), g);
        E(v(3), e.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), p(.2, .2, .2));
      })
    );
    Ya = I(() => {
      E(v(6), e.scale(.85, 1, .85), p(1, .3, .5));
    });
    Xa = I(() => {
      E(
        sb(40, 30, (g, h, l) => {
          const m = h / 30, q = .05 * g * Math.PI, u = m ** .6 * Math.PI / 2;
          g = m * m * Math.sin(g * Math.PI * .35) / 4;
          return 29 === h
            ? { x: l.C = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(q) * Math.sin(u),
              y: Math.cos(m * Math.PI) - m - g,
              z: Math.sin(q) * Math.sin(u) + Math.sin(g * Math.PI * 2) / 4,
            };
        }),
        e.scale3d(.7),
        p(1, 1, 1),
      );
      [-1, 1].map(g => E(sb(15), e.translate(.16 * g, .4, -0.36).scale3d(.09)));
    });
  },
  jc = (c, g, h, l) => {
    let m = 0, q = 0, u = 0, b = 1 / 0, f = -1 / 0, w = 1 / 0, D = -1 / 0, N = 1 / 0, R = -1 / 0;
    const ia = 1.1 * (h - g),
      Z = (new DOMMatrix(hb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, g, h))).multiplySelf(c).invertSelf();
    c = k(8, A => {
      A = Z.transformPoint({ x: 4 & A ? 1 : -1, y: 2 & A ? 1 : -1, z: 1 & A ? 1 : -1 });
      return m -= A.x = (ia * A.x | 0) / (ia * A.w),
        q -= A.y = (ia * A.y | 0) / (ia * A.w),
        u -= A.z = (ia * A.z | 0) / (ia * A.w),
        A;
    });
    g = e.rotate(298, 139).translateSelf(m / 8, q / 8, u / 8);
    return pb(c, g).map(({ x: A, y: Q, z: P }) => {
      b = b < A ? b : A;
      f = A < f ? f : A;
      w = w < Q ? w : Q;
      D = Q < D ? D : Q;
      N = N < P ? N : P;
      R = P < R ? R : P;
    }),
      N *= 0 > N ? l : 1 / l,
      R *= 0 < R ? l : 1 / l,
      e.scale(2 / (f - b), 2 / (D - w), 2 / (N - R)).translateSelf((f + b) / -2, (D + w) / -2, (N + R) / 2)
        .multiplySelf(g).toFloat32Array();
  },
  kc = (c, g = 35633) => {
    g = U.c6x(g);
    return U.s3c(g, c), U.c6a(g), g;
  },
  lc = (c, g) => {
    const h = {}, l = U.c1h();
    return U.abz(l, c), U.abz(l, kc(g, 35632)), U.l8l(l), m => m ? h[m] || (h[m] = U.gan(l, m)) : U.u7y(l);
  },
  mc = (c, g, h) => {
    const l = m => U.d97(4, m.H, 5123, 2 * m.I);
    if (La) {
      U.uae(c, !1, e.rotate(0, 40 * Math.sin(ka) - 70).toFloat32Array()), l(Va), Sa.map(l);
    } else {
      for (const m of Bb) {
        (g || m !== Va && m !== Sa[0] && m !== Sa[1]) && (U.uae(c, !1, m.l.toFloat32Array()), l(m));
      }
      for (const m of S) {
        U.uae(c, !1, m.l.toFloat32Array()), l(Wa[.5 < m.h ? 1 : 0]);
      }
      for (const m of Zb) {
        U.uae(c, !1, m.l.toFloat32Array()), l(h ? Ya : Xa);
      }
    }
  },
  nc = new Int32Array(10725888),
  oc = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls:<b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  gc = (() => {
    const c = k(
        11,
        h => e.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),
      ),
      g = qb(18);
    return k(10, h => rb(pb(g, c[h]).reverse(), pb(g, c[h + 1]), 1)).flat();
  })(),
  fc = z(
    y(
      r(v(20, 1, 1.15, 1), e.translate(0, -3).scale(3.5, 1, 3.5), p(.7, .4, .25, .7)),
      r(v(20, 1, 1.3, 1), e.translate(0, -2.5).scale(2.6, 1, 3), p(.7, .4, .25, .2)),
      r(v(B), e.translate(4, -1.2).scale3d(2), p(.7, .4, .25, .3)),
    ),
  ),
  hc = z(
    y(
      r(v(B), e.translate(0, -8).scale(6, 15, 2.2)),
      r(v(B), e.translate(0, -14.1).scale(4, 13, 4)),
      r(v(20, 1), e.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  ),
  Ub = new AudioContext(),
  Tb = Ub.createBufferSource(),
  U = hC.getContext("webgl2");
for (const c in U) {
  U[c[0] + [...c].reduce((g, h, l) => (g * l + h.charCodeAt(0)) % 434, 0).toString(36)] = U[c];
}
setTimeout(() => {
  let c = 0, g = 6;
  const h = () => {
      if (h4.innerHTML += ".", !--g) {
        let u = 0, b = 0, f = 1, w = 0, D = 0, N = 0, R = !1, ia, Z, A, Q, P, ba, G, da, X, Y;
        const O = { x: 0, y: 0, z: 0 },
          ma = new Int32Array(256),
          Oa = () => {
            const { u: t, G: x } = S[va], { x: F, y: K, z: C } = x.transformPoint({ x: 0, y: 8, z: -3 });
            n.x = O.x = F;
            n.y = O.y = G = K;
            n.z = O.z = C;
            Z =
              ba =
              P =
              A =
              Q =
                0;
            f = 1;
            u = b = t?.F || 1;
          },
          xa = () => {
            let t = 0,
              x = 0,
              F = (NO_INLINE(() => {
                let ca = 0, T = 0, oa = 0, Da = 0, Ea = 0;
                ma.fill(0);
                for (let ya = 0; 31 > ya; ++ya) {
                  let kb = 0;
                  const pa = 512 * ya;
                  for (let Ta = 0; 128 > Ta; Ta++) {
                    let qa = pa + 4 * Ta;
                    var Ga = (Fa[qa] + Fa[1 + qa]) / 255;
                    if (qa = Fa[2 + qa], 14 < Ta && 114 > Ta && (kb += Ga), qa && Ga) {
                      Ga = ma[qa] + 1, ma[qa] = Ga, ca > Ga || (ca = Ga, T = qa);
                    }
                  }
                  3 > kb && 5 < ya && (Da += ya / 32);
                  3 < kb && (7 < ya && (oa += ya / 15), Ea = 1);
                }
                T && (Ea = 1);
                f ? T && (f = 0, b = T) : b = T || u;
                u = T;
                Z = Ea;
                A = J(A, Ea ? 6.5 : 8, 4);
                O.y += oa / 41 - (Ea ? 1 : A) * Da / 41 * A * d;
              })(),
                NO_INLINE(() => {
                  for (let Ea = 32; 128 > Ea; Ea += 2) {
                    var ca = 0;
                    let Ga = 0;
                    var T = 0;
                    let ya = 0;
                    const kb = 512 * Ea;
                    for (let pa = Ea >> 1 & 1; 128 > pa; pa += 2) {
                      var oa = kb + 4 * pa;
                      const Ta = kb + 4 * (127 - pa), qa = Fa[oa] / 255, Fb = Fa[1 + Ta] / 255;
                      var Da = pa / 63.5 - 1;
                      Da = 1 - (0 > Da ? -Da : Da);
                      if (
                        10 < pa && 118 > pa
                        && (ca = ab(ca, ab(qa * Da, qa * Fa[Ta] / 127.5)),
                          Ga = ab(Ga, ab(Fb * Da, Fb * Fa[1 + oa] / 255))), 54 > pa || 74 < pa
                      ) {
                        oa = (1 - Da) * (Fb < qa ? qa : Fb) / 3,
                          .001 < oa && (64 > pa && oa > T ? T = oa : 64 < pa && oa > ya && (ya = oa));
                      }
                    }
                    T = ya - T;
                    ca = Ga - ca;
                    (0 > T ? -T : T) > (0 > t ? -t : t) && (t = T);
                    (0 > ca ? -ca : ca) > (0 > x ? -x : x) && (x = ca);
                  }
                })(),
                (Sb[0] ? 1 : 0) + (Sb[2] ? -1 : 0) + ha),
              K = (Sb[1] ? 1 : 0) + (Sb[3] ? -1 : 0) + ja;
            var C = navigator.getGamepads()[0];
            if (C) {
              var M = T => ca[T]?.pressed || 0 < ca[T]?.value;
              const ca = C.buttons;
              C = C.axes;
              var L = M(1) || M(3) || M(2) || M(0);
              L !== R && (R = L) && (Sb[5] = 1);
              F += (.2 < bb(-C[0]) ? -C[0] : 0) + (M(14) ? 1 : 0) + (M(15) ? -1 : 0);
              K += (.2 < bb(-C[1]) ? -C[1] : 0) + (M(12) ? 1 : 0) + (M(13) ? -1 : 0);
              Ma && (.3 < bb(C[2]) && (Kb += 80 * C[2] * d), .3 < bb(C[3]) && (Jb += 80 * C[3] * d));
            }
            .05 > (0 > K ? -K : K) && (K = 0);
            .05 > (0 > F ? -F : F) && (F = 0);
            M = Math.atan2(K, F);
            C = cb(Math.hypot(K, F));
            var W = (F = C * Math.cos(M), K = C * Math.sin(M), cb(1 - 5 * ab(0 > t ? -t : t, 0 > x ? -x : x)));
            L =
              (b || (t += P * W * d, x += ba * W * d),
                P = J(P, 0, Z ? 8 : 4),
                ba = J(ba, 0, Z ? 8 : 4),
                Q = J(Q, Z ? (F || K ? Z ? 7 : 4 : 0) * W : 0, Z ? .1 < W ? 10 : F || K ? 5 : 7 : 1),
                Ma ? Kb * $a : Math.PI);
            W = Math.sin(L) * Q * d;
            var ra = Math.cos(L) * Q * d;
            L = (t -= F * ra - K * W, x -= F * W + K * ra, b && Bb[b].D && Bb[b].l || e);
            W = L.inverse();
            if (
              W.m41 = 0,
                W.m42 = 0,
                W.m43 = 0,
                { x: t, z: x } = W.transformPoint({ x: t, z: x, w: 0 }),
                O.x += t,
                O.z += x,
                b !== ia
            ) {
              ia = b;
              const { x: ca, y: T, z: oa } = L.inverse().transformPoint(n);
              O.x = ca;
              O.y = T;
              O.z = oa;
            }
            W = n.x;
            ra = n.z;
            const { x: pc, y: Nb, z: qc } = L.transformPoint(O);
            L = (n.x = pc, n.y = Nb, n.z = qc, bb(G - Nb));
            G = J(G, Nb + .1, 50 * L + 5);
            b && (P = (n.x - W) / d, ba = (n.z - ra) / d);
            (F || K) && (w = 90 - M / $a);
            D = fb(D, w, 8 * d);
            N += (C - N) * cb(10 * d);
          },
          Pa = t => {
            requestAnimationFrame(Pa);
            var x = (t - (Na || t)) / 1e3;
            d = La ? Sb[5] = 0 : .066 < x ? .066 : x;
            a += d;
            ka += x;
            Na = t;
            if (
              0 < d
              && (U.b6o(36160, sa),
                U.r9r(0, 0, 128, 128, 6408, 5121, Fa),
                U.iay(36160, [36064]),
                NO_INLINE(xa)(),
                ec()), 0 < d
            ) {
              if (da = gb(da, n.x, .5, d), X = gb(X, n.y, 2, d), Y = gb(Y, n.z, .5, d), Ma) {
                t = 200 * f,
                  Cb = J(Cb, n.x, 18 + t),
                  Db = J(Db, n.y + 1.5, 15 + t),
                  Eb = J(Eb, n.z, 18 + t),
                  Jb = ab(87 > Jb ? Jb : 87, -87);
              } else {
                if (
                  Cb = gb(Cb, da, 1, 2 * d),
                    Db = gb(Db, X + 13 + 15 * f, 4, 2 * d),
                    Eb = gb(Eb, Y + -18, 1, 2 * d),
                    t = Eb - Y,
                    1 < (0 > t ? -t : t)
                ) {
                  x = Cb - da;
                  const F = Db - X;
                  Kb = 270 + Math.atan2(t, x) / $a;
                  Jb = 90 - Math.atan2(Math.hypot(t, x), F) / $a;
                }
              }
              if (Kb = eb(Kb), 0 < d) {
                t = db(S[12].h, S[13].h),
                  a > na && (h4.innerHTML = "", na = 0),
                  x = J(Ca, 0, 1),
                  Ca = x + (eb(Ca + 60 * d) - x) * cb(S[5].h - S[6].i),
                  x = J(wa, 0, 5),
                  wa = x + (eb(wa + 56 * d) - x) * (0 > t ? 0 : 1 < t ? 1 : t),
                  x = J(Ba, 0, 4),
                  Ba = x + (eb(Ba + 48 * d) - x) * (0 > t ? 0 : 1 < t ? 1 : t),
                  t = 2 * S[9].i - 1,
                  Ja = J(Ja, S[9].i, .2 + .3 * (0 > t ? -t : t)),
                  Ia = J(Ia, Ha ? Ia + (-9 - Ia) * cb(1.5 * d) : cb(a / 3), 1),
                  1 === S[0].j && .8 < S[0].h && (13 > la
                    ? (S[0].j = 0, Ha || (h4.innerHTML = "Not leaving now, there are souls to catch!", na = a + 3))
                    : Ha
                      || (Ha
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", na = a + 1 / 0),
                        Ha = 1)),
                  Sb[5] = 0,
                  (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && Oa();
              }
            }
            t = La
              ? e.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + cb(hC.clientWidth / 1e3))
              : e.rotate(-Jb, -Kb, -0).invertSelf().translateSelf(-Cb, -Db, -Eb);
            0 < d
              && (za(),
                U.b6o(36160, sa),
                U.v5y(0, 0, 128, 128),
                U.cbf(!0, !1, !0, !1),
                U.c4s(16640),
                U.uae(za("b"), !1, e.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, .3 - n.z).toFloat32Array()),
                mc(za("c"), 0, 1),
                U.cbf(!1, !0, !1, !1),
                U.c4s(16640),
                U.cbf(!1, !0, !0, !1),
                U.uae(za("b"), !1, e.translate(-n.x, -n.y, -n.z - .3).toFloat32Array()),
                mc(za("c"), 0, 1),
                U.cbf(!0, !0, !0, !0),
                1 === b && (S[9].j = -15 > n.x && 0 > n.z ? 1 : 0));
            ub();
            U.v5y(0, 0, 2048, 2048);
            Aa[0](jc(t, .3, 55, 10));
            Aa[1](jc(t, 55, 177, 11));
            U.b6o(36160, null);
            ea();
            U.v5y(0, 0, U.drawingBufferWidth, U.drawingBufferHeight);
            U.c4s(16640);
            U.uae(ea("a"), !1, hb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
            U.uae(ea("b"), !1, t.toFloat32Array());
            U.ubu(ea("k"), Cb, Db, Eb);
            Aa[0]();
            Aa[1]();
            mc(ea("c"), !Ma);
            fa();
            U.ubu(fa("j"), U.drawingBufferWidth, U.drawingBufferHeight, ka);
            La ? U.ubu(fa("k"), 0, 0, 0) : U.ubu(fa("k"), Cb, Db, Eb);
            U.uae(fa("b"), !1, t.inverse().toFloat32Array());
            U.d97(4, 3, 5123, 0);
          },
          Fa = new Uint8Array(65536),
          Ob = m;
        var q = kc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=c*vec4(e,0);}",
        );
        const ub = lc(
            kc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*vec4(f.xyz,1);}"),
            "#version 300 es\nvoid main(){}",
          ),
          fa = lc(
            kc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          za = lc(
            q,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=m.w>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          ea = lc(
            q,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          sa =
            (fa(),
              U.ubh(fa("q"), 3),
              za(),
              U.uae(za("a"), !1, hb(1.4, .59, 1e-4, 1)),
              ea(),
              U.ubh(ea("q"), 3),
              U.c5w());
        q = U.c3z();
        const lb = U.c25(),
          Aa = k(2, t => {
            let x;
            const F = U.c25(), K = U.c5w(), C = ea(t ? "j" : "i");
            return ea(),
              U.ubh(ea(t ? "h" : "g"), t),
              U.b6o(36160, K),
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
              M => {
                M
                  ? (x = M, U.b6o(36160, K), U.iay(36160, [36096]), U.c4s(256), U.uae(ub("b"), !1, x), mc(ub("c"), !Ma))
                  : U.uae(C, !1, x);
              };
          });
        let Za = 0, Qa, Ra;
        const ta = [],
          Gb = [],
          Hb = [],
          ua = [],
          Ua = new Map(),
          V = new Int32Array(8),
          mb = t => {
            let { x, y: F, z: K } = Ra[t];
            H[0] = x;
            H[1] = F;
            H[2] = K;
            t = "" + (Ra.C ? Ib : V);
            let C = Ua.get(t);
            return void 0 !== C
              ? (x = 3 * C, ua[x] = (ua[x++] + V[5]) / 2, ua[x] = (ua[x++] + V[6]) / 2, ua[x] = (ua[x] + V[7]) / 2)
              : (Ua.set(t, C = Ua.size), Gb.push(x, F, K, H[3]), Hb.push(V[4]), ua.push(V[5], V[6], V[7])),
              C;
          },
          Ib = new Int32Array(V.buffer, 0, 5),
          H = new Float32Array(V.buffer);
        for (Qa of Bb) {
          for (Ra of (H[3] = Qa.F, Qa.s)) {
            const { x, y: F, z: K } = nb(Ra);
            V[4] = 0 | Ra.v;
            V[5] = 32767 * x;
            V[6] = 32767 * F;
            V[7] = 32767 * K;
            for (let C = 2, M = mb(0), L = mb(1); Ra.length > C; ++C) {
              ta.push(M, L, L = mb(C));
            }
          }
          Qa.s = null;
          const t = Za;
          Qa.I = Za;
          Qa.H = (Za = ta.length) - t;
        }
        U.b11(34963, U.c1b());
        U.b2v(34963, new Uint16Array(ta), 35044);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Float32Array(Gb), 35044);
        U.v7s(0, 4, 5126, !1, 0, 0);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Int16Array(ua), 35044);
        U.v7s(1, 3, 5122, !0, 0, 0);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Uint32Array(Hb), 35044);
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
        U.b9j(3553, lb);
        U.fas(36160, 36064, 3553, lb, 0);
        U.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        U.b9j(3553, U.c25());
        U.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Ob);
        U.gbn(3553);
        U.t2z(3553, 10241, 9987);
        U.t2z(3553, 10240, 9729);
        Va.g = () => e.translate(n.x, G, n.z).rotateSelf(0, D);
        Sa.map((t, x) => {
          t.g = () =>
            Va.l.translate(0, N * cb(.45 * Math.sin(9.1 * a + Math.PI * x - Math.PI / 2))).rotateSelf(
              N * Math.sin(9.1 * a + Math.PI * x) * .25 / $a,
              0,
            );
        });
        try {
          const [t, x, F, K, C] = JSON.parse(localStorage.DanteSP22);
          S.map((M, L) => M.h = M.i = M.j = L ? 0 | t[L] : 0);
          Zb.map((M, L) => M.j = 0 | x[L]);
          va = F;
          a = K;
          Ja = C;
        } catch (t) {
        }
        Ia = 0 > va ? 0 : 1 < va ? 1 : va;
        h4.innerHTML = "";
        na = 0;
        $b();
        ec();
        NO_INLINE(Xb)();
        Oa();
        Cb = da = n.x;
        Db = (X = n.y) + 13;
        Eb = (Y = n.z) + -18;
        requestAnimationFrame(Pa);
      }
    },
    l = () => {
      if (5 > c) {
        var q = 0, u = c++;
        let [D, N, R, ia, Z, A, Q, P, ba, G, da, X, Y, O, ma, Oa, xa, Pa, Fa, Ob, ub] = Lb[u];
        G = G * G * 4;
        for (const fa of [5513, 4562, 3891]) {
          let za = 0, ea = 0, sa, lb, Aa, Za, Qa;
          const Ra = [],
            ta = new Int32Array(768 * fa),
            Gb = 2 ** (X - 9) / fa,
            Hb = Math.PI * 2 ** (xa - 8) / fa,
            ua = Fa * fa & -2;
          for (let Ua = 0; 11 >= Ua; ++Ua) {
            for (
              let V = 0, mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * u + Ua];
              32 > V;
              ++V
            ) {
              const Ib = (32 * Ua + V) * fa;
              for (var b = 0; 4 > b; ++b) {
                if (sa = 0, mb && (sa = ub[mb - 1].charCodeAt(V + 32 * b) - 40, sa += 0 < sa ? 106 : 0), sa) {
                  var f;
                  if (!(f = Ra[sa])) {
                    f = sa;
                    let H = void 0, t = void 0;
                    var w = sa;
                    let x = 0, F = 0;
                    const K = 2 > u ? Qb : Mb, C = 2 > u ? 1 > u ? Pb : Rb : Mb, M = new Int32Array(P + ba + G);
                    for (let L = 0, W = 0; P + ba + G > L; ++L, ++W) {
                      let ra = 1;
                      P > L ? ra = L / P : P + ba > L || (ra = (1 - (ra = (L - P - ba) / G)) * 3 ** (-da / 16 * ra));
                      0 > W
                        || (W -= 4 * fa,
                          t = 0.003960 * 2 ** ((w + N - 256) / 12),
                          H = 0.003960 * 2 ** ((w + Z - 256) / 12) * (1 + (u ? 0 : 8e-4 * 9)));
                      M[L] = 80
                          * (K(x += t * ra ** (R / 32)) * D + C(F += H * ra ** (A / 32)) * ia
                            + (Q ? (2 * Math.random() - 1) * Q : 0))
                          * ra | 0;
                    }
                    f = Ra[f] = M;
                  }
                  for (let H = 0, t = 2 * Ib; f.length > H; ++H, t += 2) {
                    ta[t] += f[H];
                  }
                }
              }
              for (let H, t = 0; fa > t; ++t) {
                b = 0,
                  f = 2 * (Ib + t),
                  ((H = ta[f]) || Qa)
                  && (Aa = 0.003080 * Y,
                    1 != u && 4 != u || (Aa *= Math.sin(Gb * f * Math.PI * 2) * Ob / 512 + .5),
                    Aa = 1.5 * Math.sin(Aa),
                    za += Aa * ea,
                    Za = (1 - O / 255) * (H - ea) - za,
                    ea += Aa * Za,
                    H = 4 == u ? ea : 3 == u ? Za : za,
                    u || (H = 1 > (H *= 22e-5) ? -1 < H ? Math.sin(H / 4 * Math.PI * 2) : -1 : 1, H /= 22e-5),
                    H *= ma / 32,
                    Qa = 1e-5 < H * H,
                    lb = Math.sin(Hb * f) * Oa / 512 + .5,
                    b = H * (1 - lb),
                    H *= lb),
                  ua > f || (b += ta[
                    f - ua
                    + 1
                  ] * Pa / 255,
                    H += ta[f - ua] * Pa / 255),
                  nc[q + f] += ta[f] = b,
                  ++f,
                  nc[q + f] += ta[f] = H;
              }
            }
          }
          q += ta.length;
        }
        setTimeout(l);
      } else {
        q = Ub.createBuffer(2, 5362944, 44100);
        for (u = 0; 2 > u; u++) {
          for (let D = u, N = q.getChannelData(u); 10725888 > D; D += 2) {
            N[D >> 1] = nc[D] / 65536;
          }
        }
        Tb.buffer = q;
        Tb.loop = !0;
      }
      h();
    },
    m = new Image();
  m.onload = m.onerror = () => {
    h();
  };
  m.src = oc;
  setTimeout(l, 50);
  NO_INLINE(ic)();
});
