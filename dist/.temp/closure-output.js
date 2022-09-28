let ba, ea, ha, ja, ka, la, ma, na, pa, qa = 0, ra = 0, a = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 1, d = 0.066;
const e = [], h = [], Ma = [], Na = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Oa = {x:0, y:0, z:0,};
var Pa = 0, Qa = 180;
const m = (c, b) => Array.from(Array(c), (g, k) => b(k)), Ra = Math.PI / 180, Sa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ta = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), 
".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ua = {x:0, y:0, z:0,}, Wa = (c, 
b = 0, g = 1) => c < b ? b : g < c ? g : c, Xa = (c, b) => n(c) > b ? c : 0, t = (c, b, g) => (0 < g ? 1 > g ? c + (b - c) * g : b : c) || 0, Ya = (c, b) => (c = Wa(c), t(c, 1 - c, b)), Za = c => Math.atan2(Math.sin(c *= Ra), Math.cos(c)) / Ra, $a = (c, b, g) => c + (2 * (b = (b - c) % 360) % 360 - b) * Wa(g) || 0, ab = ({x:c, y:b, z:g}) => Math.hypot(c - Oa.x, b - Oa.y, g - Oa.z), bb = ({x:c, y:b, z:g}, k) => c * k.x + b * k.y + g * k.z, cb = c => {
  let b, g = 0, k = 0, p = 0, l = c.at(-1);
  for (b of c) {
    g += (l.y - b.y) * (l.z + b.z), k += (l.z - b.z) * (l.x + b.x), p += (l.x - b.x) * (l.y + b.y), l = b;
  }
  return b = Math.hypot(g, k, p), g /= b, k /= b, p /= b, {x:g, y:k, z:p, w:g * l.x + k * l.y + p * l.z,};
}, eb = (c, b = db, g = 0,) => (g *= 16, b[g++] = c.m11, b[g++] = c.m12, b[g++] = c.m13, b[g++] = c.m14, b[g++] = c.m21, b[g++] = c.m22, b[g++] = c.m23, b[g++] = c.m24, b[g++] = c.m31, b[g++] = c.m32, b[g++] = c.m33, b[g++] = c.m34, b[g++] = c.m41, b[g++] = c.m42, b[g++] = c.m43, b[g] = c.m44, b), fb = (c, b, g) => (c.D = g, c.A = b, c), gb = (c, b, g = c.A) => fb(c.map(k => {
  let p, l;
  return {x:k, y:p, z:l} = k, {x:k, y:p, z:l} = b.transformPoint({x:k, y:p, z:l,}), {x:k, y:p, z:l,};
}), g, c.D,), H = (c, b, g) => c.map(k => gb(k, b, g)), hb = (c, b = 0) => m(c, g => {
  const k = Math.cos(2 * Math.PI * g / c);
  return {x:Math.sin(2 * Math.PI * g / c), y:0, z:0.01 > n(k) ? k : 0 > k ? k - b : k + b,};
}), ib = (c, b, g) => c.map((k, p, {length:l}) => fb([k, b[l - p - 1], b[l - (p + 1) % l - 1], c[(p + 1) % l],], c.A, g,)), J = (c, b, g = 0, k,) => (c = c ? hb(c, k) : Sa, k = gb(c, I(0, 1).scale3d(0 < g ? g : 1)), c = gb(c, I(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...ib(c, k, b), k, c,]), jb = (c, b = c, g = (k, p) => (p *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / c) * Math.sin(p), y:Math.cos(p), z:Math.sin(k) * Math.sin(p),})) => {
  const k = [];
  for (let p = 0; c > p; p++) {
    for (let l = 0; b > l; l++) {
      const v = fb([], 0, 1);
      k.push(v);
      v.push(g(p, l, v));
      l && v.push(g((p + 1) % c, l, v));
      b - 1 > l && v.push(g((p + 1) % c, l + 1 % b, v));
      v.push(g(p, l + 1 % b, v));
    }
  }
  return k;
}, kb = (c, b) => {
  var g, k, p, l = b.C;
  for (var v = 0; l.length > v; ++v) {
    if (-0.00008 > (g = bb(c, l[v]) - c.w) ? p = b : 8e-5 < g && (k = b), p && k) {
      k = [];
      p = [];
      l = b.C;
      v = b.B;
      let u = l.at(-1), w = bb(c, u) - c.w;
      for (const y of l) {
        g = bb(c, y) - c.w, 8e-5 > w && p.push(u), -0.00008 < w && k.push(u), (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g) && (w /= g - w, u = {x:u.x + (u.x - y.x) * w, y:u.y + (u.y - y.y) * w, z:u.z + (u.z - y.z) * w,}, k.push(u), p.push(u)), u = y, w = g;
      }
      return {o:2 < k.length && {C:fb(k, l.A, l.D), B:v, u:b,}, m:2 < p.length && {C:fb(p, l.A, l.D), B:v, u:b,},};
    }
  }
  return {o:k, m:p,};
}, lb = (c, b, g = cb(b.C)) => {
  let k, p, l;
  return c ? ({o:k, m:p} = kb(c, b), k || p || c.s.push(b), k && (c.o = lb(c.o, k, g)), p && (c.m = lb(c.m, p, g))) : ({x:k, y:p, z:g, w:l} = g, c = {x:k, y:p, z:g, w:l, s:[b,], o:0, m:0,}), c;
}, mb = (c, b, g) => {
  const k = [], p = (l, v) => {
    let {o:u, m:w} = kb(l, v);
    u || w || (0 < g * bb(l, b) ? u = v : w = v);
    u && (l.o ? p(l.o, u) : k.push(u));
    w && l.m && p(l.m, w);
  };
  for (const l of b.s) {
    p(c, l);
  }
  return k;
}, pb = (c, b) => c && (b(c), pb(c.o, b), pb(c.m, b)), qb = c => c.length ? c.reduce((b, g) => lb(b, {C:g, B:0, u:0,}), 0) : c, rb = c => (pb(c, b => {
  const g = b.m;
  b.m = b.o;
  b.o = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const k of b.s) {
    k.B = !k.B;
  }
}), c), sb = (...c) => c.reduce((b, g) => {
  const k = [];
  if (b = qb(b), g) {
    g = qb(g);
    pb(b, p => p.s = mb(g, p, 1));
    pb(g, p => k.push([p, mb(b, p, -1),]));
    for (let [p, l] of k) {
      for (const v of l) {
        lb(b, v, p);
      }
    }
  }
  return b;
}), P = (...c) => {
  let b;
  const g = l => {
    let v;
    return l.u && ((v = k.get(l.u)) ? (p.delete(v), l = g(l.u)) : k.set(l.u, l)), l;
  }, k = new Map(), p = new Map();
  return [c, ...b] = [...c,], c = rb(sb(rb(qb(c)), ...b)), pb(c, l => {
    for (const v of l.s) {
      p.set(g(v), v.B);
    }
  }), Array.from(p, ([{C:l}, v]) => {
    const u = l.map(({x:w, y, z:C}) => ({x:w, y, z:C,}));
    return fb(v ? u.reverse() : u, l.A, l.D);
  });
}, vb = () => {
  Ba = Ya(h[12].g, h[13].g);
  xa = t(t(xa, 0, 1 - Math.exp(-1 * d)), Za(xa + 60 * d), h[5].g - h[6].i,);
  va = t(t(va, 0, 1 - Math.exp(-5 * d)), Za(va + 56 * d), Ba,);
  wa = t(t(wa, 0, 1 - Math.exp(-4 * d)), Za(wa + 48 * d), Ba,);
  var c = 0.2 + 0.3 * n(2 * h[9].i - 1);
  Aa = t(Aa, h[9].i, 1 - Math.exp(-c * d));
  za = t(za, ya ? t(za, -9, 1 - Math.exp(-1.5 * d)) : Wa(a / 3), 1 - Math.exp(-1 * d));
  Ha && a > Ha && (Ha = 0, h4.innerHTML = "");
  h[0].l && 0.8 < h[0].g && (13 > qa ? (1 / 0 > Ha && (Ha = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0) : ya || (1 / 0 > Ha && (Ha = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ya = 1));
  for (const b of e) {
    b.h && (b.j = b.h());
  }
  for (const b of h) {
    b.h();
  }
  for (const b of Ma) {
    b.h();
  }
}, wb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][qa = Ma.reduce((c, {l:b}) => c + b, 0)] + " / XIII";
}, xb = () => {
  localStorage.I = JSON.stringify([h.map(({l:c}) => c), Ma.map(({l:c}) => c), ua, a, Aa,]);
}, yb = (c, b, g = la / ka * 1.732051, k = 1.732051) => [g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + c) / (c - b), -1, 0, 0, 2 * b * c / (c - b), 0,], Bb = () => {
  let c, b, g, k, p, l, v, u, w, y, C, O, A, f, q = !0;
  const r = [], x = () => {
    ba || !q ? zb.disconnect() : zb.connect(Ab.destination);
    b4.innerHTML = "Music: " + q;
  }, D = () => {
    k = u = void 0;
    r.length = ha = O = Da = A = f = 0;
    hC.width = ka = innerWidth;
    hC.height = la = innerHeight;
    document.hidden && L(!0);
  }, L = (z, B = 0) => {
    if (ba !== z) {
      ba = z;
      ja = B;
      D();
      wb();
      document.body.className = z ? "l m" : "l";
      try {
        z ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), zb.start());
      } catch {
      }
      x();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => L(!1);
  b2.onclick = () => L(!1, 1);
  b5.onclick = () => L(!0);
  b4.onclick = () => {
    q = !q;
    x();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.I = "", location.reload());
  };
  onclick = z => {
    if (!ba && (z.target === hC && (ha = 1), ja)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = z => {
    let B;
    z.repeat || (B = !!z.type[5] && !0, z = {KeyA:1, ArrowLeft:1, KeyW:3, ArrowUp:3, KeyD:2, ArrowRight:2, KeyS:4, ArrowDown:4, KeyE:0, Space:0, Enter:0, Escape:5,}[z.code], (r[z] = B) && (0 === z && (ha = 1), 5 === z && L(!0)));
  };
  onmousemove = ({movementX:z, movementY:B}) => {
    ja && (z || B) && (Qa += 0.1 * z, Pa += 0.1 * B);
  };
  hC.ontouchstart = z => {
    if (!ba) {
      for (let {pageX:B, pageY:K, identifier:F} of z.changedTouches) {
        ja && B > hC.clientWidth / 2 ? void 0 === u && (w = 0, l = B, v = K, u = F, y = Qa, C = Pa) : void 0 === k && (p = 0, b = B, g = K, k = F);
      }
      c = ra;
    }
  };
  hC.ontouchmove = z => {
    if (!ba) {
      for (let {pageX:Y, pageY:E, identifier:G} of z.changedTouches) {
        var B, K, F, aa, ca;
        u === G && (Qa = y + (Y - l) / 2.3, Pa = C + (E - v) / 2.3, w = 1);
        k === G && (G = (b - Y) / 20, B = (g - E) / 20, K = n(G), F = n(B), aa = Math.atan2(B, G), ca = Wa(Math.hypot(B, G) - 0.5), A = 0.2 < K ? Math.cos(aa) * ca : 0, f = 0.2 < F ? Math.sin(aa) * ca : 0, (A || f) && (p = 1), 2 < K && (b = Y + 20 * (0 > G ? -1 : 1)), 2 < F && (g = E + 20 * (0 > B ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = z => {
    let B;
    document.activeElement === document.body && z.preventDefault();
    for (const K of z.changedTouches) {
      K.identifier === u ? (u = void 0, w || (B = 1), w = 0) : K.identifier === k ? (k = void 0, f = A = 0, p || (B = 1), p = 0) : B = 1;
    }
    z.target === hC && B && c && 0.02 < (z = ra - c) && 0.7 > z && (r[0] = !0);
  };
  ma = () => {
    let z = f + (r[3] ? 1 : 0) - (r[4] ? 1 : 0), B = A + (r[1] ? 1 : 0) - (r[2] ? 1 : 0), K = navigator.getGamepads()[0];
    if (K) {
      const F = Y => aa[Y]?.pressed || 0 < aa[Y]?.value ? 1 : 0, aa = K.buttons, ca = K.axes;
      K = F(3) || F(2) || F(1) || F(0);
      z += F(12) - F(13) - Xa(ca[1], 0.2);
      B += F(14) - F(15) - Xa(ca[0], 0.2);
      F(9) && L(!0);
      ja && (Pa += d * Xa(ca[3], 0.3) * 80, Qa += d * Xa(ca[2], 0.3) * 80);
      K && !O && (ha = 1);
      O = K;
    }
    Ca = Math.atan2(z, B);
    Da = Xa(Wa(Math.hypot(z, B)), 0.05);
  };
  document.onvisibilitychange = onblur = onresize = D;
  L(!0);
}, R = (c, b = 1) => {
  const g = na;
  b = {j:Cb, H:e.length, G:b, s:[],};
  return e.push(na = b), c(b), na = g, b;
}, S = (c, b = Cb, g) => na.s.push(...H(c, b, g)), Db = c => {
  const b = na, g = h.length, k = {l:0, g:0, i:0, u:b, h() {
    const p = k.l, l = k.g, v = k.i, u = b.j.multiply(c);
    k.J = u;
    3 > ab(u.transformPoint()) && ha && (0.3 > l || 0.7 < l) && (k.l = p ? 0 : 1, g && 1 / 0 > Ha && (Ha = a + 1, h4.innerHTML = "* click *"), ua = g, xb());
    k.g = t(l, p, 1 - Math.exp(-4 * d));
    k.i = t(v, p, 1 - Math.exp(-1 * d));
    k.j = u.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(k);
  S(J(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  S(J(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  S(J(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
}, Fb = (c, ...b) => {
  let g = -1, k = 0, p = 0, l = 0, v = 0, u = 0, w = 1, y = 3;
  const C = {l:0, h() {
    if (!C.l) {
      let aa, ca, Y, E, G, M, Q, N = 1, V = 1 / 0;
      for (const T of f) {
        var {x:z, z:B, w:K} = T;
        B = (z = Math.hypot(r - z, x - B)) - K;
        Q ||= z < K;
        0 < B && V > B && (V = B, q = T);
        N = Eb(N, z / K);
      }
      Q || ({x:aa, z:ca, w:Y} = q, E = r - aa, G = x - ca, M = Math.hypot(E, G), F = Math.atan2(-G, E), w && (p = (Math.random() - 0.5) * Math.PI / 2, y = Wa(y / (1 + Math.random()))), F += p, g = -Math.cos(F), k = Math.sin(F), 0.1 < M && (M = Eb(M, Y) / (M || 1), r = E * M + aa, x = G * M + ca));
      w = Q;
      y = t(y, 6 * (1 - N) + 3, 1 - Math.exp(-(N + 3) * d));
      F = r = t(r, r + g, 1 - Math.exp(-y * d));
      D = t(D, F, 1 - Math.exp(-y * d));
      F = x = t(x, x + k, 1 - Math.exp(-y * d));
      L = t(L, F, 1 - Math.exp(-y * d));
      l = $a(l, Math.atan2(D - v, L - u) / Ra - 180, 1 - Math.exp(-3 * d),);
      v = D;
      u = L;
      var F = (C.j = O.j.multiply(c.translate(D, 0, L).rotateSelf(0, l, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.6 > ab(F) && (C.l = 1, F = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][qa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      1 / 0 > Ha && (Ha = a + (qa && 12 > qa ? 5 : 7), h4.innerHTML = F), wb(), xb());
    }
    C.l && (C.j = e[2].j.translate(A % 4 * 1.2 - 1.7 + Math.sin(a + A) / 7, -2, 1.7 * (A / 4 | 0) - 5.5 + n(A % 4 - 2) + Math.cos(a / 1.5 + A) / 6,));
  },}, O = na, A = Ma.length, f = b.map(([z, B, K]) => ({x:z, z:B, w:K,}));
  let q = f[0], {x:r, z:x} = q, D = r, L = x;
  Ma.push(C);
}, Ib = (c, b, g, k) => {
  let p = 0, l = 0, v = 0, u = 1 / 0, w = -1 / 0, y = 1 / 0, C = -1 / 0, O = 1 / 0, A = -1 / 0;
  const f = 1.1 * (g - b), q = (new DOMMatrix(yb(b, g))).multiplySelf(c).invertSelf();
  return b = m(8, r => (r = q.transformPoint({x:4 & r ? 1 : -1, y:2 & r ? 1 : -1, z:1 & r ? 1 : -1,}), p -= r.x = (f * r.x | 0) / f / r.w, l -= r.y = (f * r.y | 0) / f / r.w, v -= r.z = (f * r.z | 0) / f / r.w, r)), g = Gb(298, 139).translateSelf(p / 8, l / 8, v / 8), gb(b, g).map(({x:r, y:x, z:D}) => {
    u = Eb(u, r);
    w = Hb(w, r);
    y = Eb(y, x);
    C = Hb(C, x);
    O = Eb(O, D);
    A = Hb(A, D);
  }), O *= 0 > O ? k : 1 / k, A *= 0 < A ? k : 1 / k, X(2 / (w - u), 2 / (C - y), 2 / (O - A)).translateSelf((w + u) / -2, (C + y) / -2, (O + A) / 2,).multiplySelf(g);
}, Jb = () => {
  let c, b, g, k, p, l, v, u, w, y, C, O, A, f, q, r, x, D = 1, L = 2, z = 2;
  const B = () => {
    let E = 0, G = 0, M = 0, Q = 0;
    k = 0;
    ca.fill(0);
    for (let V = 0; 31 > V; ++V) {
      let T = 0;
      const Ia = 512 * V;
      for (let da = 0; 128 > da; da++) {
        var N = Ia + 4 * da;
        let ia = (Y[N] + Y[1 + N]) / 255;
        N = Y[2 + N];
        14 < da && 114 > da && (T += ia);
        N && ia && (ia = ca[N] + 1, ca[N] = ia, E > ia || (E = ia, G = N));
      }
      3 > T && 5 < V && (M += V / 32);
      3 < T && (7 < V && (Q += V / 15), k = 1);
    }
    G && (k = 1);
    c = G || b;
    b = G;
    z = t(z, k ? 6.5 : -20 > Ua.y ? 11 : 8, 1 - Math.exp(-4 * d));
    Ua.y += Q / 41 - (k || z) * M / 41 * z * d;
  }, K = () => {
    y = w = 0;
    for (let E = 32; 128 > E; E += 2) {
      let G = 0, M = 0, Q = 0, N = 0;
      const V = 512 * E;
      for (let T = 1 & E; 128 > T; T += 2) {
        const Ia = V + 4 * T;
        let da = V + 4 * (127 - T);
        const ia = Y[Ia] / 255, Va = Y[1 + da] / 255, oa = 1 - n(T / 63.5 - 1);
        10 < T && 118 > T && (G = Hb(Hb(ia * oa, ia * Y[da] / 255), G), M = Hb(Hb(Va * oa, Va * Y[1 + Ia] / 255), M));
        (54 > T || 74 < T) && 1e-3 < (da = (1 - oa) * Hb(ia, Va) / 3) && (64 > T && da > Q ? Q = da : 64 < T && da > N && (N = da));
      }
      n(N - Q) > n(w) && (w = N - Q);
      n(M - G) > n(y) && (y = M - G);
    }
  }, F = () => L ? h[ua].u.j : g && 1 === e[g].G && e[g].j || Cb, aa = (E, G, M, Q) => t(E, G, D || (Wa(n(G - E) ** 0.9 - M) + 1 / 7) * (1 - Math.exp(-(1.5 * Q) * d))), ca = new Int32Array(256), Y = new Uint8Array(65536);
  pa = () => {
    Z.fa7();
    Z.r9r(0, 0, 128, 128, 6408, 5121, Y);
    Z.iay(36008, [36064, 36096,]);
    Z.iay(36009, [36064, 36096,]);
    NO_INLINE(K)();
    NO_INLINE(B)();
    var E = Wa(1 - 5 * Hb(n(w), n(y))), G = ja ? Qa * Ra : Math.PI;
    E = (A = t(A, k * E * Wa(2 * Da) * 7, 1 - Math.exp(-(k ? 0.1 < E ? 10 : 5 + 2 * Da : 1) * d)), C = t(C, 0, 1 - Math.exp(-(k ? 8 : 4) * d)), w += d * ((c ? 0 : E * C) - Math.cos(Ca + G) * Da * A), O = t(O, 0, 1 - Math.exp(-(k ? 8 : 4) * d)), y += d * ((c ? 0 : E * O) - Math.sin(Ca + G) * Da * A), F());
    var {x:M, y:Q, z:G} = 1 < L ? h[ua].J.transformPoint({x:0, y:ua || 0.9 < za ? 15 : 1, z:-2.4,}) : ((M = (G = E).inverse()).m41 = M.m42 = M.m43 = 0, Q = M.transformPoint({x:w, z:y, w:0,}), Ua.x += Q.x, Ua.z += Q.z, G.transformPoint(Ua));
    if (c && (C = (M - Oa.x) / d, O = (G - Oa.z) / d), Oa.x = M, Oa.y = Q, Oa.z = G, (L = L && (k && c ? 0 : 1)) || c !== g) {
      g = c;
      const N = (E = F()).inverse().transformPoint(Oa);
      Ua.x = N.x;
      Ua.y = N.y;
      Ua.z = N.z;
    }
    u = t(u, Ba * (27 < c && 32 > c), 1 - Math.exp(-2 * d));
    Q < (-25 > M || 109 > G ? -25 : -9) && (C = O = A = 0, L = 2);
    1 === c && (h[9].l = -15 > M && 0 > G ? 1 : 0);
    f = t(t(f, Q, 1 - Math.exp(-2 * d)), Q, L || 8 * n(f - Q));
    r = aa(r, f, 2, 1);
    q = aa(q, M, 0.5, 1);
    x = aa(x, G, 0.5, 1);
    ja ? (E = L + (1 - Math.exp(-18 * d)), Ea = t(Ea, M, E), Fa = t(Fa, f + 1.5, E), Ga = t(Ga, G, E), Qa = Za(Qa)) : (Fa = aa(Fa, Hb(r + Wa((-60 - G) / 8, 0, 20) + 13 + 9 * u, 6,), 4, 2,), Ga = aa(Ga, x + -18 + 5 * u, 1, 2 + u,), Ea = aa(Ea, q, 1, 2 + u,), Q = Eb(4, -n(x - Ga)), E = q - Ea, Qa = $a(Qa, 90 - Za(Math.atan2(Q, E) / Ra), D + (1 - Math.exp(-6 * d)),), Pa = $a(Pa, 90 - Math.atan2(Math.hypot(Q, E), Fa - r) / Ra, D + (1 - Math.exp(-6 * d)),));
    Pa = Wa(Pa, -87, 87);
    l = $a(l, p, 1 - Math.exp(-8 * d));
    v = t(v, Da, 1 - Math.exp(-10 * d));
    Da && (p = 90 - Ca / Ra);
    D = 0;
    e[37].j = I(M, f + 0.124, G).rotateSelf(0, l);
    for (E = 0; 2 > E; ++E) {
      e[38 + E].j = e[37].j.translate(0, v * Wa(0.45 * Math.sin(9.1 * a + Math.PI * (E - 1) - Math.PI / 2)),).rotateSelf(v * Math.sin(9.1 * a + Math.PI * (E - 1)) * 0.25 / Ra, 0);
    }
  };
}, Kb = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b), Pb = (c, b) => {
  const g = {}, k = Z.c1h();
  return Z.abz(k, c), Z.abz(k, Kb(b, 35632)), Z.l8l(k), p => p ? g[p] || (g[p] = Z.gan(k, p)) : Z.u7y(k);
}, Rb = (c, b, g, k) => {
  if (ba) {
    g = Gb(0, 40 * Math.sin(ra) - 70);
    for (var p of [37, 38, 39,]) {
      eb(g, Qb, p - 1);
    }
    Z.uae(c, !1, Qb);
    Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
  } else {
    for (p = 0; e.length > p; ++p) {
      e[p].G && eb(e[p].j, Qb, p - 1);
    }
    Z.uae(c, !1, Qb);
    Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
    for (b = 0; 13 > b; ++b) {
      eb(Ma[b].j, Qb, b);
    }
    for (b = 0; h.length > b; ++b) {
      eb(h[b].j, Qb, b + 13), k || (Qb[16 * (b + 13) + 15] = 1 - h[b].g);
    }
    Z.uae(c, !1, Qb);
    Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,);
    Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Sb = c => {
  h4.innerHTML += ".";
  setTimeout(c);
}, Tb = c => Math.sin(c * Math.PI * 2), Ub = c => 0.5 > c % 1 ? 1 : -1, Vb = c => c % 1 * 2 - 1, Wb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c, cc = c => {
  let b = 0;
  const g = () => {
    let v = 0;
    const u = N => {
      let V, T, Ia, da = 0, ia = 0;
      const Va = [], oa = new Int32Array(768 * N), Xb = 2 ** (B - 9) / N, Yb = Math.PI * 2 ** (Y - 8) / N, tb = G * N & -2;
      for (let nb = 0; 11 >= nb; ++nb) {
        for (let ob = 0, Lb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + nb]; 32 > ob; ++ob) {
          const Mb = (32 * nb + ob) * N;
          for (var Ja = 0; 4 > Ja; ++Ja) {
            if (V = 0, Lb && (V = w[Lb - 1].charCodeAt(ob + 32 * Ja) - 40, V += 0 < V ? 106 : 0), V) {
              var fa;
              if (!(fa = Va[V])) {
                fa = V;
                let W = void 0, sa = void 0;
                var Nb = V;
                let Zb = 0, $b = 0;
                const ac = 2 > b ? Vb : Tb, bc = 2 > b ? 1 > b ? Ub : Wb : Tb, Ob = new Int32Array(x + D + Q);
                for (let Ka = 0, ub = 0; x + D + Q > Ka; ++Ka, ++ub) {
                  let La = 1;
                  x > Ka ? La = Ka / x : x + D > Ka || (La = (1 - (La = (Ka - x - D) / Q)) * 3 ** (-z / 16 * La));
                  0 > ub || (ub -= 4 * N, sa = 396e-5 * 2 ** ((Nb + C - 256) / 12), W = 396e-5 * 2 ** ((Nb + f - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                  Ob[Ka] = 80 * (ac(Zb += sa * La ** (O / 32)) * y + bc($b += W * La ** (q / 32)) * A + (r ? (2 * Math.random() - 1) * r : 0)) * La | 0;
                }
                fa = Va[fa] = Ob;
              }
              for (let W = 0, sa = 2 * Mb; fa.length > W; ++W, sa += 2) {
                oa[sa] += fa[W];
              }
            }
          }
          for (let W, sa = 0; N > sa; ++sa) {
            Ja = 0;
            fa = 2 * (Mb + sa);
            var ta = (((W = oa[fa]) || Ia) && (T = 308e-5 * K, 1 !== b && 4 !== b || (T *= Math.sin(Xb * fa * Math.PI * 2) * M / 512 + 0.5), T = 1.5 * Math.sin(T), da += T * ia, ta = (1 - F / 255) * (W - ia) - da, ia += T * ta, W = 4 === b ? ia : 3 === b ? ta : da, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= aa / 32, Ia = 1e-5 < W * W, ta = Math.sin(Yb * fa) * ca / 512 + 0.5, Ja = W * (1 - ta), W *= ta), fa < tb || (Ja += oa[1 + fa - tb] * E / 255, 
            W += oa[fa - tb] * E / 255), v + fa >> 1);
            p[ta] += (oa[fa] = Ja) / 65536;
            l[ta] += (oa[++fa] = W) / 65536;
          }
        }
      }
      v += 768 * N;
    }, w = Ta[b], [y, C, O, A, f, q, r, x, D, L, z, B, K, F, aa, ca, Y, E, G, M] = Na[b], Q = 4 * L ** 2;
    u(5513);
    u(4562);
    u(3891);
    Sb(5 > ++b ? g : c);
  }, k = Ab.createBuffer(2, 5362944, 44100), p = k.getChannelData(0), l = k.getChannelData(1);
  zb.buffer = k;
  zb.loop = !0;
  Sb(g);
}, Ab = new AudioContext(), Cb = new DOMMatrix(), db = new Float32Array(16), Qb = new Float32Array(624), dc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Eb = NO_INLINE((c, b) => c < b ? c : b), Hb = NO_INLINE((c, b) => b < c ? c : b), n = NO_INLINE(c => 0 > c ? -c : c), I = NO_INLINE((c, b, g) => Cb.translate(c, b, g)), Gb = NO_INLINE((c, b, g) => Cb.rotate(c, b, g)), X = NO_INLINE((c, b, g) => Cb.scale(c, b, g)), zb = Ab.createBufferSource(), U = NO_INLINE((c, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const c in Z) {
  Z[c[0] + [...c,].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
Sb(() => {
  let c = 0;
  const b = () => {
    if (2 == ++c) {
      const k = q => {
        let r;
        Z.f1s();
        requestAnimationFrame(k);
        x = (q - (ea || q)) / 1e3;
        ra += x;
        a += d = ba ? 0 : Eb(0.066, x);
        ea = q;
        0 < d && (ma(), vb(), pa(), w(), Z.b6o(36160, A), Z.v5y(0, 0, 128, 128), Z.c4s(16640), Z.cbf(!0, !1, !0, !1), {x, y:q, z:r} = Oa, Z.uae(w("b"), !1, eb(Gb(0, 180).invertSelf().translateSelf(-x, -q, 0.3 - r)),), Rb(w("c"), 0, 41, 0), Z.c4s(256), Z.cbf(!1, !0, !0, !1), Z.uae(w("b"), !1, eb(I(-x, -q, -r - 0.3))), Rb(w("c"), 0, 41, 0), Z.f1s());
        ha = 0;
        var x = ba ? Gb(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : Gb(-Pa, -Qa).invertSelf().translateSelf(-Ea, -Fa, -Ga,);
        v();
        Z.b6o(36160, O);
        Z.v5y(0, 0, 2048, 2048);
        C[0](Ib(x, 0.3, 55, 10));
        C[1](Ib(x, 55, 181, 11));
        y();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        C[0]();
        C[1]();
        Z.uae(y("a"), !1, yb(0.3, 181));
        Z.uae(y("b"), !1, eb(x));
        Z.ubu(y("k"), Ea, Fa, Ga);
        Rb(y("c"), !ja, 42, 0);
        u();
        Z.ubu(u("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ra);
        Z.ubu(u("k"), Ea, Fa, Ga);
        Z.uae(u("b"), !1, eb(x.inverse()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, A);
        Z.f1s();
      }, p = g;
      let l = Kb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const v = Pb(Kb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), u = Pb(Kb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), w = Pb(l, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), y = Pb(l, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), C = m(2, q => {
        const r = new Float32Array(16), x = Z.c25();
        return Z.a4v(33984 + q), Z.b9j(3553, x), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), D => {
          D ? (eb(D, r), Z.uae(v("b"), !1, r), Z.fas(36160, 36096, 3553, x, 0), Z.c4s(256), Rb(v("c"), !ja, 42, 1)) : Z.uae(y(q ? "j" : "i"), !1, r);
        };
      }), O = Z.c5w(), A = (l = Z.c3z(), Z.c5w()), f = Z.c25();
      w();
      Z.uae(w("a"), !1, yb(1e-4, 1, 1.4, 0.59));
      y();
      Z.ubh(y("q"), 2);
      Z.ubh(y("h"), 1);
      Z.ubh(y("g"), 0);
      u();
      Z.ubh(u("q"), 2);
      Z.b6o(36160, O);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, A);
      Z.bb1(36161, l);
      Z.r4v(36161, 33189, 128, 128);
      Z.f8w(36160, 36096, 36161, l);
      Z.a4v(33986);
      Z.b9j(3553, f);
      Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Z.fas(36160, 36064, 3553, f, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, p);
      Z.gbn(3553);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 1);
      vb();
      NO_INLINE(Bb)();
      NO_INLINE(Jb)();
      requestAnimationFrame(k);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = dc;
  NO_INLINE(cc)(() => {
    Sb(() => {
      let l, v = 0;
      const u = [], w = [], y = [], C = [], O = x => {
        let {x:D, y:L, z} = l[x], B = (r[0] = D, r[1] = L, r[2] = z, x = "" + (l.D ? q : A), f.get(x));
        return void 0 !== B ? (D = 3 * B, C[D] = (C[D++] + A[5]) / 2, C[D] = (C[D++] + A[6]) / 2, C[D] = (C[D] + A[7]) / 2) : (f.set(x, B = f.size), w.push(D, L, z, r[3]), y.push(A[4]), C.push(A[5], A[6], A[7])), B;
      }, A = new Int32Array(8), f = new Map(), q = new Int32Array(A.buffer, 0, 5), r = new Float32Array(A.buffer);
      for (const x of e) {
        for (l of (r[3] = 40 === x.H ? -14 : x.G && x.H, x.s)) {
          const {x:D, y:L, z} = cb(l);
          A[4] = 0 | l.A;
          A[5] = 32767 * D;
          A[6] = 32767 * L;
          A[7] = 32767 * z;
          for (let B = 2, K = O(0), F = O(1); l.length > B; ++B) {
            u.push(K, F, F = O(B));
          }
        }
        x.s = null;
        x.v = v;
        x.F = v = u.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(w), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(C), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(y), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(u), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Sb(b);
      try {
        const [x, D, L, z, B] = JSON.parse(localStorage.I,);
        h.map((K, F) => K.g = K.i = K.l = F ? 0 | x[F] : 0);
        Ma.map((K, F) => K.l = 0 | D[F]);
        ua = L;
        a = z;
        Aa = B;
      } catch {
      }
      za = Wa(ua);
    });
    const k = m(11, l => I(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10),), p = m(10, l => ib(gb(hb(18), k[l]).reverse(), gb(hb(18), k[l + 1]), 1,)).flat();
    R(() => S([Sa.slice(1),], I(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const l = (f, q, r) => R(x => {
        x.h = () => I(w() * Math.sin(3 * f + a * f) * q);
        Sa.map(({x:D, z:L}) => {
          S(J(11, 1), I(4 * D, 4, r + 4 * L).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6),);
          S(J(), I(4 * D, 7, r + 4 * L).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3),);
        });
        S(P(H(J(), I(0, 0, r).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(D => H(J(), I(5 * D, 0.2, r).rotate(-30 * D).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3),)),),);
        S(J(), I(0, -3, r).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
      }), v = (f, q, r) => I(f + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, r).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), u = f => P(H(J(), I(0, -f / 2).scale(6, f - 1, 2.2)), H(J(), I(0, -f / 2 - 6).scale(4, f - 3, 4)), H(J(32, 1), I(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), w = () => Eb(h[2].i, 1 - h[4].i), y = P(H(J(20, 1, 1.15, 1), I(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7),), H(J(20, 1, 1.3, 1), I(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2),), 
      H(J(), I(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),), C = m(7, f => H(J(6, 1), I(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38),)).flat(), O = (R(f => {
        f.h = () => v(-12, 4.2, 40 * za - 66);
        S(y);
        Db(I(0, -3, 4));
      }), Db(I(-5.4, 1.5, -19).rotate(0, -90)), Fb(I(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Fb(I(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...hb(18).map(({x:f, z:q}) => [7 * f, 10 * q, 4.5 - 2 * n(f),]),), S(J(), I(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)), Sa.map(({x:f, z:q}) => S(J(6), I(3 * f, 3, 15 * q).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))), S(J(), I(0, 0, -23).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)), S(J(), I(0, 0, 22).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2)), [-15, 
      15,].map((f, q) => {
        S(J(), I(0, 6.3, f).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
        S(J(), I(0, 1, f).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
        R(r => {
          r.h = () => I(0, 0, f).scale(1, Wa(1.22 - h[q + 1].g), 1);
          S(C);
        });
      }), m(5, f => m(2, q => S(p, I(18.5 * (q - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2), U(1, 1, 0.8, 0.2),)),), S(J(), I(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)), S(J(), I(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2),), S(J(5), I(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4),), S(J(), Gb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5),), S(P(sb(H(J(6, 0, 0, 0.3), 
      I(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2),), H(J(6), I(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)), H(J(6, 0, 0, 0.3), I(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2),),), H(J(5), X(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)), H(J(5, 0, 1.5), I(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2),), H(J(), Gb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5),), H(J(6), I(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5),),),), R(f => {
        f.h = () => I(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        S(J(5), I(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
        Db(I(0, 1.2));
      }), Db(I(15, -2, 4)), l(0.7, 12, 35), l(1, 8.2, 55), R(f => {
        f.h = () => I(w() * Math.sin(a / 1.5 + 2) * 12);
        S(P(sb(H(J(), X(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)), H(J(6), X(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)), H(J(), I(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5),), H(J(16, 1, 0, 4), X(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2),),), H(J(), X(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),), I(0, 0, 45),);
        Fb(I(0, 2.8, 45), [0, 0, 4.5,]);
      }), S(J(), I(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)), R(f => {
        f.h = () => I(9.8 * (1 - w()));
        S(J(3), I(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
        S(J(8), I(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
        S(J(), I(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
        S(J(), I(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
        Db(I(-23, -0.5, 66.5));
      }), R(f => {
        f.h = () => I(0, Wa(1 - 5 * w()) * Ya(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        S(J(), I(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
        S(P(H(J(), X(3, 1.4, 2.7)), H(J(), X(1.2, 8, 1.2)),), I(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2),);
      }), R(f => {
        f.h = () => I(0, 0, Wa(1 - 5 * w()) * Ya(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        S(P(H(J(), I(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), H(J(), I(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2),),),);
        S(J(), I(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
      }), R(f => {
        f.h = () => I(0, -6.5 * h[4].i);
        S(J(6), I(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4),);
      }), Db(I(-55, -1.1, 46).rotate(0, 90)), S(J(6), I(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)), S(J(7), I(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)), [...H(J(), I(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)), ...P(H(J(6), Gb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)), H(J(4, 0, 0.01), I(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3),), H(J(6), Gb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => H(J(5), I(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), U(0.3, 0.6, 0.6, 0.3),)),),]), A = (S(O, I(-53, 0, 55)), R(f => {
        f.h = () => I(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + xa, 0,);
        S(O);
      }, 2), S(J(), I(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2),), S(J(3, 0, -0.5), I(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2),), S(P(sb(H(J(), I(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2),), H(J(), I(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2),), H(J(), I(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2),), H(J(), I(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2),), H(J(6), 
      I(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3),), H(J(), I(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2),), H(J(), I(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2),),), H(J(8), I(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4),), H(J(8), I(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5),), H(J(8), I(-100, -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5),),),), Fb(I(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), Fb(I(-89, 0.2, 80), [0, 0, 6,]), S(P(H(J(), I(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)), H(J(), I(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4),), H(J(20, 1), I(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4),),),), R(f => {
        f.h = () => I(-99.7, -1.9, 63.5).scale(1, Wa(1.1 - h[6].g), 1);
        S(C);
      }), Sa.map(({x:f, z:q}) => {
        S(J(6), I(7 * f - 100, -3, 7 * q + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(r => S(J(6), I(7 * f - 100, r, 7 * q + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8),));
      }), m(7, f => {
        S(J((23 * f + 1) % 5 + 5, 0, 0.55), I(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), U(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), S(J(), I(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)), S(J(4), I(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)), S(J(12, 1), I(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)), Db(I(-86, -7.5, 31)), R(f => {
        f.h = () => I(0, 3.5 * (1 - Hb(h[6].g, h[7].g)) + Ya(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24,].map(q => S(J(), I(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2),));
      }), R(f => {
        f.h = () => I(0, Ya(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ya(h[7].i, h[6].i),);
        [6, 18,].map(q => S(J(), I(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2),));
      }), S(P(sb(H(J(5), I(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3),), H(J(5), X(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)), H(J(), X(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),), H(J(5), X(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),), I(-38.9, -11.3, 17),), Db(I(-38.9, -9.6, 10)), R(f => {
        f.h = () => I(0, -7.3 * h[7].i);
        S(P(sb(H(J(5), I(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5),), H(J(5), I(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5),), H(J(5), I(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5),),), H(J(5), X(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)), H(J(5), I(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5),),), I(-38.9, -11.3, 17),);
        Fb(I(-39.1, -0.6, 17).rotate(11), ...hb(15).map(({x:q, z:r}) => [3 * q, 3 * r, 1.2,]),);
      }), Sa.map(({x:f, z:q}) => {
        S(J(14, 1), I(9 * f - 38.9, -7.3, 11 * q + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(r => S(J(17, 1), I(9 * f - 38.9, r - 11.3, 11 * q + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3),));
      }), S(P(sb(H(J(6), I(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3),), H(J(), I(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3),),), ...m(6, f => m(6, q => H(J(6), I(4.6 * q - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2), U(0.7, 0.7, 0.7, 0.3),))).flat(),), I(-38.9, -11.3, 17),), Fb(I(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), S(J(5), I(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4),), Db(I(-84, -0.5, 85).rotate(0, 
      45)), R(f => {
        f.h = () => v(-123, 1.4, 55 + -65 * Aa);
        S(y);
        Db(I(0, -3, -4).rotate(0, 180));
      }), P(H(J(), I(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3),), H(J(3), I(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => H(J(), I(f, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3),)),));
      R(f => {
        f.h = () => I(0, -2, Ya(h[10].g, h[11].g) * n(Math.sin(1.1 * a)) * -8.5 + 10);
        m(2, q => S(A, I(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      R(f => {
        f.h = () => I(0, -2, Ya(h[10].g, h[11].g) * n(Math.sin(2.1 * a)) * -8.5 + 10);
        m(2, q => S(A, I(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      R(f => {
        f.h = () => I(0, -2, -8.5 * Hb((1 - h[10].g) * (1 - Ya(h[10].g, h[11].g)), Ya(h[10].g, h[11].g) * n(Math.sin(1.5 * a)),) + 10,);
        m(3, q => S(A, I(9 * q - 106, 1.7, -12)));
      });
      S(P(sb(H(J(), I(26.5, -1.6, 10).scale(20, 2.08, 3)), H(J(), I(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...m(4, f => H(J(), I(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...m(3, f => H(J(), I(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), I(-123, 0, -12), U(0.5, 0.5, 0.6, 0.2),);
      Db(I(-116, -1.4, -18).rotate(0, 180));
      S(J(), I(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2),);
      S(J(6), I(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      S(J(), I(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      S(J(8), I(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      S(J(8), I(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      S(J(), I(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      m(3, f => {
        S(u(16), I(12 * f - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        S(u(16), I(-77, -9, -12 * f - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3),);
      });
      S(P(H(J(12), I(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2),), H(J(), I(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2),), H(J(), I(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2),), H(J(12), I(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2),),),);
      S(J(), I(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3),);
      S(J(9), I(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      S(P(H(J(), I(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1),), H(J(9), I(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2),),),);
      Db(I(-98, -4.4, -40).rotate(0, 90));
      Fb(I(-115, 0.2, -12), [0, 0, 3.5,]);
      Fb(I(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      S(P(sb(H(J(6, 0, 0, 0.6), I(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2),), H(J(), I(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2),),), H(J(5), I(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2),),),);
      m(4, f => R(q => {
        q.h = () => {
          const r = Ya(h[8].i, h[12].i);
          return I((2 < f ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Hb(r, 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        S(J(6), I(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), U(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      R(f => {
        f.h = () => {
          const q = Ya(h[8].i, h[12].i);
          return I(2.5 * (1 - q) - 139.7, -3 * (1 - h[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * q + 3), 0);
        };
        S(P(H(J(10), X(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), H(J(10), X(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5)),),);
        S(J(15, 1), I(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3),);
        S(J(10), I(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        S(J(5), I(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        Db(I(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(q => S(p, Gb(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2),));
        Fb(I(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        S(J(12, 1), I(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(q => S(J(15, 1), I(-7.5 * f - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4),));
        S(p, I(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), U(1, 1, 0.8),);
        S(P(H(J(), I(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4),), H(J(), X(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)), H(J(28, 1), I(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5),), H(J(5), I(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5),), H(J(5), I(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5),),), I(f - 100, 0.7, 97),);
      });
      R(f => {
        f.h = () => I(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        S(C);
      });
      S(P(H(J(), I(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1),), H(J(45, 1), I(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1),),),);
      R(f => {
        f.h = () => I(-81, 0.6, 106).rotate(0, 40 + va);
        S(P(H(J(45, 1), X(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)), H(J(), I(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2),),),);
        S(J(8), I(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        S(J(5), I(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Fb(I(0, 3), ...hb(14).map(({x:q, z:r}) => [5.6 * q, 5.6 * r, 2,]),);
      });
      R(f => {
        f.h = () => I(-65.8, 0.8, 106).rotate(0, wa);
        [-1, 1,].map(q => S(p, Gb(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), U(1, 1, 0.8),));
        S(P(H(J(28, 1), I(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), H(J(), X(9, 5, 2), U(0.3, 0, 0, 0.3)),),);
        S(H(J(28, 1), X(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(H(J(5), I(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      R(f => {
        f.h = () => I(-50.7, 0.8, 106).rotate(0, 180 - wa);
        S(P(H(J(28, 1), I(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), H(J(), I(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), H(J(), I(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),),);
        S(H(J(28, 1), X(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(H(J(5), I(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      R(f => {
        f.h = () => I(-50.7, 0.8, 91).rotate(0, 270 + wa);
        S(P(H(J(28, 1), I(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), H(J(), I(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), H(J(), I(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),),);
        S(H(J(28, 1), X(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(H(J(5), I(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      S(J(), I(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      S(J(), I(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      S(J(), I(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      S(J(), I(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      Db(I(-34, 2.7, 96).rotate(-12, 0));
      S(J(5), I(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6),);
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4),].map((f, q) => R(r => {
        r.h = () => I(0, (1 - h[13].i) * (1 - h[14].i) * (q ? 0 : 3) + Ya(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4,);
        S(J(), I(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), f);
        2 === q && S(J(), I(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
        1 === q && S(J(), I(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => S(p, I(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), U(1, 1, 0.8),));
      m(3, f => S(u(24.7 - 0.7 * (1 & f)), I(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),),);
      S(P(H(J(6, 0, 0, 0.3), I(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2),), H(J(5), I(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),),);
      Db(I(0, 1.7, 82).rotate(0, 180));
      S(J(5), I(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4),);
      S(J(6), I(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3),);
      S(J(), I(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      S(J(7), I(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      S(P(sb(H(J(), I(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4),), H(J(), I(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4),),), H(J(5), I(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4),),),);
      R(f => {
        f.h = () => {
          const q = Math.sin(a);
          return I(-2 * q).rotate(25 * q);
        };
        S(J(3), I(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(q => {
          S(J(6), I(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4),);
          S(J(), I(0, 6.2, q + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4),);
        });
      });
      R(f => {
        f.h = () => {
          const q = Ya(Ya((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return I(0, 16 * q, 8.5 * Wa(2 * q - 1) + 95);
        };
        S(J(5), X(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        S(J(5), X(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        Db(I(0, 1.5, -1).rotate(0, 180));
      });
      Fb(I(0, 3, 95), ...hb(9).map(({x:f, z:q}) => [9 * f, 9 * q, 4,]),);
      Fb(I(0, 19, 134), [0, 0, 3.5,]);
    });
    R(() => {
      [0, 180,].map(v => S(p, Gb(0, v).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8),));
      S(jb(20), I(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      S(jb(30), X(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
      const l = H(P(J(15, 1), H(J(), I(0, 0, 1).scale(2, 2, 0.5)),), Gb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3),);
      [-1, 1,].map(v => S(l, I(0.2 * v, 1.2, 0.4).rotate(0, 20 * v, 20 * v)));
      S(J(), I(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
    });
    [-1, 1,].map(l => R(() => {
      S(J(20, 1), I(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
    }));
    R(() => {
      S(J(6, 1), X(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      S(J(10), I(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      S(J(3), I(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    R(() => {
      S(J(6).slice(0, -1), X(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    R(() => {
      S(jb(30, 24, (l, v, u) => {
        const w = v / 24, y = l * Math.PI * 2 / 30, C = w ** 0.6 * Math.PI / 2;
        l = w * w * Math.sin(l * Math.PI * 14 / 30) / 4;
        return 23 === v ? {x:u.D = 0, y:-0.5, z:0,} : {x:Math.cos(y) * Math.sin(C), y:Math.cos(w * Math.PI) - w - l, z:Math.sin(y) * Math.sin(C) + Math.sin(l * Math.PI * 2) / 4,};
      }), X(0.7, 0.7, 0.7), U(1, 1, 1),);
      [-1, 1,].map(l => S(jb(12), I(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

