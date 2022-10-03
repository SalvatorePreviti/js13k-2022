let aa, ba, ca, da, ea, ha, ja, ka, la, na, oa, pa, qa, ra, va, c = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 1, d = 0.066;
const Ga = [], e = [], La = [], Ma = Math.PI / 180, Na = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Oa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Pa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Qa = 0, Ra = 180;
const Sa = {x:0, y:0, z:0,}, h = NO_INLINE(a => 0 > a ? -a : a), Ta = NO_INLINE((a, b) => a < b ? a : b), Ua = NO_INLINE((a, b) => b < a ? a : b), Va = (a, b) => h(a) > b ? a : 0, m = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a, Wa = a => Math.atan2(Math.sin(a * Ma), Math.cos(a * Ma)) / Ma, Xa = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * m(f) || 0, Ya = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0, Za = (a, b) => (a = m(a), Ya(a, 1 - a, b)), ab = (a, b = $a, f = 0,) => 
(f *= 16, b[f++] = a.m11, b[f++] = a.m12, b[f++] = a.m13, b[f++] = a.m14, b[f++] = a.m21, b[f++] = a.m22, b[f++] = a.m23, b[f++] = a.m24, b[f++] = a.m31, b[f++] = a.m32, b[f++] = a.m33, b[f++] = a.m34, b[f++] = a.m41, b[f++] = a.m42, b[f++] = a.m43, b[f] = a.m44, b), eb = (a = bb, b = db,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, 
b.m43 = a.m43, b.m44 = a.m44, b), q = NO_INLINE((a, b, f) => bb.translate(a, b, f)), fb = NO_INLINE((a, b, f) => bb.rotate(a, b, f)), w = NO_INLINE((a, b, f) => bb.scale(a, b, f)), gb = (a, b) => Array.from(Array(a), (f, k) => b(k)), hb = (a, b, f) => (a.C = f, a.u = b, a), ib = (a, b, f = a.u) => hb(a.map(k => {
  let r, l;
  return {x:k, y:r, z:l} = k, {x:k, y:r, z:l} = b.transformPoint({x:k, y:r, z:l,}), {x:k, y:r, z:l,};
}), f, a.C,), F = (a, b, f) => a.map(k => ib(k, b, f)), jb = (a, b = 0) => gb(a, f => {
  const k = Math.cos(2 * Math.PI * f / a);
  return {x:Math.sin(2 * Math.PI * f / a), y:0, z:0.01 > h(k) ? k : 0 > k ? k - b : k + b,};
}), kb = (a, b, f) => a.map((k, r, {length:l}) => hb([k, b[l - r - 1], b[l - (r + 1) % l - 1], a[(r + 1) % l],], a.u, f,)), M = (a, b, f = 0, k,) => (a = a ? jb(a, k) : Na, k = ib(a, q(0, 1).scale3d(0 < f ? f : 1)), a = ib(a, q(0, -1).scale3d(0 > f ? -f : 1)).reverse(), [...kb(a, k, b), k, a,]), lb = (a, b = a, f = (k, r) => (r *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(r), y:Math.cos(r), z:Math.sin(k) * Math.sin(r),})) => {
  const k = [];
  for (let r = 0; a > r; r++) {
    for (let l = 0; b > l; l++) {
      const v = hb([], 0, 1);
      k.push(v);
      v.push(f(r, l, v));
      l && v.push(f((r + 1) % a, l, v));
      b - 1 > l && v.push(f((r + 1) % a, l + 1 % b, v));
      v.push(f(r, l + 1 % b, v));
    }
  }
  return k;
}, mb = ({x:a, y:b, z:f}, k) => a * k.x + b * k.y + f * k.z, nb = a => {
  let b, f = 0, k = 0, r = 0, l = a.at(-1);
  for (b of a) {
    f += (l.y - b.y) * (l.z + b.z), k += (l.z - b.z) * (l.x + b.x), r += (l.x - b.x) * (l.y + b.y), l = b;
  }
  return b = Math.hypot(f, k, r), f /= b, k /= b, r /= b, {x:f, y:k, z:r, w:f * l.x + k * l.y + r * l.z,};
}, ob = (a, b) => {
  var f, k, r, l = b.B;
  for (var v = 0; l.length > v; ++v) {
    if (-0.00008 > (f = mb(a, l[v]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
      k = [];
      r = [];
      l = b.B;
      v = b.v;
      let x = l.at(-1), A = mb(a, x) - a.w;
      for (const C of l) {
        f = mb(a, C) - a.w, 8e-5 > A && r.push(x), -0.00008 < A && k.push(x), (8e-5 < A && -0.00008 > f || -0.00008 > A && 8e-5 < f) && (A /= f - A, x = {x:x.x + (x.x - C.x) * A, y:x.y + (x.y - C.y) * A, z:x.z + (x.z - C.z) * A,}, k.push(x), r.push(x)), x = C, A = f;
      }
      return {l:2 < k.length && {B:hb(k, l.u, l.C), v, A:b,}, j:2 < r.length && {B:hb(r, l.u, l.C), v, A:b,},};
    }
  }
  return {l:k, j:r,};
}, pb = (a, b, f = nb(b.B)) => {
  let k, r, l;
  return a ? ({l:k, j:r} = ob(a, b), k || r || a.o.push(b), k && (a.l = pb(a.l, k, f)), r && (a.j = pb(a.j, r, f))) : ({x:k, y:r, z:f, w:l} = f, a = {x:k, y:r, z:f, w:l, o:[b,], l:0, j:0,}), a;
}, qb = (a, b, f) => {
  const k = [], r = (l, v) => {
    let {l:x, j:A} = ob(l, v);
    x || A || (0 < f * mb(l, b) ? x = v : A = v);
    x && (l.l ? r(l.l, x) : k.push(x));
    A && l.j && r(l.j, A);
  };
  for (const l of b.o) {
    r(a, l);
  }
  return k;
}, rb = (a, b) => a && (b(a), rb(a.l, b), rb(a.j, b)), ub = a => (rb(a, b => {
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
}), a), vb = a => a.length ? a.reduce((b, f) => pb(b, {B:f, v:0, A:0,}), 0) : a, wb = (...a) => a.reduce((b, f) => {
  const k = [];
  if (b = vb(b), f) {
    f = vb(f);
    rb(b, r => r.o = qb(f, r, 1));
    rb(f, r => k.push([r, qb(b, r, -1),]));
    for (let [r, l] of k) {
      for (const v of l) {
        pb(b, v, r);
      }
    }
  }
  return b;
}), S = (a, ...b) => {
  const f = l => {
    let v;
    return l.A && ((v = k.get(l.A)) ? (r.delete(v), l = f(l.A)) : k.set(l.A, l)), l;
  }, k = new Map(), r = new Map();
  return a = ub(wb(ub(vb(a)), ...b)), rb(a, l => {
    for (const v of l.o) {
      r.set(f(v), v.v);
    }
  }), Array.from(r, ([{B:l}, v]) => {
    const x = l.map(({x:A, y:C, z}) => ({x:A, y:C, z,}));
    return hb(v ? x.reverse() : x, l.u, l.C);
  });
}, xb = NO_INLINE((a, b, f) => Ya(a, b, 1 - Math.exp(-f * d))), Ab = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][xa = Ga.reduce((a, {i:b}) => a + b, 0)] + " / XIII";
}, Bb = () => {
  localStorage.DanteSP22 = JSON.stringify([e.map(({i:a}) => a), Ga.map(({i:a}) => a), za, c, da,]);
}, Cb = (a, b, f, k) => new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Fb = () => {
  let a, b, f, k, r, l, v, x, A, C, z, g, u, H, O = !0;
  const J = [], P = () => {
    b4.innerHTML = "Music: " + O;
    ba || !O ? Db.disconnect() : Db.connect(Eb.destination);
  }, Q = () => {
    const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ka = Cb(0.3, 181, p, 1.732051);
    la = [Cb(0.3, 55, p, 1.732051), Cb(55, 181, p, 1.732051),];
    k = x = void 0;
    J.length = ea = H = g = u = Aa = Ba = 0;
  }, t = (p, n = 0) => {
    if (ba !== p) {
      ba = p;
      ha = n;
      Q();
      document.body.className = p ? "l m" : "l";
      try {
        p ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Db.start());
      } catch {
      }
      P();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => t(!1);
  b2.onclick = () => t(!1, 1);
  b5.onclick = () => t(!0);
  b4.onclick = () => {
    O = !O;
    P();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = p => {
    if (!ba && (p.target === hC && (ea = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = p => {
    let n;
    p.repeat || (n = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[p.code], (J[n] = !!p.type[5] && !0) && (0 === n && (ea = 1), 1 === n && t(!0)));
  };
  onmousemove = ({movementX:p, movementY:n}) => {
    ha && (p || n) && (Ra += 0.1 * p, Qa += 0.1 * n);
  };
  hC.ontouchstart = p => {
    if (!ba) {
      for (let {pageX:n, pageY:I, identifier:E} of p.changedTouches) {
        ha && n > hC.clientWidth / 2 ? void 0 === x && (A = 0, l = n, v = I, x = E, C = Ra, z = Qa) : void 0 === k && (r = 0, b = n, f = I, k = E);
      }
      a = wa;
    }
  };
  hC.ontouchmove = p => {
    if (!ba) {
      for (let {pageX:B, pageY:y, identifier:K} of p.changedTouches) {
        var n, I, E, D;
        x === K && (Ra = C + (B - l) / 2.3, Qa = z + (y - v) / 2.3, A = 1);
        k === K && (K = (b - B) / 20, n = h(K), I = (f - y) / 20, E = h(I), (D = 0.5 < Ua(n, E)) && (r = 1), g = (D && 0.2 < n) * m(K, -1), u = (D && 0.2 < E) * m(I, -1), 2 < n && (b = B + 20 * (0 > K ? -1 : 1)), 2 < E && (f = y + 20 * (0 > I ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = p => {
    let n;
    document.activeElement === document.body && p.preventDefault();
    for (const I of p.changedTouches) {
      I.identifier === x ? (x = void 0, A || (n = 1), A = 0) : I.identifier === k ? (k = void 0, u = g = 0, r || (n = 1), r = 0) : n = 1;
    }
    p.target === hC && n && a && 0.02 < (p = wa - a) && 0.7 > p && (ea = 1);
  };
  ja = () => {
    Aa = u + (J[4] ? 1 : 0) - (J[5] ? 1 : 0);
    Ba = g + (J[2] ? 1 : 0) - (J[3] ? 1 : 0);
    var p = navigator.getGamepads()[0];
    if (p) {
      const n = E => I[E]?.pressed || 0 < I[E]?.value ? 1 : 0, I = p.buttons;
      p = p.axes;
      ha && (Qa += d * Va(p[3], 0.3) * 80, Ra += d * Va(p[2], 0.3) * 80);
      Aa += n(12) - n(13) - Va(p[1], 0.2);
      Ba += n(14) - n(15) - Va(p[0], 0.2);
      n(9) && t(!0);
      (p = n(3) || n(2) || n(1) || n(0)) && !H && (ea = 1);
      H = p;
    }
  };
  document.onvisibilitychange = onblur = onresize = Q;
  t(!0);
}, U = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a), X = (a, b = new DOMMatrix(), f) => na.o.push(...F(a, b, f)), Y = (a, b = 1) => {
  const f = na;
  La.push(na = {m:new DOMMatrix(), G:b, o:[],},);
  a();
  na = f;
}, Gb = a => (a = a.transformPoint(), Math.hypot(Sa.x - a.x, Sa.y - a.y, Sa.z - a.z,)), Hb = a => {
  const b = na, f = e.length, k = {i:0, g:0, h:0, m:b.m, H:a, F() {
    k.g = xb(k.g, k.i, 4);
    k.h = xb(k.h, k.i, 1);
    eb(b.m).multiplySelf(a);
    ea && 3 > Gb(db) && (0.3 > k.g || 0.7 < k.g) && (k.i = k.i ? 0 : 1, f && 1 / 0 > Fa && (Fa = c + 1, h4.innerHTML = "* click *"), za = f, Bb());
    !f && k.i && 0.8 < k.g && (k.i = 0, 13 > xa ? 1 / 0 > Fa && (Fa = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!") : ya || (1 / 0 > Fa && (Fa = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ya = 1));
    db.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  e.push(k);
  X(M(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  X(M(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  X(M(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
}, Ib = (a, ...b) => {
  let f, k, r, l = -1, v = 0, x = 0, A = 1, C = 3;
  const z = {i:0, F() {
    if (!z.i) {
      let D, B, y, K, L, V, N, G = 1, T = 1 / 0;
      for (const R of g) {
        var {x:p, z:n, w:I} = R;
        n = (p = Math.hypot(H - p, O - n)) - I;
        N ||= p < I;
        0 < n && T > n && (T = n, u = R);
        G = Ta(G, p / I);
      }
      N || ({x:E, z:D, w:B} = u, y = H - E, K = O - D, L = Math.hypot(y, K), V = Math.atan2(-K, y), A && (x = (Math.random() - 0.5) * Math.PI / 2, C = m(C / (1 + Math.random()))), V += x, l = -Math.cos(V), v = Math.sin(V), 0.1 < L && (L = Ta(L, B) / (L || 1), H = y * L + E, O = K * L + D));
      A = N;
      C = xb(C, 6 * (1 - G) + 3, G + 3);
      J = xb(J, H = xb(H, H + l, C), C);
      P = xb(P, O = xb(O, O + v, C), C);
      f = Xa(f, Math.atan2(J - k, P - r) / Ma - 180, 1 - Math.exp(-3 * d),);
      if (1.6 > Gb(eb(Q).multiplySelf(a).translateSelf(k = J, 0, r = P).rotateSelf(0, f, 7 * Math.sin(1.7 * c)),)) {
        z.i = 1;
        var E = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][xa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        1 / 0 > Fa && (Fa = c + (xa && 12 > xa ? 5 : 7), h4.innerHTML = E);
        Ab();
        Bb();
      }
    }
    z.i && eb(La[2].m).translateSelf(t % 4 * 1.2 - 1.7 + Math.sin(c + t) / 7, -2, 1.7 * (t / 4 | 0) - 5.5 + h(t % 4 - 2) + Math.cos(c / 1.5 + t) / 6,);
  },}, g = b.map(([p, n, I]) => ({x:p, z:n, w:I,}));
  let u = g[0], {x:H, z:O} = u, J = H, P = O;
  const Q = na.m, t = Ga.length;
  Ga.push(z);
}, Jb = (a, b, f, k) => {
  a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
}, Lb = () => {
  let a, b, f, k, r, l, v, x, A, C, z, g, u, H, O = 1, J = 2, P = 15;
  const Q = {x:0, y:0, z:0,}, t = () => (J ? e[za] : La[b && 1 === La[b].G && b || 0]).m, p = D => {
    const {x:B, y, z:K} = 1 < J ? eb(e[za].m).multiplySelf(e[za].H).transformPoint({x:0, y:za || 0.9 < ca ? 15 : 1, z:-2.4,}) : t().transformPoint(Q);
    D && (v = (B - Sa.x) / d, x = (K - Sa.z) / d);
    Sa.x = B;
    Sa.y = y;
    Sa.z = K;
  }, n = (D, B, y) => {
    eb(t()).invertSelf();
    db.m41 = db.m42 = db.m43 = 0;
    D = db.transformPoint({x:D, z:y, w:0,});
    Q.x += D.x;
    Q.y += B;
    Q.z += D.z;
    p();
  }, I = () => {
    var D = 0, B = 0, y = 0;
    let K = 0;
    var L = -1;
    let V = 0, N = 0;
    for (var G = 0; 36 > G; ++G) {
      var T = 512 * G;
      for (var R = 96; 416 > R; R += 4) {
        for (var sa = 0; 2 > sa; ++sa) {
          var ia = Kb[T + R + sa], ma = Kb[T + R + sa + 2];
          ia > K && (K = ia);
          ia + ma && (0 > L || L === G) && (L = G, ma === a ? ++D : B && B !== ma || (B = ma, ++y));
        }
      }
    }
    a = 0 > L ? 0 : y > 2 * D ? B : a;
    for (D = 36; 128 > D; D += 1) {
      G = L = y = B = 0;
      T = 512 * D;
      for (R = 0; 128 > R; R += 1) {
        for (sa = T + 4 * R, ia = 0; 2 > ia; ++ia) {
          ma = Kb[sa + ia];
          const cb = Kb[sa + ia + 2];
          (ia ? 64 < R : 64 > R) ? B = Ua(B, ma) : y = Ua(y, ma);
          ia ? G = Ua(G, cb) : L = Ua(L, cb);
        }
      }
      h(y - B) > h(V) && (V = y - B);
      h(G - L) > h(N) && (N = G - L);
    }
    C = m(1 - 0.02 * Ua(h(V), h(N)));
    n(V / 255, K / 255, N / 255);
  }, E = (D, B, y, K) => Ya(D, B, O || (m(h(B - D) ** 0.5 - y) + 1 / 7) * (1 - Math.exp(-(1.5 * K) * d)));
  va = D => {
    p(a);
    Z.r9r(0, 0, 128, 128, 6408, 5121, Kb);
    NO_INLINE(I)();
    !J && a === b || (b = a, B = eb(t()).invertSelf().transformPoint(Sa), Q.x = B.x, Q.y = B.y, Q.z = B.z);
    J = J && (a ? 0 : 1);
    var {x:B, y, z:K} = Sa;
    y = (y < (-20 > B || 109 > K ? -25 : -9) && (J = 2), 1 === a && (e[9].i = -15 > B && 0 > K ? 1 : 0), z = Ya(xb(z, y, 2), y, J || 8 * h(z - y)), u = E(u, z, 2, 1), g = E(g, B, 0.5, 1), H = E(H, K, 0.5, 1), l = xb(l, oa * (27 < a && 32 > a), 2,), ha ? (y = J + (1 - Math.exp(-18 * d)), Ca = Ya(Ca, B, y), Da = Ya(Da, z + 1.5, y), Ea = Ya(Ea, K, y), Ra = Wa(Ra)) : (Ea = E(Ea, H + -18 + 5 * l, 1, 2 + l,), Da = E(Da, Ua(u + m((-60 - K) / 8, 0, 20) + 13 + 9 * l, 6), 4, 2,), Ca = E(Ca, g, 1, 2 + l,), 
    y = Ta(-6, -h(H - Ea)), L = g - Ca, Ra = Xa(Ra, 90 - Wa(Math.atan2(y, L) / Ma), O + (1 - Math.exp(-10 * d)),), Qa = Xa(Qa, 90 - Math.atan2(Math.hypot(y, L), Da - u) / Ma, O + (1 - Math.exp(-10 * d)),)), Qa = m(Qa, -87, 87), O = 0, m(Aa, -1));
    var L = m(Ba, -1);
    const V = Va(Math.hypot(y, L) ** 0.5, 0.1);
    var N = Math.atan2(y, L);
    y = V * h(y) * Math.sin(N);
    L = V * h(L) * Math.cos(N);
    V && (f = 90 - N / Ma);
    k = Xa(k, f, 1 - Math.exp(-8 * d));
    r = xb(r, V, 10);
    D().translateSelf(B, z, K).rotateSelf(0, k);
    for (N = 0; 2 > N; ++N) {
      const G = 9.1 * c - Math.PI * N;
      eb(La[37].m, D()).translateSelf(0, r * m(0.45 * Math.sin(G - Math.PI / 2)),).rotateSelf(r * Math.sin(G) * 0.25 / Ma, 0);
    }
    P = a ? 5 : xb(P, J ? 10 : 19, 2.2);
    v = a || J ? 0 : xb(v, 0, 3);
    x = a || J ? 0 : xb(x, 0, 3);
    A = J ? 0 : xb(A, a ? 7 * m(2 * V) * C : 0, a ? 9 : 1,);
    N = ha ? (180 + Ra) * Ma : 0;
    n(d * (v + A * (L * Math.cos(N) - y * Math.sin(N))), -P * d, d * (x + A * (L * Math.sin(N) + y * Math.cos(N))),);
  };
}, Mb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), Nb = (a, b) => {
  const f = {}, k = Z.c1h();
  return Z.abz(k, a), Z.abz(k, Mb(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
}, Ub = (a, b, f) => {
  ba ? 1100 < hC.width && (eb().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), ab(db, Sb, 36), ab(db, Sb, 37), ab(db, Sb, 38), Z.uae(a, !1, Sb), Z.d97(4, La[39].D - La[37].s, 5123, 2 * La[37].s)) : (Z.uae(a, !1, Sb), Z.d97(4, (b ? La[39].D : La[37].s) - 3, 5123, 6), Z.uae(a, !1, Tb), Z.das(4, La[f].D - La[f].s, 5123, 2 * La[f].s, Ga.length,), Z.das(4, La[42].D - La[42].s, 5123, 2 * La[42].s, e.length,));
}, Vb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Wb = a => Math.sin(a * Math.PI * 2), Xb = a => 0.5 > a % 1 ? 1 : -1, Yb = a => a % 1 * 2 - 1, Zb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, fc = a => {
  let b = 0;
  const f = () => {
    let v = 0;
    const x = G => {
      let T, R, sa, ia = 0, ma = 0;
      const cb = [], Ha = new Int32Array(768 * G), $b = 2 ** (n - 9) / G, ac = Math.PI * 2 ** (y - 8) / G, yb = L * G & -2;
      for (let sb = 0; 11 >= sb; ++sb) {
        for (let tb = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb]; 32 > tb; ++tb) {
          const Pb = (32 * sb + tb) * G;
          for (var Ia = 0; 4 > Ia; ++Ia) {
            if (T = 0, Ob && (T = A[Ob - 1].charCodeAt(tb + 32 * Ia) - 40, T += 0 < T ? 106 : 0), T) {
              var fa;
              if (!(fa = cb[T])) {
                fa = T;
                let W = void 0, ta = void 0;
                var Qb = T;
                let bc = 0, cc = 0;
                const dc = 2 > b ? Yb : Wb, ec = 2 > b ? 1 > b ? Xb : Zb : Wb, Rb = new Int32Array(P + Q + N);
                for (let Ja = 0, zb = 0; P + Q + N > Ja; ++Ja, ++zb) {
                  let Ka = 1;
                  P > Ja ? Ka = Ja / P : P + Q > Ja || (Ka = (1 - (Ka = (Ja - P - Q) / N)) * 3 ** (-p / 16 * Ka));
                  0 > zb || (zb -= 4 * G, ta = 0.00396 * 2 ** ((Qb + z - 256) / 12), W = 0.00396 * 2 ** ((Qb + H - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Rb[Ja] = 80 * (dc(bc += ta * Ka ** (g / 32)) * C + ec(cc += W * Ka ** (O / 32)) * u + (J ? (2 * Math.random() - 1) * J : 0)) * Ka | 0;
                }
                fa = cb[fa] = Rb;
              }
              for (let W = 0, ta = 2 * Pb; fa.length > W; ++W, ta += 2) {
                Ha[ta] += fa[W];
              }
            }
          }
          for (let W, ta = 0; G > ta; ++ta) {
            Ia = 0;
            fa = 2 * (Pb + ta);
            var ua = (((W = Ha[fa]) || sa) && (R = 0.00308 * I, 1 !== b && 4 !== b || (R *= Math.sin($b * fa * Math.PI * 2) * V / 512 + 0.5), R = 1.5 * Math.sin(R), ia += R * ma, ua = (1 - E / 255) * (W - ma) - ia, ma += R * ua, W = 4 === b ? ma : 3 === b ? ua : ia, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= D / 32, sa = 1e-5 < W * W, ua = Math.sin(ac * fa) * B / 512 + 0.5, Ia = W * (1 - ua), W *= ua), fa < yb || (Ia += Ha[1 + fa - yb] * K / 255, 
            W += Ha[fa - yb] * K / 255), v + fa >> 1);
            r[ua] += (Ha[fa] = Ia) / 65536;
            l[ua] += (Ha[++fa] = W) / 65536;
          }
        }
      }
      v += 768 * G;
    }, A = Oa[b], [C, z, g, u, H, O, J, P, Q, t, p, n, I, E, D, B, y, K, L, V] = Pa[b], N = 4 * t ** 2;
    x(5513);
    x(4562);
    x(3891);
    Vb(5 > ++b ? f : a);
  }, k = Eb.createBuffer(2, 5362944, 44100), r = k.getChannelData(0), l = k.getChannelData(1);
  Db.buffer = k;
  Db.loop = !0;
  Vb(f);
}, Eb = new AudioContext(), bb = new DOMMatrix(), db = new DOMMatrix(), $a = new Float32Array(16), Sb = new Float32Array(624), Tb = new Float32Array(624), Kb = new Uint8Array(65536), gc = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Db = Eb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Vb(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const r = [new Float32Array(16), new Float32Array(16),], l = t => {
        Z.f1s();
        requestAnimationFrame(l);
        var p = (t - (aa || t)) / 1e3;
        if (wa += p, c += d = ba ? 0 : Ta(0.066, p), aa = t, 0 < d) {
          ja();
          Fa && c > Fa && (Fa = 0, h4.innerHTML = "");
          da = xb(da, e[9].h, 0.2 + 0.3 * h(2 * e[9].h - 1),);
          ca = xb(ca, ya ? xb(ca, -9, 1.5) : m(c / 3), 1,);
          let B = 1;
          var n = () => eb(bb, La[++B].m);
          p = (oa = Za(e[12].g, e[13].g), ra = Ya(xb(ra, 0, 1), Wa(ra + 60 * d), e[5].g - e[6].h,), pa = Ya(xb(pa, 0, 5), Wa(pa + 56 * d), oa,), qa = Ya(xb(qa, 0, 4), Wa(qa + 48 * d), oa,), Jb(n(), -12, 4.2, 40 * ca - 66), n().translateSelf(0, 0, -15).scaleSelf(1, m(1.22 - e[1].g), 1), n().translateSelf(0, 0, 15).scaleSelf(1, m(1.22 - e[2].g), 1), n().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, m(1.1 - e[6].g), 1), n().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g), n().translateSelf(0, 
          0.01 > e[3].g ? -500 : (1 - e[2].g) * e[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (e[3].g - 1), 0,), Ta(e[2].h, 1 - e[4].h));
          t = (n().translateSelf(p * Math.sin(0.7 * c + 2) * 12), n().translateSelf(p * Math.sin(c + 3) * 8.2), n().translateSelf(p * Math.sin(c / 1.5 + 2) * 12), n().translateSelf(9.8 * (1 - p)), m(1 - 5 * p) * Za(e[4].g, e[5].g));
          p = (n().translateSelf(0, t * Math.sin(1.35 * c) * 4), n().translateSelf(0, 0, t * Math.sin(0.9 * c) * 8), n().translateSelf(0, -6.5 * e[4].h), n().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + ra, 0,), Za(e[7].h, e[6].h));
          t = (n().translateSelf(0, p * Math.sin(c) * 5 + 3.5 * (1 - Ua(e[6].g, e[7].g)),), n().translateSelf(0, p * Math.sin(c + 3) * 6, p * Math.sin(0.6 * c + 1) * 6), n().translateSelf(0, -7.3 * e[7].h), Jb(n(), -123, 1.4, 55 + -65 * da), Za(e[10].g, e[11].g));
          t = (n().translateSelf(0, -2, t * h(Math.sin(1.1 * c)) * -8.5 + 10), n().translateSelf(0, -2, t * h(Math.sin(2.1 * c)) * -8.5 + 10), n().translateSelf(0, -2, -8.5 * Ua((1 - e[10].g) * (1 - t), t * h(Math.sin(1.5 * c))) + 10,), Za(e[8].h, e[12].h));
          for (p = 0; 4 > p; p++) {
            n().translateSelf((2 < p ? 2 * (1 - t) + t : 0) - 100, t * Math.sin(1.3 * c + 1.7 * p) * (3 + p / 3) + 0.7, 115 + (1 & p ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7 + Ua(t, 0.05) * Math.cos(1.3 * c + 7 * p) * (4 - 2 * (1 - p / 3)),);
          }
          n().translateSelf(2.5 * (1 - t) - 139.7, -3 * (1 - e[8].g) + t * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * t + 3), 0);
          n().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + pa);
          n().translateSelf(-65.8, 0.8, 106).rotateSelf(0, qa);
          n().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - qa);
          n().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + qa);
          t = Za(e[13].h, e[14].h);
          for (p = 0; 3 > p; ++p) {
            n().translateSelf(0, (1 - e[13].h) * (1 - e[14].h) * (p ? 0 : 3) + t * Math.sin(1.5 * c + 1.5 * p) * 4,);
          }
          n().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          p = Za(Za((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2,);
          n().translateSelf(0, 16 * p, 8.5 * m(2 * p - 1) + 95);
          for (t = 0; 13 > t; ++t) {
            Ga[t].F(), ab(db, Tb, t);
          }
          for (t = 0; 16 > t; ++t) {
            e[t].F(), ab(db, Tb, t + 13), Tb[16 * t + 223] = 1 - e[t].g;
          }
          va(n);
          for (n = 0; B >= n; ++n) {
            ab(La[n].m, Sb, n - 1);
          }
          ea = 0;
          g();
          Z.b6o(36160, Q);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          var {x:t, y:p, z:I} = Sa;
          Z.uae(g("b"), !1, ab(eb().rotateSelf(0, 180).invertSelf().translateSelf(-t, -p, 0.3 - I)),);
          Ub(g("c"), 0, 40);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(g("b"), !1, ab(eb().translateSelf(-t, -p, -I - 0.3)));
          Ub(g("c"), 0, 40);
          Z.f1s();
        }
        n = Ca;
        let E = Da, D = Ea;
        ba ? ({x:t, y:p} = eb(ka).invertSelf().transformPoint({x:3.6, y:3.5,}), n = t, E = p, D = 5, eb(bb, v).rotateSelf(-20, 0).invertSelf().translateSelf(-n, -E, -D,).rotateSelf(0, 99)) : eb(bb, v).rotateSelf(-Qa, -Ra).invertSelf().translateSelf(-n, -E, -D);
        C();
        Z.b6o(36160, J);
        Z.v5y(0, 0, 2048, 2048);
        O[0](54.7 * 1.1);
        O[1](126 * 1.1);
        u();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(u("a"), !1, ab(ka));
        Z.uae(u("b"), !1, ab(v));
        Z.uae(u("i"), !1, r[0]);
        Z.uae(u("j"), !1, r[1]);
        Z.ubu(u("k"), n, E, D);
        Ub(u("c"), !ha, 41);
        z();
        Z.ubu(z("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
        Z.ubu(z("k"), n, E, D);
        Z.uae(z("b"), !1, ab(eb(v).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, Q);
        Z.f1s();
      }, v = new DOMMatrix(), x = new DOMMatrix(), A = f;
      var k = Mb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const C = Nb(Mb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), z = Nb(Mb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), g = Nb(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=1.-sin(gl_FragCoord.x*.02454369),i=clamp(a.z+.6,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?min(i*10.,1.)*(.6-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}else{float e=o.y>.5?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), u = Nb(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), H = gb(8, () => ({})), O = gb(2, t => {
        const p = Z.c25();
        return Z.a4v(33984 + t), Z.b9j(3553, p), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), n => {
          let I = 0, E = 0, D = 0, B = 1 / 0, y = -1 / 0, K = 1 / 0, L = -1 / 0, V = 1 / 0, N = -1 / 0;
          Z.fas(36160, 36096, 3553, p, 0);
          Z.c4s(256);
          eb().scale3dSelf(n).multiplySelf(eb(la[t], x).multiplySelf(v).invertSelf(),);
          for (let G = 0; 8 > G; ++G) {
            const T = H[G], R = (T.x = 4 & G ? 1 : -1, T.y = 2 & G ? 1 : -1, T.z = 1 & G ? 1 : -1, db.transformPoint(T));
            I -= T.x = (0 | R.x) / n / R.w;
            E -= T.y = (0 | R.y) / n / R.w;
            D -= T.z = (0 | R.z) / n / R.w;
          }
          eb().rotateSelf(298, 139).translateSelf(I / 8, E / 8, D / 8);
          for (n = 0; 8 > n; ++n) {
            const {x:G, y:T, z:R} = db.transformPoint(H[n]);
            B = Ta(B, G);
            y = Ua(y, G);
            K = Ta(K, T);
            L = Ua(L, T);
            V = Ta(V, R);
            N = Ua(N, R);
          }
          n = 10 + t;
          V *= 0 > V ? n : 1 / n;
          N *= 0 < N ? n : 1 / n;
          Z.uae(C("b"), !1, ab(eb(bb, x).scaleSelf(2 / (y - B), 2 / (L - K), 2 / (V - N),).translateSelf((y + B) / -2, (L + K) / -2, (V + N) / 2).multiplySelf(db), r[t],),);
          Ub(C("c"), !ha, 41);
        };
      }), J = Z.c5w();
      k = Z.c25();
      const P = Z.c3z(), Q = Z.c5w();
      g();
      Z.uae(g("a"), !1, ab(Cb(1e-4, 2, 1.4, 0.4)));
      u();
      Z.ubh(u("q"), 2);
      Z.ubh(u("h"), 1);
      Z.ubh(u("g"), 0);
      z();
      Z.ubh(z("q"), 2);
      Z.b6o(36160, J);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, Q);
      Z.bb1(36161, P);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, P);
      Z.a4v(33986);
      Z.b9j(3553, k);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, k, 0);
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
      Z.c5t(0, 0, 0, 0);
      NO_INLINE(Fb)();
      NO_INLINE(Lb)();
      requestAnimationFrame(l);
    }
  }, f = new Image();
  f.onload = f.onerror = b;
  f.src = gc;
  NO_INLINE(fc)(() => {
    Vb(() => {
      let l = 0;
      const v = [], x = [], A = [], C = [], z = new Int32Array(8), g = new Map(), u = new Int32Array(z.buffer, 0, 5), H = new Float32Array(z.buffer);
      La.map((O, J) => {
        let P;
        const Q = t => {
          let {x:p, y:n, z:I} = P[t], E = (H[0] = p, H[1] = n, H[2] = I, t = "" + (P.C ? u : z), g.get(t));
          return void 0 !== E ? (p = 3 * E, C[p] = (C[p++] + z[5]) / 2, C[p] = (C[p++] + z[6]) / 2, C[p] = (C[p] + z[7]) / 2) : (g.set(t, E = g.size), x.push(p, n, I, H[3]), A.push(z[4]), C.push(z[5], z[6], z[7])), E;
        };
        for (P of (H[3] = 41 < J ? -14 : O.G && J, O.o)) {
          const {x:t, y:p, z:n} = nb(P);
          z[4] = 0 | P.u;
          z[5] = 32767 * t;
          z[6] = 32767 * p;
          z[7] = 32767 * n;
          for (let I = 2, E = Q(0), D = Q(1); P.length > I; ++I) {
            v.push(E, D, D = Q(I));
          }
        }
        O.o = null;
        O.s = l;
        O.D = l = v.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(C), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(A), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [O, J, P, Q, t] = JSON.parse(localStorage.DanteSP22,);
        e.map((p, n) => p.g = p.h = p.i = n ? 0 | O[n] : 0);
        Ga.map((p, n) => p.i = 0 | J[n]);
        za = P;
        da = t;
        c = Q;
        d = 0;
      } catch {
      }
      Ab();
      ca = m(za);
      Vb(b);
    });
    const k = gb(11, l => q(Math.sin(l / 10 * Math.PI), l / 10).rotate(+l).scale(1.0001 - l / 10, 0, 1 - l / 10),), r = gb(10, l => kb(ib(jb(18), k[l]).reverse(), ib(jb(18), k[l + 1]), 1,)).flat();
    Y(() => X([Na.slice(1),], q(-2).scale3d(3).rotate(90, 0)), 0);
    Y(() => {
      const l = g => Y(() => {
        Na.map(({x:u, z:H}) => {
          X(M(11, 1), q(4 * u, 4, g + 4 * H).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6),);
          X(M(), q(4 * u, 7, g + 4 * H).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3));
        });
        X(S(F(M(), q(0, 0, g).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(u => F(M(), q(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3),)),),);
        X(M(), q(0, -3, g).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
      }), v = g => S(F(M(), q(0, -g / 2).scale(6, g - 1, 2.2)), F(M(), q(0, -g / 2 - 6).scale(4, g - 3, 4)), F(M(32, 1), q(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),), x = () => Y(() => gb(7, g => X(F(M(6, 1), q(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38),),))), A = S(F(M(30, 1, 1.15, 1), q(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7),), F(M(30, 1, 1.3, 1), q(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2),), F(M(), q(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),), C = (Y(() => 
      {
        X(A);
        Hb(q(0, -3, 4));
      }), Hb(q(-5.4, 1.5, -19).rotate(0, -90)), Ib(q(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Ib(q(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...jb(18).map(({x:g, z:u}) => [7 * g, 10 * u, 4.5 - 2 * h(g),]),), Na.map(({x:g, z:u}) => X(M(6), q(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))), [-15, 15,].map((g, u) => {
        x();
        x();
        X(M(), q(0, 6.3, g).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
        X(M(), q(0, 1, g).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
        X(M(), q(0, 0, u ? 22 : -23).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2));
        gb(5, H => X(r, q(18.5 * (u - 0.5), 0, 4.8 * H - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2), U(1, 1, 0.8, 0.2),));
      }), X(M(), q(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)), X(M(), q(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)), X(M(), q(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2),), X(M(5), q(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4),), X(M(), fb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5),), X(S(wb(F(M(6, 0, 0, 0.3), q(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2),), 
      F(M(6), q(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)), F(M(6, 0, 0, 0.3), q(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2),),), F(M(5), w(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)), F(M(5, 0, 1.5), q(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2),), F(M(), fb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5),), F(M(6), q(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5),),),), Y(() => {
        X(M(5), q(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
        Hb(q(0, 1.2));
      }), Hb(q(15, -2, 4)), Y(() => {
        X(S(wb(F(M(), w(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)), F(M(6), w(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)), F(M(), q(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5),), F(M(16, 1, 0, 4), w(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2),),), F(M(), w(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),), q(0, 0, 45),);
        Ib(q(0, 2.8, 45), [0, 0, 4.5,]);
      }), l(35), l(55), X(M(), q(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)), Y(() => {
        X(M(3), q(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
        X(M(8), q(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
        X(M(), q(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
        X(M(), q(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
        Hb(q(-23, -0.5, 66.5));
      }), Y(() => {
        X(M(), q(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
        X(S(F(M(), w(3, 1.4, 2.7)), F(M(), w(1.2, 8, 1.2)),), q(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2),);
      }), Y(() => {
        X(S(F(M(), q(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), F(M(), q(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2)),),);
        X(M(), q(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
      }), Y(() => {
        X(M(6), q(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4),);
      }), Hb(q(-55, -1.1, 46).rotate(0, 90)), X(M(6), q(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)), X(M(7), q(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)), [...F(M(), q(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)), ...S(F(M(6), fb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)), F(M(4, 0, 0.01), q(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3),), F(M(6), fb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(g => F(M(5), q(g, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), U(0.3, 0.6, 0.6, 0.3),)),),]), z = (X(C, q(-53, 0, 55)), Y(() => X(C), 2), X(M(), q(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2),), X(M(3, 0, -0.5), q(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2),), X(S(wb(F(M(), q(-100, -2.4, 55).scale(8, 0.9, 8), U(0.8, 0.8, 0.8, 0.2),), F(M(), q(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2),), F(M(), q(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2),), F(M(), 
      q(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2),), F(M(6), q(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3),), F(M(), q(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2),), F(M(), q(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2),),), F(M(8), q(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4),), F(M(8), q(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5),), F(M(8, 0, -3.1), q(-100, -3, 55).scale(0.4, 
      1, 0.4), U(0.4, 0.4, 0.4, 0.5),),),), Ib(q(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Ib(q(-89, 0.2, 80), [0, 0, 6,]), X(S(F(M(), q(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)), F(M(), q(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4),), F(M(20, 1), q(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4),),),), Na.map(({x:g, z:u}) => {
        X(M(6), q(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(H => X(M(6), q(7 * g - 100, H, 7 * u + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8),));
      }), gb(7, g => {
        X(M((23 * g + 1) % 5 + 5, 0, 0.5), q(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3,), U(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),);
      }), X(M(), q(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)), X(M(4), q(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)), X(M(12, 1), q(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)), Hb(q(-86, -7.5, 31)), Y(() => {
        [0, 12, 24,].map(g => X(M(), q(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.2, 0.5, 0.6, 0.2),));
      }), Y(() => {
        [6, 18,].map(g => X(M(), q(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), U(0.1, 0.4, 0.5, 0.2),));
      }), X(S(wb(F(M(5), q(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3),), F(M(5), w(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)), F(M(), w(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),), F(M(5), w(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),), q(-38.9, -11.3, 17),), Hb(q(-38.9, -9.6, 10)), Y(() => {
        X(S(wb(F(M(5), q(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5),), F(M(5), q(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5),), F(M(5), q(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5),),), F(M(5), w(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)), F(M(5), q(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5),),), q(-38.9, -11.3, 17),);
        Ib(q(-39.1, -0.6, 17).rotate(11), ...jb(15).map(({x:g, z:u}) => [3 * g, 3 * u, 1.2,]),);
      }), Na.map(({x:g, z:u}) => {
        X(M(14, 1), q(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(H => X(M(17, 1), q(9 * g - 38.9, H - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3),));
      }), X(S(wb(F(M(6), q(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3),), F(M(), q(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3),),), ...gb(6, g => gb(6, u => F(M(6), q(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2), U(0.7, 0.7, 0.7, 0.3),))).flat(),), q(-38.9, -11.3, 17),), Ib(q(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), X(M(5), q(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4),), Hb(q(-84, -0.5, 85).rotate(0, 
      45)), Y(() => {
        X(A);
        Hb(q(0, -3, -4).rotate(0, 180));
      }), S(F(M(), q(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3),), F(M(3), q(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(g => F(M(), q(g, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3),)),));
      Y(() => gb(2, g => X(z, q(9 * g - 110 + (1 & g), 1.7, -12))));
      Y(() => gb(2, g => X(z, q(9 * (g + 2) - 110 + (1 & g), 1.7, -12))));
      Y(() => gb(3, g => X(z, q(9 * g - 106, 1.7, -12))));
      X(S(wb(F(M(), q(26.5, -1.6, 10).scale(20, 2.08, 3)), F(M(), q(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...gb(4, g => F(M(), q(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9)),), ...gb(3, g => F(M(), q(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9)),),), q(-123, 0, -12), U(0.5, 0.5, 0.6, 0.2),);
      Hb(q(-116, -1.4, -18).rotate(0, 180));
      X(M(), q(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2),);
      X(M(6), q(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      X(M(), q(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      X(M(8), q(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      X(M(8), q(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      X(M(), q(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      gb(3, g => {
        X(v(16), q(12 * g - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        X(v(16), q(-77, -9, -12 * g - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3),);
      });
      X(S(F(M(12), q(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2),), F(M(), q(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2),), F(M(), q(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2),), F(M(12), q(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2),),),);
      X(M(), q(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3),);
      X(M(9), q(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      X(S(F(M(), q(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1),), F(M(9), q(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2),),),);
      Hb(q(-98, -4.4, -40).rotate(0, 90));
      Ib(q(-115, 0.2, -12), [0, 0, 3.5,]);
      Ib(q(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      X(S(wb(F(M(6, 0, 0, 0.6), q(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2),), F(M(), q(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2),),), F(M(5), q(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2),),),);
      gb(4, g => Y(() => X(M(6), q(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), U(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),)));
      Y(() => {
        X(S(F(M(10), w(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), F(M(10), w(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5)),),);
        X(M(15, 1), q(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3),);
        X(M(10), q(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        X(M(5), q(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        Hb(q(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(g => X(r, fb(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2),));
        Ib(q(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(g => {
        [7.2, 1.5,].map(u => X(M(15, 1), q(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4),));
        X(r, q(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), U(1, 1, 0.8),);
        X(M(12, 1), q(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5),);
        X(S(F(M(), q(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4),), F(M(), w(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)), F(M(28, 1), q(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5),), F(M(5), q(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5),), F(M(5), q(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5),),), q(g - 100, 0.7, 97),);
      });
      X(S(F(M(), q(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1),), F(M(45, 1), q(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1),),),);
      Y(() => {
        X(S(F(M(45, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)), F(M(), q(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2),),),);
        X(M(8), q(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        X(M(5), q(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Ib(q(0, 3), ...jb(14).map(({x:g, z:u}) => [5.6 * g, 5.6 * u, 2,]),);
      });
      Y(() => {
        [-1, 1,].map(g => X(r, fb(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), U(1, 1, 0.8),));
        X(S(F(M(28, 1), q(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), F(M(), w(9, 5, 2), U(0.3, 0, 0, 0.3)),),);
        X(F(M(28, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(F(M(5), q(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(() => {
        X(S(F(M(28, 1), q(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), F(M(), q(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), F(M(), q(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),),);
        X(F(M(28, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(F(M(5), q(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      Y(() => {
        X(S(F(M(28, 1), q(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), F(M(), q(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), F(M(), q(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),),);
        X(F(M(28, 1), w(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        X(F(M(5), q(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      X(M(), q(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      X(M(), q(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      X(M(), q(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      X(M(), q(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      Hb(q(-34, 2.7, 96).rotate(-12, 0));
      X(M(5), q(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6),);
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4),].map((g, u) => Y(() => {
        X(M(), q(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
        2 === u && X(M(), q(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
        1 === u && X(M(), q(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(g => X(r, q(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), U(1, 1, 0.8),));
      gb(3, g => X(v(24.7 - 0.7 * (1 & g)), q(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)), 1 & g ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),));
      X(S(F(M(6, 0, 0, 0.3), q(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2),), F(M(5), q(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),),);
      Hb(q(0, 1.7, 82).rotate(0, 180));
      X(M(5), q(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4),);
      X(M(6), q(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3),);
      X(M(), q(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      X(M(7), q(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      X(S(wb(F(M(), q(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4),), F(M(), q(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4),),), F(M(5), q(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4),),),);
      Y(() => {
        X(M(3), q(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(g => {
          X(M(6), q(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4),);
          X(M(), q(0, 6.2, g + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Y(() => {
        X(M(5), w(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        X(M(5), w(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        Hb(q(0, 1.5, -1).rotate(0, 180));
      });
      Ib(q(0, 3, 95), ...jb(9).map(({x:g, z:u}) => [9 * g, 9 * u, 4,]),);
      Ib(q(0, 19, 134), [0, 0, 3.5,]);
    });
    Y(() => {
      X(lb(20), q(0, 1).scale3d(0.5), U(1, 0.3, 0.4));
      X(lb(30), w(0.65, 0.8, 0.55), U(1, 0.3, 0.4));
      X(M(), q(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      [-1, 1,].map(l => {
        X(r, fb(0, 0 < l ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8),);
        X(F(S(M(15, 1), F(M(), q(0, 0, 1).scale(2, 2, 0.5)),), fb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3),), q(0.2 * l, 1.2, 0.4).rotate(0, 20 * l, 20 * l),);
        Y(() => {
          X(M(20, 1), q(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
        });
      });
    });
    Y(() => {
      X(M(6).slice(0, -1), w(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Y(() => {
      X(lb(30, 24, (l, v, x) => {
        const A = v / 24, C = l * Math.PI * 2 / 30, z = Math.sin(A ** 0.6 * Math.PI / 2);
        l = A * A * Math.sin(l * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:x.C = 0, y:-0.5, z:0,} : {x:Math.cos(C) * z, y:Math.cos(A * Math.PI) - A - l, z:Math.sin(C) * z + Math.sin(l * Math.PI * 2) / 4,};
      }), w(0.7, 0.7, 0.7), U(1, 1, 1),);
      [-1, 1,].map(l => X(lb(12), q(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    Y(() => {
      X(M(6, 1), w(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      X(M(10), q(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      X(M(3), q(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1),);
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: max(780px, 50vw);\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

