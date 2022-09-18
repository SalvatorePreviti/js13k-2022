let ca = 0,
  ja = !0,
  ka = 0,
  ma = 0,
  na = 0,
  a = 0,
  oa = 0,
  qa = 0,
  xa = 0,
  ya = 0,
  Ba = 0,
  Ca = 0,
  Fa = 0,
  Ga = 0,
  Ha = 0,
  d = .066,
  Ia,
  Ja,
  Ka,
  La,
  Pa,
  Ra,
  Sa;
const Ta = Math.PI / 180,
  e = new DOMMatrix(),
  Ua = (b, g) => g < b ? b : g,
  Va = b => 0 > b ? -b : b,
  Wa = b => 0 > b ? 0 : 1 < b ? 1 : b,
  Xa = (b, g) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > g ? 0 : 1 < g ? 1 : g)),
  Ya = b => Math.atan2(Math.sin(b *= Ta), Math.cos(b)) / Ta,
  Za = (b, g, l) => {
    b *= Ta;
    g = (g * Ta - b) % (2 * Math.PI);
    return (b + (2 * g % (2 * Math.PI) - g) * (0 > l ? 0 : 1 < l ? 1 : l)) / Ta;
  },
  $a = (b, g, l, h) => {
    var k = g - b;
    b += Math.sign(g - b) * Ua(0, (0 > k ? -k : k) ** .9 - l) * h * 2;
    return b + (g - b) * Wa(h / 7);
  },
  m = (b, g) => Array.from(Array(b), (l, h) => g(h)),
  ab = (b, g, l, h) => [b, 0, 0, 0, 0, g, 0, 0, 0, 0, (h + l) / (l - h), -1, 0, 0, 2 * h * l / (l - h), 0],
  bb = ({ x: b, y: g, z: l }, h) => b * h.x + g * h.y + l * h.z,
  cb = ({ x: b, y: g, z: l }) => {
    var h = n;
    return Math.hypot(b - h.x, g - h.y, l - h.z) || 0;
  },
  db = b => {
    let g = 0, l = 0, h = 0, k, p = b.at(-1);
    for (k of b) {
      g += (p.y - k.y) * (p.z + k.z), l += (p.z - k.z) * (p.x + k.x), h += (p.x - k.x) * (p.y + k.y), p = k;
    }
    return k = Math.hypot(g, l, h), g /= k, l /= k, h /= k, { x: g, y: l, z: h, w: g * p.x + l * p.y + h * p.z };
  },
  q = (b, g, l, h = 0) => 255 * h << 24 | 255 * l << 16 | 255 * g << 8 | 255 * b,
  eb = (b, g, l) => (b.B = l, b.u = g, b),
  fb = (b, g, l = b.u) =>
    eb(
      b.map(h =>
        ((
          { x: k, y: p, z: t },
          c,
        ) => ({ x: k, y: p, z: t } = c.transformPoint({ x: k, y: p, z: t }), { x: k, y: p, z: t }))(h, g)
      ),
      l,
      b.B,
    ),
  r = (b, g, l) => b.map(h => fb(h, g, l)),
  ib = (b, g = 0) =>
    m(b, l => {
      const h = Math.cos(2 * Math.PI * l / b);
      return { x: Math.sin(2 * Math.PI * l / b), y: 0, z: .01 > (0 > h ? -h : h) ? h : 0 > h ? h - g : h + g };
    }),
  jb = (b, g, l) =>
    b.map((h, k, { length: p }) => eb([h, g[p - k - 1], g[p - (k + 1) % p - 1], b[(k + 1) % p]], b.u, l)),
  u = (b, g, l = 0, h) => {
    h = b.length ? b : ib(b, h);
    b = fb(h, e.translate(0, 1).scale3d(0 < l ? l : 1));
    l = fb(h, e.translate(0, -1).scale3d(0 > l ? -l : 1)).reverse();
    return [...jb(l, b, g), l, b];
  },
  kb = (
    b,
    g = b,
    l = (
      h,
      k,
    ) => (k *= Math.PI / g,
      { x: Math.cos(h *= 2 * Math.PI / b) * Math.sin(k), y: Math.cos(k), z: Math.sin(h) * Math.sin(k) }),
  ) => {
    const h = [];
    for (let k = 0; b > k; k++) {
      for (let p = 0; g > p; p++) {
        const t = eb([], 0, 1);
        h.push(t);
        t.push(l(k, p, t));
        p && t.push(l((k + 1) % b, p, t));
        g - 1 > p && t.push(l((k + 1) % b, p + 1 % g, t));
        t.push(l(k, p + 1 % g, t));
      }
    }
    return h;
  },
  lb = (b, g) => {
    var l, h, k, p = g.A;
    for (var t = 0; p.length > t; ++t) {
      if (-0.00008 > (k = bb(b, p[t]) - b.w) ? h = g : 8e-5 < k && (l = g), h && l) {
        h = [];
        k = [];
        p = g.A;
        t = g.v;
        let c = p.at(-1), f = bb(b, c) - b.w;
        for (const w of p) {
          l = bb(b, w) - b.w,
            8e-5 > f && k.push(c),
            -0.00008 < f && h.push(c),
            (8e-5 < f && -0.00008 > l || -0.00008 > f && 8e-5 < l)
            && (f /= l - f,
              c = { x: c.x + (c.x - w.x) * f, y: c.y + (c.y - w.y) * f, z: c.z + (c.z - w.z) * f },
              h.push(c),
              k.push(c)),
            c = w,
            f = l;
        }
        return {
          o: 2 < h.length && { A: eb(h, p.u, p.B), v: t, s: g },
          m: 2 < k.length && { A: eb(k, p.u, p.B), v: t, s: g },
        };
      }
    }
    return { o: l, m: h };
  },
  mb = (b, g, l = db(g.A)) => {
    if (b) {
      const { o: h, m: k } = lb(b, g);
      h || k || b.C.push(g);
      h && (b.o = mb(b.o, h, l));
      k && (b.m = mb(b.m, k, l));
    } else {
      b = { x: l.x, y: l.y, z: l.z, w: l.w, C: [g], o: 0, m: 0 };
    }
    return b;
  },
  nb = (b, g, l) => {
    const h = [],
      k = (p, t) => {
        let { o: c, m: f } = lb(p, t);
        c || f || (0 < l * bb(p, g) ? c = t : f = t);
        c && (p.o ? k(p.o, c) : h.push(c));
        f && p.m && k(p.m, f);
      };
    for (const p of g.C) {
      k(b, p);
    }
    return h;
  },
  ob = (b, g) => b && (g(b), ob(b.o, g), ob(b.m, g)),
  pb = b => b.length ? b.reduce((g, l) => mb(g, { A: l, v: 0, s: 0 }), 0) : b,
  qb = b => (ob(b, g => {
    const l = g.m;
    g.m = g.o;
    g.o = l;
    g.x *= -1;
    g.y *= -1;
    g.z *= -1;
    g.w *= -1;
    for (const h of g.C) {
      h.v = !h.v;
    }
  }),
    b),
  sb = (...b) =>
    b.reduce((g, l) => {
      const h = [];
      if (g = pb(g), l) {
        l = pb(l);
        ob(g, k => k.C = nb(l, k, 1));
        ob(l, k => h.push([k, nb(g, k, -1)]));
        for (const [k, p] of h) {
          for (const t of p) {
            mb(g, t, k);
          }
        }
      }
      return g;
    }),
  y = (b, ...g) => qb(sb(qb(pb(b)), ...g)),
  A = b => {
    const g = new Map(),
      l = new Map(),
      h = k => {
        if (k.s) {
          const p = g.get(k.s);
          p ? (l.delete(p), k = h(k.s)) : g.set(k.s, k);
        }
        return k;
      };
    return ob(b, k => {
      for (const p of k.C) {
        l.set(h(p), p.v);
      }
    }),
      Array.from(l, ([{ A: k }, p]) => {
        const t = k.map(({ x: c, y: f, z: w }) => ({ x: c, y: f, z: w }));
        return eb(p ? t.reverse() : t, k.u, k.B);
      });
  },
  B = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  tb = [],
  ub = [],
  vb = [],
  wb = [],
  xb = [],
  yb = [[]],
  zb = new Map(),
  Ab = new Int32Array(7),
  Fb = b => {
    let { x: g, y: l, z: h } = Ja[b];
    Bb[0] = g;
    Bb[1] = l;
    Bb[2] = h;
    b = "" + (Ja.B ? Cb : Ab);
    let k = zb.get(b);
    return void 0 !== k
      ? (g = 3 * k, wb[g] = (wb[g++] + Ab[4]) / 2, wb[g] = (wb[g++] + Ab[5]) / 2, wb[g] = (wb[g] + Ab[6]) / 2)
      : (zb.set(b, k = zb.size), vb.push(g, l, h), wb.push(Ab[4], Ab[5], Ab[6]), xb.push(Ab[3])),
      k;
  },
  D = (b, g = e, l) => yb.at(-1).push(...r(b, g, l)),
  Gb = () => {
    var b = yb.at(-1);
    for (Ja of b) {
      const { x: g, y: l, z: h } = db(Ja);
      Ab[3] = 0 | Ja.u;
      Ab[4] = 32767 * g;
      Ab[5] = 32767 * l;
      Ab[6] = 32767 * h;
      for (let k = 2, p = Fb(0), t = Fb(1); Ja.length > k; ++k) {
        ub.push(p, t, t = Fb(k));
      }
    }
    b.length = 0;
    b = ca;
    return { J: b, I: (ca = ub.length) - b };
  },
  G = b => {
    const g = Ia, l = { l: e, G: tb.length + 1, F: 1 };
    b = (Ia = l, tb.push(l), yb.push([]), b(l) || Gb());
    return l.D = b, yb.pop(), Ia = g, l;
  };
var Hb = -11, Ib = 17, Jb = -90, Kb = 0, Lb = 0;
const Mb = [[
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
  Qb = b => b % 1 * 2 - 1,
  Rb = b => {
    b = b % 1 * 4;
    return 2 > b ? b - 1 : 3 - b;
  },
  Sb = [],
  Vb = () => {
    Ka || !ja ? Tb.disconnect() : Tb.connect(Ub.destination);
    b4.innerHTML = "Music: " + ja;
  },
  Wb = (b = !1) => {
    if (Ka !== b) {
      Ka = b;
      La = 0;
      try {
        b ? document.exitPointerLock() : Tb.start();
      } catch {
      }
      document.body.className = b ? "l m" : "l";
      Vb();
    }
  },
  Xb = () => {
    let b = 0, g = 0, l = 0, h, k, p;
    const t = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Sb.length = ka = ma = 0;
      h = k = void 0;
      document.hidden && Wb(!0);
    };
    b1.onclick = () => Wb();
    b2.onclick = () => {
      Wb();
      La = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      ja = !ja;
      Vb();
    };
    b5.onclick = () => Wb(!0);
    onclick = () => {
      p = 1;
      Ka || (Sb[5] = !0, La && hC.requestPointerLock());
    };
    document.onvisibilitychange = onresize = onblur = t;
    onkeydown = onkeyup = ({ code: c, target: f, type: w, repeat: C }) => {
      C || ((f = !!w[5] && f === document.body) && ("Escape" === c || "Enter" === c && Ka)
        ? Ka && !p || Wb(!Ka)
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
          5 === c ? f && (Sb[c] = 1) : Sb[c] = f));
    };
    onmousemove = ({ movementX: c, movementY: f }) => {
      La && (c || f) && (Lb += .1 * c, Kb += .1 * f);
    };
    hC.ontouchstart = c => {
      if (!Ka) {
        for (const f of c.changedTouches) {
          La && f.pageX > hC.clientWidth / 2 ? h || (h = f, b = Lb, g = Kb) : k = k || f;
        }
        l = na;
      }
    };
    hC.ontouchmove = ({ changedTouches: c }) => {
      if (!Ka) {
        for (const { pageX: f, pageY: w, identifier: C } of c) {
          h?.identifier === C && (Lb = b + (f - h.pageX) / 3, Kb = g + (w - h.pageY) / 3),
            k?.identifier === C
            && (ka = -(f - k.pageX) / 18,
              ma = -(w - k.pageY) / 18,
              ka = .35 > (0 > ka ? -ka : ka) ? 0 : .8 * ka,
              ma = .35 > (0 > ma ? -ma : ma) ? 0 : .8 * ma);
        }
      }
    };
    hC.ontouchend = c => {
      for (const f of c.changedTouches) {
        f.identifier === h?.identifier && (h = void 0), f.identifier === k?.identifier && (k = void 0, ma = ka = 0);
      }
      c.preventDefault();
      c = na - l;
      (!l || .02 < c && .4 > c) && (Sb[5] = !0);
    };
    oncontextmenu = () => !1;
    t();
    Wb(!0);
  },
  H = (b, g, l) => b + (g - b) * Wa(1 - Math.exp(-l * d)),
  Yb = ({ j: b }) => b,
  U = [],
  Zb = [],
  $b = () => {
    oa = Zb.reduce((b, g) => b + g.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[oa];
  },
  ac = () => {
    $b();
    localStorage.DanteSP22 = JSON.stringify([U.map(Yb), Zb.map(Yb), xa, a, Ha]);
  },
  n = { x: 0, y: 0, z: 0 },
  bc = (b, g, l) =>
    e.translate(b + Math.sin(a + 2) / 5, g + Math.sin(.8 * a) / 3, l).rotateSelf(
      2 * Math.sin(a),
      Math.sin(.7 * a),
      Math.sin(.9 * a),
    ),
  cc = b => {
    const g = Ia,
      l = U.length,
      h = {
        j: 0,
        h: 0,
        i: 0,
        s: g,
        g() {
          const k = h.j, p = h.h, t = h.i, c = g.l.multiply(b);
          h.l = c;
          2.9 > cb(c.transformPoint()) && Sb[5] && (.3 > p || .7 < p)
            && (h.j = k ? 0 : 1, l && (Fa || (h4.innerHTML = "* click *", qa = a + 1)), xa = l, ac());
          h.h = H(p, k, 4);
          h.i = H(t, k, 1);
          h.H = c.rotate(60 * h.h - 30, 0).translateSelf(0, 1);
        },
      };
    U.push(h);
    D(u(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
    D(u(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
    D(u(B), b.translate(0, -0.4).scale(.5, .1, .5), q(.5, .5, .4));
  },
  dc = (b, ...g) => {
    let l = -1, h = 0, k = 0, p = 0, t = 0, c = 0, f = 3, w = 1;
    const C = {
        j: 0,
        g() {
          if (!C.j) {
            var F = 1, ea = 1 / 0;
            for (var Z of la) {
              var aa = Z.w, N = Math.hypot(z - Z.x, R - Z.z), pa = N - aa;
              Ma ||= N < aa;
              0 < pa && ea > pa && (ea = pa, ba = Z);
              aa = N / aa;
              F = F < aa ? F : aa;
            }
            if (!Ma) {
              ea = ba.x;
              Z = ba.z;
              aa = ba.w;
              N = z - ea;
              pa = R - Z;
              let za = Math.hypot(N, pa), Na = Math.atan2(-pa, N);
              w && (k = (Math.random() - .5) * Math.PI / 2, f = Ua(1, f / (1 + Math.random())));
              Na += k;
              l = -Math.cos(Na);
              h = Math.sin(Na);
              .1 < za && (za = (za < aa ? za : aa) / (za || 1), z = N * za + ea, R = pa * za + Z);
            }
            w = Ma;
            f = H(f, 3 + 6 * (1 - F), 3 + F);
            O = H(O, z = H(z, z + l, f), f);
            da = H(da, R = H(R, R + h, f), f);
            p = Za(p, Math.atan2(O - t, da - c) / Ta - 180, 3 * d);
            t = O;
            c = da;
            F = (C.l = b.multiply(
              K.l.translate(O, 0, da).rotateSelf(0, p).skewXSelf(7 * Math.sin(2 * a)).skewYSelf(
                7 * Math.sin(1.4 * a),
              ),
            )).transformPoint();
            if (1.5 > cb(F)) {
              C.j = 1;
              F = [
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
              ][oa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift";
              var Ma = oa && 12 > oa ? 5 : 7;
              Fa || (h4.innerHTML = F, qa = a + Ma);
              ac();
            }
          }
          C.j
            && (F = S % 4 - 2,
              C.l = tb[1].l.translate(
                S % 4 * 1.2 - 1.7 + Math.sin(a + S) / 6,
                -2,
                1.7 * (S / 4 | 0) - 5.5 + (0 > F ? -F : F) + Math.cos(a / 1.5 + S) / 6,
              ));
        },
      },
      K = Ia,
      S = Zb.length,
      la = g.map(([F, ea, Z]) => ({ x: F, z: ea, w: Z }));
    let ba = la[0], { x: z, z: R } = ba, O = z, da = R;
    Zb.push(C);
  },
  ec = () => {
    for (const b of tb) {
      b.g && (b.l = b.g(b));
    }
    for (const b of U) {
      b.g();
    }
    for (const b of Zb) {
      b.g();
    }
  },
  ic = () => {
    let b;
    G(() => {
      const g = () => {
          var c = U[2].i, f = 1 - U[4].i;
          return c < f ? c : f;
        },
        l = (c, f, w) =>
          G(C => {
            C.g = () => e.translate(g() * Math.sin(3 * c + a * c) * f);
            B.map(({ x: K, z: S }) => {
              D(u(11, 1), e.translate(4 * K, 4, w + 4 * S).scale(.8, 3, .8), q(.5, .3, .7, .6));
              D(u(B), e.translate(4 * K, 7, w + 4 * S).scale(1, .3), q(.5, .5, .5, .3));
            });
            D(A(y(
              r(u(B), e.translate(0, 0, w).scale(5, 1, 5), q(.8, .8, .8, .3)),
              ...[-1, 1].map(K =>
                r(u(B), e.translate(5 * K, .2, w).rotate(0, 0, -30 * K).scale(4, 1, 2), q(.8, .8, .8, .3))
              ),
            )));
            D(u(B), e.translate(0, -3, w).scale(8, 2, 8), q(.4, .4, .4, .3));
          }),
        h = (G(c => {
          c.g = () => bc(-12, 4.2, 40 * Ga - 66);
          D(fc);
          cc(e.translate(0, -3, 4));
        }),
          m(7, c => D(u(6, 1), e.translate(4 * (c / 6 - .5), 3).scale(.2, 3, .2), q(.3, .3, .38))),
          Gb()),
        k = (dc(e.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          dc(
            e.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...ib(18).map(({ x: c, z: f }) => [7 * c, 10 * f, 4.5 - 2 * (0 > c ? -c : c)]),
          ),
          D(u(B), e.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), q(.8, .8, .8, .2)),
          B.map(({ x: c, z: f }) => D(u(6), e.translate(3 * c, 3, 15 * f).scale(.7, 4, .7), q(.6, .3, .3, .4))),
          [-23, 22].map(c => D(u(B), e.translate(0, 0, c).scale(3, 1, 8), q(.9, .9, .9, .2))),
          [-15, 15].map((c, f) => {
            D(u(B), e.translate(0, 6.3, c).scale(4, .3, 1), q(.3, .3, .3, .4));
            D(u(B), e.translate(0, 1, c).scale(3, .2, .35), q(.5, .5, .5, .3));
            G(w => (w.g = () => e.translate(0, 4.7 * -U[f + 1].h, c), h));
          }),
          m(5, c =>
            m(2, f =>
              D(
                gc,
                e.translate(18.5 * (f - .5), 0, 4.8 * c - 9.5).rotate(0, 180 - 180 * f).scale(1.2, 10, 1.2),
                q(1, 1, .8, .2),
              ))),
          D(u(B), e.translate(3, 1.5, -20).scale(.5, 2, 5), q(.7, .7, .7, .2)),
          D(u(B), e.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), q(.75, .75, .75, .2)),
          D(u(5), e.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), q(.6, .3, .3, .4)),
          cc(e.translate(-5.4, 1.5, -19).rotate(0, -90)),
          D(u(B), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), q(.8, .2, .2, .5)),
          D(A(
            y(
              sb(
                r(u(6, 0, 0, .3), e.translate(8, -3, -4).scale(13, 1, 13), q(.7, .7, .7, .2)),
                r(u(6), e.translate(0, -8).scale(9, 8, 8), q(.4, .2, .5, .5)),
                r(u(6, 0, 0, .3), e.translate(0, -0.92).scale(13, 2, 13), q(.8, .8, .8, .2)),
              ),
              r(u(5), e.scale(5, 30, 5), q(.4, .2, .6, .5)),
              r(u(5, 0, 1.5), e.translate(0, 1).scale(4.5, .3, 4.5), q(.7, .5, .9, .2)),
              r(u(B), e.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), q(.5, .5, .5, .5)),
              r(u(6), e.translate(15, -1.5, 4).scale(3.5, 1, 3.5), q(.5, .5, .5, .5)),
            ),
          )),
          G(c => {
            c.g = () =>
              e.translate(
                0,
                .01 < U[3].h ? (5 * Math.cos(1.5 * a) + 2) * U[3].i * (1 - U[2].h) + -15 * (1 - U[3].h) : -500,
                0,
              );
            cc(e.translate(0, 1.2));
            D(u(5), e.translate(0, -0.2).scale(5, 1, 5), q(.6, .65, .7, .3));
          }),
          cc(e.translate(15, -2, 4)),
          l(.7, 12, 35),
          l(1, 8.2, 55),
          G(c => {
            c.g = () => e.translate(g() * Math.sin(a / 1.5 + 2) * 12);
            D(
              A(y(
                sb(
                  r(u(B), e.scale(1.5, 1, 5), q(.9, .9, .9, .2)),
                  r(u(6), e.scale(4, 1, 5), q(.9, .9, .9, .2)),
                  r(u(B), e.translate(0, -2).scale(2, 3.2, 1.9), q(.3, .8, .5, .5)),
                  r(u(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), q(.9, .9, .9, .2)),
                ),
                r(u(B), e.scale(1.3, 10, 1.3), q(.2, .7, .4, .6)),
              )),
              e.translate(0, 0, 45),
            );
            dc(e.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          G(c => {
            c.g = () => e.translate(9.8 * (1 - g()));
            D(u(3), e.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), q(.3, .6, .6, .2));
            D(u(8), e.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), q(.8, .8, .8, .2));
            D(u(B), e.translate(-23, -3, 55).scale(5.2, 1.7, 3), q(.5, .5, .5, .3));
            D(u(B), e.translate(-23, -2.2, 62).scale(3, 1, 4), q(.5, .5, .5, .3));
            cc(e.translate(-23, -0.5, 66.5));
          }),
          D(u(B), e.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), q(.9, .9, .9, .2)),
          G(c => {
            c.g = () => e.translate(0, Wa(1 - 5 * g()) * Xa(U[4].h, U[5].h) * Math.sin(1.35 * a) * 4);
            D(u(B), e.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), q(.7, .7, .7, .2));
            D(
              A(y(r(u(B), e.scale(3, 1.4, 2.7)), r(u(B), e.scale(1.2, 8, 1.2)))),
              e.translate(-33, -3, 55),
              q(.7, .7, .7, .2),
            );
          }),
          G(c => {
            c.g = () => e.translate(0, 0, Wa(1 - 5 * g()) * Xa(U[4].h, U[5].h) * Math.sin(.9 * a) * 8);
            D(A(
              y(
                r(u(B), e.translate(-27, -3, 55).scale(3, 1.4, 2.7), q(.9, .9, .9, .2)),
                r(u(B), e.translate(-27, -3, 55).scale(1, 3), q(.9, .9, .9, .2)),
              ),
            ));
            D(u(B), e.translate(-39, -3, 55).scale(3, 1.4, 2.7), q(.9, .9, .9, .2));
          }),
          G(c => {
            c.g = () => e.translate(0, -6.5 * U[4].i);
            D(u(6), e.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), q(.7, .7, .7, .4));
          }),
          [...r(
            A(sb(
              r(u(B), e.translate(0, -3).scale(11, 1.4, 3), q(.9, .9, .9, .2)),
              y(
                r(u(6), e.rotate(0, 0, 90).scale(6, 8, 6), q(.3, .6, .6, .3)),
                r(u(4, 0, .01), e.translate(0, 6).scale(12, 2, .75).rotate(0, 45), q(.3, .6, .6, .3)),
                r(u(6), e.rotate(0, 0, 90).scale(5, 12, 5), q(.3, .6, .6, .3)),
                ...[5, 0, -5].map(c =>
                  r(u(5), e.translate(c, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), q(.3, .6, .6, .3))
                ),
              ),
            )),
            e,
          )]),
        p =
          (D(k, e.translate(-53, 0, 55)),
            D(u(6), e.translate(-61.3, -2.4, 49).scale(3, 1, 5), q(.4, .6, .6, .3)),
            D(u(7), e.translate(-57, -2.6, 46).scale(4, 1, 4), q(.8, .8, .8, .3)),
            cc(e.translate(-55, -1.1, 46).rotate(0, 90)),
            G(c => {
              c.F = 0;
              c.g = () => e.translate(-75, (1 - U[5].i) * (1 - U[6].h) * 3, 55).rotate(180 * (1 - U[5].i) + Ca, 0);
              D(k);
            }),
            D(u(B), e.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), q(.7, .7, .7, .2)),
            D(u(3, 0, -0.5), e.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), q(.8, .8, .8, .2)),
            D(
              A(y(
                sb(
                  r(u(B), e.translate(-100, -2.5, 55).scale(8, 1, 8), q(.8, .8, .8, .2)),
                  r(u(B), e.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), q(.8, .8, .8, .2)),
                  r(u(B), e.translate(-100, -2.6, 70).scale(3, 1.1, 7), q(.8, .8, .8, .2)),
                  r(u(B), e.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), q(.8, .8, .8, .2)),
                  r(u(6), e.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), q(.6, .6, .6, .3)),
                  r(u(B), e.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), q(.8, .8, .8, .2)),
                  r(u(B), e.translate(-100, .42, 92).scale(3, 1.1, 4.1), q(.8, .8, .8, .2)),
                ),
                r(u(8), e.translate(-100, -1, 55).scale(7, .9, 7), q(.3, .3, .3, .4)),
                r(u(8), e.translate(-100, -2, 55).scale(4, .3, 4), q(.4, .4, .4, .5)),
                r(u(8), e.translate(-100, -3, 55).scale(.6, 1, .6), q(.4, .4, .4, .5)),
              )),
              e,
            ),
            dc(e.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            dc(e.translate(-89, .2, 80), [0, 0, 6]),
            D(A(
              y(
                r(u(B), e.translate(-100, 1, 63).scale(7.5, 4), q(.5, .5, .5, .4)),
                r(u(B), e.translate(-100, 0, 70).scale(2, 2, 10), q(.5, .5, .5, .4)),
                r(u(20, 1), e.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), q(.5, .5, .5, .4)),
              ),
            )),
            G(c => (c.g = () => e.translate(-99.7, 5.3 * -U[6].h - 2, 63.5), h)),
            B.map(({ x: c, z: f }) => {
              D(u(6), e.translate(7 * c - 100, -3, 7 * f + 55).scale(1, 8.1), q(.6, .15, .15, .8));
              [4, -0.4].map(w =>
                D(u(6), e.translate(7 * c - 100, w, 7 * f + 55).scale(1.3, .5, 1.3), q(.4, .2, .2, .8))
              );
            }),
            m(7, c => {
              D(
                u((23 * c + 1) % 5 + 5, 0, .55),
                e.translate(5 * Math.sin(c) - 101 + c, -2.3 - c, 44.9 - 2.8 * c).scaleSelf(
                  5 + c / 2,
                  1 + c / 6,
                  5 + c / 3,
                ),
                q(.5 - c / 17, .5 - (1 & c) / 9, .6, .3),
              );
            }),
            D(u(B), e.translate(-87, -9.5, 24).scale(7, 1, 3), q(.4, .5, .6, .4)),
            D(u(4), e.translate(-86, -9.2, 27).scale(5, 1, 5), q(.5, .6, .7, .3)),
            D(u(18, 1), e.translate(-86, -9, 31).scale(1.5, 1, 1.5), q(.3, .3, .4, .1)),
            cc(e.translate(-86, -7.5, 31)),
            G(c => {
              c.g = () => e.translate(0, 3.5 * (1 - Ua(U[6].h, U[7].h)) + Xa(U[7].i, U[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(f =>
                D(u(B), e.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), q(.2, .5, .6, .2))
              );
            }),
            G(c => {
              c.g = () => {
                const f = Xa(U[7].i, U[6].i);
                return e.translate(0, f * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + f) * f);
              };
              [6, 18].map(f => D(u(B), e.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), q(.1, .4, .5, .2)));
            }),
            D(
              A(y(
                sb(
                  r(u(B), e.scale(11, 1, 13), q(.3, .4, .6, .3)),
                  r(u(5), e.translate(0, 0, -7).scale(2, 1.2, 2), q(.2, .4, .7, .3)),
                  r(u(5), e.scale(9, 1.2, 9), q(0, .2, .3, .5)),
                ),
                r(u(5), e.scale(5.4, 5, 5.4), q(0, .2, .3, .5)),
              )),
              e.translate(-38.9, -11.3, 17),
            ),
            cc(e.translate(-38.9, -9.6, 10)),
            G(c => {
              c.g = () => e.translate(0, -7.3 * U[7].i);
              D(
                A(y(
                  sb(
                    r(u(5), e.translate(0, 2).scale(5, 7, 5).skewY(8), q(.2, .4, .5, .5)),
                    r(u(5), e.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), q(.25, .35, .5, .5)),
                    r(u(5), e.translate(0, 9).scale(.6, 7, .6).skewY(8), q(.35, .3, .5, .5)),
                  ),
                  r(u(5), e.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), q(.2, .4, .5, .5)),
                )),
                e.translate(-38.9, -11.3, 17),
              );
              dc(e.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...ib(15).map(({ x: f, z: w }) => [3 * f, 3 * w, 1.5]));
            }),
            B.map(({ x: c, z: f }) => {
              b = e.translate(9 * c - 38.9, -7.3, 11 * f + 17);
              D(u(18, 1), b.scale(1, 4), q(.25, .25, .25, 1));
              [1.5, 8].map(w => D(u(18, 1), b.translate(0, w - 4).scale(1.5, .5, 1.5), q(.6, .6, .6, .3)));
            }),
            D(
              A(y(
                sb(
                  r(u(6), e.translate(0, 0, -36).scale(15, 1.2, 15), q(.7, .7, .7, .3)),
                  r(u(B), e.translate(0, 0, -18).scale(4, 1.2, 6), q(.45, .4, .6, .3)),
                ),
                ...m(6, c =>
                  m(6, f =>
                    r(
                      u(6),
                      e.translate(4.6 * f - 12 + 2 * (1 & c), 0, 4.6 * c - 50 + 2 * Math.sin(4 * f)).scale(2, 5, 2),
                      q(.7, .7, .7, .3),
                    ))).flat(),
              )),
              e.translate(-38.9, -11.3, 17),
            ),
            dc(e.translate(-38.9, -8.4, -21), [0, 0, 12]),
            D(u(5), e.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), q(.8, .1, .25, .4)),
            cc(e.translate(-84, -0.5, 85).rotate(0, 45)),
            G(c => {
              c.g = () => bc(-123, 1.4, 55 + -65 * Ha);
              cc(e.translate(0, -3, -4).rotate(0, 180));
              D(fc);
            }),
            dc(e.translate(-115, .2, -12), [0, 0, 3.5]),
            A(y(
              r(u(B), e.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), q(.25, .25, .35, .3)),
              r(u(3), e.translate(0, 0, -5.5).scale(3, 2), q(.6, .3, .4, .3)),
              ...[-1.2, 1.2].map(c => r(u(B), e.translate(c, -0.5, 1).scale(.14, .3, 6.5), q(.7, .2, 0, .3))),
            ))),
        t = (G(c => {
          c.g = () => {
            var f = Math.sin(1.1 * a);
            return e.translate.call(e, 0, -2, Xa(U[10].h, U[11].h) * (0 > f ? -f : f) * -8.5 + 10);
          };
          m(2, f => D(p, e.translate(9 * f - 110 + (1 & f), 1.7, -12)));
        }),
          G(c => {
            c.g = () => {
              var f = Math.sin(2.1 * a);
              return e.translate.call(e, 0, -2, Xa(U[10].h, U[11].h) * (0 > f ? -f : f) * -8.5 + 10);
            };
            m(2, f => D(p, e.translate(9 * (f + 2) - 110 + (1 & f), 1.7, -12)));
          }),
          G(c => {
            c.g = () => {
              var f = Math.sin(1.5 * a);
              return e.translate.call(
                e,
                0,
                -2,
                -8.5 * Ua((1 - U[10].h) * (1 - Xa(U[10].h, U[11].h)), Xa(U[10].h, U[11].h) * (0 > f ? -f : f)) + 10,
              );
            };
            m(3, f => D(p, e.translate(9 * f - 106, 1.7, -12)));
          }),
          D(
            A(y(
              sb(
                r(u(B), e.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                r(u(B), e.translate(26.5, -0.6, 10).scale(17, 2, .5)),
              ),
              ...m(4, c => r(u(B), e.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9))),
              ...m(3, c => r(u(B), e.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            e.translate(-123, 0, -12),
            q(.5, .5, .6, .2),
          ),
          D(u(5), e.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), q(.25, .25, .35, 1)),
          D(u(B), e.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), q(.8, .8, .8, .2)),
          D(u(6), e.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), q(.6, .5, .7, .2)),
          cc(e.translate(-116, -1.4, -18).rotate(0, 180)),
          m(3, c => {
            D(hc, e.translate(12 * c - 109, -9, -12), q(.6, .6, .6, .3));
            D(hc, e.translate(-77, -9, -12 * c - 20).rotate(0, 90), q(.6, .6, .6, .3));
          }),
          D(A(
            y(
              r(u(12), e.translate(-77, -13.9, -12).scale(4, 18.2, 4), q(.7, .7, .7, .2)),
              r(u(B), e.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), q(.4, .5, .6, .2)),
              r(u(B), e.translate(-77, 0, -14).scale(1.5, 2.2, 2), q(.4, .5, .6, .2)),
              r(u(12), e.translate(-77, 2.8, -12).scale(3, 5, 3), q(.4, .5, .6, .2)),
            ),
          )),
          D(u(B), e.translate(-115.5, -17, -12).scale(.5, 15, 2.2), q(.6, .6, .6, .3)),
          D(u(B), e.translate(-77, -17, -50.5).scale(2.2, 15, .5), q(.6, .6, .6, .3)),
          D(u(B), e.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), q(.6, .6, .6, .3)),
          D(A(
            y(
              r(u(B), e.translate(-93, -5.8, -40).scale(9, 1, 5), q(.8, .8, .8, .1)),
              r(u(9), e.translate(-98, -5.8, -40).scale(3, 8, 3), q(.7, .7, .7, .2)),
            ),
          )),
          D(u(9), e.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), q(.5, .5, .5, .3)),
          cc(e.translate(-98, -4.4, -40).rotate(0, 90)),
          dc(e.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          D(A(
            y(
              sb(
                r(u(6, 0, 0, .6), e.translate(-100, .7, 105.5).scale(8, 1, 11), q(.7, .7, .7, .2)),
                r(u(B), e.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), q(.7, .7, .7, .2)),
                r(u(B), e.translate(-91.2, .7, 107).scale(3, 1, 3.3), q(.7, .7, .7, .2)),
              ),
              r(u(5), e.translate(-100, .7, 113).scale(4, 3, 4), q(.7, .7, .7, .2)),
            ),
          )),
          m(4, c =>
            G(f => {
              f.g = () => {
                const w = Xa(U[8].i, U[12].i);
                return e.translate(
                  (2 < c ? 2 * (1 - w) + w : 0) - 100,
                  w * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3) + .7,
                  115 + (1 & c ? -1 : 1) * (1 - U[8].i) * (1 - U[12].i) * -7
                    + (.05 > w ? .05 : w) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),
                );
              };
              D(
                u(6),
                e.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5),
                q(.5 - c / 8, c / 12 + .5, .7, .3),
              );
            })),
          G(c => {
            c.g = () => {
              const f = Xa(U[8].i, U[12].i);
              return e.translate(2.5 * (1 - f) - 139.7, -3 * (1 - U[8].h) + f * Math.sin(.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * f + 3), 0);
            };
            D(A(y(r(u(10), e.scale(6, 2, 6), q(.1, .6, .5, .3)), r(u(10), e.scale(3.3, 6, 3.3), q(.1, .6, .5, .5)))));
            b = e.translate(-7.5).rotate(0, 90);
            D(u(15), b.scale(3, 2.3, 3), q(.4, .4, .4, .3));
            D(u(10), b.scale(2, 2.5, 2), q(.3, .8, .7, .3));
            D(u(5), b.scale(1, 3), q(.5, .5, .5, .5));
            cc(b.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(f =>
              D(gc, e.rotate(90 * -f, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), q(1, 1, .8, .2))
            );
            dc(e.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(c => {
            D(u(15, 1), e.translate(-7.5 * c - 100, 3.7, 96).scale(.8, 4, .8), q(.6, .24, .2, .5));
            [7.2, 1.5].map(f =>
              D(u(15, 1), e.translate(-7.5 * c - 100, f + .7, 96).scale(1.1, .5, 1.1), q(.5, .24, .2, .4))
            );
            D(gc, e.translate(-5 * c - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), q(1, 1, .8));
            D(
              A(y(
                r(u(B), e.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), q(.5, .5, .5, .4)),
                r(u(B), e.scale(3, 3, 10), q(.6, .24, .2, .5)),
                r(u(30, 1), e.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), q(.6, .24, .2, .5)),
                r(u(5), e.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), q(.6, .24, .2, .5)),
                r(u(5), e.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), q(.6, .24, .2, .5)),
              )),
              e.translate(c - 100, .7, 97),
            );
          }),
          G(c => (c.g = () => e.translate(-100, .6 - 6 * U[12].h, 96.5).scale(.88, 1.2), h)),
          [
            ...r(u(28, 1), e.scale(8, 1, 8), q(.45, .45, .45, .2)),
            ...r(u(5), e.translate(0, 1).scale(1, .2), q(.3, .3, .3, .2)),
          ]);
      G(c => {
        c.g = () => e.translate(-80, 1, 106).rotate(0, 40 + ya);
        D(A(
          y(
            r(u(28, 1), e.scale(8, 1, 8), q(.45, .45, .45, .2)),
            r(u(B), e.translate(0, 0, -5.5).scale(1.5, 3, 2.5), q(.45, .45, .45, .2)),
          ),
        ));
        D(u(8), e.translate(0, 2).scale(3, 1.5, 3), q(.7, .7, .7, .1));
        D(u(5), e.translate(0, 2).scale(1, 2), q(.3, .3, .3, .2));
        dc(e.translate(0, 3), ...ib(10).map(({ x: f, z: w }) => [5.6 * f, 5.6 * w, 2.5]));
      });
      G(c => {
        c.g = () => e.translate(-64, 1, 106).rotate(0, Ba);
        D(A(
          y(
            r(u(28, 1), e.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)),
            r(u(B), e.scale(9, 5, 2), q(.3, 0, 0, .3)),
          ),
        ));
        D(t);
        [-1, 1].map(f =>
          D(gc, e.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), q(1, 1, .8))
        );
      });
      G(c => {
        c.g = () => e.translate(-48, 1, 106).rotate(0, 180 - Ba);
        D(A(
          y(
            r(u(30, 1), e.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)),
            r(u(B), e.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)),
            r(u(B), e.translate(0, 0, 7).scale(2, 5, 9), q(.3, 0, 0, .3)),
          ),
        ));
        D(t);
      });
      G(c => {
        c.g = () => e.translate(-48, 1, 90).rotate(0, 270 + Ba);
        D(A(
          y(
            r(u(30, 1), e.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)),
            r(u(B), e.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)),
            r(u(B), e.translate(0, 0, -7).scale(2, 5, 9), q(.3, 0, 0, .3)),
          ),
        ));
        D(t);
      });
      D(u(B), e.translate(-56, 1, 106).scale(.7, .8, 2.5), q(.7, .7, .7, .2));
      D(u(B), e.translate(-48, 1, 98).scale(2.5, .8, .7), q(.7, .7, .7, .2));
      D(u(B), e.translate(-39, .4, 90).scale(2, 1, 2), q(.7, .7, .7, .3));
      D(u(B), e.translate(-34.2, .4, 90).scale(3, 1, 3), q(.7, .7, .7, .3));
      cc(e.translate(-34, 2.7, 96).rotate(-12, 0));
      D(u(5), e.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), q(.2, .5, .5, .6));
      [q(.1, .55, .45, .2), q(.2, .5, .5, .3), q(.3, .45, .55, .4)].map((c, f) =>
        G(w => {
          w.g = () =>
            e.translate(
              0,
              (1 - U[13].i) * (1 - U[14].i) * 3 + Xa(U[13].i, U[14].i) * Math.sin(1.5 * a + 1.5 * f) * 4.7,
            );
          D(u(8), e.translate(-23.5, f / 1.5 - .4, 90 + 6.8 * f).scale(3.6, 2 - f / 1.5, 3.6).rotate(0, 22.5), c);
          2 === f && D(u(6), e.translate(-29, .4, 90).scale(2.4, 1, 2.8), q(.6, .7, .6, .3));
          1 === f
            && D(u(B), e.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), q(.6, .6, .7, .3));
        })
      );
      D(A(
        y(
          r(u(6, 0, 0, .3), e.translate(0, -0.92, 95).scale(14, 2, 14), q(.8, .8, .8, .2)),
          r(u(5), e.translate(0, 0, 95).scale3d(6), q(.3, .3, .3, .5)),
        ),
      ));
      [8, -6.1].map((c, f) =>
        m(3, w =>
          D(
            hc,
            e.translate(6 * w - 6, c - (1 & w), 111 - .2 * (1 & w) - f),
            1 & w ? q(.5, .5, .5, .3) : q(.35, .35, .35, .5),
          ))
      );
      [-1, 1].map(c => D(gc, e.translate(-8 * c, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), q(1, 1, .8)));
      cc(e.translate(0, 1.7, 82).rotate(0, 180));
      D(u(5), e.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), q(.5, .3, .3, .4));
      D(A(
        y(
          sb(
            r(u(B), e.translate(0, 16, 110.5).scale(12, 1, 3), q(.5, .3, .3, .4)),
            r(u(B), e.translate(0, 16, 111).scale(3, 1, 3.8), q(.5, .3, .3, .4)),
          ),
          r(u(5), e.translate(0, 16, 103.5).scale(5.5, 5, 5.5), q(.5, .3, .3, .4)),
        ),
      ));
      G(c => {
        c.g = () => {
          const f = Math.sin(a);
          return e.translate(-2 * f).rotate(0, 0, 25 * f);
        };
        D(u(3), e.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), q(.5, .3, .3, .4));
        [22, 30].map(f => {
          D(u(6), e.translate(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), q(.7, .7, .7, .4));
          D(u(B), e.translate(0, 6.2, f + 95).scale(.5, 11, .5), q(.5, .3, .3, .4));
        });
      });
      D(u(6), e.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), q(.5, .6, .7, .3));
      D(u(B), e.translate(0, 16, 129).scale(1.5, 1, 2), q(.5, .6, .7, .3));
      D(u(7), e.translate(0, 16.2, 133).scale(5, 1, 5), q(.4, .5, .6, .4));
      G(c => {
        c.g = () => {
          const f = Xa(Xa((U[14].h + U[14].i) / 2, U[13].i), (U[15].h + U[15].i) / 2);
          return e.translate(0, 16 * f, 8.5 * Wa(2 * f - 1) + 95);
        };
        D(u(5), e.scale(5, 1.1, 5), q(.5, .3, .3, .4));
        D(u(5), e.scale(5.5, .9, 5.5), q(.25, .25, .25, .4));
        cc(e.translate(0, 1.5, -1).rotate(0, 180));
      });
      dc(e.translate(0, 3, 95), ...ib(9).map(({ x: c, z: f }) => [9 * c, 9 * f, 4]));
      dc(e.translate(0, 19, 134), [0, 0, 3.5]);
    });
  },
  jc = (b, g, l, h) => {
    let k = 0, p = 0, t = 0, c = 1 / 0, f = -1 / 0, w = 1 / 0, C = -1 / 0, K = 1 / 0, S = -1 / 0;
    const la = 1.1 * (l - g),
      ba = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, g, l))).multiplySelf(b)
        .invertSelf();
    b = m(8, z => {
      z = ba.transformPoint({ x: 4 & z ? 1 : -1, y: 2 & z ? 1 : -1, z: 1 & z ? 1 : -1 });
      return k -= z.x = (la * z.x | 0) / (la * z.w),
        p -= z.y = (la * z.y | 0) / (la * z.w),
        t -= z.z = (la * z.z | 0) / (la * z.w),
        z;
    });
    g = e.rotate(298, 139).translateSelf(k / 8, p / 8, t / 8);
    return fb(b, g).map(({ x: z, y: R, z: O }) => {
      c = c < z ? c : z;
      f = z < f ? f : z;
      w = w < R ? w : R;
      C = R < C ? C : R;
      K = K < O ? K : O;
      S = O < S ? S : O;
    }),
      K *= 0 > K ? h : 1 / h,
      S *= 0 < S ? h : 1 / h,
      e.scale(2 / (f - c), 2 / (C - w), 2 / (K - S)).translateSelf((f + c) / -2, (C + w) / -2, (K + S) / 2)
        .multiplySelf(g).toFloat32Array();
  },
  kc = (b, g = 35633) => {
    g = W.c6x(g);
    return W.s3c(g, b), W.c6a(g), g;
  },
  lc = (b, g) => {
    const l = {}, h = W.c1h();
    return W.abz(h, b), W.abz(h, kc(g, 35632)), W.l8l(h), k => k ? l[k] || (l[k] = W.gan(h, k)) : W.u7y(h);
  },
  oc = (b, g, l) => {
    const h = k => W.d97(4, k.I, 5123, 2 * k.J);
    if (Ka) {
      W.uae(b, !1, e.rotate(0, 40 * Math.sin(na) - 70).toFloat32Array()), h(Sa.D), Ra.map(k => k.D).map(h);
    } else {
      for (const k of tb) {
        const p = k.G, t = k.D;
        (g || k !== Sa && k !== Ra[0] && k !== Ra[1]) && t
          && (l && W.ube(l, p / 255), W.uae(b, !1, k.l.toFloat32Array()), h(t));
      }
      for (const k of U) {
        W.uae(b, !1, k.H.toFloat32Array()), h(mc[.5 < k.h ? 1 : 0]);
      }
      for (const k of Zb) {
        W.uae(b, !1, k.l.toFloat32Array()), h(nc);
      }
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
  gc = (() => {
    const b = m(
        11,
        l => e.translate(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10),
      ),
      g = ib(18);
    return m(10, l => jb(fb(g, b[l]).reverse(), fb(g, b[l + 1]), 1)).flat();
  })(),
  fc = A(
    y(
      r(u(20, 1, 1.15, 1), e.translate(0, -3).scale(3.5, 1, 3.5), q(.7, .4, .25, .7)),
      r(u(20, 1, 1.3, 1), e.translate(0, -2.5).scale(2.6, 1, 3), q(.7, .4, .25, .2)),
      r(u(B), e.translate(4, -1.2).scale3d(2), q(.7, .4, .25, .3)),
    ),
  ),
  hc = A(
    y(
      r(u(B), e.translate(0, -8).scale(6, 15, 2.2)),
      r(u(B), e.translate(0, -14.1).scale(4, 13, 4)),
      r(u(20, 1), e.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
    ),
  ),
  Cb = new Int32Array(Ab.buffer, 0, 4),
  Bb = new Float32Array(Ab.buffer),
  Ub = new AudioContext(),
  Tb = Ub.createBufferSource(),
  mc = (D([B.slice(1)], e.translate(-2).scale3d(3).rotate(90, 0)),
    Gb(),
    [q(1, .5, .2), q(.7, 1, .2)].map(
      b => (D(u(6, 1), e.scale(.13, 1.4, .13), q(.3, .3, .5)),
        D(u(8), e.translate(0, 1).scale(.21, .3, .21), b),
        D(u(3), e.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), q(.2, .2, .2)),
        Gb()),
    )),
  nc = (D(
    kb(40, 30, (b, g, l) => {
      const h = g / 30, k = .05 * b * Math.PI, p = h ** .6 * Math.PI / 2;
      b = h * h * Math.sin(b * Math.PI * .35) / 4;
      return 29 === g
        ? { x: l.B = 0, y: -0.5, z: 0 }
        : {
          x: Math.cos(k) * Math.sin(p),
          y: Math.cos(h * Math.PI) - h - b,
          z: Math.sin(k) * Math.sin(p) + Math.sin(b * Math.PI * 2) / 4,
        };
    }),
    e.scale3d(.7),
    q(1, 1, 1),
  ),
    [-1, 1].map(b => D(kb(15), e.translate(.16 * b, .4, -0.36).scale3d(.09))),
    Gb()),
  W = hC.getContext("webgl2");
for (const b in W) {
  W[b[0] + [...b].reduce((g, l, h) => (g * h + l.charCodeAt(0)) % 434, 0).toString(36)] = W[b];
}
setTimeout(() => {
  let b = 0, g = 6;
  const l = () => {
      if (h4.innerHTML += ".", !--g) {
        let t = 0, c = 0, f = 1, w = 0, C = 0, K = 0, S = !1, la, ba, z, R, O, da, F, ea, Z, aa;
        const N = { x: 0, y: 0, z: 0 },
          pa = new Int32Array(256),
          Ma = () => {
            const { s: v, l: x } = U[xa], { x: J, y: E, z: L } = x.transformPoint({ x: 0, y: 8, z: -3 });
            n.x = N.x = J;
            n.y = N.y = F = E;
            n.z = N.z = L;
            ba =
              da =
              O =
              z =
              R =
                0;
            f = 1;
            t = c = v?.G || 1;
          },
          za = () => {
            let v = 0,
              x = 0,
              J = (NO_INLINE(() => {
                let I = 0, Q = 0, fa = 0, ua = 0, va = 0;
                pa.fill(0);
                for (let X = 0; 31 > X; ++X) {
                  let Da = 0;
                  const T = 512 * X;
                  for (let Qa = 0; 128 > Qa; Qa++) {
                    let ra = T + 4 * Qa;
                    var sa = (Ea[ra] + Ea[1 + ra]) / 255;
                    if (ra = Ea[2 + ra], 14 < Qa && 114 > Qa && (Da += sa), ra && sa) {
                      sa = pa[ra] + 1, pa[ra] = sa, I > sa || (I = sa, Q = ra);
                    }
                  }
                  3 > Da && 5 < X && (ua += X / 32);
                  3 < Da && (7 < X && (fa += X / 15), va = 1);
                }
                Q && (va = 1);
                f ? Q && (f = 0, c = Q) : c = Q || t;
                t = Q;
                ba = va;
                z = H(z, va ? 6.5 : 8, 4);
                N.y += fa / 41 - (va ? 1 : z) * ua / 41 * z * d;
              })(),
                NO_INLINE(() => {
                  for (let va = 32; 128 > va; va += 2) {
                    var I = 0;
                    let sa = 0;
                    var Q = 0;
                    let X = 0;
                    const Da = 512 * va;
                    for (let T = va >> 1 & 1; 128 > T; T += 2) {
                      var fa = Da + 4 * T;
                      const Qa = Da + 4 * (127 - T), ra = Ea[fa] / 255, Db = Ea[1 + Qa] / 255;
                      var ua = T / 63.5 - 1;
                      ua = 1 - (0 > ua ? -ua : ua);
                      if (
                        10 < T && 118 > T
                        && (I = Ua(I, Ua(ra * ua, ra * Ea[Qa] / 127.5)),
                          sa = Ua(sa, Ua(Db * ua, Db * Ea[1 + fa] / 255))), 54 > T || 74 < T
                      ) {
                        fa = (1 - ua) * (Db < ra ? ra : Db) / 3,
                          .001 < fa && (64 > T && fa > Q ? Q = fa : 64 < T && fa > X && (X = fa));
                      }
                    }
                    Q = X - Q;
                    I = sa - I;
                    (0 > Q ? -Q : Q) > (0 > v ? -v : v) && (v = Q);
                    (0 > I ? -I : I) > (0 > x ? -x : x) && (x = I);
                  }
                })(),
                (Sb[0] ? 1 : 0) + (Sb[2] ? -1 : 0) + ka),
              E = (Sb[1] ? 1 : 0) + (Sb[3] ? -1 : 0) + ma;
            var L = navigator.getGamepads()[0];
            if (L) {
              var P = Q => I[Q]?.pressed || 0 < I[Q]?.value;
              const I = L.buttons;
              L = L.axes;
              var V = P(1) || P(3) || P(2) || P(0);
              V !== S && (S = V) && (Sb[5] = 1);
              J += (.2 < Va(-L[0]) ? -L[0] : 0) + (P(14) ? 1 : 0) + (P(15) ? -1 : 0);
              E += (.2 < Va(-L[1]) ? -L[1] : 0) + (P(12) ? 1 : 0) + (P(13) ? -1 : 0);
              La && (.3 < Va(L[2]) && (Lb += 80 * L[2] * d), .3 < Va(L[3]) && (Kb += 80 * L[3] * d));
            }
            .05 > (0 > E ? -E : E) && (E = 0);
            .05 > (0 > J ? -J : J) && (J = 0);
            P = Math.atan2(E, J);
            L = Wa(Math.hypot(E, J));
            var Y = (J = L * Math.cos(P), E = L * Math.sin(P), Wa(1 - 5 * Ua(0 > v ? -v : v, 0 > x ? -x : x)));
            V =
              (c || (v += O * Y * d, x += da * Y * d),
                O = H(O, 0, ba ? 8 : 4),
                da = H(da, 0, ba ? 8 : 4),
                R = H(R, ba ? (J || E ? ba ? 7 : 4 : 0) * Y : 0, ba ? .1 < Y ? 10 : J || E ? 5 : 7 : 1),
                La ? Lb * Ta : Math.PI);
            Y = Math.sin(V) * R * d;
            var Oa = Math.cos(V) * R * d;
            V = (v -= J * Oa - E * Y, x -= J * Y + E * Oa, c && tb[c - 1].F && tb[c - 1].l || e);
            Y = V.inverse();
            if (
              Y.m41 = 0,
                Y.m42 = 0,
                Y.m43 = 0,
                { x: v, z: x } = Y.transformPoint({ x: v, z: x, w: 0 }),
                N.x += v,
                N.z += x,
                c !== la
            ) {
              la = c;
              const { x: I, y: Q, z: fa } = V.inverse().transformPoint(n);
              N.x = I;
              N.y = Q;
              N.z = fa;
            }
            Y = n.x;
            Oa = n.z;
            const { x: Eb, y: gb, z: M } = V.transformPoint(N);
            V = (n.x = Eb, n.y = gb, n.z = M, Va(F - gb));
            F = H(F, gb + .1, 50 * V + 5);
            c && (O = (n.x - Y) / d, da = (n.z - Oa) / d);
            (J || E) && (w = 90 - P / Ta);
            C = Za(C, w, 8 * d);
            K += (L - K) * Wa(10 * d);
          },
          Na = v => {
            requestAnimationFrame(Na);
            var x = (v - (Pa || v)) / 1e3;
            d = Ka ? Sb[5] = 0 : .066 < x ? .066 : x;
            a += d;
            na += x;
            Pa = v;
            if (
              0 < d
              && (W.b6o(36160, wa),
                W.r9r(0, 0, 128, 128, 6408, 5121, Ea),
                W.iay(36160, [36064]),
                NO_INLINE(za)(),
                ec()), 0 < d
            ) {
              if (ea = $a(ea, n.x, .5, d), Z = $a(Z, n.y, 2, d), aa = $a(aa, n.z, .5, d), La) {
                v = 200 * f,
                  Hb = H(Hb, n.x, 18 + v),
                  Ib = H(Ib, n.y + 1.5, 15 + v),
                  Jb = H(Jb, n.z, 18 + v),
                  Kb = Ua(87 > Kb ? Kb : 87, -87);
              } else {
                if (
                  Hb = $a(Hb, ea, 1, 2 * d),
                    Ib = $a(Ib, Z + 13 + 15 * f, 4, 2 * d),
                    Jb = $a(Jb, aa + -18, 1, 2 * d),
                    v = Jb - aa,
                    1 < (0 > v ? -v : v)
                ) {
                  x = Hb - ea;
                  const J = Ib - Z;
                  Lb = 270 + Math.atan2(v, x) / Ta;
                  Kb = 90 - Math.atan2(Math.hypot(v, x), J) / Ta;
                }
              }
              if (Lb = Ya(Lb), 0 < d) {
                v = Xa(U[12].h, U[13].h),
                  a > qa && (h4.innerHTML = "", qa = 0),
                  x = H(Ca, 0, 1),
                  Ca = x + (Ya(Ca + 60 * d) - x) * Wa(U[5].h - U[6].i),
                  x = H(ya, 0, 5),
                  ya = x + (Ya(ya + 56 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v),
                  x = H(Ba, 0, 4),
                  Ba = x + (Ya(Ba + 48 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v),
                  v = 2 * U[9].i - 1,
                  Ha = H(Ha, U[9].i, .2 + .3 * (0 > v ? -v : v)),
                  Ga = H(Ga, Fa ? Ga + (-9 - Ga) * Wa(1.5 * d) : Wa(a / 3), 1),
                  1 === U[0].j && .8 < U[0].h && (13 > oa
                    ? (U[0].j = 0, Fa || (h4.innerHTML = "Not leaving now, there are souls to catch!", qa = a + 3))
                    : Fa
                      || (Fa
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", qa = a + 1 / 0),
                        Fa = 1)),
                  Sb[5] = 0,
                  (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && Ma();
              }
            }
            v = Ka
              ? e.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Wa(hC.clientWidth / 1e3))
              : e.rotate(-Kb, -Lb, -0).invertSelf().translateSelf(-Hb, -Ib, -Jb);
            0 < d
              && (ta(),
                W.b6o(36160, wa),
                W.v5y(0, 0, 128, 128),
                W.cbf(!0, !1, !0, !1),
                W.c4s(16640),
                W.uae(ta("b"), !1, e.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, .3 - n.z).toFloat32Array()),
                oc(ta("c"), 0, ta("j")),
                W.cbf(!1, !0, !1, !1),
                W.c4s(16640),
                W.cbf(!1, !0, !0, !1),
                W.uae(ta("b"), !1, e.translate(-n.x, -n.y, -n.z - .3).toFloat32Array()),
                oc(ta("c"), 0, ta("j")),
                W.cbf(!0, !0, !0, !0),
                1 === c && (U[9].j = -15 > n.x && 0 > n.z ? 1 : 0));
            rb();
            W.v5y(0, 0, 2048, 2048);
            Aa[0](jc(v, .3, 55, 10));
            Aa[1](jc(v, 55, 177, 11));
            W.b6o(36160, null);
            ha();
            W.v5y(0, 0, W.drawingBufferWidth, W.drawingBufferHeight);
            W.c4s(16640);
            W.uae(ha("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
            W.uae(ha("b"), !1, v.toFloat32Array());
            W.ubu(ha("k"), Hb, Ib, Jb);
            Aa[0]();
            Aa[1]();
            oc(ha("c"), !La);
            ia();
            W.ubu(ia("j"), W.drawingBufferWidth, W.drawingBufferHeight, na);
            Ka ? W.ubu(ia("k"), 0, 0, 0) : W.ubu(ia("k"), Hb, Ib, Jb);
            W.uae(ia("b"), !1, v.inverse().toFloat32Array());
            W.d97(4, 3, 5123, 0);
          },
          Ea = new Uint8Array(65536),
          Nb = k;
        var p = kc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",
        );
        const rb = lc(
            kc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"),
            "#version 300 es\nvoid main(){}",
          ),
          ia = lc(
            kc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          ta = lc(
            p,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",
          ),
          ha = lc(
            p,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          wa =
            (ia(),
              W.ubh(ia("q"), 3),
              ta(),
              W.uae(ta("a"), !1, ab(1.4, .59, 1e-4, 1)),
              ha(),
              W.ubh(ha("q"), 3),
              W.c5w());
        p = W.c3z();
        const hb = W.c25(),
          Aa = m(2, v => {
            let x;
            const J = W.c25(), E = W.c5w(), L = ha(v ? "j" : "i");
            return ha(),
              W.ubh(ha(v ? "h" : "g"), v),
              W.b6o(36160, E),
              W.d45([0]),
              W.r9l(0),
              W.a4v(33984 + v),
              W.b9j(3553, J),
              W.fas(36160, 36096, 3553, J, 0),
              W.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              W.t2z(3553, 10241, 9729),
              W.t2z(3553, 10240, 9729),
              W.t2z(3553, 34893, 515),
              W.t2z(3553, 34892, 34894),
              W.t2z(3553, 10243, 33071),
              W.t2z(3553, 10242, 33071),
              P => {
                P
                  ? (x = P, W.b6o(36160, E), W.iay(36160, [36096]), W.c4s(256), W.uae(rb("b"), !1, x), oc(rb("c"), !La))
                  : W.uae(L, !1, x);
              };
          });
        W.b11(34963, W.c1b());
        W.b2v(34963, new Uint16Array(ub), 35044);
        W.b11(34962, W.c1b());
        W.b2v(34962, new Float32Array(vb), 35044);
        W.v7s(0, 3, 5126, !1, 0, 0);
        W.b11(34962, W.c1b());
        W.b2v(34962, new Int16Array(wb), 35044);
        W.v7s(1, 3, 5122, !0, 0, 0);
        W.b11(34962, W.c1b());
        W.b2v(34962, new Uint32Array(xb), 35044);
        W.v7s(2, 4, 5121, !0, 0, 0);
        W.e3x(0);
        W.e3x(1);
        W.e3x(2);
        W.e8z(2929);
        W.e8z(2884);
        W.c70(1);
        W.c7a(1029);
        W.d4n(515);
        W.c5t(0, 0, 0, 1);
        W.b6o(36160, wa);
        W.bb1(36161, p);
        W.r4v(36161, 33189, 128, 128);
        W.f8w(36160, 36096, 36161, p);
        W.a4v(33987);
        W.b9j(3553, hb);
        W.fas(36160, 36064, 3553, hb, 0);
        W.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        W.b9j(3553, W.c25());
        W.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Nb);
        W.gbn(3553);
        W.t2z(3553, 10241, 9987);
        W.t2z(3553, 10240, 9729);
        Sa.g = () => e.translate(n.x, F, n.z).rotateSelf(0, C);
        Ra.map((v, x) => {
          v.g = () =>
            Sa.l.translate(0, K * Wa(.45 * Math.sin(9.1 * a + Math.PI * x - Math.PI / 2))).rotateSelf(
              K * Math.sin(9.1 * a + Math.PI * x) * .25 / Ta,
              0,
            );
        });
        try {
          const [v, x, J, E, L] = JSON.parse(localStorage.DanteSP22);
          U.map((P, V) => P.h = P.i = P.j = V ? 0 | v[V] : 0);
          Zb.map((P, V) => P.j = 0 | x[V]);
          xa = J;
          a = E;
          Ha = L;
        } catch (v) {
        }
        Ga = 0 > xa ? 0 : 1 < xa ? 1 : xa;
        h4.innerHTML = "";
        qa = 0;
        $b();
        ec();
        NO_INLINE(Xb)();
        Ma();
        Hb = ea = n.x;
        Ib = (Z = n.y) + 13;
        Jb = (aa = n.z) + -18;
        requestAnimationFrame(Na);
      }
    },
    h = () => {
      if (5 > b) {
        var p = 0, t = b++;
        let [C, K, S, la, ba, z, R, O, da, F, ea, Z, aa, N, pa, Ma, za, Na, Ea, Nb, rb] = Mb[t];
        F = F * F * 4;
        for (const ia of [5513, 4562, 3891]) {
          let ta = 0, ha = 0, wa, hb, Aa, v, x;
          const J = [],
            E = new Int32Array(768 * ia),
            L = 2 ** (Z - 9) / ia,
            P = Math.PI * 2 ** (za - 8) / ia,
            V = Ea * ia & -2;
          for (let Y = 0; 11 >= Y; ++Y) {
            for (
              let Oa = 0, Eb = +"000001234556112341234556011111111112011111111112000001111112"[12 * t + Y];
              32 > Oa;
              ++Oa
            ) {
              const gb = (32 * Y + Oa) * ia;
              for (var c = 0; 4 > c; ++c) {
                if (wa = 0, Eb && (wa = rb[Eb - 1].charCodeAt(Oa + 32 * c) - 40, wa += 0 < wa ? 106 : 0), wa) {
                  var f;
                  if (!(f = J[wa])) {
                    f = wa;
                    let M = void 0, I = void 0;
                    var w = wa;
                    let Q = 0, fa = 0;
                    const ua = 2 > t ? Qb : Ob, va = 2 > t ? 1 > t ? Pb : Rb : Ob, sa = new Int32Array(O + da + F);
                    for (let X = 0, Da = 0; O + da + F > X; ++X, ++Da) {
                      let T = 1;
                      O > X ? T = X / O : O + da > X || (T = (1 - (T = (X - O - da) / F)) * 3 ** (-ea / 16 * T));
                      0 > Da
                        || (Da -= 4 * ia,
                          I = 0.003960 * 2 ** ((w + K - 256) / 12),
                          M = 0.003960 * 2 ** ((w + ba - 256) / 12) * (1 + (t ? 0 : 8e-4 * 9)));
                      sa[X] = 80
                          * (ua(Q += I * T ** (S / 32)) * C + va(fa += M * T ** (z / 32)) * la
                            + (R ? (2 * Math.random() - 1) * R : 0))
                          * T | 0;
                    }
                    f = J[f] = sa;
                  }
                  for (let M = 0, I = 2 * gb; f.length > M; ++M, I += 2) {
                    E[I] += f[M];
                  }
                }
              }
              for (let M, I = 0; ia > I; ++I) {
                c = 0,
                  f = 2 * (gb + I),
                  ((M = E[f]) || x)
                  && (Aa = 0.003080 * aa,
                    1 != t && 4 != t || (Aa *= Math.sin(L * f * Math.PI * 2) * Nb / 512 + .5),
                    Aa = 1.5 * Math.sin(Aa),
                    ta += Aa * ha,
                    v = (1 - N / 255) * (M - ha) - ta,
                    ha += Aa * v,
                    M = 4 == t ? ha : 3 == t ? v : ta,
                    t || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5),
                    M *= pa / 32,
                    x = 1e-5 < M * M,
                    hb = Math.sin(P * f) * Ma / 512 + .5,
                    c = M * (1 - hb),
                    M *= hb),
                  V > f || (c += E[f - V + 1] * Na
                    / 255,
                    M += E[f - V] * Na / 255),
                  pc[p + f] += E[f] = c,
                  ++f,
                  pc[p + f] += E[f] = M;
              }
            }
          }
          p += E.length;
        }
        setTimeout(h);
      } else {
        p = Ub.createBuffer(2, 5362944, 44100);
        for (t = 0; 2 > t; t++) {
          for (let C = t, K = p.getChannelData(t); 10725888 > C; C += 2) {
            K[C >> 1] = pc[C] / 65536;
          }
        }
        Tb.buffer = p;
        Tb.loop = !0;
      }
      l();
    },
    k = new Image();
  k.onload = k.onerror = () => {
    l();
  };
  k.src = qc;
  setTimeout(h, 50);
  NO_INLINE(ic)();
  Sa = G(() => {
    Ra = [-1, 1].map(t =>
      G(() => {
        D(u(10, 1), e.translate(.3 * t, -0.8).scale(.2, .7, .24), q(1, .3, .4));
      })
    );
    [0, 180].map(t => D(gc, e.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), q(1, 1, .8)));
    D(kb(20), e.translate(0, 1).scale(.5, .5, .5), q(1, .3, .4));
    const p = r(
      A(y(u(15, 1), r(u(B), e.translate(0, 0, 1).scale(2, 2, .5)))),
      e.rotate(-90, 0).scale(.1, .05, .1),
      q(.3, .3, .3),
    );
    [-1, 1].map(t => D(p, e.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t)));
    D(u(B), e.translate(0, .9, .45).scale(.15, .02, .06), q(.3, .3, .3));
    D(kb(20), e.scale(.7, .8, .55), q(1, .3, .4));
  });
});
