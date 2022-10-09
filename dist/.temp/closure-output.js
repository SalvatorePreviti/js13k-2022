let aa, ba, da, ea, ha, ka, la, ma, na, oa, c, pa, qa, sa, ta, ua, va, d = 0, wa = 0, xa = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ia = 0, Ja = 0.1;
const Ka = Math.PI / 180, La = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Ma = [], e = [], h = [], Na = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ra = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Sa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ta = 0, Ua = 0, Va = 0, Wa = 0, Xa = 180;
const Ya = NO_INLINE(a => 0 > a ? -a : a), Za = NO_INLINE((a, b) => a < b ? a : b), $a = NO_INLINE((a, b) => b < a ? a : b), ab = (a, b) => Ya(a) > b ? a : 0, l = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, bb = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka, cb = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * l(g) || 0, db = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, eb = (a, b) => (a = l(a), db(a, 1 - a, b)), fb = (a, b, g = 0) => Math.sqrt(a * a + b * b + 
g * g), kb = (a = 0, b = 0, g = 0, k = 1) => {
  gb = m.m11 * a + m.m21 * b + m.m31 * g + m.m41 * k;
  hb = m.m12 * a + m.m22 * b + m.m32 * g + m.m42 * k;
  ib = m.m13 * a + m.m23 * b + m.m33 * g + m.m43 * k;
  jb = m.m14 * a + m.m24 * b + m.m34 * g + m.m44 * k;
};
var gb, hb, ib, jb;
const mb = (a, b = lb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), nb = (a = w, b = m,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), D = NO_INLINE((a, b, g) => w.translate(a, b, g)), ob = (a, b) => Array.from(Array(a), (g, k) => b(k)), pb = (a, b, g) => (a.C = g, a.u = b, a), qb = (a, b, g = a.u,) => (nb(b), pb(a.map(({x:k, y:q, z:n}) => (kb(k, q, n), {x:gb, y:hb, z:ib,})), g, a.C,)), H = (a, b, g) => a.map(k => qb(k, b, g)), rb = (a, b = 0) => ob(a, g => {
  const k = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Ya(k) ? k : 0 > k ? k - b : k + b,};
}), sb = (a, b, g) => a.map((k, q, {length:n}) => pb([k, b[n - q - 1], b[n - (q + 1) % n - 1], a[(q + 1) % n],], a.u, g,)), K = (a, b, g = 0, k,) => (a = a ? rb(a, k) : Na, k = qb(a, D(0, 1).scale3d(0 < g ? g : 1)), a = qb(a, D(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...sb(a, k, b), k, a,]), vb = (a, b = a, g = (k, q) => (q *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(k) * Math.sin(q),})) => {
  const k = [];
  for (let q = 0; a > q; q++) {
    for (let n = 0; b > n; n++) {
      const y = pb([], 0, 1);
      k.push(y);
      y.push(g(q, n, y));
      n && y.push(g((q + 1) % a, n, y));
      b - 1 > n && y.push(g((q + 1) % a, n + 1 % b, y));
      y.push(g(q, n + 1 % b, y));
    }
  }
  return k;
}, wb = NO_INLINE(a => 1 - Math.exp(-xa * a)), xb = NO_INLINE((a, b, g) => db(a, b, wb(g))), yb = (a, b, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), zb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Ab = a => Math.sin(a * Math.PI * 2), Bb = a => 0.5 > a % 1 ? 1 : -1, Cb = a => a % 1 * 2 - 1, Fb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Gb = a => {
  let b = 0;
  const g = () => {
    let n = 0;
    const y = P => {
      let I, V, Ha, ia = 0, ja = 0;
      const ca = [], ra = new Int32Array(768 * P), dc = 2 ** (x - 9) / P, ec = Math.PI * 2 ** (u - 8) / P, Db = B * P & -2;
      for (let tb = 0; 11 >= tb; ++tb) {
        for (let ub = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb]; 32 > ub; ++ub) {
          const Pb = (32 * tb + ub) * P;
          for (var Oa = 0; 4 > Oa; ++Oa) {
            if (I = 0, Ob && (I = z[Ob - 1].charCodeAt(ub + 32 * Oa) - 40, I += 0 < I ? 106 : 0), I) {
              var fa;
              if (!(fa = ca[I])) {
                fa = I;
                let X = void 0, ya = void 0;
                var Qb = I;
                let fc = 0, gc = 0;
                const hc = 2 > b ? Cb : Ab, ic = 2 > b ? 1 > b ? Bb : Fb : Ab, Rb = new Int32Array(Q + T + R);
                for (let Pa = 0, Eb = 0; Q + T + R > Pa; ++Pa, ++Eb) {
                  let Qa = 1;
                  Q > Pa ? Qa = Pa / Q : Q + T > Pa || (Qa = (1 - (Qa = (Pa - Q - T) / R)) * 3 ** (-p / 16 * Qa));
                  0 > Eb || (Eb -= 4 * P, ya = 0.00396 * 2 ** ((Qb + t - 256) / 12), X = 0.00396 * 2 ** ((Qb + F - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Rb[Pa] = 80 * (hc(fc += ya * Qa ** (M / 32)) * f + ic(gc += X * Qa ** (A / 32)) * G + (W ? (2 * Math.random() - 1) * W : 0)) * Qa | 0;
                }
                fa = ca[fa] = Rb;
              }
              for (let X = 0, ya = 2 * Pb; fa.length > X; ++X, ya += 2) {
                ra[ya] += fa[X];
              }
            }
          }
          for (let X, ya = 0; P > ya; ++ya) {
            Oa = 0;
            fa = 2 * (Pb + ya);
            var za = (((X = ra[fa]) || Ha) && (V = 0.00308 * C, 1 !== b && 4 !== b || (V *= Math.sin(dc * fa * Math.PI * 2) * J / 512 + 0.5), V = 1.5 * Math.sin(V), ia += V * ja, za = (1 - S / 255) * (X - ja) - ia, ja += V * za, X = 4 === b ? ja : 3 === b ? za : ia, b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5), X *= E / 32, Ha = 1e-5 < X * X, za = Math.sin(ec * fa) * r / 512 + 0.5, Oa = X * (1 - za), X *= za), fa < Db || (Oa += ra[1 + fa - Db] * v / 255, 
            X += ra[fa - Db] * v / 255), n + fa >> 1);
            k[za] += (ra[fa] = Oa) / 65536;
            q[za] += (ra[++fa] = X) / 65536;
          }
        }
      }
      n += 768 * P;
    }, z = Ra[b], [f, t, M, G, F, A, W, Q, T, N, p, x, C, S, E, r, u, v, B, J] = Sa[b], R = 4 * N ** 2;
    y(5513);
    y(4562);
    y(3891);
    zb(5 > ++b ? g : a);
  }, k = (da = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), q = da.getChannelData(1);
  zb(g);
}, Hb = () => {
  let a, b, g, k, q, n, y, z, f, t, M, G, F, A, W, Q, T = !0;
  const N = [], p = () => {
    b4.innerHTML = "Music: " + T;
    Q && (ba || !T ? Q.disconnect() : Q.connect(W.destination));
  }, x = () => {
    const r = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = [yb(0.3, 55, r, 1.732051), yb(55, 181, r, 1.732051),];
    ka = yb(0.3, 181, r, 1.732051);
    k = z = void 0;
    N.length = ea = A = G = F = Aa = Ba = 0;
  }, C = r => {
    if (ba !== r) {
      if (ba = r, x(), document.body.className = r ? "l m" : "l", r) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      p();
    }
  }, S = r => {
    try {
      W || (W = new AudioContext(), (Q = W.createBufferSource()).buffer = da, Q.loop = !0, Q.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    C(!1);
    ha = r;
  }, E = (r, u) => r.buttons[u]?.pressed || 0 < r.buttons[u]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    S();
  };
  b2.onclick = () => {
    S(1);
  };
  b5.onclick = () => C(!0);
  b4.onclick = () => {
    T = !T;
    p();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
  };
  onclick = r => {
    if (!ba && (r.target === hC && (ea = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = r => {
    let u;
    r.repeat || (u = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[r.code], (N[u] = !!r.type[5] && !0) && (0 === u && (ea = 1), 1 === u && C(!0)));
  };
  onmousemove = ({movementX:r, movementY:u}) => {
    ha && (r || u) && (Xa += 0.1 * r, Wa += 0.1 * u);
  };
  hC.ontouchstart = r => {
    if (!ba) {
      for (let {pageX:u, pageY:v, identifier:B} of r.changedTouches) {
        ha && u > hC.clientWidth / 2 ? void 0 === z && (f = 0, n = u, y = v, z = B, M = Wa, t = Xa) : void 0 === k && (q = 0, b = u, g = v, k = B);
      }
      a = wa;
    }
  };
  hC.ontouchmove = r => {
    if (!ba) {
      for (let {pageX:R, pageY:P, identifier:I} of r.changedTouches) {
        var u, v, B, J;
        z === I && (Wa = M + (P - y) / 2.3, Xa = t + (R - n) / 2.3, f = 1);
        k === I && (I = (b - R) / 20, u = Ya(I), v = (g - P) / 20, B = Ya(v), (J = 0.5 < $a(u, B)) && (q = 1), G = (J && 0.3 < u) * l(I, -1), F = (J && 0.3 < B) * l(v, -1), 2 < u && (b = 20 * (0 > I ? -1 : 1) + R), 2 < B && (g = 20 * (0 > v ? -1 : 1) + P));
      }
    }
  };
  hC.ontouchend = r => {
    let u;
    document.activeElement === document.body && r.preventDefault();
    for (const v of r.changedTouches) {
      v.identifier === z ? (z = void 0, f || (u = 1), f = 0) : v.identifier === k ? (k = void 0, F = G = 0, q || (u = 1), q = 0) : u = 1;
    }
    r.target === hC && u && a && 0.02 < (r = wa - a) && 0.7 > r && (ea = 1);
  };
  ma = () => {
    Aa = F + (N[4] ? 1 : 0) - (N[5] ? 1 : 0);
    Ba = G + (N[2] ? 1 : 0) - (N[3] ? 1 : 0);
    let r = navigator.getGamepads()[0];
    r && (ha && (Wa += xa * ab(r.axes[3], 0.3) * 80, Xa += xa * ab(r.axes[2], 0.3) * 80), Aa += E(r, 12) - E(r, 13) - ab(r.axes[1], 0.2), Ba += E(r, 14) - E(r, 15) - ab(r.axes[0], 0.2), E(r, 9) && C(!0), (r = E(r, 3) || E(r, 2) || E(r, 1) || E(r, 0)) && !A && (ea = 1), A = r);
  };
  document.onvisibilitychange = onblur = onresize = x;
  C(!0);
}, Ib = (a, b) => {
  1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
}, Jb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Ca = Ma.reduce((a, b) => a + b.i, 0)] + " / XIII";
}, Kb = () => {
  localStorage.spdnt22 = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Ea, d, oa,]);
}, L = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), O = () => {
  const a = [];
  c = (b, g = new DOMMatrix(), k) => a.push(...H(b, g, k));
  h.push({m:new DOMMatrix(), o:a,});
}, Lb = a => {
  const b = h.at(-1).m, g = e.length, k = {i:0, g:0, h:0, m:b, G:a, F() {
    k.g = xb(k.g, k.i, 4);
    k.h = xb(k.h, k.i, 1);
    nb(b).multiplySelf(a);
    ea && 3 > (kb(), fb(Ta - gb, Ua - hb, Va - ib,)) ? k.i ? 0.7 < k.g && (k.i = 0, (Ea = g) && Ib("* click *", 1), Kb()) : 0.3 > k.g && (k.i = 1, (Ea = g) && Ib("* click *", 1), Kb()) : k.i && 0.8 < k.g && !g && (k.i = 0, 13 > Ca ? Ib("Not leaving now, there are souls to catch!", 3) : Da || (Ib("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Da = 1));
    m.rotateSelf(50 * k.g - 25, 0).translateSelf(0, 1).m44 = 1 - k.g;
  },};
  e.push(k);
  c(K(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
  c(K(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), L(0.4, 0.5, 0.5));
  c(K(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), L(0.5, 0.5, 0.4));
}, Mb = (a, ...b) => {
  let g, k, q, n, y = 0, z = 0, f = 1, t = -1;
  const M = {i:0, F() {
    if (!M.i) {
      let p, x, C, S, E, r = 1, u = 1 / 0;
      for (let v = 0; b.length > v; v++) {
        const B = b[v];
        let J = fb(F - B[0], A - B[1]);
        r = Za(r, J / B[2]);
        0 > (J -= B[2]) ? E = 1 : u > J && (u = J, G = B);
      }
      E || (p = F - G[0], x = A - G[1], C = fb(p, x), S = Math.atan2(-x, p), f && (n = l(n / (1 + Math.random())), z = (Math.random() - 0.5) * Math.PI / 2), S += z, t = -Math.cos(S), y = Math.sin(S), 0.1 < C && (C = Za(C, G[2]) / C, F = p * C + G[0], A = x * C + G[1]));
      f = E;
      n = xb(n, 3 + 6 * (1 - r), 3 + r);
      W = xb(W, F = xb(F, F + t, n), n);
      Q = xb(Q, A = xb(A, A + y, n), n);
      g = cb(g, Math.atan2(W - k, Q - q) / Ka - 180, wb(3),);
      nb(T).multiplySelf(a).translateSelf(k = W, 0, q = Q).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
      1.6 > (kb(), fb(Ta - gb, Ua - hb, Va - ib,)) && (M.i = 1, Ib([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Ca] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Jb(), Kb());
    }
    M.i && nb(h[2].m).translateSelf(N % 4 * 1.2 - 1.7 + Math.sin(d + N) / 7, -2, 1.7 * (N / 4 | 0) - 5.5 + Ya(N % 4 - 2) + Math.cos(d / 1.5 + N) / 6,);
  },};
  let G = b[0], [F, A] = G, [W, Q] = G;
  const T = h.at(-1).m, N = Ma.length;
  Ma.push(M);
}, Nb = ({x:a, y:b, z:g}, k) => a * k.x + b * k.y + g * k.z, Sb = a => {
  let b, g = 0, k = 0, q = 0, n = a.at(-1);
  for (b of a) {
    g += (n.y - b.y) * (n.z + b.z), k += (n.z - b.z) * (n.x + b.x), q += (n.x - b.x) * (n.y + b.y), n = b;
  }
  return b = fb(g, k, q), g /= b, k /= b, q /= b, {x:g, y:k, z:q, w:g * n.x + k * n.y + q * n.z,};
}, Tb = (a, b) => {
  var g, k, q, n = b.B;
  for (var y = 0; n.length > y; ++y) {
    if (-0.00008 > (g = Nb(a, n[y]) - a.w) ? q = b : 8e-5 < g && (k = b), q && k) {
      k = [];
      q = [];
      n = b.B;
      y = b.v;
      let z = n.at(-1), f = Nb(a, z) - a.w;
      for (const t of n) {
        g = Nb(a, t) - a.w, 8e-5 > f && q.push(z), -0.00008 < f && k.push(z), (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g) && (f /= g - f, z = {x:z.x + (z.x - t.x) * f, y:z.y + (z.y - t.y) * f, z:z.z + (z.z - t.z) * f,}, k.push(z), q.push(z)), z = t, f = g;
      }
      return {l:2 < k.length && {B:pb(k, n.u, n.C), v:y, A:b,}, j:2 < q.length && {B:pb(q, n.u, n.C), v:y, A:b,},};
    }
  }
  return {l:k, j:q,};
}, Ub = (a, b, g = Sb(b.B)) => {
  let k, q;
  return a ? ({l:k, j:q} = Tb(a, b), k || q || a.o.push(b), k && (a.l = Ub(a.l, k, g)), q && (a.j = Ub(a.j, q, g))) : a = {x:g.x, y:g.y, z:g.z, w:g.w, o:[b,], l:0, j:0,}, a;
}, Vb = (a, b, g) => {
  const k = [], q = (n, y) => {
    let {l:z, j:f} = Tb(n, y);
    z || f || (0 < g * Nb(n, b) ? z = y : f = y);
    z && (n.l ? q(n.l, z) : k.push(z));
    f && n.j && q(n.j, f);
  };
  for (const n of b.o) {
    q(a, n);
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
    Wb(b, q => q.o = Vb(g, q, 1));
    Wb(g, q => k.push([q, Vb(b, q, -1),]));
    for (let [q, n] of k) {
      for (const y of n) {
        Ub(b, y, q);
      }
    }
  }
  return b;
}), U = (a, ...b) => {
  const g = n => {
    let y;
    return n.A && ((y = k.get(n.A)) ? (q.delete(y), n = g(n.A)) : k.set(n.A, n)), n;
  }, k = new Map(), q = new Map();
  return a = Xb(Zb(Xb(Yb(a)), ...b)), Wb(a, n => {
    for (const y of n.o) {
      q.set(g(y), y.v);
    }
  }), Array.from(q, ([{B:n}, y]) => {
    const z = n.map(({x:f, y:t, z:M}) => ({x:f, y:t, z:M,}));
    return pb(y ? z.reverse() : z, n.u, n.C);
  });
}, Y = () => nb(w, h[++pa].m), ac = () => {
  let a, b, g, k, q, n, y, z, f, t, M, G, F, A = 0, W = 0, Q = 0, T = 0, N = 1, p = 2, x = 15;
  const C = () => nb((p ? e[Ea] : h[28 !== A ? A : 0]).m,), S = u => {
    1 < p ? (nb(e[Ea].m).multiplySelf(e[Ea].G), kb(0, 0.9 < Ea + na ? 15 : 1, -2.4)) : (C(), kb(W, Q, T));
    u && (q = (gb - Ta) / xa, n = (ib - Va) / xa);
    Ta = gb;
    Ua = hb;
    Va = ib;
  }, E = () => {
    var u = 0, v = 0, B = 0, J = 0, R = 0, P = 0, I = -1;
    for (var V = 0; 36 > V; ++V) {
      var Ha = 512 * V;
      for (var ia = 96; 416 > ia; ia += 4) {
        for (var ja = 0; 2 > ja; ++ja) {
          var ca = $b[Ha + ia + ja];
          const ra = $b[Ha + ia + ja + 2];
          ca > J && (J = ca);
          ca + ra && (0 > I || I === V) && (I = V, ra === t ? ++u : v && v !== ra || (v = ra, ++B));
        }
      }
    }
    t = 0 > I ? 0 : B > 2 * u ? v : t;
    for (u = 36; 128 > u; ++u) {
      V = I = B = v = 0;
      Ha = 512 * u;
      for (ia = 0; 128 > ia; ++ia) {
        ja = Ha + 4 * ia, ca = $b[ja], 64 > ia ? ca > v && (v = ca) : ca > B && (B = ca), (ca = $b[2 + ja]) > I && (I = ca), ca = $b[1 + ja], 64 < ia ? ca > v && (v = ca) : ca > B && (B = ca), (ca = $b[3 + ja]) > V && (V = ca);
      }
      (B -= v) * B > R * R && (R = B);
      (V -= I) * V > P * P && (P = V);
    }
    R *= 0.7;
    z = l(1 - 0.01 * $a(Ya(R), Ya(P)), 0.3);
    R /= 255;
    J /= 255;
    P /= 255;
    C().invertSelf();
    kb(R, J, P, 0);
    W += gb;
    Q += J;
    T += ib;
    S();
  }, r = (u, v, B, J) => db(u, v, N || (l(Ya(v - u) ** 0.5 - B) + 1 / 7) * wb(1.5 * J));
  qa = () => {
    S(t);
    Z.r9r(0, 0, 128, 128, 6408, 5121, $b);
    NO_INLINE(E)();
    !p && t === A || (A = t, C().invertSelf(), kb(Ta, Ua, Va), W = gb, Q = hb, T = ib, p = p && (t ? 0 : 1));
    (-20 > Ta || 109 > Va ? -25 : -9) > Ua && (p = 2);
    1 === t && (e[11].i = -15 > Ta && 0 > Va ? 1 : 0);
    f = db(xb(f, Ua, 2), Ua, p || 8 * Ya(f - Ua),);
    M = r(M, Ta, 0.5, 1);
    G = r(G, f, 2, 1);
    F = r(F, Va, 0.5, 1);
    k = xb(k, sa * (27 < t && 32 > t), 2,);
    ha ? (u = p + wb(18), Fa = db(Fa, Ta, u), Ia = db(Ia, Va, u), Ga = db(Ga, 1.6 + f, u), Xa = bb(Xa)) : (Fa = r(Fa, M, 1, 2 + k,), Ia = r(Ia, F + -18 + 5 * k, 1, 2 + k,), Ga = r(Ga, $a(G + l((-60 - Va) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), u = Za(-6, -Ya(F - Ia)), v = M - Fa, Xa = cb(Xa, 90 - bb(Math.atan2(u, v) / Ka), N + wb(10),), Wa = cb(Wa, 90 - Math.atan2(fb(u, v), Ga - G) / Ka, N + wb(10),));
    Wa = l(Wa, -87, 87);
    N = 0;
    var u = l(Aa, -1), v = l(Ba, -1), B = ab(fb(u, v) ** 0.5, 0.1);
    let J = Math.atan2(u, v);
    B && (a = 90 - J / Ka);
    b = cb(b, a, wb(8));
    g = xb(g, B, 10);
    Y().translateSelf(Ta, 0.06 * z * g * Math.cos(18.2 * d) + f, Va,).rotateSelf(0, b);
    for (var R = 0; 2 > R; ++R) {
      const P = 9.1 * d - Math.PI * R;
      nb(h[37].m, Y()).translateSelf(0, g * l(0.45 * Math.sin(P - Math.PI / 2)),).rotateSelf(g * Math.sin(P) * 0.25 / Ka, 0);
    }
    x = t ? 5 : xb(x, p ? 13 : 19 - 2 * Za(0, Ua + 10), 2.2);
    q = t || p ? 0 : xb(q, 0, 3);
    n = t || p ? 0 : xb(n, 0, 3);
    u = (y = p ? 0 : xb(y, t ? 7 * l(2 * B) * z : 0, t ? 9 : 1,)) * B * Ya(u) * Math.sin(J);
    v = y * B * Ya(v) * Math.cos(J);
    J = ha ? (180 + Xa) * Ka : 0;
    B = xa * (q + (v * Math.cos(J) - Math.sin(J) * u));
    R = xa * -x;
    u = xa * (n + (v * Math.sin(J) + Math.cos(J) * u));
    C().invertSelf();
    kb(B, R, u, 0);
    W += gb;
    Q += R;
    T += ib;
    S();
  };
}, jc = (a, b, g) => {
  ba ? 1100 < hC.width && (nb().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), mb(m, bc, 35), mb(m, bc, 36), mb(m, bc, 37), Z.uae(a, !1, bc), Z.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s)) : (Z.uae(a, !1, cc), Z.das(4, h[g].D - h[g].s, 5123, 2 * h[g].s, Ma.length,), Z.das(4, h[42].D - h[42].s, 5123, 2 * h[42].s, e.length,), Z.uae(a, !1, bc), Z.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
}, kc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), lc = (a, b) => {
  const g = {}, k = Z.c1h();
  return Z.abz(k, a), Z.abz(k, kc(b, 35632)), Z.l8l(k), q => q ? g[q] || (g[q] = Z.gan(k, q)) : Z.u7y(k);
}, m = new DOMMatrix(), w = new DOMMatrix(), lb = new Float32Array(16), cc = new Float32Array(464), bc = new Float32Array(608), $b = new Uint8Array(65536), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
zb(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], n = p => {
        requestAnimationFrame(n);
        var x = (p - (aa || p)) / 1e3;
        if (wa += x, d += xa = ba ? 0 : Za(0.055, x), aa = p, 0 < xa) {
          ma();
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          Da && (ha = 0);
          na = Da ? xb(na, -9, 0.015) : xb(na, l(d / 3), 1);
          oa = xb(oa, e[10].h, 0.2 + 0.3 * Ya(2 * e[10].h - 1),);
          x = (S, E, r, u) => S.translateSelf(E + Math.sin(d + 2) / 5, r + Math.sin(0.8 * d) / 3, u).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          pa = 1;
          sa = eb(e[14].g, e[8].g);
          va = db(xb(va, 0, 1), bb(va + 60 * xa), e[13].g - e[2].h,);
          ta = db(xb(ta, 0, 5), bb(ta + 56 * xa), sa,);
          ua = db(xb(ua, 0, 4), bb(ua + 48 * xa), sa,);
          x(Y(), -12, 4.2, 40 * na - 66);
          x(Y(), -123, 1.4, 55 - 65 * oa);
          Y().translateSelf(0, 0, -15).scaleSelf(1, l(1.22 - e[0].g), 1);
          Y().translateSelf(0, 0, 15).scaleSelf(1, l(1.22 - e[12].g), 1);
          Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, l(1.1 - e[3].g), 1);
          Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - e[14].g);
          Y().translateSelf(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[12].g),);
          p = Za(1 - e[13].h, e[12].h);
          Y().translateSelf(p * Math.sin(0.6 * d + 1.2) * 12, 0, 35);
          Y().translateSelf(p * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55);
          Y().translateSelf(p * Math.sin(0.6 * d) * 12, 0, 45);
          Y().translateSelf(9.8 * (1 - p));
          p = l(1 - 5 * p) * eb(e[12].g, e[13].g);
          Y().translateSelf(0, p * Math.sin(1.35 * d) * 4);
          Y().translateSelf(0, 0, p * Math.sin(0.9 * d) * 8);
          Y().translateSelf(0, -6.5 * e[13].h);
          Y().translateSelf(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + va, 0);
          p = eb(e[4].h, e[3].h);
          Y().translateSelf(0, p * Math.sin(d) * 5 + 3.5 * (1 - $a(e[3].g, e[4].g)),);
          Y().translateSelf(0, p * Math.sin(d + 3) * 6, p * Math.sin(0.6 * d + 1) * 6,);
          Y().translateSelf(0, -7.3 * e[4].h);
          p = eb(e[6].g, e[7].g);
          Y().translateSelf(0, -2, 10 - 8.5 * p * Ya(Math.sin(1.1 * d)));
          Y().translateSelf(0, -2, 10 - 8.5 * p * Ya(Math.sin(2.1 * d)));
          Y().translateSelf(0, -2, 10 - 8.5 * $a(p * Ya(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - p)),);
          p = eb(e[5].h, e[14].h);
          for (x = 0; 4 > x; x++) {
            Y().translateSelf((2 < x ? 2 * (1 - p) + p : 0) - 100, p * Math.sin(1.3 * d + 1.7 * x) * (3 + x / 3) + 0.7, 115 - 7 * (1 - e[5].h) * (1 - e[14].h) * (1 & x ? -1 : 1) + $a(0.05, p) * Math.cos(1.3 * d + 7 * x) * (4 - 2 * (1 - x / 3)),);
          }
          Y().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - e[5].g) - p * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * p), 0);
          Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ta);
          Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, ua);
          Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - ua);
          Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + ua);
          p = eb(e[8].h, e[9].h);
          for (x = 0; 3 > x; ++x) {
            Y().translateSelf(0, p * Math.sin(1.5 * d + 1.5 * x) * 4 + (x ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)),);
          }
          Y().translateSelf(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          p = eb(eb((e[9].g + e[9].h) / 2, e[8].h), (e[15].g + e[15].h) / 2,);
          Y().translateSelf(0, 16 * p, 95 + 8.5 * l(2 * p - 1));
          for (p = 0; 13 > p; ++p) {
            Ma[p].F(), mb(m, cc, p);
          }
          for (p = 0; 16 > p; ++p) {
            e[p].F(), mb(m, cc, 13 + p);
          }
          qa();
          for (p = 2; pa >= p; ++p) {
            mb(h[p].m, bc, p - 2);
          }
          F();
          Z.b6o(36160, N);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          Z.uae(F("b"), !1, mb(nb().rotateSelf(0, 180).invertSelf().translateSelf(-Ta, -Ua, 0.3 - Va,),),);
          jc(F("c"), 0, 40);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(F("b"), !1, mb(nb().translateSelf(-Ta, -Ua, -Va - 0.3,),),);
          jc(F("c"), 0, 40);
          ea = 0;
        }
        p = Fa;
        x = Ga;
        let C = Ia;
        ba ? (nb(ka).invertSelf(), kb(3.6, 3.5), p = gb, x = hb, C = 5, nb(w, z).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -x, -C,).rotateSelf(0, 99)) : nb(w, z).rotateSelf(-Wa, -Xa).invertSelf().translateSelf(-p, -x, -C);
        M();
        Z.b6o(36160, Q);
        Z.v5y(0, 0, 2048, 2048);
        W[0](54.7 * 1.1);
        W[1](126 * 1.1);
        A();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(A("a"), !1, mb(ka));
        Z.uae(A("b"), !1, mb(z));
        Z.uae(A("i"), !1, q[0]);
        Z.uae(A("j"), !1, q[1]);
        Z.ubu(A("k"), p, x, C);
        jc(A("c"), !ha, 41);
        G();
        Z.ubu(G("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
        Z.ubu(G("k"), p, x, C);
        Z.uae(G("b"), !1, mb(nb(z).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, N);
        Z.f1s();
      }, y = new DOMMatrix(), z = new DOMMatrix(), f = g, t = ob(8, () => ({}));
      var k = kc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[38];void main(){mat4 i=f.w==1.?mat4(1):c[abs(int(f.w))+gl_InstanceID-2];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const M = lc(kc("#version 300 es\nin vec4 f;uniform mat4 b,c[38];void main(){mat4 i=f.w==1.?mat4(1):c[abs(int(f.w))+gl_InstanceID-2];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), G = lc(kc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), F = lc(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), A = lc(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), W = ob(2, p => {
        const x = Z.c25();
        return Z.a4v(33984 + p), Z.b9j(3553, x), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), C => {
          let S = 0, E = 0, r = 0, u = 1 / 0, v = 1 / 0, B = 1 / 0, J = -1 / 0, R = -1 / 0, P = -1 / 0;
          Z.fas(36160, 36096, 3553, x, 0);
          Z.c4s(256);
          nb().scale3dSelf(C).multiplySelf(nb(la[p], y).multiplySelf(z).invertSelf(),);
          for (let I = 0; 8 > I; ++I) {
            const V = t[I];
            kb(4 & I ? 1 : -1, 2 & I ? 1 : -1, 1 & I ? 1 : -1);
            S -= V.x = (0 | gb) / (C * jb);
            E -= V.y = (0 | hb) / (C * jb);
            r -= V.z = (0 | ib) / (C * jb);
          }
          nb().rotateSelf(298, 139).translateSelf(S / 8, E / 8, r / 8);
          for (C = 0; 8 > C; ++C) {
            const {x:I, y:V, z:Ha} = t[C];
            kb(I, V, Ha);
            u = Za(u, gb);
            J = $a(J, gb);
            v = Za(v, hb);
            R = $a(R, hb);
            B = Za(B, ib);
            P = $a(P, ib);
          }
          C = 10 + p;
          B *= 0 > B ? C : 1 / C;
          P *= 0 < P ? C : 1 / C;
          Z.uae(M("b"), !1, mb(nb(w, y).scaleSelf(2 / (J - u), 2 / (R - v), 2 / (B - P),).translateSelf((J + u) / -2, (R + v) / -2, (B + P) / 2).multiplySelf(m), q[p],),);
          jc(M("c"), !ha, 41);
        };
      }), Q = Z.c5w();
      k = Z.c25();
      const T = Z.c3z(), N = Z.c5w();
      F();
      Z.uae(F("a"), !1, mb(yb(1e-4, 2, 1.2, 0.4)));
      A();
      Z.ubh(A("q"), 2);
      Z.ubh(A("h"), 1);
      Z.ubh(A("g"), 0);
      G();
      Z.ubh(G("q"), 2);
      Z.b6o(36160, Q);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, N);
      Z.bb1(36161, T);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, T);
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
      requestAnimationFrame(n);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = La;
  NO_INLINE(Gb)(() => {
    zb(() => {
      let f = 0;
      const t = [], M = [], G = [], F = [], A = new Int32Array(8), W = new Map(), Q = new Int32Array(A.buffer, 0, 5), T = new Float32Array(A.buffer);
      h.map((N, p) => {
        let x;
        const C = S => {
          let {x:E, y:r, z:u} = x[S], v = (T[0] = E, T[1] = r, T[2] = u, S = "" + (x.C ? Q : A), W.get(S));
          return void 0 !== v ? (E = 3 * v, F[E] = (F[E++] + A[5]) / 2, F[E] = (F[E++] + A[6]) / 2, F[E] = (F[E] + A[7]) / 2) : (W.set(S, v = W.size), M.push(E, r, u, T[3]), G.push(A[4]), F.push(A[5], A[6], A[7])), v;
        };
        for (x of (T[3] = 41 === p || 40 === p ? -2 : 42 === p ? -15 : p, N.o)) {
          const {x:S, y:E, z:r} = Sb(x);
          A[4] = 0 | x.u;
          A[5] = 32767 * S;
          A[6] = 32767 * E;
          A[7] = 32767 * r;
          for (let u = 2, v = C(0), B = C(1); x.length > u; ++u) {
            t.push(v, B, B = C(u));
          }
        }
        N.o = 0;
        N.s = f;
        N.D = f = t.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(M), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(F), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(G), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(t), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [N, p, x, C, S] = JSON.parse(localStorage.spdnt22,);
        e.map((E, r) => E.g = E.h = E.i = r ? 0 | N[r] : 0);
        Ma.map((E, r) => E.i = 0 | p[r]);
        Ea = x;
        d = C;
        oa = S;
      } catch {
      }
      Jb();
      na = l(Ea + Ca);
      zb(b);
    });
    const k = f => D(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.001 - f, 1, 1.001 - f), q = f => U(H(K(), D(0, -f / 2).scale(6, f - 1, 2.2)), H(K(), D(0, -f / 2 - 6).scale(4, f - 3, 4)), H(K(32, 1), D(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), n = ob(11, f => sb(qb(rb(19), k(f), L(1, 1, 0.8, 0.2)).reverse(), qb(rb(19), k(f + 1), L(1, 1, 0.8, 0.2)), 1,)).flat(), y = [...H(K(), D(0, -3).scale(11, 1.4, 3), L(0.9, 0.9, 0.9, 0.2)), ...H(K(), D(0, -2.2).scale(7.7, 0.5, 4), L(0.5, 
    0.5, 0.5, 0.2)), ...U(H(K(6), w.rotate(90).scale(6, 8, 6), L(0.3, 0.6, 0.6, 0.3)), H(K(4, 0, 0.01), D(0, 6).scale(12, 2, 0.75).rotate(0, 45), L(0.3, 0.6, 0.6, 0.3),), H(K(6), w.rotate(90).scale(5, 12, 5), L(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => H(K(5), D(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), L(0.3, 0.6, 0.6, 0.3),)),),], z = U(H(K(), D(0, -0.5, 1).scale(1.15, 1.2, 6.5), L(0.25, 0.25, 0.35, 0.3),), U(H(K(3), D(0, 0, -5.5).scale(3, 2), L(0.6, 0.3, 0.4, 0.3)), H(K(), D(0, 0, -3.65).scale(2.5, 
    3), L(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => H(K(), D(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), L(0.7, 0.2, 0, 0.3),)),);
    O();
    c([Na.slice(1),], D(-2).scale3d(3).rotate(90, 0));
    O();
    Lb(D(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, t) => {
      c(K(), D(0, 0, t ? 22 : -23).scale(3, 1, 8), L(0.9, 0.9, 0.9, 0.2));
      c(K(), D(0, 6.3, f).scale(4, 0.3, 1), L(0.3, 0.3, 0.3, 0.4));
      c(K(), D(0, 1, f).scale(3, 0.2, 0.35), L(0.5, 0.5, 0.5, 0.3));
      ob(5, M => c(n, D(18.5 * (t - 0.5), 0, 4.8 * M - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),));
    });
    c(K(), D(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), L(0.8, 0.8, 0.8, 0.2));
    c(K(), D(3, 1.5, -20).scale(0.5, 2, 5), L(0.7, 0.7, 0.7, 0.2));
    c(K(), D(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), L(0.75, 0.75, 0.75, 0.2),);
    c(K(5), D(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), L(0.6, 0.3, 0.3, 0.4));
    c(U(Zb(H(K(6, 0, 0, 0.3), D(8, -3, -4).scale(13, 1, 13), L(0.7, 0.7, 0.7, 0.2),), U(H(K(6, 0, 0, 0.3), D(0, -0.92).scale(13, 2, 13), L(0.8, 0.8, 0.8, 0.2),), H(K(), w.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), L(0.5, 0.5, 0.5, 0.5),),), H(K(), w.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), L(0.8, 0.2, 0.2, 0.5),), H(K(6), D(0, -8).scale(9, 8, 7), L(0.2, 0.1, 0.4, 0.5)),), H(K(5), w.scale(5, 30, 5), L(0.4, 0.2, 0.6, 0.5)), H(K(5, 0, 1.5), 
    D(0, 1).scale(4.5, 0.3, 4.5), L(0.7, 0.5, 0.9, 0.2),), H(K(6), D(15, -1.5, 4).scale(3.5, 1, 3.5), L(0.5, 0.5, 0.5, 0.5),),),);
    Lb(D(15, -2, 4));
    c(K(), D(-18.65, -3, 55).scale(2.45, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2));
    Lb(D(-55, -1.1, 46).rotate(0, 90));
    c(K(7), D(-57, -2.6, 46).scale(4, 1, 4), L(0.8, 0.8, 0.8, 0.3));
    c(K(6), D(-61.3, -2.4, 49).scale(3, 1, 5), L(0.4, 0.6, 0.6, 0.3));
    c(y, D(-53, 0, 55));
    c(K(), D(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), L(0.7, 0.7, 0.7, 0.2),);
    c(K(3, 0, -0.5), D(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), L(0.8, 0.8, 0.8, 0.2),);
    c(U(Zb(H(K(), D(-100, -2.4, 55).scale(8, 0.9, 8), L(0.8, 0.8, 0.8, 0.2),), H(K(), D(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), L(0.8, 0.8, 0.8, 0.2),), H(K(), D(-100, -2.6, 70).scale(3, 1.1, 7), L(0.8, 0.8, 0.8, 0.2),), H(K(), D(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), L(0.8, 0.8, 0.8, 0.2),), H(K(6), D(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), L(0.6, 0.6, 0.6, 0.3),), H(K(), D(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), L(0.8, 0.8, 0.8, 0.2),), H(K(), D(-100, 0.42, 
    92).scale(3, 1.1, 4.1), L(0.8, 0.8, 0.8, 0.2),),), H(K(8), D(-100, -1, 55).scale(7, 0.9, 7), L(0.3, 0.3, 0.3, 0.4)), H(K(8), D(-100, -2, 55).scale(4, 0.3, 4), L(0.4, 0.4, 0.4, 0.5)), H(K(8, 0, -3.1), D(-100, -3, 55).scale(0.4, 1, 0.4), L(0.4, 0.4, 0.4, 0.5),),),);
    c(U(H(K(), D(-100, 1, 63).scale(7.5, 4), L(0.5, 0.5, 0.5, 0.4)), H(K(), D(-100, 0, 70).scale(2, 2, 10), L(0.5, 0.5, 0.5, 0.4)), H(K(20, 1), D(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), L(0.5, 0.5, 0.5, 0.4),),),);
    Na.map(({x:f, z:t}) => {
      c(K(6), D(3 * f, 3, 15 * t).scale(0.7, 4, 0.7), L(0.6, 0.3, 0.3, 0.4));
      c(K(6), D(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), L(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(M => c(K(6), D(7 * f - 100, M, 7 * t + 55).scale(1.3, 0.5, 1.3), L(0.4, 0.2, 0.2, 0.8),));
      c(K(14, 1), D(9 * f - 38.9, -7.3, 11 * t + 17).scale(1, 4), L(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(M => c(K(17, 1), D(9 * f - 38.9, M - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), L(0.6, 0.6, 0.6, 0.3),));
    });
    ob(7, f => {
      c(K((23 * f + 1) % 5 + 5, 0, 0.5), D(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), L(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(K(), D(-87, -9.5, 24).scale(7, 1, 3), L(0.4, 0.5, 0.6, 0.4));
    c(K(4), D(-86, -9.2, 27).scale(5, 1, 5), L(0.5, 0.6, 0.7, 0.3));
    c(K(12, 1), D(-86, -9, 31).scale(1.5, 1, 1.5), L(0.3, 0.3, 0.4, 0.1));
    Lb(D(-86, -7.5, 31));
    c(U(Zb(H(K(5), D(0, 0, -7).scale(2, 1.2, 2), L(0.2, 0.4, 0.7, 0.3)), H(K(5), w.scale(9, 1.2, 9), L(0, 0.2, 0.3, 0.5)), H(K(), w.scale(11, 1, 13), L(0.3, 0.4, 0.6, 0.3)),), H(K(5), w.scale(5.4, 5, 5.4), L(0, 0.2, 0.3, 0.5)),), D(-38.9, -11.3, 17),);
    Lb(D(-38.9, -9.6, 10));
    c(U(Zb(H(K(6), D(0, 0, -18).scale(15, 1.2, 15), L(0.7, 0.7, 0.7, 0.3),), H(K(), w.scale(4, 1.2, 6), L(0.45, 0.4, 0.6, 0.3)),), ...ob(6, f => ob(6, t => H(K(6), D(4.6 * t - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32).scale(2, 5, 2), L(0.7, 0.7, 0.7, 0.3),),)).flat(),), D(-38.9, -11.3, -1),);
    c(K(5), D(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), L(0.8, 0.1, 0.25, 0.4));
    Lb(D(-84, -0.7, 85).rotate(0, 45));
    ob(3, f => {
      c(q(16), D(12 * f - 109, -9, -12), L(0.6, 0.6, 0.6, 0.3));
      c(q(16), D(-77, -9, -12 * f - 20).rotate(0, 90), L(0.6, 0.6, 0.6, 0.3),);
    });
    c(U(Zb(H(K(), D(26.5, -1.6, 10).scale(20, 2.08, 3)), H(K(), D(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...ob(4, f => H(K(), D(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...ob(3, f => H(K(), D(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), D(-123, 0.2, -12), L(0.5, 0.5, 0.6, 0.2),);
    Lb(D(-116, -1.4, -18).rotate(0, 180));
    c(K(6), D(-116, -2.6, -16.5).scale(3.2, 0.8, 3), L(0.6, 0.5, 0.7, 0.2));
    c(K(), D(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), L(0.8, 0.8, 0.8, 0.2));
    c(K(), D(-115.5, -17, -12).scale(0.5, 15, 2.2), L(0.6, 0.6, 0.6, 0.3));
    c(K(8), D(-114, -17, -2).scale(2, 15, 2), L(0.6, 0.6, 0.6, 0.3));
    c(K(8), D(-79, -17, -2).scale(2, 15, 2), L(1, 1, 1, 0.3));
    c(K(), D(-77, -17, -50.5).scale(2.2, 15, 0.5), L(0.6, 0.6, 0.6, 0.3));
    c(U(H(K(12), D(-77, -14.5, -12).scale(4, 17.5, 4), L(0.7, 0.7, 0.7, 0.2),), H(K(12), D(-77, 3.1, -12).scale(3, 5, 3), L(0.4, 0.5, 0.6, 0.2)), H(K(), D(-79, 0.1, -12).scale(3.5, 2, 1.3), L(0.4, 0.5, 0.6, 0.2),), H(K(), D(-77, 0.1, -14).scale(1.5, 2, 2), L(0.4, 0.5, 0.6, 0.2)),),);
    c(K(), D(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), L(0.6, 0.6, 0.6, 0.3));
    c(K(9), D(-98, -18.4, -40).scale(2.5, 13.5, 2.5), L(0.5, 0.5, 0.5, 0.3));
    c(U(H(K(), D(-93, -5.8, -40).scale(9, 1, 5), L(0.8, 0.8, 0.8, 0.1)), H(K(9), D(-98, -5.8, -40).scale(3, 8, 3), L(0.7, 0.7, 0.7, 0.2)),),);
    Lb(D(-98, -4.4, -40).rotate(0, 90));
    c(U(Zb(H(K(6, 0, 0, 0.6), D(-100, 0.7, 105.5).scale(8, 1, 11), L(0.7, 0.7, 0.7, 0.2),), H(K(), D(-101.5, 0.7, 93.5).scale(10.5, 1, 2), L(0.7, 0.7, 0.7, 0.2),),), H(K(5), D(-100, 0.7, 113).scale(4, 3, 4), L(0.7, 0.7, 0.7, 0.2)),),);
    [-1, 1,].map(f => {
      [7.2, 1.5,].map(t => c(K(15, 1), D(-7.5 * f - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), L(0.5, 0.24, 0.2, 0.4),));
      c(n, D(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      c(K(12, 1), D(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), L(0.6, 0.24, 0.2, 0.5),);
      c(U(H(K(), D(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), L(0.5, 0.5, 0.5, 0.4),), H(K(), w.scale(3, 3, 10), L(0.6, 0.24, 0.2, 0.5)), H(K(28, 1), D(0, 3, -5).scale(3, 4, 10).rotate(90, 0), L(0.6, 0.24, 0.2, 0.5),), H(K(5), D(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), L(0.6, 0.24, 0.2, 0.5),), H(K(5), D(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), L(0.6, 0.24, 0.2, 0.5),),), D(f - 100, 0.7, 97),);
    });
    c(U(H(K(), D(-82.07, 0.8, 106).scale(11, 0.9, 2.2), L(0.7, 0.7, 0.7, 0.1),), H(K(45, 1), D(-81, 0.7, 106).scale3d(7.7), L(0.7, 0.7, 0.7, 0.1),),),);
    c(K(), D(-58, 1, 106).scale(2, 0.65, 2), L(0.7, 0.7, 0.7, 0.2));
    c(K(), D(-50.7, 1, 99).scale(2, 0.65, 1), L(0.7, 0.7, 0.7, 0.2));
    c(K(), D(-42, 0.4, 91).scale(5, 1, 2.5), L(0.7, 0.7, 0.7, 0.3));
    c(K(), D(-34.2, 0.4, 91).scale(3, 1, 3), L(0.7, 0.7, 0.7, 0.3));
    c(K(5), D(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), L(0.2, 0.5, 0.5, 0.6));
    Lb(D(-34, 2.7, 96).rotate(-12, 0));
    [-1, 1,].map(f => c(n, D(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    ob(3, f => c(q(24.7 - 0.7 * (1 & f)), D(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? L(0.5, 0.5, 0.5, 0.3) : L(0.35, 0.35, 0.35, 0.5),),);
    c(U(H(K(6, 0, 0, 0.3), D(0, -0.92, 95).scale(14, 2, 14), L(0.8, 0.8, 0.8, 0.2),), H(K(5), D(0, 0, 95).scale3d(6), L(0.3, 0.3, 0.3, 0.5)),),);
    Lb(D(0, 1.7, 82).rotate(0, 180));
    c(K(5), D(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), L(0.5, 0.3, 0.3, 0.4),);
    c(K(6), D(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), L(0.5, 0.6, 0.7, 0.3));
    c(K(), D(0, 16, 129).scale(1.5, 1, 2), L(0.5, 0.6, 0.7, 0.3));
    c(K(7), D(0, 16.2, 133).scale(5, 1, 5), L(0.4, 0.5, 0.6, 0.4));
    c(U(Zb(H(K(), D(0, 16, 110.5).scale(12, 1, 3), L(0.5, 0.3, 0.3, 0.4)), H(K(), D(0, 16, 111).scale(3, 1, 3.8), L(0.5, 0.3, 0.3, 0.4)),), H(K(5), D(0, 16, 103.5).scale(5.5, 5, 5.5), L(0.5, 0.3, 0.3, 0.4),),),);
    Mb(D(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Mb(D(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...rb(18).map(({x:f, z:t}) => [7 * f, 10 * t, 4.5 - 2 * Ya(f),]),);
    Mb(D(0, 3, 95), ...rb(9).map(({x:f, z:t}) => [9 * f, 9 * t, 4,]),);
    Mb(D(0, 19, 134), [0, 0, 3.5,]);
    Mb(D(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Mb(D(-89, 0.2, 80), [0, 0, 6,]);
    Mb(D(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Mb(D(-115, 0.2, -12), [0, 0, 3.5,]);
    Mb(D(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    ob(2, () => {
      O();
      c(U(H(K(30, 1, 1.15, 1), D(0, -3).scale(3.5, 1, 3.5), L(0.7, 0.4, 0.25, 0.7),), H(K(30, 1, 1.3, 1), D(0, -2.5).scale(2.6, 1, 3), L(0.7, 0.4, 0.25, 0.2),), H(K(), D(4, -1.2).scale3d(2), L(0.7, 0.4, 0.25, 0.3)),),);
      Lb(D(0, -3, 4));
    });
    ob(4, () => {
      O();
      ob(7, f => c(H(K(9, 1), D(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), L(0.3, 0.3, 0.38),),),);
    });
    O();
    c(K(5), D(0, -0.2).scale(5, 1, 5), L(0.6, 0.65, 0.7, 0.3));
    Lb(D(0, 1.2));
    ob(2, () => {
      O();
      Na.map(({x:f, z:t}) => {
        c(K(11, 1), D(4 * f, 4, 4 * t).scale(0.8, 3, 0.8), L(0.5, 0.3, 0.7, 0.6));
        c(K(), D(4 * f, 7, 4 * t).scale(1, 0.3), L(0.5, 0.5, 0.5, 0.3));
      });
      c(U(H(K(), w.scale(5, 1, 5), L(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => H(K(25, 1), D(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), L(0.8, 0.8, 0.8, 0.3),)),),);
      c(K(), D(0, -3).scale(8, 2, 8), L(0.4, 0.4, 0.4, 0.3));
    });
    O();
    c(U(Zb(H(K(), w.scale(1.5, 1, 5), L(0.9, 0.9, 0.9, 0.2)), H(K(6), w.scale(4, 1, 5), L(0.9, 0.9, 0.9, 0.2)), H(K(), D(0, -2).scale(2, 3.2, 1.9), L(0.3, 0.8, 0.5, 0.5)), H(K(16, 1, 0, 4), w.scale(1, 1, 1.5).rotate(0, 90), L(0.9, 0.9, 0.9, 0.2),),), H(K(), w.scale(1.3, 10, 1.3), L(0.2, 0.7, 0.4, 0.6)),),);
    Mb(D(0, 2.8), [0, 0, 4.5,]);
    O();
    c(K(3), D(-23, -1.7, 55.8).scale(5, 0.7, 8.3), L(0.3, 0.6, 0.6, 0.2));
    c(K(8), D(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), L(0.8, 0.8, 0.8, 0.2));
    c(K(), D(-23, -3, 55).scale(5.2, 1.7, 3), L(0.5, 0.5, 0.5, 0.3));
    c(K(), D(-23, -2.2, 62).scale(3, 1, 4), L(0.5, 0.5, 0.5, 0.3));
    Lb(D(-23, -0.5, 66.5));
    O();
    c(K(), D(-22.55, -3, 55).scale(1.45, 1.4, 2.7), L(0.7, 0.7, 0.7, 0.2));
    c(U(H(K(), w.scale(3, 1.4, 2.7)), H(K(), w.scale(1.2, 8, 1.2)),), D(-33, -3, 55), L(0.7, 0.7, 0.7, 0.2),);
    O();
    c(U(H(K(), D(-27, -3, 55).scale(3, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2)), H(K(), D(-27, -3, 55).scale(1, 3), L(0.9, 0.9, 0.9, 0.2)),),);
    c(K(), D(-39, -3, 55).scale(3, 1.4, 2.7), L(0.9, 0.9, 0.9, 0.2));
    O();
    c(K(6), D(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), L(0.7, 0.7, 0.7, 0.4),);
    O();
    c(y);
    O();
    [0, 12, 24,].map(f => c(K(), D(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.2, 0.5, 0.6, 0.2),));
    O();
    [6, 18,].map(f => c(K(), D(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), L(0.1, 0.4, 0.5, 0.2),));
    O();
    c(U(Zb(H(K(5), D(0, 2).scale(5, 7, 5).skewY(8), L(0.2, 0.4, 0.5, 0.5),), H(K(5), D(0, 6).scale(1.1, 7, 1.1).skewY(-8), L(0.25, 0.35, 0.5, 0.5),), H(K(5), D(0, 9).scale(0.6, 7, 0.6).skewY(8), L(0.35, 0.3, 0.5, 0.5),),), H(K(5), w.scale(4, 8, 4), L(0.2, 0.4, 0.5, 0.5)), H(K(5), D(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), L(0.2, 0.4, 0.5, 0.5),),), D(-38.9, -11.3, 17),);
    Mb(D(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({x:f, z:t}) => [3 * f, 3 * t, 1.2,]),);
    O();
    ob(2, f => c(z, D(9 * f - 110 + (1 & f), 1.9, -12)));
    O();
    ob(2, f => c(z, D(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    O();
    ob(3, f => c(z, D(9 * f - 106, 1.9, -12)));
    ob(4, f => {
      O();
      c(K(6), D(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), L(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    O();
    c(U(H(K(10), w.scale(6, 2, 6), L(0.1, 0.6, 0.5, 0.3)), H(K(10), w.scale(3.3, 6, 3.3), L(0.1, 0.6, 0.5, 0.5)),),);
    c(K(15, 1), D(-7.5).rotate(0, 90).scale(3, 2.3, 3), L(0.4, 0.4, 0.4, 0.3));
    c(K(10), D(-7.5).rotate(0, 90).scale(2, 2.5, 2), L(0.3, 0.8, 0.7, 0.3));
    c(K(5), D(-7.5).rotate(0, 90).scale(1, 3), L(0.5, 0.5, 0.5, 0.5));
    Lb(D(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(n, w.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    Mb(D(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    O();
    c(U(H(K(45, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)), H(K(), D(0, 0, -5.5).scale(1.5, 3, 2.7), L(0.45, 0.45, 0.45, 0.2),),),);
    c(K(8), D(0, 2).scale(3, 1.5, 3).rotate(0, 22), L(0.7, 0.7, 0.7, 0.1));
    c(K(5), D(0, 2).scale(1, 2), L(0.3, 0.3, 0.3, 0.2));
    Mb(D(0, 3), ...rb(14).map(({x:f, z:t}) => [5.6 * f, 5.6 * t, 2,]),);
    O();
    [-1, 1,].map(f => c(n, w.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90),));
    c(U(H(K(28, 1), D(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)), H(K(), w.scale(9, 5, 2), L(0.3, 0, 0, 0.3)),),);
    c(H(K(28, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)));
    c(H(K(5), D(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2)));
    O();
    c(U(H(K(28, 1), D(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)), H(K(), D(7).scale(9, 5, 2), L(0.3, 0, 0, 0.3)), H(K(), D(0, 0, 7).scale(2, 5, 9), L(0.3, 0, 0, 0.3)),),);
    c(H(K(28, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)));
    c(H(K(5), D(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2)));
    O();
    c(U(H(K(28, 1), D(0, 2).scale(7.5, 1, 7.5), L(0.35, 0, 0, 0.3)), H(K(), D(7).scale(9, 5, 2), L(0.3, 0, 0, 0.3)), H(K(), D(0, 0, -7).scale(2, 5, 9), L(0.3, 0, 0, 0.3)),),);
    c(H(K(28, 1), w.scale(7.5, 1, 7.5), L(0.45, 0.45, 0.45, 0.2)));
    c(H(K(5), D(0, 1).scale(1, 0.2), L(0.3, 0.3, 0.3, 0.2)));
    [L(0.1, 0.55, 0.45, 0.2), L(0.2, 0.5, 0.5, 0.3), L(0.3, 0.45, 0.55, 0.4),].map((f, t) => {
      O();
      c(K(), D(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && c(K(), D(-29.1, 0.4, 91).scale(2.1, 1, 3), L(0.7, 0.7, 0.7, 0.3));
      1 === t && c(K(), D(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), L(0.6, 0.6, 0.7, 0.3),);
    });
    O();
    c(K(3), D(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), L(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(K(6), D(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), L(0.7, 0.7, 0.7, 0.4),);
      c(K(), D(0, 6.2, f + 95).scale(0.5, 11, 0.5), L(0.5, 0.3, 0.3, 0.4));
    });
    O();
    c(K(5), w.scale(5, 1.1, 5), L(0.5, 0.3, 0.3, 0.4));
    c(K(5), w.scale(5.5, 0.9, 5.5), L(0.25, 0.25, 0.25, 0.4));
    Lb(D(0, 1.5, -1).rotate(0, 180));
    O();
    c(vb(20), D(0, 1).scale3d(0.5), L(1, 0.3, 0.4));
    c(vb(30), w.scale(0.65, 0.8, 0.55), L(1, 0.3, 0.4));
    c(K(), D(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), L(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(n, w.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), L(1, 1, 0.8),);
      c(H(U(K(15, 1), H(K(), D(0, 0, 1).scale(2, 2, 0.5)),), w.rotate(-90, 0).scale(0.1, 0.05, 0.1), L(0.3, 0.3, 0.3),), D(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map(f => {
      O();
      c(K(20, 1), D(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), L(1, 0.3, 0.4));
    });
    O();
    c(K(6).slice(0, -1), w.scale(0.77, 1, 0.77), L(1, 0.3, 0.5));
    O();
    c(vb(30, 24, (f, t, M) => {
      const G = t / 24, F = f * Math.PI * 2 / 30, A = Math.sin(G ** 0.6 * Math.PI / 2);
      f = G * G * Math.sin(f * Math.PI * 14 / 30) / 4;
      return 23 < t ? {x:M.C = 0, y:-0.5, z:0,} : {x:Math.cos(F) * A, y:Math.cos(G * Math.PI) - G - f, z:Math.sin(F) * A + Math.sin(f * Math.PI * 2) / 4,};
    }), w.scale(0.7, 0.7, 0.7), L(1, 1, 1),);
    [-1, 1,].map(f => c(vb(12), D(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    O();
    c(K(6, 1), w.scale(0.12, 1.2, 0.12), L(0.3, 0.3, 0.5, 0.1));
    c(K(10), D(0, 0.8).scale(0.2, 0.3, 0.2), L(1, 0.5, 0.2));
    c(K(3), D(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), L(0.2, 0.2, 0.2, 0.1));
  });
});

