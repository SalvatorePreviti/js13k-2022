let aa, ba, ca, ea, fa, ha, ka, la, ma, na, pa, qa, ra, c, ta, ua, va, wa, xa, d = 0, ya = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 14, Ja = 0.1;
const Ka = Math.PI / 180;
var La = 0, Ma = 180, Na = 0, Oa = 0, Pa = 0;
const Ta = [], e = [], Ua = [], Va = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Wa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Xa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Ya = NO_INLINE(a => 0 > a ? -a : a), Za = NO_INLINE((a, b) => a < b ? a : b), $a = NO_INLINE((a, b) => b < a ? a : b), ab = (a, b) => Ya(a) > b ? a : 0, bb = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, cb = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka, db = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * bb(g) || 0, eb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 
0, fb = (a, b) => (a = bb(a), eb(a, 1 - a, b)), gb = (a, b, g = 0) => (a * a + b * b + g * g) ** 0.5, ib = (a, b = hb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), u = (a = h, b = l,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = 
a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), nb = (a = 0, b = 0, g = 0, k = 1) => {
  jb = l.m11 * a + l.m21 * b + l.m31 * g + l.m41 * k;
  kb = l.m12 * a + l.m22 * b + l.m32 * g + l.m42 * k;
  lb = l.m13 * a + l.m23 * b + l.m33 * g + l.m43 * k;
  mb = l.m14 * a + l.m24 * b + l.m34 * g + l.m44 * k;
};
var jb, kb, lb, mb;
const y = NO_INLINE((a, b, g) => h.translate(a, b, g)), ob = (a, b) => Array.from(Array(a), (g, k) => b(k)), pb = (a, b, g) => (a.A = g, a.s = b, a), qb = (a, b, g = a.s,) => (u(b), pb(a.map(({x:k, y:p, z:m}) => (nb(k, p, m), {x:jb, y:kb, z:lb,})), g, a.A,)), D = (a, b, g) => a.map(k => qb(k, b, g)), rb = (a, b = 0) => ob(a, g => {
  const k = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Ya(k) ? k : 0 > k ? k - b : k + b,};
}), sb = (a, b, g) => a.map((k, p, {length:m}) => pb([k, b[m - p - 1], b[m - (p + 1) % m - 1], a[(p + 1) % m],], a.s, g,)), J = (a, b, g = 0, k,) => (a = a ? rb(a, k) : Va, k = qb(a, y(0, 1).scale3d(0 < g ? g : 1)), a = qb(a, y(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...sb(a, k, b), k, a,]), vb = (a, b = a, g = (k, p) => (p *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(p), y:Math.cos(p), z:Math.sin(k) * Math.sin(p),})) => {
  const k = [];
  for (let p = 0; a > p; p++) {
    for (let m = 0; b > m; m++) {
      const z = pb([], 0, 1);
      k.push(z);
      z.push(g(p, m, z));
      m && z.push(g((p + 1) % a, m, z));
      b - 1 > m && z.push(g((p + 1) % a, m + 1 % b, z));
      z.push(g(p, m + 1 % b, z));
    }
  }
  return k;
}, wb = NO_INLINE(a => 1 - Math.exp(-Ca * a)), N = NO_INLINE((a, b, g) => eb(a, b, wb(g))), xb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, yb = a => Math.sin(a * Math.PI * 2), zb = a => 0.5 > a % 1 ? 1 : -1, Ab = a => a % 1 * 2 - 1, Db = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Eb = a => {
  let b = 0;
  const g = () => {
    let m = 0;
    const z = V => {
      let T, da, Qa, ia = 0, ja = 0;
      const Z = [], sa = new Int32Array(768 * V), ac = 2 ** (v - 9) / V, bc = Math.PI * 2 ** (r - 8) / V, Bb = A * V & -2;
      for (let tb = 0; 11 >= tb; ++tb) {
        for (let ub = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb]; 32 > ub; ++ub) {
          const Nb = (32 * tb + ub) * V;
          for (var oa = 0; 4 > oa; ++oa) {
            if (T = 0, Mb && (T = B[Mb - 1].charCodeAt(ub + 32 * oa) - 40, T += 0 < T ? 106 : 0), T) {
              var za;
              if (!(za = Z[T])) {
                za = T;
                let W = void 0, Aa = void 0;
                var Ob = T;
                let cc = 0, dc = 0;
                const ec = 2 > b ? Ab : yb, fc = 2 > b ? 1 > b ? zb : Db : yb, Pb = new Int32Array(x + F + S);
                for (let Ra = 0, Cb = 0; x + F + S > Ra; ++Ra, ++Cb) {
                  let Sa = 1;
                  x > Ra ? Sa = Ra / x : x + F > Ra || (Sa = (1 - (Sa = (Ra - x - F) / S)) * 3 ** (-G / 16 * Sa));
                  0 > Cb || (Cb -= 4 * V, Aa = 0.00396 * 2 ** ((Ob + q - 256) / 12), W = 0.00396 * 2 ** ((Ob + M - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Pb[Ra] = 80 * (ec(cc += Aa * Sa ** (H / 32)) * f + fc(dc += W * Sa ** (n / 32)) * P + (C ? (2 * Math.random() - 1) * C : 0)) * Sa | 0;
                }
                za = Z[za] = Pb;
              }
              for (let W = 0, Aa = 2 * Nb; za.length > W; ++W, Aa += 2) {
                sa[Aa] += za[W];
              }
            }
          }
          for (let W, Aa = 0; V > Aa; ++Aa) {
            za = 0;
            oa = 2 * (Nb + Aa);
            var Ba = (((W = sa[oa]) || Qa) && (da = 0.00308 * E, 1 !== b && 4 !== b || (da *= Math.sin(ac * oa * Math.PI * 2) * I / 512 + 0.5), da = 1.5 * Math.sin(da), ia += da * ja, Ba = (1 - L / 255) * (W - ja) - ia, ja += da * Ba, W = 4 === b ? ja : 3 === b ? Ba : ia, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= Q / 32, Qa = 1e-5 < W * W, Ba = Math.sin(bc * oa) * t / 512 + 0.5, za = W * (1 - Ba), W *= Ba), oa < Bb || (za += sa[1 + oa - Bb] * 
            w / 255, W += sa[oa - Bb] * w / 255), m + oa >> 1);
            k[Ba] += (sa[oa] = za) / 65536;
            p[Ba] += (sa[++oa] = W) / 65536;
          }
        }
      }
      m += 768 * V;
    }, B = Wa[b], [f, q, H, P, M, n, C, x, F, K, G, v, E, L, Q, t, r, w, A, I] = Xa[b], S = 4 * K ** 2;
    z(5513);
    z(4562);
    z(3891);
    xb(5 > ++b ? g : a);
  }, k = (ca = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), p = ca.getChannelData(1);
  xb(g);
}, Fb = (a, b, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Gb = () => {
  let a, b, g, k, p, m, z, B, f, q, H, P, M, n, C, x, F = !0;
  const K = [], G = () => {
    b4.innerHTML = "Music: " + F;
    x && (ba || !F ? x.disconnect() : x.connect(C.destination));
  }, v = () => {
    const t = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ka = [Fb(0.3, 55, t, 1.732051), Fb(55, 181, t, 1.732051),];
    ha = Fb(0.3, 181, t, 1.732051);
    k = B = void 0;
    K.length = ea = n = P = M = Da = Ea = 0;
    document.hidden && E(!0);
  }, E = t => {
    if (ba !== t) {
      if (ba = t, v(), document.body.className = t ? "l m" : "l", t) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      G();
    }
  }, L = t => {
    try {
      C || (C = new AudioContext(), (x = C.createBufferSource()).buffer = ca, x.loop = !0, x.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    E(!1);
    fa = t;
  }, Q = (t, r) => t.buttons[r]?.pressed || 0 < t.buttons[r]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    L();
  };
  b2.onclick = () => {
    L(1);
  };
  b5.onclick = () => E(!0);
  b4.onclick = () => {
    F = !F;
    G();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onclick = t => {
    if (!ba && (t.target === hC && (ea = 1), fa)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = t => {
    let r;
    t.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[t.code], (K[r] = !!t.type[5] && !0) && (0 === r && (ea = 1), 1 === r && E(!0)));
  };
  onmousemove = ({movementX:t, movementY:r}) => {
    fa && (t || r) && (Ma += 0.1 * t, La += 0.1 * r);
  };
  hC.ontouchstart = t => {
    if (!ba) {
      for (let {pageX:r, pageY:w, identifier:A} of t.changedTouches) {
        fa && r > hC.clientWidth / 2 ? void 0 === B && (f = 0, m = r, z = w, B = A, H = La, q = Ma) : void 0 === k && (p = 0, b = r, g = w, k = A);
      }
      a = ya;
    }
  };
  hC.ontouchmove = t => {
    if (!ba) {
      for (let {pageX:S, pageY:V, identifier:T} of t.changedTouches) {
        var r, w, A, I;
        B === T && (La = H + (V - z) / 2.3, Ma = q + (S - m) / 2.3, f = 1);
        k === T && (T = (b - S) / 19, r = Ya(T), w = (g - V) / 19, A = Ya(w), (I = 0.3 < $a(r, A)) && (p = 1), P = (I && 0.2 < r) * bb(T, -1), M = (I && 0.2 < A) * bb(w, -1), 2 < r && (b = 19 * (0 > T ? -1 : 1) + S), 2 < A && (g = 19 * (0 > w ? -1 : 1) + V));
      }
    }
  };
  hC.ontouchend = t => {
    let r;
    document.activeElement === document.body && t.preventDefault();
    for (const w of t.changedTouches) {
      w.identifier === B ? (B = void 0, f || (r = 1), f = 0) : w.identifier === k ? (k = void 0, M = P = 0, p || (r = 1), p = 0) : r = 1;
    }
    t.target === hC && r && a && 0.02 < (t = ya - a) && 0.7 > t && (ea = 1);
  };
  la = () => {
    Da = M + (K[4] ? 1 : 0) - (K[5] ? 1 : 0);
    Ea = P + (K[2] ? 1 : 0) - (K[3] ? 1 : 0);
    let t = navigator.getGamepads()[0];
    t && (fa && (La += Ca * ab(t.axes[3], 0.3) * 80, Ma += Ca * ab(t.axes[2], 0.3) * 80), Da += Q(t, 12) - Q(t, 13) - ab(t.axes[1], 0.2), Ea += Q(t, 14) - Q(t, 15) - ab(t.axes[0], 0.2), Q(t, 9) && E(!0), (t = Q(t, 3) || Q(t, 2) || Q(t, 1) || Q(t, 0)) && !n && (ea = 1), n = t);
  };
  document.onvisibilitychange = onblur = onresize = v;
  E(!0);
}, Hb = (a, b) => {
  1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
}, Ib = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ma = Ua.reduce((a, b) => a + b.i, 0)] + " / XIII";
}, Jb = () => {
  localStorage["Dante-22"] = JSON.stringify([e.map(a => a.i), Ua.map(a => a.i), Ia, qa, d,]);
}, O = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), R = (a, b = 0, g = 0) => {
  const k = u(h, Ta[++ra].l);
  return k.m41 = a, k.m42 = b, k.m43 = g, k;
}, U = NO_INLINE(() => {
  const a = [];
  c = (b, g = h, k) => a.push(...D(b, g, k));
  Ta.push({l:new DOMMatrix(), j:a,});
}), Kb = a => {
  const b = () => {
    const p = b.h = N(b.h, b.i, 4);
    b.g = N(b.g, b.i, 1);
    u(u(g).multiplySelf(a), R(0)).rotateSelf(50 * p - 25, 0,).translateSelf(0, 1).m44 = p;
    ea && 3 > (nb(), gb(Na - jb, Oa - kb, Pa - lb,)) ? b.i ? 0.7 < p && (b.i = 0, Ia = k, Hb("* click *", 1), Jb()) : 0.3 > p && (b.i = 1, Ia = k, Hb("* click *", 1), Jb()) : b.i && 0.8 < p && 14 === k && (b.i = 0, 13 > ma ? Hb("Not leaving now, there are souls to catch!", 3) : na || (Hb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), na = 1));
  }, g = Ta.at(-1).l, k = e.length;
  b.l = g;
  b.D = a;
  e.push(b);
  c(J(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
  c(J(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
  c(J(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), O(0.5, 0.5, 0.4));
}, Qb = (a, ...b) => {
  let g, k, p, m, z = 0, B = 0, f = 1, q = -1;
  const H = () => {
    if (!H.i) {
      let G, v, E, L, Q, t = 1, r = 1 / 0;
      for (let w = 0; b.length > w; w++) {
        let A = b[w], I = gb(M - A[0], n - A[1]);
        t = Za(t, I / A[2]);
        0 > (I -= A[2]) ? G = 1 : r > I && (r = I, P = A);
      }
      G || (v = M - P[0], E = n - P[1], L = gb(v, E), Q = Math.atan2(-E, v), f && (m = bb(m / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2), Q += B, q = -Math.cos(Q), z = Math.sin(Q), 0.1 < L && (L = Za(L, P[2]) / L, M = v * L + P[0], n = E * L + P[1]));
      f = G;
      m = N(m, 3 + 6 * (1 - t), 3 + t);
      C = N(C, M = N(M, M + q, m), m);
      x = N(x, n = N(n, n + z, m), m);
      g = db(g, Math.atan2(C - k, x - p) / Ka - 180, wb(3));
      u(F).multiplySelf(a).translateSelf(k = C, 0, p = x).rotateSelf(0, g, 7 * Math.sin(1.7 * d),);
      1.6 > (nb(), gb(Na - jb, Oa - kb, Pa - lb,)) && (H.i = 1, Hb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ma] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Ib(), Jb());
    }
    H.i && u(Ta[35].l).translateSelf(K % 4 * 1.2 - 1.7 + Math.sin(d + K) / 7, -2, 1.7 * (K / 4 | 0) - 5.5 + Ya(K % 4 - 2) + Math.cos(d / 1.5 + K) / 6,);
    ib(l, Lb, 28 + K);
  };
  let P = b[0], [M, n] = P, [C, x] = P;
  const F = Ta.at(-1).l, K = Ua.length;
  Ua.push(H);
}, Rb = a => {
  let b, g = 0, k = 0, p = 0, m = a.at(-1);
  for (b of a) {
    g += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), p += (m.x - b.x) * (m.y + b.y), m = b;
  }
  return b = gb(g, k, p), g /= b, k /= b, p /= b, {x:g, y:k, z:p, w:g * m.x + k * m.y + p * m.z,};
}, Sb = ({x:a, y:b, z:g}, k) => a * k.x + b * k.y + g * k.z, Tb = (a, b) => {
  let g;
  var k, p;
  const m = b.j, z = b.u;
  for (var B = 0; m.length > B; ++B) {
    if (-0.00008 > (g = Sb(a, m[B]) - a.w) ? p = b : 8e-5 < g && (k = b), p && k) {
      k = [];
      p = [];
      B = m.at(-1);
      let f = Sb(B, a) - a.w;
      for (const q of m) {
        g = Sb(q, a) - a.w, 8e-5 > f && p.push(B), -0.00008 < f && k.push(B), (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g) && (f /= g - f, B = {x:B.x + (B.x - q.x) * f, y:B.y + (B.y - q.y) * f, z:B.z + (B.z - q.z) * f,}, k.push(B), p.push(B)), B = q, f = g;
      }
      k = 2 < k.length && {j:pb(k, m.s, m.A), u:z, v:b,};
      p = 2 < p.length && {j:pb(p, m.s, m.A), u:z, v:b,};
      break;
    }
  }
  return {x:k, y:p,};
}, Ub = (a, b, g = Rb(b.j)) => {
  let k, p;
  return a ? ({x:k, y:p} = Tb(a, b), k || p || a.j.push(b), k && (a.o = Ub(a.o, k, g)), p && (a.m = Ub(a.m, p, g))) : a = {x:g.x, y:g.y, z:g.z, w:g.w, j:[b,], o:0, m:0,}, a;
}, Vb = (a, b, g) => {
  const k = [], p = (m, z) => {
    let {x:B, y:f} = Tb(m, z);
    B || f || (0 < g * Sb(m, b) ? B = z : f = z);
    B && (m.o ? p(m.o, B) : k.push(B));
    f && m.m && p(m.m, f);
  };
  for (const m of b.j) {
    p(a, m);
  }
  return k;
}, Wb = (a, b) => a && (b(a), Wb(a.o, b), Wb(a.m, b)), Xb = a => (Wb(a, b => {
  const g = b.m;
  b.m = b.o;
  b.o = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const k of b.j) {
    k.u = !k.u;
  }
}), a), Yb = a => a.length ? a.reduce((b, g) => Ub(b, {j:g, u:0, v:0,}), 0) : a, Zb = (...a) => a.reduce((b, g) => {
  const k = [];
  if (b = Yb(b), g) {
    g = Yb(g);
    Wb(b, p => p.j = Vb(g, p, 1));
    Wb(g, p => k.push([p, Vb(b, p, -1),]));
    for (let [p, m] of k) {
      for (const z of m) {
        Ub(b, z, p);
      }
    }
  }
  return b;
}), X = (a, ...b) => {
  const g = m => {
    let z;
    return m.v && ((z = p.get(m.v)) ? (k.delete(z), m = g(m.v)) : p.set(m.v, m)), m;
  }, k = new Map(), p = new Map();
  return a = Xb(Zb(Xb(Yb(a)), ...b)), Wb(a, m => {
    for (const z of m.j) {
      k.set(g(z), z.u);
    }
  }), Array.from(k, ([{j:m}, z]) => {
    const B = m.map(({x:f, y:q, z:H}) => ({x:f, y:q, z:H,}));
    return pb(z ? B.reverse() : B, m.s, m.A);
  });
}, hc = () => {
  let a, b, g, k, p, m, z, B, f, q, H, P, M, n, C, x, F = 0, K = 1, G = 2, v = 15;
  const E = (r, w, A, I) => eb(r, w, K || (bb(Ya(w - r) ** 0.5 - A) + 1 / 7) * wb(1.5 * I)), L = () => u((G ? e[Ia] : Ta[28 !== F ? F : 0]).l,), Q = r => {
    1 < G ? (u(e[Ia].l).multiplySelf(e[Ia].D), nb(0, 0.9 < pa ? 15 : 1, -2.4)) : (L(), nb(n, C, x));
    r && (p = (jb - Na) / Ca, m = (lb - Pa) / Ca);
    Na = jb;
    Oa = kb;
    Pa = lb;
  }, t = () => {
    var r = 0, w = 0, A = 0, I = 0, S = 0, V = 0, T = -1;
    for (var da = 0; 36 > da; ++da) {
      var Qa = 512 * da;
      for (var ia = 96; 416 > ia; ia += 4) {
        for (var ja = 0; 2 > ja; ++ja) {
          var Z = $b[Qa + ia + ja];
          const sa = $b[Qa + ia + ja + 2];
          Z > I && (I = Z);
          Z + sa && (0 > T || T === da) && (T = da, sa === q ? ++r : w && w !== sa || (w = sa, ++A));
        }
      }
    }
    q = 0 > T ? 0 : A > 2 * r ? w : q;
    for (r = 36; 128 > r; ++r) {
      da = T = A = w = 0;
      Qa = 512 * r;
      for (ia = 0; 128 > ia; ++ia) {
        ja = Qa + 4 * ia, Z = $b[ja], 64 > ia ? Z > w && (w = Z) : Z > A && (A = Z), (Z = $b[2 + ja]) > T && (T = Z), Z = $b[1 + ja], 64 < ia ? Z > w && (w = Z) : Z > A && (A = Z), (Z = $b[3 + ja]) > da && (da = Z);
      }
      (A -= w) * A > S * S && (S = A);
      (da -= T) * da > V * V && (V = da);
    }
    S *= 0.7;
    B = bb(1 - 0.01 * $a(Ya(S), Ya(V)), 0.3);
    S /= 255;
    I /= 255;
    V /= 255;
    L().invertSelf();
    nb(S, I, V, 0);
    n += jb;
    C += I;
    x += lb;
    Q();
  };
  ta = () => {
    Q(q);
    gc.r9r(0, 0, 128, 128, 6408, 5121, $b);
    NO_INLINE(t)();
    !G && q === F || (F = q, L().invertSelf(), nb(Na, Oa, Pa), n = jb, C = kb, x = lb, G = G && (q ? 0 : 1));
    (-20 > Na || 109 > Pa ? -25 : -9) > Oa && (G = 2);
    1 === q && (e[15].i = -15 > Na && 0 > Pa ? 1 : 0);
    k = N(k, ua * (30 < q && 35 > q), 2,);
    H = E(H, Na, 0.5, 1);
    P = E(P, f = eb(N(f, Oa, 2), Oa, G || 8 * Ya(f - Oa),), 2, 1,);
    M = E(M, Pa, 0.5, 1);
    fa ? (r = G + wb(18), Fa = eb(Fa, Na, r), Ha = eb(Ha, Pa, r), Ga = eb(Ga, 1.6 + f, r), Ma = cb(Ma)) : (Fa = E(Fa, H, 1, 2 + k,), Ha = E(Ha, M + -18 + 5 * k, 1, 2 + k,), Ga = E(Ga, $a(P + bb((-60 - Pa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), r = Za(-6, -Ya(M - Ha)), w = H - Fa, Ma = db(Ma, 90 - cb(Math.atan2(r, w) / Ka), K + wb(10),), La = db(La, 90 - Math.atan2(gb(r, w), Ga - P) / Ka, K + wb(10),));
    La = bb(La, -87, 87);
    K = 0;
    var r = bb(Da, -1), w = bb(Ea, -1), A = ab(gb(r, w) ** 0.5, 0.1), I = Math.atan2(r, w);
    A && (a = 90 - I / Ka);
    b = db(b, a, wb(8));
    g = N(g, A, 10);
    R(Na, 0.06 * B * g * Math.cos(18.2 * d) + f, Pa,).rotateSelf(0, b);
    for (var S = 0; 2 > S; ++S) {
      const V = 9.1 * d - Math.PI * S;
      u(Ta[53].l, R(0)).translateSelf(0, g * bb(0.45 * Math.sin(V - Math.PI / 2)),).rotateSelf(g * Math.sin(V) * 0.25 / Ka, 0);
    }
    v = q ? 5 : N(v, G ? 13 : 19 - 2 * Za(0, Oa + 10), 2.2);
    p = q || G ? 0 : N(p, 0, 3);
    m = q || G ? 0 : N(m, 0, 3);
    r = (z = G ? 0 : N(z, q ? 7 * bb(2 * A) * B : 0, q ? 9 : 1,)) * A * Ya(r) * Math.sin(I);
    w = z * A * Ya(w) * Math.cos(I);
    I = fa ? (180 + Ma) * Ka : 0;
    A = Ca * (p + (Math.cos(I) * w - Math.sin(I) * r));
    S = Ca * -v;
    r = Ca * (m + (Math.sin(I) * w + Math.cos(I) * r));
    L().invertSelf();
    nb(A, S, r, 0);
    n += jb;
    C += S;
    x += lb;
    Q();
  };
}, ic = (a, b, g) => {
  ba ? 1100 < hC.width && a.d97(4, Ta[55].C - Ta[53].B, 5123, 2 * Ta[53].B) : (a.das(4, Ta[b].C - Ta[b].B, 5123, 2 * Ta[b].B, Ua.length,), a.d97(4, (g ? Ta[55].C : Ta[53].B) - 3, 5123, 6));
}, jc = a => {
  const b = [{}, {}, {}, {}, {}, {}, {}, {},], g = (n, C, x = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
  ) => {
    const F = {}, K = (v, E) => (E = n.c6x(E), n.s3c(E, v), n.c6a(E), E), G = n.c1h();
    return n.abz(G, K(x, 35633)), n.abz(G, K(C, 35632)), n.l8l(G), v => v ? F[v] || (F[v] = n.gan(G, v)) : n.u7y(G);
  }, k = n => {
    requestAnimationFrame(k);
    var C = (n - (aa || n)) / 1e3;
    if (ya += C, d += Ca = ba ? 0 : Za(0.055, C), aa = n, 0 < Ca) {
      C = (F, K, G) => R(F + Math.sin(d + 2) / 5, K + Math.sin(0.8 * d) / 5, G).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
      Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
      qa = N(qa, e[15].g, 0.2 + 0.3 * Ya(2 * e[15].g - 1),);
      pa = na ? (fa = 0, N(pa, -9, 0.015)) : N(pa, bb(d / 3), 1);
      la();
      n = (ra = 1, ua = fb(e[13].h, e[8].h), xa = eb(N(xa, 0, 1), cb(xa + 60 * Ca), e[2].h - e[3].g,), va = eb(N(va, 0, 5), cb(va + 56 * Ca), ua,), wa = eb(N(wa, 0, 4), cb(wa + 48 * Ca), ua,), R(0, 270 * (e[1].h - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].h),), Za(1 - e[11].g, e[10].g));
      var x = (R(n * Math.sin(0.6 * d + 1.2) * 12, 0, 35), R(n * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), R(n * Math.sin(0.6 * d) * 12, 0, 45), R(9.8 * (1 - n)), n = bb(1 - 5 * n) * fb(e[11].h, e[2].h), R(0, n * Math.sin(1.35 * d) * 4), R(0, 0, n * Math.sin(0.9 * d) * 8), R(0, -6.5 * e[11].g), n = fb(e[4].g, e[3].g), R(0, n * Math.sin(d) * 5 + 3.5 * (1 - $a(e[3].h, e[4].h)),), R(0, n * Math.sin(d + 3) * 6, n * Math.sin(0.6 * d + 1) * 6), R(0, -7.3 * e[4].g), n = fb(e[6].h, e[7].h), R(0, -2, 10 - 8.5 * 
      n * Ya(Math.sin(1.1 * d))), R(0, -2, 10 - 8.5 * n * Ya(Math.sin(2.1 * d))), R(0, -2, 10 - 8.5 * $a(n * Ya(Math.sin(1.5 * d)), (1 - e[6].h) * (1 - n)),), fb(e[5].g, e[13].g));
      for (n = 0; 4 > n; n++) {
        R((2 < n ? 2 * (1 - x) + x : 0) - 100, x * Math.sin(1.3 * d + 1.7 * n) * (3 + n / 3) + 0.7, 115 - 7 * (1 - e[5].g) * (1 - e[13].g) * (1 & n ? -1 : 1) + $a(0.05, x) * Math.cos(1.3 * d + 7 * n) * (4 - 2 * (1 - n / 3)),);
      }
      n = fb(e[8].g, e[9].g);
      for (let F = 0; 3 > F; ++F) {
        R(0, n * Math.sin(1.5 * d + 1.5 * F) * 4 + (F ? 0 : 3 * (1 - e[8].g) * (1 - e[9].g)),);
      }
      n = fb(fb((e[9].h + e[9].g) / 2, e[8].g), (e[12].h + e[12].g) / 2,);
      R(0, 16 * n, 95 + 8.5 * bb(2 * n - 1));
      R(0, -4.7 * e[0].h, -15);
      R(0, -4.7 * e[10].h, 15);
      R(-99.7, -1.9 - 5.5 * e[3].h, 63.5);
      R(-100, 0.6 - 5.8 * e[13].h, 96.5);
      R(-75, 3 * (1 - e[2].g) * (1 - e[3].h), 55).rotateSelf(180 * (1 - e[2].g) + xa, 0,);
      R(2.5 * (1 - x) - 139.7, -3 * (1 - e[5].h) - x * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * x), 0);
      R(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
      R(-81, 0.6, 106).rotateSelf(0, 40 + va);
      R(-65.8, 0.8, 106).rotateSelf(0, wa);
      R(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
      R(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
      C(-12, 4.2, 40 * pa - 66);
      C(-123, 1.4, 55 - 65 * qa);
      for (C = 0; 16 > C; ++C) {
        13 > C && Ua[C](), e[C]();
      }
      ta();
      for (C = 0; 28 > C; ++C) {
        ib(Ta[28 + C].l, Lb, C);
      }
      for (let F, K = 0, G = 656; 26 > K; ++K, ++G) {
        F = Ta[2 + K].l, Lb[G++] = F.m41, Lb[G++] = F.m42, Lb[G++] = F.m43;
      }
      gc.cbf(!0, !0, !0, !0);
      gc.c4s(16640);
      gc.u3a(q("j"), Lb);
      gc.cbf(!0, !1, !0, !1);
      gc.uae(q("b"), !1, ib(u().rotateSelf(0, 180).invertSelf().translateSelf(-Na, -Oa, 0.3 - Pa,),),);
      ic(gc, 56);
      gc.c4s(256);
      gc.cbf(!1, !0, !1, !0);
      gc.uae(q("b"), !1, ib(u().translateSelf(-Na, -Oa, -Pa - 0.3,),),);
      ic(gc, 56);
      gc.f1s();
      ea = 0;
    }
    f();
    Y.u3a(f("j"), Lb);
    Y.b6o(36160, B);
    Y.v5y(0, 0, 2048, 2048);
    Y.ubh(f("g"), 4);
    Y.ubh(f("h"), 4);
    Y.uae(f("a"), !1, ib(h));
    P(54.7);
    ic(Y, 57, !fa);
    M(126);
    ic(Y, 57, !fa);
    Y.b6o(36160, null);
    Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
    Y.c4s(16640);
    C = Fa;
    x = Ga;
    n = Ha;
    ba ? (u().rotateSelf(0, 40 * Math.sin(ya) - 80, -8), ib(l, Lb, 25), ib(l, Lb, 26), ib(l, Lb, 27), u(ha).invertSelf(), nb(3.6, 3.5), C = jb, x = kb, n = 5, u(h, m).rotateSelf(-20, 0).invertSelf().translateSelf(-C, -x, -n).rotateSelf(0, 99)) : u(h, m).rotateSelf(-La, -Ma).invertSelf().translateSelf(-C, -x, -n,);
    Y.ubh(f("g"), 0);
    Y.ubh(f("h"), 1);
    Y.ubu(f("k"), C, x, n);
    Y.uae(f("a"), !1, ib(ha));
    Y.uae(f("b"), !1, ib(m));
    Y.uae(f("i"), !1, z);
    ic(Y, 57, !fa);
    H();
    Y.uae(H("b"), !1, ib(u(m).invertSelf()));
    Y.ubu(H("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ya);
    Y.d97(4, 3, 5123, 0);
  }, p = new DOMMatrix(), m = new DOMMatrix(), z = new Float32Array(32), B = Y.c5w(), f = g(Y, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
  ), q = g(gc, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), H = 
  g(Y, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
  "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [P, M] = ob(2, n => {
    const C = Y.c25();
    return Y.a4v(33984 + n), Y.b9j(3553, C), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), x => {
      let F = 0, K = 0, G = 0, v = 1 / 0, E = 1 / 0, L = 1 / 0, Q = -1 / 0, t = -1 / 0, r = -1 / 0;
      Y.fas(36160, 36096, 3553, C, 0);
      Y.c4s(256);
      u().scale3dSelf(x *= 1.1).multiplySelf(u(ka[n], p).multiplySelf(m).invertSelf(),);
      for (let w = 0; 8 > w; ++w) {
        const A = b[w];
        nb(4 & w ? 1 : -1, 2 & w ? 1 : -1, 1 & w ? 1 : -1);
        F -= A.x = (0 | jb) / (x * mb);
        K -= A.y = (0 | kb) / (x * mb);
        G -= A.z = (0 | lb) / (x * mb);
      }
      u().rotateSelf(298, 139).translateSelf(F / 8, K / 8, G / 8);
      for (x = 0; 8 > x; ++x) {
        const {x:w, y:A, z:I} = b[x];
        nb(w, A, I);
        Q = $a(Q, jb);
        t = $a(t, kb);
        r = $a(r, lb);
        v = Za(v, jb);
        E = Za(E, kb);
        L = Za(L, lb);
      }
      x = 10 + n;
      L *= 0 > L ? x : 1 / x;
      r *= 0 < r ? x : 1 / x;
      Y.uae(f("b"), !1, ib(u(h, p).scaleSelf(2 / (Q - v), 2 / (t - E), 2 / (L - r)).translateSelf((Q + v) / -2, (t + E) / -2, (L + r) / 2).multiplySelf(l), z, n,), 16 * n, 16,);
    };
  });
  Y.a4v(33986);
  Y.b9j(3553, Y.c25());
  Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, a);
  Y.t2z(3553, 10241, 9987);
  Y.t2z(3553, 10240, 9729);
  Y.gbn(3553);
  Y.b6o(36160, B);
  Y.d45([0,]);
  Y.r9l(0);
  f();
  Y.ubh(f("q"), 2);
  H();
  Y.ubh(H("q"), 2);
  Y.c5t(0, 0, 0, 1);
  Y.d4n(515);
  Y.e8z(2929);
  Y.e8z(2884);
  gc.e8z(2929);
  gc.e8z(2884);
  gc.v5y(0, 0, 128, 128);
  q();
  gc.uae(q("a"), !1, ib(Fb(1e-4, 2, 1.2, 0.4)));
  NO_INLINE(Gb)();
  NO_INLINE(hc)();
  requestAnimationFrame(k);
}, h = new DOMMatrix(), l = new DOMMatrix(), hb = new Float32Array(16), $b = new Uint8Array(65536), kc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hD" height="128" width="128"></canvas>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: max(780px, 50vw);\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4,\n#hD {\n  display: none;\n}\n'), 
"data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), Lb = new Float32Array(760), Y = hC.getContext("webgl2", {powerPreference:"high-performance",}), gc = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const a in gc) {
  [Y, gc,].map(b => b[a[0] + [...a,].reduce((g, k, p) => (g * p + k.charCodeAt(0)) % 434, 0).toString(36)] = b[a]);
}
xb(() => {
  let a = 0;
  const b = () => {
    2 == ++a && NO_INLINE(jc)(g);
  }, g = new Image();
  g.onerror = g.onload = b;
  g.src = kc;
  NO_INLINE(Eb)(() => {
    xb(() => {
      let f = 0;
      const q = [], H = [], P = [], M = [], n = new Int32Array(8), C = new Map(), x = new Int32Array(n.buffer, 0, 5), F = new Float32Array(n.buffer);
      Ta.map((v, E) => {
        let L;
        const Q = t => {
          let {x:r, y:w, z:A} = L[t], I = (F[0] = r, F[1] = w, F[2] = A, t = "" + (L.A ? x : n), C.get(t));
          return void 0 !== I ? (r = 3 * I, M[r] = (M[r++] + n[5]) / 2, M[r] = (M[r++] + n[6]) / 2, M[r] = (M[r] + n[7]) / 2) : (C.set(t, I = C.size), H.push(r, w, A, F[3]), P.push(n[4]), M.push(n[5], n[6], n[7])), I;
        };
        for (L of (F[3] = 55 < E ? -28 : E, v.j)) {
          const {x:t, y:r, z:w} = Rb(L);
          n[4] = 0 | L.s;
          n[5] = 32767 * t;
          n[6] = 32767 * r;
          n[7] = 32767 * w;
          for (let A = 2, I = Q(0), S = Q(1); L.length > A; ++A) {
            q.push(I, S, S = Q(A));
          }
        }
        v.j = 0;
        v.B = f;
        v.C = f = q.length;
      });
      [Y, gc,].map(v => {
        v.b11(34962, v.c1b());
        v.b2v(34962, new Float32Array(H), 35044);
        v.v7s(0, 4, 5126, !1, 0, 0);
        v.b11(34962, v.c1b());
        v.b2v(34962, new Int16Array(M), 35044);
        v.v7s(1, 3, 5122, !0, 0, 0);
        v.b11(34962, v.c1b());
        v.b2v(34962, new Uint32Array(P), 35044);
        v.v7s(2, 4, 5121, !0, 0, 0);
        v.b11(34963, v.c1b());
        v.b2v(34963, new Uint16Array(q), 35044);
        v.e3x(0);
        v.e3x(1);
        v.e3x(2);
      });
      let K = [], G = [];
      try {
        const [v, E, L, Q, t] = JSON.parse(localStorage["Dante-22"],);
        K = v;
        G = E;
        Ia = L;
        qa = Q;
        d = t;
      } catch {
      }
      e.map((v, E) => v.h = v.g = v.i = 14 !== E && K[E] ? 1 : 0);
      Ua.map((v, E) => v.i = G[E] ? 1 : 0);
      Ib();
      pa = ma || 14 !== Ia ? 1 : 0;
      xb(b);
    });
    const k = f => y(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), p = f => X(D(J(), y(0, -f / 2).scale(6, f - 1, 2.2)), D(J(), y(0, -f / 2 - 6).scale(4, f - 3, 4)), D(J(28, 1), y(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), m = ob(11, f => sb(qb(rb(16), k(f), O(1, 1, 0.8, 0.2)).reverse(), qb(rb(16), k(f + 1), O(1, 1, 0.8, 0.2)), 1,)).flat();
    var z = [...D(J(), y(0, -3).scale(11, 1.4, 3), O(0.9, 0.9, 0.9, 0.2)), ...D(J(), y(0, -2.2).scale(7.7, 0.5, 4), O(0.5, 0.5, 0.5, 0.2)), ...ob(12, f => D(J(), h.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), O(0.6, 0.5, 0.3, 0.2),)).flat(), ...X(D(J(6), h.rotate(90).scale(6, 8, 6), O(0.3, 0.6, 0.6, 0.3)), D(J(4, 0, 0.01), y(0, 6).scale(12, 2, 0.75).rotate(0, 45), O(0.3, 0.6, 0.6, 0.3),), D(J(6), h.rotate(90).scale(5, 12, 5), O(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => D(J(5), y(f, 2.5).rotate(90, 
    0, 36).scale(1.8, 10, 1.8), O(0.3, 0.6, 0.6, 0.3),)),),];
    const B = X(D(J(), y(0, -0.5, 1).scale(1.15, 1.2, 6.5), O(0.25, 0.25, 0.35, 0.3),), X(D(J(3), y(0, 0, -5.5).scale(3, 2), O(0.6, 0.3, 0.4, 0.3)), D(J(), y(0, 0, -3.65).scale(2.5, 3), O(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => D(J(), y(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), O(0.7, 0.2, 0, 0.3),)),);
    U("MODEL_ID_SKY");
    c([Va.slice(1),], y(-2).scale3d(3).rotate(90, 0));
    U("MODEL_ID_STATIC_WORLD");
    Kb(y(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, q) => {
      c(J(), y(0, 0, q ? 22 : -23).scale(3, 1, 8), O(0.9, 0.9, 0.9, 0.2));
      c(J(), y(0, 6.3, f).scale(4, 0.3, 1), O(0.3, 0.3, 0.3, 0.4));
      c(J(), y(0, 1, f).scale(3, 0.2, 0.35), O(0.5, 0.5, 0.5, 0.3));
    });
    c(J(), y(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(J(), y(3, 1.5, -20).scale(0.5, 2, 5), O(0.7, 0.7, 0.7, 0.2));
    c(J(), y(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), O(0.75, 0.75, 0.75, 0.2),);
    c(J(5), y(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), O(0.6, 0.3, 0.3, 0.4));
    c(X(Zb(D(J(6, 0, 0, 0.3), y(8, -3, -4).scale(13, 1, 13), O(0.7, 0.7, 0.7, 0.2),), X(D(J(6, 0, 0, 0.3), y(0, -0.92).scale(13, 2, 13), O(0.8, 0.8, 0.8, 0.2),), D(J(), h.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), O(0.5, 0.5, 0.5, 0.5),),), D(J(), h.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), O(0.8, 0.2, 0.2, 0.5),), D(J(6), y(0, -8).scale(9, 8, 7), O(0.2, 0.1, 0.4, 0.5)),), D(J(5), h.scale(5, 30, 5), O(0.4, 0.2, 0.6, 0.5)), D(J(5, 0, 1.5), 
    y(0, 1).scale(4.5, 0.3, 4.5), O(0.7, 0.5, 0.9, 0.2),), D(J(6), y(15, -1.5, 4).scale(3.5, 1, 3.5), O(0.5, 0.5, 0.5, 0.5),),),);
    Kb(y(15, -2, 4));
    c(J(), y(-18.65, -3, 55).scale(2.45, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    Kb(y(-55, -1.1, 46).rotate(0, 90));
    c(J(7), y(-57, -2.6, 46).scale(4, 1, 4), O(0.8, 0.8, 0.8, 0.3));
    c(J(6), y(-61.3, -2.4, 49).scale(3, 1, 5), O(0.4, 0.6, 0.6, 0.3));
    c(z, y(-53, 0, 55));
    c(J(), y(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), O(0.7, 0.7, 0.7, 0.2),);
    c(J(3, 0, -0.5), y(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), O(0.8, 0.8, 0.8, 0.2),);
    c(X(Zb(D(J(), y(-100, -2.4, 55).scale(8, 0.9, 8), O(0.8, 0.8, 0.8, 0.2),), D(J(), y(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), O(0.8, 0.8, 0.8, 0.2),), D(J(), y(-100, -2.6, 70).scale(3, 1.1, 7), O(0.8, 0.8, 0.8, 0.2),), D(J(), y(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), O(0.8, 0.8, 0.8, 0.2),), D(J(6), y(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), O(0.6, 0.6, 0.6, 0.3),), D(J(), y(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), O(0.8, 0.8, 0.8, 0.2),), D(J(), y(-100, 0.42, 
    92).scale(3, 1.1, 4.1), O(0.8, 0.8, 0.8, 0.2),),), D(J(8), y(-100, -1, 55).scale(7, 0.9, 7), O(0.3, 0.3, 0.3, 0.4)), D(J(8), y(-100, -2, 55).scale(4, 0.3, 4), O(0.4, 0.4, 0.4, 0.5)), D(J(8, 0, -3.1), y(-100, -3, 55).scale(0.4, 1, 0.4), O(0.4, 0.4, 0.4, 0.5),),),);
    c(X(D(J(), y(-100, 1, 63).scale(7.5, 4), O(0.5, 0.5, 0.5, 0.4)), D(J(), y(-100, 0, 70).scale(2, 2, 10), O(0.5, 0.5, 0.5, 0.4)), D(J(20, 1), y(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), O(0.5, 0.5, 0.5, 0.4),),),);
    Va.map(({x:f, z:q}) => {
      c(J(6), y(3 * f, 3, 15 * q).scale(0.7, 4, 0.7), O(0.6, 0.3, 0.3, 0.4));
      c(J(6), y(7 * f - 100, -3, 7 * q + 55).scale(1, 8.1), O(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(H => c(J(6), y(7 * f - 100, H, 7 * q + 55).scale(1.3, 0.5, 1.3), O(0.4, 0.2, 0.2, 0.8),));
      c(J(14, 1), y(9 * f - 38.9, -7.3, 11 * q + 17).scale(1, 4), O(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(H => c(J(17, 1), y(9 * f - 38.9, H - 11.3, 11 * q + 17).scale(1.5, 0.5, 1.5), O(0.6, 0.6, 0.6, 0.3),));
    });
    ob(7, f => {
      c(J((23 * f + 1) % 5 + 5, 0, 0.5), y(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), O(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(J(), y(-87, -9.5, 24).scale(7, 1, 3), O(0.4, 0.5, 0.6, 0.4));
    c(J(4), y(-86, -9.2, 27).scale(5, 1, 5), O(0.5, 0.6, 0.7, 0.3));
    c(J(12, 1), y(-86, -9, 31).scale(1.5, 1, 1.5), O(0.3, 0.3, 0.4, 0.1));
    Kb(y(-86, -7.5, 31));
    c(X(Zb(D(J(5), y(0, 0, -7).scale(2, 1.2, 2), O(0.2, 0.4, 0.7, 0.3)), D(J(5), h.scale(9, 1.2, 9), O(0, 0.2, 0.3, 0.5)), D(J(), h.scale(11, 1, 13), O(0.3, 0.4, 0.6, 0.3)),), D(J(5), h.scale(5.4, 5, 5.4), O(0, 0.2, 0.3, 0.5)),), y(-38.9, -11.3, 17),);
    Kb(y(-38.9, -9.6, 10));
    c(X(Zb(D(J(6), y(0, 0, -18).scale(15, 1.2, 15), O(0.7, 0.7, 0.7, 0.3),), D(J(), h.scale(4, 1.2, 6), O(0.45, 0.4, 0.6, 0.3)),), ...ob(6, f => ob(6, q => D(J(6), y(4.6 * q - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * q) - 32).scale(2, 5, 2), O(0.7, 0.7, 0.7, 0.3),),)).flat(),), y(-38.9, -11.3, -1),);
    c(J(5), y(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), O(0.8, 0.1, 0.25, 0.4));
    Kb(y(-84, -0.7, 85).rotate(0, 45));
    c(X(Zb(D(J(), y(26.5, -1.6, 10).scale(20, 2.08, 3)), D(J(), y(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...ob(4, f => D(J(), y(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...ob(3, f => D(J(), y(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), y(-123, 0.2, -12), O(0.5, 0.5, 0.6, 0.2),);
    Kb(y(-116, -1.4, -18).rotate(0, 180));
    c(J(6), y(-116, -2.6, -16.5).scale(3.2, 0.8, 3), O(0.6, 0.5, 0.7, 0.2));
    c(J(), y(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(J(), y(-115.5, -17, -12).scale(0.5, 15, 2.2), O(0.6, 0.6, 0.6, 0.3));
    c(J(8), y(-114, -17, -2).scale(2, 15, 2), O(0.6, 0.6, 0.6, 0.3));
    c(J(8), y(-79, -17, -2).scale(2, 15, 2), O(1, 1, 1, 0.3));
    c(J(), y(-77, -17, -50.5).scale(2.2, 15, 0.5), O(0.6, 0.6, 0.6, 0.3));
    c(X(D(J(12), y(-77, -14.5, -12).scale(4, 17.5, 4), O(0.7, 0.7, 0.7, 0.2),), D(J(12), y(-77, 3.1, -12).scale(3, 5, 3), O(0.4, 0.5, 0.6, 0.2)), D(J(), y(-79, 0.1, -12).scale(3.5, 2, 1.3), O(0.4, 0.5, 0.6, 0.2),), D(J(), y(-77, 0.1, -14).scale(1.5, 2, 2), O(0.4, 0.5, 0.6, 0.2)),),);
    c(X(D(J(), y(-93, -5.8, -40).scale(9, 1, 5), O(0.8, 0.8, 0.8, 0.1)), D(J(9), y(-98, -5.8, -40).scale(3, 8, 3), O(0.7, 0.7, 0.7, 0.2)),),);
    c(J(), y(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), O(0.6, 0.6, 0.6, 0.3));
    c(J(9), y(-98, -18.4, -40).scale(2.5, 13.5, 2.5), O(0.5, 0.5, 0.5, 0.3));
    Kb(y(-98, -4.4, -40).rotate(0, 90));
    [-1, 1,].map((f, q) => {
      c(X(D(J(), y(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), O(0.5, 0.5, 0.5, 0.4),), D(J(), h.scale(3, 3, 10), O(0.6, 0.24, 0.2, 0.5)), D(J(32, 1), y(0, 3, -5).scale(3, 4, 10).rotate(90, 0), O(0.6, 0.24, 0.2, 0.5),), D(J(5), y(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), O(0.6, 0.24, 0.2, 0.5),), D(J(5), y(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), O(0.6, 0.24, 0.2, 0.5),),), y(f - 100, 0.7, 97),);
      c(J(12, 1), y(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), O(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5,].map(H => c(J(15, 1), y(-7.5 * f - 100, H + 0.7, 96).scale(1.1, 0.5, 1.1), O(0.5, 0.24, 0.2, 0.4),));
      c(m, y(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(m, y(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      ob(5, H => c(m, y(18.5 * (q - 0.5), 0, 4.8 * H - 9.5).rotate(0, 180 - 180 * q).scale(1.2, 10, 1.2),));
    });
    c(X(D(J(), y(-82.07, 0.8, 106).scale(11, 0.9, 2.2), O(0.7, 0.7, 0.7, 0.1),), D(J(45, 1), y(-81, 0.7, 106).scale3d(7.7), O(0.7, 0.7, 0.7, 0.1),),),);
    c(J(), y(-58, 1, 106).scale(2, 0.65, 2), O(0.7, 0.7, 0.7, 0.2));
    c(J(), y(-50.7, 1, 99).scale(2, 0.65, 1), O(0.7, 0.7, 0.7, 0.2));
    c(J(), y(-42, 0.4, 91).scale(5, 1, 2.5), O(0.7, 0.7, 0.7, 0.3));
    c(J(), y(-34.2, 0.4, 91).scale(3, 1, 3), O(0.7, 0.7, 0.7, 0.3));
    c(J(5), y(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), O(0.2, 0.5, 0.5, 0.6));
    Kb(y(-34, 2.7, 96).rotate(-12, 0));
    c(X(Zb(D(J(6, 0, 0, 0.6), y(-100, 0.7, 105.5).scale(8, 1, 11), O(0.7, 0.7, 0.7, 0.2),), D(J(), y(-101.5, 0.7, 93.5).scale(10.5, 1, 2), O(0.7, 0.7, 0.7, 0.2),),), D(J(5), y(-100, 0.7, 113).scale(4, 3, 4), O(0.7, 0.7, 0.7, 0.2)),),);
    ob(3, f => {
      c(p(16), y(-77, -9, -12 * f - 20).rotate(0, 90), O(0.6, 0.6, 0.6, 0.3),);
      c(p(16), y(12 * f - 109, -9, -12), O(0.6, 0.6, 0.6, 0.3));
      c(p(24.7 - 0.7 * (1 & f)), y(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? O(0.5, 0.5, 0.5, 0.3) : O(0.35, 0.35, 0.35, 0.5),);
    });
    c(X(D(J(6, 0, 0, 0.3), y(0, -0.92, 95).scale(14, 2, 14), O(0.8, 0.8, 0.8, 0.2),), D(J(5), y(0, 0, 95).scale3d(6), O(0.3, 0.3, 0.3, 0.5)),),);
    Kb(y(0, 1.7, 82).rotate(0, 180));
    c(J(5), y(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), O(0.5, 0.3, 0.3, 0.4),);
    c(J(6), y(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), O(0.5, 0.6, 0.7, 0.3));
    c(J(), y(0, 16, 127.8).scale(1.5, 1, 0.7), O(0.5, 0.6, 0.7, 0.3));
    c(J(7), y(0, 15.1, 133).scale(5, 2, 5), O(0.4, 0.5, 0.6, 0.4));
    c(X(Zb(D(J(), y(0, 16, 110.5).scale(12, 1, 3), O(0.5, 0.3, 0.3, 0.4)), D(J(), y(0, 16, 111).scale(3, 1, 3.8), O(0.5, 0.3, 0.3, 0.4)),), D(J(5), y(0, 16, 103.5).scale(5.5, 5, 5.5), O(0.5, 0.3, 0.3, 0.4),),),);
    Qb(y(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Qb(y(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...rb(18).map(({x:f, z:q}) => [7 * f, 10 * q, 4.5 - 2 * Ya(f),]),);
    Qb(y(0, 3, 95), ...rb(9).map(({x:f, z:q}) => [9 * f, 9 * q, 4,]),);
    Qb(y(0, 19, 134), [0, 0, 3.5,]);
    Qb(y(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Qb(y(-89, 0.2, 80), [0, 0, 6,]);
    Qb(y(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Qb(y(-115, 0.2, -12), [0, 0, 3.5,]);
    Qb(y(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    U("MODEL_ID_LEVEL1_CENTRAL_PLATFORM");
    c(J(5), y(0, -0.2).scale(5, 1, 5), O(0.6, 0.65, 0.7, 0.3));
    Kb(y(0, 1.2));
    ob(2, f => {
      U("MODEL_ID_LEVEL2_BLACK_PLATFORM" + f);
      Va.map(({x:q, z:H}) => {
        c(J(11, 1), y(4 * q, 4, 4 * H).scale(0.8, 3, 0.8), O(0.5, 0.3, 0.7, 0.6));
        c(J(), y(4 * q, 7, 4 * H).scale(1, 0.3), O(0.5, 0.5, 0.5, 0.3));
      });
      c(X(D(J(), h.scale(5, 1, 5), O(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(q => D(J(25, 1), y(5 * q, 0.2).rotate(-30 * q).scale(4, 1, 3), O(0.8, 0.8, 0.8, 0.3),)),),);
      c(J(), y(0, -3).scale(8, 2, 8), O(0.4, 0.4, 0.4, 0.3));
    });
    U("MODEL_ID_LEVEL2_CENTRAL_PLATFORM");
    c(X(Zb(D(J(), h.scale(1.5, 1, 5), O(0.9, 0.9, 0.9, 0.2)), D(J(6), h.scale(4, 1, 5), O(0.9, 0.9, 0.9, 0.2)), D(J(), y(0, -2).scale(2, 3.2, 1.9), O(0.3, 0.8, 0.5, 0.5)), D(J(16, 1, 0, 4), h.scale(1, 1, 1.5).rotate(0, 90), O(0.9, 0.9, 0.9, 0.2),),), D(J(), h.scale(1.3, 10, 1.3), O(0.2, 0.7, 0.4, 0.6)),),);
    Qb(y(0, 2.8), [0, 0, 4.5,]);
    U("MODEL_ID_TRIANGLE_PLATFORM");
    c(J(3), y(-23, -1.7, 55.8).scale(5, 0.7, 8.3), O(0.3, 0.6, 0.6, 0.2));
    c(J(8), y(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), O(0.8, 0.8, 0.8, 0.2));
    c(J(), y(-23, -3, 55).scale(5.2, 1.7, 3), O(0.5, 0.5, 0.5, 0.3));
    c(J(), y(-23, -2.2, 62).scale(3, 1, 4), O(0.5, 0.5, 0.5, 0.3));
    Kb(y(-23, -0.5, 66.5));
    U("MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL");
    c(J(), y(-22.55, -3, 55).scale(1.45, 1.4, 2.7), O(0.7, 0.7, 0.7, 0.2));
    c(X(D(J(), h.scale(3, 1.4, 2.7)), D(J(), h.scale(1.2, 8, 1.2)),), y(-33, -3, 55), O(0.7, 0.7, 0.7, 0.2),);
    U("MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL");
    c(X(D(J(), y(-27, -3, 55).scale(3, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2)), D(J(), y(-27, -3, 55).scale(1, 3), O(0.9, 0.9, 0.9, 0.2)),),);
    c(J(), y(-39, -3, 55).scale(3, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    U("MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR");
    c(J(6), y(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), O(0.7, 0.7, 0.7, 0.4),);
    U("MODEL_ID_ELEVATORS0");
    [0, 12, 24,].map(f => c(J(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.2, 0.5, 0.6, 0.2),));
    U("MODEL_ID_ELEVATORS1");
    [6, 18,].map(f => c(J(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.1, 0.4, 0.5, 0.2),));
    U("MODEL_ID_MONUMENT");
    c(X(Zb(D(J(5), y(0, 2).scale(5, 7, 5).skewY(8), O(0.2, 0.4, 0.5, 0.5),), D(J(5), y(0, 6).scale(1.1, 7, 1.1).skewY(-8), O(0.25, 0.35, 0.5, 0.5),), D(J(5), y(0, 9).scale(0.6, 7, 0.6).skewY(8), O(0.35, 0.3, 0.5, 0.5),),), D(J(5), h.scale(4, 8, 4), O(0.2, 0.4, 0.5, 0.5)), D(J(5), y(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), O(0.2, 0.4, 0.5, 0.5),),), y(-38.9, -11.3, 17),);
    Qb(y(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({x:f, z:q}) => [3 * f, 3 * q, 1.2,]),);
    U("MODEL_ID_PUSHING_ROD0");
    ob(2, f => c(B, y(9 * f - 110 + (1 & f), 1.9, -12)));
    U("MODEL_ID_PUSHING_ROD1");
    ob(2, f => c(B, y(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    U("MODEL_ID_PUSHING_ROD2");
    ob(3, f => c(B, y(9 * f - 106, 1.9, -12)));
    ob(4, f => {
      U("MODEL_ID_OSCILLATING_HEX_PAD" + f);
      c(J(6), y(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), O(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [O(0.1, 0.55, 0.45, 0.2), O(0.2, 0.5, 0.5, 0.3), O(0.3, 0.45, 0.55, 0.4),].map((f, q) => {
      U("MODEL_ID_JUMPING_PAD" + q);
      c(J(), y(-23.5, 0.5, 91 + 6.8 * q).scale(1 === q ? 2 : 3.3, 1, 3.3), f);
      2 === q && c(J(), y(-29.1, 0.4, 91).scale(2.1, 1, 3), O(0.7, 0.7, 0.7, 0.3));
      1 === q && c(J(), y(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), O(0.6, 0.6, 0.7, 0.3),);
    });
    U("MODEL_ID_FLOATING_ELEVATOR_PAD");
    c(J(5), h.scale(5, 1.1, 5), O(0.5, 0.3, 0.3, 0.4));
    c(J(5), h.scale(5.5, 0.9, 5.5), O(0.25, 0.25, 0.25, 0.4));
    Kb(y(0, 1.5, -1).rotate(0, 180));
    ob(4, f => {
      U("MODEL_ID_GATE" + f);
      ob(7, q => c(D(J(9, 1), y((2 < f ? 3.5 : 4) * (q / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), O(0.3, 0.3, 0.38),),),);
    });
    U("MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR");
    c(z);
    U("MODEL_ID_DONUT_PAD");
    c(J(15, 1), y(-7.5).rotate(0, 90).scale(3, 2.3, 3), O(0.4, 0.4, 0.4, 0.3));
    c(J(10), y(-7.5).rotate(0, 90).scale(2, 2.5, 2), O(0.3, 0.8, 0.7, 0.3));
    c(J(5), y(-7.5).rotate(0, 90).scale(1, 3), O(0.5, 0.5, 0.5, 0.5));
    Kb(y(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(m, h.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(X(D(J(10), h.scale(6, 2, 6), O(0.1, 0.6, 0.5, 0.3)), D(J(10), h.scale(3.3, 6, 3.3), O(0.1, 0.6, 0.5, 0.5)),),);
    Qb(y(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    U("MODEL_ID_PENDULUMS");
    c(J(3), y(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), O(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(J(6), y(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), O(0.7, 0.7, 0.7, 0.4),);
      c(J(), y(0, 6.2, f + 95).scale(0.5, 11, 0.5), O(0.5, 0.3, 0.3, 0.4));
    });
    U("MODEL_ID_ROTATING_PLATFORM0");
    c(X(D(J(45, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)), D(J(), y(0, 0, -5.5).scale(1.5, 3, 2.7), O(0.45, 0.45, 0.45, 0.2),),),);
    c(J(8), y(0, 2).scale(3, 1.5, 3).rotate(0, 22), O(0.7, 0.7, 0.7, 0.1));
    c(J(5), y(0, 2).scale(1, 2), O(0.3, 0.3, 0.3, 0.2));
    Qb(y(0, 3), ...rb(14).map(({x:f, z:q}) => [5.6 * f, 5.6 * q, 2,]),);
    U("MODEL_ID_ROTATING_PLATFORM1");
    [-1, 1,].map(f => c(m, h.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    c(X(D(J(28, 1), y(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), D(J(), h.scale(9, 5, 2), O(0.3, 0, 0, 0.3)),),);
    c(D(J(28, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(D(J(5), y(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    U("MODEL_ID_ROTATING_PLATFORM2");
    c(X(D(J(28, 1), y(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), D(J(), y(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)), D(J(), y(0, 0, 7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),),);
    c(D(J(28, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(D(J(5), y(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    U("MODEL_ID_ROTATING_PLATFORM3");
    c(X(D(J(28, 1), y(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), D(J(), y(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)), D(J(), y(0, 0, -7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),),);
    c(D(J(28, 1), h.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(D(J(5), y(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    ob(2, f => {
      U("MODEL_ID_BOAT" + f);
      c(X(D(J(30, 1, 1.15, 1), y(0, -3).scale(3.5, 1, 3.5), O(0.7, 0.4, 0.25, 0.7),), D(J(30, 1, 1.3, 1), y(0, -2.5).scale(2.6, 1, 3), O(0.7, 0.4, 0.25, 0.2),), D(J(), y(4, -1.2).scale3d(2), O(0.7, 0.4, 0.25, 0.3)),),);
      Kb(y(0, -3, 4));
    });
    for (z = 0; 16 > z; ++z) {
      U("MODEL_ID_LEVER" + z), c(J(6, 1).slice(0, -1), h.scale(0.12, 1.2, 0.12), O(0.3, 0.3, 0.5, 0.1)), c(J(9, 1), y(0, 0.8).scale(0.2, 0.3, 0.2), O(0.7, 1, 0.2)), c(J(3), y(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), O(0.2, 0.2, 0.2, 0.1));
    }
    U("MODEL_ID_PLAYER_BODY");
    c(vb(20), y(0, 1).scale3d(0.5), O(1, 0.3, 0.4));
    c(vb(30), h.scale(0.65, 0.8, 0.55), O(1, 0.3, 0.4));
    c(J(), y(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), O(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(m, h.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), O(1, 1, 0.8),);
      c(D(X(J(15, 1), D(J(), y(0, 0, 1).scale(2, 2, 0.5)),), h.rotate(-90, 0).scale(0.1, 0.05, 0.1), O(0.3, 0.3, 0.3),), y(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map((f, q) => {
      U("MODEL_ID_PLAYER_LEG" + q);
      c(J(20, 1), y(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), O(1, 0.3, 0.4));
    });
    U("MODEL_ID_SOUL_COLLISION");
    c(J(6, 1).slice(0, -1), h.scale(0.77, 1, 0.77), O(1, 0.3, 0.5));
    U("MODEL_ID_SOUL");
    c(vb(28, 22, (f, q, H) => {
      var P = q / 22, M = f * Math.PI * 2 / 28, n = Math.sin(P ** 0.6 * Math.PI / 2);
      f = P * P * Math.sin(f * Math.PI * 0.5) / 4;
      return 21 < q ? {x:H.A = 0, y:-0.5, z:0,} : {x:Math.cos(M) * n, y:Math.cos(P * Math.PI) - P - f, z:Math.sin(M) * n + Math.sin(f * Math.PI * 2) / 4,};
    }), h.scale(0.7, 0.7, 0.7), O(1, 1, 1),);
    [-1, 1,].map(f => c(vb(10), y(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});

