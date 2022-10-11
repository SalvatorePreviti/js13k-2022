let aa, ca, da, ea, ha, ia, la, ma, na, oa, c, pa, qa, sa, ta, ua, va, d = 0, wa = 0, xa = 0, ya = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ia = 13, Ja = 0.1;
const Ka = Math.PI / 180, La = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Ma = [], e = [], h = [], Na = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Oa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Sa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ta = 0, Ua = 180, Va = 0, Wa = 0, Xa = 0;
const Ya = NO_INLINE(b => 0 > b ? -b : b), Za = NO_INLINE((b, a) => b < a ? b : a), $a = NO_INLINE((b, a) => a < b ? b : a), ab = (b, a) => Ya(b) > a ? b : 0, bb = (b, a = 0, g = 1) => b < a ? a : g < b ? g : b, cb = b => Math.atan2(Math.sin(b * Ka), Math.cos(b * Ka)) / Ka, db = (b, a, g) => b + (2 * (a = (a - b) % 360) % 360 - a) * bb(g) || 0, eb = (b, a, g) => (0 < g ? 1 > g ? b + (a - b) * g : a : b) || 0, fb = (b, a) => (b = bb(b), eb(b, 1 - b, a)), gb = (b, a, g = 0) => (b * b + a * a + g * 
g) ** 0.5, lb = (b = 0, a = 0, g = 0, k = 1) => {
  hb = l.m11 * b + l.m21 * a + l.m31 * g + l.m41 * k;
  ib = l.m12 * b + l.m22 * a + l.m32 * g + l.m42 * k;
  jb = l.m13 * b + l.m23 * a + l.m33 * g + l.m43 * k;
  kb = l.m14 * b + l.m24 * a + l.m34 * g + l.m44 * k;
};
var hb, ib, jb, kb;
const nb = (b, a = mb, g = 0,) => (g *= 16, a[g++] = b.m11, a[g++] = b.m12, a[g++] = b.m13, a[g++] = b.m14, a[g++] = b.m21, a[g++] = b.m22, a[g++] = b.m23, a[g++] = b.m24, a[g++] = b.m31, a[g++] = b.m32, a[g++] = b.m33, a[g++] = b.m34, a[g++] = b.m41, a[g++] = b.m42, a[g++] = b.m43, a[g] = b.m44, a), ob = (b = m, a = l,) => (a.m11 = b.m11, a.m12 = b.m12, a.m13 = b.m13, a.m14 = b.m14, a.m21 = b.m21, a.m22 = b.m22, a.m23 = b.m23, a.m24 = b.m24, a.m31 = b.m31, a.m32 = b.m32, a.m33 = b.m33, a.m34 = b.m34, 
a.m41 = b.m41, a.m42 = b.m42, a.m43 = b.m43, a.m44 = b.m44, a), y = NO_INLINE((b, a, g) => m.translate(b, a, g)), D = (b, a) => Array.from(Array(b), (g, k) => a(k)), pb = (b, a, g) => (b.C = g, b.u = a, b), qb = (b, a, g = b.u,) => (ob(a), pb(b.map(({x:k, y:p, z:n}) => (lb(k, p, n), {x:hb, y:ib, z:jb,})), g, b.C,)), I = (b, a, g) => b.map(k => qb(k, a, g)), rb = (b, a = 0) => D(b, g => {
  const k = Math.cos(2 * Math.PI * g / b);
  return {x:Math.sin(2 * Math.PI * g / b), y:0, z:0.01 > Ya(k) ? k : 0 > k ? k - a : k + a,};
}), sb = (b, a, g) => b.map((k, p, {length:n}) => pb([k, a[n - p - 1], a[n - (p + 1) % n - 1], b[(p + 1) % n],], b.u, g,)), L = (b, a, g = 0, k,) => (b = b ? rb(b, k) : Na, k = qb(b, y(0, 1).scale3d(0 < g ? g : 1)), b = qb(b, y(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...sb(b, k, a), k, b,]), vb = (b, a = b, g = (k, p) => (p *= Math.PI / a, {x:Math.cos(k *= 2 * Math.PI / b) * Math.sin(p), y:Math.cos(p), z:Math.sin(k) * Math.sin(p),})) => {
  const k = [];
  for (let p = 0; b > p; p++) {
    for (let n = 0; a > n; n++) {
      const x = pb([], 0, 1);
      k.push(x);
      x.push(g(p, n, x));
      n && x.push(g((p + 1) % b, n, x));
      a - 1 > n && x.push(g((p + 1) % b, n + 1 % a, x));
      x.push(g(p, n + 1 % a, x));
    }
  }
  return k;
}, wb = NO_INLINE(b => 1 - Math.exp(-xa * b)), xb = NO_INLINE((b, a, g) => eb(b, a, wb(g))), yb = (b, a, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (a + b) / (b - a), -1, 0, 0, 2 * a * b / (b - a), 0,]), zb = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Cb = b => Math.sin(b * Math.PI * 2), Db = b => 0.5 > b % 1 ? 1 : -1, Eb = b => b % 1 * 2 - 1, Fb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Gb = b => {
  let a = 0;
  const g = () => {
    let n = 0;
    const x = Q => {
      let J, V, Ha, ja = 0, ka = 0;
      const ba = [], ra = new Int32Array(768 * Q), cc = 2 ** (w - 9) / Q, dc = Math.PI * 2 ** (r - 8) / Q, Ab = A * Q & -2;
      for (let tb = 0; 11 >= tb; ++tb) {
        for (let ub = 0, Nb = +"000001234556112341234556011111111112011111111112000001111112"[12 * a + tb]; 32 > ub; ++ub) {
          const Ob = (32 * tb + ub) * Q;
          for (var Pa = 0; 4 > Pa; ++Pa) {
            if (J = 0, Nb && (J = B[Nb - 1].charCodeAt(ub + 32 * Pa) - 40, J += 0 < J ? 106 : 0), J) {
              var fa;
              if (!(fa = ba[J])) {
                fa = J;
                let X = void 0, za = void 0;
                var Pb = J;
                let ec = 0, fc = 0;
                const gc = 2 > a ? Eb : Cb, hc = 2 > a ? 1 > a ? Db : Fb : Cb, Qb = new Int32Array(R + S + N);
                for (let Qa = 0, Bb = 0; R + S + N > Qa; ++Qa, ++Bb) {
                  let Ra = 1;
                  R > Qa ? Ra = Qa / R : R + S > Qa || (Ra = (1 - (Ra = (Qa - R - S) / N)) * 3 ** (-u / 16 * Ra));
                  0 > Bb || (Bb -= 4 * Q, za = 0.00396 * 2 ** ((Pb + t - 256) / 12), X = 0.00396 * 2 ** ((Pb + C - 256) / 12) * (1 + (a ? 0 : 0.0072)));
                  Qb[Qa] = 80 * (gc(ec += za * Ra ** (K / 32)) * f + hc(fc += X * Ra ** (F / 32)) * H + (W ? (2 * Math.random() - 1) * W : 0)) * Ra | 0;
                }
                fa = ba[fa] = Qb;
              }
              for (let X = 0, za = 2 * Ob; fa.length > X; ++X, za += 2) {
                ra[za] += fa[X];
              }
            }
          }
          for (let X, za = 0; Q > za; ++za) {
            Pa = 0;
            fa = 2 * (Ob + za);
            var Aa = (((X = ra[fa]) || Ha) && (V = 0.00308 * v, 1 !== a && 4 !== a || (V *= Math.sin(cc * fa * Math.PI * 2) * E / 512 + 0.5), V = 1.5 * Math.sin(V), ja += V * ka, Aa = (1 - G / 255) * (X - ka) - ja, ka += V * Aa, X = 4 === a ? ka : 3 === a ? Aa : ja, a || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5), X *= O / 32, Ha = 1e-5 < X * X, Aa = Math.sin(dc * fa) * q / 512 + 0.5, Pa = X * (1 - Aa), X *= Aa), fa < Ab || (Pa += ra[1 + fa - Ab] * z / 255, 
            X += ra[fa - Ab] * z / 255), n + fa >> 1);
            k[Aa] += (ra[fa] = Pa) / 65536;
            p[Aa] += (ra[++fa] = X) / 65536;
          }
        }
      }
      n += 768 * Q;
    }, B = Oa[a], [f, t, K, H, C, F, W, R, S, T, u, w, v, G, O, q, r, z, A, E] = Sa[a], N = 4 * T ** 2;
    x(5513);
    x(4562);
    x(3891);
    zb(5 > ++a ? g : b);
  }, k = (da = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), p = da.getChannelData(1);
  zb(g);
}, Hb = () => {
  let b, a, g, k, p, n, x, B, f, t, K, H, C, F, W, R, S = !0;
  const T = [], u = () => {
    b4.innerHTML = "Music: " + S;
    R && (ca || !S ? R.disconnect() : R.connect(W.destination));
  }, w = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = [yb(0.3, 55, q, 1.732051), yb(55, 181, q, 1.732051),];
    ia = yb(0.3, 181, q, 1.732051);
    k = B = void 0;
    T.length = ea = F = H = C = ya = Ba = 0;
    document.hidden && v(!0);
  }, v = q => {
    if (ca !== q) {
      if (ca = q, w(), document.body.className = q ? "l m" : "l", q) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      u();
    }
  }, G = q => {
    try {
      W || (W = new AudioContext(), (R = W.createBufferSource()).buffer = da, R.loop = !0, R.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    v(!1);
    ha = q;
  }, O = (q, r) => q.buttons[r]?.pressed || 0 < q.buttons[r]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    G();
  };
  b2.onclick = () => {
    G(1);
  };
  b5.onclick = () => v(!0);
  b4.onclick = () => {
    S = !S;
    u();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
  };
  onclick = q => {
    if (!ca && (q.target === hC && (ea = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = q => {
    let r;
    q.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (T[r] = !!q.type[5] && !0) && (0 === r && (ea = 1), 1 === r && v(!0)));
  };
  onmousemove = ({movementX:q, movementY:r}) => {
    ha && (q || r) && (Ua += 0.1 * q, Ta += 0.1 * r);
  };
  hC.ontouchstart = q => {
    if (!ca) {
      for (let {pageX:r, pageY:z, identifier:A} of q.changedTouches) {
        ha && r > hC.clientWidth / 2 ? void 0 === B && (f = 0, n = r, x = z, B = A, K = Ta, t = Ua) : void 0 === k && (p = 0, a = r, g = z, k = A);
      }
      b = wa;
    }
  };
  hC.ontouchmove = q => {
    if (!ca) {
      for (let {pageX:N, pageY:Q, identifier:J} of q.changedTouches) {
        var r, z, A, E;
        B === J && (Ta = K + (Q - x) / 2.3, Ua = t + (N - n) / 2.3, f = 1);
        k === J && (J = (a - N) / 20, r = Ya(J), z = (g - Q) / 20, A = Ya(z), (E = 0.5 < $a(r, A)) && (p = 1), H = (E && 0.3 < r) * bb(J, -1), C = (E && 0.3 < A) * bb(z, -1), 2 < r && (a = 20 * (0 > J ? -1 : 1) + N), 2 < A && (g = 20 * (0 > z ? -1 : 1) + Q));
      }
    }
  };
  hC.ontouchend = q => {
    let r;
    document.activeElement === document.body && q.preventDefault();
    for (const z of q.changedTouches) {
      z.identifier === B ? (B = void 0, f || (r = 1), f = 0) : z.identifier === k ? (k = void 0, C = H = 0, p || (r = 1), p = 0) : r = 1;
    }
    q.target === hC && r && b && 0.02 < (q = wa - b) && 0.7 > q && (ea = 1);
  };
  ma = () => {
    ya = C + (T[4] ? 1 : 0) - (T[5] ? 1 : 0);
    Ba = H + (T[2] ? 1 : 0) - (T[3] ? 1 : 0);
    let q = navigator.getGamepads()[0];
    q && (ha && (Ta += xa * ab(q.axes[3], 0.3) * 80, Ua += xa * ab(q.axes[2], 0.3) * 80), ya += O(q, 12) - O(q, 13) - ab(q.axes[1], 0.2), Ba += O(q, 14) - O(q, 15) - ab(q.axes[0], 0.2), O(q, 9) && v(!0), (q = O(q, 3) || O(q, 2) || O(q, 1) || O(q, 0)) && !F && (ea = 1), F = q);
  };
  document.onvisibilitychange = onblur = onresize = w;
  v(!0);
}, Ib = (b, a) => {
  1 / 0 > Ja && (Ja = d + a, h4.innerHTML = b);
}, Jb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Ca = Ma.reduce((b, a) => b + a.i, 0)] + " / XIII";
}, Kb = () => {
  localStorage.spdnt22 = JSON.stringify([e.map(b => b.i), Ma.map(b => b.i), Ia, oa, d,]);
}, M = NO_INLINE((b, a, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * a << 8 | 255 * b), P = () => {
  const b = [];
  c = (a, g = new DOMMatrix(), k) => b.push(...I(a, g, k));
  h.push({m:new DOMMatrix(), o:b,});
}, Lb = b => {
  const a = () => {
    a.g = xb(a.g, a.i, 4);
    a.h = xb(a.h, a.i, 1);
    ob(g).multiplySelf(b);
    ea && 3 > (lb(), gb(Va - hb, Wa - ib, Xa - jb,)) ? a.i ? 0.7 < a.g && (a.i = 0, (Ia = k) && Ib("* click *", 1), Kb()) : 0.3 > a.g && (a.i = 1, (Ia = k) && Ib("* click *", 1), Kb()) : a.i && 0.8 < a.g && 13 === k && (a.i = 0, 13 > Ca ? Ib("Not leaving now, there are souls to catch!", 3) : Da || (Ib("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Da = 1));
    l.rotateSelf(50 * a.g - 25, 0).translateSelf(0, 1).m44 = a.g;
  }, g = h.at(-1).m, k = e.length;
  a.m = g;
  a.F = b;
  e.push(a);
  c(L(5), b.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
  c(L(5), b.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
  c(L(), b.translate(0, -0.4).scale(0.5, 0.1, 0.5), M(0.5, 0.5, 0.4));
}, Mb = (b, ...a) => {
  let g, k, p, n, x = 0, B = 0, f = 1, t = -1;
  const K = () => {
    if (!K.i) {
      let u, w, v, G, O, q = 1, r = 1 / 0;
      for (let z = 0; a.length > z; z++) {
        const A = a[z];
        let E = gb(C - A[0], F - A[1]);
        q = Za(q, E / A[2]);
        0 > (E -= A[2]) ? O = 1 : r > E && (r = E, H = A);
      }
      O || (u = C - H[0], w = F - H[1], v = gb(u, w), G = Math.atan2(-w, u), f && (n = bb(n / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2), G += B, t = -Math.cos(G), x = Math.sin(G), 0.1 < v && (v = Za(v, H[2]) / v, C = u * v + H[0], F = w * v + H[1]));
      f = O;
      n = xb(n, 3 + 6 * (1 - q), 3 + q);
      W = xb(W, C = xb(C, C + t, n), n);
      R = xb(R, F = xb(F, F + x, n), n);
      g = db(g, Math.atan2(W - k, R - p) / Ka - 180, wb(3));
      ob(S).multiplySelf(b).translateSelf(k = W, 0, p = R).rotateSelf(0, g, 7 * Math.sin(1.7 * d),);
      1.6 > (lb(), gb(Va - hb, Wa - ib, Xa - jb,)) && (K.i = 1, Ib([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Ca] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Jb(), Kb());
    }
    K.i && ob(h[28].m).translateSelf(T % 4 * 1.2 - 1.7 + Math.sin(d + T) / 7, -2, 1.7 * (T / 4 | 0) - 5.5 + Ya(T % 4 - 2) + Math.cos(d / 1.5 + T) / 6,);
  };
  let H = a[0], [C, F] = H, [W, R] = H;
  const S = h.at(-1).m, T = Ma.length;
  Ma.push(K);
}, Rb = ({x:b, y:a, z:g}, k) => b * k.x + a * k.y + g * k.z, Sb = b => {
  let a, g = 0, k = 0, p = 0, n = b.at(-1);
  for (a of b) {
    g += (n.y - a.y) * (n.z + a.z), k += (n.z - a.z) * (n.x + a.x), p += (n.x - a.x) * (n.y + a.y), n = a;
  }
  return a = gb(g, k, p), g /= a, k /= a, p /= a, {x:g, y:k, z:p, w:g * n.x + k * n.y + p * n.z,};
}, Tb = (b, a) => {
  var g, k, p, n = a.B;
  for (var x = 0; n.length > x; ++x) {
    if (-0.00008 > (g = Rb(b, n[x]) - b.w) ? p = a : 8e-5 < g && (k = a), p && k) {
      k = [];
      p = [];
      n = a.B;
      x = a.v;
      let B = n.at(-1), f = Rb(b, B) - b.w;
      for (const t of n) {
        g = Rb(b, t) - b.w, 8e-5 > f && p.push(B), -0.00008 < f && k.push(B), (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g) && (f /= g - f, B = {x:B.x + (B.x - t.x) * f, y:B.y + (B.y - t.y) * f, z:B.z + (B.z - t.z) * f,}, k.push(B), p.push(B)), B = t, f = g;
      }
      return {l:2 < k.length && {B:pb(k, n.u, n.C), v:x, A:a,}, j:2 < p.length && {B:pb(p, n.u, n.C), v:x, A:a,},};
    }
  }
  return {l:k, j:p,};
}, Ub = (b, a, g = Sb(a.B)) => {
  let k, p;
  return b ? ({l:k, j:p} = Tb(b, a), k || p || b.o.push(a), k && (b.l = Ub(b.l, k, g)), p && (b.j = Ub(b.j, p, g))) : b = {x:g.x, y:g.y, z:g.z, w:g.w, o:[a,], l:0, j:0,}, b;
}, Vb = (b, a, g) => {
  const k = [], p = (n, x) => {
    let {l:B, j:f} = Tb(n, x);
    B || f || (0 < g * Rb(n, a) ? B = x : f = x);
    B && (n.l ? p(n.l, B) : k.push(B));
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
      for (const x of n) {
        Ub(a, x, p);
      }
    }
  }
  return a;
}), U = (b, ...a) => {
  const g = n => {
    let x;
    return n.A && ((x = k.get(n.A)) ? (p.delete(x), n = g(n.A)) : k.set(n.A, n)), n;
  }, k = new Map(), p = new Map();
  return b = Xb(Zb(Xb(Yb(b)), ...a)), Wb(b, n => {
    for (const x of n.o) {
      p.set(g(x), x.v);
    }
  }), Array.from(p, ([{B:n}, x]) => {
    const B = n.map(({x:f, y:t, z:K}) => ({x:f, y:t, z:K,}));
    return pb(x ? B.reverse() : B, n.u, n.C);
  });
}, Y = (b, a = 0, g = 0) => {
  const k = h[++pa].m;
  return ob(m, k), k.m41 = b, k.m42 = a, k.m43 = g, k;
}, ac = () => {
  let b, a, g, k, p, n, x, B, f, t, K, H, C, F = 0, W = 0, R = 0, S = 0, T = 1, u = 2, w = 15;
  const v = () => ob((u ? e[Ia] : h[30 !== F ? F : 0]).m,), G = r => {
    1 < u ? (ob(e[Ia].m).multiplySelf(e[Ia].F), lb(0, 0.9 < na ? 15 : 1, -2.4)) : (v(), lb(W, R, S));
    r && (p = (hb - Va) / xa, n = (jb - Xa) / xa);
    Va = hb;
    Wa = ib;
    Xa = jb;
  }, O = () => {
    var r = 0, z = 0, A = 0, E = 0, N = 0, Q = 0, J = -1;
    for (var V = 0; 36 > V; ++V) {
      var Ha = 512 * V;
      for (var ja = 96; 416 > ja; ja += 4) {
        for (var ka = 0; 2 > ka; ++ka) {
          var ba = $b[Ha + ja + ka];
          const ra = $b[Ha + ja + ka + 2];
          ba > E && (E = ba);
          ba + ra && (0 > J || J === V) && (J = V, ra === t ? ++r : z && z !== ra || (z = ra, ++A));
        }
      }
    }
    t = 0 > J ? 0 : A > 2 * r ? z : t;
    for (r = 36; 128 > r; ++r) {
      V = J = A = z = 0;
      Ha = 512 * r;
      for (ja = 0; 128 > ja; ++ja) {
        ka = Ha + 4 * ja, ba = $b[ka], 64 > ja ? ba > z && (z = ba) : ba > A && (A = ba), (ba = $b[2 + ka]) > J && (J = ba), ba = $b[1 + ka], 64 < ja ? ba > z && (z = ba) : ba > A && (A = ba), (ba = $b[3 + ka]) > V && (V = ba);
      }
      (A -= z) * A > N * N && (N = A);
      (V -= J) * V > Q * Q && (Q = V);
    }
    N *= 0.7;
    B = bb(1 - 0.01 * $a(Ya(N), Ya(Q)), 0.3);
    N /= 255;
    E /= 255;
    Q /= 255;
    v().invertSelf();
    lb(N, E, Q, 0);
    W += hb;
    R += E;
    S += jb;
    G();
  }, q = (r, z, A, E) => eb(r, z, T || (bb(Ya(z - r) ** 0.5 - A) + 1 / 7) * wb(1.5 * E));
  qa = () => {
    G(t);
    Z.r9r(0, 0, 128, 128, 6408, 5121, $b);
    NO_INLINE(O)();
    !u && t === F || (F = t, v().invertSelf(), lb(Va, Wa, Xa), W = hb, R = ib, S = jb, u = u && (t ? 0 : 1));
    (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (u = 2);
    1 === t && (e[14].i = -15 > Va && 0 > Xa ? 1 : 0);
    f = eb(xb(f, Wa, 2), Wa, u || 8 * Ya(f - Wa),);
    K = q(K, Va, 0.5, 1);
    H = q(H, f, 2, 1);
    C = q(C, Xa, 0.5, 1);
    k = xb(k, sa * (32 < t && 37 > t), 2,);
    ha ? (r = u + wb(18), Ea = eb(Ea, Va, r), Ga = eb(Ga, Xa, r), Fa = eb(Fa, 1.6 + f, r), Ua = cb(Ua)) : (Ea = q(Ea, K, 1, 2 + k,), Ga = q(Ga, C + -18 + 5 * k, 1, 2 + k,), Fa = q(Fa, $a(H + bb((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), r = Za(-6, -Ya(C - Ga)), z = K - Ea, Ua = db(Ua, 90 - cb(Math.atan2(r, z) / Ka), T + wb(10),), Ta = db(Ta, 90 - Math.atan2(gb(r, z), Fa - H) / Ka, T + wb(10),));
    Ta = bb(Ta, -87, 87);
    T = 0;
    var r = bb(ya, -1), z = bb(Ba, -1), A = ab(gb(r, z) ** 0.5, 0.1);
    let E = Math.atan2(r, z);
    A && (b = 90 - E / Ka);
    a = db(a, b, wb(8));
    g = xb(g, A, 10);
    Y(Va, 0.06 * B * g * Math.cos(18.2 * d) + f, Xa,).rotateSelf(0, a);
    for (var N = 0; 2 > N; ++N) {
      const Q = 9.1 * d - Math.PI * N;
      ob(h[37].m, Y(0)).translateSelf(0, g * bb(0.45 * Math.sin(Q - Math.PI / 2)),).rotateSelf(g * Math.sin(Q) * 0.25 / Ka, 0);
    }
    w = t ? 5 : xb(w, u ? 13 : 19 - 2 * Za(0, Wa + 10), 2.2);
    p = t || u ? 0 : xb(p, 0, 3);
    n = t || u ? 0 : xb(n, 0, 3);
    r = (x = u ? 0 : xb(x, t ? 7 * bb(2 * A) * B : 0, t ? 9 : 1,)) * A * Ya(r) * Math.sin(E);
    z = x * A * Ya(z) * Math.cos(E);
    E = ha ? (180 + Ua) * Ka : 0;
    A = xa * (p + (z * Math.cos(E) - Math.sin(E) * r));
    N = xa * -w;
    r = xa * (n + (z * Math.sin(E) + Math.cos(E) * r));
    v().invertSelf();
    lb(A, N, r, 0);
    W += hb;
    R += N;
    S += jb;
    G();
  };
}, bc = b => {
  ca ? 1100 < hC.width && Z.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s) : (void 0 !== b && Z.das(4, h[40].D - h[40].s, 5123, 2 * h[40].s, Ma.length,), Z.das(4, h[41].D - h[41].s, 5123, 2 * h[41].s, e.length,), Z.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
}, ic = (b, a = 35633) => (a = Z.c6x(a), Z.s3c(a, b), Z.c6a(a), a), jc = (b, a) => {
  const g = {}, k = Z.c1h();
  return Z.abz(k, b), Z.abz(k, ic(a, 35632)), Z.l8l(k), p => p ? g[p] || (g[p] = Z.gan(k, p)) : Z.u7y(k);
}, l = new DOMMatrix(), m = new DOMMatrix(), mb = new Float32Array(16), kc = new Float32Array(760), $b = new Uint8Array(65536), Z = hC.getContext("webgl2", {powerPreference:"high-performance",});
for (const b in Z) {
  Z[b[0] + [...b,].reduce((a, g, k) => (a * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[b];
}
zb(() => {
  let b = 0;
  const a = () => {
    if (2 == ++b) {
      const p = u => {
        requestAnimationFrame(p);
        var w = (u - (aa || u)) / 1e3;
        if (wa += w, d += xa = ca ? 0 : Za(0.055, w), aa = u, 0 < xa) {
          w = G => G.translateSelf(Math.sin(d + 2) / 5, Math.sin(0.8 * d) / 5).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          ma();
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          Da && (ha = 0);
          na = Da ? xb(na, -9, 0.015) : xb(na, bb(d / 3), 1);
          oa = xb(oa, e[13].h, 0.2 + 0.3 * Ya(2 * e[13].h - 1),);
          u = (pa = 1, sa = fb(e[15].g, e[8].g), va = eb(xb(va, 0, 1), cb(va + 60 * xa), e[2].g - e[3].h,), ta = eb(xb(ta, 0, 5), cb(ta + 56 * xa), sa,), ua = eb(xb(ua, 0, 4), cb(ua + 48 * xa), sa,), Y(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g),).translateSelf(0), Za(1 - e[11].h, e[10].h));
          var v = (Y(u * Math.sin(0.6 * d + 1.2) * 12, 0, 35), Y(u * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), Y(u * Math.sin(0.6 * d) * 12, 0, 45), Y(9.8 * (1 - u)), u = bb(1 - 5 * u) * fb(e[11].g, e[2].g), Y(0, u * Math.sin(1.35 * d) * 4), Y(0, 0, u * Math.sin(0.9 * d) * 8), Y(0, -6.5 * e[11].h), u = fb(e[4].h, e[3].h), Y(0, u * Math.sin(d) * 5 + 3.5 * (1 - $a(e[3].g, e[4].g)),), Y(0, u * Math.sin(d + 3) * 6, u * Math.sin(0.6 * d + 1) * 6,), Y(0, -7.3 * e[4].h), u = fb(e[6].g, e[7].g), Y(0, -2, 10 - 
          8.5 * u * Ya(Math.sin(1.1 * d))), Y(0, -2, 10 - 8.5 * u * Ya(Math.sin(2.1 * d))), Y(0, -2, 10 - 8.5 * $a(u * Ya(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - u)),), fb(e[5].h, e[15].h));
          for (u = 0; 4 > u; u++) {
            Y((2 < u ? 2 * (1 - v) + v : 0) - 100, v * Math.sin(1.3 * d + 1.7 * u) * (3 + u / 3) + 0.7, 115 - 7 * (1 - e[5].h) * (1 - e[15].h) * (1 & u ? -1 : 1) + $a(0.05, v) * Math.cos(1.3 * d + 7 * u) * (4 - 2 * (1 - u / 3)),);
          }
          u = fb(e[8].h, e[9].h);
          for (let G = 0; 3 > G; ++G) {
            Y(0, u * Math.sin(1.5 * d + 1.5 * G) * 4 + (G ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)),);
          }
          u = fb(fb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2,);
          Y(0, 16 * u, 95 + 8.5 * bb(2 * u - 1));
          Y(0, -4.7 * e[0].g, -15);
          Y(0, -4.7 * e[10].g, 15);
          Y(-99.7, -1.9 - 5.5 * e[3].g, 63.5);
          Y(-100, 0.6 - 5.8 * e[15].g, 96.5);
          w(Y(-12, 4.2, 40 * na - 66));
          w(Y(-123, 1.4, 55 - 65 * oa));
          Y(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + va, 0,);
          Y(2.5 * (1 - v) - 139.7, -3 * (1 - e[5].g) - v * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * v), 0);
          Y(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          Y(-81, 0.6, 106).rotateSelf(0, 40 + ta);
          Y(-65.8, 0.8, 106).rotateSelf(0, ua);
          Y(-50.7, 0.8, 106).rotateSelf(0, 180 - ua);
          Y(-50.7, 0.8, 91).rotateSelf(0, 270 + ua);
          for (w = 0; 13 > w; ++w) {
            Ma[w](), nb(l, kc, 12 + w);
          }
          for (w = 0; 16 > w; ++w) {
            e[w](), nb(l, kc, 25 + w);
          }
          for (let G, O = 0, q = 656; 26 > O; ++O, ++q) {
            G = h[2 + O].m, kc[q++] = G.m41, kc[q++] = G.m42, kc[q++] = G.m43;
          }
          qa();
          for (w = 0; 12 > w; ++w) {
            nb(h[28 + w].m, kc, w);
          }
          H();
          Z.u3a(H("j"), kc);
          Z.v5y(0, 0, 128, 128);
          Z.c4s(16640);
          Z.cbf(!0, !1, !0, !1);
          Z.uae(H("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa,),),);
          bc();
          Z.c4s(256);
          Z.cbf(!1, !0, !1, !0);
          Z.uae(H("b"), !1, nb(ob().translateSelf(-Va, -Wa, -Xa - 0.3,),),);
          bc();
          ea = 0;
        }
        w = Ea;
        v = Fa;
        u = Ga;
        ca ? (ob(ia).invertSelf(), lb(3.6, 3.5), w = hb, v = ib, u = 5, ob(m, x).rotateSelf(-20, 0).invertSelf().translateSelf(-w, -v, -u,).rotateSelf(0, 99), ob().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), nb(l, kc, 9), nb(l, kc, 10), nb(l, kc, 11)) : ob(m, x).rotateSelf(-Ta, -Ua).invertSelf().translateSelf(-w, -v, -u);
        C();
        Z.ubu(C("k"), w, v, u);
        Z.u3a(C("j"), kc);
        Z.uae(C("a"), !1, nb(m));
        Z.ubh(C("g"), 3);
        Z.ubh(C("h"), 3);
        Z.b6o(36160, R);
        Z.v5y(0, 0, 2048, 2048);
        F(54.7);
        W(126);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(C("b"), !1, nb(x));
        Z.uae(C("a"), !1, nb(ia));
        Z.uae(C("i"), !1, B);
        Z.ubh(C("g"), 0);
        Z.ubh(C("h"), 1);
        bc(!ha);
        K();
        Z.uae(K("b"), !1, nb(ob(x).invertSelf()));
        Z.ubu(K("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
        Z.d97(4, 3, 5123, 0);
        Z.b6o(36160, T);
        Z.f1s();
      }, n = new DOMMatrix(), x = new DOMMatrix(), B = new Float32Array(32), f = g, t = D(8, () => ({})), K = jc(ic("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"), "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
      );
      var k = ic("#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}");
      const H = jc(k, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), C = jc(k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), [F, W] = D(2, u => {
        const w = Z.c25();
        return Z.a4v(33984 + u), Z.b9j(3553, w), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), v => {
          let G = 0, O = 0, q = 0, r = 1 / 0, z = 1 / 0, A = 1 / 0, E = -1 / 0, N = -1 / 0, Q = -1 / 0;
          Z.fas(36160, 36096, 3553, w, 0);
          Z.c4s(256);
          ob().scale3dSelf(v *= 1.1).multiplySelf(ob(la[u], n).multiplySelf(x).invertSelf(),);
          for (let J = 0; 8 > J; ++J) {
            const V = t[J];
            lb(4 & J ? 1 : -1, 2 & J ? 1 : -1, 1 & J ? 1 : -1);
            G -= V.x = (0 | hb) / (v * kb);
            O -= V.y = (0 | ib) / (v * kb);
            q -= V.z = (0 | jb) / (v * kb);
          }
          ob().rotateSelf(298, 139).translateSelf(G / 8, O / 8, q / 8);
          for (v = 0; 8 > v; ++v) {
            const {x:J, y:V, z:Ha} = t[v];
            lb(J, V, Ha);
            r = Za(r, hb);
            E = $a(E, hb);
            z = Za(z, ib);
            N = $a(N, ib);
            A = Za(A, jb);
            Q = $a(Q, jb);
          }
          v = 10 + u;
          A *= 0 > A ? v : 1 / v;
          Q *= 0 < Q ? v : 1 / v;
          Z.uae(C("b"), !1, nb(ob(m, n).scaleSelf(2 / (E - r), 2 / (N - z), 2 / (A - Q),).translateSelf((E + r) / -2, (N + z) / -2, (A + Q) / 2).multiplySelf(l), B, u,), 16 * u, 16,);
          bc(!ha);
        };
      }), R = Z.c5w();
      k = Z.c25();
      const S = Z.c3z(), T = Z.c5w();
      C();
      Z.ubh(C("q"), 2);
      K();
      Z.ubh(K("q"), 2);
      H();
      Z.uae(H("a"), !1, nb(yb(1e-4, 2, 1.2, 0.4)));
      Z.b6o(36160, R);
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
      const t = [], K = [], H = [], C = [], F = new Int32Array(8), W = new Map(), R = new Int32Array(F.buffer, 0, 5), S = new Float32Array(F.buffer);
      h.map((w, v) => {
        let G;
        const O = q => {
          let {x:r, y:z, z:A} = G[q], E = (S[0] = r, S[1] = z, S[2] = A, q = "" + (G.C ? R : F), W.get(q));
          return void 0 !== E ? (r = 3 * E, C[r] = (C[r++] + F[5]) / 2, C[r] = (C[r++] + F[6]) / 2, C[r] = (C[r] + F[7]) / 2) : (W.set(q, E = W.size), K.push(r, z, A, S[3]), H.push(F[4]), C.push(F[5], F[6], F[7])), E;
        };
        for (G of (S[3] = 40 === v ? -12 : 41 === v ? -25 : v, w.o)) {
          const {x:q, y:r, z} = Sb(G);
          F[4] = 0 | G.u;
          F[5] = 32767 * q;
          F[6] = 32767 * r;
          F[7] = 32767 * z;
          for (let A = 2, E = O(0), N = O(1); G.length > A; ++A) {
            t.push(E, N, N = O(A));
          }
        }
        w.o = 0;
        w.s = f;
        w.D = f = t.length;
      });
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(K), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(C), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(H), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(t), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      let T = [], u = [];
      try {
        const [w, v, G, O, q] = JSON.parse(localStorage.spdnt22,);
        T = w;
        u = v;
        Ia = G;
        oa = O;
        d = q;
      } catch {
      }
      e.map((w, v) => w.g = w.h = w.i = 13 !== v && T[v] ? 1 : 0);
      Ma.map((w, v) => w.i = u[v] ? 1 : 0);
      Jb();
      na = Ca || 13 !== Ia ? 1 : 0;
      zb(a);
    });
    const k = f => y(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), p = f => U(I(L(), y(0, -f / 2).scale(6, f - 1, 2.2)), I(L(), y(0, -f / 2 - 6).scale(4, f - 3, 4)), I(L(32, 1), y(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), n = D(11, f => sb(qb(rb(18), k(f), M(1, 1, 0.8, 0.2)).reverse(), qb(rb(18), k(f + 1), M(1, 1, 0.8, 0.2)), 1,)).flat(), x = [...I(L(), y(0, -3).scale(11, 1.4, 3), M(0.9, 0.9, 0.9, 0.2)), ...I(L(), y(0, -2.2).scale(7.7, 0.5, 4), M(0.5, 
    0.5, 0.5, 0.2)), ...D(12, f => I(L(), m.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), M(0.6, 0.5, 0.4, 0.3),)).flat(), ...U(I(L(6), m.rotate(90).scale(6, 8, 6), M(0.3, 0.6, 0.6, 0.3)), I(L(4, 0, 0.01), y(0, 6).scale(12, 2, 0.75).rotate(0, 45), M(0.3, 0.6, 0.6, 0.3),), I(L(6), m.rotate(90).scale(5, 12, 5), M(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => I(L(5), y(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), M(0.3, 0.6, 0.6, 0.3),)),),], B = U(I(L(), y(0, -0.5, 1).scale(1.15, 1.2, 6.5), M(0.25, 
    0.25, 0.35, 0.3),), U(I(L(3), y(0, 0, -5.5).scale(3, 2), M(0.6, 0.3, 0.4, 0.3)), I(L(), y(0, 0, -3.65).scale(2.5, 3), M(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => I(L(), y(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), M(0.7, 0.2, 0, 0.3),)),);
    P();
    c([Na.slice(1),], y(-2).scale3d(3).rotate(90, 0));
    P();
    Lb(y(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, t) => {
      c(L(), y(0, 0, t ? 22 : -23).scale(3, 1, 8), M(0.9, 0.9, 0.9, 0.2));
      c(L(), y(0, 6.3, f).scale(4, 0.3, 1), M(0.3, 0.3, 0.3, 0.4));
      c(L(), y(0, 1, f).scale(3, 0.2, 0.35), M(0.5, 0.5, 0.5, 0.3));
      D(5, K => c(n, y(18.5 * (t - 0.5), 0, 4.8 * K - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),));
    });
    c(L(), y(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), M(0.8, 0.8, 0.8, 0.2));
    c(L(), y(3, 1.5, -20).scale(0.5, 2, 5), M(0.7, 0.7, 0.7, 0.2));
    c(L(), y(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), M(0.75, 0.75, 0.75, 0.2),);
    c(L(5), y(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), M(0.6, 0.3, 0.3, 0.4));
    c(U(Zb(I(L(6, 0, 0, 0.3), y(8, -3, -4).scale(13, 1, 13), M(0.7, 0.7, 0.7, 0.2),), U(I(L(6, 0, 0, 0.3), y(0, -0.92).scale(13, 2, 13), M(0.8, 0.8, 0.8, 0.2),), I(L(), m.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), M(0.5, 0.5, 0.5, 0.5),),), I(L(), m.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), M(0.8, 0.2, 0.2, 0.5),), I(L(6), y(0, -8).scale(9, 8, 7), M(0.2, 0.1, 0.4, 0.5)),), I(L(5), m.scale(5, 30, 5), M(0.4, 0.2, 0.6, 0.5)), I(L(5, 0, 1.5), 
    y(0, 1).scale(4.5, 0.3, 4.5), M(0.7, 0.5, 0.9, 0.2),), I(L(6), y(15, -1.5, 4).scale(3.5, 1, 3.5), M(0.5, 0.5, 0.5, 0.5),),),);
    Lb(y(15, -2, 4));
    c(L(), y(-18.65, -3, 55).scale(2.45, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2));
    Lb(y(-55, -1.1, 46).rotate(0, 90));
    c(L(7), y(-57, -2.6, 46).scale(4, 1, 4), M(0.8, 0.8, 0.8, 0.3));
    c(L(6), y(-61.3, -2.4, 49).scale(3, 1, 5), M(0.4, 0.6, 0.6, 0.3));
    c(x, y(-53, 0, 55));
    c(L(), y(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), M(0.7, 0.7, 0.7, 0.2),);
    c(L(3, 0, -0.5), y(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), M(0.8, 0.8, 0.8, 0.2),);
    c(U(Zb(I(L(), y(-100, -2.4, 55).scale(8, 0.9, 8), M(0.8, 0.8, 0.8, 0.2),), I(L(), y(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), M(0.8, 0.8, 0.8, 0.2),), I(L(), y(-100, -2.6, 70).scale(3, 1.1, 7), M(0.8, 0.8, 0.8, 0.2),), I(L(), y(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), M(0.8, 0.8, 0.8, 0.2),), I(L(6), y(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), M(0.6, 0.6, 0.6, 0.3),), I(L(), y(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), M(0.8, 0.8, 0.8, 0.2),), I(L(), y(-100, 0.42, 
    92).scale(3, 1.1, 4.1), M(0.8, 0.8, 0.8, 0.2),),), I(L(8), y(-100, -1, 55).scale(7, 0.9, 7), M(0.3, 0.3, 0.3, 0.4)), I(L(8), y(-100, -2, 55).scale(4, 0.3, 4), M(0.4, 0.4, 0.4, 0.5)), I(L(8, 0, -3.1), y(-100, -3, 55).scale(0.4, 1, 0.4), M(0.4, 0.4, 0.4, 0.5),),),);
    c(U(I(L(), y(-100, 1, 63).scale(7.5, 4), M(0.5, 0.5, 0.5, 0.4)), I(L(), y(-100, 0, 70).scale(2, 2, 10), M(0.5, 0.5, 0.5, 0.4)), I(L(20, 1), y(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), M(0.5, 0.5, 0.5, 0.4),),),);
    Na.map(({x:f, z:t}) => {
      c(L(6), y(3 * f, 3, 15 * t).scale(0.7, 4, 0.7), M(0.6, 0.3, 0.3, 0.4));
      c(L(6), y(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), M(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(K => c(L(6), y(7 * f - 100, K, 7 * t + 55).scale(1.3, 0.5, 1.3), M(0.4, 0.2, 0.2, 0.8),));
      c(L(14, 1), y(9 * f - 38.9, -7.3, 11 * t + 17).scale(1, 4), M(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(K => c(L(17, 1), y(9 * f - 38.9, K - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), M(0.6, 0.6, 0.6, 0.3),));
    });
    D(7, f => {
      c(L((23 * f + 1) % 5 + 5, 0, 0.5), y(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), M(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(L(), y(-87, -9.5, 24).scale(7, 1, 3), M(0.4, 0.5, 0.6, 0.4));
    c(L(4), y(-86, -9.2, 27).scale(5, 1, 5), M(0.5, 0.6, 0.7, 0.3));
    c(L(12, 1), y(-86, -9, 31).scale(1.5, 1, 1.5), M(0.3, 0.3, 0.4, 0.1));
    Lb(y(-86, -7.5, 31));
    c(U(Zb(I(L(5), y(0, 0, -7).scale(2, 1.2, 2), M(0.2, 0.4, 0.7, 0.3)), I(L(5), m.scale(9, 1.2, 9), M(0, 0.2, 0.3, 0.5)), I(L(), m.scale(11, 1, 13), M(0.3, 0.4, 0.6, 0.3)),), I(L(5), m.scale(5.4, 5, 5.4), M(0, 0.2, 0.3, 0.5)),), y(-38.9, -11.3, 17),);
    Lb(y(-38.9, -9.6, 10));
    c(U(Zb(I(L(6), y(0, 0, -18).scale(15, 1.2, 15), M(0.7, 0.7, 0.7, 0.3),), I(L(), m.scale(4, 1.2, 6), M(0.45, 0.4, 0.6, 0.3)),), ...D(6, f => D(6, t => I(L(6), y(4.6 * t - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32).scale(2, 5, 2), M(0.7, 0.7, 0.7, 0.3),),)).flat(),), y(-38.9, -11.3, -1),);
    c(L(5), y(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), M(0.8, 0.1, 0.25, 0.4));
    Lb(y(-84, -0.7, 85).rotate(0, 45));
    D(3, f => {
      c(p(16), y(12 * f - 109, -9, -12), M(0.6, 0.6, 0.6, 0.3));
      c(p(16), y(-77, -9, -12 * f - 20).rotate(0, 90), M(0.6, 0.6, 0.6, 0.3),);
    });
    c(U(Zb(I(L(), y(26.5, -1.6, 10).scale(20, 2.08, 3)), I(L(), y(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...D(4, f => I(L(), y(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...D(3, f => I(L(), y(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), y(-123, 0.2, -12), M(0.5, 0.5, 0.6, 0.2),);
    Lb(y(-116, -1.4, -18).rotate(0, 180));
    c(L(6), y(-116, -2.6, -16.5).scale(3.2, 0.8, 3), M(0.6, 0.5, 0.7, 0.2));
    c(L(), y(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), M(0.8, 0.8, 0.8, 0.2));
    c(L(), y(-115.5, -17, -12).scale(0.5, 15, 2.2), M(0.6, 0.6, 0.6, 0.3));
    c(L(8), y(-114, -17, -2).scale(2, 15, 2), M(0.6, 0.6, 0.6, 0.3));
    c(L(8), y(-79, -17, -2).scale(2, 15, 2), M(1, 1, 1, 0.3));
    c(L(), y(-77, -17, -50.5).scale(2.2, 15, 0.5), M(0.6, 0.6, 0.6, 0.3));
    c(U(I(L(12), y(-77, -14.5, -12).scale(4, 17.5, 4), M(0.7, 0.7, 0.7, 0.2),), I(L(12), y(-77, 3.1, -12).scale(3, 5, 3), M(0.4, 0.5, 0.6, 0.2)), I(L(), y(-79, 0.1, -12).scale(3.5, 2, 1.3), M(0.4, 0.5, 0.6, 0.2),), I(L(), y(-77, 0.1, -14).scale(1.5, 2, 2), M(0.4, 0.5, 0.6, 0.2)),),);
    c(L(), y(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), M(0.6, 0.6, 0.6, 0.3));
    c(L(9), y(-98, -18.4, -40).scale(2.5, 13.5, 2.5), M(0.5, 0.5, 0.5, 0.3));
    c(U(I(L(), y(-93, -5.8, -40).scale(9, 1, 5), M(0.8, 0.8, 0.8, 0.1)), I(L(9), y(-98, -5.8, -40).scale(3, 8, 3), M(0.7, 0.7, 0.7, 0.2)),),);
    Lb(y(-98, -4.4, -40).rotate(0, 90));
    c(U(Zb(I(L(6, 0, 0, 0.6), y(-100, 0.7, 105.5).scale(8, 1, 11), M(0.7, 0.7, 0.7, 0.2),), I(L(), y(-101.5, 0.7, 93.5).scale(10.5, 1, 2), M(0.7, 0.7, 0.7, 0.2),),), I(L(5), y(-100, 0.7, 113).scale(4, 3, 4), M(0.7, 0.7, 0.7, 0.2)),),);
    [-1, 1,].map(f => {
      [7.2, 1.5,].map(t => c(L(15, 1), y(-7.5 * f - 100, t + 0.7, 96).scale(1.1, 0.5, 1.1), M(0.5, 0.24, 0.2, 0.4),));
      c(n, y(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      c(L(12, 1), y(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), M(0.6, 0.24, 0.2, 0.5),);
      c(U(I(L(), y(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), M(0.5, 0.5, 0.5, 0.4),), I(L(), m.scale(3, 3, 10), M(0.6, 0.24, 0.2, 0.5)), I(L(32, 1), y(0, 3, -5).scale(3, 4, 10).rotate(90, 0), M(0.6, 0.24, 0.2, 0.5),), I(L(5), y(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), M(0.6, 0.24, 0.2, 0.5),), I(L(5), y(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), M(0.6, 0.24, 0.2, 0.5),),), y(f - 100, 0.7, 97),);
    });
    c(U(I(L(), y(-82.07, 0.8, 106).scale(11, 0.9, 2.2), M(0.7, 0.7, 0.7, 0.1),), I(L(45, 1), y(-81, 0.7, 106).scale3d(7.7), M(0.7, 0.7, 0.7, 0.1),),),);
    c(L(), y(-58, 1, 106).scale(2, 0.65, 2), M(0.7, 0.7, 0.7, 0.2));
    c(L(), y(-50.7, 1, 99).scale(2, 0.65, 1), M(0.7, 0.7, 0.7, 0.2));
    c(L(), y(-42, 0.4, 91).scale(5, 1, 2.5), M(0.7, 0.7, 0.7, 0.3));
    c(L(), y(-34.2, 0.4, 91).scale(3, 1, 3), M(0.7, 0.7, 0.7, 0.3));
    c(L(5), y(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), M(0.2, 0.5, 0.5, 0.6));
    Lb(y(-34, 2.7, 96).rotate(-12, 0));
    [-1, 1,].map(f => c(n, y(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90)));
    D(3, f => c(p(24.7 - 0.7 * (1 & f)), y(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? M(0.5, 0.5, 0.5, 0.3) : M(0.35, 0.35, 0.35, 0.5),),);
    c(U(I(L(6, 0, 0, 0.3), y(0, -0.92, 95).scale(14, 2, 14), M(0.8, 0.8, 0.8, 0.2),), I(L(5), y(0, 0, 95).scale3d(6), M(0.3, 0.3, 0.3, 0.5)),),);
    Lb(y(0, 1.7, 82).rotate(0, 180));
    c(L(5), y(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), M(0.5, 0.3, 0.3, 0.4),);
    c(L(6), y(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), M(0.5, 0.6, 0.7, 0.3));
    c(L(), y(0, 16, 127.8).scale(1.5, 1, 0.7), M(0.5, 0.6, 0.7, 0.3));
    c(L(7), y(0, 15.1, 133).scale(5, 2, 5), M(0.4, 0.5, 0.6, 0.4));
    c(U(Zb(I(L(), y(0, 16, 110.5).scale(12, 1, 3), M(0.5, 0.3, 0.3, 0.4)), I(L(), y(0, 16, 111).scale(3, 1, 3.8), M(0.5, 0.3, 0.3, 0.4)),), I(L(5), y(0, 16, 103.5).scale(5.5, 5, 5.5), M(0.5, 0.3, 0.3, 0.4),),),);
    Mb(y(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Mb(y(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...rb(18).map(({x:f, z:t}) => [7 * f, 10 * t, 4.5 - 2 * Ya(f),]),);
    Mb(y(0, 3, 95), ...rb(9).map(({x:f, z:t}) => [9 * f, 9 * t, 4,]),);
    Mb(y(0, 19, 134), [0, 0, 3.5,]);
    Mb(y(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Mb(y(-89, 0.2, 80), [0, 0, 6,]);
    Mb(y(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Mb(y(-115, 0.2, -12), [0, 0, 3.5,]);
    Mb(y(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    P();
    c(L(5), y(0, -0.2).scale(5, 1, 5), M(0.6, 0.65, 0.7, 0.3));
    Lb(y(0, 1.2));
    D(2, () => {
      P();
      Na.map(({x:f, z:t}) => {
        c(L(11, 1), y(4 * f, 4, 4 * t).scale(0.8, 3, 0.8), M(0.5, 0.3, 0.7, 0.6));
        c(L(), y(4 * f, 7, 4 * t).scale(1, 0.3), M(0.5, 0.5, 0.5, 0.3));
      });
      c(U(I(L(), m.scale(5, 1, 5), M(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => I(L(25, 1), y(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), M(0.8, 0.8, 0.8, 0.3),)),),);
      c(L(), y(0, -3).scale(8, 2, 8), M(0.4, 0.4, 0.4, 0.3));
    });
    P();
    c(U(Zb(I(L(), m.scale(1.5, 1, 5), M(0.9, 0.9, 0.9, 0.2)), I(L(6), m.scale(4, 1, 5), M(0.9, 0.9, 0.9, 0.2)), I(L(), y(0, -2).scale(2, 3.2, 1.9), M(0.3, 0.8, 0.5, 0.5)), I(L(16, 1, 0, 4), m.scale(1, 1, 1.5).rotate(0, 90), M(0.9, 0.9, 0.9, 0.2),),), I(L(), m.scale(1.3, 10, 1.3), M(0.2, 0.7, 0.4, 0.6)),),);
    Mb(y(0, 2.8), [0, 0, 4.5,]);
    P();
    c(L(3), y(-23, -1.7, 55.8).scale(5, 0.7, 8.3), M(0.3, 0.6, 0.6, 0.2));
    c(L(8), y(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), M(0.8, 0.8, 0.8, 0.2));
    c(L(), y(-23, -3, 55).scale(5.2, 1.7, 3), M(0.5, 0.5, 0.5, 0.3));
    c(L(), y(-23, -2.2, 62).scale(3, 1, 4), M(0.5, 0.5, 0.5, 0.3));
    Lb(y(-23, -0.5, 66.5));
    P();
    c(L(), y(-22.55, -3, 55).scale(1.45, 1.4, 2.7), M(0.7, 0.7, 0.7, 0.2));
    c(U(I(L(), m.scale(3, 1.4, 2.7)), I(L(), m.scale(1.2, 8, 1.2)),), y(-33, -3, 55), M(0.7, 0.7, 0.7, 0.2),);
    P();
    c(U(I(L(), y(-27, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2)), I(L(), y(-27, -3, 55).scale(1, 3), M(0.9, 0.9, 0.9, 0.2)),),);
    c(L(), y(-39, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2));
    P();
    c(L(6), y(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), M(0.7, 0.7, 0.7, 0.4),);
    P();
    [0, 12, 24,].map(f => c(L(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.2, 0.5, 0.6, 0.2),));
    P();
    [6, 18,].map(f => c(L(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.1, 0.4, 0.5, 0.2),));
    P();
    c(U(Zb(I(L(5), y(0, 2).scale(5, 7, 5).skewY(8), M(0.2, 0.4, 0.5, 0.5),), I(L(5), y(0, 6).scale(1.1, 7, 1.1).skewY(-8), M(0.25, 0.35, 0.5, 0.5),), I(L(5), y(0, 9).scale(0.6, 7, 0.6).skewY(8), M(0.35, 0.3, 0.5, 0.5),),), I(L(5), m.scale(4, 8, 4), M(0.2, 0.4, 0.5, 0.5)), I(L(5), y(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), M(0.2, 0.4, 0.5, 0.5),),), y(-38.9, -11.3, 17),);
    Mb(y(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({x:f, z:t}) => [3 * f, 3 * t, 1.2,]),);
    P();
    D(2, f => c(B, y(9 * f - 110 + (1 & f), 1.9, -12)));
    P();
    D(2, f => c(B, y(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    P();
    D(3, f => c(B, y(9 * f - 106, 1.9, -12)));
    D(4, f => {
      P();
      c(L(6), y(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), M(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [M(0.1, 0.55, 0.45, 0.2), M(0.2, 0.5, 0.5, 0.3), M(0.3, 0.45, 0.55, 0.4),].map((f, t) => {
      P();
      c(L(), y(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && c(L(), y(-29.1, 0.4, 91).scale(2.1, 1, 3), M(0.7, 0.7, 0.7, 0.3));
      1 === t && c(L(), y(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), M(0.6, 0.6, 0.7, 0.3),);
    });
    P();
    c(L(5), m.scale(5, 1.1, 5), M(0.5, 0.3, 0.3, 0.4));
    c(L(5), m.scale(5.5, 0.9, 5.5), M(0.25, 0.25, 0.25, 0.4));
    Lb(y(0, 1.5, -1).rotate(0, 180));
    D(4, f => {
      P();
      D(7, t => c(I(L(9, 1), y((2 < f ? 3.5 : 4) * (t / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), M(0.3, 0.3, 0.38),),),);
    });
    D(2, () => {
      P();
      c(U(I(L(30, 1, 1.15, 1), y(0, -3).scale(3.5, 1, 3.5), M(0.7, 0.4, 0.25, 0.7),), I(L(30, 1, 1.3, 1), y(0, -2.5).scale(2.6, 1, 3), M(0.7, 0.4, 0.25, 0.2),), I(L(), y(4, -1.2).scale3d(2), M(0.7, 0.4, 0.25, 0.3)),),);
      Lb(y(0, -3, 4));
    });
    P();
    c(x);
    P();
    c(L(15, 1), y(-7.5).rotate(0, 90).scale(3, 2.3, 3), M(0.4, 0.4, 0.4, 0.3));
    c(L(10), y(-7.5).rotate(0, 90).scale(2, 2.5, 2), M(0.3, 0.8, 0.7, 0.3));
    c(L(5), y(-7.5).rotate(0, 90).scale(1, 3), M(0.5, 0.5, 0.5, 0.5));
    Lb(y(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(n, m.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(U(I(L(10), m.scale(6, 2, 6), M(0.1, 0.6, 0.5, 0.3)), I(L(10), m.scale(3.3, 6, 3.3), M(0.1, 0.6, 0.5, 0.5)),),);
    Mb(y(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    P();
    c(L(3), y(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), M(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(L(6), y(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), M(0.7, 0.7, 0.7, 0.4),);
      c(L(), y(0, 6.2, f + 95).scale(0.5, 11, 0.5), M(0.5, 0.3, 0.3, 0.4));
    });
    P();
    c(U(I(L(45, 1), m.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)), I(L(), y(0, 0, -5.5).scale(1.5, 3, 2.7), M(0.45, 0.45, 0.45, 0.2),),),);
    c(L(8), y(0, 2).scale(3, 1.5, 3).rotate(0, 22), M(0.7, 0.7, 0.7, 0.1));
    c(L(5), y(0, 2).scale(1, 2), M(0.3, 0.3, 0.3, 0.2));
    Mb(y(0, 3), ...rb(14).map(({x:f, z:t}) => [5.6 * f, 5.6 * t, 2,]),);
    P();
    [-1, 1,].map(f => c(n, m.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90),));
    c(U(I(L(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), I(L(), m.scale(9, 5, 2), M(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    P();
    c(U(I(L(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), I(L(), y(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)), I(L(), y(0, 0, 7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    P();
    c(U(I(L(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), I(L(), y(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)), I(L(), y(0, 0, -7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),),);
    c(I(L(28, 1), m.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(I(L(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    P();
    c(vb(20), y(0, 1).scale3d(0.5), M(1, 0.3, 0.4));
    c(vb(30), m.scale(0.65, 0.8, 0.55), M(1, 0.3, 0.4));
    c(L(), y(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), M(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(n, m.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), M(1, 1, 0.8),);
      c(I(U(L(15, 1), I(L(), y(0, 0, 1).scale(2, 2, 0.5)),), m.rotate(-90, 0).scale(0.1, 0.05, 0.1), M(0.3, 0.3, 0.3),), y(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map(f => {
      P();
      c(L(20, 1), y(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), M(1, 0.3, 0.4));
    });
    P();
    c(vb(30, 24, (f, t, K) => {
      const H = t / 24, C = f * Math.PI * 2 / 30, F = Math.sin(H ** 0.6 * Math.PI / 2);
      f = H * H * Math.sin(f * Math.PI * 14 / 30) / 4;
      return 23 < t ? {x:K.C = 0, y:-0.5, z:0,} : {x:Math.cos(C) * F, y:Math.cos(H * Math.PI) - H - f, z:Math.sin(C) * F + Math.sin(f * Math.PI * 2) / 4,};
    }), m.scale(0.7, 0.7, 0.7), M(1, 1, 1),);
    [-1, 1,].map(f => c(vb(12), y(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    P();
    c(L(6, 1), m.scale(0.12, 1.2, 0.12), M(0.3, 0.3, 0.5, 0.1));
    c(L(10), y(0, 0.8).scale(0.2, 0.3, 0.2), M(1, 0.5, 0.2));
    c(L(3), y(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), M(0.2, 0.2, 0.2, 0.1));
  });
});

