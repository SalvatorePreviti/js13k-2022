let aa, ca, da, ha, ia, ja, ka = 0, ma = 0, a = 0, na = 0, oa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, va = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Da = 1, d = 0.066;
const e = [], h = [], Fa = [], Ga = [], Ha = {x:0, y:0, z:0,};
var La = 0, Ma = 180;
const m = (c, b) => Array.from(Array(c), (g, l) => b(l)), Na = Math.PI / 180, Oa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Pa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), 
".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Qa = [[69, 128, 0, 143, 128, 0, 
0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Ra = {x:0, y:0, z:0,}, Sa = (c, b = 0, g = 1) => c < b ? b : g < c ? g : c, Ta = (c, b) => p(c) > b ? c : 0, 
u = (c, b, g) => (0 < g ? 1 > g ? c + (b - c) * g : b : c) || 0, Va = (c, b) => (c = Sa(c), u(c, 1 - c, b)), Wa = c => Math.atan2(Math.sin(c *= Na), Math.cos(c)) / Na, Xa = (c, b, g) => c + (2 * (b = (b - c) % 360) % 360 - b) * Sa(g) || 0, Ya = ({x:c, y:b, z:g}) => Math.hypot(c - Ha.x, b - Ha.y, g - Ha.z), Za = ({x:c, y:b, z:g}, l) => c * l.x + b * l.y + g * l.z, $a = c => {
  let b, g = 0, l = 0, n = 0, k = c.at(-1);
  for (b of c) {
    g += (k.y - b.y) * (k.z + b.z), l += (k.z - b.z) * (k.x + b.x), n += (k.x - b.x) * (k.y + b.y), k = b;
  }
  return b = Math.hypot(g, l, n), g /= b, l /= b, n /= b, {x:g, y:l, z:n, w:g * k.x + l * k.y + n * k.z,};
}, bb = (c, b = ab, g = 0,) => (g *= 16, b[g++] = c.m11, b[g++] = c.m12, b[g++] = c.m13, b[g++] = c.m14, b[g++] = c.m21, b[g++] = c.m22, b[g++] = c.m23, b[g++] = c.m24, b[g++] = c.m31, b[g++] = c.m32, b[g++] = c.m33, b[g++] = c.m34, b[g++] = c.m41, b[g++] = c.m42, b[g++] = c.m43, b[g] = c.m44, b), eb = (c, b, g, l) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0,], fb = (c, b, g) => (c.D = g, c.A = b, c), gb = (c, b, g = c.A) => fb(c.map(l => {
  let n, k;
  return {x:l, y:n, z:k} = l, {x:l, y:n, z:k} = b.transformPoint({x:l, y:n, z:k,}), {x:l, y:n, z:k,};
}), g, c.D,), F = (c, b, g) => c.map(l => gb(l, b, g)), hb = (c, b = 0) => m(c, g => {
  const l = Math.cos(2 * Math.PI * g / c);
  return {x:Math.sin(2 * Math.PI * g / c), y:0, z:0.01 > p(l) ? l : 0 > l ? l - b : l + b,};
}), ib = (c, b, g) => c.map((l, n, {length:k}) => fb([l, b[k - n - 1], b[k - (n + 1) % k - 1], c[(n + 1) % k],], c.A, g,)), I = (c, b, g = 0, l,) => (c = c ? hb(c, l) : Oa, l = gb(c, H(0, 1).scale3d(0 < g ? g : 1)), c = gb(c, H(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...ib(c, l, b), l, c,]), jb = (c, b = c, g = (l, n) => (n *= Math.PI / b, {x:Math.cos(l *= 2 * Math.PI / c) * Math.sin(n), y:Math.cos(n), z:Math.sin(l) * Math.sin(n),})) => {
  const l = [];
  for (let n = 0; c > n; n++) {
    for (let k = 0; b > k; k++) {
      const t = fb([], 0, 1);
      l.push(t);
      t.push(g(n, k, t));
      k && t.push(g((n + 1) % c, k, t));
      b - 1 > k && t.push(g((n + 1) % c, k + 1 % b, t));
      t.push(g(n, k + 1 % b, t));
    }
  }
  return l;
}, kb = (c, b) => {
  var g, l, n, k = b.C;
  for (var t = 0; k.length > t; ++t) {
    if (-0.00008 > (g = Za(c, k[t]) - c.w) ? n = b : 8e-5 < g && (l = b), n && l) {
      l = [];
      n = [];
      k = b.C;
      t = b.B;
      let v = k.at(-1), x = Za(c, v) - c.w;
      for (const y of k) {
        g = Za(c, y) - c.w, 8e-5 > x && n.push(v), -0.00008 < x && l.push(v), (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g) && (x /= g - x, v = {x:v.x + (v.x - y.x) * x, y:v.y + (v.y - y.y) * x, z:v.z + (v.z - y.z) * x,}, l.push(v), n.push(v)), v = y, x = g;
      }
      return {o:2 < l.length && {C:fb(l, k.A, k.D), B:t, u:b,}, m:2 < n.length && {C:fb(n, k.A, k.D), B:t, u:b,},};
    }
  }
  return {o:l, m:n,};
}, lb = (c, b, g = $a(b.C)) => {
  let l, n, k;
  return c ? ({o:l, m:n} = kb(c, b), l || n || c.s.push(b), l && (c.o = lb(c.o, l, g)), n && (c.m = lb(c.m, n, g))) : ({x:l, y:n, z:g, w:k} = g, c = {x:l, y:n, z:g, w:k, s:[b,], o:0, m:0,}), c;
}, mb = (c, b, g) => {
  const l = [], n = (k, t) => {
    let {o:v, m:x} = kb(k, t);
    v || x || (0 < g * Za(k, b) ? v = t : x = t);
    v && (k.o ? n(k.o, v) : l.push(v));
    x && k.m && n(k.m, x);
  };
  for (const k of b.s) {
    n(c, k);
  }
  return l;
}, nb = (c, b) => c && (b(c), nb(c.o, b), nb(c.m, b)), qb = c => c.length ? c.reduce((b, g) => lb(b, {C:g, B:0, u:0,}), 0) : c, rb = c => (nb(c, b => {
  const g = b.m;
  b.m = b.o;
  b.o = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const l of b.s) {
    l.B = !l.B;
  }
}), c), sb = (...c) => c.reduce((b, g) => {
  const l = [];
  if (b = qb(b), g) {
    g = qb(g);
    nb(b, n => n.s = mb(g, n, 1));
    nb(g, n => l.push([n, mb(b, n, -1),]));
    for (let [n, k] of l) {
      for (const t of k) {
        lb(b, t, n);
      }
    }
  }
  return b;
}), N = (...c) => {
  let b;
  const g = k => {
    let t;
    return k.u && ((t = l.get(k.u)) ? (n.delete(t), k = g(k.u)) : l.set(k.u, k)), k;
  }, l = new Map(), n = new Map();
  return [c, ...b] = [...c,], c = rb(sb(rb(qb(c)), ...b)), nb(c, k => {
    for (const t of k.s) {
      n.set(g(t), t.B);
    }
  }), Array.from(n, ([{C:k}, t]) => {
    const v = k.map(({x, y, z:B}) => ({x, y, z:B,}));
    return fb(t ? v.reverse() : v, k.A, k.D);
  });
}, tb = () => {
  va = Va(h[12].g, h[13].g);
  ra = u(u(ra, 0, 1 - Math.exp(-1 * d)), Wa(ra + 60 * d), h[5].g - h[6].i,);
  oa = u(u(oa, 0, 1 - Math.exp(-5 * d)), Wa(oa + 56 * d), va,);
  qa = u(u(qa, 0, 1 - Math.exp(-4 * d)), Wa(qa + 48 * d), va,);
  var c = 0.2 + 0.3 * p(2 * h[9].i - 1);
  ua = u(ua, h[9].i, 1 - Math.exp(-c * d));
  ta = u(ta, sa ? u(ta, -9, 1 - Math.exp(-1.5 * d)) : Sa(a / 3), 1 - Math.exp(-1 * d));
  Da && a > Da && (Da = 0, h4.innerHTML = "");
  h[0].l && 0.8 < h[0].g && (13 > ka ? (1 / 0 > Da && (Da = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0) : sa || (1 / 0 > Da && (Da = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), sa = 1));
  for (const b of e) {
    b.h && (b.j = b.h());
  }
  for (const b of h) {
    b.h();
  }
  for (const b of Fa) {
    b.h();
  }
}, wb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ka = Fa.reduce((c, {l:b}) => c + b, 0)] + " / XIII";
}, xb = () => {
  localStorage.I = JSON.stringify([h.map(({l:c}) => c), Fa.map(({l:c}) => c), na, a, ua,]);
}, Q = (c, b = 1) => {
  const g = da;
  b = {j:yb, H:e.length, G:b, s:[],};
  return e.push(da = b), c(b), da = g, b;
}, S = (c, b = yb, g) => da.s.push(...F(c, b, g)), zb = c => {
  const b = da, g = h.length, l = {l:0, g:0, i:0, u:b, h() {
    const n = l.l, k = l.g, t = l.i, v = b.j.multiply(c);
    l.J = v;
    3 > Ya(v.transformPoint()) && Ga[5] && (0.3 > k || 0.7 < k) && (l.l = n ? 0 : 1, g && 1 / 0 > Da && (Da = a + 1, h4.innerHTML = "* click *"), na = g, xb());
    l.g = u(k, n, 1 - Math.exp(-4 * d));
    l.i = u(t, n, 1 - Math.exp(-1 * d));
    l.j = v.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(l);
  S(I(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  S(I(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  S(I(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
}, Bb = (c, ...b) => {
  let g = -1, l = 0, n = 0, k = 0, t = 0, v = 0, x = 1, y = 3;
  const B = {l:0, h() {
    if (!B.l) {
      let ea, Ia, wa, fa, G, D, E, C = 1, K = 1 / 0;
      for (const M of f) {
        var {x:R, z:O, w:V} = M;
        O = (R = Math.hypot(r - R, w - O)) - V;
        E ||= R < V;
        0 < O && K > O && (K = O, q = M);
        C = Ab(C, R / V);
      }
      E || ({x:ea, z:Ia, w:wa} = q, fa = r - ea, G = w - Ia, D = Math.hypot(fa, G), L = Math.atan2(-G, fa), x && (n = (Math.random() - 0.5) * Math.PI / 2, y = Sa(y / (1 + Math.random()))), L += n, g = -Math.cos(L), l = Math.sin(L), 0.1 < D && (D = Ab(D, wa) / (D || 1), r = fa * D + ea, w = G * D + Ia));
      x = E;
      y = u(y, 6 * (1 - C) + 3, 1 - Math.exp(-(C + 3) * d));
      L = r = u(r, r + g, 1 - Math.exp(-y * d));
      z = u(z, L, 1 - Math.exp(-y * d));
      L = w = u(w, w + l, 1 - Math.exp(-y * d));
      J = u(J, L, 1 - Math.exp(-y * d));
      k = Xa(k, Math.atan2(z - t, J - v) / Na - 180, 1 - Math.exp(-3 * d),);
      t = z;
      v = J;
      var L = (B.j = P.j.multiply(c.translate(z, 0, J).rotateSelf(0, k, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.6 > Ya(L) && (B.l = 1, L = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ka] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      Da && (Da = a + (ka && 12 > ka ? 5 : 7), h4.innerHTML = L), wb(), xb());
    }
    B.l && (B.j = e[2].j.translate(A % 4 * 1.2 - 1.7 + Math.sin(a + A) / 7, -2, 1.7 * (A / 4 | 0) - 5.5 + p(A % 4 - 2) + Math.cos(a / 1.5 + A) / 6,));
  },}, P = da, A = Fa.length, f = b.map(([R, O, V]) => ({x:R, z:O, w:V,}));
  let q = f[0], {x:r, z:w} = q, z = r, J = w;
  Fa.push(B);
}, Eb = (c, b, g, l) => {
  let n = 0, k = 0, t = 0, v = 1 / 0, x = -1 / 0, y = 1 / 0, B = -1 / 0, P = 1 / 0, A = -1 / 0;
  const f = 1.1 * (g - b), q = (new DOMMatrix(eb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
  return b = m(8, r => (r = q.transformPoint({x:4 & r ? 1 : -1, y:2 & r ? 1 : -1, z:1 & r ? 1 : -1,}), n -= r.x = (f * r.x | 0) / f / r.w, k -= r.y = (f * r.y | 0) / f / r.w, t -= r.z = (f * r.z | 0) / f / r.w, r)), g = Cb(298, 139).translateSelf(n / 8, k / 8, t / 8), gb(b, g).map(({x:r, y:w, z}) => {
    v = Ab(v, r);
    x = Db(x, r);
    y = Ab(y, w);
    B = Db(B, w);
    P = Ab(P, z);
    A = Db(A, z);
  }), P *= 0 > P ? l : 1 / l, A *= 0 < A ? l : 1 / l, g.preMultiplySelf(Y(2 / (x - v), 2 / (B - y), 2 / (P - A)).translateSelf((x + v) / -2, (B + y) / -2, (P + A) / 2,),);
}, Hb = () => {
  let c, b, g, l, n, k, t, v, x, y, B, P, A = !0;
  const f = () => {
    aa || !A ? Fb.disconnect() : Fb.connect(Gb.destination);
    b4.innerHTML = "Music: " + A;
  }, q = (r = !1) => {
    if (aa !== r) {
      aa = r;
      try {
        r ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : Fb.start();
      } catch {
      }
      ha = 0;
      document.body.className = r ? "l m" : "l";
      f();
      wb();
    }
  };
  oncontextmenu = () => !1;
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.I = "", location.reload());
  };
  b1.onclick = () => {
    document.body.requestFullscreen();
    q();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    q();
    ha = 1;
  };
  b4.onclick = () => {
    A = !A;
    f();
  };
  b5.onclick = () => q(!0);
  onclick = r => {
    P = 1;
    aa || (r.target === hC && (Ga[5] = !0), ha && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:r, target:w, type:z, repeat:J}) => {
    J || ((J = !!z[5] && w === document.body) && ("Escape" === r || "Enter" === r && aa) ? aa && !P || q(!aa) : 5 === (z = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[r]) ? J && (Ga[z] = 1) : Ga[z] = J);
  };
  onmousemove = ({movementX:r, movementY:w}) => {
    ha && (r || w) && (Ma += 0.1 * r, La += 0.1 * w);
  };
  hC.ontouchstart = r => {
    if (!aa) {
      for (let {pageX:w, pageY:z, identifier:J} of r.changedTouches) {
        ha && w > hC.clientWidth / 2 ? void 0 === v && (x = 0, k = w, t = z, v = J, y = Ma, B = La) : void 0 === l && (n = 0, b = w, g = z, l = J);
      }
      c = ma;
    }
  };
  hC.ontouchmove = r => {
    if (!aa) {
      for (let {pageX:V, pageY:L, identifier:ea} of r.changedTouches) {
        var w, z, J, R, O;
        v === ea && (Ma = y + (V - k) / 2.3, La = B + (L - t) / 2.3, x = 1);
        l === ea && (ea = (b - V) / 20, w = (g - L) / 20, z = p(ea), J = p(w), R = Math.atan2(w, ea), O = Sa(Math.hypot(w, ea) - 0.5), xa = 0.2 < z ? Math.cos(R) * O : 0, ya = 0.2 < J ? Math.sin(R) * O : 0, (xa || ya) && (n = 1), 2 < z && (b = V + 20 * Math.sign(ea)), 2 < J && (g = L + 20 * Math.sign(w)));
      }
    }
  };
  hC.ontouchend = r => {
    let w;
    document.activeElement === document.body && r.preventDefault();
    for (const z of r.changedTouches) {
      z.identifier === v ? (v = void 0, x || (w = 1), x = 0) : z.identifier === l ? (l = void 0, ya = xa = 0, n || (w = 1), n = 0) : w = 1;
    }
    w && r.target === hC && c && 0.02 < (r = ma - c) && 0.7 > r && (Ga[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Ga.length = xa = ya = 0;
    l = v = void 0;
    document.hidden && q(!0);
  })();
  q(!0);
}, Ib = () => {
  let c, b, g, l, n, k, t, v, x, y, B, P, A, f, q, r, w, z, J = 1, R = 2, O = 2;
  const V = () => R ? h[na].u.j : g && 1 === e[g].G && e[g].j || yb, L = (G, D, E, C) => u(G, D, J || (Sa(p(D - G) ** 0.9 - E) + 1 / 7) * (1 - Math.exp(-(1.5 * C) * d))), ea = () => {
    let G = 0, D = 0, E = 0, C = 0;
    l = 0;
    wa.fill(0);
    for (let M = 0; 31 > M; ++M) {
      let T = 0;
      const Ca = 512 * M;
      for (let ba = 0; 128 > ba; ba++) {
        var K = Ca + 4 * ba;
        let la = (fa[K] + fa[1 + K]) / 255;
        K = fa[2 + K];
        14 < ba && 114 > ba && (T += la);
        K && la && (la = wa[K] + 1, wa[K] = la, G > la || (G = la, D = K));
      }
      3 > T && 5 < M && (E += M / 32);
      3 < T && (7 < M && (C += M / 15), l = 1);
    }
    D && (l = 1);
    c = D || b;
    b = D;
    O = u(O, l ? 6.5 : -20 > Ra.y ? 11 : 8, 1 - Math.exp(-4 * d));
    Ra.y += C / 41 - (l || O) * E / 41 * O * d;
  }, Ia = () => {
    y = x = 0;
    for (let G = 32; 128 > G; G += 2) {
      let D = 0, E = 0, C = 0, K = 0;
      const M = 512 * G;
      for (let T = 1 & G; 128 > T; T += 2) {
        const Ca = M + 4 * T;
        let ba = M + 4 * (127 - T);
        const la = fa[Ca] / 255, pa = fa[1 + ba] / 255, cb = 1 - p(T / 63.5 - 1);
        10 < T && 118 > T && (D = Db(Db(la * cb, la * fa[ba] / 255), D), E = Db(Db(pa * cb, pa * fa[1 + Ca] / 255), E));
        (54 > T || 74 < T) && 1e-3 < (ba = (1 - cb) * Db(la, pa) / 3) && (64 > T && ba > C ? C = ba : 64 < T && ba > K && (K = ba));
      }
      p(K - C) > p(x) && (x = K - C);
      p(E - D) > p(y) && (y = E - D);
    }
  }, wa = new Int32Array(256), fa = new Uint8Array(65536);
  ja = () => {
    var G = V(), {x:D, y:E, z:C} = 1 < R ? h[na].J.transformPoint({x:0, y:na || 0.9 < ta ? 15 : 1, z:-2.4,}) : ((D = (C = G).inverse()).m41 = D.m42 = D.m43 = 0, E = D.transformPoint({x, z:y, w:0,}), Ra.x += E.x, Ra.z += E.z, C.transformPoint(Ra));
    let K = D - Ha.x, M = C - Ha.z;
    if (R = R && (l && c ? 0 : 1), Ha.x = D, Ha.y = E, Ha.z = C, R || c !== g) {
      g = c;
      const T = (G = V()).inverse().transformPoint(Ha);
      Ra.x = T.x;
      Ra.y = T.y;
      Ra.z = T.z;
    }
    c && (B = K / d, P = M / d);
    v = u(v, va * (27 < c && 32 > c), 1 - Math.exp(-2 * d));
    E < (-25 > D || 109 > C ? -25 : -9) && (B = P = A = 0, R = 2);
    1 === c && (h[9].l = -15 > D && 0 > C ? 1 : 0);
    f = u(u(f, E, 1 - Math.exp(-2 * d)), E, R || 8 * p(f - E));
    r = L(r, f, 2, 1);
    q = L(q, D, 0.5, 1);
    w = L(w, C, 0.5, 1);
    ha ? (G = R + (1 - Math.exp(-18 * d)), za = u(za, D, G), Aa = u(Aa, f + 1.5, G), Ba = u(Ba, C, G), Ma = Wa(Ma)) : (Aa = L(Aa, Db(r + Sa((-60 - C) / 8, 0, 20) + 13 + 9 * v, 6,), 4, 2,), Ba = L(Ba, w + -18 + 5 * v, 1, 2 + v,), za = L(za, q, 1, 2 + v,), K = Ab(4, -p(w - Ba)), M = q - za, Ma = Xa(Ma, 90 - Wa(Math.atan2(K, M) / Na), J + (1 - Math.exp(-6 * d)),), La = Xa(La, 90 - Math.atan2(Math.hypot(K, M), Aa - r) / Na, J + (1 - Math.exp(-6 * d)),));
    La = Sa(La, -87, 87);
    J = 0;
    e[37].j = H(D, f, C).rotateSelf(0, k,);
    for (G = 0; 2 > G; ++G) {
      e[38 + G].j = e[37].j.translate(0, t * Sa(0.45 * Math.sin(9.1 * a + Math.PI * (G - 1) - Math.PI / 2)),).rotateSelf(t * Math.sin(9.1 * a + Math.PI * (G - 1)) * 0.25 / Na, 0);
    }
  };
  ia = () => {
    var G = ya + (Ga[1] ? 1 : 0) - (Ga[3] ? 1 : 0), D = xa + (Ga[0] ? 1 : 0) - (Ga[2] ? 1 : 0);
    if (C = navigator.getGamepads()[0]) {
      const K = C.buttons, M = C.axes;
      C = (E = T => K[T]?.pressed || 0 < K[T]?.value ? 1 : 0)(3) || E(2) || E(1) || E(0);
      G += E(12) - E(13) - Ta(M[1], 0.2);
      D += E(14) - E(15) - Ta(M[0], 0.2);
      ha && (La += d * Ta(M[3], 0.3) * 80, Ma += d * Ta(M[2], 0.3) * 80);
      C && !z && (Ga[5] = 1);
      z = C;
    }
    var E = Math.atan2(G, D), C = Ta(Sa(Math.hypot(G, D)), 0.05);
    G = (Z.fa7(), Z.r9r(0, 0, 128, 128, 6408, 5121, fa), Z.iay(36008, [36064, 36096,]), Z.iay(36009, [36064, 36096,]), NO_INLINE(Ia)(), NO_INLINE(ea)(), Sa(1 - 5 * Db(p(x), p(y))));
    D = ha ? Ma * Na : Math.PI;
    t = u(t, C, 1 - Math.exp(-10 * d));
    C && (n = 90 - E / Na);
    k = Xa(k, n, 8 * d);
    A = u(A, l * G * Sa(2 * C) * 7, 1 - Math.exp(-(l ? 0.1 < G ? 10 : 5 + 2 * C : 1) * d));
    B = u(B, 0, 1 - Math.exp(-(l ? 8 : 4) * d));
    x += d * ((c ? 0 : G * B) - Math.cos(E + D) * C * A);
    P = u(P, 0, 1 - Math.exp(-(l ? 8 : 4) * d));
    y += d * ((c ? 0 : G * P) - Math.sin(E + D) * C * A);
    NO_INLINE(ja)();
    Ga[5] = 0;
  };
}, Jb = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b), Ob = (c, b) => {
  const g = {}, l = Z.c1h();
  return Z.abz(l, c), Z.abz(l, Jb(b, 35632)), Z.l8l(l), n => n ? g[n] || (g[n] = Z.gan(l, n)) : Z.u7y(l);
}, Qb = (c, b, g, l) => {
  if (aa) {
    g = Cb(0, 40 * Math.sin(ma) - 70);
    for (var n of [37, 38, 39,]) {
      bb(g, Pb, n - 1);
    }
    Z.uae(c, !1, Pb);
    Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
  } else {
    for (n = 0; e.length > n; ++n) {
      e[n].G && bb(e[n].j, Pb, n - 1);
    }
    Z.uae(c, !1, Pb);
    Z.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6);
    for (b = 0; 13 > b; ++b) {
      bb(Fa[b].j, Pb, b);
    }
    for (b = 0; h.length > b; ++b) {
      bb(h[b].j, Pb, b + 13), l || (Pb[16 * (b + 13) + 15] = 1 - h[b].g);
    }
    Z.uae(c, !1, Pb);
    Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,);
    Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Rb = c => {
  h4.innerHTML += ".";
  setTimeout(c);
}, Sb = c => Math.sin(c * Math.PI * 2), Tb = c => 0.5 > c % 1 ? 1 : -1, Ub = c => c % 1 * 2 - 1, Vb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c, $b = c => {
  let b = 0;
  const g = () => {
    const k = Gb.createBuffer(2, 5362944, 44100);
    for (let t = 0; 2 > t; t++) {
      for (let v = t, x = k.getChannelData(t); 10725888 > v; v += 2) {
        x[v >> 1] = n[v] / 65536;
      }
    }
    Fb.buffer = k;
    Fb.loop = !0;
    Rb(c);
  }, l = () => {
    let k = 0;
    const t = E => {
      let C, K, M, T, Ca = 0, ba = 0;
      const la = [], pa = new Int32Array(768 * E), cb = 2 ** (R - 9) / E, Wb = Math.PI * 2 ** (Ia - 8) / E, ub = fa * E & -2;
      for (let ob = 0; 11 >= ob; ++ob) {
        for (let pb = 0, Kb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ob], Lb = (32 * ob + pb) * E; 32 > pb; ++pb) {
          for (let Ea = 0; 4 > Ea; ++Ea) {
            if (K = 0, Kb && (K = v[Kb - 1].charCodeAt(pb + 32 * Ea) - 40, K += 0 < K ? 106 : 0), K) {
              var Ua;
              if (!(Ua = la[K])) {
                Ua = K;
                let W = void 0, X = void 0;
                var Mb = K;
                let db = 0, Xb = 0;
                const Yb = 2 > b ? Ub : Sb, Zb = 2 > b ? 1 > b ? Tb : Vb : Sb, Nb = new Int32Array(r + w + D);
                for (let Ja = 0, vb = 0; r + w + D > Ja; ++Ja, ++vb) {
                  let Ka = 1;
                  r > Ja ? Ka = Ja / r : r + w > Ja || (Ka = (1 - (Ka = (Ja - r - w) / D)) * 3 ** (J / -16 * Ka));
                  0 > vb || (X = 396e-5 * 2 ** ((Mb + y - 256) / 12), W = 396e-5 * 2 ** ((Mb + A - 256) / 12) * (b ? 1 : 1.0072), vb -= 4 * E);
                  Nb[Ja] = 80 * (Yb(db += X * Ka ** (B / 32)) * x + Zb(Xb += W * Ka ** (f / 32)) * P + (q ? (2 * Math.random() - 1) * q : 0)) * Ka;
                }
                Ua = la[Ua] = Nb;
              }
              for (let W = 0, X = 2 * Lb; Ua.length > W; ++W, X += 2) {
                pa[X] += Ua[W];
              }
            }
          }
          for (let Ea, W, X, db = 0; E > db; ++db) {
            X = 2 * (Lb + db), Ea = 0, ((W = pa[X]) || T) && (M = 308e-5 * O, 1 !== b && 4 !== b || (M *= Math.sin(cb * X * Math.PI * 2) * G / 512 + 0.5), M = 1.5 * Math.sin(M), Ca += M * ba, C = (1 - V / 255) * (W - ba) - Ca, ba += M * C, W = 4 === b ? ba : 3 === b ? C : Ca, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= L / 32, T = 1e-5 < W * W, C = Math.sin(Wb * X) * ea / 512 + 0.5, Ea = W * (1 - C), W *= C), X < ub || (Ea += pa[1 + X - ub] * wa / 
            255, W += pa[X - ub] * wa / 255), n[k + X] += pa[X] = Ea, ++X, n[k + X] += pa[X] = W;
          }
        }
      }
      k += 768 * E;
    }, v = Pa[b], [x, y, B, P, A, f, q, r, w, z, J, R, O, V, L, ea, Ia, wa, fa, G] = Qa[b], D = 4 * z ** 2;
    t(5513);
    t(4562);
    t(3891);
    Rb(5 > ++b ? l : g);
  }, n = new Int32Array(10725888);
  Rb(l);
}, Gb = new AudioContext(), yb = new DOMMatrix(), ab = new Float32Array(16), Pb = new Float32Array(624), ac = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Ab = NO_INLINE((c, b) => c < b ? c : b), Db = NO_INLINE((c, b) => b < c ? c : b), p = NO_INLINE(c => 0 > c ? -c : c), H = NO_INLINE((c, b, g) => yb.translate(c, b, g)), Cb = NO_INLINE((c, b, g) => yb.rotate(c, b, g)), Y = NO_INLINE((c, b, g) => yb.scale(c, b, g)), U = NO_INLINE((c, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c), Fb = Gb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const c in Z) {
  Z[c[0] + [...c,].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
Rb(() => {
  let c = 0;
  const b = () => {
    if (2 == ++c) {
      const l = q => {
        let r;
        Z.f1s();
        requestAnimationFrame(l);
        w = (q - (ca || q)) / 1e3;
        aa ? (d = 0, Ga[5] = 0) : d = Ab(0.066, w);
        a += d;
        ma += w;
        ca = q;
        0 < d && (tb(), ia());
        0 < d && ({x:w, y:q, z:r} = Ha, x(), Z.b6o(36160, A), Z.v5y(0, 0, 128, 128), Z.c4s(16640), Z.cbf(!0, !1, !0, !1), Z.uae(x("b"), !1, bb(Cb(0, 180).invertSelf().translateSelf(-w, -q, 0.3 - r)),), Qb(x("c"), 0, 41, 0), Z.c4s(256), Z.cbf(!1, !0, !0, !1), Z.uae(x("b"), !1, bb(H(-w, -q, -r - 0.3))), Qb(x("c"), 0, 41, 0), Z.f1s());
        var w = aa ? Cb(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : Cb(-La, -Ma).invertSelf().translateSelf(-za, -Aa, -Ba,);
        t();
        Z.b6o(36160, P);
        Z.v5y(0, 0, 2048, 2048);
        B[0](Eb(w, 0.3, 55, 10));
        B[1](Eb(w, 55, 186, 11));
        y();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        B[0]();
        B[1]();
        Z.uae(y("a"), !1, eb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
        Z.uae(y("b"), !1, bb(w));
        Z.ubu(y("k"), za, Aa, Ba);
        Qb(y("c"), !ha, 42, 0);
        v();
        Z.ubu(v("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ma);
        Z.ubu(v("k"), za, Aa, Ba);
        Z.uae(v("b"), !1, bb(w.inverse()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, A);
        Z.f1s();
      }, n = g;
      let k = Jb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const t = Ob(Jb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), v = Ob(Jb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), x = Ob(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), y = Ob(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), B = m(2, q => {
        const r = new Float32Array(16), w = Z.c25();
        return Z.a4v(33984 + q), Z.b9j(3553, w), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), z => {
          z ? (bb(z, r), Z.uae(t("b"), !1, r), Z.fas(36160, 36096, 3553, w, 0), Z.c4s(256), Qb(t("c"), !ha, 42, 1)) : Z.uae(y(q ? "j" : "i"), !1, r);
        };
      }), P = Z.c5w(), A = (k = Z.c3z(), Z.c5w()), f = Z.c25();
      x();
      Z.uae(x("a"), !1, eb(1.4, 0.59, 1e-4, 1));
      y();
      Z.ubh(y("q"), 2);
      Z.ubh(y("h"), 1);
      Z.ubh(y("g"), 0);
      v();
      Z.ubh(v("q"), 2);
      Z.b6o(36160, P);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, A);
      Z.bb1(36161, k);
      Z.r4v(36161, 33189, 128, 128);
      Z.f8w(36160, 36096, 36161, k);
      Z.a4v(33986);
      Z.b9j(3553, f);
      Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Z.fas(36160, 36064, 3553, f, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
      Z.gbn(3553);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 1);
      tb();
      NO_INLINE(Ib)();
      NO_INLINE(Hb)();
      requestAnimationFrame(l);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = ac;
  NO_INLINE($b)(() => {
    Rb(() => {
      let k, t = 0;
      const v = [], x = [], y = [], B = [], P = w => {
        let {x:z, y:J, z:R} = k[w], O = (r[0] = z, r[1] = J, r[2] = R, w = "" + (k.D ? q : A), f.get(w));
        return void 0 !== O ? (z = 3 * O, B[z] = (B[z++] + A[5]) / 2, B[z] = (B[z++] + A[6]) / 2, B[z] = (B[z] + A[7]) / 2) : (f.set(w, O = f.size), x.push(z, J, R, r[3]), y.push(A[4]), B.push(A[5], A[6], A[7])), O;
      }, A = new Int32Array(8), f = new Map(), q = new Int32Array(A.buffer, 0, 5), r = new Float32Array(A.buffer);
      for (const w of e) {
        for (k of (r[3] = 40 === w.H ? -14 : w.G && w.H, w.s)) {
          const {x:z, y:J, z:R} = $a(k);
          A[4] = 0 | k.A;
          A[5] = 32767 * z;
          A[6] = 32767 * J;
          A[7] = 32767 * R;
          for (let O = 2, V = P(0), L = P(1); k.length > O; ++O) {
            v.push(V, L, L = P(O));
          }
        }
        w.s = null;
        w.v = t;
        w.F = t = v.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(y), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Rb(b);
      try {
        const [w, z, J, R, O] = JSON.parse(localStorage.I,);
        h.map((V, L) => V.g = V.i = V.l = L ? 0 | w[L] : 0);
        Fa.map((V, L) => V.l = 0 | z[L]);
        na = J;
        a = R;
        ua = O;
      } catch {
      }
      ta = Sa(na);
    });
    const l = m(11, k => H(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), n = m(10, k => ib(gb(hb(18), l[k]).reverse(), gb(hb(18), l[k + 1]), 1,)).flat();
    Q(() => S([Oa.slice(1),], H(-2).scale3d(3).rotate(90, 0)), 0);
    Q(() => {
      const k = (f, q, r) => Q(w => {
        w.h = () => H(x() * Math.sin(3 * f + a * f) * q);
        Oa.map(({x:z, z:J}) => {
          S(I(11, 1), H(4 * z, 4, r + 4 * J).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6),);
          S(I(), H(4 * z, 7, r + 4 * J).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3),);
        });
        S(N(F(I(), H(0, 0, r).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(z => F(I(), H(5 * z, 0.2, r).rotate(-30 * z).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3),)),),);
        S(I(), H(0, -3, r).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
      }), t = (f, q, r) => H(f + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, r).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), v = f => N(F(I(), H(0, -f / 2).scale(6, f - 1, 2.2)), F(I(), H(0, -f / 2 - 6).scale(4, f - 3, 4)), F(I(32, 1), H(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), x = () => Ab(h[2].i, 1 - h[4].i), y = N(F(I(20, 1, 1.15, 1), H(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7),), F(I(20, 1, 1.3, 1), H(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2),), 
      F(I(), H(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),), B = m(7, f => F(I(6, 1), H(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38),)).flat(), P = (Q(f => {
        f.h = () => t(-12, 4.2, 40 * ta - 66);
        S(y);
        zb(H(0, -3, 4));
      }), zb(H(-5.4, 1.5, -19).rotate(0, -90)), Bb(H(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Bb(H(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...hb(18).map(({x:f, z:q}) => [7 * f, 10 * q, 4.5 - 2 * p(f),]),), S(I(), H(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2)), Oa.map(({x:f, z:q}) => S(I(6), H(3 * f, 3, 15 * q).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4))), [-23, 22,].map(f => S(I(), H(0, 0, f).scale(3, 1, 8), U(0.9, 0.9, 0.9, 0.2))), [-15, 15,].map((f, q) => {
        S(I(), H(0, 6.3, f).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
        S(I(), H(0, 1, f).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
        Q(r => {
          r.h = () => H(0, 0, f).scale(1, Sa(1.22 - h[q + 1].g), 1);
          S(B);
        });
      }), m(5, f => m(2, q => S(n, H(18.5 * (q - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2), U(1, 1, 0.8, 0.2),))), S(I(), H(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)), S(I(), H(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2),), S(I(5), H(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4),), S(I(), Cb(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 0.2, 0.2, 0.5),), S(N(sb(F(I(6, 0, 0, 0.3), H(8, 
      -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2),), F(I(6), H(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5)), F(I(6, 0, 0, 0.3), H(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2),),), F(I(5), Y(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)), F(I(5, 0, 1.5), H(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2),), F(I(), Cb(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5),), F(I(6), H(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5),),),), Q(f => {
        f.h = () => H(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        S(I(5), H(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
        zb(H(0, 1.2));
      }), zb(H(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), Q(f => {
        f.h = () => H(x() * Math.sin(a / 1.5 + 2) * 12);
        S(N(sb(F(I(), Y(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)), F(I(6), Y(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)), F(I(), H(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5),), F(I(16, 1, 0, 4), Y(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2),),), F(I(), Y(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),), H(0, 0, 45),);
        Bb(H(0, 2.8, 45), [0, 0, 4.5,]);
      }), S(I(), H(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2)), Q(f => {
        f.h = () => H(9.8 * (1 - x()));
        S(I(3), H(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2));
        S(I(8), H(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2));
        S(I(), H(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
        S(I(), H(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
        zb(H(-23, -0.5, 66.5));
      }), Q(f => {
        f.h = () => H(0, Sa(1 - 5 * x()) * Va(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        S(I(), H(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2));
        S(N(F(I(), Y(3, 1.4, 2.7)), F(I(), Y(1.2, 8, 1.2)),), H(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2),);
      }), Q(f => {
        f.h = () => H(0, 0, Sa(1 - 5 * x()) * Va(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        S(N(F(I(), H(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), F(I(), H(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2),),),);
        S(I(), H(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
      }), Q(f => {
        f.h = () => H(0, -6.5 * h[4].i);
        S(I(6), H(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4),);
      }), zb(H(-55, -1.1, 46).rotate(0, 90)), S(I(6), H(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)), S(I(7), H(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)), [...F(I(), H(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2)), ...N(F(I(6), Cb(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)), F(I(4, 0, 0.01), H(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3),), F(I(6), Cb(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => F(I(5), H(f, 2.5).rotate(90, 0, 36).scale(1.8, 
      10, 1.8), U(0.3, 0.6, 0.6, 0.3),)),),]), A = (S(P, H(-53, 0, 55)), Q(f => {
        f.h = () => H(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ra, 0,);
        S(P);
      }, 2), S(I(), H(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2),), S(I(3, 0, -0.5), H(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2),), S(N(sb(F(I(), H(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2),), F(I(), H(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2),), F(I(), H(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2),), F(I(), H(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2),), F(I(6), 
      H(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3),), F(I(), H(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2),), F(I(), H(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2),),), F(I(8), H(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4),), F(I(8), H(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5),), F(I(8), H(-100, -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5),),),), Bb(H(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), Bb(H(-89, 0.2, 80), [0, 0, 6,]), S(N(F(I(), H(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4)), F(I(), H(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4),), F(I(20, 1), H(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4),),),), Q(f => {
        f.h = () => H(-99.7, -1.9, 63.5).scale(1, Sa(1.1 - h[6].g), 1);
        S(B);
      }), Oa.map(({x:f, z:q}) => {
        S(I(6), H(7 * f - 100, -3, 7 * q + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(r => S(I(6), H(7 * f - 100, r, 7 * q + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8),));
      }), m(7, f => {
        S(I((23 * f + 1) % 5 + 5, 0, 0.55), H(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), U(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), S(I(), H(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)), S(I(4), H(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)), S(I(12, 1), H(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1)), zb(H(-86, -7.5, 31)), Q(f => {
        f.h = () => H(0, 3.5 * (1 - Db(h[6].g, h[7].g)) + Va(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24,].map(q => S(I(), H(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2),));
      }), Q(f => {
        f.h = () => H(0, Va(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Va(h[7].i, h[6].i),);
        [6, 18,].map(q => S(I(), H(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2),));
      }), S(N(sb(F(I(5), H(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3),), F(I(5), Y(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)), F(I(), Y(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),), F(I(5), Y(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),), H(-38.9, -11.3, 17),), zb(H(-38.9, -9.6, 10)), Q(f => {
        f.h = () => H(0, -7.3 * h[7].i);
        S(N(sb(F(I(5), H(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5),), F(I(5), H(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5),), F(I(5), H(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5),),), F(I(5), Y(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)), F(I(5), H(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5),),), H(-38.9, -11.3, 17),);
        Bb(H(-39.1, -0.6, 17).rotate(11), ...hb(15).map(({x:q, z:r}) => [3 * q, 3 * r, 1.2,]),);
      }), Oa.map(({x:f, z:q}) => {
        S(I(14, 1), H(9 * f - 38.9, -7.3, 11 * q + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(r => S(I(17, 1), H(9 * f - 38.9, r - 11.3, 11 * q + 17).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3),));
      }), S(N(sb(F(I(6), H(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3),), F(I(), H(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3),),), ...m(6, f => m(6, q => F(I(6), H(4.6 * q - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2), U(0.7, 0.7, 0.7, 0.3),))).flat(),), H(-38.9, -11.3, 17),), Bb(H(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), S(I(5), H(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), U(0.8, 0.1, 0.25, 0.4),), zb(H(-84, -0.5, 85).rotate(0, 
      45)), Q(f => {
        f.h = () => t(-123, 1.4, 55 + -65 * ua);
        S(y);
        zb(H(0, -3, -4).rotate(0, 180));
      }), N(F(I(), H(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3),), F(I(3), H(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => F(I(), H(f, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3),)),));
      Q(f => {
        f.h = () => H(0, -2, Va(h[10].g, h[11].g) * p(Math.sin(1.1 * a)) * -8.5 + 10);
        m(2, q => S(A, H(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      Q(f => {
        f.h = () => H(0, -2, Va(h[10].g, h[11].g) * p(Math.sin(2.1 * a)) * -8.5 + 10);
        m(2, q => S(A, H(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      Q(f => {
        f.h = () => H(0, -2, -8.5 * Db((1 - h[10].g) * (1 - Va(h[10].g, h[11].g)), Va(h[10].g, h[11].g) * p(Math.sin(1.5 * a)),) + 10,);
        m(3, q => S(A, H(9 * q - 106, 1.7, -12)));
      });
      S(N(sb(F(I(), H(26.5, -1.6, 10).scale(20, 2.08, 3)), F(I(), H(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...m(4, f => F(I(), H(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...m(3, f => F(I(), H(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), H(-123, 0, -12), U(0.5, 0.5, 0.6, 0.2),);
      zb(H(-116, -1.4, -18).rotate(0, 180));
      S(I(), H(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2),);
      S(I(6), H(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2));
      S(I(), H(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3));
      S(I(8), H(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      S(I(8), H(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      S(I(), H(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3));
      m(3, f => {
        S(v(16), H(12 * f - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        S(v(16), H(-77, -9, -12 * f - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3),);
      });
      S(N(F(I(12), H(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2),), F(I(), H(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2),), F(I(), H(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2),), F(I(12), H(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2),),),);
      S(I(), H(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3),);
      S(I(9), H(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3));
      S(N(F(I(), H(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1),), F(I(9), H(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2),),),);
      zb(H(-98, -4.4, -40).rotate(0, 90));
      Bb(H(-115, 0.2, -12), [0, 0, 3.5,]);
      Bb(H(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      S(N(sb(F(I(6, 0, 0, 0.6), H(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2),), F(I(), H(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2),),), F(I(5), H(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2),),),);
      m(4, f => Q(q => {
        q.h = () => {
          const r = Va(h[8].i, h[12].i);
          return H((2 < f ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + Db(r, 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        S(I(6), H(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), U(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Q(f => {
        f.h = () => {
          const q = Va(h[8].i, h[12].i);
          return H(2.5 * (1 - q) - 139.7, -3 * (1 - h[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * q + 3), 0);
        };
        S(N(F(I(10), Y(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), F(I(10), Y(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5)),),);
        S(I(15, 1), H(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3),);
        S(I(10), H(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3));
        S(I(5), H(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5));
        zb(H(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(q => S(n, Cb(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2),));
        Bb(H(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        S(I(12, 1), H(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(q => S(I(15, 1), H(-7.5 * f - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4),));
        S(n, H(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), U(1, 1, 0.8),);
        S(N(F(I(), H(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4),), F(I(), Y(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)), F(I(28, 1), H(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5),), F(I(5), H(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5),), F(I(5), H(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5),),), H(f - 100, 0.7, 97),);
      });
      Q(f => {
        f.h = () => H(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        S(B);
      });
      S(N(F(I(), H(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1),), F(I(45, 1), H(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1),),),);
      Q(f => {
        f.h = () => H(-81, 0.6, 106).rotate(0, 40 + oa);
        S(N(F(I(45, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)), F(I(), H(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2),),),);
        S(I(8), H(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1));
        S(I(5), H(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        Bb(H(0, 3), ...hb(14).map(({x:q, z:r}) => [5.6 * q, 5.6 * r, 2,]),);
      });
      Q(f => {
        f.h = () => H(-65.8, 0.8, 106).rotate(0, qa);
        [-1, 1,].map(q => S(n, Cb(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), U(1, 1, 0.8),));
        S(N(F(I(28, 1), H(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), F(I(), Y(9, 5, 2), U(0.3, 0, 0, 0.3)),),);
        S(F(I(28, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(F(I(5), H(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      Q(f => {
        f.h = () => H(-50.7, 0.8, 106).rotate(0, 180 - qa);
        S(N(F(I(28, 1), H(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), F(I(), H(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), F(I(), H(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),),);
        S(F(I(28, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(F(I(5), H(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      Q(f => {
        f.h = () => H(-50.7, 0.8, 91).rotate(0, 270 + qa);
        S(N(F(I(28, 1), H(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), F(I(), H(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), F(I(), H(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3)),),);
        S(F(I(28, 1), Y(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)));
        S(F(I(5), H(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2)),);
      });
      S(I(), H(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      S(I(), H(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      S(I(), H(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      S(I(), H(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      zb(H(-34, 2.7, 96).rotate(-12, 0));
      S(I(5), H(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6),);
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4),].map((f, q) => Q(r => {
        r.h = () => H(0, (1 - h[13].i) * (1 - h[14].i) * (q ? 0 : 3) + Va(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4,);
        S(I(), H(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), f);
        2 === q && S(I(), H(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3));
        1 === q && S(I(), H(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => S(n, H(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), U(1, 1, 0.8),));
      m(3, f => S(v(24.7 - 0.7 * (1 & f)), H(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),),);
      S(N(F(I(6, 0, 0, 0.3), H(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2),), F(I(5), H(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5)),),);
      zb(H(0, 1.7, 82).rotate(0, 180));
      S(I(5), H(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4),);
      S(I(6), H(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3),);
      S(I(), H(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      S(I(7), H(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      S(N(sb(F(I(), H(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4),), F(I(), H(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4),),), F(I(5), H(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4),),),);
      Q(f => {
        f.h = () => {
          const q = Math.sin(a);
          return H(-2 * q).rotate(25 * q);
        };
        S(I(3), H(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(q => {
          S(I(6), H(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4),);
          S(I(), H(0, 6.2, q + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Q(f => {
        f.h = () => {
          const q = Va(Va((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return H(0, 16 * q, 8.5 * Sa(2 * q - 1) + 95);
        };
        S(I(5), Y(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        S(I(5), Y(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        zb(H(0, 1.5, -1).rotate(0, 180));
      });
      Bb(H(0, 3, 95), ...hb(9).map(({x:f, z:q}) => [9 * f, 9 * q, 4,]),);
      Bb(H(0, 19, 134), [0, 0, 3.5,]);
    });
    Q(() => {
      [0, 180,].map(t => S(n, Cb(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8),));
      S(jb(20), H(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      const k = F(N(I(15, 1), F(I(), H(0, 0, 1).scale(2, 2, 0.5)),), Cb(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3),);
      [-1, 1,].map(t => S(k, H(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      S(I(), H(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      S(jb(20), Y(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
    });
    [-1, 1,].map(k => Q(() => {
      S(I(10, 1), H(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
    }));
    Q(() => {
      S(I(6, 1), Y(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      S(I(10), H(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      S(I(3), H(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Q(() => {
      S(I(6).slice(0, -1), Y(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Q(() => {
      S(jb(30, 24, (k, t, v) => {
        const x = t / 24, y = k * Math.PI * 2 / 30, B = x ** 0.6 * Math.PI / 2;
        k = x * x * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 === t ? {x:v.D = 0, y:-0.5, z:0,} : {x:Math.cos(y) * Math.sin(B), y:Math.cos(x * Math.PI) - x - k, z:Math.sin(y) * Math.sin(B) + Math.sin(k * Math.PI * 2) / 4,};
      }), Y(0.7, 0.7, 0.7), U(1, 1, 1),);
      [-1, 1,].map(k => S(jb(12), H(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

