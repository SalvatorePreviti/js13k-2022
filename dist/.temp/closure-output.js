let ba, ea, ha, ia, ka, la, ma, na, c = 0, oa = 0, qa = 0, ra = 0, sa = 0, ta = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 1, d = 0.066;
const e = [], h = [], Ia = [], Ja = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ka = {x:0, y:0, z:0,}, La = Math.PI / 180, Pa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), 
".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Qa = [[69, 128, 0, 143, 128, 0, 
0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ra = 0, Sa = 180;
const Ta = {x:0, y:0, z:0,}, n = NO_INLINE(a => 0 > a ? -a : a), Ua = NO_INLINE((a, b) => a < b ? a : b), Wa = NO_INLINE((a, b) => b < a ? a : b), Xa = (a, b) => n(a) > b ? a : 0, p = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, Ya = a => Math.atan2(Math.sin(a * La), Math.cos(a * La)) / La, Za = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * p(g) || 0, $a = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, ab = (a, b) => (a = p(a), $a(a, 1 - a, b)), cb = (a, b = bb, g = 0,) => 
(g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), fb = (a = db, b = eb,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, 
b.m43 = a.m43, b.m44 = a.m44, b), t = NO_INLINE((a, b, g) => db.translate(a, b, g)), gb = NO_INLINE((a, b, g) => db.rotate(a, b, g)), N = NO_INLINE((a, b, g) => db.scale(a, b, g)), hb = (a, b) => Array.from(Array(a), (g, m) => b(m)), ib = (a, b, g) => (a.D = g, a.A = b, a), jb = (a, b, g = a.A) => ib(a.map(m => {
  let q, k;
  return {x:m, y:q, z:k} = m, {x:m, y:q, z:k} = b.transformPoint({x:m, y:q, z:k,}), {x:m, y:q, z:k,};
}), g, a.D,), O = (a, b, g) => a.map(m => jb(m, b, g)), kb = (a, b = 0) => hb(a, g => {
  const m = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > n(m) ? m : 0 > m ? m - b : m + b,};
}), lb = (a, b, g) => a.map((m, q, {length:k}) => ib([m, b[k - q - 1], b[k - (q + 1) % k - 1], a[(q + 1) % k],], a.A, g,)), R = (a, b, g = 0, m,) => (a = a ? kb(a, m) : Ja, m = jb(a, t(0, 1).scale3d(0 < g ? g : 1)), a = jb(a, t(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...lb(a, m, b), m, a,]), mb = (a, b = a, g = (m, q) => (q *= Math.PI / b, {x:Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(m) * Math.sin(q),})) => {
  const m = [];
  for (let q = 0; a > q; q++) {
    for (let k = 0; b > k; k++) {
      const v = ib([], 0, 1);
      m.push(v);
      v.push(g(q, k, v));
      k && v.push(g((q + 1) % a, k, v));
      b - 1 > k && v.push(g((q + 1) % a, k + 1 % b, v));
      v.push(g(q, k + 1 % b, v));
    }
  }
  return m;
}, nb = ({x:a, y:b, z:g}, m) => a * m.x + b * m.y + g * m.z, ob = a => {
  let b, g = 0, m = 0, q = 0, k = a.at(-1);
  for (b of a) {
    g += (k.y - b.y) * (k.z + b.z), m += (k.z - b.z) * (k.x + b.x), q += (k.x - b.x) * (k.y + b.y), k = b;
  }
  return b = Math.hypot(g, m, q), g /= b, m /= b, q /= b, {x:g, y:m, z:q, w:g * k.x + m * k.y + q * k.z,};
}, pb = (a, b) => {
  var g, m, q, k = b.C;
  for (var v = 0; k.length > v; ++v) {
    if (-0.00008 > (g = nb(a, k[v]) - a.w) ? q = b : 8e-5 < g && (m = b), q && m) {
      m = [];
      q = [];
      k = b.C;
      v = b.B;
      let w = k.at(-1), A = nb(a, w) - a.w;
      for (const H of k) {
        g = nb(a, H) - a.w, 8e-5 > A && q.push(w), -0.00008 < A && m.push(w), (8e-5 < A && -0.00008 > g || -0.00008 > A && 8e-5 < g) && (A /= g - A, w = {x:w.x + (w.x - H.x) * A, y:w.y + (w.y - H.y) * A, z:w.z + (w.z - H.z) * A,}, m.push(w), q.push(w)), w = H, A = g;
      }
      return {m:2 < m.length && {C:ib(m, k.A, k.D), B:v, s:b,}, l:2 < q.length && {C:ib(q, k.A, k.D), B:v, s:b,},};
    }
  }
  return {m, l:q,};
}, qb = (a, b, g = ob(b.C)) => {
  let m, q, k;
  return a ? ({m, l:q} = pb(a, b), m || q || a.o.push(b), m && (a.m = qb(a.m, m, g)), q && (a.l = qb(a.l, q, g))) : ({x:m, y:q, z:g, w:k} = g, a = {x:m, y:q, z:g, w:k, o:[b,], m:0, l:0,}), a;
}, rb = (a, b, g) => {
  const m = [], q = (k, v) => {
    let {m:w, l:A} = pb(k, v);
    w || A || (0 < g * nb(k, b) ? w = v : A = v);
    w && (k.m ? q(k.m, w) : m.push(w));
    A && k.l && q(k.l, A);
  };
  for (const k of b.o) {
    q(a, k);
  }
  return m;
}, ub = (a, b) => a && (b(a), ub(a.m, b), ub(a.l, b)), vb = a => (ub(a, b => {
  const g = b.l;
  b.l = b.m;
  b.m = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const m of b.o) {
    m.B = !m.B;
  }
}), a), wb = a => a.length ? a.reduce((b, g) => qb(b, {C:g, B:0, s:0,}), 0) : a, zb = (...a) => a.reduce((b, g) => {
  const m = [];
  if (b = wb(b), g) {
    g = wb(g);
    ub(b, q => q.o = rb(g, q, 1));
    ub(g, q => m.push([q, rb(b, q, -1),]));
    for (let [q, k] of m) {
      for (const v of k) {
        qb(b, v, q);
      }
    }
  }
  return b;
}), S = (a, ...b) => {
  const g = k => {
    let v;
    return k.s && ((v = m.get(k.s)) ? (q.delete(v), k = g(k.s)) : m.set(k.s, k)), k;
  }, m = new Map(), q = new Map();
  return a = vb(zb(vb(wb(a)), ...b)), ub(a, k => {
    for (const v of k.o) {
      q.set(g(v), v.B);
    }
  }), Array.from(q, ([{C:k}, v]) => {
    const w = k.map(({x:A, y:H, z:K}) => ({x:A, y:H, z:K,}));
    return ib(v ? w.reverse() : w, k.A, k.D);
  });
}, T = NO_INLINE((a, b, g) => $a(a, b, 1 - Math.exp(-g * d))), Ab = () => {
  Ba = ab(h[12].g, h[13].g);
  xa = $a(T(xa, 0, 1), Ya(xa + 60 * d), h[5].g - h[6].i,);
  sa = $a(T(sa, 0, 5), Ya(sa + 56 * d), Ba,);
  ta = $a(T(ta, 0, 4), Ya(ta + 48 * d), Ba,);
  Aa = T(Aa, h[9].i, 0.2 + 0.3 * n(2 * h[9].i - 1));
  za = T(za, ya ? T(za, -9, 1.5) : p(c / 3), 1);
  Ha && c > Ha && (Ha = 0, h4.innerHTML = "");
  h[0].j && 0.8 < h[0].g && (13 > qa ? (1 / 0 > Ha && (Ha = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0) : ya || (1 / 0 > Ha && (Ha = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ya = 1));
}, Bb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][qa = Ia.reduce((a, {j:b}) => a + b, 0)] + " / XIII";
}, Cb = () => {
  localStorage.DanteSP22 = JSON.stringify([h.map(({j:a}) => a), Ia.map(({j:a}) => a), ra, c, Aa,]);
}, Db = (a, b, g, m) => new DOMMatrix([g, 0, 0, 0, 0, m, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Gb = () => {
  let a, b, g, m, q, k, v, w, A, H, K, P, E, f, l = !0;
  const x = [], z = () => {
    b4.innerHTML = "Music: " + l;
    ea || !l ? Eb.disconnect() : Eb.connect(Fb.destination);
  }, C = () => {
    const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = Db(0.3, 181, u, 1.732051);
    ma = [Db(0.3, 55, u, 1.732051), Db(55, 181, u, 1.732051),];
    m = w = void 0;
    x.length = ha = f = P = E = Ca = Da = 0;
  }, G = (u, r = 0) => {
    if (ea !== u) {
      ea = u;
      ia = r;
      C();
      Bb();
      document.body.className = u ? "l m" : "l";
      try {
        u ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Eb.start());
      } catch {
      }
      z();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => G(!1);
  b2.onclick = () => G(!1, 1);
  b5.onclick = () => G(!0);
  b4.onclick = () => {
    l = !l;
    z();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = u => {
    if (!ea && (u.target === hC && (ha = 1), ia)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = u => {
    let r;
    u.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[u.code], (x[r] = !!u.type[5] && !0) && (0 === r && (ha = 1), 1 === r && G(!0)));
  };
  onmousemove = ({movementX:u, movementY:r}) => {
    ia && (u || r) && (Sa += 0.1 * u, Ra += 0.1 * r);
  };
  hC.ontouchstart = u => {
    if (!ea) {
      for (let {pageX:r, pageY:D, identifier:Q} of u.changedTouches) {
        ia && r > hC.clientWidth / 2 ? void 0 === w && (A = 0, k = r, v = D, w = Q, H = Sa, K = Ra) : void 0 === m && (q = 0, b = r, g = D, m = Q);
      }
      a = oa;
    }
  };
  hC.ontouchmove = u => {
    if (!ea) {
      for (let {pageX:ca, pageY:U, identifier:L} of u.changedTouches) {
        var r, D, Q, aa;
        w === L && (Sa = H + (ca - k) / 2.3, Ra = K + (U - v) / 2.3, A = 1);
        m === L && (L = (b - ca) / 20, r = n(L), D = (g - U) / 20, Q = n(D), (aa = 0.5 < Wa(r, Q)) && (q = 1), P = (aa && 0.2 < r) * p(L, -1), E = (aa && 0.2 < Q) * p(D, -1), 2 < r && (b = ca + 20 * (0 > L ? -1 : 1)), 2 < Q && (g = U + 20 * (0 > D ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = u => {
    let r;
    document.activeElement === document.body && u.preventDefault();
    for (const D of u.changedTouches) {
      D.identifier === w ? (w = void 0, A || (r = 1), A = 0) : D.identifier === m ? (m = void 0, E = P = 0, q || (r = 1), q = 0) : r = 1;
    }
    u.target === hC && r && a && 0.02 < (u = oa - a) && 0.7 > u && (ha = 1);
  };
  ka = () => {
    Ca = E + (x[4] ? 1 : 0) - (x[5] ? 1 : 0);
    Da = P + (x[2] ? 1 : 0) - (x[3] ? 1 : 0);
    var u = navigator.getGamepads()[0];
    if (u) {
      const r = Q => D[Q]?.pressed || 0 < D[Q]?.value ? 1 : 0, D = u.buttons;
      u = u.axes;
      ia && (Ra += d * Xa(u[3], 0.3) * 80, Sa += d * Xa(u[2], 0.3) * 80);
      Ca += r(12) - r(13) - Xa(u[1], 0.2);
      Da += r(14) - r(15) - Xa(u[0], 0.2);
      r(9) && G(!0);
      (u = r(3) || r(2) || r(1) || r(0)) && !f && (ha = 1);
      f = u;
    }
  };
  document.onvisibilitychange = onblur = onresize = C;
  G(!0);
}, W = NO_INLINE((a, b, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), X = (a, b = new DOMMatrix(), g) => na.o.push(...O(a, b, g)), Y = (a, b = 1) => {
  const g = na;
  b = {u:new DOMMatrix(), G:e.length, H:b, o:[],};
  return e.push(b), a(na = b), na = g, b;
}, Hb = a => (a = a.transformPoint(), Math.hypot(Ka.x - a.x, Ka.y - a.y, Ka.z - a.z,)), Jb = a => {
  const b = new DOMMatrix(), g = new DOMMatrix(), m = na, q = h.length, k = {j:0, g:0, i:0, s:m, I:b, h() {
    fb(fb(m.u, b).multiplySelf(a), g).rotateSelf(60 * k.g - 30, 0,).translateSelf(0, 1);
    k.g = T(k.g, k.j, 4);
    k.i = T(k.i, k.j, 1);
    ha && 3 > Hb(b) && (0.3 > k.g || 0.7 < k.g) && (k.j = k.j ? 0 : 1, q && 1 / 0 > Ha && (Ha = c + 1, h4.innerHTML = "* click *"), ra = q, Cb());
    cb(g, Ib, q + 13);
    Ib[16 * q + 223] = 1 - k.g;
  },};
  h.push(k);
  X(R(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(R(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(R(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), W(0.5, 0.5, 0.4));
}, Kb = (a, ...b) => {
  let g = -1, m = 0, q = 0, k = 0, v = 0, w = 0, A = 1, H = 3;
  const K = new DOMMatrix(), P = {j:0, h() {
    if (!P.j) {
      let ca, U, L, I, J, M, y, F = 1, B = 1 / 0;
      for (const ua of l) {
        var {x:r, z:D, w:Q} = ua;
        D = (r = Math.hypot(z - r, C - D)) - Q;
        y ||= r < Q;
        0 < D && B > D && (B = D, x = ua);
        F = Ua(F, r / Q);
      }
      y || ({x:aa, z:ca, w:U} = x, L = z - aa, I = C - ca, J = Math.hypot(L, I), M = Math.atan2(-I, L), A && (q = (Math.random() - 0.5) * Math.PI / 2, H = p(H / (1 + Math.random()))), M += q, g = -Math.cos(M), m = Math.sin(M), 0.1 < J && (J = Ua(J, U) / (J || 1), z = L * J + aa, C = I * J + ca));
      A = y;
      H = T(H, 6 * (1 - F) + 3, F + 3);
      G = T(G, z = T(z, z + g, H), H);
      u = T(u, C = T(C, C + m, H), H);
      k = Za(k, Math.atan2(G - v, u - w) / La - 180, 1 - Math.exp(-3 * d),);
      if (1.6 > Hb(fb(E.u, K).multiplySelf(a).translateSelf(v = G, 0, w = u,).rotateSelf(0, k, 7 * Math.sin(1.7 * c)),)) {
        P.j = 1;
        var aa = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][qa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        1 / 0 > Ha && (Ha = c + (qa && 12 > qa ? 5 : 7), h4.innerHTML = aa);
        Bb();
        Cb();
      }
    }
    P.j && fb(e[2].u, K).translateSelf(f % 4 * 1.2 - 1.7 + Math.sin(c + f) / 7, -2, 1.7 * (f / 4 | 0) - 5.5 + n(f % 4 - 2) + Math.cos(c / 1.5 + f) / 6,);
    cb(K, Ib, f);
  },}, E = na, f = Ia.length, l = b.map(([r, D, Q]) => ({x:r, z:D, w:Q,}));
  let x = l[0], {x:z, z:C} = x, G = z, u = C;
  Ia.push(P);
}, Lb = () => {
  let a, b, g, m, q, k, v, w, A, H, K, P, E, f, l, x, z, C = 1, G = 2, u = 2;
  const r = () => {
    H = A = 0;
    for (let L = 32; 128 > L; L += 2) {
      let I = 0, J = 0, M = 0, y = 0;
      const F = 512 * L;
      for (let B = 1 & L; 128 > B; B += 2) {
        const ua = F + 4 * B;
        let da = F + 4 * (127 - B);
        const ja = U[ua] / 255, Va = U[1 + da] / 255, pa = 1 - n(B / 63.5 - 1);
        10 < B && 118 > B && (I = Wa(I, Wa(ja * pa, ja * U[da] / 255)), J = Wa(J, Wa(Va * pa, Va * U[1 + ua] / 255)));
        (54 > B || 74 < B) && 1e-3 < (da = (1 - pa) * Wa(ja, Va) / 3) && (64 > B && da > M ? M = da : 64 < B && da > y && (y = da));
      }
      n(y - M) > n(A) && (A = y - M);
      n(J - I) > n(H) && (H = J - I);
    }
  }, D = () => {
    let L = 0, I = 0, J = 0, M = 0;
    m = 0;
    ca.fill(0);
    for (let F = 0; 31 > F; ++F) {
      let B = 0;
      const ua = 512 * F;
      for (let da = 0; 128 > da; da++) {
        var y = ua + 4 * da;
        let ja = (U[y] + U[1 + y]) / 255;
        y = U[2 + y];
        14 < da && 114 > da && (B += ja);
        y && ja && (ja = ca[y] + 1, ca[y] = ja, L > ja || (L = ja, I = y, m = 1));
      }
      3 > B && 5 < F && (J += F / 32);
      3 < B && (7 < F && (M += F / 15), m = 1);
    }
    a = I || b;
    b = I;
    u = T(u, m ? 6.5 : -20 > Ta.y ? 11 : 8, 4);
    Ta.y += M / 41 - (m || u) * J / 41 * u * d;
  }, Q = () => (G ? h[ra].s : e[g && 1 === e[g].H && g || 0]).u, aa = (L, I, J, M) => $a(L, I, C || (p(n(I - L) ** 0.5 - J) + 1 / 7) * (1 - Math.exp(-(1.5 * M) * d))), ca = new Uint8Array(256), U = new Uint8Array(65536);
  e[37].h = L => {
    var I = p(Ca, -1);
    let J = p(Da, -1);
    var M = Xa(Math.hypot(I, J) ** 0.5, 0.1), y = Math.atan2(I, J);
    M && (q = 90 - y / La);
    k = Za(k, q, 1 - Math.exp(-8 * d));
    v = T(v, M, 10);
    I = M * n(I) * Math.sin(y);
    J = M * n(J) * Math.cos(y);
    Z.r9r(0, 0, 128, 128, 6408, 5121, U);
    NO_INLINE(D)();
    NO_INLINE(r)();
    var F = p(1 - 5 * Wa(n(A), n(H)));
    E = T(E, m * F * p(2 * M) * 7, m ? 0.1 < F ? 10 : 5 + 2 * M : 1,);
    K = T(K, 0, m ? 8 : 4);
    P = T(P, 0, m ? 8 : 4);
    a && (F = 0);
    y = ia ? (180 - Sa) * La : 0;
    M = (A += d * (F * K + E * (J * Math.cos(y) - I * Math.sin(y))), H += d * (F * P + E * (J * Math.sin(y) + I * Math.cos(y))), Q());
    var {x:I, y, z:B} = 1 < G ? h[ra].I.transformPoint({x:0, y:ra || 0.9 < za ? 15 : 1, z:-2.4,}) : (J = M, fb(J).invertSelf(), eb.m41 = eb.m42 = eb.m43 = 0, B = eb.transformPoint({x:A, z:H, w:0,}), Ta.x += B.x, Ta.z += B.z, J.transformPoint(Ta));
    if (a && (K = (I - Ka.x) / d, P = (B - Ka.z) / d), Ka.x = I, Ka.y = y, Ka.z = B, (G = G && (m && a ? 0 : 1)) || a !== g) {
      g = a, F = (M = Q()).inverse().transformPoint(Ka), Ta.x = F.x, Ta.y = F.y, Ta.z = F.z;
    }
    w = T(w, Ba * (27 < a && 32 > a), 2,);
    y < (-20 > I || 109 > B ? -25 : -9) && (K = P = E = 0, G = 2);
    1 === a && (h[9].j = -15 > I && 0 > B ? 1 : 0);
    f = $a(T(f, y, 2), y, G || 8 * n(f - y),);
    x = aa(x, f, 2, 1);
    l = aa(l, I, 0.5, 1);
    z = aa(z, B, 0.5, 1);
    ia ? (J = G + (1 - Math.exp(-18 * d)), Ea = $a(Ea, I, J), Fa = $a(Fa, f + 1.5, J), Ga = $a(Ga, B, J), Sa = Ya(Sa)) : (Fa = aa(Fa, Wa(x + p((-60 - B) / 8, 0, 20) + 13 + 9 * w, 6), 4, 2,), Ga = aa(Ga, z + -18 + 5 * w, 1, 2 + w,), Ea = aa(Ea, l, 1, 2 + w,), M = Ua(-6, -n(z - Ga)), y = l - Ea, Sa = Za(Sa, 90 - Ya(Math.atan2(M, y) / La), C + (1 - Math.exp(-10 * d)),), Ra = Za(Ra, 90 - Math.atan2(Math.hypot(M, y), Fa - x) / La, C + (1 - Math.exp(-10 * d)),));
    Ra = p(Ra, -87, 87);
    C = 0;
    L.translateSelf(I, f + 0.124, B).rotateSelf(0, k);
  };
  for (let L = 0; 2 > L; ++L) {
    e[38 + L].h = I => fb(e[37].u, I).translateSelf(0, v * p(0.45 * Math.sin(9.1 * c + Math.PI * (L - 1) - Math.PI / 2)),).rotateSelf(v * Math.sin(9.1 * c + Math.PI * (L - 1)) * 0.25 / La, 0);
  }
}, Mb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), Rb = (a, b) => {
  const g = {}, m = Z.c1h();
  return Z.abz(m, a), Z.abz(m, Mb(b, 35632)), Z.l8l(m), q => q ? g[q] || (g[q] = Z.gan(m, q)) : Z.u7y(m);
}, Tb = (a, b, g) => {
  let m;
  ea ? (m = gb(0, 40 * Math.sin(oa) - 70), cb(m, Sb, 37), cb(m, Sb, 38), cb(m, Sb, 39), Z.uae(a, !1, Sb), Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v)) : (Z.uae(a, !1, Sb), Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6), Z.uae(a, !1, Ib), Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, Ia.length,), Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,));
}, Ub = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Vb = a => Math.sin(a * Math.PI * 2), Wb = a => 0.5 > a % 1 ? 1 : -1, Xb = a => a % 1 * 2 - 1, Yb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, ec = a => {
  let b = 0;
  const g = () => {
    let v = 0;
    const w = y => {
      let F, B, ua, da = 0, ja = 0;
      const Va = [], pa = new Int32Array(768 * y), Zb = 2 ** (r - 9) / y, $b = Math.PI * 2 ** (U - 8) / y, xb = I * y & -2;
      for (let sb = 0; 11 >= sb; ++sb) {
        for (let tb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb]; 32 > tb; ++tb) {
          const Ob = (32 * sb + tb) * y;
          for (var Ma = 0; 4 > Ma; ++Ma) {
            if (F = 0, Nb && (F = A[Nb - 1].charCodeAt(tb + 32 * Ma) - 40, F += 0 < F ? 106 : 0), F) {
              var fa;
              if (!(fa = Va[F])) {
                fa = F;
                let V = void 0, va = void 0;
                var Pb = F;
                let ac = 0, bc = 0;
                const cc = 2 > b ? Xb : Vb, dc = 2 > b ? 1 > b ? Wb : Yb : Vb, Qb = new Int32Array(z + C + M);
                for (let Na = 0, yb = 0; z + C + M > Na; ++Na, ++yb) {
                  let Oa = 1;
                  z > Na ? Oa = Na / z : z + C > Na || (Oa = (1 - (Oa = (Na - z - C) / M)) * 3 ** (-u / 16 * Oa));
                  0 > yb || (yb -= 4 * y, va = 0.00396 * 2 ** ((Pb + K - 256) / 12), V = 0.00396 * 2 ** ((Pb + f - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Qb[Na] = 80 * (cc(ac += va * Oa ** (P / 32)) * H + dc(bc += V * Oa ** (l / 32)) * E + (x ? (2 * Math.random() - 1) * x : 0)) * Oa | 0;
                }
                fa = Va[fa] = Qb;
              }
              for (let V = 0, va = 2 * Ob; fa.length > V; ++V, va += 2) {
                pa[va] += fa[V];
              }
            }
          }
          for (let V, va = 0; y > va; ++va) {
            Ma = 0;
            fa = 2 * (Ob + va);
            var wa = (((V = pa[fa]) || ua) && (B = 0.00308 * D, 1 !== b && 4 !== b || (B *= Math.sin(Zb * fa * Math.PI * 2) * J / 512 + 0.5), B = 1.5 * Math.sin(B), da += B * ja, wa = (1 - Q / 255) * (V - ja) - da, ja += B * wa, V = 4 === b ? ja : 3 === b ? wa : da, b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= aa / 32, ua = 1e-5 < V * V, wa = Math.sin($b * fa) * ca / 512 + 0.5, Ma = V * (1 - wa), V *= wa), fa < xb || (Ma += pa[1 + fa - xb] * L / 
            255, V += pa[fa - xb] * L / 255), v + fa >> 1);
            q[wa] += (pa[fa] = Ma) / 65536;
            k[wa] += (pa[++fa] = V) / 65536;
          }
        }
      }
      v += 768 * y;
    }, A = Pa[b], [H, K, P, E, f, l, x, z, C, G, u, r, D, Q, aa, ca, U, L, I, J] = Qa[b], M = 4 * G ** 2;
    w(5513);
    w(4562);
    w(3891);
    Ub(5 > ++b ? g : a);
  }, m = Fb.createBuffer(2, 5362944, 44100), q = m.getChannelData(0), k = m.getChannelData(1);
  Eb.buffer = m;
  Eb.loop = !0;
  Ub(g);
}, Fb = new AudioContext(), db = new DOMMatrix(), eb = new DOMMatrix(), bb = new Float32Array(16), Sb = new Float32Array(624), Ib = new Float32Array(624), fc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Eb = Fb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, g, m) => (b * m + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Ub(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], k = G => {
        Z.f1s();
        requestAnimationFrame(k);
        var u = (G - (ba || G)) / 1e3;
        if (oa += u, c += d = ea ? 0 : Ua(0.066, u), ba = G, 0 < d) {
          ka();
          Ab();
          for (const D of e) {
            D.h && (D.h(fb(db, D.u)), cb(D.u, Sb, D.G - 1));
          }
          for (const D of h) {
            D.h();
          }
          for (const D of Ia) {
            D.h();
          }
          P();
          Z.b6o(36160, C);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          var {x:u, y:G, z:r} = Ka;
          Z.uae(P("b"), !1, cb(fb().rotateSelf(0, 180).invertSelf().translateSelf(-u, -G, 0.3 - r)),);
          Tb(P("c"), 0, 41);
          Z.c4s(256);
          Z.cbf(!1, !0, !0, !1);
          Z.uae(P("b"), !1, cb(fb().translateSelf(-u, -G, -r - 0.3)));
          Tb(P("c"), 0, 41);
          Z.f1s();
        }
        ha = 0;
        fb(db, v);
        ea ? v.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : v.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ea, -Fa, -Ga,);
        H();
        Z.b6o(36160, x);
        Z.v5y(0, 0, 2048, 2048);
        l[0](54.7 * 1.1);
        l[1](126 * 1.1);
        E();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(E("a"), !1, cb(la));
        Z.uae(E("b"), !1, cb(v));
        Z.uae(E("i"), !1, q[0]);
        Z.uae(E("j"), !1, q[1]);
        Z.ubu(E("k"), Ea, Fa, Ga);
        Tb(E("c"), !ia, 42);
        K();
        Z.ubu(K("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, oa);
        Z.ubu(K("k"), Ea, Fa, Ga);
        Z.uae(K("b"), !1, cb(fb(v).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, C);
        Z.f1s();
      }, v = new DOMMatrix(), w = new DOMMatrix(), A = g;
      var m = Mb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const H = Rb(Mb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), K = Rb(Mb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), P = Rb(m, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), E = Rb(m, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), f = hb(8, () => ({})), l = hb(2, G => {
        const u = Z.c25();
        return Z.a4v(33984 + G), Z.b9j(3553, u), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), r => {
          let D = 0, Q = 0, aa = 0, ca = 1 / 0, U = -1 / 0, L = 1 / 0, I = -1 / 0, J = 1 / 0, M = -1 / 0;
          Z.fas(36160, 36096, 3553, u, 0);
          Z.c4s(256);
          fb().scale3dSelf(r).multiplySelf(fb(ma[G], w).multiplySelf(v).invertSelf(),);
          for (let y = 0; 8 > y; ++y) {
            const F = f[y], B = (F.x = 4 & y ? 1 : -1, F.y = 2 & y ? 1 : -1, F.z = 1 & y ? 1 : -1, eb.transformPoint(F));
            D -= F.x = (0 | B.x) / r / B.w;
            Q -= F.y = (0 | B.y) / r / B.w;
            aa -= F.z = (0 | B.z) / r / B.w;
          }
          fb().rotateSelf(298, 139).translateSelf(D / 8, Q / 8, aa / 8);
          for (r = 0; 8 > r; ++r) {
            const {x:y, y:F, z:B} = eb.transformPoint(f[r]);
            ca = Ua(ca, y);
            U = Wa(U, y);
            L = Ua(L, F);
            I = Wa(I, F);
            J = Ua(J, B);
            M = Wa(M, B);
          }
          r = 10 + G;
          J *= 0 > J ? r : 1 / r;
          M *= 0 < M ? r : 1 / r;
          Z.uae(H("b"), !1, cb(fb(db, w).scaleSelf(2 / (U - ca), 2 / (I - L), 2 / (J - M),).translateSelf((U + ca) / -2, (I + L) / -2, (J + M) / 2).multiplySelf(eb), q[G],),);
          Tb(H("c"), !ia, 42);
        };
      }), x = Z.c5w();
      m = Z.c25();
      const z = Z.c3z(), C = Z.c5w();
      P();
      Z.uae(P("a"), !1, cb(Db(1e-4, 1, 1.4, 0.59)));
      E();
      Z.ubh(E("q"), 2);
      Z.ubh(E("h"), 1);
      Z.ubh(E("g"), 0);
      K();
      Z.ubh(K("q"), 2);
      Z.b6o(36160, x);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, C);
      Z.bb1(36161, z);
      Z.r4v(36161, 33189, 128, 128);
      Z.f8w(36160, 36096, 36161, z);
      Z.a4v(33986);
      Z.b9j(3553, m);
      Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Z.fas(36160, 36064, 3553, m, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, A);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 1);
      Ab();
      NO_INLINE(Gb)();
      NO_INLINE(Lb)();
      requestAnimationFrame(k);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = fc;
  NO_INLINE(ec)(() => {
    Ub(() => {
      let k, v = 0;
      const w = [], A = [], H = [], K = [], P = z => {
        let {x:C, y:G, z:u} = k[z], r = (x[0] = C, x[1] = G, x[2] = u, z = "" + (k.D ? l : E), f.get(z));
        return void 0 !== r ? (C = 3 * r, K[C] = (K[C++] + E[5]) / 2, K[C] = (K[C++] + E[6]) / 2, K[C] = (K[C] + E[7]) / 2) : (f.set(z, r = f.size), A.push(C, G, u, x[3]), H.push(E[4]), K.push(E[5], E[6], E[7])), r;
      }, E = new Int32Array(8), f = new Map(), l = new Int32Array(E.buffer, 0, 5), x = new Float32Array(E.buffer);
      for (const z of e) {
        for (k of (x[3] = 40 === z.G ? -14 : z.H && z.G, z.o)) {
          const {x:C, y:G, z:u} = ob(k);
          E[4] = 0 | k.A;
          E[5] = 32767 * C;
          E[6] = 32767 * G;
          E[7] = 32767 * u;
          for (let r = 2, D = P(0), Q = P(1); k.length > r; ++r) {
            w.push(D, Q, Q = P(r));
          }
        }
        z.o = null;
        z.v = v;
        z.F = v = w.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(A), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(K), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(H), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ub(b);
      try {
        const [z, C, G, u, r] = JSON.parse(localStorage.DanteSP22,);
        h.map((D, Q) => D.g = D.i = D.j = Q ? 0 | z[Q] : 0);
        Ia.map((D, Q) => D.j = 0 | C[Q]);
        ra = G;
        Aa = r;
        c = u;
        d = 0;
      } catch {
      }
      za = p(ra);
    });
    const m = hb(11, k => t(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), q = hb(10, k => lb(jb(kb(18), m[k]).reverse(), jb(kb(18), m[k + 1]), 1,)).flat();
    Y(() => X([Ja.slice(1),], t(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const k = (f, l, x) => Y(z => {
        z.h = C => C.translateSelf(A() * Math.sin(3 * f + c * f) * l);
        Ja.map(({x:C, z:G}) => {
          X(R(11, 1), t(4 * C, 4, x + 4 * G).scale(0.8, 3, 0.8), W(0.5, 0.3, 0.7, 0.6),);
          X(R(), t(4 * C, 7, x + 4 * G).scale(1, 0.3), W(0.5, 0.5, 0.5, 0.3),);
        });
        X(S(O(R(), t(0, 0, x).scale(5, 1, 5), W(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(C => O(R(), t(5 * C, 0.2, x).rotate(-30 * C).scale(4, 1, 2), W(0.8, 0.8, 0.8, 0.3),)),),);
        X(R(), t(0, -3, x).scale(8, 2, 8), W(0.4, 0.4, 0.4, 0.3));
      }), v = (f, l, x, z) => f.translateSelf(l + Math.sin(c + 2) / 5, x + Math.sin(0.8 * c) / 3, z).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),), w = f => S(O(R(), t(0, -f / 2).scale(6, f - 1, 2.2)), O(R(), t(0, -f / 2 - 6).scale(4, f - 3, 4)), O(R(32, 1), t(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), A = () => Ua(h[2].i, 1 - h[4].i), H = S(O(R(30, 1, 1.15, 1), t(0, -3).scale(3.5, 1, 3.5), W(0.7, 0.4, 0.25, 0.7),), O(R(30, 1, 1.3, 1), t(0, -2.5).scale(2.6, 1, 3), W(0.7, 
      0.4, 0.25, 0.2),), O(R(), t(4, -1.2).scale3d(2), W(0.7, 0.4, 0.25, 0.3)),), K = hb(7, f => O(R(6, 1), t(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), W(0.3, 0.3, 0.38),)).flat(), P = (Y(f => {
        f.h = l => v(l, -12, 4.2, 40 * za - 66);
        X(H);
        Jb(t(0, -3, 4));
      }), Jb(t(-5.4, 1.5, -19).rotate(0, -90)), Kb(t(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Kb(t(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...kb(18).map(({x:f, z:l}) => [7 * f, 10 * l, 4.5 - 2 * n(f),]),), X(R(), t(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), W(0.8, 0.8, 0.8, 0.2)), Ja.map(({x:f, z:l}) => X(R(6), t(3 * f, 3, 15 * l).scale(0.7, 4, 0.7), W(0.6, 0.3, 0.3, 0.4))), X(R(), t(0, 0, -23).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), X(R(), t(0, 0, 22).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), [-15, 
      15,].map((f, l) => {
        X(R(), t(0, 6.3, f).scale(4, 0.3, 1), W(0.3, 0.3, 0.3, 0.4));
        X(R(), t(0, 1, f).scale(3, 0.2, 0.35), W(0.5, 0.5, 0.5, 0.3));
        Y(x => {
          x.h = z => z.translateSelf(0, 0, f).scaleSelf(1, p(1.22 - h[l + 1].g), 1);
          X(K);
        });
      }), hb(5, f => hb(2, l => X(q, t(18.5 * (l - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * l).scale(1.2, 10, 1.2), W(1, 1, 0.8, 0.2),)),), X(R(), t(3, 1.5, -20).scale(0.5, 2, 5), W(0.7, 0.7, 0.7, 0.2)), X(R(), t(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), W(0.75, 0.75, 0.75, 0.2),), X(R(5), t(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), W(0.6, 0.3, 0.3, 0.4),), X(R(), gb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), W(0.8, 0.2, 0.2, 0.5),), X(S(zb(O(R(6, 0, 0, 0.3), 
      t(8, -3, -4).scale(13, 1, 13), W(0.7, 0.7, 0.7, 0.2),), O(R(6), t(0, -8).scale(9, 8, 8), W(0.4, 0.2, 0.5, 0.5)), O(R(6, 0, 0, 0.3), t(0, -0.92).scale(13, 2, 13), W(0.8, 0.8, 0.8, 0.2),),), O(R(5), N(5, 30, 5), W(0.4, 0.2, 0.6, 0.5)), O(R(5, 0, 1.5), t(0, 1).scale(4.5, 0.3, 4.5), W(0.7, 0.5, 0.9, 0.2),), O(R(), gb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), W(0.5, 0.5, 0.5, 0.5),), O(R(6), t(15, -1.5, 4).scale(3.5, 1, 3.5), W(0.5, 0.5, 0.5, 0.5),),),), Y(f => {
        f.h = l => l.translateSelf(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * c) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        X(R(5), t(0, -0.2).scale(5, 1, 5), W(0.6, 0.65, 0.7, 0.3));
        Jb(t(0, 1.2));
      }), Jb(t(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), Y(f => {
        f.h = l => l.translateSelf(A() * Math.sin(c / 1.5 + 2) * 12);
        X(S(zb(O(R(), N(1.5, 1, 5), W(0.9, 0.9, 0.9, 0.2)), O(R(6), N(4, 1, 5), W(0.9, 0.9, 0.9, 0.2)), O(R(), t(0, -2).scale(2, 3.2, 1.9), W(0.3, 0.8, 0.5, 0.5),), O(R(16, 1, 0, 4), N(1, 1, 1.5).rotate(0, 90), W(0.9, 0.9, 0.9, 0.2),),), O(R(), N(1.3, 10, 1.3), W(0.2, 0.7, 0.4, 0.6)),), t(0, 0, 45),);
        Kb(t(0, 2.8, 45), [0, 0, 4.5,]);
      }), X(R(), t(-18.65, -3, 55).scale(2.45, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)), Y(f => {
        f.h = l => l.translateSelf(9.8 * (1 - A()));
        X(R(3), t(-23, -1.7, 55.8).scale(5, 0.7, 8.3), W(0.3, 0.6, 0.6, 0.2));
        X(R(8), t(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), W(0.8, 0.8, 0.8, 0.2));
        X(R(), t(-23, -3, 55).scale(5.2, 1.7, 3), W(0.5, 0.5, 0.5, 0.3));
        X(R(), t(-23, -2.2, 62).scale(3, 1, 4), W(0.5, 0.5, 0.5, 0.3));
        Jb(t(-23, -0.5, 66.5));
      }), Y(f => {
        f.h = l => l.translateSelf(0, p(1 - 5 * A()) * ab(h[4].g, h[5].g) * Math.sin(1.35 * c) * 4);
        X(R(), t(-22.55, -3, 55).scale(1.45, 1.4, 2.7), W(0.7, 0.7, 0.7, 0.2));
        X(S(O(R(), N(3, 1.4, 2.7)), O(R(), N(1.2, 8, 1.2)),), t(-33, -3, 55), W(0.7, 0.7, 0.7, 0.2),);
      }), Y(f => {
        f.h = l => l.translateSelf(0, 0, p(1 - 5 * A()) * ab(h[4].g, h[5].g) * Math.sin(0.9 * c) * 8);
        X(S(O(R(), t(-27, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2),), O(R(), t(-27, -3, 55).scale(1, 3), W(0.9, 0.9, 0.9, 0.2),),),);
        X(R(), t(-39, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2));
      }), Y(f => {
        f.h = l => l.translateSelf(0, -6.5 * h[4].i);
        X(R(6), t(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), W(0.7, 0.7, 0.7, 0.4),);
      }), Jb(t(-55, -1.1, 46).rotate(0, 90)), X(R(6), t(-61.3, -2.4, 49).scale(3, 1, 5), W(0.4, 0.6, 0.6, 0.3)), X(R(7), t(-57, -2.6, 46).scale(4, 1, 4), W(0.8, 0.8, 0.8, 0.3)), [...O(R(), t(0, -3).scale(11, 1.4, 3), W(0.9, 0.9, 0.9, 0.2)), ...S(O(R(6), gb(90).scale(6, 8, 6), W(0.3, 0.6, 0.6, 0.3)), O(R(4, 0, 0.01), t(0, 6).scale(12, 2, 0.75).rotate(0, 45), W(0.3, 0.6, 0.6, 0.3),), O(R(6), gb(90).scale(5, 12, 5), W(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => O(R(5), t(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), W(0.3, 0.6, 0.6, 0.3),)),),]), E = (X(P, t(-53, 0, 55)), Y(f => {
        f.h = l => l.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + xa, 0,);
        X(P);
      }, 2), X(R(), t(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), W(0.7, 0.7, 0.7, 0.2),), X(R(3, 0, -0.5), t(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), W(0.8, 0.8, 0.8, 0.2),), X(S(zb(O(R(), t(-100, -2.5, 55).scale(8, 1, 8), W(0.8, 0.8, 0.8, 0.2),), O(R(), t(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), W(0.8, 0.8, 0.8, 0.2),), O(R(), t(-100, -2.6, 70).scale(3, 1.1, 7), W(0.8, 0.8, 0.8, 0.2),), O(R(), t(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), W(0.8, 0.8, 0.8, 0.2),), O(R(6), 
      t(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), W(0.6, 0.6, 0.6, 0.3),), O(R(), t(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), W(0.8, 0.8, 0.8, 0.2),), O(R(), t(-100, 0.42, 92).scale(3, 1.1, 4.1), W(0.8, 0.8, 0.8, 0.2),),), O(R(8), t(-100, -1, 55).scale(7, 0.9, 7), W(0.3, 0.3, 0.3, 0.4),), O(R(8), t(-100, -2, 55).scale(4, 0.3, 4), W(0.4, 0.4, 0.4, 0.5),), O(R(8), t(-100, -3, 55).scale(0.6, 1, 0.6), W(0.4, 0.4, 0.4, 0.5),),),), Kb(t(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), Kb(t(-89, 0.2, 80), [0, 0, 6,]), X(S(O(R(), t(-100, 1, 63).scale(7.5, 4), W(0.5, 0.5, 0.5, 0.4)), O(R(), t(-100, 0, 70).scale(2, 2, 10), W(0.5, 0.5, 0.5, 0.4),), O(R(20, 1), t(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), W(0.5, 0.5, 0.5, 0.4),),),), Y(f => {
        f.h = l => l.translateSelf(-99.7, -1.9, 63.5).scale(1, p(1.1 - h[6].g), 1);
        X(K);
      }), Ja.map(({x:f, z:l}) => {
        X(R(6), t(7 * f - 100, -3, 7 * l + 55).scale(1, 8.1), W(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(x => X(R(6), t(7 * f - 100, x, 7 * l + 55).scale(1.3, 0.5, 1.3), W(0.4, 0.2, 0.2, 0.8),));
      }), hb(7, f => {
        X(R((23 * f + 1) % 5 + 5, 0, 0.55), t(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), W(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), X(R(), t(-87, -9.5, 24).scale(7, 1, 3), W(0.4, 0.5, 0.6, 0.4)), X(R(4), t(-86, -9.2, 27).scale(5, 1, 5), W(0.5, 0.6, 0.7, 0.3)), X(R(12, 1), t(-86, -9, 31).scale(1.5, 1, 1.5), W(0.3, 0.3, 0.4, 0.1)), Jb(t(-86, -7.5, 31)), Y(f => {
        f.h = l => l.translateSelf(0, 3.5 * (1 - Wa(h[6].g, h[7].g)) + ab(h[7].i, h[6].i) * Math.sin(c) * 5,);
        [0, 12, 24,].map(l => X(R(), t(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), W(0.2, 0.5, 0.6, 0.2),));
      }), Y(f => {
        f.h = l => l.translateSelf(0, ab(h[7].i, h[6].i) * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * ab(h[7].i, h[6].i),);
        [6, 18,].map(l => X(R(), t(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), W(0.1, 0.4, 0.5, 0.2),));
      }), X(S(zb(O(R(5), t(0, 0, -7).scale(2, 1.2, 2), W(0.2, 0.4, 0.7, 0.3),), O(R(5), N(9, 1.2, 9), W(0, 0.2, 0.3, 0.5)), O(R(), N(11, 1, 13), W(0.3, 0.4, 0.6, 0.3)),), O(R(5), N(5.4, 5, 5.4), W(0, 0.2, 0.3, 0.5)),), t(-38.9, -11.3, 17),), Jb(t(-38.9, -9.6, 10)), Y(f => {
        f.h = l => l.translateSelf(0, -7.3 * h[7].i);
        X(S(zb(O(R(5), t(0, 2).scale(5, 7, 5).skewY(8), W(0.2, 0.4, 0.5, 0.5),), O(R(5), t(0, 6).scale(1.1, 7, 1.1).skewY(-8), W(0.25, 0.35, 0.5, 0.5),), O(R(5), t(0, 9).scale(0.6, 7, 0.6).skewY(8), W(0.35, 0.3, 0.5, 0.5),),), O(R(5), N(4, 8, 4), W(0.2, 0.4, 0.5, 0.5)), O(R(5), t(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), W(0.2, 0.4, 0.5, 0.5),),), t(-38.9, -11.3, 17),);
        Kb(t(-39.1, -0.6, 17).rotate(11), ...kb(15).map(({x:l, z:x}) => [3 * l, 3 * x, 1.2,]),);
      }), Ja.map(({x:f, z:l}) => {
        X(R(14, 1), t(9 * f - 38.9, -7.3, 11 * l + 17).scale(1, 4), W(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(x => X(R(17, 1), t(9 * f - 38.9, x - 11.3, 11 * l + 17).scale(1.5, 0.5, 1.5), W(0.6, 0.6, 0.6, 0.3),));
      }), X(S(zb(O(R(6), t(0, 0, -36).scale(15, 1.2, 15), W(0.7, 0.7, 0.7, 0.3),), O(R(), t(0, 0, -18).scale(4, 1.2, 6), W(0.45, 0.4, 0.6, 0.3),),), ...hb(6, f => hb(6, l => O(R(6), t(4.6 * l - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * l)).scale(2, 5, 2), W(0.7, 0.7, 0.7, 0.3),))).flat(),), t(-38.9, -11.3, 17),), Kb(t(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), X(R(5), t(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), W(0.8, 0.1, 0.25, 0.4),), Jb(t(-84, -0.5, 85).rotate(0, 
      45)), Y(f => {
        f.h = l => v(l, -123, 1.4, 55 + -65 * Aa);
        X(H);
        Jb(t(0, -3, -4).rotate(0, 180));
      }), S(O(R(), t(0, -0.5, 1).scale(1.15, 1.2, 6.5), W(0.25, 0.25, 0.35, 0.3),), O(R(3), t(0, 0, -5.5).scale(3, 2), W(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => O(R(), t(f, -0.5, 1).scale(0.14, 0.3, 6.5), W(0.7, 0.2, 0, 0.3),)),));
      Y(f => {
        f.h = l => l.translateSelf(0, -2, ab(h[10].g, h[11].g) * n(Math.sin(1.1 * c)) * -8.5 + 10);
        hb(2, l => X(E, t(9 * l - 110 + (1 & l), 1.7, -12)));
      });
      Y(f => {
        f.h = l => l.translateSelf(0, -2, ab(h[10].g, h[11].g) * n(Math.sin(2.1 * c)) * -8.5 + 10);
        hb(2, l => X(E, t(9 * (l + 2) - 110 + (1 & l), 1.7, -12)));
      });
      Y(f => {
        f.h = l => l.translateSelf(0, -2, -8.5 * Wa((1 - h[10].g) * (1 - ab(h[10].g, h[11].g)), ab(h[10].g, h[11].g) * n(Math.sin(1.5 * c)),) + 10,);
        hb(3, l => X(E, t(9 * l - 106, 1.7, -12)));
      });
      X(S(zb(O(R(), t(26.5, -1.6, 10).scale(20, 2.08, 3)), O(R(), t(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...hb(4, f => O(R(), t(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...hb(3, f => O(R(), t(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), t(-123, 0, -12), W(0.5, 0.5, 0.6, 0.2),);
      Jb(t(-116, -1.4, -18).rotate(0, 180));
      X(R(), t(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), W(0.8, 0.8, 0.8, 0.2),);
      X(R(6), t(-116, -2.6, -16.5).scale(3.2, 0.8, 3), W(0.6, 0.5, 0.7, 0.2));
      X(R(), t(-115.5, -17, -12).scale(0.5, 15, 2.2), W(0.6, 0.6, 0.6, 0.3));
      X(R(8), t(-114, -17, -2).scale(2, 15, 2), W(0.6, 0.6, 0.6, 0.3));
      X(R(8), t(-79, -17, -2).scale(2, 15, 2), W(1, 1, 1, 0.3));
      X(R(), t(-77, -17, -50.5).scale(2.2, 15, 0.5), W(0.6, 0.6, 0.6, 0.3));
      hb(3, f => {
        X(w(16), t(12 * f - 109, -9, -12), W(0.6, 0.6, 0.6, 0.3));
        X(w(16), t(-77, -9, -12 * f - 20).rotate(0, 90), W(0.6, 0.6, 0.6, 0.3),);
      });
      X(S(O(R(12), t(-77, -14.5, -12).scale(4, 17.5, 4), W(0.7, 0.7, 0.7, 0.2),), O(R(), t(-79, 0.1, -12).scale(3.5, 2, 1.3), W(0.4, 0.5, 0.6, 0.2),), O(R(), t(-77, 0.1, -14).scale(1.5, 2, 2), W(0.4, 0.5, 0.6, 0.2),), O(R(12), t(-77, 3.1, -12).scale(3, 5, 3), W(0.4, 0.5, 0.6, 0.2),),),);
      X(R(), t(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), W(0.6, 0.6, 0.6, 0.3),);
      X(R(9), t(-98, -18.4, -40).scale(2.5, 13.5, 2.5), W(0.5, 0.5, 0.5, 0.3));
      X(S(O(R(), t(-93, -5.8, -40).scale(9, 1, 5), W(0.8, 0.8, 0.8, 0.1),), O(R(9), t(-98, -5.8, -40).scale(3, 8, 3), W(0.7, 0.7, 0.7, 0.2),),),);
      Jb(t(-98, -4.4, -40).rotate(0, 90));
      Kb(t(-115, 0.2, -12), [0, 0, 3.5,]);
      Kb(t(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      X(S(zb(O(R(6, 0, 0, 0.6), t(-100, 0.7, 105.5).scale(8, 1, 11), W(0.7, 0.7, 0.7, 0.2),), O(R(), t(-101.5, 0.7, 93.5).scale(10.5, 1, 2), W(0.7, 0.7, 0.7, 0.2),),), O(R(5), t(-100, 0.7, 113).scale(4, 3, 4), W(0.7, 0.7, 0.7, 0.2),),),);
      hb(4, f => Y(l => {
        l.h = x => {
          const z = ab(h[8].i, h[12].i);
          x.translateSelf((2 < f ? 2 * (1 - z) + z : 0) - 100, z * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Wa(z, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        X(R(6), t(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), W(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Y(f => {
        f.h = l => {
          const x = ab(h[8].i, h[12].i);
          l.translateSelf(2.5 * (1 - x) - 139.7, -3 * (1 - h[8].g) + x * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * x + 3), 0);
        };
        X(S(O(R(10), N(6, 2, 6), W(0.1, 0.6, 0.5, 0.3)), O(R(10), N(3.3, 6, 3.3), W(0.1, 0.6, 0.5, 0.5)),),);
        X(R(15, 1), t(-7.5).rotate(0, 90).scale(3, 2.3, 3), W(0.4, 0.4, 0.4, 0.3),);
        X(R(10), t(-7.5).rotate(0, 90).scale(2, 2.5, 2), W(0.3, 0.8, 0.7, 0.3));
        X(R(5), t(-7.5).rotate(0, 90).scale(1, 3), W(0.5, 0.5, 0.5, 0.5));
        Jb(t(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(l => X(q, gb(90 * l, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), W(1, 1, 0.8, 0.2),));
        Kb(t(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      Y(f => {
        f.h = l => l.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        X(K);
      });
      [-1, 1,].map(f => {
        [7.2, 1.5,].map(l => X(R(15, 1), t(-7.5 * f - 100, l + 0.7, 96).scale(1.1, 0.5, 1.1), W(0.5, 0.24, 0.2, 0.4),));
        X(q, t(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), W(1, 1, 0.8),);
        X(R(12, 1), t(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), W(0.6, 0.24, 0.2, 0.5),);
        X(S(O(R(), t(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), W(0.5, 0.5, 0.5, 0.4),), O(R(), N(3, 3, 10), W(0.6, 0.24, 0.2, 0.5)), O(R(28, 1), t(0, 3, -5).scale(3, 4, 10).rotate(90, 0), W(0.6, 0.24, 0.2, 0.5),), O(R(5), t(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), W(0.6, 0.24, 0.2, 0.5),), O(R(5), t(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), W(0.6, 0.24, 0.2, 0.5),),), t(f - 100, 0.7, 97),);
      });
      X(S(O(R(), t(-82.07, 0.8, 106).scale(11, 0.9, 2.2), W(0.7, 0.7, 0.7, 0.1),), O(R(45, 1), t(-81, 0.7, 106).scale3d(7.7), W(0.7, 0.7, 0.7, 0.1),),),);
      Y(f => {
        f.h = l => l.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
        X(S(O(R(45, 1), N(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)), O(R(), t(0, 0, -5.5).scale(1.5, 3, 2.7), W(0.45, 0.45, 0.45, 0.2),),),);
        X(R(8), t(0, 2).scale(3, 1.5, 3).rotate(0, 22), W(0.7, 0.7, 0.7, 0.1));
        X(R(5), t(0, 2).scale(1, 2), W(0.3, 0.3, 0.3, 0.2));
        Kb(t(0, 3), ...kb(14).map(({x:l, z:x}) => [5.6 * l, 5.6 * x, 2,]),);
      });
      Y(f => {
        f.h = l => l.translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
        [-1, 1,].map(l => X(q, gb(0, 90).translate(-5 * l, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * l + 90), W(1, 1, 0.8),));
        X(S(O(R(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), O(R(), N(9, 5, 2), W(0.3, 0, 0, 0.3)),),);
        X(O(R(28, 1), N(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(O(R(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
        X(S(O(R(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), O(R(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), O(R(), t(0, 0, 7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(O(R(28, 1), N(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(O(R(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
        X(S(O(R(28, 1), t(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), O(R(), t(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), O(R(), t(0, 0, -7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(O(R(28, 1), N(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(O(R(5), t(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      X(R(), t(-58, 1, 106).scale(2, 0.65, 2), W(0.7, 0.7, 0.7, 0.2));
      X(R(), t(-50.7, 1, 99).scale(2, 0.65, 1), W(0.7, 0.7, 0.7, 0.2));
      X(R(), t(-42, 0.4, 91).scale(5, 1, 2.5), W(0.7, 0.7, 0.7, 0.3));
      X(R(), t(-34.2, 0.4, 91).scale(3, 1, 3), W(0.7, 0.7, 0.7, 0.3));
      Jb(t(-34, 2.7, 96).rotate(-12, 0));
      X(R(5), t(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), W(0.2, 0.5, 0.5, 0.6),);
      [W(0.1, 0.55, 0.45, 0.2), W(0.2, 0.5, 0.5, 0.3), W(0.3, 0.45, 0.55, 0.4),].map((f, l) => Y(x => {
        x.h = z => {
          z.translateSelf(0, (1 - h[13].i) * (1 - h[14].i) * (l ? 0 : 3) + ab(h[13].i, h[14].i) * Math.sin(1.5 * c + 1.5 * l) * 4,);
        };
        X(R(), t(-23.5, 0.5, 91 + 6.8 * l).scale(1 === l ? 2 : 3.3, 1, 3.3), f);
        2 === l && X(R(), t(-29.1, 0.4, 91).scale(2.1, 1, 3), W(0.7, 0.7, 0.7, 0.3));
        1 === l && X(R(), t(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), W(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => X(q, t(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), W(1, 1, 0.8),));
      hb(3, f => X(w(24.7 - 0.7 * (1 & f)), t(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? W(0.5, 0.5, 0.5, 0.3) : W(0.35, 0.35, 0.35, 0.5),),);
      X(S(O(R(6, 0, 0, 0.3), t(0, -0.92, 95).scale(14, 2, 14), W(0.8, 0.8, 0.8, 0.2),), O(R(5), t(0, 0, 95).scale3d(6), W(0.3, 0.3, 0.3, 0.5)),),);
      Jb(t(0, 1.7, 82).rotate(0, 180));
      X(R(5), t(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), W(0.5, 0.3, 0.3, 0.4),);
      X(R(6), t(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), W(0.5, 0.6, 0.7, 0.3),);
      X(R(), t(0, 16, 129).scale(1.5, 1, 2), W(0.5, 0.6, 0.7, 0.3));
      X(R(7), t(0, 16.2, 133).scale(5, 1, 5), W(0.4, 0.5, 0.6, 0.4));
      X(S(zb(O(R(), t(0, 16, 110.5).scale(12, 1, 3), W(0.5, 0.3, 0.3, 0.4),), O(R(), t(0, 16, 111).scale(3, 1, 3.8), W(0.5, 0.3, 0.3, 0.4),),), O(R(5), t(0, 16, 103.5).scale(5.5, 5, 5.5), W(0.5, 0.3, 0.3, 0.4),),),);
      Y(f => {
        f.h = l => l.translateSelf(-2 * Math.sin(c)).rotate(25 * Math.sin(c));
        X(R(3), t(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), W(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(l => {
          X(R(6), t(0, 16, l + 95).scale(3, 1, 2.3).rotate(0, 90), W(0.7, 0.7, 0.7, 0.4),);
          X(R(), t(0, 6.2, l + 95).scale(0.5, 11, 0.5), W(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Y(f => {
        f.h = l => {
          const x = ab(ab((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          l.translateSelf(0, 16 * x, 8.5 * p(2 * x - 1) + 95);
        };
        X(R(5), N(5, 1.1, 5), W(0.5, 0.3, 0.3, 0.4));
        X(R(5), N(5.5, 0.9, 5.5), W(0.25, 0.25, 0.25, 0.4));
        Jb(t(0, 1.5, -1).rotate(0, 180));
      });
      Kb(t(0, 3, 95), ...kb(9).map(({x:f, z:l}) => [9 * f, 9 * l, 4,]),);
      Kb(t(0, 19, 134), [0, 0, 3.5,]);
    });
    Y(() => {
      X(mb(20), t(0, 1).scale(0.5, 0.5, 0.5), W(1, 0.3, 0.4));
      X(mb(30), N(0.7, 0.8, 0.55), W(1, 0.3, 0.4));
      X(R(), t(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), W(0.3, 0.3, 0.3));
      [-1, 1,].map(k => {
        X(q, gb(0, 0 < k ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), W(1, 1, 0.8),);
        X(O(S(R(15, 1), O(R(), t(0, 0, 1).scale(2, 2, 0.5)),), gb(-90, 0).scale(0.1, 0.05, 0.1), W(0.3, 0.3, 0.3),), t(0.2 * k, 1.2, 0.4).rotate(0, 20 * k, 20 * k),);
        Y(() => {
          X(R(20, 1), t(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), W(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(R(6, 1), N(0.13, 1.4, 0.13), W(0.3, 0.3, 0.5, 0.1));
      X(R(10), t(0, 1).scale(0.21, 0.3, 0.21), W(1, 0.5, 0.2));
      X(R(3), t(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), W(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Y(() => {
      X(R(6).slice(0, -1), N(0.77, 1, 0.77), W(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(mb(30, 24, (k, v, w) => {
        const A = v / 24, H = k * Math.PI * 2 / 30, K = Math.sin(A ** 0.6 * Math.PI / 2);
        k = A * A * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:w.D = 0, y:-0.5, z:0,} : {x:Math.cos(H) * K, y:Math.cos(A * Math.PI) - A - k, z:Math.sin(H) * K + Math.sin(k * Math.PI * 2) / 4,};
      }), N(0.7, 0.7, 0.7), W(1, 1, 1),);
      [-1, 1,].map(k => X(mb(12), t(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

