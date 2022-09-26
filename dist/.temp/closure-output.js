let aa = 0, ca = 0, a = 0, fa = 0, ha = 0, ia = 0, ka = 0, la = 0, na = 0, oa = 0, pa = 0, qa = 0, ra = 0, sa = 0, ta = 0, ua = 0, d = 0.066, va = 1, wa, xa, ya, Aa, Ba, Ca;
const e = [], h = [], Ha = [], Ia = [], Ja = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ka = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], La = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Ma = {x:0, y:0, z:0,};
var Na = 0, Oa = 180;
const Qa = {x:0, y:0, z:0,}, Ra = Math.PI / 180, m = new DOMMatrix(), Sa = new Float32Array(16), Ta = new Float32Array(624), q = (b, c) => Array.from(Array(b), (g, l) => c(l)), Ua = (b, c) => c < b ? b : c, v = (b, c = 0, g = 1) => b < c ? c : g < b ? g : b, Va = (b, c) => c < Math.abs(b) ? b : 0, E = (b, c, g) => (0 < g ? 1 > g ? b + (c - b) * g : c : b) || 0, Wa = (b, c) => (b = v(b), E(b, 1 - b, c)), Xa = b => Math.atan2(Math.sin(b *= Ra), Math.cos(b)) / Ra, $a = (b, c, g) => b + (2 * (c = (c - 
b) % 360) % 360 - c) * v(g) || 0, ab = ({x:b, y:c, z:g}) => Math.hypot(b - Ma.x, c - Ma.y, g - Ma.z), bb = ({x:b, y:c, z:g}, l) => b * l.x + c * l.y + g * l.z, cb = b => {
  let c = 0, g = 0, l = 0, n, k = b.at(-1);
  for (n of b) {
    c += (k.y - n.y) * (k.z + n.z), g += (k.z - n.z) * (k.x + n.x), l += (k.x - n.x) * (k.y + n.y), k = n;
  }
  return n = Math.hypot(c, g, l), c /= n, g /= n, l /= n, {x:c, y:g, z:l, w:c * k.x + g * k.y + l * k.z,};
}, db = (b, c = Sa, g = 0,) => (g *= 16, c[g++] = b.m11, c[g++] = b.m12, c[g++] = b.m13, c[g++] = b.m14, c[g++] = b.m21, c[g++] = b.m22, c[g++] = b.m23, c[g++] = b.m24, c[g++] = b.m31, c[g++] = b.m32, c[g++] = b.m33, c[g++] = b.m34, c[g++] = b.m41, c[g++] = b.m42, c[g++] = b.m43, c[g] = b.m44, c), eb = (b, c, g, l) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0,], fb = (b, c, g) => (b.D = g, b.A = c, b), gb = (b, c, g = b.A) => fb(b.map(l => {
  let n, k;
  return {x:l, y:n, z:k} = l, {x:l, y:n, z:k} = c.transformPoint({x:l, y:n, z:k,}), {x:l, y:n, z:k,};
}), g, b.D,), I = (b, c, g) => b.map(l => gb(l, c, g)), hb = (b, c = 0) => q(b, g => {
  const l = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:0.01 > Math.abs(l) ? l : 0 > l ? l - c : l + c,};
}), ib = (b, c, g) => b.map((l, n, {length:k}) => fb([l, c[k - n - 1], c[k - (n + 1) % k - 1], b[(n + 1) % k],], b.A, g,)), J = (b, c, g = 0, l,) => (b = b ? hb(b, l) : Ja, l = gb(b, m.translate(0, 1).scale3d(0 < g ? g : 1)), b = gb(b, m.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...ib(b, l, c), l, b,]), lb = (b, c = b, g = (l, n) => (n *= Math.PI / c, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(n), y:Math.cos(n), z:Math.sin(l) * Math.sin(n),})) => {
  const l = [];
  for (let n = 0; b > n; n++) {
    for (let k = 0; c > k; k++) {
      const t = fb([], 0, 1);
      l.push(t);
      t.push(g(n, k, t));
      k && t.push(g((n + 1) % b, k, t));
      c - 1 > k && t.push(g((n + 1) % b, k + 1 % c, t));
      t.push(g(n, k + 1 % c, t));
    }
  }
  return l;
}, mb = (b, c) => {
  var g, l, n, k = c.C;
  for (var t = 0; k.length > t; ++t) {
    if (-0.00008 > (g = bb(b, k[t]) - b.w) ? n = c : 8e-5 < g && (l = c), n && l) {
      l = [];
      n = [];
      k = c.C;
      t = c.B;
      let x = k.at(-1), w = bb(b, x) - b.w;
      for (const z of k) {
        g = bb(b, z) - b.w, 8e-5 > w && n.push(x), -0.00008 < w && l.push(x), (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g) && (w /= g - w, x = {x:x.x + (x.x - z.x) * w, y:x.y + (x.y - z.y) * w, z:x.z + (x.z - z.z) * w,}, l.push(x), n.push(x)), x = z, w = g;
      }
      return {o:2 < l.length && {C:fb(l, k.A, k.D), B:t, u:c,}, m:2 < n.length && {C:fb(n, k.A, k.D), B:t, u:c,},};
    }
  }
  return {o:l, m:n,};
}, nb = (b, c, g = cb(c.C)) => {
  let l, n, k;
  return b ? ({o:l, m:n} = mb(b, c), l || n || b.s.push(c), l && (b.o = nb(b.o, l, g)), n && (b.m = nb(b.m, n, g))) : ({x:l, y:n, z:g, w:k} = g, b = {x:l, y:n, z:g, w:k, s:[c,], o:0, m:0,}), b;
}, ob = (b, c, g) => {
  const l = [], n = (k, t) => {
    let {o:x, m:w} = mb(k, t);
    x || w || (0 < g * bb(k, c) ? x = t : w = t);
    x && (k.o ? n(k.o, x) : l.push(x));
    w && k.m && n(k.m, w);
  };
  for (const k of c.s) {
    n(b, k);
  }
  return l;
}, rb = (b, c) => b && (c(b), rb(b.o, c), rb(b.m, c)), sb = b => b.length ? b.reduce((c, g) => nb(c, {C:g, B:0, u:0,}), 0) : b, tb = b => (rb(b, c => {
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
}), b), ub = (...b) => b.reduce((c, g) => {
  const l = [];
  if (c = sb(c), g) {
    g = sb(g);
    rb(c, n => n.s = ob(g, n, 1));
    rb(g, n => l.push([n, ob(c, n, -1),]));
    for (let [n, k] of l) {
      for (const t of k) {
        nb(c, t, n);
      }
    }
  }
  return c;
}), P = (...b) => {
  let c;
  const g = new Map(), l = new Map(), n = k => {
    let t;
    return k.u && ((t = g.get(k.u)) ? (l.delete(t), k = n(k.u)) : g.set(k.u, k)), k;
  };
  return [b, ...c] = [...b,], b = tb(ub(tb(sb(b)), ...c)), rb(b, k => {
    for (const t of k.s) {
      l.set(n(t), t.B);
    }
  }), Array.from(l, ([{C:k}, t]) => {
    const x = k.map(({x:w, y:z, z:A}) => ({x:w, y:z, z:A,}));
    return fb(t ? x.reverse() : x, k.A, k.D);
  });
}, vb = () => {
  pa = Wa(h[12].g, h[13].g);
  ka = E(E(ka, 0, 1 - Math.exp(-1 * d)), Xa(ka + 60 * d), h[5].g - h[6].i,);
  ha = E(E(ha, 0, 1 - Math.exp(-5 * d)), Xa(ha + 56 * d), pa,);
  ia = E(E(ia, 0, 1 - Math.exp(-4 * d)), Xa(ia + 48 * d), pa,);
  oa = E(oa, h[9].i, 1 - Math.exp(-(0.2 + 0.3 * Math.abs(2 * h[9].i - 1)) * d));
  na = E(na, la ? E(na, -9, 1 - Math.exp(-1.5 * d)) : v(a / 3), 1 - Math.exp(-1 * d));
  va && a > va && (va = 0, h4.innerHTML = "");
  h[0].l && 0.8 < h[0].g && (13 > aa ? (1 / 0 > va && (va = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0) : la || (1 / 0 > va && (va = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), la = 1));
  for (const b of e) {
    b.h && (b.j = b.h());
  }
  for (const b of h) {
    b.h();
  }
  for (const b of Ha) {
    b.h();
  }
}, wb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][aa = Ha.reduce((b, {l:c}) => b + c, 0)] + " / XIII";
}, xb = () => {
  localStorage.I = JSON.stringify([h.map(({l:b}) => b), Ha.map(({l:b}) => b), fa, a, oa,]);
}, Q = (b, c = 1) => {
  const g = ya;
  c = {j:m, H:e.length, G:c, s:[],};
  return e.push(ya = c), b(c), ya = g, c;
}, S = (b, c = m, g) => ya.s.push(...I(b, c, g)), yb = b => {
  const c = ya, g = h.length, l = {l:0, g:0, i:0, u:c, h() {
    const n = l.l, k = l.g, t = l.i, x = c.j.multiply(b);
    l.J = x;
    3 > ab(x.transformPoint()) && Ia[5] && (0.3 > k || 0.7 < k) && (l.l = n ? 0 : 1, g && 1 / 0 > va && (va = a + 1, h4.innerHTML = "* click *"), fa = g, xb());
    l.g = E(k, n, 1 - Math.exp(-4 * d));
    l.i = E(t, n, 1 - Math.exp(-1 * d));
    l.j = x.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(l);
  S(J(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
  S(J(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
  S(J(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), X(0.5, 0.5, 0.4));
}, zb = (b, ...c) => {
  let g = 0, l = 0, n = 0, k = 0, t = 0, x = 1, w = 3, z = -1;
  const A = {l:0, h() {
    if (!A.l) {
      let da = 1, Da = 1 / 0, Ea, F, G, B, C, K, N;
      for (const L of f) {
        var {x:T, z:R, w:U} = L;
        R = (T = Math.hypot(r - T, u - R)) - U;
        N ||= T < U;
        0 < R && Da > R && (Da = R, p = L);
        var O = T / U;
        da = da < O ? da : O;
      }
      N || ({x:Ea, z:F, w:G} = p, B = r - Ea, C = u - F, K = Math.hypot(B, C), Z = Math.atan2(-C, B), x && (l = (Math.random() - 0.5) * Math.PI / 2, w = v(w / (1 + Math.random()))), Z += l, z = -Math.cos(Z), g = Math.sin(Z), 0.1 < K && (K = (K < G ? K : G) / (K || 1), r = B * K + Ea, u = C * K + F));
      x = N;
      w = E(w, 6 * (1 - da) + 3, 1 - Math.exp(-(da + 3) * d));
      O = r = E(r, r + z, 1 - Math.exp(-w * d));
      y = E(y, O, 1 - Math.exp(-w * d));
      O = u = E(u, u + g, 1 - Math.exp(-w * d));
      M = E(M, O, 1 - Math.exp(-w * d));
      n = $a(n, Math.atan2(y - k, M - t) / Ra - 180, 1 - Math.exp(-3 * d),);
      k = y;
      t = M;
      var Z = (A.j = D.j.multiply(b.translate(y, 0, M).rotateSelf(0, n, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.6 > ab(Z) && (A.l = 1, O = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][aa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      va && (va = a + (aa && 12 > aa ? 5 : 7), h4.innerHTML = O), wb(), xb());
    }
    A.l && (A.j = e[2].j.translate(H % 4 * 1.2 - 1.7 + Math.sin(a + H) / 7, -2, 1.7 * (H / 4 | 0) - 5.5 + Math.abs(H % 4 - 2) + Math.cos(a / 1.5 + H) / 6,));
  },}, D = ya, H = Ha.length, f = c.map(([T, R, U]) => ({x:T, z:R, w:U,}));
  let p = f[0], {x:r, z:u} = p, y = r, M = u;
  Ha.push(A);
}, Ab = (b, c, g, l) => {
  let n = 0, k = 0, t = 0, x = 1 / 0, w = -1 / 0, z = 1 / 0, A = -1 / 0, D = 1 / 0, H = -1 / 0;
  const f = 1.1 * (g - c), p = (new DOMMatrix(eb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
  return c = q(8, r => (r = p.transformPoint({x:4 & r ? 1 : -1, y:2 & r ? 1 : -1, z:1 & r ? 1 : -1,}), n -= r.x = (f * r.x | 0) / f / r.w, k -= r.y = (f * r.y | 0) / f / r.w, t -= r.z = (f * r.z | 0) / f / r.w, r)), g = m.rotate(298, 139).translateSelf(n / 8, k / 8, t / 8), gb(c, g).map(({x:r, y:u, z:y}) => {
    x = x < r ? x : r;
    w = r < w ? w : r;
    z = z < u ? z : u;
    A = u < A ? A : u;
    D = D < y ? D : y;
    H = y < H ? H : y;
  }), D *= 0 > D ? l : 1 / l, H *= 0 < H ? l : 1 / l, m.scale(2 / (w - x), 2 / (A - z), 2 / (D - H)).translateSelf((w + x) / -2, (A + z) / -2, (D + H) / 2,).multiplySelf(g);
}, Db = () => {
  let b = !0, c, g, l, n, k, t, x, w, z, A, D, H;
  const f = () => {
    wa || !b ? Bb.disconnect() : Bb.connect(Cb.destination);
    b4.innerHTML = "Music: " + b;
  }, p = (r = !1) => {
    if (wa !== r) {
      wa = r;
      try {
        r ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : Bb.start();
      } catch {
      }
      Aa = 0;
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
    p();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    p();
    Aa = 1;
  };
  b4.onclick = () => {
    b = !b;
    f();
  };
  b5.onclick = () => p(!0);
  onclick = r => {
    H = 1;
    wa || (r.target === hC && (Ia[5] = !0), Aa && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:r, target:u, type:y, repeat:M}) => {
    M || ((M = !!y[5] && u === document.body) && ("Escape" === r || "Enter" === r && wa) ? wa && !H || p(!wa) : 5 === (y = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[r]) ? M && (Ia[y] = 1) : Ia[y] = M);
  };
  onmousemove = ({movementX:r, movementY:u}) => {
    Aa && (r || u) && (Oa += 0.1 * r, Na += 0.1 * u);
  };
  hC.ontouchstart = r => {
    if (!wa) {
      for (let {pageX:u, pageY:y, identifier:M} of r.changedTouches) {
        Aa && u > hC.clientWidth / 2 ? void 0 === w && (z = 0, t = u, x = y, w = M, A = Oa, D = Na) : void 0 === n && (k = 0, g = u, l = y, n = M);
      }
      c = ca;
    }
  };
  hC.ontouchmove = r => {
    if (!wa) {
      for (let {pageX:U, pageY:O, identifier:Z} of r.changedTouches) {
        var u, y, M, T, R;
        w === Z && (Oa = A + (U - t) / 2.3, Na = D + (O - x) / 2.3, z = 1);
        n === Z && (Z = (g - U) / 20, u = (l - O) / 20, y = Math.abs(Z), M = Math.abs(u), T = Math.atan2(u, Z), R = v(Math.hypot(u, Z) - 0.5), qa = 0.2 < y ? Math.cos(T) * R : 0, ra = 0.2 < M ? Math.sin(T) * R : 0, (qa || ra) && (k = 1), 2 < y && (g = U + 20 * Math.sign(Z)), 2 < M && (l = O + 20 * Math.sign(u)));
      }
    }
  };
  hC.ontouchend = r => {
    let u;
    document.activeElement === document.body && r.preventDefault();
    for (const y of r.changedTouches) {
      y.identifier === w ? (w = void 0, z || (u = 1), z = 0) : y.identifier === n ? (n = void 0, ra = qa = 0, k || (u = 1), k = 0) : u = 1;
    }
    u && r.target === hC && c && 0.02 < (r = ca - c) && 0.7 > r && (Ia[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Ia.length = qa = ra = 0;
    n = w = void 0;
    document.hidden && p(!0);
  })();
  p(!0);
}, Eb = () => {
  let b = 1, c = 2, g = 2, l, n, k, t, x, w, z, A, D, H, f, p, r, u, y, M, T, R;
  const U = new Int32Array(256), O = new Uint8Array(65536), Z = () => c ? h[fa].u.j : k && 1 === e[k].G && e[k].j || m, da = (F, G, B, C) => E(F, G, b || (v(Math.abs(G - F) ** 0.9 - B) + 1 / 7) * (1 - Math.exp(-(1.5 * C) * d))), Da = () => {
    let F = 0, G = 0, B = 0, C = 0;
    t = 0;
    U.fill(0);
    for (let N = 0; 31 > N; ++N) {
      let L = 0;
      const ma = 512 * N;
      for (let ba = 0; 128 > ba; ba++) {
        var K = ma + 4 * ba;
        let ea = (O[K] + O[1 + K]) / 255;
        K = O[2 + K];
        14 < ba && 114 > ba && (L += ea);
        K && ea && (ea = U[K] + 1, U[K] = ea, F > ea || (F = ea, G = K));
      }
      3 > L && 5 < N && (B += N / 32);
      3 < L && (7 < N && (C += N / 15), t = 1);
    }
    G && (t = 1);
    l = G || n;
    n = G;
    g = E(g, t ? 6.5 : -20 > Qa.y ? 11 : 8, 1 - Math.exp(-4 * d));
    Qa.y += C / 41 - (t || g) * B / 41 * g * d;
  }, Ea = () => {
    H = D = 0;
    for (let F = 32; 128 > F; F += 2) {
      let G = 0, B = 0, C = 0, K = 0;
      const N = 512 * F;
      for (let L = 1 & F; 128 > L; L += 2) {
        const ma = N + 4 * L;
        let ba = N + 4 * (127 - L);
        const ea = O[ma] / 255, ja = O[1 + ba] / 255, Ya = 1 - Math.abs(L / 63.5 - 1);
        10 < L && 118 > L && (G = Ua(Ua(ea * Ya, ea * O[ba] / 255), G), B = Ua(Ua(ja * Ya, ja * O[1 + ma] / 255), B));
        (54 > L || 74 < L) && 1e-3 < (ba = (1 - Ya) * (ja < ea ? ea : ja) / 3) && (64 > L && ba > C ? C = ba : 64 < L && ba > K && (K = ba));
      }
      Math.abs(K - C) > Math.abs(D) && (D = K - C);
      Math.abs(B - G) > Math.abs(H) && (H = B - G);
    }
  };
  Ca = () => {
    var F = Z(), {x:G, y:B, z:C} = 1 < c ? h[fa].J.transformPoint({x:0, y:fa || 0.9 < na ? 15 : 1, z:-2.4,}) : ((G = (C = F).inverse()).m41 = G.m42 = G.m43 = 0, B = G.transformPoint({x:D, z:H, w:0,}), Qa.x += B.x, Qa.z += B.z, C.transformPoint(Qa));
    let K = G - Ma.x, N = C - Ma.z;
    if (c = c && (t && l ? 0 : 1), Ma.x = G, Ma.y = B, Ma.z = C, c || l !== k) {
      k = l;
      const L = (F = Z()).inverse().transformPoint(Ma);
      Qa.x = L.x;
      Qa.y = L.y;
      Qa.z = L.z;
    }
    l && (f = K / d, p = N / d);
    A = E(A, pa * (27 < l && 32 > l), 1 - Math.exp(-2 * d));
    B < (-25 > G || 109 > C ? -25 : -9) && (f = p = r = 0, c = 2);
    1 === l && (h[9].l = -15 > G && 0 > C ? 1 : 0);
    u = E(E(u, B, 1 - Math.exp(-2 * d)), B, c || 8 * Math.abs(u - B));
    M = da(M, u, 2, 1);
    y = da(y, G, 0.5, 1);
    T = da(T, C, 0.5, 1);
    Aa ? (F = c + (1 - Math.exp(-18 * d)), sa = E(sa, G, F), ta = E(ta, u + 1.5, F), ua = E(ua, C, F), Oa = Xa(Oa)) : (ta = da(ta, Ua(M + v((-60 - C) / 8, 0, 20) + 13 + 9 * A, 6,), 4, 2,), ua = da(ua, T + -18 + 5 * A, 1, 2 + A,), sa = da(sa, y, 1, 2 + A,), F = -Math.abs(T - ua), K = 4 < F ? 4 : F, N = y - sa, Oa = $a(Oa, 90 - Xa(Math.atan2(K, N) / Ra), b + (1 - Math.exp(-6 * d)),), Na = $a(Na, 90 - Math.atan2(Math.hypot(K, N), ta - M) / Ra, b + (1 - Math.exp(-6 * d)),));
    Na = v(Na, -87, 87);
    b = 0;
    e[37].j = m.translate(G, u, C).rotateSelf(0, w);
    for (F = 0; 2 > F; ++F) {
      e[38 + F].j = e[37].j.translate(0, z * v(0.45 * Math.sin(9.1 * a + Math.PI * (F - 1) - Math.PI / 2)),).rotateSelf(z * Math.sin(9.1 * a + Math.PI * (F - 1)) * 0.25 / Ra, 0);
    }
  };
  Ba = () => {
    var F = ra + (Ia[1] ? 1 : 0) - (Ia[3] ? 1 : 0), G = qa + (Ia[0] ? 1 : 0) - (Ia[2] ? 1 : 0);
    if (C = navigator.getGamepads()[0]) {
      const K = C.buttons, N = C.axes;
      C = (B = L => K[L]?.pressed || 0 < K[L]?.value ? 1 : 0)(3) || B(2) || B(1) || B(0);
      F += B(12) - B(13) - Va(N[1], 0.2);
      G += B(14) - B(15) - Va(N[0], 0.2);
      Aa && (Na += d * Va(N[3], 0.3) * 80, Oa += d * Va(N[2], 0.3) * 80);
      C && !R && (Ia[5] = 1);
      R = C;
    }
    var B = Math.atan2(F, G), C = Va(v(Math.hypot(F, G)), 0.05);
    F = (Y.fa7(), Y.r9r(0, 0, 128, 128, 6408, 5121, O), Y.iay(36008, [36064, 36096,]), Y.iay(36009, [36064, 36096,]), NO_INLINE(Ea)(), NO_INLINE(Da)(), v(1 - 5 * Ua(Math.abs(D), Math.abs(H))));
    G = Aa ? Oa * Ra : Math.PI;
    z = E(z, C, 1 - Math.exp(-10 * d));
    C && (x = 90 - B / Ra);
    w = $a(w, x, 8 * d);
    r = E(r, t * F * v(2 * C) * 7, 1 - Math.exp(-(t ? 0.1 < F ? 10 : 5 + 2 * C : 1) * d));
    f = E(f, 0, 1 - Math.exp(-(t ? 8 : 4) * d));
    D += d * ((l ? 0 : F * f) - Math.cos(B + G) * C * r);
    p = E(p, 0, 1 - Math.exp(-(t ? 8 : 4) * d));
    H += d * ((l ? 0 : F * p) - Math.sin(B + G) * C * r);
    NO_INLINE(Ca)();
    Ia[5] = 0;
  };
}, Jb = (b, c = 35633) => (c = Y.c6x(c), Y.s3c(c, b), Y.c6a(c), c), Kb = (b, c) => {
  const g = {}, l = Y.c1h();
  return Y.abz(l, b), Y.abz(l, Jb(c, 35632)), Y.l8l(l), n => n ? g[n] || (g[n] = Y.gan(l, n)) : Y.u7y(l);
}, Lb = (b, c, g, l) => {
  if (wa) {
    g = m.rotate(0, 40 * Math.sin(ca) - 70);
    for (var n of [37, 38, 39,]) {
      db(g, Ta, n - 1);
    }
    Y.uae(b, !1, Ta);
    Y.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
  } else {
    for (n = 0; e.length > n; ++n) {
      e[n].G && db(e[n].j, Ta, n - 1);
    }
    Y.uae(b, !1, Ta);
    Y.d97(4, (c ? e[39].F : e[37].v) - 3, 5123, 6);
    for (c = 0; 13 > c; ++c) {
      db(Ha[c].j, Ta, c);
    }
    for (c = 0; h.length > c; ++c) {
      db(h[c].j, Ta, c + 13), l || (Ta[16 * (c + 13) + 15] = 1 - h[c].g);
    }
    Y.uae(b, !1, Ta);
    Y.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,);
    Y.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Mb = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Nb = b => Math.sin(b * Math.PI * 2), Ob = b => 0.5 > b % 1 ? 1 : -1, Pb = b => b % 1 * 2 - 1, Qb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Vb = b => {
  let c = 0;
  const g = new Int32Array(10725888), l = () => {
    const k = Cb.createBuffer(2, 5362944, 44100);
    for (let t = 0; 2 > t; t++) {
      for (let x = t, w = k.getChannelData(t); 10725888 > x; x += 2) {
        w[x >> 1] = g[x] / 65536;
      }
    }
    Bb.buffer = k;
    Bb.loop = !0;
    Mb(b);
  }, n = () => {
    let k = 0;
    const t = B => {
      let C = 0, K = 0, N, L, ma, ba;
      const ea = [], ja = new Int32Array(768 * B), Ya = 2 ** (T - 9) / B, Rb = Math.PI * 2 ** (da - 8) / B, pb = Ea * B & -2;
      for (let jb = 0; 11 >= jb; ++jb) {
        for (let kb = 0, Fb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + jb], Gb = (32 * jb + kb) * B; 32 > kb; ++kb) {
          for (let za = 0; 4 > za; ++za) {
            if (L = 0, Fb && (L = x[Fb - 1].charCodeAt(kb + 32 * za) - 40, L += 0 < L ? 106 : 0), L) {
              var Pa;
              if (!(Pa = ea[L])) {
                Pa = L;
                let V = void 0, W = void 0;
                var Hb = L;
                let Za = 0, Sb = 0;
                const Tb = 2 > c ? Pb : Nb, Ub = 2 > c ? 1 > c ? Ob : Qb : Nb, Ib = new Int32Array(r + u + G);
                for (let Fa = 0, qb = 0; r + u + G > Fa; ++Fa, ++qb) {
                  let Ga = 1;
                  r > Fa ? Ga = Fa / r : r + u > Fa || (Ga = (1 - (Ga = (Fa - r - u) / G)) * 3 ** (M / -16 * Ga));
                  0 > qb || (W = 396e-5 * 2 ** ((Hb + z - 256) / 12), V = 396e-5 * 2 ** ((Hb + H - 256) / 12) * (c ? 1 : 1.0072), qb -= 4 * B);
                  Ib[Fa] = 80 * (Tb(Za += W * Ga ** (A / 32)) * w + Ub(Sb += V * Ga ** (f / 32)) * D + (p ? (2 * Math.random() - 1) * p : 0)) * Ga;
                }
                Pa = ea[Pa] = Ib;
              }
              for (let V = 0, W = 2 * Gb; Pa.length > V; ++V, W += 2) {
                ja[W] += Pa[V];
              }
            }
          }
          for (let za, V, W, Za = 0; B > Za; ++Za) {
            W = 2 * (Gb + Za), za = 0, ((V = ja[W]) || ba) && (ma = 308e-5 * R, 1 !== c && 4 !== c || (ma *= Math.sin(Ya * W * Math.PI * 2) * F / 512 + 0.5), ma = 1.5 * Math.sin(ma), C += ma * K, N = (1 - U / 255) * (V - K) - C, K += ma * N, V = 4 === c ? K : 3 === c ? N : C, c || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= O / 32, ba = 1e-5 < V * V, N = Math.sin(Rb * W) * Z / 512 + 0.5, za = V * (1 - N), V *= N), W < pb || (za += ja[1 + W - pb] * Da / 
            255, V += ja[W - pb] * Da / 255), g[k + W] += ja[W] = za, ++W, g[k + W] += ja[W] = V;
          }
        }
      }
      k += 768 * B;
    }, x = Ka[c], [w, z, A, D, H, f, p, r, u, y, M, T, R, U, O, Z, da, Da, Ea, F] = La[c], G = 4 * y ** 2;
    t(5513);
    t(4562);
    t(3891);
    Mb(5 > ++c ? n : l);
  };
  Mb(n);
}, Wb = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), X = NO_INLINE((b, c, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b), Cb = new AudioContext(), Bb = Cb.createBufferSource(), Y = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in Y) {
  Y[b[0] + [...b,].reduce((c, g, l) => (c * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Y[b];
}
Mb(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      const l = p => {
        let r;
        Y.f1s();
        requestAnimationFrame(l);
        u = (p - (xa || p)) / 1e3;
        wa ? (d = 0, Ia[5] = 0) : d = 0.066 < u ? 0.066 : u;
        a += d;
        ca += u;
        xa = p;
        0 < d && (vb(), Ba());
        0 < d && ({x:u, y:p, z:r} = Ma, w(), Y.b6o(36160, H), Y.v5y(0, 0, 128, 128), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(w("b"), !1, db(m.rotate(0, 180).invertSelf().translateSelf(-u, -p, 0.3 - r)),), Lb(w("c"), 0, 41, 0), Y.c4s(256), Y.cbf(!1, !0, !0, !1), Y.uae(w("b"), !1, db(m.translate(-u, -p, -r - 0.3))), Lb(w("c"), 0, 41, 0), Y.f1s());
        var u = wa ? m.rotate(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : m.rotate(-Na, -Oa).invertSelf().translateSelf(-sa, -ta, -ua,);
        t();
        Y.b6o(36160, D);
        Y.v5y(0, 0, 2048, 2048);
        A[0](Ab(u, 0.3, 55, 10));
        A[1](Ab(u, 55, 186, 11));
        z();
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.cbf(!0, !0, !0, !0);
        Y.c4s(16640);
        A[0]();
        A[1]();
        Y.uae(z("a"), !1, eb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
        Y.uae(z("b"), !1, db(u));
        Y.ubu(z("k"), sa, ta, ua);
        Lb(z("c"), !Aa, 42, 0);
        x();
        Y.ubu(x("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ca);
        Y.ubu(x("k"), sa, ta, ua);
        Y.uae(x("b"), !1, db(u.inverse()));
        Y.d97(4, 3, 5123, 0);
        Y.b6o(36160, H);
        Y.f1s();
      }, n = g;
      let k = Jb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const t = Kb(Jb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), x = Kb(Jb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), w = Kb(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), z = Kb(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), A = q(2, p => {
        const r = new Float32Array(16), u = Y.c25();
        return Y.a4v(33984 + p), Y.b9j(3553, u), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), y => {
          y ? (db(y, r), Y.uae(t("b"), !1, r), Y.fas(36160, 36096, 3553, u, 0), Y.c4s(256), Lb(t("c"), !Aa, 42, 1)) : Y.uae(z(p ? "j" : "i"), !1, r);
        };
      }), D = Y.c5w(), H = (k = Y.c3z(), Y.c5w()), f = Y.c25();
      w();
      Y.uae(w("a"), !1, eb(1.4, 0.59, 1e-4, 1));
      z();
      Y.ubh(z("q"), 2);
      Y.ubh(z("h"), 1);
      Y.ubh(z("g"), 0);
      x();
      Y.ubh(x("q"), 2);
      Y.b6o(36160, D);
      Y.d45([0,]);
      Y.r9l(0);
      Y.b6o(36160, H);
      Y.bb1(36161, k);
      Y.r4v(36161, 33189, 128, 128);
      Y.f8w(36160, 36096, 36161, k);
      Y.a4v(33986);
      Y.b9j(3553, f);
      Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Y.fas(36160, 36064, 3553, f, 0);
      Y.b9j(3553, Y.c25());
      Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, n);
      Y.gbn(3553);
      Y.t2z(3553, 10241, 9987);
      Y.t2z(3553, 10240, 9729);
      Y.e8z(2929);
      Y.e8z(2884);
      Y.c70(1);
      Y.c7a(1029);
      Y.d4n(515);
      Y.c5t(0, 0, 0, 1);
      vb();
      NO_INLINE(Eb)();
      NO_INLINE(Db)();
      requestAnimationFrame(l);
    }
  }, g = new Image();
  g.onload = g.onerror = c;
  g.src = Wb;
  NO_INLINE(Vb)(() => {
    Mb(() => {
      let k = 0, t;
      const x = [], w = [], z = [], A = [], D = new Int32Array(8), H = new Map(), f = u => {
        let {x:y, y:M, z:T} = t[u], R = (r[0] = y, r[1] = M, r[2] = T, u = "" + (t.D ? p : D), H.get(u));
        return void 0 !== R ? (y = 3 * R, A[y] = (A[y++] + D[5]) / 2, A[y] = (A[y++] + D[6]) / 2, A[y] = (A[y] + D[7]) / 2) : (H.set(u, R = H.size), w.push(y, M, T, r[3]), z.push(D[4]), A.push(D[5], D[6], D[7])), R;
      }, p = new Int32Array(D.buffer, 0, 5), r = new Float32Array(D.buffer);
      for (const u of e) {
        for (t of (r[3] = 40 === u.H ? -14 : u.G && u.H, u.s)) {
          const {x:y, y:M, z:T} = cb(t);
          D[4] = 0 | t.A;
          D[5] = 32767 * y;
          D[6] = 32767 * M;
          D[7] = 32767 * T;
          for (let R = 2, U = f(0), O = f(1); t.length > R; ++R) {
            x.push(U, O, O = f(R));
          }
        }
        u.s = null;
        u.v = k;
        u.F = k = x.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(w), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(A), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(z), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(x), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Mb(c);
      try {
        const [u, y, M, T, R] = JSON.parse(localStorage.I,);
        h.map((U, O) => U.g = U.i = U.l = O ? 0 | u[O] : 0);
        Ha.map((U, O) => U.l = 0 | y[O]);
        fa = M;
        a = T;
        oa = R;
      } catch {
      }
      na = v(fa);
    });
    const l = q(11, k => m.translate(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), n = q(10, k => ib(gb(hb(18), l[k]).reverse(), gb(hb(18), l[k + 1]), 1,)).flat();
    Q(() => S([Ja.slice(1),], m.translate(-2).scale3d(3).rotate(90, 0)), 0);
    Q(() => {
      const k = (f, p, r) => Q(u => {
        u.h = () => m.translate(w() * Math.sin(3 * f + a * f) * p);
        Ja.map(({x:y, z:M}) => {
          S(J(11, 1), m.translate(4 * y, 4, r + 4 * M).scale(0.8, 3, 0.8), X(0.5, 0.3, 0.7, 0.6),);
          S(J(), m.translate(4 * y, 7, r + 4 * M).scale(1, 0.3), X(0.5, 0.5, 0.5, 0.3),);
        });
        S(P(I(J(), m.translate(0, 0, r).scale(5, 1, 5), X(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(y => I(J(), m.translate(5 * y, 0.2, r).rotate(-30 * y).scale(4, 1, 2), X(0.8, 0.8, 0.8, 0.3),)),),);
        S(J(), m.translate(0, -3, r).scale(8, 2, 8), X(0.4, 0.4, 0.4, 0.3));
      }), t = (f, p, r) => m.translate(f + Math.sin(a + 2) / 5, p + Math.sin(0.8 * a) / 3, r).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), x = f => P(I(J(), m.translate(0, -f / 2).scale(6, f - 1, 2.2)), I(J(), m.translate(0, -f / 2 - 6).scale(4, f - 3, 4)), I(J(32, 1), m.translate(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), w = () => {
        var f = h[2].i, p = 1 - h[4].i;
        return f < p ? f : p;
      }, z = P(I(J(20, 1, 1.15, 1), m.translate(0, -3).scale(3.5, 1, 3.5), X(0.7, 0.4, 0.25, 0.7),), I(J(20, 1, 1.3, 1), m.translate(0, -2.5).scale(2.6, 1, 3), X(0.7, 0.4, 0.25, 0.2),), I(J(), m.translate(4, -1.2).scale3d(2), X(0.7, 0.4, 0.25, 0.3)),), A = q(7, f => I(J(6, 1), m.translate(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), X(0.3, 0.3, 0.38),)).flat(), D = (Q(f => {
        f.h = () => t(-12, 4.2, 40 * na - 66);
        S(z);
        yb(m.translate(0, -3, 4));
      }), yb(m.translate(-5.4, 1.5, -19).rotate(0, -90)), zb(m.translate(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), zb(m.translate(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...hb(18).map(({x:f, z:p}) => [7 * f, 10 * p, 4.5 - 2 * Math.abs(f),]),), S(J(), m.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(0.8, 0.8, 0.8, 0.2),), Ja.map(({x:f, z:p}) => S(J(6), m.translate(3 * f, 3, 15 * p).scale(0.7, 4, 0.7), X(0.6, 0.3, 0.3, 0.4),)), [-23, 22,].map(f => S(J(), m.translate(0, 0, f).scale(3, 1, 8), 
      X(0.9, 0.9, 0.9, 0.2))), [-15, 15,].map((f, p) => {
        S(J(), m.translate(0, 6.3, f).scale(4, 0.3, 1), X(0.3, 0.3, 0.3, 0.4));
        S(J(), m.translate(0, 1, f).scale(3, 0.2, 0.35), X(0.5, 0.5, 0.5, 0.3));
        Q(r => {
          r.h = () => m.translate(0, 0, f).scale(1, v(1.22 - h[p + 1].g), 1);
          S(A);
        });
      }), q(5, f => q(2, p => S(n, m.translate(18.5 * (p - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2,), X(1, 1, 0.8, 0.2),)),), S(J(), m.translate(3, 1.5, -20).scale(0.5, 2, 5), X(0.7, 0.7, 0.7, 0.2)), S(J(), m.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(0.75, 0.75, 0.75, 0.2),), S(J(5), m.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(0.6, 0.3, 0.3, 0.4),), S(J(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), X(0.8, 
      0.2, 0.2, 0.5),), S(P(ub(I(J(6, 0, 0, 0.3), m.translate(8, -3, -4).scale(13, 1, 13), X(0.7, 0.7, 0.7, 0.2),), I(J(6), m.translate(0, -8).scale(9, 8, 8), X(0.4, 0.2, 0.5, 0.5),), I(J(6, 0, 0, 0.3), m.translate(0, -0.92).scale(13, 2, 13), X(0.8, 0.8, 0.8, 0.2),),), I(J(5), m.scale(5, 30, 5), X(0.4, 0.2, 0.6, 0.5)), I(J(5, 0, 1.5), m.translate(0, 1).scale(4.5, 0.3, 4.5), X(0.7, 0.5, 0.9, 0.2),), I(J(), m.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), X(0.5, 0.5, 0.5, 0.5),), 
      I(J(6), m.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(0.5, 0.5, 0.5, 0.5),),),), Q(f => {
        f.h = () => m.translate(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        S(J(5), m.translate(0, -0.2).scale(5, 1, 5), X(0.6, 0.65, 0.7, 0.3));
        yb(m.translate(0, 1.2));
      }), yb(m.translate(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), Q(f => {
        f.h = () => m.translate(w() * Math.sin(a / 1.5 + 2) * 12);
        S(P(ub(I(J(), m.scale(1.5, 1, 5), X(0.9, 0.9, 0.9, 0.2)), I(J(6), m.scale(4, 1, 5), X(0.9, 0.9, 0.9, 0.2)), I(J(), m.translate(0, -2).scale(2, 3.2, 1.9), X(0.3, 0.8, 0.5, 0.5),), I(J(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), X(0.9, 0.9, 0.9, 0.2),),), I(J(), m.scale(1.3, 10, 1.3), X(0.2, 0.7, 0.4, 0.6)),), m.translate(0, 0, 45),);
        zb(m.translate(0, 2.8, 45), [0, 0, 4.5,]);
      }), S(J(), m.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2),), Q(f => {
        f.h = () => m.translate(9.8 * (1 - w()));
        S(J(3), m.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), X(0.3, 0.6, 0.6, 0.2),);
        S(J(8), m.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(0.8, 0.8, 0.8, 0.2),);
        S(J(), m.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(0.5, 0.5, 0.5, 0.3));
        S(J(), m.translate(-23, -2.2, 62).scale(3, 1, 4), X(0.5, 0.5, 0.5, 0.3));
        yb(m.translate(-23, -0.5, 66.5));
      }), Q(f => {
        f.h = () => m.translate(0, v(1 - 5 * w()) * Wa(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        S(J(), m.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(0.7, 0.7, 0.7, 0.2),);
        S(P(I(J(), m.scale(3, 1.4, 2.7)), I(J(), m.scale(1.2, 8, 1.2)),), m.translate(-33, -3, 55), X(0.7, 0.7, 0.7, 0.2),);
      }), Q(f => {
        f.h = () => m.translate(0, 0, v(1 - 5 * w()) * Wa(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        S(P(I(J(), m.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2),), I(J(), m.translate(-27, -3, 55).scale(1, 3), X(0.9, 0.9, 0.9, 0.2),),),);
        S(J(), m.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2));
      }), Q(f => {
        f.h = () => m.translate(0, -6.5 * h[4].i);
        S(J(6), m.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), X(0.7, 0.7, 0.7, 0.4),);
      }), yb(m.translate(-55, -1.1, 46).rotate(0, 90)), S(J(6), m.translate(-61.3, -2.4, 49).scale(3, 1, 5), X(0.4, 0.6, 0.6, 0.3)), S(J(7), m.translate(-57, -2.6, 46).scale(4, 1, 4), X(0.8, 0.8, 0.8, 0.3)), [...I(J(), m.translate(0, -3).scale(11, 1.4, 3), X(0.9, 0.9, 0.9, 0.2),), ...P(I(J(6), m.rotate(90).scale(6, 8, 6), X(0.3, 0.6, 0.6, 0.3)), I(J(4, 0, 0.01), m.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), X(0.3, 0.6, 0.6, 0.3),), I(J(6), m.rotate(90).scale(5, 12, 5), X(0.3, 0.6, 0.6, 0.3)), 
      ...[5, 0, -5,].map(f => I(J(5), m.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(0.3, 0.6, 0.6, 0.3),)),),]), H = (S(D, m.translate(-53, 0, 55)), Q(f => {
        f.h = () => m.translate(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ka, 0,);
        S(D);
      }, 2), S(J(), m.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), X(0.7, 0.7, 0.7, 0.2),), S(J(3, 0, -0.5), m.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), X(0.8, 0.8, 0.8, 0.2),), S(P(ub(I(J(), m.translate(-100, -2.5, 55).scale(8, 1, 8), X(0.8, 0.8, 0.8, 0.2),), I(J(), m.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(0.8, 0.8, 0.8, 0.2),), I(J(), m.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(0.8, 0.8, 0.8, 0.2),), I(J(), m.translate(-96, -2.6, 73).rotate(0, 
      45).scale(3, 1.1, 5), X(0.8, 0.8, 0.8, 0.2),), I(J(6), m.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(0.6, 0.6, 0.6, 0.3),), I(J(), m.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(0.8, 0.8, 0.8, 0.2),), I(J(), m.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), X(0.8, 0.8, 0.8, 0.2),),), I(J(8), m.translate(-100, -1, 55).scale(7, 0.9, 7), X(0.3, 0.3, 0.3, 0.4),), I(J(8), m.translate(-100, -2, 55).scale(4, 0.3, 4), X(0.4, 0.4, 0.4, 0.5),), I(J(8), m.translate(-100, 
      -3, 55).scale(0.6, 1, 0.6), X(0.4, 0.4, 0.4, 0.5),),),), zb(m.translate(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), zb(m.translate(-89, 0.2, 80), [0, 0, 6,]), S(P(I(J(), m.translate(-100, 1, 63).scale(7.5, 4), X(0.5, 0.5, 0.5, 0.4),), I(J(), m.translate(-100, 0, 70).scale(2, 2, 10), X(0.5, 0.5, 0.5, 0.4),), I(J(20, 1), m.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(0.5, 0.5, 0.5, 0.4),),),), Q(f => {
        f.h = () => m.translate(-99.7, -1.9, 63.5).scale(1, v(1.1 - h[6].g), 1);
        S(A);
      }), Ja.map(({x:f, z:p}) => {
        S(J(6), m.translate(7 * f - 100, -3, 7 * p + 55).scale(1, 8.1), X(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(r => S(J(6), m.translate(7 * f - 100, r, 7 * p + 55).scale(1.3, 0.5, 1.3), X(0.4, 0.2, 0.2, 0.8),));
      }), q(7, f => {
        S(J((23 * f + 1) % 5 + 5, 0, 0.55), m.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), X(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), S(J(), m.translate(-87, -9.5, 24).scale(7, 1, 3), X(0.4, 0.5, 0.6, 0.4)), S(J(4), m.translate(-86, -9.2, 27).scale(5, 1, 5), X(0.5, 0.6, 0.7, 0.3)), S(J(12, 1), m.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(0.3, 0.3, 0.4, 0.1),), yb(m.translate(-86, -7.5, 31)), Q(f => {
        f.h = () => m.translate(0, 3.5 * (1 - Ua(h[6].g, h[7].g)) + Wa(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24,].map(p => S(J(), m.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.2, 0.5, 0.6, 0.2),));
      }), Q(f => {
        f.h = () => m.translate(0, Wa(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Wa(h[7].i, h[6].i),);
        [6, 18,].map(p => S(J(), m.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.1, 0.4, 0.5, 0.2),));
      }), S(P(ub(I(J(5), m.translate(0, 0, -7).scale(2, 1.2, 2), X(0.2, 0.4, 0.7, 0.3),), I(J(5), m.scale(9, 1.2, 9), X(0, 0.2, 0.3, 0.5)), I(J(), m.scale(11, 1, 13), X(0.3, 0.4, 0.6, 0.3)),), I(J(5), m.scale(5.4, 5, 5.4), X(0, 0.2, 0.3, 0.5)),), m.translate(-38.9, -11.3, 17),), yb(m.translate(-38.9, -9.6, 10)), Q(f => {
        f.h = () => m.translate(0, -7.3 * h[7].i);
        S(P(ub(I(J(5), m.translate(0, 2).scale(5, 7, 5).skewY(8), X(0.2, 0.4, 0.5, 0.5),), I(J(5), m.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(0.25, 0.35, 0.5, 0.5),), I(J(5), m.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), X(0.35, 0.3, 0.5, 0.5),),), I(J(5), m.scale(4, 8, 4), X(0.2, 0.4, 0.5, 0.5)), I(J(5), m.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(0.2, 0.4, 0.5, 0.5),),), m.translate(-38.9, -11.3, 17),);
        zb(m.translate(-39.1, -0.6, 17).rotate(11), ...hb(15).map(({x:p, z:r}) => [3 * p, 3 * r, 1.2,]),);
      }), Ja.map(({x:f, z:p}) => {
        S(J(14, 1), m.translate(9 * f - 38.9, -7.3, 11 * p + 17).scale(1, 4), X(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(r => S(J(17, 1), m.translate(9 * f - 38.9, -7.3, 11 * p + 17).translate(0, r - 4).scale(1.5, 0.5, 1.5), X(0.6, 0.6, 0.6, 0.3),));
      }), S(P(ub(I(J(6), m.translate(0, 0, -36).scale(15, 1.2, 15), X(0.7, 0.7, 0.7, 0.3),), I(J(), m.translate(0, 0, -18).scale(4, 1.2, 6), X(0.45, 0.4, 0.6, 0.3),),), ...q(6, f => q(6, p => I(J(6), m.translate(4.6 * p - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * p)).scale(2, 5, 2,), X(0.7, 0.7, 0.7, 0.3),))).flat(),), m.translate(-38.9, -11.3, 17),), zb(m.translate(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), S(J(5), m.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), X(0.8, 0.1, 0.25, 0.4),), yb(m.translate(-84, -0.5, 85).rotate(0, 45)), Q(f => {
        f.h = () => t(-123, 1.4, 55 + -65 * oa);
        S(z);
        yb(m.translate(0, -3, -4).rotate(0, 180));
      }), P(I(J(), m.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(0.25, 0.25, 0.35, 0.3),), I(J(3), m.translate(0, 0, -5.5).scale(3, 2), X(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2,].map(f => I(J(), m.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), X(0.7, 0.2, 0, 0.3),)),));
      Q(f => {
        f.h = () => m.translate(0, -2, Wa(h[10].g, h[11].g) * Math.abs(Math.sin(1.1 * a)) * -8.5 + 10);
        q(2, p => S(H, m.translate(9 * p - 110 + (1 & p), 1.7, -12)));
      });
      Q(f => {
        f.h = () => m.translate(0, -2, Wa(h[10].g, h[11].g) * Math.abs(Math.sin(2.1 * a)) * -8.5 + 10);
        q(2, p => S(H, m.translate(9 * (p + 2) - 110 + (1 & p), 1.7, -12)),);
      });
      Q(f => {
        f.h = () => m.translate(0, -2, -8.5 * Ua((1 - h[10].g) * (1 - Wa(h[10].g, h[11].g)), Wa(h[10].g, h[11].g) * Math.abs(Math.sin(1.5 * a)),) + 10,);
        q(3, p => S(H, m.translate(9 * p - 106, 1.7, -12)));
      });
      S(P(ub(I(J(), m.translate(26.5, -1.6, 10).scale(20, 2.08, 3)), I(J(), m.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...q(4, f => I(J(), m.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...q(3, f => I(J(), m.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), m.translate(-123, 0, -12), X(0.5, 0.5, 0.6, 0.2),);
      yb(m.translate(-116, -1.4, -18).rotate(0, 180));
      S(J(), m.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), X(0.8, 0.8, 0.8, 0.2),);
      S(J(6), m.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), X(0.6, 0.5, 0.7, 0.2),);
      S(J(), m.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), X(0.6, 0.6, 0.6, 0.3),);
      S(J(8), m.translate(-114, -17, -2).scale(2, 15, 2), X(0.6, 0.6, 0.6, 0.3));
      S(J(8), m.translate(-79, -17, -2).scale(2, 15, 2), X(1, 1, 1, 0.3));
      S(J(), m.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), X(0.6, 0.6, 0.6, 0.3),);
      q(3, f => {
        S(x(16), m.translate(12 * f - 109, -9, -12), X(0.6, 0.6, 0.6, 0.3),);
        S(x(16), m.translate(-77, -9, -12 * f - 20).rotate(0, 90), X(0.6, 0.6, 0.6, 0.3),);
      });
      S(P(I(J(12), m.translate(-77, -14.5, -12).scale(4, 17.5, 4), X(0.7, 0.7, 0.7, 0.2),), I(J(), m.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), X(0.4, 0.5, 0.6, 0.2),), I(J(), m.translate(-77, 0.1, -14).scale(1.5, 2, 2), X(0.4, 0.5, 0.6, 0.2),), I(J(12), m.translate(-77, 3.1, -12).scale(3, 5, 3), X(0.4, 0.5, 0.6, 0.2),),),);
      S(J(), m.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), X(0.6, 0.6, 0.6, 0.3),);
      S(J(9), m.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), X(0.5, 0.5, 0.5, 0.3),);
      S(P(I(J(), m.translate(-93, -5.8, -40).scale(9, 1, 5), X(0.8, 0.8, 0.8, 0.1),), I(J(9), m.translate(-98, -5.8, -40).scale(3, 8, 3), X(0.7, 0.7, 0.7, 0.2),),),);
      yb(m.translate(-98, -4.4, -40).rotate(0, 90));
      zb(m.translate(-115, 0.2, -12), [0, 0, 3.5,]);
      zb(m.translate(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      S(P(ub(I(J(6, 0, 0, 0.6), m.translate(-100, 0.7, 105.5).scale(8, 1, 11), X(0.7, 0.7, 0.7, 0.2),), I(J(), m.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), X(0.7, 0.7, 0.7, 0.2),),), I(J(5), m.translate(-100, 0.7, 113).scale(4, 3, 4), X(0.7, 0.7, 0.7, 0.2),),),);
      q(4, f => Q(p => {
        p.h = () => {
          const r = Wa(h[8].i, h[12].i);
          return m.translate((2 < f ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + (0.05 < r ? r : 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        S(J(6), m.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), X(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      Q(f => {
        f.h = () => {
          const p = Wa(h[8].i, h[12].i);
          return m.translate(2.5 * (1 - p) - 139.7, -3 * (1 - h[8].g) + p * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * p + 3), 0);
        };
        S(P(I(J(10), m.scale(6, 2, 6), X(0.1, 0.6, 0.5, 0.3)), I(J(10), m.scale(3.3, 6, 3.3), X(0.1, 0.6, 0.5, 0.5)),),);
        S(J(15, 1), m.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), X(0.4, 0.4, 0.4, 0.3),);
        S(J(10), m.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), X(0.3, 0.8, 0.7, 0.3),);
        S(J(5), m.translate(-7.5).rotate(0, 90).scale(1, 3), X(0.5, 0.5, 0.5, 0.5),);
        yb(m.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(p => S(n, m.rotate(90 * -p, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), X(1, 1, 0.8, 0.2),));
        zb(m.translate(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        S(J(12, 1), m.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), X(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(p => S(J(15, 1), m.translate(-7.5 * f - 100, p + 0.7, 96).scale(1.1, 0.5, 1.1), X(0.5, 0.24, 0.2, 0.4),));
        S(n, m.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), X(1, 1, 0.8),);
        S(P(I(J(), m.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), X(0.5, 0.5, 0.5, 0.4),), I(J(), m.scale(3, 3, 10), X(0.6, 0.24, 0.2, 0.5)), I(J(28, 1), m.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(0.6, 0.24, 0.2, 0.5),), I(J(5), m.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(0.6, 0.24, 0.2, 0.5),), I(J(5), m.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), X(0.6, 0.24, 0.2, 0.5),),), m.translate(f - 100, 0.7, 97),);
      });
      Q(f => {
        f.h = () => m.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        S(A);
      });
      S(P(I(J(), m.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), X(0.7, 0.7, 0.7, 0.1),), I(J(45, 1), m.translate(-81, 0.7, 106).scale3d(7.7), X(0.7, 0.7, 0.7, 0.1),),),);
      Q(f => {
        f.h = () => m.translate(-81, 0.6, 106).rotate(0, 40 + ha);
        S(P(I(J(45, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)), I(J(), m.translate(0, 0, -5.5).scale(1.5, 3, 2.7), X(0.45, 0.45, 0.45, 0.2),),),);
        S(J(8), m.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), X(0.7, 0.7, 0.7, 0.1),);
        S(J(5), m.translate(0, 2).scale(1, 2), X(0.3, 0.3, 0.3, 0.2));
        zb(m.translate(0, 3), ...hb(14).map(({x:p, z:r}) => [5.6 * p, 5.6 * r, 2,]),);
      });
      Q(f => {
        f.h = () => m.translate(-65.8, 0.8, 106).rotate(0, ia);
        [-1, 1,].map(p => S(n, m.rotate(0, 90).translate(-5 * p, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * p + 90), X(1, 1, 0.8),));
        S(P(I(J(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3),), I(J(), m.scale(9, 5, 2), X(0.3, 0, 0, 0.3)),),);
        S(I(J(28, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),);
        S(I(J(5), m.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2),),);
      });
      Q(f => {
        f.h = () => m.translate(-50.7, 0.8, 106).rotate(0, 180 - ia);
        S(P(I(J(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3),), I(J(), m.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)), I(J(), m.translate(0, 0, 7).scale(2, 5, 9), X(0.3, 0, 0, 0.3),),),);
        S(I(J(28, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),);
        S(I(J(5), m.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2),),);
      });
      Q(f => {
        f.h = () => m.translate(-50.7, 0.8, 91).rotate(0, 270 + ia);
        S(P(I(J(28, 1), m.translate(0, 2).scale(7.5, 1, 7.5), X(0.35, 0, 0, 0.3),), I(J(), m.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)), I(J(), m.translate(0, 0, -7).scale(2, 5, 9), X(0.3, 0, 0, 0.3),),),);
        S(I(J(28, 1), m.scale(7.5, 1, 7.5), X(0.45, 0.45, 0.45, 0.2)),);
        S(I(J(5), m.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2),),);
      });
      S(J(), m.translate(-58, 1, 106).scale(2, 0.65, 2), X(0.7, 0.7, 0.7, 0.2));
      S(J(), m.translate(-50.7, 1, 99).scale(2, 0.65, 1), X(0.7, 0.7, 0.7, 0.2));
      S(J(), m.translate(-42, 0.4, 91).scale(5, 1, 2.5), X(0.7, 0.7, 0.7, 0.3));
      S(J(), m.translate(-34.2, 0.4, 91).scale(3, 1, 3), X(0.7, 0.7, 0.7, 0.3));
      yb(m.translate(-34, 2.7, 96).rotate(-12, 0));
      S(J(5), m.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), X(0.2, 0.5, 0.5, 0.6),);
      [X(0.1, 0.55, 0.45, 0.2), X(0.2, 0.5, 0.5, 0.3), X(0.3, 0.45, 0.55, 0.4),].map((f, p) => Q(r => {
        r.h = () => m.translate(0, (1 - h[13].i) * (1 - h[14].i) * (p ? 0 : 3) + Wa(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * p) * 4,);
        S(J(), m.translate(-23.5, 0.5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), f,);
        2 === p && S(J(), m.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), X(0.7, 0.7, 0.7, 0.3),);
        1 === p && S(J(), m.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), X(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => S(n, m.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), X(1, 1, 0.8),));
      q(3, f => S(x(24.7 - 0.7 * (1 & f)), m.translate(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? X(0.5, 0.5, 0.5, 0.3) : X(0.35, 0.35, 0.35, 0.5),),);
      S(P(I(J(6, 0, 0, 0.3), m.translate(0, -0.92, 95).scale(14, 2, 14), X(0.8, 0.8, 0.8, 0.2),), I(J(5), m.translate(0, 0, 95).scale3d(6), X(0.3, 0.3, 0.3, 0.5),),),);
      yb(m.translate(0, 1.7, 82).rotate(0, 180));
      S(J(5), m.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(0.5, 0.3, 0.3, 0.4),);
      S(J(6), m.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(0.5, 0.6, 0.7, 0.3),);
      S(J(), m.translate(0, 16, 129).scale(1.5, 1, 2), X(0.5, 0.6, 0.7, 0.3));
      S(J(7), m.translate(0, 16.2, 133).scale(5, 1, 5), X(0.4, 0.5, 0.6, 0.4));
      S(P(ub(I(J(), m.translate(0, 16, 110.5).scale(12, 1, 3), X(0.5, 0.3, 0.3, 0.4),), I(J(), m.translate(0, 16, 111).scale(3, 1, 3.8), X(0.5, 0.3, 0.3, 0.4),),), I(J(5), m.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(0.5, 0.3, 0.3, 0.4),),),);
      Q(f => {
        f.h = () => {
          const p = Math.sin(a);
          return m.translate(-2 * p).rotate(25 * p);
        };
        S(J(3), m.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), X(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(p => {
          S(J(6), m.translate(0, 16, p + 95).scale(3, 1, 2.3).rotate(0, 90), X(0.7, 0.7, 0.7, 0.4),);
          S(J(), m.translate(0, 6.2, p + 95).scale(0.5, 11, 0.5), X(0.5, 0.3, 0.3, 0.4),);
        });
      });
      Q(f => {
        f.h = () => {
          const p = Wa(Wa((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return m.translate(0, 16 * p, 8.5 * v(2 * p - 1) + 95);
        };
        S(J(5), m.scale(5, 1.1, 5), X(0.5, 0.3, 0.3, 0.4));
        S(J(5), m.scale(5.5, 0.9, 5.5), X(0.25, 0.25, 0.25, 0.4));
        yb(m.translate(0, 1.5, -1).rotate(0, 180));
      });
      zb(m.translate(0, 3, 95), ...hb(9).map(({x:f, z:p}) => [9 * f, 9 * p, 4,]),);
      zb(m.translate(0, 19, 134), [0, 0, 3.5,]);
    });
    Q(() => {
      [0, 180,].map(t => S(n, m.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), X(1, 1, 0.8),));
      S(lb(20), m.translate(0, 1).scale(0.5, 0.5, 0.5), X(1, 0.3, 0.4));
      const k = I(P(J(15, 1), I(J(), m.translate(0, 0, 1).scale(2, 2, 0.5)),), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), X(0.3, 0.3, 0.3),);
      [-1, 1,].map(t => S(k, m.translate(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      S(J(), m.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), X(0.3, 0.3, 0.3));
      S(lb(20), m.scale(0.7, 0.8, 0.55), X(1, 0.3, 0.4));
    });
    [-1, 1,].map(k => Q(() => {
      S(J(10, 1), m.translate(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), X(1, 0.3, 0.4));
    }));
    Q(() => {
      S(J(6, 1), m.scale(0.13, 1.4, 0.13), X(0.3, 0.3, 0.5, 0.1));
      S(J(10), m.translate(0, 1).scale(0.21, 0.3, 0.21), X(1, 0.5, 0.2));
      S(J(3), m.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), X(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    Q(() => {
      S(J(6).slice(0, -1), m.scale(0.77, 1, 0.77), X(1, 0.3, 0.5));
    }, 0);
    Q(() => {
      S(lb(30, 24, (k, t, x) => {
        const w = t / 24, z = k * Math.PI * 2 / 30, A = w ** 0.6 * Math.PI / 2;
        k = w * w * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 === t ? {x:x.D = 0, y:-0.5, z:0,} : {x:Math.cos(z) * Math.sin(A), y:Math.cos(w * Math.PI) - w - k, z:Math.sin(z) * Math.sin(A) + Math.sin(k * Math.PI * 2) / 4,};
      }), m.scale3d(0.7), X(1, 1, 1),);
      [-1, 1,].map(k => S(lb(12), m.translate(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

