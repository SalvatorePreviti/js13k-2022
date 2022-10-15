let aa, ba, ca, da, ea, fa, ha, ka, la, ma, na, b, pa, qa, ra, ta, ua, va, d = 0, wa = 0, xa = 0, ya = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 14, Ha = 0.1;
const Ia = Math.PI / 180, Ja = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
);
var Ka = 0, La = 180, Ma = 0, Na = 0, Oa = 0;
const Pa = [], e = [], Ta = [], Ua = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Va = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Wa = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Xa = NO_INLINE(a => 0 > a ? -a : a), Ya = NO_INLINE((a, c) => a < c ? a : c), Za = NO_INLINE((a, c) => c < a ? a : c), $a = (a, c) => Xa(a) > c ? a : 0, ab = (a, c = 0, h = 1) => a < c ? c : h < a ? h : a, bb = a => Math.atan2(Math.sin(a * Ia), Math.cos(a * Ia)) / Ia, cb = (a, c, h) => a + (2 * (c = (c - a) % 360) % 360 - c) * ab(h) || 0, db = (a, c, h) => (0 < h ? 1 > h ? a + (c - a) * h : c : a) || 
0, eb = (a, c) => (a = ab(a), db(a, 1 - a, c)), fb = (a, c, h = 0) => (a * a + c * c + h * h) ** 0.5, hb = (a, c = gb, h = 0,) => (h *= 16, c[h++] = a.m11, c[h++] = a.m12, c[h++] = a.m13, c[h++] = a.m14, c[h++] = a.m21, c[h++] = a.m22, c[h++] = a.m23, c[h++] = a.m24, c[h++] = a.m31, c[h++] = a.m32, c[h++] = a.m33, c[h++] = a.m34, c[h++] = a.m41, c[h++] = a.m42, c[h++] = a.m43, c[h] = a.m44, c), ib = (a = g, c = l,) => (c.m11 = a.m11, c.m12 = a.m12, c.m13 = a.m13, c.m14 = a.m14, c.m21 = a.m21, c.m22 = 
a.m22, c.m23 = a.m23, c.m24 = a.m24, c.m31 = a.m31, c.m32 = a.m32, c.m33 = a.m33, c.m34 = a.m34, c.m41 = a.m41, c.m42 = a.m42, c.m43 = a.m43, c.m44 = a.m44, c), nb = (a = 0, c = 0, h = 0, k = 1) => {
  jb = l.m11 * a + l.m21 * c + l.m31 * h + l.m41 * k;
  kb = l.m12 * a + l.m22 * c + l.m32 * h + l.m42 * k;
  lb = l.m13 * a + l.m23 * c + l.m33 * h + l.m43 * k;
  mb = l.m14 * a + l.m24 * c + l.m34 * h + l.m44 * k;
};
var jb, kb, lb, mb;
const x = NO_INLINE((a, c, h) => g.translate(a, c, h)), ob = (a, c) => Array.from(Array(a), (h, k) => c(k)), pb = (a, c, h) => (a.A = h, a.s = c, a), qb = (a, c, h = a.s,) => (ib(c), pb(a.map(({x:k, y:p, z:n}) => (nb(k, p, n), {x:jb, y:kb, z:lb,})), h, a.A,)), z = (a, c, h) => a.map(k => qb(k, c, h)), rb = (a, c = 0) => ob(a, h => {
  const k = Math.cos(2 * Math.PI * h / a);
  return {x:Math.sin(2 * Math.PI * h / a), y:0, z:0.01 > Xa(k) ? k : 0 > k ? k - c : k + c,};
}), ub = (a, c, h) => a.map((k, p, {length:n}) => pb([k, c[n - p - 1], c[n - (p + 1) % n - 1], a[(p + 1) % n],], a.s, h,)), E = (a, c, h = 0, k,) => (a = a ? rb(a, k) : Ua, k = qb(a, x(0, 1).scale3d(0 < h ? h : 1)), a = qb(a, x(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...ub(a, k, c), k, a,]), vb = (a, c = a, h = (k, p) => (p *= Math.PI / c, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(p), y:Math.cos(p), z:Math.sin(k) * Math.sin(p),})) => {
  const k = [];
  for (let p = 0; a > p; p++) {
    for (let n = 0; c > n; n++) {
      const A = pb([], 0, 1);
      k.push(A);
      A.push(h(p, n, A));
      n && A.push(h((p + 1) % a, n, A));
      c - 1 > n && A.push(h((p + 1) % a, n + 1 % c, A));
      A.push(h(p, n + 1 % c, A));
    }
  }
  return k;
}, wb = NO_INLINE(a => 1 - Math.exp(-xa * a)), M = NO_INLINE((a, c, h) => db(a, c, wb(h))), xb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, yb = a => Math.sin(a * Math.PI * 2), zb = a => 0.5 > a % 1 ? 1 : -1, Ab = a => a % 1 * 2 - 1, Db = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Gb = NO_INLINE(a => {
  let c = 0;
  const h = () => {
    let n = 0;
    const A = O => {
      let Q, X, Qa, ia = 0, ja = 0;
      const Y = [], sa = new Int32Array(O * Eb), bc = 2 ** (u - 9) / O, cc = Math.PI * 2 ** (q - 8) / O, Bb = C * O & -2;
      for (let sb = 0; 11 >= sb; ++sb) {
        for (let tb = 0, Lb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + sb]; 32 > tb; ++tb) {
          const Mb = (32 * sb + tb) * O;
          for (var oa = 0; 4 > oa; ++oa) {
            if (Q = 0, Lb && (Q = B[Lb - 1].charCodeAt(tb + 32 * oa) - 40, Q += 0 < Q ? 106 : 0), Q) {
              var za;
              if (!(za = Y[Q])) {
                za = Q;
                let V = void 0, Aa = void 0;
                var Nb = Q;
                let dc = 0, ec = 0;
                const fc = 2 > c ? Ab : yb, gc = 2 > c ? 1 > c ? zb : Db : yb, Ob = new Int32Array(S + Z + K);
                for (let Ra = 0, Cb = 0; S + Z + K > Ra; ++Ra, ++Cb) {
                  let Sa = 1;
                  S > Ra ? Sa = Ra / S : S + Z > Ra || (Sa = (1 - (Sa = (Ra - S - Z) / K)) * 3 ** (-y / 16 * Sa));
                  0 > Cb || (Cb -= 4 * O, Aa = 0.00396 * 2 ** ((Nb + f - 256) / 12), V = 0.00396 * 2 ** ((Nb + F - 256) / 12) * (1 + (c ? 0 : 0.0072)));
                  Ob[Ra] = 80 * (fc(dc += Aa * Sa ** (w / 32)) * G + gc(ec += V * Sa ** (N / 32)) * L + (H ? (2 * Math.random() - 1) * H : 0)) * Sa | 0;
                }
                za = Y[za] = Ob;
              }
              for (let V = 0, Aa = 2 * Mb; za.length > V; ++V, Aa += 2) {
                sa[Aa] += za[V];
              }
            }
          }
          for (let V, Aa = 0; O > Aa; ++Aa) {
            za = 0;
            oa = 2 * (Mb + Aa);
            var Ba = (((V = sa[oa]) || Qa) && (X = 0.00308 * t, 1 !== c && 4 !== c || (X *= Math.sin(bc * oa * Math.PI * 2) * I / 512 + 0.5), X = 1.5 * Math.sin(X), ia += X * ja, Ba = (1 - J / 255) * (V - ja) - ia, ja += X * Ba, V = 4 === c ? ja : 3 === c ? Ba : ia, c || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= D / 32, Qa = 1e-5 < V * V, Ba = Math.sin(cc * oa) * r / 512 + 0.5, za = V * (1 - Ba), V *= Ba), oa < Bb || (za += sa[1 + oa - Bb] * v / 255, 
            V += sa[oa - Bb] * v / 255), n + oa >> 1);
            k[Ba] += (sa[oa] = za) / 65536;
            p[Ba] += (sa[++oa] = V) / 65536;
          }
        }
      }
      n += O * Eb;
    }, B = Va[c], [G, f, w, L, F, N, H, S, Z, m, y, u, t, J, D, r, q, v, C, I] = Wa[c], K = 4 * m ** 2;
    A(5513);
    A(4562);
    A(3891);
    xb(5 > ++c ? h : a);
  }, k = (ca = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:Fb / 2,})).getChannelData(0), p = ca.getChannelData(1);
  xb(h);
}), Hb = (a, c, h, k) => new DOMMatrix([h, 0, 0, 0, 0, k, 0, 0, 0, 0, (c + a) / (a - c), -1, 0, 0, 2 * c * a / (a - c), 0,]);
let Ib = () => {
  let a, c, h, k, p, n, A, B, G, f, w, L, F, N, H, S, Z = !0;
  const m = [], y = () => {
    b4.innerHTML = "Music: " + Z;
    S && (ba || !Z ? S.disconnect() : S.connect(H.destination));
  }, u = () => {
    const r = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ha = [Hb(0.3, 55, r, 1.732051), Hb(55, 181, r, 1.732051),];
    fa = Hb(0.3, 181, r, 1.732051);
    k = B = void 0;
    m.length = da = N = L = F = ya = Ca = 0;
    document.hidden && t(!0);
  }, t = r => {
    if (ba !== r) {
      if (ba = r, u(), document.body.className = r ? "l m" : "l", r) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      y();
    }
  }, J = r => {
    try {
      H || (H = new AudioContext(), (S = H.createBufferSource()).buffer = ca, S.loop = !0, S.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    t(!1);
    ea = r;
  }, D = (r, q) => r.buttons[q]?.pressed || 0 < r.buttons[q]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => J();
  b2.onclick = () => J(1);
  b5.onclick = () => t(!0);
  b4.onclick = () => {
    Z = !Z;
    y();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onclick = r => {
    if (!ba && (r.target === hC && (da = 1), ea)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = r => {
    let q;
    r.repeat || (q = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[r.code], (m[q] = !!r.type[5] && !0) && (0 === q && (da = 1), 1 === q && t(!0)));
  };
  onmousemove = ({movementX:r, movementY:q}) => {
    ea && (r || q) && (La += 0.1 * r, Ka += 0.1 * q);
  };
  hC.ontouchstart = r => {
    if (!ba) {
      for (let {pageX:q, pageY:v, identifier:C} of r.changedTouches) {
        ea && q > hC.clientWidth / 2 ? void 0 === B && (G = 0, n = q, A = v, B = C, w = Ka, f = La) : void 0 === k && (p = 0, c = q, h = v, k = C);
      }
      a = wa;
    }
  };
  hC.ontouchmove = r => {
    if (!ba) {
      for (let {pageX:K, pageY:O, identifier:Q} of r.changedTouches) {
        var q, v, C, I;
        B === Q && (Ka = w + (O - A) / 2.3, La = f + (K - n) / 2.3, G = 1);
        k === Q && (Q = (c - K) / 19, q = Xa(Q), v = (h - O) / 19, C = Xa(v), (I = 0.3 < Za(q, C)) && (p = 1), L = ab(Q, -1) * (I && 0.2 < q), F = ab(v, -1) * (I && 0.2 < C), 2 < q && (c = 19 * (0 > Q ? -1 : 1) + K), 2 < C && (h = 19 * (0 > v ? -1 : 1) + O));
      }
    }
  };
  hC.ontouchend = r => {
    let q;
    document.activeElement === document.body && r.preventDefault();
    for (const v of r.changedTouches) {
      v.identifier === B ? (B = void 0, G || (q = 1), G = 0) : v.identifier === k ? (k = void 0, F = L = 0, p || (q = 1), p = 0) : q = 1;
    }
    r.target === hC && q && a && 0.02 < (r = wa - a) && 0.7 > r && (da = 1);
  };
  Ib = () => {
    ya = F + (m[4] ? 1 : 0) - (m[5] ? 1 : 0);
    Ca = L + (m[2] ? 1 : 0) - (m[3] ? 1 : 0);
    let r = navigator.getGamepads()[0];
    r && (ea && (Ka += 80 * xa * $a(r.axes[3], 0.3), La += 80 * xa * $a(r.axes[2], 0.3)), ya += D(r, 12) - D(r, 13) - $a(r.axes[1], 0.2), Ca += D(r, 14) - D(r, 15) - $a(r.axes[0], 0.2), D(r, 9) && t(!0), (r = D(r, 3) || D(r, 2) || D(r, 1) || D(r, 0)) && !N && (da = 1), N = r);
  };
  document.onvisibilitychange = onblur = onresize = u;
  t(!0);
  DEV_ROOT_FUNCTION();
};
const Jb = (a, c) => {
  1 / 0 > Ha && (Ha = d + c, h4.innerHTML = a);
}, Kb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ka = Ta.reduce((a, c) => a + c.j, 0)] + " / XIII";
}, Pb = () => {
  localStorage["Dante-22"] = JSON.stringify([e.map(a => a.j), Ta.map(a => a.j), Ga, na, d,]);
}, P = NO_INLINE((a, c, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * c << 8 | 255 * a), R = () => {
  const a = [];
  b = (c, h = g, k) => a.push(...z(c, h, k));
  Pa.push({l:new DOMMatrix(), i:a,});
}, Qb = a => {
  b(E(5), a.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
  b(E(5), a.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), P(0.4, 0.5, 0.5));
  b(E().slice(0, -1), a.translate(0, -0.4).scale(0.5, 0.1, 0.5), P(0.5, 0.5, 0.4));
  e.push({l:Pa.at(-1).l, C:a,});
}, Sb = (a, ...c) => {
  let h, k, p, n, A = 0, B = 0, G = 1, f = -1;
  const w = () => {
    if (w.j) {
      ib(Pa[35].l).translateSelf(m % 4 * 1.2 - 1.7 + Math.sin(d + m) / 7, -2, 1.7 * (m >> 2) - 5.5 + Xa(m % 4 - 2) + Math.cos(d / 1.5 + m) / 6,);
    } else {
      let y, u, t, J, D, r = 1, q = 1 / 0;
      for (let v = 0; c.length > v; v++) {
        let C = c[v], I = fb(F - C[0], N - C[1]);
        r = Ya(r, I / C[2]);
        0 > (I -= C[2]) ? y = 1 : q > I && (q = I, L = C);
      }
      y || (u = F - L[0], t = N - L[1], J = fb(u, t), D = Math.atan2(-t, u), G && (n = ab(n / (1 + Math.random())), B = (Math.random() - 0.5) * Math.PI / 2), D += B, f = -Math.cos(D), A = Math.sin(D), 0.1 < J && (J = Ya(J, L[2]) / J, F = u * J + L[0], N = t * J + L[1]));
      G = y;
      n = M(n, 3 + 6 * (1 - r), 3 + r);
      H = M(H, F = M(F, F + f, n), n);
      S = M(S, N = M(N, N + A, n), n);
      h = cb(h, Math.atan2(H - k, S - p) / Ia - 180, wb(3));
      ib(Z).multiplySelf(a).translateSelf(k = H, 0, p = S).rotateSelf(0, h, 7 * Math.sin(1.7 * d),);
      1.6 > (nb(), fb(Ma - jb, Na - kb, Oa - lb,)) && (w.j = 1, Jb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ka] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Kb(), Pb());
    }
    hb(l, Rb, 28 + m);
  };
  let L = c[0], [F, N] = L, [H, S] = L;
  const Z = Pa.at(-1).l, m = Ta.length;
  Ta.push(w);
}, Tb = a => {
  let c, h = 0, k = 0, p = 0, n = a.at(-1);
  for (c of a) {
    h += (n.y - c.y) * (n.z + c.z), k += (n.z - c.z) * (n.x + c.x), p += (n.x - c.x) * (n.y + c.y), n = c;
  }
  return c = fb(h, k, p), h /= c, k /= c, p /= c, {x:h, y:k, z:p, w:h * n.x + k * n.y + p * n.z,};
}, Ub = ({x:a, y:c, z:h}, k) => a * k.x + c * k.y + h * k.z, Vb = (a, c) => {
  let h;
  var k, p;
  const n = c.i, A = c.u;
  for (var B = 0; n.length > B; ++B) {
    if (-0.00008 > (h = Ub(a, n[B]) - a.w) ? p = c : 8e-5 < h && (k = c), p && k) {
      k = [];
      p = [];
      B = n.at(-1);
      let G = Ub(B, a) - a.w;
      for (const f of n) {
        h = Ub(f, a) - a.w, 8e-5 > G && p.push(B), -0.00008 < G && k.push(B), (8e-5 < G && -0.00008 > h || -0.00008 > G && 8e-5 < h) && (G /= h - G, B = {x:B.x + (B.x - f.x) * G, y:B.y + (B.y - f.y) * G, z:B.z + (B.z - f.z) * G,}, k.push(B), p.push(B)), B = f, G = h;
      }
      k = 2 < k.length && {i:pb(k, n.s, n.A), u:A, v:c,};
      p = 2 < p.length && {i:pb(p, n.s, n.A), u:A, v:c,};
      break;
    }
  }
  return {x:k, y:p,};
}, Wb = (a, c, h = Tb(c.i)) => {
  let k, p;
  return a ? ({x:k, y:p} = Vb(a, c), k || p || a.i.push(c), k && (a.o = Wb(a.o, k, h)), p && (a.m = Wb(a.m, p, h))) : a = {x:h.x, y:h.y, z:h.z, w:h.w, i:[c,], o:0, m:0,}, a;
}, Xb = (a, c, h) => {
  const k = [], p = (n, A) => {
    let {x:B, y:G} = Vb(n, A);
    B || G || (0 < h * Ub(n, c) ? B = A : G = A);
    B && (n.o ? p(n.o, B) : k.push(B));
    G && n.m && p(n.m, G);
  };
  for (const n of c.i) {
    p(a, n);
  }
  return k;
}, Yb = (a, c) => a && (c(a), Yb(a.o, c), Yb(a.m, c)), Zb = a => (Yb(a, c => {
  const h = c.m;
  c.m = c.o;
  c.o = h;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const k of c.i) {
    k.u = !k.u;
  }
}), a), $b = a => a.length ? a.reduce((c, h) => Wb(c, {i:h, u:0, v:0,}), 0) : a, ac = (...a) => a.reduce((c, h) => {
  const k = [];
  if (c = $b(c), h) {
    h = $b(h);
    Yb(c, p => p.i = Xb(h, p, 1));
    Yb(h, p => k.push([p, Xb(c, p, -1),]));
    for (let [p, n] of k) {
      for (const A of n) {
        Wb(c, A, p);
      }
    }
  }
  return c;
}), T = (a, ...c) => {
  const h = n => {
    let A;
    return n.v && ((A = p.get(n.v)) ? (k.delete(A), n = h(n.v)) : p.set(n.v, n)), n;
  }, k = new Map(), p = new Map();
  return a = Zb(ac(Zb($b(a)), ...c)), Yb(a, n => {
    for (const A of n.i) {
      k.set(h(A), A.u);
    }
  }), Array.from(k, ([{i:n}, A]) => {
    const B = n.map(({x:G, y:f, z:w}) => ({x:G, y:f, z:w,}));
    return pb(A ? B.reverse() : B, n.s, n.A);
  });
}, U = (a, c = 0, h = 0) => {
  const k = ib(g, Pa[++pa].l);
  return k.m41 = a, k.m42 = c, k.m43 = h, k;
}, jc = NO_INLINE(() => {
  let a, c, h, k, p, n, A, B, G, f, w, L, F, N, H, S, Z = 0, m = 1, y = 2, u = 15;
  const t = (q, v, C, I) => db(q, v, m || (ab(Xa(v - q) ** 0.5 - C) + 1 / 7) * wb(1.5 * I)), J = () => ib((y ? e[Ga] : Pa[28 !== Z ? Z : 0]).l,), D = q => {
    1 < y ? (ib(e[Ga].l).multiplySelf(e[Ga].C), nb(0, 0.9 < ma ? 15 : 1, -2.4)) : (J(), nb(N, H, S));
    q && (p = (jb - Ma) / xa, n = (lb - Oa) / xa);
    Ma = jb;
    Na = kb;
    Oa = lb;
  }, r = NO_INLINE(() => {
    var q = 0, v = 0, C = 0, I = 0, K = 0, O = 0, Q = -1;
    for (var X = 0; 36 > X; ++X) {
      var Qa = 512 * X;
      for (var ia = 96; 416 > ia; ia += 4) {
        for (var ja = 0; 2 > ja; ++ja) {
          var Y = hc[Qa + ia + ja];
          const sa = hc[Qa + ia + ja + 2];
          Y > I && (I = Y);
          Y + sa && (0 > Q || Q === X) && (Q = X, sa === f ? ++q : v && v !== sa || (v = sa, ++C));
        }
      }
    }
    f = 0 > Q ? 0 : C > 2 * q ? v : f;
    for (q = 36; 128 > q; ++q) {
      X = Q = C = v = 0;
      Qa = 512 * q;
      for (ia = 0; 128 > ia; ++ia) {
        ja = Qa + 4 * ia, Y = hc[ja], 64 > ia ? Y > v && (v = Y) : Y > C && (C = Y), (Y = hc[2 + ja]) > Q && (Q = Y), Y = hc[1 + ja], 64 < ia ? Y > v && (v = Y) : Y > C && (C = Y), (Y = hc[3 + ja]) > X && (X = Y);
      }
      (C -= v) * C > K * K && (K = C);
      (X -= Q) * X > O * O && (O = X);
    }
    K *= 0.7;
    B = ab(1 - 0.01 * Za(Xa(K), Xa(O)), 0.3);
    K /= 255;
    I /= 255;
    O /= 255;
    J().invertSelf();
    nb(K, I, O, 0);
    N += jb;
    H += I;
    S += lb;
    D();
  });
  qa = () => {
    D(f);
    ic.r9r(0, 0, 128, 128, 6408, 5121, hc);
    r();
    !y && f === Z || (Z = f, J().invertSelf(), nb(Ma, Na, Oa), N = jb, H = kb, S = lb, y = y && (f ? 0 : 1));
    (-20 > Ma || 109 > Oa ? -25 : -9) > Na && (y = 2);
    1 === f && (e[15].j = -15 > Ma && 0 > Oa ? 1 : 0);
    k = M(k, ra * (30 < f && 35 > f), 2,);
    w = t(w, Ma, 0.5, 1);
    L = t(L, G = db(M(G, Na, 2), Na, y || 8 * Xa(G - Na),), 2, 1,);
    F = t(F, Oa, 0.5, 1);
    ea ? (q = y + wb(18), Da = db(Da, Ma, q), Fa = db(Fa, Oa, q), Ea = db(Ea, 1.6 + G, q), La = bb(La)) : (Da = t(Da, w, 1, 2 + k,), Fa = t(Fa, F + -18 + 5 * k, 1, 2 + k,), Ea = t(Ea, Za(L + ab((-60 - Oa) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), q = Ya(-6, -Xa(F - Fa)), v = w - Da, La = cb(La, 90 - bb(Math.atan2(q, v) / Ia), m + wb(10),), Ka = cb(Ka, 90 - Math.atan2(fb(q, v), Ea - L) / Ia, m + wb(10),));
    Ka = ab(Ka, -87, 87);
    m = 0;
    var q = ab(ya, -1), v = ab(Ca, -1), C = $a(fb(q, v) ** 0.5, 0.1), I = Math.atan2(q, v);
    C && (a = 90 - I / Ia);
    c = cb(c, a, wb(8));
    h = M(h, C, 10);
    U(Ma, 0.06 * B * h * Math.cos(18.2 * d) + G, Oa,).rotateSelf(0, c);
    for (var K = 0; 2 > K; ++K) {
      const O = 9.1 * d - Math.PI * K;
      ib(Pa[53].l, U(0)).translateSelf(0, h * ab(0.45 * Math.sin(O - Math.PI / 2)),).rotateSelf(h * Math.sin(O) * 0.25 / Ia, 0);
    }
    u = f ? 5 : M(u, y ? 13 : 19 - 2 * Ya(0, Na + 10), 2.2);
    p = f || y ? 0 : M(p, 0, 3);
    n = f || y ? 0 : M(n, 0, 3);
    q = (A = y ? 0 : M(A, f ? 7 * ab(2 * C) * B : 0, f ? 9 : 1,)) * C * Xa(q) * Math.sin(I);
    v = A * C * Xa(v) * Math.cos(I);
    I = ea ? (180 + La) * Ia : 0;
    C = xa * (p + (Math.cos(I) * v - Math.sin(I) * q));
    K = xa * -u;
    q = xa * (n + (Math.sin(I) * v + Math.cos(I) * q));
    J().invertSelf();
    nb(C, K, q, 0);
    N += jb;
    H += K;
    S += lb;
    D();
  };
  DEV_ROOT_FUNCTION();
}), g = new DOMMatrix(), l = new DOMMatrix(), gb = new Float32Array(16), Rb = new Float32Array(760), hc = new Uint8Array(65536), Eb = (document.body.innerHTML += '<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle."</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}', 
768), Fb = 13966 * Eb, W = hC.getContext("webgl2", {powerPreference:"high-performance",}), ic = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const a in ic) {
  [W, ic,].map(c => c[a[0] + [...a,].reduce((h, k, p) => (h * p + k.charCodeAt(0)) % 434, 0).toString(36)] = c[a]);
}
xb(() => {
  let a = 0;
  const c = () => {
    if (2 == ++a) {
      const k = [{}, {}, {}, {}, {}, {}, {}, {},], p = (m, y, u = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
      ) => {
        const t = {}, J = (r, q,) => (q = m.c6x(q), m.s3c(q, r), m.c6a(q), q), D = m.c1h();
        return m.abz(D, J(u, 35633)), m.abz(D, J(y, 35632)), m.l8l(D), r => r ? t[r] || (t[r] = m.gan(D, r)) : m.u7y(D);
      }, n = (m, y, u) => {
        ba ? 1100 < hC.width && m.d97(4, Pa[55].D - Pa[53].B, 5123, 2 * Pa[53].B,) : (m.das(4, Pa[y].D - Pa[y].B, 5123, 2 * Pa[y].B, Ta.length,), m.d97(4, Pa[u ? 53 : 56].B - 3, 5123, 6));
      }, A = m => {
        requestAnimationFrame(A);
        var y = (m - (aa || m)) / 1e3;
        if (wa += y, d += xa = ba ? 0 : Ya(0.055, y), aa = m, 0 < xa) {
          y = (t, J, D) => U(t + Math.sin(d + 2) / 5, J + Math.sin(0.8 * d) / 5, D).rotateSelf(2 * Math.sin(d), Math.sin(0.7 * d), Math.sin(0.9 * d),);
          Ha && d > Ha && (Ha = 0, h4.innerHTML = "");
          na = M(na, e[15].g, 0.2 + 0.3 * Xa(2 * e[15].g - 1),);
          ma = la ? (ea = 0, M(ma, -9, 0.015)) : M(ma, ab(d / 3), 1);
          Ib();
          m = (ra = eb(e[13].h, e[8].h), va = db(M(va, 0, 1), bb(va + 60 * xa), e[2].h - e[3].g,), ta = db(M(ta, 0, 5), bb(ta + 56 * xa), ra,), ua = db(M(ua, 0, 4), bb(ua + 48 * xa), ra,), pa = 1, U(0, 270 * (e[1].h - 1) + (2 + 5 * Math.cos(1.5 * d)) * (1 - e[10].h),), Ya(1 - e[11].g, e[10].g));
          var u = (U(m * Math.sin(0.6 * d + 1.2) * 12, 0, 35), U(m * Math.sin(0.6 * d - 1.2) * 8.2, 0, 55), U(m * Math.sin(0.6 * d) * 12, 0, 45), U(9.8 * (1 - m)), m = ab(1 - 5 * m) * eb(e[11].h, e[2].h), U(0, m * Math.sin(1.35 * d) * 4), U(0, 0, m * Math.sin(0.9 * d) * 8), U(0, -6.5 * e[11].g), m = eb(e[4].g, e[3].g), U(0, m * Math.sin(d) * 5 + 3.5 * (1 - Za(e[3].h, e[4].h)),), U(0, m * Math.sin(d + 3) * 6, m * Math.sin(0.6 * d + 1) * 6,), U(0, -7.3 * e[4].g), m = eb(e[6].h, e[7].h), U(0, -2, 10 - 
          8.5 * m * Xa(Math.sin(1.1 * d))), U(0, -2, 10 - 8.5 * m * Xa(Math.sin(2.1 * d))), U(0, -2, 10 - 8.5 * Za(m * Xa(Math.sin(1.5 * d)), (1 - e[6].h) * (1 - m)),), eb(e[5].g, e[13].g));
          for (m = 0; 4 > m; m++) {
            U((2 < m ? 2 * (1 - u) + u : 0) - 100, u * Math.sin(1.3 * d + 1.7 * m) * (3 + m / 3) + 0.7, 115 - 7 * (1 - e[5].g) * (1 - e[13].g) * (1 & m ? -1 : 1) + Za(0.05, u) * Math.cos(1.3 * d + 7 * m) * (4 - 2 * (1 - m / 3)),);
          }
          m = eb(e[8].g, e[9].g);
          for (let t = 0; 3 > t; ++t) {
            U(0, m * Math.sin(1.5 * d + 1.5 * t) * 4 + (t ? 0 : 3 * (1 - e[8].g) * (1 - e[9].g)),);
          }
          m = eb(eb((e[9].h + e[9].g) / 2, e[8].g), (e[12].h + e[12].g) / 2,);
          U(0, 16 * m, 95 + 8.5 * ab(2 * m - 1));
          U(0, -4.7 * e[0].h, -15);
          U(0, -4.7 * e[10].h, 15);
          U(-99.7, -1.9 - 5.5 * e[3].h, 63.5);
          U(-100, 0.6 - 5.8 * e[13].h, 96.5);
          U(-75, 3 * (1 - e[2].g) * (1 - e[3].h), 55).rotateSelf(180 * (1 - e[2].g) + va, 0,);
          U(2.5 * (1 - u) - 139.7, -3 * (1 - e[5].h) - u * Math.sin(0.8 * d) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * d) * (3 + 3 * u), 0);
          U(-2 * Math.sin(d)).rotateSelf(25 * Math.sin(d));
          U(-81, 0.6, 106).rotateSelf(0, 40 + ta);
          U(-65.8, 0.8, 106).rotateSelf(0, ua);
          U(-50.7, 0.8, 106).rotateSelf(0, 180 - ua);
          U(-50.7, 0.8, 91).rotateSelf(0, 270 + ua);
          y(-12, 4.2, 40 * ma - 66);
          y(-123, 1.4, 55 - 65 * na);
          for (y = 0; 16 > y; ++y) {
            13 > y && Ta[y](), u = e[y], m = u.h = M(u.h, u.j, 4), u.g = M(u.g, u.j, 1), ib(ib(u.l).multiplySelf(u.C), U(0)).rotateSelf(50 * m - 25, 0,).translateSelf(0, 1).m44 = m, da && 3 > (nb(), fb(Ma - jb, Na - kb, Oa - lb,)) && (u.j ? 0.7 < m && (u.j = 0, Ga = y, Jb("* click *", 1), Pb()) : 0.3 > m && (u.j = 1, Ga = y, Jb("* click *", 1), Pb())), 14 === y && u.j && 0.8 < m && (u.j = 0, 13 > ka ? Jb("Not leaving now, there are souls to catch!", 3) : la || (Jb("Well done. They will be punished.<br>Thanks for playing", 
            1 / 0), la = 1));
          }
          qa();
          for (y = 0; 28 > y; ++y) {
            hb(Pa[28 + y].l, Rb, y);
          }
          for (let t, J = 0, D = 656; 26 > J; ++J, ++D) {
            t = Pa[2 + J].l, Rb[D++] = t.m41, Rb[D++] = t.m42, Rb[D++] = t.m43;
          }
          DEV_ROOT_FUNCTION();
          ic.cbf(!0, !0, !0, !0);
          ic.c4s(16640);
          ic.u3a(N("j"), Rb);
          ic.cbf(!0, !1, !0, !1);
          ic.uae(N("b"), !1, hb(ib().rotateSelf(0, 180).invertSelf().translateSelf(-Ma, -Na, 0.3 - Oa,),),);
          n(ic, 56, 1);
          ic.c4s(256);
          ic.cbf(!1, !0, !1, !0);
          ic.uae(N("b"), !1, hb(ib().translateSelf(-Ma, -Na, -Oa - 0.3,),),);
          n(ic, 56, 1);
          ic.f1s();
          da = 0;
        }
        F();
        W.u3a(F("j"), Rb);
        W.b6o(36160, L);
        W.v5y(0, 0, 2048, 2048);
        W.ubh(F("g"), 4);
        W.ubh(F("h"), 4);
        W.uae(F("a"), !1, hb(g));
        y = Da;
        u = Ea;
        m = Fa;
        ba ? (ib().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), hb(l, Rb, 25), hb(l, Rb, 26), hb(l, Rb, 27), ib(fa).invertSelf(), nb(3.6, 3.5), y = jb, u = kb, m = 5, ib(g, G).rotateSelf(20, 0).translateSelf(-y, -u, -m).rotateSelf(0, 99,)) : ib(g, G).rotateSelf(-Ka, -La).invertSelf().translateSelf(-y, -u, -m);
        S(54.7);
        n(W, 57, ea);
        Z(126);
        n(W, 57, ea);
        W.b6o(36160, null);
        W.v5y(0, 0, W.drawingBufferWidth, W.drawingBufferHeight);
        W.c4s(16640);
        W.ubh(F("g"), 0);
        W.ubh(F("h"), 1);
        W.ubu(F("k"), y, u, m);
        W.uae(F("a"), !1, hb(fa));
        W.uae(F("b"), !1, hb(G));
        W.uae(F("i"), !1, f);
        n(W, 57, ea);
        H();
        W.uae(H("b"), !1, hb(G.invertSelf()));
        W.ubu(H("j"), W.drawingBufferWidth, W.drawingBufferHeight, wa);
        W.d97(4, 3, 5123, 0);
      }, B = new DOMMatrix(), G = new DOMMatrix(), f = new Float32Array(32), w = h, L = W.c5w(), F = p(W, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), N = p(ic, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), H = p(W, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [S, Z] = ob(2, m => {
        const y = W.c25();
        return W.a4v(33984 + m), W.b9j(3553, y), W.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), W.t2z(3553, 10241, 9729), W.t2z(3553, 10240, 9729), W.t2z(3553, 34893, 515), W.t2z(3553, 34892, 34894), W.t2z(3553, 10243, 33071), W.t2z(3553, 10242, 33071), u => {
          let t = 0, J = 0, D = 0, r = 1 / 0, q = 1 / 0, v = 1 / 0, C = -1 / 0, I = -1 / 0, K = -1 / 0;
          W.fas(36160, 36096, 3553, y, 0);
          W.c4s(256);
          ib().scale3dSelf(u *= 1.1).multiplySelf(ib(ha[m], B).multiplySelf(G).invertSelf(),);
          for (let O = 0; 8 > O; ++O) {
            const Q = k[O];
            nb(4 & O ? 1 : -1, 2 & O ? 1 : -1, 1 & O ? 1 : -1);
            t -= Q.x = (0 | jb) / (u * mb);
            J -= Q.y = (0 | kb) / (u * mb);
            D -= Q.z = (0 | lb) / (u * mb);
          }
          ib().rotateSelf(298, 139).translateSelf(t / 8, J / 8, D / 8);
          for (u = 0; 8 > u; ++u) {
            const {x:O, y:Q, z:X} = k[u];
            nb(O, Q, X);
            C = Za(C, jb);
            I = Za(I, kb);
            K = Za(K, lb);
            r = Ya(r, jb);
            q = Ya(q, kb);
            v = Ya(v, lb);
          }
          u = 10 + m;
          v *= 0 > v ? u : 1 / u;
          K *= 0 < K ? u : 1 / u;
          W.uae(F("b"), !1, hb(ib(g, B).scaleSelf(2 / (C - r), 2 / (I - q), 2 / (v - K),).translateSelf((C + r) / -2, (I + q) / -2, (v + K) / 2).multiplySelf(l), f, m,), 16 * m, 16,);
        };
      });
      W.a4v(33986);
      W.b9j(3553, W.c25());
      W.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, w);
      W.t2z(3553, 10241, 9987);
      W.t2z(3553, 10240, 9729);
      W.gbn(3553);
      W.b6o(36160, L);
      W.d45([0,]);
      W.r9l(0);
      F();
      W.ubh(F("q"), 2);
      H();
      W.ubh(H("q"), 2);
      W.c5t(0, 0, 0, 1);
      W.d4n(515);
      W.e8z(2929);
      W.e8z(2884);
      ic.e8z(2929);
      ic.e8z(2884);
      ic.v5y(0, 0, 128, 128);
      N();
      ic.uae(N("a"), !1, hb(Hb(1e-4, 2, 1.2, 0.4)));
      jc();
      requestAnimationFrame(A);
      DEV_ROOT_FUNCTION();
    }
  }, h = new Image();
  h.onload = c;
  h.src = Ja;
  Gb(() => {
    xb(() => {
      let f = 0;
      const w = [], L = [], F = [], N = [], H = new Int32Array(8), S = new Map(), Z = new Int32Array(H.buffer, 0, 5), m = new Float32Array(H.buffer);
      Pa.map((t, J) => {
        let D;
        const r = q => {
          let {x:v, y:C, z:I} = D[q], K = (m[0] = v, m[1] = C, m[2] = I, q = "" + (D.A ? Z : H), S.get(q));
          return void 0 !== K ? (v = 3 * K, N[v] = (N[v++] + H[5]) / 2, N[v] = (N[v++] + H[6]) / 2, N[v] = (N[v] + H[7]) / 2) : (S.set(q, K = S.size), L.push(v, C, I, m[3]), F.push(H[4]), N.push(H[5], H[6], H[7])), K;
        };
        for (D of (m[3] = 55 < J ? -28 : J, t.i)) {
          const {x:q, y:v, z:C} = Tb(D);
          H[4] = 0 | D.s;
          H[5] = 32767 * q;
          H[6] = 32767 * v;
          H[7] = 32767 * C;
          for (let I = 2, K = r(0), O = r(1); D.length > I; ++I) {
            w.push(K, O, O = r(I));
          }
        }
        t.i = 0;
        t.B = f;
        t.D = f = w.length;
      });
      [W, ic,].map(t => {
        t.b11(34962, t.c1b());
        t.b2v(34962, new Float32Array(L), 35044);
        t.v7s(0, 4, 5126, !1, 0, 0);
        t.b11(34962, t.c1b());
        t.b2v(34962, new Int16Array(N), 35044);
        t.v7s(1, 3, 5122, !0, 0, 0);
        t.b11(34962, t.c1b());
        t.b2v(34962, new Uint32Array(F), 35044);
        t.v7s(2, 4, 5121, !0, 0, 0);
        t.b11(34963, t.c1b());
        t.b2v(34963, new Uint16Array(w), 35044);
        t.e3x(0);
        t.e3x(1);
        t.e3x(2);
      });
      DEV_ROOT_FUNCTION();
      let y = [], u = [];
      try {
        const [t, J, D, r, q] = JSON.parse(localStorage["Dante-22"],);
        y = t;
        u = J;
        Ga = D;
        na = r;
        d = q;
      } catch {
      }
      e.map((t, J) => t.h = t.g = t.j = 14 !== J && y[J] ? 1 : 0);
      Ta.map((t, J) => t.j = u[J] ? 1 : 0);
      Kb();
      ma = ka || 14 !== Ga ? 1 : 0;
      xb(c);
    });
    var k = [-110, -100, -92, -82, -106, -97, -88,];
    const p = f => x(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), n = f => T(z(E().slice(0, -1), x(0, -f / 2).scale(6, f - 1, 2.2)), z(E().slice(0, -1), x(0, -f / 2 - 4).scale(4, f - 5, 4)), z(E(28, 1), x(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), A = ob(11, f => ub(qb(rb(16), p(f), P(1, 1, 0.8, 0.2)).reverse(), qb(rb(16), p(f + 1), P(1, 1, 0.8, 0.2)), 1,)).flat(), B = T(z(E(), x(0, -0.5, 1).scale(1.15, 1.2, 6.5), P(0.25, 0.25, 0.35, 0.3),), T(z(E(3), 
    x(0, 0, -5.5).scale(3, 2), P(0.6, 0.3, 0.4, 0.3)), z(E(), x(0, 0, -3.65).scale(2.5, 3), P(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => z(E(), x(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), P(0.7, 0.2, 0, 0.3),)),), G = [z(E(), x(0, -3).scale(11, 1.4, 3), P(0.9, 0.9, 0.9, 0.2)), z(E(), x(0, -2.2).scale(7.7, 0.5, 4), P(0.5, 0.5, 0.5, 0.2)), ob(12, f => z(E(), g.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), P(0.6, 0.5, 0.3, 0.2),)).flat(), z(T(z(E(6), g.rotate(90).scale(6, 8, 6)), z(E(4, 0, 0.01), x(0, 
    6).scale(12, 2, 0.75).rotate(0, 45)), z(E(6), g.rotate(90).scale(5, 12, 5)), ...[-5, 0, 5,].map(f => z(E(5), x(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),), g, P(0.3, 0.6, 0.6, 0.3),),].flat();
    R();
    b([Ua.slice(1),], x(-2).scale3d(3).rotate(90, 0));
    R();
    Qb(x(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, w) => {
      b(E(), x(0, 0, w ? 22 : -23).scale(3, 1, 8), P(0.9, 0.9, 0.9, 0.2));
      b(E(), x(0, 6.3, f).scale(4, 0.3, 1), P(0.3, 0.3, 0.3, 0.4));
      b(E().slice(0, -1), x(0, 1, f).scale(3, 0.2, 0.35), P(0.5, 0.5, 0.5, 0.3));
    });
    b(E(), x(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    b(E(), x(3, 1.5, -20).scale(0.5, 2, 5), P(0.7, 0.7, 0.7, 0.2));
    b(E(5), x(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), P(0.6, 0.3, 0.3, 0.4));
    b(E(), x(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), P(0.75, 0.75, 0.75, 0.2),);
    b(T(ac(T(z(E(6, 0, 0, 0.3), x(0, -0.92).scale(13, 2, 13), P(0.8, 0.8, 0.8, 0.2),), z(E(), g.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), P(0.5, 0.5, 0.5, 0.5),),), z(E(), g.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), P(0.8, 0.2, 0.2, 0.5),), z(E(6), x(0, -8).scale(9, 8, 7), P(0.2, 0.1, 0.4, 0.5)), z(E(6, 0, 0, 0.3), x(8, -4, -4).scale(14, 2, 13), P(0.7, 0.7, 0.7, 0.2),),), z(E(6), x(15.5, -1.5, 3.5).scale(3.5, 1, 3.5), P(0.5, 0.5, 0.5, 
    0.5),), z(E(5, 0, 1.5), x(0, 1).scale(4.5, 0.3, 4.5), P(0.7, 0.5, 0.9, 0.2),), z(E(5), g.scale(5, 30, 5), P(0.4, 0.2, 0.6, 0.5)),),);
    Qb(x(15, -2, 4));
    b(E(), x(-18.65, -3, 55).scale(2.45, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    Qb(x(-55, -1.1, 46).rotate(0, 90));
    b(E(7), x(-57, -2.6, 46).scale(4, 1, 4), P(0.8, 0.8, 0.8, 0.3));
    b(E(6), x(-61.3, -2.4, 49).scale(3, 1, 5), P(0.4, 0.6, 0.6, 0.3));
    b(G, x(-53, 0, 55));
    b(E(), x(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), P(0.7, 0.7, 0.7, 0.2),);
    b(E(3, 0, -0.5), x(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), P(0.8, 0.8, 0.8, 0.2),);
    b(T(z(E(), x(-100, 1, 63).scale(7.5, 4), P(0.5, 0.5, 0.5, 0.4)), z(E(), x(-100, 0, 63).scale(2, 2, 4), P(0.5, 0.5, 0.5, 0.4)), z(E(20, 1), x(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), P(0.5, 0.5, 0.5, 0.4),),),);
    b(T(ac(z(E(), x(-100, -2.6, 70).scale(3, 1.1, 7), P(0.8, 0.8, 0.8, 0.2),), z(E(), x(-100, -2.4, 55).scale(8, 0.9, 8), P(0.8, 0.8, 0.8, 0.2),), z(E(), x(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), P(0.8, 0.8, 0.8, 0.2),), z(E(6), x(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), P(0.6, 0.6, 0.6, 0.3),), z(E(), x(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), P(0.8, 0.8, 0.8, 0.2),), z(E(), x(-100, 0.42, 92).scale(3, 1.1, 4.1), P(0.8, 0.8, 0.8, 0.2),), z(E(), x(-100, -1.1, 82.39).rotate(-15, 
    0).scale(3, 1.1, 6), P(0.8, 0.8, 0.8, 0.2),),), z(E(8), x(-100, -1, 55).scale(7, 0.9, 7), P(0.3, 0.3, 0.3, 0.4)), z(E(8), x(-100, -2, 55).scale(4, 0.3, 4), P(0.4, 0.4, 0.4, 0.5)), z(E(8, 0, -3.1), x(-100, -3, 55).scale(0.4, 1, 0.4), P(0.4, 0.4, 0.4, 0.5),),),);
    Ua.map(({x:f, z:w}) => {
      b(E(6), x(3 * f, 3, 15 * w).scale(0.7, 4, 0.7), P(0.6, 0.3, 0.3, 0.4));
      b(E(6), x(7 * f - 100, -3, 7 * w + 55).scale(1, 8.1), P(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(L => b(E(6), x(7 * f - 100, L, 7 * w + 55).scale(1.3, 0.5, 1.3), P(0.4, 0.2, 0.2, 0.8),));
      [1.5, 8,].map(L => b(E(15, 1), x(9 * f - 38.9, L - 11.3, 11 * w + 17).scale(1.5, 0.5, 1.5), P(0.6, 0.6, 0.6, 0.3),));
      b(E(14, 1).slice(0, -2), x(9 * f - 38.9, -18, 11 * w + 17).scale(1, 14.2), P(0.25, 0.25, 0.25, 1),);
    });
    ob(7, f => {
      b(E((23 * f + 1) % 5 + 5, 0, 0.5), x(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3,), P(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    b(E(), x(-87, -9.5, 24).scale(7, 1, 3), P(0.4, 0.5, 0.6, 0.4));
    b(E(4), x(-86, -9.2, 27).scale(5, 1, 5), P(0.5, 0.6, 0.7, 0.3));
    b(E(12, 1), x(-86, -9, 31).scale(1.5, 1, 1.5), P(0.3, 0.3, 0.4, 0.1));
    Qb(x(-86, -7.5, 31));
    b(E(5), x(-38.9, -11.1, 10).scale(2, 1.2, 2), P(0.2, 0.4, 0.7, 0.3));
    b(T(ac(z(E(), x(-38.9, -11.3, 17).scale(11, 1, 13), P(0.3, 0.4, 0.6, 0.3),), z(E(5), x(-38.9, -11.1, 17).scale(9, 1, 9), P(0, 0.2, 0.3, 0.5),),), z(E(5), x(-38.9, -11.1, 17).scale3d(5.4), P(0, 0.2, 0.3, 0.5)),),);
    Qb(x(-38.9, -9.4, 10));
    b(T(ac(z(E(6), x(0, 0, -18).scale(15, 1.3, 15), P(0.7, 0.7, 0.7, 0.3),), z(E(6), g.scale(4, 1.2, 8), P(0.45, 0.4, 0.6, 0.3)),), ...ob(6, f => ob(6, w => z(E(6), x(4.6 * w - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * w) - 32).scale3d(2), P(0.7, 0.7, 0.7, 0.3),),)).flat(),), x(-38.9, -11.3, -1),);
    b(E(5), x(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), P(0.8, 0.1, 0.25, 0.4));
    Qb(x(-84, -0.7, 85).rotate(0, 45));
    b(T(z(E(), x(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...k.map(f => z(E(), x(f, 0.05, -3).scale(1.35, 2, 9))),), g, P(0.5, 0.5, 0.6, 0.2),);
    b(E(), x(-96.5, 1, -2).scale(19, 0.3, 0.3), P(0.5, 0.5, 0.6, 0.2));
    Qb(x(-116, -1.4, -18).rotate(0, 180));
    b(E(6), x(-116, -2.6, -16.5).scale(3.2, 0.8, 3), P(0.6, 0.5, 0.7, 0.2));
    b(E(), x(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), P(0.8, 0.8, 0.8, 0.2));
    b(E().slice(0, -1), x(-115.5, -17, -12).scale(0.5, 15, 2.2), P(0.6, 0.6, 0.6, 0.3),);
    b(E(8).slice(0, -2), x(-114, -17, -2).scale(2, 15, 2), P(0.6, 0.6, 0.6, 0.3));
    b(E(8).slice(0, -2), x(-79, -17, -2).scale(2, 15, 2), P(1, 1, 1, 0.3));
    b(E().slice(0, -1), x(-77, -17, -50.5).scale(2.2, 15, 0.5), P(0.6, 0.6, 0.6, 0.3),);
    b(T(z(E(12).slice(0, -1), x(-77, -14.5, -12).scale(4, 17.5, 4), P(0.7, 0.7, 0.7, 0.2),), z(E(12), x(-77, 3.1, -12).scale(3, 5, 3), P(0.4, 0.5, 0.6, 0.2)), z(E(), x(-79, 0.1, -12).scale(3.5, 2, 1.3), P(0.4, 0.5, 0.6, 0.2),), z(E(), x(-77, 0.1, -14).scale(1.5, 2, 2), P(0.4, 0.5, 0.6, 0.2)),),);
    b(T(z(E(), x(-93, -5.8, -40).scale(9, 1, 5), P(0.8, 0.8, 0.8, 0.1)), z(E(9), x(-98, -5.8, -40).scale(3, 8, 3), P(0.7, 0.7, 0.7, 0.2)),),);
    b(E(), x(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), P(0.6, 0.6, 0.6, 0.3));
    b(E(9).slice(0, -1), x(-98, -18.4, -40).scale(2.5, 13.5, 2.5), P(0.5, 0.5, 0.5, 0.3),);
    Qb(x(-98, -4.4, -40).rotate(0, 90));
    [-1, 1,].map((f, w) => {
      b(T(z(E(), x(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), P(0.5, 0.5, 0.5, 0.4),), z(E(5), x(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), P(0.6, 0.24, 0.2, 0.5),), z(E(), g.scale(3, 3, 10), P(0.6, 0.24, 0.2, 0.5)), z(E(5), x(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), P(0.6, 0.24, 0.2, 0.5),), z(E(32, 1), x(0, 3, -5).scale(3, 4, 10).rotate(90, 0), P(0.6, 0.24, 0.2, 0.5),),), x(f - 100, 0.7, 97),);
      b(E(12, 1), x(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), P(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5,].map(L => b(E(15, 1), x(-7.5 * f - 100, L + 0.7, 96).scale(1.1, 0.5, 1.1), P(0.5, 0.24, 0.2, 0.4),));
      b(A, x(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      b(A, x(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      ob(5, L => b(A, x(18.5 * (w - 0.5), 0, 4.8 * L - 9.5).rotate(0, 180 - 180 * w).scale(1.2, 10, 1.2),));
    });
    b(T(z(E(), x(-82.07, 0.8, 106).scale(11, 0.9, 2.2), P(0.7, 0.7, 0.7, 0.1),), z(E(45, 1), x(-81, 0.7, 106).scale3d(7.7), P(0.7, 0.7, 0.7, 0.1),),),);
    b(E(), x(-58, 1, 106).scale(2, 0.65, 2), P(0.7, 0.7, 0.7, 0.2));
    b(E(), x(-50.7, 1, 99).scale(2, 0.65, 1), P(0.7, 0.7, 0.7, 0.2));
    b(E(), x(-42, 0.4, 91).scale(5, 1, 2.5), P(0.7, 0.7, 0.7, 0.3));
    b(E(), x(-34.2, 0.4, 91).scale(3, 1, 3), P(0.7, 0.7, 0.7, 0.3));
    b(E(5), x(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), P(0.2, 0.5, 0.5, 0.6));
    Qb(x(-34, 2.7, 96).rotate(-12, 0));
    b(T(ac(z(E(), x(-101.5, 0.7, 93.5).scale(10.5, 1, 2), P(0.7, 0.7, 0.7, 0.2),), z(E(6, 0, 0, 0.6), x(-100, 0.7, 105.5).scale(8, 1, 11), P(0.7, 0.7, 0.7, 0.2),),), z(E(5), x(-100, 0.7, 113).scale(4, 3, 4), P(0.7, 0.7, 0.7, 0.2)),),);
    ob(3, f => {
      b(n(16), x(-77, -9, -12 * f - 20).rotate(0, 90), P(0.6, 0.6, 0.6, 0.3));
      b(n(16), x(12 * f - 109, -9, -12), P(0.6, 0.6, 0.6, 0.3));
      b(n(24.7 - 0.7 * (1 & f)), x(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? P(0.5, 0.5, 0.5, 0.3) : P(0.35, 0.35, 0.35, 0.5),);
    });
    b(T(ac(z(E(), x(0, 16, 111).scale(3, 1, 3.8), P(0.5, 0.3, 0.3, 0.4)), z(E(6, 0, 0, 0.3), x(0, -0.92, 95).scale(14, 2, 14), P(0.8, 0.8, 0.8, 0.2),), z(E(), x(0, 16, 110.5).scale(12, 1, 3), P(0.5, 0.3, 0.3, 0.4)),), z(E(5), x(0, 0, 95).scale3d(6), P(0.3, 0.3, 0.3, 0.5)), z(E(5), x(0, 16, 103.5).scale(5.5, 5, 5.5), P(0.5, 0.3, 0.3, 0.4),),),);
    Qb(x(0, 1.7, 82).rotate(0, 180));
    b(E(5).slice(0, -1), x(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), P(0.5, 0.3, 0.3, 0.4),);
    b(E(6), x(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), P(0.5, 0.6, 0.7, 0.3));
    b(E(), x(0, 16, 127.8).scale(1.5, 1, 0.7), P(0.5, 0.6, 0.7, 0.3));
    b(E(7), x(0, 15.1, 133).scale(5, 2, 5), P(0.4, 0.5, 0.6, 0.4));
    Sb(x(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    Sb(x(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...rb(18).map(({x:f, z:w}) => [7 * f, 10 * w, 4.5 - 2 * Xa(f),]),);
    Sb(x(0, 3, 95), ...rb(9).map(({x:f, z:w}) => [9 * f, 9 * w, 4,]),);
    Sb(x(0, 19, 134), [0, 0, 3.5,]);
    Sb(x(-38.9, -8.3, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    Sb(x(-89, 0.2, 80), [0, 0, 6,]);
    Sb(x(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    Sb(x(-115, 0.2, -12), [0, 0, 3.5,]);
    Sb(x(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    R();
    b(E(5), x(0, -0.2).scale(5, 1, 5), P(0.6, 0.65, 0.7, 0.3));
    Qb(x(0, 1.2));
    ob(2, () => {
      R();
      Ua.map(({x:f, z:w}) => {
        b(E(11, 1).slice(0, -2), x(4 * f, 4, 4 * w).scale(0.8, 3, 0.8), P(0.5, 0.3, 0.7, 0.6),);
        b(E(), x(4 * f, 7, 4 * w).scale(1, 0.3), P(0.5, 0.5, 0.5, 0.3));
      });
      b(T(z(E().slice(0, -1), g.scale(5, 1, 5), P(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => z(E(25, 1), x(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), P(0.8, 0.8, 0.8, 0.3),)),),);
      b(E(), x(0, -3).scale(8, 2, 8), P(0.4, 0.4, 0.4, 0.3));
    });
    R();
    b(T(ac(z(E(), g.scale(1.5, 1, 5), P(0.9, 0.9, 0.9, 0.2)), z(E(), x(0, -2).scale(2, 3.2, 1.9), P(0.3, 0.8, 0.5, 0.5)), z(E(6), g.scale(4, 1, 5), P(0.9, 0.9, 0.9, 0.2)), z(E(16, 1, 0, 4), g.scale(1, 1, 1.5).rotate(0, 90), P(0.9, 0.9, 0.9, 0.2),),), z(E(), g.scale(1.3, 10, 1.3), P(0.2, 0.7, 0.4, 0.6)),),);
    Sb(x(0, 2.8), [0, 0, 4.5,]);
    R();
    b(E(3), x(-23, -1.7, 55.8).scale(5, 0.7, 8.3), P(0.3, 0.6, 0.6, 0.2));
    b(E(8), x(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), P(0.8, 0.8, 0.8, 0.2));
    b(E(), x(-23, -3, 55).scale(5.2, 1.7, 3), P(0.5, 0.5, 0.5, 0.3));
    b(E(), x(-23, -2.2, 62).scale(3, 1, 4), P(0.5, 0.5, 0.5, 0.3));
    Qb(x(-23, -0.5, 66.5));
    R();
    b(E(), x(-22.55, -3, 55).scale(1.45, 1.4, 2.7), P(0.7, 0.7, 0.7, 0.2));
    b(T(z(E(), g.scale(3, 1.4, 2.7)), z(E(), g.scale(1.2, 8, 1.2)),), x(-33, -3, 55), P(0.7, 0.7, 0.7, 0.2),);
    R();
    b(T(z(E(), g.scale(3, 1.4, 2.7)), z(E(), g.scale(1, 3)),), x(-27, -3, 55), P(0.9, 0.9, 0.9, 0.2),);
    b(E(), x(-39, -3, 55).scale(3, 1.4, 2.7), P(0.9, 0.9, 0.9, 0.2));
    R();
    b(E(6), x(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), P(0.7, 0.7, 0.7, 0.4),);
    R();
    [0, 12, 24,].map(f => b(E(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.2, 0.5, 0.6, 0.2)));
    R();
    [6, 18,].map(f => b(E(), x(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), P(0.1, 0.4, 0.5, 0.2)));
    R();
    b(E(5), x(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), P(0.3, 0.3, 0.5, 0.5),);
    b(E(5).slice(0, -1), x(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), P(0.6, 0.3, 0.5, 0.5),);
    b(T(z(E(5), x(0, 2).scale(5, 7, 5).skewY(8)), z(E(5), x(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), z(E(), g.scale(2, 8, 3)),), x(-38.9, -11.3, 17), P(0.2, 0.4, 0.5, 0.5),);
    Sb(x(-39.1, -0.6, 17).rotate(11), ...rb(15).map(({x:f, z:w}) => [3 * f, 3 * w, 1.2,]),);
    k.map((f, w) => {
      w % 2 || 6 <= w || R();
      b(B, x(f, 1.9, -12));
    });
    ob(4, f => {
      R();
      b(E(6), x(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), P(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [P(0.1, 0.55, 0.45, 0.2), P(0.2, 0.5, 0.5, 0.3), P(0.3, 0.45, 0.55, 0.4),].map((f, w) => {
      R();
      b(E(), x(-23.5, 0.5, 91 + 6.8 * w).scale(1 === w ? 2 : 3.3, 1, 3.3), f);
      2 === w && b(E(), x(-29.1, 0.4, 91).scale(2.1, 1, 3), P(0.7, 0.7, 0.7, 0.3));
      1 === w && b(E(), x(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), P(0.6, 0.6, 0.7, 0.3),);
    });
    R();
    b(E(5), g.scale(5, 1.1, 5), P(0.5, 0.3, 0.3, 0.4));
    b(E(5), g.scale(5.5, 0.9, 5.5), P(0.25, 0.25, 0.25, 0.4));
    Qb(x(0, 1.5, -1).rotate(0, 180));
    ob(4, f => {
      R();
      ob(7, w => b(z(E(8, 1).slice(0, -1), x((2 < f ? 3.5 : 4) * (w / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), P(0.3, 0.3, 0.38),),),);
    });
    R();
    b(G);
    R();
    b(E(15, 1), x(-7.5).rotate(0, 90).scale(3, 2.3, 3), P(0.4, 0.4, 0.4, 0.3));
    b(E(10).slice(0, -1), x(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), P(0.3, 0.8, 0.7, 0.3),);
    b(E(5).slice(0, -1), x(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), P(0.5, 0.5, 0.5, 0.5),);
    Qb(x(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => b(A, g.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    b(T(z(E(10), g.scale(6, 2, 6), P(0.1, 0.6, 0.5, 0.3)), z(E(10), g.scale(3.3, 6, 3.3), P(0.1, 0.6, 0.5, 0.5)),),);
    Sb(x(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    R();
    b(E(3), x(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), P(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      b(E(6), x(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), P(0.7, 0.7, 0.7, 0.4),);
      b(E(), x(0, 6.2, f + 95).scale(0.5, 11, 0.5), P(0.5, 0.3, 0.3, 0.4));
    });
    R();
    b(T(z(E(28, 1), g.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2)), z(E(), x(0, 0, -5.5).scale(1.5, 3, 2.7), P(0.45, 0.45, 0.45, 0.2),),),);
    b(E(8).slice(0, -1), x(0, 2).scale(3, 1.5, 3).rotate(0, 22), P(0.7, 0.7, 0.7, 0.1),);
    b(E(5).slice(0, -1), x(0, 2).scale(1, 2), P(0.3, 0.3, 0.3, 0.2));
    Sb(x(0, 3), ...rb(14).map(({x:f, z:w}) => [5.6 * f, 5.6 * w, 2,]),);
    R();
    [-1, 1,].map(f => b(A, g.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    b(T(z(E(28, 1).slice(0, -1), x(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3),), z(E().slice(0, -1), x(0, 2).scale(9, 1.1, 2), P(0.3, 0, 0, 0.3)),),);
    b(E(28, 1), g.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2));
    b(E(5).slice(0, -1), x(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2));
    R();
    b(T(z(E(28, 1).slice(0, -1), x(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3),), z(E().slice(0, -1), x(0, 2, 7).scale(2, 1.1, 9), P(0.3, 0, 0, 0.3),), z(E().slice(0, -1), x(7, 2).scale(9, 1.1, 2), P(0.3, 0, 0, 0.3)),),);
    b(E(28, 1), g.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2));
    b(E(5).slice(0, -1), x(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2));
    R();
    b(T(z(E(28, 1).slice(0, -1), x(0, 2).scale(7.5, 1, 7.5), P(0.35, 0, 0, 0.3),), z(E().slice(0, -1), x(0, 2, -7).scale(2, 1.1, 9), P(0.3, 0, 0, 0.3),), z(E().slice(0, -1), x(7, 2).scale(9, 1.1, 2), P(0.3, 0, 0, 0.3)),),);
    b(E(28, 1), g.scale(7.5, 1, 7.5), P(0.45, 0.45, 0.45, 0.2));
    b(E(5).slice(0, -1), x(0, 1).scale(1, 0.2), P(0.3, 0.3, 0.3, 0.2));
    ob(2, () => {
      R();
      b(T(z(E(30, 1, 1.15, 1), x(0, -3).scale(3.5, 1, 3.5), P(0.7, 0.4, 0.25, 0.7),), z(E(), x(4, -1.2).scale3d(2), P(0.7, 0.4, 0.25, 0.3)), z(E(30, 1, 1.3, 1), x(0, -2.5).scale(2.6, 1, 3), P(0.7, 0.4, 0.25, 0.2),),),);
      Qb(x(0, -3, 4));
    });
    for (k = 0; 16 > k; ++k) {
      R(), b(E(6, 1).slice(0, -1), g.scale(0.12, 1.2, 0.12), P(0.3, 0.3, 0.5, 0.1)), b(E(9, 1), x(0, 0.8).scale(0.2, 0.3, 0.2), P(0.7, 1, 0.2)), b(E(3), x(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), P(0.2, 0.2, 0.2, 0.1));
    }
    R();
    b(vb(20), x(0, 1).scale3d(0.5), P(1, 0.3, 0.4));
    b(vb(30), g.scale(0.65, 0.8, 0.55), P(1, 0.3, 0.4));
    b(E(), x(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), P(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      b(A, g.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), P(1, 1, 0.8),);
      b(z(T(E(15, 1), z(E(), x(0, 0, 1).scale(2, 2, 0.5)),), g.rotate(-90, 0).scale(0.1, 0.05, 0.1), P(0.3, 0.3, 0.3),), x(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map(f => {
      R();
      b(E(20, 1), x(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), P(1, 0.3, 0.4));
    });
    R();
    b(E(6, 1).slice(0, -1), g.scale(0.77, 1, 0.77), P(1, 0.3, 0.5));
    R();
    b(vb(28, 22, (f, w, L) => {
      var F = w / 22, N = f * Math.PI * 2 / 28, H = Math.sin(F ** 0.6 * Math.PI / 2);
      f = F * F * Math.sin(f * Math.PI * 0.5) / 4;
      return 21 < w ? {x:L.A = 0, y:-0.5, z:0,} : {x:Math.cos(N) * H, y:Math.cos(F * Math.PI) - F - f, z:Math.sin(N) * H + Math.sin(f * Math.PI * 2) / 4,};
    }), g.scale(0.7, 0.7, 0.7), P(1, 1, 1),);
    [-1, 1,].map(f => b(vb(10), x(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    DEV_ROOT_FUNCTION();
  });
});

