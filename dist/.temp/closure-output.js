let aa, ba, ca, da, ea, ha, ia, ja, la, ma, na, pa, qa, ra, sa, c = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 1, d = 0.066;
const Fa = [], e = [], Ga = [], Ha = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ia = {x:0, y:0, z:0,}, Ja = Math.PI / 180, Pa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), 
".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Qa = [[69, 128, 0, 143, 128, 0, 
0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ra = 0, Sa = 180;
const Ta = {x:0, y:0, z:0,}, g = NO_INLINE(a => 0 > a ? -a : a), Ua = NO_INLINE((a, b) => a < b ? a : b), Va = NO_INLINE((a, b) => b < a ? a : b), Wa = (a, b) => g(a) > b ? a : 0, Xa = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a, Ya = a => Math.atan2(Math.sin(a * Ja), Math.cos(a * Ja)) / Ja, Za = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * Xa(f) || 0, $a = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0, ab = (a, b) => (a = Xa(a), $a(a, 1 - a, b)), cb = (a, b = bb, f = 0,
) => (f *= 16, b[f++] = a.m11, b[f++] = a.m12, b[f++] = a.m13, b[f++] = a.m14, b[f++] = a.m21, b[f++] = a.m22, b[f++] = a.m23, b[f++] = a.m24, b[f++] = a.m31, b[f++] = a.m32, b[f++] = a.m33, b[f++] = a.m34, b[f++] = a.m41, b[f++] = a.m42, b[f++] = a.m43, b[f] = a.m44, b), fb = (a = db, b = eb,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = 
a.m42, b.m43 = a.m43, b.m44 = a.m44, b), n = NO_INLINE((a, b, f) => db.translate(a, b, f)), gb = NO_INLINE((a, b, f) => db.rotate(a, b, f)), p = NO_INLINE((a, b, f) => db.scale(a, b, f)), hb = (a, b) => Array.from(Array(a), (f, k) => b(k)), ib = (a, b, f) => (a.C = f, a.u = b, a), jb = (a, b, f = a.u) => ib(a.map(k => {
  let r, m;
  return {x:k, y:r, z:m} = k, {x:k, y:r, z:m} = b.transformPoint({x:k, y:r, z:m,}), {x:k, y:r, z:m,};
}), f, a.C,), v = (a, b, f) => a.map(k => jb(k, b, f)), kb = (a, b = 0) => hb(a, f => {
  const k = Math.cos(2 * Math.PI * f / a);
  return {x:Math.sin(2 * Math.PI * f / a), y:0, z:0.01 > g(k) ? k : 0 > k ? k - b : k + b,};
}), lb = (a, b, f) => a.map((k, r, {length:m}) => ib([k, b[m - r - 1], b[m - (r + 1) % m - 1], a[(r + 1) % m],], a.u, f,)), H = (a, b, f = 0, k,) => (a = a ? kb(a, k) : Ha, k = jb(a, n(0, 1).scale3d(0 < f ? f : 1)), a = jb(a, n(0, -1).scale3d(0 > f ? -f : 1)).reverse(), [...lb(a, k, b), k, a,]), mb = (a, b = a, f = (k, r) => (r *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(r), y:Math.cos(r), z:Math.sin(k) * Math.sin(r),})) => {
  const k = [];
  for (let r = 0; a > r; r++) {
    for (let m = 0; b > m; m++) {
      const u = ib([], 0, 1);
      k.push(u);
      u.push(f(r, m, u));
      m && u.push(f((r + 1) % a, m, u));
      b - 1 > m && u.push(f((r + 1) % a, m + 1 % b, u));
      u.push(f(r, m + 1 % b, u));
    }
  }
  return k;
}, nb = ({x:a, y:b, z:f}, k) => a * k.x + b * k.y + f * k.z, ob = a => {
  let b, f = 0, k = 0, r = 0, m = a.at(-1);
  for (b of a) {
    f += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), r += (m.x - b.x) * (m.y + b.y), m = b;
  }
  return b = Math.hypot(f, k, r), f /= b, k /= b, r /= b, {x:f, y:k, z:r, w:f * m.x + k * m.y + r * m.z,};
}, pb = (a, b) => {
  var f, k, r, m = b.B;
  for (var u = 0; m.length > u; ++u) {
    if (-0.00008 > (f = nb(a, m[u]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
      k = [];
      r = [];
      m = b.B;
      u = b.v;
      let w = m.at(-1), y = nb(a, w) - a.w;
      for (const I of m) {
        f = nb(a, I) - a.w, 8e-5 > y && r.push(w), -0.00008 < y && k.push(w), (8e-5 < y && -0.00008 > f || -0.00008 > y && 8e-5 < f) && (y /= f - y, w = {x:w.x + (w.x - I.x) * y, y:w.y + (w.y - I.y) * y, z:w.z + (w.z - I.z) * y,}, k.push(w), r.push(w)), w = I, y = f;
      }
      return {l:2 < k.length && {B:ib(k, m.u, m.C), v:u, A:b,}, j:2 < r.length && {B:ib(r, m.u, m.C), v:u, A:b,},};
    }
  }
  return {l:k, j:r,};
}, qb = (a, b, f = ob(b.B)) => {
  let k, r, m;
  return a ? ({l:k, j:r} = pb(a, b), k || r || a.o.push(b), k && (a.l = qb(a.l, k, f)), r && (a.j = qb(a.j, r, f))) : ({x:k, y:r, z:f, w:m} = f, a = {x:k, y:r, z:f, w:m, o:[b,], l:0, j:0,}), a;
}, tb = (a, b, f) => {
  const k = [], r = (m, u) => {
    let {l:w, j:y} = pb(m, u);
    w || y || (0 < f * nb(m, b) ? w = u : y = u);
    w && (m.l ? r(m.l, w) : k.push(w));
    y && m.j && r(m.j, y);
  };
  for (const m of b.o) {
    r(a, m);
  }
  return k;
}, ub = (a, b) => a && (b(a), ub(a.l, b), ub(a.j, b)), vb = a => (ub(a, b => {
  const f = b.j;
  b.j = b.l;
  b.l = f;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const k of b.o) {
    k.v = !k.v;
  }
}), a), wb = a => a.length ? a.reduce((b, f) => qb(b, {B:f, v:0, A:0,}), 0) : a, zb = (...a) => a.reduce((b, f) => {
  const k = [];
  if (b = wb(b), f) {
    f = wb(f);
    ub(b, r => r.o = tb(f, r, 1));
    ub(f, r => k.push([r, tb(b, r, -1),]));
    for (let [r, m] of k) {
      for (const u of m) {
        qb(b, u, r);
      }
    }
  }
  return b;
}), J = (a, ...b) => {
  const f = m => {
    let u;
    return m.A && ((u = k.get(m.A)) ? (r.delete(u), m = f(m.A)) : k.set(m.A, m)), m;
  }, k = new Map(), r = new Map();
  return a = vb(zb(vb(wb(a)), ...b)), ub(a, m => {
    for (const u of m.o) {
      r.set(f(u), u.v);
    }
  }), Array.from(r, ([{B:m}, u]) => {
    const w = m.map(({x:y, y:I, z:D}) => ({x:y, y:I, z:D,}));
    return ib(u ? w.reverse() : w, m.u, m.C);
  });
}, P = NO_INLINE((a, b, f) => $a(a, b, 1 - Math.exp(-f * d))), Ab = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][wa = Ga.reduce((a, {i:b}) => a + b, 0)] + " / XIII";
}, Bb = () => {
  localStorage.DanteSP22 = JSON.stringify([e.map(({i:a}) => a), Ga.map(({i:a}) => a), ya, c, 0,]);
}, Cb = (a, b, f, k) => new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Fb = () => {
  let a, b, f, k, r, m, u, w, y, I, D, h, t, O, S = !0;
  const C = [], G = () => {
    b4.innerHTML = "Music: " + S;
    ba || !S ? Db.disconnect() : Db.connect(Eb.destination);
  }, K = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ha = Cb(0.3, 181, q, 1.732051);
    ia = [Cb(0.3, 55, q, 1.732051), Cb(55, 181, q, 1.732051),];
    k = w = void 0;
    C.length = ca = O = h = t = za = Aa = 0;
  }, x = (q, l = 0) => {
    if (ba !== q) {
      ba = q;
      da = l;
      K();
      Ab();
      document.body.className = q ? "l m" : "l";
      try {
        q ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Db.start());
      } catch {
      }
      G();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => x(!1);
  b2.onclick = () => x(!1, 1);
  b5.onclick = () => x(!0);
  b4.onclick = () => {
    S = !S;
    G();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = q => {
    if (!ba && (q.target === hC && (ca = 1), da)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = q => {
    let l;
    q.repeat || (l = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (C[l] = !!q.type[5] && !0) && (0 === l && (ca = 1), 1 === l && x(!0)));
  };
  onmousemove = ({movementX:q, movementY:l}) => {
    da && (q || l) && (Sa += 0.1 * q, Ra += 0.1 * l);
  };
  hC.ontouchstart = q => {
    if (!ba) {
      for (let {pageX:l, pageY:E, identifier:z} of q.changedTouches) {
        da && l > hC.clientWidth / 2 ? void 0 === w && (y = 0, m = l, u = E, w = z, I = Sa, D = Ra) : void 0 === k && (r = 0, b = l, f = E, k = z);
      }
      a = va;
    }
  };
  hC.ontouchmove = q => {
    if (!ba) {
      for (let {pageX:A, pageY:F, identifier:N} of q.changedTouches) {
        var l, E, z, B;
        w === N && (Sa = I + (A - m) / 2.3, Ra = D + (F - u) / 2.3, y = 1);
        k === N && (N = (b - A) / 20, l = g(N), E = (f - F) / 20, z = g(E), (B = 0.5 < Va(l, z)) && (r = 1), h = (B && 0.2 < l) * Xa(N, -1), t = (B && 0.2 < z) * Xa(E, -1), 2 < l && (b = A + 20 * (0 > N ? -1 : 1)), 2 < z && (f = F + 20 * (0 > E ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = q => {
    let l;
    document.activeElement === document.body && q.preventDefault();
    for (const E of q.changedTouches) {
      E.identifier === w ? (w = void 0, y || (l = 1), y = 0) : E.identifier === k ? (k = void 0, t = h = 0, r || (l = 1), r = 0) : l = 1;
    }
    q.target === hC && l && a && 0.02 < (q = va - a) && 0.7 > q && (ca = 1);
  };
  ea = () => {
    za = t + (C[4] ? 1 : 0) - (C[5] ? 1 : 0);
    Aa = h + (C[2] ? 1 : 0) - (C[3] ? 1 : 0);
    var q = navigator.getGamepads()[0];
    if (q) {
      const l = z => E[z]?.pressed || 0 < E[z]?.value ? 1 : 0, E = q.buttons;
      q = q.axes;
      da && (Ra += d * Wa(q[3], 0.3) * 80, Sa += d * Wa(q[2], 0.3) * 80);
      za += l(12) - l(13) - Wa(q[1], 0.2);
      Aa += l(14) - l(15) - Wa(q[0], 0.2);
      l(9) && x(!0);
      (q = l(3) || l(2) || l(1) || l(0)) && !O && (ca = 1);
      O = q;
    }
  };
  document.onvisibilitychange = onblur = onresize = K;
  x(!0);
}, T = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a), W = (a, b = new DOMMatrix(), f) => ja.o.push(...v(a, b, f)), Y = (a, b = 1) => {
  const f = ja;
  b = {m:new DOMMatrix(), H:Fa.length, G:b, o:[],};
  return Fa.push(b), a(ja = b), ja = f, b;
}, Gb = a => (a = a.transformPoint(), Math.hypot(Ia.x - a.x, Ia.y - a.y, Ia.z - a.z,)), Hb = a => {
  const b = ja, f = e.length, k = {i:0, g:0, h:0, m:b.m, I:a, F() {
    k.g = P(k.g, k.i, 4);
    k.h = P(k.h, k.i, 1);
    fb(b.m).multiplySelf(a);
    ca && 3 > Gb(eb) && (0.3 > k.g || 0.7 < k.g) && (k.i = k.i ? 0 : 1, f && 1 / 0 > Ea && (Ea = c + 1, h4.innerHTML = "* click *"), ya = f, Bb());
    eb.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  e.push(k);
  W(H(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
  W(H(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), T(0.4, 0.5, 0.5));
  W(H(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), T(0.5, 0.5, 0.4));
}, Ib = (a, ...b) => {
  let f = -1, k = 0, r = 0, m = 0, u = 0, w = 0, y = 1, I = 3;
  const D = {i:0, F() {
    if (!D.i) {
      let B, A, F, N, L, X, U, Q = 1, M = 1 / 0;
      for (const R of O) {
        var {x:q, z:l, w:E} = R;
        l = (q = Math.hypot(C - q, G - l)) - E;
        U ||= q < E;
        0 < l && M > l && (M = l, S = R);
        Q = Ua(Q, q / E);
      }
      U || ({x:z, z:B, w:A} = S, F = C - z, N = G - B, L = Math.hypot(F, N), X = Math.atan2(-N, F), y && (r = (Math.random() - 0.5) * Math.PI / 2, I = Xa(I / (1 + Math.random()))), X += r, f = -Math.cos(X), k = Math.sin(X), 0.1 < L && (L = Ua(L, A) / (L || 1), C = F * L + z, G = N * L + B));
      y = U;
      I = P(I, 6 * (1 - Q) + 3, Q + 3);
      K = P(K, C = P(C, C + f, I), I);
      x = P(x, G = P(G, G + k, I), I);
      m = Za(m, Math.atan2(K - u, x - w) / Ja - 180, 1 - Math.exp(-3 * d),);
      if (1.6 > Gb(fb(h.m).multiplySelf(a).translateSelf(u = K, 0, w = x).rotateSelf(0, m, 7 * Math.sin(1.7 * c)),)) {
        D.i = 1;
        var z = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][wa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        1 / 0 > Ea && (Ea = c + (wa && 12 > wa ? 5 : 7), h4.innerHTML = z);
        Ab();
        Bb();
      }
    }
    D.i && fb(Fa[2].m).translateSelf(t % 4 * 1.2 - 1.7 + Math.sin(c + t) / 7, -2, 1.7 * (t / 4 | 0) - 5.5 + g(t % 4 - 2) + Math.cos(c / 1.5 + t) / 6,);
  },}, h = ja, t = Ga.length, O = b.map(([q, l, E]) => ({x:q, z:l, w:E,}));
  let S = O[0], {x:C, z:G} = S, K = C, x = G;
  Ga.push(D);
}, Jb = (a, b, f, k) => {
  a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
}, Lb = () => {
  let a, b, f, k, r, m, u, w, y, I, D, h, t, O, S = 1, C = 2, G = 15;
  const K = () => (C ? e[ya] : Fa[b && 1 === Fa[b].G && b || 0]).m, x = z => {
    const {x:B, y:A, z:F} = 1 < C ? fb(e[ya].m).multiplySelf(e[ya].I).transformPoint({x:0, y:ya || 0.9 < pa ? 15 : 1, z:-2.4,}) : K().transformPoint(Ta);
    z && (u = (B - Ia.x) / d, w = (F - Ia.z) / d);
    Ia.x = B;
    Ia.y = A;
    Ia.z = F;
  }, q = (z, B, A) => {
    fb(K()).invertSelf();
    eb.m41 = eb.m42 = eb.m43 = 0;
    z = eb.transformPoint({x:z, z:A, w:0,});
    Ta.x += z.x;
    Ta.y += B;
    Ta.z += z.z;
    x();
  }, l = () => {
    var z = 0, B = 0, A = 0;
    let F = 0;
    var N = -1;
    let L = 0, X = 0;
    for (var U = 0; 36 > U; ++U) {
      var Q = 512 * U;
      for (var M = 96; 416 > M; M += 4) {
        for (var R = 0; 2 > R; ++R) {
          var ka = Kb[Q + M + R], oa = Kb[Q + M + R + 2];
          ka > F && (F = ka);
          ka + oa && (0 > N || N === U) && (N = U, oa === a ? ++z : B && B !== oa || (B = oa, ++A));
        }
      }
    }
    a = 0 > N ? 0 : A > 2 * z ? B : a;
    for (z = 36; 128 > z; z += 1) {
      U = N = A = B = 0;
      Q = 512 * z;
      for (M = 0; 128 > M; M += 1) {
        for (R = Q + 4 * M, ka = 0; 2 > ka; ++ka) {
          oa = Kb[R + ka];
          const Ka = Kb[R + ka + 2];
          (ka ? 64 < M : 64 > M) ? B = Va(B, oa) : A = Va(A, oa);
          ka ? U = Va(U, Ka) : N = Va(N, Ka);
        }
      }
      g(A - B) > g(L) && (L = A - B);
      g(U - N) > g(X) && (X = U - N);
    }
    I = Xa(1 - 0.015 * Va(g(L), g(X)));
    q(L / 255, F / 255, X / 255);
  }, E = (z, B, A, F) => $a(z, B, S || (Xa(g(B - z) ** 0.5 - A) + 1 / 7) * (1 - Math.exp(-(1.5 * F) * d)));
  sa = z => {
    x(a);
    Z.r9r(0, 0, 128, 128, 6408, 5121, Kb);
    NO_INLINE(l)();
    !C && a === b || (b = a, B = fb(K()).invertSelf().transformPoint(Ia), Ta.x = B.x, Ta.y = B.y, Ta.z = B.z);
    C = C && (a ? 0 : 1);
    var {x:B, y:A, z:F} = Ia;
    const N = (A < (-20 > B || 109 > F ? -25 : -9) && (C = 2), 1 === a && (e[9].i = -15 > B && 0 > F ? 1 : 0), D = $a(P(D, A, 2), A, C || 8 * g(D - A)), t = E(t, D, 2, 1), h = E(h, B, 0.5, 1), O = E(O, F, 0.5, 1), m = P(m, ra * (27 < a && 32 > a), 2,), da ? (A = C + (1 - Math.exp(-18 * d)), Ba = $a(Ba, B, A), Ca = $a(Ca, D + 1.5, A), Da = $a(Da, F, A), Sa = Ya(Sa)) : (Da = E(Da, O + -18 + 5 * m, 1, 2 + m,), Ca = E(Ca, Va(t + Xa((-60 - F) / 8, 0, 20) + 13 + 9 * m, 6), 4, 2,), Ba = E(Ba, h, 1, 2 + 
    m,), A = Ua(-6, -g(O - Da)), L = h - Ba, Sa = Za(Sa, 90 - Ya(Math.atan2(A, L) / Ja), S + (1 - Math.exp(-10 * d)),), Ra = Za(Ra, 90 - Math.atan2(Math.hypot(A, L), Ca - t) / Ja, S + (1 - Math.exp(-10 * d)),)), Ra = Xa(Ra, -87, 87), S = 0, z().translateSelf(B, D, F).rotateSelf(0, k));
    for (L = 0; 2 > L; ++L) {
      const X = 9.1 * c - Math.PI * L;
      fb(N, z()).translateSelf(0, r * Xa(0.45 * Math.sin(X - Math.PI / 2)),).rotateSelf(r * Math.sin(X) * 0.25 / Ja, 0);
    }
    A = Xa(za, -1);
    var L = Xa(Aa, -1);
    B = Wa(Math.hypot(A, L) ** 0.5, 0.1);
    F = Math.atan2(A, L);
    A = B * g(A) * Math.sin(F);
    L = B * g(L) * Math.cos(F);
    B && (f = 90 - F / Ja);
    r = P(r, B, 10);
    k = Za(k, f, 1 - Math.exp(-8 * d));
    G = a ? 5 : P(G, C ? 10 : 19, 2.2);
    u = a || C ? 0 : P(u, 0, 3);
    w = a || C ? 0 : P(w, 0, 3);
    y = C ? 0 : P(y, a ? 7 * Xa(2 * B) * I : 0, a ? 9 : 1,);
    F = da ? (180 + Sa) * Ja : 0;
    q(d * (u + y * (L * Math.cos(F) - A * Math.sin(F))), -G * d, d * (w + y * (L * Math.sin(F) + A * Math.cos(F))),);
  };
}, Mb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), Nb = (a, b) => {
  const f = {}, k = Z.c1h();
  return Z.abz(k, a), Z.abz(k, Mb(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
}, Vb = (a, b, f) => {
  let k;
  ba ? (k = gb(0, 40 * Math.sin(va) - 70), cb(k, Tb, 37), cb(k, Tb, 38), cb(k, Tb, 39), Z.uae(a, !1, Tb), Z.d97(4, Fa[39].D - Fa[37].s, 5123, 2 * Fa[37].s)) : (Z.uae(a, !1, Tb), Z.d97(4, (b ? Fa[39].D : Fa[37].s) - 3, 5123, 6), Z.uae(a, !1, Ub), Z.das(4, Fa[f].D - Fa[f].s, 5123, 2 * Fa[f].s, Ga.length,), Z.das(4, Fa[40].D - Fa[40].s, 5123, 2 * Fa[40].s, e.length,));
}, Wb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Xb = a => Math.sin(a * Math.PI * 2), Yb = a => 0.5 > a % 1 ? 1 : -1, Zb = a => a % 1 * 2 - 1, $b = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, gc = a => {
  let b = 0;
  const f = () => {
    let u = 0;
    const w = Q => {
      let M, R, ka, oa = 0, Ka = 0;
      const Ob = [], La = new Int32Array(768 * Q), ac = 2 ** (l - 9) / Q, bc = Math.PI * 2 ** (F - 8) / Q, xb = L * Q & -2;
      for (let rb = 0; 11 >= rb; ++rb) {
        for (let sb = 0, Pb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + rb]; 32 > sb; ++sb) {
          const Qb = (32 * rb + sb) * Q;
          for (var Ma = 0; 4 > Ma; ++Ma) {
            if (M = 0, Pb && (M = y[Pb - 1].charCodeAt(sb + 32 * Ma) - 40, M += 0 < M ? 106 : 0), M) {
              var fa;
              if (!(fa = Ob[M])) {
                fa = M;
                let V = void 0, ta = void 0;
                var Rb = M;
                let cc = 0, dc = 0;
                const ec = 2 > b ? Zb : Xb, fc = 2 > b ? 1 > b ? Yb : $b : Xb, Sb = new Int32Array(G + K + U);
                for (let Na = 0, yb = 0; G + K + U > Na; ++Na, ++yb) {
                  let Oa = 1;
                  G > Na ? Oa = Na / G : G + K > Na || (Oa = (1 - (Oa = (Na - G - K) / U)) * 3 ** (-q / 16 * Oa));
                  0 > yb || (yb -= 4 * Q, ta = 0.00396 * 2 ** ((Rb + D - 256) / 12), V = 0.00396 * 2 ** ((Rb + O - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Sb[Na] = 80 * (ec(cc += ta * Oa ** (h / 32)) * I + fc(dc += V * Oa ** (S / 32)) * t + (C ? (2 * Math.random() - 1) * C : 0)) * Oa | 0;
                }
                fa = Ob[fa] = Sb;
              }
              for (let V = 0, ta = 2 * Qb; fa.length > V; ++V, ta += 2) {
                La[ta] += fa[V];
              }
            }
          }
          for (let V, ta = 0; Q > ta; ++ta) {
            Ma = 0;
            fa = 2 * (Qb + ta);
            var ua = (((V = La[fa]) || ka) && (R = 0.00308 * E, 1 !== b && 4 !== b || (R *= Math.sin(ac * fa * Math.PI * 2) * X / 512 + 0.5), R = 1.5 * Math.sin(R), oa += R * Ka, ua = (1 - z / 255) * (V - Ka) - oa, Ka += R * ua, V = 4 === b ? Ka : 3 === b ? ua : oa, b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= B / 32, ka = 1e-5 < V * V, ua = Math.sin(bc * fa) * A / 512 + 0.5, Ma = V * (1 - ua), V *= ua), fa < xb || (Ma += La[1 + fa - xb] * N / 255, 
            V += La[fa - xb] * N / 255), u + fa >> 1);
            r[ua] += (La[fa] = Ma) / 65536;
            m[ua] += (La[++fa] = V) / 65536;
          }
        }
      }
      u += 768 * Q;
    }, y = Pa[b], [I, D, h, t, O, S, C, G, K, x, q, l, E, z, B, A, F, N, L, X] = Qa[b], U = 4 * x ** 2;
    w(5513);
    w(4562);
    w(3891);
    Wb(5 > ++b ? f : a);
  }, k = Eb.createBuffer(2, 5362944, 44100), r = k.getChannelData(0), m = k.getChannelData(1);
  Db.buffer = k;
  Db.loop = !0;
  Wb(f);
}, Eb = new AudioContext(), db = new DOMMatrix(), eb = new DOMMatrix(), bb = new Float32Array(16), Tb = new Float32Array(624), Ub = new Float32Array(624), Kb = new Uint8Array(65536), hc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Db = Eb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Wb(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const r = [new Float32Array(16), new Float32Array(16),], m = x => {
        Z.f1s();
        requestAnimationFrame(m);
        var q = (x - (aa || x)) / 1e3;
        if (va += q, c += d = ba ? 0 : Ua(0.066, q), aa = x, 0 < d) {
          ea();
          Ea && c > Ea && (Ea = 0, h4.innerHTML = "");
          e[0].i && 0.8 < e[0].g && (13 > wa ? (1 / 0 > Ea && (Ea = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), e[0].i = 0) : xa || (1 / 0 > Ea && (Ea = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), xa = 1));
          let z = 1;
          var l = () => fb(db, Fa[++z].m);
          q = (ra = ab(e[12].g, e[13].g), na = $a(P(na, 0, 1), Ya(na + 60 * d), e[5].g - e[6].h,), la = $a(P(la, 0, 5), Ya(la + 56 * d), ra,), ma = $a(P(ma, 0, 4), Ya(ma + 48 * d), ra,), qa = P(qa, e[9].h, 0.2 + 0.3 * g(2 * e[9].h - 1),), pa = P(pa, xa ? P(pa, -9, 1.5) : Xa(c / 3), 1,), Jb(l(), -12, 4.2, 40 * pa - 66), l().translateSelf(0, 0, -15).scaleSelf(1, Xa(1.22 - e[1].g), 1), l().translateSelf(0, 0, 15).scaleSelf(1, Xa(1.22 - e[2].g), 1), l().translateSelf(0, 0.01 < e[3].g ? (5 * Math.cos(1.5 * 
          c) + 2) * e[3].h * (1 - e[2].g) + -15 * (1 - e[3].g) : -500, 0,), Ua(e[2].h, 1 - e[4].h));
          x = (l().translateSelf(q * Math.sin(0.7 * 3 + 0.7 * c) * 12), l().translateSelf(q * Math.sin(3 + c) * 8.2), l().translateSelf(q * Math.sin(c / 1.5 + 2) * 12), l().translateSelf(9.8 * (1 - q)), Xa(1 - 5 * q) * ab(e[4].g, e[5].g));
          q = (l().translateSelf(0, x * Math.sin(1.35 * c) * 4), l().translateSelf(0, 0, x * Math.sin(0.9 * c) * 8), l().translateSelf(0, -6.5 * e[4].h), l().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + na, 0,), l().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, Xa(1.1 - e[6].g), 1), ab(e[7].h, e[6].h));
          x = (l().translateSelf(0, 3.5 * (1 - Va(e[6].g, e[7].g)) + q * Math.sin(c) * 5,), l().translateSelf(0, q * Math.sin(c + 3) * 6, 6 * Math.sin(0.6 * c + 1) * q), l().translateSelf(0, -7.3 * e[7].h), Jb(l(), -123, 1.4, 55 + -65 * qa), ab(e[10].g, e[11].g));
          q = (l().translateSelf(0, -2, x * g(Math.sin(1.1 * c)) * -8.5 + 10), l().translateSelf(0, -2, x * g(Math.sin(2.1 * c)) * -8.5 + 10), (1 - e[10].g) * (1 - x));
          x = (l().translateSelf(0, -2, -8.5 * Va(q, x * g(Math.sin(1.5 * c))) + 10), ab(e[8].h, e[12].h));
          for (q = 0; 4 > q; q++) {
            l().translateSelf((2 < q ? 2 * (1 - x) + x : 0) - 100, x * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7, 115 + (1 & q ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7 + Va(x, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),);
          }
          l().translateSelf(2.5 * (1 - x) - 139.7, -3 * (1 - e[8].g) + x * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * x + 3), 0);
          l().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g);
          l().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + la);
          l().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ma);
          l().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ma);
          l().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ma);
          x = ab(e[13].h, e[14].h);
          for (q = 0; 3 > q; ++q) {
            l().translateSelf(0, (1 - e[13].h) * (1 - e[14].h) * (q ? 0 : 3) + x * Math.sin(1.5 * c + 1.5 * q) * 4,);
          }
          l().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          q = ab(ab((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2,);
          l().translateSelf(0, 16 * q, 8.5 * Xa(2 * q - 1) + 95);
          sa(l);
          for (l = 0; z >= l; ++l) {
            cb(Fa[l].m, Tb, l - 1);
          }
          for (l = 0; 13 > l; ++l) {
            Ga[l].F(), cb(eb, Ub, l);
          }
          for (l = 0; 16 > l; ++l) {
            e[l].F(), cb(eb, Ub, l + 13), Ub[16 * l + 223] = 1 - e[l].g;
          }
          h();
          Z.b6o(36160, K);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          var {x, y:q, z:E} = Ia;
          Z.uae(h("b"), !1, cb(fb().rotateSelf(0, 180).invertSelf().translateSelf(-x, -q, 0.3 - E)),);
          Vb(h("c"), 0, 41);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(h("b"), !1, cb(fb().translateSelf(-x, -q, -E - 0.3)));
          Vb(h("c"), 0, 41);
          Z.f1s();
        }
        ca = 0;
        fb(db, u);
        ba ? u.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : u.rotateSelf(-Ra, -Sa).invertSelf().translateSelf(-Ba, -Ca, -Da,);
        I();
        Z.b6o(36160, C);
        Z.v5y(0, 0, 2048, 2048);
        S[0](54.7 * 1.1);
        S[1](126 * 1.1);
        t();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(t("a"), !1, cb(ha));
        Z.uae(t("b"), !1, cb(u));
        Z.uae(t("i"), !1, r[0]);
        Z.uae(t("j"), !1, r[1]);
        Z.ubu(t("k"), Ba, Ca, Da);
        Vb(t("c"), !da, 42);
        D();
        Z.ubu(D("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, va);
        Z.ubu(D("k"), Ba, Ca, Da);
        Z.uae(D("b"), !1, cb(fb(u).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, K);
        Z.f1s();
      }, u = new DOMMatrix(), w = new DOMMatrix(), y = f;
      var k = Mb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const I = Nb(Mb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), D = Nb(Mb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), h = Nb(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), t = Nb(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), O = hb(8, () => ({})), S = hb(2, x => {
        const q = Z.c25();
        return Z.a4v(33984 + x), Z.b9j(3553, q), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), l => {
          let E = 0, z = 0, B = 0, A = 1 / 0, F = -1 / 0, N = 1 / 0, L = -1 / 0, X = 1 / 0, U = -1 / 0;
          Z.fas(36160, 36096, 3553, q, 0);
          Z.c4s(256);
          fb().scale3dSelf(l).multiplySelf(fb(ia[x], w).multiplySelf(u).invertSelf(),);
          for (let Q = 0; 8 > Q; ++Q) {
            const M = O[Q], R = (M.x = 4 & Q ? 1 : -1, M.y = 2 & Q ? 1 : -1, M.z = 1 & Q ? 1 : -1, eb.transformPoint(M));
            E -= M.x = (0 | R.x) / l / R.w;
            z -= M.y = (0 | R.y) / l / R.w;
            B -= M.z = (0 | R.z) / l / R.w;
          }
          fb().rotateSelf(298, 139).translateSelf(E / 8, z / 8, B / 8);
          for (l = 0; 8 > l; ++l) {
            const {x:Q, y:M, z:R} = eb.transformPoint(O[l]);
            A = Ua(A, Q);
            F = Va(F, Q);
            N = Ua(N, M);
            L = Va(L, M);
            X = Ua(X, R);
            U = Va(U, R);
          }
          l = 10 + x;
          X *= 0 > X ? l : 1 / l;
          U *= 0 < U ? l : 1 / l;
          Z.uae(I("b"), !1, cb(fb(db, w).scaleSelf(2 / (F - A), 2 / (L - N), 2 / (X - U),).translateSelf((F + A) / -2, (L + N) / -2, (X + U) / 2).multiplySelf(eb), r[x],),);
          Vb(I("c"), !da, 42);
        };
      }), C = Z.c5w();
      k = Z.c25();
      const G = Z.c3z(), K = Z.c5w();
      h();
      Z.uae(h("a"), !1, cb(Cb(1e-4, 2, 1.4, 0.4)));
      t();
      Z.ubh(t("q"), 2);
      Z.ubh(t("h"), 1);
      Z.ubh(t("g"), 0);
      D();
      Z.ubh(D("q"), 2);
      Z.b6o(36160, C);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, K);
      Z.bb1(36161, G);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, G);
      Z.a4v(33986);
      Z.b9j(3553, k);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, k, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, y);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 0);
      NO_INLINE(Fb)();
      NO_INLINE(Lb)();
      requestAnimationFrame(m);
    }
  }, f = new Image();
  f.onload = f.onerror = b;
  f.src = hc;
  NO_INLINE(gc)(() => {
    Wb(() => {
      let m, u = 0;
      const w = [], y = [], I = [], D = [], h = G => {
        let {x:K, y:x, z:q} = m[G], l = (C[0] = K, C[1] = x, C[2] = q, G = "" + (m.C ? S : t), O.get(G));
        return void 0 !== l ? (K = 3 * l, D[K] = (D[K++] + t[5]) / 2, D[K] = (D[K++] + t[6]) / 2, D[K] = (D[K] + t[7]) / 2) : (O.set(G, l = O.size), y.push(K, x, q, C[3]), I.push(t[4]), D.push(t[5], t[6], t[7])), l;
      }, t = new Int32Array(8), O = new Map(), S = new Int32Array(t.buffer, 0, 5), C = new Float32Array(t.buffer);
      for (const G of Fa) {
        for (m of (C[3] = 40 === G.H ? -14 : G.G && G.H, G.o)) {
          const {x:K, y:x, z:q} = ob(m);
          t[4] = 0 | m.u;
          t[5] = 32767 * K;
          t[6] = 32767 * x;
          t[7] = 32767 * q;
          for (let l = 2, E = h(0), z = h(1); m.length > l; ++l) {
            w.push(E, z, z = h(l));
          }
        }
        G.o = null;
        G.s = u;
        G.D = u = w.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(y), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(D), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(I), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Wb(b);
      try {
        const [G, K, x, q] = JSON.parse(localStorage.DanteSP22);
        e.map((l, E) => l.g = l.h = l.i = E ? 0 | G[E] : 0);
        Ga.map((l, E) => l.i = 0 | K[E]);
        ya = x;
        c = q;
        d = 0;
      } catch {
      }
    });
    const k = hb(11, m => n(Math.sin(m / 10 * Math.PI), m / 10).rotate(+m).scale(1.0001 - m / 10, 0, 1 - m / 10),), r = hb(10, m => lb(jb(kb(18), k[m]).reverse(), jb(kb(18), k[m + 1]), 1,)).flat();
    Y(() => W([Ha.slice(1),], n(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const m = (h, t, O) => Y(() => {
        Ha.map(({x:S, z:C}) => {
          W(H(11, 1), n(4 * S, 4, O + 4 * C).scale(0.8, 3, 0.8), T(0.5, 0.3, 0.7, 0.6),);
          W(H(), n(4 * S, 7, O + 4 * C).scale(1, 0.3), T(0.5, 0.5, 0.5, 0.3));
        });
        W(J(v(H(), n(0, 0, O).scale(5, 1, 5), T(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(S => v(H(), n(5 * S, 0.2, O).rotate(-30 * S).scale(4, 1, 2), T(0.8, 0.8, 0.8, 0.3),)),),);
        W(H(), n(0, -3, O).scale(8, 2, 8), T(0.4, 0.4, 0.4, 0.3));
      }), u = h => J(v(H(), n(0, -h / 2).scale(6, h - 1, 2.2)), v(H(), n(0, -h / 2 - 6).scale(4, h - 3, 4)), v(H(32, 1), n(0, h / 2 - 9).rotate(90, 0, 90).scale3d(4)),), w = J(v(H(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), T(0.7, 0.4, 0.25, 0.7),), v(H(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), T(0.7, 0.4, 0.25, 0.2),), v(H(), n(4, -1.2).scale3d(2), T(0.7, 0.4, 0.25, 0.3)),), y = hb(7, h => v(H(6, 1), n(4 * (h / 6 - 0.5), 3).scale(0.2, 3, 0.2), T(0.3, 0.3, 0.38),)).flat(), I = (Y(() => {
        W(w);
        Hb(n(0, -3, 4));
      }), Hb(n(-5.4, 1.5, -19).rotate(0, -90)), Ib(n(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Ib(n(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...kb(18).map(({x:h, z:t}) => [7 * h, 10 * t, 4.5 - 2 * g(h),]),), W(H(), n(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), T(0.8, 0.8, 0.8, 0.2)), Ha.map(({x:h, z:t}) => W(H(6), n(3 * h, 3, 15 * t).scale(0.7, 4, 0.7), T(0.6, 0.3, 0.3, 0.4))), W(H(), n(0, 0, -23).scale(3, 1, 8), T(0.9, 0.9, 0.9, 0.2)), W(H(), n(0, 0, 22).scale(3, 1, 8), T(0.9, 0.9, 0.9, 0.2)), [-15, 
      15,].map(h => {
        W(H(), n(0, 6.3, h).scale(4, 0.3, 1), T(0.3, 0.3, 0.3, 0.4));
        W(H(), n(0, 1, h).scale(3, 0.2, 0.35), T(0.5, 0.5, 0.5, 0.3));
        Y(() => {
          W(y);
        });
      }), hb(5, h => hb(2, t => W(r, n(18.5 * (t - 0.5), 0, 4.8 * h - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2), T(1, 1, 0.8, 0.2),)),), W(H(), n(3, 1.5, -20).scale(0.5, 2, 5), T(0.7, 0.7, 0.7, 0.2)), W(H(), n(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), T(0.75, 0.75, 0.75, 0.2),), W(H(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), T(0.6, 0.3, 0.3, 0.4),), W(H(), gb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), T(0.8, 0.2, 0.2, 0.5),), W(J(zb(v(H(6, 0, 0, 0.3), 
      n(8, -3, -4).scale(13, 1, 13), T(0.7, 0.7, 0.7, 0.2),), v(H(6), n(0, -8).scale(9, 8, 8), T(0.4, 0.2, 0.5, 0.5)), v(H(6, 0, 0, 0.3), n(0, -0.92).scale(13, 2, 13), T(0.8, 0.8, 0.8, 0.2),),), v(H(5), p(5, 30, 5), T(0.4, 0.2, 0.6, 0.5)), v(H(5, 0, 1.5), n(0, 1).scale(4.5, 0.3, 4.5), T(0.7, 0.5, 0.9, 0.2),), v(H(), gb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), T(0.5, 0.5, 0.5, 0.5),), v(H(6), n(15, -1.5, 4).scale(3.5, 1, 3.5), T(0.5, 0.5, 0.5, 0.5),),),), Y(() => {
        W(H(5), n(0, -0.2).scale(5, 1, 5), T(0.6, 0.65, 0.7, 0.3));
        Hb(n(0, 1.2));
      }), Hb(n(15, -2, 4)), m(0, 0, 35), m(0, 0, 55), Y(() => {
        W(J(zb(v(H(), p(1.5, 1, 5), T(0.9, 0.9, 0.9, 0.2)), v(H(6), p(4, 1, 5), T(0.9, 0.9, 0.9, 0.2)), v(H(), n(0, -2).scale(2, 3.2, 1.9), T(0.3, 0.8, 0.5, 0.5),), v(H(16, 1, 0, 4), p(1, 1, 1.5).rotate(0, 90), T(0.9, 0.9, 0.9, 0.2),),), v(H(), p(1.3, 10, 1.3), T(0.2, 0.7, 0.4, 0.6)),), n(0, 0, 45),);
        Ib(n(0, 2.8, 45), [0, 0, 4.5,]);
      }), W(H(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2)), Y(() => {
        W(H(3), n(-23, -1.7, 55.8).scale(5, 0.7, 8.3), T(0.3, 0.6, 0.6, 0.2));
        W(H(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), T(0.8, 0.8, 0.8, 0.2));
        W(H(), n(-23, -3, 55).scale(5.2, 1.7, 3), T(0.5, 0.5, 0.5, 0.3));
        W(H(), n(-23, -2.2, 62).scale(3, 1, 4), T(0.5, 0.5, 0.5, 0.3));
        Hb(n(-23, -0.5, 66.5));
      }), Y(() => {
        W(H(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), T(0.7, 0.7, 0.7, 0.2));
        W(J(v(H(), p(3, 1.4, 2.7)), v(H(), p(1.2, 8, 1.2)),), n(-33, -3, 55), T(0.7, 0.7, 0.7, 0.2),);
      }), Y(() => {
        W(J(v(H(), n(-27, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2),), v(H(), n(-27, -3, 55).scale(1, 3), T(0.9, 0.9, 0.9, 0.2)),),);
        W(H(), n(-39, -3, 55).scale(3, 1.4, 2.7), T(0.9, 0.9, 0.9, 0.2));
      }), Y(() => {
        W(H(6), n(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), T(0.7, 0.7, 0.7, 0.4),);
      }), Hb(n(-55, -1.1, 46).rotate(0, 90)), W(H(6), n(-61.3, -2.4, 49).scale(3, 1, 5), T(0.4, 0.6, 0.6, 0.3)), W(H(7), n(-57, -2.6, 46).scale(4, 1, 4), T(0.8, 0.8, 0.8, 0.3)), [...v(H(), n(0, -3).scale(11, 1.4, 3), T(0.9, 0.9, 0.9, 0.2)), ...J(v(H(6), gb(90).scale(6, 8, 6), T(0.3, 0.6, 0.6, 0.3)), v(H(4, 0, 0.01), n(0, 6).scale(12, 2, 0.75).rotate(0, 45), T(0.3, 0.6, 0.6, 0.3),), v(H(6), gb(90).scale(5, 12, 5), T(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(h => v(H(5), n(h, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), T(0.3, 0.6, 0.6, 0.3),)),),]), D = (W(I, n(-53, 0, 55)), Y(() => {
        W(I);
      }, 2), W(H(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), T(0.7, 0.7, 0.7, 0.2),), W(H(3, 0, -0.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), T(0.8, 0.8, 0.8, 0.2),), W(J(zb(v(H(), n(-100, -2.4, 55).scale(8, 0.9, 8), T(0.8, 0.8, 0.8, 0.2),), v(H(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), T(0.8, 0.8, 0.8, 0.2),), v(H(), n(-100, -2.6, 70).scale(3, 1.1, 7), T(0.8, 0.8, 0.8, 0.2),), v(H(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), T(0.8, 0.8, 0.8, 0.2),), 
      v(H(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), T(0.6, 0.6, 0.6, 0.3),), v(H(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), T(0.8, 0.8, 0.8, 0.2),), v(H(), n(-100, 0.42, 92).scale(3, 1.1, 4.1), T(0.8, 0.8, 0.8, 0.2),),), v(H(8), n(-100, -1, 55).scale(7, 0.9, 7), T(0.3, 0.3, 0.3, 0.4),), v(H(8), n(-100, -2, 55).scale(4, 0.3, 4), T(0.4, 0.4, 0.4, 0.5),), v(H(8, 0, -3.1), n(-100, -3, 55).scale(0.4, 1, 0.4), T(0.4, 0.4, 0.4, 0.5),),),), Ib(n(-100, 0.2, 55), [0, 0, 7.5,], 
      [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Ib(n(-89, 0.2, 80), [0, 0, 6,]), W(J(v(H(), n(-100, 1, 63).scale(7.5, 4), T(0.5, 0.5, 0.5, 0.4)), v(H(), n(-100, 0, 70).scale(2, 2, 10), T(0.5, 0.5, 0.5, 0.4),), v(H(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), T(0.5, 0.5, 0.5, 0.4),),),), Y(() => {
        W(y);
      }), Ha.map(({x:h, z:t}) => {
        W(H(6), n(7 * h - 100, -3, 7 * t + 55).scale(1, 8.1), T(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(O => W(H(6), n(7 * h - 100, O, 7 * t + 55).scale(1.3, 0.5, 1.3), T(0.4, 0.2, 0.2, 0.8),));
      }), hb(7, h => {
        W(H((23 * h + 1) % 5 + 5, 0, 0.5), n(5 * Math.sin(h) - 101 + h, -2.3 - h, 44.9 - 2.8 * h).scaleSelf(5 + h / 2, 1 + h / 6, 5 + h / 3,), T(0.5 - h / 17, 0.5 - (1 & h) / 9, 0.6, 0.3),);
      }), W(H(), n(-87, -9.5, 24).scale(7, 1, 3), T(0.4, 0.5, 0.6, 0.4)), W(H(4), n(-86, -9.2, 27).scale(5, 1, 5), T(0.5, 0.6, 0.7, 0.3)), W(H(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), T(0.3, 0.3, 0.4, 0.1)), Hb(n(-86, -7.5, 31)), Y(() => {
        [0, 12, 24,].map(h => W(H(), n(h - 76.9, h / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), T(0.2, 0.5, 0.6, 0.2),));
      }), Y(() => {
        [6, 18,].map(h => W(H(), n(h - 76.9, h / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), T(0.1, 0.4, 0.5, 0.2),));
      }), W(J(zb(v(H(5), n(0, 0, -7).scale(2, 1.2, 2), T(0.2, 0.4, 0.7, 0.3),), v(H(5), p(9, 1.2, 9), T(0, 0.2, 0.3, 0.5)), v(H(), p(11, 1, 13), T(0.3, 0.4, 0.6, 0.3)),), v(H(5), p(5.4, 5, 5.4), T(0, 0.2, 0.3, 0.5)),), n(-38.9, -11.3, 17),), Hb(n(-38.9, -9.6, 10)), Y(() => {
        W(J(zb(v(H(5), n(0, 2).scale(5, 7, 5).skewY(8), T(0.2, 0.4, 0.5, 0.5),), v(H(5), n(0, 6).scale(1.1, 7, 1.1).skewY(-8), T(0.25, 0.35, 0.5, 0.5),), v(H(5), n(0, 9).scale(0.6, 7, 0.6).skewY(8), T(0.35, 0.3, 0.5, 0.5),),), v(H(5), p(4, 8, 4), T(0.2, 0.4, 0.5, 0.5)), v(H(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), T(0.2, 0.4, 0.5, 0.5),),), n(-38.9, -11.3, 17),);
        Ib(n(-39.1, -0.6, 17).rotate(11), ...kb(15).map(({x:h, z:t}) => [3 * h, 3 * t, 1.2,]),);
      }), Ha.map(({x:h, z:t}) => {
        W(H(14, 1), n(9 * h - 38.9, -7.3, 11 * t + 17).scale(1, 4), T(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(O => W(H(17, 1), n(9 * h - 38.9, O - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), T(0.6, 0.6, 0.6, 0.3),));
      }), W(J(zb(v(H(6), n(0, 0, -36).scale(15, 1.2, 15), T(0.7, 0.7, 0.7, 0.3),), v(H(), n(0, 0, -18).scale(4, 1.2, 6), T(0.45, 0.4, 0.6, 0.3),),), ...hb(6, h => hb(6, t => v(H(6), n(4.6 * t - 12 + 2 * (1 & h), 0, 4.6 * h - 50 + 2 * Math.sin(4 * t)).scale(2, 5, 2), T(0.7, 0.7, 0.7, 0.3),))).flat(),), n(-38.9, -11.3, 17),), Ib(n(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), W(H(5), n(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), T(0.8, 0.1, 0.25, 0.4),), Hb(n(-84, -0.5, 85).rotate(0, 
      45)), Y(() => {
        W(w);
        Hb(n(0, -3, -4).rotate(0, 180));
      }), J(v(H(), n(0, -0.5, 1).scale(1.15, 1.2, 6.5), T(0.25, 0.25, 0.35, 0.3),), v(H(3), n(0, 0, -5.5).scale(3, 2), T(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(h => v(H(), n(h, -0.5, 1).scale(0.14, 0.3, 6.5), T(0.7, 0.2, 0, 0.3),)),));
      Y(() => {
        hb(2, h => W(D, n(9 * h - 110 + (1 & h), 1.7, -12)));
      });
      Y(() => {
        hb(2, h => W(D, n(9 * (h + 2) - 110 + (1 & h), 1.7, -12)));
      });
      Y(() => {
        hb(3, h => W(D, n(9 * h - 106, 1.7, -12)));
      });
      W(J(zb(v(H(), n(26.5, -1.6, 10).scale(20, 2.08, 3)), v(H(), n(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...hb(4, h => v(H(), n(13 + 9 * h + (1 & h), -0.8, 9).scale(1.35, 1.35, 9)),), ...hb(3, h => v(H(), n(17 + 9 * h, -0.8, 9).scale(1.35, 1.35, 9)),),), n(-123, 0, -12), T(0.5, 0.5, 0.6, 0.2),);
      Hb(n(-116, -1.4, -18).rotate(0, 180));
      W(H(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), T(0.8, 0.8, 0.8, 0.2),);
      W(H(6), n(-116, -2.6, -16.5).scale(3.2, 0.8, 3), T(0.6, 0.5, 0.7, 0.2));
      W(H(), n(-115.5, -17, -12).scale(0.5, 15, 2.2), T(0.6, 0.6, 0.6, 0.3));
      W(H(8), n(-114, -17, -2).scale(2, 15, 2), T(0.6, 0.6, 0.6, 0.3));
      W(H(8), n(-79, -17, -2).scale(2, 15, 2), T(1, 1, 1, 0.3));
      W(H(), n(-77, -17, -50.5).scale(2.2, 15, 0.5), T(0.6, 0.6, 0.6, 0.3));
      hb(3, h => {
        W(u(16), n(12 * h - 109, -9, -12), T(0.6, 0.6, 0.6, 0.3));
        W(u(16), n(-77, -9, -12 * h - 20).rotate(0, 90), T(0.6, 0.6, 0.6, 0.3),);
      });
      W(J(v(H(12), n(-77, -14.5, -12).scale(4, 17.5, 4), T(0.7, 0.7, 0.7, 0.2),), v(H(), n(-79, 0.1, -12).scale(3.5, 2, 1.3), T(0.4, 0.5, 0.6, 0.2),), v(H(), n(-77, 0.1, -14).scale(1.5, 2, 2), T(0.4, 0.5, 0.6, 0.2),), v(H(12), n(-77, 3.1, -12).scale(3, 5, 3), T(0.4, 0.5, 0.6, 0.2),),),);
      W(H(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), T(0.6, 0.6, 0.6, 0.3),);
      W(H(9), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), T(0.5, 0.5, 0.5, 0.3));
      W(J(v(H(), n(-93, -5.8, -40).scale(9, 1, 5), T(0.8, 0.8, 0.8, 0.1),), v(H(9), n(-98, -5.8, -40).scale(3, 8, 3), T(0.7, 0.7, 0.7, 0.2),),),);
      Hb(n(-98, -4.4, -40).rotate(0, 90));
      Ib(n(-115, 0.2, -12), [0, 0, 3.5,]);
      Ib(n(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      W(J(zb(v(H(6, 0, 0, 0.6), n(-100, 0.7, 105.5).scale(8, 1, 11), T(0.7, 0.7, 0.7, 0.2),), v(H(), n(-101.5, 0.7, 93.5).scale(10.5, 1, 2), T(0.7, 0.7, 0.7, 0.2),),), v(H(5), n(-100, 0.7, 113).scale(4, 3, 4), T(0.7, 0.7, 0.7, 0.2),),),);
      hb(4, h => Y(() => {
        W(H(6), n(-14.6 - 4.8 * h - (2 < h ? 2 : 0), -h / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), T(0.5 - h / 8, h / 12 + 0.5, 0.7, 0.3),);
      }));
      Y(() => {
        W(J(v(H(10), p(6, 2, 6), T(0.1, 0.6, 0.5, 0.3)), v(H(10), p(3.3, 6, 3.3), T(0.1, 0.6, 0.5, 0.5)),),);
        W(H(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), T(0.4, 0.4, 0.4, 0.3),);
        W(H(10), n(-7.5).rotate(0, 90).scale(2, 2.5, 2), T(0.3, 0.8, 0.7, 0.3));
        W(H(5), n(-7.5).rotate(0, 90).scale(1, 3), T(0.5, 0.5, 0.5, 0.5));
        Hb(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(h => W(r, gb(90 * h, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), T(1, 1, 0.8, 0.2),));
        Ib(n(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      Y(() => {
        W(y);
      });
      [-1, 1,].map(h => {
        [7.2, 1.5,].map(t => W(H(15, 1), n(-7.5 * h - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), T(0.5, 0.24, 0.2, 0.4),));
        W(r, n(-5 * h - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * h - 90), T(1, 1, 0.8),);
        W(H(12, 1), n(-7.5 * h - 100, 3.7, 96).scale(0.8, 4, 0.8), T(0.6, 0.24, 0.2, 0.5),);
        W(J(v(H(), n(-4 * h, 3.5, -0.5).scale(4, 4, 0.7), T(0.5, 0.5, 0.5, 0.4),), v(H(), p(3, 3, 10), T(0.6, 0.24, 0.2, 0.5)), v(H(28, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), T(0.6, 0.24, 0.2, 0.5),), v(H(5), n(-5.3 * h, 7).rotate(90, 0).scale(1.7, 5, 1.7), T(0.6, 0.24, 0.2, 0.5),), v(H(5), n(-5.3 * h, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), T(0.6, 0.24, 0.2, 0.5),),), n(h - 100, 0.7, 97),);
      });
      W(J(v(H(), n(-82.07, 0.8, 106).scale(11, 0.9, 2.2), T(0.7, 0.7, 0.7, 0.1),), v(H(45, 1), n(-81, 0.7, 106).scale3d(7.7), T(0.7, 0.7, 0.7, 0.1),),),);
      Y(() => {
        W(J(v(H(45, 1), p(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)), v(H(), n(0, 0, -5.5).scale(1.5, 3, 2.7), T(0.45, 0.45, 0.45, 0.2),),),);
        W(H(8), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), T(0.7, 0.7, 0.7, 0.1));
        W(H(5), n(0, 2).scale(1, 2), T(0.3, 0.3, 0.3, 0.2));
        Ib(n(0, 3), ...kb(14).map(({x:h, z:t}) => [5.6 * h, 5.6 * t, 2,]),);
      });
      Y(() => {
        [-1, 1,].map(h => W(r, gb(0, 90).translate(-5 * h, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), T(1, 1, 0.8),));
        W(J(v(H(28, 1), n(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3),), v(H(), p(9, 5, 2), T(0.3, 0, 0, 0.3)),),);
        W(v(H(28, 1), p(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        W(v(H(5), n(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(() => {
        W(J(v(H(28, 1), n(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3),), v(H(), n(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)), v(H(), n(0, 0, 7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),),);
        W(v(H(28, 1), p(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        W(v(H(5), n(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(() => {
        W(J(v(H(28, 1), n(0, 2).scale(7.5, 1, 7.5), T(0.35, 0, 0, 0.3),), v(H(), n(7).scale(9, 5, 2), T(0.3, 0, 0, 0.3)), v(H(), n(0, 0, -7).scale(2, 5, 9), T(0.3, 0, 0, 0.3)),),);
        W(v(H(28, 1), p(7.5, 1, 7.5), T(0.45, 0.45, 0.45, 0.2)));
        W(v(H(5), n(0, 1).scale(1, 0.2), T(0.3, 0.3, 0.3, 0.2)),);
      });
      W(H(), n(-58, 1, 106).scale(2, 0.65, 2), T(0.7, 0.7, 0.7, 0.2));
      W(H(), n(-50.7, 1, 99).scale(2, 0.65, 1), T(0.7, 0.7, 0.7, 0.2));
      W(H(), n(-42, 0.4, 91).scale(5, 1, 2.5), T(0.7, 0.7, 0.7, 0.3));
      W(H(), n(-34.2, 0.4, 91).scale(3, 1, 3), T(0.7, 0.7, 0.7, 0.3));
      Hb(n(-34, 2.7, 96).rotate(-12, 0));
      W(H(5), n(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), T(0.2, 0.5, 0.5, 0.6),);
      [T(0.1, 0.55, 0.45, 0.2), T(0.2, 0.5, 0.5, 0.3), T(0.3, 0.45, 0.55, 0.4),].map((h, t) => Y(() => {
        W(H(), n(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), h);
        2 === t && W(H(), n(-29.1, 0.4, 91).scale(2.1, 1, 3), T(0.7, 0.7, 0.7, 0.3));
        1 === t && W(H(), n(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), T(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(h => W(r, n(-8 * h, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * h + 90), T(1, 1, 0.8),));
      hb(3, h => W(u(24.7 - 0.7 * (1 & h)), n(6 * h - 6, 4 - (1 & h), 111 - 0.2 * (1 & h)), 1 & h ? T(0.5, 0.5, 0.5, 0.3) : T(0.35, 0.35, 0.35, 0.5),));
      W(J(v(H(6, 0, 0, 0.3), n(0, -0.92, 95).scale(14, 2, 14), T(0.8, 0.8, 0.8, 0.2),), v(H(5), n(0, 0, 95).scale3d(6), T(0.3, 0.3, 0.3, 0.5)),),);
      Hb(n(0, 1.7, 82).rotate(0, 180));
      W(H(5), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), T(0.5, 0.3, 0.3, 0.4),);
      W(H(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), T(0.5, 0.6, 0.7, 0.3),);
      W(H(), n(0, 16, 129).scale(1.5, 1, 2), T(0.5, 0.6, 0.7, 0.3));
      W(H(7), n(0, 16.2, 133).scale(5, 1, 5), T(0.4, 0.5, 0.6, 0.4));
      W(J(zb(v(H(), n(0, 16, 110.5).scale(12, 1, 3), T(0.5, 0.3, 0.3, 0.4),), v(H(), n(0, 16, 111).scale(3, 1, 3.8), T(0.5, 0.3, 0.3, 0.4),),), v(H(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), T(0.5, 0.3, 0.3, 0.4),),),);
      Y(() => {
        W(H(3), n(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), T(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(h => {
          W(H(6), n(0, 16, h + 95).scale(3, 1, 2.3).rotate(0, 90), T(0.7, 0.7, 0.7, 0.4),);
          W(H(), n(0, 6.2, h + 95).scale(0.5, 11, 0.5), T(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Y(() => {
        W(H(5), p(5, 1.1, 5), T(0.5, 0.3, 0.3, 0.4));
        W(H(5), p(5.5, 0.9, 5.5), T(0.25, 0.25, 0.25, 0.4));
        Hb(n(0, 1.5, -1).rotate(0, 180));
      });
      Ib(n(0, 3, 95), ...kb(9).map(({x:h, z:t}) => [9 * h, 9 * t, 4,]),);
      Ib(n(0, 19, 134), [0, 0, 3.5,]);
    });
    Y(() => {
      W(mb(20), n(0, 1).scale3d(0.5), T(1, 0.3, 0.4));
      W(mb(30), p(0.65, 0.8, 0.55), T(1, 0.3, 0.4));
      W(H(), n(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), T(0.3, 0.3, 0.3));
      [-1, 1,].map(m => {
        W(r, gb(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), T(1, 1, 0.8),);
        W(v(J(H(15, 1), v(H(), n(0, 0, 1).scale(2, 2, 0.5)),), gb(-90, 0).scale(0.1, 0.05, 0.1), T(0.3, 0.3, 0.3),), n(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),);
        Y(() => {
          W(H(20, 1), n(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), T(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      W(H(6, 1), p(0.13, 1.4, 0.13), T(0.3, 0.3, 0.5, 0.1));
      W(H(10), n(0, 1).scale(0.21, 0.3, 0.21), T(1, 0.5, 0.2));
      W(H(3), n(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), T(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Y(() => {
      W(H(6).slice(0, -1), p(0.77, 1, 0.77), T(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      W(mb(30, 24, (m, u, w) => {
        const y = u / 24, I = m * Math.PI * 2 / 30, D = Math.sin(y ** 0.6 * Math.PI / 2);
        m = y * y * Math.sin(m * Math.PI * 14 / 30) / 4;
        return 23 < u ? {x:w.C = 0, y:-0.5, z:0,} : {x:Math.cos(I) * D, y:Math.cos(y * Math.PI) - y - m, z:Math.sin(I) * D + Math.sin(m * Math.PI * 2) / 4,};
      }), p(0.7, 0.7, 0.7), T(1, 1, 1),);
      [-1, 1,].map(m => W(mb(12), n(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

