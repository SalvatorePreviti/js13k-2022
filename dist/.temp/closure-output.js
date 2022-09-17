let ba = 0, fa = !0, ma = 0, na = 0, oa = 0, a = 0, pa = 0, qa = 0, sa = 0, za = 0, Aa = 0, Da = 0, Ea = 0, Ha = 0, Ia = 0, f = .066, Ja, Ka, La, Ma, Na, Qa, Sa, Ta, Ua, Va, Wa, Xa;
const Ya = Math.PI / 180, g = new DOMMatrix(), Za = (b, e) => e < b ? b : e, $a = b => 0 > b ? -b : b, ab = b => 0 > b ? 0 : 1 < b ? 1 : b, bb = (b, e) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > e ? 0 : 1 < e ? 1 : e)), cb = b => Math.atan2(Math.sin(b *= Ya), Math.cos(b)) / Ya, db = (b, e, h) => {
  b *= Ya;
  e = (e * Ya - b) % (2 * Math.PI);
  return (b + (2 * e % (2 * Math.PI) - e) * (0 > h ? 0 : 1 < h ? 1 : h)) / Ya;
}, eb = (b, e, h, l) => {
  var c = e - b;
  b += Math.sign(e - b) * Za(0, (0 > c ? -c : c) ** .9 - h) * l * 2;
  return b + (e - b) * ab(l / 7);
}, m = (b, e) => Array.from(Array(b), (h, l) => e(l)), fb = (b, e, h, l,) => [b, 0, 0, 0, 0, e, 0, 0, 0, 0, (l + h) / (h - l), -1, 0, 0, 2 * l * h / (h - l), 0], gb = ({x:b, y:e, z:h}, l) => b * l.x + e * l.y + h * l.z, jb = ({x:b, y:e, z:h}) => {
  var l = n;
  return Math.hypot(b - l.x, e - l.y, h - l.z) || 0;
}, kb = b => {
  let e = 0, h = 0, l = 0, c, d = b.at(-1);
  for (c of b) {
    e += (d.y - c.y) * (d.z + c.z), h += (d.z - c.z) * (d.x + c.x), l += (d.x - c.x) * (d.y + c.y), d = c;
  }
  return c = Math.hypot(e, h, l), e /= c, h /= c, l /= c, {x:e, y:h, z:l, w:e * d.x + h * d.y + l * d.z,};
}, p = (b, e, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * e << 8 | 255 * b, lb = (b, e, h) => (b.B = h, b.u = e, b), mb = (b, e, h = b.u) => lb(b.map(l => (({x:c, y:d, z:k}, q) => ({x:c, y:d, z:k} = q.transformPoint({x:c, y:d, z:k,}), {x:c, y:d, z:k,}))(l, e)), h, b.B,), r = (b, e, h) => b.map(l => mb(l, e, h)), nb = (b, e = 0) => m(b, h => {
  const l = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:.01 > (0 > l ? -l : l) ? l : 0 > l ? l - e : l + e,};
}), ob = (b, e, h) => b.map((l, c, {length:d}) => lb([l, e[d - c - 1], e[d - (c + 1) % d - 1], b[(c + 1) % d]], b.u, h,)), u = (b, e, h = 0, l) => {
  l = b.length ? b : nb(b, l);
  b = mb(l, g.translate(0, 1).scale3d(0 < h ? h : 1));
  h = mb(l, g.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse();
  return [...ob(h, b, e), h, b];
}, pb = (b, e = b, h = (l, c) => (c *= Math.PI / e, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(c), y:Math.cos(c), z:Math.sin(l) * Math.sin(c),})) => {
  const l = [];
  for (let c = 0; b > c; c++) {
    for (let d = 0; e > d; d++) {
      const k = lb([], 0, 1);
      l.push(k);
      k.push(h(c, d, k));
      d && k.push(h((c + 1) % b, d, k));
      e - 1 > d && k.push(h((c + 1) % b, d + 1 % e, k));
      k.push(h(c, d + 1 % e, k));
    }
  }
  return l;
}, rb = (b, e) => {
  var h, l, c, d = e.A;
  for (var k = 0; d.length > k; ++k) {
    if (-0.00008 > (c = gb(b, d[k]) - b.w) ? l = e : 8e-5 < c && (h = e), l && h) {
      l = [];
      c = [];
      d = e.A;
      k = e.v;
      let q = d.at(-1), t = gb(b, q) - b.w;
      for (const B of d) {
        h = gb(b, B) - b.w, 8e-5 > t && c.push(q), -0.00008 < t && l.push(q), (8e-5 < t && -0.00008 > h || -0.00008 > t && 8e-5 < h) && (t /= h - t, q = {x:q.x + (q.x - B.x) * t, y:q.y + (q.y - B.y) * t, z:q.z + (q.z - B.z) * t,}, l.push(q), c.push(q)), q = B, t = h;
      }
      return {o:2 < l.length && {A:lb(l, d.u, d.B), v:k, j:e,}, m:2 < c.length && {A:lb(c, d.u, d.B), v:k, j:e,},};
    }
  }
  return {o:h, m:l,};
}, sb = (b, e, h = kb(e.A)) => {
  if (b) {
    const {o:l, m:c} = rb(b, e);
    l || c || b.C.push(e);
    l && (b.o = sb(b.o, l, h));
    c && (b.m = sb(b.m, c, h));
  } else {
    b = {x:h.x, y:h.y, z:h.z, w:h.w, C:[e], o:0, m:0,};
  }
  return b;
}, tb = (b, e, h) => {
  const l = [], c = (d, k) => {
    let {o:q, m:t} = rb(d, k);
    q || t || (0 < h * gb(d, e) ? q = k : t = k);
    q && (d.o ? c(d.o, q) : l.push(q));
    t && d.m && c(d.m, t);
  };
  for (const d of e.C) {
    c(b, d);
  }
  return l;
}, ub = (b, e) => b && (e(b), ub(b.o, e), ub(b.m, e)), vb = b => b.length ? b.reduce((e, h) => sb(e, {A:h, v:0, j:0,}), 0) : b, wb = b => (ub(b, e => {
  const h = e.m;
  e.m = e.o;
  e.o = h;
  e.x *= -1;
  e.y *= -1;
  e.z *= -1;
  e.w *= -1;
  for (const l of e.C) {
    l.v = !l.v;
  }
}), b), xb = (...b) => b.reduce((e, h) => {
  const l = [];
  if (e = vb(e), h) {
    h = vb(h);
    ub(e, c => c.C = tb(h, c, 1));
    ub(h, c => l.push([c, tb(e, c, -1)]));
    for (const [c, d] of l) {
      for (const k of d) {
        sb(e, k, c);
      }
    }
  }
  return e;
}), x = (b, ...e) => wb(xb(wb(vb(b)), ...e)), y = b => {
  const e = new Map(), h = new Map(), l = c => {
    if (c.j) {
      const d = e.get(c.j);
      d ? (h.delete(d), c = l(c.j)) : e.set(c.j, c);
    }
    return c;
  };
  return ub(b, c => {
    for (const d of c.C) {
      h.set(l(d), d.v);
    }
  }), Array.from(h, ([{A:c}, d]) => {
    const k = c.map(({x:q, y:t, z:B}) => ({x:q, y:t, z:B,}));
    return lb(d ? k.reverse() : k, c.u, c.B);
  });
}, z = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], yb = [], Ab = (b, e) => {
  zb.push(zb.at(-1).multiply(b));
  b = e();
  return zb.pop(), b;
}, Bb = [], Cb = [], Db = [], Gb = [], Hb = [[]], Ib = new Map(), Jb = new Int32Array(7), Mb = b => {
  let {x:e, y:h, z:l} = Ka[b];
  Kb[0] = e;
  Kb[1] = h;
  Kb[2] = l;
  b = "" + (Ka.B ? Lb : Jb);
  let c = Ib.get(b);
  return void 0 !== c ? (e = 3 * c, Db[e] = (Db[e++] + Jb[4]) / 2, Db[e] = (Db[e++] + Jb[5]) / 2, Db[e] = (Db[e] + Jb[6]) / 2) : (Ib.set(b, c = Ib.size), Cb.push(e, h, l), Db.push(Jb[4], Jb[5], Jb[6]), Gb.push(Jb[3])), c;
}, C = (b, e = g, h) => Hb.at(-1).push(...r(b, zb.at(-1).multiply(e), h)), Nb = () => {
  var b = Hb.at(-1);
  for (Ka of b) {
    const {x:e, y:h, z:l} = kb(Ka);
    Jb[3] = 0 | Ka.u;
    Jb[4] = 32767 * e;
    Jb[5] = 32767 * h;
    Jb[6] = 32767 * l;
    for (let c = 2, d = Mb(0), k = Mb(1); Ka.length > c; ++c) {
      Bb.push(d, k, k = Mb(c));
    }
  }
  b.length = 0;
  b = ba;
  return {K:b, J:(ba = Bb.length) - b,};
}, E = b => {
  const e = Ja, h = {F:zb.at(-1), s:g, H:yb.length + 1, G:1, j:e === yb[0] ? void 0 : e,};
  b = (Ja = h, yb.push(h), zb.push(g), Hb.push([]), b(h) || Nb());
  return h.D = b, zb.pop(), Hb.pop(), Ja = e, h;
}, Ob = () => {
  for (const e of yb) {
    var b = e.h;
    (e.s = e.j ? e.j.s.multiply(e.F) : e.F, b) && (b = b(e)) && (e.s = e.s.multiply(b));
  }
};
var Qb = -11, Rb = 17, Sb = -90, Tb = 0, Ub = 0;
const Vb = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 
35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 
47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Wb = b => Math.sin(b * Math.PI * 2), Xb = b => .5 > b % 1 ? 1 : -1, Yb = b => b % 1 * 2 - 1, Zb = b => {
  b = b % 1 * 4;
  return 2 > b ? b - 1 : 3 - b;
}, $b = [], cc = () => {
  La || !fa ? ac.disconnect() : ac.connect(bc.destination);
  b4.innerHTML = "Music: " + fa;
}, dc = (b = !1) => {
  if (La !== b) {
    La = b;
    Ma = 0;
    try {
      b ? document.exitPointerLock() : ac.start();
    } catch {
    }
    document.body.className = b ? "l m" : "l";
    cc();
  }
}, ec = () => {
  let b = 0, e = 0, h = 0, l, c, d;
  const k = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    $b.length = ma = na = 0;
    l = c = void 0;
    document.hidden && dc(!0);
  };
  b1.onclick = () => dc();
  b2.onclick = () => {
    dc();
    Ma = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    fa = !fa;
    cc();
  };
  b5.onclick = () => dc(!0);
  onclick = () => {
    d = 1;
    La || ($b[5] = !0, Ma && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = k;
  onkeydown = onkeyup = ({code:q, target:t, type:B, repeat:H}) => {
    H || ((t = !!B[5] && t === document.body) && ("Escape" === q || "Enter" === q && La) ? La && !d || dc(!La) : (q = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[q], 5 === q ? t && ($b[q] = 1) : $b[q] = t));
  };
  onmousemove = ({movementX:q, movementY:t}) => {
    Ma && (q || t) && (Ub += .1 * q, Tb += .1 * t);
  };
  hC.ontouchstart = q => {
    if (!La) {
      for (const t of q.changedTouches) {
        Ma && t.pageX > hC.clientWidth / 2 ? l || (l = t, b = Ub, e = Tb) : c = c || t;
      }
      h = oa;
    }
  };
  hC.ontouchmove = ({changedTouches:q}) => {
    if (!La) {
      for (const {pageX:t, pageY:B, identifier:H} of q) {
        l?.identifier === H && (Ub = b + (t - l.pageX) / 3, Tb = e + (B - l.pageY) / 3), c?.identifier === H && (ma = -(t - c.pageX) / 18, na = -(B - c.pageY) / 18, ma = .35 > (0 > ma ? -ma : ma) ? 0 : .8 * ma, na = .35 > (0 > na ? -na : na) ? 0 : .8 * na);
      }
    }
  };
  hC.ontouchend = q => {
    for (const t of q.changedTouches) {
      t.identifier === l?.identifier && (l = void 0), t.identifier === c?.identifier && (c = void 0, na = ma = 0);
    }
    q.preventDefault();
    q = oa - h;
    (!h || .02 < q && .4 > q) && ($b[5] = !0);
  };
  oncontextmenu = () => !1;
  k();
  dc(!0);
}, F = (b, e, h) => b + (e - b) * ab(1 - Math.exp(-h * f)), fc = ({l:b}) => b, R = [], gc = [], hc = () => {
  pa = gc.reduce((b, e) => b + e.l, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[pa];
}, ic = () => {
  hc();
  localStorage.DanteSP22 = JSON.stringify([R.map(fc), gc.map(fc), sa, a, Ia,]);
}, n = {x:0, y:0, z:0,}, kc = b => {
  Ab(b, () => {
    E(e => {
      const h = {l:0, g:0, i:0, j:e.j,}, l = R.push(h) - 1;
      e.h = () => {
        const c = h.l, d = h.g, k = h.i, q = (h.I = e.s).transformPoint();
        2.9 > jb(q) && $b[5] && (.3 > d || .7 < d) && (h.l = c ? 0 : 1, l && (Ea || (h4.innerHTML = "* click *", qa = a + 1)), sa = l, ic());
        return h.g = F(d, c, 4), h.i = F(k, c, 1), e.D = jc[.5 < d ? 1 : 0], g.rotate(60 * h.g - 30, 0).translateSelf(0, 1);
      };
    });
    C(u(5), g.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    C(u(5), g.translate(.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
    C(u(z), g.translate(0, -0.4).scale(.5, .1, .5), p(.5, .5, .4));
  });
}, lc = b => g.translate(Math.sin(a + 2) / 5, Math.sin(.8 * a) / 3, b).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), nc = (b, ...e) => Ab(b, () => {
  let h = -1, l = 0, c = 1, d = 0, k = 0, q = 3, t = 0, B = 0;
  const H = {l:0,}, W = e.map(([ca, J, ha]) => ({x:ca, z:J, w:ha,}));
  let aa = W[0], {x:S, z:T} = aa, A = S, X = T;
  const M = gc.push(H) - 1;
  return E(ca => (ca.h = () => {
    if (!H.l) {
      var J = 1;
      var ha = 1 / 0;
      for (var da of W) {
        var ea = da.w, N = Math.hypot(S - da.x, T - da.z), ra = N - ea;
        ia ||= N < ea;
        0 < ra && ha > ra && (ha = ra, aa = da);
        ea = N / ea;
        J = J < ea ? J : ea;
      }
      if (!ia) {
        da = aa.x;
        ha = aa.z;
        ea = aa.w;
        N = S - da;
        ra = T - ha;
        let Ba = Math.hypot(N, ra), Oa = Math.atan2(-ra, N);
        c && (d = (Math.random() - .5) * Math.PI / 2, q = Za(1, q / (1 + Math.random())));
        Oa += d;
        h = -Math.cos(Oa);
        l = Math.sin(Oa);
        .1 < Ba && (Ba = (Ba < ea ? Ba : ea) / (Ba || 1), S = N * Ba + da, T = ra * Ba + ha);
      }
      c = ia;
      q = F(q, 3 + 6 * (1 - J), 3 + J);
      S = F(S, S + h, q);
      T = F(T, T + l, q);
      A = F(A, S, q);
      X = F(X, T, q);
      k = db(k, Math.atan2(A - t, X - B) / Ya - 180, 3 * f,);
      t = A;
      B = X;
      J = g.translate(A, 0, X).rotateSelf(0, k).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a));
      var ia = ca.s.multiply(J).transformPoint();
      1.5 > jb(ia) && (H.l = 1, ia = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][pa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', da = pa && 
      12 > pa ? 5 : 7, Ea || (h4.innerHTML = ia, qa = a + da), ic());
    }
    H.l && (ca.j = Ta, ca.F = g, ia = M % 4 - 2, J = g.translate(M % 4 * 1.2 - 1.7 + Math.sin(a + M) / 6, -2, 1.7 * (M / 4 | 0) - 5.5 + (0 > ia ? -ia : ia) + Math.cos(a / 1.5 + M) / 6,));
    return J;
  }, mc));
}), rc = () => {
  E(() => {
    const b = () => {
      var c = R[2].i, d = 1 - R[4].i;
      return c < d ? c : d;
    }, e = (c, d, k) => E(q => {
      q.h = () => g.translate(b() * Math.sin(3 * c + a * c) * d);
      z.map(({x:t, z:B}) => {
        C(u(11, 1), g.translate(4 * t, 4, k + 4 * B).scale(.8, 3, .8), p(.5, .3, .7, .6),);
        C(u(z), g.translate(4 * t, 7, k + 4 * B).scale(1, .3), p(.5, .5, .5, .3));
      });
      C(y(x(r(u(z), g.translate(0, 0, k).scale(5, 1, 5), p(.8, .8, .8, .3),), ...[-1, 1].map(t => r(u(z), g.translate(5 * t, .2, k).rotate(0, 0, -30 * t).scale(4, 1, 2), p(.8, .8, .8, .3),)),),),);
      C(u(z), g.translate(0, -3, k).scale(8, 2, 8), p(.4, .4, .4, .3));
    }), h = (Ta = Ab(g.translate(-12, 4.2, -66), () => E(c => {
      c.h = () => lc(40 * Ha);
      kc(g.translate(0, -3, 4));
      C(oc);
    })), m(7, c => C(u(6, 1), g.translate(4 * (c / 6 - .5), 3).scale(.2, 3, .2), p(.3, .3, .38)),), Nb()), l = (C(u(z), g.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), p(.8, .8, .8, .2),), z.map(({x:c, z:d}) => C(u(6), g.translate(3 * c, 3, 15 * d).scale(.7, 4, .7), p(.6, .3, .3, .4))), [-23, 22].map(c => C(u(z), g.translate(0, 0, c).scale(3, 1, 8), p(.9, .9, .9, .2))), [-15, 15].map((c, d) => {
      C(u(z), g.translate(0, 6.3, c).scale(4, .3, 1), p(.3, .3, .3, .4));
      C(u(z), g.translate(0, 1, c).scale(3, .2, .35), p(.5, .5, .5, .3));
      E(k => (k.h = () => g.translate(0, 4.7 * -R[d + 1].g, c), h));
    }), m(5, c => m(2, d => C(pc, g.translate(18.5 * (d - .5), 0, 4.8 * c - 9.5).rotate(0, 180 - 180 * d).scale(1.2, 10, 1.2), p(1, 1, .8, .2),))), C(u(z), g.translate(3, 1.5, -20).scale(.5, 2, 5), p(.7, .7, .7, .2)), C(u(z), g.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), p(.75, .75, .75, .2),), C(u(5), g.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), p(.6, .3, .3, .4)), kc(g.translate(-5.4, 1.5, -19).rotate(0, -90)), C(u(z), g.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 
    0, -30).scale(4, .6, 4.5), p(.8, .2, .2, .5),), C(y(x(xb(r(u(6, 0, 0, .3), g.translate(8, -3, -4).scale(13, 1, 13), p(.7, .7, .7, .2),), r(u(6), g.translate(0, -8).scale(9, 8, 8), p(.4, .2, .5, .5)), r(u(6, 0, 0, .3), g.translate(0, -0.92).scale(13, 2, 13), p(.8, .8, .8, .2),),), r(u(5), g.scale(5, 30, 5), p(.4, .2, .6, .5)), r(u(5, 0, 1.5), g.translate(0, 1).scale(4.5, .3, 4.5), p(.7, .5, .9, .2),), r(u(z), g.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), p(.5, .5, .5, 
    .5),), r(u(6), g.translate(15, -1.5, 4).scale(3.5, 1, 3.5), p(.5, .5, .5, .5),),),),), E(c => {
      c.h = () => g.translate(0, .01 < R[3].g ? (5 * Math.cos(1.5 * a) + 2) * R[3].i * (1 - R[2].g) + -15 * (1 - R[3].g) : -500, 0,);
      kc(g.translate(0, 1.2));
      C(u(5), g.translate(0, -0.2).scale(5, 1, 5), p(.6, .65, .7, .3));
    }), kc(g.translate(15, -2, 4)), e(.7, 12, 35), e(1, 8.2, 55), Ua = E(c => {
      c.h = () => g.translate(b() * Math.sin(a / 1.5 + 2) * 12);
      C(y(x(xb(r(u(z), g.scale(1.5, 1, 5), p(.9, .9, .9, .2)), r(u(6), g.scale(4, 1, 5), p(.9, .9, .9, .2)), r(u(z), g.translate(0, -2).scale(2, 3.2, 1.9), p(.3, .8, .5, .5),), r(u(16, 1, 0, 4), g.scale(1, 1, 1.5).rotate(0, 90), p(.9, .9, .9, .2),),), r(u(z), g.scale(1.3, 10, 1.3), p(.2, .7, .4, .6)),),), g.translate(0, 0, 45),);
    }), E(c => {
      c.h = () => g.translate(9.8 * (1 - b()));
      C(u(3), g.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), p(.3, .6, .6, .2));
      C(u(8), g.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), p(.8, .8, .8, .2));
      C(u(z), g.translate(-23, -3, 55).scale(5.2, 1.7, 3), p(.5, .5, .5, .3));
      C(u(z), g.translate(-23, -2.2, 62).scale(3, 1, 4), p(.5, .5, .5, .3));
      kc(g.translate(-23, -0.5, 66.5));
    }), C(u(z), g.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), p(.9, .9, .9, .2)), E(c => {
      c.h = () => g.translate(0, ab(1 - 5 * b()) * bb(R[4].g, R[5].g) * Math.sin(1.35 * a) * 4);
      C(u(z), g.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), p(.7, .7, .7, .2),);
      C(y(x(r(u(z), g.scale(3, 1.4, 2.7)), r(u(z), g.scale(1.2, 8, 1.2)),),), g.translate(-33, -3, 55), p(.7, .7, .7, .2),);
    }), E(c => {
      c.h = () => g.translate(0, 0, ab(1 - 5 * b()) * bb(R[4].g, R[5].g) * Math.sin(.9 * a) * 8);
      C(y(x(r(u(z), g.translate(-27, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2),), r(u(z), g.translate(-27, -3, 55).scale(1, 3), p(.9, .9, .9, .2),),),),);
      C(u(z), g.translate(-39, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2));
    }), E(c => {
      c.h = () => g.translate(0, -6.5 * R[4].i);
      C(u(6), g.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), p(.7, .7, .7, .4),);
    }), [...r(y(xb(r(u(z), g.translate(0, -3).scale(11, 1.4, 3), p(.9, .9, .9, .2),), x(r(u(6), g.rotate(0, 0, 90).scale(6, 8, 6), p(.3, .6, .6, .3)), r(u(4, 0, .01), g.translate(0, 6).scale(12, 2, .75).rotate(0, 45), p(.3, .6, .6, .3),), r(u(6), g.rotate(0, 0, 90).scale(5, 12, 5), p(.3, .6, .6, .3)), ...[5, 0, -5].map(c => r(u(5), g.translate(c, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), p(.3, .6, .6, .3),)),),),), g,)]);
    C(l, g.translate(-53, 0, 55));
    C(u(6), g.translate(-61.3, -2.4, 49).scale(3, 1, 5), p(.4, .6, .6, .3));
    C(u(7), g.translate(-57, -2.6, 46).scale(4, 1, 4), p(.8, .8, .8, .3));
    kc(g.translate(-55, -1.1, 46).rotate(0, 90));
    Ab(g.translate(-75, 0, 55), () => E(c => {
      c.G = 0;
      c.h = () => g.translate(0, (1 - R[5].i) * (1 - R[6].g) * 3).rotate(180 * (1 - R[5].i) + Da, 0,);
      C(l);
    }));
    C(u(z), g.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), p(.7, .7, .7, .2),);
    C(u(3, 0, -0.5), g.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), p(.8, .8, .8, .2),);
    C(y(x(xb(r(u(z), g.translate(-100, -2.5, 55).scale(8, 1, 8), p(.8, .8, .8, .2),), r(u(z), g.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), p(.8, .8, .8, .2),), r(u(z), g.translate(-100, -2.6, 70).scale(3, 1.1, 7), p(.8, .8, .8, .2),), r(u(z), g.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), p(.8, .8, .8, .2),), r(u(6), g.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), p(.6, .6, .6, .3),), r(u(z), g.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), 
    p(.8, .8, .8, .2),), r(u(z), g.translate(-100, .42, 92).scale(3, 1.1, 4.1), p(.8, .8, .8, .2),),), r(u(8), g.translate(-100, -1, 55).scale(7, .9, 7), p(.3, .3, .3, .4)), r(u(8), g.translate(-100, -2, 55).scale(4, .3, 4), p(.4, .4, .4, .5)), r(u(8), g.translate(-100, -3, 55).scale(.6, 1, .6), p(.4, .4, .4, .5),),),), g,);
    C(y(x(r(u(z), g.translate(-100, 1, 63).scale(7.5, 4), p(.5, .5, .5, .4),), r(u(z), g.translate(-100, 0, 70).scale(2, 2, 10), p(.5, .5, .5, .4),), r(u(20, 1), g.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), p(.5, .5, .5, .4),),),),);
    Ab(g.translate(-99.7, -2, 63.5), () => E(c => (c.h = () => g.translate(0, 5.3 * -R[6].g), h)),);
    z.map(({x:c, z:d}) => {
      C(u(6), g.translate(7 * c - 100, -3, 7 * d + 55).scale(1, 8.1), p(.6, .15, .15, .8));
      [4, -0.4].map(k => C(u(6), g.translate(7 * c - 100, k, 7 * d + 55).scale(1.3, .5, 1.3), p(.4, .2, .2, .8),));
    });
    m(7, c => {
      C(u((23 * c + 1) % 5 + 5, 0, .55), g.translate(5 * Math.sin(c) - 101 + c, -2.3 - c, 44.9 - 2.8 * c).scaleSelf(5 + c / 2, 1 + c / 6, 5 + c / 3,), p(.5 - c / 17, .5 - (1 & c) / 9, .6, .3),);
    });
    C(u(z), g.translate(-87, -9.5, 24).scale(7, 1, 3), p(.4, .5, .6, .4));
    C(u(4), g.translate(-86, -9.2, 27).scale(5, 1, 5), p(.5, .6, .7, .3));
    C(u(18, 1), g.translate(-86, -9, 31).scale(1.5, 1, 1.5), p(.3, .3, .4, .1));
    kc(g.translate(-86, -7.5, 31));
    Ab(g.translate(-76.9, -10, 24), () => {
      E(c => {
        c.h = () => g.translate(0, 3.5 * (1 - Za(R[6].g, R[7].g)) + bb(R[7].i, R[6].i) * Math.sin(a) * 5,);
        [0, 12, 24].map(d => C(u(z), g.translate(d, d / -13).scale(2.8, 1.5, 3), p(.2, .5, .6, .2)));
      });
      E(c => {
        c.h = () => {
          const d = bb(R[7].i, R[6].i);
          return g.translate(0, d * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + d) * d);
        };
        [6, 18].map(d => C(u(z), g.translate(d, d / -13).scale(2.8, 1.5, 3), p(.1, .4, .5, .2)));
      });
    });
    Ab(g.translate(-38.9, -11.3, 17), () => {
      C(y(x(xb(r(u(z), g.scale(11, 1, 13), p(.3, .4, .6, .3)), r(u(5), g.translate(0, 0, -7).scale(2, 1.2, 2), p(.2, .4, .7, .3),), r(u(5), g.scale(9, 1.2, 9), p(0, .2, .3, .5)),), r(u(5), g.scale(5.4, 5, 5.4), p(0, .2, .3, .5)),),),);
      kc(g.translate(0, 1.7, -7));
      Va = E(c => {
        c.h = () => g.translate(0, -7.3 * R[7].i);
        C(y(x(xb(r(u(5), g.translate(0, 2).scale(5, 7, 5).skewY(8), p(.2, .4, .5, .5),), r(u(5), g.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), p(.25, .35, .5, .5),), r(u(5), g.translate(0, 9).scale(.6, 7, .6).skewY(8), p(.35, .3, .5, .5),),), r(u(5), g.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), p(.2, .4, .5, .5),),),),);
      });
      z.map(({x:c, z:d}) => {
        C(u(18, 1), g.translate(9 * c, 4, 11 * d).scale(1, 4), p(.25, .25, .25, 1));
        [1.5, 8].map(k => C(u(18, 1), g.translate(9 * c, k, 11 * d).scale(1.5, .5, 1.5), p(.6, .6, .6, .3),));
      });
      C(y(x(xb(r(u(6), g.translate(0, 0, -36).scale(15, 1.2, 15), p(.7, .7, .7, .3),), r(u(z), g.translate(0, 0, -18).scale(4, 1.2, 6), p(.45, .4, .6, .3),),), ...m(6, c => m(6, d => r(u(6), g.translate(4.6 * d - 12 + 2 * (1 & c), 0, 4.6 * c - 50 + 2 * Math.sin(4 * d)).scale(2, 5, 2,), p(.7, .7, .7, .3),))).flat(),),),);
    });
    C(u(5), g.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), p(.8, .1, .25, .4));
    kc(g.translate(-84, -0.5, 85).rotate(0, 45));
    Ab(g.translate(-123, 1.4, 55), () => {
      E(c => {
        c.h = () => lc(-65 * Ia);
        kc(g.translate(0, -3, -4).rotate(0, 180));
        C(oc);
      });
    });
    Ab(g.translate(-123, 0, -12), () => {
      const c = y(x(r(u(z), g.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), p(.25, .25, .35, .3),), r(u(3), g.translate(0, 0, -5.5).scale(3, 2), p(.6, .3, .4, .3)), ...[-1.2, 1.2].map(d => r(u(z), g.translate(d, -0.5, 1).scale(.14, .3, 6.5), p(.7, .2, 0, .3),)),),);
      C(u(z), g.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), p(.8, .8, .8, .2));
      C(u(6), g.translate(7, -2.6, -4.5).scale(3.2, .8, 3), p(.6, .5, .7, .2));
      kc(g.translate(7, -1.4, -6).rotate(0, 180));
      m(3, d => {
        C(qc, g.translate(12 * d + 14, -9), p(.6, .6, .6, .3));
        C(qc, g.translate(46, -9, -12 * d - 8).rotate(0, 90), p(.6, .6, .6, .3));
      });
      C(y(x(r(u(12), g.translate(46, -13.9).scale(4, 18.2, 4), p(.7, .7, .7, .2),), r(u(z), g.translate(44).scale(3.5, 2.2, 1.3), p(.4, .5, .6, .2),), r(u(z), g.translate(46, 0, -2).scale(1.5, 2.2, 2), p(.4, .5, .6, .2),), r(u(12), g.translate(46, 2.8).scale(3, 5, 3), p(.4, .5, .6, .2)),),),);
      C(u(z), g.translate(7.5, -17).scale(.5, 15, 2.2), p(.6, .6, .6, .3));
      C(u(z), g.translate(46, -17, -38.5).scale(2.2, 15, .5), p(.6, .6, .6, .3));
      C(y(x(xb(r(u(z), g.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), r(u(z), g.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...m(4, d => r(u(z), g.translate(13 + 9 * d + (1 & d), -0.8, 9).scale(1.35, 1.35, 9),)), ...m(3, d => r(u(z), g.translate(17 + 9 * d, -0.8, 9).scale(1.35, 1.35, 9)),),),), g, p(.5, .5, .6, .2),);
      C(u(5), g.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), p(.25, .25, .35, 1),);
      E(d => {
        d.h = () => {
          var k = Math.sin(1.1 * a);
          return g.translate.call(g, 0, -2, bb(R[10].g, R[11].g) * (0 > k ? -k : k) * -8.5 + 10);
        };
        m(2, k => C(c, g.translate(13 + 9 * k + (1 & k), 1.7)));
      });
      E(d => {
        d.h = () => {
          var k = Math.sin(2.1 * a);
          return g.translate.call(g, 0, -2, bb(R[10].g, R[11].g) * (0 > k ? -k : k) * -8.5 + 10);
        };
        m(2, k => C(c, g.translate(13 + 9 * (k + 2) + (1 & k), 1.7)));
      });
      E(d => {
        d.h = () => {
          var k = Math.sin(1.5 * a);
          return g.translate.call(g, 0, -2, -8.5 * Za((1 - R[10].g) * (1 - bb(R[10].g, R[11].g)), bb(R[10].g, R[11].g) * (0 > k ? -k : k),) + 10,);
        };
        m(3, k => C(c, g.translate(17 + 9 * k, 1.7)));
      });
      C(u(z), g.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), p(.6, .6, .6, .3),);
      C(y(x(r(u(z), g.translate(30, -5.8, -28).scale(9, 1, 5), p(.8, .8, .8, .1),), r(u(9), g.translate(25, -5.8, -28).scale(3, 8, 3), p(.7, .7, .7, .2),),),),);
      C(u(9), g.translate(25, -5.8, -28).scale(2.5, .9, 2.5), p(.5, .5, .5, .3));
      kc(g.translate(25, -4.4, -28).rotate(0, 90));
    });
    Ab(g.translate(-100, .7, 115), () => {
      const c = (C(y(x(xb(r(u(6, 0, 0, .6), g.translate(0, 0, -9.5).scale(8, 1, 11), p(.7, .7, .7, .2),), r(u(z), g.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), p(.7, .7, .7, .2),), r(u(z), g.translate(8.8, 0, -8).scale(3, 1, 3.3), p(.7, .7, .7, .2),),), r(u(5), g.translate(0, 0, -2).scale(4, 3, 4), p(.7, .7, .7, .2)),),),), m(4, d => E(k => {
        k.h = () => {
          const q = bb(R[8].i, R[12].i);
          return g.translate(2 < d ? 2 * (1 - q) + q : 0, q * Math.sin(1.3 * a + 1.7 * d) * (3 + d / 3), (1 & d ? -1 : 1) * (1 - R[8].i) * (1 - R[12].i) * -7 + (.05 > q ? .05 : q) * Math.cos(1.3 * a + 7 * d) * (4 - 2 * (1 - d / 3)),);
        };
        C(u(6), g.translate(-14.6 - 4.8 * d - (2 < d ? 2 : 0), -d / 2.3, -21.5).scale(2.6, 1, 2.5), p(.5 - d / 8, d / 12 + .5, .7, .3),);
      })), Ab(g.translate(-39.7, -2.5, -21.5), () => {
        Wa = E(d => {
          d.h = () => {
            const k = bb(R[8].i, R[12].i);
            return g.translate(2.5 * (1 - k), -3 * (1 - R[8].g) + k * Math.sin(.8 * a) * -1,).rotateSelf(Math.cos(1.3 * a) * (3 * k + 3), 0);
          };
          C(y(x(r(u(10), g.scale(6, 2, 6), p(.1, .6, .5, .3)), r(u(10), g.scale(3.3, 6, 3.3), p(.1, .6, .5, .5)),),),);
          Ab(g.translate(-7.5).rotate(0, 90), () => {
            C(u(15), g.scale(3, 2.3, 3), p(.4, .4, .4, .3));
            C(u(10), g.scale(2, 2.5, 2), p(.3, .8, .7, .3));
            C(u(5), g.scale(1, 3), p(.5, .5, .5, .5));
            kc(g.translate(0, 3.4).rotate(0, 180));
          });
          [-1, 1].map(k => C(pc, g.rotate(90 * -k, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), p(1, 1, .8, .2),));
        });
      }), [-1, 1].map(d => {
        C(u(15, 1), g.translate(-7.5 * d, 3, -19).scale(.8, 4, .8), p(.6, .24, .2, .5),);
        [7.2, 1.5].map(k => C(u(15, 1), g.translate(-7.5 * d, k, -19).scale(1.1, .5, 1.1), p(.5, .24, .2, .4),));
        C(pc, g.translate(-5 * d, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * d - 90), p(1, 1, .8),);
        C(y(x(r(u(z), g.translate(-4 * d, 3.5, -0.5).scale(4, 4, .7), p(.5, .5, .5, .4),), r(u(z), g.scale(3, 3, 10), p(.6, .24, .2, .5)), r(u(30, 1), g.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), p(.6, .24, .2, .5),), r(u(5), g.translate(-5.3 * d, 7).rotate(90, 0).scale(1.7, 5, 1.7), p(.6, .24, .2, .5),), r(u(5), g.translate(-5.3 * d, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), p(.6, .24, .2, .5),),),), g.translate(d, 0, -18),);
      }), E(d => (d.h = () => g.translate(0, -0.1 - 6 * R[12].g, -18.5).scale(.88, 1.2), h),), [...r(u(28, 1), g.scale(8, 1, 8), p(.45, .45, .45, .2)), ...r(u(5), g.translate(0, 1).scale(1, .2), p(.3, .3, .3, .2)),]);
      Ab(g.translate(20, .3, -9), () => {
        Xa = E(d => {
          d.h = () => g.rotate(0, 40 + za);
          C(y(x(r(u(28, 1), g.scale(8, 1, 8), p(.45, .45, .45, .2)), r(u(z), g.translate(0, 0, -5.5).scale(1.5, 3, 2.5), p(.45, .45, .45, .2),),),),);
          C(u(8), g.translate(0, 2).scale(3, 1.5, 3), p(.7, .7, .7, .1));
          C(u(5), g.translate(0, 2).scale(1, 2), p(.3, .3, .3, .2));
        });
      });
      Ab(g.translate(36, .3, -9), () => {
        C(u(z), g.translate(8).scale(.7, .8, 2.5), p(.7, .7, .7, .2));
        E(d => {
          d.h = () => g.rotate(0, Aa);
          C(y(x(r(u(28, 1), g.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3),), r(u(z), g.scale(9, 5, 2), p(.3, 0, 0, .3)),),),);
          C(c);
          [-1, 1].map(k => C(pc, g.rotate(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), p(1, 1, .8),));
        });
      });
      Ab(g.translate(52, .3, -9), () => {
        C(u(z), g.translate(0, 0, -8).scale(2.5, .8, .7), p(.7, .7, .7, .2));
        E(d => {
          d.h = () => g.rotate(0, 180 - Aa);
          C(y(x(r(u(30, 1), g.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3),), r(u(z), g.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3),), r(u(z), g.translate(0, 0, 7).scale(2, 5, 9), p(.3, 0, 0, .3),),),),);
          C(c);
        });
      });
      Ab(g.translate(52, .3, -25), () => {
        E(d => {
          d.h = () => g.rotate(0, 270 + Aa);
          C(y(x(r(u(30, 1), g.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3),), r(u(z), g.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)), r(u(z), g.translate(0, 0, -7).scale(2, 5, 9), p(.3, 0, 0, .3),),),),);
          C(c);
        });
      });
      C(u(z), g.translate(61, -0.3, -25).scale(2, 1, 2), p(.7, .7, .7, .3));
      C(u(z), g.translate(68, -0.3, -25).scale(5, 1, 3), p(.7, .7, .7, .3));
      kc(g.translate(66, 2, -19).rotate(-12, 0));
      C(u(5), g.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), p(.2, .5, .5, .6),);
      [p(.1, .55, .45, .2), p(.2, .5, .5, .3), p(.3, .45, .55, .4)].map((d, k) => E(q => {
        q.h = () => g.translate(0, (1 - R[13].i) * (1 - R[14].i) * 3 + bb(R[13].i, R[14].i) * Math.sin(1.5 * a + 1.5 * k) * 4,);
        C(u(z), g.translate(76.5, k / 2 - 2.1, 7.5 * (1 - k / 30) * k - 25).scale(3.3, 3 - k / 2, 3.45 - k / 5,), d,);
      }));
    });
    Ab(g.translate(0, .9, 95), () => {
      C(u(z), g.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), p(.6, .6, .6, .2));
      C(y(x(r(u(6, 0, 0, .3), g.translate(0, -0.92).scale(14, 2, 14), p(.8, .8, .8, .2),), r(u(5), g.scale3d(6), p(.3, .3, .3, .5)),),),);
      [8, -6.1].map((c, d) => m(3, k => C(qc, g.translate(6 * k - 6, c - (1 & k), 16 - .2 * (1 & k) - d), 1 & k ? p(.5, .5, .5, .3) : p(.35, .35, .35, .5),)));
      [-1, 1].map(c => C(pc, g.translate(-8 * c, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), p(1, 1, .8),));
      C(u(5), g.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), p(.5, .3, .3, .4),);
      kc(g.translate(0, 1.7, -13).rotate(0, 180));
      C(y(x(xb(r(u(z), g.translate(0, 16, 15.5).scale(12, 1, 3), p(.5, .3, .3, .4),), r(u(z), g.translate(0, 16, 16).scale(3, 1, 3.8), p(.5, .3, .3, .4),),), r(u(5), g.translate(0, 16, 8.5).scale(5.5, 5, 5.5), p(.5, .3, .3, .4),),),),);
      E(c => {
        c.h = () => {
          const d = Math.sin(a);
          return g.translate(-2 * d).rotate(0, 0, 25 * d);
        };
        C(u(3), g.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), p(.5, .3, .3, .4),);
        [22, 30].map(d => {
          C(u(6), g.translate(0, 16, d).scale(3, 1, 2.3).rotate(0, 90), p(.7, .7, .7, .4),);
          C(u(z), g.translate(0, 6.2, d).scale(.5, 11, .5), p(.5, .3, .3, .4));
        });
      });
      C(u(6), g.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), p(.5, .6, .7, .3),);
      C(u(z), g.translate(0, 16, 34).scale(1.5, 1, 2), p(.5, .6, .7, .3));
      C(u(7), g.translate(0, 16.2, 38).scale(5, 1, 5), p(.4, .5, .6, .4));
      E(c => {
        c.h = () => {
          let d = bb((R[14].g + R[14].i) / 2, R[13].i);
          return d = bb(d, (R[15].g + R[15].i) / 2), g.translate(0, 16 * d, 8.5 * ab(2 * d - 1));
        };
        C(u(5), g.scale(5, 1.1, 5), p(.5, .3, .3, .4));
        C(u(5), g.scale(5.5, .9, 5.5), p(.25, .25, .25, .4));
        kc(g.translate(0, 1.5, -1).rotate(0, 180));
      });
    });
  });
  nc(g.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
  nc(g.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...nb(18).map(({x:b, z:e}) => [7 * b, 10 * e, 4.5 - 2 * (0 > b ? -b : b)]),);
  nc(g.translate(0, 2.8, -30), [0, 0, 4.5]).j = Ua;
  nc(g.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
  nc(g.translate(-89, .2, 80), [0, 0, 6]);
  nc(g.translate(0, 11).rotate(0, 0, 10), ...nb(15).map(({x:b, z:e}) => [3 * b, 3 * e, 1.5]),).j = Va;
  nc(g.translate(-38.9, -8.4, -21), [0, 0, 12]);
  nc(g.translate(-115, .2, -12), [0, 0, 3.5]);
  nc(g.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);
  nc(g.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]).j = Wa;
  nc(g.translate(0, 3), ...nb(10).map(({x:b, z:e}) => [5.6 * b, 5.6 * e, 2.5]),).j = Xa;
  nc(g.translate(0, 3.9, 95), ...nb(9).map(({x:b, z:e}) => [9 * b, 9 * e, 4]),);
  nc(g.translate(0, 19.9, 134), [0, 0, 3.5]);
}, sc = (b, e, h, l) => {
  let c = 0, d = 0, k = 0, q = 1 / 0, t = -1 / 0, B = 1 / 0, H = -1 / 0, W = 1 / 0, aa = -1 / 0;
  const S = 1.1 * (h - e), T = (new DOMMatrix(fb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, h))).multiplySelf(b).invertSelf();
  b = m(8, A => {
    A = T.transformPoint({x:4 & A ? 1 : -1, y:2 & A ? 1 : -1, z:1 & A ? 1 : -1,});
    return c -= A.x = (S * A.x | 0) / (S * A.w), d -= A.y = (S * A.y | 0) / (S * A.w), k -= A.z = (S * A.z | 0) / (S * A.w), A;
  });
  e = g.rotate(298, 139).translateSelf(c / 8, d / 8, k / 8);
  return mb(b, e).map(({x:A, y:X, z:M}) => {
    q = q < A ? q : A;
    t = A < t ? t : A;
    B = B < X ? B : X;
    H = X < H ? H : X;
    W = W < M ? W : M;
    aa = M < aa ? aa : M;
  }), W *= 0 > W ? l : 1 / l, aa *= 0 < aa ? l : 1 / l, g.scale(2 / (t - q), 2 / (H - B), 2 / (W - aa)).translateSelf((t + q) / -2, (H + B) / -2, (W + aa) / 2,).multiplySelf(e).toFloat32Array();
}, tc = (b, e = 35633) => {
  e = V.c6x(e);
  return V.s3c(e, b), V.c6a(e), e;
}, uc = (b, e) => {
  const h = {}, l = V.c1h();
  return V.abz(l, b), V.abz(l, tc(e, 35632)), V.l8l(l), c => c ? h[c] || (h[c] = V.gan(l, c)) : V.u7y(l);
}, vc = (b, e, h) => {
  const l = c => V.d97(4, c.J, 5123, 2 * c.K);
  if (La) {
    V.uae(b, !1, g.rotate(0, 40 * Math.sin(oa) - 70).toFloat32Array()), l(Sa.D), Qa.map(c => c.D).map(l);
  } else {
    for (const c of yb) {
      const d = c.H, k = c.D;
      (e || c !== Sa && c !== Qa[0] && c !== Qa[1]) && k && (h && V.ube(h, d / 255), V.uae(b, !1, c.s.toFloat32Array()), l(k));
    }
  }
}, wc = new Int32Array(10725888), xc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), pc = (() => {
  const b = m(11, h => g.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),), e = nb(18);
  return m(10, h => ob(mb(e, b[h]).reverse(), mb(e, b[h + 1]), 1),).flat();
})(), oc = y(x(r(u(20, 1, 1.15, 1), g.translate(0, -3).scale(3.5, 1, 3.5), p(.7, .4, .25, .7),), r(u(20, 1, 1.3, 1), g.translate(0, -2.5).scale(2.6, 1, 3), p(.7, .4, .25, .2),), r(u(z), g.translate(4, -1.2).scale3d(2), p(.7, .4, .25, .3)),),), qc = y(x(r(u(z), g.translate(0, -8).scale(6, 15, 2.2)), r(u(z), g.translate(0, -14.1).scale(4, 13, 4)), r(u(20, 1), g.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), zb = [g], Lb = new Int32Array(Jb.buffer, 0, 4), Kb = new Float32Array(Jb.buffer), bc = 
new AudioContext(), ac = bc.createBufferSource(), jc = (C([z.slice(1)], g.translate(-2).scale3d(3).rotate(90, 0)), Nb(), [p(1, .5, .2), p(.7, 1, .2)].map(b => (C(u(6, 1), g.scale(.13, 1.4, .13), p(.3, .3, .5)), C(u(8), g.translate(0, 1).scale(.21, .3, .21), b), C(u(3), g.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), p(.2, .2, .2)), Nb()),)), mc = (C(pb(40, 30, (b, e, h) => {
  const l = e / 30, c = .05 * b * Math.PI, d = l ** .6 * Math.PI / 2;
  b = l * l * Math.sin(b * Math.PI * .35) / 4;
  return 29 === e ? {x:h.B = 0, y:-0.5, z:0,} : {x:Math.cos(c) * Math.sin(d), y:Math.cos(l * Math.PI) - l - b, z:Math.sin(c) * Math.sin(d) + Math.sin(b * Math.PI * 2) / 4,};
}), g.scale3d(.7), p(1, 1, 1),), [-1, 1].map(b => C(pb(15), g.translate(.16 * b, .4, -0.36).scale3d(.09))), Nb()), V = hC.getContext("webgl2");
for (const b in V) {
  V[b[0] + [...b].reduce((e, h, l) => (e * l + h.charCodeAt(0)) % 434, 0).toString(36)] = V[b];
}
setTimeout(() => {
  let b = 0, e = 6;
  const h = () => {
    if (h4.innerHTML += ".", !--e) {
      let k = 0, q = 0, t = 1, B = 0, H = 0, W = 0, aa = !1, S, T, A, X, M, ca, J, ha, da, ea;
      const N = {x:0, y:0, z:0,}, ra = new Int32Array(256), ia = () => {
        const {j:v, I:w} = R[sa], {x:I, y:D, z:K} = w.transformPoint({x:0, y:8, z:-3,});
        n.x = N.x = I;
        n.y = N.y = J = D;
        n.z = N.z = K;
        T = ca = M = A = X = 0;
        t = 1;
        k = q = v?.H || 1;
      }, Ba = () => {
        let v = 0, w = 0, I = (NO_INLINE(() => {
          let G = 0, P = 0, ja = 0, wa = 0, xa = 0;
          ra.fill(0);
          for (let Y = 0; 31 > Y; ++Y) {
            let Fa = 0;
            const Q = 512 * Y;
            for (let Ra = 0; 128 > Ra; Ra++) {
              let ta = Q + 4 * Ra;
              var ua = (Ga[ta] + Ga[1 + ta]) / 255;
              if (ta = Ga[2 + ta], 14 < Ra && 114 > Ra && (Fa += ua), ta && ua) {
                ua = ra[ta] + 1, ra[ta] = ua, G > ua || (G = ua, P = ta);
              }
            }
            3 > Fa && 5 < Y && (wa += Y / 32);
            3 < Fa && (7 < Y && (ja += Y / 15), xa = 1);
          }
          P && (xa = 1);
          t ? P && (t = 0, q = P) : q = P || k;
          k = P;
          T = xa;
          A = F(A, xa ? 6.5 : 8, 4);
          N.y += ja / 41 - (xa ? 1 : A) * wa / 41 * A * f;
        })(), NO_INLINE(() => {
          for (let xa = 32; 128 > xa; xa += 2) {
            var G = 0;
            let ua = 0;
            var P = 0;
            let Y = 0;
            const Fa = 512 * xa;
            for (let Q = xa >> 1 & 1; 128 > Q; Q += 2) {
              var ja = Fa + 4 * Q;
              const Ra = Fa + 4 * (127 - Q), ta = Ga[ja] / 255, Eb = Ga[1 + Ra] / 255;
              var wa = Q / 63.5 - 1;
              wa = 1 - (0 > wa ? -wa : wa);
              if (10 < Q && 118 > Q && (G = Za(G, Za(ta * wa, ta * Ga[Ra] / 127.5)), ua = Za(ua, Za(Eb * wa, Eb * Ga[1 + ja] / 255))), 54 > Q || 74 < Q) {
                ja = (1 - wa) * (Eb < ta ? ta : Eb) / 3, .001 < ja && (64 > Q && ja > P ? P = ja : 64 < Q && ja > Y && (Y = ja));
              }
            }
            P = Y - P;
            G = ua - G;
            (0 > P ? -P : P) > (0 > v ? -v : v) && (v = P);
            (0 > G ? -G : G) > (0 > w ? -w : w) && (w = G);
          }
        })(), ($b[0] ? 1 : 0) + ($b[2] ? -1 : 0) + ma), D = ($b[1] ? 1 : 0) + ($b[3] ? -1 : 0) + na;
        var K = navigator.getGamepads()[0];
        if (K) {
          var O = P => G[P]?.pressed || 0 < G[P]?.value;
          const G = K.buttons;
          K = K.axes;
          var U = O(1) || O(3) || O(2) || O(0);
          U !== aa && (aa = U) && ($b[5] = 1);
          I += (.2 < $a(-K[0]) ? -K[0] : 0) + (O(14) ? 1 : 0) + (O(15) ? -1 : 0);
          D += (.2 < $a(-K[1]) ? -K[1] : 0) + (O(12) ? 1 : 0) + (O(13) ? -1 : 0);
          Ma && (.3 < $a(K[2]) && (Ub += 80 * K[2] * f), .3 < $a(K[3]) && (Tb += 80 * K[3] * f));
        }
        .05 > (0 > D ? -D : D) && (D = 0);
        .05 > (0 > I ? -I : I) && (I = 0);
        O = Math.atan2(D, I);
        K = ab(Math.hypot(D, I));
        var Z = (I = K * Math.cos(O), D = K * Math.sin(O), ab(1 - 5 * Za(0 > v ? -v : v, 0 > w ? -w : w)));
        U = (q || (v += M * Z * f, w += ca * Z * f), M = F(M, 0, T ? 8 : 4), ca = F(ca, 0, T ? 8 : 4), X = F(X, T ? (I || D ? T ? 7 : 4 : 0) * Z : 0, T ? .1 < Z ? 10 : I || D ? 5 : 7 : 1,), Ma ? Ub * Ya : Math.PI);
        Z = Math.sin(U) * X * f;
        var Pa = Math.cos(U) * X * f;
        U = (v -= I * Pa - D * Z, w -= I * Z + D * Pa, q && yb[q - 1].G && yb[q - 1].s || g);
        Z = U.inverse();
        if (Z.m41 = 0, Z.m42 = 0, Z.m43 = 0, {x:v, z:w} = Z.transformPoint({x:v, z:w, w:0,}), N.x += v, N.z += w, q !== S) {
          S = q;
          const {x:G, y:P, z:ja} = U.inverse().transformPoint(n);
          N.x = G;
          N.y = P;
          N.z = ja;
        }
        Z = n.x;
        Pa = n.z;
        const {x:Fb, y:hb, z:L} = U.transformPoint(N);
        U = (n.x = Fb, n.y = hb, n.z = L, $a(J - hb));
        J = F(J, hb + .1, 50 * U + 5);
        q && (M = (n.x - Z) / f, ca = (n.z - Pa) / f);
        (I || D) && (B = 90 - O / Ya);
        H = db(H, B, 8 * f);
        W += (K - W) * ab(10 * f);
      }, Oa = v => {
        requestAnimationFrame(Oa);
        var w = (v - (Na || v)) / 1e3;
        f = La ? $b[5] = 0 : .066 < w ? .066 : w;
        a += f;
        oa += w;
        Na = v;
        if (0 < f && (V.b6o(36160, ya), V.r9r(0, 0, 128, 128, 6408, 5121, Ga), V.iay(36160, [36064]), NO_INLINE(Ba)(), Ob()), 0 < f) {
          if (ha = eb(ha, n.x, .5, f,), da = eb(da, n.y, 2, f,), ea = eb(ea, n.z, .5, f,), Ma) {
            v = 200 * t, Qb = F(Qb, n.x, 18 + v), Rb = F(Rb, n.y + 1.5, 15 + v), Sb = F(Sb, n.z, 18 + v), Tb = Za(87 > Tb ? Tb : 87, -87);
          } else {
            if (Qb = eb(Qb, ha, 1, 2 * f,), Rb = eb(Rb, da + 13 + 15 * t, 4, 2 * f,), Sb = eb(Sb, ea + -18, 1, 2 * f,), v = Sb - ea, 1 < (0 > v ? -v : v)) {
              w = Qb - ha;
              const I = Rb - da;
              Ub = 270 + Math.atan2(v, w) / Ya;
              Tb = 90 - Math.atan2(Math.hypot(v, w), I) / Ya;
            }
          }
          if (Ub = cb(Ub), 0 < f) {
            v = bb(R[12].g, R[13].g), a > qa && (h4.innerHTML = "", qa = 0), w = F(Da, 0, 1), Da = w + (cb(Da + 60 * f) - w) * ab(R[5].g - R[6].i), w = F(za, 0, 5), za = w + (cb(za + 56 * f) - w) * (0 > v ? 0 : 1 < v ? 1 : v), w = F(Aa, 0, 4), Aa = w + (cb(Aa + 48 * f) - w) * (0 > v ? 0 : 1 < v ? 1 : v), v = 2 * R[9].i - 1, Ia = F(Ia, R[9].i, .2 + .3 * (0 > v ? -v : v),), Ha = F(Ha, Ea ? Ha + (-9 - Ha) * ab(1.5 * f) : ab(a / 3), 1,), 1 === R[0].l && .8 < R[0].g && (13 > pa ? (R[0].l = 0, Ea || (h4.innerHTML = 
            "Not leaving now, there are souls to catch!", qa = a + 3)) : Ea || (Ea || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", qa = a + 1 / 0), Ea = 1)), $b[5] = 0, (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && ia();
          }
        }
        v = La ? g.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + ab(hC.clientWidth / 1e3)) : g.rotate(-Tb, -Ub, -0).invertSelf().translateSelf(-Qb, -Rb, -Sb,);
        0 < f && (va(), V.b6o(36160, ya), V.v5y(0, 0, 128, 128), V.cbf(!0, !1, !0, !1), V.c4s(16640), V.uae(va("b"), !1, g.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, .3 - n.z,).toFloat32Array(),), vc(va("c"), 0, va("j")), V.cbf(!1, !0, !1, !1), V.c4s(16640), V.cbf(!1, !0, !0, !1), V.uae(va("b"), !1, g.translate(-n.x, -n.y, -n.z - .3).toFloat32Array(),), vc(va("c"), 0, va("j")), V.cbf(!0, !0, !0, !0), 1 === q && (R[9].l = -15 > n.x && 0 > n.z ? 1 : 0));
        qb();
        V.v5y(0, 0, 2048, 2048);
        Ca[0](sc(v, .3, 55, 10));
        Ca[1](sc(v, 55, 177, 11));
        V.b6o(36160, null);
        ka();
        V.v5y(0, 0, V.drawingBufferWidth, V.drawingBufferHeight);
        V.c4s(16640);
        V.uae(ka("a"), !1, fb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        V.uae(ka("b"), !1, v.toFloat32Array());
        V.ubu(ka("k"), Qb, Rb, Sb);
        Ca[0]();
        Ca[1]();
        vc(ka("c"), !Ma);
        la();
        V.ubu(la("j"), V.drawingBufferWidth, V.drawingBufferHeight, oa);
        La ? V.ubu(la("k"), 0, 0, 0) : V.ubu(la("k"), Qb, Rb, Sb);
        V.uae(la("b"), !1, v.inverse().toFloat32Array());
        V.d97(4, 3, 5123, 0);
      }, Ga = new Uint8Array(65536), Pb = c;
      var d = tc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",);
      const qb = uc(tc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"), "#version 300 es\nvoid main(){}",), la = uc(tc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), va = uc(d, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",), ka = uc(d, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), ya = (la(), V.ubh(la("q"), 3), va(), V.uae(va("a"), !1, fb(1.4, .59, 1e-4, 1)), ka(), V.ubh(ka("q"), 3), V.c5w());
      d = V.c3z();
      const ib = V.c25(), Ca = m(2, v => {
        let w;
        const I = V.c25(), D = V.c5w(), K = ka(v ? "j" : "i");
        return ka(), V.ubh(ka(v ? "h" : "g"), v), V.b6o(36160, D), V.d45([0]), V.r9l(0), V.a4v(33984 + v), V.b9j(3553, I), V.fas(36160, 36096, 3553, I, 0), V.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), V.t2z(3553, 10241, 9729), V.t2z(3553, 10240, 9729), V.t2z(3553, 34893, 515), V.t2z(3553, 34892, 34894), V.t2z(3553, 10243, 33071), V.t2z(3553, 10242, 33071), O => {
          O ? (w = O, V.b6o(36160, D), V.iay(36160, [36096]), V.c4s(256), V.uae(qb("b"), !1, w), vc(qb("c"), !Ma)) : V.uae(K, !1, w);
        };
      });
      V.b11(34963, V.c1b());
      V.b2v(34963, new Uint16Array(Bb), 35044);
      V.b11(34962, V.c1b());
      V.b2v(34962, new Float32Array(Cb), 35044);
      V.v7s(0, 3, 5126, !1, 0, 0);
      V.b11(34962, V.c1b());
      V.b2v(34962, new Int16Array(Db), 35044);
      V.v7s(1, 3, 5122, !0, 0, 0);
      V.b11(34962, V.c1b());
      V.b2v(34962, new Uint32Array(Gb), 35044);
      V.v7s(2, 4, 5121, !0, 0, 0);
      V.e3x(0);
      V.e3x(1);
      V.e3x(2);
      V.e8z(2929);
      V.e8z(2884);
      V.c70(1);
      V.c7a(1029);
      V.d4n(515);
      V.c5t(0, 0, 0, 1);
      V.b6o(36160, ya);
      V.bb1(36161, d);
      V.r4v(36161, 33189, 128, 128);
      V.f8w(36160, 36096, 36161, d);
      V.a4v(33987);
      V.b9j(3553, ib);
      V.fas(36160, 36064, 3553, ib, 0);
      V.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      V.b9j(3553, V.c25());
      V.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Pb);
      V.gbn(3553);
      V.t2z(3553, 10241, 9987);
      V.t2z(3553, 10240, 9729);
      Sa.h = () => g.translate(n.x, J, n.z).rotateSelf(0, H,);
      Qa.map((v, w) => {
        v.h = () => g.translate(0, W * ab(.45 * Math.sin(9.1 * a + Math.PI * w - Math.PI / 2)),).rotateSelf(W * Math.sin(9.1 * a + Math.PI * w) * .25 / Ya, 0);
      });
      try {
        const [v, w, I, D, K] = JSON.parse(localStorage.DanteSP22,);
        R.map((O, U) => O.g = O.i = O.l = U ? 0 | v[U] : 0);
        gc.map((O, U) => O.l = 0 | w[U]);
        sa = I;
        a = D;
        Ia = K;
      } catch (v) {
      }
      Ha = 0 > sa ? 0 : 1 < sa ? 1 : sa;
      h4.innerHTML = "";
      qa = 0;
      hc();
      Ob();
      NO_INLINE(ec)();
      ia();
      Qb = ha = n.x;
      Rb = (da = n.y) + 13;
      Sb = (ea = n.z) + -18;
      requestAnimationFrame(Oa);
    }
  }, l = () => {
    if (5 > b) {
      var d = 0, k = b++;
      let [H, W, aa, S, T, A, X, M, ca, J, ha, da, ea, N, ra, ia, Ba, Oa, Ga, Pb, qb] = Vb[k];
      J = J * J * 4;
      for (const la of [5513, 4562, 3891]) {
        let va = 0, ka = 0, ya, ib, Ca, v, w;
        const I = [], D = new Int32Array(768 * la), K = 2 ** (da - 9) / la, O = Math.PI * 2 ** (Ba - 8) / la, U = Ga * la & -2;
        for (let Z = 0; 11 >= Z; ++Z) {
          for (let Pa = 0, Fb = +"000001234556112341234556011111111112011111111112000001111112"[12 * k + Z]; 32 > Pa; ++Pa) {
            const hb = (32 * Z + Pa) * la;
            for (var q = 0; 4 > q; ++q) {
              if (ya = 0, Fb && (ya = qb[Fb - 1].charCodeAt(Pa + 32 * q) - 40, ya += 0 < ya ? 106 : 0), ya) {
                var t;
                if (!(t = I[ya])) {
                  t = ya;
                  let L = void 0, G = void 0;
                  var B = ya;
                  let P = 0, ja = 0;
                  const wa = 2 > k ? Yb : Wb, xa = 2 > k ? 1 > k ? Xb : Zb : Wb, ua = new Int32Array(M + ca + J);
                  for (let Y = 0, Fa = 0; M + ca + J > Y; ++Y, ++Fa) {
                    let Q = 1;
                    M > Y ? Q = Y / M : M + ca > Y || (Q = (1 - (Q = (Y - M - ca) / J)) * 3 ** (-ha / 16 * Q));
                    0 > Fa || (Fa -= 4 * la, G = 0.003960 * 2 ** ((B + W - 256) / 12), L = 0.003960 * 2 ** ((B + T - 256) / 12) * (1 + (k ? 0 : 8e-4 * 9)));
                    ua[Y] = 80 * (wa(P += G * Q ** (aa / 32)) * H + xa(ja += L * Q ** (A / 32)) * S + (X ? (2 * Math.random() - 1) * X : 0)) * Q | 0;
                  }
                  t = I[t] = ua;
                }
                for (let L = 0, G = 2 * hb; t.length > L; ++L, G += 2) {
                  D[G] += t[L];
                }
              }
            }
            for (let L, G = 0; la > G; ++G) {
              q = 0, t = 2 * (hb + G), ((L = D[t]) || w) && (Ca = 0.003080 * ea, 1 != k && 4 != k || (Ca *= Math.sin(K * t * Math.PI * 2) * Pb / 512 + .5), Ca = 1.5 * Math.sin(Ca), va += Ca * ka, v = (1 - N / 255) * (L - ka) - va, ka += Ca * v, L = 4 == k ? ka : 3 == k ? v : va, k || (L = 1 > (L *= 22e-5) ? -1 < L ? Math.sin(L / 4 * Math.PI * 2) : -1 : 1, L /= 22e-5), L *= ra / 32, w = 1e-5 < L * L, ib = Math.sin(O * t) * ia / 512 + .5, q = L * (1 - ib), L *= ib), U > t || (q += D[t - U + 1] * Oa / 
              255, L += D[t - U] * Oa / 255), wc[d + t] += D[t] = q, ++t, wc[d + t] += D[t] = L;
            }
          }
        }
        d += D.length;
      }
      setTimeout(l);
    } else {
      d = bc.createBuffer(2, 5362944, 44100);
      for (k = 0; 2 > k; k++) {
        for (let H = k, W = d.getChannelData(k); 10725888 > H; H += 2) {
          W[H >> 1] = wc[H] / 65536;
        }
      }
      ac.buffer = d;
      ac.loop = !0;
    }
    h();
  }, c = new Image();
  c.onload = c.onerror = () => {
    h();
  };
  c.src = xc;
  setTimeout(l, 50);
  NO_INLINE(rc)();
  Sa = E(() => {
    Qa = [-1, 1].map(k => E(() => {
      C(u(10, 1), g.translate(.3 * k, -0.8).scale(.2, .7, .24), p(1, .3, .4));
    }));
    [0, 180].map(k => C(pc, g.rotate(0, k).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), p(1, 1, .8),));
    C(pb(20), g.translate(0, 1).scale(.5, .5, .5), p(1, .3, .4));
    const d = r(y(x(u(15, 1), r(u(z), g.translate(0, 0, 1).scale(2, 2, .5)),),), g.rotate(-90, 0).scale(.1, .05, .1), p(.3, .3, .3),);
    [-1, 1].map(k => C(d, g.translate(.2 * k, 1.2, .4).rotate(0, 20 * k, 20 * k)));
    C(u(z), g.translate(0, .9, .45).scale(.15, .02, .06), p(.3, .3, .3));
    C(pb(20), g.scale(.7, .8, .55), p(1, .3, .4));
  });
});

