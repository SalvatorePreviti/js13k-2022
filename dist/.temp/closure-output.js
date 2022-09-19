let ca = 0, ja = !0, ka = 0, ma = 0, na = 0, a = 0, oa = 0, qa = 0, xa = 0, ya = 0, Ba = 0, Ca = 0, Fa = 0, Ga = 0, Ha = 0, d = .066, Ia, Ja, Ka, La, Pa, Ra, Sa, Ta, Ua, Va;
const Wa = Math.PI / 180, e = new DOMMatrix(), Xa = (c, g) => g < c ? c : g, Ya = c => 0 > c ? -c : c, Za = c => 0 > c ? 0 : 1 < c ? 1 : c, $a = (c, g) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > g ? 0 : 1 < g ? 1 : g)), ab = c => Math.atan2(Math.sin(c *= Wa), Math.cos(c)) / Wa, bb = (c, g, h) => {
  c *= Wa;
  g = (g * Wa - c) % (2 * Math.PI);
  return (c + (2 * g % (2 * Math.PI) - g) * (0 > h ? 0 : 1 < h ? 1 : h)) / Wa;
}, cb = (c, g, h, l) => {
  var k = g - c;
  c += Math.sign(g - c) * Xa(0, (0 > k ? -k : k) ** .9 - h) * l * 2;
  return c + (g - c) * Za(l / 7);
}, m = (c, g) => Array.from(Array(c), (h, l) => g(l)), db = (c, g, h, l,) => [c, 0, 0, 0, 0, g, 0, 0, 0, 0, (l + h) / (h - l), -1, 0, 0, 2 * l * h / (h - l), 0], eb = ({x:c, y:g, z:h}, l) => c * l.x + g * l.y + h * l.z, fb = ({x:c, y:g, z:h}) => {
  var l = n;
  return Math.hypot(c - l.x, g - l.y, h - l.z) || 0;
}, ib = c => {
  let g = 0, h = 0, l = 0, k, q = c.at(-1);
  for (k of c) {
    g += (q.y - k.y) * (q.z + k.z), h += (q.z - k.z) * (q.x + k.x), l += (q.x - k.x) * (q.y + k.y), q = k;
  }
  return k = Math.hypot(g, h, l), g /= k, h /= k, l /= k, {x:g, y:h, z:l, w:g * q.x + h * q.y + l * q.z,};
}, p = (c, g, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * g << 8 | 255 * c, jb = (c, g, h) => (c.B = h, c.u = g, c), kb = (c, g, h = c.u) => jb(c.map(l => (({x:k, y:q, z:t}, b) => ({x:k, y:q, z:t} = b.transformPoint({x:k, y:q, z:t,}), {x:k, y:q, z:t,}))(l, g)), h, c.B,), r = (c, g, h) => c.map(l => kb(l, g, h)), lb = (c, g = 0) => m(c, h => {
  const l = Math.cos(2 * Math.PI * h / c);
  return {x:Math.sin(2 * Math.PI * h / c), y:0, z:.01 > (0 > l ? -l : l) ? l : 0 > l ? l - g : l + g,};
}), mb = (c, g, h) => c.map((l, k, {length:q}) => jb([l, g[q - k - 1], g[q - (k + 1) % q - 1], c[(k + 1) % q]], c.u, h,)), u = (c, g, h = 0, l) => {
  l = c.length ? c : lb(c, l);
  c = kb(l, e.translate(0, 1).scale3d(0 < h ? h : 1));
  h = kb(l, e.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse();
  return [...mb(h, c, g), h, c];
}, nb = (c, g = c, h = (l, k) => (k *= Math.PI / g, {x:Math.cos(l *= 2 * Math.PI / c) * Math.sin(k), y:Math.cos(k), z:Math.sin(l) * Math.sin(k),})) => {
  const l = [];
  for (let k = 0; c > k; k++) {
    for (let q = 0; g > q; q++) {
      const t = jb([], 0, 1);
      l.push(t);
      t.push(h(k, q, t));
      q && t.push(h((k + 1) % c, q, t));
      g - 1 > q && t.push(h((k + 1) % c, q + 1 % g, t));
      t.push(h(k, q + 1 % g, t));
    }
  }
  return l;
}, ob = (c, g) => {
  var h, l, k, q = g.A;
  for (var t = 0; q.length > t; ++t) {
    if (-0.00008 > (k = eb(c, q[t]) - c.w) ? l = g : 8e-5 < k && (h = g), l && h) {
      l = [];
      k = [];
      q = g.A;
      t = g.v;
      let b = q.at(-1), f = eb(c, b) - c.w;
      for (const w of q) {
        h = eb(c, w) - c.w, 8e-5 > f && k.push(b), -0.00008 < f && l.push(b), (8e-5 < f && -0.00008 > h || -0.00008 > f && 8e-5 < h) && (f /= h - f, b = {x:b.x + (b.x - w.x) * f, y:b.y + (b.y - w.y) * f, z:b.z + (b.z - w.z) * f,}, l.push(b), k.push(b)), b = w, f = h;
      }
      return {o:2 < l.length && {A:jb(l, q.u, q.B), v:t, s:g,}, m:2 < k.length && {A:jb(k, q.u, q.B), v:t, s:g,},};
    }
  }
  return {o:h, m:l,};
}, pb = (c, g, h = ib(g.A)) => {
  if (c) {
    const {o:l, m:k} = ob(c, g);
    l || k || c.D.push(g);
    l && (c.o = pb(c.o, l, h));
    k && (c.m = pb(c.m, k, h));
  } else {
    c = {x:h.x, y:h.y, z:h.z, w:h.w, D:[g], o:0, m:0,};
  }
  return c;
}, rb = (c, g, h) => {
  const l = [], k = (q, t) => {
    let {o:b, m:f} = ob(q, t);
    b || f || (0 < h * eb(q, g) ? b = t : f = t);
    b && (q.o ? k(q.o, b) : l.push(b));
    f && q.m && k(q.m, f);
  };
  for (const q of g.D) {
    k(c, q);
  }
  return l;
}, sb = (c, g) => c && (g(c), sb(c.o, g), sb(c.m, g)), tb = c => c.length ? c.reduce((g, h) => pb(g, {A:h, v:0, s:0,}), 0) : c, ub = c => (sb(c, g => {
  const h = g.m;
  g.m = g.o;
  g.o = h;
  g.x *= -1;
  g.y *= -1;
  g.z *= -1;
  g.w *= -1;
  for (const l of g.D) {
    l.v = !l.v;
  }
}), c), vb = (...c) => c.reduce((g, h) => {
  const l = [];
  if (g = tb(g), h) {
    h = tb(h);
    sb(g, k => k.D = rb(h, k, 1));
    sb(h, k => l.push([k, rb(g, k, -1)]));
    for (const [k, q] of l) {
      for (const t of q) {
        pb(g, t, k);
      }
    }
  }
  return g;
}), y = (c, ...g) => ub(vb(ub(tb(c)), ...g)), z = c => {
  const g = new Map(), h = new Map(), l = k => {
    if (k.s) {
      const q = g.get(k.s);
      q ? (h.delete(q), k = l(k.s)) : g.set(k.s, k);
    }
    return k;
  };
  return sb(c, k => {
    for (const q of k.D) {
      h.set(l(q), q.v);
    }
  }), Array.from(h, ([{A:k}, q]) => {
    const t = k.map(({x:b, y:f, z:w}) => ({x:b, y:f, z:w,}));
    return jb(q ? t.reverse() : t, k.u, k.B);
  });
}, B = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], wb = [], xb = [], yb = [], zb = [], Ab = [], Bb = [[]], Eb = new Map(), Fb = new Int32Array(7), Ib = c => {
  let {x:g, y:h, z:l} = Ja[c];
  Gb[0] = g;
  Gb[1] = h;
  Gb[2] = l;
  c = "" + (Ja.B ? Hb : Fb);
  let k = Eb.get(c);
  return void 0 !== k ? (g = 3 * k, zb[g] = (zb[g++] + Fb[4]) / 2, zb[g] = (zb[g++] + Fb[5]) / 2, zb[g] = (zb[g] + Fb[6]) / 2) : (Eb.set(c, k = Eb.size), yb.push(g, h, l), zb.push(Fb[4], Fb[5], Fb[6]), Ab.push(Fb[3])), k;
}, D = (c, g = e, h) => Bb.at(-1).push(...r(c, g, h)), G = c => {
  const g = Ia, h = {l:e, G:wb.length, F:1,};
  Ia = h;
  wb.push(h);
  Bb.push([]);
  if (!(c = c(h))) {
    c = Bb.at(-1);
    for (Ja of c) {
      const {x:l, y:k, z:q} = ib(Ja);
      Fb[3] = 0 | Ja.u;
      Fb[4] = 32767 * l;
      Fb[5] = 32767 * k;
      Fb[6] = 32767 * q;
      for (let t = 2, b = Ib(0), f = Ib(1); Ja.length > t; ++t) {
        xb.push(b, f, f = Ib(t));
      }
    }
    c.length = 0;
    c = ca;
    c = {J:c, I:(ca = xb.length) - c,};
  }
  return h.C = c, Bb.pop(), Ia = g, h;
};
var Jb = -11, Kb = 17, Lb = -90, Nb = 0, Ob = 0;
const Pb = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 
35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 
47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Qb = c => Math.sin(c * Math.PI * 2), Rb = c => .5 > c % 1 ? 1 : -1, Sb = c => c % 1 * 2 - 1, Tb = c => {
  c = c % 1 * 4;
  return 2 > c ? c - 1 : 3 - c;
}, Ub = [], Xb = () => {
  Ka || !ja ? Vb.disconnect() : Vb.connect(Wb.destination);
  b4.innerHTML = "Music: " + ja;
}, Yb = (c = !1) => {
  if (Ka !== c) {
    Ka = c;
    La = 0;
    try {
      c ? document.exitPointerLock() : Vb.start();
    } catch {
    }
    document.body.className = c ? "l m" : "l";
    Xb();
  }
}, Zb = () => {
  let c = 0, g = 0, h = 0, l, k, q;
  const t = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Ub.length = ka = ma = 0;
    l = k = void 0;
    document.hidden && Yb(!0);
  };
  b1.onclick = () => Yb();
  b2.onclick = () => {
    Yb();
    La = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    ja = !ja;
    Xb();
  };
  b5.onclick = () => Yb(!0);
  onclick = () => {
    q = 1;
    Ka || (Ub[5] = !0, La && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = t;
  onkeydown = onkeyup = ({code:b, target:f, type:w, repeat:C}) => {
    C || ((f = !!w[5] && f === document.body) && ("Escape" === b || "Enter" === b && Ka) ? Ka && !q || Yb(!Ka) : (b = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[b], 5 === b ? f && (Ub[b] = 1) : Ub[b] = f));
  };
  onmousemove = ({movementX:b, movementY:f}) => {
    La && (b || f) && (Ob += .1 * b, Nb += .1 * f);
  };
  hC.ontouchstart = b => {
    if (!Ka) {
      for (const f of b.changedTouches) {
        La && f.pageX > hC.clientWidth / 2 ? l || (l = f, c = Ob, g = Nb) : k = k || f;
      }
      h = na;
    }
  };
  hC.ontouchmove = ({changedTouches:b}) => {
    if (!Ka) {
      for (const {pageX:f, pageY:w, identifier:C} of b) {
        l?.identifier === C && (Ob = c + (f - l.pageX) / 3, Nb = g + (w - l.pageY) / 3), k?.identifier === C && (ka = -(f - k.pageX) / 18, ma = -(w - k.pageY) / 18, ka = .35 > (0 > ka ? -ka : ka) ? 0 : .8 * ka, ma = .35 > (0 > ma ? -ma : ma) ? 0 : .8 * ma);
      }
    }
  };
  hC.ontouchend = b => {
    for (const f of b.changedTouches) {
      f.identifier === l?.identifier && (l = void 0), f.identifier === k?.identifier && (k = void 0, ma = ka = 0);
    }
    b.preventDefault();
    b = na - h;
    (!h || .02 < b && .4 > b) && (Ub[5] = !0);
  };
  oncontextmenu = () => !1;
  t();
  Yb(!0);
}, H = (c, g, h) => c + (g - c) * Za(1 - Math.exp(-h * d)), $b = ({j:c}) => c, U = [], ac = [], bc = () => {
  oa = ac.reduce((c, g) => c + g.j, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[oa];
}, cc = () => {
  bc();
  localStorage.DanteSP22 = JSON.stringify([U.map($b), ac.map($b), xa, a, Ha,]);
}, n = {x:0, y:0, z:0,}, dc = (c, g, h) => e.translate(c + Math.sin(a + 2) / 5, g + Math.sin(.8 * a) / 3, h).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), ec = c => {
  const g = Ia, h = U.length, l = {j:0, h:0, i:0, s:g, g() {
    const k = l.j, q = l.h, t = l.i, b = g.l.multiply(c);
    l.H = b;
    2.9 > fb(b.transformPoint()) && Ub[5] && (.3 > q || .7 < q) && (l.j = k ? 0 : 1, h && (Fa || (h4.innerHTML = "* click *", qa = a + 1)), xa = h, cc());
    l.h = H(q, k, 4);
    l.i = H(t, k, 1);
    l.l = b.rotate(60 * l.h - 30, 0).translateSelf(0, 1);
  },};
  U.push(l);
  D(u(5), c.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
  D(u(5), c.translate(.2).rotate(90, 90).scale(.4, .1, .5), p(.4, .5, .5));
  D(u(B), c.translate(0, -0.4).scale(.5, .1, .5), p(.5, .5, .4));
}, fc = (c, ...g) => {
  let h = -1, l = 0, k = 0, q = 0, t = 0, b = 0, f = 3, w = 1;
  const C = {j:0, g() {
    if (!C.j) {
      var F = 1, ea = 1 / 0;
      for (var Z of la) {
        var aa = Z.w, N = Math.hypot(A - Z.x, R - Z.z), pa = N - aa;
        Ma ||= N < aa;
        0 < pa && ea > pa && (ea = pa, ba = Z);
        aa = N / aa;
        F = F < aa ? F : aa;
      }
      if (!Ma) {
        ea = ba.x;
        Z = ba.z;
        aa = ba.w;
        N = A - ea;
        pa = R - Z;
        let za = Math.hypot(N, pa), Na = Math.atan2(-pa, N);
        w && (k = (Math.random() - .5) * Math.PI / 2, f = Xa(1, f / (1 + Math.random())));
        Na += k;
        h = -Math.cos(Na);
        l = Math.sin(Na);
        .1 < za && (za = (za < aa ? za : aa) / (za || 1), A = N * za + ea, R = pa * za + Z);
      }
      w = Ma;
      f = H(f, 3 + 6 * (1 - F), 3 + F);
      O = H(O, A = H(A, A + h, f), f);
      da = H(da, R = H(R, R + l, f), f);
      q = bb(q, Math.atan2(O - t, da - b) / Wa - 180, 3 * d,);
      t = O;
      b = da;
      F = (C.l = c.multiply(K.l.translate(O, 0, da).rotateSelf(0, q).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a)),)).transformPoint();
      if (1.5 > fb(F)) {
        C.j = 1;
        F = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][oa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        var Ma = oa && 12 > oa ? 5 : 7;
        Fa || (h4.innerHTML = F, qa = a + Ma);
        cc();
      }
    }
    C.j && (F = S % 4 - 2, C.l = wb[2].l.translate(S % 4 * 1.2 - 1.7 + Math.sin(a + S) / 7, -2, 1.7 * (S / 4 | 0) - 5.5 + (0 > F ? -F : F) + Math.cos(a / 1.5 + S) / 6,));
  },}, K = Ia, S = ac.length, la = g.map(([F, ea, Z]) => ({x:F, z:ea, w:Z,}));
  let ba = la[0], {x:A, z:R} = ba, O = A, da = R;
  ac.push(C);
}, gc = () => {
  for (const c of wb) {
    c.g && (c.l = c.g(c));
  }
  for (const c of U) {
    c.g();
  }
  for (const c of ac) {
    c.g();
  }
}, kc = () => {
  let c;
  G(() => {
    D([B.slice(1)], e.translate(-2).scale3d(3).rotate(90, 0));
  });
  G(() => {
    const g = () => {
      var b = U[2].i, f = 1 - U[4].i;
      return b < f ? b : f;
    }, h = (b, f, w) => G(C => {
      C.g = () => e.translate(g() * Math.sin(3 * b + a * b) * f);
      B.map(({x:K, z:S}) => {
        D(u(11, 1), e.translate(4 * K, 4, w + 4 * S).scale(.8, 3, .8), p(.5, .3, .7, .6),);
        D(u(B), e.translate(4 * K, 7, w + 4 * S).scale(1, .3), p(.5, .5, .5, .3),);
      });
      D(z(y(r(u(B), e.translate(0, 0, w).scale(5, 1, 5), p(.8, .8, .8, .3),), ...[-1, 1].map(K => r(u(B), e.translate(5 * K, .2, w).rotate(0, 0, -30 * K).scale(4, 1, 2), p(.8, .8, .8, .3),)),),),);
      D(u(B), e.translate(0, -3, w).scale(8, 2, 8), p(.4, .4, .4, .3));
    }), l = (G(b => {
      b.g = () => dc(-12, 4.2, 40 * Ga - 66);
      D(hc);
      ec(e.translate(0, -3, 4));
    }), m(7, b => r(u(6, 1), e.translate(4 * (b / 6 - .5), 3).scale(.2, 3, .2), p(.3, .3, .38),)).flat()), k = (fc(e.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), fc(e.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...lb(18).map(({x:b, z:f}) => [7 * b, 10 * f, 4.5 - 2 * (0 > b ? -b : b)]),), D(u(B), e.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), p(.8, .8, .8, .2),), B.map(({x:b, z:f}) => D(u(6), e.translate(3 * b, 3, 15 * f).scale(.7, 4, .7), p(.6, .3, .3, .4))), [-23, 22].map(b => 
    D(u(B), e.translate(0, 0, b).scale(3, 1, 8), p(.9, .9, .9, .2))), [-15, 15].map((b, f) => {
      D(u(B), e.translate(0, 6.3, b).scale(4, .3, 1), p(.3, .3, .3, .4));
      D(u(B), e.translate(0, 1, b).scale(3, .2, .35), p(.5, .5, .5, .3));
      G(w => {
        w.g = () => e.translate(0, 4.7 * -U[f + 1].h, b);
        D(l);
      });
    }), m(5, b => m(2, f => D(ic, e.translate(18.5 * (f - .5), 0, 4.8 * b - 9.5).rotate(0, 180 - 180 * f).scale(1.2, 10, 1.2), p(1, 1, .8, .2),))), D(u(B), e.translate(3, 1.5, -20).scale(.5, 2, 5), p(.7, .7, .7, .2)), D(u(B), e.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), p(.75, .75, .75, .2),), D(u(5), e.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), p(.6, .3, .3, .4),), ec(e.translate(-5.4, 1.5, -19).rotate(0, -90)), D(u(B), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 
    0, -30).scale(4, .6, 4.5), p(.8, .2, .2, .5),), D(z(y(vb(r(u(6, 0, 0, .3), e.translate(8, -3, -4).scale(13, 1, 13), p(.7, .7, .7, .2),), r(u(6), e.translate(0, -8).scale(9, 8, 8), p(.4, .2, .5, .5)), r(u(6, 0, 0, .3), e.translate(0, -0.92).scale(13, 2, 13), p(.8, .8, .8, .2),),), r(u(5), e.scale(5, 30, 5), p(.4, .2, .6, .5)), r(u(5, 0, 1.5), e.translate(0, 1).scale(4.5, .3, 4.5), p(.7, .5, .9, .2),), r(u(B), e.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), p(.5, .5, .5, 
    .5),), r(u(6), e.translate(15, -1.5, 4).scale(3.5, 1, 3.5), p(.5, .5, .5, .5),),),),), G(b => {
      b.g = () => e.translate(0, .01 < U[3].h ? (5 * Math.cos(1.5 * a) + 2) * U[3].i * (1 - U[2].h) + -15 * (1 - U[3].h) : -500, 0,);
      ec(e.translate(0, 1.2));
      D(u(5), e.translate(0, -0.2).scale(5, 1, 5), p(.6, .65, .7, .3));
    }), ec(e.translate(15, -2, 4)), h(.7, 12, 35), h(1, 8.2, 55), G(b => {
      b.g = () => e.translate(g() * Math.sin(a / 1.5 + 2) * 12);
      D(z(y(vb(r(u(B), e.scale(1.5, 1, 5), p(.9, .9, .9, .2)), r(u(6), e.scale(4, 1, 5), p(.9, .9, .9, .2)), r(u(B), e.translate(0, -2).scale(2, 3.2, 1.9), p(.3, .8, .5, .5),), r(u(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), p(.9, .9, .9, .2),),), r(u(B), e.scale(1.3, 10, 1.3), p(.2, .7, .4, .6)),),), e.translate(0, 0, 45),);
      fc(e.translate(0, 2.8, 45), [0, 0, 4.5]);
    }), G(b => {
      b.g = () => e.translate(9.8 * (1 - g()));
      D(u(3), e.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), p(.3, .6, .6, .2));
      D(u(8), e.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), p(.8, .8, .8, .2));
      D(u(B), e.translate(-23, -3, 55).scale(5.2, 1.7, 3), p(.5, .5, .5, .3));
      D(u(B), e.translate(-23, -2.2, 62).scale(3, 1, 4), p(.5, .5, .5, .3));
      ec(e.translate(-23, -0.5, 66.5));
    }), D(u(B), e.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), p(.9, .9, .9, .2)), G(b => {
      b.g = () => e.translate(0, Za(1 - 5 * g()) * $a(U[4].h, U[5].h) * Math.sin(1.35 * a) * 4);
      D(u(B), e.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), p(.7, .7, .7, .2),);
      D(z(y(r(u(B), e.scale(3, 1.4, 2.7)), r(u(B), e.scale(1.2, 8, 1.2)),),), e.translate(-33, -3, 55), p(.7, .7, .7, .2),);
    }), G(b => {
      b.g = () => e.translate(0, 0, Za(1 - 5 * g()) * $a(U[4].h, U[5].h) * Math.sin(.9 * a) * 8);
      D(z(y(r(u(B), e.translate(-27, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2),), r(u(B), e.translate(-27, -3, 55).scale(1, 3), p(.9, .9, .9, .2),),),),);
      D(u(B), e.translate(-39, -3, 55).scale(3, 1.4, 2.7), p(.9, .9, .9, .2));
    }), G(b => {
      b.g = () => e.translate(0, -6.5 * U[4].i);
      D(u(6), e.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), p(.7, .7, .7, .4),);
    }), [...r(z(vb(r(u(B), e.translate(0, -3).scale(11, 1.4, 3), p(.9, .9, .9, .2),), y(r(u(6), e.rotate(0, 0, 90).scale(6, 8, 6), p(.3, .6, .6, .3)), r(u(4, 0, .01), e.translate(0, 6).scale(12, 2, .75).rotate(0, 45), p(.3, .6, .6, .3),), r(u(6), e.rotate(0, 0, 90).scale(5, 12, 5), p(.3, .6, .6, .3)), ...[5, 0, -5].map(b => r(u(5), e.translate(b, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), p(.3, .6, .6, .3),)),),),), e,)]), q = (D(k, e.translate(-53, 0, 55)), D(u(6), e.translate(-61.3, -2.4, 49).scale(3, 
    1, 5), p(.4, .6, .6, .3)), D(u(7), e.translate(-57, -2.6, 46).scale(4, 1, 4), p(.8, .8, .8, .3)), ec(e.translate(-55, -1.1, 46).rotate(0, 90)), G(b => {
      b.F = 0;
      b.g = () => e.translate(-75, (1 - U[5].i) * (1 - U[6].h) * 3, 55).rotate(180 * (1 - U[5].i) + Ca, 0,);
      D(k);
    }), D(u(B), e.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), p(.7, .7, .7, .2),), D(u(3, 0, -0.5), e.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), p(.8, .8, .8, .2),), D(z(y(vb(r(u(B), e.translate(-100, -2.5, 55).scale(8, 1, 8), p(.8, .8, .8, .2),), r(u(B), e.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), p(.8, .8, .8, .2),), r(u(B), e.translate(-100, -2.6, 70).scale(3, 1.1, 7), p(.8, .8, .8, .2),), r(u(B), e.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 
    1.1, 5), p(.8, .8, .8, .2),), r(u(6), e.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), p(.6, .6, .6, .3),), r(u(B), e.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), p(.8, .8, .8, .2),), r(u(B), e.translate(-100, .42, 92).scale(3, 1.1, 4.1), p(.8, .8, .8, .2),),), r(u(8), e.translate(-100, -1, 55).scale(7, .9, 7), p(.3, .3, .3, .4),), r(u(8), e.translate(-100, -2, 55).scale(4, .3, 4), p(.4, .4, .4, .5),), r(u(8), e.translate(-100, -3, 55).scale(.6, 1, .6), p(.4, 
    .4, .4, .5),),),), e,), fc(e.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), fc(e.translate(-89, .2, 80), [0, 0, 6]), D(z(y(r(u(B), e.translate(-100, 1, 63).scale(7.5, 4), p(.5, .5, .5, .4),), r(u(B), e.translate(-100, 0, 70).scale(2, 2, 10), p(.5, .5, .5, .4),), r(u(20, 1), e.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), p(.5, .5, .5, .4),),),),), G(b => {
      b.g = () => e.translate(-99.7, 5.3 * -U[6].h - 2, 63.5);
      D(l);
    }), B.map(({x:b, z:f}) => {
      D(u(6), e.translate(7 * b - 100, -3, 7 * f + 55).scale(1, 8.1), p(.6, .15, .15, .8),);
      [4, -0.4].map(w => D(u(6), e.translate(7 * b - 100, w, 7 * f + 55).scale(1.3, .5, 1.3), p(.4, .2, .2, .8),));
    }), m(7, b => {
      D(u((23 * b + 1) % 5 + 5, 0, .55), e.translate(5 * Math.sin(b) - 101 + b, -2.3 - b, 44.9 - 2.8 * b).scaleSelf(5 + b / 2, 1 + b / 6, 5 + b / 3,), p(.5 - b / 17, .5 - (1 & b) / 9, .6, .3),);
    }), D(u(B), e.translate(-87, -9.5, 24).scale(7, 1, 3), p(.4, .5, .6, .4)), D(u(4), e.translate(-86, -9.2, 27).scale(5, 1, 5), p(.5, .6, .7, .3)), D(u(18, 1), e.translate(-86, -9, 31).scale(1.5, 1, 1.5), p(.3, .3, .4, .1)), ec(e.translate(-86, -7.5, 31)), G(b => {
      b.g = () => e.translate(0, 3.5 * (1 - Xa(U[6].h, U[7].h)) + $a(U[7].i, U[6].i) * Math.sin(a) * 5,);
      [0, 12, 24].map(f => D(u(B), e.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), p(.2, .5, .6, .2),));
    }), G(b => {
      b.g = () => {
        const f = $a(U[7].i, U[6].i);
        return e.translate(0, f * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + f) * f);
      };
      [6, 18].map(f => D(u(B), e.translate(f - 76.9, f / -13 - 10, 24).scale(2.8, 1.5, 3), p(.1, .4, .5, .2),));
    }), D(z(y(vb(r(u(B), e.scale(11, 1, 13), p(.3, .4, .6, .3)), r(u(5), e.translate(0, 0, -7).scale(2, 1.2, 2), p(.2, .4, .7, .3),), r(u(5), e.scale(9, 1.2, 9), p(0, .2, .3, .5)),), r(u(5), e.scale(5.4, 5, 5.4), p(0, .2, .3, .5)),),), e.translate(-38.9, -11.3, 17),), ec(e.translate(-38.9, -9.6, 10)), G(b => {
      b.g = () => e.translate(0, -7.3 * U[7].i);
      D(z(y(vb(r(u(5), e.translate(0, 2).scale(5, 7, 5).skewY(8), p(.2, .4, .5, .5),), r(u(5), e.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), p(.25, .35, .5, .5),), r(u(5), e.translate(0, 9).scale(.6, 7, .6).skewY(8), p(.35, .3, .5, .5),),), r(u(5), e.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), p(.2, .4, .5, .5),),),), e.translate(-38.9, -11.3, 17),);
      fc(e.translate(-38.9, -0.3, 17).rotate(0, 0, 10), ...lb(15).map(({x:f, z:w}) => [3 * f, 3 * w, 1.5]),);
    }), B.map(({x:b, z:f}) => {
      c = e.translate(9 * b - 38.9, -7.3, 11 * f + 17);
      D(u(18, 1), c.scale(1, 4), p(.25, .25, .25, 1));
      [1.5, 8].map(w => D(u(18, 1), c.translate(0, w - 4).scale(1.5, .5, 1.5), p(.6, .6, .6, .3)));
    }), D(z(y(vb(r(u(6), e.translate(0, 0, -36).scale(15, 1.2, 15), p(.7, .7, .7, .3),), r(u(B), e.translate(0, 0, -18).scale(4, 1.2, 6), p(.45, .4, .6, .3),),), ...m(6, b => m(6, f => r(u(6), e.translate(4.6 * f - 12 + 2 * (1 & b), 0, 4.6 * b - 50 + 2 * Math.sin(4 * f)).scale(2, 5, 2,), p(.7, .7, .7, .3),))).flat(),),), e.translate(-38.9, -11.3, 17),), fc(e.translate(-38.9, -8.4, -21), [0, 0, 12]), D(u(5), e.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), p(.8, .1, .25, .4),), ec(e.translate(-84, 
    -0.5, 85).rotate(0, 45)), G(b => {
      b.g = () => dc(-123, 1.4, 55 + -65 * Ha);
      ec(e.translate(0, -3, -4).rotate(0, 180));
      D(hc);
    }), fc(e.translate(-115, .2, -12), [0, 0, 3.5]), z(y(r(u(B), e.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), p(.25, .25, .35, .3),), r(u(3), e.translate(0, 0, -5.5).scale(3, 2), p(.6, .3, .4, .3)), ...[-1.2, 1.2].map(b => r(u(B), e.translate(b, -0.5, 1).scale(.14, .3, 6.5), p(.7, .2, 0, .3),)),),)), t = (G(b => {
      b.g = () => {
        var f = Math.sin(1.1 * a);
        return e.translate.call(e, 0, -2, $a(U[10].h, U[11].h) * (0 > f ? -f : f) * -8.5 + 10);
      };
      m(2, f => D(q, e.translate(9 * f - 110 + (1 & f), 1.7, -12)));
    }), G(b => {
      b.g = () => {
        var f = Math.sin(2.1 * a);
        return e.translate.call(e, 0, -2, $a(U[10].h, U[11].h) * (0 > f ? -f : f) * -8.5 + 10);
      };
      m(2, f => D(q, e.translate(9 * (f + 2) - 110 + (1 & f), 1.7, -12)));
    }), G(b => {
      b.g = () => {
        var f = Math.sin(1.5 * a);
        return e.translate.call(e, 0, -2, -8.5 * Xa((1 - U[10].h) * (1 - $a(U[10].h, U[11].h)), $a(U[10].h, U[11].h) * (0 > f ? -f : f),) + 10,);
      };
      m(3, f => D(q, e.translate(9 * f - 106, 1.7, -12)));
    }), D(z(y(vb(r(u(B), e.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), r(u(B), e.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...m(4, b => r(u(B), e.translate(13 + 9 * b + (1 & b), -0.8, 9).scale(1.35, 1.35, 9),)), ...m(3, b => r(u(B), e.translate(17 + 9 * b, -0.8, 9).scale(1.35, 1.35, 9)),),),), e.translate(-123, 0, -12), p(.5, .5, .6, .2),), D(u(5), e.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), p(.25, .25, .35, 1),), D(u(B), e.translate(-116, -2.6, -12).scale(3.2, 1.1, 
    4).skewX(3), p(.8, .8, .8, .2),), D(u(6), e.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), p(.6, .5, .7, .2)), ec(e.translate(-116, -1.4, -18).rotate(0, 180)), m(3, b => {
      D(jc, e.translate(12 * b - 109, -9, -12), p(.6, .6, .6, .3));
      D(jc, e.translate(-77, -9, -12 * b - 20).rotate(0, 90), p(.6, .6, .6, .3));
    }), D(z(y(r(u(12), e.translate(-77, -13.9, -12).scale(4, 18.2, 4), p(.7, .7, .7, .2),), r(u(B), e.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), p(.4, .5, .6, .2),), r(u(B), e.translate(-77, 0, -14).scale(1.5, 2.2, 2), p(.4, .5, .6, .2),), r(u(12), e.translate(-77, 2.8, -12).scale(3, 5, 3), p(.4, .5, .6, .2),),),),), D(u(B), e.translate(-115.5, -17, -12).scale(.5, 15, 2.2), p(.6, .6, .6, .3)), D(u(B), e.translate(-77, -17, -50.5).scale(2.2, 15, .5), p(.6, .6, .6, .3)), D(u(B), e.translate(-84.9, 
    -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), p(.6, .6, .6, .3),), D(z(y(r(u(B), e.translate(-93, -5.8, -40).scale(9, 1, 5), p(.8, .8, .8, .1),), r(u(9), e.translate(-98, -5.8, -40).scale(3, 8, 3), p(.7, .7, .7, .2),),),),), D(u(9), e.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), p(.5, .5, .5, .3)), ec(e.translate(-98, -4.4, -40).rotate(0, 90)), fc(e.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]), D(z(y(vb(r(u(6, 0, 0, .6), e.translate(-100, .7, 105.5).scale(8, 1, 11), p(.7, 
    .7, .7, .2),), r(u(B), e.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), p(.7, .7, .7, .2),), r(u(B), e.translate(-91.2, .7, 107).scale(3, 1, 3.3), p(.7, .7, .7, .2),),), r(u(5), e.translate(-100, .7, 113).scale(4, 3, 4), p(.7, .7, .7, .2),),),),), m(4, b => G(f => {
      f.g = () => {
        const w = $a(U[8].i, U[12].i);
        return e.translate((2 < b ? 2 * (1 - w) + w : 0) - 100, w * Math.sin(1.3 * a + 1.7 * b) * (3 + b / 3) + .7, 115 + (1 & b ? -1 : 1) * (1 - U[8].i) * (1 - U[12].i) * -7 + (.05 > w ? .05 : w) * Math.cos(1.3 * a + 7 * b) * (4 - 2 * (1 - b / 3)),);
      };
      D(u(6), e.translate(-14.6 - 4.8 * b - (2 < b ? 2 : 0), -b / 2.3, -21.5).scale(2.6, 1, 2.5), p(.5 - b / 8, b / 12 + .5, .7, .3),);
    })), G(b => {
      b.g = () => {
        const f = $a(U[8].i, U[12].i);
        return e.translate(2.5 * (1 - f) - 139.7, -3 * (1 - U[8].h) + f * Math.sin(.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * f + 3), 0);
      };
      D(z(y(r(u(10), e.scale(6, 2, 6), p(.1, .6, .5, .3)), r(u(10), e.scale(3.3, 6, 3.3), p(.1, .6, .5, .5)),),),);
      c = e.translate(-7.5).rotate(0, 90);
      D(u(15), c.scale(3, 2.3, 3), p(.4, .4, .4, .3));
      D(u(10), c.scale(2, 2.5, 2), p(.3, .8, .7, .3));
      D(u(5), c.scale(1, 3), p(.5, .5, .5, .5));
      ec(c.translate(0, 3.4).rotate(0, 180));
      [-1, 1].map(f => D(ic, e.rotate(90 * -f, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), p(1, 1, .8, .2),));
      fc(e.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    }), [-1, 1].map(b => {
      D(u(15, 1), e.translate(-7.5 * b - 100, 3.7, 96).scale(.8, 4, .8), p(.6, .24, .2, .5),);
      [7.2, 1.5].map(f => D(u(15, 1), e.translate(-7.5 * b - 100, f + .7, 96).scale(1.1, .5, 1.1), p(.5, .24, .2, .4),));
      D(ic, e.translate(-5 * b - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * b - 90), p(1, 1, .8),);
      D(z(y(r(u(B), e.translate(-4 * b, 3.5, -0.5).scale(4, 4, .7), p(.5, .5, .5, .4),), r(u(B), e.scale(3, 3, 10), p(.6, .24, .2, .5)), r(u(30, 1), e.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), p(.6, .24, .2, .5),), r(u(5), e.translate(-5.3 * b, 7).rotate(90, 0).scale(1.7, 5, 1.7), p(.6, .24, .2, .5),), r(u(5), e.translate(-5.3 * b, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), p(.6, .24, .2, .5),),),), e.translate(b - 100, .7, 97),);
    }), G(b => {
      b.g = () => e.translate(-100, .6 - 6 * U[12].h, 96.5).scale(.88, 1.2);
      D(l);
    }), [...r(u(28, 1), e.scale(8, 1, 8), p(.45, .45, .45, .2)), ...r(u(5), e.translate(0, 1).scale(1, .2), p(.3, .3, .3, .2)),]);
    G(b => {
      b.g = () => e.translate(-80, 1, 106).rotate(0, 40 + ya);
      D(z(y(r(u(28, 1), e.scale(8, 1, 8), p(.45, .45, .45, .2)), r(u(B), e.translate(0, 0, -5.5).scale(1.5, 3, 2.5), p(.45, .45, .45, .2),),),),);
      D(u(8), e.translate(0, 2).scale(3, 1.5, 3), p(.7, .7, .7, .1));
      D(u(5), e.translate(0, 2).scale(1, 2), p(.3, .3, .3, .2));
      fc(e.translate(0, 3), ...lb(10).map(({x:f, z:w}) => [5.6 * f, 5.6 * w, 2.5]),);
    });
    G(b => {
      b.g = () => e.translate(-64, 1, 106).rotate(0, Ba);
      D(z(y(r(u(28, 1), e.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)), r(u(B), e.scale(9, 5, 2), p(.3, 0, 0, .3)),),),);
      D(t);
      [-1, 1].map(f => D(ic, e.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), p(1, 1, .8),));
    });
    G(b => {
      b.g = () => e.translate(-48, 1, 106).rotate(0, 180 - Ba);
      D(z(y(r(u(30, 1), e.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)), r(u(B), e.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)), r(u(B), e.translate(0, 0, 7).scale(2, 5, 9), p(.3, 0, 0, .3),),),),);
      D(t);
    });
    G(b => {
      b.g = () => e.translate(-48, 1, 90).rotate(0, 270 + Ba);
      D(z(y(r(u(30, 1), e.translate(0, 2).scale(8, 1, 8), p(.35, 0, 0, .3)), r(u(B), e.translate(7).scale(9, 5, 2), p(.3, 0, 0, .3)), r(u(B), e.translate(0, 0, -7).scale(2, 5, 9), p(.3, 0, 0, .3),),),),);
      D(t);
    });
    D(u(B), e.translate(-56, 1, 106).scale(.7, .8, 2.5), p(.7, .7, .7, .2));
    D(u(B), e.translate(-48, 1, 98).scale(2.5, .8, .7), p(.7, .7, .7, .2));
    D(u(B), e.translate(-39, .4, 90).scale(2, 1, 2), p(.7, .7, .7, .3));
    D(u(B), e.translate(-34.2, .4, 90).scale(3, 1, 3), p(.7, .7, .7, .3));
    ec(e.translate(-34, 2.7, 96).rotate(-12, 0));
    D(u(5), e.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), p(.2, .5, .5, .6));
    [p(.1, .55, .45, .2), p(.2, .5, .5, .3), p(.3, .45, .55, .4)].map((b, f) => G(w => {
      w.g = () => e.translate(0, (1 - U[13].i) * (1 - U[14].i) * 3 + $a(U[13].i, U[14].i) * Math.sin(1.5 * a + 1.5 * f) * 4.7,);
      D(u(8), e.translate(-23.5, f / 1.5 - .4, 90 + 6.8 * f).scale(3.6, 2 - f / 1.5, 3.6).rotate(0, 22.5), b,);
      2 === f && D(u(6), e.translate(-29, .4, 90).scale(2.4, 1, 2.8), p(.6, .7, .6, .3));
      1 === f && D(u(B), e.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), p(.6, .6, .7, .3),);
    }));
    D(z(y(r(u(6, 0, 0, .3), e.translate(0, -0.92, 95).scale(14, 2, 14), p(.8, .8, .8, .2),), r(u(5), e.translate(0, 0, 95).scale3d(6), p(.3, .3, .3, .5)),),),);
    [8, -6.1].map((b, f) => m(3, w => D(jc, e.translate(6 * w - 6, b - (1 & w), 111 - .2 * (1 & w) - f), 1 & w ? p(.5, .5, .5, .3) : p(.35, .35, .35, .5),),));
    [-1, 1].map(b => D(ic, e.translate(-8 * b, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * b + 90), p(1, 1, .8),));
    ec(e.translate(0, 1.7, 82).rotate(0, 180));
    D(u(5), e.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), p(.5, .3, .3, .4),);
    D(z(y(vb(r(u(B), e.translate(0, 16, 110.5).scale(12, 1, 3), p(.5, .3, .3, .4),), r(u(B), e.translate(0, 16, 111).scale(3, 1, 3.8), p(.5, .3, .3, .4),),), r(u(5), e.translate(0, 16, 103.5).scale(5.5, 5, 5.5), p(.5, .3, .3, .4),),),),);
    G(b => {
      b.g = () => {
        const f = Math.sin(a);
        return e.translate(-2 * f).rotate(0, 0, 25 * f);
      };
      D(u(3), e.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), p(.5, .3, .3, .4),);
      [22, 30].map(f => {
        D(u(6), e.translate(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), p(.7, .7, .7, .4),);
        D(u(B), e.translate(0, 6.2, f + 95).scale(.5, 11, .5), p(.5, .3, .3, .4),);
      });
    });
    D(u(6), e.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), p(.5, .6, .7, .3));
    D(u(B), e.translate(0, 16, 129).scale(1.5, 1, 2), p(.5, .6, .7, .3));
    D(u(7), e.translate(0, 16.2, 133).scale(5, 1, 5), p(.4, .5, .6, .4));
    G(b => {
      b.g = () => {
        const f = $a($a((U[14].h + U[14].i) / 2, U[13].i), (U[15].h + U[15].i) / 2,);
        return e.translate(0, 16 * f, 8.5 * Za(2 * f - 1) + 95);
      };
      D(u(5), e.scale(5, 1.1, 5), p(.5, .3, .3, .4));
      D(u(5), e.scale(5.5, .9, 5.5), p(.25, .25, .25, .4));
      ec(e.translate(0, 1.5, -1).rotate(0, 180));
    });
    fc(e.translate(0, 3, 95), ...lb(9).map(({x:b, z:f}) => [9 * b, 9 * f, 4]),);
    fc(e.translate(0, 19, 134), [0, 0, 3.5]);
  });
  Sa = G(() => {
    Ra = [-1, 1].map(h => G(() => {
      D(u(10, 1), e.translate(.3 * h, -0.8).scale(.2, .7, .24), p(1, .3, .4));
    }));
    [0, 180].map(h => D(ic, e.rotate(0, h).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), p(1, 1, .8),));
    D(nb(20), e.translate(0, 1).scale(.5, .5, .5), p(1, .3, .4));
    const g = r(z(y(u(15, 1), r(u(B), e.translate(0, 0, 1).scale(2, 2, .5)),),), e.rotate(-90, 0).scale(.1, .05, .1), p(.3, .3, .3),);
    [-1, 1].map(h => D(g, e.translate(.2 * h, 1.2, .4).rotate(0, 20 * h, 20 * h)));
    D(u(B), e.translate(0, .9, .45).scale(.15, .02, .06), p(.3, .3, .3));
    D(nb(20), e.scale(.7, .8, .55), p(1, .3, .4));
  });
  Ta = [p(1, .5, .2), p(.7, 1, .2)].map(g => G(() => {
    D(u(6, 1), e.scale(.13, 1.4, .13), p(.3, .3, .5));
    D(u(8), e.translate(0, 1).scale(.21, .3, .21), g);
    D(u(3), e.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), p(.2, .2, .2));
  }));
  Va = G(() => {
    D(u(6), e.scale(.85, 1, .85), p(1, .3, .5));
  });
  Ua = G(() => {
    D(nb(40, 30, (g, h, l) => {
      const k = h / 30, q = .05 * g * Math.PI, t = k ** .6 * Math.PI / 2;
      g = k * k * Math.sin(g * Math.PI * .35) / 4;
      return 29 === h ? {x:l.B = 0, y:-0.5, z:0,} : {x:Math.cos(q) * Math.sin(t), y:Math.cos(k * Math.PI) - k - g, z:Math.sin(q) * Math.sin(t) + Math.sin(g * Math.PI * 2) / 4,};
    }), e.scale3d(.7), p(1, 1, 1),);
    [-1, 1].map(g => D(nb(15), e.translate(.16 * g, .4, -0.36).scale3d(.09)));
  });
}, lc = (c, g, h, l) => {
  let k = 0, q = 0, t = 0, b = 1 / 0, f = -1 / 0, w = 1 / 0, C = -1 / 0, K = 1 / 0, S = -1 / 0;
  const la = 1.1 * (h - g), ba = (new DOMMatrix(db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, g, h))).multiplySelf(c).invertSelf();
  c = m(8, A => {
    A = ba.transformPoint({x:4 & A ? 1 : -1, y:2 & A ? 1 : -1, z:1 & A ? 1 : -1,});
    return k -= A.x = (la * A.x | 0) / (la * A.w), q -= A.y = (la * A.y | 0) / (la * A.w), t -= A.z = (la * A.z | 0) / (la * A.w), A;
  });
  g = e.rotate(298, 139).translateSelf(k / 8, q / 8, t / 8);
  return kb(c, g).map(({x:A, y:R, z:O}) => {
    b = b < A ? b : A;
    f = A < f ? f : A;
    w = w < R ? w : R;
    C = R < C ? C : R;
    K = K < O ? K : O;
    S = O < S ? S : O;
  }), K *= 0 > K ? l : 1 / l, S *= 0 < S ? l : 1 / l, e.scale(2 / (f - b), 2 / (C - w), 2 / (K - S)).translateSelf((f + b) / -2, (C + w) / -2, (K + S) / 2,).multiplySelf(g).toFloat32Array();
}, mc = (c, g = 35633) => {
  g = W.c6x(g);
  return W.s3c(g, c), W.c6a(g), g;
}, nc = (c, g) => {
  const h = {}, l = W.c1h();
  return W.abz(l, c), W.abz(l, mc(g, 35632)), W.l8l(l), k => k ? h[k] || (h[k] = W.gan(l, k)) : W.u7y(l);
}, oc = (c, g, h) => {
  const l = k => W.d97(4, k.I, 5123, 2 * k.J);
  if (Ka) {
    W.uae(c, !1, e.rotate(0, 40 * Math.sin(na) - 70).toFloat32Array()), l(Sa.C), Ra.map(k => k.C).map(l);
  } else {
    for (const k of wb) {
      const q = k.G, t = k.C;
      (g || k !== Sa && k !== Ra[0] && k !== Ra[1]) && t && (h && W.ube(h, q / 255), W.uae(c, !1, k.l.toFloat32Array()), l(t));
    }
    for (const k of U) {
      W.uae(c, !1, k.l.toFloat32Array()), l(Ta[.5 < k.h ? 1 : 0].C);
    }
    for (const k of ac) {
      W.uae(c, !1, k.l.toFloat32Array()), l((h ? Ua : Va).C);
    }
  }
}, pc = new Int32Array(10725888), qc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), ic = (() => {
  const c = m(11, h => e.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),), g = lb(18);
  return m(10, h => mb(kb(g, c[h]).reverse(), kb(g, c[h + 1]), 1),).flat();
})(), hc = z(y(r(u(20, 1, 1.15, 1), e.translate(0, -3).scale(3.5, 1, 3.5), p(.7, .4, .25, .7),), r(u(20, 1, 1.3, 1), e.translate(0, -2.5).scale(2.6, 1, 3), p(.7, .4, .25, .2),), r(u(B), e.translate(4, -1.2).scale3d(2), p(.7, .4, .25, .3)),),), jc = z(y(r(u(B), e.translate(0, -8).scale(6, 15, 2.2)), r(u(B), e.translate(0, -14.1).scale(4, 13, 4)), r(u(20, 1), e.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), Hb = new Int32Array(Fb.buffer, 0, 4), Gb = new Float32Array(Fb.buffer), Wb = new AudioContext(), 
Vb = Wb.createBufferSource(), W = hC.getContext("webgl2");
for (const c in W) {
  W[c[0] + [...c].reduce((g, h, l) => (g * l + h.charCodeAt(0)) % 434, 0).toString(36)] = W[c];
}
setTimeout(() => {
  let c = 0, g = 6;
  const h = () => {
    if (h4.innerHTML += ".", !--g) {
      let t = 0, b = 0, f = 1, w = 0, C = 0, K = 0, S = !1, la, ba, A, R, O, da, F, ea, Z, aa;
      const N = {x:0, y:0, z:0,}, pa = new Int32Array(256), Ma = () => {
        const {s:v, H:x} = U[xa], {x:J, y:E, z:L} = x.transformPoint({x:0, y:8, z:-3,});
        n.x = N.x = J;
        n.y = N.y = F = E;
        n.z = N.z = L;
        ba = da = O = A = R = 0;
        f = 1;
        t = b = v?.G || 1;
      }, za = () => {
        let v = 0, x = 0, J = (NO_INLINE(() => {
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
          f ? Q && (f = 0, b = Q) : b = Q || t;
          t = Q;
          ba = va;
          A = H(A, va ? 6.5 : 8, 4);
          N.y += fa / 41 - (va ? 1 : A) * ua / 41 * A * d;
        })(), NO_INLINE(() => {
          for (let va = 32; 128 > va; va += 2) {
            var I = 0;
            let sa = 0;
            var Q = 0;
            let X = 0;
            const Da = 512 * va;
            for (let T = va >> 1 & 1; 128 > T; T += 2) {
              var fa = Da + 4 * T;
              const Qa = Da + 4 * (127 - T), ra = Ea[fa] / 255, Cb = Ea[1 + Qa] / 255;
              var ua = T / 63.5 - 1;
              ua = 1 - (0 > ua ? -ua : ua);
              if (10 < T && 118 > T && (I = Xa(I, Xa(ra * ua, ra * Ea[Qa] / 127.5)), sa = Xa(sa, Xa(Cb * ua, Cb * Ea[1 + fa] / 255))), 54 > T || 74 < T) {
                fa = (1 - ua) * (Cb < ra ? ra : Cb) / 3, .001 < fa && (64 > T && fa > Q ? Q = fa : 64 < T && fa > X && (X = fa));
              }
            }
            Q = X - Q;
            I = sa - I;
            (0 > Q ? -Q : Q) > (0 > v ? -v : v) && (v = Q);
            (0 > I ? -I : I) > (0 > x ? -x : x) && (x = I);
          }
        })(), (Ub[0] ? 1 : 0) + (Ub[2] ? -1 : 0) + ka), E = (Ub[1] ? 1 : 0) + (Ub[3] ? -1 : 0) + ma;
        var L = navigator.getGamepads()[0];
        if (L) {
          var P = Q => I[Q]?.pressed || 0 < I[Q]?.value;
          const I = L.buttons;
          L = L.axes;
          var V = P(1) || P(3) || P(2) || P(0);
          V !== S && (S = V) && (Ub[5] = 1);
          J += (.2 < Ya(-L[0]) ? -L[0] : 0) + (P(14) ? 1 : 0) + (P(15) ? -1 : 0);
          E += (.2 < Ya(-L[1]) ? -L[1] : 0) + (P(12) ? 1 : 0) + (P(13) ? -1 : 0);
          La && (.3 < Ya(L[2]) && (Ob += 80 * L[2] * d), .3 < Ya(L[3]) && (Nb += 80 * L[3] * d));
        }
        .05 > (0 > E ? -E : E) && (E = 0);
        .05 > (0 > J ? -J : J) && (J = 0);
        P = Math.atan2(E, J);
        L = Za(Math.hypot(E, J));
        var Y = (J = L * Math.cos(P), E = L * Math.sin(P), Za(1 - 5 * Xa(0 > v ? -v : v, 0 > x ? -x : x)));
        V = (b || (v += O * Y * d, x += da * Y * d), O = H(O, 0, ba ? 8 : 4), da = H(da, 0, ba ? 8 : 4), R = H(R, ba ? (J || E ? ba ? 7 : 4 : 0) * Y : 0, ba ? .1 < Y ? 10 : J || E ? 5 : 7 : 1,), La ? Ob * Wa : Math.PI);
        Y = Math.sin(V) * R * d;
        var Oa = Math.cos(V) * R * d;
        V = (v -= J * Oa - E * Y, x -= J * Y + E * Oa, b && wb[b].F && wb[b].l || e);
        Y = V.inverse();
        if (Y.m41 = 0, Y.m42 = 0, Y.m43 = 0, {x:v, z:x} = Y.transformPoint({x:v, z:x, w:0,}), N.x += v, N.z += x, b !== la) {
          la = b;
          const {x:I, y:Q, z:fa} = V.inverse().transformPoint(n);
          N.x = I;
          N.y = Q;
          N.z = fa;
        }
        Y = n.x;
        Oa = n.z;
        const {x:Db, y:gb, z:M} = V.transformPoint(N);
        V = (n.x = Db, n.y = gb, n.z = M, Ya(F - gb));
        F = H(F, gb + .1, 50 * V + 5);
        b && (O = (n.x - Y) / d, da = (n.z - Oa) / d);
        (J || E) && (w = 90 - P / Wa);
        C = bb(C, w, 8 * d);
        K += (L - K) * Za(10 * d);
      }, Na = v => {
        requestAnimationFrame(Na);
        var x = (v - (Pa || v)) / 1e3;
        d = Ka ? Ub[5] = 0 : .066 < x ? .066 : x;
        a += d;
        na += x;
        Pa = v;
        if (0 < d && (W.b6o(36160, wa), W.r9r(0, 0, 128, 128, 6408, 5121, Ea), W.iay(36160, [36064]), NO_INLINE(za)(), gc()), 0 < d) {
          if (ea = cb(ea, n.x, .5, d,), Z = cb(Z, n.y, 2, d,), aa = cb(aa, n.z, .5, d,), La) {
            v = 200 * f, Jb = H(Jb, n.x, 18 + v), Kb = H(Kb, n.y + 1.5, 15 + v), Lb = H(Lb, n.z, 18 + v), Nb = Xa(87 > Nb ? Nb : 87, -87);
          } else {
            if (Jb = cb(Jb, ea, 1, 2 * d,), Kb = cb(Kb, Z + 13 + 15 * f, 4, 2 * d,), Lb = cb(Lb, aa + -18, 1, 2 * d,), v = Lb - aa, 1 < (0 > v ? -v : v)) {
              x = Jb - ea;
              const J = Kb - Z;
              Ob = 270 + Math.atan2(v, x) / Wa;
              Nb = 90 - Math.atan2(Math.hypot(v, x), J) / Wa;
            }
          }
          if (Ob = ab(Ob), 0 < d) {
            v = $a(U[12].h, U[13].h), a > qa && (h4.innerHTML = "", qa = 0), x = H(Ca, 0, 1), Ca = x + (ab(Ca + 60 * d) - x) * Za(U[5].h - U[6].i), x = H(ya, 0, 5), ya = x + (ab(ya + 56 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v), x = H(Ba, 0, 4), Ba = x + (ab(Ba + 48 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v), v = 2 * U[9].i - 1, Ha = H(Ha, U[9].i, .2 + .3 * (0 > v ? -v : v),), Ga = H(Ga, Fa ? Ga + (-9 - Ga) * Za(1.5 * d) : Za(a / 3), 1,), 1 === U[0].j && .8 < U[0].h && (13 > oa ? (U[0].j = 0, Fa || (h4.innerHTML = 
            "Not leaving now, there are souls to catch!", qa = a + 3)) : Fa || (Fa || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", qa = a + 1 / 0), Fa = 1)), Ub[5] = 0, (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && Ma();
          }
        }
        v = Ka ? e.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Za(hC.clientWidth / 1e3)) : e.rotate(-Nb, -Ob, -0).invertSelf().translateSelf(-Jb, -Kb, -Lb,);
        0 < d && (ta(), W.b6o(36160, wa), W.v5y(0, 0, 128, 128), W.cbf(!0, !1, !0, !1), W.c4s(16640), W.uae(ta("b"), !1, e.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, .3 - n.z,).toFloat32Array(),), oc(ta("c"), 0, ta("j")), W.cbf(!1, !0, !1, !1), W.c4s(16640), W.cbf(!1, !0, !0, !1), W.uae(ta("b"), !1, e.translate(-n.x, -n.y, -n.z - .3).toFloat32Array(),), oc(ta("c"), 0, ta("j")), W.cbf(!0, !0, !0, !0), 1 === b && (U[9].j = -15 > n.x && 0 > n.z ? 1 : 0));
        qb();
        W.v5y(0, 0, 2048, 2048);
        Aa[0](lc(v, .3, 55, 10));
        Aa[1](lc(v, 55, 177, 11));
        W.b6o(36160, null);
        ha();
        W.v5y(0, 0, W.drawingBufferWidth, W.drawingBufferHeight);
        W.c4s(16640);
        W.uae(ha("a"), !1, db(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        W.uae(ha("b"), !1, v.toFloat32Array());
        W.ubu(ha("k"), Jb, Kb, Lb);
        Aa[0]();
        Aa[1]();
        oc(ha("c"), !La);
        ia();
        W.ubu(ia("j"), W.drawingBufferWidth, W.drawingBufferHeight, na);
        Ka ? W.ubu(ia("k"), 0, 0, 0) : W.ubu(ia("k"), Jb, Kb, Lb);
        W.uae(ia("b"), !1, v.inverse().toFloat32Array());
        W.d97(4, 3, 5123, 0);
      }, Ea = new Uint8Array(65536), Mb = k;
      var q = mc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c;void main(){l=d,n=f,m=c*f,gl_Position=a*b*m,o=c*vec4(e,0);}",);
      const qb = nc(mc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"), "#version 300 es\nvoid main(){}",), ia = nc(mc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), ta = nc(q, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;uniform float j;out vec4 O;void main(){vec4 a=b*m;float e=j>0.?1.-min(abs(a.z/a.w),1.):0.;O=vec4(vec2(e*(gl_FragCoord.y>31.?1.:abs(o.y))),e>0.?j:0.,1);}",), ha = nc(q, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec3 e=normalize(o.xyz),c=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+c*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,s=abs((b*m).z);vec4 r=(s<55.?i:j)*m;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=s<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-c.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), wa = (ia(), W.ubh(ia("q"), 3), ta(), W.uae(ta("a"), !1, db(1.4, .59, 1e-4, 1)), ha(), W.ubh(ha("q"), 3), W.c5w());
      q = W.c3z();
      const hb = W.c25(), Aa = m(2, v => {
        let x;
        const J = W.c25(), E = W.c5w(), L = ha(v ? "j" : "i");
        return ha(), W.ubh(ha(v ? "h" : "g"), v), W.b6o(36160, E), W.d45([0]), W.r9l(0), W.a4v(33984 + v), W.b9j(3553, J), W.fas(36160, 36096, 3553, J, 0), W.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), W.t2z(3553, 10241, 9729), W.t2z(3553, 10240, 9729), W.t2z(3553, 34893, 515), W.t2z(3553, 34892, 34894), W.t2z(3553, 10243, 33071), W.t2z(3553, 10242, 33071), P => {
          P ? (x = P, W.b6o(36160, E), W.iay(36160, [36096]), W.c4s(256), W.uae(qb("b"), !1, x), oc(qb("c"), !La)) : W.uae(L, !1, x);
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
      W.b6o(36160, wa);
      W.bb1(36161, q);
      W.r4v(36161, 33189, 128, 128);
      W.f8w(36160, 36096, 36161, q);
      W.a4v(33987);
      W.b9j(3553, hb);
      W.fas(36160, 36064, 3553, hb, 0);
      W.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      W.b9j(3553, W.c25());
      W.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Mb);
      W.gbn(3553);
      W.t2z(3553, 10241, 9987);
      W.t2z(3553, 10240, 9729);
      Sa.g = () => e.translate(n.x, F, n.z).rotateSelf(0, C,);
      Ra.map((v, x) => {
        v.g = () => Sa.l.translate(0, K * Za(.45 * Math.sin(9.1 * a + Math.PI * x - Math.PI / 2)),).rotateSelf(K * Math.sin(9.1 * a + Math.PI * x) * .25 / Wa, 0);
      });
      try {
        const [v, x, J, E, L] = JSON.parse(localStorage.DanteSP22,);
        U.map((P, V) => P.h = P.i = P.j = V ? 0 | v[V] : 0);
        ac.map((P, V) => P.j = 0 | x[V]);
        xa = J;
        a = E;
        Ha = L;
      } catch (v) {
      }
      Ga = 0 > xa ? 0 : 1 < xa ? 1 : xa;
      h4.innerHTML = "";
      qa = 0;
      bc();
      gc();
      NO_INLINE(Zb)();
      Ma();
      Jb = ea = n.x;
      Kb = (Z = n.y) + 13;
      Lb = (aa = n.z) + -18;
      requestAnimationFrame(Na);
    }
  }, l = () => {
    if (5 > c) {
      var q = 0, t = c++;
      let [C, K, S, la, ba, A, R, O, da, F, ea, Z, aa, N, pa, Ma, za, Na, Ea, Mb, qb] = Pb[t];
      F = F * F * 4;
      for (const ia of [5513, 4562, 3891]) {
        let ta = 0, ha = 0, wa, hb, Aa, v, x;
        const J = [], E = new Int32Array(768 * ia), L = 2 ** (Z - 9) / ia, P = Math.PI * 2 ** (za - 8) / ia, V = Ea * ia & -2;
        for (let Y = 0; 11 >= Y; ++Y) {
          for (let Oa = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * t + Y]; 32 > Oa; ++Oa) {
            const gb = (32 * Y + Oa) * ia;
            for (var b = 0; 4 > b; ++b) {
              if (wa = 0, Db && (wa = qb[Db - 1].charCodeAt(Oa + 32 * b) - 40, wa += 0 < wa ? 106 : 0), wa) {
                var f;
                if (!(f = J[wa])) {
                  f = wa;
                  let M = void 0, I = void 0;
                  var w = wa;
                  let Q = 0, fa = 0;
                  const ua = 2 > t ? Sb : Qb, va = 2 > t ? 1 > t ? Rb : Tb : Qb, sa = new Int32Array(O + da + F);
                  for (let X = 0, Da = 0; O + da + F > X; ++X, ++Da) {
                    let T = 1;
                    O > X ? T = X / O : O + da > X || (T = (1 - (T = (X - O - da) / F)) * 3 ** (-ea / 16 * T));
                    0 > Da || (Da -= 4 * ia, I = 0.003960 * 2 ** ((w + K - 256) / 12), M = 0.003960 * 2 ** ((w + ba - 256) / 12) * (1 + (t ? 0 : 8e-4 * 9)));
                    sa[X] = 80 * (ua(Q += I * T ** (S / 32)) * C + va(fa += M * T ** (A / 32)) * la + (R ? (2 * Math.random() - 1) * R : 0)) * T | 0;
                  }
                  f = J[f] = sa;
                }
                for (let M = 0, I = 2 * gb; f.length > M; ++M, I += 2) {
                  E[I] += f[M];
                }
              }
            }
            for (let M, I = 0; ia > I; ++I) {
              b = 0, f = 2 * (gb + I), ((M = E[f]) || x) && (Aa = 0.003080 * aa, 1 != t && 4 != t || (Aa *= Math.sin(L * f * Math.PI * 2) * Mb / 512 + .5), Aa = 1.5 * Math.sin(Aa), ta += Aa * ha, v = (1 - N / 255) * (M - ha) - ta, ha += Aa * v, M = 4 == t ? ha : 3 == t ? v : ta, t || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5), M *= pa / 32, x = 1e-5 < M * M, hb = Math.sin(P * f) * Ma / 512 + .5, b = M * (1 - hb), M *= hb), V > f || (b += E[f - V + 1] * Na / 
              255, M += E[f - V] * Na / 255), pc[q + f] += E[f] = b, ++f, pc[q + f] += E[f] = M;
            }
          }
        }
        q += E.length;
      }
      setTimeout(l);
    } else {
      q = Wb.createBuffer(2, 5362944, 44100);
      for (t = 0; 2 > t; t++) {
        for (let C = t, K = q.getChannelData(t); 10725888 > C; C += 2) {
          K[C >> 1] = pc[C] / 65536;
        }
      }
      Vb.buffer = q;
      Vb.loop = !0;
    }
    h();
  }, k = new Image();
  k.onload = k.onerror = () => {
    h();
  };
  k.src = qc;
  setTimeout(l, 50);
  NO_INLINE(kc)();
});

