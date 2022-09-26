let ca, da, ha, ia, ja, la, ma = 0, na = 0, a = 0, oa = 0, pa = 0, qa = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, Aa = 0, Ca = 0, Da = 0, Ea = 1, d = 0.066;
const e = [], h = [], Ia = [], Ja = [], Ka = {x:0, y:0, z:0,}, m = (b, c) => Array.from(Array(b), (g, l) => c(l)), La = Math.PI / 180, Ma = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Na = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), 
".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Oa = [[69, 128, 0, 143, 128, 0, 
0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Pa = 0, Ra = 180;
const Sa = {x:0, y:0, z:0,}, Ta = (b, c) => c < b ? b : c, q = (b, c = 0, g = 1) => b < c ? c : g < b ? g : b, Ua = (b, c) => c < Math.abs(b) ? b : 0, w = (b, c, g) => (0 < g ? 1 > g ? b + (c - b) * g : c : b) || 0, Va = (b, c) => (b = q(b), w(b, 1 - b, c)), Wa = b => Math.atan2(Math.sin(b *= La), Math.cos(b)) / La, Xa = (b, c, g) => b + (2 * (c = (c - b) % 360) % 360 - c) * q(g) || 0, Ya = ({x:b, y:c, z:g}) => Math.hypot(b - Ka.x, c - Ka.y, g - Ka.z), ab = ({x:b, y:c, z:g}, l) => l.x * b + l.y * 
c + l.z * g, bb = b => {
  let c, g = 0, l = 0, p = 0, k = b.at(-1);
  for (c of b) {
    g += (k.y - c.y) * (k.z + c.z), l += (k.z - c.z) * (k.x + c.x), p += (k.x - c.x) * (k.y + c.y), k = c;
  }
  return c = Math.hypot(g, l, p), g /= c, l /= c, p /= c, {x:g, y:l, z:p, w:g * k.x + l * k.y + p * k.z,};
}, db = (b, c = cb, g = 0,) => (g *= 16, c[g++] = b.m11, c[g++] = b.m12, c[g++] = b.m13, c[g++] = b.m14, c[g++] = b.m21, c[g++] = b.m22, c[g++] = b.m23, c[g++] = b.m24, c[g++] = b.m31, c[g++] = b.m32, c[g++] = b.m33, c[g++] = b.m34, c[g++] = b.m41, c[g++] = b.m42, c[g++] = b.m43, c[g] = b.m44, c), eb = (b, c, g, l) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (l + g) / (g - l), -1, 0, 0, 2 * l * g / (g - l), 0,], fb = (b, c, g) => (b.D = g, b.A = c, b), gb = (b, c, g = b.A) => fb(b.map(l => {
  let p, k;
  return {x:l, y:p, z:k} = l, {x:l, y:p, z:k} = c.transformPoint({x:l, y:p, z:k,}), {x:l, y:p, z:k,};
}), g, b.D,), E = (b, c, g) => b.map(l => gb(l, c, g)), hb = (b, c = 0) => m(b, g => {
  const l = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:0.01 > Math.abs(l) ? l : 0 > l ? l - c : l + c,};
}), ib = (b, c, g) => b.map((l, p, {length:k}) => fb([l, c[k - p - 1], c[k - (p + 1) % k - 1], b[(p + 1) % k],], b.A, g,)), I = (b, c, g = 0, l,) => (b = b ? hb(b, l) : Ma, l = gb(b, G(0, 1).scale3d(0 < g ? g : 1)), b = gb(b, G(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...ib(b, l, c), l, b,]), jb = (b, c = b, g = (l, p) => (p *= Math.PI / c, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(p), y:Math.cos(p), z:Math.sin(l) * Math.sin(p),})) => {
  const l = [];
  for (let p = 0; b > p; p++) {
    for (let k = 0; c > k; k++) {
      const t = fb([], 0, 1);
      l.push(t);
      t.push(g(p, k, t));
      k && t.push(g((p + 1) % b, k, t));
      c - 1 > k && t.push(g((p + 1) % b, k + 1 % c, t));
      t.push(g(p, k + 1 % c, t));
    }
  }
  return l;
}, mb = (b, c) => {
  var g, l, p, k = c.C;
  for (var t = 0; k.length > t; ++t) {
    if (-0.00008 > (g = ab(b, k[t]) - b.w) ? p = c : 8e-5 < g && (l = c), p && l) {
      l = [];
      p = [];
      k = c.C;
      t = c.B;
      let v = k.at(-1), x = ab(b, v) - b.w;
      for (const y of k) {
        g = ab(b, y) - b.w, 8e-5 > x && p.push(v), -0.00008 < x && l.push(v), (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g) && (x /= g - x, v = {x:v.x + (v.x - y.x) * x, y:v.y + (v.y - y.y) * x, z:v.z + (v.z - y.z) * x,}, l.push(v), p.push(v)), v = y, x = g;
      }
      return {o:2 < l.length && {C:fb(l, k.A, k.D), B:t, u:c,}, m:2 < p.length && {C:fb(p, k.A, k.D), B:t, u:c,},};
    }
  }
  return {o:l, m:p,};
}, nb = (b, c, g = bb(c.C)) => {
  let l, p, k;
  return b ? ({o:l, m:p} = mb(b, c), l || p || b.s.push(c), l && (b.o = nb(b.o, l, g)), p && (b.m = nb(b.m, p, g))) : ({x:l, y:p, z:g, w:k} = g, b = {x:l, y:p, z:g, w:k, s:[c,], o:0, m:0,}), b;
}, ob = (b, c, g) => {
  const l = [], p = (k, t) => {
    let {o:v, m:x} = mb(k, t);
    v || x || (0 < g * ab(k, c) ? v = t : x = t);
    v && (k.o ? p(k.o, v) : l.push(v));
    x && k.m && p(k.m, x);
  };
  for (const k of c.s) {
    p(b, k);
  }
  return l;
}, pb = (b, c) => b && (c(b), pb(b.o, c), pb(b.m, c)), sb = b => b.length ? b.reduce((c, g) => nb(c, {C:g, B:0, u:0,}), 0) : b, tb = b => (pb(b, c => {
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
    pb(c, p => p.s = ob(g, p, 1));
    pb(g, p => l.push([p, ob(c, p, -1),]));
    for (let [p, k] of l) {
      for (const t of k) {
        nb(c, t, p);
      }
    }
  }
  return c;
}), K = (...b) => {
  let c;
  const g = k => {
    let t;
    return k.u && ((t = l.get(k.u)) ? (p.delete(t), k = g(k.u)) : l.set(k.u, k)), k;
  }, l = new Map(), p = new Map();
  return [b, ...c] = [...b,], b = tb(ub(tb(sb(b)), ...c)), pb(b, k => {
    for (const t of k.s) {
      p.set(g(t), t.B);
    }
  }), Array.from(p, ([{C:k}, t]) => {
    const v = k.map(({x, y, z:C}) => ({x, y, z:C,}));
    return fb(t ? v.reverse() : v, k.A, k.D);
  });
}, vb = () => {
  wa = Va(h[12].g, h[13].g);
  sa = w(w(sa, 0, 1 - Math.exp(-1 * d)), Wa(sa + 60 * d), h[5].g - h[6].i,);
  pa = w(w(pa, 0, 1 - Math.exp(-5 * d)), Wa(pa + 56 * d), wa,);
  qa = w(w(qa, 0, 1 - Math.exp(-4 * d)), Wa(qa + 48 * d), wa,);
  va = w(va, h[9].i, 1 - Math.exp(-(0.2 + 0.3 * Math.abs(2 * h[9].i - 1)) * d));
  ua = w(ua, ta ? w(ua, -9, 1 - Math.exp(-1.5 * d)) : q(a / 3), 1 - Math.exp(-1 * d));
  Ea && a > Ea && (Ea = 0, h4.innerHTML = "");
  h[0].l && 0.8 < h[0].g && (13 > ma ? (1 / 0 > Ea && (Ea = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0) : ta || (1 / 0 > Ea && (Ea = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ta = 1));
  for (const b of e) {
    b.h && (b.j = b.h());
  }
  for (const b of h) {
    b.h();
  }
  for (const b of Ia) {
    b.h();
  }
}, wb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ma = Ia.reduce((b, {l:c}) => b + c, 0)] + " / XIII";
}, xb = () => {
  localStorage.I = JSON.stringify([h.map(({l:b}) => b), Ia.map(({l:b}) => b), oa, a, va,]);
}, R = (b, c = 1) => {
  const g = ha;
  c = {j:O, H:e.length, G:c, s:[],};
  return e.push(ha = c), b(c), ha = g, c;
}, U = (b, c = O, g) => ha.s.push(...E(b, c, g)), yb = b => {
  const c = ha, g = h.length, l = {l:0, g:0, i:0, u:c, h() {
    const p = l.l, k = l.g, t = l.i, v = c.j.multiply(b);
    l.J = v;
    3 > Ya(v.transformPoint()) && Ja[5] && (0.3 > k || 0.7 < k) && (l.l = p ? 0 : 1, g && 1 / 0 > Ea && (Ea = a + 1, h4.innerHTML = "* click *"), oa = g, xb());
    l.g = w(k, p, 1 - Math.exp(-4 * d));
    l.i = w(t, p, 1 - Math.exp(-1 * d));
    l.j = v.rotate(60 * l.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(l);
  U(I(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Y(0.4, 0.5, 0.5));
  U(I(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Y(0.4, 0.5, 0.5));
  U(I(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), Y(0.5, 0.5, 0.4));
}, zb = (b, ...c) => {
  let g = -1, l = 0, p = 0, k = 0, t = 0, v = 0, x = 1, y = 3;
  const C = {l:0, h() {
    if (!C.l) {
      let Fa, ra, ea, F, H, B, D, J = 1, M = 1 / 0;
      for (const S of f) {
        var {x:T, z:P, w:V} = S;
        P = (T = Math.hypot(r - T, u - P)) - V;
        D ||= T < V;
        0 < P && M > P && (M = P, n = S);
        var Q = T / V;
        J = J < Q ? J : Q;
      }
      D || ({x:Fa, z:ra, w:ea} = n, F = r - Fa, H = u - ra, B = Math.hypot(F, H), ba = Math.atan2(-H, F), x && (p = (Math.random() - 0.5) * Math.PI / 2, y = q(y / (1 + Math.random()))), ba += p, g = -Math.cos(ba), l = Math.sin(ba), 0.1 < B && (B = (B < ea ? B : ea) / (B || 1), r = F * B + Fa, u = H * B + ra));
      x = D;
      y = w(y, 6 * (1 - J) + 3, 1 - Math.exp(-(J + 3) * d));
      Q = r = w(r, r + g, 1 - Math.exp(-y * d));
      z = w(z, Q, 1 - Math.exp(-y * d));
      Q = u = w(u, u + l, 1 - Math.exp(-y * d));
      L = w(L, Q, 1 - Math.exp(-y * d));
      k = Xa(k, Math.atan2(z - t, L - v) / La - 180, 1 - Math.exp(-3 * d),);
      t = z;
      v = L;
      var ba = (C.j = N.j.multiply(b.translate(z, 0, L).rotateSelf(0, k, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.6 > Ya(ba) && (C.l = 1, Q = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ma] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      Ea && (Ea = a + (ma && 12 > ma ? 5 : 7), h4.innerHTML = Q), wb(), xb());
    }
    C.l && (C.j = e[2].j.translate(A % 4 * 1.2 - 1.7 + Math.sin(a + A) / 7, -2, 1.7 * (A / 4 | 0) - 5.5 + Math.abs(A % 4 - 2) + Math.cos(a / 1.5 + A) / 6,));
  },}, N = ha, A = Ia.length, f = c.map(([T, P, V]) => ({x:T, z:P, w:V,}));
  let n = f[0], {x:r, z:u} = n, z = r, L = u;
  Ia.push(C);
}, Ab = (b, c, g, l) => {
  let p = 0, k = 0, t = 0, v = 1 / 0, x = -1 / 0, y = 1 / 0, C = -1 / 0, N = 1 / 0, A = -1 / 0;
  const f = 1.1 * (g - c), n = (new DOMMatrix(eb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
  return c = m(8, r => (r = n.transformPoint({x:4 & r ? 1 : -1, y:2 & r ? 1 : -1, z:1 & r ? 1 : -1,}), p -= r.x = (f * r.x | 0) / f / r.w, k -= r.y = (f * r.y | 0) / f / r.w, t -= r.z = (f * r.z | 0) / f / r.w, r)), g = O.rotate(298, 139).translateSelf(p / 8, k / 8, t / 8), gb(c, g).map(({x:r, y:u, z}) => {
    v = v < r ? v : r;
    x = r < x ? x : r;
    y = y < u ? y : u;
    C = u < C ? C : u;
    N = N < z ? N : z;
    A = z < A ? A : z;
  }), N *= 0 > N ? l : 1 / l, A *= 0 < A ? l : 1 / l, O.scale(2 / (x - v), 2 / (C - y), 2 / (N - A)).translateSelf((x + v) / -2, (C + y) / -2, (N + A) / 2,).multiplySelf(g);
}, Db = () => {
  let b, c, g, l, p, k, t, v, x, y, C, N, A = !0;
  const f = () => {
    ca || !A ? Bb.disconnect() : Bb.connect(Cb.destination);
    b4.innerHTML = "Music: " + A;
  }, n = (r = !1) => {
    if (ca !== r) {
      ca = r;
      try {
        r ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : Bb.start();
      } catch {
      }
      ia = 0;
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
    n();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    n();
    ia = 1;
  };
  b4.onclick = () => {
    A = !A;
    f();
  };
  b5.onclick = () => n(!0);
  onclick = r => {
    N = 1;
    ca || (r.target === hC && (Ja[5] = !0), ia && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:r, target:u, type:z, repeat:L}) => {
    L || ((L = !!z[5] && u === document.body) && ("Escape" === r || "Enter" === r && ca) ? ca && !N || n(!ca) : 5 === (z = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[r]) ? L && (Ja[z] = 1) : Ja[z] = L);
  };
  onmousemove = ({movementX:r, movementY:u}) => {
    ia && (r || u) && (Ra += 0.1 * r, Pa += 0.1 * u);
  };
  hC.ontouchstart = r => {
    if (!ca) {
      for (let {pageX:u, pageY:z, identifier:L} of r.changedTouches) {
        ia && u > hC.clientWidth / 2 ? void 0 === v && (x = 0, k = u, t = z, v = L, y = Ra, C = Pa) : void 0 === l && (p = 0, c = u, g = z, l = L);
      }
      b = na;
    }
  };
  hC.ontouchmove = r => {
    if (!ca) {
      for (let {pageX:V, pageY:Q, identifier:ba} of r.changedTouches) {
        var u, z, L, T, P;
        v === ba && (Ra = y + (V - k) / 2.3, Pa = C + (Q - t) / 2.3, x = 1);
        l === ba && (ba = (c - V) / 20, u = (g - Q) / 20, z = Math.abs(ba), L = Math.abs(u), T = Math.atan2(u, ba), P = q(Math.hypot(u, ba) - 0.5), xa = 0.2 < z ? Math.cos(T) * P : 0, ya = 0.2 < L ? Math.sin(T) * P : 0, (xa || ya) && (p = 1), 2 < z && (c = V + 20 * Math.sign(ba)), 2 < L && (g = Q + 20 * Math.sign(u)));
      }
    }
  };
  hC.ontouchend = r => {
    let u;
    document.activeElement === document.body && r.preventDefault();
    for (const z of r.changedTouches) {
      z.identifier === v ? (v = void 0, x || (u = 1), x = 0) : z.identifier === l ? (l = void 0, ya = xa = 0, p || (u = 1), p = 0) : u = 1;
    }
    u && r.target === hC && b && 0.02 < (r = na - b) && 0.7 > r && (Ja[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Ja.length = xa = ya = 0;
    l = v = void 0;
    document.hidden && n(!0);
  })();
  n(!0);
}, Eb = () => {
  let b, c, g, l, p, k, t, v, x, y, C, N, A, f, n, r, u, z, L = 1, T = 2, P = 2;
  const V = () => T ? h[oa].u.j : g && 1 === e[g].G && e[g].j || O, Q = (F, H, B, D) => w(F, H, L || (q(Math.abs(H - F) ** 0.9 - B) + 1 / 7) * (1 - Math.exp(-(1.5 * D) * d)),), ba = () => {
    let F = 0, H = 0, B = 0, D = 0;
    l = 0;
    ra.fill(0);
    for (let M = 0; 31 > M; ++M) {
      let S = 0;
      const za = 512 * M;
      for (let aa = 0; 128 > aa; aa++) {
        var J = za + 4 * aa;
        let fa = (ea[J] + ea[1 + J]) / 255;
        J = ea[2 + J];
        14 < aa && 114 > aa && (S += fa);
        J && fa && (fa = ra[J] + 1, ra[J] = fa, F > fa || (F = fa, H = J));
      }
      3 > S && 5 < M && (B += M / 32);
      3 < S && (7 < M && (D += M / 15), l = 1);
    }
    H && (l = 1);
    b = H || c;
    c = H;
    P = w(P, l ? 6.5 : -20 > Sa.y ? 11 : 8, 1 - Math.exp(-4 * d));
    Sa.y += D / 41 - (l || P) * B / 41 * P * d;
  }, Fa = () => {
    y = x = 0;
    for (let F = 32; 128 > F; F += 2) {
      let H = 0, B = 0, D = 0, J = 0;
      const M = 512 * F;
      for (let S = 1 & F; 128 > S; S += 2) {
        const za = M + 4 * S;
        let aa = M + 4 * (127 - S);
        const fa = ea[za] / 255, ka = ea[1 + aa] / 255, Za = 1 - Math.abs(S / 63.5 - 1);
        10 < S && 118 > S && (H = Ta(Ta(fa * Za, fa * ea[aa] / 255), H), B = Ta(Ta(ka * Za, ka * ea[1 + za] / 255), B));
        (54 > S || 74 < S) && 1e-3 < (aa = (1 - Za) * (ka < fa ? fa : ka) / 3) && (64 > S && aa > D ? D = aa : 64 < S && aa > J && (J = aa));
      }
      Math.abs(J - D) > Math.abs(x) && (x = J - D);
      Math.abs(B - H) > Math.abs(y) && (y = B - H);
    }
  }, ra = new Int32Array(256), ea = new Uint8Array(65536);
  la = () => {
    var F = V(), {x:H, y:B, z:D} = 1 < T ? h[oa].J.transformPoint({x:0, y:oa || 0.9 < ua ? 15 : 1, z:-2.4,}) : ((H = (D = F).inverse()).m41 = H.m42 = H.m43 = 0, B = H.transformPoint({x, z:y, w:0,}), Sa.x += B.x, Sa.z += B.z, D.transformPoint(Sa));
    let J = H - Ka.x, M = D - Ka.z;
    if (T = T && (l && b ? 0 : 1), Ka.x = H, Ka.y = B, Ka.z = D, T || b !== g) {
      g = b;
      const S = (F = V()).inverse().transformPoint(Ka);
      Sa.x = S.x;
      Sa.y = S.y;
      Sa.z = S.z;
    }
    b && (C = J / d, N = M / d);
    v = w(v, wa * (27 < b && 32 > b), 1 - Math.exp(-2 * d));
    B < (-25 > H || 109 > D ? -25 : -9) && (C = N = A = 0, T = 2);
    1 === b && (h[9].l = -15 > H && 0 > D ? 1 : 0);
    f = w(w(f, B, 1 - Math.exp(-2 * d)), B, T || 8 * Math.abs(f - B));
    r = Q(r, f, 2, 1);
    n = Q(n, H, 0.5, 1);
    u = Q(u, D, 0.5, 1);
    ia ? (F = T + (1 - Math.exp(-18 * d)), Aa = w(Aa, H, F), Ca = w(Ca, f + 1.5, F), Da = w(Da, D, F), Ra = Wa(Ra)) : (Ca = Q(Ca, Ta(r + q((-60 - D) / 8, 0, 20) + 13 + 9 * v, 6,), 4, 2,), Da = Q(Da, u + -18 + 5 * v, 1, 2 + v,), Aa = Q(Aa, n, 1, 2 + v,), F = -Math.abs(u - Da), J = 4 < F ? 4 : F, M = n - Aa, Ra = Xa(Ra, 90 - Wa(Math.atan2(J, M) / La), L + (1 - Math.exp(-6 * d)),), Pa = Xa(Pa, 90 - Math.atan2(Math.hypot(J, M), Ca - r) / La, L + (1 - Math.exp(-6 * d)),));
    Pa = q(Pa, -87, 87);
    L = 0;
    e[37].j = G(H, f, D).rotateSelf(0, k,);
    for (F = 0; 2 > F; ++F) {
      e[38 + F].j = e[37].j.translate(0, t * q(0.45 * Math.sin(9.1 * a + Math.PI * (F - 1) - Math.PI / 2)),).rotateSelf(t * Math.sin(9.1 * a + Math.PI * (F - 1)) * 0.25 / La, 0);
    }
  };
  ja = () => {
    var F = ya + (Ja[1] ? 1 : 0) - (Ja[3] ? 1 : 0), H = xa + (Ja[0] ? 1 : 0) - (Ja[2] ? 1 : 0);
    if (D = navigator.getGamepads()[0]) {
      const J = D.buttons, M = D.axes;
      D = (B = S => J[S]?.pressed || 0 < J[S]?.value ? 1 : 0)(3) || B(2) || B(1) || B(0);
      F += B(12) - B(13) - Ua(M[1], 0.2);
      H += B(14) - B(15) - Ua(M[0], 0.2);
      ia && (Pa += d * Ua(M[3], 0.3) * 80, Ra += d * Ua(M[2], 0.3) * 80);
      D && !z && (Ja[5] = 1);
      z = D;
    }
    var B = Math.atan2(F, H), D = Ua(q(Math.hypot(F, H)), 0.05);
    F = (Z.fa7(), Z.r9r(0, 0, 128, 128, 6408, 5121, ea), Z.iay(36008, [36064, 36096,]), Z.iay(36009, [36064, 36096,]), NO_INLINE(Fa)(), NO_INLINE(ba)(), q(1 - 5 * Ta(Math.abs(x), Math.abs(y))));
    H = ia ? Ra * La : Math.PI;
    t = w(t, D, 1 - Math.exp(-10 * d));
    D && (p = 90 - B / La);
    k = Xa(k, p, 8 * d);
    A = w(A, l * F * q(2 * D) * 7, 1 - Math.exp(-(l ? 0.1 < F ? 10 : 5 + 2 * D : 1) * d));
    C = w(C, 0, 1 - Math.exp(-(l ? 8 : 4) * d));
    x += d * ((b ? 0 : F * C) - Math.cos(B + H) * D * A);
    N = w(N, 0, 1 - Math.exp(-(l ? 8 : 4) * d));
    y += d * ((b ? 0 : F * N) - Math.sin(B + H) * D * A);
    NO_INLINE(la)();
    Ja[5] = 0;
  };
}, Fb = (b, c = 35633) => (c = Z.c6x(c), Z.s3c(c, b), Z.c6a(c), c), Kb = (b, c) => {
  const g = {}, l = Z.c1h();
  return Z.abz(l, b), Z.abz(l, Fb(c, 35632)), Z.l8l(l), p => p ? g[p] || (g[p] = Z.gan(l, p)) : Z.u7y(l);
}, Mb = (b, c, g, l) => {
  if (ca) {
    g = O.rotate(0, 40 * Math.sin(na) - 70);
    for (var p of [37, 38, 39,]) {
      db(g, Lb, p - 1);
    }
    Z.uae(b, !1, Lb);
    Z.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v);
  } else {
    for (p = 0; e.length > p; ++p) {
      e[p].G && db(e[p].j, Lb, p - 1);
    }
    Z.uae(b, !1, Lb);
    Z.d97(4, (c ? e[39].F : e[37].v) - 3, 5123, 6);
    for (c = 0; 13 > c; ++c) {
      db(Ia[c].j, Lb, c);
    }
    for (c = 0; h.length > c; ++c) {
      db(h[c].j, Lb, c + 13), l || (Lb[16 * (c + 13) + 15] = 1 - h[c].g);
    }
    Z.uae(b, !1, Lb);
    Z.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,);
    Z.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Nb = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Ob = b => Math.sin(b * Math.PI * 2), Pb = b => 0.5 > b % 1 ? 1 : -1, Qb = b => b % 1 * 2 - 1, Rb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Wb = b => {
  let c = 0;
  const g = () => {
    const k = Cb.createBuffer(2, 5362944, 44100);
    for (let t = 0; 2 > t; t++) {
      for (let v = t, x = k.getChannelData(t); 10725888 > v; v += 2) {
        x[v >> 1] = p[v] / 65536;
      }
    }
    Bb.buffer = k;
    Bb.loop = !0;
    Nb(b);
  }, l = () => {
    let k = 0;
    const t = B => {
      let D, J, M, S, za = 0, aa = 0;
      const fa = [], ka = new Int32Array(768 * B), Za = 2 ** (T - 9) / B, Sb = Math.PI * 2 ** (Fa - 8) / B, qb = ea * B & -2;
      for (let kb = 0; 11 >= kb; ++kb) {
        for (let lb = 0, Gb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + kb], Hb = (32 * kb + lb) * B; 32 > lb; ++lb) {
          for (let Ba = 0; 4 > Ba; ++Ba) {
            if (J = 0, Gb && (J = v[Gb - 1].charCodeAt(lb + 32 * Ba) - 40, J += 0 < J ? 106 : 0), J) {
              var Qa;
              if (!(Qa = fa[J])) {
                Qa = J;
                let W = void 0, X = void 0;
                var Ib = J;
                let $a = 0, Tb = 0;
                const Ub = 2 > c ? Qb : Ob, Vb = 2 > c ? 1 > c ? Pb : Rb : Ob, Jb = new Int32Array(r + u + H);
                for (let Ga = 0, rb = 0; r + u + H > Ga; ++Ga, ++rb) {
                  let Ha = 1;
                  r > Ga ? Ha = Ga / r : r + u > Ga || (Ha = (1 - (Ha = (Ga - r - u) / H)) * 3 ** (L / -16 * Ha));
                  0 > rb || (X = 396e-5 * 2 ** ((Ib + y - 256) / 12), W = 396e-5 * 2 ** ((Ib + A - 256) / 12) * (c ? 1 : 1.0072), rb -= 4 * B);
                  Jb[Ga] = 80 * (Ub($a += X * Ha ** (C / 32)) * x + Vb(Tb += W * Ha ** (f / 32)) * N + (n ? (2 * Math.random() - 1) * n : 0)) * Ha;
                }
                Qa = fa[Qa] = Jb;
              }
              for (let W = 0, X = 2 * Hb; Qa.length > W; ++W, X += 2) {
                ka[X] += Qa[W];
              }
            }
          }
          for (let Ba, W, X, $a = 0; B > $a; ++$a) {
            X = 2 * (Hb + $a), Ba = 0, ((W = ka[X]) || S) && (M = 308e-5 * P, 1 !== c && 4 !== c || (M *= Math.sin(Za * X * Math.PI * 2) * F / 512 + 0.5), M = 1.5 * Math.sin(M), za += M * aa, D = (1 - V / 255) * (W - aa) - za, aa += M * D, W = 4 === c ? aa : 3 === c ? D : za, c || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= Q / 32, S = 1e-5 < W * W, D = Math.sin(Sb * X) * ba / 512 + 0.5, Ba = W * (1 - D), W *= D), X < qb || (Ba += ka[1 + X - qb] * ra / 
            255, W += ka[X - qb] * ra / 255), p[k + X] += ka[X] = Ba, ++X, p[k + X] += ka[X] = W;
          }
        }
      }
      k += 768 * B;
    }, v = Na[c], [x, y, C, N, A, f, n, r, u, z, L, T, P, V, Q, ba, Fa, ra, ea, F] = Oa[c], H = 4 * z ** 2;
    t(5513);
    t(4562);
    t(3891);
    Nb(5 > ++c ? l : g);
  }, p = new Int32Array(10725888);
  Nb(l);
}, Cb = new AudioContext(), O = new DOMMatrix(), cb = new Float32Array(16), Lb = new Float32Array(624), Xb = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), G = NO_INLINE((b, c, g) => O.translate(b, c, g)), Y = NO_INLINE((b, c, g, l = 0) => 255 * l << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b), Bb = Cb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in Z) {
  Z[b[0] + [...b,].reduce((c, g, l) => (c * l + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[b];
}
Nb(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      const l = n => {
        let r;
        Z.f1s();
        requestAnimationFrame(l);
        u = (n - (da || n)) / 1e3;
        ca ? (d = 0, Ja[5] = 0) : d = 0.066 < u ? 0.066 : u;
        a += d;
        na += u;
        da = n;
        0 < d && (vb(), ja());
        0 < d && ({x:u, y:n, z:r} = Ka, x(), Z.b6o(36160, A), Z.v5y(0, 0, 128, 128), Z.c4s(16640), Z.cbf(!0, !1, !0, !1), Z.uae(x("b"), !1, db(O.rotate(0, 180).invertSelf().translateSelf(-u, -n, 0.3 - r)),), Mb(x("c"), 0, 41, 0), Z.c4s(256), Z.cbf(!1, !0, !0, !1), Z.uae(x("b"), !1, db(G(-u, -n, -r - 0.3))), Mb(x("c"), 0, 41, 0), Z.f1s());
        var u = ca ? O.rotate(-20, -90).invertSelf().translateSelf(5, -2, -3.4) : O.rotate(-Pa, -Ra).invertSelf().translateSelf(-Aa, -Ca, -Da,);
        t();
        Z.b6o(36160, N);
        Z.v5y(0, 0, 2048, 2048);
        C[0](Ab(u, 0.3, 55, 10));
        C[1](Ab(u, 55, 186, 11));
        y();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        C[0]();
        C[1]();
        Z.uae(y("a"), !1, eb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
        Z.uae(y("b"), !1, db(u));
        Z.ubu(y("k"), Aa, Ca, Da);
        Mb(y("c"), !ia, 42, 0);
        v();
        Z.ubu(v("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, na);
        Z.ubu(v("k"), Aa, Ca, Da);
        Z.uae(v("b"), !1, db(u.inverse()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, A);
        Z.f1s();
      }, p = g;
      let k = Fb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const t = Kb(Fb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), v = Kb(Fb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), x = Kb(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), y = Kb(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), C = m(2, n => {
        const r = new Float32Array(16), u = Z.c25();
        return Z.a4v(33984 + n), Z.b9j(3553, u), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), z => {
          z ? (db(z, r), Z.uae(t("b"), !1, r), Z.fas(36160, 36096, 3553, u, 0), Z.c4s(256), Mb(t("c"), !ia, 42, 1)) : Z.uae(y(n ? "j" : "i"), !1, r);
        };
      }), N = Z.c5w(), A = (k = Z.c3z(), Z.c5w()), f = Z.c25();
      x();
      Z.uae(x("a"), !1, eb(1.4, 0.59, 1e-4, 1));
      y();
      Z.ubh(y("q"), 2);
      Z.ubh(y("h"), 1);
      Z.ubh(y("g"), 0);
      v();
      Z.ubh(v("q"), 2);
      Z.b6o(36160, N);
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
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, p);
      Z.gbn(3553);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 1);
      vb();
      NO_INLINE(Eb)();
      NO_INLINE(Db)();
      requestAnimationFrame(l);
    }
  }, g = new Image();
  g.onload = g.onerror = c;
  g.src = Xb;
  NO_INLINE(Wb)(() => {
    Nb(() => {
      let k, t = 0;
      const v = [], x = [], y = [], C = [], N = u => {
        let {x:z, y:L, z:T} = k[u], P = (r[0] = z, r[1] = L, r[2] = T, u = "" + (k.D ? n : A), f.get(u));
        return void 0 !== P ? (z = 3 * P, C[z] = (C[z++] + A[5]) / 2, C[z] = (C[z++] + A[6]) / 2, C[z] = (C[z] + A[7]) / 2) : (f.set(u, P = f.size), x.push(z, L, T, r[3]), y.push(A[4]), C.push(A[5], A[6], A[7])), P;
      }, A = new Int32Array(8), f = new Map(), n = new Int32Array(A.buffer, 0, 5), r = new Float32Array(A.buffer);
      for (const u of e) {
        for (k of (r[3] = 40 === u.H ? -14 : u.G && u.H, u.s)) {
          const {x:z, y:L, z:T} = bb(k);
          A[4] = 0 | k.A;
          A[5] = 32767 * z;
          A[6] = 32767 * L;
          A[7] = 32767 * T;
          for (let P = 2, V = N(0), Q = N(1); k.length > P; ++P) {
            v.push(V, Q, Q = N(P));
          }
        }
        u.s = null;
        u.v = t;
        u.F = t = v.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(C), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(y), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Nb(c);
      try {
        const [u, z, L, T, P] = JSON.parse(localStorage.I,);
        h.map((V, Q) => V.g = V.i = V.l = Q ? 0 | u[Q] : 0);
        Ia.map((V, Q) => V.l = 0 | z[Q]);
        oa = L;
        a = T;
        va = P;
      } catch {
      }
      ua = q(oa);
    });
    const l = m(11, k => G(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), p = m(10, k => ib(gb(hb(18), l[k]).reverse(), gb(hb(18), l[k + 1]), 1,)).flat();
    R(() => U([Ma.slice(1),], G(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const k = (f, n, r) => R(u => {
        u.h = () => G(x() * Math.sin(3 * f + a * f) * n);
        Ma.map(({x:z, z:L}) => {
          U(I(11, 1), G(4 * z, 4, r + 4 * L).scale(0.8, 3, 0.8), Y(0.5, 0.3, 0.7, 0.6),);
          U(I(), G(4 * z, 7, r + 4 * L).scale(1, 0.3), Y(0.5, 0.5, 0.5, 0.3),);
        });
        U(K(E(I(), G(0, 0, r).scale(5, 1, 5), Y(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(z => E(I(), G(5 * z, 0.2, r).rotate(-30 * z).scale(4, 1, 2), Y(0.8, 0.8, 0.8, 0.3),)),),);
        U(I(), G(0, -3, r).scale(8, 2, 8), Y(0.4, 0.4, 0.4, 0.3));
      }), t = (f, n, r) => G(f + Math.sin(a + 2) / 5, n + Math.sin(0.8 * a) / 3, r).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), v = f => K(E(I(), G(0, -f / 2).scale(6, f - 1, 2.2)), E(I(), G(0, -f / 2 - 6).scale(4, f - 3, 4)), E(I(32, 1), G(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), x = () => {
        var f = h[2].i, n = 1 - h[4].i;
        return f < n ? f : n;
      }, y = K(E(I(20, 1, 1.15, 1), G(0, -3).scale(3.5, 1, 3.5), Y(0.7, 0.4, 0.25, 0.7),), E(I(20, 1, 1.3, 1), G(0, -2.5).scale(2.6, 1, 3), Y(0.7, 0.4, 0.25, 0.2),), E(I(), G(4, -1.2).scale3d(2), Y(0.7, 0.4, 0.25, 0.3)),), C = m(7, f => E(I(6, 1), G(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), Y(0.3, 0.3, 0.38),)).flat(), N = (R(f => {
        f.h = () => t(-12, 4.2, 40 * ua - 66);
        U(y);
        yb(G(0, -3, 4));
      }), yb(G(-5.4, 1.5, -19).rotate(0, -90)), zb(G(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), zb(G(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...hb(18).map(({x:f, z:n}) => [7 * f, 10 * n, 4.5 - 2 * Math.abs(f),]),), U(I(), G(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Y(0.8, 0.8, 0.8, 0.2)), Ma.map(({x:f, z:n}) => U(I(6), G(3 * f, 3, 15 * n).scale(0.7, 4, 0.7), Y(0.6, 0.3, 0.3, 0.4))), [-23, 22,].map(f => U(I(), G(0, 0, f).scale(3, 1, 8), Y(0.9, 0.9, 0.9, 0.2))), [-15, 15,].map((f, n) => {
        U(I(), G(0, 6.3, f).scale(4, 0.3, 1), Y(0.3, 0.3, 0.3, 0.4));
        U(I(), G(0, 1, f).scale(3, 0.2, 0.35), Y(0.5, 0.5, 0.5, 0.3));
        R(r => {
          r.h = () => G(0, 0, f).scale(1, q(1.22 - h[n + 1].g), 1);
          U(C);
        });
      }), m(5, f => m(2, n => U(p, G(18.5 * (n - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * n).scale(1.2, 10, 1.2), Y(1, 1, 0.8, 0.2),))), U(I(), G(3, 1.5, -20).scale(0.5, 2, 5), Y(0.7, 0.7, 0.7, 0.2)), U(I(), G(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Y(0.75, 0.75, 0.75, 0.2),), U(I(5), G(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Y(0.6, 0.3, 0.3, 0.4),), U(I(), O.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), Y(0.8, 0.2, 0.2, 0.5),), U(K(ub(E(I(6, 0, 0, 0.3), 
      G(8, -3, -4).scale(13, 1, 13), Y(0.7, 0.7, 0.7, 0.2),), E(I(6), G(0, -8).scale(9, 8, 8), Y(0.4, 0.2, 0.5, 0.5)), E(I(6, 0, 0, 0.3), G(0, -0.92).scale(13, 2, 13), Y(0.8, 0.8, 0.8, 0.2),),), E(I(5), O.scale(5, 30, 5), Y(0.4, 0.2, 0.6, 0.5)), E(I(5, 0, 1.5), G(0, 1).scale(4.5, 0.3, 4.5), Y(0.7, 0.5, 0.9, 0.2),), E(I(), O.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), Y(0.5, 0.5, 0.5, 0.5),), E(I(6), G(15, -1.5, 4).scale(3.5, 1, 3.5), Y(0.5, 0.5, 0.5, 0.5),),),), R(f => {
        f.h = () => G(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        U(I(5), G(0, -0.2).scale(5, 1, 5), Y(0.6, 0.65, 0.7, 0.3));
        yb(G(0, 1.2));
      }), yb(G(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), R(f => {
        f.h = () => G(x() * Math.sin(a / 1.5 + 2) * 12);
        U(K(ub(E(I(), O.scale(1.5, 1, 5), Y(0.9, 0.9, 0.9, 0.2)), E(I(6), O.scale(4, 1, 5), Y(0.9, 0.9, 0.9, 0.2)), E(I(), G(0, -2).scale(2, 3.2, 1.9), Y(0.3, 0.8, 0.5, 0.5),), E(I(16, 1, 0, 4), O.scale(1, 1, 1.5).rotate(0, 90), Y(0.9, 0.9, 0.9, 0.2),),), E(I(), O.scale(1.3, 10, 1.3), Y(0.2, 0.7, 0.4, 0.6)),), G(0, 0, 45),);
        zb(G(0, 2.8, 45), [0, 0, 4.5,]);
      }), U(I(), G(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2)), R(f => {
        f.h = () => G(9.8 * (1 - x()));
        U(I(3), G(-23, -1.7, 55.8).scale(5, 0.7, 8.3), Y(0.3, 0.6, 0.6, 0.2));
        U(I(8), G(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Y(0.8, 0.8, 0.8, 0.2));
        U(I(), G(-23, -3, 55).scale(5.2, 1.7, 3), Y(0.5, 0.5, 0.5, 0.3));
        U(I(), G(-23, -2.2, 62).scale(3, 1, 4), Y(0.5, 0.5, 0.5, 0.3));
        yb(G(-23, -0.5, 66.5));
      }), R(f => {
        f.h = () => G(0, q(1 - 5 * x()) * Va(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        U(I(), G(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Y(0.7, 0.7, 0.7, 0.2));
        U(K(E(I(), O.scale(3, 1.4, 2.7)), E(I(), O.scale(1.2, 8, 1.2)),), G(-33, -3, 55), Y(0.7, 0.7, 0.7, 0.2),);
      }), R(f => {
        f.h = () => G(0, 0, q(1 - 5 * x()) * Va(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        U(K(E(I(), G(-27, -3, 55).scale(3, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2),), E(I(), G(-27, -3, 55).scale(1, 3), Y(0.9, 0.9, 0.9, 0.2),),),);
        U(I(), G(-39, -3, 55).scale(3, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2));
      }), R(f => {
        f.h = () => G(0, -6.5 * h[4].i);
        U(I(6), G(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), Y(0.7, 0.7, 0.7, 0.4),);
      }), yb(G(-55, -1.1, 46).rotate(0, 90)), U(I(6), G(-61.3, -2.4, 49).scale(3, 1, 5), Y(0.4, 0.6, 0.6, 0.3)), U(I(7), G(-57, -2.6, 46).scale(4, 1, 4), Y(0.8, 0.8, 0.8, 0.3)), [...E(I(), G(0, -3).scale(11, 1.4, 3), Y(0.9, 0.9, 0.9, 0.2)), ...K(E(I(6), O.rotate(90).scale(6, 8, 6), Y(0.3, 0.6, 0.6, 0.3)), E(I(4, 0, 0.01), G(0, 6).scale(12, 2, 0.75).rotate(0, 45), Y(0.3, 0.6, 0.6, 0.3),), E(I(6), O.rotate(90).scale(5, 12, 5), Y(0.3, 0.6, 0.6, 0.3)), ...[5, 0, -5,].map(f => E(I(5), G(f, 2.5).rotate(90, 
      0, 36).scale(1.8, 10, 1.8), Y(0.3, 0.6, 0.6, 0.3),)),),]), A = (U(N, G(-53, 0, 55)), R(f => {
        f.h = () => G(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + sa, 0,);
        U(N);
      }, 2), U(I(), G(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), Y(0.7, 0.7, 0.7, 0.2),), U(I(3, 0, -0.5), G(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Y(0.8, 0.8, 0.8, 0.2),), U(K(ub(E(I(), G(-100, -2.5, 55).scale(8, 1, 8), Y(0.8, 0.8, 0.8, 0.2),), E(I(), G(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Y(0.8, 0.8, 0.8, 0.2),), E(I(), G(-100, -2.6, 70).scale(3, 1.1, 7), Y(0.8, 0.8, 0.8, 0.2),), E(I(), G(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), Y(0.8, 0.8, 0.8, 0.2),), E(I(6), 
      G(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Y(0.6, 0.6, 0.6, 0.3),), E(I(), G(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Y(0.8, 0.8, 0.8, 0.2),), E(I(), G(-100, 0.42, 92).scale(3, 1.1, 4.1), Y(0.8, 0.8, 0.8, 0.2),),), E(I(8), G(-100, -1, 55).scale(7, 0.9, 7), Y(0.3, 0.3, 0.3, 0.4),), E(I(8), G(-100, -2, 55).scale(4, 0.3, 4), Y(0.4, 0.4, 0.4, 0.5),), E(I(8), G(-100, -3, 55).scale(0.6, 1, 0.6), Y(0.4, 0.4, 0.4, 0.5),),),), zb(G(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], 
      [-12, 0, 3.5,], [-15, 0, 3.5,]), zb(G(-89, 0.2, 80), [0, 0, 6,]), U(K(E(I(), G(-100, 1, 63).scale(7.5, 4), Y(0.5, 0.5, 0.5, 0.4)), E(I(), G(-100, 0, 70).scale(2, 2, 10), Y(0.5, 0.5, 0.5, 0.4),), E(I(20, 1), G(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Y(0.5, 0.5, 0.5, 0.4),),),), R(f => {
        f.h = () => G(-99.7, -1.9, 63.5).scale(1, q(1.1 - h[6].g), 1);
        U(C);
      }), Ma.map(({x:f, z:n}) => {
        U(I(6), G(7 * f - 100, -3, 7 * n + 55).scale(1, 8.1), Y(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(r => U(I(6), G(7 * f - 100, r, 7 * n + 55).scale(1.3, 0.5, 1.3), Y(0.4, 0.2, 0.2, 0.8),));
      }), m(7, f => {
        U(I((23 * f + 1) % 5 + 5, 0, 0.55), G(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), Y(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), U(I(), G(-87, -9.5, 24).scale(7, 1, 3), Y(0.4, 0.5, 0.6, 0.4)), U(I(4), G(-86, -9.2, 27).scale(5, 1, 5), Y(0.5, 0.6, 0.7, 0.3)), U(I(12, 1), G(-86, -9, 31).scale(1.5, 1, 1.5), Y(0.3, 0.3, 0.4, 0.1)), yb(G(-86, -7.5, 31)), R(f => {
        f.h = () => G(0, 3.5 * (1 - Ta(h[6].g, h[7].g)) + Va(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24,].map(n => U(I(), G(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), Y(0.2, 0.5, 0.6, 0.2),));
      }), R(f => {
        f.h = () => G(0, Va(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Va(h[7].i, h[6].i),);
        [6, 18,].map(n => U(I(), G(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), Y(0.1, 0.4, 0.5, 0.2),));
      }), U(K(ub(E(I(5), G(0, 0, -7).scale(2, 1.2, 2), Y(0.2, 0.4, 0.7, 0.3),), E(I(5), O.scale(9, 1.2, 9), Y(0, 0.2, 0.3, 0.5)), E(I(), O.scale(11, 1, 13), Y(0.3, 0.4, 0.6, 0.3)),), E(I(5), O.scale(5.4, 5, 5.4), Y(0, 0.2, 0.3, 0.5)),), G(-38.9, -11.3, 17),), yb(G(-38.9, -9.6, 10)), R(f => {
        f.h = () => G(0, -7.3 * h[7].i);
        U(K(ub(E(I(5), G(0, 2).scale(5, 7, 5).skewY(8), Y(0.2, 0.4, 0.5, 0.5),), E(I(5), G(0, 6).scale(1.1, 7, 1.1).skewY(-8), Y(0.25, 0.35, 0.5, 0.5),), E(I(5), G(0, 9).scale(0.6, 7, 0.6).skewY(8), Y(0.35, 0.3, 0.5, 0.5),),), E(I(5), O.scale(4, 8, 4), Y(0.2, 0.4, 0.5, 0.5)), E(I(5), G(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Y(0.2, 0.4, 0.5, 0.5),),), G(-38.9, -11.3, 17),);
        zb(G(-39.1, -0.6, 17).rotate(11), ...hb(15).map(({x:n, z:r}) => [3 * n, 3 * r, 1.2,]),);
      }), Ma.map(({x:f, z:n}) => {
        U(I(14, 1), G(9 * f - 38.9, -7.3, 11 * n + 17).scale(1, 4), Y(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(r => U(I(17, 1), G(9 * f - 38.9, r - 11.3, 11 * n + 17).scale(1.5, 0.5, 1.5), Y(0.6, 0.6, 0.6, 0.3),));
      }), U(K(ub(E(I(6), G(0, 0, -36).scale(15, 1.2, 15), Y(0.7, 0.7, 0.7, 0.3),), E(I(), G(0, 0, -18).scale(4, 1.2, 6), Y(0.45, 0.4, 0.6, 0.3),),), ...m(6, f => m(6, n => E(I(6), G(4.6 * n - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * n)).scale(2, 5, 2), Y(0.7, 0.7, 0.7, 0.3),))).flat(),), G(-38.9, -11.3, 17),), zb(G(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), U(I(5), G(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), Y(0.8, 0.1, 0.25, 0.4),), yb(G(-84, -0.5, 85).rotate(0, 
      45)), R(f => {
        f.h = () => t(-123, 1.4, 55 + -65 * va);
        U(y);
        yb(G(0, -3, -4).rotate(0, 180));
      }), K(E(I(), G(0, -0.5, 1).scale(1.15, 1.2, 6.5), Y(0.25, 0.25, 0.35, 0.3),), E(I(3), G(0, 0, -5.5).scale(3, 2), Y(0.6, 0.3, 0.4, 0.3)), ...[-1.2, 1.2,].map(f => E(I(), G(f, -0.5, 1).scale(0.14, 0.3, 6.5), Y(0.7, 0.2, 0, 0.3),)),));
      R(f => {
        f.h = () => G(0, -2, Va(h[10].g, h[11].g) * Math.abs(Math.sin(1.1 * a)) * -8.5 + 10);
        m(2, n => U(A, G(9 * n - 110 + (1 & n), 1.7, -12)));
      });
      R(f => {
        f.h = () => G(0, -2, Va(h[10].g, h[11].g) * Math.abs(Math.sin(2.1 * a)) * -8.5 + 10);
        m(2, n => U(A, G(9 * (n + 2) - 110 + (1 & n), 1.7, -12)));
      });
      R(f => {
        f.h = () => G(0, -2, -8.5 * Ta((1 - h[10].g) * (1 - Va(h[10].g, h[11].g)), Va(h[10].g, h[11].g) * Math.abs(Math.sin(1.5 * a)),) + 10,);
        m(3, n => U(A, G(9 * n - 106, 1.7, -12)));
      });
      U(K(ub(E(I(), G(26.5, -1.6, 10).scale(20, 2.08, 3)), E(I(), G(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...m(4, f => E(I(), G(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...m(3, f => E(I(), G(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), G(-123, 0, -12), Y(0.5, 0.5, 0.6, 0.2),);
      yb(G(-116, -1.4, -18).rotate(0, 180));
      U(I(), G(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Y(0.8, 0.8, 0.8, 0.2),);
      U(I(6), G(-116, -2.6, -16.5).scale(3.2, 0.8, 3), Y(0.6, 0.5, 0.7, 0.2));
      U(I(), G(-115.5, -17, -12).scale(0.5, 15, 2.2), Y(0.6, 0.6, 0.6, 0.3));
      U(I(8), G(-114, -17, -2).scale(2, 15, 2), Y(0.6, 0.6, 0.6, 0.3));
      U(I(8), G(-79, -17, -2).scale(2, 15, 2), Y(1, 1, 1, 0.3));
      U(I(), G(-77, -17, -50.5).scale(2.2, 15, 0.5), Y(0.6, 0.6, 0.6, 0.3));
      m(3, f => {
        U(v(16), G(12 * f - 109, -9, -12), Y(0.6, 0.6, 0.6, 0.3));
        U(v(16), G(-77, -9, -12 * f - 20).rotate(0, 90), Y(0.6, 0.6, 0.6, 0.3),);
      });
      U(K(E(I(12), G(-77, -14.5, -12).scale(4, 17.5, 4), Y(0.7, 0.7, 0.7, 0.2),), E(I(), G(-79, 0.1, -12).scale(3.5, 2, 1.3), Y(0.4, 0.5, 0.6, 0.2),), E(I(), G(-77, 0.1, -14).scale(1.5, 2, 2), Y(0.4, 0.5, 0.6, 0.2),), E(I(12), G(-77, 3.1, -12).scale(3, 5, 3), Y(0.4, 0.5, 0.6, 0.2),),),);
      U(I(), G(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), Y(0.6, 0.6, 0.6, 0.3),);
      U(I(9), G(-98, -18.4, -40).scale(2.5, 13.5, 2.5), Y(0.5, 0.5, 0.5, 0.3));
      U(K(E(I(), G(-93, -5.8, -40).scale(9, 1, 5), Y(0.8, 0.8, 0.8, 0.1),), E(I(9), G(-98, -5.8, -40).scale(3, 8, 3), Y(0.7, 0.7, 0.7, 0.2),),),);
      yb(G(-98, -4.4, -40).rotate(0, 90));
      zb(G(-115, 0.2, -12), [0, 0, 3.5,]);
      zb(G(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      U(K(ub(E(I(6, 0, 0, 0.6), G(-100, 0.7, 105.5).scale(8, 1, 11), Y(0.7, 0.7, 0.7, 0.2),), E(I(), G(-101.5, 0.7, 93.5).scale(10.5, 1, 2), Y(0.7, 0.7, 0.7, 0.2),),), E(I(5), G(-100, 0.7, 113).scale(4, 3, 4), Y(0.7, 0.7, 0.7, 0.2),),),);
      m(4, f => R(n => {
        n.h = () => {
          const r = Va(h[8].i, h[12].i);
          return G((2 < f ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + (0.05 < r ? r : 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        U(I(6), G(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), Y(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      R(f => {
        f.h = () => {
          const n = Va(h[8].i, h[12].i);
          return G(2.5 * (1 - n) - 139.7, -3 * (1 - h[8].g) + n * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * n + 3), 0);
        };
        U(K(E(I(10), O.scale(6, 2, 6), Y(0.1, 0.6, 0.5, 0.3)), E(I(10), O.scale(3.3, 6, 3.3), Y(0.1, 0.6, 0.5, 0.5)),),);
        U(I(15, 1), G(-7.5).rotate(0, 90).scale(3, 2.3, 3), Y(0.4, 0.4, 0.4, 0.3),);
        U(I(10), G(-7.5).rotate(0, 90).scale(2, 2.5, 2), Y(0.3, 0.8, 0.7, 0.3));
        U(I(5), G(-7.5).rotate(0, 90).scale(1, 3), Y(0.5, 0.5, 0.5, 0.5));
        yb(G(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(n => U(p, O.rotate(90 * -n, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), Y(1, 1, 0.8, 0.2),));
        zb(G(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        U(I(12, 1), G(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), Y(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(n => U(I(15, 1), G(-7.5 * f - 100, n + 0.7, 96).scale(1.1, 0.5, 1.1), Y(0.5, 0.24, 0.2, 0.4),));
        U(p, G(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), Y(1, 1, 0.8),);
        U(K(E(I(), G(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), Y(0.5, 0.5, 0.5, 0.4),), E(I(), O.scale(3, 3, 10), Y(0.6, 0.24, 0.2, 0.5)), E(I(28, 1), G(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Y(0.6, 0.24, 0.2, 0.5),), E(I(5), G(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Y(0.6, 0.24, 0.2, 0.5),), E(I(5), G(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), Y(0.6, 0.24, 0.2, 0.5),),), G(f - 100, 0.7, 97),);
      });
      R(f => {
        f.h = () => G(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        U(C);
      });
      U(K(E(I(), G(-82.07, 0.8, 106).scale(11, 0.9, 2.2), Y(0.7, 0.7, 0.7, 0.1),), E(I(45, 1), G(-81, 0.7, 106).scale3d(7.7), Y(0.7, 0.7, 0.7, 0.1),),),);
      R(f => {
        f.h = () => G(-81, 0.6, 106).rotate(0, 40 + pa);
        U(K(E(I(45, 1), O.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)), E(I(), G(0, 0, -5.5).scale(1.5, 3, 2.7), Y(0.45, 0.45, 0.45, 0.2),),),);
        U(I(8), G(0, 2).scale(3, 1.5, 3).rotate(0, 22), Y(0.7, 0.7, 0.7, 0.1));
        U(I(5), G(0, 2).scale(1, 2), Y(0.3, 0.3, 0.3, 0.2));
        zb(G(0, 3), ...hb(14).map(({x:n, z:r}) => [5.6 * n, 5.6 * r, 2,]),);
      });
      R(f => {
        f.h = () => G(-65.8, 0.8, 106).rotate(0, qa);
        [-1, 1,].map(n => U(p, O.rotate(0, 90).translate(-5 * n, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * n + 90), Y(1, 1, 0.8),));
        U(K(E(I(28, 1), G(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3),), E(I(), O.scale(9, 5, 2), Y(0.3, 0, 0, 0.3)),),);
        U(E(I(28, 1), O.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)),);
        U(E(I(5), G(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2)),);
      });
      R(f => {
        f.h = () => G(-50.7, 0.8, 106).rotate(0, 180 - qa);
        U(K(E(I(28, 1), G(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3),), E(I(), G(7).scale(9, 5, 2), Y(0.3, 0, 0, 0.3)), E(I(), G(0, 0, 7).scale(2, 5, 9), Y(0.3, 0, 0, 0.3)),),);
        U(E(I(28, 1), O.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)),);
        U(E(I(5), G(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2)),);
      });
      R(f => {
        f.h = () => G(-50.7, 0.8, 91).rotate(0, 270 + qa);
        U(K(E(I(28, 1), G(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3),), E(I(), G(7).scale(9, 5, 2), Y(0.3, 0, 0, 0.3)), E(I(), G(0, 0, -7).scale(2, 5, 9), Y(0.3, 0, 0, 0.3)),),);
        U(E(I(28, 1), O.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)),);
        U(E(I(5), G(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2)),);
      });
      U(I(), G(-58, 1, 106).scale(2, 0.65, 2), Y(0.7, 0.7, 0.7, 0.2));
      U(I(), G(-50.7, 1, 99).scale(2, 0.65, 1), Y(0.7, 0.7, 0.7, 0.2));
      U(I(), G(-42, 0.4, 91).scale(5, 1, 2.5), Y(0.7, 0.7, 0.7, 0.3));
      U(I(), G(-34.2, 0.4, 91).scale(3, 1, 3), Y(0.7, 0.7, 0.7, 0.3));
      yb(G(-34, 2.7, 96).rotate(-12, 0));
      U(I(5), G(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), Y(0.2, 0.5, 0.5, 0.6),);
      [Y(0.1, 0.55, 0.45, 0.2), Y(0.2, 0.5, 0.5, 0.3), Y(0.3, 0.45, 0.55, 0.4),].map((f, n) => R(r => {
        r.h = () => G(0, (1 - h[13].i) * (1 - h[14].i) * (n ? 0 : 3) + Va(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * n) * 4,);
        U(I(), G(-23.5, 0.5, 91 + 6.8 * n).scale(1 === n ? 2 : 3.3, 1, 3.3), f);
        2 === n && U(I(), G(-29.1, 0.4, 91).scale(2.1, 1, 3), Y(0.7, 0.7, 0.7, 0.3));
        1 === n && U(I(), G(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), Y(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => U(p, G(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), Y(1, 1, 0.8),));
      m(3, f => U(v(24.7 - 0.7 * (1 & f)), G(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? Y(0.5, 0.5, 0.5, 0.3) : Y(0.35, 0.35, 0.35, 0.5),),);
      U(K(E(I(6, 0, 0, 0.3), G(0, -0.92, 95).scale(14, 2, 14), Y(0.8, 0.8, 0.8, 0.2),), E(I(5), G(0, 0, 95).scale3d(6), Y(0.3, 0.3, 0.3, 0.5)),),);
      yb(G(0, 1.7, 82).rotate(0, 180));
      U(I(5), G(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Y(0.5, 0.3, 0.3, 0.4),);
      U(I(6), G(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Y(0.5, 0.6, 0.7, 0.3),);
      U(I(), G(0, 16, 129).scale(1.5, 1, 2), Y(0.5, 0.6, 0.7, 0.3));
      U(I(7), G(0, 16.2, 133).scale(5, 1, 5), Y(0.4, 0.5, 0.6, 0.4));
      U(K(ub(E(I(), G(0, 16, 110.5).scale(12, 1, 3), Y(0.5, 0.3, 0.3, 0.4),), E(I(), G(0, 16, 111).scale(3, 1, 3.8), Y(0.5, 0.3, 0.3, 0.4),),), E(I(5), G(0, 16, 103.5).scale(5.5, 5, 5.5), Y(0.5, 0.3, 0.3, 0.4),),),);
      R(f => {
        f.h = () => {
          const n = Math.sin(a);
          return G(-2 * n).rotate(25 * n);
        };
        U(I(3), G(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), Y(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(n => {
          U(I(6), G(0, 16, n + 95).scale(3, 1, 2.3).rotate(0, 90), Y(0.7, 0.7, 0.7, 0.4),);
          U(I(), G(0, 6.2, n + 95).scale(0.5, 11, 0.5), Y(0.5, 0.3, 0.3, 0.4),);
        });
      });
      R(f => {
        f.h = () => {
          const n = Va(Va((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return G(0, 16 * n, 8.5 * q(2 * n - 1) + 95);
        };
        U(I(5), O.scale(5, 1.1, 5), Y(0.5, 0.3, 0.3, 0.4));
        U(I(5), O.scale(5.5, 0.9, 5.5), Y(0.25, 0.25, 0.25, 0.4));
        yb(G(0, 1.5, -1).rotate(0, 180));
      });
      zb(G(0, 3, 95), ...hb(9).map(({x:f, z:n}) => [9 * f, 9 * n, 4,]),);
      zb(G(0, 19, 134), [0, 0, 3.5,]);
    });
    R(() => {
      [0, 180,].map(t => U(p, O.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), Y(1, 1, 0.8),));
      U(jb(20), G(0, 1).scale(0.5, 0.5, 0.5), Y(1, 0.3, 0.4));
      const k = E(K(I(15, 1), E(I(), G(0, 0, 1).scale(2, 2, 0.5)),), O.rotate(-90, 0).scale(0.1, 0.05, 0.1), Y(0.3, 0.3, 0.3),);
      [-1, 1,].map(t => U(k, G(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      U(I(), G(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), Y(0.3, 0.3, 0.3));
      U(jb(20), O.scale(0.7, 0.8, 0.55), Y(1, 0.3, 0.4));
    });
    [-1, 1,].map(k => R(() => {
      U(I(10, 1), G(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), Y(1, 0.3, 0.4));
    }));
    R(() => {
      U(I(6, 1), O.scale(0.13, 1.4, 0.13), Y(0.3, 0.3, 0.5, 0.1));
      U(I(10), G(0, 1).scale(0.21, 0.3, 0.21), Y(1, 0.5, 0.2));
      U(I(3), G(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), Y(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    R(() => {
      U(I(6).slice(0, -1), O.scale(0.77, 1, 0.77), Y(1, 0.3, 0.5));
    }, 0);
    R(() => {
      U(jb(30, 24, (k, t, v) => {
        const x = t / 24, y = k * Math.PI * 2 / 30, C = x ** 0.6 * Math.PI / 2;
        k = x * x * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 === t ? {x:v.D = 0, y:-0.5, z:0,} : {x:Math.cos(y) * Math.sin(C), y:Math.cos(x * Math.PI) - x - k, z:Math.sin(y) * Math.sin(C) + Math.sin(k * Math.PI * 2) / 4,};
      }), O.scale3d(0.7), Y(1, 1, 1),);
      [-1, 1,].map(k => U(jb(12), G(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: 780px;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

