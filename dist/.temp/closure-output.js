let aa, ca, da, fa, ia, ka, la, ma, na, oa = 0, pa = 0, c = 0, ra = 0, sa = 0, ta = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 1, d = 0.066;
const e = [], h = [], Ha = [], Ia = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ja = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ka = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Oa = {x:0, y:0, z:0,};
var Pa = 0, Qa = 180;
const Ra = {x:0, y:0, z:0,}, Sa = (a, b) => Array.from(Array(a), (g, m) => b(m)), Ta = Math.PI / 180, Ua = NO_INLINE((a, b) => a < b ? a : b), Wa = NO_INLINE((a, b) => b < a ? a : b), Xa = NO_INLINE(a => 0 > a ? -a : a), Ya = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, Za = (a, b) => Xa(a) > b ? a : 0, n = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, $a = (a, b) => (a = Ya(a), n(a, 1 - a, b)), ab = a => Math.atan2(Math.sin(a *= Ta), Math.cos(a)) / Ta, bb = (a, b, g) => a + (2 * 
(b = (b - a) % 360) % 360 - b) * Ya(g) || 0, cb = ({x:a, y:b, z:g}) => Math.hypot(a - Oa.x, b - Oa.y, g - Oa.z), db = ({x:a, y:b, z:g}, m) => a * m.x + b * m.y + g * m.z, eb = a => {
  let b, g = 0, m = 0, q = 0, k = a.at(-1);
  for (b of a) {
    g += (k.y - b.y) * (k.z + b.z), m += (k.z - b.z) * (k.x + b.x), q += (k.x - b.x) * (k.y + b.y), k = b;
  }
  return b = Math.hypot(g, m, q), g /= b, m /= b, q /= b, {x:g, y:m, z:q, w:g * k.x + m * k.y + q * k.z,};
}, fb = (a, b, g, m) => new DOMMatrix([g, 0, 0, 0, 0, m, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), hb = (a, b = gb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), kb = (a = ib, b = jb,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = 
a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), p = NO_INLINE((a, b, g) => ib.translate(a, b, g)), lb = NO_INLINE((a, b, g) => ib.rotate(a, b, g)), t = NO_INLINE((a, b, g) => ib.scale(a, b, g)), mb = (a, b, g) => (a.D = g, a.A = b, a), nb = (a, b, g = a.A) => mb(a.map(m => {
  let q, k;
  return {x:m, y:q, z:k} = m, {x:m, y:q, z:k} = b.transformPoint({x:m, y:q, z:k,}), {x:m, y:q, z:k,};
}), g, a.D,), G = (a, b, g) => a.map(m => nb(m, b, g)), ob = (a, b = 0) => Sa(a, g => {
  const m = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Xa(m) ? m : 0 > m ? m - b : m + b,};
}), pb = (a, b, g) => a.map((m, q, {length:k}) => mb([m, b[k - q - 1], b[k - (q + 1) % k - 1], a[(q + 1) % k],], a.A, g,)), I = (a, b, g = 0, m,) => (a = a ? ob(a, m) : Ia, m = nb(a, p(0, 1).scale3d(0 < g ? g : 1)), a = nb(a, p(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...pb(a, m, b), m, a,]), qb = (a, b = a, g = (m, q) => (q *= Math.PI / b, {x:Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(m) * Math.sin(q),})) => {
  const m = [];
  for (let q = 0; a > q; q++) {
    for (let k = 0; b > k; k++) {
      const x = mb([], 0, 1);
      m.push(x);
      x.push(g(q, k, x));
      k && x.push(g((q + 1) % a, k, x));
      b - 1 > k && x.push(g((q + 1) % a, k + 1 % b, x));
      x.push(g(q, k + 1 % b, x));
    }
  }
  return m;
}, tb = (a, b) => {
  var g, m, q, k = b.C;
  for (var x = 0; k.length > x; ++x) {
    if (-0.00008 > (g = db(a, k[x]) - a.w) ? q = b : 8e-5 < g && (m = b), q && m) {
      m = [];
      q = [];
      k = b.C;
      x = b.B;
      let v = k.at(-1), z = db(a, v) - a.w;
      for (const F of k) {
        g = db(a, F) - a.w, 8e-5 > z && q.push(v), -0.00008 < z && m.push(v), (8e-5 < z && -0.00008 > g || -0.00008 > z && 8e-5 < g) && (z /= g - z, v = {x:v.x + (v.x - F.x) * z, y:v.y + (v.y - F.y) * z, z:v.z + (v.z - F.z) * z,}, m.push(v), q.push(v)), v = F, z = g;
      }
      return {o:2 < m.length && {C:mb(m, k.A, k.D), B:x, u:b,}, m:2 < q.length && {C:mb(q, k.A, k.D), B:x, u:b,},};
    }
  }
  return {o:m, m:q,};
}, ub = (a, b, g = eb(b.C)) => {
  let m, q, k;
  return a ? ({o:m, m:q} = tb(a, b), m || q || a.s.push(b), m && (a.o = ub(a.o, m, g)), q && (a.m = ub(a.m, q, g))) : ({x:m, y:q, z:g, w:k} = g, a = {x:m, y:q, z:g, w:k, s:[b,], o:0, m:0,}), a;
}, vb = (a, b, g) => {
  const m = [], q = (k, x) => {
    let {o:v, m:z} = tb(k, x);
    v || z || (0 < g * db(k, b) ? v = x : z = x);
    v && (k.o ? q(k.o, v) : m.push(v));
    z && k.m && q(k.m, z);
  };
  for (const k of b.s) {
    q(a, k);
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
    for (let [q, k] of m) {
      for (const x of k) {
        ub(b, x, q);
      }
    }
  }
  return b;
}), O = (...a) => {
  let b;
  const g = k => {
    let x;
    return k.u && ((x = m.get(k.u)) ? (q.delete(x), k = g(k.u)) : m.set(k.u, k)), k;
  }, m = new Map(), q = new Map();
  return [a, ...b] = [...a,], a = Ab(Bb(Ab(zb(a)), ...b)), yb(a, k => {
    for (const x of k.s) {
      q.set(g(x), x.B);
    }
  }), Array.from(q, ([{C:k}, x]) => {
    const v = k.map(({x:z, y:F, z:M}) => ({x:z, y:F, z:M,}));
    return mb(x ? v.reverse() : v, k.A, k.D);
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
  let a, b, g, m, q, k, x, v, z, F, M, U, A, f, l = !0;
  const w = [], y = () => {
    b4.innerHTML = "Music: " + l;
    aa || !l ? Fb.disconnect() : Fb.connect(Gb.destination);
  }, E = () => {
    const r = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ka = fb(0.3, 181, r, 1.732051);
    la = [fb(0.3, 55, r, 1.732051), fb(55, 181, r, 1.732051),];
    m = v = void 0;
    w.length = da = U = Ca = A = f = 0;
    document.hidden && J(!0);
  }, J = (r, u = 0) => {
    if (aa !== r) {
      aa = r;
      fa = u;
      E();
      Db();
      document.body.className = r ? "l m" : "l";
      try {
        r ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Fb.start());
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
    l = !l;
    y();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.I = "", location.reload());
  };
  onclick = r => {
    if (!aa && (r.target === hC && (da = 1), fa)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = r => {
    let u;
    r.repeat || (u = !!r.type[5] && !0, r = {KeyA:1, ArrowLeft:1, KeyW:3, ArrowUp:3, KeyD:2, ArrowRight:2, KeyS:4, ArrowDown:4, KeyE:0, Space:0, Enter:0, Escape:5,}[r.code], (w[r] = u) && (0 === r && (da = 1), 5 === r && J(!0)));
  };
  onmousemove = ({movementX:r, movementY:u}) => {
    fa && (r || u) && (Qa += 0.1 * r, Pa += 0.1 * u);
  };
  hC.ontouchstart = r => {
    if (!aa) {
      for (let {pageX:u, pageY:D, identifier:H} of r.changedTouches) {
        fa && u > hC.clientWidth / 2 ? void 0 === v && (z = 0, k = u, x = D, v = H, F = Qa, M = Pa) : void 0 === m && (q = 0, b = u, g = D, m = H);
      }
      a = pa;
    }
  };
  hC.ontouchmove = r => {
    if (!aa) {
      for (let {pageX:V, pageY:B, identifier:C} of r.changedTouches) {
        var u, D, H, R, Z;
        v === C && (Qa = F + (V - k) / 2.3, Pa = M + (B - x) / 2.3, z = 1);
        m === C && (C = (b - V) / 20, u = (g - B) / 20, D = Xa(C), H = Xa(u), R = Math.atan2(u, C), Z = Ya(Math.hypot(u, C) - 0.5), A = 0.2 < D ? Math.cos(R) * Z : 0, f = 0.2 < H ? Math.sin(R) * Z : 0, (A || f) && (q = 1), 2 < D && (b = V + 20 * (0 > C ? -1 : 1)), 2 < H && (g = B + 20 * (0 > u ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = r => {
    let u;
    document.activeElement === document.body && r.preventDefault();
    for (const D of r.changedTouches) {
      D.identifier === v ? (v = void 0, z || (u = 1), z = 0) : D.identifier === m ? (m = void 0, f = A = 0, q || (u = 1), q = 0) : u = 1;
    }
    r.target === hC && u && a && 0.02 < (r = pa - a) && 0.7 > r && (w[0] = !0);
  };
  ia = () => {
    let r = f + (w[3] ? 1 : 0) - (w[4] ? 1 : 0), u = A + (w[1] ? 1 : 0) - (w[2] ? 1 : 0), D = navigator.getGamepads()[0];
    if (D) {
      const H = V => R[V]?.pressed || 0 < R[V]?.value ? 1 : 0, R = D.buttons, Z = D.axes;
      D = H(3) || H(2) || H(1) || H(0);
      r += H(12) - H(13) - Za(Z[1], 0.2);
      u += H(14) - H(15) - Za(Z[0], 0.2);
      H(9) && J(!0);
      fa && (Pa += d * Za(Z[3], 0.3) * 80, Qa += d * Za(Z[2], 0.3) * 80);
      D && !U && (da = 1);
      U = D;
    }
    Ba = Math.atan2(r, u);
    Ca = Za(Ya(Math.hypot(r, u)), 0.05);
  };
  document.onvisibilitychange = onblur = onresize = E;
  J(!0);
}, S = NO_INLINE((a, b, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), T = (a, b = 1) => {
  const g = ma;
  b = {l:new DOMMatrix(), H:e.length, G:b, s:[], h() {
  },};
  return e.push(b), a(ma = b), ma = g, b;
}, W = (a, b = new DOMMatrix(), g) => ma.s.push(...G(a, b, g)), Ib = a => {
  const b = new DOMMatrix(), g = new DOMMatrix(), m = ma, q = h.length, k = {j:0, g:0, i:0, u:m, J:b, l:g, h() {
    kb(kb(m.l, b).multiplySelf(a), g).rotateSelf(60 * k.g - 30, 0,).translateSelf(0, 1);
    k.g = n(k.g, k.j, 1 - Math.exp(-4 * d));
    k.i = n(k.i, k.j, 1 - Math.exp(-1 * d));
    da && 3 > cb(b.transformPoint()) && (0.3 > k.g || 0.7 < k.g) && (k.j = k.j ? 0 : 1, q && 1 / 0 > Ga && (Ga = c + 1, h4.innerHTML = "* click *"), ra = q, Eb());
  },};
  h.push(k);
  W(I(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
  W(I(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
  W(I(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), S(0.5, 0.5, 0.4));
}, Jb = (a, ...b) => {
  let g = -1, m = 0, q = 0, k = 0, x = 0, v = 0, z = 1, F = 3;
  const M = new DOMMatrix(), U = ma, A = Ha.length, f = b.map(([u, D, H]) => ({x:u, z:D, w:H,}));
  let l = f[0], {x:w, z:y} = l, E = w, J = y;
  const r = {j:0, l:M, h() {
    if (!r.j) {
      let Z, V, B, C, Q, K, L, P = 1, N = 1 / 0;
      for (const ba of f) {
        var {x:u, z:D, w:H} = ba;
        D = (u = Math.hypot(w - u, y - D)) - H;
        L ||= u < H;
        0 < D && N > D && (N = D, l = ba);
        P = Ua(P, u / H);
      }
      L || ({x:Z, z:V, w:B} = l, C = w - Z, Q = y - V, K = Math.hypot(C, Q), R = Math.atan2(-Q, C), z && (q = (Math.random() - 0.5) * Math.PI / 2, F = Ya(F / (1 + Math.random()))), R += q, g = -Math.cos(R), m = Math.sin(R), 0.1 < K && (K = Ua(K, B) / (K || 1), w = C * K + Z, y = Q * K + V));
      z = L;
      F = n(F, 6 * (1 - P) + 3, 1 - Math.exp(-(P + 3) * d));
      R = w = n(w, w + g, 1 - Math.exp(-F * d));
      E = n(E, R, 1 - Math.exp(-F * d));
      R = y = n(y, y + m, 1 - Math.exp(-F * d));
      J = n(J, R, 1 - Math.exp(-F * d));
      k = bb(k, Math.atan2(E - x, J - v) / Ta - 180, 1 - Math.exp(-3 * d),);
      x = E;
      v = J;
      var R = kb(U.l, M).multiplySelf(a).translateSelf(E, 0, J).rotateSelf(0, k, 7 * Math.sin(1.7 * c)).transformPoint();
      1.6 > cb(R) && (r.j = 1, R = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][oa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      1 / 0 > Ga && (Ga = c + (oa && 12 > oa ? 5 : 7), h4.innerHTML = R), Db(), Eb());
    }
    r.j && kb(e[2].l, M).translateSelf(A % 4 * 1.2 - 1.7 + Math.sin(c + A) / 7, -2, 1.7 * (A / 4 | 0) - 5.5 + Xa(A % 4 - 2) + Math.cos(c / 1.5 + A) / 6,);
  },};
  Ha.push(r);
}, Kb = () => {
  let a, b, g, m, q, k, x, v, z, F, M, U, A, f, l, w, y, E = 1, J = 2, r = 2;
  const u = () => {
    let B = 0, C = 0, Q = 0, K = 0;
    m = 0;
    Z.fill(0);
    for (let P = 0; 31 > P; ++P) {
      let N = 0;
      const ba = 512 * P;
      for (let ea = 0; 128 > ea; ea++) {
        var L = ba + 4 * ea;
        let ja = (V[L] + V[1 + L]) / 255;
        L = V[2 + L];
        14 < ea && 114 > ea && (N += ja);
        L && ja && (ja = Z[L] + 1, Z[L] = ja, B > ja || (B = ja, C = L, m = 1));
      }
      3 > N && 5 < P && (Q += P / 32);
      3 < N && (7 < P && (K += P / 15), m = 1);
    }
    a = C || b;
    b = C;
    r = n(r, m ? 6.5 : -20 > Ra.y ? 11 : 8, 1 - Math.exp(-4 * d));
    Ra.y += K / 41 - (m || r) * Q / 41 * r * d;
  }, D = () => {
    F = z = 0;
    for (let B = 32; 128 > B; B += 2) {
      let C = 0, Q = 0, K = 0, L = 0;
      const P = 512 * B;
      for (let N = 1 & B; 128 > N; N += 2) {
        const ba = P + 4 * N;
        let ea = P + 4 * (127 - N);
        const ja = V[ba] / 255, Va = V[1 + ea] / 255, qa = 1 - Xa(N / 63.5 - 1);
        10 < N && 118 > N && (C = Wa(C, Wa(ja * qa, ja * V[ea] / 255)), Q = Wa(Q, Wa(Va * qa, Va * V[1 + ba] / 255)));
        (54 > N || 74 < N) && 1e-3 < (ea = (1 - qa) * Wa(ja, Va) / 3) && (64 > N && ea > K ? K = ea : 64 < N && ea > L && (L = ea));
      }
      Xa(L - K) > Xa(z) && (z = L - K);
      Xa(Q - C) > Xa(F) && (F = Q - C);
    }
  }, H = () => (J ? h[ra].u : e[g && 1 === e[g].G && g || 0]).l, R = (B, C, Q, K) => n(B, C, E || (Ya(Xa(C - B) ** 0.9 - Q) + 1 / 7) * (1 - Math.exp(-(1.5 * K) * d))), Z = new Uint8Array(256), V = new Uint8Array(65536);
  na = () => {
    X.r9r(0, 0, 128, 128, 6408, 5121, V);
    X.iay(36008, [36064, 36096,]);
    X.iay(36009, [36064, 36096,]);
    NO_INLINE(D)();
    NO_INLINE(u)();
    var B = Ya(1 - 5 * Wa(Xa(z), Xa(F))), C = fa ? Qa * Ta : Math.PI;
    B = (A = n(A, m * B * Ya(2 * Ca) * 7, 1 - Math.exp(-(m ? 0.1 < B ? 10 : 5 + 2 * Ca : 1) * d)), M = n(M, 0, 1 - Math.exp(-(m ? 8 : 4) * d)), z += d * ((a ? 0 : B * M) - Math.cos(Ba + C) * Ca * A), U = n(U, 0, 1 - Math.exp(-(m ? 8 : 4) * d)), F += d * ((a ? 0 : B * U) - Math.sin(Ba + C) * Ca * A), H());
    var {x:Q, y:C, z:K} = 1 < J ? h[ra].J.transformPoint({x:0, y:ra || 0.9 < ya ? 15 : 1, z:-2.4,}) : (C = B, kb(C).invertSelf(), jb.m41 = jb.m42 = jb.m43 = 0, Q = jb.transformPoint({x:z, z:F, w:0,}), Ra.x += Q.x, Ra.z += Q.z, C.transformPoint(Ra));
    if (a && (M = (Q - Oa.x) / d, U = (K - Oa.z) / d), Oa.x = Q, Oa.y = C, Oa.z = K, (J = J && (m && a ? 0 : 1)) || a !== g) {
      g = a;
      const L = (B = H()).inverse().transformPoint(Oa);
      Ra.x = L.x;
      Ra.y = L.y;
      Ra.z = L.z;
    }
    v = n(v, Aa * (27 < a && 32 > a), 1 - Math.exp(-2 * d));
    C < (-25 > Q || 109 > K ? -25 : -9) && (M = U = A = 0, J = 2);
    1 === a && (h[9].j = -15 > Q && 0 > K ? 1 : 0);
    f = n(n(f, C, 1 - Math.exp(-2 * d)), C, J || 8 * Xa(f - C),);
    w = R(w, f, 2, 1);
    l = R(l, Q, 0.5, 1);
    y = R(y, K, 0.5, 1);
    fa ? (B = J + (1 - Math.exp(-18 * d)), Da = n(Da, Q, B), Ea = n(Ea, f + 1.5, B), Fa = n(Fa, K, B), Qa = ab(Qa)) : (Ea = R(Ea, Wa(w + Ya((-60 - K) / 8, 0, 20) + 13 + 9 * v, 6), 4, 2,), Fa = R(Fa, y + -18 + 5 * v, 1, 2 + v,), Da = R(Da, l, 1, 2 + v,), C = Ua(4, -Xa(y - Fa)), B = l - Da, Qa = bb(Qa, 90 - ab(Math.atan2(C, B) / Ta), E + (1 - Math.exp(-6 * d)),), Pa = bb(Pa, 90 - Math.atan2(Math.hypot(C, B), Ea - w) / Ta, E + (1 - Math.exp(-6 * d)),));
    Pa = Ya(Pa, -87, 87);
    k = bb(k, q, 1 - Math.exp(-8 * d));
    x = n(x, Ca, 1 - Math.exp(-10 * d));
    Ca && (q = 90 - Ba / Ta);
    E = 0;
    e[37].l.translateSelf(Q, f + 0.124, K).rotateSelf(0, k);
    for (B = 0; 2 > B; ++B) {
      e[38 + B].l.multiplySelf(e[37].l).translateSelf(0, x * Ya(0.45 * Math.sin(9.1 * c + Math.PI * (B - 1) - Math.PI / 2)),).rotateSelf(x * Math.sin(9.1 * c + Math.PI * (B - 1)) * 0.25 / Ta, 0);
    }
  };
}, Lb = (a, b = 35633) => (b = X.c6x(b), X.s3c(b, a), X.c6a(b), b), Mb = (a, b) => {
  const g = {}, m = X.c1h();
  return X.abz(m, a), X.abz(m, Lb(b, 35632)), X.l8l(m), q => q ? g[q] || (g[q] = X.gan(m, q)) : X.u7y(m);
}, Tb = (a, b, g) => {
  if (aa) {
    b = lb(0, 40 * Math.sin(pa) - 70);
    for (const m of [37, 38, 39,]) {
      hb(b, Rb, m - 1);
    }
    X.uae(a, !1, Rb);
    X.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
  } else {
    X.uae(a, !1, Rb), X.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6), X.uae(a, !1, Sb), X.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,), X.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Ub = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Vb = a => Math.sin(a * Math.PI * 2), Wb = a => 0.5 > a % 1 ? 1 : -1, Xb = a => a % 1 * 2 - 1, Yb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, ec = a => {
  let b = 0;
  const g = () => {
    let x = 0;
    const v = L => {
      let P, N, ba, ea = 0, ja = 0;
      const Va = [], qa = new Int32Array(768 * L), Zb = 2 ** (u - 9) / L, $b = Math.PI * 2 ** (V - 8) / L, wb = C * L & -2;
      for (let rb = 0; 11 >= rb; ++rb) {
        for (let sb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + rb]; 32 > sb; ++sb) {
          const Ob = (32 * rb + sb) * L;
          for (var La = 0; 4 > La; ++La) {
            if (P = 0, Nb && (P = z[Nb - 1].charCodeAt(sb + 32 * La) - 40, P += 0 < P ? 106 : 0), P) {
              var ha;
              if (!(ha = Va[P])) {
                ha = P;
                let Y = void 0, ua = void 0;
                var Pb = P;
                let ac = 0, bc = 0;
                const cc = 2 > b ? Xb : Vb, dc = 2 > b ? 1 > b ? Wb : Yb : Vb, Qb = new Int32Array(y + E + K);
                for (let Ma = 0, xb = 0; y + E + K > Ma; ++Ma, ++xb) {
                  let Na = 1;
                  y > Ma ? Na = Ma / y : y + E > Ma || (Na = (1 - (Na = (Ma - y - E) / K)) * 3 ** (-r / 16 * Na));
                  0 > xb || (xb -= 4 * L, ua = 396e-5 * 2 ** ((Pb + M - 256) / 12), Y = 396e-5 * 2 ** ((Pb + f - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                  Qb[Ma] = 80 * (cc(ac += ua * Na ** (U / 32)) * F + dc(bc += Y * Na ** (l / 32)) * A + (w ? (2 * Math.random() - 1) * w : 0)) * Na | 0;
                }
                ha = Va[ha] = Qb;
              }
              for (let Y = 0, ua = 2 * Ob; ha.length > Y; ++Y, ua += 2) {
                qa[ua] += ha[Y];
              }
            }
          }
          for (let Y, ua = 0; L > ua; ++ua) {
            La = 0;
            ha = 2 * (Ob + ua);
            var va = (((Y = qa[ha]) || ba) && (N = 308e-5 * D, 1 !== b && 4 !== b || (N *= Math.sin(Zb * ha * Math.PI * 2) * Q / 512 + 0.5), N = 1.5 * Math.sin(N), ea += N * ja, va = (1 - H / 255) * (Y - ja) - ea, ja += N * va, Y = 4 === b ? ja : 3 === b ? va : ea, b || (Y = 1 > (Y *= 22e-5) ? -1 < Y ? Math.sin(Y / 4 * Math.PI * 2) : -1 : 1, Y /= 22e-5), Y *= R / 32, ba = 1e-5 < Y * Y, va = Math.sin($b * ha) * Z / 512 + 0.5, La = Y * (1 - va), Y *= va), ha < wb || (La += qa[1 + ha - wb] * B / 255, 
            Y += qa[ha - wb] * B / 255), x + ha >> 1);
            q[va] += (qa[ha] = La) / 65536;
            k[va] += (qa[++ha] = Y) / 65536;
          }
        }
      }
      x += 768 * L;
    }, z = Ja[b], [F, M, U, A, f, l, w, y, E, J, r, u, D, H, R, Z, V, B, C, Q] = Ka[b], K = 4 * J ** 2;
    v(5513);
    v(4562);
    v(3891);
    Ub(5 > ++b ? g : a);
  }, m = Gb.createBuffer(2, 5362944, 44100), q = m.getChannelData(0), k = m.getChannelData(1);
  Fb.buffer = m;
  Fb.loop = !0;
  Ub(g);
}, Gb = new AudioContext(), ib = new DOMMatrix(), jb = new DOMMatrix(), gb = new Float32Array(16), Rb = new Float32Array(624), Sb = new Float32Array(624), fc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Fb = Gb.createBufferSource(), X = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in X) {
  X[a[0] + [...a,].reduce((b, g, m) => (b * m + g.charCodeAt(0)) % 434, 0).toString(36)] = X[a];
}
Ub(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], k = (r, u, D) => {
        let H = 0, R = 0, Z = 0, V = 1 / 0, B = -1 / 0, C = 1 / 0, Q = -1 / 0, K = 1 / 0, L = -1 / 0;
        X.fas(36160, 36096, 3553, w[r], 0);
        X.c4s(256);
        kb().scale3dSelf(u).multiplySelf(kb(la[r], z).multiplySelf(v).invertSelf(),);
        for (let P = 0; 8 > P; ++P) {
          const N = l[P], ba = (N.x = 4 & P ? 1 : -1, N.y = 2 & P ? 1 : -1, N.z = 1 & P ? 1 : -1, jb.transformPoint(N));
          H -= N.x = (0 | ba.x) / u / ba.w;
          R -= N.y = (0 | ba.y) / u / ba.w;
          Z -= N.z = (0 | ba.z) / u / ba.w;
        }
        kb().rotateSelf(298, 139).translateSelf(H / 8, R / 8, Z / 8);
        for (u = 0; 8 > u; ++u) {
          const {x:P, y:N, z:ba} = jb.transformPoint(l[u]);
          V = Ua(V, P);
          B = Wa(B, P);
          C = Ua(C, N);
          Q = Wa(Q, N);
          K = Ua(K, ba);
          L = Wa(L, ba);
        }
        K *= 0 > K ? D : 1 / D;
        L *= 0 < L ? D : 1 / D;
        X.uae(M("b"), !1, hb(kb(ib, z).scaleSelf(2 / (B - V), 2 / (Q - C), 2 / (K - L)).translateSelf((B + V) / -2, (Q + C) / -2, (K + L) / 2).multiplySelf(jb), q[r],),);
        Tb(M("c"), !fa, 42);
      }, x = r => {
        if (X.f1s(), requestAnimationFrame(x), u = (r - (ca || r)) / 1e3, pa += u, c += d = aa ? 0 : Ua(0.066, u), ca = r, 0 < d) {
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
          A();
          X.b6o(36160, J);
          X.v5y(0, 0, 128, 128);
          X.c4s(16640);
          X.cbf(!0, !1, !0, !1);
          var {x:u, y:r, z:D} = Oa;
          X.uae(A("b"), !1, hb(kb().rotateSelf(0, 180).invertSelf().translateSelf(-u, -r, 0.3 - D)),);
          Tb(A("c"), 0, 41);
          X.c4s(256);
          X.cbf(!1, !0, !0, !1);
          X.uae(A("b"), !1, hb(kb().translateSelf(-u, -r, -D - 0.3)));
          Tb(A("c"), 0, 41);
          X.f1s();
        }
        da = 0;
        kb(ib, v);
        aa ? v.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : v.rotateSelf(-Pa, -Qa).invertSelf().translateSelf(-Da, -Ea, -Fa,);
        M();
        X.b6o(36160, y);
        X.v5y(0, 0, 2048, 2048);
        k(0, 1.1 * 54.7, 10);
        k(1, 1.1 * 126, 11);
        f();
        X.b6o(36160, null);
        X.v5y(0, 0, X.drawingBufferWidth, X.drawingBufferHeight);
        X.cbf(!0, !0, !0, !0);
        X.c4s(16640);
        X.uae(f("a"), !1, hb(ka));
        X.uae(f("b"), !1, hb(v));
        X.uae(f("i"), !1, q[0]);
        X.uae(f("j"), !1, q[1]);
        X.ubu(f("k"), Da, Ea, Fa);
        Tb(f("c"), !fa, 42);
        U();
        X.ubu(U("j"), X.drawingBufferWidth, X.drawingBufferHeight, pa);
        X.ubu(U("k"), Da, Ea, Fa);
        X.uae(U("b"), !1, hb(kb(v).invertSelf()));
        X.d97(4, 3, 5123, 0);
        X.b6o(36160, J);
        X.f1s();
      }, v = new DOMMatrix(), z = new DOMMatrix(), F = g;
      var m = Lb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const M = Mb(Lb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), U = Mb(Lb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), A = Mb(m, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), f = Mb(m, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), l = Sa(8, () => ({})), w = [0, 1,].map(r => {
        const u = X.c25();
        return X.a4v(33984 + r), X.b9j(3553, u), X.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), X.t2z(3553, 10241, 9729), X.t2z(3553, 10240, 9729), X.t2z(3553, 34893, 515), X.t2z(3553, 34892, 34894), X.t2z(3553, 10243, 33071), X.t2z(3553, 10242, 33071), u;
      }), y = X.c5w();
      m = X.c25();
      const E = X.c3z(), J = X.c5w();
      A();
      X.uae(A("a"), !1, hb(fb(1e-4, 1, 1.4, 0.59)));
      f();
      X.ubh(f("q"), 2);
      X.ubh(f("h"), 1);
      X.ubh(f("g"), 0);
      U();
      X.ubh(U("q"), 2);
      X.b6o(36160, y);
      X.d45([0,]);
      X.r9l(0);
      X.b6o(36160, J);
      X.bb1(36161, E);
      X.r4v(36161, 33189, 128, 128);
      X.f8w(36160, 36096, 36161, E);
      X.a4v(33986);
      X.b9j(3553, m);
      X.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      X.fas(36160, 36064, 3553, m, 0);
      X.b9j(3553, X.c25());
      X.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, F);
      X.t2z(3553, 10241, 9987);
      X.t2z(3553, 10240, 9729);
      X.gbn(3553);
      X.e8z(2929);
      X.e8z(2884);
      X.c70(1);
      X.c7a(1029);
      X.d4n(515);
      X.c5t(0, 0, 0, 1);
      Cb();
      NO_INLINE(Hb)();
      NO_INLINE(Kb)();
      requestAnimationFrame(x);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = fc;
  NO_INLINE(ec)(() => {
    Ub(() => {
      let k, x = 0;
      const v = [], z = [], F = [], M = [], U = y => {
        let {x:E, y:J, z:r} = k[y], u = (w[0] = E, w[1] = J, w[2] = r, y = "" + (k.D ? l : A), f.get(y));
        return void 0 !== u ? (E = 3 * u, M[E] = (M[E++] + A[5]) / 2, M[E] = (M[E++] + A[6]) / 2, M[E] = (M[E] + A[7]) / 2) : (f.set(y, u = f.size), z.push(E, J, r, w[3]), F.push(A[4]), M.push(A[5], A[6], A[7])), u;
      }, A = new Int32Array(8), f = new Map(), l = new Int32Array(A.buffer, 0, 5), w = new Float32Array(A.buffer);
      for (const y of e) {
        for (k of (w[3] = 40 === y.H ? -14 : y.G && y.H, y.s)) {
          const {x:E, y:J, z:r} = eb(k);
          A[4] = 0 | k.A;
          A[5] = 32767 * E;
          A[6] = 32767 * J;
          A[7] = 32767 * r;
          for (let u = 2, D = U(0), H = U(1); k.length > u; ++u) {
            v.push(D, H, H = U(u));
          }
        }
        y.s = null;
        y.v = x;
        y.F = x = v.length;
      }
      X.b11(34962, X.c1b());
      X.b2v(34962, new Float32Array(z), 35044);
      X.v7s(0, 4, 5126, !1, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Int16Array(M), 35044);
      X.v7s(1, 3, 5122, !0, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Uint32Array(F), 35044);
      X.v7s(2, 4, 5121, !0, 0, 0);
      X.b11(34963, X.c1b());
      X.b2v(34963, new Uint16Array(v), 35044);
      X.e3x(0);
      X.e3x(1);
      X.e3x(2);
      Ub(b);
      try {
        const [y, E, J, r, u] = JSON.parse(localStorage.I,);
        h.map((D, H) => D.g = D.i = D.j = H ? 0 | y[H] : 0);
        Ha.map((D, H) => D.j = 0 | E[H]);
        ra = J;
        c = r;
        za = u;
      } catch {
      }
      ya = Ya(ra);
    });
    const m = Sa(11, k => p(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), q = Sa(10, k => pb(nb(ob(18), m[k]).reverse(), nb(ob(18), m[k + 1]), 1,)).flat();
    T(() => W([Ia.slice(1),], p(-2).scale3d(3).rotate(90, 0)), 0);
    T(() => {
      const k = (f, l, w) => T(y => {
        y.h = E => E.translateSelf(z() * Math.sin(3 * f + c * f) * l);
        Ia.map(({x:E, z:J}) => {
          W(I(11, 1), p(4 * E, 4, w + 4 * J).scale(0.8, 3, 0.8), S(0.5, 0.3, 0.7, 0.6),);
          W(I(), p(4 * E, 7, w + 4 * J).scale(1, 0.3), S(0.5, 0.5, 0.5, 0.3),);
        });
        W(O(G(I(), p(0, 0, w).scale(5, 1, 5), S(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(E => G(I(), p(5 * E, 0.2, w).rotate(-30 * E).scale(4, 1, 2), S(0.8, 0.8, 0.8, 0.3),)),),);
        W(I(), p(0, -3, w).scale(8, 2, 8), S(0.4, 0.4, 0.4, 0.3));
      }), x = (f, l, w, y) => f.translateSelf(l + Math.sin(c + 2) / 5, w + Math.sin(0.8 * c) / 3, y).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),), v = f => O(G(I(), p(0, -f / 2).scale(6, f - 1, 2.2)), G(I(), p(0, -f / 2 - 6).scale(4, f - 3, 4)), G(I(32, 1), p(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), z = () => Ua(h[2].i, 1 - h[4].i), F = O(G(I(30, 1, 1.15, 1), p(0, -3).scale(3.5, 1, 3.5), S(0.7, 0.4, 0.25, 0.7),), G(I(30, 1, 1.3, 1), p(0, -2.5).scale(2.6, 1, 3), S(0.7, 
      0.4, 0.25, 0.2),), G(I(), p(4, -1.2).scale3d(2), S(0.7, 0.4, 0.25, 0.3)),), M = Sa(7, f => G(I(6, 1), p(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), S(0.3, 0.3, 0.38),)).flat(), U = (T(f => {
        f.h = l => x(l, -12, 4.2, 40 * ya - 66);
        W(F);
        Ib(p(0, -3, 4));
      }), Ib(p(-5.4, 1.5, -19).rotate(0, -90)), Jb(p(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Jb(p(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...ob(18).map(({x:f, z:l}) => [7 * f, 10 * l, 4.5 - 2 * Xa(f),]),), W(I(), p(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), S(0.8, 0.8, 0.8, 0.2)), Ia.map(({x:f, z:l}) => W(I(6), p(3 * f, 3, 15 * l).scale(0.7, 4, 0.7), S(0.6, 0.3, 0.3, 0.4))), W(I(), p(0, 0, -23).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2)), W(I(), p(0, 0, 22).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2)), 
      [-15, 15,].map((f, l) => {
        W(I(), p(0, 6.3, f).scale(4, 0.3, 1), S(0.3, 0.3, 0.3, 0.4));
        W(I(), p(0, 1, f).scale(3, 0.2, 0.35), S(0.5, 0.5, 0.5, 0.3));
        T(w => {
          w.h = y => y.translateSelf(0, 0, f).scaleSelf(1, Ya(1.22 - h[l + 1].g), 1);
          W(M);
        });
      }), Sa(5, f => Sa(2, l => W(q, p(18.5 * (l - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * l).scale(1.2, 10, 1.2), S(1, 1, 0.8, 0.2),)),), W(I(), p(3, 1.5, -20).scale(0.5, 2, 5), S(0.7, 0.7, 0.7, 0.2)), W(I(), p(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(0.75, 0.75, 0.75, 0.2),), W(I(5), p(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(0.6, 0.3, 0.3, 0.4),), W(I(), lb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), S(0.8, 0.2, 0.2, 0.5),), W(O(Bb(G(I(6, 0, 0, 0.3), 
      p(8, -3, -4).scale(13, 1, 13), S(0.7, 0.7, 0.7, 0.2),), G(I(6), p(0, -8).scale(9, 8, 8), S(0.4, 0.2, 0.5, 0.5)), G(I(6, 0, 0, 0.3), p(0, -0.92).scale(13, 2, 13), S(0.8, 0.8, 0.8, 0.2),),), G(I(5), t(5, 30, 5), S(0.4, 0.2, 0.6, 0.5)), G(I(5, 0, 1.5), p(0, 1).scale(4.5, 0.3, 4.5), S(0.7, 0.5, 0.9, 0.2),), G(I(), lb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), S(0.5, 0.5, 0.5, 0.5),), G(I(6), p(15, -1.5, 4).scale(3.5, 1, 3.5), S(0.5, 0.5, 0.5, 0.5),),),), T(f => {
        f.h = l => l.translateSelf(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        W(I(5), p(0, -0.2).scale(5, 1, 5), S(0.6, 0.65, 0.7, 0.3));
        Ib(p(0, 1.2));
      }), Ib(p(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), T(f => {
        f.h = l => l.translateSelf(z() * Math.sin(c / 1.5 + 2) * 12);
        W(O(Bb(G(I(), t(1.5, 1, 5), S(0.9, 0.9, 0.9, 0.2)), G(I(6), t(4, 1, 5), S(0.9, 0.9, 0.9, 0.2)), G(I(), p(0, -2).scale(2, 3.2, 1.9), S(0.3, 0.8, 0.5, 0.5),), G(I(16, 1, 0, 4), t(1, 1, 1.5).rotate(0, 90), S(0.9, 0.9, 0.9, 0.2),),), G(I(), t(1.3, 10, 1.3), S(0.2, 0.7, 0.4, 0.6)),), p(0, 0, 45),);
        Jb(p(0, 2.8, 45), [0, 0, 4.5,]);
      }), W(I(), p(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)), T(f => {
        f.h = l => l.translateSelf(9.8 * (1 - z()));
        W(I(3), p(-23, -1.7, 55.8).scale(5, 0.7, 8.3), S(0.3, 0.6, 0.6, 0.2));
        W(I(8), p(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(0.8, 0.8, 0.8, 0.2));
        W(I(), p(-23, -3, 55).scale(5.2, 1.7, 3), S(0.5, 0.5, 0.5, 0.3));
        W(I(), p(-23, -2.2, 62).scale(3, 1, 4), S(0.5, 0.5, 0.5, 0.3));
        Ib(p(-23, -0.5, 66.5));
      }), T(f => {
        f.h = l => l.translateSelf(0, Ya(1 - 5 * z()) * $a(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
        W(I(), p(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(0.7, 0.7, 0.7, 0.2));
        W(O(G(I(), t(3, 1.4, 2.7)), G(I(), t(1.2, 8, 1.2)),), p(-33, -3, 55), S(0.7, 0.7, 0.7, 0.2),);
      }), T(f => {
        f.h = l => l.translateSelf(0, 0, Ya(1 - 5 * z()) * $a(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
        W(O(G(I(), p(-27, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2),), G(I(), p(-27, -3, 55).scale(1, 3), S(0.9, 0.9, 0.9, 0.2),),),);
        W(I(), p(-39, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2));
      }), T(f => {
        f.h = l => l.translateSelf(0, -6.5 * h[4].i);
        W(I(6), p(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), S(0.7, 0.7, 0.7, 0.4),);
      }), Ib(p(-55, -1.1, 46).rotate(0, 90)), W(I(6), p(-61.3, -2.4, 49).scale(3, 1, 5), S(0.4, 0.6, 0.6, 0.3)), W(I(7), p(-57, -2.6, 46).scale(4, 1, 4), S(0.8, 0.8, 0.8, 0.3)), [...G(I(), p(0, -3).scale(11, 1.4, 3), S(0.9, 0.9, 0.9, 0.2)), ...O(G(I(6), lb(90).scale(6, 8, 6), S(0.3, 0.6, 0.6, 0.3)), G(I(4, 0, 0.01), p(0, 6).scale(12, 2, 0.75).rotate(0, 45), S(0.3, 0.6, 0.6, 0.3),), G(I(6), lb(90).scale(5, 12, 5), S(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => G(I(5), p(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), S(0.3, 0.6, 0.6, 0.3),)),),]), A = (W(U, p(-53, 0, 55)), T(f => {
        f.h = l => l.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + wa, 0,);
        W(U);
      }, 2), W(I(), p(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(0.7, 0.7, 0.7, 0.2),), W(I(3, 0, -0.5), p(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(0.8, 0.8, 0.8, 0.2),), W(O(Bb(G(I(), p(-100, -2.5, 55).scale(8, 1, 8), S(0.8, 0.8, 0.8, 0.2),), G(I(), p(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(0.8, 0.8, 0.8, 0.2),), G(I(), p(-100, -2.6, 70).scale(3, 1.1, 7), S(0.8, 0.8, 0.8, 0.2),), G(I(), p(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(0.8, 0.8, 0.8, 0.2),), G(I(6), 
      p(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(0.6, 0.6, 0.6, 0.3),), G(I(), p(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(0.8, 0.8, 0.8, 0.2),), G(I(), p(-100, 0.42, 92).scale(3, 1.1, 4.1), S(0.8, 0.8, 0.8, 0.2),),), G(I(8), p(-100, -1, 55).scale(7, 0.9, 7), S(0.3, 0.3, 0.3, 0.4),), G(I(8), p(-100, -2, 55).scale(4, 0.3, 4), S(0.4, 0.4, 0.4, 0.5),), G(I(8), p(-100, -3, 55).scale(0.6, 1, 0.6), S(0.4, 0.4, 0.4, 0.5),),),), Jb(p(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), Jb(p(-89, 0.2, 80), [0, 0, 6,]), W(O(G(I(), p(-100, 1, 63).scale(7.5, 4), S(0.5, 0.5, 0.5, 0.4)), G(I(), p(-100, 0, 70).scale(2, 2, 10), S(0.5, 0.5, 0.5, 0.4),), G(I(20, 1), p(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(0.5, 0.5, 0.5, 0.4),),),), T(f => {
        f.h = l => l.translateSelf(-99.7, -1.9, 63.5).scale(1, Ya(1.1 - h[6].g), 1);
        W(M);
      }), Ia.map(({x:f, z:l}) => {
        W(I(6), p(7 * f - 100, -3, 7 * l + 55).scale(1, 8.1), S(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(w => W(I(6), p(7 * f - 100, w, 7 * l + 55).scale(1.3, 0.5, 1.3), S(0.4, 0.2, 0.2, 0.8),));
      }), Sa(7, f => {
        W(I((23 * f + 1) % 5 + 5, 0, 0.55), p(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), S(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), W(I(), p(-87, -9.5, 24).scale(7, 1, 3), S(0.4, 0.5, 0.6, 0.4)), W(I(4), p(-86, -9.2, 27).scale(5, 1, 5), S(0.5, 0.6, 0.7, 0.3)), W(I(12, 1), p(-86, -9, 31).scale(1.5, 1, 1.5), S(0.3, 0.3, 0.4, 0.1)), Ib(p(-86, -7.5, 31)), T(f => {
        f.h = l => l.translateSelf(0, 3.5 * (1 - Wa(h[6].g, h[7].g)) + $a(h[7].i, h[6].i) * Math.sin(c) * 5,);
        [0, 12, 24,].map(l => W(I(), p(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.2, 0.5, 0.6, 0.2),));
      }), T(f => {
        f.h = l => l.translateSelf(0, $a(h[7].i, h[6].i) * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * $a(h[7].i, h[6].i),);
        [6, 18,].map(l => W(I(), p(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), S(0.1, 0.4, 0.5, 0.2),));
      }), W(O(Bb(G(I(5), p(0, 0, -7).scale(2, 1.2, 2), S(0.2, 0.4, 0.7, 0.3),), G(I(5), t(9, 1.2, 9), S(0, 0.2, 0.3, 0.5)), G(I(), t(11, 1, 13), S(0.3, 0.4, 0.6, 0.3)),), G(I(5), t(5.4, 5, 5.4), S(0, 0.2, 0.3, 0.5)),), p(-38.9, -11.3, 17),), Ib(p(-38.9, -9.6, 10)), T(f => {
        f.h = l => l.translateSelf(0, -7.3 * h[7].i);
        W(O(Bb(G(I(5), p(0, 2).scale(5, 7, 5).skewY(8), S(0.2, 0.4, 0.5, 0.5),), G(I(5), p(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(0.25, 0.35, 0.5, 0.5),), G(I(5), p(0, 9).scale(0.6, 7, 0.6).skewY(8), S(0.35, 0.3, 0.5, 0.5),),), G(I(5), t(4, 8, 4), S(0.2, 0.4, 0.5, 0.5)), G(I(5), p(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(0.2, 0.4, 0.5, 0.5),),), p(-38.9, -11.3, 17),);
        Jb(p(-39.1, -0.6, 17).rotate(11), ...ob(15).map(({x:l, z:w}) => [3 * l, 3 * w, 1.2,]),);
      }), Ia.map(({x:f, z:l}) => {
        W(I(14, 1), p(9 * f - 38.9, -7.3, 11 * l + 17).scale(1, 4), S(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(w => W(I(17, 1), p(9 * f - 38.9, w - 11.3, 11 * l + 17).scale(1.5, 0.5, 1.5), S(0.6, 0.6, 0.6, 0.3),));
      }), W(O(Bb(G(I(6), p(0, 0, -36).scale(15, 1.2, 15), S(0.7, 0.7, 0.7, 0.3),), G(I(), p(0, 0, -18).scale(4, 1.2, 6), S(0.45, 0.4, 0.6, 0.3),),), ...Sa(6, f => Sa(6, l => G(I(6), p(4.6 * l - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * l)).scale(2, 5, 2), S(0.7, 0.7, 0.7, 0.3),))).flat(),), p(-38.9, -11.3, 17),), Jb(p(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), W(I(5), p(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), S(0.8, 0.1, 0.25, 0.4),), Ib(p(-84, -0.5, 85).rotate(0, 
      45)), T(f => {
        f.h = l => x(l, -123, 1.4, 55 + -65 * za);
        W(F);
        Ib(p(0, -3, -4).rotate(0, 180));
      }), O(G(I(), p(0, -0.5, 1).scale(1.15, 1.2, 6.5), S(0.25, 0.25, 0.35, 0.3),), G(I(3), p(0, 0, -5.5).scale(3, 2), S(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => G(I(), p(f, -0.5, 1).scale(0.14, 0.3, 6.5), S(0.7, 0.2, 0, 0.3),)),));
      T(f => {
        f.h = l => l.translateSelf(0, -2, $a(h[10].g, h[11].g) * Xa(Math.sin(1.1 * c)) * -8.5 + 10);
        Sa(2, l => W(A, p(9 * l - 110 + (1 & l), 1.7, -12)));
      });
      T(f => {
        f.h = l => l.translateSelf(0, -2, $a(h[10].g, h[11].g) * Xa(Math.sin(2.1 * c)) * -8.5 + 10);
        Sa(2, l => W(A, p(9 * (l + 2) - 110 + (1 & l), 1.7, -12)));
      });
      T(f => {
        f.h = l => l.translateSelf(0, -2, -8.5 * Wa((1 - h[10].g) * (1 - $a(h[10].g, h[11].g)), $a(h[10].g, h[11].g) * Xa(Math.sin(1.5 * c)),) + 10,);
        Sa(3, l => W(A, p(9 * l - 106, 1.7, -12)));
      });
      W(O(Bb(G(I(), p(26.5, -1.6, 10).scale(20, 2.08, 3)), G(I(), p(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...Sa(4, f => G(I(), p(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...Sa(3, f => G(I(), p(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), p(-123, 0, -12), S(0.5, 0.5, 0.6, 0.2),);
      Ib(p(-116, -1.4, -18).rotate(0, 180));
      W(I(), p(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(0.8, 0.8, 0.8, 0.2),);
      W(I(6), p(-116, -2.6, -16.5).scale(3.2, 0.8, 3), S(0.6, 0.5, 0.7, 0.2));
      W(I(), p(-115.5, -17, -12).scale(0.5, 15, 2.2), S(0.6, 0.6, 0.6, 0.3));
      W(I(8), p(-114, -17, -2).scale(2, 15, 2), S(0.6, 0.6, 0.6, 0.3));
      W(I(8), p(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, 0.3));
      W(I(), p(-77, -17, -50.5).scale(2.2, 15, 0.5), S(0.6, 0.6, 0.6, 0.3));
      Sa(3, f => {
        W(v(16), p(12 * f - 109, -9, -12), S(0.6, 0.6, 0.6, 0.3));
        W(v(16), p(-77, -9, -12 * f - 20).rotate(0, 90), S(0.6, 0.6, 0.6, 0.3),);
      });
      W(O(G(I(12), p(-77, -14.5, -12).scale(4, 17.5, 4), S(0.7, 0.7, 0.7, 0.2),), G(I(), p(-79, 0.1, -12).scale(3.5, 2, 1.3), S(0.4, 0.5, 0.6, 0.2),), G(I(), p(-77, 0.1, -14).scale(1.5, 2, 2), S(0.4, 0.5, 0.6, 0.2),), G(I(12), p(-77, 3.1, -12).scale(3, 5, 3), S(0.4, 0.5, 0.6, 0.2),),),);
      W(I(), p(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(0.6, 0.6, 0.6, 0.3),);
      W(I(9), p(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(0.5, 0.5, 0.5, 0.3));
      W(O(G(I(), p(-93, -5.8, -40).scale(9, 1, 5), S(0.8, 0.8, 0.8, 0.1),), G(I(9), p(-98, -5.8, -40).scale(3, 8, 3), S(0.7, 0.7, 0.7, 0.2),),),);
      Ib(p(-98, -4.4, -40).rotate(0, 90));
      Jb(p(-115, 0.2, -12), [0, 0, 3.5,]);
      Jb(p(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      W(O(Bb(G(I(6, 0, 0, 0.6), p(-100, 0.7, 105.5).scale(8, 1, 11), S(0.7, 0.7, 0.7, 0.2),), G(I(), p(-101.5, 0.7, 93.5).scale(10.5, 1, 2), S(0.7, 0.7, 0.7, 0.2),),), G(I(5), p(-100, 0.7, 113).scale(4, 3, 4), S(0.7, 0.7, 0.7, 0.2),),),);
      Sa(4, f => T(l => {
        l.h = w => {
          const y = $a(h[8].i, h[12].i);
          w.translateSelf((2 < f ? 2 * (1 - y) + y : 0) - 100, y * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Wa(y, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        W(I(6), p(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), S(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      T(f => {
        f.h = l => {
          const w = $a(h[8].i, h[12].i);
          l.translateSelf(2.5 * (1 - w) - 139.7, -3 * (1 - h[8].g) + w * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * w + 3), 0);
        };
        W(O(G(I(10), t(6, 2, 6), S(0.1, 0.6, 0.5, 0.3)), G(I(10), t(3.3, 6, 3.3), S(0.1, 0.6, 0.5, 0.5)),),);
        W(I(15, 1), p(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(0.4, 0.4, 0.4, 0.3),);
        W(I(10), p(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(0.3, 0.8, 0.7, 0.3));
        W(I(5), p(-7.5).rotate(0, 90).scale(1, 3), S(0.5, 0.5, 0.5, 0.5));
        Ib(p(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(l => W(q, lb(90 * l, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, 0.8, 0.2),));
        Jb(p(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      T(f => {
        f.h = l => l.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        W(M);
      });
      [-1, 1,].map(f => {
        [7.2, 1.5,].map(l => W(I(15, 1), p(-7.5 * f - 100, l + 0.7, 96).scale(1.1, 0.5, 1.1), S(0.5, 0.24, 0.2, 0.4),));
        W(q, p(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), S(1, 1, 0.8),);
        W(I(12, 1), p(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), S(0.6, 0.24, 0.2, 0.5),);
        W(O(G(I(), p(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), S(0.5, 0.5, 0.5, 0.4),), G(I(), t(3, 3, 10), S(0.6, 0.24, 0.2, 0.5)), G(I(28, 1), p(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(0.6, 0.24, 0.2, 0.5),), G(I(5), p(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(0.6, 0.24, 0.2, 0.5),), G(I(5), p(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), S(0.6, 0.24, 0.2, 0.5),),), p(f - 100, 0.7, 97),);
      });
      W(O(G(I(), p(-82.07, 0.8, 106).scale(11, 0.9, 2.2), S(0.7, 0.7, 0.7, 0.1),), G(I(45, 1), p(-81, 0.7, 106).scale3d(7.7), S(0.7, 0.7, 0.7, 0.1),),),);
      T(f => {
        f.h = l => l.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
        W(O(G(I(45, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)), G(I(), p(0, 0, -5.5).scale(1.5, 3, 2.7), S(0.45, 0.45, 0.45, 0.2),),),);
        W(I(8), p(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(0.7, 0.7, 0.7, 0.1));
        W(I(5), p(0, 2).scale(1, 2), S(0.3, 0.3, 0.3, 0.2));
        Jb(p(0, 3), ...ob(14).map(({x:l, z:w}) => [5.6 * l, 5.6 * w, 2,]),);
      });
      T(f => {
        f.h = l => l.translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
        [-1, 1,].map(l => W(q, lb(0, 90).translate(-5 * l, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * l + 90), S(1, 1, 0.8),));
        W(O(G(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), G(I(), t(9, 5, 2), S(0.3, 0, 0, 0.3)),),);
        W(G(I(28, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        W(G(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      T(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
        W(O(G(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), G(I(), p(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)), G(I(), p(0, 0, 7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),),);
        W(G(I(28, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        W(G(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      T(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
        W(O(G(I(28, 1), p(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), G(I(), p(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)), G(I(), p(0, 0, -7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),),);
        W(G(I(28, 1), t(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)));
        W(G(I(5), p(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      W(I(), p(-58, 1, 106).scale(2, 0.65, 2), S(0.7, 0.7, 0.7, 0.2));
      W(I(), p(-50.7, 1, 99).scale(2, 0.65, 1), S(0.7, 0.7, 0.7, 0.2));
      W(I(), p(-42, 0.4, 91).scale(5, 1, 2.5), S(0.7, 0.7, 0.7, 0.3));
      W(I(), p(-34.2, 0.4, 91).scale(3, 1, 3), S(0.7, 0.7, 0.7, 0.3));
      Ib(p(-34, 2.7, 96).rotate(-12, 0));
      W(I(5), p(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), S(0.2, 0.5, 0.5, 0.6),);
      [S(0.1, 0.55, 0.45, 0.2), S(0.2, 0.5, 0.5, 0.3), S(0.3, 0.45, 0.55, 0.4),].map((f, l) => T(w => {
        w.h = y => {
          y.translateSelf(0, (1 - h[13].i) * (1 - h[14].i) * (l ? 0 : 3) + $a(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * l) * 4,);
        };
        W(I(), p(-23.5, 0.5, 91 + 6.8 * l).scale(1 === l ? 2 : 3.3, 1, 3.3), f);
        2 === l && W(I(), p(-29.1, 0.4, 91).scale(2.1, 1, 3), S(0.7, 0.7, 0.7, 0.3));
        1 === l && W(I(), p(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), S(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => W(q, p(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), S(1, 1, 0.8),));
      Sa(3, f => W(v(24.7 - 0.7 * (1 & f)), p(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? S(0.5, 0.5, 0.5, 0.3) : S(0.35, 0.35, 0.35, 0.5),),);
      W(O(G(I(6, 0, 0, 0.3), p(0, -0.92, 95).scale(14, 2, 14), S(0.8, 0.8, 0.8, 0.2),), G(I(5), p(0, 0, 95).scale3d(6), S(0.3, 0.3, 0.3, 0.5)),),);
      Ib(p(0, 1.7, 82).rotate(0, 180));
      W(I(5), p(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(0.5, 0.3, 0.3, 0.4),);
      W(I(6), p(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(0.5, 0.6, 0.7, 0.3),);
      W(I(), p(0, 16, 129).scale(1.5, 1, 2), S(0.5, 0.6, 0.7, 0.3));
      W(I(7), p(0, 16.2, 133).scale(5, 1, 5), S(0.4, 0.5, 0.6, 0.4));
      W(O(Bb(G(I(), p(0, 16, 110.5).scale(12, 1, 3), S(0.5, 0.3, 0.3, 0.4),), G(I(), p(0, 16, 111).scale(3, 1, 3.8), S(0.5, 0.3, 0.3, 0.4),),), G(I(5), p(0, 16, 103.5).scale(5.5, 5, 5.5), S(0.5, 0.3, 0.3, 0.4),),),);
      T(f => {
        f.h = l => l.translateSelf(-2 * Math.sin(c)).rotate(25 * Math.sin(c));
        W(I(3), p(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), S(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(l => {
          W(I(6), p(0, 16, l + 95).scale(3, 1, 2.3).rotate(0, 90), S(0.7, 0.7, 0.7, 0.4),);
          W(I(), p(0, 6.2, l + 95).scale(0.5, 11, 0.5), S(0.5, 0.3, 0.3, 0.4),);
        });
      });
      T(f => {
        f.h = l => {
          const w = $a($a((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          l.translateSelf(0, 16 * w, 8.5 * Ya(2 * w - 1) + 95);
        };
        W(I(5), t(5, 1.1, 5), S(0.5, 0.3, 0.3, 0.4));
        W(I(5), t(5.5, 0.9, 5.5), S(0.25, 0.25, 0.25, 0.4));
        Ib(p(0, 1.5, -1).rotate(0, 180));
      });
      Jb(p(0, 3, 95), ...ob(9).map(({x:f, z:l}) => [9 * f, 9 * l, 4,]),);
      Jb(p(0, 19, 134), [0, 0, 3.5,]);
    });
    T(() => {
      W(qb(20), p(0, 1).scale(0.5, 0.5, 0.5), S(1, 0.3, 0.4));
      W(qb(30), t(0.7, 0.8, 0.55), S(1, 0.3, 0.4));
      W(I(), p(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), S(0.3, 0.3, 0.3));
      [-1, 1,].map(k => {
        W(q, lb(0, 0 < k ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), S(1, 1, 0.8),);
        W(G(O(I(15, 1), G(I(), p(0, 0, 1).scale(2, 2, 0.5)),), lb(-90, 0).scale(0.1, 0.05, 0.1), S(0.3, 0.3, 0.3),), p(0.2 * k, 1.2, 0.4).rotate(0, 20 * k, 20 * k),);
        T(() => {
          W(I(20, 1), p(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), S(1, 0.3, 0.4));
        });
      });
    });
    T(() => {
      W(I(6, 1), t(0.13, 1.4, 0.13), S(0.3, 0.3, 0.5, 0.1));
      W(I(10), p(0, 1).scale(0.21, 0.3, 0.21), S(1, 0.5, 0.2));
      W(I(3), p(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), S(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    T(() => {
      W(I(6).slice(0, -1), t(0.77, 1, 0.77), S(1, 0.3, 0.5));
    }, 0);
    T(() => {
      W(qb(30, 24, (k, x, v) => {
        const z = x / 24, F = k * Math.PI * 2 / 30, M = Math.sin(z ** 0.6 * Math.PI / 2);
        k = z * z * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 < x ? {x:v.D = 0, y:-0.5, z:0,} : {x:Math.cos(F) * M, y:Math.cos(z * Math.PI) - z - k, z:Math.sin(F) * M + Math.sin(k * Math.PI * 2) / 4,};
      }), t(0.7, 0.7, 0.7), S(1, 1, 1),);
      [-1, 1,].map(k => W(qb(12), p(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

