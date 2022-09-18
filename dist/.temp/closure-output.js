let ea = 0, ka = !0, la = 0, ma = 0, na = 0, a = 0, oa = 0, qa = 0, xa = 0, ya = 0, Ba = 0, Ca = 0, Fa = 0, Ga = 0, Ha = 0, d = .066, Ia, Ja, Ka, La, Pa, Ra, Sa, Ta;
const Ua = Math.PI / 180, f = new DOMMatrix(), Va = (b, e) => e < b ? b : e, Wa = b => 0 > b ? -b : b, Xa = b => 0 > b ? 0 : 1 < b ? 1 : b, Ya = (b, e) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > e ? 0 : 1 < e ? 1 : e)), Za = b => Math.atan2(Math.sin(b *= Ua), Math.cos(b)) / Ua, $a = (b, e, h) => {
  b *= Ua;
  e = (e * Ua - b) % (2 * Math.PI);
  return (b + (2 * e % (2 * Math.PI) - e) * (0 > h ? 0 : 1 < h ? 1 : h)) / Ua;
}, ab = (b, e, h, l) => {
  var k = e - b;
  b += Math.sign(e - b) * Va(0, (0 > k ? -k : k) ** .9 - h) * l * 2;
  return b + (e - b) * Xa(l / 7);
}, m = (b, e) => Array.from(Array(b), (h, l) => e(l)), bb = (b, e, h, l,) => [b, 0, 0, 0, 0, e, 0, 0, 0, 0, (l + h) / (h - l), -1, 0, 0, 2 * l * h / (h - l), 0], cb = ({x:b, y:e, z:h}, l) => b * l.x + e * l.y + h * l.z, db = ({x:b, y:e, z:h}) => {
  var l = n;
  return Math.hypot(b - l.x, e - l.y, h - l.z) || 0;
}, eb = b => {
  let e = 0, h = 0, l = 0, k, p = b.at(-1);
  for (k of b) {
    e += (p.y - k.y) * (p.z + k.z), h += (p.z - k.z) * (p.x + k.x), l += (p.x - k.x) * (p.y + k.y), p = k;
  }
  return k = Math.hypot(e, h, l), e /= k, h /= k, l /= k, {x:e, y:h, z:l, w:e * p.x + h * p.y + l * p.z,};
}, q = (b, e, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * e << 8 | 255 * b, fb = (b, e, h) => (b.B = h, b.u = e, b), ib = (b, e, h = b.u) => fb(b.map(l => (({x:k, y:p, z:t}, c) => ({x:k, y:p, z:t} = c.transformPoint({x:k, y:p, z:t,}), {x:k, y:p, z:t,}))(l, e)), h, b.B,), r = (b, e, h) => b.map(l => ib(l, e, h)), jb = (b, e = 0) => m(b, h => {
  const l = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:.01 > (0 > l ? -l : l) ? l : 0 > l ? l - e : l + e,};
}), kb = (b, e, h) => b.map((l, k, {length:p}) => fb([l, e[p - k - 1], e[p - (k + 1) % p - 1], b[(k + 1) % p]], b.u, h,)), u = (b, e, h = 0, l) => {
  l = b.length ? b : jb(b, l);
  b = ib(l, f.translate(0, 1).scale3d(0 < h ? h : 1));
  h = ib(l, f.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse();
  return [...kb(h, b, e), h, b];
}, lb = (b, e = b, h = (l, k) => (k *= Math.PI / e, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(k), y:Math.cos(k), z:Math.sin(l) * Math.sin(k),})) => {
  const l = [];
  for (let k = 0; b > k; k++) {
    for (let p = 0; e > p; p++) {
      const t = fb([], 0, 1);
      l.push(t);
      t.push(h(k, p, t));
      p && t.push(h((k + 1) % b, p, t));
      e - 1 > p && t.push(h((k + 1) % b, p + 1 % e, t));
      t.push(h(k, p + 1 % e, t));
    }
  }
  return l;
}, mb = (b, e) => {
  var h, l, k, p = e.A;
  for (var t = 0; p.length > t; ++t) {
    if (-0.00008 > (k = cb(b, p[t]) - b.w) ? l = e : 8e-5 < k && (h = e), l && h) {
      l = [];
      k = [];
      p = e.A;
      t = e.v;
      let c = p.at(-1), g = cb(b, c) - b.w;
      for (const w of p) {
        h = cb(b, w) - b.w, 8e-5 > g && k.push(c), -0.00008 < g && l.push(c), (8e-5 < g && -0.00008 > h || -0.00008 > g && 8e-5 < h) && (g /= h - g, c = {x:c.x + (c.x - w.x) * g, y:c.y + (c.y - w.y) * g, z:c.z + (c.z - w.z) * g,}, l.push(c), k.push(c)), c = w, g = h;
      }
      return {s:2 < l.length && {A:fb(l, p.u, p.B), v:t, m:e,}, o:2 < k.length && {A:fb(k, p.u, p.B), v:t, m:e,},};
    }
  }
  return {s:h, o:l,};
}, nb = (b, e, h = eb(e.A)) => {
  if (b) {
    const {s:l, o:k} = mb(b, e);
    l || k || b.C.push(e);
    l && (b.s = nb(b.s, l, h));
    k && (b.o = nb(b.o, k, h));
  } else {
    b = {x:h.x, y:h.y, z:h.z, w:h.w, C:[e], s:0, o:0,};
  }
  return b;
}, ob = (b, e, h) => {
  const l = [], k = (p, t) => {
    let {s:c, o:g} = mb(p, t);
    c || g || (0 < h * cb(p, e) ? c = t : g = t);
    c && (p.s ? k(p.s, c) : l.push(c));
    g && p.o && k(p.o, g);
  };
  for (const p of e.C) {
    k(b, p);
  }
  return l;
}, qb = (b, e) => b && (e(b), qb(b.s, e), qb(b.o, e)), rb = b => b.length ? b.reduce((e, h) => nb(e, {A:h, v:0, m:0,}), 0) : b, sb = b => (qb(b, e => {
  const h = e.o;
  e.o = e.s;
  e.s = h;
  e.x *= -1;
  e.y *= -1;
  e.z *= -1;
  e.w *= -1;
  for (const l of e.C) {
    l.v = !l.v;
  }
}), b), tb = (...b) => b.reduce((e, h) => {
  const l = [];
  if (e = rb(e), h) {
    h = rb(h);
    qb(e, k => k.C = ob(h, k, 1));
    qb(h, k => l.push([k, ob(e, k, -1)]));
    for (const [k, p] of l) {
      for (const t of p) {
        nb(e, t, k);
      }
    }
  }
  return e;
}), y = (b, ...e) => sb(tb(sb(rb(b)), ...e)), A = b => {
  const e = new Map(), h = new Map(), l = k => {
    if (k.m) {
      const p = e.get(k.m);
      p ? (h.delete(p), k = l(k.m)) : e.set(k.m, k);
    }
    return k;
  };
  return qb(b, k => {
    for (const p of k.C) {
      h.set(l(p), p.v);
    }
  }), Array.from(h, ([{A:k}, p]) => {
    const t = k.map(({x:c, y:g, z:w}) => ({x:c, y:g, z:w,}));
    return fb(p ? t.reverse() : t, k.u, k.B);
  });
}, B = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], ub = [], vb = [], wb = [], xb = [], yb = [], zb = [[]], Ab = new Map(), Bb = new Int32Array(7), Gb = b => {
  let {x:e, y:h, z:l} = Ja[b];
  Cb[0] = e;
  Cb[1] = h;
  Cb[2] = l;
  b = "" + (Ja.B ? Fb : Bb);
  let k = Ab.get(b);
  return void 0 !== k ? (e = 3 * k, xb[e] = (xb[e++] + Bb[4]) / 2, xb[e] = (xb[e++] + Bb[5]) / 2, xb[e] = (xb[e] + Bb[6]) / 2) : (Ab.set(b, k = Ab.size), wb.push(e, h, l), xb.push(Bb[4], Bb[5], Bb[6]), yb.push(Bb[3])), k;
}, C = (b, e = f, h) => zb.at(-1).push(...r(b, e, h)), Hb = () => {
  var b = zb.at(-1);
  for (Ja of b) {
    const {x:e, y:h, z:l} = eb(Ja);
    Bb[3] = 0 | Ja.u;
    Bb[4] = 32767 * e;
    Bb[5] = 32767 * h;
    Bb[6] = 32767 * l;
    for (let k = 2, p = Gb(0), t = Gb(1); Ja.length > k; ++k) {
      vb.push(p, t, t = Gb(k));
    }
  }
  b.length = 0;
  b = ea;
  return {I:b, H:(ea = vb.length) - b,};
}, G = b => {
  const e = Ia, h = {j:f, G:ub.length + 1, F:1, m:e === ub[0] ? void 0 : e,};
  b = (Ia = h, ub.push(h), zb.push([]), b(h) || Hb());
  return h.D = b, zb.pop(), Ia = e, h;
};
var Ib = -11, Jb = 17, Kb = -90, Lb = 0, Mb = 0;
const Ob = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 
35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 
47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Pb = b => Math.sin(b * Math.PI * 2), Qb = b => .5 > b % 1 ? 1 : -1, Rb = b => b % 1 * 2 - 1, Sb = b => {
  b = b % 1 * 4;
  return 2 > b ? b - 1 : 3 - b;
}, Tb = [], Wb = () => {
  Ka || !ka ? Ub.disconnect() : Ub.connect(Vb.destination);
  b4.innerHTML = "Music: " + ka;
}, Xb = (b = !1) => {
  if (Ka !== b) {
    Ka = b;
    La = 0;
    try {
      b ? document.exitPointerLock() : Ub.start();
    } catch {
    }
    document.body.className = b ? "l m" : "l";
    Wb();
  }
}, Yb = () => {
  let b = 0, e = 0, h = 0, l, k, p;
  const t = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Tb.length = la = ma = 0;
    l = k = void 0;
    document.hidden && Xb(!0);
  };
  b1.onclick = () => Xb();
  b2.onclick = () => {
    Xb();
    La = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    ka = !ka;
    Wb();
  };
  b5.onclick = () => Xb(!0);
  onclick = () => {
    p = 1;
    Ka || (Tb[5] = !0, La && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = t;
  onkeydown = onkeyup = ({code:c, target:g, type:w, repeat:J}) => {
    J || ((g = !!w[5] && g === document.body) && ("Escape" === c || "Enter" === c && Ka) ? Ka && !p || Xb(!Ka) : (c = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[c], 5 === c ? g && (Tb[c] = 1) : Tb[c] = g));
  };
  onmousemove = ({movementX:c, movementY:g}) => {
    La && (c || g) && (Mb += .1 * c, Lb += .1 * g);
  };
  hC.ontouchstart = c => {
    if (!Ka) {
      for (const g of c.changedTouches) {
        La && g.pageX > hC.clientWidth / 2 ? l || (l = g, b = Mb, e = Lb) : k = k || g;
      }
      h = na;
    }
  };
  hC.ontouchmove = ({changedTouches:c}) => {
    if (!Ka) {
      for (const {pageX:g, pageY:w, identifier:J} of c) {
        l?.identifier === J && (Mb = b + (g - l.pageX) / 3, Lb = e + (w - l.pageY) / 3), k?.identifier === J && (la = -(g - k.pageX) / 18, ma = -(w - k.pageY) / 18, la = .35 > (0 > la ? -la : la) ? 0 : .8 * la, ma = .35 > (0 > ma ? -ma : ma) ? 0 : .8 * ma);
      }
    }
  };
  hC.ontouchend = c => {
    for (const g of c.changedTouches) {
      g.identifier === l?.identifier && (l = void 0), g.identifier === k?.identifier && (k = void 0, ma = la = 0);
    }
    c.preventDefault();
    c = na - h;
    (!h || .02 < c && .4 > c) && (Tb[5] = !0);
  };
  oncontextmenu = () => !1;
  t();
  Xb(!0);
}, H = (b, e, h) => b + (e - b) * Xa(1 - Math.exp(-h * d)), Zb = ({l:b}) => b, S = [], $b = [], ac = () => {
  oa = $b.reduce((b, e) => b + e.l, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[oa];
}, bc = () => {
  ac();
  localStorage.DanteSP22 = JSON.stringify([S.map(Zb), $b.map(Zb), xa, a, Ha,]);
}, n = {x:0, y:0, z:0,}, cc = (b, e, h) => f.translate(b + Math.sin(a + 2) / 5, e + Math.sin(.8 * a) / 3, h).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), ec = b => {
  C(u(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
  C(u(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
  C(u(B), b.translate(0, -0.4).scale(.5, .1, .5), q(.5, .5, .4));
  G(e => {
    const h = {l:0, g:0, i:0, m:e.m,}, l = S.push(h) - 1;
    e.h = () => {
      const k = h.l, p = h.g, t = h.i, c = (h.j = b.multiply(e.j)).transformPoint();
      2.9 > db(c) && Tb[5] && (.3 > p || .7 < p) && (h.l = k ? 0 : 1, l && (Fa || (h4.innerHTML = "* click *", qa = a + 1)), xa = l, bc());
      return h.g = H(p, k, 4), h.i = H(t, k, 1), e.D = dc[.5 < p ? 1 : 0], b.rotate(60 * h.g - 30, 0).translateSelf(0, 1);
    };
  });
}, fc = (b, ...e) => {
  let h = -1, l = 0, k = 0, p = 0, t = 0, c = 0, g = 3, w = 1;
  const J = Ia, E = $b.length, Z = e.map(([F, fa, aa]) => ({x:F, z:fa, w:aa,}));
  let ba = Z[0], {x:V, z} = ba, W = V, N = z;
  const ca = {l:0, j:f, h() {
    if (!ca.l) {
      var F = 1, fa = 1 / 0;
      for (var aa of Z) {
        var da = aa.w, O = Math.hypot(V - aa.x, z - aa.z), pa = O - da;
        Ma ||= O < da;
        0 < pa && fa > pa && (fa = pa, ba = aa);
        da = O / da;
        F = F < da ? F : da;
      }
      if (!Ma) {
        fa = ba.x;
        aa = ba.z;
        da = ba.w;
        O = V - fa;
        pa = z - aa;
        let za = Math.hypot(O, pa), Na = Math.atan2(-pa, O);
        w && (k = (Math.random() - .5) * Math.PI / 2, g = Va(1, g / (1 + Math.random())));
        Na += k;
        h = -Math.cos(Na);
        l = Math.sin(Na);
        .1 < za && (za = (za < da ? za : da) / (za || 1), V = O * za + fa, z = pa * za + aa);
      }
      w = Ma;
      g = H(g, 3 + 6 * (1 - F), 3 + F);
      W = H(W, V = H(V, V + h, g), g);
      N = H(N, z = H(z, z + l, g), g);
      p = $a(p, Math.atan2(W - t, N - c) / Ua - 180, 3 * d,);
      t = W;
      c = N;
      F = (ca.j = b.multiply(J.j.translate(W, 0, N).rotateSelf(0, p).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a)),)).transformPoint();
      if (1.5 > db(F)) {
        ca.l = 1;
        F = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][oa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        var Ma = oa && 12 > oa ? 5 : 7;
        Fa || (h4.innerHTML = F, qa = a + Ma);
        bc();
      }
    }
    ca.l && (F = E % 4 - 2, ca.j = Ta.j.translate(E % 4 * 1.2 - 1.7 + Math.sin(a + E) / 6, -2, 1.7 * (E / 4 | 0) - 5.5 + (0 > F ? -F : F) + Math.cos(a / 1.5 + E) / 6,));
  },};
  $b.push(ca);
}, gc = () => {
  for (const e of ub) {
    var b = e.h;
    (e.j = e.m ? e.m.j : f, b) && (b = b(e)) && (e.j = e.j.multiply(b));
  }
  for (const e of $b) {
    e.h();
  }
}, kc = () => {
  let b;
  G(() => {
    const e = () => {
      var c = S[2].i, g = 1 - S[4].i;
      return c < g ? c : g;
    }, h = (c, g, w) => G(J => {
      J.h = () => f.translate(e() * Math.sin(3 * c + a * c) * g);
      B.map(({x:E, z:Z}) => {
        C(u(11, 1), f.translate(4 * E, 4, w + 4 * Z).scale(.8, 3, .8), q(.5, .3, .7, .6),);
        C(u(B), f.translate(4 * E, 7, w + 4 * Z).scale(1, .3), q(.5, .5, .5, .3));
      });
      C(A(y(r(u(B), f.translate(0, 0, w).scale(5, 1, 5), q(.8, .8, .8, .3),), ...[-1, 1].map(E => r(u(B), f.translate(5 * E, .2, w).rotate(0, 0, -30 * E).scale(4, 1, 2), q(.8, .8, .8, .3),)),),),);
      C(u(B), f.translate(0, -3, w).scale(8, 2, 8), q(.4, .4, .4, .3));
    }), l = (Ta = G(c => {
      c.h = () => cc(-12, 4.2, 40 * Ga - 66);
      ec(f.translate(0, -3, 4));
      C(hc);
    }), m(7, c => C(u(6, 1), f.translate(4 * (c / 6 - .5), 3).scale(.2, 3, .2), q(.3, .3, .38)),), Hb()), k = (fc(f.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), fc(f.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...jb(18).map(({x:c, z:g}) => [7 * c, 10 * g, 4.5 - 2 * (0 > c ? -c : c)]),), C(u(B), f.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), q(.8, .8, .8, .2),), B.map(({x:c, z:g}) => C(u(6), f.translate(3 * c, 3, 15 * g).scale(.7, 4, .7), q(.6, .3, .3, .4))), [-23, 22].map(c => 
    C(u(B), f.translate(0, 0, c).scale(3, 1, 8), q(.9, .9, .9, .2))), [-15, 15].map((c, g) => {
      C(u(B), f.translate(0, 6.3, c).scale(4, .3, 1), q(.3, .3, .3, .4));
      C(u(B), f.translate(0, 1, c).scale(3, .2, .35), q(.5, .5, .5, .3));
      G(w => (w.h = () => f.translate(0, 4.7 * -S[g + 1].g, c), l));
    }), m(5, c => m(2, g => C(ic, f.translate(18.5 * (g - .5), 0, 4.8 * c - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2), q(1, 1, .8, .2),))), C(u(B), f.translate(3, 1.5, -20).scale(.5, 2, 5), q(.7, .7, .7, .2)), C(u(B), f.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), q(.75, .75, .75, .2),), C(u(5), f.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), q(.6, .3, .3, .4)), ec(f.translate(-5.4, 1.5, -19).rotate(0, -90)), C(u(B), f.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 
    0, -30).scale(4, .6, 4.5), q(.8, .2, .2, .5),), C(A(y(tb(r(u(6, 0, 0, .3), f.translate(8, -3, -4).scale(13, 1, 13), q(.7, .7, .7, .2),), r(u(6), f.translate(0, -8).scale(9, 8, 8), q(.4, .2, .5, .5)), r(u(6, 0, 0, .3), f.translate(0, -0.92).scale(13, 2, 13), q(.8, .8, .8, .2),),), r(u(5), f.scale(5, 30, 5), q(.4, .2, .6, .5)), r(u(5, 0, 1.5), f.translate(0, 1).scale(4.5, .3, 4.5), q(.7, .5, .9, .2),), r(u(B), f.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), q(.5, .5, .5, 
    .5),), r(u(6), f.translate(15, -1.5, 4).scale(3.5, 1, 3.5), q(.5, .5, .5, .5),),),),), G(c => {
      c.h = () => f.translate(0, .01 < S[3].g ? (5 * Math.cos(1.5 * a) + 2) * S[3].i * (1 - S[2].g) + -15 * (1 - S[3].g) : -500, 0,);
      ec(f.translate(0, 1.2));
      C(u(5), f.translate(0, -0.2).scale(5, 1, 5), q(.6, .65, .7, .3));
    }), ec(f.translate(15, -2, 4)), h(.7, 12, 35), h(1, 8.2, 55), G(c => {
      c.h = () => f.translate(e() * Math.sin(a / 1.5 + 2) * 12);
      C(A(y(tb(r(u(B), f.scale(1.5, 1, 5), q(.9, .9, .9, .2)), r(u(6), f.scale(4, 1, 5), q(.9, .9, .9, .2)), r(u(B), f.translate(0, -2).scale(2, 3.2, 1.9), q(.3, .8, .5, .5),), r(u(16, 1, 0, 4), f.scale(1, 1, 1.5).rotate(0, 90), q(.9, .9, .9, .2),),), r(u(B), f.scale(1.3, 10, 1.3), q(.2, .7, .4, .6)),),), f.translate(0, 0, 45),);
      fc(f.translate(0, 2.8, 45), [0, 0, 4.5]);
    }), G(c => {
      c.h = () => f.translate(9.8 * (1 - e()));
      C(u(3), f.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), q(.3, .6, .6, .2));
      C(u(8), f.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), q(.8, .8, .8, .2));
      C(u(B), f.translate(-23, -3, 55).scale(5.2, 1.7, 3), q(.5, .5, .5, .3));
      C(u(B), f.translate(-23, -2.2, 62).scale(3, 1, 4), q(.5, .5, .5, .3));
      ec(f.translate(-23, -0.5, 66.5));
    }), C(u(B), f.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), q(.9, .9, .9, .2)), G(c => {
      c.h = () => f.translate(0, Xa(1 - 5 * e()) * Ya(S[4].g, S[5].g) * Math.sin(1.35 * a) * 4);
      C(u(B), f.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), q(.7, .7, .7, .2),);
      C(A(y(r(u(B), f.scale(3, 1.4, 2.7)), r(u(B), f.scale(1.2, 8, 1.2)),),), f.translate(-33, -3, 55), q(.7, .7, .7, .2),);
    }), G(c => {
      c.h = () => f.translate(0, 0, Xa(1 - 5 * e()) * Ya(S[4].g, S[5].g) * Math.sin(.9 * a) * 8);
      C(A(y(r(u(B), f.translate(-27, -3, 55).scale(3, 1.4, 2.7), q(.9, .9, .9, .2),), r(u(B), f.translate(-27, -3, 55).scale(1, 3), q(.9, .9, .9, .2),),),),);
      C(u(B), f.translate(-39, -3, 55).scale(3, 1.4, 2.7), q(.9, .9, .9, .2));
    }), G(c => {
      c.h = () => f.translate(0, -6.5 * S[4].i);
      C(u(6), f.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), q(.7, .7, .7, .4),);
    }), [...r(A(tb(r(u(B), f.translate(0, -3).scale(11, 1.4, 3), q(.9, .9, .9, .2),), y(r(u(6), f.rotate(0, 0, 90).scale(6, 8, 6), q(.3, .6, .6, .3)), r(u(4, 0, .01), f.translate(0, 6).scale(12, 2, .75).rotate(0, 45), q(.3, .6, .6, .3),), r(u(6), f.rotate(0, 0, 90).scale(5, 12, 5), q(.3, .6, .6, .3)), ...[5, 0, -5].map(c => r(u(5), f.translate(c, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), q(.3, .6, .6, .3),)),),),), f,)]), p = (C(k, f.translate(-53, 0, 55)), C(u(6), f.translate(-61.3, -2.4, 49).scale(3, 
    1, 5), q(.4, .6, .6, .3)), C(u(7), f.translate(-57, -2.6, 46).scale(4, 1, 4), q(.8, .8, .8, .3)), ec(f.translate(-55, -1.1, 46).rotate(0, 90)), G(c => {
      c.F = 0;
      c.h = () => f.translate(-75, (1 - S[5].i) * (1 - S[6].g) * 3, 55).rotate(180 * (1 - S[5].i) + Ca, 0,);
      C(k);
    }), C(u(B), f.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), q(.7, .7, .7, .2),), C(u(3, 0, -0.5), f.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), q(.8, .8, .8, .2),), C(A(y(tb(r(u(B), f.translate(-100, -2.5, 55).scale(8, 1, 8), q(.8, .8, .8, .2),), r(u(B), f.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), q(.8, .8, .8, .2),), r(u(B), f.translate(-100, -2.6, 70).scale(3, 1.1, 7), q(.8, .8, .8, .2),), r(u(B), f.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 
    1.1, 5), q(.8, .8, .8, .2),), r(u(6), f.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), q(.6, .6, .6, .3),), r(u(B), f.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), q(.8, .8, .8, .2),), r(u(B), f.translate(-100, .42, 92).scale(3, 1.1, 4.1), q(.8, .8, .8, .2),),), r(u(8), f.translate(-100, -1, 55).scale(7, .9, 7), q(.3, .3, .3, .4),), r(u(8), f.translate(-100, -2, 55).scale(4, .3, 4), q(.4, .4, .4, .5),), r(u(8), f.translate(-100, -3, 55).scale(.6, 1, .6), q(.4, 
    .4, .4, .5),),),), f,), fc(f.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), fc(f.translate(-89, .2, 80), [0, 0, 6]), C(A(y(r(u(B), f.translate(-100, 1, 63).scale(7.5, 4), q(.5, .5, .5, .4),), r(u(B), f.translate(-100, 0, 70).scale(2, 2, 10), q(.5, .5, .5, .4),), r(u(20, 1), f.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), q(.5, .5, .5, .4),),),),), G(c => (c.h = () => f.translate(-99.7, 5.3 * -S[6].g - 2, 63.5), l),), B.map(({x:c, z:g}) => {
      C(u(6), f.translate(7 * c - 100, -3, 7 * g + 55).scale(1, 8.1), q(.6, .15, .15, .8),);
      [4, -0.4].map(w => C(u(6), f.translate(7 * c - 100, w, 7 * g + 55).scale(1.3, .5, 1.3), q(.4, .2, .2, .8),));
    }), m(7, c => {
      C(u((23 * c + 1) % 5 + 5, 0, .55), f.translate(5 * Math.sin(c) - 101 + c, -2.3 - c, 44.9 - 2.8 * c).scaleSelf(5 + c / 2, 1 + c / 6, 5 + c / 3,), q(.5 - c / 17, .5 - (1 & c) / 9, .6, .3),);
    }), C(u(B), f.translate(-87, -9.5, 24).scale(7, 1, 3), q(.4, .5, .6, .4)), C(u(4), f.translate(-86, -9.2, 27).scale(5, 1, 5), q(.5, .6, .7, .3)), C(u(18, 1), f.translate(-86, -9, 31).scale(1.5, 1, 1.5), q(.3, .3, .4, .1)), ec(f.translate(-86, -7.5, 31)), G(c => {
      c.h = () => f.translate(0, 3.5 * (1 - Va(S[6].g, S[7].g)) + Ya(S[7].i, S[6].i) * Math.sin(a) * 5,);
      [0, 12, 24].map(g => C(u(B), f.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), q(.2, .5, .6, .2),));
    }), G(c => {
      c.h = () => {
        const g = Ya(S[7].i, S[6].i);
        return f.translate(0, g * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + g) * g);
      };
      [6, 18].map(g => C(u(B), f.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), q(.1, .4, .5, .2),));
    }), C(A(y(tb(r(u(B), f.scale(11, 1, 13), q(.3, .4, .6, .3)), r(u(5), f.translate(0, 0, -7).scale(2, 1.2, 2), q(.2, .4, .7, .3),), r(u(5), f.scale(9, 1.2, 9), q(0, .2, .3, .5)),), r(u(5), f.scale(5.4, 5, 5.4), q(0, .2, .3, .5)),),), f.translate(-38.9, -11.3, 17),), ec(f.translate(-38.9, -9.6, 10)), G(c => {
      c.h = () => f.translate(0, -7.3 * S[7].i);
      C(A(y(tb(r(u(5), f.translate(0, 2).scale(5, 7, 5).skewY(8), q(.2, .4, .5, .5),), r(u(5), f.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), q(.25, .35, .5, .5),), r(u(5), f.translate(0, 9).scale(.6, 7, .6).skewY(8), q(.35, .3, .5, .5),),), r(u(5), f.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), q(.2, .4, .5, .5),),),), f.translate(-38.9, -11.3, 17),);
      fc(f.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...jb(15).map(({x:g, z:w}) => [3 * g, 3 * w, 1.5]),);
    }), B.map(({x:c, z:g}) => {
      b = f.translate(9 * c - 38.9, -7.3, 11 * g + 17);
      C(u(18, 1), b.scale(1, 4), q(.25, .25, .25, 1));
      [1.5, 8].map(w => C(u(18, 1), b.translate(0, w - 4).scale(1.5, .5, 1.5), q(.6, .6, .6, .3)));
    }), C(A(y(tb(r(u(6), f.translate(0, 0, -36).scale(15, 1.2, 15), q(.7, .7, .7, .3),), r(u(B), f.translate(0, 0, -18).scale(4, 1.2, 6), q(.45, .4, .6, .3),),), ...m(6, c => m(6, g => r(u(6), f.translate(4.6 * g - 12 + 2 * (1 & c), 0, 4.6 * c - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2,), q(.7, .7, .7, .3),))).flat(),),), f.translate(-38.9, -11.3, 17),), fc(f.translate(-38.9, -8.4, -21), [0, 0, 12]), C(u(5), f.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), q(.8, .1, .25, .4)), ec(f.translate(-84, 
    -0.5, 85).rotate(0, 45)), G(c => {
      c.h = () => cc(-123, 1.4, 55 + -65 * Ha);
      ec(f.translate(0, -3, -4).rotate(0, 180));
      C(hc);
    }), fc(f.translate(-115, .2, -12), [0, 0, 3.5]), A(y(r(u(B), f.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), q(.25, .25, .35, .3),), r(u(3), f.translate(0, 0, -5.5).scale(3, 2), q(.6, .3, .4, .3)), ...[-1.2, 1.2].map(c => r(u(B), f.translate(c, -0.5, 1).scale(.14, .3, 6.5), q(.7, .2, 0, .3),)),),)), t = (G(c => {
      c.h = () => {
        var g = Math.sin(1.1 * a);
        return f.translate.call(f, 0, -2, Ya(S[10].g, S[11].g) * (0 > g ? -g : g) * -8.5 + 10);
      };
      m(2, g => C(p, f.translate(9 * g - 110 + (1 & g), 1.7, -12)));
    }), G(c => {
      c.h = () => {
        var g = Math.sin(2.1 * a);
        return f.translate.call(f, 0, -2, Ya(S[10].g, S[11].g) * (0 > g ? -g : g) * -8.5 + 10);
      };
      m(2, g => C(p, f.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
    }), G(c => {
      c.h = () => {
        var g = Math.sin(1.5 * a);
        return f.translate.call(f, 0, -2, -8.5 * Va((1 - S[10].g) * (1 - Ya(S[10].g, S[11].g)), Ya(S[10].g, S[11].g) * (0 > g ? -g : g),) + 10,);
      };
      m(3, g => C(p, f.translate(9 * g - 106, 1.7, -12)));
    }), C(A(y(tb(r(u(B), f.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), r(u(B), f.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...m(4, c => r(u(B), f.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9),)), ...m(3, c => r(u(B), f.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9)),),),), f.translate(-123, 0, -12), q(.5, .5, .6, .2),), C(u(5), f.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), q(.25, .25, .35, 1),), C(u(B), f.translate(-116, -2.6, -12).scale(3.2, 1.1, 
    4).skewX(3), q(.8, .8, .8, .2),), C(u(6), f.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), q(.6, .5, .7, .2)), ec(f.translate(-116, -1.4, -18).rotate(0, 180)), m(3, c => {
      C(jc, f.translate(12 * c - 109, -9, -12), q(.6, .6, .6, .3));
      C(jc, f.translate(-77, -9, -12 * c - 20).rotate(0, 90), q(.6, .6, .6, .3));
    }), C(A(y(r(u(12), f.translate(-77, -13.9, -12).scale(4, 18.2, 4), q(.7, .7, .7, .2),), r(u(B), f.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), q(.4, .5, .6, .2),), r(u(B), f.translate(-77, 0, -14).scale(1.5, 2.2, 2), q(.4, .5, .6, .2),), r(u(12), f.translate(-77, 2.8, -12).scale(3, 5, 3), q(.4, .5, .6, .2),),),),), C(u(B), f.translate(-115.5, -17, -12).scale(.5, 15, 2.2), q(.6, .6, .6, .3)), C(u(B), f.translate(-77, -17, -50.5).scale(2.2, 15, .5), q(.6, .6, .6, .3)), C(u(B), f.translate(-84.9, 
    -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), q(.6, .6, .6, .3),), C(A(y(r(u(B), f.translate(-93, -5.8, -40).scale(9, 1, 5), q(.8, .8, .8, .1),), r(u(9), f.translate(-98, -5.8, -40).scale(3, 8, 3), q(.7, .7, .7, .2),),),),), C(u(9), f.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), q(.5, .5, .5, .3)), ec(f.translate(-98, -4.4, -40).rotate(0, 90)), fc(f.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]), C(A(y(tb(r(u(6, 0, 0, .6), f.translate(-100, .7, 105.5).scale(8, 1, 11), q(.7, 
    .7, .7, .2),), r(u(B), f.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), q(.7, .7, .7, .2),), r(u(B), f.translate(-91.2, .7, 107).scale(3, 1, 3.3), q(.7, .7, .7, .2),),), r(u(5), f.translate(-100, .7, 113).scale(4, 3, 4), q(.7, .7, .7, .2)),),),), m(4, c => G(g => {
      g.h = () => {
        const w = Ya(S[8].i, S[12].i);
        return f.translate((2 < c ? 2 * (1 - w) + w : 0) - 100, w * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3) + .7, 115 + (1 & c ? -1 : 1) * (1 - S[8].i) * (1 - S[12].i) * -7 + (.05 > w ? .05 : w) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),);
      };
      C(u(6), f.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5), q(.5 - c / 8, c / 12 + .5, .7, .3),);
    })), G(c => {
      c.h = () => {
        const g = Ya(S[8].i, S[12].i);
        return f.translate(2.5 * (1 - g) - 139.7, -3 * (1 - S[8].g) + g * Math.sin(.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
      };
      C(A(y(r(u(10), f.scale(6, 2, 6), q(.1, .6, .5, .3)), r(u(10), f.scale(3.3, 6, 3.3), q(.1, .6, .5, .5)),),),);
      b = f.translate(-7.5).rotate(0, 90);
      C(u(15), b.scale(3, 2.3, 3), q(.4, .4, .4, .3));
      C(u(10), b.scale(2, 2.5, 2), q(.3, .8, .7, .3));
      C(u(5), b.scale(1, 3), q(.5, .5, .5, .5));
      ec(b.translate(0, 3.4).rotate(0, 180));
      [-1, 1].map(g => C(ic, f.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), q(1, 1, .8, .2),));
      fc(f.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    }), [-1, 1].map(c => {
      C(u(15, 1), f.translate(-7.5 * c - 100, 3.7, 96).scale(.8, 4, .8), q(.6, .24, .2, .5),);
      [7.2, 1.5].map(g => C(u(15, 1), f.translate(-7.5 * c - 100, g + .7, 96).scale(1.1, .5, 1.1), q(.5, .24, .2, .4),));
      C(ic, f.translate(-5 * c - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), q(1, 1, .8),);
      C(A(y(r(u(B), f.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), q(.5, .5, .5, .4),), r(u(B), f.scale(3, 3, 10), q(.6, .24, .2, .5)), r(u(30, 1), f.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), q(.6, .24, .2, .5),), r(u(5), f.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), q(.6, .24, .2, .5),), r(u(5), f.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), q(.6, .24, .2, .5),),),), f.translate(c - 100, .7, 97),);
    }), G(c => (c.h = () => f.translate(-100, .6 - 6 * S[12].g, 96.5).scale(.88, 1.2), l)), [...r(u(28, 1), f.scale(8, 1, 8), q(.45, .45, .45, .2)), ...r(u(5), f.translate(0, 1).scale(1, .2), q(.3, .3, .3, .2)),]);
    G(c => {
      c.h = () => f.translate(-80, 1, 106).rotate(0, 40 + ya);
      C(A(y(r(u(28, 1), f.scale(8, 1, 8), q(.45, .45, .45, .2)), r(u(B), f.translate(0, 0, -5.5).scale(1.5, 3, 2.5), q(.45, .45, .45, .2),),),),);
      C(u(8), f.translate(0, 2).scale(3, 1.5, 3), q(.7, .7, .7, .1));
      C(u(5), f.translate(0, 2).scale(1, 2), q(.3, .3, .3, .2));
      fc(f.translate(0, 3), ...jb(10).map(({x:g, z:w}) => [5.6 * g, 5.6 * w, 2.5]),);
    });
    G(c => {
      c.h = () => f.translate(-64, 1, 106).rotate(0, Ba);
      C(A(y(r(u(28, 1), f.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)), r(u(B), f.scale(9, 5, 2), q(.3, 0, 0, .3)),),),);
      C(t);
      [-1, 1].map(g => C(ic, f.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), q(1, 1, .8),));
    });
    G(c => {
      c.h = () => f.translate(-48, 1, 106).rotate(0, 180 - Ba);
      C(A(y(r(u(30, 1), f.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)), r(u(B), f.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)), r(u(B), f.translate(0, 0, 7).scale(2, 5, 9), q(.3, 0, 0, .3)),),),);
      C(t);
    });
    G(c => {
      c.h = () => f.translate(-48, 1, 90).rotate(0, 270 + Ba);
      C(A(y(r(u(30, 1), f.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)), r(u(B), f.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)), r(u(B), f.translate(0, 0, -7).scale(2, 5, 9), q(.3, 0, 0, .3),),),),);
      C(t);
    });
    C(u(B), f.translate(-56, 1, 106).scale(.7, .8, 2.5), q(.7, .7, .7, .2));
    C(u(B), f.translate(-48, 1, 98).scale(2.5, .8, .7), q(.7, .7, .7, .2));
    C(u(B), f.translate(-39, .4, 90).scale(2, 1, 2), q(.7, .7, .7, .3));
    C(u(B), f.translate(-34.2, .4, 90).scale(3, 1, 3), q(.7, .7, .7, .3));
    ec(f.translate(-34, 2.7, 96).rotate(-12, 0));
    C(u(5), f.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), q(.2, .5, .5, .6));
    [q(.1, .55, .45, .2), q(.2, .5, .5, .3), q(.3, .45, .55, .4)].map((c, g) => G(w => {
      w.h = () => f.translate(0, (1 - S[13].i) * (1 - S[14].i) * 3 + Ya(S[13].i, S[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4.7,);
      C(u(8), f.translate(-23.5, g / 1.5 - .4, 90 + 6.8 * g).scale(3.6, 2 - g / 1.5, 3.6).rotate(0, 22.5), c,);
      2 === g && C(u(6), f.translate(-29, .4, 90).scale(2.4, 1, 2.8), q(.6, .7, .6, .3));
      1 === g && C(u(B), f.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), q(.6, .6, .7, .3),);
    }));
    C(A(y(r(u(6, 0, 0, .3), f.translate(0, -0.92, 95).scale(14, 2, 14), q(.8, .8, .8, .2),), r(u(5), f.translate(0, 0, 95).scale3d(6), q(.3, .3, .3, .5)),),),);
    [8, -6.1].map((c, g) => m(3, w => C(jc, f.translate(6 * w - 6, c - (1 & w), 111 - .2 * (1 & w) - g), 1 & w ? q(.5, .5, .5, .3) : q(.35, .35, .35, .5),),));
    [-1, 1].map(c => C(ic, f.translate(-8 * c, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), q(1, 1, .8)));
    ec(f.translate(0, 1.7, 82).rotate(0, 180));
    C(u(5), f.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), q(.5, .3, .3, .4),);
    C(A(y(tb(r(u(B), f.translate(0, 16, 110.5).scale(12, 1, 3), q(.5, .3, .3, .4),), r(u(B), f.translate(0, 16, 111).scale(3, 1, 3.8), q(.5, .3, .3, .4),),), r(u(5), f.translate(0, 16, 103.5).scale(5.5, 5, 5.5), q(.5, .3, .3, .4),),),),);
    G(c => {
      c.h = () => {
        const g = Math.sin(a);
        return f.translate(-2 * g).rotate(0, 0, 25 * g);
      };
      C(u(3), f.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), q(.5, .3, .3, .4),);
      [22, 30].map(g => {
        C(u(6), f.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), q(.7, .7, .7, .4),);
        C(u(B), f.translate(0, 6.2, g + 95).scale(.5, 11, .5), q(.5, .3, .3, .4));
      });
    });
    C(u(6), f.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), q(.5, .6, .7, .3));
    C(u(B), f.translate(0, 16, 129).scale(1.5, 1, 2), q(.5, .6, .7, .3));
    C(u(7), f.translate(0, 16.2, 133).scale(5, 1, 5), q(.4, .5, .6, .4));
    G(c => {
      c.h = () => {
        const g = Ya(Ya((S[14].g + S[14].i) / 2, S[13].i), (S[15].g + S[15].i) / 2,);
        return f.translate(0, 16 * g, 8.5 * Xa(2 * g - 1) + 95);
      };
      C(u(5), f.scale(5, 1.1, 5), q(.5, .3, .3, .4));
      C(u(5), f.scale(5.5, .9, 5.5), q(.25, .25, .25, .4));
      ec(f.translate(0, 1.5, -1).rotate(0, 180));
    });
    fc(f.translate(0, 3, 95), ...jb(9).map(({x:c, z:g}) => [9 * c, 9 * g, 4]),);
    fc(f.translate(0, 19, 134), [0, 0, 3.5]);
  });
}, lc = (b, e, h, l) => {
  let k = 0, p = 0, t = 0, c = 1 / 0, g = -1 / 0, w = 1 / 0, J = -1 / 0, E = 1 / 0, Z = -1 / 0;
  const ba = 1.1 * (h - e), V = (new DOMMatrix(bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, e, h))).multiplySelf(b).invertSelf();
  b = m(8, z => {
    z = V.transformPoint({x:4 & z ? 1 : -1, y:2 & z ? 1 : -1, z:1 & z ? 1 : -1,});
    return k -= z.x = (ba * z.x | 0) / (ba * z.w), p -= z.y = (ba * z.y | 0) / (ba * z.w), t -= z.z = (ba * z.z | 0) / (ba * z.w), z;
  });
  e = f.rotate(298, 139).translateSelf(k / 8, p / 8, t / 8);
  return ib(b, e).map(({x:z, y:W, z:N}) => {
    c = c < z ? c : z;
    g = z < g ? g : z;
    w = w < W ? w : W;
    J = W < J ? J : W;
    E = E < N ? E : N;
    Z = N < Z ? Z : N;
  }), E *= 0 > E ? l : 1 / l, Z *= 0 < Z ? l : 1 / l, f.scale(2 / (g - c), 2 / (J - w), 2 / (E - Z)).translateSelf((g + c) / -2, (J + w) / -2, (E + Z) / 2,).multiplySelf(e).toFloat32Array();
}, mc = (b, e = 35633) => {
  e = U.c6x(e);
  return U.s3c(e, b), U.c6a(e), e;
}, nc = (b, e) => {
  const h = {}, l = U.c1h();
  return U.abz(l, b), U.abz(l, mc(e, 35632)), U.l8l(l), k => k ? h[k] || (h[k] = U.gan(l, k)) : U.u7y(l);
}, pc = (b, e, h) => {
  const l = k => U.d97(4, k.H, 5123, 2 * k.I);
  if (Ka) {
    U.uae(b, !1, f.rotate(0, 40 * Math.sin(na) - 70).toFloat32Array()), l(Sa.D), Ra.map(k => k.D).map(l);
  } else {
    for (const k of ub) {
      const p = k.G, t = k.D;
      (e || k !== Sa && k !== Ra[0] && k !== Ra[1]) && t && (h && U.ube(h, p / 255), U.uae(b, !1, k.j.toFloat32Array()), l(t));
    }
    for (const k of $b) {
      U.uae(b, !1, k.j.toFloat32Array()), l(oc);
    }
  }
}, qc = new Int32Array(10725888), rc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), ic = (() => {
  const b = m(11, h => f.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),), e = jb(18);
  return m(10, h => kb(ib(e, b[h]).reverse(), ib(e, b[h + 1]), 1),).flat();
})(), hc = A(y(r(u(20, 1, 1.15, 1), f.translate(0, -3).scale(3.5, 1, 3.5), q(.7, .4, .25, .7),), r(u(20, 1, 1.3, 1), f.translate(0, -2.5).scale(2.6, 1, 3), q(.7, .4, .25, .2),), r(u(B), f.translate(4, -1.2).scale3d(2), q(.7, .4, .25, .3)),),), jc = A(y(r(u(B), f.translate(0, -8).scale(6, 15, 2.2)), r(u(B), f.translate(0, -14.1).scale(4, 13, 4)), r(u(20, 1), f.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), Fb = new Int32Array(Bb.buffer, 0, 4), Cb = new Float32Array(Bb.buffer), Vb = new AudioContext(), 
Ub = Vb.createBufferSource(), dc = (C([B.slice(1)], f.translate(-2).scale3d(3).rotate(90, 0)), Hb(), [q(1, .5, .2), q(.7, 1, .2)].map(b => (C(u(6, 1), f.scale(.13, 1.4, .13), q(.3, .3, .5)), C(u(8), f.translate(0, 1).scale(.21, .3, .21), b), C(u(3), f.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), q(.2, .2, .2)), Hb()),)), oc = (C(lb(40, 30, (b, e, h) => {
  const l = e / 30, k = .05 * b * Math.PI, p = l ** .6 * Math.PI / 2;
  b = l * l * Math.sin(b * Math.PI * .35) / 4;
  return 29 === e ? {x:h.B = 0, y:-0.5, z:0,} : {x:Math.cos(k) * Math.sin(p), y:Math.cos(l * Math.PI) - l - b, z:Math.sin(k) * Math.sin(p) + Math.sin(b * Math.PI * 2) / 4,};
}), f.scale3d(.7), q(1, 1, 1),), [-1, 1].map(b => C(lb(15), f.translate(.16 * b, .4, -0.36).scale3d(.09))), Hb()), U = hC.getContext("webgl2");
for (const b in U) {
  U[b[0] + [...b].reduce((e, h, l) => (e * l + h.charCodeAt(0)) % 434, 0).toString(36)] = U[b];
}
setTimeout(() => {
  let b = 0, e = 6;
  const h = () => {
    if (h4.innerHTML += ".", !--e) {
      let t = 0, c = 0, g = 1, w = 0, J = 0, E = 0, Z = !1, ba, V, z, W, N, ca, F, fa, aa, da;
      const O = {x:0, y:0, z:0,}, pa = new Int32Array(256), Ma = () => {
        const {m:v, j:x} = S[xa], {x:K, y:D, z:L} = x.transformPoint({x:0, y:8, z:-3,});
        n.x = O.x = K;
        n.y = O.y = F = D;
        n.z = O.z = L;
        V = ca = N = z = W = 0;
        g = 1;
        t = c = v?.G || 1;
      }, za = () => {
        let v = 0, x = 0, K = (NO_INLINE(() => {
          let I = 0, Q = 0, ha = 0, ua = 0, va = 0;
          pa.fill(0);
          for (let X = 0; 31 > X; ++X) {
            let Da = 0;
            const R = 512 * X;
            for (let Qa = 0; 128 > Qa; Qa++) {
              let ra = R + 4 * Qa;
              var sa = (Ea[ra] + Ea[1 + ra]) / 255;
              if (ra = Ea[2 + ra], 14 < Qa && 114 > Qa && (Da += sa), ra && sa) {
                sa = pa[ra] + 1, pa[ra] = sa, I > sa || (I = sa, Q = ra);
              }
            }
            3 > Da && 5 < X && (ua += X / 32);
            3 < Da && (7 < X && (ha += X / 15), va = 1);
          }
          Q && (va = 1);
          g ? Q && (g = 0, c = Q) : c = Q || t;
          t = Q;
          V = va;
          z = H(z, va ? 6.5 : 8, 4);
          O.y += ha / 41 - (va ? 1 : z) * ua / 41 * z * d;
        })(), NO_INLINE(() => {
          for (let va = 32; 128 > va; va += 2) {
            var I = 0;
            let sa = 0;
            var Q = 0;
            let X = 0;
            const Da = 512 * va;
            for (let R = va >> 1 & 1; 128 > R; R += 2) {
              var ha = Da + 4 * R;
              const Qa = Da + 4 * (127 - R), ra = Ea[ha] / 255, Db = Ea[1 + Qa] / 255;
              var ua = R / 63.5 - 1;
              ua = 1 - (0 > ua ? -ua : ua);
              if (10 < R && 118 > R && (I = Va(I, Va(ra * ua, ra * Ea[Qa] / 127.5)), sa = Va(sa, Va(Db * ua, Db * Ea[1 + ha] / 255))), 54 > R || 74 < R) {
                ha = (1 - ua) * (Db < ra ? ra : Db) / 3, .001 < ha && (64 > R && ha > Q ? Q = ha : 64 < R && ha > X && (X = ha));
              }
            }
            Q = X - Q;
            I = sa - I;
            (0 > Q ? -Q : Q) > (0 > v ? -v : v) && (v = Q);
            (0 > I ? -I : I) > (0 > x ? -x : x) && (x = I);
          }
        })(), (Tb[0] ? 1 : 0) + (Tb[2] ? -1 : 0) + la), D = (Tb[1] ? 1 : 0) + (Tb[3] ? -1 : 0) + ma;
        var L = navigator.getGamepads()[0];
        if (L) {
          var P = Q => I[Q]?.pressed || 0 < I[Q]?.value;
          const I = L.buttons;
          L = L.axes;
          var T = P(1) || P(3) || P(2) || P(0);
          T !== Z && (Z = T) && (Tb[5] = 1);
          K += (.2 < Wa(-L[0]) ? -L[0] : 0) + (P(14) ? 1 : 0) + (P(15) ? -1 : 0);
          D += (.2 < Wa(-L[1]) ? -L[1] : 0) + (P(12) ? 1 : 0) + (P(13) ? -1 : 0);
          La && (.3 < Wa(L[2]) && (Mb += 80 * L[2] * d), .3 < Wa(L[3]) && (Lb += 80 * L[3] * d));
        }
        .05 > (0 > D ? -D : D) && (D = 0);
        .05 > (0 > K ? -K : K) && (K = 0);
        P = Math.atan2(D, K);
        L = Xa(Math.hypot(D, K));
        var Y = (K = L * Math.cos(P), D = L * Math.sin(P), Xa(1 - 5 * Va(0 > v ? -v : v, 0 > x ? -x : x)));
        T = (c || (v += N * Y * d, x += ca * Y * d), N = H(N, 0, V ? 8 : 4), ca = H(ca, 0, V ? 8 : 4), W = H(W, V ? (K || D ? V ? 7 : 4 : 0) * Y : 0, V ? .1 < Y ? 10 : K || D ? 5 : 7 : 1,), La ? Mb * Ua : Math.PI);
        Y = Math.sin(T) * W * d;
        var Oa = Math.cos(T) * W * d;
        T = (v -= K * Oa - D * Y, x -= K * Y + D * Oa, c && ub[c - 1].F && ub[c - 1].j || f);
        Y = T.inverse();
        if (Y.m41 = 0, Y.m42 = 0, Y.m43 = 0, {x:v, z:x} = Y.transformPoint({x:v, z:x, w:0,}), O.x += v, O.z += x, c !== ba) {
          ba = c;
          const {x:I, y:Q, z:ha} = T.inverse().transformPoint(n);
          O.x = I;
          O.y = Q;
          O.z = ha;
        }
        Y = n.x;
        Oa = n.z;
        const {x:Eb, y:gb, z:M} = T.transformPoint(O);
        T = (n.x = Eb, n.y = gb, n.z = M, Wa(F - gb));
        F = H(F, gb + .1, 50 * T + 5);
        c && (N = (n.x - Y) / d, ca = (n.z - Oa) / d);
        (K || D) && (w = 90 - P / Ua);
        J = $a(J, w, 8 * d);
        E += (L - E) * Xa(10 * d);
      }, Na = v => {
        requestAnimationFrame(Na);
        var x = (v - (Pa || v)) / 1e3;
        d = Ka ? Tb[5] = 0 : .066 < x ? .066 : x;
        a += d;
        na += x;
        Pa = v;
        if (0 < d && (U.b6o(36160, wa), U.r9r(0, 0, 128, 128, 6408, 5121, Ea), U.iay(36160, [36064]), NO_INLINE(za)(), gc()), 0 < d) {
          if (fa = ab(fa, n.x, .5, d,), aa = ab(aa, n.y, 2, d,), da = ab(da, n.z, .5, d,), La) {
            v = 200 * g, Ib = H(Ib, n.x, 18 + v), Jb = H(Jb, n.y + 1.5, 15 + v), Kb = H(Kb, n.z, 18 + v), Lb = Va(87 > Lb ? Lb : 87, -87);
          } else {
            if (Ib = ab(Ib, fa, 1, 2 * d,), Jb = ab(Jb, aa + 13 + 15 * g, 4, 2 * d,), Kb = ab(Kb, da + -18, 1, 2 * d,), v = Kb - da, 1 < (0 > v ? -v : v)) {
              x = Ib - fa;
              const K = Jb - aa;
              Mb = 270 + Math.atan2(v, x) / Ua;
              Lb = 90 - Math.atan2(Math.hypot(v, x), K) / Ua;
            }
          }
          if (Mb = Za(Mb), 0 < d) {
            v = Ya(S[12].g, S[13].g), a > qa && (h4.innerHTML = "", qa = 0), x = H(Ca, 0, 1), Ca = x + (Za(Ca + 60 * d) - x) * Xa(S[5].g - S[6].i), x = H(ya, 0, 5), ya = x + (Za(ya + 56 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v), x = H(Ba, 0, 4), Ba = x + (Za(Ba + 48 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v), v = 2 * S[9].i - 1, Ha = H(Ha, S[9].i, .2 + .3 * (0 > v ? -v : v),), Ga = H(Ga, Fa ? Ga + (-9 - Ga) * Xa(1.5 * d) : Xa(a / 3), 1,), 1 === S[0].l && .8 < S[0].g && (13 > oa ? (S[0].l = 0, Fa || (h4.innerHTML = 
            "Not leaving now, there are souls to catch!", qa = a + 3)) : Fa || (Fa || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", qa = a + 1 / 0), Fa = 1)), Tb[5] = 0, (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && Ma();
          }
        }
        v = Ka ? f.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Xa(hC.clientWidth / 1e3)) : f.rotate(-Lb, -Mb, -0).invertSelf().translateSelf(-Ib, -Jb, -Kb,);
        0 < d && (ta(), U.b6o(36160, wa), U.v5y(0, 0, 128, 128), U.cbf(!0, !1, !0, !1), U.c4s(16640), U.uae(ta("b"), !1, f.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, .3 - n.z,).toFloat32Array(),), pc(ta("c"), 0, ta("j")), U.cbf(!1, !0, !1, !1), U.c4s(16640), U.cbf(!1, !0, !0, !1), U.uae(ta("b"), !1, f.translate(-n.x, -n.y, -n.z - .3).toFloat32Array(),), pc(ta("c"), 0, ta("j")), U.cbf(!0, !0, !0, !0), 1 === c && (S[9].l = -15 > n.x && 0 > n.z ? 1 : 0));
        pb();
        U.v5y(0, 0, 2048, 2048);
        Aa[0](lc(v, .3, 55, 10));
        Aa[1](lc(v, 55, 177, 11));
        U.b6o(36160, null);
        ia();
        U.v5y(0, 0, U.drawingBufferWidth, U.drawingBufferHeight);
        U.c4s(16640);
        U.uae(ia("a"), !1, bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        U.uae(ia("b"), !1, v.toFloat32Array());
        U.ubu(ia("k"), Ib, Jb, Kb);
        Aa[0]();
        Aa[1]();
        pc(ia("c"), !La);
        ja();
        U.ubu(ja("j"), U.drawingBufferWidth, U.drawingBufferHeight, na);
        Ka ? U.ubu(ja("k"), 0, 0, 0) : U.ubu(ja("k"), Ib, Jb, Kb);
        U.uae(ja("b"), !1, v.inverse().toFloat32Array());
        U.d97(4, 3, 5123, 0);
      }, Ea = new Uint8Array(65536), Nb = k;
      var p = mc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",);
      const pb = nc(mc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"), "#version 300 es\nvoid main(){}",), ja = nc(mc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), ta = nc(p, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",), ia = nc(p, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), wa = (ja(), U.ubh(ja("q"), 3), ta(), U.uae(ta("a"), !1, bb(1.4, .59, 1e-4, 1)), ia(), U.ubh(ia("q"), 3), U.c5w());
      p = U.c3z();
      const hb = U.c25(), Aa = m(2, v => {
        let x;
        const K = U.c25(), D = U.c5w(), L = ia(v ? "j" : "i");
        return ia(), U.ubh(ia(v ? "h" : "g"), v), U.b6o(36160, D), U.d45([0]), U.r9l(0), U.a4v(33984 + v), U.b9j(3553, K), U.fas(36160, 36096, 3553, K, 0), U.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), U.t2z(3553, 10241, 9729), U.t2z(3553, 10240, 9729), U.t2z(3553, 34893, 515), U.t2z(3553, 34892, 34894), U.t2z(3553, 10243, 33071), U.t2z(3553, 10242, 33071), P => {
          P ? (x = P, U.b6o(36160, D), U.iay(36160, [36096]), U.c4s(256), U.uae(pb("b"), !1, x), pc(pb("c"), !La)) : U.uae(L, !1, x);
        };
      });
      U.b11(34963, U.c1b());
      U.b2v(34963, new Uint16Array(vb), 35044);
      U.b11(34962, U.c1b());
      U.b2v(34962, new Float32Array(wb), 35044);
      U.v7s(0, 3, 5126, !1, 0, 0);
      U.b11(34962, U.c1b());
      U.b2v(34962, new Int16Array(xb), 35044);
      U.v7s(1, 3, 5122, !0, 0, 0);
      U.b11(34962, U.c1b());
      U.b2v(34962, new Uint32Array(yb), 35044);
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
      U.b6o(36160, wa);
      U.bb1(36161, p);
      U.r4v(36161, 33189, 128, 128);
      U.f8w(36160, 36096, 36161, p);
      U.a4v(33987);
      U.b9j(3553, hb);
      U.fas(36160, 36064, 3553, hb, 0);
      U.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      U.b9j(3553, U.c25());
      U.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Nb);
      U.gbn(3553);
      U.t2z(3553, 10241, 9987);
      U.t2z(3553, 10240, 9729);
      Sa.h = () => f.translate(n.x, F, n.z).rotateSelf(0, J,);
      Ra.map((v, x) => {
        v.h = () => f.translate(0, E * Xa(.45 * Math.sin(9.1 * a + Math.PI * x - Math.PI / 2)),).rotateSelf(E * Math.sin(9.1 * a + Math.PI * x) * .25 / Ua, 0);
      });
      try {
        const [v, x, K, D, L] = JSON.parse(localStorage.DanteSP22,);
        S.map((P, T) => P.g = P.i = P.l = T ? 0 | v[T] : 0);
        $b.map((P, T) => P.l = 0 | x[T]);
        xa = K;
        a = D;
        Ha = L;
      } catch (v) {
      }
      Ga = 0 > xa ? 0 : 1 < xa ? 1 : xa;
      h4.innerHTML = "";
      qa = 0;
      ac();
      gc();
      NO_INLINE(Yb)();
      Ma();
      Ib = fa = n.x;
      Jb = (aa = n.y) + 13;
      Kb = (da = n.z) + -18;
      requestAnimationFrame(Na);
    }
  }, l = () => {
    if (5 > b) {
      var p = 0, t = b++;
      let [J, E, Z, ba, V, z, W, N, ca, F, fa, aa, da, O, pa, Ma, za, Na, Ea, Nb, pb] = Ob[t];
      F = F * F * 4;
      for (const ja of [5513, 4562, 3891]) {
        let ta = 0, ia = 0, wa, hb, Aa, v, x;
        const K = [], D = new Int32Array(768 * ja), L = 2 ** (aa - 9) / ja, P = Math.PI * 2 ** (za - 8) / ja, T = Ea * ja & -2;
        for (let Y = 0; 11 >= Y; ++Y) {
          for (let Oa = 0, Eb = +"000001234556112341234556011111111112011111111112000001111112"[12 * t + Y]; 32 > Oa; ++Oa) {
            const gb = (32 * Y + Oa) * ja;
            for (var c = 0; 4 > c; ++c) {
              if (wa = 0, Eb && (wa = pb[Eb - 1].charCodeAt(Oa + 32 * c) - 40, wa += 0 < wa ? 106 : 0), wa) {
                var g;
                if (!(g = K[wa])) {
                  g = wa;
                  let M = void 0, I = void 0;
                  var w = wa;
                  let Q = 0, ha = 0;
                  const ua = 2 > t ? Rb : Pb, va = 2 > t ? 1 > t ? Qb : Sb : Pb, sa = new Int32Array(N + ca + F);
                  for (let X = 0, Da = 0; N + ca + F > X; ++X, ++Da) {
                    let R = 1;
                    N > X ? R = X / N : N + ca > X || (R = (1 - (R = (X - N - ca) / F)) * 3 ** (-fa / 16 * R));
                    0 > Da || (Da -= 4 * ja, I = 0.003960 * 2 ** ((w + E - 256) / 12), M = 0.003960 * 2 ** ((w + V - 256) / 12) * (1 + (t ? 0 : 8e-4 * 9)));
                    sa[X] = 80 * (ua(Q += I * R ** (Z / 32)) * J + va(ha += M * R ** (z / 32)) * ba + (W ? (2 * Math.random() - 1) * W : 0)) * R | 0;
                  }
                  g = K[g] = sa;
                }
                for (let M = 0, I = 2 * gb; g.length > M; ++M, I += 2) {
                  D[I] += g[M];
                }
              }
            }
            for (let M, I = 0; ja > I; ++I) {
              c = 0, g = 2 * (gb + I), ((M = D[g]) || x) && (Aa = 0.003080 * da, 1 != t && 4 != t || (Aa *= Math.sin(L * g * Math.PI * 2) * Nb / 512 + .5), Aa = 1.5 * Math.sin(Aa), ta += Aa * ia, v = (1 - O / 255) * (M - ia) - ta, ia += Aa * v, M = 4 == t ? ia : 3 == t ? v : ta, t || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5), M *= pa / 32, x = 1e-5 < M * M, hb = Math.sin(P * g) * Ma / 512 + .5, c = M * (1 - hb), M *= hb), T > g || (c += D[g - T + 1] * Na / 
              255, M += D[g - T] * Na / 255), qc[p + g] += D[g] = c, ++g, qc[p + g] += D[g] = M;
            }
          }
        }
        p += D.length;
      }
      setTimeout(l);
    } else {
      p = Vb.createBuffer(2, 5362944, 44100);
      for (t = 0; 2 > t; t++) {
        for (let J = t, E = p.getChannelData(t); 10725888 > J; J += 2) {
          E[J >> 1] = qc[J] / 65536;
        }
      }
      Ub.buffer = p;
      Ub.loop = !0;
    }
    h();
  }, k = new Image();
  k.onload = k.onerror = () => {
    h();
  };
  k.src = rc;
  setTimeout(l, 50);
  NO_INLINE(kc)();
  Sa = G(() => {
    Ra = [-1, 1].map(t => G(() => {
      C(u(10, 1), f.translate(.3 * t, -0.8).scale(.2, .7, .24), q(1, .3, .4));
    }));
    [0, 180].map(t => C(ic, f.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), q(1, 1, .8),));
    C(lb(20), f.translate(0, 1).scale(.5, .5, .5), q(1, .3, .4));
    const p = r(A(y(u(15, 1), r(u(B), f.translate(0, 0, 1).scale(2, 2, .5)),),), f.rotate(-90, 0).scale(.1, .05, .1), q(.3, .3, .3),);
    [-1, 1].map(t => C(p, f.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t)));
    C(u(B), f.translate(0, .9, .45).scale(.15, .02, .06), q(.3, .3, .3));
    C(lb(20), f.scale(.7, .8, .55), q(1, .3, .4));
  });
});

