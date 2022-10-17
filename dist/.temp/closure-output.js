let ba, ca, fa, ha, ja, ka, la, na, oa, pa, qa, sa, ta, ua, va, wa, xa = 0, a = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ia = 14, Ja = .1;
const La = Math.PI / 180, Ma = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
);
var Na = 0, Oa = 180, Pa = 0, Sa = 0, Ta = 0;
const Ua = [], d = [], Va = [], Wa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], Ya = (b, c = Xa, h = 0,) => (h *= 16, c[h++] = b.m11, c[h++] = b.m12, c[h++] = b.m13, c[h++] = b.m14, c[h++] = b.m21, c[h++] = b.m22, c[h++] = b.m23, c[h++] = b.m24, c[h++] = b.m31, c[h++] = b.m32, c[h++] = b.m33, c[h++] = b.m34, c[h++] = b.m41, c[h++] = b.m42, c[h++] = b.m43, c[h] = b.m44, c), n = (b = e, c = k,) => (c.m11 = b.m11, c.m12 = b.m12, c.m13 = b.m13, c.m14 = b.m14, c.m21 = b.m21, c.m22 = b.m22, 
c.m23 = b.m23, c.m24 = b.m24, c.m31 = b.m31, c.m32 = b.m32, c.m33 = b.m33, c.m34 = b.m34, c.m41 = b.m41, c.m42 = b.m42, c.m43 = b.m43, c.m44 = b.m44, c), db = (b = 0, c = 0, h = 0, l = 1) => {
  $a = k.m11 * b + k.m21 * c + k.m31 * h + k.m41 * l;
  ab = k.m12 * b + k.m22 * c + k.m32 * h + k.m42 * l;
  bb = k.m13 * b + k.m23 * c + k.m33 * h + k.m43 * l;
  cb = k.m14 * b + k.m24 * c + k.m34 * h + k.m44 * l;
};
var $a, ab, bb, cb;
const w = NO_INLINE((b, c, h) => e.translate(b, c, h)), eb = (b, c) => Array.from(Array(b), (h, l) => c(l)), fb = (b, c, h) => (b.m = h, b.o = c, b), ib = (b, c, h = b.o) => (n(c), fb(b.map(({x:l, y:m, z:g}) => (db(l, m, g), {x:$a, y:ab, z:bb,})), h, b.m,)), A = (b, c, h) => b.map(l => ib(l, c, h)), jb = NO_INLINE(b => 0 > b ? -b : b), kb = NO_INLINE((b, c) => c > b ? b : c), lb = NO_INLINE((b, c) => b > c ? b : c), mb = (b, c) => jb(b) > c ? b : 0, nb = (b, c = 0, h = 1) => c > b ? c : b > h ? h : 
b, ob = b => Math.atan2(Math.sin(b * La), Math.cos(b * La)) / La, pb = (b, c, h) => b + (2 * (c = (c - b) % 360) % 360 - c) * nb(h) || 0, qb = (b, c, h) => (0 < h ? 1 > h ? b + (c - b) * h : c : b) || 0, rb = (b, c, h = 0) => (b * b + c * c + h * h) ** .5, sb = (b, c = 0) => eb(b, h => {
  const l = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:.01 > jb(l) ? l : 0 > l ? l - c : l + c,};
}), ub = (b, c, h) => b.map((l, m, {length:g}) => fb([l, c[g - m - 1], c[g - (m + 1) % g - 1], b[(m + 1) % g]], b.o, h,)), F = (b, c, h = 0, l,) => (b = b ? sb(b, l) : Wa, l = ib(b, w(0, 1).scale3d(0 < h ? h : 1)), b = ib(b, w(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...ub(b, l, c), l, b]), vb = (b, c = b, h = (l, m) => (m *= Math.PI / c, {x:Math.cos(l *= 2 * Math.PI / b) * Math.sin(m), y:Math.cos(m), z:Math.sin(l) * Math.sin(m),})) => {
  const l = [];
  for (let m = 0; b > m; m++) {
    for (let g = 0; c > g; g++) {
      const r = fb([], 0, 1);
      l.push(r);
      r.push(h(m, g, r));
      g && r.push(h((m + 1) % b, g, r));
      c - 1 > g && r.push(h((m + 1) % b, g + 1 % c, r));
      r.push(h(m, g + 1 % c, r));
    }
  }
  return l;
}, M = NO_INLINE((b, c, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * c << 8 | 255 * b), wb = b => {
  let c, h = 0, l = 0, m = 0, g = b.at(-1);
  for (c of b) {
    h += (g.y - c.y) * (g.z + c.z), l += (g.z - c.z) * (g.x + c.x), m += (g.x - c.x) * (g.y + c.y), g = c;
  }
  return c = rb(h, l, m), h /= c, l /= c, m /= c, {x:h, y:l, z:m, w:h * g.x + l * g.y + m * g.z,};
}, xb = ({x:b, y:c, z:h}, l) => b * l.x + c * l.y + h * l.z, yb = (b, c) => {
  let h;
  var l, m;
  const g = c.h, r = c.s;
  for (var v = 0; g.length > v; ++v) {
    if (-8e-5 > (h = xb(b, g[v]) - b.w) ? m = c : 8e-5 < h && (l = c), m && l) {
      l = [];
      m = [];
      v = g.at(-1);
      let C = xb(v, b) - b.w;
      for (const D of g) {
        h = xb(D, b) - b.w, 8e-5 > C && m.push(v), -8e-5 < C && l.push(v), (8e-5 < C && -8e-5 > h || -8e-5 > C && 8e-5 < h) && (C /= h - C, v = {x:v.x + (v.x - D.x) * C, y:v.y + (v.y - D.y) * C, z:v.z + (v.z - D.z) * C,}, l.push(v), m.push(v)), v = D, C = h;
      }
      l = 2 < l.length && {h:fb(l, g.o, g.m), s:r, k:c,};
      m = 2 < m.length && {h:fb(m, g.o, g.m), s:r, k:c,};
      break;
    }
  }
  return {x:l, y:m,};
}, zb = (b, c, h = wb(c.h)) => {
  let l, m;
  return b ? ({x:l, y:m} = yb(b, c), l || m || b.h.push(c), l && (b.j = zb(b.j, l, h)), m && (b.l = zb(b.l, m, h))) : b = {x:h.x, y:h.y, z:h.z, w:h.w, h:[c], j:0, l:0,}, b;
}, Cb = (b, c, h) => {
  const l = [], m = (g, r) => {
    let {x:v, y:C} = yb(g, r);
    v || C || (0 < h * xb(g, c) ? v = r : C = r);
    v && (g.j ? m(g.j, v) : l.push(v));
    C && g.l && m(g.l, C);
  };
  for (const g of c.h) {
    m(b, g);
  }
  return l;
}, Db = (b, c) => b && (c(b), Db(b.j, c), Db(b.l, c)), Eb = b => (Db(b, c => {
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
}), b), Fb = b => b.length ? b.reduce((c, h) => zb(c, {h, s:0, k:0,}), 0) : b, Gb = (...b) => b.reduce((c, h) => {
  const l = [];
  if (c = Fb(c), h) {
    h = Fb(h);
    Db(c, m => m.h = Cb(h, m, 1));
    Db(h, m => l.push([m, Cb(c, m, -1)]));
    for (let [m, g] of l) {
      for (const r of g) {
        zb(c, r, m);
      }
    }
  }
  return c;
}), O = (b, ...c) => {
  const h = g => {
    let r;
    return g.k && ((r = m.get(g.k)) ? (l.delete(r), g = h(g.k)) : m.set(g.k, g)), g;
  }, l = new Map(), m = new Map();
  return b = Eb(Gb(Eb(Fb(b)), ...c)), Db(b, g => {
    for (const r of g.h) {
      l.set(h(r), r.s);
    }
  }), Array.from(l, ([{h:g}, r]) => {
    const v = g.map(({x:C, y:D, z:f}) => ({x:C, y:D, z:f,}));
    return fb(r ? v.reverse() : v, g.o, g.m);
  });
}, Hb = NO_INLINE(b => 1 - Math.exp(-xa * b)), Q = NO_INLINE((b, c, h) => qb(b, c, Hb(h))), Ib = b => setTimeout(() => {
  h4.innerHTML += ".";
  b();
}, 5), Jb = NO_INLINE(b => {
  let c = 0;
  const h = (g, r, v, C, D, f, t, x, N, K, L, aa, y, G, P, T, B, E, p, z, u, q = c++,) => Ib(() => {
    let J = 0;
    K = 4 * K ** 2;
    u = u.split("+");
    [5513, 4562, 3891].map(H => {
      let I, S, da, ia = 0, U = 0;
      const ya = [], za = Ha => Math.sin(Ha * Math.PI * 2), hb = NO_INLINE(Ha => {
        let Qa, gb, tb = 0, W = 0;
        const Aa = new Int32Array(x + N + K), Sb = 2 > q ? ea => ea % 1 * 2 - 1 : za, Tb = 2 > q ? 1 > q ? ea => .5 > ea % 1 ? 1 : -1 : ea => 2 > (ea = ea % 1 * 4) ? ea - 1 : 3 - ea : za;
        for (let ea = 0, Ab = 0; x + N + K > ea; ++ea, ++Ab) {
          let Ra = 1;
          x > ea ? Ra = ea / x : x + N > ea || (Ra = (1 - (Ra = (ea - x - N) / K)) * 3 ** (-L / 16 * Ra));
          0 > Ab || (Ab -= 4 * H, Qa = 0.00396 * 2 ** ((Ha + r - 256) / 12), gb = 0.00396 * 2 ** ((Ha + D - 256) / 12) * (q ? 1 : 1.0072));
          Aa[ea] = 80 * (Sb(tb += Qa * Ra ** (v / 32)) * g + Tb(W += gb * Ra ** (f / 32)) * C + (t && t * (2 * Math.random() - 1))) * Ra | 0;
        }
        return Aa;
      }), ra = new Int32Array(768 * H), Ub = 2 ** (aa - 9) / H, Vb = Math.PI * 2 ** (B - 8) / H, Bb = p * H & -2;
      for (let Ha = 0; 11 >= Ha; ++Ha) {
        for (let Qa = 0, gb = +"000001234556112341234556011111111112011111111112000001111112"[12 * q + Ha]; 32 > Qa; ++Qa) {
          const tb = (32 * Ha + Qa) * H;
          for (var ma = 0; 4 > ma; ++ma) {
            if (I = 0, gb && (I = u[gb - 1].charCodeAt(Qa + 32 * ma) - 40, I += 0 < I ? 106 : 0), I) {
              var Za = ya[I] || (ya[I] = hb(I));
              for (let W = 0, Aa = 2 * tb; Za.length > W; ++W, Aa += 2) {
                ra[Aa] += Za[W];
              }
            }
          }
          for (let W, Aa = 0; H > Aa; ++Aa) {
            Za = 0;
            ma = 2 * (tb + Aa);
            var Ka = (((W = ra[ma]) || da) && (S = 0.00308 * y, 1 !== q && 4 !== q || (S *= Math.sin(Ub * ma * Math.PI * 2) * z / 512 + .5), S = 1.5 * Math.sin(S), ia += S * U, U += S * (Ka = (1 - G / 255) * (W - U) - ia), W = 4 === q ? U : 3 === q ? Ka : ia, q || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= P / 32, da = 1e-5 < W * W, Za = W * (1 - (Ka = Math.sin(Vb * ma) * T / 512 + .5)), W *= Ka), Bb > ma || (Za += ra[1 + ma - Bb] * E / 255, W += ra[ma - 
            Bb] * E / 255), J + ma >> 1);
            l[Ka] += (ra[ma] = Za) / 65536;
            m[Ka] += (ra[++ma] = W) / 65536;
          }
        }
      }
      J += 768 * H;
    });
    --c || Ib(b);
  }), l = (fa = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), m = fa.getChannelData(1);
  h(69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0, "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U+(059<59<A9<AE<AEHAEHMEHMQMQTY(Y+(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y+(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^+Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]+QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",);
  h(100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195, ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5+-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5+,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5+*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6+5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5+5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",);
  h(255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, "9(((9(((9(((9(((9(((9(((9(((9+9(((Q(((Q(((Q",);
  h(0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, "9(9(9(9(9(9(9(999(9(9(9(999(9(9+9(9(9(9(9(999(9(((((Q",);
  h(221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, "((((Q(((((((Q(((((((Q(((((((Q+Q((Q((Q((Q((Q((Q((((Q",);
}), Kb = (b, c, h, l) => new DOMMatrix([h, 0, 0, 0, 0, l, 0, 0, 0, 0, (c + b) / (b - c), -1, 0, 0, 2 * c * b / (b - c), 0,]);
let Lb = () => {
  let b, c, h, l, m, g, r, v, C, D, f, t, x, N, K, L, aa = !0;
  const y = [], G = () => {
    b4.innerHTML = "Music: " + aa;
    L && (ca || !aa ? L.disconnect() : L.connect(K.destination));
  }, P = () => {
    const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    la = Kb(.3, 181, p, 1.732051);
    ka = [Kb(.3, 55, p, 1.732051), Kb(55, 181, p, 1.732051)];
    l = v = void 0;
    y.length = ha = N = t = x = Ca = Da = 0;
    document.hidden && T(!0);
  }, T = p => {
    if (ca !== p && (ca = p, P(), hB.className = p ? "l m" : "l", G(), p)) {
      try {
        document.exitFullscreen().catch(() => !1), document.exitPointerLock();
      } catch {
      }
    }
  }, B = p => {
    try {
      K || (K = new AudioContext(), (L = K.createBufferSource()).buffer = fa, L.loop = !0, L.start()), hB.requestFullscreen().catch(() => !1);
    } catch {
    }
    T(!1);
    ja = p;
  }, E = (p, z) => p.buttons[z]?.pressed || 0 < p.buttons[z]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  onclick = p => {
    if (!ca && (p.target === hC && (ha = 1), ja)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  b5.onclick = () => T(!0);
  b2.onclick = () => B(1);
  b1.onclick = () => B();
  b4.onclick = () => {
    aa = !aa;
    G();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onkeyup = onkeydown = p => {
    let z;
    p.repeat || (z = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[p.code], (y[z] = !!p.type[5] && !0) && (0 === z && (ha = 1), 1 === z && T(!0)));
  };
  onmousemove = p => {
    ja && (Oa += .1 * p.movementX || 0, Na += .1 * p.movementY || 0);
  };
  hC.ontouchstart = p => {
    if (!ca) {
      for (let {identifier:z, pageX:u, pageY:q} of p.changedTouches) {
        ja && u > hC.clientWidth / 2 ? void 0 === v && (C = 0, g = u, r = q, v = z, f = Na, D = Oa) : void 0 === l && (m = 0, c = u, h = q, l = z);
      }
      b = Ba;
    }
  };
  hC.ontouchmove = p => {
    if (!ca) {
      for (let {identifier:H, pageX:I, pageY:S} of p.changedTouches) {
        var z, u, q, J;
        v === H && (C = 1, Na = f + (S - r) / 2, Oa = D + (I - g) / 2);
        l === H && (H = (c - I) / 19, z = jb(H), q = jb(u = (h - S) / 19), (J = .3 < lb(z, q)) && (m = 1), t = nb(H, -1) * (J && .2 < z), x = nb(u, -1) * (J && .2 < q), 2 < z && (c = 19 * (0 > H ? -1 : 1) + I), 2 < q && (h = 19 * (0 > u ? -1 : 1) + S));
      }
    }
  };
  hC.ontouchend = p => {
    let z;
    document.activeElement === hB && p.preventDefault();
    for (const u of p.changedTouches) {
      u.identifier === v ? (v = void 0, C || (z = 1), C = 0) : u.identifier === l ? (l = void 0, x = t = 0, m || (z = 1), m = 0) : z = 1;
    }
    p.target === hC && z && b && .02 < (p = Ba - b) && .7 > p && (ha = 1);
  };
  Lb = () => {
    Ca = x + (y[4] ? 1 : 0) - (y[5] ? 1 : 0);
    Da = t + (y[2] ? 1 : 0) - (y[3] ? 1 : 0);
    let p = navigator.getGamepads()[0];
    p && (ja && (Na += 80 * xa * mb(p.axes[3], .3), Oa += 80 * xa * mb(p.axes[2], .3)), Ca += E(p, 12) - E(p, 13) - mb(p.axes[1], .2), Da += E(p, 14) - E(p, 15) - mb(p.axes[0], .2), E(p, 9) && T(!0), (p = E(p, 3) || E(p, 2) || E(p, 1) || E(p, 0)) && !N && (ha = 1), N = p);
  };
  document.onpointerlockchange = () => {
    ja = !!document.pointerLockElement;
  };
  document.onvisibilitychange = onblur = onresize = P;
  T(!0);
};
const Mb = (b, c) => {
  1 / 0 > Ja && (Ja = a + c, h4.innerHTML = b);
}, Nb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][na = Va.reduce((b, c) => c.i + b, 0)] + " / XIII";
}, Ob = () => {
  localStorage["Dante-22"] = JSON.stringify([d.map(b => b.i), Va.map(b => b.i), Ia, qa, a,]);
}, R = () => {
  Ua.push({p:sa = new DOMMatrix(), h:ta = [],});
}, V = (b, c = e, h) => ta.push(A(b, c, h)), Qb = (b, ...c) => {
  let h, l, m, g, r = 0, v = 0, C = 1, D = -1;
  const f = () => {
    if (f.i) {
      n(Ua[35].p).translateSelf(y % 4 * 1.2 - 1.7 + Math.sin(a + y) / 7, -2, 1.7 * (y >> 2) - 5.5 + jb(y % 4 - 2) + Math.cos(a / 1.5 + y) / 6,);
    } else {
      let G, P = 1, T = 1 / 0;
      for (let u = 0; c.length > u; u++) {
        let q = c[u], J = rb(x - q[0], N - q[1]);
        P = kb(P, J / q[2]);
        0 > (J -= q[2]) ? G = 1 : T > J && (T = J, t = q);
      }
      let B, E, p, z;
      G || (B = x - t[0], E = N - t[1], p = rb(B, E), z = Math.atan2(-E, B), C && (g = nb(g / (1 + Math.random())), v = (Math.random() - .5) * Math.PI / 2), z += v, D = -Math.cos(z), r = Math.sin(z), .1 < p && (p = kb(p, t[2]) / p, x = B * p + t[0], N = E * p + t[1]));
      C = G;
      g = Q(g, 3 + 6 * (1 - P), 3 + P);
      K = Q(K, x = Q(x, x + D, g), g);
      L = Q(L, N = Q(N, N + r, g), g);
      h = pb(h, Math.atan2(K - l, L - m) / La - 180, Hb(3));
      n(aa).multiplySelf(b).translateSelf(l = K, 0, m = L).rotateSelf(0, h, 7 * Math.sin(1.7 * a),);
      1.6 > (db(), rb(Pa - $a, Sa - ab, Ta - bb)) && (f.i = 1, Mb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][na] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Nb(), Ob());
    }
    Ya(k, Pb, 28 + y);
  };
  let t = c[0], [x, N] = t, [K, L] = t;
  const aa = sa, y = Va.length;
  Va.push(f);
}, X = (b, c = 0, h = 0) => {
  const l = n(e, Ua[++ua].p);
  return l.m41 = b, l.m42 = c, l.m43 = h, l;
}, Wb = NO_INLINE(() => {
  let b, c, h, l, m, g, r, v, C, D, f, t, x, N, K, L, aa = 0, y = 1, G = 2, P = 15;
  const T = () => n((G ? d[Ia] : Ua[28 !== aa ? aa : 0]).p), B = u => {
    1 < G ? (n(d[Ia].p).multiplySelf(d[Ia].q), db(0, .9 < pa ? 15 : 1, -2.4)) : (T(), db(N, K, L));
    u && (m = ($a - Pa) / xa, g = (bb - Ta) / xa);
    Pa = $a;
    Sa = ab;
    Ta = bb;
  }, E = NO_INLINE((u, q, J) => {
    T().invertSelf();
    db(u, q, J, 0);
    N += $a;
    K += q;
    L += bb;
    B();
  }), p = NO_INLINE(() => {
    var u = 0, q = 0, J = 0;
    let H = 0, I = 0, S = 0;
    var da = -1;
    for (var ia = 0; 36 > ia; ++ia) {
      for (let ya = 96, za = 512 * ia; 416 > ya; ya += 4) {
        for (var U = 0; 2 > U; ++U) {
          const hb = Rb[za + ya + U], ra = Rb[za + ya + U + 2];
          hb > H && (H = hb);
          hb + ra && (0 > da || da === ia) && (da = ia, ra === D ? ++u : q && q !== ra || (q = ra, ++J));
        }
      }
    }
    D = 0 > da ? 0 : J > 2 * u ? q : D;
    for (let ya = 36, za = 18432; 128 > ya; ++ya) {
      da = J = q = u = 0;
      for (ia = 0; 128 > ia; ++ia) {
        U = Rb[za++], 64 > ia ? U > u && (u = U) : U > q && (q = U), U = Rb[za++], 64 < ia ? U > u && (u = U) : U > q && (q = U), (U = Rb[za++]) > J && (J = U), (U = Rb[za++]) > da && (da = U);
      }
      (q -= u) * q > I * I && (I = q);
      (da -= J) * da > S * S && (S = da);
    }
    v = nb(1 - .01 * lb(jb(I *= .7), jb(S)), .3);
    E(I / 255, H / 255, S / 255);
  }), z = (u, q, J, H) => qb(u, q, y || (nb(jb(q - u) ** .5 - J) + 1 / 7) * Hb(1.5 * H));
  va = () => {
    B(D);
    Y.r9r(0, 0, 128, 128, 6408, 5121, Rb);
    p();
    G || D !== aa ? (aa = D, T().invertSelf(), db(Pa, Sa, Ta), N = $a, K = ab, L = bb, G &&= D ? 0 : 1) : (-20 > Pa || 109 > Ta ? -25 : -9) > Sa && (G = 2);
    1 === D && (d[15].i = -15 > Pa && 0 > Ta ? 1 : 0);
    l = Q(l, wa * (30 < D && 35 > D), 2);
    f = z(f, Pa, .5, 1);
    t = z(t, C = qb(Q(C, Sa, 2), Sa, G || 8 * jb(C - Sa)), 2, 1,);
    x = z(x, Ta, .5, 1);
    ja ? (u = G + Hb(18), Ea = qb(Ea, Pa, u), Ga = qb(Ga, Ta, u), Fa = qb(Fa, 1.6 + C, u), Oa = ob(Oa)) : (Ea = z(Ea, f, 1, 2 + l), Ga = z(Ga, x + -18 + 5 * l, 1, 2 + l), Fa = z(Fa, lb(t + nb((-60 - Ta) / 8, 0, 20) + 13 + 9 * l, 6), 4, 2), u = kb(-6, -jb(x - Ga)), Oa = pb(Oa, 90 - ob(Math.atan2(u, q = f - Ea) / La), y + Hb(10),), Na = pb(Na, 90 - Math.atan2(rb(u, q), Fa - t) / La, y + Hb(10),));
    Na = nb(Na, -87, 87);
    y = 0;
    var u = nb(Ca, -1), q = nb(Da, -1), J = mb(rb(u, q) ** .5, .1), H = Math.atan2(u, q);
    J && (b = 90 - H / La);
    h = Q(h, J, 10);
    X(Pa, .06 * v * h * Math.cos(18.2 * a) + C, Ta).rotateSelf(0, c = pb(c, b, Hb(8)),);
    for (let I = 0; 2 > I; ++I) {
      const S = 9.1 * a - Math.PI * I;
      n(Ua[53].p, X(0)).translateSelf(0, h * nb(.45 * Math.sin(S - Math.PI / 2)),).rotateSelf(h * Math.sin(S) * .25 / La, 0);
    }
    P = D ? 5 : Q(P, G ? 13 : 19 - 2 * kb(0, Sa + 10), 2.2);
    m = D || G ? 0 : Q(m, 0, 3);
    g = D || G ? 0 : Q(g, 0, 3);
    u = (r = G ? 0 : Q(r, D ? 7 * nb(2 * J) * v : 0, D ? 9 : 1)) * J * jb(u) * Math.sin(H);
    q = r * J * jb(q) * Math.cos(H);
    E(xa * (m + (Math.cos(H = ja ? (180 + Oa) * La : 0) * q - Math.sin(H) * u)), xa * -P, xa * (g + (Math.sin(H) * q + Math.cos(H) * u)),);
  };
});
let Xb = () => {
  let b, c, h;
  const l = (m, g) => (m = nb(m), qb(m, 1 - m, g));
  (Xb = () => {
    var m = (v, C, D) => X(v + Math.sin(a + 2) / 5, C + Math.sin(.8 * a) / 5, D).rotateSelf(2 * Math.sin(a), Math.sin(.7 * a), Math.sin(.9 * a),);
    ua = 1;
    h = qb(Q(h, 0, 1), ob(h + 60 * xa), d[2].t - d[3].g);
    wa = l(d[13].t, d[8].t);
    b = qb(Q(b, 0, 5), ob(b + 56 * xa), wa);
    c = qb(Q(c, 0, 4), ob(c + 48 * xa), wa);
    X(0, 270 * (d[1].t - 1) + (2 + 5 * Math.cos(1.5 * a)) * (1 - d[10].t));
    var g = kb(1 - d[11].g, d[10].g);
    X(g * Math.sin(.6 * a + 1.2) * 12, 0, 35);
    X(g * Math.sin(.6 * a - 1.2) * 8.2, 0, 55);
    X(g * Math.sin(.6 * a) * 12, 0, 45);
    X(9.8 * (1 - g));
    g = nb(1 - 5 * g) * l(d[11].t, d[2].t);
    X(0, g * Math.sin(1.35 * a) * 4);
    X(0, 0, g * Math.sin(.9 * a) * 8);
    X(0, -6.5 * d[11].g);
    g = l(d[4].g, d[3].g);
    X(0, g * Math.sin(a) * 5 + 3.5 * (1 - lb(d[3].t, d[4].t)));
    X(0, g * Math.sin(a + 3) * 6, g * Math.sin(.6 * a + 1) * 6,);
    X(0, -7.3 * d[4].g);
    g = l(d[6].t, d[7].t);
    X(0, -2, 10 - 8.5 * g * jb(Math.sin(1.1 * a)));
    X(0, -2, 10 - 8.5 * g * jb(Math.sin(2.1 * a)));
    X(0, -2, 10 - 8.5 * lb(g * jb(Math.sin(1.5 * a)), (1 - d[6].t) * (1 - g)),);
    var r = l(d[5].g, d[13].g);
    for (g = 0; 4 > g; g++) {
      X((2 < g ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * g) * (3 + g / 3) + .7, 115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & g ? -1 : 1) + lb(.05, r) * Math.cos(1.3 * a + 7 * g) * (4 - 2 * (1 - g / 3)),);
    }
    g = l(d[8].g, d[9].g);
    for (let v = 0; 3 > v; ++v) {
      X(0, g * Math.sin(1.5 * a + 1.5 * v) * 4 + (v ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)),);
    }
    g = l(l((d[9].t + d[9].g) / 2, d[8].g), (d[12].t + d[12].g) / 2);
    X(0, 16 * g, 95 + 8.5 * nb(2 * g - 1));
    X(0, -4.7 * d[0].t, -15);
    X(0, -4.7 * d[10].t, 15);
    X(-99.7, -1.9 - 5.5 * d[3].t, 63.5);
    X(-100, .6 - 5.8 * d[13].t, 96.5);
    X(-75, 3 * (1 - d[2].g) * (1 - d[3].t), 55).rotateSelf(180 * (1 - d[2].g) + h, 0);
    X(2.5 * (1 - r) - 139.7, -3 * (1 - d[5].t) - r * Math.sin(.8 * a) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 + 3 * r), 0);
    X(-2 * Math.sin(a)).rotateSelf(25 * Math.sin(a));
    X(-81, .6, 106).rotateSelf(0, 40 + b);
    X(-65.8, .8, 106).rotateSelf(0, c);
    X(-50.7, .8, 106).rotateSelf(0, 180 - c);
    X(-50.7, .8, 91).rotateSelf(0, 270 + c);
    m(-12, 4.2, 40 * pa - 66);
    m(-123, 1.4, 55 - 65 * qa);
    for (m = 0; 16 > m; ++m) {
      r = d[m], g = r.t = Q(r.t, r.i, 4), r.g = Q(r.g, r.i, 1), n(n(r.p).multiplySelf(r.q), X(0)).rotateSelf(50 * g - 25, 0).translateSelf(0, 1).m44 = g, ha && 3 > (db(), rb(Pa - $a, Sa - ab, Ta - bb)) && (r.i ? .7 < g && (r.i = 0, Ia = m, Mb("* click *", 1), Ob()) : .3 > g && (r.i = 1, Ia = m, Mb("* click *", 1), Ob())), 14 === m && r.i && .8 < g && (r.i = 0, 13 > na ? Mb("Not leaving now, there are souls to catch!", 3) : oa || (oa = 1, Mb("Well done. They will be punished.<br>Thanks for playing", 
      1 / 0))), 13 > m && Va[m]();
    }
    va();
    for (m = 0; 28 > m; ++m) {
      Ya(Ua[28 + m].p, Pb, m);
    }
    for (let v, C = 0, D = 656; 26 > C; ++C, ++D) {
      v = Ua[2 + C].p, Pb[D++] = v.m41, Pb[D++] = v.m42, Pb[D++] = v.m43;
    }
  })();
};
const e = new DOMMatrix(), k = new DOMMatrix(), Xa = new Float32Array(16), Rb = new Uint8Array(65536), Pb = (document.body.innerHTML += '<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle."</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}', 
new Float32Array(760)), Z = hC.getContext("webgl2", {powerPreference:"high-performance",}), Y = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const b in Y) {
  [Z, Y].map(c => c[b[0] + [...b].reduce((h, l, m) => (h * m + l.charCodeAt(0)) % 434, 0).toString(36)] = c[b]);
}
Ib(() => {
  let b = 0;
  const c = () => {
    if (2 == ++b) {
      const l = [], m = (y, G, P) => {
        ca ? 1100 < hC.width && y.d97(4, Ua[55].v - Ua[53].u, 5123, 2 * Ua[53].u) : (y.das(4, Ua[G].v - Ua[G].u, 5123, 2 * Ua[G].u, Va.length), y.d97(4, Ua[P ? 53 : 56].u - 3, 5123, 6));
      }, g = (y, G, P = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",) => {
        const T = {}, B = (p, z,) => (z = y.c6x(z), y.s3c(z, p), y.c6a(z), z), E = y.c1h();
        return y.abz(E, B(P, 35633)), y.abz(E, B(G, 35632)), y.l8l(E), p => p ? T[p] || (T[p] = y.gan(E, p)) : y.u7y(E);
      }, r = y => {
        var G = (y - (ba || y)) / 1e3;
        Ba += G;
        a += xa = ca ? 0 : kb(.055, G);
        ba = y;
        requestAnimationFrame(r);
        0 < xa && (Lb(), qa = Q(qa, d[15].g, .2 + .3 * jb(2 * d[15].g - 1)), pa = oa ? (ja = 0, Q(pa, -9, .015)) : Q(pa, nb(a / 3), 1), Ja && a > Ja && (Ja = 0, h4.innerHTML = ""), Xb(), Y.u3a(N("j"), Pb), Y.cbf(!0, !0, !0, !0), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(N("b"), !1, Ya(n().rotateSelf(0, 180).invertSelf().translateSelf(-Pa, -Sa, .3 - Ta)),), m(Y, 56, 1), Y.c4s(256), Y.cbf(!1, !0, !1, !0), Y.uae(N("b"), !1, Ya(n().translateSelf(-Pa, -Sa, -Ta - .3))), m(Y, 56, 1), Y.f1s(), ha = 0);
        x();
        Z.u3a(x("j"), Pb);
        Z.b6o(36160, t);
        Z.v5y(0, 0, 2048, 2048);
        Z.ubh(x("g"), 4);
        Z.ubh(x("h"), 4);
        Z.uae(x("a"), !1, Ya(e));
        y = Ea;
        G = Fa;
        let P = Ga;
        ca ? (n().rotateSelf(0, 40 * Math.sin(Ba) - 80, -8), Ya(k, Pb, 25), Ya(k, Pb, 26), Ya(k, Pb, 27), n(la).invertSelf(), db(3.6, 3.5), y = $a, G = ab, P = 5, n(e, C).rotateSelf(20, 0).translateSelf(-y, -G, -P).rotateSelf(0, 99)) : n(e, C).rotateSelf(-Na, -Oa).invertSelf().translateSelf(-y, -G, -P,);
        L(54.7);
        m(Z, 57, ja);
        aa(126);
        m(Z, 57, ja);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.c4s(16640);
        Z.ubh(x("g"), 0);
        Z.ubh(x("h"), 1);
        Z.ubu(x("k"), y, G, P);
        Z.uae(x("a"), !1, Ya(la));
        Z.uae(x("b"), !1, Ya(C));
        Z.uae(x("i"), !1, D);
        m(Z, 57, ja);
        K();
        Z.uae(K("b"), !1, Ya(C.invertSelf()));
        Z.ubu(K("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, Ba);
        Z.d97(4, 3, 5123, 0);
      }, v = new DOMMatrix(), C = new DOMMatrix(), D = new Float32Array(32), f = h, t = Z.c5w(), x = g(Z, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), N = g(Y, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), 
      K = g(Z, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [L, aa] = eb(2, y => {
        const G = Z.c25();
        return Z.a4v(33984 + y), Z.b9j(3553, G), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), P => {
          let T = 0, B = 0, E = 0, p = 1 / 0, z = 1 / 0, u = 1 / 0, q = -1 / 0, J = -1 / 0, H = -1 / 0;
          Z.fas(36160, 36096, 3553, G, 0);
          Z.c4s(256);
          n().scale3dSelf(P *= 1.1).multiplySelf(n(ka[y], v).multiplySelf(C).invertSelf(),);
          for (let I = 0, S = 0; 8 > I; ++I) {
            db(4 & I ? 1 : -1, 2 & I ? 1 : -1, 1 & I ? 1 : -1), T -= l[S++] = (0 | $a) / (P * cb), B -= l[S++] = (0 | ab) / (P * cb), E -= l[S++] = (0 | bb) / (P * cb);
          }
          n().rotateSelf(298, 139).translateSelf(T / 8, B / 8, E / 8);
          for (let I = 0, S = 0; 8 > I; ++I) {
            db(l[S++], l[S++], l[S++]), q = lb(q, $a), J = lb(J, ab), H = lb(H, bb), p = kb(p, $a), z = kb(z, ab), u = kb(u, bb);
          }
          E = 10 + y;
          u *= 0 > u ? E : 1 / E;
          H *= 0 < H ? E : 1 / E;
          Z.uae(x("b"), !1, Ya(n(e, v).scaleSelf(2 / (q - p), 2 / (J - z), 2 / (u - H),).translateSelf((q + p) / -2, (J + z) / -2, (u + H) / 2).multiplySelf(k,), D, y,), 16 * y, 16,);
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
      x();
      Z.ubh(x("q"), 2);
      K();
      Z.ubh(K("q"), 2);
      Z.c5t(0, 0, 0, 1);
      Z.d4n(515);
      Z.e8z(2929);
      Z.e8z(2884);
      Y.e8z(2929);
      Y.e8z(2884);
      Y.v5y(0, 0, 128, 128);
      N();
      Y.uae(N("a"), !1, Ya(Kb(1e-4, 2, 1.2, .4)));
      Wb();
      Lb();
      requestAnimationFrame(r);
    }
  }, h = new Image();
  h.onload = c;
  h.src = Ma;
  Jb(() => {
    Ib(() => {
      let f = 0;
      const t = [], x = [], N = [], K = [], L = new Int32Array(8), aa = new Map(), y = new Int32Array(L.buffer, 0, 5), G = new Float32Array(L.buffer);
      Ua.map((B, E) => {
        let p;
        const z = u => {
          let {x:q, y:J, z:H} = p[u], I = (G[0] = q, G[1] = J, G[2] = H, aa.get(u = "" + (p.m ? y : L)));
          return void 0 !== I ? (q = 3 * I, K[q] = (K[q++] + L[5]) / 2, K[q] = (K[q++] + L[6]) / 2, K[q] = (K[q] + L[7]) / 2) : (aa.set(u, I = aa.size), x.push(q, J, H, G[3]), N.push(L[4]), K.push(L[5], L[6], L[7])), I;
        };
        G[3] = 55 < E ? -28 : E;
        for (const u of B.h) {
          for (p of u) {
            const {x:q, y:J, z:H} = wb(p);
            L[4] = 0 | p.o;
            L[5] = 32767 * q;
            L[6] = 32767 * J;
            L[7] = 32767 * H;
            for (let I = 2, S = z(0), da = z(1); p.length > I; ++I) {
              t.push(S, da, da = z(I));
            }
          }
        }
        B.h = 0;
        B.u = f;
        B.v = f = t.length;
      });
      [Z, Y].map(B => {
        B.b11(34963, B.c1b());
        B.b2v(34963, new Uint16Array(t), 35044);
        B.b11(34962, B.c1b());
        B.b2v(34962, new Float32Array(x), 35044);
        B.v7s(0, 4, 5126, !1, 0, 0);
        B.b11(34962, B.c1b());
        B.b2v(34962, new Int16Array(K), 35044);
        B.v7s(1, 3, 5122, !0, 0, 0);
        B.b11(34962, B.c1b());
        B.b2v(34962, new Uint32Array(N), 35044);
        B.v7s(2, 4, 5121, !0, 0, 0);
        B.e3x(0);
        B.e3x(1);
        B.e3x(2);
      });
      let P = [], T = [];
      try {
        const [B, E, p, z, u] = JSON.parse(localStorage["Dante-22"]);
        P = B;
        T = E;
        Ia = p;
        qa = z;
        a = u;
      } catch {
      }
      d.map((B, E) => B.t = B.g = B.i = 14 !== E && P[E] ? 1 : 0);
      Va.map((B, E) => B.i = T[E] ? 1 : 0);
      Nb();
      pa = na || 14 !== Ia ? 1 : 0;
      Ib(c);
    });
    var l = [-110, -100, -92, -82, -106, -97, -88];
    const m = f => w(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f,), g = f => {
      d.push({p:sa, q:f,});
      V(F(5), f.translate(.2).rotate(90, 90).scale(.4, .1, .5), M(.4, .5, .5));
      V(F(5), f.translate(-.2).rotate(90, 90).scale(.4, .1, .5), M(.4, .5, .5));
      V(F().slice(0, -1), f.translate(0, -.4).scale(.5, .1, .5), M(.5, .5, .4));
    }, r = f => O(A(F().slice(0, -1), w(0, -f / 2).scale(6, f - 1, 2.2)), A(F().slice(0, -1), w(0, -f / 2 - 4).scale(4, f - 5, 4)), A(F(28, 1), w(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), v = O(A(F(), w(0, -.5, 1).scale(1.15, 1.2, 6.5), M(.25, .25, .35, .3)), O(A(F(3), w(0, 0, -5.5).scale(3, 2), M(.6, .3, .4, .3)), A(F(), w(0, 0, -3.65).scale(2.5, 3), M(.6, .3, .4, .3)),), ...[-1, 1].map(f => A(F(), w(1.2 * f, -.5, 1).scale(.14, .3, 6.5), M(.7, .2, 0, .3))),), C = [A(F(), w(0, -3).scale(11, 
    1.4, 3), M(.9, .9, .9, .2)), A(F(), w(0, -2.2).scale(7.7, .5, 4), M(.5, .5, .5, .2)), eb(12, f => A(F(), w(f - 5.5, 4.4).scale(.1, .1, 2), M(.6, .5, .3, .2))).flat(), A(O(A(F(6), e.rotate(90).scale(6, 8, 6)), A(F(4, 0, .01), w(0, 6).scale(12, 2, .75).rotate(0, 45)), A(F(6), e.rotate(90).scale(5, 12, 5)), ...[-5, 0, 5].map(f => A(F(5), w(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),), e, M(.3, .6, .6, .3),),].flat(), D = eb(11, f => ub(ib(sb(16), m(f), M(1, 1, .8, .2)).reverse(), ib(sb(16), 
    m(f + 1), M(1, 1, .8, .2)), 1,)).flat();
    R();
    V([Wa.slice(1)], w(-2).scale3d(3).rotate(90, 0));
    R();
    g(w(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, t) => {
      V(F(), w(0, 0, t ? 22 : -23).scale(3, 1, 8), M(.9, .9, .9, .2));
      V(F(), w(0, 6.3, f).scale(4, .3, 1), M(.3, .3, .3, .4));
      V(F().slice(0, -1), w(0, 1, f).scale(3, .2, .35), M(.5, .5, .5, .3));
    });
    V(F(), w(-5, -.2, -26).scale(3.2, 1, 2.5).skewX(3), M(.8, .8, .8, .2));
    V(F(), w(3, 1.5, -20).scale(.5, 2, 5), M(.7, .7, .7, .2));
    V(F(5), w(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), M(.6, .3, .3, .4));
    V(F(), w(-3.4, -.2, -19).scale(2, 1, 1.5).rotate(0, -90), M(.75, .75, .75, .2));
    V(O(Gb(O(A(F(6, 0, 0, .3), w(0, -.92).scale(13, 2, 13), M(.8, .8, .8, .2)), A(F(), e.rotate(0, 60).translate(14, .5, -1).scale(2.4, 5, 2), M(.5, .5, .5, .5)),), A(F(), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), M(.8, .2, .2, .5),), A(F(6), w(0, -8).scale(9, 8, 7), M(.2, .1, .4, .5)), A(F(6, 0, 0, .3), w(8, -4, -4).scale(14, 2, 13), M(.7, .7, .7, .2)),), A(F(6), w(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), M(.5, .5, .5, .5)), A(F(5, 0, 1.5), w(0, 1).scale(4.5, 
    .3, 4.5), M(.7, .5, .9, .2)), A(F(5), e.scale(5, 30, 5), M(.4, .2, .6, .5)),),);
    g(w(15.8, -2, 3.8));
    V(F(), w(-18.65, -3, 55).scale(2.45, 1.4, 2.7), M(.9, .9, .9, .2));
    g(w(-55, -1.1, 46).rotate(0, 90));
    V(F(7), w(-57, -2.6, 46).scale(4, 1, 4), M(.8, .8, .8, .3));
    V(F(6), w(-61.3, -2.4, 49).scale(3, 1, 5), M(.4, .6, .6, .3));
    V(C, w(-53, 0, 55));
    V(F(), w(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), M(.7, .7, .7, .2));
    V(F(3, 0, -.5), w(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), M(.8, .8, .8, .2),);
    V(O(A(F(), w(-100, 1, 63).scale(7.5, 4), M(.5, .5, .5, .4)), A(F(), w(-100, 0, 63).scale(2, 2, 4), M(.5, .5, .5, .4)), A(F(20, 1), w(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), M(.5, .5, .5, .4)),),);
    V(O(Gb(A(F(), w(-100, -2.6, 70).scale(3, 1.1, 7), M(.8, .8, .8, .2)), A(F(), w(-100, -2.4, 55).scale(8, .9, 8), M(.8, .8, .8, .2)), A(F(), w(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), M(.8, .8, .8, .2)), A(F(6), w(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), M(.6, .6, .6, .3)), A(F(), w(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), M(.8, .8, .8, .2)), A(F(), w(-100, .42, 92).scale(3, 1.1, 4.1), M(.8, .8, .8, .2)), A(F(), w(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), M(.8, .8, 
    .8, .2)),), A(F(8), w(-100, -1, 55).scale(7, .9, 7), M(.3, .3, .3, .4)), A(F(8), w(-100, -2, 55).scale(4, .3, 4), M(.4, .4, .4, .5)), A(F(8, 0, -3.1), w(-100, -3, 55).scale(.4, 1, .4), M(.4, .4, .4, .5)),),);
    Wa.map(({x:f, z:t}) => {
      V(F(6), w(3 * f, 3, 15 * t).scale(.7, 4, .7), M(.6, .3, .3, .4));
      V(F(6), w(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), M(.6, .15, .15, .8));
      [4, -.4].map(x => V(F(6), w(7 * f - 100, x, 7 * t + 55).scale(1.3, .5, 1.3), M(.4, .2, .2, .8),));
      [1.5, 8].map(x => V(F(15, 1), w(9 * f - 38.9, x - 11.3, 11 * t + 17).scale(1.5, .5, 1.5), M(.6, .6, .6, .3),));
      V(F(14, 1).slice(0, -2), w(9 * f - 38.9, -18, 11 * t + 17).scale(1, 14.2), M(.25, .25, .25, 1),);
    });
    eb(7, f => {
      V(F((23 * f + 1) % 5 + 5, 0, .5), w(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3,), M(.5 - f / 17, .5 - (1 & f) / 9, .6, .3),);
    });
    V(F(), w(-87, -9.5, 24).scale(7, 1, 3), M(.4, .5, .6, .4));
    V(F(4), w(-86, -9.2, 27).scale(5, 1, 5), M(.5, .6, .7, .3));
    V(F(12, 1), w(-86, -9, 31).scale(1.5, 1, 1.5), M(.3, .3, .4, .1));
    g(w(-86, -7.5, 31));
    V(F(5), w(-38.9, -11.1, 10).scale(2, 1.2, 2), M(.2, .4, .7, .3));
    V(O(Gb(A(F(), w(-38.9, -11.3, 17).scale(11, 1, 13), M(.3, .4, .6, .3)), A(F(5), w(-38.9, -11.1, 17).scale(9, 1, 9), M(0, .2, .3, .5)),), A(F(5), w(-38.9, -11.1, 17).scale3d(5.4), M(0, .2, .3, .5)),),);
    g(w(-38.9, -9.4, 10));
    V(O(Gb(A(F(6), w(0, 0, -18).scale(15, 1.3, 15), M(.7, .7, .7, .3)), A(F(5), e.scale(4.5, 1.2, 9), M(.45, .4, .6, .3)),), ...eb(6, f => eb(6, t => A(F(6), w(4.6 * t - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32,).scale3d(2), M(.7, .7, .7, .3),))).flat(),), w(-38.9, -11.3, -1),);
    g(w(-84, -.7, 85).rotate(0, 45));
    V(F(5), w(-84, -2, 85).scale(4, .8, 4).rotate(0, 10), M(.8, .1, .25, .4));
    g(w(-116, -1.4, -18).rotate(0, 180));
    V(O(A(F(), w(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...l.map(f => A(F(), w(f, .05, -3).scale(1.35, 2, 9))),), e, M(.5, .5, .6, .2),);
    V(F(), w(-96.5, 1, -2).scale(19, .3, .3), M(.5, .5, .6, .2));
    V(F(6), w(-116, -2.6, -16.5).scale(3.2, .8, 3), M(.6, .5, .7, .2));
    V(F(), w(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), M(.8, .8, .8, .2));
    V(F().slice(0, -1), w(-115.5, -17, -12).scale(.5, 15, 2.2), M(.6, .6, .6, .3));
    V(F(8).slice(0, -2), w(-114, -17, -2).scale(2, 15, 2), M(.6, .6, .6, .3));
    V(F(8).slice(0, -2), w(-79, -17, -2).scale(2, 15, 2), M(1, 1, 1, .3));
    V(F().slice(0, -1), w(-77, -17, -50.5).scale(2.2, 15, .5), M(.6, .6, .6, .3));
    V(O(A(F(12).slice(0, -1), w(-77, -14.5, -12).scale(4, 17.5, 4), M(.7, .7, .7, .2)), A(F(12), w(-77, 3.1, -12).scale(3, 5, 3), M(.4, .5, .6, .2)), A(F(), w(-79, .1, -12).scale(3.5, 2, 1.3), M(.4, .5, .6, .2)), A(F(), w(-77, .1, -14).scale(1.5, 2, 2), M(.4, .5, .6, .2)),),);
    V(O(A(F(), w(-93, -5.8, -40).scale(9, 1, 5), M(.8, .8, .8, .1)), A(F(9), w(-98, -5.8, -40).scale(3, 8, 3), M(.7, .7, .7, .2)),),);
    V(F(), w(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), M(.6, .6, .6, .3));
    V(F(9).slice(0, -1), w(-98, -18.4, -40).scale(2.5, 13.5, 2.5), M(.5, .5, .5, .3));
    g(w(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, t) => {
      V(O(A(F(), w(-4 * f, 3.5, -.5).scale(4, 4, .7), M(.5, .5, .5, .4)), A(F(5), w(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), M(.6, .24, .2, .5)), A(F(), e.scale(3, 3, 10), M(.6, .24, .2, .5)), A(F(5), w(-5.3 * f, 3.8).rotate(90, 0, 35).scale(.75, 5, .75), M(.6, .24, .2, .5),), A(F(32, 1), w(0, 3, -5).scale(3, 4, 10).rotate(90, 0), M(.6, .24, .2, .5)),), w(f - 100, .7, 97),);
      V(F(12, 1), w(-7.5 * f - 100, 3.7, 96).scale(.8, 4, .8), M(.6, .24, .2, .5));
      [7.2, 1.5].map(x => V(F(15, 1), w(-7.5 * f - 100, x + .7, 96).scale(1.1, .5, 1.1), M(.5, .24, .2, .4),));
      V(D, w(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      V(D, w(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      eb(5, x => V(D, w(18.5 * (t - .5), 0, 4.8 * x - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),));
    });
    V(O(A(F(), w(-82.07, .8, 106).scale(11, .9, 2.2), M(.7, .7, .7, .1)), A(F(45, 1), w(-81, .7, 106).scale3d(7.7), M(.7, .7, .7, .1)),),);
    V(F(), w(-50.7, 1, 99).scale(2, .65, 1), M(.7, .7, .7, .2));
    V(F(), w(-58, 1, 106).scale(2, .65, 2), M(.7, .7, .7, .2));
    V(F(), w(-34.2, .4, 91).scale(3, 1, 3), M(.7, .7, .7, .3));
    V(F(), w(-42, .4, 91).scale(5, 1, 2.5), M(.7, .7, .7, .3));
    V(F(5), w(-34, .2, 96).scale(3, 2, 4).rotate(-20, 0), M(.2, .5, .5, .6));
    g(w(-34, 2.7, 96).rotate(-12, 0));
    V(O(Gb(A(F(), w(-101.5, .7, 93.5).scale(10.5, 1, 2), M(.7, .7, .7, .2)), A(F(6, 0, 0, .6), w(-100, .7, 105.5).scale(8, 1, 11), M(.7, .7, .7, .2)),), A(F(5), w(-100, .7, 113).scale(4, 3, 4), M(.7, .7, .7, .2)),),);
    eb(3, f => {
      V(r(16), w(-77, -9, -12 * f - 20).rotate(0, 90), M(.6, .6, .6, .3));
      V(r(16), w(12 * f - 109, -9, -12), M(.6, .6, .6, .3));
      V(r(24.7 - .7 * (1 & f)), w(6 * f - 6, 4 - (1 & f), 111 - .2 * (1 & f)), 1 & f ? M(.5, .5, .5, .3) : M(.35, .35, .35, .5),);
    });
    V(O(Gb(A(F(), w(0, 16, 111).scale(3, 1, 3.8), M(.5, .3, .3, .4)), A(F(6, 0, 0, .3), w(0, -.92, 95).scale(14, 2, 14), M(.8, .8, .8, .2)), A(F(), w(0, 16, 110.5).scale(12, 1, 3), M(.5, .3, .3, .4)),), A(F(5), w(0, 0, 95).scale3d(6), M(.3, .3, .3, .5)), A(F(5), w(0, 16, 103.5).scale(5.5, 5, 5.5), M(.5, .3, .3, .4)),),);
    g(w(0, 1.7, 82).rotate(0, 180));
    V(F(5).slice(0, -1), w(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), M(.5, .3, .3, .4),);
    V(F(6), w(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), M(.5, .6, .7, .3));
    V(F(), w(0, 16, 127.8).scale(1.5, 1, .7), M(.5, .6, .7, .3));
    V(F(7), w(0, 15.1, 133).scale(5, 2, 5), M(.4, .5, .6, .4));
    Qb(w(-.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Qb(w(0, 2.8), [5, 10, 3], [-5, 10, 3], ...sb(18).map(({x:f, z:t}) => [7 * f, 10 * t, 4.5 - 2 * jb(f)]),);
    Qb(w(0, 3, 95), ...sb(9).map(({x:f, z:t}) => [9 * f, 9 * t, 4]),);
    Qb(w(0, 19, 134), [0, 0, 3.5]);
    Qb(w(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Qb(w(-89, .2, 80), [0, 0, 6]);
    Qb(w(-100, .2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Qb(w(-115, .2, -12), [0, 0, 3.5]);
    Qb(w(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    R();
    V(F(5), w(0, -.2).scale(5, 1, 5), M(.6, .65, .7, .3));
    g(w(0, 1.2));
    eb(2, () => {
      R();
      Wa.map(({x:f, z:t}) => {
        V(F(11, 1).slice(0, -2), w(4 * f, 4, 4 * t).scale(.8, 3, .8), M(.5, .3, .7, .6),);
        V(F(), w(4 * f, 7, 4 * t).scale(1, .3), M(.5, .5, .5, .3));
      });
      V(O(A(F().slice(0, -1), e.scale(5, 1, 5), M(.8, .8, .8, .3)), ...[-1, 1].map(f => A(F(25, 1), w(5 * f, .2).rotate(-30 * f).scale(4, 1, 3), M(.8, .8, .8, .3),)),),);
      V(F(), w(0, -3).scale(8, 2, 8), M(.4, .4, .4, .3));
    });
    R();
    V(O(Gb(A(F(), e.scale(1.5, 1, 5), M(.9, .9, .9, .2)), A(F(), w(0, -2).scale(2, 3.2, 1.9), M(.3, .8, .5, .5)), A(F(6), e.scale(4, 1, 5), M(.9, .9, .9, .2)), A(F(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), M(.9, .9, .9, .2)),), A(F(), e.scale(1.3, 10, 1.3), M(.2, .7, .4, .6)),),);
    Qb(w(0, 2.8), [0, 0, 4.5]);
    R();
    V(F(3), w(-23, -1.7, 55.8).scale(5, .7, 8.3), M(.3, .6, .6, .2));
    V(F(8), w(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), M(.8, .8, .8, .2));
    V(F(), w(-23, -2.2, 62).scale(3, 1, 4), M(.5, .5, .5, .3));
    V(F(), w(-23, -3, 55).scale(5.2, 1.7, 3), M(.5, .5, .5, .3));
    g(w(-23, -.5, 66.5));
    R();
    V(F(), w(-22.55, -3, 55).scale(1.45, 1.4, 2.7), M(.7, .7, .7, .2));
    V(O(A(F(), e.scale(3, 1.4, 2.7)), A(F(), e.scale(1.2, 8, 1.2))), w(-33, -3, 55), M(.7, .7, .7, .2),);
    R();
    V(O(A(F(), e.scale(3, 1.4, 2.7)), A(F(), e.scale(1, 3))), w(-27, -3, 55), M(.9, .9, .9, .2),);
    V(F(), w(-39, -3, 55).scale(3, 1.4, 2.7), M(.9, .9, .9, .2));
    R();
    V(F(6), w(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, .5, 5.9), M(.7, .7, .7, .4));
    R();
    [0, 12, 24].map(f => V(F(), w(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(.2, .5, .6, .2)));
    R();
    [6, 18].map(f => V(F(), w(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), M(.1, .4, .5, .2)));
    R();
    V(F(5), w(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), M(.3, .3, .5, .5));
    V(F(5).slice(0, -1), w(-38.9, 2, 17).scale(.6, 2.5, .6).skewY(25), M(.6, .3, .5, .5));
    V(O(A(F(5), w(0, 2).scale(5, 7, 5).skewY(8)), A(F(5), w(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), A(F(), e.scale(2, 8, 3)),), w(-38.9, -11.3, 17), M(.2, .4, .5, .5),);
    Qb(w(-39.1, -.6, 17).rotate(11), ...sb(15).map(({x:f, z:t}) => [3 * f, 3 * t, 1.2]),);
    l.map((f, t) => {
      t % 2 || 6 <= t || R();
      V(v, w(f, 1.9, -12));
    });
    eb(4, f => {
      R();
      V(F(6), w(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - .1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), M(.5 - f / 8, f / 12 + .5, .7, .3),);
    });
    [M(.1, .55, .45, .2), M(.2, .5, .5, .3), M(.3, .45, .55, .4)].map((f, t) => {
      R();
      V(F(), w(-23.5, .5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && V(F(), w(-29.1, .4, 91).scale(2.1, 1, 3), M(.7, .7, .7, .3));
      1 === t && V(F(), w(-16.1, .5, 103.5).rotate(-3.5).scale(3.9, .8, 2).skewX(-1), M(.6, .6, .7, .3),);
    });
    R();
    V(F(5), e.scale(5, 1.1, 5), M(.5, .3, .3, .4));
    V(F(5), e.scale(5.5, .9, 5.5), M(.25, .25, .25, .4));
    g(w(0, 1.5, -1).rotate(0, 180));
    eb(4, f => {
      R();
      eb(7, t => V(A(F(8, 1).slice(0, -1), w((2 < f ? 3.5 : 4) * (t / 6 - .5), 3).scale(.2, 2 < f ? 4 : 3, .2), M(.3, .3, .38),),),);
    });
    R();
    V(C);
    R();
    V(F(5).slice(0, -1), w(-7.5, 2.7).rotate(0, 90).scale(1, .2), M(.5, .5, .5, .5));
    V(F(10).slice(0, -1), w(-7.5, 2.4).rotate(0, 90).scale(2, .1, 2), M(.3, .8, .7, .3));
    V(F(15, 1), w(-7.5).rotate(0, 90).scale(3, 2.3, 3), M(.4, .4, .4, .3));
    g(w(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => V(D, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    V(O(A(F(10), e.scale(6, 2, 6), M(.1, .6, .5, .3)), A(F(10), e.scale(3.3, 6, 3.3), M(.1, .6, .5, .5)),),);
    Qb(w(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    R();
    V(F(3), w(0, -3, 118.8).scale(.8, .8, 8).rotate(90, 0, 60), M(.5, .3, .3, .4));
    [22, 30].map(f => {
      V(F(6), w(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), M(.7, .7, .7, .4));
      V(F(), w(0, 6.2, f + 95).scale(.5, 11, .5), M(.5, .3, .3, .4));
    });
    R();
    V(F(5).slice(0, -1), w(0, 2).scale(1, 2), M(.3, .3, .3, .2));
    V(F(8).slice(0, -1), w(0, 2).scale(3, 1.5, 3).rotate(0, 22), M(.7, .7, .7, .1));
    V(O(A(F(28, 1), e.scale(7.5, 1, 7.5), M(.45, .45, .45, .2)), A(F(), w(0, 0, -5.5).scale(1.5, 3, 2.7), M(.45, .45, .45, .2)),),);
    Qb(w(0, 3), ...sb(14).map(({x:f, z:t}) => [5.6 * f, 5.6 * t, 2]),);
    R();
    [-1, 1].map(f => V(D, e.rotate(0, 90).translate(-5 * f, 3, -.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    V(O(A(F(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), M(.35, 0, 0, .3)), A(F().slice(0, -1), w(0, 2).scale(9, 1.1, 2), M(.3, 0, 0, .3)),),);
    V(F(5).slice(0, -1), w(0, 1).scale(1, .2), M(.3, .3, .3, .2));
    V(F(28, 1), e.scale(7.5, 1, 7.5), M(.45, .45, .45, .2));
    R();
    V(O(A(F(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), M(.35, 0, 0, .3)), A(F().slice(0, -1), w(0, 2, 7).scale(2, 1.1, 9), M(.3, 0, 0, .3)), A(F().slice(0, -1), w(7, 2).scale(9, 1.1, 2), M(.3, 0, 0, .3)),),);
    V(F(5).slice(0, -1), w(0, 1).scale(1, .2), M(.3, .3, .3, .2));
    V(F(28, 1), e.scale(7.5, 1, 7.5), M(.45, .45, .45, .2));
    R();
    V(O(A(F(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), M(.35, 0, 0, .3)), A(F().slice(0, -1), w(0, 2, -7).scale(2, 1.1, 9), M(.3, 0, 0, .3)), A(F().slice(0, -1), w(7, 2).scale(9, 1.1, 2), M(.3, 0, 0, .3)),),);
    V(F(5).slice(0, -1), w(0, 1).scale(1, .2), M(.3, .3, .3, .2));
    V(F(28, 1), e.scale(7.5, 1, 7.5), M(.45, .45, .45, .2));
    eb(2, () => {
      R();
      V(O(A(F(30, 1, 1.15, 1), w(0, -3).scale(3.5, 1, 3.5), M(.7, .4, .25, .7)), A(F(), w(4, -1.2).scale3d(2), M(.7, .4, .25, .3)), A(F(30, 1, 1.3, 1), w(0, -2.5).scale(2.6, 1, 3), M(.7, .4, .25, .2)),),);
      g(w(0, -3, 4));
    });
    for (l = 0; 16 > l; ++l) {
      R(), V(F(9, 1), w(0, .8).scale(.2, .3, .2), M(.7, 1, .2)), V(F(6, 1).slice(0, -1), e.scale(.12, 1.2, .12), M(.3, .3, .5, .1)), V(F(3), w(0, -1).rotate(90, 90).scale(.3, .4, .3), M(.2, .2, .2, .1));
    }
    R();
    V(vb(20), w(0, 1).scale3d(.5), M(1, .3, .4));
    V(vb(30), e.scale(.65, .8, .55), M(1, .3, .4));
    V(F(), w(0, .9, .45).scale(.15, .02, .06), M(.3, .3, .3));
    [-1, 1].map(f => {
      V(D, e.rotate(0, 0 < f ? 180 : 0).translate(.2, 1.32).rotate(-30).scale(.2, .6, .2), M(1, 1, .8),);
      V(A(O(F(15, 1), A(F(), w(0, 0, 1).scale(2, 2, .5))), e.rotate(-90, 0).scale(.1, .05, .1), M(.3, .3, .3),), w(.2 * f, 1.2, .4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1].map(f => {
      R();
      V(F(20, 1), w(.3 * f, -.8).scale(.2, .7, .24), M(1, .3, .4));
    });
    R();
    V(F(6, 1).slice(0, -1), e.scale(.77, 1, .77), M(1, .3, .5));
    R();
    V(vb(28, 22, (f, t, x) => {
      var N = t / 22, K = f * Math.PI * 2 / 28, L = Math.sin(N ** .6 * Math.PI / 2);
      f = N * N * Math.sin(f * Math.PI * .5) / 4;
      return 21 < t ? {x:x.m = 0, y:-.5, z:0,} : {x:Math.cos(K) * L, y:Math.cos(N * Math.PI) - N - f, z:Math.sin(K) * L + Math.sin(f * Math.PI * 2) / 4,};
    }), e.scale3d(.7), M(1, 1, 1),);
    [-1, 1].map(f => V(vb(10), w(.16 * f, .4, -.36).scale3d(.09)));
  });
});

