let aa, ba, ca, da, ea, fa, ja, ka, la, ma, oa, pa, qa, sa, ta, ua, va, wa, xa, b = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 14, Ja = 0.1;
const Ka = Math.PI / 180, La = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
);
var Ma = 0, Na = 180, Oa = 0, Sa = 0, Ta = 0;
const Ua = [], d = [], Va = [], Wa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Xa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], Ya = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], Za = NO_INLINE(a => 0 > a ? -a : a), $a = NO_INLINE((a, c) => a < c ? a : c), ab = NO_INLINE((a, c) => c < a ? a : c), bb = (a, c) => Za(a) > c ? a : 0, cb = (a, c = 0, g = 1) => a < c ? c : g < a ? g : a, db = a => Math.atan2(Math.sin(a * Ka), Math.cos(a * Ka)) / Ka, eb = (a, c, g) => a + (2 * (c = (c - a) % 360) % 360 - c) * cb(g) || 0, fb = (a, c, g) => (0 < g ? 1 > g ? a + (c - a) * g : c : a) || 
0, gb = (a, c) => (a = cb(a), fb(a, 1 - a, c)), hb = (a, c, g = 0) => (a * a + c * c + g * g) ** 0.5, jb = (a, c = ib, g = 0,) => (g *= 16, c[g++] = a.m11, c[g++] = a.m12, c[g++] = a.m13, c[g++] = a.m14, c[g++] = a.m21, c[g++] = a.m22, c[g++] = a.m23, c[g++] = a.m24, c[g++] = a.m31, c[g++] = a.m32, c[g++] = a.m33, c[g++] = a.m34, c[g++] = a.m41, c[g++] = a.m42, c[g++] = a.m43, c[g] = a.m44, c), kb = (a = e, c = h,) => (c.m11 = a.m11, c.m12 = a.m12, c.m13 = a.m13, c.m14 = a.m14, c.m21 = a.m21, c.m22 = 
a.m22, c.m23 = a.m23, c.m24 = a.m24, c.m31 = a.m31, c.m32 = a.m32, c.m33 = a.m33, c.m34 = a.m34, c.m41 = a.m41, c.m42 = a.m42, c.m43 = a.m43, c.m44 = a.m44, c), pb = (a = 0, c = 0, g = 0, k = 1) => {
  lb = h.m11 * a + h.m21 * c + h.m31 * g + h.m41 * k;
  mb = h.m12 * a + h.m22 * c + h.m32 * g + h.m42 * k;
  nb = h.m13 * a + h.m23 * c + h.m33 * g + h.m43 * k;
  ob = h.m14 * a + h.m24 * c + h.m34 * g + h.m44 * k;
};
var lb, mb, nb, ob;
const l = NO_INLINE((a, c, g) => e.translate(a, c, g)), qb = (a, c) => Array.from(Array(a), (g, k) => c(k)), rb = (a, c, g) => (a.A = g, a.s = c, a), sb = (a, c, g = a.s,) => (kb(c), rb(a.map(({x:k, y:m, z:n}) => (pb(k, m, n), {x:lb, y:mb, z:nb,})), g, a.A,)), x = (a, c, g) => a.map(k => sb(k, c, g)), tb = (a, c = 0) => qb(a, g => {
  const k = Math.cos(2 * Math.PI * g / a);
  return {x:Math.sin(2 * Math.PI * g / a), y:0, z:0.01 > Za(k) ? k : 0 > k ? k - c : k + c,};
}), wb = (a, c, g) => a.map((k, m, {length:n}) => rb([k, c[n - m - 1], c[n - (m + 1) % n - 1], a[(m + 1) % n],], a.s, g,)), B = (a, c, g = 0, k,) => (a = a ? tb(a, k) : Wa, k = sb(a, l(0, 1).scale3d(0 < g ? g : 1)), a = sb(a, l(0, -1).scale3d(0 > g ? -g : 1)).reverse(), [...wb(a, k, c), k, a,]), xb = (a, c = a, g = (k, m) => (m *= Math.PI / c, {x:Math.cos(k *= 2 * Math.PI / a) * Math.sin(m), y:Math.cos(m), z:Math.sin(k) * Math.sin(m),})) => {
  const k = [];
  for (let m = 0; a > m; m++) {
    for (let n = 0; c > n; n++) {
      const C = rb([], 0, 1);
      k.push(C);
      C.push(g(m, n, C));
      n && C.push(g((m + 1) % a, n, C));
      c - 1 > n && C.push(g((m + 1) % a, n + 1 % c, C));
      C.push(g(m, n + 1 % c, C));
    }
  }
  return k;
}, F = NO_INLINE((a, c, g, k = 0) => 255 * k << 24 | 255 * g << 16 | 255 * c << 8 | 255 * a), yb = a => {
  let c, g = 0, k = 0, m = 0, n = a.at(-1);
  for (c of a) {
    g += (n.y - c.y) * (n.z + c.z), k += (n.z - c.z) * (n.x + c.x), m += (n.x - c.x) * (n.y + c.y), n = c;
  }
  return c = hb(g, k, m), g /= c, k /= c, m /= c, {x:g, y:k, z:m, w:g * n.x + k * n.y + m * n.z,};
}, zb = ({x:a, y:c, z:g}, k) => a * k.x + c * k.y + g * k.z, Ab = (a, c) => {
  let g;
  var k, m;
  const n = c.i, C = c.u;
  for (var A = 0; n.length > A; ++A) {
    if (-0.00008 > (g = zb(a, n[A]) - a.w) ? m = c : 8e-5 < g && (k = c), m && k) {
      k = [];
      m = [];
      A = n.at(-1);
      let H = zb(A, a) - a.w;
      for (const K of n) {
        g = zb(K, a) - a.w, 8e-5 > H && m.push(A), -0.00008 < H && k.push(A), (8e-5 < H && -0.00008 > g || -0.00008 > H && 8e-5 < g) && (H /= g - H, A = {x:A.x + (A.x - K.x) * H, y:A.y + (A.y - K.y) * H, z:A.z + (A.z - K.z) * H,}, k.push(A), m.push(A)), A = K, H = g;
      }
      k = 2 < k.length && {i:rb(k, n.s, n.A), u:C, v:c,};
      m = 2 < m.length && {i:rb(m, n.s, n.A), u:C, v:c,};
      break;
    }
  }
  return {x:k, y:m,};
}, Bb = (a, c, g = yb(c.i)) => {
  let k, m;
  return a ? ({x:k, y:m} = Ab(a, c), k || m || a.i.push(c), k && (a.o = Bb(a.o, k, g)), m && (a.m = Bb(a.m, m, g))) : a = {x:g.x, y:g.y, z:g.z, w:g.w, i:[c,], o:0, m:0,}, a;
}, Cb = (a, c, g) => {
  const k = [], m = (n, C) => {
    let {x:A, y:H} = Ab(n, C);
    A || H || (0 < g * zb(n, c) ? A = C : H = C);
    A && (n.o ? m(n.o, A) : k.push(A));
    H && n.m && m(n.m, H);
  };
  for (const n of c.i) {
    m(a, n);
  }
  return k;
}, Fb = (a, c) => a && (c(a), Fb(a.o, c), Fb(a.m, c)), Gb = a => (Fb(a, c => {
  const g = c.m;
  c.m = c.o;
  c.o = g;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const k of c.i) {
    k.u = !k.u;
  }
}), a), Hb = a => a.length ? a.reduce((c, g) => Bb(c, {i:g, u:0, v:0,}), 0) : a, Ib = (...a) => a.reduce((c, g) => {
  const k = [];
  if (c = Hb(c), g) {
    g = Hb(g);
    Fb(c, m => m.i = Cb(g, m, 1));
    Fb(g, m => k.push([m, Cb(c, m, -1),]));
    for (let [m, n] of k) {
      for (const C of n) {
        Bb(c, C, m);
      }
    }
  }
  return c;
}), N = (a, ...c) => {
  const g = n => {
    let C;
    return n.v && ((C = m.get(n.v)) ? (k.delete(C), n = g(n.v)) : m.set(n.v, n)), n;
  }, k = new Map(), m = new Map();
  return a = Gb(Ib(Gb(Hb(a)), ...c)), Fb(a, n => {
    for (const C of n.i) {
      k.set(g(C), C.u);
    }
  }), Array.from(k, ([{i:n}, C]) => {
    const A = n.map(({x:H, y:K, z:f}) => ({x:H, y:K, z:f,}));
    return rb(C ? A.reverse() : A, n.s, n.A);
  });
}, Jb = NO_INLINE(a => 1 - Math.exp(-Ca * a)), R = NO_INLINE((a, c, g) => fb(a, c, Jb(g))), Kb = a => {
  h4.innerHTML += ".";
  setTimeout(a);
}, Lb = a => Math.sin(a * Math.PI * 2), Mb = a => 0.5 > a % 1 ? 1 : -1, Nb = a => a % 1 * 2 - 1, Ob = a => 2 > (a = a % 1 * 4) ? a - 1 : 3 - a, Vb = NO_INLINE(a => {
  let c = 0;
  const g = () => {
    let n = 0;
    const C = J => {
      let P, Y, Pa, ha = 0, ia = 0;
      const Z = [], ra = new Int32Array(J * Pb), cc = 2 ** (u - 9) / J, dc = Math.PI * 2 ** (r - 8) / J, Db = z * J & -2;
      for (let ub = 0; 11 >= ub; ++ub) {
        for (let vb = 0, Qb = +"000001234556112341234556011111111112011111111112000001111112"[12 * c + ub]; 32 > vb; ++vb) {
          const Rb = (32 * ub + vb) * J;
          for (var na = 0; 4 > na; ++na) {
            if (P = 0, Qb && (P = A[Qb - 1].charCodeAt(vb + 32 * na) - 40, P += 0 < P ? 106 : 0), P) {
              var ya;
              if (!(ya = Z[P])) {
                ya = P;
                let V = void 0, za = void 0;
                var Sb = P;
                let ec = 0, fc = 0;
                const gc = 2 > c ? Nb : Lb, hc = 2 > c ? 1 > c ? Mb : Ob : Lb, Tb = new Int32Array(G + W + M);
                for (let Qa = 0, Eb = 0; G + W + M > Qa; ++Qa, ++Eb) {
                  let Ra = 1;
                  G > Qa ? Ra = Qa / G : G + W > Qa || (Ra = (1 - (Ra = (Qa - G - W) / M)) * 3 ** (-v / 16 * Ra));
                  0 > Eb || (Eb -= 4 * J, za = 0.00396 * 2 ** ((Sb + K - 256) / 12), V = 0.00396 * 2 ** ((Sb + D - 256) / 12) * (1 + (c ? 0 : 0.0072)));
                  Tb[Qa] = 80 * (gc(ec += za * Ra ** (f / 32)) * H + hc(fc += V * Ra ** (Q / 32)) * t + (O ? (2 * Math.random() - 1) * O : 0)) * Ra | 0;
                }
                ya = Z[ya] = Tb;
              }
              for (let V = 0, za = 2 * Rb; ya.length > V; ++V, za += 2) {
                ra[za] += ya[V];
              }
            }
          }
          for (let V, za = 0; J > za; ++za) {
            ya = 0;
            na = 2 * (Rb + za);
            var Aa = (((V = ra[na]) || Pa) && (Y = 0.00308 * I, 1 !== c && 4 !== c || (Y *= Math.sin(cc * na * Math.PI * 2) * L / 512 + 0.5), Y = 1.5 * Math.sin(Y), ha += Y * ia, Aa = (1 - w / 255) * (V - ia) - ha, ia += Y * Aa, V = 4 === c ? ia : 3 === c ? Aa : ha, c || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5), V *= E / 32, Pa = 1e-5 < V * V, Aa = Math.sin(dc * na) * q / 512 + 0.5, ya = V * (1 - Aa), V *= Aa), na < Db || (ya += ra[1 + na - Db] * y / 255, 
            V += ra[na - Db] * y / 255), n + na >> 1);
            k[Aa] += (ra[na] = ya) / 65536;
            m[Aa] += (ra[++na] = V) / 65536;
          }
        }
      }
      n += J * Pb;
    }, A = Xa[c], [H, K, f, t, D, Q, O, G, W, p, v, u, I, w, E, q, r, y, z, L] = Ya[c], M = 4 * p ** 2;
    C(5513);
    C(4562);
    C(3891);
    Kb(5 > ++c ? g : a);
  }, k = (ca = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:Ub / 2,})).getChannelData(0), m = ca.getChannelData(1);
  Kb(g);
}), Wb = (a, c, g, k) => new DOMMatrix([g, 0, 0, 0, 0, k, 0, 0, 0, 0, (c + a) / (a - c), -1, 0, 0, 2 * c * a / (a - c), 0,]);
let Xb = () => {
  let a, c, g, k, m, n, C, A, H, K, f, t, D, Q, O, G, W = !0;
  const p = [], v = () => {
    b4.innerHTML = "Music: " + W;
    G && (ba || !W ? G.disconnect() : G.connect(O.destination));
  }, u = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ja = [Wb(0.3, 55, q, 1.732051), Wb(55, 181, q, 1.732051),];
    fa = Wb(0.3, 181, q, 1.732051);
    k = A = void 0;
    p.length = da = Q = t = D = Da = Ea = 0;
    document.hidden && I(!0);
  }, I = q => {
    if (ba !== q) {
      if (ba = q, u(), document.body.className = q ? "l m" : "l", q) {
        try {
          document.exitFullscreen().catch(() => 0), document.exitPointerLock();
        } catch {
        }
      }
      v();
    }
  }, w = q => {
    try {
      O || (O = new AudioContext(), (G = O.createBufferSource()).buffer = ca, G.loop = !0, G.start()), document.body.requestFullscreen().catch(() => 0);
    } catch {
    }
    I(!1);
    ea = q;
  }, E = (q, r) => q.buttons[r]?.pressed || 0 < q.buttons[r]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  b1.onclick = () => w();
  b2.onclick = () => w(1);
  b5.onclick = () => I(!0);
  b4.onclick = () => {
    W = !W;
    v();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onclick = q => {
    if (!ba && (q.target === hC && (da = 1), ea)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  onkeyup = onkeydown = q => {
    let r;
    q.repeat || (r = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (p[r] = !!q.type[5] && !0) && (0 === r && (da = 1), 1 === r && I(!0)));
  };
  onmousemove = ({movementX:q, movementY:r}) => {
    ea && (q || r) && (Na += 0.1 * q, Ma += 0.1 * r);
  };
  hC.ontouchstart = q => {
    if (!ba) {
      for (let {pageX:r, pageY:y, identifier:z} of q.changedTouches) {
        ea && r > hC.clientWidth / 2 ? void 0 === A && (H = 0, n = r, C = y, A = z, f = Ma, K = Na) : void 0 === k && (m = 0, c = r, g = y, k = z);
      }
      a = Ba;
    }
  };
  hC.ontouchmove = q => {
    if (!ba) {
      for (let {pageX:M, pageY:J, identifier:P} of q.changedTouches) {
        var r, y, z, L;
        A === P && (Ma = f + (J - C) / 2.3, Na = K + (M - n) / 2.3, H = 1);
        k === P && (P = (c - M) / 19, r = Za(P), y = (g - J) / 19, z = Za(y), (L = 0.3 < ab(r, z)) && (m = 1), t = cb(P, -1) * (L && 0.2 < r), D = cb(y, -1) * (L && 0.2 < z), 2 < r && (c = 19 * (0 > P ? -1 : 1) + M), 2 < z && (g = 19 * (0 > y ? -1 : 1) + J));
      }
    }
  };
  hC.ontouchend = q => {
    let r;
    document.activeElement === document.body && q.preventDefault();
    for (const y of q.changedTouches) {
      y.identifier === A ? (A = void 0, H || (r = 1), H = 0) : y.identifier === k ? (k = void 0, D = t = 0, m || (r = 1), m = 0) : r = 1;
    }
    q.target === hC && r && a && 0.02 < (q = Ba - a) && 0.7 > q && (da = 1);
  };
  Xb = () => {
    Da = D + (p[4] ? 1 : 0) - (p[5] ? 1 : 0);
    Ea = t + (p[2] ? 1 : 0) - (p[3] ? 1 : 0);
    let q = navigator.getGamepads()[0];
    q && (ea && (Ma += 80 * Ca * bb(q.axes[3], 0.3), Na += 80 * Ca * bb(q.axes[2], 0.3)), Da += E(q, 12) - E(q, 13) - bb(q.axes[1], 0.2), Ea += E(q, 14) - E(q, 15) - bb(q.axes[0], 0.2), E(q, 9) && I(!0), (q = E(q, 3) || E(q, 2) || E(q, 1) || E(q, 0)) && !Q && (da = 1), Q = q);
  };
  document.onvisibilitychange = onblur = onresize = u;
  I(!0);
  DEV_ROOT_FUNCTION();
};
const Yb = (a, c) => {
  1 / 0 > Ja && (Ja = b + c, h4.innerHTML = a);
}, Zb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ka = Va.reduce((a, c) => a + c.j, 0)] + " / XIII";
}, $b = () => {
  localStorage["Dante-22"] = JSON.stringify([d.map(a => a.j), Va.map(a => a.j), Ia, oa, b,]);
}, S = () => {
  qa = [];
  pa = new DOMMatrix();
  Ua.push({l:pa, i:qa,});
}, T = (a, c = e, g) => qa.push(...x(a, c, g)), bc = (a, ...c) => {
  let g, k, m, n, C = 0, A = 0, H = 1, K = -1;
  const f = () => {
    if (f.j) {
      kb(Ua[35].l).translateSelf(p % 4 * 1.2 - 1.7 + Math.sin(b + p) / 7, -2, 1.7 * (p >> 2) - 5.5 + Za(p % 4 - 2) + Math.cos(b / 1.5 + p) / 6,);
    } else {
      let v, u, I, w, E, q = 1, r = 1 / 0;
      for (let y = 0; c.length > y; y++) {
        let z = c[y], L = hb(D - z[0], Q - z[1]);
        q = $a(q, L / z[2]);
        0 > (L -= z[2]) ? v = 1 : r > L && (r = L, t = z);
      }
      v || (u = D - t[0], I = Q - t[1], w = hb(u, I), E = Math.atan2(-I, u), H && (n = cb(n / (1 + Math.random())), A = (Math.random() - 0.5) * Math.PI / 2), E += A, K = -Math.cos(E), C = Math.sin(E), 0.1 < w && (w = $a(w, t[2]) / w, D = u * w + t[0], Q = I * w + t[1]));
      H = v;
      n = R(n, 3 + 6 * (1 - q), 3 + q);
      O = R(O, D = R(D, D + K, n), n);
      G = R(G, Q = R(Q, Q + C, n), n);
      g = eb(g, Math.atan2(O - k, G - m) / Ka - 180, Jb(3));
      kb(W).multiplySelf(a).translateSelf(k = O, 0, m = G).rotateSelf(0, g, 7 * Math.sin(1.7 * b),);
      1.6 > (pb(), hb(Oa - lb, Sa - mb, Ta - nb,)) && (f.j = 1, Yb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ka] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Zb(), $b());
    }
    jb(h, ac, 28 + p);
  };
  let t = c[0], [D, Q] = t, [O, G] = t;
  const W = pa, p = Va.length;
  Va.push(f);
}, U = (a, c = 0, g = 0) => {
  const k = kb(e, Ua[++sa].l);
  return k.m41 = a, k.m42 = c, k.m43 = g, k;
}, kc = NO_INLINE(() => {
  let a, c, g, k, m, n, C, A, H, K, f, t, D, Q, O, G, W = 0, p = 1, v = 2, u = 15;
  const I = (r, y, z, L) => fb(r, y, p || (cb(Za(y - r) ** 0.5 - z) + 1 / 7) * Jb(1.5 * L)), w = () => kb((v ? d[Ia] : Ua[28 !== W ? W : 0]).l,), E = r => {
    1 < v ? (kb(d[Ia].l).multiplySelf(d[Ia].C), pb(0, 0.9 < ma ? 15 : 1, -2.4)) : (w(), pb(Q, O, G));
    r && (m = (lb - Oa) / Ca, n = (nb - Ta) / Ca);
    Oa = lb;
    Sa = mb;
    Ta = nb;
  }, q = NO_INLINE(() => {
    var r = 0, y = 0, z = 0, L = 0, M = 0, J = 0, P = -1;
    for (var Y = 0; 36 > Y; ++Y) {
      var Pa = 512 * Y;
      for (var ha = 96; 416 > ha; ha += 4) {
        for (var ia = 0; 2 > ia; ++ia) {
          var Z = ic[Pa + ha + ia];
          const ra = ic[Pa + ha + ia + 2];
          Z > L && (L = Z);
          Z + ra && (0 > P || P === Y) && (P = Y, ra === K ? ++r : y && y !== ra || (y = ra, ++z));
        }
      }
    }
    K = 0 > P ? 0 : z > 2 * r ? y : K;
    for (r = 36; 128 > r; ++r) {
      Y = P = z = y = 0;
      Pa = 512 * r;
      for (ha = 0; 128 > ha; ++ha) {
        ia = Pa + 4 * ha, Z = ic[ia], 64 > ha ? Z > y && (y = Z) : Z > z && (z = Z), (Z = ic[2 + ia]) > P && (P = Z), Z = ic[1 + ia], 64 < ha ? Z > y && (y = Z) : Z > z && (z = Z), (Z = ic[3 + ia]) > Y && (Y = Z);
      }
      (z -= y) * z > M * M && (M = z);
      (Y -= P) * Y > J * J && (J = Y);
    }
    M *= 0.7;
    A = cb(1 - 0.01 * ab(Za(M), Za(J)), 0.3);
    M /= 255;
    L /= 255;
    J /= 255;
    w().invertSelf();
    pb(M, L, J, 0);
    Q += lb;
    O += L;
    G += nb;
    E();
  });
  ta = () => {
    E(K);
    jc.r9r(0, 0, 128, 128, 6408, 5121, ic);
    q();
    !v && K === W || (W = K, w().invertSelf(), pb(Oa, Sa, Ta), Q = lb, O = mb, G = nb, v = v && (K ? 0 : 1));
    (-20 > Oa || 109 > Ta ? -25 : -9) > Sa && (v = 2);
    1 === K && (d[15].j = -15 > Oa && 0 > Ta ? 1 : 0);
    k = R(k, ua * (30 < K && 35 > K), 2,);
    f = I(f, Oa, 0.5, 1);
    t = I(t, H = fb(R(H, Sa, 2), Sa, v || 8 * Za(H - Sa),), 2, 1,);
    D = I(D, Ta, 0.5, 1);
    ea ? (r = v + Jb(18), Fa = fb(Fa, Oa, r), Ha = fb(Ha, Ta, r), Ga = fb(Ga, 1.6 + H, r), Na = db(Na)) : (Fa = I(Fa, f, 1, 2 + k,), Ha = I(Ha, D + -18 + 5 * k, 1, 2 + k,), Ga = I(Ga, ab(t + cb((-60 - Ta) / 8, 0, 20) + 13 + 9 * k, 6,), 4, 2,), r = $a(-6, -Za(D - Ha)), y = f - Fa, Na = eb(Na, 90 - db(Math.atan2(r, y) / Ka), p + Jb(10),), Ma = eb(Ma, 90 - Math.atan2(hb(r, y), Ga - t) / Ka, p + Jb(10),));
    Ma = cb(Ma, -87, 87);
    p = 0;
    var r = cb(Da, -1), y = cb(Ea, -1), z = bb(hb(r, y) ** 0.5, 0.1), L = Math.atan2(r, y);
    z && (a = 90 - L / Ka);
    c = eb(c, a, Jb(8));
    g = R(g, z, 10);
    U(Oa, 0.06 * A * g * Math.cos(18.2 * b) + H, Ta,).rotateSelf(0, c);
    for (var M = 0; 2 > M; ++M) {
      const J = 9.1 * b - Math.PI * M;
      kb(Ua[53].l, U(0)).translateSelf(0, g * cb(0.45 * Math.sin(J - Math.PI / 2)),).rotateSelf(g * Math.sin(J) * 0.25 / Ka, 0);
    }
    u = K ? 5 : R(u, v ? 13 : 19 - 2 * $a(0, Sa + 10), 2.2);
    m = K || v ? 0 : R(m, 0, 3);
    n = K || v ? 0 : R(n, 0, 3);
    r = (C = v ? 0 : R(C, K ? 7 * cb(2 * z) * A : 0, K ? 9 : 1,)) * z * Za(r) * Math.sin(L);
    y = C * z * Za(y) * Math.cos(L);
    L = ea ? (180 + Na) * Ka : 0;
    z = Ca * (m + (Math.cos(L) * y - Math.sin(L) * r));
    M = Ca * -u;
    r = Ca * (n + (Math.sin(L) * y + Math.cos(L) * r));
    w().invertSelf();
    pb(z, M, r, 0);
    Q += lb;
    O += M;
    G += nb;
    E();
  };
  DEV_ROOT_FUNCTION();
}), e = new DOMMatrix(), h = new DOMMatrix(), ib = new Float32Array(16), ac = new Float32Array(760), ic = new Uint8Array(65536), Pb = (document.body.innerHTML += '<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle."</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}', 
768), Ub = 13966 * Pb, X = hC.getContext("webgl2", {powerPreference:"high-performance",}), jc = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const a in jc) {
  [X, jc,].map(c => c[a[0] + [...a,].reduce((g, k, m) => (g * m + k.charCodeAt(0)) % 434, 0).toString(36)] = c[a]);
}
Kb(() => {
  let a = 0;
  const c = () => {
    if (2 == ++a) {
      const k = [{}, {}, {}, {}, {}, {}, {}, {},], m = (p, v, u = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
      ) => {
        const I = {}, w = (q, r,) => (r = p.c6x(r), p.s3c(r, q), p.c6a(r), r), E = p.c1h();
        return p.abz(E, w(u, 35633)), p.abz(E, w(v, 35632)), p.l8l(E), q => q ? I[q] || (I[q] = p.gan(E, q)) : p.u7y(E);
      }, n = (p, v, u) => {
        ba ? 1100 < hC.width && p.d97(4, Ua[55].D - Ua[53].B, 5123, 2 * Ua[53].B,) : (p.das(4, Ua[v].D - Ua[v].B, 5123, 2 * Ua[v].B, Va.length,), p.d97(4, Ua[u ? 53 : 56].B - 3, 5123, 6));
      }, C = p => {
        requestAnimationFrame(C);
        var v = (p - (aa || p)) / 1e3;
        if (Ba += v, b += Ca = ba ? 0 : $a(0.055, v), aa = p, 0 < Ca) {
          v = (I, w, E) => U(I + Math.sin(b + 2) / 5, w + Math.sin(0.8 * b) / 5, E).rotateSelf(2 * Math.sin(b), Math.sin(0.7 * b), Math.sin(0.9 * b),);
          Ja && b > Ja && (Ja = 0, h4.innerHTML = "");
          oa = R(oa, d[15].g, 0.2 + 0.3 * Za(2 * d[15].g - 1),);
          ma = la ? (ea = 0, R(ma, -9, 0.015)) : R(ma, cb(b / 3), 1);
          Xb();
          p = (sa = 1, ua = gb(d[13].h, d[8].h), xa = fb(R(xa, 0, 1), db(xa + 60 * Ca), d[2].h - d[3].g,), va = fb(R(va, 0, 5), db(va + 56 * Ca), ua,), wa = fb(R(wa, 0, 4), db(wa + 48 * Ca), ua,), U(0, 270 * (d[1].h - 1) + (2 + 5 * Math.cos(1.5 * b)) * (1 - d[10].h),), $a(1 - d[11].g, d[10].g));
          var u = (U(p * Math.sin(0.6 * b + 1.2) * 12, 0, 35), U(p * Math.sin(0.6 * b - 1.2) * 8.2, 0, 55), U(p * Math.sin(0.6 * b) * 12, 0, 45), U(9.8 * (1 - p)), p = cb(1 - 5 * p) * gb(d[11].h, d[2].h), U(0, p * Math.sin(1.35 * b) * 4), U(0, 0, p * Math.sin(0.9 * b) * 8), U(0, -6.5 * d[11].g), p = gb(d[4].g, d[3].g), U(0, p * Math.sin(b) * 5 + 3.5 * (1 - ab(d[3].h, d[4].h)),), U(0, p * Math.sin(b + 3) * 6, p * Math.sin(0.6 * b + 1) * 6,), U(0, -7.3 * d[4].g), p = gb(d[6].h, d[7].h), U(0, -2, 10 - 
          8.5 * p * Za(Math.sin(1.1 * b))), U(0, -2, 10 - 8.5 * p * Za(Math.sin(2.1 * b))), U(0, -2, 10 - 8.5 * ab(p * Za(Math.sin(1.5 * b)), (1 - d[6].h) * (1 - p)),), gb(d[5].g, d[13].g));
          for (p = 0; 4 > p; p++) {
            U((2 < p ? 2 * (1 - u) + u : 0) - 100, u * Math.sin(1.3 * b + 1.7 * p) * (3 + p / 3) + 0.7, 115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & p ? -1 : 1) + ab(0.05, u) * Math.cos(1.3 * b + 7 * p) * (4 - 2 * (1 - p / 3)),);
          }
          p = gb(d[8].g, d[9].g);
          for (let I = 0; 3 > I; ++I) {
            U(0, p * Math.sin(1.5 * b + 1.5 * I) * 4 + (I ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)),);
          }
          p = gb(gb((d[9].h + d[9].g) / 2, d[8].g), (d[12].h + d[12].g) / 2,);
          U(0, 16 * p, 95 + 8.5 * cb(2 * p - 1));
          U(0, -4.7 * d[0].h, -15);
          U(0, -4.7 * d[10].h, 15);
          U(-99.7, -1.9 - 5.5 * d[3].h, 63.5);
          U(-100, 0.6 - 5.8 * d[13].h, 96.5);
          U(-75, 3 * (1 - d[2].g) * (1 - d[3].h), 55).rotateSelf(180 * (1 - d[2].g) + xa, 0,);
          U(2.5 * (1 - u) - 139.7, -3 * (1 - d[5].h) - u * Math.sin(0.8 * b) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * b) * (3 + 3 * u), 0);
          U(-2 * Math.sin(b)).rotateSelf(25 * Math.sin(b));
          U(-81, 0.6, 106).rotateSelf(0, 40 + va);
          U(-65.8, 0.8, 106).rotateSelf(0, wa);
          U(-50.7, 0.8, 106).rotateSelf(0, 180 - wa);
          U(-50.7, 0.8, 91).rotateSelf(0, 270 + wa);
          v(-12, 4.2, 40 * ma - 66);
          v(-123, 1.4, 55 - 65 * oa);
          for (v = 0; 16 > v; ++v) {
            13 > v && Va[v](), u = d[v], p = u.h = R(u.h, u.j, 4), u.g = R(u.g, u.j, 1), kb(kb(u.l).multiplySelf(u.C), U(0)).rotateSelf(50 * p - 25, 0,).translateSelf(0, 1).m44 = p, da && 3 > (pb(), hb(Oa - lb, Sa - mb, Ta - nb,)) && (u.j ? 0.7 < p && (u.j = 0, Ia = v, Yb("* click *", 1), $b()) : 0.3 > p && (u.j = 1, Ia = v, Yb("* click *", 1), $b())), 14 === v && u.j && 0.8 < p && (u.j = 0, 13 > ka ? Yb("Not leaving now, there are souls to catch!", 3) : la || (Yb("Well done. They will be punished.<br>Thanks for playing", 
            1 / 0), la = 1));
          }
          ta();
          for (v = 0; 28 > v; ++v) {
            jb(Ua[28 + v].l, ac, v);
          }
          for (let I, w = 0, E = 656; 26 > w; ++w, ++E) {
            I = Ua[2 + w].l, ac[E++] = I.m41, ac[E++] = I.m42, ac[E++] = I.m43;
          }
          DEV_ROOT_FUNCTION();
          jc.cbf(!0, !0, !0, !0);
          jc.c4s(16640);
          jc.u3a(Q("j"), ac);
          jc.cbf(!0, !1, !0, !1);
          jc.uae(Q("b"), !1, jb(kb().rotateSelf(0, 180).invertSelf().translateSelf(-Oa, -Sa, 0.3 - Ta,),),);
          n(jc, 56, 1);
          jc.c4s(256);
          jc.cbf(!1, !0, !1, !0);
          jc.uae(Q("b"), !1, jb(kb().translateSelf(-Oa, -Sa, -Ta - 0.3,),),);
          n(jc, 56, 1);
          jc.f1s();
          da = 0;
        }
        D();
        X.u3a(D("j"), ac);
        X.b6o(36160, t);
        X.v5y(0, 0, 2048, 2048);
        X.ubh(D("g"), 4);
        X.ubh(D("h"), 4);
        X.uae(D("a"), !1, jb(e));
        v = Fa;
        u = Ga;
        p = Ha;
        ba ? (kb().rotateSelf(0, 40 * Math.sin(Ba) - 80, -8), jb(h, ac, 25), jb(h, ac, 26), jb(h, ac, 27), kb(fa).invertSelf(), pb(3.6, 3.5), v = lb, u = mb, p = 5, kb(e, H).rotateSelf(20, 0).translateSelf(-v, -u, -p).rotateSelf(0, 99,)) : kb(e, H).rotateSelf(-Ma, -Na).invertSelf().translateSelf(-v, -u, -p);
        G(54.7);
        n(X, 57, ea);
        W(126);
        n(X, 57, ea);
        X.b6o(36160, null);
        X.v5y(0, 0, X.drawingBufferWidth, X.drawingBufferHeight);
        X.c4s(16640);
        X.ubh(D("g"), 0);
        X.ubh(D("h"), 1);
        X.ubu(D("k"), v, u, p);
        X.uae(D("a"), !1, jb(fa));
        X.uae(D("b"), !1, jb(H));
        X.uae(D("i"), !1, K);
        n(X, 57, ea);
        O();
        X.uae(O("b"), !1, jb(H.invertSelf()));
        X.ubu(O("j"), X.drawingBufferWidth, X.drawingBufferHeight, Ba);
        X.d97(4, 3, 5123, 0);
      }, A = new DOMMatrix(), H = new DOMMatrix(), K = new Float32Array(32), f = g, t = X.c5w(), D = m(X, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), Q = m(jc, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), O = m(X, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [G, W] = qb(2, p => {
        const v = X.c25();
        return X.a4v(33984 + p), X.b9j(3553, v), X.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), X.t2z(3553, 10241, 9729), X.t2z(3553, 10240, 9729), X.t2z(3553, 34893, 515), X.t2z(3553, 34892, 34894), X.t2z(3553, 10243, 33071), X.t2z(3553, 10242, 33071), u => {
          let I = 0, w = 0, E = 0, q = 1 / 0, r = 1 / 0, y = 1 / 0, z = -1 / 0, L = -1 / 0, M = -1 / 0;
          X.fas(36160, 36096, 3553, v, 0);
          X.c4s(256);
          kb().scale3dSelf(u *= 1.1).multiplySelf(kb(ja[p], A).multiplySelf(H).invertSelf(),);
          for (let J = 0; 8 > J; ++J) {
            const P = k[J];
            pb(4 & J ? 1 : -1, 2 & J ? 1 : -1, 1 & J ? 1 : -1);
            I -= P.x = (0 | lb) / (u * ob);
            w -= P.y = (0 | mb) / (u * ob);
            E -= P.z = (0 | nb) / (u * ob);
          }
          kb().rotateSelf(298, 139).translateSelf(I / 8, w / 8, E / 8);
          for (u = 0; 8 > u; ++u) {
            const {x:J, y:P, z:Y} = k[u];
            pb(J, P, Y);
            z = ab(z, lb);
            L = ab(L, mb);
            M = ab(M, nb);
            q = $a(q, lb);
            r = $a(r, mb);
            y = $a(y, nb);
          }
          u = 10 + p;
          y *= 0 > y ? u : 1 / u;
          M *= 0 < M ? u : 1 / u;
          X.uae(D("b"), !1, jb(kb(e, A).scaleSelf(2 / (z - q), 2 / (L - r), 2 / (y - M),).translateSelf((z + q) / -2, (L + r) / -2, (y + M) / 2).multiplySelf(h), K, p,), 16 * p, 16,);
        };
      });
      X.a4v(33986);
      X.b9j(3553, X.c25());
      X.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f);
      X.t2z(3553, 10241, 9987);
      X.t2z(3553, 10240, 9729);
      X.gbn(3553);
      X.b6o(36160, t);
      X.d45([0,]);
      X.r9l(0);
      D();
      X.ubh(D("q"), 2);
      O();
      X.ubh(O("q"), 2);
      X.c5t(0, 0, 0, 1);
      X.d4n(515);
      X.e8z(2929);
      X.e8z(2884);
      jc.e8z(2929);
      jc.e8z(2884);
      jc.v5y(0, 0, 128, 128);
      Q();
      jc.uae(Q("a"), !1, jb(Wb(1e-4, 2, 1.2, 0.4)));
      kc();
      requestAnimationFrame(C);
      DEV_ROOT_FUNCTION();
    }
  }, g = new Image();
  g.onload = c;
  g.src = La;
  Vb(() => {
    Kb(() => {
      let f = 0;
      const t = [], D = [], Q = [], O = [], G = new Int32Array(8), W = new Map(), p = new Int32Array(G.buffer, 0, 5), v = new Float32Array(G.buffer);
      Ua.map((w, E) => {
        let q;
        const r = y => {
          let {x:z, y:L, z:M} = q[y], J = (v[0] = z, v[1] = L, v[2] = M, y = "" + (q.A ? p : G), W.get(y));
          return void 0 !== J ? (z = 3 * J, O[z] = (O[z++] + G[5]) / 2, O[z] = (O[z++] + G[6]) / 2, O[z] = (O[z] + G[7]) / 2) : (W.set(y, J = W.size), D.push(z, L, M, v[3]), Q.push(G[4]), O.push(G[5], G[6], G[7])), J;
        };
        for (q of (v[3] = 55 < E ? -28 : E, w.i)) {
          const {x:y, y:z, z:L} = yb(q);
          G[4] = 0 | q.s;
          G[5] = 32767 * y;
          G[6] = 32767 * z;
          G[7] = 32767 * L;
          for (let M = 2, J = r(0), P = r(1); q.length > M; ++M) {
            t.push(J, P, P = r(M));
          }
        }
        w.i = 0;
        w.B = f;
        w.D = f = t.length;
      });
      [X, jc,].map(w => {
        w.b11(34962, w.c1b());
        w.b2v(34962, new Float32Array(D), 35044);
        w.v7s(0, 4, 5126, !1, 0, 0);
        w.b11(34962, w.c1b());
        w.b2v(34962, new Int16Array(O), 35044);
        w.v7s(1, 3, 5122, !0, 0, 0);
        w.b11(34962, w.c1b());
        w.b2v(34962, new Uint32Array(Q), 35044);
        w.v7s(2, 4, 5121, !0, 0, 0);
        w.b11(34963, w.c1b());
        w.b2v(34963, new Uint16Array(t), 35044);
        w.e3x(0);
        w.e3x(1);
        w.e3x(2);
      });
      DEV_ROOT_FUNCTION();
      let u = [], I = [];
      try {
        const [w, E, q, r, y] = JSON.parse(localStorage["Dante-22"],);
        u = w;
        I = E;
        Ia = q;
        oa = r;
        b = y;
      } catch {
      }
      d.map((w, E) => w.h = w.g = w.j = 14 !== E && u[E] ? 1 : 0);
      Va.map((w, E) => w.j = I[E] ? 1 : 0);
      Zb();
      ma = ka || 14 !== Ia ? 1 : 0;
      Kb(c);
    });
    var k = [-110, -100, -92, -82, -106, -97, -88,];
    const m = f => {
      T(B(5), f.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), F(0.4, 0.5, 0.5));
      T(B(5), f.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), F(0.4, 0.5, 0.5),);
      T(B().slice(0, -1), f.translate(0, -0.4).scale(0.5, 0.1, 0.5), F(0.5, 0.5, 0.4),);
      d.push({l:pa, C:f,});
    }, n = f => l(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), C = f => N(x(B().slice(0, -1), l(0, -f / 2).scale(6, f - 1, 2.2)), x(B().slice(0, -1), l(0, -f / 2 - 4).scale(4, f - 5, 4)), x(B(28, 1), l(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), A = qb(11, f => wb(sb(tb(16), n(f), F(1, 1, 0.8, 0.2)).reverse(), sb(tb(16), n(f + 1), F(1, 1, 0.8, 0.2)), 1,),).flat(), H = N(x(B(), l(0, -0.5, 1).scale(1.15, 1.2, 6.5), F(0.25, 0.25, 0.35, 0.3),), N(x(B(3), 
    l(0, 0, -5.5).scale(3, 2), F(0.6, 0.3, 0.4, 0.3)), x(B(), l(0, 0, -3.65).scale(2.5, 3), F(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => x(B(), l(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), F(0.7, 0.2, 0, 0.3),)),), K = [x(B(), l(0, -3).scale(11, 1.4, 3), F(0.9, 0.9, 0.9, 0.2)), x(B(), l(0, -2.2).scale(7.7, 0.5, 4), F(0.5, 0.5, 0.5, 0.2)), qb(12, f => x(B(), e.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), F(0.6, 0.5, 0.3, 0.2),),).flat(), x(N(x(B(6), e.rotate(90).scale(6, 8, 6)), x(B(4, 0, 0.01), l(0, 
    6).scale(12, 2, 0.75).rotate(0, 45)), x(B(6), e.rotate(90).scale(5, 12, 5)), ...[-5, 0, 5,].map(f => x(B(5), l(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),), e, F(0.3, 0.6, 0.6, 0.3),),].flat();
    S();
    T([Wa.slice(1),], l(-2).scale3d(3).rotate(90, 0));
    S();
    m(l(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, t) => {
      T(B(), l(0, 0, t ? 22 : -23).scale(3, 1, 8), F(0.9, 0.9, 0.9, 0.2));
      T(B(), l(0, 6.3, f).scale(4, 0.3, 1), F(0.3, 0.3, 0.3, 0.4));
      T(B().slice(0, -1), l(0, 1, f).scale(3, 0.2, 0.35), F(0.5, 0.5, 0.5, 0.3));
    });
    T(B(), l(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), F(0.8, 0.8, 0.8, 0.2));
    T(B(), l(3, 1.5, -20).scale(0.5, 2, 5), F(0.7, 0.7, 0.7, 0.2));
    T(B(5), l(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), F(0.6, 0.3, 0.3, 0.4));
    T(B(), l(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), F(0.75, 0.75, 0.75, 0.2),);
    T(N(Ib(N(x(B(6, 0, 0, 0.3), l(0, -0.92).scale(13, 2, 13), F(0.8, 0.8, 0.8, 0.2),), x(B(), e.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), F(0.5, 0.5, 0.5, 0.5),),), x(B(), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), F(0.8, 0.2, 0.2, 0.5),), x(B(6), l(0, -8).scale(9, 8, 7), F(0.2, 0.1, 0.4, 0.5)), x(B(6, 0, 0, 0.3), l(8, -4, -4).scale(14, 2, 13), F(0.7, 0.7, 0.7, 0.2),),), x(B(6), l(15.5, -1.5, 3.5).scale(3.5, 1, 3.5), F(0.5, 0.5, 0.5, 
    0.5),), x(B(5, 0, 1.5), l(0, 1).scale(4.5, 0.3, 4.5), F(0.7, 0.5, 0.9, 0.2),), x(B(5), e.scale(5, 30, 5), F(0.4, 0.2, 0.6, 0.5)),),);
    m(l(15, -2, 4));
    T(B(), l(-18.65, -3, 55).scale(2.45, 1.4, 2.7), F(0.9, 0.9, 0.9, 0.2));
    m(l(-55, -1.1, 46).rotate(0, 90));
    T(B(7), l(-57, -2.6, 46).scale(4, 1, 4), F(0.8, 0.8, 0.8, 0.3));
    T(B(6), l(-61.3, -2.4, 49).scale(3, 1, 5), F(0.4, 0.6, 0.6, 0.3));
    T(K, l(-53, 0, 55));
    T(B(), l(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), F(0.7, 0.7, 0.7, 0.2),);
    T(B(3, 0, -0.5), l(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), F(0.8, 0.8, 0.8, 0.2),);
    T(N(x(B(), l(-100, 1, 63).scale(7.5, 4), F(0.5, 0.5, 0.5, 0.4)), x(B(), l(-100, 0, 63).scale(2, 2, 4), F(0.5, 0.5, 0.5, 0.4)), x(B(20, 1), l(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), F(0.5, 0.5, 0.5, 0.4),),),);
    T(N(Ib(x(B(), l(-100, -2.6, 70).scale(3, 1.1, 7), F(0.8, 0.8, 0.8, 0.2),), x(B(), l(-100, -2.4, 55).scale(8, 0.9, 8), F(0.8, 0.8, 0.8, 0.2),), x(B(), l(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), F(0.8, 0.8, 0.8, 0.2),), x(B(6), l(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), F(0.6, 0.6, 0.6, 0.3),), x(B(), l(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), F(0.8, 0.8, 0.8, 0.2),), x(B(), l(-100, 0.42, 92).scale(3, 1.1, 4.1), F(0.8, 0.8, 0.8, 0.2),), x(B(), l(-100, -1.1, 82.39).rotate(-15, 
    0).scale(3, 1.1, 6), F(0.8, 0.8, 0.8, 0.2),),), x(B(8), l(-100, -1, 55).scale(7, 0.9, 7), F(0.3, 0.3, 0.3, 0.4)), x(B(8), l(-100, -2, 55).scale(4, 0.3, 4), F(0.4, 0.4, 0.4, 0.5)), x(B(8, 0, -3.1), l(-100, -3, 55).scale(0.4, 1, 0.4), F(0.4, 0.4, 0.4, 0.5),),),);
    Wa.map(({x:f, z:t}) => {
      T(B(6), l(3 * f, 3, 15 * t).scale(0.7, 4, 0.7), F(0.6, 0.3, 0.3, 0.4));
      T(B(6), l(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), F(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(D => T(B(6), l(7 * f - 100, D, 7 * t + 55).scale(1.3, 0.5, 1.3), F(0.4, 0.2, 0.2, 0.8),));
      [1.5, 8,].map(D => T(B(15, 1), l(9 * f - 38.9, D - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), F(0.6, 0.6, 0.6, 0.3),));
      T(B(14, 1).slice(0, -2), l(9 * f - 38.9, -18, 11 * t + 17).scale(1, 14.2), F(0.25, 0.25, 0.25, 1),);
    });
    qb(7, f => {
      T(B((23 * f + 1) % 5 + 5, 0, 0.5), l(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3,), F(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    T(B(), l(-87, -9.5, 24).scale(7, 1, 3), F(0.4, 0.5, 0.6, 0.4));
    T(B(4), l(-86, -9.2, 27).scale(5, 1, 5), F(0.5, 0.6, 0.7, 0.3));
    T(B(12, 1), l(-86, -9, 31).scale(1.5, 1, 1.5), F(0.3, 0.3, 0.4, 0.1));
    m(l(-86, -7.5, 31));
    T(B(5), l(-38.9, -11.1, 10).scale(2, 1.2, 2), F(0.2, 0.4, 0.7, 0.3));
    T(N(Ib(x(B(), l(-38.9, -11.3, 17).scale(11, 1, 13), F(0.3, 0.4, 0.6, 0.3),), x(B(5), l(-38.9, -11.1, 17).scale(9, 1, 9), F(0, 0.2, 0.3, 0.5),),), x(B(5), l(-38.9, -11.1, 17).scale3d(5.4), F(0, 0.2, 0.3, 0.5)),),);
    m(l(-38.9, -9.4, 10));
    T(N(Ib(x(B(6), l(0, 0, -18).scale(15, 1.3, 15), F(0.7, 0.7, 0.7, 0.3),), x(B(6), e.scale(4, 1.2, 8), F(0.45, 0.4, 0.6, 0.3)),), ...qb(6, f => qb(6, t => x(B(6), l(4.6 * t - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32).scale3d(2), F(0.7, 0.7, 0.7, 0.3),),)).flat(),), l(-38.9, -11.3, -1),);
    T(B(5), l(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), F(0.8, 0.1, 0.25, 0.4));
    m(l(-84, -0.7, 85).rotate(0, 45));
    T(N(x(B(), l(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...k.map(f => x(B(), l(f, 0.05, -3).scale(1.35, 2, 9))),), e, F(0.5, 0.5, 0.6, 0.2),);
    T(B(), l(-96.5, 1, -2).scale(19, 0.3, 0.3), F(0.5, 0.5, 0.6, 0.2));
    m(l(-116, -1.4, -18).rotate(0, 180));
    T(B(6), l(-116, -2.6, -16.5).scale(3.2, 0.8, 3), F(0.6, 0.5, 0.7, 0.2));
    T(B(), l(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), F(0.8, 0.8, 0.8, 0.2));
    T(B().slice(0, -1), l(-115.5, -17, -12).scale(0.5, 15, 2.2), F(0.6, 0.6, 0.6, 0.3),);
    T(B(8).slice(0, -2), l(-114, -17, -2).scale(2, 15, 2), F(0.6, 0.6, 0.6, 0.3));
    T(B(8).slice(0, -2), l(-79, -17, -2).scale(2, 15, 2), F(1, 1, 1, 0.3));
    T(B().slice(0, -1), l(-77, -17, -50.5).scale(2.2, 15, 0.5), F(0.6, 0.6, 0.6, 0.3),);
    T(N(x(B(12).slice(0, -1), l(-77, -14.5, -12).scale(4, 17.5, 4), F(0.7, 0.7, 0.7, 0.2),), x(B(12), l(-77, 3.1, -12).scale(3, 5, 3), F(0.4, 0.5, 0.6, 0.2)), x(B(), l(-79, 0.1, -12).scale(3.5, 2, 1.3), F(0.4, 0.5, 0.6, 0.2),), x(B(), l(-77, 0.1, -14).scale(1.5, 2, 2), F(0.4, 0.5, 0.6, 0.2)),),);
    T(N(x(B(), l(-93, -5.8, -40).scale(9, 1, 5), F(0.8, 0.8, 0.8, 0.1)), x(B(9), l(-98, -5.8, -40).scale(3, 8, 3), F(0.7, 0.7, 0.7, 0.2)),),);
    T(B(), l(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), F(0.6, 0.6, 0.6, 0.3));
    T(B(9).slice(0, -1), l(-98, -18.4, -40).scale(2.5, 13.5, 2.5), F(0.5, 0.5, 0.5, 0.3),);
    m(l(-98, -4.4, -40).rotate(0, 90));
    [-1, 1,].map((f, t) => {
      T(N(x(B(), l(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), F(0.5, 0.5, 0.5, 0.4),), x(B(5), l(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), F(0.6, 0.24, 0.2, 0.5),), x(B(), e.scale(3, 3, 10), F(0.6, 0.24, 0.2, 0.5)), x(B(5), l(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), F(0.6, 0.24, 0.2, 0.5),), x(B(32, 1), l(0, 3, -5).scale(3, 4, 10).rotate(90, 0), F(0.6, 0.24, 0.2, 0.5),),), l(f - 100, 0.7, 97),);
      T(B(12, 1), l(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), F(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5,].map(D => T(B(15, 1), l(-7.5 * f - 100, D + 0.7, 96).scale(1.1, 0.5, 1.1), F(0.5, 0.24, 0.2, 0.4),));
      T(A, l(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      T(A, l(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      qb(5, D => T(A, l(18.5 * (t - 0.5), 0, 4.8 * D - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),));
    });
    T(N(x(B(), l(-82.07, 0.8, 106).scale(11, 0.9, 2.2), F(0.7, 0.7, 0.7, 0.1),), x(B(45, 1), l(-81, 0.7, 106).scale3d(7.7), F(0.7, 0.7, 0.7, 0.1),),),);
    T(B(), l(-58, 1, 106).scale(2, 0.65, 2), F(0.7, 0.7, 0.7, 0.2));
    T(B(), l(-50.7, 1, 99).scale(2, 0.65, 1), F(0.7, 0.7, 0.7, 0.2));
    T(B(), l(-42, 0.4, 91).scale(5, 1, 2.5), F(0.7, 0.7, 0.7, 0.3));
    T(B(), l(-34.2, 0.4, 91).scale(3, 1, 3), F(0.7, 0.7, 0.7, 0.3));
    T(B(5), l(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), F(0.2, 0.5, 0.5, 0.6));
    m(l(-34, 2.7, 96).rotate(-12, 0));
    T(N(Ib(x(B(), l(-101.5, 0.7, 93.5).scale(10.5, 1, 2), F(0.7, 0.7, 0.7, 0.2),), x(B(6, 0, 0, 0.6), l(-100, 0.7, 105.5).scale(8, 1, 11), F(0.7, 0.7, 0.7, 0.2),),), x(B(5), l(-100, 0.7, 113).scale(4, 3, 4), F(0.7, 0.7, 0.7, 0.2)),),);
    qb(3, f => {
      T(C(16), l(-77, -9, -12 * f - 20).rotate(0, 90), F(0.6, 0.6, 0.6, 0.3));
      T(C(16), l(12 * f - 109, -9, -12), F(0.6, 0.6, 0.6, 0.3));
      T(C(24.7 - 0.7 * (1 & f)), l(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? F(0.5, 0.5, 0.5, 0.3) : F(0.35, 0.35, 0.35, 0.5),);
    });
    T(N(Ib(x(B(), l(0, 16, 111).scale(3, 1, 3.8), F(0.5, 0.3, 0.3, 0.4)), x(B(6, 0, 0, 0.3), l(0, -0.92, 95).scale(14, 2, 14), F(0.8, 0.8, 0.8, 0.2),), x(B(), l(0, 16, 110.5).scale(12, 1, 3), F(0.5, 0.3, 0.3, 0.4)),), x(B(5), l(0, 0, 95).scale3d(6), F(0.3, 0.3, 0.3, 0.5)), x(B(5), l(0, 16, 103.5).scale(5.5, 5, 5.5), F(0.5, 0.3, 0.3, 0.4),),),);
    m(l(0, 1.7, 82).rotate(0, 180));
    T(B(5).slice(0, -1), l(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), F(0.5, 0.3, 0.3, 0.4),);
    T(B(6), l(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), F(0.5, 0.6, 0.7, 0.3));
    T(B(), l(0, 16, 127.8).scale(1.5, 1, 0.7), F(0.5, 0.6, 0.7, 0.3));
    T(B(7), l(0, 15.1, 133).scale(5, 2, 5), F(0.4, 0.5, 0.6, 0.4));
    bc(l(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    bc(l(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...tb(18).map(({x:f, z:t}) => [7 * f, 10 * t, 4.5 - 2 * Za(f),]),);
    bc(l(0, 3, 95), ...tb(9).map(({x:f, z:t}) => [9 * f, 9 * t, 4,]),);
    bc(l(0, 19, 134), [0, 0, 3.5,]);
    bc(l(-38.9, -8.3, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    bc(l(-89, 0.2, 80), [0, 0, 6,]);
    bc(l(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    bc(l(-115, 0.2, -12), [0, 0, 3.5,]);
    bc(l(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    S();
    T(B(5), l(0, -0.2).scale(5, 1, 5), F(0.6, 0.65, 0.7, 0.3));
    m(l(0, 1.2));
    qb(2, () => {
      S();
      Wa.map(({x:f, z:t}) => {
        T(B(11, 1).slice(0, -2), l(4 * f, 4, 4 * t).scale(0.8, 3, 0.8), F(0.5, 0.3, 0.7, 0.6),);
        T(B(), l(4 * f, 7, 4 * t).scale(1, 0.3), F(0.5, 0.5, 0.5, 0.3));
      });
      T(N(x(B().slice(0, -1), e.scale(5, 1, 5), F(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(f => x(B(25, 1), l(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), F(0.8, 0.8, 0.8, 0.3),)),),);
      T(B(), l(0, -3).scale(8, 2, 8), F(0.4, 0.4, 0.4, 0.3));
    });
    S();
    T(N(Ib(x(B(), e.scale(1.5, 1, 5), F(0.9, 0.9, 0.9, 0.2)), x(B(), l(0, -2).scale(2, 3.2, 1.9), F(0.3, 0.8, 0.5, 0.5)), x(B(6), e.scale(4, 1, 5), F(0.9, 0.9, 0.9, 0.2)), x(B(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), F(0.9, 0.9, 0.9, 0.2),),), x(B(), e.scale(1.3, 10, 1.3), F(0.2, 0.7, 0.4, 0.6)),),);
    bc(l(0, 2.8), [0, 0, 4.5,]);
    S();
    T(B(3), l(-23, -1.7, 55.8).scale(5, 0.7, 8.3), F(0.3, 0.6, 0.6, 0.2));
    T(B(8), l(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), F(0.8, 0.8, 0.8, 0.2));
    T(B(), l(-23, -3, 55).scale(5.2, 1.7, 3), F(0.5, 0.5, 0.5, 0.3));
    T(B(), l(-23, -2.2, 62).scale(3, 1, 4), F(0.5, 0.5, 0.5, 0.3));
    m(l(-23, -0.5, 66.5));
    S();
    T(B(), l(-22.55, -3, 55).scale(1.45, 1.4, 2.7), F(0.7, 0.7, 0.7, 0.2));
    T(N(x(B(), e.scale(3, 1.4, 2.7)), x(B(), e.scale(1.2, 8, 1.2)),), l(-33, -3, 55), F(0.7, 0.7, 0.7, 0.2),);
    S();
    T(N(x(B(), e.scale(3, 1.4, 2.7)), x(B(), e.scale(1, 3)),), l(-27, -3, 55), F(0.9, 0.9, 0.9, 0.2),);
    T(B(), l(-39, -3, 55).scale(3, 1.4, 2.7), F(0.9, 0.9, 0.9, 0.2));
    S();
    T(B(6), l(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), F(0.7, 0.7, 0.7, 0.4),);
    S();
    [0, 12, 24,].map(f => T(B(), l(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), F(0.2, 0.5, 0.6, 0.2)));
    S();
    [6, 18,].map(f => T(B(), l(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), F(0.1, 0.4, 0.5, 0.2)));
    S();
    T(B(5), l(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), F(0.3, 0.3, 0.5, 0.5),);
    T(B(5).slice(0, -1), l(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), F(0.6, 0.3, 0.5, 0.5),);
    T(N(x(B(5), l(0, 2).scale(5, 7, 5).skewY(8)), x(B(5), l(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), x(B(), e.scale(2, 8, 3)),), l(-38.9, -11.3, 17), F(0.2, 0.4, 0.5, 0.5),);
    bc(l(-39.1, -0.6, 17).rotate(11), ...tb(15).map(({x:f, z:t}) => [3 * f, 3 * t, 1.2,]),);
    k.map((f, t) => {
      t % 2 || 6 <= t || S();
      T(H, l(f, 1.9, -12));
    });
    qb(4, f => {
      S();
      T(B(6), l(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), F(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [F(0.1, 0.55, 0.45, 0.2), F(0.2, 0.5, 0.5, 0.3), F(0.3, 0.45, 0.55, 0.4),].map((f, t) => {
      S();
      T(B(), l(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && T(B(), l(-29.1, 0.4, 91).scale(2.1, 1, 3), F(0.7, 0.7, 0.7, 0.3));
      1 === t && T(B(), l(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), F(0.6, 0.6, 0.7, 0.3),);
    });
    S();
    T(B(5), e.scale(5, 1.1, 5), F(0.5, 0.3, 0.3, 0.4));
    T(B(5), e.scale(5.5, 0.9, 5.5), F(0.25, 0.25, 0.25, 0.4));
    m(l(0, 1.5, -1).rotate(0, 180));
    qb(4, f => {
      S();
      qb(7, t => T(x(B(8, 1).slice(0, -1), l((2 < f ? 3.5 : 4) * (t / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), F(0.3, 0.3, 0.38),),),);
    });
    S();
    T(K);
    S();
    T(B(15, 1), l(-7.5).rotate(0, 90).scale(3, 2.3, 3), F(0.4, 0.4, 0.4, 0.3));
    T(B(10).slice(0, -1), l(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), F(0.3, 0.8, 0.7, 0.3),);
    T(B(5).slice(0, -1), l(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), F(0.5, 0.5, 0.5, 0.5),);
    m(l(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => T(A, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    T(N(x(B(10), e.scale(6, 2, 6), F(0.1, 0.6, 0.5, 0.3)), x(B(10), e.scale(3.3, 6, 3.3), F(0.1, 0.6, 0.5, 0.5)),),);
    bc(l(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    S();
    T(B(3), l(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), F(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      T(B(6), l(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), F(0.7, 0.7, 0.7, 0.4),);
      T(B(), l(0, 6.2, f + 95).scale(0.5, 11, 0.5), F(0.5, 0.3, 0.3, 0.4));
    });
    S();
    T(N(x(B(28, 1), e.scale(7.5, 1, 7.5), F(0.45, 0.45, 0.45, 0.2)), x(B(), l(0, 0, -5.5).scale(1.5, 3, 2.7), F(0.45, 0.45, 0.45, 0.2),),),);
    T(B(8).slice(0, -1), l(0, 2).scale(3, 1.5, 3).rotate(0, 22), F(0.7, 0.7, 0.7, 0.1),);
    T(B(5).slice(0, -1), l(0, 2).scale(1, 2), F(0.3, 0.3, 0.3, 0.2));
    bc(l(0, 3), ...tb(14).map(({x:f, z:t}) => [5.6 * f, 5.6 * t, 2,]),);
    S();
    [-1, 1,].map(f => T(A, e.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    T(N(x(B(28, 1).slice(0, -1), l(0, 2).scale(7.5, 1, 7.5), F(0.35, 0, 0, 0.3),), x(B().slice(0, -1), l(0, 2).scale(9, 1.1, 2), F(0.3, 0, 0, 0.3)),),);
    T(B(28, 1), e.scale(7.5, 1, 7.5), F(0.45, 0.45, 0.45, 0.2));
    T(B(5).slice(0, -1), l(0, 1).scale(1, 0.2), F(0.3, 0.3, 0.3, 0.2));
    S();
    T(N(x(B(28, 1).slice(0, -1), l(0, 2).scale(7.5, 1, 7.5), F(0.35, 0, 0, 0.3),), x(B().slice(0, -1), l(0, 2, 7).scale(2, 1.1, 9), F(0.3, 0, 0, 0.3),), x(B().slice(0, -1), l(7, 2).scale(9, 1.1, 2), F(0.3, 0, 0, 0.3)),),);
    T(B(28, 1), e.scale(7.5, 1, 7.5), F(0.45, 0.45, 0.45, 0.2));
    T(B(5).slice(0, -1), l(0, 1).scale(1, 0.2), F(0.3, 0.3, 0.3, 0.2));
    S();
    T(N(x(B(28, 1).slice(0, -1), l(0, 2).scale(7.5, 1, 7.5), F(0.35, 0, 0, 0.3),), x(B().slice(0, -1), l(0, 2, -7).scale(2, 1.1, 9), F(0.3, 0, 0, 0.3),), x(B().slice(0, -1), l(7, 2).scale(9, 1.1, 2), F(0.3, 0, 0, 0.3)),),);
    T(B(28, 1), e.scale(7.5, 1, 7.5), F(0.45, 0.45, 0.45, 0.2));
    T(B(5).slice(0, -1), l(0, 1).scale(1, 0.2), F(0.3, 0.3, 0.3, 0.2));
    qb(2, () => {
      S();
      T(N(x(B(30, 1, 1.15, 1), l(0, -3).scale(3.5, 1, 3.5), F(0.7, 0.4, 0.25, 0.7),), x(B(), l(4, -1.2).scale3d(2), F(0.7, 0.4, 0.25, 0.3)), x(B(30, 1, 1.3, 1), l(0, -2.5).scale(2.6, 1, 3), F(0.7, 0.4, 0.25, 0.2),),),);
      m(l(0, -3, 4));
    });
    for (k = 0; 16 > k; ++k) {
      S(), T(B(6, 1).slice(0, -1), e.scale(0.12, 1.2, 0.12), F(0.3, 0.3, 0.5, 0.1)), T(B(9, 1), l(0, 0.8).scale(0.2, 0.3, 0.2), F(0.7, 1, 0.2)), T(B(3), l(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), F(0.2, 0.2, 0.2, 0.1));
    }
    S();
    T(xb(20), l(0, 1).scale3d(0.5), F(1, 0.3, 0.4));
    T(xb(30), e.scale(0.65, 0.8, 0.55), F(1, 0.3, 0.4));
    T(B(), l(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), F(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      T(A, e.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), F(1, 1, 0.8),);
      T(x(N(B(15, 1), x(B(), l(0, 0, 1).scale(2, 2, 0.5)),), e.rotate(-90, 0).scale(0.1, 0.05, 0.1), F(0.3, 0.3, 0.3),), l(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map(f => {
      S();
      T(B(20, 1), l(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), F(1, 0.3, 0.4));
    });
    S();
    T(B(6, 1).slice(0, -1), e.scale(0.77, 1, 0.77), F(1, 0.3, 0.5));
    S();
    T(xb(28, 22, (f, t, D) => {
      var Q = t / 22, O = f * Math.PI * 2 / 28, G = Math.sin(Q ** 0.6 * Math.PI / 2);
      f = Q * Q * Math.sin(f * Math.PI * 0.5) / 4;
      return 21 < t ? {x:D.A = 0, y:-0.5, z:0,} : {x:Math.cos(O) * G, y:Math.cos(Q * Math.PI) - Q - f, z:Math.sin(O) * G + Math.sin(f * Math.PI * 2) / 4,};
    }), e.scale(0.7, 0.7, 0.7), F(1, 1, 1),);
    [-1, 1,].map(f => T(xb(10), l(0.16 * f, 0.4, -0.36).scale3d(0.09)));
    DEV_ROOT_FUNCTION();
  });
});

