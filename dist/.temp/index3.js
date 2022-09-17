let fa = 0,
  ma = !0,
  na = 0,
  oa = 0,
  pa = 0,
  a = 0,
  qa = 0,
  sa = 0,
  za = 0,
  Aa = 0,
  Da = 0,
  Ea = 0,
  Ha = 0,
  Ia = 0,
  Ja = 0,
  e = .066,
  Ka,
  La,
  Ma,
  Na,
  Qa,
  Sa,
  Ta,
  Ua;
const Va = Math.PI / 180,
  h = new DOMMatrix(),
  Wa = (b, f) => f < b ? b : f,
  Xa = b => 0 > b ? -b : b,
  Ya = b => 0 > b ? 0 : 1 < b ? 1 : b,
  Za = (b, f) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > f ? 0 : 1 < f ? 1 : f)),
  $a = b => Math.atan2(Math.sin(b *= Va), Math.cos(b)) / Va,
  ab = (b, f, g) => {
    b *= Va;
    f = (f * Va - b) % (2 * Math.PI);
    return (b + (2 * f % (2 * Math.PI) - f) * (0 > g ? 0 : 1 < g ? 1 : g)) / Va;
  },
  bb = (b, f, g, c) => {
    var d = f - b;
    b += Math.sign(f - b) * Wa(0, (0 > d ? -d : d) ** .9 - g) * c * 2;
    return b + (f - b) * Ya(c / 7);
  },
  l = (b, f) => Array.from(Array(b), (g, c) => f(c)),
  cb = (b, f, g, c) => [b, 0, 0, 0, 0, f, 0, 0, 0, 0, (c + g) / (g - c), -1, 0, 0, 2 * c * g / (g - c), 0],
  db = ({ x: b, y: f, z: g }, c) => b * c.x + f * c.y + g * c.z,
  eb = ({ x: b, y: f, z: g }) => {
    var c = m;
    return Math.hypot(b - c.x, f - c.y, g - c.z) || 0;
  },
  fb = b => {
    let f = 0, g = 0, c = 0, d, k = b.at(-1);
    for (d of b) {
      f += (k.y - d.y) * (k.z + d.z), g += (k.z - d.z) * (k.x + d.x), c += (k.x - d.x) * (k.y + d.y), k = d;
    }
    return d = Math.hypot(f, g, c), f /= d, g /= d, c /= d, { x: f, y: g, z: c, w: f * k.x + g * k.y + c * k.z };
  },
  p = (b, f, g, c = 0) => 255 * c << 24 | 255 * g << 16 | 255 * f << 8 | 255 * b,
  gb = (b, f, g) => (b.B = g, b.u = f, b),
  jb = (b, f, g = b.u) =>
    gb(
      b.map(c =>
        ((
          { x: d, y: k, z: n },
          q,
        ) => ({ x: d, y: k, z: n } = q.transformPoint({ x: d, y: k, z: n }), { x: d, y: k, z: n }))(c, f)
      ),
      g,
      b.B,
    ),
  r = (b, f, g) => b.map(c => jb(c, f, g)),
  kb = (b, f = 0) =>
    l(b, g => {
      const c = Math.cos(2 * Math.PI * g / b);
      return { x: Math.sin(2 * Math.PI * g / b), y: 0, z: .01 > (0 > c ? -c : c) ? c : 0 > c ? c - f : c + f };
    }),
  lb = (b, f, g) =>
    b.map((c, d, { length: k }) => gb([c, f[k - d - 1], f[k - (d + 1) % k - 1], b[(d + 1) % k]], b.u, g)),
  u = (b, f, g = 0, c) => {
    c = b.length ? b : kb(b, c);
    b = jb(c, h.translate(0, 1).scale3d(0 < g ? g : 1));
    g = jb(c, h.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse();
    return [...lb(g, b, f), g, b];
  },
  mb = (
    b,
    f = b,
    g = (
      c,
      d,
    ) => (d *= Math.PI / f,
      { x: Math.cos(c *= 2 * Math.PI / b) * Math.sin(d), y: Math.cos(d), z: Math.sin(c) * Math.sin(d) }),
  ) => {
    const c = [];
    for (let d = 0; b > d; d++) {
      for (let k = 0; f > k; k++) {
        const n = gb([], 0, 1);
        c.push(n);
        n.push(g(d, k, n));
        k && n.push(g((d + 1) % b, k, n));
        f - 1 > k && n.push(g((d + 1) % b, k + 1 % f, n));
        n.push(g(d, k + 1 % f, n));
      }
    }
    return c;
  },
  nb = (b, f) => {
    var g, c, d, k = f.A;
    for (var n = 0; k.length > n; ++n) {
      if (-0.00008 > (d = db(b, k[n]) - b.w) ? c = f : 8e-5 < d && (g = f), c && g) {
        c = [];
        d = [];
        k = f.A;
        n = f.v;
        let q = k.at(-1), t = db(b, q) - b.w;
        for (const B of k) {
          g = db(b, B) - b.w,
            8e-5 > t && d.push(q),
            -0.00008 < t && c.push(q),
            (8e-5 < t && -0.00008 > g || -0.00008 > t && 8e-5 < g)
            && (t /= g - t,
              q = { x: q.x + (q.x - B.x) * t, y: q.y + (q.y - B.y) * t, z: q.z + (q.z - B.z) * t },
              c.push(q),
              d.push(q)),
            q = B,
            t = g;
        }
        return {
          o: 2 < c.length && { A: gb(c, k.u, k.B), v: n, j: f },
          m: 2 < d.length && { A: gb(d, k.u, k.B), v: n, j: f },
        };
      }
    }
    return { o: g, m: c };
  },
  ob = (b, f, g = fb(f.A)) => {
    if (b) {
      const { o: c, m: d } = nb(b, f);
      c || d || b.C.push(f);
      c && (b.o = ob(b.o, c, g));
      d && (b.m = ob(b.m, d, g));
    } else {
      b = { x: g.x, y: g.y, z: g.z, w: g.w, C: [f], o: 0, m: 0 };
    }
    return b;
  },
  pb = (b, f, g) => {
    const c = [],
      d = (k, n) => {
        let { o: q, m: t } = nb(k, n);
        q || t || (0 < g * db(k, f) ? q = n : t = n);
        q && (k.o ? d(k.o, q) : c.push(q));
        t && k.m && d(k.m, t);
      };
    for (const k of f.C) {
      d(b, k);
    }
    return c;
  },
  rb = (b, f) => b && (f(b), rb(b.o, f), rb(b.m, f)),
  sb = b => b.length ? b.reduce((f, g) => ob(f, { A: g, v: 0, j: 0 }), 0) : b,
  tb = b => (rb(b, f => {
    const g = f.m;
    f.m = f.o;
    f.o = g;
    f.x *= -1;
    f.y *= -1;
    f.z *= -1;
    f.w *= -1;
    for (const c of f.C) {
      c.v = !c.v;
    }
  }),
    b),
  ub = (...b) =>
    b.reduce((f, g) => {
      const c = [];
      if (f = sb(f), g) {
        g = sb(g);
        rb(f, d => d.C = pb(g, d, 1));
        rb(g, d => c.push([d, pb(f, d, -1)]));
        for (const [d, k] of c) {
          for (const n of k) {
            ob(f, n, d);
          }
        }
      }
      return f;
    }),
  x = (b, ...f) => tb(ub(tb(sb(b)), ...f)),
  y = b => {
    const f = new Map(),
      g = new Map(),
      c = d => {
        if (d.j) {
          const k = f.get(d.j);
          k ? (g.delete(k), d = c(d.j)) : f.set(d.j, d);
        }
        return d;
      };
    return rb(b, d => {
      for (const k of d.C) {
        g.set(c(k), k.v);
      }
    }),
      Array.from(g, ([{ A: d }, k]) => {
        const n = d.map(({ x: q, y: t, z: B }) => ({ x: q, y: t, z: B }));
        return gb(k ? n.reverse() : n, d.u, d.B);
      });
  },
  z = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  vb = [],
  C = (b, f) => {
    wb.push(wb.at(-1).multiply(b));
    b = f();
    return wb.pop(), b;
  },
  xb = [],
  yb = [],
  zb = [],
  Ab = [],
  Bb = [[]],
  Cb = new Map(),
  Db = new Int32Array(7),
  Ib = b => {
    let { x: f, y: g, z: c } = La[b];
    Gb[0] = f;
    Gb[1] = g;
    Gb[2] = c;
    b = "" + (La.B ? Hb : Db);
    let d = Cb.get(b);
    return void 0 !== d
      ? (f = 3 * d, zb[f] = (zb[f++] + Db[4]) / 2, zb[f] = (zb[f++] + Db[5]) / 2, zb[f] = (zb[f] + Db[6]) / 2)
      : (Cb.set(b, d = Cb.size), yb.push(f, g, c), zb.push(Db[4], Db[5], Db[6]), Ab.push(Db[3])),
      d;
  },
  E = (b, f = h, g) => Bb.at(-1).push(...r(b, wb.at(-1).multiply(f), g)),
  Jb = () => {
    var b = Bb.at(-1);
    for (La of b) {
      const { x: f, y: g, z: c } = fb(La);
      Db[3] = 0 | La.u;
      Db[4] = 32767 * f;
      Db[5] = 32767 * g;
      Db[6] = 32767 * c;
      for (let d = 2, k = Ib(0), n = Ib(1); La.length > d; ++d) {
        xb.push(k, n, n = Ib(d));
      }
    }
    b.length = 0;
    b = fa;
    return { K: b, J: (fa = xb.length) - b };
  },
  F = b => {
    const f = Ka, g = { F: wb.at(-1), s: h, H: vb.length + 1, G: 1, j: f === vb[0] ? void 0 : f };
    b = (Ka = g, vb.push(g), wb.push(h), Bb.push([]), b(g) || Jb());
    return g.D = b, wb.pop(), Bb.pop(), Ka = f, g;
  },
  Kb = () => {
    for (const f of vb) {
      var b = f.h;
      (f.s = f.j ? f.j.s.multiply(f.F) : f.F, b) && (b = b(f)) && (f.s = f.s.multiply(b));
    }
  };
var Lb = -11, Mb = 17, Nb = -90, Pb = 0, Qb = 0;
const Rb = [[
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
  Sb = b => Math.sin(b * Math.PI * 2),
  Tb = b => .5 > b % 1 ? 1 : -1,
  Ub = b => b % 1 * 2 - 1,
  Vb = b => {
    b = b % 1 * 4;
    return 2 > b ? b - 1 : 3 - b;
  },
  Wb = [],
  Zb = () => {
    Ma || !ma ? Xb.disconnect() : Xb.connect(Yb.destination);
    b4.innerHTML = "Music: " + ma;
  },
  $b = (b = !1) => {
    if (Ma !== b) {
      Ma = b;
      Na = 0;
      try {
        b ? document.exitPointerLock() : Xb.start();
      } catch {
      }
      document.body.className = b ? "l m" : "l";
      Zb();
    }
  },
  ac = () => {
    let b = 0, f = 0, g = 0, c, d, k;
    const n = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      Wb.length = na = oa = 0;
      c = d = void 0;
      document.hidden && $b(!0);
    };
    b1.onclick = () => $b();
    b2.onclick = () => {
      $b();
      Na = 1;
    };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b4.onclick = () => {
      ma = !ma;
      Zb();
    };
    b5.onclick = () => $b(!0);
    onclick = () => {
      k = 1;
      Ma || (Wb[5] = !0, Na && hC.requestPointerLock());
    };
    document.onvisibilitychange = onresize = onblur = n;
    onkeydown = onkeyup = ({ code: q, target: t, type: B, repeat: H }) => {
      H || ((t = !!B[5] && t === document.body) && ("Escape" === q || "Enter" === q && Ma)
        ? Ma && !k || $b(!Ma)
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
          5 === q ? t && (Wb[q] = 1) : Wb[q] = t));
    };
    onmousemove = ({ movementX: q, movementY: t }) => {
      Na && (q || t) && (Qb += .1 * q, Pb += .1 * t);
    };
    hC.ontouchstart = q => {
      if (!Ma) {
        for (const t of q.changedTouches) {
          Na && t.pageX > hC.clientWidth / 2 ? c || (c = t, b = Qb, f = Pb) : d = d || t;
        }
        g = pa;
      }
    };
    hC.ontouchmove = ({ changedTouches: q }) => {
      if (!Ma) {
        for (const { pageX: t, pageY: B, identifier: H } of q) {
          c?.identifier === H && (Qb = b + (t - c.pageX) / 3, Pb = f + (B - c.pageY) / 3),
            d?.identifier === H
            && (na = -(t - d.pageX) / 18,
              oa = -(B - d.pageY) / 18,
              na = .35 > (0 > na ? -na : na) ? 0 : .8 * na,
              oa = .35 > (0 > oa ? -oa : oa) ? 0 : .8 * oa);
        }
      }
    };
    hC.ontouchend = q => {
      for (const t of q.changedTouches) {
        t.identifier === c?.identifier && (c = void 0), t.identifier === d?.identifier && (d = void 0, oa = na = 0);
      }
      q.preventDefault();
      q = pa - g;
      (!g || .02 < q && .4 > q) && (Wb[5] = !0);
    };
    oncontextmenu = () => !1;
    n();
    $b(!0);
  },
  P = (b, f, g) => b + (f - b) * Ya(1 - Math.exp(-g * e)),
  bc = ({ l: b }) => b,
  S = [],
  cc = [],
  dc = () => {
    qa = cc.reduce((b, f) => b + f.l, 0);
    h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[qa];
  },
  ec = () => {
    dc();
    localStorage.DanteSP22 = JSON.stringify([S.map(bc), cc.map(bc), za, a, Ja]);
  },
  m = { x: 0, y: 0, z: 0 },
  gc = b => {
    C(b, () => {
      F(f => {
        const g = { l: 0, g: 0, i: 0, j: f.j }, c = S.push(g) - 1;
        f.h = () => {
          const d = g.l, k = g.g, n = g.i, q = (g.I = f.s).transformPoint();
          2.9 > eb(q) && Wb[5] && (.3 > k || .7 < k)
            && (g.l = d ? 0 : 1, c && (Ha || (h4.innerHTML = "* click *", sa = a + 1)), za = c, ec());
          return g.g = P(k, d, 4),
            g.i = P(n, d, 1),
            f.D = fc[.5 < k ? 1 : 0],
            h.rotate(60 * g.g - 30, 0).translateSelf(0, 1);
        };
      });
      E(u(5), h.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
      E(u(5), h.translate(.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
      E(u(z), h.translate(0, -0.4).scale(.5, .1, .5), p(.5, .5, .4));
    });
  },
  hc = b =>
    h.translate(Math.sin(a + 2) / 5, Math.sin(.8 * a) / 3, b).rotateSelf(
      2 * Math.sin(a),
      Math.sin(.7 * a),
      Math.sin(.9 * a),
    ),
  jc = (b, ...f) => {
    C(b, () => {
      let g = -1, c = 0, d = 1, k = 0, n = 0, q = 3, t = 0, B = 0;
      const H = { l: 0 }, X = f.map(([ca, J, ha]) => ({ x: ca, z: J, w: ha }));
      let ba = X[0], { x: U, z: V } = ba, A = U, Y = V;
      const M = cc.push(H) - 1;
      F(ca => (ca.h = () => {
        if (!H.l) {
          var J = 1;
          var ha = 1 / 0;
          for (var da of X) {
            var ea = da.w, N = Math.hypot(U - da.x, V - da.z), ra = N - ea;
            ia ||= N < ea;
            0 < ra && ha > ra && (ha = ra, ba = da);
            ea = N / ea;
            J = J < ea ? J : ea;
          }
          if (!ia) {
            da = ba.x;
            ha = ba.z;
            ea = ba.w;
            N = U - da;
            ra = V - ha;
            let Ba = Math.hypot(N, ra), Oa = Math.atan2(-ra, N);
            d && (k = (Math.random() - .5) * Math.PI / 2, q = Wa(1, q / (1 + Math.random())));
            Oa += k;
            g = -Math.cos(Oa);
            c = Math.sin(Oa);
            .1 < Ba && (Ba = (Ba < ea ? Ba : ea) / (Ba || 1), U = N * Ba + da, V = ra * Ba + ha);
          }
          d = ia;
          q = P(q, 3 + 6 * (1 - J), 3 + J);
          U = P(U, U + g, q);
          V = P(V, V + c, q);
          A = P(A, U, q);
          Y = P(Y, V, q);
          n = ab(n, Math.atan2(A - t, Y - B) / Va - 180, 3 * e);
          t = A;
          B = Y;
          J = h.translate(A, 0, Y).rotateSelf(0, n).skewXSelf(7 * Math.sin(2 * a)).skewYSelf(7 * Math.sin(1.4 * a));
          var ia = ca.s.multiply(J).transformPoint();
          1.5 > eb(ia)
            && (H.l = 1,
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
              ][qa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
              da = qa && 12 > qa ? 5 : 7,
              Ha || (h4.innerHTML = ia, sa = a + da),
              ec());
        }
        H.l
          && (ca.j = Ua,
            ca.F = h,
            ia = M % 4 - 2,
            J = h.translate(
              M % 4 * 1.2 - 1.7 + Math.sin(a + M) / 6,
              -2,
              1.7 * (M / 4 | 0) - 5.5 + (0 > ia ? -ia : ia) + Math.cos(a / 1.5 + M) / 6,
            ));
        return J;
      },
        ic)
      );
    });
  },
  mc = () => {
    F(() => {
      Ua = C(h.translate(-12, 4.2, -66), () =>
        F(g => {
          g.h = () => hc(40 * Ia);
          gc(h.translate(0, -3, 4));
          E(kc);
        }));
      const b = y(
          x(
            r(u(z), h.translate(0, -8).scale(6, 15, 2.2)),
            r(u(z), h.translate(0, -14.1).scale(4, 13, 4)),
            r(u(20, 1), h.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
          ),
        ),
        f = (l(7, g => E(u(6, 1), h.translate(4 * (g / 6 - .5), 3).scale(.2, 3, .2), p(.3, .3, .38))), Jb());
      E(u(z), h.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), p(.8, .8, .8, .2));
      jc(h.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
      jc(
        h.translate(0, 2.8),
        [5, 10, 3],
        [-5, 10, 3],
        ...kb(18).map(({ x: g, z: c }) => [7 * g, 10 * c, 4.5 - 2 * (0 > g ? -g : g)]),
      );
      z.map(({ x: g, z: c }) => E(u(6), h.translate(3 * g, 3, 15 * c).scale(.7, 4, .7), p(.6, .3, .3, .4)));
      [-23, 22].map(g => E(u(z), h.translate(0, 0, g).scale(3, 1, 8), p(.9, .9, .9, .2)));
      [-15, 15].map((g, c) => {
        E(u(z), h.translate(0, 6.3, g).scale(4, .3, 1), p(.3, .3, .3, .4));
        E(u(z), h.translate(0, 1, g).scale(3, .2, .35), p(.5, .5, .5, .3));
        C(h.translate(0, 0, g), () => F(d => (d.h = () => h.translate(0, 4.7 * -S[c + 1].g), f)));
      });
      l(
        5,
        g =>
          l(2, c =>
            E(
              lc,
              h.translate(18.5 * (c - .5), 0, 4.8 * g - 9.5).rotate(0, 180 - 180 * c).scale(1.2, 10, 1.2),
              p(1, 1, .8, .2),
            )),
      );
      E(u(z), h.translate(3, 1.5, -20).scale(.5, 2, 5), p(.7, .7, .7, .2));
      E(u(z), h.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), p(.75, .75, .75, .2));
      E(u(5), h.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), p(.6, .3, .3, .4));
      gc(h.translate(-5.4, 1.5, -19).rotate(0, -90));
      E(u(z), h.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), p(.8, .2, .2, .5));
      E(y(
        x(
          ub(
            r(u(6, 0, 0, .3), h.translate(8, -3, -4).scale(13, 1, 13), p(.7, .7, .7, .2)),
            r(u(6), h.translate(0, -8).scale(9, 8, 8), p(.4, .2, .5, .5)),
            r(u(6, 0, 0, .3), h.translate(0, -0.92).scale(13, 2, 13), p(.8, .8, .8, .2)),
          ),
          r(u(5), h.scale(5, 30, 5), p(.4, .2, .6, .5)),
          r(u(5, 0, 1.5), h.translate(0, 1).scale(4.5, .3, 4.5), p(.7, .5, .9, .2)),
          r(u(z), h.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), p(.5, .5, .5, .5)),
          r(u(6), h.translate(15, -1.5, 4).scale(3.5, 1, 3.5), p(.5, .5, .5, .5)),
        ),
      ));
      F(g => {
        gc(h.translate(0, 1.2));
        g.h = () =>
          h.translate(
            0,
            .01 < S[3].g ? (5 * Math.cos(1.5 * a) + 2) * S[3].i * (1 - S[2].g) + -15 * (1 - S[3].g) : -500,
            0,
          );
        E(u(5), h.translate(0, -0.2).scale(5, 1, 5), p(.6, .65, .7, .3));
      });
      gc(h.translate(15, -2, 4));
      C(h.translate(0, 0, 75), () => {
        const g = () => {
            var k = S[2].i, n = 1 - S[4].i;
            return k < n ? k : n;
          },
          c = (k, n) =>
            F(q => {
              q.h = () => h.translate(g() * Math.sin(3 * k + a * k) * n);
              z.map(({ x: t, z: B }) => {
                E(u(11, 1), h.translate(4 * t, 4, 4 * B - 40).scale(.8, 3, .8), p(.5, .3, .7, .6));
                E(u(z), h.translate(4 * t, 7, 4 * B - 40).scale(1, .3), p(.5, .5, .5, .3));
              });
              E(y(x(
                r(u(z), h.translate(0, 0, -40).scale(5, 1, 5), p(.8, .8, .8, .3)),
                ...[-1, 1].map(t =>
                  r(u(z), h.translate(5 * t, .2, -40).rotate(0, 0, -30 * t).scale(4, 1, 2), p(.8, .8, .8, .3))
                ),
              )));
              E(u(z), h.translate(0, -3, -40).scale(8, 2, 8), p(.4, .4, .4, .3));
            }),
          d = (c(.7, 12),
            C(h.translate(0, 0, 20), () => c(1, 8.2)),
            F(k => {
              C(h.translate(0, 0, -30), () => {
                k.h = () => h.translate(g() * Math.sin(a / 1.5 + 2) * 12);
                E(y(
                  x(
                    ub(
                      r(u(z), h.scale(1.5, 1, 5), p(.9, .9, .9, .2)),
                      r(u(6), h.scale(4, 1, 5), p(.9, .9, .9, .2)),
                      r(u(z), h.translate(0, -2).scale(2, 3.2, 1.9), p(.3, .8, .5, .5)),
                      r(u(16, 1, 0, 4), h.scale(1, 1, 1.5).rotate(0, 90), p(.9, .9, .9, .2)),
                    ),
                    r(u(z), h.scale(1.3, 10, 1.3), p(.2, .7, .4, .6)),
                  ),
                ));
                jc(h.translate(0, 2.8), [0, 0, 4.5]);
              });
            }),
            F(k => {
              k.h = () => h.translate(9.8 * (1 - g()));
              E(u(3), h.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), p(.3, .6, .6, .2));
              E(u(8), h.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), p(.8, .8, .8, .2));
              E(u(z), h.translate(-23, -3, -20).scale(5.2, 1.7, 3), p(.5, .5, .5, .3));
              E(u(z), h.translate(-23, -2.2, -13).scale(3, 1, 4), p(.5, .5, .5, .3));
              gc(h.translate(-23, -0.5, -8.5));
            }),
            E(u(z), h.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), p(.9, .9, .9, .2)),
            F(k => {
              k.h = () => h.translate(0, Ya(1 - 5 * g()) * Za(S[4].g, S[5].g) * Math.sin(1.35 * a) * 4);
              E(u(z), h.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), p(.7, .7, .7, .2));
              E(
                y(x(r(u(z), h.scale(3, 1.4, 2.7)), r(u(z), h.scale(1.2, 8, 1.2)))),
                h.translate(-33, -3, -20),
                p(.7, .7, .7, .2),
              );
            }),
            F(k => {
              k.h = () => h.translate(0, 0, Ya(1 - 5 * g()) * Za(S[4].g, S[5].g) * Math.sin(.9 * a) * 8);
              E(y(
                x(
                  r(u(z), h.translate(-27, -3, -20).scale(3, 1.4, 2.7), p(.9, .9, .9, .2)),
                  r(u(z), h.translate(-27, -3, -20).scale(1, 3), p(.9, .9, .9, .2)),
                ),
              ));
              E(u(z), h.translate(-39, -3, -20).scale(3, 1.4, 2.7), p(.9, .9, .9, .2));
            }),
            C(h.translate(-44.5, 0, -20), () =>
              F(k => {
                k.h = () => h.translate(0, -6.5 * S[4].i);
                E(u(6), h.rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), p(.7, .7, .7, .4));
              })),
            [...r(
              y(ub(
                r(u(z), h.translate(0, -3).scale(11, 1.4, 3), p(.9, .9, .9, .2)),
                x(
                  r(u(6), h.rotate(0, 0, 90).scale(6, 8, 6), p(.3, .6, .6, .3)),
                  r(u(4, 0, .01), h.translate(0, 6).scale(12, 2, .75).rotate(0, 45), p(.3, .6, .6, .3)),
                  r(u(6), h.rotate(0, 0, 90).scale(5, 12, 5), p(.3, .6, .6, .3)),
                  ...[5, 0, -5].map(k =>
                    r(u(5), h.translate(k, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), p(.3, .6, .6, .3))
                  ),
                ),
              )),
              h,
            )]);
        E(d, h.translate(-53, 0, -20));
        E(u(6), h.translate(-61.3, -2.4, -26).scale(3, 1, 5), p(.4, .6, .6, .3));
        E(u(7), h.translate(-57, -2.6, -29).scale(4, 1, 4), p(.8, .8, .8, .3));
        gc(h.translate(-55, -1.1, -29).rotate(0, 90));
        C(h.translate(-75, 0, -20), () =>
          F(k => {
            k.G = 0;
            k.h = () => h.translate(0, (1 - S[5].i) * (1 - S[6].g) * 3).rotate(180 * (1 - S[5].i) + Ea, 0);
            E(d);
          }));
        E(u(z), h.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), p(.7, .7, .7, .2));
        E(u(3, 0, -0.5), h.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), p(.8, .8, .8, .2));
        jc(h.translate(-100, .2, -20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
        E(
          y(x(
            ub(
              r(u(z), h.translate(-100, -2.5, -20).scale(8, 1, 8), p(.8, .8, .8, .2)),
              r(u(z), h.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), p(.8, .8, .8, .2)),
              r(u(z), h.translate(-100, -2.6, -5).scale(3, 1.1, 7), p(.8, .8, .8, .2)),
              r(u(z), h.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), p(.8, .8, .8, .2)),
              r(u(6), h.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), p(.6, .6, .6, .3)),
              r(u(z), h.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), p(.8, .8, .8, .2)),
              r(u(z), h.translate(-100, .42, 17).scale(3, 1.1, 4.1), p(.8, .8, .8, .2)),
            ),
            r(u(8), h.translate(-100, -1, -20).scale(7, .9, 7), p(.3, .3, .3, .4)),
            r(u(8), h.translate(-100, -2, -20).scale(4, .3, 4), p(.4, .4, .4, .5)),
            r(u(8), h.translate(-100, -3, -20).scale(.6, 1, .6), p(.4, .4, .4, .5)),
          )),
          h,
        );
        E(y(
          x(
            r(u(z), h.translate(-100, 1, -12).scale(7.5, 4), p(.5, .5, .5, .4)),
            r(u(z), h.translate(-100, 0, -5).scale(2, 2, 10), p(.5, .5, .5, .4)),
            r(u(20, 1), h.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), p(.5, .5, .5, .4)),
          ),
        ));
        jc(h.translate(-89, .2, 5), [0, 0, 6]);
        C(h.translate(-99.7, -2, -11.5), () => F(k => (k.h = () => h.translate(0, 5.3 * -S[6].g), f)));
        z.map(({ x: k, z: n }) => {
          E(u(6), h.translate(7 * k - 100, -3, 7 * n - 20).scale(1, 8.1), p(.6, .15, .15, .8));
          [4, -0.4].map(q => E(u(6), h.translate(7 * k - 100, q, 7 * n - 20).scale(1.3, .5, 1.3), p(.4, .2, .2, .8)));
        });
        l(7, k => {
          E(
            u((23 * k + 1) % 5 + 5, 0, .55),
            h.translate(5 * Math.sin(k) - 101 + k, -2.3 - k, -30.1 - 2.8 * k).scaleSelf(
              5 + k / 2,
              1 + k / 6,
              5 + k / 3,
            ),
            p(.5 - k / 17, .5 - (1 & k) / 9, .6, .3),
          );
        });
        E(u(z), h.translate(-87, -9.5, -51).scale(7, 1, 3), p(.4, .5, .6, .4));
        E(u(4), h.translate(-86, -9.2, -48).scale(5, 1, 5), p(.5, .6, .7, .3));
        E(u(18, 1), h.translate(-86, -9, -44).scale(1.5, 1, 1.5), p(.3, .3, .4, .1));
        gc(h.translate(-86, -7.5, -44));
        C(h.translate(-76.9, -10, -51), () => {
          F(k => {
            k.h = () => h.translate(0, 3.5 * (1 - Wa(S[6].g, S[7].g)) + Za(S[7].i, S[6].i) * Math.sin(a) * 5);
            [0, 12, 24].map(n => E(u(z), h.translate(n, n / -13).scale(2.8, 1.5, 3), p(.2, .5, .6, .2)));
          });
          F(k => {
            k.h = () => {
              const n = Za(S[7].i, S[6].i);
              return h.translate(0, n * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + n) * n);
            };
            [6, 18].map(n => E(u(z), h.translate(n, n / -13).scale(2.8, 1.5, 3), p(.1, .4, .5, .2)));
          });
        });
        C(h.translate(-38.9, -11.3, -58), () => {
          E(y(
            x(
              ub(
                r(u(z), h.scale(11, 1, 13), p(.3, .4, .6, .3)),
                r(u(5), h.translate(0, 0, -7).scale(2, 1.2, 2), p(.2, .4, .7, .3)),
                r(u(5), h.scale(9, 1.2, 9), p(0, .2, .3, .5)),
              ),
              r(u(5), h.scale(5.4, 5, 5.4), p(0, .2, .3, .5)),
            ),
          ));
          gc(h.translate(0, 1.7, -7));
          F(k => {
            k.h = () => h.translate(0, -7.3 * S[7].i);
            jc(h.translate(0, 11).rotate(0, 0, 10), ...kb(15).map(({ x: n, z: q }) => [3 * n, 3 * q, 1.5]));
            E(y(
              x(
                ub(
                  r(u(5), h.translate(0, 2).scale(5, 7, 5).skewY(8), p(.2, .4, .5, .5)),
                  r(u(5), h.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), p(.25, .35, .5, .5)),
                  r(u(5), h.translate(0, 9).scale(.6, 7, .6).skewY(8), p(.35, .3, .5, .5)),
                ),
                r(u(5), h.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), p(.2, .4, .5, .5)),
              ),
            ));
          });
          z.map(({ x: k, z: n }) => {
            E(u(18, 1), h.translate(9 * k, 4, 11 * n).scale(1, 4), p(.25, .25, .25, 1));
            [1.5, 8].map(q => E(u(18, 1), h.translate(9 * k, q, 11 * n).scale(1.5, .5, 1.5), p(.6, .6, .6, .3)));
          });
          E(y(
            x(
              ub(
                r(u(6), h.translate(0, 0, -36).scale(15, 1.2, 15), p(.7, .7, .7, .3)),
                r(u(z), h.translate(0, 0, -18).scale(4, 1.2, 6), p(.45, .4, .6, .3)),
              ),
              ...l(6, k =>
                l(6, n =>
                  r(
                    u(6),
                    h.translate(4.6 * n - 12 + 2 * (1 & k), 0, 4.6 * k - 50 + 2 * Math.sin(4 * n)).scale(2, 5, 2),
                    p(.7, .7, .7, .3),
                  ))).flat(),
            ),
          ));
          jc(h.translate(0, 2.9, -38), [0, 0, 12]);
        });
        E(u(5), h.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), p(.8, .1, .25, .4));
        gc(h.translate(-84, -0.5, 10).rotate(0, 45));
      });
      C(h.translate(-123, 1.4, 55), () => {
        F(g => {
          g.h = () => hc(-65 * Ja);
          gc(h.translate(0, -3, -4).rotate(0, 180));
          E(kc);
        });
      });
      C(h.translate(-123, 0, -12), () => {
        const g = y(
          x(
            r(u(z), h.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), p(.25, .25, .35, .3)),
            r(u(3), h.translate(0, 0, -5.5).scale(3, 2), p(.6, .3, .4, .3)),
            ...[-1.2, 1.2].map(c => r(u(z), h.translate(c, -0.5, 1).scale(.14, .3, 6.5), p(.7, .2, 0, .3))),
          ),
        );
        E(u(z), h.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), p(.8, .8, .8, .2));
        E(u(6), h.translate(7, -2.6, -4.5).scale(3.2, .8, 3), p(.6, .5, .7, .2));
        gc(h.translate(7, -1.4, -6).rotate(0, 180));
        jc(h.translate(8, .2), [0, 0, 3.5]);
        l(3, c => E(b, h.translate(12 * c + 14, -9), p(.6, .6, .6, .3)));
        l(3, c => E(b, h.translate(46, -9, -12 * c - 8).rotate(0, 90), p(.6, .6, .6, .3)));
        E(y(
          x(
            r(u(12), h.translate(46, -13.9).scale(4, 18.2, 4), p(.7, .7, .7, .2)),
            r(u(z), h.translate(44).scale(3.5, 2.2, 1.3), p(.4, .5, .6, .2)),
            r(u(z), h.translate(46, 0, -2).scale(1.5, 2.2, 2), p(.4, .5, .6, .2)),
            r(u(12), h.translate(46, 2.8).scale(3, 5, 3), p(.4, .5, .6, .2)),
          ),
        ));
        E(u(z), h.translate(7.5, -17).scale(.5, 15, 2.2), p(.6, .6, .6, .3));
        E(u(z), h.translate(46, -17, -38.5).scale(2.2, 15, .5), p(.6, .6, .6, .3));
        E(
          y(x(
            ub(
              r(u(z), h.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
              r(u(z), h.translate(26.5, -0.6, 10).scale(17, 2, .5)),
            ),
            ...l(4, c => r(u(z), h.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9))),
            ...l(3, c => r(u(z), h.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9))),
          )),
          h,
          p(.5, .5, .6, .2),
        );
        E(u(5), h.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), p(.25, .25, .35, 1));
        F(c => {
          c.h = () => {
            var d = Math.sin(1.1 * a);
            return h.translate.call(h, 0, -2, Za(S[10].g, S[11].g) * (0 > d ? -d : d) * -8.5 + 10);
          };
          l(2, d => E(g, h.translate(13 + 9 * d + (1 & d), 1.7)));
        });
        F(c => {
          c.h = () => {
            var d = Math.sin(2.1 * a);
            return h.translate.call(h, 0, -2, Za(S[10].g, S[11].g) * (0 > d ? -d : d) * -8.5 + 10);
          };
          l(2, d => E(g, h.translate(13 + 9 * (d + 2) + (1 & d), 1.7)));
        });
        F(c => {
          c.h = () => {
            var d = Math.sin(1.5 * a);
            return h.translate.call(
              h,
              0,
              -2,
              -8.5 * Wa((1 - S[10].g) * (1 - Za(S[10].g, S[11].g)), Za(S[10].g, S[11].g) * (0 > d ? -d : d)) + 10,
            );
          };
          l(3, d => E(g, h.translate(17 + 9 * d, 1.7)));
        });
        E(u(z), h.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), p(.6, .6, .6, .3));
        E(y(
          x(
            r(u(z), h.translate(30, -5.8, -28).scale(9, 1, 5), p(.8, .8, .8, .1)),
            r(u(9), h.translate(25, -5.8, -28).scale(3, 8, 3), p(.7, .7, .7, .2)),
          ),
        ));
        jc(h.translate(30, -3, -28).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);
        E(u(9), h.translate(25, -5.8, -28).scale(2.5, .9, 2.5), p(.5, .5, .5, .3));
        gc(h.translate(25, -4.4, -28).rotate(0, 90));
      });
      C(h.translate(-100, .7, 115), () => {
        const g = (E(
          y(x(
            ub(
              r(u(6, 0, 0, .6), h.translate(0, 0, -9.5).scale(8, 1, 11), p(.7, .7, .7, .2)),
              r(u(z), h.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), p(.7, .7, .7, .2)),
              r(u(z), h.translate(8.8, 0, -8).scale(3, 1, 3.3), p(.7, .7, .7, .2)),
            ),
            r(u(5), h.translate(0, 0, -2).scale(4, 3, 4), p(.7, .7, .7, .2)),
          )),
        ),
          l(4, c =>
            F(d => {
              d.h = () => {
                const k = Za(S[8].i, S[12].i);
                return h.translate(
                  2 < c ? 2 * (1 - k) + k : 0,
                  k * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3),
                  (1 & c ? -1 : 1) * (1 - S[8].i) * (1 - S[12].i) * -7
                    + (.05 > k ? .05 : k) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),
                );
              };
              E(
                u(6),
                h.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5),
                p(.5 - c / 8, c / 12 + .5, .7, .3),
              );
            })),
          C(h.translate(-39.7, -2.5, -21.5), () => {
            F(c => {
              c.h = () => {
                const d = Za(S[8].i, S[12].i);
                return h.translate(2.5 * (1 - d), -3 * (1 - S[8].g) + d * Math.sin(.8 * a) * -1).rotateSelf(
                  Math.cos(1.3 * a) * (3 * d + 3),
                  0,
                );
              };
              E(y(
                x(r(u(10), h.scale(6, 2, 6), p(.1, .6, .5, .3)), r(u(10), h.scale(3.3, 6, 3.3), p(.1, .6, .5, .5))),
              ));
              C(h.translate(-7.5).rotate(0, 90), () => {
                E(u(15), h.scale(3, 2.3, 3), p(.4, .4, .4, .3));
                E(u(10), h.scale(2, 2.5, 2), p(.3, .8, .7, .3));
                E(u(5), h.scale(1, 3), p(.5, .5, .5, .5));
                gc(h.translate(0, 3.4).rotate(0, 180));
              });
              jc(h.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
              [-1, 1].map(d =>
                E(
                  lc,
                  h.rotate(90 * -d, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3),
                  p(1, 1, .8, .2),
                )
              );
            });
          }),
          [-1, 1].map(c => {
            E(u(15, 1), h.translate(-7.5 * c, 3, -19).scale(.8, 4, .8), p(.6, .24, .2, .5));
            [7.2, 1.5].map(d => E(u(15, 1), h.translate(-7.5 * c, d, -19).scale(1.1, .5, 1.1), p(.5, .24, .2, .4)));
            E(lc, h.translate(-5 * c, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), p(1, 1, .8));
            E(
              y(x(
                r(u(z), h.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), p(.5, .5, .5, .4)),
                r(u(z), h.scale(3, 3, 10), p(.6, .24, .2, .5)),
                r(u(30, 1), h.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), p(.6, .24, .2, .5)),
                r(u(5), h.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), p(.6, .24, .2, .5)),
                r(u(5), h.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), p(.6, .24, .2, .5)),
              )),
              h.translate(c, 0, -18),
            );
          }),
          F(c => (c.h = () => h.translate(0, -0.1 - 6 * S[12].g, -18.5).scale(.88, 1.2), f)),
          [
            ...r(u(28, 1), h.scale(8, 1, 8), p(.45, .45, .45, .2)),
            ...r(u(5), h.translate(0, 1).scale(1, .2), p(.3, .3, .3, .2)),
          ]);
        C(h.translate(20, .3, -9), () => {
          F(c => {
            c.h = () => h.rotate(0, 40 + Aa);
            E(y(
              x(
                r(u(28, 1), h.scale(8, 1, 8), p(.45, .45, .45, .2)),
                r(u(z), h.translate(0, 0, -5.5).scale(1.5, 3, 2.5), p(.45, .45, .45, .2)),
              ),
            ));
            E(u(8), h.translate(0, 2).scale(3, 1.5, 3), p(.7, .7, .7, .1));
            E(u(5), h.translate(0, 2).scale(1, 2), p(.3, .3, .3, .2));
            jc(h.translate(0, 3), ...kb(10).map(({ x: d, z: k }) => [5.6 * d, 5.6 * k, 2.5]));
          });
        });
        C(h.translate(36, .3, -9), () => {
          E(u(z), h.translate(8).scale(.7, .8, 2.5), p(.7, .7, .7, .2));
          F(c => {
            c.h = () => h.rotate(0, Da);
            E(y(
              x(
                r(u(28, 1), h.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
                r(u(z), h.scale(9, 5, 2), p(.3, 0, 0, .3)),
              ),
            ));
            E(g);
            [-1, 1].map(d =>
              E(lc, h.rotate(0, 90).translate(-5 * d, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * d + 90), p(1, 1, .8))
            );
          });
        });
        C(h.translate(52, .3, -9), () => {
          E(u(z), h.translate(0, 0, -8).scale(2.5, .8, .7), p(.7, .7, .7, .2));
          F(c => {
            c.h = () => h.rotate(0, 180 - Da);
            E(y(
              x(
                r(u(30, 1), h.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
                r(u(z), h.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)),
                r(u(z), h.translate(0, 0, 7).scale(2, 5, 9), p(.3, 0, 0, .3)),
              ),
            ));
            E(g);
          });
        });
        C(h.translate(52, .3, -25), () => {
          F(c => {
            c.h = () => h.rotate(0, 270 + Da);
            E(y(
              x(
                r(u(30, 1), h.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)),
                r(u(z), h.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)),
                r(u(z), h.translate(0, 0, -7).scale(2, 5, 9), p(.3, 0, 0, .3)),
              ),
            ));
            E(g);
          });
        });
        E(u(z), h.translate(61, -0.3, -25).scale(2, 1, 2), p(.7, .7, .7, .3));
        E(u(z), h.translate(68, -0.3, -25).scale(5, 1, 3), p(.7, .7, .7, .3));
        gc(h.translate(66, 2, -19).rotate(-12, 0));
        E(u(5), h.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), p(.2, .5, .5, .6));
        [p(.1, .55, .45, .2), p(.2, .5, .5, .3), p(.3, .45, .55, .4)].map((c, d) =>
          F(k => {
            k.h = () =>
              h.translate(
                0,
                (1 - S[13].i) * (1 - S[14].i) * 3 + Za(S[13].i, S[14].i) * Math.sin(1.5 * a + 1.5 * d) * 4,
              );
            E(u(z), h.translate(76.5, d / 2 - 2.1, 7.5 * (1 - d / 30) * d - 25).scale(3.3, 3 - d / 2, 3.45 - d / 5), c);
          })
        );
        C(h.translate(100, .2, -20), () => {
          E(u(z), h.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), p(.6, .6, .6, .2));
          E(y(
            x(
              r(u(6, 0, 0, .3), h.translate(0, -0.92).scale(14, 2, 14), p(.8, .8, .8, .2)),
              r(u(5), h.scale3d(6), p(.3, .3, .3, .5)),
            ),
          ));
          [8, -6.1].map((c, d) =>
            l(3, k =>
              E(
                b,
                h.translate(6 * k - 6, c - (1 & k), 16 - .2 * (1 & k) - d),
                1 & k ? p(.5, .5, .5, .3) : p(.35, .35, .35, .5),
              ))
          );
          [-1, 1].map(c => E(lc, h.translate(-8 * c, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), p(1, 1, .8)));
          E(u(5), h.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), p(.5, .3, .3, .4));
          gc(h.translate(0, 1.7, -13).rotate(0, 180));
          jc(h.translate(0, 3), ...kb(9).map(({ x: c, z: d }) => [9 * c, 9 * d, 4]));
          E(y(
            x(
              ub(
                r(u(z), h.translate(0, 16, 15.5).scale(12, 1, 3), p(.5, .3, .3, .4)),
                r(u(z), h.translate(0, 16, 16).scale(3, 1, 3.8), p(.5, .3, .3, .4)),
              ),
              r(u(5), h.translate(0, 16, 8.5).scale(5.5, 5, 5.5), p(.5, .3, .3, .4)),
            ),
          ));
          F(c => {
            c.h = () => {
              const d = Math.sin(a);
              return h.translate(-2 * d).rotate(0, 0, 25 * d);
            };
            E(u(3), h.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), p(.5, .3, .3, .4));
            [22, 30].map(d => {
              E(u(6), h.translate(0, 16, d).scale(3, 1, 2.3).rotate(0, 90), p(.7, .7, .7, .4));
              E(u(z), h.translate(0, 6.2, d).scale(.5, 11, .5), p(.5, .3, .3, .4));
            });
          });
          E(u(6), h.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), p(.5, .6, .7, .3));
          E(u(z), h.translate(0, 16, 34).scale(1.5, 1, 2), p(.5, .6, .7, .3));
          E(u(7), h.translate(0, 16.2, 38).scale(5, 1, 5), p(.4, .5, .6, .4));
          F(c => {
            c.h = () => {
              let d = Za((S[14].g + S[14].i) / 2, S[13].i);
              return d = Za(d, (S[15].g + S[15].i) / 2), h.translate(0, 16 * d, 8.5 * Ya(2 * d - 1));
            };
            E(u(5), h.scale(5, 1.1, 5), p(.5, .3, .3, .4));
            E(u(5), h.scale(5.5, .9, 5.5), p(.25, .25, .25, .4));
            gc(h.translate(0, 1.5, -1).rotate(0, 180));
          });
          jc(h.translate(0, 19, 39), [0, 0, 3.5]);
        });
      });
    });
  },
  nc = (b, f, g, c) => {
    let d = 0, k = 0, n = 0, q = 1 / 0, t = -1 / 0, B = 1 / 0, H = -1 / 0, X = 1 / 0, ba = -1 / 0;
    const U = 1.1 * (g - f),
      V = (new DOMMatrix(cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, f, g))).multiplySelf(b).invertSelf();
    b = l(8, A => {
      A = V.transformPoint({ x: 4 & A ? 1 : -1, y: 2 & A ? 1 : -1, z: 1 & A ? 1 : -1 });
      return d -= A.x = (U * A.x | 0) / (U * A.w),
        k -= A.y = (U * A.y | 0) / (U * A.w),
        n -= A.z = (U * A.z | 0) / (U * A.w),
        A;
    });
    f = h.rotate(298, 139).translateSelf(d / 8, k / 8, n / 8);
    return jb(b, f).map(({ x: A, y: Y, z: M }) => {
      q = q < A ? q : A;
      t = A < t ? t : A;
      B = B < Y ? B : Y;
      H = Y < H ? H : Y;
      X = X < M ? X : M;
      ba = M < ba ? ba : M;
    }),
      X *= 0 > X ? c : 1 / c,
      ba *= 0 < ba ? c : 1 / c,
      h.scale(2 / (t - q), 2 / (H - B), 2 / (X - ba)).translateSelf((t + q) / -2, (H + B) / -2, (X + ba) / 2)
        .multiplySelf(f).toFloat32Array();
  },
  oc = (b, f = 35633) => {
    f = T.c6x(f);
    return T.s3c(f, b), T.c6a(f), f;
  },
  pc = (b, f) => {
    const g = {}, c = T.c1h();
    return T.abz(c, b), T.abz(c, oc(f, 35632)), T.l8l(c), d => d ? g[d] || (g[d] = T.gan(c, d)) : T.u7y(c);
  },
  qc = (b, f, g) => {
    const c = d => T.d97(4, d.J, 5123, 2 * d.K);
    if (Ma) {
      T.uae(b, !1, h.rotate(0, 40 * Math.sin(pa) - 70).toFloat32Array()), c(Ta.D), Sa.map(d => d.D).map(c);
    } else {
      for (const d of vb) {
        const k = d.H, n = d.D;
        (f || d !== Ta && d !== Sa[0] && d !== Sa[1]) && n
          && (g && T.ube(g, k / 255), T.uae(b, !1, d.s.toFloat32Array()), c(n));
      }
    }
  },
  rc = new Int32Array(10725888),
  sc = (NO_INLINE(
    "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls:<b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n",
  ),
    "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    )),
  lc = (() => {
    const b = l(
        11,
        g => h.translate(Math.sin(g / 10 * Math.PI), g / 10).rotate(+g).scale(1.0001 - g / 10, 0, 1 - g / 10),
      ),
      f = kb(18);
    return l(10, g => lb(jb(f, b[g]).reverse(), jb(f, b[g + 1]), 1)).flat();
  })(),
  kc = y(
    x(
      r(u(20, 1, 1.15, 1), h.translate(0, -3).scale(3.5, 1, 3.5), p(.7, .4, .25, .7)),
      r(u(20, 1, 1.3, 1), h.translate(0, -2.5).scale(2.6, 1, 3), p(.7, .4, .25, .2)),
      r(u(z), h.translate(4, -1.2).scale3d(2), p(.7, .4, .25, .3)),
    ),
  ),
  wb = [h],
  Hb = new Int32Array(Db.buffer, 0, 4),
  Gb = new Float32Array(Db.buffer),
  Yb = new AudioContext(),
  Xb = Yb.createBufferSource(),
  fc = (E([z.slice(1)], h.translate(-2).scale3d(3).rotate(90, 0)),
    Jb(),
    [p(1, .5, .2), p(.7, 1, .2)].map(
      b => (E(u(6, 1), h.scale(.13, 1.4, .13), p(.3, .3, .5)),
        E(u(8), h.translate(0, 1).scale(.21, .3, .21), b),
        E(u(3), h.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), p(.2, .2, .2)),
        Jb()),
    )),
  ic = (E(
    mb(40, 30, (b, f, g) => {
      const c = f / 30, d = .05 * b * Math.PI, k = c ** .6 * Math.PI / 2;
      b = c * c * Math.sin(b * Math.PI * .35) / 4;
      return 29 === f
        ? { x: g.B = 0, y: -0.5, z: 0 }
        : {
          x: Math.cos(d) * Math.sin(k),
          y: Math.cos(c * Math.PI) - c - b,
          z: Math.sin(d) * Math.sin(k) + Math.sin(b * Math.PI * 2) / 4,
        };
    }),
    h.scale3d(.7),
    p(1, 1, 1),
  ),
    [-1, 1].map(b => E(mb(15), h.translate(.16 * b, .4, -0.36).scale3d(.09))),
    Jb()),
  T = hC.getContext("webgl2");
for (const b in T) {
  T[b[0] + [...b].reduce((f, g, c) => (f * c + g.charCodeAt(0)) % 434, 0).toString(36)] = T[b];
}
setTimeout(() => {
  let b = 0, f = 6;
  const g = () => {
      if (h4.innerHTML += ".", !--f) {
        let n = 0, q = 0, t = 1, B = 0, H = 0, X = 0, ba = !1, U, V, A, Y, M, ca, J, ha, da, ea;
        const N = { x: 0, y: 0, z: 0 },
          ra = new Int32Array(256),
          ia = () => {
            const { j: v, I: w } = S[za], { x: I, y: D, z: K } = w.transformPoint({ x: 0, y: 8, z: -3 });
            m.x = N.x = I;
            m.y = N.y = J = D;
            m.z = N.z = K;
            V =
              ca =
              M =
              A =
              Y =
                0;
            t = 1;
            n = q = v?.H || 1;
          },
          Ba = () => {
            let v = 0,
              w = 0,
              I = (NO_INLINE(() => {
                let G = 0, Q = 0, ja = 0, wa = 0, xa = 0;
                ra.fill(0);
                for (let Z = 0; 31 > Z; ++Z) {
                  let Fa = 0;
                  const R = 512 * Z;
                  for (let Ra = 0; 128 > Ra; Ra++) {
                    let ta = R + 4 * Ra;
                    var ua = (Ga[ta] + Ga[1 + ta]) / 255;
                    if (ta = Ga[2 + ta], 14 < Ra && 114 > Ra && (Fa += ua), ta && ua) {
                      ua = ra[ta] + 1, ra[ta] = ua, G > ua || (G = ua, Q = ta);
                    }
                  }
                  3 > Fa && 5 < Z && (wa += Z / 32);
                  3 < Fa && (7 < Z && (ja += Z / 15), xa = 1);
                }
                Q && (xa = 1);
                t ? Q && (t = 0, q = Q) : q = Q || n;
                n = Q;
                V = xa;
                A = P(A, xa ? 6.5 : 8, 4);
                N.y += ja / 41 - (xa ? 1 : A) * wa / 41 * A * e;
              })(),
                NO_INLINE(() => {
                  for (let xa = 32; 128 > xa; xa += 2) {
                    var G = 0;
                    let ua = 0;
                    var Q = 0;
                    let Z = 0;
                    const Fa = 512 * xa;
                    for (let R = xa >> 1 & 1; 128 > R; R += 2) {
                      var ja = Fa + 4 * R;
                      const Ra = Fa + 4 * (127 - R), ta = Ga[ja] / 255, Eb = Ga[1 + Ra] / 255;
                      var wa = R / 63.5 - 1;
                      wa = 1 - (0 > wa ? -wa : wa);
                      if (
                        10 < R && 118 > R
                        && (G = Wa(G, Wa(ta * wa, ta * Ga[Ra] / 127.5)),
                          ua = Wa(ua, Wa(Eb * wa, Eb * Ga[1 + ja] / 255))), 54 > R || 74 < R
                      ) {
                        ja = (1 - wa) * (Eb < ta ? ta : Eb) / 3,
                          .001 < ja && (64 > R && ja > Q ? Q = ja : 64 < R && ja > Z && (Z = ja));
                      }
                    }
                    Q = Z - Q;
                    G = ua - G;
                    (0 > Q ? -Q : Q) > (0 > v ? -v : v) && (v = Q);
                    (0 > G ? -G : G) > (0 > w ? -w : w) && (w = G);
                  }
                })(),
                (Wb[0] ? 1 : 0) + (Wb[2] ? -1 : 0) + na),
              D = (Wb[1] ? 1 : 0) + (Wb[3] ? -1 : 0) + oa;
            var K = navigator.getGamepads()[0];
            if (K) {
              var O = Q => G[Q]?.pressed || 0 < G[Q]?.value;
              const G = K.buttons;
              K = K.axes;
              var W = O(1) || O(3) || O(2) || O(0);
              W !== ba && (ba = W) && (Wb[5] = 1);
              I += (.2 < Xa(-K[0]) ? -K[0] : 0) + (O(14) ? 1 : 0) + (O(15) ? -1 : 0);
              D += (.2 < Xa(-K[1]) ? -K[1] : 0) + (O(12) ? 1 : 0) + (O(13) ? -1 : 0);
              Na && (.3 < Xa(K[2]) && (Qb += 80 * K[2] * e), .3 < Xa(K[3]) && (Pb += 80 * K[3] * e));
            }
            .05 > (0 > D ? -D : D) && (D = 0);
            .05 > (0 > I ? -I : I) && (I = 0);
            O = Math.atan2(D, I);
            K = Ya(Math.hypot(D, I));
            var aa = (I = K * Math.cos(O), D = K * Math.sin(O), Ya(1 - 5 * Wa(0 > v ? -v : v, 0 > w ? -w : w)));
            W =
              (q || (v += M * aa * e, w += ca * aa * e),
                M = P(M, 0, V ? 8 : 4),
                ca = P(ca, 0, V ? 8 : 4),
                Y = P(Y, V ? (I || D ? V ? 7 : 4 : 0) * aa : 0, V ? .1 < aa ? 10 : I || D ? 5 : 7 : 1),
                Na ? Qb * Va : Math.PI);
            aa = Math.sin(W) * Y * e;
            var Pa = Math.cos(W) * Y * e;
            W = (v -= I * Pa - D * aa, w -= I * aa + D * Pa, q && vb[q - 1].G && vb[q - 1].s || h);
            aa = W.inverse();
            if (
              aa.m41 = 0,
                aa.m42 = 0,
                aa.m43 = 0,
                { x: v, z: w } = aa.transformPoint({ x: v, z: w, w: 0 }),
                N.x += v,
                N.z += w,
                q !== U
            ) {
              U = q;
              const { x: G, y: Q, z: ja } = W.inverse().transformPoint(m);
              N.x = G;
              N.y = Q;
              N.z = ja;
            }
            aa = m.x;
            Pa = m.z;
            const { x: Fb, y: hb, z: L } = W.transformPoint(N);
            W = (m.x = Fb, m.y = hb, m.z = L, Xa(J - hb));
            J = P(J, hb + .1, 50 * W + 5);
            q && (M = (m.x - aa) / e, ca = (m.z - Pa) / e);
            (I || D) && (B = 90 - O / Va);
            H = ab(H, B, 8 * e);
            X += (K - X) * Ya(10 * e);
          },
          Oa = v => {
            requestAnimationFrame(Oa);
            var w = (v - (Qa || v)) / 1e3;
            e = Ma ? Wb[5] = 0 : .066 < w ? .066 : w;
            a += e;
            pa += w;
            Qa = v;
            if (
              0 < e
              && (T.b6o(36160, ya),
                T.r9r(0, 0, 128, 128, 6408, 5121, Ga),
                T.iay(36160, [36064]),
                NO_INLINE(Ba)(),
                Kb()), 0 < e
            ) {
              if (ha = bb(ha, m.x, .5, e), da = bb(da, m.y, 2, e), ea = bb(ea, m.z, .5, e), Na) {
                v = 200 * t,
                  Lb = P(Lb, m.x, 18 + v),
                  Mb = P(Mb, m.y + 1.5, 15 + v),
                  Nb = P(Nb, m.z, 18 + v),
                  Pb = Wa(87 > Pb ? Pb : 87, -87);
              } else {
                if (
                  Lb = bb(Lb, ha, 1, 2 * e),
                    Mb = bb(Mb, da + 13 + 15 * t, 4, 2 * e),
                    Nb = bb(Nb, ea + -18, 1, 2 * e),
                    v = Nb - ea,
                    1 < (0 > v ? -v : v)
                ) {
                  w = Lb - ha;
                  const I = Mb - da;
                  Qb = 270 + Math.atan2(v, w) / Va;
                  Pb = 90 - Math.atan2(Math.hypot(v, w), I) / Va;
                }
              }
              if (Qb = $a(Qb), 0 < e) {
                v = Za(S[12].g, S[13].g),
                  a > sa && (h4.innerHTML = "", sa = 0),
                  w = P(Ea, 0, 1),
                  Ea = w + ($a(Ea + 60 * e) - w) * Ya(S[5].g - S[6].i),
                  w = P(Aa, 0, 5),
                  Aa = w + ($a(Aa + 56 * e) - w) * (0 > v ? 0 : 1 < v ? 1 : v),
                  w = P(Da, 0, 4),
                  Da = w + ($a(Da + 48 * e) - w) * (0 > v ? 0 : 1 < v ? 1 : v),
                  v = 2 * S[9].i - 1,
                  Ja = P(Ja, S[9].i, .2 + .3 * (0 > v ? -v : v)),
                  Ia = P(Ia, Ha ? Ia + (-9 - Ia) * Ya(1.5 * e) : Ya(a / 3), 1),
                  1 === S[0].l && .8 < S[0].g && (13 > qa
                    ? (S[0].l = 0, Ha || (h4.innerHTML = "Not leaving now, there are souls to catch!", sa = a + 3))
                    : Ha
                      || (Ha
                        || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", sa = a + 1 / 0),
                        Ha = 1)),
                  Wb[5] = 0,
                  (-25 > m.x || 109 > m.z ? -25 : -9) > m.y && ia();
              }
            }
            v = Ma
              ? h.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ya(hC.clientWidth / 1e3))
              : h.rotate(-Pb, -Qb, -0).invertSelf().translateSelf(-Lb, -Mb, -Nb);
            0 < e
              && (va(),
                T.b6o(36160, ya),
                T.v5y(0, 0, 128, 128),
                T.cbf(!0, !1, !0, !1),
                T.c4s(16640),
                T.uae(va("b"), !1, h.rotate(0, 180).invertSelf().translateSelf(-m.x, -m.y, .3 - m.z).toFloat32Array()),
                qc(va("c"), 0, va("j")),
                T.cbf(!1, !0, !1, !1),
                T.c4s(16640),
                T.cbf(!1, !0, !0, !1),
                T.uae(va("b"), !1, h.translate(-m.x, -m.y, -m.z - .3).toFloat32Array()),
                qc(va("c"), 0, va("j")),
                T.cbf(!0, !0, !0, !0),
                1 === q && (S[9].l = -15 > m.x && 0 > m.z ? 1 : 0));
            qb();
            T.v5y(0, 0, 2048, 2048);
            Ca[0](nc(v, .3, 55, 10));
            Ca[1](nc(v, 55, 177, 11));
            T.b6o(36160, null);
            ka();
            T.v5y(0, 0, T.drawingBufferWidth, T.drawingBufferHeight);
            T.c4s(16640);
            T.uae(ka("a"), !1, cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
            T.uae(ka("b"), !1, v.toFloat32Array());
            T.ubu(ka("k"), Lb, Mb, Nb);
            Ca[0]();
            Ca[1]();
            qc(ka("c"), !Na);
            la();
            T.ubu(la("j"), T.drawingBufferWidth, T.drawingBufferHeight, pa);
            Ma ? T.ubu(la("k"), 0, 0, 0) : T.ubu(la("k"), Lb, Mb, Nb);
            T.uae(la("b"), !1, v.inverse().toFloat32Array());
            T.d97(4, 3, 5123, 0);
          },
          Ga = new Uint8Array(65536),
          Ob = d;
        var k = oc(
          "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",
        );
        const qb = pc(
            oc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"),
            "#version 300 es\nvoid main(){}",
          ),
          la = pc(
            oc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          va = pc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",
          ),
          ka = pc(
            k,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          ya =
            (la(),
              T.ubh(la("q"), 3),
              va(),
              T.uae(va("a"), !1, cb(1.4, .59, 1e-4, 1)),
              ka(),
              T.ubh(ka("q"), 3),
              T.c5w());
        k = T.c3z();
        const ib = T.c25(),
          Ca = l(2, v => {
            let w;
            const I = T.c25(), D = T.c5w(), K = ka(v ? "j" : "i");
            return ka(),
              T.ubh(ka(v ? "h" : "g"), v),
              T.b6o(36160, D),
              T.d45([0]),
              T.r9l(0),
              T.a4v(33984 + v),
              T.b9j(3553, I),
              T.fas(36160, 36096, 3553, I, 0),
              T.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
              T.t2z(3553, 10241, 9729),
              T.t2z(3553, 10240, 9729),
              T.t2z(3553, 34893, 515),
              T.t2z(3553, 34892, 34894),
              T.t2z(3553, 10243, 33071),
              T.t2z(3553, 10242, 33071),
              O => {
                O
                  ? (w = O, T.b6o(36160, D), T.iay(36160, [36096]), T.c4s(256), T.uae(qb("b"), !1, w), qc(qb("c"), !Na))
                  : T.uae(K, !1, w);
              };
          });
        T.b11(34963, T.c1b());
        T.b2v(34963, new Uint16Array(xb), 35044);
        T.b11(34962, T.c1b());
        T.b2v(34962, new Float32Array(yb), 35044);
        T.v7s(0, 3, 5126, !1, 0, 0);
        T.b11(34962, T.c1b());
        T.b2v(34962, new Int16Array(zb), 35044);
        T.v7s(1, 3, 5122, !0, 0, 0);
        T.b11(34962, T.c1b());
        T.b2v(34962, new Uint32Array(Ab), 35044);
        T.v7s(2, 4, 5121, !0, 0, 0);
        T.e3x(0);
        T.e3x(1);
        T.e3x(2);
        T.e8z(2929);
        T.e8z(2884);
        T.c70(1);
        T.c7a(1029);
        T.d4n(515);
        T.c5t(0, 0, 0, 1);
        T.b6o(36160, ya);
        T.bb1(36161, k);
        T.r4v(36161, 33189, 128, 128);
        T.f8w(36160, 36096, 36161, k);
        T.a4v(33987);
        T.b9j(3553, ib);
        T.fas(36160, 36064, 3553, ib, 0);
        T.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        T.b9j(3553, T.c25());
        T.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Ob);
        T.gbn(3553);
        T.t2z(3553, 10241, 9987);
        T.t2z(3553, 10240, 9729);
        Ta.h = () => h.translate(m.x, J, m.z).rotateSelf(0, H);
        Sa.map((v, w) => {
          v.h = () =>
            h.translate(0, X * Ya(.45 * Math.sin(9.1 * a + Math.PI * w - Math.PI / 2))).rotateSelf(
              X * Math.sin(9.1 * a + Math.PI * w) * .25 / Va,
              0,
            );
        });
        try {
          const [v, w, I, D, K] = JSON.parse(localStorage.DanteSP22);
          S.map((O, W) => O.g = O.i = O.l = W ? 0 | v[W] : 0);
          cc.map((O, W) => O.l = 0 | w[W]);
          za = I;
          a = D;
          Ja = K;
        } catch (v) {
        }
        Ia = 0 > za ? 0 : 1 < za ? 1 : za;
        h4.innerHTML = "";
        sa = 0;
        dc();
        Kb();
        NO_INLINE(ac)();
        ia();
        Lb = ha = m.x;
        Mb = (da = m.y) + 13;
        Nb = (ea = m.z) + -18;
        requestAnimationFrame(Oa);
      }
    },
    c = () => {
      if (5 > b) {
        var k = 0, n = b++;
        let [H, X, ba, U, V, A, Y, M, ca, J, ha, da, ea, N, ra, ia, Ba, Oa, Ga, Ob, qb] = Rb[n];
        J = J * J * 4;
        for (const la of [5513, 4562, 3891]) {
          let va = 0, ka = 0, ya, ib, Ca, v, w;
          const I = [],
            D = new Int32Array(768 * la),
            K = 2 ** (da - 9) / la,
            O = Math.PI * 2 ** (Ba - 8) / la,
            W = Ga * la & -2;
          for (let aa = 0; 11 >= aa; ++aa) {
            for (
              let Pa = 0, Fb = +"000001234556112341234556011111111112011111111112000001111112"[12 * n + aa];
              32 > Pa;
              ++Pa
            ) {
              const hb = (32 * aa + Pa) * la;
              for (var q = 0; 4 > q; ++q) {
                if (ya = 0, Fb && (ya = qb[Fb - 1].charCodeAt(Pa + 32 * q) - 40, ya += 0 < ya ? 106 : 0), ya) {
                  var t;
                  if (!(t = I[ya])) {
                    t = ya;
                    let L = void 0, G = void 0;
                    var B = ya;
                    let Q = 0, ja = 0;
                    const wa = 2 > n ? Ub : Sb, xa = 2 > n ? 1 > n ? Tb : Vb : Sb, ua = new Int32Array(M + ca + J);
                    for (let Z = 0, Fa = 0; M + ca + J > Z; ++Z, ++Fa) {
                      let R = 1;
                      M > Z ? R = Z / M : M + ca > Z || (R = (1 - (R = (Z - M - ca) / J)) * 3 ** (-ha / 16 * R));
                      0 > Fa
                        || (Fa -= 4 * la,
                          G = 0.003960 * 2 ** ((B + X - 256) / 12),
                          L = 0.003960 * 2 ** ((B + V - 256) / 12) * (1 + (n ? 0 : 8e-4 * 9)));
                      ua[Z] = 80
                          * (wa(Q += G * R ** (ba / 32)) * H + xa(ja += L * R ** (A / 32)) * U
                            + (Y ? (2 * Math.random() - 1) * Y : 0))
                          * R | 0;
                    }
                    t = I[t] = ua;
                  }
                  for (let L = 0, G = 2 * hb; t.length > L; ++L, G += 2) {
                    D[G] += t[L];
                  }
                }
              }
              for (let L, G = 0; la > G; ++G) {
                q = 0,
                  t = 2 * (hb + G),
                  ((L = D[t]) || w)
                  && (Ca = 0.003080 * ea,
                    1 != n && 4 != n || (Ca *= Math.sin(K * t * Math.PI * 2) * Ob / 512 + .5),
                    Ca = 1.5 * Math.sin(Ca),
                    va += Ca * ka,
                    v = (1 - N / 255) * (L - ka) - va,
                    ka += Ca * v,
                    L = 4 == n ? ka : 3 == n ? v : va,
                    n || (L = 1 > (L *= 22e-5) ? -1 < L ? Math.sin(L / 4 * Math.PI * 2) : -1 : 1, L /= 22e-5),
                    L *= ra / 32,
                    w = 1e-5 < L * L,
                    ib = Math.sin(O * t) * ia / 512 + .5,
                    q = L * (1 - ib),
                    L *= ib),
                  W > t || (q += D[t - W + 1] * Oa
                    / 255,
                    L += D[t - W] * Oa / 255),
                  rc[k + t] += D[t] = q,
                  ++t,
                  rc[k + t] += D[t] = L;
              }
            }
          }
          k += D.length;
        }
        setTimeout(c);
      } else {
        k = Yb.createBuffer(2, 5362944, 44100);
        for (n = 0; 2 > n; n++) {
          for (let H = n, X = k.getChannelData(n); 10725888 > H; H += 2) {
            X[H >> 1] = rc[H] / 65536;
          }
        }
        Xb.buffer = k;
        Xb.loop = !0;
      }
      g();
    },
    d = new Image();
  d.onload = d.onerror = () => {
    g();
  };
  d.src = sc;
  setTimeout(c, 50);
  NO_INLINE(mc)();
  Ta = F(() => {
    Sa = [-1, 1].map(n =>
      F(() => {
        E(u(10, 1), h.translate(.3 * n, -0.8).scale(.2, .7, .24), p(1, .3, .4));
      })
    );
    [0, 180].map(n => E(lc, h.rotate(0, n).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), p(1, 1, .8)));
    E(mb(20), h.translate(0, 1).scale(.5, .5, .5), p(1, .3, .4));
    const k = r(
      y(x(u(15, 1), r(u(z), h.translate(0, 0, 1).scale(2, 2, .5)))),
      h.rotate(-90, 0).scale(.1, .05, .1),
      p(.3, .3, .3),
    );
    [-1, 1].map(n => E(k, h.translate(.2 * n, 1.2, .4).rotate(0, 20 * n, 20 * n)));
    E(u(z), h.translate(0, .9, .45).scale(.15, .02, .06), p(.3, .3, .3));
    E(mb(20), h.scale(.7, .8, .55), p(1, .3, .4));
  });
});
