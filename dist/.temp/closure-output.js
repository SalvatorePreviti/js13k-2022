let aa, ba, da, ea, fa, ia, ja, ma, na, oa, c, pa, qa, ra, ta, ua, va, d = 0, wa = 0, xa = 0, ya = 0, za = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 14, Ja = 0.1;
const Ka = Math.PI / 180, La = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
), Ma = [], e = [], h = [], Na = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Oa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Pa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],];
var Ta = 0, Ua = 180, Va = 0, Wa = 0, Xa = 0;
const Ya = NO_INLINE(a => 0 > a ? -a : a), Za = NO_INLINE((a, b) => a < b ? a : b), $a = NO_INLINE((a, b) => b < a ? a : b), ab = (a, b) => Ya(a) > b ? a : 0, bb = (a, b = 0, g = 1) => a < b ? b : g < a ? g : a, cb = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka, db = (a, b, g) => a + (2 * (b = (b - a) % 360) % 360 - b) * bb(g) || 0, eb = (a, b, g) => (0 < g ? 1 > g ? a + (b - a) * g : b : a) || 0, fb = (a, b) => (a = bb(a), eb(a, 1 - a, b)), gb = (a, b, g = 0) => (a * a + b * b + g * 
g) ** 0.5, lb = (a = 0, b = 0, g = 0, k = 1) => {
  hb = l.m11 * a + l.m21 * b + l.m31 * g + l.m41 * k;
  ib = l.m12 * a + l.m22 * b + l.m32 * g + l.m42 * k;
  jb = l.m13 * a + l.m23 * b + l.m33 * g + l.m43 * k;
  kb = l.m14 * a + l.m24 * b + l.m34 * g + l.m44 * k;
};
var hb, ib, jb, kb;
const nb = (a, b = mb, g = 0,) => (g *= 16, b[g++] = a.m11, b[g++] = a.m12, b[g++] = a.m13, b[g++] = a.m14, b[g++] = a.m21, b[g++] = a.m22, b[g++] = a.m23, b[g++] = a.m24, b[g++] = a.m31, b[g++] = a.m32, b[g++] = a.m33, b[g++] = a.m34, b[g++] = a.m41, b[g++] = a.m42, b[g++] = a.m43, b[g] = a.m44, b), ob = (a = v, b = l,) => (b.m11 = a.m11, b.m12 = a.m12, b.m13 = a.m13, b.m14 = a.m14, b.m21 = a.m21, b.m22 = a.m22, b.m23 = a.m23, b.m24 = a.m24, b.m31 = a.m31, b.m32 = a.m32, b.m33 = a.m33, b.m34 = a.m34, 
b.m41 = a.m41, b.m42 = a.m42, b.m43 = a.m43, b.m44 = a.m44, b), y = NO_INLINE((a, b, g) => v.translate(a, b, g)), pb = (a, b) => Array.from(Array(a), (g, k) => b(k)), qb = (a, b, g) => (a.C = g, a.u = b, a), rb = (a, b, g = a.u,) => (ob(b), qb(a.map(({x:k, y:n, z:m}) => (lb(k, n, m), {x:hb, y:ib, z:jb,})), g, a.C,)), D = (a, b, g) => a.map(k => rb(k, b, g)), sb = (a, b = 0) => pb(a, g => {
  const k = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Ya(k) ? k : 0 > k ? k - b : k + b,};
}), tb = (a, b, g) => a.map((k, n, {length:m}) => qb([k, b[m - n - 1], b[m - (n + 1) % m - 1], a[(n + 1) % m],], a.u, g,)), I = (a, b, g = 0, k,) => (a = a ? sb(a, k) : Na, k = rb(a, y(0, 1).scale3d(0 < g ? g : 1)), a = rb(a, y(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...tb(a, k, b), k, a,]), wb = (a, b = a, g = (k, n) => (n *= Math.PI / b, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(n), y:Math.cos(n), z:Math.sin(k) * Math.sin(n),})) => {
  const k = [];
  for (let n = 0; a > n; n++) {
    for (let m = 0; b > m; m++) {
      const x = qb([], 0, 1);
      k.push(x);
      x.push(g(n, m, x));
      m && x.push(g((n + 1) % a, m, x));
      b - 1 > m && x.push(g((n + 1) % a, m + 1 % b, x));
      x.push(g(n, m + 1 % b, x));
    }
  }
  return k;
}, xb = NO_INLINE(a => 1 - Math.exp(-xa * a)), yb = NO_INLINE((a, b, g) => eb(a, b, xb(g))), zb = (a, b, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (b + a) / (a - b), -1, 0, 0, 2 * b * a / (a - b), 0,]), Ab = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Bb = a => Math.sin(a * Math.PI * 2), Eb = a => 0.5 > a % 1 ? 1 : -1, Fb = a => a % 1 * 2 - 1, Gb = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Hb = a => {
  let b = 0;
  const g = () => {
    let m = 0;
    const x = R => {
      let K, V, Ia, ka = 0, la = 0;
      const ca = [], sa = new Int32Array(768 * R), dc = 2 ** (r - 9) / R, ec = Math.PI * 2 ** (t - 8) / R, Cb = A * R & -2;
      for (let ub = 0; 11 >= ub; ++ub) {
        for (let vb = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + ub]; 32 > vb; ++vb) {
          const Pb = (32 * ub + vb) * R;
          for (var Qa = 0; 4 > Qa; ++Qa) {
            if (K = 0, Ob && (K = B[Ob - 1].charCodeAt(vb + 32 * Qa) - 40, K += 0 < K ? 106 : 0), K) {
              var ha;
              if (!(ha = ca[K])) {
                ha = K;
                let Y = void 0, Aa = void 0;
                var Qb = K;
                let fc = 0, gc = 0;
                const hc = 2 > b ? Fb : Bb, ic = 2 > b ? 1 > b ? Eb : Gb : Bb, Rb = new Int32Array(S + T + P);
                for (let Ra = 0, Db = 0; S + T + P > Ra; ++Ra, ++Db) {
                  let Sa = 1;
                  S > Ra ? Sa = Ra / S : S + T > Ra || (Sa = (1 - (Sa = (Ra - S - T) / P)) * 3 ** (-q / 16 * Sa));
                  0 > Db || (Db -= 4 * R, Aa = 0.00396 * 2 ** ((Qb + u - 256) / 12), Y = 0.00396 * 2 ** ((Qb + C - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Rb[Ra] = 80 * (hc(fc += Aa * Sa ** (J / 32)) * f + ic(gc += Y * Sa ** (F / 32)) * H + (X ? (2 * Math.random() - 1) * X : 0)) * Sa | 0;
                }
                ha = ca[ha] = Rb;
              }
              for (let Y = 0, Aa = 2 * Pb; ha.length > Y; ++Y, Aa += 2) {
                sa[Aa] += ha[Y];
              }
            }
          }
          for (let Y, Aa = 0; R > Aa; ++Aa) {
            Qa = 0;
            ha = 2 * (Pb + Aa);
            var Ba = (((Y = sa[ha]) || Ia) && (V = 0.00308 * w, 1 !== b && 4 !== b || (V *= Math.sin(dc * ha * Math.PI * 2) * E / 512 + 0.5), V = 1.5 * Math.sin(V), ka += V * la, Ba = (1 - G / 255) * (Y - la) - ka, la += V * Ba, Y = 4 === b ? la : 3 === b ? Ba : ka, b || (Y = 1 > (Y *= 22e-5) ? -1 < Y ? Math.sin(Y / 4 * Math.PI * 2) : -1 : 1, Y /= 22e-5), Y *= L / 32, Ia = 1e-5 < Y * Y, Ba = Math.sin(ec * ha) * p / 512 + 0.5, Qa = Y * (1 - Ba), Y *= Ba), ha < Cb || (Qa += sa[1 + ha - Cb] * z / 255, 
            Y += sa[ha - Cb] * z / 255), m + ha >> 1);
            k[Ba] += (sa[ha] = Qa) / 65536;
            n[Ba] += (sa[++ha] = Y) / 65536;
          }
        }
      }
      m += 768 * R;
    }, B = Oa[b], [f, u, J, H, C, F, X, S, T, W, q, r, w, G, L, p, t, z, A, E] = Pa[b], P = 4 * W ** 2;
    x(5513);
    x(4562);
    x(3891);
    Ab(5 > ++b ? g : a);
  }, k = (da = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), n = da.getChannelData(1);
  Ab(g);
}, Ib = () => {
  let a, b, g, k, n, m, x, B, f, u, J, H, C, F, X, S, T = !0;
  const W = [], q = () => {
    b4.innerHTML = "Music: " + T;
    S && (ba || !T ? S.disconnect() : S.connect(X.destination));
  }, r = () => {
    const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ja = [zb(0.3, 55, p, 1.732051), zb(55, 181, p, 1.732051),];
    ia = zb(0.3, 181, p, 1.732051);
    k = B = void 0;
    W.length = ea = F = H = C = ya = za = 0;
    document.hidden && w(!0);
  }, w = p => {
    if (ba !== p) {
      if (ba = p, r(), document.body.className = p ? "l m" : "l", p) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      q();
    }
  }, G = p => {
    try {
      X || (X = new AudioContext(), (S = X.createBufferSource()).buffer = da, S.loop = !0, S.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    w(!1);
    fa = p;
  }, L = (p, t) => p.buttons[t]?.pressed || 0 < p.buttons[t]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => {
    G();
  };
  b2.onclick = () => {
    G(1);
  };
  b5.onclick = () => w(!0);
  b4.onclick = () => {
    T = !T;
    q();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage.spdnt22 = "", location.reload());
  };
  onclick = p => {
    if (!ba && (p.target === hC && (ea = 1), fa)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = p => {
    let t;
    p.repeat || (t = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[p.code], (W[t] = !!p.type[5] && !0) && (0 === t && (ea = 1), 1 === t && w(!0)));
  };
  onmousemove = ({movementX:p, movementY:t}) => {
    fa && (p || t) && (Ua += 0.1 * p, Ta += 0.1 * t);
  };
  hC.ontouchstart = p => {
    if (!ba) {
      for (let {pageX:t, pageY:z, identifier:A} of p.changedTouches) {
        fa && t > hC.clientWidth / 2 ? void 0 === B && (f = 0, m = t, x = z, B = A, J = Ta, u = Ua) : void 0 === k && (n = 0, b = t, g = z, k = A);
      }
      a = wa;
    }
  };
  hC.ontouchmove = p => {
    if (!ba) {
      for (let {pageX:P, pageY:R, identifier:K} of p.changedTouches) {
        var t, z, A, E;
        B === K && (Ta = J + (R - x) / 2.3, Ua = u + (P - m) / 2.3, f = 1);
        k === K && (K = (b - P) / 20, t = Ya(K), z = (g - R) / 20, A = Ya(z), (E = 0.5 < $a(t, A)) && (n = 1), H = (E && 0.3 < t) * bb(K, -1), C = (E && 0.3 < A) * bb(z, -1), 2 < t && (b = 20 * (0 > K ? -1 : 1) + P), 2 < A && (g = 20 * (0 > z ? -1 : 1) + R));
      }
    }
  };
  hC.ontouchend = p => {
    let t;
    document.activeElement === document.body && p.preventDefault();
    for (const z of p.changedTouches) {
      z.identifier === B ? (B = void 0, f || (t = 1), f = 0) : z.identifier === k ? (k = void 0, C = H = 0, n || (t = 1), n = 0) : t = 1;
    }
    p.target === hC && t && a && 0.02 < (p = wa - a) && 0.7 > p && (ea = 1);
  };
  ma = () => {
    ya = C + (W[4] ? 1 : 0) - (W[5] ? 1 : 0);
    za = H + (W[2] ? 1 : 0) - (W[3] ? 1 : 0);
    let p = navigator.getGamepads()[0];
    p && (fa && (Ta += xa * ab(p.axes[3], 0.3) * 80, Ua += xa * ab(p.axes[2], 0.3) * 80), ya += L(p, 12) - L(p, 13) - ab(p.axes[1], 0.2), za += L(p, 14) - L(p, 15) - ab(p.axes[0], 0.2), L(p, 9) && w(!0), (p = L(p, 3) || L(p, 2) || L(p, 1) || L(p, 0)) && !F && (ea = 1), F = p);
  };
  document.onvisibilitychange = onblur = onresize = r;
  w(!0);
}, Jb = (a, b) => {
  1 / 0 > Ja && (Ja = d + b, h4.innerHTML = a);
}, Kb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][Ca = Ma.reduce((a, b) => a + b.i, 0)] + " / XIII";
}, Lb = () => {
  localStorage.spdnt22 = JSON.stringify([e.map(a => a.i), Ma.map(a => a.i), Ha, oa, d,]);
}, M = NO_INLINE((a, b, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * b << 8 | 255 * a), N = () => {
  const a = [];
  c = (b, g = new DOMMatrix(), k) => a.push(...D(b, g, k));
  h.push({m:new DOMMatrix(), o:a,});
}, Mb = a => {
  const b = () => {
    b.g = yb(b.g, b.i, 4);
    b.h = yb(b.h, b.i, 1);
    ob(g).multiplySelf(a);
    ea && 3 > (lb(), gb(Va - hb, Wa - ib, Xa - jb,)) ? b.i ? 0.7 < b.g && (b.i = 0, Ha = k, Jb("* click *", 1), Lb()) : 0.3 > b.g && (b.i = 1, Ha = k, Jb("* click *", 1), Lb()) : b.i && 0.8 < b.g && 14 === k && (b.i = 0, 13 > Ca ? Jb("Not leaving now, there are souls to catch!", 3) : Da || (Jb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), Da = 1));
    l.rotateSelf(50 * b.g - 25, 0).translateSelf(0, 1).m44 = b.g;
  }, g = h.at(-1).m, k = e.length;
  b.m = g;
  b.F = a;
  e.push(b);
  c(I(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
  c(I(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), M(0.4, 0.5, 0.5));
  c(I(), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), M(0.5, 0.5, 0.4));
}, Nb = (a, ...b) => {
  let g, k, n, m, x = 0, B = 0, f = 1, u = -1;
  const J = () => {
    if (!J.i) {
      let q, r, w, G, L, p = 1, t = 1 / 0;
      for (let z = 0; b.length > z; z++) {
        const A = b[z];
        let E = gb(C - A[0], F - A[1]);
        p = Za(p, E / A[2]);
        0 > (E -= A[2]) ? L = 1 : t > E && (t = E, H = A);
      }
      L || (q = C - H[0], r = F - H[1], w = gb(q, r), G = Math.atan2(-r, q), f && (m = bb(m / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2), G += B, u = -Math.cos(G), x = Math.sin(G), 0.1 < w && (w = Za(w, H[2]) / w, C = q * w + H[0], F = r * w + H[1]));
      f = L;
      m = yb(m, 3 + 6 * (1 - p), 3 + p);
      X = yb(X, C = yb(C, C + u, m), m);
      S = yb(S, F = yb(F, F + x, m), m);
      g = db(g, Math.atan2(X - k, S - n) / Ka - 180, xb(3));
      ob(T).multiplySelf(a).translateSelf(k = X, 0, n = S).rotateSelf(0, g, 7 * Math.sin(1.7 * d),);
      1.6 > (lb(), gb(Va - hb, Wa - ib, Xa - jb,)) && (J.i = 1, Jb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][Ca] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Kb(), Lb());
    }
    J.i && ob(h[35].m).translateSelf(W % 4 * 1.2 - 1.7 + Math.sin(d + W) / 7, -2, 1.7 * (W / 4 | 0) - 5.5 + Ya(W % 4 - 2) + Math.cos(d / 1.5 + W) / 6,);
  };
  let H = b[0], [C, F] = H, [X, S] = H;
  const T = h.at(-1).m, W = Ma.length;
  Ma.push(J);
}, Sb = ({x:a, y:b, z:g}, k) => a * k.x + b * k.y + g * k.z, Tb = a => {
  let b, g = 0, k = 0, n = 0, m = a.at(-1);
  for (b of a) {
    g += (m.y - b.y) * (m.z + b.z), k += (m.z - b.z) * (m.x + b.x), n += (m.x - b.x) * (m.y + b.y), m = b;
  }
  return b = gb(g, k, n), g /= b, k /= b, n /= b, {x:g, y:k, z:n, w:g * m.x + k * m.y + n * m.z,};
}, Ub = (a, b) => {
  var g, k, n, m = b.B;
  for (var x = 0; m.length > x; ++x) {
    if (-0.00008 > (g = Sb(a, m[x]) - a.w) ? n = b : 8e-5 < g && (k = b), n && k) {
      k = [];
      n = [];
      m = b.B;
      x = b.v;
      let B = m.at(-1), f = Sb(a, B) - a.w;
      for (const u of m) {
        g = Sb(a, u) - a.w, 8e-5 > f && n.push(B), -0.00008 < f && k.push(B), (8e-5 < f && -0.00008 > g || -0.00008 > f && 8e-5 < g) && (f /= g - f, B = {x:B.x + (B.x - u.x) * f, y:B.y + (B.y - u.y) * f, z:B.z + (B.z - u.z) * f,}, k.push(B), n.push(B)), B = u, f = g;
      }
      return {l:2 < k.length && {B:qb(k, m.u, m.C), v:x, A:b,}, j:2 < n.length && {B:qb(n, m.u, m.C), v:x, A:b,},};
    }
  }
  return {l:k, j:n,};
}, Vb = (a, b, g = Tb(b.B)) => {
  let k, n;
  return a ? ({l:k, j:n} = Ub(a, b), k || n || a.o.push(b), k && (a.l = Vb(a.l, k, g)), n && (a.j = Vb(a.j, n, g))) : a = {x:g.x, y:g.y, z:g.z, w:g.w, o:[b,], l:0, j:0,}, a;
}, Wb = (a, b, g) => {
  const k = [], n = (m, x) => {
    let {l:B, j:f} = Ub(m, x);
    B || f || (0 < g * Sb(m, b) ? B = x : f = x);
    B && (m.l ? n(m.l, B) : k.push(B));
    f && m.j && n(m.j, f);
  };
  for (const m of b.o) {
    n(a, m);
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
    Xb(b, n => n.o = Wb(g, n, 1));
    Xb(g, n => k.push([n, Wb(b, n, -1),]));
    for (let [n, m] of k) {
      for (const x of m) {
        Vb(b, x, n);
      }
    }
  }
  return b;
}), O = (a, ...b) => {
  const g = m => {
    let x;
    return m.A && ((x = k.get(m.A)) ? (n.delete(x), m = g(m.A)) : k.set(m.A, m)), m;
  }, k = new Map(), n = new Map();
  return a = Yb($b(Yb(Zb(a)), ...b)), Xb(a, m => {
    for (const x of m.o) {
      n.set(g(x), x.v);
    }
  }), Array.from(n, ([{B:m}, x]) => {
    const B = m.map(({x:f, y:u, z:J}) => ({x:f, y:u, z:J,}));
    return qb(x ? B.reverse() : B, m.u, m.C);
  });
}, Q = (a, b = 0, g = 0) => {
  const k = h[++pa].m;
  return ob(v, k), k.m41 = a, k.m42 = b, k.m43 = g, k;
}, bc = () => {
  let a, b, g, k, n, m, x, B, f, u, J, H, C, F = 0, X = 0, S = 0, T = 0, W = 1, q = 2, r = 15;
  const w = () => ob((q ? e[Ha] : h[28 !== F ? F : 0]).m,), G = t => {
    1 < q ? (ob(e[Ha].m).multiplySelf(e[Ha].F), lb(0, 0.9 < na ? 15 : 1, -2.4)) : (w(), lb(X, S, T));
    t && (n = (hb - Va) / xa, m = (jb - Xa) / xa);
    Va = hb;
    Wa = ib;
    Xa = jb;
  }, L = () => {
    var t = 0, z = 0, A = 0, E = 0, P = 0, R = 0, K = -1;
    for (var V = 0; 36 > V; ++V) {
      var Ia = 512 * V;
      for (var ka = 96; 416 > ka; ka += 4) {
        for (var la = 0; 2 > la; ++la) {
          var ca = ac[Ia + ka + la];
          const sa = ac[Ia + ka + la + 2];
          ca > E && (E = ca);
          ca + sa && (0 > K || K === V) && (K = V, sa === u ? ++t : z && z !== sa || (z = sa, ++A));
        }
      }
    }
    u = 0 > K ? 0 : A > 2 * t ? z : u;
    for (t = 36; 128 > t; ++t) {
      V = K = A = z = 0;
      Ia = 512 * t;
      for (ka = 0; 128 > ka; ++ka) {
        la = Ia + 4 * ka, ca = ac[la], 64 > ka ? ca > z && (z = ca) : ca > A && (A = ca), (ca = ac[2 + la]) > K && (K = ca), ca = ac[1 + la], 64 < ka ? ca > z && (z = ca) : ca > A && (A = ca), (ca = ac[3 + la]) > V && (V = ca);
      }
      (A -= z) * A > P * P && (P = A);
      (V -= K) * V > R * R && (R = V);
    }
    P *= 0.7;
    B = bb(1 - 0.01 * $a(Ya(P), Ya(R)), 0.3);
    P /= 255;
    E /= 255;
    R /= 255;
    w().invertSelf();
    lb(P, E, R, 0);
    X += hb;
    S += E;
    T += jb;
    G();
  }, p = (t, z, A, E) => eb(t, z, W || (bb(Ya(z - t) ** 0.5 - A) + 1 / 7) * xb(1.5 * E));
  qa = () => {
    G(u);
    U.r9r(0, 0, 128, 128, 6408, 5121, ac);
    NO_INLINE(L)();
    !q && u === F || (F = u, w().invertSelf(), lb(Va, Wa, Xa), X = hb, S = ib, T = jb, q = q && (u ? 0 : 1));
    (-20 > Va || 109 > Xa ? -25 : -9) > Wa && (q = 2);
    1 === u && (e[15].i = -15 > Va && 0 > Xa ? 1 : 0);
    f = eb(yb(f, Wa, 2), Wa, q || 8 * Ya(f - Wa),);
    J = p(J, Va, 0.5, 1);
    H = p(H, f, 2, 1);
    C = p(C, Xa, 0.5, 1);
    k = yb(k, ra * (30 < u && 35 > u), 2,);
    fa ? (t = q + xb(18), Ea = eb(Ea, Va, t), Ga = eb(Ga, Xa, t), Fa = eb(Fa, 1.6 + f, t), Ua = cb(Ua)) : (Ea = p(Ea, J, 1, 2 + k,), Ga = p(Ga, C + -18 + 5 * k, 1, 2 + k,), Fa = p(Fa, $a(H + bb((-60 - Xa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), t = Za(-6, -Ya(C - Ga)), z = J - Ea, Ua = db(Ua, 90 - cb(Math.atan2(t, z) / Ka), W + xb(10),), Ta = db(Ta, 90 - Math.atan2(gb(t, z), Fa - H) / Ka, W + xb(10),));
    Ta = bb(Ta, -87, 87);
    W = 0;
    var t = bb(ya, -1), z = bb(za, -1), A = ab(gb(t, z) ** 0.5, 0.1);
    let E = Math.atan2(t, z);
    A && (a = 90 - E / Ka);
    b = db(b, a, xb(8));
    g = yb(g, A, 10);
    Q(Va, 0.06 * B * g * Math.cos(18.2 * d) + f, Xa,).rotateSelf(0, b);
    for (var P = 0; 2 > P; ++P) {
      const R = 9.1 * d - Math.PI * P;
      ob(h[37].m, Q(0)).translateSelf(0, g * bb(0.45 * Math.sin(R - Math.PI / 2)),).rotateSelf(g * Math.sin(R) * 0.25 / Ka, 0);
    }
    r = u ? 5 : yb(r, q ? 13 : 19 - 2 * Za(0, Wa + 10), 2.2);
    n = u || q ? 0 : yb(n, 0, 3);
    m = u || q ? 0 : yb(m, 0, 3);
    t = (x = q ? 0 : yb(x, u ? 7 * bb(2 * A) * B : 0, u ? 9 : 1,)) * A * Ya(t) * Math.sin(E);
    z = x * A * Ya(z) * Math.cos(E);
    E = fa ? (180 + Ua) * Ka : 0;
    A = xa * (n + (z * Math.cos(E) - Math.sin(E) * t));
    P = xa * -r;
    t = xa * (m + (z * Math.sin(E) + Math.cos(E) * t));
    w().invertSelf();
    lb(A, P, t, 0);
    X += hb;
    S += P;
    T += jb;
    G();
  };
}, cc = (a, b) => {
  ba ? 1100 < hC.width && a.d97(4, h[39].D - h[37].s, 5123, 2 * h[37].s) : (void 0 !== b && a.das(4, h[40].D - h[40].s, 5123, 2 * h[40].s, Ma.length,), a.das(4, h[41].D - h[41].s, 5123, 2 * h[41].s, e.length,), a.d97(4, (b ? h[39].D : h[37].s) - 3, 5123, 6));
}, jc = (a, b, g = 35633,) => (g = a.c6x(g), a.s3c(g, b), a.c6a(g), g), kc = (a, b, g) => {
  const k = {}, n = a.c1h();
  return a.abz(n, b), a.abz(n, jc(a, g, 35632)), a.l8l(n), m => m ? k[m] || (k[m] = a.gan(n, m)) : a.u7y(n);
}, l = new DOMMatrix(), v = new DOMMatrix(), mb = new Float32Array(16), lc = new Float32Array(760), ac = new Uint8Array(65536), Z = hC.getContext("webgl2", {powerPreference:"high-performance",}), U = hD.getContext("webgl2", {powerPreference:"high-performance",});
for (const a in Z) {
  Z[a[0] + [...a,].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = Z[a], U[a[0] + [...a,].reduce((b, g, k) => (b * k + g.charCodeAt(0)) % 434, 0).toString(36)] = U[a];
}
Ab(() => {
  let a = 0;
  const b = () => {
    if (2 == ++a) {
      const n = q => {
        requestAnimationFrame(n);
        var r = (q - (aa || q)) / 1e3;
        if (wa += r, d += xa = ba ? 0 : Za(0.055, r), aa = q, 0 < xa) {
          r = (G, L, p) => Q(G + Math.sin(d + 2) / 5, L + Math.sin(0.8 * d) / 5, p).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          Ja && d > Ja && (Ja = 0, h4.innerHTML = "");
          Da && (fa = 0);
          na = Da ? yb(na, -9, 0.015) : yb(na, bb(d / 3), 1);
          oa = yb(oa, e[14].h, 0.2 + 0.3 * Ya(2 * e[14].h - 1),);
          ma();
          q = (pa = 1, ra = fb(e[13].g, e[8].g), va = eb(yb(va, 0, 1), cb(va + 60 * xa), e[2].g - e[3].h,), ta = eb(yb(ta, 0, 5), cb(ta + 56 * xa), ra,), ua = eb(yb(ua, 0, 4), cb(ua + 48 * xa), ra,), Q(0, 270 * (e[1].g - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].g),), Za(1 - e[11].h, e[10].h));
          var w = (Q(q * Math.sin(0.6 * d + 1.2) * 12, 0, 35), Q(q * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), Q(q * Math.sin(0.6 * d) * 12, 0, 45), Q(9.8 * (1 - q)), q = bb(1 - 5 * q) * fb(e[11].g, e[2].g), Q(0, q * Math.sin(1.35 * d) * 4), Q(0, 0, q * Math.sin(0.9 * d) * 8), Q(0, -6.5 * e[11].h), q = fb(e[4].h, e[3].h), Q(0, q * Math.sin(d) * 5 + 3.5 * (1 - $a(e[3].g, e[4].g)),), Q(0, q * Math.sin(d + 3) * 6, q * Math.sin(0.6 * d + 1) * 6,), Q(0, -7.3 * e[4].h), q = fb(e[6].g, e[7].g), Q(0, -2, 10 - 
          8.5 * q * Ya(Math.sin(1.1 * d))), Q(0, -2, 10 - 8.5 * q * Ya(Math.sin(2.1 * d))), Q(0, -2, 10 - 8.5 * $a(q * Ya(Math.sin(1.5 * d)), (1 - e[6].g) * (1 - q)),), fb(e[5].h, e[13].h));
          for (q = 0; 4 > q; q++) {
            Q((2 < q ? 2 * (1 - w) + w : 0) - 100, w * Math.sin(1.3 * d + 1.7 * q) * (3 + q / 3) + 0.7, 115 - 7 * (1 - e[5].h) * (1 - e[13].h) * (1 & q ? -1 : 1) + $a(0.05, w) * Math.cos(1.3 * d + 7 * q) * (4 - 2 * (1 - q / 3)),);
          }
          q = fb(e[8].h, e[9].h);
          for (let G = 0; 3 > G; ++G) {
            Q(0, q * Math.sin(1.5 * d + 1.5 * G) * 4 + (G ? 0 : 3 * (1 - e[8].h) * (1 - e[9].h)),);
          }
          q = fb(fb((e[9].g + e[9].h) / 2, e[8].h), (e[12].g + e[12].h) / 2,);
          Q(0, 16 * q, 95 + 8.5 * bb(2 * q - 1));
          Q(0, -4.7 * e[0].g, -15);
          Q(0, -4.7 * e[10].g, 15);
          Q(-99.7, -1.9 - 5.5 * e[3].g, 63.5);
          Q(-100, 0.6 - 5.8 * e[13].g, 96.5);
          Q(-75, 3 * (1 - e[2].h) * (1 - e[3].g), 55).rotateSelf(180 * (1 - e[2].h) + va, 0,);
          Q(2.5 * (1 - w) - 139.7, -3 * (1 - e[5].g) - w * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * w), 0);
          Q(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          Q(-81, 0.6, 106).rotateSelf(0, 40 + ta);
          Q(-65.8, 0.8, 106).rotateSelf(0, ua);
          Q(-50.7, 0.8, 106).rotateSelf(0, 180 - ua);
          Q(-50.7, 0.8, 91).rotateSelf(0, 270 + ua);
          r(-12, 4.2, 40 * na - 66);
          r(-123, 1.4, 55 - 65 * oa);
          for (r = 0; 13 > r; ++r) {
            Ma[r](), nb(l, lc, 12 + r);
          }
          for (r = 0; 16 > r; ++r) {
            e[r](), nb(l, lc, 25 + r);
          }
          for (let G, L = 0, p = 656; 26 > L; ++L, ++p) {
            G = h[2 + L].m, lc[p++] = G.m41, lc[p++] = G.m42, lc[p++] = G.m43;
          }
          qa();
          for (r = 0; 12 > r; ++r) {
            nb(h[28 + r].m, lc, r);
          }
          H();
          U.u3a(H("j"), lc);
          U.v5y(0, 0, 128, 128);
          U.cbf(!0, !0, !0, !0);
          U.c4s(16640);
          U.cbf(!0, !1, !0, !1);
          U.uae(H("b"), !1, nb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Va, -Wa, 0.3 - Xa,),),);
          cc(U);
          U.c4s(256);
          U.cbf(!1, !0, !1, !0);
          U.uae(H("b"), !1, nb(ob().translateSelf(-Va, -Wa, -Xa - 0.3,),),);
          cc(U);
          ea = 0;
        }
        r = Ea;
        w = Fa;
        q = Ga;
        ba ? (ob(ia).invertSelf(), lb(3.6, 3.5), r = hb, w = ib, q = 5, ob(v, x).rotateSelf(-20, 0).invertSelf().translateSelf(-r, -w, -q,).rotateSelf(0, 99), ob().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), nb(l, lc, 9), nb(l, lc, 10), nb(l, lc, 11)) : ob(v, x).rotateSelf(-Ta, -Ua).invertSelf().translateSelf(-r, -w, -q);
        C();
        Z.ubu(C("k"), r, w, q);
        Z.u3a(C("j"), lc);
        Z.uae(C("a"), !1, nb(v));
        Z.ubh(C("g"), 3);
        Z.ubh(C("h"), 3);
        Z.b6o(36160, S);
        Z.v5y(0, 0, 2048, 2048);
        F(54.7);
        X(126);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.cbf(!0, !0, !0, !0);
        Z.c4s(16640);
        Z.uae(C("b"), !1, nb(x));
        Z.uae(C("a"), !1, nb(ia));
        Z.uae(C("i"), !1, B);
        Z.ubh(C("g"), 0);
        Z.ubh(C("h"), 1);
        cc(Z, !fa);
        J();
        Z.uae(J("b"), !1, nb(ob(x).invertSelf()));
        Z.ubu(J("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
        Z.d97(4, 3, 5123, 0);
        U.f1s();
      }, m = new DOMMatrix(), x = new DOMMatrix(), B = new Float32Array(32), f = g, u = pb(8, () => ({})), J = kc(Z, jc(Z, "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}",
      );
      var k = jc(Z, "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}");
      const H = kc(U, jc(U, "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],f.w==-25.&&l.w==0.)l=mix(l,vec4(.7,1,.2,0),r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}"), 
      "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<4.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), C = kc(Z, 
      k, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), [F, X] = pb(2, q => {
        const r = Z.c25();
        return Z.a4v(33984 + q), Z.b9j(3553, r), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), w => {
          let G = 0, L = 0, p = 0, t = 1 / 0, z = 1 / 0, A = 1 / 0, E = -1 / 0, P = -1 / 0, R = -1 / 0;
          Z.fas(36160, 36096, 3553, r, 0);
          Z.c4s(256);
          ob().scale3dSelf(w *= 1.1).multiplySelf(ob(ja[q], m).multiplySelf(x).invertSelf(),);
          for (let K = 0; 8 > K; ++K) {
            const V = u[K];
            lb(4 & K ? 1 : -1, 2 & K ? 1 : -1, 1 & K ? 1 : -1);
            G -= V.x = (0 | hb) / (w * kb);
            L -= V.y = (0 | ib) / (w * kb);
            p -= V.z = (0 | jb) / (w * kb);
          }
          ob().rotateSelf(298, 139).translateSelf(G / 8, L / 8, p / 8);
          for (w = 0; 8 > w; ++w) {
            const {x:K, y:V, z:Ia} = u[w];
            lb(K, V, Ia);
            t = Za(t, hb);
            E = $a(E, hb);
            z = Za(z, ib);
            P = $a(P, ib);
            A = Za(A, jb);
            R = $a(R, jb);
          }
          w = 10 + q;
          A *= 0 > A ? w : 1 / w;
          R *= 0 < R ? w : 1 / w;
          Z.uae(C("b"), !1, nb(ob(v, m).scaleSelf(2 / (E - t), 2 / (P - z), 2 / (A - R),).translateSelf((E + t) / -2, (P + z) / -2, (A + R) / 2).multiplySelf(l), B, q,), 16 * q, 16,);
          cc(Z, !fa);
        };
      }), S = Z.c5w();
      k = U.c25();
      const T = U.c3z(), W = U.c5w();
      C();
      Z.ubh(C("q"), 2);
      J();
      Z.ubh(J("q"), 2);
      H();
      U.uae(H("a"), !1, nb(zb(1e-4, 2, 1.2, 0.4)));
      Z.b6o(36160, S);
      Z.d45([0,]);
      Z.r9l(0);
      U.b6o(36160, W);
      U.bb1(36161, T);
      U.r4v(36161, 33190, 128, 128);
      U.f8w(36160, 36096, 36161, T);
      U.b9j(3553, k);
      U.t60(3553, 0, 6408, 128, 128, 0, 6408, 5121, null);
      U.fas(36160, 36064, 3553, k, 0);
      U.c5t(0, 0, 0, 0);
      Z.a4v(33986);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.c5t(0, 0, 0, 1);
      for (const q of [Z, U,]) {
        q.e8z(2929), q.e8z(2884), q.c70(1), q.d4n(515);
      }
      NO_INLINE(Ib)();
      NO_INLINE(bc)();
      requestAnimationFrame(n);
    }
  }, g = new Image();
  g.onload = g.onerror = b;
  g.src = La;
  NO_INLINE(Hb)(() => {
    Ab(() => {
      let f = 0;
      const u = [], J = [], H = [], C = [], F = new Int32Array(8), X = new Map(), S = new Int32Array(F.buffer, 0, 5), T = new Float32Array(F.buffer);
      h.map((r, w) => {
        let G;
        const L = p => {
          let {x:t, y:z, z:A} = G[p], E = (T[0] = t, T[1] = z, T[2] = A, p = "" + (G.C ? S : F), X.get(p));
          return void 0 !== E ? (t = 3 * E, C[t] = (C[t++] + F[5]) / 2, C[t] = (C[t++] + F[6]) / 2, C[t] = (C[t] + F[7]) / 2) : (X.set(p, E = X.size), J.push(t, z, A, T[3]), H.push(F[4]), C.push(F[5], F[6], F[7])), E;
        };
        for (G of (T[3] = 40 === w ? -12 : 41 === w ? -25 : w, r.o)) {
          const {x:p, y:t, z} = Tb(G);
          F[4] = 0 | G.u;
          F[5] = 32767 * p;
          F[6] = 32767 * t;
          F[7] = 32767 * z;
          for (let A = 2, E = L(0), P = L(1); G.length > A; ++A) {
            u.push(E, P, P = L(A));
          }
        }
        r.o = 0;
        r.s = f;
        r.D = f = u.length;
      });
      for (const r of [Z, U,]) {
        r.b11(34962, r.c1b()), r.b2v(34962, new Float32Array(J), 35044), r.v7s(0, 4, 5126, !1, 0, 0), r.b11(34962, r.c1b()), r.b2v(34962, new Int16Array(C), 35044), r.v7s(1, 3, 5122, !0, 0, 0), r.b11(34962, r.c1b()), r.b2v(34962, new Uint32Array(H), 35044), r.v7s(2, 4, 5121, !0, 0, 0), r.b11(34963, r.c1b()), r.b2v(34963, new Uint16Array(u), 35044), r.e3x(0), r.e3x(1), r.e3x(2);
      }
      let W = [], q = [];
      try {
        const [r, w, G, L, p] = JSON.parse(localStorage.spdnt22,);
        W = r;
        q = w;
        Ha = G;
        oa = L;
        d = p;
      } catch {
      }
      e.map((r, w) => r.g = r.h = r.i = 14 !== w && W[w] ? 1 : 0);
      Ma.map((r, w) => r.i = q[w] ? 1 : 0);
      Kb();
      na = Ca || 14 !== Ha ? 1 : 0;
      Ab(b);
    });
    const k = f => y(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), n = f => O(D(I(), y(0, -f / 2).scale(6, f - 1, 2.2)), D(I(), y(0, -f / 2 - 6).scale(4, f - 3, 4)), D(I(32, 1), y(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), m = pb(11, f => tb(rb(sb(18), k(f), M(1, 1, 0.8, 0.2)).reverse(), rb(sb(18), k(f + 1), M(1, 1, 0.8, 0.2)), 1,)).flat(), x = [...D(I(), y(0, -3).scale(11, 1.4, 3), M(0.9, 0.9, 0.9, 0.2)), ...D(I(), y(0, -2.2).scale(7.7, 0.5, 4), M(0.5, 
    0.5, 0.5, 0.2)), ...pb(12, f => D(I(), v.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), M(0.6, 0.5, 0.4, 0.3),)).flat(), ...O(D(I(6), v.rotate(90).scale(6, 8, 6), M(0.3, 0.6, 0.6, 0.3)), D(I(4, 0, 0.01), y(0, 6).scale(12, 2, 0.75).rotate(0, 45), M(0.3, 0.6, 0.6, 0.3),), D(I(6), v.rotate(90).scale(5, 12, 5), M(0.3, 0.6, 0.6, 0.3)), ...[-5, 0, 5,].map(f => D(I(5), y(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), M(0.3, 0.6, 0.6, 0.3),)),),], B = O(D(I(), y(0, -0.5, 1).scale(1.15, 1.2, 6.5), M(0.25, 
    0.25, 0.35, 0.3),), O(D(I(3), y(0, 0, -5.5).scale(3, 2), M(0.6, 0.3, 0.4, 0.3)), D(I(), y(0, 0, -3.65).scale(2.5, 3), M(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => D(I(), y(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), M(0.7, 0.2, 0, 0.3),)),);
    N();
    c([Na.slice(1),], y(-2).scale3d(3).rotate(90, 0));
    N();
    Mb(y(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, u) => {
      c(I(), y(0, 0, u ? 22 : -23).scale(3, 1, 8), M(0.9, 0.9, 0.9, 0.2));
      c(I(), y(0, 6.3, f).scale(4, 0.3, 1), M(0.3, 0.3, 0.3, 0.4));
      c(I(), y(0, 1, f).scale(3, 0.2, 0.35), M(0.5, 0.5, 0.5, 0.3));
    });
    c(I(), y(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), M(0.8, 0.8, 0.8, 0.2));
    c(I(), y(3, 1.5, -20).scale(0.5, 2, 5), M(0.7, 0.7, 0.7, 0.2));
    c(I(), y(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), M(0.75, 0.75, 0.75, 0.2),);
    c(I(5), y(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), M(0.6, 0.3, 0.3, 0.4));
    c(O($b(D(I(6, 0, 0, 0.3), y(8, -3, -4).scale(13, 1, 13), M(0.7, 0.7, 0.7, 0.2),), O(D(I(6, 0, 0, 0.3), y(0, -0.92).scale(13, 2, 13), M(0.8, 0.8, 0.8, 0.2),), D(I(), v.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), M(0.5, 0.5, 0.5, 0.5),),), D(I(), v.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), M(0.8, 0.2, 0.2, 0.5),), D(I(6), y(0, -8).scale(9, 8, 7), M(0.2, 0.1, 0.4, 0.5)),), D(I(5), v.scale(5, 30, 5), M(0.4, 0.2, 0.6, 0.5)), D(I(5, 0, 1.5), 
    y(0, 1).scale(4.5, 0.3, 4.5), M(0.7, 0.5, 0.9, 0.2),), D(I(6), y(15, -1.5, 4).scale(3.5, 1, 3.5), M(0.5, 0.5, 0.5, 0.5),),),);
    Mb(y(15, -2, 4));
    c(I(), y(-18.65, -3, 55).scale(2.45, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2));
    Mb(y(-55, -1.1, 46).rotate(0, 90));
    c(I(7), y(-57, -2.6, 46).scale(4, 1, 4), M(0.8, 0.8, 0.8, 0.3));
    c(I(6), y(-61.3, -2.4, 49).scale(3, 1, 5), M(0.4, 0.6, 0.6, 0.3));
    c(x, y(-53, 0, 55));
    c(I(), y(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), M(0.7, 0.7, 0.7, 0.2),);
    c(I(3, 0, -0.5), y(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), M(0.8, 0.8, 0.8, 0.2),);
    c(O($b(D(I(), y(-100, -2.4, 55).scale(8, 0.9, 8), M(0.8, 0.8, 0.8, 0.2),), D(I(), y(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), M(0.8, 0.8, 0.8, 0.2),), D(I(), y(-100, -2.6, 70).scale(3, 1.1, 7), M(0.8, 0.8, 0.8, 0.2),), D(I(), y(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), M(0.8, 0.8, 0.8, 0.2),), D(I(6), y(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), M(0.6, 0.6, 0.6, 0.3),), D(I(), y(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), M(0.8, 0.8, 0.8, 0.2),), D(I(), y(-100, 0.42, 
    92).scale(3, 1.1, 4.1), M(0.8, 0.8, 0.8, 0.2),),), D(I(8), y(-100, -1, 55).scale(7, 0.9, 7), M(0.3, 0.3, 0.3, 0.4)), D(I(8), y(-100, -2, 55).scale(4, 0.3, 4), M(0.4, 0.4, 0.4, 0.5)), D(I(8, 0, -3.1), y(-100, -3, 55).scale(0.4, 1, 0.4), M(0.4, 0.4, 0.4, 0.5),),),);
    c(O(D(I(), y(-100, 1, 63).scale(7.5, 4), M(0.5, 0.5, 0.5, 0.4)), D(I(), y(-100, 0, 70).scale(2, 2, 10), M(0.5, 0.5, 0.5, 0.4)), D(I(20, 1), y(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), M(0.5, 0.5, 0.5, 0.4),),),);
    Na.map(({x:f, z:u}) => {
      c(I(6), y(3 * f, 3, 15 * u).scale(0.7, 4, 0.7), M(0.6, 0.3, 0.3, 0.4));
      c(I(6), y(7 * f - 100, -3, 7 * u + 55).scale(1, 8.1), M(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(J => c(I(6), y(7 * f - 100, J, 7 * u + 55).scale(1.3, 0.5, 1.3), M(0.4, 0.2, 0.2, 0.8),));
      c(I(14, 1), y(9 * f - 38.9, -7.3, 11 * u + 17).scale(1, 4), M(0.25, 0.25, 0.25, 1),);
      [1.5, 8,].map(J => c(I(17, 1), y(9 * f - 38.9, J - 11.3, 11 * u + 17).scale(1.5, 0.5, 1.5), M(0.6, 0.6, 0.6, 0.3),));
    });
    pb(7, f => {
      c(I((23 * f + 1) % 5 + 5, 0, 0.5), y(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1 + f / 6, 5 + f / 3,), M(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    c(I(), y(-87, -9.5, 24).scale(7, 1, 3), M(0.4, 0.5, 0.6, 0.4));
    c(I(4), y(-86, -9.2, 27).scale(5, 1, 5), M(0.5, 0.6, 0.7, 0.3));
    c(I(12, 1), y(-86, -9, 31).scale(1.5, 1, 1.5), M(0.3, 0.3, 0.4, 0.1));
    Mb(y(-86, -7.5, 31));
    c(O($b(D(I(5), y(0, 0, -7).scale(2, 1.2, 2), M(0.2, 0.4, 0.7, 0.3)), D(I(5), v.scale(9, 1.2, 9), M(0, 0.2, 0.3, 0.5)), D(I(), v.scale(11, 1, 13), M(0.3, 0.4, 0.6, 0.3)),), D(I(5), v.scale(5.4, 5, 5.4), M(0, 0.2, 0.3, 0.5)),), y(-38.9, -11.3, 17),);
    Mb(y(-38.9, -9.6, 10));
    c(O($b(D(I(6), y(0, 0, -18).scale(15, 1.2, 15), M(0.7, 0.7, 0.7, 0.3),), D(I(), v.scale(4, 1.2, 6), M(0.45, 0.4, 0.6, 0.3)),), ...pb(6, f => pb(6, u => D(I(6), y(4.6 * u - 12 + 2 * (1 & f), 0, 4.6 * f + 2 * Math.sin(4 * u) - 32).scale(2, 5, 2), M(0.7, 0.7, 0.7, 0.3),),)).flat(),), y(-38.9, -11.3, -1),);
    c(I(5), y(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), M(0.8, 0.1, 0.25, 0.4));
    Mb(y(-84, -0.7, 85).rotate(0, 45));
    c(O($b(D(I(), y(26.5, -1.6, 10).scale(20, 2.08, 3)), D(I(), y(26.5, -0.5, 10).scale(19, 2, 0.5)),), ...pb(4, f => D(I(), y(13 + 9 * f + (1 & f), -0.8, 9).scale(1.35, 1.35, 9)),), ...pb(3, f => D(I(), y(17 + 9 * f, -0.8, 9).scale(1.35, 1.35, 9)),),), y(-123, 0.2, -12), M(0.5, 0.5, 0.6, 0.2),);
    Mb(y(-116, -1.4, -18).rotate(0, 180));
    c(I(6), y(-116, -2.6, -16.5).scale(3.2, 0.8, 3), M(0.6, 0.5, 0.7, 0.2));
    c(I(), y(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), M(0.8, 0.8, 0.8, 0.2));
    c(I(), y(-115.5, -17, -12).scale(0.5, 15, 2.2), M(0.6, 0.6, 0.6, 0.3));
    c(I(8), y(-114, -17, -2).scale(2, 15, 2), M(0.6, 0.6, 0.6, 0.3));
    c(I(8), y(-79, -17, -2).scale(2, 15, 2), M(1, 1, 1, 0.3));
    c(I(), y(-77, -17, -50.5).scale(2.2, 15, 0.5), M(0.6, 0.6, 0.6, 0.3));
    c(O(D(I(12), y(-77, -14.5, -12).scale(4, 17.5, 4), M(0.7, 0.7, 0.7, 0.2),), D(I(12), y(-77, 3.1, -12).scale(3, 5, 3), M(0.4, 0.5, 0.6, 0.2)), D(I(), y(-79, 0.1, -12).scale(3.5, 2, 1.3), M(0.4, 0.5, 0.6, 0.2),), D(I(), y(-77, 0.1, -14).scale(1.5, 2, 2), M(0.4, 0.5, 0.6, 0.2)),),);
    c(O(D(I(), y(-93, -5.8, -40).scale(9, 1, 5), M(0.8, 0.8, 0.8, 0.1)), D(I(9), y(-98, -5.8, -40).scale(3, 8, 3), M(0.7, 0.7, 0.7, 0.2)),),);
    c(I(), y(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), M(0.6, 0.6, 0.6, 0.3));
    c(I(9), y(-98, -18.4, -40).scale(2.5, 13.5, 2.5), M(0.5, 0.5, 0.5, 0.3));
    Mb(y(-98, -4.4, -40).rotate(0, 90));
    [-1, 1,].map((f, u) => {
      c(O(D(I(), y(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), M(0.5, 0.5, 0.5, 0.4),), D(I(), v.scale(3, 3, 10), M(0.6, 0.24, 0.2, 0.5)), D(I(32, 1), y(0, 3, -5).scale(3, 4, 10).rotate(90, 0), M(0.6, 0.24, 0.2, 0.5),), D(I(5), y(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), M(0.6, 0.24, 0.2, 0.5),), D(I(5), y(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), M(0.6, 0.24, 0.2, 0.5),),), y(f - 100, 0.7, 97),);
      c(I(12, 1), y(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), M(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5,].map(J => c(I(15, 1), y(-7.5 * f - 100, J + 0.7, 96).scale(1.1, 0.5, 1.1), M(0.5, 0.24, 0.2, 0.4),));
      c(m, y(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      c(m, y(-5 * f - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      pb(5, J => c(m, y(18.5 * (u - 0.5), 0, 4.8 * J - 9.5).rotate(0, 180 - 180 * u).scale(1.2, 10, 1.2),));
    });
    c(O(D(I(), y(-82.07, 0.8, 106).scale(11, 0.9, 2.2), M(0.7, 0.7, 0.7, 0.1),), D(I(45, 1), y(-81, 0.7, 106).scale3d(7.7), M(0.7, 0.7, 0.7, 0.1),),),);
    c(I(), y(-58, 1, 106).scale(2, 0.65, 2), M(0.7, 0.7, 0.7, 0.2));
    c(I(), y(-50.7, 1, 99).scale(2, 0.65, 1), M(0.7, 0.7, 0.7, 0.2));
    c(I(), y(-42, 0.4, 91).scale(5, 1, 2.5), M(0.7, 0.7, 0.7, 0.3));
    c(I(), y(-34.2, 0.4, 91).scale(3, 1, 3), M(0.7, 0.7, 0.7, 0.3));
    c(I(5), y(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), M(0.2, 0.5, 0.5, 0.6));
    Mb(y(-34, 2.7, 96).rotate(-12, 0));
    c(O($b(D(I(6, 0, 0, 0.6), y(-100, 0.7, 105.5).scale(8, 1, 11), M(0.7, 0.7, 0.7, 0.2),), D(I(), y(-101.5, 0.7, 93.5).scale(10.5, 1, 2), M(0.7, 0.7, 0.7, 0.2),),), D(I(5), y(-100, 0.7, 113).scale(4, 3, 4), M(0.7, 0.7, 0.7, 0.2)),),);
    pb(3, f => {
      c(n(16), y(-77, -9, -12 * f - 20).rotate(0, 90), M(0.6, 0.6, 0.6, 0.3),);
      c(n(16), y(12 * f - 109, -9, -12), M(0.6, 0.6, 0.6, 0.3));
      c(n(24.7 - 0.7 * (1 & f)), y(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? M(0.5, 0.5, 0.5, 0.3) : M(0.35, 0.35, 0.35, 0.5),);
    });
    c(O(D(I(6, 0, 0, 0.3), y(0, -0.92, 95).scale(14, 2, 14), M(0.8, 0.8, 0.8, 0.2),), D(I(5), y(0, 0, 95).scale3d(6), M(0.3, 0.3, 0.3, 0.5)),),);
    Mb(y(0, 1.7, 82).rotate(0, 180));
    c(I(5), y(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), M(0.5, 0.3, 0.3, 0.4),);
    c(I(6), y(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), M(0.5, 0.6, 0.7, 0.3));
    c(I(), y(0, 16, 127.8).scale(1.5, 1, 0.7), M(0.5, 0.6, 0.7, 0.3));
    c(I(7), y(0, 15.1, 133).scale(5, 2, 5), M(0.4, 0.5, 0.6, 0.4));
    c(O($b(D(I(), y(0, 16, 110.5).scale(12, 1, 3), M(0.5, 0.3, 0.3, 0.4)), D(I(), y(0, 16, 111).scale(3, 1, 3.8), M(0.5, 0.3, 0.3, 0.4)),), D(I(5), y(0, 16, 103.5).scale(5.5, 5, 5.5), M(0.5, 0.3, 0.3, 0.4),),),);
    Nb(y(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Nb(y(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...sb(18).map(({x:f, z:u}) => [7 * f, 10 * u, 4.5 - 2 * Ya(f),]),);
    Nb(y(0, 3, 95), ...sb(9).map(({x:f, z:u}) => [9 * f, 9 * u, 4,]),);
    Nb(y(0, 19, 134), [0, 0, 3.5,]);
    Nb(y(-38.9, -8.4, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Nb(y(-89, 0.2, 80), [0, 0, 6,]);
    Nb(y(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Nb(y(-115, 0.2, -12), [0, 0, 3.5,]);
    Nb(y(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    N();
    c(I(5), y(0, -0.2).scale(5, 1, 5), M(0.6, 0.65, 0.7, 0.3));
    Mb(y(0, 1.2));
    pb(2, () => {
      N();
      Na.map(({x:f, z:u}) => {
        c(I(11, 1), y(4 * f, 4, 4 * u).scale(0.8, 3, 0.8), M(0.5, 0.3, 0.7, 0.6));
        c(I(), y(4 * f, 7, 4 * u).scale(1, 0.3), M(0.5, 0.5, 0.5, 0.3));
      });
      c(O(D(I(), v.scale(5, 1, 5), M(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => D(I(25, 1), y(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), M(0.8, 0.8, 0.8, 0.3),)),),);
      c(I(), y(0, -3).scale(8, 2, 8), M(0.4, 0.4, 0.4, 0.3));
    });
    N();
    c(O($b(D(I(), v.scale(1.5, 1, 5), M(0.9, 0.9, 0.9, 0.2)), D(I(6), v.scale(4, 1, 5), M(0.9, 0.9, 0.9, 0.2)), D(I(), y(0, -2).scale(2, 3.2, 1.9), M(0.3, 0.8, 0.5, 0.5)), D(I(16, 1, 0, 4), v.scale(1, 1, 1.5).rotate(0, 90), M(0.9, 0.9, 0.9, 0.2),),), D(I(), v.scale(1.3, 10, 1.3), M(0.2, 0.7, 0.4, 0.6)),),);
    Nb(y(0, 2.8), [0, 0, 4.5,]);
    N();
    c(I(3), y(-23, -1.7, 55.8).scale(5, 0.7, 8.3), M(0.3, 0.6, 0.6, 0.2));
    c(I(8), y(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), M(0.8, 0.8, 0.8, 0.2));
    c(I(), y(-23, -3, 55).scale(5.2, 1.7, 3), M(0.5, 0.5, 0.5, 0.3));
    c(I(), y(-23, -2.2, 62).scale(3, 1, 4), M(0.5, 0.5, 0.5, 0.3));
    Mb(y(-23, -0.5, 66.5));
    N();
    c(I(), y(-22.55, -3, 55).scale(1.45, 1.4, 2.7), M(0.7, 0.7, 0.7, 0.2));
    c(O(D(I(), v.scale(3, 1.4, 2.7)), D(I(), v.scale(1.2, 8, 1.2)),), y(-33, -3, 55), M(0.7, 0.7, 0.7, 0.2),);
    N();
    c(O(D(I(), y(-27, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2)), D(I(), y(-27, -3, 55).scale(1, 3), M(0.9, 0.9, 0.9, 0.2)),),);
    c(I(), y(-39, -3, 55).scale(3, 1.4, 2.7), M(0.9, 0.9, 0.9, 0.2));
    N();
    c(I(6), y(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), M(0.7, 0.7, 0.7, 0.4),);
    N();
    [0, 12, 24,].map(f => c(I(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.2, 0.5, 0.6, 0.2),));
    N();
    [6, 18,].map(f => c(I(), y(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(0.1, 0.4, 0.5, 0.2),));
    N();
    c(O($b(D(I(5), y(0, 2).scale(5, 7, 5).skewY(8), M(0.2, 0.4, 0.5, 0.5),), D(I(5), y(0, 6).scale(1.1, 7, 1.1).skewY(-8), M(0.25, 0.35, 0.5, 0.5),), D(I(5), y(0, 9).scale(0.6, 7, 0.6).skewY(8), M(0.35, 0.3, 0.5, 0.5),),), D(I(5), v.scale(4, 8, 4), M(0.2, 0.4, 0.5, 0.5)), D(I(5), y(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), M(0.2, 0.4, 0.5, 0.5),),), y(-38.9, -11.3, 17),);
    Nb(y(-39.1, -0.6, 17).rotate(11), ...sb(15).map(({x:f, z:u}) => [3 * f, 3 * u, 1.2,]),);
    N();
    pb(2, f => c(B, y(9 * f - 110 + (1 & f), 1.9, -12)));
    N();
    pb(2, f => c(B, y(9 * (f + 2) - 110 + (1 & f), 1.9, -12)));
    N();
    pb(3, f => c(B, y(9 * f - 106, 1.9, -12)));
    pb(4, f => {
      N();
      c(I(6), y(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), M(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [M(0.1, 0.55, 0.45, 0.2), M(0.2, 0.5, 0.5, 0.3), M(0.3, 0.45, 0.55, 0.4),].map((f, u) => {
      N();
      c(I(), y(-23.5, 0.5, 91 + 6.8 * u).scale(1 === u ? 2 : 3.3, 1, 3.3), f);
      2 === u && c(I(), y(-29.1, 0.4, 91).scale(2.1, 1, 3), M(0.7, 0.7, 0.7, 0.3));
      1 === u && c(I(), y(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), M(0.6, 0.6, 0.7, 0.3),);
    });
    N();
    c(I(5), v.scale(5, 1.1, 5), M(0.5, 0.3, 0.3, 0.4));
    c(I(5), v.scale(5.5, 0.9, 5.5), M(0.25, 0.25, 0.25, 0.4));
    Mb(y(0, 1.5, -1).rotate(0, 180));
    pb(4, f => {
      N();
      pb(7, u => c(D(I(9, 1), y((2 < f ? 3.5 : 4) * (u / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), M(0.3, 0.3, 0.38),),),);
    });
    N();
    c(x);
    N();
    c(I(15, 1), y(-7.5).rotate(0, 90).scale(3, 2.3, 3), M(0.4, 0.4, 0.4, 0.3));
    c(I(10), y(-7.5).rotate(0, 90).scale(2, 2.5, 2), M(0.3, 0.8, 0.7, 0.3));
    c(I(5), y(-7.5).rotate(0, 90).scale(1, 3), M(0.5, 0.5, 0.5, 0.5));
    Mb(y(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => c(m, v.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    c(O(D(I(10), v.scale(6, 2, 6), M(0.1, 0.6, 0.5, 0.3)), D(I(10), v.scale(3.3, 6, 3.3), M(0.1, 0.6, 0.5, 0.5)),),);
    Nb(y(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    N();
    c(I(3), y(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), M(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      c(I(6), y(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), M(0.7, 0.7, 0.7, 0.4),);
      c(I(), y(0, 6.2, f + 95).scale(0.5, 11, 0.5), M(0.5, 0.3, 0.3, 0.4));
    });
    N();
    c(O(D(I(45, 1), v.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)), D(I(), y(0, 0, -5.5).scale(1.5, 3, 2.7), M(0.45, 0.45, 0.45, 0.2),),),);
    c(I(8), y(0, 2).scale(3, 1.5, 3).rotate(0, 22), M(0.7, 0.7, 0.7, 0.1));
    c(I(5), y(0, 2).scale(1, 2), M(0.3, 0.3, 0.3, 0.2));
    Nb(y(0, 3), ...sb(14).map(({x:f, z:u}) => [5.6 * f, 5.6 * u, 2,]),);
    N();
    [-1, 1,].map(f => c(m, v.rotate(0, 90).translate(-5 * f, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90),));
    c(O(D(I(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), D(I(), v.scale(9, 5, 2), M(0.3, 0, 0, 0.3)),),);
    c(D(I(28, 1), v.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(D(I(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    N();
    c(O(D(I(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), D(I(), y(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)), D(I(), y(0, 0, 7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),),);
    c(D(I(28, 1), v.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(D(I(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    N();
    c(O(D(I(28, 1), y(0, 2).scale(7.5, 1, 7.5), M(0.35, 0, 0, 0.3)), D(I(), y(7).scale(9, 5, 2), M(0.3, 0, 0, 0.3)), D(I(), y(0, 0, -7).scale(2, 5, 9), M(0.3, 0, 0, 0.3)),),);
    c(D(I(28, 1), v.scale(7.5, 1, 7.5), M(0.45, 0.45, 0.45, 0.2)));
    c(D(I(5), y(0, 1).scale(1, 0.2), M(0.3, 0.3, 0.3, 0.2)));
    pb(2, () => {
      N();
      c(O(D(I(30, 1, 1.15, 1), y(0, -3).scale(3.5, 1, 3.5), M(0.7, 0.4, 0.25, 0.7),), D(I(30, 1, 1.3, 1), y(0, -2.5).scale(2.6, 1, 3), M(0.7, 0.4, 0.25, 0.2),), D(I(), y(4, -1.2).scale3d(2), M(0.7, 0.4, 0.25, 0.3)),),);
      Mb(y(0, -3, 4));
    });
    N();
    c(wb(20), y(0, 1).scale3d(0.5), M(1, 0.3, 0.4));
    c(wb(30), v.scale(0.65, 0.8, 0.55), M(1, 0.3, 0.4));
    c(I(), y(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), M(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      c(m, v.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), M(1, 1, 0.8),);
      c(D(O(I(15, 1), D(I(), y(0, 0, 1).scale(2, 2, 0.5)),), v.rotate(-90, 0).scale(0.1, 0.05, 0.1), M(0.3, 0.3, 0.3),), y(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map(f => {
      N();
      c(I(20, 1), y(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), M(1, 0.3, 0.4));
    });
    N();
    c(wb(30, 24, (f, u, J) => {
      const H = u / 24, C = f * Math.PI * 2 / 30, F = Math.sin(H ** 0.6 * Math.PI / 2);
      f = H * H * Math.sin(f * Math.PI * 14 / 30) / 4;
      return 23 < u ? {x:J.C = 0, y:-0.5, z:0,} : {x:Math.cos(C) * F, y:Math.cos(H * Math.PI) - H - f, z:Math.sin(C) * F + Math.sin(f * Math.PI * 2) / 4,};
    }), v.scale(0.7, 0.7, 0.7), M(1, 1, 1),);
    [-1, 1,].map(f => c(wb(12), y(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    N();
    c(I(6, 1), v.scale(0.12, 1.2, 0.12), M(0.3, 0.3, 0.5, 0.1));
    c(I(10), y(0, 0.8).scale(0.2, 0.3, 0.2), M(1, 0.5, 0.2));
    c(I(3), y(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), M(0.2, 0.2, 0.2, 0.1));
  });
});

