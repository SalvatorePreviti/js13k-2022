let aa, ba, ca, ea, fa, ha, ia, la, ma, na, pa, qa, c, ra, ta, ua, va, wa, xa, d = 0, ya = 0, za = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 14, Ja = 0.1;
const Ka = Math.PI / 180, e = [], h = [], La = [], Ma = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Na = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Oa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Pa = 0, Ta = 180, Ua = 0, Va = 0, Wa = 0;
const Xa = NO_INLINE(b => 0 > b ? -b : b), Ya = NO_INLINE((b, a) => b < a ? b : a), Za = NO_INLINE((b, a) => a < b ? b : a), $a = (b, a) => Xa(b) > a ? b : 0, ab = (b, a = 0, g = 1) => b < a ? a : g < b ? g : b, bb = b => Math.atan2(Math.sin(b * Ka), Math.cos(b * Ka)) / Ka, cb = (b, a, g) => b + (2 * (a = (a - b) % 360) % 360 - a) * ab(g) || 0, db = (b, a, g) => (0 < g ? 1 > g ? b + (a - b) * g : a : b) || 0, eb = (b, a) => (b = ab(b), db(b, 1 - b, a)), fb = (b, a, g = 0) => (b * b + a * a + g * 
g) ** 0.5, hb = (b, a = gb, g = 0,) => (g *= 16, a[g++] = b.m11, a[g++] = b.m12, a[g++] = b.m13, a[g++] = b.m14, a[g++] = b.m21, a[g++] = b.m22, a[g++] = b.m23, a[g++] = b.m24, a[g++] = b.m31, a[g++] = b.m32, a[g++] = b.m33, a[g++] = b.m34, a[g++] = b.m41, a[g++] = b.m42, a[g++] = b.m43, a[g] = b.m44, a), ib = (b = l, a = v,) => (a.m11 = b.m11, a.m12 = b.m12, a.m13 = b.m13, a.m14 = b.m14, a.m21 = b.m21, a.m22 = b.m22, a.m23 = b.m23, a.m24 = b.m24, a.m31 = b.m31, a.m32 = b.m32, a.m33 = b.m33, a.m34 = 
b.m34, a.m41 = b.m41, a.m42 = b.m42, a.m43 = b.m43, a.m44 = b.m44, a), nb = (b = 0, a = 0, g = 0, k = 1) => {
  jb = v.m11 * b + v.m21 * a + v.m31 * g + v.m41 * k;
  kb = v.m12 * b + v.m22 * a + v.m32 * g + v.m42 * k;
  lb = v.m13 * b + v.m23 * a + v.m33 * g + v.m43 * k;
  mb = v.m14 * b + v.m24 * a + v.m34 * g + v.m44 * k;
};
var jb, kb, lb, mb;
const z = NO_INLINE((b, a, g) => l.translate(b, a, g)), ob = (b, a) => Array.from(Array(b), (g, k) => a(k)), pb = (b, a, g) => (b.C = g, b.u = a, b), qb = (b, a, g = b.u,) => (ib(a), pb(b.map(({x:k, y:q, z:m}) => (nb(k, q, m), {x:jb, y:kb, z:lb,})), g, b.C,)), C = (b, a, g) => b.map(k => qb(k, a, g)), rb = (b, a = 0) => ob(b, g => {
  const k = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:0.01 > Xa(k) ? k : 0 > k ? k - a : k + a,};
}), sb = (b, a, g) => b.map((k, q, {length:m}) => pb([k, a[m - q - 1], a[m - (q + 1) % m - 1], b[(q + 1) % m],], b.u, g,)), L = (b, a, g = 0, k,) => (b = b ? rb(b, k) : Ma, k = qb(b, z(0, 1).scale3d(0 < g ? g : 1)), b = qb(b, z(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...sb(b, k, a), k, b,]), tb = (b, a = b, g = (k, q) => (q *= Math.PI / a, {x:Math.cos(k *= 2 * Math.PI / b) * Math.sin(q), y:Math.cos(q), z:Math.sin(k) * Math.sin(q),})) => {
  const k = [];
  for (let q = 0; b > q; q++) {
    for (let m = 0; a > m; m++) {
      const w = pb([], 0, 1);
      k.push(w);
      w.push(g(q, m, w));
      m && w.push(g((q + 1) % b, m, w));
      a - 1 > m && w.push(g((q + 1) % b, m + 1 % a, w));
      w.push(g(q, m + 1 % a, w));
    }
  }
  return k;
}, wb = NO_INLINE(b => 1 - Math.exp(-za * b)), O = NO_INLINE((b, a, g) => db(b, a, wb(g))), xb = (b, a, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (a + b) / (b - a), -1, 0, 0, 2 * a * b / (b - a), 0,]), yb = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, zb = b => Math.sin(b * Math.PI * 2), Ab = b => 0.5 > b % 1 ? 1 : -1, Db = b => b % 1 * 2 - 1, Eb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Fb = b => {
  let a = 0;
  const g = () => {
    let m = 0;
    const w = R => {
      let T, da, Qa, ja = 0, ka = 0;
      const Z = [], sa = new Int32Array(768 * R), ac = 2 ** (u - 9) / R, bc = Math.PI * 2 ** (t - 8) / R, Bb = B * R & -2;
      for (let ub = 0; 11 >= ub; ++ub) {
        for (let vb = 0, Mb = +"000001234556112341234556011111111112011111111112000001111112"[12 * a + ub]; 32 > vb; ++vb) {
          const Nb = (32 * ub + vb) * R;
          for (var oa = 0; 4 > oa; ++oa) {
            if (T = 0, Mb && (T = E[Mb - 1].charCodeAt(vb + 32 * oa) - 40, T += 0 < T ? 106 : 0), T) {
              var Aa;
              if (!(Aa = Z[T])) {
                Aa = T;
                let W = void 0, Ba = void 0;
                var Ob = T;
                let cc = 0, dc = 0;
                const ec = 2 > a ? Db : zb, fc = 2 > a ? 1 > a ? Ab : Eb : zb, Pb = new Int32Array(S + p + N);
                for (let Ra = 0, Cb = 0; S + p + N > Ra; ++Ra, ++Cb) {
                  let Sa = 1;
                  S > Ra ? Sa = Ra / S : S + p > Ra || (Sa = (1 - (Sa = (Ra - S - p) / N)) * 3 ** (-x / 16 * Sa));
                  0 > Cb || (Cb -= 4 * R, Ba = 0.00396 * 2 ** ((Ob + r - 256) / 12), W = 0.00396 * 2 ** ((Ob + J - 256) / 12) * (1 + (a ? 0 : 0.0072)));
                  Pb[Ra] = 80 * (ec(cc += Ba * Sa ** (M / 32)) * f + fc(dc += W * Sa ** (F / 32)) * D + (V ? (2 * Math.random() - 1) * V : 0)) * Sa | 0;
                }
                Aa = Z[Aa] = Pb;
              }
              for (let W = 0, Ba = 2 * Nb; Aa.length > W; ++W, Ba += 2) {
                sa[Ba] += Aa[W];
              }
            }
          }
          for (let W, Ba = 0; R > Ba; ++Ba) {
            Aa = 0;
            oa = 2 * (Nb + Ba);
            var Ca = (((W = sa[oa]) || Qa) && (da = 0.00308 * G, 1 !== a && 4 !== a || (da *= Math.sin(ac * oa * Math.PI * 2) * H / 512 + 0.5), da = 1.5 * Math.sin(da), ja += da * ka, Ca = (1 - I / 255) * (W - ka) - ja, ka += da * Ca, W = 4 === a ? ka : 3 === a ? Ca : ja, a || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= K / 32, Qa = 1e-5 < W * W, Ca = Math.sin(bc * oa) * n / 512 + 0.5, Aa = W * (1 - Ca), W *= Ca), oa < Bb || (Aa += sa[1 + oa - Bb] * 
            A / 255, W += sa[oa - Bb] * A / 255), m + oa >> 1);
            k[Ca] += (sa[oa] = Aa) / 65536;
            q[Ca] += (sa[++oa] = W) / 65536;
          }
        }
      }
      m += 768 * R;
    }, E = Na[a], [f, r, M, D, J, F, V, S, p, y, x, u, G, I, K, n, t, A, B, H] = Oa[a], N = 4 * y ** 2;
    w(5513);
    w(4562);
    w(3891);
    yb(5 > ++a ? g : b);
  }, k = (ca = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), q = ca.getChannelData(1);
  yb(g);
}, Gb = () => {
  let b, a, g, k, q, m, w, E, f, r, M, D, J, F, V, S, p = !0;
  const y = [], x = () => {
    b4.innerHTML = "Music: " + p;
    S && (ba || !p ? S.disconnect() : S.connect(V.destination));
  }, u = () => {
    const n = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ia = [xb(0.3, 55, n, 1.732051), xb(55, 181, n, 1.732051),];
    ha = xb(0.3, 181, n, 1.732051);
    k = E = void 0;
    y.length = ea = F = D = J = Da = Ea = 0;
    document.hidden && G(!0);
  }, G = n => {
    if (ba !== n) {
      if (ba = n, u(), document.body.className = n ? "l m" : "l", n) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      x();
    }
  }, I = n => {
    try {
      V || (V = new AudioContext(), (S = V.createBufferSource()).buffer = ca, S.loop = !0, S.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    G(!1);
    fa = n;
  }, K = (n, t) => n.buttons[t]?.pressed || 0 < n.buttons[t]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    I();
  };
  b2.onclick = () => {
    I(1);
  };
  b5.onclick = () => G(!0);
  b4.onclick = () => {
    p = !p;
    x();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.F = "", location.reload());
  };
  onclick = n => {
    if (!ba && (n.target === hC && (ea = 1), fa)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = n => {
    let t;
    n.repeat || (t = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[n.code], (y[t] = !!n.type[5] && !0) && (0 === t && (ea = 1), 1 === t && G(!0)));
  };
  onmousemove = ({movementX:n, movementY:t}) => {
    fa && (n || t) && (Ta += 0.1 * n, Pa += 0.1 * t);
  };
  hC.ontouchstart = n => {
    if (!ba) {
      for (let {pageX:t, pageY:A, identifier:B} of n.changedTouches) {
        fa && t > hC.clientWidth / 2 ? void 0 === E && (f = 0, m = t, w = A, E = B, M = Pa, r = Ta) : void 0 === k && (q = 0, a = t, g = A, k = B);
      }
      b = ya;
    }
  };
  hC.ontouchmove = n => {
    if (!ba) {
      for (let {pageX:N, pageY:R, identifier:T} of n.changedTouches) {
        var t, A, B, H;
        E === T && (Pa = M + (R - w) / 2.3, Ta = r + (N - m) / 2.3, f = 1);
        k === T && (T = (a - N) / 19, t = Xa(T), A = (g - R) / 19, B = Xa(A), (H = 0.3 < Za(t, B)) && (q = 1), D = (H && 0.2 < t) * ab(T, -1), J = (H && 0.2 < B) * ab(A, -1), 2 < t && (a = 19 * (0 > T ? -1 : 1) + N), 2 < B && (g = 19 * (0 > A ? -1 : 1) + R));
      }
    }
  };
  hC.ontouchend = n => {
    let t;
    document.activeElement === document.body && n.preventDefault();
    for (const A of n.changedTouches) {
      A.identifier === E ? (E = void 0, f || (t = 1), f = 0) : A.identifier === k ? (k = void 0, J = D = 0, q || (t = 1), q = 0) : t = 1;
    }
    n.target === hC && t && b && 0.02 < (n = ya - b) && 0.7 > n && (ea = 1);
  };
  la = () => {
    Da = J + (y[4] ? 1 : 0) - (y[5] ? 1 : 0);
    Ea = D + (y[2] ? 1 : 0) - (y[3] ? 1 : 0);
    let n = navigator.getGamepads()[0];
    n && (fa && (Pa += za * $a(n.axes[3], 0.3) * 80, Ta += za * $a(n.axes[2], 0.3) * 80), Da += K(n, 12) - K(n, 13) - $a(n.axes[1], 0.2), Ea += K(n, 14) - K(n, 15) - $a(n.axes[0], 0.2), K(n, 9) && G(!0), (n = K(n, 3) || K(n, 2) || K(n, 1) || K(n, 0)) && !F && (ea = 1), F = n);
  };
  document.onvisibilitychange = onblur = onresize = u;
  G(!0);
}, Hb = (b, a) => {
  1 / 0 > Ja && (Ja = d + a, h4.innerHTML = b);
}, Ib = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ma = La.reduce((b, a) => b + a.i, 0)] + " / XIII";
}, Jb = () => {
  localStorage.F = JSON.stringify([h.map(b => b.i), La.map(b => b.i), Ia, qa, d,]);
}, P = NO_INLINE((b, a, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * a << 8 | 255 * b), Q = NO_INLINE(() => {
  const b = [];
  c = (a, g = l, k) => b.push(...C(a, g, k));
  e.push({m:new DOMMatrix(), o:b,});
}), Kb = b => {
  const a = () => {
    a.g = O(a.g, a.i, 4);
    a.h = O(a.h, a.i, 1);
    ib(g).multiplySelf(b);
    ea && 3 > (nb(), fb(Ua - jb, Va - kb, Wa - lb,)) ? a.i ? 0.7 < a.g && (a.i = 0, Ia = k, Hb("* click *", 1), Jb()) : 0.3 > a.g && (a.i = 1, Ia = k, Hb("* click *", 1), Jb()) : a.i && 0.8 < a.g && 14 === k && (a.i = 0, 13 > ma ? Hb("Not leaving now, there are souls to catch!", 3) : na || (Hb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), na = 1));
    v.rotateSelf(50 * a.g - 25, 0).translateSelf(0, 1).m44 = a.g;
  }, g = e.at(-1).m, k = h.length;
  a.m = g;
  a.G = b;
  h.push(a);
  c(L(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
  c(L(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
  c(L(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), P(0.5, 0.5, 0.4));
}, Lb = (b, ...a) => {
  let g, k, q, m, w = 0, E = 0, f = 1, r = -1;
  const M = () => {
    if (!M.i) {
      let x, u, G, I, K, n = 1, t = 1 / 0;
      for (let A = 0; a.length > A; A++) {
        let B = a[A], H = fb(J - B[0], F - B[1]);
        n = Ya(n, H / B[2]);
        0 > (H -= B[2]) ? x = 1 : t > H && (t = H, D = B);
      }
      x || (u = J - D[0], G = F - D[1], I = fb(u, G), K = Math.atan2(-G, u), f && (m = ab(m / (1 + Math.random())), E = (Math.random() - 0.5) * Math.PI / 2), K += E, r = -Math.cos(K), w = Math.sin(K), 0.1 < I && (I = Ya(I, D[2]) / I, J = u * I + D[0], F = G * I + D[1]));
      f = x;
      m = O(m, 3 + 6 * (1 - n), 3 + n);
      V = O(V, J = O(J, J + r, m), m);
      S = O(S, F = O(F, F + w, m), m);
      g = cb(g, Math.atan2(V - k, S - q) / Ka - 180, wb(3));
      ib(p).multiplySelf(b).translateSelf(k = V, 0, q = S).rotateSelf(0, g, 7 * Math.sin(1.7 * d),);
      1.6 > (nb(), fb(Ua - jb, Va - kb, Wa - lb,)) && (M.i = 1, Hb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ma] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Ib(), Jb());
    }
    M.i && ib(e[35].m).translateSelf(y % 4 * 1.2 - 1.7 + Math.sin(d + y) / 7, -2, 1.7 * (y / 4 | 0) - 5.5 + Xa(y % 4 - 2) + Math.cos(d / 1.5 + y) / 6,);
  };
  let D = a[0], [J, F] = D, [V, S] = D;
  const p = e.at(-1).m, y = La.length;
  La.push(M);
}, Qb = ({x:b, y:a, z:g}, k) => b * k.x + a * k.y + g * k.z, Rb = b => {
  let a, g = 0, k = 0, q = 0, m = b.at(-1);
  for (a of b) {
    g += (m.y - a.y) * (m.z + a.z), k += (m.z - a.z) * (m.x + a.x), q += (m.x - a.x) * (m.y + a.y), m = a;
  }
  return a = fb(g, k, q), g /= a, k /= a, q /= a, {x:g, y:k, z:q, w:g * m.x + k * m.y + q * m.z,};
}, Sb = (b, a) => {
  var g, k, q, m = a.B;
  for (var w = 0; m.length > w; ++w) {
    if (-0.00008 > (q = Qb(b, m[w]) - b.w) ? k = a : 8e-5 < q && (g = a), k && g) {
      k = [];
      q = [];
      let {B:E, v:f} = a;
      m = E.at(-1);
      w = Qb(b, m) - b.w;
      for (const r of E) {
        g = Qb(b, r) - b.w, 8e-5 > w && q.push(m), -0.00008 < w && k.push(m), (8e-5 < w && -0.00008 > g || -0.00008 > w && 8e-5 < g) && (w /= g - w, m = {x:m.x + (m.x - r.x) * w, y:m.y + (m.y - r.y) * w, z:m.z + (m.z - r.z) * w,}, k.push(m), q.push(m)), m = r, w = g;
      }
      return {l:2 < k.length && {B:pb(k, E.u, E.C), v:f, A:a,}, j:2 < q.length && {B:pb(q, E.u, E.C), v:f, A:a,},};
    }
  }
  return {l:g, j:k,};
}, Tb = (b, a, g = Rb(a.B)) => {
  let k, q;
  return b ? ({l:k, j:q} = Sb(b, a), k || q || b.o.push(a), k && (b.l = Tb(b.l, k, g)), q && (b.j = Tb(b.j, q, g))) : b = {x:g.x, y:g.y, z:g.z, w:g.w, o:[a,], l:0, j:0,}, b;
}, Ub = (b, a, g) => {
  const k = [], q = (m, w) => {
    let {l:E, j:f} = Sb(m, w);
    E || f || (0 < g * Qb(m, a) ? E = w : f = w);
    E && (m.l ? q(m.l, E) : k.push(E));
    f && m.j && q(m.j, f);
  };
  for (const m of a.o) {
    q(b, m);
  }
  return k;
}, Vb = (b, a) => b && (a(b), Vb(b.l, a), Vb(b.j, a)), Wb = b => (Vb(b, a => {
  const g = a.j;
  a.j = a.l;
  a.l = g;
  a.x *= -1;
  a.y *= -1;
  a.z *= -1;
  a.w *= -1;
  for (const k of a.o) {
    k.v = !k.v;
  }
}), b), Xb = b => b.length ? b.reduce((a, g) => Tb(a, {B:g, v:0, A:0,}), 0) : b, Yb = (...b) => b.reduce((a, g) => {
  const k = [];
  if (a = Xb(a), g) {
    g = Xb(g);
    Vb(a, q => q.o = Ub(g, q, 1));
    Vb(g, q => k.push([q, Ub(a, q, -1),]));
    for (let [q, m] of k) {
      for (const w of m) {
        Tb(a, w, q);
      }
    }
  }
  return a;
}), U = (b, ...a) => {
  const g = m => {
    let w;
    return m.A && ((w = k.get(m.A)) ? (q.delete(w), m = g(m.A)) : k.set(m.A, m)), m;
  }, k = new Map(), q = new Map();
  return b = Wb(Yb(Wb(Xb(b)), ...a)), Vb(b, m => {
    for (const w of m.o) {
      q.set(g(w), w.v);
    }
  }), Array.from(q, ([{B:m}, w]) => {
    const E = m.map(({x:f, y:r, z:M}) => ({x:f, y:r, z:M,}));
    return pb(w ? E.reverse() : E, m.u, m.C);
  });
}, X = (b, a = 0, g = 0) => {
  const k = ib(l, e[++ra].m);
  return k.m41 = b, k.m42 = a, k.m43 = g, k;
}, gc = () => {
  let b, a, g, k, q, m, w, E, f, r, M, D, J, F = 0, V = 0, S = 0, p = 0, y = 1, x = 2, u = 15;
  const G = () => ib((x ? h[Ia] : e[28 !== F ? F : 0]).m,), I = t => {
    1 < x ? (ib(h[Ia].m).multiplySelf(h[Ia].G), nb(0, 0.9 < pa ? 15 : 1, -2.4)) : (G(), nb(V, S, p));
    t && (q = (jb - Ua) / za, m = (lb - Wa) / za);
    Ua = jb;
    Va = kb;
    Wa = lb;
  }, K = () => {
    var t = 0, A = 0, B = 0, H = 0, N = 0, R = 0, T = -1;
    for (var da = 0; 36 > da; ++da) {
      var Qa = 512 * da;
      for (var ja = 96; 416 > ja; ja += 4) {
        for (var ka = 0; 2 > ka; ++ka) {
          var Z = Zb[Qa + ja + ka];
          const sa = Zb[Qa + ja + ka + 2];
          Z > H && (H = Z);
          Z + sa && (0 > T || T === da) && (T = da, sa === r ? ++t : A && A !== sa || (A = sa, ++B));
        }
      }
    }
    r = 0 > T ? 0 : B > 2 * t ? A : r;
    for (t = 36; 128 > t; ++t) {
      da = T = B = A = 0;
      Qa = 512 * t;
      for (ja = 0; 128 > ja; ++ja) {
        ka = Qa + 4 * ja, Z = Zb[ka], 64 > ja ? Z > A && (A = Z) : Z > B && (B = Z), (Z = Zb[2 + ka]) > T && (T = Z), Z = Zb[1 + ka], 64 < ja ? Z > A && (A = Z) : Z > B && (B = Z), (Z = Zb[3 + ka]) > da && (da = Z);
      }
      (B -= A) * B > N * N && (N = B);
      (da -= T) * da > R * R && (R = da);
    }
    N *= 0.7;
    E = ab(1 - 0.01 * Za(Xa(N), Xa(R)), 0.3);
    N /= 255;
    H /= 255;
    R /= 255;
    G().invertSelf();
    nb(N, H, R, 0);
    V += jb;
    S += H;
    p += lb;
    I();
  }, n = (t, A, B, H) => db(t, A, y || (ab(Xa(A - t) ** 0.5 - B) + 1 / 7) * wb(1.5 * H));
  ta = () => {
    I(r);
    $b.r9r(0, 0, 128, 128, 6408, 5121, Zb);
    NO_INLINE(K)();
    !x && r === F || (F = r, G().invertSelf(), nb(Ua, Va, Wa), V = jb, S = kb, p = lb, x = x && (r ? 0 : 1));
    (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (x = 2);
    1 === r && (h[15].i = -15 > Ua && 0 > Wa ? 1 : 0);
    k = O(k, ua * (30 < r && 35 > r), 2,);
    M = n(M, Ua, 0.5, 1);
    D = n(D, f = db(O(f, Va, 2), Va, x || 8 * Xa(f - Va),), 2, 1,);
    J = n(J, Wa, 0.5, 1);
    fa ? (t = x + wb(18), Fa = db(Fa, Ua, t), Ha = db(Ha, Wa, t), Ga = db(Ga, 1.6 + f, t), Ta = bb(Ta)) : (Fa = n(Fa, M, 1, 2 + k,), Ha = n(Ha, J + -18 + 5 * k, 1, 2 + k,), Ga = n(Ga, Za(D + ab((-60 - Wa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), t = Ya(-6, -Xa(J - Ha)), A = M - Fa, Ta = cb(Ta, 90 - bb(Math.atan2(t, A) / Ka), y + wb(10),), Pa = cb(Pa, 90 - Math.atan2(fb(t, A), Ga - D) / Ka, y + wb(10),));
    Pa = ab(Pa, -87, 87);
    y = 0;
    var t = ab(Da, -1), A = ab(Ea, -1), B = $a(fb(t, A) ** 0.5, 0.1), H = Math.atan2(t, A);
    B && (b = 90 - H / Ka);
    a = cb(a, b, wb(8));
    g = O(g, B, 10);
    X(Ua, 0.06 * E * g * Math.cos(18.2 * d) + f, Wa,).rotateSelf(0, a);
    for (var N = 0; 2 > N; ++N) {
      const R = 9.1 * d - Math.PI * N;
      ib(e[37].m, X(0)).translateSelf(0, g * ab(0.45 * Math.sin(R - Math.PI / 2)),).rotateSelf(g * Math.sin(R) * 0.25 / Ka, 0);
    }
    u = r ? 5 : O(u, x ? 13 : 19 - 2 * Ya(0, Va + 10), 2.2);
    q = r || x ? 0 : O(q, 0, 3);
    m = r || x ? 0 : O(m, 0, 3);
    t = (w = x ? 0 : O(w, r ? 7 * ab(2 * B) * E : 0, r ? 9 : 1,)) * B * Xa(t) * Math.sin(H);
    A = w * B * Xa(A) * Math.cos(H);
    H = fa ? (180 + Ta) * Ka : 0;
    B = za * (q + (A * Math.cos(H) - Math.sin(H) * t));
    N = za * -u;
    t = za * (m + (A * Math.sin(H) + Math.cos(H) * t));
    G().invertSelf();
    nb(B, N, t, 0);
    V += jb;
    S += N;
    p += lb;
    I();
  };
}, hc = (b, a) => {
  const g = void 0 === a ? 41 : 42;
  ba ? 1100 < hC.width && b.d97(4, e[39].D - e[37].s, 5123, 2 * e[37].s) : (b.das(4, e[g].D - e[g].s, 5123, 2 * e[g].s, La.length,), b.das(4, e[40].D - e[40].s, 5123, 2 * e[40].s, h.length,), b.d97(4, (a ? e[39].D : e[37].s) - 3, 5123, 6));
}, l = new DOMMatrix(), v = new DOMMatrix(), gb = new Float32Array(16), ic = new Float32Array(760), Zb = new Uint8Array(65536), jc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hD" height="128" width="128"></canvas>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: max(780px, 50vw);\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4,\n#hD {\n  display: none;\n}\n'), 
"data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), Y = hC.getContext("webgl2", {powerPreference:"high-performance",}), $b = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, antialias:!1,});
for (const b in $b) {
  [Y, $b,].map(a => a[b[0] + [...b,].reduce((g, k, q) => (g * q + k.charCodeAt(0)) % 434, 0).toString(36)] = a[b]);
}
yb(() => {
  let b = 0;
  const a = () => {
    if (2 == ++b) {
      const k = [{}, {}, {}, {}, {}, {}, {}, {},], q = (p, y, x = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
      ) => {
        const u = {}, G = (K, n,) => (n = p.c6x(n), p.s3c(n, K), p.c6a(n), n), I = p.c1h();
        return p.abz(I, G(x, 35633)), p.abz(I, G(y, 35632)), p.l8l(I), K => K ? u[K] || (u[K] = p.gan(I, K)) : p.u7y(I);
      }, m = p => {
        requestAnimationFrame(m);
        var y = (p - (aa || p)) / 1e3;
        if (ya += y, d += za = ba ? 0 : Ya(0.055, y), aa = p, 0 < za) {
          y = (u, G, I) => X(u + Math.sin(d + 2) / 5, G + Math.sin(0.8 * d) / 5, I).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          qa = O(qa, h[15].h, 0.2 + 0.3 * Xa(2 * h[15].h - 1),);
          pa = na ? (fa = 0, O(pa, -9, 0.015)) : O(pa, ab(d / 3), 1);
          la();
          p = (ra = 1, ua = eb(h[13].g, h[8].g), xa = db(O(xa, 0, 1), bb(xa + 60 * za), h[2].g - h[3].h,), va = db(O(va, 0, 5), bb(va + 56 * za), ua,), wa = db(O(wa, 0, 4), bb(wa + 48 * za), ua,), X(0, 270 * (h[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - h[10].g),), Ya(1 - h[11].h, h[10].h));
          var x = (X(p * Math.sin(0.6 * d + 1.2) * 12, 0, 35), X(p * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), X(p * Math.sin(0.6 * d) * 12, 0, 45), X(9.8 * (1 - p)), p = ab(1 - 5 * p) * eb(h[11].g, h[2].g), X(0, p * Math.sin(1.35 * d) * 4), X(0, 0, p * Math.sin(0.9 * d) * 8), X(0, -6.5 * h[11].h), p = eb(h[4].h, h[3].h), X(0, p * Math.sin(d) * 5 + 3.5 * (1 - Za(h[3].g, h[4].g)),), X(0, p * Math.sin(d + 3) * 6, p * Math.sin(0.6 * d + 1) * 6,), X(0, -7.3 * h[4].h), p = eb(h[6].g, h[7].g), X(0, -2, 10 - 
          8.5 * p * Xa(Math.sin(1.1 * d))), X(0, -2, 10 - 8.5 * p * Xa(Math.sin(2.1 * d))), X(0, -2, 10 - 8.5 * Za(p * Xa(Math.sin(1.5 * d)), (1 - h[6].g) * (1 - p)),), eb(h[5].h, h[13].h));
          for (p = 0; 4 > p; p++) {
            X((2 < p ? 2 * (1 - x) + x : 0) - 100, x * Math.sin(1.3 * d + 1.7 * p) * (3 + p / 3) + 0.7, 115 - 7 * (1 - h[5].h) * (1 - h[13].h) * (1 & p ? -1 : 1) + Za(0.05, x) * Math.cos(1.3 * d + 7 * p) * (4 - 2 * (1 - p / 3)),);
          }
          p = eb(h[8].h, h[9].h);
          for (let u = 0; 3 > u; ++u) {
            X(0, p * Math.sin(1.5 * d + 1.5 * u) * 4 + (u ? 0 : 3 * (1 - h[8].h) * (1 - h[9].h)),);
          }
          p = eb(eb((h[9].g + h[9].h) / 2, h[8].h), (h[12].g + h[12].h) / 2,);
          X(0, 16 * p, 95 + 8.5 * ab(2 * p - 1));
          X(0, -4.7 * h[0].g, -15);
          X(0, -4.7 * h[10].g, 15);
          X(-99.7, -1.9 - 5.5 * h[3].g, 63.5);
          X(-100, 0.6 - 5.8 * h[13].g, 96.5);
          X(-75, 3 * (1 - h[2].h) * (1 - h[3].g), 55).rotateSelf(180 * (1 - h[2].h) + xa, 0,);
          X(2.5 * (1 - x) - 139.7, -3 * (1 - h[5].g) - x * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * x), 0);
          X(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          X(-81, 0.6, 106).rotateSelf(0, 40 + va);
          X(-65.8, 0.8, 106).rotateSelf(0, wa);
          X(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
          X(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
          y(-12, 4.2, 40 * pa - 66);
          y(-123, 1.4, 55 - 65 * qa);
          for (y = 0; 13 > y; ++y) {
            La[y](), hb(v, ic, 12 + y);
          }
          for (y = 0; 16 > y; ++y) {
            h[y](), hb(v, ic, 25 + y);
          }
          ta();
          for (y = 0; 12 > y; ++y) {
            hb(e[28 + y].m, ic, y);
          }
          for (let u, G = 0, I = 656; 26 > G; ++G, ++I) {
            u = e[2 + G].m, ic[I++] = u.m41, ic[I++] = u.m42, ic[I++] = u.m43;
          }
          $b.cbf(!0, !0, !0, !0);
          $b.c4s(16640);
          $b.u3a(J("j"), ic);
          $b.cbf(!0, !1, !0, !1);
          $b.uae(J("b"), !1, hb(ib().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa,),),);
          hc($b);
          $b.c4s(256);
          $b.cbf(!1, !0, !1, !0);
          $b.uae(J("b"), !1, hb(ib().translateSelf(-Ua, -Va, -Wa - 0.3,),),);
          hc($b);
          $b.f1s();
          ea = 0;
        }
        D();
        Y.u3a(D("j"), ic);
        Y.b6o(36160, M);
        Y.v5y(0, 0, 2048, 2048);
        Y.ubh(D("g"), 4);
        Y.ubh(D("h"), 4);
        Y.uae(D("a"), !1, hb(l));
        V(54.7);
        hc(Y, !fa);
        S(126);
        hc(Y, !fa);
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.c4s(16640);
        y = Fa;
        x = Ga;
        p = Ha;
        ba ? (ib().rotateSelf(0, 40 * Math.sin(ya) - 80, -8), hb(v, ic, 9), hb(v, ic, 10), hb(v, ic, 11), ib(ha).invertSelf(), nb(3.6, 3.5), y = jb, x = kb, p = 5, ib(l, E).rotateSelf(-20, 0).invertSelf().translateSelf(-y, -x, -p,).rotateSelf(0, 99)) : ib(l, E).rotateSelf(-Pa, -Ta).invertSelf().translateSelf(-y, -x, -p);
        Y.ubh(D("g"), 0);
        Y.ubh(D("h"), 1);
        Y.ubu(D("k"), y, x, p);
        Y.uae(D("a"), !1, hb(ha));
        Y.uae(D("b"), !1, hb(E));
        Y.uae(D("i"), !1, f);
        hc(Y, !fa);
        F();
        Y.uae(F("b"), !1, hb(ib(E).invertSelf()));
        Y.ubu(F("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ya);
        Y.d97(4, 3, 5123, 0);
      }, w = new DOMMatrix(), E = new DOMMatrix(), f = new Float32Array(32), r = g, M = Y.c5w(), D = q(Y, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), J = q($b, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), F = q(Y, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [V, S] = ob(2, p => {
        const y = Y.c25();
        return Y.a4v(33984 + p), Y.b9j(3553, y), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), x => {
          let u = 0, G = 0, I = 0, K = 1 / 0, n = 1 / 0, t = 1 / 0, A = -1 / 0, B = -1 / 0, H = -1 / 0;
          Y.fas(36160, 36096, 3553, y, 0);
          Y.c4s(256);
          ib().scale3dSelf(x *= 1.1).multiplySelf(ib(ia[p], w).multiplySelf(E).invertSelf(),);
          for (let N = 0; 8 > N; ++N) {
            const R = k[N];
            nb(4 & N ? 1 : -1, 2 & N ? 1 : -1, 1 & N ? 1 : -1);
            u -= R.x = (0 | jb) / (x * mb);
            G -= R.y = (0 | kb) / (x * mb);
            I -= R.z = (0 | lb) / (x * mb);
          }
          ib().rotateSelf(298, 139).translateSelf(u / 8, G / 8, I / 8);
          for (x = 0; 8 > x; ++x) {
            const {x:N, y:R, z:T} = k[x];
            nb(N, R, T);
            A = Za(A, jb);
            B = Za(B, kb);
            H = Za(H, lb);
            K = Ya(K, jb);
            n = Ya(n, kb);
            t = Ya(t, lb);
          }
          x = 10 + p;
          t *= 0 > t ? x : 1 / x;
          H *= 0 < H ? x : 1 / x;
          Y.uae(D("b"), !1, hb(ib(l, w).scaleSelf(2 / (A - K), 2 / (B - n), 2 / (t - H),).translateSelf((A + K) / -2, (B + n) / -2, (t + H) / 2).multiplySelf(v), f, p,), 16 * p, 16,);
        };
      });
      Y.b6o(36160, M);
      Y.d45([0,]);
      Y.r9l(0);
      D();
      Y.ubh(D("q"), 2);
      F();
      Y.ubh(F("q"), 2);
      Y.a4v(33986);
      Y.b9j(3553, Y.c25());
      Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, r);
      Y.t2z(3553, 10241, 9987);
      Y.t2z(3553, 10240, 9729);
      Y.gbn(3553);
      Y.c5t(0, 0, 0, 1);
      Y.d4n(515);
      Y.e8z(2929);
      Y.e8z(2884);
      $b.e8z(2929);
      $b.e8z(2884);
      $b.v5y(0, 0, 128, 128);
      J();
      $b.uae(J("a"), !1, hb(xb(1e-4, 2, 1.2, 0.4)));
      NO_INLINE(Gb)();
      NO_INLINE(gc)();
      requestAnimationFrame(m);
    }
  }, g = new Image();
  g.onload = g.onerror = a;
  g.src = jc;
  NO_INLINE(Fb)(() => {
    yb(() => {
      let f = 0;
      const r = [], M = [], D = [], J = [], F = new Int32Array(8), V = new Map(), S = new Int32Array(F.buffer, 0, 5), p = new Float32Array(F.buffer);
      e.map((u, G) => {
        let I;
        const K = n => {
          let {x:t, y:A, z:B} = I[n], H = (p[0] = t, p[1] = A, p[2] = B, n = "" + (I.C ? S : F), V.get(n));
          return void 0 !== H ? (t = 3 * H, J[t] = (J[t++] + F[5]) / 2, J[t] = (J[t++] + F[6]) / 2, J[t] = (J[t] + F[7]) / 2) : (V.set(n, H = V.size), M.push(t, A, B, p[3]), D.push(F[4]), J.push(F[5], F[6], F[7])), H;
        };
        for (I of (p[3] = 40 < G ? -12 : 39 < G ? -25 : G, u.o)) {
          const {x:n, y:t, z:A} = Rb(I);
          F[4] = 0 | I.u;
          F[5] = 32767 * n;
          F[6] = 32767 * t;
          F[7] = 32767 * A;
          for (let B = 2, H = K(0), N = K(1); I.length > B; ++B) {
            r.push(H, N, N = K(B));
          }
        }
        u.o = 0;
        u.s = f;
        u.D = f = r.length;
      });
      [Y, $b,].map(u => {
        u.b11(34962, u.c1b());
        u.b2v(34962, new Float32Array(M), 35044);
        u.v7s(0, 4, 5126, !1, 0, 0);
        u.b11(34962, u.c1b());
        u.b2v(34962, new Int16Array(J), 35044);
        u.v7s(1, 3, 5122, !0, 0, 0);
        u.b11(34962, u.c1b());
        u.b2v(34962, new Uint32Array(D), 35044);
        u.v7s(2, 4, 5121, !0, 0, 0);
        u.b11(34963, u.c1b());
        u.b2v(34963, new Uint16Array(r), 35044);
        u.e3x(0);
        u.e3x(1);
        u.e3x(2);
      });
      let y = [], x = [];
      try {
        const [u, G, I, K, n] = JSON.parse(localStorage.F,);
        y = u;
        x = G;
        Ia = I;
        qa = K;
        d = n;
      } catch {
      }
      h.map((u, G) => u.g = u.h = u.i = 14 !== G && y[G] ? 1 : 0);
      La.map((u, G) => u.i = x[G] ? 1 : 0);
      Ib();
      pa = ma || 14 !== Ia ? 1 : 0;
      yb(a);
    });
    const k = f => z(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), q = f => U(C(L(), z(0, -f / 2).scale(6, f - 1, 2.2)), C(L(), z(0, -f / 2 - 6).scale(4, f - 3, 4)), C(L(28, 1), z(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), m = ob(11, f => sb(qb(rb(16), k(f), P(1, 1, 0.8, 0.2)).reverse(), qb(rb(16), k(f + 1), P(1, 1, 0.8, 0.2)), 1,)).flat(), w = [...C(L(), z(0, -3).scale(11, 1.4, 3), P(0.9, 0.9, 0.9, 0.2)), ...C(L(), z(0, -2.2).scale(7.7, 0.5, 4), P(0.5, 
    0.5, 0.5, 0.2)), ...ob(12, f => C(L(), l.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), P(0.6, 0.5, 0.3, 0.2),)).flat(), ...U(C(L(6), l.rotate(90).scale(6, 8, 6), P(0.3, 0.6, 0.6, 0.3)), C(L(4, 0, 0.01), z(0, 6).scale(12, 2, 0.75).rotate(0, 45), P(0.3, 0.6, 0.6, 0.3),), C(L(6), l.rotate(90).scale(5, 12, 5), P(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => C(L(5), z(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(0.3, 0.6, 0.6, 0.3),)),),], E = U(C(L(), z(0, -0.5, 1).scale(1.15, 1.2, 6.5), P(0.25, 
    0.25, 0.35, 0.3),), U(C(L(3), z(0, 0, -5.5).scale(3, 2), P(0.6, 0.3, 0.4, 0.3)), C(L(), z(0, 0, -3.65).scale(2.5, 3), P(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => C(L(), z(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), P(0.7, 0.2, 0, 0.3),)),);
    Q("MODEL_ID_SKY");
    c([Ma.slice(1),], z(-2).scale3d(3).rotate(90, 0));
    Q("MODEL_ID_STATIC_WORLD");
    Kb(z(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, r) => {
      c(L(), z(0, 0, r ? 22 : -23).scale(3, 1, 8), P(0.9, 0.9, 0.9, 0.2));
      c(L(), z(0, 6.3, f).scale(4, 0.3, 1), P(0.3, 0.3, 0.3, 0.4));
      c(L(), z(0, 1, f).scale(3, 0.2, 0.35), P(0.5, 0.5, 0.5, 0.3));
    });
    c(L(), z(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    c(L(), z(3, 1.5, -20).scale(0.5, 2, 5), P(0.7, 0.7, 0.7, 0.2));
    c(L(), z(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(0.75, 0.75, 0.75, 0.2),);
    c(L(5), z(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(0.6, 0.3, 0.3, 0.4));
    c(U(Yb(C(L(6, 0, 0, 0.3), z(8, -3, -4).scale(13, 1, 13), P(0.7, 0.7, 0.7, 0.2),), U(C(L(6, 0, 0, 0.3), z(0, -0.92).scale(13, 2, 13), P(0.8, 0.8, 0.8, 0.2),), C(L(), l.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), P(0.5, 0.5, 0.5, 0.5),),), C(L(), l.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), P(0.8, 0.2, 0.2, 0.5),), C(L(6), z(0, -8).scale(9, 8, 7), P(0.2, 0.1, 0.4, 0.5)),), C(L(5), l.scale(5, 30, 5), P(0.4, 0.2, 0.6, 0.5)), C(L(5, 0, 1.5), 
    z(0, 1).scale(4.5, 0.3, 4.5), P(0.7, 0.5, 0.9, 0.2),), C(L(6), z(15, -1.5, 4).scale(3.5, 1, 3.5), P(0.5, 0.5, 0.5, 0.5),),),);
    Kb(z(15, -2, 4));
    c(L(), z(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    Kb(z(-55, -1.1, 46).rotate(0, 90));
    c(L(7), z(-57, -2.6, 46).scale(4, 1, 4), P(0.8, 0.8, 0.8, 0.3));
    c(L(6), z(-61.3, -2.4, 49).scale(3, 1, 5), P(0.4, 0.6, 0.6, 0.3));
    c(w, z(-53, 0, 55));
    c(L(), z(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), P(0.7, 0.7, 0.7, 0.2),);
    c(L(3, 0, -0.5), z(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(0.8, 0.8, 0.8, 0.2),);
    c(U(Yb(C(L(), z(-100, -2.4, 55).scale(8, 0.9, 8), P(0.8, 0.8, 0.8, 0.2),), C(L(), z(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(0.8, 0.8, 0.8, 0.2),), C(L(), z(-100, -2.6, 70).scale(3, 1.1, 7), P(0.8, 0.8, 0.8, 0.2),), C(L(), z(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(0.8, 0.8, 0.8, 0.2),), C(L(6), z(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(0.6, 0.6, 0.6, 0.3),), C(L(), z(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(0.8, 0.8, 0.8, 0.2),), C(L(), z(-100, 0.42, 
    92).scale(3, 1.1, 4.1), P(0.8, 0.8, 0.8, 0.2),),), C(L(8), z(-100, -1, 55).scale(7, 0.9, 7), P(0.3, 0.3, 0.3, 0.4)), C(L(8), z(-100, -2, 55).scale(4, 0.3, 4), P(0.4, 0.4, 0.4, 0.5)), C(L(8, 0, -3.1), z(-100, -3, 55).scale(0.4, 1, 0.4), P(0.4, 0.4, 0.4, 0.5),),),);
    c(U(C(L(), z(-100, 1, 63).scale(7.5, 4), P(0.5, 0.5, 0.5, 0.4)), C(L(), z(-100, 0, 70).scale(2, 2, 10), P(0.5, 0.5, 0.5, 0.4)), C(L(20, 1), z(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(0.5, 0.5, 0.5, 0.4),),),);
    Ma.map(({x:f, z:r}) => {
      c(L(6), z(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), P(0.6, 0.3, 0.3, 0.4));
      c(L(6), z(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), P(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(M => c(L(6), z(7 * f - 100, M, 7 * r + 55).scale(1.3, 0.5, 1.3), P(0.4, 0.2, 0.2, 0.8),));
      c(L(14, 1), z(9 * f - 38.9, -7.3, 11 * r + 17).scale(1, 4), P(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(M => c(L(17, 1), z(9 * f - 38.9, M - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), P(0.6, 0.6, 0.6, 0.3),));
    });
    ob(7, f => {
      c(L((23 * f + 1) % 5 + 5, 0, 0.5), z(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), P(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(L(), z(-87, -9.5, 24).scale(7, 1, 3), P(0.4, 0.5, 0.6, 0.4));
    c(L(4), z(-86, -9.2, 27).scale(5, 1, 5), P(0.5, 0.6, 0.7, 0.3));
    c(L(12, 1), z(-86, -9, 31).scale(1.5, 1, 1.5), P(0.3, 0.3, 0.4, 0.1));
    Kb(z(-86, -7.5, 31));
    c(U(Yb(C(L(5), z(0, 0, -7).scale(2, 1.2, 2), P(0.2, 0.4, 0.7, 0.3)), C(L(5), l.scale(9, 1.2, 9), P(0, 0.2, 0.3, 0.5)), C(L(), l.scale(11, 1, 13), P(0.3, 0.4, 0.6, 0.3)),), C(L(5), l.scale(5.4, 5, 5.4), P(0, 0.2, 0.3, 0.5)),), z(-38.9, -11.3, 17),);
    Kb(z(-38.9, -9.6, 10));
    c(U(Yb(C(L(6), z(0, 0, -18).scale(15, 1.2, 15), P(0.7, 0.7, 0.7, 0.3),), C(L(), l.scale(4, 1.2, 6), P(0.45, 0.4, 0.6, 0.3)),), ...ob(6, f => ob(6, r => C(L(6), z(4.6 * r - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * r) - 32).scale(2, 5, 2), P(0.7, 0.7, 0.7, 0.3),),)).flat(),), z(-38.9, -11.3, -1),);
    c(L(5), z(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), P(0.8, 0.1, 0.25, 0.4));
    Kb(z(-84, -0.7, 85).rotate(0, 45));
    c(U(Yb(C(L(), z(26.5, -1.6, 10).scale(20, 2.08, 3)), C(L(), z(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...ob(4, f => C(L(), z(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...ob(3, f => C(L(), z(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), z(-123, 0.2, -12), P(0.5, 0.5, 0.6, 0.2),);
    Kb(z(-116, -1.4, -18).rotate(0, 180));
    c(L(6), z(-116, -2.6, -16.5).scale(3.2, 0.8, 3), P(0.6, 0.5, 0.7, 0.2));
    c(L(), z(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    c(L(), z(-115.5, -17, -12).scale(0.5, 15, 2.2), P(0.6, 0.6, 0.6, 0.3));
    c(L(8), z(-114, -17, -2).scale(2, 15, 2), P(0.6, 0.6, 0.6, 0.3));
    c(L(8), z(-79, -17, -2).scale(2, 15, 2), P(1, 1, 1, 0.3));
    c(L(), z(-77, -17, -50.5).scale(2.2, 15, 0.5), P(0.6, 0.6, 0.6, 0.3));
    c(U(C(L(12), z(-77, -14.5, -12).scale(4, 17.5, 4), P(0.7, 0.7, 0.7, 0.2),), C(L(12), z(-77, 3.1, -12).scale(3, 5, 3), P(0.4, 0.5, 0.6, 0.2)), C(L(), z(-79, 0.1, -12).scale(3.5, 2, 1.3), P(0.4, 0.5, 0.6, 0.2),), C(L(), z(-77, 0.1, -14).scale(1.5, 2, 2), P(0.4, 0.5, 0.6, 0.2)),),);
    c(U(C(L(), z(-93, -5.8, -40).scale(9, 1, 5), P(0.8, 0.8, 0.8, 0.1)), C(L(9), z(-98, -5.8, -40).scale(3, 8, 3), P(0.7, 0.7, 0.7, 0.2)),),);
    c(L(), z(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), P(0.6, 0.6, 0.6, 0.3));
    c(L(9), z(-98, -18.4, -40).scale(2.5, 13.5, 2.5), P(0.5, 0.5, 0.5, 0.3));
    Kb(z(-98, -4.4, -40).rotate(0, 90));
    [-1, 1,].map((f, r) => {
      c(U(C(L(), z(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), P(0.5, 0.5, 0.5, 0.4),), C(L(), l.scale(3, 3, 10), P(0.6, 0.24, 0.2, 0.5)), C(L(32, 1), z(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(0.6, 0.24, 0.2, 0.5),), C(L(5), z(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(0.6, 0.24, 0.2, 0.5),), C(L(5), z(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), P(0.6, 0.24, 0.2, 0.5),),), z(f - 100, 0.7, 97),);
      c(L(12, 1), z(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), P(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5,].map(M => c(L(15, 1), z(-7.5 * f - 100, M + 0.7, 96).scale(1.1, 0.5, 1.1), P(0.5, 0.24, 0.2, 0.4),));
      c(m, z(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(m, z(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      ob(5, M => c(m, z(18.5 * (r - 0.5), 0, 4.8 * M - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2),));
    });
    c(U(C(L(), z(-82.07, 0.8, 106).scale(11, 0.9, 2.2), P(0.7, 0.7, 0.7, 0.1),), C(L(45, 1), z(-81, 0.7, 106).scale3d(7.7), P(0.7, 0.7, 0.7, 0.1),),),);
    c(L(), z(-58, 1, 106).scale(2, 0.65, 2), P(0.7, 0.7, 0.7, 0.2));
    c(L(), z(-50.7, 1, 99).scale(2, 0.65, 1), P(0.7, 0.7, 0.7, 0.2));
    c(L(), z(-42, 0.4, 91).scale(5, 1, 2.5), P(0.7, 0.7, 0.7, 0.3));
    c(L(), z(-34.2, 0.4, 91).scale(3, 1, 3), P(0.7, 0.7, 0.7, 0.3));
    c(L(5), z(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), P(0.2, 0.5, 0.5, 0.6));
    Kb(z(-34, 2.7, 96).rotate(-12, 0));
    c(U(Yb(C(L(6, 0, 0, 0.6), z(-100, 0.7, 105.5).scale(8, 1, 11), P(0.7, 0.7, 0.7, 0.2),), C(L(), z(-101.5, 0.7, 93.5).scale(10.5, 1, 2), P(0.7, 0.7, 0.7, 0.2),),), C(L(5), z(-100, 0.7, 113).scale(4, 3, 4), P(0.7, 0.7, 0.7, 0.2)),),);
    ob(3, f => {
      c(q(16), z(-77, -9, -12 * f - 20).rotate(0, 90), P(0.6, 0.6, 0.6, 0.3),);
      c(q(16), z(12 * f - 109, -9, -12), P(0.6, 0.6, 0.6, 0.3));
      c(q(24.7 - 0.7 * (1 & f)), z(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? P(0.5, 0.5, 0.5, 0.3) : P(0.35, 0.35, 0.35, 0.5),);
    });
    c(U(C(L(6, 0, 0, 0.3), z(0, -0.92, 95).scale(14, 2, 14), P(0.8, 0.8, 0.8, 0.2),), C(L(5), z(0, 0, 95).scale3d(6), P(0.3, 0.3, 0.3, 0.5)),),);
    Kb(z(0, 1.7, 82).rotate(0, 180));
    c(L(5), z(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(0.5, 0.3, 0.3, 0.4),);
    c(L(6), z(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(0.5, 0.6, 0.7, 0.3));
    c(L(), z(0, 16, 127.8).scale(1.5, 1, 0.7), P(0.5, 0.6, 0.7, 0.3));
    c(L(7), z(0, 15.1, 133).scale(5, 2, 5), P(0.4, 0.5, 0.6, 0.4));
    c(U(Yb(C(L(), z(0, 16, 110.5).scale(12, 1, 3), P(0.5, 0.3, 0.3, 0.4)), C(L(), z(0, 16, 111).scale(3, 1, 3.8), P(0.5, 0.3, 0.3, 0.4)),), C(L(5), z(0, 16, 103.5).scale(5.5, 5, 5.5), P(0.5, 0.3, 0.3, 0.4),),),);
    Lb(z(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Lb(z(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...rb(18).map(({x:f, z:r}) => [7 * f, 10 * r, 4.5 - 2 * Xa(f),]),);
    Lb(z(0, 3, 95), ...rb(9).map(({x:f, z:r}) => [9 * f, 9 * r, 4,]),);
    Lb(z(0, 19, 134), [0, 0, 3.5,]);
    Lb(z(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Lb(z(-89, 0.2, 80), [0, 0, 6,]);
    Lb(z(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Lb(z(-115, 0.2, -12), [0, 0, 3.5,]);
    Lb(z(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    Q("MODEL_ID_LEVEL1_CENTRAL_PLATFORM");
    c(L(5), z(0, -0.2).scale(5, 1, 5), P(0.6, 0.65, 0.7, 0.3));
    Kb(z(0, 1.2));
    ob(2, f => {
      Q("MODEL_ID_LEVEL2_BLACK_PLATFORM" + f);
      Ma.map(({x:r, z:M}) => {
        c(L(11, 1), z(4 * r, 4, 4 * M).scale(0.8, 3, 0.8), P(0.5, 0.3, 0.7, 0.6));
        c(L(), z(4 * r, 7, 4 * M).scale(1, 0.3), P(0.5, 0.5, 0.5, 0.3));
      });
      c(U(C(L(), l.scale(5, 1, 5), P(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(r => C(L(25, 1), z(5 * r, 0.2).rotate(-30 * r).scale(4, 1, 3), P(0.8, 0.8, 0.8, 0.3),)),),);
      c(L(), z(0, -3).scale(8, 2, 8), P(0.4, 0.4, 0.4, 0.3));
    });
    Q("MODEL_ID_LEVEL2_CENTRAL_PLATFORM");
    c(U(Yb(C(L(), l.scale(1.5, 1, 5), P(0.9, 0.9, 0.9, 0.2)), C(L(6), l.scale(4, 1, 5), P(0.9, 0.9, 0.9, 0.2)), C(L(), z(0, -2).scale(2, 3.2, 1.9), P(0.3, 0.8, 0.5, 0.5)), C(L(16, 1, 0, 4), l.scale(1, 1, 1.5).rotate(0, 90), P(0.9, 0.9, 0.9, 0.2),),), C(L(), l.scale(1.3, 10, 1.3), P(0.2, 0.7, 0.4, 0.6)),),);
    Lb(z(0, 2.8), [0, 0, 4.5,]);
    Q("MODEL_ID_TRIANGLE_PLATFORM");
    c(L(3), z(-23, -1.7, 55.8).scale(5, 0.7, 8.3), P(0.3, 0.6, 0.6, 0.2));
    c(L(8), z(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(0.8, 0.8, 0.8, 0.2));
    c(L(), z(-23, -3, 55).scale(5.2, 1.7, 3), P(0.5, 0.5, 0.5, 0.3));
    c(L(), z(-23, -2.2, 62).scale(3, 1, 4), P(0.5, 0.5, 0.5, 0.3));
    Kb(z(-23, -0.5, 66.5));
    Q("MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL");
    c(L(), z(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(0.7, 0.7, 0.7, 0.2));
    c(U(C(L(), l.scale(3, 1.4, 2.7)), C(L(), l.scale(1.2, 8, 1.2)),), z(-33, -3, 55), P(0.7, 0.7, 0.7, 0.2),);
    Q("MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL");
    c(U(C(L(), z(-27, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2)), C(L(), z(-27, -3, 55).scale(1, 3), P(0.9, 0.9, 0.9, 0.2)),),);
    c(L(), z(-39, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    Q("MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR");
    c(L(6), z(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), P(0.7, 0.7, 0.7, 0.4),);
    Q("MODEL_ID_ELEVATORS0");
    [0, 12, 24,].map(f => c(L(), z(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.2, 0.5, 0.6, 0.2),));
    Q("MODEL_ID_ELEVATORS1");
    [6, 18,].map(f => c(L(), z(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.1, 0.4, 0.5, 0.2),));
    Q("MODEL_ID_MONUMENT");
    c(U(Yb(C(L(5), z(0, 2).scale(5, 7, 5).skewY(8), P(0.2, 0.4, 0.5, 0.5),), C(L(5), z(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(0.25, 0.35, 0.5, 0.5),), C(L(5), z(0, 9).scale(0.6, 7, 0.6).skewY(8), P(0.35, 0.3, 0.5, 0.5),),), C(L(5), l.scale(4, 8, 4), P(0.2, 0.4, 0.5, 0.5)), C(L(5), z(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(0.2, 0.4, 0.5, 0.5),),), z(-38.9, -11.3, 17),);
    Lb(z(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({x:f, z:r}) => [3 * f, 3 * r, 1.2,]),);
    Q("MODEL_ID_PUSHING_ROD0");
    ob(2, f => c(E, z(9 * f - 110 + (1 & f), 1.9, -12)));
    Q("MODEL_ID_PUSHING_ROD1");
    ob(2, f => c(E, z(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    Q("MODEL_ID_PUSHING_ROD2");
    ob(3, f => c(E, z(9 * f - 106, 1.9, -12)));
    ob(4, f => {
      Q("MODEL_ID_OSCILLATING_HEX_PAD" + f);
      c(L(6), z(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), P(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [P(0.1, 0.55, 0.45, 0.2), P(0.2, 0.5, 0.5, 0.3), P(0.3, 0.45, 0.55, 0.4),].map((f, r) => {
      Q("MODEL_ID_JUMPING_PAD" + r);
      c(L(), z(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
      2 === r && c(L(), z(-29.1, 0.4, 91).scale(2.1, 1, 3), P(0.7, 0.7, 0.7, 0.3));
      1 === r && c(L(), z(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), P(0.6, 0.6, 0.7, 0.3),);
    });
    Q("MODEL_ID_FLOATING_ELEVATOR_PAD");
    c(L(5), l.scale(5, 1.1, 5), P(0.5, 0.3, 0.3, 0.4));
    c(L(5), l.scale(5.5, 0.9, 5.5), P(0.25, 0.25, 0.25, 0.4));
    Kb(z(0, 1.5, -1).rotate(0, 180));
    ob(4, f => {
      Q("MODEL_ID_GATE" + f);
      ob(7, r => c(C(L(9, 1), z((2 < f ? 3.5 : 4) * (r / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), P(0.3, 0.3, 0.38),),),);
    });
    Q("MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR");
    c(w);
    Q("MODEL_ID_DONUT_PAD");
    c(L(15, 1), z(-7.5).rotate(0, 90).scale(3, 2.3, 3), P(0.4, 0.4, 0.4, 0.3));
    c(L(10), z(-7.5).rotate(0, 90).scale(2, 2.5, 2), P(0.3, 0.8, 0.7, 0.3));
    c(L(5), z(-7.5).rotate(0, 90).scale(1, 3), P(0.5, 0.5, 0.5, 0.5));
    Kb(z(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(m, l.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(U(C(L(10), l.scale(6, 2, 6), P(0.1, 0.6, 0.5, 0.3)), C(L(10), l.scale(3.3, 6, 3.3), P(0.1, 0.6, 0.5, 0.5)),),);
    Lb(z(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    Q("MODEL_ID_PENDULUMS");
    c(L(3), z(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), P(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(L(6), z(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), P(0.7, 0.7, 0.7, 0.4),);
      c(L(), z(0, 6.2, f + 95).scale(0.5, 11, 0.5), P(0.5, 0.3, 0.3, 0.4));
    });
    Q("MODEL_ID_ROTATING_PLATFORM0");
    c(U(C(L(45, 1), l.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)), C(L(), z(0, 0, -5.5).scale(1.5, 3, 2.7), P(0.45, 0.45, 0.45, 0.2),),),);
    c(L(8), z(0, 2).scale(3, 1.5, 3).rotate(0, 22), P(0.7, 0.7, 0.7, 0.1));
    c(L(5), z(0, 2).scale(1, 2), P(0.3, 0.3, 0.3, 0.2));
    Lb(z(0, 3), ...rb(14).map(({x:f, z:r}) => [5.6 * f, 5.6 * r, 2,]),);
    Q("MODEL_ID_ROTATING_PLATFORM1");
    [-1, 1,].map(f => c(m, l.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    c(U(C(L(28, 1), z(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), C(L(), l.scale(9, 5, 2), P(0.3, 0, 0, 0.3)),),);
    c(C(L(28, 1), l.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(C(L(5), z(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    Q("MODEL_ID_ROTATING_PLATFORM2");
    c(U(C(L(28, 1), z(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), C(L(), z(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)), C(L(), z(0, 0, 7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),),);
    c(C(L(28, 1), l.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(C(L(5), z(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    Q("MODEL_ID_ROTATING_PLATFORM3");
    c(U(C(L(28, 1), z(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), C(L(), z(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)), C(L(), z(0, 0, -7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),),);
    c(C(L(28, 1), l.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(C(L(5), z(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    ob(2, f => {
      Q("MODEL_ID_BOAT" + f);
      c(U(C(L(30, 1, 1.15, 1), z(0, -3).scale(3.5, 1, 3.5), P(0.7, 0.4, 0.25, 0.7),), C(L(30, 1, 1.3, 1), z(0, -2.5).scale(2.6, 1, 3), P(0.7, 0.4, 0.25, 0.2),), C(L(), z(4, -1.2).scale3d(2), P(0.7, 0.4, 0.25, 0.3)),),);
      Kb(z(0, -3, 4));
    });
    Q("MODEL_ID_PLAYER_BODY");
    c(tb(20), z(0, 1).scale3d(0.5), P(1, 0.3, 0.4));
    c(tb(30), l.scale(0.65, 0.8, 0.55), P(1, 0.3, 0.4));
    c(L(), z(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), P(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(m, l.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), P(1, 1, 0.8),);
      c(C(U(L(15, 1), C(L(), z(0, 0, 1).scale(2, 2, 0.5)),), l.rotate(-90, 0).scale(0.1, 0.05, 0.1), P(0.3, 0.3, 0.3),), z(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map((f, r) => {
      Q("MODEL_ID_PLAYER_LEG" + r);
      c(L(20, 1), z(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), P(1, 0.3, 0.4));
    });
    Q("MODEL_ID_LEVER");
    c(L(6, 1), l.scale(0.12, 1.2, 0.12), P(0.3, 0.3, 0.5, 0.1));
    c(L(9, 1), z(0, 0.8).scale(0.2, 0.3, 0.2), P(1, 0.5, 0.2));
    c(L(3), z(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), P(0.2, 0.2, 0.2, 0.1));
    Q("MODEL_ID_SOUL_COLLISION");
    c(L(6, 1).slice(0, -1), l.scale(0.77, 1, 0.77), P(1, 0.3, 0.5));
    Q("MODEL_ID_SOUL");
    c(tb(28, 22, (f, r, M) => {
      var D = r / 22, J = f * Math.PI * 2 / 28, F = Math.sin(D ** 0.6 * Math.PI / 2);
      f = D * D * Math.sin(f * Math.PI * 0.5) / 4;
      return 21 < r ? {x:M.C = 0, y:-0.5, z:0,} : {x:Math.cos(J) * F, y:Math.cos(D * Math.PI) - D - f, z:Math.sin(J) * F + Math.sin(f * Math.PI * 2) / 4,};
    }), l.scale(0.7, 0.7, 0.7), P(1, 1, 1),);
    [-1, 1,].map(f => c(tb(10), z(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});

