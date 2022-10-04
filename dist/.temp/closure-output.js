let aa, ba, da, ea, ia, ja, ka, la, ma, pa, qa, ra, sa, ta, va, c = 0, wa = 0, xa = 0, ya = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 1, d = 0.066;
const Ka = Math.PI / 180, La = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Ma = [], e = [], Na = [], Ra = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Sa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ta = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 180;
const h = NO_INLINE(a => 0 > a ? -a : a), Za = NO_INLINE((a, b) => a < b ? a : b), $a = NO_INLINE((a, b) => b < a ? a : b), ab = (a, b) => h(a) > b ? a : 0, m = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a, bb = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka, cb = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * m(f) || 0, db = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0, eb = (a, b) => (a = m(a), db(a, 1 - a, b)), fb = (a, b, f = 0) => Math.sqrt(a * a + b * b + 
f * f), kb = (a = 0, b = 0, f = 0, l = 1) => {
  gb = p.m11 * a + p.m21 * b + p.m31 * f + p.m41 * l;
  hb = p.m12 * a + p.m22 * b + p.m32 * f + p.m42 * l;
  ib = p.m13 * a + p.m23 * b + p.m33 * f + p.m43 * l;
  jb = p.m14 * a + p.m24 * b + p.m34 * f + p.m44 * l;
};
var gb, hb, ib, jb;
const mb = (a, b = lb, f = 0,) => (f *= 16, b[f++] = a.m11, b[f++] = a.m12, b[f++] = a.m13, b[f++] = a.m14, b[f++] = a.m21, b[f++] = a.m22, b[f++] = a.m23, b[f++] = a.m24, b[f++] = a.m31, b[f++] = a.m32, b[f++] = a.m33, b[f++] = a.m34, b[f++] = a.m41, b[f++] = a.m42, b[f++] = a.m43, b[f] = a.m44, b), nb = (a = w, b = p,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), F = NO_INLINE((a, b, f) => w.translate(a, b, f)), ob = (a, b) => Array.from(Array(a), (f, l) => b(l)), pb = (a, b, f) => (a.C = f, a.u = b, a), qb = (a, b, f = a.u,) => (nb(b), pb(a.map(({x:l, y:t, z:n}) => (kb(l, t, n), {x:gb, y:hb, z:ib,})), f, a.C,)), G = (a, b, f) => a.map(l => qb(l, b, f)), rb = (a, b = 0) => ob(a, f => {
  const l = Math.cos(2 * Math.PI * f / a);
  return {x:Math.sin(2 * Math.PI * f / a), y:0, z:0.01 > h(l) ? l : 0 > l ? l - b : l + b,};
}), sb = (a, b, f) => a.map((l, t, {length:n}) => pb([l, b[n - t - 1], b[n - (t + 1) % n - 1], a[(t + 1) % n],], a.u, f,)), H = (a, b, f = 0, l,) => (a = a ? rb(a, l) : Ra, l = qb(a, F(0, 1).scale3d(0 < f ? f : 1)), a = qb(a, F(0, -1).scale3d(0 > f ? -f : 1)).reverse(), [...sb(a, l, b), l, a,]), tb = (a, b = a, f = (l, t) => (t *= Math.PI / b, {x:Math.cos(l *= 2 * Math.PI / a) * Math.sin(t), y:Math.cos(t), z:Math.sin(l) * Math.sin(t),})) => {
  const l = [];
  for (let t = 0; a > t; t++) {
    for (let n = 0; b > n; n++) {
      const v = pb([], 0, 1);
      l.push(v);
      v.push(f(t, n, v));
      n && v.push(f((t + 1) % a, n, v));
      b - 1 > n && v.push(f((t + 1) % a, n + 1 % b, v));
      v.push(f(t, n + 1 % b, v));
    }
  }
  return l;
}, N = NO_INLINE((a, b, f) => db(a, b, 1 - Math.exp(-f * d))), ub = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][xa = Ma.reduce((a, {i:b}) => a + b, 0)] + " / XIII";
}, vb = () => {
  localStorage.DanteSP22 = JSON.stringify([e.map(({i:a}) => a), Ma.map(({i:a}) => a), Da, c, ea,]);
}, S = NO_INLINE((a, b, f, l = 0) => 255 * l << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a), wb = (a, b, f, l) => new DOMMatrix([f, 0, 0, 0, 0, l, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Bb = () => {
  let a, b, f, l, t, n, v, y, x, z, B, g, u, A, K = !0;
  const O = [], J = () => {
    b4.innerHTML = "Music: " + K;
    ba || !K ? xb.disconnect() : xb.connect(Ab.destination);
  }, T = () => {
    const k = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = [wb(0.3, 55, k, 1.732051), wb(55, 181, k, 1.732051),];
    ka = wb(0.3, 181, k, 1.732051);
    l = y = void 0;
    O.length = ia = A = g = u = Ea = Fa = 0;
  }, r = (k, q = 0) => {
    if (ba !== k) {
      ba = k;
      ja = q;
      T();
      document.body.className = k ? "l m" : "l";
      try {
        k ? (document.exitFullscreen().catch(() => 0), document.exitPointerLock()) : (document.body.requestFullscreen().catch(() => 0), xb.start());
      } catch {
      }
      J();
    }
  };
  oncontextmenu = () => !1;
  b1.onclick = () => r(!1);
  b2.onclick = () => r(!1, 1);
  b5.onclick = () => r(!0);
  b4.onclick = () => {
    K = !K;
    J();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = k => {
    if (!ba && (k.target === hC && (ia = 1), ja)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = k => {
    let q;
    k.repeat || (q = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[k.code], (O[q] = !!k.type[5] && !0) && (0 === q && (ia = 1), 1 === q && r(!0)));
  };
  onmousemove = ({movementX:k, movementY:q}) => {
    ja && (k || q) && (Ya += 0.1 * k, Xa += 0.1 * q);
  };
  hC.ontouchstart = k => {
    if (!ba) {
      for (let {pageX:q, pageY:C, identifier:M} of k.changedTouches) {
        ja && q > hC.clientWidth / 2 ? void 0 === y && (x = 0, n = q, v = C, y = M, z = Ya, B = Xa) : void 0 === l && (t = 0, b = q, f = C, l = M);
      }
      a = wa;
    }
  };
  hC.ontouchmove = k => {
    if (!ba) {
      for (let {pageX:I, pageY:D, identifier:E} of k.changedTouches) {
        var q, C, M, U;
        y === E && (Ya = z + (I - n) / 2.3, Xa = B + (D - v) / 2.3, x = 1);
        l === E && (E = (b - I) / 20, q = h(E), C = (f - D) / 20, M = h(C), (U = 0.5 < $a(q, M)) && (t = 1), g = (U && 0.2 < q) * m(E, -1), u = (U && 0.2 < M) * m(C, -1), 2 < q && (b = I + 20 * (0 > E ? -1 : 1)), 2 < M && (f = D + 20 * (0 > C ? -1 : 1)));
      }
    }
  };
  hC.ontouchend = k => {
    let q;
    document.activeElement === document.body && k.preventDefault();
    for (const C of k.changedTouches) {
      C.identifier === y ? (y = void 0, x || (q = 1), x = 0) : C.identifier === l ? (l = void 0, u = g = 0, t || (q = 1), t = 0) : q = 1;
    }
    k.target === hC && q && a && 0.02 < (k = wa - a) && 0.7 > k && (ia = 1);
  };
  ma = () => {
    Ea = u + (O[4] ? 1 : 0) - (O[5] ? 1 : 0);
    Fa = g + (O[2] ? 1 : 0) - (O[3] ? 1 : 0);
    var k = navigator.getGamepads()[0];
    if (k) {
      const q = M => C[M]?.pressed || 0 < C[M]?.value ? 1 : 0, C = k.buttons;
      k = k.axes;
      ja && (Xa += d * ab(k[3], 0.3) * 80, Ya += d * ab(k[2], 0.3) * 80);
      Ea += q(12) - q(13) - ab(k[1], 0.2);
      Fa += q(14) - q(15) - ab(k[0], 0.2);
      q(9) && r(!0);
      (k = q(3) || q(2) || q(1) || q(0)) && !A && (ia = 1);
      A = k;
    }
  };
  document.onvisibilitychange = onblur = onresize = T;
  r(!0);
}, W = (a, b = new DOMMatrix(), f) => pa.o.push(...G(a, b, f)), X = (a, b = 1) => {
  const f = pa;
  Na.push(pa = {m:new DOMMatrix(), G:b, o:[],},);
  a();
  pa = f;
}, Cb = a => {
  const b = pa, f = e.length, l = {i:0, g:0, h:0, m:b.m, H:a, F() {
    l.g = N(l.g, l.i, 4);
    l.h = N(l.h, l.i, 1);
    nb(b.m).multiplySelf(a);
    ia && 3 > (kb(), fb(Ua - gb, Va - hb, Wa - ib,)) && (0.3 > l.g || 0.7 < l.g) && (l.i = l.i ? 0 : 1, f && 1 / 0 > Ja && (Ja = c + 1, h4.innerHTML = "* click *"), Da = f, vb());
    !f && l.i && 0.8 < l.g && (l.i = 0, 13 > xa ? 1 / 0 > Ja && (Ja = c + 3, h4.innerHTML = "Not leaving now, there are souls to catch!") : ya || (1 / 0 > Ja && (Ja = c + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ya = 1));
    p.rotateSelf(60 * l.g - 30, 0).translateSelf(0, 1);
  },};
  e.push(l);
  W(H(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
  W(H(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), S(0.4, 0.5, 0.5));
  W(H(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), S(0.5, 0.5, 0.4));
}, Db = (a, ...b) => {
  let f, l, t, n = 0, v = 0, y = 1, x = 3, z = -1;
  const B = {i:0, F() {
    if (!B.i) {
      var k;
      let q, C, M, U, I = 1, D = 1 / 0;
      for (const E of g) {
        const Q = fb(A - E.x, K - E.z), L = Q - E.w;
        U ||= 0 > L;
        0 < L && D > L && (D = L, u = E);
        I = Za(I, Q / E.w);
      }
      U || (k = A - u.x, q = K - u.z, C = fb(k, q), M = Math.atan2(-q, k), y && (v = (Math.random() - 0.5) * Math.PI / 2, x = m(x / (1 + Math.random()))), M += v, z = -Math.cos(M), n = Math.sin(M), 0.1 < C && (C = Za(C, u.w) / (C || 1), A = k * C + u.x, K = q * C + u.z));
      y = U;
      x = N(x, 6 * (1 - I) + 3, I + 3);
      O = N(O, A = N(A, A + z, x), x);
      J = N(J, K = N(K, K + n, x), x);
      f = cb(f, Math.atan2(O - l, J - t) / Ka - 180, 1 - Math.exp(-3 * d),);
      nb(T).multiplySelf(a).translateSelf(l = O, 0, t = J).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
      1.6 > (kb(), fb(Ua - gb, Va - hb, Wa - ib,)) && (B.i = 1, k = [, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][xa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      1 / 0 > Ja && (Ja = c + (xa && 12 > xa ? 5 : 7), h4.innerHTML = k), ub(), vb());
    }
    B.i && nb(Na[2].m).translateSelf(r % 4 * 1.2 - 1.7 + Math.sin(c + r) / 7, -2, 1.7 * (r / 4 | 0) - 5.5 + h(r % 4 - 2) + Math.cos(c / 1.5 + r) / 6,);
  },}, g = b.map(([k, q, C]) => ({x:k, z:q, w:C,}));
  let u = g[0], {x:A, z:K} = u, O = A, J = K;
  const T = pa.m, r = Ma.length;
  Ma.push(B);
}, Gb = ({x:a, y:b, z:f}, l) => a * l.x + b * l.y + f * l.z, Hb = a => {
  let b, f = 0, l = 0, t = 0, n = a.at(-1);
  for (b of a) {
    f += (n.y - b.y) * (n.z + b.z), l += (n.z - b.z) * (n.x + b.x), t += (n.x - b.x) * (n.y + b.y), n = b;
  }
  return b = fb(f, l, t), f /= b, l /= b, t /= b, {x:f, y:l, z:t, w:f * n.x + l * n.y + t * n.z,};
}, Ib = (a, b) => {
  var f, l, t, n = b.B;
  for (var v = 0; n.length > v; ++v) {
    if (-0.00008 > (f = Gb(a, n[v]) - a.w) ? t = b : 8e-5 < f && (l = b), t && l) {
      l = [];
      t = [];
      n = b.B;
      v = b.v;
      let y = n.at(-1), x = Gb(a, y) - a.w;
      for (const z of n) {
        f = Gb(a, z) - a.w, 8e-5 > x && t.push(y), -0.00008 < x && l.push(y), (8e-5 < x && -0.00008 > f || -0.00008 > x && 8e-5 < f) && (x /= f - x, y = {x:y.x + (y.x - z.x) * x, y:y.y + (y.y - z.y) * x, z:y.z + (y.z - z.z) * x,}, l.push(y), t.push(y)), y = z, x = f;
      }
      return {l:2 < l.length && {B:pb(l, n.u, n.C), v, A:b,}, j:2 < t.length && {B:pb(t, n.u, n.C), v, A:b,},};
    }
  }
  return {l, j:t,};
}, Jb = (a, b, f = Hb(b.B)) => {
  let l, t;
  return a ? ({l, j:t} = Ib(a, b), l || t || a.o.push(b), l && (a.l = Jb(a.l, l, f)), t && (a.j = Jb(a.j, t, f))) : a = {x:f.x, y:f.y, z:f.z, w:f.w, o:[b,], l:0, j:0,}, a;
}, Kb = (a, b, f) => {
  const l = [], t = (n, v) => {
    let {l:y, j:x} = Ib(n, v);
    y || x || (0 < f * Gb(n, b) ? y = v : x = v);
    y && (n.l ? t(n.l, y) : l.push(y));
    x && n.j && t(n.j, x);
  };
  for (const n of b.o) {
    t(a, n);
  }
  return l;
}, Lb = (a, b) => a && (b(a), Lb(a.l, b), Lb(a.j, b)), Mb = a => (Lb(a, b => {
  const f = b.j;
  b.j = b.l;
  b.l = f;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const l of b.o) {
    l.v = !l.v;
  }
}), a), Nb = a => a.length ? a.reduce((b, f) => Jb(b, {B:f, v:0, A:0,}), 0) : a, Ob = (...a) => a.reduce((b, f) => {
  const l = [];
  if (b = Nb(b), f) {
    f = Nb(f);
    Lb(b, t => t.o = Kb(f, t, 1));
    Lb(f, t => l.push([t, Kb(b, t, -1),]));
    for (let [t, n] of l) {
      for (const v of n) {
        Jb(b, v, t);
      }
    }
  }
  return b;
}), Y = (a, ...b) => {
  const f = n => {
    let v;
    return n.A && ((v = l.get(n.A)) ? (t.delete(v), n = f(n.A)) : l.set(n.A, n)), n;
  }, l = new Map(), t = new Map();
  return a = Mb(Ob(Mb(Nb(a)), ...b)), Lb(a, n => {
    for (const v of n.o) {
      t.set(f(v), v.v);
    }
  }), Array.from(t, ([{B:n}, v]) => {
    const y = n.map(({x, y:z, z:B}) => ({x, y:z, z:B,}));
    return pb(v ? y.reverse() : y, n.u, n.C);
  });
}, Qb = () => {
  let a, b, f, l, t, n, v, y, x, z, B, g, u, A, K = 0, O = 0, J = 0, T = 1, r = 2, k = 15;
  const q = () => nb((r ? e[Da] : Na[B && 1 === Na[B].G && B || 0]).m,), C = I => {
    1 < r ? (nb(e[Da].m).multiplySelf(e[Da].H), kb(0, Da || 0.9 < da ? 15 : 1, -2.4)) : (q(), kb(K, O, J));
    I && (t = (gb - Ua) / d, n = (ib - Wa) / d);
    Ua = gb;
    Va = hb;
    Wa = ib;
  }, M = () => {
    var I = 0, D = 0, E = 0, Q = 0, L = 0, ca = 0, P = -1;
    for (var R = 0; 36 > R; ++R) {
      var na = 512 * R;
      for (var oa = 96; 416 > oa; oa += 4) {
        for (var ua = 0; 2 > ua; ++ua) {
          var ha = Pb[na + oa + ua], za = Pb[na + oa + ua + 2];
          ha > Q && (Q = ha);
          ha + za && (0 > P || P === R) && (P = R, za === z ? ++I : D && D !== za || (D = za, ++E));
        }
      }
    }
    z = 0 > P ? 0 : E > 2 * I ? D : z;
    for (I = 36; 128 > I; I += 1) {
      R = P = E = D = 0;
      na = 512 * I;
      for (oa = 0; 128 > oa; oa += 1) {
        for (ua = na + 4 * oa, ha = 0; 2 > ha; ++ha) {
          za = Pb[ua + ha];
          const Aa = Pb[ua + ha + 2];
          (ha ? 64 < oa : 64 > oa) ? D = $a(D, za) : E = $a(E, za);
          ha ? R = $a(R, Aa) : P = $a(P, Aa);
        }
      }
      h(E - D) > h(L) && (L = E - D);
      h(R - P) > h(ca) && (ca = R - P);
    }
    y = m(1 - 0.02 * $a(h(L), h(ca)));
    L /= 255;
    Q /= 255;
    ca /= 255;
    q().invertSelf();
    kb(L, Q, ca, 0);
    K += gb;
    O += Q;
    J += ib;
    C();
  }, U = (I, D, E, Q) => db(I, D, T || (m(h(D - I) ** 0.5 - E) + 1 / 7) * (1 - Math.exp(-(1.5 * Q) * d)));
  qa = I => {
    C(z);
    Z.r9r(0, 0, 128, 128, 6408, 5121, Pb);
    NO_INLINE(M)();
    !r && z === B || (B = z, q().invertSelf(), kb(Ua, Va, Wa), K = gb, O = hb, J = ib);
    r = r && (z ? 0 : 1);
    (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (r = 2);
    1 === z && (e[9].i = -15 > Ua && 0 > Wa ? 1 : 0);
    x = db(N(x, Va, 2), Va, r || 8 * h(x - Va),);
    u = U(u, x, 2, 1);
    g = U(g, Ua, 0.5, 1);
    A = U(A, Wa, 0.5, 1);
    l = N(l, ra * (27 < z && 32 > z), 2,);
    ja ? (D = r + (1 - Math.exp(-18 * d)), Ga = db(Ga, Ua, D), Ha = db(Ha, x + 1.5, D), Ia = db(Ia, Wa, D), Ya = bb(Ya)) : (Ia = U(Ia, A + -18 + 5 * l, 1, 2 + l,), Ha = U(Ha, $a(u + m((-60 - Wa) / 8, 0, 20) + 13 + 9 * l, 6,), 4, 2,), Ga = U(Ga, g, 1, 2 + l,), D = Za(-6, -h(A - Ia)), E = g - Ga, Ya = cb(Ya, 90 - bb(Math.atan2(D, E) / Ka), T + (1 - Math.exp(-10 * d)),), Xa = cb(Xa, 90 - Math.atan2(fb(D, E), Ha - u) / Ka, T + (1 - Math.exp(-10 * d)),));
    Xa = m(Xa, -87, 87);
    T = 0;
    var D = m(Ea, -1), E = m(Fa, -1), Q = ab(fb(D, E) ** 0.5, 0.1), L = Math.atan2(D, E);
    D = Q * h(D) * Math.sin(L);
    E = Q * h(E) * Math.cos(L);
    Q && (a = 90 - L / Ka);
    b = cb(b, a, 1 - Math.exp(-8 * d));
    f = N(f, Q, 10);
    I().translateSelf(Ua, x, Wa).rotateSelf(0, b,);
    for (L = 0; 2 > L; ++L) {
      const ca = 9.1 * c - Math.PI * L;
      nb(Na[37].m, I()).translateSelf(0, f * m(0.45 * Math.sin(ca - Math.PI / 2)),).rotateSelf(f * Math.sin(ca) * 0.25 / Ka, 0);
    }
    k = z ? 5 : N(k, r ? 13 : 19 - 2 * Za(0, Va + 10), 2.2);
    t = z || r ? 0 : N(t, 0, 3);
    n = z || r ? 0 : N(n, 0, 3);
    v = r ? 0 : N(v, z ? 7 * m(2 * Q) * y : 0, z ? 9 : 1,);
    L = ja ? (180 + Ya) * Ka : 0;
    I = d * (t + v * (E * Math.cos(L) - D * Math.sin(L)));
    Q = -k * d;
    D = d * (n + v * (E * Math.sin(L) + D * Math.cos(L)));
    q().invertSelf();
    kb(I, Q, D, 0);
    K += gb;
    O += Q;
    J += ib;
    C();
  };
}, Rb = (a, b, f, l) => {
  a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, l).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
}, Yb = (a, b, f) => {
  ba ? 1100 < hC.width && (nb().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), mb(p, Sb, 36), mb(p, Sb, 37), mb(p, Sb, 38), Z.uae(a, !1, Sb), Z.d97(4, Na[39].D - Na[37].s, 5123, 2 * Na[37].s)) : (Z.uae(a, !1, Sb), Z.d97(4, (b ? Na[39].D : Na[37].s) - 3, 5123, 6), Z.uae(a, !1, Xb), Z.das(4, Na[f].D - Na[f].s, 5123, 2 * Na[f].s, Ma.length,), Z.das(4, Na[42].D - Na[42].s, 5123, 2 * Na[42].s, e.length,));
}, Zb = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), $b = (a, b) => {
  const f = {}, l = Z.c1h();
  return Z.abz(l, a), Z.abz(l, Zb(b, 35632)), Z.l8l(l), t => t ? f[t] || (f[t] = Z.gan(l, t)) : Z.u7y(l);
}, ac = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, bc = a => Math.sin(a * Math.PI * 2), cc = a => 0.5 > a % 1 ? 1 : -1, dc = a => a % 1 * 2 - 1, ec = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, lc = a => {
  let b = 0;
  const f = () => {
    let v = 0;
    const y = P => {
      let R, na, oa, ua = 0, ha = 0;
      const za = [], Aa = new Int32Array(768 * P), fc = 2 ** (q - 9) / P, gc = Math.PI * 2 ** (D - 8) / P, Eb = Q * P & -2;
      for (let yb = 0; 11 >= yb; ++yb) {
        for (let zb = 0, Tb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + yb]; 32 > zb; ++zb) {
          const Ub = (32 * yb + zb) * P;
          for (var Oa = 0; 4 > Oa; ++Oa) {
            if (R = 0, Tb && (R = x[Tb - 1].charCodeAt(zb + 32 * Oa) - 40, R += 0 < R ? 106 : 0), R) {
              var fa;
              if (!(fa = za[R])) {
                fa = R;
                let V = void 0, Ba = void 0;
                var Vb = R;
                let hc = 0, ic = 0;
                const jc = 2 > b ? dc : bc, kc = 2 > b ? 1 > b ? cc : ec : bc, Wb = new Int32Array(J + T + ca);
                for (let Pa = 0, Fb = 0; J + T + ca > Pa; ++Pa, ++Fb) {
                  let Qa = 1;
                  J > Pa ? Qa = Pa / J : J + T > Pa || (Qa = (1 - (Qa = (Pa - J - T) / ca)) * 3 ** (-k / 16 * Qa));
                  0 > Fb || (Fb -= 4 * P, Ba = 0.00396 * 2 ** ((Vb + B - 256) / 12), V = 0.00396 * 2 ** ((Vb + A - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Wb[Pa] = 80 * (jc(hc += Ba * Qa ** (g / 32)) * z + kc(ic += V * Qa ** (K / 32)) * u + (O ? (2 * Math.random() - 1) * O : 0)) * Qa | 0;
                }
                fa = za[fa] = Wb;
              }
              for (let V = 0, Ba = 2 * Ub; fa.length > V; ++V, Ba += 2) {
                Aa[Ba] += fa[V];
              }
            }
          }
          for (let V, Ba = 0; P > Ba; ++Ba) {
            Oa = 0;
            fa = 2 * (Ub + Ba);
            var Ca = (((V = Aa[fa]) || oa) && (na = 0.00308 * C, 1 !== b && 4 !== b || (na *= Math.sin(fc * fa * Math.PI * 2) * L / 512 + 0.5), na = 1.5 * Math.sin(na), ua += na * ha, Ca = (1 - M / 255) * (V - ha) - ua, ha += na * Ca, V = 4 === b ? ha : 3 === b ? Ca : ua, b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= U / 32, oa = 1e-5 < V * V, Ca = Math.sin(gc * fa) * I / 512 + 0.5, Oa = V * (1 - Ca), V *= Ca), fa < Eb || (Oa += Aa[1 + fa - Eb] * 
            E / 255, V += Aa[fa - Eb] * E / 255), v + fa >> 1);
            t[Ca] += (Aa[fa] = Oa) / 65536;
            n[Ca] += (Aa[++fa] = V) / 65536;
          }
        }
      }
      v += 768 * P;
    }, x = Sa[b], [z, B, g, u, A, K, O, J, T, r, k, q, C, M, U, I, D, E, Q, L] = Ta[b], ca = 4 * r ** 2;
    y(5513);
    y(4562);
    y(3891);
    ac(5 > ++b ? f : a);
  }, l = Ab.createBuffer(2, 5362944, 44100), t = l.getChannelData(0), n = l.getChannelData(1);
  xb.buffer = l;
  xb.loop = !0;
  ac(f);
}, Ab = new AudioContext(), p = new DOMMatrix(), w = new DOMMatrix(), lb = new Float32Array(16), Sb = new Float32Array(624), Xb = new Float32Array(624), Pb = new Uint8Array(65536), xb = Ab.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, f, l) => (b * l + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
ac(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const t = [new Float32Array(16), new Float32Array(16),], n = r => {
        requestAnimationFrame(n);
        var k = (r - (aa || r)) / 1e3;
        if (wa += k, c += d = ba ? 0 : Za(0.066, k), aa = r, 0 < d) {
          ma();
          Ja && c > Ja && (Ja = 0, h4.innerHTML = "");
          da = N(da, ya ? N(da, -9, 1.5) : m(c / 3), 1,);
          ea = N(ea, e[9].h, 0.2 + 0.3 * h(2 * e[9].h - 1),);
          let C = 1;
          r = () => nb(w, Na[++C].m);
          ra = eb(e[12].g, e[13].g);
          va = db(N(va, 0, 1), bb(va + 60 * d), e[5].g - e[6].h,);
          sa = db(N(sa, 0, 5), bb(sa + 56 * d), ra,);
          ta = db(N(ta, 0, 4), bb(ta + 48 * d), ra,);
          Rb(r(), -12, 4.2, 40 * da - 66);
          r().translateSelf(0, 0, -15).scaleSelf(1, m(1.22 - e[1].g), 1);
          r().translateSelf(0, 0, 15).scaleSelf(1, m(1.22 - e[2].g), 1);
          r().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, m(1.1 - e[6].g), 1);
          r().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[12].g);
          r().translateSelf(0, 0.01 > e[3].g ? -500 : (1 - e[2].g) * e[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (e[3].g - 1), 0,);
          k = Za(e[2].h, 1 - e[4].h);
          r().translateSelf(k * Math.sin(c / 1.5 + 2) * 12);
          r().translateSelf(k * Math.sin(0.7 * c + 2) * 12);
          r().translateSelf(k * Math.sin(c + 3) * 8.2);
          r().translateSelf(9.8 * (1 - k));
          k = m(1 - 5 * k) * eb(e[4].g, e[5].g);
          r().translateSelf(0, k * Math.sin(1.35 * c) * 4);
          r().translateSelf(0, 0, k * Math.sin(0.9 * c) * 8);
          r().translateSelf(0, -6.5 * e[4].h);
          r().translateSelf(-75, (1 - e[5].h) * (1 - e[6].g) * 3, 55).rotateSelf(180 * (1 - e[5].h) + va, 0,);
          k = eb(e[7].h, e[6].h);
          r().translateSelf(0, k * Math.sin(c) * 5 + 3.5 * (1 - $a(e[6].g, e[7].g)),);
          r().translateSelf(0, k * Math.sin(c + 3) * 6, k * Math.sin(0.6 * c + 1) * 6,);
          r().translateSelf(0, -7.3 * e[7].h);
          Rb(r(), -123, 1.4, 55 + -65 * ea);
          k = eb(e[10].g, e[11].g);
          r().translateSelf(0, -2, k * h(Math.sin(1.1 * c)) * -8.5 + 10);
          r().translateSelf(0, -2, k * h(Math.sin(2.1 * c)) * -8.5 + 10);
          r().translateSelf(0, -2, -8.5 * $a((1 - e[10].g) * (1 - k), k * h(Math.sin(1.5 * c))) + 10,);
          k = eb(e[8].h, e[12].h);
          for (var q = 0; 4 > q; q++) {
            r().translateSelf((2 < q ? 2 * (1 - k) + k : 0) - 100, k * Math.sin(1.3 * c + 1.7 * q) * (3 + q / 3) + 0.7, 115 + (1 & q ? -1 : 1) * (1 - e[8].h) * (1 - e[12].h) * -7 + $a(k, 0.05) * Math.cos(1.3 * c + 7 * q) * (4 - 2 * (1 - q / 3)),);
          }
          r().translateSelf(2.5 * (1 - k) - 139.7, -3 * (1 - e[8].g) + k * Math.sin(0.8 * c) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * k + 3), 0);
          r().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + sa);
          r().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ta);
          r().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ta);
          r().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ta);
          k = eb(e[13].h, e[14].h);
          for (q = 0; 3 > q; ++q) {
            r().translateSelf(0, k * Math.sin(1.5 * c + 1.5 * q) * 4 + (q ? 0 : (1 - e[13].h) * (1 - e[14].h)),);
          }
          r().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          k = eb(eb((e[14].g + e[14].h) / 2, e[13].h), (e[15].g + e[15].h) / 2,);
          r().translateSelf(0, 16 * k, 8.5 * m(2 * k - 1) + 95);
          for (k = 0; 13 > k; ++k) {
            Ma[k].F(), mb(p, Xb, k);
          }
          for (k = 0; 16 > k; ++k) {
            e[k].F(), mb(p, Xb, k + 13), Xb[16 * k + 223] = 1 - e[k].g;
          }
          qa(r);
          for (r = 0; C >= r; ++r) {
            mb(Na[r].m, Sb, r - 1);
          }
          ia = 0;
          u();
          Z.b6o(36160, T);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          Z.uae(u("b"), !1, mb(nb().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa,),),);
          Yb(u("c"), 0, 40);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(u("b"), !1, mb(nb().translateSelf(-Ua, -Va, -Wa - 0.3,),),);
          Yb(u("c"), 0, 40);
          Z.f1s();
        }
        r = Ga;
        k = Ha;
        q = Ia;
        ba ? (nb(ka).invertSelf(), kb(3.6, 3.5), r = gb, k = hb, q = 5, nb(w, y).rotateSelf(-20, 0).invertSelf().translateSelf(-r, -k, -q,).rotateSelf(0, 99)) : nb(w, y).rotateSelf(-Xa, -Ya).invertSelf().translateSelf(-r, -k, -q);
        B();
        Z.b6o(36160, O);
        Z.v5y(0, 0, 2048, 2048);
        K[0](54.7 * 1.1);
        K[1](126 * 1.1);
        A();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(A("a"), !1, mb(ka));
        Z.uae(A("b"), !1, mb(y));
        Z.uae(A("i"), !1, t[0]);
        Z.uae(A("j"), !1, t[1]);
        Z.ubu(A("k"), r, k, q);
        Yb(A("c"), !ja, 41);
        g();
        Z.ubu(g("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
        Z.ubu(g("k"), r, k, q);
        Z.uae(g("b"), !1, mb(nb(y).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, T);
        Z.f1s();
      }, v = new DOMMatrix(), y = new DOMMatrix(), x = f, z = ob(8, () => ({}));
      var l = Zb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const B = $b(Zb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), g = $b(Zb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), u = $b(l, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), A = $b(l, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), K = ob(2, r => {
        const k = Z.c25();
        return Z.a4v(33984 + r), Z.b9j(3553, k), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), q => {
          let C = 0, M = 0, U = 0, I = 1 / 0, D = 1 / 0, E = 1 / 0, Q = -1 / 0, L = -1 / 0, ca = -1 / 0;
          Z.fas(36160, 36096, 3553, k, 0);
          Z.c4s(256);
          nb().scale3dSelf(q).multiplySelf(nb(la[r], v).multiplySelf(y).invertSelf(),);
          for (let P = 0; 8 > P; ++P) {
            const R = z[P];
            kb(4 & P ? 1 : -1, 2 & P ? 1 : -1, 1 & P ? 1 : -1);
            C -= R.x = (0 | gb) / (q * jb);
            M -= R.y = (0 | hb) / (q * jb);
            U -= R.z = (0 | ib) / (q * jb);
          }
          nb().rotateSelf(298, 139).translateSelf(C / 8, M / 8, U / 8);
          for (q = 0; 8 > q; ++q) {
            const {x:P, y:R, z:na} = z[q];
            kb(P, R, na);
            I = Za(I, gb);
            Q = $a(Q, gb);
            D = Za(D, hb);
            L = $a(L, hb);
            E = Za(E, ib);
            ca = $a(ca, ib);
          }
          q = 10 + r;
          E *= 0 > E ? q : 1 / q;
          ca *= 0 < ca ? q : 1 / q;
          Z.uae(B("b"), !1, mb(nb(w, v).scaleSelf(2 / (Q - I), 2 / (L - D), 2 / (E - ca),).translateSelf((Q + I) / -2, (L + D) / -2, (E + ca) / 2).multiplySelf(p), t[r],),);
          Yb(B("c"), !ja, 41);
        };
      }), O = Z.c5w();
      l = Z.c25();
      const J = Z.c3z(), T = Z.c5w();
      u();
      Z.uae(u("a"), !1, mb(wb(1e-4, 2, 1.4, 0.4)));
      A();
      Z.ubh(A("q"), 2);
      Z.ubh(A("h"), 1);
      Z.ubh(A("g"), 0);
      g();
      Z.ubh(g("q"), 2);
      Z.b6o(36160, O);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, T);
      Z.bb1(36161, J);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, J);
      Z.a4v(33986);
      Z.b9j(3553, l);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, l, 0);
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
      NO_INLINE(Bb)();
      NO_INLINE(Qb)();
      requestAnimationFrame(n);
    }
  }, f = new Image();
  f.onload = f.onerror = b;
  f.src = La;
  NO_INLINE(lc)(() => {
    ac(() => {
      let n = 0;
      const v = [], y = [], x = [], z = [], B = new Int32Array(8), g = new Map(), u = new Int32Array(B.buffer, 0, 5), A = new Float32Array(B.buffer);
      Na.map((K, O) => {
        let J;
        const T = r => {
          let {x:k, y:q, z:C} = J[r], M = (A[0] = k, A[1] = q, A[2] = C, r = "" + (J.C ? u : B), g.get(r));
          return void 0 !== M ? (k = 3 * M, z[k] = (z[k++] + B[5]) / 2, z[k] = (z[k++] + B[6]) / 2, z[k] = (z[k] + B[7]) / 2) : (g.set(r, M = g.size), y.push(k, q, C, A[3]), x.push(B[4]), z.push(B[5], B[6], B[7])), M;
        };
        for (J of (A[3] = 41 < O ? -14 : K.G && O, K.o)) {
          const {x:r, y:k, z:q} = Hb(J);
          B[4] = 0 | J.u;
          B[5] = 32767 * r;
          B[6] = 32767 * k;
          B[7] = 32767 * q;
          for (let C = 2, M = T(0), U = T(1); J.length > C; ++C) {
            v.push(M, U, U = T(C));
          }
        }
        K.o = null;
        K.s = n;
        K.D = n = v.length;
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
        const [K, O, J, T, r] = JSON.parse(localStorage.DanteSP22,);
        e.map((k, q) => k.g = k.h = k.i = q ? 0 | K[q] : 0);
        Ma.map((k, q) => k.i = 0 | O[q]);
        Da = J;
        ea = r;
        c = T;
        d = 0;
      } catch {
      }
      ub();
      da = m(Da);
      ac(b);
    });
    const l = ob(11, n => F(Math.sin(n / 10 * Math.PI), n / 10).rotate(+n).scale(1.0001 - n / 10, 0, 1 - n / 10),), t = ob(10, n => sb(qb(rb(18), l[n]).reverse(), qb(rb(18), l[n + 1]), 1,)).flat();
    X(() => W([Ra.slice(1),], F(-2).scale3d(3).rotate(90, 0)), 0);
    X(() => {
      const n = g => X(() => {
        Ra.map(({x:u, z:A}) => {
          W(H(11, 1), F(4 * u, 4, g + 4 * A).scale(0.8, 3, 0.8), S(0.5, 0.3, 0.7, 0.6),);
          W(H(), F(4 * u, 7, g + 4 * A).scale(1, 0.3), S(0.5, 0.5, 0.5, 0.3));
        });
        W(Y(G(H(), F(0, 0, g).scale(5, 1, 5), S(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(u => G(H(), F(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), S(0.8, 0.8, 0.8, 0.3),)),),);
        W(H(), F(0, -3, g).scale(8, 2, 8), S(0.4, 0.4, 0.4, 0.3));
      }), v = g => Y(G(H(), F(0, -g / 2).scale(6, g - 1, 2.2)), G(H(), F(0, -g / 2 - 6).scale(4, g - 3, 4)), G(H(32, 1), F(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),), y = () => X(() => ob(7, g => W(G(H(6, 1), F(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), S(0.3, 0.3, 0.38),),))), x = Y(G(H(30, 1, 1.15, 1), F(0, -3).scale(3.5, 1, 3.5), S(0.7, 0.4, 0.25, 0.7),), G(H(30, 1, 1.3, 1), F(0, -2.5).scale(2.6, 1, 3), S(0.7, 0.4, 0.25, 0.2),), G(H(), F(4, -1.2).scale3d(2), S(0.7, 0.4, 0.25, 0.3)),), z = (X(() => 
      {
        W(x);
        Cb(F(0, -3, 4));
      }), Cb(F(-5.4, 1.5, -19).rotate(0, -90)), Db(F(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Db(F(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...rb(18).map(({x:g, z:u}) => [7 * g, 10 * u, 4.5 - 2 * h(g),]),), Ra.map(({x:g, z:u}) => W(H(6), F(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), S(0.6, 0.3, 0.3, 0.4))), [-15, 15,].map((g, u) => {
        y();
        y();
        W(H(), F(0, 6.3, g).scale(4, 0.3, 1), S(0.3, 0.3, 0.3, 0.4));
        W(H(), F(0, 1, g).scale(3, 0.2, 0.35), S(0.5, 0.5, 0.5, 0.3));
        W(H(), F(0, 0, u ? 22 : -23).scale(3, 1, 8), S(0.9, 0.9, 0.9, 0.2));
        ob(5, A => W(t, F(18.5 * (u - 0.5), 0, 4.8 * A - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2), S(1, 1, 0.8, 0.2),));
      }), W(H(), F(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), S(0.8, 0.8, 0.8, 0.2)), W(H(), F(3, 1.5, -20).scale(0.5, 2, 5), S(0.7, 0.7, 0.7, 0.2)), W(H(), F(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), S(0.75, 0.75, 0.75, 0.2),), W(H(5), F(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), S(0.6, 0.3, 0.3, 0.4),), W(H(), w.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), S(0.8, 0.2, 0.2, 0.5),), W(Y(Ob(G(H(6, 0, 0, 0.3), F(8, -3, -4).scale(13, 1, 13), S(0.7, 0.7, 0.7, 0.2),
      ), G(H(6), F(0, -8).scale(9, 8, 8), S(0.4, 0.2, 0.5, 0.5)), G(H(6, 0, 0, 0.3), F(0, -0.92).scale(13, 2, 13), S(0.8, 0.8, 0.8, 0.2),),), G(H(5), w.scale(5, 30, 5), S(0.4, 0.2, 0.6, 0.5)), G(H(5, 0, 1.5), F(0, 1).scale(4.5, 0.3, 4.5), S(0.7, 0.5, 0.9, 0.2),), G(H(), w.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), S(0.5, 0.5, 0.5, 0.5),), G(H(6), F(15, -1.5, 4).scale(3.5, 1, 3.5), S(0.5, 0.5, 0.5, 0.5),),),), X(() => {
        W(H(5), F(0, -0.2).scale(5, 1, 5), S(0.6, 0.65, 0.7, 0.3));
        Cb(F(0, 1.2));
      }), Cb(F(15, -2, 4)), X(() => {
        W(Y(Ob(G(H(), w.scale(1.5, 1, 5), S(0.9, 0.9, 0.9, 0.2)), G(H(6), w.scale(4, 1, 5), S(0.9, 0.9, 0.9, 0.2)), G(H(), F(0, -2).scale(2, 3.2, 1.9), S(0.3, 0.8, 0.5, 0.5),), G(H(16, 1, 0, 4), w.scale(1, 1, 1.5).rotate(0, 90), S(0.9, 0.9, 0.9, 0.2),),), G(H(), w.scale(1.3, 10, 1.3), S(0.2, 0.7, 0.4, 0.6)),), F(0, 0, 45),);
        Db(F(0, 2.8, 45), [0, 0, 4.5,]);
      }), n(35), n(55), W(H(), F(-18.65, -3, 55).scale(2.45, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2)), X(() => {
        W(H(3), F(-23, -1.7, 55.8).scale(5, 0.7, 8.3), S(0.3, 0.6, 0.6, 0.2));
        W(H(8), F(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), S(0.8, 0.8, 0.8, 0.2));
        W(H(), F(-23, -3, 55).scale(5.2, 1.7, 3), S(0.5, 0.5, 0.5, 0.3));
        W(H(), F(-23, -2.2, 62).scale(3, 1, 4), S(0.5, 0.5, 0.5, 0.3));
        Cb(F(-23, -0.5, 66.5));
      }), X(() => {
        W(H(), F(-22.55, -3, 55).scale(1.45, 1.4, 2.7), S(0.7, 0.7, 0.7, 0.2));
        W(Y(G(H(), w.scale(3, 1.4, 2.7)), G(H(), w.scale(1.2, 8, 1.2)),), F(-33, -3, 55), S(0.7, 0.7, 0.7, 0.2),);
      }), X(() => {
        W(Y(G(H(), F(-27, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2),), G(H(), F(-27, -3, 55).scale(1, 3), S(0.9, 0.9, 0.9, 0.2)),),);
        W(H(), F(-39, -3, 55).scale(3, 1.4, 2.7), S(0.9, 0.9, 0.9, 0.2));
      }), X(() => {
        W(H(6), F(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), S(0.7, 0.7, 0.7, 0.4),);
      }), Cb(F(-55, -1.1, 46).rotate(0, 90)), W(H(6), F(-61.3, -2.4, 49).scale(3, 1, 5), S(0.4, 0.6, 0.6, 0.3)), W(H(7), F(-57, -2.6, 46).scale(4, 1, 4), S(0.8, 0.8, 0.8, 0.3)), [...G(H(), F(0, -3).scale(11, 1.4, 3), S(0.9, 0.9, 0.9, 0.2)), ...G(H(), F(0, -2.2).scale(7.7, 0.5, 4), S(0.5, 0.5, 0.5, 0.2),), ...Y(G(H(6), w.rotate(90).scale(6, 8, 6), S(0.3, 0.6, 0.6, 0.3)), G(H(4, 0, 0.01), F(0, 6).scale(12, 2, 0.75).rotate(0, 45), S(0.3, 0.6, 0.6, 0.3),), G(H(6), w.rotate(90).scale(5, 12, 5), S(0.3, 
      0.6, 0.6, 0.3)), ...[5, 0, -5,].map(g => G(H(5), F(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), S(0.3, 0.6, 0.6, 0.3),)),),]), B = (W(z, F(-53, 0, 55)), X(() => W(z), 2), W(H(), F(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), S(0.7, 0.7, 0.7, 0.2),), W(H(3, 0, -0.5), F(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), S(0.8, 0.8, 0.8, 0.2),), W(Y(Ob(G(H(), F(-100, -2.4, 55).scale(8, 0.9, 8), S(0.8, 0.8, 0.8, 0.2),), G(H(), F(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), S(0.8, 0.8, 
      0.8, 0.2),), G(H(), F(-100, -2.6, 70).scale(3, 1.1, 7), S(0.8, 0.8, 0.8, 0.2),), G(H(), F(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), S(0.8, 0.8, 0.8, 0.2),), G(H(6), F(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), S(0.6, 0.6, 0.6, 0.3),), G(H(), F(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), S(0.8, 0.8, 0.8, 0.2),), G(H(), F(-100, 0.42, 92).scale(3, 1.1, 4.1), S(0.8, 0.8, 0.8, 0.2),),), G(H(8), F(-100, -1, 55).scale(7, 0.9, 7), S(0.3, 0.3, 0.3, 0.4),), G(H(8), F(-100, -2, 
      55).scale(4, 0.3, 4), S(0.4, 0.4, 0.4, 0.5),), G(H(8, 0, -3.1), F(-100, -3, 55).scale(0.4, 1, 0.4), S(0.4, 0.4, 0.4, 0.5),),),), Db(F(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Db(F(-89, 0.2, 80), [0, 0, 6,]), W(Y(G(H(), F(-100, 1, 63).scale(7.5, 4), S(0.5, 0.5, 0.5, 0.4)), G(H(), F(-100, 0, 70).scale(2, 2, 10), S(0.5, 0.5, 0.5, 0.4),), G(H(20, 1), F(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), S(0.5, 0.5, 0.5, 0.4),),),), Ra.map(({x:g, z:u}) => {
        W(H(6), F(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), S(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(A => W(H(6), F(7 * g - 100, A, 7 * u + 55).scale(1.3, 0.5, 1.3), S(0.4, 0.2, 0.2, 0.8),));
      }), ob(7, g => {
        W(H((23 * g + 1) % 5 + 5, 0, 0.5), F(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3,), S(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),);
      }), W(H(), F(-87, -9.5, 24).scale(7, 1, 3), S(0.4, 0.5, 0.6, 0.4)), W(H(4), F(-86, -9.2, 27).scale(5, 1, 5), S(0.5, 0.6, 0.7, 0.3)), W(H(12, 1), F(-86, -9, 31).scale(1.5, 1, 1.5), S(0.3, 0.3, 0.4, 0.1)), Cb(F(-86, -7.5, 31)), X(() => {
        [0, 12, 24,].map(g => W(H(), F(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), S(0.2, 0.5, 0.6, 0.2),));
      }), X(() => {
        [6, 18,].map(g => W(H(), F(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), S(0.1, 0.4, 0.5, 0.2),));
      }), W(Y(Ob(G(H(5), F(0, 0, -7).scale(2, 1.2, 2), S(0.2, 0.4, 0.7, 0.3),), G(H(5), w.scale(9, 1.2, 9), S(0, 0.2, 0.3, 0.5)), G(H(), w.scale(11, 1, 13), S(0.3, 0.4, 0.6, 0.3)),), G(H(5), w.scale(5.4, 5, 5.4), S(0, 0.2, 0.3, 0.5)),), F(-38.9, -11.3, 17),), Cb(F(-38.9, -9.6, 10)), X(() => {
        W(Y(Ob(G(H(5), F(0, 2).scale(5, 7, 5).skewY(8), S(0.2, 0.4, 0.5, 0.5),), G(H(5), F(0, 6).scale(1.1, 7, 1.1).skewY(-8), S(0.25, 0.35, 0.5, 0.5),), G(H(5), F(0, 9).scale(0.6, 7, 0.6).skewY(8), S(0.35, 0.3, 0.5, 0.5),),), G(H(5), w.scale(4, 8, 4), S(0.2, 0.4, 0.5, 0.5)), G(H(5), F(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), S(0.2, 0.4, 0.5, 0.5),),), F(-38.9, -11.3, 17),);
        Db(F(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({x:g, z:u}) => [3 * g, 3 * u, 1.2,]),);
      }), Ra.map(({x:g, z:u}) => {
        W(H(14, 1), F(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), S(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(A => W(H(17, 1), F(9 * g - 38.9, A - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), S(0.6, 0.6, 0.6, 0.3),));
      }), W(Y(Ob(G(H(6), F(0, 0, -36).scale(15, 1.2, 15), S(0.7, 0.7, 0.7, 0.3),), G(H(), F(0, 0, -18).scale(4, 1.2, 6), S(0.45, 0.4, 0.6, 0.3),),), ...ob(6, g => ob(6, u => G(H(6), F(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g - 50 + 2 * Math.sin(4 * u)).scale(2, 5, 2), S(0.7, 0.7, 0.7, 0.3),))).flat(),), F(-38.9, -11.3, 17),), Db(F(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), W(H(5), F(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), S(0.8, 0.1, 0.25, 0.4),), Cb(F(-84, -0.5, 85).rotate(0, 
      45)), X(() => {
        W(x);
        Cb(F(0, -3, -4).rotate(0, 180));
      }), Y(G(H(), F(0, -0.5, 1).scale(1.15, 1.2, 6.5), S(0.25, 0.25, 0.35, 0.3),), Y(G(H(3), F(0, 0, -5.5).scale(3, 2), S(0.6, 0.3, 0.4, 0.3)), G(H(), F(0, 0, -3.65).scale(2.5, 3), S(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(g => G(H(), F(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), S(0.7, 0.2, 0, 0.3),)),));
      X(() => ob(2, g => W(B, F(9 * g - 110 + (1 & g), 1.9, -12))));
      X(() => ob(2, g => W(B, F(9 * (g + 2) - 110 + (1 & g), 1.9, -12))));
      X(() => ob(3, g => W(B, F(9 * g - 106, 1.9, -12))));
      W(Y(Ob(G(H(), F(26.5, -1.6, 10).scale(20, 2.08, 3)), G(H(), F(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...ob(4, g => G(H(), F(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9)),), ...ob(3, g => G(H(), F(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9)),),), F(-123, 0.2, -12), S(0.5, 0.5, 0.6, 0.2),);
      Cb(F(-116, -1.4, -18).rotate(0, 180));
      W(H(), F(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), S(0.8, 0.8, 0.8, 0.2),);
      W(H(6), F(-116, -2.6, -16.5).scale(3.2, 0.8, 3), S(0.6, 0.5, 0.7, 0.2));
      W(H(), F(-115.5, -17, -12).scale(0.5, 15, 2.2), S(0.6, 0.6, 0.6, 0.3));
      W(H(8), F(-114, -17, -2).scale(2, 15, 2), S(0.6, 0.6, 0.6, 0.3));
      W(H(8), F(-79, -17, -2).scale(2, 15, 2), S(1, 1, 1, 0.3));
      W(H(), F(-77, -17, -50.5).scale(2.2, 15, 0.5), S(0.6, 0.6, 0.6, 0.3));
      ob(3, g => {
        W(v(16), F(12 * g - 109, -9, -12), S(0.6, 0.6, 0.6, 0.3));
        W(v(16), F(-77, -9, -12 * g - 20).rotate(0, 90), S(0.6, 0.6, 0.6, 0.3),);
      });
      W(Y(G(H(12), F(-77, -14.5, -12).scale(4, 17.5, 4), S(0.7, 0.7, 0.7, 0.2),), G(H(), F(-79, 0.1, -12).scale(3.5, 2, 1.3), S(0.4, 0.5, 0.6, 0.2),), G(H(), F(-77, 0.1, -14).scale(1.5, 2, 2), S(0.4, 0.5, 0.6, 0.2),), G(H(12), F(-77, 3.1, -12).scale(3, 5, 3), S(0.4, 0.5, 0.6, 0.2),),),);
      W(H(), F(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), S(0.6, 0.6, 0.6, 0.3),);
      W(H(9), F(-98, -18.4, -40).scale(2.5, 13.5, 2.5), S(0.5, 0.5, 0.5, 0.3));
      W(Y(G(H(), F(-93, -5.8, -40).scale(9, 1, 5), S(0.8, 0.8, 0.8, 0.1),), G(H(9), F(-98, -5.8, -40).scale(3, 8, 3), S(0.7, 0.7, 0.7, 0.2),),),);
      Cb(F(-98, -4.4, -40).rotate(0, 90));
      Db(F(-115, 0.2, -12), [0, 0, 3.5,]);
      Db(F(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      W(Y(Ob(G(H(6, 0, 0, 0.6), F(-100, 0.7, 105.5).scale(8, 1, 11), S(0.7, 0.7, 0.7, 0.2),), G(H(), F(-101.5, 0.7, 93.5).scale(10.5, 1, 2), S(0.7, 0.7, 0.7, 0.2),),), G(H(5), F(-100, 0.7, 113).scale(4, 3, 4), S(0.7, 0.7, 0.7, 0.2),),),);
      ob(4, g => X(() => W(H(6), F(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), S(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),)));
      X(() => {
        W(Y(G(H(10), w.scale(6, 2, 6), S(0.1, 0.6, 0.5, 0.3)), G(H(10), w.scale(3.3, 6, 3.3), S(0.1, 0.6, 0.5, 0.5)),),);
        W(H(15, 1), F(-7.5).rotate(0, 90).scale(3, 2.3, 3), S(0.4, 0.4, 0.4, 0.3),);
        W(H(10), F(-7.5).rotate(0, 90).scale(2, 2.5, 2), S(0.3, 0.8, 0.7, 0.3));
        W(H(5), F(-7.5).rotate(0, 90).scale(1, 3), S(0.5, 0.5, 0.5, 0.5));
        Cb(F(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(g => W(t, w.rotate(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), S(1, 1, 0.8, 0.2),));
        Db(F(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(g => {
        [7.2, 1.5,].map(u => W(H(15, 1), F(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), S(0.5, 0.24, 0.2, 0.4),));
        W(t, F(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90), S(1, 1, 0.8),);
        W(H(12, 1), F(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), S(0.6, 0.24, 0.2, 0.5),);
        W(Y(G(H(), F(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), S(0.5, 0.5, 0.5, 0.4),), G(H(), w.scale(3, 3, 10), S(0.6, 0.24, 0.2, 0.5)), G(H(28, 1), F(0, 3, -5).scale(3, 4, 10).rotate(90, 0), S(0.6, 0.24, 0.2, 0.5),), G(H(5), F(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), S(0.6, 0.24, 0.2, 0.5),), G(H(5), F(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), S(0.6, 0.24, 0.2, 0.5),),), F(g - 100, 0.7, 97),);
      });
      W(Y(G(H(), F(-82.07, 0.8, 106).scale(11, 0.9, 2.2), S(0.7, 0.7, 0.7, 0.1),), G(H(45, 1), F(-81, 0.7, 106).scale3d(7.7), S(0.7, 0.7, 0.7, 0.1),),),);
      X(() => {
        W(Y(G(H(45, 1), w.scale(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)), G(H(), F(0, 0, -5.5).scale(1.5, 3, 2.7), S(0.45, 0.45, 0.45, 0.2),),),);
        W(H(8), F(0, 2).scale(3, 1.5, 3).rotate(0, 22), S(0.7, 0.7, 0.7, 0.1));
        W(H(5), F(0, 2).scale(1, 2), S(0.3, 0.3, 0.3, 0.2));
        Db(F(0, 3), ...rb(14).map(({x:g, z:u}) => [5.6 * g, 5.6 * u, 2,]),);
      });
      X(() => {
        [-1, 1,].map(g => W(t, w.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), S(1, 1, 0.8),));
        W(Y(G(H(28, 1), F(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), G(H(), w.scale(9, 5, 2), S(0.3, 0, 0, 0.3)),),);
        W(G(H(28, 1), w.scale(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)),);
        W(G(H(5), F(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      X(() => {
        W(Y(G(H(28, 1), F(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), G(H(), F(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)), G(H(), F(0, 0, 7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),),);
        W(G(H(28, 1), w.scale(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)),);
        W(G(H(5), F(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      X(() => {
        W(Y(G(H(28, 1), F(0, 2).scale(7.5, 1, 7.5), S(0.35, 0, 0, 0.3),), G(H(), F(7).scale(9, 5, 2), S(0.3, 0, 0, 0.3)), G(H(), F(0, 0, -7).scale(2, 5, 9), S(0.3, 0, 0, 0.3)),),);
        W(G(H(28, 1), w.scale(7.5, 1, 7.5), S(0.45, 0.45, 0.45, 0.2)),);
        W(G(H(5), F(0, 1).scale(1, 0.2), S(0.3, 0.3, 0.3, 0.2)),);
      });
      W(H(), F(-58, 1, 106).scale(2, 0.65, 2), S(0.7, 0.7, 0.7, 0.2));
      W(H(), F(-50.7, 1, 99).scale(2, 0.65, 1), S(0.7, 0.7, 0.7, 0.2));
      W(H(), F(-42, 0.4, 91).scale(5, 1, 2.5), S(0.7, 0.7, 0.7, 0.3));
      W(H(), F(-34.2, 0.4, 91).scale(3, 1, 3), S(0.7, 0.7, 0.7, 0.3));
      Cb(F(-34, 2.7, 96).rotate(-12, 0));
      W(H(5), F(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), S(0.2, 0.5, 0.5, 0.6),);
      [S(0.1, 0.55, 0.45, 0.2), S(0.2, 0.5, 0.5, 0.3), S(0.3, 0.45, 0.55, 0.4),].map((g, u) => X(() => {
        W(H(), F(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
        2 === u && W(H(), F(-29.1, 0.4, 91).scale(2.1, 1, 3), S(0.7, 0.7, 0.7, 0.3));
        1 === u && W(H(), F(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), S(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(g => W(t, F(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), S(1, 1, 0.8),));
      ob(3, g => W(v(24.7 - 0.7 * (1 & g)), F(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)), 1 & g ? S(0.5, 0.5, 0.5, 0.3) : S(0.35, 0.35, 0.35, 0.5),));
      W(Y(G(H(6, 0, 0, 0.3), F(0, -0.92, 95).scale(14, 2, 14), S(0.8, 0.8, 0.8, 0.2),), G(H(5), F(0, 0, 95).scale3d(6), S(0.3, 0.3, 0.3, 0.5)),),);
      Cb(F(0, 1.7, 82).rotate(0, 180));
      W(H(5), F(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), S(0.5, 0.3, 0.3, 0.4),);
      W(H(6), F(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), S(0.5, 0.6, 0.7, 0.3),);
      W(H(), F(0, 16, 129).scale(1.5, 1, 2), S(0.5, 0.6, 0.7, 0.3));
      W(H(7), F(0, 16.2, 133).scale(5, 1, 5), S(0.4, 0.5, 0.6, 0.4));
      W(Y(Ob(G(H(), F(0, 16, 110.5).scale(12, 1, 3), S(0.5, 0.3, 0.3, 0.4),), G(H(), F(0, 16, 111).scale(3, 1, 3.8), S(0.5, 0.3, 0.3, 0.4),),), G(H(5), F(0, 16, 103.5).scale(5.5, 5, 5.5), S(0.5, 0.3, 0.3, 0.4),),),);
      X(() => {
        W(H(3), F(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), S(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(g => {
          W(H(6), F(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), S(0.7, 0.7, 0.7, 0.4),);
          W(H(), F(0, 6.2, g + 95).scale(0.5, 11, 0.5), S(0.5, 0.3, 0.3, 0.4),);
        });
      });
      X(() => {
        W(H(5), w.scale(5, 1.1, 5), S(0.5, 0.3, 0.3, 0.4));
        W(H(5), w.scale(5.5, 0.9, 5.5), S(0.25, 0.25, 0.25, 0.4));
        Cb(F(0, 1.5, -1).rotate(0, 180));
      });
      Db(F(0, 3, 95), ...rb(9).map(({x:g, z:u}) => [9 * g, 9 * u, 4,]),);
      Db(F(0, 19, 134), [0, 0, 3.5,]);
    });
    X(() => {
      W(tb(20), F(0, 1).scale3d(0.5), S(1, 0.3, 0.4));
      W(tb(30), w.scale(0.65, 0.8, 0.55), S(1, 0.3, 0.4));
      W(H(), F(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), S(0.3, 0.3, 0.3));
      [-1, 1,].map(n => {
        W(t, w.rotate(0, 0 < n ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), S(1, 1, 0.8),);
        W(G(Y(H(15, 1), G(H(), F(0, 0, 1).scale(2, 2, 0.5)),), w.rotate(-90, 0).scale(0.1, 0.05, 0.1), S(0.3, 0.3, 0.3),), F(0.2 * n, 1.2, 0.4).rotate(0, 20 * n, 20 * n),);
        X(() => {
          W(H(20, 1), F(0.3 * n, -0.8).scale(0.2, 0.7, 0.24), S(1, 0.3, 0.4));
        });
      });
    });
    X(() => {
      W(H(6).slice(0, -1), w.scale(0.77, 1, 0.77), S(1, 0.3, 0.5));
    }, 0);
    X(() => {
      W(tb(30, 24, (n, v, y) => {
        const x = v / 24, z = n * Math.PI * 2 / 30, B = Math.sin(x ** 0.6 * Math.PI / 2);
        n = x * x * Math.sin(n * Math.PI * 14 / 30) / 4;
        return 23 < v ? {x:y.C = 0, y:-0.5, z:0,} : {x:Math.cos(z) * B, y:Math.cos(x * Math.PI) - x - n, z:Math.sin(z) * B + Math.sin(n * Math.PI * 2) / 4,};
      }), w.scale(0.7, 0.7, 0.7), S(1, 1, 1),);
      [-1, 1,].map(n => W(tb(12), F(0.16 * n, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    X(() => {
      W(H(6, 1), w.scale(0.13, 1.4, 0.13), S(0.3, 0.3, 0.5, 0.1));
      W(H(10), F(0, 1).scale(0.21, 0.3, 0.21), S(1, 0.5, 0.2));
      W(H(3), F(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), S(0.2, 0.2, 0.2, 0.1),);
    }, 0);
  });
});

