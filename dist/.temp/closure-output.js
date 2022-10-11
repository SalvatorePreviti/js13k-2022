let ca, da, ea, ha, ia, la, ma, na, oa, pa, c, qa, sa, ta, ua, va, wa, d = 0, xa = 0, ya = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 13, Ja = 0.1;
const Ka = Math.PI / 180, La = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Ma = [], e = [], k = [], Na = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Sa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ta = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ua = 0, Va = 0, Wa = 0, Xa = 0, Ya = 180;
const Za = NO_INLINE(a => 0 > a ? -a : a), $a = NO_INLINE((a, b) => a < b ? a : b), ab = NO_INLINE((a, b) => b < a ? a : b), bb = (a, b) => Za(a) > b ? a : 0, cb = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, db = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka, eb = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * cb(g) || 0, fb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, gb = (a, b) => (a = cb(a), fb(a, 1 - a, b)), hb = (a, b, g = 0) => Math.sqrt(a * a + b * 
b + g * g), mb = (a = 0, b = 0, g = 0, h = 1) => {
  ib = l.m11 * a + l.m21 * b + l.m31 * g + l.m41 * h;
  jb = l.m12 * a + l.m22 * b + l.m32 * g + l.m42 * h;
  kb = l.m13 * a + l.m23 * b + l.m33 * g + l.m43 * h;
  lb = l.m14 * a + l.m24 * b + l.m34 * g + l.m44 * h;
};
var ib, jb, kb, lb;
const ob = (a, b = nb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), pb = (a = m, b = l,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), y = NO_INLINE((a, b, g) => m.translate(a, b, g)), E = (a, b) => Array.from(Array(a), (g, h) => b(h)), qb = (a, b, g) => (a.C = g, a.u = b, a), rb = (a, b, g = a.u,) => (pb(b), qb(a.map(({x:h, y:p, z:n}) => (mb(h, p, n), {x:ib, y:jb, z:kb,})), g, a.C,)), I = (a, b, g) => a.map(h => rb(h, b, g)), sb = (a, b = 0) => E(a, g => {
  const h = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Za(h) ? h : 0 > h ? h - b : h + b,};
}), vb = (a, b, g) => a.map((h, p, {length:n}) => qb([h, b[n - p - 1], b[n - (p + 1) % n - 1], a[(p + 1) % n],], a.u, g,)), L = (a, b, g = 0, h,) => (a = a ? sb(a, h) : Na, h = rb(a, y(0, 1).scale3d(0 < g ? g : 1)), a = rb(a, y(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...vb(a, h, b), h, a,]), wb = (a, b = a, g = (h, p) => (p *= Math.PI / b, {x:Math.cos(h *= 2 * Math.PI / a) * Math.sin(p), y:Math.cos(p), z:Math.sin(h) * Math.sin(p),})) => {
  const h = [];
  for (let p = 0; a > p; p++) {
    for (let n = 0; b > n; n++) {
      const x = qb([], 0, 1);
      h.push(x);
      x.push(g(p, n, x));
      n && x.push(g((p + 1) % a, n, x));
      b - 1 > n && x.push(g((p + 1) % a, n + 1 % b, x));
      x.push(g(p, n + 1 % b, x));
    }
  }
  return h;
}, xb = NO_INLINE(a => 1 - Math.exp(-ya * a)), N = NO_INLINE((a, b, g) => fb(a, b, xb(g))), yb = (a, b, g, h) => new DOMMatrix([g, 0, 0, 0, 0, h, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), zb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Cb = a => Math.sin(a * Math.PI * 2), Db = a => 0.5 > a % 1 ? 1 : -1, Eb = a => a % 1 * 2 - 1, Fb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Gb = a => {
  let b = 0;
  const g = () => {
    let n = 0;
    const x = M => {
      let O, aa, Oa, ja = 0, ka = 0;
      const ba = [], ra = new Int32Array(768 * M), cc = 2 ** (z - 9) / M, dc = Math.PI * 2 ** (u - 8) / M, Ab = C * M & -2;
      for (let tb = 0; 11 >= tb; ++tb) {
        for (let ub = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + tb]; 32 > ub; ++ub) {
          const Pb = (32 * tb + ub) * M;
          for (var Pa = 0; 4 > Pa; ++Pa) {
            if (O = 0, Ob && (O = A[Ob - 1].charCodeAt(ub + 32 * Pa) - 40, O += 0 < O ? 106 : 0), O) {
              var fa;
              if (!(fa = ba[O])) {
                fa = O;
                let W = void 0, za = void 0;
                var Qb = O;
                let ec = 0, fc = 0;
                const gc = 2 > b ? Eb : Cb, hc = 2 > b ? 1 > b ? Db : Fb : Cb, Rb = new Int32Array(S + T + Q);
                for (let Qa = 0, Bb = 0; S + T + Q > Qa; ++Qa, ++Bb) {
                  let Ra = 1;
                  S > Qa ? Ra = Qa / S : S + T > Qa || (Ra = (1 - (Ra = (Qa - S - T) / Q)) * 3 ** (-v / 16 * Ra));
                  0 > Bb || (Bb -= 4 * M, za = 0.00396 * 2 ** ((Qb + r - 256) / 12), W = 0.00396 * 2 ** ((Qb + B - 256) / 12) * (1 + (b ? 0 : 0.0072)));
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
            var Aa = (((W = ra[fa]) || Oa) && (aa = 0.00308 * F, 1 !== b && 4 !== b || (aa *= Math.sin(cc * fa * Math.PI * 2) * K / 512 + 0.5), aa = 1.5 * Math.sin(aa), ja += aa * ka, Aa = (1 - R / 255) * (W - ka) - ja, ka += aa * Aa, W = 4 === b ? ka : 3 === b ? Aa : ja, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= D / 32, Oa = 1e-5 < W * W, Aa = Math.sin(dc * fa) * q / 512 + 0.5, Pa = W * (1 - Aa), W *= Aa), fa < Ab || (Pa += ra[1 + fa - Ab] * 
            w / 255, W += ra[fa - Ab] * w / 255), n + fa >> 1);
            h[Aa] += (ra[fa] = Pa) / 65536;
            p[Aa] += (ra[++fa] = W) / 65536;
          }
        }
      }
      n += 768 * M;
    }, A = Sa[b], [f, r, J, H, B, G, V, S, T, t, v, z, F, R, D, q, u, w, C, K] = Ta[b], Q = 4 * t ** 2;
    x(5513);
    x(4562);
    x(3891);
    zb(5 > ++b ? g : a);
  }, h = (ea = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), p = ea.getChannelData(1);
  zb(g);
}, Hb = () => {
  let a, b, g, h, p, n, x, A, f, r, J, H, B, G, V, S, T = !0;
  const t = [], v = () => {
    b4.innerHTML = "Music: " + T;
    S && (da || !T ? S.disconnect() : S.connect(V.destination));
  }, z = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ma = [yb(0.3, 55, q, 1.732051), yb(55, 181, q, 1.732051),];
    la = yb(0.3, 181, q, 1.732051);
    h = A = void 0;
    t.length = ha = G = H = B = Ba = Ca = 0;
    document.hidden && F(!0);
  }, F = q => {
    if (da !== q) {
      if (da = q, z(), document.body.className = q ? "l m" : "l", q) {
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
    F(!1);
    ia = q;
  }, D = (q, u) => q.buttons[u]?.pressed || 0 < q.buttons[u]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    R();
  };
  b2.onclick = () => {
    R(1);
  };
  b5.onclick = () => F(!0);
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
    let u;
    q.repeat || (u = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (t[u] = !!q.type[5] && !0) && (0 === u && (ha = 1), 1 === u && F(!0)));
  };
  onmousemove = ({movementX:q, movementY:u}) => {
    ia && (q || u) && (Ya += 0.1 * q, Xa += 0.1 * u);
  };
  hC.ontouchstart = q => {
    if (!da) {
      for (let {pageX:u, pageY:w, identifier:C} of q.changedTouches) {
        ia && u > hC.clientWidth / 2 ? void 0 === A && (f = 0, n = u, x = w, A = C, J = Xa, r = Ya) : void 0 === h && (p = 0, b = u, g = w, h = C);
      }
      a = xa;
    }
  };
  hC.ontouchmove = q => {
    if (!da) {
      for (let {pageX:Q, pageY:M, identifier:O} of q.changedTouches) {
        var u, w, C, K;
        A === O && (Xa = J + (M - x) / 2.3, Ya = r + (Q - n) / 2.3, f = 1);
        h === O && (O = (b - Q) / 20, u = Za(O), w = (g - M) / 20, C = Za(w), (K = 0.5 < ab(u, C)) && (p = 1), H = (K && 0.3 < u) * cb(O, -1), B = (K && 0.3 < C) * cb(w, -1), 2 < u && (b = 20 * (0 > O ? -1 : 1) + Q), 2 < C && (g = 20 * (0 > w ? -1 : 1) + M));
      }
    }
  };
  hC.ontouchend = q => {
    let u;
    document.activeElement === document.body && q.preventDefault();
    for (const w of q.changedTouches) {
      w.identifier === A ? (A = void 0, f || (u = 1), f = 0) : w.identifier === h ? (h = void 0, B = H = 0, p || (u = 1), p = 0) : u = 1;
    }
    q.target === hC && u && a && 0.02 < (q = xa - a) && 0.7 > q && (ha = 1);
  };
  na = () => {
    Ba = B + (t[4] ? 1 : 0) - (t[5] ? 1 : 0);
    Ca = H + (t[2] ? 1 : 0) - (t[3] ? 1 : 0);
    let q = navigator.getGamepads()[0];
    q && (ia && (Xa += ya * bb(q.axes[3], 0.3) * 80, Ya += ya * bb(q.axes[2], 0.3) * 80), Ba += D(q, 12) - D(q, 13) - bb(q.axes[1], 0.2), Ca += D(q, 14) - D(q, 15) - bb(q.axes[0], 0.2), D(q, 9) && F(!0), (q = D(q, 3) || D(q, 2) || D(q, 1) || D(q, 0)) && !G && (ha = 1), G = q);
  };
  document.onvisibilitychange = onblur = onresize = z;
  F(!0);
}, Ib = (a, b) => {
  1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
}, Jb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Da = Ma.reduce((a, b) => a + b.i, 0)] + " / XIII";
}, Kb = () => {
  localStorage.spdnt22 = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Ia, d, pa,]);
}, P = NO_INLINE((a, b, g, h = 0) => 255 * h << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), U = () => {
  const a = [];
  c = (b, g = new DOMMatrix(), h) => a.push(...I(b, g, h));
  k.push({m:new DOMMatrix(), o:a,});
}, Lb = a => {
  const b = k.at(-1).m, g = e.length, h = {i:0, g:0, h:0, m:b, G:a, F() {
    h.g = N(h.g, h.i, 4);
    h.h = N(h.h, h.i, 1);
    pb(b).multiplySelf(a);
    ha && 3 > (mb(), hb(Ua - ib, Va - jb, Wa - kb,)) ? h.i ? 0.7 < h.g && (h.i = 0, (Ia = g) && Ib("* click *", 1), Kb()) : 0.3 > h.g && (h.i = 1, (Ia = g) && Ib("* click *", 1), Kb()) : h.i && 0.8 < h.g && 13 === g && (h.i = 0, 13 > Da ? Ib("Not leaving now, there are souls to catch!", 3) : Ea || (Ib("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Ea = 1));
    l.rotateSelf(50 * h.g - 25, 0).translateSelf(0, 1).m44 = h.g;
  },};
  e.push(h);
  c(L(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
  c(L(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
  c(L(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), P(0.5, 0.5, 0.4));
}, Mb = (a, ...b) => {
  let g, h, p, n, x = 0, A = 0, f = 1, r = -1;
  const J = {i:0, F() {
    if (!J.i) {
      let v, z, F, R, D, q = 1, u = 1 / 0;
      for (let w = 0; b.length > w; w++) {
        const C = b[w];
        let K = hb(B - C[0], G - C[1]);
        q = $a(q, K / C[2]);
        0 > (K -= C[2]) ? D = 1 : u > K && (u = K, H = C);
      }
      D || (v = B - H[0], z = G - H[1], F = hb(v, z), R = Math.atan2(-z, v), f && (n = cb(n / (1 + Math.random())), A = (Math.random() - 0.5) * Math.PI / 2), R += A, r = -Math.cos(R), x = Math.sin(R), 0.1 < F && (F = $a(F, H[2]) / F, B = v * F + H[0], G = z * F + H[1]));
      f = D;
      n = N(n, 3 + 6 * (1 - q), 3 + q);
      V = N(V, B = N(B, B + r, n), n);
      S = N(S, G = N(G, G + x, n), n);
      g = eb(g, Math.atan2(V - h, S - p) / Ka - 180, xb(3),);
      pb(T).multiplySelf(a).translateSelf(h = V, 0, p = S).rotateSelf(0, g, 7 * Math.sin(1.7 * d));
      1.6 > (mb(), hb(Ua - ib, Va - jb, Wa - kb,)) && (J.i = 1, Ib([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Da] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Jb(), Kb());
    }
    J.i && pb(k[28].m).translateSelf(t % 4 * 1.2 - 1.7 + Math.sin(d + t) / 7, -2, 1.7 * (t / 4 | 0) - 5.5 + Za(t % 4 - 2) + Math.cos(d / 1.5 + t) / 6,);
  },};
  let H = b[0], [B, G] = H, [V, S] = H;
  const T = k.at(-1).m, t = Ma.length;
  Ma.push(J);
}, Nb = ({x:a, y:b, z:g}, h) => a * h.x + b * h.y + g * h.z, Sb = a => {
  let b, g = 0, h = 0, p = 0, n = a.at(-1);
  for (b of a) {
    g += (n.y - b.y) * (n.z + b.z), h += (n.z - b.z) * (n.x + b.x), p += (n.x - b.x) * (n.y + b.y), n = b;
  }
  return b = hb(g, h, p), g /= b, h /= b, p /= b, {x:g, y:h, z:p, w:g * n.x + h * n.y + p * n.z,};
}, Tb = (a, b) => {
  var g, h, p, n = b.B;
  for (var x = 0; n.length > x; ++x) {
    if (-0.00008 > (g = Nb(a, n[x]) - a.w) ? p = b : 8e-5 < g && (h = b), p && h) {
      h = [];
      p = [];
      n = b.B;
      x = b.v;
      let A = n.at(-1), f = Nb(a, A) - a.w;
      for (const r of n) {
        g = Nb(a, r) - a.w, 8e-5 > f && p.push(A), -0.00008 < f && h.push(A), (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g) && (f /= g - f, A = {x:A.x + (A.x - r.x) * f, y:A.y + (A.y - r.y) * f, z:A.z + (A.z - r.z) * f,}, h.push(A), p.push(A)), A = r, f = g;
      }
      return {l:2 < h.length && {B:qb(h, n.u, n.C), v:x, A:b,}, j:2 < p.length && {B:qb(p, n.u, n.C), v:x, A:b,},};
    }
  }
  return {l:h, j:p,};
}, Ub = (a, b, g = Sb(b.B)) => {
  let h, p;
  return a ? ({l:h, j:p} = Tb(a, b), h || p || a.o.push(b), h && (a.l = Ub(a.l, h, g)), p && (a.j = Ub(a.j, p, g))) : a = {x:g.x, y:g.y, z:g.z, w:g.w, o:[b,], l:0, j:0,}, a;
}, Vb = (a, b, g) => {
  const h = [], p = (n, x) => {
    let {l:A, j:f} = Tb(n, x);
    A || f || (0 < g * Nb(n, b) ? A = x : f = x);
    A && (n.l ? p(n.l, A) : h.push(A));
    f && n.j && p(n.j, f);
  };
  for (const n of b.o) {
    p(a, n);
  }
  return h;
}, Wb = (a, b) => a && (b(a), Wb(a.l, b), Wb(a.j, b)), Xb = a => (Wb(a, b => {
  const g = b.j;
  b.j = b.l;
  b.l = g;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const h of b.o) {
    h.v = !h.v;
  }
}), a), Yb = a => a.length ? a.reduce((b, g) => Ub(b, {B:g, v:0, A:0,}), 0) : a, Zb = (...a) => a.reduce((b, g) => {
  const h = [];
  if (b = Yb(b), g) {
    g = Yb(g);
    Wb(b, p => p.o = Vb(g, p, 1));
    Wb(g, p => h.push([p, Vb(b, p, -1),]));
    for (let [p, n] of h) {
      for (const x of n) {
        Ub(b, x, p);
      }
    }
  }
  return b;
}), X = (a, ...b) => {
  const g = n => {
    let x;
    return n.A && ((x = h.get(n.A)) ? (p.delete(x), n = g(n.A)) : h.set(n.A, n)), n;
  }, h = new Map(), p = new Map();
  return a = Xb(Zb(Xb(Yb(a)), ...b)), Wb(a, n => {
    for (const x of n.o) {
      p.set(g(x), x.v);
    }
  }), Array.from(p, ([{B:n}, x]) => {
    const A = n.map(({x:f, y:r, z:J}) => ({x:f, y:r, z:J,}));
    return qb(x ? A.reverse() : A, n.u, n.C);
  });
}, Y = (a, b = 0, g = 0) => {
  const h = k[++qa].m;
  return pb(m, h), h.m41 = a, h.m42 = b, h.m43 = g, h;
}, ac = () => {
  let a, b, g, h, p, n, x, A, f, r, J, H, B, G = 0, V = 0, S = 0, T = 0, t = 1, v = 2, z = 15;
  const F = () => pb((v ? e[Ia] : k[33 !== G ? G : 0]).m,), R = u => {
    1 < v ? (pb(e[Ia].m).multiplySelf(e[Ia].G), mb(0, 0.9 < Ia + oa ? 15 : 1, -2.4)) : (F(), mb(V, S, T));
    u && (p = (ib - Ua) / ya, n = (kb - Wa) / ya);
    Ua = ib;
    Va = jb;
    Wa = kb;
  }, D = () => {
    var u = 0, w = 0, C = 0, K = 0, Q = 0, M = 0, O = -1;
    for (var aa = 0; 36 > aa; ++aa) {
      var Oa = 512 * aa;
      for (var ja = 96; 416 > ja; ja += 4) {
        for (var ka = 0; 2 > ka; ++ka) {
          var ba = $b[Oa + ja + ka];
          const ra = $b[Oa + ja + ka + 2];
          ba > K && (K = ba);
          ba + ra && (0 > O || O === aa) && (O = aa, ra === r ? ++u : w && w !== ra || (w = ra, ++C));
        }
      }
    }
    r = 0 > O ? 0 : C > 2 * u ? w : r;
    for (u = 36; 128 > u; ++u) {
      aa = O = C = w = 0;
      Oa = 512 * u;
      for (ja = 0; 128 > ja; ++ja) {
        ka = Oa + 4 * ja, ba = $b[ka], 64 > ja ? ba > w && (w = ba) : ba > C && (C = ba), (ba = $b[2 + ka]) > O && (O = ba), ba = $b[1 + ka], 64 < ja ? ba > w && (w = ba) : ba > C && (C = ba), (ba = $b[3 + ka]) > aa && (aa = ba);
      }
      (C -= w) * C > Q * Q && (Q = C);
      (aa -= O) * aa > M * M && (M = aa);
    }
    Q *= 0.7;
    A = cb(1 - 0.01 * ab(Za(Q), Za(M)), 0.3);
    Q /= 255;
    K /= 255;
    M /= 255;
    F().invertSelf();
    mb(Q, K, M, 0);
    V += ib;
    S += K;
    T += kb;
    R();
  }, q = (u, w, C, K) => fb(u, w, t || (cb(Za(w - u) ** 0.5 - C) + 1 / 7) * xb(1.5 * K));
  sa = () => {
    R(r);
    Z.r9r(0, 0, 128, 128, 6408, 5121, $b);
    NO_INLINE(D)();
    !v && r === G || (G = r, F().invertSelf(), mb(Ua, Va, Wa), V = ib, S = jb, T = kb, v = v && (r ? 0 : 1));
    (-20 > Ua || 109 > Wa ? -25 : -9) > Va && (v = 2);
    1 === r && (e[14].i = -15 > Ua && 0 > Wa ? 1 : 0);
    f = fb(N(f, Va, 2), Va, v || 8 * Za(f - Va),);
    J = q(J, Ua, 0.5, 1);
    H = q(H, f, 2, 1);
    B = q(B, Wa, 0.5, 1);
    h = N(h, ta * (32 < r && 37 > r), 2,);
    ia ? (u = v + xb(18), Fa = fb(Fa, Ua, u), Ha = fb(Ha, Wa, u), Ga = fb(Ga, 1.6 + f, u), Ya = db(Ya)) : (Fa = q(Fa, J, 1, 2 + h,), Ha = q(Ha, B + -18 + 5 * h, 1, 2 + h,), Ga = q(Ga, ab(H + cb((-60 - Wa) / 8, 0, 20) + 13 + 9 * h, 6,), 4, 2,), u = $a(-6, -Za(B - Ha)), w = J - Fa, Ya = eb(Ya, 90 - db(Math.atan2(u, w) / Ka), t + xb(10),), Xa = eb(Xa, 90 - Math.atan2(hb(u, w), Ga - H) / Ka, t + xb(10),));
    Xa = cb(Xa, -87, 87);
    t = 0;
    var u = cb(Ba, -1), w = cb(Ca, -1), C = bb(hb(u, w) ** 0.5, 0.1);
    let K = Math.atan2(u, w);
    C && (a = 90 - K / Ka);
    b = eb(b, a, xb(8));
    g = N(g, C, 10);
    Y(Ua, 0.06 * A * g * Math.cos(18.2 * d) + f, Wa,).rotateSelf(0, b);
    for (var Q = 0; 2 > Q; ++Q) {
      const M = 9.1 * d - Math.PI * Q;
      pb(k[37].m, Y(0)).translateSelf(0, g * cb(0.45 * Math.sin(M - Math.PI / 2)),).rotateSelf(g * Math.sin(M) * 0.25 / Ka, 0);
    }
    z = r ? 5 : N(z, v ? 13 : 19 - 2 * $a(0, Va + 10), 2.2);
    p = r || v ? 0 : N(p, 0, 3);
    n = r || v ? 0 : N(n, 0, 3);
    u = (x = v ? 0 : N(x, r ? 7 * cb(2 * C) * A : 0, r ? 9 : 1,)) * C * Za(u) * Math.sin(K);
    w = x * C * Za(w) * Math.cos(K);
    K = ia ? (180 + Ya) * Ka : 0;
    C = ya * (p + (w * Math.cos(K) - Math.sin(K) * u));
    Q = ya * -z;
    u = ya * (n + (w * Math.sin(K) + Math.cos(K) * u));
    F().invertSelf();
    mb(C, Q, u, 0);
    V += ib;
    S += Q;
    T += kb;
    R();
  };
}, bc = a => {
  da ? 1100 < hC.width && Z.d97(4, k[39].D - k[37].s, 5123, 2 * k[37].s) : (void 0 !== a && Z.das(4, k[40].D - k[40].s, 5123, 2 * k[40].s, Ma.length,), Z.das(4, k[41].D - k[41].s, 5123, 2 * k[41].s, e.length,), Z.d97(4, (a ? k[39].D : k[37].s) - 3, 5123, 6));
}, ic = (a, b = 35633) => (b = Z.c6x(b), Z.s3c(b, a), Z.c6a(b), b), jc = (a, b) => {
  const g = {}, h = Z.c1h();
  return Z.abz(h, a), Z.abz(h, ic(b, 35632)), Z.l8l(h), p => p ? g[p] || (g[p] = Z.gan(h, p)) : Z.u7y(h);
}, l = new DOMMatrix(), m = new DOMMatrix(), nb = new Float32Array(16), kc = new Float32Array(760), $b = new Uint8Array(65536), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, g, h) => (b * h + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a];
}
zb(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const p = t => {
        requestAnimationFrame(p);
        var v = (t - (ca || t)) / 1e3;
        if (xa += v, d += ya = da ? 0 : $a(0.055, v), ca = t, 0 < ya) {
          v = F => F.translateSelf(Math.sin(d + 2) / 5, Math.sin(0.8 * d) / 4).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          na();
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          Ea && (ia = 0);
          oa = Ea ? N(oa, -9, 0.015) : N(oa, cb(d / 3), 1);
          pa = N(pa, e[13].h, 0.2 + 0.3 * Za(2 * e[13].h - 1),);
          t = (qa = 1, ta = gb(e[15].g, e[8].g), wa = fb(N(wa, 0, 1), db(wa + 60 * ya), e[2].g - e[3].h,), ua = fb(N(ua, 0, 5), db(ua + 56 * ya), ta,), va = fb(N(va, 0, 4), db(va + 48 * ya), ta,), Y(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g),).translateSelf(0), $a(1 - e[11].h, e[10].h));
          var z = (Y(t * Math.sin(0.6 * d + 1.2) * 12, 0, 35), Y(t * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), Y(t * Math.sin(0.6 * d) * 12, 0, 45), Y(9.8 * (1 - t)), t = cb(1 - 5 * t) * gb(e[11].g, e[2].g), Y(0, t * Math.sin(1.35 * d) * 4), Y(0, 0, t * Math.sin(0.9 * d) * 8), Y(0, -6.5 * e[11].h), t = gb(e[4].h, e[3].h), Y(0, t * Math.sin(d) * 5 + 3.5 * (1 - ab(e[3].g, e[4].g)),), Y(0, t * Math.sin(d + 3) * 6, t * Math.sin(0.6 * d + 1) * 6,), Y(0, -7.3 * e[4].h), t = gb(e[6].g, e[7].g), Y(0, -2, 10 - 
          8.5 * t * Za(Math.sin(1.1 * d))), Y(0, -2, 10 - 8.5 * t * Za(Math.sin(2.1 * d))), Y(0, -2, 10 - 8.5 * ab(t * Za(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - t)),), gb(e[5].h, e[15].h));
          for (t = 0; 4 > t; t++) {
            Y((2 < t ? 2 * (1 - z) + z : 0) - 100, z * Math.sin(1.3 * d + 1.7 * t) * (3 + t / 3) + 0.7, 115 - 7 * (1 - e[5].h) * (1 - e[15].h) * (1 & t ? -1 : 1) + ab(0.05, z) * Math.cos(1.3 * d + 7 * t) * (4 - 2 * (1 - t / 3)),);
          }
          t = gb(e[8].h, e[9].h);
          for (let F = 0; 3 > F; ++F) {
            Y(0, t * Math.sin(1.5 * d + 1.5 * F) * 4 + (F ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)),);
          }
          t = gb(gb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2,);
          Y(0, 16 * t, 95 + 8.5 * cb(2 * t - 1));
          Y(0, -4.7 * e[0].g, -15);
          Y(0, -4.7 * e[10].g, 15);
          Y(-99.7, -1.9 - 5.5 * e[3].g, 63.5);
          Y(-100, 0.6 - 5.8 * e[15].g, 96.5);
          v(Y(-12, 4.2, 40 * oa - 66));
          v(Y(-123, 1.4, 55 - 65 * pa));
          Y(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + wa, 0,);
          Y(2.5 * (1 - z) - 139.7, -3 * (1 - e[5].g) - z * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * z), 0);
          Y(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          Y(-81, 0.6, 106).rotateSelf(0, 40 + ua);
          Y(-65.8, 0.8, 106).rotateSelf(0, va);
          Y(-50.7, 0.8, 106).rotateSelf(0, 180 - va);
          Y(-50.7, 0.8, 91).rotateSelf(0, 270 + va);
          for (v = 0; 13 > v; ++v) {
            Ma[v].F(), ob(l, kc, 12 + v);
          }
          for (v = 0; 16 > v; ++v) {
            e[v].F(), ob(l, kc, 25 + v);
          }
          for (let F, R = 0, D = 656; 26 > R; ++R, ++D) {
            F = k[2 + R].m, kc[D++] = F.m41, kc[D++] = F.m42, kc[D++] = F.m43;
          }
          sa();
          for (v = 0; 12 > v; ++v) {
            ob(k[28 + v].m, kc, v);
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
        z = Ga;
        t = Ha;
        da ? (pb(la).invertSelf(), mb(3.6, 3.5), v = ib, z = jb, t = 5, pb(m, x).rotateSelf(-20, 0).invertSelf().translateSelf(-v, -z, -t,).rotateSelf(0, 99), pb().rotateSelf(0, 40 * Math.sin(xa) - 80, -8), ob(l, kc, 35), ob(l, kc, 36), ob(l, kc, 37)) : pb(m, x).rotateSelf(-Xa, -Ya).invertSelf().translateSelf(-v, -z, -t);
        B();
        Z.ubu(B("k"), v, z, t);
        Z.u3a(B("j"), kc);
        Z.uae(B("a"), !1, ob(m));
        Z.ubh(B("g"), 3);
        Z.ubh(B("h"), 3);
        Z.b6o(36160, V);
        Z.v5y(0, 0, 2048, 2048);
        G[0](60.17);
        G[1](138.6);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(B("b"), !1, ob(x));
        Z.uae(B("a"), !1, ob(la));
        Z.uae(B("i"), !1, A);
        Z.ubh(B("g"), 0);
        Z.ubh(B("h"), 1);
        bc(!ia);
        J();
        Z.uae(J("b"), !1, ob(pb(x).invertSelf()));
        Z.ubu(J("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, xa);
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, T);
        Z.v5y(0, 0, 128, 128);
        Z.f1s();
      }, n = new DOMMatrix(), x = new DOMMatrix(), A = new Float32Array(32), f = g, r = E(8, () => ({})), J = jc(ic("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
      );
      var h = ic("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}");
      const H = jc(h, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), B = jc(h, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), G = E(2, t => {
        const v = Z.c25();
        return Z.a4v(33984 + t), Z.b9j(3553, v), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), z => {
          let F = 0, R = 0, D = 0, q = 1 / 0, u = 1 / 0, w = 1 / 0, C = -1 / 0, K = -1 / 0, Q = -1 / 0;
          Z.fas(36160, 36096, 3553, v, 0);
          Z.c4s(256);
          pb().scale3dSelf(z).multiplySelf(pb(ma[t], n).multiplySelf(x).invertSelf(),);
          for (let M = 0; 8 > M; ++M) {
            const O = r[M];
            mb(4 & M ? 1 : -1, 2 & M ? 1 : -1, 1 & M ? 1 : -1);
            F -= O.x = (0 | ib) / (z * lb);
            R -= O.y = (0 | jb) / (z * lb);
            D -= O.z = (0 | kb) / (z * lb);
          }
          pb().rotateSelf(298, 139).translateSelf(F / 8, R / 8, D / 8);
          for (z = 0; 8 > z; ++z) {
            const {x:M, y:O, z:aa} = r[z];
            mb(M, O, aa);
            q = $a(q, ib);
            C = ab(C, ib);
            u = $a(u, jb);
            K = ab(K, jb);
            w = $a(w, kb);
            Q = ab(Q, kb);
          }
          z = 10 + t;
          w *= 0 > w ? z : 1 / z;
          Q *= 0 < Q ? z : 1 / z;
          Z.uae(B("b"), !1, ob(pb(m, n).scaleSelf(2 / (C - q), 2 / (K - u), 2 / (w - Q),).translateSelf((C + q) / -2, (K + u) / -2, (w + Q) / 2).multiplySelf(l),),);
          bc(!ia);
          A.set(nb, 16 * t);
        };
      }), V = Z.c5w();
      h = Z.c25();
      const S = Z.c3z(), T = Z.c5w();
      H();
      Z.uae(H("a"), !1, ob(yb(1e-4, 2, 1.2, 0.4)));
      B();
      Z.ubh(B("q"), 2);
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
      Z.b9j(3553, h);
      Z.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      Z.fas(36160, 36064, 3553, h, 0);
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
  g.onload = g.onerror = b;
  g.src = La;
  NO_INLINE(Gb)(() => {
    zb(() => {
      let f = 0;
      const r = [], J = [], H = [], B = [], G = new Int32Array(8), V = new Map(), S = new Int32Array(G.buffer, 0, 5), T = new Float32Array(G.buffer);
      k.map((t, v) => {
        let z;
        const F = R => {
          let {x:D, y:q, z:u} = z[R], w = (T[0] = D, T[1] = q, T[2] = u, R = "" + (z.C ? S : G), V.get(R));
          return void 0 !== w ? (D = 3 * w, B[D] = (B[D++] + G[5]) / 2, B[D] = (B[D++] + G[6]) / 2, B[D] = (B[D] + G[7]) / 2) : (V.set(R, w = V.size), J.push(D, q, u, T[3]), H.push(G[4]), B.push(G[5], G[6], G[7])), w;
        };
        for (z of (T[3] = 40 === v ? -12 : 41 === v ? -25 : v, t.o)) {
          const {x:R, y:D, z:q} = Sb(z);
          G[4] = 0 | z.u;
          G[5] = 32767 * R;
          G[6] = 32767 * D;
          G[7] = 32767 * q;
          for (let u = 2, w = F(0), C = F(1); z.length > u; ++u) {
            r.push(w, C, C = F(u));
          }
        }
        t.o = 0;
        t.s = f;
        t.D = f = r.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(J), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(B), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(H), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(r), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      try {
        const [t, v, z, F, R] = JSON.parse(localStorage.spdnt22,);
        e.map((D, q) => D.g = D.h = D.i = q ? 0 | t[q] : 0);
        Ma.map((D, q) => D.i = 0 | v[q]);
        Ia = z;
        d = F;
        pa = R;
      } catch {
      }
      Jb();
      oa = 13 === Ia ? 0 : cb(Da);
      zb(b);
    });
    const h = f => y(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), p = f => X(I(L(), y(0, -f / 2).scale(6, f - 1, 2.2)), I(L(), y(0, -f / 2 - 6).scale(4, f - 3, 4)), I(L(32, 1), y(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), n = E(11, f => vb(rb(sb(18), h(f), P(1, 1, 0.8, 0.2)).reverse(), rb(sb(18), h(f + 1), P(1, 1, 0.8, 0.2)), 1,)).flat(), x = [...I(L(), y(0, -3).scale(11, 1.4, 3), P(0.9, 0.9, 0.9, 0.2)), ...I(L(), y(0, -2.2).scale(7.7, 0.5, 4), P(0.5, 
    0.5, 0.5, 0.2)), ...E(12, f => I(L(), m.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), P(0.6, 0.5, 0.4, 0.3),)).flat(), ...X(I(L(6), m.rotate(90).scale(6, 8, 6), P(0.3, 0.6, 0.6, 0.3)), I(L(4, 0, 0.01), y(0, 6).scale(12, 2, 0.75).rotate(0, 45), P(0.3, 0.6, 0.6, 0.3),), I(L(6), m.rotate(90).scale(5, 12, 5), P(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => I(L(5), y(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), P(0.3, 0.6, 0.6, 0.3),)),),], A = X(I(L(), y(0, -0.5, 1).scale(1.15, 1.2, 6.5), P(0.25, 
    0.25, 0.35, 0.3),), X(I(L(3), y(0, 0, -5.5).scale(3, 2), P(0.6, 0.3, 0.4, 0.3)), I(L(), y(0, 0, -3.65).scale(2.5, 3), P(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => I(L(), y(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), P(0.7, 0.2, 0, 0.3),)),);
    U();
    c([Na.slice(1),], y(-2).scale3d(3).rotate(90, 0));
    U();
    Lb(y(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, r) => {
      c(L(), y(0, 0, r ? 22 : -23).scale(3, 1, 8), P(0.9, 0.9, 0.9, 0.2));
      c(L(), y(0, 6.3, f).scale(4, 0.3, 1), P(0.3, 0.3, 0.3, 0.4));
      c(L(), y(0, 1, f).scale(3, 0.2, 0.35), P(0.5, 0.5, 0.5, 0.3));
      E(5, J => c(n, y(18.5 * (r - 0.5), 0, 4.8 * J - 9.5).rotate(0, 180 - 180 * r).scale(1.2, 10, 1.2),));
    });
    c(L(), y(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    c(L(), y(3, 1.5, -20).scale(0.5, 2, 5), P(0.7, 0.7, 0.7, 0.2));
    c(L(), y(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(0.75, 0.75, 0.75, 0.2),);
    c(L(5), y(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(0.6, 0.3, 0.3, 0.4));
    c(X(Zb(I(L(6, 0, 0, 0.3), y(8, -3, -4).scale(13, 1, 13), P(0.7, 0.7, 0.7, 0.2),), X(I(L(6, 0, 0, 0.3), y(0, -0.92).scale(13, 2, 13), P(0.8, 0.8, 0.8, 0.2),), I(L(), m.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), P(0.5, 0.5, 0.5, 0.5),),), I(L(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), P(0.8, 0.2, 0.2, 0.5),), I(L(6), y(0, -8).scale(9, 8, 7), P(0.2, 0.1, 0.4, 0.5)),), I(L(5), m.scale(5, 30, 5), P(0.4, 0.2, 0.6, 0.5)), I(L(5, 0, 1.5), 
    y(0, 1).scale(4.5, 0.3, 4.5), P(0.7, 0.5, 0.9, 0.2),), I(L(6), y(15, -1.5, 4).scale(3.5, 1, 3.5), P(0.5, 0.5, 0.5, 0.5),),),);
    Lb(y(15, -2, 4));
    c(L(), y(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    Lb(y(-55, -1.1, 46).rotate(0, 90));
    c(L(7), y(-57, -2.6, 46).scale(4, 1, 4), P(0.8, 0.8, 0.8, 0.3));
    c(L(6), y(-61.3, -2.4, 49).scale(3, 1, 5), P(0.4, 0.6, 0.6, 0.3));
    c(x, y(-53, 0, 55));
    c(L(), y(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), P(0.7, 0.7, 0.7, 0.2),);
    c(L(3, 0, -0.5), y(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(0.8, 0.8, 0.8, 0.2),);
    c(X(Zb(I(L(), y(-100, -2.4, 55).scale(8, 0.9, 8), P(0.8, 0.8, 0.8, 0.2),), I(L(), y(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(0.8, 0.8, 0.8, 0.2),), I(L(), y(-100, -2.6, 70).scale(3, 1.1, 7), P(0.8, 0.8, 0.8, 0.2),), I(L(), y(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(0.8, 0.8, 0.8, 0.2),), I(L(6), y(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(0.6, 0.6, 0.6, 0.3),), I(L(), y(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), P(0.8, 0.8, 0.8, 0.2),), I(L(), y(-100, 0.42, 
    92).scale(3, 1.1, 4.1), P(0.8, 0.8, 0.8, 0.2),),), I(L(8), y(-100, -1, 55).scale(7, 0.9, 7), P(0.3, 0.3, 0.3, 0.4)), I(L(8), y(-100, -2, 55).scale(4, 0.3, 4), P(0.4, 0.4, 0.4, 0.5)), I(L(8, 0, -3.1), y(-100, -3, 55).scale(0.4, 1, 0.4), P(0.4, 0.4, 0.4, 0.5),),),);
    c(X(I(L(), y(-100, 1, 63).scale(7.5, 4), P(0.5, 0.5, 0.5, 0.4)), I(L(), y(-100, 0, 70).scale(2, 2, 10), P(0.5, 0.5, 0.5, 0.4)), I(L(20, 1), y(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(0.5, 0.5, 0.5, 0.4),),),);
    Na.map(({x:f, z:r}) => {
      c(L(6), y(3 * f, 3, 15 * r).scale(0.7, 4, 0.7), P(0.6, 0.3, 0.3, 0.4));
      c(L(6), y(7 * f - 100, -3, 7 * r + 55).scale(1, 8.1), P(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(J => c(L(6), y(7 * f - 100, J, 7 * r + 55).scale(1.3, 0.5, 1.3), P(0.4, 0.2, 0.2, 0.8),));
      c(L(14, 1), y(9 * f - 38.9, -7.3, 11 * r + 17).scale(1, 4), P(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(J => c(L(17, 1), y(9 * f - 38.9, J - 11.3, 11 * r + 17).scale(1.5, 0.5, 1.5), P(0.6, 0.6, 0.6, 0.3),));
    });
    E(7, f => {
      c(L((23 * f + 1) % 5 + 5, 0, 0.5), y(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), P(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(L(), y(-87, -9.5, 24).scale(7, 1, 3), P(0.4, 0.5, 0.6, 0.4));
    c(L(4), y(-86, -9.2, 27).scale(5, 1, 5), P(0.5, 0.6, 0.7, 0.3));
    c(L(12, 1), y(-86, -9, 31).scale(1.5, 1, 1.5), P(0.3, 0.3, 0.4, 0.1));
    Lb(y(-86, -7.5, 31));
    c(X(Zb(I(L(5), y(0, 0, -7).scale(2, 1.2, 2), P(0.2, 0.4, 0.7, 0.3)), I(L(5), m.scale(9, 1.2, 9), P(0, 0.2, 0.3, 0.5)), I(L(), m.scale(11, 1, 13), P(0.3, 0.4, 0.6, 0.3)),), I(L(5), m.scale(5.4, 5, 5.4), P(0, 0.2, 0.3, 0.5)),), y(-38.9, -11.3, 17),);
    Lb(y(-38.9, -9.6, 10));
    c(X(Zb(I(L(6), y(0, 0, -18).scale(15, 1.2, 15), P(0.7, 0.7, 0.7, 0.3),), I(L(), m.scale(4, 1.2, 6), P(0.45, 0.4, 0.6, 0.3)),), ...E(6, f => E(6, r => I(L(6), y(4.6 * r - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * r) - 32).scale(2, 5, 2), P(0.7, 0.7, 0.7, 0.3),),)).flat(),), y(-38.9, -11.3, -1),);
    c(L(5), y(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), P(0.8, 0.1, 0.25, 0.4));
    Lb(y(-84, -0.7, 85).rotate(0, 45));
    E(3, f => {
      c(p(16), y(12 * f - 109, -9, -12), P(0.6, 0.6, 0.6, 0.3));
      c(p(16), y(-77, -9, -12 * f - 20).rotate(0, 90), P(0.6, 0.6, 0.6, 0.3),);
    });
    c(X(Zb(I(L(), y(26.5, -1.6, 10).scale(20, 2.08, 3)), I(L(), y(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...E(4, f => I(L(), y(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...E(3, f => I(L(), y(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), y(-123, 0.2, -12), P(0.5, 0.5, 0.6, 0.2),);
    Lb(y(-116, -1.4, -18).rotate(0, 180));
    c(L(6), y(-116, -2.6, -16.5).scale(3.2, 0.8, 3), P(0.6, 0.5, 0.7, 0.2));
    c(L(), y(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    c(L(), y(-115.5, -17, -12).scale(0.5, 15, 2.2), P(0.6, 0.6, 0.6, 0.3));
    c(L(8), y(-114, -17, -2).scale(2, 15, 2), P(0.6, 0.6, 0.6, 0.3));
    c(L(8), y(-79, -17, -2).scale(2, 15, 2), P(1, 1, 1, 0.3));
    c(L(), y(-77, -17, -50.5).scale(2.2, 15, 0.5), P(0.6, 0.6, 0.6, 0.3));
    c(X(I(L(12), y(-77, -14.5, -12).scale(4, 17.5, 4), P(0.7, 0.7, 0.7, 0.2),), I(L(12), y(-77, 3.1, -12).scale(3, 5, 3), P(0.4, 0.5, 0.6, 0.2)), I(L(), y(-79, 0.1, -12).scale(3.5, 2, 1.3), P(0.4, 0.5, 0.6, 0.2),), I(L(), y(-77, 0.1, -14).scale(1.5, 2, 2), P(0.4, 0.5, 0.6, 0.2)),),);
    c(L(), y(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), P(0.6, 0.6, 0.6, 0.3));
    c(L(9), y(-98, -18.4, -40).scale(2.5, 13.5, 2.5), P(0.5, 0.5, 0.5, 0.3));
    c(X(I(L(), y(-93, -5.8, -40).scale(9, 1, 5), P(0.8, 0.8, 0.8, 0.1)), I(L(9), y(-98, -5.8, -40).scale(3, 8, 3), P(0.7, 0.7, 0.7, 0.2)),),);
    Lb(y(-98, -4.4, -40).rotate(0, 90));
    c(X(Zb(I(L(6, 0, 0, 0.6), y(-100, 0.7, 105.5).scale(8, 1, 11), P(0.7, 0.7, 0.7, 0.2),), I(L(), y(-101.5, 0.7, 93.5).scale(10.5, 1, 2), P(0.7, 0.7, 0.7, 0.2),),), I(L(5), y(-100, 0.7, 113).scale(4, 3, 4), P(0.7, 0.7, 0.7, 0.2)),),);
    [-1, 1,].map(f => {
      [7.2, 1.5,].map(r => c(L(15, 1), y(-7.5 * f - 100, r + 0.7, 96).scale(1.1, 0.5, 1.1), P(0.5, 0.24, 0.2, 0.4),));
      c(n, y(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      c(L(12, 1), y(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), P(0.6, 0.24, 0.2, 0.5),);
      c(X(I(L(), y(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), P(0.5, 0.5, 0.5, 0.4),), I(L(), m.scale(3, 3, 10), P(0.6, 0.24, 0.2, 0.5)), I(L(32, 1), y(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(0.6, 0.24, 0.2, 0.5),), I(L(5), y(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(0.6, 0.24, 0.2, 0.5),), I(L(5), y(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), P(0.6, 0.24, 0.2, 0.5),),), y(f - 100, 0.7, 97),);
    });
    c(X(I(L(), y(-82.07, 0.8, 106).scale(11, 0.9, 2.2), P(0.7, 0.7, 0.7, 0.1),), I(L(45, 1), y(-81, 0.7, 106).scale3d(7.7), P(0.7, 0.7, 0.7, 0.1),),),);
    c(L(), y(-58, 1, 106).scale(2, 0.65, 2), P(0.7, 0.7, 0.7, 0.2));
    c(L(), y(-50.7, 1, 99).scale(2, 0.65, 1), P(0.7, 0.7, 0.7, 0.2));
    c(L(), y(-42, 0.4, 91).scale(5, 1, 2.5), P(0.7, 0.7, 0.7, 0.3));
    c(L(), y(-34.2, 0.4, 91).scale(3, 1, 3), P(0.7, 0.7, 0.7, 0.3));
    c(L(5), y(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), P(0.2, 0.5, 0.5, 0.6));
    Lb(y(-34, 2.7, 96).rotate(-12, 0));
    [-1, 1,].map(f => c(n, y(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    E(3, f => c(p(24.7 - 0.7 * (1 & f)), y(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? P(0.5, 0.5, 0.5, 0.3) : P(0.35, 0.35, 0.35, 0.5),),);
    c(X(I(L(6, 0, 0, 0.3), y(0, -0.92, 95).scale(14, 2, 14), P(0.8, 0.8, 0.8, 0.2),), I(L(5), y(0, 0, 95).scale3d(6), P(0.3, 0.3, 0.3, 0.5)),),);
    Lb(y(0, 1.7, 82).rotate(0, 180));
    c(L(5), y(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(0.5, 0.3, 0.3, 0.4),);
    c(L(6), y(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(0.5, 0.6, 0.7, 0.3));
    c(L(), y(0, 16, 127.8).scale(1.5, 1, 0.7), P(0.5, 0.6, 0.7, 0.3));
    c(L(7), y(0, 15.1, 133).scale(5, 2, 5), P(0.4, 0.5, 0.6, 0.4));
    c(X(Zb(I(L(), y(0, 16, 110.5).scale(12, 1, 3), P(0.5, 0.3, 0.3, 0.4)), I(L(), y(0, 16, 111).scale(3, 1, 3.8), P(0.5, 0.3, 0.3, 0.4)),), I(L(5), y(0, 16, 103.5).scale(5.5, 5, 5.5), P(0.5, 0.3, 0.3, 0.4),),),);
    Mb(y(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Mb(y(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...sb(18).map(({x:f, z:r}) => [7 * f, 10 * r, 4.5 - 2 * Za(f),]),);
    Mb(y(0, 3, 95), ...sb(9).map(({x:f, z:r}) => [9 * f, 9 * r, 4,]),);
    Mb(y(0, 19, 134), [0, 0, 3.5,]);
    Mb(y(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Mb(y(-89, 0.2, 80), [0, 0, 6,]);
    Mb(y(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Mb(y(-115, 0.2, -12), [0, 0, 3.5,]);
    Mb(y(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    U();
    c(L(5), y(0, -0.2).scale(5, 1, 5), P(0.6, 0.65, 0.7, 0.3));
    Lb(y(0, 1.2));
    E(2, () => {
      U();
      Na.map(({x:f, z:r}) => {
        c(L(11, 1), y(4 * f, 4, 4 * r).scale(0.8, 3, 0.8), P(0.5, 0.3, 0.7, 0.6));
        c(L(), y(4 * f, 7, 4 * r).scale(1, 0.3), P(0.5, 0.5, 0.5, 0.3));
      });
      c(X(I(L(), m.scale(5, 1, 5), P(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => I(L(25, 1), y(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), P(0.8, 0.8, 0.8, 0.3),)),),);
      c(L(), y(0, -3).scale(8, 2, 8), P(0.4, 0.4, 0.4, 0.3));
    });
    U();
    c(X(Zb(I(L(), m.scale(1.5, 1, 5), P(0.9, 0.9, 0.9, 0.2)), I(L(6), m.scale(4, 1, 5), P(0.9, 0.9, 0.9, 0.2)), I(L(), y(0, -2).scale(2, 3.2, 1.9), P(0.3, 0.8, 0.5, 0.5)), I(L(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), P(0.9, 0.9, 0.9, 0.2),),), I(L(), m.scale(1.3, 10, 1.3), P(0.2, 0.7, 0.4, 0.6)),),);
    Mb(y(0, 2.8), [0, 0, 4.5,]);
    U();
    c(L(3), y(-23, -1.7, 55.8).scale(5, 0.7, 8.3), P(0.3, 0.6, 0.6, 0.2));
    c(L(8), y(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(0.8, 0.8, 0.8, 0.2));
    c(L(), y(-23, -3, 55).scale(5.2, 1.7, 3), P(0.5, 0.5, 0.5, 0.3));
    c(L(), y(-23, -2.2, 62).scale(3, 1, 4), P(0.5, 0.5, 0.5, 0.3));
    Lb(y(-23, -0.5, 66.5));
    U();
    c(L(), y(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(0.7, 0.7, 0.7, 0.2));
    c(X(I(L(), m.scale(3, 1.4, 2.7)), I(L(), m.scale(1.2, 8, 1.2)),), y(-33, -3, 55), P(0.7, 0.7, 0.7, 0.2),);
    U();
    c(X(I(L(), y(-27, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2)), I(L(), y(-27, -3, 55).scale(1, 3), P(0.9, 0.9, 0.9, 0.2)),),);
    c(L(), y(-39, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    U();
    c(L(6), y(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), P(0.7, 0.7, 0.7, 0.4),);
    U();
    [0, 12, 24,].map(f => c(L(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.2, 0.5, 0.6, 0.2),));
    U();
    [6, 18,].map(f => c(L(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.1, 0.4, 0.5, 0.2),));
    U();
    c(X(Zb(I(L(5), y(0, 2).scale(5, 7, 5).skewY(8), P(0.2, 0.4, 0.5, 0.5),), I(L(5), y(0, 6).scale(1.1, 7, 1.1).skewY(-8), P(0.25, 0.35, 0.5, 0.5),), I(L(5), y(0, 9).scale(0.6, 7, 0.6).skewY(8), P(0.35, 0.3, 0.5, 0.5),),), I(L(5), m.scale(4, 8, 4), P(0.2, 0.4, 0.5, 0.5)), I(L(5), y(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), P(0.2, 0.4, 0.5, 0.5),),), y(-38.9, -11.3, 17),);
    Mb(y(-39.1, -0.6, 17).rotate(11), ...sb(15).map(({x:f, z:r}) => [3 * f, 3 * r, 1.2,]),);
    U();
    E(2, f => c(A, y(9 * f - 110 + (1 & f), 1.9, -12)));
    U();
    E(2, f => c(A, y(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    U();
    E(3, f => c(A, y(9 * f - 106, 1.9, -12)));
    E(4, f => {
      U();
      c(L(6), y(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), P(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [P(0.1, 0.55, 0.45, 0.2), P(0.2, 0.5, 0.5, 0.3), P(0.3, 0.45, 0.55, 0.4),].map((f, r) => {
      U();
      c(L(), y(-23.5, 0.5, 91 + 6.8 * r).scale(1 === r ? 2 : 3.3, 1, 3.3), f);
      2 === r && c(L(), y(-29.1, 0.4, 91).scale(2.1, 1, 3), P(0.7, 0.7, 0.7, 0.3));
      1 === r && c(L(), y(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), P(0.6, 0.6, 0.7, 0.3),);
    });
    U();
    c(L(5), m.scale(5, 1.1, 5), P(0.5, 0.3, 0.3, 0.4));
    c(L(5), m.scale(5.5, 0.9, 5.5), P(0.25, 0.25, 0.25, 0.4));
    Lb(y(0, 1.5, -1).rotate(0, 180));
    E(4, f => {
      U();
      E(7, r => c(I(L(9, 1), y((2 < f ? 3.5 : 4) * (r / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), P(0.3, 0.3, 0.38),),),);
    });
    E(2, () => {
      U();
      c(X(I(L(30, 1, 1.15, 1), y(0, -3).scale(3.5, 1, 3.5), P(0.7, 0.4, 0.25, 0.7),), I(L(30, 1, 1.3, 1), y(0, -2.5).scale(2.6, 1, 3), P(0.7, 0.4, 0.25, 0.2),), I(L(), y(4, -1.2).scale3d(2), P(0.7, 0.4, 0.25, 0.3)),),);
      Lb(y(0, -3, 4));
    });
    U();
    c(x);
    U();
    c(L(15, 1), y(-7.5).rotate(0, 90).scale(3, 2.3, 3), P(0.4, 0.4, 0.4, 0.3));
    c(L(10), y(-7.5).rotate(0, 90).scale(2, 2.5, 2), P(0.3, 0.8, 0.7, 0.3));
    c(L(5), y(-7.5).rotate(0, 90).scale(1, 3), P(0.5, 0.5, 0.5, 0.5));
    Lb(y(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(n, m.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(X(I(L(10), m.scale(6, 2, 6), P(0.1, 0.6, 0.5, 0.3)), I(L(10), m.scale(3.3, 6, 3.3), P(0.1, 0.6, 0.5, 0.5)),),);
    Mb(y(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    U();
    c(L(3), y(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), P(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(L(6), y(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), P(0.7, 0.7, 0.7, 0.4),);
      c(L(), y(0, 6.2, f + 95).scale(0.5, 11, 0.5), P(0.5, 0.3, 0.3, 0.4));
    });
    U();
    c(X(I(L(45, 1), m.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)), I(L(), y(0, 0, -5.5).scale(1.5, 3, 2.7), P(0.45, 0.45, 0.45, 0.2),),),);
    c(L(8), y(0, 2).scale(3, 1.5, 3).rotate(0, 22), P(0.7, 0.7, 0.7, 0.1));
    c(L(5), y(0, 2).scale(1, 2), P(0.3, 0.3, 0.3, 0.2));
    Mb(y(0, 3), ...sb(14).map(({x:f, z:r}) => [5.6 * f, 5.6 * r, 2,]),);
    U();
    [-1, 1,].map(f => c(n, m.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90),));
    c(X(I(L(28, 1), y(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), I(L(), m.scale(9, 5, 2), P(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), y(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(I(L(28, 1), y(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), I(L(), y(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)), I(L(), y(0, 0, 7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), y(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    U();
    c(X(I(L(28, 1), y(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3)), I(L(), y(7).scale(9, 5, 2), P(0.3, 0, 0, 0.3)), I(L(), y(0, 0, -7).scale(2, 5, 9), P(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), y(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2)));
    U();
    c(wb(20), y(0, 1).scale3d(0.5), P(1, 0.3, 0.4));
    c(wb(30), m.scale(0.65, 0.8, 0.55), P(1, 0.3, 0.4));
    c(L(), y(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), P(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(n, m.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), P(1, 1, 0.8),);
      c(I(X(L(15, 1), I(L(), y(0, 0, 1).scale(2, 2, 0.5)),), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), P(0.3, 0.3, 0.3),), y(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map(f => {
      U();
      c(L(20, 1), y(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), P(1, 0.3, 0.4));
    });
    U();
    c(wb(30, 24, (f, r, J) => {
      const H = r / 24, B = f * Math.PI * 2 / 30, G = Math.sin(H ** 0.6 * Math.PI / 2);
      f = H * H * Math.sin(f * Math.PI * 14 / 30) / 4;
      return 23 < r ? {x:J.C = 0, y:-0.5, z:0,} : {x:Math.cos(B) * G, y:Math.cos(H * Math.PI) - H - f, z:Math.sin(B) * G + Math.sin(f * Math.PI * 2) / 4,};
    }), m.scale(0.7, 0.7, 0.7), P(1, 1, 1),);
    [-1, 1,].map(f => c(wb(12), y(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    U();
    c(L(6, 1), m.scale(0.12, 1.2, 0.12), P(0.3, 0.3, 0.5, 0.1));
    c(L(10), y(0, 0.8).scale(0.2, 0.3, 0.2), P(1, 0.5, 0.2));
    c(L(3), y(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), P(0.2, 0.2, 0.2, 0.1));
  });
});

