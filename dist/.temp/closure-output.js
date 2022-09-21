let ea = 0, ia = 0, a = 0, la = 0, ma = 0, na = 0, oa = 0, ra = 0, sa = 0, ta = 0, va = 0, wa = 0, d = 0.066, ya = 1, za, Aa, Ba, Ca;
const Da = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], e = [], l = [], Fa = [], Ja = [], Ka = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], 
[100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",
]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], n = {x:0, y:0, z:0,};
var Pa = 0, Qa = 0, Ra = 0, Sa = 0, Ta = 0;
const Ua = Math.PI / 180, q = new DOMMatrix(), Va = new Float32Array(16), Wa = new Float32Array(624), t = (b, c) => Array.from(Array(b), (h, k) => c(k)), Xa = (b, c) => c < b ? b : c, Ya = b => 0 > b ? -b : b, bb = b => 0 > b ? 0 : 1 < b ? 1 : b, cb = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)), db = b => Math.atan2(Math.sin(b *= Ua), Math.cos(b)) / Ua, eb = (b, c, h) => ((b *= Ua) + (2 * (c = (c * Ua - b) % (2 * Math.PI)) % (2 * Math.PI) - c) * (0 > h ? 
0 : 1 < h ? 1 : h)) / Ua, fb = (b, c, h, k) => {
  var m = c - b;
  b += (0 > c - b ? -1 : 1) * Xa(0, (0 > m ? -m : m) ** 0.9 - h) * k * 2;
  return b + (c - b) * bb(k / 7);
}, gb = ({x:b, y:c, z:h}) => Math.hypot(b - n.x, c - n.y, h - n.z), hb = ({x:b, y:c, z:h}, k) => b * k.x + c * k.y + h * k.z, ib = b => {
  let c = 0, h = 0, k = 0, m, p = b.at(-1);
  for (m of b) {
    c += (p.y - m.y) * (p.z + m.z), h += (p.z - m.z) * (p.x + m.x), k += (p.x - m.x) * (p.y + m.y), p = m;
  }
  return m = Math.hypot(c, h, k), c /= m, h /= m, k /= m, {x:c, y:h, z:k, w:c * p.x + h * p.y + k * p.z,};
}, jb = (b, c = Va, h = 0,) => (h *= 16, c[h++] = b.m11, c[h++] = b.m12, c[h++] = b.m13, c[h++] = b.m14, c[h++] = b.m21, c[h++] = b.m22, c[h++] = b.m23, c[h++] = b.m24, c[h++] = b.m31, c[h++] = b.m32, c[h++] = b.m33, c[h++] = b.m34, c[h++] = b.m41, c[h++] = b.m42, c[h++] = b.m43, c[h] = b.m44, c), kb = (b, c, h, k,) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (k + h) / (h - k), -1, 0, 0, 2 * k * h / (h - k), 0], lb = (b, c, h) => (b.D = h, b.A = c, b), mb = (b, c, h = b.A) => lb(b.map(k => {
  let m, p;
  return {x:k, y:m, z:p} = k, {x:k, y:m, z:p} = c.transformPoint({x:k, y:m, z:p,}), {x:k, y:m, z:p,};
}), h, b.D,), H = (b, c, h) => b.map(k => mb(k, c, h)), nb = (b, c = 0) => t(b, h => {
  const k = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - c : k + c,};
}), ob = (b, c, h) => b.map((k, m, {length:p}) => lb([k, c[p - m - 1], c[p - (m + 1) % p - 1], b[(m + 1) % p]], b.A, h,)), I = (b, c, h = 0, k,) => (b = b ? nb(b, k) : Da, k = mb(b, q.translate(0, 1).scale3d(0 < h ? h : 1)), b = mb(b, q.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...ob(b, k, c), k, b]), pb = (b, c = b, h = (k, m) => (m *= Math.PI / c, {x:Math.cos(k *= 2 * Math.PI / b) * Math.sin(m), y:Math.cos(m), z:Math.sin(k) * Math.sin(m),})) => {
  const k = [];
  for (let m = 0; b > m; m++) {
    for (let p = 0; c > p; p++) {
      const v = lb([], 0, 1);
      k.push(v);
      v.push(h(m, p, v));
      p && v.push(h((m + 1) % b, p, v));
      c - 1 > p && v.push(h((m + 1) % b, p + 1 % c, v));
      v.push(h(m, p + 1 % c, v));
    }
  }
  return k;
}, qb = (b, c) => {
  var h, k, m, p = c.C;
  for (var v = 0; p.length > v; ++v) {
    if (-0.00008 > (h = hb(b, p[v]) - b.w) ? m = c : 8e-5 < h && (k = c), m && k) {
      k = [];
      m = [];
      p = c.C;
      v = c.B;
      let y = p.at(-1), u = hb(b, y) - b.w;
      for (const w of p) {
        h = hb(b, w) - b.w, 8e-5 > u && m.push(y), -0.00008 < u && k.push(y), (8e-5 < u && -0.00008 > h || -0.00008 > u && 8e-5 < h) && (u /= h - u, y = {x:y.x + (y.x - w.x) * u, y:y.y + (y.y - w.y) * u, z:y.z + (y.z - w.z) * u,}, k.push(y), m.push(y)), y = w, u = h;
      }
      return {o:2 < k.length && {C:lb(k, p.A, p.D), B:v, u:c,}, m:2 < m.length && {C:lb(m, p.A, p.D), B:v, u:c,},};
    }
  }
  return {o:k, m,};
}, rb = (b, c, h = ib(c.C)) => {
  let k, m, p;
  return b ? ({o:k, m} = qb(b, c), k || m || b.s.push(c), k && (b.o = rb(b.o, k, h)), m && (b.m = rb(b.m, m, h))) : ({x:k, y:m, z:h, w:p} = h, b = {x:k, y:m, z:h, w:p, s:[c], o:0, m:0,}), b;
}, sb = (b, c, h) => {
  const k = [], m = (p, v) => {
    let {o:y, m:u} = qb(p, v);
    y || u || (0 < h * hb(p, c) ? y = v : u = v);
    y && (p.o ? m(p.o, y) : k.push(y));
    u && p.m && m(p.m, u);
  };
  for (const p of c.s) {
    m(b, p);
  }
  return k;
}, tb = (b, c) => b && (c(b), tb(b.o, c), tb(b.m, c)), ub = b => b.length ? b.reduce((c, h) => rb(c, {C:h, B:0, u:0,}), 0) : b, wb = b => (tb(b, c => {
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
}), b), xb = (...b) => b.reduce((c, h) => {
  const k = [];
  if (c = ub(c), h) {
    h = ub(h);
    tb(c, m => m.s = sb(h, m, 1));
    tb(h, m => k.push([m, sb(c, m, -1)]));
    for (let [m, p] of k) {
      for (const v of p) {
        rb(c, v, m);
      }
    }
  }
  return c;
}), J = (b, ...c) => wb(xb(wb(ub(b)), ...c)), S = b => {
  const c = new Map(), h = new Map(), k = m => {
    let p;
    return m.u && ((p = c.get(m.u)) ? (h.delete(p), m = k(m.u)) : c.set(m.u, m)), m;
  };
  return tb(b, m => {
    for (const p of m.s) {
      h.set(k(p), p.B);
    }
  }), Array.from(h, ([{C:m}, p]) => {
    const v = m.map(({x:y, y:u, z:w}) => ({x:y, y:u, z:w,}));
    return lb(p ? v.reverse() : v, m.A, m.D);
  });
}, T = (b, c, h) => b + (c - b) * bb(1 - Math.exp(-h * d)), yb = () => {
  var b = cb(l[12].h, l[13].h), c = T(oa, 0, 1);
  oa = c + (db(oa + 60 * d) - c) * bb(l[5].h - l[6].i);
  c = T(ma, 0, 5);
  ma = c + (db(ma + 56 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
  c = T(na, 0, 4);
  na = c + (db(na + 48 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
  b = 2 * l[9].i - 1;
  ta = T(ta, l[9].i, 0.2 + 0.3 * (0 > b ? -b : b));
  sa = T(sa, ra ? sa + (-9 - sa) * bb(1.5 * d) : bb(a / 3), 1,);
  ya && a > ya && (ya = 0, h4.innerHTML = "");
  l[0].j && 0.8 < l[0].h && (13 > ea ? (1 / 0 > ya && (ya = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), l[0].j = 0) : ra || (1 / 0 > ya && (ya = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"), ra = 1));
  for (const h of e) {
    h.g && (h.l = h.g(h));
  }
  for (const h of l) {
    h.g();
  }
  for (const h of Fa) {
    h.g();
  }
}, zb = () => {
  h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ea = Fa.reduce((b, {j:c}) => b + c, 0)];
}, Ab = () => {
  localStorage.DanteSP22 = JSON.stringify([l.map(({j:b}) => b), Fa.map(({j:b}) => b), la, a, ta,]);
}, U = (b, c = 1) => {
  const h = Ba;
  c = {l:q, F:e.length, H:c, s:[],};
  return e.push(Ba = c), b(c), Ba = h, c;
}, W = (b, c = q, h) => Ba.s.push(...H(b, c, h)), Bb = b => {
  const c = Ba, h = l.length, k = {j:0, h:0, i:0, u:c, g() {
    const m = k.j, p = k.h, v = k.i, y = c.l.multiply(b);
    k.I = y;
    2.9 > gb(y.transformPoint()) && Ja[5] && (0.3 > p || 0.7 < p) && (k.j = m ? 0 : 1, h && 1 / 0 > ya && (ya = a + 1, h4.innerHTML = "* click *"), la = h, Ab());
    k.h = T(p, m, 4);
    k.i = T(v, m, 1);
    k.l = y.rotate(60 * k.h - 30, 0).translateSelf(0, 1);
  },};
  l.push(k);
  W(I(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
  W(I(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), X(0.4, 0.5, 0.5));
  W(I(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), X(0.5, 0.5, 0.4));
}, Cb = (b, ...c) => {
  let h = -1, k = 0, m = 0, p = 0, v = 0, y = 0, u = 1, w = 3;
  const E = {j:0, g() {
    if (!E.j) {
      let da, ua, La, Ga, ja, O, Ea = 1, Ha = 1 / 0, fa;
      for (const Ia of P) {
        var {x:L, z:M, w:aa} = Ia;
        M = (L = Math.hypot(g - L, r - M)) - aa;
        fa ||= L < aa;
        0 < M && Ha > M && (Ha = M, f = Ia);
        var Q = L / aa;
        Ea = Ea < Q ? Ea : Q;
      }
      fa || ({x:da, z:ua, w:La} = f, Ga = g - da, ja = r - ua, O = Math.hypot(Ga, ja), Y = Math.atan2(-ja, Ga), u && (m = (Math.random() - 0.5) * Math.PI / 2, w = Xa(1, w / (1 + Math.random()))), Y += m, h = -Math.cos(Y), k = Math.sin(Y), 0.1 < O && (O = (O < La ? O : La) / (O || 1), g = Ga * O + da, r = ja * O + ua));
      u = fa;
      w = T(w, 3 + 6 * (1 - Ea), 3 + Ea);
      A = T(A, g = T(g, g + h, w), w);
      B = T(B, r = T(r, r + k, w), w);
      p = eb(p, Math.atan2(A - v, B - y) / Ua - 180, 3 * d,);
      v = A;
      y = B;
      var Y = (E.l = F.l.multiply(b.translate(A, 0, B).rotateSelf(0, p, 7 * Math.sin(1.7 * a)),)).transformPoint();
      1.5 > gb(Y) && (E.j = 1, Q = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ea] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 1 / 0 > 
      ya && (ya = a + (ea && 12 > ea ? 5 : 7), h4.innerHTML = Q), zb(), Ab());
    }
    E.j && (Q = N % 4 - 2, E.l = e[2].l.translate(N % 4 * 1.2 - 1.7 + Math.sin(a + N) / 7, -2, 1.7 * (N / 4 | 0) - 5.5 + (0 > Q ? -Q : Q) + Math.cos(a / 1.5 + N) / 6,));
  },}, F = Ba, N = Fa.length, P = c.map(([L, M, aa]) => ({x:L, z:M, w:aa,}));
  let f = P[0], {x:g, z:r} = f, A = g, B = r;
  Fa.push(E);
}, Db = (b, c, h, k) => {
  let m = 0, p = 0, v = 0, y = 1 / 0, u = -1 / 0, w = 1 / 0, E = -1 / 0, F = 1 / 0, N = -1 / 0;
  const P = 1.1 * (h - c), f = (new DOMMatrix(kb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, h))).multiplySelf(b).invertSelf();
  return c = t(8, g => (g = f.transformPoint({x:4 & g ? 1 : -1, y:2 & g ? 1 : -1, z:1 & g ? 1 : -1,}), m -= g.x = (P * g.x | 0) / P / g.w, p -= g.y = (P * g.y | 0) / P / g.w, v -= g.z = (P * g.z | 0) / P / g.w, g)), h = q.rotate(298, 139).translateSelf(m / 8, p / 8, v / 8), mb(c, h).map(({x:g, y:r, z:A}) => {
    y = y < g ? y : g;
    u = g < u ? u : g;
    w = w < r ? w : r;
    E = r < E ? E : r;
    F = F < A ? F : A;
    N = A < N ? N : A;
  }), F *= 0 > F ? k : 1 / k, N *= 0 < N ? k : 1 / k, q.scale(2 / (u - y), 2 / (E - w), 2 / (F - N)).translateSelf((u + y) / -2, (E + w) / -2, (F + N) / 2,).multiplySelf(h);
}, Gb = () => {
  let b = !0, c, h, k, m, p, v, y, u, w, E, F, N;
  const P = () => {
    za || !b ? Eb.disconnect() : Eb.connect(Fb.destination);
    b4.innerHTML = "Music: " + b;
  }, f = (g = !1) => {
    if (za !== g) {
      za = g;
      try {
        g ? document.exitPointerLock() : Eb.start();
      } catch {
      }
      Ca = 0;
      document.body.className = g ? "l m" : "l";
      P();
      zb();
    }
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b1.onclick = () => f();
  b2.onclick = () => {
    f();
    Ca = 1;
  };
  b4.onclick = () => {
    b = !b;
    P();
  };
  b5.onclick = () => f(!0);
  onclick = g => {
    N = 1;
    za || (g.target === hC && (Ja[5] = !0), Ca && hC.requestPointerLock());
  };
  onkeyup = onkeydown = ({code:g, target:r, type:A, repeat:B}) => {
    B || ((B = !!A[5] && r === document.body) && ("Escape" === g || "Enter" === g && za) ? za && !N || f(!za) : 5 === (A = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[g]) ? B && (Ja[A] = 1) : Ja[A] = B);
  };
  onmousemove = ({movementX:g, movementY:r}) => {
    Ca && (g || r) && (Ta += 0.1 * g, Sa += 0.1 * r);
  };
  oncontextmenu = () => !1;
  hC.ontouchstart = g => {
    if (!za) {
      for (let {pageX:r, pageY:A, identifier:B} of g.changedTouches) {
        Ca && r > hC.clientWidth / 2 ? void 0 === u && (u = B, v = r, y = A, w = 0, E = Ta, F = Sa) : void 0 === m && (m = B, h = r, k = A, p = 0);
      }
      c = ia;
    }
  };
  hC.ontouchmove = ({changedTouches:g}) => {
    if (!za) {
      for (let {pageX:B, pageY:L, identifier:M} of g) {
        var r, A;
        u === M && (Ta = E + (B - v) / 3, Sa = F + (L - y) / 3, w = 1);
        m === M && (0.4 < (A = (r = 0 > (M = (h - B) / 20) ? -1 : 1) * M) && (p = 1, va = r * A ** 1.5, 1.5 < A && (h = B + 20 * r)), 0.4 < (A = (r = 0 > (M = (k - L) / 20) ? -1 : 1) * M) && (p = 1, wa = r * A ** 1.5, 1.5 < A && (k = L + 20 * r)));
      }
    }
  };
  hC.ontouchend = g => {
    let r;
    g.preventDefault();
    for (const A of g.changedTouches) {
      A.identifier === u ? (u = void 0, w || (r = 1), w = 0) : A.identifier === m ? (m = void 0, wa = va = 0, p || (r = 1), p = 0) : r = 1;
    }
    r && g.target === hC && c && 0.06 < (g = ia - c) && 0.7 > g && (Ja[5] = !0);
  };
  (document.onvisibilitychange = onblur = onresize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Ja.length = va = wa = 0;
    m = u = void 0;
    document.hidden && f(!0);
  })();
  f(!0);
}, Hb = (b, c = 35633) => (c = Z.c6x(c), Z.s3c(c, b), Z.c6a(c), c), Ib = (b, c) => {
  const h = {}, k = Z.c1h();
  return Z.abz(k, b), Z.abz(k, Hb(c, 35632)), Z.l8l(k), m => m ? h[m] || (h[m] = Z.gan(k, m)) : Z.u7y(k);
}, Kb = (b, c, h = 42) => {
  if (za) {
    h = q.rotate(0, 40 * Math.sin(ia) - 70);
    for (var k of [37, 38, 39]) {
      jb(h, Wa, k - 1);
    }
    Z.uae(b, !1, Wa);
    Z.d97(4, e[39].G - e[37].v, 5123, 2 * e[37].v,);
  } else {
    for (k = 0; e.length > k; ++k) {
      const {H:m, F:p, l:v} = e[k];
      m && jb(v, Wa, p - 1);
    }
    Z.uae(b, !1, Wa);
    Z.d97(4, (c ? e[39].G : e[37].v) - 3, 5123, 6,);
    for (c = 0; 13 > c; ++c) {
      jb(Fa[c].l, Wa, c);
    }
    for (c = 0; l.length > c; ++c) {
      const {l:m, h:p} = l[c];
      jb(m, Wa, c + 13);
      Wa[16 * (c + 13) + 15] = 1 - p;
    }
    Z.uae(b, !1, Wa);
    Z.das(4, e[h].G - e[h].v, 5123, 2 * e[h].v, 13,);
    Z.das(4, e[40].G - e[40].v, 5123, 2 * e[40].v, l.length,);
  }
}, Lb = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Mb = b => Math.sin(b * Math.PI * 2), Nb = b => 0.5 > b % 1 ? 1 : -1, Ob = b => b % 1 * 2 - 1, Pb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Qb = b => {
  let c = 0;
  const h = () => {
    const p = Fb.createBuffer(2, 5362944, 44100);
    for (let v = 0; 2 > v; v++) {
      for (let y = v, u = p.getChannelData(v); 10725888 > y; y += 2) {
        u[y >> 1] = m[y] / 65536;
      }
    }
    Eb.buffer = p;
    Eb.loop = !0;
    Lb(b);
  }, k = () => {
    let p, v = 0, [y, u, w, E, F, N, P, f, g, r, A, B, L, M, aa, Q, Y, da, ua, La, Ga] = Ka[c];
    r = r * r * 4;
    for (const fa of [5513, 4562, 3891]) {
      const Ia = [];
      let Za = 0, Ma = 0, pa, ka, xa;
      const ba = new Int32Array(768 * fa), $a = 2 ** (B - 9) / fa, C = Math.PI * 2 ** (Y - 8) / fa, x = ua * fa & -2;
      for (let z = 0; 11 >= z; ++z) {
        for (let V = 0, R = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + z]; 32 > V; ++V) {
          const G = (32 * z + V) * fa;
          for (var ja = 0; 4 > ja; ++ja) {
            if (pa = 0, R && (pa = Ga[R - 1].charCodeAt(V + 32 * ja) - 40, pa += 0 < pa ? 106 : 0), pa) {
              var O;
              if (!(O = Ia[pa])) {
                O = pa;
                let D = void 0, K = void 0;
                var Ea = fa, Ha = pa;
                let qa = 0, ca = 0;
                const ha = 2 > c ? Ob : Mb, ab = 2 > c ? 1 > c ? Nb : Pb : Mb, Jb = new Int32Array(f + g + r);
                for (let Na = 0, vb = 0; f + g + r > Na; ++Na, ++vb) {
                  let Oa = 1;
                  f > Na ? Oa = Na / f : f + g > Na || (Oa = (1 - (Oa = (Na - f - g) / r)) * 3 ** (-A / 16 * Oa));
                  0 > vb || (vb -= 4 * Ea, K = 396e-5 * 2 ** ((Ha + u - 256) / 12), D = 396e-5 * 2 ** ((Ha + F - 256) / 12) * (1 + (c ? 0 : 0.007200)));
                  Jb[Na] = 80 * (ha(qa += K * Oa ** (w / 32)) * y + ab(ca += D * Oa ** (N / 32)) * E + (P ? (2 * Math.random() - 1) * P : 0)) * Oa | 0;
                }
                O = Ia[O] = Jb;
              }
              for (let D = 0, K = 2 * G; O.length > D; ++D, K += 2) {
                ba[K] += O[D];
              }
            }
          }
          for (let D, K = 0; fa > K; ++K) {
            ja = 0, O = 2 * (G + K), ((D = ba[O]) || xa) && (ka = 308e-5 * L, 1 !== c && 4 !== c || (ka *= Math.sin($a * O * Math.PI * 2) * La / 512 + 0.5), ka = 1.5 * Math.sin(ka), Za += ka * Ma, p = (1 - M / 255) * (D - Ma) - Za, Ma += ka * p, D = 4 === c ? Ma : 3 === c ? p : Za, c || (D = 1 > (D *= 22e-5) ? -1 < D ? Math.sin(D / 4 * Math.PI * 2) : -1 : 1, D /= 22e-5), D *= aa / 32, xa = 1e-5 < D * D, p = Math.sin(C * O) * Q / 512 + 0.5, ja = D * (1 - p), D *= p), O < x || (ja += ba[1 + O - x] * 
            da / 255, D += ba[O - x] * da / 255), m[v + O] += ba[O] = ja, ++O, m[v + O] += ba[O] = D;
          }
        }
      }
      v += ba.length;
    }
    Lb(5 > ++c ? k : h);
  }, m = new Int32Array(10725888);
  Lb(k);
}, Rb = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), X = NO_INLINE((b, c, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * c << 8 | 255 * b), Fb = new AudioContext(), Eb = Fb.createBufferSource(), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in Z) {
  Z[b[0] + [...b].reduce((c, h, k) => (c * k + h.charCodeAt(0)) % 434, 0).toString(36)] = Z[b];
}
Lb(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      let k = 0, m = 0, p = 0, v = 0, y = 0, u = 1, w = !1, E, F, N, P, f, g, r, A, B, L, M, aa;
      const Q = {x:0, y:0, z:0,}, Y = new Int32Array(256), da = new Uint8Array(65536), ua = () => {
        var {u:C, I:x} = l[la], {x, y:z, z:V} = x.transformPoint({x:0, y:8, z:-3,});
        n.x = Q.x = x;
        n.y = Q.y = r = z;
        n.z = Q.z = V;
        F = g = f = N = P = 0;
        u = 1;
        k = m = C?.F || 1;
      }, La = () => {
        let C = 0, x = 0, z = 0, V = 0, R = 0;
        Y.fill(0);
        for (let D = 0; 31 > D; ++D) {
          let K = 0;
          const qa = 512 * D;
          for (let ca = 0; 128 > ca; ca++) {
            var G = qa + 4 * ca;
            let ha = (da[G] + da[1 + G]) / 255;
            G = da[2 + G];
            14 < ca && 114 > ca && (K += ha);
            G && ha && (ha = Y[G] + 1, Y[G] = ha, C > ha || (C = ha, x = G));
          }
          3 > K && 5 < D && (V += D / 32);
          3 < K && (7 < D && (z += D / 15), R = 1);
        }
        x && (R = 1);
        u ? x && (u = 0, m = x) : m = x || k;
        k = x;
        F = R;
        N = T(N, R ? 6.5 : 8, 4);
        Q.y += z / 41 - (R ? 1 : N) * V / 41 * N * d;
      }, Ga = () => {
        for (let V = 32; 128 > V; V += 2) {
          var C = 0;
          let R = 0;
          var x = 0;
          let G = 0;
          const D = 512 * V;
          for (let K = 1 & V; 128 > K; K += 2) {
            const qa = D + 4 * K;
            let ca = D + 4 * (127 - K);
            const ha = da[qa] / 255, ab = da[1 + ca] / 255;
            var z = K / 63.5 - 1;
            z = 1 - (0 > z ? -z : z);
            10 < K && 118 > K && (C = Xa(C, Xa(ha * z, ha * da[ca] / 127.5)), R = Xa(R, Xa(ab * z, ab * da[1 + qa] / 255)));
            (54 > K || 74 < K) && 1e-3 < (ca = (1 - z) * (ab < ha ? ha : ab) / 3) && (64 > K && ca > x ? x = ca : 64 < K && ca > G && (G = ca));
          }
          x = G - x;
          C = R - C;
          (0 > x ? -x : x) > (0 > A ? -A : A) && (A = x);
          (0 > C ? -C : C) > (0 > B ? -B : B) && (B = C);
        }
      }, ja = () => {
        B = A = 0;
        NO_INLINE(La)();
        NO_INLINE(Ga)();
        let C = va + (Ja[0] ? 1 : 0) + (Ja[2] ? -1 : 0), x = wa + (Ja[1] ? 1 : 0) + (Ja[3] ? -1 : 0);
        if (V = navigator.getGamepads()[0]) {
          const ca = V.buttons;
          var z = V.axes;
          (V = (R = ha => ca[ha]?.pressed || 0 < ca[ha]?.value)(1) || R(3) || R(2) || R(0)) !== w && (w = V) && (Ja[5] = 1);
          C += (0.2 < Ya(-z[0]) ? -z[0] : 0) + (R(14) ? 1 : 0) + (R(15) ? -1 : 0);
          x += (0.2 < Ya(-z[1]) ? -z[1] : 0) + (R(12) ? 1 : 0) + (R(13) ? -1 : 0);
          Ca && (0.3 < Ya(z[2]) && (Ta += 80 * z[2] * d), 0.3 < Ya(z[3]) && (Sa += 80 * z[3] * d));
        }
        0.05 > (0 > x ? -x : x) && (x = 0);
        0.05 > (0 > C ? -C : C) && (C = 0);
        var V = Math.atan2(x, C), R = bb(Math.hypot(x, C));
        z = (C = R * Math.cos(V), x = R * Math.sin(V), bb(1 - 5 * Xa(0 > A ? -A : A, 0 > B ? -B : B)));
        z = (m || (A += f * z * d, B += g * z * d), f = T(f, 0, F ? 8 : 4), g = T(g, 0, F ? 8 : 4), P = T(P, F ? (C || x ? F ? 7 : 4 : 0) * z : 0, F ? 0.1 < z ? 10 : C || x ? 5 : 7 : 1,), Ca ? Ta * Ua : Math.PI);
        var G = Math.sin(z) * P * d;
        z = Math.cos(z) * P * d;
        z = (A -= C * z - x * G, B -= C * G + x * z, (z = (G = 1 === e[m].H && e[m].l || q).inverse()).m41 = 0, z.m42 = 0, z.m43 = 0, {x:A, z:B} = z.transformPoint({x:A, z:B, w:0,}), Q.x += A, Q.z += B, m !== E && (E = m, {x:z, y:D, z:K} = G.inverse().transformPoint(n), Q.x = z, Q.y = D, Q.z = K), n.x);
        var D = n.z, {x:K, y:G, z:qa} = G.transformPoint(Q);
        K = (n.x = K, n.y = G, n.z = qa, Ya(r - G));
        r = T(r, G + 0.1, 50 * K + 5);
        m && (f = (n.x - z) / d, g = (n.z - D) / d);
        (C || x) && (p = 90 - V / Ua);
        v = eb(v, p, 8 * d);
        y += (R - y) * bb(10 * d);
        L = fb(L, n.x, 0.5, d,);
        M = fb(M, n.y, 2, d,);
        aa = fb(aa, n.z, 0.5, d,);
        Ca ? (qa = 200 * u, Pa = T(Pa, n.x, 18 + qa), Qa = T(Qa, n.y + 1.5, 15 + qa), Ra = T(Ra, n.z, 18 + qa), Sa = Xa(87 > Sa ? Sa : 87, -87)) : (Pa = fb(Pa, L, 1, 2 * d,), Qa = fb(Qa, M + 13 + 15 * u, 4, 2 * d,), Ra = fb(Ra, aa + -18, 1, 2 * d,), G = Ra - aa, 1 < (0 > G ? -G : G) && (K = Pa - L, z = Qa - M, Ta = 270 + Math.atan2(G, K) / Ua, Sa = 90 - Math.atan2(Math.hypot(G, K), z) / Ua));
        Ta = db(Ta);
      }, O = C => {
        requestAnimationFrame(O);
        x = (C - (Aa || C)) / 1e3;
        za ? (d = 0, Ja[5] = 0) : d = 0.066 < x ? 0.066 : x;
        a += d;
        ia += x;
        Aa = C;
        0 < d && (Z.b6o(36160, fa), Z.fa7(), Z.r9r(0, 0, 128, 128, 6408, 5121, da), Z.iay(36009, [36064, 36096]), Z.iay(36008, [36064, 36096]), NO_INLINE(ja)(), yb(), (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && ua(), 1 === m && (l[9].j = -15 > n.x && 0 > n.z ? 1 : 0), Ja[5] = 0);
        var x = za ? q.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + bb(hC.clientWidth / 1e3)) : q.rotate(-Sa, -Ta, -0).invertSelf().translateSelf(-Pa, -Qa, -Ra,);
        0 < d && (xa(), Z.b6o(36160, fa), Z.v5y(0, 0, 128, 128), Z.c4s(16640), Z.cbf(!0, !1, !0, !1), Z.uae(xa("b"), !1, jb(q.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, 0.3 - n.z,),),), Kb(xa("c"), 0, 41), Z.c4s(256), Z.cbf(!1, !0, !0, !1), Z.uae(xa("b"), !1, jb(q.translate(-n.x, -n.y, -n.z - 0.3),),), Kb(xa("c"), 0, 41), Z.f1s());
        pa();
        Z.b6o(36160, Ha);
        Z.v5y(0, 0, 2048, 2048);
        $a[0](Db(x, 0.3, 55, 10));
        $a[1](Db(x, 55, 177, 11));
        ba();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        $a[0]();
        $a[1]();
        Z.uae(ba("a"), !1, kb(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
        Z.uae(ba("b"), !1, jb(x));
        Z.ubu(ba("k"), Pa, Qa, Ra);
        Kb(ba("c"), !Ca);
        ka();
        Z.ubu(ka("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, ia);
        za ? Z.ubu(ka("k"), 0, 0, 0) : Z.ubu(ka("k"), Pa, Qa, Ra);
        Z.uae(ka("b"), !1, jb(x.inverse()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, fa);
        Z.f1s();
      }, Ea = h, Ha = Z.c5w(), fa = Z.c5w(), Ia = Z.c3z(), Za = Z.c25(), Ma = Hb("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}"), pa = Ib(Hb("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), 
      "#version 300 es\nvoid main(){}",), ka = Ib(Hb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), xa = Ib(Ma, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), ba = Ib(Ma, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), $a = (xa(), Z.uae(xa("a"), !1, kb(1.4, 0.59, 1e-4, 1)), ka(), Z.ubh(ka("q"), 3), ba(), Z.ubh(ba("q"), 3), t(2, C => {
        const x = new Float32Array(16), z = Z.c25(), V = ba(C ? "j" : "i");
        return Z.b6o(36160, Ha), Z.d45([0]), Z.r9l(0), Z.ubh(ba(C ? "h" : "g"), C), Z.a4v(33984 + C), Z.b9j(3553, z), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), R => {
          R ? (jb(R, x), Z.uae(pa("b"), !1, x), Z.fas(36160, 36096, 3553, z, 0), Z.c4s(256), Kb(pa("c"), !Ca)) : Z.uae(V, !1, x);
        };
      }));
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 1);
      Z.b6o(36160, fa);
      Z.bb1(36161, Ia);
      Z.r4v(36161, 33189, 128, 128);
      Z.f8w(36160, 36096, 36161, Ia);
      Z.a4v(33987);
      Z.b9j(3553, Za);
      Z.fas(36160, 36064, 3553, Za, 0);
      Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      Z.a4v(33987);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Ea);
      Z.gbn(3553);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      e[37].g = () => q.translate(n.x, r, n.z).rotateSelf(0, v,);
      [38, 39].map((C, x) => {
        e[C].g = () => e[37].l.translate(0, y * bb(0.45 * Math.sin(9.1 * a + Math.PI * (x - 1) - Math.PI / 2)),).rotateSelf(y * Math.sin(9.1 * a + Math.PI * (x - 1)) * 0.25 / Ua, 0);
      });
      try {
        const [C, x, z, V, R] = JSON.parse(localStorage.DanteSP22,);
        l.map((G, D) => G.h = G.i = G.j = D ? 0 | C[D] : 0);
        Fa.map((G, D) => G.j = 0 | x[D]);
        la = z;
        a = V;
        ta = R;
      } catch {
      }
      sa = 0 > la ? 0 : 1 < la ? 1 : la;
      yb();
      ua();
      Pa = L = n.x;
      Qa = (M = n.y) + 13;
      Ra = (aa = n.z) + -18;
      requestAnimationFrame(O);
      NO_INLINE(Gb)();
    }
  }, h = new Image();
  h.onload = h.onerror = c;
  h.src = Rb;
  NO_INLINE(Qb)(() => {
    Lb(() => {
      const u = [], w = L => {
        let {x:M, y:aa, z:Q} = F[L], Y = (B[0] = M, B[1] = aa, B[2] = Q, L = "" + (F.D ? A : r), g.get(L));
        return void 0 !== Y ? (M = 3 * Y, f[M] = (f[M++] + r[5]) / 2, f[M] = (f[M++] + r[6]) / 2, f[M] = (f[M] + r[7]) / 2) : (g.set(L, Y = g.size), N.push(M, aa, Q, B[3]), P.push(r[4]), f.push(r[5], r[6], r[7])), Y;
      };
      let E = 0, F;
      const N = [], P = [], f = [], g = new Map(), r = new Int32Array(8), A = new Int32Array(r.buffer, 0, 5), B = new Float32Array(r.buffer);
      for (const L of e) {
        for (F of (B[3] = 40 === L.F ? -13 : L.H && L.F, L.s)) {
          const {x:M, y:aa, z:Q} = ib(F);
          r[4] = 0 | F.A;
          r[5] = 32767 * M;
          r[6] = 32767 * aa;
          r[7] = 32767 * Q;
          for (let Y = 2, da = w(0), ua = w(1); F.length > Y; ++Y) {
            u.push(da, ua, ua = w(Y));
          }
        }
        L.s = null;
        L.v = E;
        L.G = E = u.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(N), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(f), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(P), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(u), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Lb(c);
    });
    let k;
    const m = (u, w, E) => q.translate(u + Math.sin(a + 2) / 5, w + Math.sin(0.8 * a) / 3, E).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),), p = (() => {
      const u = t(11, E => q.translate(Math.sin(E / 10 * Math.PI), E / 10).rotate(+E).scale(1.0001 - E / 10, 0, 1 - E / 10),), w = nb(18);
      return t(10, E => ob(mb(w, u[E]).reverse(), mb(w, u[E + 1]), 1),).flat();
    })(), v = S(J(H(I(20, 1, 1.15, 1), q.translate(0, -3).scale(3.5, 1, 3.5), X(0.7, 0.4, 0.25, 0.7),), H(I(20, 1, 1.3, 1), q.translate(0, -2.5).scale(2.6, 1, 3), X(0.7, 0.4, 0.25, 0.2),), H(I(), q.translate(4, -1.2).scale3d(2), X(0.7, 0.4, 0.25, 0.3)),),), y = S(J(H(I(), q.translate(0, -8).scale(6, 15, 2.2)), H(I(), q.translate(0, -14.1).scale(4, 13, 4)), H(I(20, 1), q.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),);
    U(() => {
      W([Da.slice(1)], q.translate(-2).scale3d(3).rotate(90, 0));
    }, 0);
    U(() => {
      const u = (f, g, r) => U(A => {
        A.g = () => q.translate(w() * Math.sin(3 * f + a * f) * g);
        Da.map(({x:B, z:L}) => {
          W(I(11, 1), q.translate(4 * B, 4, r + 4 * L).scale(0.8, 3, 0.8), X(0.5, 0.3, 0.7, 0.6),);
          W(I(), q.translate(4 * B, 7, r + 4 * L).scale(1, 0.3), X(0.5, 0.5, 0.5, 0.3),);
        });
        W(S(J(H(I(), q.translate(0, 0, r).scale(5, 1, 5), X(0.8, 0.8, 0.8, 0.3),), ...[-1, 1].map(B => H(I(), q.translate(5 * B, 0.2, r).rotate(0, 0, -30 * B).scale(4, 1, 2), X(0.8, 0.8, 0.8, 0.3),)),),),);
        W(I(), q.translate(0, -3, r).scale(8, 2, 8), X(0.4, 0.4, 0.4, 0.3));
      }), w = () => {
        var f = l[2].i, g = 1 - l[4].i;
        return f < g ? f : g;
      }, E = (U(f => {
        f.g = () => m(-12, 4.2, 40 * sa - 66);
        W(v);
        Bb(q.translate(0, -3, 4));
      }), t(7, f => H(I(6, 1), q.translate(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), X(0.3, 0.3, 0.38),)).flat()), F = (Cb(q.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), Cb(q.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...nb(18).map(({x:f, z:g}) => [7 * f, 10 * g, 4.5 - 2 * (0 > f ? -f : f)]),), W(I(), q.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), X(0.8, 0.8, 0.8, 0.2),), Da.map(({x:f, z:g}) => W(I(6), q.translate(3 * f, 3, 15 * g).scale(0.7, 4, 0.7), X(0.6, 0.3, 0.3, 0.4),)), 
      [-23, 22].map(f => W(I(), q.translate(0, 0, f).scale(3, 1, 8), X(0.9, 0.9, 0.9, 0.2))), [-15, 15].map((f, g) => {
        W(I(), q.translate(0, 6.3, f).scale(4, 0.3, 1), X(0.3, 0.3, 0.3, 0.4));
        W(I(), q.translate(0, 1, f).scale(3, 0.2, 0.35), X(0.5, 0.5, 0.5, 0.3));
        U(r => {
          r.g = () => q.translate(0, 4.7 * -l[g + 1].h, f);
          W(E);
        });
      }), t(5, f => t(2, g => W(p, q.translate(18.5 * (g - 0.5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2,), X(1, 1, 0.8, 0.2),))), W(I(), q.translate(3, 1.5, -20).scale(0.5, 2, 5), X(0.7, 0.7, 0.7, 0.2)), W(I(), q.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), X(0.75, 0.75, 0.75, 0.2),), W(I(5), q.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), X(0.6, 0.3, 0.3, 0.4),), Bb(q.translate(-5.4, 1.5, -19).rotate(0, -90)), W(I(), q.rotate(0, 60).translate(14.8, 
      -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5), X(0.8, 0.2, 0.2, 0.5),), W(S(J(xb(H(I(6, 0, 0, 0.3), q.translate(8, -3, -4).scale(13, 1, 13), X(0.7, 0.7, 0.7, 0.2),), H(I(6), q.translate(0, -8).scale(9, 8, 8), X(0.4, 0.2, 0.5, 0.5),), H(I(6, 0, 0, 0.3), q.translate(0, -0.92).scale(13, 2, 13), X(0.8, 0.8, 0.8, 0.2),),), H(I(5), q.scale(5, 30, 5), X(0.4, 0.2, 0.6, 0.5)), H(I(5, 0, 1.5), q.translate(0, 1).scale(4.5, 0.3, 4.5), X(0.7, 0.5, 0.9, 0.2),), H(I(), q.rotate(0, 60).translate(14, 0.7, 
      -1).rotate(0, 0, -35).scale(2, 2, 2), X(0.5, 0.5, 0.5, 0.5),), H(I(6), q.translate(15, -1.5, 4).scale(3.5, 1, 3.5), X(0.5, 0.5, 0.5, 0.5),),),),), U(f => {
        f.g = () => q.translate(0, 0.01 < l[3].h ? (5 * Math.cos(1.5 * a) + 2) * l[3].i * (1 - l[2].h) + -15 * (1 - l[3].h) : -500, 0,);
        Bb(q.translate(0, 1.2));
        W(I(5), q.translate(0, -0.2).scale(5, 1, 5), X(0.6, 0.65, 0.7, 0.3));
      }), Bb(q.translate(15, -2, 4)), u(0.7, 12, 35), u(1, 8.2, 55), U(f => {
        f.g = () => q.translate(w() * Math.sin(a / 1.5 + 2) * 12);
        W(S(J(xb(H(I(), q.scale(1.5, 1, 5), X(0.9, 0.9, 0.9, 0.2)), H(I(6), q.scale(4, 1, 5), X(0.9, 0.9, 0.9, 0.2)), H(I(), q.translate(0, -2).scale(2, 3.2, 1.9), X(0.3, 0.8, 0.5, 0.5),), H(I(16, 1, 0, 4), q.scale(1, 1, 1.5).rotate(0, 90), X(0.9, 0.9, 0.9, 0.2),),), H(I(), q.scale(1.3, 10, 1.3), X(0.2, 0.7, 0.4, 0.6)),),), q.translate(0, 0, 45),);
        Cb(q.translate(0, 2.8, 45), [0, 0, 4.5]);
      }), U(f => {
        f.g = () => q.translate(9.8 * (1 - w()));
        W(I(3), q.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), X(0.3, 0.6, 0.6, 0.2),);
        W(I(8), q.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), X(0.8, 0.8, 0.8, 0.2),);
        W(I(), q.translate(-23, -3, 55).scale(5.2, 1.7, 3), X(0.5, 0.5, 0.5, 0.3),);
        W(I(), q.translate(-23, -2.2, 62).scale(3, 1, 4), X(0.5, 0.5, 0.5, 0.3));
        Bb(q.translate(-23, -0.5, 66.5));
      }), W(I(), q.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2),), U(f => {
        f.g = () => q.translate(0, bb(1 - 5 * w()) * cb(l[4].h, l[5].h) * Math.sin(1.35 * a) * 4);
        W(I(), q.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), X(0.7, 0.7, 0.7, 0.2),);
        W(S(J(H(I(), q.scale(3, 1.4, 2.7)), H(I(), q.scale(1.2, 8, 1.2)),),), q.translate(-33, -3, 55), X(0.7, 0.7, 0.7, 0.2),);
      }), U(f => {
        f.g = () => q.translate(0, 0, bb(1 - 5 * w()) * cb(l[4].h, l[5].h) * Math.sin(0.9 * a) * 8);
        W(S(J(H(I(), q.translate(-27, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2),), H(I(), q.translate(-27, -3, 55).scale(1, 3), X(0.9, 0.9, 0.9, 0.2),),),),);
        W(I(), q.translate(-39, -3, 55).scale(3, 1.4, 2.7), X(0.9, 0.9, 0.9, 0.2),);
      }), U(f => {
        f.g = () => q.translate(0, -6.5 * l[4].i);
        W(I(6), q.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9), X(0.7, 0.7, 0.7, 0.4),);
      }), [...H(S(xb(H(I(), q.translate(0, -3).scale(11, 1.4, 3), X(0.9, 0.9, 0.9, 0.2),), J(H(I(6), q.rotate(0, 0, 90).scale(6, 8, 6), X(0.3, 0.6, 0.6, 0.3),), H(I(4, 0, 0.01), q.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), X(0.3, 0.6, 0.6, 0.3),), H(I(6), q.rotate(0, 0, 90).scale(5, 12, 5), X(0.3, 0.6, 0.6, 0.3),), ...[5, 0, -5].map(f => H(I(5), q.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), X(0.3, 0.6, 0.6, 0.3),)),),),), q,)]), N = (W(F, q.translate(-53, 0, 55)), W(I(6), q.translate(-61.3, 
      -2.4, 49).scale(3, 1, 5), X(0.4, 0.6, 0.6, 0.3)), W(I(7), q.translate(-57, -2.6, 46).scale(4, 1, 4), X(0.8, 0.8, 0.8, 0.3)), Bb(q.translate(-55, -1.1, 46).rotate(0, 90)), U(f => {
        f.g = () => q.translate(-75, (1 - l[5].i) * (1 - l[6].h) * 3, 55).rotate(180 * (1 - l[5].i) + oa, 0,);
        W(F);
      }, 2), W(I(), q.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), X(0.7, 0.7, 0.7, 0.2),), W(I(3, 0, -0.5), q.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), X(0.8, 0.8, 0.8, 0.2),), W(S(J(xb(H(I(), q.translate(-100, -2.5, 55).scale(8, 1, 8), X(0.8, 0.8, 0.8, 0.2),), H(I(), q.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), X(0.8, 0.8, 0.8, 0.2),), H(I(), q.translate(-100, -2.6, 70).scale(3, 1.1, 7), X(0.8, 0.8, 0.8, 0.2),), H(I(), q.translate(-96, -2.6, 
      73).rotate(0, 45).scale(3, 1.1, 5), X(0.8, 0.8, 0.8, 0.2),), H(I(6), q.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), X(0.6, 0.6, 0.6, 0.3),), H(I(), q.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), X(0.8, 0.8, 0.8, 0.2),), H(I(), q.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), X(0.8, 0.8, 0.8, 0.2),),), H(I(8), q.translate(-100, -1, 55).scale(7, 0.9, 7), X(0.3, 0.3, 0.3, 0.4),), H(I(8), q.translate(-100, -2, 55).scale(4, 0.3, 4), X(0.4, 0.4, 0.4, 0.5),), H(I(8), 
      q.translate(-100, -3, 55).scale(0.6, 1, 0.6), X(0.4, 0.4, 0.4, 0.5),),),), q,), Cb(q.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), Cb(q.translate(-89, 0.2, 80), [0, 0, 6]), W(S(J(H(I(), q.translate(-100, 1, 63).scale(7.5, 4), X(0.5, 0.5, 0.5, 0.4),), H(I(), q.translate(-100, 0, 70).scale(2, 2, 10), X(0.5, 0.5, 0.5, 0.4),), H(I(20, 1), q.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), X(0.5, 0.5, 0.5, 0.4),),),),), U(f => {
        f.g = () => q.translate(-99.7, 5.3 * -l[6].h - 2, 63.5);
        W(E);
      }), Da.map(({x:f, z:g}) => {
        W(I(6), q.translate(7 * f - 100, -3, 7 * g + 55).scale(1, 8.1), X(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4].map(r => W(I(6), q.translate(7 * f - 100, r, 7 * g + 55).scale(1.3, 0.5, 1.3), X(0.4, 0.2, 0.2, 0.8),));
      }), t(7, f => {
        W(I((23 * f + 1) % 5 + 5, 0, 0.55), q.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), X(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), W(I(), q.translate(-87, -9.5, 24).scale(7, 1, 3), X(0.4, 0.5, 0.6, 0.4)), W(I(4), q.translate(-86, -9.2, 27).scale(5, 1, 5), X(0.5, 0.6, 0.7, 0.3)), W(I(12, 1), q.translate(-86, -9, 31).scale(1.5, 1, 1.5), X(0.3, 0.3, 0.4, 0.1),), Bb(q.translate(-86, -7.5, 31)), U(f => {
        f.g = () => q.translate(0, 3.5 * (1 - Xa(l[6].h, l[7].h)) + cb(l[7].i, l[6].i) * Math.sin(a) * 5,);
        [0, 12, 24].map(g => W(I(), q.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.2, 0.5, 0.6, 0.2),));
      }), U(f => {
        f.g = () => {
          const g = cb(l[7].i, l[6].i);
          return q.translate(0, g * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + g) * g,);
        };
        [6, 18].map(g => W(I(), q.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), X(0.1, 0.4, 0.5, 0.2),));
      }), W(S(J(xb(H(I(), q.scale(11, 1, 13), X(0.3, 0.4, 0.6, 0.3)), H(I(5), q.translate(0, 0, -7).scale(2, 1.2, 2), X(0.2, 0.4, 0.7, 0.3),), H(I(5), q.scale(9, 1.2, 9), X(0, 0.2, 0.3, 0.5)),), H(I(5), q.scale(5.4, 5, 5.4), X(0, 0.2, 0.3, 0.5)),),), q.translate(-38.9, -11.3, 17),), Bb(q.translate(-38.9, -9.6, 10)), U(f => {
        f.g = () => q.translate(0, -7.3 * l[7].i);
        W(S(J(xb(H(I(5), q.translate(0, 2).scale(5, 7, 5).skewY(8), X(0.2, 0.4, 0.5, 0.5),), H(I(5), q.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), X(0.25, 0.35, 0.5, 0.5),), H(I(5), q.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), X(0.35, 0.3, 0.5, 0.5),),), H(I(5), q.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), X(0.2, 0.4, 0.5, 0.5),),),), q.translate(-38.9, -11.3, 17),);
        Cb(q.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...nb(15).map(({x:g, z:r}) => [3 * g, 3 * r, 1.2]),);
      }), Da.map(({x:f, z:g}) => {
        k = q.translate(9 * f - 38.9, -7.3, 11 * g + 17);
        W(I(14, 1), k.scale(1, 4), X(0.25, 0.25, 0.25, 1));
        [1.5, 8].map(r => W(I(17, 1), k.translate(0, r - 4).scale(1.5, 0.5, 1.5), X(0.6, 0.6, 0.6, 0.3),));
      }), W(S(J(xb(H(I(6), q.translate(0, 0, -36).scale(15, 1.2, 15), X(0.7, 0.7, 0.7, 0.3),), H(I(), q.translate(0, 0, -18).scale(4, 1.2, 6), X(0.45, 0.4, 0.6, 0.3),),), ...t(6, f => t(6, g => H(I(6), q.translate(4.6 * g - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2,), X(0.7, 0.7, 0.7, 0.3),))).flat(),),), q.translate(-38.9, -11.3, 17),), Cb(q.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]), W(I(5), q.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 
      10), X(0.8, 0.1, 0.25, 0.4),), Bb(q.translate(-84, -0.5, 85).rotate(0, 45)), U(f => {
        f.g = () => m(-123, 1.4, 55 + -65 * ta);
        Bb(q.translate(0, -3, -4).rotate(0, 180));
        W(v);
      }), Cb(q.translate(-115, 0.2, -12), [0, 0, 3.5]), S(J(H(I(), q.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), X(0.25, 0.25, 0.35, 0.3),), H(I(3), q.translate(0, 0, -5.5).scale(3, 2), X(0.6, 0.3, 0.4, 0.3),), ...[-1.2, 1.2].map(f => H(I(), q.translate(f, -0.5, 1).scale(0.14, 0.3, 6.5), X(0.7, 0.2, 0, 0.3),)),),)), P = (U(f => {
        f.g = () => {
          var g = Math.sin(1.1 * a);
          return q.translate.call(q, 0, -2, cb(l[10].h, l[11].h) * (0 > g ? -g : g) * -8.5 + 10);
        };
        t(2, g => W(N, q.translate(9 * g - 110 + (1 & g), 1.7, -12)));
      }), U(f => {
        f.g = () => {
          var g = Math.sin(2.1 * a);
          return q.translate.call(q, 0, -2, cb(l[10].h, l[11].h) * (0 > g ? -g : g) * -8.5 + 10);
        };
        t(2, g => W(N, q.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
      }), U(f => {
        f.g = () => {
          var g = Math.sin(1.5 * a);
          return q.translate.call(q, 0, -2, -8.5 * Xa((1 - l[10].h) * (1 - cb(l[10].h, l[11].h)), cb(l[10].h, l[11].h) * (0 > g ? -g : g),) + 10,);
        };
        t(3, g => W(N, q.translate(9 * g - 106, 1.7, -12)));
      }), W(S(J(xb(H(I(), q.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), H(I(), q.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),), ...t(4, f => H(I(), q.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...t(3, f => H(I(), q.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),),), q.translate(-123, 0, -12), X(0.5, 0.5, 0.6, 0.2),), W(I(5), q.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), X(0.25, 0.25, 0.35, 1),), W(I(), q.translate(-116, -2.6, -12).scale(3.2, 
      1.1, 4).skewX(3), X(0.8, 0.8, 0.8, 0.2),), W(I(6), q.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), X(0.6, 0.5, 0.7, 0.2),), Bb(q.translate(-116, -1.4, -18).rotate(0, 180)), t(3, f => {
        W(y, q.translate(12 * f - 109, -9, -12), X(0.6, 0.6, 0.6, 0.3));
        W(y, q.translate(-77, -9, -12 * f - 20).rotate(0, 90), X(0.6, 0.6, 0.6, 0.3),);
      }), W(S(J(H(I(12), q.translate(-77, -13.9, -12).scale(4, 18.2, 4), X(0.7, 0.7, 0.7, 0.2),), H(I(), q.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), X(0.4, 0.5, 0.6, 0.2),), H(I(), q.translate(-77, 0, -14).scale(1.5, 2.2, 2), X(0.4, 0.5, 0.6, 0.2),), H(I(12), q.translate(-77, 2.8, -12).scale(3, 5, 3), X(0.4, 0.5, 0.6, 0.2),),),),), W(I(), q.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), X(0.6, 0.6, 0.6, 0.3),), W(I(), q.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), X(0.6, 0.6, 0.6, 0.3),), 
      W(I(), q.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), X(0.6, 0.6, 0.6, 0.3),), W(S(J(H(I(), q.translate(-93, -5.8, -40).scale(9, 1, 5), X(0.8, 0.8, 0.8, 0.1),), H(I(9), q.translate(-98, -5.8, -40).scale(3, 8, 3), X(0.7, 0.7, 0.7, 0.2),),),),), W(I(9), q.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), X(0.5, 0.5, 0.5, 0.3),), Bb(q.translate(-98, -4.4, -40).rotate(0, 90)), Cb(q.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]), W(S(J(xb(H(I(6, 0, 0, 0.6), q.translate(-100, 
      0.7, 105.5).scale(8, 1, 11), X(0.7, 0.7, 0.7, 0.2),), H(I(), q.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), X(0.7, 0.7, 0.7, 0.2),), H(I(), q.translate(-91.2, 0.7, 107).scale(3, 1, 3.3), X(0.7, 0.7, 0.7, 0.2),),), H(I(5), q.translate(-100, 0.7, 113).scale(4, 3, 4), X(0.7, 0.7, 0.7, 0.2),),),),), t(4, f => U(g => {
        g.g = () => {
          const r = cb(l[8].i, l[12].i);
          return q.translate((2 < f ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + 0.7, 115 + (1 & f ? -1 : 1) * (1 - l[8].i) * (1 - l[12].i) * -7 + (0.05 > r ? 0.05 : r) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
        };
        W(I(6), q.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), X(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
      })), U(f => {
        f.g = () => {
          const g = cb(l[8].i, l[12].i);
          return q.translate(2.5 * (1 - g) - 139.7, -3 * (1 - l[8].h) + g * Math.sin(0.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
        };
        W(S(J(H(I(10), q.scale(6, 2, 6), X(0.1, 0.6, 0.5, 0.3)), H(I(10), q.scale(3.3, 6, 3.3), X(0.1, 0.6, 0.5, 0.5)),),),);
        k = q.translate(-7.5).rotate(0, 90);
        W(I(15, 1), k.scale(3, 2.3, 3), X(0.4, 0.4, 0.4, 0.3));
        W(I(10), k.scale(2, 2.5, 2), X(0.3, 0.8, 0.7, 0.3));
        W(I(5), k.scale(1, 3), X(0.5, 0.5, 0.5, 0.5));
        Bb(k.translate(0, 3.4).rotate(0, 180));
        [-1, 1].map(g => W(p, q.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), X(1, 1, 0.8, 0.2),));
        Cb(q.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
      }), [-1, 1].map(f => {
        W(I(12, 1), q.translate(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), X(0.6, 0.24, 0.2, 0.5),);
        [7.2, 1.5].map(g => W(I(15, 1), q.translate(-7.5 * f - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), X(0.5, 0.24, 0.2, 0.4),));
        W(p, q.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), X(1, 1, 0.8),);
        W(S(J(H(I(), q.translate(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), X(0.5, 0.5, 0.5, 0.4),), H(I(), q.scale(3, 3, 10), X(0.6, 0.24, 0.2, 0.5)), H(I(28, 1), q.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), X(0.6, 0.24, 0.2, 0.5),), H(I(5), q.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), X(0.6, 0.24, 0.2, 0.5),), H(I(5), q.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), X(0.6, 0.24, 0.2, 0.5),),),), q.translate(f - 100, 0.7, 97),);
      }), U(f => {
        f.g = () => q.translate(-100, 0.6 - 6 * l[12].h, 96.5).scale(0.88, 1.2);
        W(E);
      }), [...H(I(25, 1), q.scale(8, 1, 8), X(0.45, 0.45, 0.45, 0.2)), ...H(I(5), q.translate(0, 1).scale(1, 0.2), X(0.3, 0.3, 0.3, 0.2),),]);
      U(f => {
        f.g = () => q.translate(-80, 1, 106).rotate(0, 40 + ma);
        W(S(J(H(I(25, 1), q.scale(8, 1, 8), X(0.45, 0.45, 0.45, 0.2)), H(I(), q.translate(0, 0, -5.5).scale(1.5, 3, 2.5), X(0.45, 0.45, 0.45, 0.2),),),),);
        W(I(8), q.translate(0, 2).scale(3, 1.5, 3), X(0.7, 0.7, 0.7, 0.1));
        W(I(5), q.translate(0, 2).scale(1, 2), X(0.3, 0.3, 0.3, 0.2));
        Cb(q.translate(0, 3), ...nb(10).map(({x:g, z:r}) => [5.6 * g, 5.6 * r, 2.5]),);
      });
      U(f => {
        f.g = () => q.translate(-64, 1, 106).rotate(0, na);
        W(S(J(H(I(25, 1), q.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3),), H(I(), q.scale(9, 5, 2), X(0.3, 0, 0, 0.3)),),),);
        W(P);
        [-1, 1].map(g => W(p, q.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), X(1, 1, 0.8),));
      });
      U(f => {
        f.g = () => q.translate(-48, 1, 106).rotate(0, 180 - na);
        W(S(J(H(I(25, 1), q.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3),), H(I(), q.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)), H(I(), q.translate(0, 0, 7).scale(2, 5, 9), X(0.3, 0, 0, 0.3),),),),);
        W(P);
      });
      U(f => {
        f.g = () => q.translate(-48, 1, 90).rotate(0, 270 + na);
        W(S(J(H(I(25, 1), q.translate(0, 2).scale(8, 1, 8), X(0.35, 0, 0, 0.3),), H(I(), q.translate(7).scale(9, 5, 2), X(0.3, 0, 0, 0.3)), H(I(), q.translate(0, 0, -7).scale(2, 5, 9), X(0.3, 0, 0, 0.3),),),),);
        W(P);
      });
      W(I(), q.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), X(0.7, 0.7, 0.7, 0.2));
      W(I(), q.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), X(0.7, 0.7, 0.7, 0.2));
      W(I(), q.translate(-39, 0.4, 90).scale(2, 1, 2), X(0.7, 0.7, 0.7, 0.3));
      W(I(), q.translate(-34.2, 0.4, 90).scale(3, 1, 3), X(0.7, 0.7, 0.7, 0.3));
      Bb(q.translate(-34, 2.7, 96).rotate(-12, 0));
      W(I(5), q.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), X(0.2, 0.5, 0.5, 0.6),);
      [X(0.1, 0.55, 0.45, 0.2), X(0.2, 0.5, 0.5, 0.3), X(0.3, 0.45, 0.55, 0.4)].map((f, g,) => U(r => {
        r.g = () => q.translate(0, (1 - l[13].i) * (1 - l[14].i) * (g ? 0 : 3) + cb(l[13].i, l[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,);
        W(I(), q.translate(-23.5, 0.5, 90 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), f,);
        2 === g && W(I(), q.translate(-29.1, 0.4, 90).scale(2.1, 1, 3), X(0.7, 0.7, 0.7, 0.3),);
        1 === g && W(I(), q.translate(-16.1, 0.5, 103.5).rotate(0, 0, -3.5).scale(3.9, 0.8, 2).skewX(-1), X(0.6, 0.6, 0.7, 0.3),);
      }));
      W(S(J(H(I(6, 0, 0, 0.3), q.translate(0, -0.92, 95).scale(14, 2, 14), X(0.8, 0.8, 0.8, 0.2),), H(I(5), q.translate(0, 0, 95).scale3d(6), X(0.3, 0.3, 0.3, 0.5),),),),);
      [8, -6.1].map((f, g) => t(3, r => W(y, q.translate(6 * r - 6, f - (1 & r), 111 - 0.2 * (1 & r) - g), 1 & r ? X(0.5, 0.5, 0.5, 0.3) : X(0.35, 0.35, 0.35, 0.5),),));
      [-1, 1].map(f => W(p, q.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), X(1, 1, 0.8),));
      Bb(q.translate(0, 1.7, 82).rotate(0, 180));
      W(I(5), q.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), X(0.5, 0.3, 0.3, 0.4),);
      W(S(J(xb(H(I(), q.translate(0, 16, 110.5).scale(12, 1, 3), X(0.5, 0.3, 0.3, 0.4),), H(I(), q.translate(0, 16, 111).scale(3, 1, 3.8), X(0.5, 0.3, 0.3, 0.4),),), H(I(5), q.translate(0, 16, 103.5).scale(5.5, 5, 5.5), X(0.5, 0.3, 0.3, 0.4),),),),);
      U(f => {
        f.g = () => {
          const g = Math.sin(a);
          return q.translate(-2 * g).rotate(0, 0, 25 * g);
        };
        W(I(3), q.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), X(0.5, 0.3, 0.3, 0.4),);
        [22, 30].map(g => {
          W(I(6), q.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), X(0.7, 0.7, 0.7, 0.4),);
          W(I(), q.translate(0, 6.2, g + 95).scale(0.5, 11, 0.5), X(0.5, 0.3, 0.3, 0.4),);
        });
      });
      W(I(6), q.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), X(0.5, 0.6, 0.7, 0.3),);
      W(I(), q.translate(0, 16, 129).scale(1.5, 1, 2), X(0.5, 0.6, 0.7, 0.3));
      W(I(7), q.translate(0, 16.2, 133).scale(5, 1, 5), X(0.4, 0.5, 0.6, 0.4));
      U(f => {
        f.g = () => {
          const g = cb(cb((l[14].h + l[14].i) / 2, l[13].i), (l[15].h + l[15].i) / 2,);
          return q.translate(0, 16 * g, 8.5 * bb(2 * g - 1) + 95);
        };
        W(I(5), q.scale(5, 1.1, 5), X(0.5, 0.3, 0.3, 0.4));
        W(I(5), q.scale(5.5, 0.9, 5.5), X(0.25, 0.25, 0.25, 0.4));
        Bb(q.translate(0, 1.5, -1).rotate(0, 180));
      });
      Cb(q.translate(0, 3, 95), ...nb(9).map(({x:f, z:g}) => [9 * f, 9 * g, 4]),);
      Cb(q.translate(0, 19, 134), [0, 0, 3.5]);
    });
    U(() => {
      [0, 180].map(w => W(p, q.rotate(0, w).translate(0.2, 1.32).rotate(0, 0, -30).scale(0.2, 0.6, 0.2), X(1, 1, 0.8),));
      W(pb(20), q.translate(0, 1).scale(0.5, 0.5, 0.5), X(1, 0.3, 0.4));
      const u = H(S(J(I(15, 1), H(I(), q.translate(0, 0, 1).scale(2, 2, 0.5)),),), q.rotate(-90, 0).scale(0.1, 0.05, 0.1), X(0.3, 0.3, 0.3),);
      [-1, 1].map(w => W(u, q.translate(0.2 * w, 1.2, 0.4).rotate(0, 20 * w, 20 * w)));
      W(I(), q.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), X(0.3, 0.3, 0.3));
      W(pb(20), q.scale(0.7, 0.8, 0.55), X(1, 0.3, 0.4));
    });
    [-1, 1].map(u => U(() => {
      W(I(10, 1), q.translate(0.3 * u, -0.8).scale(0.2, 0.7, 0.24), X(1, 0.3, 0.4));
    }));
    U(() => {
      W(I(6, 1), q.scale(0.13, 1.4, 0.13), X(0.3, 0.3, 0.5, 0.1));
      W(I(8, 1), q.translate(0, 1).scale(0.21, 0.3, 0.21), X(1, 0.5, 0.2));
      W(I(3), q.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), X(0.2, 0.2, 0.2, 0.1),);
    }, 0);
    U(() => {
      W(I(6).slice(0, -1), q.scale(0.77, 1, 0.77), X(1, 0.3, 0.5));
    }, 0);
    U(() => {
      W(pb(30, 24, (u, w, E) => {
        const F = w / 24, N = u * Math.PI * 2 / 30, P = F ** 0.6 * Math.PI / 2;
        u = F * F * Math.sin(u * Math.PI * 14 / 30) / 4;
        return 23 === w ? {x:E.D = 0, y:-0.5, z:0,} : {x:Math.cos(N) * Math.sin(P), y:Math.cos(F * Math.PI) - F - u, z:Math.sin(N) * Math.sin(P) + Math.sin(u * Math.PI * 2) / 4,};
      }), q.scale3d(0.7), X(1, 1, 1),);
      [-1, 1].map(u => W(pb(12), q.translate(0.16 * u, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls: <b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n');

