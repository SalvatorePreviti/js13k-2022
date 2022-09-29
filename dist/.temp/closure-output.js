let ba, ea, ha, ia, ka, la, ma, na, b = 0, oa = 0, qa = 0, ra = 0, sa = 0, ta = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 1, d = 0.066;
const e = [], h = [], Ia = [], Ja = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ka = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], La = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Pa = {x:0, y:0, z:0,}, Qa = Math.PI / 180;
var Ra = 0, Sa = 180;
const Ta = {x:0, y:0, z:0,}, n = NO_INLINE(a => 0 > a ? -a : a), Ua = NO_INLINE((a, c) => a < c ? a : c), Wa = NO_INLINE((a, c) => c < a ? a : c), Xa = (a, c) => n(a) > c ? a : 0, p = (a, c = 0, g = 1) => a < c ? c : g < a ? g : a, Ya = a => Math.atan2(Math.sin(a * Qa), Math.cos(a * Qa)) / Qa, Za = (a, c, g) => a + (2 * (c = (c - a) % 360) % 360 - c) * p(g) || 0, $a = (a, c, g) => (0 < g ? 1 > g ? a + (c - a) * g : c : a) || 0, ab = (a, c) => (a = p(a), $a(a, 1 - a, c)), cb = (a, c = bb, g = 0,) => 
(g *= 16, c[g++] = a.m11, c[g++] = a.m12, c[g++] = a.m13, c[g++] = a.m14, c[g++] = a.m21, c[g++] = a.m22, c[g++] = a.m23, c[g++] = a.m24, c[g++] = a.m31, c[g++] = a.m32, c[g++] = a.m33, c[g++] = a.m34, c[g++] = a.m41, c[g++] = a.m42, c[g++] = a.m43, c[g] = a.m44, c), fb = (a = db, c = eb,) => (c.m11 = a.m11, c.m12 = a.m12, c.m13 = a.m13, c.m14 = a.m14, c.m21 = a.m21, c.m22 = a.m22, c.m23 = a.m23, c.m24 = a.m24, c.m31 = a.m31, c.m32 = a.m32, c.m33 = a.m33, c.m34 = a.m34, c.m41 = a.m41, c.m42 = a.m42, 
c.m43 = a.m43, c.m44 = a.m44, c), u = NO_INLINE((a, c, g) => db.translate(a, c, g)), gb = NO_INLINE((a, c, g) => db.rotate(a, c, g)), M = NO_INLINE((a, c, g) => db.scale(a, c, g)), hb = (a, c) => Array.from(Array(a), (g, m) => c(m)), ib = (a, c, g) => (a.D = g, a.A = c, a), jb = (a, c, g = a.A) => ib(a.map(m => {
  let q, l;
  return {x:m, y:q, z:l} = m, {x:m, y:q, z:l} = c.transformPoint({x:m, y:q, z:l,}), {x:m, y:q, z:l,};
}), g, a.D,), N = (a, c, g) => a.map(m => jb(m, c, g)), kb = (a, c = 0) => hb(a, g => {
  const m = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > n(m) ? m : 0 > m ? m - c : m + c,};
}), lb = (a, c, g) => a.map((m, q, {length:l}) => ib([m, c[l - q - 1], c[l - (q + 1) % l - 1], a[(q + 1) % l],], a.A, g,)), R = (a, c, g = 0, m,) => (a = a ? kb(a, m) : Ja, m = jb(a, u(0, 1).scale3d(0 < g ? g : 1)), a = jb(a, u(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...lb(a, m, c), m, a,]), mb = (a, c = a, g = (m, q) => (q *= Math.PI / c, {x:Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(m) * Math.sin(q),})) => {
  const m = [];
  for (let q = 0; a > q; q++) {
    for (let l = 0; c > l; l++) {
      const r = ib([], 0, 1);
      m.push(r);
      r.push(g(q, l, r));
      l && r.push(g((q + 1) % a, l, r));
      c - 1 > l && r.push(g((q + 1) % a, l + 1 % c, r));
      r.push(g(q, l + 1 % c, r));
    }
  }
  return m;
}, nb = ({x:a, y:c, z:g}, m) => a * m.x + c * m.y + g * m.z, ob = a => {
  let c, g = 0, m = 0, q = 0, l = a.at(-1);
  for (c of a) {
    g += (l.y - c.y) * (l.z + c.z), m += (l.z - c.z) * (l.x + c.x), q += (l.x - c.x) * (l.y + c.y), l = c;
  }
  return c = Math.hypot(g, m, q), g /= c, m /= c, q /= c, {x:g, y:m, z:q, w:g * l.x + m * l.y + q * l.z,};
}, pb = (a, c) => {
  var g, m, q, l = c.C;
  for (var r = 0; l.length > r; ++r) {
    if (-0.00008 > (g = nb(a, l[r]) - a.w) ? q = c : 8e-5 < g && (m = c), q && m) {
      m = [];
      q = [];
      l = c.C;
      r = c.B;
      let w = l.at(-1), A = nb(a, w) - a.w;
      for (const I of l) {
        g = nb(a, I) - a.w, 8e-5 > A && q.push(w), -0.00008 < A && m.push(w), (8e-5 < A && -0.00008 > g || -0.00008 > A && 8e-5 < g) && (A /= g - A, w = {x:w.x + (w.x - I.x) * A, y:w.y + (w.y - I.y) * A, z:w.z + (w.z - I.z) * A,}, m.push(w), q.push(w)), w = I, A = g;
      }
      return {m:2 < m.length && {C:ib(m, l.A, l.D), B:r, s:c,}, l:2 < q.length && {C:ib(q, l.A, l.D), B:r, s:c,},};
    }
  }
  return {m, l:q,};
}, qb = (a, c, g = ob(c.C)) => {
  let m, q, l;
  return a ? ({m, l:q} = pb(a, c), m || q || a.o.push(c), m && (a.m = qb(a.m, m, g)), q && (a.l = qb(a.l, q, g))) : ({x:m, y:q, z:g, w:l} = g, a = {x:m, y:q, z:g, w:l, o:[c,], m:0, l:0,}), a;
}, rb = (a, c, g) => {
  const m = [], q = (l, r) => {
    let {m:w, l:A} = pb(l, r);
    w || A || (0 < g * nb(l, c) ? w = r : A = r);
    w && (l.m ? q(l.m, w) : m.push(w));
    A && l.l && q(l.l, A);
  };
  for (const l of c.o) {
    q(a, l);
  }
  return m;
}, ub = (a, c) => a && (c(a), ub(a.m, c), ub(a.l, c)), vb = a => (ub(a, c => {
  const g = c.l;
  c.l = c.m;
  c.m = g;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const m of c.o) {
    m.B = !m.B;
  }
}), a), wb = a => a.length ? a.reduce((c, g) => qb(c, {C:g, B:0, s:0,}), 0) : a, zb = (...a) => a.reduce((c, g) => {
  const m = [];
  if (c = wb(c), g) {
    g = wb(g);
    ub(c, q => q.o = rb(g, q, 1));
    ub(g, q => m.push([q, rb(c, q, -1),]));
    for (let [q, l] of m) {
      for (const r of l) {
        qb(c, r, q);
      }
    }
  }
  return c;
}), S = (a, ...c) => {
  const g = l => {
    let r;
    return l.s && ((r = m.get(l.s)) ? (q.delete(r), l = g(l.s)) : m.set(l.s, l)), l;
  }, m = new Map(), q = new Map();
  return a = vb(zb(vb(wb(a)), ...c)), ub(a, l => {
    for (const r of l.o) {
      q.set(g(r), r.B);
    }
  }), Array.from(q, ([{C:l}, r]) => {
    const w = l.map(({x:A, y:I, z:K}) => ({x:A, y:I, z:K,}));
    return ib(r ? w.reverse() : w, l.A, l.D);
  });
}, T = NO_INLINE((a, c, g) => $a(a, c, 1 - Math.exp(-g * d))), Ab = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][qa = Ia.reduce((a, {j:c}) => a + c, 0)] + " / XIII";
}, Bb = () => {
  localStorage.DanteSP22 = JSON.stringify([h.map(({j:a}) => a), Ia.map(({j:a}) => a), ra, b, Aa,]);
}, Cb = (a, c, g, m) => new DOMMatrix([g, 0, 0, 0, 0, m, 0, 0, 0, 0, (c + a) / (a - c), -1, 0, 0, 2 * c * a / (a - c), 0,]), Fb = () => {
  let a, c, g, m, q, l, r, w, A, I, K, P, E, f, k = !0;
  const x = [], z = () => {
    b4.innerHTML = "Music: " + k;
    ea || !k ? Db.disconnect() : Db.connect(Eb.destination);
  }, D = () => {
    const v = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = Cb(0.3, 181, v, 1.732051);
    ma = [Cb(0.3, 55, v, 1.732051), Cb(55, 181, v, 1.732051),];
    m = w = void 0;
    x.length = ha = f = P = E = Ca = Da = 0;
  }, G = (v, t = 0) => {
    if (ea !== v) {
      ea = v;
      ia = t;
      D();
      Ab();
      document.body.className = v ? "l m" : "l";
      try {
        v ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Db.start());
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
    k = !k;
    z();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = v => {
    if (!ea && (v.target === hC && (ha = 1), ia)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = v => {
    let t;
    v.repeat || (t = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[v.code], (x[t] = !!v.type[5] && !0) && (0 === t && (ha = 1), 1 === t && G(!0)));
  };
  onmousemove = ({movementX:v, movementY:t}) => {
    ia && (v || t) && (Sa += 0.1 * v, Ra += 0.1 * t);
  };
  hC.ontouchstart = v => {
    if (!ea) {
      for (let {pageX:t, pageY:B, identifier:Q} of v.changedTouches) {
        ia && t > hC.clientWidth / 2 ? void 0 === w && (A = 0, l = t, r = B, w = Q, I = Sa, K = Ra) : void 0 === m && (q = 0, c = t, g = B, m = Q);
      }
      a = oa;
    }
  };
  hC.ontouchmove = v => {
    if (!ea) {
      for (let {pageX:ca, pageY:U, identifier:O} of v.changedTouches) {
        var t, B, Q, aa;
        w === O && (Sa = I + (ca - l) / 2.3, Ra = K + (U - r) / 2.3, A = 1);
        m === O && (O = (c - ca) / 20, t = n(O), B = (g - U) / 20, Q = n(B), (aa = 0.5 < Wa(t, Q)) && (q = 1), P = (aa && 0.2 < t) * p(O, -1), E = (aa && 0.2 < Q) * p(B, -1), 2 < t && (c = ca + 20 * (0 > O ? -1 : 1)), 2 < Q && (g = U + 20 * (0 > B ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = v => {
    let t;
    document.activeElement === document.body && v.preventDefault();
    for (const B of v.changedTouches) {
      B.identifier === w ? (w = void 0, A || (t = 1), A = 0) : B.identifier === m ? (m = void 0, E = P = 0, q || (t = 1), q = 0) : t = 1;
    }
    v.target === hC && t && a && 0.02 < (v = oa - a) && 0.7 > v && (ha = 1);
  };
  ka = () => {
    Ca = E + (x[4] ? 1 : 0) - (x[5] ? 1 : 0);
    Da = P + (x[2] ? 1 : 0) - (x[3] ? 1 : 0);
    var v = navigator.getGamepads()[0];
    if (v) {
      const t = Q => B[Q]?.pressed || 0 < B[Q]?.value ? 1 : 0, B = v.buttons;
      v = v.axes;
      ia && (Ra += d * Xa(v[3], 0.3) * 80, Sa += d * Xa(v[2], 0.3) * 80);
      Ca += t(12) - t(13) - Xa(v[1], 0.2);
      Da += t(14) - t(15) - Xa(v[0], 0.2);
      t(9) && G(!0);
      (v = t(3) || t(2) || t(1) || t(0)) && !f && (ha = 1);
      f = v;
    }
  };
  document.onvisibilitychange = onblur = onresize = D;
  G(!0);
}, W = NO_INLINE((a, c, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * c << 8 | 255 * a), X = (a, c = new DOMMatrix(), g) => na.o.push(...N(a, c, g)), Y = (a, c = 1) => {
  const g = na;
  c = {u:new DOMMatrix(), H:e.length, G:c, o:[],};
  return e.push(c), a(na = c), na = g, c;
}, Gb = a => (a = a.transformPoint(), Math.hypot(Pa.x - a.x, Pa.y - a.y, Pa.z - a.z,)), Ib = a => {
  const c = () => fb(q.u, g).multiplySelf(a), g = new DOMMatrix(), m = new DOMMatrix(), q = na, l = h.length, r = {j:0, g:0, i:0, s:q, I:c, h() {
    fb(c(), m).rotateSelf(60 * r.g - 30, 0).translateSelf(0, 1);
    r.g = T(r.g, r.j, 4);
    r.i = T(r.i, r.j, 1);
    ha && 3 > Gb(g) && (0.3 > r.g || 0.7 < r.g) && (r.j = r.j ? 0 : 1, l && 1 / 0 > Ha && (Ha = b + 1, h4.innerHTML = "* click *"), ra = l, Bb());
    cb(m, Hb, l + 13);
    Hb[16 * l + 223] = 1 - r.g;
  },};
  h.push(r);
  X(R(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(R(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
  X(R(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), W(0.5, 0.5, 0.4));
}, Jb = (a, ...c) => {
  let g = -1, m = 0, q = 0, l = 0, r = 0, w = 0, A = 1, I = 3;
  const K = new DOMMatrix(), P = {j:0, h() {
    if (!P.j) {
      let ca, U, O, J, H, L, y, F = 1, C = 1 / 0;
      for (const ua of k) {
        var {x:t, z:B, w:Q} = ua;
        B = (t = Math.hypot(z - t, D - B)) - Q;
        y ||= t < Q;
        0 < B && C > B && (C = B, x = ua);
        F = Ua(F, t / Q);
      }
      y || ({x:aa, z:ca, w:U} = x, O = z - aa, J = D - ca, H = Math.hypot(O, J), L = Math.atan2(-J, O), A && (q = (Math.random() - 0.5) * Math.PI / 2, I = p(I / (1 + Math.random()))), L += q, g = -Math.cos(L), m = Math.sin(L), 0.1 < H && (H = Ua(H, U) / (H || 1), z = O * H + aa, D = J * H + ca));
      A = y;
      I = T(I, 6 * (1 - F) + 3, F + 3);
      G = T(G, z = T(z, z + g, I), I);
      v = T(v, D = T(D, D + m, I), I);
      l = Za(l, Math.atan2(G - r, v - w) / Qa - 180, 1 - Math.exp(-3 * d),);
      if (1.6 > Gb(fb(E.u, K).multiplySelf(a).translateSelf(r = G, 0, w = v,).rotateSelf(0, l, 7 * Math.sin(1.7 * b)),)) {
        P.j = 1;
        var aa = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][qa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        1 / 0 > Ha && (Ha = b + (qa && 12 > qa ? 5 : 7), h4.innerHTML = aa);
        Ab();
        Bb();
      }
    }
    P.j && fb(e[2].u, K).translateSelf(f % 4 * 1.2 - 1.7 + Math.sin(b + f) / 7, -2, 1.7 * (f / 4 | 0) - 5.5 + n(f % 4 - 2) + Math.cos(b / 1.5 + f) / 6,);
    cb(K, Hb, f);
  },}, E = na, f = Ia.length, k = c.map(([t, B, Q]) => ({x:t, z:B, w:Q,}));
  let x = k[0], {x:z, z:D} = x, G = z, v = D;
  Ia.push(P);
}, Kb = () => {
  let a, c, g, m, q, l, r, w, A, I, K, P, E, f, k, x, z, D = 1, G = 2, v = 2;
  const t = () => {
    I = A = 0;
    for (let O = 32; 128 > O; O += 2) {
      let J = 0, H = 0, L = 0, y = 0;
      const F = 512 * O;
      for (let C = 1 & O; 128 > C; C += 2) {
        const ua = F + 4 * C;
        let da = F + 4 * (127 - C);
        const ja = U[ua] / 255, Va = U[1 + da] / 255, pa = 1 - n(C / 63.5 - 1);
        10 < C && 118 > C && (J = Wa(J, Wa(ja * pa, ja * U[da] / 255)), H = Wa(H, Wa(Va * pa, Va * U[1 + ua] / 255)));
        (54 > C || 74 < C) && 1e-3 < (da = (1 - pa) * Wa(ja, Va) / 3) && (64 > C && da > L ? L = da : 64 < C && da > y && (y = da));
      }
      n(y - L) > n(A) && (A = y - L);
      n(H - J) > n(I) && (I = H - J);
    }
  }, B = () => {
    let O = 0, J = 0, H = 0, L = 0;
    m = 0;
    ca.fill(0);
    for (let F = 0; 31 > F; ++F) {
      let C = 0;
      const ua = 512 * F;
      for (let da = 0; 128 > da; da++) {
        var y = ua + 4 * da;
        let ja = (U[y] + U[1 + y]) / 255;
        y = U[2 + y];
        14 < da && 114 > da && (C += ja);
        y && ja && (ja = ca[y] + 1, ca[y] = ja, O > ja || (O = ja, J = y, m = 1));
      }
      3 > C && 5 < F && (H += F / 32);
      3 < C && (7 < F && (L += F / 15), m = 1);
    }
    a = J || c;
    c = J;
    v = T(v, m ? 6.5 : -20 > Ta.y ? 11 : 8, 4);
    Ta.y += L / 41 - (m || v) * H / 41 * v * d;
  }, Q = () => (G ? h[ra].s : e[g && 1 === e[g].G && g || 0]).u, aa = (O, J, H, L) => $a(O, J, D || (p(n(J - O) ** 0.5 - H) + 1 / 7) * (1 - Math.exp(-(1.5 * L) * d))), ca = new Uint8Array(256), U = new Uint8Array(65536);
  e[37].h = O => {
    var J = p(Ca, -1);
    let H = p(Da, -1);
    var L = Xa(Math.hypot(J, H) ** 0.5, 0.1), y = Math.atan2(J, H);
    L && (q = 90 - y / Qa);
    l = Za(l, q, 1 - Math.exp(-8 * d));
    r = T(r, L, 10);
    J = L * n(J) * Math.sin(y);
    H = L * n(H) * Math.cos(y);
    Z.r9r(0, 0, 128, 128, 6408, 5121, U);
    NO_INLINE(B)();
    NO_INLINE(t)();
    var F = p(1 - 5 * Wa(n(A), n(I)));
    E = T(E, m * F * p(2 * L) * 7, m ? 0.1 < F ? 10 : 5 + 2 * L : 1,);
    K = T(K, 0, m ? 8 : 4);
    P = T(P, 0, m ? 8 : 4);
    a && (F = 0);
    y = ia ? (180 - Sa) * Qa : 0;
    L = (A += d * (F * K + E * (H * Math.cos(y) - J * Math.sin(y))), I += d * (F * P + E * (H * Math.sin(y) + J * Math.cos(y))), Q());
    var {x:J, y, z:C} = 1 < G ? h[ra].I().transformPoint({x:0, y:ra || 0.9 < za ? 15 : 1, z:-2.4,}) : (H = L, fb(H).invertSelf(), eb.m41 = eb.m42 = eb.m43 = 0, C = eb.transformPoint({x:A, z:I, w:0,}), Ta.x += C.x, Ta.z += C.z, H.transformPoint(Ta));
    if (a && (K = (J - Pa.x) / d, P = (C - Pa.z) / d), Pa.x = J, Pa.y = y, Pa.z = C, (G = G && (m && a ? 0 : 1)) || a !== g) {
      g = a, F = (L = Q()).inverse().transformPoint(Pa), Ta.x = F.x, Ta.y = F.y, Ta.z = F.z;
    }
    w = T(w, Ba * (27 < a && 32 > a), 2,);
    y < (-20 > J || 109 > C ? -25 : -9) && (K = P = E = 0, G = 2);
    1 === a && (h[9].j = -15 > J && 0 > C ? 1 : 0);
    f = $a(T(f, y, 2), y, G || 8 * n(f - y),);
    x = aa(x, f, 2, 1);
    k = aa(k, J, 0.5, 1);
    z = aa(z, C, 0.5, 1);
    ia ? (H = G + (1 - Math.exp(-18 * d)), Ea = $a(Ea, J, H), Fa = $a(Fa, f + 1.5, H), Ga = $a(Ga, C, H), Sa = Ya(Sa)) : (Fa = aa(Fa, Wa(x + p((-60 - C) / 8, 0, 20) + 13 + 9 * w, 6), 4, 2,), Ga = aa(Ga, z + -18 + 5 * w, 1, 2 + w,), Ea = aa(Ea, k, 1, 2 + w,), L = Ua(-6, -n(z - Ga)), y = k - Ea, Sa = Za(Sa, 90 - Ya(Math.atan2(L, y) / Qa), D + (1 - Math.exp(-10 * d)),), Ra = Za(Ra, 90 - Math.atan2(Math.hypot(L, y), Fa - x) / Qa, D + (1 - Math.exp(-10 * d)),));
    Ra = p(Ra, -87, 87);
    D = 0;
    O.translateSelf(J, f + 0.124, C).rotateSelf(0, l);
  };
  [39, 38,].map((O, J) => e[O].h = H => fb(e[37].u, H).translateSelf(0, r * p(0.45 * Math.sin(9.1 * b - Math.PI * J - Math.PI / 2)),).rotateSelf(r * Math.sin(9.1 * b - Math.PI * J) * 0.25 / Qa, 0));
}, Lb = (a, c = 35633) => (c = Z.c6x(c), Z.s3c(c, a), Z.c6a(c), c), Qb = (a, c) => {
  const g = {}, m = Z.c1h();
  return Z.abz(m, a), Z.abz(m, Lb(c, 35632)), Z.l8l(m), q => q ? g[q] || (g[q] = Z.gan(m, q)) : Z.u7y(m);
}, Sb = (a, c, g) => {
  let m;
  ea ? (m = gb(0, 40 * Math.sin(oa) - 70), cb(m, Rb, 37), cb(m, Rb, 38), cb(m, Rb, 39), Z.uae(a, !1, Rb), Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v,)) : (Z.uae(a, !1, Rb), Z.d97(4, (c ? e[39].F : e[37].v) - 3, 5123, 6,), Z.uae(a, !1, Hb), Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, Ia.length,), Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,));
}, Tb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Ub = a => Math.sin(a * Math.PI * 2), Vb = a => 0.5 > a % 1 ? 1 : -1, Wb = a => a % 1 * 2 - 1, Xb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, dc = a => {
  let c = 0;
  const g = () => {
    let r = 0;
    const w = y => {
      let F, C, ua, da = 0, ja = 0;
      const Va = [], pa = new Int32Array(768 * y), Yb = 2 ** (t - 9) / y, Zb = Math.PI * 2 ** (U - 8) / y, xb = J * y & -2;
      for (let sb = 0; 11 >= sb; ++sb) {
        for (let tb = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + sb]; 32 > tb; ++tb) {
          const Nb = (32 * sb + tb) * y;
          for (var Ma = 0; 4 > Ma; ++Ma) {
            if (F = 0, Mb && (F = A[Mb - 1].charCodeAt(tb + 32 * Ma) - 40, F += 0 < F ? 106 : 0), F) {
              var fa;
              if (!(fa = Va[F])) {
                fa = F;
                let V = void 0, va = void 0;
                var Ob = F;
                let $b = 0, ac = 0;
                const bc = 2 > c ? Wb : Ub, cc = 2 > c ? 1 > c ? Vb : Xb : Ub, Pb = new Int32Array(z + D + L);
                for (let Na = 0, yb = 0; z + D + L > Na; ++Na, ++yb) {
                  let Oa = 1;
                  z > Na ? Oa = Na / z : z + D > Na || (Oa = (1 - (Oa = (Na - z - D) / L)) * 3 ** (-v / 16 * Oa));
                  0 > yb || (yb -= 4 * y, va = 0.00396 * 2 ** ((Ob + K - 256) / 12), V = 0.00396 * 2 ** ((Ob + f - 256) / 12) * (1 + (c ? 0 : 0.0072)));
                  Pb[Na] = 80 * (bc($b += va * Oa ** (P / 32)) * I + cc(ac += V * Oa ** (k / 32)) * E + (x ? (2 * Math.random() - 1) * x : 0)) * Oa | 0;
                }
                fa = Va[fa] = Pb;
              }
              for (let V = 0, va = 2 * Nb; fa.length > V; ++V, va += 2) {
                pa[va] += fa[V];
              }
            }
          }
          for (let V, va = 0; y > va; ++va) {
            Ma = 0;
            fa = 2 * (Nb + va);
            var wa = (((V = pa[fa]) || ua) && (C = 0.00308 * B, 1 !== c && 4 !== c || (C *= Math.sin(Yb * fa * Math.PI * 2) * H / 512 + 0.5), C = 1.5 * Math.sin(C), da += C * ja, wa = (1 - Q / 255) * (V - ja) - da, ja += C * wa, V = 4 === c ? ja : 3 === c ? wa : da, c || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= aa / 32, ua = 1e-5 < V * V, wa = Math.sin(Zb * fa) * ca / 512 + 0.5, Ma = V * (1 - wa), V *= wa), fa < xb || (Ma += pa[1 + fa - xb] * O / 
            255, V += pa[fa - xb] * O / 255), r + fa >> 1);
            q[wa] += (pa[fa] = Ma) / 65536;
            l[wa] += (pa[++fa] = V) / 65536;
          }
        }
      }
      r += 768 * y;
    }, A = Ka[c], [I, K, P, E, f, k, x, z, D, G, v, t, B, Q, aa, ca, U, O, J, H] = La[c], L = 4 * G ** 2;
    w(5513);
    w(4562);
    w(3891);
    Tb(5 > ++c ? g : a);
  }, m = Eb.createBuffer(2, 5362944, 44100), q = m.getChannelData(0), l = m.getChannelData(1);
  Db.buffer = m;
  Db.loop = !0;
  Tb(g);
}, Eb = new AudioContext(), db = new DOMMatrix(), eb = new DOMMatrix(), bb = new Float32Array(16), Rb = new Float32Array(624), Hb = new Float32Array(624), ec = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Db = Eb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((c, g, m) => (c * m + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Tb(() => {
  let a = 0;
  const c = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], l = G => {
        Z.f1s();
        requestAnimationFrame(l);
        var v = (G - (ba || G)) / 1e3;
        if (oa += v, b += d = ea ? 0 : Ua(0.066, v), ba = G, 0 < d) {
          Ba = ab(h[12].g, h[13].g);
          xa = $a(T(xa, 0, 1), Ya(xa + 60 * d), h[5].g - h[6].i,);
          sa = $a(T(sa, 0, 5), Ya(sa + 56 * d), Ba,);
          ta = $a(T(ta, 0, 4), Ya(ta + 48 * d), Ba,);
          Aa = T(Aa, h[9].i, 0.2 + 0.3 * n(2 * h[9].i - 1),);
          za = T(za, ya ? T(za, -9, 1.5) : p(b / 3), 1,);
          Ha && b > Ha && (Ha = 0, h4.innerHTML = "");
          h[0].j && 0.8 < h[0].g && (13 > qa ? (1 / 0 > Ha && (Ha = b + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0) : ya || (1 / 0 > Ha && (Ha = b + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ya = 1));
          ka();
          for (const B of e) {
            B.G && (B.h && B.h(fb(db, B.u)), cb(B.u, Rb, B.H - 1));
          }
          for (const B of h) {
            B.h();
          }
          for (const B of Ia) {
            B.h();
          }
          P();
          Z.b6o(36160, D);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          var {x:v, y:G, z:t} = Pa;
          Z.uae(P("b"), !1, cb(fb().rotateSelf(0, 180).invertSelf().translateSelf(-v, -G, 0.3 - t)),);
          Sb(P("c"), 0, 41);
          Z.c4s(256);
          Z.cbf(!1, !0, !0, !1);
          Z.uae(P("b"), !1, cb(fb().translateSelf(-v, -G, -t - 0.3)));
          Sb(P("c"), 0, 41);
          Z.f1s();
        }
        ha = 0;
        fb(db, r);
        ea ? r.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : r.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ea, -Fa, -Ga,);
        I();
        Z.b6o(36160, x);
        Z.v5y(0, 0, 2048, 2048);
        k[0](54.7 * 1.1);
        k[1](126 * 1.1);
        E();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(E("a"), !1, cb(la));
        Z.uae(E("b"), !1, cb(r));
        Z.uae(E("i"), !1, q[0]);
        Z.uae(E("j"), !1, q[1]);
        Z.ubu(E("k"), Ea, Fa, Ga);
        Sb(E("c"), !ia, 42);
        K();
        Z.ubu(K("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, oa);
        Z.ubu(K("k"), Ea, Fa, Ga);
        Z.uae(K("b"), !1, cb(fb(r).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, D);
        Z.f1s();
      }, r = new DOMMatrix(), w = new DOMMatrix(), A = g;
      var m = Lb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const I = Qb(Lb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), K = Qb(Lb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), P = Qb(m, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), E = Qb(m, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), f = hb(8, () => ({})), k = hb(2, G => {
        const v = Z.c25();
        return Z.a4v(33984 + G), Z.b9j(3553, v), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), t => {
          let B = 0, Q = 0, aa = 0, ca = 1 / 0, U = -1 / 0, O = 1 / 0, J = -1 / 0, H = 1 / 0, L = -1 / 0;
          Z.fas(36160, 36096, 3553, v, 0);
          Z.c4s(256);
          fb().scale3dSelf(t).multiplySelf(fb(ma[G], w).multiplySelf(r).invertSelf(),);
          for (let y = 0; 8 > y; ++y) {
            const F = f[y], C = (F.x = 4 & y ? 1 : -1, F.y = 2 & y ? 1 : -1, F.z = 1 & y ? 1 : -1, eb.transformPoint(F));
            B -= F.x = (0 | C.x) / t / C.w;
            Q -= F.y = (0 | C.y) / t / C.w;
            aa -= F.z = (0 | C.z) / t / C.w;
          }
          fb().rotateSelf(298, 139).translateSelf(B / 8, Q / 8, aa / 8);
          for (t = 0; 8 > t; ++t) {
            const {x:y, y:F, z:C} = eb.transformPoint(f[t]);
            ca = Ua(ca, y);
            U = Wa(U, y);
            O = Ua(O, F);
            J = Wa(J, F);
            H = Ua(H, C);
            L = Wa(L, C);
          }
          t = 10 + G;
          H *= 0 > H ? t : 1 / t;
          L *= 0 < L ? t : 1 / t;
          Z.uae(I("b"), !1, cb(fb(db, w).scaleSelf(2 / (U - ca), 2 / (J - O), 2 / (H - L),).translateSelf((U + ca) / -2, (J + O) / -2, (H + L) / 2).multiplySelf(eb), q[G],),);
          Sb(I("c"), !ia, 42);
        };
      }), x = Z.c5w();
      m = Z.c25();
      const z = Z.c3z(), D = Z.c5w();
      P();
      Z.uae(P("a"), !1, cb(Cb(1e-4, 1, 1.4, 0.59)));
      E();
      Z.ubh(E("q"), 2);
      Z.ubh(E("h"), 1);
      Z.ubh(E("g"), 0);
      K();
      Z.ubh(K("q"), 2);
      Z.b6o(36160, x);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, D);
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
      NO_INLINE(Fb)();
      NO_INLINE(Kb)();
      requestAnimationFrame(l);
    }
  }, g = new Image();
  g.onload = g.onerror = c;
  g.src = ec;
  NO_INLINE(dc)(() => {
    Tb(() => {
      let l, r = 0;
      const w = [], A = [], I = [], K = [], P = z => {
        let {x:D, y:G, z:v} = l[z], t = (x[0] = D, x[1] = G, x[2] = v, z = "" + (l.D ? k : E), f.get(z));
        return void 0 !== t ? (D = 3 * t, K[D] = (K[D++] + E[5]) / 2, K[D] = (K[D++] + E[6]) / 2, K[D] = (K[D] + E[7]) / 2) : (f.set(z, t = f.size), A.push(D, G, v, x[3]), I.push(E[4]), K.push(E[5], E[6], E[7])), t;
      }, E = new Int32Array(8), f = new Map(), k = new Int32Array(E.buffer, 0, 5), x = new Float32Array(E.buffer);
      for (const z of e) {
        for (l of (x[3] = 40 === z.H ? -14 : z.G && z.H, z.o)) {
          const {x:D, y:G, z:v} = ob(l);
          E[4] = 0 | l.A;
          E[5] = 32767 * D;
          E[6] = 32767 * G;
          E[7] = 32767 * v;
          for (let t = 2, B = P(0), Q = P(1); l.length > t; ++t) {
            w.push(B, Q, Q = P(t));
          }
        }
        z.o = null;
        z.v = r;
        z.F = r = w.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(A), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(K), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(I), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Tb(c);
      try {
        const [z, D, G, v, t] = JSON.parse(localStorage.DanteSP22,);
        h.map((B, Q) => B.g = B.i = B.j = Q ? 0 | z[Q] : 0);
        Ia.map((B, Q) => B.j = 0 | D[Q]);
        ra = G;
        Aa = t;
        b = v;
        d = 0;
      } catch {
      }
      za = p(ra);
    });
    const m = hb(11, l => u(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10),), q = hb(10, l => lb(jb(kb(18), m[l]).reverse(), jb(kb(18), m[l + 1]), 1,)).flat();
    Y(() => X([Ja.slice(1),], u(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const l = (f, k, x) => Y(z => {
        z.h = D => D.translateSelf(A() * Math.sin(3 * f + b * f) * k);
        Ja.map(({x:D, z:G}) => {
          X(R(11, 1), u(4 * D, 4, x + 4 * G).scale(0.8, 3, 0.8), W(0.5, 0.3, 0.7, 0.6),);
          X(R(), u(4 * D, 7, x + 4 * G).scale(1, 0.3), W(0.5, 0.5, 0.5, 0.3),);
        });
        X(S(N(R(), u(0, 0, x).scale(5, 1, 5), W(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(D => N(R(), u(5 * D, 0.2, x).rotate(-30 * D).scale(4, 1, 2), W(0.8, 0.8, 0.8, 0.3),)),),);
        X(R(), u(0, -3, x).scale(8, 2, 8), W(0.4, 0.4, 0.4, 0.3));
      }), r = (f, k, x, z) => f.translateSelf(k + Math.sin(b + 2) / 5, x + Math.sin(0.8 * b) / 3, z).rotateSelf(2 * Math.sin(b), Math.sin(0.7 * b), Math.sin(0.9 * b),), w = f => S(N(R(), u(0, -f / 2).scale(6, f - 1, 2.2)), N(R(), u(0, -f / 2 - 6).scale(4, f - 3, 4)), N(R(32, 1), u(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), A = () => Ua(h[2].i, 1 - h[4].i), I = S(N(R(30, 1, 1.15, 1), u(0, -3).scale(3.5, 1, 3.5), W(0.7, 0.4, 0.25, 0.7),), N(R(30, 1, 1.3, 1), u(0, -2.5).scale(2.6, 1, 3), W(0.7, 
      0.4, 0.25, 0.2),), N(R(), u(4, -1.2).scale3d(2), W(0.7, 0.4, 0.25, 0.3)),), K = hb(7, f => N(R(6, 1), u(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), W(0.3, 0.3, 0.38),)).flat(), P = (Y(f => {
        f.h = k => r(k, -12, 4.2, 40 * za - 66);
        X(I);
        Ib(u(0, -3, 4));
      }), Ib(u(-5.4, 1.5, -19).rotate(0, -90)), Jb(u(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Jb(u(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...kb(18).map(({x:f, z:k}) => [7 * f, 10 * k, 4.5 - 2 * n(f),]),), X(R(), u(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), W(0.8, 0.8, 0.8, 0.2)), Ja.map(({x:f, z:k}) => X(R(6), u(3 * f, 3, 15 * k).scale(0.7, 4, 0.7), W(0.6, 0.3, 0.3, 0.4))), X(R(), u(0, 0, -23).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), X(R(), u(0, 0, 22).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2)), [-15, 
      15,].map((f, k) => {
        X(R(), u(0, 6.3, f).scale(4, 0.3, 1), W(0.3, 0.3, 0.3, 0.4));
        X(R(), u(0, 1, f).scale(3, 0.2, 0.35), W(0.5, 0.5, 0.5, 0.3));
        Y(x => {
          x.h = z => z.translateSelf(0, 0, f).scaleSelf(1, p(1.22 - h[k + 1].g), 1);
          X(K);
        });
      }), hb(5, f => hb(2, k => X(q, u(18.5 * (k - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * k).scale(1.2, 10, 1.2), W(1, 1, 0.8, 0.2),)),), X(R(), u(3, 1.5, -20).scale(0.5, 2, 5), W(0.7, 0.7, 0.7, 0.2)), X(R(), u(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), W(0.75, 0.75, 0.75, 0.2),), X(R(5), u(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), W(0.6, 0.3, 0.3, 0.4),), X(R(), gb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), W(0.8, 0.2, 0.2, 0.5),), X(S(zb(N(R(6, 0, 0, 0.3), 
      u(8, -3, -4).scale(13, 1, 13), W(0.7, 0.7, 0.7, 0.2),), N(R(6), u(0, -8).scale(9, 8, 8), W(0.4, 0.2, 0.5, 0.5)), N(R(6, 0, 0, 0.3), u(0, -0.92).scale(13, 2, 13), W(0.8, 0.8, 0.8, 0.2),),), N(R(5), M(5, 30, 5), W(0.4, 0.2, 0.6, 0.5)), N(R(5, 0, 1.5), u(0, 1).scale(4.5, 0.3, 4.5), W(0.7, 0.5, 0.9, 0.2),), N(R(), gb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), W(0.5, 0.5, 0.5, 0.5),), N(R(6), u(15, -1.5, 4).scale(3.5, 1, 3.5), W(0.5, 0.5, 0.5, 0.5),),),), Y(f => {
        f.h = k => k.translateSelf(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * b) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        X(R(5), u(0, -0.2).scale(5, 1, 5), W(0.6, 0.65, 0.7, 0.3));
        Ib(u(0, 1.2));
      }), Ib(u(15, -2, 4)), l(0.7, 12, 35), l(1, 8.2, 55), Y(f => {
        f.h = k => k.translateSelf(A() * Math.sin(b / 1.5 + 2) * 12);
        X(S(zb(N(R(), M(1.5, 1, 5), W(0.9, 0.9, 0.9, 0.2)), N(R(6), M(4, 1, 5), W(0.9, 0.9, 0.9, 0.2)), N(R(), u(0, -2).scale(2, 3.2, 1.9), W(0.3, 0.8, 0.5, 0.5),), N(R(16, 1, 0, 4), M(1, 1, 1.5).rotate(0, 90), W(0.9, 0.9, 0.9, 0.2),),), N(R(), M(1.3, 10, 1.3), W(0.2, 0.7, 0.4, 0.6)),), u(0, 0, 45),);
        Jb(u(0, 2.8, 45), [0, 0, 4.5,]);
      }), X(R(), u(-18.65, -3, 55).scale(2.45, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)), Y(f => {
        f.h = k => k.translateSelf(9.8 * (1 - A()));
        X(R(3), u(-23, -1.7, 55.8).scale(5, 0.7, 8.3), W(0.3, 0.6, 0.6, 0.2));
        X(R(8), u(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), W(0.8, 0.8, 0.8, 0.2));
        X(R(), u(-23, -3, 55).scale(5.2, 1.7, 3), W(0.5, 0.5, 0.5, 0.3));
        X(R(), u(-23, -2.2, 62).scale(3, 1, 4), W(0.5, 0.5, 0.5, 0.3));
        Ib(u(-23, -0.5, 66.5));
      }), Y(f => {
        f.h = k => k.translateSelf(0, p(1 - 5 * A()) * ab(h[4].g, h[5].g) * Math.sin(1.35 * b) * 4);
        X(R(), u(-22.55, -3, 55).scale(1.45, 1.4, 2.7), W(0.7, 0.7, 0.7, 0.2));
        X(S(N(R(), M(3, 1.4, 2.7)), N(R(), M(1.2, 8, 1.2)),), u(-33, -3, 55), W(0.7, 0.7, 0.7, 0.2),);
      }), Y(f => {
        f.h = k => k.translateSelf(0, 0, p(1 - 5 * A()) * ab(h[4].g, h[5].g) * Math.sin(0.9 * b) * 8);
        X(S(N(R(), u(-27, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2),), N(R(), u(-27, -3, 55).scale(1, 3), W(0.9, 0.9, 0.9, 0.2),),),);
        X(R(), u(-39, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2));
      }), Y(f => {
        f.h = k => k.translateSelf(0, -6.5 * h[4].i);
        X(R(6), u(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), W(0.7, 0.7, 0.7, 0.4),);
      }), Ib(u(-55, -1.1, 46).rotate(0, 90)), X(R(6), u(-61.3, -2.4, 49).scale(3, 1, 5), W(0.4, 0.6, 0.6, 0.3)), X(R(7), u(-57, -2.6, 46).scale(4, 1, 4), W(0.8, 0.8, 0.8, 0.3)), [...N(R(), u(0, -3).scale(11, 1.4, 3), W(0.9, 0.9, 0.9, 0.2)), ...S(N(R(6), gb(90).scale(6, 8, 6), W(0.3, 0.6, 0.6, 0.3)), N(R(4, 0, 0.01), u(0, 6).scale(12, 2, 0.75).rotate(0, 45), W(0.3, 0.6, 0.6, 0.3),), N(R(6), gb(90).scale(5, 12, 5), W(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => N(R(5), u(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), W(0.3, 0.6, 0.6, 0.3),)),),]), E = (X(P, u(-53, 0, 55)), Y(f => {
        f.h = k => k.translateSelf(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + xa, 0,);
        X(P);
      }, 2), X(R(), u(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), W(0.7, 0.7, 0.7, 0.2),), X(R(3, 0, -0.5), u(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), W(0.8, 0.8, 0.8, 0.2),), X(S(zb(N(R(), u(-100, -2.5, 55).scale(8, 1, 8), W(0.8, 0.8, 0.8, 0.2),), N(R(), u(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), W(0.8, 0.8, 0.8, 0.2),), N(R(), u(-100, -2.6, 70).scale(3, 1.1, 7), W(0.8, 0.8, 0.8, 0.2),), N(R(), u(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), W(0.8, 0.8, 0.8, 0.2),), N(R(6), 
      u(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), W(0.6, 0.6, 0.6, 0.3),), N(R(), u(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), W(0.8, 0.8, 0.8, 0.2),), N(R(), u(-100, 0.42, 92).scale(3, 1.1, 4.1), W(0.8, 0.8, 0.8, 0.2),),), N(R(8), u(-100, -1, 55).scale(7, 0.9, 7), W(0.3, 0.3, 0.3, 0.4),), N(R(8), u(-100, -2, 55).scale(4, 0.3, 4), W(0.4, 0.4, 0.4, 0.5),), N(R(8), u(-100, -3, 55).scale(0.6, 1, 0.6), W(0.4, 0.4, 0.4, 0.5),),),), Jb(u(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), Jb(u(-89, 0.2, 80), [0, 0, 6,]), X(S(N(R(), u(-100, 1, 63).scale(7.5, 4), W(0.5, 0.5, 0.5, 0.4)), N(R(), u(-100, 0, 70).scale(2, 2, 10), W(0.5, 0.5, 0.5, 0.4),), N(R(20, 1), u(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), W(0.5, 0.5, 0.5, 0.4),),),), Y(f => {
        f.h = k => k.translateSelf(-99.7, -1.9, 63.5).scale(1, p(1.1 - h[6].g), 1);
        X(K);
      }), Ja.map(({x:f, z:k}) => {
        X(R(6), u(7 * f - 100, -3, 7 * k + 55).scale(1, 8.1), W(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(x => X(R(6), u(7 * f - 100, x, 7 * k + 55).scale(1.3, 0.5, 1.3), W(0.4, 0.2, 0.2, 0.8),));
      }), hb(7, f => {
        X(R((23 * f + 1) % 5 + 5, 0, 0.55), u(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), W(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), X(R(), u(-87, -9.5, 24).scale(7, 1, 3), W(0.4, 0.5, 0.6, 0.4)), X(R(4), u(-86, -9.2, 27).scale(5, 1, 5), W(0.5, 0.6, 0.7, 0.3)), X(R(12, 1), u(-86, -9, 31).scale(1.5, 1, 1.5), W(0.3, 0.3, 0.4, 0.1)), Ib(u(-86, -7.5, 31)), Y(f => {
        f.h = k => k.translateSelf(0, 3.5 * (1 - Wa(h[6].g, h[7].g)) + ab(h[7].i, h[6].i) * Math.sin(b) * 5,);
        [0, 12, 24,].map(k => X(R(), u(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), W(0.2, 0.5, 0.6, 0.2),));
      }), Y(f => {
        f.h = k => k.translateSelf(0, ab(h[7].i, h[6].i) * Math.sin(b + 3) * 6, 6 * Math.sin(0.6 * b + 1) * ab(h[7].i, h[6].i),);
        [6, 18,].map(k => X(R(), u(k - 76.9, k / -13 - 10, 24).scale(2.8, 1.5, 3), W(0.1, 0.4, 0.5, 0.2),));
      }), X(S(zb(N(R(5), u(0, 0, -7).scale(2, 1.2, 2), W(0.2, 0.4, 0.7, 0.3),), N(R(5), M(9, 1.2, 9), W(0, 0.2, 0.3, 0.5)), N(R(), M(11, 1, 13), W(0.3, 0.4, 0.6, 0.3)),), N(R(5), M(5.4, 5, 5.4), W(0, 0.2, 0.3, 0.5)),), u(-38.9, -11.3, 17),), Ib(u(-38.9, -9.6, 10)), Y(f => {
        f.h = k => k.translateSelf(0, -7.3 * h[7].i);
        X(S(zb(N(R(5), u(0, 2).scale(5, 7, 5).skewY(8), W(0.2, 0.4, 0.5, 0.5),), N(R(5), u(0, 6).scale(1.1, 7, 1.1).skewY(-8), W(0.25, 0.35, 0.5, 0.5),), N(R(5), u(0, 9).scale(0.6, 7, 0.6).skewY(8), W(0.35, 0.3, 0.5, 0.5),),), N(R(5), M(4, 8, 4), W(0.2, 0.4, 0.5, 0.5)), N(R(5), u(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), W(0.2, 0.4, 0.5, 0.5),),), u(-38.9, -11.3, 17),);
        Jb(u(-39.1, -0.6, 17).rotate(11), ...kb(15).map(({x:k, z:x}) => [3 * k, 3 * x, 1.2,]),);
      }), Ja.map(({x:f, z:k}) => {
        X(R(14, 1), u(9 * f - 38.9, -7.3, 11 * k + 17).scale(1, 4), W(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(x => X(R(17, 1), u(9 * f - 38.9, x - 11.3, 11 * k + 17).scale(1.5, 0.5, 1.5), W(0.6, 0.6, 0.6, 0.3),));
      }), X(S(zb(N(R(6), u(0, 0, -36).scale(15, 1.2, 15), W(0.7, 0.7, 0.7, 0.3),), N(R(), u(0, 0, -18).scale(4, 1.2, 6), W(0.45, 0.4, 0.6, 0.3),),), ...hb(6, f => hb(6, k => N(R(6), u(4.6 * k - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * k)).scale(2, 5, 2), W(0.7, 0.7, 0.7, 0.3),))).flat(),), u(-38.9, -11.3, 17),), Jb(u(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), X(R(5), u(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), W(0.8, 0.1, 0.25, 0.4),), Ib(u(-84, -0.5, 85).rotate(0, 
      45)), Y(f => {
        f.h = k => r(k, -123, 1.4, 55 + -65 * Aa);
        X(I);
        Ib(u(0, -3, -4).rotate(0, 180));
      }), S(N(R(), u(0, -0.5, 1).scale(1.15, 1.2, 6.5), W(0.25, 0.25, 0.35, 0.3),), N(R(3), u(0, 0, -5.5).scale(3, 2), W(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => N(R(), u(f, -0.5, 1).scale(0.14, 0.3, 6.5), W(0.7, 0.2, 0, 0.3),)),));
      Y(f => {
        f.h = k => k.translateSelf(0, -2, ab(h[10].g, h[11].g) * n(Math.sin(1.1 * b)) * -8.5 + 10);
        hb(2, k => X(E, u(9 * k - 110 + (1 & k), 1.7, -12)));
      });
      Y(f => {
        f.h = k => k.translateSelf(0, -2, ab(h[10].g, h[11].g) * n(Math.sin(2.1 * b)) * -8.5 + 10);
        hb(2, k => X(E, u(9 * (k + 2) - 110 + (1 & k), 1.7, -12)));
      });
      Y(f => {
        f.h = k => k.translateSelf(0, -2, -8.5 * Wa((1 - h[10].g) * (1 - ab(h[10].g, h[11].g)), ab(h[10].g, h[11].g) * n(Math.sin(1.5 * b)),) + 10,);
        hb(3, k => X(E, u(9 * k - 106, 1.7, -12)));
      });
      X(S(zb(N(R(), u(26.5, -1.6, 10).scale(20, 2.08, 3)), N(R(), u(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...hb(4, f => N(R(), u(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...hb(3, f => N(R(), u(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), u(-123, 0, -12), W(0.5, 0.5, 0.6, 0.2),);
      Ib(u(-116, -1.4, -18).rotate(0, 180));
      X(R(), u(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), W(0.8, 0.8, 0.8, 0.2),);
      X(R(6), u(-116, -2.6, -16.5).scale(3.2, 0.8, 3), W(0.6, 0.5, 0.7, 0.2));
      X(R(), u(-115.5, -17, -12).scale(0.5, 15, 2.2), W(0.6, 0.6, 0.6, 0.3));
      X(R(8), u(-114, -17, -2).scale(2, 15, 2), W(0.6, 0.6, 0.6, 0.3));
      X(R(8), u(-79, -17, -2).scale(2, 15, 2), W(1, 1, 1, 0.3));
      X(R(), u(-77, -17, -50.5).scale(2.2, 15, 0.5), W(0.6, 0.6, 0.6, 0.3));
      hb(3, f => {
        X(w(16), u(12 * f - 109, -9, -12), W(0.6, 0.6, 0.6, 0.3));
        X(w(16), u(-77, -9, -12 * f - 20).rotate(0, 90), W(0.6, 0.6, 0.6, 0.3),);
      });
      X(S(N(R(12), u(-77, -14.5, -12).scale(4, 17.5, 4), W(0.7, 0.7, 0.7, 0.2),), N(R(), u(-79, 0.1, -12).scale(3.5, 2, 1.3), W(0.4, 0.5, 0.6, 0.2),), N(R(), u(-77, 0.1, -14).scale(1.5, 2, 2), W(0.4, 0.5, 0.6, 0.2),), N(R(12), u(-77, 3.1, -12).scale(3, 5, 3), W(0.4, 0.5, 0.6, 0.2),),),);
      X(R(), u(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), W(0.6, 0.6, 0.6, 0.3),);
      X(R(9), u(-98, -18.4, -40).scale(2.5, 13.5, 2.5), W(0.5, 0.5, 0.5, 0.3));
      X(S(N(R(), u(-93, -5.8, -40).scale(9, 1, 5), W(0.8, 0.8, 0.8, 0.1),), N(R(9), u(-98, -5.8, -40).scale(3, 8, 3), W(0.7, 0.7, 0.7, 0.2),),),);
      Ib(u(-98, -4.4, -40).rotate(0, 90));
      Jb(u(-115, 0.2, -12), [0, 0, 3.5,]);
      Jb(u(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      X(S(zb(N(R(6, 0, 0, 0.6), u(-100, 0.7, 105.5).scale(8, 1, 11), W(0.7, 0.7, 0.7, 0.2),), N(R(), u(-101.5, 0.7, 93.5).scale(10.5, 1, 2), W(0.7, 0.7, 0.7, 0.2),),), N(R(5), u(-100, 0.7, 113).scale(4, 3, 4), W(0.7, 0.7, 0.7, 0.2),),),);
      hb(4, f => Y(k => {
        k.h = x => {
          const z = ab(h[8].i, h[12].i);
          x.translateSelf((2 < f ? 2 * (1 - z) + z : 0) - 100, z * Math.sin(1.3 * b + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Wa(z, 0.05) * Math.cos(1.3 * b + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        X(R(6), u(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), W(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Y(f => {
        f.h = k => {
          const x = ab(h[8].i, h[12].i);
          k.translateSelf(2.5 * (1 - x) - 139.7, -3 * (1 - h[8].g) + x * Math.sin(0.8 * b) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * b) * (3 * x + 3), 0);
        };
        X(S(N(R(10), M(6, 2, 6), W(0.1, 0.6, 0.5, 0.3)), N(R(10), M(3.3, 6, 3.3), W(0.1, 0.6, 0.5, 0.5)),),);
        X(R(15, 1), u(-7.5).rotate(0, 90).scale(3, 2.3, 3), W(0.4, 0.4, 0.4, 0.3),);
        X(R(10), u(-7.5).rotate(0, 90).scale(2, 2.5, 2), W(0.3, 0.8, 0.7, 0.3));
        X(R(5), u(-7.5).rotate(0, 90).scale(1, 3), W(0.5, 0.5, 0.5, 0.5));
        Ib(u(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(k => X(q, gb(90 * k, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), W(1, 1, 0.8, 0.2),));
        Jb(u(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      Y(f => {
        f.h = k => k.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - h[12].g);
        X(K);
      });
      [-1, 1,].map(f => {
        [7.2, 1.5,].map(k => X(R(15, 1), u(-7.5 * f - 100, k + 0.7, 96).scale(1.1, 0.5, 1.1), W(0.5, 0.24, 0.2, 0.4),));
        X(q, u(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), W(1, 1, 0.8),);
        X(R(12, 1), u(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), W(0.6, 0.24, 0.2, 0.5),);
        X(S(N(R(), u(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), W(0.5, 0.5, 0.5, 0.4),), N(R(), M(3, 3, 10), W(0.6, 0.24, 0.2, 0.5)), N(R(28, 1), u(0, 3, -5).scale(3, 4, 10).rotate(90, 0), W(0.6, 0.24, 0.2, 0.5),), N(R(5), u(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), W(0.6, 0.24, 0.2, 0.5),), N(R(5), u(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), W(0.6, 0.24, 0.2, 0.5),),), u(f - 100, 0.7, 97),);
      });
      X(S(N(R(), u(-82.07, 0.8, 106).scale(11, 0.9, 2.2), W(0.7, 0.7, 0.7, 0.1),), N(R(45, 1), u(-81, 0.7, 106).scale3d(7.7), W(0.7, 0.7, 0.7, 0.1),),),);
      Y(f => {
        f.h = k => k.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
        X(S(N(R(45, 1), M(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)), N(R(), u(0, 0, -5.5).scale(1.5, 3, 2.7), W(0.45, 0.45, 0.45, 0.2),),),);
        X(R(8), u(0, 2).scale(3, 1.5, 3).rotate(0, 22), W(0.7, 0.7, 0.7, 0.1));
        X(R(5), u(0, 2).scale(1, 2), W(0.3, 0.3, 0.3, 0.2));
        Jb(u(0, 3), ...kb(14).map(({x:k, z:x}) => [5.6 * k, 5.6 * x, 2,]),);
      });
      Y(f => {
        f.h = k => k.translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
        [-1, 1,].map(k => X(q, gb(0, 90).translate(-5 * k, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * k + 90), W(1, 1, 0.8),));
        X(S(N(R(28, 1), u(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), N(R(), M(9, 5, 2), W(0.3, 0, 0, 0.3)),),);
        X(N(R(28, 1), M(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(N(R(5), u(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
        X(S(N(R(28, 1), u(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), N(R(), u(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), N(R(), u(0, 0, 7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(N(R(28, 1), M(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(N(R(5), u(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(f => {
        f.h = k => k.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
        X(S(N(R(28, 1), u(0, 2).scale(7.5, 1, 7.5), W(0.35, 0, 0, 0.3),), N(R(), u(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)), N(R(), u(0, 0, -7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),),);
        X(N(R(28, 1), M(7.5, 1, 7.5), W(0.45, 0.45, 0.45, 0.2)));
        X(N(R(5), u(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),);
      });
      X(R(), u(-58, 1, 106).scale(2, 0.65, 2), W(0.7, 0.7, 0.7, 0.2));
      X(R(), u(-50.7, 1, 99).scale(2, 0.65, 1), W(0.7, 0.7, 0.7, 0.2));
      X(R(), u(-42, 0.4, 91).scale(5, 1, 2.5), W(0.7, 0.7, 0.7, 0.3));
      X(R(), u(-34.2, 0.4, 91).scale(3, 1, 3), W(0.7, 0.7, 0.7, 0.3));
      Ib(u(-34, 2.7, 96).rotate(-12, 0));
      X(R(5), u(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), W(0.2, 0.5, 0.5, 0.6),);
      [W(0.1, 0.55, 0.45, 0.2), W(0.2, 0.5, 0.5, 0.3), W(0.3, 0.45, 0.55, 0.4),].map((f, k) => Y(x => {
        x.h = z => {
          z.translateSelf(0, (1 - h[13].i) * (1 - h[14].i) * (k ? 0 : 3) + ab(h[13].i, h[14].i) * Math.sin(1.5 * b + 1.5 * k) * 4,);
        };
        X(R(), u(-23.5, 0.5, 91 + 6.8 * k).scale(1 === k ? 2 : 3.3, 1, 3.3), f);
        2 === k && X(R(), u(-29.1, 0.4, 91).scale(2.1, 1, 3), W(0.7, 0.7, 0.7, 0.3));
        1 === k && X(R(), u(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), W(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => X(q, u(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), W(1, 1, 0.8),));
      hb(3, f => X(w(24.7 - 0.7 * (1 & f)), u(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? W(0.5, 0.5, 0.5, 0.3) : W(0.35, 0.35, 0.35, 0.5),),);
      X(S(N(R(6, 0, 0, 0.3), u(0, -0.92, 95).scale(14, 2, 14), W(0.8, 0.8, 0.8, 0.2),), N(R(5), u(0, 0, 95).scale3d(6), W(0.3, 0.3, 0.3, 0.5)),),);
      Ib(u(0, 1.7, 82).rotate(0, 180));
      X(R(5), u(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), W(0.5, 0.3, 0.3, 0.4),);
      X(R(6), u(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), W(0.5, 0.6, 0.7, 0.3),);
      X(R(), u(0, 16, 129).scale(1.5, 1, 2), W(0.5, 0.6, 0.7, 0.3));
      X(R(7), u(0, 16.2, 133).scale(5, 1, 5), W(0.4, 0.5, 0.6, 0.4));
      X(S(zb(N(R(), u(0, 16, 110.5).scale(12, 1, 3), W(0.5, 0.3, 0.3, 0.4),), N(R(), u(0, 16, 111).scale(3, 1, 3.8), W(0.5, 0.3, 0.3, 0.4),),), N(R(5), u(0, 16, 103.5).scale(5.5, 5, 5.5), W(0.5, 0.3, 0.3, 0.4),),),);
      Y(f => {
        f.h = k => k.translateSelf(-2 * Math.sin(b)).rotate(25 * Math.sin(b));
        X(R(3), u(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), W(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(k => {
          X(R(6), u(0, 16, k + 95).scale(3, 1, 2.3).rotate(0, 90), W(0.7, 0.7, 0.7, 0.4),);
          X(R(), u(0, 6.2, k + 95).scale(0.5, 11, 0.5), W(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Y(f => {
        f.h = k => {
          const x = ab(ab((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          k.translateSelf(0, 16 * x, 8.5 * p(2 * x - 1) + 95);
        };
        X(R(5), M(5, 1.1, 5), W(0.5, 0.3, 0.3, 0.4));
        X(R(5), M(5.5, 0.9, 5.5), W(0.25, 0.25, 0.25, 0.4));
        Ib(u(0, 1.5, -1).rotate(0, 180));
      });
      Jb(u(0, 3, 95), ...kb(9).map(({x:f, z:k}) => [9 * f, 9 * k, 4,]),);
      Jb(u(0, 19, 134), [0, 0, 3.5,]);
    });
    Y(() => {
      X(mb(20), u(0, 1).scale(0.5, 0.5, 0.5), W(1, 0.3, 0.4));
      X(mb(30), M(0.7, 0.8, 0.55), W(1, 0.3, 0.4));
      X(R(), u(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), W(0.3, 0.3, 0.3));
      [-1, 1,].map(l => {
        X(q, gb(0, 0 < l ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), W(1, 1, 0.8),);
        X(N(S(R(15, 1), N(R(), u(0, 0, 1).scale(2, 2, 0.5)),), gb(-90, 0).scale(0.1, 0.05, 0.1), W(0.3, 0.3, 0.3),), u(0.2 * l, 1.2, 0.4).rotate(0, 20 * l, 20 * l),);
        Y(() => {
          X(R(20, 1), u(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), W(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(R(6, 1), M(0.13, 1.4, 0.13), W(0.3, 0.3, 0.5, 0.1));
      X(R(10), u(0, 1).scale(0.21, 0.3, 0.21), W(1, 0.5, 0.2));
      X(R(3), u(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), W(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Y(() => {
      X(R(6).slice(0, -1), M(0.77, 1, 0.77), W(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(mb(30, 24, (l, r, w) => {
        const A = r / 24, I = l * Math.PI * 2 / 30, K = Math.sin(A ** 0.6 * Math.PI / 2);
        l = A * A * Math.sin(l * Math.PI * 14 / 30) / 4;
        return 23 < r ? {x:w.D = 0, y:-0.5, z:0,} : {x:Math.cos(I) * K, y:Math.cos(A * Math.PI) - A - l, z:Math.sin(I) * K + Math.sin(l * Math.PI * 2) / 4,};
      }), M(0.7, 0.7, 0.7), W(1, 1, 1),);
      [-1, 1,].map(l => X(mb(12), u(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

