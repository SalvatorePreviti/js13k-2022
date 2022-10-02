let aa, da, ea, ha, ia, ja, ka, ma, c = 0, na = 0, oa = 0, qa = 0, ra = 0, sa = 0, ta = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 1, d = 0.066;
const e = [], h = [], Ga = [], Ha = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ia = {x:0, y:0, z:0,}, Ja = Math.PI / 180, Pa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), 
".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Qa = [[69, 128, 0, 143, 128, 0, 
0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ra = 0, Sa = 180;
const Ta = {x:0, y:0, z:0,}, n = NO_INLINE(a => 0 > a ? -a : a), Ua = NO_INLINE((a, b) => a < b ? a : b), Va = NO_INLINE((a, b) => b < a ? a : b), Wa = (a, b) => n(a) > b ? a : 0, p = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, Xa = a => Math.atan2(Math.sin(a * Ja), Math.cos(a * Ja)) / Ja, Ya = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * p(g) || 0, Za = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, $a = (a, b) => (a = p(a), Za(a, 1 - a, b)), bb = (a, b = ab, g = 0,) => 
(g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), eb = (a = cb, b = db,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, 
b.m43 = a.m43, b.m44 = a.m44, b), t = NO_INLINE((a, b, g) => cb.translate(a, b, g)), fb = NO_INLINE((a, b, g) => cb.rotate(a, b, g)), J = NO_INLINE((a, b, g) => cb.scale(a, b, g)), gb = (a, b) => Array.from(Array(a), (g, l) => b(l)), hb = (a, b, g) => (a.D = g, a.A = b, a), ib = (a, b, g = a.A) => hb(a.map(l => {
  let q, m;
  return {x:l, y:q, z:m} = l, {x:l, y:q, z:m} = b.transformPoint({x:l, y:q, z:m,}), {x:l, y:q, z:m,};
}), g, a.D,), L = (a, b, g) => a.map(l => ib(l, b, g)), jb = (a, b = 0) => gb(a, g => {
  const l = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > n(l) ? l : 0 > l ? l - b : l + b,};
}), kb = (a, b, g) => a.map((l, q, {length:m}) => hb([l, b[m - q - 1], b[m - (q + 1) % m - 1], a[(q + 1) % m],], a.A, g,)), O = (a, b, g = 0, l,) => (a = a ? jb(a, l) : Ha, l = ib(a, t(0, 1).scale3d(0 < g ? g : 1)), a = ib(a, t(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...kb(a, l, b), l, a,]), lb = (a, b = a, g = (l, q) => (q *= Math.PI / b, {x:Math.cos(l *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(l) * Math.sin(q),})) => {
  const l = [];
  for (let q = 0; a > q; q++) {
    for (let m = 0; b > m; m++) {
      const w = hb([], 0, 1);
      l.push(w);
      w.push(g(q, m, w));
      m && w.push(g((q + 1) % a, m, w));
      b - 1 > m && w.push(g((q + 1) % a, m + 1 % b, w));
      w.push(g(q, m + 1 % b, w));
    }
  }
  return l;
}, mb = ({x:a, y:b, z:g}, l) => a * l.x + b * l.y + g * l.z, nb = a => {
  let b, g = 0, l = 0, q = 0, m = a.at(-1);
  for (b of a) {
    g += (m.y - b.y) * (m.z + b.z), l += (m.z - b.z) * (m.x + b.x), q += (m.x - b.x) * (m.y + b.y), m = b;
  }
  return b = Math.hypot(g, l, q), g /= b, l /= b, q /= b, {x:g, y:l, z:q, w:g * m.x + l * m.y + q * m.z,};
}, ob = (a, b) => {
  var g, l, q, m = b.C;
  for (var w = 0; m.length > w; ++w) {
    if (-0.00008 > (g = mb(a, m[w]) - a.w) ? q = b : 8e-5 < g && (l = b), q && l) {
      l = [];
      q = [];
      m = b.C;
      w = b.B;
      let y = m.at(-1), C = mb(a, y) - a.w;
      for (const K of m) {
        g = mb(a, K) - a.w, 8e-5 > C && q.push(y), -0.00008 < C && l.push(y), (8e-5 < C && -0.00008 > g || -0.00008 > C && 8e-5 < g) && (C /= g - C, y = {x:y.x + (y.x - K.x) * C, y:y.y + (y.y - K.y) * C, z:y.z + (y.z - K.z) * C,}, l.push(y), q.push(y)), y = K, C = g;
      }
      return {m:2 < l.length && {C:hb(l, m.A, m.D), B:w, s:b,}, l:2 < q.length && {C:hb(q, m.A, m.D), B:w, s:b,},};
    }
  }
  return {m:l, l:q,};
}, pb = (a, b, g = nb(b.C)) => {
  let l, q, m;
  return a ? ({m:l, l:q} = ob(a, b), l || q || a.u.push(b), l && (a.m = pb(a.m, l, g)), q && (a.l = pb(a.l, q, g))) : ({x:l, y:q, z:g, w:m} = g, a = {x:l, y:q, z:g, w:m, u:[b,], m:0, l:0,}), a;
}, qb = (a, b, g) => {
  const l = [], q = (m, w) => {
    let {m:y, l:C} = ob(m, w);
    y || C || (0 < g * mb(m, b) ? y = w : C = w);
    y && (m.m ? q(m.m, y) : l.push(y));
    C && m.l && q(m.l, C);
  };
  for (const m of b.u) {
    q(a, m);
  }
  return l;
}, rb = (a, b) => a && (b(a), rb(a.m, b), rb(a.l, b)), ub = a => (rb(a, b => {
  const g = b.l;
  b.l = b.m;
  b.m = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const l of b.u) {
    l.B = !l.B;
  }
}), a), vb = a => a.length ? a.reduce((b, g) => pb(b, {C:g, B:0, s:0,}), 0) : a, wb = (...a) => a.reduce((b, g) => {
  const l = [];
  if (b = vb(b), g) {
    g = vb(g);
    rb(b, q => q.u = qb(g, q, 1));
    rb(g, q => l.push([q, qb(b, q, -1),]));
    for (let [q, m] of l) {
      for (const w of m) {
        pb(b, w, q);
      }
    }
  }
  return b;
}), S = (a, ...b) => {
  const g = m => {
    let w;
    return m.s && ((w = l.get(m.s)) ? (q.delete(w), m = g(m.s)) : l.set(m.s, m)), m;
  }, l = new Map(), q = new Map();
  return a = ub(wb(ub(vb(a)), ...b)), rb(a, m => {
    for (const w of m.u) {
      q.set(g(w), w.B);
    }
  }), Array.from(q, ([{C:m}, w]) => {
    const y = m.map(({x:C, y:K, z:G}) => ({x:C, y:K, z:G,}));
    return hb(w ? y.reverse() : y, m.A, m.D);
  });
}, V = NO_INLINE((a, b, g) => Za(a, b, 1 - Math.exp(-g * d))), zb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][oa = Ga.reduce((a, {j:b}) => a + b, 0)] + " / XIII";
}, Ab = () => {
  localStorage.DanteSP22 = JSON.stringify([h.map(({j:a}) => a), Ga.map(({j:a}) => a), qa, c, ya,]);
}, Bb = (a, b, g, l) => new DOMMatrix([g, 0, 0, 0, 0, l, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Eb = () => {
  let a, b, g, l, q, m, w, y, C, K, G, P, D, f, k = !0;
  const u = [], z = () => {
    b4.innerHTML = "Music: " + k;
    da || !k ? Cb.disconnect() : Cb.connect(Db.destination);
  }, F = () => {
    const v = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ja = Bb(0.3, 181, v, 1.732051);
    ka = [Bb(0.3, 55, v, 1.732051), Bb(55, 181, v, 1.732051),];
    l = y = void 0;
    u.length = ea = f = P = D = Aa = Ba = 0;
  }, I = (v, r = 0) => {
    if (da !== v) {
      da = v;
      ha = r;
      F();
      zb();
      document.body.className = v ? "l m" : "l";
      try {
        v ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Cb.start());
      } catch {
      }
      z();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => I(!1);
  b2.onclick = () => I(!1, 1);
  b5.onclick = () => I(!0);
  b4.onclick = () => {
    k = !k;
    z();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = v => {
    if (!da && (v.target === hC && (ea = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = v => {
    let r;
    v.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[v.code], (u[r] = !!v.type[5] && !0) && (0 === r && (ea = 1), 1 === r && I(!0)));
  };
  onmousemove = ({movementX:v, movementY:r}) => {
    ha && (v || r) && (Sa += 0.1 * v, Ra += 0.1 * r);
  };
  hC.ontouchstart = v => {
    if (!da) {
      for (let {pageX:r, pageY:B, identifier:x} of v.changedTouches) {
        ha && r > hC.clientWidth / 2 ? void 0 === y && (C = 0, m = r, w = B, y = x, K = Sa, G = Ra) : void 0 === l && (q = 0, b = r, g = B, l = x);
      }
      a = na;
    }
  };
  hC.ontouchmove = v => {
    if (!da) {
      for (let {pageX:E, pageY:N, identifier:H} of v.changedTouches) {
        var r, B, x, A;
        y === H && (Sa = K + (E - m) / 2.3, Ra = G + (N - w) / 2.3, C = 1);
        l === H && (H = (b - E) / 20, r = n(H), B = (g - N) / 20, x = n(B), (A = 0.5 < Va(r, x)) && (q = 1), P = (A && 0.2 < r) * p(H, -1), D = (A && 0.2 < x) * p(B, -1), 2 < r && (b = E + 20 * (0 > H ? -1 : 1)), 2 < x && (g = N + 20 * (0 > B ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = v => {
    let r;
    document.activeElement === document.body && v.preventDefault();
    for (const B of v.changedTouches) {
      B.identifier === y ? (y = void 0, C || (r = 1), C = 0) : B.identifier === l ? (l = void 0, D = P = 0, q || (r = 1), q = 0) : r = 1;
    }
    v.target === hC && r && a && 0.02 < (v = na - a) && 0.7 > v && (ea = 1);
  };
  ia = () => {
    Aa = D + (u[4] ? 1 : 0) - (u[5] ? 1 : 0);
    Ba = P + (u[2] ? 1 : 0) - (u[3] ? 1 : 0);
    var v = navigator.getGamepads()[0];
    if (v) {
      const r = x => B[x]?.pressed || 0 < B[x]?.value ? 1 : 0, B = v.buttons;
      v = v.axes;
      ha && (Ra += d * Wa(v[3], 0.3) * 80, Sa += d * Wa(v[2], 0.3) * 80);
      Aa += r(12) - r(13) - Wa(v[1], 0.2);
      Ba += r(14) - r(15) - Wa(v[0], 0.2);
      r(9) && I(!0);
      (v = r(3) || r(2) || r(1) || r(0)) && !f && (ea = 1);
      f = v;
    }
  };
  document.onvisibilitychange = onblur = onresize = F;
  I(!0);
}, W = NO_INLINE((a, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), X = (a, b = new DOMMatrix(), g) => ma.u.push(...L(a, b, g)), Y = (a, b = 1) => {
  const g = ma;
  b = {o:new DOMMatrix(), H:e.length, G:b, u:[],};
  return e.push(b), a(ma = b), ma = g, b;
}, Fb = a => (a = a.transformPoint(), Math.hypot(Ia.x - a.x, Ia.y - a.y, Ia.z - a.z,)), Hb = a => {
  const b = ma, g = h.length, l = {j:0, g:0, i:0, s:b, o:a, h() {
    l.g = V(l.g, l.j, 4);
    l.i = V(l.i, l.j, 1);
    eb(b.o).multiplySelf(a);
    ea && 3 > Fb(db) && (0.3 > l.g || 0.7 < l.g) && (l.j = l.j ? 0 : 1, g && 1 / 0 > Fa && (Fa = c + 1, h4.innerHTML = "* click *"), qa = g, Ab());
    bb(db.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1), Gb, g + 13,);
    Gb[16 * g + 223] = 1 - l.g;
  },};
  h.push(l);
  X(O(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(O(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(O(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), W(0.5, 0.5, 0.4));
}, Ib = (a, ...b) => {
  let g = -1, l = 0, q = 0, m = 0, w = 0, y = 0, C = 1, K = 3;
  const G = {j:0, h() {
    if (!G.j) {
      let A, E, N, H, ba, ca, T, Q = 1, M = 1 / 0;
      for (const R of f) {
        var {x:v, z:r, w:B} = R;
        r = (v = Math.hypot(u - v, z - r)) - B;
        T ||= v < B;
        0 < r && M > r && (M = r, k = R);
        Q = Ua(Q, v / B);
      }
      T || ({x, z:A, w:E} = k, N = u - x, H = z - A, ba = Math.hypot(N, H), ca = Math.atan2(-H, N), C && (q = (Math.random() - 0.5) * Math.PI / 2, K = p(K / (1 + Math.random()))), ca += q, g = -Math.cos(ca), l = Math.sin(ca), 0.1 < ba && (ba = Ua(ba, E) / (ba || 1), u = N * ba + x, z = H * ba + A));
      C = T;
      K = V(K, 6 * (1 - Q) + 3, Q + 3);
      F = V(F, u = V(u, u + g, K), K);
      I = V(I, z = V(z, z + l, K), K);
      m = Ya(m, Math.atan2(F - w, I - y) / Ja - 180, 1 - Math.exp(-3 * d),);
      if (1.6 > Fb(eb(P.o).multiplySelf(a).translateSelf(w = F, 0, y = I).rotateSelf(0, m, 7 * Math.sin(1.7 * c)),)) {
        G.j = 1;
        var x = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][oa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        1 / 0 > Fa && (Fa = c + (oa && 12 > oa ? 5 : 7), h4.innerHTML = x);
        zb();
        Ab();
      }
    }
    G.j && eb(e[2].o).translateSelf(D % 4 * 1.2 - 1.7 + Math.sin(c + D) / 7, -2, 1.7 * (D / 4 | 0) - 5.5 + n(D % 4 - 2) + Math.cos(c / 1.5 + D) / 6,);
    bb(db, Gb, D);
  },}, P = ma, D = Ga.length, f = b.map(([v, r, B]) => ({x:v, z:r, w:B,}));
  let k = f[0], {x:u, z} = k, F = u, I = z;
  Ga.push(G);
}, Kb = () => {
  let a, b, g, l, q, m, w, y, C, K, G, P, D, f, k = 1, u = 2, z = 15;
  const F = () => (u ? h[qa].s : e[b && 1 === e[b].G && b || 0]).o, I = x => {
    const {x:A, y:E, z:N} = 1 < u ? eb(h[qa].s.o).multiplySelf(h[qa].o,).transformPoint({x:0, y:qa || 0.9 < xa ? 15 : 1, z:-2.4,}) : F().transformPoint(Ta);
    x && (w = (A - Ia.x) / d, y = (N - Ia.z) / d);
    Ia.x = A;
    Ia.y = E;
    Ia.z = N;
  }, v = (x, A, E) => {
    eb(F()).invertSelf();
    db.m41 = db.m42 = db.m43 = 0;
    x = db.transformPoint({x, z:E, w:0,});
    Ta.x += x.x;
    Ta.y += A;
    Ta.z += x.z;
    I();
  }, r = () => {
    var x = 0, A = 0, E = 0;
    let N = 0;
    var H = -1;
    let ba = 0, ca = 0;
    for (var T = 0; 36 > T; ++T) {
      var Q = 512 * T;
      for (var M = 96; 416 > M; M += 4) {
        for (var R = 0; 2 > R; ++R) {
          var la = Jb[Q + M + R], pa = Jb[Q + M + R + 2];
          la > N && (N = la);
          la + pa && (0 > H || H === T) && (H = T, pa === a ? ++x : A && A !== pa || (A = pa, ++E));
        }
      }
    }
    a = 0 > H ? 0 : E > 2 * x ? A : a;
    for (x = 36; 128 > x; x += 1) {
      T = H = E = A = 0;
      Q = 512 * x;
      for (M = 0; 128 > M; M += 1) {
        for (R = Q + 4 * M, la = 0; 2 > la; ++la) {
          pa = Jb[R + la];
          const Ka = Jb[R + la + 2];
          (la ? 64 < M : 64 > M) ? A = Va(A, pa) : E = Va(E, pa);
          la ? T = Va(T, Ka) : H = Va(H, Ka);
        }
      }
      n(E - A) > n(ba) && (ba = E - A);
      n(T - H) > n(ca) && (ca = T - H);
    }
    K = p(1 - 0.015 * Va(n(ba), n(ca)));
    v(ba / 255, N / 255, ca / 255);
  }, B = (x, A, E, N) => Za(x, A, k || (p(n(A - x) ** 0.5 - E) + 1 / 7) * (1 - Math.exp(-(1.5 * N) * d)));
  e[37].h = x => {
    I(a);
    Z.r9r(0, 0, 128, 128, 6408, 5121, Jb);
    NO_INLINE(r)();
    !u && a === b || (b = a, A = eb(F()).invertSelf().transformPoint(Ia), Ta.x = A.x, Ta.y = A.y, Ta.z = A.z);
    u = u && (a ? 0 : 1);
    var {x:A, y:E, z:N} = Ia;
    E = (E < (-20 > A || 109 > N ? -25 : -9) && (u = 2), 1 === a && (h[9].j = -15 > A && 0 > N ? 1 : 0), G = Za(V(G, E, 2), E, u || 8 * n(G - E)), D = B(D, G, 2, 1), P = B(P, A, 0.5, 1), f = B(f, N, 0.5, 1), m = V(m, za * (27 < a && 32 > a), 2,), ha ? (E = u + (1 - Math.exp(-18 * d)), Ca = Za(Ca, A, E), Da = Za(Da, G + 1.5, E), Ea = Za(Ea, N, E), Sa = Xa(Sa)) : (Ea = B(Ea, f + -18 + 5 * m, 1, 2 + m,), Da = B(Da, Va(D + p((-60 - N) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2,), Ca = B(Ca, P, 1, 2 + m,), E = 
    Ua(-6, -n(f - Ea)), H = P - Ca, Sa = Ya(Sa, 90 - Xa(Math.atan2(E, H) / Ja), k + (1 - Math.exp(-10 * d)),), Ra = Ya(Ra, 90 - Math.atan2(Math.hypot(E, H), Da - D) / Ja, k + (1 - Math.exp(-10 * d)),)), Ra = p(Ra, -87, 87), k = 0, x.translateSelf(A, G, N).rotateSelf(0, l), p(Aa, -1));
    var H = p(Ba, -1);
    x = Wa(Math.hypot(E, H) ** 0.5, 0.1);
    A = Math.atan2(E, H);
    E = x * n(E) * Math.sin(A);
    H = x * n(H) * Math.cos(A);
    x && (g = 90 - A / Ja);
    q = V(q, x, 10);
    l = Ya(l, g, 1 - Math.exp(-8 * d));
    z = a ? 5 : V(z, u ? 10 : 19, 2.2);
    w = a || u ? 0 : V(w, 0, 3);
    y = a || u ? 0 : V(y, 0, 3);
    C = u ? 0 : V(C, a ? 7 * p(2 * x) * K : 0, a ? 9 : 1,);
    A = ha ? (180 + Sa) * Ja : 0;
    v(d * (w + C * (H * Math.cos(A) - E * Math.sin(A))), -z * d, d * (y + C * (H * Math.sin(A) + E * Math.cos(A))),);
  };
  [39, 38,].map((x, A) => e[x].h = E => eb(e[37].o, E).translateSelf(0, q * p(0.45 * Math.sin(9.1 * c - Math.PI * A - Math.PI / 2)),).rotateSelf(q * Math.sin(9.1 * c - Math.PI * A) * 0.25 / Ja, 0));
}, Lb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), Rb = (a, b) => {
  const g = {}, l = Z.c1h();
  return Z.abz(l, a), Z.abz(l, Lb(b, 35632)), Z.l8l(l), q => q ? g[q] || (g[q] = Z.gan(l, q)) : Z.u7y(l);
}, Tb = (a, b, g) => {
  let l;
  da ? (l = fb(0, 40 * Math.sin(na) - 70), bb(l, Sb, 37), bb(l, Sb, 38), bb(l, Sb, 39), Z.uae(a, !1, Sb), Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v,)) : (Z.uae(a, !1, Sb), Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6,), Z.uae(a, !1, Gb), Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, Ga.length,), Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,));
}, Ub = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Vb = a => Math.sin(a * Math.PI * 2), Wb = a => 0.5 > a % 1 ? 1 : -1, Xb = a => a % 1 * 2 - 1, Yb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, ec = a => {
  let b = 0;
  const g = () => {
    let w = 0;
    const y = Q => {
      let M, R, la, pa = 0, Ka = 0;
      const Mb = [], La = new Int32Array(768 * Q), Zb = 2 ** (r - 9) / Q, $b = Math.PI * 2 ** (N - 8) / Q, xb = ba * Q & -2;
      for (let sb = 0; 11 >= sb; ++sb) {
        for (let tb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb]; 32 > tb; ++tb) {
          const Ob = (32 * sb + tb) * Q;
          for (var Ma = 0; 4 > Ma; ++Ma) {
            if (M = 0, Nb && (M = C[Nb - 1].charCodeAt(tb + 32 * Ma) - 40, M += 0 < M ? 106 : 0), M) {
              var fa;
              if (!(fa = Mb[M])) {
                fa = M;
                let U = void 0, ua = void 0;
                var Pb = M;
                let ac = 0, bc = 0;
                const cc = 2 > b ? Xb : Vb, dc = 2 > b ? 1 > b ? Wb : Yb : Vb, Qb = new Int32Array(z + F + T);
                for (let Na = 0, yb = 0; z + F + T > Na; ++Na, ++yb) {
                  let Oa = 1;
                  z > Na ? Oa = Na / z : z + F > Na || (Oa = (1 - (Oa = (Na - z - F) / T)) * 3 ** (-v / 16 * Oa));
                  0 > yb || (yb -= 4 * Q, ua = 0.00396 * 2 ** ((Pb + G - 256) / 12), U = 0.00396 * 2 ** ((Pb + f - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Qb[Na] = 80 * (cc(ac += ua * Oa ** (P / 32)) * K + dc(bc += U * Oa ** (k / 32)) * D + (u ? (2 * Math.random() - 1) * u : 0)) * Oa | 0;
                }
                fa = Mb[fa] = Qb;
              }
              for (let U = 0, ua = 2 * Ob; fa.length > U; ++U, ua += 2) {
                La[ua] += fa[U];
              }
            }
          }
          for (let U, ua = 0; Q > ua; ++ua) {
            Ma = 0;
            fa = 2 * (Ob + ua);
            var va = (((U = La[fa]) || la) && (R = 0.00308 * B, 1 !== b && 4 !== b || (R *= Math.sin(Zb * fa * Math.PI * 2) * ca / 512 + 0.5), R = 1.5 * Math.sin(R), pa += R * Ka, va = (1 - x / 255) * (U - Ka) - pa, Ka += R * va, U = 4 === b ? Ka : 3 === b ? va : pa, b || (U = 1 > (U *= 22e-5) ? -1 < U ? Math.sin(U / 4 * Math.PI * 2) : -1 : 1, U /= 22e-5), U *= A / 32, la = 1e-5 < U * U, va = Math.sin($b * fa) * E / 512 + 0.5, Ma = U * (1 - va), U *= va), fa < xb || (Ma += La[1 + fa - xb] * H / 255, 
            U += La[fa - xb] * H / 255), w + fa >> 1);
            q[va] += (La[fa] = Ma) / 65536;
            m[va] += (La[++fa] = U) / 65536;
          }
        }
      }
      w += 768 * Q;
    }, C = Pa[b], [K, G, P, D, f, k, u, z, F, I, v, r, B, x, A, E, N, H, ba, ca] = Qa[b], T = 4 * I ** 2;
    y(5513);
    y(4562);
    y(3891);
    Ub(5 > ++b ? g : a);
  }, l = Db.createBuffer(2, 5362944, 44100), q = l.getChannelData(0), m = l.getChannelData(1);
  Cb.buffer = l;
  Cb.loop = !0;
  Ub(g);
}, Db = new AudioContext(), cb = new DOMMatrix(), db = new DOMMatrix(), ab = new Float32Array(16), Sb = new Float32Array(624), Gb = new Float32Array(624), Jb = new Uint8Array(65536), fc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Cb = Db.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Ub(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], m = I => {
        Z.f1s();
        requestAnimationFrame(m);
        var v = (I - (aa || I)) / 1e3;
        if (na += v, c += d = da ? 0 : Ua(0.066, v), aa = I, 0 < d) {
          ia();
          za = $a(h[12].g, h[13].g);
          ta = Za(V(ta, 0, 1), Xa(ta + 60 * d), h[5].g - h[6].i,);
          ra = Za(V(ra, 0, 5), Xa(ra + 56 * d), za,);
          sa = Za(V(sa, 0, 4), Xa(sa + 48 * d), za,);
          ya = V(ya, h[9].i, 0.2 + 0.3 * n(2 * h[9].i - 1),);
          xa = V(xa, wa ? V(xa, -9, 1.5) : p(c / 3), 1,);
          Fa && c > Fa && (Fa = 0, h4.innerHTML = "");
          h[0].j && 0.8 < h[0].g && (13 > oa ? (1 / 0 > Fa && (Fa = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0) : wa || (1 / 0 > Fa && (Fa = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), wa = 1));
          for (const B of e) {
            B.G && (B.h && B.h(eb(cb, B.o)), bb(B.o, Sb, B.H - 1));
          }
          for (const B of h) {
            B.h();
          }
          for (const B of Ga) {
            B.h();
          }
          P();
          Z.b6o(36160, F);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          var {x:v, y:I, z:r} = Ia;
          Z.uae(P("b"), !1, bb(eb().rotateSelf(0, 180).invertSelf().translateSelf(-v, -I, 0.3 - r)),);
          Tb(P("c"), 0, 41);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(P("b"), !1, bb(eb().translateSelf(-v, -I, -r - 0.3)));
          Tb(P("c"), 0, 41);
          Z.f1s();
        }
        ea = 0;
        eb(cb, w);
        da ? w.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : w.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ca, -Da, -Ea,);
        K();
        Z.b6o(36160, u);
        Z.v5y(0, 0, 2048, 2048);
        k[0](54.7 * 1.1);
        k[1](126 * 1.1);
        D();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(D("a"), !1, bb(ja));
        Z.uae(D("b"), !1, bb(w));
        Z.uae(D("i"), !1, q[0]);
        Z.uae(D("j"), !1, q[1]);
        Z.ubu(D("k"), Ca, Da, Ea);
        Tb(D("c"), !ha, 42);
        G();
        Z.ubu(G("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, na);
        Z.ubu(G("k"), Ca, Da, Ea);
        Z.uae(G("b"), !1, bb(eb(w).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, F);
        Z.f1s();
      }, w = new DOMMatrix(), y = new DOMMatrix(), C = g;
      var l = Lb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const K = Rb(Lb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), G = Rb(Lb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), P = Rb(l, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), D = Rb(l, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), f = gb(8, () => ({})), k = gb(2, I => {
        const v = Z.c25();
        return Z.a4v(33984 + I), Z.b9j(3553, v), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), r => {
          let B = 0, x = 0, A = 0, E = 1 / 0, N = -1 / 0, H = 1 / 0, ba = -1 / 0, ca = 1 / 0, T = -1 / 0;
          Z.fas(36160, 36096, 3553, v, 0);
          Z.c4s(256);
          eb().scale3dSelf(r).multiplySelf(eb(ka[I], y).multiplySelf(w).invertSelf(),);
          for (let Q = 0; 8 > Q; ++Q) {
            const M = f[Q], R = (M.x = 4 & Q ? 1 : -1, M.y = 2 & Q ? 1 : -1, M.z = 1 & Q ? 1 : -1, db.transformPoint(M));
            B -= M.x = (0 | R.x) / r / R.w;
            x -= M.y = (0 | R.y) / r / R.w;
            A -= M.z = (0 | R.z) / r / R.w;
          }
          eb().rotateSelf(298, 139).translateSelf(B / 8, x / 8, A / 8);
          for (r = 0; 8 > r; ++r) {
            const {x:Q, y:M, z:R} = db.transformPoint(f[r]);
            E = Ua(E, Q);
            N = Va(N, Q);
            H = Ua(H, M);
            ba = Va(ba, M);
            ca = Ua(ca, R);
            T = Va(T, R);
          }
          r = 10 + I;
          ca *= 0 > ca ? r : 1 / r;
          T *= 0 < T ? r : 1 / r;
          Z.uae(K("b"), !1, bb(eb(cb, y).scaleSelf(2 / (N - E), 2 / (ba - H), 2 / (ca - T),).translateSelf((N + E) / -2, (ba + H) / -2, (ca + T) / 2).multiplySelf(db), q[I],),);
          Tb(K("c"), !ha, 42);
        };
      }), u = Z.c5w();
      l = Z.c25();
      const z = Z.c3z(), F = Z.c5w();
      P();
      Z.uae(P("a"), !1, bb(Bb(1e-4, 2, 1.4, 0.4)));
      D();
      Z.ubh(D("q"), 2);
      Z.ubh(D("h"), 1);
      Z.ubh(D("g"), 0);
      G();
      Z.ubh(G("q"), 2);
      Z.b6o(36160, u);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, F);
      Z.bb1(36161, z);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, z);
      Z.a4v(33986);
      Z.b9j(3553, l);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, l, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, C);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 0);
      NO_INLINE(Eb)();
      NO_INLINE(Kb)();
      requestAnimationFrame(m);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = fc;
  NO_INLINE(ec)(() => {
    Ub(() => {
      let m, w = 0;
      const y = [], C = [], K = [], G = [], P = z => {
        let {x:F, y:I, z:v} = m[z], r = (u[0] = F, u[1] = I, u[2] = v, z = "" + (m.D ? k : D), f.get(z));
        return void 0 !== r ? (F = 3 * r, G[F] = (G[F++] + D[5]) / 2, G[F] = (G[F++] + D[6]) / 2, G[F] = (G[F] + D[7]) / 2) : (f.set(z, r = f.size), C.push(F, I, v, u[3]), K.push(D[4]), G.push(D[5], D[6], D[7])), r;
      }, D = new Int32Array(8), f = new Map(), k = new Int32Array(D.buffer, 0, 5), u = new Float32Array(D.buffer);
      for (const z of e) {
        for (m of (u[3] = 40 === z.H ? -14 : z.G && z.H, z.u)) {
          const {x:F, y:I, z:v} = nb(m);
          D[4] = 0 | m.A;
          D[5] = 32767 * F;
          D[6] = 32767 * I;
          D[7] = 32767 * v;
          for (let r = 2, B = P(0), x = P(1); m.length > r; ++r) {
            y.push(B, x, x = P(r));
          }
        }
        z.u = null;
        z.v = w;
        z.F = w = y.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(C), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(G), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(K), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(y), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ub(b);
      try {
        const [z, F, I, v, r] = JSON.parse(localStorage.DanteSP22,);
        h.map((B, x) => B.g = B.i = B.j = x ? 0 | z[x] : 0);
        Ga.map((B, x) => B.j = 0 | F[x]);
        qa = I;
        ya = r;
        c = v;
        d = 0;
      } catch {
      }
      xa = p(qa);
    });
    const l = gb(11, m => t(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10),), q = gb(10, m => kb(ib(jb(18), l[m]).reverse(), ib(jb(18), l[m + 1]), 1,)).flat();
    Y(() => X([Ha.slice(1),], t(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const m = (f, k, u) => Y(z => {
        z.h = F => F.translateSelf(C() * Math.sin(3 * f + c * f) * k);
        Ha.map(({x:F, z:I}) => {
          X(O(11, 1), t(4 * F, 4, u + 4 * I).scale(0.8, 3, 0.8), W(0.5, 0.3, 0.7, 0.6),);
          X(O(), t(4 * F, 7, u + 4 * I).scale(1, 0.3), W(0.5, 0.5, 0.5, 0.3),);
        });
        X(S(L(O(), t(0, 0, u).scale(5, 1, 5), W(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(F => L(O(), t(5 * F, 0.2, u).rotate(-30 * F).scale(4, 1, 2), W(0.8, 0.8, 0.8, 0.3),)),),);
        X(O(), t(0, -3, u).scale(8, 2, 8), W(0.4, 0.4, 0.4, 0.3));
      }), w = (f, k, u, z) => f.translateSelf(k + Math.sin(c + 2) / 5, u + Math.sin(0.8 * c) / 3, z).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),), y = f => S(L(O(), t(0, -f / 2).scale(6, f - 1, 2.2)), L(O(), t(0, -f / 2 - 6).scale(4, f - 3, 4)), L(O(32, 1), t(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), C = () => Ua(h[2].i, 1 - h[4].i), K = S(L(O(30, 1, 1.15, 1), t(0, -3).scale(3.5, 1, 3.5), W(0.7, 0.4, 0.25, 0.7),), L(O(30, 1, 1.3, 1), t(0, -2.5).scale(2.6, 1, 3), W(0.7, 
      0.4, 0.25, 0.2),), L(O(), t(4, -1.2).scale3d(2), W(0.7, 0.4, 0.25, 0.3)),), G = gb(7, f => L(O(6, 1), t(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), W(0.3, 0.3, 0.38),)).flat(), P = (Y(f => {
        f.h = k => w(k, -12, 4.2, 40 * xa - 66);
        X(K);
        Hb(t(0, -3, 4));
      }), Hb(t(-5.4, 1.5, -19).rotate(0, -90)), Ib(t(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Ib(t(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...jb(18).map(({x:f, z:k}) => [7 * f, 10 * k, 4.5 - 2 * n(f),]),), X(O(), t(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), W(0.8, 0.8, 0.8, 0.2)), Ha.map(({x:f, z:k}) => X(O(6), t(3 * f, 3, 15 * k).scale(0.7, 4, 0.7), W(0.6, 0.3, 0.3, 0.4))), X(O(), t(0, 0, -23).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), X(O(), t(0, 0, 22).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), [-15, 
      15,].map((f, k) => {
        X(O(), t(0, 6.3, f).scale(4, 0.3, 1), W(0.3, 0.3, 0.3, 0.4));
        X(O(), t(0, 1, f).scale(3, 0.2, 0.35), W(0.5, 0.5, 0.5, 0.3));
        Y(u => {
          u.h = z => z.translateSelf(0, 0, f).scaleSelf(1, p(1.22 - h[k + 1].g), 1);
          X(G);
        });
      }), gb(5, f => gb(2, k => X(q, t(18.5 * (k - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * k).scale(1.2, 10, 1.2), W(1, 1, 0.8, 0.2),)),), X(O(), t(3, 1.5, -20).scale(0.5, 2, 5), W(0.7, 0.7, 0.7, 0.2)), X(O(), t(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), W(0.75, 0.75, 0.75, 0.2),), X(O(5), t(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), W(0.6, 0.3, 0.3, 0.4),), X(O(), fb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), W(0.8, 0.2, 0.2, 0.5),), X(S(wb(L(O(6, 0, 0, 0.3), 
      t(8, -3, -4).scale(13, 1, 13), W(0.7, 0.7, 0.7, 0.2),), L(O(6), t(0, -8).scale(9, 8, 8), W(0.4, 0.2, 0.5, 0.5)), L(O(6, 0, 0, 0.3), t(0, -0.92).scale(13, 2, 13), W(0.8, 0.8, 0.8, 0.2),),), L(O(5), J(5, 30, 5), W(0.4, 0.2, 0.6, 0.5)), L(O(5, 0, 1.5), t(0, 1).scale(4.5, 0.3, 4.5), W(0.7, 0.5, 0.9, 0.2),), L(O(), fb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), W(0.5, 0.5, 0.5, 0.5),), L(O(6), t(15, -1.5, 4).scale(3.5, 1, 3.5), W(0.5, 0.5, 0.5, 0.5),),),), Y(f => {
        f.h = k => k.translateSelf(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        X(O(5), t(0, -0.2).scale(5, 1, 5), W(0.6, 0.65, 0.7, 0.3));
        Hb(t(0, 1.2));
      }), Hb(t(15, -2, 4)), m(0.7, 12, 35), m(1, 8.2, 55), Y(f => {
        f.h = k => k.translateSelf(C() * Math.sin(c / 1.5 + 2) * 12);
        X(S(wb(L(O(), J(1.5, 1, 5), W(0.9, 0.9, 0.9, 0.2)), L(O(6), J(4, 1, 5), W(0.9, 0.9, 0.9, 0.2)), L(O(), t(0, -2).scale(2, 3.2, 1.9), W(0.3, 0.8, 0.5, 0.5),), L(O(16, 1, 0, 4), J(1, 1, 1.5).rotate(0, 90), W(0.9, 0.9, 0.9, 0.2),),), L(O(), J(1.3, 10, 1.3), W(0.2, 0.7, 0.4, 0.6)),), t(0, 0, 45),);
        Ib(t(0, 2.8, 45), [0, 0, 4.5,]);
      }), X(O(), t(-18.65, -3, 55).scale(2.45, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)), Y(f => {
        f.h = k => k.translateSelf(9.8 * (1 - C()));
        X(O(3), t(-23, -1.7, 55.8).scale(5, 0.7, 8.3), W(0.3, 0.6, 0.6, 0.2));
        X(O(8), t(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), W(0.8, 0.8, 0.8, 0.2));
        X(O(), t(-23, -3, 55).scale(5.2, 1.7, 3), W(0.5, 0.5, 0.5, 0.3));
        X(O(), t(-23, -2.2, 62).scale(3, 1, 4), W(0.5, 0.5, 0.5, 0.3));
        Hb(t(-23, -0.5, 66.5));
      }), Y(f => {
        f.h = k => k.translateSelf(0, p(1 - 5 * C()) * $a(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
        X(O(), t(-22.55, -3, 55).scale(1.45, 1.4, 2.7), W(0.7, 0.7, 0.7, 0.2));
        X(S(L(O(), J(3, 1.4, 2.7)), L(O(), J(1.2, 8, 1.2)),), t(-33, -3, 55), W(0.7, 0.7, 0.7, 0.2),);
      }), Y(f => {
        f.h = k => k.translateSelf(0, 0, p(1 - 5 * C()) * $a(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
        X(S(L(O(), t(-27, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2),), L(O(), t(-27, -3, 55).scale(1, 3), W(0.9, 0.9, 0.9, 0.2),),),);
        X(O(), t(-39, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2));
      }), Y(f => {
        f.h = k => k.translateSelf(0, -6.5 * h[4].i);
        X(O(6), t(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), W(0.7, 0.7, 0.7, 0.4),);
      }), Hb(t(-55, -1.1, 46).rotate(0, 90)), X(O(6), t(-61.3, -2.4, 49).scale(3, 1, 5), W(0.4, 0.6, 0.6, 0.3)), X(O(7), t(-57, -2.6, 46).scale(4, 1, 4), W(0.8, 0.8, 0.8, 0.3)), [...L(O(), t(0, -3).scale(11, 1.4, 3), W(0.9, 0.9, 0.9, 0.2)), ...S(L(O(6), fb(90).scale(6, 8, 6), W(0.3, 0.6, 0.6, 0.3)), L(O(4, 0, 0.01), t(0, 6).scale(12, 2, 0.75).rotate(0, 45), W(0.3, 0.6, 0.6, 0.3),), L(O(6), fb(90).scale(5, 12, 5), W(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => L(O(5), t(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), W(0.3, 0.6, 0.6, 0.3),)),),]), D = (X(P, t(-53, 0, 55)), Y(f => {
        f.h = k => k.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotateSelf(180 * (1 - h[5].i) + ta, 0);
        X(P);
      }, 2), X(O(), t(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), W(0.7, 0.7, 0.7, 0.2),), X(O(3, 0, -0.5), t(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), W(0.8, 0.8, 0.8, 0.2),), X(S(wb(L(O(), t(-100, -2.4, 55).scale(8, 0.9, 8), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-100, -2.6, 70).scale(3, 1.1, 7), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), W(0.8, 0.8, 0.8, 0.2),), 
      L(O(6), t(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), W(0.6, 0.6, 0.6, 0.3),), L(O(), t(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-100, 0.42, 92).scale(3, 1.1, 4.1), W(0.8, 0.8, 0.8, 0.2),),), L(O(8), t(-100, -1, 55).scale(7, 0.9, 7), W(0.3, 0.3, 0.3, 0.4),), L(O(8), t(-100, -2, 55).scale(4, 0.3, 4), W(0.4, 0.4, 0.4, 0.5),), L(O(8, 0, -3.1), t(-100, -3, 55).scale(0.4, 1, 0.4), W(0.4, 0.4, 0.4, 0.5),),),), Ib(t(-100, 0.2, 55), [0, 0, 7.5,], 
      [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Ib(t(-89, 0.2, 80), [0, 0, 6,]), X(S(L(O(), t(-100, 1, 63).scale(7.5, 4), W(0.5, 0.5, 0.5, 0.4)), L(O(), t(-100, 0, 70).scale(2, 2, 10), W(0.5, 0.5, 0.5, 0.4),), L(O(20, 1), t(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), W(0.5, 0.5, 0.5, 0.4),),),), Y(f => {
        f.h = k => k.translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, p(1.1 - h[6].g), 1);
        X(G);
      }), Ha.map(({x:f, z:k}) => {
        X(O(6), t(7 * f - 100, -3, 7 * k + 55).scale(1, 8.1), W(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(u => X(O(6), t(7 * f - 100, u, 7 * k + 55).scale(1.3, 0.5, 1.3), W(0.4, 0.2, 0.2, 0.8),));
      }), gb(7, f => {
        X(O((23 * f + 1) % 5 + 5, 0, 0.5), t(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), W(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), X(O(), t(-87, -9.5, 24).scale(7, 1, 3), W(0.4, 0.5, 0.6, 0.4)), X(O(4), t(-86, -9.2, 27).scale(5, 1, 5), W(0.5, 0.6, 0.7, 0.3)), X(O(12, 1), t(-86, -9, 31).scale(1.5, 1, 1.5), W(0.3, 0.3, 0.4, 0.1)), Hb(t(-86, -7.5, 31)), Y(f => {
        f.h = k => k.translateSelf(0, 3.5 * (1 - Va(h[6].g, h[7].g)) + $a(h[7].i, h[6].i) * Math.sin(c) * 5,);
        [0, 12, 24,].map(k => X(O(), t(k - 76.9, k / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), W(0.2, 0.5, 0.6, 0.2),));
      }), Y(f => {
        f.h = k => k.translateSelf(0, $a(h[7].i, h[6].i) * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * $a(h[7].i, h[6].i),);
        [6, 18,].map(k => X(O(), t(k - 76.9, k / -16 - 10, 24).rotate(0, 0, -3).skewX(-3).scale(2.8, 1.4, 3), W(0.1, 0.4, 0.5, 0.2),));
      }), X(S(wb(L(O(5), t(0, 0, -7).scale(2, 1.2, 2), W(0.2, 0.4, 0.7, 0.3),), L(O(5), J(9, 1.2, 9), W(0, 0.2, 0.3, 0.5)), L(O(), J(11, 1, 13), W(0.3, 0.4, 0.6, 0.3)),), L(O(5), J(5.4, 5, 5.4), W(0, 0.2, 0.3, 0.5)),), t(-38.9, -11.3, 17),), Hb(t(-38.9, -9.6, 10)), Y(f => {
        f.h = k => k.translateSelf(0, -7.3 * h[7].i);
        X(S(wb(L(O(5), t(0, 2).scale(5, 7, 5).skewY(8), W(0.2, 0.4, 0.5, 0.5),), L(O(5), t(0, 6).scale(1.1, 7, 1.1).skewY(-8), W(0.25, 0.35, 0.5, 0.5),), L(O(5), t(0, 9).scale(0.6, 7, 0.6).skewY(8), W(0.35, 0.3, 0.5, 0.5),),), L(O(5), J(4, 8, 4), W(0.2, 0.4, 0.5, 0.5)), L(O(5), t(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), W(0.2, 0.4, 0.5, 0.5),),), t(-38.9, -11.3, 17),);
        Ib(t(-39.1, -0.6, 17).rotate(11), ...jb(15).map(({x:k, z:u}) => [3 * k, 3 * u, 1.2,]),);
      }), Ha.map(({x:f, z:k}) => {
        X(O(14, 1), t(9 * f - 38.9, -7.3, 11 * k + 17).scale(1, 4), W(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(u => X(O(17, 1), t(9 * f - 38.9, u - 11.3, 11 * k + 17).scale(1.5, 0.5, 1.5), W(0.6, 0.6, 0.6, 0.3),));
      }), X(S(wb(L(O(6), t(0, 0, -36).scale(15, 1.2, 15), W(0.7, 0.7, 0.7, 0.3),), L(O(), t(0, 0, -18).scale(4, 1.2, 6), W(0.45, 0.4, 0.6, 0.3),),), ...gb(6, f => gb(6, k => L(O(6), t(4.6 * k - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * k)).scale(2, 5, 2), W(0.7, 0.7, 0.7, 0.3),))).flat(),), t(-38.9, -11.3, 17),), Ib(t(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), X(O(5), t(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), W(0.8, 0.1, 0.25, 0.4),), Hb(t(-84, -0.5, 85).rotate(0, 
      45)), Y(f => {
        f.h = k => w(k, -123, 1.4, 55 + -65 * ya);
        X(K);
        Hb(t(0, -3, -4).rotate(0, 180));
      }), S(L(O(), t(0, -0.5, 1).scale(1.15, 1.2, 6.5), W(0.25, 0.25, 0.35, 0.3),), L(O(3), t(0, 0, -5.5).scale(3, 2), W(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => L(O(), t(f, -0.5, 1).scale(0.14, 0.3, 6.5), W(0.7, 0.2, 0, 0.3),)),));
      Y(f => {
        f.h = k => k.translateSelf(0, -2, $a(h[10].g, h[11].g) * n(Math.sin(1.1 * c)) * -8.5 + 10);
        gb(2, k => X(D, t(9 * k - 110 + (1 & k), 1.7, -12)));
      });
      Y(f => {
        f.h = k => k.translateSelf(0, -2, $a(h[10].g, h[11].g) * n(Math.sin(2.1 * c)) * -8.5 + 10);
        gb(2, k => X(D, t(9 * (k + 2) - 110 + (1 & k), 1.7, -12)));
      });
      Y(f => {
        f.h = k => k.translateSelf(0, -2, -8.5 * Va((1 - h[10].g) * (1 - $a(h[10].g, h[11].g)), $a(h[10].g, h[11].g) * n(Math.sin(1.5 * c)),) + 10,);
        gb(3, k => X(D, t(9 * k - 106, 1.7, -12)));
      });
      X(S(wb(L(O(), t(26.5, -1.6, 10).scale(20, 2.08, 3)), L(O(), t(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...gb(4, f => L(O(), t(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...gb(3, f => L(O(), t(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), t(-123, 0, -12), W(0.5, 0.5, 0.6, 0.2),);
      Hb(t(-116, -1.4, -18).rotate(0, 180));
      X(O(), t(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), W(0.8, 0.8, 0.8, 0.2),);
      X(O(6), t(-116, -2.6, -16.5).scale(3.2, 0.8, 3), W(0.6, 0.5, 0.7, 0.2));
      X(O(), t(-115.5, -17, -12).scale(0.5, 15, 2.2), W(0.6, 0.6, 0.6, 0.3));
      X(O(8), t(-114, -17, -2).scale(2, 15, 2), W(0.6, 0.6, 0.6, 0.3));
      X(O(8), t(-79, -17, -2).scale(2, 15, 2), W(1, 1, 1, 0.3));
      X(O(), t(-77, -17, -50.5).scale(2.2, 15, 0.5), W(0.6, 0.6, 0.6, 0.3));
      gb(3, f => {
        X(y(16), t(12 * f - 109, -9, -12), W(0.6, 0.6, 0.6, 0.3));
        X(y(16), t(-77, -9, -12 * f - 20).rotate(0, 90), W(0.6, 0.6, 0.6, 0.3),);
      });
      X(S(L(O(12), t(-77, -14.5, -12).scale(4, 17.5, 4), W(0.7, 0.7, 0.7, 0.2),), L(O(), t(-79, 0.1, -12).scale(3.5, 2, 1.3), W(0.4, 0.5, 0.6, 0.2),), L(O(), t(-77, 0.1, -14).scale(1.5, 2, 2), W(0.4, 0.5, 0.6, 0.2),), L(O(12), t(-77, 3.1, -12).scale(3, 5, 3), W(0.4, 0.5, 0.6, 0.2),),),);
      X(O(), t(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), W(0.6, 0.6, 0.6, 0.3),);
      X(O(9), t(-98, -18.4, -40).scale(2.5, 13.5, 2.5), W(0.5, 0.5, 0.5, 0.3));
      X(S(L(O(), t(-93, -5.8, -40).scale(9, 1, 5), W(0.8, 0.8, 0.8, 0.1),), L(O(9), t(-98, -5.8, -40).scale(3, 8, 3), W(0.7, 0.7, 0.7, 0.2),),),);
      Hb(t(-98, -4.4, -40).rotate(0, 90));
      Ib(t(-115, 0.2, -12), [0, 0, 3.5,]);
      Ib(t(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      X(S(wb(L(O(6, 0, 0, 0.6), t(-100, 0.7, 105.5).scale(8, 1, 11), W(0.7, 0.7, 0.7, 0.2),), L(O(), t(-101.5, 0.7, 93.5).scale(10.5, 1, 2), W(0.7, 0.7, 0.7, 0.2),),), L(O(5), t(-100, 0.7, 113).scale(4, 3, 4), W(0.7, 0.7, 0.7, 0.2),),),);
      gb(4, f => Y(k => {
        k.h = u => {
          const z = $a(h[8].i, h[12].i);
          u.translateSelf((2 < f ? 2 * (1 - z) + z : 0) - 100, z * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Va(z, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        X(O(6), t(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), W(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Y(f => {
        f.h = k => {
          const u = $a(h[8].i, h[12].i);
          k.translateSelf(2.5 * (1 - u) - 139.7, -3 * (1 - h[8].g) + u * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * u + 3), 0);
        };
        X(S(L(O(10), J(6, 2, 6), W(0.1, 0.6, 0.5, 0.3)), L(O(10), J(3.3, 6, 3.3), W(0.1, 0.6, 0.5, 0.5)),),);
        X(O(15, 1), t(-7.5).rotate(0, 90).scale(3, 2.3, 3), W(0.4, 0.4, 0.4, 0.3),);
        X(O(10), t(-7.5).rotate(0, 90).scale(2, 2.5, 2), W(0.3, 0.8, 0.7, 0.3));
        X(O(5), t(-7.5).rotate(0, 90).scale(1, 3), W(0.5, 0.5, 0.5, 0.5));
        Hb(t(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(k => X(q, fb(90 * k, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), W(1, 1, 0.8, 0.2),));
        Ib(t(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      Y(f => {
        f.h = k => k.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        X(G);
      });
      [-1, 1,].map(f => {
        [7.2, 1.5,].map(k => X(O(15, 1), t(-7.5 * f - 100, k + 0.7, 96).scale(1.1, 0.5, 1.1), W(0.5, 0.24, 0.2, 0.4),));
        X(q, t(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), W(1, 1, 0.8),);
        X(O(12, 1), t(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), W(0.6, 0.24, 0.2, 0.5),);
        X(S(L(O(), t(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), W(0.5, 0.5, 0.5, 0.4),), L(O(), J(3, 3, 10), W(0.6, 0.24, 0.2, 0.5)), L(O(28, 1), t(0, 3, -5).scale(3, 4, 10).rotate(90, 0), W(0.6, 0.24, 0.2, 0.5),), L(O(5), t(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), W(0.6, 0.24, 0.2, 0.5),), L(O(5), t(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), W(0.6, 0.24, 0.2, 0.5),),), t(f - 100, 0.7, 97),);
      });
      X(S(L(O(), t(-82.07, 0.8, 106).scale(11, 0.9, 2.2), W(0.7, 0.7, 0.7, 0.1),), L(O(45, 1), t(-81, 0.7, 106).scale3d(7.7), W(0.7, 0.7, 0.7, 0.1),),),);
      Y(f => {
        f.h = k => k.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ra);
        X(S(L(O(45, 1), J(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)), L(O(), t(0, 0, -5.5).scale(1.5, 3, 2.7), W(0.45, 0.45, 0.45, 0.2),),),);
        X(O(8), t(0, 2).scale(3, 1.5, 3).rotate(0, 22), W(0.7, 0.7, 0.7, 0.1));
        X(O(5), t(0, 2).scale(1, 2), W(0.3, 0.3, 0.3, 0.2));
        Ib(t(0, 3), ...jb(14).map(({x:k, z:u}) => [5.6 * k, 5.6 * u, 2,]),);
      });
      Y(f => {
        f.h = k => k.translateSelf(-65.8, 0.8, 106).rotateSelf(0, sa);
        [-1, 1,].map(k => X(q, fb(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), W(1, 1, 0.8),));
        X(S(L(O(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), L(O(), J(9, 5, 2), W(0.3, 0, 0, 0.3)),),);
        X(L(O(28, 1), J(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(L(O(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - sa);
        X(S(L(O(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), L(O(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), L(O(), t(0, 0, 7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(L(O(28, 1), J(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(L(O(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + sa);
        X(S(L(O(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), L(O(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), L(O(), t(0, 0, -7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(L(O(28, 1), J(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(L(O(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      X(O(), t(-58, 1, 106).scale(2, 0.65, 2), W(0.7, 0.7, 0.7, 0.2));
      X(O(), t(-50.7, 1, 99).scale(2, 0.65, 1), W(0.7, 0.7, 0.7, 0.2));
      X(O(), t(-42, 0.4, 91).scale(5, 1, 2.5), W(0.7, 0.7, 0.7, 0.3));
      X(O(), t(-34.2, 0.4, 91).scale(3, 1, 3), W(0.7, 0.7, 0.7, 0.3));
      Hb(t(-34, 2.7, 96).rotate(-12, 0));
      X(O(5), t(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), W(0.2, 0.5, 0.5, 0.6),);
      [W(0.1, 0.55, 0.45, 0.2), W(0.2, 0.5, 0.5, 0.3), W(0.3, 0.45, 0.55, 0.4),].map((f, k) => Y(u => {
        u.h = z => {
          z.translateSelf(0, (1 - h[13].i) * (1 - h[14].i) * (k ? 0 : 3) + $a(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * k) * 4,);
        };
        X(O(), t(-23.5, 0.5, 91 + 6.8 * k).scale(1 === k ? 2 : 3.3, 1, 3.3), f);
        2 === k && X(O(), t(-29.1, 0.4, 91).scale(2.1, 1, 3), W(0.7, 0.7, 0.7, 0.3));
        1 === k && X(O(), t(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), W(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => X(q, t(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), W(1, 1, 0.8),));
      gb(3, f => X(y(24.7 - 0.7 * (1 & f)), t(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? W(0.5, 0.5, 0.5, 0.3) : W(0.35, 0.35, 0.35, 0.5),),);
      X(S(L(O(6, 0, 0, 0.3), t(0, -0.92, 95).scale(14, 2, 14), W(0.8, 0.8, 0.8, 0.2),), L(O(5), t(0, 0, 95).scale3d(6), W(0.3, 0.3, 0.3, 0.5)),),);
      Hb(t(0, 1.7, 82).rotate(0, 180));
      X(O(5), t(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), W(0.5, 0.3, 0.3, 0.4),);
      X(O(6), t(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), W(0.5, 0.6, 0.7, 0.3),);
      X(O(), t(0, 16, 129).scale(1.5, 1, 2), W(0.5, 0.6, 0.7, 0.3));
      X(O(7), t(0, 16.2, 133).scale(5, 1, 5), W(0.4, 0.5, 0.6, 0.4));
      X(S(wb(L(O(), t(0, 16, 110.5).scale(12, 1, 3), W(0.5, 0.3, 0.3, 0.4),), L(O(), t(0, 16, 111).scale(3, 1, 3.8), W(0.5, 0.3, 0.3, 0.4),),), L(O(5), t(0, 16, 103.5).scale(5.5, 5, 5.5), W(0.5, 0.3, 0.3, 0.4),),),);
      Y(f => {
        f.h = k => k.translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
        X(O(3), t(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), W(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(k => {
          X(O(6), t(0, 16, k + 95).scale(3, 1, 2.3).rotate(0, 90), W(0.7, 0.7, 0.7, 0.4),);
          X(O(), t(0, 6.2, k + 95).scale(0.5, 11, 0.5), W(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Y(f => {
        f.h = k => {
          const u = $a($a((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          k.translateSelf(0, 16 * u, 8.5 * p(2 * u - 1) + 95);
        };
        X(O(5), J(5, 1.1, 5), W(0.5, 0.3, 0.3, 0.4));
        X(O(5), J(5.5, 0.9, 5.5), W(0.25, 0.25, 0.25, 0.4));
        Hb(t(0, 1.5, -1).rotate(0, 180));
      });
      Ib(t(0, 3, 95), ...jb(9).map(({x:f, z:k}) => [9 * f, 9 * k, 4,]),);
      Ib(t(0, 19, 134), [0, 0, 3.5,]);
    });
    Y(() => {
      X(lb(20), t(0, 1).scale3d(0.5), W(1, 0.3, 0.4));
      X(lb(30), J(0.65, 0.8, 0.55), W(1, 0.3, 0.4));
      X(O(), t(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), W(0.3, 0.3, 0.3));
      [-1, 1,].map(m => {
        X(q, fb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), W(1, 1, 0.8),);
        X(L(S(O(15, 1), L(O(), t(0, 0, 1).scale(2, 2, 0.5)),), fb(-90, 0).scale(0.1, 0.05, 0.1), W(0.3, 0.3, 0.3),), t(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),);
        Y(() => {
          X(O(20, 1), t(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), W(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(O(6, 1), J(0.13, 1.4, 0.13), W(0.3, 0.3, 0.5, 0.1));
      X(O(10), t(0, 1).scale(0.21, 0.3, 0.21), W(1, 0.5, 0.2));
      X(O(3), t(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), W(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Y(() => {
      X(O(6).slice(0, -1), J(0.77, 1, 0.77), W(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(lb(30, 24, (m, w, y) => {
        const C = w / 24, K = m * Math.PI * 2 / 30, G = Math.sin(C ** 0.6 * Math.PI / 2);
        m = C * C * Math.sin(m * Math.PI * 14 / 30) / 4;
        return 23 < w ? {x:y.D = 0, y:-0.5, z:0,} : {x:Math.cos(K) * G, y:Math.cos(C * Math.PI) - C - m, z:Math.sin(K) * G + Math.sin(m * Math.PI * 2) / 4,};
      }), J(0.7, 0.7, 0.7), W(1, 1, 1),);
      [-1, 1,].map(m => X(lb(12), t(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

