let ca, da, ea, ha, ia, la, ma, na, oa, pa, c, qa, sa, ta, ua, va, wa, d = 0, xa = 0, ya = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 13, Ja = 0.1;
const Ka = Math.PI / 180, La = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Ma = [], e = [], h = [], Na = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Sa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ta = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 180;
const Za = NO_INLINE(b => 0 > b ? -b : b), $a = NO_INLINE((b, a) => b < a ? b : a), ab = NO_INLINE((b, a) => a < b ? b : a), bb = (b, a) => Za(b) > a ? b : 0, cb = (b, a = 0, g = 1) => b < a ? a : g < b ? g : b, db = b => Math.atan2(Math.sin(b * Ka), Math.cos(b * Ka)) / Ka, eb = (b, a, g) => b + (2 * (a = (a - b) % 360) % 360 - a) * cb(g) || 0, fb = (b, a, g) => (0 < g ? 1 > g ? b + (a - b) * g : a : b) || 0, gb = (b, a) => (b = cb(b), fb(b, 1 - b, a)), hb = (b, a, g = 0) => (b * b + a * a + g * 
g) ** 0.5, mb = (b = 0, a = 0, g = 0, k = 1) => {
  ib = l.m11 * b + l.m21 * a + l.m31 * g + l.m41 * k;
  jb = l.m12 * b + l.m22 * a + l.m32 * g + l.m42 * k;
  kb = l.m13 * b + l.m23 * a + l.m33 * g + l.m43 * k;
  lb = l.m14 * b + l.m24 * a + l.m34 * g + l.m44 * k;
};
var ib, jb, kb, lb;
const ob = (b, a = nb, g = 0,) => (g *= 16, a[g++] = b.m11, a[g++] = b.m12, a[g++] = b.m13, a[g++] = b.m14, a[g++] = b.m21, a[g++] = b.m22, a[g++] = b.m23, a[g++] = b.m24, a[g++] = b.m31, a[g++] = b.m32, a[g++] = b.m33, a[g++] = b.m34, a[g++] = b.m41, a[g++] = b.m42, a[g++] = b.m43, a[g] = b.m44, a), pb = (b = m, a = l,) => (a.m11 = b.m11, a.m12 = b.m12, a.m13 = b.m13, a.m14 = b.m14, a.m21 = b.m21, a.m22 = b.m22, a.m23 = b.m23, a.m24 = b.m24, a.m31 = b.m31, a.m32 = b.m32, a.m33 = b.m33, a.m34 = b.m34, 
a.m41 = b.m41, a.m42 = b.m42, a.m43 = b.m43, a.m44 = b.m44, a), z = NO_INLINE((b, a, g) => m.translate(b, a, g)), E = (b, a) => Array.from(Array(b), (g, k) => a(k)), qb = (b, a, g) => (b.C = g, b.u = a, b), rb = (b, a, g = b.u,) => (pb(a), qb(b.map(({x:k, y:p, z:n}) => (mb(k, p, n), {x:ib, y:jb, z:kb,})), g, b.C,)), I = (b, a, g) => b.map(k => rb(k, a, g)), sb = (b, a = 0) => E(b, g => {
  const k = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:0.01 > Za(k) ? k : 0 > k ? k - a : k + a,};
}), vb = (b, a, g) => b.map((k, p, {length:n}) => qb([k, a[n - p - 1], a[n - (p + 1) % n - 1], b[(p + 1) % n],], b.u, g,)), L = (b, a, g = 0, k,) => (b = b ? sb(b, k) : Na, k = rb(b, z(0, 1).scale3d(0 < g ? g : 1)), b = rb(b, z(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...vb(b, k, a), k, b,]), wb = (b, a = b, g = (k, p) => (p *= Math.PI / a, {x:Math.cos(k *= 2 * Math.PI / b) * Math.sin(p), y:Math.cos(p), z:Math.sin(k) * Math.sin(p),})) => {
  const k = [];
  for (let p = 0; b > p; p++) {
    for (let n = 0; a > n; n++) {
      const w = qb([], 0, 1);
      k.push(w);
      w.push(g(p, n, w));
      n && w.push(g((p + 1) % b, n, w));
      a - 1 > n && w.push(g((p + 1) % b, n + 1 % a, w));
      w.push(g(p, n + 1 % a, w));
    }
  }
  return k;
}, xb = NO_INLINE(b => 1 - Math.exp(-ya * b)), O = NO_INLINE((b, a, g) => fb(b, a, xb(g))), yb = (b, a, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (a + b) / (b - a), -1, 0, 0, 2 * a * b / (b - a), 0,]), zb = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Cb = b => Math.sin(b * Math.PI * 2), Db = b => 0.5 > b % 1 ? 1 : -1, Eb = b => b % 1 * 2 - 1, Fb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Gb = b => {
  let a = 0;
  const g = () => {
    let n = 0;
    const w = M => {
      let P, aa, Oa, ja = 0, ka = 0;
      const ba = [], ra = new Int32Array(768 * M), cc = 2 ** (x - 9) / M, dc = Math.PI * 2 ** (r - 8) / M, Ab = A * M & -2;
      for (let tb = 0; 11 >= tb; ++tb) {
        for (let ub = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * a + tb]; 32 > ub; ++ub) {
          const Pb = (32 * tb + ub) * M;
          for (var Pa = 0; 4 > Pa; ++Pa) {
            if (P = 0, Ob && (P = C[Ob - 1].charCodeAt(ub + 32 * Pa) - 40, P += 0 < P ? 106 : 0), P) {
              var fa;
              if (!(fa = ba[P])) {
                fa = P;
                let W = void 0, za = void 0;
                var Qb = P;
                let ec = 0, fc = 0;
                const gc = 2 > a ? Eb : Cb, hc = 2 > a ? 1 > a ? Db : Fb : Cb, Rb = new Int32Array(S + T + K);
                for (let Qa = 0, Bb = 0; S + T + K > Qa; ++Qa, ++Bb) {
                  let Ra = 1;
                  S > Qa ? Ra = Qa / S : S + T > Qa || (Ra = (1 - (Ra = (Qa - S - T) / K)) * 3 ** (-v / 16 * Ra));
                  0 > Bb || (Bb -= 4 * M, za = 0.00396 * 2 ** ((Qb + t - 256) / 12), W = 0.00396 * 2 ** ((Qb + D - 256) / 12) * (1 + (a ? 0 : 0.0072)));
                  Rb[Qa] = 80 * (gc(ec += za * Ra ** (J / 32)) * f + hc(fc += W * Ra ** (G / 32)) * H + (V ? (2 * Math.random() - 1) * V : 0)) * Ra | 0;
                }
                fa = ba[fa] = Rb;
              }
              for (let W = 0, za = 2 * Pb; fa.length > W; ++W, za += 2) {
                ra[za] += fa[W];
              }
            }
          }
          for (let W, za = 0; M > za; ++za) {
            Pa = 0;
            fa = 2 * (Pb + za);
            var Aa = (((W = ra[fa]) || Oa) && (aa = 0.00308 * B, 1 !== a && 4 !== a || (aa *= Math.sin(cc * fa * Math.PI * 2) * F / 512 + 0.5), aa = 1.5 * Math.sin(aa), ja += aa * ka, Aa = (1 - R / 255) * (W - ka) - ja, ka += aa * Aa, W = 4 === a ? ka : 3 === a ? Aa : ja, a || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= N / 32, Oa = 1e-5 < W * W, Aa = Math.sin(dc * fa) * q / 512 + 0.5, Pa = W * (1 - Aa), W *= Aa), fa < Ab || (Pa += ra[1 + fa - Ab] * 
            y / 255, W += ra[fa - Ab] * y / 255), n + fa >> 1);
            k[Aa] += (ra[fa] = Pa) / 65536;
            p[Aa] += (ra[++fa] = W) / 65536;
          }
        }
      }
      n += 768 * M;
    }, C = Sa[a], [f, t, J, H, D, G, V, S, T, u, v, x, B, R, N, q, r, y, A, F] = Ta[a], K = 4 * u ** 2;
    w(5513);
    w(4562);
    w(3891);
    zb(5 > ++a ? g : b);
  }, k = (ea = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), p = ea.getChannelData(1);
  zb(g);
}, Hb = () => {
  let b, a, g, k, p, n, w, C, f, t, J, H, D, G, V, S, T = !0;
  const u = [], v = () => {
    b4.innerHTML = "Music: " + T;
    S && (da || !T ? S.disconnect() : S.connect(V.destination));
  }, x = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ma = [yb(0.3, 55, q, 1.732051), yb(55, 181, q, 1.732051),];
    la = yb(0.3, 181, q, 1.732051);
    k = C = void 0;
    u.length = ha = G = H = D = Ba = Ca = 0;
    document.hidden && B(!0);
  }, B = q => {
    if (da !== q) {
      if (da = q, x(), document.body.className = q ? "l m" : "l", q) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      v();
    }
  }, R = q => {
    try {
      V || (V = new AudioContext(), (S = V.createBufferSource()).buffer = ea, S.loop = !0, S.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    B(!1);
    ia = q;
  }, N = (q, r) => q.buttons[r]?.pressed || 0 < q.buttons[r]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    R();
  };
  b2.onclick = () => {
    R(1);
  };
  b5.onclick = () => B(!0);
  b4.onclick = () => {
    T = !T;
    v();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
  };
  onclick = q => {
    if (!da && (q.target === hC && (ha = 1), ia)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = q => {
    let r;
    q.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (u[r] = !!q.type[5] && !0) && (0 === r && (ha = 1), 1 === r && B(!0)));
  };
  onmousemove = ({movementX:q, movementY:r}) => {
    ia && (q || r) && (Ya += 0.1 * q, Xa += 0.1 * r);
  };
  hC.ontouchstart = q => {
    if (!da) {
      for (let {pageX:r, pageY:y, identifier:A} of q.changedTouches) {
        ia && r > hC.clientWidth / 2 ? void 0 === C && (f = 0, n = r, w = y, C = A, J = Xa, t = Ya) : void 0 === k && (p = 0, a = r, g = y, k = A);
      }
      b = xa;
    }
  };
  hC.ontouchmove = q => {
    if (!da) {
      for (let {pageX:K, pageY:M, identifier:P} of q.changedTouches) {
        var r, y, A, F;
        C === P && (Xa = J + (M - w) / 2.3, Ya = t + (K - n) / 2.3, f = 1);
        k === P && (P = (a - K) / 20, r = Za(P), y = (g - M) / 20, A = Za(y), (F = 0.5 < ab(r, A)) && (p = 1), H = (F && 0.3 < r) * cb(P, -1), D = (F && 0.3 < A) * cb(y, -1), 2 < r && (a = 20 * (0 > P ? -1 : 1) + K), 2 < A && (g = 20 * (0 > y ? -1 : 1) + M));
      }
    }
  };
  hC.ontouchend = q => {
    let r;
    document.activeElement === document.body && q.preventDefault();
    for (const y of q.changedTouches) {
      y.identifier === C ? (C = void 0, f || (r = 1), f = 0) : y.identifier === k ? (k = void 0, D = H = 0, p || (r = 1), p = 0) : r = 1;
    }
    q.target === hC && r && b && 0.02 < (q = xa - b) && 0.7 > q && (ha = 1);
  };
  na = () => {
    Ba = D + (u[4] ? 1 : 0) - (u[5] ? 1 : 0);
    Ca = H + (u[2] ? 1 : 0) - (u[3] ? 1 : 0);
    let q = navigator.getGamepads()[0];
    q && (ia && (Xa += ya * bb(q.axes[3], 0.3) * 80, Ya += ya * bb(q.axes[2], 0.3) * 80), Ba += N(q, 12) - N(q, 13) - bb(q.axes[1], 0.2), Ca += N(q, 14) - N(q, 15) - bb(q.axes[0], 0.2), N(q, 9) && B(!0), (q = N(q, 3) || N(q, 2) || N(q, 1) || N(q, 0)) && !G && (ha = 1), G = q);
  };
  document.onvisibilitychange = onblur = onresize = x;
  B(!0);
}, Ib = (b, a) => {
  1 / 0 > Ja && (Ja = d + a, h4.innerHTML = b);
}, Jb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Da = Ma.reduce((b, a) => b + a.i, 0)] + " / XIII";
}, Kb = () => {
  localStorage.spdnt22 = JSON.stringify([e.map(b => b.i), Ma.map(b => b.i), Ia, pa, d,]);
}, Q = NO_INLINE((b, a, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * a << 8 | 255 * b), U = () => {
  const b = [];
  c = (a, g = new DOMMatrix(), k) => b.push(...I(a, g, k));
  h.push({m:new DOMMatrix(), o:b,});
}, Lb = b => {
  const a = () => {
    a.g = O(a.g, a.i, 4);
    a.h = O(a.h, a.i, 1);
    pb(g).multiplySelf(b);
    ha && 3 > (mb(), hb(Ua - ib, Va - jb, Wa - kb,)) ? a.i ? 0.7 < a.g && (a.i = 0, (Ia = k) && Ib("* click *", 1), Kb()) : 0.3 > a.g && (a.i = 1, (Ia = k) && Ib("* click *", 1), Kb()) : a.i && 0.8 < a.g && 13 === k && (a.i = 0, 13 > Da ? Ib("Not leaving now, there are souls to catch!", 3) : Ea || (Ib("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ea = 1));
    l.rotateSelf(50 * a.g - 25, 0).translateSelf(0, 1).m44 = a.g;
  }, g = h.at(-1).m, k = e.length;
  a.m = g;
  a.F = b;
  e.push(a);
  c(L(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Q(0.4, 0.5, 0.5));
  c(L(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), Q(0.4, 0.5, 0.5));
  c(L(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), Q(0.5, 0.5, 0.4));
}, Mb = (b, ...a) => {
  let g, k, p, n, w = 0, C = 0, f = 1, t = -1;
  const J = () => {
    if (!J.i) {
      let v, x, B, R, N, q = 1, r = 1 / 0;
      for (let y = 0; a.length > y; y++) {
        const A = a[y];
        let F = hb(D - A[0], G - A[1]);
        q = $a(q, F / A[2]);
        0 > (F -= A[2]) ? N = 1 : r > F && (r = F, H = A);
      }
      N || (v = D - H[0], x = G - H[1], B = hb(v, x), R = Math.atan2(-x, v), f && (n = cb(n / (1 + Math.random())), C = (Math.random() - 0.5) * Math.PI / 2), R += C, t = -Math.cos(R), w = Math.sin(R), 0.1 < B && (B = $a(B, H[2]) / B, D = v * B + H[0], G = x * B + H[1]));
      f = N;
      n = O(n, 3 + 6 * (1 - q), 3 + q);
      V = O(V, D = O(D, D + t, n), n);
      S = O(S, G = O(G, G + w, n), n);
      g = eb(g, Math.atan2(V - k, S - p) / Ka - 180, xb(3));
      pb(T).multiplySelf(b).translateSelf(k = V, 0, p = S).rotateSelf(0, g, 7 * Math.sin(1.7 * d),);
      1.6 > (mb(), hb(Ua - ib, Va - jb, Wa - kb,)) && (J.i = 1, Ib([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Da] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Jb(), Kb());
    }
    J.i && pb(h[28].m).translateSelf(u % 4 * 1.2 - 1.7 + Math.sin(d + u) / 7, -2, 1.7 * (u / 4 | 0) - 5.5 + Za(u % 4 - 2) + Math.cos(d / 1.5 + u) / 6,);
  };
  let H = a[0], [D, G] = H, [V, S] = H;
  const T = h.at(-1).m, u = Ma.length;
  Ma.push(J);
}, Nb = ({x:b, y:a, z:g}, k) => b * k.x + a * k.y + g * k.z, Sb = b => {
  let a, g = 0, k = 0, p = 0, n = b.at(-1);
  for (a of b) {
    g += (n.y - a.y) * (n.z + a.z), k += (n.z - a.z) * (n.x + a.x), p += (n.x - a.x) * (n.y + a.y), n = a;
  }
  return a = hb(g, k, p), g /= a, k /= a, p /= a, {x:g, y:k, z:p, w:g * n.x + k * n.y + p * n.z,};
}, Tb = (b, a) => {
  var g, k, p, n = a.B;
  for (var w = 0; n.length > w; ++w) {
    if (-0.00008 > (g = Nb(b, n[w]) - b.w) ? p = a : 8e-5 < g && (k = a), p && k) {
      k = [];
      p = [];
      n = a.B;
      w = a.v;
      let C = n.at(-1), f = Nb(b, C) - b.w;
      for (const t of n) {
        g = Nb(b, t) - b.w, 8e-5 > f && p.push(C), -0.00008 < f && k.push(C), (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g) && (f /= g - f, C = {x:C.x + (C.x - t.x) * f, y:C.y + (C.y - t.y) * f, z:C.z + (C.z - t.z) * f,}, k.push(C), p.push(C)), C = t, f = g;
      }
      return {l:2 < k.length && {B:qb(k, n.u, n.C), v:w, A:a,}, j:2 < p.length && {B:qb(p, n.u, n.C), v:w, A:a,},};
    }
  }
  return {l:k, j:p,};
}, Ub = (b, a, g = Sb(a.B)) => {
  let k, p;
  return b ? ({l:k, j:p} = Tb(b, a), k || p || b.o.push(a), k && (b.l = Ub(b.l, k, g)), p && (b.j = Ub(b.j, p, g))) : b = {x:g.x, y:g.y, z:g.z, w:g.w, o:[a,], l:0, j:0,}, b;
}, Vb = (b, a, g) => {
  const k = [], p = (n, w) => {
    let {l:C, j:f} = Tb(n, w);
    C || f || (0 < g * Nb(n, a) ? C = w : f = w);
    C && (n.l ? p(n.l, C) : k.push(C));
    f && n.j && p(n.j, f);
  };
  for (const n of a.o) {
    p(b, n);
  }
  return k;
}, Wb = (b, a) => b && (a(b), Wb(b.l, a), Wb(b.j, a)), Xb = b => (Wb(b, a => {
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
}), b), Yb = b => b.length ? b.reduce((a, g) => Ub(a, {B:g, v:0, A:0,}), 0) : b, Zb = (...b) => b.reduce((a, g) => {
  const k = [];
  if (a = Yb(a), g) {
    g = Yb(g);
    Wb(a, p => p.o = Vb(g, p, 1));
    Wb(g, p => k.push([p, Vb(a, p, -1),]));
    for (let [p, n] of k) {
      for (const w of n) {
        Ub(a, w, p);
      }
    }
  }
  return a;
}), X = (b, ...a) => {
  const g = n => {
    let w;
    return n.A && ((w = k.get(n.A)) ? (p.delete(w), n = g(n.A)) : k.set(n.A, n)), n;
  }, k = new Map(), p = new Map();
  return b = Xb(Zb(Xb(Yb(b)), ...a)), Wb(b, n => {
    for (const w of n.o) {
      p.set(g(w), w.v);
    }
  }), Array.from(p, ([{B:n}, w]) => {
    const C = n.map(({x:f, y:t, z:J}) => ({x:f, y:t, z:J,}));
    return qb(w ? C.reverse() : C, n.u, n.C);
  });
}, Y = (b, a = 0, g = 0) => {
  const k = h[++qa].m;
  return pb(m, k), k.m41 = b, k.m42 = a, k.m43 = g, k;
}, ac = () => {
  let b, a, g, k, p, n, w, C, f, t, J, H, D, G = 0, V = 0, S = 0, T = 0, u = 1, v = 2, x = 15;
  const B = () => pb((v ? e[Ia] : h[33 !== G ? G : 0]).m,), R = r => {
    1 < v ? (pb(e[Ia].m).multiplySelf(e[Ia].F), mb(0, 0.9 < Ia + oa ? 15 : 1, -2.4)) : (B(), mb(V, S, T));
    r && (p = (ib - Ua) / ya, n = (kb - Wa) / ya);
    Ua = ib;
    Va = jb;
    Wa = kb;
  }, N = () => {
    var r = 0, y = 0, A = 0, F = 0, K = 0, M = 0, P = -1;
    for (var aa = 0; 36 > aa; ++aa) {
      var Oa = 512 * aa;
      for (var ja = 96; 416 > ja; ja += 4) {
        for (var ka = 0; 2 > ka; ++ka) {
          var ba = $b[Oa + ja + ka];
          const ra = $b[Oa + ja + ka + 2];
          ba > F && (F = ba);
          ba + ra && (0 > P || P === aa) && (P = aa, ra === t ? ++r : y && y !== ra || (y = ra, ++A));
        }
      }
    }
    t = 0 > P ? 0 : A > 2 * r ? y : t;
    for (r = 36; 128 > r; ++r) {
      aa = P = A = y = 0;
      Oa = 512 * r;
      for (ja = 0; 128 > ja; ++ja) {
        ka = Oa + 4 * ja, ba = $b[ka], 64 > ja ? ba > y && (y = ba) : ba > A && (A = ba), (ba = $b[2 + ka]) > P && (P = ba), ba = $b[1 + ka], 64 < ja ? ba > y && (y = ba) : ba > A && (A = ba), (ba = $b[3 + ka]) > aa && (aa = ba);
      }
      (A -= y) * A > K * K && (K = A);
      (aa -= P) * aa > M * M && (M = aa);
    }
    K *= 0.7;
    C = cb(1 - 0.01 * ab(Za(K), Za(M)), 0.3);
    K /= 255;
    F /= 255;
    M /= 255;
    B().invertSelf();
    mb(K, F, M, 0);
    V += ib;
    S += F;
    T += kb;
    R();
  }, q = (r, y, A, F) => fb(r, y, u || (cb(Za(y - r) ** 0.5 - A) + 1 / 7) * xb(1.5 * F));
  sa = () => {
    R(t);
    Z.r9r(0, 0, 128, 128, 6408, 5121, $b);
    NO_INLINE(N)();
    !v && t === G || (G = t, B().invertSelf(), mb(Ua, Va, Wa), V = ib, S = jb, T = kb, v = v && (t ? 0 : 1));
    (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (v = 2);
    1 === t && (e[14].i = -15 > Ua && 0 > Wa ? 1 : 0);
    f = fb(O(f, Va, 2), Va, v || 8 * Za(f - Va),);
    J = q(J, Ua, 0.5, 1);
    H = q(H, f, 2, 1);
    D = q(D, Wa, 0.5, 1);
    k = O(k, ta * (32 < t && 37 > t), 2,);
    ia ? (r = v + xb(18), Fa = fb(Fa, Ua, r), Ha = fb(Ha, Wa, r), Ga = fb(Ga, 1.6 + f, r), Ya = db(Ya)) : (Fa = q(Fa, J, 1, 2 + k,), Ha = q(Ha, D + -18 + 5 * k, 1, 2 + k,), Ga = q(Ga, ab(H + cb((-60 - Wa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), r = $a(-6, -Za(D - Ha)), y = J - Fa, Ya = eb(Ya, 90 - db(Math.atan2(r, y) / Ka), u + xb(10),), Xa = eb(Xa, 90 - Math.atan2(hb(r, y), Ga - H) / Ka, u + xb(10),));
    Xa = cb(Xa, -87, 87);
    u = 0;
    var r = cb(Ba, -1), y = cb(Ca, -1), A = bb(hb(r, y) ** 0.5, 0.1);
    let F = Math.atan2(r, y);
    A && (b = 90 - F / Ka);
    a = eb(a, b, xb(8));
    g = O(g, A, 10);
    Y(Ua, 0.06 * C * g * Math.cos(18.2 * d) + f, Wa,).rotateSelf(0, a);
    for (var K = 0; 2 > K; ++K) {
      const M = 9.1 * d - Math.PI * K;
      pb(h[37].m, Y(0)).translateSelf(0, g * cb(0.45 * Math.sin(M - Math.PI / 2)),).rotateSelf(g * Math.sin(M) * 0.25 / Ka, 0);
    }
    x = t ? 5 : O(x, v ? 13 : 19 - 2 * $a(0, Va + 10), 2.2);
    p = t || v ? 0 : O(p, 0, 3);
    n = t || v ? 0 : O(n, 0, 3);
    r = (w = v ? 0 : O(w, t ? 7 * cb(2 * A) * C : 0, t ? 9 : 1,)) * A * Za(r) * Math.sin(F);
    y = w * A * Za(y) * Math.cos(F);
    F = ia ? (180 + Ya) * Ka : 0;
    A = ya * (p + (y * Math.cos(F) - Math.sin(F) * r));
    K = ya * -x;
    r = ya * (n + (y * Math.sin(F) + Math.cos(F) * r));
    B().invertSelf();
    mb(A, K, r, 0);
    V += ib;
    S += K;
    T += kb;
    R();
  };
}, bc = b => {
  da ? 1100 < hC.width && Z.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s) : (void 0 !== b && Z.das(4, h[40].D - h[40].s, 5123, 2 * h[40].s, Ma.length,), Z.das(4, h[41].D - h[41].s, 5123, 2 * h[41].s, e.length,), Z.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
}, ic = (b, a = 35633) => (a = Z.c6x(a), Z.s3c(a, b), Z.c6a(a), a), jc = (b, a) => {
  const g = {}, k = Z.c1h();
  return Z.abz(k, b), Z.abz(k, ic(a, 35632)), Z.l8l(k), p => p ? g[p] || (g[p] = Z.gan(k, p)) : Z.u7y(k);
}, l = new DOMMatrix(), m = new DOMMatrix(), nb = new Float32Array(16), kc = new Float32Array(760), $b = new Uint8Array(65536), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in Z) {
  Z[b[0] + [...b,].reduce((a, g, k) => (a * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[b];
}
zb(() => {
  let b = 0;
  const a = () => {
    if (2 == ++b) {
      const p = u => {
        requestAnimationFrame(p);
        var v = (u - (ca || u)) / 1e3;
        if (xa += v, d += ya = da ? 0 : $a(0.055, v), ca = u, 0 < ya) {
          v = B => B.translateSelf(Math.sin(d + 2) / 5, Math.sin(0.8 * d) / 4).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          na();
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          Ea && (ia = 0);
          oa = Ea ? O(oa, -9, 0.015) : O(oa, cb(d / 3), 1);
          pa = O(pa, e[13].h, 0.2 + 0.3 * Za(2 * e[13].h - 1),);
          u = (qa = 1, ta = gb(e[15].g, e[8].g), wa = fb(O(wa, 0, 1), db(wa + 60 * ya), e[2].g - e[3].h,), ua = fb(O(ua, 0, 5), db(ua + 56 * ya), ta,), va = fb(O(va, 0, 4), db(va + 48 * ya), ta,), Y(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g),).translateSelf(0), $a(1 - e[11].h, e[10].h));
          var x = (Y(u * Math.sin(0.6 * d + 1.2) * 12, 0, 35), Y(u * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), Y(u * Math.sin(0.6 * d) * 12, 0, 45), Y(9.8 * (1 - u)), u = cb(1 - 5 * u) * gb(e[11].g, e[2].g), Y(0, u * Math.sin(1.35 * d) * 4), Y(0, 0, u * Math.sin(0.9 * d) * 8), Y(0, -6.5 * e[11].h), u = gb(e[4].h, e[3].h), Y(0, u * Math.sin(d) * 5 + 3.5 * (1 - ab(e[3].g, e[4].g)),), Y(0, u * Math.sin(d + 3) * 6, u * Math.sin(0.6 * d + 1) * 6,), Y(0, -7.3 * e[4].h), u = gb(e[6].g, e[7].g), Y(0, -2, 10 - 
          8.5 * u * Za(Math.sin(1.1 * d))), Y(0, -2, 10 - 8.5 * u * Za(Math.sin(2.1 * d))), Y(0, -2, 10 - 8.5 * ab(u * Za(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - u)),), gb(e[5].h, e[15].h));
          for (u = 0; 4 > u; u++) {
            Y((2 < u ? 2 * (1 - x) + x : 0) - 100, x * Math.sin(1.3 * d + 1.7 * u) * (3 + u / 3) + 0.7, 115 - 7 * (1 - e[5].h) * (1 - e[15].h) * (1 & u ? -1 : 1) + ab(0.05, x) * Math.cos(1.3 * d + 7 * u) * (4 - 2 * (1 - u / 3)),);
          }
          u = gb(e[8].h, e[9].h);
          for (let B = 0; 3 > B; ++B) {
            Y(0, u * Math.sin(1.5 * d + 1.5 * B) * 4 + (B ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)),);
          }
          u = gb(gb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2,);
          Y(0, 16 * u, 95 + 8.5 * cb(2 * u - 1));
          Y(0, -4.7 * e[0].g, -15);
          Y(0, -4.7 * e[10].g, 15);
          Y(-99.7, -1.9 - 5.5 * e[3].g, 63.5);
          Y(-100, 0.6 - 5.8 * e[15].g, 96.5);
          v(Y(-12, 4.2, 40 * oa - 66));
          v(Y(-123, 1.4, 55 - 65 * pa));
          Y(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + wa, 0,);
          Y(2.5 * (1 - x) - 139.7, -3 * (1 - e[5].g) - x * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * x), 0);
          Y(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          Y(-81, 0.6, 106).rotateSelf(0, 40 + ua);
          Y(-65.8, 0.8, 106).rotateSelf(0, va);
          Y(-50.7, 0.8, 106).rotateSelf(0, 180 - va);
          Y(-50.7, 0.8, 91).rotateSelf(0, 270 + va);
          for (v = 0; 13 > v; ++v) {
            Ma[v](), ob(l, kc, 12 + v);
          }
          for (v = 0; 16 > v; ++v) {
            e[v](), ob(l, kc, 25 + v);
          }
          for (let B, R = 0, N = 656; 26 > R; ++R, ++N) {
            B = h[2 + R].m, kc[N++] = B.m41, kc[N++] = B.m42, kc[N++] = B.m43;
          }
          sa();
          for (v = 0; 12 > v; ++v) {
            ob(h[28 + v].m, kc, v);
          }
          H();
          Z.u3a(H("j"), kc);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          Z.uae(H("b"), !1, ob(pb().rotateSelf(0, 180).invertSelf().translateSelf(-Ua, -Va, 0.3 - Wa,),),);
          bc();
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(H("b"), !1, ob(pb().translateSelf(-Ua, -Va, -Wa - 0.3,),),);
          bc();
          ha = 0;
        }
        v = Fa;
        x = Ga;
        u = Ha;
        da ? (pb(la).invertSelf(), mb(3.6, 3.5), v = ib, x = jb, u = 5, pb(m, w).rotateSelf(-20, 0).invertSelf().translateSelf(-v, -x, -u,).rotateSelf(0, 99), pb().rotateSelf(0, 40 * Math.sin(xa) - 80, -8), ob(l, kc, 35), ob(l, kc, 36), ob(l, kc, 37)) : pb(m, w).rotateSelf(-Xa, -Ya).invertSelf().translateSelf(-v, -x, -u);
        D();
        Z.ubu(D("k"), v, x, u);
        Z.u3a(D("j"), kc);
        Z.uae(D("a"), !1, ob(m));
        Z.ubh(D("g"), 3);
        Z.ubh(D("h"), 3);
        Z.b6o(36160, V);
        Z.v5y(0, 0, 2048, 2048);
        G[0](60.17);
        G[1](138.6);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(D("b"), !1, ob(w));
        Z.uae(D("a"), !1, ob(la));
        Z.uae(D("i"), !1, C);
        Z.ubh(D("g"), 0);
        Z.ubh(D("h"), 1);
        bc(!ia);
        J();
        Z.uae(J("b"), !1, ob(pb(w).invertSelf()));
        Z.ubu(J("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, xa);
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, T);
        Z.v5y(0, 0, 128, 128);
        Z.f1s();
      }, n = new DOMMatrix(), w = new DOMMatrix(), C = new Float32Array(32), f = g, t = E(8, () => ({})), J = jc(ic("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
      );
      var k = ic("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}");
      const H = jc(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), D = jc(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), G = E(2, u => {
        const v = Z.c25();
        return Z.a4v(33984 + u), Z.b9j(3553, v), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), x => {
          let B = 0, R = 0, N = 0, q = 1 / 0, r = 1 / 0, y = 1 / 0, A = -1 / 0, F = -1 / 0, K = -1 / 0;
          Z.fas(36160, 36096, 3553, v, 0);
          Z.c4s(256);
          pb().scale3dSelf(x).multiplySelf(pb(ma[u], n).multiplySelf(w).invertSelf(),);
          for (let M = 0; 8 > M; ++M) {
            const P = t[M];
            mb(4 & M ? 1 : -1, 2 & M ? 1 : -1, 1 & M ? 1 : -1);
            B -= P.x = (0 | ib) / (x * lb);
            R -= P.y = (0 | jb) / (x * lb);
            N -= P.z = (0 | kb) / (x * lb);
          }
          pb().rotateSelf(298, 139).translateSelf(B / 8, R / 8, N / 8);
          for (x = 0; 8 > x; ++x) {
            const {x:M, y:P, z:aa} = t[x];
            mb(M, P, aa);
            q = $a(q, ib);
            A = ab(A, ib);
            r = $a(r, jb);
            F = ab(F, jb);
            y = $a(y, kb);
            K = ab(K, kb);
          }
          x = 10 + u;
          y *= 0 > y ? x : 1 / x;
          K *= 0 < K ? x : 1 / x;
          Z.uae(D("b"), !1, ob(pb(m, n).scaleSelf(2 / (A - q), 2 / (F - r), 2 / (y - K),).translateSelf((A + q) / -2, (F + r) / -2, (y + K) / 2).multiplySelf(l),),);
          bc(!ia);
          C.set(nb, 16 * u);
        };
      }), V = Z.c5w();
      k = Z.c25();
      const S = Z.c3z(), T = Z.c5w();
      H();
      Z.uae(H("a"), !1, ob(yb(1e-4, 2, 1.2, 0.4)));
      D();
      Z.ubh(D("q"), 2);
      J();
      Z.ubh(J("q"), 2);
      Z.b6o(36160, V);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, T);
      Z.bb1(36161, S);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, S);
      Z.a4v(33986);
      Z.b9j(3553, k);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, k, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 0);
      NO_INLINE(Hb)();
      NO_INLINE(ac)();
      requestAnimationFrame(p);
    }
  }, g = new Image();
  g.onload = g.onerror = a;
  g.src = La;
  NO_INLINE(Gb)(() => {
    zb(() => {
      let f = 0;
      const t = [], J = [], H = [], D = [], G = new Int32Array(8), V = new Map(), S = new Int32Array(G.buffer, 0, 5), T = new Float32Array(G.buffer);
      h.map((x, B) => {
        let R;
        const N = q => {
          let {x:r, y, z:A} = R[q], F = (T[0] = r, T[1] = y, T[2] = A, q = "" + (R.C ? S : G), V.get(q));
          return void 0 !== F ? (r = 3 * F, D[r] = (D[r++] + G[5]) / 2, D[r] = (D[r++] + G[6]) / 2, D[r] = (D[r] + G[7]) / 2) : (V.set(q, F = V.size), J.push(r, y, A, T[3]), H.push(G[4]), D.push(G[5], G[6], G[7])), F;
        };
        for (R of (T[3] = 40 === B ? -12 : 41 === B ? -25 : B, x.o)) {
          const {x:q, y:r, z:y} = Sb(R);
          G[4] = 0 | R.u;
          G[5] = 32767 * q;
          G[6] = 32767 * r;
          G[7] = 32767 * y;
          for (let A = 2, F = N(0), K = N(1); R.length > A; ++A) {
            t.push(F, K, K = N(A));
          }
        }
        x.o = 0;
        x.s = f;
        x.D = f = t.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(J), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(D), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(H), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(t), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      let u = [], v = [];
      try {
        const [x, B, R, N, q] = JSON.parse(localStorage.spdnt22,);
        u = N;
        v = q;
        Ia = x;
        pa = B;
        d = R;
      } catch {
      }
      e.map((x, B) => x.g = x.h = x.i = 13 !== B && u[B] ? 1 : 0);
      Ma.map((x, B) => x.i = v[B] ? 1 : 0);
      Jb();
      oa = 13 !== Ia || Da ? 1 : 0;
      zb(a);
    });
    const k = f => z(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), p = f => X(I(L(), z(0, -f / 2).scale(6, f - 1, 2.2)), I(L(), z(0, -f / 2 - 6).scale(4, f - 3, 4)), I(L(32, 1), z(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), n = E(11, f => vb(rb(sb(18), k(f), Q(1, 1, 0.8, 0.2)).reverse(), rb(sb(18), k(f + 1), Q(1, 1, 0.8, 0.2)), 1,)).flat(), w = [...I(L(), z(0, -3).scale(11, 1.4, 3), Q(0.9, 0.9, 0.9, 0.2)), ...I(L(), z(0, -2.2).scale(7.7, 0.5, 4), Q(0.5, 
    0.5, 0.5, 0.2)), ...E(12, f => I(L(), m.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), Q(0.6, 0.5, 0.4, 0.3),)).flat(), ...X(I(L(6), m.rotate(90).scale(6, 8, 6), Q(0.3, 0.6, 0.6, 0.3)), I(L(4, 0, 0.01), z(0, 6).scale(12, 2, 0.75).rotate(0, 45), Q(0.3, 0.6, 0.6, 0.3),), I(L(6), m.rotate(90).scale(5, 12, 5), Q(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => I(L(5), z(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), Q(0.3, 0.6, 0.6, 0.3),)),),], C = X(I(L(), z(0, -0.5, 1).scale(1.15, 1.2, 6.5), Q(0.25, 
    0.25, 0.35, 0.3),), X(I(L(3), z(0, 0, -5.5).scale(3, 2), Q(0.6, 0.3, 0.4, 0.3)), I(L(), z(0, 0, -3.65).scale(2.5, 3), Q(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => I(L(), z(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), Q(0.7, 0.2, 0, 0.3),)),);
    U();
    c([Na.slice(1),], z(-2).scale3d(3).rotate(90, 0));
    U();
    Lb(z(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, t) => {
      c(L(), z(0, 0, t ? 22 : -23).scale(3, 1, 8), Q(0.9, 0.9, 0.9, 0.2));
      c(L(), z(0, 6.3, f).scale(4, 0.3, 1), Q(0.3, 0.3, 0.3, 0.4));
      c(L(), z(0, 1, f).scale(3, 0.2, 0.35), Q(0.5, 0.5, 0.5, 0.3));
      E(5, J => c(n, z(18.5 * (t - 0.5), 0, 4.8 * J - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),));
    });
    c(L(), z(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), Q(0.8, 0.8, 0.8, 0.2));
    c(L(), z(3, 1.5, -20).scale(0.5, 2, 5), Q(0.7, 0.7, 0.7, 0.2));
    c(L(), z(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), Q(0.75, 0.75, 0.75, 0.2),);
    c(L(5), z(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), Q(0.6, 0.3, 0.3, 0.4));
    c(X(Zb(I(L(6, 0, 0, 0.3), z(8, -3, -4).scale(13, 1, 13), Q(0.7, 0.7, 0.7, 0.2),), X(I(L(6, 0, 0, 0.3), z(0, -0.92).scale(13, 2, 13), Q(0.8, 0.8, 0.8, 0.2),), I(L(), m.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), Q(0.5, 0.5, 0.5, 0.5),),), I(L(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), Q(0.8, 0.2, 0.2, 0.5),), I(L(6), z(0, -8).scale(9, 8, 7), Q(0.2, 0.1, 0.4, 0.5)),), I(L(5), m.scale(5, 30, 5), Q(0.4, 0.2, 0.6, 0.5)), I(L(5, 0, 1.5), 
    z(0, 1).scale(4.5, 0.3, 4.5), Q(0.7, 0.5, 0.9, 0.2),), I(L(6), z(15, -1.5, 4).scale(3.5, 1, 3.5), Q(0.5, 0.5, 0.5, 0.5),),),);
    Lb(z(15, -2, 4));
    c(L(), z(-18.65, -3, 55).scale(2.45, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2));
    Lb(z(-55, -1.1, 46).rotate(0, 90));
    c(L(7), z(-57, -2.6, 46).scale(4, 1, 4), Q(0.8, 0.8, 0.8, 0.3));
    c(L(6), z(-61.3, -2.4, 49).scale(3, 1, 5), Q(0.4, 0.6, 0.6, 0.3));
    c(w, z(-53, 0, 55));
    c(L(), z(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), Q(0.7, 0.7, 0.7, 0.2),);
    c(L(3, 0, -0.5), z(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), Q(0.8, 0.8, 0.8, 0.2),);
    c(X(Zb(I(L(), z(-100, -2.4, 55).scale(8, 0.9, 8), Q(0.8, 0.8, 0.8, 0.2),), I(L(), z(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), Q(0.8, 0.8, 0.8, 0.2),), I(L(), z(-100, -2.6, 70).scale(3, 1.1, 7), Q(0.8, 0.8, 0.8, 0.2),), I(L(), z(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), Q(0.8, 0.8, 0.8, 0.2),), I(L(6), z(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), Q(0.6, 0.6, 0.6, 0.3),), I(L(), z(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), Q(0.8, 0.8, 0.8, 0.2),), I(L(), z(-100, 0.42, 
    92).scale(3, 1.1, 4.1), Q(0.8, 0.8, 0.8, 0.2),),), I(L(8), z(-100, -1, 55).scale(7, 0.9, 7), Q(0.3, 0.3, 0.3, 0.4)), I(L(8), z(-100, -2, 55).scale(4, 0.3, 4), Q(0.4, 0.4, 0.4, 0.5)), I(L(8, 0, -3.1), z(-100, -3, 55).scale(0.4, 1, 0.4), Q(0.4, 0.4, 0.4, 0.5),),),);
    c(X(I(L(), z(-100, 1, 63).scale(7.5, 4), Q(0.5, 0.5, 0.5, 0.4)), I(L(), z(-100, 0, 70).scale(2, 2, 10), Q(0.5, 0.5, 0.5, 0.4)), I(L(20, 1), z(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), Q(0.5, 0.5, 0.5, 0.4),),),);
    Na.map(({x:f, z:t}) => {
      c(L(6), z(3 * f, 3, 15 * t).scale(0.7, 4, 0.7), Q(0.6, 0.3, 0.3, 0.4));
      c(L(6), z(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), Q(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(J => c(L(6), z(7 * f - 100, J, 7 * t + 55).scale(1.3, 0.5, 1.3), Q(0.4, 0.2, 0.2, 0.8),));
      c(L(14, 1), z(9 * f - 38.9, -7.3, 11 * t + 17).scale(1, 4), Q(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(J => c(L(17, 1), z(9 * f - 38.9, J - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), Q(0.6, 0.6, 0.6, 0.3),));
    });
    E(7, f => {
      c(L((23 * f + 1) % 5 + 5, 0, 0.5), z(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), Q(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(L(), z(-87, -9.5, 24).scale(7, 1, 3), Q(0.4, 0.5, 0.6, 0.4));
    c(L(4), z(-86, -9.2, 27).scale(5, 1, 5), Q(0.5, 0.6, 0.7, 0.3));
    c(L(12, 1), z(-86, -9, 31).scale(1.5, 1, 1.5), Q(0.3, 0.3, 0.4, 0.1));
    Lb(z(-86, -7.5, 31));
    c(X(Zb(I(L(5), z(0, 0, -7).scale(2, 1.2, 2), Q(0.2, 0.4, 0.7, 0.3)), I(L(5), m.scale(9, 1.2, 9), Q(0, 0.2, 0.3, 0.5)), I(L(), m.scale(11, 1, 13), Q(0.3, 0.4, 0.6, 0.3)),), I(L(5), m.scale(5.4, 5, 5.4), Q(0, 0.2, 0.3, 0.5)),), z(-38.9, -11.3, 17),);
    Lb(z(-38.9, -9.6, 10));
    c(X(Zb(I(L(6), z(0, 0, -18).scale(15, 1.2, 15), Q(0.7, 0.7, 0.7, 0.3),), I(L(), m.scale(4, 1.2, 6), Q(0.45, 0.4, 0.6, 0.3)),), ...E(6, f => E(6, t => I(L(6), z(4.6 * t - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32).scale(2, 5, 2), Q(0.7, 0.7, 0.7, 0.3),),)).flat(),), z(-38.9, -11.3, -1),);
    c(L(5), z(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), Q(0.8, 0.1, 0.25, 0.4));
    Lb(z(-84, -0.7, 85).rotate(0, 45));
    E(3, f => {
      c(p(16), z(12 * f - 109, -9, -12), Q(0.6, 0.6, 0.6, 0.3));
      c(p(16), z(-77, -9, -12 * f - 20).rotate(0, 90), Q(0.6, 0.6, 0.6, 0.3),);
    });
    c(X(Zb(I(L(), z(26.5, -1.6, 10).scale(20, 2.08, 3)), I(L(), z(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...E(4, f => I(L(), z(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...E(3, f => I(L(), z(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), z(-123, 0.2, -12), Q(0.5, 0.5, 0.6, 0.2),);
    Lb(z(-116, -1.4, -18).rotate(0, 180));
    c(L(6), z(-116, -2.6, -16.5).scale(3.2, 0.8, 3), Q(0.6, 0.5, 0.7, 0.2));
    c(L(), z(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), Q(0.8, 0.8, 0.8, 0.2));
    c(L(), z(-115.5, -17, -12).scale(0.5, 15, 2.2), Q(0.6, 0.6, 0.6, 0.3));
    c(L(8), z(-114, -17, -2).scale(2, 15, 2), Q(0.6, 0.6, 0.6, 0.3));
    c(L(8), z(-79, -17, -2).scale(2, 15, 2), Q(1, 1, 1, 0.3));
    c(L(), z(-77, -17, -50.5).scale(2.2, 15, 0.5), Q(0.6, 0.6, 0.6, 0.3));
    c(X(I(L(12), z(-77, -14.5, -12).scale(4, 17.5, 4), Q(0.7, 0.7, 0.7, 0.2),), I(L(12), z(-77, 3.1, -12).scale(3, 5, 3), Q(0.4, 0.5, 0.6, 0.2)), I(L(), z(-79, 0.1, -12).scale(3.5, 2, 1.3), Q(0.4, 0.5, 0.6, 0.2),), I(L(), z(-77, 0.1, -14).scale(1.5, 2, 2), Q(0.4, 0.5, 0.6, 0.2)),),);
    c(L(), z(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), Q(0.6, 0.6, 0.6, 0.3));
    c(L(9), z(-98, -18.4, -40).scale(2.5, 13.5, 2.5), Q(0.5, 0.5, 0.5, 0.3));
    c(X(I(L(), z(-93, -5.8, -40).scale(9, 1, 5), Q(0.8, 0.8, 0.8, 0.1)), I(L(9), z(-98, -5.8, -40).scale(3, 8, 3), Q(0.7, 0.7, 0.7, 0.2)),),);
    Lb(z(-98, -4.4, -40).rotate(0, 90));
    c(X(Zb(I(L(6, 0, 0, 0.6), z(-100, 0.7, 105.5).scale(8, 1, 11), Q(0.7, 0.7, 0.7, 0.2),), I(L(), z(-101.5, 0.7, 93.5).scale(10.5, 1, 2), Q(0.7, 0.7, 0.7, 0.2),),), I(L(5), z(-100, 0.7, 113).scale(4, 3, 4), Q(0.7, 0.7, 0.7, 0.2)),),);
    [-1, 1,].map(f => {
      [7.2, 1.5,].map(t => c(L(15, 1), z(-7.5 * f - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), Q(0.5, 0.24, 0.2, 0.4),));
      c(n, z(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      c(L(12, 1), z(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), Q(0.6, 0.24, 0.2, 0.5),);
      c(X(I(L(), z(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), Q(0.5, 0.5, 0.5, 0.4),), I(L(), m.scale(3, 3, 10), Q(0.6, 0.24, 0.2, 0.5)), I(L(32, 1), z(0, 3, -5).scale(3, 4, 10).rotate(90, 0), Q(0.6, 0.24, 0.2, 0.5),), I(L(5), z(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), Q(0.6, 0.24, 0.2, 0.5),), I(L(5), z(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), Q(0.6, 0.24, 0.2, 0.5),),), z(f - 100, 0.7, 97),);
    });
    c(X(I(L(), z(-82.07, 0.8, 106).scale(11, 0.9, 2.2), Q(0.7, 0.7, 0.7, 0.1),), I(L(45, 1), z(-81, 0.7, 106).scale3d(7.7), Q(0.7, 0.7, 0.7, 0.1),),),);
    c(L(), z(-58, 1, 106).scale(2, 0.65, 2), Q(0.7, 0.7, 0.7, 0.2));
    c(L(), z(-50.7, 1, 99).scale(2, 0.65, 1), Q(0.7, 0.7, 0.7, 0.2));
    c(L(), z(-42, 0.4, 91).scale(5, 1, 2.5), Q(0.7, 0.7, 0.7, 0.3));
    c(L(), z(-34.2, 0.4, 91).scale(3, 1, 3), Q(0.7, 0.7, 0.7, 0.3));
    c(L(5), z(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), Q(0.2, 0.5, 0.5, 0.6));
    Lb(z(-34, 2.7, 96).rotate(-12, 0));
    [-1, 1,].map(f => c(n, z(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    E(3, f => c(p(24.7 - 0.7 * (1 & f)), z(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? Q(0.5, 0.5, 0.5, 0.3) : Q(0.35, 0.35, 0.35, 0.5),),);
    c(X(I(L(6, 0, 0, 0.3), z(0, -0.92, 95).scale(14, 2, 14), Q(0.8, 0.8, 0.8, 0.2),), I(L(5), z(0, 0, 95).scale3d(6), Q(0.3, 0.3, 0.3, 0.5)),),);
    Lb(z(0, 1.7, 82).rotate(0, 180));
    c(L(5), z(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), Q(0.5, 0.3, 0.3, 0.4),);
    c(L(6), z(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), Q(0.5, 0.6, 0.7, 0.3));
    c(L(), z(0, 16, 127.8).scale(1.5, 1, 0.7), Q(0.5, 0.6, 0.7, 0.3));
    c(L(7), z(0, 15.1, 133).scale(5, 2, 5), Q(0.4, 0.5, 0.6, 0.4));
    c(X(Zb(I(L(), z(0, 16, 110.5).scale(12, 1, 3), Q(0.5, 0.3, 0.3, 0.4)), I(L(), z(0, 16, 111).scale(3, 1, 3.8), Q(0.5, 0.3, 0.3, 0.4)),), I(L(5), z(0, 16, 103.5).scale(5.5, 5, 5.5), Q(0.5, 0.3, 0.3, 0.4),),),);
    Mb(z(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Mb(z(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...sb(18).map(({x:f, z:t}) => [7 * f, 10 * t, 4.5 - 2 * Za(f),]),);
    Mb(z(0, 3, 95), ...sb(9).map(({x:f, z:t}) => [9 * f, 9 * t, 4,]),);
    Mb(z(0, 19, 134), [0, 0, 3.5,]);
    Mb(z(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Mb(z(-89, 0.2, 80), [0, 0, 6,]);
    Mb(z(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Mb(z(-115, 0.2, -12), [0, 0, 3.5,]);
    Mb(z(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    U();
    c(L(5), z(0, -0.2).scale(5, 1, 5), Q(0.6, 0.65, 0.7, 0.3));
    Lb(z(0, 1.2));
    E(2, () => {
      U();
      Na.map(({x:f, z:t}) => {
        c(L(11, 1), z(4 * f, 4, 4 * t).scale(0.8, 3, 0.8), Q(0.5, 0.3, 0.7, 0.6));
        c(L(), z(4 * f, 7, 4 * t).scale(1, 0.3), Q(0.5, 0.5, 0.5, 0.3));
      });
      c(X(I(L(), m.scale(5, 1, 5), Q(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => I(L(25, 1), z(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), Q(0.8, 0.8, 0.8, 0.3),)),),);
      c(L(), z(0, -3).scale(8, 2, 8), Q(0.4, 0.4, 0.4, 0.3));
    });
    U();
    c(X(Zb(I(L(), m.scale(1.5, 1, 5), Q(0.9, 0.9, 0.9, 0.2)), I(L(6), m.scale(4, 1, 5), Q(0.9, 0.9, 0.9, 0.2)), I(L(), z(0, -2).scale(2, 3.2, 1.9), Q(0.3, 0.8, 0.5, 0.5)), I(L(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), Q(0.9, 0.9, 0.9, 0.2),),), I(L(), m.scale(1.3, 10, 1.3), Q(0.2, 0.7, 0.4, 0.6)),),);
    Mb(z(0, 2.8), [0, 0, 4.5,]);
    U();
    c(L(3), z(-23, -1.7, 55.8).scale(5, 0.7, 8.3), Q(0.3, 0.6, 0.6, 0.2));
    c(L(8), z(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), Q(0.8, 0.8, 0.8, 0.2));
    c(L(), z(-23, -3, 55).scale(5.2, 1.7, 3), Q(0.5, 0.5, 0.5, 0.3));
    c(L(), z(-23, -2.2, 62).scale(3, 1, 4), Q(0.5, 0.5, 0.5, 0.3));
    Lb(z(-23, -0.5, 66.5));
    U();
    c(L(), z(-22.55, -3, 55).scale(1.45, 1.4, 2.7), Q(0.7, 0.7, 0.7, 0.2));
    c(X(I(L(), m.scale(3, 1.4, 2.7)), I(L(), m.scale(1.2, 8, 1.2)),), z(-33, -3, 55), Q(0.7, 0.7, 0.7, 0.2),);
    U();
    c(X(I(L(), z(-27, -3, 55).scale(3, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2)), I(L(), z(-27, -3, 55).scale(1, 3), Q(0.9, 0.9, 0.9, 0.2)),),);
    c(L(), z(-39, -3, 55).scale(3, 1.4, 2.7), Q(0.9, 0.9, 0.9, 0.2));
    U();
    c(L(6), z(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), Q(0.7, 0.7, 0.7, 0.4),);
    U();
    [0, 12, 24,].map(f => c(L(), z(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), Q(0.2, 0.5, 0.6, 0.2),));
    U();
    [6, 18,].map(f => c(L(), z(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), Q(0.1, 0.4, 0.5, 0.2),));
    U();
    c(X(Zb(I(L(5), z(0, 2).scale(5, 7, 5).skewY(8), Q(0.2, 0.4, 0.5, 0.5),), I(L(5), z(0, 6).scale(1.1, 7, 1.1).skewY(-8), Q(0.25, 0.35, 0.5, 0.5),), I(L(5), z(0, 9).scale(0.6, 7, 0.6).skewY(8), Q(0.35, 0.3, 0.5, 0.5),),), I(L(5), m.scale(4, 8, 4), Q(0.2, 0.4, 0.5, 0.5)), I(L(5), z(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), Q(0.2, 0.4, 0.5, 0.5),),), z(-38.9, -11.3, 17),);
    Mb(z(-39.1, -0.6, 17).rotate(11), ...sb(15).map(({x:f, z:t}) => [3 * f, 3 * t, 1.2,]),);
    U();
    E(2, f => c(C, z(9 * f - 110 + (1 & f), 1.9, -12)));
    U();
    E(2, f => c(C, z(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    U();
    E(3, f => c(C, z(9 * f - 106, 1.9, -12)));
    E(4, f => {
      U();
      c(L(6), z(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), Q(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [Q(0.1, 0.55, 0.45, 0.2), Q(0.2, 0.5, 0.5, 0.3), Q(0.3, 0.45, 0.55, 0.4),].map((f, t) => {
      U();
      c(L(), z(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && c(L(), z(-29.1, 0.4, 91).scale(2.1, 1, 3), Q(0.7, 0.7, 0.7, 0.3));
      1 === t && c(L(), z(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), Q(0.6, 0.6, 0.7, 0.3),);
    });
    U();
    c(L(5), m.scale(5, 1.1, 5), Q(0.5, 0.3, 0.3, 0.4));
    c(L(5), m.scale(5.5, 0.9, 5.5), Q(0.25, 0.25, 0.25, 0.4));
    Lb(z(0, 1.5, -1).rotate(0, 180));
    E(4, f => {
      U();
      E(7, t => c(I(L(9, 1), z((2 < f ? 3.5 : 4) * (t / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), Q(0.3, 0.3, 0.38),),),);
    });
    E(2, () => {
      U();
      c(X(I(L(30, 1, 1.15, 1), z(0, -3).scale(3.5, 1, 3.5), Q(0.7, 0.4, 0.25, 0.7),), I(L(30, 1, 1.3, 1), z(0, -2.5).scale(2.6, 1, 3), Q(0.7, 0.4, 0.25, 0.2),), I(L(), z(4, -1.2).scale3d(2), Q(0.7, 0.4, 0.25, 0.3)),),);
      Lb(z(0, -3, 4));
    });
    U();
    c(w);
    U();
    c(L(15, 1), z(-7.5).rotate(0, 90).scale(3, 2.3, 3), Q(0.4, 0.4, 0.4, 0.3));
    c(L(10), z(-7.5).rotate(0, 90).scale(2, 2.5, 2), Q(0.3, 0.8, 0.7, 0.3));
    c(L(5), z(-7.5).rotate(0, 90).scale(1, 3), Q(0.5, 0.5, 0.5, 0.5));
    Lb(z(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(n, m.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(X(I(L(10), m.scale(6, 2, 6), Q(0.1, 0.6, 0.5, 0.3)), I(L(10), m.scale(3.3, 6, 3.3), Q(0.1, 0.6, 0.5, 0.5)),),);
    Mb(z(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    U();
    c(L(3), z(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), Q(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(L(6), z(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), Q(0.7, 0.7, 0.7, 0.4),);
      c(L(), z(0, 6.2, f + 95).scale(0.5, 11, 0.5), Q(0.5, 0.3, 0.3, 0.4));
    });
    U();
    c(X(I(L(45, 1), m.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)), I(L(), z(0, 0, -5.5).scale(1.5, 3, 2.7), Q(0.45, 0.45, 0.45, 0.2),),),);
    c(L(8), z(0, 2).scale(3, 1.5, 3).rotate(0, 22), Q(0.7, 0.7, 0.7, 0.1));
    c(L(5), z(0, 2).scale(1, 2), Q(0.3, 0.3, 0.3, 0.2));
    Mb(z(0, 3), ...sb(14).map(({x:f, z:t}) => [5.6 * f, 5.6 * t, 2,]),);
    U();
    [-1, 1,].map(f => c(n, m.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90),));
    c(X(I(L(28, 1), z(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)), I(L(), m.scale(9, 5, 2), Q(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), z(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(I(L(28, 1), z(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)), I(L(), z(7).scale(9, 5, 2), Q(0.3, 0, 0, 0.3)), I(L(), z(0, 0, 7).scale(2, 5, 9), Q(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), z(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(I(L(28, 1), z(0, 2).scale(7.5, 1, 7.5), Q(0.35, 0, 0, 0.3)), I(L(), z(7).scale(9, 5, 2), Q(0.3, 0, 0, 0.3)), I(L(), z(0, 0, -7).scale(2, 5, 9), Q(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), Q(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), z(0, 1).scale(1, 0.2), Q(0.3, 0.3, 0.3, 0.2)));
    U();
    c(wb(20), z(0, 1).scale3d(0.5), Q(1, 0.3, 0.4));
    c(wb(30), m.scale(0.65, 0.8, 0.55), Q(1, 0.3, 0.4));
    c(L(), z(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), Q(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(n, m.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), Q(1, 1, 0.8),);
      c(I(X(L(15, 1), I(L(), z(0, 0, 1).scale(2, 2, 0.5)),), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), Q(0.3, 0.3, 0.3),), z(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map(f => {
      U();
      c(L(20, 1), z(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), Q(1, 0.3, 0.4));
    });
    U();
    c(wb(30, 24, (f, t, J) => {
      const H = t / 24, D = f * Math.PI * 2 / 30, G = Math.sin(H ** 0.6 * Math.PI / 2);
      f = H * H * Math.sin(f * Math.PI * 14 / 30) / 4;
      return 23 < t ? {x:J.C = 0, y:-0.5, z:0,} : {x:Math.cos(D) * G, y:Math.cos(H * Math.PI) - H - f, z:Math.sin(D) * G + Math.sin(f * Math.PI * 2) / 4,};
    }), m.scale(0.7, 0.7, 0.7), Q(1, 1, 1),);
    [-1, 1,].map(f => c(wb(12), z(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    U();
    c(L(6, 1), m.scale(0.12, 1.2, 0.12), Q(0.3, 0.3, 0.5, 0.1));
    c(L(10), z(0, 0.8).scale(0.2, 0.3, 0.2), Q(1, 0.5, 0.2));
    c(L(3), z(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), Q(0.2, 0.2, 0.2, 0.1));
  });
});

