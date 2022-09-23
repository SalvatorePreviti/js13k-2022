let aa = 0, ca = 0, a = 0, da = 0, ea = 0, fa = 0, ha = 0, ia = 0, ja = 0, la = 0, ma = 0, na = 0, d = 0.066, oa = 1, pa, ta, ua, va, wa;
const xa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], e = [], h = [], ya = [], za = [], Aa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "),
], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "),], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
],], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",],], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],],], Ca = {x:0, y:0, z:0,};
var Da = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180, p = new DOMMatrix(), La = new Float32Array(16), Ma = new Float32Array(624), r = (b, c) => Array.from(Array(b), (g, l) => c(l)), Na = b => 4 < b ? 4 : b, Oa = (b, c) => c < b ? b : c, Pa = b => 0 > b ? -b : b, Qa = (b, c) => (0 > b ? -b : b) > c ? b : 0, Ra = b => 0 > b ? 0 : 1 < b ? 1 : b, Sa = (b, c, g) => b + (c - b) * (0 > g ? 0 : 1 < g ? 1 : g), Ta = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)), Ua = b => (b *= Ka, Math.atan2(Math.sin(b), 
Math.cos(b)) / Ka), Va = (b, c, g) => ((b *= Ka) + (2 * (c = (c * Ka - b) % (2 * Math.PI)) % (2 * Math.PI) - c) * (0 > g ? 0 : 1 < g ? 1 : g)) / Ka, Wa = ({x:b, y:c, z:g}) => Math.hypot(b - Ca.x, c - Ca.y, g - Ca.z), Xa = ({x:b, y:c, z:g}, l) => b * l.x + c * l.y + g * l.z, Ya = b => {
  let c = 0, g = 0, l = 0, m, k = b.at(-1);
  for (m of b) {
    c += (k.y - m.y) * (k.z + m.z), g += (k.z - m.z) * (k.x + m.x), l += (k.x - m.x) * (k.y + m.y), k = m;
  }
  return m = Math.hypot(c, g, l), c /= m, g /= m, l /= m, {x:c, y:g, z:l, w:c * k.x + g * k.y + l * k.z,};
}, Za = (b, c = La, g = 0,) => (g *= 16, c[g++] = b.m11, c[g++] = b.m12, c[g++] = b.m13, c[g++] = b.m14, c[g++] = b.m21, c[g++] = b.m22, c[g++] = b.m23, c[g++] = b.m24, c[g++] = b.m31, c[g++] = b.m32, c[g++] = b.m33, c[g++] = b.m34, c[g++] = b.m41, c[g++] = b.m42, c[g++] = b.m43, c[g] = b.m44, c), $a = (b, c, g, l) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0,], ab = (b, c, g) => (b.D = g, b.A = c, b), bb = (b, c, g = b.A) => ab(b.map(l => {
  let m, k;
  return {x:l, y:m, z:k} = l, {x:l, y:m, z:k} = c.transformPoint({x:l, y:m, z:k,}), {x:l, y:m, z:k,};
}), g, b.D,), v = (b, c, g) => b.map(l => bb(l, c, g)), cb = (b, c = 0) => r(b, g => {
  const l = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:0.01 > (0 > l ? -l : l) ? l : 0 > l ? l - c : l + c,};
}), db = (b, c, g) => b.map((l, m, {length:k}) => ab([l, c[k - m - 1], c[k - (m + 1) % k - 1], b[(m + 1) % k],], b.A, g,)), G = (b, c, g = 0, l,) => (b = b ? cb(b, l) : xa, l = bb(b, p.translate(0, 1).scale3d(0 < g ? g : 1)), b = bb(b, p.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...db(b, l, c), l, b,]), gb = (b, c = b, g = (l, m) => (m *= Math.PI / c, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(m), y:Math.cos(m), z:Math.sin(l) * Math.sin(m),})) => {
  const l = [];
  for (let m = 0; b > m; m++) {
    for (let k = 0; c > k; k++) {
      const t = ab([], 0, 1);
      l.push(t);
      t.push(g(m, k, t));
      k && t.push(g((m + 1) % b, k, t));
      c - 1 > k && t.push(g((m + 1) % b, k + 1 % c, t));
      t.push(g(m, k + 1 % c, t));
    }
  }
  return l;
}, hb = (b, c) => {
  var g, l, m, k = c.C;
  for (var t = 0; k.length > t; ++t) {
    if (-0.00008 > (g = Xa(b, k[t]) - b.w) ? m = c : 8e-5 < g && (l = c), m && l) {
      l = [];
      m = [];
      k = c.C;
      t = c.B;
      let u = k.at(-1), x = Xa(b, u) - b.w;
      for (const A of k) {
        g = Xa(b, A) - b.w, 8e-5 > x && m.push(u), -0.00008 < x && l.push(u), (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g) && (x /= g - x, u = {x:u.x + (u.x - A.x) * x, y:u.y + (u.y - A.y) * x, z:u.z + (u.z - A.z) * x,}, l.push(u), m.push(u)), u = A, x = g;
      }
      return {o:2 < l.length && {C:ab(l, k.A, k.D), B:t, s:c,}, m:2 < m.length && {C:ab(m, k.A, k.D), B:t, s:c,},};
    }
  }
  return {o:l, m,};
}, ib = (b, c, g = Ya(c.C)) => {
  let l, m, k;
  return b ? ({o:l, m} = hb(b, c), l || m || b.u.push(c), l && (b.o = ib(b.o, l, g)), m && (b.m = ib(b.m, m, g))) : ({x:l, y:m, z:g, w:k} = g, b = {x:l, y:m, z:g, w:k, u:[c,], o:0, m:0,}), b;
}, jb = (b, c, g) => {
  const l = [], m = (k, t) => {
    let {o:u, m:x} = hb(k, t);
    u || x || (0 < g * Xa(k, c) ? u = t : x = t);
    u && (k.o ? m(k.o, u) : l.push(u));
    x && k.m && m(k.m, x);
  };
  for (const k of c.u) {
    m(b, k);
  }
  return l;
}, kb = (b, c) => b && (c(b), kb(b.o, c), kb(b.m, c)), nb = b => b.length ? b.reduce((c, g) => ib(c, {C:g, B:0, s:0,}), 0) : b, ob = b => (kb(b, c => {
  const g = c.m;
  c.m = c.o;
  c.o = g;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const l of c.u) {
    l.B = !l.B;
  }
}), b), pb = (...b) => b.reduce((c, g) => {
  const l = [];
  if (c = nb(c), g) {
    g = nb(g);
    kb(c, m => m.u = jb(g, m, 1));
    kb(g, m => l.push([m, jb(c, m, -1),]));
    for (let [m, k] of l) {
      for (const t of k) {
        ib(c, t, m);
      }
    }
  }
  return c;
}), I = (...b) => {
  let c;
  const g = new Map(), l = new Map(), m = k => {
    let t;
    return k.s && ((t = g.get(k.s)) ? (l.delete(t), k = m(k.s)) : g.set(k.s, k)), k;
  };
  return [b, ...c] = [...b,], b = ob(pb(ob(nb(b)), ...c)), kb(b, k => {
    for (const t of k.u) {
      l.set(m(t), t.B);
    }
  }), Array.from(l, ([{C:k}, t]) => {
    const u = k.map(({x, y:A, z:C}) => ({x, y:A, z:C,}));
    return ab(t ? u.reverse() : u, k.A, k.D);
  });
}, M = (b, c, g) => b + (c - b) * Ra(1 - Math.exp(-g * d)), qb = () => {
  const b = Ta(h[12].g, h[13].g);
  ha = Sa(M(ha, 0, 1), Ua(ha + 60 * d), h[5].g - h[6].i,);
  ea = Sa(M(ea, 0, 5), Ua(ea + 56 * d), b,);
  fa = Sa(M(fa, 0, 4), Ua(fa + 48 * d), b,);
  la = M(la, h[9].i, 0.2 + 0.3 * Pa(2 * h[9].i - 1));
  ja = M(ja, ia ? ja + (-9 - ja) * Ra(1.5 * d) : Ra(a / 3), 1,);
  oa && a > oa && (oa = 0, h4.innerHTML = "");
  h[0].j && 0.8 < h[0].g && (13 > aa ? (1 / 0 > oa && (oa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0) : ia || (1 / 0 > oa && (oa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ia = 1));
  for (const c of e) {
    c.h && (c.l = c.h());
  }
  for (const c of h) {
    c.h();
  }
  for (const c of ya) {
    c.h();
  }
}, rb = () => {
  h3.innerHTML = "Souls: " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[aa = ya.reduce((b, {j:c}) => b + c, 0)] + " / XIII";
}, sb = () => {
  localStorage.DanteSP22 = JSON.stringify([h.map(({j:b}) => b), ya.map(({j:b}) => b), da, a, la,]);
}, Q = (b, c = 1) => {
  const g = ua;
  c = {l:p, F:e.length, H:c, u:[],};
  return e.push(ua = c), b(c), ua = g, c;
}, S = (b, c = p, g) => ua.u.push(...v(b, c, g)), tb = b => {
  const c = ua, g = h.length, l = {j:0, g:0, i:0, s:c, h() {
    const m = l.j, k = l.g, t = l.i, u = c.l.multiply(b);
    l.I = u;
    3 > Wa(u.transformPoint()) && za[5] && (0.3 > k || 0.7 < k) && (l.j = m ? 0 : 1, g && 1 / 0 > oa && (oa = a + 1, h4.innerHTML = "* click *"), da = g, sb());
    l.g = M(k, m, 4);
    l.i = M(t, m, 1);
    l.l = u.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(l);
  S(G(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  S(G(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  S(G(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
}, ub = (b, ...c) => {
  let g = -1, l = 0, m = 0, k = 0, t = 0, u = 0, x = 1, A = 3;
  const C = {j:0, h() {
    if (!C.j) {
      let qa = 1, N = 1 / 0, F, D, z, E, R, J, Y;
      for (const V of f) {
        var {x:L, z:O, w:P} = V;
        O = (L = Math.hypot(q - L, w - O)) - P;
        Y ||= L < P;
        0 < O && N > O && (N = O, n = V);
        var W = L / P;
        qa = qa < W ? qa : W;
      }
      Y || ({x:F, z:D, w:z} = n, E = q - F, R = w - D, J = Math.hypot(E, R), Z = Math.atan2(-R, E), x && (m = (Math.random() - 0.5) * Math.PI / 2, A = Oa(1, A / (1 + Math.random()))), Z += m, g = -Math.cos(Z), l = Math.sin(Z), 0.1 < J && (J = (J < z ? J : z) / (J || 1), q = E * J + F, w = R * J + D));
      x = Y;
      A = M(A, 3 + 6 * (1 - qa), 3 + qa);
      y = M(y, q = M(q, q + g, A), A);
      H = M(H, w = M(w, w + l, A), A);
      k = Va(k, Math.atan2(y - t, H - u) / Ka - 180, 3 * d,);
      t = y;
      u = H;
      var Z = (C.l = K.l.multiply(b.translate(y, 0, H).rotateSelf(0, k, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.55 > Wa(Z) && (C.j = 1, W = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][aa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      oa && (oa = a + (aa && 12 > aa ? 5 : 7), h4.innerHTML = W), rb(), sb());
    }
    C.j && (C.l = e[2].l.translate(B % 4 * 1.2 - 1.7 + Math.sin(a + B) / 7, -2, 1.7 * (B / 4 | 0) - 5.5 + Pa(B % 4 - 2) + Math.cos(a / 1.5 + B) / 6,));
  },}, K = ua, B = ya.length, f = c.map(([L, O, P]) => ({x:L, z:O, w:P,}));
  let n = f[0], {x:q, z:w} = n, y = q, H = w;
  ya.push(C);
}, vb = (b, c, g, l) => {
  let m = 0, k = 0, t = 0, u = 1 / 0, x = -1 / 0, A = 1 / 0, C = -1 / 0, K = 1 / 0, B = -1 / 0;
  const f = 1.1 * (g - c), n = (new DOMMatrix($a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
  return c = r(8, q => (q = n.transformPoint({x:4 & q ? 1 : -1, y:2 & q ? 1 : -1, z:1 & q ? 1 : -1,}), m -= q.x = (f * q.x | 0) / f / q.w, k -= q.y = (f * q.y | 0) / f / q.w, t -= q.z = (f * q.z | 0) / f / q.w, q)), g = p.rotate(298, 139).translateSelf(m / 8, k / 8, t / 8), bb(c, g).map(({x:q, y:w, z:y}) => {
    u = u < q ? u : q;
    x = q < x ? x : q;
    A = A < w ? A : w;
    C = w < C ? C : w;
    K = K < y ? K : y;
    B = y < B ? B : y;
  }), K *= 0 > K ? l : 1 / l, B *= 0 < B ? l : 1 / l, p.scale(2 / (x - u), 2 / (C - A), 2 / (K - B)).translateSelf((x + u) / -2, (C + A) / -2, (K + B) / 2,).multiplySelf(g);
}, yb = () => {
  let b = !0, c, g, l, m, k, t, u, x, A, C, K, B;
  const f = () => {
    pa || !b ? wb.disconnect() : wb.connect(xb.destination);
    b4.innerHTML = "Music: " + b;
  }, n = (q = !1) => {
    if (pa !== q) {
      pa = q;
      try {
        q ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : wb.start();
      } catch {
      }
      va = 0;
      document.body.className = q ? "l m" : "l";
      f();
      rb();
    }
  };
  oncontextmenu = () => !1;
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b1.onclick = () => {
    document.body.requestFullscreen();
    n();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    n();
    va = 1;
  };
  b4.onclick = () => {
    b = !b;
    f();
  };
  b5.onclick = () => n(!0);
  onclick = q => {
    B = 1;
    pa || (q.target === hC && (za[5] = !0), va && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:q, target:w, type:y, repeat:H}) => {
    H || ((H = !!y[5] && w === document.body) && ("Escape" === q || "Enter" === q && pa) ? pa && !B || n(!pa) : 5 === (y = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[q]) ? H && (za[y] = 1) : za[y] = H);
  };
  onmousemove = ({movementX:q, movementY:w}) => {
    va && (q || w) && (Ja += 0.1 * q, Ia += 0.1 * w);
  };
  hC.ontouchstart = q => {
    if (!pa) {
      for (let {pageX:w, pageY:y, identifier:H} of q.changedTouches) {
        va && w > hC.clientWidth / 2 ? void 0 === x && (A = 0, t = w, u = y, x = H, C = Ja, K = Ia) : void 0 === m && (k = 0, g = w, l = y, m = H);
      }
      c = ca;
    }
  };
  hC.ontouchmove = q => {
    if (!pa) {
      for (let {pageX:P, pageY:W, identifier:Z} of q.changedTouches) {
        var w, y, H, L, O;
        x === Z && (Ja = C + (P - t) / 2.3, Ia = K + (W - u) / 2.3, A = 1);
        m === Z && (Z = (g - P) / 20, w = (l - W) / 20, y = 0 > Z ? -Z : Z, H = 0 > w ? -w : w, L = Math.atan2(w, Z), O = Ra(Math.hypot(w, Z) - 0.5), ma = 0.2 < y ? Math.cos(L) * O : 0, na = 0.2 < H ? Math.sin(L) * O : 0, (ma || na) && (k = 1), 2 < y && (g = P + 20 * Math.sign(Z)), 2 < H && (l = W + 20 * Math.sign(w)));
      }
    }
  };
  hC.ontouchend = q => {
    let w;
    q.preventDefault();
    for (const y of q.changedTouches) {
      y.identifier === x ? (x = void 0, A || (w = 1), A = 0) : y.identifier === m ? (m = void 0, na = ma = 0, k || (w = 1), k = 0) : w = 1;
    }
    w && q.target === hC && c && 0.02 < (q = ca - c) && 0.7 > q && (za[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    za.length = ma = na = 0;
    m = x = void 0;
    document.hidden && n(!0);
  })();
  n(!0);
}, zb = () => {
  let b = 0, c = 0, g = 2, l, m, k, t, u, x, A, C, K, B, f, n, q, w, y, H;
  const L = {x:0, y:0, z:0,}, O = new Int32Array(256), P = new Uint8Array(65536), W = () => {
    for (let N = 32; 128 > N; N += 2) {
      let F = 0, D = 0, z = 0, E = 0;
      const R = 512 * N;
      for (let J = 1 & N; 128 > J; J += 2) {
        const Y = R + 4 * J;
        let V = R + 4 * (127 - J);
        const ba = P[Y] / 255, ka = P[1 + V] / 255, ra = 1 - Pa(J / 63.5 - 1);
        10 < J && 118 > J && (F = Oa(F, Oa(ba * ra, ba * P[V] / 255)), D = Oa(D, Oa(ka * ra, ka * P[1 + Y] / 255)));
        (54 > J || 74 < J) && 1e-3 < (V = (1 - ra) * (ka < ba ? ba : ka) / 3) && (64 > J && V > z ? z = V : 64 < J && V > E && (E = V));
      }
      Pa(E - z) > (0 > n ? -n : n) && (n = E - z);
      Pa(D - F) > (0 > q ? -q : q) && (q = D - F);
    }
  }, Z = () => {
    let N = 0, F = 0, D = 0, z = 0;
    O.fill(0);
    for (let R = 0; 31 > R; ++R) {
      let J = 0;
      const Y = 512 * R;
      for (let V = 0; 128 > V; V++) {
        var E = Y + 4 * V;
        let ba = (P[E] + P[1 + E]) / 255;
        E = P[2 + E];
        14 < V && 114 > V && (J += ba);
        E && ba && (ba = O[E] + 1, O[E] = ba, N > ba || (N = ba, F = E));
      }
      3 > J && 5 < R && (z += R / 32);
      3 < J && (7 < R && (D += R / 15), u = 1);
    }
    F && (u = 1);
    A = M(A, u ? 6.5 : 8, 4);
    L.y += D / 41 - (u || A) * z / 41 * A * d;
    g ? F && (g = 0, m = F) : m = F || k;
    k = F;
  }, qa = () => {
    var N = 1 === e[m].H && e[m].l || p, {x:F, y:D, z} = (g ? ({x:D, y:F, z} = h[da].I.transformPoint({x:0, y:12, z:-2.5,}), 1 < g && (g = 1, f = Ca.y = F), Ca.x = D, Ca.z = z) : ({x:D, z} = ((F = N.inverse()).m41 = 0, F.m42 = 0, F.m43 = 0, F.transformPoint({x:n, z:q, w:0,})), L.x += D, L.z += z), m !== t && (t = m, {x:F, y:D, z} = N.inverse().transformPoint(Ca), L.x = F, L.y = D, L.z = z), N.transformPoint(L));
    N = F - Ca.x;
    let E = z - Ca.z;
    Ca.x = F;
    Ca.y = D;
    Ca.z = z;
    m && (K = N / d, B = E / d);
    1 === m && (h[9].j = -15 > F && 0 > z ? 1 : 0);
    D < (-25 > F || 109 > z ? -25 : -9) && (K = B = A = C = 0, k = m = h[da].s.F, g = 2);
    f = Sa(M(f, D, 2), D, 8 * Pa(f - D));
    void 0 === w && (Da = w = F, Ga = (y = f = D) + 13, Ha = (H = z) + -36);
    w = M(w, F, Na(Oa(0.4, Pa(w - F) - 1.5)));
    y = M(y, D, Na(Oa(0.4, Pa(y - D) - 2.2)));
    H = M(H, z, Na(Oa(0.4, Pa(H - z) - 1.5)));
    va ? (Da = M(Da, F, 666 * g + 18), Ga = M(Ga, f + 1.5, 666 * g + 18), Ha = M(Ha, z, 666 * g + 18)) : (Da = M(Da, w, 2), Ga = M(Ga, Oa(y + 13, 6), 2), Ha = M(Ha, H + -18, 2), N = Da - w, E = Ha - H, (D = Qa(Math.hypot(E, N), 0.1)) && (Ia = 90 - Math.atan2(D, Ga - y) / Ka, Ja = 270 + Math.atan2(E, N) / Ka));
    Ia = Oa(87 > Ia ? Ia : 87, -87);
    Ja = Ua(Ja);
    const R = e[37].l = p.translate(F, f, z).rotateSelf(0, c = Va(c, b, 8 * d),);
    [38, 39,].map((J, Y) => {
      e[J].l = R.translate(0, x * Ra(0.45 * Math.sin(9.1 * a + Math.PI * (Y - 1) - Math.PI / 2)),).rotateSelf(x * Math.sin(9.1 * a + Math.PI * (Y - 1)) * 0.25 / Ka, 0);
    });
  };
  wa = () => {
    let N = ma + (za[0] ? 1 : 0) - (za[2] ? 1 : 0), F = na + (za[1] ? 1 : 0) - (za[3] ? 1 : 0), D = navigator.getGamepads()[0];
    if (D) {
      var z = J => E[J]?.pressed || 0 < E[J]?.value ? 1 : 0;
      const E = D.buttons, R = D.axes;
      D = z(3) || z(2) || z(1) || z(0);
      N += z(14) - z(15) - Qa(R[0], 0.2);
      F += z(12) - z(13) - Qa(R[1], 0.2);
      va && (Ia += 80 * Qa(R[3], 0.3) * d, Ja += 80 * Qa(R[2], 0.3) * d);
      D && !l && (za[5] = 1);
      l = D;
    }
    z = Math.atan2(F, N);
    D = Qa(Ra(Math.hypot(F, N)), 0.05);
    N = D * Math.cos(z);
    F = D * Math.sin(z);
    x = M(x, D, 10);
    D && (b = 90 - z / Ka);
    u = q = n = 0;
    X.fa7();
    X.r9r(0, 0, 128, 128, 6408, 5121, P);
    X.iay(36008, [36064, 36096,]);
    X.iay(36009, [36064, 36096,]);
    NO_INLINE(W)();
    NO_INLINE(Z)();
    K = M(K, 0, u ? 8 : 4);
    B = M(B, 0, u ? 8 : 4);
    z = Ra(1 - 5 * Oa(0 > n ? -n : n, 0 > q ? -q : q));
    m || (n += K * z * d, q += B * z * d);
    C = M(C, u ? (D ? u ? 7 : 4 : 0) * z : 0, u ? 0.1 < z ? 10 : D ? 5 : 7 : 1,);
    z = va ? Ja * Ka : Math.PI;
    D = Math.sin(z) * C * d;
    z = Math.cos(z) * C * d;
    n -= N * z - F * D;
    q -= N * D + F * z;
    NO_INLINE(qa)();
  };
  x = K = B = A = C = 0;
  k = m = h[da].s.F;
}, Ab = (b, c = 35633) => (c = X.c6x(c), X.s3c(c, b), X.c6a(c), c), Gb = (b, c) => {
  const g = {}, l = X.c1h();
  return X.abz(l, b), X.abz(l, Ab(c, 35632)), X.l8l(l), m => m ? g[m] || (g[m] = X.gan(l, m)) : X.u7y(l);
}, Hb = (b, c, g, l) => {
  if (pa) {
    g = p.rotate(0, 40 * Math.sin(ca) - 70);
    for (var m of [37, 38, 39,]) {
      Za(g, Ma, m - 1);
    }
    X.uae(b, !1, Ma);
    X.d97(4, e[39].G - e[37].v, 5123, 2 * e[37].v,);
  } else {
    for (m = 0; e.length > m; ++m) {
      e[m].H && Za(e[m].l, Ma, m - 1);
    }
    X.uae(b, !1, Ma);
    X.d97(4, (c ? e[39].G : e[37].v) - 3, 5123, 6,);
    for (c = 0; 13 > c; ++c) {
      Za(ya[c].l, Ma, c);
    }
    for (c = 0; h.length > c; ++c) {
      Za(h[c].l, Ma, c + 13), l || (Ma[16 * (c + 13) + 15] = 1 - h[c].g);
    }
    X.uae(b, !1, Ma);
    X.das(4, e[g].G - e[g].v, 5123, 2 * e[g].v, 13,);
    X.das(4, e[40].G - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Ib = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Jb = b => Math.sin(b * Math.PI * 2), Kb = b => 0.5 > b % 1 ? 1 : -1, Lb = b => b % 1 * 2 - 1, Mb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Tb = b => {
  let c = 0;
  const g = () => {
    const k = xb.createBuffer(2, 5362944, 44100);
    for (let t = 0; 2 > t; t++) {
      for (let u = t, x = k.getChannelData(t); 10725888 > u; u += 2) {
        x[u >> 1] = m[u] / 65536;
      }
    }
    wb.buffer = k;
    wb.loop = !0;
    Ib(b);
  }, l = () => {
    let k = 0, t, [u, x, A, C, K, B, f, n, q, w, y, H, L, O, P, W, Z, qa, N, F, D] = Aa[c];
    w = w * w * 4;
    for (const Y of [5513, 4562, 3891,]) {
      let V = 0, ba = 0, ka, ra, Bb;
      const Cb = [], Ba = new Int32Array(768 * Y), Nb = 2 ** (H - 9) / Y, Ob = Math.PI * 2 ** (Z - 8) / Y, lb = N * Y & -2;
      for (let eb = 0; 11 >= eb; ++eb) {
        for (let fb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + eb]; 32 > fb; ++fb) {
          const Eb = (32 * eb + fb) * Y;
          for (var z = 0; 4 > z; ++z) {
            if (ka = 0, Db && (ka = D[Db - 1].charCodeAt(fb + 32 * z) - 40, ka += 0 < ka ? 106 : 0), ka) {
              var E;
              if (!(E = Cb[ka])) {
                E = ka;
                let T = void 0, sa = void 0;
                var R = Y, J = ka;
                let Pb = 0, Qb = 0;
                const Rb = 2 > c ? Lb : Jb, Sb = 2 > c ? 1 > c ? Kb : Mb : Jb, Fb = new Int32Array(n + q + w);
                for (let Ea = 0, mb = 0; n + q + w > Ea; ++Ea, ++mb) {
                  let Fa = 1;
                  n > Ea ? Fa = Ea / n : n + q > Ea || (Fa = (1 - (Fa = (Ea - n - q) / w)) * 3 ** (-y / 16 * Fa));
                  0 > mb || (mb -= 4 * R, sa = 396e-5 * 2 ** ((J + x - 256) / 12), T = 396e-5 * 2 ** ((J + K - 256) / 12) * (1 + (c ? 0 : 0.007200)));
                  Fb[Ea] = 80 * (Rb(Pb += sa * Fa ** (A / 32)) * u + Sb(Qb += T * Fa ** (B / 32)) * C + (f ? (2 * Math.random() - 1) * f : 0)) * Fa | 0;
                }
                E = Cb[E] = Fb;
              }
              for (let T = 0, sa = 2 * Eb; E.length > T; ++T, sa += 2) {
                Ba[sa] += E[T];
              }
            }
          }
          for (let T, sa = 0; Y > sa; ++sa) {
            z = 0, E = 2 * (Eb + sa), ((T = Ba[E]) || Bb) && (ra = 308e-5 * L, 1 !== c && 4 !== c || (ra *= Math.sin(Nb * E * Math.PI * 2) * F / 512 + 0.5), ra = 1.5 * Math.sin(ra), V += ra * ba, t = (1 - O / 255) * (T - ba) - V, ba += ra * t, T = 4 === c ? ba : 3 === c ? t : V, c || (T = 1 > (T *= 22e-5) ? -1 < T ? Math.sin(T / 4 * Math.PI * 2) : -1 : 1, T /= 22e-5), T *= P / 32, Bb = 1e-5 < T * T, t = Math.sin(Ob * E) * W / 512 + 0.5, z = T * (1 - t), T *= t), E < lb || (z += Ba[1 + E - lb] * qa / 
            255, T += Ba[E - lb] * qa / 255), m[k + E] += Ba[E] = z, ++E, m[k + E] += Ba[E] = T;
          }
        }
      }
      k += Ba.length;
    }
    Ib(5 > ++c ? l : g);
  }, m = new Int32Array(10725888);
  Ib(l);
}, Ub = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), U = NO_INLINE((b, c, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b), xb = new AudioContext(), wb = xb.createBufferSource(), X = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in X) {
  X[b[0] + [...b,].reduce((c, g, l) => (c * l + g.charCodeAt(0)) % 434, 0).toString(36)] = X[b];
}
Ib(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      const l = n => {
        let q, w;
        X.f1s();
        requestAnimationFrame(l);
        y = (n - (ta || n)) / 1e3;
        pa ? (d = 0, za[5] = 0) : d = 0.066 < y ? 0.066 : y;
        a += d;
        ca += y;
        ta = n;
        0 < d && (qb(), wa(), za[5] = 0);
        var y = pa ? p.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ra(hC.clientWidth / 1e3)) : p.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ga, -Ha,);
        0 < d && ({x:n, y:q, z:w} = Ca, x(), X.b6o(36160, B), X.v5y(0, 0, 128, 128), X.c4s(16640), X.cbf(!0, !1, !0, !1), X.uae(x("b"), !1, Za(p.rotate(0, 180).invertSelf().translateSelf(-n, -q, 0.3 - w)),), Hb(x("c"), 0, 41, 0), X.c4s(256), X.cbf(!1, !0, !0, !1), X.uae(x("b"), !1, Za(p.translate(-n, -q, -w - 0.3))), Hb(x("c"), 0, 41, 0), X.f1s());
        t();
        X.b6o(36160, K);
        X.v5y(0, 0, 2048, 2048);
        C[0](vb(y, 0.3, 55, 10));
        C[1](vb(y, 55, 177, 11));
        A();
        X.b6o(36160, null);
        X.v5y(0, 0, X.drawingBufferWidth, X.drawingBufferHeight);
        X.cbf(!0, !0, !0, !0);
        X.c4s(16640);
        C[0]();
        C[1]();
        X.uae(A("a"), !1, $a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
        X.uae(A("b"), !1, Za(y));
        X.ubu(A("k"), Da, Ga, Ha);
        Hb(A("c"), !va, 42, 0);
        u();
        X.ubu(u("j"), X.drawingBufferWidth, X.drawingBufferHeight, ca);
        pa ? X.ubu(u("k"), 0, 0, 0) : X.ubu(u("k"), Da, Ga, Ha);
        X.uae(u("b"), !1, Za(y.inverse()));
        X.d97(4, 3, 5123, 0);
        X.b6o(36160, B);
        X.f1s();
      }, m = g;
      let k = Ab("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const t = Gb(Ab("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), u = Gb(Ab("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), x = Gb(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), A = Gb(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), C = r(2, n => {
        const q = new Float32Array(16), w = X.c25();
        return X.a4v(33984 + n), X.b9j(3553, w), X.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), X.t2z(3553, 10241, 9729), X.t2z(3553, 10240, 9729), X.t2z(3553, 34893, 515), X.t2z(3553, 34892, 34894), X.t2z(3553, 10243, 33071), X.t2z(3553, 10242, 33071), y => {
          y ? (Za(y, q), X.uae(t("b"), !1, q), X.fas(36160, 36096, 3553, w, 0), X.c4s(256), Hb(t("c"), !va, 42, 1)) : X.uae(A(n ? "j" : "i"), !1, q);
        };
      }), K = X.c5w(), B = (k = X.c3z(), X.c5w()), f = X.c25();
      x();
      X.uae(x("a"), !1, $a(1.4, 0.59, 1e-4, 1));
      A();
      X.ubh(A("q"), 2);
      X.ubh(A("h"), 1);
      X.ubh(A("g"), 0);
      u();
      X.ubh(u("q"), 2);
      X.b6o(36160, K);
      X.d45([0,]);
      X.r9l(0);
      X.b6o(36160, B);
      X.bb1(36161, k);
      X.r4v(36161, 33189, 128, 128);
      X.f8w(36160, 36096, 36161, k);
      X.a4v(33986);
      X.b9j(3553, f);
      X.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      X.fas(36160, 36064, 3553, f, 0);
      X.b9j(3553, X.c25());
      X.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, m);
      X.gbn(3553);
      X.t2z(3553, 10241, 9987);
      X.t2z(3553, 10240, 9729);
      X.e8z(2929);
      X.e8z(2884);
      X.c70(1);
      X.c7a(1029);
      X.d4n(515);
      X.c5t(0, 0, 0, 1);
      qb();
      NO_INLINE(zb)();
      NO_INLINE(yb)();
      requestAnimationFrame(l);
    }
  }, g = new Image();
  g.onload = g.onerror = c;
  g.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      let k = 0, t;
      const u = [], x = [], A = [], C = [], K = new Map(), B = new Int32Array(8), f = w => {
        let {x:y, y:H, z:L} = t[w], O = (q[0] = y, q[1] = H, q[2] = L, w = "" + (t.D ? n : B), K.get(w));
        return void 0 !== O ? (y = 3 * O, C[y] = (C[y++] + B[5]) / 2, C[y] = (C[y++] + B[6]) / 2, C[y] = (C[y] + B[7]) / 2) : (K.set(w, O = K.size), x.push(y, H, L, q[3]), A.push(B[4]), C.push(B[5], B[6], B[7])), O;
      }, n = new Int32Array(B.buffer, 0, 5), q = new Float32Array(B.buffer);
      for (const w of e) {
        for (t of (q[3] = 40 === w.F ? -14 : w.H && w.F, w.u)) {
          const {x:y, y:H, z:L} = Ya(t);
          B[4] = 0 | t.A;
          B[5] = 32767 * y;
          B[6] = 32767 * H;
          B[7] = 32767 * L;
          for (let O = 2, P = f(0), W = f(1); t.length > O; ++O) {
            u.push(P, W, W = f(O));
          }
        }
        w.u = null;
        w.v = k;
        w.G = k = u.length;
      }
      X.b11(34962, X.c1b());
      X.b2v(34962, new Float32Array(x), 35044);
      X.v7s(0, 4, 5126, !1, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Int16Array(C), 35044);
      X.v7s(1, 3, 5122, !0, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Uint32Array(A), 35044);
      X.v7s(2, 4, 5121, !0, 0, 0);
      X.b11(34963, X.c1b());
      X.b2v(34963, new Uint16Array(u), 35044);
      X.e3x(0);
      X.e3x(1);
      X.e3x(2);
      Ib(c);
      try {
        const [w, y, H, L, O] = JSON.parse(localStorage.DanteSP22,);
        h.map((P, W) => P.g = P.i = P.j = W ? 0 | w[W] : 0);
        ya.map((P, W) => P.j = 0 | y[W]);
        da = H;
        a = L;
        la = O;
      } catch {
      }
      ja = 0 > da ? 0 : 1 < da ? 1 : da;
    });
    const l = r(11, k => p.translate(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), m = r(10, k => db(bb(cb(18), l[k]).reverse(), bb(cb(18), l[k + 1]), 1,)).flat();
    Q(() => S([xa.slice(1),], p.translate(-2).scale3d(3).rotate(90, 0)), 0);
    Q(() => {
      const k = (f, n, q) => Q(w => {
        w.h = () => p.translate(x() * Math.sin(3 * f + a * f) * n);
        xa.map(({x:y, z:H}) => {
          S(G(11, 1), p.translate(4 * y, 4, q + 4 * H).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6),);
          S(G(), p.translate(4 * y, 7, q + 4 * H).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3),);
        });
        S(I(v(G(), p.translate(0, 0, q).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(y => v(G(), p.translate(5 * y, 0.2, q).rotate(-30 * y).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3),)),),);
        S(G(), p.translate(0, -3, q).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
      }), t = (f, n, q) => p.translate(f + Math.sin(a + 2) / 5, n + Math.sin(0.8 * a) / 3, q).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), u = f => I(v(G(), p.translate(0, -f / 2).scale(6, f - 1, 2.2)), v(G(), p.translate(0, -f / 2 - 6).scale(4, f - 3, 4)), v(G(32, 1), p.translate(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), x = () => {
        var f = h[2].i, n = 1 - h[4].i;
        return f < n ? f : n;
      }, A = I(v(G(20, 1, 1.15, 1), p.translate(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7),), v(G(20, 1, 1.3, 1), p.translate(0, -2.5).scale(2.6, 1, 3), U(0.7, 0.4, 0.25, 0.2),), v(G(), p.translate(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),), C = r(7, f => v(G(6, 1), p.translate(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38),)).flat(), K = (Q(f => {
        f.h = () => t(-12, 4.2, 40 * ja - 66);
        S(A);
        tb(p.translate(0, -3, 4));
      }), tb(p.translate(-5.4, 1.5, -19).rotate(0, -90)), ub(p.translate(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), ub(p.translate(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...cb(18).map(({x:f, z:n}) => [7 * f, 10 * n, 4.5 - 2 * (0 > f ? -f : f),]),), S(G(), p.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2),), xa.map(({x:f, z:n}) => S(G(6), p.translate(3 * f, 3, 15 * n).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4),)), [-23, 22,].map(f => S(G(), p.translate(0, 0, f).scale(3, 
      1, 8), U(0.9, 0.9, 0.9, 0.2))), [-15, 15,].map((f, n) => {
        S(G(), p.translate(0, 6.3, f).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
        S(G(), p.translate(0, 1, f).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
        Q(q => {
          q.h = () => p.translate(0, 0, f).scale(1, Ra(1.22 - h[n + 1].g), 1);
          S(C);
        });
      }), r(5, f => r(2, n => S(m, p.translate(18.5 * (n - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * n).scale(1.2, 10, 1.2,), U(1, 1, 0.8, 0.2),)),), S(G(), p.translate(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)), S(G(), p.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2),), S(G(5), p.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4),), S(G(), p.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 
      0.2, 0.2, 0.5),), S(I(pb(v(G(6, 0, 0, 0.3), p.translate(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2),), v(G(6), p.translate(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5),), v(G(6, 0, 0, 0.3), p.translate(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2),),), v(G(5), p.scale(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)), v(G(5, 0, 1.5), p.translate(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2),), v(G(), p.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5),), 
      v(G(6), p.translate(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5),),),), Q(f => {
        f.h = () => p.translate(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        S(G(5), p.translate(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
        tb(p.translate(0, 1.2));
      }), tb(p.translate(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), Q(f => {
        f.h = () => p.translate(x() * Math.sin(a / 1.5 + 2) * 12);
        S(I(pb(v(G(), p.scale(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)), v(G(6), p.scale(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)), v(G(), p.translate(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5),), v(G(16, 1, 0, 4), p.scale(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2),),), v(G(), p.scale(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),), p.translate(0, 0, 45),);
        ub(p.translate(0, 2.8, 45), [0, 0, 4.5,]);
      }), S(G(), p.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), Q(f => {
        f.h = () => p.translate(9.8 * (1 - x()));
        S(G(3), p.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2),);
        S(G(8), p.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2),);
        S(G(), p.translate(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
        S(G(), p.translate(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
        tb(p.translate(-23, -0.5, 66.5));
      }), Q(f => {
        f.h = () => p.translate(0, Ra(1 - 5 * x()) * Ta(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        S(G(), p.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2),);
        S(I(v(G(), p.scale(3, 1.4, 2.7)), v(G(), p.scale(1.2, 8, 1.2)),), p.translate(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2),);
      }), Q(f => {
        f.h = () => p.translate(0, 0, Ra(1 - 5 * x()) * Ta(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        S(I(v(G(), p.translate(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), v(G(), p.translate(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2),),),);
        S(G(), p.translate(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
      }), Q(f => {
        f.h = () => p.translate(0, -6.5 * h[4].i);
        S(G(6), p.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4),);
      }), tb(p.translate(-55, -1.1, 46).rotate(0, 90)), S(G(6), p.translate(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)), S(G(7), p.translate(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)), [...v(G(), p.translate(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2),), ...I(v(G(6), p.rotate(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)), v(G(4, 0, 0.01), p.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3),), v(G(6), p.rotate(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)), 
      ...[5, 0, -5,].map(f => v(G(5), p.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3),)),),]), B = (S(K, p.translate(-53, 0, 55)), Q(f => {
        f.h = () => p.translate(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ha, 0,);
        S(K);
      }, 2), S(G(), p.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2),), S(G(3, 0, -0.5), p.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2),), S(I(pb(v(G(), p.translate(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2),), v(G(), p.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2),), v(G(), p.translate(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2),), v(G(), p.translate(-96, -2.6, 73).rotate(0, 
      45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2),), v(G(6), p.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3),), v(G(), p.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2),), v(G(), p.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2),),), v(G(8), p.translate(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4),), v(G(8), p.translate(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5),), v(G(8), p.translate(-100, 
      -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5),),),), ub(p.translate(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), ub(p.translate(-89, 0.2, 80), [0, 0, 6,]), S(I(v(G(), p.translate(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4),), v(G(), p.translate(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4),), v(G(20, 1), p.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4),),),), Q(f => {
        f.h = () => p.translate(-99.7, -1.9, 63.5).scale(1, Ra(1.1 - h[6].g), 1);
        S(C);
      }), xa.map(({x:f, z:n}) => {
        S(G(6), p.translate(7 * f - 100, -3, 7 * n + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(q => S(G(6), p.translate(7 * f - 100, q, 7 * n + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8),));
      }), r(7, f => {
        S(G((23 * f + 1) % 5 + 5, 0, 0.55), p.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), U(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), S(G(), p.translate(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)), S(G(4), p.translate(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)), S(G(12, 1), p.translate(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1),), tb(p.translate(-86, -7.5, 31)), Q(f => {
        f.h = () => p.translate(0, 3.5 * (1 - Oa(h[6].g, h[7].g)) + Ta(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24,].map(n => S(G(), p.translate(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2),));
      }), Q(f => {
        f.h = () => p.translate(0, Ta(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ta(h[7].i, h[6].i),);
        [6, 18,].map(n => S(G(), p.translate(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2),));
      }), S(I(pb(v(G(5), p.translate(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3),), v(G(5), p.scale(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)), v(G(), p.scale(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)),), v(G(5), p.scale(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),), p.translate(-38.9, -11.3, 17),), tb(p.translate(-38.9, -9.6, 10)), Q(f => {
        f.h = () => p.translate(0, -7.3 * h[7].i);
        S(I(pb(v(G(5), p.translate(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5),), v(G(5), p.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5),), v(G(5), p.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5),),), v(G(5), p.scale(4, 8, 4), U(0.2, 0.4, 0.5, 0.5)), v(G(5), p.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5),),), p.translate(-38.9, -11.3, 17),);
        ub(p.translate(-39.1, -0.6, 17).rotate(11), ...cb(15).map(({x:n, z:q}) => [3 * n, 3 * q, 1.2,]),);
      }), xa.map(({x:f, z:n}) => {
        S(G(14, 1), p.translate(9 * f - 38.9, -7.3, 11 * n + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(q => S(G(17, 1), p.translate(9 * f - 38.9, -7.3, 11 * n + 17).translate(0, q - 4).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3),));
      }), S(I(pb(v(G(6), p.translate(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3),), v(G(), p.translate(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3),),), ...r(6, f => r(6, n => v(G(6), p.translate(4.6 * n - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * n)).scale(2, 5, 2,), U(0.7, 0.7, 0.7, 0.3),))).flat(),), p.translate(-38.9, -11.3, 17),), ub(p.translate(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), S(G(5), p.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), U(0.8, 0.1, 0.25, 0.4),), tb(p.translate(-84, -0.5, 85).rotate(0, 45)), Q(f => {
        f.h = () => t(-123, 1.4, 55 + -65 * la);
        S(A);
        tb(p.translate(0, -3, -4).rotate(0, 180));
      }), I(v(G(), p.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3),), v(G(3), p.translate(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2,].map(f => v(G(), p.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3),)),));
      Q(f => {
        f.h = () => p.translate(0, -2, Ta(h[10].g, h[11].g) * Pa(Math.sin(1.1 * a)) * -8.5 + 10);
        r(2, n => S(B, p.translate(9 * n - 110 + (1 & n), 1.7, -12)));
      });
      Q(f => {
        f.h = () => p.translate(0, -2, Ta(h[10].g, h[11].g) * Pa(Math.sin(2.1 * a)) * -8.5 + 10);
        r(2, n => S(B, p.translate(9 * (n + 2) - 110 + (1 & n), 1.7, -12)),);
      });
      Q(f => {
        f.h = () => p.translate(0, -2, -8.5 * Oa((1 - h[10].g) * (1 - Ta(h[10].g, h[11].g)), Ta(h[10].g, h[11].g) * Pa(Math.sin(1.5 * a)),) + 10,);
        r(3, n => S(B, p.translate(9 * n - 106, 1.7, -12)));
      });
      S(I(pb(v(G(), p.translate(26.5, -1.6, 10).scale(20, 2.08, 3)), v(G(), p.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...r(4, f => v(G(), p.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...r(3, f => v(G(), p.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), p.translate(-123, 0, -12), U(0.5, 0.5, 0.6, 0.2),);
      tb(p.translate(-116, -1.4, -18).rotate(0, 180));
      S(G(), p.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2),);
      S(G(6), p.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2),);
      S(G(), p.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3),);
      S(G(8), p.translate(-114, -17, -2).scale(2, 15, 2), U(0.6, 0.6, 0.6, 0.3));
      S(G(8), p.translate(-79, -17, -2).scale(2, 15, 2), U(1, 1, 1, 0.3));
      S(G(), p.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3),);
      r(3, f => {
        S(u(16), p.translate(12 * f - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3),);
        S(u(16), p.translate(-77, -9, -12 * f - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3),);
      });
      S(I(v(G(12), p.translate(-77, -14.5, -12).scale(4, 17.5, 4), U(0.7, 0.7, 0.7, 0.2),), v(G(), p.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), U(0.4, 0.5, 0.6, 0.2),), v(G(), p.translate(-77, 0.1, -14).scale(1.5, 2, 2), U(0.4, 0.5, 0.6, 0.2),), v(G(12), p.translate(-77, 3.1, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2),),),);
      S(G(), p.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3),);
      S(G(9), p.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), U(0.5, 0.5, 0.5, 0.3),);
      S(I(v(G(), p.translate(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1),), v(G(9), p.translate(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2),),),);
      tb(p.translate(-98, -4.4, -40).rotate(0, 90));
      ub(p.translate(-115, 0.2, -12), [0, 0, 3.5,]);
      ub(p.translate(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      S(I(pb(v(G(6, 0, 0, 0.6), p.translate(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2),), v(G(), p.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2),),), v(G(5), p.translate(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2),),),);
      r(4, f => Q(n => {
        n.h = () => {
          const q = Ta(h[8].i, h[12].i);
          return p.translate((2 < f ? 2 * (1 - q) + q : 0) - 100, q * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + (0.05 > q ? 0.05 : q) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        S(G(6), p.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), U(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Q(f => {
        f.h = () => {
          const n = Ta(h[8].i, h[12].i);
          return p.translate(2.5 * (1 - n) - 139.7, -3 * (1 - h[8].g) + n * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * n + 3), 0);
        };
        S(I(v(G(10), p.scale(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), v(G(10), p.scale(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5)),),);
        S(G(15, 1), p.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3),);
        S(G(10), p.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3),);
        S(G(5), p.translate(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5),);
        tb(p.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(n => S(m, p.rotate(90 * -n, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2),));
        ub(p.translate(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        S(G(12, 1), p.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(n => S(G(15, 1), p.translate(-7.5 * f - 100, n + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4),));
        S(m, p.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), U(1, 1, 0.8),);
        S(I(v(G(), p.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4),), v(G(), p.scale(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)), v(G(28, 1), p.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5),), v(G(5), p.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5),), v(G(5), p.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5),),), p.translate(f - 100, 0.7, 97),);
      });
      Q(f => {
        f.h = () => p.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        S(C);
      });
      S(I(v(G(), p.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1),), v(G(45, 1), p.translate(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1),),),);
      Q(f => {
        f.h = () => p.translate(-81, 0.6, 106).rotate(0, 40 + ea);
        S(I(v(G(45, 1), p.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)), v(G(), p.translate(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2),),),);
        S(G(8), p.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1),);
        S(G(5), p.translate(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        ub(p.translate(0, 3), ...cb(14).map(({x:n, z:q}) => [5.6 * n, 5.6 * q, 2,]),);
      });
      Q(f => {
        f.h = () => p.translate(-65.8, 0.8, 106).rotate(0, fa);
        [-1, 1,].map(n => S(m, p.rotate(0, 90).translate(-5 * n, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * n + 90), U(1, 1, 0.8),));
        S(I(v(G(28, 1), p.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), v(G(), p.scale(9, 5, 2), U(0.3, 0, 0, 0.3)),),);
        S(v(G(28, 1), p.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        S(v(G(5), p.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      Q(f => {
        f.h = () => p.translate(-50.7, 0.8, 106).rotate(0, 180 - fa);
        S(I(v(G(28, 1), p.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), v(G(), p.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), v(G(), p.translate(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3),),),);
        S(v(G(28, 1), p.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        S(v(G(5), p.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      Q(f => {
        f.h = () => p.translate(-50.7, 0.8, 91).rotate(0, 270 + fa);
        S(I(v(G(28, 1), p.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), v(G(), p.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), v(G(), p.translate(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3),),),);
        S(v(G(28, 1), p.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        S(v(G(5), p.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      S(G(), p.translate(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      S(G(), p.translate(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      S(G(), p.translate(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      S(G(), p.translate(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      tb(p.translate(-34, 2.7, 96).rotate(-12, 0));
      S(G(5), p.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6),);
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4),].map((f, n) => Q(q => {
        q.h = () => p.translate(0, (1 - h[13].i) * (1 - h[14].i) * (n ? 0 : 3) + Ta(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * n) * 4,);
        S(G(), p.translate(-23.5, 0.5, 91 + 6.8 * n).scale(1 === n ? 2 : 3.3, 1, 3.3), f,);
        2 === n && S(G(), p.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3),);
        1 === n && S(G(), p.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => S(m, p.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), U(1, 1, 0.8),));
      r(3, f => S(u(24.7 - 0.7 * (1 & f)), p.translate(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),),);
      S(I(v(G(6, 0, 0, 0.3), p.translate(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2),), v(G(5), p.translate(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5),),),);
      tb(p.translate(0, 1.7, 82).rotate(0, 180));
      S(G(5), p.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4),);
      S(G(6), p.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3),);
      S(G(), p.translate(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      S(G(7), p.translate(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      S(I(pb(v(G(), p.translate(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4),), v(G(), p.translate(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4),),), v(G(5), p.translate(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4),),),);
      Q(f => {
        f.h = () => {
          const n = Math.sin(a);
          return p.translate(-2 * n).rotate(25 * n);
        };
        S(G(3), p.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(n => {
          S(G(6), p.translate(0, 16, n + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4),);
          S(G(), p.translate(0, 6.2, n + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Q(f => {
        f.h = () => {
          const n = Ta(Ta((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return p.translate(0, 16 * n, 8.5 * Ra(2 * n - 1) + 95);
        };
        S(G(5), p.scale(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        S(G(5), p.scale(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        tb(p.translate(0, 1.5, -1).rotate(0, 180));
      });
      ub(p.translate(0, 3, 95), ...cb(9).map(({x:f, z:n}) => [9 * f, 9 * n, 4,]),);
      ub(p.translate(0, 19, 134), [0, 0, 3.5,]);
    });
    Q(() => {
      [0, 180,].map(t => S(m, p.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8),));
      S(gb(20), p.translate(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      const k = v(I(G(15, 1), v(G(), p.translate(0, 0, 1).scale(2, 2, 0.5)),), p.rotate(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3),);
      [-1, 1,].map(t => S(k, p.translate(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      S(G(), p.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      S(gb(20), p.scale(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
    });
    [-1, 1,].map(k => Q(() => {
      S(G(10, 1), p.translate(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
    }));
    Q(() => {
      S(G(6, 1), p.scale(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      S(G(10), p.translate(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      S(G(3), p.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Q(() => {
      S(G(6).slice(0, -1), p.scale(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    Q(() => {
      S(gb(30, 24, (k, t, u) => {
        const x = t / 24, A = k * Math.PI * 2 / 30, C = x ** 0.6 * Math.PI / 2;
        k = x * x * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 === t ? {x:u.D = 0, y:-0.5, z:0,} : {x:Math.cos(A) * Math.sin(C), y:Math.cos(x * Math.PI) - x - k, z:Math.sin(A) * Math.sin(C) + Math.sin(k * Math.PI * 2) / 4,};
      }), p.scale3d(0.7), U(1, 1, 1),);
      [-1, 1,].map(k => S(gb(12), p.translate(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

