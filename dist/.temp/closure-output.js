let aa, ca, ea, fa, ha, ia, ja, ka, la, oa, pa, qa, ra, sa, ta, ua, va = 0, a = 0, wa = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 14, Fa = .1;
const Ga = Math.PI / 180, Ja = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
);
var Ka = 0, La = 180, Ma = 0, Na = 0, Sa = 0;
const Ta = [], d = [], Ua = [], Va = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], Xa = (b, c = Wa, h = 0,) => (h *= 16, c[h++] = b.m11, c[h++] = b.m12, c[h++] = b.m13, c[h++] = b.m14, c[h++] = b.m21, c[h++] = b.m22, c[h++] = b.m23, c[h++] = b.m24, c[h++] = b.m31, c[h++] = b.m32, c[h++] = b.m33, c[h++] = b.m34, c[h++] = b.m41, c[h++] = b.m42, c[h++] = b.m43, c[h] = b.m44, c), Ya = (b = e, c = k,) => (c.m11 = b.m11, c.m12 = b.m12, c.m13 = b.m13, c.m14 = b.m14, c.m21 = b.m21, c.m22 = b.m22, 
c.m23 = b.m23, c.m24 = b.m24, c.m31 = b.m31, c.m32 = b.m32, c.m33 = b.m33, c.m34 = b.m34, c.m41 = b.m41, c.m42 = b.m42, c.m43 = b.m43, c.m44 = b.m44, c), cb = (b = 0, c = 0, h = 0, l = 1) => {
  Za = k.m11 * b + k.m21 * c + k.m31 * h + k.m41 * l;
  $a = k.m12 * b + k.m22 * c + k.m32 * h + k.m42 * l;
  ab = k.m13 * b + k.m23 * c + k.m33 * h + k.m43 * l;
  bb = k.m14 * b + k.m24 * c + k.m34 * h + k.m44 * l;
};
var Za, $a, ab, bb;
const n = NO_INLINE((b, c, h) => e.translate(b, c, h)), db = (b, c) => Array.from(Array(b), (h, l) => c(l)), eb = (b, c, h) => (b.m = h, b.o = c, b), fb = (b, c, h = b.o) => (Ya(c), eb(b.map(({x:l, y:m, z:g}) => (cb(l, m, g), {x:Za, y:$a, z:ab,})), h, b.m,)), w = (b, c, h) => b.map(l => fb(l, c, h)), gb = NO_INLINE(b => 0 > b ? -b : b), hb = NO_INLINE((b, c) => c > b ? b : c), ib = NO_INLINE((b, c) => b > c ? b : c), jb = (b, c) => gb(b) > c ? b : 0, kb = (b, c = 0, h = 1) => c > b ? c : b > h ? 
h : b, lb = b => Math.atan2(Math.sin(b * Ga), Math.cos(b * Ga)) / Ga, mb = (b, c, h) => b + (2 * (c = (c - b) % 360) % 360 - c) * kb(h) || 0, nb = (b, c, h) => (0 < h ? 1 > h ? b + (c - b) * h : c : b) || 0, ob = (b, c, h = 0) => (b * b + c * c + h * h) ** .5, pb = (b, c = 0) => db(b, h => {
  const l = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:.01 > gb(l) ? l : 0 > l ? l - c : l + c,};
}), tb = (b, c, h) => b.map((l, m, {length:g}) => eb([l, c[g - m - 1], c[g - (m + 1) % g - 1], b[(m + 1) % g]], b.o, h,)), B = (b, c, h = 0, l,) => (b = b ? pb(b, l) : Va, l = fb(b, n(0, 1).scale3d(0 < h ? h : 1)), b = fb(b, n(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...tb(b, l, c), l, b]), ub = (b, c = b, h = (l, m) => (m *= Math.PI / c, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(m), y:Math.cos(m), z:Math.sin(l) * Math.sin(m),})) => {
  const l = [];
  for (let m = 0; b > m; m++) {
    for (let g = 0; c > g; g++) {
      const r = eb([], 0, 1);
      l.push(r);
      r.push(h(m, g, r));
      g && r.push(h((m + 1) % b, g, r));
      c - 1 > g && r.push(h((m + 1) % b, g + 1 % c, r));
      r.push(h(m, g + 1 % c, r));
    }
  }
  return l;
}, G = NO_INLINE((b, c, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * c << 8 | 255 * b), vb = b => {
  let c, h = 0, l = 0, m = 0, g = b.at(-1);
  for (c of b) {
    h += (g.y - c.y) * (g.z + c.z), l += (g.z - c.z) * (g.x + c.x), m += (g.x - c.x) * (g.y + c.y), g = c;
  }
  return c = ob(h, l, m), h /= c, l /= c, m /= c, {x:h, y:l, z:m, w:h * g.x + l * g.y + m * g.z,};
}, wb = ({x:b, y:c, z:h}, l) => b * l.x + c * l.y + h * l.z, xb = (b, c) => {
  let h;
  var l, m;
  const g = c.h, r = c.s;
  for (var v = 0; g.length > v; ++v) {
    if (-8e-5 > (h = wb(b, g[v]) - b.w) ? m = c : 8e-5 < h && (l = c), m && l) {
      l = [];
      m = [];
      v = g.at(-1);
      let C = wb(v, b) - b.w;
      for (const D of g) {
        h = wb(D, b) - b.w, 8e-5 > C && m.push(v), -8e-5 < C && l.push(v), (8e-5 < C && -8e-5 > h || -8e-5 > C && 8e-5 < h) && (C /= h - C, v = {x:v.x + (v.x - D.x) * C, y:v.y + (v.y - D.y) * C, z:v.z + (v.z - D.z) * C,}, l.push(v), m.push(v)), v = D, C = h;
      }
      l = 2 < l.length && {h:eb(l, g.o, g.m), s:r, k:c,};
      m = 2 < m.length && {h:eb(m, g.o, g.m), s:r, k:c,};
      break;
    }
  }
  return {x:l, y:m,};
}, yb = (b, c, h = vb(c.h)) => {
  let l, m;
  return b ? ({x:l, y:m} = xb(b, c), l || m || b.h.push(c), l && (b.j = yb(b.j, l, h)), m && (b.l = yb(b.l, m, h))) : b = {x:h.x, y:h.y, z:h.z, w:h.w, h:[c], j:0, l:0,}, b;
}, Bb = (b, c, h) => {
  const l = [], m = (g, r) => {
    let {x:v, y:C} = xb(g, r);
    v || C || (0 < h * wb(g, c) ? v = r : C = r);
    v && (g.j ? m(g.j, v) : l.push(v));
    C && g.l && m(g.l, C);
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
    Cb(c, m => m.h = Bb(h, m, 1));
    Cb(h, m => l.push([m, Bb(c, m, -1)]));
    for (let [m, g] of l) {
      for (const r of g) {
        yb(c, r, m);
      }
    }
  }
  return c;
}), L = (b, ...c) => {
  const h = g => {
    let r;
    return g.k && ((r = m.get(g.k)) ? (l.delete(r), g = h(g.k)) : m.set(g.k, g)), g;
  }, l = new Map(), m = new Map();
  return b = Db(Fb(Db(Eb(b)), ...c)), Cb(b, g => {
    for (const r of g.h) {
      l.set(h(r), r.s);
    }
  }), Array.from(l, ([{h:g}, r]) => {
    const v = g.map(({x:C, y:D, z:f}) => ({x:C, y:D, z:f,}));
    return eb(r ? v.reverse() : v, g.o, g.m);
  });
}, Gb = NO_INLINE(b => 1 - Math.exp(-va * b)), N = NO_INLINE((b, c, h) => nb(b, c, Gb(h))), Hb = b => setTimeout(() => {
  h4.innerHTML += ".";
  b();
}, 5), Ib = NO_INLINE(b => {
  let c = 0;
  const h = (g, r, v, C, D, f, t, z, M, H, I, ba, A, F, P, T, y, E, p, q, x, u = c++,) => Hb(() => {
    let J = 0;
    const K = S => Math.sin(S * Math.PI * 2), O = S => .5 > S % 1 ? 1 : -1, V = S => S % 1 * 2 - 1, ma = S => 2 > (S = S % 1 * 4) ? S - 1 : 3 - S;
    H = 4 * H ** 2;
    x = x.split("+");
    [5513, 4562, 3891].map(S => {
      let U, da, Oa, Ha = 0, qb = 0;
      const Nb = [], Pa = new Int32Array(768 * S), Wb = 2 ** (ba - 9) / S, Xb = Math.PI * 2 ** (y - 8) / S, zb = p * S & -2;
      for (let rb = 0; 11 >= rb; ++rb) {
        for (let sb = 0, Ob = +"000001234556112341234556011111111112011111111112000001111112"[12 * u + rb]; 32 > sb; ++sb) {
          const Pb = (32 * rb + sb) * S;
          for (var na = 0; 4 > na; ++na) {
            if (U = 0, Ob && (U = x[Ob - 1].charCodeAt(sb + 32 * na) - 40, U += 0 < U ? 106 : 0), U) {
              var xa;
              if (!(xa = Nb[U])) {
                xa = U;
                let X = void 0, ya = void 0;
                var Qb = U;
                let Yb = 0, Zb = 0;
                const $b = 2 > u ? V : K, ac = 2 > u ? 1 > u ? O : ma : K, Rb = new Int32Array(z + M + H);
                for (let Qa = 0, Ab = 0; z + M + H > Qa; ++Qa, ++Ab) {
                  let Ra = 1;
                  z > Qa ? Ra = Qa / z : z + M > Qa || (Ra = (1 - (Ra = (Qa - z - M) / H)) * 3 ** (-I / 16 * Ra));
                  0 > Ab || (Ab -= 4 * S, ya = 0.00396 * 2 ** ((Qb + r - 256) / 12), X = 0.00396 * 2 ** ((Qb + D - 256) / 12) * (u ? 1 : 1.0072));
                  Rb[Qa] = 80 * ($b(Yb += ya * Ra ** (v / 32)) * g + ac(Zb += X * Ra ** (f / 32)) * C + (t && t * (2 * Math.random() - 1))) * Ra | 0;
                }
                xa = Nb[xa] = Rb;
              }
              for (let X = 0, ya = 2 * Pb; xa.length > X; ++X, ya += 2) {
                Pa[ya] += xa[X];
              }
            }
          }
          for (let X, ya = 0; S > ya; ++ya) {
            xa = 0;
            na = 2 * (Pb + ya);
            var Ia = (((X = Pa[na]) || Oa) && (da = 0.00308 * A, 1 !== u && 4 !== u || (da *= Math.sin(Wb * na * Math.PI * 2) * q / 512 + .5), da = 1.5 * Math.sin(da), Ha += da * qb, qb += da * (Ia = (1 - F / 255) * (X - qb) - Ha), X = 4 === u ? qb : 3 === u ? Ia : Ha, u || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5), X *= P / 32, Oa = 1e-5 < X * X, xa = X * (1 - (Ia = Math.sin(Xb * na) * T / 512 + .5)), X *= Ia), zb > na || (xa += Pa[1 + na - zb] * E / 255, 
            X += Pa[na - zb] * E / 255), J + na >> 1);
            l[Ia] += (Pa[na] = xa) / 65536;
            m[Ia] += (Pa[++na] = X) / 65536;
          }
        }
      }
      J += 768 * S;
    });
    --c || Hb(b);
  }), l = (ea = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), m = ea.getChannelData(1);
  h(69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U+(059<59<A9<AE<AEHAEHMEHMQMQTY(Y+(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y+(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^+Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]+QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",);
  h(100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5+-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5+,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5+*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6+5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5+5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",);
  h(255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, "9(((9(((9(((9(((9(((9(((9(((9+9(((Q(((Q(((Q",);
  h(0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, "9(9(9(9(9(9(9(999(9(9(9(999(9(9+9(9(9(9(9(999(9(((((Q",);
  h(221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, "((((Q(((((((Q(((((((Q(((((((Q+Q((Q((Q((Q((Q((Q((((Q",);
}), Jb = (b, c, h, l) => new DOMMatrix([h, 0, 0, 0, 0, l, 0, 0, 0, 0, (c + b) / (b - c), -1, 0, 0, 2 * c * b / (b - c), 0,]);
let Kb = () => {
  let b, c, h, l, m, g, r, v, C, D, f, t, z, M, H, I, ba = !0;
  const A = [], F = () => {
    b4.innerHTML = "Music: " + ba;
    I && (ca || !ba ? I.disconnect() : I.connect(H.destination));
  }, P = () => {
    const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ja = Jb(.3, 181, p, 1.732051);
    ia = [Jb(.3, 55, p, 1.732051), Jb(55, 181, p, 1.732051)];
    l = v = void 0;
    A.length = fa = M = t = z = za = Aa = 0;
    document.hidden && T(!0);
  }, T = p => {
    if (ca !== p && (ca = p, P(), hB.className = p ? "l m" : "l", F(), p)) {
      try {
        document.exitFullscreen().catch(() => !1), document.exitPointerLock();
      } catch {
      }
    }
  }, y = p => {
    try {
      H || (H = new AudioContext(), (I = H.createBufferSource()).buffer = ea, I.loop = !0, I.start()), hB.requestFullscreen().catch(() => !1);
    } catch {
    }
    T(!1);
    ha = p;
  }, E = (p, q) => p.buttons[q]?.pressed || 0 < p.buttons[q]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  onclick = p => {
    if (!ca && (p.target === hC && (fa = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  b5.onclick = () => T(!0);
  b2.onclick = () => y(1);
  b1.onclick = () => y();
  b4.onclick = () => {
    ba = !ba;
    F();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onkeyup = onkeydown = p => {
    let q;
    p.repeat || (q = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[p.code], (A[q] = !!p.type[5] && !0) && (0 === q && (fa = 1), 1 === q && T(!0)));
  };
  onmousemove = p => {
    ha && (La += .1 * p.movementX || 0, Ka += .1 * p.movementY || 0);
  };
  hC.ontouchstart = p => {
    if (!ca) {
      for (let {identifier:q, pageX:x, pageY:u} of p.changedTouches) {
        ha && x > hC.clientWidth / 2 ? void 0 === v && (C = 0, g = x, r = u, v = q, f = Ka, D = La) : void 0 === l && (m = 0, c = x, h = u, l = q);
      }
      b = wa;
    }
  };
  hC.ontouchmove = p => {
    if (!ca) {
      for (let {identifier:K, pageX:O, pageY:V} of p.changedTouches) {
        var q, x, u, J;
        v === K && (C = 1, Ka = f + (V - r) / 2, La = D + (O - g) / 2);
        l === K && (K = (c - O) / 19, q = gb(K), u = gb(x = (h - V) / 19), (J = .3 < ib(q, u)) && (m = 1), t = kb(K, -1) * (J && .2 < q), z = kb(x, -1) * (J && .2 < u), 2 < q && (c = 19 * (0 > K ? -1 : 1) + O), 2 < u && (h = 19 * (0 > x ? -1 : 1) + V));
      }
    }
  };
  hC.ontouchend = p => {
    let q;
    document.activeElement === hB && p.preventDefault();
    for (const x of p.changedTouches) {
      x.identifier === v ? (v = void 0, C || (q = 1), C = 0) : x.identifier === l ? (l = void 0, z = t = 0, m || (q = 1), m = 0) : q = 1;
    }
    p.target === hC && q && b && .02 < (p = wa - b) && .7 > p && (fa = 1);
  };
  Kb = () => {
    za = z + (A[4] ? 1 : 0) - (A[5] ? 1 : 0);
    Aa = t + (A[2] ? 1 : 0) - (A[3] ? 1 : 0);
    let p = navigator.getGamepads()[0];
    p && (ha && (Ka += 80 * va * jb(p.axes[3], .3), La += 80 * va * jb(p.axes[2], .3)), za += E(p, 12) - E(p, 13) - jb(p.axes[1], .2), Aa += E(p, 14) - E(p, 15) - jb(p.axes[0], .2), E(p, 9) && T(!0), (p = E(p, 3) || E(p, 2) || E(p, 1) || E(p, 0)) && !M && (fa = 1), M = p);
  };
  document.onpointerlockchange = () => {
    ha = !!document.pointerLockElement;
  };
  document.onvisibilitychange = onblur = onresize = P;
  T(!0);
};
const Lb = (b, c) => {
  1 / 0 > Fa && (Fa = a + c, h4.innerHTML = b);
}, Mb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ka = Ua.reduce((b, c) => b + c.i, 0)] + " / XIII";
}, Sb = () => {
  localStorage["Dante-22"] = JSON.stringify([d.map(b => b.i), Ua.map(b => b.i), Ea, pa, a,]);
}, Q = (b, c = e, h) => ra.push(...w(b, c, h)), R = () => {
  Ta.push({p:qa = new DOMMatrix(), h:ra = [],});
}, Ub = (b, ...c) => {
  let h, l, m, g, r = 0, v = 0, C = 1, D = -1;
  const f = () => {
    if (f.i) {
      Ya(Ta[35].p).translateSelf(A % 4 * 1.2 - 1.7 + Math.sin(a + A) / 7, -2, 1.7 * (A >> 2) - 5.5 + gb(A % 4 - 2) + Math.cos(a / 1.5 + A) / 6,);
    } else {
      let F, P = 1, T = 1 / 0;
      for (let x = 0; c.length > x; x++) {
        let u = c[x], J = ob(z - u[0], M - u[1]);
        P = hb(P, J / u[2]);
        0 > (J -= u[2]) ? F = 1 : T > J && (T = J, t = u);
      }
      let y, E, p, q;
      F || (y = z - t[0], E = M - t[1], p = ob(y, E), q = Math.atan2(-E, y), C && (g = kb(g / (1 + Math.random())), v = (Math.random() - .5) * Math.PI / 2), q += v, D = -Math.cos(q), r = Math.sin(q), .1 < p && (p = hb(p, t[2]) / p, z = y * p + t[0], M = E * p + t[1]));
      C = F;
      g = N(g, 3 + 6 * (1 - P), 3 + P);
      H = N(H, z = N(z, z + D, g), g);
      I = N(I, M = N(M, M + r, g), g);
      h = mb(h, Math.atan2(H - l, I - m) / Ga - 180, Gb(3));
      Ya(ba).multiplySelf(b).translateSelf(l = H, 0, m = I).rotateSelf(0, h, 7 * Math.sin(1.7 * a),);
      1.6 > (cb(), ob(Ma - Za, Na - $a, Sa - ab)) && (f.i = 1, Lb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ka] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Mb(), Sb());
    }
    Xa(k, Tb, 28 + A);
  };
  let t = c[0], [z, M] = t, [H, I] = t;
  const ba = qa, A = Ua.length;
  Ua.push(f);
}, W = (b, c = 0, h = 0) => {
  const l = Ya(e, Ta[++sa].p);
  return l.m41 = b, l.m42 = c, l.m43 = h, l;
}, bc = NO_INLINE(() => {
  let b, c, h, l, m, g, r, v, C, D, f, t, z, M, H, I, ba = 0, A = 1, F = 2, P = 15;
  const T = (q, x, u, J) => nb(q, x, A || (kb(gb(x - q) ** .5 - u) + 1 / 7) * Gb(1.5 * J)), y = () => Ya((F ? d[Ea] : Ta[28 !== ba ? ba : 0]).p), E = q => {
    1 < F ? (Ya(d[Ea].p).multiplySelf(d[Ea].q), cb(0, .9 < oa ? 15 : 1, -2.4)) : (y(), cb(M, H, I));
    q && (m = (Za - Ma) / va, g = (ab - Sa) / va);
    Ma = Za;
    Na = $a;
    Sa = ab;
  }, p = NO_INLINE(() => {
    var q = 0, x = 0, u = 0, J = 0, K = 0, O = 0, V = -1;
    for (var ma = 0; 36 > ma; ++ma) {
      for (let da = 96, Oa = 512 * ma; 416 > da; da += 4) {
        for (var S = 0; 2 > S; ++S) {
          var U = Vb[Oa + da + S];
          const Ha = Vb[Oa + da + S + 2];
          U > J && (J = U);
          U + Ha && (0 > V || V === ma) && (V = ma, Ha === D ? ++q : x && x !== Ha || (x = Ha, ++u));
        }
      }
    }
    D = 0 > V ? 0 : u > 2 * q ? x : D;
    for (q = 36; 128 > q; ++q) {
      ma = V = u = x = 0;
      for (let da = 0, Oa = 512 * q; 128 > da; ++da) {
        S = Oa + 4 * da, U = Vb[S], 64 > da ? U > x && (x = U) : U > u && (u = U), (U = Vb[2 + S]) > V && (V = U), U = Vb[1 + S], 64 < da ? U > x && (x = U) : U > u && (u = U), (U = Vb[3 + S]) > ma && (ma = U);
      }
      (u -= x) * u > K * K && (K = u);
      (ma -= V) * ma > O * O && (O = ma);
    }
    v = kb(1 - .01 * ib(gb(K *= .7), gb(O)), .3);
    K /= 255;
    J /= 255;
    O /= 255;
    y().invertSelf();
    cb(K, J, O, 0);
    M += Za;
    H += J;
    I += ab;
    E();
  });
  ta = () => {
    E(D);
    Y.r9r(0, 0, 128, 128, 6408, 5121, Vb);
    p();
    !F && D === ba || (ba = D, y().invertSelf(), cb(Ma, Na, Sa), M = Za, H = $a, I = ab, F = F && (D ? 0 : 1));
    (-20 > Ma || 109 > Sa ? -25 : -9) > Na && (F = 2);
    1 === D && (d[15].i = -15 > Ma && 0 > Sa ? 1 : 0);
    l = N(l, ua * (30 < D && 35 > D), 2);
    f = T(f, Ma, .5, 1);
    t = T(t, C = nb(N(C, Na, 2), Na, F || 8 * gb(C - Na)), 2, 1,);
    z = T(z, Sa, .5, 1);
    ha ? (q = F + Gb(18), Ba = nb(Ba, Ma, q), Da = nb(Da, Sa, q), Ca = nb(Ca, 1.6 + C, q), La = lb(La)) : (Ba = T(Ba, f, 1, 2 + l), Da = T(Da, z + -18 + 5 * l, 1, 2 + l), Ca = T(Ca, ib(t + kb((-60 - Sa) / 8, 0, 20) + 13 + 9 * l, 6), 4, 2), q = hb(-6, -gb(z - Da)), La = mb(La, 90 - lb(Math.atan2(q, x = f - Ba) / Ga), A + Gb(10),), Ka = mb(Ka, 90 - Math.atan2(ob(q, x), Ca - t) / Ga, A + Gb(10),));
    Ka = kb(Ka, -87, 87);
    A = 0;
    var q = kb(za, -1), x = kb(Aa, -1), u = jb(ob(q, x) ** .5, .1), J = Math.atan2(q, x);
    u && (b = 90 - J / Ga);
    h = N(h, u, 10);
    W(Ma, .06 * v * h * Math.cos(18.2 * a) + C, Sa).rotateSelf(0, c = mb(c, b, Gb(8)),);
    for (var K = 0; 2 > K; ++K) {
      const O = 9.1 * a - Math.PI * K;
      Ya(Ta[53].p, W(0)).translateSelf(0, h * kb(.45 * Math.sin(O - Math.PI / 2)),).rotateSelf(h * Math.sin(O) * .25 / Ga, 0);
    }
    P = D ? 5 : N(P, F ? 13 : 19 - 2 * hb(0, Na + 10), 2.2);
    m = D || F ? 0 : N(m, 0, 3);
    g = D || F ? 0 : N(g, 0, 3);
    q = (r = F ? 0 : N(r, D ? 7 * kb(2 * u) * v : 0, D ? 9 : 1)) * u * gb(q) * Math.sin(J);
    x = r * u * gb(x) * Math.cos(J);
    u = va * (m + (Math.cos(J = ha ? (180 + La) * Ga : 0) * x - Math.sin(J) * q));
    K = va * -P;
    q = va * (g + (Math.sin(J) * x + Math.cos(J) * q));
    y().invertSelf();
    cb(u, K, q, 0);
    M += Za;
    H += K;
    I += ab;
    E();
  };
});
let cc = () => {
  let b, c, h;
  const l = (m, g) => (m = kb(m), nb(m, 1 - m, g));
  (cc = () => {
    var m = (v, C, D) => W(v + Math.sin(a + 2) / 5, C + Math.sin(.8 * a) / 5, D).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),);
    sa = 1;
    h = nb(N(h, 0, 1), lb(h + 60 * va), d[2].t - d[3].g);
    ua = l(d[13].t, d[8].t);
    b = nb(N(b, 0, 5), lb(b + 56 * va), ua);
    c = nb(N(c, 0, 4), lb(c + 48 * va), ua);
    W(0, 270 * (d[1].t - 1) + (2 + 5 * Math.cos(1.5 * a)) * (1 - d[10].t));
    var g = hb(1 - d[11].g, d[10].g);
    W(g * Math.sin(.6 * a + 1.2) * 12, 0, 35);
    W(g * Math.sin(.6 * a - 1.2) * 8.2, 0, 55);
    W(g * Math.sin(.6 * a) * 12, 0, 45);
    W(9.8 * (1 - g));
    g = kb(1 - 5 * g) * l(d[11].t, d[2].t);
    W(0, g * Math.sin(1.35 * a) * 4);
    W(0, 0, g * Math.sin(.9 * a) * 8);
    W(0, -6.5 * d[11].g);
    g = l(d[4].g, d[3].g);
    W(0, g * Math.sin(a) * 5 + 3.5 * (1 - ib(d[3].t, d[4].t)));
    W(0, g * Math.sin(a + 3) * 6, g * Math.sin(.6 * a + 1) * 6,);
    W(0, -7.3 * d[4].g);
    g = l(d[6].t, d[7].t);
    W(0, -2, 10 - 8.5 * g * gb(Math.sin(1.1 * a)));
    W(0, -2, 10 - 8.5 * g * gb(Math.sin(2.1 * a)));
    W(0, -2, 10 - 8.5 * ib(g * gb(Math.sin(1.5 * a)), (1 - d[6].t) * (1 - g)),);
    var r = l(d[5].g, d[13].g);
    for (g = 0; 4 > g; g++) {
      W((2 < g ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * g) * (3 + g / 3) + .7, 115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & g ? -1 : 1) + ib(.05, r) * Math.cos(1.3 * a + 7 * g) * (4 - 2 * (1 - g / 3)),);
    }
    g = l(d[8].g, d[9].g);
    for (let v = 0; 3 > v; ++v) {
      W(0, g * Math.sin(1.5 * a + 1.5 * v) * 4 + (v ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)),);
    }
    g = l(l((d[9].t + d[9].g) / 2, d[8].g), (d[12].t + d[12].g) / 2);
    W(0, 16 * g, 95 + 8.5 * kb(2 * g - 1));
    W(0, -4.7 * d[0].t, -15);
    W(0, -4.7 * d[10].t, 15);
    W(-99.7, -1.9 - 5.5 * d[3].t, 63.5);
    W(-100, .6 - 5.8 * d[13].t, 96.5);
    W(-75, 3 * (1 - d[2].g) * (1 - d[3].t), 55).rotateSelf(180 * (1 - d[2].g) + h, 0);
    W(2.5 * (1 - r) - 139.7, -3 * (1 - d[5].t) - r * Math.sin(.8 * a) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 + 3 * r), 0);
    W(-2 * Math.sin(a)).rotateSelf(25 * Math.sin(a));
    W(-81, .6, 106).rotateSelf(0, 40 + b);
    W(-65.8, .8, 106).rotateSelf(0, c);
    W(-50.7, .8, 106).rotateSelf(0, 180 - c);
    W(-50.7, .8, 91).rotateSelf(0, 270 + c);
    m(-12, 4.2, 40 * oa - 66);
    m(-123, 1.4, 55 - 65 * pa);
    for (m = 0; 16 > m; ++m) {
      r = d[m], g = r.t = N(r.t, r.i, 4), r.g = N(r.g, r.i, 1), Ya(Ya(r.p).multiplySelf(r.q), W(0)).rotateSelf(50 * g - 25, 0).translateSelf(0, 1).m44 = g, fa && 3 > (cb(), ob(Ma - Za, Na - $a, Sa - ab)) && (r.i ? .7 < g && (r.i = 0, Ea = m, Lb("* click *", 1), Sb()) : .3 > g && (r.i = 1, Ea = m, Lb("* click *", 1), Sb())), 14 === m && r.i && .8 < g && (r.i = 0, 13 > ka ? Lb("Not leaving now, there are souls to catch!", 3) : la || (la = 1, Lb("Well done. They will be punished.<br>Thanks for playing", 
      1 / 0))), 13 > m && Ua[m]();
    }
    ta();
    for (m = 0; 28 > m; ++m) {
      Xa(Ta[28 + m].p, Tb, m);
    }
    for (let v, C = 0, D = 656; 26 > C; ++C, ++D) {
      v = Ta[2 + C].p, Tb[D++] = v.m41, Tb[D++] = v.m42, Tb[D++] = v.m43;
    }
  })();
};
const e = new DOMMatrix(), k = new DOMMatrix(), Wa = new Float32Array(16), Vb = new Uint8Array(65536), Tb = (document.body.innerHTML += '<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle."</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}', 
new Float32Array(760)), Z = hC.getContext("webgl2", {powerPreference:"high-performance",}), Y = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const b in Y) {
  [Z, Y].map(c => c[b[0] + [...b].reduce((h, l, m) => (h * m + l.charCodeAt(0)) % 434, 0).toString(36)] = c[b]);
}
Hb(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      const l = [], m = (A, F, P) => {
        ca ? 1100 < hC.width && A.d97(4, Ta[55].v - Ta[53].u, 5123, 2 * Ta[53].u) : (A.das(4, Ta[F].v - Ta[F].u, 5123, 2 * Ta[F].u, Ua.length), A.d97(4, Ta[P ? 53 : 56].u - 3, 5123, 6));
      }, g = (A, F, P = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",) => {
        const T = {}, y = (p, q,) => (q = A.c6x(q), A.s3c(q, p), A.c6a(q), q), E = A.c1h();
        return A.abz(E, y(P, 35633)), A.abz(E, y(F, 35632)), A.l8l(E), p => p ? T[p] || (T[p] = A.gan(E, p)) : A.u7y(E);
      }, r = A => {
        var F = (A - (aa || A)) / 1e3;
        wa += F;
        a += va = ca ? 0 : hb(.055, F);
        aa = A;
        requestAnimationFrame(r);
        0 < va && (Kb(), pa = N(pa, d[15].g, .2 + .3 * gb(2 * d[15].g - 1)), oa = la ? (ha = 0, N(oa, -9, .015)) : N(oa, kb(a / 3), 1), Fa && a > Fa && (Fa = 0, h4.innerHTML = ""), cc(), Y.u3a(M("j"), Tb), Y.cbf(!0, !0, !0, !0), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(M("b"), !1, Xa(Ya().rotateSelf(0, 180).invertSelf().translateSelf(-Ma, -Na, .3 - Sa)),), m(Y, 56, 1), Y.c4s(256), Y.cbf(!1, !0, !1, !0), Y.uae(M("b"), !1, Xa(Ya().translateSelf(-Ma, -Na, -Sa - .3))), m(Y, 56, 1), Y.f1s(), fa = 0);
        z();
        Z.u3a(z("j"), Tb);
        Z.b6o(36160, t);
        Z.v5y(0, 0, 2048, 2048);
        Z.ubh(z("g"), 4);
        Z.ubh(z("h"), 4);
        Z.uae(z("a"), !1, Xa(e));
        A = Ba;
        F = Ca;
        let P = Da;
        ca ? (Ya().rotateSelf(0, 40 * Math.sin(wa) - 80, -8), Xa(k, Tb, 25), Xa(k, Tb, 26), Xa(k, Tb, 27), Ya(ja).invertSelf(), cb(3.6, 3.5), A = Za, F = $a, P = 5, Ya(e, C).rotateSelf(20, 0).translateSelf(-A, -F, -P).rotateSelf(0, 99)) : Ya(e, C).rotateSelf(-Ka, -La).invertSelf().translateSelf(-A, -F, -P,);
        I(54.7);
        m(Z, 57, ha);
        ba(126);
        m(Z, 57, ha);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.c4s(16640);
        Z.ubh(z("g"), 0);
        Z.ubh(z("h"), 1);
        Z.ubu(z("k"), A, F, P);
        Z.uae(z("a"), !1, Xa(ja));
        Z.uae(z("b"), !1, Xa(C));
        Z.uae(z("i"), !1, D);
        m(Z, 57, ha);
        H();
        Z.uae(H("b"), !1, Xa(C.invertSelf()));
        Z.ubu(H("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, wa);
        Z.d97(4, 3, 5123, 0);
      }, v = new DOMMatrix(), C = new DOMMatrix(), D = new Float32Array(32), f = h, t = Z.c5w(), z = g(Z, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), M = g(Y, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), 
      H = g(Z, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [I, ba] = db(2, A => {
        const F = Z.c25();
        return Z.a4v(33984 + A), Z.b9j(3553, F), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), P => {
          let T = 0, y = 0, E = 0, p = 1 / 0, q = 1 / 0, x = 1 / 0, u = -1 / 0, J = -1 / 0, K = -1 / 0;
          Z.fas(36160, 36096, 3553, F, 0);
          Z.c4s(256);
          Ya().scale3dSelf(P *= 1.1).multiplySelf(Ya(ia[A], v).multiplySelf(C).invertSelf(),);
          for (let O = 0, V = 0; 8 > O; ++O) {
            cb(4 & O ? 1 : -1, 2 & O ? 1 : -1, 1 & O ? 1 : -1), T -= l[V++] = (0 | Za) / (P * bb), y -= l[V++] = (0 | $a) / (P * bb), E -= l[V++] = (0 | ab) / (P * bb);
          }
          Ya().rotateSelf(298, 139).translateSelf(T / 8, y / 8, E / 8);
          for (let O = 0, V = 0; 8 > O; ++O) {
            cb(l[V++], l[V++], l[V++]), u = ib(u, Za), J = ib(J, $a), K = ib(K, ab), p = hb(p, Za), q = hb(q, $a), x = hb(x, ab);
          }
          E = 10 + A;
          x *= 0 > x ? E : 1 / E;
          K *= 0 < K ? E : 1 / E;
          Z.uae(z("b"), !1, Xa(Ya(e, v).scaleSelf(2 / (u - p), 2 / (J - q), 2 / (x - K),).translateSelf((u + p) / -2, (J + q) / -2, (x + K) / 2).multiplySelf(k,), D, A,), 16 * A, 16,);
        };
      });
      Z.a4v(33986);
      Z.b9j(3553, Z.c25());
      Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, f);
      Z.t2z(3553, 10241, 9987);
      Z.t2z(3553, 10240, 9729);
      Z.gbn(3553);
      Z.b6o(36160, t);
      Z.d45([0]);
      Z.r9l(0);
      z();
      Z.ubh(z("q"), 2);
      H();
      Z.ubh(H("q"), 2);
      Z.c5t(0, 0, 0, 1);
      Z.d4n(515);
      Z.e8z(2929);
      Z.e8z(2884);
      Y.e8z(2929);
      Y.e8z(2884);
      Y.v5y(0, 0, 128, 128);
      M();
      Y.uae(M("a"), !1, Xa(Jb(1e-4, 2, 1.2, .4)));
      bc();
      Kb();
      requestAnimationFrame(r);
    }
  }, h = new Image();
  h.onload = c;
  h.src = Ja;
  Ib(() => {
    Hb(() => {
      let f = 0;
      const t = [], z = [], M = [], H = [], I = new Int32Array(8), ba = new Map(), A = new Int32Array(I.buffer, 0, 5), F = new Float32Array(I.buffer);
      Ta.map((y, E) => {
        let p;
        const q = x => {
          let {x:u, y:J, z:K} = p[x], O = (F[0] = u, F[1] = J, F[2] = K, ba.get(x = "" + (p.m ? A : I)));
          return void 0 !== O ? (u = 3 * O, H[u] = (H[u++] + I[5]) / 2, H[u] = (H[u++] + I[6]) / 2, H[u] = (H[u] + I[7]) / 2) : (ba.set(x, O = ba.size), z.push(u, J, K, F[3]), M.push(I[4]), H.push(I[5], I[6], I[7])), O;
        };
        for (p of (F[3] = 55 < E ? -28 : E, y.h)) {
          const {x, y:u, z:J} = vb(p);
          I[4] = 0 | p.o;
          I[5] = 32767 * x;
          I[6] = 32767 * u;
          I[7] = 32767 * J;
          for (let K = 2, O = q(0), V = q(1); p.length > K; ++K) {
            t.push(O, V, V = q(K));
          }
        }
        y.h = 0;
        y.u = f;
        y.v = f = t.length;
      });
      [Z, Y].map(y => {
        y.b11(34962, y.c1b());
        y.b2v(34962, new Float32Array(z), 35044);
        y.v7s(0, 4, 5126, !1, 0, 0);
        y.b11(34962, y.c1b());
        y.b2v(34962, new Int16Array(H), 35044);
        y.v7s(1, 3, 5122, !0, 0, 0);
        y.b11(34962, y.c1b());
        y.b2v(34962, new Uint32Array(M), 35044);
        y.v7s(2, 4, 5121, !0, 0, 0);
        y.b11(34963, y.c1b());
        y.b2v(34963, new Uint16Array(t), 35044);
        y.e3x(0);
        y.e3x(1);
        y.e3x(2);
      });
      let P = [], T = [];
      try {
        const [y, E, p, q, x] = JSON.parse(localStorage["Dante-22"]);
        P = y;
        T = E;
        Ea = p;
        pa = q;
        a = x;
      } catch {
      }
      d.map((y, E) => y.t = y.g = y.i = 14 !== E && P[E] ? 1 : 0);
      Ua.map((y, E) => y.i = T[E] ? 1 : 0);
      Mb();
      oa = ka || 14 !== Ea ? 1 : 0;
      Hb(c);
    });
    var l = [-110, -100, -92, -82, -106, -97, -88];
    const m = f => n(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f,), g = f => {
      d.push({p:qa, q:f,});
      Q(B(5), f.translate(.2).rotate(90, 90).scale(.4, .1, .5), G(.4, .5, .5));
      Q(B(5), f.translate(-.2).rotate(90, 90).scale(.4, .1, .5), G(.4, .5, .5));
      Q(B().slice(0, -1), f.translate(0, -.4).scale(.5, .1, .5), G(.5, .5, .4));
    }, r = f => L(w(B().slice(0, -1), n(0, -f / 2).scale(6, f - 1, 2.2)), w(B().slice(0, -1), n(0, -f / 2 - 4).scale(4, f - 5, 4)), w(B(28, 1), n(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), v = L(w(B(), n(0, -.5, 1).scale(1.15, 1.2, 6.5), G(.25, .25, .35, .3)), L(w(B(3), n(0, 0, -5.5).scale(3, 2), G(.6, .3, .4, .3)), w(B(), n(0, 0, -3.65).scale(2.5, 3), G(.6, .3, .4, .3)),), ...[-1, 1].map(f => w(B(), n(1.2 * f, -.5, 1).scale(.14, .3, 6.5), G(.7, .2, 0, .3))),), C = [w(B(), n(0, -3).scale(11, 
    1.4, 3), G(.9, .9, .9, .2)), w(B(), n(0, -2.2).scale(7.7, .5, 4), G(.5, .5, .5, .2)), db(12, f => w(B(), n(f - 5.5, 4.4).scale(.1, .1, 2), G(.6, .5, .3, .2))).flat(), w(L(w(B(6), e.rotate(90).scale(6, 8, 6)), w(B(4, 0, .01), n(0, 6).scale(12, 2, .75).rotate(0, 45)), w(B(6), e.rotate(90).scale(5, 12, 5)), ...[-5, 0, 5].map(f => w(B(5), n(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),), e, G(.3, .6, .6, .3),),].flat(), D = db(11, f => tb(fb(pb(16), m(f), G(1, 1, .8, .2)).reverse(), fb(pb(16), 
    m(f + 1), G(1, 1, .8, .2)), 1,)).flat();
    R();
    Q([Va.slice(1)], n(-2).scale3d(3).rotate(90, 0));
    R();
    g(n(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, t) => {
      Q(B(), n(0, 0, t ? 22 : -23).scale(3, 1, 8), G(.9, .9, .9, .2));
      Q(B(), n(0, 6.3, f).scale(4, .3, 1), G(.3, .3, .3, .4));
      Q(B().slice(0, -1), n(0, 1, f).scale(3, .2, .35), G(.5, .5, .5, .3));
    });
    Q(B(), n(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), G(.8, .8, .8, .2));
    Q(B(), n(3, 1.5, -20).scale(.5, 2, 5), G(.7, .7, .7, .2));
    Q(B(5), n(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), G(.6, .3, .3, .4));
    Q(B(), n(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), G(.75, .75, .75, .2));
    Q(L(Fb(L(w(B(6, 0, 0, .3), n(0, -.92).scale(13, 2, 13), G(.8, .8, .8, .2)), w(B(), e.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), G(.5, .5, .5, .5)),), w(B(), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), G(.8, .2, .2, .5),), w(B(6), n(0, -8).scale(9, 8, 7), G(.2, .1, .4, .5)), w(B(6, 0, 0, .3), n(8, -4, -4).scale(14, 2, 13), G(.7, .7, .7, .2)),), w(B(6), n(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), G(.5, .5, .5, .5)), w(B(5, 0, 1.5), n(0, 1).scale(4.5, 
    .3, 4.5), G(.7, .5, .9, .2)), w(B(5), e.scale(5, 30, 5), G(.4, .2, .6, .5)),),);
    g(n(15.8, -2, 3.8));
    Q(B(), n(-18.65, -3, 55).scale(2.45, 1.4, 2.7), G(.9, .9, .9, .2));
    g(n(-55, -1.1, 46).rotate(0, 90));
    Q(B(7), n(-57, -2.6, 46).scale(4, 1, 4), G(.8, .8, .8, .3));
    Q(B(6), n(-61.3, -2.4, 49).scale(3, 1, 5), G(.4, .6, .6, .3));
    Q(C, n(-53, 0, 55));
    Q(B(), n(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), G(.7, .7, .7, .2));
    Q(B(3, 0, -.5), n(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), G(.8, .8, .8, .2),);
    Q(L(w(B(), n(-100, 1, 63).scale(7.5, 4), G(.5, .5, .5, .4)), w(B(), n(-100, 0, 63).scale(2, 2, 4), G(.5, .5, .5, .4)), w(B(20, 1), n(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), G(.5, .5, .5, .4)),),);
    Q(L(Fb(w(B(), n(-100, -2.6, 70).scale(3, 1.1, 7), G(.8, .8, .8, .2)), w(B(), n(-100, -2.4, 55).scale(8, .9, 8), G(.8, .8, .8, .2)), w(B(), n(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), G(.8, .8, .8, .2)), w(B(6), n(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), G(.6, .6, .6, .3)), w(B(), n(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), G(.8, .8, .8, .2)), w(B(), n(-100, .42, 92).scale(3, 1.1, 4.1), G(.8, .8, .8, .2)), w(B(), n(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), G(.8, .8, 
    .8, .2)),), w(B(8), n(-100, -1, 55).scale(7, .9, 7), G(.3, .3, .3, .4)), w(B(8), n(-100, -2, 55).scale(4, .3, 4), G(.4, .4, .4, .5)), w(B(8, 0, -3.1), n(-100, -3, 55).scale(.4, 1, .4), G(.4, .4, .4, .5)),),);
    Va.map(({x:f, z:t}) => {
      Q(B(6), n(3 * f, 3, 15 * t).scale(.7, 4, .7), G(.6, .3, .3, .4));
      Q(B(6), n(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), G(.6, .15, .15, .8));
      [4, -.4].map(z => Q(B(6), n(7 * f - 100, z, 7 * t + 55).scale(1.3, .5, 1.3), G(.4, .2, .2, .8),));
      [1.5, 8].map(z => Q(B(15, 1), n(9 * f - 38.9, z - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), G(.6, .6, .6, .3),));
      Q(B(14, 1).slice(0, -2), n(9 * f - 38.9, -18, 11 * t + 17).scale(1, 14.2), G(.25, .25, .25, 1),);
    });
    db(7, f => {
      Q(B((23 * f + 1) % 5 + 5, 0, .5), n(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3,), G(.5 - f / 17, .5 - (1 & f) / 9, .6, .3),);
    });
    Q(B(), n(-87, -9.5, 24).scale(7, 1, 3), G(.4, .5, .6, .4));
    Q(B(4), n(-86, -9.2, 27).scale(5, 1, 5), G(.5, .6, .7, .3));
    Q(B(12, 1), n(-86, -9, 31).scale(1.5, 1, 1.5), G(.3, .3, .4, .1));
    g(n(-86, -7.5, 31));
    Q(B(5), n(-38.9, -11.1, 10).scale(2, 1.2, 2), G(.2, .4, .7, .3));
    Q(L(Fb(w(B(), n(-38.9, -11.3, 17).scale(11, 1, 13), G(.3, .4, .6, .3)), w(B(5), n(-38.9, -11.1, 17).scale(9, 1, 9), G(0, .2, .3, .5)),), w(B(5), n(-38.9, -11.1, 17).scale3d(5.4), G(0, .2, .3, .5)),),);
    g(n(-38.9, -9.4, 10));
    Q(L(Fb(w(B(6), n(0, 0, -18).scale(15, 1.3, 15), G(.7, .7, .7, .3)), w(B(5), e.scale(4.5, 1.2, 9), G(.45, .4, .6, .3)),), ...db(6, f => db(6, t => w(B(6), n(4.6 * t - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32,).scale3d(2), G(.7, .7, .7, .3),))).flat(),), n(-38.9, -11.3, -1),);
    g(n(-84, -.7, 85).rotate(0, 45));
    Q(B(5), n(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), G(.8, .1, .25, .4));
    g(n(-116, -1.4, -18).rotate(0, 180));
    Q(L(w(B(), n(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...l.map(f => w(B(), n(f, .05, -3).scale(1.35, 2, 9))),), e, G(.5, .5, .6, .2),);
    Q(B(), n(-96.5, 1, -2).scale(19, .3, .3), G(.5, .5, .6, .2));
    Q(B(6), n(-116, -2.6, -16.5).scale(3.2, .8, 3), G(.6, .5, .7, .2));
    Q(B(), n(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), G(.8, .8, .8, .2));
    Q(B().slice(0, -1), n(-115.5, -17, -12).scale(.5, 15, 2.2), G(.6, .6, .6, .3));
    Q(B(8).slice(0, -2), n(-114, -17, -2).scale(2, 15, 2), G(.6, .6, .6, .3));
    Q(B(8).slice(0, -2), n(-79, -17, -2).scale(2, 15, 2), G(1, 1, 1, .3));
    Q(B().slice(0, -1), n(-77, -17, -50.5).scale(2.2, 15, .5), G(.6, .6, .6, .3));
    Q(L(w(B(12).slice(0, -1), n(-77, -14.5, -12).scale(4, 17.5, 4), G(.7, .7, .7, .2)), w(B(12), n(-77, 3.1, -12).scale(3, 5, 3), G(.4, .5, .6, .2)), w(B(), n(-79, .1, -12).scale(3.5, 2, 1.3), G(.4, .5, .6, .2)), w(B(), n(-77, .1, -14).scale(1.5, 2, 2), G(.4, .5, .6, .2)),),);
    Q(L(w(B(), n(-93, -5.8, -40).scale(9, 1, 5), G(.8, .8, .8, .1)), w(B(9), n(-98, -5.8, -40).scale(3, 8, 3), G(.7, .7, .7, .2)),),);
    Q(B(), n(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), G(.6, .6, .6, .3));
    Q(B(9).slice(0, -1), n(-98, -18.4, -40).scale(2.5, 13.5, 2.5), G(.5, .5, .5, .3));
    g(n(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, t) => {
      Q(L(w(B(), n(-4 * f, 3.5, -.5).scale(4, 4, .7), G(.5, .5, .5, .4)), w(B(5), n(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), G(.6, .24, .2, .5)), w(B(), e.scale(3, 3, 10), G(.6, .24, .2, .5)), w(B(5), n(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), G(.6, .24, .2, .5),), w(B(32, 1), n(0, 3, -5).scale(3, 4, 10).rotate(90, 0), G(.6, .24, .2, .5)),), n(f - 100, .7, 97),);
      Q(B(12, 1), n(-7.5 * f - 100, 3.7, 96).scale(.8, 4, .8), G(.6, .24, .2, .5));
      [7.2, 1.5].map(z => Q(B(15, 1), n(-7.5 * f - 100, z + .7, 96).scale(1.1, .5, 1.1), G(.5, .24, .2, .4),));
      Q(D, n(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      Q(D, n(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      db(5, z => Q(D, n(18.5 * (t - .5), 0, 4.8 * z - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),));
    });
    Q(L(w(B(), n(-82.07, .8, 106).scale(11, .9, 2.2), G(.7, .7, .7, .1)), w(B(45, 1), n(-81, .7, 106).scale3d(7.7), G(.7, .7, .7, .1)),),);
    Q(B(), n(-50.7, 1, 99).scale(2, .65, 1), G(.7, .7, .7, .2));
    Q(B(), n(-58, 1, 106).scale(2, .65, 2), G(.7, .7, .7, .2));
    Q(B(), n(-34.2, .4, 91).scale(3, 1, 3), G(.7, .7, .7, .3));
    Q(B(), n(-42, .4, 91).scale(5, 1, 2.5), G(.7, .7, .7, .3));
    Q(B(5), n(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), G(.2, .5, .5, .6));
    g(n(-34, 2.7, 96).rotate(-12, 0));
    Q(L(Fb(w(B(), n(-101.5, .7, 93.5).scale(10.5, 1, 2), G(.7, .7, .7, .2)), w(B(6, 0, 0, .6), n(-100, .7, 105.5).scale(8, 1, 11), G(.7, .7, .7, .2)),), w(B(5), n(-100, .7, 113).scale(4, 3, 4), G(.7, .7, .7, .2)),),);
    db(3, f => {
      Q(r(16), n(-77, -9, -12 * f - 20).rotate(0, 90), G(.6, .6, .6, .3));
      Q(r(16), n(12 * f - 109, -9, -12), G(.6, .6, .6, .3));
      Q(r(24.7 - .7 * (1 & f)), n(6 * f - 6, 4 - (1 & f), 111 - .2 * (1 & f)), 1 & f ? G(.5, .5, .5, .3) : G(.35, .35, .35, .5),);
    });
    Q(L(Fb(w(B(), n(0, 16, 111).scale(3, 1, 3.8), G(.5, .3, .3, .4)), w(B(6, 0, 0, .3), n(0, -.92, 95).scale(14, 2, 14), G(.8, .8, .8, .2)), w(B(), n(0, 16, 110.5).scale(12, 1, 3), G(.5, .3, .3, .4)),), w(B(5), n(0, 0, 95).scale3d(6), G(.3, .3, .3, .5)), w(B(5), n(0, 16, 103.5).scale(5.5, 5, 5.5), G(.5, .3, .3, .4)),),);
    g(n(0, 1.7, 82).rotate(0, 180));
    Q(B(5).slice(0, -1), n(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), G(.5, .3, .3, .4),);
    Q(B(6), n(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), G(.5, .6, .7, .3));
    Q(B(), n(0, 16, 127.8).scale(1.5, 1, .7), G(.5, .6, .7, .3));
    Q(B(7), n(0, 15.1, 133).scale(5, 2, 5), G(.4, .5, .6, .4));
    Ub(n(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Ub(n(0, 2.8), [5, 10, 3], [-5, 10, 3], ...pb(18).map(({x:f, z:t}) => [7 * f, 10 * t, 4.5 - 2 * gb(f)]),);
    Ub(n(0, 3, 95), ...pb(9).map(({x:f, z:t}) => [9 * f, 9 * t, 4]),);
    Ub(n(0, 19, 134), [0, 0, 3.5]);
    Ub(n(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Ub(n(-89, .2, 80), [0, 0, 6]);
    Ub(n(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Ub(n(-115, .2, -12), [0, 0, 3.5]);
    Ub(n(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    R();
    Q(B(5), n(0, -.2).scale(5, 1, 5), G(.6, .65, .7, .3));
    g(n(0, 1.2));
    db(2, () => {
      R();
      Va.map(({x:f, z:t}) => {
        Q(B(11, 1).slice(0, -2), n(4 * f, 4, 4 * t).scale(.8, 3, .8), G(.5, .3, .7, .6),);
        Q(B(), n(4 * f, 7, 4 * t).scale(1, .3), G(.5, .5, .5, .3));
      });
      Q(L(w(B().slice(0, -1), e.scale(5, 1, 5), G(.8, .8, .8, .3)), ...[-1, 1].map(f => w(B(25, 1), n(5 * f, .2).rotate(-30 * f).scale(4, 1, 3), G(.8, .8, .8, .3),)),),);
      Q(B(), n(0, -3).scale(8, 2, 8), G(.4, .4, .4, .3));
    });
    R();
    Q(L(Fb(w(B(), e.scale(1.5, 1, 5), G(.9, .9, .9, .2)), w(B(), n(0, -2).scale(2, 3.2, 1.9), G(.3, .8, .5, .5)), w(B(6), e.scale(4, 1, 5), G(.9, .9, .9, .2)), w(B(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), G(.9, .9, .9, .2)),), w(B(), e.scale(1.3, 10, 1.3), G(.2, .7, .4, .6)),),);
    Ub(n(0, 2.8), [0, 0, 4.5]);
    R();
    Q(B(3), n(-23, -1.7, 55.8).scale(5, .7, 8.3), G(.3, .6, .6, .2));
    Q(B(8), n(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), G(.8, .8, .8, .2));
    Q(B(), n(-23, -2.2, 62).scale(3, 1, 4), G(.5, .5, .5, .3));
    Q(B(), n(-23, -3, 55).scale(5.2, 1.7, 3), G(.5, .5, .5, .3));
    g(n(-23, -.5, 66.5));
    R();
    Q(B(), n(-22.55, -3, 55).scale(1.45, 1.4, 2.7), G(.7, .7, .7, .2));
    Q(L(w(B(), e.scale(3, 1.4, 2.7)), w(B(), e.scale(1.2, 8, 1.2))), n(-33, -3, 55), G(.7, .7, .7, .2),);
    R();
    Q(L(w(B(), e.scale(3, 1.4, 2.7)), w(B(), e.scale(1, 3))), n(-27, -3, 55), G(.9, .9, .9, .2),);
    Q(B(), n(-39, -3, 55).scale(3, 1.4, 2.7), G(.9, .9, .9, .2));
    R();
    Q(B(6), n(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), G(.7, .7, .7, .4));
    R();
    [0, 12, 24].map(f => Q(B(), n(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), G(.2, .5, .6, .2)));
    R();
    [6, 18].map(f => Q(B(), n(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), G(.1, .4, .5, .2)));
    R();
    Q(B(5), n(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), G(.3, .3, .5, .5));
    Q(B(5).slice(0, -1), n(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), G(.6, .3, .5, .5));
    Q(L(w(B(5), n(0, 2).scale(5, 7, 5).skewY(8)), w(B(5), n(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), w(B(), e.scale(2, 8, 3)),), n(-38.9, -11.3, 17), G(.2, .4, .5, .5),);
    Ub(n(-39.1, -.6, 17).rotate(11), ...pb(15).map(({x:f, z:t}) => [3 * f, 3 * t, 1.2]),);
    l.map((f, t) => {
      t % 2 || 6 <= t || R();
      Q(v, n(f, 1.9, -12));
    });
    db(4, f => {
      R();
      Q(B(6), n(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), G(.5 - f / 8, f / 12 + .5, .7, .3),);
    });
    [G(.1, .55, .45, .2), G(.2, .5, .5, .3), G(.3, .45, .55, .4)].map((f, t) => {
      R();
      Q(B(), n(-23.5, .5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && Q(B(), n(-29.1, .4, 91).scale(2.1, 1, 3), G(.7, .7, .7, .3));
      1 === t && Q(B(), n(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), G(.6, .6, .7, .3),);
    });
    R();
    Q(B(5), e.scale(5, 1.1, 5), G(.5, .3, .3, .4));
    Q(B(5), e.scale(5.5, .9, 5.5), G(.25, .25, .25, .4));
    g(n(0, 1.5, -1).rotate(0, 180));
    db(4, f => {
      R();
      db(7, t => Q(w(B(8, 1).slice(0, -1), n((2 < f ? 3.5 : 4) * (t / 6 - .5), 3).scale(.2, 2 < f ? 4 : 3, .2), G(.3, .3, .38),),),);
    });
    R();
    Q(C);
    R();
    Q(B(5).slice(0, -1), n(-7.5, 2.7).rotate(0, 90).scale(1, .2), G(.5, .5, .5, .5));
    Q(B(10).slice(0, -1), n(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), G(.3, .8, .7, .3));
    Q(B(15, 1), n(-7.5).rotate(0, 90).scale(3, 2.3, 3), G(.4, .4, .4, .3));
    g(n(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => Q(D, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    Q(L(w(B(10), e.scale(6, 2, 6), G(.1, .6, .5, .3)), w(B(10), e.scale(3.3, 6, 3.3), G(.1, .6, .5, .5)),),);
    Ub(n(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    R();
    Q(B(3), n(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), G(.5, .3, .3, .4));
    [22, 30].map(f => {
      Q(B(6), n(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), G(.7, .7, .7, .4));
      Q(B(), n(0, 6.2, f + 95).scale(.5, 11, .5), G(.5, .3, .3, .4));
    });
    R();
    Q(B(5).slice(0, -1), n(0, 2).scale(1, 2), G(.3, .3, .3, .2));
    Q(B(8).slice(0, -1), n(0, 2).scale(3, 1.5, 3).rotate(0, 22), G(.7, .7, .7, .1));
    Q(L(w(B(28, 1), e.scale(7.5, 1, 7.5), G(.45, .45, .45, .2)), w(B(), n(0, 0, -5.5).scale(1.5, 3, 2.7), G(.45, .45, .45, .2)),),);
    Ub(n(0, 3), ...pb(14).map(({x:f, z:t}) => [5.6 * f, 5.6 * t, 2]),);
    R();
    [-1, 1].map(f => Q(D, e.rotate(0, 90).translate(-5 * f, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    Q(L(w(B(28, 1).slice(0, -1), n(0, 2).scale(7.5, 1, 7.5), G(.35, 0, 0, .3)), w(B().slice(0, -1), n(0, 2).scale(9, 1.1, 2), G(.3, 0, 0, .3)),),);
    Q(B(5).slice(0, -1), n(0, 1).scale(1, .2), G(.3, .3, .3, .2));
    Q(B(28, 1), e.scale(7.5, 1, 7.5), G(.45, .45, .45, .2));
    R();
    Q(L(w(B(28, 1).slice(0, -1), n(0, 2).scale(7.5, 1, 7.5), G(.35, 0, 0, .3)), w(B().slice(0, -1), n(0, 2, 7).scale(2, 1.1, 9), G(.3, 0, 0, .3)), w(B().slice(0, -1), n(7, 2).scale(9, 1.1, 2), G(.3, 0, 0, .3)),),);
    Q(B(5).slice(0, -1), n(0, 1).scale(1, .2), G(.3, .3, .3, .2));
    Q(B(28, 1), e.scale(7.5, 1, 7.5), G(.45, .45, .45, .2));
    R();
    Q(L(w(B(28, 1).slice(0, -1), n(0, 2).scale(7.5, 1, 7.5), G(.35, 0, 0, .3)), w(B().slice(0, -1), n(0, 2, -7).scale(2, 1.1, 9), G(.3, 0, 0, .3)), w(B().slice(0, -1), n(7, 2).scale(9, 1.1, 2), G(.3, 0, 0, .3)),),);
    Q(B(5).slice(0, -1), n(0, 1).scale(1, .2), G(.3, .3, .3, .2));
    Q(B(28, 1), e.scale(7.5, 1, 7.5), G(.45, .45, .45, .2));
    db(2, () => {
      R();
      Q(L(w(B(30, 1, 1.15, 1), n(0, -3).scale(3.5, 1, 3.5), G(.7, .4, .25, .7)), w(B(), n(4, -1.2).scale3d(2), G(.7, .4, .25, .3)), w(B(30, 1, 1.3, 1), n(0, -2.5).scale(2.6, 1, 3), G(.7, .4, .25, .2)),),);
      g(n(0, -3, 4));
    });
    for (l = 0; 16 > l; ++l) {
      R(), Q(B(9, 1), n(0, .8).scale(.2, .3, .2), G(.7, 1, .2)), Q(B(6, 1).slice(0, -1), e.scale(.12, 1.2, .12), G(.3, .3, .5, .1)), Q(B(3), n(0, -1).rotate(90, 90).scale(.3, .4, .3), G(.2, .2, .2, .1));
    }
    R();
    Q(ub(20), n(0, 1).scale3d(.5), G(1, .3, .4));
    Q(ub(30), e.scale(.65, .8, .55), G(1, .3, .4));
    Q(B(), n(0, .9, .45).scale(.15, .02, .06), G(.3, .3, .3));
    [-1, 1].map(f => {
      Q(D, e.rotate(0, 0 < f ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), G(1, 1, .8),);
      Q(w(L(B(15, 1), w(B(), n(0, 0, 1).scale(2, 2, .5))), e.rotate(-90, 0).scale(.1, .05, .1), G(.3, .3, .3),), n(.2 * f, 1.2, .4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1].map(f => {
      R();
      Q(B(20, 1), n(.3 * f, -.8).scale(.2, .7, .24), G(1, .3, .4));
    });
    R();
    Q(B(6, 1).slice(0, -1), e.scale(.77, 1, .77), G(1, .3, .5));
    R();
    Q(ub(28, 22, (f, t, z) => {
      var M = t / 22, H = f * Math.PI * 2 / 28, I = Math.sin(M ** .6 * Math.PI / 2);
      f = M * M * Math.sin(f * Math.PI * .5) / 4;
      return 21 < t ? {x:z.m = 0, y:-.5, z:0,} : {x:Math.cos(H) * I, y:Math.cos(M * Math.PI) - M - f, z:Math.sin(H) * I + Math.sin(f * Math.PI * 2) / 4,};
    }), e.scale3d(.7), G(1, 1, 1),);
    [-1, 1].map(f => Q(ub(10), n(.16 * f, .4, -.36).scale3d(.09)));
  });
});

