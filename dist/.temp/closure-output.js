let aa, ba, ca, da, ha, ia, ja, ka, la, na, oa, pa, qa, sa, ta, ua, va = 0, a = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 14, Da = .1;
const Ga = Math.PI / 180, Ha = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
);
var Ja = 0, Ka = 180, La = 0, Ma = 0, Na = 0;
const Ra = [], d = [], Sa = [], Ta = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], Va = (b, c = Ua, h = 0,) => (h *= 16, c[h++] = b.m11, c[h++] = b.m12, c[h++] = b.m13, c[h++] = b.m14, c[h++] = b.m21, c[h++] = b.m22, c[h++] = b.m23, c[h++] = b.m24, c[h++] = b.m31, c[h++] = b.m32, c[h++] = b.m33, c[h++] = b.m34, c[h++] = b.m41, c[h++] = b.m42, c[h++] = b.m43, c[h] = b.m44, c), Wa = (b = e, c = k,) => (c.m11 = b.m11, c.m12 = b.m12, c.m13 = b.m13, c.m14 = b.m14, c.m21 = b.m21, c.m22 = b.m22, 
c.m23 = b.m23, c.m24 = b.m24, c.m31 = b.m31, c.m32 = b.m32, c.m33 = b.m33, c.m34 = b.m34, c.m41 = b.m41, c.m42 = b.m42, c.m43 = b.m43, c.m44 = b.m44, c), db = (b = 0, c = 0, h = 0, l = 1) => {
  Xa = k.m11 * b + k.m21 * c + k.m31 * h + k.m41 * l;
  ab = k.m12 * b + k.m22 * c + k.m32 * h + k.m42 * l;
  bb = k.m13 * b + k.m23 * c + k.m33 * h + k.m43 * l;
  cb = k.m14 * b + k.m24 * c + k.m34 * h + k.m44 * l;
};
var Xa, ab, bb, cb;
const n = NO_INLINE((b, c, h) => e.translate(b, c, h)), eb = (b, c) => Array.from(Array(b), (h, l) => c(l)), fb = (b, c, h) => (b.m = h, b.o = c, b), gb = (b, c, h = b.o) => (Wa(c), fb(b.map(({x:l, y:m, z:g}) => (db(l, m, g), {x:Xa, y:ab, z:bb,})), h, b.m,)), w = (b, c, h) => b.map(l => gb(l, c, h)), jb = NO_INLINE(b => 0 > b ? -b : b), kb = NO_INLINE((b, c) => c > b ? b : c), lb = NO_INLINE((b, c) => b > c ? b : c), mb = (b, c) => jb(b) > c ? b : 0, nb = (b, c = 0, h = 1) => c > b ? c : b > h ? 
h : b, ob = b => Math.atan2(Math.sin(b * Ga), Math.cos(b * Ga)) / Ga, pb = (b, c, h) => b + (2 * (c = (c - b) % 360) % 360 - c) * nb(h) || 0, qb = (b, c, h) => (0 < h ? 1 > h ? b + (c - b) * h : c : b) || 0, rb = (b, c, h = 0) => (b * b + c * c + h * h) ** .5, sb = (b, c = 0) => eb(b, h => {
  const l = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:.01 > jb(l) ? l : 0 > l ? l - c : l + c,};
}), tb = (b, c, h) => b.map((l, m, {length:g}) => fb([l, c[g - m - 1], c[g - (m + 1) % g - 1], b[(m + 1) % g]], b.o, h,)), y = (b, c, h = 0, l,) => (b = b ? sb(b, l) : Ta, l = gb(b, n(0, 1).scale3d(0 < h ? h : 1)), b = gb(b, n(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...tb(b, l, c), l, b]), ub = (b, c = b, h = (l, m) => (m *= Math.PI / c, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(m), y:Math.cos(m), z:Math.sin(l) * Math.sin(m),})) => {
  const l = [];
  for (let g = 0; b > g; g++) {
    for (let r = 0; c > r; r++) {
      var m = (z, A) => t.push(h(z, A, t));
      const t = fb([], 0, 1);
      l.push(t);
      m(g, r);
      r && m((g + 1) % b, r);
      c - 1 > r && m((g + 1) % b, r + 1 % c);
      m(g, r + 1 % c);
    }
  }
  return l;
}, F = NO_INLINE((b, c, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * c << 8 | 255 * b), vb = b => {
  let c, h = 0, l = 0, m = 0, g = b.at(-1);
  for (c of b) {
    h += (g.y - c.y) * (g.z + c.z), l += (g.z - c.z) * (g.x + c.x), m += (g.x - c.x) * (g.y + c.y), g = c;
  }
  return c = rb(h, l, m), h /= c, l /= c, m /= c, {x:h, y:l, z:m, w:h * g.x + l * g.y + m * g.z,};
}, wb = ({x:b, y:c, z:h}, l) => b * l.x + c * l.y + h * l.z, xb = (b, c) => {
  let h;
  var l, m;
  const g = c.h, r = c.s;
  for (var t = 0; g.length > t; ++t) {
    if (-8e-5 > (h = wb(b, g[t]) - b.w) ? m = c : 8e-5 < h && (l = c), m && l) {
      l = [];
      m = [];
      t = g.at(-1);
      let z = wb(t, b) - b.w;
      for (const A of g) {
        h = wb(A, b) - b.w, 8e-5 > z && m.push(t), -8e-5 < z && l.push(t), (8e-5 < z && -8e-5 > h || -8e-5 > z && 8e-5 < h) && (z /= h - z, t = {x:t.x + (t.x - A.x) * z, y:t.y + (t.y - A.y) * z, z:t.z + (t.z - A.z) * z,}, l.push(t), m.push(t)), t = A, z = h;
      }
      l = 2 < l.length && {h:fb(l, g.o, g.m), s:r, k:c,};
      m = 2 < m.length && {h:fb(m, g.o, g.m), s:r, k:c,};
      break;
    }
  }
  return {x:l, y:m,};
}, yb = (b, c, h = vb(c.h)) => {
  let l, m;
  return b ? ({x:l, y:m} = xb(b, c), l || m || b.h.push(c), l && (b.j = yb(b.j, l, h)), m && (b.l = yb(b.l, m, h))) : b = {x:h.x, y:h.y, z:h.z, w:h.w, h:[c], j:0, l:0,}, b;
}, zb = (b, c, h) => {
  const l = [], m = (g, r) => {
    let {x:t, y:z} = xb(g, r);
    t || z || (0 < h * wb(g, c) ? t = r : z = r);
    t && (g.j ? m(g.j, t) : l.push(t));
    z && g.l && m(g.l, z);
  };
  for (const g of c.h) {
    m(b, g);
  }
  return l;
}, Cb = (b, c) => b && (c(b), Cb(b.j, c), Cb(b.l, c)), Db = b => (Cb(b, c => {
  const h = c.l;
  c.l = c.j;
  c.j = h;
  c.x *= -1;
  c.y *= -1;
  c.z *= -1;
  c.w *= -1;
  for (const l of c.h) {
    l.s = !l.s;
  }
}), b), Eb = b => b.length ? b.reduce((c, h) => yb(c, {h, s:0, k:0,}), 0) : b, Fb = (...b) => b.reduce((c, h) => {
  const l = [];
  if (c = Eb(c), h) {
    h = Eb(h);
    Cb(c, r => r.h = zb(h, r, 1));
    Cb(h, r => l.push([r, zb(c, r, -1)]));
    var m, g;
    for ([m, g] of l) {
      for (const r of g) {
        yb(c, r, m);
      }
    }
  }
  return c;
}), M = (b, ...c) => {
  const h = g => {
    let r;
    return g.k && ((r = m.get(g.k)) ? (l.delete(r), g = h(g.k)) : m.set(g.k, g)), g;
  }, l = new Map(), m = new Map();
  return b = Db(Fb(Db(Eb(b)), ...c)), Cb(b, g => {
    for (const r of g.h) {
      l.set(h(r), r.s);
    }
  }), Array.from(l, ([{h:g}, r]) => {
    const t = g.map(({x:z, y:A, z:f}) => ({x:z, y:A, z:f,}));
    return fb(r ? t.reverse() : t, g.o, g.m);
  });
}, Gb = NO_INLINE(b => 1 - Math.exp(-va * b)), P = NO_INLINE((b, c, h) => qb(b, c, Gb(h))), Hb = b => setTimeout(() => {
  h4.innerHTML += ".";
  b();
}, 5), Ib = NO_INLINE(b => {
  let c = 0;
  const h = (g, r, t, z, A, f, p, G, N, O, K, C, J, H, V, T, x, I, q, B, u, v = c++,) => Hb(() => {
    let L = 0;
    O = 4 * O ** 2;
    u = u.split("+");
    [5513, 4562, 3891].map(D => {
      var E;
      let S, W, ea, X = 0, ma = 0;
      const ra = [], hb = Ea => Math.sin(Ea * Math.PI * 2), Za = NO_INLINE(Ea => {
        let Oa, ib, Z = 0, Fa = 0;
        const Ya = new Int32Array(G + N + O), Tb = 2 > v ? fa => fa % 1 * 2 - 1 : hb, Ub = 2 > v ? 1 > v ? fa => .5 > fa % 1 ? 1 : -1 : fa => 2 > (fa = fa % 1 * 4) ? fa - 1 : 3 - fa : hb;
        for (let fa = 0, Ab = 0; G + N + O > fa; ++fa, ++Ab) {
          let Pa = 1;
          G > fa ? Pa = fa / G : G + N > fa || (Pa = (1 - (Pa = (fa - G - N) / O)) * 3 ** (-K / 16 * Pa));
          0 > Ab || (Ab -= 4 * D, Oa = 0.00396 * 2 ** ((Ea + r - 256) / 12), ib = 0.00396 * 2 ** ((Ea + A - 256) / 12) * (v ? 1 : 1.0072));
          Ya[fa] = 80 * (Tb(Z += Oa * Pa ** (t / 32)) * g + Ub(Fa += ib * Pa ** (f / 32)) * z + (p && p * (2 * Math.random() - 1))) * Pa | 0;
        }
        return Ya;
      }), Qa = new Int32Array(768 * D), Vb = 2 ** (C - 9) / D, Wb = Math.PI * 2 ** (x - 8) / D, Bb = q * D & -2;
      for (let Ea = 0; 11 >= Ea; ++Ea) {
        for (let Oa = 0, ib = +"000001234556112341234556011111111112011111111112000001111112"[12 * v + Ea]; 32 > Oa; ++Oa) {
          var Ob = (32 * Ea + Oa) * D;
          for (let Z = 0; 4 > Z; ++Z) {
            if (S = 0, ib && (S = u[ib - 1].charCodeAt(Oa + 32 * Z) - 40, S += 0 < S ? 106 : 0), S) {
              var $a = ra[S] || (ra[S] = Za(S));
              for (let Fa = 0, Ya = 2 * Ob; $a.length > Fa; ++Fa, Ya += 2) {
                Qa[Ya] += $a[Fa];
              }
            }
          }
          for (let Z, Fa = 0; D > Fa; ++Fa) {
            $a = 0;
            var Ia = (((Z = Qa[E = 2 * (Ob + Fa)]) || ea) && (W = 0.00308 * J, 1 !== v && 4 !== v || (W *= Math.sin(Vb * E * Math.PI * 2) * B / 512 + .5), X += (W = 1.5 * Math.sin(W)) * ma, ma += W * (Ia = (1 - H / 255) * (Z - ma) - X), Z = 4 === v ? ma : 3 === v ? Ia : X, v || (Z = (1 > (Z *= 22e-5) ? -1 < Z ? Math.sin(Z / 4 * Math.PI * 2) : -1 : 1) / 22e-5), Z *= V / 32, ea = 1e-5 < Z * Z, $a = Z * (1 - (Ia = Math.sin(Wb * E) * T / 512 + .5)), Z *= Ia), Bb > E || ($a += Qa[1 + E - Bb] * I / 255, 
            Z += Qa[E - Bb] * I / 255), L + E >> 1);
            l[Ia] += (Qa[E] = $a) / 65536;
            m[Ia] += (Qa[++E] = Z) / 65536;
          }
        }
      }
      L += 768 * D;
    });
    --c || Hb(b);
  }), l = (ca = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), m = ca.getChannelData(1);
  h(69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U+(059<59<A9<AE<AEHAEHMEHMQMQTY(Y+(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y+(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^+Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]+QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",);
  h(100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5+-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5+,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5+*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6+5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5+5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",);
  h(255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, "9(((9(((9(((9(((9(((9(((9(((9+9(((Q(((Q(((Q",);
  h(0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, "9(9(9(9(9(9(9(999(9(9(9(999(9(9+9(9(9(9(9(999(9(((((Q",);
  h(221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, "((((Q(((((((Q(((((((Q(((((((Q+Q((Q((Q((Q((Q((Q((((Q",);
}), Jb = (b, c, h, l) => new DOMMatrix([h, 0, 0, 0, 0, l, 0, 0, 0, 0, (c + b) / (b - c), -1, 0, 0, 2 * c * b / (b - c), 0,]);
let Kb = () => {
  let b, c, h, l, m, g, r, t, z, A, f, p, G, N, O, K, C = !0;
  const J = [], H = () => {
    b4.innerHTML = "Music: " + C;
    K && (ba || !C ? K.disconnect() : K.connect(O.destination));
  }, V = () => {
    const q = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ja = Jb(.3, 181, q, 1.732051);
    ia = [Jb(.3, 55, q, 1.732051), Jb(55, 181, q, 1.732051)];
    l = t = void 0;
    J.length = da = N = p = G = xa = ya = 0;
    document.hidden && T(!0);
  }, T = q => {
    if (ba !== q && (ba = q, V(), hB.className = q ? "l m" : "l", H(), q)) {
      try {
        document.exitFullscreen().catch(() => !1), document.exitPointerLock();
      } catch {
      }
    }
  }, x = q => {
    try {
      O || ((K = (O = new AudioContext()).createBufferSource()).buffer = ca, K.loop = !0, K.start()), hB.requestFullscreen().catch(() => !1);
    } catch {
    }
    T(!1);
    ha = q;
  }, I = (q, B) => q.buttons[B]?.pressed || 0 < q.buttons[B]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  onclick = q => {
    if (!ba && (q.target === hC && (da = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  b5.onclick = () => T(!0);
  b2.onclick = () => x(1);
  b1.onclick = () => x();
  b4.onclick = () => {
    C = !C;
    H();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onkeyup = onkeydown = q => {
    let B;
    q.repeat || (B = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[q.code], (J[B] = !!q.type[5]) && (0 === B && (da = 1), 1 === B) && T(!0));
  };
  onmousemove = q => {
    ha && (Ka += .1 * q.movementX || 0, Ja += .1 * q.movementY || 0);
  };
  hC.ontouchstart = q => {
    if (!ba) {
      var B, u, v;
      for ({identifier:B, pageX:u, pageY:v} of q.changedTouches) {
        ha && u > hC.clientWidth / 2 ? void 0 === t && (z = 0, g = u, r = v, t = B, f = Ja, A = Ka) : void 0 === l && (m = 0, c = u, h = v, l = B);
      }
      b = wa;
    }
  };
  hC.ontouchmove = q => {
    var B, u, v, L;
    if (!ba) {
      var D, E, S;
      for ({identifier:D, pageX:E, pageY:S} of q.changedTouches) {
        t === D && (z = 1, Ja = f + (S - r) / 2, Ka = A + (E - g) / 2), l === D && (B = jb(D = (c - E) / 19), v = jb(u = (h - S) / 19), (L = .3 < lb(B, v)) && (m = 1), p = nb(D, -1) * (L && .2 < B), G = nb(u, -1) * (L && .2 < v), 2 < B && (c = 19 * (0 > D ? -1 : 1) + E), 2 < v) && (h = 19 * (0 > u ? -1 : 1) + S);
      }
    }
  };
  hC.ontouchend = q => {
    let B;
    document.activeElement === hB && q.preventDefault();
    for (const u of q.changedTouches) {
      u.identifier === t ? (t = void 0, z || (B = 1), z = 0) : u.identifier === l ? (l = void 0, G = p = 0, m || (B = 1), m = 0) : B = 1;
    }
    q.target === hC && B && b && .02 < (q = wa - b) && .7 > q && (da = 1);
  };
  Kb = () => {
    xa = G + (J[4] ? 1 : 0) - (J[5] ? 1 : 0);
    ya = p + (J[2] ? 1 : 0) - (J[3] ? 1 : 0);
    let q = navigator.getGamepads()[0];
    q && (ha && (Ja += 80 * va * mb(q.axes[3], .3), Ka += 80 * va * mb(q.axes[2], .3)), xa += I(q, 12) - I(q, 13) - mb(q.axes[1], .2), ya += I(q, 14) - I(q, 15) - mb(q.axes[0], .2), I(q, 9) && T(!0), (q = I(q, 3) || I(q, 2) || I(q, 1) || I(q, 0)) && !N && (da = 1), N = q);
  };
  document.onpointerlockchange = () => {
    ha = !!document.pointerLockElement;
  };
  document.onvisibilitychange = onblur = onresize = V;
  T(!0);
};
const Lb = (b, c) => {
  1 / 0 > Da && (Da = a + c, h4.innerHTML = b);
}, Mb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ka = Sa.reduce((b, c) => c.i + b, 0)] + " / XIII";
}, Nb = () => {
  localStorage["Dante-22"] = JSON.stringify([d.map(b => b.i), Sa.map(b => b.i), Ca, oa, a,]);
}, Q = () => {
  Ra.push({p:pa = new DOMMatrix(), h:qa = [],});
}, R = (b, c = e, h) => qa.push(w(b, c, h)), Qb = (b, ...c) => {
  let h, l, m, g, r = 0, t = 0, z = 1, A = -1;
  const f = () => {
    if (f.i) {
      Wa(Ra[35].p).translateSelf(J % 4 * 1.2 - 1.7 + Math.sin(a + J) / 7, -2, 1.7 * (J >> 2) - 5.5 + jb(J % 4 - 2) + Math.cos(a / 1.5 + J) / 6,);
    } else {
      let T, x = 1, I = 1 / 0;
      for (let L = 0; c.length > L; L++) {
        var H = c[L], V = rb(G - H[0], N - H[1]);
        x = kb(x, V / H[2]);
        0 > (V -= H[2]) ? T = 1 : I > V && (I = V, p = H);
      }
      let q, B, u, v;
      T || (q = G - p[0], B = N - p[1], u = rb(q, B), v = Math.atan2(-B, q), z && (g = nb(g / (1 + Math.random())), t = (Math.random() - .5) * Math.PI / 2), v += t, A = -Math.cos(v), r = Math.sin(v), .1 < u && (u = kb(u, p[2]) / u, G = q * u + p[0], N = B * u + p[1]));
      z = T;
      g = P(g, 3 + 6 * (1 - x), 3 + x);
      O = P(O, G = P(G, G + A, g), g);
      K = P(K, N = P(N, N + r, g), g);
      h = pb(h, Math.atan2(O - l, K - m) / Ga - 180, Gb(3));
      Wa(C).multiplySelf(b).translateSelf(l = O, 0, m = K).rotateSelf(0, h, 7 * Math.sin(1.7 * a),);
      1.6 > (db(), rb(La - Xa, Ma - ab, Na - bb)) && (f.i = 1, Lb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ka] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Mb(), Nb());
    }
    Va(k, Pb, 28 + J);
  };
  let p = c[0], [G, N] = p, [O, K] = p;
  const C = pa, J = Sa.length;
  Sa.push(f);
}, U = (b, c = 0, h = 0) => {
  const l = Wa(e, Ra[++sa].p);
  return l.m41 = b, l.m42 = c, l.m43 = h, l;
}, Xb = NO_INLINE(() => {
  let b, c, h, l, m, g, r, t, z, A, f, p, G, N, O, K, C = 0, J = 1, H = 2, V = 15;
  const T = () => Wa((H ? d[Ca] : Ra[28 !== C ? C : 0]).p), x = u => {
    1 < H ? (Wa(d[Ca].p).multiplySelf(d[Ca].q), db(0, .9 < na ? 15 : 1, -2.4)) : (T(), db(N, O, K));
    u && (m = (Xa - La) / va, g = (bb - Na) / va);
    La = Xa;
    Ma = ab;
    Na = bb;
  }, I = NO_INLINE((u, v, L) => {
    T().invertSelf();
    db(u, v, L, 0);
    N += Xa;
    O += v;
    K += bb;
    x();
  }), q = NO_INLINE(() => {
    var u = 0, v = 0, L = 0;
    let D = 0, E = 0, S = 0;
    var W = -1;
    for (let ma = 0; 36 > ma; ++ma) {
      for (let ra = 96, hb = 512 * ma; 416 > ra; ra += 4) {
        for (let Za = 0; 2 > Za; ++Za) {
          var ea = Rb[hb + ra + Za], X = Rb[hb + ra + Za + 2];
          ea > D && (D = ea);
          ea + X && (0 > W || W === ma) && (W = ma, X === A ? ++u : v && v !== X || (v = X, ++L));
        }
      }
    }
    A = 0 > W ? 0 : L > 2 * u ? v : A;
    for (let ma = 36, ra = 18432; 128 > ma; ++ma) {
      W = L = v = u = 0;
      for (ea = 0; 128 > ea; ++ea) {
        X = Rb[ra++], 64 > ea ? X > u && (u = X) : X > v && (v = X), X = Rb[ra++], 64 < ea ? X > u && (u = X) : X > v && (v = X), (X = Rb[ra++]) > L && (L = X), (X = Rb[ra++]) > W && (W = X);
      }
      (v -= u) * v > E * E && (E = v);
      (W -= L) * W > S * S && (S = W);
    }
    t = nb(1 - .01 * lb(jb(E *= .7), jb(S)), .3);
    I(E / 255, D / 255, S / 255);
  }), B = (u, v, L, D) => qb(u, v, J || (nb(jb(v - u) ** .5 - L) + 1 / 7) * Gb(1.5 * D));
  ta = () => {
    var u, v;
    x(A);
    Sb.r9r(0, 0, 128, 128, 6408, 5121, Rb);
    q();
    H || A !== C ? (C = A, T().invertSelf(), db(La, Ma, Na), N = Xa, O = ab, K = bb, H &&= A ? 0 : 1) : (-20 > La || 109 > Na ? -25 : -9) > Ma && (H = 2);
    1 === A && (d[15].i = -15 > La && 0 > Na ? 1 : 0);
    l = P(l, ua * (30 < A && 35 > A), 2);
    f = B(f, La, .5, 1);
    p = B(p, z = qb(P(z, Ma, 2), Ma, H || 8 * jb(z - Ma)), 2, 1,);
    G = B(G, Na, .5, 1);
    ha ? (u = H + Gb(18), za = qb(za, La, u), Ba = qb(Ba, Na, u), Aa = qb(Aa, 1.6 + z, u), Ka = ob(Ka)) : (za = B(za, f, 1, 2 + l), Ba = B(Ba, G + -18 + 5 * l, 1, 2 + l), Aa = B(Aa, lb(p + nb((-60 - Na) / 8, 0, 20) + 13 + 9 * l, 6), 4, 2), u = kb(-6, -jb(G - Ba)), Ka = pb(Ka, 90 - ob(Math.atan2(u, v = f - za) / Ga), J + Gb(10),), Ja = pb(Ja, 90 - Math.atan2(rb(u, v), Aa - p) / Ga, J + Gb(10),));
    Ja = nb(Ja, -87, 87);
    J = 0;
    u = nb(xa, -1);
    v = nb(ya, -1);
    var L = mb(rb(u, v) ** .5, .1);
    var D = Math.atan2(u, v);
    L && (b = 90 - D / Ga);
    h = P(h, L, 10);
    U(La, .06 * t * h * Math.cos(18.2 * a) + z, Na).rotateSelf(0, c = pb(c, b, Gb(8)),);
    for (let S = 0; 2 > S; ++S) {
      var E = 9.1 * a - Math.PI * S;
      Wa(Ra[53].p, U(0)).translateSelf(0, h * nb(.45 * Math.sin(E - Math.PI / 2)),).rotateSelf(h * Math.sin(E) * .25 / Ga, 0);
    }
    V = A ? 5 : P(V, H ? 13 : 19 - 2 * kb(0, Ma + 10), 2.2);
    m = A || H ? 0 : P(m, 0, 3);
    g = A || H ? 0 : P(g, 0, 3);
    u = (r = H ? 0 : P(r, A ? 7 * nb(2 * L) * t : 0, A ? 9 : 1)) * L * jb(u) * Math.sin(D);
    v = r * L * jb(v) * Math.cos(D);
    I(va * (m + (Math.cos(D = ha ? (180 + Ka) * Ga : 0) * v - Math.sin(D) * u)), -va * V, va * (g + (Math.sin(D) * v + Math.cos(D) * u)),);
  };
});
let Yb = () => {
  let b, c, h;
  const l = (m, g) => (m = nb(m), qb(m, 1 - m, g));
  (Yb = () => {
    var m = (t, z, A) => U(t + Math.sin(a + 2) / 5, z + Math.sin(.8 * a) / 5, A).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),);
    sa = 1;
    h = qb(P(h, 0, 1), ob(h + 60 * va), d[2].t - d[3].g);
    ua = l(d[13].t, d[8].t);
    b = qb(P(b, 0, 5), ob(b + 56 * va), ua);
    c = qb(P(c, 0, 4), ob(c + 48 * va), ua);
    U(0, 270 * (d[1].t - 1) + (2 + 5 * Math.cos(1.5 * a)) * (1 - d[10].t));
    var g = kb(1 - d[11].g, d[10].g);
    U(g * Math.sin(.6 * a + 1.2) * 12, 0, 35);
    U(g * Math.sin(.6 * a - 1.2) * 8.2, 0, 55);
    U(g * Math.sin(.6 * a) * 12, 0, 45);
    U(9.8 * (1 - g));
    g = nb(1 - 5 * g) * l(d[11].t, d[2].t);
    U(0, g * Math.sin(1.35 * a) * 4);
    U(0, 0, g * Math.sin(.9 * a) * 8);
    U(0, -6.5 * d[11].g);
    g = l(d[4].g, d[3].g);
    U(0, g * Math.sin(a) * 5 + 3.5 * (1 - lb(d[3].t, d[4].t)));
    U(0, g * Math.sin(a + 3) * 6, g * Math.sin(.6 * a + 1) * 6,);
    U(0, -7.3 * d[4].g);
    g = l(d[6].t, d[7].t);
    U(0, -2, 10 - 8.5 * g * jb(Math.sin(1.1 * a)));
    U(0, -2, 10 - 8.5 * g * jb(Math.sin(2.1 * a)));
    U(0, -2, 10 - 8.5 * lb(g * jb(Math.sin(1.5 * a)), (1 - d[6].t) * (1 - g)),);
    var r = l(d[5].g, d[13].g);
    for (g = 0; 4 > g; g++) {
      U((2 < g ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * g) * (3 + g / 3) + .7, 115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & g ? -1 : 1) + lb(.05, r) * Math.cos(1.3 * a + 7 * g) * (4 - 2 * (1 - g / 3)),);
    }
    g = l(d[8].g, d[9].g);
    for (let t = 0; 3 > t; ++t) {
      U(0, g * Math.sin(1.5 * a + 1.5 * t) * 4 + (t ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)),);
    }
    g = l(l((d[9].t + d[9].g) / 2, d[8].g), (d[12].t + d[12].g) / 2);
    U(0, 16 * g, 95 + 8.5 * nb(2 * g - 1));
    U(0, -4.7 * d[0].t, -15);
    U(0, -4.7 * d[10].t, 15);
    U(-99.7, -1.9 - 5.5 * d[3].t, 63.5);
    U(-100, .6 - 5.8 * d[13].t, 96.5);
    U(-75, 3 * (1 - d[2].g) * (1 - d[3].t), 55).rotateSelf(180 * (1 - d[2].g) + h, 0);
    U(2.5 * (1 - r) - 139.7, -3 * (1 - d[5].t) - r * Math.sin(.8 * a) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 + 3 * r), 0);
    U(-2 * Math.sin(a)).rotateSelf(25 * Math.sin(a));
    U(-81, .6, 106).rotateSelf(0, 40 + b);
    U(-65.8, .8, 106).rotateSelf(0, c);
    U(-50.7, .8, 106).rotateSelf(0, 180 - c);
    U(-50.7, .8, 91).rotateSelf(0, 270 + c);
    m(-12, 4.2, 40 * na - 66);
    m(-123, 1.4, 55 - 65 * oa);
    for (g = 0; 16 > g; ++g) {
      m = d[g], r = m.t = P(m.t, m.i, 4), m.g = P(m.g, m.i, 1), Wa(Wa(m.p).multiplySelf(m.q), U(0)).rotateSelf(50 * r - 25, 0).translateSelf(0, 1).m44 = r, da && 3 > (db(), rb(La - Xa, Ma - ab, Na - bb)) && (m.i ? .7 < r && (m.i = 0, Ca = g, Lb("* click *", 1), Nb()) : .3 > r && (m.i = 1, Ca = g, Lb("* click *", 1), Nb())), 14 === g && m.i && .8 < r && (m.i = 0, 13 > ka ? Lb("Not leaving now, there are souls to catch!", 3) : la || (la = 1, Lb("Well done. They will be punished.<br>Thanks for playing", 
      1 / 0))), 13 > g && Sa[g]();
    }
    ta();
    for (m = 0; 28 > m; ++m) {
      Va(Ra[28 + m].p, Pb, m);
    }
    for (let t, z = 0, A = 656; 26 > z; ++z, ++A) {
      t = Ra[2 + z].p, Pb[A++] = t.m41, Pb[A++] = t.m42, Pb[A++] = t.m43;
    }
  })();
};
const e = new DOMMatrix(), k = new DOMMatrix(), Ua = new Float32Array(16), Rb = new Uint8Array(65536), Pb = (document.body.innerHTML += '<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle."</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}', 
new Float32Array(760)), Y = hC.getContext("webgl2", {powerPreference:"high-performance",}), Sb = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const b in Sb) {
  [Y, Sb].map(c => c[b[0] + [...b].reduce((h, l, m) => (h * m + l.charCodeAt(0)) % 434, 0).toString(36)] = c[b]);
}
Hb(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      const l = [], m = (C, J, H) => {
        ba ? 1100 < hC.width && C.d97(4, Ra[55].v - Ra[53].u, 5123, 2 * Ra[53].u) : (C.das(4, Ra[J].v - Ra[J].u, 5123, 2 * Ra[J].u, Sa.length), C.d97(4, Ra[H ? 53 : 56].u - 3, 5123, 6));
      }, g = (C, J, H = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",) => {
        const V = {}, T = (I, q,) => (q = C.c6x(q), C.s3c(q, I), C.c6a(q), q), x = C.c1h();
        return C.abz(x, T(H, 35633)), C.abz(x, T(J, 35632)), C.l8l(x), I => I ? V[I] || (V[I] = C.gan(x, I)) : C.u7y(x);
      }, r = C => {
        var J = (C - (aa || C)) / 1e3;
        wa += J;
        a += va = ba ? 0 : kb(.055, J);
        aa = C;
        requestAnimationFrame(r);
        0 < va && (Kb(), oa = P(oa, d[15].g, .2 + .3 * jb(2 * d[15].g - 1)), na = la ? (ha = 0, P(na, -9, .015)) : P(na, nb(a / 3), 1), Da && a > Da && (Da = 0, h4.innerHTML = ""), Yb(), Sb.u3a(G("j"), Pb), Sb.cbf(!0, !0, !0, !0), Sb.c4s(16640), Sb.cbf(!0, !1, !0, !1), Sb.uae(G("b"), !1, Va(Wa().rotateSelf(0, 180).invertSelf().translateSelf(-La, -Ma, .3 - Na)),), m(Sb, 56, 1), Sb.c4s(256), Sb.cbf(!1, !0, !1, !0), Sb.uae(G("b"), !1, Va(Wa().translateSelf(-La, -Ma, -Na - .3))), m(Sb, 56, 1), Sb.f1s(), 
        da = 0);
        p();
        Y.u3a(p("j"), Pb);
        Y.b6o(36160, f);
        Y.v5y(0, 0, 2048, 2048);
        Y.ubh(p("g"), 4);
        Y.ubh(p("h"), 4);
        Y.uae(p("a"), !1, Va(e));
        C = za;
        J = Aa;
        let H = Ba;
        ba ? (Wa().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), Va(k, Pb, 25), Va(k, Pb, 26), Va(k, Pb, 27), Wa(ja).invertSelf(), db(3.6, 3.5), C = Xa, J = ab, H = 5, Wa(e, z).rotateSelf(20, 0).translateSelf(-C, -J, -H).rotateSelf(0, 99)) : Wa(e, z).rotateSelf(-Ja, -Ka).invertSelf().translateSelf(-C, -J, -H,);
        O(54.7);
        m(Y, 57, ha);
        K(126);
        m(Y, 57, ha);
        Y.b6o(36160, null);
        Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
        Y.c4s(16640);
        Y.ubh(p("g"), 0);
        Y.ubh(p("h"), 1);
        Y.ubu(p("k"), C, J, H);
        Y.uae(p("a"), !1, Va(ja));
        Y.uae(p("b"), !1, Va(z));
        Y.uae(p("i"), !1, A);
        m(Y, 57, ha);
        N();
        Y.uae(N("b"), !1, Va(z.invertSelf()));
        Y.ubu(N("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, wa);
        Y.d97(4, 3, 5123, 0);
      }, t = new DOMMatrix(), z = new DOMMatrix(), A = new Float32Array(32), f = Y.c5w(), p = g(Y, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), G = g(Sb, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), N = g(Y, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [O, K] = eb(2, C => {
        const J = Y.c25();
        return Y.a4v(33984 + C), Y.b9j(3553, J), Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Y.t2z(3553, 10241, 9729), Y.t2z(3553, 10240, 9729), Y.t2z(3553, 34893, 515), Y.t2z(3553, 34892, 34894), Y.t2z(3553, 10243, 33071), Y.t2z(3553, 10242, 33071), H => {
          let V = 0, T = 0, x = 0, I = 1 / 0, q = 1 / 0, B = 1 / 0, u = -1 / 0, v = -1 / 0, L = -1 / 0;
          Y.fas(36160, 36096, 3553, J, 0);
          Y.c4s(256);
          Wa().scale3dSelf(H *= 1.1).multiplySelf(Wa(ia[C], t).multiplySelf(z).invertSelf(),);
          for (let D = 0, E = 0; 8 > D; ++D) {
            db(4 & D ? 1 : -1, 2 & D ? 1 : -1, 1 & D ? 1 : -1), V -= l[E++] = (0 | Xa) / (H * cb), T -= l[E++] = (0 | ab) / (H * cb), x -= l[E++] = (0 | bb) / (H * cb);
          }
          Wa().rotateSelf(298, 139).translateSelf(V / 8, T / 8, x / 8);
          for (let D = 0, E = 0; 8 > D; ++D) {
            db(l[E++], l[E++], l[E++]), u = lb(u, Xa), v = lb(v, ab), L = lb(L, bb), I = kb(I, Xa), q = kb(q, ab), B = kb(B, bb);
          }
          x = 10 + C;
          B *= 0 > B ? x : 1 / x;
          L *= 0 < L ? x : 1 / x;
          Y.uae(p("b"), !1, Va(Wa(e, t).scaleSelf(2 / (u - I), 2 / (v - q), 2 / (B - L),).translateSelf(-(u + I) / 2, -(v + q) / 2, (B + L) / 2).multiplySelf(k,), A, C,), 16 * C, 16,);
        };
      });
      Y.a4v(33986);
      Y.b9j(3553, Y.c25());
      Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, h);
      Y.t2z(3553, 10241, 9987);
      Y.t2z(3553, 10240, 9729);
      Y.gbn(3553);
      Y.b6o(36160, f);
      Y.d45([0]);
      Y.r9l(0);
      p();
      Y.ubh(p("q"), 2);
      N();
      Y.ubh(N("q"), 2);
      Y.c5t(0, 0, 0, 1);
      Y.d4n(515);
      Y.e8z(2929);
      Y.e8z(2884);
      Sb.e8z(2929);
      Sb.e8z(2884);
      Sb.v5y(0, 0, 128, 128);
      G();
      Sb.uae(G("a"), !1, Va(Jb(1e-4, 2, 1.2, .4)));
      Xb();
      Kb();
      requestAnimationFrame(r);
    }
  }, h = new Image();
  h.onload = c;
  h.src = Ha;
  Ib(() => {
    Hb(() => {
      let f = 0;
      const p = [], G = [], N = [], O = [], K = new Int32Array(8), C = new Map(), J = new Int32Array(K.buffer, 0, 5), H = new Float32Array(K.buffer);
      Ra.map((x, I) => {
        let q;
        const B = D => {
          let {x:E, y:S, z:W} = q[D], ea = (H[0] = E, H[1] = S, H[2] = W, C.get(D = "" + (q.m ? J : K)));
          return void 0 !== ea ? (O[E = 3 * ea] = (O[E++] + K[5]) / 2, O[E] = (O[E++] + K[6]) / 2, O[E] = (O[E] + K[7]) / 2) : (C.set(D, ea = C.size), G.push(E, S, W, H[3]), N.push(K[4]), O.push(K[5], K[6], K[7])), ea;
        };
        H[3] = 55 < I ? -28 : I;
        for (const D of x.h) {
          for (q of D) {
            var {x:u, y:v, z:L} = vb(q);
            K[4] = 0 | q.o;
            K[5] = 32767 * u;
            K[6] = 32767 * v;
            K[7] = 32767 * L;
            for (let E = 2, S = B(0), W = B(1); q.length > E; ++E) {
              p.push(S, W, W = B(E));
            }
          }
        }
        x.h = 0;
        x.u = f;
        x.v = f = p.length;
      });
      [Y, Sb].map(x => {
        x.b11(34963, x.c1b());
        x.b2v(34963, new Uint16Array(p), 35044);
        x.b11(34962, x.c1b());
        x.b2v(34962, new Float32Array(G), 35044);
        x.v7s(0, 4, 5126, !1, 0, 0);
        x.b11(34962, x.c1b());
        x.b2v(34962, new Int16Array(O), 35044);
        x.v7s(1, 3, 5122, !0, 0, 0);
        x.b11(34962, x.c1b());
        x.b2v(34962, new Uint32Array(N), 35044);
        x.v7s(2, 4, 5121, !0, 0, 0);
        x.e3x(0);
        x.e3x(1);
        x.e3x(2);
      });
      let V = [], T = [];
      try {
        const [x, I, q, B, u] = JSON.parse(localStorage["Dante-22"]);
        V = x;
        T = I;
        Ca = q;
        oa = B;
        a = u;
      } catch {
      }
      d.map((x, I) => x.t = x.g = x.i = 14 !== I && V[I] ? 1 : 0);
      Sa.map((x, I) => x.i = T[I] ? 1 : 0);
      Mb();
      na = ka || 14 !== Ca ? 1 : 0;
      Hb(c);
    });
    var l = [-110, -100, -92, -82, -106, -97, -88];
    const m = f => n(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f,), g = f => {
      d.push({p:pa, q:f,});
      R(y(5), f.translate(.2).rotate(90, 90).scale(.4, .1, .5), F(.4, .5, .5));
      R(y(5), f.translate(-.2).rotate(90, 90).scale(.4, .1, .5), F(.4, .5, .5));
      R(y().slice(0, -1), f.translate(0, -.4).scale(.5, .1, .5), F(.5, .5, .4));
    }, r = f => M(w(y().slice(0, -1), n(0, -f / 2).scale(6, f - 1, 2.2)), w(y().slice(0, -1), n(0, -f / 2 - 4).scale(4, f - 5, 4)), w(y(28, 1), n(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), t = M(w(y(), n(0, -.5, 1).scale(1.15, 1.2, 6.5), F(.25, .25, .35, .3)), M(w(y(3), n(0, 0, -5.5).scale(3, 2), F(.6, .3, .4, .3)), w(y(), n(0, 0, -3.65).scale(2.5, 3), F(.6, .3, .4, .3)),), ...[-1, 1].map(f => w(y(), n(1.2 * f, -.5, 1).scale(.14, .3, 6.5), F(.7, .2, 0, .3))),), z = [w(y(), n(0, -3).scale(11, 
    1.4, 3), F(.9, .9, .9, .2)), w(y(), n(0, -2.2).scale(7.7, .5, 4), F(.5, .5, .5, .2)), eb(12, f => w(y(), n(f - 5.5, 4.4).scale(.1, .1, 2), F(.6, .5, .3, .2))).flat(), w(M(w(y(6), e.rotate(90).scale(6, 8, 6)), w(y(4, 0, .01), n(0, 6).scale(12, 2, .75).rotate(0, 45)), w(y(6), e.rotate(90).scale(5, 12, 5)), ...[-5, 0, 5].map(f => w(y(5), n(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),), e, F(.3, .6, .6, .3),),].flat(), A = eb(11, f => tb(gb(sb(16), m(f), F(1, 1, .8, .2)).reverse(), gb(sb(16), 
    m(f + 1), F(1, 1, .8, .2)), 1,)).flat();
    Q();
    R([Ta.slice(1)], n(-2).scale3d(3).rotate(90, 0));
    Q();
    g(n(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, p) => {
      R(y(), n(0, 0, p ? 22 : -23).scale(3, 1, 8), F(.9, .9, .9, .2));
      R(y(), n(0, 6.3, f).scale(4, .3, 1), F(.3, .3, .3, .4));
      R(y().slice(0, -1), n(0, 1, f).scale(3, .2, .35), F(.5, .5, .5, .3));
    });
    R(y(), n(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), F(.8, .8, .8, .2));
    R(y(), n(3, 1.5, -20).scale(.5, 2, 5), F(.7, .7, .7, .2));
    R(y(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), F(.6, .3, .3, .4));
    R(y(), n(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), F(.75, .75, .75, .2));
    R(M(Fb(M(w(y(6, 0, 0, .3), n(0, -.92).scale(13, 2, 13), F(.8, .8, .8, .2)), w(y(), e.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), F(.5, .5, .5, .5)),), w(y(), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), F(.8, .2, .2, .5),), w(y(6), n(0, -8).scale(9, 8, 7), F(.2, .1, .4, .5)), w(y(6, 0, 0, .3), n(8, -4, -4).scale(14, 2, 13), F(.7, .7, .7, .2)),), w(y(6), n(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), F(.5, .5, .5, .5)), w(y(5, 0, 1.5), n(0, 1).scale(4.5, 
    .3, 4.5), F(.7, .5, .9, .2)), w(y(5), e.scale(5, 30, 5), F(.4, .2, .6, .5)),),);
    g(n(15.8, -2, 3.8));
    R(y(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), F(.9, .9, .9, .2));
    g(n(-55, -1.1, 46).rotate(0, 90));
    R(y(7), n(-57, -2.6, 46).scale(4, 1, 4), F(.8, .8, .8, .3));
    R(y(6), n(-61.3, -2.4, 49).scale(3, 1, 5), F(.4, .6, .6, .3));
    R(z, n(-53, 0, 55));
    R(y(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), F(.7, .7, .7, .2));
    R(y(3, 0, -.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), F(.8, .8, .8, .2),);
    R(M(w(y(), n(-100, 1, 63).scale(7.5, 4), F(.5, .5, .5, .4)), w(y(), n(-100, 0, 63).scale(2, 2, 4), F(.5, .5, .5, .4)), w(y(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), F(.5, .5, .5, .4)),),);
    R(M(Fb(w(y(), n(-100, -2.6, 70).scale(3, 1.1, 7), F(.8, .8, .8, .2)), w(y(), n(-100, -2.4, 55).scale(8, .9, 8), F(.8, .8, .8, .2)), w(y(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), F(.8, .8, .8, .2)), w(y(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), F(.6, .6, .6, .3)), w(y(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), F(.8, .8, .8, .2)), w(y(), n(-100, .42, 92).scale(3, 1.1, 4.1), F(.8, .8, .8, .2)), w(y(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), F(.8, .8, 
    .8, .2)),), w(y(8), n(-100, -1, 55).scale(7, .9, 7), F(.3, .3, .3, .4)), w(y(8), n(-100, -2, 55).scale(4, .3, 4), F(.4, .4, .4, .5)), w(y(8, 0, -3.1), n(-100, -3, 55).scale(.4, 1, .4), F(.4, .4, .4, .5)),),);
    Ta.map(({x:f, z:p}) => {
      R(y(6), n(3 * f, 3, 15 * p).scale(.7, 4, .7), F(.6, .3, .3, .4));
      R(y(6), n(7 * f - 100, -3, 7 * p + 55).scale(1, 8.1), F(.6, .15, .15, .8));
      [4, -.4].map(G => R(y(6), n(7 * f - 100, G, 7 * p + 55).scale(1.3, .5, 1.3), F(.4, .2, .2, .8),));
      [1.5, 8].map(G => R(y(15, 1), n(9 * f - 38.9, G - 11.3, 11 * p + 17).scale(1.5, .5, 1.5), F(.6, .6, .6, .3),));
      R(y(14, 1).slice(0, -2), n(9 * f - 38.9, -18, 11 * p + 17).scale(1, 14.2), F(.25, .25, .25, 1),);
    });
    eb(7, f => {
      R(y((23 * f + 1) % 5 + 5, 0, .5), n(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3,), F(.5 - f / 17, .5 - (1 & f) / 9, .6, .3),);
    });
    R(y(), n(-87, -9.5, 24).scale(7, 1, 3), F(.4, .5, .6, .4));
    R(y(4), n(-86, -9.2, 27).scale(5, 1, 5), F(.5, .6, .7, .3));
    R(y(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), F(.3, .3, .4, .1));
    g(n(-86, -7.5, 31));
    R(y(5), n(-38.9, -11.1, 10).scale(2, 1.2, 2), F(.2, .4, .7, .3));
    R(M(Fb(w(y(), n(-38.9, -11.3, 17).scale(11, 1, 13), F(.3, .4, .6, .3)), w(y(5), n(-38.9, -11.1, 17).scale(9, 1, 9), F(0, .2, .3, .5)),), w(y(5), n(-38.9, -11.1, 17).scale3d(5.4), F(0, .2, .3, .5)),),);
    g(n(-38.9, -9.4, 10));
    R(M(Fb(w(y(6), n(0, 0, -18).scale(15, 1.3, 15), F(.7, .7, .7, .3)), w(y(5), e.scale(4.5, 1.2, 9), F(.45, .4, .6, .3)),), ...eb(6, f => eb(6, p => w(y(6), n(4.6 * p - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * p) - 32,).scale3d(2), F(.7, .7, .7, .3),))).flat(),), n(-38.9, -11.3, -1),);
    g(n(-84, -.7, 85).rotate(0, 45));
    R(y(5), n(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), F(.8, .1, .25, .4));
    g(n(-116, -1.4, -18).rotate(0, 180));
    R(M(w(y(), n(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...l.map(f => w(y(), n(f, .05, -3).scale(1.35, 2, 9))),), e, F(.5, .5, .6, .2),);
    R(y(), n(-96.5, 1, -2).scale(19, .3, .3), F(.5, .5, .6, .2));
    R(y(6), n(-116, -2.6, -16.5).scale(3.2, .8, 3), F(.6, .5, .7, .2));
    R(y(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), F(.8, .8, .8, .2));
    R(y().slice(0, -1), n(-115.5, -17, -12).scale(.5, 15, 2.2), F(.6, .6, .6, .3));
    R(y(8).slice(0, -2), n(-114, -17, -2).scale(2, 15, 2), F(.6, .6, .6, .3));
    R(y(8).slice(0, -2), n(-79, -17, -2).scale(2, 15, 2), F(1, 1, 1, .3));
    R(y().slice(0, -1), n(-77, -17, -50.5).scale(2.2, 15, .5), F(.6, .6, .6, .3));
    R(M(w(y(12).slice(0, -1), n(-77, -14.5, -12).scale(4, 17.5, 4), F(.7, .7, .7, .2)), w(y(12), n(-77, 3.1, -12).scale(3, 5, 3), F(.4, .5, .6, .2)), w(y(), n(-79, .1, -12).scale(3.5, 2, 1.3), F(.4, .5, .6, .2)), w(y(), n(-77, .1, -14).scale(1.5, 2, 2), F(.4, .5, .6, .2)),),);
    R(M(w(y(), n(-93, -5.8, -40).scale(9, 1, 5), F(.8, .8, .8, .1)), w(y(9), n(-98, -5.8, -40).scale(3, 8, 3), F(.7, .7, .7, .2)),),);
    R(y(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), F(.6, .6, .6, .3));
    R(y(9).slice(0, -1), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), F(.5, .5, .5, .3));
    g(n(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, p) => {
      R(M(w(y(), n(-4 * f, 3.5, -.5).scale(4, 4, .7), F(.5, .5, .5, .4)), w(y(5), n(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), F(.6, .24, .2, .5)), w(y(), e.scale(3, 3, 10), F(.6, .24, .2, .5)), w(y(5), n(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), F(.6, .24, .2, .5),), w(y(32, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), F(.6, .24, .2, .5)),), n(f - 100, .7, 97),);
      R(y(12, 1), n(-7.5 * f - 100, 3.7, 96).scale(.8, 4, .8), F(.6, .24, .2, .5));
      [7.2, 1.5].map(G => R(y(15, 1), n(-7.5 * f - 100, G + .7, 96).scale(1.1, .5, 1.1), F(.5, .24, .2, .4),));
      R(A, n(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      R(A, n(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      eb(5, G => R(A, n(18.5 * (p - .5), 0, 4.8 * G - 9.5).rotate(0, 180 - 180 * p).scale(1.2, 10, 1.2),));
    });
    R(M(w(y(), n(-82.07, .8, 106).scale(11, .9, 2.2), F(.7, .7, .7, .1)), w(y(45, 1), n(-81, .7, 106).scale3d(7.7), F(.7, .7, .7, .1)),),);
    R(y(), n(-50.7, 1, 99).scale(2, .65, 1), F(.7, .7, .7, .2));
    R(y(), n(-58, 1, 106).scale(2, .65, 2), F(.7, .7, .7, .2));
    R(y(), n(-34.2, .4, 91).scale(3, 1, 3), F(.7, .7, .7, .3));
    R(y(), n(-42, .4, 91).scale(5, 1, 2.5), F(.7, .7, .7, .3));
    R(y(5), n(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), F(.2, .5, .5, .6));
    g(n(-34, 2.7, 96).rotate(-12, 0));
    R(M(Fb(w(y(), n(-101.5, .7, 93.5).scale(10.5, 1, 2), F(.7, .7, .7, .2)), w(y(6, 0, 0, .6), n(-100, .7, 105.5).scale(8, 1, 11), F(.7, .7, .7, .2)),), w(y(5), n(-100, .7, 113).scale(4, 3, 4), F(.7, .7, .7, .2)),),);
    eb(3, f => {
      R(r(16), n(-77, -9, -12 * f - 20).rotate(0, 90), F(.6, .6, .6, .3));
      R(r(16), n(12 * f - 109, -9, -12), F(.6, .6, .6, .3));
      R(r(24.7 - .7 * (1 & f)), n(6 * f - 6, 4 - (1 & f), 111 - .2 * (1 & f)), 1 & f ? F(.5, .5, .5, .3) : F(.35, .35, .35, .5),);
    });
    R(M(Fb(w(y(), n(0, 16, 111).scale(3, 1, 3.8), F(.5, .3, .3, .4)), w(y(6, 0, 0, .3), n(0, -.92, 95).scale(14, 2, 14), F(.8, .8, .8, .2)), w(y(), n(0, 16, 110.5).scale(12, 1, 3), F(.5, .3, .3, .4)),), w(y(5), n(0, 0, 95).scale3d(6), F(.3, .3, .3, .5)), w(y(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), F(.5, .3, .3, .4)),),);
    g(n(0, 1.7, 82).rotate(0, 180));
    R(y(5).slice(0, -1), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), F(.5, .3, .3, .4),);
    R(y(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), F(.5, .6, .7, .3));
    R(y(), n(0, 16, 127.8).scale(1.5, 1, .7), F(.5, .6, .7, .3));
    R(y(7), n(0, 15.1, 133).scale(5, 2, 5), F(.4, .5, .6, .4));
    Qb(n(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Qb(n(0, 2.8), [5, 10, 3], [-5, 10, 3], ...sb(18).map(({x:f, z:p}) => [7 * f, 10 * p, 4.5 - 2 * jb(f)]),);
    Qb(n(0, 3, 95), ...sb(9).map(({x:f, z:p}) => [9 * f, 9 * p, 4]),);
    Qb(n(0, 19, 134), [0, 0, 3.5]);
    Qb(n(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Qb(n(-89, .2, 80), [0, 0, 6]);
    Qb(n(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Qb(n(-115, .2, -12), [0, 0, 3.5]);
    Qb(n(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    Q();
    R(y(5), n(0, -.2).scale(5, 1, 5), F(.6, .65, .7, .3));
    g(n(0, 1.2));
    eb(2, () => {
      Q();
      Ta.map(({x:f, z:p}) => {
        R(y(11, 1).slice(0, -2), n(4 * f, 4, 4 * p).scale(.8, 3, .8), F(.5, .3, .7, .6),);
        R(y(), n(4 * f, 7, 4 * p).scale(1, .3), F(.5, .5, .5, .3));
      });
      R(M(w(y().slice(0, -1), e.scale(5, 1, 5), F(.8, .8, .8, .3)), ...[-1, 1].map(f => w(y(25, 1), n(5 * f, .2).rotate(-30 * f).scale(4, 1, 3), F(.8, .8, .8, .3),)),),);
      R(y(), n(0, -3).scale(8, 2, 8), F(.4, .4, .4, .3));
    });
    Q();
    R(M(Fb(w(y(), e.scale(1.5, 1, 5), F(.9, .9, .9, .2)), w(y(), n(0, -2).scale(2, 3.2, 1.9), F(.3, .8, .5, .5)), w(y(6), e.scale(4, 1, 5), F(.9, .9, .9, .2)), w(y(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), F(.9, .9, .9, .2)),), w(y(), e.scale(1.3, 10, 1.3), F(.2, .7, .4, .6)),),);
    Qb(n(0, 2.8), [0, 0, 4.5]);
    Q();
    R(y(3), n(-23, -1.7, 55.8).scale(5, .7, 8.3), F(.3, .6, .6, .2));
    R(y(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), F(.8, .8, .8, .2));
    R(y(), n(-23, -2.2, 62).scale(3, 1, 4), F(.5, .5, .5, .3));
    R(y(), n(-23, -3, 55).scale(5.2, 1.7, 3), F(.5, .5, .5, .3));
    g(n(-23, -.5, 66.5));
    Q();
    R(y(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), F(.7, .7, .7, .2));
    R(M(w(y(), e.scale(3, 1.4, 2.7)), w(y(), e.scale(1.2, 8, 1.2))), n(-33, -3, 55), F(.7, .7, .7, .2),);
    Q();
    R(M(w(y(), e.scale(3, 1.4, 2.7)), w(y(), e.scale(1, 3))), n(-27, -3, 55), F(.9, .9, .9, .2),);
    R(y(), n(-39, -3, 55).scale(3, 1.4, 2.7), F(.9, .9, .9, .2));
    Q();
    R(y(6), n(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), F(.7, .7, .7, .4));
    Q();
    [0, 12, 24].map(f => R(y(), n(f - 76.9, -f / 16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), F(.2, .5, .6, .2)));
    Q();
    [6, 18].map(f => R(y(), n(f - 76.9, -f / 16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), F(.1, .4, .5, .2)));
    Q();
    R(y(5), n(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), F(.3, .3, .5, .5));
    R(y(5).slice(0, -1), n(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), F(.6, .3, .5, .5));
    R(M(w(y(5), n(0, 2).scale(5, 7, 5).skewY(8)), w(y(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), w(y(), e.scale(2, 8, 3)),), n(-38.9, -11.3, 17), F(.2, .4, .5, .5),);
    Qb(n(-39.1, -.6, 17).rotate(11), ...sb(15).map(({x:f, z:p}) => [3 * f, 3 * p, 1.2]),);
    l.map((f, p) => {
      p % 2 || 6 <= p || Q();
      R(t, n(f, 1.9, -12));
    });
    eb(4, f => {
      Q();
      R(y(6), n(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), F(.5 - f / 8, f / 12 + .5, .7, .3),);
    });
    [F(.1, .55, .45, .2), F(.2, .5, .5, .3), F(.3, .45, .55, .4)].map((f, p) => {
      Q();
      R(y(), n(-23.5, .5, 91 + 6.8 * p).scale(1 === p ? 2 : 3.3, 1, 3.3), f);
      2 === p && R(y(), n(-29.1, .4, 91).scale(2.1, 1, 3), F(.7, .7, .7, .3));
      1 === p && R(y(), n(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), F(.6, .6, .7, .3),);
    });
    Q();
    R(y(5), e.scale(5, 1.1, 5), F(.5, .3, .3, .4));
    R(y(5), e.scale(5.5, .9, 5.5), F(.25, .25, .25, .4));
    g(n(0, 1.5, -1).rotate(0, 180));
    eb(4, f => {
      Q();
      eb(7, p => R(w(y(8, 1).slice(0, -1), n((2 < f ? 3.5 : 4) * (p / 6 - .5), 3).scale(.2, 2 < f ? 4 : 3, .2), F(.3, .3, .38),),),);
    });
    Q();
    R(z);
    Q();
    R(y(5).slice(0, -1), n(-7.5, 2.7).rotate(0, 90).scale(1, .2), F(.5, .5, .5, .5));
    R(y(10).slice(0, -1), n(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), F(.3, .8, .7, .3));
    R(y(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), F(.4, .4, .4, .3));
    g(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => R(A, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    R(M(w(y(10), e.scale(6, 2, 6), F(.1, .6, .5, .3)), w(y(10), e.scale(3.3, 6, 3.3), F(.1, .6, .5, .5)),),);
    Qb(n(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    Q();
    R(y(3), n(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), F(.5, .3, .3, .4));
    [22, 30].map(f => {
      R(y(6), n(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), F(.7, .7, .7, .4));
      R(y(), n(0, 6.2, f + 95).scale(.5, 11, .5), F(.5, .3, .3, .4));
    });
    Q();
    R(y(5).slice(0, -1), n(0, 2).scale(1, 2), F(.3, .3, .3, .2));
    R(y(8).slice(0, -1), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), F(.7, .7, .7, .1));
    R(M(w(y(28, 1), e.scale(7.5, 1, 7.5), F(.45, .45, .45, .2)), w(y(), n(0, 0, -5.5).scale(1.5, 3, 2.7), F(.45, .45, .45, .2)),),);
    Qb(n(0, 3), ...sb(14).map(({x:f, z:p}) => [5.6 * f, 5.6 * p, 2]),);
    Q();
    [-1, 1].map(f => R(A, e.rotate(0, 90).translate(-5 * f, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    R(M(w(y(28, 1).slice(0, -1), n(0, 2).scale(7.5, 1, 7.5), F(.35, 0, 0, .3)), w(y().slice(0, -1), n(0, 2).scale(9, 1.1, 2), F(.3, 0, 0, .3)),),);
    R(y(5).slice(0, -1), n(0, 1).scale(1, .2), F(.3, .3, .3, .2));
    R(y(28, 1), e.scale(7.5, 1, 7.5), F(.45, .45, .45, .2));
    Q();
    R(M(w(y(28, 1).slice(0, -1), n(0, 2).scale(7.5, 1, 7.5), F(.35, 0, 0, .3)), w(y().slice(0, -1), n(0, 2, 7).scale(2, 1.1, 9), F(.3, 0, 0, .3)), w(y().slice(0, -1), n(7, 2).scale(9, 1.1, 2), F(.3, 0, 0, .3)),),);
    R(y(5).slice(0, -1), n(0, 1).scale(1, .2), F(.3, .3, .3, .2));
    R(y(28, 1), e.scale(7.5, 1, 7.5), F(.45, .45, .45, .2));
    Q();
    R(M(w(y(28, 1).slice(0, -1), n(0, 2).scale(7.5, 1, 7.5), F(.35, 0, 0, .3)), w(y().slice(0, -1), n(0, 2, -7).scale(2, 1.1, 9), F(.3, 0, 0, .3)), w(y().slice(0, -1), n(7, 2).scale(9, 1.1, 2), F(.3, 0, 0, .3)),),);
    R(y(5).slice(0, -1), n(0, 1).scale(1, .2), F(.3, .3, .3, .2));
    R(y(28, 1), e.scale(7.5, 1, 7.5), F(.45, .45, .45, .2));
    eb(2, () => {
      Q();
      R(M(w(y(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), F(.7, .4, .25, .7)), w(y(), n(4, -1.2).scale3d(2), F(.7, .4, .25, .3)), w(y(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), F(.7, .4, .25, .2)),),);
      g(n(0, -3, 4));
    });
    for (l = 0; 16 > l; ++l) {
      Q(), R(y(9, 1), n(0, .8).scale(.2, .3, .2), F(.7, 1, .2)), R(y(6, 1).slice(0, -1), e.scale(.12, 1.2, .12), F(.3, .3, .5, .1)), R(y(3), n(0, -1).rotate(90, 90).scale(.3, .4, .3), F(.2, .2, .2, .1));
    }
    Q();
    R(ub(20), n(0, 1).scale3d(.5), F(1, .3, .4));
    R(ub(30), e.scale(.65, .8, .55), F(1, .3, .4));
    R(y(), n(0, .9, .45).scale(.15, .02, .06), F(.3, .3, .3));
    [-1, 1].map(f => {
      R(A, e.rotate(0, 0 < f ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), F(1, 1, .8),);
      R(w(M(y(15, 1), w(y(), n(0, 0, 1).scale(2, 2, .5))), e.rotate(-90, 0).scale(.1, .05, .1), F(.3, .3, .3),), n(.2 * f, 1.2, .4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1].map(f => {
      Q();
      R(y(20, 1), n(.3 * f, -.8).scale(.2, .7, .24), F(1, .3, .4));
    });
    Q();
    R(y(6, 1).slice(0, -1), e.scale(.77, 1, .77), F(1, .3, .5));
    Q();
    R(ub(28, 22, (f, p, G) => {
      var N = p / 22, O = f * Math.PI * 2 / 28, K = Math.sin(N ** .6 * Math.PI / 2);
      f = N * N * Math.sin(f * Math.PI * .5) / 4;
      return 21 < p ? {x:G.m = 0, y:-.5, z:0,} : {x:Math.cos(O) * K, y:Math.cos(N * Math.PI) - N - f, z:Math.sin(O) * K + Math.sin(f * Math.PI * 2) / 4,};
    }), e.scale3d(.7), F(1, 1, 1),);
    [-1, 1].map(f => R(ub(10), n(.16 * f, .4, -.36).scale3d(.09)));
  });
});

