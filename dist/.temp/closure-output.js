let da = !0, fa = 0, ia = 0, la = 0, a = 0, ma = 0, na = 0, oa = 0, ta = 0, ua = 0, ya = 0, za = 0, Ba = 0, Ca = 0, d = .066, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka;
const La = Math.PI / 180, e = new DOMMatrix(), Ma = (b, c) => c < b ? b : c, Na = b => 0 > b ? -b : b, Oa = b => 0 > b ? 0 : 1 < b ? 1 : b, Pa = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)), Ua = b => Math.atan2(Math.sin(b *= La), Math.cos(b)) / La, Va = (b, c, g) => {
  b *= La;
  c = (c * La - b) % (2 * Math.PI);
  return (b + (2 * c % (2 * Math.PI) - c) * (0 > g ? 0 : 1 < g ? 1 : g)) / La;
}, Wa = (b, c, g, k) => {
  var m = c - b;
  b += Math.sign(c - b) * Ma(0, (0 > m ? -m : m) ** .9 - g) * k * 2;
  return b + (c - b) * Oa(k / 7);
}, Xa = (b, c) => Array.from(Array(b), (g, k) => c(k)), Ya = (b, c, g, k,) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (k + g) / (g - k), -1, 0, 0, 2 * k * g / (g - k), 0], Za = ({x:b, y:c, z:g}, k) => b * k.x + c * k.y + g * k.z, $a = ({x:b, y:c, z:g}) => {
  var k = h;
  return Math.hypot(b - k.x, c - k.y, g - k.z) || 0;
}, ab = b => {
  let c = 0, g = 0, k = 0, m, q = b.at(-1);
  for (m of b) {
    c += (q.y - m.y) * (q.z + m.z), g += (q.z - m.z) * (q.x + m.x), k += (q.x - m.x) * (q.y + m.y), q = m;
  }
  return m = Math.hypot(c, g, k), c /= m, g /= m, k /= m, {x:c, y:g, z:k, w:c * q.x + g * q.y + k * q.z,};
}, bb = new Float32Array(16), cb = (b, c = bb, g = 0,) => (g *= 16, c[g++] = b.m11, c[g++] = b.m12, c[g++] = b.m13, c[g++] = b.m14, c[g++] = b.m21, c[g++] = b.m22, c[g++] = b.m23, c[g++] = b.m24, c[g++] = b.m31, c[g++] = b.m32, c[g++] = b.m33, c[g++] = b.m34, c[g++] = b.m41, c[g++] = b.m42, c[g++] = b.m43, c[g] = b.m44, c);
var eb = -11, fb = 17, gb = -90, hb = 0, ib = 0;
const nb = (b, c, g) => (b.D = g, b.A = c, b), ob = (b, c, g = b.A) => nb(b.map(k => (({x:m, y:q, z:D}, t) => ({x:m, y:q, z:D} = t.transformPoint({x:m, y:q, z:D,}), {x:m, y:q, z:D,}))(k, c)), g, b.D,), l = (b, c, g) => b.map(k => ob(k, c, g)), pb = (b, c = 0) => Xa(b, g => {
  const k = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:.01 > (0 > k ? -k : k) ? k : 0 > k ? k - c : k + c,};
}), qb = (b, c, g) => b.map((k, m, {length:q}) => nb([k, c[q - m - 1], c[q - (m + 1) % q - 1], b[(m + 1) % q]], b.A, g,)), p = (b, c, g = 0, k) => {
  k = b.length ? b : pb(b, k);
  b = ob(k, e.translate(0, 1).scale3d(0 < g ? g : 1));
  g = ob(k, e.translate(0, -1).scale3d(0 > g ? -g : 1)).reverse();
  return [...qb(g, b, c), b, g];
}, rb = (b, c = b, g = (k, m) => (m *= Math.PI / c, {x:Math.cos(k *= 2 * Math.PI / b) * Math.sin(m), y:Math.cos(m), z:Math.sin(k) * Math.sin(m),})) => {
  const k = [];
  for (let m = 0; b > m; m++) {
    for (let q = 0; c > q; q++) {
      const D = nb([], 0, 1);
      k.push(D);
      D.push(g(m, q, D));
      q && D.push(g((m + 1) % b, q, D));
      c - 1 > q && D.push(g((m + 1) % b, q + 1 % c, D));
      D.push(g(m, q + 1 % c, D));
    }
  }
  return k;
}, sb = (b, c, g, k) => {
  let m = 0, q = 0, D = 0, t = 1 / 0, z = -1 / 0, P = 1 / 0, v = -1 / 0, x = 1 / 0, w = -1 / 0;
  const C = 1.1 * (g - c), T = (new DOMMatrix(Ya(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, g))).multiplySelf(b).invertSelf();
  b = Xa(8, A => {
    A = T.transformPoint({x:4 & A ? 1 : -1, y:2 & A ? 1 : -1, z:1 & A ? 1 : -1,});
    return m -= A.x = (C * A.x | 0) / C / A.w, q -= A.y = (C * A.y | 0) / C / A.w, D -= A.z = (C * A.z | 0) / C / A.w, A;
  });
  c = e.rotate(298, 139).translateSelf(m / 8, q / 8, D / 8);
  return ob(b, c).map(({x:A, y:f, z:n}) => {
    t = t < A ? t : A;
    z = A < z ? z : A;
    P = P < f ? P : f;
    v = f < v ? v : f;
    x = x < n ? x : n;
    w = n < w ? w : n;
  }), x *= 0 > x ? k : 1 / k, w *= 0 < w ? k : 1 / k, e.scale(2 / (z - t), 2 / (v - P), 2 / (x - w)).translateSelf((z + t) / -2, (v + P) / -2, (x + w) / 2,).multiplySelf(c);
}, tb = [], r = (b, c = e, g) => Da.s.push(...l(b, c, g)), u = (b, c = 1) => {
  const g = Da;
  c = {l:e, F:tb.length, H:c, s:[],};
  return tb.push(Da = c), b(c), Da = g, c;
}, ub = (b, c = 35633) => {
  c = I.c6x(c);
  return I.s3c(c, b), I.c6a(c), c;
}, vb = (b, c) => {
  const g = {}, k = I.c1h();
  return I.abz(k, b), I.abz(k, ub(c, 35632)), I.l8l(k), m => m ? g[m] || (g[m] = I.gan(k, m)) : I.u7y(k);
}, wb = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 
0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 
55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], xb = b => Math.sin(b * Math.PI * 2), yb = b => .5 > b % 1 ? 1 : -1, zb = b => b % 1 * 2 - 1, Ab = b => {
  b = b % 1 * 4;
  return 2 > b ? b - 1 : 3 - b;
}, Gb = [], Jb = () => {
  Ea || !da ? Hb.disconnect() : Hb.connect(Ib.destination);
  b4.innerHTML = "Music: " + da;
}, Kb = (b = !1) => {
  if (Ea !== b) {
    Ea = b;
    Fa = 0;
    try {
      b ? document.exitPointerLock() : Hb.start();
    } catch {
    }
    document.body.className = b ? "l m" : "l";
    Jb();
  }
}, Lb = () => {
  let b = 0, c = 0, g = 0, k, m, q;
  const D = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Gb.length = fa = ia = 0;
    k = m = void 0;
    document.hidden && Kb(!0);
  };
  b1.onclick = () => Kb();
  b2.onclick = () => {
    Kb();
    Fa = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    da = !da;
    Jb();
  };
  b5.onclick = () => Kb(!0);
  onclick = () => {
    q = 1;
    Ea || (Gb[5] = !0, Fa && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = D;
  onkeydown = onkeyup = ({code:t, target:z, type:P, repeat:v}) => {
    v || ((z = !!P[5] && z === document.body) && ("Escape" === t || "Enter" === t && Ea) ? Ea && !q || Kb(!Ea) : (t = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[t], 5 === t ? z && (Gb[t] = 1) : Gb[t] = z));
  };
  onmousemove = ({movementX:t, movementY:z}) => {
    Fa && (t || z) && (ib += .1 * t, hb += .1 * z);
  };
  hC.ontouchstart = t => {
    if (!Ea) {
      for (const z of t.changedTouches) {
        Fa && z.pageX > hC.clientWidth / 2 ? k || (k = z, b = ib, c = hb) : m = m || z;
      }
      g = la;
    }
  };
  hC.ontouchmove = ({changedTouches:t}) => {
    if (!Ea) {
      for (const {pageX:z, pageY:P, identifier:v} of t) {
        k?.identifier === v && (ib = b + (z - k.pageX) / 3, hb = c + (P - k.pageY) / 3), m?.identifier === v && (fa = -(z - m.pageX) / 18, ia = -(P - m.pageY) / 18, fa = .35 > (0 > fa ? -fa : fa) ? 0 : .8 * fa, ia = .35 > (0 > ia ? -ia : ia) ? 0 : .8 * ia);
      }
    }
  };
  hC.ontouchend = t => {
    for (const z of t.changedTouches) {
      z.identifier === k?.identifier && (k = void 0), z.identifier === m?.identifier && (m = void 0, ia = fa = 0);
    }
    t.preventDefault();
    t = la - g;
    (!g || .02 < t && .4 > t) && (Gb[5] = !0);
  };
  oncontextmenu = () => !1;
  D();
  Kb(!0);
}, J = (b, c, g) => b + (c - b) * Oa(1 - Math.exp(-g * d)), Mb = ({j:b}) => b, L = [], Nb = [], Ob = () => {
  var b = Pa(L[12].g, L[13].g);
  a > na && (h4.innerHTML = "", na = 0);
  var c = J(ya, 0, 1);
  ya = c + (Ua(ya + 60 * d) - c) * Oa(L[5].g - L[6].i);
  c = J(ta, 0, 5);
  ta = c + (Ua(ta + 56 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
  c = J(ua, 0, 4);
  ua = c + (Ua(ua + 48 * d) - c) * (0 > b ? 0 : 1 < b ? 1 : b);
  b = 2 * L[9].i - 1;
  Ca = J(Ca, L[9].i, .2 + .3 * (0 > b ? -b : b));
  Ba = J(Ba, za ? Ba + (-9 - Ba) * Oa(1.5 * d) : Oa(a / 3), 1,);
  L[0].j && .7 < L[0].g && (13 > ma ? (za || (h4.innerHTML = "Not leaving now, there are souls to catch!", na = a + 3), L[0].j = 0) : za || (za || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", na = a + 1 / 0), za = 1));
  for (const g of tb) {
    g.h && (g.l = g.h(g));
  }
  for (const g of L) {
    g.h();
  }
  for (const g of Nb) {
    g.h();
  }
}, Pb = () => {
  ma = Nb.reduce((b, c) => b + c.j, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ma];
}, Qb = () => {
  Pb();
  localStorage.DanteSP22 = JSON.stringify([L.map(Mb), Nb.map(Mb), oa, a, Ca,]);
}, Rb = () => {
  let b = 0, c;
  const g = [], k = [], m = [], q = [], D = new Map(), t = new Int32Array(8), z = x => {
    let {x:w, y:C, z:T} = c[x];
    v[0] = w;
    v[1] = C;
    v[2] = T;
    x = "" + (c.D ? P : t);
    let A = D.get(x);
    return void 0 !== A ? (w = 3 * A, q[w] = (q[w++] + t[5]) / 2, q[w] = (q[w++] + t[6]) / 2, q[w] = (q[w] + t[7]) / 2) : (D.set(x, A = D.size), k.push(w, C, T, v[3]), m.push(t[4]), q.push(t[5], t[6], t[7])), A;
  }, P = new Int32Array(t.buffer, 0, 5), v = new Float32Array(t.buffer);
  for (const x of tb) {
    for (c of (v[3] = x.H ? x.F : 0, x.s)) {
      const {x:w, y:C, z:T} = ab(c);
      t[4] = 0 | c.A;
      t[5] = 32767 * w;
      t[6] = 32767 * C;
      t[7] = 32767 * T;
      for (let A = 2, f = z(0), n = z(1); c.length > A; ++A) {
        g.push(f, n, n = z(A));
      }
    }
    x.s = null;
    x.v = b;
    x.G = b = g.length;
  }
  I.b11(34963, I.c1b());
  I.b2v(34963, new Uint16Array(g), 35044);
  I.b11(34962, I.c1b());
  I.b2v(34962, new Float32Array(k), 35044);
  I.v7s(0, 4, 5126, !1, 0, 0);
  I.b11(34962, I.c1b());
  I.b2v(34962, new Int16Array(q), 35044);
  I.v7s(1, 3, 5122, !0, 0, 0);
  I.b11(34962, I.c1b());
  I.b2v(34962, new Uint32Array(m), 35044);
  I.v7s(2, 4, 5121, !0, 0, 0);
  I.e3x(0);
  I.e3x(1);
  I.e3x(2);
}, Sb = (b, c) => {
  var g, k, m, q = c.C;
  for (var D = 0; q.length > D; ++D) {
    if (-0.00008 > (m = Za(b, q[D]) - b.w) ? k = c : 8e-5 < m && (g = c), k && g) {
      k = [];
      m = [];
      q = c.C;
      D = c.B;
      let t = q.at(-1), z = Za(b, t) - b.w;
      for (const P of q) {
        g = Za(b, P) - b.w, 8e-5 > z && m.push(t), -0.00008 < z && k.push(t), (8e-5 < z && -0.00008 > g || -0.00008 > z && 8e-5 < g) && (z /= g - z, t = {x:t.x + (t.x - P.x) * z, y:t.y + (t.y - P.y) * z, z:t.z + (t.z - P.z) * z,}, k.push(t), m.push(t)), t = P, z = g;
      }
      return {o:2 < k.length && {C:nb(k, q.A, q.D), B:D, u:c,}, m:2 < m.length && {C:nb(m, q.A, q.D), B:D, u:c,},};
    }
  }
  return {o:g, m:k,};
}, Tb = (b, c, g = ab(c.C)) => {
  if (b) {
    const {o:k, m} = Sb(b, c);
    k || m || b.s.push(c);
    k && (b.o = Tb(b.o, k, g));
    m && (b.m = Tb(b.m, m, g));
  } else {
    b = {x:g.x, y:g.y, z:g.z, w:g.w, s:[c], o:0, m:0,};
  }
  return b;
}, Ub = (b, c, g) => {
  const k = [], m = (q, D) => {
    let {o:t, m:z} = Sb(q, D);
    t || z || (0 < g * Za(q, c) ? t = D : z = D);
    t && (q.o ? m(q.o, t) : k.push(t));
    z && q.m && m(q.m, z);
  };
  for (const q of c.s) {
    m(b, q);
  }
  return k;
}, Vb = (b, c) => b && (c(b), Vb(b.o, c), Vb(b.m, c)), Wb = b => b.length ? b.reduce((c, g) => Tb(c, {C:g, B:0, u:0,}), 0) : b, Yb = b => (Vb(b, c => {
  const g = c.m;
  c.m = c.o;
  c.o = g;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const k of c.s) {
    k.B = !k.B;
  }
}), b), Zb = (...b) => b.reduce((c, g) => {
  const k = [];
  if (c = Wb(c), g) {
    g = Wb(g);
    Vb(c, m => m.s = Ub(g, m, 1));
    Vb(g, m => k.push([m, Ub(c, m, -1)]));
    for (const [m, q] of k) {
      for (const D of q) {
        Tb(c, D, m);
      }
    }
  }
  return c;
}), O = (b, ...c) => Yb(Zb(Yb(Wb(b)), ...c)), Q = b => {
  const c = new Map(), g = new Map(), k = m => {
    if (m.u) {
      const q = c.get(m.u);
      q ? (g.delete(q), m = k(m.u)) : c.set(m.u, m);
    }
    return m;
  };
  return Vb(b, m => {
    for (const q of m.s) {
      g.set(k(q), q.B);
    }
  }), Array.from(g, ([{C:m}, q]) => {
    const D = m.map(({x:t, y:z, z:P}) => ({x:t, y:z, z:P,}));
    return nb(q ? D.reverse() : D, m.A, m.D);
  });
}, h = {x:0, y:0, z:0,}, R = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], $b = b => {
  const c = Da, g = L.length, k = {j:0, g:0, i:0, u:c, h() {
    const m = k.j, q = k.g, D = k.i, t = c.l.multiply(b);
    k.I = t;
    2.9 > $a(t.transformPoint()) && Gb[5] && (.3 > q || .7 < q) && (k.j = m ? 0 : 1, g && (za || (h4.innerHTML = "* click *", na = a + 1)), oa = g, Qb());
    k.g = J(q, m, 4);
    k.i = J(D, m, 1);
    k.l = t.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
  },};
  L.push(k);
  r(p(5), b.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), Z(.4, .5, .5));
  r(p(5), b.translate(.2).rotate(90, 90).scale(.4, .1, .5), Z(.4, .5, .5));
  r(p(R), b.translate(0, -0.4).scale(.5, .1, .5), Z(.5, .5, .4));
}, ac = (b, ...c) => {
  let g = -1, k = 0, m = 0, q = 0, D = 0, t = 0, z = 3, P = 1;
  const v = {j:0, h() {
    if (!v.j) {
      var S = 1, W = 1 / 0;
      for (var X of C) {
        var V = X.w, ea = Math.hypot(A - X.x, f - X.z), aa = ea - V;
        ba ||= ea < V;
        0 < aa && W > aa && (W = aa, T = X);
        V = ea / V;
        S = S < V ? S : V;
      }
      if (!ba) {
        W = T.x;
        X = T.z;
        V = T.w;
        ea = A - W;
        aa = f - X;
        let U = Math.hypot(ea, aa), va = Math.atan2(-aa, ea);
        P && (m = (Math.random() - .5) * Math.PI / 2, z = Ma(1, z / (1 + Math.random())));
        va += m;
        g = -Math.cos(va);
        k = Math.sin(va);
        .1 < U && (U = (U < V ? U : V) / (U || 1), A = ea * U + W, f = aa * U + X);
      }
      P = ba;
      z = J(z, 3 + 6 * (1 - S), 3 + S);
      n = J(n, A = J(A, A + g, z), z);
      F = J(F, f = J(f, f + k, z), z);
      q = Va(q, Math.atan2(n - D, F - t) / La - 180, 3 * d,);
      D = n;
      t = F;
      S = (v.l = x.l.multiply(b.translate(n, 0, F).rotateSelf(0, q, 7 * Math.sin(1.7 * a)),)).transformPoint();
      if (1.5 > $a(S)) {
        v.j = 1;
        S = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ma] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift';
        var ba = ma && 12 > ma ? 5 : 7;
        za || (h4.innerHTML = S, na = a + ba);
        Qb();
      }
    }
    v.j && (S = w % 4 - 2, v.l = tb[2].l.translate(w % 4 * 1.2 - 1.7 + Math.sin(a + w) / 7, -2, 1.7 * (w / 4 | 0) - 5.5 + (0 > S ? -S : S) + Math.cos(a / 1.5 + w) / 6,));
  },}, x = Da, w = Nb.length, C = c.map(([S, W, X]) => ({x:S, z:W, w:X,}));
  let T = C[0], {x:A, z:f} = T, n = A, F = f;
  Nb.push(v);
}, bc = new Float32Array(624), cc = (b, c, g) => {
  g = g ? Ja : Ia;
  if (Ea) {
    g = e.rotate(0, 40 * Math.sin(la) - 70);
    for (var {F:k} of Ka) {
      cb(g, bc, k - 1);
    }
    I.uae(b, !1, bc);
    I.d97(4, Ka[2].G - Ka[0].v, 5123, 2 * Ka[0].v);
  } else {
    for (k = 0; tb.length > k; ++k) {
      const {H:m, F:q, l:D} = tb[k];
      m && cb(D, bc, q - 1);
    }
    I.uae(b, !1, bc);
    I.d97(4, (c ? Ka[2].G : Ka[0].v) - 3, 5123, 6);
    for (c = 0; L.length > c; ++c) {
      const {l:m, g:q} = L[c];
      cb(m, bc, c);
      bc[16 * c + 15] = 1 - q;
    }
    I.uae(b, !1, bc);
    I.das(4, Ha.G - Ha.v, 5123, 2 * Ha.v, L.length);
    for (c = 0; 13 > c; ++c) {
      cb(Nb[c].l, bc, c);
    }
    I.uae(b, !1, bc);
    I.das(4, g.G - g.v, 5123, 2 * g.v, 13,);
  }
}, dc = new Int32Array(10725888), ec = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), Z = NO_INLINE((b, c, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * c << 8 | 255 * b), I = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in I) {
  I[b[0] + [...b].reduce((c, g, k) => (c * k + g.charCodeAt(0)) % 434, 0).toString(36)] = I[b];
}
const Ib = new AudioContext(), Hb = Ib.createBufferSource();
setTimeout(() => {
  let b = 0, c = 6;
  const g = () => {
    if (h4.innerHTML += ".", !--c) {
      let x = 0, w = 0, C = 1, T = 0, A = 0, f = 0, n = !1, F, S, W, X, V, ea, aa, ba, U, va, Qa, Ra;
      const ha = {x:0, y:0, z:0,}, jb = new Int32Array(256), kb = () => {
        const {u:y, I:B} = L[oa], {x:E, y:H, z:G} = B.transformPoint({x:0, y:8, z:-3,});
        h.x = ha.x = E;
        h.y = ha.y = aa = H;
        h.z = ha.z = G;
        S = ea = V = W = X = 0;
        C = 1;
        x = w = y?.F || 1;
      }, Bb = () => {
        let y = 0, B = 0, E = 0, H = 0, G = 0;
        jb.fill(0);
        for (let Y = 0; 31 > Y; ++Y) {
          let M = 0;
          const N = 512 * Y;
          for (let qa = 0; 128 > qa; qa++) {
            let ca = N + 4 * qa;
            var K = (ra[ca] + ra[1 + ca]) / 255;
            if (ca = ra[2 + ca], 14 < qa && 114 > qa && (M += K), ca && K) {
              K = jb[ca] + 1, jb[ca] = K, y > K || (y = K, B = ca);
            }
          }
          3 > M && 5 < Y && (H += Y / 32);
          3 < M && (7 < Y && (E += Y / 15), G = 1);
        }
        B && (G = 1);
        C ? B && (C = 0, w = B) : w = B || x;
        x = B;
        S = G;
        W = J(W, G ? 6.5 : 8, 4);
        ha.y += E / 41 - (G ? 1 : W) * H / 41 * W * d;
      }, Cb = () => {
        for (let G = 32; 128 > G; G += 2) {
          var y = 0;
          let K = 0;
          var B = 0;
          let Y = 0;
          const M = 512 * G;
          for (let N = 1 & G; 128 > N; N += 2) {
            var E = M + 4 * N;
            const qa = M + 4 * (127 - N), ca = ra[E] / 255, wa = ra[1 + qa] / 255;
            var H = N / 63.5 - 1;
            H = 1 - (0 > H ? -H : H);
            if (10 < N && 118 > N && (y = Ma(y, Ma(ca * H, ca * ra[qa] / 127.5)), K = Ma(K, Ma(wa * H, wa * ra[1 + E] / 255))), 54 > N || 74 < N) {
              E = (1 - H) * (wa < ca ? ca : wa) / 3, .001 < E && (64 > N && E > B ? B = E : 64 < N && E > Y && (Y = E));
            }
          }
          B = Y - B;
          y = K - y;
          (0 > B ? -B : B) > (0 > ba ? -ba : ba) && (ba = B);
          (0 > y ? -y : y) > (0 > U ? -U : U) && (U = y);
        }
      }, Eb = () => {
        U = ba = 0;
        NO_INLINE(Bb)();
        NO_INLINE(Cb)();
        var y = (Gb[0] ? 1 : 0) + (Gb[2] ? -1 : 0) + fa, B = (Gb[1] ? 1 : 0) + (Gb[3] ? -1 : 0) + ia, E = navigator.getGamepads()[0];
        if (E) {
          var H = wa => ca[wa]?.pressed || 0 < ca[wa]?.value;
          const ca = E.buttons;
          E = E.axes;
          var G = H(1) || H(3) || H(2) || H(0);
          G !== n && (n = G) && (Gb[5] = 1);
          y += (.2 < Na(-E[0]) ? -E[0] : 0) + (H(14) ? 1 : 0) + (H(15) ? -1 : 0);
          B += (.2 < Na(-E[1]) ? -E[1] : 0) + (H(12) ? 1 : 0) + (H(13) ? -1 : 0);
          Fa && (.3 < Na(E[2]) && (ib += 80 * E[2] * d), .3 < Na(E[3]) && (hb += 80 * E[3] * d));
        }
        .05 > (0 > B ? -B : B) && (B = 0);
        .05 > (0 > y ? -y : y) && (y = 0);
        H = Math.atan2(B, y);
        E = Oa(Math.hypot(B, y));
        G = (y = E * Math.cos(H), B = E * Math.sin(H), Oa(1 - 5 * Ma(0 > ba ? -ba : ba, 0 > U ? -U : U)));
        var K = (w || (ba += V * G * d, U += ea * G * d), V = J(V, 0, S ? 8 : 4), ea = J(ea, 0, S ? 8 : 4), X = J(X, S ? (y || B ? S ? 7 : 4 : 0) * G : 0, S ? .1 < G ? 10 : y || B ? 5 : 7 : 1,), Fa ? ib * La : Math.PI);
        G = Math.sin(K) * X * d;
        K = Math.cos(K) * X * d;
        G = (ba -= y * K - B * G, U -= y * G + B * K, 1 === tb[w].H && tb[w].l || e);
        K = G.inverse();
        if (K.m41 = 0, K.m42 = 0, K.m43 = 0, {x:ba, z:U} = K.transformPoint({x:ba, z:U, w:0,}), ha.x += ba, ha.z += U, w !== F) {
          F = w;
          const {x:ca, y:wa, z:Db} = G.inverse().transformPoint(h);
          ha.x = ca;
          ha.y = wa;
          ha.z = Db;
        }
        K = h.x;
        const Y = h.z, {x:M, y:N, z:qa} = G.transformPoint(ha);
        G = (h.x = M, h.y = N, h.z = qa, Na(aa - N));
        (aa = J(aa, N + .1, 50 * G + 5), w && (V = (h.x - K) / d, ea = (h.z - Y) / d), (y || B) && (T = 90 - H / La), A = Va(A, T, 8 * d), f += (E - f) * Oa(10 * d), va = Wa(va, h.x, .5, d,), Qa = Wa(Qa, h.y, 2, d,), Ra = Wa(Ra, h.z, .5, d,), Fa) ? (y = 200 * C, eb = J(eb, h.x, 18 + y), fb = J(fb, h.y + 1.5, 15 + y), gb = J(gb, h.z, 18 + y), hb = Ma(87 > hb ? hb : 87, -87)) : (eb = Wa(eb, va, 1, 2 * d), fb = Wa(fb, Qa + 13 + 15 * C, 4, 2 * d,), gb = Wa(gb, Ra + -18, 1, 2 * d,), y = gb - Ra, 1 < (0 > 
        y ? -y : y) && (B = eb - va, H = fb - Qa, ib = 270 + Math.atan2(y, B) / La, hb = 90 - Math.atan2(Math.hypot(y, B), H) / La));
        ib = Ua(ib);
      }, Aa = y => {
        requestAnimationFrame(Aa);
        var B = (y - (Ga || y)) / 1e3;
        d = Ea ? Gb[5] = 0 : .066 < B ? .066 : B;
        a += d;
        la += B;
        Ga = y;
        0 < d && (NO_INLINE(Eb)(), Ob(), (-25 > h.x || 109 > h.z ? -25 : -9) > h.y && kb(), Gb[5] = 0);
        y = Ea ? e.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Oa(hC.clientWidth / 1e3)) : e.rotate(-hb, -ib, -0).invertSelf().translateSelf(-eb, -fb, -gb,);
        B = sb(y, .3, 55, 10);
        const E = sb(y, 55, 177, 11);
        0 < d && (ja(), I.b6o(36160, lb), I.v5y(0, 0, 128, 128), I.c4s(16640), I.cbf(!0, !1, !0, !1), I.uae(ja("b"), !1, cb(e.rotate(0, 180).invertSelf().translateSelf(-h.x, -h.y, .3 - h.z,),),), cc(ja("c"), 0, 1), I.c4s(256), I.cbf(!1, !0, !0, !1), I.uae(ja("b"), !1, cb(e.translate(-h.x, -h.y, -h.z - .3),),), cc(ja("c"), 0, 1), 1 === w && (L[9].j = -15 > h.x && 0 > h.z ? 1 : 0), I.r9r(0, 0, 128, 128, 6408, 5121, ra), I.cbf(!0, !0, !0, !0));
        sa();
        I.v5y(0, 0, 2048, 2048);
        pa[1](E);
        pa[0](B);
        I.b6o(36160, null);
        ka();
        I.v5y(0, 0, I.drawingBufferWidth, I.drawingBufferHeight);
        I.c4s(16640);
        pa[1]();
        pa[0]();
        I.uae(ka("a"), !1, Ya(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        I.uae(ka("b"), !1, cb(y));
        I.ubu(ka("k"), eb, fb, gb);
        cc(ka("c"), !Fa, 0);
        xa();
        I.ubu(xa("j"), I.drawingBufferWidth, I.drawingBufferHeight, la);
        Ea ? I.ubu(xa("k"), 0, 0, 0) : I.ubu(xa("k"), eb, fb, gb);
        I.uae(xa("b"), !1, cb(y.inverse()));
        I.d97(4, 3, 5123, 0);
      }, ra = new Uint8Array(65536), db = m;
      var v = (NO_INLINE(Rb)(), ub("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",));
      const sa = vb(ub("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[f.w>0.?int(f.w)-1:gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",), "#version 300 es\nvoid main(){}",), xa = vb(ub("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), ja = vb(v, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",), ka = vb(v, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), lb = (xa(), I.ubh(xa("q"), 3), ja(), I.uae(ja("a"), !1, Ya(1.4, .59, 1e-4, 1)), ka(), I.ubh(ka("q"), 3), I.c5w());
      v = I.c3z();
      const mb = I.c25(), pa = Xa(2, y => {
        const B = new Float32Array(16), E = I.c25(), H = I.c5w(), G = ka(y ? "j" : "i");
        return ka(), I.ubh(ka(y ? "h" : "g"), y), I.b6o(36160, H), I.d45([0]), I.r9l(0), I.a4v(33984 + y), I.b9j(3553, E), I.fas(36160, 36096, 3553, E, 0), I.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), I.t2z(3553, 10241, 9729), I.t2z(3553, 10240, 9729), I.t2z(3553, 34893, 515), I.t2z(3553, 34892, 34894), I.t2z(3553, 10243, 33071), I.t2z(3553, 10242, 33071), K => {
          K ? (cb(K, B), I.uae(sa("b"), !1, B), I.b6o(36160, H), I.c4s(256), cc(sa("c"), !Fa, 0)) : I.uae(G, !1, B);
        };
      });
      I.e8z(2929);
      I.e8z(2884);
      I.c70(1);
      I.c7a(1029);
      I.d4n(515);
      I.c5t(0, 0, 0, 1);
      I.b6o(36160, lb);
      I.bb1(36161, v);
      I.r4v(36161, 33189, 128, 128);
      I.f8w(36160, 36096, 36161, v);
      I.a4v(33987);
      I.b9j(3553, mb);
      I.fas(36160, 36064, 3553, mb, 0);
      I.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      I.a4v(33987);
      I.b9j(3553, I.c25());
      I.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, db);
      I.gbn(3553);
      I.t2z(3553, 10241, 9987);
      I.t2z(3553, 10240, 9729);
      Ka.map((y, B) => {
        y.h = B ? () => Ka[0].l.translate(0, f * Oa(.45 * Math.sin(9.1 * a + Math.PI * (B - 1) - Math.PI / 2)),).rotateSelf(f * Math.sin(9.1 * a + Math.PI * (B - 1)) * .25 / La, 0) : () => e.translate(h.x, aa, h.z).rotateSelf(0, A,);
      });
      try {
        const [y, B, E, H, G] = JSON.parse(localStorage.DanteSP22,);
        L.map((K, Y) => K.g = K.i = K.j = Y ? 0 | y[Y] : 0);
        Nb.map((K, Y) => K.j = 0 | B[Y]);
        oa = E;
        a = H;
        Ca = G;
      } catch (y) {
      }
      Ba = 0 > oa ? 0 : 1 < oa ? 1 : oa;
      h4.innerHTML = "";
      na = 0;
      Pb();
      Ob();
      kb();
      eb = va = h.x;
      fb = (Qa = h.y) + 13;
      gb = (Ra = h.z) + -18;
      NO_INLINE(Lb)();
      requestAnimationFrame(Aa);
    }
  }, k = () => {
    if (5 > b) {
      var v = 0, x = b++;
      let [A, f, n, F, S, W, X, V, ea, aa, ba, U, va, Qa, Ra, ha, jb, kb, Bb, Cb, Eb] = wb[x];
      aa = aa * aa * 4;
      for (const Aa of [5513, 4562, 3891]) {
        let ra = 0, db = 0, sa, xa, ja, ka, lb;
        const mb = [], pa = new Int32Array(768 * Aa), y = 2 ** (U - 9) / Aa, B = Math.PI * 2 ** (jb - 8) / Aa, E = Bb * Aa & -2;
        for (let H = 0; 11 >= H; ++H) {
          for (let G = 0, K = +"000001234556112341234556011111111112011111111112000001111112"[12 * x + H]; 32 > G; ++G) {
            const Y = (32 * H + G) * Aa;
            for (var w = 0; 4 > w; ++w) {
              if (sa = 0, K && (sa = Eb[K - 1].charCodeAt(G + 32 * w) - 40, sa += 0 < sa ? 106 : 0), sa) {
                var C;
                if (!(C = mb[sa])) {
                  C = sa;
                  let M = void 0, N = void 0;
                  var T = sa;
                  let qa = 0, ca = 0;
                  const wa = 2 > x ? zb : xb, Db = 2 > x ? 1 > x ? yb : Ab : xb, Xb = new Int32Array(V + ea + aa);
                  for (let Sa = 0, Fb = 0; V + ea + aa > Sa; ++Sa, ++Fb) {
                    let Ta = 1;
                    V > Sa ? Ta = Sa / V : V + ea > Sa || (Ta = (1 - (Ta = (Sa - V - ea) / aa)) * 3 ** (-ba / 16 * Ta));
                    0 > Fb || (Fb -= 4 * Aa, N = 0.003960 * 2 ** ((T + f - 256) / 12), M = 0.003960 * 2 ** ((T + S - 256) / 12) * (1 + (x ? 0 : 8e-4 * 9)));
                    Xb[Sa] = 80 * (wa(qa += N * Ta ** (n / 32)) * A + Db(ca += M * Ta ** (W / 32)) * F + (X ? (2 * Math.random() - 1) * X : 0)) * Ta | 0;
                  }
                  C = mb[C] = Xb;
                }
                for (let M = 0, N = 2 * Y; C.length > M; ++M, N += 2) {
                  pa[N] += C[M];
                }
              }
            }
            for (let M, N = 0; Aa > N; ++N) {
              w = 0, C = 2 * (Y + N), ((M = pa[C]) || lb) && (ja = 0.003080 * va, 1 != x && 4 != x || (ja *= Math.sin(y * C * Math.PI * 2) * Cb / 512 + .5), ja = 1.5 * Math.sin(ja), ra += ja * db, ka = (1 - Qa / 255) * (M - db) - ra, db += ja * ka, M = 4 == x ? db : 3 == x ? ka : ra, x || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5), M *= Ra / 32, lb = 1e-5 < M * M, xa = Math.sin(B * C) * ha / 512 + .5, w = M * (1 - xa), M *= xa), C < E || (w += pa[1 + C - 
              E] * kb / 255, M += pa[C - E] * kb / 255), dc[v + C] += pa[C] = w, ++C, dc[v + C] += pa[C] = M;
            }
          }
        }
        v += pa.length;
      }
      setTimeout(k);
    } else {
      v = Ib.createBuffer(2, 5362944, 44100);
      for (x = 0; 2 > x; x++) {
        for (let A = x, f = v.getChannelData(x); 10725888 > A; A += 2) {
          f[A >> 1] = dc[A] / 65536;
        }
      }
      Hb.buffer = v;
      Hb.loop = !0;
    }
    g();
  }, m = new Image();
  m.onload = m.onerror = () => {
    g();
  };
  m.src = ec;
  setTimeout(k, 9);
  let q;
  const D = (v, x, w) => e.translate(v + Math.sin(a + 2) / 5, x + Math.sin(.8 * a) / 3, w).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), t = (() => {
    const v = Xa(11, w => e.translate(Math.sin(w / 10 * Math.PI), w / 10).rotate(+w).scale(1.0001 - w / 10, 0, 1 - w / 10),), x = pb(18);
    return Xa(10, w => qb(ob(x, v[w]).reverse(), ob(x, v[w + 1]), 1),).flat();
  })(), z = Q(O(l(p(20, 1, 1.15, 1), e.translate(0, -3).scale(3.5, 1, 3.5), Z(.7, .4, .25, .7),), l(p(20, 1, 1.3, 1), e.translate(0, -2.5).scale(2.6, 1, 3), Z(.7, .4, .25, .2),), l(p(R), e.translate(4, -1.2).scale3d(2), Z(.7, .4, .25, .3)),),), P = Q(O(l(p(R), e.translate(0, -8).scale(6, 15, 2.2)), l(p(R), e.translate(0, -14.1).scale(4, 13, 4)), l(p(20, 1), e.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),);
  u(() => {
    r([R.slice(1)], e.translate(-2).scale3d(3).rotate(90, 0));
  }, 0);
  u(() => {
    const v = () => {
      var f = L[2].i, n = 1 - L[4].i;
      return f < n ? f : n;
    }, x = (f, n, F) => u(S => {
      S.h = () => e.translate(v() * Math.sin(3 * f + a * f) * n);
      R.map(({x:W, z:X}) => {
        r(p(11, 1), e.translate(4 * W, 4, F + 4 * X).scale(.8, 3, .8), Z(.5, .3, .7, .6),);
        r(p(R), e.translate(4 * W, 7, F + 4 * X).scale(1, .3), Z(.5, .5, .5, .3),);
      });
      r(Q(O(l(p(R), e.translate(0, 0, F).scale(5, 1, 5), Z(.8, .8, .8, .3),), ...[-1, 1].map(W => l(p(R), e.translate(5 * W, .2, F).rotate(0, 0, -30 * W).scale(4, 1, 2), Z(.8, .8, .8, .3),)),),),);
      r(p(R), e.translate(0, -3, F).scale(8, 2, 8), Z(.4, .4, .4, .3));
    }), w = (u(f => {
      f.h = () => D(-12, 4.2, 40 * Ba - 66);
      r(z);
      $b(e.translate(0, -3, 4));
    }), Xa(7, f => l(p(6, 1), e.translate(4 * (f / 6 - .5), 3).scale(.2, 3, .2), Z(.3, .3, .38),)).flat()), C = (ac(e.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]), ac(e.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...pb(18).map(({x:f, z:n}) => [7 * f, 10 * n, 4.5 - 2 * (0 > f ? -f : f)]),), r(p(R), e.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Z(.8, .8, .8, .2),), R.map(({x:f, z:n}) => r(p(6), e.translate(3 * f, 3, 15 * n).scale(.7, 4, .7), Z(.6, .3, .3, .4))), [-23, 22].map(f => 
    r(p(R), e.translate(0, 0, f).scale(3, 1, 8), Z(.9, .9, .9, .2))), [-15, 15].map((f, n) => {
      r(p(R), e.translate(0, 6.3, f).scale(4, .3, 1), Z(.3, .3, .3, .4));
      r(p(R), e.translate(0, 1, f).scale(3, .2, .35), Z(.5, .5, .5, .3));
      u(F => {
        F.h = () => e.translate(0, 4.7 * -L[n + 1].g, f);
        r(w);
      });
    }), Xa(5, f => Xa(2, n => r(t, e.translate(18.5 * (n - .5), 0, 4.8 * f - 9.5).rotate(0, 180 - 180 * n).scale(1.2, 10, 1.2), Z(1, 1, .8, .2),))), r(p(R), e.translate(3, 1.5, -20).scale(.5, 2, 5), Z(.7, .7, .7, .2)), r(p(R), e.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Z(.75, .75, .75, .2),), r(p(5), e.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Z(.6, .3, .3, .4),), $b(e.translate(-5.4, 1.5, -19).rotate(0, -90)), r(p(R), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 
    0, -30).scale(4, .6, 4.5), Z(.8, .2, .2, .5),), r(Q(O(Zb(l(p(6, 0, 0, .3), e.translate(8, -3, -4).scale(13, 1, 13), Z(.7, .7, .7, .2),), l(p(6), e.translate(0, -8).scale(9, 8, 8), Z(.4, .2, .5, .5)), l(p(6, 0, 0, .3), e.translate(0, -0.92).scale(13, 2, 13), Z(.8, .8, .8, .2),),), l(p(5), e.scale(5, 30, 5), Z(.4, .2, .6, .5)), l(p(5, 0, 1.5), e.translate(0, 1).scale(4.5, .3, 4.5), Z(.7, .5, .9, .2),), l(p(R), e.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), Z(.5, .5, .5, 
    .5),), l(p(6), e.translate(15, -1.5, 4).scale(3.5, 1, 3.5), Z(.5, .5, .5, .5),),),),), u(f => {
      f.h = () => e.translate(0, .01 < L[3].g ? (5 * Math.cos(1.5 * a) + 2) * L[3].i * (1 - L[2].g) + -15 * (1 - L[3].g) : -500, 0,);
      $b(e.translate(0, 1.2));
      r(p(5), e.translate(0, -0.2).scale(5, 1, 5), Z(.6, .65, .7, .3));
    }), $b(e.translate(15, -2, 4)), x(.7, 12, 35), x(1, 8.2, 55), u(f => {
      f.h = () => e.translate(v() * Math.sin(a / 1.5 + 2) * 12);
      r(Q(O(Zb(l(p(R), e.scale(1.5, 1, 5), Z(.9, .9, .9, .2)), l(p(6), e.scale(4, 1, 5), Z(.9, .9, .9, .2)), l(p(R), e.translate(0, -2).scale(2, 3.2, 1.9), Z(.3, .8, .5, .5),), l(p(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), Z(.9, .9, .9, .2),),), l(p(R), e.scale(1.3, 10, 1.3), Z(.2, .7, .4, .6)),),), e.translate(0, 0, 45),);
      ac(e.translate(0, 2.8, 45), [0, 0, 4.5]);
    }), u(f => {
      f.h = () => e.translate(9.8 * (1 - v()));
      r(p(3), e.translate(-23, -1.7, 55.8).scale(5, .7, 8.3), Z(.3, .6, .6, .2));
      r(p(8), e.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Z(.8, .8, .8, .2),);
      r(p(R), e.translate(-23, -3, 55).scale(5.2, 1.7, 3), Z(.5, .5, .5, .3));
      r(p(R), e.translate(-23, -2.2, 62).scale(3, 1, 4), Z(.5, .5, .5, .3));
      $b(e.translate(-23, -0.5, 66.5));
    }), r(p(R), e.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Z(.9, .9, .9, .2),), u(f => {
      f.h = () => e.translate(0, Oa(1 - 5 * v()) * Pa(L[4].g, L[5].g) * Math.sin(1.35 * a) * 4);
      r(p(R), e.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Z(.7, .7, .7, .2),);
      r(Q(O(l(p(R), e.scale(3, 1.4, 2.7)), l(p(R), e.scale(1.2, 8, 1.2)),),), e.translate(-33, -3, 55), Z(.7, .7, .7, .2),);
    }), u(f => {
      f.h = () => e.translate(0, 0, Oa(1 - 5 * v()) * Pa(L[4].g, L[5].g) * Math.sin(.9 * a) * 8);
      r(Q(O(l(p(R), e.translate(-27, -3, 55).scale(3, 1.4, 2.7), Z(.9, .9, .9, .2),), l(p(R), e.translate(-27, -3, 55).scale(1, 3), Z(.9, .9, .9, .2),),),),);
      r(p(R), e.translate(-39, -3, 55).scale(3, 1.4, 2.7), Z(.9, .9, .9, .2));
    }), u(f => {
      f.h = () => e.translate(0, -6.5 * L[4].i);
      r(p(6), e.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), Z(.7, .7, .7, .4),);
    }), [...l(Q(Zb(l(p(R), e.translate(0, -3).scale(11, 1.4, 3), Z(.9, .9, .9, .2),), O(l(p(6), e.rotate(0, 0, 90).scale(6, 8, 6), Z(.3, .6, .6, .3)), l(p(4, 0, .01), e.translate(0, 6).scale(12, 2, .75).rotate(0, 45), Z(.3, .6, .6, .3),), l(p(6), e.rotate(0, 0, 90).scale(5, 12, 5), Z(.3, .6, .6, .3),), ...[5, 0, -5].map(f => l(p(5), e.translate(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Z(.3, .6, .6, .3),)),),),), e,)]), T = (r(C, e.translate(-53, 0, 55)), r(p(6), e.translate(-61.3, -2.4, 49).scale(3, 
    1, 5), Z(.4, .6, .6, .3)), r(p(7), e.translate(-57, -2.6, 46).scale(4, 1, 4), Z(.8, .8, .8, .3)), $b(e.translate(-55, -1.1, 46).rotate(0, 90)), u(f => {
      f.h = () => e.translate(-75, (1 - L[5].i) * (1 - L[6].g) * 3, 55).rotate(180 * (1 - L[5].i) + ya, 0,);
      r(C);
    }, 2), r(p(R), e.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), Z(.7, .7, .7, .2),), r(p(3, 0, -0.5), e.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Z(.8, .8, .8, .2),), r(Q(O(Zb(l(p(R), e.translate(-100, -2.5, 55).scale(8, 1, 8), Z(.8, .8, .8, .2),), l(p(R), e.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Z(.8, .8, .8, .2),), l(p(R), e.translate(-100, -2.6, 70).scale(3, 1.1, 7), Z(.8, .8, .8, .2),), l(p(R), e.translate(-96, -2.6, 73).rotate(0, 
    45).scale(3, 1.1, 5), Z(.8, .8, .8, .2),), l(p(6), e.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Z(.6, .6, .6, .3),), l(p(R), e.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Z(.8, .8, .8, .2),), l(p(R), e.translate(-100, .42, 92).scale(3, 1.1, 4.1), Z(.8, .8, .8, .2),),), l(p(8), e.translate(-100, -1, 55).scale(7, .9, 7), Z(.3, .3, .3, .4),), l(p(8), e.translate(-100, -2, 55).scale(4, .3, 4), Z(.4, .4, .4, .5),), l(p(8), e.translate(-100, -3, 55).scale(.6, 1, 
    .6), Z(.4, .4, .4, .5),),),), e,), ac(e.translate(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]), ac(e.translate(-89, .2, 80), [0, 0, 6]), r(Q(O(l(p(R), e.translate(-100, 1, 63).scale(7.5, 4), Z(.5, .5, .5, .4),), l(p(R), e.translate(-100, 0, 70).scale(2, 2, 10), Z(.5, .5, .5, .4),), l(p(20, 1), e.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Z(.5, .5, .5, .4),),),),), u(f => {
      f.h = () => e.translate(-99.7, 5.3 * -L[6].g - 2, 63.5);
      r(w);
    }), R.map(({x:f, z:n}) => {
      r(p(6), e.translate(7 * f - 100, -3, 7 * n + 55).scale(1, 8.1), Z(.6, .15, .15, .8),);
      [4, -0.4].map(F => r(p(6), e.translate(7 * f - 100, F, 7 * n + 55).scale(1.3, .5, 1.3), Z(.4, .2, .2, .8),));
    }), Xa(7, f => {
      r(p((23 * f + 1) % 5 + 5, 0, .55), e.translate(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), Z(.5 - f / 17, .5 - (1 & f) / 9, .6, .3),);
    }), r(p(R), e.translate(-87, -9.5, 24).scale(7, 1, 3), Z(.4, .5, .6, .4)), r(p(4), e.translate(-86, -9.2, 27).scale(5, 1, 5), Z(.5, .6, .7, .3)), r(p(12, 1), e.translate(-86, -9, 31).scale(1.5, 1, 1.5), Z(.3, .3, .4, .1)), $b(e.translate(-86, -7.5, 31)), u(f => {
      f.h = () => e.translate(0, 3.5 * (1 - Ma(L[6].g, L[7].g)) + Pa(L[7].i, L[6].i) * Math.sin(a) * 5,);
      [0, 12, 24].map(n => r(p(R), e.translate(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), Z(.2, .5, .6, .2),));
    }), u(f => {
      f.h = () => {
        const n = Pa(L[7].i, L[6].i);
        return e.translate(0, n * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + n) * n);
      };
      [6, 18].map(n => r(p(R), e.translate(n - 76.9, n / -13 - 10, 24).scale(2.8, 1.5, 3), Z(.1, .4, .5, .2),));
    }), r(Q(O(Zb(l(p(R), e.scale(11, 1, 13), Z(.3, .4, .6, .3)), l(p(5), e.translate(0, 0, -7).scale(2, 1.2, 2), Z(.2, .4, .7, .3),), l(p(5), e.scale(9, 1.2, 9), Z(0, .2, .3, .5)),), l(p(5), e.scale(5.4, 5, 5.4), Z(0, .2, .3, .5)),),), e.translate(-38.9, -11.3, 17),), $b(e.translate(-38.9, -9.6, 10)), u(f => {
      f.h = () => e.translate(0, -7.3 * L[7].i);
      r(Q(O(Zb(l(p(5), e.translate(0, 2).scale(5, 7, 5).skewY(8), Z(.2, .4, .5, .5),), l(p(5), e.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), Z(.25, .35, .5, .5),), l(p(5), e.translate(0, 9).scale(.6, 7, .6).skewY(8), Z(.35, .3, .5, .5),),), l(p(5), e.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Z(.2, .4, .5, .5),),),), e.translate(-38.9, -11.3, 17),);
      ac(e.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...pb(15).map(({x:n, z:F}) => [3 * n, 3 * F, 1.2]),);
    }), R.map(({x:f, z:n}) => {
      q = e.translate(9 * f - 38.9, -7.3, 11 * n + 17);
      r(p(14, 1), q.scale(1, 4), Z(.25, .25, .25, 1));
      [1.5, 8].map(F => r(p(17, 1), q.translate(0, F - 4).scale(1.5, .5, 1.5), Z(.6, .6, .6, .3)));
    }), r(Q(O(Zb(l(p(6), e.translate(0, 0, -36).scale(15, 1.2, 15), Z(.7, .7, .7, .3),), l(p(R), e.translate(0, 0, -18).scale(4, 1.2, 6), Z(.45, .4, .6, .3),),), ...Xa(6, f => Xa(6, n => l(p(6), e.translate(4.6 * n - 12 + 2 * (1 & f), 0, 4.6 * f - 50 + 2 * Math.sin(4 * n)).scale(2, 5, 2,), Z(.7, .7, .7, .3),))).flat(),),), e.translate(-38.9, -11.3, 17),), ac(e.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]), r(p(5), e.translate(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), Z(.8, 
    .1, .25, .4),), $b(e.translate(-84, -0.5, 85).rotate(0, 45)), u(f => {
      f.h = () => D(-123, 1.4, 55 + -65 * Ca);
      $b(e.translate(0, -3, -4).rotate(0, 180));
      r(z);
    }), ac(e.translate(-115, .2, -12), [0, 0, 3.5]), Q(O(l(p(R), e.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), Z(.25, .25, .35, .3),), l(p(3), e.translate(0, 0, -5.5).scale(3, 2), Z(.6, .3, .4, .3)), ...[-1.2, 1.2].map(f => l(p(R), e.translate(f, -0.5, 1).scale(.14, .3, 6.5), Z(.7, .2, 0, .3),)),),)), A = (u(f => {
      f.h = () => {
        var n = Math.sin(1.1 * a);
        return e.translate.call(e, 0, -2, Pa(L[10].g, L[11].g) * (0 > n ? -n : n) * -8.5 + 10);
      };
      Xa(2, n => r(T, e.translate(9 * n - 110 + (1 & n), 1.7, -12)));
    }), u(f => {
      f.h = () => {
        var n = Math.sin(2.1 * a);
        return e.translate.call(e, 0, -2, Pa(L[10].g, L[11].g) * (0 > n ? -n : n) * -8.5 + 10);
      };
      Xa(2, n => r(T, e.translate(9 * (n + 2) - 110 + (1 & n), 1.7, -12)));
    }), u(f => {
      f.h = () => {
        var n = Math.sin(1.5 * a);
        return e.translate.call(e, 0, -2, -8.5 * Ma((1 - L[10].g) * (1 - Pa(L[10].g, L[11].g)), Pa(L[10].g, L[11].g) * (0 > n ? -n : n),) + 10,);
      };
      Xa(3, n => r(T, e.translate(9 * n - 106, 1.7, -12)));
    }), r(Q(O(Zb(l(p(R), e.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), l(p(R), e.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...Xa(4, f => l(p(R), e.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...Xa(3, f => l(p(R), e.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),),), e.translate(-123, 0, -12), Z(.5, .5, .6, .2),), r(p(5), e.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, .2, 1.5), Z(.25, .25, .35, 1),), r(p(R), e.translate(-116, -2.6, -12).scale(3.2, 
    1.1, 4).skewX(3), Z(.8, .8, .8, .2),), r(p(6), e.translate(-116, -2.6, -16.5).scale(3.2, .8, 3), Z(.6, .5, .7, .2)), $b(e.translate(-116, -1.4, -18).rotate(0, 180)), Xa(3, f => {
      r(P, e.translate(12 * f - 109, -9, -12), Z(.6, .6, .6, .3));
      r(P, e.translate(-77, -9, -12 * f - 20).rotate(0, 90), Z(.6, .6, .6, .3),);
    }), r(Q(O(l(p(12), e.translate(-77, -13.9, -12).scale(4, 18.2, 4), Z(.7, .7, .7, .2),), l(p(R), e.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), Z(.4, .5, .6, .2),), l(p(R), e.translate(-77, 0, -14).scale(1.5, 2.2, 2), Z(.4, .5, .6, .2),), l(p(12), e.translate(-77, 2.8, -12).scale(3, 5, 3), Z(.4, .5, .6, .2),),),),), r(p(R), e.translate(-115.5, -17, -12).scale(.5, 15, 2.2), Z(.6, .6, .6, .3)), r(p(R), e.translate(-77, -17, -50.5).scale(2.2, 15, .5), Z(.6, .6, .6, .3)), r(p(R), e.translate(-84.9, 
    -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), Z(.6, .6, .6, .3),), r(Q(O(l(p(R), e.translate(-93, -5.8, -40).scale(9, 1, 5), Z(.8, .8, .8, .1),), l(p(9), e.translate(-98, -5.8, -40).scale(3, 8, 3), Z(.7, .7, .7, .2),),),),), r(p(9), e.translate(-98, -5.8, -40).scale(2.5, .9, 2.5), Z(.5, .5, .5, .3)), $b(e.translate(-98, -4.4, -40).rotate(0, 90)), ac(e.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]), r(Q(O(Zb(l(p(6, 0, 0, .6), e.translate(-100, .7, 105.5).scale(8, 1, 11), Z(.7, 
    .7, .7, .2),), l(p(R), e.translate(-101.5, .7, 93.5).scale(10.5, 1, 2), Z(.7, .7, .7, .2),), l(p(R), e.translate(-91.2, .7, 107).scale(3, 1, 3.3), Z(.7, .7, .7, .2),),), l(p(5), e.translate(-100, .7, 113).scale(4, 3, 4), Z(.7, .7, .7, .2),),),),), Xa(4, f => u(n => {
      n.h = () => {
        const F = Pa(L[8].i, L[12].i);
        return e.translate((2 < f ? 2 * (1 - F) + F : 0) - 100, F * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3) + .7, 115 + (1 & f ? -1 : 1) * (1 - L[8].i) * (1 - L[12].i) * -7 + (.05 > F ? .05 : F) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
      };
      r(p(6), e.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), Z(.5 - f / 8, f / 12 + .5, .7, .3),);
    })), u(f => {
      f.h = () => {
        const n = Pa(L[8].i, L[12].i);
        return e.translate(2.5 * (1 - n) - 139.7, -3 * (1 - L[8].g) + n * Math.sin(.8 * a) * -1 - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 * n + 3), 0);
      };
      r(Q(O(l(p(10), e.scale(6, 2, 6), Z(.1, .6, .5, .3)), l(p(10), e.scale(3.3, 6, 3.3), Z(.1, .6, .5, .5)),),),);
      q = e.translate(-7.5).rotate(0, 90);
      r(p(15, 1), q.scale(3, 2.3, 3), Z(.4, .4, .4, .3));
      r(p(10), q.scale(2, 2.5, 2), Z(.3, .8, .7, .3));
      r(p(5), q.scale(1, 3), Z(.5, .5, .5, .5));
      $b(q.translate(0, 3.4).rotate(0, 180));
      [-1, 1].map(n => r(t, e.rotate(90 * -n, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), Z(1, 1, .8, .2),));
      ac(e.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    }), [-1, 1].map(f => {
      r(p(12, 1), e.translate(-7.5 * f - 100, 3.7, 96).scale(.8, 4, .8), Z(.6, .24, .2, .5),);
      [7.2, 1.5].map(n => r(p(15, 1), e.translate(-7.5 * f - 100, n + .7, 96).scale(1.1, .5, 1.1), Z(.5, .24, .2, .4),));
      r(t, e.translate(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), Z(1, 1, .8),);
      r(Q(O(l(p(R), e.translate(-4 * f, 3.5, -0.5).scale(4, 4, .7), Z(.5, .5, .5, .4),), l(p(R), e.scale(3, 3, 10), Z(.6, .24, .2, .5)), l(p(28, 1), e.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Z(.6, .24, .2, .5),), l(p(5), e.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Z(.6, .24, .2, .5),), l(p(5), e.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), Z(.6, .24, .2, .5),),),), e.translate(f - 100, .7, 97),);
    }), u(f => {
      f.h = () => e.translate(-100, .6 - 6 * L[12].g, 96.5).scale(.88, 1.2);
      r(w);
    }), [...l(p(25, 1), e.scale(8, 1, 8), Z(.45, .45, .45, .2)), ...l(p(5), e.translate(0, 1).scale(1, .2), Z(.3, .3, .3, .2)),]);
    u(f => {
      f.h = () => e.translate(-80, 1, 106).rotate(0, 40 + ta);
      r(Q(O(l(p(25, 1), e.scale(8, 1, 8), Z(.45, .45, .45, .2)), l(p(R), e.translate(0, 0, -5.5).scale(1.5, 3, 2.5), Z(.45, .45, .45, .2),),),),);
      r(p(8), e.translate(0, 2).scale(3, 1.5, 3), Z(.7, .7, .7, .1));
      r(p(5), e.translate(0, 2).scale(1, 2), Z(.3, .3, .3, .2));
      ac(e.translate(0, 3), ...pb(10).map(({x:n, z:F}) => [5.6 * n, 5.6 * F, 2.5]),);
    });
    u(f => {
      f.h = () => e.translate(-64, 1, 106).rotate(0, ua);
      r(Q(O(l(p(25, 1), e.translate(0, 2).scale(8, 1, 8), Z(.35, 0, 0, .3),), l(p(R), e.scale(9, 5, 2), Z(.3, 0, 0, .3)),),),);
      r(A);
      [-1, 1].map(n => r(t, e.rotate(0, 90).translate(-5 * n, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * n + 90), Z(1, 1, .8),));
    });
    u(f => {
      f.h = () => e.translate(-48, 1, 106).rotate(0, 180 - ua);
      r(Q(O(l(p(25, 1), e.translate(0, 2).scale(8, 1, 8), Z(.35, 0, 0, .3),), l(p(R), e.translate(7).scale(9, 5, 2), Z(.3, 0, 0, .3)), l(p(R), e.translate(0, 0, 7).scale(2, 5, 9), Z(.3, 0, 0, .3),),),),);
      r(A);
    });
    u(f => {
      f.h = () => e.translate(-48, 1, 90).rotate(0, 270 + ua);
      r(Q(O(l(p(25, 1), e.translate(0, 2).scale(8, 1, 8), Z(.35, 0, 0, .3),), l(p(R), e.translate(7).scale(9, 5, 2), Z(.3, 0, 0, .3)), l(p(R), e.translate(0, 0, -7).scale(2, 5, 9), Z(.3, 0, 0, .3),),),),);
      r(A);
    });
    r(p(R), e.translate(-56, 1, 106).scale(.7, .8, 2.5), Z(.7, .7, .7, .2));
    r(p(R), e.translate(-48, 1, 98).scale(2.5, .8, .7), Z(.7, .7, .7, .2));
    r(p(R), e.translate(-39, .4, 90).scale(2, 1, 2), Z(.7, .7, .7, .3));
    r(p(R), e.translate(-34.2, .4, 90).scale(3, 1, 3), Z(.7, .7, .7, .3));
    $b(e.translate(-34, 2.7, 96).rotate(-12, 0));
    r(p(5), e.translate(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), Z(.2, .5, .5, .6));
    [Z(.1, .55, .45, .2), Z(.2, .5, .5, .3), Z(.3, .45, .55, .4)].map((f, n) => u(F => {
      F.h = () => e.translate(0, (1 - L[13].i) * (1 - L[14].i) * (n ? 0 : 3) + Pa(L[13].i, L[14].i) * Math.sin(1.5 * a + 1.5 * n) * 4,);
      r(p(R), e.translate(-23.5, .5, 90 + 6.8 * n).scale(1 === n ? 2 : 3.3, 1, 3.3), f,);
      2 === n && r(p(R), e.translate(-29.1, .4, 90).scale(2.1, 1, 3), Z(.7, .7, .7, .3),);
      1 === n && r(p(R), e.translate(-16.1, .5, 103.5).rotate(0, 0, -3.5).scale(3.9, .8, 2).skewX(-1), Z(.6, .6, .7, .3),);
    }));
    r(Q(O(l(p(6, 0, 0, .3), e.translate(0, -0.92, 95).scale(14, 2, 14), Z(.8, .8, .8, .2),), l(p(5), e.translate(0, 0, 95).scale3d(6), Z(.3, .3, .3, .5)),),),);
    [8, -6.1].map((f, n) => Xa(3, F => r(P, e.translate(6 * F - 6, f - (1 & F), 111 - .2 * (1 & F) - n), 1 & F ? Z(.5, .5, .5, .3) : Z(.35, .35, .35, .5),),));
    [-1, 1].map(f => r(t, e.translate(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), Z(1, 1, .8),));
    $b(e.translate(0, 1.7, 82).rotate(0, 180));
    r(p(5), e.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Z(.5, .3, .3, .4),);
    r(Q(O(Zb(l(p(R), e.translate(0, 16, 110.5).scale(12, 1, 3), Z(.5, .3, .3, .4),), l(p(R), e.translate(0, 16, 111).scale(3, 1, 3.8), Z(.5, .3, .3, .4),),), l(p(5), e.translate(0, 16, 103.5).scale(5.5, 5, 5.5), Z(.5, .3, .3, .4),),),),);
    u(f => {
      f.h = () => {
        const n = Math.sin(a);
        return e.translate(-2 * n).rotate(0, 0, 25 * n);
      };
      r(p(3), e.translate(0, -3, 118.8).scale(.8, .8, 18).rotate(90, 0, 60), Z(.5, .3, .3, .4),);
      [22, 30].map(n => {
        r(p(6), e.translate(0, 16, n + 95).scale(3, 1, 2.3).rotate(0, 90), Z(.7, .7, .7, .4),);
        r(p(R), e.translate(0, 6.2, n + 95).scale(.5, 11, .5), Z(.5, .3, .3, .4),);
      });
    });
    r(p(6), e.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Z(.5, .6, .7, .3),);
    r(p(R), e.translate(0, 16, 129).scale(1.5, 1, 2), Z(.5, .6, .7, .3));
    r(p(7), e.translate(0, 16.2, 133).scale(5, 1, 5), Z(.4, .5, .6, .4));
    u(f => {
      f.h = () => {
        const n = Pa(Pa((L[14].g + L[14].i) / 2, L[13].i), (L[15].g + L[15].i) / 2,);
        return e.translate(0, 16 * n, 8.5 * Oa(2 * n - 1) + 95);
      };
      r(p(5), e.scale(5, 1.1, 5), Z(.5, .3, .3, .4));
      r(p(5), e.scale(5.5, .9, 5.5), Z(.25, .25, .25, .4));
      $b(e.translate(0, 1.5, -1).rotate(0, 180));
    });
    ac(e.translate(0, 3, 95), ...pb(9).map(({x:f, z:n}) => [9 * f, 9 * n, 4]),);
    ac(e.translate(0, 19, 134), [0, 0, 3.5]);
  });
  Ka = [u(() => {
    [0, 180].map(x => r(t, e.rotate(0, x).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), Z(1, 1, .8),));
    r(rb(20), e.translate(0, 1).scale(.5, .5, .5), Z(1, .3, .4));
    const v = l(Q(O(p(15, 1), l(p(R), e.translate(0, 0, 1).scale(2, 2, .5)),),), e.rotate(-90, 0).scale(.1, .05, .1), Z(.3, .3, .3),);
    [-1, 1].map(x => r(v, e.translate(.2 * x, 1.2, .4).rotate(0, 20 * x, 20 * x)));
    r(p(R), e.translate(0, .9, .45).scale(.15, .02, .06), Z(.3, .3, .3));
    r(rb(20), e.scale(.7, .8, .55), Z(1, .3, .4));
  }), ...[-1, 1].map(v => u(() => {
    r(p(10, 1), e.translate(.3 * v, -0.8).scale(.2, .7, .24), Z(1, .3, .4));
  })),];
  Ha = u(() => {
    r(p(6, 1), e.scale(.13, 1.4, .13), Z(.3, .3, .5, .1));
    r(p(8, 1), e.translate(0, 1).scale(.21, .3, .21), Z(1, .5, .2));
    r(p(3), e.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), Z(.2, .2, .2, .1));
  }, 0);
  Ja = u(() => {
    r(p(6).slice(0, -1), e.scale(.77, 1, .77), Z(1, .3, .5));
  }, 0);
  Ia = u(() => {
    r(rb(30, 24, (v, x, w) => {
      const C = x / 24, T = v * Math.PI * 2 / 30, A = C ** .6 * Math.PI / 2;
      v = C * C * Math.sin(v * Math.PI * 14 / 30) / 4;
      return 23 === x ? {x:w.D = 0, y:-0.5, z:0,} : {x:Math.cos(T) * Math.sin(A), y:Math.cos(C * Math.PI) - C - v, z:Math.sin(T) * Math.sin(A) + Math.sin(v * Math.PI * 2) / 4,};
    }), e.scale3d(.7), Z(1, 1, 1),);
    [-1, 1].map(v => r(rb(12), e.translate(.16 * v, .4, -0.36).scale3d(.09)));
  }, 0);
});

