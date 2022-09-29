let aa, ba, ea, ha, ja, ka, la, ma, na, c = 0, oa = 0, qa = 0, ra = 0, sa = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 1, d = 0.066;
const e = [], g = [], Ia = [], Ja = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ka = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Oa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Pa = {x:0, y:0, z:0,}, Qa = Math.PI / 180;
var Ra = 0, Sa = 180;
const Ta = {x:0, y:0, z:0,}, Va = NO_INLINE((a, b) => a < b ? a : b), Wa = NO_INLINE((a, b) => b < a ? a : b), n = NO_INLINE(a => 0 > a ? -a : a), Xa = (a, b = 0, h = 1) => a < b ? b : h < a ? h : a, Ya = (a, b) => n(a) > b ? a : 0, p = (a, b, h) => (0 < h ? 1 > h ? a + (b - a) * h : b : a) || 0, Za = (a, b) => (a = Xa(a), p(a, 1 - a, b)), $a = a => Math.atan2(Math.sin(a *= Qa), Math.cos(a)) / Qa, ab = (a, b, h) => a + (2 * (b = (b - a) % 360) % 360 - b) * Xa(h) || 0, cb = (a, b = bb, h = 0,) => 
(h *= 16, b[h++] = a.m11, b[h++] = a.m12, b[h++] = a.m13, b[h++] = a.m14, b[h++] = a.m21, b[h++] = a.m22, b[h++] = a.m23, b[h++] = a.m24, b[h++] = a.m31, b[h++] = a.m32, b[h++] = a.m33, b[h++] = a.m34, b[h++] = a.m41, b[h++] = a.m42, b[h++] = a.m43, b[h] = a.m44, b), fb = (a = db, b = eb,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, 
b.m43 = a.m43, b.m44 = a.m44, b), r = NO_INLINE((a, b, h) => db.translate(a, b, h)), gb = NO_INLINE((a, b, h) => db.rotate(a, b, h)), I = NO_INLINE((a, b, h) => db.scale(a, b, h)), hb = (a, b) => Array.from(Array(a), (h, m) => b(m)), ib = (a, b, h) => (a.D = h, a.A = b, a), jb = (a, b, h = a.A) => ib(a.map(m => {
  let q, k;
  return {x:m, y:q, z:k} = m, {x:m, y:q, z:k} = b.transformPoint({x:m, y:q, z:k,}), {x:m, y:q, z:k,};
}), h, a.D,), L = (a, b, h) => a.map(m => jb(m, b, h)), kb = (a, b = 0) => hb(a, h => {
  const m = Math.cos(2 * Math.PI * h / a);
  return {x:Math.sin(2 * Math.PI * h / a), y:0, z:0.01 > n(m) ? m : 0 > m ? m - b : m + b,};
}), lb = (a, b, h) => a.map((m, q, {length:k}) => ib([m, b[k - q - 1], b[k - (q + 1) % k - 1], a[(q + 1) % k],], a.A, h,)), O = (a, b, h = 0, m,) => (a = a ? kb(a, m) : Ja, m = jb(a, r(0, 1).scale3d(0 < h ? h : 1)), a = jb(a, r(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...lb(a, m, b), m, a,]), mb = (a, b = a, h = (m, q) => (q *= Math.PI / b, {x:Math.cos(m *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(m) * Math.sin(q),})) => {
  const m = [];
  for (let q = 0; a > q; q++) {
    for (let k = 0; b > k; k++) {
      const v = ib([], 0, 1);
      m.push(v);
      v.push(h(q, k, v));
      k && v.push(h((q + 1) % a, k, v));
      b - 1 > k && v.push(h((q + 1) % a, k + 1 % b, v));
      v.push(h(q, k + 1 % b, v));
    }
  }
  return m;
}, nb = ({x:a, y:b, z:h}, m) => a * m.x + b * m.y + h * m.z, ob = a => {
  let b, h = 0, m = 0, q = 0, k = a.at(-1);
  for (b of a) {
    h += (k.y - b.y) * (k.z + b.z), m += (k.z - b.z) * (k.x + b.x), q += (k.x - b.x) * (k.y + b.y), k = b;
  }
  return b = Math.hypot(h, m, q), h /= b, m /= b, q /= b, {x:h, y:m, z:q, w:h * k.x + m * k.y + q * k.z,};
}, pb = (a, b) => {
  var h, m, q, k = b.C;
  for (var v = 0; k.length > v; ++v) {
    if (-0.00008 > (h = nb(a, k[v]) - a.w) ? q = b : 8e-5 < h && (m = b), q && m) {
      m = [];
      q = [];
      k = b.C;
      v = b.B;
      let x = k.at(-1), A = nb(a, x) - a.w;
      for (const H of k) {
        h = nb(a, H) - a.w, 8e-5 > A && q.push(x), -0.00008 < A && m.push(x), (8e-5 < A && -0.00008 > h || -0.00008 > A && 8e-5 < h) && (A /= h - A, x = {x:x.x + (x.x - H.x) * A, y:x.y + (x.y - H.y) * A, z:x.z + (x.z - H.z) * A,}, m.push(x), q.push(x)), x = H, A = h;
      }
      return {o:2 < m.length && {C:ib(m, k.A, k.D), B:v, u:b,}, m:2 < q.length && {C:ib(q, k.A, k.D), B:v, u:b,},};
    }
  }
  return {o:m, m:q,};
}, qb = (a, b, h = ob(b.C)) => {
  let m, q, k;
  return a ? ({o:m, m:q} = pb(a, b), m || q || a.s.push(b), m && (a.o = qb(a.o, m, h)), q && (a.m = qb(a.m, q, h))) : ({x:m, y:q, z:h, w:k} = h, a = {x:m, y:q, z:h, w:k, s:[b,], o:0, m:0,}), a;
}, tb = (a, b, h) => {
  const m = [], q = (k, v) => {
    let {o:x, m:A} = pb(k, v);
    x || A || (0 < h * nb(k, b) ? x = v : A = v);
    x && (k.o ? q(k.o, x) : m.push(x));
    A && k.m && q(k.m, A);
  };
  for (const k of b.s) {
    q(a, k);
  }
  return m;
}, ub = (a, b) => a && (b(a), ub(a.o, b), ub(a.m, b)), vb = a => (ub(a, b => {
  const h = b.m;
  b.m = b.o;
  b.o = h;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const m of b.s) {
    m.B = !m.B;
  }
}), a), yb = a => a.length ? a.reduce((b, h) => qb(b, {C:h, B:0, u:0,}), 0) : a, zb = (...a) => a.reduce((b, h) => {
  const m = [];
  if (b = yb(b), h) {
    h = yb(h);
    ub(b, q => q.s = tb(h, q, 1));
    ub(h, q => m.push([q, tb(b, q, -1),]));
    for (let [q, k] of m) {
      for (const v of k) {
        qb(b, v, q);
      }
    }
  }
  return b;
}), R = (a, ...b) => {
  const h = k => {
    let v;
    return k.u && ((v = m.get(k.u)) ? (q.delete(v), k = h(k.u)) : m.set(k.u, k)), k;
  }, m = new Map(), q = new Map();
  return a = vb(zb(vb(yb(a)), ...b)), ub(a, k => {
    for (const v of k.s) {
      q.set(h(v), v.B);
    }
  }), Array.from(q, ([{C:k}, v]) => {
    const x = k.map(({x:A, y:H, z:J}) => ({x:A, y:H, z:J,}));
    return ib(v ? x.reverse() : x, k.A, k.D);
  });
}, Ab = () => {
  Ba = Za(g[12].g, g[13].g);
  xa = p(p(xa, 0, 1 - Math.exp(-1 * d)), $a(xa + 60 * d), g[5].g - g[6].i,);
  sa = p(p(sa, 0, 1 - Math.exp(-5 * d)), $a(sa + 56 * d), Ba,);
  wa = p(p(wa, 0, 1 - Math.exp(-4 * d)), $a(wa + 48 * d), Ba,);
  var a = 0.2 + 0.3 * n(2 * g[9].i - 1);
  Aa = p(Aa, g[9].i, 1 - Math.exp(-a * d));
  za = p(za, ya ? p(za, -9, 1 - Math.exp(-1.5 * d)) : Xa(c / 3), 1 - Math.exp(-1 * d));
  Ha && c > Ha && (Ha = 0, h4.innerHTML = "");
  g[0].j && 0.8 < g[0].g && (13 > qa ? (1 / 0 > Ha && (Ha = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), g[0].j = 0) : ya || (1 / 0 > Ha && (Ha = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ya = 1));
  for (const b of e) {
    b.h(fb(db, b.l));
  }
  for (const b of g) {
    b.h();
  }
  for (const b of Ia) {
    b.h();
  }
}, Bb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][qa = Ia.reduce((a, {j:b}) => a + b, 0)] + " / XIII";
}, Cb = () => {
  localStorage.DanteSP22 = JSON.stringify([g.map(({j:a}) => a), Ia.map(({j:a}) => a), ra, c, Aa,]);
}, Db = (a, b, h, m) => new DOMMatrix([h, 0, 0, 0, 0, m, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Gb = () => {
  let a, b, h, m, q, k, v, x, A, H, J, S, C, f, l = !0;
  const w = [], z = () => {
    b4.innerHTML = "Music: " + l;
    ba || !l ? Eb.disconnect() : Eb.connect(Fb.destination);
  }, F = () => {
    const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ka = Db(0.3, 181, u, 1.732051);
    la = [Db(0.3, 55, u, 1.732051), Db(55, 181, u, 1.732051),];
    m = x = void 0;
    w.length = ea = f = S = C = Ca = Da = 0;
  }, y = (u, t = 0) => {
    if (ba !== u) {
      ba = u;
      ha = t;
      F();
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
  b1.onclick = () => y(!1);
  b2.onclick = () => y(!1, 1);
  b5.onclick = () => y(!0);
  b4.onclick = () => {
    l = !l;
    z();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = u => {
    if (!ba && (u.target === hC && (ea = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = u => {
    let t;
    u.repeat || (t = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[u.code], (w[t] = !!u.type[5] && !0) && (0 === t && (ea = 1), 1 === t && y(!0)));
  };
  onmousemove = ({movementX:u, movementY:t}) => {
    ha && (u || t) && (Sa += 0.1 * u, Ra += 0.1 * t);
  };
  hC.ontouchstart = u => {
    if (!ba) {
      for (let {pageX:t, pageY:N, identifier:Q} of u.changedTouches) {
        ha && t > hC.clientWidth / 2 ? void 0 === x && (A = 0, k = t, v = N, x = Q, H = Sa, J = Ra) : void 0 === m && (q = 0, b = t, h = N, m = Q);
      }
      a = oa;
    }
  };
  hC.ontouchmove = u => {
    if (!ba) {
      for (let {pageX:ca, pageY:Y, identifier:B} of u.changedTouches) {
        var t, N, Q, W;
        x === B && (Sa = H + (ca - k) / 2.3, Ra = J + (Y - v) / 2.3, A = 1);
        m === B && (B = (b - ca) / 20, t = n(B), N = (h - Y) / 20, Q = n(N), (W = 0.5 < Wa(t, Q)) && (q = 1), S = (W && 0.2 < t) * Xa(B, -1), C = (W && 0.2 < Q) * Xa(N, -1), 2 < t && (b = ca + 20 * (0 > B ? -1 : 1)), 2 < Q && (h = Y + 20 * (0 > N ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = u => {
    let t;
    document.activeElement === document.body && u.preventDefault();
    for (const N of u.changedTouches) {
      N.identifier === x ? (x = void 0, A || (t = 1), A = 0) : N.identifier === m ? (m = void 0, C = S = 0, q || (t = 1), q = 0) : t = 1;
    }
    u.target === hC && t && a && 0.02 < (u = oa - a) && 0.7 > u && (ea = 1);
  };
  ja = () => {
    Ca = C + (w[4] ? 1 : 0) - (w[5] ? 1 : 0);
    Da = S + (w[2] ? 1 : 0) - (w[3] ? 1 : 0);
    var u = navigator.getGamepads()[0];
    if (u) {
      const t = Q => N[Q]?.pressed || 0 < N[Q]?.value ? 1 : 0, N = u.buttons;
      u = u.axes;
      ha && (Ra += d * Ya(u[3], 0.3) * 80, Sa += d * Ya(u[2], 0.3) * 80);
      Ca += t(12) - t(13) - Ya(u[1], 0.2);
      Da += t(14) - t(15) - Ya(u[0], 0.2);
      t(9) && y(!0);
      (u = t(3) || t(2) || t(1) || t(0)) && !f && (ea = 1);
      f = u;
    }
  };
  document.onvisibilitychange = onblur = onresize = F;
  y(!0);
}, T = NO_INLINE((a, b, h, m = 0) => 255 * m << 24 | 255 * h << 16 | 255 * b << 8 | 255 * a), U = (a, b = new DOMMatrix(), h) => ma.s.push(...L(a, b, h)), V = (a, b = 1) => {
  const h = ma;
  b = {l:new DOMMatrix(), H:e.length, G:b, s:[], h() {
  },};
  return e.push(b), a(ma = b), ma = h, b;
}, Hb = a => (a = a.transformPoint(), Math.hypot(Pa.x - a.x, Pa.y - a.y, Pa.z - a.z,)), Ib = a => {
  const b = new DOMMatrix(), h = new DOMMatrix(), m = ma, q = g.length, k = {j:0, g:0, i:0, u:m, I:b, l:h, h() {
    fb(fb(m.l, b).multiplySelf(a), h).rotateSelf(60 * k.g - 30, 0,).translateSelf(0, 1);
    k.g = p(k.g, k.j, 1 - Math.exp(-4 * d));
    k.i = p(k.i, k.j, 1 - Math.exp(-1 * d));
    ea && 3 > Hb(b) && (0.3 > k.g || 0.7 < k.g) && (k.j = k.j ? 0 : 1, q && 1 / 0 > Ha && (Ha = c + 1, h4.innerHTML = "* click *"), ra = q, Cb());
  },};
  g.push(k);
  U(O(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
  U(O(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
  U(O(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), T(0.5, 0.5, 0.4));
}, Jb = (a, ...b) => {
  let h = -1, m = 0, q = 0, k = 0, v = 0, x = 0, A = 1, H = 3;
  const J = new DOMMatrix(), S = ma, C = Ia.length, f = b.map(([t, N, Q]) => ({x:t, z:N, w:Q,}));
  let l = f[0], {x:w, z} = l, F = w, y = z;
  const u = {j:0, l:J, h() {
    if (!u.j) {
      let ca, Y, B, M, K, G, E, D = 1, P = 1 / 0;
      for (const ta of f) {
        var {x:t, z:N, w:Q} = ta;
        N = (t = Math.hypot(w - t, z - N)) - Q;
        E ||= t < Q;
        0 < N && P > N && (P = N, l = ta);
        D = Va(D, t / Q);
      }
      E || ({x:W, z:ca, w:Y} = l, B = w - W, M = z - ca, K = Math.hypot(B, M), G = Math.atan2(-M, B), A && (q = (Math.random() - 0.5) * Math.PI / 2, H = Xa(H / (1 + Math.random()))), G += q, h = -Math.cos(G), m = Math.sin(G), 0.1 < K && (K = Va(K, Y) / (K || 1), w = B * K + W, z = M * K + ca));
      A = E;
      H = p(H, 6 * (1 - D) + 3, 1 - Math.exp(-(D + 3) * d));
      var W = w = p(w, w + h, 1 - Math.exp(-H * d));
      F = p(F, W, 1 - Math.exp(-H * d));
      W = z = p(z, z + m, 1 - Math.exp(-H * d));
      y = p(y, W, 1 - Math.exp(-H * d));
      k = ab(k, Math.atan2(F - v, y - x) / Qa - 180, 1 - Math.exp(-3 * d),);
      1.6 > Hb(fb(S.l, J).multiplySelf(a).translateSelf(v = F, 0, x = y,).rotateSelf(0, k, 7 * Math.sin(1.7 * c)),) && (u.j = 1, W = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
      ][qa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > Ha && (Ha = c + (qa && 12 > qa ? 5 : 7), h4.innerHTML = W), Bb(), Cb());
    }
    u.j && fb(e[2].l, J).translateSelf(C % 4 * 1.2 - 1.7 + Math.sin(c + C) / 7, -2, 1.7 * (C / 4 | 0) - 5.5 + n(C % 4 - 2) + Math.cos(c / 1.5 + C) / 6,);
  },};
  Ia.push(u);
}, Kb = () => {
  let a, b, h, m, q, k, v, x, A, H, J, S, C, f, l, w, z, F = 1, y = 2, u = 2;
  const t = () => {
    H = A = 0;
    for (let B = 32; 128 > B; B += 2) {
      let M = 0, K = 0, G = 0, E = 0;
      const D = 512 * B;
      for (let P = 1 & B; 128 > P; P += 2) {
        const ta = D + 4 * P;
        let da = D + 4 * (127 - P);
        const ia = Y[ta] / 255, Ua = Y[1 + da] / 255, pa = 1 - n(P / 63.5 - 1);
        10 < P && 118 > P && (M = Wa(M, Wa(ia * pa, ia * Y[da] / 255)), K = Wa(K, Wa(Ua * pa, Ua * Y[1 + ta] / 255)));
        (54 > P || 74 < P) && 1e-3 < (da = (1 - pa) * Wa(ia, Ua) / 3) && (64 > P && da > G ? G = da : 64 < P && da > E && (E = da));
      }
      n(E - G) > n(A) && (A = E - G);
      n(K - M) > n(H) && (H = K - M);
    }
  }, N = () => {
    let B = 0, M = 0, K = 0, G = 0;
    m = 0;
    ca.fill(0);
    for (let D = 0; 31 > D; ++D) {
      let P = 0;
      const ta = 512 * D;
      for (let da = 0; 128 > da; da++) {
        var E = ta + 4 * da;
        let ia = (Y[E] + Y[1 + E]) / 255;
        E = Y[2 + E];
        14 < da && 114 > da && (P += ia);
        E && ia && (ia = ca[E] + 1, ca[E] = ia, B > ia || (B = ia, M = E, m = 1));
      }
      3 > P && 5 < D && (K += D / 32);
      3 < P && (7 < D && (G += D / 15), m = 1);
    }
    a = M || b;
    b = M;
    u = p(u, m ? 6.5 : -20 > Ta.y ? 11 : 8, 1 - Math.exp(-4 * d));
    Ta.y += G / 41 - (m || u) * K / 41 * u * d;
  }, Q = () => (y ? g[ra].u : e[h && 1 === e[h].G && h || 0]).l, W = (B, M, K, G) => p(B, M, F || (Xa(Math.sqrt(n(M - B)) - K) + 1 / 7) * (1 - Math.exp(-(1.5 * G) * d)),), ca = new Uint8Array(256), Y = new Uint8Array(65536);
  na = () => {
    var B = Xa(Ca, -1);
    let M = Xa(Da, -1);
    var K = Ya(Math.sqrt(Math.hypot(B, M)), 0.1), G = Math.atan2(B, M);
    K && (q = 90 - G / Qa);
    k = ab(k, q, 1 - Math.exp(-8 * d));
    v = p(v, K, 1 - Math.exp(-10 * d));
    B = K * n(B) * Math.sin(G);
    M = K * n(M) * Math.cos(G);
    X.r9r(0, 0, 128, 128, 6408, 5121, Y);
    NO_INLINE(N)();
    NO_INLINE(t)();
    var E = Xa(1 - 5 * Wa(n(A), n(H)));
    C = p(C, m * E * Xa(2 * K) * 7, 1 - Math.exp(-(m ? 0.1 < E ? 10 : 5 + 2 * K : 1) * d));
    J = p(J, 0, 1 - Math.exp(-(m ? 8 : 4) * d));
    S = p(S, 0, 1 - Math.exp(-(m ? 8 : 4) * d));
    a && (E = 0);
    G = ha ? (180 - Sa) * Qa : 0;
    K = (A += d * (E * J + C * (M * Math.cos(G) - B * Math.sin(G))), H += d * (E * S + C * (M * Math.sin(G) + B * Math.cos(G))), Q());
    var {x:B, y:G, z:D} = 1 < y ? g[ra].I.transformPoint({x:0, y:ra || 0.9 < za ? 15 : 1, z:-2.4,}) : (M = K, fb(M).invertSelf(), eb.m41 = eb.m42 = eb.m43 = 0, D = eb.transformPoint({x:A, z:H, w:0,}), Ta.x += D.x, Ta.z += D.z, M.transformPoint(Ta));
    if (a && (J = (B - Pa.x) / d, S = (D - Pa.z) / d), Pa.x = B, Pa.y = G, Pa.z = D, (y = y && (m && a ? 0 : 1)) || a !== h) {
      h = a, E = (K = Q()).inverse().transformPoint(Pa), Ta.x = E.x, Ta.y = E.y, Ta.z = E.z;
    }
    x = p(x, Ba * (27 < a && 32 > a), 1 - Math.exp(-2 * d));
    G < (-20 > B || 109 > D ? -25 : -9) && (J = S = C = 0, y = 2);
    1 === a && (g[9].j = -15 > B && 0 > D ? 1 : 0);
    f = p(p(f, G, 1 - Math.exp(-2 * d)), G, y || 8 * n(f - G),);
    w = W(w, f, 2, 1);
    l = W(l, B, 0.5, 1);
    z = W(z, D, 0.5, 1);
    ha ? (M = y + (1 - Math.exp(-18 * d)), Ea = p(Ea, B, M), Fa = p(Fa, f + 1.5, M), Ga = p(Ga, D, M), Sa = $a(Sa)) : (Fa = W(Fa, Wa(w + Xa((-60 - D) / 8, 0, 20) + 13 + 9 * x, 6), 4, 2,), Ga = W(Ga, z + -18 + 5 * x, 1, 2 + x,), Ea = W(Ea, l, 1, 2 + x,), K = Va(-6, -n(z - Ga)), G = l - Ea, Sa = ab(Sa, 90 - $a(Math.atan2(K, G) / Qa), F + (1 - Math.exp(-10 * d)),), Ra = ab(Ra, 90 - Math.atan2(Math.hypot(K, G), Fa - w) / Qa, F + (1 - Math.exp(-10 * d)),));
    Ra = Xa(Ra, -87, 87);
    F = 0;
    e[37].l.translateSelf(B, f + 0.124, D).rotateSelf(0, k);
    for (B = 0; 2 > B; ++B) {
      e[38 + B].l.multiplySelf(e[37].l).translateSelf(0, v * Xa(0.45 * Math.sin(9.1 * c + Math.PI * (B - 1) - Math.PI / 2)),).rotateSelf(v * Math.sin(9.1 * c + Math.PI * (B - 1)) * 0.25 / Qa, 0);
    }
  };
}, Lb = (a, b = 35633) => (b = X.c6x(b), X.s3c(b, a), X.c6a(b), b), Mb = (a, b) => {
  const h = {}, m = X.c1h();
  return X.abz(m, a), X.abz(m, Lb(b, 35632)), X.l8l(m), q => q ? h[q] || (h[q] = X.gan(m, q)) : X.u7y(m);
}, Tb = (a, b, h) => {
  if (ba) {
    b = gb(0, 40 * Math.sin(oa) - 70);
    for (const m of [37, 38, 39,]) {
      cb(b, Rb, m - 1);
    }
    X.uae(a, !1, Rb);
    X.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
  } else {
    X.uae(a, !1, Rb), X.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6), X.uae(a, !1, Sb), X.das(4, e[h].F - e[h].v, 5123, 2 * e[h].v, Ia.length,), X.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, g.length,);
  }
}, Ub = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Vb = a => Math.sin(a * Math.PI * 2), Wb = a => 0.5 > a % 1 ? 1 : -1, Xb = a => a % 1 * 2 - 1, Yb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, ec = a => {
  let b = 0;
  const h = () => {
    let v = 0;
    const x = E => {
      let D, P, ta, da = 0, ia = 0;
      const Ua = [], pa = new Int32Array(768 * E), Zb = 2 ** (t - 9) / E, $b = Math.PI * 2 ** (Y - 8) / E, wb = M * E & -2;
      for (let rb = 0; 11 >= rb; ++rb) {
        for (let sb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + rb]; 32 > sb; ++sb) {
          const Ob = (32 * rb + sb) * E;
          for (var La = 0; 4 > La; ++La) {
            if (D = 0, Nb && (D = A[Nb - 1].charCodeAt(sb + 32 * La) - 40, D += 0 < D ? 106 : 0), D) {
              var fa;
              if (!(fa = Ua[D])) {
                fa = D;
                let Z = void 0, ua = void 0;
                var Pb = D;
                let ac = 0, bc = 0;
                const cc = 2 > b ? Xb : Vb, dc = 2 > b ? 1 > b ? Wb : Yb : Vb, Qb = new Int32Array(z + F + G);
                for (let Ma = 0, xb = 0; z + F + G > Ma; ++Ma, ++xb) {
                  let Na = 1;
                  z > Ma ? Na = Ma / z : z + F > Ma || (Na = (1 - (Na = (Ma - z - F) / G)) * 3 ** (-u / 16 * Na));
                  0 > xb || (xb -= 4 * E, ua = 0.00396 * 2 ** ((Pb + J - 256) / 12), Z = 0.00396 * 2 ** ((Pb + f - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Qb[Ma] = 80 * (cc(ac += ua * Na ** (S / 32)) * H + dc(bc += Z * Na ** (l / 32)) * C + (w ? (2 * Math.random() - 1) * w : 0)) * Na | 0;
                }
                fa = Ua[fa] = Qb;
              }
              for (let Z = 0, ua = 2 * Ob; fa.length > Z; ++Z, ua += 2) {
                pa[ua] += fa[Z];
              }
            }
          }
          for (let Z, ua = 0; E > ua; ++ua) {
            La = 0;
            fa = 2 * (Ob + ua);
            var va = (((Z = pa[fa]) || ta) && (P = 0.00308 * N, 1 !== b && 4 !== b || (P *= Math.sin(Zb * fa * Math.PI * 2) * K / 512 + 0.5), P = 1.5 * Math.sin(P), da += P * ia, va = (1 - Q / 255) * (Z - ia) - da, ia += P * va, Z = 4 === b ? ia : 3 === b ? va : da, b || (Z = 1 > (Z *= 22e-5) ? -1 < Z ? Math.sin(Z / 4 * Math.PI * 2) : -1 : 1, Z /= 22e-5), Z *= W / 32, ta = 1e-5 < Z * Z, va = Math.sin($b * fa) * ca / 512 + 0.5, La = Z * (1 - va), Z *= va), fa < wb || (La += pa[1 + fa - wb] * B / 255, 
            Z += pa[fa - wb] * B / 255), v + fa >> 1);
            q[va] += (pa[fa] = La) / 65536;
            k[va] += (pa[++fa] = Z) / 65536;
          }
        }
      }
      v += 768 * E;
    }, A = Ka[b], [H, J, S, C, f, l, w, z, F, y, u, t, N, Q, W, ca, Y, B, M, K] = Oa[b], G = 4 * y ** 2;
    x(5513);
    x(4562);
    x(3891);
    Ub(5 > ++b ? h : a);
  }, m = Fb.createBuffer(2, 5362944, 44100), q = m.getChannelData(0), k = m.getChannelData(1);
  Eb.buffer = m;
  Eb.loop = !0;
  Ub(h);
}, Fb = new AudioContext(), db = new DOMMatrix(), eb = new DOMMatrix(), bb = new Float32Array(16), Rb = new Float32Array(624), Sb = new Float32Array(624), fc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Eb = Fb.createBufferSource(), X = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in X) {
  X[a[0] + [...a,].reduce((b, h, m) => (b * m + h.charCodeAt(0)) % 434, 0).toString(36)] = X[a];
}
Ub(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], k = y => {
        X.f1s();
        requestAnimationFrame(k);
        var u = (y - (aa || y)) / 1e3;
        if (oa += u, c += d = ba ? 0 : Va(0.066, u), aa = y, 0 < d) {
          ja();
          Ab();
          na();
          for (y = 0; e.length > y; ++y) {
            e[y].G && cb(e[y].l, Rb, y - 1);
          }
          for (y = 0; Ia.length > y; ++y) {
            cb(Ia[y].l, Sb, y);
          }
          for (u = 0; g.length > u; ++u) {
            cb(g[u].l, Sb, y), Sb[16 * y++ + 15] = 1 - g[u].g;
          }
          S();
          X.b6o(36160, F);
          X.v5y(0, 0, 128, 128);
          X.c4s(16640);
          X.cbf(!0, !1, !0, !1);
          var {x:u, y, z:t} = Pa;
          X.uae(S("b"), !1, cb(fb().rotateSelf(0, 180).invertSelf().translateSelf(-u, -y, 0.3 - t)),);
          Tb(S("c"), 0, 41);
          X.c4s(256);
          X.cbf(!1, !0, !0, !1);
          X.uae(S("b"), !1, cb(fb().translateSelf(-u, -y, -t - 0.3)));
          Tb(S("c"), 0, 41);
          X.f1s();
        }
        ea = 0;
        fb(db, v);
        ba ? v.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : v.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ea, -Fa, -Ga,);
        H();
        X.b6o(36160, w);
        X.v5y(0, 0, 2048, 2048);
        l[0](54.7 * 1.1);
        l[1](126 * 1.1);
        C();
        X.b6o(36160, null);
        X.v5y(0, 0, X.drawingBufferWidth, X.drawingBufferHeight);
        X.cbf(!0, !0, !0, !0);
        X.c4s(16640);
        X.uae(C("a"), !1, cb(ka));
        X.uae(C("b"), !1, cb(v));
        X.uae(C("i"), !1, q[0]);
        X.uae(C("j"), !1, q[1]);
        X.ubu(C("k"), Ea, Fa, Ga);
        Tb(C("c"), !ha, 42);
        J();
        X.ubu(J("j"), X.drawingBufferWidth, X.drawingBufferHeight, oa);
        X.ubu(J("k"), Ea, Fa, Ga);
        X.uae(J("b"), !1, cb(fb(v).invertSelf()));
        X.d97(4, 3, 5123, 0);
        X.b6o(36160, F);
        X.f1s();
      }, v = new DOMMatrix(), x = new DOMMatrix(), A = h;
      var m = Lb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const H = Mb(Lb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), J = Mb(Lb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), S = Mb(m, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), C = Mb(m, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), f = hb(8, () => ({})), l = hb(2, y => {
        const u = X.c25();
        return X.a4v(33984 + y), X.b9j(3553, u), X.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), X.t2z(3553, 10241, 9729), X.t2z(3553, 10240, 9729), X.t2z(3553, 34893, 515), X.t2z(3553, 34892, 34894), X.t2z(3553, 10243, 33071), X.t2z(3553, 10242, 33071), t => {
          let N = 0, Q = 0, W = 0, ca = 1 / 0, Y = -1 / 0, B = 1 / 0, M = -1 / 0, K = 1 / 0, G = -1 / 0;
          X.fas(36160, 36096, 3553, u, 0);
          X.c4s(256);
          fb().scale3dSelf(t).multiplySelf(fb(la[y], x).multiplySelf(v).invertSelf(),);
          for (let E = 0; 8 > E; ++E) {
            const D = f[E], P = (D.x = 4 & E ? 1 : -1, D.y = 2 & E ? 1 : -1, D.z = 1 & E ? 1 : -1, eb.transformPoint(D));
            N -= D.x = (0 | P.x) / t / P.w;
            Q -= D.y = (0 | P.y) / t / P.w;
            W -= D.z = (0 | P.z) / t / P.w;
          }
          fb().rotateSelf(298, 139).translateSelf(N / 8, Q / 8, W / 8);
          for (t = 0; 8 > t; ++t) {
            const {x:E, y:D, z:P} = eb.transformPoint(f[t]);
            ca = Va(ca, E);
            Y = Wa(Y, E);
            B = Va(B, D);
            M = Wa(M, D);
            K = Va(K, P);
            G = Wa(G, P);
          }
          t = 10 + y;
          K *= 0 > K ? t : 1 / t;
          G *= 0 < G ? t : 1 / t;
          X.uae(H("b"), !1, cb(fb(db, x).scaleSelf(2 / (Y - ca), 2 / (M - B), 2 / (K - G),).translateSelf((Y + ca) / -2, (M + B) / -2, (K + G) / 2).multiplySelf(eb), q[y],),);
          Tb(H("c"), !ha, 42);
        };
      }), w = X.c5w();
      m = X.c25();
      const z = X.c3z(), F = X.c5w();
      S();
      X.uae(S("a"), !1, cb(Db(1e-4, 1, 1.4, 0.59)));
      C();
      X.ubh(C("q"), 2);
      X.ubh(C("h"), 1);
      X.ubh(C("g"), 0);
      J();
      X.ubh(J("q"), 2);
      X.b6o(36160, w);
      X.d45([0,]);
      X.r9l(0);
      X.b6o(36160, F);
      X.bb1(36161, z);
      X.r4v(36161, 33189, 128, 128);
      X.f8w(36160, 36096, 36161, z);
      X.a4v(33986);
      X.b9j(3553, m);
      X.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      X.fas(36160, 36064, 3553, m, 0);
      X.b9j(3553, X.c25());
      X.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, A);
      X.t2z(3553, 10241, 9987);
      X.t2z(3553, 10240, 9729);
      X.gbn(3553);
      X.e8z(2929);
      X.e8z(2884);
      X.c70(1);
      X.c7a(1029);
      X.d4n(515);
      X.c5t(0, 0, 0, 1);
      Ab();
      NO_INLINE(Gb)();
      NO_INLINE(Kb)();
      requestAnimationFrame(k);
    }
  }, h = new Image();
  h.onload = h.onerror = b;
  h.src = fc;
  NO_INLINE(ec)(() => {
    Ub(() => {
      let k, v = 0;
      const x = [], A = [], H = [], J = [], S = z => {
        let {x:F, y, z:u} = k[z], t = (w[0] = F, w[1] = y, w[2] = u, z = "" + (k.D ? l : C), f.get(z));
        return void 0 !== t ? (F = 3 * t, J[F] = (J[F++] + C[5]) / 2, J[F] = (J[F++] + C[6]) / 2, J[F] = (J[F] + C[7]) / 2) : (f.set(z, t = f.size), A.push(F, y, u, w[3]), H.push(C[4]), J.push(C[5], C[6], C[7])), t;
      }, C = new Int32Array(8), f = new Map(), l = new Int32Array(C.buffer, 0, 5), w = new Float32Array(C.buffer);
      for (const z of e) {
        for (k of (w[3] = 40 === z.H ? -14 : z.G && z.H, z.s)) {
          const {x:F, y, z:u} = ob(k);
          C[4] = 0 | k.A;
          C[5] = 32767 * F;
          C[6] = 32767 * y;
          C[7] = 32767 * u;
          for (let t = 2, N = S(0), Q = S(1); k.length > t; ++t) {
            x.push(N, Q, Q = S(t));
          }
        }
        z.s = null;
        z.v = v;
        z.F = v = x.length;
      }
      X.b11(34962, X.c1b());
      X.b2v(34962, new Float32Array(A), 35044);
      X.v7s(0, 4, 5126, !1, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Int16Array(J), 35044);
      X.v7s(1, 3, 5122, !0, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Uint32Array(H), 35044);
      X.v7s(2, 4, 5121, !0, 0, 0);
      X.b11(34963, X.c1b());
      X.b2v(34963, new Uint16Array(x), 35044);
      X.e3x(0);
      X.e3x(1);
      X.e3x(2);
      Ub(b);
      try {
        const [z, F, y, u, t] = JSON.parse(localStorage.DanteSP22,);
        g.map((N, Q) => N.g = N.i = N.j = Q ? 0 | z[Q] : 0);
        Ia.map((N, Q) => N.j = 0 | F[Q]);
        ra = y;
        Aa = t;
        c = u;
        d = 0;
      } catch {
      }
      za = Xa(ra);
    });
    const m = hb(11, k => r(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), q = hb(10, k => lb(jb(kb(18), m[k]).reverse(), jb(kb(18), m[k + 1]), 1,)).flat();
    V(() => U([Ja.slice(1),], r(-2).scale3d(3).rotate(90, 0)), 0);
    V(() => {
      const k = (f, l, w) => V(z => {
        z.h = F => F.translateSelf(A() * Math.sin(3 * f + c * f) * l);
        Ja.map(({x:F, z:y}) => {
          U(O(11, 1), r(4 * F, 4, w + 4 * y).scale(0.8, 3, 0.8), T(0.5, 0.3, 0.7, 0.6),);
          U(O(), r(4 * F, 7, w + 4 * y).scale(1, 0.3), T(0.5, 0.5, 0.5, 0.3),);
        });
        U(R(L(O(), r(0, 0, w).scale(5, 1, 5), T(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(F => L(O(), r(5 * F, 0.2, w).rotate(-30 * F).scale(4, 1, 2), T(0.8, 0.8, 0.8, 0.3),)),),);
        U(O(), r(0, -3, w).scale(8, 2, 8), T(0.4, 0.4, 0.4, 0.3));
      }), v = (f, l, w, z) => f.translateSelf(l + Math.sin(c + 2) / 5, w + Math.sin(0.8 * c) / 3, z).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),), x = f => R(L(O(), r(0, -f / 2).scale(6, f - 1, 2.2)), L(O(), r(0, -f / 2 - 6).scale(4, f - 3, 4)), L(O(32, 1), r(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), A = () => Va(g[2].i, 1 - g[4].i), H = R(L(O(30, 1, 1.15, 1), r(0, -3).scale(3.5, 1, 3.5), T(0.7, 0.4, 0.25, 0.7),), L(O(30, 1, 1.3, 1), r(0, -2.5).scale(2.6, 1, 3), T(0.7, 
      0.4, 0.25, 0.2),), L(O(), r(4, -1.2).scale3d(2), T(0.7, 0.4, 0.25, 0.3)),), J = hb(7, f => L(O(6, 1), r(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), T(0.3, 0.3, 0.38),)).flat(), S = (V(f => {
        f.h = l => v(l, -12, 4.2, 40 * za - 66);
        U(H);
        Ib(r(0, -3, 4));
      }), Ib(r(-5.4, 1.5, -19).rotate(0, -90)), Jb(r(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Jb(r(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...kb(18).map(({x:f, z:l}) => [7 * f, 10 * l, 4.5 - 2 * n(f),]),), U(O(), r(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), T(0.8, 0.8, 0.8, 0.2)), Ja.map(({x:f, z:l}) => U(O(6), r(3 * f, 3, 15 * l).scale(0.7, 4, 0.7), T(0.6, 0.3, 0.3, 0.4))), U(O(), r(0, 0, -23).scale(3, 1, 8), T(0.9, 0.9, 0.9, 0.2)), U(O(), r(0, 0, 22).scale(3, 1, 8), T(0.9, 0.9, 0.9, 0.2)), [-15, 
      15,].map((f, l) => {
        U(O(), r(0, 6.3, f).scale(4, 0.3, 1), T(0.3, 0.3, 0.3, 0.4));
        U(O(), r(0, 1, f).scale(3, 0.2, 0.35), T(0.5, 0.5, 0.5, 0.3));
        V(w => {
          w.h = z => z.translateSelf(0, 0, f).scaleSelf(1, Xa(1.22 - g[l + 1].g), 1);
          U(J);
        });
      }), hb(5, f => hb(2, l => U(q, r(18.5 * (l - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * l).scale(1.2, 10, 1.2), T(1, 1, 0.8, 0.2),)),), U(O(), r(3, 1.5, -20).scale(0.5, 2, 5), T(0.7, 0.7, 0.7, 0.2)), U(O(), r(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), T(0.75, 0.75, 0.75, 0.2),), U(O(5), r(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), T(0.6, 0.3, 0.3, 0.4),), U(O(), gb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), T(0.8, 0.2, 0.2, 0.5),), U(R(zb(L(O(6, 0, 0, 0.3), 
      r(8, -3, -4).scale(13, 1, 13), T(0.7, 0.7, 0.7, 0.2),), L(O(6), r(0, -8).scale(9, 8, 8), T(0.4, 0.2, 0.5, 0.5)), L(O(6, 0, 0, 0.3), r(0, -0.92).scale(13, 2, 13), T(0.8, 0.8, 0.8, 0.2),),), L(O(5), I(5, 30, 5), T(0.4, 0.2, 0.6, 0.5)), L(O(5, 0, 1.5), r(0, 1).scale(4.5, 0.3, 4.5), T(0.7, 0.5, 0.9, 0.2),), L(O(), gb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), T(0.5, 0.5, 0.5, 0.5),), L(O(6), r(15, -1.5, 4).scale(3.5, 1, 3.5), T(0.5, 0.5, 0.5, 0.5),),),), V(f => {
        f.h = l => l.translateSelf(0, 0.01 < g[3].g ? (5 * Math.cos(1.5 * c) + 2) * g[3].i * (1 - g[2].g) + -15 * (1 - g[3].g) : -500, 0,);
        U(O(5), r(0, -0.2).scale(5, 1, 5), T(0.6, 0.65, 0.7, 0.3));
        Ib(r(0, 1.2));
      }), Ib(r(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), V(f => {
        f.h = l => l.translateSelf(A() * Math.sin(c / 1.5 + 2) * 12);
        U(R(zb(L(O(), I(1.5, 1, 5), T(0.9, 0.9, 0.9, 0.2)), L(O(6), I(4, 1, 5), T(0.9, 0.9, 0.9, 0.2)), L(O(), r(0, -2).scale(2, 3.2, 1.9), T(0.3, 0.8, 0.5, 0.5),), L(O(16, 1, 0, 4), I(1, 1, 1.5).rotate(0, 90), T(0.9, 0.9, 0.9, 0.2),),), L(O(), I(1.3, 10, 1.3), T(0.2, 0.7, 0.4, 0.6)),), r(0, 0, 45),);
        Jb(r(0, 2.8, 45), [0, 0, 4.5,]);
      }), U(O(), r(-18.65, -3, 55).scale(2.45, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2)), V(f => {
        f.h = l => l.translateSelf(9.8 * (1 - A()));
        U(O(3), r(-23, -1.7, 55.8).scale(5, 0.7, 8.3), T(0.3, 0.6, 0.6, 0.2));
        U(O(8), r(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), T(0.8, 0.8, 0.8, 0.2));
        U(O(), r(-23, -3, 55).scale(5.2, 1.7, 3), T(0.5, 0.5, 0.5, 0.3));
        U(O(), r(-23, -2.2, 62).scale(3, 1, 4), T(0.5, 0.5, 0.5, 0.3));
        Ib(r(-23, -0.5, 66.5));
      }), V(f => {
        f.h = l => l.translateSelf(0, Xa(1 - 5 * A()) * Za(g[4].g, g[5].g) * Math.sin(1.35 * c) * 4);
        U(O(), r(-22.55, -3, 55).scale(1.45, 1.4, 2.7), T(0.7, 0.7, 0.7, 0.2));
        U(R(L(O(), I(3, 1.4, 2.7)), L(O(), I(1.2, 8, 1.2)),), r(-33, -3, 55), T(0.7, 0.7, 0.7, 0.2),);
      }), V(f => {
        f.h = l => l.translateSelf(0, 0, Xa(1 - 5 * A()) * Za(g[4].g, g[5].g) * Math.sin(0.9 * c) * 8);
        U(R(L(O(), r(-27, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2),), L(O(), r(-27, -3, 55).scale(1, 3), T(0.9, 0.9, 0.9, 0.2),),),);
        U(O(), r(-39, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2));
      }), V(f => {
        f.h = l => l.translateSelf(0, -6.5 * g[4].i);
        U(O(6), r(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), T(0.7, 0.7, 0.7, 0.4),);
      }), Ib(r(-55, -1.1, 46).rotate(0, 90)), U(O(6), r(-61.3, -2.4, 49).scale(3, 1, 5), T(0.4, 0.6, 0.6, 0.3)), U(O(7), r(-57, -2.6, 46).scale(4, 1, 4), T(0.8, 0.8, 0.8, 0.3)), [...L(O(), r(0, -3).scale(11, 1.4, 3), T(0.9, 0.9, 0.9, 0.2)), ...R(L(O(6), gb(90).scale(6, 8, 6), T(0.3, 0.6, 0.6, 0.3)), L(O(4, 0, 0.01), r(0, 6).scale(12, 2, 0.75).rotate(0, 45), T(0.3, 0.6, 0.6, 0.3),), L(O(6), gb(90).scale(5, 12, 5), T(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => L(O(5), r(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), T(0.3, 0.6, 0.6, 0.3),)),),]), C = (U(S, r(-53, 0, 55)), V(f => {
        f.h = l => l.translateSelf(-75, (1 - g[5].i) * (1 - g[6].g) * 3, 55).rotate(180 * (1 - g[5].i) + xa, 0,);
        U(S);
      }, 2), U(O(), r(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), T(0.7, 0.7, 0.7, 0.2),), U(O(3, 0, -0.5), r(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), T(0.8, 0.8, 0.8, 0.2),), U(R(zb(L(O(), r(-100, -2.5, 55).scale(8, 1, 8), T(0.8, 0.8, 0.8, 0.2),), L(O(), r(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), T(0.8, 0.8, 0.8, 0.2),), L(O(), r(-100, -2.6, 70).scale(3, 1.1, 7), T(0.8, 0.8, 0.8, 0.2),), L(O(), r(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), T(0.8, 0.8, 0.8, 0.2),), L(O(6), 
      r(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), T(0.6, 0.6, 0.6, 0.3),), L(O(), r(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), T(0.8, 0.8, 0.8, 0.2),), L(O(), r(-100, 0.42, 92).scale(3, 1.1, 4.1), T(0.8, 0.8, 0.8, 0.2),),), L(O(8), r(-100, -1, 55).scale(7, 0.9, 7), T(0.3, 0.3, 0.3, 0.4),), L(O(8), r(-100, -2, 55).scale(4, 0.3, 4), T(0.4, 0.4, 0.4, 0.5),), L(O(8), r(-100, -3, 55).scale(0.6, 1, 0.6), T(0.4, 0.4, 0.4, 0.5),),),), Jb(r(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), Jb(r(-89, 0.2, 80), [0, 0, 6,]), U(R(L(O(), r(-100, 1, 63).scale(7.5, 4), T(0.5, 0.5, 0.5, 0.4)), L(O(), r(-100, 0, 70).scale(2, 2, 10), T(0.5, 0.5, 0.5, 0.4),), L(O(20, 1), r(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), T(0.5, 0.5, 0.5, 0.4),),),), V(f => {
        f.h = l => l.translateSelf(-99.7, -1.9, 63.5).scale(1, Xa(1.1 - g[6].g), 1);
        U(J);
      }), Ja.map(({x:f, z:l}) => {
        U(O(6), r(7 * f - 100, -3, 7 * l + 55).scale(1, 8.1), T(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(w => U(O(6), r(7 * f - 100, w, 7 * l + 55).scale(1.3, 0.5, 1.3), T(0.4, 0.2, 0.2, 0.8),));
      }), hb(7, f => {
        U(O((23 * f + 1) % 5 + 5, 0, 0.55), r(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), T(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), U(O(), r(-87, -9.5, 24).scale(7, 1, 3), T(0.4, 0.5, 0.6, 0.4)), U(O(4), r(-86, -9.2, 27).scale(5, 1, 5), T(0.5, 0.6, 0.7, 0.3)), U(O(12, 1), r(-86, -9, 31).scale(1.5, 1, 1.5), T(0.3, 0.3, 0.4, 0.1)), Ib(r(-86, -7.5, 31)), V(f => {
        f.h = l => l.translateSelf(0, 3.5 * (1 - Wa(g[6].g, g[7].g)) + Za(g[7].i, g[6].i) * Math.sin(c) * 5,);
        [0, 12, 24,].map(l => U(O(), r(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), T(0.2, 0.5, 0.6, 0.2),));
      }), V(f => {
        f.h = l => l.translateSelf(0, Za(g[7].i, g[6].i) * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * Za(g[7].i, g[6].i),);
        [6, 18,].map(l => U(O(), r(l - 76.9, l / -13 - 10, 24).scale(2.8, 1.5, 3), T(0.1, 0.4, 0.5, 0.2),));
      }), U(R(zb(L(O(5), r(0, 0, -7).scale(2, 1.2, 2), T(0.2, 0.4, 0.7, 0.3),), L(O(5), I(9, 1.2, 9), T(0, 0.2, 0.3, 0.5)), L(O(), I(11, 1, 13), T(0.3, 0.4, 0.6, 0.3)),), L(O(5), I(5.4, 5, 5.4), T(0, 0.2, 0.3, 0.5)),), r(-38.9, -11.3, 17),), Ib(r(-38.9, -9.6, 10)), V(f => {
        f.h = l => l.translateSelf(0, -7.3 * g[7].i);
        U(R(zb(L(O(5), r(0, 2).scale(5, 7, 5).skewY(8), T(0.2, 0.4, 0.5, 0.5),), L(O(5), r(0, 6).scale(1.1, 7, 1.1).skewY(-8), T(0.25, 0.35, 0.5, 0.5),), L(O(5), r(0, 9).scale(0.6, 7, 0.6).skewY(8), T(0.35, 0.3, 0.5, 0.5),),), L(O(5), I(4, 8, 4), T(0.2, 0.4, 0.5, 0.5)), L(O(5), r(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), T(0.2, 0.4, 0.5, 0.5),),), r(-38.9, -11.3, 17),);
        Jb(r(-39.1, -0.6, 17).rotate(11), ...kb(15).map(({x:l, z:w}) => [3 * l, 3 * w, 1.2,]),);
      }), Ja.map(({x:f, z:l}) => {
        U(O(14, 1), r(9 * f - 38.9, -7.3, 11 * l + 17).scale(1, 4), T(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(w => U(O(17, 1), r(9 * f - 38.9, w - 11.3, 11 * l + 17).scale(1.5, 0.5, 1.5), T(0.6, 0.6, 0.6, 0.3),));
      }), U(R(zb(L(O(6), r(0, 0, -36).scale(15, 1.2, 15), T(0.7, 0.7, 0.7, 0.3),), L(O(), r(0, 0, -18).scale(4, 1.2, 6), T(0.45, 0.4, 0.6, 0.3),),), ...hb(6, f => hb(6, l => L(O(6), r(4.6 * l - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * l)).scale(2, 5, 2), T(0.7, 0.7, 0.7, 0.3),))).flat(),), r(-38.9, -11.3, 17),), Jb(r(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), U(O(5), r(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), T(0.8, 0.1, 0.25, 0.4),), Ib(r(-84, -0.5, 85).rotate(0, 
      45)), V(f => {
        f.h = l => v(l, -123, 1.4, 55 + -65 * Aa);
        U(H);
        Ib(r(0, -3, -4).rotate(0, 180));
      }), R(L(O(), r(0, -0.5, 1).scale(1.15, 1.2, 6.5), T(0.25, 0.25, 0.35, 0.3),), L(O(3), r(0, 0, -5.5).scale(3, 2), T(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => L(O(), r(f, -0.5, 1).scale(0.14, 0.3, 6.5), T(0.7, 0.2, 0, 0.3),)),));
      V(f => {
        f.h = l => l.translateSelf(0, -2, Za(g[10].g, g[11].g) * n(Math.sin(1.1 * c)) * -8.5 + 10);
        hb(2, l => U(C, r(9 * l - 110 + (1 & l), 1.7, -12)));
      });
      V(f => {
        f.h = l => l.translateSelf(0, -2, Za(g[10].g, g[11].g) * n(Math.sin(2.1 * c)) * -8.5 + 10);
        hb(2, l => U(C, r(9 * (l + 2) - 110 + (1 & l), 1.7, -12)));
      });
      V(f => {
        f.h = l => l.translateSelf(0, -2, -8.5 * Wa((1 - g[10].g) * (1 - Za(g[10].g, g[11].g)), Za(g[10].g, g[11].g) * n(Math.sin(1.5 * c)),) + 10,);
        hb(3, l => U(C, r(9 * l - 106, 1.7, -12)));
      });
      U(R(zb(L(O(), r(26.5, -1.6, 10).scale(20, 2.08, 3)), L(O(), r(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...hb(4, f => L(O(), r(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...hb(3, f => L(O(), r(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), r(-123, 0, -12), T(0.5, 0.5, 0.6, 0.2),);
      Ib(r(-116, -1.4, -18).rotate(0, 180));
      U(O(), r(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), T(0.8, 0.8, 0.8, 0.2),);
      U(O(6), r(-116, -2.6, -16.5).scale(3.2, 0.8, 3), T(0.6, 0.5, 0.7, 0.2));
      U(O(), r(-115.5, -17, -12).scale(0.5, 15, 2.2), T(0.6, 0.6, 0.6, 0.3));
      U(O(8), r(-114, -17, -2).scale(2, 15, 2), T(0.6, 0.6, 0.6, 0.3));
      U(O(8), r(-79, -17, -2).scale(2, 15, 2), T(1, 1, 1, 0.3));
      U(O(), r(-77, -17, -50.5).scale(2.2, 15, 0.5), T(0.6, 0.6, 0.6, 0.3));
      hb(3, f => {
        U(x(16), r(12 * f - 109, -9, -12), T(0.6, 0.6, 0.6, 0.3));
        U(x(16), r(-77, -9, -12 * f - 20).rotate(0, 90), T(0.6, 0.6, 0.6, 0.3),);
      });
      U(R(L(O(12), r(-77, -14.5, -12).scale(4, 17.5, 4), T(0.7, 0.7, 0.7, 0.2),), L(O(), r(-79, 0.1, -12).scale(3.5, 2, 1.3), T(0.4, 0.5, 0.6, 0.2),), L(O(), r(-77, 0.1, -14).scale(1.5, 2, 2), T(0.4, 0.5, 0.6, 0.2),), L(O(12), r(-77, 3.1, -12).scale(3, 5, 3), T(0.4, 0.5, 0.6, 0.2),),),);
      U(O(), r(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), T(0.6, 0.6, 0.6, 0.3),);
      U(O(9), r(-98, -18.4, -40).scale(2.5, 13.5, 2.5), T(0.5, 0.5, 0.5, 0.3));
      U(R(L(O(), r(-93, -5.8, -40).scale(9, 1, 5), T(0.8, 0.8, 0.8, 0.1),), L(O(9), r(-98, -5.8, -40).scale(3, 8, 3), T(0.7, 0.7, 0.7, 0.2),),),);
      Ib(r(-98, -4.4, -40).rotate(0, 90));
      Jb(r(-115, 0.2, -12), [0, 0, 3.5,]);
      Jb(r(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      U(R(zb(L(O(6, 0, 0, 0.6), r(-100, 0.7, 105.5).scale(8, 1, 11), T(0.7, 0.7, 0.7, 0.2),), L(O(), r(-101.5, 0.7, 93.5).scale(10.5, 1, 2), T(0.7, 0.7, 0.7, 0.2),),), L(O(5), r(-100, 0.7, 113).scale(4, 3, 4), T(0.7, 0.7, 0.7, 0.2),),),);
      hb(4, f => V(l => {
        l.h = w => {
          const z = Za(g[8].i, g[12].i);
          w.translateSelf((2 < f ? 2 * (1 - z) + z : 0) - 100, z * Math.sin(1.3 * c + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - g[8].i) * (1 - g[12].i) * -7 + Wa(z, 0.05) * Math.cos(1.3 * c + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        U(O(6), r(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), T(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      V(f => {
        f.h = l => {
          const w = Za(g[8].i, g[12].i);
          l.translateSelf(2.5 * (1 - w) - 139.7, -3 * (1 - g[8].g) + w * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * w + 3), 0);
        };
        U(R(L(O(10), I(6, 2, 6), T(0.1, 0.6, 0.5, 0.3)), L(O(10), I(3.3, 6, 3.3), T(0.1, 0.6, 0.5, 0.5)),),);
        U(O(15, 1), r(-7.5).rotate(0, 90).scale(3, 2.3, 3), T(0.4, 0.4, 0.4, 0.3),);
        U(O(10), r(-7.5).rotate(0, 90).scale(2, 2.5, 2), T(0.3, 0.8, 0.7, 0.3));
        U(O(5), r(-7.5).rotate(0, 90).scale(1, 3), T(0.5, 0.5, 0.5, 0.5));
        Ib(r(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(l => U(q, gb(90 * l, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), T(1, 1, 0.8, 0.2),));
        Jb(r(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      V(f => {
        f.h = l => l.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - g[12].g);
        U(J);
      });
      [-1, 1,].map(f => {
        [7.2, 1.5,].map(l => U(O(15, 1), r(-7.5 * f - 100, l + 0.7, 96).scale(1.1, 0.5, 1.1), T(0.5, 0.24, 0.2, 0.4),));
        U(q, r(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), T(1, 1, 0.8),);
        U(O(12, 1), r(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), T(0.6, 0.24, 0.2, 0.5),);
        U(R(L(O(), r(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), T(0.5, 0.5, 0.5, 0.4),), L(O(), I(3, 3, 10), T(0.6, 0.24, 0.2, 0.5)), L(O(28, 1), r(0, 3, -5).scale(3, 4, 10).rotate(90, 0), T(0.6, 0.24, 0.2, 0.5),), L(O(5), r(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), T(0.6, 0.24, 0.2, 0.5),), L(O(5), r(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), T(0.6, 0.24, 0.2, 0.5),),), r(f - 100, 0.7, 97),);
      });
      U(R(L(O(), r(-82.07, 0.8, 106).scale(11, 0.9, 2.2), T(0.7, 0.7, 0.7, 0.1),), L(O(45, 1), r(-81, 0.7, 106).scale3d(7.7), T(0.7, 0.7, 0.7, 0.1),),),);
      V(f => {
        f.h = l => l.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
        U(R(L(O(45, 1), I(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)), L(O(), r(0, 0, -5.5).scale(1.5, 3, 2.7), T(0.45, 0.45, 0.45, 0.2),),),);
        U(O(8), r(0, 2).scale(3, 1.5, 3).rotate(0, 22), T(0.7, 0.7, 0.7, 0.1));
        U(O(5), r(0, 2).scale(1, 2), T(0.3, 0.3, 0.3, 0.2));
        Jb(r(0, 3), ...kb(14).map(({x:l, z:w}) => [5.6 * l, 5.6 * w, 2,]),);
      });
      V(f => {
        f.h = l => l.translateSelf(-65.8, 0.8, 106).rotateSelf(0, wa);
        [-1, 1,].map(l => U(q, gb(0, 90).translate(-5 * l, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * l + 90), T(1, 1, 0.8),));
        U(R(L(O(28, 1), r(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3),), L(O(), I(9, 5, 2), T(0.3, 0, 0, 0.3)),),);
        U(L(O(28, 1), I(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        U(L(O(5), r(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)),);
      });
      V(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
        U(R(L(O(28, 1), r(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3),), L(O(), r(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)), L(O(), r(0, 0, 7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),),);
        U(L(O(28, 1), I(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        U(L(O(5), r(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)),);
      });
      V(f => {
        f.h = l => l.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
        U(R(L(O(28, 1), r(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3),), L(O(), r(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)), L(O(), r(0, 0, -7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),),);
        U(L(O(28, 1), I(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        U(L(O(5), r(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)),);
      });
      U(O(), r(-58, 1, 106).scale(2, 0.65, 2), T(0.7, 0.7, 0.7, 0.2));
      U(O(), r(-50.7, 1, 99).scale(2, 0.65, 1), T(0.7, 0.7, 0.7, 0.2));
      U(O(), r(-42, 0.4, 91).scale(5, 1, 2.5), T(0.7, 0.7, 0.7, 0.3));
      U(O(), r(-34.2, 0.4, 91).scale(3, 1, 3), T(0.7, 0.7, 0.7, 0.3));
      Ib(r(-34, 2.7, 96).rotate(-12, 0));
      U(O(5), r(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), T(0.2, 0.5, 0.5, 0.6),);
      [T(0.1, 0.55, 0.45, 0.2), T(0.2, 0.5, 0.5, 0.3), T(0.3, 0.45, 0.55, 0.4),].map((f, l) => V(w => {
        w.h = z => {
          z.translateSelf(0, (1 - g[13].i) * (1 - g[14].i) * (l ? 0 : 3) + Za(g[13].i, g[14].i) * Math.sin(1.5 * c + 1.5 * l) * 4,);
        };
        U(O(), r(-23.5, 0.5, 91 + 6.8 * l).scale(1 === l ? 2 : 3.3, 1, 3.3), f);
        2 === l && U(O(), r(-29.1, 0.4, 91).scale(2.1, 1, 3), T(0.7, 0.7, 0.7, 0.3));
        1 === l && U(O(), r(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), T(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => U(q, r(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), T(1, 1, 0.8),));
      hb(3, f => U(x(24.7 - 0.7 * (1 & f)), r(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? T(0.5, 0.5, 0.5, 0.3) : T(0.35, 0.35, 0.35, 0.5),),);
      U(R(L(O(6, 0, 0, 0.3), r(0, -0.92, 95).scale(14, 2, 14), T(0.8, 0.8, 0.8, 0.2),), L(O(5), r(0, 0, 95).scale3d(6), T(0.3, 0.3, 0.3, 0.5)),),);
      Ib(r(0, 1.7, 82).rotate(0, 180));
      U(O(5), r(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), T(0.5, 0.3, 0.3, 0.4),);
      U(O(6), r(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), T(0.5, 0.6, 0.7, 0.3),);
      U(O(), r(0, 16, 129).scale(1.5, 1, 2), T(0.5, 0.6, 0.7, 0.3));
      U(O(7), r(0, 16.2, 133).scale(5, 1, 5), T(0.4, 0.5, 0.6, 0.4));
      U(R(zb(L(O(), r(0, 16, 110.5).scale(12, 1, 3), T(0.5, 0.3, 0.3, 0.4),), L(O(), r(0, 16, 111).scale(3, 1, 3.8), T(0.5, 0.3, 0.3, 0.4),),), L(O(5), r(0, 16, 103.5).scale(5.5, 5, 5.5), T(0.5, 0.3, 0.3, 0.4),),),);
      V(f => {
        f.h = l => l.translateSelf(-2 * Math.sin(c)).rotate(25 * Math.sin(c));
        U(O(3), r(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), T(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(l => {
          U(O(6), r(0, 16, l + 95).scale(3, 1, 2.3).rotate(0, 90), T(0.7, 0.7, 0.7, 0.4),);
          U(O(), r(0, 6.2, l + 95).scale(0.5, 11, 0.5), T(0.5, 0.3, 0.3, 0.4),);
        });
      });
      V(f => {
        f.h = l => {
          const w = Za(Za((g[14].g + g[14].i) / 2, g[13].i), (g[15].g + g[15].i) / 2,);
          l.translateSelf(0, 16 * w, 8.5 * Xa(2 * w - 1) + 95);
        };
        U(O(5), I(5, 1.1, 5), T(0.5, 0.3, 0.3, 0.4));
        U(O(5), I(5.5, 0.9, 5.5), T(0.25, 0.25, 0.25, 0.4));
        Ib(r(0, 1.5, -1).rotate(0, 180));
      });
      Jb(r(0, 3, 95), ...kb(9).map(({x:f, z:l}) => [9 * f, 9 * l, 4,]),);
      Jb(r(0, 19, 134), [0, 0, 3.5,]);
    });
    V(() => {
      U(mb(20), r(0, 1).scale(0.5, 0.5, 0.5), T(1, 0.3, 0.4));
      U(mb(30), I(0.7, 0.8, 0.55), T(1, 0.3, 0.4));
      U(O(), r(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), T(0.3, 0.3, 0.3));
      [-1, 1,].map(k => {
        U(q, gb(0, 0 < k ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), T(1, 1, 0.8),);
        U(L(R(O(15, 1), L(O(), r(0, 0, 1).scale(2, 2, 0.5)),), gb(-90, 0).scale(0.1, 0.05, 0.1), T(0.3, 0.3, 0.3),), r(0.2 * k, 1.2, 0.4).rotate(0, 20 * k, 20 * k),);
        V(() => {
          U(O(20, 1), r(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), T(1, 0.3, 0.4));
        });
      });
    });
    V(() => {
      U(O(6, 1), I(0.13, 1.4, 0.13), T(0.3, 0.3, 0.5, 0.1));
      U(O(10), r(0, 1).scale(0.21, 0.3, 0.21), T(1, 0.5, 0.2));
      U(O(3), r(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), T(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    V(() => {
      U(O(6).slice(0, -1), I(0.77, 1, 0.77), T(1, 0.3, 0.5));
    }, 0);
    V(() => {
      U(mb(30, 24, (k, v, x) => {
        const A = v / 24, H = k * Math.PI * 2 / 30, J = Math.sin(A ** 0.6 * Math.PI / 2);
        k = A * A * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:x.D = 0, y:-0.5, z:0,} : {x:Math.cos(H) * J, y:Math.cos(A * Math.PI) - A - k, z:Math.sin(H) * J + Math.sin(k * Math.PI * 2) / 4,};
      }), I(0.7, 0.7, 0.7), T(1, 1, 1),);
      [-1, 1,].map(k => U(mb(12), r(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

