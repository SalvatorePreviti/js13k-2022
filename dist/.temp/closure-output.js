let ba = 0, ca = 0, a = 0, da = 0, fa = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, c = 0.066, oa = 1, ra, sa, ta, ua, va;
const xa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], e = [], h = [], ya = [], za = [], Fa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "),
], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "),], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
],], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",],], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],],], Ga = {x:0, y:0, z:0,}, Ha = {x:0, y:0, z:0,};
var Ia = 0, Ja = 180;
const Ka = {x:0, y:0, z:0,}, La = Math.PI / 180, n = new DOMMatrix(), Na = new Float32Array(16), Oa = new Float32Array(624), q = (d, b) => Array.from(Array(d), (g, l) => b(l)), Pa = (d, b) => b < d ? d : b, u = (d, b = 0, g = 1) => d < b ? b : g < d ? g : d, Qa = (d, b) => b < Math.abs(d) ? d : 0, E = (d, b, g) => (0 < g ? 1 > g ? d + (b - d) * g : b : d) || 0, Ra = (d, b) => (d = u(d), E(d, 1 - d, b)), Sa = d => Math.atan2(Math.sin(d *= La), Math.cos(d)) / La, Ta = (d, b, g) => d + (2 * (b = (b - 
d) % 360) % 360 - b) * u(g), Ua = ({x:d, y:b, z:g}) => Math.hypot(d - Ga.x, b - Ga.y, g - Ga.z), Va = ({x:d, y:b, z:g}, l) => d * l.x + b * l.y + g * l.z, Wa = d => {
  let b = 0, g = 0, l = 0, m, k = d.at(-1);
  for (m of d) {
    b += (k.y - m.y) * (k.z + m.z), g += (k.z - m.z) * (k.x + m.x), l += (k.x - m.x) * (k.y + m.y), k = m;
  }
  return m = Math.hypot(b, g, l), b /= m, g /= m, l /= m, {x:b, y:g, z:l, w:b * k.x + g * k.y + l * k.z,};
}, Xa = (d, b = Na, g = 0,) => (g *= 16, b[g++] = d.m11, b[g++] = d.m12, b[g++] = d.m13, b[g++] = d.m14, b[g++] = d.m21, b[g++] = d.m22, b[g++] = d.m23, b[g++] = d.m24, b[g++] = d.m31, b[g++] = d.m32, b[g++] = d.m33, b[g++] = d.m34, b[g++] = d.m41, b[g++] = d.m42, b[g++] = d.m43, b[g] = d.m44, b), Ya = (d, b, g, l) => [d, 0, 0, 0, 0, b, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0,], Za = (d, b, g) => (d.D = g, d.A = b, d), $a = (d, b, g = d.A) => Za(d.map(l => {
  let m, k;
  return {x:l, y:m, z:k} = l, {x:l, y:m, z:k} = b.transformPoint({x:l, y:m, z:k,}), {x:l, y:m, z:k,};
}), g, d.D,), J = (d, b, g) => d.map(l => $a(l, b, g)), ab = (d, b = 0) => q(d, g => {
  const l = Math.cos(2 * Math.PI * g / d);
  return {x:Math.sin(2 * Math.PI * g / d), y:0, z:0.01 > Math.abs(l) ? l : 0 > l ? l - b : l + b,};
}), bb = (d, b, g) => d.map((l, m, {length:k}) => Za([l, b[k - m - 1], b[k - (m + 1) % k - 1], d[(m + 1) % k],], d.A, g,)), K = (d, b, g = 0, l,) => (d = d ? ab(d, l) : xa, l = $a(d, n.translate(0, 1).scale3d(0 < g ? g : 1)), d = $a(d, n.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...bb(d, l, b), l, d,]), cb = (d, b = d, g = (l, m) => (m *= Math.PI / b, {x:Math.cos(l *= 2 * Math.PI / d) * Math.sin(m), y:Math.cos(m), z:Math.sin(l) * Math.sin(m),})) => {
  const l = [];
  for (let m = 0; d > m; m++) {
    for (let k = 0; b > k; k++) {
      const t = Za([], 0, 1);
      l.push(t);
      t.push(g(m, k, t));
      k && t.push(g((m + 1) % d, k, t));
      b - 1 > k && t.push(g((m + 1) % d, k + 1 % b, t));
      t.push(g(m, k + 1 % b, t));
    }
  }
  return l;
}, db = (d, b) => {
  var g, l, m, k = b.C;
  for (var t = 0; k.length > t; ++t) {
    if (-0.00008 > (g = Va(d, k[t]) - d.w) ? m = b : 8e-5 < g && (l = b), m && l) {
      l = [];
      m = [];
      k = b.C;
      t = b.B;
      let x = k.at(-1), w = Va(d, x) - d.w;
      for (const z of k) {
        g = Va(d, z) - d.w, 8e-5 > w && m.push(x), -0.00008 < w && l.push(x), (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g) && (w /= g - w, x = {x:x.x + (x.x - z.x) * w, y:x.y + (x.y - z.y) * w, z:x.z + (x.z - z.z) * w,}, l.push(x), m.push(x)), x = z, w = g;
      }
      return {o:2 < l.length && {C:Za(l, k.A, k.D), B:t, u:b,}, m:2 < m.length && {C:Za(m, k.A, k.D), B:t, u:b,},};
    }
  }
  return {o:l, m,};
}, gb = (d, b, g = Wa(b.C)) => {
  let l, m, k;
  return d ? ({o:l, m} = db(d, b), l || m || d.s.push(b), l && (d.o = gb(d.o, l, g)), m && (d.m = gb(d.m, m, g))) : ({x:l, y:m, z:g, w:k} = g, d = {x:l, y:m, z:g, w:k, s:[b,], o:0, m:0,}), d;
}, hb = (d, b, g) => {
  const l = [], m = (k, t) => {
    let {o:x, m:w} = db(k, t);
    x || w || (0 < g * Va(k, b) ? x = t : w = t);
    x && (k.o ? m(k.o, x) : l.push(x));
    w && k.m && m(k.m, w);
  };
  for (const k of b.s) {
    m(d, k);
  }
  return l;
}, ib = (d, b) => d && (b(d), ib(d.o, b), ib(d.m, b)), jb = d => d.length ? d.reduce((b, g) => gb(b, {C:g, B:0, u:0,}), 0) : d, mb = d => (ib(d, b => {
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
}), d), nb = (...d) => d.reduce((b, g) => {
  const l = [];
  if (b = jb(b), g) {
    g = jb(g);
    ib(b, m => m.s = hb(g, m, 1));
    ib(g, m => l.push([m, hb(b, m, -1),]));
    for (let [m, k] of l) {
      for (const t of k) {
        gb(b, t, m);
      }
    }
  }
  return b;
}), N = (...d) => {
  let b;
  const g = new Map(), l = new Map(), m = k => {
    let t;
    return k.u && ((t = g.get(k.u)) ? (l.delete(t), k = m(k.u)) : g.set(k.u, k)), k;
  };
  return [d, ...b] = [...d,], d = mb(nb(mb(jb(d)), ...b)), ib(d, k => {
    for (const t of k.s) {
      l.set(m(t), t.B);
    }
  }), Array.from(l, ([{C:k}, t]) => {
    const x = k.map(({x:w, y:z, z:C}) => ({x:w, y:z, z:C,}));
    return Za(t ? x.reverse() : x, k.A, k.D);
  });
}, ob = () => {
  const d = Ra(h[12].g, h[13].g);
  ia = E(E(ia, 0, 1 - Math.exp(-1 * c)), Sa(ia + 60 * c), h[5].g - h[6].i,);
  fa = E(E(fa, 0, 1 - Math.exp(-5 * c)), Sa(fa + 56 * c), d,);
  ha = E(E(ha, 0, 1 - Math.exp(-4 * c)), Sa(ha + 48 * c), d,);
  la = E(la, h[9].i, 1 - Math.exp(-(0.2 + 0.3 * Math.abs(2 * h[9].i - 1)) * c));
  ka = E(ka, ja ? E(ka, -9, 1 - Math.exp(-1.5 * c)) : u(a / 3), 1 - Math.exp(-1 * c));
  oa && a > oa && (oa = 0, h4.innerHTML = "");
  h[0].l && 0.8 < h[0].g && (13 > ba ? (1 / 0 > oa && (oa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0) : ja || (1 / 0 > oa && (oa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ja = 1));
  for (const b of e) {
    b.h && (b.j = b.h());
  }
  for (const b of h) {
    b.h();
  }
  for (const b of ya) {
    b.h();
  }
}, pb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ba = ya.reduce((d, {l:b}) => d + b, 0)] + " / XIII";
}, qb = () => {
  localStorage.I = JSON.stringify([h.map(({l:d}) => d), ya.map(({l:d}) => d), da, a, la,]);
}, Q = (d, b = 1) => {
  const g = ta;
  b = {j:n, H:e.length, G:b, s:[],};
  return e.push(ta = b), d(b), ta = g, b;
}, V = (d, b = n, g) => ta.s.push(...J(d, b, g)), rb = d => {
  const b = ta, g = h.length, l = {l:0, g:0, i:0, u:b, h() {
    const m = l.l, k = l.g, t = l.i, x = b.j.multiply(d);
    l.J = x;
    3 > Ua(x.transformPoint()) && za[5] && (0.3 > k || 0.7 < k) && (l.l = m ? 0 : 1, g && 1 / 0 > oa && (oa = a + 1, h4.innerHTML = "* click *"), da = g, qb());
    l.g = E(k, m, 1 - Math.exp(-4 * c));
    l.i = E(t, m, 1 - Math.exp(-1 * c));
    l.j = x.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(l);
  V(K(5), d.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
  V(K(5), d.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
  V(K(), d.translate(0, -0.4).scale(0.5, 0.1, 0.5), X(0.5, 0.5, 0.4));
}, sb = (d, ...b) => {
  let g = -1, l = 0, m = 0, k = 0, t = 0, x = 0, w = 1, z = 3;
  const C = {l:0, h() {
    if (!C.l) {
      let pa = 1, Aa = 1 / 0, Ba, O, D, y, B, H, M;
      for (const S of f) {
        var {x:P, z:I, w:R} = S;
        I = (P = Math.hypot(r - P, v - I)) - R;
        M ||= P < R;
        0 < I && Aa > I && (Aa = I, p = S);
        var T = P / R;
        pa = pa < T ? pa : T;
      }
      M || ({x:Ba, z:O, w:D} = p, y = r - Ba, B = v - O, H = Math.hypot(y, B), aa = Math.atan2(-B, y), w && (m = (Math.random() - 0.5) * Math.PI / 2, z = u(z / (1 + Math.random()))), aa += m, g = -Math.cos(aa), l = Math.sin(aa), 0.1 < H && (H = (H < D ? H : D) / (H || 1), r = y * H + Ba, v = B * H + O));
      w = M;
      z = E(z, 6 * (1 - pa) + 3, 1 - Math.exp(-(pa + 3) * c));
      T = r = E(r, r + g, 1 - Math.exp(-z * c));
      A = E(A, T, 1 - Math.exp(-z * c));
      T = v = E(v, v + l, 1 - Math.exp(-z * c));
      G = E(G, T, 1 - Math.exp(-z * c));
      k = Ta(k, Math.atan2(A - t, G - x) / La - 180, 3 * c,);
      t = A;
      x = G;
      var aa = (C.j = F.j.multiply(d.translate(A, 0, G).rotateSelf(0, k, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.55 > Ua(aa) && (C.l = 1, T = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ba] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      oa && (oa = a + (ba && 12 > ba ? 5 : 7), h4.innerHTML = T), pb(), qb());
    }
    C.l && (C.j = e[2].j.translate(L % 4 * 1.2 - 1.7 + Math.sin(a + L) / 7, -2, 1.7 * (L / 4 | 0) - 5.5 + Math.abs(L % 4 - 2) + Math.cos(a / 1.5 + L) / 6,));
  },}, F = ta, L = ya.length, f = b.map(([P, I, R]) => ({x:P, z:I, w:R,}));
  let p = f[0], {x:r, z:v} = p, A = r, G = v;
  ya.push(C);
}, tb = (d, b, g, l) => {
  let m = 0, k = 0, t = 0, x = 1 / 0, w = -1 / 0, z = 1 / 0, C = -1 / 0, F = 1 / 0, L = -1 / 0;
  const f = 1.1 * (g - b), p = (new DOMMatrix(Ya(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(d).invertSelf();
  return b = q(8, r => (r = p.transformPoint({x:4 & r ? 1 : -1, y:2 & r ? 1 : -1, z:1 & r ? 1 : -1,}), m -= r.x = (f * r.x | 0) / f / r.w, k -= r.y = (f * r.y | 0) / f / r.w, t -= r.z = (f * r.z | 0) / f / r.w, r)), g = n.rotate(298, 139).translateSelf(m / 8, k / 8, t / 8), $a(b, g).map(({x:r, y:v, z:A}) => {
    x = x < r ? x : r;
    w = r < w ? w : r;
    z = z < v ? z : v;
    C = v < C ? C : v;
    F = F < A ? F : A;
    L = A < L ? L : A;
  }), F *= 0 > F ? l : 1 / l, L *= 0 < L ? l : 1 / l, n.scale(2 / (w - x), 2 / (C - z), 2 / (F - L)).translateSelf((w + x) / -2, (C + z) / -2, (F + L) / 2,).multiplySelf(g);
}, wb = () => {
  let d = !0, b, g, l, m, k, t, x, w, z, C, F, L;
  const f = () => {
    ra || !d ? ub.disconnect() : ub.connect(vb.destination);
    b4.innerHTML = "Music: " + d;
  }, p = (r = !1) => {
    if (ra !== r) {
      ra = r;
      try {
        r ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : ub.start();
      } catch {
      }
      ua = 0;
      document.body.className = r ? "l m" : "l";
      f();
      pb();
    }
  };
  oncontextmenu = () => !1;
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.I = "", location.reload());
  };
  b1.onclick = () => {
    document.body.requestFullscreen();
    p();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    p();
    ua = 1;
  };
  b4.onclick = () => {
    d = !d;
    f();
  };
  b5.onclick = () => p(!0);
  onclick = r => {
    L = 1;
    ra || (r.target === hC && (za[5] = !0), ua && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:r, target:v, type:A, repeat:G}) => {
    G || ((G = !!A[5] && v === document.body) && ("Escape" === r || "Enter" === r && ra) ? ra && !L || p(!ra) : 5 === (A = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[r]) ? G && (za[A] = 1) : za[A] = G);
  };
  onmousemove = ({movementX:r, movementY:v}) => {
    ua && (r || v) && (Ja += 0.1 * r, Ia += 0.1 * v);
  };
  hC.ontouchstart = r => {
    if (!ra) {
      for (let {pageX:v, pageY:A, identifier:G} of r.changedTouches) {
        ua && v > hC.clientWidth / 2 ? void 0 === w && (z = 0, t = v, x = A, w = G, C = Ja, F = Ia) : void 0 === m && (k = 0, g = v, l = A, m = G);
      }
      b = ca;
    }
  };
  hC.ontouchmove = r => {
    if (!ra) {
      for (let {pageX:R, pageY:T, identifier:aa} of r.changedTouches) {
        var v, A, G, P, I;
        w === aa && (Ja = C + (R - t) / 2.3, Ia = F + (T - x) / 2.3, z = 1);
        m === aa && (aa = (g - R) / 20, v = (l - T) / 20, A = Math.abs(aa), G = Math.abs(v), P = Math.atan2(v, aa), I = u(Math.hypot(v, aa) - 0.5), ma = 0.2 < A ? Math.cos(P) * I : 0, na = 0.2 < G ? Math.sin(P) * I : 0, (ma || na) && (k = 1), 2 < A && (g = R + 20 * Math.sign(aa)), 2 < G && (l = T + 20 * Math.sign(v)));
      }
    }
  };
  hC.ontouchend = r => {
    let v;
    r.preventDefault();
    for (const A of r.changedTouches) {
      A.identifier === w ? (w = void 0, z || (v = 1), z = 0) : A.identifier === m ? (m = void 0, na = ma = 0, k || (v = 1), k = 0) : v = 1;
    }
    v && r.target === hC && b && 0.02 < (r = ca - b) && 0.7 > r && (za[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    za.length = ma = na = 0;
    m = w = void 0;
    document.hidden && p(!0);
  })();
  p(!0);
}, xb = () => {
  let d = 0, b = 0, g = 1, l = 2, m = 2, k, t, x, w, z, C, F, L, f, p, r, v, A, G, P;
  const I = new Int32Array(256), R = new Uint8Array(65536), T = (O, D, y) => g ? D : E(O + Math.sign(D - O) * Pa(0, Math.abs(D - O) ** 0.9 - y) * c * 2, D, c / 7,), aa = () => {
    v = r = 0;
    for (let O = 32; 128 > O; O += 2) {
      let D = 0, y = 0, B = 0, H = 0;
      const M = 512 * O;
      for (let S = 1 & O; 128 > S; S += 2) {
        const ea = M + 4 * S;
        let U = M + 4 * (127 - S);
        const Z = R[ea] / 255, Ca = R[1 + U] / 255, Ma = 1 - Math.abs(S / 63.5 - 1);
        10 < S && 118 > S && (D = Pa(Pa(Z * Ma, Z * R[U] / 255), D), y = Pa(Pa(Ca * Ma, Ca * R[1 + ea] / 255), y));
        (54 > S || 74 < S) && 1e-3 < (U = (1 - Ma) * (Ca < Z ? Z : Ca) / 3) && (64 > S && U > B ? B = U : 64 < S && U > H && (H = U));
      }
      Math.abs(H - B) > Math.abs(r) && (r = H - B);
      Math.abs(y - D) > Math.abs(v) && (v = y - D);
    }
  }, pa = () => {
    let O = 0, D = 0, y = 0, B = 0;
    z = 0;
    I.fill(0);
    for (let M = 0; 31 > M; ++M) {
      let S = 0;
      const ea = 512 * M;
      for (let U = 0; 128 > U; U++) {
        var H = ea + 4 * U;
        let Z = (R[H] + R[1 + H]) / 255;
        H = R[2 + H];
        14 < U && 114 > U && (S += Z);
        H && Z && (Z = I[H] + 1, I[H] = Z, O > Z || (O = Z, D = H));
      }
      3 > S && 5 < M && (B += M / 32);
      3 < S && (7 < M && (y += M / 15), z = 1);
    }
    D && (z = 1);
    l = E(l, z ? 6.5 : 8, 1 - Math.exp(-4 * c));
    Ka.y += y / 41 - (z || l) * B / 41 * l * c;
    t = D || x;
    x = D;
  }, Aa = () => m ? h[da].u.j : w && 1 === e[w].G && e[w].j || n, Ba = () => {
    let O = Aa();
    var {x:D, y, z:B} = 1 < m ? h[da].J.transformPoint({x:0, y:da || 0.9 < ka ? 15 : 1, z:-2.4,}) : ((D = (B = O).inverse()).m41 = 0, D.m42 = 0, D.m43 = 0, y = D.transformPoint({x:r, z:v, w:0,}), Ka.x += y.x, Ka.z += y.z, B.transformPoint(Ka));
    let H = D - Ga.x, M = B - Ga.z;
    if (m = m && (z && t ? 0 : 1), Ga.x = D, Ga.y = y, Ga.z = B, m || t !== w) {
      w = t;
      const ea = (O = Aa()).inverse().transformPoint(Ga);
      Ka.x = ea.x;
      Ka.y = ea.y;
      Ka.z = ea.z;
    }
    y < (-25 > D || 109 > B ? -25 : -9) && (m = 2);
    t && (L = H / c, f = M / c);
    1 === t && (h[9].l = -15 > D && 0 > B ? 1 : 0);
    p = E(E(p, y, 1 - Math.exp(-2 * c)), y, m || 8 * Math.abs(p - y));
    G = T(G, p, 3);
    A = T(A, D, 2);
    P = T(P, B, 2);
    ua ? (O = m + (1 - Math.exp(-18 * c)), Ha.x = E(Ha.x, D, O), Ha.y = E(Ha.y, p + 1.5, O), Ha.z = E(Ha.z, B, O), Ja = Sa(Ja)) : (H = g + (1 - Math.exp(-2 * c)), Ha.x = E(Ha.x, A, H), Ha.y = E(Ha.y, Pa(G + u((-60 - B) / 8, 0, 20) + 13, 6), H,), Ha.z = E(Ha.z, P + -18, H), M = A - Ha.x, y = -Math.abs(P - Ha.z), H = g + (1 - Math.exp(-4 * c)), Ia = Ta(Ia, 90 - Math.atan2(Math.hypot(y, M), Ha.y - G) / La, H,), Ja = Ta(Ja, 90 - Sa(Math.atan2(y, M) / La), H,));
    Ia = u(Ia, -87, 87);
    g = 0;
    const S = e[37].j = n.translate(D, p, B,).rotateSelf(0, b = Ta(b, d, 8 * c),);
    [38, 39,].map((ea, U) => {
      e[ea].j = S.translate(0, C * u(0.45 * Math.sin(9.1 * a + Math.PI * (U - 1) - Math.PI / 2)),).rotateSelf(C * Math.sin(9.1 * a + Math.PI * (U - 1)) * 0.25 / La, 0);
    });
  };
  va = () => {
    let O = ma + (za[0] ? 1 : 0) - (za[2] ? 1 : 0), D = na + (za[1] ? 1 : 0) - (za[3] ? 1 : 0), y = navigator.getGamepads()[0];
    if (y) {
      var B = S => H[S]?.pressed || 0 < H[S]?.value ? 1 : 0;
      const H = y.buttons, M = y.axes;
      y = B(3) || B(2) || B(1) || B(0);
      O += B(14) - B(15) - Qa(M[0], 0.2);
      D += B(12) - B(13) - Qa(M[1], 0.2);
      ua && (Ia += 80 * Qa(M[3], 0.3) * c, Ja += 80 * Qa(M[2], 0.3) * c);
      y && !k && (za[5] = 1);
      k = y;
    }
    B = Math.atan2(D, O);
    y = Qa(u(Math.hypot(D, O)), 0.05);
    O = y * Math.cos(B);
    D = y * Math.sin(B);
    C = E(C, y, 1 - Math.exp(-10 * c));
    y && (d = 90 - B / La);
    Y.fa7();
    Y.r9r(0, 0, 128, 128, 6408, 5121, R);
    Y.iay(36008, [36064, 36096,]);
    Y.iay(36009, [36064, 36096,]);
    NO_INLINE(aa)();
    NO_INLINE(pa)();
    L = E(L, 0, 1 - Math.exp(-(z ? 8 : 4) * c));
    f = E(f, 0, 1 - Math.exp(-(z ? 8 : 4) * c));
    B = u(1 - 5 * Pa(Math.abs(r), Math.abs(v)));
    t || (r += L * B * c, v += f * B * c);
    F = E(F, z * B * u(2 * y) * 7, 1 - Math.exp(-(z ? 0.1 < B ? 10 : 5 + 2 * y : 1) * c));
    B = ua ? Ja * La : Math.PI;
    y = Math.sin(B) * F * c;
    B = Math.cos(B) * F * c;
    r -= O * B - D * y;
    v -= O * y + D * B;
    NO_INLINE(Ba)();
  };
}, yb = (d, b = 35633) => (b = Y.c6x(b), Y.s3c(b, d), Y.c6a(b), b), Cb = (d, b) => {
  const g = {}, l = Y.c1h();
  return Y.abz(l, d), Y.abz(l, yb(b, 35632)), Y.l8l(l), m => m ? g[m] || (g[m] = Y.gan(l, m)) : Y.u7y(l);
}, Db = (d, b, g, l) => {
  if (ra) {
    g = n.rotate(0, 40 * Math.sin(ca) - 70);
    for (var m of [37, 38, 39,]) {
      Xa(g, Oa, m - 1);
    }
    Y.uae(d, !1, Oa);
    Y.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v,);
  } else {
    for (m = 0; e.length > m; ++m) {
      e[m].G && Xa(e[m].j, Oa, m - 1);
    }
    Y.uae(d, !1, Oa);
    Y.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6,);
    for (b = 0; 13 > b; ++b) {
      Xa(ya[b].j, Oa, b);
    }
    for (b = 0; h.length > b; ++b) {
      Xa(h[b].j, Oa, b + 13), l || (Oa[16 * (b + 13) + 15] = 1 - h[b].g);
    }
    Y.uae(d, !1, Oa);
    Y.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,);
    Y.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Eb = d => {
  h4.innerHTML += ".";
  setTimeout(d);
}, Fb = d => Math.sin(d * Math.PI * 2), Gb = d => 0.5 > d % 1 ? 1 : -1, Hb = d => d % 1 * 2 - 1, Ib = d => 2 > (d = d % 1 * 4) ? d - 1 : 3 - d, Pb = d => {
  let b = 0;
  const g = () => {
    const k = vb.createBuffer(2, 5362944, 44100);
    for (let t = 0; 2 > t; t++) {
      for (let x = t, w = k.getChannelData(t); 10725888 > x; x += 2) {
        w[x >> 1] = m[x] / 65536;
      }
    }
    ub.buffer = k;
    ub.loop = !0;
    Eb(d);
  }, l = () => {
    let k = 0, t, [x, w, z, C, F, L, f, p, r, v, A, G, P, I, R, T, aa, pa, Aa, Ba, O] = Fa[b];
    v = v * v * 4;
    for (const M of [5513, 4562, 3891,]) {
      let S = 0, ea = 0, U, Z, Ca;
      const Ma = [], wa = new Int32Array(768 * M), Jb = 2 ** (G - 9) / M, Kb = Math.PI * 2 ** (aa - 8) / M, kb = Aa * M & -2;
      for (let eb = 0; 11 >= eb; ++eb) {
        for (let fb = 0, zb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + eb]; 32 > fb; ++fb) {
          const Ab = (32 * eb + fb) * M;
          for (var D = 0; 4 > D; ++D) {
            if (U = 0, zb && (U = O[zb - 1].charCodeAt(fb + 32 * D) - 40, U += 0 < U ? 106 : 0), U) {
              var y;
              if (!(y = Ma[U])) {
                y = U;
                let W = void 0, qa = void 0;
                var B = M, H = U;
                let Lb = 0, Mb = 0;
                const Nb = 2 > b ? Hb : Fb, Ob = 2 > b ? 1 > b ? Gb : Ib : Fb, Bb = new Int32Array(p + r + v);
                for (let Da = 0, lb = 0; p + r + v > Da; ++Da, ++lb) {
                  let Ea = 1;
                  p > Da ? Ea = Da / p : p + r > Da || (Ea = (1 - (Ea = (Da - p - r) / v)) * 3 ** (-A / 16 * Ea));
                  0 > lb || (lb -= 4 * B, qa = 396e-5 * 2 ** ((H + w - 256) / 12), W = 396e-5 * 2 ** ((H + F - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                  Bb[Da] = 80 * (Nb(Lb += qa * Ea ** (z / 32)) * x + Ob(Mb += W * Ea ** (L / 32)) * C + (f ? (2 * Math.random() - 1) * f : 0)) * Ea | 0;
                }
                y = Ma[y] = Bb;
              }
              for (let W = 0, qa = 2 * Ab; y.length > W; ++W, qa += 2) {
                wa[qa] += y[W];
              }
            }
          }
          for (let W, qa = 0; M > qa; ++qa) {
            D = 0, y = 2 * (Ab + qa), ((W = wa[y]) || Ca) && (Z = 308e-5 * P, 1 !== b && 4 !== b || (Z *= Math.sin(Jb * y * Math.PI * 2) * Ba / 512 + 0.5), Z = 1.5 * Math.sin(Z), S += Z * ea, t = (1 - I / 255) * (W - ea) - S, ea += Z * t, W = 4 === b ? ea : 3 === b ? t : S, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= R / 32, Ca = 1e-5 < W * W, t = Math.sin(Kb * y) * T / 512 + 0.5, D = W * (1 - t), W *= t), y < kb || (D += wa[1 + y - kb] * pa / 255, 
            W += wa[y - kb] * pa / 255), m[k + y] += wa[y] = D, ++y, m[k + y] += wa[y] = W;
          }
        }
      }
      k += wa.length;
    }
    Eb(5 > ++b ? l : g);
  }, m = new Int32Array(10725888);
  Eb(l);
}, Qb = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), X = NO_INLINE((d, b, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * b << 8 | 255 * d), vb = new AudioContext(), ub = vb.createBufferSource(), Y = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const d in Y) {
  Y[d[0] + [...d,].reduce((b, g, l) => (b * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Y[d];
}
Eb(() => {
  let d = 0;
  const b = () => {
    if (2 == ++d) {
      const l = p => {
        let r, v;
        Y.f1s();
        requestAnimationFrame(l);
        I = (p - (sa || p)) / 1e3;
        ra ? (c = 0, za[5] = 0) : c = 0.066 < I ? 0.066 : I;
        a += c;
        ca += I;
        sa = p;
        0 < c && (ob(), va(), za[5] = 0);
        let {x:A, y:G, z:P} = Ha;
        ra && (A = -4.5, G = 2, P = 3.2 - u(hC.clientWidth / 1e3));
        var I = (ra ? n.rotate(-20, -90) : n.rotate(-Ia, -Ja)).invertSelf().translateSelf(-A, -G, -P);
        0 < c && ({x:p, y:r, z:v} = Ga, w(), Y.b6o(36160, L), Y.v5y(0, 0, 128, 128), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(w("b"), !1, Xa(n.rotate(0, 180).invertSelf().translateSelf(-p, -r, 0.3 - v)),), Db(w("c"), 0, 41, 0), Y.c4s(256), Y.cbf(!1, !0, !0, !1), Y.uae(w("b"), !1, Xa(n.translate(-p, -r, -v - 0.3))), Db(w("c"), 0, 41, 0), Y.f1s());
        t();
        Y.b6o(36160, F);
        Y.v5y(0, 0, 2048, 2048);
        C[0](tb(I, 0.3, 55, 10));
        C[1](tb(I, 55, 186, 11));
        z();
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.cbf(!0, !0, !0, !0);
        Y.c4s(16640);
        C[0]();
        C[1]();
        Y.uae(z("a"), !1, Ya(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
        Y.uae(z("b"), !1, Xa(I));
        Y.ubu(z("k"), A, G, P);
        Db(z("c"), !ua, 42, 0);
        x();
        Y.ubu(x("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ca);
        Y.ubu(x("k"), A, G, P);
        Y.uae(x("b"), !1, Xa(I.inverse()));
        Y.d97(4, 3, 5123, 0);
        Y.b6o(36160, L);
        Y.f1s();
      }, m = g;
      let k = yb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const t = Cb(yb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), x = Cb(yb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), w = Cb(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), z = Cb(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), C = q(2, p => {
        const r = new Float32Array(16), v = Y.c25();
        return Y.a4v(33984 + p), Y.b9j(3553, v), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), A => {
          A ? (Xa(A, r), Y.uae(t("b"), !1, r), Y.fas(36160, 36096, 3553, v, 0), Y.c4s(256), Db(t("c"), !ua, 42, 1)) : Y.uae(z(p ? "j" : "i"), !1, r);
        };
      }), F = Y.c5w(), L = (k = Y.c3z(), Y.c5w()), f = Y.c25();
      w();
      Y.uae(w("a"), !1, Ya(1.4, 0.59, 1e-4, 1));
      z();
      Y.ubh(z("q"), 2);
      Y.ubh(z("h"), 1);
      Y.ubh(z("g"), 0);
      x();
      Y.ubh(x("q"), 2);
      Y.b6o(36160, F);
      Y.d45([0,]);
      Y.r9l(0);
      Y.b6o(36160, L);
      Y.bb1(36161, k);
      Y.r4v(36161, 33189, 128, 128);
      Y.f8w(36160, 36096, 36161, k);
      Y.a4v(33986);
      Y.b9j(3553, f);
      Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Y.fas(36160, 36064, 3553, f, 0);
      Y.b9j(3553, Y.c25());
      Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, m);
      Y.gbn(3553);
      Y.t2z(3553, 10241, 9987);
      Y.t2z(3553, 10240, 9729);
      Y.e8z(2929);
      Y.e8z(2884);
      Y.c70(1);
      Y.c7a(1029);
      Y.d4n(515);
      Y.c5t(0, 0, 0, 1);
      ob();
      NO_INLINE(xb)();
      NO_INLINE(wb)();
      requestAnimationFrame(l);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = Qb;
  NO_INLINE(Pb)(() => {
    Eb(() => {
      let k = 0, t;
      const x = [], w = [], z = [], C = [], F = new Int32Array(8), L = new Map(), f = v => {
        let {x:A, y:G, z:P} = t[v], I = (r[0] = A, r[1] = G, r[2] = P, v = "" + (t.D ? p : F), L.get(v));
        return void 0 !== I ? (A = 3 * I, C[A] = (C[A++] + F[5]) / 2, C[A] = (C[A++] + F[6]) / 2, C[A] = (C[A] + F[7]) / 2) : (L.set(v, I = L.size), w.push(A, G, P, r[3]), z.push(F[4]), C.push(F[5], F[6], F[7])), I;
      }, p = new Int32Array(F.buffer, 0, 5), r = new Float32Array(F.buffer);
      for (const v of e) {
        for (t of (r[3] = 40 === v.H ? -14 : v.G && v.H, v.s)) {
          const {x:A, y:G, z:P} = Wa(t);
          F[4] = 0 | t.A;
          F[5] = 32767 * A;
          F[6] = 32767 * G;
          F[7] = 32767 * P;
          for (let I = 2, R = f(0), T = f(1); t.length > I; ++I) {
            x.push(R, T, T = f(I));
          }
        }
        v.s = null;
        v.v = k;
        v.F = k = x.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(w), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(C), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(z), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(x), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Eb(b);
      try {
        const [v, A, G, P, I] = JSON.parse(localStorage.I,);
        h.map((R, T) => R.g = R.i = R.l = T ? 0 | v[T] : 0);
        ya.map((R, T) => R.l = 0 | A[T]);
        da = G;
        a = P;
        la = I;
      } catch {
      }
      ka = u(da);
    });
    const l = q(11, k => n.translate(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), m = q(10, k => bb($a(ab(18), l[k]).reverse(), $a(ab(18), l[k + 1]), 1,)).flat();
    Q(() => V([xa.slice(1),], n.translate(-2).scale3d(3).rotate(90, 0)), 0);
    Q(() => {
      const k = (f, p, r) => Q(v => {
        v.h = () => n.translate(w() * Math.sin(3 * f + a * f) * p);
        xa.map(({x:A, z:G}) => {
          V(K(11, 1), n.translate(4 * A, 4, r + 4 * G).scale(0.8, 3, 0.8), X(0.5, 0.3, 0.7, 0.6),);
          V(K(), n.translate(4 * A, 7, r + 4 * G).scale(1, 0.3), X(0.5, 0.5, 0.5, 0.3),);
        });
        V(N(J(K(), n.translate(0, 0, r).scale(5, 1, 5), X(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(A => J(K(), n.translate(5 * A, 0.2, r).rotate(-30 * A).scale(4, 1, 2), X(0.8, 0.8, 0.8, 0.3),)),),);
        V(K(), n.translate(0, -3, r).scale(8, 2, 8), X(0.4, 0.4, 0.4, 0.3));
      }), t = (f, p, r) => n.translate(f + Math.sin(a + 2) / 5, p + Math.sin(0.8 * a) / 3, r).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), x = f => N(J(K(), n.translate(0, -f / 2).scale(6, f - 1, 2.2)), J(K(), n.translate(0, -f / 2 - 6).scale(4, f - 3, 4)), J(K(32, 1), n.translate(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), w = () => {
        var f = h[2].i, p = 1 - h[4].i;
        return f < p ? f : p;
      }, z = N(J(K(20, 1, 1.15, 1), n.translate(0, -3).scale(3.5, 1, 3.5), X(0.7, 0.4, 0.25, 0.7),), J(K(20, 1, 1.3, 1), n.translate(0, -2.5).scale(2.6, 1, 3), X(0.7, 0.4, 0.25, 0.2),), J(K(), n.translate(4, -1.2).scale3d(2), X(0.7, 0.4, 0.25, 0.3)),), C = q(7, f => J(K(6, 1), n.translate(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), X(0.3, 0.3, 0.38),)).flat(), F = (Q(f => {
        f.h = () => t(-12, 4.2, 40 * ka - 66);
        V(z);
        rb(n.translate(0, -3, 4));
      }), rb(n.translate(-5.4, 1.5, -19).rotate(0, -90)), sb(n.translate(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), sb(n.translate(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...ab(18).map(({x:f, z:p}) => [7 * f, 10 * p, 4.5 - 2 * Math.abs(f),]),), V(K(), n.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(0.8, 0.8, 0.8, 0.2),), xa.map(({x:f, z:p}) => V(K(6), n.translate(3 * f, 3, 15 * p).scale(0.7, 4, 0.7), X(0.6, 0.3, 0.3, 0.4),)), [-23, 22,].map(f => V(K(), n.translate(0, 0, f).scale(3, 1, 8), 
      X(0.9, 0.9, 0.9, 0.2))), [-15, 15,].map((f, p) => {
        V(K(), n.translate(0, 6.3, f).scale(4, 0.3, 1), X(0.3, 0.3, 0.3, 0.4));
        V(K(), n.translate(0, 1, f).scale(3, 0.2, 0.35), X(0.5, 0.5, 0.5, 0.3));
        Q(r => {
          r.h = () => n.translate(0, 0, f).scale(1, u(1.22 - h[p + 1].g), 1);
          V(C);
        });
      }), q(5, f => q(2, p => V(m, n.translate(18.5 * (p - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2,), X(1, 1, 0.8, 0.2),)),), V(K(), n.translate(3, 1.5, -20).scale(0.5, 2, 5), X(0.7, 0.7, 0.7, 0.2)), V(K(), n.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(0.75, 0.75, 0.75, 0.2),), V(K(5), n.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(0.6, 0.3, 0.3, 0.4),), V(K(), n.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), X(0.8, 
      0.2, 0.2, 0.5),), V(N(nb(J(K(6, 0, 0, 0.3), n.translate(8, -3, -4).scale(13, 1, 13), X(0.7, 0.7, 0.7, 0.2),), J(K(6), n.translate(0, -8).scale(9, 8, 8), X(0.4, 0.2, 0.5, 0.5),), J(K(6, 0, 0, 0.3), n.translate(0, -0.92).scale(13, 2, 13), X(0.8, 0.8, 0.8, 0.2),),), J(K(5), n.scale(5, 30, 5), X(0.4, 0.2, 0.6, 0.5)), J(K(5, 0, 1.5), n.translate(0, 1).scale(4.5, 0.3, 4.5), X(0.7, 0.5, 0.9, 0.2),), J(K(), n.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), X(0.5, 0.5, 0.5, 0.5),), 
      J(K(6), n.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(0.5, 0.5, 0.5, 0.5),),),), Q(f => {
        f.h = () => n.translate(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        V(K(5), n.translate(0, -0.2).scale(5, 1, 5), X(0.6, 0.65, 0.7, 0.3));
        rb(n.translate(0, 1.2));
      }), rb(n.translate(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), Q(f => {
        f.h = () => n.translate(w() * Math.sin(a / 1.5 + 2) * 12);
        V(N(nb(J(K(), n.scale(1.5, 1, 5), X(0.9, 0.9, 0.9, 0.2)), J(K(6), n.scale(4, 1, 5), X(0.9, 0.9, 0.9, 0.2)), J(K(), n.translate(0, -2).scale(2, 3.2, 1.9), X(0.3, 0.8, 0.5, 0.5),), J(K(16, 1, 0, 4), n.scale(1, 1, 1.5).rotate(0, 90), X(0.9, 0.9, 0.9, 0.2),),), J(K(), n.scale(1.3, 10, 1.3), X(0.2, 0.7, 0.4, 0.6)),), n.translate(0, 0, 45),);
        sb(n.translate(0, 2.8, 45), [0, 0, 4.5,]);
      }), V(K(), n.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2),), Q(f => {
        f.h = () => n.translate(9.8 * (1 - w()));
        V(K(3), n.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), X(0.3, 0.6, 0.6, 0.2),);
        V(K(8), n.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(0.8, 0.8, 0.8, 0.2),);
        V(K(), n.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(0.5, 0.5, 0.5, 0.3));
        V(K(), n.translate(-23, -2.2, 62).scale(3, 1, 4), X(0.5, 0.5, 0.5, 0.3));
        rb(n.translate(-23, -0.5, 66.5));
      }), Q(f => {
        f.h = () => n.translate(0, u(1 - 5 * w()) * Ra(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        V(K(), n.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(0.7, 0.7, 0.7, 0.2),);
        V(N(J(K(), n.scale(3, 1.4, 2.7)), J(K(), n.scale(1.2, 8, 1.2)),), n.translate(-33, -3, 55), X(0.7, 0.7, 0.7, 0.2),);
      }), Q(f => {
        f.h = () => n.translate(0, 0, u(1 - 5 * w()) * Ra(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        V(N(J(K(), n.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2),), J(K(), n.translate(-27, -3, 55).scale(1, 3), X(0.9, 0.9, 0.9, 0.2),),),);
        V(K(), n.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2));
      }), Q(f => {
        f.h = () => n.translate(0, -6.5 * h[4].i);
        V(K(6), n.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), X(0.7, 0.7, 0.7, 0.4),);
      }), rb(n.translate(-55, -1.1, 46).rotate(0, 90)), V(K(6), n.translate(-61.3, -2.4, 49).scale(3, 1, 5), X(0.4, 0.6, 0.6, 0.3)), V(K(7), n.translate(-57, -2.6, 46).scale(4, 1, 4), X(0.8, 0.8, 0.8, 0.3)), [...J(K(), n.translate(0, -3).scale(11, 1.4, 3), X(0.9, 0.9, 0.9, 0.2),), ...N(J(K(6), n.rotate(90).scale(6, 8, 6), X(0.3, 0.6, 0.6, 0.3)), J(K(4, 0, 0.01), n.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), X(0.3, 0.6, 0.6, 0.3),), J(K(6), n.rotate(90).scale(5, 12, 5), X(0.3, 0.6, 0.6, 0.3)), 
      ...[5, 0, -5,].map(f => J(K(5), n.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(0.3, 0.6, 0.6, 0.3),)),),]), L = (V(F, n.translate(-53, 0, 55)), Q(f => {
        f.h = () => n.translate(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ia, 0,);
        V(F);
      }, 2), V(K(), n.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), X(0.7, 0.7, 0.7, 0.2),), V(K(3, 0, -0.5), n.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), X(0.8, 0.8, 0.8, 0.2),), V(N(nb(J(K(), n.translate(-100, -2.5, 55).scale(8, 1, 8), X(0.8, 0.8, 0.8, 0.2),), J(K(), n.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(0.8, 0.8, 0.8, 0.2),), J(K(), n.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(0.8, 0.8, 0.8, 0.2),), J(K(), n.translate(-96, -2.6, 73).rotate(0, 
      45).scale(3, 1.1, 5), X(0.8, 0.8, 0.8, 0.2),), J(K(6), n.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(0.6, 0.6, 0.6, 0.3),), J(K(), n.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(0.8, 0.8, 0.8, 0.2),), J(K(), n.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), X(0.8, 0.8, 0.8, 0.2),),), J(K(8), n.translate(-100, -1, 55).scale(7, 0.9, 7), X(0.3, 0.3, 0.3, 0.4),), J(K(8), n.translate(-100, -2, 55).scale(4, 0.3, 4), X(0.4, 0.4, 0.4, 0.5),), J(K(8), n.translate(-100, 
      -3, 55).scale(0.6, 1, 0.6), X(0.4, 0.4, 0.4, 0.5),),),), sb(n.translate(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), sb(n.translate(-89, 0.2, 80), [0, 0, 6,]), V(N(J(K(), n.translate(-100, 1, 63).scale(7.5, 4), X(0.5, 0.5, 0.5, 0.4),), J(K(), n.translate(-100, 0, 70).scale(2, 2, 10), X(0.5, 0.5, 0.5, 0.4),), J(K(20, 1), n.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(0.5, 0.5, 0.5, 0.4),),),), Q(f => {
        f.h = () => n.translate(-99.7, -1.9, 63.5).scale(1, u(1.1 - h[6].g), 1);
        V(C);
      }), xa.map(({x:f, z:p}) => {
        V(K(6), n.translate(7 * f - 100, -3, 7 * p + 55).scale(1, 8.1), X(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(r => V(K(6), n.translate(7 * f - 100, r, 7 * p + 55).scale(1.3, 0.5, 1.3), X(0.4, 0.2, 0.2, 0.8),));
      }), q(7, f => {
        V(K((23 * f + 1) % 5 + 5, 0, 0.55), n.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), X(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), V(K(), n.translate(-87, -9.5, 24).scale(7, 1, 3), X(0.4, 0.5, 0.6, 0.4)), V(K(4), n.translate(-86, -9.2, 27).scale(5, 1, 5), X(0.5, 0.6, 0.7, 0.3)), V(K(12, 1), n.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(0.3, 0.3, 0.4, 0.1),), rb(n.translate(-86, -7.5, 31)), Q(f => {
        f.h = () => n.translate(0, 3.5 * (1 - Pa(h[6].g, h[7].g)) + Ra(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24,].map(p => V(K(), n.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.2, 0.5, 0.6, 0.2),));
      }), Q(f => {
        f.h = () => n.translate(0, Ra(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ra(h[7].i, h[6].i),);
        [6, 18,].map(p => V(K(), n.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.1, 0.4, 0.5, 0.2),));
      }), V(N(nb(J(K(5), n.translate(0, 0, -7).scale(2, 1.2, 2), X(0.2, 0.4, 0.7, 0.3),), J(K(5), n.scale(9, 1.2, 9), X(0, 0.2, 0.3, 0.5)), J(K(), n.scale(11, 1, 13), X(0.3, 0.4, 0.6, 0.3)),), J(K(5), n.scale(5.4, 5, 5.4), X(0, 0.2, 0.3, 0.5)),), n.translate(-38.9, -11.3, 17),), rb(n.translate(-38.9, -9.6, 10)), Q(f => {
        f.h = () => n.translate(0, -7.3 * h[7].i);
        V(N(nb(J(K(5), n.translate(0, 2).scale(5, 7, 5).skewY(8), X(0.2, 0.4, 0.5, 0.5),), J(K(5), n.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(0.25, 0.35, 0.5, 0.5),), J(K(5), n.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), X(0.35, 0.3, 0.5, 0.5),),), J(K(5), n.scale(4, 8, 4), X(0.2, 0.4, 0.5, 0.5)), J(K(5), n.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(0.2, 0.4, 0.5, 0.5),),), n.translate(-38.9, -11.3, 17),);
        sb(n.translate(-39.1, -0.6, 17).rotate(11), ...ab(15).map(({x:p, z:r}) => [3 * p, 3 * r, 1.2,]),);
      }), xa.map(({x:f, z:p}) => {
        V(K(14, 1), n.translate(9 * f - 38.9, -7.3, 11 * p + 17).scale(1, 4), X(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(r => V(K(17, 1), n.translate(9 * f - 38.9, -7.3, 11 * p + 17).translate(0, r - 4).scale(1.5, 0.5, 1.5), X(0.6, 0.6, 0.6, 0.3),));
      }), V(N(nb(J(K(6), n.translate(0, 0, -36).scale(15, 1.2, 15), X(0.7, 0.7, 0.7, 0.3),), J(K(), n.translate(0, 0, -18).scale(4, 1.2, 6), X(0.45, 0.4, 0.6, 0.3),),), ...q(6, f => q(6, p => J(K(6), n.translate(4.6 * p - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * p)).scale(2, 5, 2,), X(0.7, 0.7, 0.7, 0.3),))).flat(),), n.translate(-38.9, -11.3, 17),), sb(n.translate(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), V(K(5), n.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), X(0.8, 0.1, 0.25, 0.4),), rb(n.translate(-84, -0.5, 85).rotate(0, 45)), Q(f => {
        f.h = () => t(-123, 1.4, 55 + -65 * la);
        V(z);
        rb(n.translate(0, -3, -4).rotate(0, 180));
      }), N(J(K(), n.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(0.25, 0.25, 0.35, 0.3),), J(K(3), n.translate(0, 0, -5.5).scale(3, 2), X(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2,].map(f => J(K(), n.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), X(0.7, 0.2, 0, 0.3),)),));
      Q(f => {
        f.h = () => n.translate(0, -2, Ra(h[10].g, h[11].g) * Math.abs(Math.sin(1.1 * a)) * -8.5 + 10);
        q(2, p => V(L, n.translate(9 * p - 110 + (1 & p), 1.7, -12)));
      });
      Q(f => {
        f.h = () => n.translate(0, -2, Ra(h[10].g, h[11].g) * Math.abs(Math.sin(2.1 * a)) * -8.5 + 10);
        q(2, p => V(L, n.translate(9 * (p + 2) - 110 + (1 & p), 1.7, -12)),);
      });
      Q(f => {
        f.h = () => n.translate(0, -2, -8.5 * Pa((1 - h[10].g) * (1 - Ra(h[10].g, h[11].g)), Ra(h[10].g, h[11].g) * Math.abs(Math.sin(1.5 * a)),) + 10,);
        q(3, p => V(L, n.translate(9 * p - 106, 1.7, -12)));
      });
      V(N(nb(J(K(), n.translate(26.5, -1.6, 10).scale(20, 2.08, 3)), J(K(), n.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...q(4, f => J(K(), n.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...q(3, f => J(K(), n.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), n.translate(-123, 0, -12), X(0.5, 0.5, 0.6, 0.2),);
      rb(n.translate(-116, -1.4, -18).rotate(0, 180));
      V(K(), n.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(0.8, 0.8, 0.8, 0.2),);
      V(K(6), n.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), X(0.6, 0.5, 0.7, 0.2),);
      V(K(), n.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), X(0.6, 0.6, 0.6, 0.3),);
      V(K(8), n.translate(-114, -17, -2).scale(2, 15, 2), X(0.6, 0.6, 0.6, 0.3));
      V(K(8), n.translate(-79, -17, -2).scale(2, 15, 2), X(1, 1, 1, 0.3));
      V(K(), n.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), X(0.6, 0.6, 0.6, 0.3),);
      q(3, f => {
        V(x(16), n.translate(12 * f - 109, -9, -12), X(0.6, 0.6, 0.6, 0.3),);
        V(x(16), n.translate(-77, -9, -12 * f - 20).rotate(0, 90), X(0.6, 0.6, 0.6, 0.3),);
      });
      V(N(J(K(12), n.translate(-77, -14.5, -12).scale(4, 17.5, 4), X(0.7, 0.7, 0.7, 0.2),), J(K(), n.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), X(0.4, 0.5, 0.6, 0.2),), J(K(), n.translate(-77, 0.1, -14).scale(1.5, 2, 2), X(0.4, 0.5, 0.6, 0.2),), J(K(12), n.translate(-77, 3.1, -12).scale(3, 5, 3), X(0.4, 0.5, 0.6, 0.2),),),);
      V(K(), n.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), X(0.6, 0.6, 0.6, 0.3),);
      V(K(9), n.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), X(0.5, 0.5, 0.5, 0.3),);
      V(N(J(K(), n.translate(-93, -5.8, -40).scale(9, 1, 5), X(0.8, 0.8, 0.8, 0.1),), J(K(9), n.translate(-98, -5.8, -40).scale(3, 8, 3), X(0.7, 0.7, 0.7, 0.2),),),);
      rb(n.translate(-98, -4.4, -40).rotate(0, 90));
      sb(n.translate(-115, 0.2, -12), [0, 0, 3.5,]);
      sb(n.translate(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      V(N(nb(J(K(6, 0, 0, 0.6), n.translate(-100, 0.7, 105.5).scale(8, 1, 11), X(0.7, 0.7, 0.7, 0.2),), J(K(), n.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), X(0.7, 0.7, 0.7, 0.2),),), J(K(5), n.translate(-100, 0.7, 113).scale(4, 3, 4), X(0.7, 0.7, 0.7, 0.2),),),);
      q(4, f => Q(p => {
        p.h = () => {
          const r = Ra(h[8].i, h[12].i);
          return n.translate((2 < f ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + (0.05 < r ? r : 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        V(K(6), n.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), X(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Q(f => {
        f.h = () => {
          const p = Ra(h[8].i, h[12].i);
          return n.translate(2.5 * (1 - p) - 139.7, -3 * (1 - h[8].g) + p * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * p + 3), 0);
        };
        V(N(J(K(10), n.scale(6, 2, 6), X(0.1, 0.6, 0.5, 0.3)), J(K(10), n.scale(3.3, 6, 3.3), X(0.1, 0.6, 0.5, 0.5)),),);
        V(K(15, 1), n.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), X(0.4, 0.4, 0.4, 0.3),);
        V(K(10), n.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), X(0.3, 0.8, 0.7, 0.3),);
        V(K(5), n.translate(-7.5).rotate(0, 90).scale(1, 3), X(0.5, 0.5, 0.5, 0.5),);
        rb(n.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(p => V(m, n.rotate(90 * -p, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), X(1, 1, 0.8, 0.2),));
        sb(n.translate(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        V(K(12, 1), n.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), X(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(p => V(K(15, 1), n.translate(-7.5 * f - 100, p + 0.7, 96).scale(1.1, 0.5, 1.1), X(0.5, 0.24, 0.2, 0.4),));
        V(m, n.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), X(1, 1, 0.8),);
        V(N(J(K(), n.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), X(0.5, 0.5, 0.5, 0.4),), J(K(), n.scale(3, 3, 10), X(0.6, 0.24, 0.2, 0.5)), J(K(28, 1), n.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(0.6, 0.24, 0.2, 0.5),), J(K(5), n.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(0.6, 0.24, 0.2, 0.5),), J(K(5), n.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), X(0.6, 0.24, 0.2, 0.5),),), n.translate(f - 100, 0.7, 97),);
      });
      Q(f => {
        f.h = () => n.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        V(C);
      });
      V(N(J(K(), n.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), X(0.7, 0.7, 0.7, 0.1),), J(K(45, 1), n.translate(-81, 0.7, 106).scale3d(7.7), X(0.7, 0.7, 0.7, 0.1),),),);
      Q(f => {
        f.h = () => n.translate(-81, 0.6, 106).rotate(0, 40 + fa);
        V(N(J(K(45, 1), n.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)), J(K(), n.translate(0, 0, -5.5).scale(1.5, 3, 2.7), X(0.45, 0.45, 0.45, 0.2),),),);
        V(K(8), n.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), X(0.7, 0.7, 0.7, 0.1),);
        V(K(5), n.translate(0, 2).scale(1, 2), X(0.3, 0.3, 0.3, 0.2));
        sb(n.translate(0, 3), ...ab(14).map(({x:p, z:r}) => [5.6 * p, 5.6 * r, 2,]),);
      });
      Q(f => {
        f.h = () => n.translate(-65.8, 0.8, 106).rotate(0, ha);
        [-1, 1,].map(p => V(m, n.rotate(0, 90).translate(-5 * p, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * p + 90), X(1, 1, 0.8),));
        V(N(J(K(28, 1), n.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3),), J(K(), n.scale(9, 5, 2), X(0.3, 0, 0, 0.3)),),);
        V(J(K(28, 1), n.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),);
        V(J(K(5), n.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2),),);
      });
      Q(f => {
        f.h = () => n.translate(-50.7, 0.8, 106).rotate(0, 180 - ha);
        V(N(J(K(28, 1), n.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3),), J(K(), n.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)), J(K(), n.translate(0, 0, 7).scale(2, 5, 9), X(0.3, 0, 0, 0.3),),),);
        V(J(K(28, 1), n.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),);
        V(J(K(5), n.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2),),);
      });
      Q(f => {
        f.h = () => n.translate(-50.7, 0.8, 91).rotate(0, 270 + ha);
        V(N(J(K(28, 1), n.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3),), J(K(), n.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)), J(K(), n.translate(0, 0, -7).scale(2, 5, 9), X(0.3, 0, 0, 0.3),),),);
        V(J(K(28, 1), n.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),);
        V(J(K(5), n.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2),),);
      });
      V(K(), n.translate(-58, 1, 106).scale(2, 0.65, 2), X(0.7, 0.7, 0.7, 0.2));
      V(K(), n.translate(-50.7, 1, 99).scale(2, 0.65, 1), X(0.7, 0.7, 0.7, 0.2));
      V(K(), n.translate(-42, 0.4, 91).scale(5, 1, 2.5), X(0.7, 0.7, 0.7, 0.3));
      V(K(), n.translate(-34.2, 0.4, 91).scale(3, 1, 3), X(0.7, 0.7, 0.7, 0.3));
      rb(n.translate(-34, 2.7, 96).rotate(-12, 0));
      V(K(5), n.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), X(0.2, 0.5, 0.5, 0.6),);
      [X(0.1, 0.55, 0.45, 0.2), X(0.2, 0.5, 0.5, 0.3), X(0.3, 0.45, 0.55, 0.4),].map((f, p) => Q(r => {
        r.h = () => n.translate(0, (1 - h[13].i) * (1 - h[14].i) * (p ? 0 : 3) + Ra(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * p) * 4,);
        V(K(), n.translate(-23.5, 0.5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), f,);
        2 === p && V(K(), n.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), X(0.7, 0.7, 0.7, 0.3),);
        1 === p && V(K(), n.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), X(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => V(m, n.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), X(1, 1, 0.8),));
      q(3, f => V(x(24.7 - 0.7 * (1 & f)), n.translate(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? X(0.5, 0.5, 0.5, 0.3) : X(0.35, 0.35, 0.35, 0.5),),);
      V(N(J(K(6, 0, 0, 0.3), n.translate(0, -0.92, 95).scale(14, 2, 14), X(0.8, 0.8, 0.8, 0.2),), J(K(5), n.translate(0, 0, 95).scale3d(6), X(0.3, 0.3, 0.3, 0.5),),),);
      rb(n.translate(0, 1.7, 82).rotate(0, 180));
      V(K(5), n.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(0.5, 0.3, 0.3, 0.4),);
      V(K(6), n.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(0.5, 0.6, 0.7, 0.3),);
      V(K(), n.translate(0, 16, 129).scale(1.5, 1, 2), X(0.5, 0.6, 0.7, 0.3));
      V(K(7), n.translate(0, 16.2, 133).scale(5, 1, 5), X(0.4, 0.5, 0.6, 0.4));
      V(N(nb(J(K(), n.translate(0, 16, 110.5).scale(12, 1, 3), X(0.5, 0.3, 0.3, 0.4),), J(K(), n.translate(0, 16, 111).scale(3, 1, 3.8), X(0.5, 0.3, 0.3, 0.4),),), J(K(5), n.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(0.5, 0.3, 0.3, 0.4),),),);
      Q(f => {
        f.h = () => {
          const p = Math.sin(a);
          return n.translate(-2 * p).rotate(25 * p);
        };
        V(K(3), n.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), X(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(p => {
          V(K(6), n.translate(0, 16, p + 95).scale(3, 1, 2.3).rotate(0, 90), X(0.7, 0.7, 0.7, 0.4),);
          V(K(), n.translate(0, 6.2, p + 95).scale(0.5, 11, 0.5), X(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Q(f => {
        f.h = () => {
          const p = Ra(Ra((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return n.translate(0, 16 * p, 8.5 * u(2 * p - 1) + 95);
        };
        V(K(5), n.scale(5, 1.1, 5), X(0.5, 0.3, 0.3, 0.4));
        V(K(5), n.scale(5.5, 0.9, 5.5), X(0.25, 0.25, 0.25, 0.4));
        rb(n.translate(0, 1.5, -1).rotate(0, 180));
      });
      sb(n.translate(0, 3, 95), ...ab(9).map(({x:f, z:p}) => [9 * f, 9 * p, 4,]),);
      sb(n.translate(0, 19, 134), [0, 0, 3.5,]);
    });
    Q(() => {
      [0, 180,].map(t => V(m, n.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), X(1, 1, 0.8),));
      V(cb(20), n.translate(0, 1).scale(0.5, 0.5, 0.5), X(1, 0.3, 0.4));
      const k = J(N(K(15, 1), J(K(), n.translate(0, 0, 1).scale(2, 2, 0.5)),), n.rotate(-90, 0).scale(0.1, 0.05, 0.1), X(0.3, 0.3, 0.3),);
      [-1, 1,].map(t => V(k, n.translate(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      V(K(), n.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), X(0.3, 0.3, 0.3));
      V(cb(20), n.scale(0.7, 0.8, 0.55), X(1, 0.3, 0.4));
    });
    [-1, 1,].map(k => Q(() => {
      V(K(10, 1), n.translate(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), X(1, 0.3, 0.4));
    }));
    Q(() => {
      V(K(6, 1), n.scale(0.13, 1.4, 0.13), X(0.3, 0.3, 0.5, 0.1));
      V(K(10), n.translate(0, 1).scale(0.21, 0.3, 0.21), X(1, 0.5, 0.2));
      V(K(3), n.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), X(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Q(() => {
      V(K(6).slice(0, -1), n.scale(0.77, 1, 0.77), X(1, 0.3, 0.5));
    }, 0);
    Q(() => {
      V(cb(30, 24, (k, t, x) => {
        const w = t / 24, z = k * Math.PI * 2 / 30, C = w ** 0.6 * Math.PI / 2;
        k = w * w * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 === t ? {x:x.D = 0, y:-0.5, z:0,} : {x:Math.cos(z) * Math.sin(C), y:Math.cos(w * Math.PI) - w - k, z:Math.sin(z) * Math.sin(C) + Math.sin(k * Math.PI * 2) / 4,};
      }), n.scale3d(0.7), X(1, 1, 1),);
      [-1, 1,].map(k => V(cb(12), n.translate(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

