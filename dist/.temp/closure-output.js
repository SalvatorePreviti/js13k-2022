let aa, ca, ea, fa, ha, ia, la, ma, na, pa, qa, ra, c, ta, ua, va, wa, xa, ya, d = 0, za = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 14, Ka = 0.1;
const La = Math.PI / 180, Ma = [], e = [], h = [], Na = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Oa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Pa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ta = 0, Ua = 180, Va = 0, Wa = 0, Xa = 0;
const Ya = NO_INLINE(a => 0 > a ? -a : a), Za = NO_INLINE((a, b) => a < b ? a : b), $a = NO_INLINE((a, b) => b < a ? a : b), ab = (a, b) => Ya(a) > b ? a : 0, bb = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, cb = a => Math.atan2(Math.sin(a * La), Math.cos(a * La)) / La, db = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * bb(g) || 0, eb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, fb = (a, b) => (a = bb(a), eb(a, 1 - a, b)), gb = (a, b, g = 0) => (a * a + b * b + g * 
g) ** 0.5, lb = (a = 0, b = 0, g = 0, k = 1) => {
  hb = l.m11 * a + l.m21 * b + l.m31 * g + l.m41 * k;
  ib = l.m12 * a + l.m22 * b + l.m32 * g + l.m42 * k;
  jb = l.m13 * a + l.m23 * b + l.m33 * g + l.m43 * k;
  kb = l.m14 * a + l.m24 * b + l.m34 * g + l.m44 * k;
};
var hb, ib, jb, kb;
const nb = (a, b = mb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), ob = (a = v, b = l,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), x = NO_INLINE((a, b, g) => v.translate(a, b, g)), D = (a, b) => Array.from(Array(a), (g, k) => b(k)), pb = (a, b, g) => (a.C = g, a.u = b, a), qb = (a, b, g = a.u,) => (ob(b), pb(a.map(({x:k, y:p, z:m}) => (lb(k, p, m), {x:hb, y:ib, z:jb,})), g, a.C,)), J = (a, b, g) => a.map(k => qb(k, b, g)), rb = (a, b = 0) => D(a, g => {
  const k = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Ya(k) ? k : 0 > k ? k - b : k + b,};
}), sb = (a, b, g) => a.map((k, p, {length:m}) => pb([k, b[m - p - 1], b[m - (p + 1) % m - 1], a[(p + 1) % m],], a.u, g,)), M = (a, b, g = 0, k,) => (a = a ? rb(a, k) : Na, k = qb(a, x(0, 1).scale3d(0 < g ? g : 1)), a = qb(a, x(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...sb(a, k, b), k, a,]), tb = (a, b = a, g = (k, p) => (p *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(p), y:Math.cos(p), z:Math.sin(k) * Math.sin(p),})) => {
  const k = [];
  for (let p = 0; a > p; p++) {
    for (let m = 0; b > m; m++) {
      const u = pb([], 0, 1);
      k.push(u);
      u.push(g(p, m, u));
      m && u.push(g((p + 1) % a, m, u));
      b - 1 > m && u.push(g((p + 1) % a, m + 1 % b, u));
      u.push(g(p, m + 1 % b, u));
    }
  }
  return k;
}, wb = NO_INLINE(a => 1 - Math.exp(-Da * a)), xb = NO_INLINE((a, b, g) => eb(a, b, wb(g))), yb = (a, b, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), zb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Ab = a => Math.sin(a * Math.PI * 2), Db = a => 0.5 > a % 1 ? 1 : -1, Eb = a => a % 1 * 2 - 1, Fb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Gb = a => {
  let b = 0;
  const g = () => {
    let m = 0;
    const u = T => {
      let U, da, Qa, ja = 0, ka = 0;
      const ba = [], sa = new Int32Array(768 * T), bc = 2 ** (w - 9) / T, cc = Math.PI * 2 ** (r - 8) / T, Bb = A * T & -2;
      for (let ub = 0; 11 >= ub; ++ub) {
        for (let vb = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ub]; 32 > vb; ++vb) {
          const Ob = (32 * ub + vb) * T;
          for (var oa = 0; 4 > oa; ++oa) {
            if (U = 0, Nb && (U = E[Nb - 1].charCodeAt(vb + 32 * oa) - 40, U += 0 < U ? 106 : 0), U) {
              var Aa;
              if (!(Aa = ba[U])) {
                Aa = U;
                let W = void 0, Ba = void 0;
                var Pb = U;
                let dc = 0, ec = 0;
                const fc = 2 > b ? Eb : Ab, gc = 2 > b ? 1 > b ? Db : Fb : Ab, Qb = new Int32Array(t + y + N);
                for (let Ra = 0, Cb = 0; t + y + N > Ra; ++Ra, ++Cb) {
                  let Sa = 1;
                  t > Ra ? Sa = Ra / t : t + y > Ra || (Sa = (1 - (Sa = (Ra - t - y) / N)) * 3 ** (-G / 16 * Sa));
                  0 > Cb || (Cb -= 4 * T, Ba = 0.00396 * 2 ** ((Pb + n - 256) / 12), W = 0.00396 * 2 ** ((Pb + L - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Qb[Ra] = 80 * (fc(dc += Ba * Sa ** (C / 32)) * f + gc(ec += W * Sa ** (I / 32)) * K + (V ? (2 * Math.random() - 1) * V : 0)) * Sa | 0;
                }
                Aa = ba[Aa] = Qb;
              }
              for (let W = 0, Ba = 2 * Ob; Aa.length > W; ++W, Ba += 2) {
                sa[Ba] += Aa[W];
              }
            }
          }
          for (let W, Ba = 0; T > Ba; ++Ba) {
            Aa = 0;
            oa = 2 * (Ob + Ba);
            var Ca = (((W = sa[oa]) || Qa) && (da = 0.00308 * H, 1 !== b && 4 !== b || (da *= Math.sin(bc * oa * Math.PI * 2) * F / 512 + 0.5), da = 1.5 * Math.sin(da), ja += da * ka, Ca = (1 - P / 255) * (W - ka) - ja, ka += da * Ca, W = 4 === b ? ka : 3 === b ? Ca : ja, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= R / 32, Qa = 1e-5 < W * W, Ca = Math.sin(cc * oa) * q / 512 + 0.5, Aa = W * (1 - Ca), W *= Ca), oa < Bb || (Aa += sa[1 + oa - Bb] * 
            z / 255, W += sa[oa - Bb] * z / 255), m + oa >> 1);
            k[Ca] += (sa[oa] = Aa) / 65536;
            p[Ca] += (sa[++oa] = W) / 65536;
          }
        }
      }
      m += 768 * T;
    }, E = Oa[b], [f, n, C, K, L, I, V, t, y, B, G, w, H, P, R, q, r, z, A, F] = Pa[b], N = 4 * B ** 2;
    u(5513);
    u(4562);
    u(3891);
    zb(5 > ++b ? g : a);
  }, k = (ea = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), p = ea.getChannelData(1);
  zb(g);
}, Hb = () => {
  let a, b, g, k, p, m, u, E, f, n, C, K, L, I, V, t, y = !0;
  const B = [], G = () => {
    b4.innerHTML = "Music: " + y;
    t && (ca || !y ? t.disconnect() : t.connect(V.destination));
  }, w = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = [yb(0.3, 55, q, 1.732051), yb(55, 181, q, 1.732051),];
    ia = yb(0.3, 181, q, 1.732051);
    k = E = void 0;
    B.length = fa = I = K = L = Ea = Fa = 0;
    document.hidden && H(!0);
  }, H = q => {
    if (ca !== q) {
      if (ca = q, w(), document.body.className = q ? "l m" : "l", q) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      G();
    }
  }, P = q => {
    try {
      V || (V = new AudioContext(), (t = V.createBufferSource()).buffer = ea, t.loop = !0, t.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    H(!1);
    ha = q;
  }, R = (q, r) => q.buttons[r]?.pressed || 0 < q.buttons[r]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    P();
  };
  b2.onclick = () => {
    P(1);
  };
  b5.onclick = () => H(!0);
  b4.onclick = () => {
    y = !y;
    G();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.F = "", location.reload());
  };
  onclick = q => {
    if (!ca && (q.target === hC && (fa = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = q => {
    let r;
    q.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (B[r] = !!q.type[5] && !0) && (0 === r && (fa = 1), 1 === r && H(!0)));
  };
  onmousemove = ({movementX:q, movementY:r}) => {
    ha && (q || r) && (Ua += 0.1 * q, Ta += 0.1 * r);
  };
  hC.ontouchstart = q => {
    if (!ca) {
      for (let {pageX:r, pageY:z, identifier:A} of q.changedTouches) {
        ha && r > hC.clientWidth / 2 ? void 0 === E && (f = 0, m = r, u = z, E = A, C = Ta, n = Ua) : void 0 === k && (p = 0, b = r, g = z, k = A);
      }
      a = za;
    }
  };
  hC.ontouchmove = q => {
    if (!ca) {
      for (let {pageX:N, pageY:T, identifier:U} of q.changedTouches) {
        var r, z, A, F;
        E === U && (Ta = C + (T - u) / 2.3, Ua = n + (N - m) / 2.3, f = 1);
        k === U && (U = (b - N) / 19, r = Ya(U), z = (g - T) / 19, A = Ya(z), (F = 0.3 < $a(r, A)) && (p = 1), K = (F && 0.2 < r) * bb(U, -1), L = (F && 0.2 < A) * bb(z, -1), 2 < r && (b = 19 * (0 > U ? -1 : 1) + N), 2 < A && (g = 19 * (0 > z ? -1 : 1) + T));
      }
    }
  };
  hC.ontouchend = q => {
    let r;
    document.activeElement === document.body && q.preventDefault();
    for (const z of q.changedTouches) {
      z.identifier === E ? (E = void 0, f || (r = 1), f = 0) : z.identifier === k ? (k = void 0, L = K = 0, p || (r = 1), p = 0) : r = 1;
    }
    q.target === hC && r && a && 0.02 < (q = za - a) && 0.7 > q && (fa = 1);
  };
  ma = () => {
    Ea = L + (B[4] ? 1 : 0) - (B[5] ? 1 : 0);
    Fa = K + (B[2] ? 1 : 0) - (B[3] ? 1 : 0);
    let q = navigator.getGamepads()[0];
    q && (ha && (Ta += Da * ab(q.axes[3], 0.3) * 80, Ua += Da * ab(q.axes[2], 0.3) * 80), Ea += R(q, 12) - R(q, 13) - ab(q.axes[1], 0.2), Fa += R(q, 14) - R(q, 15) - ab(q.axes[0], 0.2), R(q, 9) && H(!0), (q = R(q, 3) || R(q, 2) || R(q, 1) || R(q, 0)) && !I && (fa = 1), I = q);
  };
  document.onvisibilitychange = onblur = onresize = w;
  H(!0);
}, Ib = (a, b) => {
  1 / 0 > Ka && (Ka = d + b, h4.innerHTML = a);
}, Jb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][na = Ma.reduce((a, b) => a + b.i, 0)] + " / XIII";
}, Kb = () => {
  localStorage.F = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Ja, ra, d,]);
}, O = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), Q = NO_INLINE(() => {
  const a = [];
  c = (b, g = new DOMMatrix(), k) => a.push(...J(b, g, k));
  h.push({m:new DOMMatrix(), o:a,});
}), Lb = a => {
  const b = () => {
    b.g = xb(b.g, b.i, 4);
    b.h = xb(b.h, b.i, 1);
    ob(g).multiplySelf(a);
    fa && 3 > (lb(), gb(Va - hb, Wa - ib, Xa - jb,)) ? b.i ? 0.7 < b.g && (b.i = 0, Ja = k, Ib("* click *", 1), Kb()) : 0.3 > b.g && (b.i = 1, Ja = k, Ib("* click *", 1), Kb()) : b.i && 0.8 < b.g && 14 === k && (b.i = 0, 13 > na ? Ib("Not leaving now, there are souls to catch!", 3) : pa || (Ib("Well done. They will be punished.<br>Thanks for playing", 1 / 0), pa = 1));
    l.rotateSelf(50 * b.g - 25, 0).translateSelf(0, 1).m44 = b.g;
  }, g = h.at(-1).m, k = e.length;
  b.m = g;
  b.G = a;
  e.push(b);
  c(M(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
  c(M(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), O(0.4, 0.5, 0.5));
  c(M(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), O(0.5, 0.5, 0.4));
}, Mb = (a, ...b) => {
  let g, k, p, m, u = 0, E = 0, f = 1, n = -1;
  const C = () => {
    if (!C.i) {
      let G, w, H, P, R, q = 1, r = 1 / 0;
      for (let z = 0; b.length > z; z++) {
        let A = b[z], F = gb(L - A[0], I - A[1]);
        q = Za(q, F / A[2]);
        0 > (F -= A[2]) ? G = 1 : r > F && (r = F, K = A);
      }
      G || (w = L - K[0], H = I - K[1], P = gb(w, H), R = Math.atan2(-H, w), f && (m = bb(m / (1 + Math.random())), E = (Math.random() - 0.5) * Math.PI / 2), R += E, n = -Math.cos(R), u = Math.sin(R), 0.1 < P && (P = Za(P, K[2]) / P, L = w * P + K[0], I = H * P + K[1]));
      f = G;
      m = xb(m, 3 + 6 * (1 - q), 3 + q);
      V = xb(V, L = xb(L, L + n, m), m);
      t = xb(t, I = xb(I, I + u, m), m);
      g = db(g, Math.atan2(V - k, t - p) / La - 180, wb(3));
      ob(y).multiplySelf(a).translateSelf(k = V, 0, p = t).rotateSelf(0, g, 7 * Math.sin(1.7 * d),);
      1.6 > (lb(), gb(Va - hb, Wa - ib, Xa - jb,)) && (C.i = 1, Ib([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][na] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Jb(), Kb());
    }
    C.i && ob(h[35].m).translateSelf(B % 4 * 1.2 - 1.7 + Math.sin(d + B) / 7, -2, 1.7 * (B / 4 | 0) - 5.5 + Ya(B % 4 - 2) + Math.cos(d / 1.5 + B) / 6,);
  };
  let K = b[0], [L, I] = K, [V, t] = K;
  const y = h.at(-1).m, B = Ma.length;
  Ma.push(C);
}, Rb = ({x:a, y:b, z:g}, k) => a * k.x + b * k.y + g * k.z, Sb = a => {
  let b, g = 0, k = 0, p = 0, m = a.at(-1);
  for (b of a) {
    g += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), p += (m.x - b.x) * (m.y + b.y), m = b;
  }
  return b = gb(g, k, p), g /= b, k /= b, p /= b, {x:g, y:k, z:p, w:g * m.x + k * m.y + p * m.z,};
}, Tb = (a, b) => {
  var g, k, p, m = b.B;
  for (var u = 0; m.length > u; ++u) {
    if (-0.00008 > (p = Rb(a, m[u]) - a.w) ? k = b : 8e-5 < p && (g = b), k && g) {
      k = [];
      p = [];
      let {B:E, v:f} = b;
      m = E.at(-1);
      u = Rb(a, m) - a.w;
      for (const n of E) {
        g = Rb(a, n) - a.w, 8e-5 > u && p.push(m), -0.00008 < u && k.push(m), (8e-5 < u && -0.00008 > g || -0.00008 > u && 8e-5 < g) && (u /= g - u, m = {x:m.x + (m.x - n.x) * u, y:m.y + (m.y - n.y) * u, z:m.z + (m.z - n.z) * u,}, k.push(m), p.push(m)), m = n, u = g;
      }
      return {l:2 < k.length && {B:pb(k, E.u, E.C), v:f, A:b,}, j:2 < p.length && {B:pb(p, E.u, E.C), v:f, A:b,},};
    }
  }
  return {l:g, j:k,};
}, Ub = (a, b, g = Sb(b.B)) => {
  let k, p;
  return a ? ({l:k, j:p} = Tb(a, b), k || p || a.o.push(b), k && (a.l = Ub(a.l, k, g)), p && (a.j = Ub(a.j, p, g))) : a = {x:g.x, y:g.y, z:g.z, w:g.w, o:[b,], l:0, j:0,}, a;
}, Vb = (a, b, g) => {
  const k = [], p = (m, u) => {
    let {l:E, j:f} = Tb(m, u);
    E || f || (0 < g * Rb(m, b) ? E = u : f = u);
    E && (m.l ? p(m.l, E) : k.push(E));
    f && m.j && p(m.j, f);
  };
  for (const m of b.o) {
    p(a, m);
  }
  return k;
}, Wb = (a, b) => a && (b(a), Wb(a.l, b), Wb(a.j, b)), Xb = a => (Wb(a, b => {
  const g = b.j;
  b.j = b.l;
  b.l = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const k of b.o) {
    k.v = !k.v;
  }
}), a), Yb = a => a.length ? a.reduce((b, g) => Ub(b, {B:g, v:0, A:0,}), 0) : a, Zb = (...a) => a.reduce((b, g) => {
  const k = [];
  if (b = Yb(b), g) {
    g = Yb(g);
    Wb(b, p => p.o = Vb(g, p, 1));
    Wb(g, p => k.push([p, Vb(b, p, -1),]));
    for (let [p, m] of k) {
      for (const u of m) {
        Ub(b, u, p);
      }
    }
  }
  return b;
}), S = (a, ...b) => {
  const g = m => {
    let u;
    return m.A && ((u = k.get(m.A)) ? (p.delete(u), m = g(m.A)) : k.set(m.A, m)), m;
  }, k = new Map(), p = new Map();
  return a = Xb(Zb(Xb(Yb(a)), ...b)), Wb(a, m => {
    for (const u of m.o) {
      p.set(g(u), u.v);
    }
  }), Array.from(p, ([{B:m}, u]) => {
    const E = m.map(({x:f, y:n, z:C}) => ({x:f, y:n, z:C,}));
    return pb(u ? E.reverse() : E, m.u, m.C);
  });
}, X = (a, b = 0, g = 0) => {
  const k = h[++ta].m;
  return ob(v, k), k.m41 = a, k.m42 = b, k.m43 = g, k;
}, ac = () => {
  let a, b, g, k, p, m, u, E, f, n, C, K, L, I = 0, V = 0, t = 0, y = 0, B = 1, G = 2, w = 15;
  const H = () => ob((G ? e[Ja] : h[28 !== I ? I : 0]).m,), P = r => {
    1 < G ? (ob(e[Ja].m).multiplySelf(e[Ja].G), lb(0, 0.9 < qa ? 15 : 1, -2.4)) : (H(), lb(V, t, y));
    r && (p = (hb - Va) / Da, m = (jb - Xa) / Da);
    Va = hb;
    Wa = ib;
    Xa = jb;
  }, R = () => {
    var r = 0, z = 0, A = 0, F = 0, N = 0, T = 0, U = -1;
    for (var da = 0; 36 > da; ++da) {
      var Qa = 512 * da;
      for (var ja = 96; 416 > ja; ja += 4) {
        for (var ka = 0; 2 > ka; ++ka) {
          var ba = $b[Qa + ja + ka];
          const sa = $b[Qa + ja + ka + 2];
          ba > F && (F = ba);
          ba + sa && (0 > U || U === da) && (U = da, sa === n ? ++r : z && z !== sa || (z = sa, ++A));
        }
      }
    }
    n = 0 > U ? 0 : A > 2 * r ? z : n;
    for (r = 36; 128 > r; ++r) {
      da = U = A = z = 0;
      Qa = 512 * r;
      for (ja = 0; 128 > ja; ++ja) {
        ka = Qa + 4 * ja, ba = $b[ka], 64 > ja ? ba > z && (z = ba) : ba > A && (A = ba), (ba = $b[2 + ka]) > U && (U = ba), ba = $b[1 + ka], 64 < ja ? ba > z && (z = ba) : ba > A && (A = ba), (ba = $b[3 + ka]) > da && (da = ba);
      }
      (A -= z) * A > N * N && (N = A);
      (da -= U) * da > T * T && (T = da);
    }
    N *= 0.7;
    E = bb(1 - 0.01 * $a(Ya(N), Ya(T)), 0.3);
    N /= 255;
    F /= 255;
    T /= 255;
    H().invertSelf();
    lb(N, F, T, 0);
    V += hb;
    t += F;
    y += jb;
    P();
  }, q = (r, z, A, F) => eb(r, z, B || (bb(Ya(z - r) ** 0.5 - A) + 1 / 7) * wb(1.5 * F));
  ua = () => {
    P(n);
    Y.r9r(0, 0, 128, 128, 6408, 5121, $b);
    NO_INLINE(R)();
    !G && n === I || (I = n, H().invertSelf(), lb(Va, Wa, Xa), V = hb, t = ib, y = jb, G = G && (n ? 0 : 1));
    (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (G = 2);
    1 === n && (e[15].i = -15 > Va && 0 > Xa ? 1 : 0);
    k = xb(k, va * (30 < n && 35 > n), 2,);
    C = q(C, Va, 0.5, 1);
    K = q(K, f = eb(xb(f, Wa, 2), Wa, G || 8 * Ya(f - Wa),), 2, 1,);
    L = q(L, Xa, 0.5, 1);
    ha ? (r = G + wb(18), Ga = eb(Ga, Va, r), Ia = eb(Ia, Xa, r), Ha = eb(Ha, 1.6 + f, r), Ua = cb(Ua)) : (Ga = q(Ga, C, 1, 2 + k,), Ia = q(Ia, L + -18 + 5 * k, 1, 2 + k,), Ha = q(Ha, $a(K + bb((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), r = Za(-6, -Ya(L - Ia)), z = C - Ga, Ua = db(Ua, 90 - cb(Math.atan2(r, z) / La), B + wb(10),), Ta = db(Ta, 90 - Math.atan2(gb(r, z), Ha - K) / La, B + wb(10),));
    Ta = bb(Ta, -87, 87);
    B = 0;
    var r = bb(Ea, -1), z = bb(Fa, -1), A = ab(gb(r, z) ** 0.5, 0.1), F = Math.atan2(r, z);
    A && (a = 90 - F / La);
    b = db(b, a, wb(8));
    g = xb(g, A, 10);
    X(Va, 0.06 * E * g * Math.cos(18.2 * d) + f, Xa,).rotateSelf(0, b);
    for (var N = 0; 2 > N; ++N) {
      const T = 9.1 * d - Math.PI * N;
      ob(h[37].m, X(0)).translateSelf(0, g * bb(0.45 * Math.sin(T - Math.PI / 2)),).rotateSelf(g * Math.sin(T) * 0.25 / La, 0);
    }
    w = n ? 5 : xb(w, G ? 13 : 19 - 2 * Za(0, Wa + 10), 2.2);
    p = n || G ? 0 : xb(p, 0, 3);
    m = n || G ? 0 : xb(m, 0, 3);
    r = (u = G ? 0 : xb(u, n ? 7 * bb(2 * A) * E : 0, n ? 9 : 1,)) * A * Ya(r) * Math.sin(F);
    z = u * A * Ya(z) * Math.cos(F);
    F = ha ? (180 + Ua) * La : 0;
    A = Da * (p + (z * Math.cos(F) - Math.sin(F) * r));
    N = Da * -w;
    r = Da * (m + (z * Math.sin(F) + Math.cos(F) * r));
    H().invertSelf();
    lb(A, N, r, 0);
    V += hb;
    t += N;
    y += jb;
    P();
  };
}, hc = (a, b) => {
  let g;
  ca ? 1100 < hC.width && a.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s) : (g = void 0 === b ? 41 : 42, a.das(4, h[g].D - h[g].s, 5123, 2 * h[g].s, Ma.length,), a.das(4, h[40].D - h[40].s, 5123, 2 * h[40].s, e.length,), a.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
}, ic = (a, b, g) => {
  const k = {}, p = (u, E = 35633,) => (E = a.c6x(E), a.s3c(E, u), a.c6a(E), E), m = a.c1h();
  return a.abz(m, p(b, 35633)), a.abz(m, p(g, 35632)), a.l8l(m), u => u ? k[u] || (k[u] = a.gan(m, u)) : a.u7y(m);
}, l = new DOMMatrix(), v = new DOMMatrix(), mb = new Float32Array(16), jc = new Float32Array(760), $b = new Uint8Array(65536), kc = (NO_INLINE('<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">\n    \n    \n    \n  <link rel="stylesheet" href="/index.css"></head>\n\n  <body>\n    <canvas id="hD" height="128" width="128"></canvas>\n    <canvas id="hC"></canvas>\n    <h4 id="h4">loading</h4>\n    <b id="b5">☰</b>\n    <h3 id="h3"></h3>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle."</i>\n        <ul>\n          <li id="b1">Play</li>\n          <li id="b2">Play first person</li>\n          <li id="b3">Restart</li>\n          <li id="b4"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target="_blank" href="https://github.com/SalvatorePreviti/js13k-2022">© 2022 Salvatore Previti</a> -\n          <a target="_blank" href="https://twitter.com/ryanmalm">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    \n  \n\n<script type="module" src="/index.js" crossorigin="">\x3c/script></body></html> * {\n  -webkit-user-select: none;\n  user-select: none;\n  color: #fda;\n  font-weight: 100;\n  touch-action: none;\n  overscroll-behavior: contain;\n}\nhtml,\nbody {\n  background: #000;\n  margin: 0;\n  font-family: "Times New Roman", serif;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\np {\n  font-size: 0.7em;\n}\nbody > * {\n  position: absolute;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  background: #00000080;\n  border-radius: 1em;\n  max-width: max(780px, 50vw);\n  padding: 1em;\n}\n#b5,\nh3 {\n  padding: 10px;\n}\nh3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nmain,\n.m h4,\n#hD {\n  display: none;\n}\n'), 
"data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), Z = hC.getContext("webgl2", {powerPreference:"high-performance",}), Y = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, antialias:!1,});
for (const a in Y) {
  [Z, Y,].map(b => b[a[0] + [...a,].reduce((g, k, p) => (g * p + k.charCodeAt(0)) % 434, 0).toString(36)] = b[a]);
}
zb(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const k = t => {
        requestAnimationFrame(k);
        var y = (t - (aa || t)) / 1e3;
        if (za += y, d += Da = ca ? 0 : Za(0.055, y), aa = t, 0 < Da) {
          y = (G, w, H) => X(G + Math.sin(d + 2) / 5, w + Math.sin(0.8 * d) / 5, H).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          Ka && d > Ka && (Ka = 0, h4.innerHTML = "");
          ra = xb(ra, e[15].h, 0.2 + 0.3 * Ya(2 * e[15].h - 1),);
          qa = pa ? (ha = 0, xb(qa, -9, 0.015)) : xb(qa, bb(d / 3), 1);
          ma();
          t = (ta = 1, va = fb(e[13].g, e[8].g), ya = eb(xb(ya, 0, 1), cb(ya + 60 * Da), e[2].g - e[3].h,), wa = eb(xb(wa, 0, 5), cb(wa + 56 * Da), va,), xa = eb(xb(xa, 0, 4), cb(xa + 48 * Da), va,), X(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g),), Za(1 - e[11].h, e[10].h));
          var B = (X(t * Math.sin(0.6 * d + 1.2) * 12, 0, 35), X(t * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), X(t * Math.sin(0.6 * d) * 12, 0, 45), X(9.8 * (1 - t)), t = bb(1 - 5 * t) * fb(e[11].g, e[2].g), X(0, t * Math.sin(1.35 * d) * 4), X(0, 0, t * Math.sin(0.9 * d) * 8), X(0, -6.5 * e[11].h), t = fb(e[4].h, e[3].h), X(0, t * Math.sin(d) * 5 + 3.5 * (1 - $a(e[3].g, e[4].g)),), X(0, t * Math.sin(d + 3) * 6, t * Math.sin(0.6 * d + 1) * 6,), X(0, -7.3 * e[4].h), t = fb(e[6].g, e[7].g), X(0, -2, 10 - 
          8.5 * t * Ya(Math.sin(1.1 * d))), X(0, -2, 10 - 8.5 * t * Ya(Math.sin(2.1 * d))), X(0, -2, 10 - 8.5 * $a(t * Ya(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - t)),), fb(e[5].h, e[13].h));
          for (t = 0; 4 > t; t++) {
            X((2 < t ? 2 * (1 - B) + B : 0) - 100, B * Math.sin(1.3 * d + 1.7 * t) * (3 + t / 3) + 0.7, 115 - 7 * (1 - e[5].h) * (1 - e[13].h) * (1 & t ? -1 : 1) + $a(0.05, B) * Math.cos(1.3 * d + 7 * t) * (4 - 2 * (1 - t / 3)),);
          }
          t = fb(e[8].h, e[9].h);
          for (let G = 0; 3 > G; ++G) {
            X(0, t * Math.sin(1.5 * d + 1.5 * G) * 4 + (G ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)),);
          }
          t = fb(fb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2,);
          X(0, 16 * t, 95 + 8.5 * bb(2 * t - 1));
          X(0, -4.7 * e[0].g, -15);
          X(0, -4.7 * e[10].g, 15);
          X(-99.7, -1.9 - 5.5 * e[3].g, 63.5);
          X(-100, 0.6 - 5.8 * e[13].g, 96.5);
          X(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + ya, 0,);
          X(2.5 * (1 - B) - 139.7, -3 * (1 - e[5].g) - B * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * B), 0);
          X(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          X(-81, 0.6, 106).rotateSelf(0, 40 + wa);
          X(-65.8, 0.8, 106).rotateSelf(0, xa);
          X(-50.7, 0.8, 106).rotateSelf(0, 180 - xa);
          X(-50.7, 0.8, 91).rotateSelf(0, 270 + xa);
          y(-12, 4.2, 40 * qa - 66);
          y(-123, 1.4, 55 - 65 * ra);
          for (y = 0; 13 > y; ++y) {
            Ma[y](), nb(l, jc, 12 + y);
          }
          for (y = 0; 16 > y; ++y) {
            e[y](), nb(l, jc, 25 + y);
          }
          for (let G, w = 0, H = 656; 26 > w; ++w, ++H) {
            G = h[2 + w].m, jc[H++] = G.m41, jc[H++] = G.m42, jc[H++] = G.m43;
          }
          ua();
          for (y = 0; 12 > y; ++y) {
            nb(h[28 + y].m, jc, y);
          }
          Y.cbf(!0, !0, !0, !0);
          Y.c4s(16640);
          Y.u3a(n("j"), jc);
          Y.cbf(!0, !1, !0, !1);
          Y.uae(n("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa,),),);
          hc(Y);
          Y.c4s(256);
          Y.cbf(!1, !0, !1, !0);
          Y.uae(n("b"), !1, nb(ob().translateSelf(-Va, -Wa, -Xa - 0.3,),),);
          hc(Y);
          Y.f1s();
          fa = 0;
        }
        y = Ga;
        B = Ha;
        t = Ia;
        ca ? (ob(ia).invertSelf(), lb(3.6, 3.5), y = hb, B = ib, t = 5, ob(v, m).rotateSelf(-20, 0).invertSelf().translateSelf(-y, -B, -t,).rotateSelf(0, 99), ob().rotateSelf(0, 40 * Math.sin(za) - 80, -8), nb(l, jc, 9), nb(l, jc, 10), nb(l, jc, 11)) : ob(v, m).rotateSelf(-Ta, -Ua).invertSelf().translateSelf(-y, -B, -t);
        C();
        Z.u3a(C("j"), jc);
        Z.ubu(C("k"), y, B, t);
        Z.uae(C("a"), !1, nb(v));
        Z.ubh(C("g"), 3);
        Z.ubh(C("h"), 3);
        Z.b6o(36160, V);
        Z.v5y(0, 0, 2048, 2048);
        L(54.7);
        hc(Z, !ha);
        I(126);
        hc(Z, !ha);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(C("b"), !1, nb(m));
        Z.uae(C("a"), !1, nb(ia));
        Z.uae(C("i"), !1, u);
        Z.ubh(C("g"), 0);
        Z.ubh(C("h"), 1);
        hc(Z, !ha);
        K();
        Z.uae(K("b"), !1, nb(ob(m).invertSelf()));
        Z.ubu(K("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, za);
        Z.d97(4, 3, 5123, 0);
      }, p = new DOMMatrix(), m = new DOMMatrix(), u = new Float32Array(32), E = g, f = D(8, () => ({})), n = ic(Y, "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}", 
      "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), C = ic(Z, 
      "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}", "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), K = ic(Z, "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}", "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
      ), [L, I] = D(2, t => {
        const y = Z.c25();
        return Z.a4v(33984 + t), Z.b9j(3553, y), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), B => {
          let G = 0, w = 0, H = 0, P = 1 / 0, R = 1 / 0, q = 1 / 0, r = -1 / 0, z = -1 / 0, A = -1 / 0;
          Z.fas(36160, 36096, 3553, y, 0);
          Z.c4s(256);
          ob().scale3dSelf(B *= 1.1).multiplySelf(ob(la[t], p).multiplySelf(m).invertSelf(),);
          for (let F = 0; 8 > F; ++F) {
            const N = f[F];
            lb(4 & F ? 1 : -1, 2 & F ? 1 : -1, 1 & F ? 1 : -1);
            G -= N.x = (0 | hb) / (B * kb);
            w -= N.y = (0 | ib) / (B * kb);
            H -= N.z = (0 | jb) / (B * kb);
          }
          ob().rotateSelf(298, 139).translateSelf(G / 8, w / 8, H / 8);
          for (B = 0; 8 > B; ++B) {
            const {x:F, y:N, z:T} = f[B];
            lb(F, N, T);
            P = Za(P, hb);
            r = $a(r, hb);
            R = Za(R, ib);
            z = $a(z, ib);
            q = Za(q, jb);
            A = $a(A, jb);
          }
          B = 10 + t;
          q *= 0 > q ? B : 1 / B;
          A *= 0 < A ? B : 1 / B;
          Z.uae(C("b"), !1, nb(ob(v, p).scaleSelf(2 / (r - P), 2 / (z - R), 2 / (q - A),).translateSelf((r + P) / -2, (z + R) / -2, (q + A) / 2).multiplySelf(l), u, t,), 16 * t, 16,);
        };
      }), V = Z.c5w();
      C();
      Z.ubh(C("q"), 2);
      K();
      Z.ubh(K("q"), 2);
      n();
      Y.uae(n("a"), !1, nb(yb(1e-4, 2, 1.2, 0.4)));
      Y.c5t(0, 0, 0, 0);
      Y.v5y(0, 0, 128, 128);
      Y.e8z(2929);
      Y.e8z(2884);
      Z.b6o(36160, V);
      Z.d45([0,]);
      Z.r9l(0);
      Z.a4v(33986);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, E);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.c5t(0, 0, 0, 1);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.d4n(515);
      NO_INLINE(Hb)();
      NO_INLINE(ac)();
      requestAnimationFrame(k);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = kc;
  NO_INLINE(Gb)(() => {
    zb(() => {
      let f = 0;
      const n = [], C = [], K = [], L = [], I = new Int32Array(8), V = new Map(), t = new Int32Array(I.buffer, 0, 5), y = new Float32Array(I.buffer);
      h.map((w, H) => {
        let P;
        const R = q => {
          let {x:r, y:z, z:A} = P[q], F = (y[0] = r, y[1] = z, y[2] = A, q = "" + (P.C ? t : I), V.get(q));
          return void 0 !== F ? (r = 3 * F, L[r] = (L[r++] + I[5]) / 2, L[r] = (L[r++] + I[6]) / 2, L[r] = (L[r] + I[7]) / 2) : (V.set(q, F = V.size), C.push(r, z, A, y[3]), K.push(I[4]), L.push(I[5], I[6], I[7])), F;
        };
        for (P of (y[3] = 40 < H ? -12 : 39 < H ? -25 : H, w.o)) {
          const {x:q, y:r, z} = Sb(P);
          I[4] = 0 | P.u;
          I[5] = 32767 * q;
          I[6] = 32767 * r;
          I[7] = 32767 * z;
          for (let A = 2, F = R(0), N = R(1); P.length > A; ++A) {
            n.push(F, N, N = R(A));
          }
        }
        w.o = 0;
        w.s = f;
        w.D = f = n.length;
      });
      [Z, Y,].map(w => {
        w.b11(34962, w.c1b());
        w.b2v(34962, new Float32Array(C), 35044);
        w.v7s(0, 4, 5126, !1, 0, 0);
        w.b11(34962, w.c1b());
        w.b2v(34962, new Int16Array(L), 35044);
        w.v7s(1, 3, 5122, !0, 0, 0);
        w.b11(34962, w.c1b());
        w.b2v(34962, new Uint32Array(K), 35044);
        w.v7s(2, 4, 5121, !0, 0, 0);
        w.b11(34963, w.c1b());
        w.b2v(34963, new Uint16Array(n), 35044);
        w.e3x(0);
        w.e3x(1);
        w.e3x(2);
      });
      let B = [], G = [];
      try {
        const [w, H, P, R, q] = JSON.parse(localStorage.F,);
        B = w;
        G = H;
        Ja = P;
        ra = R;
        d = q;
      } catch {
      }
      e.map((w, H) => w.g = w.h = w.i = 14 !== H && B[H] ? 1 : 0);
      Ma.map((w, H) => w.i = G[H] ? 1 : 0);
      Jb();
      qa = na || 14 !== Ja ? 1 : 0;
      zb(b);
    });
    const k = f => x(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), p = f => S(J(M(), x(0, -f / 2).scale(6, f - 1, 2.2)), J(M(), x(0, -f / 2 - 6).scale(4, f - 3, 4)), J(M(28, 1), x(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), m = D(11, f => sb(qb(rb(16), k(f), O(1, 1, 0.8, 0.2)).reverse(), qb(rb(16), k(f + 1), O(1, 1, 0.8, 0.2)), 1,)).flat(), u = [...J(M(), x(0, -3).scale(11, 1.4, 3), O(0.9, 0.9, 0.9, 0.2)), ...J(M(), x(0, -2.2).scale(7.7, 0.5, 4), O(0.5, 
    0.5, 0.5, 0.2)), ...D(12, f => J(M(), v.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), O(0.6, 0.5, 0.3, 0.2),)).flat(), ...S(J(M(6), v.rotate(90).scale(6, 8, 6), O(0.3, 0.6, 0.6, 0.3)), J(M(4, 0, 0.01), x(0, 6).scale(12, 2, 0.75).rotate(0, 45), O(0.3, 0.6, 0.6, 0.3),), J(M(6), v.rotate(90).scale(5, 12, 5), O(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => J(M(5), x(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), O(0.3, 0.6, 0.6, 0.3),)),),], E = S(J(M(), x(0, -0.5, 1).scale(1.15, 1.2, 6.5), O(0.25, 
    0.25, 0.35, 0.3),), S(J(M(3), x(0, 0, -5.5).scale(3, 2), O(0.6, 0.3, 0.4, 0.3)), J(M(), x(0, 0, -3.65).scale(2.5, 3), O(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => J(M(), x(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), O(0.7, 0.2, 0, 0.3),)),);
    Q("MODEL_ID_SKY");
    c([Na.slice(1),], x(-2).scale3d(3).rotate(90, 0));
    Q("MODEL_ID_STATIC_WORLD");
    Lb(x(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, n) => {
      c(M(), x(0, 0, n ? 22 : -23).scale(3, 1, 8), O(0.9, 0.9, 0.9, 0.2));
      c(M(), x(0, 6.3, f).scale(4, 0.3, 1), O(0.3, 0.3, 0.3, 0.4));
      c(M(), x(0, 1, f).scale(3, 0.2, 0.35), O(0.5, 0.5, 0.5, 0.3));
    });
    c(M(), x(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(M(), x(3, 1.5, -20).scale(0.5, 2, 5), O(0.7, 0.7, 0.7, 0.2));
    c(M(), x(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), O(0.75, 0.75, 0.75, 0.2),);
    c(M(5), x(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), O(0.6, 0.3, 0.3, 0.4));
    c(S(Zb(J(M(6, 0, 0, 0.3), x(8, -3, -4).scale(13, 1, 13), O(0.7, 0.7, 0.7, 0.2),), S(J(M(6, 0, 0, 0.3), x(0, -0.92).scale(13, 2, 13), O(0.8, 0.8, 0.8, 0.2),), J(M(), v.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), O(0.5, 0.5, 0.5, 0.5),),), J(M(), v.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), O(0.8, 0.2, 0.2, 0.5),), J(M(6), x(0, -8).scale(9, 8, 7), O(0.2, 0.1, 0.4, 0.5)),), J(M(5), v.scale(5, 30, 5), O(0.4, 0.2, 0.6, 0.5)), J(M(5, 0, 1.5), 
    x(0, 1).scale(4.5, 0.3, 4.5), O(0.7, 0.5, 0.9, 0.2),), J(M(6), x(15, -1.5, 4).scale(3.5, 1, 3.5), O(0.5, 0.5, 0.5, 0.5),),),);
    Lb(x(15, -2, 4));
    c(M(), x(-18.65, -3, 55).scale(2.45, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    Lb(x(-55, -1.1, 46).rotate(0, 90));
    c(M(7), x(-57, -2.6, 46).scale(4, 1, 4), O(0.8, 0.8, 0.8, 0.3));
    c(M(6), x(-61.3, -2.4, 49).scale(3, 1, 5), O(0.4, 0.6, 0.6, 0.3));
    c(u, x(-53, 0, 55));
    c(M(), x(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), O(0.7, 0.7, 0.7, 0.2),);
    c(M(3, 0, -0.5), x(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), O(0.8, 0.8, 0.8, 0.2),);
    c(S(Zb(J(M(), x(-100, -2.4, 55).scale(8, 0.9, 8), O(0.8, 0.8, 0.8, 0.2),), J(M(), x(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), O(0.8, 0.8, 0.8, 0.2),), J(M(), x(-100, -2.6, 70).scale(3, 1.1, 7), O(0.8, 0.8, 0.8, 0.2),), J(M(), x(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), O(0.8, 0.8, 0.8, 0.2),), J(M(6), x(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), O(0.6, 0.6, 0.6, 0.3),), J(M(), x(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), O(0.8, 0.8, 0.8, 0.2),), J(M(), x(-100, 0.42, 
    92).scale(3, 1.1, 4.1), O(0.8, 0.8, 0.8, 0.2),),), J(M(8), x(-100, -1, 55).scale(7, 0.9, 7), O(0.3, 0.3, 0.3, 0.4)), J(M(8), x(-100, -2, 55).scale(4, 0.3, 4), O(0.4, 0.4, 0.4, 0.5)), J(M(8, 0, -3.1), x(-100, -3, 55).scale(0.4, 1, 0.4), O(0.4, 0.4, 0.4, 0.5),),),);
    c(S(J(M(), x(-100, 1, 63).scale(7.5, 4), O(0.5, 0.5, 0.5, 0.4)), J(M(), x(-100, 0, 70).scale(2, 2, 10), O(0.5, 0.5, 0.5, 0.4)), J(M(20, 1), x(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), O(0.5, 0.5, 0.5, 0.4),),),);
    Na.map(({x:f, z:n}) => {
      c(M(6), x(3 * f, 3, 15 * n).scale(0.7, 4, 0.7), O(0.6, 0.3, 0.3, 0.4));
      c(M(6), x(7 * f - 100, -3, 7 * n + 55).scale(1, 8.1), O(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(C => c(M(6), x(7 * f - 100, C, 7 * n + 55).scale(1.3, 0.5, 1.3), O(0.4, 0.2, 0.2, 0.8),));
      c(M(14, 1), x(9 * f - 38.9, -7.3, 11 * n + 17).scale(1, 4), O(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(C => c(M(17, 1), x(9 * f - 38.9, C - 11.3, 11 * n + 17).scale(1.5, 0.5, 1.5), O(0.6, 0.6, 0.6, 0.3),));
    });
    D(7, f => {
      c(M((23 * f + 1) % 5 + 5, 0, 0.5), x(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), O(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(M(), x(-87, -9.5, 24).scale(7, 1, 3), O(0.4, 0.5, 0.6, 0.4));
    c(M(4), x(-86, -9.2, 27).scale(5, 1, 5), O(0.5, 0.6, 0.7, 0.3));
    c(M(12, 1), x(-86, -9, 31).scale(1.5, 1, 1.5), O(0.3, 0.3, 0.4, 0.1));
    Lb(x(-86, -7.5, 31));
    c(S(Zb(J(M(5), x(0, 0, -7).scale(2, 1.2, 2), O(0.2, 0.4, 0.7, 0.3)), J(M(5), v.scale(9, 1.2, 9), O(0, 0.2, 0.3, 0.5)), J(M(), v.scale(11, 1, 13), O(0.3, 0.4, 0.6, 0.3)),), J(M(5), v.scale(5.4, 5, 5.4), O(0, 0.2, 0.3, 0.5)),), x(-38.9, -11.3, 17),);
    Lb(x(-38.9, -9.6, 10));
    c(S(Zb(J(M(6), x(0, 0, -18).scale(15, 1.2, 15), O(0.7, 0.7, 0.7, 0.3),), J(M(), v.scale(4, 1.2, 6), O(0.45, 0.4, 0.6, 0.3)),), ...D(6, f => D(6, n => J(M(6), x(4.6 * n - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * n) - 32).scale(2, 5, 2), O(0.7, 0.7, 0.7, 0.3),),)).flat(),), x(-38.9, -11.3, -1),);
    c(M(5), x(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), O(0.8, 0.1, 0.25, 0.4));
    Lb(x(-84, -0.7, 85).rotate(0, 45));
    c(S(Zb(J(M(), x(26.5, -1.6, 10).scale(20, 2.08, 3)), J(M(), x(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...D(4, f => J(M(), x(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...D(3, f => J(M(), x(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), x(-123, 0.2, -12), O(0.5, 0.5, 0.6, 0.2),);
    Lb(x(-116, -1.4, -18).rotate(0, 180));
    c(M(6), x(-116, -2.6, -16.5).scale(3.2, 0.8, 3), O(0.6, 0.5, 0.7, 0.2));
    c(M(), x(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), O(0.8, 0.8, 0.8, 0.2));
    c(M(), x(-115.5, -17, -12).scale(0.5, 15, 2.2), O(0.6, 0.6, 0.6, 0.3));
    c(M(8), x(-114, -17, -2).scale(2, 15, 2), O(0.6, 0.6, 0.6, 0.3));
    c(M(8), x(-79, -17, -2).scale(2, 15, 2), O(1, 1, 1, 0.3));
    c(M(), x(-77, -17, -50.5).scale(2.2, 15, 0.5), O(0.6, 0.6, 0.6, 0.3));
    c(S(J(M(12), x(-77, -14.5, -12).scale(4, 17.5, 4), O(0.7, 0.7, 0.7, 0.2),), J(M(12), x(-77, 3.1, -12).scale(3, 5, 3), O(0.4, 0.5, 0.6, 0.2)), J(M(), x(-79, 0.1, -12).scale(3.5, 2, 1.3), O(0.4, 0.5, 0.6, 0.2),), J(M(), x(-77, 0.1, -14).scale(1.5, 2, 2), O(0.4, 0.5, 0.6, 0.2)),),);
    c(S(J(M(), x(-93, -5.8, -40).scale(9, 1, 5), O(0.8, 0.8, 0.8, 0.1)), J(M(9), x(-98, -5.8, -40).scale(3, 8, 3), O(0.7, 0.7, 0.7, 0.2)),),);
    c(M(), x(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), O(0.6, 0.6, 0.6, 0.3));
    c(M(9), x(-98, -18.4, -40).scale(2.5, 13.5, 2.5), O(0.5, 0.5, 0.5, 0.3));
    Lb(x(-98, -4.4, -40).rotate(0, 90));
    [-1, 1,].map((f, n) => {
      c(S(J(M(), x(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), O(0.5, 0.5, 0.5, 0.4),), J(M(), v.scale(3, 3, 10), O(0.6, 0.24, 0.2, 0.5)), J(M(32, 1), x(0, 3, -5).scale(3, 4, 10).rotate(90, 0), O(0.6, 0.24, 0.2, 0.5),), J(M(5), x(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), O(0.6, 0.24, 0.2, 0.5),), J(M(5), x(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), O(0.6, 0.24, 0.2, 0.5),),), x(f - 100, 0.7, 97),);
      c(M(12, 1), x(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), O(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5,].map(C => c(M(15, 1), x(-7.5 * f - 100, C + 0.7, 96).scale(1.1, 0.5, 1.1), O(0.5, 0.24, 0.2, 0.4),));
      c(m, x(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(m, x(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      D(5, C => c(m, x(18.5 * (n - 0.5), 0, 4.8 * C - 9.5).rotate(0, 180 - 180 * n).scale(1.2, 10, 1.2),));
    });
    c(S(J(M(), x(-82.07, 0.8, 106).scale(11, 0.9, 2.2), O(0.7, 0.7, 0.7, 0.1),), J(M(45, 1), x(-81, 0.7, 106).scale3d(7.7), O(0.7, 0.7, 0.7, 0.1),),),);
    c(M(), x(-58, 1, 106).scale(2, 0.65, 2), O(0.7, 0.7, 0.7, 0.2));
    c(M(), x(-50.7, 1, 99).scale(2, 0.65, 1), O(0.7, 0.7, 0.7, 0.2));
    c(M(), x(-42, 0.4, 91).scale(5, 1, 2.5), O(0.7, 0.7, 0.7, 0.3));
    c(M(), x(-34.2, 0.4, 91).scale(3, 1, 3), O(0.7, 0.7, 0.7, 0.3));
    c(M(5), x(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), O(0.2, 0.5, 0.5, 0.6));
    Lb(x(-34, 2.7, 96).rotate(-12, 0));
    c(S(Zb(J(M(6, 0, 0, 0.6), x(-100, 0.7, 105.5).scale(8, 1, 11), O(0.7, 0.7, 0.7, 0.2),), J(M(), x(-101.5, 0.7, 93.5).scale(10.5, 1, 2), O(0.7, 0.7, 0.7, 0.2),),), J(M(5), x(-100, 0.7, 113).scale(4, 3, 4), O(0.7, 0.7, 0.7, 0.2)),),);
    D(3, f => {
      c(p(16), x(-77, -9, -12 * f - 20).rotate(0, 90), O(0.6, 0.6, 0.6, 0.3),);
      c(p(16), x(12 * f - 109, -9, -12), O(0.6, 0.6, 0.6, 0.3));
      c(p(24.7 - 0.7 * (1 & f)), x(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? O(0.5, 0.5, 0.5, 0.3) : O(0.35, 0.35, 0.35, 0.5),);
    });
    c(S(J(M(6, 0, 0, 0.3), x(0, -0.92, 95).scale(14, 2, 14), O(0.8, 0.8, 0.8, 0.2),), J(M(5), x(0, 0, 95).scale3d(6), O(0.3, 0.3, 0.3, 0.5)),),);
    Lb(x(0, 1.7, 82).rotate(0, 180));
    c(M(5), x(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), O(0.5, 0.3, 0.3, 0.4),);
    c(M(6), x(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), O(0.5, 0.6, 0.7, 0.3));
    c(M(), x(0, 16, 127.8).scale(1.5, 1, 0.7), O(0.5, 0.6, 0.7, 0.3));
    c(M(7), x(0, 15.1, 133).scale(5, 2, 5), O(0.4, 0.5, 0.6, 0.4));
    c(S(Zb(J(M(), x(0, 16, 110.5).scale(12, 1, 3), O(0.5, 0.3, 0.3, 0.4)), J(M(), x(0, 16, 111).scale(3, 1, 3.8), O(0.5, 0.3, 0.3, 0.4)),), J(M(5), x(0, 16, 103.5).scale(5.5, 5, 5.5), O(0.5, 0.3, 0.3, 0.4),),),);
    Mb(x(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Mb(x(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...rb(18).map(({x:f, z:n}) => [7 * f, 10 * n, 4.5 - 2 * Ya(f),]),);
    Mb(x(0, 3, 95), ...rb(9).map(({x:f, z:n}) => [9 * f, 9 * n, 4,]),);
    Mb(x(0, 19, 134), [0, 0, 3.5,]);
    Mb(x(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Mb(x(-89, 0.2, 80), [0, 0, 6,]);
    Mb(x(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Mb(x(-115, 0.2, -12), [0, 0, 3.5,]);
    Mb(x(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    Q("MODEL_ID_LEVEL1_CENTRAL_PLATFORM");
    c(M(5), x(0, -0.2).scale(5, 1, 5), O(0.6, 0.65, 0.7, 0.3));
    Lb(x(0, 1.2));
    D(2, f => {
      Q("MODEL_ID_LEVEL2_BLACK_PLATFORM" + f);
      Na.map(({x:n, z:C}) => {
        c(M(11, 1), x(4 * n, 4, 4 * C).scale(0.8, 3, 0.8), O(0.5, 0.3, 0.7, 0.6));
        c(M(), x(4 * n, 7, 4 * C).scale(1, 0.3), O(0.5, 0.5, 0.5, 0.3));
      });
      c(S(J(M(), v.scale(5, 1, 5), O(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(n => J(M(25, 1), x(5 * n, 0.2).rotate(-30 * n).scale(4, 1, 3), O(0.8, 0.8, 0.8, 0.3),)),),);
      c(M(), x(0, -3).scale(8, 2, 8), O(0.4, 0.4, 0.4, 0.3));
    });
    Q("MODEL_ID_LEVEL2_CENTRAL_PLATFORM");
    c(S(Zb(J(M(), v.scale(1.5, 1, 5), O(0.9, 0.9, 0.9, 0.2)), J(M(6), v.scale(4, 1, 5), O(0.9, 0.9, 0.9, 0.2)), J(M(), x(0, -2).scale(2, 3.2, 1.9), O(0.3, 0.8, 0.5, 0.5)), J(M(16, 1, 0, 4), v.scale(1, 1, 1.5).rotate(0, 90), O(0.9, 0.9, 0.9, 0.2),),), J(M(), v.scale(1.3, 10, 1.3), O(0.2, 0.7, 0.4, 0.6)),),);
    Mb(x(0, 2.8), [0, 0, 4.5,]);
    Q("MODEL_ID_TRIANGLE_PLATFORM");
    c(M(3), x(-23, -1.7, 55.8).scale(5, 0.7, 8.3), O(0.3, 0.6, 0.6, 0.2));
    c(M(8), x(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), O(0.8, 0.8, 0.8, 0.2));
    c(M(), x(-23, -3, 55).scale(5.2, 1.7, 3), O(0.5, 0.5, 0.5, 0.3));
    c(M(), x(-23, -2.2, 62).scale(3, 1, 4), O(0.5, 0.5, 0.5, 0.3));
    Lb(x(-23, -0.5, 66.5));
    Q("MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL");
    c(M(), x(-22.55, -3, 55).scale(1.45, 1.4, 2.7), O(0.7, 0.7, 0.7, 0.2));
    c(S(J(M(), v.scale(3, 1.4, 2.7)), J(M(), v.scale(1.2, 8, 1.2)),), x(-33, -3, 55), O(0.7, 0.7, 0.7, 0.2),);
    Q("MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL");
    c(S(J(M(), x(-27, -3, 55).scale(3, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2)), J(M(), x(-27, -3, 55).scale(1, 3), O(0.9, 0.9, 0.9, 0.2)),),);
    c(M(), x(-39, -3, 55).scale(3, 1.4, 2.7), O(0.9, 0.9, 0.9, 0.2));
    Q("MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR");
    c(M(6), x(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), O(0.7, 0.7, 0.7, 0.4),);
    Q("MODEL_ID_ELEVATORS0");
    [0, 12, 24,].map(f => c(M(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.2, 0.5, 0.6, 0.2),));
    Q("MODEL_ID_ELEVATORS1");
    [6, 18,].map(f => c(M(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), O(0.1, 0.4, 0.5, 0.2),));
    Q("MODEL_ID_MONUMENT");
    c(S(Zb(J(M(5), x(0, 2).scale(5, 7, 5).skewY(8), O(0.2, 0.4, 0.5, 0.5),), J(M(5), x(0, 6).scale(1.1, 7, 1.1).skewY(-8), O(0.25, 0.35, 0.5, 0.5),), J(M(5), x(0, 9).scale(0.6, 7, 0.6).skewY(8), O(0.35, 0.3, 0.5, 0.5),),), J(M(5), v.scale(4, 8, 4), O(0.2, 0.4, 0.5, 0.5)), J(M(5), x(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), O(0.2, 0.4, 0.5, 0.5),),), x(-38.9, -11.3, 17),);
    Mb(x(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({x:f, z:n}) => [3 * f, 3 * n, 1.2,]),);
    Q("MODEL_ID_PUSHING_ROD0");
    D(2, f => c(E, x(9 * f - 110 + (1 & f), 1.9, -12)));
    Q("MODEL_ID_PUSHING_ROD1");
    D(2, f => c(E, x(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    Q("MODEL_ID_PUSHING_ROD2");
    D(3, f => c(E, x(9 * f - 106, 1.9, -12)));
    D(4, f => {
      Q("MODEL_ID_OSCILLATING_HEX_PAD" + f);
      c(M(6), x(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), O(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [O(0.1, 0.55, 0.45, 0.2), O(0.2, 0.5, 0.5, 0.3), O(0.3, 0.45, 0.55, 0.4),].map((f, n) => {
      Q("MODEL_ID_JUMPING_PAD" + n);
      c(M(), x(-23.5, 0.5, 91 + 6.8 * n).scale(1 === n ? 2 : 3.3, 1, 3.3), f);
      2 === n && c(M(), x(-29.1, 0.4, 91).scale(2.1, 1, 3), O(0.7, 0.7, 0.7, 0.3));
      1 === n && c(M(), x(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), O(0.6, 0.6, 0.7, 0.3),);
    });
    Q("MODEL_ID_FLOATING_ELEVATOR_PAD");
    c(M(5), v.scale(5, 1.1, 5), O(0.5, 0.3, 0.3, 0.4));
    c(M(5), v.scale(5.5, 0.9, 5.5), O(0.25, 0.25, 0.25, 0.4));
    Lb(x(0, 1.5, -1).rotate(0, 180));
    D(4, f => {
      Q("MODEL_ID_GATE" + f);
      D(7, n => c(J(M(9, 1), x((2 < f ? 3.5 : 4) * (n / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), O(0.3, 0.3, 0.38),),),);
    });
    Q("MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR");
    c(u);
    Q("MODEL_ID_DONUT_PAD");
    c(M(15, 1), x(-7.5).rotate(0, 90).scale(3, 2.3, 3), O(0.4, 0.4, 0.4, 0.3));
    c(M(10), x(-7.5).rotate(0, 90).scale(2, 2.5, 2), O(0.3, 0.8, 0.7, 0.3));
    c(M(5), x(-7.5).rotate(0, 90).scale(1, 3), O(0.5, 0.5, 0.5, 0.5));
    Lb(x(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(m, v.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(S(J(M(10), v.scale(6, 2, 6), O(0.1, 0.6, 0.5, 0.3)), J(M(10), v.scale(3.3, 6, 3.3), O(0.1, 0.6, 0.5, 0.5)),),);
    Mb(x(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    Q("MODEL_ID_PENDULUMS");
    c(M(3), x(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), O(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(M(6), x(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), O(0.7, 0.7, 0.7, 0.4),);
      c(M(), x(0, 6.2, f + 95).scale(0.5, 11, 0.5), O(0.5, 0.3, 0.3, 0.4));
    });
    Q("MODEL_ID_ROTATING_PLATFORM0");
    c(S(J(M(45, 1), v.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)), J(M(), x(0, 0, -5.5).scale(1.5, 3, 2.7), O(0.45, 0.45, 0.45, 0.2),),),);
    c(M(8), x(0, 2).scale(3, 1.5, 3).rotate(0, 22), O(0.7, 0.7, 0.7, 0.1));
    c(M(5), x(0, 2).scale(1, 2), O(0.3, 0.3, 0.3, 0.2));
    Mb(x(0, 3), ...rb(14).map(({x:f, z:n}) => [5.6 * f, 5.6 * n, 2,]),);
    Q("MODEL_ID_ROTATING_PLATFORM1");
    [-1, 1,].map(f => c(m, v.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90),));
    c(S(J(M(28, 1), x(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), J(M(), v.scale(9, 5, 2), O(0.3, 0, 0, 0.3)),),);
    c(J(M(28, 1), v.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(J(M(5), x(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    Q("MODEL_ID_ROTATING_PLATFORM2");
    c(S(J(M(28, 1), x(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), J(M(), x(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)), J(M(), x(0, 0, 7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),),);
    c(J(M(28, 1), v.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(J(M(5), x(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    Q("MODEL_ID_ROTATING_PLATFORM3");
    c(S(J(M(28, 1), x(0, 2).scale(7.5, 1, 7.5), O(0.35, 0, 0, 0.3)), J(M(), x(7).scale(9, 5, 2), O(0.3, 0, 0, 0.3)), J(M(), x(0, 0, -7).scale(2, 5, 9), O(0.3, 0, 0, 0.3)),),);
    c(J(M(28, 1), v.scale(7.5, 1, 7.5), O(0.45, 0.45, 0.45, 0.2)));
    c(J(M(5), x(0, 1).scale(1, 0.2), O(0.3, 0.3, 0.3, 0.2)));
    D(2, f => {
      Q("MODEL_ID_BOAT" + f);
      c(S(J(M(30, 1, 1.15, 1), x(0, -3).scale(3.5, 1, 3.5), O(0.7, 0.4, 0.25, 0.7),), J(M(30, 1, 1.3, 1), x(0, -2.5).scale(2.6, 1, 3), O(0.7, 0.4, 0.25, 0.2),), J(M(), x(4, -1.2).scale3d(2), O(0.7, 0.4, 0.25, 0.3)),),);
      Lb(x(0, -3, 4));
    });
    Q("MODEL_ID_PLAYER_BODY");
    c(tb(20), x(0, 1).scale3d(0.5), O(1, 0.3, 0.4));
    c(tb(30), v.scale(0.65, 0.8, 0.55), O(1, 0.3, 0.4));
    c(M(), x(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), O(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(m, v.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), O(1, 1, 0.8),);
      c(J(S(M(15, 1), J(M(), x(0, 0, 1).scale(2, 2, 0.5)),), v.rotate(-90, 0).scale(0.1, 0.05, 0.1), O(0.3, 0.3, 0.3),), x(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map((f, n) => {
      Q("MODEL_ID_PLAYER_LEG" + n);
      c(M(20, 1), x(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), O(1, 0.3, 0.4));
    });
    Q("MODEL_ID_LEVER");
    c(M(6, 1), v.scale(0.12, 1.2, 0.12), O(0.3, 0.3, 0.5, 0.1));
    c(M(9, 1), x(0, 0.8).scale(0.2, 0.3, 0.2), O(1, 0.5, 0.2));
    c(M(3), x(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), O(0.2, 0.2, 0.2, 0.1));
    Q("MODEL_ID_SOUL_COLLISION");
    c(M(6).slice(0, -1), v.scale(0.77, 1, 0.77), O(1, 0.3, 0.5));
    Q("MODEL_ID_SOUL");
    c(tb(30, 24, (f, n, C) => {
      var K = n / 24, L = f * Math.PI * 2 / 30, I = Math.sin(K ** 0.6 * Math.PI / 2);
      f = K * K * Math.sin(f * Math.PI * 14 / 30) / 4;
      return 23 < n ? {x:C.C = 0, y:-0.5, z:0,} : {x:Math.cos(L) * I, y:Math.cos(K * Math.PI) - K - f, z:Math.sin(L) * I + Math.sin(f * Math.PI * 2) / 4,};
    }), v.scale(0.7, 0.7, 0.7), O(1, 1, 1),);
    [-1, 1,].map(f => c(tb(12), x(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});

