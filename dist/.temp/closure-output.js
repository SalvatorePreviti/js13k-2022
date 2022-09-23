let ba = 0, ca = 0, a = 0, da = 0, ea = 0, fa = 0, ha = 0, ja = 0, la = 0, ma = 0, na = 0, oa = 0, e = 0.066, pa = 1, sa, ta, ua, va, wa;
const xa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], f = [], k = [], ya = [], za = [], Ca = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], 
[100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Da = {x:0, y:0, z:0,};
var Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0;
const Ma = Math.PI / 180, m = new DOMMatrix(), Na = new Float32Array(16), Oa = new Float32Array(624), r = (b, c) => Array.from(Array(b), (g, l) => c(l)), Pa = b => 4 < b ? 4 : b, Qa = (b, c) => c < b ? b : c, Ra = b => 0 > b ? -b : b, Sa = (b, c) => (0 > b ? -b : b) > c ? b : 0, Ta = b => 0 > b ? 0 : 1 < b ? 1 : b, Ua = (b, c, g) => b + (c - b) * (0 > g ? 0 : 1 < g ? 1 : g), Va = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)), Wa = b => Math.atan2(Math.sin(b *= 
Ma), Math.cos(b)) / Ma, Xa = (b, c, g) => ((b *= Ma) + (2 * (c = (c * Ma - b) % (2 * Math.PI)) % (2 * Math.PI) - c) * (0 > g ? 0 : 1 < g ? 1 : g)) / Ma, Ya = ({x:b, y:c, z:g}) => Math.hypot(b - Da.x, c - Da.y, g - Da.z), Za = ({x:b, y:c, z:g}, l) => b * l.x + c * l.y + g * l.z, $a = b => {
  let c = 0, g = 0, l = 0, n, h = b.at(-1);
  for (n of b) {
    c += (h.y - n.y) * (h.z + n.z), g += (h.z - n.z) * (h.x + n.x), l += (h.x - n.x) * (h.y + n.y), h = n;
  }
  return n = Math.hypot(c, g, l), c /= n, g /= n, l /= n, {x:c, y:g, z:l, w:c * h.x + g * h.y + l * h.z,};
}, ab = (b, c = Na, g = 0,) => (g *= 16, c[g++] = b.m11, c[g++] = b.m12, c[g++] = b.m13, c[g++] = b.m14, c[g++] = b.m21, c[g++] = b.m22, c[g++] = b.m23, c[g++] = b.m24, c[g++] = b.m31, c[g++] = b.m32, c[g++] = b.m33, c[g++] = b.m34, c[g++] = b.m41, c[g++] = b.m42, c[g++] = b.m43, c[g] = b.m44, c), bb = (b, c, g, l,) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0], cb = (b, c, g) => (b.D = g, b.A = c, b), db = (b, c, g = b.A) => cb(b.map(l => {
  let n, h;
  return {x:l, y:n, z:h} = l, {x:l, y:n, z:h} = c.transformPoint({x:l, y:n, z:h,}), {x:l, y:n, z:h,};
}), g, b.D,), w = (b, c, g) => b.map(l => db(l, c, g)), eb = (b, c = 0) => r(b, g => {
  const l = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:0.01 > (0 > l ? -l : l) ? l : 0 > l ? l - c : l + c,};
}), hb = (b, c, g) => b.map((l, n, {length:h}) => cb([l, c[h - n - 1], c[h - (n + 1) % h - 1], b[(n + 1) % h]], b.A, g,)), H = (b, c, g = 0, l,) => (b = b ? eb(b, l) : xa, l = db(b, m.translate(0, 1).scale3d(0 < g ? g : 1)), b = db(b, m.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...hb(b, l, c), l, b]), ib = (b, c = b, g = (l, n) => (n *= Math.PI / c, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(n), y:Math.cos(n), z:Math.sin(l) * Math.sin(n),})) => {
  const l = [];
  for (let n = 0; b > n; n++) {
    for (let h = 0; c > h; h++) {
      const u = cb([], 0, 1);
      l.push(u);
      u.push(g(n, h, u));
      h && u.push(g((n + 1) % b, h, u));
      c - 1 > h && u.push(g((n + 1) % b, h + 1 % c, u));
      u.push(g(n, h + 1 % c, u));
    }
  }
  return l;
}, jb = (b, c) => {
  var g, l, n, h = c.C;
  for (var u = 0; h.length > u; ++u) {
    if (-0.00008 > (g = Za(b, h[u]) - b.w) ? n = c : 8e-5 < g && (l = c), n && l) {
      l = [];
      n = [];
      h = c.C;
      u = c.B;
      let z = h.at(-1), x = Za(b, z) - b.w;
      for (const B of h) {
        g = Za(b, B) - b.w, 8e-5 > x && n.push(z), -0.00008 < x && l.push(z), (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g) && (x /= g - x, z = {x:z.x + (z.x - B.x) * x, y:z.y + (z.y - B.y) * x, z:z.z + (z.z - B.z) * x,}, l.push(z), n.push(z)), z = B, x = g;
      }
      return {o:2 < l.length && {C:cb(l, h.A, h.D), B:u, u:c,}, m:2 < n.length && {C:cb(n, h.A, h.D), B:u, u:c,},};
    }
  }
  return {o:l, m:n,};
}, kb = (b, c, g = $a(c.C)) => {
  let l, n, h;
  return b ? ({o:l, m:n} = jb(b, c), l || n || b.s.push(c), l && (b.o = kb(b.o, l, g)), n && (b.m = kb(b.m, n, g))) : ({x:l, y:n, z:g, w:h} = g, b = {x:l, y:n, z:g, w:h, s:[c], o:0, m:0,}), b;
}, lb = (b, c, g) => {
  const l = [], n = (h, u) => {
    let {o:z, m:x} = jb(h, u);
    z || x || (0 < g * Za(h, c) ? z = u : x = u);
    z && (h.o ? n(h.o, z) : l.push(z));
    x && h.m && n(h.m, x);
  };
  for (const h of c.s) {
    n(b, h);
  }
  return l;
}, ob = (b, c) => b && (c(b), ob(b.o, c), ob(b.m, c)), pb = b => b.length ? b.reduce((c, g) => kb(c, {C:g, B:0, u:0,}), 0) : b, qb = b => (ob(b, c => {
  const g = c.m;
  c.m = c.o;
  c.o = g;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const l of c.s) {
    l.B = !l.B;
  }
}), b), rb = (...b) => b.reduce((c, g) => {
  const l = [];
  if (c = pb(c), g) {
    g = pb(g);
    ob(c, n => n.s = lb(g, n, 1));
    ob(g, n => l.push([n, lb(c, n, -1)]));
    for (let [n, h] of l) {
      for (const u of h) {
        kb(c, u, n);
      }
    }
  }
  return c;
}), I = (...b) => {
  let c;
  const g = new Map(), l = new Map(), n = h => {
    let u;
    return h.u && ((u = g.get(h.u)) ? (l.delete(u), h = n(h.u)) : g.set(h.u, h)), h;
  };
  return [b, ...c] = [...b], b = qb(rb(qb(pb(b)), ...c)), ob(b, h => {
    for (const u of h.s) {
      l.set(n(u), u.B);
    }
  }), Array.from(l, ([{C:h}, u]) => {
    const z = h.map(({x, y:B, z:G}) => ({x, y:B, z:G,}));
    return cb(u ? z.reverse() : z, h.A, h.D);
  });
}, O = (b, c, g) => b + (c - b) * Ta(1 - Math.exp(-g * e)), sb = () => {
  const b = Va(k[12].g, k[13].g);
  ha = Ua(O(ha, 0, 1), Wa(ha + 60 * e), k[5].g - k[6].i,);
  ea = Ua(O(ea, 0, 5), Wa(ea + 56 * e), b,);
  fa = Ua(O(fa, 0, 4), Wa(fa + 48 * e), b,);
  ma = O(ma, k[9].i, 0.2 + 0.3 * Ra(2 * k[9].i - 1));
  la = O(la, ja ? la + (-9 - la) * Ta(1.5 * e) : Ta(a / 3), 1,);
  pa && a > pa && (pa = 0, h4.innerHTML = "");
  k[0].j && 0.8 < k[0].g && (13 > ba ? (1 / 0 > pa && (pa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), k[0].j = 0) : ja || (1 / 0 > pa && (pa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ja = 1));
  for (const c of f) {
    c.h && (c.l = c.h());
  }
  for (const c of k) {
    c.h();
  }
  for (const c of ya) {
    c.h();
  }
}, tb = () => {
  h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ba = ya.reduce((b, {j:c}) => b + c, 0)];
}, ub = () => {
  localStorage.DanteSP22 = JSON.stringify([k.map(({j:b}) => b), ya.map(({j:b}) => b), da, a, ma,]);
}, P = (b, c = 1) => {
  const g = ua;
  c = {l:m, H:f.length, G:c, s:[],};
  return f.push(ua = c), b(c), ua = g, c;
}, R = (b, c = m, g) => ua.s.push(...w(b, c, g)), V = b => {
  const c = ua, g = k.length, l = {j:0, g:0, i:0, u:c, h() {
    const n = l.j, h = l.g, u = l.i, z = c.l.multiply(b);
    l.I = z;
    3 > Ya(z.transformPoint()) && za[5] && (0.3 > h || 0.7 < h) && (l.j = n ? 0 : 1, g && 1 / 0 > pa && (pa = a + 1, h4.innerHTML = "* click *"), da = g, ub());
    l.g = O(h, n, 4);
    l.i = O(u, n, 1);
    l.l = z.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
  },};
  k.push(l);
  R(H(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  R(H(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  R(H(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
}, vb = (b, ...c) => {
  let g = -1, l = 0, n = 0, h = 0, u = 0, z = 0, x = 1, B = 3;
  const G = {j:0, h() {
    if (!G.j) {
      let Aa, Ea, M, D, A, t, N = 1, S = 1 / 0, K;
      for (const ia of d) {
        var {x:J, z:L, w:Q} = ia;
        L = (J = Math.hypot(p - J, v - L)) - Q;
        K ||= J < Q;
        0 < L && S > L && (S = L, q = ia);
        var Z = J / Q;
        N = N < Z ? N : Z;
      }
      K || ({x:Aa, z:Ea, w:M} = q, D = p - Aa, A = v - Ea, t = Math.hypot(D, A), W = Math.atan2(-A, D), x && (n = (Math.random() - 0.5) * Math.PI / 2, B = Qa(1, B / (1 + Math.random()))), W += n, g = -Math.cos(W), l = Math.sin(W), 0.1 < t && (t = (t < M ? t : M) / (t || 1), p = D * t + Aa, v = A * t + Ea));
      x = K;
      B = O(B, 3 + 6 * (1 - N), 3 + N);
      y = O(y, p = O(p, p + g, B), B);
      C = O(C, v = O(v, v + l, B), B);
      h = Xa(h, Math.atan2(y - u, C - z) / Ma - 180, 3 * e,);
      u = y;
      z = C;
      var W = (G.l = E.l.multiply(b.translate(y, 0, C).rotateSelf(0, h, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.55 > Ya(W) && (G.j = 1, Z = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ba] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      pa && (pa = a + (ba && 12 > ba ? 5 : 7), h4.innerHTML = Z), tb(), ub());
    }
    G.j && (G.l = f[2].l.translate(F % 4 * 1.2 - 1.7 + Math.sin(a + F) / 7, -2, 1.7 * (F / 4 | 0) - 5.5 + Ra(F % 4 - 2) + Math.cos(a / 1.5 + F) / 6,));
  },}, E = ua, F = ya.length, d = c.map(([J, L, Q]) => ({x:J, z:L, w:Q,}));
  let q = d[0], {x:p, z:v} = q, y = p, C = v;
  ya.push(G);
}, wb = (b, c, g, l) => {
  let n = 0, h = 0, u = 0, z = 1 / 0, x = -1 / 0, B = 1 / 0, G = -1 / 0, E = 1 / 0, F = -1 / 0;
  const d = 1.1 * (g - c), q = (new DOMMatrix(bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
  return c = r(8, p => (p = q.transformPoint({x:4 & p ? 1 : -1, y:2 & p ? 1 : -1, z:1 & p ? 1 : -1,}), n -= p.x = (d * p.x | 0) / d / p.w, h -= p.y = (d * p.y | 0) / d / p.w, u -= p.z = (d * p.z | 0) / d / p.w, p)), g = m.rotate(298, 139).translateSelf(n / 8, h / 8, u / 8), db(c, g).map(({x:p, y:v, z:y}) => {
    z = z < p ? z : p;
    x = p < x ? x : p;
    B = B < v ? B : v;
    G = v < G ? G : v;
    E = E < y ? E : y;
    F = y < F ? F : y;
  }), E *= 0 > E ? l : 1 / l, F *= 0 < F ? l : 1 / l, m.scale(2 / (x - z), 2 / (G - B), 2 / (E - F)).translateSelf((x + z) / -2, (G + B) / -2, (E + F) / 2,).multiplySelf(g);
}, zb = () => {
  let b = !0, c, g, l, n, h, u, z, x, B, G, E, F;
  const d = () => {
    sa || !b ? xb.disconnect() : xb.connect(yb.destination);
    b4.innerHTML = "Music: " + b;
  }, q = (p = !1) => {
    if (sa !== p) {
      sa = p;
      try {
        p ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : xb.start();
      } catch {
      }
      va = 0;
      document.body.className = p ? "l m" : "l";
      d();
      tb();
    }
  };
  oncontextmenu = () => !1;
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b1.onclick = () => {
    document.body.requestFullscreen();
    q();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    q();
    va = 1;
  };
  b4.onclick = () => {
    b = !b;
    d();
  };
  b5.onclick = () => q(!0);
  onclick = p => {
    F = 1;
    sa || (p.target === hC && (za[5] = !0), va && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:p, target:v, type:y, repeat:C}) => {
    C || ((C = !!y[5] && v === document.body) && ("Escape" === p || "Enter" === p && sa) ? sa && !F || q(!sa) : 5 === (y = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[p]) ? C && (za[y] = 1) : za[y] = C);
  };
  onmousemove = ({movementX:p, movementY:v}) => {
    va && (p || v) && (La += 0.1 * p, Ka += 0.1 * v);
  };
  hC.ontouchstart = p => {
    if (!sa) {
      for (let {pageX:v, pageY:y, identifier:C} of p.changedTouches) {
        va && v > hC.clientWidth / 2 ? void 0 === x && (B = 0, u = v, z = y, x = C, G = La, E = Ka) : void 0 === n && (h = 0, g = v, l = y, n = C);
      }
      c = ca;
    }
  };
  hC.ontouchmove = p => {
    if (!sa) {
      for (let {pageX:Q, pageY:Z, identifier:W} of p.changedTouches) {
        var v, y, C, J, L;
        x === W && (La = G + (Q - u) / 2.3, Ka = E + (Z - z) / 2.3, B = 1);
        n === W && (W = (g - Q) / 20, v = (l - Z) / 20, y = 0 > W ? -W : W, C = 0 > v ? -v : v, J = Math.atan2(v, W), L = Ta(Math.hypot(v, W) - 0.5), na = 0.2 < y ? Math.cos(J) * L : 0, oa = 0.2 < C ? Math.sin(J) * L : 0, (na || oa) && (h = 1), 2 < y && (g = Q + 20 * Math.sign(W)), 2 < C && (l = Z + 20 * Math.sign(v)));
      }
    }
  };
  hC.ontouchend = p => {
    let v;
    p.preventDefault();
    for (const y of p.changedTouches) {
      y.identifier === x ? (x = void 0, B || (v = 1), B = 0) : y.identifier === n ? (n = void 0, oa = na = 0, h || (v = 1), h = 0) : v = 1;
    }
    v && p.target === hC && c && 0.02 < (p = ca - c) && 0.7 > p && (za[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    za.length = na = oa = 0;
    n = x = void 0;
    document.hidden && q(!0);
  })();
  q(!0);
}, Ab = () => {
  let b = 0, c = 0, g = 0, l = 0, n = 0, h = 2, u, z, x, B, G, E, F, d, q, p, v, y, C;
  const J = {x:0, y:0, z:0,}, L = new Int32Array(256), Q = new Uint8Array(65536), Z = () => {
    h = 2;
    B = F = E = G = 0;
    b = c = k[da].u.H || 1;
  }, W = () => {
    for (let M = 32; 128 > M; M += 2) {
      let D = 0, A = 0, t = 0, N = 0;
      const S = 512 * M;
      for (let K = 1 & M; 128 > K; K += 2) {
        const ia = S + 4 * K;
        let X = S + 4 * (127 - K);
        const aa = Q[ia] / 255, ka = Q[1 + X] / 255, qa = 1 - Ra(K / 63.5 - 1);
        10 < K && 118 > K && (D = Qa(D, Qa(aa * qa, aa * Q[X] / 255)), A = Qa(A, Qa(ka * qa, ka * Q[1 + ia] / 255)));
        (54 > K || 74 < K) && 1e-3 < (X = (1 - qa) * (ka < aa ? aa : ka) / 3) && (64 > K && X > t ? t = X : 64 < K && X > N && (N = X));
      }
      Ra(N - t) > (0 > q ? -q : q) && (q = N - t);
      Ra(A - D) > (0 > p ? -p : p) && (p = A - D);
    }
  }, Aa = () => {
    let M = 0, D = 0, A = 0, t = 0;
    L.fill(0);
    for (let S = 0; 31 > S; ++S) {
      let K = 0;
      const ia = 512 * S;
      for (let X = 0; 128 > X; X++) {
        var N = ia + 4 * X;
        let aa = (Q[N] + Q[1 + N]) / 255;
        N = Q[2 + N];
        14 < X && 114 > X && (K += aa);
        N && aa && (aa = L[N] + 1, L[N] = aa, M > aa || (M = aa, D = N));
      }
      3 > K && 5 < S && (t += S / 32);
      3 < K && (7 < S && (A += S / 15), x = 1);
    }
    D && (x = 1);
    h ? D && (h = 0, c = D) : c = D || b;
    b = D;
    B = O(B, x ? 6.5 : 8, 4);
    J.y += A / 41 - (x ? 1 : B) * t / 41 * B * e;
  }, Ea = () => {
    var M = 1 === f[c].G && f[c].l || m, {x:D, y:A, z:t} = (h ? ({x:A, y:D, z:t} = k[da].I.transformPoint({x:0, y:12, z:-2.5,}), 1 < h && (h = 1, d = Da.y = D), Da.x = A, Da.z = t) : ({x:A, z:t} = ((D = M.inverse()).m41 = 0, D.m42 = 0, D.m43 = 0, D.transformPoint({x:q, z:p, w:0,})), J.x += A, J.z += t), c !== z && (z = c, {x:D, y:A, z:t} = M.inverse().transformPoint(Da), J.x = D, J.y = A, J.z = t), M.transformPoint(J));
    M = D - Da.x;
    let N = t - Da.z;
    Da.x = D;
    Da.y = A;
    Da.z = t;
    A < (-25 > D || 109 > t ? -25 : -9) && Z();
    c && (E = M / e, F = N / e);
    d = Ua(O(d, A, 2), A, 8 * Ra(d - A));
    void 0 === v && (Ha = v = D, Ia = (y = d = A) + 13, Ja = (C = t) + -36);
    v = O(v, D, Pa(Qa(0.4, Ra(v - D) - 1.5)));
    y = O(y, A, Pa(Qa(0.4, Ra(y - A) - 2.2)));
    C = O(C, t, Pa(Qa(0.4, Ra(C - t) - 1.5)));
    va ? (Ha = O(Ha, D, 666 * h + 18), Ia = O(Ia, d + 1.5, 666 * h + 18), Ja = O(Ja, t, 666 * h + 18)) : (Ha = O(Ha, v, 2), Ia = O(Ia, Qa(y + 13, 6), 2), Ja = O(Ja, C + -18, 2), M = Ha - v, N = Ja - C, (A = Sa(Math.hypot(N, M), 0.1)) && (Ka = 90 - Math.atan2(A, Ia - y) / Ma, La = 270 + Math.atan2(N, M) / Ma));
    Ka = Qa(87 > Ka ? Ka : 87, -87);
    La = Wa(La);
    1 === c && (k[9].j = -15 > D && 0 > t ? 1 : 0);
    const S = f[37].l = m.translate(D, d, t).rotateSelf(0, l = Xa(l, g, 8 * e),);
    [38, 39].map((K, ia) => {
      f[K].l = S.translate(0, n * Ta(0.45 * Math.sin(9.1 * a + Math.PI * (ia - 1) - Math.PI / 2)),).rotateSelf(n * Math.sin(9.1 * a + Math.PI * (ia - 1)) * 0.25 / Ma, 0);
    });
  };
  wa = () => {
    let M = na + (za[0] ? 1 : 0) - (za[2] ? 1 : 0), D = oa + (za[1] ? 1 : 0) - (za[3] ? 1 : 0), A = navigator.getGamepads()[0];
    if (A) {
      var t = K => N[K]?.pressed || 0 < N[K]?.value ? 1 : 0;
      const N = A.buttons, S = A.axes;
      A = t(3) || t(2) || t(1) || t(0);
      M += t(14) - t(15) - Sa(S[0], 0.2);
      D += t(12) - t(13) - Sa(S[1], 0.2);
      va && (Ka += 80 * Sa(S[3], 0.3) * e, La += 80 * Sa(S[2], 0.3) * e);
      A && !u && (za[5] = 1);
      u = A;
    }
    t = Math.atan2(D, M);
    A = Sa(Ta(Math.hypot(D, M)), 0.05);
    M = A * Math.cos(t);
    D = A * Math.sin(t);
    n = O(n, A, 10);
    A && (g = 90 - t / Ma);
    x = p = q = 0;
    Y.fa7();
    Y.r9r(0, 0, 128, 128, 6408, 5121, Q);
    Y.iay(36008, [36064, 36096]);
    Y.iay(36009, [36064, 36096]);
    NO_INLINE(W)();
    NO_INLINE(Aa)();
    t = Ta(1 - 5 * Qa(0 > q ? -q : q, 0 > p ? -p : p));
    c || (q += E * t * e, p += F * t * e);
    E = O(E, 0, x ? 8 : 4);
    F = O(F, 0, x ? 8 : 4);
    G = O(G, x ? (A ? x ? 7 : 4 : 0) * t : 0, x ? 0.1 < t ? 10 : A ? 5 : 7 : 1,);
    t = va ? La * Ma : Math.PI;
    A = Math.sin(t) * G * e;
    t = Math.cos(t) * G * e;
    q -= M * t - D * A;
    p -= M * A + D * t;
    NO_INLINE(Ea)();
  };
  Z();
}, Bb = (b, c = 35633) => (c = Y.c6x(c), Y.s3c(c, b), Y.c6a(c), c), Gb = (b, c) => {
  const g = {}, l = Y.c1h();
  return Y.abz(l, b), Y.abz(l, Bb(c, 35632)), Y.l8l(l), n => n ? g[n] || (g[n] = Y.gan(l, n)) : Y.u7y(l);
}, Hb = (b, c, g, l) => {
  if (sa) {
    g = m.rotate(0, 40 * Math.sin(ca) - 70);
    for (var n of [37, 38, 39]) {
      ab(g, Oa, n - 1);
    }
    Y.uae(b, !1, Oa);
    Y.d97(4, f[39].F - f[37].v, 5123, 2 * f[37].v,);
  } else {
    for (n = 0; f.length > n; ++n) {
      f[n].G && ab(f[n].l, Oa, n - 1);
    }
    Y.uae(b, !1, Oa);
    Y.d97(4, (c ? f[39].F : f[37].v) - 3, 5123, 6,);
    for (c = 0; 13 > c; ++c) {
      ab(ya[c].l, Oa, c);
    }
    for (c = 0; k.length > c; ++c) {
      ab(k[c].l, Oa, c + 13), l || (Oa[16 * (c + 13) + 15] = 1 - k[c].g);
    }
    Y.uae(b, !1, Oa);
    Y.das(4, f[g].F - f[g].v, 5123, 2 * f[g].v, 13,);
    Y.das(4, f[40].F - f[40].v, 5123, 2 * f[40].v, k.length,);
  }
}, Ib = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Jb = b => Math.sin(b * Math.PI * 2), Kb = b => 0.5 > b % 1 ? 1 : -1, Lb = b => b % 1 * 2 - 1, Mb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Tb = b => {
  let c = 0;
  const g = () => {
    const h = yb.createBuffer(2, 5362944, 44100);
    for (let u = 0; 2 > u; u++) {
      for (let z = u, x = h.getChannelData(u); 10725888 > z; z += 2) {
        x[z >> 1] = n[z] / 65536;
      }
    }
    xb.buffer = h;
    xb.loop = !0;
    Ib(b);
  }, l = () => {
    let h, u = 0, [z, x, B, G, E, F, d, q, p, v, y, C, J, L, Q, Z, W, Aa, Ea, M, D] = Ca[c];
    v = v * v * 4;
    for (const K of [5513, 4562, 3891]) {
      const ia = [];
      let X = 0, aa = 0, ka, qa, Cb;
      const Ba = new Int32Array(768 * K), Nb = 2 ** (C - 9) / K, Ob = Math.PI * 2 ** (W - 8) / K, mb = Ea * K & -2;
      for (let fb = 0; 11 >= fb; ++fb) {
        for (let gb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + fb]; 32 > gb; ++gb) {
          const Eb = (32 * fb + gb) * K;
          for (var A = 0; 4 > A; ++A) {
            if (ka = 0, Db && (ka = D[Db - 1].charCodeAt(gb + 32 * A) - 40, ka += 0 < ka ? 106 : 0), ka) {
              var t;
              if (!(t = ia[ka])) {
                t = ka;
                let T = void 0, ra = void 0;
                var N = K, S = ka;
                let Pb = 0, Qb = 0;
                const Rb = 2 > c ? Lb : Jb, Sb = 2 > c ? 1 > c ? Kb : Mb : Jb, Fb = new Int32Array(q + p + v);
                for (let Fa = 0, nb = 0; q + p + v > Fa; ++Fa, ++nb) {
                  let Ga = 1;
                  q > Fa ? Ga = Fa / q : q + p > Fa || (Ga = (1 - (Ga = (Fa - q - p) / v)) * 3 ** (-y / 16 * Ga));
                  0 > nb || (nb -= 4 * N, ra = 396e-5 * 2 ** ((S + x - 256) / 12), T = 396e-5 * 2 ** ((S + E - 256) / 12) * (1 + (c ? 0 : 0.007200)));
                  Fb[Fa] = 80 * (Rb(Pb += ra * Ga ** (B / 32)) * z + Sb(Qb += T * Ga ** (F / 32)) * G + (d ? (2 * Math.random() - 1) * d : 0)) * Ga | 0;
                }
                t = ia[t] = Fb;
              }
              for (let T = 0, ra = 2 * Eb; t.length > T; ++T, ra += 2) {
                Ba[ra] += t[T];
              }
            }
          }
          for (let T, ra = 0; K > ra; ++ra) {
            A = 0, t = 2 * (Eb + ra), ((T = Ba[t]) || Cb) && (qa = 308e-5 * J, 1 !== c && 4 !== c || (qa *= Math.sin(Nb * t * Math.PI * 2) * M / 512 + 0.5), qa = 1.5 * Math.sin(qa), X += qa * aa, h = (1 - L / 255) * (T - aa) - X, aa += qa * h, T = 4 === c ? aa : 3 === c ? h : X, c || (T = 1 > (T *= 22e-5) ? -1 < T ? Math.sin(T / 4 * Math.PI * 2) : -1 : 1, T /= 22e-5), T *= Q / 32, Cb = 1e-5 < T * T, h = Math.sin(Ob * t) * Z / 512 + 0.5, A = T * (1 - h), T *= h), t < mb || (A += Ba[1 + t - mb] * Aa / 
            255, T += Ba[t - mb] * Aa / 255), n[u + t] += Ba[t] = A, ++t, n[u + t] += Ba[t] = T;
          }
        }
      }
      u += Ba.length;
    }
    Ib(5 > ++c ? l : g);
  }, n = new Int32Array(10725888);
  Ib(l);
}, Ub = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), U = NO_INLINE((b, c, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b), yb = new AudioContext(), xb = yb.createBufferSource(), Y = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in Y) {
  Y[b[0] + [...b].reduce((c, g, l) => (c * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Y[b];
}
Ib(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      const l = p => {
        let v, y;
        Y.f1s();
        requestAnimationFrame(l);
        C = (p - (ta || p)) / 1e3;
        sa ? (e = 0, za[5] = 0) : e = 0.066 < C ? 0.066 : C;
        a += e;
        ca += C;
        ta = p;
        0 < e && (sb(), wa(), za[5] = 0);
        var C = sa ? m.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ta(hC.clientWidth / 1e3)) : m.rotate(-Ka, -La, -0).invertSelf().translateSelf(-Ha, -Ia, -Ja,);
        0 < e && ({x:p, y:v, z:y} = Da, F(), Y.b6o(36160, u), Y.v5y(0, 0, 128, 128), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(F("b"), !1, ab(m.rotate(0, 180).invertSelf().translateSelf(-p, -v, 0.3 - y)),), Hb(F("c"), 0, 41, 0), Y.c4s(256), Y.cbf(!1, !0, !0, !1), Y.uae(F("b"), !1, ab(m.translate(-p, -v, -y - 0.3))), Hb(F("c"), 0, 41, 0), Y.f1s());
        G();
        Y.b6o(36160, h);
        Y.v5y(0, 0, 2048, 2048);
        q[0](wb(C, 0.3, 55, 10));
        q[1](wb(C, 55, 177, 11));
        d();
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.cbf(!0, !0, !0, !0);
        Y.c4s(16640);
        q[0]();
        q[1]();
        Y.uae(d("a"), !1, bb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
        Y.uae(d("b"), !1, ab(C));
        Y.ubu(d("k"), Ha, Ia, Ja);
        Hb(d("c"), !va, 42, 0);
        E();
        Y.ubu(E("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ca);
        sa ? Y.ubu(E("k"), 0, 0, 0) : Y.ubu(E("k"), Ha, Ia, Ja);
        Y.uae(E("b"), !1, ab(C.inverse()));
        Y.d97(4, 3, 5123, 0);
        Y.b6o(36160, u);
        Y.f1s();
      }, n = g, h = Y.c5w(), u = Y.c5w(), z = Y.c3z(), x = Y.c25(), B = Bb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}"), G = Gb(Bb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), 
      "#version 300 es\nvoid main(){}",), E = Gb(Bb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), F = Gb(B, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), d = Gb(B, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), q = (F(), Y.uae(F("a"), !1, bb(1.4, 0.59, 1e-4, 1)), E(), Y.ubh(E("q"), 3), d(), Y.ubh(d("q"), 3), r(2, p => {
        const v = new Float32Array(16), y = Y.c25(), C = d(p ? "j" : "i");
        return Y.ubh(d(p ? "h" : "g"), p), Y.b6o(36160, h), Y.d45([0]), Y.r9l(0), Y.a4v(33984 + p), Y.b9j(3553, y), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), J => {
          J ? (ab(J, v), Y.uae(G("b"), !1, v), Y.fas(36160, 36096, 3553, y, 0), Y.c4s(256), Hb(G("c"), !va, 42, 1)) : Y.uae(C, !1, v);
        };
      }));
      Y.e8z(2929);
      Y.e8z(2884);
      Y.c70(1);
      Y.c7a(1029);
      Y.d4n(515);
      Y.c5t(0, 0, 0, 1);
      Y.b6o(36160, u);
      Y.bb1(36161, z);
      Y.r4v(36161, 33189, 128, 128);
      Y.f8w(36160, 36096, 36161, z);
      Y.a4v(33987);
      Y.b9j(3553, x);
      Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Y.fas(36160, 36064, 3553, x, 0);
      Y.a4v(33987);
      Y.b9j(3553, Y.c25());
      Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
      Y.gbn(3553);
      Y.t2z(3553, 10241, 9987);
      Y.t2z(3553, 10240, 9729);
      try {
        const [p, v, y, C, J] = JSON.parse(localStorage.DanteSP22,);
        k.map((L, Q) => L.g = L.i = L.j = Q ? 0 | p[Q] : 0);
        ya.map((L, Q) => L.j = 0 | v[Q]);
        da = y;
        a = C;
        ma = J;
      } catch {
      }
      la = 0 > da ? 0 : 1 < da ? 1 : da;
      sb();
      NO_INLINE(Ab)();
      requestAnimationFrame(l);
      NO_INLINE(zb)();
    }
  }, g = new Image();
  g.onload = g.onerror = c;
  g.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      const h = [], u = v => {
        let {x:y, y:C, z:J} = x[v], L = (p[0] = y, p[1] = C, p[2] = J, v = "" + (x.D ? q : d), F.get(v));
        return void 0 !== L ? (y = 3 * L, E[y] = (E[y++] + d[5]) / 2, E[y] = (E[y++] + d[6]) / 2, E[y] = (E[y] + d[7]) / 2) : (F.set(v, L = F.size), B.push(y, C, J, p[3]), G.push(d[4]), E.push(d[5], d[6], d[7])), L;
      };
      let z = 0, x;
      const B = [], G = [], E = [], F = new Map(), d = new Int32Array(8), q = new Int32Array(d.buffer, 0, 5), p = new Float32Array(d.buffer);
      for (const v of f) {
        for (x of (p[3] = 40 === v.H ? -14 : v.G && v.H, v.s)) {
          const {x:y, y:C, z:J} = $a(x);
          d[4] = 0 | x.A;
          d[5] = 32767 * y;
          d[6] = 32767 * C;
          d[7] = 32767 * J;
          for (let L = 2, Q = u(0), Z = u(1); x.length > L; ++L) {
            h.push(Q, Z, Z = u(L));
          }
        }
        v.s = null;
        v.v = z;
        v.F = z = h.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(B), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(E), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(G), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(h), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Ib(c);
    });
    const l = r(11, h => m.translate(Math.sin(h / 10 * Math.PI), h / 10).rotate(+h).scale(1.0001 - h / 10, 0, 1 - h / 10),), n = r(10, h => hb(db(eb(18), l[h]).reverse(), db(eb(18), l[h + 1]), 1,)).flat();
    P(() => R([xa.slice(1)], m.translate(-2).scale3d(3).rotate(90, 0)), 0);
    P(() => {
      const h = (d, q, p) => P(v => {
        v.h = () => m.translate(x() * Math.sin(3 * d + a * d) * q);
        xa.map(({x:y, z:C}) => {
          R(H(11, 1), m.translate(4 * y, 4, p + 4 * C).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6),);
          R(H(), m.translate(4 * y, 7, p + 4 * C).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3),);
        });
        R(I(w(H(), m.translate(0, 0, p).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3),), ...[-1, 1].map(y => w(H(), m.translate(5 * y, 0.2, p).rotate(-30 * y).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3),)),),);
        R(H(), m.translate(0, -3, p).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
      }), u = (d, q, p) => m.translate(d + Math.sin(a + 2) / 5, q + Math.sin(0.8 * a) / 3, p).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), z = d => I(w(H(), m.translate(0, -d / 2).scale(6, d - 1, 2.2)), w(H(), m.translate(0, -d / 2 - 6).scale(4, d - 3, 4)), w(H(32, 1), m.translate(0, d / 2 - 9).rotate(90, 0, 90).scale3d(4)),), x = () => {
        var d = k[2].i, q = 1 - k[4].i;
        return d < q ? d : q;
      }, B = I(w(H(20, 1, 1.15, 1), m.translate(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7),), w(H(20, 1, 1.3, 1), m.translate(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2),), w(H(), m.translate(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),), G = r(7, d => w(H(6, 1), m.translate(4 * (d / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38),)).flat(), E = (P(d => {
        d.h = () => u(-12, 4.2, 40 * la - 66);
        R(B);
        V(m.translate(0, -3, 4));
      }), V(m.translate(-5.4, 1.5, -19).rotate(0, -90)), vb(m.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), vb(m.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...eb(18).map(({x:d, z:q}) => [7 * d, 10 * q, 4.5 - 2 * (0 > d ? -d : d)]),), R(H(), m.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2),), xa.map(({x:d, z:q}) => R(H(6), m.translate(3 * d, 3, 15 * q).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4),)), [-23, 22].map(d => R(H(), m.translate(0, 0, d).scale(3, 1, 8), 
      U(0.9, 0.9, 0.9, 0.2))), [-15, 15].map((d, q) => {
        R(H(), m.translate(0, 6.3, d).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
        R(H(), m.translate(0, 1, d).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
        P(p => {
          p.h = () => m.translate(0, 0, d).scale(1, Ta(1.22 - k[q + 1].g), 1);
          R(G);
        });
      }), r(5, d => r(2, q => R(n, m.translate(18.5 * (q - 0.5), 0, 4.8 * d - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2,), U(1, 1, 0.8, 0.2),),)), R(H(), m.translate(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)), R(H(), m.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2),), R(H(5), m.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4),), R(H(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 
      0.2, 0.2, 0.5),), R(I(rb(w(H(6, 0, 0, 0.3), m.translate(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2),), w(H(6), m.translate(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5),), w(H(6, 0, 0, 0.3), m.translate(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2),),), w(H(5), m.scale(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)), w(H(5, 0, 1.5), m.translate(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2),), w(H(), m.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5),), 
      w(H(6), m.translate(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5),),),), P(d => {
        d.h = () => m.translate(0, 0.01 < k[3].g ? (5 * Math.cos(1.5 * a) + 2) * k[3].i * (1 - k[2].g) + -15 * (1 - k[3].g) : -500, 0,);
        R(H(5), m.translate(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
        V(m.translate(0, 1.2));
      }), V(m.translate(15, -2, 4)), h(0.7, 12, 35), h(1, 8.2, 55), P(d => {
        d.h = () => m.translate(x() * Math.sin(a / 1.5 + 2) * 12);
        R(I(rb(w(H(), m.scale(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)), w(H(6), m.scale(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)), w(H(), m.translate(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5),), w(H(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2),),), w(H(), m.scale(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),), m.translate(0, 0, 45),);
        vb(m.translate(0, 2.8, 45), [0, 0, 4.5]);
      }), R(H(), m.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), P(d => {
        d.h = () => m.translate(9.8 * (1 - x()));
        R(H(3), m.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2),);
        R(H(8), m.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2),);
        R(H(), m.translate(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
        R(H(), m.translate(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
        V(m.translate(-23, -0.5, 66.5));
      }), P(d => {
        d.h = () => m.translate(0, Ta(1 - 5 * x()) * Va(k[4].g, k[5].g) * Math.sin(1.35 * a) * 4);
        R(H(), m.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2),);
        R(I(w(H(), m.scale(3, 1.4, 2.7)), w(H(), m.scale(1.2, 8, 1.2)),), m.translate(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2),);
      }), P(d => {
        d.h = () => m.translate(0, 0, Ta(1 - 5 * x()) * Va(k[4].g, k[5].g) * Math.sin(0.9 * a) * 8);
        R(I(w(H(), m.translate(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), w(H(), m.translate(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2),),),);
        R(H(), m.translate(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
      }), P(d => {
        d.h = () => m.translate(0, -6.5 * k[4].i);
        R(H(6), m.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4),);
      }), V(m.translate(-55, -1.1, 46).rotate(0, 90)), R(H(6), m.translate(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)), R(H(7), m.translate(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)), [...w(H(), m.translate(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2),), ...I(w(H(6), m.rotate(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)), w(H(4, 0, 0.01), m.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3),), w(H(6), m.rotate(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)), 
      ...[5, 0, -5].map(d => w(H(5), m.translate(d, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3),)),),]), F = (R(E, m.translate(-53, 0, 55)), P(d => {
        d.h = () => m.translate(-75, (1 - k[5].i) * (1 - k[6].g) * 3, 55).rotate(180 * (1 - k[5].i) + ha, 0,);
        R(E);
      }, 2), R(H(), m.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2),), R(H(3, 0, -0.5), m.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2),), R(I(rb(w(H(), m.translate(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2),), w(H(), m.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2),), w(H(), m.translate(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2),), w(H(), m.translate(-96, -2.6, 73).rotate(0, 
      45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2),), w(H(6), m.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3),), w(H(), m.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2),), w(H(), m.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2),),), w(H(8), m.translate(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4),), w(H(8), m.translate(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5),), w(H(8), m.translate(-100, 
      -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5),),),), vb(m.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), vb(m.translate(-89, 0.2, 80), [0, 0, 6]), R(I(w(H(), m.translate(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4),), w(H(), m.translate(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4),), w(H(20, 1), m.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4),),),), P(d => {
        d.h = () => m.translate(-99.7, -1.9, 63.5).scale(1, Ta(1.1 - k[6].g), 1);
        R(G);
      }), xa.map(({x:d, z:q}) => {
        R(H(6), m.translate(7 * d - 100, -3, 7 * q + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4].map(p => R(H(6), m.translate(7 * d - 100, p, 7 * q + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8),));
      }), r(7, d => {
        R(H((23 * d + 1) % 5 + 5, 0, 0.55), m.translate(5 * Math.sin(d) - 101 + d, -2.3 - d, 44.9 - 2.8 * d).scaleSelf(5 + d / 2, 1 + d / 6, 5 + d / 3,), U(0.5 - d / 17, 0.5 - (1 & d) / 9, 0.6, 0.3),);
      }), R(H(), m.translate(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)), R(H(4), m.translate(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)), R(H(12, 1), m.translate(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1),), V(m.translate(-86, -7.5, 31)), P(d => {
        d.h = () => m.translate(0, 3.5 * (1 - Qa(k[6].g, k[7].g)) + Va(k[7].i, k[6].i) * Math.sin(a) * 5,);
        [0, 12, 24].map(q => R(H(), m.translate(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2),));
      }), P(d => {
        d.h = () => m.translate(0, Va(k[7].i, k[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Va(k[7].i, k[6].i),);
        [6, 18].map(q => R(H(), m.translate(q - 76.9, q / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2),));
      }), R(I(rb(w(H(5), m.translate(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3),), w(H(5), m.scale(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)), w(H(), m.scale(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),), w(H(5), m.scale(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),), m.translate(-38.9, -11.3, 17),), V(m.translate(-38.9, -9.6, 10)), P(d => {
        d.h = () => m.translate(0, -7.3 * k[7].i);
        R(I(rb(w(H(5), m.translate(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5),), w(H(5), m.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5),), w(H(5), m.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5),),), w(H(5), m.scale(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)), w(H(5), m.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5),),), m.translate(-38.9, -11.3, 17),);
        vb(m.translate(-39.1, -0.6, 17).rotate(11), ...eb(15).map(({x:q, z:p}) => [3 * q, 3 * p, 1.2]),);
      }), xa.map(({x:d, z:q}) => {
        R(H(14, 1), m.translate(9 * d - 38.9, -7.3, 11 * q + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1),);
        [1.5, 8].map(p => R(H(17, 1), m.translate(9 * d - 38.9, -7.3, 11 * q + 17).translate(0, p - 4).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3),));
      }), R(I(rb(w(H(6), m.translate(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3),), w(H(), m.translate(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3),),), ...r(6, d => r(6, q => w(H(6), m.translate(4.6 * q - 12 + 2 * (1 & d), 0, 4.6 * d - 50 + 2 * Math.sin(4 * q)).scale(2, 5, 2,), U(0.7, 0.7, 0.7, 0.3),))).flat(),), m.translate(-38.9, -11.3, 17),), vb(m.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]), R(H(5), m.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), 
      U(0.8, 0.1, 0.25, 0.4),), V(m.translate(-84, -0.5, 85).rotate(0, 45)), P(d => {
        d.h = () => u(-123, 1.4, 55 + -65 * ma);
        R(B);
        V(m.translate(0, -3, -4).rotate(0, 180));
      }), I(w(H(), m.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3),), w(H(3), m.translate(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2].map(d => w(H(), m.translate(d, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3),)),));
      P(d => {
        d.h = () => m.translate(0, -2, Va(k[10].g, k[11].g) * Ra(Math.sin(1.1 * a)) * -8.5 + 10);
        r(2, q => R(F, m.translate(9 * q - 110 + (1 & q), 1.7, -12)));
      });
      P(d => {
        d.h = () => m.translate(0, -2, Va(k[10].g, k[11].g) * Ra(Math.sin(2.1 * a)) * -8.5 + 10);
        r(2, q => R(F, m.translate(9 * (q + 2) - 110 + (1 & q), 1.7, -12)));
      });
      P(d => {
        d.h = () => m.translate(0, -2, -8.5 * Qa((1 - k[10].g) * (1 - Va(k[10].g, k[11].g)), Va(k[10].g, k[11].g) * Ra(Math.sin(1.5 * a)),) + 10,);
        r(3, q => R(F, m.translate(9 * q - 106, 1.7, -12)));
      });
      R(I(rb(w(H(), m.translate(26.5, -1.6, 10).scale(20, 2.08, 3)), w(H(), m.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...r(4, d => w(H(), m.translate(13 + 9 * d + (1 & d), -0.8, 9).scale(1.35, 1.35, 9),)), ...r(3, d => w(H(), m.translate(17 + 9 * d, -0.8, 9).scale(1.35, 1.35, 9)),),), m.translate(-123, 0, -12), U(0.5, 0.5, 0.6, 0.2),);
      V(m.translate(-116, -1.4, -18).rotate(0, 180));
      R(H(), m.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2),);
      R(H(6), m.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2),);
      R(H(), m.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3),);
      R(H(8), m.translate(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      R(H(8), m.translate(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      R(H(), m.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3),);
      r(3, d => {
        R(z(16), m.translate(12 * d - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3),);
        R(z(16), m.translate(-77, -9, -12 * d - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3),);
      });
      R(I(w(H(12), m.translate(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2),), w(H(), m.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2),), w(H(), m.translate(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2),), w(H(12), m.translate(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2),),),);
      R(H(), m.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3),);
      R(H(9), m.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3),);
      R(I(w(H(), m.translate(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1),), w(H(9), m.translate(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2),),),);
      V(m.translate(-98, -4.4, -40).rotate(0, 90));
      vb(m.translate(-115, 0.2, -12), [0, 0, 3.5]);
      vb(m.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      R(I(rb(w(H(6, 0, 0, 0.6), m.translate(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2),), w(H(), m.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2),),), w(H(5), m.translate(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2),),),);
      r(4, d => P(q => {
        q.h = () => {
          const p = Va(k[8].i, k[12].i);
          return m.translate((2 < d ? 2 * (1 - p) + p : 0) - 100, p * Math.sin(1.3 * a + 1.7 * d) * (3 + d / 3) + 0.7, 115 + (1 & d ? -1 : 1) * (1 - k[8].i) * (1 - k[12].i) * -7 + (0.05 > p ? 0.05 : p) * Math.cos(1.3 * a + 7 * d) * (4 - 2 * (1 - d / 3)),);
        };
        R(H(6), m.translate(-14.6 - 4.8 * d - (2 < d ? 2 : 0), -d / 2.3, -21.5).scale(2.6, 1, 2.5), U(0.5 - d / 8, d / 12 + 0.5, 0.7, 0.3),);
      }));
      P(d => {
        d.h = () => {
          const q = Va(k[8].i, k[12].i);
          return m.translate(2.5 * (1 - q) - 139.7, -3 * (1 - k[8].g) + q * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * q + 3), 0);
        };
        R(I(w(H(10), m.scale(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), w(H(10), m.scale(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5)),),);
        R(H(15, 1), m.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3),);
        R(H(10), m.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3),);
        R(H(5), m.translate(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5),);
        V(m.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(q => R(n, m.rotate(90 * -q, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2),));
        vb(m.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(d => {
        R(H(12, 1), m.translate(-7.5 * d - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5].map(q => R(H(15, 1), m.translate(-7.5 * d - 100, q + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4),));
        R(n, m.translate(-5 * d - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * d - 90), U(1, 1, 0.8),);
        R(I(w(H(), m.translate(-4 * d, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4),), w(H(), m.scale(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)), w(H(28, 1), m.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5),), w(H(5), m.translate(-5.3 * d, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5),), w(H(5), m.translate(-5.3 * d, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5),),), m.translate(d - 100, 0.7, 97),);
      });
      P(d => {
        d.h = () => m.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - k[12].g);
        R(G);
      });
      R(I(w(H(), m.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1),), w(H(45, 1), m.translate(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1),),),);
      P(d => {
        d.h = () => m.translate(-81, 0.6, 106).rotate(0, 40 + ea);
        R(I(w(H(45, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)), w(H(), m.translate(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2),),),);
        R(H(8), m.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1),);
        R(H(5), m.translate(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        vb(m.translate(0, 3), ...eb(14).map(({x:q, z:p}) => [5.6 * q, 5.6 * p, 2]),);
      });
      P(d => {
        d.h = () => m.translate(-65.8, 0.8, 106).rotate(0, fa);
        [-1, 1].map(q => R(n, m.rotate(0, 90).translate(-5 * q, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * q + 90), U(1, 1, 0.8),));
        R(I(w(H(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), w(H(), m.scale(9, 5, 2), U(0.3, 0, 0, 0.3)),),);
        R(w(H(28, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        R(w(H(5), m.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      P(d => {
        d.h = () => m.translate(-50.7, 0.8, 106).rotate(0, 180 - fa);
        R(I(w(H(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), w(H(), m.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), w(H(), m.translate(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3),),),);
        R(w(H(28, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        R(w(H(5), m.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      P(d => {
        d.h = () => m.translate(-50.7, 0.8, 91).rotate(0, 270 + fa);
        R(I(w(H(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), w(H(), m.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), w(H(), m.translate(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3),),),);
        R(w(H(28, 1), m.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        R(w(H(5), m.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      R(H(), m.translate(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      R(H(), m.translate(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      R(H(), m.translate(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      R(H(), m.translate(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      V(m.translate(-34, 2.7, 96).rotate(-12, 0));
      R(H(5), m.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6),);
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((d, q,) => P(p => {
        p.h = () => m.translate(0, (1 - k[13].i) * (1 - k[14].i) * (q ? 0 : 3) + Va(k[13].i, k[14].i) * Math.sin(1.5 * a + 1.5 * q) * 4,);
        R(H(), m.translate(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), d,);
        2 === q && R(H(), m.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3),);
        1 === q && R(H(), m.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1].map(d => R(n, m.translate(-8 * d, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * d + 90), U(1, 1, 0.8),));
      r(3, d => R(z(24.7 - 0.7 * (1 & d)), m.translate(6 * d - 6, 4 - (1 & d), 111 - 0.2 * (1 & d)), 1 & d ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),),);
      R(I(w(H(6, 0, 0, 0.3), m.translate(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2),), w(H(5), m.translate(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5),),),);
      V(m.translate(0, 1.7, 82).rotate(0, 180));
      R(H(5), m.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4),);
      R(H(6), m.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3),);
      R(H(), m.translate(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      R(H(7), m.translate(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      R(I(rb(w(H(), m.translate(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4),), w(H(), m.translate(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4),),), w(H(5), m.translate(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4),),),);
      P(d => {
        d.h = () => {
          const q = Math.sin(a);
          return m.translate(-2 * q).rotate(25 * q);
        };
        R(H(3), m.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4),);
        [22, 30].map(q => {
          R(H(6), m.translate(0, 16, q + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4),);
          R(H(), m.translate(0, 6.2, q + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4),);
        });
      });
      P(d => {
        d.h = () => {
          const q = Va(Va((k[14].g + k[14].i) / 2, k[13].i), (k[15].g + k[15].i) / 2,);
          return m.translate(0, 16 * q, 8.5 * Ta(2 * q - 1) + 95);
        };
        R(H(5), m.scale(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        R(H(5), m.scale(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        V(m.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(m.translate(0, 3, 95), ...eb(9).map(({x:d, z:q}) => [9 * d, 9 * q, 4]),);
      vb(m.translate(0, 19, 134), [0, 0, 3.5]);
    });
    P(() => {
      [0, 180].map(u => R(n, m.rotate(0, u).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8),));
      R(ib(20), m.translate(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      const h = w(I(H(15, 1), w(H(), m.translate(0, 0, 1).scale(2, 2, 0.5)),), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3),);
      [-1, 1].map(u => R(h, m.translate(0.2 * u, 1.2, 0.4).rotate(0, 20 * u, 20 * u)));
      R(H(), m.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      R(ib(20), m.scale(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
    });
    [-1, 1].map(h => P(() => {
      R(H(10, 1), m.translate(0.3 * h, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
    }));
    P(() => {
      R(H(6, 1), m.scale(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      R(H(10), m.translate(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      R(H(3), m.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    P(() => {
      R(H(6).slice(0, -1), m.scale(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    P(() => {
      R(ib(30, 24, (h, u, z) => {
        const x = u / 24, B = h * Math.PI * 2 / 30, G = x ** 0.6 * Math.PI / 2;
        h = x * x * Math.sin(h * Math.PI * 14 / 30) / 4;
        return 23 === u ? {x:z.D = 0, y:-0.5, z:0,} : {x:Math.cos(B) * Math.sin(G), y:Math.cos(x * Math.PI) - x - h, z:Math.sin(B) * Math.sin(G) + Math.sin(h * Math.PI * 2) / 4,};
      }), m.scale3d(0.7), U(1, 1, 1),);
      [-1, 1].map(h => R(ib(12), m.translate(0.16 * h, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls: <b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n');

