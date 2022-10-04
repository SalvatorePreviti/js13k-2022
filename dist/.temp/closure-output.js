let aa, ca, da, ia, ja, ka, la, ma, na, qa, ra, sa, ta, ua, wa, xa, ya, c = 0, za = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 1;
const Na = Math.PI / 180, Oa = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Pa = [], d = [], e = [], Ta = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ua = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Va = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Wa = 0, Xa = 0, Ya = 0, Za = 0, $a = 180;
const h = NO_INLINE(a => 0 > a ? -a : a), ab = NO_INLINE((a, b) => a < b ? a : b), bb = NO_INLINE((a, b) => b < a ? a : b), cb = (a, b) => h(a) > b ? a : 0, l = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a, db = a => Math.atan2(Math.sin(a * Na), Math.cos(a * Na)) / Na, eb = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * l(f) || 0, fb = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0, gb = (a, b) => (a = l(a), fb(a, 1 - a, b)), hb = (a, b, f = 0) => Math.sqrt(a * a + b * b + 
f * f), mb = (a = 0, b = 0, f = 0, k = 1) => {
  ib = n.m11 * a + n.m21 * b + n.m31 * f + n.m41 * k;
  jb = n.m12 * a + n.m22 * b + n.m32 * f + n.m42 * k;
  kb = n.m13 * a + n.m23 * b + n.m33 * f + n.m43 * k;
  lb = n.m14 * a + n.m24 * b + n.m34 * f + n.m44 * k;
};
var ib, jb, kb, lb;
const ob = (a, b = nb, f = 0,) => (f *= 16, b[f++] = a.m11, b[f++] = a.m12, b[f++] = a.m13, b[f++] = a.m14, b[f++] = a.m21, b[f++] = a.m22, b[f++] = a.m23, b[f++] = a.m24, b[f++] = a.m31, b[f++] = a.m32, b[f++] = a.m33, b[f++] = a.m34, b[f++] = a.m41, b[f++] = a.m42, b[f++] = a.m43, b[f] = a.m44, b), pb = (a = w, b = n,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), D = NO_INLINE((a, b, f) => w.translate(a, b, f)), qb = (a, b) => Array.from(Array(a), (f, k) => b(k)), rb = (a, b, f) => (a.C = f, a.u = b, a), sb = (a, b, f = a.u,) => (pb(b), rb(a.map(({x:k, y:r, z:m}) => (mb(k, r, m), {x:ib, y:jb, z:kb,})), f, a.C,)), F = (a, b, f) => a.map(k => sb(k, b, f)), tb = (a, b = 0) => qb(a, f => {
  const k = Math.cos(2 * Math.PI * f / a);
  return {x:Math.sin(2 * Math.PI * f / a), y:0, z:0.01 > h(k) ? k : 0 > k ? k - b : k + b,};
}), ub = (a, b, f) => a.map((k, r, {length:m}) => rb([k, b[m - r - 1], b[m - (r + 1) % m - 1], a[(r + 1) % m],], a.u, f,)), I = (a, b, f = 0, k,) => (a = a ? tb(a, k) : Ta, k = sb(a, D(0, 1).scale3d(0 < f ? f : 1)), a = sb(a, D(0, -1).scale3d(0 > f ? -f : 1)).reverse(), [...ub(a, k, b), k, a,]), vb = (a, b = a, f = (k, r) => (r *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(r), y:Math.cos(r), z:Math.sin(k) * Math.sin(r),})) => {
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
}, wb = NO_INLINE(a => 1 - Math.exp(-a * da)), K = NO_INLINE((a, b, f) => fb(a, b, wb(f))), xb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Ea = Pa.reduce((a, {i:b}) => a + b, 0)] + " / XIII";
}, yb = () => {
  localStorage.DanteSP22 = JSON.stringify([d.map(({i:a}) => a), Pa.map(({i:a}) => a), Ga, c, ja,]);
}, L = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a), zb = (a, b, f, k) => new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Eb = () => {
  let a, b, f, k, r, m, v, y, x, z, B, g, u, A, P = !0;
  const Q = [], M = () => {
    b4.innerHTML = "Music: " + P;
    ca || !P ? Cb.disconnect() : Cb.connect(Db.destination);
  }, N = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    na = [zb(0.3, 55, q, 1.732051), zb(55, 181, q, 1.732051),];
    ma = zb(0.3, 181, q, 1.732051);
    k = y = void 0;
    Q.length = ka = A = g = u = Ha = Ia = 0;
  }, p = (q, t = 0) => {
    if (ca !== q) {
      ca = q;
      la = t;
      N();
      document.body.className = q ? "l m" : "l";
      try {
        q ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), Cb.start());
      } catch {
      }
      M();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => p(!1);
  b2.onclick = () => p(!1, 1);
  b5.onclick = () => p(!0);
  b4.onclick = () => {
    P = !P;
    M();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = q => {
    if (!ca && (q.target === hC && (ka = 1), la)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = q => {
    let t;
    q.repeat || (t = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (Q[t] = !!q.type[5] && !0) && (0 === t && (ka = 1), 1 === t && p(!0)));
  };
  onmousemove = ({movementX:q, movementY:t}) => {
    la && (q || t) && ($a += 0.1 * q, Za += 0.1 * t);
  };
  hC.ontouchstart = q => {
    if (!ca) {
      for (let {pageX:t, pageY:H, identifier:O} of q.changedTouches) {
        la && t > hC.clientWidth / 2 ? void 0 === y && (x = 0, m = t, v = H, y = O, z = $a, B = Za) : void 0 === k && (r = 0, b = t, f = H, k = O);
      }
      a = za;
    }
  };
  hC.ontouchmove = q => {
    if (!ca) {
      for (let {pageX:C, pageY:E, identifier:G} of q.changedTouches) {
        var t, H, O, U;
        y === G && ($a = z + (C - m) / 2.3, Za = B + (E - v) / 2.3, x = 1);
        k === G && (G = (b - C) / 20, t = h(G), H = (f - E) / 20, O = h(H), (U = 0.5 < bb(t, O)) && (r = 1), g = (U && 0.2 < t) * l(G, -1), u = (U && 0.2 < O) * l(H, -1), 2 < t && (b = C + 20 * (0 > G ? -1 : 1)), 2 < O && (f = E + 20 * (0 > H ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = q => {
    let t;
    document.activeElement === document.body && q.preventDefault();
    for (const H of q.changedTouches) {
      H.identifier === y ? (y = void 0, x || (t = 1), x = 0) : H.identifier === k ? (k = void 0, u = g = 0, r || (t = 1), r = 0) : t = 1;
    }
    q.target === hC && t && a && 0.02 < (q = za - a) && 0.7 > q && (ka = 1);
  };
  qa = () => {
    Ha = u + (Q[4] ? 1 : 0) - (Q[5] ? 1 : 0);
    Ia = g + (Q[2] ? 1 : 0) - (Q[3] ? 1 : 0);
    var q = navigator.getGamepads()[0];
    if (q) {
      const t = O => H[O]?.pressed || 0 < H[O]?.value ? 1 : 0, H = q.buttons;
      q = q.axes;
      la && (Za += da * cb(q[3], 0.3) * 80, $a += da * cb(q[2], 0.3) * 80);
      Ha += t(12) - t(13) - cb(q[1], 0.2);
      Ia += t(14) - t(15) - cb(q[0], 0.2);
      t(9) && p(!0);
      (q = t(3) || t(2) || t(1) || t(0)) && !A && (ka = 1);
      A = q;
    }
  };
  document.onvisibilitychange = onblur = onresize = N;
  p(!0);
}, T = (a, b = new DOMMatrix(), f) => ra.o.push(...F(a, b, f)), W = (a, b = 1) => {
  const f = ra;
  e.push(ra = {m:new DOMMatrix(), G:b, o:[],},);
  a();
  ra = f;
}, Fb = a => {
  const b = ra, f = d.length, k = {i:0, g:0, h:0, m:b.m, H:a, F() {
    k.g = K(k.g, k.i, 4);
    k.h = K(k.h, k.i, 1);
    pb(b.m).multiplySelf(a);
    ka && 3 > (mb(), hb(Wa - ib, Xa - jb, Ya - kb,)) && (0.3 > k.g || 0.7 < k.g) && (k.i = k.i ? 0 : 1, f && 1 / 0 > Ma && (Ma = c + 1, h4.innerHTML = "* click *"), Ga = f, yb());
    !f && k.i && 0.8 < k.g && (k.i = 0, 13 > Ea ? 1 / 0 > Ma && (Ma = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!") : Fa || (1 / 0 > Ma && (Ma = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), Fa = 1));
    n.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  d.push(k);
  T(I(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
  T(I(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
  T(I(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), L(0.5, 0.5, 0.4));
}, Gb = (a, ...b) => {
  let f, k, r, m = 0, v = 0, y = 1, x = 3, z = -1;
  const B = {i:0, F() {
    if (!B.i) {
      var p;
      let q, t, H, O, U = 1, C = 1 / 0;
      for (const E of b) {
        const G = hb(u - E[0], A - E[1]), J = G - E[2];
        O ||= 0 > J;
        0 < J && C > J && (C = J, g = E);
        U = ab(U, G / E[2]);
      }
      O || (p = u - g[0], q = A - g[1], t = hb(p, q), H = Math.atan2(-q, p), y && (v = (Math.random() - 0.5) * Math.PI / 2, x = l(x / (1 + Math.random()))), H += v, z = -Math.cos(H), m = Math.sin(H), 0.1 < t && (t = ab(t, g[2]) / t, u = p * t + g[0], A = q * t + g[1]));
      y = O;
      x = K(x, 6 * (1 - U) + 3, U + 3);
      P = K(P, u = K(u, u + z, x), x);
      Q = K(Q, A = K(A, A + m, x), x);
      f = eb(f, Math.atan2(P - k, Q - r) / Na - 180, wb(3),);
      pb(M).multiplySelf(a).translateSelf(k = P, 0, r = Q).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
      1.6 > (mb(), hb(Wa - ib, Xa - jb, Ya - kb,)) && (B.i = 1, p = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Ea] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      1 / 0 > Ma && (Ma = c + (Ea && 12 > Ea ? 5 : 7), h4.innerHTML = p), xb(), yb());
    }
    B.i && pb(e[2].m).translateSelf(N % 4 * 1.2 - 1.7 + Math.sin(c + N) / 7, -2, 1.7 * (N / 4 | 0) - 5.5 + h(N % 4 - 2) + Math.cos(c / 1.5 + N) / 6,);
  },};
  let g = b[0], [u, A] = g, P = u, Q = A;
  const M = ra.m, N = Pa.length;
  Pa.push(B);
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
}, Y = () => pb(w, e[++sa].m), Tb = () => {
  let a, b, f, k, r, m, v, y, x, z, B, g, u, A, P = 0, Q = 0, M = 0, N = 1, p = 2, q = 15;
  const t = () => pb((p ? d[Ga] : e[B && 1 === e[B].G && B || 0]).m,), H = C => {
    1 < p ? (pb(d[Ga].m).multiplySelf(d[Ga].H), mb(0, Ga || 0.9 < ia ? 15 : 1, -2.4)) : (t(), mb(P, Q, M));
    C && (r = (ib - Wa) / da, m = (kb - Ya) / da);
    Wa = ib;
    Xa = jb;
    Ya = kb;
  }, O = () => {
    var C = 0, E = 0, G = 0, J = 0, ba = 0, ea = 0, R = -1;
    for (var S = 0; 36 > S; ++S) {
      var oa = 512 * S;
      for (var pa = 96; 416 > pa; pa += 4) {
        for (var va = 0; 2 > va; ++va) {
          var ha = Sb[oa + pa + va], Aa = Sb[oa + pa + va + 2];
          ha > J && (J = ha);
          ha + Aa && (0 > R || R === S) && (R = S, Aa === z ? ++C : E && E !== Aa || (E = Aa, ++G));
        }
      }
    }
    z = 0 > R ? 0 : G > 2 * C ? E : z;
    for (C = 36; 128 > C; C += 1) {
      S = R = G = E = 0;
      oa = 512 * C;
      for (pa = 0; 128 > pa; pa += 1) {
        for (va = oa + 4 * pa, ha = 0; 2 > ha; ++ha) {
          Aa = Sb[va + ha];
          const Ba = Sb[va + ha + 2];
          (ha ? 64 < pa : 64 > pa) ? E = bb(E, Aa) : G = bb(G, Aa);
          ha ? S = bb(S, Ba) : R = bb(R, Ba);
        }
      }
      h(G - E) > h(ba) && (ba = G - E);
      h(S - R) > h(ea) && (ea = S - R);
    }
    y = l(1 - 0.02 * bb(h(ba), h(ea)));
    ba /= 255;
    J /= 255;
    ea /= 255;
    t().invertSelf();
    mb(ba, J, ea, 0);
    P += ib;
    Q += J;
    M += kb;
    H();
  }, U = (C, E, G, J) => fb(C, E, N || (l(h(E - C) ** 0.5 - G) + 1 / 7) * wb(1.5 * J));
  ta = () => {
    H(z);
    Z.r9r(0, 0, 128, 128, 6408, 5121, Sb);
    NO_INLINE(O)();
    !p && z === B || (B = z, t().invertSelf(), mb(Wa, Xa, Ya), P = ib, Q = jb, M = kb);
    p = p && (z ? 0 : 1);
    (-20 > Wa || 109 > Ya ? -25 : -9) > Xa && (p = 2);
    1 === z && (d[9].i = -15 > Wa && 0 > Ya ? 1 : 0);
    x = fb(K(x, Xa, 2), Xa, p || 8 * h(x - Xa),);
    g = U(g, Wa, 0.5, 1);
    u = U(u, x, 2, 1);
    A = U(A, Ya, 0.5, 1);
    k = K(k, ua * (27 < z && 32 > z), 2,);
    la ? (C = p + wb(18), Ja = fb(Ja, Wa, C), La = fb(La, Ya, C), Ka = fb(Ka, x + 1.5, C), $a = db($a)) : (Ja = U(Ja, g, 1, 2 + k,), La = U(La, A + -18 + 5 * k, 1, 2 + k,), Ka = U(Ka, bb(u + l((-60 - Ya) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), C = ab(-6, -h(A - La)), E = g - Ja, $a = eb($a, 90 - db(Math.atan2(C, E) / Na), N + wb(10),), Za = eb(Za, 90 - Math.atan2(hb(C, E), Ka - u) / Na, N + wb(10),));
    Za = l(Za, -87, 87);
    N = 0;
    var C = l(Ha, -1), E = l(Ia, -1), G = cb(hb(C, E) ** 0.5, 0.1), J = Math.atan2(C, E);
    C = G * h(C) * Math.sin(J);
    E = G * h(E) * Math.cos(J);
    G && (a = 90 - J / Na);
    b = eb(b, a, wb(8));
    f = K(f, G, 10);
    Y().translateSelf(Wa, x, Ya).rotateSelf(0, b,);
    for (J = 0; 2 > J; ++J) {
      var ba = 9.1 * c - Math.PI * J;
      pb(e[37].m, Y()).translateSelf(0, f * l(0.45 * Math.sin(ba - Math.PI / 2)),).rotateSelf(f * Math.sin(ba) * 0.25 / Na, 0);
    }
    q = z ? 5 : K(q, p ? 13 : 19 - 2 * ab(0, Xa + 10), 2.2);
    r = z || p ? 0 : K(r, 0, 3);
    m = z || p ? 0 : K(m, 0, 3);
    v = p ? 0 : K(v, z ? 7 * l(2 * G) * y : 0, z ? 9 : 1,);
    J = la ? (180 + $a) * Na : 0;
    G = da * (r + v * (E * Math.cos(J) - C * Math.sin(J)));
    ba = -q * da;
    C = da * (m + v * (E * Math.sin(J) + C * Math.cos(J)));
    t().invertSelf();
    mb(G, ba, C, 0);
    P += ib;
    Q += ba;
    M += kb;
    H();
  };
}, Ub = (a, b, f, k) => {
  a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
}, ac = (a, b, f) => {
  ca ? 1100 < hC.width && (pb().rotateSelf(0, 40 * Math.sin(za) - 80, -8), ob(n, Vb, 36), ob(n, Vb, 37), ob(n, Vb, 38), Z.uae(a, !1, Vb), Z.d97(4, e[39].D - e[37].s, 5123, 2 * e[37].s)) : (Z.uae(a, !1, Vb), Z.d97(4, (b ? e[39].D : e[37].s) - 3, 5123, 6), Z.uae(a, !1, $b), Z.das(4, e[f].D - e[f].s, 5123, 2 * e[f].s, Pa.length,), Z.das(4, e[42].D - e[42].s, 5123, 2 * e[42].s, d.length,));
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
    const y = R => {
      let S, oa, pa, va = 0, ha = 0;
      const Aa = [], Ba = new Int32Array(768 * R), ic = 2 ** (t - 9) / R, jc = Math.PI * 2 ** (E - 8) / R, Hb = J * R & -2;
      for (let Ab = 0; 11 >= Ab; ++Ab) {
        for (let Bb = 0, Wb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + Ab]; 32 > Bb; ++Bb) {
          const Xb = (32 * Ab + Bb) * R;
          for (var Qa = 0; 4 > Qa; ++Qa) {
            if (S = 0, Wb && (S = x[Wb - 1].charCodeAt(Bb + 32 * Qa) - 40, S += 0 < S ? 106 : 0), S) {
              var fa;
              if (!(fa = Aa[S])) {
                fa = S;
                let V = void 0, Ca = void 0;
                var Yb = S;
                let kc = 0, lc = 0;
                const mc = 2 > b ? gc : ec, nc = 2 > b ? 1 > b ? fc : hc : ec, Zb = new Int32Array(M + N + ea);
                for (let Ra = 0, Ib = 0; M + N + ea > Ra; ++Ra, ++Ib) {
                  let Sa = 1;
                  M > Ra ? Sa = Ra / M : M + N > Ra || (Sa = (1 - (Sa = (Ra - M - N) / ea)) * 3 ** (-q / 16 * Sa));
                  0 > Ib || (Ib -= 4 * R, Ca = 0.00396 * 2 ** ((Yb + B - 256) / 12), V = 0.00396 * 2 ** ((Yb + A - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Zb[Ra] = 80 * (mc(kc += Ca * Sa ** (g / 32)) * z + nc(lc += V * Sa ** (P / 32)) * u + (Q ? (2 * Math.random() - 1) * Q : 0)) * Sa | 0;
                }
                fa = Aa[fa] = Zb;
              }
              for (let V = 0, Ca = 2 * Xb; fa.length > V; ++V, Ca += 2) {
                Ba[Ca] += fa[V];
              }
            }
          }
          for (let V, Ca = 0; R > Ca; ++Ca) {
            Qa = 0;
            fa = 2 * (Xb + Ca);
            var Da = (((V = Ba[fa]) || pa) && (oa = 0.00308 * H, 1 !== b && 4 !== b || (oa *= Math.sin(ic * fa * Math.PI * 2) * ba / 512 + 0.5), oa = 1.5 * Math.sin(oa), va += oa * ha, Da = (1 - O / 255) * (V - ha) - va, ha += oa * Da, V = 4 === b ? ha : 3 === b ? Da : va, b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= U / 32, pa = 1e-5 < V * V, Da = Math.sin(jc * fa) * C / 512 + 0.5, Qa = V * (1 - Da), V *= Da), fa < Hb || (Qa += Ba[1 + fa - Hb] * 
            G / 255, V += Ba[fa - Hb] * G / 255), v + fa >> 1);
            r[Da] += (Ba[fa] = Qa) / 65536;
            m[Da] += (Ba[++fa] = V) / 65536;
          }
        }
      }
      v += 768 * R;
    }, x = Ua[b], [z, B, g, u, A, P, Q, M, N, p, q, t, H, O, U, C, E, G, J, ba] = Va[b], ea = 4 * p ** 2;
    y(5513);
    y(4562);
    y(3891);
    dc(5 > ++b ? f : a);
  }, k = Db.createBuffer(2, 5362944, 44100), r = k.getChannelData(0), m = k.getChannelData(1);
  Cb.buffer = k;
  Cb.loop = !0;
  dc(f);
}, Db = new AudioContext(), n = new DOMMatrix(), w = new DOMMatrix(), nb = new Float32Array(16), Vb = new Float32Array(624), $b = new Float32Array(624), Sb = new Uint8Array(65536), Cb = Db.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
dc(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const r = [new Float32Array(16), new Float32Array(16),], m = p => {
        requestAnimationFrame(m);
        var q = (p - (aa || p)) / 1e3;
        if (za += q, c += da = ca ? 0 : ab(0.066, q), aa = p, 0 < da) {
          qa();
          Ma && c > Ma && (Ma = 0, h4.innerHTML = "");
          ia = K(ia, Fa ? K(ia, -9, 1.5) : l(c / 3), 1,);
          ja = K(ja, d[9].h, 0.2 + 0.3 * h(2 * d[9].h - 1),);
          sa = 1;
          ua = gb(d[12].g, d[13].g);
          ya = fb(K(ya, 0, 1), db(ya + 60 * da), d[5].g - d[6].h,);
          wa = fb(K(wa, 0, 5), db(wa + 56 * da), ua,);
          xa = fb(K(xa, 0, 4), db(xa + 48 * da), ua,);
          Ub(Y(), -12, 4.2, 40 * ia - 66);
          Y().translateSelf(0, 0, -15).scaleSelf(1, l(1.22 - d[1].g), 1);
          Y().translateSelf(0, 0, 15).scaleSelf(1, l(1.22 - d[2].g), 1);
          Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, l(1.1 - d[6].g), 1);
          Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
          Y().translateSelf(0, 0.01 > d[3].g ? -500 : (1 - d[2].g) * d[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (d[3].g - 1), 0,);
          p = ab(1 - d[4].h, d[2].h);
          Y().translateSelf(p * Math.sin(c / 1.5 + 2) * 12);
          Y().translateSelf(p * Math.sin(0.7 * c + 2) * 12);
          Y().translateSelf(p * Math.sin(c + 3) * 8.2);
          Y().translateSelf(9.8 * (1 - p));
          p = l(1 - 5 * p) * gb(d[4].g, d[5].g);
          Y().translateSelf(0, p * Math.sin(1.35 * c) * 4);
          Y().translateSelf(0, 0, p * Math.sin(0.9 * c) * 8);
          Y().translateSelf(0, -6.5 * d[4].h);
          Y().translateSelf(-75, (1 - d[5].h) * (1 - d[6].g) * 3, 55).rotateSelf(180 * (1 - d[5].h) + ya, 0);
          p = gb(d[7].h, d[6].h);
          Y().translateSelf(0, 5 * p * Math.sin(c) + 3.5 * (1 - bb(d[6].g, d[7].g)),);
          Y().translateSelf(0, 6 * p * Math.sin(c + 3), 6 * p * Math.sin(0.6 * c + 1),);
          Y().translateSelf(0, -7.3 * d[7].h);
          Ub(Y(), -123, 1.4, 55 + -65 * ja);
          p = gb(d[10].g, d[11].g);
          Y().translateSelf(0, -2, p * h(Math.sin(1.1 * c)) * -8.5 + 10);
          Y().translateSelf(0, -2, p * h(Math.sin(2.1 * c)) * -8.5 + 10);
          Y().translateSelf(0, -2, 10 - 8.5 * bb(p * h(Math.sin(1.5 * c)), (1 - d[10].g) * (1 - p)),);
          p = gb(d[8].h, d[12].h);
          for (q = 0; 4 > q; q++) {
            Y().translateSelf((2 < q ? 2 * (1 - p) + p : 0) - 100, p * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7, 115 - 7 * (1 - d[8].h) * (1 - d[12].h) * (1 & q ? -1 : 1) + bb(0.05, p) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),);
          }
          Y().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - d[8].g) - p * Math.sin(0.8 * c) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * p + 3), 0);
          Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + wa);
          Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, xa);
          Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - xa);
          Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + xa);
          p = gb(d[13].h, d[14].h);
          for (q = 0; 3 > q; ++q) {
            Y().translateSelf(0, p * Math.sin(1.5 * c + 1.5 * q) * 4 + (q ? 0 : (1 - d[13].h) * (1 - d[14].h)),);
          }
          Y().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          q = gb(gb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2,);
          Y().translateSelf(0, 16 * q, 95 + 8.5 * l(2 * q - 1));
          for (p = 0; 13 > p; ++p) {
            Pa[p].F(), ob(n, $b, p);
          }
          for (p = 0; 16 > p; ++p) {
            d[p].F(), ob(n, $b, p + 13), $b[223 + 16 * p] = 1 - d[p].g;
          }
          ta();
          for (p = 0; sa >= p; ++p) {
            ob(e[p].m, Vb, p - 1);
          }
          ka = 0;
          u();
          Z.b6o(36160, N);
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
        p = Ja;
        q = Ka;
        let t = La;
        ca ? (pb(ma).invertSelf(), mb(3.6, 3.5), p = ib, q = jb, t = 5, pb(w, y).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -q, -t,).rotateSelf(0, 99)) : pb(w, y).rotateSelf(-Za, -$a).invertSelf().translateSelf(-p, -q, -t);
        B();
        Z.b6o(36160, Q);
        Z.v5y(0, 0, 2048, 2048);
        P[0](54.7 * 1.1);
        P[1](126 * 1.1);
        A();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(A("a"), !1, ob(ma));
        Z.uae(A("b"), !1, ob(y));
        Z.uae(A("i"), !1, r[0]);
        Z.uae(A("j"), !1, r[1]);
        Z.ubu(A("k"), p, q, t);
        ac(A("c"), !la, 41);
        g();
        Z.ubu(g("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, za);
        Z.ubu(g("k"), p, q, t);
        Z.uae(g("b"), !1, ob(pb(y).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, N);
        Z.f1s();
      }, v = new DOMMatrix(), y = new DOMMatrix(), x = f, z = qb(8, () => ({}));
      var k = bc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const B = cc(bc("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), g = cc(bc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), u = cc(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), A = cc(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), P = qb(2, p => {
        const q = Z.c25();
        return Z.a4v(33984 + p), Z.b9j(3553, q), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), t => {
          let H = 0, O = 0, U = 0, C = 1 / 0, E = 1 / 0, G = 1 / 0, J = -1 / 0, ba = -1 / 0, ea = -1 / 0;
          Z.fas(36160, 36096, 3553, q, 0);
          Z.c4s(256);
          pb().scale3dSelf(t).multiplySelf(pb(na[p], v).multiplySelf(y).invertSelf(),);
          for (let R = 0; 8 > R; ++R) {
            const S = z[R];
            mb(4 & R ? 1 : -1, 2 & R ? 1 : -1, 1 & R ? 1 : -1);
            H -= S.x = (0 | ib) / (t * lb);
            O -= S.y = (0 | jb) / (t * lb);
            U -= S.z = (0 | kb) / (t * lb);
          }
          pb().rotateSelf(298, 139).translateSelf(H / 8, O / 8, U / 8);
          for (t = 0; 8 > t; ++t) {
            const {x:R, y:S, z:oa} = z[t];
            mb(R, S, oa);
            C = ab(C, ib);
            J = bb(J, ib);
            E = ab(E, jb);
            ba = bb(ba, jb);
            G = ab(G, kb);
            ea = bb(ea, kb);
          }
          t = 10 + p;
          G *= 0 > G ? t : 1 / t;
          ea *= 0 < ea ? t : 1 / t;
          Z.uae(B("b"), !1, ob(pb(w, v).scaleSelf(2 / (J - C), 2 / (ba - E), 2 / (G - ea),).translateSelf((J + C) / -2, (ba + E) / -2, (G + ea) / 2).multiplySelf(n), r[p],),);
          ac(B("c"), !la, 41);
        };
      }), Q = Z.c5w();
      k = Z.c25();
      const M = Z.c3z(), N = Z.c5w();
      u();
      Z.uae(u("a"), !1, ob(zb(1e-4, 2, 1.4, 0.4)));
      A();
      Z.ubh(A("q"), 2);
      Z.ubh(A("h"), 1);
      Z.ubh(A("g"), 0);
      g();
      Z.ubh(g("q"), 2);
      Z.b6o(36160, Q);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, N);
      Z.bb1(36161, M);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, M);
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
  f.src = Oa;
  NO_INLINE(oc)(() => {
    dc(() => {
      let m = 0;
      const v = [], y = [], x = [], z = [], B = new Int32Array(8), g = new Map(), u = new Int32Array(B.buffer, 0, 5), A = new Float32Array(B.buffer);
      e.map((P, Q) => {
        let M;
        const N = p => {
          let {x:q, y:t, z:H} = M[p], O = (A[0] = q, A[1] = t, A[2] = H, p = "" + (M.C ? u : B), g.get(p));
          return void 0 !== O ? (q = 3 * O, z[q] = (z[q++] + B[5]) / 2, z[q] = (z[q++] + B[6]) / 2, z[q] = (z[q] + B[7]) / 2) : (g.set(p, O = g.size), y.push(q, t, H, A[3]), x.push(B[4]), z.push(B[5], B[6], B[7])), O;
        };
        for (M of (A[3] = 41 < Q ? -14 : P.G && Q, P.o)) {
          const {x:p, y:q, z:t} = Kb(M);
          B[4] = 0 | M.u;
          B[5] = 32767 * p;
          B[6] = 32767 * q;
          B[7] = 32767 * t;
          for (let H = 2, O = N(0), U = N(1); M.length > H; ++H) {
            v.push(O, U, U = N(H));
          }
        }
        P.o = null;
        P.s = m;
        P.D = m = v.length;
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
        const [P, Q, M, N, p] = JSON.parse(localStorage.DanteSP22,);
        d.map((q, t) => q.g = q.h = q.i = t ? 0 | P[t] : 0);
        Pa.map((q, t) => q.i = 0 | Q[t]);
        Ga = M;
        ja = p;
        c = N;
        da = 0;
      } catch {
      }
      xb();
      ia = l(Ga);
      dc(b);
    });
    const k = m => D(Math.sin(m / 10 * Math.PI), m / 10).rotateSelf(+m).scaleSelf(1.0001 - m / 10, 0, 1 - m / 10), r = qb(10, m => ub(sb(tb(18), k(m)).reverse(), sb(tb(18), k(m + 1)), 1,)).flat();
    W(() => T([Ta.slice(1),], D(-2).scale3d(3).rotate(90, 0)), 0);
    W(() => {
      const m = g => W(() => {
        Ta.map(({x:u, z:A}) => {
          T(I(11, 1), D(4 * u, 4, g + 4 * A).scale(0.8, 3, 0.8), L(0.5, 0.3, 0.7, 0.6),);
          T(I(), D(4 * u, 7, g + 4 * A).scale(1, 0.3), L(0.5, 0.5, 0.5, 0.3));
        });
        T(X(F(I(), D(0, 0, g).scale(5, 1, 5), L(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(u => F(I(), D(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), L(0.8, 0.8, 0.8, 0.3),)),),);
        T(I(), D(0, -3, g).scale(8, 2, 8), L(0.4, 0.4, 0.4, 0.3));
      }), v = g => X(F(I(), D(0, -g / 2).scale(6, g - 1, 2.2)), F(I(), D(0, -g / 2 - 6).scale(4, g - 3, 4)), F(I(32, 1), D(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),), y = () => W(() => qb(7, g => T(F(I(6, 1), D(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), L(0.3, 0.3, 0.38),),))), x = X(F(I(30, 1, 1.15, 1), D(0, -3).scale(3.5, 1, 3.5), L(0.7, 0.4, 0.25, 0.7),), F(I(30, 1, 1.3, 1), D(0, -2.5).scale(2.6, 1, 3), L(0.7, 0.4, 0.25, 0.2),), F(I(), D(4, -1.2).scale3d(2), L(0.7, 0.4, 0.25, 0.3)),), z = (W(() => 
      {
        T(x);
        Fb(D(0, -3, 4));
      }), Fb(D(-5.4, 1.5, -19).rotate(0, -90)), Gb(D(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Gb(D(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...tb(18).map(({x:g, z:u}) => [7 * g, 10 * u, 4.5 - 2 * h(g),]),), Ta.map(({x:g, z:u}) => T(I(6), D(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), L(0.6, 0.3, 0.3, 0.4))), [-15, 15,].map((g, u) => {
        y();
        y();
        T(I(), D(0, 6.3, g).scale(4, 0.3, 1), L(0.3, 0.3, 0.3, 0.4));
        T(I(), D(0, 1, g).scale(3, 0.2, 0.35), L(0.5, 0.5, 0.5, 0.3));
        T(I(), D(0, 0, u ? 22 : -23).scale(3, 1, 8), L(0.9, 0.9, 0.9, 0.2));
        qb(5, A => T(r, D(18.5 * (u - 0.5), 0, 4.8 * A - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2), L(1, 1, 0.8, 0.2),));
      }), T(I(), D(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), L(0.8, 0.8, 0.8, 0.2)), T(I(), D(3, 1.5, -20).scale(0.5, 2, 5), L(0.7, 0.7, 0.7, 0.2)), T(I(), D(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), L(0.75, 0.75, 0.75, 0.2),), T(I(5), D(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), L(0.6, 0.3, 0.3, 0.4),), T(I(), w.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), L(0.8, 0.2, 0.2, 0.5),), T(X(Rb(F(I(6, 0, 0, 0.3), D(8, -3, -4).scale(13, 1, 13), L(0.7, 0.7, 0.7, 0.2),
      ), F(I(6), D(0, -8).scale(9, 8, 8), L(0.4, 0.2, 0.5, 0.5)), F(I(6, 0, 0, 0.3), D(0, -0.92).scale(13, 2, 13), L(0.8, 0.8, 0.8, 0.2),),), F(I(5), w.scale(5, 30, 5), L(0.4, 0.2, 0.6, 0.5)), F(I(5, 0, 1.5), D(0, 1).scale(4.5, 0.3, 4.5), L(0.7, 0.5, 0.9, 0.2),), F(I(), w.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), L(0.5, 0.5, 0.5, 0.5),), F(I(6), D(15, -1.5, 4).scale(3.5, 1, 3.5), L(0.5, 0.5, 0.5, 0.5),),),), W(() => {
        T(I(5), D(0, -0.2).scale(5, 1, 5), L(0.6, 0.65, 0.7, 0.3));
        Fb(D(0, 1.2));
      }), Fb(D(15, -2, 4)), W(() => {
        T(X(Rb(F(I(), w.scale(1.5, 1, 5), L(0.9, 0.9, 0.9, 0.2)), F(I(6), w.scale(4, 1, 5), L(0.9, 0.9, 0.9, 0.2)), F(I(), D(0, -2).scale(2, 3.2, 1.9), L(0.3, 0.8, 0.5, 0.5),), F(I(16, 1, 0, 4), w.scale(1, 1, 1.5).rotate(0, 90), L(0.9, 0.9, 0.9, 0.2),),), F(I(), w.scale(1.3, 10, 1.3), L(0.2, 0.7, 0.4, 0.6)),), D(0, 0, 45),);
        Gb(D(0, 2.8, 45), [0, 0, 4.5,]);
      }), m(35), m(55), T(I(), D(-18.65, -3, 55).scale(2.45, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2)), W(() => {
        T(I(3), D(-23, -1.7, 55.8).scale(5, 0.7, 8.3), L(0.3, 0.6, 0.6, 0.2));
        T(I(8), D(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), L(0.8, 0.8, 0.8, 0.2));
        T(I(), D(-23, -3, 55).scale(5.2, 1.7, 3), L(0.5, 0.5, 0.5, 0.3));
        T(I(), D(-23, -2.2, 62).scale(3, 1, 4), L(0.5, 0.5, 0.5, 0.3));
        Fb(D(-23, -0.5, 66.5));
      }), W(() => {
        T(I(), D(-22.55, -3, 55).scale(1.45, 1.4, 2.7), L(0.7, 0.7, 0.7, 0.2));
        T(X(F(I(), w.scale(3, 1.4, 2.7)), F(I(), w.scale(1.2, 8, 1.2)),), D(-33, -3, 55), L(0.7, 0.7, 0.7, 0.2),);
      }), W(() => {
        T(X(F(I(), D(-27, -3, 55).scale(3, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2),), F(I(), D(-27, -3, 55).scale(1, 3), L(0.9, 0.9, 0.9, 0.2)),),);
        T(I(), D(-39, -3, 55).scale(3, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2));
      }), W(() => {
        T(I(6), D(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), L(0.7, 0.7, 0.7, 0.4),);
      }), Fb(D(-55, -1.1, 46).rotate(0, 90)), T(I(6), D(-61.3, -2.4, 49).scale(3, 1, 5), L(0.4, 0.6, 0.6, 0.3)), T(I(7), D(-57, -2.6, 46).scale(4, 1, 4), L(0.8, 0.8, 0.8, 0.3)), [...F(I(), D(0, -3).scale(11, 1.4, 3), L(0.9, 0.9, 0.9, 0.2)), ...F(I(), D(0, -2.2).scale(7.7, 0.5, 4), L(0.5, 0.5, 0.5, 0.2),), ...X(F(I(6), w.rotate(90).scale(6, 8, 6), L(0.3, 0.6, 0.6, 0.3)), F(I(4, 0, 0.01), D(0, 6).scale(12, 2, 0.75).rotate(0, 45), L(0.3, 0.6, 0.6, 0.3),), F(I(6), w.rotate(90).scale(5, 12, 5), L(0.3, 
      0.6, 0.6, 0.3)), ...[5, 0, -5,].map(g => F(I(5), D(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), L(0.3, 0.6, 0.6, 0.3),)),),]), B = (T(z, D(-53, 0, 55)), W(() => T(z), 2), T(I(), D(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), L(0.7, 0.7, 0.7, 0.2),), T(I(3, 0, -0.5), D(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), L(0.8, 0.8, 0.8, 0.2),), T(X(Rb(F(I(), D(-100, -2.4, 55).scale(8, 0.9, 8), L(0.8, 0.8, 0.8, 0.2),), F(I(), D(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), L(0.8, 0.8, 
      0.8, 0.2),), F(I(), D(-100, -2.6, 70).scale(3, 1.1, 7), L(0.8, 0.8, 0.8, 0.2),), F(I(), D(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), L(0.8, 0.8, 0.8, 0.2),), F(I(6), D(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), L(0.6, 0.6, 0.6, 0.3),), F(I(), D(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), L(0.8, 0.8, 0.8, 0.2),), F(I(), D(-100, 0.42, 92).scale(3, 1.1, 4.1), L(0.8, 0.8, 0.8, 0.2),),), F(I(8), D(-100, -1, 55).scale(7, 0.9, 7), L(0.3, 0.3, 0.3, 0.4),), F(I(8), D(-100, -2, 
      55).scale(4, 0.3, 4), L(0.4, 0.4, 0.4, 0.5),), F(I(8, 0, -3.1), D(-100, -3, 55).scale(0.4, 1, 0.4), L(0.4, 0.4, 0.4, 0.5),),),), Gb(D(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Gb(D(-89, 0.2, 80), [0, 0, 6,]), T(X(F(I(), D(-100, 1, 63).scale(7.5, 4), L(0.5, 0.5, 0.5, 0.4)), F(I(), D(-100, 0, 70).scale(2, 2, 10), L(0.5, 0.5, 0.5, 0.4),), F(I(20, 1), D(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), L(0.5, 0.5, 0.5, 0.4),),),), Ta.map(({x:g, z:u}) => {
        T(I(6), D(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), L(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(A => T(I(6), D(7 * g - 100, A, 7 * u + 55).scale(1.3, 0.5, 1.3), L(0.4, 0.2, 0.2, 0.8),));
      }), qb(7, g => {
        T(I((23 * g + 1) % 5 + 5, 0, 0.5), D(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3,), L(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),);
      }), T(I(), D(-87, -9.5, 24).scale(7, 1, 3), L(0.4, 0.5, 0.6, 0.4)), T(I(4), D(-86, -9.2, 27).scale(5, 1, 5), L(0.5, 0.6, 0.7, 0.3)), T(I(12, 1), D(-86, -9, 31).scale(1.5, 1, 1.5), L(0.3, 0.3, 0.4, 0.1)), Fb(D(-86, -7.5, 31)), W(() => {
        [0, 12, 24,].map(g => T(I(), D(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.2, 0.5, 0.6, 0.2),));
      }), W(() => {
        [6, 18,].map(g => T(I(), D(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.1, 0.4, 0.5, 0.2),));
      }), T(X(Rb(F(I(5), D(0, 0, -7).scale(2, 1.2, 2), L(0.2, 0.4, 0.7, 0.3),), F(I(5), w.scale(9, 1.2, 9), L(0, 0.2, 0.3, 0.5)), F(I(), w.scale(11, 1, 13), L(0.3, 0.4, 0.6, 0.3)),), F(I(5), w.scale(5.4, 5, 5.4), L(0, 0.2, 0.3, 0.5)),), D(-38.9, -11.3, 17),), Fb(D(-38.9, -9.6, 10)), W(() => {
        T(X(Rb(F(I(5), D(0, 2).scale(5, 7, 5).skewY(8), L(0.2, 0.4, 0.5, 0.5),), F(I(5), D(0, 6).scale(1.1, 7, 1.1).skewY(-8), L(0.25, 0.35, 0.5, 0.5),), F(I(5), D(0, 9).scale(0.6, 7, 0.6).skewY(8), L(0.35, 0.3, 0.5, 0.5),),), F(I(5), w.scale(4, 8, 4), L(0.2, 0.4, 0.5, 0.5)), F(I(5), D(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), L(0.2, 0.4, 0.5, 0.5),),), D(-38.9, -11.3, 17),);
        Gb(D(-39.1, -0.6, 17).rotate(11), ...tb(15).map(({x:g, z:u}) => [3 * g, 3 * u, 1.2,]),);
      }), Ta.map(({x:g, z:u}) => {
        T(I(14, 1), D(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), L(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(A => T(I(17, 1), D(9 * g - 38.9, A - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), L(0.6, 0.6, 0.6, 0.3),));
      }), T(X(Rb(F(I(6), D(0, 0, -36).scale(15, 1.2, 15), L(0.7, 0.7, 0.7, 0.3),), F(I(), D(0, 0, -18).scale(4, 1.2, 6), L(0.45, 0.4, 0.6, 0.3),),), ...qb(6, g => qb(6, u => F(I(6), D(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2), L(0.7, 0.7, 0.7, 0.3),))).flat(),), D(-38.9, -11.3, 17),), Gb(D(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), T(I(5), D(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), L(0.8, 0.1, 0.25, 0.4),), Fb(D(-84, -0.5, 85).rotate(0, 
      45)), W(() => {
        T(x);
        Fb(D(0, -3, -4).rotate(0, 180));
      }), X(F(I(), D(0, -0.5, 1).scale(1.15, 1.2, 6.5), L(0.25, 0.25, 0.35, 0.3),), X(F(I(3), D(0, 0, -5.5).scale(3, 2), L(0.6, 0.3, 0.4, 0.3)), F(I(), D(0, 0, -3.65).scale(2.5, 3), L(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(g => F(I(), D(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), L(0.7, 0.2, 0, 0.3),)),));
      W(() => qb(2, g => T(B, D(9 * g - 110 + (1 & g), 1.9, -12))));
      W(() => qb(2, g => T(B, D(9 * (g + 2) - 110 + (1 & g), 1.9, -12))));
      W(() => qb(3, g => T(B, D(9 * g - 106, 1.9, -12))));
      T(X(Rb(F(I(), D(26.5, -1.6, 10).scale(20, 2.08, 3)), F(I(), D(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...qb(4, g => F(I(), D(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9)),), ...qb(3, g => F(I(), D(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9)),),), D(-123, 0.2, -12), L(0.5, 0.5, 0.6, 0.2),);
      Fb(D(-116, -1.4, -18).rotate(0, 180));
      T(I(), D(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), L(0.8, 0.8, 0.8, 0.2),);
      T(I(6), D(-116, -2.6, -16.5).scale(3.2, 0.8, 3), L(0.6, 0.5, 0.7, 0.2));
      T(I(), D(-115.5, -17, -12).scale(0.5, 15, 2.2), L(0.6, 0.6, 0.6, 0.3));
      T(I(8), D(-114, -17, -2).scale(2, 15, 2), L(0.6, 0.6, 0.6, 0.3));
      T(I(8), D(-79, -17, -2).scale(2, 15, 2), L(1, 1, 1, 0.3));
      T(I(), D(-77, -17, -50.5).scale(2.2, 15, 0.5), L(0.6, 0.6, 0.6, 0.3));
      qb(3, g => {
        T(v(16), D(12 * g - 109, -9, -12), L(0.6, 0.6, 0.6, 0.3));
        T(v(16), D(-77, -9, -12 * g - 20).rotate(0, 90), L(0.6, 0.6, 0.6, 0.3),);
      });
      T(X(F(I(12), D(-77, -14.5, -12).scale(4, 17.5, 4), L(0.7, 0.7, 0.7, 0.2),), F(I(), D(-79, 0.1, -12).scale(3.5, 2, 1.3), L(0.4, 0.5, 0.6, 0.2),), F(I(), D(-77, 0.1, -14).scale(1.5, 2, 2), L(0.4, 0.5, 0.6, 0.2),), F(I(12), D(-77, 3.1, -12).scale(3, 5, 3), L(0.4, 0.5, 0.6, 0.2),),),);
      T(I(), D(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), L(0.6, 0.6, 0.6, 0.3),);
      T(I(9), D(-98, -18.4, -40).scale(2.5, 13.5, 2.5), L(0.5, 0.5, 0.5, 0.3));
      T(X(F(I(), D(-93, -5.8, -40).scale(9, 1, 5), L(0.8, 0.8, 0.8, 0.1),), F(I(9), D(-98, -5.8, -40).scale(3, 8, 3), L(0.7, 0.7, 0.7, 0.2),),),);
      Fb(D(-98, -4.4, -40).rotate(0, 90));
      Gb(D(-115, 0.2, -12), [0, 0, 3.5,]);
      Gb(D(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      T(X(Rb(F(I(6, 0, 0, 0.6), D(-100, 0.7, 105.5).scale(8, 1, 11), L(0.7, 0.7, 0.7, 0.2),), F(I(), D(-101.5, 0.7, 93.5).scale(10.5, 1, 2), L(0.7, 0.7, 0.7, 0.2),),), F(I(5), D(-100, 0.7, 113).scale(4, 3, 4), L(0.7, 0.7, 0.7, 0.2),),),);
      qb(4, g => W(() => T(I(6), D(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), L(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),)));
      W(() => {
        T(X(F(I(10), w.scale(6, 2, 6), L(0.1, 0.6, 0.5, 0.3)), F(I(10), w.scale(3.3, 6, 3.3), L(0.1, 0.6, 0.5, 0.5)),),);
        T(I(15, 1), D(-7.5).rotate(0, 90).scale(3, 2.3, 3), L(0.4, 0.4, 0.4, 0.3),);
        T(I(10), D(-7.5).rotate(0, 90).scale(2, 2.5, 2), L(0.3, 0.8, 0.7, 0.3));
        T(I(5), D(-7.5).rotate(0, 90).scale(1, 3), L(0.5, 0.5, 0.5, 0.5));
        Fb(D(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(g => T(r, w.rotate(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), L(1, 1, 0.8, 0.2),));
        Gb(D(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(g => {
        [7.2, 1.5,].map(u => T(I(15, 1), D(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), L(0.5, 0.24, 0.2, 0.4),));
        T(r, D(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), L(1, 1, 0.8),);
        T(I(12, 1), D(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), L(0.6, 0.24, 0.2, 0.5),);
        T(X(F(I(), D(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), L(0.5, 0.5, 0.5, 0.4),), F(I(), w.scale(3, 3, 10), L(0.6, 0.24, 0.2, 0.5)), F(I(28, 1), D(0, 3, -5).scale(3, 4, 10).rotate(90, 0), L(0.6, 0.24, 0.2, 0.5),), F(I(5), D(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), L(0.6, 0.24, 0.2, 0.5),), F(I(5), D(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), L(0.6, 0.24, 0.2, 0.5),),), D(g - 100, 0.7, 97),);
      });
      T(X(F(I(), D(-82.07, 0.8, 106).scale(11, 0.9, 2.2), L(0.7, 0.7, 0.7, 0.1),), F(I(45, 1), D(-81, 0.7, 106).scale3d(7.7), L(0.7, 0.7, 0.7, 0.1),),),);
      W(() => {
        T(X(F(I(45, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)), F(I(), D(0, 0, -5.5).scale(1.5, 3, 2.7), L(0.45, 0.45, 0.45, 0.2),),),);
        T(I(8), D(0, 2).scale(3, 1.5, 3).rotate(0, 22), L(0.7, 0.7, 0.7, 0.1));
        T(I(5), D(0, 2).scale(1, 2), L(0.3, 0.3, 0.3, 0.2));
        Gb(D(0, 3), ...tb(14).map(({x:g, z:u}) => [5.6 * g, 5.6 * u, 2,]),);
      });
      W(() => {
        [-1, 1,].map(g => T(r, w.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), L(1, 1, 0.8),));
        T(X(F(I(28, 1), D(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3),), F(I(), w.scale(9, 5, 2), L(0.3, 0, 0, 0.3)),),);
        T(F(I(28, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)),);
        T(F(I(5), D(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2)),);
      });
      W(() => {
        T(X(F(I(28, 1), D(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3),), F(I(), D(7).scale(9, 5, 2), L(0.3, 0, 0, 0.3)), F(I(), D(0, 0, 7).scale(2, 5, 9), L(0.3, 0, 0, 0.3)),),);
        T(F(I(28, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)),);
        T(F(I(5), D(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2)),);
      });
      W(() => {
        T(X(F(I(28, 1), D(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3),), F(I(), D(7).scale(9, 5, 2), L(0.3, 0, 0, 0.3)), F(I(), D(0, 0, -7).scale(2, 5, 9), L(0.3, 0, 0, 0.3)),),);
        T(F(I(28, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)),);
        T(F(I(5), D(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2)),);
      });
      T(I(), D(-58, 1, 106).scale(2, 0.65, 2), L(0.7, 0.7, 0.7, 0.2));
      T(I(), D(-50.7, 1, 99).scale(2, 0.65, 1), L(0.7, 0.7, 0.7, 0.2));
      T(I(), D(-42, 0.4, 91).scale(5, 1, 2.5), L(0.7, 0.7, 0.7, 0.3));
      T(I(), D(-34.2, 0.4, 91).scale(3, 1, 3), L(0.7, 0.7, 0.7, 0.3));
      Fb(D(-34, 2.7, 96).rotate(-12, 0));
      T(I(5), D(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), L(0.2, 0.5, 0.5, 0.6),);
      [L(0.1, 0.55, 0.45, 0.2), L(0.2, 0.5, 0.5, 0.3), L(0.3, 0.45, 0.55, 0.4),].map((g, u) => W(() => {
        T(I(), D(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
        2 === u && T(I(), D(-29.1, 0.4, 91).scale(2.1, 1, 3), L(0.7, 0.7, 0.7, 0.3));
        1 === u && T(I(), D(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), L(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(g => T(r, D(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), L(1, 1, 0.8),));
      qb(3, g => T(v(24.7 - 0.7 * (1 & g)), D(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)), 1 & g ? L(0.5, 0.5, 0.5, 0.3) : L(0.35, 0.35, 0.35, 0.5),));
      T(X(F(I(6, 0, 0, 0.3), D(0, -0.92, 95).scale(14, 2, 14), L(0.8, 0.8, 0.8, 0.2),), F(I(5), D(0, 0, 95).scale3d(6), L(0.3, 0.3, 0.3, 0.5)),),);
      Fb(D(0, 1.7, 82).rotate(0, 180));
      T(I(5), D(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), L(0.5, 0.3, 0.3, 0.4),);
      T(I(6), D(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), L(0.5, 0.6, 0.7, 0.3),);
      T(I(), D(0, 16, 129).scale(1.5, 1, 2), L(0.5, 0.6, 0.7, 0.3));
      T(I(7), D(0, 16.2, 133).scale(5, 1, 5), L(0.4, 0.5, 0.6, 0.4));
      T(X(Rb(F(I(), D(0, 16, 110.5).scale(12, 1, 3), L(0.5, 0.3, 0.3, 0.4),), F(I(), D(0, 16, 111).scale(3, 1, 3.8), L(0.5, 0.3, 0.3, 0.4),),), F(I(5), D(0, 16, 103.5).scale(5.5, 5, 5.5), L(0.5, 0.3, 0.3, 0.4),),),);
      W(() => {
        T(I(3), D(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), L(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(g => {
          T(I(6), D(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), L(0.7, 0.7, 0.7, 0.4),);
          T(I(), D(0, 6.2, g + 95).scale(0.5, 11, 0.5), L(0.5, 0.3, 0.3, 0.4),);
        });
      });
      W(() => {
        T(I(5), w.scale(5, 1.1, 5), L(0.5, 0.3, 0.3, 0.4));
        T(I(5), w.scale(5.5, 0.9, 5.5), L(0.25, 0.25, 0.25, 0.4));
        Fb(D(0, 1.5, -1).rotate(0, 180));
      });
      Gb(D(0, 3, 95), ...tb(9).map(({x:g, z:u}) => [9 * g, 9 * u, 4,]),);
      Gb(D(0, 19, 134), [0, 0, 3.5,]);
    });
    W(() => {
      T(vb(20), D(0, 1).scale3d(0.5), L(1, 0.3, 0.4));
      T(vb(30), w.scale(0.65, 0.8, 0.55), L(1, 0.3, 0.4));
      T(I(), D(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), L(0.3, 0.3, 0.3));
      [-1, 1,].map(m => {
        T(r, w.rotate(0, 0 < m ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), L(1, 1, 0.8),);
        T(F(X(I(15, 1), F(I(), D(0, 0, 1).scale(2, 2, 0.5)),), w.rotate(-90, 0).scale(0.1, 0.05, 0.1), L(0.3, 0.3, 0.3),), D(0.2 * m, 1.2, 0.4).rotate(0, 20 * m, 20 * m),);
        W(() => {
          T(I(20, 1), D(0.3 * m, -0.8).scale(0.2, 0.7, 0.24), L(1, 0.3, 0.4));
        });
      });
    });
    W(() => {
      T(I(6).slice(0, -1), w.scale(0.77, 1, 0.77), L(1, 0.3, 0.5));
    }, 0);
    W(() => {
      T(vb(30, 24, (m, v, y) => {
        const x = v / 24, z = m * Math.PI * 2 / 30, B = Math.sin(x ** 0.6 * Math.PI / 2);
        m = x * x * Math.sin(m * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:y.C = 0, y:-0.5, z:0,} : {x:Math.cos(z) * B, y:Math.cos(x * Math.PI) - x - m, z:Math.sin(z) * B + Math.sin(m * Math.PI * 2) / 4,};
      }), w.scale(0.7, 0.7, 0.7), L(1, 1, 1),);
      [-1, 1,].map(m => T(vb(12), D(0.16 * m, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    W(() => {
      T(I(6, 1), w.scale(0.13, 1.4, 0.13), L(0.3, 0.3, 0.5, 0.1));
      T(I(10), D(0, 1).scale(0.21, 0.3, 0.21), L(1, 0.5, 0.2));
      T(I(3), D(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), L(0.2, 0.2, 0.2, 0.1),);
    }, 0);
  });
});

