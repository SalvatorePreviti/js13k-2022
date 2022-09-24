let ca = 0, ea = 0, a = 0, fa = 0, ha = 0, ia = 0, ja = 0, la = 0, ma = 0, na = 0, ra = 0, sa = 0, d = 0.066, ta = 1, ua, va, wa, xa, za;
const Aa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], e = [], h = [], Da = [], Ea = [], Fa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "),
], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "),], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
],], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",],], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],],], Ga = {x:0, y:0, z:0,}, n = {x:0, y:0, z:0,};
var Ha = 0, Ia = 0;
const Ja = Math.PI / 180, q = new DOMMatrix(), Ka = new Float32Array(16), La = new Float32Array(624), u = (c, b) => Array.from(Array(c), (g, m) => b(m)), Ma = (c, b) => b < c ? c : b, J = (c, b = 0, g = 1) => c < b ? b : g < c ? g : c, Na = (c, b) => b < Math.abs(c) ? c : 0, Oa = (c, b, g) => c + (b - c) * J(g), Pa = (c, b) => (c = J(c), c + (1 - c - c) * J(b)), Qa = c => Math.atan2(Math.sin(c *= Ja), Math.cos(c)) / Ja, Ra = (c, b, g) => c + (2 * (b = (b - c) % 360) % 360 - b) * J(g), Sa = ({x:c, 
y:b, z:g}) => Math.hypot(c - Ga.x, b - Ga.y, g - Ga.z), Ta = ({x:c, y:b, z:g}, m) => c * m.x + b * m.y + g * m.z, Ua = c => {
  let b = 0, g = 0, m = 0, l, k = c.at(-1);
  for (l of c) {
    b += (k.y - l.y) * (k.z + l.z), g += (k.z - l.z) * (k.x + l.x), m += (k.x - l.x) * (k.y + l.y), k = l;
  }
  return l = Math.hypot(b, g, m), b /= l, g /= l, m /= l, {x:b, y:g, z:m, w:b * k.x + g * k.y + m * k.z,};
}, Va = (c, b = Ka, g = 0,) => (g *= 16, b[g++] = c.m11, b[g++] = c.m12, b[g++] = c.m13, b[g++] = c.m14, b[g++] = c.m21, b[g++] = c.m22, b[g++] = c.m23, b[g++] = c.m24, b[g++] = c.m31, b[g++] = c.m32, b[g++] = c.m33, b[g++] = c.m34, b[g++] = c.m41, b[g++] = c.m42, b[g++] = c.m43, b[g] = c.m44, b), Wa = (c, b, g, m) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (m + g) / (g - m), -1, 0, 0, 2 * m * g / (g - m), 0,], Xa = (c, b, g) => (c.D = g, c.A = b, c), Ya = (c, b, g = c.A) => Xa(c.map(m => {
  let l, k;
  return {x:m, y:l, z:k} = m, {x:m, y:l, z:k} = b.transformPoint({x:m, y:l, z:k,}), {x:m, y:l, z:k,};
}), g, c.D,), K = (c, b, g) => c.map(m => Ya(m, b, g)), Za = (c, b = 0) => u(c, g => {
  const m = Math.cos(2 * Math.PI * g / c);
  return {x:Math.sin(2 * Math.PI * g / c), y:0, z:0.01 > Math.abs(m) ? m : 0 > m ? m - b : m + b,};
}), $a = (c, b, g) => c.map((m, l, {length:k}) => Xa([m, b[k - l - 1], b[k - (l + 1) % k - 1], c[(l + 1) % k],], c.A, g,)), N = (c, b, g = 0, m,) => (c = c ? Za(c, m) : Aa, m = Ya(c, q.translate(0, 1).scale3d(0 < g ? g : 1)), c = Ya(c, q.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...$a(c, m, b), m, c,]), ab = (c, b = c, g = (m, l) => (l *= Math.PI / b, {x:Math.cos(m *= 2 * Math.PI / c) * Math.sin(l), y:Math.cos(l), z:Math.sin(m) * Math.sin(l),})) => {
  const m = [];
  for (let l = 0; c > l; l++) {
    for (let k = 0; b > k; k++) {
      const t = Xa([], 0, 1);
      m.push(t);
      t.push(g(l, k, t));
      k && t.push(g((l + 1) % c, k, t));
      b - 1 > k && t.push(g((l + 1) % c, k + 1 % b, t));
      t.push(g(l, k + 1 % b, t));
    }
  }
  return m;
}, db = (c, b) => {
  var g, m, l, k = b.C;
  for (var t = 0; k.length > t; ++t) {
    if (-0.00008 > (g = Ta(c, k[t]) - c.w) ? l = b : 8e-5 < g && (m = b), l && m) {
      m = [];
      l = [];
      k = b.C;
      t = b.B;
      let v = k.at(-1), x = Ta(c, v) - c.w;
      for (const A of k) {
        g = Ta(c, A) - c.w, 8e-5 > x && l.push(v), -0.00008 < x && m.push(v), (8e-5 < x && -0.00008 > g || -0.00008 > x && 8e-5 < g) && (x /= g - x, v = {x:v.x + (v.x - A.x) * x, y:v.y + (v.y - A.y) * x, z:v.z + (v.z - A.z) * x,}, m.push(v), l.push(v)), v = A, x = g;
      }
      return {o:2 < m.length && {C:Xa(m, k.A, k.D), B:t, s:b,}, m:2 < l.length && {C:Xa(l, k.A, k.D), B:t, s:b,},};
    }
  }
  return {o:m, m:l,};
}, eb = (c, b, g = Ua(b.C)) => {
  let m, l, k;
  return c ? ({o:m, m:l} = db(c, b), m || l || c.u.push(b), m && (c.o = eb(c.o, m, g)), l && (c.m = eb(c.m, l, g))) : ({x:m, y:l, z:g, w:k} = g, c = {x:m, y:l, z:g, w:k, u:[b,], o:0, m:0,}), c;
}, fb = (c, b, g) => {
  const m = [], l = (k, t) => {
    let {o:v, m:x} = db(k, t);
    v || x || (0 < g * Ta(k, b) ? v = t : x = t);
    v && (k.o ? l(k.o, v) : m.push(v));
    x && k.m && l(k.m, x);
  };
  for (const k of b.u) {
    l(c, k);
  }
  return m;
}, gb = (c, b) => c && (b(c), gb(c.o, b), gb(c.m, b)), jb = c => c.length ? c.reduce((b, g) => eb(b, {C:g, B:0, s:0,}), 0) : c, kb = c => (gb(c, b => {
  const g = b.m;
  b.m = b.o;
  b.o = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const m of b.u) {
    m.B = !m.B;
  }
}), c), lb = (...c) => c.reduce((b, g) => {
  const m = [];
  if (b = jb(b), g) {
    g = jb(g);
    gb(b, l => l.u = fb(g, l, 1));
    gb(g, l => m.push([l, fb(b, l, -1),]));
    for (let [l, k] of m) {
      for (const t of k) {
        eb(b, t, l);
      }
    }
  }
  return b;
}), O = (...c) => {
  let b;
  const g = new Map(), m = new Map(), l = k => {
    let t;
    return k.s && ((t = g.get(k.s)) ? (m.delete(t), k = l(k.s)) : g.set(k.s, k)), k;
  };
  return [c, ...b] = [...c,], c = kb(lb(kb(jb(c)), ...b)), gb(c, k => {
    for (const t of k.u) {
      m.set(l(t), t.B);
    }
  }), Array.from(m, ([{C:k}, t]) => {
    const v = k.map(({x, y:A, z:B}) => ({x, y:A, z:B,}));
    return Xa(t ? v.reverse() : v, k.A, k.D);
  });
}, S = (c, b, g) => c + (b - c) * J(1 - Math.exp(-g * d)), mb = () => {
  const c = Pa(h[12].g, h[13].g);
  ja = Oa(S(ja, 0, 1), Qa(ja + 60 * d), h[5].g - h[6].i,);
  ha = Oa(S(ha, 0, 5), Qa(ha + 56 * d), c,);
  ia = Oa(S(ia, 0, 4), Qa(ia + 48 * d), c,);
  na = S(na, h[9].i, 0.2 + 0.3 * Math.abs(2 * h[9].i - 1),);
  ma = S(ma, la ? S(ma, -9, 1.5) : J(a / 3), 1);
  ta && a > ta && (ta = 0, h4.innerHTML = "");
  h[0].j && 0.8 < h[0].g && (13 > ca ? (1 / 0 > ta && (ta = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), h[0].j = 0) : la || (1 / 0 > ta && (ta = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), la = 1));
  for (const b of e) {
    b.h && (b.l = b.h());
  }
  for (const b of h) {
    b.h();
  }
  for (const b of Da) {
    b.h();
  }
}, nb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ca = Da.reduce((c, {j:b}) => c + b, 0)] + " / XIII";
}, ob = () => {
  localStorage.I = JSON.stringify([h.map(({j:c}) => c), Da.map(({j:c}) => c), fa, a, na,]);
}, T = (c, b = 1) => {
  const g = wa;
  b = {l:q, F:e.length, H:b, u:[],};
  return e.push(wa = b), c(b), wa = g, b;
}, V = (c, b = q, g) => wa.u.push(...K(c, b, g)), pb = c => {
  const b = wa, g = h.length, m = {j:0, g:0, i:0, s:b, h() {
    const l = m.j, k = m.g, t = m.i, v = b.l.multiply(c);
    m.J = v;
    3 > Sa(v.transformPoint()) && Ea[5] && (0.3 > k || 0.7 < k) && (m.j = l ? 0 : 1, g && 1 / 0 > ta && (ta = a + 1, h4.innerHTML = "* click *"), fa = g, ob());
    m.g = S(k, l, 4);
    m.i = S(t, l, 1);
    m.l = v.rotate(60 * m.g - 30, 0).translateSelf(0, 1);
  },};
  h.push(m);
  V(N(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Y(0.4, 0.5, 0.5));
  V(N(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Y(0.4, 0.5, 0.5));
  V(N(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), Y(0.5, 0.5, 0.4));
}, qb = (c, ...b) => {
  let g = -1, m = 0, l = 0, k = 0, t = 0, v = 0, x = 1, A = 3;
  const B = {j:0, h() {
    if (!B.j) {
      let oa = 1, P = 1 / 0, E, C, z, D, R, M, aa;
      for (const W of f) {
        var {x:L, z:H, w:Q} = W;
        H = (L = Math.hypot(r - L, w - H)) - Q;
        aa ||= L < Q;
        0 < H && P > H && (P = H, p = W);
        var X = L / Q;
        oa = oa < X ? oa : X;
      }
      aa || ({x:E, z:C, w:z} = p, D = r - E, R = w - C, M = Math.hypot(D, R), ba = Math.atan2(-R, D), x && (l = (Math.random() - 0.5) * Math.PI / 2, A = J(A / (1 + Math.random()))), ba += l, g = -Math.cos(ba), m = Math.sin(ba), 0.1 < M && (M = (M < z ? M : z) / (M || 1), r = D * M + E, w = R * M + C));
      x = aa;
      A = S(A, 6 * (1 - oa) + 3, oa + 3);
      y = S(y, r = S(r, r + g, A), A);
      G = S(G, w = S(w, w + m, A), A);
      k = Ra(k, Math.atan2(y - t, G - v) / Ja - 180, 3 * d,);
      t = y;
      v = G;
      var ba = (B.l = F.l.multiply(c.translate(y, 0, G).rotateSelf(0, k, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.55 > Sa(ba) && (B.j = 1, X = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ca] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      ta && (ta = a + (ca && 12 > ca ? 5 : 7), h4.innerHTML = X), nb(), ob());
    }
    B.j && (B.l = e[2].l.translate(I % 4 * 1.2 - 1.7 + Math.sin(a + I) / 7, -2, 1.7 * (I / 4 | 0) - 5.5 + Math.abs(I % 4 - 2) + Math.cos(a / 1.5 + I) / 6,));
  },}, F = wa, I = Da.length, f = b.map(([L, H, Q]) => ({x:L, z:H, w:Q,}));
  let p = f[0], {x:r, z:w} = p, y = r, G = w;
  Da.push(B);
}, rb = (c, b, g, m) => {
  let l = 0, k = 0, t = 0, v = 1 / 0, x = -1 / 0, A = 1 / 0, B = -1 / 0, F = 1 / 0, I = -1 / 0;
  const f = 1.1 * (g - b), p = (new DOMMatrix(Wa(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, g))).multiplySelf(c).invertSelf();
  return b = u(8, r => (r = p.transformPoint({x:4 & r ? 1 : -1, y:2 & r ? 1 : -1, z:1 & r ? 1 : -1,}), l -= r.x = (f * r.x | 0) / f / r.w, k -= r.y = (f * r.y | 0) / f / r.w, t -= r.z = (f * r.z | 0) / f / r.w, r)), g = q.rotate(298, 139).translateSelf(l / 8, k / 8, t / 8), Ya(b, g).map(({x:r, y:w, z:y}) => {
    v = v < r ? v : r;
    x = r < x ? x : r;
    A = A < w ? A : w;
    B = w < B ? B : w;
    F = F < y ? F : y;
    I = y < I ? I : y;
  }), F *= 0 > F ? m : 1 / m, I *= 0 < I ? m : 1 / m, q.scale(2 / (x - v), 2 / (B - A), 2 / (F - I)).translateSelf((x + v) / -2, (B + A) / -2, (F + I) / 2,).multiplySelf(g);
}, ub = () => {
  let c = !0, b, g, m, l, k, t, v, x, A, B, F, I;
  const f = () => {
    ua || !c ? sb.disconnect() : sb.connect(tb.destination);
    b4.innerHTML = "Music: " + c;
  }, p = (r = !1) => {
    if (ua !== r) {
      ua = r;
      try {
        r ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : sb.start();
      } catch {
      }
      xa = 0;
      document.body.className = r ? "l m" : "l";
      f();
      nb();
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
    xa = 1;
  };
  b4.onclick = () => {
    c = !c;
    f();
  };
  b5.onclick = () => p(!0);
  onclick = r => {
    I = 1;
    ua || (r.target === hC && (Ea[5] = !0), xa && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:r, target:w, type:y, repeat:G}) => {
    G || ((G = !!y[5] && w === document.body) && ("Escape" === r || "Enter" === r && ua) ? ua && !I || p(!ua) : 5 === (y = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[r]) ? G && (Ea[y] = 1) : Ea[y] = G);
  };
  onmousemove = ({movementX:r, movementY:w}) => {
    xa && (r || w) && (Ia += 0.1 * r, Ha += 0.1 * w);
  };
  hC.ontouchstart = r => {
    if (!ua) {
      for (let {pageX:w, pageY:y, identifier:G} of r.changedTouches) {
        xa && w > hC.clientWidth / 2 ? void 0 === x && (A = 0, t = w, v = y, x = G, B = Ia, F = Ha) : void 0 === l && (k = 0, g = w, m = y, l = G);
      }
      b = ea;
    }
  };
  hC.ontouchmove = r => {
    if (!ua) {
      for (let {pageX:Q, pageY:X, identifier:ba} of r.changedTouches) {
        var w, y, G, L, H;
        x === ba && (Ia = B + (Q - t) / 2.3, Ha = F + (X - v) / 2.3, A = 1);
        l === ba && (ba = (g - Q) / 20, w = (m - X) / 20, y = Math.abs(ba), G = Math.abs(w), L = Math.atan2(w, ba), H = J(Math.hypot(w, ba) - 0.5), ra = 0.2 < y ? Math.cos(L) * H : 0, sa = 0.2 < G ? Math.sin(L) * H : 0, (ra || sa) && (k = 1), 2 < y && (g = Q + 20 * Math.sign(ba)), 2 < G && (m = X + 20 * Math.sign(w)));
      }
    }
  };
  hC.ontouchend = r => {
    let w;
    r.preventDefault();
    for (const y of r.changedTouches) {
      y.identifier === x ? (x = void 0, A || (w = 1), A = 0) : y.identifier === l ? (l = void 0, sa = ra = 0, k || (w = 1), k = 0) : w = 1;
    }
    w && r.target === hC && b && 0.02 < (r = ea - b) && 0.7 > r && (Ea[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Ea.length = ra = sa = 0;
    l = x = void 0;
    document.hidden && p(!0);
  })();
  p(!0);
}, vb = () => {
  let c = 0, b = 0, g = 2, m, l, k, t, v, x, A, B, F, I, f, p, r, w, y, G;
  const L = {x:0, y:0, z:0,}, H = new Int32Array(256), Q = new Uint8Array(65536), X = () => {
    for (let P = 32; 128 > P; P += 2) {
      let E = 0, C = 0, z = 0, D = 0;
      const R = 512 * P;
      for (let M = 1 & P; 128 > M; M += 2) {
        const aa = R + 4 * M;
        let W = R + 4 * (127 - M);
        const da = Q[aa] / 255, ka = Q[1 + W] / 255, pa = 1 - Math.abs(M / 63.5 - 1);
        10 < M && 118 > M && (E = Ma(Ma(da * pa, da * Q[W] / 255), E), C = Ma(Ma(ka * pa, ka * Q[1 + aa] / 255), C));
        (54 > M || 74 < M) && 1e-3 < (W = (1 - pa) * (ka < da ? da : ka) / 3) && (64 > M && W > z ? z = W : 64 < M && W > D && (D = W));
      }
      Math.abs(D - z) > Math.abs(p) && (p = D - z);
      Math.abs(C - E) > Math.abs(r) && (r = C - E);
    }
  }, ba = () => {
    let P = 0, E = 0, C = 0, z = 0;
    H.fill(0);
    for (let R = 0; 31 > R; ++R) {
      let M = 0;
      const aa = 512 * R;
      for (let W = 0; 128 > W; W++) {
        var D = aa + 4 * W;
        let da = (Q[D] + Q[1 + D]) / 255;
        D = Q[2 + D];
        14 < W && 114 > W && (M += da);
        D && da && (da = H[D] + 1, H[D] = da, P > da || (P = da, E = D));
      }
      3 > M && 5 < R && (z += R / 32);
      3 < M && (7 < R && (C += R / 15), v = 1);
    }
    E && (v = 1);
    A = S(A, v ? 6.5 : 8, 4);
    L.y += C / 41 - (v || A) * z / 41 * A * d;
    g ? E && (g = 0, l = E) : l = E || k;
    k = E;
  }, oa = () => {
    var P = 1 === e[l].H && e[l].l || q, {x:E, y:C, z} = (g ? ({x:C, y:E, z} = h[fa].J.transformPoint({x:0, y:fa || 0.9 < ma ? 12 : 1, z:-2.5,}), void 0 === w && (n.x = w = C, n.y = (y = f = E) + 13, n.z = (G = z) + -18), 1 < g && (g = 1, f = Ga.y = E), Ga.x = C, Ga.z = z) : ({x:C, z} = ((E = P.inverse()).m41 = 0, E.m42 = 0, E.m43 = 0, E.transformPoint({x:p, z:r, w:0,})), L.x += C, L.z += z), l !== t && (t = l, {x:E, y:C, z} = P.inverse().transformPoint(Ga), L.x = E, L.y = C, L.z = z), P.transformPoint(L));
    P = E - Ga.x;
    let D = z - Ga.z;
    Ga.x = E;
    Ga.y = C;
    Ga.z = z;
    l && (F = P / d, I = D / d);
    1 === l && (h[9].j = -15 > E && 0 > z ? 1 : 0);
    C < (-25 > E || 109 > z ? -25 : -9) && (F = I = A = B = 0, k = l = h[fa].s.F, g = 2);
    f = Oa(S(f, C, 2), C, 8 * Math.abs(f - C));
    w = S(w, E, J(Math.abs(w - E) - 1.5, 0.4, 4));
    y = S(y, C, J(Math.abs(y - C) - 2.2, 0.4, 4));
    G = S(G, z, J(Math.abs(G - z) - 1.5, 0.4, 4));
    xa ? (n.x = S(n.x, E, 666 * g + 18), n.y = S(n.y, f + 1.5, 666 * g + 18), n.z = S(n.z, z, 666 * g + 18)) : (n.x = S(n.x, w, 2), n.y = S(n.y, Ma(y + 13 + J((-60 - z) / 8, 0, 20), 6), 2,), n.z = S(n.z, G + -18, 2), P = n.x - w, D = n.z - G, (C = Na(Math.hypot(D, P), 0.1)) && (Ha = 90 - Math.atan2(C, n.y - y) / Ja, Ia = 270 + Math.atan2(D, P) / Ja));
    Ha = J(Ha, -87, 87);
    Ia = Qa(Ia);
    const R = e[37].l = q.translate(E, f, z).rotateSelf(0, b = Ra(b, c, 8 * d),);
    [38, 39,].map((M, aa) => {
      e[M].l = R.translate(0, x * J(0.45 * Math.sin(9.1 * a + Math.PI * (aa - 1) - Math.PI / 2)),).rotateSelf(x * Math.sin(9.1 * a + Math.PI * (aa - 1)) * 0.25 / Ja, 0);
    });
  };
  za = () => {
    let P = ra + (Ea[0] ? 1 : 0) - (Ea[2] ? 1 : 0), E = sa + (Ea[1] ? 1 : 0) - (Ea[3] ? 1 : 0), C = navigator.getGamepads()[0];
    if (C) {
      var z = M => D[M]?.pressed || 0 < D[M]?.value ? 1 : 0;
      const D = C.buttons, R = C.axes;
      C = z(3) || z(2) || z(1) || z(0);
      P += z(14) - z(15) - Na(R[0], 0.2);
      E += z(12) - z(13) - Na(R[1], 0.2);
      xa && (Ha += 80 * Na(R[3], 0.3) * d, Ia += 80 * Na(R[2], 0.3) * d);
      C && !m && (Ea[5] = 1);
      m = C;
    }
    z = Math.atan2(E, P);
    C = Na(J(Math.hypot(E, P)), 0.05);
    P = C * Math.cos(z);
    E = C * Math.sin(z);
    x = S(x, C, 10);
    C && (c = 90 - z / Ja);
    v = r = p = 0;
    Z.fa7();
    Z.r9r(0, 0, 128, 128, 6408, 5121, Q);
    Z.iay(36008, [36064, 36096,]);
    Z.iay(36009, [36064, 36096,]);
    NO_INLINE(X)();
    NO_INLINE(ba)();
    F = S(F, 0, v ? 8 : 4);
    I = S(I, 0, v ? 8 : 4);
    z = J(1 - 5 * Ma(Math.abs(p), Math.abs(r)));
    l || (p += F * z * d, r += I * z * d);
    B = S(B, v ? (C ? v ? 7 : 4 : 0) * z : 0, v ? 0.1 < z ? 10 : C ? 5 : 7 : 1,);
    z = xa ? Ia * Ja : Math.PI;
    C = Math.sin(z) * B * d;
    z = Math.cos(z) * B * d;
    p -= P * z - E * C;
    r -= P * C + E * z;
    NO_INLINE(oa)();
  };
  x = F = I = A = B = 0;
  k = l = h[fa].s.F;
}, wb = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b), Cb = (c, b) => {
  const g = {}, m = Z.c1h();
  return Z.abz(m, c), Z.abz(m, wb(b, 35632)), Z.l8l(m), l => l ? g[l] || (g[l] = Z.gan(m, l)) : Z.u7y(m);
}, Db = (c, b, g, m) => {
  if (ua) {
    g = q.rotate(0, 40 * Math.sin(ea) - 70);
    for (var l of [37, 38, 39,]) {
      Va(g, La, l - 1);
    }
    Z.uae(c, !1, La);
    Z.d97(4, e[39].G - e[37].v, 5123, 2 * e[37].v,);
  } else {
    for (l = 0; e.length > l; ++l) {
      e[l].H && Va(e[l].l, La, l - 1);
    }
    Z.uae(c, !1, La);
    Z.d97(4, (b ? e[39].G : e[37].v) - 3, 5123, 6,);
    for (b = 0; 13 > b; ++b) {
      Va(Da[b].l, La, b);
    }
    for (b = 0; h.length > b; ++b) {
      Va(h[b].l, La, b + 13), m || (La[16 * (b + 13) + 15] = 1 - h[b].g);
    }
    Z.uae(c, !1, La);
    Z.das(4, e[g].G - e[g].v, 5123, 2 * e[g].v, 13,);
    Z.das(4, e[40].G - e[40].v, 5123, 2 * e[40].v, h.length,);
  }
}, Eb = c => {
  h4.innerHTML += ".";
  setTimeout(c);
}, Fb = c => Math.sin(c * Math.PI * 2), Gb = c => 0.5 > c % 1 ? 1 : -1, Hb = c => c % 1 * 2 - 1, Ib = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c, Pb = c => {
  let b = 0;
  const g = () => {
    const k = tb.createBuffer(2, 5362944, 44100);
    for (let t = 0; 2 > t; t++) {
      for (let v = t, x = k.getChannelData(t); 10725888 > v; v += 2) {
        x[v >> 1] = l[v] / 65536;
      }
    }
    sb.buffer = k;
    sb.loop = !0;
    Eb(c);
  }, m = () => {
    let k = 0, t, [v, x, A, B, F, I, f, p, r, w, y, G, L, H, Q, X, ba, oa, P, E, C] = Fa[b];
    w = w * w * 4;
    for (const aa of [5513, 4562, 3891,]) {
      let W = 0, da = 0, ka, pa, xb;
      const yb = [], ya = new Int32Array(768 * aa), Jb = 2 ** (G - 9) / aa, Kb = Math.PI * 2 ** (ba - 8) / aa, hb = P * aa & -2;
      for (let bb = 0; 11 >= bb; ++bb) {
        for (let cb = 0, zb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + bb]; 32 > cb; ++cb) {
          const Ab = (32 * bb + cb) * aa;
          for (var z = 0; 4 > z; ++z) {
            if (ka = 0, zb && (ka = C[zb - 1].charCodeAt(cb + 32 * z) - 40, ka += 0 < ka ? 106 : 0), ka) {
              var D;
              if (!(D = yb[ka])) {
                D = ka;
                let U = void 0, qa = void 0;
                var R = aa, M = ka;
                let Lb = 0, Mb = 0;
                const Nb = 2 > b ? Hb : Fb, Ob = 2 > b ? 1 > b ? Gb : Ib : Fb, Bb = new Int32Array(p + r + w);
                for (let Ba = 0, ib = 0; p + r + w > Ba; ++Ba, ++ib) {
                  let Ca = 1;
                  p > Ba ? Ca = Ba / p : p + r > Ba || (Ca = (1 - (Ca = (Ba - p - r) / w)) * 3 ** (-y / 16 * Ca));
                  0 > ib || (ib -= 4 * R, qa = 396e-5 * 2 ** ((M + x - 256) / 12), U = 396e-5 * 2 ** ((M + F - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                  Bb[Ba] = 80 * (Nb(Lb += qa * Ca ** (A / 32)) * v + Ob(Mb += U * Ca ** (I / 32)) * B + (f ? (2 * Math.random() - 1) * f : 0)) * Ca | 0;
                }
                D = yb[D] = Bb;
              }
              for (let U = 0, qa = 2 * Ab; D.length > U; ++U, qa += 2) {
                ya[qa] += D[U];
              }
            }
          }
          for (let U, qa = 0; aa > qa; ++qa) {
            z = 0, D = 2 * (Ab + qa), ((U = ya[D]) || xb) && (pa = 308e-5 * L, 1 !== b && 4 !== b || (pa *= Math.sin(Jb * D * Math.PI * 2) * E / 512 + 0.5), pa = 1.5 * Math.sin(pa), W += pa * da, t = (1 - H / 255) * (U - da) - W, da += pa * t, U = 4 === b ? da : 3 === b ? t : W, b || (U = 1 > (U *= 22e-5) ? -1 < U ? Math.sin(U / 4 * Math.PI * 2) : -1 : 1, U /= 22e-5), U *= Q / 32, xb = 1e-5 < U * U, t = Math.sin(Kb * D) * X / 512 + 0.5, z = U * (1 - t), U *= t), D < hb || (z += ya[1 + D - hb] * oa / 
            255, U += ya[D - hb] * oa / 255), l[k + D] += ya[D] = z, ++D, l[k + D] += ya[D] = U;
          }
        }
      }
      k += ya.length;
    }
    Eb(5 > ++b ? m : g);
  }, l = new Int32Array(10725888);
  Eb(m);
}, Qb = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Y = NO_INLINE((c, b, g, m = 0) => 255 * m << 24 | 255 * g << 16 | 255 * b << 8 | 255 * c), tb = new AudioContext(), sb = tb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const c in Z) {
  Z[c[0] + [...c,].reduce((b, g, m) => (b * m + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
Eb(() => {
  let c = 0;
  const b = () => {
    if (2 == ++c) {
      const m = p => {
        let r, w;
        Z.f1s();
        requestAnimationFrame(m);
        H = (p - (va || p)) / 1e3;
        ua ? (d = 0, Ea[5] = 0) : d = 0.066 < H ? 0.066 : H;
        a += d;
        ea += H;
        va = p;
        0 < d && (mb(), za(), Ea[5] = 0);
        let {x:y, y:G, z:L} = n;
        ua && (y = -4.5, G = 2, L = 3.2 - J(hC.clientWidth / 1e3));
        var H = (ua ? q.rotate(-20, -90) : q.rotate(-Ha, -Ia, -0)).invertSelf().translateSelf(-y, -G, -L,);
        0 < d && ({x:p, y:r, z:w} = Ga, x(), Z.b6o(36160, I), Z.v5y(0, 0, 128, 128), Z.c4s(16640), Z.cbf(!0, !1, !0, !1), Z.uae(x("b"), !1, Va(q.rotate(0, 180).invertSelf().translateSelf(-p, -r, 0.3 - w)),), Db(x("c"), 0, 41, 0), Z.c4s(256), Z.cbf(!1, !0, !0, !1), Z.uae(x("b"), !1, Va(q.translate(-p, -r, -w - 0.3))), Db(x("c"), 0, 41, 0), Z.f1s());
        t();
        Z.b6o(36160, F);
        Z.v5y(0, 0, 2048, 2048);
        B[0](rb(H, 0.3, 55, 10));
        B[1](rb(H, 55, 186, 11));
        A();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        B[0]();
        B[1]();
        Z.uae(A("a"), !1, Wa(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 186));
        Z.uae(A("b"), !1, Va(H));
        Z.ubu(A("k"), y, G, L);
        Db(A("c"), !xa, 42, 0);
        v();
        Z.ubu(v("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ea);
        Z.ubu(v("k"), y, G, L);
        Z.uae(v("b"), !1, Va(H.inverse()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, I);
        Z.f1s();
      }, l = g;
      let k = wb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const t = Cb(wb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){gl_Position=b*c[max(0,abs(int(f.w))-1)+gl_InstanceID]*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), v = Cb(wb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), x = Cb(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), A = Cb(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), B = u(2, p => {
        const r = new Float32Array(16), w = Z.c25();
        return Z.a4v(33984 + p), Z.b9j(3553, w), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), y => {
          y ? (Va(y, r), Z.uae(t("b"), !1, r), Z.fas(36160, 36096, 3553, w, 0), Z.c4s(256), Db(t("c"), !xa, 42, 1)) : Z.uae(A(p ? "j" : "i"), !1, r);
        };
      }), F = Z.c5w(), I = (k = Z.c3z(), Z.c5w()), f = Z.c25();
      x();
      Z.uae(x("a"), !1, Wa(1.4, 0.59, 1e-4, 1));
      A();
      Z.ubh(A("q"), 2);
      Z.ubh(A("h"), 1);
      Z.ubh(A("g"), 0);
      v();
      Z.ubh(v("q"), 2);
      Z.b6o(36160, F);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, I);
      Z.bb1(36161, k);
      Z.r4v(36161, 33189, 128, 128);
      Z.f8w(36160, 36096, 36161, k);
      Z.a4v(33986);
      Z.b9j(3553, f);
      Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Z.fas(36160, 36064, 3553, f, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, l);
      Z.gbn(3553);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 1);
      mb();
      NO_INLINE(vb)();
      NO_INLINE(ub)();
      requestAnimationFrame(m);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = Qb;
  NO_INLINE(Pb)(() => {
    Eb(() => {
      let k = 0, t;
      const v = [], x = [], A = [], B = [], F = new Int32Array(8), I = new Map(), f = w => {
        let {x:y, y:G, z:L} = t[w], H = (r[0] = y, r[1] = G, r[2] = L, w = "" + (t.D ? p : F), I.get(w));
        return void 0 !== H ? (y = 3 * H, B[y] = (B[y++] + F[5]) / 2, B[y] = (B[y++] + F[6]) / 2, B[y] = (B[y] + F[7]) / 2) : (I.set(w, H = I.size), x.push(y, G, L, r[3]), A.push(F[4]), B.push(F[5], F[6], F[7])), H;
      }, p = new Int32Array(F.buffer, 0, 5), r = new Float32Array(F.buffer);
      for (const w of e) {
        for (t of (r[3] = 40 === w.F ? -14 : w.H && w.F, w.u)) {
          const {x:y, y:G, z:L} = Ua(t);
          F[4] = 0 | t.A;
          F[5] = 32767 * y;
          F[6] = 32767 * G;
          F[7] = 32767 * L;
          for (let H = 2, Q = f(0), X = f(1); t.length > H; ++H) {
            v.push(Q, X, X = f(H));
          }
        }
        w.u = null;
        w.v = k;
        w.G = k = v.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(A), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Eb(b);
      try {
        const [w, y, G, L, H] = JSON.parse(localStorage.I,);
        h.map((Q, X) => Q.g = Q.i = Q.j = X ? 0 | w[X] : 0);
        Da.map((Q, X) => Q.j = 0 | y[X]);
        fa = G;
        a = L;
        na = H;
      } catch {
      }
      ma = J(fa);
    });
    const m = u(11, k => q.translate(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), l = u(10, k => $a(Ya(Za(18), m[k]).reverse(), Ya(Za(18), m[k + 1]), 1,)).flat();
    T(() => V([Aa.slice(1),], q.translate(-2).scale3d(3).rotate(90, 0)), 0);
    T(() => {
      const k = (f, p, r) => T(w => {
        w.h = () => q.translate(x() * Math.sin(3 * f + a * f) * p);
        Aa.map(({x:y, z:G}) => {
          V(N(11, 1), q.translate(4 * y, 4, r + 4 * G).scale(0.8, 3, 0.8), Y(0.5, 0.3, 0.7, 0.6),);
          V(N(), q.translate(4 * y, 7, r + 4 * G).scale(1, 0.3), Y(0.5, 0.5, 0.5, 0.3),);
        });
        V(O(K(N(), q.translate(0, 0, r).scale(5, 1, 5), Y(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(y => K(N(), q.translate(5 * y, 0.2, r).rotate(-30 * y).scale(4, 1, 2), Y(0.8, 0.8, 0.8, 0.3),)),),);
        V(N(), q.translate(0, -3, r).scale(8, 2, 8), Y(0.4, 0.4, 0.4, 0.3));
      }), t = (f, p, r) => q.translate(f + Math.sin(a + 2) / 5, p + Math.sin(0.8 * a) / 3, r).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), v = f => O(K(N(), q.translate(0, -f / 2).scale(6, f - 1, 2.2)), K(N(), q.translate(0, -f / 2 - 6).scale(4, f - 3, 4)), K(N(32, 1), q.translate(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), x = () => {
        var f = h[2].i, p = 1 - h[4].i;
        return f < p ? f : p;
      }, A = O(K(N(20, 1, 1.15, 1), q.translate(0, -3).scale(3.5, 1, 3.5), Y(0.7, 0.4, 0.25, 0.7),), K(N(20, 1, 1.3, 1), q.translate(0, -2.5).scale(2.6, 1, 3), Y(0.7, 0.4, 0.25, 0.2),), K(N(), q.translate(4, -1.2).scale3d(2), Y(0.7, 0.4, 0.25, 0.3)),), B = u(7, f => K(N(6, 1), q.translate(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), Y(0.3, 0.3, 0.38),)).flat(), F = (T(f => {
        f.h = () => t(-12, 4.2, 40 * ma - 66);
        V(A);
        pb(q.translate(0, -3, 4));
      }), pb(q.translate(-5.4, 1.5, -19).rotate(0, -90)), qb(q.translate(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), qb(q.translate(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...Za(18).map(({x:f, z:p}) => [7 * f, 10 * p, 4.5 - 2 * Math.abs(f),]),), V(N(), q.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Y(0.8, 0.8, 0.8, 0.2),), Aa.map(({x:f, z:p}) => V(N(6), q.translate(3 * f, 3, 15 * p).scale(0.7, 4, 0.7), Y(0.6, 0.3, 0.3, 0.4),)), [-23, 22,].map(f => V(N(), q.translate(0, 0, f).scale(3, 1, 8), 
      Y(0.9, 0.9, 0.9, 0.2))), [-15, 15,].map((f, p) => {
        V(N(), q.translate(0, 6.3, f).scale(4, 0.3, 1), Y(0.3, 0.3, 0.3, 0.4));
        V(N(), q.translate(0, 1, f).scale(3, 0.2, 0.35), Y(0.5, 0.5, 0.5, 0.3));
        T(r => {
          r.h = () => q.translate(0, 0, f).scale(1, J(1.22 - h[p + 1].g), 1);
          V(B);
        });
      }), u(5, f => u(2, p => V(l, q.translate(18.5 * (p - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2,), Y(1, 1, 0.8, 0.2),)),), V(N(), q.translate(3, 1.5, -20).scale(0.5, 2, 5), Y(0.7, 0.7, 0.7, 0.2)), V(N(), q.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Y(0.75, 0.75, 0.75, 0.2),), V(N(5), q.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Y(0.6, 0.3, 0.3, 0.4),), V(N(), q.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), Y(0.8, 
      0.2, 0.2, 0.5),), V(O(lb(K(N(6, 0, 0, 0.3), q.translate(8, -3, -4).scale(13, 1, 13), Y(0.7, 0.7, 0.7, 0.2),), K(N(6), q.translate(0, -8).scale(9, 8, 8), Y(0.4, 0.2, 0.5, 0.5),), K(N(6, 0, 0, 0.3), q.translate(0, -0.92).scale(13, 2, 13), Y(0.8, 0.8, 0.8, 0.2),),), K(N(5), q.scale(5, 30, 5), Y(0.4, 0.2, 0.6, 0.5)), K(N(5, 0, 1.5), q.translate(0, 1).scale(4.5, 0.3, 4.5), Y(0.7, 0.5, 0.9, 0.2),), K(N(), q.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2), Y(0.5, 0.5, 0.5, 0.5),), 
      K(N(6), q.translate(15, -1.5, 4).scale(3.5, 1, 3.5), Y(0.5, 0.5, 0.5, 0.5),),),), T(f => {
        f.h = () => q.translate(0, 0.01 < h[3].g ? (5 * Math.cos(1.5 * a) + 2) * h[3].i * (1 - h[2].g) + -15 * (1 - h[3].g) : -500, 0,);
        V(N(5), q.translate(0, -0.2).scale(5, 1, 5), Y(0.6, 0.65, 0.7, 0.3));
        pb(q.translate(0, 1.2));
      }), pb(q.translate(15, -2, 4)), k(0.7, 12, 35), k(1, 8.2, 55), T(f => {
        f.h = () => q.translate(x() * Math.sin(a / 1.5 + 2) * 12);
        V(O(lb(K(N(), q.scale(1.5, 1, 5), Y(0.9, 0.9, 0.9, 0.2)), K(N(6), q.scale(4, 1, 5), Y(0.9, 0.9, 0.9, 0.2)), K(N(), q.translate(0, -2).scale(2, 3.2, 1.9), Y(0.3, 0.8, 0.5, 0.5),), K(N(16, 1, 0, 4), q.scale(1, 1, 1.5).rotate(0, 90), Y(0.9, 0.9, 0.9, 0.2),),), K(N(), q.scale(1.3, 10, 1.3), Y(0.2, 0.7, 0.4, 0.6)),), q.translate(0, 0, 45),);
        qb(q.translate(0, 2.8, 45), [0, 0, 4.5,]);
      }), V(N(), q.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2),), T(f => {
        f.h = () => q.translate(9.8 * (1 - x()));
        V(N(3), q.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), Y(0.3, 0.6, 0.6, 0.2),);
        V(N(8), q.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Y(0.8, 0.8, 0.8, 0.2),);
        V(N(), q.translate(-23, -3, 55).scale(5.2, 1.7, 3), Y(0.5, 0.5, 0.5, 0.3));
        V(N(), q.translate(-23, -2.2, 62).scale(3, 1, 4), Y(0.5, 0.5, 0.5, 0.3));
        pb(q.translate(-23, -0.5, 66.5));
      }), T(f => {
        f.h = () => q.translate(0, J(1 - 5 * x()) * Pa(h[4].g, h[5].g) * Math.sin(1.35 * a) * 4);
        V(N(), q.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Y(0.7, 0.7, 0.7, 0.2),);
        V(O(K(N(), q.scale(3, 1.4, 2.7)), K(N(), q.scale(1.2, 8, 1.2)),), q.translate(-33, -3, 55), Y(0.7, 0.7, 0.7, 0.2),);
      }), T(f => {
        f.h = () => q.translate(0, 0, J(1 - 5 * x()) * Pa(h[4].g, h[5].g) * Math.sin(0.9 * a) * 8);
        V(O(K(N(), q.translate(-27, -3, 55).scale(3, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2),), K(N(), q.translate(-27, -3, 55).scale(1, 3), Y(0.9, 0.9, 0.9, 0.2),),),);
        V(N(), q.translate(-39, -3, 55).scale(3, 1.4, 2.7), Y(0.9, 0.9, 0.9, 0.2));
      }), T(f => {
        f.h = () => q.translate(0, -6.5 * h[4].i);
        V(N(6), q.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), Y(0.7, 0.7, 0.7, 0.4),);
      }), pb(q.translate(-55, -1.1, 46).rotate(0, 90)), V(N(6), q.translate(-61.3, -2.4, 49).scale(3, 1, 5), Y(0.4, 0.6, 0.6, 0.3)), V(N(7), q.translate(-57, -2.6, 46).scale(4, 1, 4), Y(0.8, 0.8, 0.8, 0.3)), [...K(N(), q.translate(0, -3).scale(11, 1.4, 3), Y(0.9, 0.9, 0.9, 0.2),), ...O(K(N(6), q.rotate(90).scale(6, 8, 6), Y(0.3, 0.6, 0.6, 0.3)), K(N(4, 0, 0.01), q.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), Y(0.3, 0.6, 0.6, 0.3),), K(N(6), q.rotate(90).scale(5, 12, 5), Y(0.3, 0.6, 0.6, 0.3)), 
      ...[5, 0, -5,].map(f => K(N(5), q.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Y(0.3, 0.6, 0.6, 0.3),)),),]), I = (V(F, q.translate(-53, 0, 55)), T(f => {
        f.h = () => q.translate(-75, (1 - h[5].i) * (1 - h[6].g) * 3, 55).rotate(180 * (1 - h[5].i) + ja, 0,);
        V(F);
      }, 2), V(N(), q.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), Y(0.7, 0.7, 0.7, 0.2),), V(N(3, 0, -0.5), q.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Y(0.8, 0.8, 0.8, 0.2),), V(O(lb(K(N(), q.translate(-100, -2.5, 55).scale(8, 1, 8), Y(0.8, 0.8, 0.8, 0.2),), K(N(), q.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Y(0.8, 0.8, 0.8, 0.2),), K(N(), q.translate(-100, -2.6, 70).scale(3, 1.1, 7), Y(0.8, 0.8, 0.8, 0.2),), K(N(), q.translate(-96, -2.6, 73).rotate(0, 
      45).scale(3, 1.1, 5), Y(0.8, 0.8, 0.8, 0.2),), K(N(6), q.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Y(0.6, 0.6, 0.6, 0.3),), K(N(), q.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Y(0.8, 0.8, 0.8, 0.2),), K(N(), q.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), Y(0.8, 0.8, 0.8, 0.2),),), K(N(8), q.translate(-100, -1, 55).scale(7, 0.9, 7), Y(0.3, 0.3, 0.3, 0.4),), K(N(8), q.translate(-100, -2, 55).scale(4, 0.3, 4), Y(0.4, 0.4, 0.4, 0.5),), K(N(8), q.translate(-100, 
      -3, 55).scale(0.6, 1, 0.6), Y(0.4, 0.4, 0.4, 0.5),),),), qb(q.translate(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), qb(q.translate(-89, 0.2, 80), [0, 0, 6,]), V(O(K(N(), q.translate(-100, 1, 63).scale(7.5, 4), Y(0.5, 0.5, 0.5, 0.4),), K(N(), q.translate(-100, 0, 70).scale(2, 2, 10), Y(0.5, 0.5, 0.5, 0.4),), K(N(20, 1), q.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Y(0.5, 0.5, 0.5, 0.4),),),), T(f => {
        f.h = () => q.translate(-99.7, -1.9, 63.5).scale(1, J(1.1 - h[6].g), 1);
        V(B);
      }), Aa.map(({x:f, z:p}) => {
        V(N(6), q.translate(7 * f - 100, -3, 7 * p + 55).scale(1, 8.1), Y(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(r => V(N(6), q.translate(7 * f - 100, r, 7 * p + 55).scale(1.3, 0.5, 1.3), Y(0.4, 0.2, 0.2, 0.8),));
      }), u(7, f => {
        V(N((23 * f + 1) % 5 + 5, 0, 0.55), q.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), Y(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), V(N(), q.translate(-87, -9.5, 24).scale(7, 1, 3), Y(0.4, 0.5, 0.6, 0.4)), V(N(4), q.translate(-86, -9.2, 27).scale(5, 1, 5), Y(0.5, 0.6, 0.7, 0.3)), V(N(12, 1), q.translate(-86, -9, 31).scale(1.5, 1, 1.5), Y(0.3, 0.3, 0.4, 0.1),), pb(q.translate(-86, -7.5, 31)), T(f => {
        f.h = () => q.translate(0, 3.5 * (1 - Ma(h[6].g, h[7].g)) + Pa(h[7].i, h[6].i) * Math.sin(a) * 5,);
        [0, 12, 24,].map(p => V(N(), q.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), Y(0.2, 0.5, 0.6, 0.2),));
      }), T(f => {
        f.h = () => q.translate(0, Pa(h[7].i, h[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Pa(h[7].i, h[6].i),);
        [6, 18,].map(p => V(N(), q.translate(p - 76.9, p / -13 - 10, 24).scale(2.8, 1.5, 3), Y(0.1, 0.4, 0.5, 0.2),));
      }), V(O(lb(K(N(5), q.translate(0, 0, -7).scale(2, 1.2, 2), Y(0.2, 0.4, 0.7, 0.3),), K(N(5), q.scale(9, 1.2, 9), Y(0, 0.2, 0.3, 0.5)), K(N(), q.scale(11, 1, 13), Y(0.3, 0.4, 0.6, 0.3)),), K(N(5), q.scale(5.4, 5, 5.4), Y(0, 0.2, 0.3, 0.5)),), q.translate(-38.9, -11.3, 17),), pb(q.translate(-38.9, -9.6, 10)), T(f => {
        f.h = () => q.translate(0, -7.3 * h[7].i);
        V(O(lb(K(N(5), q.translate(0, 2).scale(5, 7, 5).skewY(8), Y(0.2, 0.4, 0.5, 0.5),), K(N(5), q.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), Y(0.25, 0.35, 0.5, 0.5),), K(N(5), q.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), Y(0.35, 0.3, 0.5, 0.5),),), K(N(5), q.scale(4, 8, 4), Y(0.2, 0.4, 0.5, 0.5)), K(N(5), q.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Y(0.2, 0.4, 0.5, 0.5),),), q.translate(-38.9, -11.3, 17),);
        qb(q.translate(-39.1, -0.6, 17).rotate(11), ...Za(15).map(({x:p, z:r}) => [3 * p, 3 * r, 1.2,]),);
      }), Aa.map(({x:f, z:p}) => {
        V(N(14, 1), q.translate(9 * f - 38.9, -7.3, 11 * p + 17).scale(1, 4), Y(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(r => V(N(17, 1), q.translate(9 * f - 38.9, -7.3, 11 * p + 17).translate(0, r - 4).scale(1.5, 0.5, 1.5), Y(0.6, 0.6, 0.6, 0.3),));
      }), V(O(lb(K(N(6), q.translate(0, 0, -36).scale(15, 1.2, 15), Y(0.7, 0.7, 0.7, 0.3),), K(N(), q.translate(0, 0, -18).scale(4, 1.2, 6), Y(0.45, 0.4, 0.6, 0.3),),), ...u(6, f => u(6, p => K(N(6), q.translate(4.6 * p - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * p)).scale(2, 5, 2,), Y(0.7, 0.7, 0.7, 0.3),))).flat(),), q.translate(-38.9, -11.3, 17),), qb(q.translate(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), V(N(5), q.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), Y(0.8, 0.1, 0.25, 0.4),), pb(q.translate(-84, -0.5, 85).rotate(0, 45)), T(f => {
        f.h = () => t(-123, 1.4, 55 + -65 * na);
        V(A);
        pb(q.translate(0, -3, -4).rotate(0, 180));
      }), O(K(N(), q.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), Y(0.25, 0.25, 0.35, 0.3),), K(N(3), q.translate(0, 0, -5.5).scale(3, 2), Y(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2,].map(f => K(N(), q.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), Y(0.7, 0.2, 0, 0.3),)),));
      T(f => {
        f.h = () => q.translate(0, -2, Pa(h[10].g, h[11].g) * Math.abs(Math.sin(1.1 * a)) * -8.5 + 10);
        u(2, p => V(I, q.translate(9 * p - 110 + (1 & p), 1.7, -12)));
      });
      T(f => {
        f.h = () => q.translate(0, -2, Pa(h[10].g, h[11].g) * Math.abs(Math.sin(2.1 * a)) * -8.5 + 10);
        u(2, p => V(I, q.translate(9 * (p + 2) - 110 + (1 & p), 1.7, -12)),);
      });
      T(f => {
        f.h = () => q.translate(0, -2, -8.5 * Ma((1 - h[10].g) * (1 - Pa(h[10].g, h[11].g)), Pa(h[10].g, h[11].g) * Math.abs(Math.sin(1.5 * a)),) + 10,);
        u(3, p => V(I, q.translate(9 * p - 106, 1.7, -12)));
      });
      V(O(lb(K(N(), q.translate(26.5, -1.6, 10).scale(20, 2.08, 3)), K(N(), q.translate(26.5, -0.6, 10).scale(19, 2, 0.5)),), ...u(4, f => K(N(), q.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...u(3, f => K(N(), q.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), q.translate(-123, 0, -12), Y(0.5, 0.5, 0.6, 0.2),);
      pb(q.translate(-116, -1.4, -18).rotate(0, 180));
      V(N(), q.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Y(0.8, 0.8, 0.8, 0.2),);
      V(N(6), q.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), Y(0.6, 0.5, 0.7, 0.2),);
      V(N(), q.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), Y(0.6, 0.6, 0.6, 0.3),);
      V(N(8), q.translate(-114, -17, -2).scale(2, 15, 2), Y(0.6, 0.6, 0.6, 0.3));
      V(N(8), q.translate(-79, -17, -2).scale(2, 15, 2), Y(1, 1, 1, 0.3));
      V(N(), q.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), Y(0.6, 0.6, 0.6, 0.3),);
      u(3, f => {
        V(v(16), q.translate(12 * f - 109, -9, -12), Y(0.6, 0.6, 0.6, 0.3),);
        V(v(16), q.translate(-77, -9, -12 * f - 20).rotate(0, 90), Y(0.6, 0.6, 0.6, 0.3),);
      });
      V(O(K(N(12), q.translate(-77, -14.5, -12).scale(4, 17.5, 4), Y(0.7, 0.7, 0.7, 0.2),), K(N(), q.translate(-79, 0.1, -12).scale(3.5, 2, 1.3), Y(0.4, 0.5, 0.6, 0.2),), K(N(), q.translate(-77, 0.1, -14).scale(1.5, 2, 2), Y(0.4, 0.5, 0.6, 0.2),), K(N(12), q.translate(-77, 3.1, -12).scale(3, 5, 3), Y(0.4, 0.5, 0.6, 0.2),),),);
      V(N(), q.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), Y(0.6, 0.6, 0.6, 0.3),);
      V(N(9), q.translate(-98, -18.4, -40).scale(2.5, 13.5, 2.5), Y(0.5, 0.5, 0.5, 0.3),);
      V(O(K(N(), q.translate(-93, -5.8, -40).scale(9, 1, 5), Y(0.8, 0.8, 0.8, 0.1),), K(N(9), q.translate(-98, -5.8, -40).scale(3, 8, 3), Y(0.7, 0.7, 0.7, 0.2),),),);
      pb(q.translate(-98, -4.4, -40).rotate(0, 90));
      qb(q.translate(-115, 0.2, -12), [0, 0, 3.5,]);
      qb(q.translate(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      V(O(lb(K(N(6, 0, 0, 0.6), q.translate(-100, 0.7, 105.5).scale(8, 1, 11), Y(0.7, 0.7, 0.7, 0.2),), K(N(), q.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), Y(0.7, 0.7, 0.7, 0.2),),), K(N(5), q.translate(-100, 0.7, 113).scale(4, 3, 4), Y(0.7, 0.7, 0.7, 0.2),),),);
      u(4, f => T(p => {
        p.h = () => {
          const r = Pa(h[8].i, h[12].i);
          return q.translate((2 < f ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - h[8].i) * (1 - h[12].i) * -7 + (0.05 < r ? r : 0.05) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        V(N(6), q.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), Y(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      }));
      T(f => {
        f.h = () => {
          const p = Pa(h[8].i, h[12].i);
          return q.translate(2.5 * (1 - p) - 139.7, -3 * (1 - h[8].g) + p * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * p + 3), 0);
        };
        V(O(K(N(10), q.scale(6, 2, 6), Y(0.1, 0.6, 0.5, 0.3)), K(N(10), q.scale(3.3, 6, 3.3), Y(0.1, 0.6, 0.5, 0.5)),),);
        V(N(15, 1), q.translate(-7.5).rotate(0, 90).scale(3, 2.3, 3), Y(0.4, 0.4, 0.4, 0.3),);
        V(N(10), q.translate(-7.5).rotate(0, 90).scale(2, 2.5, 2), Y(0.3, 0.8, 0.7, 0.3),);
        V(N(5), q.translate(-7.5).rotate(0, 90).scale(1, 3), Y(0.5, 0.5, 0.5, 0.5),);
        pb(q.translate(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(p => V(l, q.rotate(90 * -p, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), Y(1, 1, 0.8, 0.2),));
        qb(q.translate(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        V(N(12, 1), q.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), Y(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5,].map(p => V(N(15, 1), q.translate(-7.5 * f - 100, p + 0.7, 96).scale(1.1, 0.5, 1.1), Y(0.5, 0.24, 0.2, 0.4),));
        V(l, q.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), Y(1, 1, 0.8),);
        V(O(K(N(), q.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), Y(0.5, 0.5, 0.5, 0.4),), K(N(), q.scale(3, 3, 10), Y(0.6, 0.24, 0.2, 0.5)), K(N(28, 1), q.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Y(0.6, 0.24, 0.2, 0.5),), K(N(5), q.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Y(0.6, 0.24, 0.2, 0.5),), K(N(5), q.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), Y(0.6, 0.24, 0.2, 0.5),),), q.translate(f - 100, 0.7, 97),);
      });
      T(f => {
        f.h = () => q.translate(-100, 0.6, 96.5).scale(0.88, 1.2 - h[12].g);
        V(B);
      });
      V(O(K(N(), q.translate(-82.07, 0.8, 106).scale(11, 0.9, 2.2), Y(0.7, 0.7, 0.7, 0.1),), K(N(45, 1), q.translate(-81, 0.7, 106).scale3d(7.7), Y(0.7, 0.7, 0.7, 0.1),),),);
      T(f => {
        f.h = () => q.translate(-81, 0.6, 106).rotate(0, 40 + ha);
        V(O(K(N(45, 1), q.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)), K(N(), q.translate(0, 0, -5.5).scale(1.5, 3, 2.7), Y(0.45, 0.45, 0.45, 0.2),),),);
        V(N(8), q.translate(0, 2).scale(3, 1.5, 3).rotate(0, 22), Y(0.7, 0.7, 0.7, 0.1),);
        V(N(5), q.translate(0, 2).scale(1, 2), Y(0.3, 0.3, 0.3, 0.2));
        qb(q.translate(0, 3), ...Za(14).map(({x:p, z:r}) => [5.6 * p, 5.6 * r, 2,]),);
      });
      T(f => {
        f.h = () => q.translate(-65.8, 0.8, 106).rotate(0, ia);
        [-1, 1,].map(p => V(l, q.rotate(0, 90).translate(-5 * p, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * p + 90), Y(1, 1, 0.8),));
        V(O(K(N(28, 1), q.translate(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3),), K(N(), q.scale(9, 5, 2), Y(0.3, 0, 0, 0.3)),),);
        V(K(N(28, 1), q.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)),);
        V(K(N(5), q.translate(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2),),);
      });
      T(f => {
        f.h = () => q.translate(-50.7, 0.8, 106).rotate(0, 180 - ia);
        V(O(K(N(28, 1), q.translate(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3),), K(N(), q.translate(7).scale(9, 5, 2), Y(0.3, 0, 0, 0.3)), K(N(), q.translate(0, 0, 7).scale(2, 5, 9), Y(0.3, 0, 0, 0.3),),),);
        V(K(N(28, 1), q.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)),);
        V(K(N(5), q.translate(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2),),);
      });
      T(f => {
        f.h = () => q.translate(-50.7, 0.8, 91).rotate(0, 270 + ia);
        V(O(K(N(28, 1), q.translate(0, 2).scale(7.5, 1, 7.5), Y(0.35, 0, 0, 0.3),), K(N(), q.translate(7).scale(9, 5, 2), Y(0.3, 0, 0, 0.3)), K(N(), q.translate(0, 0, -7).scale(2, 5, 9), Y(0.3, 0, 0, 0.3),),),);
        V(K(N(28, 1), q.scale(7.5, 1, 7.5), Y(0.45, 0.45, 0.45, 0.2)),);
        V(K(N(5), q.translate(0, 1).scale(1, 0.2), Y(0.3, 0.3, 0.3, 0.2),),);
      });
      V(N(), q.translate(-58, 1, 106).scale(2, 0.65, 2), Y(0.7, 0.7, 0.7, 0.2));
      V(N(), q.translate(-50.7, 1, 99).scale(2, 0.65, 1), Y(0.7, 0.7, 0.7, 0.2));
      V(N(), q.translate(-42, 0.4, 91).scale(5, 1, 2.5), Y(0.7, 0.7, 0.7, 0.3));
      V(N(), q.translate(-34.2, 0.4, 91).scale(3, 1, 3), Y(0.7, 0.7, 0.7, 0.3));
      pb(q.translate(-34, 2.7, 96).rotate(-12, 0));
      V(N(5), q.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), Y(0.2, 0.5, 0.5, 0.6),);
      [Y(0.1, 0.55, 0.45, 0.2), Y(0.2, 0.5, 0.5, 0.3), Y(0.3, 0.45, 0.55, 0.4),].map((f, p) => T(r => {
        r.h = () => q.translate(0, (1 - h[13].i) * (1 - h[14].i) * (p ? 0 : 3) + Pa(h[13].i, h[14].i) * Math.sin(1.5 * a + 1.5 * p) * 4,);
        V(N(), q.translate(-23.5, 0.5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), f,);
        2 === p && V(N(), q.translate(-29.1, 0.4, 91).scale(2.1, 1, 3), Y(0.7, 0.7, 0.7, 0.3),);
        1 === p && V(N(), q.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), Y(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => V(l, q.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), Y(1, 1, 0.8),));
      u(3, f => V(v(24.7 - 0.7 * (1 & f)), q.translate(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? Y(0.5, 0.5, 0.5, 0.3) : Y(0.35, 0.35, 0.35, 0.5),),);
      V(O(K(N(6, 0, 0, 0.3), q.translate(0, -0.92, 95).scale(14, 2, 14), Y(0.8, 0.8, 0.8, 0.2),), K(N(5), q.translate(0, 0, 95).scale3d(6), Y(0.3, 0.3, 0.3, 0.5),),),);
      pb(q.translate(0, 1.7, 82).rotate(0, 180));
      V(N(5), q.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Y(0.5, 0.3, 0.3, 0.4),);
      V(N(6), q.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Y(0.5, 0.6, 0.7, 0.3),);
      V(N(), q.translate(0, 16, 129).scale(1.5, 1, 2), Y(0.5, 0.6, 0.7, 0.3));
      V(N(7), q.translate(0, 16.2, 133).scale(5, 1, 5), Y(0.4, 0.5, 0.6, 0.4));
      V(O(lb(K(N(), q.translate(0, 16, 110.5).scale(12, 1, 3), Y(0.5, 0.3, 0.3, 0.4),), K(N(), q.translate(0, 16, 111).scale(3, 1, 3.8), Y(0.5, 0.3, 0.3, 0.4),),), K(N(5), q.translate(0, 16, 103.5).scale(5.5, 5, 5.5), Y(0.5, 0.3, 0.3, 0.4),),),);
      T(f => {
        f.h = () => {
          const p = Math.sin(a);
          return q.translate(-2 * p).rotate(25 * p);
        };
        V(N(3), q.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), Y(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(p => {
          V(N(6), q.translate(0, 16, p + 95).scale(3, 1, 2.3).rotate(0, 90), Y(0.7, 0.7, 0.7, 0.4),);
          V(N(), q.translate(0, 6.2, p + 95).scale(0.5, 11, 0.5), Y(0.5, 0.3, 0.3, 0.4),);
        });
      });
      T(f => {
        f.h = () => {
          const p = Pa(Pa((h[14].g + h[14].i) / 2, h[13].i), (h[15].g + h[15].i) / 2,);
          return q.translate(0, 16 * p, 8.5 * J(2 * p - 1) + 95);
        };
        V(N(5), q.scale(5, 1.1, 5), Y(0.5, 0.3, 0.3, 0.4));
        V(N(5), q.scale(5.5, 0.9, 5.5), Y(0.25, 0.25, 0.25, 0.4));
        pb(q.translate(0, 1.5, -1).rotate(0, 180));
      });
      qb(q.translate(0, 3, 95), ...Za(9).map(({x:f, z:p}) => [9 * f, 9 * p, 4,]),);
      qb(q.translate(0, 19, 134), [0, 0, 3.5,]);
    });
    T(() => {
      [0, 180,].map(t => V(l, q.rotate(0, t).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), Y(1, 1, 0.8),));
      V(ab(20), q.translate(0, 1).scale(0.5, 0.5, 0.5), Y(1, 0.3, 0.4));
      const k = K(O(N(15, 1), K(N(), q.translate(0, 0, 1).scale(2, 2, 0.5)),), q.rotate(-90, 0).scale(0.1, 0.05, 0.1), Y(0.3, 0.3, 0.3),);
      [-1, 1,].map(t => V(k, q.translate(0.2 * t, 1.2, 0.4).rotate(0, 20 * t, 20 * t)));
      V(N(), q.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), Y(0.3, 0.3, 0.3));
      V(ab(20), q.scale(0.7, 0.8, 0.55), Y(1, 0.3, 0.4));
    });
    [-1, 1,].map(k => T(() => {
      V(N(10, 1), q.translate(0.3 * k, -0.8).scale(0.2, 0.7, 0.24), Y(1, 0.3, 0.4));
    }));
    T(() => {
      V(N(6, 1), q.scale(0.13, 1.4, 0.13), Y(0.3, 0.3, 0.5, 0.1));
      V(N(10), q.translate(0, 1).scale(0.21, 0.3, 0.21), Y(1, 0.5, 0.2));
      V(N(3), q.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), Y(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    T(() => {
      V(N(6).slice(0, -1), q.scale(0.77, 1, 0.77), Y(1, 0.3, 0.5));
    }, 0);
    T(() => {
      V(ab(30, 24, (k, t, v) => {
        const x = t / 24, A = k * Math.PI * 2 / 30, B = x ** 0.6 * Math.PI / 2;
        k = x * x * Math.sin(k * Math.PI * 14 / 30) / 4;
        return 23 === t ? {x:v.D = 0, y:-0.5, z:0,} : {x:Math.cos(A) * Math.sin(B), y:Math.cos(x * Math.PI) - x - k, z:Math.sin(A) * Math.sin(B) + Math.sin(k * Math.PI * 2) / 4,};
      }), q.scale3d(0.7), Y(1, 1, 1),);
      [-1, 1,].map(k => V(ab(12), q.translate(0.16 * k, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4 {\n  display: none;\n}\n');

