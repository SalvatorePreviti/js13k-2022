let aa = 0, ca = 0, a = 0, ea = 0, fa = 0, ia = 0, ja = 0, ka = 0, ma = 0, na = 0, oa = 0, pa = 0, d = 0.066, qa = 1, ra, ua, va, wa, xa;
const ya = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], f = [], l = [], za = [], Aa = [], Ca = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], 
[100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], n = {x:0, y:0, z:0,};
var Da = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180, r = new DOMMatrix(), La = new Float32Array(16), Ma = new Float32Array(624), Na = (c, b) => Array.from(Array(c), (h, k) => b(k)), Oa = (c, b) => b < c ? c : b, Pa = c => 0 > c ? -c : c, Ra = c => 0 > c ? 0 : 1 < c ? 1 : c, Sa = (c, b, h) => c + (b - c) * (0 > h ? 0 : 1 < h ? 1 : h), Ta = (c, b) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > b ? 0 : 1 < b ? 1 : b)), Ua = c => Math.atan2(Math.sin(c *= Ka), Math.cos(c)) / Ka, Va = (c, b, h) => ((c *= Ka) + (2 * (b = 
(b * Ka - c) % (2 * Math.PI)) % (2 * Math.PI) - b) * (0 > h ? 0 : 1 < h ? 1 : h)) / Ka, Wa = (c, b, h, k) => Sa(c + (0 > b - c ? -1 : 1) * Oa(0, Pa(b - c) ** 0.9 - h) * k * 2, b, k / 7,), Xa = ({x:c, y:b, z:h}) => Math.hypot(c - n.x, b - n.y, h - n.z), Ya = ({x:c, y:b, z:h}, k) => c * k.x + b * k.y + h * k.z, Za = c => {
  let b = 0, h = 0, k = 0, m, p = c.at(-1);
  for (m of c) {
    b += (p.y - m.y) * (p.z + m.z), h += (p.z - m.z) * (p.x + m.x), k += (p.x - m.x) * (p.y + m.y), p = m;
  }
  return m = Math.hypot(b, h, k), b /= m, h /= m, k /= m, {x:b, y:h, z:k, w:b * p.x + h * p.y + k * p.z,};
}, $a = (c, b = La, h = 0,) => (h *= 16, b[h++] = c.m11, b[h++] = c.m12, b[h++] = c.m13, b[h++] = c.m14, b[h++] = c.m21, b[h++] = c.m22, b[h++] = c.m23, b[h++] = c.m24, b[h++] = c.m31, b[h++] = c.m32, b[h++] = c.m33, b[h++] = c.m34, b[h++] = c.m41, b[h++] = c.m42, b[h++] = c.m43, b[h] = c.m44, b), ab = (c, b, h, k,) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (k + h) / (h - k), -1, 0, 0, 2 * k * h / (h - k), 0], bb = (c, b, h) => (c.D = h, c.A = b, c), cb = (c, b, h = c.A) => bb(c.map(k => {
  let m, p;
  return {x:k, y:m, z:p} = k, {x:k, y:m, z:p} = b.transformPoint({x:k, y:m, z:p,}), {x:k, y:m, z:p,};
}), h, c.D,), u = (c, b, h) => c.map(k => cb(k, b, h)), db = (c, b = 0) => Na(c, h => {
  const k = Math.cos(2 * Math.PI * h / c);
  return {x:Math.sin(2 * Math.PI * h / c), y:0, z:0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - b : k + b,};
}), eb = (c, b, h) => c.map((k, m, {length:p}) => bb([k, b[p - m - 1], b[p - (m + 1) % p - 1], c[(m + 1) % p]], c.A, h,)), I = (c, b, h = 0, k,) => (c = c ? db(c, k) : ya, k = cb(c, r.translate(0, 1).scale3d(0 < h ? h : 1)), c = cb(c, r.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...eb(c, k, b), k, c]), fb = (c, b = c, h = (k, m) => (m *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / c) * Math.sin(m), y:Math.cos(m), z:Math.sin(k) * Math.sin(m),})) => {
  const k = [];
  for (let m = 0; c > m; m++) {
    for (let p = 0; b > p; p++) {
      const w = bb([], 0, 1);
      k.push(w);
      w.push(h(m, p, w));
      p && w.push(h((m + 1) % c, p, w));
      b - 1 > p && w.push(h((m + 1) % c, p + 1 % b, w));
      w.push(h(m, p + 1 % b, w));
    }
  }
  return k;
}, ib = (c, b) => {
  var h, k, m, p = b.C;
  for (var w = 0; p.length > w; ++w) {
    if (-0.00008 > (h = Ya(c, p[w]) - c.w) ? m = b : 8e-5 < h && (k = b), m && k) {
      k = [];
      m = [];
      p = b.C;
      w = b.B;
      let y = p.at(-1), t = Ya(c, y) - c.w;
      for (const v of p) {
        h = Ya(c, v) - c.w, 8e-5 > t && m.push(y), -0.00008 < t && k.push(y), (8e-5 < t && -0.00008 > h || -0.00008 > t && 8e-5 < h) && (t /= h - t, y = {x:y.x + (y.x - v.x) * t, y:y.y + (y.y - v.y) * t, z:y.z + (y.z - v.z) * t,}, k.push(y), m.push(y)), y = v, t = h;
      }
      return {o:2 < k.length && {C:bb(k, p.A, p.D), B:w, u:b,}, m:2 < m.length && {C:bb(m, p.A, p.D), B:w, u:b,},};
    }
  }
  return {o:k, m,};
}, jb = (c, b, h = Za(b.C)) => {
  let k, m, p;
  return c ? ({o:k, m} = ib(c, b), k || m || c.s.push(b), k && (c.o = jb(c.o, k, h)), m && (c.m = jb(c.m, m, h))) : ({x:k, y:m, z:h, w:p} = h, c = {x:k, y:m, z:h, w:p, s:[b], o:0, m:0,}), c;
}, kb = (c, b, h) => {
  const k = [], m = (p, w) => {
    let {o:y, m:t} = ib(p, w);
    y || t || (0 < h * Ya(p, b) ? y = w : t = w);
    y && (p.o ? m(p.o, y) : k.push(y));
    t && p.m && m(p.m, t);
  };
  for (const p of b.s) {
    m(c, p);
  }
  return k;
}, lb = (c, b) => c && (b(c), lb(c.o, b), lb(c.m, b)), ob = c => c.length ? c.reduce((b, h) => jb(b, {C:h, B:0, u:0,}), 0) : c, pb = c => (lb(c, b => {
  const h = b.m;
  b.m = b.o;
  b.o = h;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const k of b.s) {
    k.B = !k.B;
  }
}), c), qb = (...c) => c.reduce((b, h) => {
  const k = [];
  if (b = ob(b), h) {
    h = ob(h);
    lb(b, m => m.s = kb(h, m, 1));
    lb(h, m => k.push([m, kb(b, m, -1)]));
    for (let [m, p] of k) {
      for (const w of p) {
        jb(b, w, m);
      }
    }
  }
  return b;
}), J = (c, ...b) => pb(qb(pb(ob(c)), ...b)), O = c => {
  const b = new Map(), h = new Map(), k = m => {
    let p;
    return m.u && ((p = b.get(m.u)) ? (h.delete(p), m = k(m.u)) : b.set(m.u, m)), m;
  };
  return lb(c, m => {
    for (const p of m.s) {
      h.set(k(p), p.B);
    }
  }), Array.from(h, ([{C:m}, p]) => {
    const w = m.map(({x:y, y:t, z:v}) => ({x:y, y:t, z:v,}));
    return bb(p ? w.reverse() : w, m.A, m.D);
  });
}, Q = (c, b, h) => c + (b - c) * Ra(1 - Math.exp(-h * d)), rb = () => {
  const c = Ta(l[12].g, l[13].g);
  ja = Sa(Q(ja, 0, 1), Ua(ja + 60 * d), l[5].g - l[6].i,);
  fa = Sa(Q(fa, 0, 5), Ua(fa + 56 * d), c,);
  ia = Sa(Q(ia, 0, 4), Ua(ia + 48 * d), c,);
  na = Q(na, l[9].i, 0.2 + 0.3 * Pa(2 * l[9].i - 1));
  ma = Q(ma, ka ? ma + (-9 - ma) * Ra(1.5 * d) : Ra(a / 3), 1,);
  qa && a > qa && (qa = 0, h4.innerHTML = "");
  l[0].l && 0.8 < l[0].g && (13 > aa ? (1 / 0 > qa && (qa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), l[0].l = 0) : ka || (1 / 0 > qa && (qa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ka = 1));
  for (const b of f) {
    b.h && (b.j = b.h());
  }
  for (const b of l) {
    b.h();
  }
  for (const b of za) {
    b.h();
  }
}, sb = () => {
  h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[aa = za.reduce((c, {l:b}) => c + b, 0)];
}, tb = () => {
  localStorage.DanteSP22 = JSON.stringify([l.map(({l:c}) => c), za.map(({l:c}) => c), ea, a, na,]);
}, R = (c, b = 1) => {
  const h = va;
  b = {j:r, F:f.length, H:b, s:[],};
  return f.push(va = b), c(b), va = h, b;
}, T = (c, b = r, h) => va.s.push(...u(c, b, h)), ub = c => {
  const b = va, h = l.length, k = {l:0, g:0, i:0, u:b, h() {
    const m = k.l, p = k.g, w = k.i, y = b.j.multiply(c);
    k.I = y;
    2.9 > Xa(y.transformPoint()) && Aa[5] && (0.3 > p || 0.7 < p) && (k.l = m ? 0 : 1, h && 1 / 0 > qa && (qa = a + 1, h4.innerHTML = "* click *"), ea = h, tb());
    k.g = Q(p, m, 4);
    k.i = Q(w, m, 1);
    k.j = y.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  l.push(k);
  T(I(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
  T(I(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
  T(I(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), V(0.5, 0.5, 0.4));
}, vb = (c, ...b) => {
  let h = -1, k = 0, m = 0, p = 0, w = 0, y = 0, t = 1, v = 3;
  const A = {l:0, h() {
    if (!A.l) {
      let sa, L, K, z, M, x, N = 1, P = 1 / 0, W;
      for (const U of E) {
        var {x:B, z:H, w:S} = U;
        H = (B = Math.hypot(g - B, q - H)) - S;
        W ||= B < S;
        0 < H && P > H && (P = H, e = U);
        var ha = B / S;
        N = N < ha ? N : ha;
      }
      W || ({x:sa, z:L, w:K} = e, z = g - sa, M = q - L, x = Math.hypot(z, M), ba = Math.atan2(-M, z), t && (m = (Math.random() - 0.5) * Math.PI / 2, v = Oa(1, v / (1 + Math.random()))), ba += m, h = -Math.cos(ba), k = Math.sin(ba), 0.1 < x && (x = (x < K ? x : K) / (x || 1), g = z * x + sa, q = M * x + L));
      t = W;
      v = Q(v, 3 + 6 * (1 - N), 3 + N);
      C = Q(C, g = Q(g, g + h, v), v);
      G = Q(G, q = Q(q, q + k, v), v);
      p = Va(p, Math.atan2(C - w, G - y) / Ka - 180, 3 * d,);
      w = C;
      y = G;
      var ba = (A.j = D.j.multiply(c.translate(C, 0, G).rotateSelf(0, p, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.5 > Xa(ba) && (A.l = 1, ha = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][aa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      qa && (qa = a + (aa && 12 > aa ? 5 : 7), h4.innerHTML = ha), sb(), tb());
    }
    A.l && (A.j = f[2].j.translate(F % 4 * 1.2 - 1.7 + Math.sin(a + F) / 7, -2, 1.7 * (F / 4 | 0) - 5.5 + Pa(F % 4 - 2) + Math.cos(a / 1.5 + F) / 6,));
  },}, D = va, F = za.length, E = b.map(([B, H, S]) => ({x:B, z:H, w:S,}));
  let e = E[0], {x:g, z:q} = e, C = g, G = q;
  za.push(A);
}, wb = (c, b, h, k) => {
  let m = 0, p = 0, w = 0, y = 1 / 0, t = -1 / 0, v = 1 / 0, A = -1 / 0, D = 1 / 0, F = -1 / 0;
  const E = 1.1 * (h - b), e = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, h))).multiplySelf(c).invertSelf();
  return b = Na(8, g => (g = e.transformPoint({x:4 & g ? 1 : -1, y:2 & g ? 1 : -1, z:1 & g ? 1 : -1,}), m -= g.x = (E * g.x | 0) / E / g.w, p -= g.y = (E * g.y | 0) / E / g.w, w -= g.z = (E * g.z | 0) / E / g.w, g)), h = r.rotate(298, 139).translateSelf(m / 8, p / 8, w / 8), cb(b, h).map(({x:g, y:q, z:C}) => {
    y = y < g ? y : g;
    t = g < t ? t : g;
    v = v < q ? v : q;
    A = q < A ? A : q;
    D = D < C ? D : C;
    F = C < F ? F : C;
  }), D *= 0 > D ? k : 1 / k, F *= 0 < F ? k : 1 / k, r.scale(2 / (t - y), 2 / (A - v), 2 / (D - F)).translateSelf((t + y) / -2, (A + v) / -2, (D + F) / 2,).multiplySelf(h);
}, zb = () => {
  let c = !0, b, h, k, m, p, w, y, t, v, A, D, F;
  const E = () => {
    ra || !c ? xb.disconnect() : xb.connect(yb.destination);
    b4.innerHTML = "Music: " + c;
  }, e = (g = !1) => {
    if (ra !== g) {
      ra = g;
      try {
        g ? document.exitPointerLock() : xb.start();
      } catch {
      }
      wa = 0;
      document.body.className = g ? "l m" : "l";
      E();
      sb();
    }
  };
  oncontextmenu = () => !1;
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b1.onclick = () => e();
  b2.onclick = () => {
    e();
    wa = 1;
  };
  b4.onclick = () => {
    c = !c;
    E();
  };
  b5.onclick = () => e(!0);
  onclick = g => {
    F = 1;
    ra || (g.target === hC && (Aa[5] = !0), wa && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:g, target:q, type:C, repeat:G}) => {
    G || ((G = !!C[5] && q === document.body) && ("Escape" === g || "Enter" === g && ra) ? ra && !F || e(!ra) : 5 === (C = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[g]) ? G && (Aa[C] = 1) : Aa[C] = G);
  };
  onmousemove = ({movementX:g, movementY:q}) => {
    wa && (g || q) && (Ja += 0.1 * g, Ia += 0.1 * q);
  };
  hC.ontouchstart = g => {
    if (!ra) {
      for (let {pageX:q, pageY:C, identifier:G} of g.changedTouches) {
        wa && q > hC.clientWidth / 2 ? void 0 === t && (t = G, w = q, y = C, v = 0, A = Ja, D = Ia) : void 0 === m && (m = G, h = q, k = C, p = 0);
      }
      b = ca;
    }
  };
  hC.ontouchmove = g => {
    if (!ra) {
      for (let {pageX:G, pageY:B, identifier:H} of g.changedTouches) {
        var q, C;
        t === H && (Ja = A + (G - w) / 2.3, Ia = D + (B - y) / 2.3, v = 1);
        m === H && (0.4 < (C = (q = 0 > (H = (h - G) / 20) ? -1 : 1) * H) && (p = 1, oa = q * C ** 1.5, 1.5 < C && (h = G + 20 * q)), 0.4 < (C = (q = 0 > (H = (k - B) / 20) ? -1 : 1) * H) && (p = 1, pa = q * C ** 1.5, 1.5 < C && (k = B + 20 * q)));
      }
    }
  };
  hC.ontouchend = g => {
    let q;
    g.preventDefault();
    for (const C of g.changedTouches) {
      C.identifier === t ? (t = void 0, v || (q = 1), v = 0) : C.identifier === m ? (m = void 0, pa = oa = 0, p || (q = 1), p = 0) : q = 1;
    }
    q && g.target === hC && b && 0.06 < (g = ca - b) && 0.7 > g && (Aa[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Aa.length = oa = pa = 0;
    m = t = void 0;
    document.hidden && e(!0);
  })();
  e(!0);
}, Ab = () => {
  let c = 0, b = 0, h = 0, k = 0, m = 0, p = 1, w = !1, y, t, v, A, D, F, E, e, g, q, C, G;
  const B = {x:0, y:0, z:0,}, H = new Int32Array(256), S = new Uint8Array(65536), ha = L => {
    var {u:K, I:z} = l[ea], {x:z, y:M, z:x} = z.transformPoint({x:0, y:8, z:-3,});
    n.x = B.x = z;
    n.y = B.y = E = M;
    n.z = B.z = x;
    L && (Da = q = z, Ga = (C = M) + 13, Ha = (G = x) + -18);
    c = b = K.F || 1;
    t = F = D = v = A = 0;
    p = 1;
  }, ba = () => {
    for (let L = 32; 128 > L; L += 2) {
      let K = 0, z = 0, M = 0, x = 0;
      const N = 512 * L;
      for (let P = 1 & L; 128 > P; P += 2) {
        const W = N + 4 * P;
        let U = N + 4 * (127 - P);
        const Z = S[W] / 255, da = S[1 + U] / 255, la = 1 - Pa(P / 63.5 - 1);
        10 < P && 118 > P && (K = Oa(K, Oa(Z * la, Z * S[U] / 255)), z = Oa(z, Oa(da * la, da * S[1 + W] / 255)));
        (54 > P || 74 < P) && 1e-3 < (U = (1 - la) * (da < Z ? Z : da) / 3) && (64 > P && U > M ? M = U : 64 < P && U > x && (x = U));
      }
      Pa(x - M) > (0 > e ? -e : e) && (e = x - M);
      Pa(z - K) > (0 > g ? -g : g) && (g = z - K);
    }
  }, sa = () => {
    let L = 0, K = 0, z = 0, M = 0;
    H.fill(0);
    for (let N = 0; 31 > N; ++N) {
      let P = 0;
      const W = 512 * N;
      for (let U = 0; 128 > U; U++) {
        var x = W + 4 * U;
        let Z = (S[x] + S[1 + x]) / 255;
        x = S[2 + x];
        14 < U && 114 > U && (P += Z);
        x && Z && (Z = H[x] + 1, H[x] = Z, L > Z || (L = Z, K = x));
      }
      3 > P && 5 < N && (M += N / 32);
      3 < P && (7 < N && (z += N / 15), t = 1);
    }
    K && (t = 1);
    p ? K && (p = 0, b = K) : b = K || c;
    c = K;
    v = Q(v, t ? 6.5 : 8, 4);
    B.y += z / 41 - (t ? 1 : v) * M / 41 * v * d;
  };
  xa = () => {
    let L = oa + (Aa[0] ? 1 : 0) + (Aa[2] ? -1 : 0), K = pa + (Aa[1] ? 1 : 0) + (Aa[3] ? -1 : 0);
    if (M = navigator.getGamepads()[0]) {
      const Z = M.buttons;
      var z = M.axes;
      (M = (x = da => Z[da]?.pressed || 0 < Z[da]?.value)(1) || x(3) || x(2) || x(0)) !== w && (w = M) && (Aa[5] = 1);
      L += (0.2 < Pa(-z[0]) ? -z[0] : 0) + (x(14) ? 1 : 0) + (x(15) ? -1 : 0);
      K += (0.2 < Pa(-z[1]) ? -z[1] : 0) + (x(12) ? 1 : 0) + (x(13) ? -1 : 0);
      wa && (0.3 < Pa(z[2]) && (Ja += 80 * z[2] * d), 0.3 < Pa(z[3]) && (Ia += 80 * z[3] * d));
    }
    0.05 > (0 > K ? -K : K) && (K = 0);
    0.05 > (0 > L ? -L : L) && (L = 0);
    var M = Math.atan2(K, L), x = Ra(Math.hypot(K, L));
    z = (L = x * Math.cos(M), K = x * Math.sin(M), e = 0, g = 0, t = 0, Y.r9r(0, 0, 128, 128, 6408, 5121, S), Y.iay(36009, [36064, 36096]), Y.iay(36008, [36064, 36096]), NO_INLINE(ba)(), NO_INLINE(sa)(), Ra(1 - 5 * Oa(0 > e ? -e : e, 0 > g ? -g : g)));
    z = (b || (e += D * z * d, g += F * z * d), D = Q(D, 0, t ? 8 : 4), F = Q(F, 0, t ? 8 : 4), A = Q(A, t ? (L || K ? t ? 7 : 4 : 0) * z : 0, t ? 0.1 < z ? 10 : L || K ? 5 : 7 : 1,), wa ? Ja * Ka : Math.PI);
    var N = Math.sin(z) * A * d;
    z = Math.cos(z) * A * d;
    z = (e -= L * z - K * N, g -= L * N + K * z, (z = (N = 1 === f[b].H && f[b].j || r).inverse()).m41 = 0, z.m42 = 0, z.m43 = 0, {x:e, z:g} = z.transformPoint({x:e, z:g, w:0,}), B.x += e, B.z += g, b !== y && (y = b, {x:z, y:P, z:W} = N.inverse().transformPoint(n), B.x = z, B.y = P, B.z = W), n.x);
    var P = n.z, {x:W, y:N, z:U} = N.transformPoint(B);
    n.x = W;
    n.y = N;
    n.z = U;
    b && (D = (W - z) / d, F = (U - P) / d);
    (L || K) && (h = 90 - M / Ka);
    k = Va(k, h, 8 * d);
    m += (x - m) * Ra(10 * d);
    E = Sa(Q(E, N, 2), N, 8 * Pa(E - N));
    q = Wa(q, W, 0.5, d);
    C = Wa(C, N, 2, d);
    G = Wa(G, U, 0.5, d);
    wa ? (Da = Q(Da, W, 666 * p + 18), Ga = Q(Ga, E + 1.5, 666 * p + 18), Ha = Q(Ha, U, 666 * p + 18)) : (Da = Wa(Da, q, 1, 2 * d), Ga = Wa(Ga, C + 13 + 15 * p, 4, 2 * d,), Ha = Wa(Ha, G + -18, 1, 2 * d,), z = Ha - G, 1 < (0 > z ? -z : z) && (P = Da - q, Ja = 270 + Math.atan2(z, P) / Ka, Ia = 90 - Math.atan2(Math.hypot(z, P), Ga - C) / Ka));
    Ia = Oa(87 > Ia ? Ia : 87, -87);
    Ja = Ua(Ja);
    1 === b && (l[9].l = -15 > n.x && 0 > n.z ? 1 : 0);
    (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && ha();
    f[37].j = r.translate(n.x, E, n.z).rotateSelf(0, k);
    [38, 39].map((Z, da) => {
      f[Z].j = f[37].j.translate(0, m * Ra(0.45 * Math.sin(9.1 * a + Math.PI * (da - 1) - Math.PI / 2)),).rotateSelf(m * Math.sin(9.1 * a + Math.PI * (da - 1)) * 0.25 / Ka, 0);
    });
  };
  ha(1);
}, Bb = (c, b = 35633) => (b = Y.c6x(b), Y.s3c(b, c), Y.c6a(b), b), Gb = (c, b) => {
  const h = {}, k = Y.c1h();
  return Y.abz(k, c), Y.abz(k, Bb(b, 35632)), Y.l8l(k), m => m ? h[m] || (h[m] = Y.gan(k, m)) : Y.u7y(k);
}, Hb = (c, b, h = 42) => {
  if (ra) {
    h = r.rotate(0, 40 * Math.sin(ca) - 70);
    for (var k of [37, 38, 39]) {
      $a(h, Ma, k - 1);
    }
    Y.uae(c, !1, Ma);
    Y.d97(4, f[39].G - f[37].v, 5123, 2 * f[37].v,);
  } else {
    for (k = 0; f.length > k; ++k) {
      const {H:m, F:p, j:w} = f[k];
      m && $a(w, Ma, p - 1);
    }
    Y.uae(c, !1, Ma);
    Y.d97(4, (b ? f[39].G : f[37].v) - 3, 5123, 6,);
    for (b = 0; 13 > b; ++b) {
      $a(za[b].j, Ma, b);
    }
    for (b = 0; l.length > b; ++b) {
      const {j:m, g:p} = l[b];
      $a(m, Ma, b + 13);
      Ma[16 * (b + 13) + 15] = 1 - p;
    }
    Y.uae(c, !1, Ma);
    Y.das(4, f[h].G - f[h].v, 5123, 2 * f[h].v, 13,);
    Y.das(4, f[40].G - f[40].v, 5123, 2 * f[40].v, l.length,);
  }
}, Ib = c => {
  h4.innerHTML += ".";
  setTimeout(c);
}, Jb = c => Math.sin(c * Math.PI * 2), Kb = c => 0.5 > c % 1 ? 1 : -1, Lb = c => c % 1 * 2 - 1, Mb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c, Tb = c => {
  let b = 0;
  const h = () => {
    const p = yb.createBuffer(2, 5362944, 44100);
    for (let w = 0; 2 > w; w++) {
      for (let y = w, t = p.getChannelData(w); 10725888 > y; y += 2) {
        t[y >> 1] = m[y] / 65536;
      }
    }
    xb.buffer = p;
    xb.loop = !0;
    Ib(c);
  }, k = () => {
    let p, w = 0, [y, t, v, A, D, F, E, e, g, q, C, G, B, H, S, ha, ba, sa, L, K, z] = Ca[b];
    q = q * q * 4;
    for (const W of [5513, 4562, 3891]) {
      const U = [];
      let Z = 0, da = 0, la, Qa, Cb;
      const Ba = new Int32Array(768 * W), Nb = 2 ** (G - 9) / W, Ob = Math.PI * 2 ** (ba - 8) / W, mb = L * W & -2;
      for (let gb = 0; 11 >= gb; ++gb) {
        for (let hb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + gb]; 32 > hb; ++hb) {
          const Eb = (32 * gb + hb) * W;
          for (var M = 0; 4 > M; ++M) {
            if (la = 0, Db && (la = z[Db - 1].charCodeAt(hb + 32 * M) - 40, la += 0 < la ? 106 : 0), la) {
              var x;
              if (!(x = U[la])) {
                x = la;
                let X = void 0, ta = void 0;
                var N = W, P = la;
                let Pb = 0, Qb = 0;
                const Rb = 2 > b ? Lb : Jb, Sb = 2 > b ? 1 > b ? Kb : Mb : Jb, Fb = new Int32Array(e + g + q);
                for (let Ea = 0, nb = 0; e + g + q > Ea; ++Ea, ++nb) {
                  let Fa = 1;
                  e > Ea ? Fa = Ea / e : e + g > Ea || (Fa = (1 - (Fa = (Ea - e - g) / q)) * 3 ** (-C / 16 * Fa));
                  0 > nb || (nb -= 4 * N, ta = 396e-5 * 2 ** ((P + t - 256) / 12), X = 396e-5 * 2 ** ((P + D - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                  Fb[Ea] = 80 * (Rb(Pb += ta * Fa ** (v / 32)) * y + Sb(Qb += X * Fa ** (F / 32)) * A + (E ? (2 * Math.random() - 1) * E : 0)) * Fa | 0;
                }
                x = U[x] = Fb;
              }
              for (let X = 0, ta = 2 * Eb; x.length > X; ++X, ta += 2) {
                Ba[ta] += x[X];
              }
            }
          }
          for (let X, ta = 0; W > ta; ++ta) {
            M = 0, x = 2 * (Eb + ta), ((X = Ba[x]) || Cb) && (Qa = 308e-5 * B, 1 !== b && 4 !== b || (Qa *= Math.sin(Nb * x * Math.PI * 2) * K / 512 + 0.5), Qa = 1.5 * Math.sin(Qa), Z += Qa * da, p = (1 - H / 255) * (X - da) - Z, da += Qa * p, X = 4 === b ? da : 3 === b ? p : Z, b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5), X *= S / 32, Cb = 1e-5 < X * X, p = Math.sin(Ob * x) * ha / 512 + 0.5, M = X * (1 - p), X *= p), x < mb || (M += Ba[1 + x - mb] * 
            sa / 255, X += Ba[x - mb] * sa / 255), m[w + x] += Ba[x] = M, ++x, m[w + x] += Ba[x] = X;
          }
        }
      }
      w += Ba.length;
    }
    Ib(5 > ++b ? k : h);
  }, m = new Int32Array(10725888);
  Ib(k);
}, Ub = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), V = NO_INLINE((c, b, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * b << 8 | 255 * c), yb = new AudioContext(), xb = yb.createBufferSource(), Y = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const c in Y) {
  Y[c[0] + [...c].reduce((b, h, k) => (b * k + h.charCodeAt(0)) % 434, 0).toString(36)] = Y[c];
}
Ib(() => {
  let c = 0;
  const b = () => {
    if (2 == ++c) {
      const k = g => {
        requestAnimationFrame(k);
        q = (g - (ua || g)) / 1e3;
        ra ? (d = 0, Aa[5] = 0) : d = 0.066 < q ? 0.066 : q;
        a += d;
        ca += q;
        ua = g;
        0 < d && (Y.b6o(36160, w), Y.f1s(), rb(), xa(), Aa[5] = 0);
        var q = ra ? r.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ra(hC.clientWidth / 1e3)) : r.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ga, -Ha,);
        0 < d && (F(), Y.b6o(36160, w), Y.v5y(0, 0, 128, 128), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(F("b"), !1, $a(r.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, 0.3 - n.z,),),), Hb(F("c"), 0, 41), Y.c4s(256), Y.cbf(!1, !0, !0, !1), Y.uae(F("b"), !1, $a(r.translate(-n.x, -n.y, -n.z - 0.3),),), Hb(F("c"), 0, 41), Y.f1s());
        A();
        Y.b6o(36160, p);
        Y.v5y(0, 0, 2048, 2048);
        e[0](wb(q, 0.3, 55, 10));
        e[1](wb(q, 55, 177, 11));
        E();
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.cbf(!0, !0, !0, !0);
        Y.c4s(16640);
        e[0]();
        e[1]();
        Y.uae(E("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
        Y.uae(E("b"), !1, $a(q));
        Y.ubu(E("k"), Da, Ga, Ha);
        Hb(E("c"), !wa);
        D();
        Y.ubu(D("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ca);
        ra ? Y.ubu(D("k"), 0, 0, 0) : Y.ubu(D("k"), Da, Ga, Ha);
        Y.uae(D("b"), !1, $a(q.inverse()));
        Y.d97(4, 3, 5123, 0);
        Y.f1s();
      }, m = h, p = Y.c5w(), w = Y.c5w(), y = Y.c3z(), t = Y.c25(), v = Bb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}"), A = Gb(Bb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), 
      "#version 300 es\nvoid main(){}",), D = Gb(Bb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), F = Gb(v, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), E = Gb(v, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), e = (F(), Y.uae(F("a"), !1, ab(1.4, 0.59, 1e-4, 1)), D(), Y.ubh(D("q"), 3), E(), Y.ubh(E("q"), 3), Na(2, g => {
        const q = new Float32Array(16), C = Y.c25(), G = E(g ? "j" : "i");
        return Y.ubh(E(g ? "h" : "g"), g), Y.b6o(36160, p), Y.d45([0]), Y.r9l(0), Y.a4v(33984 + g), Y.b9j(3553, C), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), B => {
          B ? ($a(B, q), Y.uae(A("b"), !1, q), Y.fas(36160, 36096, 3553, C, 0), Y.c4s(256), Hb(A("c"), !wa)) : Y.uae(G, !1, q);
        };
      }));
      Y.e8z(2929);
      Y.e8z(2884);
      Y.c70(1);
      Y.c7a(1029);
      Y.d4n(515);
      Y.c5t(0, 0, 0, 1);
      Y.b6o(36160, w);
      Y.bb1(36161, y);
      Y.r4v(36161, 33189, 128, 128);
      Y.f8w(36160, 36096, 36161, y);
      Y.a4v(33987);
      Y.b9j(3553, t);
      Y.fas(36160, 36064, 3553, t, 0);
      Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Y.a4v(33987);
      Y.b9j(3553, Y.c25());
      Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, m);
      Y.gbn(3553);
      Y.t2z(3553, 10241, 9987);
      Y.t2z(3553, 10240, 9729);
      try {
        const [g, q, C, G, B] = JSON.parse(localStorage.DanteSP22,);
        l.map((H, S) => H.g = H.i = H.l = S ? 0 | g[S] : 0);
        za.map((H, S) => H.l = 0 | q[S]);
        ea = C;
        a = G;
        na = B;
      } catch {
      }
      ma = 0 > ea ? 0 : 1 < ea ? 1 : ea;
      rb();
      NO_INLINE(Ab)();
      requestAnimationFrame(k);
      NO_INLINE(zb)();
    }
  }, h = new Image();
  h.onload = h.onerror = b;
  h.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      const t = [], v = B => {
        let {x:H, y:S, z:ha} = D[B], ba = (G[0] = H, G[1] = S, G[2] = ha, B = "" + (D.D ? C : q), g.get(B));
        return void 0 !== ba ? (H = 3 * ba, e[H] = (e[H++] + q[5]) / 2, e[H] = (e[H++] + q[6]) / 2, e[H] = (e[H] + q[7]) / 2) : (g.set(B, ba = g.size), F.push(H, S, ha, G[3]), E.push(q[4]), e.push(q[5], q[6], q[7])), ba;
      };
      let A = 0, D;
      const F = [], E = [], e = [], g = new Map(), q = new Int32Array(8), C = new Int32Array(q.buffer, 0, 5), G = new Float32Array(q.buffer);
      for (const B of f) {
        for (D of (G[3] = 40 === B.F ? -13 : B.H && B.F, B.s)) {
          const {x:H, y:S, z:ha} = Za(D);
          q[4] = 0 | D.A;
          q[5] = 32767 * H;
          q[6] = 32767 * S;
          q[7] = 32767 * ha;
          for (let ba = 2, sa = v(0), L = v(1); D.length > ba; ++ba) {
            t.push(sa, L, L = v(ba));
          }
        }
        B.s = null;
        B.v = A;
        B.G = A = t.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(F), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(e), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(E), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(t), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Ib(b);
    });
    let k;
    const m = (t, v, A) => r.translate(t + Math.sin(a + 2) / 5, v + Math.sin(0.8 * a) / 3, A).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), p = (() => {
      const t = Na(11, A => r.translate(Math.sin(A / 10 * Math.PI), A / 10).rotate(+A).scale(1.0001 - A / 10, 0, 1 - A / 10),), v = db(18);
      return Na(10, A => eb(cb(v, t[A]).reverse(), cb(v, t[A + 1]), 1),).flat();
    })(), w = O(J(u(I(20, 1, 1.15, 1), r.translate(0, -3).scale(3.5, 1, 3.5), V(0.7, 0.4, 0.25, 0.7),), u(I(20, 1, 1.3, 1), r.translate(0, -2.5).scale(2.6, 1, 3), V(0.7, 0.4, 0.25, 0.2),), u(I(), r.translate(4, -1.2).scale3d(2), V(0.7, 0.4, 0.25, 0.3)),),), y = O(J(u(I(), r.translate(0, -8).scale(6, 15, 2.2)), u(I(), r.translate(0, -14.1).scale(4, 13, 4)), u(I(20, 1), r.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),);
    R(() => {
      T([ya.slice(1)], r.translate(-2).scale3d(3).rotate(90, 0));
    }, 0);
    R(() => {
      const t = (e, g, q) => R(C => {
        C.h = () => r.translate(v() * Math.sin(3 * e + a * e) * g);
        ya.map(({x:G, z:B}) => {
          T(I(11, 1), r.translate(4 * G, 4, q + 4 * B).scale(0.8, 3, 0.8), V(0.5, 0.3, 0.7, 0.6),);
          T(I(), r.translate(4 * G, 7, q + 4 * B).scale(1, 0.3), V(0.5, 0.5, 0.5, 0.3),);
        });
        T(O(J(u(I(), r.translate(0, 0, q).scale(5, 1, 5), V(0.8, 0.8, 0.8, 0.3),), ...[-1, 1].map(G => u(I(), r.translate(5 * G, 0.2, q).rotate(0, 0, -30 * G).scale(4, 1, 2), V(0.8, 0.8, 0.8, 0.3),)),),),);
        T(I(), r.translate(0, -3, q).scale(8, 2, 8), V(0.4, 0.4, 0.4, 0.3));
      }), v = () => {
        var e = l[2].i, g = 1 - l[4].i;
        return e < g ? e : g;
      }, A = (R(e => {
        e.h = () => m(-12, 4.2, 40 * ma - 66);
        T(w);
        ub(r.translate(0, -3, 4));
      }), Na(7, e => u(I(6, 1), r.translate(4 * (e / 6 - 0.5), 3).scale(0.2, 3, 0.2), V(0.3, 0.3, 0.38),)).flat()), D = (vb(r.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), vb(r.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...db(18).map(({x:e, z:g}) => [7 * e, 10 * g, 4.5 - 2 * (0 > e ? -e : e)]),), T(I(), r.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), V(0.8, 0.8, 0.8, 0.2),), ya.map(({x:e, z:g}) => T(I(6), r.translate(3 * e, 3, 15 * g).scale(0.7, 4, 0.7), V(0.6, 0.3, 0.3, 0.4),)), 
      [-23, 22].map(e => T(I(), r.translate(0, 0, e).scale(3, 1, 8), V(0.9, 0.9, 0.9, 0.2))), [-15, 15].map((e, g) => {
        T(I(), r.translate(0, 6.3, e).scale(4, 0.3, 1), V(0.3, 0.3, 0.3, 0.4));
        T(I(), r.translate(0, 1, e).scale(3, 0.2, 0.35), V(0.5, 0.5, 0.5, 0.3));
        R(q => {
          q.h = () => r.translate(0, 4.7 * -l[g + 1].g, e);
          T(A);
        });
      }), Na(5, e => Na(2, g => T(p, r.translate(18.5 * (g - 0.5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2,), V(1, 1, 0.8, 0.2),))), T(I(), r.translate(3, 1.5, -20).scale(0.5, 2, 5), V(0.7, 0.7, 0.7, 0.2)), T(I(), r.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), V(0.75, 0.75, 0.75, 0.2),), T(I(5), r.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), V(0.6, 0.3, 0.3, 0.4),), ub(r.translate(-5.4, 1.5, -19).rotate(0, -90)), T(I(), r.rotate(0, 60).translate(14.8, 
      -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5), V(0.8, 0.2, 0.2, 0.5),), T(O(J(qb(u(I(6, 0, 0, 0.3), r.translate(8, -3, -4).scale(13, 1, 13), V(0.7, 0.7, 0.7, 0.2),), u(I(6), r.translate(0, -8).scale(9, 8, 8), V(0.4, 0.2, 0.5, 0.5),), u(I(6, 0, 0, 0.3), r.translate(0, -0.92).scale(13, 2, 13), V(0.8, 0.8, 0.8, 0.2),),), u(I(5), r.scale(5, 30, 5), V(0.4, 0.2, 0.6, 0.5)), u(I(5, 0, 1.5), r.translate(0, 1).scale(4.5, 0.3, 4.5), V(0.7, 0.5, 0.9, 0.2),), u(I(), r.rotate(0, 60).translate(14, 0.7, 
      -1).rotate(0, 0, -35).scale(2, 2, 2), V(0.5, 0.5, 0.5, 0.5),), u(I(6), r.translate(15, -1.5, 4).scale(3.5, 1, 3.5), V(0.5, 0.5, 0.5, 0.5),),),),), R(e => {
        e.h = () => r.translate(0, 0.01 < l[3].g ? (5 * Math.cos(1.5 * a) + 2) * l[3].i * (1 - l[2].g) + -15 * (1 - l[3].g) : -500, 0,);
        ub(r.translate(0, 1.2));
        T(I(5), r.translate(0, -0.2).scale(5, 1, 5), V(0.6, 0.65, 0.7, 0.3));
      }), ub(r.translate(15, -2, 4)), t(0.7, 12, 35), t(1, 8.2, 55), R(e => {
        e.h = () => r.translate(v() * Math.sin(a / 1.5 + 2) * 12);
        T(O(J(qb(u(I(), r.scale(1.5, 1, 5), V(0.9, 0.9, 0.9, 0.2)), u(I(6), r.scale(4, 1, 5), V(0.9, 0.9, 0.9, 0.2)), u(I(), r.translate(0, -2).scale(2, 3.2, 1.9), V(0.3, 0.8, 0.5, 0.5),), u(I(16, 1, 0, 4), r.scale(1, 1, 1.5).rotate(0, 90), V(0.9, 0.9, 0.9, 0.2),),), u(I(), r.scale(1.3, 10, 1.3), V(0.2, 0.7, 0.4, 0.6)),),), r.translate(0, 0, 45),);
        vb(r.translate(0, 2.8, 45), [0, 0, 4.5]);
      }), R(e => {
        e.h = () => r.translate(9.8 * (1 - v()));
        T(I(3), r.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), V(0.3, 0.6, 0.6, 0.2),);
        T(I(8), r.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), V(0.8, 0.8, 0.8, 0.2),);
        T(I(), r.translate(-23, -3, 55).scale(5.2, 1.7, 3), V(0.5, 0.5, 0.5, 0.3),);
        T(I(), r.translate(-23, -2.2, 62).scale(3, 1, 4), V(0.5, 0.5, 0.5, 0.3));
        ub(r.translate(-23, -0.5, 66.5));
      }), T(I(), r.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2),), R(e => {
        e.h = () => r.translate(0, Ra(1 - 5 * v()) * Ta(l[4].g, l[5].g) * Math.sin(1.35 * a) * 4);
        T(I(), r.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), V(0.7, 0.7, 0.7, 0.2),);
        T(O(J(u(I(), r.scale(3, 1.4, 2.7)), u(I(), r.scale(1.2, 8, 1.2)),),), r.translate(-33, -3, 55), V(0.7, 0.7, 0.7, 0.2),);
      }), R(e => {
        e.h = () => r.translate(0, 0, Ra(1 - 5 * v()) * Ta(l[4].g, l[5].g) * Math.sin(0.9 * a) * 8);
        T(O(J(u(I(), r.translate(-27, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2),), u(I(), r.translate(-27, -3, 55).scale(1, 3), V(0.9, 0.9, 0.9, 0.2),),),),);
        T(I(), r.translate(-39, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2),);
      }), R(e => {
        e.h = () => r.translate(0, -6.5 * l[4].i);
        T(I(6), r.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), V(0.7, 0.7, 0.7, 0.4),);
      }), [...u(O(qb(u(I(), r.translate(0, -3).scale(11, 1.4, 3), V(0.9, 0.9, 0.9, 0.2),), J(u(I(6), r.rotate(0, 0, 90).scale(6, 8, 6), V(0.3, 0.6, 0.6, 0.3),), u(I(4, 0, 0.01), r.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), V(0.3, 0.6, 0.6, 0.3),), u(I(6), r.rotate(0, 0, 90).scale(5, 12, 5), V(0.3, 0.6, 0.6, 0.3),), ...[5, 0, -5].map(e => u(I(5), r.translate(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), V(0.3, 0.6, 0.6, 0.3),)),),),), r,)]), F = (T(D, r.translate(-53, 0, 55)), T(I(6), r.translate(-61.3, 
      -2.4, 49).scale(3, 1, 5), V(0.4, 0.6, 0.6, 0.3)), T(I(7), r.translate(-57, -2.6, 46).scale(4, 1, 4), V(0.8, 0.8, 0.8, 0.3)), ub(r.translate(-55, -1.1, 46).rotate(0, 90)), R(e => {
        e.h = () => r.translate(-75, (1 - l[5].i) * (1 - l[6].g) * 3, 55).rotate(180 * (1 - l[5].i) + ja, 0,);
        T(D);
      }, 2), T(I(), r.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), V(0.7, 0.7, 0.7, 0.2),), T(I(3, 0, -0.5), r.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), V(0.8, 0.8, 0.8, 0.2),), T(O(J(qb(u(I(), r.translate(-100, -2.5, 55).scale(8, 1, 8), V(0.8, 0.8, 0.8, 0.2),), u(I(), r.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), V(0.8, 0.8, 0.8, 0.2),), u(I(), r.translate(-100, -2.6, 70).scale(3, 1.1, 7), V(0.8, 0.8, 0.8, 0.2),), u(I(), r.translate(-96, -2.6, 
      73).rotate(0, 45).scale(3, 1.1, 5), V(0.8, 0.8, 0.8, 0.2),), u(I(6), r.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), V(0.6, 0.6, 0.6, 0.3),), u(I(), r.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), V(0.8, 0.8, 0.8, 0.2),), u(I(), r.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), V(0.8, 0.8, 0.8, 0.2),),), u(I(8), r.translate(-100, -1, 55).scale(7, 0.9, 7), V(0.3, 0.3, 0.3, 0.4),), u(I(8), r.translate(-100, -2, 55).scale(4, 0.3, 4), V(0.4, 0.4, 0.4, 0.5),), u(I(8), 
      r.translate(-100, -3, 55).scale(0.6, 1, 0.6), V(0.4, 0.4, 0.4, 0.5),),),), r,), vb(r.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), vb(r.translate(-89, 0.2, 80), [0, 0, 6]), T(O(J(u(I(), r.translate(-100, 1, 63).scale(7.5, 4), V(0.5, 0.5, 0.5, 0.4),), u(I(), r.translate(-100, 0, 70).scale(2, 2, 10), V(0.5, 0.5, 0.5, 0.4),), u(I(20, 1), r.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), V(0.5, 0.5, 0.5, 0.4),),),),), R(e => {
        e.h = () => r.translate(-99.7, 5.3 * -l[6].g - 2, 63.5);
        T(A);
      }), ya.map(({x:e, z:g}) => {
        T(I(6), r.translate(7 * e - 100, -3, 7 * g + 55).scale(1, 8.1), V(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4].map(q => T(I(6), r.translate(7 * e - 100, q, 7 * g + 55).scale(1.3, 0.5, 1.3), V(0.4, 0.2, 0.2, 0.8),));
      }), Na(7, e => {
        T(I((23 * e + 1) % 5 + 5, 0, 0.55), r.translate(5 * Math.sin(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(5 + e / 2, 1 + e / 6, 5 + e / 3,), V(0.5 - e / 17, 0.5 - (1 & e) / 9, 0.6, 0.3),);
      }), T(I(), r.translate(-87, -9.5, 24).scale(7, 1, 3), V(0.4, 0.5, 0.6, 0.4)), T(I(4), r.translate(-86, -9.2, 27).scale(5, 1, 5), V(0.5, 0.6, 0.7, 0.3)), T(I(12, 1), r.translate(-86, -9, 31).scale(1.5, 1, 1.5), V(0.3, 0.3, 0.4, 0.1),), ub(r.translate(-86, -7.5, 31)), R(e => {
        e.h = () => r.translate(0, 3.5 * (1 - Oa(l[6].g, l[7].g)) + Ta(l[7].i, l[6].i) * Math.sin(a) * 5,);
        [0, 12, 24].map(g => T(I(), r.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.2, 0.5, 0.6, 0.2),));
      }), R(e => {
        e.h = () => {
          const g = Ta(l[7].i, l[6].i);
          return r.translate(0, g * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + g) * g,);
        };
        [6, 18].map(g => T(I(), r.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.1, 0.4, 0.5, 0.2),));
      }), T(O(J(qb(u(I(), r.scale(11, 1, 13), V(0.3, 0.4, 0.6, 0.3)), u(I(5), r.translate(0, 0, -7).scale(2, 1.2, 2), V(0.2, 0.4, 0.7, 0.3),), u(I(5), r.scale(9, 1.2, 9), V(0, 0.2, 0.3, 0.5)),), u(I(5), r.scale(5.4, 5, 5.4), V(0, 0.2, 0.3, 0.5)),),), r.translate(-38.9, -11.3, 17),), ub(r.translate(-38.9, -9.6, 10)), R(e => {
        e.h = () => r.translate(0, -7.3 * l[7].i);
        T(O(J(qb(u(I(5), r.translate(0, 2).scale(5, 7, 5).skewY(8), V(0.2, 0.4, 0.5, 0.5),), u(I(5), r.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), V(0.25, 0.35, 0.5, 0.5),), u(I(5), r.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), V(0.35, 0.3, 0.5, 0.5),),), u(I(5), r.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), V(0.2, 0.4, 0.5, 0.5),),),), r.translate(-38.9, -11.3, 17),);
        vb(r.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...db(15).map(({x:g, z:q}) => [3 * g, 3 * q, 1.2]),);
      }), ya.map(({x:e, z:g}) => {
        k = r.translate(9 * e - 38.9, -7.3, 11 * g + 17);
        T(I(14, 1), k.scale(1, 4), V(0.25, 0.25, 0.25, 1));
        [1.5, 8].map(q => T(I(17, 1), k.translate(0, q - 4).scale(1.5, 0.5, 1.5), V(0.6, 0.6, 0.6, 0.3),));
      }), T(O(J(qb(u(I(6), r.translate(0, 0, -36).scale(15, 1.2, 15), V(0.7, 0.7, 0.7, 0.3),), u(I(), r.translate(0, 0, -18).scale(4, 1.2, 6), V(0.45, 0.4, 0.6, 0.3),),), ...Na(6, e => Na(6, g => u(I(6), r.translate(4.6 * g - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2,), V(0.7, 0.7, 0.7, 0.3),))).flat(),),), r.translate(-38.9, -11.3, 17),), vb(r.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]), T(I(5), r.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), V(0.8, 0.1, 0.25, 0.4),), ub(r.translate(-84, -0.5, 85).rotate(0, 45)), R(e => {
        e.h = () => m(-123, 1.4, 55 + -65 * na);
        ub(r.translate(0, -3, -4).rotate(0, 180));
        T(w);
      }), vb(r.translate(-115, 0.2, -12), [0, 0, 3.5]), O(J(u(I(), r.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), V(0.25, 0.25, 0.35, 0.3),), u(I(3), r.translate(0, 0, -5.5).scale(3, 2), V(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2].map(e => u(I(), r.translate(e, -0.5, 1).scale(0.14, 0.3, 6.5), V(0.7, 0.2, 0, 0.3),)),),)), E = (R(e => {
        e.h = () => r.translate(0, -2, Ta(l[10].g, l[11].g) * Pa(Math.sin(1.1 * a)) * -8.5 + 10);
        Na(2, g => T(F, r.translate(9 * g - 110 + (1 & g), 1.7, -12)));
      }), R(e => {
        e.h = () => r.translate(0, -2, Ta(l[10].g, l[11].g) * Pa(Math.sin(2.1 * a)) * -8.5 + 10);
        Na(2, g => T(F, r.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
      }), R(e => {
        e.h = () => r.translate(0, -2, -8.5 * Oa((1 - l[10].g) * (1 - Ta(l[10].g, l[11].g)), Ta(l[10].g, l[11].g) * Pa(Math.sin(1.5 * a)),) + 10,);
        Na(3, g => T(F, r.translate(9 * g - 106, 1.7, -12)));
      }), T(O(J(qb(u(I(), r.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), u(I(), r.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),), ...Na(4, e => u(I(), r.translate(13 + 9 * e + (1 & e), -0.8, 9).scale(1.35, 1.35, 9),)), ...Na(3, e => u(I(), r.translate(17 + 9 * e, -0.8, 9).scale(1.35, 1.35, 9)),),),), r.translate(-123, 0, -12), V(0.5, 0.5, 0.6, 0.2),), T(I(5), r.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), V(0.25, 0.25, 0.35, 1),), T(I(), r.translate(-116, -2.6, -12).scale(3.2, 
      1.1, 4).skewX(3), V(0.8, 0.8, 0.8, 0.2),), T(I(6), r.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), V(0.6, 0.5, 0.7, 0.2),), ub(r.translate(-116, -1.4, -18).rotate(0, 180)), Na(3, e => {
        T(y, r.translate(12 * e - 109, -9, -12), V(0.6, 0.6, 0.6, 0.3));
        T(y, r.translate(-77, -9, -12 * e - 20).rotate(0, 90), V(0.6, 0.6, 0.6, 0.3),);
      }), T(O(J(u(I(12), r.translate(-77, -13.9, -12).scale(4, 18.2, 4), V(0.7, 0.7, 0.7, 0.2),), u(I(), r.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), V(0.4, 0.5, 0.6, 0.2),), u(I(), r.translate(-77, 0, -14).scale(1.5, 2.2, 2), V(0.4, 0.5, 0.6, 0.2),), u(I(12), r.translate(-77, 2.8, -12).scale(3, 5, 3), V(0.4, 0.5, 0.6, 0.2),),),),), T(I(), r.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), V(0.6, 0.6, 0.6, 0.3),), T(I(), r.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), V(0.6, 0.6, 0.6, 0.3),), 
      T(I(), r.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), V(0.6, 0.6, 0.6, 0.3),), T(O(J(u(I(), r.translate(-93, -5.8, -40).scale(9, 1, 5), V(0.8, 0.8, 0.8, 0.1),), u(I(9), r.translate(-98, -5.8, -40).scale(3, 8, 3), V(0.7, 0.7, 0.7, 0.2),),),),), T(I(9), r.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), V(0.5, 0.5, 0.5, 0.3),), ub(r.translate(-98, -4.4, -40).rotate(0, 90)), vb(r.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]), T(O(J(qb(u(I(6, 0, 0, 0.6), r.translate(-100, 
      0.7, 105.5).scale(8, 1, 11), V(0.7, 0.7, 0.7, 0.2),), u(I(), r.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), V(0.7, 0.7, 0.7, 0.2),), u(I(), r.translate(-91.2, 0.7, 107).scale(3, 1, 3.3), V(0.7, 0.7, 0.7, 0.2),),), u(I(5), r.translate(-100, 0.7, 113).scale(4, 3, 4), V(0.7, 0.7, 0.7, 0.2),),),),), Na(4, e => R(g => {
        g.h = () => {
          const q = Ta(l[8].i, l[12].i);
          return r.translate((2 < e ? 2 * (1 - q) + q : 0) - 100, q * Math.sin(1.3 * a + 1.7 * e) * (3 + e / 3) + 0.7, 115 + (1 & e ? -1 : 1) * (1 - l[8].i) * (1 - l[12].i) * -7 + (0.05 > q ? 0.05 : q) * Math.cos(1.3 * a + 7 * e) * (4 - 2 * (1 - e / 3)),);
        };
        T(I(6), r.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5), V(0.5 - e / 8, e / 12 + 0.5, 0.7, 0.3),);
      })), R(e => {
        e.h = () => {
          const g = Ta(l[8].i, l[12].i);
          return r.translate(2.5 * (1 - g) - 139.7, -3 * (1 - l[8].g) + g * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
        };
        T(O(J(u(I(10), r.scale(6, 2, 6), V(0.1, 0.6, 0.5, 0.3)), u(I(10), r.scale(3.3, 6, 3.3), V(0.1, 0.6, 0.5, 0.5)),),),);
        k = r.translate(-7.5).rotate(0, 90);
        T(I(15, 1), k.scale(3, 2.3, 3), V(0.4, 0.4, 0.4, 0.3));
        T(I(10), k.scale(2, 2.5, 2), V(0.3, 0.8, 0.7, 0.3));
        T(I(5), k.scale(1, 3), V(0.5, 0.5, 0.5, 0.5));
        ub(k.translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => T(p, r.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), V(1, 1, 0.8, 0.2),));
        vb(r.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      }), [-1, 1].map(e => {
        T(I(12, 1), r.translate(-7.5 * e - 100, 3.7, 96).scale(0.8, 4, 0.8), V(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5].map(g => T(I(15, 1), r.translate(-7.5 * e - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), V(0.5, 0.24, 0.2, 0.4),));
        T(p, r.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), V(1, 1, 0.8),);
        T(O(J(u(I(), r.translate(-4 * e, 3.5, -0.5).scale(4, 4, 0.7), V(0.5, 0.5, 0.5, 0.4),), u(I(), r.scale(3, 3, 10), V(0.6, 0.24, 0.2, 0.5)), u(I(28, 1), r.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), V(0.6, 0.24, 0.2, 0.5),), u(I(5), r.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), V(0.6, 0.24, 0.2, 0.5),), u(I(5), r.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), V(0.6, 0.24, 0.2, 0.5),),),), r.translate(e - 100, 0.7, 97),);
      }), R(e => {
        e.h = () => r.translate(-100, 0.6 - 6 * l[12].g, 96.5).scale(0.88, 1.2);
        T(A);
      }), [...u(I(25, 1), r.scale(8, 1, 8), V(0.45, 0.45, 0.45, 0.2)), ...u(I(5), r.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2),),]);
      R(e => {
        e.h = () => r.translate(-80, 1, 106).rotate(0, 40 + fa);
        T(O(J(u(I(25, 1), r.scale(8, 1, 8), V(0.45, 0.45, 0.45, 0.2)), u(I(), r.translate(0, 0, -5.5).scale(1.5, 3, 2.5), V(0.45, 0.45, 0.45, 0.2),),),),);
        T(I(8), r.translate(0, 2).scale(3, 1.5, 3), V(0.7, 0.7, 0.7, 0.1));
        T(I(5), r.translate(0, 2).scale(1, 2), V(0.3, 0.3, 0.3, 0.2));
        vb(r.translate(0, 3), ...db(10).map(({x:g, z:q}) => [5.6 * g, 5.6 * q, 2.5]),);
      });
      R(e => {
        e.h = () => r.translate(-64, 1, 106).rotate(0, ia);
        T(O(J(u(I(25, 1), r.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3),), u(I(), r.scale(9, 5, 2), V(0.3, 0, 0, 0.3)),),),);
        T(E);
        [-1, 1].map(g => T(p, r.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), V(1, 1, 0.8),));
      });
      R(e => {
        e.h = () => r.translate(-48, 1, 106).rotate(0, 180 - ia);
        T(O(J(u(I(25, 1), r.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3),), u(I(), r.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)), u(I(), r.translate(0, 0, 7).scale(2, 5, 9), V(0.3, 0, 0, 0.3),),),),);
        T(E);
      });
      R(e => {
        e.h = () => r.translate(-48, 1, 90).rotate(0, 270 + ia);
        T(O(J(u(I(25, 1), r.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3),), u(I(), r.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)), u(I(), r.translate(0, 0, -7).scale(2, 5, 9), V(0.3, 0, 0, 0.3),),),),);
        T(E);
      });
      T(I(), r.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), V(0.7, 0.7, 0.7, 0.2));
      T(I(), r.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), V(0.7, 0.7, 0.7, 0.2));
      T(I(), r.translate(-39, 0.4, 90).scale(2, 1, 2), V(0.7, 0.7, 0.7, 0.3));
      T(I(), r.translate(-34.2, 0.4, 90).scale(3, 1, 3), V(0.7, 0.7, 0.7, 0.3));
      ub(r.translate(-34, 2.7, 96).rotate(-12, 0));
      T(I(5), r.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), V(0.2, 0.5, 0.5, 0.6),);
      [V(0.1, 0.55, 0.45, 0.2), V(0.2, 0.5, 0.5, 0.3), V(0.3, 0.45, 0.55, 0.4)].map((e, g,) => R(q => {
        q.h = () => r.translate(0, (1 - l[13].i) * (1 - l[14].i) * (g ? 0 : 3) + Ta(l[13].i, l[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,);
        T(I(), r.translate(-23.5, 0.5, 90 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), e,);
        2 === g && T(I(), r.translate(-29.1, 0.4, 90).scale(2.1, 1, 3), V(0.7, 0.7, 0.7, 0.3),);
        1 === g && T(I(), r.translate(-16.1, 0.5, 103.5).rotate(0, 0, -3.5).scale(3.9, 0.8, 2).skewX(-1), V(0.6, 0.6, 0.7, 0.3),);
      }));
      T(O(J(u(I(6, 0, 0, 0.3), r.translate(0, -0.92, 95).scale(14, 2, 14), V(0.8, 0.8, 0.8, 0.2),), u(I(5), r.translate(0, 0, 95).scale3d(6), V(0.3, 0.3, 0.3, 0.5),),),),);
      [8, -6.1].map((e, g) => Na(3, q => T(y, r.translate(6 * q - 6, e - (1 & q), 111 - 0.2 * (1 & q) - g), 1 & q ? V(0.5, 0.5, 0.5, 0.3) : V(0.35, 0.35, 0.35, 0.5),),));
      [-1, 1].map(e => T(p, r.translate(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), V(1, 1, 0.8),));
      ub(r.translate(0, 1.7, 82).rotate(0, 180));
      T(I(5), r.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), V(0.5, 0.3, 0.3, 0.4),);
      T(O(J(qb(u(I(), r.translate(0, 16, 110.5).scale(12, 1, 3), V(0.5, 0.3, 0.3, 0.4),), u(I(), r.translate(0, 16, 111).scale(3, 1, 3.8), V(0.5, 0.3, 0.3, 0.4),),), u(I(5), r.translate(0, 16, 103.5).scale(5.5, 5, 5.5), V(0.5, 0.3, 0.3, 0.4),),),),);
      T(I(6), r.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), V(0.5, 0.6, 0.7, 0.3),);
      T(I(), r.translate(0, 16, 129).scale(1.5, 1, 2), V(0.5, 0.6, 0.7, 0.3));
      T(I(7), r.translate(0, 16.2, 133).scale(5, 1, 5), V(0.4, 0.5, 0.6, 0.4));
      R(e => {
        e.h = () => {
          const g = Math.sin(a);
          return r.translate(-2 * g).rotate(0, 0, 25 * g);
        };
        T(I(3), r.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), V(0.5, 0.3, 0.3, 0.4),);
        [22, 30].map(g => {
          T(I(6), r.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), V(0.7, 0.7, 0.7, 0.4),);
          T(I(), r.translate(0, 6.2, g + 95).scale(0.5, 11, 0.5), V(0.5, 0.3, 0.3, 0.4),);
        });
      });
      R(e => {
        e.h = () => {
          const g = Ta(Ta((l[14].g + l[14].i) / 2, l[13].i), (l[15].g + l[15].i) / 2,);
          return r.translate(0, 16 * g, 8.5 * Ra(2 * g - 1) + 95);
        };
        T(I(5), r.scale(5, 1.1, 5), V(0.5, 0.3, 0.3, 0.4));
        T(I(5), r.scale(5.5, 0.9, 5.5), V(0.25, 0.25, 0.25, 0.4));
        ub(r.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(r.translate(0, 3, 95), ...db(9).map(({x:e, z:g}) => [9 * e, 9 * g, 4]),);
      vb(r.translate(0, 19, 134), [0, 0, 3.5]);
    });
    R(() => {
      [0, 180].map(v => T(p, r.rotate(0, v).translate(0.2, 1.32).rotate(0, 0, -30).scale(0.2, 0.6, 0.2), V(1, 1, 0.8),));
      T(fb(20), r.translate(0, 1).scale(0.5, 0.5, 0.5), V(1, 0.3, 0.4));
      const t = u(O(J(I(15, 1), u(I(), r.translate(0, 0, 1).scale(2, 2, 0.5)),),), r.rotate(-90, 0).scale(0.1, 0.05, 0.1), V(0.3, 0.3, 0.3),);
      [-1, 1].map(v => T(t, r.translate(0.2 * v, 1.2, 0.4).rotate(0, 20 * v, 20 * v)));
      T(I(), r.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), V(0.3, 0.3, 0.3));
      T(fb(20), r.scale(0.7, 0.8, 0.55), V(1, 0.3, 0.4));
    });
    [-1, 1].map(t => R(() => {
      T(I(10, 1), r.translate(0.3 * t, -0.8).scale(0.2, 0.7, 0.24), V(1, 0.3, 0.4));
    }));
    R(() => {
      T(I(6, 1), r.scale(0.13, 1.4, 0.13), V(0.3, 0.3, 0.5, 0.1));
      T(I(8, 1), r.translate(0, 1).scale(0.21, 0.3, 0.21), V(1, 0.5, 0.2));
      T(I(3), r.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), V(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    R(() => {
      T(I(6).slice(0, -1), r.scale(0.77, 1, 0.77), V(1, 0.3, 0.5));
    }, 0);
    R(() => {
      T(fb(30, 24, (t, v, A) => {
        const D = v / 24, F = t * Math.PI * 2 / 30, E = D ** 0.6 * Math.PI / 2;
        t = D * D * Math.sin(t * Math.PI * 14 / 30) / 4;
        return 23 === v ? {x:A.D = 0, y:-0.5, z:0,} : {x:Math.cos(F) * Math.sin(E), y:Math.cos(D * Math.PI) - D - t, z:Math.sin(F) * Math.sin(E) + Math.sin(t * Math.PI * 2) / 4,};
      }), r.scale3d(0.7), V(1, 1, 1),);
      [-1, 1].map(t => T(fb(12), r.translate(0.16 * t, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls: <b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n');

