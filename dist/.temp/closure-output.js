let ba = 0, ea = 0, a = 0, fa = 0, ha = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, pa = 0, qa = 0, d = 0.066, ra = 1, ta, ua, va, wa, xa;
const ya = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], e = [], h = [], za = [], Aa = [], Ba = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], 
[100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], n = {x:0, y:0, z:0,};
var Da = 0, Ea = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180, r = new DOMMatrix(), La = new Float32Array(16), Ma = new Float32Array(624), Na = (c, b) => Array.from(Array(c), (g, k) => b(k)), Oa = c => 4 < c ? 4 : c, Qa = (c, b) => b < c ? c : b, Ra = c => 0 > c ? -c : c, Sa = c => 0 > c ? 0 : 1 < c ? 1 : c, Ta = (c, b, g) => c + (b - c) * (0 > g ? 0 : 1 < g ? 1 : g), Ua = (c, b) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > b ? 0 : 1 < b ? 1 : b)), Va = c => Math.atan2(Math.sin(c *= Ka), Math.cos(c)) / Ka, Wa = (c, b, g) => 
((c *= Ka) + (2 * (b = (b * Ka - c) % (2 * Math.PI)) % (2 * Math.PI) - b) * (0 > g ? 0 : 1 < g ? 1 : g)) / Ka, Xa = ({x:c, y:b, z:g}) => Math.hypot(c - n.x, b - n.y, g - n.z), Ya = ({x:c, y:b, z:g}, k) => c * k.x + b * k.y + g * k.z, Za = c => {
  let b = 0, g = 0, k = 0, p, q = c.at(-1);
  for (p of c) {
    b += (q.y - p.y) * (q.z + p.z), g += (q.z - p.z) * (q.x + p.x), k += (q.x - p.x) * (q.y + p.y), q = p;
  }
  return p = Math.hypot(b, g, k), b /= p, g /= p, k /= p, {x:b, y:g, z:k, w:b * q.x + g * q.y + k * q.z,};
}, $a = (c, b = La, g = 0,) => (g *= 16, b[g++] = c.m11, b[g++] = c.m12, b[g++] = c.m13, b[g++] = c.m14, b[g++] = c.m21, b[g++] = c.m22, b[g++] = c.m23, b[g++] = c.m24, b[g++] = c.m31, b[g++] = c.m32, b[g++] = c.m33, b[g++] = c.m34, b[g++] = c.m41, b[g++] = c.m42, b[g++] = c.m43, b[g] = c.m44, b), ab = (c, b, g, k,) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (k + g) / (g - k), -1, 0, 0, 2 * k * g / (g - k), 0], bb = (c, b, g) => (c.D = g, c.A = b, c), cb = (c, b, g = c.A) => bb(c.map(k => {
  let p, q;
  return {x:k, y:p, z:q} = k, {x:k, y:p, z:q} = b.transformPoint({x:k, y:p, z:q,}), {x:k, y:p, z:q,};
}), g, c.D,), t = (c, b, g) => c.map(k => cb(k, b, g)), db = (c, b = 0) => Na(c, g => {
  const k = Math.cos(2 * Math.PI * g / c);
  return {x:Math.sin(2 * Math.PI * g / c), y:0, z:0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - b : k + b,};
}), eb = (c, b, g) => c.map((k, p, {length:q}) => bb([k, b[q - p - 1], b[q - (p + 1) % q - 1], c[(p + 1) % q]], c.A, g,)), F = (c, b, g = 0, k,) => (c = c ? db(c, k) : ya, k = cb(c, r.translate(0, 1).scale3d(0 < g ? g : 1)), c = cb(c, r.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...eb(c, k, b), k, c]), hb = (c, b = c, g = (k, p) => (p *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / c) * Math.sin(p), y:Math.cos(p), z:Math.sin(k) * Math.sin(p),})) => {
  const k = [];
  for (let p = 0; c > p; p++) {
    for (let q = 0; b > q; q++) {
      const y = bb([], 0, 1);
      k.push(y);
      y.push(g(p, q, y));
      q && y.push(g((p + 1) % c, q, y));
      b - 1 > q && y.push(g((p + 1) % c, q + 1 % b, y));
      y.push(g(p, q + 1 % b, y));
    }
  }
  return k;
}, ib = (c, b) => {
  var g, k, p, q = b.C;
  for (var y = 0; q.length > y; ++y) {
    if (-0.00008 > (g = Ya(c, q[y]) - c.w) ? p = b : 8e-5 < g && (k = b), p && k) {
      k = [];
      p = [];
      q = b.C;
      y = b.B;
      let A = q.at(-1), z = Ya(c, A) - c.w;
      for (const u of q) {
        g = Ya(c, u) - c.w, 8e-5 > z && p.push(A), -0.00008 < z && k.push(A), (8e-5 < z && -0.00008 > g || -0.00008 > z && 8e-5 < g) && (z /= g - z, A = {x:A.x + (A.x - u.x) * z, y:A.y + (A.y - u.y) * z, z:A.z + (A.z - u.z) * z,}, k.push(A), p.push(A)), A = u, z = g;
      }
      return {o:2 < k.length && {C:bb(k, q.A, q.D), B:y, u:b,}, m:2 < p.length && {C:bb(p, q.A, q.D), B:y, u:b,},};
    }
  }
  return {o:k, m:p,};
}, jb = (c, b, g = Za(b.C)) => {
  let k, p, q;
  return c ? ({o:k, m:p} = ib(c, b), k || p || c.s.push(b), k && (c.o = jb(c.o, k, g)), p && (c.m = jb(c.m, p, g))) : ({x:k, y:p, z:g, w:q} = g, c = {x:k, y:p, z:g, w:q, s:[b], o:0, m:0,}), c;
}, kb = (c, b, g) => {
  const k = [], p = (q, y) => {
    let {o:A, m:z} = ib(q, y);
    A || z || (0 < g * Ya(q, b) ? A = y : z = y);
    A && (q.o ? p(q.o, A) : k.push(A));
    z && q.m && p(q.m, z);
  };
  for (const q of b.s) {
    p(c, q);
  }
  return k;
}, lb = (c, b) => c && (b(c), lb(c.o, b), lb(c.m, b)), ob = c => c.length ? c.reduce((b, g) => jb(b, {C:g, B:0, u:0,}), 0) : c, pb = c => (lb(c, b => {
  const g = b.m;
  b.m = b.o;
  b.o = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const k of b.s) {
    k.B = !k.B;
  }
}), c), qb = (...c) => c.reduce((b, g) => {
  const k = [];
  if (b = ob(b), g) {
    g = ob(g);
    lb(b, p => p.s = kb(g, p, 1));
    lb(g, p => k.push([p, kb(b, p, -1)]));
    for (let [p, q] of k) {
      for (const y of q) {
        jb(b, y, p);
      }
    }
  }
  return b;
}), I = (c, ...b) => pb(qb(pb(ob(c)), ...b)), N = c => {
  const b = new Map(), g = new Map(), k = p => {
    let q;
    return p.u && ((q = b.get(p.u)) ? (g.delete(q), p = k(p.u)) : b.set(p.u, p)), p;
  };
  return lb(c, p => {
    for (const q of p.s) {
      g.set(k(q), q.B);
    }
  }), Array.from(g, ([{C:p}, q]) => {
    const y = p.map(({x:A, y:z, z:u}) => ({x:A, y:z, z:u,}));
    return bb(q ? y.reverse() : y, p.A, p.D);
  });
}, O = (c, b, g) => c + (b - c) * Sa(1 - Math.exp(-g * d)), rb = () => {
  const c = Ua(h[12].g, h[13].g);
  ka = Ta(O(ka, 0, 1), Va(ka + 60 * d), h[5].g - h[6].i,);
  ha = Ta(O(ha, 0, 5), Va(ha + 56 * d), c,);
  ja = Ta(O(ja, 0, 4), Va(ja + 48 * d), c,);
  na = O(na, h[9].i, 0.2 + 0.3 * Ra(2 * h[9].i - 1));
  ma = O(ma, la ? ma + (-9 - ma) * Sa(1.5 * d) : Sa(a / 3), 1,);
  ra && a > ra && (ra = 0, h4.innerHTML = "");
  h[0].l && 0.8 < h[0].g && (13 > ba ? (1 / 0 > ra && (ra = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].l = 0) : la || (1 / 0 > ra && (ra = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), la = 1));
  for (const b of e) {
    b.h && (b.j = b.h());
  }
  for (const b of h) {
    b.h();
  }
  for (const b of za) {
    b.h();
  }
}, sb = () => {
  h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ba = za.reduce((c, {l:b}) => c + b, 0)];
}, tb = () => {
  localStorage.DanteSP22 = JSON.stringify([h.map(({l:c}) => c), za.map(({l:c}) => c), fa, a, na,]);
}, R = (c, b = 1) => {
  const g = va;
  b = {j:r, H:e.length, G:b, s:[],};
  return e.push(va = b), c(b), va = g, b;
}, T = (c, b = r, g) => va.s.push(...t(c, b, g)), ub = c => {
  const b = va, g = h.length, k = {l:0, g:0, i:0, u:b, h() {
    const p = k.l, q = k.g, y = k.i, A = b.j.multiply(c);
    k.I = A;
    3 > Xa(A.transformPoint()) && Aa[5] && (0.3 > q || 0.7 < q) && (k.l = p ? 0 : 1, g && 1 / 0 > ra && (ra = a + 1, h4.innerHTML = "* click *"), fa = g, tb());
    k.g = O(q, p, 4);
    k.i = O(y, p, 1);
    k.j = A.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(k);
  T(F(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  T(F(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), U(0.4, 0.5, 0.5));
  T(F(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), U(0.5, 0.5, 0.4));
}, vb = (c, ...b) => {
  let g = -1, k = 0, p = 0, q = 0, y = 0, A = 0, z = 1, u = 3;
  const C = {l:0, h() {
    if (!C.l) {
      let da, X, P, V, G, w, M = 1, K = 1 / 0, Q;
      for (const S of f) {
        var {x:L, z:H, w:E} = S;
        H = (L = Math.hypot(l - L, v - H)) - E;
        Q ||= L < E;
        0 < H && K > H && (K = H, m = S);
        var ca = L / E;
        M = M < ca ? M : ca;
      }
      Q || ({x:da, z:X, w:P} = m, V = l - da, G = v - X, w = Math.hypot(V, G), W = Math.atan2(-G, V), z && (p = (Math.random() - 0.5) * Math.PI / 2, u = Qa(1, u / (1 + Math.random()))), W += p, g = -Math.cos(W), k = Math.sin(W), 0.1 < w && (w = (w < P ? w : P) / (w || 1), l = V * w + da, v = G * w + X));
      z = Q;
      u = O(u, 3 + 6 * (1 - M), 3 + M);
      x = O(x, l = O(l, l + g, u), u);
      J = O(J, v = O(v, v + k, u), u);
      q = Wa(q, Math.atan2(x - y, J - A) / Ka - 180, 3 * d,);
      y = x;
      A = J;
      var W = (C.j = D.j.multiply(c.translate(x, 0, J).rotateSelf(0, q, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.55 > Xa(W) && (C.l = 1, ca = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ba] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      ra && (ra = a + (ba && 12 > ba ? 5 : 7), h4.innerHTML = ca), sb(), tb());
    }
    C.l && (C.j = e[2].j.translate(B % 4 * 1.2 - 1.7 + Math.sin(a + B) / 7, -2, 1.7 * (B / 4 | 0) - 5.5 + Ra(B % 4 - 2) + Math.cos(a / 1.5 + B) / 6,));
  },}, D = va, B = za.length, f = b.map(([L, H, E]) => ({x:L, z:H, w:E,}));
  let m = f[0], {x:l, z:v} = m, x = l, J = v;
  za.push(C);
}, wb = (c, b, g, k) => {
  let p = 0, q = 0, y = 0, A = 1 / 0, z = -1 / 0, u = 1 / 0, C = -1 / 0, D = 1 / 0, B = -1 / 0;
  const f = 1.1 * (g - b), m = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
  return b = Na(8, l => (l = m.transformPoint({x:4 & l ? 1 : -1, y:2 & l ? 1 : -1, z:1 & l ? 1 : -1,}), p -= l.x = (f * l.x | 0) / f / l.w, q -= l.y = (f * l.y | 0) / f / l.w, y -= l.z = (f * l.z | 0) / f / l.w, l)), g = r.rotate(298, 139).translateSelf(p / 8, q / 8, y / 8), cb(b, g).map(({x:l, y:v, z:x}) => {
    A = A < l ? A : l;
    z = l < z ? z : l;
    u = u < v ? u : v;
    C = v < C ? C : v;
    D = D < x ? D : x;
    B = x < B ? B : x;
  }), D *= 0 > D ? k : 1 / k, B *= 0 < B ? k : 1 / k, r.scale(2 / (z - A), 2 / (C - u), 2 / (D - B)).translateSelf((z + A) / -2, (C + u) / -2, (D + B) / 2,).multiplySelf(g);
}, zb = () => {
  let c = !0, b, g, k, p, q, y, A, z, u, C, D, B;
  const f = () => {
    ta || !c ? xb.disconnect() : xb.connect(yb.destination);
    b4.innerHTML = "Music: " + c;
  }, m = (l = !1) => {
    if (ta !== l) {
      ta = l;
      try {
        l ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : xb.start();
      } catch {
      }
      wa = 0;
      document.body.className = l ? "l m" : "l";
      f();
      sb();
    }
  };
  oncontextmenu = () => !1;
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b1.onclick = () => {
    document.body.requestFullscreen();
    m();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    m();
    wa = 1;
  };
  b4.onclick = () => {
    c = !c;
    f();
  };
  b5.onclick = () => m(!0);
  onclick = l => {
    B = 1;
    ta || (l.target === hC && (Aa[5] = !0), wa && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:l, target:v, type:x, repeat:J}) => {
    J || ((J = !!x[5] && v === document.body) && ("Escape" === l || "Enter" === l && ta) ? ta && !B || m(!ta) : 5 === (x = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[l]) ? J && (Aa[x] = 1) : Aa[x] = J);
  };
  onmousemove = ({movementX:l, movementY:v}) => {
    wa && (l || v) && (Ja += 0.1 * l, Ia += 0.1 * v);
  };
  hC.ontouchstart = l => {
    if (!ta) {
      for (let {pageX:v, pageY:x, identifier:J} of l.changedTouches) {
        wa && v > hC.clientWidth / 2 ? void 0 === z && (u = 0, y = v, A = x, z = J, C = Ja, D = Ia) : void 0 === p && (q = 0, g = v, k = x, p = J);
      }
      b = ea;
    }
  };
  hC.ontouchmove = l => {
    if (!ta) {
      for (let {pageX:E, pageY:ca, identifier:W} of l.changedTouches) {
        var v, x, J, L, H;
        z === W && (Ja = C + (E - y) / 2.3, Ia = D + (ca - A) / 2.3, u = 1);
        p === W && (W = (g - E) / 20, v = (k - ca) / 20, x = 0 > W ? -W : W, J = 0 > v ? -v : v, L = Math.atan2(v, W), H = Sa(Math.hypot(v, W) - 0.5), pa = 0.2 < x ? Math.cos(L) * H : 0, qa = 0.2 < J ? Math.sin(L) * H : 0, (pa || qa) && (q = 1), 2 < x && (g = E + 20 * Math.sign(W)), 2 < J && (k = ca + 20 * Math.sign(v)));
      }
    }
  };
  hC.ontouchend = l => {
    let v;
    l.preventDefault();
    for (const x of l.changedTouches) {
      x.identifier === z ? (z = void 0, u || (v = 1), u = 0) : x.identifier === p ? (p = void 0, qa = pa = 0, q || (v = 1), q = 0) : v = 1;
    }
    v && l.target === hC && b && 0.02 < (l = ea - b) && 0.7 > l && (Aa[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Aa.length = pa = qa = 0;
    p = z = void 0;
    document.hidden && m(!0);
  })();
  m(!0);
}, Ab = () => {
  let c = 0, b = 0, g = 0, k = 0, p = 0, q = 2, y = !1, A, z, u, C, D, B, f, m, l, v, x, J;
  const L = {x:0, y:0, z:0,}, H = new Int32Array(256), E = new Uint8Array(65536), ca = () => {
    c = b = h[fa].u.H || 1;
    z = B = D = u = C = 0;
    q = 2;
  }, W = () => {
    for (let X = 32; 128 > X; X += 2) {
      let P = 0, V = 0, G = 0, w = 0;
      const M = 512 * X;
      for (let K = 1 & X; 128 > K; K += 2) {
        const Q = M + 4 * K;
        let S = M + 4 * (127 - K);
        const aa = E[Q] / 255, ia = E[1 + S] / 255, oa = 1 - Ra(K / 63.5 - 1);
        10 < K && 118 > K && (P = Qa(P, Qa(aa * oa, aa * E[S] / 255)), V = Qa(V, Qa(ia * oa, ia * E[1 + Q] / 255)));
        (54 > K || 74 < K) && 1e-3 < (S = (1 - oa) * (ia < aa ? aa : ia) / 3) && (64 > K && S > G ? G = S : 64 < K && S > w && (w = S));
      }
      Ra(w - G) > (0 > m ? -m : m) && (m = w - G);
      Ra(V - P) > (0 > l ? -l : l) && (l = V - P);
    }
  }, da = () => {
    let X = 0, P = 0, V = 0, G = 0;
    H.fill(0);
    for (let M = 0; 31 > M; ++M) {
      let K = 0;
      const Q = 512 * M;
      for (let S = 0; 128 > S; S++) {
        var w = Q + 4 * S;
        let aa = (E[w] + E[1 + w]) / 255;
        w = E[2 + w];
        14 < S && 114 > S && (K += aa);
        w && aa && (aa = H[w] + 1, H[w] = aa, X > aa || (X = aa, P = w));
      }
      3 > K && 5 < M && (G += M / 32);
      3 < K && (7 < M && (V += M / 15), z = 1);
    }
    P && (z = 1);
    q ? P && (q = 0, b = P) : b = P || c;
    c = P;
    u = O(u, z ? 6.5 : 8, 4);
    L.y += V / 41 - (z ? 1 : u) * G / 41 * u * d;
  };
  xa = () => {
    let X = pa + (Aa[0] ? 1 : 0) + (Aa[2] ? -1 : 0), P = qa + (Aa[1] ? 1 : 0) + (Aa[3] ? -1 : 0), V = navigator.getGamepads()[0];
    if (V) {
      const aa = V.buttons;
      var G = V.axes;
      (V = (w = ia => aa[ia]?.pressed || 0 < aa[ia]?.value)(1) || w(3) || w(2) || w(0)) !== y && (y = V) && (Aa[5] = 1);
      X += (0.2 < Ra(-G[0]) ? -G[0] : 0) + (w(14) ? 1 : 0) + (w(15) ? -1 : 0);
      P += (0.2 < Ra(-G[1]) ? -G[1] : 0) + (w(12) ? 1 : 0) + (w(13) ? -1 : 0);
      wa && (0.3 < Ra(G[2]) && (Ja += 80 * G[2] * d), 0.3 < Ra(G[3]) && (Ia += 80 * G[3] * d));
    }
    V = Math.atan2(P, X);
    G = Sa(Math.hypot(P, X));
    0.05 > G && (G = 0);
    X = G * Math.cos(V);
    P = G * Math.sin(V);
    z = l = m = 0;
    Y.fa7();
    Y.r9r(0, 0, 128, 128, 6408, 5121, E);
    Y.iay(36008, [36064, 36096]);
    Y.iay(36009, [36064, 36096]);
    NO_INLINE(W)();
    NO_INLINE(da)();
    var w = Sa(1 - 5 * Qa(0 > m ? -m : m, 0 > l ? -l : l)), M = (b || (m += D * w * d, l += B * w * d), D = O(D, 0, z ? 8 : 4), B = O(B, 0, z ? 8 : 4), C = O(C, z ? (X || P ? z ? 7 : 4 : 0) * w : 0, z ? 0.1 < w ? 10 : X || P ? 5 : 7 : 1,), m += X * C * d, l += P * C * d, (K = (w = 1 === e[b].G && e[b].j || r).inverse()).m41 = 0, K.m42 = 0, K.m43 = 0, {x:m, z:l} = K.transformPoint({x:m, z:l, w:0,}), L.x += m, L.z += l, q && ({x:K, y:M, z:Q} = h[fa].I.transformPoint({x:0, y:12, z:-2.5,}), 1 < q && 
    (q = 1, f = n.y = M), n.x = K, n.z = Q), b !== A && (A = b, {x:M, y:K, z:Q} = w.inverse().transformPoint(n), L.x = M, L.y = K, L.z = Q), n.x), K = n.z, {x:Q, y:w, z:S} = w.transformPoint(L);
    n.x = Q;
    n.y = w;
    n.z = S;
    b && (D = (Q - M) / d, B = (S - K) / d);
    G && (g = 90 - V / Ka);
    k = Wa(k, g, 8 * d);
    p += (G - p) * Sa(10 * d);
    f = Ta(O(f, w, 2), w, 8 * Ra(f - w),);
    void 0 === v && (Da = v = Q, Ea = (x = f = w) + 13, Ha = (J = S) + -36);
    v = O(v, Q, Oa(Qa(0.4, Ra(v - Q) - 1.5)));
    x = O(x, w, Oa(Qa(0.4, Ra(x - w) - 2.2)));
    J = O(J, S, Oa(Qa(0.4, Ra(J - S) - 1.5)));
    wa ? (Da = O(Da, Q, 666 * q + 18), Ea = O(Ea, f + 1.5, 666 * q + 18), Ha = O(Ha, S, 666 * q + 18)) : (Da = O(Da, v, 2), Ea = O(Ea, Qa(x + 13, 6), 2), Ha = O(Ha, J + -18, 2), M = Ha - J, 1 < (0 > M ? -M : M) && (K = Da - v, Ja = 270 + Math.atan2(M, K) / Ka, Ia = 90 - Math.atan2(Math.hypot(M, K), Ea - x) / Ka));
    Ia = Qa(87 > Ia ? Ia : 87, -87);
    Ja = Va(Ja);
    1 === b && (h[9].l = -15 > n.x && 0 > n.z ? 1 : 0);
    (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && ca();
    e[37].j = r.translate(n.x, f, n.z).rotateSelf(0, k);
    [38, 39].map((aa, ia) => {
      e[aa].j = e[37].j.translate(0, p * Sa(0.45 * Math.sin(9.1 * a + Math.PI * (ia - 1) - Math.PI / 2)),).rotateSelf(p * Math.sin(9.1 * a + Math.PI * (ia - 1)) * 0.25 / Ka, 0);
    });
  };
  ca();
}, Bb = (c, b = 35633) => (b = Y.c6x(b), Y.s3c(b, c), Y.c6a(b), b), Gb = (c, b) => {
  const g = {}, k = Y.c1h();
  return Y.abz(k, c), Y.abz(k, Bb(b, 35632)), Y.l8l(k), p => p ? g[p] || (g[p] = Y.gan(k, p)) : Y.u7y(k);
}, Hb = (c, b, g = 42) => {
  if (ta) {
    g = r.rotate(0, 40 * Math.sin(ea) - 70);
    for (var k of [37, 38, 39]) {
      $a(g, Ma, k - 1);
    }
    Y.uae(c, !1, Ma);
    Y.d97(4, e[39].F - e[37].v, 5123, 2 * e[37].v,);
  } else {
    for (k = 0; e.length > k; ++k) {
      e[k].G && $a(e[k].j, Ma, k - 1);
    }
    Y.uae(c, !1, Ma);
    Y.d97(4, (b ? e[39].F : e[37].v) - 3, 5123, 6,);
    for (b = 0; 13 > b; ++b) {
      $a(za[b].j, Ma, b);
    }
    for (b = 0; h.length > b; ++b) {
      $a(h[b].j, Ma, b + 13), Ma[16 * (b + 13) + 15] = 1 - h[b].g;
    }
    Y.uae(c, !1, Ma);
    Y.das(4, e[g].F - e[g].v, 5123, 2 * e[g].v, 13,);
    Y.das(4, e[40].F - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Ib = c => {
  h4.innerHTML += ".";
  setTimeout(c);
}, Jb = c => Math.sin(c * Math.PI * 2), Kb = c => 0.5 > c % 1 ? 1 : -1, Lb = c => c % 1 * 2 - 1, Mb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c, Tb = c => {
  let b = 0;
  const g = () => {
    const q = yb.createBuffer(2, 5362944, 44100);
    for (let y = 0; 2 > y; y++) {
      for (let A = y, z = q.getChannelData(y); 10725888 > A; A += 2) {
        z[A >> 1] = p[A] / 65536;
      }
    }
    xb.buffer = q;
    xb.loop = !0;
    Ib(c);
  }, k = () => {
    let q, y = 0, [A, z, u, C, D, B, f, m, l, v, x, J, L, H, E, ca, W, da, X, P, V] = Ba[b];
    v = v * v * 4;
    for (const Q of [5513, 4562, 3891]) {
      const S = [];
      let aa = 0, ia = 0, oa, Pa, Cb;
      const Ca = new Int32Array(768 * Q), Nb = 2 ** (J - 9) / Q, Ob = Math.PI * 2 ** (W - 8) / Q, mb = X * Q & -2;
      for (let fb = 0; 11 >= fb; ++fb) {
        for (let gb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + fb]; 32 > gb; ++gb) {
          const Eb = (32 * fb + gb) * Q;
          for (var G = 0; 4 > G; ++G) {
            if (oa = 0, Db && (oa = V[Db - 1].charCodeAt(gb + 32 * G) - 40, oa += 0 < oa ? 106 : 0), oa) {
              var w;
              if (!(w = S[oa])) {
                w = oa;
                let Z = void 0, sa = void 0;
                var M = Q, K = oa;
                let Pb = 0, Qb = 0;
                const Rb = 2 > b ? Lb : Jb, Sb = 2 > b ? 1 > b ? Kb : Mb : Jb, Fb = new Int32Array(m + l + v);
                for (let Fa = 0, nb = 0; m + l + v > Fa; ++Fa, ++nb) {
                  let Ga = 1;
                  m > Fa ? Ga = Fa / m : m + l > Fa || (Ga = (1 - (Ga = (Fa - m - l) / v)) * 3 ** (-x / 16 * Ga));
                  0 > nb || (nb -= 4 * M, sa = 396e-5 * 2 ** ((K + z - 256) / 12), Z = 396e-5 * 2 ** ((K + D - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                  Fb[Fa] = 80 * (Rb(Pb += sa * Ga ** (u / 32)) * A + Sb(Qb += Z * Ga ** (B / 32)) * C + (f ? (2 * Math.random() - 1) * f : 0)) * Ga | 0;
                }
                w = S[w] = Fb;
              }
              for (let Z = 0, sa = 2 * Eb; w.length > Z; ++Z, sa += 2) {
                Ca[sa] += w[Z];
              }
            }
          }
          for (let Z, sa = 0; Q > sa; ++sa) {
            G = 0, w = 2 * (Eb + sa), ((Z = Ca[w]) || Cb) && (Pa = 308e-5 * L, 1 !== b && 4 !== b || (Pa *= Math.sin(Nb * w * Math.PI * 2) * P / 512 + 0.5), Pa = 1.5 * Math.sin(Pa), aa += Pa * ia, q = (1 - H / 255) * (Z - ia) - aa, ia += Pa * q, Z = 4 === b ? ia : 3 === b ? q : aa, b || (Z = 1 > (Z *= 22e-5) ? -1 < Z ? Math.sin(Z / 4 * Math.PI * 2) : -1 : 1, Z /= 22e-5), Z *= E / 32, Cb = 1e-5 < Z * Z, q = Math.sin(Ob * w) * ca / 512 + 0.5, G = Z * (1 - q), Z *= q), w < mb || (G += Ca[1 + w - mb] * 
            da / 255, Z += Ca[w - mb] * da / 255), p[y + w] += Ca[w] = G, ++w, p[y + w] += Ca[w] = Z;
          }
        }
      }
      y += Ca.length;
    }
    Ib(5 > ++b ? k : g);
  }, p = new Int32Array(10725888);
  Ib(k);
}, Ub = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), U = NO_INLINE((c, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c), yb = new AudioContext(), xb = yb.createBufferSource(), Y = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const c in Y) {
  Y[c[0] + [...c].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Y[c];
}
Ib(() => {
  let c = 0;
  const b = () => {
    if (2 == ++c) {
      const k = l => {
        Y.f1s();
        requestAnimationFrame(k);
        v = (l - (ua || l)) / 1e3;
        ta ? (d = 0, Aa[5] = 0) : d = 0.066 < v ? 0.066 : v;
        a += d;
        ea += v;
        ua = l;
        0 < d && (rb(), xa(), Aa[5] = 0);
        var v = ta ? r.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Sa(hC.clientWidth / 1e3)) : r.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ea, -Ha,);
        0 < d && (B(), Y.b6o(36160, y), Y.v5y(0, 0, 128, 128), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(B("b"), !1, $a(r.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, 0.3 - n.z,),),), Hb(B("c"), 0, 41), Y.c4s(256), Y.cbf(!1, !0, !0, !1), Y.uae(B("b"), !1, $a(r.translate(-n.x, -n.y, -n.z - 0.3),),), Hb(B("c"), 0, 41), Y.f1s());
        C();
        Y.b6o(36160, q);
        Y.v5y(0, 0, 2048, 2048);
        m[0](wb(v, 0.3, 55, 10));
        m[1](wb(v, 55, 177, 11));
        f();
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.cbf(!0, !0, !0, !0);
        Y.c4s(16640);
        m[0]();
        m[1]();
        Y.uae(f("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
        Y.uae(f("b"), !1, $a(v));
        Y.ubu(f("k"), Da, Ea, Ha);
        Hb(f("c"), !wa);
        D();
        Y.ubu(D("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ea);
        ta ? Y.ubu(D("k"), 0, 0, 0) : Y.ubu(D("k"), Da, Ea, Ha);
        Y.uae(D("b"), !1, $a(v.inverse()));
        Y.d97(4, 3, 5123, 0);
        Y.b6o(36160, y);
        Y.f1s();
      }, p = g, q = Y.c5w(), y = Y.c5w(), A = Y.c3z(), z = Y.c25(), u = Bb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}"), C = Gb(Bb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), 
      "#version 300 es\nvoid main(){}",), D = Gb(Bb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), B = Gb(u, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), f = Gb(u, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), m = (B(), Y.uae(B("a"), !1, ab(1.4, 0.59, 1e-4, 1)), D(), Y.ubh(D("q"), 3), f(), Y.ubh(f("q"), 3), Na(2, l => {
        const v = new Float32Array(16), x = Y.c25(), J = f(l ? "j" : "i");
        return Y.ubh(f(l ? "h" : "g"), l), Y.b6o(36160, q), Y.d45([0]), Y.r9l(0), Y.a4v(33984 + l), Y.b9j(3553, x), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), L => {
          L ? ($a(L, v), Y.uae(C("b"), !1, v), Y.fas(36160, 36096, 3553, x, 0), Y.c4s(256), Hb(C("c"), !wa)) : Y.uae(J, !1, v);
        };
      }));
      Y.e8z(2929);
      Y.e8z(2884);
      Y.c70(1);
      Y.c7a(1029);
      Y.d4n(515);
      Y.c5t(0, 0, 0, 1);
      Y.b6o(36160, y);
      Y.bb1(36161, A);
      Y.r4v(36161, 33189, 128, 128);
      Y.f8w(36160, 36096, 36161, A);
      Y.a4v(33987);
      Y.b9j(3553, z);
      Y.fas(36160, 36064, 3553, z, 0);
      Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Y.a4v(33987);
      Y.b9j(3553, Y.c25());
      Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, p);
      Y.gbn(3553);
      Y.t2z(3553, 10241, 9987);
      Y.t2z(3553, 10240, 9729);
      try {
        const [l, v, x, J, L] = JSON.parse(localStorage.DanteSP22,);
        h.map((H, E) => H.g = H.i = H.l = E ? 0 | l[E] : 0);
        za.map((H, E) => H.l = 0 | v[E]);
        fa = x;
        a = J;
        na = L;
      } catch {
      }
      ma = 0 > fa ? 0 : 1 < fa ? 1 : fa;
      rb();
      NO_INLINE(Ab)();
      requestAnimationFrame(k);
      NO_INLINE(zb)();
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      const u = [], C = H => {
        let {x:E, y:ca, z:W} = B[H], da = (L[0] = E, L[1] = ca, L[2] = W, H = "" + (B.D ? J : x), v.get(H));
        return void 0 !== da ? (E = 3 * da, l[E] = (l[E++] + x[5]) / 2, l[E] = (l[E++] + x[6]) / 2, l[E] = (l[E] + x[7]) / 2) : (v.set(H, da = v.size), f.push(E, ca, W, L[3]), m.push(x[4]), l.push(x[5], x[6], x[7])), da;
      };
      let D = 0, B;
      const f = [], m = [], l = [], v = new Map(), x = new Int32Array(8), J = new Int32Array(x.buffer, 0, 5), L = new Float32Array(x.buffer);
      for (const H of e) {
        for (B of (L[3] = 40 === H.H ? -14 : H.G && H.H, H.s)) {
          const {x:E, y:ca, z:W} = Za(B);
          x[4] = 0 | B.A;
          x[5] = 32767 * E;
          x[6] = 32767 * ca;
          x[7] = 32767 * W;
          for (let da = 2, X = C(0), P = C(1); B.length > da; ++da) {
            u.push(X, P, P = C(da));
          }
        }
        H.s = null;
        H.v = D;
        H.F = D = u.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(f), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(l), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(m), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(u), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Ib(b);
    });
    const k = (u, C, D) => r.translate(u + Math.sin(a + 2) / 5, C + Math.sin(0.8 * a) / 3, D).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), p = Na(11, u => r.translate(Math.sin(u / 10 * Math.PI), u / 10).rotate(+u).scale(1.0001 - u / 10, 0, 1 - u / 10),), q = Na(10, u => eb(cb(db(18), p[u]).reverse(), cb(db(18), p[u + 1]), 1,)).flat(), y = N(I(t(F(20, 1, 1.15, 1), r.translate(0, -3).scale(3.5, 1, 3.5), U(0.7, 0.4, 0.25, 0.7),), t(F(20, 1, 1.3, 1), r.translate(0, -2.5).scale(2.6, 
    1, 3), U(0.7, 0.4, 0.25, 0.2),), t(F(), r.translate(4, -1.2).scale3d(2), U(0.7, 0.4, 0.25, 0.3)),),), A = N(I(t(F(), r.translate(0, -8).scale(6, 15, 2.2)), t(F(), r.translate(0, -14.1).scale(4, 13, 4)), t(F(20, 1), r.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), z = Na(7, u => t(F(6, 1), r.translate(4 * (u / 6 - 0.5), 3).scale(0.2, 3, 0.2), U(0.3, 0.3, 0.38),)).flat();
    R(() => T([ya.slice(1)], r.translate(-2).scale3d(3).rotate(90, 0)), 0);
    R(() => {
      const u = (f, m, l) => R(v => {
        v.h = () => r.translate(C() * Math.sin(3 * f + a * f) * m);
        ya.map(({x, z:J}) => {
          T(F(11, 1), r.translate(4 * x, 4, l + 4 * J).scale(0.8, 3, 0.8), U(0.5, 0.3, 0.7, 0.6),);
          T(F(), r.translate(4 * x, 7, l + 4 * J).scale(1, 0.3), U(0.5, 0.5, 0.5, 0.3),);
        });
        T(N(I(t(F(), r.translate(0, 0, l).scale(5, 1, 5), U(0.8, 0.8, 0.8, 0.3),), ...[-1, 1].map(x => t(F(), r.translate(5 * x, 0.2, l).rotate(-30 * x).scale(4, 1, 2), U(0.8, 0.8, 0.8, 0.3),)),),),);
        T(F(), r.translate(0, -3, l).scale(8, 2, 8), U(0.4, 0.4, 0.4, 0.3));
      }), C = () => {
        var f = h[2].i, m = 1 - h[4].i;
        return f < m ? f : m;
      }, D = (R(f => {
        f.h = () => k(-12, 4.2, 40 * ma - 66);
        T(y);
        ub(r.translate(0, -3, 4));
      }), ub(r.translate(-5.4, 1.5, -19).rotate(0, -90)), vb(r.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), vb(r.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...db(18).map(({x:f, z:m}) => [7 * f, 10 * m, 4.5 - 2 * (0 > f ? -f : f)]),), T(F(), r.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), U(0.8, 0.8, 0.8, 0.2),), ya.map(({x:f, z:m}) => T(F(6), r.translate(3 * f, 3, 15 * m).scale(0.7, 4, 0.7), U(0.6, 0.3, 0.3, 0.4),)), [-23, 22].map(f => T(F(), r.translate(0, 0, f).scale(3, 1, 8), 
      U(0.9, 0.9, 0.9, 0.2))), [-15, 15].map((f, m) => {
        T(F(), r.translate(0, 6.3, f).scale(4, 0.3, 1), U(0.3, 0.3, 0.3, 0.4));
        T(F(), r.translate(0, 1, f).scale(3, 0.2, 0.35), U(0.5, 0.5, 0.5, 0.3));
        R(l => {
          l.h = () => r.translate(0, 4.7 * -h[m + 1].g, f);
          T(z);
        });
      }), Na(5, f => Na(2, m => T(q, r.translate(18.5 * (m - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * m).scale(1.2, 10, 1.2,), U(1, 1, 0.8, 0.2),),)), T(F(), r.translate(3, 1.5, -20).scale(0.5, 2, 5), U(0.7, 0.7, 0.7, 0.2)), T(F(), r.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), U(0.75, 0.75, 0.75, 0.2),), T(F(5), r.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), U(0.6, 0.3, 0.3, 0.4),), T(F(), r.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), U(0.8, 
      0.2, 0.2, 0.5),), T(N(I(qb(t(F(6, 0, 0, 0.3), r.translate(8, -3, -4).scale(13, 1, 13), U(0.7, 0.7, 0.7, 0.2),), t(F(6), r.translate(0, -8).scale(9, 8, 8), U(0.4, 0.2, 0.5, 0.5),), t(F(6, 0, 0, 0.3), r.translate(0, -0.92).scale(13, 2, 13), U(0.8, 0.8, 0.8, 0.2),),), t(F(5), r.scale(5, 30, 5), U(0.4, 0.2, 0.6, 0.5)), t(F(5, 0, 1.5), r.translate(0, 1).scale(4.5, 0.3, 4.5), U(0.7, 0.5, 0.9, 0.2),), t(F(), r.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), U(0.5, 0.5, 0.5, 0.5),), 
      t(F(6), r.translate(15, -1.5, 4).scale(3.5, 1, 3.5), U(0.5, 0.5, 0.5, 0.5),),),),), R(f => {
        f.h = () => r.translate(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        T(F(5), r.translate(0, -0.2).scale(5, 1, 5), U(0.6, 0.65, 0.7, 0.3));
        ub(r.translate(0, 1.2));
      }), ub(r.translate(15, -2, 4)), u(0.7, 12, 35), u(1, 8.2, 55), R(f => {
        f.h = () => r.translate(C() * Math.sin(a / 1.5 + 2) * 12);
        T(N(I(qb(t(F(), r.scale(1.5, 1, 5), U(0.9, 0.9, 0.9, 0.2)), t(F(6), r.scale(4, 1, 5), U(0.9, 0.9, 0.9, 0.2)), t(F(), r.translate(0, -2).scale(2, 3.2, 1.9), U(0.3, 0.8, 0.5, 0.5),), t(F(16, 1, 0, 4), r.scale(1, 1, 1.5).rotate(0, 90), U(0.9, 0.9, 0.9, 0.2),),), t(F(), r.scale(1.3, 10, 1.3), U(0.2, 0.7, 0.4, 0.6)),),), r.translate(0, 0, 45),);
        vb(r.translate(0, 2.8, 45), [0, 0, 4.5]);
      }), T(F(), r.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), R(f => {
        f.h = () => r.translate(9.8 * (1 - C()));
        T(F(3), r.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), U(0.3, 0.6, 0.6, 0.2),);
        T(F(8), r.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), U(0.8, 0.8, 0.8, 0.2),);
        T(F(), r.translate(-23, -3, 55).scale(5.2, 1.7, 3), U(0.5, 0.5, 0.5, 0.3));
        T(F(), r.translate(-23, -2.2, 62).scale(3, 1, 4), U(0.5, 0.5, 0.5, 0.3));
        ub(r.translate(-23, -0.5, 66.5));
      }), R(f => {
        f.h = () => r.translate(0, Sa(1 - 5 * C()) * Ua(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        T(F(), r.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), U(0.7, 0.7, 0.7, 0.2),);
        T(N(I(t(F(), r.scale(3, 1.4, 2.7)), t(F(), r.scale(1.2, 8, 1.2)),),), r.translate(-33, -3, 55), U(0.7, 0.7, 0.7, 0.2),);
      }), R(f => {
        f.h = () => r.translate(0, 0, Sa(1 - 5 * C()) * Ua(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        T(N(I(t(F(), r.translate(-27, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2),), t(F(), r.translate(-27, -3, 55).scale(1, 3), U(0.9, 0.9, 0.9, 0.2),),),),);
        T(F(), r.translate(-39, -3, 55).scale(3, 1.4, 2.7), U(0.9, 0.9, 0.9, 0.2));
      }), R(f => {
        f.h = () => r.translate(0, -6.5 * h[4].i);
        T(F(6), r.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), U(0.7, 0.7, 0.7, 0.4),);
      }), ub(r.translate(-55, -1.1, 46).rotate(0, 90)), T(F(6), r.translate(-61.3, -2.4, 49).scale(3, 1, 5), U(0.4, 0.6, 0.6, 0.3)), T(F(7), r.translate(-57, -2.6, 46).scale(4, 1, 4), U(0.8, 0.8, 0.8, 0.3)), N(qb(t(F(), r.translate(0, -3).scale(11, 1.4, 3), U(0.9, 0.9, 0.9, 0.2),), I(t(F(6), r.rotate(90).scale(6, 8, 6), U(0.3, 0.6, 0.6, 0.3)), t(F(4, 0, 0.01), r.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), U(0.3, 0.6, 0.6, 0.3),), t(F(6), r.rotate(90).scale(5, 12, 5), U(0.3, 0.6, 0.6, 0.3)), 
      ...[5, 0, -5].map(f => t(F(5), r.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), U(0.3, 0.6, 0.6, 0.3),)),),),)), B = (T(D, r.translate(-53, 0, 55)), R(f => {
        f.h = () => r.translate(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ka, 0,);
        T(D);
      }, 2), T(F(), r.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), U(0.7, 0.7, 0.7, 0.2),), T(F(3, 0, -0.5), r.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), U(0.8, 0.8, 0.8, 0.2),), T(N(I(qb(t(F(), r.translate(-100, -2.5, 55).scale(8, 1, 8), U(0.8, 0.8, 0.8, 0.2),), t(F(), r.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), U(0.8, 0.8, 0.8, 0.2),), t(F(), r.translate(-100, -2.6, 70).scale(3, 1.1, 7), U(0.8, 0.8, 0.8, 0.2),), t(F(), r.translate(-96, -2.6, 73).rotate(0, 
      45).scale(3, 1.1, 5), U(0.8, 0.8, 0.8, 0.2),), t(F(6), r.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), U(0.6, 0.6, 0.6, 0.3),), t(F(), r.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), U(0.8, 0.8, 0.8, 0.2),), t(F(), r.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), U(0.8, 0.8, 0.8, 0.2),),), t(F(8), r.translate(-100, -1, 55).scale(7, 0.9, 7), U(0.3, 0.3, 0.3, 0.4),), t(F(8), r.translate(-100, -2, 55).scale(4, 0.3, 4), U(0.4, 0.4, 0.4, 0.5),), t(F(8), r.translate(-100, 
      -3, 55).scale(0.6, 1, 0.6), U(0.4, 0.4, 0.4, 0.5),),),),), vb(r.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), vb(r.translate(-89, 0.2, 80), [0, 0, 6]), T(N(I(t(F(), r.translate(-100, 1, 63).scale(7.5, 4), U(0.5, 0.5, 0.5, 0.4),), t(F(), r.translate(-100, 0, 70).scale(2, 2, 10), U(0.5, 0.5, 0.5, 0.4),), t(F(20, 1), r.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), U(0.5, 0.5, 0.5, 0.4),),),),), R(f => {
        f.h = () => r.translate(-99.7, 5.3 * -h[6].g - 2, 63.5);
        T(z);
      }), ya.map(({x:f, z:m}) => {
        T(F(6), r.translate(7 * f - 100, -3, 7 * m + 55).scale(1, 8.1), U(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4].map(l => T(F(6), r.translate(7 * f - 100, l, 7 * m + 55).scale(1.3, 0.5, 1.3), U(0.4, 0.2, 0.2, 0.8),));
      }), Na(7, f => {
        T(F((23 * f + 1) % 5 + 5, 0, 0.55), r.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), U(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), T(F(), r.translate(-87, -9.5, 24).scale(7, 1, 3), U(0.4, 0.5, 0.6, 0.4)), T(F(4), r.translate(-86, -9.2, 27).scale(5, 1, 5), U(0.5, 0.6, 0.7, 0.3)), T(F(12, 1), r.translate(-86, -9, 31).scale(1.5, 1, 1.5), U(0.3, 0.3, 0.4, 0.1),), ub(r.translate(-86, -7.5, 31)), R(f => {
        f.h = () => r.translate(0, 3.5 * (1 - Qa(h[6].g, h[7].g)) + Ua(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24].map(m => T(F(), r.translate(m - 76.9, m / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.2, 0.5, 0.6, 0.2),));
      }), R(f => {
        f.h = () => r.translate(0, Ua(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ua(h[7].i, h[6].i),);
        [6, 18].map(m => T(F(), r.translate(m - 76.9, m / -13 - 10, 24).scale(2.8, 1.5, 3), U(0.1, 0.4, 0.5, 0.2),));
      }), T(N(I(qb(t(F(), r.scale(11, 1, 13), U(0.3, 0.4, 0.6, 0.3)), t(F(5), r.translate(0, 0, -7).scale(2, 1.2, 2), U(0.2, 0.4, 0.7, 0.3),), t(F(5), r.scale(9, 1.2, 9), U(0, 0.2, 0.3, 0.5)),), t(F(5), r.scale(5.4, 5, 5.4), U(0, 0.2, 0.3, 0.5)),),), r.translate(-38.9, -11.3, 17),), ub(r.translate(-38.9, -9.6, 10)), R(f => {
        f.h = () => r.translate(0, -7.3 * h[7].i);
        T(N(I(qb(t(F(5), r.translate(0, 2).scale(5, 7, 5).skewY(8), U(0.2, 0.4, 0.5, 0.5),), t(F(5), r.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), U(0.25, 0.35, 0.5, 0.5),), t(F(5), r.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), U(0.35, 0.3, 0.5, 0.5),),), t(F(5), r.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), U(0.2, 0.4, 0.5, 0.5),),),), r.translate(-38.9, -11.3, 17),);
        vb(r.translate(-39.1, -0.6, 17).rotate(11), ...db(15).map(({x:m, z:l}) => [3 * m, 3 * l, 1.2]),);
      }), ya.map(({x:f, z:m}) => {
        T(F(14, 1), r.translate(9 * f - 38.9, -7.3, 11 * m + 17).scale(1, 4), U(0.25, 0.25, 0.25, 1),);
        [1.5, 8].map(l => T(F(17, 1), r.translate(9 * f - 38.9, -7.3, 11 * m + 17).translate(0, l - 4).scale(1.5, 0.5, 1.5), U(0.6, 0.6, 0.6, 0.3),));
      }), T(N(I(qb(t(F(6), r.translate(0, 0, -36).scale(15, 1.2, 15), U(0.7, 0.7, 0.7, 0.3),), t(F(), r.translate(0, 0, -18).scale(4, 1.2, 6), U(0.45, 0.4, 0.6, 0.3),),), ...Na(6, f => Na(6, m => t(F(6), r.translate(4.6 * m - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * m)).scale(2, 5, 2,), U(0.7, 0.7, 0.7, 0.3),))).flat(),),), r.translate(-38.9, -11.3, 17),), vb(r.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]), T(F(5), r.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), U(0.8, 0.1, 0.25, 0.4),), ub(r.translate(-84, -0.5, 85).rotate(0, 45)), R(f => {
        f.h = () => k(-123, 1.4, 55 + -65 * na);
        T(y);
        ub(r.translate(0, -3, -4).rotate(0, 180));
      }), vb(r.translate(-115, 0.2, -12), [0, 0, 3.5]), N(I(t(F(), r.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), U(0.25, 0.25, 0.35, 0.3),), t(F(3), r.translate(0, 0, -5.5).scale(3, 2), U(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2].map(f => t(F(), r.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), U(0.7, 0.2, 0, 0.3),)),),));
      R(f => {
        f.h = () => r.translate(0, -2, Ua(h[10].g, h[11].g) * Ra(Math.sin(1.1 * a)) * -8.5 + 10);
        Na(2, m => T(B, r.translate(9 * m - 110 + (1 & m), 1.7, -12)));
      });
      R(f => {
        f.h = () => r.translate(0, -2, Ua(h[10].g, h[11].g) * Ra(Math.sin(2.1 * a)) * -8.5 + 10);
        Na(2, m => T(B, r.translate(9 * (m + 2) - 110 + (1 & m), 1.7, -12)));
      });
      R(f => {
        f.h = () => r.translate(0, -2, -8.5 * Qa((1 - h[10].g) * (1 - Ua(h[10].g, h[11].g)), Ua(h[10].g, h[11].g) * Ra(Math.sin(1.5 * a)),) + 10,);
        Na(3, m => T(B, r.translate(9 * m - 106, 1.7, -12)));
      });
      T(N(I(qb(t(F(), r.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), t(F(), r.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),), ...Na(4, f => t(F(), r.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...Na(3, f => t(F(), r.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),),), r.translate(-123, 0, -12), U(0.5, 0.5, 0.6, 0.2),);
      T(F(5), r.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), U(0.25, 0.25, 0.35, 1),);
      ub(r.translate(-116, -1.4, -18).rotate(0, 180));
      T(F(), r.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), U(0.8, 0.8, 0.8, 0.2),);
      T(F(6), r.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), U(0.6, 0.5, 0.7, 0.2),);
      Na(3, f => {
        T(A, r.translate(12 * f - 109, -9, -12), U(0.6, 0.6, 0.6, 0.3));
        T(A, r.translate(-77, -9, -12 * f - 20).rotate(0, 90), U(0.6, 0.6, 0.6, 0.3),);
      });
      T(N(I(t(F(12), r.translate(-77, -13.9, -12).scale(4, 18.2, 4), U(0.7, 0.7, 0.7, 0.2),), t(F(), r.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), U(0.4, 0.5, 0.6, 0.2),), t(F(), r.translate(-77, 0, -14).scale(1.5, 2.2, 2), U(0.4, 0.5, 0.6, 0.2),), t(F(12), r.translate(-77, 2.8, -12).scale(3, 5, 3), U(0.4, 0.5, 0.6, 0.2),),),),);
      T(F(), r.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), U(0.6, 0.6, 0.6, 0.3),);
      T(F(), r.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), U(0.6, 0.6, 0.6, 0.3),);
      T(F(), r.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), U(0.6, 0.6, 0.6, 0.3),);
      T(F(9), r.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), U(0.5, 0.5, 0.5, 0.3),);
      T(N(I(t(F(), r.translate(-93, -5.8, -40).scale(9, 1, 5), U(0.8, 0.8, 0.8, 0.1),), t(F(9), r.translate(-98, -5.8, -40).scale(3, 8, 3), U(0.7, 0.7, 0.7, 0.2),),),),);
      ub(r.translate(-98, -4.4, -40).rotate(0, 90));
      vb(r.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
      T(N(I(qb(t(F(6, 0, 0, 0.6), r.translate(-100, 0.7, 105.5).scale(8, 1, 11), U(0.7, 0.7, 0.7, 0.2),), t(F(), r.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), U(0.7, 0.7, 0.7, 0.2),),), t(F(5), r.translate(-100, 0.7, 113).scale(4, 3, 4), U(0.7, 0.7, 0.7, 0.2),),),),);
      Na(4, f => R(m => {
        m.h = () => {
          const l = Ua(h[8].i, h[12].i);
          return r.translate((2 < f ? 2 * (1 - l) + l : 0) - 100, l * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + (0.05 > l ? 0.05 : l) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        T(F(6), r.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), U(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      R(f => {
        f.h = () => {
          const m = Ua(h[8].i, h[12].i);
          return r.translate(2.5 * (1 - m) - 139.7, -3 * (1 - h[8].g) + m * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * m + 3), 0);
        };
        T(N(I(t(F(10), r.scale(6, 2, 6), U(0.1, 0.6, 0.5, 0.3)), t(F(10), r.scale(3.3, 6, 3.3), U(0.1, 0.6, 0.5, 0.5)),),),);
        T(F(15, 1), r.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), U(0.4, 0.4, 0.4, 0.3),);
        T(F(10), r.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), U(0.3, 0.8, 0.7, 0.3),);
        T(F(5), r.translate(-7.5).rotate(0, 90).scale(1, 3), U(0.5, 0.5, 0.5, 0.5),);
        ub(r.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(m => T(q, r.rotate(90 * -m, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), U(1, 1, 0.8, 0.2),));
        vb(r.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      });
      [-1, 1].map(f => {
        T(F(12, 1), r.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), U(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5].map(m => T(F(15, 1), r.translate(-7.5 * f - 100, m + 0.7, 96).scale(1.1, 0.5, 1.1), U(0.5, 0.24, 0.2, 0.4),));
        T(q, r.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), U(1, 1, 0.8),);
        T(N(I(t(F(), r.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), U(0.5, 0.5, 0.5, 0.4),), t(F(), r.scale(3, 3, 10), U(0.6, 0.24, 0.2, 0.5)), t(F(28, 1), r.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), U(0.6, 0.24, 0.2, 0.5),), t(F(5), r.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), U(0.6, 0.24, 0.2, 0.5),), t(F(5), r.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), U(0.6, 0.24, 0.2, 0.5),),),), r.translate(f - 100, 0.7, 97),);
      });
      R(f => {
        f.h = () => r.translate(-100, 0.6 - 6 * h[12].g, 96.5).scale(0.88, 1.2);
        T(z);
      });
      T(N(I(t(F(), r.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), U(0.7, 0.7, 0.7, 0.1),), t(F(45, 1), r.translate(-81, 0.7, 106).scale3d(7.7), U(0.7, 0.7, 0.7, 0.1),),),),);
      R(f => {
        f.h = () => r.translate(-81, 0.6, 106).rotate(0, 40 + ha);
        T(N(I(t(F(45, 1), r.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2),), t(F(), r.translate(0, 0, -5.5).scale(1.5, 3, 2.7), U(0.45, 0.45, 0.45, 0.2),),),),);
        T(F(8), r.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), U(0.7, 0.7, 0.7, 0.1),);
        T(F(5), r.translate(0, 2).scale(1, 2), U(0.3, 0.3, 0.3, 0.2));
        vb(r.translate(0, 3), ...db(10).map(({x:m, z:l}) => [5.6 * m, 5.6 * l, 2.5]),);
      });
      R(f => {
        f.h = () => r.translate(-65.8, 0.8, 106).rotate(0, ja);
        [-1, 1].map(m => T(q, r.rotate(0, 90).translate(-5 * m, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * m + 90), U(1, 1, 0.8),));
        T(N(I(t(F(28, 1), r.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), t(F(), r.scale(9, 5, 2), U(0.3, 0, 0, 0.3)),),),);
        T(t(F(28, 1), r.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        T(t(F(5), r.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      R(f => {
        f.h = () => r.translate(-50.7, 0.8, 106).rotate(0, 180 - ja);
        T(N(I(t(F(28, 1), r.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), t(F(), r.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), t(F(), r.translate(0, 0, 7).scale(2, 5, 9), U(0.3, 0, 0, 0.3),),),),);
        T(t(F(28, 1), r.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        T(t(F(5), r.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      R(f => {
        f.h = () => r.translate(-50.7, 0.8, 91).rotate(0, 270 + ja);
        T(N(I(t(F(28, 1), r.translate(0, 2).scale(7.5, 1, 7.5), U(0.35, 0, 0, 0.3),), t(F(), r.translate(7).scale(9, 5, 2), U(0.3, 0, 0, 0.3)), t(F(), r.translate(0, 0, -7).scale(2, 5, 9), U(0.3, 0, 0, 0.3),),),),);
        T(t(F(28, 1), r.scale(7.5, 1, 7.5), U(0.45, 0.45, 0.45, 0.2)),);
        T(t(F(5), r.translate(0, 1).scale(1, 0.2), U(0.3, 0.3, 0.3, 0.2),),);
      });
      T(F(), r.translate(-58, 1, 106).scale(2, 0.65, 2), U(0.7, 0.7, 0.7, 0.2));
      T(F(), r.translate(-50.7, 1, 99).scale(2, 0.65, 1), U(0.7, 0.7, 0.7, 0.2));
      T(F(), r.translate(-42, 0.4, 91).scale(5, 1, 2.5), U(0.7, 0.7, 0.7, 0.3));
      T(F(), r.translate(-34.2, 0.4, 91).scale(3, 1, 3), U(0.7, 0.7, 0.7, 0.3));
      ub(r.translate(-34, 2.7, 96).rotate(-12, 0));
      T(F(5), r.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), U(0.2, 0.5, 0.5, 0.6),);
      [U(0.1, 0.55, 0.45, 0.2), U(0.2, 0.5, 0.5, 0.3), U(0.3, 0.45, 0.55, 0.4)].map((f, m,) => R(l => {
        l.h = () => r.translate(0, (1 - h[13].i) * (1 - h[14].i) * (m ? 0 : 3) + Ua(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * m) * 4,);
        T(F(), r.translate(-23.5, 0.5, 91 + 6.8 * m).scale(1 === m ? 2 : 3.3, 1, 3.3), f,);
        2 === m && T(F(), r.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), U(0.7, 0.7, 0.7, 0.3),);
        1 === m && T(F(), r.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), U(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1].map(f => T(q, r.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), U(1, 1, 0.8),));
      [8, -6.1].map((f, m) => Na(3, l => T(A, r.translate(6 * l - 6, f - (1 & l), 111 - 0.2 * (1 & l) - m), 1 & l ? U(0.5, 0.5, 0.5, 0.3) : U(0.35, 0.35, 0.35, 0.5),),));
      T(N(I(t(F(6, 0, 0, 0.3), r.translate(0, -0.92, 95).scale(14, 2, 14), U(0.8, 0.8, 0.8, 0.2),), t(F(5), r.translate(0, 0, 95).scale3d(6), U(0.3, 0.3, 0.3, 0.5),),),),);
      ub(r.translate(0, 1.7, 82).rotate(0, 180));
      T(F(5), r.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), U(0.5, 0.3, 0.3, 0.4),);
      T(F(6), r.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), U(0.5, 0.6, 0.7, 0.3),);
      T(F(), r.translate(0, 16, 129).scale(1.5, 1, 2), U(0.5, 0.6, 0.7, 0.3));
      T(F(7), r.translate(0, 16.2, 133).scale(5, 1, 5), U(0.4, 0.5, 0.6, 0.4));
      T(N(I(qb(t(F(), r.translate(0, 16, 110.5).scale(12, 1, 3), U(0.5, 0.3, 0.3, 0.4),), t(F(), r.translate(0, 16, 111).scale(3, 1, 3.8), U(0.5, 0.3, 0.3, 0.4),),), t(F(5), r.translate(0, 16, 103.5).scale(5.5, 5, 5.5), U(0.5, 0.3, 0.3, 0.4),),),),);
      R(f => {
        f.h = () => {
          const m = Math.sin(a);
          return r.translate(-2 * m).rotate(25 * m);
        };
        T(F(3), r.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), U(0.5, 0.3, 0.3, 0.4),);
        [22, 30].map(m => {
          T(F(6), r.translate(0, 16, m + 95).scale(3, 1, 2.3).rotate(0, 90), U(0.7, 0.7, 0.7, 0.4),);
          T(F(), r.translate(0, 6.2, m + 95).scale(0.5, 11, 0.5), U(0.5, 0.3, 0.3, 0.4),);
        });
      });
      R(f => {
        f.h = () => {
          const m = Ua(Ua((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return r.translate(0, 16 * m, 8.5 * Sa(2 * m - 1) + 95);
        };
        T(F(5), r.scale(5, 1.1, 5), U(0.5, 0.3, 0.3, 0.4));
        T(F(5), r.scale(5.5, 0.9, 5.5), U(0.25, 0.25, 0.25, 0.4));
        ub(r.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(r.translate(0, 3, 95), ...db(9).map(({x:f, z:m}) => [9 * f, 9 * m, 4]),);
      vb(r.translate(0, 19, 134), [0, 0, 3.5]);
    });
    R(() => {
      [0, 180].map(C => T(q, r.rotate(0, C).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), U(1, 1, 0.8),));
      T(hb(20), r.translate(0, 1).scale(0.5, 0.5, 0.5), U(1, 0.3, 0.4));
      const u = t(N(I(F(15, 1), t(F(), r.translate(0, 0, 1).scale(2, 2, 0.5)),),), r.rotate(-90, 0).scale(0.1, 0.05, 0.1), U(0.3, 0.3, 0.3),);
      [-1, 1].map(C => T(u, r.translate(0.2 * C, 1.2, 0.4).rotate(0, 20 * C, 20 * C)));
      T(F(), r.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), U(0.3, 0.3, 0.3));
      T(hb(20), r.scale(0.7, 0.8, 0.55), U(1, 0.3, 0.4));
    });
    [-1, 1].map(u => R(() => {
      T(F(10, 1), r.translate(0.3 * u, -0.8).scale(0.2, 0.7, 0.24), U(1, 0.3, 0.4));
    }));
    R(() => {
      T(F(6, 1), r.scale(0.13, 1.4, 0.13), U(0.3, 0.3, 0.5, 0.1));
      T(F(8, 1), r.translate(0, 1).scale(0.21, 0.3, 0.21), U(1, 0.5, 0.2));
      T(F(3), r.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), U(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    R(() => {
      T(F(6).slice(0, -1), r.scale(0.77, 1, 0.77), U(1, 0.3, 0.5));
    }, 0);
    R(() => {
      T(hb(30, 24, (u, C, D) => {
        const B = C / 24, f = u * Math.PI * 2 / 30, m = B ** 0.6 * Math.PI / 2;
        u = B * B * Math.sin(u * Math.PI * 14 / 30) / 4;
        return 23 === C ? {x:D.D = 0, y:-0.5, z:0,} : {x:Math.cos(f) * Math.sin(m), y:Math.cos(B * Math.PI) - B - u, z:Math.sin(f) * Math.sin(m) + Math.sin(u * Math.PI * 2) / 4,};
      }), r.scale3d(0.7), U(1, 1, 1),);
      [-1, 1].map(u => T(hb(12), r.translate(0.16 * u, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls: <b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n');

