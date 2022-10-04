let aa, ba, ca, da, ia, ja, ka, la, ma, na, qa, ra, sa, ta, ua, wa, xa, c = 0, ya = 0, za = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 1;
const Ma = Math.PI / 180, Na = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Oa = [], d = [], Pa = [], Ta = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ua = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Va = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Wa = 0, Xa = 0, Ya = 0, Za = 0, $a = 180;
const e = NO_INLINE(a => 0 > a ? -a : a), ab = NO_INLINE((a, b) => a < b ? a : b), bb = NO_INLINE((a, b) => b < a ? a : b), cb = (a, b) => e(a) > b ? a : 0, h = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a, db = a => Math.atan2(Math.sin(a * Ma), Math.cos(a * Ma)) / Ma, eb = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * h(f) || 0, fb = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0, gb = (a, b) => (a = h(a), fb(a, 1 - a, b)), hb = (a, b, f = 0) => Math.sqrt(a * a + b * b + 
f * f), mb = (a = 0, b = 0, f = 0, k = 1) => {
  ib = l.m11 * a + l.m21 * b + l.m31 * f + l.m41 * k;
  jb = l.m12 * a + l.m22 * b + l.m32 * f + l.m42 * k;
  kb = l.m13 * a + l.m23 * b + l.m33 * f + l.m43 * k;
  lb = l.m14 * a + l.m24 * b + l.m34 * f + l.m44 * k;
};
var ib, jb, kb, lb;
const ob = (a, b = nb, f = 0,) => (f *= 16, b[f++] = a.m11, b[f++] = a.m12, b[f++] = a.m13, b[f++] = a.m14, b[f++] = a.m21, b[f++] = a.m22, b[f++] = a.m23, b[f++] = a.m24, b[f++] = a.m31, b[f++] = a.m32, b[f++] = a.m33, b[f++] = a.m34, b[f++] = a.m41, b[f++] = a.m42, b[f++] = a.m43, b[f] = a.m44, b), pb = (a = n, b = l,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), w = NO_INLINE((a, b, f) => n.translate(a, b, f)), qb = (a, b) => Array.from(Array(a), (f, k) => b(k)), rb = (a, b, f) => (a.C = f, a.u = b, a), sb = (a, b, f = a.u,) => (pb(b), rb(a.map(({x:k, y:r, z:m}) => (mb(k, r, m), {x:ib, y:jb, z:kb,})), f, a.C,)), E = (a, b, f) => a.map(k => sb(k, b, f)), tb = (a, b = 0) => qb(a, f => {
  const k = Math.cos(2 * Math.PI * f / a);
  return {x:Math.sin(2 * Math.PI * f / a), y:0, z:0.01 > e(k) ? k : 0 > k ? k - b : k + b,};
}), ub = (a, b, f) => a.map((k, r, {length:m}) => rb([k, b[m - r - 1], b[m - (r + 1) % m - 1], a[(r + 1) % m],], a.u, f,)), G = (a, b, f = 0, k,) => (a = a ? tb(a, k) : Ta, k = sb(a, w(0, 1).scale3d(0 < f ? f : 1)), a = sb(a, w(0, -1).scale3d(0 > f ? -f : 1)).reverse(), [...ub(a, k, b), k, a,]), vb = (a, b = a, f = (k, r) => (r *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(r), y:Math.cos(r), z:Math.sin(k) * Math.sin(r),})) => {
  const k = [];
  for (let r = 0; a > r; r++) {
    for (let m = 0; b > m; m++) {
      const v = rb([], 0, 1);
      k.push(v);
      v.push(f(r, m, v));
      m && v.push(f((r + 1) % a, m, v));
      b - 1 > m && v.push(f((r + 1) % a, m + 1 % b, v));
      v.push(f(r, m + 1 % b, v));
    }
  }
  return k;
}, wb = NO_INLINE(a => 1 - Math.exp(-a * ca)), I = NO_INLINE((a, b, f) => fb(a, b, wb(f))), xb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][za = Oa.reduce((a, {i:b}) => a + b, 0)] + " / XIII";
}, yb = () => {
  localStorage.DanteSP22 = JSON.stringify([d.map(({i:a}) => a), Oa.map(({i:a}) => a), Fa, c, ia,]);
}, J = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a), zb = (a, b, f, k) => new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Eb = () => {
  let a, b, f, k, r, m, v, y, x, z, B, g, u, A, L = !0;
  const P = [], K = () => {
    b4.innerHTML = "Music: " + L;
    ba || !L ? Cb.disconnect() : Cb.connect(Db.destination);
  }, T = () => {
    const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ma = [zb(0.3, 55, p, 1.732051), zb(55, 181, p, 1.732051),];
    la = zb(0.3, 181, p, 1.732051);
    k = y = void 0;
    P.length = ja = A = g = u = Ga = Ha = 0;
  }, q = (p, t = 0) => {
    if (ba !== p) {
      ba = p;
      ka = t;
      T();
      document.body.className = p ? "l m" : "l";
      try {
        p ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Cb.start());
      } catch {
      }
      K();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => q(!1);
  b2.onclick = () => q(!1, 1);
  b5.onclick = () => q(!0);
  b4.onclick = () => {
    L = !L;
    K();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = p => {
    if (!ba && (p.target === hC && (ja = 1), ka)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = p => {
    let t;
    p.repeat || (t = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[p.code], (P[t] = !!p.type[5] && !0) && (0 === t && (ja = 1), 1 === t && q(!0)));
  };
  onmousemove = ({movementX:p, movementY:t}) => {
    ka && (p || t) && ($a += 0.1 * p, Za += 0.1 * t);
  };
  hC.ontouchstart = p => {
    if (!ba) {
      for (let {pageX:t, pageY:F, identifier:N} of p.changedTouches) {
        ka && t > hC.clientWidth / 2 ? void 0 === y && (x = 0, m = t, v = F, y = N, z = $a, B = Za) : void 0 === k && (r = 0, b = t, f = F, k = N);
      }
      a = ya;
    }
  };
  hC.ontouchmove = p => {
    if (!ba) {
      for (let {pageX:C, pageY:H, identifier:D} of p.changedTouches) {
        var t, F, N, V;
        y === D && ($a = z + (C - m) / 2.3, Za = B + (H - v) / 2.3, x = 1);
        k === D && (D = (b - C) / 20, t = e(D), F = (f - H) / 20, N = e(F), (V = 0.5 < bb(t, N)) && (r = 1), g = (V && 0.2 < t) * h(D, -1), u = (V && 0.2 < N) * h(F, -1), 2 < t && (b = C + 20 * (0 > D ? -1 : 1)), 2 < N && (f = H + 20 * (0 > F ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = p => {
    let t;
    document.activeElement === document.body && p.preventDefault();
    for (const F of p.changedTouches) {
      F.identifier === y ? (y = void 0, x || (t = 1), x = 0) : F.identifier === k ? (k = void 0, u = g = 0, r || (t = 1), r = 0) : t = 1;
    }
    p.target === hC && t && a && 0.02 < (p = ya - a) && 0.7 > p && (ja = 1);
  };
  na = () => {
    Ga = u + (P[4] ? 1 : 0) - (P[5] ? 1 : 0);
    Ha = g + (P[2] ? 1 : 0) - (P[3] ? 1 : 0);
    var p = navigator.getGamepads()[0];
    if (p) {
      const t = N => F[N]?.pressed || 0 < F[N]?.value ? 1 : 0, F = p.buttons;
      p = p.axes;
      ka && (Za += ca * cb(p[3], 0.3) * 80, $a += ca * cb(p[2], 0.3) * 80);
      Ga += t(12) - t(13) - cb(p[1], 0.2);
      Ha += t(14) - t(15) - cb(p[0], 0.2);
      t(9) && q(!0);
      (p = t(3) || t(2) || t(1) || t(0)) && !A && (ja = 1);
      A = p;
    }
  };
  document.onvisibilitychange = onblur = onresize = T;
  q(!0);
}, O = (a, b = new DOMMatrix(), f) => qa.o.push(...E(a, b, f)), S = (a, b = 1) => {
  const f = qa;
  Pa.push(qa = {m:new DOMMatrix(), G:b, o:[],},);
  a();
  qa = f;
}, Fb = a => {
  const b = qa, f = d.length, k = {i:0, g:0, h:0, m:b.m, H:a, F() {
    k.g = I(k.g, k.i, 4);
    k.h = I(k.h, k.i, 1);
    pb(b.m).multiplySelf(a);
    ja && 3 > (mb(), hb(Wa - ib, Xa - jb, Ya - kb,)) && (0.3 > k.g || 0.7 < k.g) && (k.i = k.i ? 0 : 1, f && 1 / 0 > La && (La = c + 1, h4.innerHTML = "* click *"), Fa = f, yb());
    !f && k.i && 0.8 < k.g && (k.i = 0, 13 > za ? 1 / 0 > La && (La = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!") : Ea || (1 / 0 > La && (La = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), Ea = 1));
    l.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  d.push(k);
  O(G(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), J(0.4, 0.5, 0.5));
  O(G(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), J(0.4, 0.5, 0.5));
  O(G(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), J(0.5, 0.5, 0.4));
}, Gb = (a, ...b) => {
  let f, k, r, m = 0, v = 0, y = 1, x = 3, z = -1;
  const B = {i:0, F() {
    if (!B.i) {
      var p;
      let t, F, N, V, C = 1, H = 1 / 0;
      for (const D of g) {
        const M = hb(A - D.x, L - D.z), U = M - D.w;
        V ||= 0 > U;
        0 < U && H > U && (H = U, u = D);
        C = ab(C, M / D.w);
      }
      V || (p = A - u.x, t = L - u.z, F = hb(p, t), N = Math.atan2(-t, p), y && (v = (Math.random() - 0.5) * Math.PI / 2, x = h(x / (1 + Math.random()))), N += v, z = -Math.cos(N), m = Math.sin(N), 0.1 < F && (F = ab(F, u.w) / (F || 1), A = p * F + u.x, L = t * F + u.z));
      y = V;
      x = I(x, 6 * (1 - C) + 3, C + 3);
      P = I(P, A = I(A, A + z, x), x);
      K = I(K, L = I(L, L + m, x), x);
      f = eb(f, Math.atan2(P - k, K - r) / Ma - 180, wb(3),);
      pb(T).multiplySelf(a).translateSelf(k = P, 0, r = K).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
      1.6 > (mb(), hb(Wa - ib, Xa - jb, Ya - kb,)) && (B.i = 1, p = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][za] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      1 / 0 > La && (La = c + (za && 12 > za ? 5 : 7), h4.innerHTML = p), xb(), yb());
    }
    B.i && pb(Pa[2].m).translateSelf(q % 4 * 1.2 - 1.7 + Math.sin(c + q) / 7, -2, 1.7 * (q / 4 | 0) - 5.5 + e(q % 4 - 2) + Math.cos(c / 1.5 + q) / 6,);
  },}, g = b.map(([p, t, F]) => ({x:p, z:t, w:F,}));
  let u = g[0], {x:A, z:L} = u, P = A, K = L;
  const T = qa.m, q = Oa.length;
  Oa.push(B);
}, Jb = ({x:a, y:b, z:f}, k) => a * k.x + b * k.y + f * k.z, Kb = a => {
  let b, f = 0, k = 0, r = 0, m = a.at(-1);
  for (b of a) {
    f += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), r += (m.x - b.x) * (m.y + b.y), m = b;
  }
  return b = hb(f, k, r), f /= b, k /= b, r /= b, {x:f, y:k, z:r, w:f * m.x + k * m.y + r * m.z,};
}, Lb = (a, b) => {
  var f, k, r, m = b.B;
  for (var v = 0; m.length > v; ++v) {
    if (-0.00008 > (f = Jb(a, m[v]) - a.w) ? r = b : 8e-5 < f && (k = b), r && k) {
      k = [];
      r = [];
      m = b.B;
      v = b.v;
      let y = m.at(-1), x = Jb(a, y) - a.w;
      for (const z of m) {
        f = Jb(a, z) - a.w, 8e-5 > x && r.push(y), -0.00008 < x && k.push(y), (8e-5 < x && -0.00008 > f || -0.00008 > x && 8e-5 < f) && (x /= f - x, y = {x:y.x + (y.x - z.x) * x, y:y.y + (y.y - z.y) * x, z:y.z + (y.z - z.z) * x,}, k.push(y), r.push(y)), y = z, x = f;
      }
      return {l:2 < k.length && {B:rb(k, m.u, m.C), v, A:b,}, j:2 < r.length && {B:rb(r, m.u, m.C), v, A:b,},};
    }
  }
  return {l:k, j:r,};
}, Mb = (a, b, f = Kb(b.B)) => {
  let k, r;
  return a ? ({l:k, j:r} = Lb(a, b), k || r || a.o.push(b), k && (a.l = Mb(a.l, k, f)), r && (a.j = Mb(a.j, r, f))) : a = {x:f.x, y:f.y, z:f.z, w:f.w, o:[b,], l:0, j:0,}, a;
}, Nb = (a, b, f) => {
  const k = [], r = (m, v) => {
    let {l:y, j:x} = Lb(m, v);
    y || x || (0 < f * Jb(m, b) ? y = v : x = v);
    y && (m.l ? r(m.l, y) : k.push(y));
    x && m.j && r(m.j, x);
  };
  for (const m of b.o) {
    r(a, m);
  }
  return k;
}, Ob = (a, b) => a && (b(a), Ob(a.l, b), Ob(a.j, b)), Pb = a => (Ob(a, b => {
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
}), a), Qb = a => a.length ? a.reduce((b, f) => Mb(b, {B:f, v:0, A:0,}), 0) : a, Rb = (...a) => a.reduce((b, f) => {
  const k = [];
  if (b = Qb(b), f) {
    f = Qb(f);
    Ob(b, r => r.o = Nb(f, r, 1));
    Ob(f, r => k.push([r, Nb(b, r, -1),]));
    for (let [r, m] of k) {
      for (const v of m) {
        Mb(b, v, r);
      }
    }
  }
  return b;
}), X = (a, ...b) => {
  const f = m => {
    let v;
    return m.A && ((v = k.get(m.A)) ? (r.delete(v), m = f(m.A)) : k.set(m.A, m)), m;
  }, k = new Map(), r = new Map();
  return a = Pb(Rb(Pb(Qb(a)), ...b)), Ob(a, m => {
    for (const v of m.o) {
      r.set(f(v), v.v);
    }
  }), Array.from(r, ([{B:m}, v]) => {
    const y = m.map(({x, y:z, z:B}) => ({x, y:z, z:B,}));
    return rb(v ? y.reverse() : y, m.u, m.C);
  });
}, Y = () => pb(n, Pa[++ra].m), Tb = () => {
  let a, b, f, k, r, m, v, y, x, z, B, g, u, A, L = 0, P = 0, K = 0, T = 1, q = 2, p = 15;
  const t = () => pb((q ? d[Fa] : Pa[B && 1 === Pa[B].G && B || 0]).m,), F = C => {
    1 < q ? (pb(d[Fa].m).multiplySelf(d[Fa].H), mb(0, Fa || 0.9 < da ? 15 : 1, -2.4)) : (t(), mb(L, P, K));
    C && (r = (ib - Wa) / ca, m = (kb - Ya) / ca);
    Wa = ib;
    Xa = jb;
    Ya = kb;
  }, N = () => {
    var C = 0, H = 0, D = 0, M = 0, U = 0, ea = 0, Q = -1;
    for (var R = 0; 36 > R; ++R) {
      var oa = 512 * R;
      for (var pa = 96; 416 > pa; pa += 4) {
        for (var va = 0; 2 > va; ++va) {
          var ha = Sb[oa + pa + va], Aa = Sb[oa + pa + va + 2];
          ha > M && (M = ha);
          ha + Aa && (0 > Q || Q === R) && (Q = R, Aa === z ? ++C : H && H !== Aa || (H = Aa, ++D));
        }
      }
    }
    z = 0 > Q ? 0 : D > 2 * C ? H : z;
    for (C = 36; 128 > C; C += 1) {
      R = Q = D = H = 0;
      oa = 512 * C;
      for (pa = 0; 128 > pa; pa += 1) {
        for (va = oa + 4 * pa, ha = 0; 2 > ha; ++ha) {
          Aa = Sb[va + ha];
          const Ba = Sb[va + ha + 2];
          (ha ? 64 < pa : 64 > pa) ? H = bb(H, Aa) : D = bb(D, Aa);
          ha ? R = bb(R, Ba) : Q = bb(Q, Ba);
        }
      }
      e(D - H) > e(U) && (U = D - H);
      e(R - Q) > e(ea) && (ea = R - Q);
    }
    y = h(1 - 0.02 * bb(e(U), e(ea)));
    U /= 255;
    M /= 255;
    ea /= 255;
    t().invertSelf();
    mb(U, M, ea, 0);
    L += ib;
    P += M;
    K += kb;
    F();
  }, V = (C, H, D, M) => fb(C, H, T || (h(e(H - C) ** 0.5 - D) + 1 / 7) * wb(1.5 * M));
  sa = () => {
    F(z);
    Z.r9r(0, 0, 128, 128, 6408, 5121, Sb);
    NO_INLINE(N)();
    !q && z === B || (B = z, t().invertSelf(), mb(Wa, Xa, Ya), L = ib, P = jb, K = kb);
    q = q && (z ? 0 : 1);
    (-20 > Wa || 109 > Ya ? -25 : -9) > Xa && (q = 2);
    1 === z && (d[9].i = -15 > Wa && 0 > Ya ? 1 : 0);
    x = fb(I(x, Xa, 2), Xa, q || 8 * e(x - Xa),);
    u = V(u, x, 2, 1);
    g = V(g, Wa, 0.5, 1);
    A = V(A, Ya, 0.5, 1);
    k = I(k, ta * (27 < z && 32 > z), 2,);
    ka ? (C = q + wb(18), Ia = fb(Ia, Wa, C), Ja = fb(Ja, x + 1.5, C), Ka = fb(Ka, Ya, C), $a = db($a)) : (Ka = V(Ka, A + -18 + 5 * k, 1, 2 + k,), Ja = V(Ja, bb(u + h((-60 - Ya) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), Ia = V(Ia, g, 1, 2 + k,), C = ab(-6, -e(A - Ka)), H = g - Ia, $a = eb($a, 90 - db(Math.atan2(C, H) / Ma), T + wb(10),), Za = eb(Za, 90 - Math.atan2(hb(C, H), Ja - u) / Ma, T + wb(10),));
    Za = h(Za, -87, 87);
    T = 0;
    var C = h(Ga, -1), H = h(Ha, -1), D = cb(hb(C, H) ** 0.5, 0.1), M = Math.atan2(C, H);
    C = D * e(C) * Math.sin(M);
    H = D * e(H) * Math.cos(M);
    D && (a = 90 - M / Ma);
    b = eb(b, a, wb(8));
    f = I(f, D, 10);
    Y().translateSelf(Wa, x, Ya).rotateSelf(0, b,);
    for (M = 0; 2 > M; ++M) {
      var U = 9.1 * c - Math.PI * M;
      pb(Pa[37].m, Y()).translateSelf(0, f * h(0.45 * Math.sin(U - Math.PI / 2)),).rotateSelf(f * Math.sin(U) * 0.25 / Ma, 0);
    }
    p = z ? 5 : I(p, q ? 13 : 19 - 2 * ab(0, Xa + 10), 2.2);
    r = z || q ? 0 : I(r, 0, 3);
    m = z || q ? 0 : I(m, 0, 3);
    v = q ? 0 : I(v, z ? 7 * h(2 * D) * y : 0, z ? 9 : 1,);
    M = ka ? (180 + $a) * Ma : 0;
    D = ca * (r + v * (H * Math.cos(M) - C * Math.sin(M)));
    U = -p * ca;
    C = ca * (m + v * (H * Math.sin(M) + C * Math.cos(M)));
    t().invertSelf();
    mb(D, U, C, 0);
    L += ib;
    P += U;
    K += kb;
    F();
  };
}, Ub = (a, b, f, k) => {
  a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
}, ac = (a, b, f) => {
  ba ? 1100 < hC.width && (pb().rotateSelf(0, 40 * Math.sin(ya) - 80, -8), ob(l, Vb, 36), ob(l, Vb, 37), ob(l, Vb, 38), Z.uae(a, !1, Vb), Z.d97(4, Pa[39].D - Pa[37].s, 5123, 2 * Pa[37].s)) : (Z.uae(a, !1, Vb), Z.d97(4, (b ? Pa[39].D : Pa[37].s) - 3, 5123, 6), Z.uae(a, !1, $b), Z.das(4, Pa[f].D - Pa[f].s, 5123, 2 * Pa[f].s, Oa.length,), Z.das(4, Pa[42].D - Pa[42].s, 5123, 2 * Pa[42].s, d.length,));
}, bc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), cc = (a, b) => {
  const f = {}, k = Z.c1h();
  return Z.abz(k, a), Z.abz(k, bc(b, 35632)), Z.l8l(k), r => r ? f[r] || (f[r] = Z.gan(k, r)) : Z.u7y(k);
}, dc = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, ec = a => Math.sin(a * Math.PI * 2), fc = a => 0.5 > a % 1 ? 1 : -1, gc = a => a % 1 * 2 - 1, hc = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, oc = a => {
  let b = 0;
  const f = () => {
    let v = 0;
    const y = Q => {
      let R, oa, pa, va = 0, ha = 0;
      const Aa = [], Ba = new Int32Array(768 * Q), ic = 2 ** (t - 9) / Q, jc = Math.PI * 2 ** (H - 8) / Q, Hb = M * Q & -2;
      for (let Ab = 0; 11 >= Ab; ++Ab) {
        for (let Bb = 0, Wb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + Ab]; 32 > Bb; ++Bb) {
          const Xb = (32 * Ab + Bb) * Q;
          for (var Qa = 0; 4 > Qa; ++Qa) {
            if (R = 0, Wb && (R = x[Wb - 1].charCodeAt(Bb + 32 * Qa) - 40, R += 0 < R ? 106 : 0), R) {
              var fa;
              if (!(fa = Aa[R])) {
                fa = R;
                let W = void 0, Ca = void 0;
                var Yb = R;
                let kc = 0, lc = 0;
                const mc = 2 > b ? gc : ec, nc = 2 > b ? 1 > b ? fc : hc : ec, Zb = new Int32Array(K + T + ea);
                for (let Ra = 0, Ib = 0; K + T + ea > Ra; ++Ra, ++Ib) {
                  let Sa = 1;
                  K > Ra ? Sa = Ra / K : K + T > Ra || (Sa = (1 - (Sa = (Ra - K - T) / ea)) * 3 ** (-p / 16 * Sa));
                  0 > Ib || (Ib -= 4 * Q, Ca = 0.00396 * 2 ** ((Yb + B - 256) / 12), W = 0.00396 * 2 ** ((Yb + A - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Zb[Ra] = 80 * (mc(kc += Ca * Sa ** (g / 32)) * z + nc(lc += W * Sa ** (L / 32)) * u + (P ? (2 * Math.random() - 1) * P : 0)) * Sa | 0;
                }
                fa = Aa[fa] = Zb;
              }
              for (let W = 0, Ca = 2 * Xb; fa.length > W; ++W, Ca += 2) {
                Ba[Ca] += fa[W];
              }
            }
          }
          for (let W, Ca = 0; Q > Ca; ++Ca) {
            Qa = 0;
            fa = 2 * (Xb + Ca);
            var Da = (((W = Ba[fa]) || pa) && (oa = 0.00308 * F, 1 !== b && 4 !== b || (oa *= Math.sin(ic * fa * Math.PI * 2) * U / 512 + 0.5), oa = 1.5 * Math.sin(oa), va += oa * ha, Da = (1 - N / 255) * (W - ha) - va, ha += oa * Da, W = 4 === b ? ha : 3 === b ? Da : va, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= V / 32, pa = 1e-5 < W * W, Da = Math.sin(jc * fa) * C / 512 + 0.5, Qa = W * (1 - Da), W *= Da), fa < Hb || (Qa += Ba[1 + fa - Hb] * 
            D / 255, W += Ba[fa - Hb] * D / 255), v + fa >> 1);
            r[Da] += (Ba[fa] = Qa) / 65536;
            m[Da] += (Ba[++fa] = W) / 65536;
          }
        }
      }
      v += 768 * Q;
    }, x = Ua[b], [z, B, g, u, A, L, P, K, T, q, p, t, F, N, V, C, H, D, M, U] = Va[b], ea = 4 * q ** 2;
    y(5513);
    y(4562);
    y(3891);
    dc(5 > ++b ? f : a);
  }, k = Db.createBuffer(2, 5362944, 44100), r = k.getChannelData(0), m = k.getChannelData(1);
  Cb.buffer = k;
  Cb.loop = !0;
  dc(f);
}, Db = new AudioContext(), l = new DOMMatrix(), n = new DOMMatrix(), nb = new Float32Array(16), Vb = new Float32Array(624), $b = new Float32Array(624), Sb = new Uint8Array(65536), Cb = Db.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
dc(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const r = [new Float32Array(16), new Float32Array(16),], m = q => {
        requestAnimationFrame(m);
        var p = (q - (aa || q)) / 1e3;
        if (ya += p, c += ca = ba ? 0 : ab(0.066, p), aa = q, 0 < ca) {
          na();
          La && c > La && (La = 0, h4.innerHTML = "");
          da = I(da, Ea ? I(da, -9, 1.5) : h(c / 3), 1,);
          ia = I(ia, d[9].h, 0.2 + 0.3 * e(2 * d[9].h - 1),);
          ra = 1;
          ta = gb(d[12].g, d[13].g);
          xa = fb(I(xa, 0, 1), db(xa + 60 * ca), d[5].g - d[6].h,);
          ua = fb(I(ua, 0, 5), db(ua + 56 * ca), ta,);
          wa = fb(I(wa, 0, 4), db(wa + 48 * ca), ta,);
          Ub(Y(), -12, 4.2, 40 * da - 66);
          Y().translateSelf(0, 0, -15).scaleSelf(1, h(1.22 - d[1].g), 1);
          Y().translateSelf(0, 0, 15).scaleSelf(1, h(1.22 - d[2].g), 1);
          Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, h(1.1 - d[6].g), 1);
          Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
          Y().translateSelf(0, 0.01 > d[3].g ? -500 : (1 - d[2].g) * d[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (d[3].g - 1), 0,);
          q = ab(d[2].h, 1 - d[4].h);
          Y().translateSelf(q * Math.sin(c / 1.5 + 2) * 12);
          Y().translateSelf(q * Math.sin(0.7 * c + 2) * 12);
          Y().translateSelf(q * Math.sin(c + 3) * 8.2);
          Y().translateSelf(9.8 * (1 - q));
          q = h(1 - 5 * q) * gb(d[4].g, d[5].g);
          Y().translateSelf(0, q * Math.sin(1.35 * c) * 4);
          Y().translateSelf(0, 0, q * Math.sin(0.9 * c) * 8);
          Y().translateSelf(0, -6.5 * d[4].h);
          Y().translateSelf(-75, (1 - d[5].h) * (1 - d[6].g) * 3, 55).rotateSelf(180 * (1 - d[5].h) + xa, 0);
          q = gb(d[7].h, d[6].h);
          Y().translateSelf(0, q * Math.sin(c) * 5 + 3.5 * (1 - bb(d[6].g, d[7].g)),);
          Y().translateSelf(0, q * Math.sin(c + 3) * 6, q * Math.sin(0.6 * c + 1) * 6,);
          Y().translateSelf(0, -7.3 * d[7].h);
          Ub(Y(), -123, 1.4, 55 + -65 * ia);
          q = gb(d[10].g, d[11].g);
          Y().translateSelf(0, -2, q * e(Math.sin(1.1 * c)) * -8.5 + 10);
          Y().translateSelf(0, -2, q * e(Math.sin(2.1 * c)) * -8.5 + 10);
          Y().translateSelf(0, -2, -8.5 * bb((1 - d[10].g) * (1 - q), q * e(Math.sin(1.5 * c))) + 10,);
          q = gb(d[8].h, d[12].h);
          for (p = 0; 4 > p; p++) {
            Y().translateSelf((2 < p ? 2 * (1 - q) + q : 0) - 100, q * Math.sin(1.3 * c + 1.7 * p) * (3 + p / 3) + 0.7, 115 + (1 & p ? -1 : 1) * (1 - d[8].h) * (1 - d[12].h) * -7 + bb(q, 0.05) * Math.cos(1.3 * c + 7 * p) * (4 - 2 * (1 - p / 3)),);
          }
          Y().translateSelf(2.5 * (1 - q) - 139.7, -3 * (1 - d[8].g) + q * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * q + 3), 0);
          Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ua);
          Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, wa);
          Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
          Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
          q = gb(d[13].h, d[14].h);
          for (p = 0; 3 > p; ++p) {
            Y().translateSelf(0, q * Math.sin(1.5 * c + 1.5 * p) * 4 + (p ? 0 : (1 - d[13].h) * (1 - d[14].h)),);
          }
          Y().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          p = gb(gb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2,);
          Y().translateSelf(0, 16 * p, 8.5 * h(2 * p - 1) + 95);
          for (q = 0; 13 > q; ++q) {
            Oa[q].F(), ob(l, $b, q);
          }
          for (q = 0; 16 > q; ++q) {
            d[q].F(), ob(l, $b, q + 13), $b[16 * q + 223] = 1 - d[q].g;
          }
          sa();
          for (q = 0; ra >= q; ++q) {
            ob(Pa[q].m, Vb, q - 1);
          }
          ja = 0;
          u();
          Z.b6o(36160, T);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          Z.uae(u("b"), !1, ob(pb().rotateSelf(0, 180).invertSelf().translateSelf(-Wa, -Xa, 0.3 - Ya,),),);
          ac(u("c"), 0, 40);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(u("b"), !1, ob(pb().translateSelf(-Wa, -Xa, -Ya - 0.3,),),);
          ac(u("c"), 0, 40);
          Z.f1s();
        }
        q = Ia;
        p = Ja;
        let t = Ka;
        ba ? (pb(la).invertSelf(), mb(3.6, 3.5), q = ib, p = jb, t = 5, pb(n, y).rotateSelf(-20, 0).invertSelf().translateSelf(-q, -p, -t,).rotateSelf(0, 99)) : pb(n, y).rotateSelf(-Za, -$a).invertSelf().translateSelf(-q, -p, -t);
        B();
        Z.b6o(36160, P);
        Z.v5y(0, 0, 2048, 2048);
        L[0](54.7 * 1.1);
        L[1](126 * 1.1);
        A();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(A("a"), !1, ob(la));
        Z.uae(A("b"), !1, ob(y));
        Z.uae(A("i"), !1, r[0]);
        Z.uae(A("j"), !1, r[1]);
        Z.ubu(A("k"), q, p, t);
        ac(A("c"), !ka, 41);
        g();
        Z.ubu(g("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ya);
        Z.ubu(g("k"), q, p, t);
        Z.uae(g("b"), !1, ob(pb(y).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, T);
        Z.f1s();
      }, v = new DOMMatrix(), y = new DOMMatrix(), x = f, z = qb(8, () => ({}));
      var k = bc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const B = cc(bc("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), g = cc(bc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), u = cc(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), A = cc(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), L = qb(2, q => {
        const p = Z.c25();
        return Z.a4v(33984 + q), Z.b9j(3553, p), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), t => {
          let F = 0, N = 0, V = 0, C = 1 / 0, H = 1 / 0, D = 1 / 0, M = -1 / 0, U = -1 / 0, ea = -1 / 0;
          Z.fas(36160, 36096, 3553, p, 0);
          Z.c4s(256);
          pb().scale3dSelf(t).multiplySelf(pb(ma[q], v).multiplySelf(y).invertSelf(),);
          for (let Q = 0; 8 > Q; ++Q) {
            const R = z[Q];
            mb(4 & Q ? 1 : -1, 2 & Q ? 1 : -1, 1 & Q ? 1 : -1);
            F -= R.x = (0 | ib) / (t * lb);
            N -= R.y = (0 | jb) / (t * lb);
            V -= R.z = (0 | kb) / (t * lb);
          }
          pb().rotateSelf(298, 139).translateSelf(F / 8, N / 8, V / 8);
          for (t = 0; 8 > t; ++t) {
            const {x:Q, y:R, z:oa} = z[t];
            mb(Q, R, oa);
            C = ab(C, ib);
            M = bb(M, ib);
            H = ab(H, jb);
            U = bb(U, jb);
            D = ab(D, kb);
            ea = bb(ea, kb);
          }
          t = 10 + q;
          D *= 0 > D ? t : 1 / t;
          ea *= 0 < ea ? t : 1 / t;
          Z.uae(B("b"), !1, ob(pb(n, v).scaleSelf(2 / (M - C), 2 / (U - H), 2 / (D - ea),).translateSelf((M + C) / -2, (U + H) / -2, (D + ea) / 2).multiplySelf(l), r[q],),);
          ac(B("c"), !ka, 41);
        };
      }), P = Z.c5w();
      k = Z.c25();
      const K = Z.c3z(), T = Z.c5w();
      u();
      Z.uae(u("a"), !1, ob(zb(1e-4, 2, 1.4, 0.4)));
      A();
      Z.ubh(A("q"), 2);
      Z.ubh(A("h"), 1);
      Z.ubh(A("g"), 0);
      g();
      Z.ubh(g("q"), 2);
      Z.b6o(36160, P);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, T);
      Z.bb1(36161, K);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, K);
      Z.a4v(33986);
      Z.b9j(3553, k);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, k, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, x);
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
      NO_INLINE(Tb)();
      requestAnimationFrame(m);
    }
  }, f = new Image();
  f.onload = f.onerror = b;
  f.src = Na;
  NO_INLINE(oc)(() => {
    dc(() => {
      let m = 0;
      const v = [], y = [], x = [], z = [], B = new Int32Array(8), g = new Map(), u = new Int32Array(B.buffer, 0, 5), A = new Float32Array(B.buffer);
      Pa.map((L, P) => {
        let K;
        const T = q => {
          let {x:p, y:t, z:F} = K[q], N = (A[0] = p, A[1] = t, A[2] = F, q = "" + (K.C ? u : B), g.get(q));
          return void 0 !== N ? (p = 3 * N, z[p] = (z[p++] + B[5]) / 2, z[p] = (z[p++] + B[6]) / 2, z[p] = (z[p] + B[7]) / 2) : (g.set(q, N = g.size), y.push(p, t, F, A[3]), x.push(B[4]), z.push(B[5], B[6], B[7])), N;
        };
        for (K of (A[3] = 41 < P ? -14 : L.G && P, L.o)) {
          const {x:q, y:p, z:t} = Kb(K);
          B[4] = 0 | K.u;
          B[5] = 32767 * q;
          B[6] = 32767 * p;
          B[7] = 32767 * t;
          for (let F = 2, N = T(0), V = T(1); K.length > F; ++F) {
            v.push(N, V, V = T(F));
          }
        }
        L.o = null;
        L.s = m;
        L.D = m = v.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(y), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(z), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(x), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [L, P, K, T, q] = JSON.parse(localStorage.DanteSP22,);
        d.map((p, t) => p.g = p.h = p.i = t ? 0 | L[t] : 0);
        Oa.map((p, t) => p.i = 0 | P[t]);
        Fa = K;
        ia = q;
        c = T;
        ca = 0;
      } catch {
      }
      xb();
      da = h(Fa);
      dc(b);
    });
    const k = m => w(Math.sin(m / 10 * Math.PI), m / 10).rotateSelf(+m).scaleSelf(1.0001 - m / 10, 0, 1 - m / 10), r = qb(10, m => ub(sb(tb(18), k(m)).reverse(), sb(tb(18), k(m + 1)), 1,)).flat();
    S(() => O([Ta.slice(1),], w(-2).scale3d(3).rotate(90, 0)), 0);
    S(() => {
      const m = g => S(() => {
        Ta.map(({x:u, z:A}) => {
          O(G(11, 1), w(4 * u, 4, g + 4 * A).scale(0.8, 3, 0.8), J(0.5, 0.3, 0.7, 0.6),);
          O(G(), w(4 * u, 7, g + 4 * A).scale(1, 0.3), J(0.5, 0.5, 0.5, 0.3));
        });
        O(X(E(G(), w(0, 0, g).scale(5, 1, 5), J(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(u => E(G(), w(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), J(0.8, 0.8, 0.8, 0.3),)),),);
        O(G(), w(0, -3, g).scale(8, 2, 8), J(0.4, 0.4, 0.4, 0.3));
      }), v = g => X(E(G(), w(0, -g / 2).scale(6, g - 1, 2.2)), E(G(), w(0, -g / 2 - 6).scale(4, g - 3, 4)), E(G(32, 1), w(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),), y = () => S(() => qb(7, g => O(E(G(6, 1), w(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), J(0.3, 0.3, 0.38),),))), x = X(E(G(30, 1, 1.15, 1), w(0, -3).scale(3.5, 1, 3.5), J(0.7, 0.4, 0.25, 0.7),), E(G(30, 1, 1.3, 1), w(0, -2.5).scale(2.6, 1, 3), J(0.7, 0.4, 0.25, 0.2),), E(G(), w(4, -1.2).scale3d(2), J(0.7, 0.4, 0.25, 0.3)),), z = (S(() => 
      {
        O(x);
        Fb(w(0, -3, 4));
      }), Fb(w(-5.4, 1.5, -19).rotate(0, -90)), Gb(w(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Gb(w(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...tb(18).map(({x:g, z:u}) => [7 * g, 10 * u, 4.5 - 2 * e(g),]),), Ta.map(({x:g, z:u}) => O(G(6), w(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), J(0.6, 0.3, 0.3, 0.4))), [-15, 15,].map((g, u) => {
        y();
        y();
        O(G(), w(0, 6.3, g).scale(4, 0.3, 1), J(0.3, 0.3, 0.3, 0.4));
        O(G(), w(0, 1, g).scale(3, 0.2, 0.35), J(0.5, 0.5, 0.5, 0.3));
        O(G(), w(0, 0, u ? 22 : -23).scale(3, 1, 8), J(0.9, 0.9, 0.9, 0.2));
        qb(5, A => O(r, w(18.5 * (u - 0.5), 0, 4.8 * A - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2), J(1, 1, 0.8, 0.2),));
      }), O(G(), w(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), J(0.8, 0.8, 0.8, 0.2)), O(G(), w(3, 1.5, -20).scale(0.5, 2, 5), J(0.7, 0.7, 0.7, 0.2)), O(G(), w(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), J(0.75, 0.75, 0.75, 0.2),), O(G(5), w(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), J(0.6, 0.3, 0.3, 0.4),), O(G(), n.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), J(0.8, 0.2, 0.2, 0.5),), O(X(Rb(E(G(6, 0, 0, 0.3), w(8, -3, -4).scale(13, 1, 13), J(0.7, 0.7, 0.7, 0.2),
      ), E(G(6), w(0, -8).scale(9, 8, 8), J(0.4, 0.2, 0.5, 0.5)), E(G(6, 0, 0, 0.3), w(0, -0.92).scale(13, 2, 13), J(0.8, 0.8, 0.8, 0.2),),), E(G(5), n.scale(5, 30, 5), J(0.4, 0.2, 0.6, 0.5)), E(G(5, 0, 1.5), w(0, 1).scale(4.5, 0.3, 4.5), J(0.7, 0.5, 0.9, 0.2),), E(G(), n.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), J(0.5, 0.5, 0.5, 0.5),), E(G(6), w(15, -1.5, 4).scale(3.5, 1, 3.5), J(0.5, 0.5, 0.5, 0.5),),),), S(() => {
        O(G(5), w(0, -0.2).scale(5, 1, 5), J(0.6, 0.65, 0.7, 0.3));
        Fb(w(0, 1.2));
      }), Fb(w(15, -2, 4)), S(() => {
        O(X(Rb(E(G(), n.scale(1.5, 1, 5), J(0.9, 0.9, 0.9, 0.2)), E(G(6), n.scale(4, 1, 5), J(0.9, 0.9, 0.9, 0.2)), E(G(), w(0, -2).scale(2, 3.2, 1.9), J(0.3, 0.8, 0.5, 0.5),), E(G(16, 1, 0, 4), n.scale(1, 1, 1.5).rotate(0, 90), J(0.9, 0.9, 0.9, 0.2),),), E(G(), n.scale(1.3, 10, 1.3), J(0.2, 0.7, 0.4, 0.6)),), w(0, 0, 45),);
        Gb(w(0, 2.8, 45), [0, 0, 4.5,]);
      }), m(35), m(55), O(G(), w(-18.65, -3, 55).scale(2.45, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2)), S(() => {
        O(G(3), w(-23, -1.7, 55.8).scale(5, 0.7, 8.3), J(0.3, 0.6, 0.6, 0.2));
        O(G(8), w(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), J(0.8, 0.8, 0.8, 0.2));
        O(G(), w(-23, -3, 55).scale(5.2, 1.7, 3), J(0.5, 0.5, 0.5, 0.3));
        O(G(), w(-23, -2.2, 62).scale(3, 1, 4), J(0.5, 0.5, 0.5, 0.3));
        Fb(w(-23, -0.5, 66.5));
      }), S(() => {
        O(G(), w(-22.55, -3, 55).scale(1.45, 1.4, 2.7), J(0.7, 0.7, 0.7, 0.2));
        O(X(E(G(), n.scale(3, 1.4, 2.7)), E(G(), n.scale(1.2, 8, 1.2)),), w(-33, -3, 55), J(0.7, 0.7, 0.7, 0.2),);
      }), S(() => {
        O(X(E(G(), w(-27, -3, 55).scale(3, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2),), E(G(), w(-27, -3, 55).scale(1, 3), J(0.9, 0.9, 0.9, 0.2)),),);
        O(G(), w(-39, -3, 55).scale(3, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2));
      }), S(() => {
        O(G(6), w(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), J(0.7, 0.7, 0.7, 0.4),);
      }), Fb(w(-55, -1.1, 46).rotate(0, 90)), O(G(6), w(-61.3, -2.4, 49).scale(3, 1, 5), J(0.4, 0.6, 0.6, 0.3)), O(G(7), w(-57, -2.6, 46).scale(4, 1, 4), J(0.8, 0.8, 0.8, 0.3)), [...E(G(), w(0, -3).scale(11, 1.4, 3), J(0.9, 0.9, 0.9, 0.2)), ...E(G(), w(0, -2.2).scale(7.7, 0.5, 4), J(0.5, 0.5, 0.5, 0.2),), ...X(E(G(6), n.rotate(90).scale(6, 8, 6), J(0.3, 0.6, 0.6, 0.3)), E(G(4, 0, 0.01), w(0, 6).scale(12, 2, 0.75).rotate(0, 45), J(0.3, 0.6, 0.6, 0.3),), E(G(6), n.rotate(90).scale(5, 12, 5), J(0.3, 
      0.6, 0.6, 0.3)), ...[5, 0, -5,].map(g => E(G(5), w(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), J(0.3, 0.6, 0.6, 0.3),)),),]), B = (O(z, w(-53, 0, 55)), S(() => O(z), 2), O(G(), w(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), J(0.7, 0.7, 0.7, 0.2),), O(G(3, 0, -0.5), w(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), J(0.8, 0.8, 0.8, 0.2),), O(X(Rb(E(G(), w(-100, -2.4, 55).scale(8, 0.9, 8), J(0.8, 0.8, 0.8, 0.2),), E(G(), w(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), J(0.8, 0.8, 
      0.8, 0.2),), E(G(), w(-100, -2.6, 70).scale(3, 1.1, 7), J(0.8, 0.8, 0.8, 0.2),), E(G(), w(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), J(0.8, 0.8, 0.8, 0.2),), E(G(6), w(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), J(0.6, 0.6, 0.6, 0.3),), E(G(), w(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), J(0.8, 0.8, 0.8, 0.2),), E(G(), w(-100, 0.42, 92).scale(3, 1.1, 4.1), J(0.8, 0.8, 0.8, 0.2),),), E(G(8), w(-100, -1, 55).scale(7, 0.9, 7), J(0.3, 0.3, 0.3, 0.4),), E(G(8), w(-100, -2, 
      55).scale(4, 0.3, 4), J(0.4, 0.4, 0.4, 0.5),), E(G(8, 0, -3.1), w(-100, -3, 55).scale(0.4, 1, 0.4), J(0.4, 0.4, 0.4, 0.5),),),), Gb(w(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Gb(w(-89, 0.2, 80), [0, 0, 6,]), O(X(E(G(), w(-100, 1, 63).scale(7.5, 4), J(0.5, 0.5, 0.5, 0.4)), E(G(), w(-100, 0, 70).scale(2, 2, 10), J(0.5, 0.5, 0.5, 0.4),), E(G(20, 1), w(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), J(0.5, 0.5, 0.5, 0.4),),),), Ta.map(({x:g, z:u}) => {
        O(G(6), w(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), J(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(A => O(G(6), w(7 * g - 100, A, 7 * u + 55).scale(1.3, 0.5, 1.3), J(0.4, 0.2, 0.2, 0.8),));
      }), qb(7, g => {
        O(G((23 * g + 1) % 5 + 5, 0, 0.5), w(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3,), J(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),);
      }), O(G(), w(-87, -9.5, 24).scale(7, 1, 3), J(0.4, 0.5, 0.6, 0.4)), O(G(4), w(-86, -9.2, 27).scale(5, 1, 5), J(0.5, 0.6, 0.7, 0.3)), O(G(12, 1), w(-86, -9, 31).scale(1.5, 1, 1.5), J(0.3, 0.3, 0.4, 0.1)), Fb(w(-86, -7.5, 31)), S(() => {
        [0, 12, 24,].map(g => O(G(), w(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), J(0.2, 0.5, 0.6, 0.2),));
      }), S(() => {
        [6, 18,].map(g => O(G(), w(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), J(0.1, 0.4, 0.5, 0.2),));
      }), O(X(Rb(E(G(5), w(0, 0, -7).scale(2, 1.2, 2), J(0.2, 0.4, 0.7, 0.3),), E(G(5), n.scale(9, 1.2, 9), J(0, 0.2, 0.3, 0.5)), E(G(), n.scale(11, 1, 13), J(0.3, 0.4, 0.6, 0.3)),), E(G(5), n.scale(5.4, 5, 5.4), J(0, 0.2, 0.3, 0.5)),), w(-38.9, -11.3, 17),), Fb(w(-38.9, -9.6, 10)), S(() => {
        O(X(Rb(E(G(5), w(0, 2).scale(5, 7, 5).skewY(8), J(0.2, 0.4, 0.5, 0.5),), E(G(5), w(0, 6).scale(1.1, 7, 1.1).skewY(-8), J(0.25, 0.35, 0.5, 0.5),), E(G(5), w(0, 9).scale(0.6, 7, 0.6).skewY(8), J(0.35, 0.3, 0.5, 0.5),),), E(G(5), n.scale(4, 8, 4), J(0.2, 0.4, 0.5, 0.5)), E(G(5), w(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), J(0.2, 0.4, 0.5, 0.5),),), w(-38.9, -11.3, 17),);
        Gb(w(-39.1, -0.6, 17).rotate(11), ...tb(15).map(({x:g, z:u}) => [3 * g, 3 * u, 1.2,]),);
      }), Ta.map(({x:g, z:u}) => {
        O(G(14, 1), w(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), J(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(A => O(G(17, 1), w(9 * g - 38.9, A - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), J(0.6, 0.6, 0.6, 0.3),));
      }), O(X(Rb(E(G(6), w(0, 0, -36).scale(15, 1.2, 15), J(0.7, 0.7, 0.7, 0.3),), E(G(), w(0, 0, -18).scale(4, 1.2, 6), J(0.45, 0.4, 0.6, 0.3),),), ...qb(6, g => qb(6, u => E(G(6), w(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2), J(0.7, 0.7, 0.7, 0.3),))).flat(),), w(-38.9, -11.3, 17),), Gb(w(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), O(G(5), w(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), J(0.8, 0.1, 0.25, 0.4),), Fb(w(-84, -0.5, 85).rotate(0, 
      45)), S(() => {
        O(x);
        Fb(w(0, -3, -4).rotate(0, 180));
      }), X(E(G(), w(0, -0.5, 1).scale(1.15, 1.2, 6.5), J(0.25, 0.25, 0.35, 0.3),), X(E(G(3), w(0, 0, -5.5).scale(3, 2), J(0.6, 0.3, 0.4, 0.3)), E(G(), w(0, 0, -3.65).scale(2.5, 3), J(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(g => E(G(), w(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), J(0.7, 0.2, 0, 0.3),)),));
      S(() => qb(2, g => O(B, w(9 * g - 110 + (1 & g), 1.9, -12))));
      S(() => qb(2, g => O(B, w(9 * (g + 2) - 110 + (1 & g), 1.9, -12))));
      S(() => qb(3, g => O(B, w(9 * g - 106, 1.9, -12))));
      O(X(Rb(E(G(), w(26.5, -1.6, 10).scale(20, 2.08, 3)), E(G(), w(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...qb(4, g => E(G(), w(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9)),), ...qb(3, g => E(G(), w(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9)),),), w(-123, 0.2, -12), J(0.5, 0.5, 0.6, 0.2),);
      Fb(w(-116, -1.4, -18).rotate(0, 180));
      O(G(), w(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), J(0.8, 0.8, 0.8, 0.2),);
      O(G(6), w(-116, -2.6, -16.5).scale(3.2, 0.8, 3), J(0.6, 0.5, 0.7, 0.2));
      O(G(), w(-115.5, -17, -12).scale(0.5, 15, 2.2), J(0.6, 0.6, 0.6, 0.3));
      O(G(8), w(-114, -17, -2).scale(2, 15, 2), J(0.6, 0.6, 0.6, 0.3));
      O(G(8), w(-79, -17, -2).scale(2, 15, 2), J(1, 1, 1, 0.3));
      O(G(), w(-77, -17, -50.5).scale(2.2, 15, 0.5), J(0.6, 0.6, 0.6, 0.3));
      qb(3, g => {
        O(v(16), w(12 * g - 109, -9, -12), J(0.6, 0.6, 0.6, 0.3));
        O(v(16), w(-77, -9, -12 * g - 20).rotate(0, 90), J(0.6, 0.6, 0.6, 0.3),);
      });
      O(X(E(G(12), w(-77, -14.5, -12).scale(4, 17.5, 4), J(0.7, 0.7, 0.7, 0.2),), E(G(), w(-79, 0.1, -12).scale(3.5, 2, 1.3), J(0.4, 0.5, 0.6, 0.2),), E(G(), w(-77, 0.1, -14).scale(1.5, 2, 2), J(0.4, 0.5, 0.6, 0.2),), E(G(12), w(-77, 3.1, -12).scale(3, 5, 3), J(0.4, 0.5, 0.6, 0.2),),),);
      O(G(), w(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), J(0.6, 0.6, 0.6, 0.3),);
      O(G(9), w(-98, -18.4, -40).scale(2.5, 13.5, 2.5), J(0.5, 0.5, 0.5, 0.3));
      O(X(E(G(), w(-93, -5.8, -40).scale(9, 1, 5), J(0.8, 0.8, 0.8, 0.1),), E(G(9), w(-98, -5.8, -40).scale(3, 8, 3), J(0.7, 0.7, 0.7, 0.2),),),);
      Fb(w(-98, -4.4, -40).rotate(0, 90));
      Gb(w(-115, 0.2, -12), [0, 0, 3.5,]);
      Gb(w(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      O(X(Rb(E(G(6, 0, 0, 0.6), w(-100, 0.7, 105.5).scale(8, 1, 11), J(0.7, 0.7, 0.7, 0.2),), E(G(), w(-101.5, 0.7, 93.5).scale(10.5, 1, 2), J(0.7, 0.7, 0.7, 0.2),),), E(G(5), w(-100, 0.7, 113).scale(4, 3, 4), J(0.7, 0.7, 0.7, 0.2),),),);
      qb(4, g => S(() => O(G(6), w(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), J(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),)));
      S(() => {
        O(X(E(G(10), n.scale(6, 2, 6), J(0.1, 0.6, 0.5, 0.3)), E(G(10), n.scale(3.3, 6, 3.3), J(0.1, 0.6, 0.5, 0.5)),),);
        O(G(15, 1), w(-7.5).rotate(0, 90).scale(3, 2.3, 3), J(0.4, 0.4, 0.4, 0.3),);
        O(G(10), w(-7.5).rotate(0, 90).scale(2, 2.5, 2), J(0.3, 0.8, 0.7, 0.3));
        O(G(5), w(-7.5).rotate(0, 90).scale(1, 3), J(0.5, 0.5, 0.5, 0.5));
        Fb(w(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(g => O(r, n.rotate(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), J(1, 1, 0.8, 0.2),));
        Gb(w(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(g => {
        [7.2, 1.5,].map(u => O(G(15, 1), w(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), J(0.5, 0.24, 0.2, 0.4),));
        O(r, w(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), J(1, 1, 0.8),);
        O(G(12, 1), w(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), J(0.6, 0.24, 0.2, 0.5),);
        O(X(E(G(), w(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), J(0.5, 0.5, 0.5, 0.4),), E(G(), n.scale(3, 3, 10), J(0.6, 0.24, 0.2, 0.5)), E(G(28, 1), w(0, 3, -5).scale(3, 4, 10).rotate(90, 0), J(0.6, 0.24, 0.2, 0.5),), E(G(5), w(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), J(0.6, 0.24, 0.2, 0.5),), E(G(5), w(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), J(0.6, 0.24, 0.2, 0.5),),), w(g - 100, 0.7, 97),);
      });
      O(X(E(G(), w(-82.07, 0.8, 106).scale(11, 0.9, 2.2), J(0.7, 0.7, 0.7, 0.1),), E(G(45, 1), w(-81, 0.7, 106).scale3d(7.7), J(0.7, 0.7, 0.7, 0.1),),),);
      S(() => {
        O(X(E(G(45, 1), n.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)), E(G(), w(0, 0, -5.5).scale(1.5, 3, 2.7), J(0.45, 0.45, 0.45, 0.2),),),);
        O(G(8), w(0, 2).scale(3, 1.5, 3).rotate(0, 22), J(0.7, 0.7, 0.7, 0.1));
        O(G(5), w(0, 2).scale(1, 2), J(0.3, 0.3, 0.3, 0.2));
        Gb(w(0, 3), ...tb(14).map(({x:g, z:u}) => [5.6 * g, 5.6 * u, 2,]),);
      });
      S(() => {
        [-1, 1,].map(g => O(r, n.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), J(1, 1, 0.8),));
        O(X(E(G(28, 1), w(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3),), E(G(), n.scale(9, 5, 2), J(0.3, 0, 0, 0.3)),),);
        O(E(G(28, 1), n.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)),);
        O(E(G(5), w(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)),);
      });
      S(() => {
        O(X(E(G(28, 1), w(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3),), E(G(), w(7).scale(9, 5, 2), J(0.3, 0, 0, 0.3)), E(G(), w(0, 0, 7).scale(2, 5, 9), J(0.3, 0, 0, 0.3)),),);
        O(E(G(28, 1), n.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)),);
        O(E(G(5), w(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)),);
      });
      S(() => {
        O(X(E(G(28, 1), w(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3),), E(G(), w(7).scale(9, 5, 2), J(0.3, 0, 0, 0.3)), E(G(), w(0, 0, -7).scale(2, 5, 9), J(0.3, 0, 0, 0.3)),),);
        O(E(G(28, 1), n.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)),);
        O(E(G(5), w(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)),);
      });
      O(G(), w(-58, 1, 106).scale(2, 0.65, 2), J(0.7, 0.7, 0.7, 0.2));
      O(G(), w(-50.7, 1, 99).scale(2, 0.65, 1), J(0.7, 0.7, 0.7, 0.2));
      O(G(), w(-42, 0.4, 91).scale(5, 1, 2.5), J(0.7, 0.7, 0.7, 0.3));
      O(G(), w(-34.2, 0.4, 91).scale(3, 1, 3), J(0.7, 0.7, 0.7, 0.3));
      Fb(w(-34, 2.7, 96).rotate(-12, 0));
      O(G(5), w(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), J(0.2, 0.5, 0.5, 0.6),);
      [J(0.1, 0.55, 0.45, 0.2), J(0.2, 0.5, 0.5, 0.3), J(0.3, 0.45, 0.55, 0.4),].map((g, u) => S(() => {
        O(G(), w(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
        2 === u && O(G(), w(-29.1, 0.4, 91).scale(2.1, 1, 3), J(0.7, 0.7, 0.7, 0.3));
        1 === u && O(G(), w(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), J(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(g => O(r, w(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), J(1, 1, 0.8),));
      qb(3, g => O(v(24.7 - 0.7 * (1 & g)), w(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)), 1 & g ? J(0.5, 0.5, 0.5, 0.3) : J(0.35, 0.35, 0.35, 0.5),));
      O(X(E(G(6, 0, 0, 0.3), w(0, -0.92, 95).scale(14, 2, 14), J(0.8, 0.8, 0.8, 0.2),), E(G(5), w(0, 0, 95).scale3d(6), J(0.3, 0.3, 0.3, 0.5)),),);
      Fb(w(0, 1.7, 82).rotate(0, 180));
      O(G(5), w(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), J(0.5, 0.3, 0.3, 0.4),);
      O(G(6), w(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), J(0.5, 0.6, 0.7, 0.3),);
      O(G(), w(0, 16, 129).scale(1.5, 1, 2), J(0.5, 0.6, 0.7, 0.3));
      O(G(7), w(0, 16.2, 133).scale(5, 1, 5), J(0.4, 0.5, 0.6, 0.4));
      O(X(Rb(E(G(), w(0, 16, 110.5).scale(12, 1, 3), J(0.5, 0.3, 0.3, 0.4),), E(G(), w(0, 16, 111).scale(3, 1, 3.8), J(0.5, 0.3, 0.3, 0.4),),), E(G(5), w(0, 16, 103.5).scale(5.5, 5, 5.5), J(0.5, 0.3, 0.3, 0.4),),),);
      S(() => {
        O(G(3), w(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), J(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(g => {
          O(G(6), w(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), J(0.7, 0.7, 0.7, 0.4),);
          O(G(), w(0, 6.2, g + 95).scale(0.5, 11, 0.5), J(0.5, 0.3, 0.3, 0.4),);
        });
      });
      S(() => {
        O(G(5), n.scale(5, 1.1, 5), J(0.5, 0.3, 0.3, 0.4));
        O(G(5), n.scale(5.5, 0.9, 5.5), J(0.25, 0.25, 0.25, 0.4));
        Fb(w(0, 1.5, -1).rotate(0, 180));
      });
      Gb(w(0, 3, 95), ...tb(9).map(({x:g, z:u}) => [9 * g, 9 * u, 4,]),);
      Gb(w(0, 19, 134), [0, 0, 3.5,]);
    });
    S(() => {
      O(vb(20), w(0, 1).scale3d(0.5), J(1, 0.3, 0.4));
      O(vb(30), n.scale(0.65, 0.8, 0.55), J(1, 0.3, 0.4));
      O(G(), w(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), J(0.3, 0.3, 0.3));
      [-1, 1,].map(m => {
        O(r, n.rotate(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), J(1, 1, 0.8),);
        O(E(X(G(15, 1), E(G(), w(0, 0, 1).scale(2, 2, 0.5)),), n.rotate(-90, 0).scale(0.1, 0.05, 0.1), J(0.3, 0.3, 0.3),), w(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),);
        S(() => {
          O(G(20, 1), w(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), J(1, 0.3, 0.4));
        });
      });
    });
    S(() => {
      O(G(6).slice(0, -1), n.scale(0.77, 1, 0.77), J(1, 0.3, 0.5));
    }, 0);
    S(() => {
      O(vb(30, 24, (m, v, y) => {
        const x = v / 24, z = m * Math.PI * 2 / 30, B = Math.sin(x ** 0.6 * Math.PI / 2);
        m = x * x * Math.sin(m * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:y.C = 0, y:-0.5, z:0,} : {x:Math.cos(z) * B, y:Math.cos(x * Math.PI) - x - m, z:Math.sin(z) * B + Math.sin(m * Math.PI * 2) / 4,};
      }), n.scale(0.7, 0.7, 0.7), J(1, 1, 1),);
      [-1, 1,].map(m => O(vb(12), w(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    S(() => {
      O(G(6, 1), n.scale(0.13, 1.4, 0.13), J(0.3, 0.3, 0.5, 0.1));
      O(G(10), w(0, 1).scale(0.21, 0.3, 0.21), J(1, 0.5, 0.2));
      O(G(3), w(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), J(0.2, 0.2, 0.2, 0.1),);
    }, 0);
  });
});

