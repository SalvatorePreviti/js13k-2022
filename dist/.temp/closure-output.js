let aa, ca, da, ea, ha, ka, la, ma, na, oa, pa, qa, sa, ta, ua, va, wa, c = 0, xa = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ia = 0, Ja = 0, Ka = 0.1;
const La = Math.PI / 180, Ma = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Na = [], d = [], Ra = [], Sa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ta = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ua = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 180;
const $a = NO_INLINE(a => 0 > a ? -a : a), ab = NO_INLINE((a, b) => a < b ? a : b), bb = NO_INLINE((a, b) => b < a ? a : b), cb = (a, b) => $a(a) > b ? a : 0, e = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, db = a => Math.atan2(Math.sin(a * La), Math.cos(a * La)) / La, eb = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * e(g) || 0, fb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, gb = (a, b) => (a = e(a), fb(a, 1 - a, b)), hb = (a, b, g = 0) => Math.sqrt(a * a + b * b + 
g * g), mb = (a = 0, b = 0, g = 0, k = 1) => {
  ib = h.m11 * a + h.m21 * b + h.m31 * g + h.m41 * k;
  jb = h.m12 * a + h.m22 * b + h.m32 * g + h.m42 * k;
  kb = h.m13 * a + h.m23 * b + h.m33 * g + h.m43 * k;
  lb = h.m14 * a + h.m24 * b + h.m34 * g + h.m44 * k;
};
var ib, jb, kb, lb;
const ob = (a, b = nb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), pb = (a = m, b = h,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), n = NO_INLINE((a, b, g) => m.translate(a, b, g)), y = (a, b) => Array.from(Array(a), (g, k) => b(k)), qb = (a, b, g) => (a.C = g, a.u = b, a), rb = (a, b, g = a.u,) => (pb(b), qb(a.map(({x:k, y:q, z:l}) => (mb(k, q, l), {x:ib, y:jb, z:kb,})), g, a.C,)), D = (a, b, g) => a.map(k => rb(k, b, g)), sb = (a, b = 0) => y(a, g => {
  const k = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > $a(k) ? k : 0 > k ? k - b : k + b,};
}), tb = (a, b, g) => a.map((k, q, {length:l}) => qb([k, b[l - q - 1], b[l - (q + 1) % l - 1], a[(q + 1) % l],], a.u, g,)), E = (a, b, g = 0, k,) => (a = a ? sb(a, k) : Sa, k = rb(a, n(0, 1).scale3d(0 < g ? g : 1)), a = rb(a, n(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...tb(a, k, b), k, a,]), wb = (a, b = a, g = (k, q) => (q *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(k) * Math.sin(q),})) => {
  const k = [];
  for (let q = 0; a > q; q++) {
    for (let l = 0; b > l; l++) {
      const w = qb([], 0, 1);
      k.push(w);
      w.push(g(q, l, w));
      l && w.push(g((q + 1) % a, l, w));
      b - 1 > l && w.push(g((q + 1) % a, l + 1 % b, w));
      w.push(g(q, l + 1 % b, w));
    }
  }
  return k;
}, xb = NO_INLINE(a => 1 - Math.exp(-Aa * a)), yb = NO_INLINE((a, b, g) => fb(a, b, xb(g))), zb = (a, b, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Ab = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Bb = a => Math.sin(a * Math.PI * 2), Cb = a => 0.5 > a % 1 ? 1 : -1, Db = a => a % 1 * 2 - 1, Gb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Hb = a => {
  let b = 0;
  const g = () => {
    let l = 0;
    const w = N => {
      let G, W, Ha, ia = 0, ja = 0;
      const ba = [], ra = new Int32Array(768 * N), ec = 2 ** (v - 9) / N, fc = Math.PI * 2 ** (u - 8) / N, Eb = C * N & -2;
      for (let ub = 0; 11 >= ub; ++ub) {
        for (let vb = 0, Pb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ub]; 32 > vb; ++vb) {
          const Qb = (32 * ub + vb) * N;
          for (var Oa = 0; 4 > Oa; ++Oa) {
            if (G = 0, Pb && (G = x[Pb - 1].charCodeAt(vb + 32 * Oa) - 40, G += 0 < G ? 106 : 0), G) {
              var fa;
              if (!(fa = ba[G])) {
                fa = G;
                let X = void 0, ya = void 0;
                var Rb = G;
                let gc = 0, hc = 0;
                const ic = 2 > b ? Db : Bb, jc = 2 > b ? 1 > b ? Cb : Gb : Bb, Sb = new Int32Array(H + Q + S);
                for (let Pa = 0, Fb = 0; H + Q + S > Pa; ++Pa, ++Fb) {
                  let Qa = 1;
                  H > Pa ? Qa = Pa / H : H + Q > Pa || (Qa = (1 - (Qa = (Pa - H - Q) / S)) * 3 ** (-p / 16 * Qa));
                  0 > Fb || (Fb -= 4 * N, ya = 0.00396 * 2 ** ((Rb + r - 256) / 12), X = 0.00396 * 2 ** ((Rb + R - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Sb[Pa] = 80 * (ic(gc += ya * Qa ** (B / 32)) * f + jc(hc += X * Qa ** (F / 32)) * L + (T ? (2 * Math.random() - 1) * T : 0)) * Qa | 0;
                }
                fa = ba[fa] = Sb;
              }
              for (let X = 0, ya = 2 * Qb; fa.length > X; ++X, ya += 2) {
                ra[ya] += fa[X];
              }
            }
          }
          for (let X, ya = 0; N > ya; ++ya) {
            Oa = 0;
            fa = 2 * (Qb + ya);
            var za = (((X = ra[fa]) || Ha) && (W = 0.00308 * z, 1 !== b && 4 !== b || (W *= Math.sin(ec * fa * Math.PI * 2) * I / 512 + 0.5), W = 1.5 * Math.sin(W), ia += W * ja, za = (1 - U / 255) * (X - ja) - ia, ja += W * za, X = 4 === b ? ja : 3 === b ? za : ia, b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5), X *= O / 32, Ha = 1e-5 < X * X, za = Math.sin(fc * fa) * t / 512 + 0.5, Oa = X * (1 - za), X *= za), fa < Eb || (Oa += ra[1 + fa - Eb] * A / 255, 
            X += ra[fa - Eb] * A / 255), l + fa >> 1);
            k[za] += (ra[fa] = Oa) / 65536;
            q[za] += (ra[++fa] = X) / 65536;
          }
        }
      }
      l += 768 * N;
    }, x = Ta[b], [f, r, B, L, R, F, T, H, Q, P, p, v, z, U, O, t, u, A, C, I] = Ua[b], S = 4 * P ** 2;
    w(5513);
    w(4562);
    w(3891);
    Ab(5 > ++b ? g : a);
  }, k = (da = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), q = da.getChannelData(1);
  Ab(g);
}, Ib = () => {
  let a, b, g, k, q, l, w, x, f, r, B, L, R, F, T, H, Q = !0;
  const P = [], p = () => {
    b4.innerHTML = "Music: " + Q;
    H && (ca || !Q ? H.disconnect() : H.connect(T.destination));
  }, v = () => {
    const t = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = [zb(0.3, 55, t, 1.732051), zb(55, 181, t, 1.732051),];
    ka = zb(0.3, 181, t, 1.732051);
    k = x = void 0;
    P.length = ea = F = L = R = Ba = Ca = 0;
  }, z = t => {
    if (ca !== t) {
      if (ca = t, v(), document.body.className = t ? "l m" : "l", t) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      p();
    }
  }, U = t => {
    try {
      T || (T = new AudioContext(), (H = T.createBufferSource()).buffer = da, H.loop = !0, H.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    z(!1);
    ha = t;
  }, O = (t, u) => t.buttons[u]?.pressed || 0 < t.buttons[u]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    U();
  };
  b2.onclick = () => {
    U(1);
  };
  b5.onclick = () => z(!0);
  b4.onclick = () => {
    Q = !Q;
    p();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
  };
  onclick = t => {
    if (!ca && (t.target === hC && (ea = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = t => {
    let u;
    t.repeat || (u = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[t.code], (P[u] = !!t.type[5] && !0) && (0 === u && (ea = 1), 1 === u && z(!0)));
  };
  onmousemove = ({movementX:t, movementY:u}) => {
    ha && (t || u) && (Za += 0.1 * t, Ya += 0.1 * u);
  };
  hC.ontouchstart = t => {
    if (!ca) {
      for (let {pageX:u, pageY:A, identifier:C} of t.changedTouches) {
        ha && u > hC.clientWidth / 2 ? void 0 === x && (f = 0, l = u, w = A, x = C, B = Ya, r = Za) : void 0 === k && (q = 0, b = u, g = A, k = C);
      }
      a = xa;
    }
  };
  hC.ontouchmove = t => {
    if (!ca) {
      for (let {pageX:S, pageY:N, identifier:G} of t.changedTouches) {
        var u, A, C, I;
        x === G && (Ya = B + (N - w) / 2.3, Za = r + (S - l) / 2.3, f = 1);
        k === G && (G = (b - S) / 20, u = $a(G), A = (g - N) / 20, C = $a(A), (I = 0.5 < bb(u, C)) && (q = 1), L = (I && 0.3 < u) * e(G, -1), R = (I && 0.3 < C) * e(A, -1), 2 < u && (b = 20 * (0 > G ? -1 : 1) + S), 2 < C && (g = 20 * (0 > A ? -1 : 1) + N));
      }
    }
  };
  hC.ontouchend = t => {
    let u;
    document.activeElement === document.body && t.preventDefault();
    for (const A of t.changedTouches) {
      A.identifier === x ? (x = void 0, f || (u = 1), f = 0) : A.identifier === k ? (k = void 0, R = L = 0, q || (u = 1), q = 0) : u = 1;
    }
    t.target === hC && u && a && 0.02 < (t = xa - a) && 0.7 > t && (ea = 1);
  };
  ma = () => {
    Ba = R + (P[4] ? 1 : 0) - (P[5] ? 1 : 0);
    Ca = L + (P[2] ? 1 : 0) - (P[3] ? 1 : 0);
    let t = navigator.getGamepads()[0];
    t && (ha && (Ya += Aa * cb(t.axes[3], 0.3) * 80, Za += Aa * cb(t.axes[2], 0.3) * 80), Ba += O(t, 12) - O(t, 13) - cb(t.axes[1], 0.2), Ca += O(t, 14) - O(t, 15) - cb(t.axes[0], 0.2), O(t, 9) && z(!0), (t = O(t, 3) || O(t, 2) || O(t, 1) || O(t, 0)) && !F && (ea = 1), F = t);
  };
  document.onvisibilitychange = onblur = onresize = v;
  z(!0);
}, Jb = (a, b) => {
  1 / 0 > Ka && (Ka = c + b, h4.innerHTML = a);
}, Kb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Da = Na.reduce((a, b) => a + b.i, 0)] + " / XIII";
}, Lb = () => {
  localStorage.spdnt22 = JSON.stringify([d.map(a => a.i), Na.map(a => a.i), Fa, c, oa,]);
}, J = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), K = (a, b = new DOMMatrix(), g) => pa.o.push(...D(a, b, g)), M = a => {
  const b = pa;
  Ra.push(pa = {m:new DOMMatrix(), o:[],},);
  a();
  pa = b;
}, Mb = a => {
  const b = pa, g = d.length, k = {i:0, g:0, h:0, m:b.m, G:a, F() {
    k.g = yb(k.g, k.i, 4);
    k.h = yb(k.h, k.i, 1);
    pb(b.m).multiplySelf(a);
    ea && 3 > (mb(), hb(Va - ib, Wa - jb, Xa - kb,)) ? k.i ? 0.7 < k.g && (k.i = 0, (Fa = g) && Jb("* click *", 1), Lb()) : 0.3 > k.g && (k.i = 1, (Fa = g) && Jb("* click *", 1), Lb()) : k.i && 0.8 < k.g && !g && (k.i = 0, 13 > Da ? Jb("Not leaving now, there are souls to catch!", 3) : Ea || (Jb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ea = 1));
    h.rotateSelf(50 * k.g - 25, 0).translateSelf(0, 1).m44 = 1 - k.g;
  },};
  d.push(k);
  K(E(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), J(0.4, 0.5, 0.5));
  K(E(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), J(0.4, 0.5, 0.5));
  K(E(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), J(0.5, 0.5, 0.4));
}, Nb = (a, ...b) => {
  let g, k, q, l, w = 0, x = 0, f = 1, r = -1;
  const B = {i:0, F() {
    if (!B.i) {
      let p, v, z, U, O, t = 1, u = 1 / 0;
      for (let A = 0; b.length > A; A++) {
        const C = b[A];
        let I = hb(R - C[0], F - C[1]);
        t = ab(t, I / C[2]);
        0 > (I -= C[2]) ? O = 1 : u > I && (u = I, L = C);
      }
      O || (p = R - L[0], v = F - L[1], z = hb(p, v), U = Math.atan2(-v, p), f && (l = e(l / (1 + Math.random())), x = (Math.random() - 0.5) * Math.PI / 2), U += x, r = -Math.cos(U), w = Math.sin(U), 0.1 < z && (z = ab(z, L[2]) / z, R = p * z + L[0], F = v * z + L[1]));
      f = O;
      l = yb(l, 3 + 6 * (1 - t), 3 + t);
      T = yb(T, R = yb(R, R + r, l), l);
      H = yb(H, F = yb(F, F + w, l), l);
      g = eb(g, Math.atan2(T - k, H - q) / La - 180, xb(3),);
      pb(Q).multiplySelf(a).translateSelf(k = T, 0, q = H).rotateSelf(0, g, 7 * Math.sin(1.7 * c));
      1.6 > (mb(), hb(Va - ib, Wa - jb, Xa - kb,)) && (B.i = 1, Jb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Da] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Kb(), Lb());
    }
    B.i && pb(Ra[2].m).translateSelf(P % 4 * 1.2 - 1.7 + Math.sin(c + P) / 7, -2, 1.7 * (P / 4 | 0) - 5.5 + $a(P % 4 - 2) + Math.cos(c / 1.5 + P) / 6,);
  },};
  let L = b[0], [R, F] = L, [T, H] = L;
  const Q = pa.m, P = Na.length;
  Na.push(B);
}, Ob = ({x:a, y:b, z:g}, k) => a * k.x + b * k.y + g * k.z, Tb = a => {
  let b, g = 0, k = 0, q = 0, l = a.at(-1);
  for (b of a) {
    g += (l.y - b.y) * (l.z + b.z), k += (l.z - b.z) * (l.x + b.x), q += (l.x - b.x) * (l.y + b.y), l = b;
  }
  return b = hb(g, k, q), g /= b, k /= b, q /= b, {x:g, y:k, z:q, w:g * l.x + k * l.y + q * l.z,};
}, Ub = (a, b) => {
  var g, k, q, l = b.B;
  for (var w = 0; l.length > w; ++w) {
    if (-0.00008 > (g = Ob(a, l[w]) - a.w) ? q = b : 8e-5 < g && (k = b), q && k) {
      k = [];
      q = [];
      l = b.B;
      w = b.v;
      let x = l.at(-1), f = Ob(a, x) - a.w;
      for (const r of l) {
        g = Ob(a, r) - a.w, 8e-5 > f && q.push(x), -0.00008 < f && k.push(x), (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g) && (f /= g - f, x = {x:x.x + (x.x - r.x) * f, y:x.y + (x.y - r.y) * f, z:x.z + (x.z - r.z) * f,}, k.push(x), q.push(x)), x = r, f = g;
      }
      return {l:2 < k.length && {B:qb(k, l.u, l.C), v:w, A:b,}, j:2 < q.length && {B:qb(q, l.u, l.C), v:w, A:b,},};
    }
  }
  return {l:k, j:q,};
}, Vb = (a, b, g = Tb(b.B)) => {
  let k, q;
  return a ? ({l:k, j:q} = Ub(a, b), k || q || a.o.push(b), k && (a.l = Vb(a.l, k, g)), q && (a.j = Vb(a.j, q, g))) : a = {x:g.x, y:g.y, z:g.z, w:g.w, o:[b,], l:0, j:0,}, a;
}, Wb = (a, b, g) => {
  const k = [], q = (l, w) => {
    let {l:x, j:f} = Ub(l, w);
    x || f || (0 < g * Ob(l, b) ? x = w : f = w);
    x && (l.l ? q(l.l, x) : k.push(x));
    f && l.j && q(l.j, f);
  };
  for (const l of b.o) {
    q(a, l);
  }
  return k;
}, Xb = (a, b) => a && (b(a), Xb(a.l, b), Xb(a.j, b)), Yb = a => (Xb(a, b => {
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
}), a), Zb = a => a.length ? a.reduce((b, g) => Vb(b, {B:g, v:0, A:0,}), 0) : a, $b = (...a) => a.reduce((b, g) => {
  const k = [];
  if (b = Zb(b), g) {
    g = Zb(g);
    Xb(b, q => q.o = Wb(g, q, 1));
    Xb(g, q => k.push([q, Wb(b, q, -1),]));
    for (let [q, l] of k) {
      for (const w of l) {
        Vb(b, w, q);
      }
    }
  }
  return b;
}), V = (a, ...b) => {
  const g = l => {
    let w;
    return l.A && ((w = k.get(l.A)) ? (q.delete(w), l = g(l.A)) : k.set(l.A, l)), l;
  }, k = new Map(), q = new Map();
  return a = Yb($b(Yb(Zb(a)), ...b)), Xb(a, l => {
    for (const w of l.o) {
      q.set(g(w), w.v);
    }
  }), Array.from(q, ([{B:l}, w]) => {
    const x = l.map(({x:f, y:r, z:B}) => ({x:f, y:r, z:B,}));
    return qb(w ? x.reverse() : x, l.u, l.C);
  });
}, Y = () => pb(m, Ra[++qa].m), bc = () => {
  let a, b, g, k, q, l, w, x, f, r, B, L, R, F = 0, T = 0, H = 0, Q = 0, P = 1, p = 2, v = 15;
  const z = () => pb((p ? d[Fa] : Ra[28 !== F ? F : 0]).m,), U = u => {
    1 < p ? (pb(d[Fa].m).multiplySelf(d[Fa].G), mb(0, 0.9 < Fa + na ? 15 : 1, -2.4)) : (z(), mb(T, H, Q));
    u && (q = (ib - Va) / Aa, l = (kb - Xa) / Aa);
    Va = ib;
    Wa = jb;
    Xa = kb;
  }, O = () => {
    var u = 0, A = 0, C = 0, I = 0, S = 0, N = 0, G = -1;
    for (var W = 0; 36 > W; ++W) {
      var Ha = 512 * W;
      for (var ia = 96; 416 > ia; ia += 4) {
        for (var ja = 0; 2 > ja; ++ja) {
          var ba = ac[Ha + ia + ja];
          const ra = ac[Ha + ia + ja + 2];
          ba > I && (I = ba);
          ba + ra && (0 > G || G === W) && (G = W, ra === r ? ++u : A && A !== ra || (A = ra, ++C));
        }
      }
    }
    r = 0 > G ? 0 : C > 2 * u ? A : r;
    for (u = 36; 128 > u; ++u) {
      W = G = C = A = 0;
      Ha = 512 * u;
      for (ia = 0; 128 > ia; ++ia) {
        ja = Ha + 4 * ia, ba = ac[ja], 64 > ia ? ba > A && (A = ba) : ba > C && (C = ba), (ba = ac[2 + ja]) > G && (G = ba), ba = ac[1 + ja], 64 < ia ? ba > A && (A = ba) : ba > C && (C = ba), (ba = ac[3 + ja]) > W && (W = ba);
      }
      (C -= A) * C > S * S && (S = C);
      (W -= G) * W > N * N && (N = W);
    }
    S *= 0.7;
    x = e(1 - 0.01 * bb($a(S), $a(N)), 0.3);
    S /= 255;
    I /= 255;
    N /= 255;
    z().invertSelf();
    mb(S, I, N, 0);
    T += ib;
    H += I;
    Q += kb;
    U();
  }, t = (u, A, C, I) => fb(u, A, P || (e($a(A - u) ** 0.5 - C) + 1 / 7) * xb(1.5 * I));
  sa = () => {
    U(r);
    Z.r9r(0, 0, 128, 128, 6408, 5121, ac);
    NO_INLINE(O)();
    !p && r === F || (F = r, z().invertSelf(), mb(Va, Wa, Xa), T = ib, H = jb, Q = kb, p = p && (r ? 0 : 1));
    (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (p = 2);
    1 === r && (d[1].i = -15 > Va && 0 > Xa ? 1 : 0);
    f = fb(yb(f, Wa, 2), Wa, p || 8 * $a(f - Wa),);
    B = t(B, Va, 0.5, 1);
    L = t(L, f, 2, 1);
    R = t(R, Xa, 0.5, 1);
    k = yb(k, ta * (27 < r && 32 > r), 2,);
    ha ? (u = p + xb(18), Ga = fb(Ga, Va, u), Ja = fb(Ja, Xa, u), Ia = fb(Ia, 1.6 + f, u), Za = db(Za)) : (Ga = t(Ga, B, 1, 2 + k,), Ja = t(Ja, R + -18 + 5 * k, 1, 2 + k,), Ia = t(Ia, bb(L + e((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), u = ab(-6, -$a(R - Ja)), A = B - Ga, Za = eb(Za, 90 - db(Math.atan2(u, A) / La), P + xb(10),), Ya = eb(Ya, 90 - Math.atan2(hb(u, A), Ia - L) / La, P + xb(10),));
    Ya = e(Ya, -87, 87);
    P = 0;
    var u = e(Ba, -1), A = e(Ca, -1), C = cb(hb(u, A) ** 0.5, 0.1);
    let I = Math.atan2(u, A);
    C && (a = 90 - I / La);
    b = eb(b, a, xb(8));
    g = yb(g, C, 10);
    Y().translateSelf(Va, 0.06 * x * g * Math.cos(18.2 * c) + f, Xa,).rotateSelf(0, b);
    for (var S = 0; 2 > S; ++S) {
      const N = 9.1 * c - Math.PI * S;
      pb(Ra[37].m, Y()).translateSelf(0, g * e(0.45 * Math.sin(N - Math.PI / 2)),).rotateSelf(g * Math.sin(N) * 0.25 / La, 0);
    }
    v = r ? 5 : yb(v, p ? 13 : 19 - 2 * ab(0, Wa + 10), 2.2);
    q = r || p ? 0 : yb(q, 0, 3);
    l = r || p ? 0 : yb(l, 0, 3);
    u = (w = p ? 0 : yb(w, r ? 7 * e(2 * C) * x : 0, r ? 9 : 1,)) * C * $a(u) * Math.sin(I);
    A = w * C * $a(A) * Math.cos(I);
    I = ha ? (180 + Za) * La : 0;
    C = Aa * (q + (A * Math.cos(I) - Math.sin(I) * u));
    S = Aa * -v;
    u = Aa * (l + (A * Math.sin(I) + Math.cos(I) * u));
    z().invertSelf();
    mb(C, S, u, 0);
    T += ib;
    H += S;
    Q += kb;
    U();
  };
}, kc = (a, b, g) => {
  ca ? 1100 < hC.width && (pb().rotateSelf(0, 40 * Math.sin(xa) - 80, -8), ob(h, cc, 35), ob(h, cc, 36), ob(h, cc, 37), Z.uae(a, !1, cc), Z.d97(4, Ra[39].D - Ra[37].s, 5123, 2 * Ra[37].s)) : (Z.uae(a, !1, dc), Z.das(4, Ra[g].D - Ra[g].s, 5123, 2 * Ra[g].s, Na.length,), Z.das(4, Ra[42].D - Ra[42].s, 5123, 2 * Ra[42].s, d.length,), Z.uae(a, !1, cc), Z.d97(4, (b ? Ra[39].D : Ra[37].s) - 3, 5123, 6));
}, lc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), mc = (a, b) => {
  const g = {}, k = Z.c1h();
  return Z.abz(k, a), Z.abz(k, lc(b, 35632)), Z.l8l(k), q => q ? g[q] || (g[q] = Z.gan(k, q)) : Z.u7y(k);
}, h = new DOMMatrix(), m = new DOMMatrix(), nb = new Float32Array(16), dc = new Float32Array(464), cc = new Float32Array(608), ac = new Uint8Array(65536), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Ab(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], l = p => {
        requestAnimationFrame(l);
        var v = (p - (aa || p)) / 1e3;
        if (xa += v, c += Aa = ca ? 0 : ab(0.055, v), aa = p, 0 < Aa) {
          ma();
          Ka && c > Ka && (Ka = 0, h4.innerHTML = "");
          Ea && (ha = 0);
          na = Ea ? yb(na, -9, 0.015) : yb(na, e(c / 3), 1);
          oa = yb(oa, d[0].h, 0.2 + 0.3 * $a(2 * d[0].h - 1),);
          v = (U, O, t, u) => U.translateSelf(O + Math.sin(c + 2) / 5, t + Math.sin(0.8 * c) / 3, u).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
          qa = 1;
          ta = gb(d[12].g, d[13].g);
          wa = fb(yb(wa, 0, 1), db(wa + 60 * Aa), d[5].g - d[6].h,);
          ua = fb(yb(ua, 0, 5), db(ua + 56 * Aa), ta,);
          va = fb(yb(va, 0, 4), db(va + 48 * Aa), ta,);
          v(Y(), -12, 4.2, 40 * na - 66);
          v(Y(), -123, 1.4, 55 - 65 * oa);
          Y().translateSelf(0, 0, -15).scaleSelf(1, e(1.22 - d[2].g), 1);
          Y().translateSelf(0, 0, 15).scaleSelf(1, e(1.22 - d[3].g), 1);
          Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, e(1.1 - d[6].g), 1);
          Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
          Y().translateSelf(0, 270 * (d[4].g - 1) + (2 + 5 * Math.cos(1.5 * c)) * (1 - d[3].g),);
          p = ab(1 - d[5].h, d[3].h);
          Y().translateSelf(p * Math.sin(0.6 * c + 1.2) * 12, 0, 35);
          Y().translateSelf(p * Math.sin(0.6 * c - 1.2) * 8.2, 0, 55);
          Y().translateSelf(p * Math.sin(0.6 * c) * 12, 0, 45);
          Y().translateSelf(9.8 * (1 - p));
          p = e(1 - 5 * p) * gb(d[3].g, d[5].g);
          Y().translateSelf(0, p * Math.sin(1.35 * c) * 4);
          Y().translateSelf(0, 0, p * Math.sin(0.9 * c) * 8);
          Y().translateSelf(0, -6.5 * d[5].h);
          Y().translateSelf(-75, 3 * (1 - d[6].h) * (1 - d[7].g), 55).rotateSelf(180 * (1 - d[6].h) + wa, 0);
          p = gb(d[8].h, d[7].h);
          Y().translateSelf(0, p * Math.sin(c) * 5 + 3.5 * (1 - bb(d[7].g, d[8].g)),);
          Y().translateSelf(0, p * Math.sin(c + 3) * 6, p * Math.sin(0.6 * c + 1) * 6,);
          Y().translateSelf(0, -7.3 * d[8].h);
          p = gb(d[10].g, d[11].g);
          Y().translateSelf(0, -2, 10 - 8.5 * p * $a(Math.sin(1.1 * c)));
          Y().translateSelf(0, -2, 10 - 8.5 * p * $a(Math.sin(2.1 * c)));
          Y().translateSelf(0, -2, 10 - 8.5 * bb(p * $a(Math.sin(1.5 * c)), (1 - d[10].g) * (1 - p)),);
          p = gb(d[9].h, d[12].h);
          for (v = 0; 4 > v; v++) {
            Y().translateSelf((2 < v ? 2 * (1 - p) + p : 0) - 100, p * Math.sin(1.3 * c + 1.7 * v) * (3 + v / 3) + 0.7, 115 - 7 * (1 - d[9].h) * (1 - d[12].h) * (1 & v ? -1 : 1) + bb(0.05, p) * Math.cos(1.3 * c + 7 * v) * (4 - 2 * (1 - v / 3)),);
          }
          Y().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - d[9].g) - p * Math.sin(0.8 * c) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 + 3 * p), 0);
          Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + ua);
          Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, va);
          Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - va);
          Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + va);
          p = gb(d[13].h, d[14].h);
          for (v = 0; 3 > v; ++v) {
            Y().translateSelf(0, p * Math.sin(1.5 * c + 1.5 * v) * 4 + (v ? 0 : 3 * (1 - d[13].h) * (1 - d[14].h)),);
          }
          Y().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          p = gb(gb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2,);
          Y().translateSelf(0, 16 * p, 95 + 8.5 * e(2 * p - 1));
          for (p = 0; 13 > p; ++p) {
            Na[p].F(), ob(h, dc, p);
          }
          for (p = 0; 16 > p; ++p) {
            d[p].F(), ob(h, dc, 13 + p);
          }
          sa();
          for (p = 2; qa >= p; ++p) {
            ob(Ra[p].m, cc, p - 2);
          }
          R();
          Z.b6o(36160, P);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          Z.uae(R("b"), !1, ob(pb().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa,),),);
          kc(R("c"), 0, 40);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(R("b"), !1, ob(pb().translateSelf(-Va, -Wa, -Xa - 0.3,),),);
          kc(R("c"), 0, 40);
          ea = 0;
        }
        p = Ga;
        v = Ia;
        let z = Ja;
        ca ? (pb(ka).invertSelf(), mb(3.6, 3.5), p = ib, v = jb, z = 5, pb(m, x).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -v, -z,).rotateSelf(0, 99)) : pb(m, x).rotateSelf(-Ya, -Za).invertSelf().translateSelf(-p, -v, -z);
        B();
        Z.b6o(36160, H);
        Z.v5y(0, 0, 2048, 2048);
        T[0](54.7 * 1.1);
        T[1](126 * 1.1);
        F();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(F("a"), !1, ob(ka));
        Z.uae(F("b"), !1, ob(x));
        Z.uae(F("i"), !1, q[0]);
        Z.uae(F("j"), !1, q[1]);
        Z.ubu(F("k"), p, v, z);
        kc(F("c"), !ha, 41);
        L();
        Z.ubu(L("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, xa);
        Z.ubu(L("k"), p, v, z);
        Z.uae(L("b"), !1, ob(pb(x).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, P);
        Z.f1s();
      }, w = new DOMMatrix(), x = new DOMMatrix(), f = g, r = y(8, () => ({}));
      var k = lc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[38];void main(){mat4 i=f.w==1.?mat4(1):c[abs(int(f.w))+gl_InstanceID-2];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const B = mc(lc("#version 300 es\nin vec4 f;uniform mat4 b,c[38];void main(){mat4 i=f.w==1.?mat4(1):c[abs(int(f.w))+gl_InstanceID-2];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), L = mc(lc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), R = mc(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), F = mc(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), T = y(2, p => {
        const v = Z.c25();
        return Z.a4v(33984 + p), Z.b9j(3553, v), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), z => {
          let U = 0, O = 0, t = 0, u = 1 / 0, A = 1 / 0, C = 1 / 0, I = -1 / 0, S = -1 / 0, N = -1 / 0;
          Z.fas(36160, 36096, 3553, v, 0);
          Z.c4s(256);
          pb().scale3dSelf(z).multiplySelf(pb(la[p], w).multiplySelf(x).invertSelf(),);
          for (let G = 0; 8 > G; ++G) {
            const W = r[G];
            mb(4 & G ? 1 : -1, 2 & G ? 1 : -1, 1 & G ? 1 : -1);
            U -= W.x = (0 | ib) / (z * lb);
            O -= W.y = (0 | jb) / (z * lb);
            t -= W.z = (0 | kb) / (z * lb);
          }
          pb().rotateSelf(298, 139).translateSelf(U / 8, O / 8, t / 8);
          for (z = 0; 8 > z; ++z) {
            const {x:G, y:W, z:Ha} = r[z];
            mb(G, W, Ha);
            u = ab(u, ib);
            I = bb(I, ib);
            A = ab(A, jb);
            S = bb(S, jb);
            C = ab(C, kb);
            N = bb(N, kb);
          }
          z = 10 + p;
          C *= 0 > C ? z : 1 / z;
          N *= 0 < N ? z : 1 / z;
          Z.uae(B("b"), !1, ob(pb(m, w).scaleSelf(2 / (I - u), 2 / (S - A), 2 / (C - N),).translateSelf((I + u) / -2, (S + A) / -2, (C + N) / 2).multiplySelf(h), q[p],),);
          kc(B("c"), !ha, 41);
        };
      }), H = Z.c5w();
      k = Z.c25();
      const Q = Z.c3z(), P = Z.c5w();
      R();
      Z.uae(R("a"), !1, ob(zb(1e-4, 2, 1.2, 0.4)));
      F();
      Z.ubh(F("q"), 2);
      Z.ubh(F("h"), 1);
      Z.ubh(F("g"), 0);
      L();
      Z.ubh(L("q"), 2);
      Z.b6o(36160, H);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, P);
      Z.bb1(36161, Q);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, Q);
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
      NO_INLINE(Ib)();
      NO_INLINE(bc)();
      requestAnimationFrame(l);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = Ma;
  NO_INLINE(Hb)(() => {
    Ab(() => {
      let l = 0;
      const w = [], x = [], f = [], r = [], B = new Int32Array(8), L = new Map(), R = new Int32Array(B.buffer, 0, 5), F = new Float32Array(B.buffer);
      Ra.map((T, H) => {
        let Q;
        const P = p => {
          let {x:v, y:z, z:U} = Q[p], O = (F[0] = v, F[1] = z, F[2] = U, p = "" + (Q.C ? R : B), L.get(p));
          return void 0 !== O ? (v = 3 * O, r[v] = (r[v++] + B[5]) / 2, r[v] = (r[v++] + B[6]) / 2, r[v] = (r[v] + B[7]) / 2) : (L.set(p, O = L.size), x.push(v, z, U, F[3]), f.push(B[4]), r.push(B[5], B[6], B[7])), O;
        };
        for (Q of (F[3] = 41 === H || 40 === H ? -2 : 42 === H ? -15 : H, T.o)) {
          const {x:p, y:v, z} = Tb(Q);
          B[4] = 0 | Q.u;
          B[5] = 32767 * p;
          B[6] = 32767 * v;
          B[7] = 32767 * z;
          for (let U = 2, O = P(0), t = P(1); Q.length > U; ++U) {
            w.push(O, t, t = P(U));
          }
        }
        T.o = 0;
        T.s = l;
        T.D = l = w.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(x), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(r), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(f), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [T, H, Q, P, p] = JSON.parse(localStorage.spdnt22,);
        d.map((v, z) => v.g = v.h = v.i = z ? 0 | T[z] : 0);
        Na.map((v, z) => v.i = 0 | H[z]);
        Fa = Q;
        c = P;
        oa = p;
      } catch {
      }
      Kb();
      na = e(Fa + Da);
      Ab(b);
    });
    const k = l => n(Math.sin((l /= 11) * Math.PI), l).rotateSelf(10 * l).scaleSelf(1.001 - l, 1, 1.001 - l), q = y(11, l => tb(rb(sb(19), k(l), J(1, 1, 0.8, 0.2)).reverse(), rb(sb(19), k(l + 1), J(1, 1, 0.8, 0.2)), 1,)).flat();
    M(() => K([Sa.slice(1),], n(-2).scale3d(3).rotate(90, 0)));
    M(() => {
      const l = f => V(D(E(), n(0, -f / 2).scale(6, f - 1, 2.2)), D(E(), n(0, -f / 2 - 6).scale(4, f - 3, 4)), D(E(32, 1), n(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), w = (y(2, () => M(() => {
        K(V(D(E(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), J(0.7, 0.4, 0.25, 0.7),), D(E(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), J(0.7, 0.4, 0.25, 0.2),), D(E(), n(4, -1.2).scale3d(2), J(0.7, 0.4, 0.25, 0.3)),),);
        Mb(n(0, -3, 4));
      })), Mb(n(-5.4, 1.5, -19).rotate(0, -90)), Nb(n(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Nb(n(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...sb(18).map(({x:f, z:r}) => [7 * f, 10 * r, 4.5 - 2 * $a(f),]),), y(4, () => M(() => y(7, f => K(D(E(9, 1), n(4 * (f / 6 - 0.5), 3).scale(0.2, 3, 0.2), J(0.3, 0.3, 0.38),),)))), [-15, 15,].map((f, r) => {
        K(E(), n(0, 0, r ? 22 : -23).scale(3, 1, 8), J(0.9, 0.9, 0.9, 0.2));
        K(E(), n(0, 6.3, f).scale(4, 0.3, 1), J(0.3, 0.3, 0.3, 0.4));
        K(E(), n(0, 1, f).scale(3, 0.2, 0.35), J(0.5, 0.5, 0.5, 0.3));
        y(5, B => K(q, n(18.5 * (r - 0.5), 0, 4.8 * B - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2),),);
      }), K(E(), n(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), J(0.8, 0.8, 0.8, 0.2)), K(E(), n(3, 1.5, -20).scale(0.5, 2, 5), J(0.7, 0.7, 0.7, 0.2)), K(E(), n(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), J(0.75, 0.75, 0.75, 0.2),), K(E(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), J(0.6, 0.3, 0.3, 0.4),), K(V($b(D(E(6, 0, 0, 0.3), n(8, -3, -4).scale(13, 1, 13), J(0.7, 0.7, 0.7, 0.2),), V(D(E(6, 0, 0, 0.3), n(0, -0.92).scale(13, 2, 13), J(0.8, 0.8, 0.8, 0.2),), D(E(), m.rotate(0, 60).translate(14, 
      0.5, -1).scale(2.4, 5, 2), J(0.5, 0.5, 0.5, 0.5),),), D(E(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5,), J(0.8, 0.2, 0.2, 0.5),), D(E(6), n(0, -8).scale(9, 8, 7), J(0.2, 0.1, 0.4, 0.5)),), D(E(5), m.scale(5, 30, 5), J(0.4, 0.2, 0.6, 0.5)), D(E(5, 0, 1.5), n(0, 1).scale(4.5, 0.3, 4.5), J(0.7, 0.5, 0.9, 0.2),), D(E(6), n(15, -1.5, 4).scale(3.5, 1, 3.5), J(0.5, 0.5, 0.5, 0.5),),),), M(() => {
        K(E(5), n(0, -0.2).scale(5, 1, 5), J(0.6, 0.65, 0.7, 0.3));
        Mb(n(0, 1.2));
      }), Mb(n(15, -2, 4)), y(2, () => M(() => {
        Sa.map(({x:f, z:r}) => {
          K(E(11, 1), n(4 * f, 4, 4 * r).scale(0.8, 3, 0.8), J(0.5, 0.3, 0.7, 0.6),);
          K(E(), n(4 * f, 7, 4 * r).scale(1, 0.3), J(0.5, 0.5, 0.5, 0.3));
        });
        K(V(D(E(), m.scale(5, 1, 5), J(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => D(E(25, 1), n(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), J(0.8, 0.8, 0.8, 0.3),)),),);
        K(E(), n(0, -3).scale(8, 2, 8), J(0.4, 0.4, 0.4, 0.3));
      })), M(() => {
        K(V($b(D(E(), m.scale(1.5, 1, 5), J(0.9, 0.9, 0.9, 0.2)), D(E(6), m.scale(4, 1, 5), J(0.9, 0.9, 0.9, 0.2)), D(E(), n(0, -2).scale(2, 3.2, 1.9), J(0.3, 0.8, 0.5, 0.5),), D(E(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), J(0.9, 0.9, 0.9, 0.2),),), D(E(), m.scale(1.3, 10, 1.3), J(0.2, 0.7, 0.4, 0.6)),),);
        Nb(n(0, 2.8), [0, 0, 4.5,]);
      }), K(E(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2)), M(() => {
        K(E(3), n(-23, -1.7, 55.8).scale(5, 0.7, 8.3), J(0.3, 0.6, 0.6, 0.2));
        K(E(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), J(0.8, 0.8, 0.8, 0.2));
        K(E(), n(-23, -3, 55).scale(5.2, 1.7, 3), J(0.5, 0.5, 0.5, 0.3));
        K(E(), n(-23, -2.2, 62).scale(3, 1, 4), J(0.5, 0.5, 0.5, 0.3));
        Mb(n(-23, -0.5, 66.5));
      }), M(() => {
        K(E(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), J(0.7, 0.7, 0.7, 0.2));
        K(V(D(E(), m.scale(3, 1.4, 2.7)), D(E(), m.scale(1.2, 8, 1.2)),), n(-33, -3, 55), J(0.7, 0.7, 0.7, 0.2),);
      }), M(() => {
        K(V(D(E(), n(-27, -3, 55).scale(3, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2),), D(E(), n(-27, -3, 55).scale(1, 3), J(0.9, 0.9, 0.9, 0.2)),),);
        K(E(), n(-39, -3, 55).scale(3, 1.4, 2.7), J(0.9, 0.9, 0.9, 0.2));
      }), M(() => {
        K(E(6), n(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), J(0.7, 0.7, 0.7, 0.4),);
      }), Mb(n(-55, -1.1, 46).rotate(0, 90)), K(E(7), n(-57, -2.6, 46).scale(4, 1, 4), J(0.8, 0.8, 0.8, 0.3)), K(E(6), n(-61.3, -2.4, 49).scale(3, 1, 5), J(0.4, 0.6, 0.6, 0.3)), [...D(E(), n(0, -3).scale(11, 1.4, 3), J(0.9, 0.9, 0.9, 0.2)), ...D(E(), n(0, -2.2).scale(7.7, 0.5, 4), J(0.5, 0.5, 0.5, 0.2),), ...V(D(E(6), m.rotate(90).scale(6, 8, 6), J(0.3, 0.6, 0.6, 0.3)), D(E(4, 0, 0.01), n(0, 6).scale(12, 2, 0.75).rotate(0, 45), J(0.3, 0.6, 0.6, 0.3),), D(E(6), m.rotate(90).scale(5, 12, 5), J(0.3, 
      0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => D(E(5), n(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), J(0.3, 0.6, 0.6, 0.3),)),),]), x = (M(() => K(w)), K(w, n(-53, 0, 55)), K(E(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), J(0.7, 0.7, 0.7, 0.2),), K(E(3, 0, -0.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), J(0.8, 0.8, 0.8, 0.2),), K(V($b(D(E(), n(-100, -2.4, 55).scale(8, 0.9, 8), J(0.8, 0.8, 0.8, 0.2),), D(E(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), J(0.8, 0.8, 
      0.8, 0.2),), D(E(), n(-100, -2.6, 70).scale(3, 1.1, 7), J(0.8, 0.8, 0.8, 0.2),), D(E(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), J(0.8, 0.8, 0.8, 0.2),), D(E(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), J(0.6, 0.6, 0.6, 0.3),), D(E(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), J(0.8, 0.8, 0.8, 0.2),), D(E(), n(-100, 0.42, 92).scale(3, 1.1, 4.1), J(0.8, 0.8, 0.8, 0.2),),), D(E(8), n(-100, -1, 55).scale(7, 0.9, 7), J(0.3, 0.3, 0.3, 0.4),), D(E(8), n(-100, -2, 
      55).scale(4, 0.3, 4), J(0.4, 0.4, 0.4, 0.5),), D(E(8, 0, -3.1), n(-100, -3, 55).scale(0.4, 1, 0.4), J(0.4, 0.4, 0.4, 0.5),),),), Nb(n(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Nb(n(-89, 0.2, 80), [0, 0, 6,]), K(V(D(E(), n(-100, 1, 63).scale(7.5, 4), J(0.5, 0.5, 0.5, 0.4)), D(E(), n(-100, 0, 70).scale(2, 2, 10), J(0.5, 0.5, 0.5, 0.4),), D(E(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), J(0.5, 0.5, 0.5, 0.4),),),), Sa.map(({x:f, z:r}) => {
        K(E(6), n(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), J(0.6, 0.3, 0.3, 0.4));
        K(E(6), n(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), J(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(B => K(E(6), n(7 * f - 100, B, 7 * r + 55).scale(1.3, 0.5, 1.3), J(0.4, 0.2, 0.2, 0.8),));
        K(E(14, 1), n(9 * f - 38.9, -7.3, 11 * r + 17).scale(1, 4), J(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(B => K(E(17, 1), n(9 * f - 38.9, B - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), J(0.6, 0.6, 0.6, 0.3),));
      }), y(7, f => {
        K(E((23 * f + 1) % 5 + 5, 0, 0.5), n(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), J(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
      }), K(E(), n(-87, -9.5, 24).scale(7, 1, 3), J(0.4, 0.5, 0.6, 0.4)), K(E(4), n(-86, -9.2, 27).scale(5, 1, 5), J(0.5, 0.6, 0.7, 0.3)), K(E(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), J(0.3, 0.3, 0.4, 0.1)), Mb(n(-86, -7.5, 31)), M(() => {
        [0, 12, 24,].map(f => K(E(), n(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), J(0.2, 0.5, 0.6, 0.2),));
      }), M(() => {
        [6, 18,].map(f => K(E(), n(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), J(0.1, 0.4, 0.5, 0.2),));
      }), K(V($b(D(E(5), n(0, 0, -7).scale(2, 1.2, 2), J(0.2, 0.4, 0.7, 0.3),), D(E(5), m.scale(9, 1.2, 9), J(0, 0.2, 0.3, 0.5)), D(E(), m.scale(11, 1, 13), J(0.3, 0.4, 0.6, 0.3)),), D(E(5), m.scale(5.4, 5, 5.4), J(0, 0.2, 0.3, 0.5)),), n(-38.9, -11.3, 17),), Mb(n(-38.9, -9.6, 10)), M(() => {
        K(V($b(D(E(5), n(0, 2).scale(5, 7, 5).skewY(8), J(0.2, 0.4, 0.5, 0.5),), D(E(5), n(0, 6).scale(1.1, 7, 1.1).skewY(-8), J(0.25, 0.35, 0.5, 0.5),), D(E(5), n(0, 9).scale(0.6, 7, 0.6).skewY(8), J(0.35, 0.3, 0.5, 0.5),),), D(E(5), m.scale(4, 8, 4), J(0.2, 0.4, 0.5, 0.5)), D(E(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), J(0.2, 0.4, 0.5, 0.5),),), n(-38.9, -11.3, 17),);
        Nb(n(-39.1, -0.6, 17).rotate(11), ...sb(15).map(({x:f, z:r}) => [3 * f, 3 * r, 1.2,]),);
      }), K(V($b(D(E(6), n(0, 0, -18).scale(15, 1.2, 15), J(0.7, 0.7, 0.7, 0.3),), D(E(), m.scale(4, 1.2, 6), J(0.45, 0.4, 0.6, 0.3)),), ...y(6, f => y(6, r => D(E(6), n(4.6 * r - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * r) - 32).scale(2, 5, 2), J(0.7, 0.7, 0.7, 0.3),))).flat(),), n(-38.9, -11.3, -1),), Nb(n(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), K(E(5), n(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), J(0.8, 0.1, 0.25, 0.4),), Mb(n(-84, -0.7, 85).rotate(0, 45)), V(D(E(), 
      n(0, -0.5, 1).scale(1.15, 1.2, 6.5), J(0.25, 0.25, 0.35, 0.3),), V(D(E(3), n(0, 0, -5.5).scale(3, 2), J(0.6, 0.3, 0.4, 0.3)), D(E(), n(0, 0, -3.65).scale(2.5, 3), J(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => D(E(), n(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), J(0.7, 0.2, 0, 0.3),)),));
      M(() => y(2, f => K(x, n(9 * f - 110 + (1 & f), 1.9, -12))));
      M(() => y(2, f => K(x, n(9 * (f + 2) - 110 + (1 & f), 1.9, -12))));
      M(() => y(3, f => K(x, n(9 * f - 106, 1.9, -12))));
      y(3, f => {
        K(l(16), n(12 * f - 109, -9, -12), J(0.6, 0.6, 0.6, 0.3));
        K(l(16), n(-77, -9, -12 * f - 20).rotate(0, 90), J(0.6, 0.6, 0.6, 0.3),);
      });
      K(V($b(D(E(), n(26.5, -1.6, 10).scale(20, 2.08, 3)), D(E(), n(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...y(4, f => D(E(), n(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...y(3, f => D(E(), n(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), n(-123, 0.2, -12), J(0.5, 0.5, 0.6, 0.2),);
      Mb(n(-116, -1.4, -18).rotate(0, 180));
      K(E(6), n(-116, -2.6, -16.5).scale(3.2, 0.8, 3), J(0.6, 0.5, 0.7, 0.2));
      K(E(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), J(0.8, 0.8, 0.8, 0.2),);
      K(E(), n(-115.5, -17, -12).scale(0.5, 15, 2.2), J(0.6, 0.6, 0.6, 0.3));
      K(E(8), n(-114, -17, -2).scale(2, 15, 2), J(0.6, 0.6, 0.6, 0.3));
      K(E(8), n(-79, -17, -2).scale(2, 15, 2), J(1, 1, 1, 0.3));
      K(E(), n(-77, -17, -50.5).scale(2.2, 15, 0.5), J(0.6, 0.6, 0.6, 0.3));
      K(V(D(E(12), n(-77, -14.5, -12).scale(4, 17.5, 4), J(0.7, 0.7, 0.7, 0.2),), D(E(12), n(-77, 3.1, -12).scale(3, 5, 3), J(0.4, 0.5, 0.6, 0.2),), D(E(), n(-79, 0.1, -12).scale(3.5, 2, 1.3), J(0.4, 0.5, 0.6, 0.2),), D(E(), n(-77, 0.1, -14).scale(1.5, 2, 2), J(0.4, 0.5, 0.6, 0.2),),),);
      K(E(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), J(0.6, 0.6, 0.6, 0.3),);
      K(E(9), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), J(0.5, 0.5, 0.5, 0.3));
      K(V(D(E(), n(-93, -5.8, -40).scale(9, 1, 5), J(0.8, 0.8, 0.8, 0.1),), D(E(9), n(-98, -5.8, -40).scale(3, 8, 3), J(0.7, 0.7, 0.7, 0.2),),),);
      Mb(n(-98, -4.4, -40).rotate(0, 90));
      Nb(n(-115, 0.2, -12), [0, 0, 3.5,]);
      Nb(n(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      K(V($b(D(E(6, 0, 0, 0.6), n(-100, 0.7, 105.5).scale(8, 1, 11), J(0.7, 0.7, 0.7, 0.2),), D(E(), n(-101.5, 0.7, 93.5).scale(10.5, 1, 2), J(0.7, 0.7, 0.7, 0.2),),), D(E(5), n(-100, 0.7, 113).scale(4, 3, 4), J(0.7, 0.7, 0.7, 0.2),),),);
      y(4, f => M(() => K(E(6), n(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), J(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),)),);
      M(() => {
        K(V(D(E(10), m.scale(6, 2, 6), J(0.1, 0.6, 0.5, 0.3)), D(E(10), m.scale(3.3, 6, 3.3), J(0.1, 0.6, 0.5, 0.5)),),);
        K(E(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), J(0.4, 0.4, 0.4, 0.3),);
        K(E(10), n(-7.5).rotate(0, 90).scale(2, 2.5, 2), J(0.3, 0.8, 0.7, 0.3));
        K(E(5), n(-7.5).rotate(0, 90).scale(1, 3), J(0.5, 0.5, 0.5, 0.5));
        Mb(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(f => K(q, m.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3),));
        Nb(n(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(f => {
        [7.2, 1.5,].map(r => K(E(15, 1), n(-7.5 * f - 100, r + 0.7, 96).scale(1.1, 0.5, 1.1), J(0.5, 0.24, 0.2, 0.4),));
        K(q, n(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90),);
        K(E(12, 1), n(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), J(0.6, 0.24, 0.2, 0.5),);
        K(V(D(E(), n(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), J(0.5, 0.5, 0.5, 0.4),), D(E(), m.scale(3, 3, 10), J(0.6, 0.24, 0.2, 0.5)), D(E(28, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), J(0.6, 0.24, 0.2, 0.5),), D(E(5), n(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), J(0.6, 0.24, 0.2, 0.5),), D(E(5), n(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), J(0.6, 0.24, 0.2, 0.5),),), n(f - 100, 0.7, 97),);
      });
      M(() => {
        K(V(D(E(45, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)), D(E(), n(0, 0, -5.5).scale(1.5, 3, 2.7), J(0.45, 0.45, 0.45, 0.2),),),);
        K(E(8), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), J(0.7, 0.7, 0.7, 0.1));
        K(E(5), n(0, 2).scale(1, 2), J(0.3, 0.3, 0.3, 0.2));
        Nb(n(0, 3), ...sb(14).map(({x:f, z:r}) => [5.6 * f, 5.6 * r, 2,]),);
      });
      M(() => {
        [-1, 1,].map(f => K(q, m.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90),));
        K(V(D(E(28, 1), n(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3),), D(E(), m.scale(9, 5, 2), J(0.3, 0, 0, 0.3)),),);
        K(D(E(28, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)),);
        K(D(E(5), n(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)),);
      });
      M(() => {
        K(V(D(E(28, 1), n(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3),), D(E(), n(7).scale(9, 5, 2), J(0.3, 0, 0, 0.3)), D(E(), n(0, 0, 7).scale(2, 5, 9), J(0.3, 0, 0, 0.3)),),);
        K(D(E(28, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)),);
        K(D(E(5), n(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)),);
      });
      M(() => {
        K(V(D(E(28, 1), n(0, 2).scale(7.5, 1, 7.5), J(0.35, 0, 0, 0.3),), D(E(), n(7).scale(9, 5, 2), J(0.3, 0, 0, 0.3)), D(E(), n(0, 0, -7).scale(2, 5, 9), J(0.3, 0, 0, 0.3)),),);
        K(D(E(28, 1), m.scale(7.5, 1, 7.5), J(0.45, 0.45, 0.45, 0.2)),);
        K(D(E(5), n(0, 1).scale(1, 0.2), J(0.3, 0.3, 0.3, 0.2)),);
      });
      K(V(D(E(), n(-82.07, 0.8, 106).scale(11, 0.9, 2.2), J(0.7, 0.7, 0.7, 0.1),), D(E(45, 1), n(-81, 0.7, 106).scale3d(7.7), J(0.7, 0.7, 0.7, 0.1),),),);
      K(E(), n(-58, 1, 106).scale(2, 0.65, 2), J(0.7, 0.7, 0.7, 0.2));
      K(E(), n(-50.7, 1, 99).scale(2, 0.65, 1), J(0.7, 0.7, 0.7, 0.2));
      K(E(), n(-42, 0.4, 91).scale(5, 1, 2.5), J(0.7, 0.7, 0.7, 0.3));
      K(E(), n(-34.2, 0.4, 91).scale(3, 1, 3), J(0.7, 0.7, 0.7, 0.3));
      K(E(5), n(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), J(0.2, 0.5, 0.5, 0.6),);
      Mb(n(-34, 2.7, 96).rotate(-12, 0));
      [J(0.1, 0.55, 0.45, 0.2), J(0.2, 0.5, 0.5, 0.3), J(0.3, 0.45, 0.55, 0.4),].map((f, r) => M(() => {
        K(E(), n(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
        2 === r && K(E(), n(-29.1, 0.4, 91).scale(2.1, 1, 3), J(0.7, 0.7, 0.7, 0.3));
        1 === r && K(E(), n(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), J(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(f => K(q, n(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
      y(3, f => K(l(24.7 - 0.7 * (1 & f)), n(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? J(0.5, 0.5, 0.5, 0.3) : J(0.35, 0.35, 0.35, 0.5),));
      K(V(D(E(6, 0, 0, 0.3), n(0, -0.92, 95).scale(14, 2, 14), J(0.8, 0.8, 0.8, 0.2),), D(E(5), n(0, 0, 95).scale3d(6), J(0.3, 0.3, 0.3, 0.5)),),);
      Mb(n(0, 1.7, 82).rotate(0, 180));
      K(E(5), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), J(0.5, 0.3, 0.3, 0.4),);
      K(E(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), J(0.5, 0.6, 0.7, 0.3),);
      K(E(), n(0, 16, 129).scale(1.5, 1, 2), J(0.5, 0.6, 0.7, 0.3));
      K(E(7), n(0, 16.2, 133).scale(5, 1, 5), J(0.4, 0.5, 0.6, 0.4));
      K(V($b(D(E(), n(0, 16, 110.5).scale(12, 1, 3), J(0.5, 0.3, 0.3, 0.4),), D(E(), n(0, 16, 111).scale(3, 1, 3.8), J(0.5, 0.3, 0.3, 0.4),),), D(E(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), J(0.5, 0.3, 0.3, 0.4),),),);
      M(() => {
        K(E(3), n(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), J(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(f => {
          K(E(6), n(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), J(0.7, 0.7, 0.7, 0.4),);
          K(E(), n(0, 6.2, f + 95).scale(0.5, 11, 0.5), J(0.5, 0.3, 0.3, 0.4),);
        });
      });
      M(() => {
        K(E(5), m.scale(5, 1.1, 5), J(0.5, 0.3, 0.3, 0.4));
        K(E(5), m.scale(5.5, 0.9, 5.5), J(0.25, 0.25, 0.25, 0.4));
        Mb(n(0, 1.5, -1).rotate(0, 180));
      });
      Nb(n(0, 3, 95), ...sb(9).map(({x:f, z:r}) => [9 * f, 9 * r, 4,]),);
      Nb(n(0, 19, 134), [0, 0, 3.5,]);
    });
    M(() => {
      K(wb(20), n(0, 1).scale3d(0.5), J(1, 0.3, 0.4));
      K(wb(30), m.scale(0.65, 0.8, 0.55), J(1, 0.3, 0.4));
      K(E(), n(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), J(0.3, 0.3, 0.3));
      [-1, 1,].map(l => {
        K(q, m.rotate(0, 0 < l ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), J(1, 1, 0.8),);
        K(D(V(E(15, 1), D(E(), n(0, 0, 1).scale(2, 2, 0.5)),), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), J(0.3, 0.3, 0.3),), n(0.2 * l, 1.2, 0.4).rotate(0, 20 * l, 20 * l),);
        M(() => {
          K(E(20, 1), n(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), J(1, 0.3, 0.4));
        });
      });
    });
    M(() => {
      K(E(6).slice(0, -1), m.scale(0.77, 1, 0.77), J(1, 0.3, 0.5));
    });
    M(() => {
      K(wb(30, 24, (l, w, x) => {
        const f = w / 24, r = l * Math.PI * 2 / 30, B = Math.sin(f ** 0.6 * Math.PI / 2);
        l = f * f * Math.sin(l * Math.PI * 14 / 30) / 4;
        return 23 < w ? {x:x.C = 0, y:-0.5, z:0,} : {x:Math.cos(r) * B, y:Math.cos(f * Math.PI) - f - l, z:Math.sin(r) * B + Math.sin(l * Math.PI * 2) / 4,};
      }), m.scale(0.7, 0.7, 0.7), J(1, 1, 1),);
      [-1, 1,].map(l => K(wb(12), n(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    });
    M(() => {
      K(E(6, 1), m.scale(0.12, 1.2, 0.12), J(0.3, 0.3, 0.5, 0.1));
      K(E(10), n(0, 0.8).scale(0.2, 0.3, 0.2), J(1, 0.5, 0.2));
      K(E(3), n(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), J(0.2, 0.2, 0.2, 0.1),);
    });
  });
});

