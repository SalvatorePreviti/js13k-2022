let aa, da, ea, ha, ia, ja, la, ma, c = 0, na = 0, oa = 0, qa = 0, ra = 0, sa = 0, ta = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 1, d = 0.066;
const e = [], h = [], Ga = [], Ha = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ia = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ja = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Pa = {x:0, y:0, z:0,}, Qa = Math.PI / 180;
var Ra = 0, Sa = 180;
const Ta = {x:0, y:0, z:0,}, n = NO_INLINE(a => 0 > a ? -a : a), Ua = NO_INLINE((a, b) => a < b ? a : b), Va = NO_INLINE((a, b) => b < a ? a : b), Wa = (a, b) => n(a) > b ? a : 0, p = (a, b = 0, k = 1) => a < b ? b : k < a ? k : a, Xa = a => Math.atan2(Math.sin(a * Qa), Math.cos(a * Qa)) / Qa, Ya = (a, b, k) => a + (2 * (b = (b - a) % 360) % 360 - b) * p(k) || 0, Za = (a, b, k) => (0 < k ? 1 > k ? a + (b - a) * k : b : a) || 0, $a = (a, b) => (a = p(a), Za(a, 1 - a, b)), bb = (a, b = ab, k = 0,) => 
(k *= 16, b[k++] = a.m11, b[k++] = a.m12, b[k++] = a.m13, b[k++] = a.m14, b[k++] = a.m21, b[k++] = a.m22, b[k++] = a.m23, b[k++] = a.m24, b[k++] = a.m31, b[k++] = a.m32, b[k++] = a.m33, b[k++] = a.m34, b[k++] = a.m41, b[k++] = a.m42, b[k++] = a.m43, b[k] = a.m44, b), eb = (a = cb, b = db,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, 
b.m43 = a.m43, b.m44 = a.m44, b), t = NO_INLINE((a, b, k) => cb.translate(a, b, k)), fb = NO_INLINE((a, b, k) => cb.rotate(a, b, k)), K = NO_INLINE((a, b, k) => cb.scale(a, b, k)), gb = (a, b) => Array.from(Array(a), (k, l) => b(l)), hb = (a, b, k) => (a.D = k, a.A = b, a), ib = (a, b, k = a.A) => hb(a.map(l => {
  let q, m;
  return {x:l, y:q, z:m} = l, {x:l, y:q, z:m} = b.transformPoint({x:l, y:q, z:m,}), {x:l, y:q, z:m,};
}), k, a.D,), L = (a, b, k) => a.map(l => ib(l, b, k)), jb = (a, b = 0) => gb(a, k => {
  const l = Math.cos(2 * Math.PI * k / a);
  return {x:Math.sin(2 * Math.PI * k / a), y:0, z:0.01 > n(l) ? l : 0 > l ? l - b : l + b,};
}), kb = (a, b, k) => a.map((l, q, {length:m}) => hb([l, b[m - q - 1], b[m - (q + 1) % m - 1], a[(q + 1) % m],], a.A, k,)), O = (a, b, k = 0, l,) => (a = a ? jb(a, l) : Ha, l = ib(a, t(0, 1).scale3d(0 < k ? k : 1)), a = ib(a, t(0, -1).scale3d(0 > k ? -k : 1)).reverse(), [...kb(a, l, b), l, a,]), lb = (a, b = a, k = (l, q) => (q *= Math.PI / b, {x:Math.cos(l *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(l) * Math.sin(q),})) => {
  const l = [];
  for (let q = 0; a > q; q++) {
    for (let m = 0; b > m; m++) {
      const v = hb([], 0, 1);
      l.push(v);
      v.push(k(q, m, v));
      m && v.push(k((q + 1) % a, m, v));
      b - 1 > m && v.push(k((q + 1) % a, m + 1 % b, v));
      v.push(k(q, m + 1 % b, v));
    }
  }
  return l;
}, mb = ({x:a, y:b, z:k}, l) => a * l.x + b * l.y + k * l.z, nb = a => {
  let b, k = 0, l = 0, q = 0, m = a.at(-1);
  for (b of a) {
    k += (m.y - b.y) * (m.z + b.z), l += (m.z - b.z) * (m.x + b.x), q += (m.x - b.x) * (m.y + b.y), m = b;
  }
  return b = Math.hypot(k, l, q), k /= b, l /= b, q /= b, {x:k, y:l, z:q, w:k * m.x + l * m.y + q * m.z,};
}, ob = (a, b) => {
  var k, l, q, m = b.C;
  for (var v = 0; m.length > v; ++v) {
    if (-0.00008 > (k = mb(a, m[v]) - a.w) ? q = b : 8e-5 < k && (l = b), q && l) {
      l = [];
      q = [];
      m = b.C;
      v = b.B;
      let y = m.at(-1), B = mb(a, y) - a.w;
      for (const F of m) {
        k = mb(a, F) - a.w, 8e-5 > B && q.push(y), -0.00008 < B && l.push(y), (8e-5 < B && -0.00008 > k || -0.00008 > B && 8e-5 < k) && (B /= k - B, y = {x:y.x + (y.x - F.x) * B, y:y.y + (y.y - F.y) * B, z:y.z + (y.z - F.z) * B,}, l.push(y), q.push(y)), y = F, B = k;
      }
      return {m:2 < l.length && {C:hb(l, m.A, m.D), B:v, s:b,}, l:2 < q.length && {C:hb(q, m.A, m.D), B:v, s:b,},};
    }
  }
  return {m:l, l:q,};
}, pb = (a, b, k = nb(b.C)) => {
  let l, q, m;
  return a ? ({m:l, l:q} = ob(a, b), l || q || a.u.push(b), l && (a.m = pb(a.m, l, k)), q && (a.l = pb(a.l, q, k))) : ({x:l, y:q, z:k, w:m} = k, a = {x:l, y:q, z:k, w:m, u:[b,], m:0, l:0,}), a;
}, qb = (a, b, k) => {
  const l = [], q = (m, v) => {
    let {m:y, l:B} = ob(m, v);
    y || B || (0 < k * mb(m, b) ? y = v : B = v);
    y && (m.m ? q(m.m, y) : l.push(y));
    B && m.l && q(m.l, B);
  };
  for (const m of b.u) {
    q(a, m);
  }
  return l;
}, tb = (a, b) => a && (b(a), tb(a.m, b), tb(a.l, b)), ub = a => (tb(a, b => {
  const k = b.l;
  b.l = b.m;
  b.m = k;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const l of b.u) {
    l.B = !l.B;
  }
}), a), vb = a => a.length ? a.reduce((b, k) => pb(b, {C:k, B:0, s:0,}), 0) : a, yb = (...a) => a.reduce((b, k) => {
  const l = [];
  if (b = vb(b), k) {
    k = vb(k);
    tb(b, q => q.u = qb(k, q, 1));
    tb(k, q => l.push([q, qb(b, q, -1),]));
    for (let [q, m] of l) {
      for (const v of m) {
        pb(b, v, q);
      }
    }
  }
  return b;
}), S = (a, ...b) => {
  const k = m => {
    let v;
    return m.s && ((v = l.get(m.s)) ? (q.delete(v), m = k(m.s)) : l.set(m.s, m)), m;
  }, l = new Map(), q = new Map();
  return a = ub(yb(ub(vb(a)), ...b)), tb(a, m => {
    for (const v of m.u) {
      q.set(k(v), v.B);
    }
  }), Array.from(q, ([{C:m}, v]) => {
    const y = m.map(({x:B, y:F, z:H}) => ({x:B, y:F, z:H,}));
    return hb(v ? y.reverse() : y, m.A, m.D);
  });
}, V = NO_INLINE((a, b, k) => Za(a, b, 1 - Math.exp(-k * d))), zb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][oa = Ga.reduce((a, {j:b}) => a + b, 0)] + " / XIII";
}, Ab = () => {
  localStorage.DanteSP22 = JSON.stringify([h.map(({j:a}) => a), Ga.map(({j:a}) => a), qa, c, ya,]);
}, Bb = (a, b, k, l) => new DOMMatrix([k, 0, 0, 0, 0, l, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Eb = () => {
  let a, b, k, l, q, m, v, y, B, F, H, P, C, f, g = !0;
  const w = [], z = () => {
    b4.innerHTML = "Music: " + g;
    da || !g ? Cb.disconnect() : Cb.connect(Db.destination);
  }, G = () => {
    const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ja = Bb(0.3, 181, u, 1.732051);
    la = [Bb(0.3, 55, u, 1.732051), Bb(55, 181, u, 1.732051),];
    l = y = void 0;
    w.length = ea = f = P = C = Aa = Ba = 0;
  }, J = (u, r = 0) => {
    if (da !== u) {
      da = u;
      ha = r;
      G();
      zb();
      document.body.className = u ? "l m" : "l";
      try {
        u ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Cb.start());
      } catch {
      }
      z();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => J(!1);
  b2.onclick = () => J(!1, 1);
  b5.onclick = () => J(!0);
  b4.onclick = () => {
    g = !g;
    z();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = u => {
    if (!da && (u.target === hC && (ea = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = u => {
    let r;
    u.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[u.code], (w[r] = !!u.type[5] && !0) && (0 === r && (ea = 1), 1 === r && J(!0)));
  };
  onmousemove = ({movementX:u, movementY:r}) => {
    ha && (u || r) && (Sa += 0.1 * u, Ra += 0.1 * r);
  };
  hC.ontouchstart = u => {
    if (!da) {
      for (let {pageX:r, pageY:D, identifier:x} of u.changedTouches) {
        ha && r > hC.clientWidth / 2 ? void 0 === y && (B = 0, m = r, v = D, y = x, F = Sa, H = Ra) : void 0 === l && (q = 0, b = r, k = D, l = x);
      }
      a = na;
    }
  };
  hC.ontouchmove = u => {
    if (!da) {
      for (let {pageX:E, pageY:N, identifier:I} of u.changedTouches) {
        var r, D, x, A;
        y === I && (Sa = F + (E - m) / 2.3, Ra = H + (N - v) / 2.3, B = 1);
        l === I && (I = (b - E) / 20, r = n(I), D = (k - N) / 20, x = n(D), (A = 0.5 < Va(r, x)) && (q = 1), P = (A && 0.2 < r) * p(I, -1), C = (A && 0.2 < x) * p(D, -1), 2 < r && (b = E + 20 * (0 > I ? -1 : 1)), 2 < x && (k = N + 20 * (0 > D ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = u => {
    let r;
    document.activeElement === document.body && u.preventDefault();
    for (const D of u.changedTouches) {
      D.identifier === y ? (y = void 0, B || (r = 1), B = 0) : D.identifier === l ? (l = void 0, C = P = 0, q || (r = 1), q = 0) : r = 1;
    }
    u.target === hC && r && a && 0.02 < (u = na - a) && 0.7 > u && (ea = 1);
  };
  ia = () => {
    Aa = C + (w[4] ? 1 : 0) - (w[5] ? 1 : 0);
    Ba = P + (w[2] ? 1 : 0) - (w[3] ? 1 : 0);
    var u = navigator.getGamepads()[0];
    if (u) {
      const r = x => D[x]?.pressed || 0 < D[x]?.value ? 1 : 0, D = u.buttons;
      u = u.axes;
      ha && (Ra += d * Wa(u[3], 0.3) * 80, Sa += d * Wa(u[2], 0.3) * 80);
      Aa += r(12) - r(13) - Wa(u[1], 0.2);
      Ba += r(14) - r(15) - Wa(u[0], 0.2);
      r(9) && J(!0);
      (u = r(3) || r(2) || r(1) || r(0)) && !f && (ea = 1);
      f = u;
    }
  };
  document.onvisibilitychange = onblur = onresize = G;
  J(!0);
}, W = NO_INLINE((a, b, k, l = 0) => 255 * l << 24 | 255 * k << 16 | 255 * b << 8 | 255 * a), X = (a, b = new DOMMatrix(), k) => ma.u.push(...L(a, b, k)), Y = (a, b = 1) => {
  const k = ma;
  b = {o:new DOMMatrix(), H:e.length, G:b, u:[],};
  return e.push(b), a(ma = b), ma = k, b;
}, Fb = a => (a = a.transformPoint(), Math.hypot(Pa.x - a.x, Pa.y - a.y, Pa.z - a.z,)), Hb = a => {
  const b = ma, k = h.length, l = {j:0, g:0, i:0, s:b, o:a, h() {
    l.g = V(l.g, l.j, 4);
    l.i = V(l.i, l.j, 1);
    eb(b.o).multiplySelf(a);
    ea && 3 > Fb(db) && (0.3 > l.g || 0.7 < l.g) && (l.j = l.j ? 0 : 1, k && 1 / 0 > Fa && (Fa = c + 1, h4.innerHTML = "* click *"), qa = k, Ab());
    bb(db.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1), Gb, k + 13,);
    Gb[16 * k + 223] = 1 - l.g;
  },};
  h.push(l);
  X(O(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(O(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(O(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), W(0.5, 0.5, 0.4));
}, Ib = (a, ...b) => {
  let k = -1, l = 0, q = 0, m = 0, v = 0, y = 0, B = 1, F = 3;
  const H = {j:0, h() {
    if (!H.j) {
      let A, E, N, I, ba, ca, T, Q = 1, M = 1 / 0;
      for (const R of f) {
        var {x:u, z:r, w:D} = R;
        r = (u = Math.hypot(w - u, z - r)) - D;
        T ||= u < D;
        0 < r && M > r && (M = r, g = R);
        Q = Ua(Q, u / D);
      }
      T || ({x, z:A, w:E} = g, N = w - x, I = z - A, ba = Math.hypot(N, I), ca = Math.atan2(-I, N), B && (q = (Math.random() - 0.5) * Math.PI / 2, F = p(F / (1 + Math.random()))), ca += q, k = -Math.cos(ca), l = Math.sin(ca), 0.1 < ba && (ba = Ua(ba, E) / (ba || 1), w = N * ba + x, z = I * ba + A));
      B = T;
      F = V(F, 6 * (1 - Q) + 3, Q + 3);
      G = V(G, w = V(w, w + k, F), F);
      J = V(J, z = V(z, z + l, F), F);
      m = Ya(m, Math.atan2(G - v, J - y) / Qa - 180, 1 - Math.exp(-3 * d),);
      if (1.6 > Fb(eb(P.o).multiplySelf(a).translateSelf(v = G, 0, y = J).rotateSelf(0, m, 7 * Math.sin(1.7 * c)),)) {
        H.j = 1;
        var x = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][oa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        1 / 0 > Fa && (Fa = c + (oa && 12 > oa ? 5 : 7), h4.innerHTML = x);
        zb();
        Ab();
      }
    }
    H.j && eb(e[2].o).translateSelf(C % 4 * 1.2 - 1.7 + Math.sin(c + C) / 7, -2, 1.7 * (C / 4 | 0) - 5.5 + n(C % 4 - 2) + Math.cos(c / 1.5 + C) / 6,);
    bb(db, Gb, C);
  },}, P = ma, C = Ga.length, f = b.map(([u, r, D]) => ({x:u, z:r, w:D,}));
  let g = f[0], {x:w, z} = g, G = w, J = z;
  Ga.push(H);
}, Jb = () => {
  let a, b, k, l, q, m, v, y, B, F, H, P, C, f = 1, g = 2, w = 2;
  const z = () => (g ? h[qa].s : e[b && 1 === e[b].G && b || 0]).o, G = x => {
    const {x:A, y:E, z:N} = 1 < g ? eb(h[qa].s.o).multiplySelf(h[qa].o,).transformPoint({x:0, y:qa || 0.9 < xa ? 15 : 1, z:-2.4,}) : z().transformPoint(Ta);
    x && (v = (A - Pa.x) / d, y = (N - Pa.z) / d);
    Pa.x = A;
    Pa.y = E;
    Pa.z = N;
  }, J = (x, A, E) => {
    eb(z()).invertSelf();
    db.m41 = db.m42 = db.m43 = 0;
    x = db.transformPoint({x, z:E, w:0,});
    Ta.x += x.x;
    Ta.y += A;
    Ta.z += x.z;
    G();
  }, u = () => {
    var x = 0, A = 0, E = 0;
    let N = 0;
    var I = -1;
    let ba = 0, ca = 0;
    for (var T = 0; 36 > T; ++T) {
      var Q = 512 * T;
      for (var M = 96; 416 > M; M += 4) {
        for (var R = 0; 2 > R; ++R) {
          var ka = D[Q + M + R], pa = D[Q + M + R + 2];
          ka > N && (N = ka);
          ka + pa && (0 > I || I === T) && (I = T, pa === a ? ++x : A && A !== pa || (A = pa, ++E));
        }
      }
    }
    a = 0 > I ? 0 : E > 2 * x ? A : a;
    for (x = 36; 128 > x; x += 1) {
      T = I = E = A = 0;
      Q = 512 * x;
      for (M = 0; 128 > M; M += 1) {
        for (R = Q + 4 * M, ka = 0; 2 > ka; ++ka) {
          pa = D[R + ka];
          const Ka = D[R + ka + 2];
          (ka ? 64 < M : 64 > M) ? A = Va(A, pa) : E = Va(E, pa);
          ka ? T = Va(T, Ka) : I = Va(I, Ka);
        }
      }
      n(E - A) > n(ba) && (ba = E - A);
      n(T - I) > n(ca) && (ca = T - I);
    }
    J(ba / 255, N / 255, ca / 255);
  }, r = (x, A, E, N) => Za(x, A, f || (p(n(A - x) ** 0.5 - E) + 1 / 7) * (1 - Math.exp(-(1.5 * N) * d))), D = new Uint8Array(65536);
  e[37].h = x => {
    G(a);
    Z.r9r(0, 0, 128, 128, 6408, 5121, D);
    NO_INLINE(u)();
    !g && a === b || (b = a, A = eb(z()).invertSelf().transformPoint(Pa), Ta.x = A.x, Ta.y = A.y, Ta.z = A.z);
    g = g && (a ? 0 : 1);
    var {x:A, y:E, z:N} = Pa;
    E = (E < (-20 > A || 109 > N ? -25 : -9) && (g = 2), 1 === a && (h[9].j = -15 > A && 0 > N ? 1 : 0), F = Za(V(F, E, 2), E, g || 8 * n(F - E)), P = r(P, F, 2, 1), H = r(H, A, 0.5, 1), C = r(C, N, 0.5, 1), m = V(m, za * (27 < a && 32 > a), 2,), ha ? (E = g + (1 - Math.exp(-18 * d)), Ca = Za(Ca, A, E), Da = Za(Da, F + 1.5, E), Ea = Za(Ea, N, E), Sa = Xa(Sa)) : (Ea = r(Ea, C + -18 + 5 * m, 1, 2 + m,), Da = r(Da, Va(P + p((-60 - N) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2,), Ca = r(Ca, H, 1, 2 + m,), E = 
    Ua(-6, -n(C - Ea)), I = H - Ca, Sa = Ya(Sa, 90 - Xa(Math.atan2(E, I) / Qa), f + (1 - Math.exp(-10 * d)),), Ra = Ya(Ra, 90 - Math.atan2(Math.hypot(E, I), Da - P) / Qa, f + (1 - Math.exp(-10 * d)),)), Ra = p(Ra, -87, 87), f = 0, x.translateSelf(A, F, N).rotateSelf(0, l), p(Aa, -1));
    var I = p(Ba, -1);
    x = Wa(Math.hypot(E, I) ** 0.5, 0.1);
    A = Math.atan2(E, I);
    E = x * n(E) * Math.sin(A);
    I = x * n(I) * Math.cos(A);
    x && (k = 90 - A / Qa);
    q = V(q, x, 10);
    l = Ya(l, k, 1 - Math.exp(-8 * d));
    v = a || g ? 0 : V(v, 0, 3);
    y = a || g ? 0 : V(y, 0, 3);
    B = g ? 0 : V(B, a ? 7 * p(2 * x) : 0, a ? 9 : 1);
    w = V(w, a ? 6.5 : 8, 4);
    A = ha ? (180 - Sa) * Qa : 0;
    J(d * (v + B * (I * Math.cos(A) - E * Math.sin(A))), -w * d, d * (y + B * (I * Math.sin(A) + E * Math.cos(A))),);
  };
  [39, 38,].map((x, A) => e[x].h = E => eb(e[37].o, E).translateSelf(0, q * p(0.45 * Math.sin(9.1 * c - Math.PI * A - Math.PI / 2)),).rotateSelf(q * Math.sin(9.1 * c - Math.PI * A) * 0.25 / Qa, 0));
}, Kb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), Qb = (a, b) => {
  const k = {}, l = Z.c1h();
  return Z.abz(l, a), Z.abz(l, Kb(b, 35632)), Z.l8l(l), q => q ? k[q] || (k[q] = Z.gan(l, q)) : Z.u7y(l);
}, Sb = (a, b, k) => {
  let l;
  da ? (l = fb(0, 40 * Math.sin(na) - 70), bb(l, Rb, 37), bb(l, Rb, 38), bb(l, Rb, 39), Z.uae(a, !1, Rb), Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v,)) : (Z.uae(a, !1, Rb), Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6,), Z.uae(a, !1, Gb), Z.das(4, e[k].F - e[k].v, 5123, 2 * e[k].v, Ga.length,), Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,));
}, Tb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Ub = a => Math.sin(a * Math.PI * 2), Vb = a => 0.5 > a % 1 ? 1 : -1, Wb = a => a % 1 * 2 - 1, Xb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, dc = a => {
  let b = 0;
  const k = () => {
    let v = 0;
    const y = Q => {
      let M, R, ka, pa = 0, Ka = 0;
      const Lb = [], La = new Int32Array(768 * Q), Yb = 2 ** (r - 9) / Q, Zb = Math.PI * 2 ** (N - 8) / Q, wb = ba * Q & -2;
      for (let rb = 0; 11 >= rb; ++rb) {
        for (let sb = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + rb]; 32 > sb; ++sb) {
          const Nb = (32 * rb + sb) * Q;
          for (var Ma = 0; 4 > Ma; ++Ma) {
            if (M = 0, Mb && (M = B[Mb - 1].charCodeAt(sb + 32 * Ma) - 40, M += 0 < M ? 106 : 0), M) {
              var fa;
              if (!(fa = Lb[M])) {
                fa = M;
                let U = void 0, ua = void 0;
                var Ob = M;
                let $b = 0, ac = 0;
                const bc = 2 > b ? Wb : Ub, cc = 2 > b ? 1 > b ? Vb : Xb : Ub, Pb = new Int32Array(z + G + T);
                for (let Na = 0, xb = 0; z + G + T > Na; ++Na, ++xb) {
                  let Oa = 1;
                  z > Na ? Oa = Na / z : z + G > Na || (Oa = (1 - (Oa = (Na - z - G) / T)) * 3 ** (-u / 16 * Oa));
                  0 > xb || (xb -= 4 * Q, ua = 0.00396 * 2 ** ((Ob + H - 256) / 12), U = 0.00396 * 2 ** ((Ob + f - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Pb[Na] = 80 * (bc($b += ua * Oa ** (P / 32)) * F + cc(ac += U * Oa ** (g / 32)) * C + (w ? (2 * Math.random() - 1) * w : 0)) * Oa | 0;
                }
                fa = Lb[fa] = Pb;
              }
              for (let U = 0, ua = 2 * Nb; fa.length > U; ++U, ua += 2) {
                La[ua] += fa[U];
              }
            }
          }
          for (let U, ua = 0; Q > ua; ++ua) {
            Ma = 0;
            fa = 2 * (Nb + ua);
            var va = (((U = La[fa]) || ka) && (R = 0.00308 * D, 1 !== b && 4 !== b || (R *= Math.sin(Yb * fa * Math.PI * 2) * ca / 512 + 0.5), R = 1.5 * Math.sin(R), pa += R * Ka, va = (1 - x / 255) * (U - Ka) - pa, Ka += R * va, U = 4 === b ? Ka : 3 === b ? va : pa, b || (U = 1 > (U *= 22e-5) ? -1 < U ? Math.sin(U / 4 * Math.PI * 2) : -1 : 1, U /= 22e-5), U *= A / 32, ka = 1e-5 < U * U, va = Math.sin(Zb * fa) * E / 512 + 0.5, Ma = U * (1 - va), U *= va), fa < wb || (Ma += La[1 + fa - wb] * I / 255, 
            U += La[fa - wb] * I / 255), v + fa >> 1);
            q[va] += (La[fa] = Ma) / 65536;
            m[va] += (La[++fa] = U) / 65536;
          }
        }
      }
      v += 768 * Q;
    }, B = Ia[b], [F, H, P, C, f, g, w, z, G, J, u, r, D, x, A, E, N, I, ba, ca] = Ja[b], T = 4 * J ** 2;
    y(5513);
    y(4562);
    y(3891);
    Tb(5 > ++b ? k : a);
  }, l = Db.createBuffer(2, 5362944, 44100), q = l.getChannelData(0), m = l.getChannelData(1);
  Cb.buffer = l;
  Cb.loop = !0;
  Tb(k);
}, Db = new AudioContext(), cb = new DOMMatrix(), db = new DOMMatrix(), ab = new Float32Array(16), Rb = new Float32Array(624), Gb = new Float32Array(624), ec = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Cb = Db.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, k, l) => (b * l + k.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Tb(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], m = J => {
        Z.f1s();
        requestAnimationFrame(m);
        var u = (J - (aa || J)) / 1e3;
        if (na += u, c += d = da ? 0 : Ua(0.066, u), aa = J, 0 < d) {
          ia();
          za = $a(h[12].g, h[13].g);
          ta = Za(V(ta, 0, 1), Xa(ta + 60 * d), h[5].g - h[6].i,);
          ra = Za(V(ra, 0, 5), Xa(ra + 56 * d), za,);
          sa = Za(V(sa, 0, 4), Xa(sa + 48 * d), za,);
          ya = V(ya, h[9].i, 0.2 + 0.3 * n(2 * h[9].i - 1),);
          xa = V(xa, wa ? V(xa, -9, 1.5) : p(c / 3), 1,);
          Fa && c > Fa && (Fa = 0, h4.innerHTML = "");
          h[0].j && 0.8 < h[0].g && (13 > oa ? (1 / 0 > Fa && (Fa = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0) : wa || (1 / 0 > Fa && (Fa = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), wa = 1));
          for (const D of e) {
            D.G && (D.h && D.h(eb(cb, D.o)), bb(D.o, Rb, D.H - 1));
          }
          for (const D of h) {
            D.h();
          }
          for (const D of Ga) {
            D.h();
          }
          P();
          Z.b6o(36160, G);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          var {x:u, y:J, z:r} = Pa;
          Z.uae(P("b"), !1, bb(eb().rotateSelf(0, 180).invertSelf().translateSelf(-u, -J, 0.3 - r)),);
          Sb(P("c"), 0, 41);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(P("b"), !1, bb(eb().translateSelf(-u, -J, -r - 0.3)));
          Sb(P("c"), 0, 41);
          Z.f1s();
        }
        ea = 0;
        eb(cb, v);
        da ? v.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : v.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ca, -Da, -Ea,);
        F();
        Z.b6o(36160, w);
        Z.v5y(0, 0, 2048, 2048);
        g[0](54.7 * 1.1);
        g[1](126 * 1.1);
        C();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(C("a"), !1, bb(ja));
        Z.uae(C("b"), !1, bb(v));
        Z.uae(C("i"), !1, q[0]);
        Z.uae(C("j"), !1, q[1]);
        Z.ubu(C("k"), Ca, Da, Ea);
        Sb(C("c"), !ha, 42);
        H();
        Z.ubu(H("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, na);
        Z.ubu(H("k"), Ca, Da, Ea);
        Z.uae(H("b"), !1, bb(eb(v).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, G);
        Z.f1s();
      }, v = new DOMMatrix(), y = new DOMMatrix(), B = k;
      var l = Kb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const F = Qb(Kb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), H = Qb(Kb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), P = Qb(l, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz+vec3(0,1.49,b[0][0]*.3),1);if(gl_FragCoord.y>36.){float r=1.-sin(gl_FragCoord.x*.02454369),e=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?e*(1.-abs(a.x)):0.)*r,vec2(b[0][0]*o.z>0.?e*(1.-r):0.));return;}float r=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(r),vec2(r>0.?m.w/255.:0.));}",), C = Qb(l, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), f = gb(8, () => ({})), g = gb(2, J => {
        const u = Z.c25();
        return Z.a4v(33984 + J), Z.b9j(3553, u), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), r => {
          let D = 0, x = 0, A = 0, E = 1 / 0, N = -1 / 0, I = 1 / 0, ba = -1 / 0, ca = 1 / 0, T = -1 / 0;
          Z.fas(36160, 36096, 3553, u, 0);
          Z.c4s(256);
          eb().scale3dSelf(r).multiplySelf(eb(la[J], y).multiplySelf(v).invertSelf(),);
          for (let Q = 0; 8 > Q; ++Q) {
            const M = f[Q], R = (M.x = 4 & Q ? 1 : -1, M.y = 2 & Q ? 1 : -1, M.z = 1 & Q ? 1 : -1, db.transformPoint(M));
            D -= M.x = (0 | R.x) / r / R.w;
            x -= M.y = (0 | R.y) / r / R.w;
            A -= M.z = (0 | R.z) / r / R.w;
          }
          eb().rotateSelf(298, 139).translateSelf(D / 8, x / 8, A / 8);
          for (r = 0; 8 > r; ++r) {
            const {x:Q, y:M, z:R} = db.transformPoint(f[r]);
            E = Ua(E, Q);
            N = Va(N, Q);
            I = Ua(I, M);
            ba = Va(ba, M);
            ca = Ua(ca, R);
            T = Va(T, R);
          }
          r = 10 + J;
          ca *= 0 > ca ? r : 1 / r;
          T *= 0 < T ? r : 1 / r;
          Z.uae(F("b"), !1, bb(eb(cb, y).scaleSelf(2 / (N - E), 2 / (ba - I), 2 / (ca - T),).translateSelf((N + E) / -2, (ba + I) / -2, (ca + T) / 2).multiplySelf(db), q[J],),);
          Sb(F("c"), !ha, 42);
        };
      }), w = Z.c5w();
      l = Z.c25();
      const z = Z.c3z(), G = Z.c5w();
      P();
      Z.uae(P("a"), !1, bb(Bb(1e-4, 2, 1.4, 0.4)));
      C();
      Z.ubh(C("q"), 2);
      Z.ubh(C("h"), 1);
      Z.ubh(C("g"), 0);
      H();
      Z.ubh(H("q"), 2);
      Z.b6o(36160, w);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, G);
      Z.bb1(36161, z);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, z);
      Z.a4v(33986);
      Z.b9j(3553, l);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, l, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, B);
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
      NO_INLINE(Jb)();
      requestAnimationFrame(m);
    }
  }, k = new Image();
  k.onload = k.onerror = b;
  k.src = ec;
  NO_INLINE(dc)(() => {
    Tb(() => {
      let m, v = 0;
      const y = [], B = [], F = [], H = [], P = z => {
        let {x:G, y:J, z:u} = m[z], r = (w[0] = G, w[1] = J, w[2] = u, z = "" + (m.D ? g : C), f.get(z));
        return void 0 !== r ? (G = 3 * r, H[G] = (H[G++] + C[5]) / 2, H[G] = (H[G++] + C[6]) / 2, H[G] = (H[G] + C[7]) / 2) : (f.set(z, r = f.size), B.push(G, J, u, w[3]), F.push(C[4]), H.push(C[5], C[6], C[7])), r;
      }, C = new Int32Array(8), f = new Map(), g = new Int32Array(C.buffer, 0, 5), w = new Float32Array(C.buffer);
      for (const z of e) {
        for (m of (w[3] = 40 === z.H ? -14 : z.G && z.H, z.u)) {
          const {x:G, y:J, z:u} = nb(m);
          C[4] = 0 | m.A;
          C[5] = 32767 * G;
          C[6] = 32767 * J;
          C[7] = 32767 * u;
          for (let r = 2, D = P(0), x = P(1); m.length > r; ++r) {
            y.push(D, x, x = P(r));
          }
        }
        z.u = null;
        z.v = v;
        z.F = v = y.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(B), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(H), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(F), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(y), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Tb(b);
      try {
        const [z, G, J, u, r] = JSON.parse(localStorage.DanteSP22,);
        h.map((D, x) => D.g = D.i = D.j = x ? 0 | z[x] : 0);
        Ga.map((D, x) => D.j = 0 | G[x]);
        qa = J;
        ya = r;
        c = u;
        d = 0;
      } catch {
      }
      xa = p(qa);
    });
    const l = gb(11, m => t(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10),), q = gb(10, m => kb(ib(jb(18), l[m]).reverse(), ib(jb(18), l[m + 1]), 1,)).flat();
    Y(() => X([Ha.slice(1),], t(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const m = (f, g, w) => Y(z => {
        z.h = G => G.translateSelf(B() * Math.sin(3 * f + c * f) * g);
        Ha.map(({x:G, z:J}) => {
          X(O(11, 1), t(4 * G, 4, w + 4 * J).scale(0.8, 3, 0.8), W(0.5, 0.3, 0.7, 0.6),);
          X(O(), t(4 * G, 7, w + 4 * J).scale(1, 0.3), W(0.5, 0.5, 0.5, 0.3),);
        });
        X(S(L(O(), t(0, 0, w).scale(5, 1, 5), W(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(G => L(O(), t(5 * G, 0.2, w).rotate(-30 * G).scale(4, 1, 2), W(0.8, 0.8, 0.8, 0.3),)),),);
        X(O(), t(0, -3, w).scale(8, 2, 8), W(0.4, 0.4, 0.4, 0.3));
      }), v = (f, g, w, z) => f.translateSelf(g + Math.sin(c + 2) / 5, w + Math.sin(0.8 * c) / 3, z).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),), y = f => S(L(O(), t(0, -f / 2).scale(6, f - 1, 2.2)), L(O(), t(0, -f / 2 - 6).scale(4, f - 3, 4)), L(O(32, 1), t(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), B = () => Ua(h[2].i, 1 - h[4].i), F = S(L(O(30, 1, 1.15, 1), t(0, -3).scale(3.5, 1, 3.5), W(0.7, 0.4, 0.25, 0.7),), L(O(30, 1, 1.3, 1), t(0, -2.5).scale(2.6, 1, 3), W(0.7, 
      0.4, 0.25, 0.2),), L(O(), t(4, -1.2).scale3d(2), W(0.7, 0.4, 0.25, 0.3)),), H = gb(7, f => L(O(6, 1), t(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), W(0.3, 0.3, 0.38),)).flat(), P = (Y(f => {
        f.h = g => v(g, -12, 4.2, 40 * xa - 66);
        X(F);
        Hb(t(0, -3, 4));
      }), Hb(t(-5.4, 1.5, -19).rotate(0, -90)), X(O(), t(0, 0, 0).scale(1, 5, 1), W(0.3, 0.3, 0.38)), X(O(), t(3, 0, 3).scale(1, 5, 1).rotate(0, 45), W(0.3, 0.3, 0.38)), Ib(t(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Ib(t(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...jb(18).map(({x:f, z:g}) => [7 * f, 10 * g, 4.5 - 2 * n(f),]),), X(O(), t(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), W(0.8, 0.8, 0.8, 0.2)), Ha.map(({x:f, z:g}) => X(O(6), t(3 * f, 3, 15 * g).scale(0.7, 4, 0.7), W(0.6, 0.3, 0.3, 0.4))), 
      X(O(), t(0, 0, -23).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), X(O(), t(0, 0, 22).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), [-15, 15,].map((f, g) => {
        X(O(), t(0, 6.3, f).scale(4, 0.3, 1), W(0.3, 0.3, 0.3, 0.4));
        X(O(), t(0, 1, f).scale(3, 0.2, 0.35), W(0.5, 0.5, 0.5, 0.3));
        Y(w => {
          w.h = z => z.translateSelf(0, 0, f).scaleSelf(1, p(1.22 - h[g + 1].g), 1);
          X(H);
        });
      }), gb(5, f => gb(2, g => X(q, t(18.5 * (g - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2), W(1, 1, 0.8, 0.2),),)), X(O(), t(3, 1.5, -20).scale(0.5, 2, 5), W(0.7, 0.7, 0.7, 0.2)), X(O(), t(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), W(0.75, 0.75, 0.75, 0.2),), X(O(5), t(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), W(0.6, 0.3, 0.3, 0.4),), X(O(), fb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), W(0.8, 0.2, 0.2, 0.5),), X(S(yb(L(O(6, 0, 0, 0.3), 
      t(8, -3, -4).scale(13, 1, 13), W(0.7, 0.7, 0.7, 0.2),), L(O(6), t(0, -8).scale(9, 8, 8), W(0.4, 0.2, 0.5, 0.5)), L(O(6, 0, 0, 0.3), t(0, -0.92).scale(13, 2, 13), W(0.8, 0.8, 0.8, 0.2),),), L(O(5), K(5, 30, 5), W(0.4, 0.2, 0.6, 0.5)), L(O(5, 0, 1.5), t(0, 1).scale(4.5, 0.3, 4.5), W(0.7, 0.5, 0.9, 0.2),), L(O(), fb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), W(0.5, 0.5, 0.5, 0.5),), L(O(6), t(15, -1.5, 4).scale(3.5, 1, 3.5), W(0.5, 0.5, 0.5, 0.5),),),), Y(f => {
        f.h = g => g.translateSelf(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        X(O(5), t(0, -0.2).scale(5, 1, 5), W(0.6, 0.65, 0.7, 0.3));
        Hb(t(0, 1.2));
      }), Hb(t(15, -2, 4)), m(0.7, 12, 35), m(1, 8.2, 55), Y(f => {
        f.h = g => g.translateSelf(B() * Math.sin(c / 1.5 + 2) * 12);
        X(S(yb(L(O(), K(1.5, 1, 5), W(0.9, 0.9, 0.9, 0.2)), L(O(6), K(4, 1, 5), W(0.9, 0.9, 0.9, 0.2)), L(O(), t(0, -2).scale(2, 3.2, 1.9), W(0.3, 0.8, 0.5, 0.5),), L(O(16, 1, 0, 4), K(1, 1, 1.5).rotate(0, 90), W(0.9, 0.9, 0.9, 0.2),),), L(O(), K(1.3, 10, 1.3), W(0.2, 0.7, 0.4, 0.6)),), t(0, 0, 45),);
        Ib(t(0, 2.8, 45), [0, 0, 4.5,]);
      }), X(O(), t(-18.65, -3, 55).scale(2.45, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)), Y(f => {
        f.h = g => g.translateSelf(9.8 * (1 - B()));
        X(O(3), t(-23, -1.7, 55.8).scale(5, 0.7, 8.3), W(0.3, 0.6, 0.6, 0.2));
        X(O(8), t(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), W(0.8, 0.8, 0.8, 0.2));
        X(O(), t(-23, -3, 55).scale(5.2, 1.7, 3), W(0.5, 0.5, 0.5, 0.3));
        X(O(), t(-23, -2.2, 62).scale(3, 1, 4), W(0.5, 0.5, 0.5, 0.3));
        Hb(t(-23, -0.5, 66.5));
      }), Y(f => {
        f.h = g => g.translateSelf(0, p(1 - 5 * B()) * $a(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
        X(O(), t(-22.55, -3, 55).scale(1.45, 1.4, 2.7), W(0.7, 0.7, 0.7, 0.2));
        X(S(L(O(), K(3, 1.4, 2.7)), L(O(), K(1.2, 8, 1.2)),), t(-33, -3, 55), W(0.7, 0.7, 0.7, 0.2),);
      }), Y(f => {
        f.h = g => g.translateSelf(0, 0, p(1 - 5 * B()) * $a(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
        X(S(L(O(), t(-27, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2),), L(O(), t(-27, -3, 55).scale(1, 3), W(0.9, 0.9, 0.9, 0.2),),),);
        X(O(), t(-39, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2));
      }), Y(f => {
        f.h = g => g.translateSelf(0, -6.5 * h[4].i);
        X(O(6), t(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), W(0.7, 0.7, 0.7, 0.4),);
      }), Hb(t(-55, -1.1, 46).rotate(0, 90)), X(O(6), t(-61.3, -2.4, 49).scale(3, 1, 5), W(0.4, 0.6, 0.6, 0.3)), X(O(7), t(-57, -2.6, 46).scale(4, 1, 4), W(0.8, 0.8, 0.8, 0.3)), [...L(O(), t(0, -3).scale(11, 1.4, 3), W(0.9, 0.9, 0.9, 0.2)), ...S(L(O(6), fb(90).scale(6, 8, 6), W(0.3, 0.6, 0.6, 0.3)), L(O(4, 0, 0.01), t(0, 6).scale(12, 2, 0.75).rotate(0, 45), W(0.3, 0.6, 0.6, 0.3),), L(O(6), fb(90).scale(5, 12, 5), W(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => L(O(5), t(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), W(0.3, 0.6, 0.6, 0.3),)),),]), C = (X(P, t(-53, 0, 55)), Y(f => {
        f.h = g => g.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotateSelf(180 * (1 - h[5].i) + ta, 0);
        X(P);
      }, 2), X(O(), t(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), W(0.7, 0.7, 0.7, 0.2),), X(O(3, 0, -0.5), t(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), W(0.8, 0.8, 0.8, 0.2),), X(S(yb(L(O(), t(-100, -2.4, 55).scale(8, 0.9, 8), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-100, -2.6, 70).scale(3, 1.1, 7), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), W(0.8, 0.8, 0.8, 0.2),), 
      L(O(6), t(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), W(0.6, 0.6, 0.6, 0.3),), L(O(), t(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), W(0.8, 0.8, 0.8, 0.2),), L(O(), t(-100, 0.42, 92).scale(3, 1.1, 4.1), W(0.8, 0.8, 0.8, 0.2),),), L(O(8), t(-100, -1, 55).scale(7, 0.9, 7), W(0.3, 0.3, 0.3, 0.4),), L(O(8), t(-100, -2, 55).scale(4, 0.3, 4), W(0.4, 0.4, 0.4, 0.5),), L(O(8, 0, -3.1), t(-100, -3, 55).scale(0.4, 1, 0.4), W(0.4, 0.4, 0.4, 0.5),),),), Ib(t(-100, 0.2, 55), [0, 0, 7.5,], 
      [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Ib(t(-89, 0.2, 80), [0, 0, 6,]), X(S(L(O(), t(-100, 1, 63).scale(7.5, 4), W(0.5, 0.5, 0.5, 0.4)), L(O(), t(-100, 0, 70).scale(2, 2, 10), W(0.5, 0.5, 0.5, 0.4),), L(O(20, 1), t(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), W(0.5, 0.5, 0.5, 0.4),),),), Y(f => {
        f.h = g => g.translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, p(1.1 - h[6].g), 1);
        X(H);
      }), Ha.map(({x:f, z:g}) => {
        X(O(6), t(7 * f - 100, -3, 7 * g + 55).scale(1, 8.1), W(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(w => X(O(6), t(7 * f - 100, w, 7 * g + 55).scale(1.3, 0.5, 1.3), W(0.4, 0.2, 0.2, 0.8),));
      }), gb(7, f => {
        X(O((23 * f + 1) % 5 + 5, 0, 0.5), t(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), W(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), X(O(), t(-87, -9.5, 24).scale(7, 1, 3), W(0.4, 0.5, 0.6, 0.4)), X(O(4), t(-86, -9.2, 27).scale(5, 1, 5), W(0.5, 0.6, 0.7, 0.3)), X(O(12, 1), t(-86, -9, 31).scale(1.5, 1, 1.5), W(0.3, 0.3, 0.4, 0.1)), Hb(t(-86, -7.5, 31)), Y(f => {
        f.h = g => g.translateSelf(0, 3.5 * (1 - Va(h[6].g, h[7].g)) + $a(h[7].i, h[6].i) * Math.sin(c) * 5,);
        [0, 12, 24,].map(g => X(O(), t(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -3).skewX(-3).scale(2.8, 1.4, 3), W(0.2, 0.5, 0.6, 0.2),));
      }), Y(f => {
        f.h = g => g.translateSelf(0, $a(h[7].i, h[6].i) * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * $a(h[7].i, h[6].i),);
        [6, 18,].map(g => X(O(), t(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -3).skewX(-3).scale(2.8, 1.4, 3), W(0.1, 0.4, 0.5, 0.2),));
      }), X(S(yb(L(O(5), t(0, 0, -7).scale(2, 1.2, 2), W(0.2, 0.4, 0.7, 0.3),), L(O(5), K(9, 1.2, 9), W(0, 0.2, 0.3, 0.5)), L(O(), K(11, 1, 13), W(0.3, 0.4, 0.6, 0.3)),), L(O(5), K(5.4, 5, 5.4), W(0, 0.2, 0.3, 0.5)),), t(-38.9, -11.3, 17),), Hb(t(-38.9, -9.6, 10)), Y(f => {
        f.h = g => g.translateSelf(0, -7.3 * h[7].i);
        X(S(yb(L(O(5), t(0, 2).scale(5, 7, 5).skewY(8), W(0.2, 0.4, 0.5, 0.5),), L(O(5), t(0, 6).scale(1.1, 7, 1.1).skewY(-8), W(0.25, 0.35, 0.5, 0.5),), L(O(5), t(0, 9).scale(0.6, 7, 0.6).skewY(8), W(0.35, 0.3, 0.5, 0.5),),), L(O(5), K(4, 8, 4), W(0.2, 0.4, 0.5, 0.5)), L(O(5), t(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), W(0.2, 0.4, 0.5, 0.5),),), t(-38.9, -11.3, 17),);
        Ib(t(-39.1, -0.6, 17).rotate(11), ...jb(15).map(({x:g, z:w}) => [3 * g, 3 * w, 1.2,]),);
      }), Ha.map(({x:f, z:g}) => {
        X(O(14, 1), t(9 * f - 38.9, -7.3, 11 * g + 17).scale(1, 4), W(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(w => X(O(17, 1), t(9 * f - 38.9, w - 11.3, 11 * g + 17).scale(1.5, 0.5, 1.5), W(0.6, 0.6, 0.6, 0.3),));
      }), X(S(yb(L(O(6), t(0, 0, -36).scale(15, 1.2, 15), W(0.7, 0.7, 0.7, 0.3),), L(O(), t(0, 0, -18).scale(4, 1.2, 6), W(0.45, 0.4, 0.6, 0.3),),), ...gb(6, f => gb(6, g => L(O(6), t(4.6 * g - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2), W(0.7, 0.7, 0.7, 0.3),))).flat(),), t(-38.9, -11.3, 17),), Ib(t(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), X(O(5), t(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), W(0.8, 0.1, 0.25, 0.4),), Hb(t(-84, -0.5, 85).rotate(0, 
      45)), Y(f => {
        f.h = g => v(g, -123, 1.4, 55 + -65 * ya);
        X(F);
        Hb(t(0, -3, -4).rotate(0, 180));
      }), S(L(O(), t(0, -0.5, 1).scale(1.15, 1.2, 6.5), W(0.25, 0.25, 0.35, 0.3),), L(O(3), t(0, 0, -5.5).scale(3, 2), W(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => L(O(), t(f, -0.5, 1).scale(0.14, 0.3, 6.5), W(0.7, 0.2, 0, 0.3),)),));
      Y(f => {
        f.h = g => g.translateSelf(0, -2, $a(h[10].g, h[11].g) * n(Math.sin(1.1 * c)) * -8.5 + 10);
        gb(2, g => X(C, t(9 * g - 110 + (1 & g), 1.7, -12)));
      });
      Y(f => {
        f.h = g => g.translateSelf(0, -2, $a(h[10].g, h[11].g) * n(Math.sin(2.1 * c)) * -8.5 + 10);
        gb(2, g => X(C, t(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
      });
      Y(f => {
        f.h = g => g.translateSelf(0, -2, -8.5 * Va((1 - h[10].g) * (1 - $a(h[10].g, h[11].g)), $a(h[10].g, h[11].g) * n(Math.sin(1.5 * c)),) + 10,);
        gb(3, g => X(C, t(9 * g - 106, 1.7, -12)));
      });
      X(S(yb(L(O(), t(26.5, -1.6, 10).scale(20, 2.08, 3)), L(O(), t(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...gb(4, f => L(O(), t(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...gb(3, f => L(O(), t(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), t(-123, 0, -12), W(0.5, 0.5, 0.6, 0.2),);
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
      X(S(yb(L(O(6, 0, 0, 0.6), t(-100, 0.7, 105.5).scale(8, 1, 11), W(0.7, 0.7, 0.7, 0.2),), L(O(), t(-101.5, 0.7, 93.5).scale(10.5, 1, 2), W(0.7, 0.7, 0.7, 0.2),),), L(O(5), t(-100, 0.7, 113).scale(4, 3, 4), W(0.7, 0.7, 0.7, 0.2),),),);
      gb(4, f => Y(g => {
        g.h = w => {
          const z = $a(h[8].i, h[12].i);
          w.translateSelf((2 < f ? 2 * (1 - z) + z : 0) - 100, z * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Va(z, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        X(O(6), t(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 4).skewX(4).scale(2.6, 1, 2.5), W(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Y(f => {
        f.h = g => {
          const w = $a(h[8].i, h[12].i);
          g.translateSelf(2.5 * (1 - w) - 139.7, -3 * (1 - h[8].g) + w * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * w + 3), 0);
        };
        X(S(L(O(10), K(6, 2, 6), W(0.1, 0.6, 0.5, 0.3)), L(O(10), K(3.3, 6, 3.3), W(0.1, 0.6, 0.5, 0.5)),),);
        X(O(15, 1), t(-7.5).rotate(0, 90).scale(3, 2.3, 3), W(0.4, 0.4, 0.4, 0.3),);
        X(O(10), t(-7.5).rotate(0, 90).scale(2, 2.5, 2), W(0.3, 0.8, 0.7, 0.3));
        X(O(5), t(-7.5).rotate(0, 90).scale(1, 3), W(0.5, 0.5, 0.5, 0.5));
        Hb(t(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(g => X(q, fb(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), W(1, 1, 0.8, 0.2),));
        Ib(t(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      Y(f => {
        f.h = g => g.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        X(H);
      });
      [-1, 1,].map(f => {
        [7.2, 1.5,].map(g => X(O(15, 1), t(-7.5 * f - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), W(0.5, 0.24, 0.2, 0.4),));
        X(q, t(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), W(1, 1, 0.8),);
        X(O(12, 1), t(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), W(0.6, 0.24, 0.2, 0.5),);
        X(S(L(O(), t(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), W(0.5, 0.5, 0.5, 0.4),), L(O(), K(3, 3, 10), W(0.6, 0.24, 0.2, 0.5)), L(O(28, 1), t(0, 3, -5).scale(3, 4, 10).rotate(90, 0), W(0.6, 0.24, 0.2, 0.5),), L(O(5), t(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), W(0.6, 0.24, 0.2, 0.5),), L(O(5), t(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), W(0.6, 0.24, 0.2, 0.5),),), t(f - 100, 0.7, 97),);
      });
      X(S(L(O(), t(-82.07, 0.8, 106).scale(11, 0.9, 2.2), W(0.7, 0.7, 0.7, 0.1),), L(O(45, 1), t(-81, 0.7, 106).scale3d(7.7), W(0.7, 0.7, 0.7, 0.1),),),);
      Y(f => {
        f.h = g => g.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ra);
        X(S(L(O(45, 1), K(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)), L(O(), t(0, 0, -5.5).scale(1.5, 3, 2.7), W(0.45, 0.45, 0.45, 0.2),),),);
        X(O(8), t(0, 2).scale(3, 1.5, 3).rotate(0, 22), W(0.7, 0.7, 0.7, 0.1));
        X(O(5), t(0, 2).scale(1, 2), W(0.3, 0.3, 0.3, 0.2));
        Ib(t(0, 3), ...jb(14).map(({x:g, z:w}) => [5.6 * g, 5.6 * w, 2,]),);
      });
      Y(f => {
        f.h = g => g.translateSelf(-65.8, 0.8, 106).rotateSelf(0, sa);
        [-1, 1,].map(g => X(q, fb(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), W(1, 1, 0.8),));
        X(S(L(O(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), L(O(), K(9, 5, 2), W(0.3, 0, 0, 0.3)),),);
        X(L(O(28, 1), K(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(L(O(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = g => g.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - sa);
        X(S(L(O(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), L(O(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), L(O(), t(0, 0, 7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(L(O(28, 1), K(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(L(O(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = g => g.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + sa);
        X(S(L(O(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), L(O(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), L(O(), t(0, 0, -7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(L(O(28, 1), K(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(L(O(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      X(O(), t(-58, 1, 106).scale(2, 0.65, 2), W(0.7, 0.7, 0.7, 0.2));
      X(O(), t(-50.7, 1, 99).scale(2, 0.65, 1), W(0.7, 0.7, 0.7, 0.2));
      X(O(), t(-42, 0.4, 91).scale(5, 1, 2.5), W(0.7, 0.7, 0.7, 0.3));
      X(O(), t(-34.2, 0.4, 91).scale(3, 1, 3), W(0.7, 0.7, 0.7, 0.3));
      Hb(t(-34, 2.7, 96).rotate(-12, 0));
      X(O(5), t(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), W(0.2, 0.5, 0.5, 0.6),);
      [W(0.1, 0.55, 0.45, 0.2), W(0.2, 0.5, 0.5, 0.3), W(0.3, 0.45, 0.55, 0.4),].map((f, g) => Y(w => {
        w.h = z => {
          z.translateSelf(0, (1 - h[13].i) * (1 - h[14].i) * (g ? 0 : 3) + $a(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * g) * 4,);
        };
        X(O(), t(-23.5, 0.5, 91 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), f);
        2 === g && X(O(), t(-29.1, 0.4, 91).scale(2.1, 1, 3), W(0.7, 0.7, 0.7, 0.3));
        1 === g && X(O(), t(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), W(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => X(q, t(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), W(1, 1, 0.8),));
      gb(3, f => X(y(24.7 - 0.7 * (1 & f)), t(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? W(0.5, 0.5, 0.5, 0.3) : W(0.35, 0.35, 0.35, 0.5),),);
      X(S(L(O(6, 0, 0, 0.3), t(0, -0.92, 95).scale(14, 2, 14), W(0.8, 0.8, 0.8, 0.2),), L(O(5), t(0, 0, 95).scale3d(6), W(0.3, 0.3, 0.3, 0.5)),),);
      Hb(t(0, 1.7, 82).rotate(0, 180));
      X(O(5), t(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), W(0.5, 0.3, 0.3, 0.4),);
      X(O(6), t(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), W(0.5, 0.6, 0.7, 0.3),);
      X(O(), t(0, 16, 129).scale(1.5, 1, 2), W(0.5, 0.6, 0.7, 0.3));
      X(O(7), t(0, 16.2, 133).scale(5, 1, 5), W(0.4, 0.5, 0.6, 0.4));
      X(S(yb(L(O(), t(0, 16, 110.5).scale(12, 1, 3), W(0.5, 0.3, 0.3, 0.4),), L(O(), t(0, 16, 111).scale(3, 1, 3.8), W(0.5, 0.3, 0.3, 0.4),),), L(O(5), t(0, 16, 103.5).scale(5.5, 5, 5.5), W(0.5, 0.3, 0.3, 0.4),),),);
      Y(f => {
        f.h = g => g.translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
        X(O(3), t(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), W(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(g => {
          X(O(6), t(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), W(0.7, 0.7, 0.7, 0.4),);
          X(O(), t(0, 6.2, g + 95).scale(0.5, 11, 0.5), W(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Y(f => {
        f.h = g => {
          const w = $a($a((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          g.translateSelf(0, 16 * w, 8.5 * p(2 * w - 1) + 95);
        };
        X(O(5), K(5, 1.1, 5), W(0.5, 0.3, 0.3, 0.4));
        X(O(5), K(5.5, 0.9, 5.5), W(0.25, 0.25, 0.25, 0.4));
        Hb(t(0, 1.5, -1).rotate(0, 180));
      });
      Ib(t(0, 3, 95), ...jb(9).map(({x:f, z:g}) => [9 * f, 9 * g, 4,]),);
      Ib(t(0, 19, 134), [0, 0, 3.5,]);
    });
    Y(() => {
      X(lb(20), t(0, 1).scale3d(0.5), W(1, 0.3, 0.4));
      X(lb(30), K(0.65, 0.8, 0.55), W(1, 0.3, 0.4));
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
      X(O(6, 1), K(0.13, 1.4, 0.13), W(0.3, 0.3, 0.5, 0.1));
      X(O(10), t(0, 1).scale(0.21, 0.3, 0.21), W(1, 0.5, 0.2));
      X(O(3), t(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), W(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Y(() => {
      X(O(6).slice(0, -1), K(0.77, 1, 0.77), W(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(lb(30, 24, (m, v, y) => {
        const B = v / 24, F = m * Math.PI * 2 / 30, H = Math.sin(B ** 0.6 * Math.PI / 2);
        m = B * B * Math.sin(m * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:y.D = 0, y:-0.5, z:0,} : {x:Math.cos(F) * H, y:Math.cos(B * Math.PI) - B - m, z:Math.sin(F) * H + Math.sin(m * Math.PI * 2) / 4,};
      }), K(0.7, 0.7, 0.7), W(1, 1, 1),);
      [-1, 1,].map(m => X(lb(12), t(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

