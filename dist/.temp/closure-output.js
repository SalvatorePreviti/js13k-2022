let ba, ca, da, fa, ia, ka, la, ma, na, oa = 0, pa = 0, c = 0, ra = 0, sa = 0, ta = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 1, d = 0.066;
const e = [], h = [], Ha = [], Ia = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ja = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ka = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Oa = {x:0, y:0, z:0,};
var Pa = 0, Qa = 180;
const Ra = {x:0, y:0, z:0,}, Sa = (a, b) => Array.from(Array(a), (g, m) => b(m)), Ta = Math.PI / 180, Ua = NO_INLINE((a, b) => a < b ? a : b), Wa = NO_INLINE((a, b) => b < a ? a : b), Xa = NO_INLINE(a => 0 > a ? -a : a), Ya = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, Za = (a, b) => Xa(a) > b ? a : 0, n = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, $a = (a, b) => (a = Ya(a), n(a, 1 - a, b)), ab = a => Math.atan2(Math.sin(a *= Ta), Math.cos(a)) / Ta, bb = (a, b, g) => a + (2 * 
(b = (b - a) % 360) % 360 - b) * Ya(g) || 0, cb = ({x:a, y:b, z:g}) => Math.hypot(a - Oa.x, b - Oa.y, g - Oa.z), db = ({x:a, y:b, z:g}, m) => a * m.x + b * m.y + g * m.z, eb = a => {
  let b, g = 0, m = 0, q = 0, l = a.at(-1);
  for (b of a) {
    g += (l.y - b.y) * (l.z + b.z), m += (l.z - b.z) * (l.x + b.x), q += (l.x - b.x) * (l.y + b.y), l = b;
  }
  return b = Math.hypot(g, m, q), g /= b, m /= b, q /= b, {x:g, y:m, z:q, w:g * l.x + m * l.y + q * l.z,};
}, fb = (a, b, g, m) => new DOMMatrix([g, 0, 0, 0, 0, m, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), hb = (a, b = gb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), kb = (a = ib, b = jb,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = 
a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), p = NO_INLINE((a, b, g) => ib.translate(a, b, g)), lb = NO_INLINE((a, b, g) => ib.rotate(a, b, g)), t = NO_INLINE((a, b, g) => ib.scale(a, b, g)), mb = (a, b, g) => (a.D = g, a.A = b, a), nb = (a, b, g = a.A) => mb(a.map(m => {
  let q, l;
  return {x:m, y:q, z:l} = m, {x:m, y:q, z:l} = b.transformPoint({x:m, y:q, z:l,}), {x:m, y:q, z:l,};
}), g, a.D,), H = (a, b, g) => a.map(m => nb(m, b, g)), ob = (a, b = 0) => Sa(a, g => {
  const m = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Xa(m) ? m : 0 > m ? m - b : m + b,};
}), pb = (a, b, g) => a.map((m, q, {length:l}) => mb([m, b[l - q - 1], b[l - (q + 1) % l - 1], a[(q + 1) % l],], a.A, g,)), I = (a, b, g = 0, m,) => (a = a ? ob(a, m) : Ia, m = nb(a, p(0, 1).scale3d(0 < g ? g : 1)), a = nb(a, p(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...pb(a, m, b), m, a,]), qb = (a, b = a, g = (m, q) => (q *= Math.PI / b, {x:Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(m) * Math.sin(q),})) => {
  const m = [];
  for (let q = 0; a > q; q++) {
    for (let l = 0; b > l; l++) {
      const v = mb([], 0, 1);
      m.push(v);
      v.push(g(q, l, v));
      l && v.push(g((q + 1) % a, l, v));
      b - 1 > l && v.push(g((q + 1) % a, l + 1 % b, v));
      v.push(g(q, l + 1 % b, v));
    }
  }
  return m;
}, tb = (a, b) => {
  var g, m, q, l = b.C;
  for (var v = 0; l.length > v; ++v) {
    if (-0.00008 > (g = db(a, l[v]) - a.w) ? q = b : 8e-5 < g && (m = b), q && m) {
      m = [];
      q = [];
      l = b.C;
      v = b.B;
      let w = l.at(-1), z = db(a, w) - a.w;
      for (const G of l) {
        g = db(a, G) - a.w, 8e-5 > z && q.push(w), -0.00008 < z && m.push(w), (8e-5 < z && -0.00008 > g || -0.00008 > z && 8e-5 < g) && (z /= g - z, w = {x:w.x + (w.x - G.x) * z, y:w.y + (w.y - G.y) * z, z:w.z + (w.z - G.z) * z,}, m.push(w), q.push(w)), w = G, z = g;
      }
      return {o:2 < m.length && {C:mb(m, l.A, l.D), B:v, u:b,}, m:2 < q.length && {C:mb(q, l.A, l.D), B:v, u:b,},};
    }
  }
  return {o:m, m:q,};
}, ub = (a, b, g = eb(b.C)) => {
  let m, q, l;
  return a ? ({o:m, m:q} = tb(a, b), m || q || a.s.push(b), m && (a.o = ub(a.o, m, g)), q && (a.m = ub(a.m, q, g))) : ({x:m, y:q, z:g, w:l} = g, a = {x:m, y:q, z:g, w:l, s:[b,], o:0, m:0,}), a;
}, vb = (a, b, g) => {
  const m = [], q = (l, v) => {
    let {o:w, m:z} = tb(l, v);
    w || z || (0 < g * db(l, b) ? w = v : z = v);
    w && (l.o ? q(l.o, w) : m.push(w));
    z && l.m && q(l.m, z);
  };
  for (const l of b.s) {
    q(a, l);
  }
  return m;
}, yb = (a, b) => a && (b(a), yb(a.o, b), yb(a.m, b)), zb = a => a.length ? a.reduce((b, g) => ub(b, {C:g, B:0, u:0,}), 0) : a, Ab = a => (yb(a, b => {
  const g = b.m;
  b.m = b.o;
  b.o = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const m of b.s) {
    m.B = !m.B;
  }
}), a), Bb = (...a) => a.reduce((b, g) => {
  const m = [];
  if (b = zb(b), g) {
    g = zb(g);
    yb(b, q => q.s = vb(g, q, 1));
    yb(g, q => m.push([q, vb(b, q, -1),]));
    for (let [q, l] of m) {
      for (const v of l) {
        ub(b, v, q);
      }
    }
  }
  return b;
}), N = (...a) => {
  let b;
  const g = l => {
    let v;
    return l.u && ((v = m.get(l.u)) ? (q.delete(v), l = g(l.u)) : m.set(l.u, l)), l;
  }, m = new Map(), q = new Map();
  return [a, ...b] = [...a,], a = Ab(Bb(Ab(zb(a)), ...b)), yb(a, l => {
    for (const v of l.s) {
      q.set(g(v), v.B);
    }
  }), Array.from(q, ([{C:l}, v]) => {
    const w = l.map(({x:z, y:G, z:M}) => ({x:z, y:G, z:M,}));
    return mb(v ? w.reverse() : w, l.A, l.D);
  });
}, Cb = () => {
  Aa = $a(h[12].g, h[13].g);
  wa = n(n(wa, 0, 1 - Math.exp(-1 * d)), ab(wa + 60 * d), h[5].g - h[6].i,);
  sa = n(n(sa, 0, 1 - Math.exp(-5 * d)), ab(sa + 56 * d), Aa,);
  ta = n(n(ta, 0, 1 - Math.exp(-4 * d)), ab(ta + 48 * d), Aa,);
  var a = 0.2 + 0.3 * Xa(2 * h[9].i - 1);
  za = n(za, h[9].i, 1 - Math.exp(-a * d));
  ya = n(ya, xa ? n(ya, -9, 1 - Math.exp(-1.5 * d)) : Ya(c / 3), 1 - Math.exp(-1 * d));
  Ga && c > Ga && (Ga = 0, h4.innerHTML = "");
  h[0].j && 0.8 < h[0].g && (13 > oa ? (1 / 0 > Ga && (Ga = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0) : xa || (1 / 0 > Ga && (Ga = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), xa = 1));
  for (const b of e) {
    b.h(kb(ib, b.l));
  }
  for (const b of h) {
    b.h();
  }
  for (const b of Ha) {
    b.h();
  }
}, Db = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][oa = Ha.reduce((a, {j:b}) => a + b, 0)] + " / XIII";
}, Eb = () => {
  localStorage.I = JSON.stringify([h.map(({j:a}) => a), Ha.map(({j:a}) => a), ra, c, za,]);
}, Hb = () => {
  let a, b, g, m, q, l, v, w, z, G, M, U, C, f, k = !0;
  const u = [], y = () => {
    b4.innerHTML = "Music: " + k;
    ba || !k ? Fb.disconnect() : Fb.connect(Gb.destination);
  }, E = () => {
    const x = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ka = fb(0.3, 181, x, 1.732051);
    la = [fb(0.3, 55, x, 1.732051), fb(55, 181, x, 1.732051),];
    m = w = void 0;
    u.length = da = U = Ca = C = f = 0;
    document.hidden && J(!0);
  }, J = (x, r = 0) => {
    if (ba !== x) {
      ba = x;
      fa = r;
      E();
      Db();
      document.body.className = x ? "l m" : "l";
      try {
        x ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Fb.start());
      } catch {
      }
      y();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => J(!1);
  b2.onclick = () => J(!1, 1);
  b5.onclick = () => J(!0);
  b4.onclick = () => {
    k = !k;
    y();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.I = "", location.reload());
  };
  onclick = x => {
    if (!ba && (x.target === hC && (da = 1), fa)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = x => {
    let r;
    x.repeat || (r = !!x.type[5] && !0, x = {KeyA:1, ArrowLeft:1, KeyW:3, ArrowUp:3, KeyD:2, ArrowRight:2, KeyS:4, ArrowDown:4, KeyE:0, Space:0, Enter:0, Escape:5,}[x.code], (u[x] = r) && (0 === x && (da = 1), 5 === x && J(!0)));
  };
  onmousemove = ({movementX:x, movementY:r}) => {
    fa && (x || r) && (Qa += 0.1 * x, Pa += 0.1 * r);
  };
  hC.ontouchstart = x => {
    if (!ba) {
      for (let {pageX:r, pageY:A, identifier:F} of x.changedTouches) {
        fa && r > hC.clientWidth / 2 ? void 0 === w && (z = 0, l = r, v = A, w = F, G = Qa, M = Pa) : void 0 === m && (q = 0, b = r, g = A, m = F);
      }
      a = pa;
    }
  };
  hC.ontouchmove = x => {
    if (!ba) {
      for (let {pageX:X, pageY:D, identifier:B} of x.changedTouches) {
        var r, A, F, R, aa;
        w === B && (Qa = G + (X - l) / 2.3, Pa = M + (D - v) / 2.3, z = 1);
        m === B && (B = (b - X) / 20, r = (g - D) / 20, A = Xa(B), F = Xa(r), R = Math.atan2(r, B), aa = Ya(Math.hypot(r, B) - 0.5), C = 0.2 < A ? Math.cos(R) * aa : 0, f = 0.2 < F ? Math.sin(R) * aa : 0, (C || f) && (q = 1), 2 < A && (b = X + 20 * (0 > B ? -1 : 1)), 2 < F && (g = D + 20 * (0 > r ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = x => {
    let r;
    document.activeElement === document.body && x.preventDefault();
    for (const A of x.changedTouches) {
      A.identifier === w ? (w = void 0, z || (r = 1), z = 0) : A.identifier === m ? (m = void 0, f = C = 0, q || (r = 1), q = 0) : r = 1;
    }
    x.target === hC && r && a && 0.02 < (x = pa - a) && 0.7 > x && (u[0] = !0);
  };
  ia = () => {
    let x = f + (u[3] ? 1 : 0) - (u[4] ? 1 : 0), r = C + (u[1] ? 1 : 0) - (u[2] ? 1 : 0), A = navigator.getGamepads()[0];
    if (A) {
      const F = X => R[X]?.pressed || 0 < R[X]?.value ? 1 : 0, R = A.buttons, aa = A.axes;
      A = F(3) || F(2) || F(1) || F(0);
      x += F(12) - F(13) - Za(aa[1], 0.2);
      r += F(14) - F(15) - Za(aa[0], 0.2);
      F(9) && J(!0);
      fa && (Pa += d * Za(aa[3], 0.3) * 80, Qa += d * Za(aa[2], 0.3) * 80);
      A && !U && (da = 1);
      U = A;
    }
    Ba = Math.atan2(x, r);
    Ca = Za(Ya(Math.hypot(x, r)), 0.05);
  };
  document.onvisibilitychange = onblur = onresize = E;
  J(!0);
}, S = NO_INLINE((a, b, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), T = (a, b = 1) => {
  const g = ma;
  b = {l:new DOMMatrix(), H:e.length, G:b, s:[], h() {
  },};
  return e.push(b), a(ma = b), ma = g, b;
}, V = (a, b = new DOMMatrix(), g) => ma.s.push(...H(a, b, g)), Ib = a => {
  const b = new DOMMatrix(), g = new DOMMatrix(), m = ma, q = h.length, l = {j:0, g:0, i:0, u:m, J:b, l:g, h() {
    kb(kb(m.l, b).multiplySelf(a), g).rotateSelf(60 * l.g - 30, 0,).translateSelf(0, 1);
    l.g = n(l.g, l.j, 1 - Math.exp(-4 * d));
    l.i = n(l.i, l.j, 1 - Math.exp(-1 * d));
    da && 3 > cb(b.transformPoint()) && (0.3 > l.g || 0.7 < l.g) && (l.j = l.j ? 0 : 1, q && 1 / 0 > Ga && (Ga = c + 1, h4.innerHTML = "* click *"), ra = q, Eb());
  },};
  h.push(l);
  V(I(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
  V(I(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
  V(I(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), S(0.5, 0.5, 0.4));
}, Jb = (a, ...b) => {
  let g = -1, m = 0, q = 0, l = 0, v = 0, w = 0, z = 1, G = 3;
  const M = new DOMMatrix(), U = ma, C = Ha.length, f = b.map(([r, A, F]) => ({x:r, z:A, w:F,}));
  let k = f[0], {x:u, z:y} = k, E = u, J = y;
  const x = {j:0, l:M, h() {
    if (!x.j) {
      let aa, X, D, B, P, O, K, Q = 1, L = 1 / 0;
      for (const ea of f) {
        var {x:r, z:A, w:F} = ea;
        A = (r = Math.hypot(u - r, y - A)) - F;
        K ||= r < F;
        0 < A && L > A && (L = A, k = ea);
        Q = Ua(Q, r / F);
      }
      K || ({x:aa, z:X, w:D} = k, B = u - aa, P = y - X, O = Math.hypot(B, P), R = Math.atan2(-P, B), z && (q = (Math.random() - 0.5) * Math.PI / 2, G = Ya(G / (1 + Math.random()))), R += q, g = -Math.cos(R), m = Math.sin(R), 0.1 < O && (O = Ua(O, D) / (O || 1), u = B * O + aa, y = P * O + X));
      z = K;
      G = n(G, 6 * (1 - Q) + 3, 1 - Math.exp(-(Q + 3) * d));
      R = u = n(u, u + g, 1 - Math.exp(-G * d));
      E = n(E, R, 1 - Math.exp(-G * d));
      R = y = n(y, y + m, 1 - Math.exp(-G * d));
      J = n(J, R, 1 - Math.exp(-G * d));
      l = bb(l, Math.atan2(E - v, J - w) / Ta - 180, 1 - Math.exp(-3 * d),);
      v = E;
      w = J;
      var R = kb(U.l, M).multiplySelf(a).translateSelf(E, 0, J).rotateSelf(0, l, 7 * Math.sin(1.7 * c)).transformPoint();
      1.6 > cb(R) && (x.j = 1, R = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][oa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      1 / 0 > Ga && (Ga = c + (oa && 12 > oa ? 5 : 7), h4.innerHTML = R), Db(), Eb());
    }
    x.j && kb(e[2].l, M).translateSelf(C % 4 * 1.2 - 1.7 + Math.sin(c + C) / 7, -2, 1.7 * (C / 4 | 0) - 5.5 + Xa(C % 4 - 2) + Math.cos(c / 1.5 + C) / 6,);
  },};
  Ha.push(x);
}, Kb = () => {
  let a, b, g, m, q, l, v, w, z, G, M, U, C, f, k, u, y, E = 1, J = 2, x = 2;
  const r = () => {
    let D = 0, B = 0, P = 0, O = 0;
    m = 0;
    aa.fill(0);
    for (let Q = 0; 31 > Q; ++Q) {
      let L = 0;
      const ea = 512 * Q;
      for (let Y = 0; 128 > Y; Y++) {
        var K = ea + 4 * Y;
        let ja = (X[K] + X[1 + K]) / 255;
        K = X[2 + K];
        14 < Y && 114 > Y && (L += ja);
        K && ja && (ja = aa[K] + 1, aa[K] = ja, D > ja || (D = ja, B = K));
      }
      3 > L && 5 < Q && (P += Q / 32);
      3 < L && (7 < Q && (O += Q / 15), m = 1);
    }
    B && (m = 1);
    a = B || b;
    b = B;
    x = n(x, m ? 6.5 : -20 > Ra.y ? 11 : 8, 1 - Math.exp(-4 * d));
    Ra.y += O / 41 - (m || x) * P / 41 * x * d;
  }, A = () => {
    G = z = 0;
    for (let D = 32; 128 > D; D += 2) {
      let B = 0, P = 0, O = 0, K = 0;
      const Q = 512 * D;
      for (let L = 1 & D; 128 > L; L += 2) {
        const ea = Q + 4 * L;
        let Y = Q + 4 * (127 - L);
        const ja = X[ea] / 255, Va = X[1 + Y] / 255, qa = 1 - Xa(L / 63.5 - 1);
        10 < L && 118 > L && (B = Wa(Wa(ja * qa, ja * X[Y] / 255), B), P = Wa(Wa(Va * qa, Va * X[1 + ea] / 255), P));
        (54 > L || 74 < L) && 1e-3 < (Y = (1 - qa) * Wa(ja, Va) / 3) && (64 > L && Y > O ? O = Y : 64 < L && Y > K && (K = Y));
      }
      Xa(K - O) > Xa(z) && (z = K - O);
      Xa(P - B) > Xa(G) && (G = P - B);
    }
  }, F = () => (J ? h[ra].u : e[g && 1 === e[g].G && g || 0]).l, R = (D, B, P, O) => n(D, B, E || (Ya(Xa(B - D) ** 0.9 - P) + 1 / 7) * (1 - Math.exp(-(1.5 * O) * d))), aa = new Int32Array(256), X = new Uint8Array(65536);
  na = () => {
    W.fa7();
    W.r9r(0, 0, 128, 128, 6408, 5121, X);
    W.iay(36008, [36064, 36096,]);
    W.iay(36009, [36064, 36096,]);
    NO_INLINE(A)();
    NO_INLINE(r)();
    var D = Ya(1 - 5 * Wa(Xa(z), Xa(G))), B = fa ? Qa * Ta : Math.PI;
    D = (C = n(C, m * D * Ya(2 * Ca) * 7, 1 - Math.exp(-(m ? 0.1 < D ? 10 : 5 + 2 * Ca : 1) * d)), M = n(M, 0, 1 - Math.exp(-(m ? 8 : 4) * d)), z += d * ((a ? 0 : D * M) - Math.cos(Ba + B) * Ca * C), U = n(U, 0, 1 - Math.exp(-(m ? 8 : 4) * d)), G += d * ((a ? 0 : D * U) - Math.sin(Ba + B) * Ca * C), F());
    var {x:P, y:B, z:O} = 1 < J ? h[ra].J.transformPoint({x:0, y:ra || 0.9 < ya ? 15 : 1, z:-2.4,}) : (B = D, kb(B).invertSelf(), jb.m41 = jb.m42 = jb.m43 = 0, P = jb.transformPoint({x:z, z:G, w:0,}), Ra.x += P.x, Ra.z += P.z, B.transformPoint(Ra));
    if (a && (M = (P - Oa.x) / d, U = (O - Oa.z) / d), Oa.x = P, Oa.y = B, Oa.z = O, (J = J && (m && a ? 0 : 1)) || a !== g) {
      g = a;
      const K = (D = F()).inverse().transformPoint(Oa);
      Ra.x = K.x;
      Ra.y = K.y;
      Ra.z = K.z;
    }
    w = n(w, Aa * (27 < a && 32 > a), 1 - Math.exp(-2 * d));
    B < (-25 > P || 109 > O ? -25 : -9) && (M = U = C = 0, J = 2);
    1 === a && (h[9].j = -15 > P && 0 > O ? 1 : 0);
    f = n(n(f, B, 1 - Math.exp(-2 * d)), B, J || 8 * Xa(f - B),);
    u = R(u, f, 2, 1);
    k = R(k, P, 0.5, 1);
    y = R(y, O, 0.5, 1);
    fa ? (D = J + (1 - Math.exp(-18 * d)), Da = n(Da, P, D), Ea = n(Ea, f + 1.5, D), Fa = n(Fa, O, D), Qa = ab(Qa)) : (Ea = R(Ea, Wa(u + Ya((-60 - O) / 8, 0, 20) + 13 + 9 * w, 6), 4, 2,), Fa = R(Fa, y + -18 + 5 * w, 1, 2 + w,), Da = R(Da, k, 1, 2 + w,), B = Ua(4, -Xa(y - Fa)), D = k - Da, Qa = bb(Qa, 90 - ab(Math.atan2(B, D) / Ta), E + (1 - Math.exp(-6 * d)),), Pa = bb(Pa, 90 - Math.atan2(Math.hypot(B, D), Ea - u) / Ta, E + (1 - Math.exp(-6 * d)),));
    Pa = Ya(Pa, -87, 87);
    l = bb(l, q, 1 - Math.exp(-8 * d));
    v = n(v, Ca, 1 - Math.exp(-10 * d));
    Ca && (q = 90 - Ba / Ta);
    E = 0;
    e[37].l.translateSelf(P, f + 0.124, O).rotateSelf(0, l);
    for (D = 0; 2 > D; ++D) {
      e[38 + D].l.multiplySelf(e[37].l).translateSelf(0, v * Ya(0.45 * Math.sin(9.1 * c + Math.PI * (D - 1) - Math.PI / 2)),).rotateSelf(v * Math.sin(9.1 * c + Math.PI * (D - 1)) * 0.25 / Ta, 0);
    }
  };
}, Lb = (a, b = 35633) => (b = W.c6x(b), W.s3c(b, a), W.c6a(b), b), Mb = (a, b) => {
  const g = {}, m = W.c1h();
  return W.abz(m, a), W.abz(m, Lb(b, 35632)), W.l8l(m), q => q ? g[q] || (g[q] = W.gan(m, q)) : W.u7y(m);
}, Tb = (a, b, g) => {
  if (ba) {
    b = lb(0, 40 * Math.sin(pa) - 70);
    for (const m of [37, 38, 39,]) {
      hb(b, Rb, m - 1);
    }
    W.uae(a, !1, Rb);
    W.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
  } else {
    W.uae(a, !1, Rb), W.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6), W.uae(a, !1, Sb), W.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,), W.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Ub = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Vb = a => Math.sin(a * Math.PI * 2), Wb = a => 0.5 > a % 1 ? 1 : -1, Xb = a => a % 1 * 2 - 1, Yb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, ec = a => {
  let b = 0;
  const g = () => {
    let v = 0;
    const w = K => {
      let Q, L, ea, Y = 0, ja = 0;
      const Va = [], qa = new Int32Array(768 * K), Zb = 2 ** (r - 9) / K, $b = Math.PI * 2 ** (X - 8) / K, wb = B * K & -2;
      for (let rb = 0; 11 >= rb; ++rb) {
        for (let sb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + rb]; 32 > sb; ++sb) {
          const Ob = (32 * rb + sb) * K;
          for (var La = 0; 4 > La; ++La) {
            if (Q = 0, Nb && (Q = z[Nb - 1].charCodeAt(sb + 32 * La) - 40, Q += 0 < Q ? 106 : 0), Q) {
              var ha;
              if (!(ha = Va[Q])) {
                ha = Q;
                let Z = void 0, ua = void 0;
                var Pb = Q;
                let ac = 0, bc = 0;
                const cc = 2 > b ? Xb : Vb, dc = 2 > b ? 1 > b ? Wb : Yb : Vb, Qb = new Int32Array(y + E + O);
                for (let Ma = 0, xb = 0; y + E + O > Ma; ++Ma, ++xb) {
                  let Na = 1;
                  y > Ma ? Na = Ma / y : y + E > Ma || (Na = (1 - (Na = (Ma - y - E) / O)) * 3 ** (-x / 16 * Na));
                  0 > xb || (xb -= 4 * K, ua = 396e-5 * 2 ** ((Pb + M - 256) / 12), Z = 396e-5 * 2 ** ((Pb + f - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                  Qb[Ma] = 80 * (cc(ac += ua * Na ** (U / 32)) * G + dc(bc += Z * Na ** (k / 32)) * C + (u ? (2 * Math.random() - 1) * u : 0)) * Na | 0;
                }
                ha = Va[ha] = Qb;
              }
              for (let Z = 0, ua = 2 * Ob; ha.length > Z; ++Z, ua += 2) {
                qa[ua] += ha[Z];
              }
            }
          }
          for (let Z, ua = 0; K > ua; ++ua) {
            La = 0;
            ha = 2 * (Ob + ua);
            var va = (((Z = qa[ha]) || ea) && (L = 308e-5 * A, 1 !== b && 4 !== b || (L *= Math.sin(Zb * ha * Math.PI * 2) * P / 512 + 0.5), L = 1.5 * Math.sin(L), Y += L * ja, va = (1 - F / 255) * (Z - ja) - Y, ja += L * va, Z = 4 === b ? ja : 3 === b ? va : Y, b || (Z = 1 > (Z *= 22e-5) ? -1 < Z ? Math.sin(Z / 4 * Math.PI * 2) : -1 : 1, Z /= 22e-5), Z *= R / 32, ea = 1e-5 < Z * Z, va = Math.sin($b * ha) * aa / 512 + 0.5, La = Z * (1 - va), Z *= va), ha < wb || (La += qa[1 + ha - wb] * D / 255, 
            Z += qa[ha - wb] * D / 255), v + ha >> 1);
            q[va] += (qa[ha] = La) / 65536;
            l[va] += (qa[++ha] = Z) / 65536;
          }
        }
      }
      v += 768 * K;
    }, z = Ja[b], [G, M, U, C, f, k, u, y, E, J, x, r, A, F, R, aa, X, D, B, P] = Ka[b], O = 4 * J ** 2;
    w(5513);
    w(4562);
    w(3891);
    Ub(5 > ++b ? g : a);
  }, m = Gb.createBuffer(2, 5362944, 44100), q = m.getChannelData(0), l = m.getChannelData(1);
  Fb.buffer = m;
  Fb.loop = !0;
  Ub(g);
}, Gb = new AudioContext(), ib = new DOMMatrix(), jb = new DOMMatrix(), gb = new Float32Array(16), Rb = new Float32Array(624), Sb = new Float32Array(624), fc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Fb = Gb.createBufferSource(), W = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in W) {
  W[a[0] + [...a,].reduce((b, g, m) => (b * m + g.charCodeAt(0)) % 434, 0).toString(36)] = W[a];
}
Ub(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = {}, l = (r, A, F) => {
        let R = 0, aa = 0, X = 0, D = 1 / 0, B = -1 / 0, P = 1 / 0, O = -1 / 0, K = 1 / 0, Q = -1 / 0;
        W.fas(36160, 36096, 3553, x[r], 0);
        kb().scale3dSelf(A).multiplySelf(kb(la[r], z).multiplySelf(w).invertSelf(),);
        for (let L = 0; 8 > L; ++L) {
          q.x = 4 & L ? 1 : -1;
          q.y = 2 & L ? 1 : -1;
          q.z = 1 & L ? 1 : -1;
          const ea = jb.transformPoint(q), Y = A * ea.w;
          R -= u[L].x = (0 | ea.x) / Y;
          aa -= u[L].y = (0 | ea.y) / Y;
          X -= u[L].z = (0 | ea.z) / Y;
        }
        kb().rotateSelf(298, 139).translateSelf(R / 8, aa / 8, X / 8);
        for (A = 0; 8 > A; ++A) {
          const {x:L, y:ea, z:Y} = jb.transformPoint(u[A]);
          D = Ua(D, L);
          B = Wa(B, L);
          P = Ua(P, ea);
          O = Wa(O, ea);
          K = Ua(K, Y);
          Q = Wa(Q, Y);
        }
        K *= 0 > K ? F : 1 / F;
        Q *= 0 < Q ? F : 1 / F;
        W.uae(M("b"), !1, hb(kb(ib, z).scaleSelf(2 / (B - D), 2 / (O - P), 2 / (K - Q)).translateSelf((B + D) / -2, (O + P) / -2, (K + Q) / 2).multiplySelf(jb), k[r],),);
        W.c4s(256);
        Tb(M("c"), !fa, 42);
      }, v = r => {
        if (W.f1s(), requestAnimationFrame(v), A = (r - (ca || r)) / 1e3, pa += A, c += d = ba ? 0 : Ua(0.066, A), ca = r, 0 < d) {
          ia();
          Cb();
          na();
          for (r = 0; e.length > r; ++r) {
            e[r].G && hb(e[r].l, Rb, r - 1);
          }
          for (r = 0; 13 > r; ++r) {
            hb(Ha[r].l, Sb, r);
          }
          for (r = 0; h.length > r; ++r) {
            hb(h[r].l, Sb, r + 13), Sb[16 * (r + 13) + 15] = 1 - h[r].g;
          }
          C();
          W.b6o(36160, J);
          W.v5y(0, 0, 128, 128);
          W.c4s(16640);
          W.cbf(!0, !1, !0, !1);
          var {x:A, y:r, z:F} = Oa;
          W.uae(C("b"), !1, hb(kb().rotateSelf(0, 180).invertSelf().translateSelf(-A, -r, 0.3 - F)),);
          Tb(C("c"), 0, 41);
          W.c4s(256);
          W.cbf(!1, !0, !0, !1);
          W.uae(C("b"), !1, hb(kb().translateSelf(-A, -r, -F - 0.3)));
          Tb(C("c"), 0, 41);
          W.f1s();
        }
        da = 0;
        kb(ib, w);
        ba ? w.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : w.rotateSelf(-Pa, -Qa).invertSelf().translateSelf(-Da, -Ea, -Fa,);
        M();
        W.b6o(36160, y);
        W.v5y(0, 0, 2048, 2048);
        l(0, 1.1 * 54.7, 10);
        l(1, 1.1 * 126, 11);
        f();
        W.b6o(36160, null);
        W.v5y(0, 0, W.drawingBufferWidth, W.drawingBufferHeight);
        W.cbf(!0, !0, !0, !0);
        W.c4s(16640);
        W.uae(f("a"), !1, hb(ka));
        W.uae(f("b"), !1, hb(w));
        W.uae(f("i"), !1, k[0]);
        W.uae(f("j"), !1, k[1]);
        W.ubu(f("k"), Da, Ea, Fa);
        Tb(f("c"), !fa, 42);
        U();
        W.ubu(U("j"), W.drawingBufferWidth, W.drawingBufferHeight, pa);
        W.ubu(U("k"), Da, Ea, Fa);
        W.uae(U("b"), !1, hb(kb(w).invertSelf()));
        W.d97(4, 3, 5123, 0);
        W.b6o(36160, J);
        W.f1s();
      }, w = new DOMMatrix(), z = new DOMMatrix(), G = g;
      var m = Lb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const M = Mb(Lb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), U = Mb(Lb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), C = Mb(m, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), f = Mb(m, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), k = Sa(2, () => new Float32Array(16)), u = Sa(8, () => ({})), y = W.c5w();
      m = W.c25();
      const E = W.c3z(), J = W.c5w(), x = Sa(2, r => {
        const A = W.c25();
        return W.a4v(33984 + r), W.b9j(3553, A), W.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), W.t2z(3553, 10241, 9729), W.t2z(3553, 10240, 9729), W.t2z(3553, 34893, 515), W.t2z(3553, 34892, 34894), W.t2z(3553, 10243, 33071), W.t2z(3553, 10242, 33071), A;
      });
      C();
      W.uae(C("a"), !1, hb(fb(1e-4, 1, 1.4, 0.59)));
      f();
      W.ubh(f("q"), 2);
      W.ubh(f("h"), 1);
      W.ubh(f("g"), 0);
      U();
      W.ubh(U("q"), 2);
      W.b6o(36160, y);
      W.d45([0,]);
      W.r9l(0);
      W.b6o(36160, J);
      W.bb1(36161, E);
      W.r4v(36161, 33189, 128, 128);
      W.f8w(36160, 36096, 36161, E);
      W.a4v(33986);
      W.b9j(3553, m);
      W.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      W.fas(36160, 36064, 3553, m, 0);
      W.b9j(3553, W.c25());
      W.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, G);
      W.t2z(3553, 10241, 9987);
      W.t2z(3553, 10240, 9729);
      W.gbn(3553);
      W.e8z(2929);
      W.e8z(2884);
      W.c70(1);
      W.c7a(1029);
      W.d4n(515);
      W.c5t(0, 0, 0, 1);
      Cb();
      NO_INLINE(Hb)();
      NO_INLINE(Kb)();
      requestAnimationFrame(v);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = fc;
  NO_INLINE(ec)(() => {
    Ub(() => {
      let l, v = 0;
      const w = [], z = [], G = [], M = [], U = y => {
        let {x:E, y:J, z:x} = l[y], r = (u[0] = E, u[1] = J, u[2] = x, y = "" + (l.D ? k : C), f.get(y));
        return void 0 !== r ? (E = 3 * r, M[E] = (M[E++] + C[5]) / 2, M[E] = (M[E++] + C[6]) / 2, M[E] = (M[E] + C[7]) / 2) : (f.set(y, r = f.size), z.push(E, J, x, u[3]), G.push(C[4]), M.push(C[5], C[6], C[7])), r;
      }, C = new Int32Array(8), f = new Map(), k = new Int32Array(C.buffer, 0, 5), u = new Float32Array(C.buffer);
      for (const y of e) {
        for (l of (u[3] = 40 === y.H ? -14 : y.G && y.H, y.s)) {
          const {x:E, y:J, z:x} = eb(l);
          C[4] = 0 | l.A;
          C[5] = 32767 * E;
          C[6] = 32767 * J;
          C[7] = 32767 * x;
          for (let r = 2, A = U(0), F = U(1); l.length > r; ++r) {
            w.push(A, F, F = U(r));
          }
        }
        y.s = null;
        y.v = v;
        y.F = v = w.length;
      }
      W.b11(34962, W.c1b());
      W.b2v(34962, new Float32Array(z), 35044);
      W.v7s(0, 4, 5126, !1, 0, 0);
      W.b11(34962, W.c1b());
      W.b2v(34962, new Int16Array(M), 35044);
      W.v7s(1, 3, 5122, !0, 0, 0);
      W.b11(34962, W.c1b());
      W.b2v(34962, new Uint32Array(G), 35044);
      W.v7s(2, 4, 5121, !0, 0, 0);
      W.b11(34963, W.c1b());
      W.b2v(34963, new Uint16Array(w), 35044);
      W.e3x(0);
      W.e3x(1);
      W.e3x(2);
      Ub(b);
      try {
        const [y, E, J, x, r] = JSON.parse(localStorage.I,);
        h.map((A, F) => A.g = A.i = A.j = F ? 0 | y[F] : 0);
        Ha.map((A, F) => A.j = 0 | E[F]);
        ra = J;
        c = x;
        za = r;
      } catch {
      }
      ya = Ya(ra);
    });
    const m = Sa(11, l => p(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10),), q = Sa(10, l => pb(nb(ob(18), m[l]).reverse(), nb(ob(18), m[l + 1]), 1,)).flat();
    T(() => V([Ia.slice(1),], p(-2).scale3d(3).rotate(90, 0)), 0);
    T(() => {
      const l = (f, k, u) => T(y => {
        y.h = E => E.translateSelf(z() * Math.sin(3 * f + c * f) * k);
        Ia.map(({x:E, z:J}) => {
          V(I(11, 1), p(4 * E, 4, u + 4 * J).scale(0.8, 3, 0.8), S(0.5, 0.3, 0.7, 0.6),);
          V(I(), p(4 * E, 7, u + 4 * J).scale(1, 0.3), S(0.5, 0.5, 0.5, 0.3),);
        });
        V(N(H(I(), p(0, 0, u).scale(5, 1, 5), S(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(E => H(I(), p(5 * E, 0.2, u).rotate(-30 * E).scale(4, 1, 2), S(0.8, 0.8, 0.8, 0.3),)),),);
        V(I(), p(0, -3, u).scale(8, 2, 8), S(0.4, 0.4, 0.4, 0.3));
      }), v = (f, k, u, y) => f.translateSelf(k + Math.sin(c + 2) / 5, u + Math.sin(0.8 * c) / 3, y).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),), w = f => N(H(I(), p(0, -f / 2).scale(6, f - 1, 2.2)), H(I(), p(0, -f / 2 - 6).scale(4, f - 3, 4)), H(I(32, 1), p(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), z = () => Ua(h[2].i, 1 - h[4].i), G = N(H(I(30, 1, 1.15, 1), p(0, -3).scale(3.5, 1, 3.5), S(0.7, 0.4, 0.25, 0.7),), H(I(30, 1, 1.3, 1), p(0, -2.5).scale(2.6, 1, 3), S(0.7, 
      0.4, 0.25, 0.2),), H(I(), p(4, -1.2).scale3d(2), S(0.7, 0.4, 0.25, 0.3)),), M = Sa(7, f => H(I(6, 1), p(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), S(0.3, 0.3, 0.38),)).flat(), U = (T(f => {
        f.h = k => v(k, -12, 4.2, 40 * ya - 66);
        V(G);
        Ib(p(0, -3, 4));
      }), Ib(p(-5.4, 1.5, -19).rotate(0, -90)), Jb(p(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Jb(p(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...ob(18).map(({x:f, z:k}) => [7 * f, 10 * k, 4.5 - 2 * Xa(f),]),), V(I(), p(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), S(0.8, 0.8, 0.8, 0.2)), Ia.map(({x:f, z:k}) => V(I(6), p(3 * f, 3, 15 * k).scale(0.7, 4, 0.7), S(0.6, 0.3, 0.3, 0.4))), V(I(), p(0, 0, -23).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2)), V(I(), p(0, 0, 22).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2)), 
      [-15, 15,].map((f, k) => {
        V(I(), p(0, 6.3, f).scale(4, 0.3, 1), S(0.3, 0.3, 0.3, 0.4));
        V(I(), p(0, 1, f).scale(3, 0.2, 0.35), S(0.5, 0.5, 0.5, 0.3));
        T(u => {
          u.h = y => y.translateSelf(0, 0, f).scaleSelf(1, Ya(1.22 - h[k + 1].g), 1);
          V(M);
        });
      }), Sa(5, f => Sa(2, k => V(q, p(18.5 * (k - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * k).scale(1.2, 10, 1.2), S(1, 1, 0.8, 0.2),)),), V(I(), p(3, 1.5, -20).scale(0.5, 2, 5), S(0.7, 0.7, 0.7, 0.2)), V(I(), p(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(0.75, 0.75, 0.75, 0.2),), V(I(5), p(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(0.6, 0.3, 0.3, 0.4),), V(I(), lb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), S(0.8, 0.2, 0.2, 0.5),), V(N(Bb(H(I(6, 0, 0, 0.3), 
      p(8, -3, -4).scale(13, 1, 13), S(0.7, 0.7, 0.7, 0.2),), H(I(6), p(0, -8).scale(9, 8, 8), S(0.4, 0.2, 0.5, 0.5)), H(I(6, 0, 0, 0.3), p(0, -0.92).scale(13, 2, 13), S(0.8, 0.8, 0.8, 0.2),),), H(I(5), t(5, 30, 5), S(0.4, 0.2, 0.6, 0.5)), H(I(5, 0, 1.5), p(0, 1).scale(4.5, 0.3, 4.5), S(0.7, 0.5, 0.9, 0.2),), H(I(), lb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), S(0.5, 0.5, 0.5, 0.5),), H(I(6), p(15, -1.5, 4).scale(3.5, 1, 3.5), S(0.5, 0.5, 0.5, 0.5),),),), T(f => {
        f.h = k => k.translateSelf(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        V(I(5), p(0, -0.2).scale(5, 1, 5), S(0.6, 0.65, 0.7, 0.3));
        Ib(p(0, 1.2));
      }), Ib(p(15, -2, 4)), l(0.7, 12, 35), l(1, 8.2, 55), T(f => {
        f.h = k => k.translateSelf(z() * Math.sin(c / 1.5 + 2) * 12);
        V(N(Bb(H(I(), t(1.5, 1, 5), S(0.9, 0.9, 0.9, 0.2)), H(I(6), t(4, 1, 5), S(0.9, 0.9, 0.9, 0.2)), H(I(), p(0, -2).scale(2, 3.2, 1.9), S(0.3, 0.8, 0.5, 0.5),), H(I(16, 1, 0, 4), t(1, 1, 1.5).rotate(0, 90), S(0.9, 0.9, 0.9, 0.2),),), H(I(), t(1.3, 10, 1.3), S(0.2, 0.7, 0.4, 0.6)),), p(0, 0, 45),);
        Jb(p(0, 2.8, 45), [0, 0, 4.5,]);
      }), V(I(), p(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)), T(f => {
        f.h = k => k.translateSelf(9.8 * (1 - z()));
        V(I(3), p(-23, -1.7, 55.8).scale(5, 0.7, 8.3), S(0.3, 0.6, 0.6, 0.2));
        V(I(8), p(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(0.8, 0.8, 0.8, 0.2));
        V(I(), p(-23, -3, 55).scale(5.2, 1.7, 3), S(0.5, 0.5, 0.5, 0.3));
        V(I(), p(-23, -2.2, 62).scale(3, 1, 4), S(0.5, 0.5, 0.5, 0.3));
        Ib(p(-23, -0.5, 66.5));
      }), T(f => {
        f.h = k => k.translateSelf(0, Ya(1 - 5 * z()) * $a(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
        V(I(), p(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(0.7, 0.7, 0.7, 0.2));
        V(N(H(I(), t(3, 1.4, 2.7)), H(I(), t(1.2, 8, 1.2)),), p(-33, -3, 55), S(0.7, 0.7, 0.7, 0.2),);
      }), T(f => {
        f.h = k => k.translateSelf(0, 0, Ya(1 - 5 * z()) * $a(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
        V(N(H(I(), p(-27, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2),), H(I(), p(-27, -3, 55).scale(1, 3), S(0.9, 0.9, 0.9, 0.2),),),);
        V(I(), p(-39, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2));
      }), T(f => {
        f.h = k => k.translateSelf(0, -6.5 * h[4].i);
        V(I(6), p(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), S(0.7, 0.7, 0.7, 0.4),);
      }), Ib(p(-55, -1.1, 46).rotate(0, 90)), V(I(6), p(-61.3, -2.4, 49).scale(3, 1, 5), S(0.4, 0.6, 0.6, 0.3)), V(I(7), p(-57, -2.6, 46).scale(4, 1, 4), S(0.8, 0.8, 0.8, 0.3)), [...H(I(), p(0, -3).scale(11, 1.4, 3), S(0.9, 0.9, 0.9, 0.2)), ...N(H(I(6), lb(90).scale(6, 8, 6), S(0.3, 0.6, 0.6, 0.3)), H(I(4, 0, 0.01), p(0, 6).scale(12, 2, 0.75).rotate(0, 45), S(0.3, 0.6, 0.6, 0.3),), H(I(6), lb(90).scale(5, 12, 5), S(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => H(I(5), p(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), S(0.3, 0.6, 0.6, 0.3),)),),]), C = (V(U, p(-53, 0, 55)), T(f => {
        f.h = k => k.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + wa, 0,);
        V(U);
      }, 2), V(I(), p(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(0.7, 0.7, 0.7, 0.2),), V(I(3, 0, -0.5), p(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(0.8, 0.8, 0.8, 0.2),), V(N(Bb(H(I(), p(-100, -2.5, 55).scale(8, 1, 8), S(0.8, 0.8, 0.8, 0.2),), H(I(), p(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(0.8, 0.8, 0.8, 0.2),), H(I(), p(-100, -2.6, 70).scale(3, 1.1, 7), S(0.8, 0.8, 0.8, 0.2),), H(I(), p(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(0.8, 0.8, 0.8, 0.2),), H(I(6), 
      p(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(0.6, 0.6, 0.6, 0.3),), H(I(), p(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(0.8, 0.8, 0.8, 0.2),), H(I(), p(-100, 0.42, 92).scale(3, 1.1, 4.1), S(0.8, 0.8, 0.8, 0.2),),), H(I(8), p(-100, -1, 55).scale(7, 0.9, 7), S(0.3, 0.3, 0.3, 0.4),), H(I(8), p(-100, -2, 55).scale(4, 0.3, 4), S(0.4, 0.4, 0.4, 0.5),), H(I(8), p(-100, -3, 55).scale(0.6, 1, 0.6), S(0.4, 0.4, 0.4, 0.5),),),), Jb(p(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), Jb(p(-89, 0.2, 80), [0, 0, 6,]), V(N(H(I(), p(-100, 1, 63).scale(7.5, 4), S(0.5, 0.5, 0.5, 0.4)), H(I(), p(-100, 0, 70).scale(2, 2, 10), S(0.5, 0.5, 0.5, 0.4),), H(I(20, 1), p(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(0.5, 0.5, 0.5, 0.4),),),), T(f => {
        f.h = k => k.translateSelf(-99.7, -1.9, 63.5).scale(1, Ya(1.1 - h[6].g), 1);
        V(M);
      }), Ia.map(({x:f, z:k}) => {
        V(I(6), p(7 * f - 100, -3, 7 * k + 55).scale(1, 8.1), S(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(u => V(I(6), p(7 * f - 100, u, 7 * k + 55).scale(1.3, 0.5, 1.3), S(0.4, 0.2, 0.2, 0.8),));
      }), Sa(7, f => {
        V(I((23 * f + 1) % 5 + 5, 0, 0.55), p(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), S(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), V(I(), p(-87, -9.5, 24).scale(7, 1, 3), S(0.4, 0.5, 0.6, 0.4)), V(I(4), p(-86, -9.2, 27).scale(5, 1, 5), S(0.5, 0.6, 0.7, 0.3)), V(I(12, 1), p(-86, -9, 31).scale(1.5, 1, 1.5), S(0.3, 0.3, 0.4, 0.1)), Ib(p(-86, -7.5, 31)), T(f => {
        f.h = k => k.translateSelf(0, 3.5 * (1 - Wa(h[6].g, h[7].g)) + $a(h[7].i, h[6].i) * Math.sin(c) * 5,);
        [0, 12, 24,].map(k => V(I(), p(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.2, 0.5, 0.6, 0.2),));
      }), T(f => {
        f.h = k => k.translateSelf(0, $a(h[7].i, h[6].i) * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * $a(h[7].i, h[6].i),);
        [6, 18,].map(k => V(I(), p(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.1, 0.4, 0.5, 0.2),));
      }), V(N(Bb(H(I(5), p(0, 0, -7).scale(2, 1.2, 2), S(0.2, 0.4, 0.7, 0.3),), H(I(5), t(9, 1.2, 9), S(0, 0.2, 0.3, 0.5)), H(I(), t(11, 1, 13), S(0.3, 0.4, 0.6, 0.3)),), H(I(5), t(5.4, 5, 5.4), S(0, 0.2, 0.3, 0.5)),), p(-38.9, -11.3, 17),), Ib(p(-38.9, -9.6, 10)), T(f => {
        f.h = k => k.translateSelf(0, -7.3 * h[7].i);
        V(N(Bb(H(I(5), p(0, 2).scale(5, 7, 5).skewY(8), S(0.2, 0.4, 0.5, 0.5),), H(I(5), p(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(0.25, 0.35, 0.5, 0.5),), H(I(5), p(0, 9).scale(0.6, 7, 0.6).skewY(8), S(0.35, 0.3, 0.5, 0.5),),), H(I(5), t(4, 8, 4), S(0.2, 0.4, 0.5, 0.5)), H(I(5), p(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(0.2, 0.4, 0.5, 0.5),),), p(-38.9, -11.3, 17),);
        Jb(p(-39.1, -0.6, 17).rotate(11), ...ob(15).map(({x:k, z:u}) => [3 * k, 3 * u, 1.2,]),);
      }), Ia.map(({x:f, z:k}) => {
        V(I(14, 1), p(9 * f - 38.9, -7.3, 11 * k + 17).scale(1, 4), S(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(u => V(I(17, 1), p(9 * f - 38.9, u - 11.3, 11 * k + 17).scale(1.5, 0.5, 1.5), S(0.6, 0.6, 0.6, 0.3),));
      }), V(N(Bb(H(I(6), p(0, 0, -36).scale(15, 1.2, 15), S(0.7, 0.7, 0.7, 0.3),), H(I(), p(0, 0, -18).scale(4, 1.2, 6), S(0.45, 0.4, 0.6, 0.3),),), ...Sa(6, f => Sa(6, k => H(I(6), p(4.6 * k - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * k)).scale(2, 5, 2), S(0.7, 0.7, 0.7, 0.3),))).flat(),), p(-38.9, -11.3, 17),), Jb(p(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), V(I(5), p(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), S(0.8, 0.1, 0.25, 0.4),), Ib(p(-84, -0.5, 85).rotate(0, 
      45)), T(f => {
        f.h = k => v(k, -123, 1.4, 55 + -65 * za);
        V(G);
        Ib(p(0, -3, -4).rotate(0, 180));
      }), N(H(I(), p(0, -0.5, 1).scale(1.15, 1.2, 6.5), S(0.25, 0.25, 0.35, 0.3),), H(I(3), p(0, 0, -5.5).scale(3, 2), S(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => H(I(), p(f, -0.5, 1).scale(0.14, 0.3, 6.5), S(0.7, 0.2, 0, 0.3),)),));
      T(f => {
        f.h = k => k.translateSelf(0, -2, $a(h[10].g, h[11].g) * Xa(Math.sin(1.1 * c)) * -8.5 + 10);
        Sa(2, k => V(C, p(9 * k - 110 + (1 & k), 1.7, -12)));
      });
      T(f => {
        f.h = k => k.translateSelf(0, -2, $a(h[10].g, h[11].g) * Xa(Math.sin(2.1 * c)) * -8.5 + 10);
        Sa(2, k => V(C, p(9 * (k + 2) - 110 + (1 & k), 1.7, -12)));
      });
      T(f => {
        f.h = k => k.translateSelf(0, -2, -8.5 * Wa((1 - h[10].g) * (1 - $a(h[10].g, h[11].g)), $a(h[10].g, h[11].g) * Xa(Math.sin(1.5 * c)),) + 10,);
        Sa(3, k => V(C, p(9 * k - 106, 1.7, -12)));
      });
      V(N(Bb(H(I(), p(26.5, -1.6, 10).scale(20, 2.08, 3)), H(I(), p(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...Sa(4, f => H(I(), p(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...Sa(3, f => H(I(), p(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), p(-123, 0, -12), S(0.5, 0.5, 0.6, 0.2),);
      Ib(p(-116, -1.4, -18).rotate(0, 180));
      V(I(), p(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(0.8, 0.8, 0.8, 0.2),);
      V(I(6), p(-116, -2.6, -16.5).scale(3.2, 0.8, 3), S(0.6, 0.5, 0.7, 0.2));
      V(I(), p(-115.5, -17, -12).scale(0.5, 15, 2.2), S(0.6, 0.6, 0.6, 0.3));
      V(I(8), p(-114, -17, -2).scale(2, 15, 2), S(0.6, 0.6, 0.6, 0.3));
      V(I(8), p(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, 0.3));
      V(I(), p(-77, -17, -50.5).scale(2.2, 15, 0.5), S(0.6, 0.6, 0.6, 0.3));
      Sa(3, f => {
        V(w(16), p(12 * f - 109, -9, -12), S(0.6, 0.6, 0.6, 0.3));
        V(w(16), p(-77, -9, -12 * f - 20).rotate(0, 90), S(0.6, 0.6, 0.6, 0.3),);
      });
      V(N(H(I(12), p(-77, -14.5, -12).scale(4, 17.5, 4), S(0.7, 0.7, 0.7, 0.2),), H(I(), p(-79, 0.1, -12).scale(3.5, 2, 1.3), S(0.4, 0.5, 0.6, 0.2),), H(I(), p(-77, 0.1, -14).scale(1.5, 2, 2), S(0.4, 0.5, 0.6, 0.2),), H(I(12), p(-77, 3.1, -12).scale(3, 5, 3), S(0.4, 0.5, 0.6, 0.2),),),);
      V(I(), p(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(0.6, 0.6, 0.6, 0.3),);
      V(I(9), p(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(0.5, 0.5, 0.5, 0.3));
      V(N(H(I(), p(-93, -5.8, -40).scale(9, 1, 5), S(0.8, 0.8, 0.8, 0.1),), H(I(9), p(-98, -5.8, -40).scale(3, 8, 3), S(0.7, 0.7, 0.7, 0.2),),),);
      Ib(p(-98, -4.4, -40).rotate(0, 90));
      Jb(p(-115, 0.2, -12), [0, 0, 3.5,]);
      Jb(p(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      V(N(Bb(H(I(6, 0, 0, 0.6), p(-100, 0.7, 105.5).scale(8, 1, 11), S(0.7, 0.7, 0.7, 0.2),), H(I(), p(-101.5, 0.7, 93.5).scale(10.5, 1, 2), S(0.7, 0.7, 0.7, 0.2),),), H(I(5), p(-100, 0.7, 113).scale(4, 3, 4), S(0.7, 0.7, 0.7, 0.2),),),);
      Sa(4, f => T(k => {
        k.h = u => {
          const y = $a(h[8].i, h[12].i);
          u.translateSelf((2 < f ? 2 * (1 - y) + y : 0) - 100, y * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Wa(y, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        V(I(6), p(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), S(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      T(f => {
        f.h = k => {
          const u = $a(h[8].i, h[12].i);
          k.translateSelf(2.5 * (1 - u) - 139.7, -3 * (1 - h[8].g) + u * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * u + 3), 0);
        };
        V(N(H(I(10), t(6, 2, 6), S(0.1, 0.6, 0.5, 0.3)), H(I(10), t(3.3, 6, 3.3), S(0.1, 0.6, 0.5, 0.5)),),);
        V(I(15, 1), p(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(0.4, 0.4, 0.4, 0.3),);
        V(I(10), p(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(0.3, 0.8, 0.7, 0.3));
        V(I(5), p(-7.5).rotate(0, 90).scale(1, 3), S(0.5, 0.5, 0.5, 0.5));
        Ib(p(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(k => V(q, lb(90 * -k, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, 0.8, 0.2),));
        Jb(p(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        V(I(12, 1), p(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), S(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(k => V(I(15, 1), p(-7.5 * f - 100, k + 0.7, 96).scale(1.1, 0.5, 1.1), S(0.5, 0.24, 0.2, 0.4),));
        V(q, p(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), S(1, 1, 0.8),);
        V(N(H(I(), p(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), S(0.5, 0.5, 0.5, 0.4),), H(I(), t(3, 3, 10), S(0.6, 0.24, 0.2, 0.5)), H(I(28, 1), p(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(0.6, 0.24, 0.2, 0.5),), H(I(5), p(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(0.6, 0.24, 0.2, 0.5),), H(I(5), p(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), S(0.6, 0.24, 0.2, 0.5),),), p(f - 100, 0.7, 97),);
      });
      T(f => {
        f.h = k => k.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        V(M);
      });
      V(N(H(I(), p(-82.07, 0.8, 106).scale(11, 0.9, 2.2), S(0.7, 0.7, 0.7, 0.1),), H(I(45, 1), p(-81, 0.7, 106).scale3d(7.7), S(0.7, 0.7, 0.7, 0.1),),),);
      T(f => {
        f.h = k => k.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
        V(N(H(I(45, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)), H(I(), p(0, 0, -5.5).scale(1.5, 3, 2.7), S(0.45, 0.45, 0.45, 0.2),),),);
        V(I(8), p(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(0.7, 0.7, 0.7, 0.1));
        V(I(5), p(0, 2).scale(1, 2), S(0.3, 0.3, 0.3, 0.2));
        Jb(p(0, 3), ...ob(14).map(({x:k, z:u}) => [5.6 * k, 5.6 * u, 2,]),);
      });
      T(f => {
        f.h = k => k.translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
        [-1, 1,].map(k => V(q, lb(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), S(1, 1, 0.8),));
        V(N(H(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), H(I(), t(9, 5, 2), S(0.3, 0, 0, 0.3)),),);
        V(H(I(28, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        V(H(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      T(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
        V(N(H(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), H(I(), p(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)), H(I(), p(0, 0, 7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),),);
        V(H(I(28, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        V(H(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      T(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
        V(N(H(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), H(I(), p(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)), H(I(), p(0, 0, -7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),),);
        V(H(I(28, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        V(H(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      V(I(), p(-58, 1, 106).scale(2, 0.65, 2), S(0.7, 0.7, 0.7, 0.2));
      V(I(), p(-50.7, 1, 99).scale(2, 0.65, 1), S(0.7, 0.7, 0.7, 0.2));
      V(I(), p(-42, 0.4, 91).scale(5, 1, 2.5), S(0.7, 0.7, 0.7, 0.3));
      V(I(), p(-34.2, 0.4, 91).scale(3, 1, 3), S(0.7, 0.7, 0.7, 0.3));
      Ib(p(-34, 2.7, 96).rotate(-12, 0));
      V(I(5), p(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), S(0.2, 0.5, 0.5, 0.6),);
      [S(0.1, 0.55, 0.45, 0.2), S(0.2, 0.5, 0.5, 0.3), S(0.3, 0.45, 0.55, 0.4),].map((f, k) => T(u => {
        u.h = y => {
          y.translateSelf(0, (1 - h[13].i) * (1 - h[14].i) * (k ? 0 : 3) + $a(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * k) * 4,);
        };
        V(I(), p(-23.5, 0.5, 91 + 6.8 * k).scale(1 === k ? 2 : 3.3, 1, 3.3), f);
        2 === k && V(I(), p(-29.1, 0.4, 91).scale(2.1, 1, 3), S(0.7, 0.7, 0.7, 0.3));
        1 === k && V(I(), p(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), S(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => V(q, p(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), S(1, 1, 0.8),));
      Sa(3, f => V(w(24.7 - 0.7 * (1 & f)), p(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? S(0.5, 0.5, 0.5, 0.3) : S(0.35, 0.35, 0.35, 0.5),),);
      V(N(H(I(6, 0, 0, 0.3), p(0, -0.92, 95).scale(14, 2, 14), S(0.8, 0.8, 0.8, 0.2),), H(I(5), p(0, 0, 95).scale3d(6), S(0.3, 0.3, 0.3, 0.5)),),);
      Ib(p(0, 1.7, 82).rotate(0, 180));
      V(I(5), p(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(0.5, 0.3, 0.3, 0.4),);
      V(I(6), p(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(0.5, 0.6, 0.7, 0.3),);
      V(I(), p(0, 16, 129).scale(1.5, 1, 2), S(0.5, 0.6, 0.7, 0.3));
      V(I(7), p(0, 16.2, 133).scale(5, 1, 5), S(0.4, 0.5, 0.6, 0.4));
      V(N(Bb(H(I(), p(0, 16, 110.5).scale(12, 1, 3), S(0.5, 0.3, 0.3, 0.4),), H(I(), p(0, 16, 111).scale(3, 1, 3.8), S(0.5, 0.3, 0.3, 0.4),),), H(I(5), p(0, 16, 103.5).scale(5.5, 5, 5.5), S(0.5, 0.3, 0.3, 0.4),),),);
      T(f => {
        f.h = k => k.translateSelf(-2 * Math.sin(c)).rotate(25 * Math.sin(c));
        V(I(3), p(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), S(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(k => {
          V(I(6), p(0, 16, k + 95).scale(3, 1, 2.3).rotate(0, 90), S(0.7, 0.7, 0.7, 0.4),);
          V(I(), p(0, 6.2, k + 95).scale(0.5, 11, 0.5), S(0.5, 0.3, 0.3, 0.4),);
        });
      });
      T(f => {
        f.h = k => {
          const u = $a($a((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          k.translateSelf(0, 16 * u, 8.5 * Ya(2 * u - 1) + 95);
        };
        V(I(5), t(5, 1.1, 5), S(0.5, 0.3, 0.3, 0.4));
        V(I(5), t(5.5, 0.9, 5.5), S(0.25, 0.25, 0.25, 0.4));
        Ib(p(0, 1.5, -1).rotate(0, 180));
      });
      Jb(p(0, 3, 95), ...ob(9).map(({x:f, z:k}) => [9 * f, 9 * k, 4,]),);
      Jb(p(0, 19, 134), [0, 0, 3.5,]);
    });
    T(() => {
      [0, 180,].map(v => V(q, lb(0, v).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), S(1, 1, 0.8),));
      V(qb(20), p(0, 1).scale(0.5, 0.5, 0.5), S(1, 0.3, 0.4));
      V(qb(30), t(0.7, 0.8, 0.55), S(1, 0.3, 0.4));
      const l = H(N(I(15, 1), H(I(), p(0, 0, 1).scale(2, 2, 0.5)),), lb(-90, 0).scale(0.1, 0.05, 0.1), S(0.3, 0.3, 0.3),);
      [-1, 1,].map(v => V(l, p(0.2 * v, 1.2, 0.4).rotate(0, 20 * v, 20 * v)));
      V(I(), p(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), S(0.3, 0.3, 0.3));
    });
    [-1, 1,].map(l => T(() => {
      V(I(20, 1), p(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), S(1, 0.3, 0.4));
    }));
    T(() => {
      V(I(6, 1), t(0.13, 1.4, 0.13), S(0.3, 0.3, 0.5, 0.1));
      V(I(10), p(0, 1).scale(0.21, 0.3, 0.21), S(1, 0.5, 0.2));
      V(I(3), p(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), S(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    T(() => {
      V(I(6).slice(0, -1), t(0.77, 1, 0.77), S(1, 0.3, 0.5));
    }, 0);
    T(() => {
      V(qb(30, 24, (l, v, w) => {
        const z = v / 24, G = l * Math.PI * 2 / 30, M = Math.sin(z ** 0.6 * Math.PI / 2);
        l = z * z * Math.sin(l * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:w.D = 0, y:-0.5, z:0,} : {x:Math.cos(G) * M, y:Math.cos(z * Math.PI) - z - l, z:Math.sin(G) * M + Math.sin(l * Math.PI * 2) / 4,};
      }), t(0.7, 0.7, 0.7), S(1, 1, 1),);
      [-1, 1,].map(l => V(qb(12), p(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

