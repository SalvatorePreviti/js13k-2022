let ba, ca, da, ea, ha, ia, la, ma, na, oa, pa, qa, sa, ta, ua, va, wa, za, c = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ia = 0, Ja = 0, Ka = 1;
const La = Math.PI / 180, Ma = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Na = [], d = [], Ra = [], Sa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Ta = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ua = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Va = 0, Wa = 0, Xa = 0, Ya = 0, Za = 180;
const $a = NO_INLINE(a => 0 > a ? -a : a), ab = NO_INLINE((a, b) => a < b ? a : b), bb = NO_INLINE((a, b) => b < a ? a : b), cb = (a, b) => $a(a) > b ? a : 0, e = (a, b = 0, f = 1) => a < b ? b : f < a ? f : a, db = a => Math.atan2(Math.sin(a * La), Math.cos(a * La)) / La, eb = (a, b, f) => a + (2 * (b = (b - a) % 360) % 360 - b) * e(f) || 0, fb = (a, b, f) => (0 < f ? 1 > f ? a + (b - a) * f : b : a) || 0, gb = (a, b) => (a = e(a), fb(a, 1 - a, b)), hb = (a, b, f = 0) => Math.sqrt(a * a + b * b + 
f * f), mb = (a = 0, b = 0, f = 0, k = 1) => {
  ib = h.m11 * a + h.m21 * b + h.m31 * f + h.m41 * k;
  jb = h.m12 * a + h.m22 * b + h.m32 * f + h.m42 * k;
  kb = h.m13 * a + h.m23 * b + h.m33 * f + h.m43 * k;
  lb = h.m14 * a + h.m24 * b + h.m34 * f + h.m44 * k;
};
var ib, jb, kb, lb;
const ob = (a, b = nb, f = 0,) => (f *= 16, b[f++] = a.m11, b[f++] = a.m12, b[f++] = a.m13, b[f++] = a.m14, b[f++] = a.m21, b[f++] = a.m22, b[f++] = a.m23, b[f++] = a.m24, b[f++] = a.m31, b[f++] = a.m32, b[f++] = a.m33, b[f++] = a.m34, b[f++] = a.m41, b[f++] = a.m42, b[f++] = a.m43, b[f] = a.m44, b), pb = (a = m, b = h,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), n = NO_INLINE((a, b, f) => m.translate(a, b, f)), qb = (a, b) => Array.from(Array(a), (f, k) => b(k)), rb = (a, b, f) => (a.C = f, a.u = b, a), ub = (a, b, f = a.u,) => (pb(b), rb(a.map(({x:k, y:q, z:l}) => (mb(k, q, l), {x:ib, y:jb, z:kb,})), f, a.C,)), x = (a, b, f) => a.map(k => ub(k, b, f)), vb = (a, b = 0) => qb(a, f => {
  const k = Math.cos(2 * Math.PI * f / a);
  return {x:Math.sin(2 * Math.PI * f / a), y:0, z:0.01 > $a(k) ? k : 0 > k ? k - b : k + b,};
}), wb = (a, b, f) => a.map((k, q, {length:l}) => rb([k, b[l - q - 1], b[l - (q + 1) % l - 1], a[(q + 1) % l],], a.u, f,)), G = (a, b, f = 0, k,) => (a = a ? vb(a, k) : Sa, k = ub(a, n(0, 1).scale3d(0 < f ? f : 1)), a = ub(a, n(0, -1).scale3d(0 > f ? -f : 1)).reverse(), [...wb(a, k, b), k, a,]), xb = (a, b = a, f = (k, q) => (q *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(q), y:Math.cos(q), z:Math.sin(k) * Math.sin(q),})) => {
  const k = [];
  for (let q = 0; a > q; q++) {
    for (let l = 0; b > l; l++) {
      const w = rb([], 0, 1);
      k.push(w);
      w.push(f(q, l, w));
      l && w.push(f((q + 1) % a, l, w));
      b - 1 > l && w.push(f((q + 1) % a, l + 1 % b, w));
      w.push(f(q, l + 1 % b, w));
    }
  }
  return k;
}, yb = NO_INLINE(a => 1 - Math.exp(-a * da)), I = NO_INLINE((a, b, f) => fb(a, b, yb(f))), zb = (a, b) => {
  1 / 0 > Ka && (Ka = c + b, h4.innerHTML = a);
}, Ab = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Ba = Na.reduce((a, b) => b.i + a, 0)] + " / XIII";
}, Bb = () => {
  localStorage.DanteSP22 = JSON.stringify([d.map(a => a.i), Na.map(a => a.i), Da, c, ha,]);
}, K = NO_INLINE((a, b, f, k = 0) => 255 * k << 24 | 255 * f << 16 | 255 * b << 8 | 255 * a), Cb = (a, b, f, k) => new DOMMatrix([f, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Db = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Eb = a => Math.sin(a * Math.PI * 2), Hb = a => 0.5 > a % 1 ? 1 : -1, Ib = a => a % 1 * 2 - 1, Jb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Kb = a => {
  let b = 0;
  const f = () => {
    let l = 0;
    const w = S => {
      let J, V, Ha, ja = 0, ka = 0;
      const aa = [], ra = new Int32Array(768 * S), fc = 2 ** (v - 9) / S, gc = Math.PI * 2 ** (t - 8) / S, Fb = E * S & -2;
      for (let sb = 0; 11 >= sb; ++sb) {
        for (let tb = 0, Qb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + sb]; 32 > tb; ++tb) {
          const Rb = (32 * sb + tb) * S;
          for (var Oa = 0; 4 > Oa; ++Oa) {
            if (J = 0, Qb && (J = y[Qb - 1].charCodeAt(tb + 32 * Oa) - 40, J += 0 < J ? 106 : 0), J) {
              var fa;
              if (!(fa = aa[J])) {
                fa = J;
                let X = void 0, xa = void 0;
                var Sb = J;
                let hc = 0, ic = 0;
                const jc = 2 > b ? Ib : Eb, kc = 2 > b ? 1 > b ? Hb : Jb : Eb, Tb = new Int32Array(M + P + T);
                for (let Pa = 0, Gb = 0; M + P + T > Pa; ++Pa, ++Gb) {
                  let Qa = 1;
                  M > Pa ? Qa = Pa / M : M + P > Pa || (Qa = (1 - (Qa = (Pa - M - P) / T)) * 3 ** (-p / 16 * Qa));
                  0 > Gb || (Gb -= 4 * S, xa = 0.00396 * 2 ** ((Sb + A - 256) / 12), X = 0.00396 * 2 ** ((Sb + u - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Tb[Pa] = 80 * (jc(hc += xa * Qa ** (F / 32)) * B + kc(ic += X * Qa ** (D / 32)) * g + (Q ? (2 * Math.random() - 1) * Q : 0)) * Qa | 0;
                }
                fa = aa[fa] = Tb;
              }
              for (let X = 0, xa = 2 * Rb; fa.length > X; ++X, xa += 2) {
                ra[xa] += fa[X];
              }
            }
          }
          for (let X, xa = 0; S > xa; ++xa) {
            Oa = 0;
            fa = 2 * (Rb + xa);
            var ya = (((X = ra[fa]) || Ha) && (V = 0.00308 * z, 1 !== b && 4 !== b || (V *= Math.sin(fc * fa * Math.PI * 2) * H / 512 + 0.5), V = 1.5 * Math.sin(V), ja += V * ka, ya = (1 - W / 255) * (X - ka) - ja, ka += V * ya, X = 4 === b ? ka : 3 === b ? ya : ja, b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5), X *= R / 32, Ha = 1e-5 < X * X, ya = Math.sin(gc * fa) * r / 512 + 0.5, Oa = X * (1 - ya), X *= ya), fa < Fb || (Oa += ra[1 + fa - Fb] * C / 255, 
            X += ra[fa - Fb] * C / 255), l + fa >> 1);
            k[ya] += (ra[fa] = Oa) / 65536;
            q[ya] += (ra[++fa] = X) / 65536;
          }
        }
      }
      l += 768 * S;
    }, y = Ta[b], [B, A, F, g, u, D, Q, M, P, O, p, v, z, W, R, r, t, C, E, H] = Ua[b], T = 4 * O ** 2;
    w(5513);
    w(4562);
    w(3891);
    Db(5 > ++b ? f : a);
  }, k = (ia = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), q = ia.getChannelData(1);
  Db(f);
}, Lb = () => {
  let a, b, f, k, q, l, w, y, B, A, F, g, u, D, Q, M, P = !0;
  const O = [], p = () => {
    b4.innerHTML = "Music: " + P;
    M && (ca || !P ? M.disconnect() : M.connect(Q.destination));
  }, v = () => {
    const r = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    oa = [Cb(0.3, 55, r, 1.732051), Cb(55, 181, r, 1.732051),];
    na = Cb(0.3, 181, r, 1.732051);
    k = y = void 0;
    O.length = la = D = g = u = Ea = Fa = 0;
  }, z = r => {
    if (ca !== r) {
      if (ca = r, v(), document.body.className = r ? "l m" : "l", r) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      p();
    }
  }, W = r => {
    try {
      Q || (Q = new AudioContext(), (M = Q.createBufferSource()).buffer = ia, M.loop = !0, M.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    z(!1);
    ma = r;
  }, R = (r, t) => r.buttons[t]?.pressed || 0 < r.buttons[t]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    W();
  };
  b2.onclick = () => {
    W(1);
  };
  b5.onclick = () => z(!0);
  b4.onclick = () => {
    P = !P;
    p();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
  };
  onclick = r => {
    if (!ca && (r.target === hC && (la = 1), ma)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = r => {
    let t;
    r.repeat || (t = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[r.code], (O[t] = !!r.type[5] && !0) && (0 === t && (la = 1), 1 === t && z(!0)));
  };
  onmousemove = ({movementX:r, movementY:t}) => {
    ma && (r || t) && (Za += 0.1 * r, Ya += 0.1 * t);
  };
  hC.ontouchstart = r => {
    if (!ca) {
      for (let {pageX:t, pageY:C, identifier:E} of r.changedTouches) {
        ma && t > hC.clientWidth / 2 ? void 0 === y && (B = 0, l = t, w = C, y = E, F = Ya, A = Za) : void 0 === k && (q = 0, b = t, f = C, k = E);
      }
      a = Aa;
    }
  };
  hC.ontouchmove = r => {
    if (!ca) {
      for (let {pageX:T, pageY:S, identifier:J} of r.changedTouches) {
        var t, C, E, H;
        y === J && (Ya = F + (S - w) / 2.3, Za = A + (T - l) / 2.3, B = 1);
        k === J && (J = (b - T) / 20, t = $a(J), C = (f - S) / 20, E = $a(C), (H = 0.5 < bb(t, E)) && (q = 1), g = (H && 0.3 < t) * e(J, -1), u = (H && 0.3 < E) * e(C, -1), 2 < t && (b = 20 * (0 > J ? -1 : 1) + T), 2 < E && (f = 20 * (0 > C ? -1 : 1) + S));
      }
    }
  };
  hC.ontouchend = r => {
    let t;
    document.activeElement === document.body && r.preventDefault();
    for (const C of r.changedTouches) {
      C.identifier === y ? (y = void 0, B || (t = 1), B = 0) : C.identifier === k ? (k = void 0, u = g = 0, q || (t = 1), q = 0) : t = 1;
    }
    r.target === hC && t && a && 0.02 < (r = Aa - a) && 0.7 > r && (la = 1);
  };
  pa = () => {
    Ea = u + (O[4] ? 1 : 0) - (O[5] ? 1 : 0);
    Fa = g + (O[2] ? 1 : 0) - (O[3] ? 1 : 0);
    let r = navigator.getGamepads()[0];
    r && (ma && (Ya += da * cb(r.axes[3], 0.3) * 80, Za += da * cb(r.axes[2], 0.3) * 80), Ea += R(r, 12) - R(r, 13) - cb(r.axes[1], 0.2), Fa += R(r, 14) - R(r, 15) - cb(r.axes[0], 0.2), R(r, 9) && z(!0), (r = R(r, 3) || R(r, 2) || R(r, 1) || R(r, 0)) && !D && (la = 1), D = r);
  };
  document.onvisibilitychange = onblur = onresize = v;
  z(!0);
}, L = (a, b = new DOMMatrix(), f) => qa.o.push(...x(a, b, f)), N = (a, b = 1) => {
  const f = qa;
  Ra.push(qa = {m:new DOMMatrix(), G:b, o:[],},);
  a();
  qa = f;
}, Mb = a => {
  const b = qa, f = d.length, k = {i:0, g:0, h:0, m:b.m, H:a, F() {
    k.g = I(k.g, k.i, 4);
    k.h = I(k.h, k.i, 1);
    pb(b.m).multiplySelf(a);
    la && 3 > (mb(), hb(Va - ib, Wa - jb, Xa - kb,)) ? k.i ? 0.7 < k.g && (k.i = 0, (Da = f) && zb("* click *", 1), Bb()) : 0.3 > k.g && (k.i = 1, (Da = f) && zb("* click *", 1), Bb()) : k.i && 0.8 < k.g && !f && (k.i = 0, 13 > Ba ? zb("Not leaving now, there are souls to catch!", 3) : Ca || (zb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ca = 1));
    h.rotateSelf(60 * k.g - 30, 0).translateSelf(0, 1).m44 = 1 - k.g;
  },};
  d.push(k);
  L(G(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), K(0.4, 0.5, 0.5));
  L(G(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), K(0.4, 0.5, 0.5));
  L(G(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), K(0.5, 0.5, 0.4));
}, Nb = (a, ...b) => {
  let f, k, q, l, w = 0, y = 0, B = 1, A = -1;
  const F = {i:0, F() {
    if (!F.i) {
      let p, v, z, W, R, r = 1, t = 1 / 0;
      for (let C = 0; b.length > C; C++) {
        const E = b[C];
        let H = hb(u - E[0], D - E[1]);
        r = ab(r, H / E[2]);
        0 > (H -= E[2]) ? R = 1 : t > H && (t = H, g = E);
      }
      R || (p = u - g[0], v = D - g[1], z = hb(p, v), W = Math.atan2(-v, p), B && (l = e(l / (1 + Math.random())), y = (Math.random() - 0.5) * Math.PI / 2), W += y, A = -Math.cos(W), w = Math.sin(W), 0.1 < z && (z = ab(z, g[2]) / z, u = p * z + g[0], D = v * z + g[1]));
      B = R;
      l = I(l, 3 + 6 * (1 - r), 3 + r);
      Q = I(Q, u = I(u, u + A, l), l);
      M = I(M, D = I(D, D + w, l), l);
      f = eb(f, Math.atan2(Q - k, M - q) / La - 180, yb(3),);
      pb(P).multiplySelf(a).translateSelf(k = Q, 0, q = M).rotateSelf(0, f, 7 * Math.sin(1.7 * c));
      1.6 > (mb(), hb(Va - ib, Wa - jb, Xa - kb,)) && (F.i = 1, zb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Ba] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Ab(), Bb());
    }
    F.i && pb(Ra[2].m).translateSelf(O % 4 * 1.2 - 1.7 + Math.sin(c + O) / 7, -2, 1.7 * (O / 4 | 0) - 5.5 + $a(O % 4 - 2) + Math.cos(c / 1.5 + O) / 6,);
  },};
  let g = b[0], [u, D] = g, [Q, M] = g;
  const P = qa.m, O = Na.length;
  Na.push(F);
}, Ob = ({x:a, y:b, z:f}, k) => a * k.x + b * k.y + f * k.z, Pb = a => {
  let b, f = 0, k = 0, q = 0, l = a.at(-1);
  for (b of a) {
    f += (l.y - b.y) * (l.z + b.z), k += (l.z - b.z) * (l.x + b.x), q += (l.x - b.x) * (l.y + b.y), l = b;
  }
  return b = hb(f, k, q), f /= b, k /= b, q /= b, {x:f, y:k, z:q, w:f * l.x + k * l.y + q * l.z,};
}, Ub = (a, b) => {
  var f, k, q, l = b.B;
  for (var w = 0; l.length > w; ++w) {
    if (-0.00008 > (f = Ob(a, l[w]) - a.w) ? q = b : 8e-5 < f && (k = b), q && k) {
      k = [];
      q = [];
      l = b.B;
      w = b.v;
      let y = l.at(-1), B = Ob(a, y) - a.w;
      for (const A of l) {
        f = Ob(a, A) - a.w, 8e-5 > B && q.push(y), -0.00008 < B && k.push(y), (8e-5 < B && -0.00008 > f || -0.00008 > B && 8e-5 < f) && (B /= f - B, y = {x:y.x + (y.x - A.x) * B, y:y.y + (y.y - A.y) * B, z:y.z + (y.z - A.z) * B,}, k.push(y), q.push(y)), y = A, B = f;
      }
      return {l:2 < k.length && {B:rb(k, l.u, l.C), v:w, A:b,}, j:2 < q.length && {B:rb(q, l.u, l.C), v:w, A:b,},};
    }
  }
  return {l:k, j:q,};
}, Vb = (a, b, f = Pb(b.B)) => {
  let k, q;
  return a ? ({l:k, j:q} = Ub(a, b), k || q || a.o.push(b), k && (a.l = Vb(a.l, k, f)), q && (a.j = Vb(a.j, q, f))) : a = {x:f.x, y:f.y, z:f.z, w:f.w, o:[b,], l:0, j:0,}, a;
}, Wb = (a, b, f) => {
  const k = [], q = (l, w) => {
    let {l:y, j:B} = Ub(l, w);
    y || B || (0 < f * Ob(l, b) ? y = w : B = w);
    y && (l.l ? q(l.l, y) : k.push(y));
    B && l.j && q(l.j, B);
  };
  for (const l of b.o) {
    q(a, l);
  }
  return k;
}, Xb = (a, b) => a && (b(a), Xb(a.l, b), Xb(a.j, b)), Yb = a => (Xb(a, b => {
  const f = b.j;
  b.j = b.l;
  b.l = f;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const k of b.o) {
    k.v = !k.v;
  }
}), a), Zb = a => a.length ? a.reduce((b, f) => Vb(b, {B:f, v:0, A:0,}), 0) : a, $b = (...a) => a.reduce((b, f) => {
  const k = [];
  if (b = Zb(b), f) {
    f = Zb(f);
    Xb(b, q => q.o = Wb(f, q, 1));
    Xb(f, q => k.push([q, Wb(b, q, -1),]));
    for (let [q, l] of k) {
      for (const w of l) {
        Vb(b, w, q);
      }
    }
  }
  return b;
}), U = (a, ...b) => {
  const f = l => {
    let w;
    return l.A && ((w = k.get(l.A)) ? (q.delete(w), l = f(l.A)) : k.set(l.A, l)), l;
  }, k = new Map(), q = new Map();
  return a = Yb($b(Yb(Zb(a)), ...b)), Xb(a, l => {
    for (const w of l.o) {
      q.set(f(w), w.v);
    }
  }), Array.from(q, ([{B:l}, w]) => {
    const y = l.map(({x:B, y:A, z:F}) => ({x:B, y:A, z:F,}));
    return rb(w ? y.reverse() : y, l.u, l.C);
  });
}, Y = () => pb(m, Ra[++sa].m), bc = () => {
  let a, b, f, k, q, l, w, y, B, A, F, g, u, D, Q = 0, M = 0, P = 0, O = 1, p = 2, v = 15;
  const z = () => pb((p ? d[Da] : Ra[F && 1 === Ra[F].G && F || 0]).m,), W = t => {
    1 < p ? (pb(d[Da].m).multiplySelf(d[Da].H), mb(0, Da || 0.9 < ea ? 15 : 1, -2.4)) : (z(), mb(Q, M, P));
    t && (q = (ib - Va) / da, l = (kb - Xa) / da);
    Va = ib;
    Wa = jb;
    Xa = kb;
  }, R = () => {
    var t = 0, C = 0, E = 0, H = 0, T = 0, S = 0, J = -1;
    for (var V = 0; 36 > V; ++V) {
      var Ha = 512 * V;
      for (var ja = 96; 416 > ja; ja += 4) {
        for (var ka = 0; 2 > ka; ++ka) {
          var aa = ac[Ha + ja + ka];
          const ra = ac[Ha + ja + ka + 2];
          aa > H && (H = aa);
          aa + ra && (0 > J || J === V) && (J = V, ra === A ? ++t : C && C !== ra || (C = ra, ++E));
        }
      }
    }
    A = 0 > J ? 0 : E > 2 * t ? C : A;
    for (t = 36; 128 > t; ++t) {
      V = J = E = C = 0;
      Ha = 512 * t;
      for (ja = 0; 128 > ja; ++ja) {
        ka = Ha + 4 * ja, aa = ac[ka], 64 > ja ? aa > C && (C = aa) : aa > E && (E = aa), (aa = ac[2 + ka]) > J && (J = aa), aa = ac[1 + ka], 64 < ja ? aa > C && (C = aa) : aa > E && (E = aa), (aa = ac[3 + ka]) > V && (V = aa);
      }
      (E -= C) * E > T * T && (T = E);
      (V -= J) * V > S * S && (S = V);
    }
    y = e(1 - 0.02 * bb($a(T), $a(S)));
    T /= 255;
    H /= 255;
    S /= 255;
    z().invertSelf();
    mb(T, H, S, 0);
    Q += ib;
    M += H;
    P += kb;
    W();
  }, r = (t, C, E, H) => fb(t, C, O || (e($a(C - t) ** 0.5 - E) + 1 / 7) * yb(1.5 * H));
  ta = () => {
    W(A);
    Z.r9r(0, 0, 128, 128, 6408, 5121, ac);
    NO_INLINE(R)();
    !p && A === F || (F = A, z().invertSelf(), mb(Va, Wa, Xa), Q = ib, M = jb, P = kb);
    p = p && (A ? 0 : 1);
    (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (p = 2);
    1 === A && (d[9].i = -15 > Va && 0 > Xa ? 1 : 0);
    B = fb(I(B, Wa, 2), Wa, p || 8 * $a(B - Wa),);
    g = r(g, Va, 0.5, 1);
    u = r(u, B, 2, 1);
    D = r(D, Xa, 0.5, 1);
    k = I(k, ua * (27 < A && 32 > A), 2,);
    ma ? (t = p + yb(18), Ga = fb(Ga, Va, t), Ja = fb(Ja, Xa, t), Ia = fb(Ia, B + 1.5, t), Za = db(Za)) : (Ga = r(Ga, g, 1, 2 + k,), Ja = r(Ja, D + -18 + 5 * k, 1, 2 + k,), Ia = r(Ia, bb(u + e((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), t = ab(-6, -$a(D - Ja)), C = g - Ga, Za = eb(Za, 90 - db(Math.atan2(t, C) / La), O + yb(10),), Ya = eb(Ya, 90 - Math.atan2(hb(t, C), Ia - u) / La, O + yb(10),));
    Ya = e(Ya, -87, 87);
    O = 0;
    var t = e(Ea, -1), C = e(Fa, -1), E = cb(hb(t, C) ** 0.5, 0.1), H = Math.atan2(t, C);
    t = E * $a(t) * Math.sin(H);
    C = E * $a(C) * Math.cos(H);
    E && (a = 90 - H / La);
    b = eb(b, a, yb(8));
    f = I(f, E, 10);
    Y().translateSelf(Va, 0.06 * f * Math.cos(18.2 * c) + B, Xa,).rotateSelf(0, b);
    for (H = 0; 2 > H; ++H) {
      var T = 9.1 * c - Math.PI * H;
      pb(Ra[37].m, Y()).translateSelf(0, f * e(0.45 * Math.sin(T - Math.PI / 2)),).rotateSelf(f * Math.sin(T) * 0.25 / La, 0);
    }
    v = A ? 5 : I(v, p ? 13 : 19 - 2 * ab(0, Wa + 10), 2.2);
    q = A || p ? 0 : I(q, 0, 3);
    l = A || p ? 0 : I(l, 0, 3);
    w = p ? 0 : I(w, A ? 7 * e(2 * E) * y : 0, A ? 9 : 1,);
    H = ma ? (180 + Za) * La : 0;
    E = da * (q + w * (C * Math.cos(H) - t * Math.sin(H)));
    T = -v * da;
    t = da * (l + w * (C * Math.sin(H) + t * Math.cos(H)));
    z().invertSelf();
    mb(E, T, t, 0);
    Q += ib;
    M += T;
    P += kb;
    W();
  };
}, cc = (a, b, f, k) => {
  a.translateSelf(b + Math.sin(c + 2) / 5, f + Math.sin(0.8 * c) / 3, k).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
}, lc = (a, b, f) => {
  ca ? 1100 < hC.width && (pb().rotateSelf(0, 40 * Math.sin(Aa) - 80, -8), ob(h, dc, 36), ob(h, dc, 37), ob(h, dc, 38), Z.uae(a, !1, dc), Z.d97(4, Ra[39].D - Ra[37].s, 5123, 2 * Ra[37].s)) : (Z.uae(a, !1, ec), Z.das(4, Ra[f].D - Ra[f].s, 5123, 2 * Ra[f].s, Na.length,), Z.das(4, Ra[42].D - Ra[42].s, 5123, 2 * Ra[42].s, d.length,), Z.uae(a, !1, dc), Z.d97(4, (b ? Ra[39].D : Ra[37].s) - 3, 5123, 6));
}, mc = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), nc = (a, b) => {
  const f = {}, k = Z.c1h();
  return Z.abz(k, a), Z.abz(k, mc(b, 35632)), Z.l8l(k), q => q ? f[q] || (f[q] = Z.gan(k, q)) : Z.u7y(k);
}, h = new DOMMatrix(), m = new DOMMatrix(), nb = new Float32Array(16), dc = new Float32Array(624), ec = new Float32Array(624), ac = new Uint8Array(65536), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, f, k) => (b * k + f.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
Db(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const q = [new Float32Array(16), new Float32Array(16),], l = p => {
        requestAnimationFrame(l);
        var v = (p - (ba || p)) / 1e3;
        if (Aa += v, c += da = ca ? 0 : ab(0.066, v), ba = p, 0 < da) {
          pa();
          Ka && c > Ka && (Ka = 0, h4.innerHTML = "");
          ea = I(ea, Ca ? I(ea, -9, 1.5) : e(c / 3), 1,);
          ha = I(ha, d[9].h, 0.2 + 0.3 * $a(2 * d[9].h - 1),);
          sa = 1;
          ua = gb(d[12].g, d[13].g);
          za = fb(I(za, 0, 1), db(za + 60 * da), d[5].g - d[6].h,);
          va = fb(I(va, 0, 5), db(va + 56 * da), ua,);
          wa = fb(I(wa, 0, 4), db(wa + 48 * da), ua,);
          cc(Y(), -12, 4.2, 40 * ea - 66);
          Y().translateSelf(0, 0, -15).scaleSelf(1, e(1.22 - d[1].g), 1);
          Y().translateSelf(0, 0, 15).scaleSelf(1, e(1.22 - d[2].g), 1);
          Y().translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, e(1.1 - d[6].g), 1);
          Y().translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - d[12].g);
          Y().translateSelf(0, 0.01 > d[3].g ? -500 : (1 - d[2].g) * d[3].h * (5 * Math.cos(1.5 * c) + 2) + 15 * (d[3].g - 1), 0,);
          p = ab(1 - d[4].h, d[2].h);
          Y().translateSelf(p * Math.sin(c / 1.5 + 2) * 12);
          Y().translateSelf(p * Math.sin(0.7 * c + 2) * 12);
          Y().translateSelf(p * Math.sin(c + 3) * 8.2);
          Y().translateSelf(9.8 * (1 - p));
          p = e(1 - 5 * p) * gb(d[4].g, d[5].g);
          Y().translateSelf(0, p * Math.sin(1.35 * c) * 4);
          Y().translateSelf(0, 0, p * Math.sin(0.9 * c) * 8);
          Y().translateSelf(0, -6.5 * d[4].h);
          Y().translateSelf(-75, (1 - d[5].h) * (1 - d[6].g) * 3, 55).rotateSelf(180 * (1 - d[5].h) + za, 0);
          p = gb(d[7].h, d[6].h);
          Y().translateSelf(0, 5 * p * Math.sin(c) + 3.5 * (1 - bb(d[6].g, d[7].g)),);
          Y().translateSelf(0, 6 * p * Math.sin(c + 3), 6 * p * Math.sin(0.6 * c + 1),);
          Y().translateSelf(0, -7.3 * d[7].h);
          cc(Y(), -123, 1.4, 55 - 65 * ha);
          p = gb(d[10].g, d[11].g);
          Y().translateSelf(0, -2, 10 - 8.5 * p * $a(Math.sin(1.1 * c)));
          Y().translateSelf(0, -2, 10 - 8.5 * p * $a(Math.sin(2.1 * c)));
          Y().translateSelf(0, -2, 10 - 8.5 * bb(p * $a(Math.sin(1.5 * c)), (1 - d[10].g) * (1 - p)),);
          p = gb(d[8].h, d[12].h);
          for (v = 0; 4 > v; v++) {
            Y().translateSelf((2 < v ? 2 * (1 - p) + p : 0) - 100, p * Math.sin(1.3 * c + 1.7 * v) * (3 + v / 3) + 0.7, 115 - 7 * (1 - d[8].h) * (1 - d[12].h) * (1 & v ? -1 : 1) + bb(0.05, p) * Math.cos(1.3 * c + 7 * v) * (4 - 2 * (1 - v / 3)),);
          }
          Y().translateSelf(2.5 * (1 - p) - 139.7, -3 * (1 - d[8].g) - p * Math.sin(0.8 * c) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 * p + 3), 0);
          Y().translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + va);
          Y().translateSelf(-65.8, 0.8, 106).rotateSelf(0, wa);
          Y().translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
          Y().translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
          p = gb(d[13].h, d[14].h);
          for (v = 0; 3 > v; ++v) {
            Y().translateSelf(0, p * Math.sin(1.5 * c + 1.5 * v) * 4 + (v ? 0 : (1 - d[13].h) * (1 - d[14].h)),);
          }
          Y().translateSelf(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          v = gb(gb((d[14].g + d[14].h) / 2, d[13].h), (d[15].g + d[15].h) / 2,);
          Y().translateSelf(0, 16 * v, 95 + 8.5 * e(2 * v - 1));
          for (p = 0; 13 > p; ++p) {
            Na[p].F(), ob(h, ec, p);
          }
          for (p = 0; 16 > p; ++p) {
            d[p].F(), ob(h, ec, 13 + p);
          }
          ta();
          for (p = 0; sa >= p; ++p) {
            ob(Ra[p].m, dc, p - 1);
          }
          u();
          Z.b6o(36160, O);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          Z.uae(u("b"), !1, ob(pb().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa,),),);
          lc(u("c"), 0, 40);
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(u("b"), !1, ob(pb().translateSelf(-Va, -Wa, -Xa - 0.3,),),);
          lc(u("c"), 0, 40);
          la = 0;
        }
        p = Ga;
        v = Ia;
        let z = Ja;
        ca ? (pb(na).invertSelf(), mb(3.6, 3.5), p = ib, v = jb, z = 5, pb(m, y).rotateSelf(-20, 0).invertSelf().translateSelf(-p, -v, -z,).rotateSelf(0, 99)) : pb(m, y).rotateSelf(-Ya, -Za).invertSelf().translateSelf(-p, -v, -z);
        F();
        Z.b6o(36160, M);
        Z.v5y(0, 0, 2048, 2048);
        Q[0](54.7 * 1.1);
        Q[1](126 * 1.1);
        D();
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(D("a"), !1, ob(na));
        Z.uae(D("b"), !1, ob(y));
        Z.uae(D("i"), !1, q[0]);
        Z.uae(D("j"), !1, q[1]);
        Z.ubu(D("k"), p, v, z);
        lc(D("c"), !ma, 41);
        g();
        Z.ubu(g("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, Aa);
        Z.ubu(g("k"), p, v, z);
        Z.uae(g("b"), !1, ob(pb(y).invertSelf()));
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, O);
        Z.f1s();
      }, w = new DOMMatrix(), y = new DOMMatrix(), B = f, A = qb(8, () => ({}));
      var k = mc("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}");
      const F = nc(mc("#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[max(0,abs(int(f.w))-1)+gl_InstanceID];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}"), "#version 300 es\nvoid main(){}",), g = nc(mc("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
      ), u = nc(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(gl_FragCoord.y>36.){float e=abs(gl_FragCoord.x/64.-1.),v=clamp(a.z+.7,0.,1.);O=a.y<.6||a.y>4.?vec4(0):vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?v*(.7-abs(a.x))*e:0.),vec2(b[0][0]*o.z>0.?v*(1.-e):0.));}else{float e=o.y>.45&&a.y<1.?a.y*clamp((a.z+.4)*50.,0.,1.):0.;O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), D = nc(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i:j)*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), Q = qb(2, p => {
        const v = Z.c25();
        return Z.a4v(33984 + p), Z.b9j(3553, v), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), z => {
          let W = 0, R = 0, r = 0, t = 1 / 0, C = 1 / 0, E = 1 / 0, H = -1 / 0, T = -1 / 0, S = -1 / 0;
          Z.fas(36160, 36096, 3553, v, 0);
          Z.c4s(256);
          pb().scale3dSelf(z).multiplySelf(pb(oa[p], w).multiplySelf(y).invertSelf(),);
          for (let J = 0; 8 > J; ++J) {
            const V = A[J];
            mb(4 & J ? 1 : -1, 2 & J ? 1 : -1, 1 & J ? 1 : -1);
            W -= V.x = (0 | ib) / (z * lb);
            R -= V.y = (0 | jb) / (z * lb);
            r -= V.z = (0 | kb) / (z * lb);
          }
          pb().rotateSelf(298, 139).translateSelf(W / 8, R / 8, r / 8);
          for (z = 0; 8 > z; ++z) {
            const {x:J, y:V, z:Ha} = A[z];
            mb(J, V, Ha);
            t = ab(t, ib);
            H = bb(H, ib);
            C = ab(C, jb);
            T = bb(T, jb);
            E = ab(E, kb);
            S = bb(S, kb);
          }
          z = 10 + p;
          E *= 0 > E ? z : 1 / z;
          S *= 0 < S ? z : 1 / z;
          Z.uae(F("b"), !1, ob(pb(m, w).scaleSelf(2 / (H - t), 2 / (T - C), 2 / (E - S),).translateSelf((H + t) / -2, (T + C) / -2, (E + S) / 2).multiplySelf(h), q[p],),);
          lc(F("c"), !ma, 41);
        };
      }), M = Z.c5w();
      k = Z.c25();
      const P = Z.c3z(), O = Z.c5w();
      u();
      Z.uae(u("a"), !1, ob(Cb(1e-4, 2, 1.4, 0.4)));
      D();
      Z.ubh(D("q"), 2);
      Z.ubh(D("h"), 1);
      Z.ubh(D("g"), 0);
      g();
      Z.ubh(g("q"), 2);
      Z.b6o(36160, M);
      Z.d45([0,]);
      Z.r9l(0);
      Z.b6o(36160, O);
      Z.bb1(36161, P);
      Z.r4v(36161, 33190, 128, 128);
      Z.f8w(36160, 36096, 36161, P);
      Z.a4v(33986);
      Z.b9j(3553, k);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, k, 0);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, B);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.e8z(2929);
      Z.e8z(2884);
      Z.c70(1);
      Z.c7a(1029);
      Z.d4n(515);
      Z.c5t(0, 0, 0, 0);
      NO_INLINE(Lb)();
      NO_INLINE(bc)();
      requestAnimationFrame(l);
    }
  }, f = new Image();
  f.onload = f.onerror = b;
  f.src = Ma;
  NO_INLINE(Kb)(() => {
    Db(() => {
      let l = 0;
      const w = [], y = [], B = [], A = [], F = new Int32Array(8), g = new Map(), u = new Int32Array(F.buffer, 0, 5), D = new Float32Array(F.buffer);
      Ra.map((Q, M) => {
        let P;
        const O = p => {
          let {x:v, y:z, z:W} = P[p], R = (D[0] = v, D[1] = z, D[2] = W, p = "" + (P.C ? u : F), g.get(p));
          return void 0 !== R ? (v = 3 * R, A[v] = (A[v++] + F[5]) / 2, A[v] = (A[v++] + F[6]) / 2, A[v] = (A[v] + F[7]) / 2) : (g.set(p, R = g.size), y.push(v, z, W, D[3]), B.push(F[4]), A.push(F[5], F[6], F[7])), R;
        };
        for (P of (D[3] = 41 < M ? -14 : Q.G && M, Q.o)) {
          const {x:p, y:v, z} = Pb(P);
          F[4] = 0 | P.u;
          F[5] = 32767 * p;
          F[6] = 32767 * v;
          F[7] = 32767 * z;
          for (let W = 2, R = O(0), r = O(1); P.length > W; ++W) {
            w.push(R, r, r = O(W));
          }
        }
        Q.o = 0;
        Q.s = l;
        Q.D = l = w.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(y), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(A), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(B), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(w), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [Q, M, P, O, p] = JSON.parse(localStorage.DanteSP22,);
        d.map((v, z) => v.g = v.h = v.i = z ? 0 | Q[z] : 0);
        Na.map((v, z) => v.i = 0 | M[z]);
        Da = P;
        ha = p;
        c = O;
        da = 0;
      } catch {
      }
      Ab();
      ea = e(Da);
      Db(b);
    });
    const k = l => n(Math.sin(l / 10 * Math.PI), l / 10).rotateSelf(+l).scaleSelf(1.0001 - l / 10, 0, 1 - l / 10), q = qb(10, l => wb(ub(vb(18), k(l), K(1, 1, 0.8, 0.2)).reverse(), ub(vb(18), k(l + 1), K(1, 1, 0.8, 0.2)), 1,)).flat();
    N(() => L([Sa.slice(1),], n(-2).scale3d(3).rotate(90, 0)), 0);
    N(() => {
      const l = g => N(() => {
        Sa.map(({x:u, z:D}) => {
          L(G(11, 1), n(4 * u, 4, g + 4 * D).scale(0.8, 3, 0.8), K(0.5, 0.3, 0.7, 0.6),);
          L(G(), n(4 * u, 7, g + 4 * D).scale(1, 0.3), K(0.5, 0.5, 0.5, 0.3));
        });
        L(U(x(G(), n(0, 0, g).scale(5, 1, 5), K(0.8, 0.8, 0.8, 0.3),), ...[-1, 1,].map(u => x(G(), n(5 * u, 0.2, g).rotate(-30 * u).scale(4, 1, 2), K(0.8, 0.8, 0.8, 0.3),)),),);
        L(G(), n(0, -3, g).scale(8, 2, 8), K(0.4, 0.4, 0.4, 0.3));
      }), w = g => U(x(G(), n(0, -g / 2).scale(6, g - 1, 2.2)), x(G(), n(0, -g / 2 - 6).scale(4, g - 3, 4)), x(G(32, 1), n(0, g / 2 - 9).rotate(90, 0, 90).scale3d(4)),), y = () => N(() => qb(7, g => L(x(G(6, 1), n(4 * (g / 6 - 0.5), 3).scale(0.2, 3, 0.2), K(0.3, 0.3, 0.38),),))), B = U(x(G(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), K(0.7, 0.4, 0.25, 0.7),), x(G(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), K(0.7, 0.4, 0.25, 0.2),), x(G(), n(4, -1.2).scale3d(2), K(0.7, 0.4, 0.25, 0.3)),), A = (N(() => 
      {
        L(B);
        Mb(n(0, -3, 4));
      }), Mb(n(-5.4, 1.5, -19).rotate(0, -90)), Nb(n(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]), Nb(n(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...vb(18).map(({x:g, z:u}) => [7 * g, 10 * u, 4.5 - 2 * $a(g),]),), [-15, 15,].map((g, u) => {
        y();
        y();
        L(G(), n(0, 6.3, g).scale(4, 0.3, 1), K(0.3, 0.3, 0.3, 0.4));
        L(G(), n(0, 1, g).scale(3, 0.2, 0.35), K(0.5, 0.5, 0.5, 0.3));
        L(G(), n(0, 0, u ? 22 : -23).scale(3, 1, 8), K(0.9, 0.9, 0.9, 0.2));
        qb(5, D => L(q, n(18.5 * (u - 0.5), 0, 4.8 * D - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2),));
      }), L(G(), n(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), K(0.8, 0.8, 0.8, 0.2)), L(G(), n(3, 1.5, -20).scale(0.5, 2, 5), K(0.7, 0.7, 0.7, 0.2)), L(G(), n(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), K(0.75, 0.75, 0.75, 0.2),), L(G(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), K(0.6, 0.3, 0.3, 0.4),), L(U($b(x(G(6, 0, 0, 0.3), n(8, -3, -4).scale(13, 1, 13), K(0.7, 0.7, 0.7, 0.2),), U(x(G(6, 0, 0, 0.3), n(0, -0.92).scale(13, 2, 13), K(0.8, 0.8, 0.8, 0.2),), x(G(), m.rotate(0, 60).translate(14, 
      0.5, -1).scale(2.4, 5, 2).rotate(-4), K(0.5, 0.5, 0.5, 0.5),),), x(G(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5,), K(0.8, 0.2, 0.2, 0.5),), x(G(6), n(0, -8).scale(9, 8, 7), K(0.2, 0.1, 0.4, 0.5)),), x(G(5), m.scale(5, 30, 5), K(0.4, 0.2, 0.6, 0.5)), x(G(5, 0, 1.5), n(0, 1).scale(4.5, 0.3, 4.5), K(0.7, 0.5, 0.9, 0.2),), x(G(6), n(15, -1.5, 4).scale(3.5, 1, 3.5), K(0.5, 0.5, 0.5, 0.5),),),), N(() => {
        L(G(5), n(0, -0.2).scale(5, 1, 5), K(0.6, 0.65, 0.7, 0.3));
        Mb(n(0, 1.2));
      }), Mb(n(15, -2, 4)), N(() => {
        L(U($b(x(G(), m.scale(1.5, 1, 5), K(0.9, 0.9, 0.9, 0.2)), x(G(6), m.scale(4, 1, 5), K(0.9, 0.9, 0.9, 0.2)), x(G(), n(0, -2).scale(2, 3.2, 1.9), K(0.3, 0.8, 0.5, 0.5),), x(G(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), K(0.9, 0.9, 0.9, 0.2),),), x(G(), m.scale(1.3, 10, 1.3), K(0.2, 0.7, 0.4, 0.6)),), n(0, 0, 45),);
        Nb(n(0, 2.8, 45), [0, 0, 4.5,]);
      }), l(35), l(55), L(G(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), K(0.9, 0.9, 0.9, 0.2)), N(() => {
        L(G(3), n(-23, -1.7, 55.8).scale(5, 0.7, 8.3), K(0.3, 0.6, 0.6, 0.2));
        L(G(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), K(0.8, 0.8, 0.8, 0.2));
        L(G(), n(-23, -3, 55).scale(5.2, 1.7, 3), K(0.5, 0.5, 0.5, 0.3));
        L(G(), n(-23, -2.2, 62).scale(3, 1, 4), K(0.5, 0.5, 0.5, 0.3));
        Mb(n(-23, -0.5, 66.5));
      }), N(() => {
        L(G(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), K(0.7, 0.7, 0.7, 0.2));
        L(U(x(G(), m.scale(3, 1.4, 2.7)), x(G(), m.scale(1.2, 8, 1.2)),), n(-33, -3, 55), K(0.7, 0.7, 0.7, 0.2),);
      }), N(() => {
        L(U(x(G(), n(-27, -3, 55).scale(3, 1.4, 2.7), K(0.9, 0.9, 0.9, 0.2),), x(G(), n(-27, -3, 55).scale(1, 3), K(0.9, 0.9, 0.9, 0.2)),),);
        L(G(), n(-39, -3, 55).scale(3, 1.4, 2.7), K(0.9, 0.9, 0.9, 0.2));
      }), N(() => {
        L(G(6), n(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), K(0.7, 0.7, 0.7, 0.4),);
      }), Mb(n(-55, -1.1, 46).rotate(0, 90)), L(G(7), n(-57, -2.6, 46).scale(4, 1, 4), K(0.8, 0.8, 0.8, 0.3)), L(G(6), n(-61.3, -2.4, 49).scale(3, 1, 5), K(0.4, 0.6, 0.6, 0.3)), [...x(G(), n(0, -3).scale(11, 1.4, 3), K(0.9, 0.9, 0.9, 0.2)), ...x(G(), n(0, -2.2).scale(7.7, 0.5, 4), K(0.5, 0.5, 0.5, 0.2),), ...U(x(G(6), m.rotate(90).scale(6, 8, 6), K(0.3, 0.6, 0.6, 0.3)), x(G(4, 0, 0.01), n(0, 6).scale(12, 2, 0.75).rotate(0, 45), K(0.3, 0.6, 0.6, 0.3),), x(G(6), m.rotate(90).scale(5, 12, 5), K(0.3, 
      0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(g => x(G(5), n(g, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), K(0.3, 0.6, 0.6, 0.3),)),),]), F = (N(() => L(A), 2), L(A, n(-53, 0, 55)), L(G(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), K(0.7, 0.7, 0.7, 0.2),), L(G(3, 0, -0.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), K(0.8, 0.8, 0.8, 0.2),), L(U($b(x(G(), n(-100, -2.4, 55).scale(8, 0.9, 8), K(0.8, 0.8, 0.8, 0.2),), x(G(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), K(0.8, 0.8, 
      0.8, 0.2),), x(G(), n(-100, -2.6, 70).scale(3, 1.1, 7), K(0.8, 0.8, 0.8, 0.2),), x(G(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), K(0.8, 0.8, 0.8, 0.2),), x(G(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), K(0.6, 0.6, 0.6, 0.3),), x(G(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), K(0.8, 0.8, 0.8, 0.2),), x(G(), n(-100, 0.42, 92).scale(3, 1.1, 4.1), K(0.8, 0.8, 0.8, 0.2),),), x(G(8), n(-100, -1, 55).scale(7, 0.9, 7), K(0.3, 0.3, 0.3, 0.4),), x(G(8), n(-100, -2, 
      55).scale(4, 0.3, 4), K(0.4, 0.4, 0.4, 0.5),), x(G(8, 0, -3.1), n(-100, -3, 55).scale(0.4, 1, 0.4), K(0.4, 0.4, 0.4, 0.5),),),), Nb(n(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]), Nb(n(-89, 0.2, 80), [0, 0, 6,]), L(U(x(G(), n(-100, 1, 63).scale(7.5, 4), K(0.5, 0.5, 0.5, 0.4)), x(G(), n(-100, 0, 70).scale(2, 2, 10), K(0.5, 0.5, 0.5, 0.4),), x(G(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), K(0.5, 0.5, 0.5, 0.4),),),), Sa.map(({x:g, z:u}) => {
        L(G(6), n(3 * g, 3, 15 * u).scale(0.7, 4, 0.7), K(0.6, 0.3, 0.3, 0.4));
        L(G(6), n(7 * g - 100, -3, 7 * u + 55).scale(1, 8.1), K(0.6, 0.15, 0.15, 0.8),);
        [4, -0.4,].map(D => L(G(6), n(7 * g - 100, D, 7 * u + 55).scale(1.3, 0.5, 1.3), K(0.4, 0.2, 0.2, 0.8),));
        L(G(14, 1), n(9 * g - 38.9, -7.3, 11 * u + 17).scale(1, 4), K(0.25, 0.25, 0.25, 1),);
        [1.5, 8,].map(D => L(G(17, 1), n(9 * g - 38.9, D - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), K(0.6, 0.6, 0.6, 0.3),));
      }), qb(7, g => {
        L(G((23 * g + 1) % 5 + 5, 0, 0.5), n(5 * Math.sin(g) - 101 + g, -2.3 - g, 44.9 - 2.8 * g).scaleSelf(5 + g / 2, 1 + g / 6, 5 + g / 3,), K(0.5 - g / 17, 0.5 - (1 & g) / 9, 0.6, 0.3),);
      }), L(G(), n(-87, -9.5, 24).scale(7, 1, 3), K(0.4, 0.5, 0.6, 0.4)), L(G(4), n(-86, -9.2, 27).scale(5, 1, 5), K(0.5, 0.6, 0.7, 0.3)), L(G(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), K(0.3, 0.3, 0.4, 0.1)), Mb(n(-86, -7.5, 31)), N(() => {
        [0, 12, 24,].map(g => L(G(), n(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), K(0.2, 0.5, 0.6, 0.2),));
      }), N(() => {
        [6, 18,].map(g => L(G(), n(g - 76.9, g / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), K(0.1, 0.4, 0.5, 0.2),));
      }), L(U($b(x(G(5), n(0, 0, -7).scale(2, 1.2, 2), K(0.2, 0.4, 0.7, 0.3),), x(G(5), m.scale(9, 1.2, 9), K(0, 0.2, 0.3, 0.5)), x(G(), m.scale(11, 1, 13), K(0.3, 0.4, 0.6, 0.3)),), x(G(5), m.scale(5.4, 5, 5.4), K(0, 0.2, 0.3, 0.5)),), n(-38.9, -11.3, 17),), Mb(n(-38.9, -9.6, 10)), N(() => {
        L(U($b(x(G(5), n(0, 2).scale(5, 7, 5).skewY(8), K(0.2, 0.4, 0.5, 0.5),), x(G(5), n(0, 6).scale(1.1, 7, 1.1).skewY(-8), K(0.25, 0.35, 0.5, 0.5),), x(G(5), n(0, 9).scale(0.6, 7, 0.6).skewY(8), K(0.35, 0.3, 0.5, 0.5),),), x(G(5), m.scale(4, 8, 4), K(0.2, 0.4, 0.5, 0.5)), x(G(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), K(0.2, 0.4, 0.5, 0.5),),), n(-38.9, -11.3, 17),);
        Nb(n(-39.1, -0.6, 17).rotate(11), ...vb(15).map(({x:g, z:u}) => [3 * g, 3 * u, 1.2,]),);
      }), L(U($b(x(G(6), n(0, 0, -18).scale(15, 1.2, 15), K(0.7, 0.7, 0.7, 0.3),), x(G(), m.scale(4, 1.2, 6), K(0.45, 0.4, 0.6, 0.3)),), ...qb(6, g => qb(6, u => x(G(6), n(4.6 * u - 12 + 2 * (1 & g), 0, 4.6 * g + 2 * Math.sin(4 * u) - 32).scale(2, 5, 2), K(0.7, 0.7, 0.7, 0.3),))).flat(),), n(-38.9, -11.3, -1),), Nb(n(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]), L(G(5), n(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), K(0.8, 0.1, 0.25, 0.4),), Mb(n(-84, -0.5, 85).rotate(0, 45)), N(() => 
      {
        L(B);
        Mb(n(0, -3, -4).rotate(0, 180));
      }), U(x(G(), n(0, -0.5, 1).scale(1.15, 1.2, 6.5), K(0.25, 0.25, 0.35, 0.3),), U(x(G(3), n(0, 0, -5.5).scale(3, 2), K(0.6, 0.3, 0.4, 0.3)), x(G(), n(0, 0, -3.65).scale(2.5, 3), K(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(g => x(G(), n(1.2 * g, -0.5, 1).scale(0.14, 0.3, 6.5), K(0.7, 0.2, 0, 0.3),)),));
      N(() => qb(2, g => L(F, n(9 * g - 110 + (1 & g), 1.9, -12))));
      N(() => qb(2, g => L(F, n(9 * (g + 2) - 110 + (1 & g), 1.9, -12))));
      N(() => qb(3, g => L(F, n(9 * g - 106, 1.9, -12))));
      qb(3, g => {
        L(w(16), n(12 * g - 109, -9, -12), K(0.6, 0.6, 0.6, 0.3));
        L(w(16), n(-77, -9, -12 * g - 20).rotate(0, 90), K(0.6, 0.6, 0.6, 0.3),);
      });
      L(U($b(x(G(), n(26.5, -1.6, 10).scale(20, 2.08, 3)), x(G(), n(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...qb(4, g => x(G(), n(13 + 9 * g + (1 & g), -0.8, 9).scale(1.35, 1.35, 9)),), ...qb(3, g => x(G(), n(17 + 9 * g, -0.8, 9).scale(1.35, 1.35, 9)),),), n(-123, 0.2, -12), K(0.5, 0.5, 0.6, 0.2),);
      Mb(n(-116, -1.4, -18).rotate(0, 180));
      L(G(6), n(-116, -2.6, -16.5).scale(3.2, 0.8, 3), K(0.6, 0.5, 0.7, 0.2));
      L(G(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), K(0.8, 0.8, 0.8, 0.2),);
      L(G(), n(-115.5, -17, -12).scale(0.5, 15, 2.2), K(0.6, 0.6, 0.6, 0.3));
      L(G(8), n(-114, -17, -2).scale(2, 15, 2), K(0.6, 0.6, 0.6, 0.3));
      L(G(8), n(-79, -17, -2).scale(2, 15, 2), K(1, 1, 1, 0.3));
      L(G(), n(-77, -17, -50.5).scale(2.2, 15, 0.5), K(0.6, 0.6, 0.6, 0.3));
      L(U(x(G(12), n(-77, -14.5, -12).scale(4, 17.5, 4), K(0.7, 0.7, 0.7, 0.2),), x(G(12), n(-77, 3.1, -12).scale(3, 5, 3), K(0.4, 0.5, 0.6, 0.2),), x(G(), n(-79, 0.1, -12).scale(3.5, 2, 1.3), K(0.4, 0.5, 0.6, 0.2),), x(G(), n(-77, 0.1, -14).scale(1.5, 2, 2), K(0.4, 0.5, 0.6, 0.2),),),);
      L(G(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), K(0.6, 0.6, 0.6, 0.3),);
      L(G(9), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), K(0.5, 0.5, 0.5, 0.3));
      L(U(x(G(), n(-93, -5.8, -40).scale(9, 1, 5), K(0.8, 0.8, 0.8, 0.1),), x(G(9), n(-98, -5.8, -40).scale(3, 8, 3), K(0.7, 0.7, 0.7, 0.2),),),);
      Mb(n(-98, -4.4, -40).rotate(0, 90));
      Nb(n(-115, 0.2, -12), [0, 0, 3.5,]);
      Nb(n(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
      L(U($b(x(G(6, 0, 0, 0.6), n(-100, 0.7, 105.5).scale(8, 1, 11), K(0.7, 0.7, 0.7, 0.2),), x(G(), n(-101.5, 0.7, 93.5).scale(10.5, 1, 2), K(0.7, 0.7, 0.7, 0.2),),), x(G(5), n(-100, 0.7, 113).scale(4, 3, 4), K(0.7, 0.7, 0.7, 0.2),),),);
      qb(4, g => N(() => L(G(6), n(-14.6 - 4.8 * g - (2 < g ? 2 : 0), -g / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), K(0.5 - g / 8, g / 12 + 0.5, 0.7, 0.3),)),);
      N(() => {
        L(U(x(G(10), m.scale(6, 2, 6), K(0.1, 0.6, 0.5, 0.3)), x(G(10), m.scale(3.3, 6, 3.3), K(0.1, 0.6, 0.5, 0.5)),),);
        L(G(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), K(0.4, 0.4, 0.4, 0.3),);
        L(G(10), n(-7.5).rotate(0, 90).scale(2, 2.5, 2), K(0.3, 0.8, 0.7, 0.3));
        L(G(5), n(-7.5).rotate(0, 90).scale(1, 3), K(0.5, 0.5, 0.5, 0.5));
        Mb(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
        [-1, 1,].map(g => L(q, m.rotate(90 * g, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3),));
        Nb(n(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
      });
      [-1, 1,].map(g => {
        [7.2, 1.5,].map(u => L(G(15, 1), n(-7.5 * g - 100, u + 0.7, 96).scale(1.1, 0.5, 1.1), K(0.5, 0.24, 0.2, 0.4),));
        L(q, n(-5 * g - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * g - 90),);
        L(G(12, 1), n(-7.5 * g - 100, 3.7, 96).scale(0.8, 4, 0.8), K(0.6, 0.24, 0.2, 0.5),);
        L(U(x(G(), n(-4 * g, 3.5, -0.5).scale(4, 4, 0.7), K(0.5, 0.5, 0.5, 0.4),), x(G(), m.scale(3, 3, 10), K(0.6, 0.24, 0.2, 0.5)), x(G(28, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), K(0.6, 0.24, 0.2, 0.5),), x(G(5), n(-5.3 * g, 7).rotate(90, 0).scale(1.7, 5, 1.7), K(0.6, 0.24, 0.2, 0.5),), x(G(5), n(-5.3 * g, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), K(0.6, 0.24, 0.2, 0.5),),), n(g - 100, 0.7, 97),);
      });
      N(() => {
        L(U(x(G(45, 1), m.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2)), x(G(), n(0, 0, -5.5).scale(1.5, 3, 2.7), K(0.45, 0.45, 0.45, 0.2),),),);
        L(G(8), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), K(0.7, 0.7, 0.7, 0.1));
        L(G(5), n(0, 2).scale(1, 2), K(0.3, 0.3, 0.3, 0.2));
        Nb(n(0, 3), ...vb(14).map(({x:g, z:u}) => [5.6 * g, 5.6 * u, 2,]),);
      });
      N(() => {
        [-1, 1,].map(g => L(q, m.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90),));
        L(U(x(G(28, 1), n(0, 2).scale(7.5, 1, 7.5), K(0.35, 0, 0, 0.3),), x(G(), m.scale(9, 5, 2), K(0.3, 0, 0, 0.3)),),);
        L(x(G(28, 1), m.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2)),);
        L(x(G(5), n(0, 1).scale(1, 0.2), K(0.3, 0.3, 0.3, 0.2)),);
      });
      N(() => {
        L(U(x(G(28, 1), n(0, 2).scale(7.5, 1, 7.5), K(0.35, 0, 0, 0.3),), x(G(), n(7).scale(9, 5, 2), K(0.3, 0, 0, 0.3)), x(G(), n(0, 0, 7).scale(2, 5, 9), K(0.3, 0, 0, 0.3)),),);
        L(x(G(28, 1), m.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2)),);
        L(x(G(5), n(0, 1).scale(1, 0.2), K(0.3, 0.3, 0.3, 0.2)),);
      });
      N(() => {
        L(U(x(G(28, 1), n(0, 2).scale(7.5, 1, 7.5), K(0.35, 0, 0, 0.3),), x(G(), n(7).scale(9, 5, 2), K(0.3, 0, 0, 0.3)), x(G(), n(0, 0, -7).scale(2, 5, 9), K(0.3, 0, 0, 0.3)),),);
        L(x(G(28, 1), m.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2)),);
        L(x(G(5), n(0, 1).scale(1, 0.2), K(0.3, 0.3, 0.3, 0.2)),);
      });
      L(U(x(G(), n(-82.07, 0.8, 106).scale(11, 0.9, 2.2), K(0.7, 0.7, 0.7, 0.1),), x(G(45, 1), n(-81, 0.7, 106).scale3d(7.7), K(0.7, 0.7, 0.7, 0.1),),),);
      L(G(), n(-58, 1, 106).scale(2, 0.65, 2), K(0.7, 0.7, 0.7, 0.2));
      L(G(), n(-50.7, 1, 99).scale(2, 0.65, 1), K(0.7, 0.7, 0.7, 0.2));
      L(G(), n(-42, 0.4, 91).scale(5, 1, 2.5), K(0.7, 0.7, 0.7, 0.3));
      L(G(), n(-34.2, 0.4, 91).scale(3, 1, 3), K(0.7, 0.7, 0.7, 0.3));
      L(G(5), n(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), K(0.2, 0.5, 0.5, 0.6),);
      Mb(n(-34, 2.7, 96).rotate(-12, 0));
      [K(0.1, 0.55, 0.45, 0.2), K(0.2, 0.5, 0.5, 0.3), K(0.3, 0.45, 0.55, 0.4),].map((g, u) => N(() => {
        L(G(), n(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), g);
        2 === u && L(G(), n(-29.1, 0.4, 91).scale(2.1, 1, 3), K(0.7, 0.7, 0.7, 0.3));
        1 === u && L(G(), n(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), K(0.6, 0.6, 0.7, 0.3),);
      }));
      [-1, 1,].map(g => L(q, n(-8 * g, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90)));
      qb(3, g => L(w(24.7 - 0.7 * (1 & g)), n(6 * g - 6, 4 - (1 & g), 111 - 0.2 * (1 & g)), 1 & g ? K(0.5, 0.5, 0.5, 0.3) : K(0.35, 0.35, 0.35, 0.5),));
      L(U(x(G(6, 0, 0, 0.3), n(0, -0.92, 95).scale(14, 2, 14), K(0.8, 0.8, 0.8, 0.2),), x(G(5), n(0, 0, 95).scale3d(6), K(0.3, 0.3, 0.3, 0.5)),),);
      Mb(n(0, 1.7, 82).rotate(0, 180));
      L(G(5), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), K(0.5, 0.3, 0.3, 0.4),);
      L(G(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), K(0.5, 0.6, 0.7, 0.3),);
      L(G(), n(0, 16, 129).scale(1.5, 1, 2), K(0.5, 0.6, 0.7, 0.3));
      L(G(7), n(0, 16.2, 133).scale(5, 1, 5), K(0.4, 0.5, 0.6, 0.4));
      L(U($b(x(G(), n(0, 16, 110.5).scale(12, 1, 3), K(0.5, 0.3, 0.3, 0.4),), x(G(), n(0, 16, 111).scale(3, 1, 3.8), K(0.5, 0.3, 0.3, 0.4),),), x(G(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), K(0.5, 0.3, 0.3, 0.4),),),);
      N(() => {
        L(G(3), n(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), K(0.5, 0.3, 0.3, 0.4),);
        [22, 30,].map(g => {
          L(G(6), n(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), K(0.7, 0.7, 0.7, 0.4),);
          L(G(), n(0, 6.2, g + 95).scale(0.5, 11, 0.5), K(0.5, 0.3, 0.3, 0.4),);
        });
      });
      N(() => {
        L(G(5), m.scale(5, 1.1, 5), K(0.5, 0.3, 0.3, 0.4));
        L(G(5), m.scale(5.5, 0.9, 5.5), K(0.25, 0.25, 0.25, 0.4));
        Mb(n(0, 1.5, -1).rotate(0, 180));
      });
      Nb(n(0, 3, 95), ...vb(9).map(({x:g, z:u}) => [9 * g, 9 * u, 4,]),);
      Nb(n(0, 19, 134), [0, 0, 3.5,]);
    });
    N(() => {
      L(xb(20), n(0, 1).scale3d(0.5), K(1, 0.3, 0.4));
      L(xb(30), m.scale(0.65, 0.8, 0.55), K(1, 0.3, 0.4));
      L(G(), n(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), K(0.3, 0.3, 0.3));
      [-1, 1,].map(l => {
        L(q, m.rotate(0, 0 < l ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), K(1, 1, 0.8),);
        L(x(U(G(15, 1), x(G(), n(0, 0, 1).scale(2, 2, 0.5)),), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), K(0.3, 0.3, 0.3),), n(0.2 * l, 1.2, 0.4).rotate(0, 20 * l, 20 * l),);
        N(() => {
          L(G(20, 1), n(0.3 * l, -0.8).scale(0.2, 0.7, 0.24), K(1, 0.3, 0.4));
        });
      });
    });
    N(() => {
      L(G(6).slice(0, -1), m.scale(0.77, 1, 0.77), K(1, 0.3, 0.5));
    }, 0);
    N(() => {
      L(xb(30, 24, (l, w, y) => {
        const B = w / 24, A = l * Math.PI * 2 / 30, F = Math.sin(B ** 0.6 * Math.PI / 2);
        l = B * B * Math.sin(l * Math.PI * 14 / 30) / 4;
        return 23 < w ? {x:y.C = 0, y:-0.5, z:0,} : {x:Math.cos(A) * F, y:Math.cos(B * Math.PI) - B - l, z:Math.sin(A) * F + Math.sin(l * Math.PI * 2) / 4,};
      }), m.scale(0.7, 0.7, 0.7), K(1, 1, 1),);
      [-1, 1,].map(l => L(xb(12), n(0.16 * l, 0.4, -0.36).scale3d(0.09)));
    }, 0);
    N(() => {
      L(G(6, 1), m.scale(0.13, 1.4, 0.13), K(0.3, 0.3, 0.5, 0.1));
      L(G(10), n(0, 1).scale(0.21, 0.3, 0.21), K(1, 0.5, 0.2));
      L(G(3), n(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), K(0.2, 0.2, 0.2, 0.1),);
    }, 0);
  });
});

