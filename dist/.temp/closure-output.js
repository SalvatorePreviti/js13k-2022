let ba = 0, ca = 0, a = 0, da = 0, fa = 0, ia = 0, ja = 0, la = 0, na = 0, oa = 0, pa = 0, qa = 0, e = 0.066, ra = 1, sa, ua, va, wa, xa;
const ya = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], f = [], l = [], za = [], Aa = [], Ca = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], 
[100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], n = {x:0, y:0, z:0,};
var Da = 0, Ea = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180, q = new DOMMatrix(), La = new Float32Array(16), Ma = new Float32Array(624), Na = (d, c) => Array.from(Array(d), (h, k) => c(k)), Oa = (d, c) => c < d ? d : c, Pa = d => 0 > d ? -d : d, Ra = d => 0 > d ? 0 : 1 < d ? 1 : d, Sa = (d, c, h) => d + (c - d) * (0 > h ? 0 : 1 < h ? 1 : h), Ta = (d, c) => (d = 0 > d ? 0 : 1 < d ? 1 : d, d + (1 - d - d) * (0 > c ? 0 : 1 < c ? 1 : c)), Ua = d => Math.atan2(Math.sin(d *= Ka), Math.cos(d)) / Ka, Va = (d, c, h) => ((d *= Ka) + (2 * (c = 
(c * Ka - d) % (2 * Math.PI)) % (2 * Math.PI) - c) * (0 > h ? 0 : 1 < h ? 1 : h)) / Ka, Wa = (d, c, h, k) => Sa(d + (0 > c - d ? -1 : 1) * Oa(0, Pa(c - d) ** 0.9 - h) * k * 2, c, k / 7,), Xa = ({x:d, y:c, z:h}) => Math.hypot(d - n.x, c - n.y, h - n.z), Ya = ({x:d, y:c, z:h}, k) => d * k.x + c * k.y + h * k.z, Za = d => {
  let c = 0, h = 0, k = 0, m, p = d.at(-1);
  for (m of d) {
    c += (p.y - m.y) * (p.z + m.z), h += (p.z - m.z) * (p.x + m.x), k += (p.x - m.x) * (p.y + m.y), p = m;
  }
  return m = Math.hypot(c, h, k), c /= m, h /= m, k /= m, {x:c, y:h, z:k, w:c * p.x + h * p.y + k * p.z,};
}, $a = (d, c = La, h = 0,) => (h *= 16, c[h++] = d.m11, c[h++] = d.m12, c[h++] = d.m13, c[h++] = d.m14, c[h++] = d.m21, c[h++] = d.m22, c[h++] = d.m23, c[h++] = d.m24, c[h++] = d.m31, c[h++] = d.m32, c[h++] = d.m33, c[h++] = d.m34, c[h++] = d.m41, c[h++] = d.m42, c[h++] = d.m43, c[h] = d.m44, c), ab = (d, c, h, k,) => [d, 0, 0, 0, 0, c, 0, 0, 0, 0, (k + h) / (h - k), -1, 0, 0, 2 * k * h / (h - k), 0], bb = (d, c, h) => (d.D = h, d.A = c, d), cb = (d, c, h = d.A) => bb(d.map(k => {
  let m, p;
  return {x:k, y:m, z:p} = k, {x:k, y:m, z:p} = c.transformPoint({x:k, y:m, z:p,}), {x:k, y:m, z:p,};
}), h, d.D,), t = (d, c, h) => d.map(k => cb(k, c, h)), db = (d, c = 0) => Na(d, h => {
  const k = Math.cos(2 * Math.PI * h / d);
  return {x:Math.sin(2 * Math.PI * h / d), y:0, z:0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - c : k + c,};
}), eb = (d, c, h) => d.map((k, m, {length:p}) => bb([k, c[p - m - 1], c[p - (m + 1) % p - 1], d[(m + 1) % p]], d.A, h,)), I = (d, c, h = 0, k,) => (d = d ? db(d, k) : ya, k = cb(d, q.translate(0, 1).scale3d(0 < h ? h : 1)), d = cb(d, q.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...eb(d, k, c), k, d]), fb = (d, c = d, h = (k, m) => (m *= Math.PI / c, {x:Math.cos(k *= 2 * Math.PI / d) * Math.sin(m), y:Math.cos(m), z:Math.sin(k) * Math.sin(m),})) => {
  const k = [];
  for (let m = 0; d > m; m++) {
    for (let p = 0; c > p; p++) {
      const u = bb([], 0, 1);
      k.push(u);
      u.push(h(m, p, u));
      p && u.push(h((m + 1) % d, p, u));
      c - 1 > p && u.push(h((m + 1) % d, p + 1 % c, u));
      u.push(h(m, p + 1 % c, u));
    }
  }
  return k;
}, ib = (d, c) => {
  var h, k, m, p = c.C;
  for (var u = 0; p.length > u; ++u) {
    if (-0.00008 > (h = Ya(d, p[u]) - d.w) ? m = c : 8e-5 < h && (k = c), m && k) {
      k = [];
      m = [];
      p = c.C;
      u = c.B;
      let z = p.at(-1), x = Ya(d, z) - d.w;
      for (const E of p) {
        h = Ya(d, E) - d.w, 8e-5 > x && m.push(z), -0.00008 < x && k.push(z), (8e-5 < x && -0.00008 > h || -0.00008 > x && 8e-5 < h) && (x /= h - x, z = {x:z.x + (z.x - E.x) * x, y:z.y + (z.y - E.y) * x, z:z.z + (z.z - E.z) * x,}, k.push(z), m.push(z)), z = E, x = h;
      }
      return {o:2 < k.length && {C:bb(k, p.A, p.D), B:u, u:c,}, m:2 < m.length && {C:bb(m, p.A, p.D), B:u, u:c,},};
    }
  }
  return {o:k, m,};
}, jb = (d, c, h = Za(c.C)) => {
  let k, m, p;
  return d ? ({o:k, m} = ib(d, c), k || m || d.s.push(c), k && (d.o = jb(d.o, k, h)), m && (d.m = jb(d.m, m, h))) : ({x:k, y:m, z:h, w:p} = h, d = {x:k, y:m, z:h, w:p, s:[c], o:0, m:0,}), d;
}, kb = (d, c, h) => {
  const k = [], m = (p, u) => {
    let {o:z, m:x} = ib(p, u);
    z || x || (0 < h * Ya(p, c) ? z = u : x = u);
    z && (p.o ? m(p.o, z) : k.push(z));
    x && p.m && m(p.m, x);
  };
  for (const p of c.s) {
    m(d, p);
  }
  return k;
}, lb = (d, c) => d && (c(d), lb(d.o, c), lb(d.m, c)), ob = d => d.length ? d.reduce((c, h) => jb(c, {C:h, B:0, u:0,}), 0) : d, pb = d => (lb(d, c => {
  const h = c.m;
  c.m = c.o;
  c.o = h;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const k of c.s) {
    k.B = !k.B;
  }
}), d), qb = (...d) => d.reduce((c, h) => {
  const k = [];
  if (c = ob(c), h) {
    h = ob(h);
    lb(c, m => m.s = kb(h, m, 1));
    lb(h, m => k.push([m, kb(c, m, -1)]));
    for (let [m, p] of k) {
      for (const u of p) {
        jb(c, u, m);
      }
    }
  }
  return c;
}), J = (d, ...c) => pb(qb(pb(ob(d)), ...c)), P = d => {
  const c = new Map(), h = new Map(), k = m => {
    let p;
    return m.u && ((p = c.get(m.u)) ? (h.delete(p), m = k(m.u)) : c.set(m.u, m)), m;
  };
  return lb(d, m => {
    for (const p of m.s) {
      h.set(k(p), p.B);
    }
  }), Array.from(h, ([{C:m}, p]) => {
    const u = m.map(({x:z, y:x, z:E}) => ({x:z, y:x, z:E,}));
    return bb(p ? u.reverse() : u, m.A, m.D);
  });
}, R = (d, c, h) => d + (c - d) * Ra(1 - Math.exp(-h * e)), rb = () => {
  const d = Ta(l[12].g, l[13].g);
  ja = Sa(R(ja, 0, 1), Ua(ja + 60 * e), l[5].g - l[6].i,);
  fa = Sa(R(fa, 0, 5), Ua(fa + 56 * e), d,);
  ia = Sa(R(ia, 0, 4), Ua(ia + 48 * e), d,);
  oa = R(oa, l[9].i, 0.2 + 0.3 * Pa(2 * l[9].i - 1));
  na = R(na, la ? na + (-9 - na) * Ra(1.5 * e) : Ra(a / 3), 1,);
  ra && a > ra && (ra = 0, h4.innerHTML = "");
  l[0].l && 0.8 < l[0].g && (13 > ba ? (1 / 0 > ra && (ra = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), l[0].l = 0) : la || (1 / 0 > ra && (ra = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), la = 1));
  for (const c of f) {
    c.h && (c.j = c.h());
  }
  for (const c of l) {
    c.h();
  }
  for (const c of za) {
    c.h();
  }
}, sb = () => {
  h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ba = za.reduce((d, {l:c}) => d + c, 0)];
}, tb = () => {
  localStorage.DanteSP22 = JSON.stringify([l.map(({l:d}) => d), za.map(({l:d}) => d), da, a, oa,]);
}, S = (d, c = 1) => {
  const h = va;
  c = {j:q, F:f.length, H:c, s:[],};
  return f.push(va = c), d(c), va = h, c;
}, T = (d, c = q, h) => va.s.push(...t(d, c, h)), ub = d => {
  const c = va, h = l.length, k = {l:0, g:0, i:0, u:c, h() {
    const m = k.l, p = k.g, u = k.i, z = c.j.multiply(d);
    k.I = z;
    3 > Xa(z.transformPoint()) && Aa[5] && (0.3 > p || 0.7 < p) && (k.l = m ? 0 : 1, h && 1 / 0 > ra && (ra = a + 1, h4.innerHTML = "* click *"), da = h, tb());
    k.g = R(p, m, 4);
    k.i = R(u, m, 1);
    k.j = z.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  l.push(k);
  T(I(5), d.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
  T(I(5), d.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
  T(I(), d.translate(0, -0.4).scale(0.5, 0.1, 0.5), V(0.5, 0.5, 0.4));
}, vb = (d, ...c) => {
  let h = -1, k = 0, m = 0, p = 0, u = 0, z = 0, x = 1, E = 3;
  const v = {l:0, h() {
    if (!v.l) {
      let ka, H, K, y, N, w, O = 1, Q = 1 / 0, W;
      for (const U of A) {
        var {x:G, z:L, w:M} = U;
        L = (G = Math.hypot(b - G, g - L)) - M;
        W ||= G < M;
        0 < L && Q > L && (Q = L, C = U);
        var Y = G / M;
        O = O < Y ? O : Y;
      }
      W || ({x:ka, z:H, w:K} = C, y = b - ka, N = g - H, w = Math.hypot(y, N), ha = Math.atan2(-N, y), x && (m = (Math.random() - 0.5) * Math.PI / 2, E = Oa(1, E / (1 + Math.random()))), ha += m, h = -Math.cos(ha), k = Math.sin(ha), 0.1 < w && (w = (w < K ? w : K) / (w || 1), b = y * w + ka, g = N * w + H));
      x = W;
      E = R(E, 3 + 6 * (1 - O), 3 + O);
      r = R(r, b = R(b, b + h, E), E);
      D = R(D, g = R(g, g + k, E), E);
      p = Va(p, Math.atan2(r - u, D - z) / Ka - 180, 3 * e,);
      u = r;
      z = D;
      var ha = (v.j = B.j.multiply(d.translate(r, 0, D).rotateSelf(0, p, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.55 > Xa(ha) && (v.l = 1, Y = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ba] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      ra && (ra = a + (ba && 12 > ba ? 5 : 7), h4.innerHTML = Y), sb(), tb());
    }
    v.l && (v.j = f[2].j.translate(F % 4 * 1.2 - 1.7 + Math.sin(a + F) / 7, -2, 1.7 * (F / 4 | 0) - 5.5 + Pa(F % 4 - 2) + Math.cos(a / 1.5 + F) / 6,));
  },}, B = va, F = za.length, A = c.map(([G, L, M]) => ({x:G, z:L, w:M,}));
  let C = A[0], {x:b, z:g} = C, r = b, D = g;
  za.push(v);
}, wb = (d, c, h, k) => {
  let m = 0, p = 0, u = 0, z = 1 / 0, x = -1 / 0, E = 1 / 0, v = -1 / 0, B = 1 / 0, F = -1 / 0;
  const A = 1.1 * (h - c), C = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, h))).multiplySelf(d).invertSelf();
  return c = Na(8, b => (b = C.transformPoint({x:4 & b ? 1 : -1, y:2 & b ? 1 : -1, z:1 & b ? 1 : -1,}), m -= b.x = (A * b.x | 0) / A / b.w, p -= b.y = (A * b.y | 0) / A / b.w, u -= b.z = (A * b.z | 0) / A / b.w, b)), h = q.rotate(298, 139).translateSelf(m / 8, p / 8, u / 8), cb(c, h).map(({x:b, y:g, z:r}) => {
    z = z < b ? z : b;
    x = b < x ? x : b;
    E = E < g ? E : g;
    v = g < v ? v : g;
    B = B < r ? B : r;
    F = r < F ? F : r;
  }), B *= 0 > B ? k : 1 / k, F *= 0 < F ? k : 1 / k, q.scale(2 / (x - z), 2 / (v - E), 2 / (B - F)).translateSelf((x + z) / -2, (v + E) / -2, (B + F) / 2,).multiplySelf(h);
}, zb = () => {
  let d = !0, c, h, k, m, p, u, z, x, E, v, B, F;
  const A = () => {
    sa || !d ? xb.disconnect() : xb.connect(yb.destination);
    b4.innerHTML = "music: " + d;
  }, C = (b = !1) => {
    if (sa !== b) {
      sa = b;
      try {
        b ? (document.exitFullscreen().catch(() => {
        }), document.exitPointerLock()) : xb.start();
      } catch {
      }
      wa = 0;
      document.body.className = b ? "l m" : "l";
      A();
      sb();
    }
  };
  oncontextmenu = () => !1;
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b1.onclick = () => {
    document.body.requestFullscreen();
    C();
  };
  b2.onclick = () => {
    document.body.requestFullscreen();
    C();
    wa = 1;
  };
  b4.onclick = () => {
    d = !d;
    A();
  };
  b5.onclick = () => C(!0);
  onclick = b => {
    F = 1;
    sa || (b.target === hC && (Aa[5] = !0), wa && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:b, target:g, type:r, repeat:D}) => {
    D || ((D = !!r[5] && g === document.body) && ("Escape" === b || "Enter" === b && sa) ? sa && !F || C(!sa) : 5 === (r = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[b]) ? D && (Aa[r] = 1) : Aa[r] = D);
  };
  onmousemove = ({movementX:b, movementY:g}) => {
    wa && (b || g) && (Ja += 0.1 * b, Ia += 0.1 * g);
  };
  hC.ontouchstart = b => {
    if (!sa) {
      for (let {pageX:g, pageY:r, identifier:D} of b.changedTouches) {
        wa && g > hC.clientWidth / 2 ? void 0 === x && (x = D, u = g, z = r, E = 0, v = Ja, B = Ia) : void 0 === m && (m = D, h = g, k = r, p = 0);
      }
      c = ca;
    }
  };
  hC.ontouchmove = b => {
    if (!sa) {
      for (let {pageX:D, pageY:G, identifier:L} of b.changedTouches) {
        var g, r;
        x === L && (Ja = v + (D - u) / 2.3, Ia = B + (G - z) / 2.3, E = 1);
        m === L && (0.4 < (r = (g = 0 > (L = (h - D) / 20) ? -1 : 1) * L) && (p = 1, pa = g * r ** 1.5, 1.5 < r && (h = D + 20 * g)), 0.4 < (r = (g = 0 > (L = (k - G) / 20) ? -1 : 1) * L) && (p = 1, qa = g * r ** 1.5, 1.5 < r && (k = G + 20 * g)));
      }
    }
  };
  hC.ontouchend = b => {
    let g;
    b.preventDefault();
    for (const r of b.changedTouches) {
      r.identifier === x ? (x = void 0, E || (g = 1), E = 0) : r.identifier === m ? (m = void 0, qa = pa = 0, p || (g = 1), p = 0) : g = 1;
    }
    g && b.target === hC && c && 0.02 < (b = ca - c) && 0.7 > b && (Aa[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Aa.length = pa = qa = 0;
    m = x = void 0;
    document.hidden && C(!0);
  })();
  C(!0);
}, Ab = () => {
  let d = 0, c = 0, h = 0, k = 0, m = 0, p = 1, u = !1, z, x, E, v, B, F, A, C, b, g, r, D;
  const G = {x:0, y:0, z:0,}, L = new Int32Array(256), M = new Uint8Array(65536), Y = H => {
    var {u:K, I:y} = l[da], {x:y, y:N, z:w} = y.transformPoint({x:0, y:8, z:-3,});
    n.x = G.x = y;
    n.y = G.y = A = N;
    n.z = G.z = w;
    H && (Da = g = y, Ea = (r = N) + 13, Ha = (D = w) + -18);
    d = c = K.F || 1;
    x = F = B = E = v = 0;
    p = 1;
  }, ha = () => {
    for (let H = 32; 128 > H; H += 2) {
      let K = 0, y = 0, N = 0, w = 0;
      const O = 512 * H;
      for (let Q = 1 & H; 128 > Q; Q += 2) {
        const W = O + 4 * Q;
        let U = O + 4 * (127 - Q);
        const aa = M[W] / 255, ea = M[1 + U] / 255, ma = 1 - Pa(Q / 63.5 - 1);
        10 < Q && 118 > Q && (K = Oa(K, Oa(aa * ma, aa * M[U] / 255)), y = Oa(y, Oa(ea * ma, ea * M[1 + W] / 255)));
        (54 > Q || 74 < Q) && 1e-3 < (U = (1 - ma) * (ea < aa ? aa : ea) / 3) && (64 > Q && U > N ? N = U : 64 < Q && U > w && (w = U));
      }
      Pa(w - N) > (0 > C ? -C : C) && (C = w - N);
      Pa(y - K) > (0 > b ? -b : b) && (b = y - K);
    }
  }, ka = () => {
    let H = 0, K = 0, y = 0, N = 0;
    L.fill(0);
    for (let O = 0; 31 > O; ++O) {
      let Q = 0;
      const W = 512 * O;
      for (let U = 0; 128 > U; U++) {
        var w = W + 4 * U;
        let aa = (M[w] + M[1 + w]) / 255;
        w = M[2 + w];
        14 < U && 114 > U && (Q += aa);
        w && aa && (aa = L[w] + 1, L[w] = aa, H > aa || (H = aa, K = w));
      }
      3 > Q && 5 < O && (N += O / 32);
      3 < Q && (7 < O && (y += O / 15), x = 1);
    }
    K && (x = 1);
    p ? K && (p = 0, c = K) : c = K || d;
    d = K;
    E = R(E, x ? 6.5 : 8, 4);
    G.y += y / 41 - (x ? 1 : E) * N / 41 * E * e;
  };
  xa = () => {
    let H = pa + (Aa[0] ? 1 : 0) + (Aa[2] ? -1 : 0), K = qa + (Aa[1] ? 1 : 0) + (Aa[3] ? -1 : 0);
    if (N = navigator.getGamepads()[0]) {
      const aa = N.buttons;
      var y = N.axes;
      (N = (w = ea => aa[ea]?.pressed || 0 < aa[ea]?.value)(1) || w(3) || w(2) || w(0)) !== u && (u = N) && (Aa[5] = 1);
      H += (0.2 < Pa(-y[0]) ? -y[0] : 0) + (w(14) ? 1 : 0) + (w(15) ? -1 : 0);
      K += (0.2 < Pa(-y[1]) ? -y[1] : 0) + (w(12) ? 1 : 0) + (w(13) ? -1 : 0);
      wa && (0.3 < Pa(y[2]) && (Ja += 80 * y[2] * e), 0.3 < Pa(y[3]) && (Ia += 80 * y[3] * e));
    }
    0.05 > (0 > K ? -K : K) && (K = 0);
    0.05 > (0 > H ? -H : H) && (H = 0);
    var N = Math.atan2(K, H), w = Ra(Math.hypot(K, H));
    y = (H = w * Math.cos(N), K = w * Math.sin(N), C = 0, b = 0, x = 0, Z.fa7(), Z.r9r(0, 0, 128, 128, 6408, 5121, M), Z.iay(36008, [36064, 36096]), Z.iay(36009, [36064, 36096]), NO_INLINE(ha)(), NO_INLINE(ka)(), Ra(1 - 5 * Oa(0 > C ? -C : C, 0 > b ? -b : b)));
    y = (c || (C += B * y * e, b += F * y * e), B = R(B, 0, x ? 8 : 4), F = R(F, 0, x ? 8 : 4), v = R(v, x ? (H || K ? x ? 7 : 4 : 0) * y : 0, x ? 0.1 < y ? 10 : H || K ? 5 : 7 : 1,), wa ? Ja * Ka : Math.PI);
    var O = Math.sin(y) * v * e;
    y = Math.cos(y) * v * e;
    y = (C -= H * y - K * O, b -= H * O + K * y, (y = (O = 1 === f[c].H && f[c].j || q).inverse()).m41 = 0, y.m42 = 0, y.m43 = 0, {x:C, z:b} = y.transformPoint({x:C, z:b, w:0,}), G.x += C, G.z += b, c !== z && (z = c, {x:y, y:Q, z:W} = O.inverse().transformPoint(n), G.x = y, G.y = Q, G.z = W), n.x);
    var Q = n.z, {x:W, y:O, z:U} = O.transformPoint(G);
    n.x = W;
    n.y = O;
    n.z = U;
    c && (B = (W - y) / e, F = (U - Q) / e);
    (H || K) && (h = 90 - N / Ka);
    k = Va(k, h, 8 * e);
    m += (w - m) * Ra(10 * e);
    A = Sa(R(A, O, 2), O, 8 * Pa(A - O));
    g = Wa(g, W, 0.5, e);
    r = Wa(r, O, 2, e);
    D = Wa(D, U, 0.5, e);
    wa ? (Da = R(Da, W, 666 * p + 18), Ea = R(Ea, A + 1.5, 666 * p + 18), Ha = R(Ha, U, 666 * p + 18)) : (Da = Wa(Da, g, 1, 2 * e), Ea = Wa(Ea, r + 13 + 15 * p, 4, 2 * e,), Ha = Wa(Ha, D + -18, 1, 2 * e,), y = Ha - D, 1 < (0 > y ? -y : y) && (Q = Da - g, Ja = 270 + Math.atan2(y, Q) / Ka, Ia = 90 - Math.atan2(Math.hypot(y, Q), Ea - r) / Ka));
    Ia = Oa(87 > Ia ? Ia : 87, -87);
    Ja = Ua(Ja);
    1 === c && (l[9].l = -15 > n.x && 0 > n.z ? 1 : 0);
    (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && Y();
    f[37].j = q.translate(n.x, A, n.z).rotateSelf(0, k);
    [38, 39].map((aa, ea) => {
      f[aa].j = f[37].j.translate(0, m * Ra(0.45 * Math.sin(9.1 * a + Math.PI * (ea - 1) - Math.PI / 2)),).rotateSelf(m * Math.sin(9.1 * a + Math.PI * (ea - 1)) * 0.25 / Ka, 0);
    });
  };
  Y(1);
}, Bb = (d, c = 35633) => (c = Z.c6x(c), Z.s3c(c, d), Z.c6a(c), c), Gb = (d, c) => {
  const h = {}, k = Z.c1h();
  return Z.abz(k, d), Z.abz(k, Bb(c, 35632)), Z.l8l(k), m => m ? h[m] || (h[m] = Z.gan(k, m)) : Z.u7y(k);
}, Hb = (d, c, h = 42) => {
  if (sa) {
    h = q.rotate(0, 40 * Math.sin(ca) - 70);
    for (var k of [37, 38, 39]) {
      $a(h, Ma, k - 1);
    }
    Z.uae(d, !1, Ma);
    Z.d97(4, f[39].G - f[37].v, 5123, 2 * f[37].v,);
  } else {
    for (k = 0; f.length > k; ++k) {
      const {H:m, F:p, j:u} = f[k];
      m && $a(u, Ma, p - 1);
    }
    Z.uae(d, !1, Ma);
    Z.d97(4, (c ? f[39].G : f[37].v) - 3, 5123, 6,);
    for (c = 0; 13 > c; ++c) {
      $a(za[c].j, Ma, c);
    }
    for (c = 0; l.length > c; ++c) {
      const {j:m, g:p} = l[c];
      $a(m, Ma, c + 13);
      Ma[16 * (c + 13) + 15] = 1 - p;
    }
    Z.uae(d, !1, Ma);
    Z.das(4, f[h].G - f[h].v, 5123, 2 * f[h].v, 13,);
    Z.das(4, f[40].G - f[40].v, 5123, 2 * f[40].v, l.length,);
  }
}, Ib = d => {
  h4.innerHTML += ".";
  setTimeout(d);
}, Jb = d => Math.sin(d * Math.PI * 2), Kb = d => 0.5 > d % 1 ? 1 : -1, Lb = d => d % 1 * 2 - 1, Mb = d => 2 > (d = d % 1 * 4) ? d - 1 : 3 - d, Tb = d => {
  let c = 0;
  const h = () => {
    const p = yb.createBuffer(2, 5362944, 44100);
    for (let u = 0; 2 > u; u++) {
      for (let z = u, x = p.getChannelData(u); 10725888 > z; z += 2) {
        x[z >> 1] = m[z] / 65536;
      }
    }
    xb.buffer = p;
    xb.loop = !0;
    Ib(d);
  }, k = () => {
    let p, u = 0, [z, x, E, v, B, F, A, C, b, g, r, D, G, L, M, Y, ha, ka, H, K, y] = Ca[c];
    g = g * g * 4;
    for (const W of [5513, 4562, 3891]) {
      const U = [];
      let aa = 0, ea = 0, ma, Qa, Cb;
      const Ba = new Int32Array(768 * W), Nb = 2 ** (D - 9) / W, Ob = Math.PI * 2 ** (ha - 8) / W, mb = H * W & -2;
      for (let gb = 0; 11 >= gb; ++gb) {
        for (let hb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + gb]; 32 > hb; ++hb) {
          const Eb = (32 * gb + hb) * W;
          for (var N = 0; 4 > N; ++N) {
            if (ma = 0, Db && (ma = y[Db - 1].charCodeAt(hb + 32 * N) - 40, ma += 0 < ma ? 106 : 0), ma) {
              var w;
              if (!(w = U[ma])) {
                w = ma;
                let X = void 0, ta = void 0;
                var O = W, Q = ma;
                let Pb = 0, Qb = 0;
                const Rb = 2 > c ? Lb : Jb, Sb = 2 > c ? 1 > c ? Kb : Mb : Jb, Fb = new Int32Array(C + b + g);
                for (let Fa = 0, nb = 0; C + b + g > Fa; ++Fa, ++nb) {
                  let Ga = 1;
                  C > Fa ? Ga = Fa / C : C + b > Fa || (Ga = (1 - (Ga = (Fa - C - b) / g)) * 3 ** (-r / 16 * Ga));
                  0 > nb || (nb -= 4 * O, ta = 396e-5 * 2 ** ((Q + x - 256) / 12), X = 396e-5 * 2 ** ((Q + B - 256) / 12) * (1 + (c ? 0 : 0.007200)));
                  Fb[Fa] = 80 * (Rb(Pb += ta * Ga ** (E / 32)) * z + Sb(Qb += X * Ga ** (F / 32)) * v + (A ? (2 * Math.random() - 1) * A : 0)) * Ga | 0;
                }
                w = U[w] = Fb;
              }
              for (let X = 0, ta = 2 * Eb; w.length > X; ++X, ta += 2) {
                Ba[ta] += w[X];
              }
            }
          }
          for (let X, ta = 0; W > ta; ++ta) {
            N = 0, w = 2 * (Eb + ta), ((X = Ba[w]) || Cb) && (Qa = 308e-5 * G, 1 !== c && 4 !== c || (Qa *= Math.sin(Nb * w * Math.PI * 2) * K / 512 + 0.5), Qa = 1.5 * Math.sin(Qa), aa += Qa * ea, p = (1 - L / 255) * (X - ea) - aa, ea += Qa * p, X = 4 === c ? ea : 3 === c ? p : aa, c || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5), X *= M / 32, Cb = 1e-5 < X * X, p = Math.sin(Ob * w) * Y / 512 + 0.5, N = X * (1 - p), X *= p), w < mb || (N += Ba[1 + w - mb] * 
            ka / 255, X += Ba[w - mb] * ka / 255), m[u + w] += Ba[w] = N, ++w, m[u + w] += Ba[w] = X;
          }
        }
      }
      u += Ba.length;
    }
    Ib(5 > ++c ? k : h);
  }, m = new Int32Array(10725888);
  Ib(k);
}, Ub = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), V = NO_INLINE((d, c, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * c << 8 | 255 * d), yb = new AudioContext(), xb = yb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const d in Z) {
  Z[d[0] + [...d].reduce((c, h, k) => (c * k + h.charCodeAt(0)) % 434, 0).toString(36)] = Z[d];
}
Ib(() => {
  let d = 0;
  const c = () => {
    if (2 == ++d) {
      const k = b => {
        Z.f1s();
        requestAnimationFrame(k);
        g = (b - (ua || b)) / 1e3;
        sa ? (e = 0, Aa[5] = 0) : e = 0.066 < g ? 0.066 : g;
        a += e;
        ca += g;
        ua = b;
        0 < e && (rb(), xa(), Aa[5] = 0);
        var g = sa ? q.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ra(hC.clientWidth / 1e3)) : q.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ea, -Ha,);
        0 < e && (F(), Z.b6o(36160, u), Z.v5y(0, 0, 128, 128), Z.c4s(16640), Z.cbf(!0, !1, !0, !1), Z.uae(F("b"), !1, $a(q.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, 0.3 - n.z,),),), Hb(F("c"), 0, 41), Z.c4s(256), Z.cbf(!1, !0, !0, !1), Z.uae(F("b"), !1, $a(q.translate(-n.x, -n.y, -n.z - 0.3),),), Hb(F("c"), 0, 41), Z.f1s());
        v();
        Z.b6o(36160, p);
        Z.v5y(0, 0, 2048, 2048);
        C[0](wb(g, 0.3, 55, 10));
        C[1](wb(g, 55, 177, 11));
        A();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        C[0]();
        C[1]();
        Z.uae(A("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
        Z.uae(A("b"), !1, $a(g));
        Z.ubu(A("k"), Da, Ea, Ha);
        Hb(A("c"), !wa);
        B();
        Z.ubu(B("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ca);
        sa ? Z.ubu(B("k"), 0, 0, 0) : Z.ubu(B("k"), Da, Ea, Ha);
        Z.uae(B("b"), !1, $a(g.inverse()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, u);
        Z.f1s();
      }, m = h, p = Z.c5w(), u = Z.c5w(), z = Z.c3z(), x = Z.c25(), E = Bb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}"), v = Gb(Bb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), 
      "#version 300 es\nvoid main(){}",), B = Gb(Bb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), F = Gb(E, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), A = Gb(E, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), C = (F(), Z.uae(F("a"), !1, ab(1.4, 0.59, 1e-4, 1)), B(), Z.ubh(B("q"), 3), A(), Z.ubh(A("q"), 3), Na(2, b => {
        const g = new Float32Array(16), r = Z.c25(), D = A(b ? "j" : "i");
        return Z.ubh(A(b ? "h" : "g"), b), Z.b6o(36160, p), Z.d45([0]), Z.r9l(0), Z.a4v(33984 + b), Z.b9j(3553, r), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), G => {
          G ? ($a(G, g), Z.uae(v("b"), !1, g), Z.fas(36160, 36096, 3553, r, 0), Z.c4s(256), Hb(v("c"), !wa)) : Z.uae(D, !1, g);
        };
      }));
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 1);
      Z.b6o(36160, u);
      Z.bb1(36161, z);
      Z.r4v(36161, 33189, 128, 128);
      Z.f8w(36160, 36096, 36161, z);
      Z.a4v(33987);
      Z.b9j(3553, x);
      Z.fas(36160, 36064, 3553, x, 0);
      Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Z.a4v(33987);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, m);
      Z.gbn(3553);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      try {
        const [b, g, r, D, G] = JSON.parse(localStorage.DanteSP22,);
        l.map((L, M) => L.g = L.i = L.l = M ? 0 | b[M] : 0);
        za.map((L, M) => L.l = 0 | g[M]);
        da = r;
        a = D;
        oa = G;
      } catch {
      }
      na = 0 > da ? 0 : 1 < da ? 1 : da;
      rb();
      NO_INLINE(Ab)();
      requestAnimationFrame(k);
      NO_INLINE(zb)();
    }
  }, h = new Image();
  h.onload = h.onerror = c;
  h.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      const v = [], B = M => {
        let {x:Y, y:ha, z:ka} = A[M], H = (L[0] = Y, L[1] = ha, L[2] = ka, M = "" + (A.D ? G : D), r.get(M));
        return void 0 !== H ? (Y = 3 * H, g[Y] = (g[Y++] + D[5]) / 2, g[Y] = (g[Y++] + D[6]) / 2, g[Y] = (g[Y] + D[7]) / 2) : (r.set(M, H = r.size), C.push(Y, ha, ka, L[3]), b.push(D[4]), g.push(D[5], D[6], D[7])), H;
      };
      let F = 0, A;
      const C = [], b = [], g = [], r = new Map(), D = new Int32Array(8), G = new Int32Array(D.buffer, 0, 5), L = new Float32Array(D.buffer);
      for (const M of f) {
        for (A of (L[3] = 40 === M.F ? -13 : M.H && M.F, M.s)) {
          const {x:Y, y:ha, z:ka} = Za(A);
          D[4] = 0 | A.A;
          D[5] = 32767 * Y;
          D[6] = 32767 * ha;
          D[7] = 32767 * ka;
          for (let H = 2, K = B(0), y = B(1); A.length > H; ++H) {
            v.push(K, y, y = B(H));
          }
        }
        M.s = null;
        M.v = F;
        M.G = F = v.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(C), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(g), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(b), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(v), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ib(c);
    });
    let k;
    const m = (v, B, F) => q.translate(v + Math.sin(a + 2) / 5, B + Math.sin(0.8 * a) / 3, F).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), p = Na(11, v => q.translate(Math.sin(v / 10 * Math.PI), v / 10).rotate(+v).scale(1.0001 - v / 10, 0, 1 - v / 10),), u = Na(10, v => eb(cb(db(18), p[v]).reverse(), cb(db(18), p[v + 1]), 1,)).flat(), z = P(J(t(I(20, 1, 1.15, 1), q.translate(0, -3).scale(3.5, 1, 3.5), V(0.7, 0.4, 0.25, 0.7),), t(I(20, 1, 1.3, 1), q.translate(0, -2.5).scale(2.6, 
    1, 3), V(0.7, 0.4, 0.25, 0.2),), t(I(), q.translate(4, -1.2).scale3d(2), V(0.7, 0.4, 0.25, 0.3)),),), x = P(J(t(I(), q.translate(0, -8).scale(6, 15, 2.2)), t(I(), q.translate(0, -14.1).scale(4, 13, 4)), t(I(20, 1), q.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), E = Na(7, v => t(I(6, 1), q.translate(4 * (v / 6 - 0.5), 3).scale(0.2, 3, 0.2), V(0.3, 0.3, 0.38),)).flat();
    S(() => T([ya.slice(1)], q.translate(-2).scale3d(3).rotate(90, 0)), 0);
    S(() => {
      const v = (b, g, r) => S(D => {
        D.h = () => q.translate(B() * Math.sin(3 * b + a * b) * g);
        ya.map(({x:G, z:L}) => {
          T(I(11, 1), q.translate(4 * G, 4, r + 4 * L).scale(0.8, 3, 0.8), V(0.5, 0.3, 0.7, 0.6),);
          T(I(), q.translate(4 * G, 7, r + 4 * L).scale(1, 0.3), V(0.5, 0.5, 0.5, 0.3),);
        });
        T(P(J(t(I(), q.translate(0, 0, r).scale(5, 1, 5), V(0.8, 0.8, 0.8, 0.3),), ...[-1, 1].map(G => t(I(), q.translate(5 * G, 0.2, r).rotate(-30 * G).scale(4, 1, 2), V(0.8, 0.8, 0.8, 0.3),)),),),);
        T(I(), q.translate(0, -3, r).scale(8, 2, 8), V(0.4, 0.4, 0.4, 0.3));
      }), B = () => {
        var b = l[2].i, g = 1 - l[4].i;
        return b < g ? b : g;
      }, F = (S(b => {
        b.h = () => m(-12, 4.2, 40 * na - 66);
        T(z);
        ub(q.translate(0, -3, 4));
      }), vb(q.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), vb(q.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...db(18).map(({x:b, z:g}) => [7 * b, 10 * g, 4.5 - 2 * (0 > b ? -b : b)]),), T(I(), q.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), V(0.8, 0.8, 0.8, 0.2),), ya.map(({x:b, z:g}) => T(I(6), q.translate(3 * b, 3, 15 * g).scale(0.7, 4, 0.7), V(0.6, 0.3, 0.3, 0.4),)), [-23, 22].map(b => T(I(), q.translate(0, 0, b).scale(3, 1, 8), V(0.9, 0.9, 0.9, 0.2))), [-15, 15].map((b, g) => 
      {
        T(I(), q.translate(0, 6.3, b).scale(4, 0.3, 1), V(0.3, 0.3, 0.3, 0.4));
        T(I(), q.translate(0, 1, b).scale(3, 0.2, 0.35), V(0.5, 0.5, 0.5, 0.3));
        S(r => {
          r.h = () => q.translate(0, 4.7 * -l[g + 1].g, b);
          T(E);
        });
      }), Na(5, b => Na(2, g => T(u, q.translate(18.5 * (g - 0.5), 0, 4.8 * b - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2,), V(1, 1, 0.8, 0.2),),)), T(I(), q.translate(3, 1.5, -20).scale(0.5, 2, 5), V(0.7, 0.7, 0.7, 0.2)), T(I(), q.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), V(0.75, 0.75, 0.75, 0.2),), T(I(5), q.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), V(0.6, 0.3, 0.3, 0.4),), ub(q.translate(-5.4, 1.5, -19).rotate(0, -90)), T(I(), q.rotate(0, 60).translate(14.8, 
      -1.46, -1).rotate(-30).scale(4, 0.6, 4.5), V(0.8, 0.2, 0.2, 0.5),), T(P(J(qb(t(I(6, 0, 0, 0.3), q.translate(8, -3, -4).scale(13, 1, 13), V(0.7, 0.7, 0.7, 0.2),), t(I(6), q.translate(0, -8).scale(9, 8, 8), V(0.4, 0.2, 0.5, 0.5),), t(I(6, 0, 0, 0.3), q.translate(0, -0.92).scale(13, 2, 13), V(0.8, 0.8, 0.8, 0.2),),), t(I(5), q.scale(5, 30, 5), V(0.4, 0.2, 0.6, 0.5)), t(I(5, 0, 1.5), q.translate(0, 1).scale(4.5, 0.3, 4.5), V(0.7, 0.5, 0.9, 0.2),), t(I(), q.rotate(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 
      2, 2), V(0.5, 0.5, 0.5, 0.5),), t(I(6), q.translate(15, -1.5, 4).scale(3.5, 1, 3.5), V(0.5, 0.5, 0.5, 0.5),),),),), S(b => {
        b.h = () => q.translate(0, 0.01 < l[3].g ? (5 * Math.cos(1.5 * a) + 2) * l[3].i * (1 - l[2].g) + -15 * (1 - l[3].g) : -500, 0,);
        T(I(5), q.translate(0, -0.2).scale(5, 1, 5), V(0.6, 0.65, 0.7, 0.3));
        ub(q.translate(0, 1.2));
      }), ub(q.translate(15, -2, 4)), v(0.7, 12, 35), v(1, 8.2, 55), S(b => {
        b.h = () => q.translate(B() * Math.sin(a / 1.5 + 2) * 12);
        T(P(J(qb(t(I(), q.scale(1.5, 1, 5), V(0.9, 0.9, 0.9, 0.2)), t(I(6), q.scale(4, 1, 5), V(0.9, 0.9, 0.9, 0.2)), t(I(), q.translate(0, -2).scale(2, 3.2, 1.9), V(0.3, 0.8, 0.5, 0.5),), t(I(16, 1, 0, 4), q.scale(1, 1, 1.5).rotate(0, 90), V(0.9, 0.9, 0.9, 0.2),),), t(I(), q.scale(1.3, 10, 1.3), V(0.2, 0.7, 0.4, 0.6)),),), q.translate(0, 0, 45),);
        vb(q.translate(0, 2.8, 45), [0, 0, 4.5]);
      }), S(b => {
        b.h = () => q.translate(9.8 * (1 - B()));
        T(I(3), q.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), V(0.3, 0.6, 0.6, 0.2),);
        T(I(8), q.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), V(0.8, 0.8, 0.8, 0.2),);
        T(I(), q.translate(-23, -3, 55).scale(5.2, 1.7, 3), V(0.5, 0.5, 0.5, 0.3));
        T(I(), q.translate(-23, -2.2, 62).scale(3, 1, 4), V(0.5, 0.5, 0.5, 0.3));
        ub(q.translate(-23, -0.5, 66.5));
      }), T(I(), q.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2),), S(b => {
        b.h = () => q.translate(0, Ra(1 - 5 * B()) * Ta(l[4].g, l[5].g) * Math.sin(1.35 * a) * 4);
        T(I(), q.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), V(0.7, 0.7, 0.7, 0.2),);
        T(P(J(t(I(), q.scale(3, 1.4, 2.7)), t(I(), q.scale(1.2, 8, 1.2)),),), q.translate(-33, -3, 55), V(0.7, 0.7, 0.7, 0.2),);
      }), S(b => {
        b.h = () => q.translate(0, 0, Ra(1 - 5 * B()) * Ta(l[4].g, l[5].g) * Math.sin(0.9 * a) * 8);
        T(P(J(t(I(), q.translate(-27, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2),), t(I(), q.translate(-27, -3, 55).scale(1, 3), V(0.9, 0.9, 0.9, 0.2),),),),);
        T(I(), q.translate(-39, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2));
      }), S(b => {
        b.h = () => q.translate(0, -6.5 * l[4].i);
        T(I(6), q.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), V(0.7, 0.7, 0.7, 0.4),);
      }), [...t(P(qb(t(I(), q.translate(0, -3).scale(11, 1.4, 3), V(0.9, 0.9, 0.9, 0.2),), J(t(I(6), q.rotate(90).scale(6, 8, 6), V(0.3, 0.6, 0.6, 0.3)), t(I(4, 0, 0.01), q.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), V(0.3, 0.6, 0.6, 0.3),), t(I(6), q.rotate(90).scale(5, 12, 5), V(0.3, 0.6, 0.6, 0.3),), ...[5, 0, -5].map(b => t(I(5), q.translate(b, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), V(0.3, 0.6, 0.6, 0.3),)),),),), q,)]), A = (T(F, q.translate(-53, 0, 55)), T(I(6), q.translate(-61.3, 
      -2.4, 49).scale(3, 1, 5), V(0.4, 0.6, 0.6, 0.3)), T(I(7), q.translate(-57, -2.6, 46).scale(4, 1, 4), V(0.8, 0.8, 0.8, 0.3)), ub(q.translate(-55, -1.1, 46).rotate(0, 90)), S(b => {
        b.h = () => q.translate(-75, (1 - l[5].i) * (1 - l[6].g) * 3, 55).rotate(180 * (1 - l[5].i) + ja, 0,);
        T(F);
      }, 2), T(I(), q.translate(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), V(0.7, 0.7, 0.7, 0.2),), T(I(3, 0, -0.5), q.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), V(0.8, 0.8, 0.8, 0.2),), T(P(J(qb(t(I(), q.translate(-100, -2.5, 55).scale(8, 1, 8), V(0.8, 0.8, 0.8, 0.2),), t(I(), q.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), V(0.8, 0.8, 0.8, 0.2),), t(I(), q.translate(-100, -2.6, 70).scale(3, 1.1, 7), V(0.8, 0.8, 0.8, 0.2),), t(I(), q.translate(-96, -2.6, 73).rotate(0, 
      45).scale(3, 1.1, 5), V(0.8, 0.8, 0.8, 0.2),), t(I(6), q.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), V(0.6, 0.6, 0.6, 0.3),), t(I(), q.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), V(0.8, 0.8, 0.8, 0.2),), t(I(), q.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), V(0.8, 0.8, 0.8, 0.2),),), t(I(8), q.translate(-100, -1, 55).scale(7, 0.9, 7), V(0.3, 0.3, 0.3, 0.4),), t(I(8), q.translate(-100, -2, 55).scale(4, 0.3, 4), V(0.4, 0.4, 0.4, 0.5),), t(I(8), q.translate(-100, 
      -3, 55).scale(0.6, 1, 0.6), V(0.4, 0.4, 0.4, 0.5),),),), q,), vb(q.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), vb(q.translate(-89, 0.2, 80), [0, 0, 6]), T(P(J(t(I(), q.translate(-100, 1, 63).scale(7.5, 4), V(0.5, 0.5, 0.5, 0.4),), t(I(), q.translate(-100, 0, 70).scale(2, 2, 10), V(0.5, 0.5, 0.5, 0.4),), t(I(20, 1), q.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), V(0.5, 0.5, 0.5, 0.4),),),),), S(b => {
        b.h = () => q.translate(-99.7, 5.3 * -l[6].g - 2, 63.5);
        T(E);
      }), ya.map(({x:b, z:g}) => {
        T(I(6), q.translate(7 * b - 100, -3, 7 * g + 55).scale(1, 8.1), V(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4].map(r => T(I(6), q.translate(7 * b - 100, r, 7 * g + 55).scale(1.3, 0.5, 1.3), V(0.4, 0.2, 0.2, 0.8),));
      }), Na(7, b => {
        T(I((23 * b + 1) % 5 + 5, 0, 0.55), q.translate(5 * Math.sin(b) - 101 + b, -2.3 - b, 44.9 - 2.8 * b).scaleSelf(5 + b / 2, 1 + b / 6, 5 + b / 3,), V(0.5 - b / 17, 0.5 - (1 & b) / 9, 0.6, 0.3),);
      }), T(I(), q.translate(-87, -9.5, 24).scale(7, 1, 3), V(0.4, 0.5, 0.6, 0.4)), T(I(4), q.translate(-86, -9.2, 27).scale(5, 1, 5), V(0.5, 0.6, 0.7, 0.3)), T(I(12, 1), q.translate(-86, -9, 31).scale(1.5, 1, 1.5), V(0.3, 0.3, 0.4, 0.1),), ub(q.translate(-86, -7.5, 31)), S(b => {
        b.h = () => q.translate(0, 3.5 * (1 - Oa(l[6].g, l[7].g)) + Ta(l[7].i, l[6].i) * Math.sin(a) * 5,);
        [0, 12, 24].map(g => T(I(), q.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.2, 0.5, 0.6, 0.2),));
      }), S(b => {
        b.h = () => q.translate(0, Ta(l[7].i, l[6].i) * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + 1) * Ta(l[7].i, l[6].i),);
        [6, 18].map(g => T(I(), q.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.1, 0.4, 0.5, 0.2),));
      }), T(P(J(qb(t(I(), q.scale(11, 1, 13), V(0.3, 0.4, 0.6, 0.3)), t(I(5), q.translate(0, 0, -7).scale(2, 1.2, 2), V(0.2, 0.4, 0.7, 0.3),), t(I(5), q.scale(9, 1.2, 9), V(0, 0.2, 0.3, 0.5)),), t(I(5), q.scale(5.4, 5, 5.4), V(0, 0.2, 0.3, 0.5)),),), q.translate(-38.9, -11.3, 17),), ub(q.translate(-38.9, -9.6, 10)), S(b => {
        b.h = () => q.translate(0, -7.3 * l[7].i);
        T(P(J(qb(t(I(5), q.translate(0, 2).scale(5, 7, 5).skewY(8), V(0.2, 0.4, 0.5, 0.5),), t(I(5), q.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), V(0.25, 0.35, 0.5, 0.5),), t(I(5), q.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), V(0.35, 0.3, 0.5, 0.5),),), t(I(5), q.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), V(0.2, 0.4, 0.5, 0.5),),),), q.translate(-38.9, -11.3, 17),);
        vb(q.translate(-39.1, -0.6, 17).rotate(11), ...db(15).map(({x:g, z:r}) => [3 * g, 3 * r, 1.2]),);
      }), ya.map(({x:b, z:g}) => {
        k = q.translate(9 * b - 38.9, -7.3, 11 * g + 17);
        T(I(14, 1), k.scale(1, 4), V(0.25, 0.25, 0.25, 1));
        [1.5, 8].map(r => T(I(17, 1), k.translate(0, r - 4).scale(1.5, 0.5, 1.5), V(0.6, 0.6, 0.6, 0.3),));
      }), T(P(J(qb(t(I(6), q.translate(0, 0, -36).scale(15, 1.2, 15), V(0.7, 0.7, 0.7, 0.3),), t(I(), q.translate(0, 0, -18).scale(4, 1.2, 6), V(0.45, 0.4, 0.6, 0.3),),), ...Na(6, b => Na(6, g => t(I(6), q.translate(4.6 * g - 12 + 2 * (1 & b), 0, 4.6 * b - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2,), V(0.7, 0.7, 0.7, 0.3),))).flat(),),), q.translate(-38.9, -11.3, 17),), vb(q.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]), T(I(5), q.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), V(0.8, 0.1, 0.25, 0.4),), ub(q.translate(-84, -0.5, 85).rotate(0, 45)), S(b => {
        b.h = () => m(-123, 1.4, 55 + -65 * oa);
        ub(q.translate(0, -3, -4).rotate(0, 180));
        T(z);
      }), vb(q.translate(-115, 0.2, -12), [0, 0, 3.5]), P(J(t(I(), q.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), V(0.25, 0.25, 0.35, 0.3),), t(I(3), q.translate(0, 0, -5.5).scale(3, 2), V(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2].map(b => t(I(), q.translate(b, -0.5, 1).scale(0.14, 0.3, 6.5), V(0.7, 0.2, 0, 0.3),)),),)), C = (S(b => {
        b.h = () => q.translate(0, -2, Ta(l[10].g, l[11].g) * Pa(Math.sin(1.1 * a)) * -8.5 + 10);
        Na(2, g => T(A, q.translate(9 * g - 110 + (1 & g), 1.7, -12)));
      }), S(b => {
        b.h = () => q.translate(0, -2, Ta(l[10].g, l[11].g) * Pa(Math.sin(2.1 * a)) * -8.5 + 10);
        Na(2, g => T(A, q.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
      }), S(b => {
        b.h = () => q.translate(0, -2, -8.5 * Oa((1 - l[10].g) * (1 - Ta(l[10].g, l[11].g)), Ta(l[10].g, l[11].g) * Pa(Math.sin(1.5 * a)),) + 10,);
        Na(3, g => T(A, q.translate(9 * g - 106, 1.7, -12)));
      }), T(P(J(qb(t(I(), q.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), t(I(), q.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),), ...Na(4, b => t(I(), q.translate(13 + 9 * b + (1 & b), -0.8, 9).scale(1.35, 1.35, 9),)), ...Na(3, b => t(I(), q.translate(17 + 9 * b, -0.8, 9).scale(1.35, 1.35, 9)),),),), q.translate(-123, 0, -12), V(0.5, 0.5, 0.6, 0.2),), T(I(5), q.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), V(0.25, 0.25, 0.35, 1),), T(I(), q.translate(-116, -2.6, -12).scale(3.2, 
      1.1, 4).skewX(3), V(0.8, 0.8, 0.8, 0.2),), T(I(6), q.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), V(0.6, 0.5, 0.7, 0.2),), ub(q.translate(-116, -1.4, -18).rotate(0, 180)), Na(3, b => {
        T(x, q.translate(12 * b - 109, -9, -12), V(0.6, 0.6, 0.6, 0.3));
        T(x, q.translate(-77, -9, -12 * b - 20).rotate(0, 90), V(0.6, 0.6, 0.6, 0.3),);
      }), T(P(J(t(I(12), q.translate(-77, -13.9, -12).scale(4, 18.2, 4), V(0.7, 0.7, 0.7, 0.2),), t(I(), q.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), V(0.4, 0.5, 0.6, 0.2),), t(I(), q.translate(-77, 0, -14).scale(1.5, 2.2, 2), V(0.4, 0.5, 0.6, 0.2),), t(I(12), q.translate(-77, 2.8, -12).scale(3, 5, 3), V(0.4, 0.5, 0.6, 0.2),),),),), T(I(), q.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), V(0.6, 0.6, 0.6, 0.3),), T(I(), q.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), V(0.6, 0.6, 0.6, 0.3),), 
      T(I(), q.translate(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), V(0.6, 0.6, 0.6, 0.3),), T(P(J(t(I(), q.translate(-93, -5.8, -40).scale(9, 1, 5), V(0.8, 0.8, 0.8, 0.1),), t(I(9), q.translate(-98, -5.8, -40).scale(3, 8, 3), V(0.7, 0.7, 0.7, 0.2),),),),), T(I(9), q.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), V(0.5, 0.5, 0.5, 0.3),), ub(q.translate(-98, -4.4, -40).rotate(0, 90)), vb(q.translate(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]), T(P(J(qb(t(I(6, 0, 0, 0.6), q.translate(-100, 
      0.7, 105.5).scale(8, 1, 11), V(0.7, 0.7, 0.7, 0.2),), t(I(), q.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), V(0.7, 0.7, 0.7, 0.2),), t(I(), q.translate(-91.2, 0.7, 107).scale(3, 1, 3.3), V(0.7, 0.7, 0.7, 0.2),),), t(I(5), q.translate(-100, 0.7, 113).scale(4, 3, 4), V(0.7, 0.7, 0.7, 0.2),),),),), Na(4, b => S(g => {
        g.h = () => {
          const r = Ta(l[8].i, l[12].i);
          return q.translate((2 < b ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * b) * (3 + b / 3) + 0.7, 115 + (1 & b ? -1 : 1) * (1 - l[8].i) * (1 - l[12].i) * -7 + (0.05 > r ? 0.05 : r) * Math.cos(1.3 * a + 7 * b) * (4 - 2 * (1 - b / 3)),);
        };
        T(I(6), q.translate(-14.6 - 4.8 * b - (2 < b ? 2 : 0), -b / 2.3, -21.5).scale(2.6, 1, 2.5), V(0.5 - b / 8, b / 12 + 0.5, 0.7, 0.3),);
      })), S(b => {
        b.h = () => {
          const g = Ta(l[8].i, l[12].i);
          return q.translate(2.5 * (1 - g) - 139.7, -3 * (1 - l[8].g) + g * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
        };
        T(P(J(t(I(10), q.scale(6, 2, 6), V(0.1, 0.6, 0.5, 0.3)), t(I(10), q.scale(3.3, 6, 3.3), V(0.1, 0.6, 0.5, 0.5)),),),);
        k = q.translate(-7.5).rotate(0, 90);
        T(I(15, 1), k.scale(3, 2.3, 3), V(0.4, 0.4, 0.4, 0.3));
        T(I(10), k.scale(2, 2.5, 2), V(0.3, 0.8, 0.7, 0.3));
        T(I(5), k.scale(1, 3), V(0.5, 0.5, 0.5, 0.5));
        ub(k.translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => T(u, q.rotate(90 * -g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3), V(1, 1, 0.8, 0.2),));
        vb(q.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      }), [-1, 1].map(b => {
        T(I(12, 1), q.translate(-7.5 * b - 100, 3.7, 96).scale(0.8, 4, 0.8), V(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5].map(g => T(I(15, 1), q.translate(-7.5 * b - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), V(0.5, 0.24, 0.2, 0.4),));
        T(u, q.translate(-5 * b - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * b - 90), V(1, 1, 0.8),);
        T(P(J(t(I(), q.translate(-4 * b, 3.5, -0.5).scale(4, 4, 0.7), V(0.5, 0.5, 0.5, 0.4),), t(I(), q.scale(3, 3, 10), V(0.6, 0.24, 0.2, 0.5)), t(I(28, 1), q.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), V(0.6, 0.24, 0.2, 0.5),), t(I(5), q.translate(-5.3 * b, 7).rotate(90, 0).scale(1.7, 5, 1.7), V(0.6, 0.24, 0.2, 0.5),), t(I(5), q.translate(-5.3 * b, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), V(0.6, 0.24, 0.2, 0.5),),),), q.translate(b - 100, 0.7, 97),);
      }), S(b => {
        b.h = () => q.translate(-100, 0.6 - 6 * l[12].g, 96.5).scale(0.88, 1.2);
        T(E);
      }), [...t(I(25, 1), q.scale(8, 1, 8), V(0.45, 0.45, 0.45, 0.2)), ...t(I(5), q.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2),),]);
      S(b => {
        b.h = () => q.translate(-80, 1, 106).rotate(0, 40 + fa);
        T(P(J(t(I(25, 1), q.scale(8, 1, 8), V(0.45, 0.45, 0.45, 0.2)), t(I(), q.translate(0, 0, -5.5).scale(1.5, 3, 2.5), V(0.45, 0.45, 0.45, 0.2),),),),);
        T(I(8), q.translate(0, 2).scale(3, 1.5, 3), V(0.7, 0.7, 0.7, 0.1));
        T(I(5), q.translate(0, 2).scale(1, 2), V(0.3, 0.3, 0.3, 0.2));
        vb(q.translate(0, 3), ...db(10).map(({x:g, z:r}) => [5.6 * g, 5.6 * r, 2.5]),);
      });
      S(b => {
        b.h = () => q.translate(-64, 1, 106).rotate(0, ia);
        T(P(J(t(I(25, 1), q.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3),), t(I(), q.scale(9, 5, 2), V(0.3, 0, 0, 0.3)),),),);
        T(C);
        [-1, 1].map(g => T(u, q.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), V(1, 1, 0.8),));
      });
      S(b => {
        b.h = () => q.translate(-48, 1, 106).rotate(0, 180 - ia);
        T(P(J(t(I(25, 1), q.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3),), t(I(), q.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)), t(I(), q.translate(0, 0, 7).scale(2, 5, 9), V(0.3, 0, 0, 0.3),),),),);
        T(C);
      });
      S(b => {
        b.h = () => q.translate(-48, 1, 90).rotate(0, 270 + ia);
        T(P(J(t(I(25, 1), q.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3),), t(I(), q.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)), t(I(), q.translate(0, 0, -7).scale(2, 5, 9), V(0.3, 0, 0, 0.3),),),),);
        T(C);
      });
      T(I(), q.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), V(0.7, 0.7, 0.7, 0.2));
      T(I(), q.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), V(0.7, 0.7, 0.7, 0.2));
      T(I(), q.translate(-39, 0.4, 90).scale(2, 1, 2), V(0.7, 0.7, 0.7, 0.3));
      T(I(), q.translate(-34.2, 0.4, 90).scale(3, 1, 3), V(0.7, 0.7, 0.7, 0.3));
      ub(q.translate(-34, 2.7, 96).rotate(-12, 0));
      T(I(5), q.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), V(0.2, 0.5, 0.5, 0.6),);
      [V(0.1, 0.55, 0.45, 0.2), V(0.2, 0.5, 0.5, 0.3), V(0.3, 0.45, 0.55, 0.4)].map((b, g,) => S(r => {
        r.h = () => q.translate(0, (1 - l[13].i) * (1 - l[14].i) * (g ? 0 : 3) + Ta(l[13].i, l[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,);
        T(I(), q.translate(-23.5, 0.5, 90 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), b,);
        2 === g && T(I(), q.translate(-29.1, 0.4, 90).scale(2.1, 1, 3), V(0.7, 0.7, 0.7, 0.3),);
        1 === g && T(I(), q.translate(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), V(0.6, 0.6, 0.7, 0.3),);
      }));
      T(P(J(t(I(6, 0, 0, 0.3), q.translate(0, -0.92, 95).scale(14, 2, 14), V(0.8, 0.8, 0.8, 0.2),), t(I(5), q.translate(0, 0, 95).scale3d(6), V(0.3, 0.3, 0.3, 0.5),),),),);
      [8, -6.1].map((b, g) => Na(3, r => T(x, q.translate(6 * r - 6, b - (1 & r), 111 - 0.2 * (1 & r) - g), 1 & r ? V(0.5, 0.5, 0.5, 0.3) : V(0.35, 0.35, 0.35, 0.5),),));
      [-1, 1].map(b => T(u, q.translate(-8 * b, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * b + 90), V(1, 1, 0.8),));
      ub(q.translate(0, 1.7, 82).rotate(0, 180));
      T(I(5), q.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), V(0.5, 0.3, 0.3, 0.4),);
      T(P(J(qb(t(I(), q.translate(0, 16, 110.5).scale(12, 1, 3), V(0.5, 0.3, 0.3, 0.4),), t(I(), q.translate(0, 16, 111).scale(3, 1, 3.8), V(0.5, 0.3, 0.3, 0.4),),), t(I(5), q.translate(0, 16, 103.5).scale(5.5, 5, 5.5), V(0.5, 0.3, 0.3, 0.4),),),),);
      T(I(6), q.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), V(0.5, 0.6, 0.7, 0.3),);
      T(I(), q.translate(0, 16, 129).scale(1.5, 1, 2), V(0.5, 0.6, 0.7, 0.3));
      T(I(7), q.translate(0, 16.2, 133).scale(5, 1, 5), V(0.4, 0.5, 0.6, 0.4));
      S(b => {
        b.h = () => {
          const g = Math.sin(a);
          return q.translate(-2 * g).rotate(25 * g);
        };
        T(I(3), q.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), V(0.5, 0.3, 0.3, 0.4),);
        [22, 30].map(g => {
          T(I(6), q.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), V(0.7, 0.7, 0.7, 0.4),);
          T(I(), q.translate(0, 6.2, g + 95).scale(0.5, 11, 0.5), V(0.5, 0.3, 0.3, 0.4),);
        });
      });
      S(b => {
        b.h = () => {
          const g = Ta(Ta((l[14].g + l[14].i) / 2, l[13].i), (l[15].g + l[15].i) / 2,);
          return q.translate(0, 16 * g, 8.5 * Ra(2 * g - 1) + 95);
        };
        T(I(5), q.scale(5, 1.1, 5), V(0.5, 0.3, 0.3, 0.4));
        T(I(5), q.scale(5.5, 0.9, 5.5), V(0.25, 0.25, 0.25, 0.4));
        ub(q.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(q.translate(0, 3, 95), ...db(9).map(({x:b, z:g}) => [9 * b, 9 * g, 4]),);
      vb(q.translate(0, 19, 134), [0, 0, 3.5]);
    });
    S(() => {
      [0, 180].map(B => T(u, q.rotate(0, B).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), V(1, 1, 0.8),));
      T(fb(20), q.translate(0, 1).scale(0.5, 0.5, 0.5), V(1, 0.3, 0.4));
      const v = t(P(J(I(15, 1), t(I(), q.translate(0, 0, 1).scale(2, 2, 0.5)),),), q.rotate(-90, 0).scale(0.1, 0.05, 0.1), V(0.3, 0.3, 0.3),);
      [-1, 1].map(B => T(v, q.translate(0.2 * B, 1.2, 0.4).rotate(0, 20 * B, 20 * B)));
      T(I(), q.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), V(0.3, 0.3, 0.3));
      T(fb(20), q.scale(0.7, 0.8, 0.55), V(1, 0.3, 0.4));
    });
    [-1, 1].map(v => S(() => {
      T(I(10, 1), q.translate(0.3 * v, -0.8).scale(0.2, 0.7, 0.24), V(1, 0.3, 0.4));
    }));
    S(() => {
      T(I(6, 1), q.scale(0.13, 1.4, 0.13), V(0.3, 0.3, 0.5, 0.1));
      T(I(8, 1), q.translate(0, 1).scale(0.21, 0.3, 0.21), V(1, 0.5, 0.2));
      T(I(3), q.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), V(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    S(() => {
      T(I(6).slice(0, -1), q.scale(0.77, 1, 0.77), V(1, 0.3, 0.5));
    }, 0);
    S(() => {
      T(fb(30, 24, (v, B, F) => {
        const A = B / 24, C = v * Math.PI * 2 / 30, b = A ** 0.6 * Math.PI / 2;
        v = A * A * Math.sin(v * Math.PI * 14 / 30) / 4;
        return 23 === B ? {x:F.D = 0, y:-0.5, z:0,} : {x:Math.cos(C) * Math.sin(b), y:Math.cos(A * Math.PI) - A - v, z:Math.sin(C) * Math.sin(b) + Math.sin(v * Math.PI * 2) / 4,};
      }), q.scale3d(0.7), V(1, 1, 1),);
      [-1, 1].map(v => T(fb(12), q.translate(0.16 * v, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls: <b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n');

