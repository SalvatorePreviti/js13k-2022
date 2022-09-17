let ha = 0,
  na = !0,
  oa = 0,
  pa = 0,
  qa = 0,
  a = 0,
  ra = 0,
  ta = 0,
  Aa = 0,
  Ba = 0,
  Ea = 0,
  Fa = 0,
  Ia = 0,
  Ja = 0,
  Ka = 0,
  e = .066,
  La,
  Oa,
  Qa,
  Ra,
  Sa,
  Ta,
  Ua,
  Va;
const Wa = Math.PI / 180,
  k = new DOMMatrix(),
  Xa = (b, f) => f < b ? b : f,
  Ya = b => 0 > b ? -b : b,
  Za = b => 0 > b ? 0 : 1 < b ? 1 : b,
  $a = (b, f) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > f ? 0 : 1 < f ? 1 : f)),
  ab = b => Math.atan2(Math.sin(b *= Wa), Math.cos(b)) / Wa,
  bb = (b, f, h) => {
    b *= Wa;
    f = (f * Wa - b) % (2 * Math.PI);
    return (b + (2 * f % (2 * Math.PI) - f) * (0 > h ? 0 : 1 < h ? 1 : h)) / Wa;
  },
  cb = (b, f, h, c) => {
    var d = f - b;
    b += Math.sign(f - b) * Xa(0, (0 > d ? -d : d) ** .9 - h) * c * 2;
    return b + (f - b) * Za(c / 7);
  },
  l = (b, f) => Array.from(Array(b), (h, c) => f(c)),
  db = (b, f, h, c) => [b, 0, 0, 0, 0, f, 0, 0, 0, 0, (c + h) / (h - c), -1, 0, 0, 2 * c * h / (h - c), 0],
  eb = ({ x: b, y: f, z: h }, c) => b * c.x + f * c.y + h * c.z,
  hb = ({ x: b, y: f, z: h }, c) => Math.hypot(b - c.x, f - c.y, h - c.z) || 0,
  ib = b => {
    let f = 0, h = 0, c = 0, d, g = b.at(-1);
    for (d of b) {
      f += (g.y - d.y) * (g.z + d.z), h += (g.z - d.z) * (g.x + d.x), c += (g.x - d.x) * (g.y + d.y), g = d;
    }
    return d = Math.hypot(f, h, c), f /= d, h /= d, c /= d, { x: f, y: h, z: c, w: f * g.x + h * g.y + c * g.z };
  },
  m = (b, f, h, c = 0) => 255 * c << 24 | 255 * h << 16 | 255 * f << 8 | 255 * b,
  jb = (b, f, h) => (b.C = h, b.v = f, b),
  kb = (b, f, h = b.v) =>
    jb(
      b.map(c =>
        ((
          { x: d, y: g, z: n },
          q,
        ) => ({ x: d, y: g, z: n } = q.transformPoint({ x: d, y: g, z: n }), { x: d, y: g, z: n }))(c, f)
      ),
      h,
      b.C,
    ),
  p = (b, f, h) => b.map(c => kb(c, f, h)),
  lb = (b, f = 0) =>
    l(b, h => {
      const c = Math.cos(2 * Math.PI * h / b);
      return { x: Math.sin(2 * Math.PI * h / b), y: 0, z: .01 > (0 > c ? -c : c) ? c : 0 > c ? c - f : c + f };
    }),
  mb = (b, f, h) =>
    b.map((c, d, { length: g }) => jb([c, f[g - d - 1], f[g - (d + 1) % g - 1], b[(d + 1) % g]], b.v, h)),
  r = (b, f, h = 0, c) => {
    c = b.length ? b : lb(b, c);
    b = kb(c, k.translate(0, 1).scale3d(0 < h ? h : 1));
    h = kb(c, k.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse();
    return [...mb(h, b, f), h, b];
  },
  nb = (
    b,
    f = b,
    h = (
      c,
      d,
    ) => (d *= Math.PI / f,
      { x: Math.cos(c *= 2 * Math.PI / b) * Math.sin(d), y: Math.cos(d), z: Math.sin(c) * Math.sin(d) }),
  ) => {
    const c = [];
    for (let d = 0; b > d; d++) {
      for (let g = 0; f > g; g++) {
        const n = jb([], 0, 1);
        c.push(n);
        n.push(h(d, g, n));
        g && n.push(h((d + 1) % b, g, n));
        f - 1 > g && n.push(h((d + 1) % b, g + 1 % f, n));
        n.push(h(d, g + 1 % f, n));
      }
    }
    return c;
  },
  ob = (b, f) => {
    var h, c, d, g = f.B;
    for (var n = 0; g.length > n; ++n) {
      if (-0.00008 > (d = eb(b, g[n]) - b.w) ? c = f : 8e-5 < d && (h = f), c && h) {
        c = [];
        d = [];
        g = f.B;
        n = f.A;
        let q = g.at(-1), t = eb(b, q) - b.w;
        for (const B of g) {
          h = eb(b, B) - b.w,
            8e-5 > t && d.push(q),
            -0.00008 < t && c.push(q),
            (8e-5 < t && -0.00008 > h || -0.00008 > t && 8e-5 < h)
            && (t /= h - t,
              q = { x: q.x + (q.x - B.x) * t, y: q.y + (q.y - B.y) * t, z: q.z + (q.z - B.z) * t },
              c.push(q),
              d.push(q)),
            q = B,
            t = h;
        }
        return {
          o: 2 < c.length && { B: jb(c, g.v, g.C), A: n, l: f },
          m: 2 < d.length && { B: jb(d, g.v, g.C), A: n, l: f },
        };
      }
    }
    return { o: h, m: c };
  },
  qb = (b, f, h = ib(f.B)) => {
    if (b) {
      const { o: c, m: d } = ob(b, f);
      c || d || b.D.push(f);
      c && (b.o = qb(b.o, c, h));
      d && (b.m = qb(b.m, d, h));
    } else {
      b = { x: h.x, y: h.y, z: h.z, w: h.w, D: [f], o: 0, m: 0 };
    }
    return b;
  },
  rb = (b, f, h) => {
    const c = [],
      d = (g, n) => {
        let { o: q, m: t } = ob(g, n);
        q || t || (0 < h * eb(g, f) ? q = n : t = n);
        q && (g.o ? d(g.o, q) : c.push(q));
        t && g.m && d(g.m, t);
      };
    for (const g of f.D) {
      d(b, g);
    }
    return c;
  },
  sb = (b, f) => b && (f(b), sb(b.o, f), sb(b.m, f)),
  tb = b => b.length ? b.reduce((f, h) => qb(f, { B: h, A: 0, l: 0 }), 0) : b,
  ub = b => (sb(b, f => {
    const h = f.m;
    f.m = f.o;
    f.o = h;
    f.x *= -1;
    f.y *= -1;
    f.z *= -1;
    f.w *= -1;
    for (const c of f.D) {
      c.A = !c.A;
    }
  }),
    b),
  vb = (...b) =>
    b.reduce((f, h) => {
      const c = [];
      if (f = tb(f), h) {
        h = tb(h);
        sb(f, d => d.D = rb(h, d, 1));
        sb(h, d => c.push([d, rb(f, d, -1)]));
        for (const [d, g] of c) {
          for (const n of g) {
            qb(f, n, d);
          }
        }
      }
      return f;
    }),
  u = (b, ...f) => ub(vb(ub(tb(b)), ...f)),
  x = b => {
    const f = new Map(),
      h = new Map(),
      c = d => {
        if (d.l) {
          const g = f.get(d.l);
          g ? (h.delete(g), d = c(d.l)) : f.set(d.l, d);
        }
        return d;
      };
    return sb(b, d => {
      for (const g of d.D) {
        h.set(c(g), g.A);
      }
    }),
      Array.from(h, ([{ B: d }, g]) => {
        const n = d.map(({ x: q, y: t, z: B }) => ({ x: q, y: t, z: B }));
        return jb(g ? n.reverse() : n, d.v, d.C);
      });
  },
  y = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  wb = [],
  z = (b, f) => {
    xb.push(xb.at(-1).multiply(b));
    b = f();
    return xb.pop(), b;
  },
  yb = [],
  zb = [],
  Ab = [],
  Bb = [],
  Cb = [[]],
  Fb = new Map(),
  Gb = new Int32Array(7),
  Jb = b => {
    let { x: f, y: h, z: c } = Oa[b];
    Hb[0] = f;
    Hb[1] = h;
    Hb[2] = c;
    b = "" + (Oa.C ? Ib : Gb);
    let d = Fb.get(b);
    return void 0 !== d
      ? (f = 3 * d, Ab[f] = (Ab[f++] + Gb[4]) / 2, Ab[f] = (Ab[f++] + Gb[5]) / 2, Ab[f] = (Ab[f] + Gb[6]) / 2)
      : (Fb.set(b, d = Fb.size), zb.push(f, h, c), Ab.push(Gb[4], Gb[5], Gb[6]), Bb.push(Gb[3])),
      d;
  },
  C = (b, f = k, h) => Cb.at(-1).push(...p(b, xb.at(-1).multiply(f), h)),
  Kb = () => {
    var b = Cb.at(-1);
    for (Oa of b) {
      const { x: f, y: h, z: c } = ib(Oa);
      Gb[3] = 0 | Oa.v;
      Gb[4] = 32767 * f;
      Gb[5] = 32767 * h;
      Gb[6] = 32767 * c;
      for (let d = 2, g = Jb(0), n = Jb(1); Oa.length > d; ++d) {
        yb.push(g, n, n = Jb(d));
      }
    }
    b.length = 0;
    b = ha;
    return { M: b, L: (ha = yb.length) - b };
  },
  D = b => {
    const f = La, h = { H: xb.at(-1), s: k, J: wb.length + 1, u: 1, G: 0, I: 1, l: f === wb[0] ? void 0 : f };
    b = (La = h, wb.push(h), xb.push(k), Cb.push([]), b(h) || Kb());
    return h.F = b, xb.pop(), Cb.pop(), La = f, h;
  },
  Lb = () => {
    for (const f of wb) {
      var b = f.h;
      (f.s = f.l ? f.l.s.multiply(f.H) : f.H, b) && (b = b(f)) && (f.s = f.s.multiply(b));
    }
  },
  G = { x: -11, y: 17, z: -90 };
var Mb = 0, Ob = 0;
const Pb = [[
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
  Qb = b => Math.sin(b * Math.PI * 2),
  Rb = b => .5 > b % 1 ? 1 : -1,
  Sb = b => b % 1 * 2 - 1,
  Tb = b => {
    b = b % 1 * 4;
    return 2 > b ? b - 1 : 3 - b;
  },
  Ub = [],
  Xb = () => {
    Qa || !na ? Vb.disconnect() : Vb.connect(Wb.destination);
    b4.innerHTML = "Music: " + na;
  },
  Yb = (b = !1) => {
    if (Qa !== b) {
      Qa = b;
      Ra = 0;
      try {
        b ? document.exitPointerLock() : Vb.start();
      } catch {
      }
      document.body.className = b ? "l m" : "l";
      Xb();
    }
  },
  Zb = () => {
    let b = 0, f = 0, h = 0, c, d, g;
    const n = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Ub.length = oa = pa = 0;
      c = d = void 0;
      document.hidden && Yb(!0);
    };
    b1.onclick = () => Yb();
    b2.onclick = () => {
      Yb();
      Ra = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      na = !na;
      Xb();
    };
    b5.onclick = () => Yb(!0);
    onclick = () => {
      g = 1;
      Qa || (Ub[5] = !0, Ra && hC.requestPointerLock());
    };
    document.onvisibilitychange = onresize = onblur = n;
    onkeydown = onkeyup = ({ code: q, target: t, type: B, repeat: E }) => {
      E || ((t = !!B[5] && t === document.body) && ("Escape" === q || "Enter" === q && Qa)
        ? Qa && !g || Yb(!Qa)
        : (q = {
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
        }[q],
          5 === q ? t && (Ub[q] = 1) : Ub[q] = t));
    };
    onmousemove = ({ movementX: q, movementY: t }) => {
      Ra && (q || t) && (Ob += .1 * q, Mb += .1 * t);
    };
    hC.ontouchstart = q => {
      if (!Qa) {
        for (const t of q.changedTouches) {
          Ra && t.pageX > hC.clientWidth / 2 ? c || (c = t, b = Ob, f = Mb) : d = d || t;
        }
        h = qa;
      }
    };
    hC.ontouchmove = ({ changedTouches: q }) => {
      if (!Qa) {
        for (const { pageX: t, pageY: B, identifier: E } of q) {
          c?.identifier === E && (Ob = b + (t - c.pageX) / 3, Mb = f + (B - c.pageY) / 3),
            d?.identifier === E
            && (oa = -(t - d.pageX) / 18,
              pa = -(B - d.pageY) / 18,
              oa = .35 > (0 > oa ? -oa : oa) ? 0 : .8 * oa,
              pa = .35 > (0 > pa ? -pa : pa) ? 0 : .8 * pa);
        }
      }
    };
    hC.ontouchend = q => {
      for (const t of q.changedTouches) {
        t.identifier === c?.identifier && (c = void 0), t.identifier === d?.identifier && (d = void 0, pa = oa = 0);
      }
      q.preventDefault();
      q = qa - h;
      (!h || .02 < q && .4 > q) && (Ub[5] = !0);
    };
    oncontextmenu = () => !1;
    n();
    Yb(!0);
  },
  H = (b, f, h) => b + (f - b) * Za(1 - Math.exp(-h * e)),
  $b = ({ j: b }) => b,
  Q = [],
  ac = [],
  bc = () => {
    ra = ac.reduce((b, f) => b + f.j, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ra];
  },
  cc = () => {
    bc();
    localStorage.DanteSP22 = JSON.stringify([Q.map($b), ac.map($b), Aa, a, Ka]);
  },
  T = { x: 0, y: 0, z: 0 },
  ec = b => {
    z(b, () => {
      D(f => {
        const h = { j: 0, g: 0, i: 0, l: f.l }, c = Q.push(h) - 1;
        f.h = () => {
          const d = h.j, g = h.g, n = h.i, q = (h.K = f.s).transformPoint(), t = hb(q, G);
          2.9 > hb(q, T) && Ub[5] && (.3 > g || .7 < g)
            && (h.j = d ? 0 : 1, c && (Ia || (h4.innerHTML = "* click *", ta = a + 1)), Aa = c, cc());
          return h.g = H(g, d, 4),
            h.i = H(n, d, 1),
            f.G = 80 < hb(q, G),
            f.u = 150 > t,
            f.F = dc[.5 < g ? 1 : 0],
            k.rotate(60 * h.g - 30, 0).translateSelf(0, 1);
        };
      });
      C(r(5), k.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), m(.4, .5, .5));
      C(r(5), k.translate(.2).rotate(90, 90).scale(.4, .1, .5), m(.4, .5, .5));
      C(r(y), k.translate(0, -0.4).scale(.5, .1, .5), m(.5, .5, .4));
    });
  },
  fc = b =>
    k.translate(Math.sin(a + 2) / 5, Math.sin(.8 * a) / 3, b).rotateSelf(
      2 * Math.sin(a),
      Math.sin(.7 * a),
      Math.sin(.9 * a),
    ),
  hc = (b, ...f) => {
    z(b, () => {
      let h = -1, c = 0, d = 1, g = 0, n = 0, q = 3, t = 0, B = 0;
      const E = { j: 0 }, Z = f.map(([Y, K, ja]) => ({ x: Y, z: K, w: ja }));
      let da = Z[0], { x: V, z: W } = da, A = V, aa = W;
      const N = ac.push(E) - 1;
      D(Y => (Y.h = () => {
        if (!E.j) {
          var K = 1;
          var ja = 1 / 0;
          for (var ea of Z) {
            var fa = ea.w, O = Math.hypot(V - ea.x, W - ea.z), sa = O - fa;
            ia ||= O < fa;
            0 < sa && ja > sa && (ja = sa, da = ea);
            fa = O / fa;
            K = K < fa ? K : fa;
          }
          if (!ia) {
            ea = da.x;
            ja = da.z;
            fa = da.w;
            O = V - ea;
            sa = W - ja;
            let Ca = Math.hypot(O, sa), Ma = Math.atan2(-sa, O);
            d && (g = (Math.random() - .5) * Math.PI / 2, q = Xa(1, q / (1 + Math.random())));
            Ma += g;
            h = -Math.cos(Ma);
            c = Math.sin(Ma);
            .1 < Ca && (Ca = (Ca < fa ? Ca : fa) / (Ca || 1), V = O * Ca + ea, W = sa * Ca + ja);
          }
          d = ia;
          q = H(q, 3 + 6 * (1 - K), 3 + K);
          V = H(V, V + h, q);
          W = H(W, W + c, q);
          A = H(A, V, q);
          aa = H(aa, W, q);
          n = bb(n, Math.atan2(A - t, aa - B) / Wa - 180, 3 * e);
          t = A;
          B = aa;
          K = k.translate(A, 0, aa).rotateSelf(0, n).skewXSelf(7 * Math.sin(2 * a)).skewYSelf(7 * Math.sin(1.4 * a));
          var ia = Y.s.multiply(K).transformPoint();
          Y.G = 100 < hb(ia, G);
          1.5 > hb(ia, T)
            && (E.j = 1,
              ia = [
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
              ][ra] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              ea = ra && 12 > ra ? 5 : 7,
              Ia || (h4.innerHTML = ia, ta = a + ea),
              cc());
        }
        E.j
          && (Y.l = Va,
            Y.H = k,
            Y.G = !1,
            ia = N % 4 - 2,
            K = k.translate(
              N % 4 * 1.2 - 1.7 + Math.sin(a + N) / 6,
              -2,
              1.7 * (N / 4 | 0) - 5.5 + (0 > ia ? -ia : ia) + Math.cos(a / 1.5 + N) / 6,
            ));
        return K;
      },
        gc)
      );
    });
  },
  kc = () => {
    D(() => {
      Va = z(k.translate(-12, 4.2, -66), () =>
        D(h => {
          h.h = () => fc(40 * Ja);
          ec(k.translate(0, -3, 4));
          C(ic);
        }));
      const b = x(
          u(
            p(r(y), k.translate(0, -8).scale(6, 15, 2.2)),
            p(r(y), k.translate(0, -14.1).scale(4, 13, 4)),
            p(r(20, 1), k.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
          ),
        ),
        f = (l(7, h => C(r(6, 1), k.translate(4 * (h / 6 - .5), 3).scale(.2, 3, .2), m(.3, .3, .38))), Kb());
      C(r(y), k.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), m(.8, .8, .8, .2));
      hc(k.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
      hc(
        k.translate(0, 2.8),
        [5, 10, 3],
        [-5, 10, 3],
        ...lb(18).map(({ x: h, z: c }) => [7 * h, 10 * c, 4.5 - 2 * (0 > h ? -h : h)]),
      );
      y.map(({ x: h, z: c }) => C(r(6), k.translate(3 * h, 3, 15 * c).scale(.7, 4, .7), m(.6, .3, .3, .4)));
      [-23, 22].map(h => C(r(y), k.translate(0, 0, h).scale(3, 1, 8), m(.9, .9, .9, .2)));
      [-15, 15].map((h, c) => {
        C(r(y), k.translate(0, 6.3, h).scale(4, .3, 1), m(.3, .3, .3, .4));
        C(r(y), k.translate(0, 1, h).scale(3, .2, .35), m(.3, .3, .38, .2));
        z(k.translate(0, 0, h), () =>
          D(d => (d.h = () => {
            const g = Q[c + 1].g;
            return d.u = .99 > g, k.translate(0, 5 * -g);
          },
            f)
          ));
      });
      l(
        5,
        h =>
          l(2, c =>
            C(
              jc,
              k.translate(18.5 * (c - .5), 0, 4.8 * h - 9.5).rotate(0, 180 - 180 * c).scale(1.2, 10, 1.2),
              m(1, 1, .8, .2),
            )),
      );
      C(r(y), k.translate(3, 1.5, -20).scale(.5, 2, 5), m(.7, .7, .7, .2));
      C(r(y), k.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), m(.75, .75, .75, .2));
      C(r(5), k.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), m(.6, .3, .3, .4));
      ec(k.translate(-5.4, 1.5, -19).rotate(0, -90));
      C(r(y), k.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), m(.8, .2, .2, .5));
      C(x(
        u(
          vb(
            p(r(6, 0, 0, .3), k.translate(8, -3, -4).scale(13, 1, 13), m(.7, .7, .7, .2)),
            p(r(6), k.translate(0, -8).scale(9, 8, 8), m(.4, .2, .5, .5)),
            p(r(6, 0, 0, .3), k.translate(0, -0.92).scale(13, 2, 13), m(.8, .8, .8, .2)),
          ),
          p(r(5), k.scale(5, 30, 5), m(.4, .2, .6, .5)),
          p(r(5, 0, 1.5), k.translate(0, 1).scale(4.5, .3, 4.5), m(.7, .5, .9, .2)),
          p(r(y), k.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), m(.5, .5, .5, .5)),
          p(r(6), k.translate(15, -1.5, 4).scale(3.5, 1, 3.5), m(.5, .5, .5, .5)),
        ),
      ));
      D(h => {
        ec(k.translate(0, 1.2));
        h.h =
          () => (h.u = .01 < Q[3].g,
            k.translate(0, (5 * Math.cos(1.5 * a) + 2) * Q[3].i * (1 - Q[2].g) + -15 * (1 - Q[3].g), 0));
        C(r(5), k.translate(0, -0.2).scale(5, 1, 5), m(.6, .65, .7, .3));
      });
      ec(k.translate(15, -2, 4));
      z(k.translate(0, 0, 75), () => {
        const h = () => {
            var g = Q[2].i, n = 1 - Q[4].i;
            return g < n ? g : n;
          },
          c = (g, n) =>
            D(q => {
              q.h = () => k.translate(h() * Math.sin(3 * g + a * g) * n);
              y.map(({ x: t, z: B }) => {
                C(r(11, 1), k.translate(4 * t, 4, 4 * B - 40).scale(.8, 3, .8), m(.5, .3, .7, .6));
                C(r(y), k.translate(4 * t, 7, 4 * B - 40).scale(1, .3), m(.5, .5, .5, .3));
              });
              C(x(u(
                p(r(y), k.translate(0, 0, -40).scale(5, 1, 5), m(.8, .8, .8, .3)),
                ...[-1, 1].map(t =>
                  p(r(y), k.translate(5 * t, .2, -40).rotate(0, 0, -30 * t).scale(4, 1, 2), m(.8, .8, .8, .3))
                ),
              )));
              C(r(y), k.translate(0, -3, -40).scale(8, 2, 8), m(.4, .4, .4, .3));
            }),
          d = (c(.7, 12),
            z(k.translate(0, 0, 20), () => c(1, 8.2)),
            D(g => {
              z(k.translate(0, 0, -30), () => {
                g.h = () => k.translate(h() * Math.sin(a / 1.5 + 2) * 12);
                C(x(
                  u(
                    vb(
                      p(r(y), k.scale(1.5, 1, 5), m(.9, .9, .9, .2)),
                      p(r(6), k.scale(4, 1, 5), m(.9, .9, .9, .2)),
                      p(r(y), k.translate(0, -2).scale(2, 3.2, 1.9), m(.3, .8, .5, .5)),
                      p(r(16, 1, 0, 4), k.scale(1, 1, 1.5).rotate(0, 90), m(.9, .9, .9, .2)),
                    ),
                    p(r(y), k.scale(1.3, 10, 1.3), m(.2, .7, .4, .6)),
                  ),
                ));
                hc(k.translate(0, 2.8), [0, 0, 4.5]);
              });
            }),
            D(g => {
              g.h = () => k.translate(9.8 * (1 - h()));
              C(r(3), k.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), m(.3, .6, .6, .2));
              C(r(8), k.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), m(.8, .8, .8, .2));
              C(r(y), k.translate(-23, -3, -20).scale(5.2, 1.7, 3), m(.5, .5, .5, .3));
              C(r(y), k.translate(-23, -2.2, -13).scale(3, 1, 4), m(.5, .5, .5, .3));
              ec(k.translate(-23, -0.5, -8.5));
            }),
            C(r(y), k.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), m(.9, .9, .9, .2)),
            D(g => {
              g.h = () => k.translate(0, Za(1 - 5 * h()) * $a(Q[4].g, Q[5].g) * Math.sin(1.35 * a) * 4);
              C(r(y), k.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), m(.7, .7, .7, .2));
              C(
                x(u(p(r(y), k.scale(3, 1.4, 2.7)), p(r(y), k.scale(1.2, 8, 1.2)))),
                k.translate(-33, -3, -20),
                m(.7, .7, .7, .2),
              );
            }),
            D(g => {
              g.h = () => k.translate(0, 0, Za(1 - 5 * h()) * $a(Q[4].g, Q[5].g) * Math.sin(.9 * a) * 8);
              C(x(
                u(
                  p(r(y), k.translate(-27, -3, -20).scale(3, 1.4, 2.7), m(.9, .9, .9, .2)),
                  p(r(y), k.translate(-27, -3, -20).scale(1, 3), m(.9, .9, .9, .2)),
                ),
              ));
              C(r(y), k.translate(-39, -3, -20).scale(3, 1.4, 2.7), m(.9, .9, .9, .2));
            }),
            z(k.translate(-44.5, 0, -20), () =>
              D(g => {
                g.h = () => k.translate(0, -6.5 * Q[4].i);
                C(r(6), k.rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), m(.7, .7, .7, .4));
              })),
            [...p(
              x(vb(
                p(r(y), k.translate(0, -3).scale(11, 1.4, 3), m(.9, .9, .9, .2)),
                u(
                  p(r(6), k.rotate(0, 0, 90).scale(6, 8, 6), m(.3, .6, .6, .3)),
                  p(r(4, 0, .01), k.translate(0, 6).scale(12, 2, .75).rotate(0, 45), m(.3, .6, .6, .3)),
                  p(r(6), k.rotate(0, 0, 90).scale(5, 12, 5), m(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(g =>
                    p(r(5), k.translate(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), m(.3, .6, .6, .3))
                  ),
                ),
              )),
              k,
            )]);
        C(d, k.translate(-53, 0, -20));
        C(r(6), k.translate(-61.3, -2.4, -26).scale(3, 1, 5), m(.4, .6, .6, .3));
        C(r(7), k.translate(-57, -2.6, -29).scale(4, 1, 4), m(.8, .8, .8, .3));
        ec(k.translate(-55, -1.1, -29).rotate(0, 90));
        z(k.translate(-75, 0, -20), () =>
          D(g => {
            g.I = 0;
            g.h = () => k.translate(0, (1 - Q[5].i) * (1 - Q[6].g) * 3).rotate(180 * (1 - Q[5].i) + Fa, 0);
            C(d);
          }));
        C(r(y), k.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), m(.7, .7, .7, .2));
        C(r(3, 0, -0.5), k.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), m(.8, .8, .8, .2));
        hc(k.translate(-100, .2, -20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
        C(
          x(u(
            vb(
              p(r(y), k.translate(-100, -2.5, -20).scale(8, 1, 8), m(.8, .8, .8, .2)),
              p(r(y), k.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), m(.8, .8, .8, .2)),
              p(r(y), k.translate(-100, -2.6, -5).scale(3, 1.1, 7), m(.8, .8, .8, .2)),
              p(r(y), k.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), m(.8, .8, .8, .2)),
              p(r(6), k.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), m(.6, .6, .6, .3)),
              p(r(y), k.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), m(.8, .8, .8, .2)),
              p(r(y), k.translate(-100, .42, 17).scale(3, 1.1, 4.1), m(.8, .8, .8, .2)),
            ),
            p(r(8), k.translate(-100, -1, -20).scale(7, .9, 7), m(.3, .3, .3, .4)),
            p(r(8), k.translate(-100, -2, -20).scale(4, .3, 4), m(.4, .4, .4, .5)),
            p(r(8), k.translate(-100, -3, -20).scale(.6, 1, .6), m(.4, .4, .4, .5)),
          )),
          k,
        );
        C(x(
          u(
            p(r(y), k.translate(-100, 1, -12).scale(7.5, 4), m(.5, .5, .5, .4)),
            p(r(y), k.translate(-100, 0, -5).scale(2, 2, 10), m(.5, .5, .5, .4)),
            p(r(20, 1), k.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), m(.5, .5, .5, .4)),
          ),
        ));
        hc(k.translate(-89, .2, 5), [0, 0, 6]);
        z(k.translate(-99.7, -2, -11.5), () => D(g => (g.h = () => k.translate(0, 5.3 * -Q[6].g), f)));
        y.map(({ x: g, z: n }) => {
          C(r(6), k.translate(7 * g - 100, -3, 7 * n - 20).scale(1, 8.1), m(.6, .15, .15, .8));
          [4, -0.4].map(q => C(r(6), k.translate(7 * g - 100, q, 7 * n - 20).scale(1.3, .5, 1.3), m(.4, .2, .2, .8)));
        });
        l(7, g => {
          C(
            r((23 * g + 1) % 5 + 5, 0, .55),
            k.translate(5 * Math.sin(g) - 101 + g, -2.3 - g, -30.1 - 2.8 * g).scaleSelf(
              5 + g / 2,
              1 + g / 6,
              5 + g / 3,
            ),
            m(.5 - g / 17, .5 - (1 & g) / 9, .6, .3),
          );
        });
        C(r(y), k.translate(-87, -9.5, -51).scale(7, 1, 3), m(.4, .5, .6, .4));
        C(r(4), k.translate(-86, -9.2, -48).scale(5, 1, 5), m(.5, .6, .7, .3));
        C(r(18, 1), k.translate(-86, -9, -44).scale(1.5, 1, 1.5), m(.3, .3, .4, .1));
        ec(k.translate(-86, -7.5, -44));
        z(k.translate(-76.9, -10, -51), () => {
          D(g => {
            g.h = () => k.translate(0, 3.5 * (1 - Xa(Q[6].g, Q[7].g)) + $a(Q[7].i, Q[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(n => C(r(y), k.translate(n, n / -13).scale(2.8, 1.5, 3), m(.2, .5, .6, .2)));
          });
          D(g => {
            g.h = () => {
              const n = $a(Q[7].i, Q[6].i);
              return k.translate(0, n * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + n) * n);
            };
            [6, 18].map(n => C(r(y), k.translate(n, n / -13).scale(2.8, 1.5, 3), m(.1, .4, .5, .2)));
          });
        });
        z(k.translate(-38.9, -11.3, -58), () => {
          C(x(
            u(
              vb(
                p(r(y), k.scale(11, 1, 13), m(.3, .4, .6, .3)),
                p(r(5), k.translate(0, 0, -7).scale(2, 1.2, 2), m(.2, .4, .7, .3)),
                p(r(5), k.scale(9, 1.2, 9), m(0, .2, .3, .5)),
              ),
              p(r(5), k.scale(5.4, 5, 5.4), m(0, .2, .3, .5)),
            ),
          ));
          ec(k.translate(0, 1.7, -7));
          D(g => {
            g.h = () => k.translate(0, -7.3 * Q[7].i);
            hc(k.translate(0, 11).rotate(0, 0, 10), ...lb(15).map(({ x: n, z: q }) => [3 * n, 3 * q, 1.5]));
            C(x(
              u(
                vb(
                  p(r(5), k.translate(0, 2).scale(5, 7, 5).skewY(8), m(.2, .4, .5, .5)),
                  p(r(5), k.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), m(.25, .35, .5, .5)),
                  p(r(5), k.translate(0, 9).scale(.6, 7, .6).skewY(8), m(.35, .3, .5, .5)),
                ),
                p(r(5), k.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), m(.2, .4, .5, .5)),
              ),
            ));
          });
          y.map(({ x: g, z: n }) => {
            C(r(18, 1), k.translate(9 * g, 4, 11 * n).scale(1, 4), m(.25, .25, .25, 1));
            [1.5, 8].map(q => C(r(18, 1), k.translate(9 * g, q, 11 * n).scale(1.5, .5, 1.5), m(.6, .6, .6, .3)));
          });
          C(x(
            u(
              vb(
                p(r(6), k.translate(0, 0, -36).scale(15, 1.2, 15), m(.7, .7, .7, .3)),
                p(r(y), k.translate(0, 0, -18).scale(4, 1.2, 6), m(.45, .4, .6, .3)),
              ),
              ...l(6, g =>
                l(6, n =>
                  p(
                    r(6),
                    k.translate(4.6 * n - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * n)).scale(2, 5, 2),
                    m(.7, .7, .7, .3),
                  ))).flat(),
            ),
          ));
          hc(k.translate(0, 2.9, -38), [0, 0, 12]);
        });
        C(r(5), k.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), m(.8, .1, .25, .4));
        ec(k.translate(-84, -0.5, 10).rotate(0, 45));
      });
      z(k.translate(-123, 1.4, 55), () => {
        D(h => {
          h.h = () => fc(-65 * Ka);
          ec(k.translate(0, -3, -4).rotate(0, 180));
          C(ic);
        });
      });
      z(k.translate(-123, 0, -12), () => {
        const h = x(
          u(
            p(r(y), k.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), m(.25, .25, .35, .3)),
            p(r(3), k.translate(0, 0, -5.5).scale(3, 2), m(.6, .3, .4, .3)),
            ...[-1.2, 1.2].map(c => p(r(y), k.translate(c, -0.5, 1).scale(.14, .3, 6.5), m(.7, .2, 0, .3))),
          ),
        );
        C(r(y), k.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), m(.8, .8, .8, .2));
        C(r(6), k.translate(7, -2.6, -4.5).scale(3.2, .8, 3), m(.6, .5, .7, .2));
        ec(k.translate(7, -1.4, -6).rotate(0, 180));
        hc(k.translate(8, .2), [0, 0, 3.5]);
        l(3, c => C(b, k.translate(12 * c + 14, -9), m(.6, .6, .6, .3)));
        l(3, c => C(b, k.translate(46, -9, -12 * c - 8).rotate(0, 90), m(.6, .6, .6, .3)));
        C(x(
          u(
            p(r(12), k.translate(46, -13.9).scale(4, 18.2, 4), m(.7, .7, .7, .2)),
            p(r(y), k.translate(44).scale(3.5, 2.2, 1.3), m(.4, .5, .6, .2)),
            p(r(y), k.translate(46, 0, -2).scale(1.5, 2.2, 2), m(.4, .5, .6, .2)),
            p(r(12), k.translate(46, 2.8).scale(3, 5, 3), m(.4, .5, .6, .2)),
          ),
        ));
        C(r(y), k.translate(7.5, -17).scale(.5, 15, 2.2), m(.6, .6, .6, .3));
        C(r(y), k.translate(46, -17, -38.5).scale(2.2, 15, .5), m(.6, .6, .6, .3));
        C(
          x(u(
            vb(
              p(r(y), k.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
              p(r(y), k.translate(26.5, -0.6, 10).scale(17, 2, .5)),
            ),
            ...l(4, c => p(r(y), k.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9))),
            ...l(3, c => p(r(y), k.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9))),
          )),
          k,
          m(.5, .5, .6, .2),
        );
        C(r(5), k.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), m(.25, .25, .35, 1));
        D(c => {
          c.h = () => {
            var d = Math.sin(1.1 * a);
            return k.translate.call(k, 0, -2, $a(Q[10].g, Q[11].g) * (0 > d ? -d : d) * -8.5 + 10);
          };
          l(2, d => C(h, k.translate(13 + 9 * d + (1 & d), 1.7)));
        });
        D(c => {
          c.h = () => {
            var d = Math.sin(2.1 * a);
            return k.translate.call(k, 0, -2, $a(Q[10].g, Q[11].g) * (0 > d ? -d : d) * -8.5 + 10);
          };
          l(2, d => C(h, k.translate(13 + 9 * (d + 2) + (1 & d), 1.7)));
        });
        D(c => {
          c.h = () => {
            var d = Math.sin(1.5 * a);
            return k.translate.call(
              k,
              0,
              -2,
              -8.5 * Xa((1 - Q[10].g) * (1 - $a(Q[10].g, Q[11].g)), $a(Q[10].g, Q[11].g) * (0 > d ? -d : d)) + 10,
            );
          };
          l(3, d => C(h, k.translate(17 + 9 * d, 1.7)));
        });
        C(r(y), k.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), m(.6, .6, .6, .3));
        C(x(
          u(
            p(r(y), k.translate(30, -5.8, -28).scale(9, 1, 5), m(.8, .8, .8, .1)),
            p(r(9), k.translate(25, -5.8, -28).scale(3, 8, 3), m(.7, .7, .7, .2)),
          ),
        ));
        hc(k.translate(30, -3, -28).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);
        C(r(9), k.translate(25, -5.8, -28).scale(2.5, .9, 2.5), m(.5, .5, .5, .3));
        ec(k.translate(25, -4.4, -28).rotate(0, 90));
      });
      z(k.translate(-100, .7, 115), () => {
        const h = (C(
          x(u(
            vb(
              p(r(6, 0, 0, .6), k.translate(0, 0, -9.5).scale(8, 1, 11), m(.7, .7, .7, .2)),
              p(r(y), k.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), m(.7, .7, .7, .2)),
              p(r(y), k.translate(8.8, 0, -8).scale(3, 1, 3.3), m(.7, .7, .7, .2)),
            ),
            p(r(5), k.translate(0, 0, -2).scale(4, 3, 4), m(.7, .7, .7, .2)),
          )),
        ),
          l(4, c =>
            D(d => {
              d.h = () => {
                d.u = Q[1].j && Q[2].j;
                const g = $a(Q[8].i, Q[12].i);
                return k.translate(
                  2 < c ? 2 * (1 - g) + g : 0,
                  g * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3),
                  (1 & c ? -1 : 1) * (1 - Q[8].i) * (1 - Q[12].i) * -7
                    + (.05 > g ? .05 : g) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),
                );
              };
              C(
                r(6),
                k.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5),
                m(.5 - c / 8, c / 12 + .5, .7, .3),
              );
            })),
          z(k.translate(-39.7, -2.5, -21.5), () => {
            D(c => {
              c.h = () => {
                c.u = Q[1].j && Q[2].j;
                const d = $a(Q[8].i, Q[12].i);
                return k.translate(2.5 * (1 - d), -3 * (1 - Q[8].g) + d * Math.sin(.8 * a) * -1).rotateSelf(
                  Math.cos(1.3 * a) * (3 * d + 3),
                  0,
                );
              };
              C(x(
                u(p(r(10), k.scale(6, 2, 6), m(.1, .6, .5, .3)), p(r(10), k.scale(3.3, 6, 3.3), m(.1, .6, .5, .5))),
              ));
              z(k.translate(-7.5).rotate(0, 90), () => {
                C(r(15), k.scale(3, 2.3, 3), m(.4, .4, .4, .3));
                C(r(10), k.scale(2, 2.5, 2), m(.3, .8, .7, .3));
                C(r(5), k.scale(1, 3), m(.5, .5, .5, .5));
                ec(k.translate(0, 3.4).rotate(0, 180));
              });
              hc(k.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              [-1, 1].map(d =>
                C(
                  jc,
                  k.rotate(90 * -d, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                  m(1, 1, .8, .2),
                )
              );
            });
          }),
          [-1, 1].map(c => {
            C(r(15, 1), k.translate(-7.5 * c, 3, -19).scale(.8, 4, .8), m(.6, .24, .2, .5));
            [7.2, 1.5].map(d => C(r(15, 1), k.translate(-7.5 * c, d, -19).scale(1.1, .5, 1.1), m(.5, .24, .2, .4)));
            C(jc, k.translate(-5 * c, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), m(1, 1, .8));
            C(
              x(u(
                p(r(y), k.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), m(.5, .5, .5, .4)),
                p(r(y), k.scale(3, 3, 10), m(.6, .24, .2, .5)),
                p(r(30, 1), k.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), m(.6, .24, .2, .5)),
                p(r(5), k.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), m(.6, .24, .2, .5)),
                p(r(5), k.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), m(.6, .24, .2, .5)),
              )),
              k.translate(c, 0, -18),
            );
          }),
          D(c => (c.h = () => k.translate(0, -0.1 - 6 * Q[12].g, -18.5).scale(.88, 1.2), f)),
          [
            ...p(r(28, 1), k.scale(8, 1, 8), m(.45, .45, .45, .2)),
            ...p(r(5), k.translate(0, 1).scale(1, .2), m(.3, .3, .3, .2)),
          ]);
        z(k.translate(20, .3, -9), () => {
          D(c => {
            c.h = () => k.rotate(0, 40 + Ba);
            C(x(
              u(
                p(r(28, 1), k.scale(8, 1, 8), m(.45, .45, .45, .2)),
                p(r(y), k.translate(0, 0, -5.5).scale(1.5, 3, 2.5), m(.45, .45, .45, .2)),
              ),
            ));
            C(r(8), k.translate(0, 2).scale(3, 1.5, 3), m(.7, .7, .7, .1));
            C(r(5), k.translate(0, 2).scale(1, 2), m(.3, .3, .3, .2));
            hc(k.translate(0, 3), ...lb(10).map(({ x: d, z: g }) => [5.6 * d, 5.6 * g, 2.5]));
          });
        });
        z(k.translate(36, .3, -9), () => {
          C(r(y), k.translate(8).scale(.7, .8, 2.5), m(.7, .7, .7, .2));
          D(c => {
            c.h = () => k.rotate(0, Ea);
            C(x(
              u(
                p(r(28, 1), k.translate(0, 2).scale(8, 1, 8), m(.35, 0, 0, .3)),
                p(r(y), k.scale(9, 5, 2), m(.3, 0, 0, .3)),
              ),
            ));
            C(h);
            [-1, 1].map(d =>
              C(jc, k.rotate(0, 90).translate(-5 * d, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * d + 90), m(1, 1, .8))
            );
          });
        });
        z(k.translate(52, .3, -9), () => {
          C(r(y), k.translate(0, 0, -8).scale(2.5, .8, .7), m(.7, .7, .7, .2));
          D(c => {
            c.h = () => k.rotate(0, 180 - Ea);
            C(x(
              u(
                p(r(30, 1), k.translate(0, 2).scale(8, 1, 8), m(.35, 0, 0, .3)),
                p(r(y), k.translate(7).scale(9, 5, 2), m(.3, 0, 0, .3)),
                p(r(y), k.translate(0, 0, 7).scale(2, 5, 9), m(.3, 0, 0, .3)),
              ),
            ));
            C(h);
          });
        });
        z(k.translate(52, .3, -25), () => {
          D(c => {
            c.h = () => k.rotate(0, 270 + Ea);
            C(x(
              u(
                p(r(30, 1), k.translate(0, 2).scale(8, 1, 8), m(.35, 0, 0, .3)),
                p(r(y), k.translate(7).scale(9, 5, 2), m(.3, 0, 0, .3)),
                p(r(y), k.translate(0, 0, -7).scale(2, 5, 9), m(.3, 0, 0, .3)),
              ),
            ));
            C(h);
          });
        });
        C(r(y), k.translate(61, -0.3, -25).scale(2, 1, 2), m(.7, .7, .7, .3));
        C(r(y), k.translate(68, -0.3, -25).scale(5, 1, 3), m(.7, .7, .7, .3));
        ec(k.translate(66, 2, -19).rotate(-12, 0));
        C(r(5), k.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), m(.2, .5, .5, .6));
        [m(.1, .55, .45, .2), m(.2, .5, .5, .3), m(.3, .45, .55, .4)].map((c, d) =>
          D(g => {
            g.h = () =>
              k.translate(
                0,
                (1 - Q[13].i) * (1 - Q[14].i) * 3 + $a(Q[13].i, Q[14].i) * Math.sin(1.5 * a + 1.5 * d) * 4,
              );
            C(r(y), k.translate(76.5, d / 2 - 2.1, 7.5 * (1 - d / 30) * d - 25).scale(3.3, 3 - d / 2, 3.45 - d / 5), c);
          })
        );
        z(k.translate(100, .2, -20), () => {
          C(r(y), k.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), m(.6, .6, .6, .2));
          C(x(
            u(
              p(r(6, 0, 0, .3), k.translate(0, -0.92).scale(14, 2, 14), m(.8, .8, .8, .2)),
              p(r(5), k.scale3d(6), m(.3, .3, .3, .5)),
            ),
          ));
          [8, -6.1].map((c, d) =>
            l(3, g =>
              C(
                b,
                k.translate(6 * g - 6, c - (1 & g), 16 - .2 * (1 & g) - d),
                1 & g ? m(.5, .5, .5, .3) : m(.35, .35, .35, .5),
              ))
          );
          [-1, 1].map(c => C(jc, k.translate(-8 * c, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), m(1, 1, .8)));
          C(r(5), k.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), m(.5, .3, .3, .4));
          ec(k.translate(0, 1.7, -13).rotate(0, 180));
          hc(k.translate(0, 3), ...lb(9).map(({ x: c, z: d }) => [9 * c, 9 * d, 4]));
          C(x(
            u(
              vb(
                p(r(y), k.translate(0, 16, 15.5).scale(12, 1, 3), m(.5, .3, .3, .4)),
                p(r(y), k.translate(0, 16, 16).scale(3, 1, 3.8), m(.5, .3, .3, .4)),
              ),
              p(r(5), k.translate(0, 16, 8.5).scale(5.5, 5, 5.5), m(.5, .3, .3, .4)),
            ),
          ));
          D(c => {
            c.h = () => {
              const d = Math.sin(a);
              return k.translate(-2 * d).rotate(0, 0, 25 * d);
            };
            C(r(3), k.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), m(.5, .3, .3, .4));
            [22, 30].map(d => {
              C(r(6), k.translate(0, 16, d).scale(3, 1, 2.3).rotate(0, 90), m(.7, .7, .7, .4));
              C(r(y), k.translate(0, 6.2, d).scale(.5, 11, .5), m(.5, .3, .3, .4));
            });
          });
          C(r(6), k.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), m(.5, .6, .7, .3));
          C(r(y), k.translate(0, 16, 34).scale(1.5, 1, 2), m(.5, .6, .7, .3));
          C(r(7), k.translate(0, 16.2, 38).scale(5, 1, 5), m(.4, .5, .6, .4));
          D(c => {
            c.h = () => {
              let d = $a((Q[14].g + Q[14].i) / 2, Q[13].i);
              return d = $a(d, (Q[15].g + Q[15].i) / 2), k.translate(0, 16 * d, 8.5 * Za(2 * d - 1));
            };
            C(r(5), k.scale(5, 1.1, 5), m(.5, .3, .3, .4));
            C(r(5), k.scale(5.5, .9, 5.5), m(.25, .25, .25, .4));
            ec(k.translate(0, 1.5, -1).rotate(0, 180));
          });
          hc(k.translate(0, 19, 39), [0, 0, 3.5]);
        });
      });
    });
  },
  lc = (b, f, h, c) => {
    let d = 0, g = 0, n = 0, q = 1 / 0, t = -1 / 0, B = 1 / 0, E = -1 / 0, Z = 1 / 0, da = -1 / 0;
    const V = 1.1 * (h - f),
      W = (new DOMMatrix(db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, f, h))).multiplySelf(b).invertSelf();
    b = l(8, A => {
      A = W.transformPoint({ x: 4 & A ? 1 : -1, y: 2 & A ? 1 : -1, z: 1 & A ? 1 : -1 });
      return d -= A.x = (V * A.x | 0) / (V * A.w),
        g -= A.y = (V * A.y | 0) / (V * A.w),
        n -= A.z = (V * A.z | 0) / (V * A.w),
        A;
    });
    f = k.rotate(298, 139).translateSelf(d / 8, g / 8, n / 8);
    return kb(b, f).map(({ x: A, y: aa, z: N }) => {
      q = q < A ? q : A;
      t = A < t ? t : A;
      B = B < aa ? B : aa;
      E = aa < E ? E : aa;
      Z = Z < N ? Z : N;
      da = N < da ? da : N;
    }),
      Z *= 0 > Z ? c : 1 / c,
      da *= 0 < da ? c : 1 / c,
      k.scale(2 / (t - q), 2 / (E - B), 2 / (Z - da)).translateSelf((t + q) / -2, (E + B) / -2, (Z + da) / 2)
        .multiplySelf(f).toFloat32Array();
  },
  mc = (b, f = 35633) => {
    f = U.c6x(f);
    return U.s3c(f, b), U.c6a(f), f;
  },
  nc = (b, f) => {
    const h = {}, c = U.c1h();
    return U.abz(c, b), U.abz(c, mc(f, 35632)), U.l8l(c), d => d ? h[d] || (h[d] = U.gan(c, d)) : U.u7y(c);
  },
  oc = (b, f, h, c) => {
    const d = g => U.d97(4, g.L, 5123, 2 * g.M);
    if (Qa) {
      U.uae(b, !1, k.rotate(0, 40 * Math.sin(qa) - 70).toFloat32Array()), d(Ua.F), Ta.map(g => g.F).map(d);
    } else {
      for (const g of wb) {
        const n = g.J, q = g.F, t = g.u, B = g.G, E = g.l;
        !(f || g !== Ua && g !== Ta[0] && g !== Ta[1]) || h && B || !t || E && !E.u || !q
          || (c && U.ube(c, n / 255), U.uae(b, !1, g.s.toFloat32Array()), d(q));
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
  jc = (() => {
    const b = l(
        11,
        h => k.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),
      ),
      f = lb(18);
    return l(10, h => mb(kb(f, b[h]).reverse(), kb(f, b[h + 1]), 1)).flat();
  })(),
  ic = x(
    u(
      p(r(20, 1, 1.15, 1), k.translate(0, -3).scale(3.5, 1, 3.5), m(.7, .4, .25, .7)),
      p(r(20, 1, 1.3, 1), k.translate(0, -2.5).scale(2.6, 1, 3), m(.7, .4, .25, .2)),
      p(r(y), k.translate(4, -1.2).scale3d(2), m(.7, .4, .25, .3)),
    ),
  ),
  xb = [k],
  Ib = new Int32Array(Gb.buffer, 0, 4),
  Hb = new Float32Array(Gb.buffer),
  Wb = new AudioContext(),
  Vb = Wb.createBufferSource(),
  dc = (C([y.slice(1)], k.translate(-2).scale3d(3).rotate(90, 0)),
    Kb(),
    [m(1, .5, .2), m(.7, 1, .2)].map(
      b => (C(r(6, 1), k.scale(.13, 1.4, .13), m(.3, .3, .5)),
        C(r(8), k.translate(0, 1).scale(.21, .3, .21), b),
        C(r(3), k.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), m(.2, .2, .2)),
        Kb()),
    )),
  gc = (C(
    nb(40, 30, (b, f, h) => {
      const c = f / 30, d = .05 * b * Math.PI, g = c ** .6 * Math.PI / 2;
      b = c * c * Math.sin(b * Math.PI * .35) / 4;
      return 29 === f
        ? { x: h.C = 0, y: -0.5, z: 0 }
        : {
          x: Math.cos(d) * Math.sin(g),
          y: Math.cos(c * Math.PI) - c - b,
          z: Math.sin(d) * Math.sin(g) + Math.sin(b * Math.PI * 2) / 4,
        };
    }),
    k.scale3d(.7),
    m(1, 1, 1),
  ),
    [-1, 1].map(b => C(nb(15), k.translate(.16 * b, .4, -0.36).scale3d(.09))),
    Kb()),
  U = hC.getContext("webgl2");
for (const b in U) {
  U[b[0] + [...b].reduce((f, h, c) => (f * c + h.charCodeAt(0)) % 434, 0).toString(36)] = U[b];
}
setTimeout(() => {
  let b = 0, f = 6;
  const h = () => {
      if (h4.innerHTML += ".", !--f) {
        let n = 0, q = 0, t = 1, B = 0, E = 0, Z = 0, da = !1, V, W, A, aa, N, Y, K, ja, ea, fa;
        const O = { x: 0, y: 0, z: 0 },
          sa = new Int32Array(256),
          ia = () => {
            const { l: v, K: w } = Q[Aa], { x: J, y: F, z: L } = w.transformPoint({ x: 0, y: 8, z: -3 });
            T.x = O.x = J;
            T.y = O.y = K = F;
            T.z = O.z = L;
            W =
              Y =
              N =
              A =
              aa =
                0;
            t = 1;
            n = q = v?.J || 1;
          },
          Ca = () => {
            let v = 0,
              w = 0,
              J = (NO_INLINE(() => {
                let I = 0, R = 0, ka = 0, xa = 0, ya = 0;
                sa.fill(0);
                for (let ba = 0; 31 > ba; ++ba) {
                  let Ga = 0;
                  const S = 512 * ba;
                  for (let Pa = 0; 128 > Pa; Pa++) {
                    let ua = S + 4 * Pa;
                    var va = (Ha[ua] + Ha[1 + ua]) / 255;
                    if (ua = Ha[2 + ua], 14 < Pa && 114 > Pa && (Ga += va), ua && va) {
                      va = sa[ua] + 1, sa[ua] = va, I > va || (I = va, R = ua);
                    }
                  }
                  3 > Ga && 5 < ba && (xa += ba / 32);
                  3 < Ga && (7 < ba && (ka += ba / 15), ya = 1);
                }
                R && (ya = 1);
                t ? R && (t = 0, q = R) : q = R || n;
                n = R;
                W = ya;
                A = H(A, ya ? 6.5 : 8, 4);
                O.y += ka / 41 - (ya ? 1 : A) * xa / 41 * A * e;
              })(),
                NO_INLINE(() => {
                  for (let ya = 32; 128 > ya; ya += 2) {
                    var I = 0;
                    let va = 0;
                    var R = 0;
                    let ba = 0;
                    const Ga = 512 * ya;
                    for (let S = ya >> 1 & 1; 128 > S; S += 2) {
                      var ka = Ga + 4 * S;
                      const Pa = Ga + 4 * (127 - S), ua = Ha[ka] / 255, Db = Ha[1 + Pa] / 255;
                      var xa = S / 63.5 - 1;
                      xa = 1 - (0 > xa ? -xa : xa);
                      if (
                        10 < S && 118 > S
                        && (I = Xa(I, Xa(ua * xa, ua * Ha[Pa] / 127.5)),
                          va = Xa(va, Xa(Db * xa, Db * Ha[1 + ka] / 255))), 54 > S || 74 < S
                      ) {
                        ka = (1 - xa) * (Db < ua ? ua : Db) / 3,
                          .001 < ka && (64 > S && ka > R ? R = ka : 64 < S && ka > ba && (ba = ka));
                      }
                    }
                    R = ba - R;
                    I = va - I;
                    (0 > R ? -R : R) > (0 > v ? -v : v) && (v = R);
                    (0 > I ? -I : I) > (0 > w ? -w : w) && (w = I);
                  }
                })(),
                (Ub[0] ? 1 : 0) + (Ub[2] ? -1 : 0) + oa),
              F = (Ub[1] ? 1 : 0) + (Ub[3] ? -1 : 0) + pa;
            var L = navigator.getGamepads()[0];
            if (L) {
              var P = R => I[R]?.pressed || 0 < I[R]?.value;
              const I = L.buttons;
              L = L.axes;
              var X = P(1) || P(3) || P(2) || P(0);
              X !== da && (da = X) && (Ub[5] = 1);
              J += (.2 < Ya(-L[0]) ? -L[0] : 0) + (P(14) ? 1 : 0) + (P(15) ? -1 : 0);
              F += (.2 < Ya(-L[1]) ? -L[1] : 0) + (P(12) ? 1 : 0) + (P(13) ? -1 : 0);
              Ra && (.3 < Ya(L[2]) && (Ob += 80 * L[2] * e), .3 < Ya(L[3]) && (Mb += 80 * L[3] * e));
            }
            .05 > (0 > F ? -F : F) && (F = 0);
            .05 > (0 > J ? -J : J) && (J = 0);
            P = Math.atan2(F, J);
            L = Za(Math.hypot(F, J));
            var ca = (J = L * Math.cos(P), F = L * Math.sin(P), Za(1 - 5 * Xa(0 > v ? -v : v, 0 > w ? -w : w)));
            X =
              (q || (v += N * ca * e, w += Y * ca * e),
                N = H(N, 0, W ? 8 : 4),
                Y = H(Y, 0, W ? 8 : 4),
                aa = H(aa, W ? (J || F ? W ? 7 : 4 : 0) * ca : 0, W ? .1 < ca ? 10 : J || F ? 5 : 7 : 1),
                Ra ? Ob * Wa : Math.PI);
            ca = Math.sin(X) * aa * e;
            var Na = Math.cos(X) * aa * e;
            X = (v -= J * Na - F * ca, w -= J * ca + F * Na, q && wb[q - 1].I && wb[q - 1].s || k);
            ca = X.inverse();
            if (
              ca.m41 = 0,
                ca.m42 = 0,
                ca.m43 = 0,
                { x: v, z: w } = ca.transformPoint({ x: v, z: w, w: 0 }),
                O.x += v,
                O.z += w,
                q !== V
            ) {
              V = q;
              const { x: I, y: R, z: ka } = X.inverse().transformPoint(T);
              O.x = I;
              O.y = R;
              O.z = ka;
            }
            ca = T.x;
            Na = T.z;
            const { x: Eb, y: fb, z: M } = X.transformPoint(O);
            X = (T.x = Eb, T.y = fb, T.z = M, Ya(K - fb));
            K = H(K, fb + .1, 50 * X + 5);
            q && (N = (T.x - ca) / e, Y = (T.z - Na) / e);
            (J || F) && (B = 90 - P / Wa);
            E = bb(E, B, 8 * e);
            Z += (L - Z) * Za(10 * e);
          },
          Ma = v => {
            requestAnimationFrame(Ma);
            var w = (v - (Sa || v)) / 1e3;
            e = Qa ? Ub[5] = 0 : .066 < w ? .066 : w;
            a += e;
            qa += w;
            Sa = v;
            if (
              0 < e
              && (U.b6o(36160, za),
                U.r9r(0, 0, 128, 128, 6408, 5121, Ha),
                U.iay(36160, [36064]),
                NO_INLINE(Ca)(),
                Lb()), 0 < e
            ) {
              if (ja = cb(ja, T.x, .5, e), ea = cb(ea, T.y, 2, e), fa = cb(fa, T.z, .5, e), Ra) {
                v = 200 * t,
                  G.x = H(G.x, T.x, 18 + v),
                  G.y = H(G.y, T.y + 1.5, 15 + v),
                  G.z = H(G.z, T.z, 18 + v),
                  Mb = Xa(87 > Mb ? Mb : 87, -87);
              } else {
                if (
                  G.x = cb(G.x, ja, 1, 2 * e),
                    G.y = cb(G.y, ea + 13 + 15 * t, 4, 2 * e),
                    G.z = cb(G.z, fa + -18, 1, 2 * e),
                    v = G.z - fa,
                    1 < (0 > v ? -v : v)
                ) {
                  w = G.x - ja;
                  const J = G.y - ea;
                  Ob = 270 + Math.atan2(v, w) / Wa;
                  Mb = 90 - Math.atan2(Math.hypot(v, w), J) / Wa;
                }
              }
              if (Ob = ab(Ob), 0 < e) {
                v = $a(Q[12].g, Q[13].g),
                  a > ta && (h4.innerHTML = "", ta = 0),
                  w = H(Fa, 0, 1),
                  Fa = w + (ab(Fa + 60 * e) - w) * Za(Q[5].g - Q[6].i),
                  w = H(Ba, 0, 5),
                  Ba = w + (ab(Ba + 56 * e) - w) * (0 > v ? 0 : 1 < v ? 1 : v),
                  w = H(Ea, 0, 4),
                  Ea = w + (ab(Ea + 48 * e) - w) * (0 > v ? 0 : 1 < v ? 1 : v),
                  v = 2 * Q[9].i - 1,
                  Ka = H(Ka, Q[9].i, .2 + .3 * (0 > v ? -v : v)),
                  Ja = H(Ja, Ia ? Ja + (-9 - Ja) * Za(1.5 * e) : Za(a / 3), 1),
                  1 === Q[0].j && .8 < Q[0].g && (13 > ra
                    ? (Q[0].j = 0, Ia || (h4.innerHTML = "Not leaving now, there are souls to catch!", ta = a + 3))
                    : Ia
                      || (Ia
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", ta = a + 1 / 0),
                        Ia = 1)),
                  Ub[5] = 0,
                  (-25 > T.x || 109 > T.z ? -25 : -9) > T.y && ia();
              }
            }
            v = Qa
              ? k.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Za(hC.clientWidth / 1e3))
              : k.rotate(-Mb, -Ob, -0).invertSelf().translateSelf(-G.x, -G.y, -G.z);
            0 < e
              && (wa(),
                U.b6o(36160, za),
                U.v5y(0, 0, 128, 128),
                U.cbf(!0, !1, !0, !1),
                U.c4s(16640),
                U.uae(wa("b"), !1, k.rotate(0, 180).invertSelf().translateSelf(-T.x, -T.y, .3 - T.z).toFloat32Array()),
                oc(wa("c"), 0, 1, wa("j")),
                U.cbf(!1, !0, !1, !1),
                U.c4s(16640),
                U.cbf(!1, !0, !0, !1),
                U.uae(wa("b"), !1, k.translate(-T.x, -T.y, -T.z - .3).toFloat32Array()),
                oc(wa("c"), 0, 1, wa("j")),
                U.cbf(!0, !0, !0, !0),
                1 === q && (Q[9].j = -15 > T.x && 0 > T.z ? 1 : 0));
            pb();
            U.v5y(0, 0, 2048, 2048);
            Da[0](lc(v, .3, 55, 10));
            Da[1](lc(v, 55, 177, 11));
            U.b6o(36160, null);
            la();
            U.v5y(0, 0, U.drawingBufferWidth, U.drawingBufferHeight);
            U.c4s(16640);
            U.uae(la("a"), !1, db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
            U.uae(la("b"), !1, v.toFloat32Array());
            U.ubu(la("k"), G.x, G.y, G.z);
            Da[0]();
            Da[1]();
            oc(la("c"), !Ra);
            ma();
            U.ubu(ma("j"), U.drawingBufferWidth, U.drawingBufferHeight, qa);
            Qa ? U.ubu(ma("k"), 0, 0, 0) : U.ubu(ma("k"), G.x, G.y, G.z);
            U.uae(ma("b"), !1, v.inverse().toFloat32Array());
            U.d97(4, 3, 5123, 0);
          },
          Ha = new Uint8Array(65536),
          Nb = d;
        var g = mc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",
        );
        const pb = nc(
            mc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"),
            "#version 300 es\nvoid main(){}",
          ),
          ma = nc(
            mc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          wa = nc(
            g,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",
          ),
          la = nc(
            g,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          za =
            (ma(),
              U.ubh(ma("q"), 3),
              wa(),
              U.uae(wa("a"), !1, db(1.4, .59, 1e-4, 1)),
              la(),
              U.ubh(la("q"), 3),
              U.c5w());
        g = U.c3z();
        const gb = U.c25(),
          Da = l(2, v => {
            let w;
            const J = U.c25(), F = U.c5w(), L = la(v ? "j" : "i");
            return la(),
              U.ubh(la(v ? "h" : "g"), v),
              U.b6o(36160, F),
              U.d45([0]),
              U.r9l(0),
              U.a4v(33984 + v),
              U.b9j(3553, J),
              U.fas(36160, 36096, 3553, J, 0),
              U.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              U.t2z(3553, 10241, 9729),
              U.t2z(3553, 10240, 9729),
              U.t2z(3553, 34893, 515),
              U.t2z(3553, 34892, 34894),
              U.t2z(3553, 10243, 33071),
              U.t2z(3553, 10242, 33071),
              P => {
                P
                  ? (w = P,
                    U.b6o(36160, F),
                    U.iay(36160, [36096]),
                    U.c4s(256),
                    U.uae(pb("b"), !1, w),
                    oc(pb("c"), !Ra, 1))
                  : U.uae(L, !1, w);
              };
          });
        U.b11(34963, U.c1b());
        U.b2v(34963, new Uint16Array(yb), 35044);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Float32Array(zb), 35044);
        U.v7s(0, 3, 5126, !1, 0, 0);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Int16Array(Ab), 35044);
        U.v7s(1, 3, 5122, !0, 0, 0);
        U.b11(34962, U.c1b());
        U.b2v(34962, new Uint32Array(Bb), 35044);
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
        U.b6o(36160, za);
        U.bb1(36161, g);
        U.r4v(36161, 33189, 128, 128);
        U.f8w(36160, 36096, 36161, g);
        U.a4v(33987);
        U.b9j(3553, gb);
        U.fas(36160, 36064, 3553, gb, 0);
        U.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        U.b9j(3553, U.c25());
        U.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Nb);
        U.gbn(3553);
        U.t2z(3553, 10241, 9987);
        U.t2z(3553, 10240, 9729);
        Ua.h = () => k.translate(T.x, K, T.z).rotateSelf(0, E);
        Ta.map((v, w) => {
          v.h = () =>
            k.translate(0, Z * Za(.45 * Math.sin(9.1 * a + Math.PI * w - Math.PI / 2))).rotateSelf(
              Z * Math.sin(9.1 * a + Math.PI * w) * .25 / Wa,
              0,
            );
        });
        try {
          const [v, w, J, F, L] = JSON.parse(localStorage.DanteSP22);
          Q.map((P, X) => P.g = P.i = P.j = X ? 0 | v[X] : 0);
          ac.map((P, X) => P.j = 0 | w[X]);
          Aa = J;
          a = F;
          Ka = L;
        } catch (v) {
        }
        Ja = 0 > Aa ? 0 : 1 < Aa ? 1 : Aa;
        h4.innerHTML = "";
        ta = 0;
        bc();
        Lb();
        NO_INLINE(Zb)();
        ia();
        G.x = ja = T.x;
        G.y = (ea = T.y) + 13;
        G.z = (fa = T.z) + -18;
        requestAnimationFrame(Ma);
      }
    },
    c = () => {
      if (5 > b) {
        var g = 0, n = b++;
        let [E, Z, da, V, W, A, aa, N, Y, K, ja, ea, fa, O, sa, ia, Ca, Ma, Ha, Nb, pb] = Pb[n];
        K = K * K * 4;
        for (const ma of [5513, 4562, 3891]) {
          let wa = 0, la = 0, za, gb, Da, v, w;
          const J = [],
            F = new Int32Array(768 * ma),
            L = 2 ** (ea - 9) / ma,
            P = Math.PI * 2 ** (Ca - 8) / ma,
            X = Ha * ma & -2;
          for (let ca = 0; 11 >= ca; ++ca) {
            for (
              let Na = 0, Eb = +"000001234556112341234556011111111112011111111112000001111112"[12 * n + ca];
              32 > Na;
              ++Na
            ) {
              const fb = (32 * ca + Na) * ma;
              for (var q = 0; 4 > q; ++q) {
                if (za = 0, Eb && (za = pb[Eb - 1].charCodeAt(Na + 32 * q) - 40, za += 0 < za ? 106 : 0), za) {
                  var t;
                  if (!(t = J[za])) {
                    t = za;
                    let M = void 0, I = void 0;
                    var B = za;
                    let R = 0, ka = 0;
                    const xa = 2 > n ? Sb : Qb, ya = 2 > n ? 1 > n ? Rb : Tb : Qb, va = new Int32Array(N + Y + K);
                    for (let ba = 0, Ga = 0; N + Y + K > ba; ++ba, ++Ga) {
                      let S = 1;
                      N > ba ? S = ba / N : N + Y > ba || (S = (1 - (S = (ba - N - Y) / K)) * 3 ** (-ja / 16 * S));
                      0 > Ga
                        || (Ga -= 4 * ma,
                          I = 0.003960 * 2 ** ((B + Z - 256) / 12),
                          M = 0.003960 * 2 ** ((B + W - 256) / 12) * (1 + (n ? 0 : 8e-4 * 9)));
                      va[ba] = 80
                          * (xa(R += I * S ** (da / 32)) * E + ya(ka += M * S ** (A / 32)) * V
                            + (aa ? (2 * Math.random() - 1) * aa : 0))
                          * S | 0;
                    }
                    t = J[t] = va;
                  }
                  for (let M = 0, I = 2 * fb; t.length > M; ++M, I += 2) {
                    F[I] += t[M];
                  }
                }
              }
              for (let M, I = 0; ma > I; ++I) {
                q = 0,
                  t = 2 * (fb + I),
                  ((M = F[t]) || w)
                  && (Da = 0.003080 * fa,
                    1 != n && 4 != n || (Da *= Math.sin(L * t * Math.PI * 2) * Nb / 512 + .5),
                    Da = 1.5 * Math.sin(Da),
                    wa += Da * la,
                    v = (1 - O / 255) * (M - la) - wa,
                    la += Da * v,
                    M = 4 == n ? la : 3 == n ? v : wa,
                    n || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5),
                    M *= sa / 32,
                    w = 1e-5 < M * M,
                    gb = Math.sin(P * t) * ia / 512 + .5,
                    q = M * (1 - gb),
                    M *= gb),
                  X > t || (q += F[t - X + 1] * Ma
                    / 255,
                    M += F[t - X] * Ma / 255),
                  pc[g + t] += F[t] = q,
                  ++t,
                  pc[g + t] += F[t] = M;
              }
            }
          }
          g += F.length;
        }
        setTimeout(c);
      } else {
        g = Wb.createBuffer(2, 5362944, 44100);
        for (n = 0; 2 > n; n++) {
          for (let E = n, Z = g.getChannelData(n); 10725888 > E; E += 2) {
            Z[E >> 1] = pc[E] / 65536;
          }
        }
        Vb.buffer = g;
        Vb.loop = !0;
      }
      h();
    },
    d = new Image();
  d.onload = d.onerror = () => {
    h();
  };
  d.src = qc;
  setTimeout(c, 50);
  NO_INLINE(kc)();
  Ua = D(() => {
    Ta = [-1, 1].map(n =>
      D(() => {
        C(r(10, 1), k.translate(.3 * n, -0.8).scale(.2, .7, .24), m(1, .3, .4));
      })
    );
    [0, 180].map(n => C(jc, k.rotate(0, n).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), m(1, 1, .8)));
    C(nb(20), k.translate(0, 1).scale(.5, .5, .5), m(1, .3, .4));
    const g = p(
      x(u(r(15, 1), p(r(y), k.translate(0, 0, 1).scale(2, 2, .5)))),
      k.rotate(-90, 0).scale(.1, .05, .1),
      m(.3, .3, .3),
    );
    [-1, 1].map(n => C(g, k.translate(.2 * n, 1.2, .4).rotate(0, 20 * n, 20 * n)));
    C(r(y), k.translate(0, .9, .45).scale(.15, .02, .06), m(.3, .3, .3));
    C(nb(20), k.scale(.7, .8, .55), m(1, .3, .4));
  });
});
