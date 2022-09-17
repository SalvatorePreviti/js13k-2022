let fa = 0, ma = !0, na = 0, oa = 0, pa = 0, a = 0, qa = 0, sa = 0, za = 0, Aa = 0, Da = 0, Ea = 0, Ha = 0, Ia = 0, Ja = 0, f = .066, Ka, La, Ma, Na, Qa, Sa, Ta, Ua;
const Va = Math.PI / 180, h = new DOMMatrix(), Wa = (d, b) => b < d ? d : b, Xa = d => 0 > d ? -d : d, Ya = d => 0 > d ? 0 : 1 < d ? 1 : d, Za = (d, b) => (d = 0 > d ? 0 : 1 < d ? 1 : d, d + (1 - d - d) * (0 > b ? 0 : 1 < b ? 1 : b)), $a = d => Math.atan2(Math.sin(d *= Va), Math.cos(d)) / Va, ab = (d, b, c) => {
  d *= Va;
  b = (b * Va - d) % (2 * Math.PI);
  return (d + (2 * b % (2 * Math.PI) - b) * (0 > c ? 0 : 1 < c ? 1 : c)) / Va;
}, bb = (d, b, c, g) => {
  var e = b - d;
  d += Math.sign(b - d) * Wa(0, (0 > e ? -e : e) ** .9 - c) * g * 2;
  return d + (b - d) * Ya(g / 7);
}, k = (d, b) => Array.from(Array(d), (c, g) => b(g)), cb = (d, b, c, g,) => [d, 0, 0, 0, 0, b, 0, 0, 0, 0, (g + c) / (c - g), -1, 0, 0, 2 * g * c / (c - g), 0], db = ({x:d, y:b, z:c}, g) => d * g.x + b * g.y + c * g.z, eb = ({x:d, y:b, z:c}) => {
  var g = m;
  return Math.hypot(d - g.x, b - g.y, c - g.z) || 0;
}, fb = d => {
  let b = 0, c = 0, g = 0, e, l = d.at(-1);
  for (e of d) {
    b += (l.y - e.y) * (l.z + e.z), c += (l.z - e.z) * (l.x + e.x), g += (l.x - e.x) * (l.y + e.y), l = e;
  }
  return e = Math.hypot(b, c, g), b /= e, c /= e, g /= e, {x:b, y:c, z:g, w:b * l.x + c * l.y + g * l.z,};
}, n = (d, b, c, g = 0) => 255 * g << 24 | 255 * c << 16 | 255 * b << 8 | 255 * d, gb = (d, b, c) => (d.B = c, d.u = b, d), jb = (d, b, c = d.u) => gb(d.map(g => (({x:e, y:l, z:q}, p) => ({x:e, y:l, z:q} = p.transformPoint({x:e, y:l, z:q,}), {x:e, y:l, z:q,}))(g, b)), c, d.B,), r = (d, b, c) => d.map(g => jb(g, b, c)), kb = (d, b = 0) => k(d, c => {
  const g = Math.cos(2 * Math.PI * c / d);
  return {x:Math.sin(2 * Math.PI * c / d), y:0, z:.01 > (0 > g ? -g : g) ? g : 0 > g ? g - b : g + b,};
}), lb = (d, b, c) => d.map((g, e, {length:l}) => gb([g, b[l - e - 1], b[l - (e + 1) % l - 1], d[(e + 1) % l]], d.u, c,)), u = (d, b, c = 0, g) => {
  g = d.length ? d : kb(d, g);
  d = jb(g, h.translate(0, 1).scale3d(0 < c ? c : 1));
  c = jb(g, h.translate(0, -1).scale3d(0 > c ? -c : 1)).reverse();
  return [...lb(c, d, b), c, d];
}, mb = (d, b = d, c = (g, e) => (e *= Math.PI / b, {x:Math.cos(g *= 2 * Math.PI / d) * Math.sin(e), y:Math.cos(e), z:Math.sin(g) * Math.sin(e),})) => {
  const g = [];
  for (let e = 0; d > e; e++) {
    for (let l = 0; b > l; l++) {
      const q = gb([], 0, 1);
      g.push(q);
      q.push(c(e, l, q));
      l && q.push(c((e + 1) % d, l, q));
      b - 1 > l && q.push(c((e + 1) % d, l + 1 % b, q));
      q.push(c(e, l + 1 % b, q));
    }
  }
  return g;
}, nb = (d, b) => {
  var c, g, e, l = b.A;
  for (var q = 0; l.length > q; ++q) {
    if (-0.00008 > (e = db(d, l[q]) - d.w) ? g = b : 8e-5 < e && (c = b), g && c) {
      g = [];
      e = [];
      l = b.A;
      q = b.v;
      let p = l.at(-1), t = db(d, p) - d.w;
      for (const D of l) {
        c = db(d, D) - d.w, 8e-5 > t && e.push(p), -0.00008 < t && g.push(p), (8e-5 < t && -0.00008 > c || -0.00008 > t && 8e-5 < c) && (t /= c - t, p = {x:p.x + (p.x - D.x) * t, y:p.y + (p.y - D.y) * t, z:p.z + (p.z - D.z) * t,}, g.push(p), e.push(p)), p = D, t = c;
      }
      return {o:2 < g.length && {A:gb(g, l.u, l.B), v:q, j:b,}, m:2 < e.length && {A:gb(e, l.u, l.B), v:q, j:b,},};
    }
  }
  return {o:c, m:g,};
}, ob = (d, b, c = fb(b.A)) => {
  if (d) {
    const {o:g, m:e} = nb(d, b);
    g || e || d.C.push(b);
    g && (d.o = ob(d.o, g, c));
    e && (d.m = ob(d.m, e, c));
  } else {
    d = {x:c.x, y:c.y, z:c.z, w:c.w, C:[b], o:0, m:0,};
  }
  return d;
}, pb = (d, b, c) => {
  const g = [], e = (l, q) => {
    let {o:p, m:t} = nb(l, q);
    p || t || (0 < c * db(l, b) ? p = q : t = q);
    p && (l.o ? e(l.o, p) : g.push(p));
    t && l.m && e(l.m, t);
  };
  for (const l of b.C) {
    e(d, l);
  }
  return g;
}, rb = (d, b) => d && (b(d), rb(d.o, b), rb(d.m, b)), sb = d => d.length ? d.reduce((b, c) => ob(b, {A:c, v:0, j:0,}), 0) : d, tb = d => (rb(d, b => {
  const c = b.m;
  b.m = b.o;
  b.o = c;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const g of b.C) {
    g.v = !g.v;
  }
}), d), ub = (...d) => d.reduce((b, c) => {
  const g = [];
  if (b = sb(b), c) {
    c = sb(c);
    rb(b, e => e.C = pb(c, e, 1));
    rb(c, e => g.push([e, pb(b, e, -1)]));
    for (const [e, l] of g) {
      for (const q of l) {
        ob(b, q, e);
      }
    }
  }
  return b;
}), x = (d, ...b) => tb(ub(tb(sb(d)), ...b)), y = d => {
  const b = new Map(), c = new Map(), g = e => {
    if (e.j) {
      const l = b.get(e.j);
      l ? (c.delete(l), e = g(e.j)) : b.set(e.j, e);
    }
    return e;
  };
  return rb(d, e => {
    for (const l of e.C) {
      c.set(g(l), l.v);
    }
  }), Array.from(c, ([{A:e}, l]) => {
    const q = e.map(({x:p, y:t, z:D}) => ({x:p, y:t, z:D,}));
    return gb(l ? q.reverse() : q, e.u, e.B);
  });
}, z = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], vb = [], B = (d, b) => {
  wb.push(wb.at(-1).multiply(d));
  d = b();
  return wb.pop(), d;
}, xb = [], yb = [], zb = [], Ab = [], Bb = [[]], Cb = new Map(), Db = new Int32Array(7), Ib = d => {
  let {x:b, y:c, z:g} = La[d];
  Gb[0] = b;
  Gb[1] = c;
  Gb[2] = g;
  d = "" + (La.B ? Hb : Db);
  let e = Cb.get(d);
  return void 0 !== e ? (b = 3 * e, zb[b] = (zb[b++] + Db[4]) / 2, zb[b] = (zb[b++] + Db[5]) / 2, zb[b] = (zb[b] + Db[6]) / 2) : (Cb.set(d, e = Cb.size), yb.push(b, c, g), zb.push(Db[4], Db[5], Db[6]), Ab.push(Db[3])), e;
}, E = (d, b = h, c) => Bb.at(-1).push(...r(d, wb.at(-1).multiply(b), c)), Jb = () => {
  var d = Bb.at(-1);
  for (La of d) {
    const {x:b, y:c, z:g} = fb(La);
    Db[3] = 0 | La.u;
    Db[4] = 32767 * b;
    Db[5] = 32767 * c;
    Db[6] = 32767 * g;
    for (let e = 2, l = Ib(0), q = Ib(1); La.length > e; ++e) {
      xb.push(l, q, q = Ib(e));
    }
  }
  d.length = 0;
  d = fa;
  return {K:d, J:(fa = xb.length) - d,};
}, F = d => {
  const b = Ka, c = {F:wb.at(-1), s:h, H:vb.length + 1, G:1, j:b === vb[0] ? void 0 : b,};
  d = (Ka = c, vb.push(c), wb.push(h), Bb.push([]), d(c) || Jb());
  return c.D = d, wb.pop(), Bb.pop(), Ka = b, c;
}, Kb = () => {
  for (const b of vb) {
    var d = b.h;
    (b.s = b.j ? b.j.s.multiply(b.F) : b.F, d) && (d = d(b)) && (b.s = b.s.multiply(d));
  }
};
var Lb = -11, Mb = 17, Nb = -90, Ob = 0, Qb = 0;
const Rb = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 
35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 
47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Sb = d => Math.sin(d * Math.PI * 2), Tb = d => .5 > d % 1 ? 1 : -1, Ub = d => d % 1 * 2 - 1, Vb = d => {
  d = d % 1 * 4;
  return 2 > d ? d - 1 : 3 - d;
}, Wb = [], Zb = () => {
  Ma || !ma ? Xb.disconnect() : Xb.connect(Yb.destination);
  b4.innerHTML = "Music: " + ma;
}, $b = (d = !1) => {
  if (Ma !== d) {
    Ma = d;
    Na = 0;
    try {
      d ? document.exitPointerLock() : Xb.start();
    } catch {
    }
    document.body.className = d ? "l m" : "l";
    Zb();
  }
}, ac = () => {
  let d = 0, b = 0, c = 0, g, e, l;
  const q = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Wb.length = na = oa = 0;
    g = e = void 0;
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
    l = 1;
    Ma || (Wb[5] = !0, Na && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = q;
  onkeydown = onkeyup = ({code:p, target:t, type:D, repeat:H}) => {
    H || ((t = !!D[5] && t === document.body) && ("Escape" === p || "Enter" === p && Ma) ? Ma && !l || $b(!Ma) : (p = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[p], 5 === p ? t && (Wb[p] = 1) : Wb[p] = t));
  };
  onmousemove = ({movementX:p, movementY:t}) => {
    Na && (p || t) && (Qb += .1 * p, Ob += .1 * t);
  };
  hC.ontouchstart = p => {
    if (!Ma) {
      for (const t of p.changedTouches) {
        Na && t.pageX > hC.clientWidth / 2 ? g || (g = t, d = Qb, b = Ob) : e = e || t;
      }
      c = pa;
    }
  };
  hC.ontouchmove = ({changedTouches:p}) => {
    if (!Ma) {
      for (const {pageX:t, pageY:D, identifier:H} of p) {
        g?.identifier === H && (Qb = d + (t - g.pageX) / 3, Ob = b + (D - g.pageY) / 3), e?.identifier === H && (na = -(t - e.pageX) / 18, oa = -(D - e.pageY) / 18, na = .35 > (0 > na ? -na : na) ? 0 : .8 * na, oa = .35 > (0 > oa ? -oa : oa) ? 0 : .8 * oa);
      }
    }
  };
  hC.ontouchend = p => {
    for (const t of p.changedTouches) {
      t.identifier === g?.identifier && (g = void 0), t.identifier === e?.identifier && (e = void 0, oa = na = 0);
    }
    p.preventDefault();
    p = pa - c;
    (!c || .02 < p && .4 > p) && (Wb[5] = !0);
  };
  oncontextmenu = () => !1;
  q();
  $b(!0);
}, Q = (d, b, c) => d + (b - d) * Ya(1 - Math.exp(-c * f)), bc = ({l:d}) => d, S = [], cc = [], dc = () => {
  qa = cc.reduce((d, b) => d + b.l, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[qa];
}, ec = () => {
  dc();
  localStorage.DanteSP22 = JSON.stringify([S.map(bc), cc.map(bc), za, a, Ja,]);
}, m = {x:0, y:0, z:0,}, gc = d => {
  B(d, () => {
    F(b => {
      const c = {l:0, g:0, i:0, j:b.j,}, g = S.push(c) - 1;
      b.h = () => {
        const e = c.l, l = c.g, q = c.i, p = (c.I = b.s).transformPoint();
        2.9 > eb(p) && Wb[5] && (.3 > l || .7 < l) && (c.l = e ? 0 : 1, g && (Ha || (h4.innerHTML = "* click *", sa = a + 1)), za = g, ec());
        return c.g = Q(l, e, 4), c.i = Q(q, e, 1), b.D = fc[.5 < l ? 1 : 0], h.rotate(60 * c.g - 30, 0).translateSelf(0, 1);
      };
    });
    E(u(5), h.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), n(.4, .5, .5));
    E(u(5), h.translate(.2).rotate(90, 90).scale(.4, .1, .5), n(.4, .5, .5));
    E(u(z), h.translate(0, -0.4).scale(.5, .1, .5), n(.5, .5, .4));
  });
}, hc = d => h.translate(Math.sin(a + 2) / 5, Math.sin(.8 * a) / 3, d).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), jc = (d, ...b) => {
  B(d, () => {
    let c = -1, g = 0, e = 1, l = 0, q = 0, p = 3, t = 0, D = 0;
    const H = {l:0,}, X = b.map(([ca, J, ha]) => ({x:ca, z:J, w:ha,}));
    let ba = X[0], {x:T, z:U} = ba, A = T, Y = U;
    const M = cc.push(H) - 1;
    F(ca => (ca.h = () => {
      if (!H.l) {
        var J = 1;
        var ha = 1 / 0;
        for (var da of X) {
          var ea = da.w, N = Math.hypot(T - da.x, U - da.z), ra = N - ea;
          ia ||= N < ea;
          0 < ra && ha > ra && (ha = ra, ba = da);
          ea = N / ea;
          J = J < ea ? J : ea;
        }
        if (!ia) {
          da = ba.x;
          ha = ba.z;
          ea = ba.w;
          N = T - da;
          ra = U - ha;
          let Ba = Math.hypot(N, ra), Oa = Math.atan2(-ra, N);
          e && (l = (Math.random() - .5) * Math.PI / 2, p = Wa(1, p / (1 + Math.random())));
          Oa += l;
          c = -Math.cos(Oa);
          g = Math.sin(Oa);
          .1 < Ba && (Ba = (Ba < ea ? Ba : ea) / (Ba || 1), T = N * Ba + da, U = ra * Ba + ha);
        }
        e = ia;
        p = Q(p, 3 + 6 * (1 - J), 3 + J);
        T = Q(T, T + c, p);
        U = Q(U, U + g, p);
        A = Q(A, T, p);
        Y = Q(Y, U, p);
        q = ab(q, Math.atan2(A - t, Y - D) / Va - 180, 3 * f,);
        t = A;
        D = Y;
        J = h.translate(A, 0, Y).rotateSelf(0, q).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a));
        var ia = ca.s.multiply(J).transformPoint();
        1.5 > eb(ia) && (H.l = 1, ia = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][qa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', da = 
        qa && 12 > qa ? 5 : 7, Ha || (h4.innerHTML = ia, sa = a + da), ec());
      }
      H.l && (ca.j = Ua, ca.F = h, ia = M % 4 - 2, J = h.translate(M % 4 * 1.2 - 1.7 + Math.sin(a + M) / 6, -2, 1.7 * (M / 4 | 0) - 5.5 + (0 > ia ? -ia : ia) + Math.cos(a / 1.5 + M) / 6,));
      return J;
    }, ic));
  });
}, nc = () => {
  F(() => {
    Ua = B(h.translate(-12, 4.2, -66), () => F(b => {
      b.h = () => hc(40 * Ia);
      gc(h.translate(0, -3, 4));
      E(kc);
    }));
    k(7, b => E(u(6, 1), h.translate(4 * (b / 6 - .5), 3).scale(.2, 3, .2), n(.3, .3, .38)),);
    const d = Jb();
    E(u(z), h.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), n(.8, .8, .8, .2));
    z.map(({x:b, z:c}) => E(u(6), h.translate(3 * b, 3, 15 * c).scale(.7, 4, .7), n(.6, .3, .3, .4)));
    [-23, 22].map(b => E(u(z), h.translate(0, 0, b).scale(3, 1, 8), n(.9, .9, .9, .2)));
    [-15, 15].map((b, c) => {
      E(u(z), h.translate(0, 6.3, b).scale(4, .3, 1), n(.3, .3, .3, .4));
      E(u(z), h.translate(0, 1, b).scale(3, .2, .35), n(.5, .5, .5, .3));
      B(h.translate(0, 0, b), () => F(g => (g.h = () => h.translate(0, 4.7 * -S[c + 1].g), d)));
    });
    k(5, b => k(2, c => E(lc, h.translate(18.5 * (c - .5), 0, 4.8 * b - 9.5).rotate(0, 180 - 180 * c).scale(1.2, 10, 1.2), n(1, 1, .8, .2),)));
    E(u(z), h.translate(3, 1.5, -20).scale(.5, 2, 5), n(.7, .7, .7, .2));
    E(u(z), h.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), n(.75, .75, .75, .2),);
    E(u(5), h.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), n(.6, .3, .3, .4));
    gc(h.translate(-5.4, 1.5, -19).rotate(0, -90));
    E(u(z), h.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), n(.8, .2, .2, .5),);
    E(y(x(ub(r(u(6, 0, 0, .3), h.translate(8, -3, -4).scale(13, 1, 13), n(.7, .7, .7, .2),), r(u(6), h.translate(0, -8).scale(9, 8, 8), n(.4, .2, .5, .5)), r(u(6, 0, 0, .3), h.translate(0, -0.92).scale(13, 2, 13), n(.8, .8, .8, .2),),), r(u(5), h.scale(5, 30, 5), n(.4, .2, .6, .5)), r(u(5, 0, 1.5), h.translate(0, 1).scale(4.5, .3, 4.5), n(.7, .5, .9, .2),), r(u(z), h.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), n(.5, .5, .5, .5),), r(u(6), h.translate(15, -1.5, 4).scale(3.5, 
    1, 3.5), n(.5, .5, .5, .5),),),),);
    F(b => {
      gc(h.translate(0, 1.2));
      b.h = () => h.translate(0, .01 < S[3].g ? (5 * Math.cos(1.5 * a) + 2) * S[3].i * (1 - S[2].g) + -15 * (1 - S[3].g) : -500, 0,);
      E(u(5), h.translate(0, -0.2).scale(5, 1, 5), n(.6, .65, .7, .3));
    });
    gc(h.translate(15, -2, 4));
    B(h.translate(0, 0, 75), () => {
      const b = () => {
        var e = S[2].i, l = 1 - S[4].i;
        return e < l ? e : l;
      }, c = (e, l) => F(q => {
        q.h = () => h.translate(b() * Math.sin(3 * e + a * e) * l);
        z.map(({x:p, z:t}) => {
          E(u(11, 1), h.translate(4 * p, 4, 4 * t - 40).scale(.8, 3, .8), n(.5, .3, .7, .6),);
          E(u(z), h.translate(4 * p, 7, 4 * t - 40).scale(1, .3), n(.5, .5, .5, .3),);
        });
        E(y(x(r(u(z), h.translate(0, 0, -40).scale(5, 1, 5), n(.8, .8, .8, .3),), ...[-1, 1].map(p => r(u(z), h.translate(5 * p, .2, -40).rotate(0, 0, -30 * p).scale(4, 1, 2), n(.8, .8, .8, .3),)),),),);
        E(u(z), h.translate(0, -3, -40).scale(8, 2, 8), n(.4, .4, .4, .3));
      }), g = (c(.7, 12), B(h.translate(0, 0, 20), () => c(1, 8.2)), F(e => {
        B(h.translate(0, 0, -30), () => {
          e.h = () => h.translate(b() * Math.sin(a / 1.5 + 2) * 12);
          E(y(x(ub(r(u(z), h.scale(1.5, 1, 5), n(.9, .9, .9, .2)), r(u(6), h.scale(4, 1, 5), n(.9, .9, .9, .2)), r(u(z), h.translate(0, -2).scale(2, 3.2, 1.9), n(.3, .8, .5, .5),), r(u(16, 1, 0, 4), h.scale(1, 1, 1.5).rotate(0, 90), n(.9, .9, .9, .2),),), r(u(z), h.scale(1.3, 10, 1.3), n(.2, .7, .4, .6)),),),);
          jc(h.translate(0, 2.8), [0, 0, 4.5]);
        });
      }), F(e => {
        e.h = () => h.translate(9.8 * (1 - b()));
        E(u(3), h.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), n(.3, .6, .6, .2));
        E(u(8), h.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), n(.8, .8, .8, .2));
        E(u(z), h.translate(-23, -3, -20).scale(5.2, 1.7, 3), n(.5, .5, .5, .3));
        E(u(z), h.translate(-23, -2.2, -13).scale(3, 1, 4), n(.5, .5, .5, .3));
        gc(h.translate(-23, -0.5, -8.5));
      }), E(u(z), h.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), n(.9, .9, .9, .2)), F(e => {
        e.h = () => h.translate(0, Ya(1 - 5 * b()) * Za(S[4].g, S[5].g) * Math.sin(1.35 * a) * 4);
        E(u(z), h.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), n(.7, .7, .7, .2),);
        E(y(x(r(u(z), h.scale(3, 1.4, 2.7)), r(u(z), h.scale(1.2, 8, 1.2)),),), h.translate(-33, -3, -20), n(.7, .7, .7, .2),);
      }), F(e => {
        e.h = () => h.translate(0, 0, Ya(1 - 5 * b()) * Za(S[4].g, S[5].g) * Math.sin(.9 * a) * 8);
        E(y(x(r(u(z), h.translate(-27, -3, -20).scale(3, 1.4, 2.7), n(.9, .9, .9, .2),), r(u(z), h.translate(-27, -3, -20).scale(1, 3), n(.9, .9, .9, .2),),),),);
        E(u(z), h.translate(-39, -3, -20).scale(3, 1.4, 2.7), n(.9, .9, .9, .2));
      }), F(e => {
        e.h = () => h.translate(0, -6.5 * S[4].i);
        E(u(6), h.translate(-44.5, 0, -20).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), n(.7, .7, .7, .4),);
      }), [...r(y(ub(r(u(z), h.translate(0, -3).scale(11, 1.4, 3), n(.9, .9, .9, .2),), x(r(u(6), h.rotate(0, 0, 90).scale(6, 8, 6), n(.3, .6, .6, .3)), r(u(4, 0, .01), h.translate(0, 6).scale(12, 2, .75).rotate(0, 45), n(.3, .6, .6, .3),), r(u(6), h.rotate(0, 0, 90).scale(5, 12, 5), n(.3, .6, .6, .3)), ...[5, 0, -5].map(e => r(u(5), h.translate(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), n(.3, .6, .6, .3),)),),),), h,)]);
      E(g, h.translate(-53, 0, -20));
      E(u(6), h.translate(-61.3, -2.4, -26).scale(3, 1, 5), n(.4, .6, .6, .3));
      E(u(7), h.translate(-57, -2.6, -29).scale(4, 1, 4), n(.8, .8, .8, .3));
      gc(h.translate(-55, -1.1, -29).rotate(0, 90));
      B(h.translate(-75, 0, -20), () => F(e => {
        e.G = 0;
        e.h = () => h.translate(0, (1 - S[5].i) * (1 - S[6].g) * 3).rotate(180 * (1 - S[5].i) + Ea, 0,);
        E(g);
      }));
      E(u(z), h.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), n(.7, .7, .7, .2),);
      E(u(3, 0, -0.5), h.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), n(.8, .8, .8, .2),);
      E(y(x(ub(r(u(z), h.translate(-100, -2.5, -20).scale(8, 1, 8), n(.8, .8, .8, .2),), r(u(z), h.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), n(.8, .8, .8, .2),), r(u(z), h.translate(-100, -2.6, -5).scale(3, 1.1, 7), n(.8, .8, .8, .2),), r(u(z), h.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), n(.8, .8, .8, .2),), r(u(6), h.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), n(.6, .6, .6, .3),), r(u(z), h.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), 
      n(.8, .8, .8, .2),), r(u(z), h.translate(-100, .42, 17).scale(3, 1.1, 4.1), n(.8, .8, .8, .2),),), r(u(8), h.translate(-100, -1, -20).scale(7, .9, 7), n(.3, .3, .3, .4),), r(u(8), h.translate(-100, -2, -20).scale(4, .3, 4), n(.4, .4, .4, .5),), r(u(8), h.translate(-100, -3, -20).scale(.6, 1, .6), n(.4, .4, .4, .5),),),), h,);
      E(y(x(r(u(z), h.translate(-100, 1, -12).scale(7.5, 4), n(.5, .5, .5, .4),), r(u(z), h.translate(-100, 0, -5).scale(2, 2, 10), n(.5, .5, .5, .4),), r(u(20, 1), h.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), n(.5, .5, .5, .4),),),),);
      B(h.translate(-99.7, -2, -11.5), () => F(e => (e.h = () => h.translate(0, 5.3 * -S[6].g), d)),);
      z.map(({x:e, z:l}) => {
        E(u(6), h.translate(7 * e - 100, -3, 7 * l - 20).scale(1, 8.1), n(.6, .15, .15, .8),);
        [4, -0.4].map(q => E(u(6), h.translate(7 * e - 100, q, 7 * l - 20).scale(1.3, .5, 1.3), n(.4, .2, .2, .8),));
      });
      k(7, e => {
        E(u((23 * e + 1) % 5 + 5, 0, .55), h.translate(5 * Math.sin(e) - 101 + e, -2.3 - e, -30.1 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3,), n(.5 - e / 17, .5 - (1 & e) / 9, .6, .3),);
      });
      E(u(z), h.translate(-87, -9.5, -51).scale(7, 1, 3), n(.4, .5, .6, .4));
      E(u(4), h.translate(-86, -9.2, -48).scale(5, 1, 5), n(.5, .6, .7, .3));
      E(u(18, 1), h.translate(-86, -9, -44).scale(1.5, 1, 1.5), n(.3, .3, .4, .1));
      gc(h.translate(-86, -7.5, -44));
      B(h.translate(-76.9, -10, -51), () => {
        F(e => {
          e.h = () => h.translate(0, 3.5 * (1 - Wa(S[6].g, S[7].g)) + Za(S[7].i, S[6].i) * Math.sin(a) * 5,);
          [0, 12, 24].map(l => E(u(z), h.translate(l, l / -13).scale(2.8, 1.5, 3), n(.2, .5, .6, .2)));
        });
        F(e => {
          e.h = () => {
            const l = Za(S[7].i, S[6].i);
            return h.translate(0, l * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + l) * l,);
          };
          [6, 18].map(l => E(u(z), h.translate(l, l / -13).scale(2.8, 1.5, 3), n(.1, .4, .5, .2),));
        });
      });
      B(h.translate(-38.9, -11.3, -58), () => {
        E(y(x(ub(r(u(z), h.scale(11, 1, 13), n(.3, .4, .6, .3)), r(u(5), h.translate(0, 0, -7).scale(2, 1.2, 2), n(.2, .4, .7, .3),), r(u(5), h.scale(9, 1.2, 9), n(0, .2, .3, .5)),), r(u(5), h.scale(5.4, 5, 5.4), n(0, .2, .3, .5)),),),);
        gc(h.translate(0, 1.7, -7));
        F(e => {
          e.h = () => h.translate(0, -7.3 * S[7].i);
          jc(h.translate(0, 11).rotate(0, 0, 10), ...kb(15).map(({x:l, z:q}) => [3 * l, 3 * q, 1.5]),);
          E(y(x(ub(r(u(5), h.translate(0, 2).scale(5, 7, 5).skewY(8), n(.2, .4, .5, .5),), r(u(5), h.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), n(.25, .35, .5, .5),), r(u(5), h.translate(0, 9).scale(.6, 7, .6).skewY(8), n(.35, .3, .5, .5),),), r(u(5), h.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), n(.2, .4, .5, .5),),),),);
        });
        z.map(({x:e, z:l}) => {
          E(u(18, 1), h.translate(9 * e, 4, 11 * l).scale(1, 4), n(.25, .25, .25, 1));
          [1.5, 8].map(q => E(u(18, 1), h.translate(9 * e, q, 11 * l).scale(1.5, .5, 1.5), n(.6, .6, .6, .3),));
        });
        E(y(x(ub(r(u(6), h.translate(0, 0, -36).scale(15, 1.2, 15), n(.7, .7, .7, .3),), r(u(z), h.translate(0, 0, -18).scale(4, 1.2, 6), n(.45, .4, .6, .3),),), ...k(6, e => k(6, l => r(u(6), h.translate(4.6 * l - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * l)).scale(2, 5, 2,), n(.7, .7, .7, .3),))).flat(),),),);
      });
      E(u(5), h.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), n(.8, .1, .25, .4),);
      gc(h.translate(-84, -0.5, 10).rotate(0, 45));
    });
    B(h.translate(-123, 1.4, 55), () => {
      F(b => {
        b.h = () => hc(-65 * Ja);
        gc(h.translate(0, -3, -4).rotate(0, 180));
        E(kc);
      });
    });
    B(h.translate(-123, 0, -12), () => {
      const b = y(x(r(u(z), h.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), n(.25, .25, .35, .3),), r(u(3), h.translate(0, 0, -5.5).scale(3, 2), n(.6, .3, .4, .3)), ...[-1.2, 1.2].map(c => r(u(z), h.translate(c, -0.5, 1).scale(.14, .3, 6.5), n(.7, .2, 0, .3),)),),);
      E(u(z), h.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), n(.8, .8, .8, .2));
      E(u(6), h.translate(7, -2.6, -4.5).scale(3.2, .8, 3), n(.6, .5, .7, .2));
      gc(h.translate(7, -1.4, -6).rotate(0, 180));
      k(3, c => {
        E(mc, h.translate(12 * c + 14, -9), n(.6, .6, .6, .3));
        E(mc, h.translate(46, -9, -12 * c - 8).rotate(0, 90), n(.6, .6, .6, .3));
      });
      E(y(x(r(u(12), h.translate(46, -13.9).scale(4, 18.2, 4), n(.7, .7, .7, .2),), r(u(z), h.translate(44).scale(3.5, 2.2, 1.3), n(.4, .5, .6, .2),), r(u(z), h.translate(46, 0, -2).scale(1.5, 2.2, 2), n(.4, .5, .6, .2),), r(u(12), h.translate(46, 2.8).scale(3, 5, 3), n(.4, .5, .6, .2)),),),);
      E(u(z), h.translate(7.5, -17).scale(.5, 15, 2.2), n(.6, .6, .6, .3));
      E(u(z), h.translate(46, -17, -38.5).scale(2.2, 15, .5), n(.6, .6, .6, .3));
      E(y(x(ub(r(u(z), h.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), r(u(z), h.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...k(4, c => r(u(z), h.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9),)), ...k(3, c => r(u(z), h.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9)),),),), h, n(.5, .5, .6, .2),);
      E(u(5), h.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), n(.25, .25, .35, 1),);
      F(c => {
        c.h = () => {
          var g = Math.sin(1.1 * a);
          return h.translate.call(h, 0, -2, Za(S[10].g, S[11].g) * (0 > g ? -g : g) * -8.5 + 10);
        };
        k(2, g => E(b, h.translate(13 + 9 * g + (1 & g), 1.7)));
      });
      F(c => {
        c.h = () => {
          var g = Math.sin(2.1 * a);
          return h.translate.call(h, 0, -2, Za(S[10].g, S[11].g) * (0 > g ? -g : g) * -8.5 + 10);
        };
        k(2, g => E(b, h.translate(13 + 9 * (g + 2) + (1 & g), 1.7)));
      });
      F(c => {
        c.h = () => {
          var g = Math.sin(1.5 * a);
          return h.translate.call(h, 0, -2, -8.5 * Wa((1 - S[10].g) * (1 - Za(S[10].g, S[11].g)), Za(S[10].g, S[11].g) * (0 > g ? -g : g),) + 10,);
        };
        k(3, g => E(b, h.translate(17 + 9 * g, 1.7)));
      });
      E(u(z), h.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), n(.6, .6, .6, .3),);
      E(y(x(r(u(z), h.translate(30, -5.8, -28).scale(9, 1, 5), n(.8, .8, .8, .1),), r(u(9), h.translate(25, -5.8, -28).scale(3, 8, 3), n(.7, .7, .7, .2),),),),);
      E(u(9), h.translate(25, -5.8, -28).scale(2.5, .9, 2.5), n(.5, .5, .5, .3));
      gc(h.translate(25, -4.4, -28).rotate(0, 90));
    });
    B(h.translate(-100, .7, 115), () => {
      const b = (E(y(x(ub(r(u(6, 0, 0, .6), h.translate(0, 0, -9.5).scale(8, 1, 11), n(.7, .7, .7, .2),), r(u(z), h.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), n(.7, .7, .7, .2),), r(u(z), h.translate(8.8, 0, -8).scale(3, 1, 3.3), n(.7, .7, .7, .2),),), r(u(5), h.translate(0, 0, -2).scale(4, 3, 4), n(.7, .7, .7, .2)),),),), k(4, c => F(g => {
        g.h = () => {
          const e = Za(S[8].i, S[12].i);
          return h.translate(2 < c ? 2 * (1 - e) + e : 0, e * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3), (1 & c ? -1 : 1) * (1 - S[8].i) * (1 - S[12].i) * -7 + (.05 > e ? .05 : e) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),);
        };
        E(u(6), h.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5), n(.5 - c / 8, c / 12 + .5, .7, .3),);
      })), B(h.translate(-39.7, -2.5, -21.5), () => {
        F(c => {
          c.h = () => {
            const g = Za(S[8].i, S[12].i);
            return h.translate(2.5 * (1 - g), -3 * (1 - S[8].g) + g * Math.sin(.8 * a) * -1,).rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
          };
          E(y(x(r(u(10), h.scale(6, 2, 6), n(.1, .6, .5, .3)), r(u(10), h.scale(3.3, 6, 3.3), n(.1, .6, .5, .5)),),),);
          B(h.translate(-7.5).rotate(0, 90), () => {
            E(u(15), h.scale(3, 2.3, 3), n(.4, .4, .4, .3));
            E(u(10), h.scale(2, 2.5, 2), n(.3, .8, .7, .3));
            E(u(5), h.scale(1, 3), n(.5, .5, .5, .5));
            gc(h.translate(0, 3.4).rotate(0, 180));
          });
          jc(h.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          [-1, 1].map(g => E(lc, h.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), n(1, 1, .8, .2),));
        });
      }), [-1, 1].map(c => {
        E(u(15, 1), h.translate(-7.5 * c, 3, -19).scale(.8, 4, .8), n(.6, .24, .2, .5),);
        [7.2, 1.5].map(g => E(u(15, 1), h.translate(-7.5 * c, g, -19).scale(1.1, .5, 1.1), n(.5, .24, .2, .4),));
        E(lc, h.translate(-5 * c, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), n(1, 1, .8),);
        E(y(x(r(u(z), h.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), n(.5, .5, .5, .4),), r(u(z), h.scale(3, 3, 10), n(.6, .24, .2, .5)), r(u(30, 1), h.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), n(.6, .24, .2, .5),), r(u(5), h.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), n(.6, .24, .2, .5),), r(u(5), h.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), n(.6, .24, .2, .5),),),), h.translate(c, 0, -18),);
      }), F(c => (c.h = () => h.translate(0, -0.1 - 6 * S[12].g, -18.5).scale(.88, 1.2), d),), [...r(u(28, 1), h.scale(8, 1, 8), n(.45, .45, .45, .2)), ...r(u(5), h.translate(0, 1).scale(1, .2), n(.3, .3, .3, .2)),]);
      B(h.translate(20, .3, -9), () => {
        F(c => {
          c.h = () => h.rotate(0, 40 + Aa);
          E(y(x(r(u(28, 1), h.scale(8, 1, 8), n(.45, .45, .45, .2)), r(u(z), h.translate(0, 0, -5.5).scale(1.5, 3, 2.5), n(.45, .45, .45, .2),),),),);
          E(u(8), h.translate(0, 2).scale(3, 1.5, 3), n(.7, .7, .7, .1));
          E(u(5), h.translate(0, 2).scale(1, 2), n(.3, .3, .3, .2));
          jc(h.translate(0, 3), ...kb(10).map(({x:g, z:e}) => [5.6 * g, 5.6 * e, 2.5]),);
        });
      });
      B(h.translate(36, .3, -9), () => {
        E(u(z), h.translate(8).scale(.7, .8, 2.5), n(.7, .7, .7, .2));
        F(c => {
          c.h = () => h.rotate(0, Da);
          E(y(x(r(u(28, 1), h.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3),), r(u(z), h.scale(9, 5, 2), n(.3, 0, 0, .3)),),),);
          E(b);
          [-1, 1].map(g => E(lc, h.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), n(1, 1, .8),));
        });
      });
      B(h.translate(52, .3, -9), () => {
        E(u(z), h.translate(0, 0, -8).scale(2.5, .8, .7), n(.7, .7, .7, .2));
        F(c => {
          c.h = () => h.rotate(0, 180 - Da);
          E(y(x(r(u(30, 1), h.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3),), r(u(z), h.translate(7).scale(9, 5, 2), n(.3, 0, 0, .3),), r(u(z), h.translate(0, 0, 7).scale(2, 5, 9), n(.3, 0, 0, .3),),),),);
          E(b);
        });
      });
      B(h.translate(52, .3, -25), () => {
        F(c => {
          c.h = () => h.rotate(0, 270 + Da);
          E(y(x(r(u(30, 1), h.translate(0, 2).scale(8, 1, 8), n(.35, 0, 0, .3),), r(u(z), h.translate(7).scale(9, 5, 2), n(.3, 0, 0, .3)), r(u(z), h.translate(0, 0, -7).scale(2, 5, 9), n(.3, 0, 0, .3),),),),);
          E(b);
        });
      });
      E(u(z), h.translate(61, -0.3, -25).scale(2, 1, 2), n(.7, .7, .7, .3));
      E(u(z), h.translate(68, -0.3, -25).scale(5, 1, 3), n(.7, .7, .7, .3));
      gc(h.translate(66, 2, -19).rotate(-12, 0));
      E(u(5), h.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), n(.2, .5, .5, .6),);
      [n(.1, .55, .45, .2), n(.2, .5, .5, .3), n(.3, .45, .55, .4)].map((c, g) => F(e => {
        e.h = () => h.translate(0, (1 - S[13].i) * (1 - S[14].i) * 3 + Za(S[13].i, S[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,);
        E(u(z), h.translate(76.5, g / 2 - 2.1, 7.5 * (1 - g / 30) * g - 25).scale(3.3, 3 - g / 2, 3.45 - g / 5,), c,);
      }));
    });
    B(h.translate(0, .9, 95), () => {
      E(u(z), h.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), n(.6, .6, .6, .2));
      E(y(x(r(u(6, 0, 0, .3), h.translate(0, -0.92).scale(14, 2, 14), n(.8, .8, .8, .2),), r(u(5), h.scale3d(6), n(.3, .3, .3, .5)),),),);
      [8, -6.1].map((b, c) => k(3, g => E(mc, h.translate(6 * g - 6, b - (1 & g), 16 - .2 * (1 & g) - c), 1 & g ? n(.5, .5, .5, .3) : n(.35, .35, .35, .5),)));
      [-1, 1].map(b => E(lc, h.translate(-8 * b, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * b + 90), n(1, 1, .8),));
      E(u(5), h.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), n(.5, .3, .3, .4),);
      gc(h.translate(0, 1.7, -13).rotate(0, 180));
      E(y(x(ub(r(u(z), h.translate(0, 16, 15.5).scale(12, 1, 3), n(.5, .3, .3, .4),), r(u(z), h.translate(0, 16, 16).scale(3, 1, 3.8), n(.5, .3, .3, .4),),), r(u(5), h.translate(0, 16, 8.5).scale(5.5, 5, 5.5), n(.5, .3, .3, .4),),),),);
      F(b => {
        b.h = () => {
          const c = Math.sin(a);
          return h.translate(-2 * c).rotate(0, 0, 25 * c);
        };
        E(u(3), h.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), n(.5, .3, .3, .4),);
        [22, 30].map(c => {
          E(u(6), h.translate(0, 16, c).scale(3, 1, 2.3).rotate(0, 90), n(.7, .7, .7, .4),);
          E(u(z), h.translate(0, 6.2, c).scale(.5, 11, .5), n(.5, .3, .3, .4));
        });
      });
      E(u(6), h.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), n(.5, .6, .7, .3),);
      E(u(z), h.translate(0, 16, 34).scale(1.5, 1, 2), n(.5, .6, .7, .3));
      E(u(7), h.translate(0, 16.2, 38).scale(5, 1, 5), n(.4, .5, .6, .4));
      F(b => {
        b.h = () => {
          let c = Za((S[14].g + S[14].i) / 2, S[13].i);
          return c = Za(c, (S[15].g + S[15].i) / 2), h.translate(0, 16 * c, 8.5 * Ya(2 * c - 1));
        };
        E(u(5), h.scale(5, 1.1, 5), n(.5, .3, .3, .4));
        E(u(5), h.scale(5.5, .9, 5.5), n(.25, .25, .25, .4));
        gc(h.translate(0, 1.5, -1).rotate(0, 180));
      });
    });
    jc(h.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    jc(h.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...kb(18).map(({x:b, z:c}) => [7 * b, 10 * c, 4.5 - 2 * (0 > b ? -b : b)]),);
    jc(h.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    jc(h.translate(-89, .2, 80), [0, 0, 6]);
    jc(h.translate(-38.9, -8.4, -21), [0, 0, 12]);
    jc(h.translate(-115, .2, -12), [0, 0, 3.5]);
    jc(h.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);
    jc(h.translate(0, 3.9, 95), ...kb(9).map(({x:b, z:c}) => [9 * b, 9 * c, 4]),);
    jc(h.translate(0, 19.9, 134), [0, 0, 3.5]);
  });
}, oc = (d, b, c, g) => {
  let e = 0, l = 0, q = 0, p = 1 / 0, t = -1 / 0, D = 1 / 0, H = -1 / 0, X = 1 / 0, ba = -1 / 0;
  const T = 1.1 * (c - b), U = (new DOMMatrix(cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, c))).multiplySelf(d).invertSelf();
  d = k(8, A => {
    A = U.transformPoint({x:4 & A ? 1 : -1, y:2 & A ? 1 : -1, z:1 & A ? 1 : -1,});
    return e -= A.x = (T * A.x | 0) / (T * A.w), l -= A.y = (T * A.y | 0) / (T * A.w), q -= A.z = (T * A.z | 0) / (T * A.w), A;
  });
  b = h.rotate(298, 139).translateSelf(e / 8, l / 8, q / 8);
  return jb(d, b).map(({x:A, y:Y, z:M}) => {
    p = p < A ? p : A;
    t = A < t ? t : A;
    D = D < Y ? D : Y;
    H = Y < H ? H : Y;
    X = X < M ? X : M;
    ba = M < ba ? ba : M;
  }), X *= 0 > X ? g : 1 / g, ba *= 0 < ba ? g : 1 / g, h.scale(2 / (t - p), 2 / (H - D), 2 / (X - ba)).translateSelf((t + p) / -2, (H + D) / -2, (X + ba) / 2,).multiplySelf(b).toFloat32Array();
}, pc = (d, b = 35633) => {
  b = W.c6x(b);
  return W.s3c(b, d), W.c6a(b), b;
}, qc = (d, b) => {
  const c = {}, g = W.c1h();
  return W.abz(g, d), W.abz(g, pc(b, 35632)), W.l8l(g), e => e ? c[e] || (c[e] = W.gan(g, e)) : W.u7y(g);
}, rc = (d, b, c) => {
  const g = e => W.d97(4, e.J, 5123, 2 * e.K);
  if (Ma) {
    W.uae(d, !1, h.rotate(0, 40 * Math.sin(pa) - 70).toFloat32Array()), g(Ta.D), Sa.map(e => e.D).map(g);
  } else {
    for (const e of vb) {
      const l = e.H, q = e.D;
      (b || e !== Ta && e !== Sa[0] && e !== Sa[1]) && q && (c && W.ube(c, l / 255), W.uae(d, !1, e.s.toFloat32Array()), g(q));
    }
  }
}, sc = new Int32Array(10725888), tc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), lc = (() => {
  const d = k(11, c => h.translate(Math.sin(c / 10 * Math.PI), c / 10).rotate(+c).scale(1.0001 - c / 10, 0, 1 - c / 10),), b = kb(18);
  return k(10, c => lb(jb(b, d[c]).reverse(), jb(b, d[c + 1]), 1),).flat();
})(), kc = y(x(r(u(20, 1, 1.15, 1), h.translate(0, -3).scale(3.5, 1, 3.5), n(.7, .4, .25, .7),), r(u(20, 1, 1.3, 1), h.translate(0, -2.5).scale(2.6, 1, 3), n(.7, .4, .25, .2),), r(u(z), h.translate(4, -1.2).scale3d(2), n(.7, .4, .25, .3)),),), mc = y(x(r(u(z), h.translate(0, -8).scale(6, 15, 2.2)), r(u(z), h.translate(0, -14.1).scale(4, 13, 4)), r(u(20, 1), h.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), wb = [h], Hb = new Int32Array(Db.buffer, 0, 4), Gb = new Float32Array(Db.buffer), Yb = 
new AudioContext(), Xb = Yb.createBufferSource(), fc = (E([z.slice(1)], h.translate(-2).scale3d(3).rotate(90, 0)), Jb(), [n(1, .5, .2), n(.7, 1, .2)].map(d => (E(u(6, 1), h.scale(.13, 1.4, .13), n(.3, .3, .5)), E(u(8), h.translate(0, 1).scale(.21, .3, .21), d), E(u(3), h.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), n(.2, .2, .2)), Jb()),)), ic = (E(mb(40, 30, (d, b, c) => {
  const g = b / 30, e = .05 * d * Math.PI, l = g ** .6 * Math.PI / 2;
  d = g * g * Math.sin(d * Math.PI * .35) / 4;
  return 29 === b ? {x:c.B = 0, y:-0.5, z:0,} : {x:Math.cos(e) * Math.sin(l), y:Math.cos(g * Math.PI) - g - d, z:Math.sin(e) * Math.sin(l) + Math.sin(d * Math.PI * 2) / 4,};
}), h.scale3d(.7), n(1, 1, 1),), [-1, 1].map(d => E(mb(15), h.translate(.16 * d, .4, -0.36).scale3d(.09))), Jb()), W = hC.getContext("webgl2");
for (const d in W) {
  W[d[0] + [...d].reduce((b, c, g) => (b * g + c.charCodeAt(0)) % 434, 0).toString(36)] = W[d];
}
setTimeout(() => {
  let d = 0, b = 6;
  const c = () => {
    if (h4.innerHTML += ".", !--b) {
      let q = 0, p = 0, t = 1, D = 0, H = 0, X = 0, ba = !1, T, U, A, Y, M, ca, J, ha, da, ea;
      const N = {x:0, y:0, z:0,}, ra = new Int32Array(256), ia = () => {
        const {j:v, I:w} = S[za], {x:I, y:C, z:K} = w.transformPoint({x:0, y:8, z:-3,});
        m.x = N.x = I;
        m.y = N.y = J = C;
        m.z = N.z = K;
        U = ca = M = A = Y = 0;
        t = 1;
        q = p = v?.H || 1;
      }, Ba = () => {
        let v = 0, w = 0, I = (NO_INLINE(() => {
          let G = 0, P = 0, ja = 0, wa = 0, xa = 0;
          ra.fill(0);
          for (let Z = 0; 31 > Z; ++Z) {
            let Fa = 0;
            const R = 512 * Z;
            for (let Ra = 0; 128 > Ra; Ra++) {
              let ta = R + 4 * Ra;
              var ua = (Ga[ta] + Ga[1 + ta]) / 255;
              if (ta = Ga[2 + ta], 14 < Ra && 114 > Ra && (Fa += ua), ta && ua) {
                ua = ra[ta] + 1, ra[ta] = ua, G > ua || (G = ua, P = ta);
              }
            }
            3 > Fa && 5 < Z && (wa += Z / 32);
            3 < Fa && (7 < Z && (ja += Z / 15), xa = 1);
          }
          P && (xa = 1);
          t ? P && (t = 0, p = P) : p = P || q;
          q = P;
          U = xa;
          A = Q(A, xa ? 6.5 : 8, 4);
          N.y += ja / 41 - (xa ? 1 : A) * wa / 41 * A * f;
        })(), NO_INLINE(() => {
          for (let xa = 32; 128 > xa; xa += 2) {
            var G = 0;
            let ua = 0;
            var P = 0;
            let Z = 0;
            const Fa = 512 * xa;
            for (let R = xa >> 1 & 1; 128 > R; R += 2) {
              var ja = Fa + 4 * R;
              const Ra = Fa + 4 * (127 - R), ta = Ga[ja] / 255, Eb = Ga[1 + Ra] / 255;
              var wa = R / 63.5 - 1;
              wa = 1 - (0 > wa ? -wa : wa);
              if (10 < R && 118 > R && (G = Wa(G, Wa(ta * wa, ta * Ga[Ra] / 127.5)), ua = Wa(ua, Wa(Eb * wa, Eb * Ga[1 + ja] / 255))), 54 > R || 74 < R) {
                ja = (1 - wa) * (Eb < ta ? ta : Eb) / 3, .001 < ja && (64 > R && ja > P ? P = ja : 64 < R && ja > Z && (Z = ja));
              }
            }
            P = Z - P;
            G = ua - G;
            (0 > P ? -P : P) > (0 > v ? -v : v) && (v = P);
            (0 > G ? -G : G) > (0 > w ? -w : w) && (w = G);
          }
        })(), (Wb[0] ? 1 : 0) + (Wb[2] ? -1 : 0) + na), C = (Wb[1] ? 1 : 0) + (Wb[3] ? -1 : 0) + oa;
        var K = navigator.getGamepads()[0];
        if (K) {
          var O = P => G[P]?.pressed || 0 < G[P]?.value;
          const G = K.buttons;
          K = K.axes;
          var V = O(1) || O(3) || O(2) || O(0);
          V !== ba && (ba = V) && (Wb[5] = 1);
          I += (.2 < Xa(-K[0]) ? -K[0] : 0) + (O(14) ? 1 : 0) + (O(15) ? -1 : 0);
          C += (.2 < Xa(-K[1]) ? -K[1] : 0) + (O(12) ? 1 : 0) + (O(13) ? -1 : 0);
          Na && (.3 < Xa(K[2]) && (Qb += 80 * K[2] * f), .3 < Xa(K[3]) && (Ob += 80 * K[3] * f));
        }
        .05 > (0 > C ? -C : C) && (C = 0);
        .05 > (0 > I ? -I : I) && (I = 0);
        O = Math.atan2(C, I);
        K = Ya(Math.hypot(C, I));
        var aa = (I = K * Math.cos(O), C = K * Math.sin(O), Ya(1 - 5 * Wa(0 > v ? -v : v, 0 > w ? -w : w)));
        V = (p || (v += M * aa * f, w += ca * aa * f), M = Q(M, 0, U ? 8 : 4), ca = Q(ca, 0, U ? 8 : 4), Y = Q(Y, U ? (I || C ? U ? 7 : 4 : 0) * aa : 0, U ? .1 < aa ? 10 : I || C ? 5 : 7 : 1,), Na ? Qb * Va : Math.PI);
        aa = Math.sin(V) * Y * f;
        var Pa = Math.cos(V) * Y * f;
        V = (v -= I * Pa - C * aa, w -= I * aa + C * Pa, p && vb[p - 1].G && vb[p - 1].s || h);
        aa = V.inverse();
        if (aa.m41 = 0, aa.m42 = 0, aa.m43 = 0, {x:v, z:w} = aa.transformPoint({x:v, z:w, w:0,}), N.x += v, N.z += w, p !== T) {
          T = p;
          const {x:G, y:P, z:ja} = V.inverse().transformPoint(m);
          N.x = G;
          N.y = P;
          N.z = ja;
        }
        aa = m.x;
        Pa = m.z;
        const {x:Fb, y:hb, z:L} = V.transformPoint(N);
        V = (m.x = Fb, m.y = hb, m.z = L, Xa(J - hb));
        J = Q(J, hb + .1, 50 * V + 5);
        p && (M = (m.x - aa) / f, ca = (m.z - Pa) / f);
        (I || C) && (D = 90 - O / Va);
        H = ab(H, D, 8 * f);
        X += (K - X) * Ya(10 * f);
      }, Oa = v => {
        requestAnimationFrame(Oa);
        var w = (v - (Qa || v)) / 1e3;
        f = Ma ? Wb[5] = 0 : .066 < w ? .066 : w;
        a += f;
        pa += w;
        Qa = v;
        if (0 < f && (W.b6o(36160, ya), W.r9r(0, 0, 128, 128, 6408, 5121, Ga), W.iay(36160, [36064]), NO_INLINE(Ba)(), Kb()), 0 < f) {
          if (ha = bb(ha, m.x, .5, f,), da = bb(da, m.y, 2, f,), ea = bb(ea, m.z, .5, f,), Na) {
            v = 200 * t, Lb = Q(Lb, m.x, 18 + v), Mb = Q(Mb, m.y + 1.5, 15 + v), Nb = Q(Nb, m.z, 18 + v), Ob = Wa(87 > Ob ? Ob : 87, -87);
          } else {
            if (Lb = bb(Lb, ha, 1, 2 * f,), Mb = bb(Mb, da + 13 + 15 * t, 4, 2 * f,), Nb = bb(Nb, ea + -18, 1, 2 * f,), v = Nb - ea, 1 < (0 > v ? -v : v)) {
              w = Lb - ha;
              const I = Mb - da;
              Qb = 270 + Math.atan2(v, w) / Va;
              Ob = 90 - Math.atan2(Math.hypot(v, w), I) / Va;
            }
          }
          if (Qb = $a(Qb), 0 < f) {
            v = Za(S[12].g, S[13].g), a > sa && (h4.innerHTML = "", sa = 0), w = Q(Ea, 0, 1), Ea = w + ($a(Ea + 60 * f) - w) * Ya(S[5].g - S[6].i), w = Q(Aa, 0, 5), Aa = w + ($a(Aa + 56 * f) - w) * (0 > v ? 0 : 1 < v ? 1 : v), w = Q(Da, 0, 4), Da = w + ($a(Da + 48 * f) - w) * (0 > v ? 0 : 1 < v ? 1 : v), v = 2 * S[9].i - 1, Ja = Q(Ja, S[9].i, .2 + .3 * (0 > v ? -v : v),), Ia = Q(Ia, Ha ? Ia + (-9 - Ia) * Ya(1.5 * f) : Ya(a / 3), 1,), 1 === S[0].l && .8 < S[0].g && (13 > qa ? (S[0].l = 0, Ha || (h4.innerHTML = 
            "Not leaving now, there are souls to catch!", sa = a + 3)) : Ha || (Ha || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", sa = a + 1 / 0), Ha = 1)), Wb[5] = 0, (-25 > m.x || 109 > m.z ? -25 : -9) > m.y && ia();
          }
        }
        v = Ma ? h.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ya(hC.clientWidth / 1e3)) : h.rotate(-Ob, -Qb, -0).invertSelf().translateSelf(-Lb, -Mb, -Nb,);
        0 < f && (va(), W.b6o(36160, ya), W.v5y(0, 0, 128, 128), W.cbf(!0, !1, !0, !1), W.c4s(16640), W.uae(va("b"), !1, h.rotate(0, 180).invertSelf().translateSelf(-m.x, -m.y, .3 - m.z,).toFloat32Array(),), rc(va("c"), 0, va("j")), W.cbf(!1, !0, !1, !1), W.c4s(16640), W.cbf(!1, !0, !0, !1), W.uae(va("b"), !1, h.translate(-m.x, -m.y, -m.z - .3).toFloat32Array(),), rc(va("c"), 0, va("j")), W.cbf(!0, !0, !0, !0), 1 === p && (S[9].l = -15 > m.x && 0 > m.z ? 1 : 0));
        qb();
        W.v5y(0, 0, 2048, 2048);
        Ca[0](oc(v, .3, 55, 10));
        Ca[1](oc(v, 55, 177, 11));
        W.b6o(36160, null);
        ka();
        W.v5y(0, 0, W.drawingBufferWidth, W.drawingBufferHeight);
        W.c4s(16640);
        W.uae(ka("a"), !1, cb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        W.uae(ka("b"), !1, v.toFloat32Array());
        W.ubu(ka("k"), Lb, Mb, Nb);
        Ca[0]();
        Ca[1]();
        rc(ka("c"), !Na);
        la();
        W.ubu(la("j"), W.drawingBufferWidth, W.drawingBufferHeight, pa);
        Ma ? W.ubu(la("k"), 0, 0, 0) : W.ubu(la("k"), Lb, Mb, Nb);
        W.uae(la("b"), !1, v.inverse().toFloat32Array());
        W.d97(4, 3, 5123, 0);
      }, Ga = new Uint8Array(65536), Pb = e;
      var l = pc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",);
      const qb = qc(pc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"), "#version 300 es\nvoid main(){}",), la = qc(pc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), va = qc(l, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",), ka = qc(l, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), ya = (la(), W.ubh(la("q"), 3), va(), W.uae(va("a"), !1, cb(1.4, .59, 1e-4, 1)), ka(), W.ubh(ka("q"), 3), W.c5w());
      l = W.c3z();
      const ib = W.c25(), Ca = k(2, v => {
        let w;
        const I = W.c25(), C = W.c5w(), K = ka(v ? "j" : "i");
        return ka(), W.ubh(ka(v ? "h" : "g"), v), W.b6o(36160, C), W.d45([0]), W.r9l(0), W.a4v(33984 + v), W.b9j(3553, I), W.fas(36160, 36096, 3553, I, 0), W.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), W.t2z(3553, 10241, 9729), W.t2z(3553, 10240, 9729), W.t2z(3553, 34893, 515), W.t2z(3553, 34892, 34894), W.t2z(3553, 10243, 33071), W.t2z(3553, 10242, 33071), O => {
          O ? (w = O, W.b6o(36160, C), W.iay(36160, [36096]), W.c4s(256), W.uae(qb("b"), !1, w), rc(qb("c"), !Na)) : W.uae(K, !1, w);
        };
      });
      W.b11(34963, W.c1b());
      W.b2v(34963, new Uint16Array(xb), 35044);
      W.b11(34962, W.c1b());
      W.b2v(34962, new Float32Array(yb), 35044);
      W.v7s(0, 3, 5126, !1, 0, 0);
      W.b11(34962, W.c1b());
      W.b2v(34962, new Int16Array(zb), 35044);
      W.v7s(1, 3, 5122, !0, 0, 0);
      W.b11(34962, W.c1b());
      W.b2v(34962, new Uint32Array(Ab), 35044);
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
      W.b6o(36160, ya);
      W.bb1(36161, l);
      W.r4v(36161, 33189, 128, 128);
      W.f8w(36160, 36096, 36161, l);
      W.a4v(33987);
      W.b9j(3553, ib);
      W.fas(36160, 36064, 3553, ib, 0);
      W.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      W.b9j(3553, W.c25());
      W.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Pb);
      W.gbn(3553);
      W.t2z(3553, 10241, 9987);
      W.t2z(3553, 10240, 9729);
      Ta.h = () => h.translate(m.x, J, m.z).rotateSelf(0, H,);
      Sa.map((v, w) => {
        v.h = () => h.translate(0, X * Ya(.45 * Math.sin(9.1 * a + Math.PI * w - Math.PI / 2)),).rotateSelf(X * Math.sin(9.1 * a + Math.PI * w) * .25 / Va, 0);
      });
      try {
        const [v, w, I, C, K] = JSON.parse(localStorage.DanteSP22,);
        S.map((O, V) => O.g = O.i = O.l = V ? 0 | v[V] : 0);
        cc.map((O, V) => O.l = 0 | w[V]);
        za = I;
        a = C;
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
  }, g = () => {
    if (5 > d) {
      var l = 0, q = d++;
      let [H, X, ba, T, U, A, Y, M, ca, J, ha, da, ea, N, ra, ia, Ba, Oa, Ga, Pb, qb] = Rb[q];
      J = J * J * 4;
      for (const la of [5513, 4562, 3891]) {
        let va = 0, ka = 0, ya, ib, Ca, v, w;
        const I = [], C = new Int32Array(768 * la), K = 2 ** (da - 9) / la, O = Math.PI * 2 ** (Ba - 8) / la, V = Ga * la & -2;
        for (let aa = 0; 11 >= aa; ++aa) {
          for (let Pa = 0, Fb = +"000001234556112341234556011111111112011111111112000001111112"[12 * q + aa]; 32 > Pa; ++Pa) {
            const hb = (32 * aa + Pa) * la;
            for (var p = 0; 4 > p; ++p) {
              if (ya = 0, Fb && (ya = qb[Fb - 1].charCodeAt(Pa + 32 * p) - 40, ya += 0 < ya ? 106 : 0), ya) {
                var t;
                if (!(t = I[ya])) {
                  t = ya;
                  let L = void 0, G = void 0;
                  var D = ya;
                  let P = 0, ja = 0;
                  const wa = 2 > q ? Ub : Sb, xa = 2 > q ? 1 > q ? Tb : Vb : Sb, ua = new Int32Array(M + ca + J);
                  for (let Z = 0, Fa = 0; M + ca + J > Z; ++Z, ++Fa) {
                    let R = 1;
                    M > Z ? R = Z / M : M + ca > Z || (R = (1 - (R = (Z - M - ca) / J)) * 3 ** (-ha / 16 * R));
                    0 > Fa || (Fa -= 4 * la, G = 0.003960 * 2 ** ((D + X - 256) / 12), L = 0.003960 * 2 ** ((D + U - 256) / 12) * (1 + (q ? 0 : 8e-4 * 9)));
                    ua[Z] = 80 * (wa(P += G * R ** (ba / 32)) * H + xa(ja += L * R ** (A / 32)) * T + (Y ? (2 * Math.random() - 1) * Y : 0)) * R | 0;
                  }
                  t = I[t] = ua;
                }
                for (let L = 0, G = 2 * hb; t.length > L; ++L, G += 2) {
                  C[G] += t[L];
                }
              }
            }
            for (let L, G = 0; la > G; ++G) {
              p = 0, t = 2 * (hb + G), ((L = C[t]) || w) && (Ca = 0.003080 * ea, 1 != q && 4 != q || (Ca *= Math.sin(K * t * Math.PI * 2) * Pb / 512 + .5), Ca = 1.5 * Math.sin(Ca), va += Ca * ka, v = (1 - N / 255) * (L - ka) - va, ka += Ca * v, L = 4 == q ? ka : 3 == q ? v : va, q || (L = 1 > (L *= 22e-5) ? -1 < L ? Math.sin(L / 4 * Math.PI * 2) : -1 : 1, L /= 22e-5), L *= ra / 32, w = 1e-5 < L * L, ib = Math.sin(O * t) * ia / 512 + .5, p = L * (1 - ib), L *= ib), V > t || (p += C[t - V + 1] * Oa / 
              255, L += C[t - V] * Oa / 255), sc[l + t] += C[t] = p, ++t, sc[l + t] += C[t] = L;
            }
          }
        }
        l += C.length;
      }
      setTimeout(g);
    } else {
      l = Yb.createBuffer(2, 5362944, 44100);
      for (q = 0; 2 > q; q++) {
        for (let H = q, X = l.getChannelData(q); 10725888 > H; H += 2) {
          X[H >> 1] = sc[H] / 65536;
        }
      }
      Xb.buffer = l;
      Xb.loop = !0;
    }
    c();
  }, e = new Image();
  e.onload = e.onerror = () => {
    c();
  };
  e.src = tc;
  setTimeout(g, 50);
  NO_INLINE(nc)();
  Ta = F(() => {
    Sa = [-1, 1].map(q => F(() => {
      E(u(10, 1), h.translate(.3 * q, -0.8).scale(.2, .7, .24), n(1, .3, .4));
    }));
    [0, 180].map(q => E(lc, h.rotate(0, q).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), n(1, 1, .8),));
    E(mb(20), h.translate(0, 1).scale(.5, .5, .5), n(1, .3, .4));
    const l = r(y(x(u(15, 1), r(u(z), h.translate(0, 0, 1).scale(2, 2, .5)),),), h.rotate(-90, 0).scale(.1, .05, .1), n(.3, .3, .3),);
    [-1, 1].map(q => E(l, h.translate(.2 * q, 1.2, .4).rotate(0, 20 * q, 20 * q)));
    E(u(z), h.translate(0, .9, .45).scale(.15, .02, .06), n(.3, .3, .3));
    E(mb(20), h.scale(.7, .8, .55), n(1, .3, .4));
  });
});

