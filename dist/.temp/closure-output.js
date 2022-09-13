let fa = 0, ma = !0, na = 0, oa = 0, pa = 0, a = 0, qa = 0, sa = 0, Aa = 0, Ba = 0, Da = 0, Ea = 0, Ha = 0, Ia = 0, Ja = 0, d = .066, Ka, Ma, Oa, Pa, Qa;
const Ra = Math.PI / 180, e = new DOMMatrix(), Sa = (b, c) => c < b ? b : c, Ta = b => 0 > b ? -b : b, Va = b => 0 > b ? 0 : 1 < b ? 1 : b, Wa = (b, c) => (b = 0 > b ? 0 : 1 < b ? 1 : b, b + (1 - b - b) * (0 > c ? 0 : 1 < c ? 1 : c)), Xa = b => Math.atan2(Math.sin(b *= Ra), Math.cos(b)) / Ra, Ya = (b, c, k) => {
  b *= Ra;
  c = (c * Ra - b) % (2 * Math.PI);
  return (b + (2 * c % (2 * Math.PI) - c) * (0 > k ? 0 : 1 < k ? 1 : k)) / Ra;
}, Za = (b, c, k, m) => {
  var n = c - b;
  b += Math.sign(c - b) * Sa(0, (0 > n ? -n : n) ** .9 - k) * m * 2;
  return b + (c - b) * Va(m / 7);
}, p = (b, c) => Array.from(Array(b), (k, m) => c(m)), $a = (b, c, k, m,) => [b, 0, 0, 0, 0, c, 0, 0, 0, 0, (m + k) / (k - m), -1, 0, 0, 2 * m * k / (k - m), 0], ab = ({x:b, y:c, z:k}, m) => b * m.x + c * m.y + k * m.z, bb = ({x:b, y:c, z:k}, m) => Math.hypot(b - m.x, c - m.y, k - m.z) || 0, cb = b => {
  let c = 0, k = 0, m = 0, n, l = b.at(-1);
  for (n of b) {
    c += (l.y - n.y) * (l.z + n.z), k += (l.z - n.z) * (l.x + n.x), m += (l.x - n.x) * (l.y + n.y), l = n;
  }
  return n = Math.hypot(c, k, m), c /= n, k /= n, m /= n, {x:c, y:k, z:m, w:c * l.x + k * l.y + m * l.z,};
}, q = (b, c, k, m = 0) => 255 * m << 24 | 255 * k << 16 | 255 * c << 8 | 255 * b, db = (b, c, k) => (b.D = k, b.A = c, b), gb = (b, c, k = b.A) => db(b.map(m => (({x:n, y:l, z:f}, g) => ({x:n, y:l, z:f} = g.transformPoint({x:n, y:l, z:f,}), {x:n, y:l, z:f,}))(m, c)), k, b.D,), r = (b, c, k) => b.map(m => gb(m, c, k)), hb = (b, c = 0) => p(b, k => {
  const m = Math.cos(2 * Math.PI * k / b);
  return {x:Math.sin(2 * Math.PI * k / b), y:0, z:.01 > (0 > m ? -m : m) ? m : 0 > m ? m - c : m + c,};
}), ib = (b, c, k) => b.map((m, n, {length:l}) => db([m, c[l - n - 1], c[l - (n + 1) % l - 1], b[(n + 1) % l]], b.A, k,)), t = (b, c, k = 0, m) => {
  m = b.length ? b : hb(b, m);
  b = gb(m, e.translate(0, 1).scale3d(0 < k ? k : 1));
  k = gb(m, e.translate(0, -1).scale3d(0 > k ? -k : 1)).reverse();
  return [...ib(k, b, c), k, b];
}, jb = (b, c = b, k = (m, n) => (n *= Math.PI / c, {x:Math.cos(m *= 2 * Math.PI / b) * Math.sin(n), y:Math.cos(n), z:Math.sin(m) * Math.sin(n),})) => {
  const m = [];
  for (let n = 0; b > n; n++) {
    for (let l = 0; c > l; l++) {
      const f = db([], 0, 1);
      m.push(f);
      f.push(k(n, l, f));
      l && f.push(k((n + 1) % b, l, f));
      c - 1 > l && f.push(k((n + 1) % b, l + 1 % c, f));
      f.push(k(n, l + 1 % c, f));
    }
  }
  return m;
}, kb = (b, c) => {
  var k, m, n, l = c.C;
  for (var f = 0; l.length > f; ++f) {
    if (-0.00008 > (n = ab(b, l[f]) - b.w) ? m = c : 8e-5 < n && (k = c), m && k) {
      m = [];
      n = [];
      l = c.C;
      f = c.B;
      let g = l.at(-1), h = ab(b, g) - b.w;
      for (const w of l) {
        k = ab(b, w) - b.w, 8e-5 > h && n.push(g), -0.00008 < h && m.push(g), (8e-5 < h && -0.00008 > k || -0.00008 > h && 8e-5 < k) && (h /= k - h, g = {x:g.x + (g.x - w.x) * h, y:g.y + (g.y - w.y) * h, z:g.z + (g.z - w.z) * h,}, m.push(g), n.push(g)), g = w, h = k;
      }
      return {m:2 < m.length && {C:db(m, l.A, l.D), B:f, o:c,}, l:2 < n.length && {C:db(n, l.A, l.D), B:f, o:c,},};
    }
  }
  return {m:k, l:m,};
}, lb = (b, c, k = cb(c.C)) => {
  if (b) {
    const {m, l:n} = kb(b, c);
    m || n || b.F.push(c);
    m && (b.m = lb(b.m, m, k));
    n && (b.l = lb(b.l, n, k));
  } else {
    b = {x:k.x, y:k.y, z:k.z, w:k.w, F:[c], m:0, l:0,};
  }
  return b;
}, mb = (b, c, k) => {
  const m = [], n = (l, f) => {
    let {m:g, l:h} = kb(l, f);
    g || h || (0 < k * ab(l, c) ? g = f : h = f);
    g && (l.m ? n(l.m, g) : m.push(g));
    h && l.l && n(l.l, h);
  };
  for (const l of c.F) {
    n(b, l);
  }
  return m;
}, pb = (b, c) => b && (c(b), pb(b.m, c), pb(b.l, c)), qb = b => b.length ? b.reduce((c, k) => lb(c, {C:k, B:0, o:0,}), 0) : b, rb = b => (pb(b, c => {
  const k = c.l;
  c.l = c.m;
  c.m = k;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const m of c.F) {
    m.B = !m.B;
  }
}), b), sb = (...b) => b.reduce((c, k) => {
  const m = [];
  if (c = qb(c), k) {
    k = qb(k);
    pb(c, n => n.F = mb(k, n, 1));
    pb(k, n => m.push([n, mb(c, n, -1)]));
    for (const [n, l] of m) {
      for (const f of l) {
        lb(c, f, n);
      }
    }
  }
  return c;
}), u = (b, ...c) => rb(sb(rb(qb(b)), ...c)), y = b => {
  const c = new Map(), k = new Map(), m = n => {
    if (n.o) {
      const l = c.get(n.o);
      l ? (k.delete(l), n = m(n.o)) : c.set(n.o, n);
    }
    return n;
  };
  return pb(b, n => {
    for (const l of n.F) {
      k.set(m(l), l.B);
    }
  }), Array.from(k, ([{C:n}, l]) => {
    const f = n.map(({x:g, y:h, z:w}) => ({x:g, y:h, z:w,}));
    return db(l ? f.reverse() : f, n.A, n.D);
  });
}, A = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], tb = [], B = (b, c) => {
  ub.push(ub.at(-1).multiply(b));
  c();
  ub.pop();
}, vb = [], wb = [], xb = [], yb = [], zb = [[]], Ab = new Map(), Bb = new Int32Array(7), Gb = b => {
  let {x:c, y:k, z:m} = Ka[b];
  Eb[0] = c;
  Eb[1] = k;
  Eb[2] = m;
  b = "" + (Ka.D ? Fb : Bb);
  let n = Ab.get(b);
  return void 0 !== n ? (c = 3 * n, xb[c] = (xb[c++] + Bb[4]) / 2, xb[c] = (xb[c++] + Bb[5]) / 2, xb[c] = (xb[c] + Bb[6]) / 2) : (Ab.set(b, n = Ab.size), wb.push(c, k, m), xb.push(Bb[4], Bb[5], Bb[6]), yb.push(Bb[3])), n;
}, C = (b, c = e, k) => zb.at(-1).push(...r(b, ub.at(-1).multiply(c), k)), Hb = () => {
  var b = zb.at(-1);
  for (Ka of b) {
    const {x:c, y:k, z:m} = cb(Ka);
    Bb[3] = 0 | Ka.A;
    Bb[4] = 32767 * c;
    Bb[5] = 32767 * k;
    Bb[6] = 32767 * m;
    for (let n = 2, l = Gb(0), f = Gb(1); Ka.length > n; ++n) {
      vb.push(l, f, f = Gb(n));
    }
  }
  b.length = 0;
  b = fa;
  return {N:b, K:(fa = vb.length) - b,};
}, E = (b, c = 0) => {
  c = {...Ib, o:Jb, G:[], J:ub.at(-1), u:c,};
  b = (ub.push(e), zb.push([]), Jb.G.push(c), b(Jb = c) || Hb());
  return tb[c.u] = c, b && b.K && (c.H = b), Jb = c.o, ub.pop(), zb.pop(), c;
}, Kb = (b, c = e) => {
  const k = b.h;
  (b.o && !b.u && (b.u = b.o.u || 1), b.s = c.multiply(b.J), k) && (c = k(b)) && (b.s = b.s.multiply(c));
  for (const m of b.G) {
    Kb(m, b.s);
  }
}, G = {x:-11, y:17, z:-90,};
var Lb = 0, Mb = 0;
const Ob = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" ")], [100, 128, 0, 201, 128, 0, 0, 100, 144, 
35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" ")], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, ["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 
47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",]]], Pb = b => Math.sin(b * Math.PI * 2), Qb = b => .5 > b % 1 ? 1 : -1, Rb = b => b % 1 * 2 - 1, Sb = b => {
  b = b % 1 * 4;
  return 2 > b ? b - 1 : 3 - b;
}, Tb = [], Wb = () => {
  Ma || !ma ? Ub.disconnect() : Ub.connect(Vb.destination);
  b4.innerHTML = "Music: " + ma;
}, Xb = (b = !1) => {
  if (Ma !== b) {
    Ma = b;
    Oa = 0;
    try {
      b ? document.exitPointerLock() : Ub.start();
    } catch {
    }
    document.body.className = b ? "l m" : "l";
    Wb();
  }
}, Yb = () => {
  let b = 0, c = 0, k = 0, m, n, l;
  const f = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    Tb.length = na = oa = 0;
    m = n = void 0;
    document.hidden && Xb(!0);
  };
  b1.onclick = () => Xb();
  b2.onclick = () => {
    Xb();
    Oa = 1;
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  b4.onclick = () => {
    ma = !ma;
    Wb();
  };
  b5.onclick = () => Xb(!0);
  onclick = () => {
    l = 1;
    Ma || (Tb[5] = !0, Oa && hC.requestPointerLock());
  };
  document.onvisibilitychange = onresize = onblur = f;
  onkeydown = onkeyup = ({code:g, target:h, type:w, repeat:z}) => {
    z || ((h = !!w[5] && h === document.body) && ("Escape" === g || "Enter" === g && Ma) ? Ma && !l || Xb(!Ma) : (g = {KeyA:0, ArrowLeft:0, KeyW:1, ArrowUp:1, KeyD:2, ArrowRight:2, KeyS:3, ArrowDown:3, KeyE:5, Space:5, Enter:5,}[g], 5 === g ? h && (Tb[g] = 1) : Tb[g] = h));
  };
  onmousemove = ({movementX:g, movementY:h}) => {
    Oa && (g || h) && (Mb += .1 * g, Lb += .1 * h);
  };
  hC.ontouchstart = g => {
    if (!Ma) {
      for (const h of g.changedTouches) {
        Oa && h.pageX > hC.clientWidth / 2 ? m || (m = h, b = Mb, c = Lb) : n = n || h;
      }
      k = pa;
    }
  };
  hC.ontouchmove = ({changedTouches:g}) => {
    if (!Ma) {
      for (const {pageX:h, pageY:w, identifier:z} of g) {
        m?.identifier === z && (Mb = b + (h - m.pageX) / 3, Lb = c + (w - m.pageY) / 3), n?.identifier === z && (na = -(h - n.pageX) / 18, oa = -(w - n.pageY) / 18, na = .35 > (0 > na ? -na : na) ? 0 : .8 * na, oa = .35 > (0 > oa ? -oa : oa) ? 0 : .8 * oa);
      }
    }
  };
  hC.ontouchend = g => {
    for (const h of g.changedTouches) {
      h.identifier === m?.identifier && (m = void 0), h.identifier === n?.identifier && (n = void 0, oa = na = 0);
    }
    g.preventDefault();
    g = pa - k;
    (!k || .02 < g && .4 > g) && (Tb[5] = !0);
  };
  oncontextmenu = () => !1;
  f();
  Xb(!0);
}, H = (b, c, k) => b + (c - b) * Va(1 - Math.exp(-k * d)), Zb = ({j:b}) => b, O = [], $b = [], ac = () => {
  qa = $b.reduce((b, c) => b + c.j, 0);
  h3.innerHTML = " " + "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[qa];
}, bc = () => {
  ac();
  localStorage.DanteSP22 = JSON.stringify([O.map(Zb), $b.map(Zb), Aa, a, Ja,]);
}, U = {x:0, y:0, z:0,}, dc = b => {
  B(b, () => {
    E(c => {
      const k = {j:0, g:0, i:0, M:c,}, m = O.push(k) - 1;
      c.h = () => {
        const n = k.j, l = k.g, f = k.i, g = (k.L = c.s).transformPoint(), h = bb(g, G);
        2.9 > bb(g, U) && Tb[5] && (.3 > l || .7 < l) && (k.j = n ? 0 : 1, m && (Ha || (h4.innerHTML = "* click *", sa = a + 1)), Aa = m, bc());
        return k.g = H(l, n, 4), k.i = H(f, n, 1), c.I = 80 < bb(g, G), c.v = 150 > h, c.H = cc[.5 < l ? 1 : 0], e.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
      };
    });
    C(t(5), e.translate(-0.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
    C(t(5), e.translate(.2).rotate(90, 90).scale(.4, .1, .5), q(.4, .5, .5));
    C(t(A), e.translate(0, -0.4).scale(.5, .1, .5), q(.5, .5, .4));
  });
}, fc = (b, ...c) => {
  B(b, () => {
    let k = -1, m = 0, n = 1, l = 0, f = 0, g = 3, h = 0, w = 0;
    const z = {j:0,}, I = c.map(([L, V, S]) => ({x:L, z:V, w:S,}));
    let P = I[0], {x:Y, z:Z} = P, D = Y, ba = Z;
    $b.push(z);
    E(L => (L.h = () => {
      var V = 1, S = 1 / 0;
      for (var ha of I) {
        var ea = ha.w, ia = Math.hypot(Y - ha.x, Z - ha.z), Q = ia - ea;
        ra ||= ia < ea;
        0 < Q && S > Q && (S = Q, P = ha);
        ea = ia / ea;
        V = V < ea ? V : ea;
      }
      if (!ra) {
        S = P.x;
        ha = P.z;
        ea = P.w;
        ia = Y - S;
        Q = Z - ha;
        let wa = Math.hypot(ia, Q), Ua = Math.atan2(-Q, ia);
        n && (l = (Math.random() - .5) * Math.PI / 2, g = Sa(1, g / (1 + Math.random())));
        Ua += l;
        k = -Math.cos(Ua);
        m = Math.sin(Ua);
        .1 < wa && (wa = (wa < ea ? wa : ea) / (wa || 1), Y = ia * wa + S, Z = Q * wa + ha);
      }
      n = ra;
      g = H(g, 3 + 6 * (1 - V), 3 + V);
      Y = H(Y, Y + k, g);
      Z = H(Z, Z + m, g);
      D = H(D, Y, g);
      ba = H(ba, Z, g);
      f = Ya(f, Math.atan2(D - h, ba - w) / Ra - 180, 3 * d,);
      h = D;
      w = ba;
      V = e.translate(D, 0, ba).rotateSelf(0, f).skewXSelf(7 * Math.sin(2 * a),).skewYSelf(7 * Math.sin(1.4 * a));
      var ra = L.s.multiply(V).transformPoint();
      L.v = 1 - z.j;
      L.I = 100 < bb(ra, G);
      !z.j && 1.5 > bb(ra, U) && (z.j = 1, ra = [, "Mark Zuckemberg<br>made the world worse", , "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil, war", "He was NOT a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][qa] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      S = qa && 12 > qa ? 5 : 7, Ha || (h4.innerHTML = ra, sa = a + S), bc());
      return V;
    }, ec));
  });
}, hc = () => {
  let b = 3;
  const c = l => e.translate(Math.sin(a + 2) / 5, Math.sin(.8 * a) / 3, l).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),), k = y(u(r(t(A), e.translate(0, -8).scale(6, 15, 2.2)), r(t(A), e.translate(0, -14.1).scale(4, 13, 4)), r(t(20, 1), e.translate(0, -1).rotate(90, 0, 90).scale3d(4)),),), m = y(u(r(t(20, 1, 1.15, 1), e.translate(0, -3).scale(3.5, 1, 3.5), q(.7, .4, .25, .7),), r(t(20, 1, 1.3, 1), e.translate(0, -2.5).scale(2.6, 1, 3), q(.7, .4, .25, .2),), r(t(A), e.translate(4, 
  -1.2).scale3d(2), q(.7, .4, .25, .3)),),), n = (p(7, l => C(t(6, 1), e.translate(4 * (l / 6 - .5), 3).scale(.2, 3, .2), q(.3, .3, .38)),), Hb());
  B(e.translate(-12, 4.2, -66), () => {
    E(l => {
      l.h = () => c(40 * Ia);
      dc(e.translate(0, -3, 4));
      C(m);
      p(13, f => {
        B(e.translate(f % 4 * 1.2 - 1.7, -2, 1.7 * (f / 4 | 0) - 5.5 + Ta(f % 4 - 2)), () => E(g => (g.h = () => {
          if (g.I = 60 < Math.hypot(G.x + 11, G.y - 4, G.z + 27 - 40 * Ia,), g.v = qa > 12 - f) {
            return e.translate(Math.sin(a + f) / 6, 0, Math.cos(a / 1.5 + f) / 6);
          }
        }, ec)));
      });
    }, ++b);
  });
  C(t(A), e.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), q(.8, .8, .8, .2));
  fc(e.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
  fc(e.translate(0, 2.8), [5, 10, 3], [-5, 10, 3], ...hb(18).map(({x:l, z:f}) => [7 * l, 10 * f, 4.5 - 2 * (0 > l ? -l : l)]),);
  A.map(({x:l, z:f}) => C(t(6), e.translate(3 * l, 3, 15 * f).scale(.7, 4, .7), q(.6, .3, .3, .4)));
  [-23, 22].map(l => C(t(A), e.translate(0, 0, l).scale(3, 1, 8), q(.9, .9, .9, .2)));
  [-15, 15].map((l, f) => {
    C(t(A), e.translate(0, 6.3, l).scale(4, .3, 1), q(.3, .3, .3, .4));
    C(t(A), e.translate(0, 1, l).scale(3, .2, .35), q(.3, .3, .38, .2));
    B(e.translate(0, 0, l), () => E(g => (g.h = () => {
      const h = O[f + 1].g;
      return g.v = .99 > h, e.translate(0, 5 * -h);
    }, n)));
  });
  p(5, l => p(2, f => C(gc, e.translate(18.5 * (f - .5), 0, 4.8 * l - 9.5).rotate(0, 180 - 180 * f).scale(1.2, 10, 1.2), q(1, 1, .8, .2),)));
  C(t(A), e.translate(3, 1.5, -20).scale(.5, 2, 5), q(.7, .7, .7, .2));
  C(t(A), e.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), q(.75, .75, .75, .2),);
  C(t(5), e.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), q(.6, .3, .3, .4));
  dc(e.translate(-5.4, 1.5, -19).rotate(0, -90));
  C(t(A), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, .6, 4.5), q(.8, .2, .2, .5),);
  C(y(u(sb(r(t(6, 0, 0, .3), e.translate(8, -3, -4).scale(13, 1, 13), q(.7, .7, .7, .2),), r(t(6), e.translate(0, -8).scale(9, 8, 8), q(.4, .2, .5, .5)), r(t(6, 0, 0, .3), e.translate(0, -0.92).scale(13, 2, 13), q(.8, .8, .8, .2),),), r(t(5), e.scale(5, 30, 5), q(.4, .2, .6, .5)), r(t(5, 0, 1.5), e.translate(0, 1).scale(4.5, .3, 4.5), q(.7, .5, .9, .2),), r(t(A), e.rotate(0, 60).translate(14, .7, -1).rotate(0, 0, -35).scale(2, 2, 2), q(.5, .5, .5, .5),), r(t(6), e.translate(15, -1.5, 4).scale(3.5, 
  1, 3.5), q(.5, .5, .5, .5)),),),);
  E(l => {
    dc(e.translate(0, 1.2));
    l.h = () => (l.v = .01 < O[3].g, e.translate(0, (5 * Math.cos(1.5 * a) + 2) * O[3].i * (1 - O[2].g) + -15 * (1 - O[3].g), 0,));
    C(t(5), e.translate(0, -0.2).scale(5, 1, 5), q(.6, .65, .7, .3));
  }, ++b);
  dc(e.translate(15, -2, 4));
  B(e.translate(0, 0, 75), () => {
    const l = () => {
      var h = O[2].i, w = 1 - O[4].i;
      return h < w ? h : w;
    }, f = (h, w) => E(z => {
      z.h = () => e.translate(l() * Math.sin(3 * h + a * h) * w);
      A.map(({x:I, z:P}) => {
        C(t(11, 1), e.translate(4 * I, 4, 4 * P - 40).scale(.8, 3, .8), q(.5, .3, .7, .6),);
        C(t(A), e.translate(4 * I, 7, 4 * P - 40).scale(1, .3), q(.5, .5, .5, .3),);
      });
      C(y(u(r(t(A), e.translate(0, 0, -40).scale(5, 1, 5), q(.8, .8, .8, .3),), ...[-1, 1].map(I => r(t(A), e.translate(5 * I, .2, -40).rotate(0, 0, -30 * I).scale(4, 1, 2), q(.8, .8, .8, .3),)),),),);
      C(t(A), e.translate(0, -3, -40).scale(8, 2, 8), q(.4, .4, .4, .3));
    }, ++b), g = (f(.7, 12), B(e.translate(0, 0, 20), () => f(1, 8.2)), E(h => {
      B(e.translate(0, 0, -30), () => {
        h.h = () => e.translate(l() * Math.sin(a / 1.5 + 2) * 12);
        C(y(u(sb(r(t(A), e.scale(1.5, 1, 5), q(.9, .9, .9, .2)), r(t(6), e.scale(4, 1, 5), q(.9, .9, .9, .2)), r(t(A), e.translate(0, -2).scale(2, 3.2, 1.9), q(.3, .8, .5, .5),), r(t(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), q(.9, .9, .9, .2),),), r(t(A), e.scale(1.3, 10, 1.3), q(.2, .7, .4, .6)),),),);
        fc(e.translate(0, 2.8), [0, 0, 4.5]);
      });
    }, ++b), E(h => {
      h.h = () => e.translate(9.8 * (1 - l()));
      C(t(3), e.translate(-23, -1.7, -19.2).scale(5, .7, 8.3), q(.3, .6, .6, .2));
      C(t(8), e.translate(-23, -2.2, -8.5).scale(1.5, 1.2, 1.5), q(.8, .8, .8, .2));
      C(t(A), e.translate(-23, -3, -20).scale(5.2, 1.7, 3), q(.5, .5, .5, .3));
      C(t(A), e.translate(-23, -2.2, -13).scale(3, 1, 4), q(.5, .5, .5, .3));
      dc(e.translate(-23, -0.5, -8.5));
    }, ++b), C(t(A), e.translate(-18.65, -3, -20).scale(2.45, 1.4, 2.7), q(.9, .9, .9, .2)), E(h => {
      h.h = () => e.translate(0, Va(1 - 5 * l()) * Wa(O[4].g, O[5].g) * Math.sin(1.35 * a) * 4);
      C(t(A), e.translate(-22.55, -3, -20).scale(1.45, 1.4, 2.7), q(.7, .7, .7, .2),);
      C(y(u(r(t(A), e.scale(3, 1.4, 2.7)), r(t(A), e.scale(1.2, 8, 1.2)),),), e.translate(-33, -3, -20), q(.7, .7, .7, .2),);
    }, ++b), E(h => {
      h.h = () => e.translate(0, 0, Va(1 - 5 * l()) * Wa(O[4].g, O[5].g) * Math.sin(.9 * a) * 8);
      C(y(u(r(t(A), e.translate(-27, -3, -20).scale(3, 1.4, 2.7), q(.9, .9, .9, .2),), r(t(A), e.translate(-27, -3, -20).scale(1, 3), q(.9, .9, .9, .2),),),),);
      C(t(A), e.translate(-39, -3, -20).scale(3, 1.4, 2.7), q(.9, .9, .9, .2));
    }, ++b), B(e.translate(-44.5, 0, -20), () => E(h => {
      h.h = () => e.translate(0, -6.5 * O[4].i);
      C(t(6), e.rotate(90, 90).rotate(0, 90).scale(5.9, .5, 5.9), q(.7, .7, .7, .4));
    })), [...r(y(sb(r(t(A), e.translate(0, -3).scale(11, 1.4, 3), q(.9, .9, .9, .2),), u(r(t(6), e.rotate(0, 0, 90).scale(6, 8, 6), q(.3, .6, .6, .3)), r(t(4, 0, .01), e.translate(0, 6).scale(12, 2, .75).rotate(0, 45), q(.3, .6, .6, .3),), r(t(6), e.rotate(0, 0, 90).scale(5, 12, 5), q(.3, .6, .6, .3)), ...[5, 0, -5].map(h => r(t(5), e.translate(h, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), q(.3, .6, .6, .3),)),),),), e,)]);
    C(g, e.translate(-53, 0, -20));
    C(t(6), e.translate(-61.3, -2.4, -26).scale(3, 1, 5), q(.4, .6, .6, .3));
    C(t(7), e.translate(-57, -2.6, -29).scale(4, 1, 4), q(.8, .8, .8, .3));
    dc(e.translate(-55, -1.1, -29).rotate(0, 90));
    B(e.translate(-75, 0, -20), () => E(h => {
      h.h = () => e.translate(0, (1 - O[5].i) * (1 - O[6].g) * 3).rotate(180 * (1 - O[5].i) + Ea, 0,);
      C(g);
    }));
    C(t(A), e.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.5), q(.7, .7, .7, .2),);
    C(t(3, 0, -0.5), e.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9), q(.8, .8, .8, .2),);
    fc(e.translate(-100, .2, -20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    C(y(u(sb(r(t(A), e.translate(-100, -2.5, -20).scale(8, 1, 8), q(.8, .8, .8, .2),), r(t(A), e.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3), q(.8, .8, .8, .2),), r(t(A), e.translate(-100, -2.6, -5).scale(3, 1.1, 7), q(.8, .8, .8, .2),), r(t(A), e.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5), q(.8, .8, .8, .2),), r(t(6), e.translate(-88.79, -2.6, 5.21).scale(6, 1.1, 6).rotate(0, 15), q(.6, .6, .6, .3),), r(t(A), e.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6), 
    q(.8, .8, .8, .2),), r(t(A), e.translate(-100, .42, 17).scale(3, 1.1, 4.1), q(.8, .8, .8, .2),),), r(t(8), e.translate(-100, -1, -20).scale(7, .9, 7), q(.3, .3, .3, .4),), r(t(8), e.translate(-100, -2, -20).scale(4, .3, 4), q(.4, .4, .4, .5),), r(t(8), e.translate(-100, -3, -20).scale(.6, 1, .6), q(.4, .4, .4, .5),),),), e,);
    C(y(u(r(t(A), e.translate(-100, 1, -12).scale(7.5, 4), q(.5, .5, .5, .4),), r(t(A), e.translate(-100, 0, -5).scale(2, 2, 10), q(.5, .5, .5, .4),), r(t(20, 1), e.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0), q(.5, .5, .5, .4),),),),);
    fc(e.translate(-89, .2, 5), [0, 0, 6]);
    B(e.translate(-99.7, -2, -11.5), () => E(h => (h.h = () => e.translate(0, 5.3 * -O[6].g), n),),);
    A.map(({x:h, z:w}) => {
      C(t(6), e.translate(7 * h - 100, -3, 7 * w - 20).scale(1, 8.1), q(.6, .15, .15, .8),);
      [4, -0.4].map(z => C(t(6), e.translate(7 * h - 100, z, 7 * w - 20).scale(1.3, .5, 1.3), q(.4, .2, .2, .8),));
    });
    p(7, h => {
      C(t((23 * h + 1) % 5 + 5, 0, .55), e.translate(5 * Math.sin(h) - 101 + h, -2.3 - h, -30.1 - 2.8 * h).scaleSelf(5 + h / 2, 1 + h / 6, 5 + h / 3,), q(.5 - h / 17, .5 - (1 & h) / 9, .6, .3),);
    });
    C(t(A), e.translate(-87, -9.5, -51).scale(7, 1, 3), q(.4, .5, .6, .4));
    C(t(4), e.translate(-86, -9.2, -48).scale(5, 1, 5), q(.5, .6, .7, .3));
    C(t(18, 1), e.translate(-86, -9, -44).scale(1.5, 1, 1.5), q(.3, .3, .4, .1));
    dc(e.translate(-86, -7.5, -44));
    B(e.translate(-76.9, -10, -51), () => {
      E(h => {
        h.h = () => e.translate(0, 3.5 * (1 - Sa(O[6].g, O[7].g)) + Wa(O[7].i, O[6].i) * Math.sin(a) * 5,);
        [0, 12, 24].map(w => C(t(A), e.translate(w, w / -13).scale(2.8, 1.5, 3), q(.2, .5, .6, .2)));
      }, ++b);
      E(h => {
        h.h = () => {
          const w = Wa(O[7].i, O[6].i);
          return e.translate(0, w * Math.sin(a + 3) * 6, 6 * Math.sin(.6 * a + w) * w);
        };
        [6, 18].map(w => C(t(A), e.translate(w, w / -13).scale(2.8, 1.5, 3), q(.1, .4, .5, .2)));
      }, ++b);
    });
    B(e.translate(-38.9, -11.3, -58), () => {
      C(y(u(sb(r(t(A), e.scale(11, 1, 13), q(.3, .4, .6, .3)), r(t(5), e.translate(0, 0, -7).scale(2, 1.2, 2), q(.2, .4, .7, .3),), r(t(5), e.scale(9, 1.2, 9), q(0, .2, .3, .5)),), r(t(5), e.scale(5.4, 5, 5.4), q(0, .2, .3, .5)),),),);
      dc(e.translate(0, 1.7, -7));
      E(h => {
        h.h = () => e.translate(0, -7.3 * O[7].i);
        fc(e.translate(0, 11).rotate(0, 0, 10), ...hb(15).map(({x:w, z}) => [3 * w, 3 * z, 1.5]),);
        C(y(u(sb(r(t(5), e.translate(0, 2).scale(5, 7, 5).skewY(8), q(.2, .4, .5, .5),), r(t(5), e.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), q(.25, .35, .5, .5),), r(t(5), e.translate(0, 9).scale(.6, 7, .6).skewY(8), q(.35, .3, .5, .5),),), r(t(5), e.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), q(.2, .4, .5, .5),),),),);
      });
      A.map(({x:h, z:w}) => {
        C(t(18, 1), e.translate(9 * h, 4, 11 * w).scale(1, 4), q(.25, .25, .25, 1));
        [1.5, 8].map(z => C(t(18, 1), e.translate(9 * h, z, 11 * w).scale(1.5, .5, 1.5), q(.6, .6, .6, .3),));
      });
      C(y(u(sb(r(t(6), e.translate(0, 0, -36).scale(15, 1.2, 15), q(.7, .7, .7, .3),), r(t(A), e.translate(0, 0, -18).scale(4, 1.2, 6), q(.45, .4, .6, .3),),), ...p(6, h => p(6, w => r(t(6), e.translate(4.6 * w - 12 + 2 * (1 & h), 0, 4.6 * h - 50 + 2 * Math.sin(4 * w)).scale(2, 5, 2,), q(.7, .7, .7, .3),))).flat(),),),);
      fc(e.translate(0, 2.9, -38), [0, 0, 12]);
    });
    C(t(5), e.translate(-84, -2, 10).scale(4, .8, 4).rotate(0, 10), q(.8, .1, .25, .4));
    dc(e.translate(-84, -0.5, 10).rotate(0, 45));
  });
  B(e.translate(-123, 1.4, 55), () => {
    E(l => {
      l.h = () => c(-65 * Ja);
      dc(e.translate(0, -3, -4).rotate(0, 180));
      C(m);
    }, ++b);
  });
  B(e.translate(-123, 0, -12), () => {
    const l = y(u(r(t(A), e.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), q(.25, .25, .35, .3),), r(t(3), e.translate(0, 0, -5.5).scale(3, 2), q(.6, .3, .4, .3)), ...[-1.2, 1.2].map(f => r(t(A), e.translate(f, -0.5, 1).scale(.14, .3, 6.5), q(.7, .2, 0, .3),)),),);
    C(t(A), e.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), q(.8, .8, .8, .2));
    C(t(6), e.translate(7, -2.6, -4.5).scale(3.2, .8, 3), q(.6, .5, .7, .2));
    dc(e.translate(7, -1.4, -6).rotate(0, 180));
    fc(e.translate(8, .2), [0, 0, 3.5]);
    p(3, f => C(k, e.translate(12 * f + 14, -9), q(.6, .6, .6, .3)));
    p(3, f => C(k, e.translate(46, -9, -12 * f - 8).rotate(0, 90), q(.6, .6, .6, .3)));
    C(y(u(r(t(12), e.translate(46, -13.9).scale(4, 18.2, 4), q(.7, .7, .7, .2),), r(t(A), e.translate(44).scale(3.5, 2.2, 1.3), q(.4, .5, .6, .2),), r(t(A), e.translate(46, 0, -2).scale(1.5, 2.2, 2), q(.4, .5, .6, .2),), r(t(12), e.translate(46, 2.8).scale(3, 5, 3), q(.4, .5, .6, .2)),),),);
    C(t(A), e.translate(7.5, -17).scale(.5, 15, 2.2), q(.6, .6, .6, .3));
    C(t(A), e.translate(46, -17, -38.5).scale(2.2, 15, .5), q(.6, .6, .6, .3));
    C(y(u(sb(r(t(A), e.translate(26.5, -1.6, 10).scale(17, 2.08, 3)), r(t(A), e.translate(26.5, -0.6, 10).scale(17, 2, .5)),), ...p(4, f => r(t(A), e.translate(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9),)), ...p(3, f => r(t(A), e.translate(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),),), e, q(.5, .5, .6, .2),);
    C(t(5), e.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, .2, 1.5), q(.25, .25, .35, 1),);
    E(f => {
      f.h = () => {
        var g = Math.sin(1.1 * a);
        return e.translate.call(e, 0, -2, Wa(O[10].g, O[11].g) * (0 > g ? -g : g) * -8.5 + 10);
      };
      p(2, g => C(l, e.translate(13 + 9 * g + (1 & g), 1.7)));
    });
    E(f => {
      f.h = () => {
        var g = Math.sin(2.1 * a);
        return e.translate.call(e, 0, -2, Wa(O[10].g, O[11].g) * (0 > g ? -g : g) * -8.5 + 10);
      };
      p(2, g => C(l, e.translate(13 + 9 * (g + 2) + (1 & g), 1.7)));
    });
    E(f => {
      f.h = () => {
        var g = Math.sin(1.5 * a);
        return e.translate.call(e, 0, -2, -8.5 * Sa((1 - O[10].g) * (1 - Wa(O[10].g, O[11].g)), Wa(O[10].g, O[11].g) * (0 > g ? -g : g),) + 10,);
      };
      p(3, g => C(l, e.translate(17 + 9 * g, 1.7)));
    });
    C(t(A), e.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3), q(.6, .6, .6, .3),);
    C(y(u(r(t(A), e.translate(30, -5.8, -28).scale(9, 1, 5), q(.8, .8, .8, .1),), r(t(9), e.translate(25, -5.8, -28).scale(3, 8, 3), q(.7, .7, .7, .2),),),),);
    fc(e.translate(30, -3, -28).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);
    C(t(9), e.translate(25, -5.8, -28).scale(2.5, .9, 2.5), q(.5, .5, .5, .3));
    dc(e.translate(25, -4.4, -28).rotate(0, 90));
  });
  B(e.translate(-100, .7, 115), () => {
    const l = (C(y(u(sb(r(t(6, 0, 0, .6), e.translate(0, 0, -9.5).scale(8, 1, 11), q(.7, .7, .7, .2),), r(t(A), e.translate(-1.5, 0, -21.5).scale(10.5, 1, 2), q(.7, .7, .7, .2),), r(t(A), e.translate(8.8, 0, -8).scale(3, 1, 3.3), q(.7, .7, .7, .2),),), r(t(5), e.translate(0, 0, -2).scale(4, 3, 4), q(.7, .7, .7, .2)),),),), p(4, f => E(g => {
      g.h = () => {
        g.v = O[1].j && O[2].j;
        const h = Wa(O[8].i, O[12].i);
        return e.translate(2 < f ? 2 * (1 - h) + h : 0, h * Math.sin(1.3 * a + 1.7 * f) * (3 + f / 3), (1 & f ? -1 : 1) * (1 - O[8].i) * (1 - O[12].i) * -7 + (.05 > h ? .05 : h) * Math.cos(1.3 * a + 7 * f) * (4 - 2 * (1 - f / 3)),);
      };
      C(t(6), e.translate(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.3, -21.5).scale(2.6, 1, 2.5), q(.5 - f / 8, f / 12 + .5, .7, .3),);
    }, ++b)), B(e.translate(-39.7, -2.5, -21.5), () => {
      E(f => {
        f.h = () => {
          f.v = O[1].j && O[2].j;
          const g = Wa(O[8].i, O[12].i);
          return e.translate(2.5 * (1 - g), -3 * (1 - O[8].g) + g * Math.sin(.8 * a) * -1,).rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
        };
        C(y(u(r(t(10), e.scale(6, 2, 6), q(.1, .6, .5, .3)), r(t(10), e.scale(3.3, 6, 3.3), q(.1, .6, .5, .5)),),),);
        B(e.translate(-7.5).rotate(0, 90), () => {
          C(t(15), e.scale(3, 2.3, 3), q(.4, .4, .4, .3));
          C(t(10), e.scale(2, 2.5, 2), q(.3, .8, .7, .3));
          C(t(5), e.scale(1, 3), q(.5, .5, .5, .5));
          dc(e.translate(0, 3.4).rotate(0, 180));
        });
        fc(e.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
        [-1, 1].map(g => C(gc, e.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), q(1, 1, .8, .2),));
      }, ++b);
    }), [-1, 1].map(f => {
      C(t(15, 1), e.translate(-7.5 * f, 3, -19).scale(.8, 4, .8), q(.6, .24, .2, .5));
      [7.2, 1.5].map(g => C(t(15, 1), e.translate(-7.5 * f, g, -19).scale(1.1, .5, 1.1), q(.5, .24, .2, .4),));
      C(gc, e.translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90), q(1, 1, .8),);
      C(y(u(r(t(A), e.translate(-4 * f, 3.5, -0.5).scale(4, 4, .7), q(.5, .5, .5, .4),), r(t(A), e.scale(3, 3, 10), q(.6, .24, .2, .5)), r(t(30, 1), e.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), q(.6, .24, .2, .5),), r(t(5), e.translate(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), q(.6, .24, .2, .5),), r(t(5), e.translate(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), q(.6, .24, .2, .5),),),), e.translate(f, 0, -18),);
    }), E(f => (f.h = () => e.translate(0, -0.1 - 6 * O[12].g, -18.5).scale(.88, 1.2), n),), [...r(t(28, 1), e.scale(8, 1, 8), q(.45, .45, .45, .2)), ...r(t(5), e.translate(0, 1).scale(1, .2), q(.3, .3, .3, .2)),]);
    B(e.translate(20, .3, -9), () => {
      E(f => {
        f.h = () => e.rotate(0, 40 + Ba);
        C(y(u(r(t(28, 1), e.scale(8, 1, 8), q(.45, .45, .45, .2)), r(t(A), e.translate(0, 0, -5.5).scale(1.5, 3, 2.5), q(.45, .45, .45, .2),),),),);
        C(t(8), e.translate(0, 2).scale(3, 1.5, 3), q(.7, .7, .7, .1));
        C(t(5), e.translate(0, 2).scale(1, 2), q(.3, .3, .3, .2));
        fc(e.translate(0, 3), ...hb(10).map(({x:g, z:h}) => [5.6 * g, 5.6 * h, 2.5]),);
      }, ++b);
    });
    B(e.translate(36, .3, -9), () => {
      C(t(A), e.translate(8).scale(.7, .8, 2.5), q(.7, .7, .7, .2));
      E(f => {
        f.h = () => e.rotate(0, Da);
        C(y(u(r(t(28, 1), e.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3),), r(t(A), e.scale(9, 5, 2), q(.3, 0, 0, .3)),),),);
        C(l);
        [-1, 1].map(g => C(gc, e.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), q(1, 1, .8),));
      }, ++b);
    });
    B(e.translate(52, .3, -9), () => {
      C(t(A), e.translate(0, 0, -8).scale(2.5, .8, .7), q(.7, .7, .7, .2));
      E(f => {
        f.h = () => e.rotate(0, 180 - Da);
        C(y(u(r(t(30, 1), e.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3),), r(t(A), e.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)), r(t(A), e.translate(0, 0, 7).scale(2, 5, 9), q(.3, 0, 0, .3),),),),);
        C(l);
      }, ++b);
    });
    B(e.translate(52, .3, -25), () => {
      E(f => {
        f.h = () => e.rotate(0, 270 + Da);
        C(y(u(r(t(30, 1), e.translate(0, 2).scale(8, 1, 8), q(.35, 0, 0, .3),), r(t(A), e.translate(7).scale(9, 5, 2), q(.3, 0, 0, .3)), r(t(A), e.translate(0, 0, -7).scale(2, 5, 9), q(.3, 0, 0, .3),),),),);
        C(l);
      }, ++b);
    });
    C(t(A), e.translate(61, -0.3, -25).scale(2, 1, 2), q(.7, .7, .7, .3));
    C(t(A), e.translate(68, -0.3, -25).scale(5, 1, 3), q(.7, .7, .7, .3));
    dc(e.translate(66, 2, -19).rotate(-12, 0));
    C(t(5), e.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0), q(.2, .5, .5, .6));
    [q(.1, .55, .45, .2), q(.2, .5, .5, .3), q(.3, .45, .55, .4)].map((f, g) => E(h => {
      h.h = () => e.translate(0, (1 - O[13].i) * (1 - O[14].i) * 3 + Wa(O[13].i, O[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,);
      C(t(A), e.translate(76.5, g / 2 - 2.1, 7.5 * (1 - g / 30) * g - 25).scale(3.3, 3 - g / 2, 3.45 - g / 5), f,);
    }, ++b));
    B(e.translate(100, .2, -20), () => {
      C(t(A), e.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), q(.6, .6, .6, .2));
      C(y(u(r(t(6, 0, 0, .3), e.translate(0, -0.92).scale(14, 2, 14), q(.8, .8, .8, .2),), r(t(5), e.scale3d(6), q(.3, .3, .3, .5)),),),);
      [8, -6.1].map((f, g) => p(3, h => C(k, e.translate(6 * h - 6, f - (1 & h), 16 - .2 * (1 & h) - g), 1 & h ? q(.5, .5, .5, .3) : q(.35, .35, .35, .5),),));
      [-1, 1].map(f => C(gc, e.translate(-8 * f, 1, -10).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90), q(1, 1, .8),));
      C(t(5), e.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35), q(.5, .3, .3, .4),);
      dc(e.translate(0, 1.7, -13).rotate(0, 180));
      fc(e.translate(0, 3), ...hb(9).map(({x:f, z:g}) => [9 * f, 9 * g, 4]),);
      C(y(u(sb(r(t(A), e.translate(0, 16, 15.5).scale(12, 1, 3), q(.5, .3, .3, .4),), r(t(A), e.translate(0, 16, 16).scale(3, 1, 3.8), q(.5, .3, .3, .4),),), r(t(5), e.translate(0, 16, 8.5).scale(5.5, 5, 5.5), q(.5, .3, .3, .4),),),),);
      E(f => {
        f.h = () => {
          const g = Math.sin(a);
          return e.translate(-2 * g).rotate(0, 0, 25 * g);
        };
        C(t(3), e.translate(0, -3, 23.8).scale(.8, .8, 18).rotate(90, 0, 60), q(.5, .3, .3, .4),);
        [22, 30].map(g => {
          C(t(6), e.translate(0, 16, g).scale(3, 1, 2.3).rotate(0, 90), q(.7, .7, .7, .4),);
          C(t(A), e.translate(0, 6.2, g).scale(.5, 11, .5), q(.5, .3, .3, .4));
        });
      }, ++b);
      C(t(6), e.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90), q(.5, .6, .7, .3),);
      C(t(A), e.translate(0, 16, 34).scale(1.5, 1, 2), q(.5, .6, .7, .3));
      C(t(7), e.translate(0, 16.2, 38).scale(5, 1, 5), q(.4, .5, .6, .4));
      E(f => {
        f.h = () => {
          let g = Wa((O[14].g + O[14].i) / 2, O[13].i);
          return g = Wa(g, (O[15].g + O[15].i) / 2), e.translate(0, 16 * g, 8.5 * Va(2 * g - 1));
        };
        C(t(5), e.scale(5, 1.1, 5), q(.5, .3, .3, .4));
        C(t(5), e.scale(5.5, .9, 5.5), q(.25, .25, .25, .4));
        dc(e.translate(0, 1.5, -1).rotate(0, 180));
      }, ++b);
      fc(e.translate(0, 19, 39), [0, 0, 3.5]);
    });
  });
}, ic = (b, c, k, m) => {
  let n = 0, l = 0, f = 0, g = 1 / 0, h = -1 / 0, w = 1 / 0, z = -1 / 0, I = 1 / 0, P = -1 / 0;
  const Y = 1.1 * (k - c), Z = (new DOMMatrix($a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, c, k))).multiplySelf(b).invertSelf();
  b = p(8, D => {
    D = Z.transformPoint({x:4 & D ? 1 : -1, y:2 & D ? 1 : -1, z:1 & D ? 1 : -1,});
    return n -= D.x = (Y * D.x | 0) / (Y * D.w), l -= D.y = (Y * D.y | 0) / (Y * D.w), f -= D.z = (Y * D.z | 0) / (Y * D.w), D;
  });
  c = e.rotate(298, 139).translateSelf(n / 8, l / 8, f / 8);
  return gb(b, c).map(({x:D, y:ba, z:L}) => {
    g = g < D ? g : D;
    h = D < h ? h : D;
    w = w < ba ? w : ba;
    z = ba < z ? z : ba;
    I = I < L ? I : L;
    P = L < P ? P : L;
  }), I *= 0 > I ? m : 1 / m, P *= 0 < P ? m : 1 / m, e.scale(2 / (h - g), 2 / (z - w), 2 / (I - P)).translateSelf((h + g) / -2, (z + w) / -2, (I + P) / 2,).multiplySelf(c).toFloat32Array();
}, jc = (b, c = 35633) => {
  c = X.c6x(c);
  return X.s3c(c, b), X.c6a(c), c;
}, kc = (b, c) => {
  const k = {}, m = X.c1h();
  return X.abz(m, b), X.abz(m, jc(c, 35632)), X.l8l(m), n => n ? k[n] || (k[n] = X.gan(m, n)) : X.u7y(m);
}, mc = (b, c, k, m) => {
  const n = f => X.d97(4, f.K, 5123, 2 * f.N), l = f => {
    const g = f.u, h = f.H, w = f.G, z = f.v, I = f.I;
    if (!(!c && 2 === f.u || k && I) && z) {
      for (const P of w) {
        l(P);
      }
      h && (m && X.ube(m, g / 255), X.uae(b, !1, f.s.toFloat32Array()), n(h));
    }
  };
  Ma ? (X.uae(b, !1, e.rotate(0, 40 * Math.sin(pa) - 70).toFloat32Array()), n(lc.H), Qa.map(f => f.H).map(n)) : l(Ib);
}, nc = new Int32Array(10725888), oc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hC"></canvas>\n    <h3>Souls:<b id="h3"></b> / XIII</h3>\n    <h4 id="h4">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 SalvatorePreviti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id="b5">☰</b>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> html,\nbody {\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n* {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\nh3,\n.m h4 {\n  display: none;\n}\n',
), "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), gc = (() => {
  const b = p(11, k => e.translate(Math.sin(k / 10 * Math.PI), k / 10).rotate(+k).scale(1.0001 - k / 10, 0, 1 - k / 10),), c = hb(18);
  return p(10, k => ib(gb(c, b[k]).reverse(), gb(c, b[k + 1]), 1),).flat();
})(), Ib = {G:[], J:e, s:e, u:1, v:1, I:0,};
let Jb = Ib;
const ub = [e], Fb = new Int32Array(Bb.buffer, 0, 4), Eb = new Float32Array(Bb.buffer), Vb = new AudioContext(), Ub = Vb.createBufferSource(), cc = (C([A.slice(1)], e.translate(-2).scale3d(3).rotate(90, 0)), Hb(), [q(1, .5, .2), q(.7, 1, .2)].map(b => (C(t(6, 1), e.scale(.13, 1.4, .13), q(.3, .3, .5)), C(t(8), e.translate(0, 1).scale(.21, .3, .21), b), C(t(3), e.translate(0, -1).rotate(90, 90).scale(.3, .4, .3), q(.2, .2, .2)), Hb()),)), lc = E(() => {
  Qa = [-1, 1].map(c => E(() => {
    C(t(10, 1), e.translate(.3 * c, -0.8).scale(.2, .7, .24), q(1, .3, .4));
  }));
  [0, 180].map(c => C(gc, e.rotate(0, c).translate(.2, 1.32).rotate(0, 0, -30).scale(.2, .6, .2), q(1, 1, .8)));
  C(jb(20), e.translate(0, 1).scale(.5, .5, .5), q(1, .3, .4));
  const b = r(y(u(t(15, 1), r(t(A), e.translate(0, 0, 1).scale(2, 2, .5))),), e.rotate(-90, 0).scale(.1, .05, .1), q(.3, .3, .3),);
  [-1, 1].map(c => C(b, e.translate(.2 * c, 1.2, .4).rotate(0, 20 * c, 20 * c)));
  C(t(A), e.translate(0, .9, .45).scale(.15, .02, .06), q(.3, .3, .3));
  C(jb(20), e.scale(.7, .8, .55), q(1, .3, .4));
}, 2), ec = (C(jb(40, 30, (b, c, k) => {
  const m = c / 30, n = .05 * b * Math.PI, l = m ** .6 * Math.PI / 2;
  b = m * m * Math.sin(b * Math.PI * .35) / 4;
  return 29 === c ? {x:k.D = 0, y:-0.5, z:0,} : {x:Math.cos(n) * Math.sin(l), y:Math.cos(m * Math.PI) - m - b, z:Math.sin(n) * Math.sin(l) + Math.sin(b * Math.PI * 2) / 4,};
}), e.scale3d(.7), q(1, 1, 1),), [-1, 1].map(b => C(jb(15), e.translate(.16 * b, .4, -0.36).scale3d(.09))), Hb()), X = hC.getContext("webgl2");
for (const b in X) {
  X[b[0] + [...b].reduce((c, k, m) => (c * m + k.charCodeAt(0)) % 434, 0).toString(36)] = X[b];
}
setTimeout(() => {
  let b = 0, c = 6;
  const k = () => {
    if (h4.innerHTML += ".", !--c) {
      let f = 0, g = 0, h = 1, w = 0, z = 0, I = 0, P = !1, Y, Z, D, ba, L, V, S, ha, ea, ia;
      const Q = {x:0, y:0, z:0,}, ra = new Int32Array(256), wa = () => {
        const {L:v, M:x} = O[Aa], {x:K, y:F, z:M} = v.transformPoint({x:0, y:8, z:-3,});
        U.x = Q.x = K;
        U.y = Q.y = S = F;
        U.z = Q.z = M;
        Z = V = L = D = ba = 0;
        h = 1;
        f = g = x.u || 1;
      }, Ua = () => {
        let v = 0, x = 0, K = (NO_INLINE(() => {
          let J = 0, T = 0, ja = 0, xa = 0, ya = 0;
          ra.fill(0);
          for (let ca = 0; 31 > ca; ++ca) {
            let Fa = 0;
            const W = 512 * ca;
            for (let Na = 0; 128 > Na; Na++) {
              let ta = W + 4 * Na;
              var ua = (Ga[ta] + Ga[1 + ta]) / 255;
              if (ta = Ga[2 + ta], 14 < Na && 114 > Na && (Fa += ua), ta && ua) {
                ua = ra[ta] + 1, ra[ta] = ua, J > ua || (J = ua, T = ta);
              }
            }
            3 > Fa && 5 < ca && (xa += ca / 32);
            3 < Fa && (7 < ca && (ja += ca / 15), ya = 1);
          }
          T && (ya = 1);
          h ? T && (h = 0, g = T) : g = T || f;
          f = T;
          Z = ya;
          D = H(D, ya ? 6.5 : 8, 4);
          Q.y += ja / 41 - (ya ? 1 : D) * xa / 41 * D * d;
        })(), NO_INLINE(() => {
          for (let ya = 32; 128 > ya; ya += 2) {
            var J = 0;
            let ua = 0;
            var T = 0;
            let ca = 0;
            const Fa = 512 * ya;
            for (let W = ya >> 1 & 1; 128 > W; W += 2) {
              var ja = Fa + 4 * W;
              const Na = Fa + 4 * (127 - W), ta = Ga[ja] / 255, Cb = Ga[1 + Na] / 255;
              var xa = W / 63.5 - 1;
              xa = 1 - (0 > xa ? -xa : xa);
              if (10 < W && 118 > W && (J = Sa(J, Sa(ta * xa, ta * Ga[Na] / 127.5)), ua = Sa(ua, Sa(Cb * xa, Cb * Ga[1 + ja] / 255))), 54 > W || 74 < W) {
                ja = (1 - xa) * (Cb < ta ? ta : Cb) / 3, .001 < ja && (64 > W && ja > T ? T = ja : 64 < W && ja > ca && (ca = ja));
              }
            }
            T = ca - T;
            J = ua - J;
            (0 > T ? -T : T) > (0 > v ? -v : v) && (v = T);
            (0 > J ? -J : J) > (0 > x ? -x : x) && (x = J);
          }
        })(), (Tb[0] ? 1 : 0) + (Tb[2] ? -1 : 0) + na), F = (Tb[1] ? 1 : 0) + (Tb[3] ? -1 : 0) + oa;
        var M = navigator.getGamepads()[0];
        if (M) {
          var R = T => J[T]?.pressed || 0 < J[T]?.value;
          const J = M.buttons;
          M = M.axes;
          var aa = R(1) || R(3) || R(2) || R(0);
          aa !== P && (P = aa) && (Tb[5] = 1);
          K += (.2 < Ta(-M[0]) ? -M[0] : 0) + (R(14) ? 1 : 0) + (R(15) ? -1 : 0);
          F += (.2 < Ta(-M[1]) ? -M[1] : 0) + (R(12) ? 1 : 0) + (R(13) ? -1 : 0);
          Oa && (.3 < Ta(M[2]) && (Mb += 80 * M[2] * d), .3 < Ta(M[3]) && (Lb += 80 * M[3] * d));
        }
        .05 > (0 > F ? -F : F) && (F = 0);
        .05 > (0 > K ? -K : K) && (K = 0);
        R = Math.atan2(F, K);
        M = Va(Math.hypot(F, K));
        var da = (K = M * Math.cos(R), F = M * Math.sin(R), Va(1 - 5 * Sa(0 > v ? -v : v, 0 > x ? -x : x)));
        aa = (g || (v += L * da * d, x += V * da * d), L = H(L, 0, Z ? 8 : 4), V = H(V, 0, Z ? 8 : 4), ba = H(ba, Z ? (K || F ? Z ? 7 : 4 : 0) * da : 0, Z ? .1 < da ? 10 : K || F ? 5 : 7 : 1,), Oa ? Mb * Ra : Math.PI);
        da = Math.sin(aa) * ba * d;
        var La = Math.cos(aa) * ba * d;
        aa = (v -= K * La - F * da, x -= K * da + F * La, tb[g]?.s || e);
        da = aa.inverse();
        if (da.m41 = 0, da.m42 = 0, da.m43 = 0, {x:v, z:x} = da.transformPoint({x:v, z:x, w:0,}), Q.x += v, Q.z += x, g !== Y) {
          Y = g;
          const {x:J, y:T, z:ja} = aa.inverse().transformPoint(U);
          Q.x = J;
          Q.y = T;
          Q.z = ja;
        }
        da = U.x;
        La = U.z;
        const {x:Db, y:eb, z:N} = aa.transformPoint(Q);
        aa = (U.x = Db, U.y = eb, U.z = N, Ta(S - eb));
        S = H(S, eb + .1, 50 * aa + 5);
        g && (L = (U.x - da) / d, V = (U.z - La) / d);
        (K || F) && (w = 90 - R / Ra);
        z = Ya(z, w, 8 * d);
        I += (M - I) * Va(10 * d);
      }, nb = v => {
        requestAnimationFrame(nb);
        var x = (v - (Pa || v)) / 1e3;
        d = Ma ? Tb[5] = 0 : .066 < x ? .066 : x;
        a += d;
        pa += x;
        Pa = v;
        if (0 < d && (X.b6o(36160, za), X.r9r(0, 0, 128, 128, 6408, 5121, Ga), X.iay(36160, [36064]), NO_INLINE(Ua)(), Kb(Ib)), 0 < d) {
          if (ha = Za(ha, U.x, .5, d,), ea = Za(ea, U.y, 2, d,), ia = Za(ia, U.z, .5, d,), Oa) {
            v = 200 * h, G.x = H(G.x, U.x, 18 + v), G.y = H(G.y, U.y + 1.5, 15 + v), G.z = H(G.z, U.z, 18 + v), Lb = Sa(87 > Lb ? Lb : 87, -87);
          } else {
            if (G.x = Za(G.x, ha, 1, 2 * d,), G.y = Za(G.y, ea + 13 + 15 * h, 4, 2 * d,), G.z = Za(G.z, ia + -18, 1, 2 * d,), v = G.z - ia, 1 < (0 > v ? -v : v)) {
              x = G.x - ha;
              const K = G.y - ea;
              Mb = 270 + Math.atan2(v, x) / Ra;
              Lb = 90 - Math.atan2(Math.hypot(v, x), K) / Ra;
            }
          }
          if (Mb = Xa(Mb), 0 < d) {
            v = Wa(O[12].g, O[13].g), a > sa && (h4.innerHTML = "", sa = 0), x = H(Ea, 0, 1), Ea = x + (Xa(Ea + 60 * d) - x) * Va(O[5].g - O[6].i), x = H(Ba, 0, 5), Ba = x + (Xa(Ba + 56 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v), x = H(Da, 0, 4), Da = x + (Xa(Da + 48 * d) - x) * (0 > v ? 0 : 1 < v ? 1 : v), v = 2 * O[9].i - 1, Ja = H(Ja, O[9].i, .2 + .3 * (0 > v ? -v : v),), Ia = H(Ia, Ha ? Ia + (-9 - Ia) * Va(1.5 * d) : Va(a / 3), 1,), 1 === O[0].j && .8 < O[0].g && (13 > qa ? (O[0].j = 0, Ha || (h4.innerHTML = 
            "Not leaving now, there are souls to catch!", sa = a + 3)) : Ha || (Ha || (h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing", sa = a + 1 / 0), Ha = 1)), Tb[5] = 0, (-25 > U.x || 109 > U.z ? -25 : -9) > U.y && wa();
          }
        }
        v = Ma ? e.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Va(hC.clientWidth / 1e3)) : e.rotate(-Lb, -Mb, -0).invertSelf().translateSelf(-G.x, -G.y, -G.z,);
        0 < d && (va(), X.b6o(36160, za), X.v5y(0, 0, 128, 128), X.cbf(!0, !1, !0, !1), X.c4s(16640), X.uae(va("b"), !1, e.rotate(0, 180).invertSelf().translateSelf(-U.x, -U.y, .3 - U.z,).toFloat32Array(),), mc(va("c"), 0, 1, va("i")), X.cbf(!1, !0, !1, !1), X.c4s(16640), X.cbf(!1, !0, !0, !1), X.uae(va("b"), !1, e.translate(-U.x, -U.y, -U.z - .3).toFloat32Array(),), mc(va("c"), 0, 1, va("i")), X.cbf(!0, !0, !0, !0), 1 === g && (O[9].j = -15 > U.x && 0 > U.z ? 1 : 0));
        ob();
        X.v5y(0, 0, 2048, 2048);
        Ca[0](ic(v, .3, 55, 10));
        Ca[1](ic(v, 55, 177, 11));
        X.b6o(36160, null);
        ka();
        X.v5y(0, 0, X.drawingBufferWidth, X.drawingBufferHeight);
        X.c4s(16640);
        X.uae(ka("a"), !1, $a(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, .3, 177));
        X.uae(ka("b"), !1, v.toFloat32Array());
        X.ubu(ka("j"), G.x, G.y, G.z);
        Ca[0]();
        Ca[1]();
        mc(ka("c"), !Oa);
        la();
        X.ubu(la("c"), X.drawingBufferWidth, X.drawingBufferHeight, pa);
        Ma ? X.ubu(la("j"), 0, 0, 0) : X.ubu(la("j"), G.x, G.y, G.z);
        X.uae(la("b"), !1, v.inverse().toFloat32Array());
        X.d97(4, 3, 5123, 0);
      }, Ga = new Uint8Array(65536), Nb = n;
      var l = jc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 n,l,m,k;uniform mat4 a,b,c;void main(){k=d,m=f,l=c*f,gl_Position=a*b*l,n=c*vec4(e,0);}",);
      const ob = kc(jc("#version 300 es\nin vec4 f;uniform mat4 b,c;void main(){gl_Position=b*c*f;}"), "#version 300 es\nvoid main(){}",), la = kc(jc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 c,j;uniform mat4 b;uniform highp sampler2D d;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/c.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(c.x/c.y),-t.y,sqrt(3.),0.))).xyz;float i=(-32.-j.y)/e.y,o=1.-clamp(abs(i/1e4),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(c.z/30.),i=sin(c.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(d,e.xy).z,texture(d,e.yz*2.).z),t.zx)*t.y);}else e=j+e*i,O.x=(o*=.9-texture(d,e.xz/150.+vec2(sin(e.z/35.+c.z),cos(e.x/25.+c.z))/80.).y),O.y=o*o*o;}}",
      ), va = kc(l, "#version 300 es\nprecision highp float;in vec4 n,l;uniform mat4 b;uniform float i;out vec4 O;void main(){vec4 o=b*l;float a=i>0.?1.-min(abs(o.z/o.w),1.):0.;O=vec4(vec2(a*(gl_FragCoord.y>31.?1.:abs(n.y))),a>0.?i:0.,1);}",), ka = kc(l, "#version 300 es\nprecision highp float;in vec4 n,l,m,k;uniform vec3 j;uniform mat4 b,i,w;uniform highp sampler2DShadow g,h;uniform highp sampler2D d;out vec4 O;void main(){vec3 e=normalize(n.xyz),x=k.w*(texture(d,m.yz*.035)*e.x+texture(d,m.xz*.035)*e.y+texture(d,m.xy*.035)*e.z).xyz;e=normalize(e+x*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),o=1.,c=abs((b*l).z);vec4 r=(c<55.?i:w)*l;if(r=r/r.w*.5+.5,r.z<1.){o=0.;for(float e=-1.;e<=1.;++e)for(float t=-1.;t<=1.;++t){vec3 a=vec3(r.xy+vec2(e,t)/2048.,r.z-.00017439);o+=c<55.?texture(g,a):texture(h,a);}o/=9.;}vec3 t=k.xyz*(1.-x.x);O=vec4(vec3(.09,.05,.1)*t+t*(max(0.,a)*.5+t*a*a*vec3(.5,.45,.3))*(o*.7+.3)+t*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-l.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(l.xyz-j),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*o,1);}",
      ), za = (la(), X.ubh(la("d"), 3), va(), X.uae(va("a"), !1, $a(1.4, .59, 1e-4, 1)), ka(), X.ubh(ka("d"), 3), X.c5w());
      l = X.c3z();
      const fb = X.c25(), Ca = p(2, v => {
        let x;
        const K = X.c25(), F = X.c5w(), M = ka(v ? "w" : "i");
        return ka(), X.ubh(ka(v ? "h" : "g"), v), X.b6o(36160, F), X.d45([0]), X.r9l(0), X.a4v(33984 + v), X.b9j(3553, K), X.fas(36160, 36096, 3553, K, 0), X.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), X.t2z(3553, 10241, 9729), X.t2z(3553, 10240, 9729), X.t2z(3553, 34893, 515), X.t2z(3553, 34892, 34894), X.t2z(3553, 10243, 33071), X.t2z(3553, 10242, 33071), R => {
          R ? (x = R, X.b6o(36160, F), X.iay(36160, [36096]), X.c4s(256), X.uae(ob("b"), !1, x), mc(ob("c"), !Oa, 1)) : X.uae(M, !1, x);
        };
      });
      X.b11(34963, X.c1b());
      X.b2v(34963, new Uint16Array(vb), 35044);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Float32Array(wb), 35044);
      X.v7s(0, 3, 5126, !1, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Int16Array(xb), 35044);
      X.v7s(1, 3, 5122, !0, 0, 0);
      X.b11(34962, X.c1b());
      X.b2v(34962, new Uint32Array(yb), 35044);
      X.v7s(2, 4, 5121, !0, 0, 0);
      X.e3x(0);
      X.e3x(1);
      X.e3x(2);
      X.e8z(2929);
      X.e8z(2884);
      X.c70(1);
      X.c7a(1029);
      X.d4n(515);
      X.c5t(0, 0, 0, 1);
      X.b6o(36160, za);
      X.bb1(36161, l);
      X.r4v(36161, 33189, 128, 128);
      X.f8w(36160, 36096, 36161, l);
      X.a4v(33987);
      X.b9j(3553, fb);
      X.fas(36160, 36064, 3553, fb, 0);
      X.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
      X.b9j(3553, X.c25());
      X.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Nb);
      X.gbn(3553);
      X.t2z(3553, 10241, 9987);
      X.t2z(3553, 10240, 9729);
      lc.h = () => e.translate(U.x, S, U.z).rotateSelf(0, z,);
      Qa.map((v, x) => {
        v.h = () => e.translate(0, I * Va(.45 * Math.sin(9.1 * a + Math.PI * x - Math.PI / 2)),).rotateSelf(I * Math.sin(9.1 * a + Math.PI * x) * .25 / Ra, 0);
      });
      try {
        const [v, x, K, F, M] = JSON.parse(localStorage.DanteSP22,);
        O.map((R, aa) => R.g = R.i = R.j = aa ? 0 | v[aa] : 0);
        $b.map((R, aa) => R.j = 0 | x[aa]);
        Aa = K;
        a = F;
        Ja = M;
      } catch (v) {
      }
      Ia = 0 > Aa ? 0 : 1 < Aa ? 1 : Aa;
      h4.innerHTML = "";
      sa = 0;
      ac();
      Kb(Ib);
      NO_INLINE(Yb)();
      wa();
      G.x = ha = U.x;
      G.y = (ea = U.y) + 13;
      G.z = (ia = U.z) + -18;
      requestAnimationFrame(nb);
    }
  }, m = () => {
    if (5 > b) {
      var l = 0, f = b++;
      let [z, I, P, Y, Z, D, ba, L, V, S, ha, ea, ia, Q, ra, wa, Ua, nb, Ga, Nb, ob] = Ob[f];
      S = S * S * 4;
      for (const la of [5513, 4562, 3891]) {
        let va = 0, ka = 0, za, fb, Ca, v, x;
        const K = [], F = new Int32Array(768 * la), M = 2 ** (ea - 9) / la, R = Math.PI * 2 ** (Ua - 8) / la, aa = Ga * la & -2;
        for (let da = 0; 11 >= da; ++da) {
          for (let La = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * f + da]; 32 > La; ++La) {
            const eb = (32 * da + La) * la;
            for (var g = 0; 4 > g; ++g) {
              if (za = 0, Db && (za = ob[Db - 1].charCodeAt(La + 32 * g) - 40, za += 0 < za ? 106 : 0), za) {
                var h;
                if (!(h = K[za])) {
                  h = za;
                  let N = void 0, J = void 0;
                  var w = za;
                  let T = 0, ja = 0;
                  const xa = 2 > f ? Rb : Pb, ya = 2 > f ? 1 > f ? Qb : Sb : Pb, ua = new Int32Array(L + V + S);
                  for (let ca = 0, Fa = 0; L + V + S > ca; ++ca, ++Fa) {
                    let W = 1;
                    L > ca ? W = ca / L : L + V > ca || (W = (1 - (W = (ca - L - V) / S)) * 3 ** (-ha / 16 * W));
                    0 > Fa || (Fa -= 4 * la, J = 0.003960 * 2 ** ((w + I - 256) / 12), N = 0.003960 * 2 ** ((w + Z - 256) / 12) * (1 + (f ? 0 : 8e-4 * 9)));
                    ua[ca] = 80 * (xa(T += J * W ** (P / 32)) * z + ya(ja += N * W ** (D / 32)) * Y + (ba ? (2 * Math.random() - 1) * ba : 0)) * W | 0;
                  }
                  h = K[h] = ua;
                }
                for (let N = 0, J = 2 * eb; h.length > N; ++N, J += 2) {
                  F[J] += h[N];
                }
              }
            }
            for (let N, J = 0; la > J; ++J) {
              g = 0, h = 2 * (eb + J), ((N = F[h]) || x) && (Ca = 0.003080 * ia, 1 != f && 4 != f || (Ca *= Math.sin(M * h * Math.PI * 2) * Nb / 512 + .5), Ca = 1.5 * Math.sin(Ca), va += Ca * ka, v = (1 - Q / 255) * (N - ka) - va, ka += Ca * v, N = 4 == f ? ka : 3 == f ? v : va, f || (N = 1 > (N *= 22e-5) ? -1 < N ? Math.sin(N / 4 * Math.PI * 2) : -1 : 1, N /= 22e-5), N *= ra / 32, x = 1e-5 < N * N, fb = Math.sin(R * h) * wa / 512 + .5, g = N * (1 - fb), N *= fb), aa > h || (g += F[h - aa + 1] * 
              nb / 255, N += F[h - aa] * nb / 255), nc[l + h] += F[h] = g, ++h, nc[l + h] += F[h] = N;
            }
          }
        }
        l += F.length;
      }
      setTimeout(m);
    } else {
      l = Vb.createBuffer(2, 5362944, 44100);
      for (f = 0; 2 > f; f++) {
        for (let z = f, I = l.getChannelData(f); 10725888 > z; z += 2) {
          I[z >> 1] = nc[z] / 65536;
        }
      }
      Ub.buffer = l;
      Ub.loop = !0;
    }
    k();
  }, n = new Image();
  n.onload = n.onerror = () => {
    k();
  };
  n.src = oc;
  setTimeout(m, 50);
  E(NO_INLINE(hc));
});

