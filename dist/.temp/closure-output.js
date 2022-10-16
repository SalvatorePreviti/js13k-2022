let ca, da, ea, fa, ha, ia, ja, ka, oa, pa, qa, ra, sa, ta, va, wa, xa = 0, a = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 14, Ia = 0.1;
const Ja = Math.PI / 180, Ka = "data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
);
var La = 0, Ma = 180, Na = 0, Sa = 0, Ta = 0;
const Ua = [], d = [], Va = [], Wa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,}], Xa = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q"], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q"], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q"],], Ya = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 
4, 187], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64],], $a = (c, b = Za, h = 0,) => (h *= 16, b[h++] = c.m11, b[h++] = c.m12, b[h++] = c.m13, b[h++] = c.m14, b[h++] = c.m21, b[h++] = c.m22, b[h++] = c.m23, b[h++] = c.m24, b[h++] = c.m31, b[h++] = c.m32, b[h++] = c.m33, b[h++] = c.m34, b[h++] = c.m41, b[h++] = c.m42, b[h++] = c.m43, b[h] = c.m44, b), n = (c = e, b = k,) => (b.m11 = c.m11, b.m12 = c.m12, b.m13 = c.m13, b.m14 = c.m14, b.m21 = c.m21, b.m22 = c.m22, 
b.m23 = c.m23, b.m24 = c.m24, b.m31 = c.m31, b.m32 = c.m32, b.m33 = c.m33, b.m34 = c.m34, b.m41 = c.m41, b.m42 = c.m42, b.m43 = c.m43, b.m44 = c.m44, b), eb = (c = 0, b = 0, h = 0, l = 1) => {
  ab = k.m11 * c + k.m21 * b + k.m31 * h + k.m41 * l;
  bb = k.m12 * c + k.m22 * b + k.m32 * h + k.m42 * l;
  cb = k.m13 * c + k.m23 * b + k.m33 * h + k.m43 * l;
  db = k.m14 * c + k.m24 * b + k.m34 * h + k.m44 * l;
};
var ab, bb, cb, db;
const w = NO_INLINE((c, b, h) => e.translate(c, b, h)), fb = (c, b) => Array.from(Array(c), (h, l) => b(l)), gb = (c, b, h) => (c.A = h, c.s = b, c), hb = (c, b, h = c.s) => (n(b), gb(c.map(({x:l, y:m, z:g}) => (eb(l, m, g), {x:ab, y:bb, z:cb,})), h, c.A,)), B = (c, b, h) => c.map(l => hb(l, b, h)), ib = NO_INLINE(c => 0 > c ? -c : c), jb = NO_INLINE((c, b) => c < b ? c : b), kb = NO_INLINE((c, b) => b < c ? c : b), lb = (c, b) => ib(c) > b ? c : 0, mb = (c, b = 0, h = 1) => c < b ? b : h < c ? h : 
c, nb = c => Math.atan2(Math.sin(c * Ja), Math.cos(c * Ja),) / Ja, ob = (c, b, h) => c + (2 * (b = (b - c) % 360) % 360 - b) * mb(h) || 0, pb = (c, b, h) => (0 < h ? 1 > h ? c + (b - c) * h : b : c) || 0, tb = (c, b, h = 0) => (c * c + b * b + h * h) ** 0.5, ub = (c, b = 0) => fb(c, h => {
  const l = Math.cos(2 * Math.PI * h / c);
  return {x:Math.sin(2 * Math.PI * h / c), y:0, z:0.01 > ib(l) ? l : 0 > l ? l - b : l + b,};
}), vb = (c, b, h) => c.map((l, m, {length:g}) => gb([l, b[g - m - 1], b[g - (m + 1) % g - 1], c[(m + 1) % g]], c.s, h,)), G = (c, b, h = 0, l,) => (c = c ? ub(c, l) : Wa, l = hb(c, w(0, 1).scale3d(0 < h ? h : 1)), c = hb(c, w(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...vb(c, l, b), l, c]), wb = (c, b = c, h = (l, m) => (m *= Math.PI / b, {x:Math.cos(l *= 2 * Math.PI / c) * Math.sin(m), y:Math.cos(m), z:Math.sin(l) * Math.sin(m),})) => {
  const l = [];
  for (let m = 0; c > m; m++) {
    for (let g = 0; b > g; g++) {
      const r = gb([], 0, 1);
      l.push(r);
      r.push(h(m, g, r));
      g && r.push(h((m + 1) % c, g, r));
      b - 1 > g && r.push(h((m + 1) % c, g + 1 % b, r));
      r.push(h(m, g + 1 % b, r));
    }
  }
  return l;
}, K = NO_INLINE((c, b, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * b << 8 | 255 * c), xb = c => {
  let b, h = 0, l = 0, m = 0, g = c.at(-1);
  for (b of c) {
    h += (g.y - b.y) * (g.z + b.z), l += (g.z - b.z) * (g.x + b.x), m += (g.x - b.x) * (g.y + b.y), g = b;
  }
  return b = tb(h, l, m), h /= b, l /= b, m /= b, {x:h, y:l, z:m, w:h * g.x + l * g.y + m * g.z,};
}, yb = ({x:c, y:b, z:h}, l) => c * l.x + b * l.y + h * l.z, Cb = (c, b) => {
  let h;
  var l, m;
  const g = b.i, r = b.u;
  for (var u = 0; g.length > u; ++u) {
    if (-8e-5 > (h = yb(c, g[u]) - c.w) ? m = b : 8e-5 < h && (l = b), m && l) {
      l = [];
      m = [];
      u = g.at(-1);
      let C = yb(u, c) - c.w;
      for (const v of g) {
        h = yb(v, c) - c.w, 8e-5 > C && m.push(u), -8e-5 < C && l.push(u), (8e-5 < C && -8e-5 > h || -8e-5 > C && 8e-5 < h) && (C /= h - C, u = {x:u.x + (u.x - v.x) * C, y:u.y + (u.y - v.y) * C, z:u.z + (u.z - v.z) * C,}, l.push(u), m.push(u)), u = v, C = h;
      }
      l = 2 < l.length && {i:gb(l, g.s, g.A), u:r, v:b,};
      m = 2 < m.length && {i:gb(m, g.s, g.A), u:r, v:b,};
      break;
    }
  }
  return {x:l, y:m,};
}, Db = (c, b, h = xb(b.i)) => {
  let l, m;
  return c ? ({x:l, y:m} = Cb(c, b), l || m || c.i.push(b), l && (c.o = Db(c.o, l, h)), m && (c.m = Db(c.m, m, h))) : c = {x:h.x, y:h.y, z:h.z, w:h.w, i:[b], o:0, m:0,}, c;
}, Eb = (c, b, h) => {
  const l = [], m = (g, r) => {
    let {x:u, y:C} = Cb(g, r);
    u || C || (0 < h * yb(g, b) ? u = r : C = r);
    u && (g.o ? m(g.o, u) : l.push(u));
    C && g.m && m(g.m, C);
  };
  for (const g of b.i) {
    m(c, g);
  }
  return l;
}, Fb = (c, b) => c && (b(c), Fb(c.o, b), Fb(c.m, b)), Gb = c => (Fb(c, b => {
  const h = b.m;
  b.m = b.o;
  b.o = h;
  b.x *= -1;
  b.y *= -1;
  b.z *= -1;
  b.w *= -1;
  for (const l of b.i) {
    l.u = !l.u;
  }
}), c), Hb = c => c.length ? c.reduce((b, h) => Db(b, {i:h, u:0, v:0,}), 0) : c, Ib = (...c) => c.reduce((b, h) => {
  const l = [];
  if (b = Hb(b), h) {
    h = Hb(h);
    Fb(b, m => m.i = Eb(h, m, 1));
    Fb(h, m => l.push([m, Eb(b, m, -1)]));
    for (let [m, g] of l) {
      for (const r of g) {
        Db(b, r, m);
      }
    }
  }
  return b;
}), P = (c, ...b) => {
  const h = g => {
    let r;
    return g.v && ((r = m.get(g.v)) ? (l.delete(r), g = h(g.v)) : m.set(g.v, g)), g;
  }, l = new Map(), m = new Map();
  return c = Gb(Ib(Gb(Hb(c)), ...b)), Fb(c, g => {
    for (const r of g.i) {
      l.set(h(r), r.u);
    }
  }), Array.from(l, ([{i:g}, r]) => {
    const u = g.map(({x:C, y:v, z:f}) => ({x:C, y:v, z:f,}));
    return gb(r ? u.reverse() : u, g.s, g.A);
  });
}, Jb = NO_INLINE(c => 1 - Math.exp(-xa * c)), R = NO_INLINE((c, b, h) => pb(c, b, Jb(h))), Kb = c => {
  setTimeout(c);
  h4.innerHTML += ".";
}, Mb = NO_INLINE(c => {
  let b = 0;
  const h = v => Math.sin(v * Math.PI * 2), l = v => 0.5 > v % 1 ? 1 : -1, m = v => v % 1 * 2 - 1, g = v => 2 > (v = v % 1 * 4) ? v - 1 : 3 - v, r = () => {
    let v = 0;
    const f = T => {
      let aa, ua, Oa, zb = 0, qb = 0;
      const Ob = [], Pa = new Int32Array(768 * T), Zb = 2 ** (p - 9) / T, $b = Math.PI * 2 ** (J - 8) / T, Ab = U * T & -2;
      for (let rb = 0; 11 >= rb; ++rb) {
        for (let sb = 0, Pb = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + rb]; 32 > sb; ++sb) {
          const Qb = (32 * rb + sb) * T;
          for (var la = 0; 4 > la; ++la) {
            if (aa = 0, Pb && (aa = t[Pb - 1].charCodeAt(sb + 32 * la) - 40, aa += 0 < aa ? 106 : 0), aa) {
              var ya;
              if (!(ya = Ob[aa])) {
                ya = aa;
                let W = void 0, za = void 0;
                var Rb = aa;
                let ac = 0, bc = 0;
                const cc = 2 > b ? m : h, dc = 2 > b ? 1 > b ? l : g : h, Sb = new Int32Array(L + Q + ma);
                for (let Qa = 0, Bb = 0; L + Q + ma > Qa; ++Qa, ++Bb) {
                  let Ra = 1;
                  L > Qa ? Ra = Qa / L : L + Q > Qa || (Ra = (1 - (Ra = (Qa - L - Q) / ma)) * 3 ** (-F / 16 * Ra));
                  0 > Bb || (Bb -= 4 * T, za = 0.00396 * 2 ** ((Rb + N - 256) / 12), W = 0.00396 * 2 ** ((Rb + ba - 256) / 12) * (1 + (b ? 0 : 0.0072)));
                  Sb[Qa] = 80 * (cc(ac += za * Ra ** (M / 32)) * D + dc(bc += W * Ra ** (A / 32)) * H + (E ? (2 * Math.random() - 1) * E : 0)) * Ra | 0;
                }
                ya = Ob[ya] = Sb;
              }
              for (let W = 0, za = 2 * Qb; ya.length > W; ++W, za += 2) {
                Pa[za] += ya[W];
              }
            }
          }
          for (let W, za = 0; T > za; ++za) {
            ya = 0;
            la = 2 * (Qb + za);
            var Aa = (((W = Pa[la]) || Oa) && (ua = 0.00308 * q, 1 !== b && 4 !== b || (ua *= Math.sin(Zb * la * Math.PI * 2) * na / 512 + 0.5), ua = 1.5 * Math.sin(ua), zb += ua * qb, Aa = (1 - x / 255) * (W - qb) - zb, qb += ua * Aa, W = 4 === b ? qb : 3 === b ? Aa : zb, b || (W = 1 > (W *= 22e-5) ? -1 < W ? Math.sin(W / 4 * Math.PI * 2) : -1 : 1, W /= 22e-5), W *= y / 32, Oa = 1e-5 < W * W, Aa = Math.sin($b * la) * I / 512 + 0.5, ya = W * (1 - Aa), W *= Aa), la < Ab || (ya += Pa[1 + la - Ab] * 
            O / 255, W += Pa[la - Ab] * O / 255), v + la >> 1);
            u[Aa] += (Pa[la] = ya) / 65536;
            C[Aa] += (Pa[++la] = W) / 65536;
          }
        }
      }
      v += 768 * T;
    }, t = Xa[b], [D, N, M, H, ba, A, E, L, Q, z, F, p, q, x, y, I, J, O, U, na] = Ya[b], ma = 4 * z ** 2;
    f(5513);
    f(4562);
    f(3891);
    Kb(5 > ++b ? r : c);
  }, u = (ea = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:Lb / 2,})).getChannelData(0), C = ea.getChannelData(1);
  Kb(r);
}), Nb = (c, b, h, l) => new DOMMatrix([h, 0, 0, 0, 0, l, 0, 0, 0, 0, (b + c) / (c - b), -1, 0, 0, 2 * b * c / (c - b), 0,]);
let Tb = () => {
  let c, b, h, l, m, g, r, u, C, v, f, t, D, N, M, H, ba = !0;
  const A = [], E = () => {
    b4.innerHTML = "Music: " + ba;
    H && (da || !ba ? H.disconnect() : H.connect(M.destination));
  }, L = () => {
    const p = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
    ja = Nb(0.3, 181, p, 1.732051);
    ia = [Nb(0.3, 55, p, 1.732051), Nb(55, 181, p, 1.732051)];
    l = u = void 0;
    A.length = fa = N = t = D = Ca = Da = 0;
    document.hidden && Q(!0);
  }, Q = p => {
    if (da !== p && (da = p, L(), hB.className = p ? "l m" : "l", E(), p)) {
      try {
        document.exitFullscreen().catch(() => !1), document.exitPointerLock();
      } catch {
      }
    }
  }, z = p => {
    try {
      M || (M = new AudioContext(), (H = M.createBufferSource()).buffer = ea, H.loop = !0, H.start()), hB.requestFullscreen().catch(() => !1);
    } catch {
    }
    Q(!1);
    ha = p;
  }, F = (p, q) => p.buttons[q]?.pressed || 0 < p.buttons[q]?.value ? 1 : 0;
  oncontextmenu = () => !1;
  onclick = p => {
    if (!da && (p.target === hC && (fa = 1), ha)) {
      try {
        hC.requestPointerLock();
      } catch {
      }
    }
  };
  b5.onclick = () => Q(!0);
  b2.onclick = () => z(1);
  b1.onclick = () => z();
  b4.onclick = () => {
    ba = !ba;
    E();
  };
  b3.onclick = () => {
    confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
  };
  onkeyup = onkeydown = p => {
    let q;
    p.repeat || (q = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[p.code], (A[q] = !!p.type[5] && !0) && (0 === q && (fa = 1), 1 === q && Q(!0)));
  };
  onmousemove = p => {
    ha && (Ma += 0.1 * p.movementX || 0, La += 0.1 * p.movementY || 0);
  };
  hC.ontouchstart = p => {
    if (!da) {
      for (let {identifier:q, pageX:x, pageY:y} of p.changedTouches) {
        ha && x > hC.clientWidth / 2 ? void 0 === u && (C = 0, g = x, r = y, u = q, f = La, v = Ma) : void 0 === l && (m = 0, b = x, h = y, l = q);
      }
      c = Ba;
    }
  };
  hC.ontouchmove = p => {
    if (!da) {
      for (let {identifier:J, pageX:O, pageY:U} of p.changedTouches) {
        var q, x, y, I;
        u === J && (C = 1, La = f + (U - r) / 2, Ma = v + (O - g) / 2);
        l === J && (J = (b - O) / 19, q = ib(J), x = (h - U) / 19, y = ib(x), (I = 0.3 < kb(q, y)) && (m = 1), t = mb(J, -1) * (I && 0.2 < q), D = mb(x, -1) * (I && 0.2 < y), 2 < q && (b = 19 * (0 > J ? -1 : 1) + O), 2 < y && (h = 19 * (0 > x ? -1 : 1) + U));
      }
    }
  };
  hC.ontouchend = p => {
    let q;
    document.activeElement === hB && p.preventDefault();
    for (const x of p.changedTouches) {
      x.identifier === u ? (u = void 0, C || (q = 1), C = 0) : x.identifier === l ? (l = void 0, D = t = 0, m || (q = 1), m = 0) : q = 1;
    }
    p.target === hC && q && c && 0.02 < (p = Ba - c) && 0.7 > p && (fa = 1);
  };
  Tb = () => {
    Ca = D + (A[4] ? 1 : 0) - (A[5] ? 1 : 0);
    Da = t + (A[2] ? 1 : 0) - (A[3] ? 1 : 0);
    let p = navigator.getGamepads()[0];
    p && (ha && (La += 80 * xa * lb(p.axes[3], 0.3), Ma += 80 * xa * lb(p.axes[2], 0.3)), Ca += F(p, 12) - F(p, 13) - lb(p.axes[1], 0.2), Da += F(p, 14) - F(p, 15) - lb(p.axes[0], 0.2), F(p, 9) && Q(!0), (p = F(p, 3) || F(p, 2) || F(p, 1) || F(p, 0)) && !N && (fa = 1), N = p);
  };
  document.onpointerlockchange = () => {
    ha = !!document.pointerLockElement;
  };
  document.onvisibilitychange = onblur = onresize = L;
  Q(!0);
};
const Ub = (c, b) => {
  1 / 0 > Ia && (Ia = a + b, h4.innerHTML = c);
}, Vb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ka = Va.reduce((c, b) => c + b.j, 0)] + " / XIII";
}, Wb = () => {
  localStorage["Dante-22"] = JSON.stringify([d.map(c => c.j), Va.map(c => c.j), Ha, qa, a,]);
}, S = (c, b = e, h) => sa.push(...B(c, b, h)), V = () => {
  Ua.push({l:ra = new DOMMatrix(), i:sa = [],});
}, Yb = (c, ...b) => {
  let h, l, m, g, r = 0, u = 0, C = 1, v = -1;
  const f = () => {
    if (f.j) {
      n(Ua[35].l).translateSelf(A % 4 * 1.2 - 1.7 + Math.sin(a + A) / 7, -2, 1.7 * (A >> 2) - 5.5 + ib(A % 4 - 2) + Math.cos(a / 1.5 + A) / 6,);
    } else {
      let E, L = 1, Q = 1 / 0;
      for (let x = 0; b.length > x; x++) {
        let y = b[x], I = tb(D - y[0], N - y[1]);
        L = jb(L, I / y[2]);
        0 > (I -= y[2]) ? E = 1 : Q > I && (Q = I, t = y);
      }
      let z, F, p, q;
      E || (z = D - t[0], F = N - t[1], p = tb(z, F), q = Math.atan2(-F, z), C && (g = mb(g / (1 + Math.random())), u = (Math.random() - 0.5) * Math.PI / 2), q += u, v = -Math.cos(q), r = Math.sin(q), 0.1 < p && (p = jb(p, t[2]) / p, D = z * p + t[0], N = F * p + t[1]));
      C = E;
      g = R(g, 3 + 6 * (1 - L), 3 + L);
      M = R(M, D = R(D, D + v, g), g);
      H = R(H, N = R(N, N + r, g), g);
      h = ob(h, Math.atan2(M - l, H - m) / Ja - 180, Jb(3),);
      n(ba).multiplySelf(c).translateSelf(l = M, 0, m = H).rotateSelf(0, h, 7 * Math.sin(1.7 * a));
      1.6 > (eb(), tb(Na - ab, Sa - bb, Ta - cb,)) && (f.j = 1, Ub([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ka] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
      6,), Vb(), Wb());
    }
    $a(k, Xb, 28 + A);
  };
  let t = b[0], [D, N] = t, [M, H] = t;
  const ba = ra, A = Va.length;
  Va.push(f);
}, X = (c, b = 0, h = 0) => {
  const l = n(e, Ua[++ta].l);
  return l.m41 = c, l.m42 = b, l.m43 = h, l;
}, fc = NO_INLINE(() => {
  let c, b, h, l, m, g, r, u, C, v, f, t, D, N, M, H, ba = 0, A = 1, E = 2, L = 15;
  const Q = (q, x, y, I) => pb(q, x, A || (mb(ib(x - q) ** 0.5 - y) + 1 / 7) * Jb(1.5 * I),), z = () => n((E ? d[Ha] : Ua[28 !== ba ? ba : 0]).l,), F = q => {
    1 < E ? (n(d[Ha].l).multiplySelf(d[Ha].C,), eb(0, 0.9 < pa ? 15 : 1, -2.4)) : (z(), eb(N, M, H));
    q && (m = (ab - Na) / xa, g = (cb - Ta) / xa);
    Na = ab;
    Sa = bb;
    Ta = cb;
  }, p = NO_INLINE(() => {
    var q = 0, x = 0, y = 0, I = 0, J = 0, O = 0, U = -1;
    for (var na = 0; 36 > na; ++na) {
      for (let aa = 96, ua = 512 * na; 416 > aa; aa += 4) {
        for (var ma = 0; 2 > ma; ++ma) {
          var T = ec[ua + aa + ma];
          const Oa = ec[ua + aa + ma + 2];
          T > I && (I = T);
          T + Oa && (0 > U || U === na) && (U = na, Oa === v ? ++q : x && x !== Oa || (x = Oa, ++y));
        }
      }
    }
    v = 0 > U ? 0 : y > 2 * q ? x : v;
    for (q = 36; 128 > q; ++q) {
      na = U = y = x = 0;
      for (let aa = 0, ua = 512 * q; 128 > aa; ++aa) {
        ma = ua + 4 * aa, T = ec[ma], 64 > aa ? T > x && (x = T) : T > y && (y = T), (T = ec[2 + ma]) > U && (U = T), T = ec[1 + ma], 64 < aa ? T > x && (x = T) : T > y && (y = T), (T = ec[3 + ma]) > na && (na = T);
      }
      (y -= x) * y > J * J && (J = y);
      (na -= U) * na > O * O && (O = na);
    }
    u = mb(1 - 0.01 * kb(ib(J *= 0.7), ib(O)), 0.3);
    J /= 255;
    I /= 255;
    O /= 255;
    z().invertSelf();
    eb(J, I, O, 0);
    N += ab;
    M += I;
    H += cb;
    F();
  });
  va = () => {
    F(v);
    Y.r9r(0, 0, 128, 128, 6408, 5121, ec);
    p();
    !E && v === ba || (ba = v, z().invertSelf(), eb(Na, Sa, Ta), N = ab, M = bb, H = cb, E = E && (v ? 0 : 1));
    (-20 > Na || 109 > Ta ? -25 : -9) > Sa && (E = 2);
    1 === v && (d[15].j = -15 > Na && 0 > Ta ? 1 : 0);
    l = R(l, wa * (30 < v && 35 > v), 2,);
    f = Q(f, Na, 0.5, 1);
    t = Q(t, C = pb(R(C, Sa, 2), Sa, E || 8 * ib(C - Sa),), 2, 1,);
    D = Q(D, Ta, 0.5, 1);
    ha ? (q = E + Jb(18), Ea = pb(Ea, Na, q), Ga = pb(Ga, Ta, q), Fa = pb(Fa, 1.6 + C, q), Ma = nb(Ma)) : (Ea = Q(Ea, f, 1, 2 + l,), Ga = Q(Ga, D + -18 + 5 * l, 1, 2 + l,), Fa = Q(Fa, kb(t + mb((-60 - Ta) / 8, 0, 20) + 13 + 9 * l, 6,), 4, 2,), q = jb(-6, -ib(D - Ga)), x = f - Ea, Ma = ob(Ma, 90 - nb(Math.atan2(q, x) / Ja), A + Jb(10),), La = ob(La, 90 - Math.atan2(tb(q, x), Fa - t) / Ja, A + Jb(10),));
    La = mb(La, -87, 87);
    A = 0;
    var q = mb(Ca, -1), x = mb(Da, -1), y = lb(tb(q, x) ** 0.5, 0.1), I = Math.atan2(q, x);
    y && (c = 90 - I / Ja);
    h = R(h, y, 10);
    X(Na, 0.06 * u * h * Math.cos(18.2 * a) + C, Ta,).rotateSelf(0, b = ob(b, c, Jb(8)));
    for (var J = 0; 2 > J; ++J) {
      const O = 9.1 * a - Math.PI * J;
      n(Ua[53].l, X(0)).translateSelf(0, h * mb(0.45 * Math.sin(O - Math.PI / 2)),).rotateSelf(h * Math.sin(O) * 0.25 / Ja, 0);
    }
    L = v ? 5 : R(L, E ? 13 : 19 - 2 * jb(0, Sa + 10), 2.2);
    m = v || E ? 0 : R(m, 0, 3);
    g = v || E ? 0 : R(g, 0, 3);
    q = (r = E ? 0 : R(r, v ? 7 * mb(2 * y) * u : 0, v ? 9 : 1,)) * y * ib(q) * Math.sin(I);
    x = r * y * ib(x) * Math.cos(I);
    I = ha ? (180 + Ma) * Ja : 0;
    y = xa * (m + (Math.cos(I) * x - Math.sin(I) * q));
    J = xa * -L;
    q = xa * (g + (Math.sin(I) * x + Math.cos(I) * q));
    z().invertSelf();
    eb(y, J, q, 0);
    N += ab;
    M += J;
    H += cb;
    F();
  };
});
let gc = () => {
  let c, b, h;
  const l = (m, g) => (m = mb(m), pb(m, 1 - m, g));
  (gc = () => {
    var m = (u, C, v) => X(u + Math.sin(a + 2) / 5, C + Math.sin(0.8 * a) / 5, v,).rotateSelf(2 * Math.sin(a), Math.sin(0.7 * a), Math.sin(0.9 * a),);
    ta = 1;
    h = pb(R(h, 0, 1), nb(h + 60 * xa), d[2].h - d[3].g,);
    wa = l(d[13].h, d[8].h);
    c = pb(R(c, 0, 5), nb(c + 56 * xa), wa,);
    b = pb(R(b, 0, 4), nb(b + 48 * xa), wa,);
    X(0, 270 * (d[1].h - 1) + (2 + 5 * Math.cos(1.5 * a)) * (1 - d[10].h),);
    var g = jb(1 - d[11].g, d[10].g);
    X(g * Math.sin(0.6 * a + 1.2) * 12, 0, 35);
    X(g * Math.sin(0.6 * a - 1.2) * 8.2, 0, 55);
    X(g * Math.sin(0.6 * a) * 12, 0, 45);
    X(9.8 * (1 - g));
    g = mb(1 - 5 * g) * l(d[11].h, d[2].h);
    X(0, g * Math.sin(1.35 * a) * 4);
    X(0, 0, g * Math.sin(0.9 * a) * 8);
    X(0, -6.5 * d[11].g);
    g = l(d[4].g, d[3].g);
    X(0, g * Math.sin(a) * 5 + 3.5 * (1 - kb(d[3].h, d[4].h)),);
    X(0, g * Math.sin(a + 3) * 6, g * Math.sin(0.6 * a + 1) * 6,);
    X(0, -7.3 * d[4].g);
    g = l(d[6].h, d[7].h);
    X(0, -2, 10 - 8.5 * g * ib(Math.sin(1.1 * a)));
    X(0, -2, 10 - 8.5 * g * ib(Math.sin(2.1 * a)));
    X(0, -2, 10 - 8.5 * kb(g * ib(Math.sin(1.5 * a)), (1 - d[6].h) * (1 - g),),);
    var r = l(d[5].g, d[13].g);
    for (g = 0; 4 > g; g++) {
      X((2 < g ? 2 * (1 - r) + r : 0) - 100, r * Math.sin(1.3 * a + 1.7 * g) * (3 + g / 3) + 0.7, 115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & g ? -1 : 1) + kb(0.05, r) * Math.cos(1.3 * a + 7 * g) * (4 - 2 * (1 - g / 3)),);
    }
    g = l(d[8].g, d[9].g);
    for (let u = 0; 3 > u; ++u) {
      X(0, g * Math.sin(1.5 * a + 1.5 * u) * 4 + (u ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)),);
    }
    g = l(l((d[9].h + d[9].g) / 2, d[8].g), (d[12].h + d[12].g) / 2,);
    X(0, 16 * g, 95 + 8.5 * mb(2 * g - 1));
    X(0, -4.7 * d[0].h, -15);
    X(0, -4.7 * d[10].h, 15);
    X(-99.7, -1.9 - 5.5 * d[3].h, 63.5);
    X(-100, 0.6 - 5.8 * d[13].h, 96.5);
    X(-75, 3 * (1 - d[2].g) * (1 - d[3].h), 55).rotateSelf(180 * (1 - d[2].g) + h, 0,);
    X(2.5 * (1 - r) - 139.7, -3 * (1 - d[5].h) - r * Math.sin(0.8 * a) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * a) * (3 + 3 * r), 0);
    X(-2 * Math.sin(a)).rotateSelf(25 * Math.sin(a));
    X(-81, 0.6, 106).rotateSelf(0, 40 + c);
    X(-65.8, 0.8, 106).rotateSelf(0, b);
    X(-50.7, 0.8, 106).rotateSelf(0, 180 - b);
    X(-50.7, 0.8, 91).rotateSelf(0, 270 + b);
    m(-12, 4.2, 40 * pa - 66);
    m(-123, 1.4, 55 - 65 * qa);
    for (m = 0; 16 > m; ++m) {
      r = d[m], g = r.h = R(r.h, r.j, 4), r.g = R(r.g, r.j, 1), n(n(r.l).multiplySelf(r.C), X(0)).rotateSelf(50 * g - 25, 0,).translateSelf(0, 1).m44 = g, fa && 3 > (eb(), tb(Na - ab, Sa - bb, Ta - cb,)) && (r.j ? 0.7 < g && (r.j = 0, Ha = m, Ub("* click *", 1), Wb()) : 0.3 > g && (r.j = 1, Ha = m, Ub("* click *", 1), Wb())), 14 === m && r.j && 0.8 < g && (r.j = 0, 13 > ka ? Ub("Not leaving now, there are souls to catch!", 3) : oa || (oa = 1, Ub("Well done. They will be punished.<br>Thanks for playing", 
      1 / 0))), 13 > m && Va[m]();
    }
    va();
    for (m = 0; 28 > m; ++m) {
      $a(Ua[28 + m].l, Xb, m);
    }
    for (let u, C = 0, v = 656; 26 > C; ++C, ++v) {
      u = Ua[2 + C].l, Xb[v++] = u.m41, Xb[v++] = u.m42, Xb[v++] = u.m43;
    }
  })();
};
const e = new DOMMatrix(), k = new DOMMatrix(), Za = new Float32Array(16), Xb = new Float32Array(760), ec = new Uint8Array(65536), Lb = (document.body.innerHTML += '<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle."</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}', 
10725888), Z = hC.getContext("webgl2", {powerPreference:"high-performance",}), Y = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const c in Y) {
  [Z, Y].map(b => b[c[0] + [...c].reduce((h, l, m) => (h * m + l.charCodeAt(0)) % 434, 0).toString(36)] = b[c]);
}
Kb(() => {
  let c = 0;
  const b = () => {
    if (2 == ++c) {
      const l = [], m = (A, E, L) => {
        da ? 1100 < hC.width && A.d97(4, Ua[55].D - Ua[53].B, 5123, 2 * Ua[53].B,) : (A.das(4, Ua[E].D - Ua[E].B, 5123, 2 * Ua[E].B, Va.length,), A.d97(4, Ua[L ? 53 : 56].B - 3, 5123, 6));
      }, g = (A, E, L = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",) => {
        const Q = {}, z = (p, q,) => (q = A.c6x(q), A.s3c(q, p), A.c6a(q), q), F = A.c1h();
        return A.abz(F, z(L, 35633)), A.abz(F, z(E, 35632)), A.l8l(F), p => p ? Q[p] || (Q[p] = A.gan(F, p)) : A.u7y(F);
      }, r = A => {
        var E = (A - (ca || A)) / 1e3;
        Ba += E;
        a += xa = da ? 0 : jb(0.055, E);
        ca = A;
        requestAnimationFrame(r);
        0 < xa && (Tb(), qa = R(qa, d[15].g, 0.2 + 0.3 * ib(2 * d[15].g - 1),), pa = oa ? (ha = 0, R(pa, -9, 0.015)) : R(pa, mb(a / 3), 1), Ia && a > Ia && (Ia = 0, h4.innerHTML = ""), gc(), Y.u3a(N("j"), Xb), Y.cbf(!0, !0, !0, !0), Y.c4s(16640), Y.cbf(!0, !1, !0, !1), Y.uae(N("b"), !1, $a(n().rotateSelf(0, 180).invertSelf().translateSelf(-Na, -Sa, 0.3 - Ta,),),), m(Y, 56, 1), Y.c4s(256), Y.cbf(!1, !0, !1, !0), Y.uae(N("b"), !1, $a(n().translateSelf(-Na, -Sa, -Ta - 0.3,),),), m(Y, 56, 1), Y.f1s(), 
        fa = 0);
        D();
        Z.u3a(D("j"), Xb);
        Z.b6o(36160, t);
        Z.v5y(0, 0, 2048, 2048);
        Z.ubh(D("g"), 4);
        Z.ubh(D("h"), 4);
        Z.uae(D("a"), !1, $a(e));
        A = Ea;
        E = Fa;
        let L = Ga;
        da ? (n().rotateSelf(0, 40 * Math.sin(Ba) - 80, -8), $a(k, Xb, 25), $a(k, Xb, 26), $a(k, Xb, 27), n(ja).invertSelf(), eb(3.6, 3.5), A = ab, E = bb, L = 5, n(e, C).rotateSelf(20, 0).translateSelf(-A, -E, -L).rotateSelf(0, 99)) : n(e, C).rotateSelf(-La, -Ma).invertSelf().translateSelf(-A, -E, -L);
        H(54.7);
        m(Z, 57, ha);
        ba(126);
        m(Z, 57, ha);
        Z.b6o(36160, null);
        Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
        Z.c4s(16640);
        Z.ubh(D("g"), 0);
        Z.ubh(D("h"), 1);
        Z.ubu(D("k"), A, E, L);
        Z.uae(D("a"), !1, $a(ja));
        Z.uae(D("b"), !1, $a(C));
        Z.uae(D("i"), !1, v);
        m(Z, 57, ha);
        M();
        Z.uae(M("b"), !1, $a(C.invertSelf()));
        Z.ubu(M("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, Ba);
        Z.d97(4, 3, 5123, 0);
      }, u = new DOMMatrix(), C = new DOMMatrix(), v = new Float32Array(32), f = h, t = Z.c5w(), D = g(Z, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), N = g(Y, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",), 
      M = g(Z, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [H, ba] = fb(2, A => {
        const E = Z.c25();
        return Z.a4v(33984 + A), Z.b9j(3553, E), Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), Z.t2z(3553, 10241, 9729), Z.t2z(3553, 10240, 9729), Z.t2z(3553, 34893, 515), Z.t2z(3553, 34892, 34894), Z.t2z(3553, 10243, 33071), Z.t2z(3553, 10242, 33071), L => {
          let Q = 0, z = 0, F = 0, p = 1 / 0, q = 1 / 0, x = 1 / 0, y = -1 / 0, I = -1 / 0, J = -1 / 0;
          Z.fas(36160, 36096, 3553, E, 0);
          Z.c4s(256);
          n().scale3dSelf(L *= 1.1).multiplySelf(n(ia[A], u).multiplySelf(C).invertSelf(),);
          for (let O = 0, U = 0; 8 > O; ++O) {
            eb(4 & O ? 1 : -1, 2 & O ? 1 : -1, 1 & O ? 1 : -1), Q -= l[U++] = (0 | ab) / (L * db), z -= l[U++] = (0 | bb) / (L * db), F -= l[U++] = (0 | cb) / (L * db);
          }
          n().rotateSelf(298, 139).translateSelf(Q / 8, z / 8, F / 8);
          for (let O = 0, U = 0; 8 > O; ++O) {
            eb(l[U++], l[U++], l[U++],), y = kb(y, ab), I = kb(I, bb), J = kb(J, cb), p = jb(p, ab), q = jb(q, bb), x = jb(x, cb);
          }
          F = 10 + A;
          x *= 0 > x ? F : 1 / F;
          J *= 0 < J ? F : 1 / F;
          Z.uae(D("b"), !1, $a(n(e, u).scaleSelf(2 / (y - p), 2 / (I - q), 2 / (x - J),).translateSelf((y + p) / -2, (I + q) / -2, (x + J) / 2).multiplySelf(k,), v, A,), 16 * A, 16,);
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
      D();
      Z.ubh(D("q"), 2);
      M();
      Z.ubh(M("q"), 2);
      Z.c5t(0, 0, 0, 1);
      Z.d4n(515);
      Z.e8z(2929);
      Z.e8z(2884);
      Y.e8z(2929);
      Y.e8z(2884);
      Y.v5y(0, 0, 128, 128);
      N();
      Y.uae(N("a"), !1, $a(Nb(1e-4, 2, 1.2, 0.4)));
      fc();
      Tb();
      requestAnimationFrame(r);
    }
  }, h = new Image();
  h.onload = b;
  h.src = Ka;
  Mb(() => {
    Kb(() => {
      let f = 0;
      const t = [], D = [], N = [], M = [], H = new Int32Array(8), ba = new Map(), A = new Int32Array(H.buffer, 0, 5), E = new Float32Array(H.buffer);
      Ua.map((z, F) => {
        let p;
        const q = x => {
          let {x:y, y:I, z:J} = p[x], O = (E[0] = y, E[1] = I, E[2] = J, x = "" + (p.A ? A : H), ba.get(x));
          return void 0 !== O ? (y = 3 * O, M[y] = (M[y++] + H[5]) / 2, M[y] = (M[y++] + H[6]) / 2, M[y] = (M[y] + H[7]) / 2) : (ba.set(x, O = ba.size), D.push(y, I, J, E[3]), N.push(H[4]), M.push(H[5], H[6], H[7])), O;
        };
        for (p of (E[3] = 55 < F ? -28 : F, z.i)) {
          const {x, y, z:I} = xb(p);
          H[4] = 0 | p.s;
          H[5] = 32767 * x;
          H[6] = 32767 * y;
          H[7] = 32767 * I;
          for (let J = 2, O = q(0), U = q(1); p.length > J; ++J) {
            t.push(O, U, U = q(J));
          }
        }
        z.i = 0;
        z.B = f;
        z.D = f = t.length;
      });
      [Z, Y].map(z => {
        z.b11(34962, z.c1b());
        z.b2v(34962, new Float32Array(D), 35044);
        z.v7s(0, 4, 5126, !1, 0, 0);
        z.b11(34962, z.c1b());
        z.b2v(34962, new Int16Array(M), 35044);
        z.v7s(1, 3, 5122, !0, 0, 0);
        z.b11(34962, z.c1b());
        z.b2v(34962, new Uint32Array(N), 35044);
        z.v7s(2, 4, 5121, !0, 0, 0);
        z.b11(34963, z.c1b());
        z.b2v(34963, new Uint16Array(t), 35044);
        z.e3x(0);
        z.e3x(1);
        z.e3x(2);
      });
      let L = [], Q = [];
      try {
        const [z, F, p, q, x] = JSON.parse(localStorage["Dante-22"],);
        L = z;
        Q = F;
        Ha = p;
        qa = q;
        a = x;
      } catch {
      }
      d.map((z, F) => z.h = z.g = z.j = 14 !== F && L[F] ? 1 : 0);
      Va.map((z, F) => z.j = Q[F] ? 1 : 0);
      Vb();
      pa = ka || 14 !== Ha ? 1 : 0;
      Kb(b);
    });
    var l = [-110, -100, -92, -82, -106, -97, -88];
    const m = f => w(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f,), g = f => {
      d.push({l:ra, C:f,});
      S(G(5), f.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), K(0.4, 0.5, 0.5),);
      S(G(5), f.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), K(0.4, 0.5, 0.5),);
      S(G().slice(0, -1), f.translate(0, -0.4).scale(0.5, 0.1, 0.5), K(0.5, 0.5, 0.4),);
    }, r = f => P(B(G().slice(0, -1), w(0, -f / 2).scale(6, f - 1, 2.2)), B(G().slice(0, -1), w(0, -f / 2 - 4).scale(4, f - 5, 4)), B(G(28, 1), w(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), u = P(B(G(), w(0, -0.5, 1).scale(1.15, 1.2, 6.5), K(0.25, 0.25, 0.35, 0.3),), P(B(G(3), w(0, 0, -5.5).scale(3, 2), K(0.6, 0.3, 0.4, 0.3)), B(G(), w(0, 0, -3.65).scale(2.5, 3), K(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1].map(f => B(G(), w(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), K(0.7, 0.2, 0, 0.3),)),), C = [B(G(), 
    w(0, -3).scale(11, 1.4, 3), K(0.9, 0.9, 0.9, 0.2)), B(G(), w(0, -2.2).scale(7.7, 0.5, 4), K(0.5, 0.5, 0.5, 0.2)), fb(12, f => B(G(), w(f - 5.5, 4.4).scale(0.1, 0.1, 2), K(0.6, 0.5, 0.3, 0.2),)).flat(), B(P(B(G(6), e.rotate(90).scale(6, 8, 6)), B(G(4, 0, 0.01), w(0, 6).scale(12, 2, 0.75).rotate(0, 45)), B(G(6), e.rotate(90).scale(5, 12, 5)), ...[-5, 0, 5].map(f => B(G(5), w(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),), e, K(0.3, 0.6, 0.6, 0.3),),].flat(), v = fb(11, f => vb(hb(ub(16), m(f), 
    K(1, 1, 0.8, 0.2)).reverse(), hb(ub(16), m(f + 1), K(1, 1, 0.8, 0.2)), 1,)).flat();
    V();
    S([Wa.slice(1)], w(-2).scale3d(3).rotate(90, 0));
    V();
    g(w(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15].map((f, t) => {
      S(G(), w(0, 0, t ? 22 : -23).scale(3, 1, 8), K(0.9, 0.9, 0.9, 0.2));
      S(G(), w(0, 6.3, f).scale(4, 0.3, 1), K(0.3, 0.3, 0.3, 0.4));
      S(G().slice(0, -1), w(0, 1, f).scale(3, 0.2, 0.35), K(0.5, 0.5, 0.5, 0.3));
    });
    S(G(), w(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), K(0.8, 0.8, 0.8, 0.2));
    S(G(), w(3, 1.5, -20).scale(0.5, 2, 5), K(0.7, 0.7, 0.7, 0.2));
    S(G(5), w(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), K(0.6, 0.3, 0.3, 0.4));
    S(G(), w(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), K(0.75, 0.75, 0.75, 0.2),);
    S(P(Ib(P(B(G(6, 0, 0, 0.3), w(0, -0.92).scale(13, 2, 13), K(0.8, 0.8, 0.8, 0.2),), B(G(), e.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), K(0.5, 0.5, 0.5, 0.5),),), B(G(), e.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), K(0.8, 0.2, 0.2, 0.5),), B(G(6), w(0, -8).scale(9, 8, 7), K(0.2, 0.1, 0.4, 0.5)), B(G(6, 0, 0, 0.3), w(8, -4, -4).scale(14, 2, 13), K(0.7, 0.7, 0.7, 0.2),),), B(G(6), w(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), K(0.5, 0.5, 0.5, 
    0.5),), B(G(5, 0, 1.5), w(0, 1).scale(4.5, 0.3, 4.5), K(0.7, 0.5, 0.9, 0.2),), B(G(5), e.scale(5, 30, 5), K(0.4, 0.2, 0.6, 0.5)),),);
    g(w(15.8, -2, 3.8));
    S(G(), w(-18.65, -3, 55).scale(2.45, 1.4, 2.7), K(0.9, 0.9, 0.9, 0.2));
    g(w(-55, -1.1, 46).rotate(0, 90));
    S(G(7), w(-57, -2.6, 46).scale(4, 1, 4), K(0.8, 0.8, 0.8, 0.3));
    S(G(6), w(-61.3, -2.4, 49).scale(3, 1, 5), K(0.4, 0.6, 0.6, 0.3));
    S(C, w(-53, 0, 55));
    S(G(), w(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), K(0.7, 0.7, 0.7, 0.2),);
    S(G(3, 0, -0.5), w(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), K(0.8, 0.8, 0.8, 0.2),);
    S(P(B(G(), w(-100, 1, 63).scale(7.5, 4), K(0.5, 0.5, 0.5, 0.4)), B(G(), w(-100, 0, 63).scale(2, 2, 4), K(0.5, 0.5, 0.5, 0.4)), B(G(20, 1), w(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), K(0.5, 0.5, 0.5, 0.4),),),);
    S(P(Ib(B(G(), w(-100, -2.6, 70).scale(3, 1.1, 7), K(0.8, 0.8, 0.8, 0.2),), B(G(), w(-100, -2.4, 55).scale(8, 0.9, 8), K(0.8, 0.8, 0.8, 0.2),), B(G(), w(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), K(0.8, 0.8, 0.8, 0.2),), B(G(6), w(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), K(0.6, 0.6, 0.6, 0.3),), B(G(), w(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), K(0.8, 0.8, 0.8, 0.2),), B(G(), w(-100, 0.42, 92).scale(3, 1.1, 4.1), K(0.8, 0.8, 0.8, 0.2),), B(G(), w(-100, -1.1, 82.39).rotate(-15, 
    0).scale(3, 1.1, 6), K(0.8, 0.8, 0.8, 0.2),),), B(G(8), w(-100, -1, 55).scale(7, 0.9, 7), K(0.3, 0.3, 0.3, 0.4)), B(G(8), w(-100, -2, 55).scale(4, 0.3, 4), K(0.4, 0.4, 0.4, 0.5)), B(G(8, 0, -3.1), w(-100, -3, 55).scale(0.4, 1, 0.4), K(0.4, 0.4, 0.4, 0.5),),),);
    Wa.map(({x:f, z:t}) => {
      S(G(6), w(3 * f, 3, 15 * t).scale(0.7, 4, 0.7), K(0.6, 0.3, 0.3, 0.4));
      S(G(6), w(7 * f - 100, -3, 7 * t + 55).scale(1, 8.1), K(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4].map(D => S(G(6), w(7 * f - 100, D, 7 * t + 55).scale(1.3, 0.5, 1.3), K(0.4, 0.2, 0.2, 0.8),));
      [1.5, 8].map(D => S(G(15, 1), w(9 * f - 38.9, D - 11.3, 11 * t + 17).scale(1.5, 0.5, 1.5), K(0.6, 0.6, 0.6, 0.3),));
      S(G(14, 1).slice(0, -2), w(9 * f - 38.9, -18, 11 * t + 17).scale(1, 14.2), K(0.25, 0.25, 0.25, 1),);
    });
    fb(7, f => {
      S(G((23 * f + 1) % 5 + 5, 0, 0.5), w(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3,), K(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    S(G(), w(-87, -9.5, 24).scale(7, 1, 3), K(0.4, 0.5, 0.6, 0.4));
    S(G(4), w(-86, -9.2, 27).scale(5, 1, 5), K(0.5, 0.6, 0.7, 0.3));
    S(G(12, 1), w(-86, -9, 31).scale(1.5, 1, 1.5), K(0.3, 0.3, 0.4, 0.1));
    g(w(-86, -7.5, 31));
    S(G(5), w(-38.9, -11.1, 10).scale(2, 1.2, 2), K(0.2, 0.4, 0.7, 0.3));
    S(P(Ib(B(G(), w(-38.9, -11.3, 17).scale(11, 1, 13), K(0.3, 0.4, 0.6, 0.3),), B(G(5), w(-38.9, -11.1, 17).scale(9, 1, 9), K(0, 0.2, 0.3, 0.5),),), B(G(5), w(-38.9, -11.1, 17).scale3d(5.4), K(0, 0.2, 0.3, 0.5)),),);
    g(w(-38.9, -9.4, 10));
    S(P(Ib(B(G(6), w(0, 0, -18).scale(15, 1.3, 15), K(0.7, 0.7, 0.7, 0.3),), B(G(5), e.scale(4.5, 1.2, 9), K(0.45, 0.4, 0.6, 0.3)),), ...fb(6, f => fb(6, t => B(G(6), w(4.6 * t - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * t) - 32).scale3d(2), K(0.7, 0.7, 0.7, 0.3),))).flat(),), w(-38.9, -11.3, -1),);
    g(w(-84, -0.7, 85).rotate(0, 45));
    S(G(5), w(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), K(0.8, 0.1, 0.25, 0.4));
    g(w(-116, -1.4, -18).rotate(0, 180));
    S(P(B(G(), w(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...l.map(f => B(G(), w(f, 0.05, -3).scale(1.35, 2, 9))),), e, K(0.5, 0.5, 0.6, 0.2),);
    S(G(), w(-96.5, 1, -2).scale(19, 0.3, 0.3), K(0.5, 0.5, 0.6, 0.2));
    S(G(6), w(-116, -2.6, -16.5).scale(3.2, 0.8, 3), K(0.6, 0.5, 0.7, 0.2));
    S(G(), w(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), K(0.8, 0.8, 0.8, 0.2));
    S(G().slice(0, -1), w(-115.5, -17, -12).scale(0.5, 15, 2.2), K(0.6, 0.6, 0.6, 0.3),);
    S(G(8).slice(0, -2), w(-114, -17, -2).scale(2, 15, 2), K(0.6, 0.6, 0.6, 0.3));
    S(G(8).slice(0, -2), w(-79, -17, -2).scale(2, 15, 2), K(1, 1, 1, 0.3));
    S(G().slice(0, -1), w(-77, -17, -50.5).scale(2.2, 15, 0.5), K(0.6, 0.6, 0.6, 0.3),);
    S(P(B(G(12).slice(0, -1), w(-77, -14.5, -12).scale(4, 17.5, 4), K(0.7, 0.7, 0.7, 0.2),), B(G(12), w(-77, 3.1, -12).scale(3, 5, 3), K(0.4, 0.5, 0.6, 0.2)), B(G(), w(-79, 0.1, -12).scale(3.5, 2, 1.3), K(0.4, 0.5, 0.6, 0.2),), B(G(), w(-77, 0.1, -14).scale(1.5, 2, 2), K(0.4, 0.5, 0.6, 0.2)),),);
    S(P(B(G(), w(-93, -5.8, -40).scale(9, 1, 5), K(0.8, 0.8, 0.8, 0.1)), B(G(9), w(-98, -5.8, -40).scale(3, 8, 3), K(0.7, 0.7, 0.7, 0.2)),),);
    S(G(), w(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), K(0.6, 0.6, 0.6, 0.3));
    S(G(9).slice(0, -1), w(-98, -18.4, -40).scale(2.5, 13.5, 2.5), K(0.5, 0.5, 0.5, 0.3),);
    g(w(-98, -4.4, -40).rotate(0, 90));
    [-1, 1].map((f, t) => {
      S(P(B(G(), w(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), K(0.5, 0.5, 0.5, 0.4),), B(G(5), w(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), K(0.6, 0.24, 0.2, 0.5),), B(G(), e.scale(3, 3, 10), K(0.6, 0.24, 0.2, 0.5)), B(G(5), w(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), K(0.6, 0.24, 0.2, 0.5),), B(G(32, 1), w(0, 3, -5).scale(3, 4, 10).rotate(90, 0), K(0.6, 0.24, 0.2, 0.5),),), w(f - 100, 0.7, 97),);
      S(G(12, 1), w(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), K(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5].map(D => S(G(15, 1), w(-7.5 * f - 100, D + 0.7, 96).scale(1.1, 0.5, 1.1), K(0.5, 0.24, 0.2, 0.4),));
      S(v, w(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      S(v, w(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      fb(5, D => S(v, w(18.5 * (t - 0.5), 0, 4.8 * D - 9.5).rotate(0, 180 - 180 * t).scale(1.2, 10, 1.2),));
    });
    S(P(B(G(), w(-82.07, 0.8, 106).scale(11, 0.9, 2.2), K(0.7, 0.7, 0.7, 0.1),), B(G(45, 1), w(-81, 0.7, 106).scale3d(7.7), K(0.7, 0.7, 0.7, 0.1),),),);
    S(G(), w(-50.7, 1, 99).scale(2, 0.65, 1), K(0.7, 0.7, 0.7, 0.2));
    S(G(), w(-58, 1, 106).scale(2, 0.65, 2), K(0.7, 0.7, 0.7, 0.2));
    S(G(), w(-34.2, 0.4, 91).scale(3, 1, 3), K(0.7, 0.7, 0.7, 0.3));
    S(G(), w(-42, 0.4, 91).scale(5, 1, 2.5), K(0.7, 0.7, 0.7, 0.3));
    S(G(5), w(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), K(0.2, 0.5, 0.5, 0.6));
    g(w(-34, 2.7, 96).rotate(-12, 0));
    S(P(Ib(B(G(), w(-101.5, 0.7, 93.5).scale(10.5, 1, 2), K(0.7, 0.7, 0.7, 0.2),), B(G(6, 0, 0, 0.6), w(-100, 0.7, 105.5).scale(8, 1, 11), K(0.7, 0.7, 0.7, 0.2),),), B(G(5), w(-100, 0.7, 113).scale(4, 3, 4), K(0.7, 0.7, 0.7, 0.2)),),);
    fb(3, f => {
      S(r(16), w(-77, -9, -12 * f - 20).rotate(0, 90), K(0.6, 0.6, 0.6, 0.3));
      S(r(16), w(12 * f - 109, -9, -12), K(0.6, 0.6, 0.6, 0.3));
      S(r(24.7 - 0.7 * (1 & f)), w(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? K(0.5, 0.5, 0.5, 0.3) : K(0.35, 0.35, 0.35, 0.5),);
    });
    S(P(Ib(B(G(), w(0, 16, 111).scale(3, 1, 3.8), K(0.5, 0.3, 0.3, 0.4)), B(G(6, 0, 0, 0.3), w(0, -0.92, 95).scale(14, 2, 14), K(0.8, 0.8, 0.8, 0.2),), B(G(), w(0, 16, 110.5).scale(12, 1, 3), K(0.5, 0.3, 0.3, 0.4)),), B(G(5), w(0, 0, 95).scale3d(6), K(0.3, 0.3, 0.3, 0.5)), B(G(5), w(0, 16, 103.5).scale(5.5, 5, 5.5), K(0.5, 0.3, 0.3, 0.4),),),);
    g(w(0, 1.7, 82).rotate(0, 180));
    S(G(5).slice(0, -1), w(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), K(0.5, 0.3, 0.3, 0.4),);
    S(G(6), w(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), K(0.5, 0.6, 0.7, 0.3));
    S(G(), w(0, 16, 127.8).scale(1.5, 1, 0.7), K(0.5, 0.6, 0.7, 0.3));
    S(G(7), w(0, 15.1, 133).scale(5, 2, 5), K(0.4, 0.5, 0.6, 0.4));
    Yb(w(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);
    Yb(w(0, 2.8), [5, 10, 3], [-5, 10, 3], ...ub(18).map(({x:f, z:t}) => [7 * f, 10 * t, 4.5 - 2 * ib(f)]),);
    Yb(w(0, 3, 95), ...ub(9).map(({x:f, z:t}) => [9 * f, 9 * t, 4]),);
    Yb(w(0, 19, 134), [0, 0, 3.5]);
    Yb(w(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);
    Yb(w(-89, 0.2, 80), [0, 0, 6]);
    Yb(w(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);
    Yb(w(-115, 0.2, -12), [0, 0, 3.5]);
    Yb(w(-93, -3, -40).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);
    V();
    S(G(5), w(0, -0.2).scale(5, 1, 5), K(0.6, 0.65, 0.7, 0.3));
    g(w(0, 1.2));
    fb(2, () => {
      V();
      Wa.map(({x:f, z:t}) => {
        S(G(11, 1).slice(0, -2), w(4 * f, 4, 4 * t).scale(0.8, 3, 0.8), K(0.5, 0.3, 0.7, 0.6),);
        S(G(), w(4 * f, 7, 4 * t).scale(1, 0.3), K(0.5, 0.5, 0.5, 0.3));
      });
      S(P(B(G().slice(0, -1), e.scale(5, 1, 5), K(0.8, 0.8, 0.8, 0.3)), ...[-1, 1].map(f => B(G(25, 1), w(5 * f, 0.2).rotate(-30 * f).scale(4, 1, 3), K(0.8, 0.8, 0.8, 0.3),)),),);
      S(G(), w(0, -3).scale(8, 2, 8), K(0.4, 0.4, 0.4, 0.3));
    });
    V();
    S(P(Ib(B(G(), e.scale(1.5, 1, 5), K(0.9, 0.9, 0.9, 0.2)), B(G(), w(0, -2).scale(2, 3.2, 1.9), K(0.3, 0.8, 0.5, 0.5)), B(G(6), e.scale(4, 1, 5), K(0.9, 0.9, 0.9, 0.2)), B(G(16, 1, 0, 4), e.scale(1, 1, 1.5).rotate(0, 90), K(0.9, 0.9, 0.9, 0.2),),), B(G(), e.scale(1.3, 10, 1.3), K(0.2, 0.7, 0.4, 0.6)),),);
    Yb(w(0, 2.8), [0, 0, 4.5]);
    V();
    S(G(3), w(-23, -1.7, 55.8).scale(5, 0.7, 8.3), K(0.3, 0.6, 0.6, 0.2));
    S(G(8), w(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), K(0.8, 0.8, 0.8, 0.2));
    S(G(), w(-23, -2.2, 62).scale(3, 1, 4), K(0.5, 0.5, 0.5, 0.3));
    S(G(), w(-23, -3, 55).scale(5.2, 1.7, 3), K(0.5, 0.5, 0.5, 0.3));
    g(w(-23, -0.5, 66.5));
    V();
    S(G(), w(-22.55, -3, 55).scale(1.45, 1.4, 2.7), K(0.7, 0.7, 0.7, 0.2));
    S(P(B(G(), e.scale(3, 1.4, 2.7)), B(G(), e.scale(1.2, 8, 1.2)),), w(-33, -3, 55), K(0.7, 0.7, 0.7, 0.2),);
    V();
    S(P(B(G(), e.scale(3, 1.4, 2.7)), B(G(), e.scale(1, 3)),), w(-27, -3, 55), K(0.9, 0.9, 0.9, 0.2),);
    S(G(), w(-39, -3, 55).scale(3, 1.4, 2.7), K(0.9, 0.9, 0.9, 0.2));
    V();
    S(G(6), w(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), K(0.7, 0.7, 0.7, 0.4),);
    V();
    [0, 12, 24].map(f => S(G(), w(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), K(0.2, 0.5, 0.6, 0.2)));
    V();
    [6, 18].map(f => S(G(), w(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), K(0.1, 0.4, 0.5, 0.2)));
    V();
    S(G(5), w(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), K(0.3, 0.3, 0.5, 0.5),);
    S(G(5).slice(0, -1), w(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), K(0.6, 0.3, 0.5, 0.5),);
    S(P(B(G(5), w(0, 2).scale(5, 7, 5).skewY(8)), B(G(5), w(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), B(G(), e.scale(2, 8, 3)),), w(-38.9, -11.3, 17), K(0.2, 0.4, 0.5, 0.5),);
    Yb(w(-39.1, -0.6, 17).rotate(11), ...ub(15).map(({x:f, z:t}) => [3 * f, 3 * t, 1.2]),);
    l.map((f, t) => {
      t % 2 || 6 <= t || V();
      S(u, w(f, 1.9, -12));
    });
    fb(4, f => {
      V();
      S(G(6), w(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), K(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [K(0.1, 0.55, 0.45, 0.2), K(0.2, 0.5, 0.5, 0.3), K(0.3, 0.45, 0.55, 0.4)].map((f, t) => {
      V();
      S(G(), w(-23.5, 0.5, 91 + 6.8 * t).scale(1 === t ? 2 : 3.3, 1, 3.3), f);
      2 === t && S(G(), w(-29.1, 0.4, 91).scale(2.1, 1, 3), K(0.7, 0.7, 0.7, 0.3));
      1 === t && S(G(), w(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), K(0.6, 0.6, 0.7, 0.3),);
    });
    V();
    S(G(5), e.scale(5, 1.1, 5), K(0.5, 0.3, 0.3, 0.4));
    S(G(5), e.scale(5.5, 0.9, 5.5), K(0.25, 0.25, 0.25, 0.4));
    g(w(0, 1.5, -1).rotate(0, 180));
    fb(4, f => {
      V();
      fb(7, t => S(B(G(8, 1).slice(0, -1), w((2 < f ? 3.5 : 4) * (t / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), K(0.3, 0.3, 0.38),),),);
    });
    V();
    S(C);
    V();
    S(G(5).slice(0, -1), w(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), K(0.5, 0.5, 0.5, 0.5),);
    S(G(10).slice(0, -1), w(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), K(0.3, 0.8, 0.7, 0.3),);
    S(G(15, 1), w(-7.5).rotate(0, 90).scale(3, 2.3, 3), K(0.4, 0.4, 0.4, 0.3));
    g(w(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1].map(f => S(v, e.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    S(P(B(G(10), e.scale(6, 2, 6), K(0.1, 0.6, 0.5, 0.3)), B(G(10), e.scale(3.3, 6, 3.3), K(0.1, 0.6, 0.5, 0.5)),),);
    Yb(w(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    V();
    S(G(3), w(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), K(0.5, 0.3, 0.3, 0.4),);
    [22, 30].map(f => {
      S(G(6), w(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), K(0.7, 0.7, 0.7, 0.4),);
      S(G(), w(0, 6.2, f + 95).scale(0.5, 11, 0.5), K(0.5, 0.3, 0.3, 0.4));
    });
    V();
    S(G(5).slice(0, -1), w(0, 2).scale(1, 2), K(0.3, 0.3, 0.3, 0.2));
    S(G(8).slice(0, -1), w(0, 2).scale(3, 1.5, 3).rotate(0, 22), K(0.7, 0.7, 0.7, 0.1),);
    S(P(B(G(28, 1), e.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2)), B(G(), w(0, 0, -5.5).scale(1.5, 3, 2.7), K(0.45, 0.45, 0.45, 0.2),),),);
    Yb(w(0, 3), ...ub(14).map(({x:f, z:t}) => [5.6 * f, 5.6 * t, 2]),);
    V();
    [-1, 1].map(f => S(v, e.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    S(P(B(G(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), K(0.35, 0, 0, 0.3),), B(G().slice(0, -1), w(0, 2).scale(9, 1.1, 2), K(0.3, 0, 0, 0.3)),),);
    S(G(5).slice(0, -1), w(0, 1).scale(1, 0.2), K(0.3, 0.3, 0.3, 0.2));
    S(G(28, 1), e.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2));
    V();
    S(P(B(G(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), K(0.35, 0, 0, 0.3),), B(G().slice(0, -1), w(0, 2, 7).scale(2, 1.1, 9), K(0.3, 0, 0, 0.3),), B(G().slice(0, -1), w(7, 2).scale(9, 1.1, 2), K(0.3, 0, 0, 0.3)),),);
    S(G(5).slice(0, -1), w(0, 1).scale(1, 0.2), K(0.3, 0.3, 0.3, 0.2));
    S(G(28, 1), e.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2));
    V();
    S(P(B(G(28, 1).slice(0, -1), w(0, 2).scale(7.5, 1, 7.5), K(0.35, 0, 0, 0.3),), B(G().slice(0, -1), w(0, 2, -7).scale(2, 1.1, 9), K(0.3, 0, 0, 0.3),), B(G().slice(0, -1), w(7, 2).scale(9, 1.1, 2), K(0.3, 0, 0, 0.3)),),);
    S(G(5).slice(0, -1), w(0, 1).scale(1, 0.2), K(0.3, 0.3, 0.3, 0.2));
    S(G(28, 1), e.scale(7.5, 1, 7.5), K(0.45, 0.45, 0.45, 0.2));
    fb(2, () => {
      V();
      S(P(B(G(30, 1, 1.15, 1), w(0, -3).scale(3.5, 1, 3.5), K(0.7, 0.4, 0.25, 0.7),), B(G(), w(4, -1.2).scale3d(2), K(0.7, 0.4, 0.25, 0.3)), B(G(30, 1, 1.3, 1), w(0, -2.5).scale(2.6, 1, 3), K(0.7, 0.4, 0.25, 0.2),),),);
      g(w(0, -3, 4));
    });
    for (l = 0; 16 > l; ++l) {
      V(), S(G(9, 1), w(0, 0.8).scale(0.2, 0.3, 0.2), K(0.7, 1, 0.2)), S(G(6, 1).slice(0, -1), e.scale(0.12, 1.2, 0.12), K(0.3, 0.3, 0.5, 0.1)), S(G(3), w(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), K(0.2, 0.2, 0.2, 0.1));
    }
    V();
    S(wb(20), w(0, 1).scale3d(0.5), K(1, 0.3, 0.4));
    S(wb(30), e.scale(0.65, 0.8, 0.55), K(1, 0.3, 0.4));
    S(G(), w(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), K(0.3, 0.3, 0.3));
    [-1, 1].map(f => {
      S(v, e.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), K(1, 1, 0.8),);
      S(B(P(G(15, 1), B(G(), w(0, 0, 1).scale(2, 2, 0.5)),), e.rotate(-90, 0).scale(0.1, 0.05, 0.1), K(0.3, 0.3, 0.3),), w(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1].map(f => {
      V();
      S(G(20, 1), w(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), K(1, 0.3, 0.4));
    });
    V();
    S(G(6, 1).slice(0, -1), e.scale(0.77, 1, 0.77), K(1, 0.3, 0.5));
    V();
    S(wb(28, 22, (f, t, D) => {
      var N = t / 22, M = f * Math.PI * 2 / 28, H = Math.sin(N ** 0.6 * Math.PI / 2);
      f = N * N * Math.sin(f * Math.PI * 0.5) / 4;
      return 21 < t ? {x:D.A = 0, y:-0.5, z:0,} : {x:Math.cos(M) * H, y:Math.cos(N * Math.PI) - N - f, z:Math.sin(M) * H + Math.sin(f * Math.PI * 2) / 4,};
    }), e.scale3d(0.7), K(1, 1, 1),);
    [-1, 1].map(f => S(wb(10), w(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});

