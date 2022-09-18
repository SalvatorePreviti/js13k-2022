let da = 0, la = !0, ma = 0, na = 0, oa = 0, a = 0, pa = 0, ra = 0, ya = 0, za = 0, Ca = 0, Da = 0, Ga = 0, Ha = 0, Ia = 0, e = .066, Ja, Ka, La, Ma, Pa, Ra, Sa, Ta, Ua, Va, Wa, Xa;
const Ya = Math.PI / 180, f = new DOMMatrix(), Za = (b, d) => d < b ? b : d, $a = b => 0 > b ? -b : b, ab = b => 0 > b ? 0 : 1 < b ? 1 : b, bb = (b, d) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > d ? 0 : 1 < d ? 1 : d)), cb = b => Math.atan2(Math.sin(b *= Ya), Math.cos(b)) / Ya, db = (b, d, h) => {
  b *= Ya;
  d = (d * Ya - b) % (2 * Math.PI);
  return (b + (2 * d % (2 * Math.PI) - d) * (0 > h ? 0 : 1 < h ? 1 : h)) / Ya;
}, eb = (b, d, h, l) => {
  var k = d - b;
  b += Math.sign(d - b) * Za(0, (0 > k ? -k : k) ** .9 - h) * l * 2;
  return b + (d - b) * ab(l / 7);
}, m = (b, d) => Array.from(Array(b), (h, l) => d(l)), hb = (b, d, h, l,) => [b, 0, 0, 0, 0, d, 0, 0, 0, 0, (l + h) / (h - l), -1, 0, 0, 2 * l * h / (h - l), 0], ib = ({x:b, y:d, z:h}, l) => b * l.x + d * l.y + h * l.z, jb = ({x:b, y:d, z:h}) => {
  var l = n;
  return Math.hypot(b - l.x, d - l.y, h - l.z) || 0;
}, kb = b => {
  let d = 0, h = 0, l = 0, k, p = b.at(-1);
  for (k of b) {
    d += (p.y - k.y) * (p.z + k.z), h += (p.z - k.z) * (p.x + k.x), l += (p.x - k.x) * (p.y + k.y), p = k;
  }
  return k = Math.hypot(d, h, l), d /= k, h /= k, l /= k, {x:d, y:h, z:l, w:d * p.x + h * p.y + l * p.z,};
}, q = (b, d, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * d << 8 | 255 * b, lb = (b, d, h) => (b.B = h, b.u = d, b), mb = (b, d, h = b.u) => lb(b.map(l => (({x:k, y:p, z:t}, c) => ({x:k, y:p, z:t} = c.transformPoint({x:k, y:p, z:t,}), {x:k, y:p, z:t,}))(l, d)), h, b.B,), r = (b, d, h) => b.map(l => mb(l, d, h)), nb = (b, d = 0) => m(b, h => {
  const l = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:.01 > (0 > l ? -l : l) ? l : 0 > l ? l - d : l + d,};
}), pb = (b, d, h) => b.map((l, k, {length:p}) => lb([l, d[p - k - 1], d[p - (k + 1) % p - 1], b[(k + 1) % p]], b.u, h,)), u = (b, d, h = 0, l) => {
  l = b.length ? b : nb(b, l);
  b = mb(l, f.translate(0, 1).scale3d(0 < h ? h : 1));
  h = mb(l, f.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse();
  return [...pb(h, b, d), h, b];
}, qb = (b, d = b, h = (l, k) => (k *= Math.PI / d, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(k), y:Math.cos(k), z:Math.sin(l) * Math.sin(k),})) => {
  const l = [];
  for (let k = 0; b > k; k++) {
    for (let p = 0; d > p; p++) {
      const t = lb([], 0, 1);
      l.push(t);
      t.push(h(k, p, t));
      p && t.push(h((k + 1) % b, p, t));
      d - 1 > p && t.push(h((k + 1) % b, p + 1 % d, t));
      t.push(h(k, p + 1 % d, t));
    }
  }
  return l;
}, rb = (b, d) => {
  var h, l, k, p = d.A;
  for (var t = 0; p.length > t; ++t) {
    if (-0.00008 > (k = ib(b, p[t]) - b.w) ? l = d : 8e-5 < k && (h = d), l && h) {
      l = [];
      k = [];
      p = d.A;
      t = d.v;
      let c = p.at(-1), g = ib(b, c) - b.w;
      for (const w of p) {
        h = ib(b, w) - b.w, 8e-5 > g && k.push(c), -0.00008 < g && l.push(c), (8e-5 < g && -0.00008 > h || -0.00008 > g && 8e-5 < h) && (g /= h - g, c = {x:c.x + (c.x - w.x) * g, y:c.y + (c.y - w.y) * g, z:c.z + (c.z - w.z) * g,}, l.push(c), k.push(c)), c = w, g = h;
      }
      return {o:2 < l.length && {A:lb(l, p.u, p.B), v:t, j:d,}, m:2 < k.length && {A:lb(k, p.u, p.B), v:t, j:d,},};
    }
  }
  return {o:h, m:l,};
}, sb = (b, d, h = kb(d.A)) => {
  if (b) {
    const {o:l, m:k} = rb(b, d);
    l || k || b.C.push(d);
    l && (b.o = sb(b.o, l, h));
    k && (b.m = sb(b.m, k, h));
  } else {
    b = {x:h.x, y:h.y, z:h.z, w:h.w, C:[d], o:0, m:0,};
  }
  return b;
}, tb = (b, d, h) => {
  const l = [], k = (p, t) => {
    let {o:c, m:g} = rb(p, t);
    c || g || (0 < h * ib(p, d) ? c = t : g = t);
    c && (p.o ? k(p.o, c) : l.push(c));
    g && p.m && k(p.m, g);
  };
  for (const p of d.C) {
    k(b, p);
  }
  return l;
}, ub = (b, d) => b && (d(b), ub(b.o, d), ub(b.m, d)), vb = b => b.length ? b.reduce((d, h) => sb(d, {A:h, v:0, j:0,}), 0) : b, wb = b => (ub(b, d => {
  const h = d.m;
  d.m = d.o;
  d.o = h;
  d.x *= -1;
  d.y *= -1;
  d.z *= -1;
  d.w *= -1;
  for (const l of d.C) {
    l.v = !l.v;
  }
}), b), xb = (...b) => b.reduce((d, h) => {
  const l = [];
  if (d = vb(d), h) {
    h = vb(h);
    ub(d, k => k.C = tb(h, k, 1));
    ub(h, k => l.push([k, tb(d, k, -1)]));
    for (const [k, p] of l) {
      for (const t of p) {
        sb(d, t, k);
      }
    }
  }
  return d;
}), y = (b, ...d) => wb(xb(wb(vb(b)), ...d)), z = b => {
  const d = new Map(), h = new Map(), l = k => {
    if (k.j) {
      const p = d.get(k.j);
      p ? (h.delete(p), k = l(k.j)) : d.set(k.j, k);
    }
    return k;
  };
  return ub(b, k => {
    for (const p of k.C) {
      h.set(l(p), p.v);
    }
  }), Array.from(h, ([{A:k}, p]) => {
    const t = k.map(({x:c, y:g, z:w}) => ({x:c, y:g, z:w,}));
    return lb(p ? t.reverse() : t, k.u, k.B);
  });
}, A = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], yb = [], zb = [], Ab = [], Bb = [], Eb = [], Fb = [[]], Gb = new Map(), Hb = new Int32Array(7), Kb = b => {
  let {x:d, y:h, z:l} = Ka[b];
  Ib[0] = d;
  Ib[1] = h;
  Ib[2] = l;
  b = "" + (Ka.B ? Jb : Hb);
  let k = Gb.get(b);
  return void 0 !== k ? (d = 3 * k, Bb[d] = (Bb[d++] + Hb[4]) / 2, Bb[d] = (Bb[d++] + Hb[5]) / 2, Bb[d] = (Bb[d] + Hb[6]) / 2) : (Gb.set(b, k = Gb.size), Ab.push(d, h, l), Bb.push(Hb[4], Hb[5], Hb[6]), Eb.push(Hb[3])), k;
}, C = (b, d = f, h) => Fb.at(-1).push(...r(b, d, h)), Lb = () => {
  var b = Fb.at(-1);
  for (Ka of b) {
    const {x:d, y:h, z:l} = kb(Ka);
    Hb[3] = 0 | Ka.u;
    Hb[4] = 32767 * d;
    Hb[5] = 32767 * h;
    Hb[6] = 32767 * l;
    for (let k = 2, p = Kb(0), t = Kb(1); Ka.length > k; ++k) {
      zb.push(p, t, t = Kb(k));
    }
  }
  b.length = 0;
  b = da;
  return {I:b, H:(da = zb.length) - b,};
}, F = b => {
  const d = Ja, h = {s:f, G:yb.length + 1, F:1, j:d === yb[0] ? void 0 : d,};
  b = (Ja = h, yb.push(h), Fb.push([]), b(h) || Lb());
  return h.D = b, Fb.pop(), Ja = d, h;
}, Mb = () => {
  for (const d of yb) {
    var b = d.h;
    (d.s = d.j ? d.j.s : f, b) && (b = b(d)) && (d.s = d.s.multiply(b));
  }
};
var Ob = -11, Pb = 17, Qb = -90, Rb = 0, Sb = 0;
const Tb = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 
35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 
47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Ub = b => Math.sin(b * Math.PI * 2), Vb = b => .5 > b % 1 ? 1 : -1, Wb = b => b % 1 * 2 - 1, Xb = b => {
  b = b % 1 * 4;
  return 2 > b ? b - 1 : 3 - b;
}, Yb = [], ac = () => {
  La || !la ? Zb.disconnect() : Zb.connect($b.destination);
  b4.innerHTML = "Music: " + la;
}, bc = (b = !1) => {
  if (La !== b) {
    La = b;
    Ma = 0;
    try {
      b ? document.exitPointerLock() : Zb.start();
    } catch {
    }
    document.body.className = b ? "l m" : "l";
    ac();
  }
}, cc = () => {
  let b = 0, d = 0, h = 0, l, k, p;
  const t = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Yb.length = ma = na = 0;
    l = k = void 0;
    document.hidden && bc(!0);
  };
  b1.onclick = () => bc();
  b2.onclick = () => {
    bc();
    Ma = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    la = !la;
    ac();
  };
  b5.onclick = () => bc(!0);
  onclick = () => {
    p = 1;
    La || (Yb[5] = !0, Ma && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = t;
  onkeydown = onkeyup = ({code:c, target:g, type:w, repeat:E}) => {
    E || ((g = !!w[5] && g === document.body) && ("Escape" === c || "Enter" === c && La) ? La && !p || bc(!La) : (c = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[c], 5 === c ? g && (Yb[c] = 1) : Yb[c] = g));
  };
  onmousemove = ({movementX:c, movementY:g}) => {
    Ma && (c || g) && (Sb += .1 * c, Rb += .1 * g);
  };
  hC.ontouchstart = c => {
    if (!La) {
      for (const g of c.changedTouches) {
        Ma && g.pageX > hC.clientWidth / 2 ? l || (l = g, b = Sb, d = Rb) : k = k || g;
      }
      h = oa;
    }
  };
  hC.ontouchmove = ({changedTouches:c}) => {
    if (!La) {
      for (const {pageX:g, pageY:w, identifier:E} of c) {
        l?.identifier === E && (Sb = b + (g - l.pageX) / 3, Rb = d + (w - l.pageY) / 3), k?.identifier === E && (ma = -(g - k.pageX) / 18, na = -(w - k.pageY) / 18, ma = .35 > (0 > ma ? -ma : ma) ? 0 : .8 * ma, na = .35 > (0 > na ? -na : na) ? 0 : .8 * na);
      }
    }
  };
  hC.ontouchend = c => {
    for (const g of c.changedTouches) {
      g.identifier === l?.identifier && (l = void 0), g.identifier === k?.identifier && (k = void 0, na = ma = 0);
    }
    c.preventDefault();
    c = oa - h;
    (!h || .02 < c && .4 > c) && (Yb[5] = !0);
  };
  oncontextmenu = () => !1;
  t();
  bc(!0);
}, G = (b, d, h) => b + (d - b) * ab(1 - Math.exp(-h * e)), dc = ({l:b}) => b, T = [], ec = [], fc = () => {
  pa = ec.reduce((b, d) => b + d.l, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[pa];
}, gc = () => {
  fc();
  localStorage.DanteSP22 = JSON.stringify([T.map(dc), ec.map(dc), ya, a, Ia,]);
}, n = {x:0, y:0, z:0,}, ic = b => {
  F(d => {
    const h = {l:0, g:0, i:0, j:d.j,}, l = T.push(h) - 1;
    d.h = () => {
      const k = h.l, p = h.g, t = h.i, c = (h.s = d.s).transformPoint();
      2.9 > jb(c) && Yb[5] && (.3 > p || .7 < p) && (h.l = k ? 0 : 1, l && (Ga || (h4.innerHTML = "* click *", ra = a + 1)), ya = l, gc());
      return h.g = G(p, k, 4), h.i = G(t, k, 1), d.D = hc[.5 < p ? 1 : 0], b.rotate(60 * h.g - 30, 0).translateSelf(0, 1);
    };
  });
  C(u(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
  C(u(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
  C(u(A), b.translate(0, -0.4).scale(.5, .1, .5), q(.5, .5, .4));
}, jc = (b, d, h) => f.translate(b + Math.sin(a + 2) / 5, d + Math.sin(.8 * a) / 3, h).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), lc = (b, ...d) => {
  let h = -1, l = 0, k = 1, p = 0, t = 0, c = 3, g = 0, w = 0;
  const E = {l:0,}, I = d.map(([ea, K, fa]) => ({x:ea, z:K, w:fa,}));
  let R = I[0], {x:U, z:V} = R, B = U, Y = V;
  const N = ec.push(E) - 1;
  return F(ea => (ea.h = () => {
    if (!E.l) {
      var K = 1;
      var fa = 1 / 0;
      for (var ba of I) {
        var ca = ba.w, O = Math.hypot(U - ba.x, V - ba.z), qa = O - ca;
        ha ||= O < ca;
        0 < qa && fa > qa && (fa = qa, R = ba);
        ca = O / ca;
        K = K < ca ? K : ca;
      }
      if (!ha) {
        ba = R.x;
        fa = R.z;
        ca = R.w;
        O = U - ba;
        qa = V - fa;
        let Aa = Math.hypot(O, qa), Na = Math.atan2(-qa, O);
        k && (p = (Math.random() - .5) * Math.PI / 2, c = Za(1, c / (1 + Math.random())));
        Na += p;
        h = -Math.cos(Na);
        l = Math.sin(Na);
        .1 < Aa && (Aa = (Aa < ca ? Aa : ca) / (Aa || 1), U = O * Aa + ba, V = qa * Aa + fa);
      }
      k = ha;
      c = G(c, 3 + 6 * (1 - K), 3 + K);
      U = G(U, U + h, c);
      V = G(V, V + l, c);
      B = G(B, U, c);
      Y = G(Y, V, c);
      t = db(t, Math.atan2(B - g, Y - w) / Ya - 180, 3 * e,);
      g = B;
      w = Y;
      K = b.translate(B, 0, Y).rotateSelf(0, t).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a));
      var ha = ea.s.multiply(K).transformPoint();
      1.5 > jb(ha) && (E.l = 1, ha = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][pa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', ba = pa && 
      12 > pa ? 5 : 7, Ga || (h4.innerHTML = ha, ra = a + ba), gc());
    }
    E.l && (ea.j = Ta, ha = N % 4 - 2, K = f.translate(N % 4 * 1.2 - 1.7 + Math.sin(a + N) / 6, -2, 1.7 * (N / 4 | 0) - 5.5 + (0 > ha ? -ha : ha) + Math.cos(a / 1.5 + N) / 6,));
    return K;
  }, kc));
}, pc = () => {
  let b;
  F(() => {
    const d = () => {
      var c = T[2].i, g = 1 - T[4].i;
      return c < g ? c : g;
    }, h = (c, g, w) => F(E => {
      E.h = () => f.translate(d() * Math.sin(3 * c + a * c) * g);
      A.map(({x:I, z:R}) => {
        C(u(11, 1), f.translate(4 * I, 4, w + 4 * R).scale(.8, 3, .8), q(.5, .3, .7, .6),);
        C(u(A), f.translate(4 * I, 7, w + 4 * R).scale(1, .3), q(.5, .5, .5, .3));
      });
      C(z(y(r(u(A), f.translate(0, 0, w).scale(5, 1, 5), q(.8, .8, .8, .3),), ...[-1, 1].map(I => r(u(A), f.translate(5 * I, .2, w).rotate(0, 0, -30 * I).scale(4, 1, 2), q(.8, .8, .8, .3),)),),),);
      C(u(A), f.translate(0, -3, w).scale(8, 2, 8), q(.4, .4, .4, .3));
    }), l = (Ta = F(c => {
      c.h = () => jc(-12, 4.2, 40 * Ha - 66);
      ic(f.translate(0, -3, 4));
      C(mc);
    }), m(7, c => C(u(6, 1), f.translate(4 * (c / 6 - .5), 3).scale(.2, 3, .2), q(.3, .3, .38)),), Lb()), k = (C(u(A), f.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), q(.8, .8, .8, .2),), A.map(({x:c, z:g}) => C(u(6), f.translate(3 * c, 3, 15 * g).scale(.7, 4, .7), q(.6, .3, .3, .4))), [-23, 22].map(c => C(u(A), f.translate(0, 0, c).scale(3, 1, 8), q(.9, .9, .9, .2))), [-15, 15].map((c, g) => {
      C(u(A), f.translate(0, 6.3, c).scale(4, .3, 1), q(.3, .3, .3, .4));
      C(u(A), f.translate(0, 1, c).scale(3, .2, .35), q(.5, .5, .5, .3));
      F(w => (w.h = () => f.translate(0, 4.7 * -T[g + 1].g, c), l));
    }), m(5, c => m(2, g => C(nc, f.translate(18.5 * (g - .5), 0, 4.8 * c - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2), q(1, 1, .8, .2),))), C(u(A), f.translate(3, 1.5, -20).scale(.5, 2, 5), q(.7, .7, .7, .2)), C(u(A), f.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), q(.75, .75, .75, .2),), C(u(5), f.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), q(.6, .3, .3, .4)), ic(f.translate(-5.4, 1.5, -19).rotate(0, -90)), C(u(A), f.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 
    0, -30).scale(4, .6, 4.5), q(.8, .2, .2, .5),), C(z(y(xb(r(u(6, 0, 0, .3), f.translate(8, -3, -4).scale(13, 1, 13), q(.7, .7, .7, .2),), r(u(6), f.translate(0, -8).scale(9, 8, 8), q(.4, .2, .5, .5)), r(u(6, 0, 0, .3), f.translate(0, -0.92).scale(13, 2, 13), q(.8, .8, .8, .2),),), r(u(5), f.scale(5, 30, 5), q(.4, .2, .6, .5)), r(u(5, 0, 1.5), f.translate(0, 1).scale(4.5, .3, 4.5), q(.7, .5, .9, .2),), r(u(A), f.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), q(.5, .5, .5, 
    .5),), r(u(6), f.translate(15, -1.5, 4).scale(3.5, 1, 3.5), q(.5, .5, .5, .5),),),),), F(c => {
      c.h = () => f.translate(0, .01 < T[3].g ? (5 * Math.cos(1.5 * a) + 2) * T[3].i * (1 - T[2].g) + -15 * (1 - T[3].g) : -500, 0,);
      ic(f.translate(0, 1.2));
      C(u(5), f.translate(0, -0.2).scale(5, 1, 5), q(.6, .65, .7, .3));
    }), ic(f.translate(15, -2, 4)), h(.7, 12, 35), h(1, 8.2, 55), Ua = F(c => {
      c.h = () => f.translate(d() * Math.sin(a / 1.5 + 2) * 12);
      C(z(y(xb(r(u(A), f.scale(1.5, 1, 5), q(.9, .9, .9, .2)), r(u(6), f.scale(4, 1, 5), q(.9, .9, .9, .2)), r(u(A), f.translate(0, -2).scale(2, 3.2, 1.9), q(.3, .8, .5, .5),), r(u(16, 1, 0, 4), f.scale(1, 1, 1.5).rotate(0, 90), q(.9, .9, .9, .2),),), r(u(A), f.scale(1.3, 10, 1.3), q(.2, .7, .4, .6)),),), f.translate(0, 0, 45),);
    }), F(c => {
      c.h = () => f.translate(9.8 * (1 - d()));
      C(u(3), f.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), q(.3, .6, .6, .2));
      C(u(8), f.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), q(.8, .8, .8, .2));
      C(u(A), f.translate(-23, -3, 55).scale(5.2, 1.7, 3), q(.5, .5, .5, .3));
      C(u(A), f.translate(-23, -2.2, 62).scale(3, 1, 4), q(.5, .5, .5, .3));
      ic(f.translate(-23, -0.5, 66.5));
    }), C(u(A), f.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), q(.9, .9, .9, .2)), F(c => {
      c.h = () => f.translate(0, ab(1 - 5 * d()) * bb(T[4].g, T[5].g) * Math.sin(1.35 * a) * 4);
      C(u(A), f.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), q(.7, .7, .7, .2),);
      C(z(y(r(u(A), f.scale(3, 1.4, 2.7)), r(u(A), f.scale(1.2, 8, 1.2)),),), f.translate(-33, -3, 55), q(.7, .7, .7, .2),);
    }), F(c => {
      c.h = () => f.translate(0, 0, ab(1 - 5 * d()) * bb(T[4].g, T[5].g) * Math.sin(.9 * a) * 8);
      C(z(y(r(u(A), f.translate(-27, -3, 55).scale(3, 1.4, 2.7), q(.9, .9, .9, .2),), r(u(A), f.translate(-27, -3, 55).scale(1, 3), q(.9, .9, .9, .2),),),),);
      C(u(A), f.translate(-39, -3, 55).scale(3, 1.4, 2.7), q(.9, .9, .9, .2));
    }), F(c => {
      c.h = () => f.translate(0, -6.5 * T[4].i);
      C(u(6), f.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), q(.7, .7, .7, .4),);
    }), [...r(z(xb(r(u(A), f.translate(0, -3).scale(11, 1.4, 3), q(.9, .9, .9, .2),), y(r(u(6), f.rotate(0, 0, 90).scale(6, 8, 6), q(.3, .6, .6, .3)), r(u(4, 0, .01), f.translate(0, 6).scale(12, 2, .75).rotate(0, 45), q(.3, .6, .6, .3),), r(u(6), f.rotate(0, 0, 90).scale(5, 12, 5), q(.3, .6, .6, .3)), ...[5, 0, -5].map(c => r(u(5), f.translate(c, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), q(.3, .6, .6, .3),)),),),), f,)]), p = (C(k, f.translate(-53, 0, 55)), C(u(6), f.translate(-61.3, -2.4, 49).scale(3, 
    1, 5), q(.4, .6, .6, .3)), C(u(7), f.translate(-57, -2.6, 46).scale(4, 1, 4), q(.8, .8, .8, .3)), ic(f.translate(-55, -1.1, 46).rotate(0, 90)), F(c => {
      c.F = 0;
      c.h = () => f.translate(-75, (1 - T[5].i) * (1 - T[6].g) * 3, 55).rotate(180 * (1 - T[5].i) + Da, 0,);
      C(k);
    }), C(u(A), f.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), q(.7, .7, .7, .2),), C(u(3, 0, -0.5), f.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), q(.8, .8, .8, .2),), C(z(y(xb(r(u(A), f.translate(-100, -2.5, 55).scale(8, 1, 8), q(.8, .8, .8, .2),), r(u(A), f.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), q(.8, .8, .8, .2),), r(u(A), f.translate(-100, -2.6, 70).scale(3, 1.1, 7), q(.8, .8, .8, .2),), r(u(A), f.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 
    1.1, 5), q(.8, .8, .8, .2),), r(u(6), f.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), q(.6, .6, .6, .3),), r(u(A), f.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), q(.8, .8, .8, .2),), r(u(A), f.translate(-100, .42, 92).scale(3, 1.1, 4.1), q(.8, .8, .8, .2),),), r(u(8), f.translate(-100, -1, 55).scale(7, .9, 7), q(.3, .3, .3, .4),), r(u(8), f.translate(-100, -2, 55).scale(4, .3, 4), q(.4, .4, .4, .5),), r(u(8), f.translate(-100, -3, 55).scale(.6, 1, .6), q(.4, 
    .4, .4, .5),),),), f,), C(z(y(r(u(A), f.translate(-100, 1, 63).scale(7.5, 4), q(.5, .5, .5, .4),), r(u(A), f.translate(-100, 0, 70).scale(2, 2, 10), q(.5, .5, .5, .4),), r(u(20, 1), f.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), q(.5, .5, .5, .4),),),),), F(c => (c.h = () => f.translate(-99.7, 5.3 * -T[6].g - 2, 63.5), l),), A.map(({x:c, z:g}) => {
      C(u(6), f.translate(7 * c - 100, -3, 7 * g + 55).scale(1, 8.1), q(.6, .15, .15, .8),);
      [4, -0.4].map(w => C(u(6), f.translate(7 * c - 100, w, 7 * g + 55).scale(1.3, .5, 1.3), q(.4, .2, .2, .8),));
    }), m(7, c => {
      C(u((23 * c + 1) % 5 + 5, 0, .55), f.translate(5 * Math.sin(c) - 101 + c, -2.3 - c, 44.9 - 2.8 * c).scaleSelf(5 + c / 2, 1 + c / 6, 5 + c / 3,), q(.5 - c / 17, .5 - (1 & c) / 9, .6, .3),);
    }), C(u(A), f.translate(-87, -9.5, 24).scale(7, 1, 3), q(.4, .5, .6, .4)), C(u(4), f.translate(-86, -9.2, 27).scale(5, 1, 5), q(.5, .6, .7, .3)), C(u(18, 1), f.translate(-86, -9, 31).scale(1.5, 1, 1.5), q(.3, .3, .4, .1)), ic(f.translate(-86, -7.5, 31)), F(c => {
      c.h = () => f.translate(0, 3.5 * (1 - Za(T[6].g, T[7].g)) + bb(T[7].i, T[6].i) * Math.sin(a) * 5,);
      [0, 12, 24].map(g => C(u(A), f.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), q(.2, .5, .6, .2),));
    }), F(c => {
      c.h = () => {
        const g = bb(T[7].i, T[6].i);
        return f.translate(0, g * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + g) * g);
      };
      [6, 18].map(g => C(u(A), f.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), q(.1, .4, .5, .2),));
    }), C(z(y(xb(r(u(A), f.scale(11, 1, 13), q(.3, .4, .6, .3)), r(u(5), f.translate(0, 0, -7).scale(2, 1.2, 2), q(.2, .4, .7, .3),), r(u(5), f.scale(9, 1.2, 9), q(0, .2, .3, .5)),), r(u(5), f.scale(5.4, 5, 5.4), q(0, .2, .3, .5)),),), f.translate(-38.9, -11.3, 17),), ic(f.translate(-38.9, -9.6, 10)), Va = F(c => {
      c.h = () => f.translate(0, -7.3 * T[7].i);
      C(z(y(xb(r(u(5), f.translate(0, 2).scale(5, 7, 5).skewY(8), q(.2, .4, .5, .5),), r(u(5), f.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), q(.25, .35, .5, .5),), r(u(5), f.translate(0, 9).scale(.6, 7, .6).skewY(8), q(.35, .3, .5, .5),),), r(u(5), f.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), q(.2, .4, .5, .5),),),), f.translate(-38.9, -11.3, 17),);
    }), A.map(({x:c, z:g}) => {
      b = f.translate(9 * c - 38.9, -7.3, 11 * g + 17);
      C(u(18, 1), b.scale(1, 4), q(.25, .25, .25, 1));
      [1.5, 8].map(w => C(u(18, 1), b.translate(0, w - 4).scale(1.5, .5, 1.5), q(.6, .6, .6, .3)));
    }), C(z(y(xb(r(u(6), f.translate(0, 0, -36).scale(15, 1.2, 15), q(.7, .7, .7, .3),), r(u(A), f.translate(0, 0, -18).scale(4, 1.2, 6), q(.45, .4, .6, .3),),), ...m(6, c => m(6, g => r(u(6), f.translate(4.6 * g - 12 + 2 * (1 & c), 0, 4.6 * c - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2,), q(.7, .7, .7, .3),))).flat(),),), f.translate(-38.9, -11.3, 17),), C(u(5), f.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), q(.8, .1, .25, .4)), ic(f.translate(-84, -0.5, 85).rotate(0, 45)), F(c => {
      c.h = () => jc(-123, 1.4, 55 + -65 * Ia);
      ic(f.translate(0, -3, -4).rotate(0, 180));
      C(mc);
    }), z(y(r(u(A), f.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), q(.25, .25, .35, .3),), r(u(3), f.translate(0, 0, -5.5).scale(3, 2), q(.6, .3, .4, .3)), ...[-1.2, 1.2].map(c => r(u(A), f.translate(c, -0.5, 1).scale(.14, .3, 6.5), q(.7, .2, 0, .3),)),),)), t = (F(c => {
      c.h = () => {
        var g = Math.sin(1.1 * a);
        return f.translate.call(f, 0, -2, bb(T[10].g, T[11].g) * (0 > g ? -g : g) * -8.5 + 10);
      };
      m(2, g => C(p, f.translate(9 * g - 110 + (1 & g), 1.7, -12)));
    }), F(c => {
      c.h = () => {
        var g = Math.sin(2.1 * a);
        return f.translate.call(f, 0, -2, bb(T[10].g, T[11].g) * (0 > g ? -g : g) * -8.5 + 10);
      };
      m(2, g => C(p, f.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
    }), F(c => {
      c.h = () => {
        var g = Math.sin(1.5 * a);
        return f.translate.call(f, 0, -2, -8.5 * Za((1 - T[10].g) * (1 - bb(T[10].g, T[11].g)), bb(T[10].g, T[11].g) * (0 > g ? -g : g),) + 10,);
      };
      m(3, g => C(p, f.translate(9 * g - 106, 1.7, -12)));
    }), C(z(y(xb(r(u(A), f.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), r(u(A), f.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...m(4, c => r(u(A), f.translate(13 + 9 * c + (1 & c), -0.8, 9).scale(1.35, 1.35, 9),)), ...m(3, c => r(u(A), f.translate(17 + 9 * c, -0.8, 9).scale(1.35, 1.35, 9)),),),), f.translate(-123, 0, -12), q(.5, .5, .6, .2),), C(u(5), f.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), q(.25, .25, .35, 1),), C(u(A), f.translate(-116, -2.6, -12).scale(3.2, 1.1, 
    4).skewX(3), q(.8, .8, .8, .2),), C(u(6), f.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), q(.6, .5, .7, .2)), ic(f.translate(-116, -1.4, -18).rotate(0, 180)), m(3, c => {
      C(oc, f.translate(12 * c - 109, -9, -12), q(.6, .6, .6, .3));
      C(oc, f.translate(-77, -9, -12 * c - 20).rotate(0, 90), q(.6, .6, .6, .3));
    }), C(z(y(r(u(12), f.translate(-77, -13.9, -12).scale(4, 18.2, 4), q(.7, .7, .7, .2),), r(u(A), f.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), q(.4, .5, .6, .2),), r(u(A), f.translate(-77, 0, -14).scale(1.5, 2.2, 2), q(.4, .5, .6, .2),), r(u(12), f.translate(-77, 2.8, -12).scale(3, 5, 3), q(.4, .5, .6, .2),),),),), C(u(A), f.translate(-115.5, -17, -12).scale(.5, 15, 2.2), q(.6, .6, .6, .3)), C(u(A), f.translate(-77, -17, -50.5).scale(2.2, 15, .5), q(.6, .6, .6, .3)), C(u(A), f.translate(-84.9, 
    -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), q(.6, .6, .6, .3),), C(z(y(r(u(A), f.translate(-93, -5.8, -40).scale(9, 1, 5), q(.8, .8, .8, .1),), r(u(9), f.translate(-98, -5.8, -40).scale(3, 8, 3), q(.7, .7, .7, .2),),),),), C(u(9), f.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), q(.5, .5, .5, .3)), ic(f.translate(-98, -4.4, -40).rotate(0, 90)), C(z(y(xb(r(u(6, 0, 0, .6), f.translate(-100, .7, 105.5).scale(8, 1, 11), q(.7, .7, .7, .2),), r(u(A), f.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), 
    q(.7, .7, .7, .2),), r(u(A), f.translate(-91.2, .7, 107).scale(3, 1, 3.3), q(.7, .7, .7, .2),),), r(u(5), f.translate(-100, .7, 113).scale(4, 3, 4), q(.7, .7, .7, .2)),),),), m(4, c => F(g => {
      g.h = () => {
        const w = bb(T[8].i, T[12].i);
        return f.translate((2 < c ? 2 * (1 - w) + w : 0) - 100, w * Math.sin(1.3 * a + 1.7 * c) * (3 + c / 3) + .7, 115 + (1 & c ? -1 : 1) * (1 - T[8].i) * (1 - T[12].i) * -7 + (.05 > w ? .05 : w) * Math.cos(1.3 * a + 7 * c) * (4 - 2 * (1 - c / 3)),);
      };
      C(u(6), f.translate(-14.6 - 4.8 * c - (2 < c ? 2 : 0), -c / 2.3, -21.5).scale(2.6, 1, 2.5), q(.5 - c / 8, c / 12 + .5, .7, .3),);
    })), Wa = F(c => {
      c.h = () => {
        const g = bb(T[8].i, T[12].i);
        return f.translate(2.5 * (1 - g) - 139.7, -3 * (1 - T[8].g) + g * Math.sin(.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
      };
      C(z(y(r(u(10), f.scale(6, 2, 6), q(.1, .6, .5, .3)), r(u(10), f.scale(3.3, 6, 3.3), q(.1, .6, .5, .5)),),),);
      b = f.translate(-7.5).rotate(0, 90);
      C(u(15), b.scale(3, 2.3, 3), q(.4, .4, .4, .3));
      C(u(10), b.scale(2, 2.5, 2), q(.3, .8, .7, .3));
      C(u(5), b.scale(1, 3), q(.5, .5, .5, .5));
      ic(b.translate(0, 3.4).rotate(0, 180));
      [-1, 1].map(g => C(nc, f.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), q(1, 1, .8, .2),));
    }), [-1, 1].map(c => {
      C(u(15, 1), f.translate(-7.5 * c - 100, 3.7, 96).scale(.8, 4, .8), q(.6, .24, .2, .5),);
      [7.2, 1.5].map(g => C(u(15, 1), f.translate(-7.5 * c - 100, g + .7, 96).scale(1.1, .5, 1.1), q(.5, .24, .2, .4),));
      C(nc, f.translate(-5 * c - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * c - 90), q(1, 1, .8),);
      C(z(y(r(u(A), f.translate(-4 * c, 3.5, -0.5).scale(4, 4, .7), q(.5, .5, .5, .4),), r(u(A), f.scale(3, 3, 10), q(.6, .24, .2, .5)), r(u(30, 1), f.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), q(.6, .24, .2, .5),), r(u(5), f.translate(-5.3 * c, 7).rotate(90, 0).scale(1.7, 5, 1.7), q(.6, .24, .2, .5),), r(u(5), f.translate(-5.3 * c, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), q(.6, .24, .2, .5),),),), f.translate(c - 100, .7, 97),);
    }), F(c => (c.h = () => f.translate(-100, .6 - 6 * T[12].g, 96.5).scale(.88, 1.2), l)), [...r(u(28, 1), f.scale(8, 1, 8), q(.45, .45, .45, .2)), ...r(u(5), f.translate(0, 1).scale(1, .2), q(.3, .3, .3, .2)),]);
    Xa = F(c => {
      c.h = () => f.translate(-80, 1, 106).rotate(0, 40 + za);
      C(z(y(r(u(28, 1), f.scale(8, 1, 8), q(.45, .45, .45, .2)), r(u(A), f.translate(0, 0, -5.5).scale(1.5, 3, 2.5), q(.45, .45, .45, .2),),),),);
      C(u(8), f.translate(0, 2).scale(3, 1.5, 3), q(.7, .7, .7, .1));
      C(u(5), f.translate(0, 2).scale(1, 2), q(.3, .3, .3, .2));
    });
    F(c => {
      c.h = () => f.translate(-64, 1, 106).rotate(0, Ca);
      C(z(y(r(u(28, 1), f.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)), r(u(A), f.scale(9, 5, 2), q(.3, 0, 0, .3)),),),);
      C(t);
      [-1, 1].map(g => C(nc, f.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), q(1, 1, .8),));
    });
    F(c => {
      c.h = () => f.translate(-48, 1, 106).rotate(0, 180 - Ca);
      C(z(y(r(u(30, 1), f.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)), r(u(A), f.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)), r(u(A), f.translate(0, 0, 7).scale(2, 5, 9), q(.3, 0, 0, .3)),),),);
      C(t);
    });
    F(c => {
      c.h = () => f.translate(-48, 1, 90).rotate(0, 270 + Ca);
      C(z(y(r(u(30, 1), f.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3)), r(u(A), f.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)), r(u(A), f.translate(0, 0, -7).scale(2, 5, 9), q(.3, 0, 0, .3),),),),);
      C(t);
    });
    C(u(A), f.translate(-56, 1, 106).scale(.7, .8, 2.5), q(.7, .7, .7, .2));
    C(u(A), f.translate(-48, 1, 98).scale(2.5, .8, .7), q(.7, .7, .7, .2));
    C(u(A), f.translate(-39, .4, 90).scale(2, 1, 2), q(.7, .7, .7, .3));
    C(u(A), f.translate(-34.2, .4, 90).scale(3, 1, 3), q(.7, .7, .7, .3));
    ic(f.translate(-34, 2.7, 96).rotate(-12, 0));
    C(u(5), f.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), q(.2, .5, .5, .6));
    [q(.1, .55, .45, .2), q(.2, .5, .5, .3), q(.3, .45, .55, .4)].map((c, g) => F(w => {
      w.h = () => f.translate(0, (1 - T[13].i) * (1 - T[14].i) * 3 + bb(T[13].i, T[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4.7,);
      C(u(8), f.translate(-23.5, g / 1.5 - .4, 90 + 6.8 * g).scale(3.6, 2 - g / 1.5, 3.6).rotate(0, 22.5), c,);
      2 === g && C(u(6), f.translate(-29, .4, 90).scale(2.4, 1, 2.8), q(.6, .7, .6, .3));
      1 === g && C(u(A), f.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), q(.6, .6, .7, .3),);
    }));
    C(z(y(r(u(6, 0, 0, .3), f.translate(0, -0.92, 95).scale(14, 2, 14), q(.8, .8, .8, .2),), r(u(5), f.translate(0, 0, 95).scale3d(6), q(.3, .3, .3, .5)),),),);
    [8, -6.1].map((c, g) => m(3, w => C(oc, f.translate(6 * w - 6, c - (1 & w), 111 - .2 * (1 & w) - g), 1 & w ? q(.5, .5, .5, .3) : q(.35, .35, .35, .5),),));
    [-1, 1].map(c => C(nc, f.translate(-8 * c, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * c + 90), q(1, 1, .8)));
    ic(f.translate(0, 1.7, 82).rotate(0, 180));
    C(u(5), f.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), q(.5, .3, .3, .4),);
    C(z(y(xb(r(u(A), f.translate(0, 16, 110.5).scale(12, 1, 3), q(.5, .3, .3, .4),), r(u(A), f.translate(0, 16, 111).scale(3, 1, 3.8), q(.5, .3, .3, .4),),), r(u(5), f.translate(0, 16, 103.5).scale(5.5, 5, 5.5), q(.5, .3, .3, .4),),),),);
    F(c => {
      c.h = () => {
        const g = Math.sin(a);
        return f.translate(-2 * g).rotate(0, 0, 25 * g);
      };
      C(u(3), f.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), q(.5, .3, .3, .4),);
      [22, 30].map(g => {
        C(u(6), f.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), q(.7, .7, .7, .4),);
        C(u(A), f.translate(0, 6.2, g + 95).scale(.5, 11, .5), q(.5, .3, .3, .4));
      });
    });
    C(u(6), f.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), q(.5, .6, .7, .3));
    C(u(A), f.translate(0, 16, 129).scale(1.5, 1, 2), q(.5, .6, .7, .3));
    C(u(7), f.translate(0, 16.2, 133).scale(5, 1, 5), q(.4, .5, .6, .4));
    F(c => {
      c.h = () => {
        const g = bb(bb((T[14].g + T[14].i) / 2, T[13].i), (T[15].g + T[15].i) / 2,);
        return f.translate(0, 16 * g, 8.5 * ab(2 * g - 1) + 95);
      };
      C(u(5), f.scale(5, 1.1, 5), q(.5, .3, .3, .4));
      C(u(5), f.scale(5.5, .9, 5.5), q(.25, .25, .25, .4));
      ic(f.translate(0, 1.5, -1).rotate(0, 180));
    });
  });
  lc(f.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
  lc(f.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...nb(18).map(({x:d, z:h}) => [7 * d, 10 * h, 4.5 - 2 * (0 > d ? -d : d)]),);
  lc(f.translate(0, 2.8, 45), [0, 0, 4.5]).j = Ua;
  lc(f.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
  lc(f.translate(-89, .2, 80), [0, 0, 6]);
  lc(f.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...nb(15).map(({x:d, z:h}) => [3 * d, 3 * h, 1.5]),).j = Va;
  lc(f.translate(-38.9, -8.4, -21), [0, 0, 12]);
  lc(f.translate(-115, .2, -12), [0, 0, 3.5]);
  lc(f.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);
  lc(f.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]).j = Wa;
  lc(f.translate(0, 3), ...nb(10).map(({x:d, z:h}) => [5.6 * d, 5.6 * h, 2.5]),).j = Xa;
  lc(f.translate(0, 3, 95), ...nb(9).map(({x:d, z:h}) => [9 * d, 9 * h, 4]),);
  lc(f.translate(0, 19, 134), [0, 0, 3.5]);
}, qc = (b, d, h, l) => {
  let k = 0, p = 0, t = 0, c = 1 / 0, g = -1 / 0, w = 1 / 0, E = -1 / 0, I = 1 / 0, R = -1 / 0;
  const U = 1.1 * (h - d), V = (new DOMMatrix(hb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, d, h))).multiplySelf(b).invertSelf();
  b = m(8, B => {
    B = V.transformPoint({x:4 & B ? 1 : -1, y:2 & B ? 1 : -1, z:1 & B ? 1 : -1,});
    return k -= B.x = (U * B.x | 0) / (U * B.w), p -= B.y = (U * B.y | 0) / (U * B.w), t -= B.z = (U * B.z | 0) / (U * B.w), B;
  });
  d = f.rotate(298, 139).translateSelf(k / 8, p / 8, t / 8);
  return mb(b, d).map(({x:B, y:Y, z:N}) => {
    c = c < B ? c : B;
    g = B < g ? g : B;
    w = w < Y ? w : Y;
    E = Y < E ? E : Y;
    I = I < N ? I : N;
    R = N < R ? R : N;
  }), I *= 0 > I ? l : 1 / l, R *= 0 < R ? l : 1 / l, f.scale(2 / (g - c), 2 / (E - w), 2 / (I - R)).translateSelf((g + c) / -2, (E + w) / -2, (I + R) / 2,).multiplySelf(d).toFloat32Array();
}, rc = (b, d = 35633) => {
  d = X.c6x(d);
  return X.s3c(d, b), X.c6a(d), d;
}, sc = (b, d) => {
  const h = {}, l = X.c1h();
  return X.abz(l, b), X.abz(l, rc(d, 35632)), X.l8l(l), k => k ? h[k] || (h[k] = X.gan(l, k)) : X.u7y(l);
}, tc = (b, d, h) => {
  const l = k => X.d97(4, k.H, 5123, 2 * k.I);
  if (La) {
    X.uae(b, !1, f.rotate(0, 40 * Math.sin(oa) - 70).toFloat32Array()), l(Sa.D), Ra.map(k => k.D).map(l);
  } else {
    for (const k of yb) {
      const p = k.G, t = k.D;
      (d || k !== Sa && k !== Ra[0] && k !== Ra[1]) && t && (h && X.ube(h, p / 255), X.uae(b, !1, k.s.toFloat32Array()), l(t));
    }
  }
}, uc = new Int32Array(10725888), vc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), nc = (() => {
  const b = m(11, h => f.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),), d = nb(18);
  return m(10, h => pb(mb(d, b[h]).reverse(), mb(d, b[h + 1]), 1),).flat();
})(), mc = z(y(r(u(20, 1, 1.15, 1), f.translate(0, -3).scale(3.5, 1, 3.5), q(.7, .4, .25, .7),), r(u(20, 1, 1.3, 1), f.translate(0, -2.5).scale(2.6, 1, 3), q(.7, .4, .25, .2),), r(u(A), f.translate(4, -1.2).scale3d(2), q(.7, .4, .25, .3)),),), oc = z(y(r(u(A), f.translate(0, -8).scale(6, 15, 2.2)), r(u(A), f.translate(0, -14.1).scale(4, 13, 4)), r(u(20, 1), f.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), Jb = new Int32Array(Hb.buffer, 0, 4), Ib = new Float32Array(Hb.buffer), $b = new AudioContext(), 
Zb = $b.createBufferSource(), hc = (C([A.slice(1)], f.translate(-2).scale3d(3).rotate(90, 0)), Lb(), [q(1, .5, .2), q(.7, 1, .2)].map(b => (C(u(6, 1), f.scale(.13, 1.4, .13), q(.3, .3, .5)), C(u(8), f.translate(0, 1).scale(.21, .3, .21), b), C(u(3), f.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), q(.2, .2, .2)), Lb()),)), kc = (C(qb(40, 30, (b, d, h) => {
  const l = d / 30, k = .05 * b * Math.PI, p = l ** .6 * Math.PI / 2;
  b = l * l * Math.sin(b * Math.PI * .35) / 4;
  return 29 === d ? {x:h.B = 0, y:-0.5, z:0,} : {x:Math.cos(k) * Math.sin(p), y:Math.cos(l * Math.PI) - l - b, z:Math.sin(k) * Math.sin(p) + Math.sin(b * Math.PI * 2) / 4,};
}), f.scale3d(.7), q(1, 1, 1),), [-1, 1].map(b => C(qb(15), f.translate(.16 * b, .4, -0.36).scale3d(.09))), Lb()), X = hC.getContext("webgl2");
for (const b in X) {
  X[b[0] + [...b].reduce((d, h, l) => (d * l + h.charCodeAt(0)) % 434, 0).toString(36)] = X[b];
}
setTimeout(() => {
  let b = 0, d = 6;
  const h = () => {
    if (h4.innerHTML += ".", !--d) {
      let t = 0, c = 0, g = 1, w = 0, E = 0, I = 0, R = !1, U, V, B, Y, N, ea, K, fa, ba, ca;
      const O = {x:0, y:0, z:0,}, qa = new Int32Array(256), ha = () => {
        const {j:v, s:x} = T[ya], {x:J, y:D, z:L} = x.transformPoint({x:0, y:8, z:-3,});
        n.x = O.x = J;
        n.y = O.y = K = D;
        n.z = O.z = L;
        V = ea = N = B = Y = 0;
        g = 1;
        t = c = v?.G || 1;
      }, Aa = () => {
        let v = 0, x = 0, J = (NO_INLINE(() => {
          let H = 0, Q = 0, ia = 0, va = 0, wa = 0;
          qa.fill(0);
          for (let Z = 0; 31 > Z; ++Z) {
            let Ea = 0;
            const S = 512 * Z;
            for (let Qa = 0; 128 > Qa; Qa++) {
              let sa = S + 4 * Qa;
              var ta = (Fa[sa] + Fa[1 + sa]) / 255;
              if (sa = Fa[2 + sa], 14 < Qa && 114 > Qa && (Ea += ta), sa && ta) {
                ta = qa[sa] + 1, qa[sa] = ta, H > ta || (H = ta, Q = sa);
              }
            }
            3 > Ea && 5 < Z && (va += Z / 32);
            3 < Ea && (7 < Z && (ia += Z / 15), wa = 1);
          }
          Q && (wa = 1);
          g ? Q && (g = 0, c = Q) : c = Q || t;
          t = Q;
          V = wa;
          B = G(B, wa ? 6.5 : 8, 4);
          O.y += ia / 41 - (wa ? 1 : B) * va / 41 * B * e;
        })(), NO_INLINE(() => {
          for (let wa = 32; 128 > wa; wa += 2) {
            var H = 0;
            let ta = 0;
            var Q = 0;
            let Z = 0;
            const Ea = 512 * wa;
            for (let S = wa >> 1 & 1; 128 > S; S += 2) {
              var ia = Ea + 4 * S;
              const Qa = Ea + 4 * (127 - S), sa = Fa[ia] / 255, Cb = Fa[1 + Qa] / 255;
              var va = S / 63.5 - 1;
              va = 1 - (0 > va ? -va : va);
              if (10 < S && 118 > S && (H = Za(H, Za(sa * va, sa * Fa[Qa] / 127.5)), ta = Za(ta, Za(Cb * va, Cb * Fa[1 + ia] / 255))), 54 > S || 74 < S) {
                ia = (1 - va) * (Cb < sa ? sa : Cb) / 3, .001 < ia && (64 > S && ia > Q ? Q = ia : 64 < S && ia > Z && (Z = ia));
              }
            }
            Q = Z - Q;
            H = ta - H;
            (0 > Q ? -Q : Q) > (0 > v ? -v : v) && (v = Q);
            (0 > H ? -H : H) > (0 > x ? -x : x) && (x = H);
          }
        })(), (Yb[0] ? 1 : 0) + (Yb[2] ? -1 : 0) + ma), D = (Yb[1] ? 1 : 0) + (Yb[3] ? -1 : 0) + na;
        var L = navigator.getGamepads()[0];
        if (L) {
          var P = Q => H[Q]?.pressed || 0 < H[Q]?.value;
          const H = L.buttons;
          L = L.axes;
          var W = P(1) || P(3) || P(2) || P(0);
          W !== R && (R = W) && (Yb[5] = 1);
          J += (.2 < $a(-L[0]) ? -L[0] : 0) + (P(14) ? 1 : 0) + (P(15) ? -1 : 0);
          D += (.2 < $a(-L[1]) ? -L[1] : 0) + (P(12) ? 1 : 0) + (P(13) ? -1 : 0);
          Ma && (.3 < $a(L[2]) && (Sb += 80 * L[2] * e), .3 < $a(L[3]) && (Rb += 80 * L[3] * e));
        }
        .05 > (0 > D ? -D : D) && (D = 0);
        .05 > (0 > J ? -J : J) && (J = 0);
        P = Math.atan2(D, J);
        L = ab(Math.hypot(D, J));
        var aa = (J = L * Math.cos(P), D = L * Math.sin(P), ab(1 - 5 * Za(0 > v ? -v : v, 0 > x ? -x : x)));
        W = (c || (v += N * aa * e, x += ea * aa * e), N = G(N, 0, V ? 8 : 4), ea = G(ea, 0, V ? 8 : 4), Y = G(Y, V ? (J || D ? V ? 7 : 4 : 0) * aa : 0, V ? .1 < aa ? 10 : J || D ? 5 : 7 : 1,), Ma ? Sb * Ya : Math.PI);
        aa = Math.sin(W) * Y * e;
        var Oa = Math.cos(W) * Y * e;
        W = (v -= J * Oa - D * aa, x -= J * aa + D * Oa, c && yb[c - 1].F && yb[c - 1].s || f);
        aa = W.inverse();
        if (aa.m41 = 0, aa.m42 = 0, aa.m43 = 0, {x:v, z:x} = aa.transformPoint({x:v, z:x, w:0,}), O.x += v, O.z += x, c !== U) {
          U = c;
          const {x:H, y:Q, z:ia} = W.inverse().transformPoint(n);
          O.x = H;
          O.y = Q;
          O.z = ia;
        }
        aa = n.x;
        Oa = n.z;
        const {x:Db, y:fb, z:M} = W.transformPoint(O);
        W = (n.x = Db, n.y = fb, n.z = M, $a(K - fb));
        K = G(K, fb + .1, 50 * W + 5);
        c && (N = (n.x - aa) / e, ea = (n.z - Oa) / e);
        (J || D) && (w = 90 - P / Ya);
        E = db(E, w, 8 * e);
        I += (L - I) * ab(10 * e);
      }, Na = v => {
        requestAnimationFrame(Na);
        var x = (v - (Pa || v)) / 1e3;
        e = La ? Yb[5] = 0 : .066 < x ? .066 : x;
        a += e;
        oa += x;
        Pa = v;
        if (0 < e && (X.b6o(36160, xa), X.r9r(0, 0, 128, 128, 6408, 5121, Fa), X.iay(36160, [36064]), NO_INLINE(Aa)(), Mb()), 0 < e) {
          if (fa = eb(fa, n.x, .5, e,), ba = eb(ba, n.y, 2, e,), ca = eb(ca, n.z, .5, e,), Ma) {
            v = 200 * g, Ob = G(Ob, n.x, 18 + v), Pb = G(Pb, n.y + 1.5, 15 + v), Qb = G(Qb, n.z, 18 + v), Rb = Za(87 > Rb ? Rb : 87, -87);
          } else {
            if (Ob = eb(Ob, fa, 1, 2 * e,), Pb = eb(Pb, ba + 13 + 15 * g, 4, 2 * e,), Qb = eb(Qb, ca + -18, 1, 2 * e,), v = Qb - ca, 1 < (0 > v ? -v : v)) {
              x = Ob - fa;
              const J = Pb - ba;
              Sb = 270 + Math.atan2(v, x) / Ya;
              Rb = 90 - Math.atan2(Math.hypot(v, x), J) / Ya;
            }
          }
          if (Sb = cb(Sb), 0 < e) {
            v = bb(T[12].g, T[13].g), a > ra && (h4.innerHTML = "", ra = 0), x = G(Da, 0, 1), Da = x + (cb(Da + 60 * e) - x) * ab(T[5].g - T[6].i), x = G(za, 0, 5), za = x + (cb(za + 56 * e) - x) * (0 > v ? 0 : 1 < v ? 1 : v), x = G(Ca, 0, 4), Ca = x + (cb(Ca + 48 * e) - x) * (0 > v ? 0 : 1 < v ? 1 : v), v = 2 * T[9].i - 1, Ia = G(Ia, T[9].i, .2 + .3 * (0 > v ? -v : v),), Ha = G(Ha, Ga ? Ha + (-9 - Ha) * ab(1.5 * e) : ab(a / 3), 1,), 1 === T[0].l && .8 < T[0].g && (13 > pa ? (T[0].l = 0, Ga || (h4.innerHTML = 
            "Not leaving now, there are souls to catch!", ra = a + 3)) : Ga || (Ga || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", ra = a + 1 / 0), Ga = 1)), Yb[5] = 0, (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && ha();
          }
        }
        v = La ? f.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + ab(hC.clientWidth / 1e3)) : f.rotate(-Rb, -Sb, -0).invertSelf().translateSelf(-Ob, -Pb, -Qb,);
        0 < e && (ua(), X.b6o(36160, xa), X.v5y(0, 0, 128, 128), X.cbf(!0, !1, !0, !1), X.c4s(16640), X.uae(ua("b"), !1, f.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, .3 - n.z,).toFloat32Array(),), tc(ua("c"), 0, ua("j")), X.cbf(!1, !0, !1, !1), X.c4s(16640), X.cbf(!1, !0, !0, !1), X.uae(ua("b"), !1, f.translate(-n.x, -n.y, -n.z - .3).toFloat32Array(),), tc(ua("c"), 0, ua("j")), X.cbf(!0, !0, !0, !0), 1 === c && (T[9].l = -15 > n.x && 0 > n.z ? 1 : 0));
        ob();
        X.v5y(0, 0, 2048, 2048);
        Ba[0](qc(v, .3, 55, 10));
        Ba[1](qc(v, 55, 177, 11));
        X.b6o(36160, null);
        ja();
        X.v5y(0, 0, X.drawingBufferWidth, X.drawingBufferHeight);
        X.c4s(16640);
        X.uae(ja("a"), !1, hb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        X.uae(ja("b"), !1, v.toFloat32Array());
        X.ubu(ja("k"), Ob, Pb, Qb);
        Ba[0]();
        Ba[1]();
        tc(ja("c"), !Ma);
        ka();
        X.ubu(ka("j"), X.drawingBufferWidth, X.drawingBufferHeight, oa);
        La ? X.ubu(ka("k"), 0, 0, 0) : X.ubu(ka("k"), Ob, Pb, Qb);
        X.uae(ka("b"), !1, v.inverse().toFloat32Array());
        X.d97(4, 3, 5123, 0);
      }, Fa = new Uint8Array(65536), Nb = k;
      var p = rc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",);
      const ob = sc(rc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"), "#version 300 es\nvoid main(){}",), ka = sc(rc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), ua = sc(p, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",), ja = sc(p, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), xa = (ka(), X.ubh(ka("q"), 3), ua(), X.uae(ua("a"), !1, hb(1.4, .59, 1e-4, 1)), ja(), X.ubh(ja("q"), 3), X.c5w());
      p = X.c3z();
      const gb = X.c25(), Ba = m(2, v => {
        let x;
        const J = X.c25(), D = X.c5w(), L = ja(v ? "j" : "i");
        return ja(), X.ubh(ja(v ? "h" : "g"), v), X.b6o(36160, D), X.d45([0]), X.r9l(0), X.a4v(33984 + v), X.b9j(3553, J), X.fas(36160, 36096, 3553, J, 0), X.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), X.t2z(3553, 10241, 9729), X.t2z(3553, 10240, 9729), X.t2z(3553, 34893, 515), X.t2z(3553, 34892, 34894), X.t2z(3553, 10243, 33071), X.t2z(3553, 10242, 33071), P => {
          P ? (x = P, X.b6o(36160, D), X.iay(36160, [36096]), X.c4s(256), X.uae(ob("b"), !1, x), tc(ob("c"), !Ma)) : X.uae(L, !1, x);
        };
      });
      X.b11(34963, X.c1b());
      X.b2v(34963, new Uint16Array(zb), 35044);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Float32Array(Ab), 35044);
      X.v7s(0, 3, 5126, !1, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Int16Array(Bb), 35044);
      X.v7s(1, 3, 5122, !0, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Uint32Array(Eb), 35044);
      X.v7s(2, 4, 5121, !0, 0, 0);
      X.e3x(0);
      X.e3x(1);
      X.e3x(2);
      X.e8z(2929);
      X.e8z(2884);
      X.c70(1);
      X.c7a(1029);
      X.d4n(515);
      X.c5t(0, 0, 0, 1);
      X.b6o(36160, xa);
      X.bb1(36161, p);
      X.r4v(36161, 33189, 128, 128);
      X.f8w(36160, 36096, 36161, p);
      X.a4v(33987);
      X.b9j(3553, gb);
      X.fas(36160, 36064, 3553, gb, 0);
      X.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      X.b9j(3553, X.c25());
      X.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Nb);
      X.gbn(3553);
      X.t2z(3553, 10241, 9987);
      X.t2z(3553, 10240, 9729);
      Sa.h = () => f.translate(n.x, K, n.z).rotateSelf(0, E,);
      Ra.map((v, x) => {
        v.h = () => f.translate(0, I * ab(.45 * Math.sin(9.1 * a + Math.PI * x - Math.PI / 2)),).rotateSelf(I * Math.sin(9.1 * a + Math.PI * x) * .25 / Ya, 0);
      });
      try {
        const [v, x, J, D, L] = JSON.parse(localStorage.DanteSP22,);
        T.map((P, W) => P.g = P.i = P.l = W ? 0 | v[W] : 0);
        ec.map((P, W) => P.l = 0 | x[W]);
        ya = J;
        a = D;
        Ia = L;
      } catch (v) {
      }
      Ha = 0 > ya ? 0 : 1 < ya ? 1 : ya;
      h4.innerHTML = "";
      ra = 0;
      fc();
      Mb();
      NO_INLINE(cc)();
      ha();
      Ob = fa = n.x;
      Pb = (ba = n.y) + 13;
      Qb = (ca = n.z) + -18;
      requestAnimationFrame(Na);
    }
  }, l = () => {
    if (5 > b) {
      var p = 0, t = b++;
      let [E, I, R, U, V, B, Y, N, ea, K, fa, ba, ca, O, qa, ha, Aa, Na, Fa, Nb, ob] = Tb[t];
      K = K * K * 4;
      for (const ka of [5513, 4562, 3891]) {
        let ua = 0, ja = 0, xa, gb, Ba, v, x;
        const J = [], D = new Int32Array(768 * ka), L = 2 ** (ba - 9) / ka, P = Math.PI * 2 ** (Aa - 8) / ka, W = Fa * ka & -2;
        for (let aa = 0; 11 >= aa; ++aa) {
          for (let Oa = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * t + aa]; 32 > Oa; ++Oa) {
            const fb = (32 * aa + Oa) * ka;
            for (var c = 0; 4 > c; ++c) {
              if (xa = 0, Db && (xa = ob[Db - 1].charCodeAt(Oa + 32 * c) - 40, xa += 0 < xa ? 106 : 0), xa) {
                var g;
                if (!(g = J[xa])) {
                  g = xa;
                  let M = void 0, H = void 0;
                  var w = xa;
                  let Q = 0, ia = 0;
                  const va = 2 > t ? Wb : Ub, wa = 2 > t ? 1 > t ? Vb : Xb : Ub, ta = new Int32Array(N + ea + K);
                  for (let Z = 0, Ea = 0; N + ea + K > Z; ++Z, ++Ea) {
                    let S = 1;
                    N > Z ? S = Z / N : N + ea > Z || (S = (1 - (S = (Z - N - ea) / K)) * 3 ** (-fa / 16 * S));
                    0 > Ea || (Ea -= 4 * ka, H = 0.003960 * 2 ** ((w + I - 256) / 12), M = 0.003960 * 2 ** ((w + V - 256) / 12) * (1 + (t ? 0 : 8e-4 * 9)));
                    ta[Z] = 80 * (va(Q += H * S ** (R / 32)) * E + wa(ia += M * S ** (B / 32)) * U + (Y ? (2 * Math.random() - 1) * Y : 0)) * S | 0;
                  }
                  g = J[g] = ta;
                }
                for (let M = 0, H = 2 * fb; g.length > M; ++M, H += 2) {
                  D[H] += g[M];
                }
              }
            }
            for (let M, H = 0; ka > H; ++H) {
              c = 0, g = 2 * (fb + H), ((M = D[g]) || x) && (Ba = 0.003080 * ca, 1 != t && 4 != t || (Ba *= Math.sin(L * g * Math.PI * 2) * Nb / 512 + .5), Ba = 1.5 * Math.sin(Ba), ua += Ba * ja, v = (1 - O / 255) * (M - ja) - ua, ja += Ba * v, M = 4 == t ? ja : 3 == t ? v : ua, t || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5), M *= qa / 32, x = 1e-5 < M * M, gb = Math.sin(P * g) * ha / 512 + .5, c = M * (1 - gb), M *= gb), W > g || (c += D[g - W + 1] * Na / 
              255, M += D[g - W] * Na / 255), uc[p + g] += D[g] = c, ++g, uc[p + g] += D[g] = M;
            }
          }
        }
        p += D.length;
      }
      setTimeout(l);
    } else {
      p = $b.createBuffer(2, 5362944, 44100);
      for (t = 0; 2 > t; t++) {
        for (let E = t, I = p.getChannelData(t); 10725888 > E; E += 2) {
          I[E >> 1] = uc[E] / 65536;
        }
      }
      Zb.buffer = p;
      Zb.loop = !0;
    }
    h();
  }, k = new Image();
  k.onload = k.onerror = () => {
    h();
  };
  k.src = vc;
  setTimeout(l, 50);
  NO_INLINE(pc)();
  Sa = F(() => {
    Ra = [-1, 1].map(t => F(() => {
      C(u(10, 1), f.translate(.3 * t, -0.8).scale(.2, .7, .24), q(1, .3, .4));
    }));
    [0, 180].map(t => C(nc, f.rotate(0, t).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), q(1, 1, .8),));
    C(qb(20), f.translate(0, 1).scale(.5, .5, .5), q(1, .3, .4));
    const p = r(z(y(u(15, 1), r(u(A), f.translate(0, 0, 1).scale(2, 2, .5)),),), f.rotate(-90, 0).scale(.1, .05, .1), q(.3, .3, .3),);
    [-1, 1].map(t => C(p, f.translate(.2 * t, 1.2, .4).rotate(0, 20 * t, 20 * t)));
    C(u(A), f.translate(0, .9, .45).scale(.15, .02, .06), q(.3, .3, .3));
    C(qb(20), f.scale(.7, .8, .55), q(1, .3, .4));
  });
});

