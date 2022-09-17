let fa = 0, ma = !0, na = 0, oa = 0, pa = 0, a = 0, qa = 0, sa = 0, Aa = 0, Ba = 0, Da = 0, Ea = 0, Ha = 0, Ia = 0, Ja = 0, d = .066, Ka, Ma, Oa, Pa, Qa, Ra, Sa;
const Ta = Math.PI / 180, f = new DOMMatrix(), Va = (b, e) => e < b ? b : e, Wa = b => 0 > b ? -b : b, Xa = b => 0 > b ? 0 : 1 < b ? 1 : b, Ya = (b, e) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > e ? 0 : 1 < e ? 1 : e)), Za = b => Math.atan2(Math.sin(b *= Ta), Math.cos(b)) / Ta, $a = (b, e, l) => {
  b *= Ta;
  e = (e * Ta - b) % (2 * Math.PI);
  return (b + (2 * e % (2 * Math.PI) - e) * (0 > l ? 0 : 1 < l ? 1 : l)) / Ta;
}, ab = (b, e, l, m) => {
  var g = e - b;
  b += Math.sign(e - b) * Va(0, (0 > g ? -g : g) ** .9 - l) * m * 2;
  return b + (e - b) * Xa(m / 7);
}, n = (b, e) => Array.from(Array(b), (l, m) => e(m)), bb = (b, e, l, m,) => [b, 0, 0, 0, 0, e, 0, 0, 0, 0, (m + l) / (l - m), -1, 0, 0, 2 * m * l / (l - m), 0], cb = ({x:b, y:e, z:l}, m) => b * m.x + e * m.y + l * m.z, db = ({x:b, y:e, z:l}, m) => Math.hypot(b - m.x, e - m.y, l - m.z) || 0, eb = b => {
  let e = 0, l = 0, m = 0, g, c = b.at(-1);
  for (g of b) {
    e += (c.y - g.y) * (c.z + g.z), l += (c.z - g.z) * (c.x + g.x), m += (c.x - g.x) * (c.y + g.y), c = g;
  }
  return g = Math.hypot(e, l, m), e /= g, l /= g, m /= g, {x:e, y:l, z:m, w:e * c.x + l * c.y + m * c.z,};
}, p = (b, e, l, m = 0) => 255 * m << 24 | 255 * l << 16 | 255 * e << 8 | 255 * b, hb = (b, e, l) => (b.C = l, b.v = e, b), ib = (b, e, l = b.v) => hb(b.map(m => (({x:g, y:c, z:k}, h) => ({x:g, y:c, z:k} = h.transformPoint({x:g, y:c, z:k,}), {x:g, y:c, z:k,}))(m, e)), l, b.C,), r = (b, e, l) => b.map(m => ib(m, e, l)), jb = (b, e = 0) => n(b, l => {
  const m = Math.cos(2 * Math.PI * l / b);
  return {x:Math.sin(2 * Math.PI * l / b), y:0, z:.01 > (0 > m ? -m : m) ? m : 0 > m ? m - e : m + e,};
}), kb = (b, e, l) => b.map((m, g, {length:c}) => hb([m, e[c - g - 1], e[c - (g + 1) % c - 1], b[(g + 1) % c]], b.v, l,)), t = (b, e, l = 0, m) => {
  m = b.length ? b : jb(b, m);
  b = ib(m, f.translate(0, 1).scale3d(0 < l ? l : 1));
  l = ib(m, f.translate(0, -1).scale3d(0 > l ? -l : 1)).reverse();
  return [...kb(l, b, e), l, b];
}, lb = (b, e = b, l = (m, g) => (g *= Math.PI / e, {x:Math.cos(m *= 2 * Math.PI / b) * Math.sin(g), y:Math.cos(g), z:Math.sin(m) * Math.sin(g),})) => {
  const m = [];
  for (let g = 0; b > g; g++) {
    for (let c = 0; e > c; c++) {
      const k = hb([], 0, 1);
      m.push(k);
      k.push(l(g, c, k));
      c && k.push(l((g + 1) % b, c, k));
      e - 1 > c && k.push(l((g + 1) % b, c + 1 % e, k));
      k.push(l(g, c + 1 % e, k));
    }
  }
  return m;
}, mb = (b, e) => {
  var l, m, g, c = e.B;
  for (var k = 0; c.length > k; ++k) {
    if (-0.00008 > (g = cb(b, c[k]) - b.w) ? m = e : 8e-5 < g && (l = e), m && l) {
      m = [];
      g = [];
      c = e.B;
      k = e.A;
      let h = c.at(-1), q = cb(b, h) - b.w;
      for (const y of c) {
        l = cb(b, y) - b.w, 8e-5 > q && g.push(h), -0.00008 < q && m.push(h), (8e-5 < q && -0.00008 > l || -0.00008 > q && 8e-5 < l) && (q /= l - q, h = {x:h.x + (h.x - y.x) * q, y:h.y + (h.y - y.y) * q, z:h.z + (h.z - y.z) * q,}, m.push(h), g.push(h)), h = y, q = l;
      }
      return {o:2 < m.length && {B:hb(m, c.v, c.C), A:k, l:e,}, m:2 < g.length && {B:hb(g, c.v, c.C), A:k, l:e,},};
    }
  }
  return {o:l, m,};
}, nb = (b, e, l = eb(e.B)) => {
  if (b) {
    const {o:m, m:g} = mb(b, e);
    m || g || b.D.push(e);
    m && (b.o = nb(b.o, m, l));
    g && (b.m = nb(b.m, g, l));
  } else {
    b = {x:l.x, y:l.y, z:l.z, w:l.w, D:[e], o:0, m:0,};
  }
  return b;
}, qb = (b, e, l) => {
  const m = [], g = (c, k) => {
    let {o:h, m:q} = mb(c, k);
    h || q || (0 < l * cb(c, e) ? h = k : q = k);
    h && (c.o ? g(c.o, h) : m.push(h));
    q && c.m && g(c.m, q);
  };
  for (const c of e.D) {
    g(b, c);
  }
  return m;
}, rb = (b, e) => b && (e(b), rb(b.o, e), rb(b.m, e)), sb = b => b.length ? b.reduce((e, l) => nb(e, {B:l, A:0, l:0,}), 0) : b, tb = b => (rb(b, e => {
  const l = e.m;
  e.m = e.o;
  e.o = l;
  e.x *= -1;
  e.y *= -1;
  e.z *= -1;
  e.w *= -1;
  for (const m of e.D) {
    m.A = !m.A;
  }
}), b), ub = (...b) => b.reduce((e, l) => {
  const m = [];
  if (e = sb(e), l) {
    l = sb(l);
    rb(e, g => g.D = qb(l, g, 1));
    rb(l, g => m.push([g, qb(e, g, -1)]));
    for (const [g, c] of m) {
      for (const k of c) {
        nb(e, k, g);
      }
    }
  }
  return e;
}), u = (b, ...e) => tb(ub(tb(sb(b)), ...e)), x = b => {
  const e = new Map(), l = new Map(), m = g => {
    if (g.l) {
      const c = e.get(g.l);
      c ? (l.delete(c), g = m(g.l)) : e.set(g.l, g);
    }
    return g;
  };
  return rb(b, g => {
    for (const c of g.D) {
      l.set(m(c), c.A);
    }
  }), Array.from(l, ([{B:g}, c]) => {
    const k = g.map(({x:h, y:q, z:y}) => ({x:h, y:q, z:y,}));
    return hb(c ? k.reverse() : k, g.v, g.C);
  });
}, A = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], vb = [], B = (b, e) => {
  wb.push(wb.at(-1).multiply(b));
  e();
  wb.pop();
}, xb = [], yb = [], zb = [], Ab = [], Bb = [[]], Cb = new Map(), Fb = new Int32Array(7), Ib = b => {
  let {x:e, y:l, z:m} = Ma[b];
  Gb[0] = e;
  Gb[1] = l;
  Gb[2] = m;
  b = "" + (Ma.C ? Hb : Fb);
  let g = Cb.get(b);
  return void 0 !== g ? (e = 3 * g, zb[e] = (zb[e++] + Fb[4]) / 2, zb[e] = (zb[e++] + Fb[5]) / 2, zb[e] = (zb[e] + Fb[6]) / 2) : (Cb.set(b, g = Cb.size), yb.push(e, l, m), zb.push(Fb[4], Fb[5], Fb[6]), Ab.push(Fb[3])), g;
}, D = (b, e = f, l) => Bb.at(-1).push(...r(b, wb.at(-1).multiply(e), l)), Jb = () => {
  var b = Bb.at(-1);
  for (Ma of b) {
    const {x:e, y:l, z:m} = eb(Ma);
    Fb[3] = 0 | Ma.v;
    Fb[4] = 32767 * e;
    Fb[5] = 32767 * l;
    Fb[6] = 32767 * m;
    for (let g = 2, c = Ib(0), k = Ib(1); Ma.length > g; ++g) {
      xb.push(c, k, k = Ib(g));
    }
  }
  b.length = 0;
  b = fa;
  return {M:b, L:(fa = xb.length) - b,};
}, E = b => {
  const e = Ka, l = {I:wb.at(-1), u:f, J:vb.length + 1, s:1, G:0, H:1, l:e === vb[0] ? void 0 : e,};
  b = (Ka = l, vb.push(l), wb.push(f), Bb.push([]), b(l) || Jb());
  return l.F = b, wb.pop(), Bb.pop(), Ka = e, l;
}, Kb = () => {
  for (const e of vb) {
    var b = e.h;
    (e.u = e.l ? e.l.u.multiply(e.I) : e.I, b) && (b = b(e)) && (e.u = e.u.multiply(b));
  }
}, G = {x:-11, y:17, z:-90,};
var Lb = 0, Mb = 0;
const Ob = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 
35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 
47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Pb = b => Math.sin(b * Math.PI * 2), Qb = b => .5 > b % 1 ? 1 : -1, Rb = b => b % 1 * 2 - 1, Sb = b => {
  b = b % 1 * 4;
  return 2 > b ? b - 1 : 3 - b;
}, Tb = [], Wb = () => {
  Oa || !ma ? Ub.disconnect() : Ub.connect(Vb.destination);
  b4.innerHTML = "Music: " + ma;
}, Xb = (b = !1) => {
  if (Oa !== b) {
    Oa = b;
    Pa = 0;
    try {
      b ? document.exitPointerLock() : Ub.start();
    } catch {
    }
    document.body.className = b ? "l m" : "l";
    Wb();
  }
}, Yb = () => {
  let b = 0, e = 0, l = 0, m, g, c;
  const k = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Tb.length = na = oa = 0;
    m = g = void 0;
    document.hidden && Xb(!0);
  };
  b1.onclick = () => Xb();
  b2.onclick = () => {
    Xb();
    Pa = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    ma = !ma;
    Wb();
  };
  b5.onclick = () => Xb(!0);
  onclick = () => {
    c = 1;
    Oa || (Tb[5] = !0, Pa && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = k;
  onkeydown = onkeyup = ({code:h, target:q, type:y, repeat:z}) => {
    z || ((q = !!y[5] && q === document.body) && ("Escape" === h || "Enter" === h && Oa) ? Oa && !c || Xb(!Oa) : (h = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[h], 5 === h ? q && (Tb[h] = 1) : Tb[h] = q));
  };
  onmousemove = ({movementX:h, movementY:q}) => {
    Pa && (h || q) && (Mb += .1 * h, Lb += .1 * q);
  };
  hC.ontouchstart = h => {
    if (!Oa) {
      for (const q of h.changedTouches) {
        Pa && q.pageX > hC.clientWidth / 2 ? m || (m = q, b = Mb, e = Lb) : g = g || q;
      }
      l = pa;
    }
  };
  hC.ontouchmove = ({changedTouches:h}) => {
    if (!Oa) {
      for (const {pageX:q, pageY:y, identifier:z} of h) {
        m?.identifier === z && (Mb = b + (q - m.pageX) / 3, Lb = e + (y - m.pageY) / 3), g?.identifier === z && (na = -(q - g.pageX) / 18, oa = -(y - g.pageY) / 18, na = .35 > (0 > na ? -na : na) ? 0 : .8 * na, oa = .35 > (0 > oa ? -oa : oa) ? 0 : .8 * oa);
      }
    }
  };
  hC.ontouchend = h => {
    for (const q of h.changedTouches) {
      q.identifier === m?.identifier && (m = void 0), q.identifier === g?.identifier && (g = void 0, oa = na = 0);
    }
    h.preventDefault();
    h = pa - l;
    (!l || .02 < h && .4 > h) && (Tb[5] = !0);
  };
  oncontextmenu = () => !1;
  k();
  Xb(!0);
}, H = (b, e, l) => b + (e - b) * Xa(1 - Math.exp(-l * d)), Zb = ({j:b}) => b, N = [], $b = [], ac = () => {
  qa = $b.reduce((b, e) => b + e.j, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[qa];
}, bc = () => {
  ac();
  localStorage.DanteSP22 = JSON.stringify([N.map(Zb), $b.map(Zb), Aa, a, Ja,]);
}, T = {x:0, y:0, z:0,}, dc = b => {
  B(b, () => {
    E(e => {
      const l = {j:0, g:0, i:0, l:e.l,}, m = N.push(l) - 1;
      e.h = () => {
        const g = l.j, c = l.g, k = l.i, h = (l.K = e.u).transformPoint(), q = db(h, G);
        2.9 > db(h, T) && Tb[5] && (.3 > c || .7 < c) && (l.j = g ? 0 : 1, m && (Ha || (h4.innerHTML = "* click *", sa = a + 1)), Aa = m, bc());
        return l.g = H(c, g, 4), l.i = H(k, g, 1), e.G = 80 < db(h, G), e.s = 150 > q, e.F = cc[.5 < c ? 1 : 0], f.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
      };
    });
    D(t(5), f.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    D(t(5), f.translate(.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    D(t(A), f.translate(0, -0.4).scale(.5, .1, .5), p(.5, .5, .4));
  });
}, fc = (b, ...e) => {
  B(b, () => {
    let l = -1, m = 0, g = 1, c = 0, k = 0, h = 3, q = 0, y = 0;
    const z = {j:0,}, R = e.map(([K, U, Q]) => ({x:K, z:U, w:Q,}));
    let da = R[0], {x:X, z:Y} = da, C = X, aa = Y;
    $b.push(z);
    E(K => (K.h = () => {
      var U = 1, Q = 1 / 0;
      for (var ha of R) {
        var ea = ha.w, ia = Math.hypot(X - ha.x, Y - ha.z), O = ia - ea;
        ra ||= ia < ea;
        0 < O && Q > O && (Q = O, da = ha);
        ea = ia / ea;
        U = U < ea ? U : ea;
      }
      if (!ra) {
        Q = da.x;
        ha = da.z;
        ea = da.w;
        ia = X - Q;
        O = Y - ha;
        let wa = Math.hypot(ia, O), Ua = Math.atan2(-O, ia);
        g && (c = (Math.random() - .5) * Math.PI / 2, h = Va(1, h / (1 + Math.random())));
        Ua += c;
        l = -Math.cos(Ua);
        m = Math.sin(Ua);
        .1 < wa && (wa = (wa < ea ? wa : ea) / (wa || 1), X = ia * wa + Q, Y = O * wa + ha);
      }
      g = ra;
      h = H(h, 3 + 6 * (1 - U), 3 + U);
      X = H(X, X + l, h);
      Y = H(Y, Y + m, h);
      C = H(C, X, h);
      aa = H(aa, Y, h);
      k = $a(k, Math.atan2(C - q, aa - y) / Ta - 180, 3 * d,);
      q = C;
      y = aa;
      U = f.translate(C, 0, aa).rotateSelf(0, k).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a));
      var ra = K.u.multiply(U).transformPoint();
      K.s = 1 - z.j;
      K.G = 100 < db(ra, G);
      !z.j && 1.5 > db(ra, T) && (z.j = 1, ra = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][qa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      Q = qa && 12 > qa ? 5 : 7, Ha || (h4.innerHTML = ra, sa = a + Q), bc());
      return U;
    }, ec));
  });
}, hc = () => {
  E(() => {
    const b = g => f.translate(Math.sin(a + 2) / 5, Math.sin(.8 * a) / 3, g).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), e = x(u(r(t(A), f.translate(0, -8).scale(6, 15, 2.2)), r(t(A), f.translate(0, -14.1).scale(4, 13, 4)), r(t(20, 1), f.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), l = x(u(r(t(20, 1, 1.15, 1), f.translate(0, -3).scale(3.5, 1, 3.5), p(.7, .4, .25, .7),), r(t(20, 1, 1.3, 1), f.translate(0, -2.5).scale(2.6, 1, 3), p(.7, .4, .25, .2),), r(t(A), f.translate(4, 
    -1.2).scale3d(2), p(.7, .4, .25, .3)),),), m = (n(7, g => D(t(6, 1), f.translate(4 * (g / 6 - .5), 3).scale(.2, 3, .2), p(.3, .3, .38))), Jb());
    B(f.translate(-12, 4.2, -66), () => {
      E(g => {
        g.h = () => b(40 * Ia);
        dc(f.translate(0, -3, 4));
        D(l);
        n(13, c => {
          B(f.translate(c % 4 * 1.2 - 1.7, -2, 1.7 * (c / 4 | 0) - 5.5 + Wa(c % 4 - 2)), () => E(k => (k.h = () => {
            if (k.s = qa > 12 - c) {
              return f.translate(Math.sin(a + c) / 6, 0, Math.cos(a / 1.5 + c) / 6);
            }
          }, ec)));
        });
      });
    });
    D(t(A), f.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), p(.8, .8, .8, .2));
    fc(f.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    fc(f.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...jb(18).map(({x:g, z:c}) => [7 * g, 10 * c, 4.5 - 2 * (0 > g ? -g : g)]),);
    A.map(({x:g, z:c}) => D(t(6), f.translate(3 * g, 3, 15 * c).scale(.7, 4, .7), p(.6, .3, .3, .4)));
    [-23, 22].map(g => D(t(A), f.translate(0, 0, g).scale(3, 1, 8), p(.9, .9, .9, .2)));
    [-15, 15].map((g, c) => {
      D(t(A), f.translate(0, 6.3, g).scale(4, .3, 1), p(.3, .3, .3, .4));
      D(t(A), f.translate(0, 1, g).scale(3, .2, .35), p(.3, .3, .38, .2));
      B(f.translate(0, 0, g), () => E(k => (k.h = () => {
        const h = N[c + 1].g;
        return k.s = .99 > h, f.translate(0, 5 * -h);
      }, m)));
    });
    n(5, g => n(2, c => D(gc, f.translate(18.5 * (c - .5), 0, 4.8 * g - 9.5).rotate(0, 180 - 180 * c).scale(1.2, 10, 1.2), p(1, 1, .8, .2),)));
    D(t(A), f.translate(3, 1.5, -20).scale(.5, 2, 5), p(.7, .7, .7, .2));
    D(t(A), f.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), p(.75, .75, .75, .2),);
    D(t(5), f.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), p(.6, .3, .3, .4));
    dc(f.translate(-5.4, 1.5, -19).rotate(0, -90));
    D(t(A), f.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), p(.8, .2, .2, .5),);
    D(x(u(ub(r(t(6, 0, 0, .3), f.translate(8, -3, -4).scale(13, 1, 13), p(.7, .7, .7, .2),), r(t(6), f.translate(0, -8).scale(9, 8, 8), p(.4, .2, .5, .5)), r(t(6, 0, 0, .3), f.translate(0, -0.92).scale(13, 2, 13), p(.8, .8, .8, .2),),), r(t(5), f.scale(5, 30, 5), p(.4, .2, .6, .5)), r(t(5, 0, 1.5), f.translate(0, 1).scale(4.5, .3, 4.5), p(.7, .5, .9, .2),), r(t(A), f.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), p(.5, .5, .5, .5),), r(t(6), f.translate(15, -1.5, 4).scale(3.5, 
    1, 3.5), p(.5, .5, .5, .5),),),),);
    E(g => {
      dc(f.translate(0, 1.2));
      g.h = () => (g.s = .01 < N[3].g, f.translate(0, (5 * Math.cos(1.5 * a) + 2) * N[3].i * (1 - N[2].g) + -15 * (1 - N[3].g), 0,));
      D(t(5), f.translate(0, -0.2).scale(5, 1, 5), p(.6, .65, .7, .3));
    });
    dc(f.translate(15, -2, 4));
    B(f.translate(0, 0, 75), () => {
      const g = () => {
        var h = N[2].i, q = 1 - N[4].i;
        return h < q ? h : q;
      }, c = (h, q) => E(y => {
        y.h = () => f.translate(g() * Math.sin(3 * h + a * h) * q);
        A.map(({x:z, z:R}) => {
          D(t(11, 1), f.translate(4 * z, 4, 4 * R - 40).scale(.8, 3, .8), p(.5, .3, .7, .6),);
          D(t(A), f.translate(4 * z, 7, 4 * R - 40).scale(1, .3), p(.5, .5, .5, .3),);
        });
        D(x(u(r(t(A), f.translate(0, 0, -40).scale(5, 1, 5), p(.8, .8, .8, .3),), ...[-1, 1].map(z => r(t(A), f.translate(5 * z, .2, -40).rotate(0, 0, -30 * z).scale(4, 1, 2), p(.8, .8, .8, .3),)),),),);
        D(t(A), f.translate(0, -3, -40).scale(8, 2, 8), p(.4, .4, .4, .3));
      }), k = (c(.7, 12), B(f.translate(0, 0, 20), () => c(1, 8.2)), E(h => {
        B(f.translate(0, 0, -30), () => {
          h.h = () => f.translate(g() * Math.sin(a / 1.5 + 2) * 12);
          D(x(u(ub(r(t(A), f.scale(1.5, 1, 5), p(.9, .9, .9, .2)), r(t(6), f.scale(4, 1, 5), p(.9, .9, .9, .2)), r(t(A), f.translate(0, -2).scale(2, 3.2, 1.9), p(.3, .8, .5, .5),), r(t(16, 1, 0, 4), f.scale(1, 1, 1.5).rotate(0, 90), p(.9, .9, .9, .2),),), r(t(A), f.scale(1.3, 10, 1.3), p(.2, .7, .4, .6)),),),);
          fc(f.translate(0, 2.8), [0, 0, 4.5]);
        });
      }), E(h => {
        h.h = () => f.translate(9.8 * (1 - g()));
        D(t(3), f.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), p(.3, .6, .6, .2));
        D(t(8), f.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), p(.8, .8, .8, .2));
        D(t(A), f.translate(-23, -3, -20).scale(5.2, 1.7, 3), p(.5, .5, .5, .3));
        D(t(A), f.translate(-23, -2.2, -13).scale(3, 1, 4), p(.5, .5, .5, .3));
        dc(f.translate(-23, -0.5, -8.5));
      }), D(t(A), f.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), p(.9, .9, .9, .2)), E(h => {
        h.h = () => f.translate(0, Xa(1 - 5 * g()) * Ya(N[4].g, N[5].g) * Math.sin(1.35 * a) * 4);
        D(t(A), f.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), p(.7, .7, .7, .2),);
        D(x(u(r(t(A), f.scale(3, 1.4, 2.7)), r(t(A), f.scale(1.2, 8, 1.2)),),), f.translate(-33, -3, -20), p(.7, .7, .7, .2),);
      }), E(h => {
        h.h = () => f.translate(0, 0, Xa(1 - 5 * g()) * Ya(N[4].g, N[5].g) * Math.sin(.9 * a) * 8);
        D(x(u(r(t(A), f.translate(-27, -3, -20).scale(3, 1.4, 2.7), p(.9, .9, .9, .2),), r(t(A), f.translate(-27, -3, -20).scale(1, 3), p(.9, .9, .9, .2),),),),);
        D(t(A), f.translate(-39, -3, -20).scale(3, 1.4, 2.7), p(.9, .9, .9, .2));
      }), B(f.translate(-44.5, 0, -20), () => E(h => {
        h.h = () => f.translate(0, -6.5 * N[4].i);
        D(t(6), f.rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), p(.7, .7, .7, .4),);
      })), [...r(x(ub(r(t(A), f.translate(0, -3).scale(11, 1.4, 3), p(.9, .9, .9, .2),), u(r(t(6), f.rotate(0, 0, 90).scale(6, 8, 6), p(.3, .6, .6, .3)), r(t(4, 0, .01), f.translate(0, 6).scale(12, 2, .75).rotate(0, 45), p(.3, .6, .6, .3),), r(t(6), f.rotate(0, 0, 90).scale(5, 12, 5), p(.3, .6, .6, .3)), ...[5, 0, -5].map(h => r(t(5), f.translate(h, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), p(.3, .6, .6, .3),)),),),), f,)]);
      D(k, f.translate(-53, 0, -20));
      D(t(6), f.translate(-61.3, -2.4, -26).scale(3, 1, 5), p(.4, .6, .6, .3));
      D(t(7), f.translate(-57, -2.6, -29).scale(4, 1, 4), p(.8, .8, .8, .3));
      dc(f.translate(-55, -1.1, -29).rotate(0, 90));
      B(f.translate(-75, 0, -20), () => E(h => {
        h.H = 0;
        h.h = () => f.translate(0, (1 - N[5].i) * (1 - N[6].g) * 3).rotate(180 * (1 - N[5].i) + Ea, 0,);
        D(k);
      }));
      D(t(A), f.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), p(.7, .7, .7, .2),);
      D(t(3, 0, -0.5), f.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), p(.8, .8, .8, .2),);
      fc(f.translate(-100, .2, -20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
      D(x(u(ub(r(t(A), f.translate(-100, -2.5, -20).scale(8, 1, 8), p(.8, .8, .8, .2),), r(t(A), f.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), p(.8, .8, .8, .2),), r(t(A), f.translate(-100, -2.6, -5).scale(3, 1.1, 7), p(.8, .8, .8, .2),), r(t(A), f.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), p(.8, .8, .8, .2),), r(t(6), f.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), p(.6, .6, .6, .3),), r(t(A), f.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), 
      p(.8, .8, .8, .2),), r(t(A), f.translate(-100, .42, 17).scale(3, 1.1, 4.1), p(.8, .8, .8, .2),),), r(t(8), f.translate(-100, -1, -20).scale(7, .9, 7), p(.3, .3, .3, .4),), r(t(8), f.translate(-100, -2, -20).scale(4, .3, 4), p(.4, .4, .4, .5),), r(t(8), f.translate(-100, -3, -20).scale(.6, 1, .6), p(.4, .4, .4, .5),),),), f,);
      D(x(u(r(t(A), f.translate(-100, 1, -12).scale(7.5, 4), p(.5, .5, .5, .4),), r(t(A), f.translate(-100, 0, -5).scale(2, 2, 10), p(.5, .5, .5, .4),), r(t(20, 1), f.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), p(.5, .5, .5, .4),),),),);
      fc(f.translate(-89, .2, 5), [0, 0, 6]);
      B(f.translate(-99.7, -2, -11.5), () => E(h => (h.h = () => f.translate(0, 5.3 * -N[6].g), m),),);
      A.map(({x:h, z:q}) => {
        D(t(6), f.translate(7 * h - 100, -3, 7 * q - 20).scale(1, 8.1), p(.6, .15, .15, .8),);
        [4, -0.4].map(y => D(t(6), f.translate(7 * h - 100, y, 7 * q - 20).scale(1.3, .5, 1.3), p(.4, .2, .2, .8),));
      });
      n(7, h => {
        D(t((23 * h + 1) % 5 + 5, 0, .55), f.translate(5 * Math.sin(h) - 101 + h, -2.3 - h, -30.1 - 2.8 * h).scaleSelf(5 + h / 2, 1 + h / 6, 5 + h / 3,), p(.5 - h / 17, .5 - (1 & h) / 9, .6, .3),);
      });
      D(t(A), f.translate(-87, -9.5, -51).scale(7, 1, 3), p(.4, .5, .6, .4));
      D(t(4), f.translate(-86, -9.2, -48).scale(5, 1, 5), p(.5, .6, .7, .3));
      D(t(18, 1), f.translate(-86, -9, -44).scale(1.5, 1, 1.5), p(.3, .3, .4, .1));
      dc(f.translate(-86, -7.5, -44));
      B(f.translate(-76.9, -10, -51), () => {
        E(h => {
          h.h = () => f.translate(0, 3.5 * (1 - Va(N[6].g, N[7].g)) + Ya(N[7].i, N[6].i) * Math.sin(a) * 5,);
          [0, 12, 24].map(q => D(t(A), f.translate(q, q / -13).scale(2.8, 1.5, 3), p(.2, .5, .6, .2)));
        });
        E(h => {
          h.h = () => {
            const q = Ya(N[7].i, N[6].i);
            return f.translate(0, q * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + q) * q,);
          };
          [6, 18].map(q => D(t(A), f.translate(q, q / -13).scale(2.8, 1.5, 3), p(.1, .4, .5, .2),));
        });
      });
      B(f.translate(-38.9, -11.3, -58), () => {
        D(x(u(ub(r(t(A), f.scale(11, 1, 13), p(.3, .4, .6, .3)), r(t(5), f.translate(0, 0, -7).scale(2, 1.2, 2), p(.2, .4, .7, .3),), r(t(5), f.scale(9, 1.2, 9), p(0, .2, .3, .5)),), r(t(5), f.scale(5.4, 5, 5.4), p(0, .2, .3, .5)),),),);
        dc(f.translate(0, 1.7, -7));
        E(h => {
          h.h = () => f.translate(0, -7.3 * N[7].i);
          fc(f.translate(0, 11).rotate(0, 0, 10), ...jb(15).map(({x:q, z:y}) => [3 * q, 3 * y, 1.5]),);
          D(x(u(ub(r(t(5), f.translate(0, 2).scale(5, 7, 5).skewY(8), p(.2, .4, .5, .5),), r(t(5), f.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), p(.25, .35, .5, .5),), r(t(5), f.translate(0, 9).scale(.6, 7, .6).skewY(8), p(.35, .3, .5, .5),),), r(t(5), f.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), p(.2, .4, .5, .5),),),),);
        });
        A.map(({x:h, z:q}) => {
          D(t(18, 1), f.translate(9 * h, 4, 11 * q).scale(1, 4), p(.25, .25, .25, 1));
          [1.5, 8].map(y => D(t(18, 1), f.translate(9 * h, y, 11 * q).scale(1.5, .5, 1.5), p(.6, .6, .6, .3),));
        });
        D(x(u(ub(r(t(6), f.translate(0, 0, -36).scale(15, 1.2, 15), p(.7, .7, .7, .3),), r(t(A), f.translate(0, 0, -18).scale(4, 1.2, 6), p(.45, .4, .6, .3),),), ...n(6, h => n(6, q => r(t(6), f.translate(4.6 * q - 12 + 2 * (1 & h), 0, 4.6 * h - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2,), p(.7, .7, .7, .3),))).flat(),),),);
        fc(f.translate(0, 2.9, -38), [0, 0, 12]);
      });
      D(t(5), f.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), p(.8, .1, .25, .4),);
      dc(f.translate(-84, -0.5, 10).rotate(0, 45));
    });
    B(f.translate(-123, 1.4, 55), () => {
      E(g => {
        g.h = () => b(-65 * Ja);
        dc(f.translate(0, -3, -4).rotate(0, 180));
        D(l);
      });
    });
    B(f.translate(-123, 0, -12), () => {
      const g = x(u(r(t(A), f.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), p(.25, .25, .35, .3),), r(t(3), f.translate(0, 0, -5.5).scale(3, 2), p(.6, .3, .4, .3)), ...[-1.2, 1.2].map(c => r(t(A), f.translate(c, -0.5, 1).scale(.14, .3, 6.5), p(.7, .2, 0, .3),)),),);
      D(t(A), f.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), p(.8, .8, .8, .2));
      D(t(6), f.translate(7, -2.6, -4.5).scale(3.2, .8, 3), p(.6, .5, .7, .2));
      dc(f.translate(7, -1.4, -6).rotate(0, 180));
      fc(f.translate(8, .2), [0, 0, 3.5]);
      n(3, c => D(e, f.translate(12 * c + 14, -9), p(.6, .6, .6, .3)));
      n(3, c => D(e, f.translate(46, -9, -12 * c - 8).rotate(0, 90), p(.6, .6, .6, .3)));
      D(x(u(r(t(12), f.translate(46, -13.9).scale(4, 18.2, 4), p(.7, .7, .7, .2),), r(t(A), f.translate(44).scale(3.5, 2.2, 1.3), p(.4, .5, .6, .2),), r(t(A), f.translate(46, 0, -2).scale(1.5, 2.2, 2), p(.4, .5, .6, .2),), r(t(12), f.translate(46, 2.8).scale(3, 5, 3), p(.4, .5, .6, .2)),),),);
      D(t(A), f.translate(7.5, -17).scale(.5, 15, 2.2), p(.6, .6, .6, .3));
      D(t(A), f.translate(46, -17, -38.5).scale(2.2, 15, .5), p(.6, .6, .6, .3));
      D(x(u(ub(r(t(A), f.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), r(t(A), f.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...n(4, c => r(t(A), f.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9),)), ...n(3, c => r(t(A), f.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9)),),),), f, p(.5, .5, .6, .2),);
      D(t(5), f.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), p(.25, .25, .35, 1),);
      E(c => {
        c.h = () => {
          var k = Math.sin(1.1 * a);
          return f.translate.call(f, 0, -2, Ya(N[10].g, N[11].g) * (0 > k ? -k : k) * -8.5 + 10);
        };
        n(2, k => D(g, f.translate(13 + 9 * k + (1 & k), 1.7)));
      });
      E(c => {
        c.h = () => {
          var k = Math.sin(2.1 * a);
          return f.translate.call(f, 0, -2, Ya(N[10].g, N[11].g) * (0 > k ? -k : k) * -8.5 + 10);
        };
        n(2, k => D(g, f.translate(13 + 9 * (k + 2) + (1 & k), 1.7)));
      });
      E(c => {
        c.h = () => {
          var k = Math.sin(1.5 * a);
          return f.translate.call(f, 0, -2, -8.5 * Va((1 - N[10].g) * (1 - Ya(N[10].g, N[11].g)), Ya(N[10].g, N[11].g) * (0 > k ? -k : k),) + 10,);
        };
        n(3, k => D(g, f.translate(17 + 9 * k, 1.7)));
      });
      D(t(A), f.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), p(.6, .6, .6, .3),);
      D(x(u(r(t(A), f.translate(30, -5.8, -28).scale(9, 1, 5), p(.8, .8, .8, .1),), r(t(9), f.translate(25, -5.8, -28).scale(3, 8, 3), p(.7, .7, .7, .2),),),),);
      fc(f.translate(30, -3, -28).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);
      D(t(9), f.translate(25, -5.8, -28).scale(2.5, .9, 2.5), p(.5, .5, .5, .3));
      dc(f.translate(25, -4.4, -28).rotate(0, 90));
    });
    B(f.translate(-100, .7, 115), () => {
      const g = (D(x(u(ub(r(t(6, 0, 0, .6), f.translate(0, 0, -9.5).scale(8, 1, 11), p(.7, .7, .7, .2),), r(t(A), f.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), p(.7, .7, .7, .2),), r(t(A), f.translate(8.8, 0, -8).scale(3, 1, 3.3), p(.7, .7, .7, .2),),), r(t(5), f.translate(0, 0, -2).scale(4, 3, 4), p(.7, .7, .7, .2)),),),), n(4, c => E(k => {
        k.h = () => {
          k.s = N[1].j && N[2].j;
          const h = Ya(N[8].i, N[12].i);
          return f.translate(2 < c ? 2 * (1 - h) + h : 0, h * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3), (1 & c ? -1 : 1) * (1 - N[8].i) * (1 - N[12].i) * -7 + (.05 > h ? .05 : h) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),);
        };
        D(t(6), f.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5), p(.5 - c / 8, c / 12 + .5, .7, .3),);
      })), B(f.translate(-39.7, -2.5, -21.5), () => {
        E(c => {
          c.h = () => {
            c.s = N[1].j && N[2].j;
            const k = Ya(N[8].i, N[12].i);
            return f.translate(2.5 * (1 - k), -3 * (1 - N[8].g) + k * Math.sin(.8 * a) * -1,).rotateSelf(Math.cos(1.3 * a) * (3 * k + 3), 0);
          };
          D(x(u(r(t(10), f.scale(6, 2, 6), p(.1, .6, .5, .3)), r(t(10), f.scale(3.3, 6, 3.3), p(.1, .6, .5, .5)),),),);
          B(f.translate(-7.5).rotate(0, 90), () => {
            D(t(15), f.scale(3, 2.3, 3), p(.4, .4, .4, .3));
            D(t(10), f.scale(2, 2.5, 2), p(.3, .8, .7, .3));
            D(t(5), f.scale(1, 3), p(.5, .5, .5, .5));
            dc(f.translate(0, 3.4).rotate(0, 180));
          });
          fc(f.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          [-1, 1].map(k => D(gc, f.rotate(90 * -k, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), p(1, 1, .8, .2),));
        });
      }), [-1, 1].map(c => {
        D(t(15, 1), f.translate(-7.5 * c, 3, -19).scale(.8, 4, .8), p(.6, .24, .2, .5),);
        [7.2, 1.5].map(k => D(t(15, 1), f.translate(-7.5 * c, k, -19).scale(1.1, .5, 1.1), p(.5, .24, .2, .4),));
        D(gc, f.translate(-5 * c, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), p(1, 1, .8),);
        D(x(u(r(t(A), f.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), p(.5, .5, .5, .4),), r(t(A), f.scale(3, 3, 10), p(.6, .24, .2, .5)), r(t(30, 1), f.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), p(.6, .24, .2, .5),), r(t(5), f.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), p(.6, .24, .2, .5),), r(t(5), f.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), p(.6, .24, .2, .5),),),), f.translate(c, 0, -18),);
      }), E(c => (c.h = () => f.translate(0, -0.1 - 6 * N[12].g, -18.5).scale(.88, 1.2), m),), [...r(t(28, 1), f.scale(8, 1, 8), p(.45, .45, .45, .2)), ...r(t(5), f.translate(0, 1).scale(1, .2), p(.3, .3, .3, .2)),]);
      B(f.translate(20, .3, -9), () => {
        E(c => {
          c.h = () => f.rotate(0, 40 + Ba);
          D(x(u(r(t(28, 1), f.scale(8, 1, 8), p(.45, .45, .45, .2)), r(t(A), f.translate(0, 0, -5.5).scale(1.5, 3, 2.5), p(.45, .45, .45, .2),),),),);
          D(t(8), f.translate(0, 2).scale(3, 1.5, 3), p(.7, .7, .7, .1));
          D(t(5), f.translate(0, 2).scale(1, 2), p(.3, .3, .3, .2));
          fc(f.translate(0, 3), ...jb(10).map(({x:k, z:h}) => [5.6 * k, 5.6 * h, 2.5]),);
        });
      });
      B(f.translate(36, .3, -9), () => {
        D(t(A), f.translate(8).scale(.7, .8, 2.5), p(.7, .7, .7, .2));
        E(c => {
          c.h = () => f.rotate(0, Da);
          D(x(u(r(t(28, 1), f.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3),), r(t(A), f.scale(9, 5, 2), p(.3, 0, 0, .3)),),),);
          D(g);
          [-1, 1].map(k => D(gc, f.rotate(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), p(1, 1, .8),));
        });
      });
      B(f.translate(52, .3, -9), () => {
        D(t(A), f.translate(0, 0, -8).scale(2.5, .8, .7), p(.7, .7, .7, .2));
        E(c => {
          c.h = () => f.rotate(0, 180 - Da);
          D(x(u(r(t(30, 1), f.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3),), r(t(A), f.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3),), r(t(A), f.translate(0, 0, 7).scale(2, 5, 9), p(.3, 0, 0, .3),),),),);
          D(g);
        });
      });
      B(f.translate(52, .3, -25), () => {
        E(c => {
          c.h = () => f.rotate(0, 270 + Da);
          D(x(u(r(t(30, 1), f.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3),), r(t(A), f.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)), r(t(A), f.translate(0, 0, -7).scale(2, 5, 9), p(.3, 0, 0, .3),),),),);
          D(g);
        });
      });
      D(t(A), f.translate(61, -0.3, -25).scale(2, 1, 2), p(.7, .7, .7, .3));
      D(t(A), f.translate(68, -0.3, -25).scale(5, 1, 3), p(.7, .7, .7, .3));
      dc(f.translate(66, 2, -19).rotate(-12, 0));
      D(t(5), f.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), p(.2, .5, .5, .6),);
      [p(.1, .55, .45, .2), p(.2, .5, .5, .3), p(.3, .45, .55, .4)].map((c, k) => E(h => {
        h.h = () => f.translate(0, (1 - N[13].i) * (1 - N[14].i) * 3 + Ya(N[13].i, N[14].i) * Math.sin(1.5 * a + 1.5 * k) * 4,);
        D(t(A), f.translate(76.5, k / 2 - 2.1, 7.5 * (1 - k / 30) * k - 25).scale(3.3, 3 - k / 2, 3.45 - k / 5,), c,);
      }));
      B(f.translate(100, .2, -20), () => {
        D(t(A), f.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), p(.6, .6, .6, .2));
        D(x(u(r(t(6, 0, 0, .3), f.translate(0, -0.92).scale(14, 2, 14), p(.8, .8, .8, .2),), r(t(5), f.scale3d(6), p(.3, .3, .3, .5)),),),);
        [8, -6.1].map((c, k) => n(3, h => D(e, f.translate(6 * h - 6, c - (1 & h), 16 - .2 * (1 & h) - k), 1 & h ? p(.5, .5, .5, .3) : p(.35, .35, .35, .5),),));
        [-1, 1].map(c => D(gc, f.translate(-8 * c, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), p(1, 1, .8),));
        D(t(5), f.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), p(.5, .3, .3, .4),);
        dc(f.translate(0, 1.7, -13).rotate(0, 180));
        fc(f.translate(0, 3), ...jb(9).map(({x:c, z:k}) => [9 * c, 9 * k, 4]),);
        D(x(u(ub(r(t(A), f.translate(0, 16, 15.5).scale(12, 1, 3), p(.5, .3, .3, .4),), r(t(A), f.translate(0, 16, 16).scale(3, 1, 3.8), p(.5, .3, .3, .4),),), r(t(5), f.translate(0, 16, 8.5).scale(5.5, 5, 5.5), p(.5, .3, .3, .4),),),),);
        E(c => {
          c.h = () => {
            const k = Math.sin(a);
            return f.translate(-2 * k).rotate(0, 0, 25 * k);
          };
          D(t(3), f.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), p(.5, .3, .3, .4),);
          [22, 30].map(k => {
            D(t(6), f.translate(0, 16, k).scale(3, 1, 2.3).rotate(0, 90), p(.7, .7, .7, .4),);
            D(t(A), f.translate(0, 6.2, k).scale(.5, 11, .5), p(.5, .3, .3, .4),);
          });
        });
        D(t(6), f.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), p(.5, .6, .7, .3),);
        D(t(A), f.translate(0, 16, 34).scale(1.5, 1, 2), p(.5, .6, .7, .3));
        D(t(7), f.translate(0, 16.2, 38).scale(5, 1, 5), p(.4, .5, .6, .4));
        E(c => {
          c.h = () => {
            let k = Ya((N[14].g + N[14].i) / 2, N[13].i);
            return k = Ya(k, (N[15].g + N[15].i) / 2), f.translate(0, 16 * k, 8.5 * Xa(2 * k - 1));
          };
          D(t(5), f.scale(5, 1.1, 5), p(.5, .3, .3, .4));
          D(t(5), f.scale(5.5, .9, 5.5), p(.25, .25, .25, .4));
          dc(f.translate(0, 1.5, -1).rotate(0, 180));
        });
        fc(f.translate(0, 19, 39), [0, 0, 3.5]);
      });
    });
  });
}, ic = (b, e, l, m) => {
  let g = 0, c = 0, k = 0, h = 1 / 0, q = -1 / 0, y = 1 / 0, z = -1 / 0, R = 1 / 0, da = -1 / 0;
  const X = 1.1 * (l - e), Y = (new DOMMatrix(bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, l))).multiplySelf(b).invertSelf();
  b = n(8, C => {
    C = Y.transformPoint({x:4 & C ? 1 : -1, y:2 & C ? 1 : -1, z:1 & C ? 1 : -1,});
    return g -= C.x = (X * C.x | 0) / (X * C.w), c -= C.y = (X * C.y | 0) / (X * C.w), k -= C.z = (X * C.z | 0) / (X * C.w), C;
  });
  e = f.rotate(298, 139).translateSelf(g / 8, c / 8, k / 8);
  return ib(b, e).map(({x:C, y:aa, z:K}) => {
    h = h < C ? h : C;
    q = C < q ? q : C;
    y = y < aa ? y : aa;
    z = aa < z ? z : aa;
    R = R < K ? R : K;
    da = K < da ? da : K;
  }), R *= 0 > R ? m : 1 / m, da *= 0 < da ? m : 1 / m, f.scale(2 / (q - h), 2 / (z - y), 2 / (R - da)).translateSelf((q + h) / -2, (z + y) / -2, (R + da) / 2,).multiplySelf(e).toFloat32Array();
}, jc = (b, e = 35633) => {
  e = W.c6x(e);
  return W.s3c(e, b), W.c6a(e), e;
}, kc = (b, e) => {
  const l = {}, m = W.c1h();
  return W.abz(m, b), W.abz(m, jc(e, 35632)), W.l8l(m), g => g ? l[g] || (l[g] = W.gan(m, g)) : W.u7y(m);
}, lc = (b, e, l, m) => {
  const g = c => W.d97(4, c.L, 5123, 2 * c.M);
  if (Oa) {
    W.uae(b, !1, f.rotate(0, 40 * Math.sin(pa) - 70).toFloat32Array()), g(Sa.F), Ra.map(c => c.F).map(g);
  } else {
    for (const c of vb) {
      const k = c.J, h = c.F, q = c.s, y = c.G, z = c.l;
      !(e || c !== Sa && c !== Ra[0] && c !== Ra[1]) || l && y || !q || z && !z.s || !h || (m && W.ube(m, k / 255), W.uae(b, !1, c.u.toFloat32Array()), g(h));
    }
  }
}, mc = new Int32Array(10725888), nc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), gc = (() => {
  const b = n(11, l => f.translate(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10),), e = jb(18);
  return n(10, l => kb(ib(e, b[l]).reverse(), ib(e, b[l + 1]), 1),).flat();
})(), wb = [f], Hb = new Int32Array(Fb.buffer, 0, 4), Gb = new Float32Array(Fb.buffer), Vb = new AudioContext(), Ub = Vb.createBufferSource(), cc = (D([A.slice(1)], f.translate(-2).scale3d(3).rotate(90, 0)), Jb(), [p(1, .5, .2), p(.7, 1, .2)].map(b => (D(t(6, 1), f.scale(.13, 1.4, .13), p(.3, .3, .5)), D(t(8), f.translate(0, 1).scale(.21, .3, .21), b), D(t(3), f.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), p(.2, .2, .2)), Jb()),)), ec = (D(lb(40, 30, (b, e, l) => {
  const m = e / 30, g = .05 * b * Math.PI, c = m ** .6 * Math.PI / 2;
  b = m * m * Math.sin(b * Math.PI * .35) / 4;
  return 29 === e ? {x:l.C = 0, y:-0.5, z:0,} : {x:Math.cos(g) * Math.sin(c), y:Math.cos(m * Math.PI) - m - b, z:Math.sin(g) * Math.sin(c) + Math.sin(b * Math.PI * 2) / 4,};
}), f.scale3d(.7), p(1, 1, 1),), [-1, 1].map(b => D(lb(15), f.translate(.16 * b, .4, -0.36).scale3d(.09))), Jb()), W = hC.getContext("webgl2");
for (const b in W) {
  W[b[0] + [...b].reduce((e, l, m) => (e * m + l.charCodeAt(0)) % 434, 0).toString(36)] = W[b];
}
setTimeout(() => {
  let b = 0, e = 6;
  const l = () => {
    if (h4.innerHTML += ".", !--e) {
      let k = 0, h = 0, q = 1, y = 0, z = 0, R = 0, da = !1, X, Y, C, aa, K, U, Q, ha, ea, ia;
      const O = {x:0, y:0, z:0,}, ra = new Int32Array(256), wa = () => {
        const {l:v, K:w} = N[Aa], {x:J, y:F, z:L} = w.transformPoint({x:0, y:8, z:-3,});
        T.x = O.x = J;
        T.y = O.y = Q = F;
        T.z = O.z = L;
        Y = U = K = C = aa = 0;
        q = 1;
        k = h = v?.J || 1;
      }, Ua = () => {
        let v = 0, w = 0, J = (NO_INLINE(() => {
          let I = 0, S = 0, ja = 0, xa = 0, ya = 0;
          ra.fill(0);
          for (let ba = 0; 31 > ba; ++ba) {
            let Fa = 0;
            const V = 512 * ba;
            for (let Na = 0; 128 > Na; Na++) {
              let ta = V + 4 * Na;
              var ua = (Ga[ta] + Ga[1 + ta]) / 255;
              if (ta = Ga[2 + ta], 14 < Na && 114 > Na && (Fa += ua), ta && ua) {
                ua = ra[ta] + 1, ra[ta] = ua, I > ua || (I = ua, S = ta);
              }
            }
            3 > Fa && 5 < ba && (xa += ba / 32);
            3 < Fa && (7 < ba && (ja += ba / 15), ya = 1);
          }
          S && (ya = 1);
          q ? S && (q = 0, h = S) : h = S || k;
          k = S;
          Y = ya;
          C = H(C, ya ? 6.5 : 8, 4);
          O.y += ja / 41 - (ya ? 1 : C) * xa / 41 * C * d;
        })(), NO_INLINE(() => {
          for (let ya = 32; 128 > ya; ya += 2) {
            var I = 0;
            let ua = 0;
            var S = 0;
            let ba = 0;
            const Fa = 512 * ya;
            for (let V = ya >> 1 & 1; 128 > V; V += 2) {
              var ja = Fa + 4 * V;
              const Na = Fa + 4 * (127 - V), ta = Ga[ja] / 255, Db = Ga[1 + Na] / 255;
              var xa = V / 63.5 - 1;
              xa = 1 - (0 > xa ? -xa : xa);
              if (10 < V && 118 > V && (I = Va(I, Va(ta * xa, ta * Ga[Na] / 127.5)), ua = Va(ua, Va(Db * xa, Db * Ga[1 + ja] / 255))), 54 > V || 74 < V) {
                ja = (1 - xa) * (Db < ta ? ta : Db) / 3, .001 < ja && (64 > V && ja > S ? S = ja : 64 < V && ja > ba && (ba = ja));
              }
            }
            S = ba - S;
            I = ua - I;
            (0 > S ? -S : S) > (0 > v ? -v : v) && (v = S);
            (0 > I ? -I : I) > (0 > w ? -w : w) && (w = I);
          }
        })(), (Tb[0] ? 1 : 0) + (Tb[2] ? -1 : 0) + na), F = (Tb[1] ? 1 : 0) + (Tb[3] ? -1 : 0) + oa;
        var L = navigator.getGamepads()[0];
        if (L) {
          var P = S => I[S]?.pressed || 0 < I[S]?.value;
          const I = L.buttons;
          L = L.axes;
          var Z = P(1) || P(3) || P(2) || P(0);
          Z !== da && (da = Z) && (Tb[5] = 1);
          J += (.2 < Wa(-L[0]) ? -L[0] : 0) + (P(14) ? 1 : 0) + (P(15) ? -1 : 0);
          F += (.2 < Wa(-L[1]) ? -L[1] : 0) + (P(12) ? 1 : 0) + (P(13) ? -1 : 0);
          Pa && (.3 < Wa(L[2]) && (Mb += 80 * L[2] * d), .3 < Wa(L[3]) && (Lb += 80 * L[3] * d));
        }
        .05 > (0 > F ? -F : F) && (F = 0);
        .05 > (0 > J ? -J : J) && (J = 0);
        P = Math.atan2(F, J);
        L = Xa(Math.hypot(F, J));
        var ca = (J = L * Math.cos(P), F = L * Math.sin(P), Xa(1 - 5 * Va(0 > v ? -v : v, 0 > w ? -w : w)));
        Z = (h || (v += K * ca * d, w += U * ca * d), K = H(K, 0, Y ? 8 : 4), U = H(U, 0, Y ? 8 : 4), aa = H(aa, Y ? (J || F ? Y ? 7 : 4 : 0) * ca : 0, Y ? .1 < ca ? 10 : J || F ? 5 : 7 : 1,), Pa ? Mb * Ta : Math.PI);
        ca = Math.sin(Z) * aa * d;
        var La = Math.cos(Z) * aa * d;
        Z = (v -= J * La - F * ca, w -= J * ca + F * La, h && vb[h - 1].H && vb[h - 1].u || f);
        ca = Z.inverse();
        if (ca.m41 = 0, ca.m42 = 0, ca.m43 = 0, {x:v, z:w} = ca.transformPoint({x:v, z:w, w:0,}), O.x += v, O.z += w, h !== X) {
          X = h;
          const {x:I, y:S, z:ja} = Z.inverse().transformPoint(T);
          O.x = I;
          O.y = S;
          O.z = ja;
        }
        ca = T.x;
        La = T.z;
        const {x:Eb, y:fb, z:M} = Z.transformPoint(O);
        Z = (T.x = Eb, T.y = fb, T.z = M, Wa(Q - fb));
        Q = H(Q, fb + .1, 50 * Z + 5);
        h && (K = (T.x - ca) / d, U = (T.z - La) / d);
        (J || F) && (y = 90 - P / Ta);
        z = $a(z, y, 8 * d);
        R += (L - R) * Xa(10 * d);
      }, ob = v => {
        requestAnimationFrame(ob);
        var w = (v - (Qa || v)) / 1e3;
        d = Oa ? Tb[5] = 0 : .066 < w ? .066 : w;
        a += d;
        pa += w;
        Qa = v;
        if (0 < d && (W.b6o(36160, za), W.r9r(0, 0, 128, 128, 6408, 5121, Ga), W.iay(36160, [36064]), NO_INLINE(Ua)(), Kb()), 0 < d) {
          if (ha = ab(ha, T.x, .5, d,), ea = ab(ea, T.y, 2, d,), ia = ab(ia, T.z, .5, d,), Pa) {
            v = 200 * q, G.x = H(G.x, T.x, 18 + v), G.y = H(G.y, T.y + 1.5, 15 + v), G.z = H(G.z, T.z, 18 + v), Lb = Va(87 > Lb ? Lb : 87, -87);
          } else {
            if (G.x = ab(G.x, ha, 1, 2 * d,), G.y = ab(G.y, ea + 13 + 15 * q, 4, 2 * d,), G.z = ab(G.z, ia + -18, 1, 2 * d,), v = G.z - ia, 1 < (0 > v ? -v : v)) {
              w = G.x - ha;
              const J = G.y - ea;
              Mb = 270 + Math.atan2(v, w) / Ta;
              Lb = 90 - Math.atan2(Math.hypot(v, w), J) / Ta;
            }
          }
          if (Mb = Za(Mb), 0 < d) {
            v = Ya(N[12].g, N[13].g), a > sa && (h4.innerHTML = "", sa = 0), w = H(Ea, 0, 1), Ea = w + (Za(Ea + 60 * d) - w) * Xa(N[5].g - N[6].i), w = H(Ba, 0, 5), Ba = w + (Za(Ba + 56 * d) - w) * (0 > v ? 0 : 1 < v ? 1 : v), w = H(Da, 0, 4), Da = w + (Za(Da + 48 * d) - w) * (0 > v ? 0 : 1 < v ? 1 : v), v = 2 * N[9].i - 1, Ja = H(Ja, N[9].i, .2 + .3 * (0 > v ? -v : v),), Ia = H(Ia, Ha ? Ia + (-9 - Ia) * Xa(1.5 * d) : Xa(a / 3), 1,), 1 === N[0].j && .8 < N[0].g && (13 > qa ? (N[0].j = 0, Ha || (h4.innerHTML = 
            "Not leaving now, there are souls to catch!", sa = a + 3)) : Ha || (Ha || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", sa = a + 1 / 0), Ha = 1)), Tb[5] = 0, (-25 > T.x || 109 > T.z ? -25 : -9) > T.y && wa();
          }
        }
        v = Oa ? f.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Xa(hC.clientWidth / 1e3)) : f.rotate(-Lb, -Mb, -0).invertSelf().translateSelf(-G.x, -G.y, -G.z,);
        0 < d && (va(), W.b6o(36160, za), W.v5y(0, 0, 128, 128), W.cbf(!0, !1, !0, !1), W.c4s(16640), W.uae(va("b"), !1, f.rotate(0, 180).invertSelf().translateSelf(-T.x, -T.y, .3 - T.z,).toFloat32Array(),), lc(va("c"), 0, 1, va("j")), W.cbf(!1, !0, !1, !1), W.c4s(16640), W.cbf(!1, !0, !0, !1), W.uae(va("b"), !1, f.translate(-T.x, -T.y, -T.z - .3).toFloat32Array(),), lc(va("c"), 0, 1, va("j")), W.cbf(!0, !0, !0, !0), 1 === h && (N[9].j = -15 > T.x && 0 > T.z ? 1 : 0));
        pb();
        W.v5y(0, 0, 2048, 2048);
        Ca[0](ic(v, .3, 55, 10));
        Ca[1](ic(v, 55, 177, 11));
        W.b6o(36160, null);
        ka();
        W.v5y(0, 0, W.drawingBufferWidth, W.drawingBufferHeight);
        W.c4s(16640);
        W.uae(ka("a"), !1, bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        W.uae(ka("b"), !1, v.toFloat32Array());
        W.ubu(ka("k"), G.x, G.y, G.z);
        Ca[0]();
        Ca[1]();
        lc(ka("c"), !Pa);
        la();
        W.ubu(la("j"), W.drawingBufferWidth, W.drawingBufferHeight, pa);
        Oa ? W.ubu(la("k"), 0, 0, 0) : W.ubu(la("k"), G.x, G.y, G.z);
        W.uae(la("b"), !1, v.inverse().toFloat32Array());
        W.d97(4, 3, 5123, 0);
      }, Ga = new Uint8Array(65536), Nb = g;
      var c = jc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",);
      const pb = kc(jc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"), "#version 300 es\nvoid main(){}",), la = kc(jc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), va = kc(c, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",), ka = kc(c, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), za = (la(), W.ubh(la("q"), 3), va(), W.uae(va("a"), !1, bb(1.4, .59, 1e-4, 1)), ka(), W.ubh(ka("q"), 3), W.c5w());
      c = W.c3z();
      const gb = W.c25(), Ca = n(2, v => {
        let w;
        const J = W.c25(), F = W.c5w(), L = ka(v ? "j" : "i");
        return ka(), W.ubh(ka(v ? "h" : "g"), v), W.b6o(36160, F), W.d45([0]), W.r9l(0), W.a4v(33984 + v), W.b9j(3553, J), W.fas(36160, 36096, 3553, J, 0), W.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), W.t2z(3553, 10241, 9729), W.t2z(3553, 10240, 9729), W.t2z(3553, 34893, 515), W.t2z(3553, 34892, 34894), W.t2z(3553, 10243, 33071), W.t2z(3553, 10242, 33071), P => {
          P ? (w = P, W.b6o(36160, F), W.iay(36160, [36096]), W.c4s(256), W.uae(pb("b"), !1, w), lc(pb("c"), !Pa, 1)) : W.uae(L, !1, w);
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
      W.b6o(36160, za);
      W.bb1(36161, c);
      W.r4v(36161, 33189, 128, 128);
      W.f8w(36160, 36096, 36161, c);
      W.a4v(33987);
      W.b9j(3553, gb);
      W.fas(36160, 36064, 3553, gb, 0);
      W.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      W.b9j(3553, W.c25());
      W.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Nb);
      W.gbn(3553);
      W.t2z(3553, 10241, 9987);
      W.t2z(3553, 10240, 9729);
      Sa.h = () => f.translate(T.x, Q, T.z).rotateSelf(0, z,);
      Ra.map((v, w) => {
        v.h = () => f.translate(0, R * Xa(.45 * Math.sin(9.1 * a + Math.PI * w - Math.PI / 2)),).rotateSelf(R * Math.sin(9.1 * a + Math.PI * w) * .25 / Ta, 0);
      });
      try {
        const [v, w, J, F, L] = JSON.parse(localStorage.DanteSP22,);
        N.map((P, Z) => P.g = P.i = P.j = Z ? 0 | v[Z] : 0);
        $b.map((P, Z) => P.j = 0 | w[Z]);
        Aa = J;
        a = F;
        Ja = L;
      } catch (v) {
      }
      Ia = 0 > Aa ? 0 : 1 < Aa ? 1 : Aa;
      h4.innerHTML = "";
      sa = 0;
      ac();
      Kb();
      NO_INLINE(Yb)();
      wa();
      G.x = ha = T.x;
      G.y = (ea = T.y) + 13;
      G.z = (ia = T.z) + -18;
      requestAnimationFrame(ob);
    }
  }, m = () => {
    if (5 > b) {
      var c = 0, k = b++;
      let [z, R, da, X, Y, C, aa, K, U, Q, ha, ea, ia, O, ra, wa, Ua, ob, Ga, Nb, pb] = Ob[k];
      Q = Q * Q * 4;
      for (const la of [5513, 4562, 3891]) {
        let va = 0, ka = 0, za, gb, Ca, v, w;
        const J = [], F = new Int32Array(768 * la), L = 2 ** (ea - 9) / la, P = Math.PI * 2 ** (Ua - 8) / la, Z = Ga * la & -2;
        for (let ca = 0; 11 >= ca; ++ca) {
          for (let La = 0, Eb = +"000001234556112341234556011111111112011111111112000001111112"[12 * k + ca]; 32 > La; ++La) {
            const fb = (32 * ca + La) * la;
            for (var h = 0; 4 > h; ++h) {
              if (za = 0, Eb && (za = pb[Eb - 1].charCodeAt(La + 32 * h) - 40, za += 0 < za ? 106 : 0), za) {
                var q;
                if (!(q = J[za])) {
                  q = za;
                  let M = void 0, I = void 0;
                  var y = za;
                  let S = 0, ja = 0;
                  const xa = 2 > k ? Rb : Pb, ya = 2 > k ? 1 > k ? Qb : Sb : Pb, ua = new Int32Array(K + U + Q);
                  for (let ba = 0, Fa = 0; K + U + Q > ba; ++ba, ++Fa) {
                    let V = 1;
                    K > ba ? V = ba / K : K + U > ba || (V = (1 - (V = (ba - K - U) / Q)) * 3 ** (-ha / 16 * V));
                    0 > Fa || (Fa -= 4 * la, I = 0.003960 * 2 ** ((y + R - 256) / 12), M = 0.003960 * 2 ** ((y + Y - 256) / 12) * (1 + (k ? 0 : 8e-4 * 9)));
                    ua[ba] = 80 * (xa(S += I * V ** (da / 32)) * z + ya(ja += M * V ** (C / 32)) * X + (aa ? (2 * Math.random() - 1) * aa : 0)) * V | 0;
                  }
                  q = J[q] = ua;
                }
                for (let M = 0, I = 2 * fb; q.length > M; ++M, I += 2) {
                  F[I] += q[M];
                }
              }
            }
            for (let M, I = 0; la > I; ++I) {
              h = 0, q = 2 * (fb + I), ((M = F[q]) || w) && (Ca = 0.003080 * ia, 1 != k && 4 != k || (Ca *= Math.sin(L * q * Math.PI * 2) * Nb / 512 + .5), Ca = 1.5 * Math.sin(Ca), va += Ca * ka, v = (1 - O / 255) * (M - ka) - va, ka += Ca * v, M = 4 == k ? ka : 3 == k ? v : va, k || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5), M *= ra / 32, w = 1e-5 < M * M, gb = Math.sin(P * q) * wa / 512 + .5, h = M * (1 - gb), M *= gb), Z > q || (h += F[q - Z + 1] * ob / 
              255, M += F[q - Z] * ob / 255), mc[c + q] += F[q] = h, ++q, mc[c + q] += F[q] = M;
            }
          }
        }
        c += F.length;
      }
      setTimeout(m);
    } else {
      c = Vb.createBuffer(2, 5362944, 44100);
      for (k = 0; 2 > k; k++) {
        for (let z = k, R = c.getChannelData(k); 10725888 > z; z += 2) {
          R[z >> 1] = mc[z] / 65536;
        }
      }
      Ub.buffer = c;
      Ub.loop = !0;
    }
    l();
  }, g = new Image();
  g.onload = g.onerror = () => {
    l();
  };
  g.src = nc;
  setTimeout(m, 50);
  NO_INLINE(hc)();
  Sa = E(() => {
    Ra = [-1, 1].map(k => E(() => {
      D(t(10, 1), f.translate(.3 * k, -0.8).scale(.2, .7, .24), p(1, .3, .4));
    }));
    [0, 180].map(k => D(gc, f.rotate(0, k).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), p(1, 1, .8),));
    D(lb(20), f.translate(0, 1).scale(.5, .5, .5), p(1, .3, .4));
    const c = r(x(u(t(15, 1), r(t(A), f.translate(0, 0, 1).scale(2, 2, .5)),),), f.rotate(-90, 0).scale(.1, .05, .1), p(.3, .3, .3),);
    [-1, 1].map(k => D(c, f.translate(.2 * k, 1.2, .4).rotate(0, 20 * k, 20 * k)));
    D(t(A), f.translate(0, .9, .45).scale(.15, .02, .06), p(.3, .3, .3));
    D(lb(20), f.scale(.7, .8, .55), p(1, .3, .4));
  });
});

