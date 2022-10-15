let ca, ea, fa, ha, na, oa, pa, ta, ua, va, wa, xa, za, a, Aa, Da, c = 0, Ea = 0, Fa = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 14, Na = 0.1;
const Oa = Math.PI / 180;
var Pa = 0, Qa = 180, Ra = 0, Sa = 0, Ta = 0;
const Ua = [], d = [], Va = [], Wa = [{x:-1, z:1,}, {x:1, z:1,}, {x:1, z:-1,}, {x:-1, z:-1,},], Za = ["(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]".split(" "), ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5".split(" "), 
["9(((9(((9(((9(((9(((9(((9(((9", "9(((Q(((Q(((Q",], ["9(9(9(9(9(9(9(999(9(9(9(999(9(9", "9(9(9(9(9(999(9(((((Q",], ["((((Q(((((((Q(((((((Q(((((((Q", "Q((Q((Q((Q((Q((Q((((Q",],], $a = [[69, 128, 0, 143, 128, 0, 0, 196, 100, 36, 0, 0, 149, 110, 31, 47, 3, 56, 2, 0,], [100, 128, 0, 201, 128, 0, 0, 100, 144, 35, 0, 6, 135, 0, 32, 147, 6, 0, 6, 195,], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0,], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 
16, 4, 187,], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64,],], ab = NO_INLINE(b => 0 > b ? -b : b), bb = NO_INLINE((b, e) => b < e ? b : e), cb = NO_INLINE((b, e) => e < b ? b : e), db = (b, e) => ab(b) > e ? b : 0, gb = (b, e = 0, h = 1) => b < e ? e : h < b ? h : b, hb = b => Math.atan2(Math.sin(b * Oa), Math.cos(b * Oa)) / Oa, ib = (b, e, h) => b + (2 * (e = (e - b) % 360) % 360 - e) * gb(h) || 0, jb = (b, e, h) => (0 < h ? 1 > h ? b + (e - b) * h : e : b) || 
0, kb = (b, e, h = 0) => (b * b + e * e + h * h) ** 0.5, mb = (b, e = lb, h = 0,) => (h *= 16, e[h++] = b.m11, e[h++] = b.m12, e[h++] = b.m13, e[h++] = b.m14, e[h++] = b.m21, e[h++] = b.m22, e[h++] = b.m23, e[h++] = b.m24, e[h++] = b.m31, e[h++] = b.m32, e[h++] = b.m33, e[h++] = b.m34, e[h++] = b.m41, e[h++] = b.m42, e[h++] = b.m43, e[h] = b.m44, e), ob = (b = g, e = nb,) => (e.m11 = b.m11, e.m12 = b.m12, e.m13 = b.m13, e.m14 = b.m14, e.m21 = b.m21, e.m22 = b.m22, e.m23 = b.m23, e.m24 = b.m24, e.m31 = 
b.m31, e.m32 = b.m32, e.m33 = b.m33, e.m34 = b.m34, e.m41 = b.m41, e.m42 = b.m42, e.m43 = b.m43, e.m44 = b.m44, e), tb = (b = 0, e = 0, h = 0, l = 1) => {
  pb = nb.m11 * b + nb.m21 * e + nb.m31 * h + nb.m41 * l;
  qb = nb.m12 * b + nb.m22 * e + nb.m32 * h + nb.m42 * l;
  rb = nb.m13 * b + nb.m23 * e + nb.m33 * h + nb.m43 * l;
  sb = nb.m14 * b + nb.m24 * e + nb.m34 * h + nb.m44 * l;
};
var pb, qb, rb, sb;
const k = NO_INLINE((b, e, h) => g.translate(b, e, h)), ub = (b, e) => Array.from(Array(b), (h, l) => e(l)), vb = (b, e, h) => (b.A = h, b.s = e, b), wb = (b, e, h = b.s,) => (ob(e), vb(b.map(({x:l, y:p, z:r}) => (tb(l, p, r), {x:pb, y:qb, z:rb,})), h, b.A,)), w = (b, e, h) => b.map(l => wb(l, e, h)), xb = (b, e = 0) => ub(b, h => {
  const l = Math.cos(2 * Math.PI * h / b);
  return {x:Math.sin(2 * Math.PI * h / b), y:0, z:0.01 > ab(l) ? l : 0 > l ? l - e : l + e,};
}), yb = (b, e, h) => b.map((l, p, {length:r}) => vb([l, e[r - p - 1], e[r - (p + 1) % r - 1], b[(p + 1) % r],], b.s, h,)), z = (b, e, h = 0, l,) => (b = b ? xb(b, l) : Wa, l = wb(b, k(0, 1).scale3d(0 < h ? h : 1)), b = wb(b, k(0, -1).scale3d(0 > h ? -h : 1)).reverse(), [...yb(b, l, e), l, b,]), zb = NO_INLINE(b => 1 - Math.exp(-Fa * b)), Ab = NO_INLINE((b, e, h) => jb(b, e, zb(h))), Bb = b => {
  h4.innerHTML += ".";
  setTimeout(b);
}, Db = b => Math.sin(b * Math.PI * 2), Eb = b => 0.5 > b % 1 ? 1 : -1, Fb = b => b % 1 * 2 - 1, Gb = b => 2 > (b = b % 1 * 4) ? b - 1 : 3 - b, Hb = b => {
  let e = 0;
  const h = () => {
    let r = 0;
    const H = D => {
      let K, R, V, da = 0, Y = 0;
      const Z = [], ia = new Int32Array(768 * D), la = 2 ** (x - 9) / D, ya = Math.PI * 2 ** (q - 8) / D, aa = A * D & -2;
      for (let W = 0; 11 >= W; ++W) {
        for (let ba = 0, qa = +"000001234556112341234556011111111112011111111112000001111112"[12 * e + W]; 32 > ba; ++ba) {
          const ma = (32 * W + ba) * D;
          for (var u = 0; 4 > u; ++u) {
            if (K = 0, qa && (K = I[qa - 1].charCodeAt(ba + 32 * u) - 40, K += 0 < K ? 106 : 0), K) {
              var v;
              if (!(v = Z[K])) {
                v = K;
                let M = void 0, sa = void 0;
                var G = K;
                let Ba = 0, Ga = 0;
                const ja = 2 > e ? Fb : Db, eb = 2 > e ? 1 > e ? Eb : Gb : Db, Mb = new Int32Array(F + Q + N);
                for (let Xa = 0, Cb = 0; F + Q + N > Xa; ++Xa, ++Cb) {
                  let Ya = 1;
                  F > Xa ? Ya = Xa / F : F + Q > Xa || (Ya = (1 - (Ya = (Xa - F - Q) / N)) * 3 ** (-t / 16 * Ya));
                  0 > Cb || (Cb -= 4 * D, sa = 0.00396 * 2 ** ((G + ra - 256) / 12), M = 0.00396 * 2 ** ((G + ka - 256) / 12) * (1 + (e ? 0 : 0.0072)));
                  Mb[Xa] = 80 * (ja(Ba += sa * Ya ** (Ca / 32)) * U + eb(Ga += M * Ya ** (f / 32)) * fb + (m ? (2 * Math.random() - 1) * m : 0)) * Ya | 0;
                }
                v = Z[v] = Mb;
              }
              for (let M = 0, sa = 2 * ma; v.length > M; ++M, sa += 2) {
                ia[sa] += v[M];
              }
            }
          }
          for (let M, sa = 0; D > sa; ++sa) {
            v = 0;
            u = 2 * (ma + sa);
            var E = (((M = ia[u]) || V) && (R = 0.00308 * S, 1 !== e && 4 !== e || (R *= Math.sin(la * u * Math.PI * 2) * X / 512 + 0.5), R = 1.5 * Math.sin(R), da += R * Y, E = (1 - P / 255) * (M - Y) - da, Y += R * E, M = 4 === e ? Y : 3 === e ? E : da, e || (M = 1 > (M *= 22e-5) ? -1 < M ? Math.sin(M / 4 * Math.PI * 2) : -1 : 1, M /= 22e-5), M *= y / 32, V = 1e-5 < M * M, E = Math.sin(ya * u) * L / 512 + 0.5, v = M * (1 - E), M *= E), u < aa || (v += ia[1 + u - aa] * B / 255, M += ia[u - aa] * 
            B / 255), r + u >> 1);
            l[E] += (ia[u] = v) / 65536;
            p[E] += (ia[++u] = M) / 65536;
          }
        }
      }
      r += 768 * D;
    }, I = Za[e], [U, ra, Ca, fb, ka, f, m, F, Q, n, t, x, S, P, y, L, q, B, A, X] = $a[e], N = 4 * n ** 2;
    H(5513);
    H(4562);
    H(3891);
    Bb(5 > ++e ? h : b);
  }, l = (fa = new AudioBuffer({numberOfChannels:2, sampleRate:44100, length:5362944,})).getChannelData(0), p = fa.getChannelData(1);
  Bb(h);
}, Ib = (b, e, h, l) => new DOMMatrix([h, 0, 0, 0, 0, l, 0, 0, 0, 0, (e + b) / (b - e), -1, 0, 0, 2 * e * b / (b - e), 0,]), Jb = (b, e) => {
  1 / 0 > Na && (Na = c + e, h4.innerHTML = b);
}, Kb = () => {
  h3.innerHTML = "Souls: " + [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII",][ua = Va.reduce((b, e) => b + e.j, 0)] + " / XIII";
}, Lb = () => {
  localStorage["Dante-22"] = JSON.stringify([d.map(b => b.j), Va.map(b => b.j), Ma, xa, c,]);
}, C = NO_INLINE((b, e, h, l = 0) => 255 * l << 24 | 255 * h << 16 | 255 * e << 8 | 255 * b), J = (b, e = 0, h = 0) => {
  const l = ob(g, Ua[++za].l);
  return l.m41 = b, l.m42 = e, l.m43 = h, l;
}, Nb = b => {
  let e, h = 0, l = 0, p = 0, r = b.at(-1);
  for (e of b) {
    h += (r.y - e.y) * (r.z + e.z), l += (r.z - e.z) * (r.x + e.x), p += (r.x - e.x) * (r.y + e.y), r = e;
  }
  return e = kb(h, l, p), h /= e, l /= e, p /= e, {x:h, y:l, z:p, w:h * r.x + l * r.y + p * r.z,};
}, Ob = ({x:b, y:e, z:h}, l) => b * l.x + e * l.y + h * l.z, Pb = (b, e) => {
  let h;
  var l, p;
  const r = e.i, H = e.u;
  for (var I = 0; r.length > I; ++I) {
    if (-0.00008 > (h = Ob(b, r[I]) - b.w) ? p = e : 8e-5 < h && (l = e), p && l) {
      l = [];
      p = [];
      I = r.at(-1);
      let U = Ob(I, b) - b.w;
      for (const ra of r) {
        h = Ob(ra, b) - b.w, 8e-5 > U && p.push(I), -0.00008 < U && l.push(I), (8e-5 < U && -0.00008 > h || -0.00008 > U && 8e-5 < h) && (U /= h - U, I = {x:I.x + (I.x - ra.x) * U, y:I.y + (I.y - ra.y) * U, z:I.z + (I.z - ra.z) * U,}, l.push(I), p.push(I)), I = ra, U = h;
      }
      l = 2 < l.length && {i:vb(l, r.s, r.A), u:H, v:e,};
      p = 2 < p.length && {i:vb(p, r.s, r.A), u:H, v:e,};
      break;
    }
  }
  return {x:l, y:p,};
}, Qb = (b, e, h = Nb(e.i)) => {
  let l, p;
  return b ? ({x:l, y:p} = Pb(b, e), l || p || b.i.push(e), l && (b.o = Qb(b.o, l, h)), p && (b.m = Qb(b.m, p, h))) : b = {x:h.x, y:h.y, z:h.z, w:h.w, i:[e,], o:0, m:0,}, b;
}, Rb = (b, e, h) => {
  const l = [], p = (r, H) => {
    let {x:I, y:U} = Pb(r, H);
    I || U || (0 < h * Ob(r, e) ? I = H : U = H);
    I && (r.o ? p(r.o, I) : l.push(I));
    U && r.m && p(r.m, U);
  };
  for (const r of e.i) {
    p(b, r);
  }
  return l;
}, Sb = (b, e) => b && (e(b), Sb(b.o, e), Sb(b.m, e)), Tb = b => (Sb(b, e => {
  const h = e.m;
  e.m = e.o;
  e.o = h;
  e.x *= -1;
  e.y *= -1;
  e.z *= -1;
  e.w *= -1;
  for (const l of e.i) {
    l.u = !l.u;
  }
}), b), Ub = b => b.length ? b.reduce((e, h) => Qb(e, {i:h, u:0, v:0,}), 0) : b, Vb = (...b) => b.reduce((e, h) => {
  const l = [];
  if (e = Ub(e), h) {
    h = Ub(h);
    Sb(e, p => p.i = Rb(h, p, 1));
    Sb(h, p => l.push([p, Rb(e, p, -1),]));
    for (let [p, r] of l) {
      for (const H of r) {
        Qb(e, H, p);
      }
    }
  }
  return e;
}), O = (b, ...e) => {
  const h = r => {
    let H;
    return r.v && ((H = p.get(r.v)) ? (l.delete(H), r = h(r.v)) : p.set(r.v, r)), r;
  }, l = new Map(), p = new Map();
  return b = Tb(Vb(Tb(Ub(b)), ...e)), Sb(b, r => {
    for (const H of r.i) {
      l.set(h(H), H.u);
    }
  }), Array.from(l, ([{i:r}, H]) => {
    const I = r.map(({x:U, y:ra, z:Ca}) => ({x:U, y:ra, z:Ca,}));
    return vb(H ? I.reverse() : I, r.s, r.A);
  });
}, g = new DOMMatrix(), nb = new DOMMatrix(), lb = new Float32Array(16), Wb = new Float32Array(760), Xb = new Uint8Array(65536), Yb = (document.body.innerHTML += '<canvas id=hD height=128 width=128></canvas><canvas id=hC></canvas><h4 id=h4>loading</h4><b id=b5>☰</b><h3 id=h3></h3><main><nav><h2>DANTE</h2>Lucifer: <i>"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction. Dante, take them where they belong, to the 8th circle."</i><ul><li id=b1>Play</li><li id=b2>Play first person</li><li id=b3>Restart</li><li id=b4></li></ul><p>move WASD/arrows, levers E/click, menu Esc</p><p><a href=https://github.com/SalvatorePreviti/js13k-2022 target=_blank>© 2022 Salvatore Previti</a> - <a href=https://twitter.com/ryanmalm target=_blank>music Ryan Malm</a></p></nav></main><style>*{color:#fda;font-weight:100;overscroll-behavior:contain;touch-action:none;user-select:none}body,html{background:#000;font-family:Times New Roman,serif;font-size:max(min(3.8vw,3.8vh),15px);margin:0;text-shadow:4px 4px 2px #000,-2px -2px 8px #000}p{font-size:.7em}body>*{position:absolute}h2{color:#f61;margin:0 0 .7em}.m main,h4{right:0;top:0}h3,h4{pointer-events:none}h4{left:0;text-align:center}h3{bottom:0;right:5%;text-align:right}.m main{align-items:center;bottom:0;display:flex;justify-content:center;min-width:70%}nav{background:#00000080;border-radius:1em;max-width:max(780px,50vw);padding:1em}#b5,h3{padding:10px}a,li{border-bottom:3px solid #0000;cursor:pointer;margin-bottom:.5em;text-decoration:none}a:hover,h2,li:hover{border-bottom:3px solid}#hD,.m h4,main{display:none}', 
"data:image/svg+xml;base64," + btoa('<svg color-interpolation-filters="sRGB" height="1024" width="1024" xmlns="http://www.w3.org/2000/svg"><filter filterUnits="userSpaceOnUse" height="1026" id="a" width="1026" x="0" y="0"><feTurbulence baseFrequency=".007" height="1025" numOctaves="6" stitchTiles="stitch" width="1025" result="z" type="fractalNoise" x="1" y="1"/><feTile height="1024" width="1024" x="-1" y="-1"/><feTile/><feDiffuseLighting diffuseConstant="4" lighting-color="red" surfaceScale="5"><feDistantLight azimuth="270" elevation="5"/></feDiffuseLighting><feTile height="1024" width="1024" x="1" y="1"/><feTile result="x"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1" in="z"/><feTile height="1024" width="1024" x="1" y="1"/><feTile result="z"/><feTurbulence baseFrequency=".01" height="1024" numOctaves="5" stitchTiles="stitch" width="1024"/><feColorMatrix values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1"/><feBlend in2="x" mode="screen"/><feBlend in2="z" mode="screen"/></filter><rect filter="url(#a)" height="100%" width="100%"/></svg>',
)), T = hC.getContext("webgl2", {powerPreference:"high-performance",}), Zb = hD.getContext("webgl2", {powerPreference:"high-performance", preserveDrawingBuffer:!0, desynchronized:!0, antialias:!1,});
for (const b in Zb) {
  [T, Zb,].map(e => e[b[0] + [...b,].reduce((h, l, p) => (h * p + l.charCodeAt(0)) % 434, 0).toString(36)] = e[b]);
}
Bb(() => {
  let b = 0;
  const e = () => {
    if (2 == ++b) {
      const l = [{}, {}, {}, {}, {}, {}, {}, {},], p = (n, t, x = "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 b,a;uniform vec4 j[190];void main(){mat4 r=mat4(1);lowp int i=int(f.w);if(l=d,m=vec4(f.xyz,1),f.w>1.&&f.w<28.)m+=(r[3]=j[i+162]);else if(f.w!=1.){if(i=(i<1?gl_InstanceID-i:i-28)*4,r[0]=j[i],r[1]=j[i+1],r[2]=j[i+2],r[3]=j[i+3],l.w==0.)l=mix(vec4(1,.5,.2,0),l,r[3][3]);r[3][3]=1.,m=r*m;}gl_Position=a*b*m,m.w=f.w,o=r*vec4(e,0),n=f;}",
      ) => {
        const S = {}, P = (L, q,) => (q = n.c6x(q), n.s3c(q, L), n.c6a(q), q), y = n.c1h();
        return n.abz(y, P(x, 35633)), n.abz(y, P(t, 35632)), n.l8l(y), L => L ? S[L] || (S[L] = n.gan(y, L)) : n.u7y(y);
      }, r = (n, t, x) => {
        ea ? 1100 < hC.width && n.d97(4, Ua[55].C - Ua[53].B, 5123, 2 * Ua[53].B,) : (n.das(4, Ua[t].C - Ua[t].B, 5123, 2 * Ua[t].B, Va.length,), n.d97(4, Ua[x ? 53 : 56].B - 3, 5123, 6));
      }, H = n => {
        requestAnimationFrame(H);
        var t = (n - (ca || n)) / 1e3;
        if (Ea += t, c += Fa = ea ? 0 : bb(0.055, t), ca = n, 0 < Fa) {
          var x, S, P;
          t = (q, B) => (q = gb(q), jb(q, 1 - q, B));
          n = (q, B, A) => J(q + Math.sin(c + 2) / 5, B + Math.sin(0.8 * c) / 5, A).rotateSelf(2 * Math.sin(c), Math.sin(0.7 * c), Math.sin(0.9 * c),);
          Na && c > Na && (Na = 0, h4.innerHTML = "");
          xa = Ab(xa, d[15].g, 0.2 + 0.3 * ab(2 * d[15].g - 1),);
          wa = va ? (na = 0, Ab(wa, -9, 0.015)) : Ab(wa, gb(c / 3), 1);
          ta();
          var y = (DEV_ROOT_FUNCTION(), za = 1, Da = t(d[13].h, d[8].h), x = jb(Ab(void 0, 0, 1), hb(NaN + 60 * Fa), d[2].h - d[3].g,), S = jb(Ab(void 0, 0, 5), hb(NaN + 56 * Fa), Da,), P = jb(Ab(void 0, 0, 4), hb(NaN + 48 * Fa), Da,), J(0, 270 * (d[1].h - 1) + (2 + 5 * Math.cos(1.5 * c)) * (1 - d[10].h),), bb(1 - d[11].g, d[10].g)), L = (J(y * Math.sin(0.6 * c + 1.2) * 12, 0, 35), J(y * Math.sin(0.6 * c - 1.2) * 8.2, 0, 55), J(y * Math.sin(0.6 * c) * 12, 0, 45), J(9.8 * (1 - y)), y = gb(1 - 5 * 
          y) * t(d[11].h, d[2].h), J(0, y * Math.sin(1.35 * c) * 4), J(0, 0, y * Math.sin(0.9 * c) * 8), J(0, -6.5 * d[11].g), y = t(d[4].g, d[3].g), J(0, y * Math.sin(c) * 5 + 3.5 * (1 - cb(d[3].h, d[4].h)),), J(0, y * Math.sin(c + 3) * 6, y * Math.sin(0.6 * c + 1) * 6,), J(0, -7.3 * d[4].g), y = t(d[6].h, d[7].h), J(0, -2, 10 - 8.5 * y * ab(Math.sin(1.1 * c))), J(0, -2, 10 - 8.5 * y * ab(Math.sin(2.1 * c))), J(0, -2, 10 - 8.5 * cb(y * ab(Math.sin(1.5 * c)), (1 - d[6].h) * (1 - y)),), t(d[5].g, 
          d[13].g));
          for (y = 0; 4 > y; y++) {
            J((2 < y ? 2 * (1 - L) + L : 0) - 100, L * Math.sin(1.3 * c + 1.7 * y) * (3 + y / 3) + 0.7, 115 - 7 * (1 - d[5].g) * (1 - d[13].g) * (1 & y ? -1 : 1) + cb(0.05, L) * Math.cos(1.3 * c + 7 * y) * (4 - 2 * (1 - y / 3)),);
          }
          y = t(d[8].g, d[9].g);
          for (let q = 0; 3 > q; ++q) {
            J(0, y * Math.sin(1.5 * c + 1.5 * q) * 4 + (q ? 0 : 3 * (1 - d[8].g) * (1 - d[9].g)),);
          }
          t = t(t((d[9].h + d[9].g) / 2, d[8].g), (d[12].h + d[12].g) / 2,);
          J(0, 16 * t, 95 + 8.5 * gb(2 * t - 1));
          J(0, -4.7 * d[0].h, -15);
          J(0, -4.7 * d[10].h, 15);
          J(-99.7, -1.9 - 5.5 * d[3].h, 63.5);
          J(-100, 0.6 - 5.8 * d[13].h, 96.5);
          J(-75, 3 * (1 - d[2].g) * (1 - d[3].h), 55).rotateSelf(180 * (1 - d[2].g) + x, 0,);
          J(2.5 * (1 - L) - 139.7, -3 * (1 - d[5].h) - L * Math.sin(0.8 * c) - 1.8, 93.5,).rotateSelf(Math.cos(1.3 * c) * (3 + 3 * L), 0);
          J(-2 * Math.sin(c)).rotateSelf(25 * Math.sin(c));
          J(-81, 0.6, 106).rotateSelf(0, 40 + S);
          J(-65.8, 0.8, 106).rotateSelf(0, P);
          J(-50.7, 0.8, 106).rotateSelf(0, 180 - P);
          J(-50.7, 0.8, 91).rotateSelf(0, 270 + P);
          n(-12, 4.2, 40 * wa - 66);
          n(-123, 1.4, 55 - 65 * xa);
          for (n = 0; 16 > n; ++n) {
            13 > n && Va[n](), d[n]();
          }
          Aa();
          for (n = 0; 28 > n; ++n) {
            mb(Ua[28 + n].l, Wb, n);
          }
          for (let q, B = 0, A = 656; 26 > B; ++B, ++A) {
            q = Ua[2 + B].l, Wb[A++] = q.m41, Wb[A++] = q.m42, Wb[A++] = q.m43;
          }
          Zb.cbf(!0, !0, !0, !0);
          Zb.c4s(16640);
          Zb.u3a(f("j"), Wb);
          Zb.cbf(!0, !1, !0, !1);
          Zb.uae(f("b"), !1, mb(ob().rotateSelf(0, 180).invertSelf().translateSelf(-Ra, -Sa, 0.3 - Ta,),),);
          r(Zb, 56, 1);
          Zb.c4s(256);
          Zb.cbf(!1, !0, !1, !0);
          Zb.uae(f("b"), !1, mb(ob().translateSelf(-Ra, -Sa, -Ta - 0.3,),),);
          r(Zb, 56, 1);
          Zb.f1s();
          ha = 0;
        }
        ka();
        T.u3a(ka("j"), Wb);
        T.b6o(36160, fb);
        T.v5y(0, 0, 2048, 2048);
        T.ubh(ka("g"), 4);
        T.ubh(ka("h"), 4);
        T.uae(ka("a"), !1, mb(g));
        n = Ja;
        t = Ka;
        x = La;
        ea ? (ob().rotateSelf(0, 40 * Math.sin(Ea) - 80, -8), mb(nb, Wb, 25), mb(nb, Wb, 26), mb(nb, Wb, 27), ob(oa).invertSelf(), tb(3.6, 3.5), n = pb, t = qb, x = 5, ob(g, U).rotateSelf(20, 0).translateSelf(-n, -t, -x).rotateSelf(0, 99,)) : ob(g, U).rotateSelf(-Pa, -Qa).invertSelf().translateSelf(-n, -t, -x);
        F(54.7);
        r(T, 57, na);
        Q(126);
        r(T, 57, na);
        T.b6o(36160, null);
        T.v5y(0, 0, T.drawingBufferWidth, T.drawingBufferHeight);
        T.c4s(16640);
        T.ubh(ka("g"), 0);
        T.ubh(ka("h"), 1);
        T.ubu(ka("k"), n, t, x);
        T.uae(ka("a"), !1, mb(oa));
        T.uae(ka("b"), !1, mb(U));
        T.uae(ka("i"), !1, ra);
        r(T, 57, na);
        m();
        T.uae(m("b"), !1, mb(U.invertSelf()));
        T.ubu(m("j"), T.drawingBufferWidth, T.drawingBufferHeight, Ea);
        T.d97(4, 3, 5123, 0);
      }, I = new DOMMatrix(), U = new DOMMatrix(), ra = new Float32Array(32), Ca = h;
      DEV_ROOT_FUNCTION();
      const fb = T.c5w(), ka = p(T, "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform highp sampler2D q;uniform highp sampler2DShadow g,h;uniform mat4 b,i[2];uniform vec3 k;out vec4 O;void main(){vec4 s=vec4(m.xyz,1);vec3 e=normalize(o.xyz),v=l.w*(texture(q,n.zy*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+v*.5);float a=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,u=abs((b*s).z);vec4 r=(u<55.?i[0]:i[1])*s;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=u<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 x=l.xyz*(1.-v.x);float c=max(max(abs(e.x),abs(e.z))*.3-e.y,0.)*pow(max(0.,(8.-m.y)/48.),1.6);O=vec4(vec3(c,c*c*.5,0)+vec3(.09,.05,.11)*x+x*(max(0.,a)*.5+x*a*a*vec3(.5,.45,.3))*(t*.75+.25)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
      ), f = p(Zb, "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(vec3(0,1.49,.3*b[0][0])+m.xyz,1);if(O=vec4(0),gl_FragCoord.y>36.){if(a.y>.6&&a.y<3.){float e=abs(gl_FragCoord.x/64.-1.),i=clamp(a.z+.7,0.,1.);O=vec4(vec2(b[0][0]*sign(a.x)*o.x<0.?i*(.7-abs(a.x))*e/.7:0.),vec2(b[0][0]*o.z>0.?i*(1.-e):0.));}}else if(o.y>.45&&a.y<1.){float e=a.y*clamp((a.z+.4)*50.,0.,1.)*clamp((-abs(a.x)+.2)*10.,0.,1.);O=vec4(vec2(e),vec2(e>0.?m.w/255.:0.));}}",
      ), m = p(T, "#version 300 es\nprecision highp float;uniform mat4 b;uniform vec3 j;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float o=(-32.-b[3].y)/e.y,i=1.-clamp(abs(o/9999.),0.,1.);if(O=vec4(0,0,0,1),i>.01){if(o>0.){float i=cos(j.z/30.),o=sin(j.z/30.);e.xz*=mat2(i,o,-o,i);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=b[3].xyz+e*o,O.x=(i*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=i*i*i;}}", 
      "#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}",), [F, Q] = ub(2, n => {
        const t = T.c25();
        return T.a4v(33984 + n), T.b9j(3553, t), T.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null), T.t2z(3553, 10241, 9729), T.t2z(3553, 10240, 9729), T.t2z(3553, 34893, 515), T.t2z(3553, 34892, 34894), T.t2z(3553, 10243, 33071), T.t2z(3553, 10242, 33071), x => {
          let S = 0, P = 0, y = 0, L = 1 / 0, q = 1 / 0, B = 1 / 0, A = -1 / 0, X = -1 / 0, N = -1 / 0;
          T.fas(36160, 36096, 3553, t, 0);
          T.c4s(256);
          ob().scale3dSelf(x *= 1.1).multiplySelf(ob(pa[n], I).multiplySelf(U).invertSelf(),);
          for (let D = 0; 8 > D; ++D) {
            const K = l[D];
            tb(4 & D ? 1 : -1, 2 & D ? 1 : -1, 1 & D ? 1 : -1);
            S -= K.x = (0 | pb) / (x * sb);
            P -= K.y = (0 | qb) / (x * sb);
            y -= K.z = (0 | rb) / (x * sb);
          }
          ob().rotateSelf(298, 139).translateSelf(S / 8, P / 8, y / 8);
          for (x = 0; 8 > x; ++x) {
            const {x:D, y:K, z:R} = l[x];
            tb(D, K, R);
            A = cb(A, pb);
            X = cb(X, qb);
            N = cb(N, rb);
            L = bb(L, pb);
            q = bb(q, qb);
            B = bb(B, rb);
          }
          x = 10 + n;
          B *= 0 > B ? x : 1 / x;
          N *= 0 < N ? x : 1 / x;
          T.uae(ka("b"), !1, mb(ob(g, I).scaleSelf(2 / (A - L), 2 / (X - q), 2 / (B - N),).translateSelf((A + L) / -2, (X + q) / -2, (B + N) / 2).multiplySelf(nb), ra, n,), 16 * n, 16,);
        };
      });
      T.a4v(33986);
      T.b9j(3553, T.c25());
      T.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, Ca);
      T.t2z(3553, 10241, 9987);
      T.t2z(3553, 10240, 9729);
      T.gbn(3553);
      T.b6o(36160, fb);
      T.d45([0,]);
      T.r9l(0);
      ka();
      T.ubh(ka("q"), 2);
      m();
      T.ubh(m("q"), 2);
      T.c5t(0, 0, 0, 1);
      T.d4n(515);
      T.e8z(2929);
      T.e8z(2884);
      Zb.e8z(2929);
      Zb.e8z(2884);
      Zb.v5y(0, 0, 128, 128);
      f();
      Zb.uae(f("a"), !1, mb(Ib(1e-4, 2, 1.2, 0.4)));
      NO_INLINE(() => {
        let n, t, x, S, P, y, L, q, B, A, X, N, D, K, R, V, da = !0;
        const Y = [], Z = () => {
          b4.innerHTML = "Music: " + da;
          V && (ea || !da ? V.disconnect() : V.connect(R.destination));
        }, ia = () => {
          const u = (hC.height = innerHeight) / (hC.width = innerWidth) * 1.732051;
          pa = [Ib(0.3, 55, u, 1.732051), Ib(55, 181, u, 1.732051),];
          oa = Ib(0.3, 181, u, 1.732051);
          S = q = void 0;
          Y.length = ha = K = N = D = Ha = Ia = 0;
          document.hidden && la(!0);
        }, la = u => {
          if (ea !== u) {
            if (ea = u, ia(), document.body.className = u ? "l m" : "l", u) {
              try {
                document.exitFullscreen().catch(() => 0), document.exitPointerLock();
              } catch {
              }
            }
            Z();
          }
        }, ya = u => {
          try {
            R || (R = new AudioContext(), (V = R.createBufferSource()).buffer = fa, V.loop = !0, V.start()), document.body.requestFullscreen().catch(() => 0);
          } catch {
          }
          la(!1);
          na = u;
        }, aa = (u, v) => u.buttons[v]?.pressed || 0 < u.buttons[v]?.value ? 1 : 0;
        DEV_ROOT_FUNCTION();
        oncontextmenu = () => !1;
        b1.onclick = () => ya();
        b2.onclick = () => ya(1);
        b5.onclick = () => la(!0);
        b4.onclick = () => {
          da = !da;
          Z();
        };
        b3.onclick = () => {
          confirm("Restart game?") && (localStorage["Dante-22"] = "", location.reload());
        };
        onclick = u => {
          if (!ea && (u.target === hC && (ha = 1), na)) {
            try {
              hC.requestPointerLock();
            } catch {
            }
          }
        };
        onkeyup = onkeydown = u => {
          let v;
          u.repeat || (v = {KeyE:0, Space:0, Enter:0, Escape:1, KeyA:2, ArrowLeft:2, KeyD:3, ArrowRight:3, KeyW:4, ArrowUp:4, KeyS:5, ArrowDown:5,}[u.code], (Y[v] = !!u.type[5] && !0) && (0 === v && (ha = 1), 1 === v && la(!0)));
        };
        onmousemove = ({movementX:u, movementY:v}) => {
          na && (u || v) && (Qa += 0.1 * u, Pa += 0.1 * v);
        };
        hC.ontouchstart = u => {
          if (!ea) {
            for (let {pageX:v, pageY:G, identifier:E} of u.changedTouches) {
              na && v > hC.clientWidth / 2 ? void 0 === q && (B = 0, y = v, L = G, q = E, X = Pa, A = Qa) : void 0 === S && (P = 0, t = v, x = G, S = E);
            }
            n = Ea;
          }
        };
        hC.ontouchmove = u => {
          if (!ea) {
            for (let {pageX:ba, pageY:qa, identifier:ma} of u.changedTouches) {
              var v, G, E, W;
              q === ma && (Pa = X + (qa - L) / 2.3, Qa = A + (ba - y) / 2.3, B = 1);
              S === ma && (ma = (t - ba) / 19, v = ab(ma), G = (x - qa) / 19, E = ab(G), (W = 0.3 < cb(v, E)) && (P = 1), N = gb(ma, -1) * (W && 0.2 < v), D = gb(G, -1) * (W && 0.2 < E), 2 < v && (t = 19 * (0 > ma ? -1 : 1) + ba), 2 < E && (x = 19 * (0 > G ? -1 : 1) + qa));
            }
          }
        };
        hC.ontouchend = u => {
          let v;
          document.activeElement === document.body && u.preventDefault();
          for (const G of u.changedTouches) {
            G.identifier === q ? (q = void 0, B || (v = 1), B = 0) : G.identifier === S ? (S = void 0, D = N = 0, P || (v = 1), P = 0) : v = 1;
          }
          u.target === hC && v && n && 0.02 < (u = Ea - n) && 0.7 > u && (ha = 1);
        };
        ta = () => {
          Ha = D + (Y[4] ? 1 : 0) - (Y[5] ? 1 : 0);
          Ia = N + (Y[2] ? 1 : 0) - (Y[3] ? 1 : 0);
          let u = navigator.getGamepads()[0];
          u && (na && (Pa += 80 * Fa * db(u.axes[3], 0.3), Qa += 80 * Fa * db(u.axes[2], 0.3)), Ha += aa(u, 12) - aa(u, 13) - db(u.axes[1], 0.2), Ia += aa(u, 14) - aa(u, 15) - db(u.axes[0], 0.2), aa(u, 9) && la(!0), (u = aa(u, 3) || aa(u, 2) || aa(u, 1) || aa(u, 0)) && !K && (ha = 1), K = u);
        };
        document.onvisibilitychange = onblur = onresize = ia;
        la(!0);
      })();
      NO_INLINE(() => {
        let n, t, x, S, P, y, L, q, B, A, X, N, D, K, R, V, da = 0, Y = 1, Z = 2, ia = 15;
        const la = (v, G, E, W) => jb(v, G, Y || (gb(ab(G - v) ** 0.5 - E) + 1 / 7) * zb(1.5 * W),), ya = () => ob((Z ? d[Ma] : Ua[28 !== da ? da : 0]).l,), aa = v => {
          1 < Z ? (ob(d[Ma].l).multiplySelf(d[Ma].D,), tb(0, 0.9 < wa ? 15 : 1, -2.4)) : (ya(), tb(K, R, V));
          v && (P = (pb - Ra) / Fa, y = (rb - Ta) / Fa);
          Ra = pb;
          Sa = qb;
          Ta = rb;
        }, u = () => {
          var v = 0, G = 0, E = 0, W = 0, ba = 0, qa = 0, ma = -1;
          for (var M = 0; 36 > M; ++M) {
            var sa = 512 * M;
            for (var Ba = 96; 416 > Ba; Ba += 4) {
              for (var Ga = 0; 2 > Ga; ++Ga) {
                var ja = Xb[sa + Ba + Ga];
                const eb = Xb[sa + Ba + Ga + 2];
                ja > W && (W = ja);
                ja + eb && (0 > ma || ma === M) && (ma = M, eb === A ? ++v : G && G !== eb || (G = eb, ++E));
              }
            }
          }
          A = 0 > ma ? 0 : E > 2 * v ? G : A;
          for (v = 36; 128 > v; ++v) {
            M = ma = E = G = 0;
            sa = 512 * v;
            for (Ba = 0; 128 > Ba; ++Ba) {
              Ga = sa + 4 * Ba, ja = Xb[Ga], 64 > Ba ? ja > G && (G = ja) : ja > E && (E = ja), (ja = Xb[2 + Ga]) > ma && (ma = ja), ja = Xb[1 + Ga], 64 < Ba ? ja > G && (G = ja) : ja > E && (E = ja), (ja = Xb[3 + Ga]) > M && (M = ja);
            }
            (E -= G) * E > ba * ba && (ba = E);
            (M -= ma) * M > qa * qa && (qa = M);
          }
          ba *= 0.7;
          q = gb(1 - 0.01 * cb(ab(ba), ab(qa)), 0.3);
          ba /= 255;
          W /= 255;
          qa /= 255;
          ya().invertSelf();
          tb(ba, W, qa, 0);
          K += pb;
          R += W;
          V += rb;
          aa();
        };
        DEV_ROOT_FUNCTION();
        Aa = () => {
          aa(A);
          Zb.r9r(0, 0, 128, 128, 6408, 5121, Xb);
          NO_INLINE(u)();
          !Z && A === da || (da = A, ya().invertSelf(), tb(Ra, Sa, Ta), K = pb, R = qb, V = rb, Z = Z && (A ? 0 : 1));
          (-20 > Ra || 109 > Ta ? -25 : -9) > Sa && (Z = 2);
          1 === A && (d[15].j = -15 > Ra && 0 > Ta ? 1 : 0);
          S = Ab(S, Da * (30 < A && 35 > A), 2,);
          X = la(X, Ra, 0.5, 1);
          N = la(N, B = jb(Ab(B, Sa, 2), Sa, Z || 8 * ab(B - Sa),), 2, 1,);
          D = la(D, Ta, 0.5, 1);
          na ? (v = Z + zb(18), Ja = jb(Ja, Ra, v), La = jb(La, Ta, v), Ka = jb(Ka, 1.6 + B, v), Qa = hb(Qa)) : (Ja = la(Ja, X, 1, 2 + S,), La = la(La, D + -18 + 5 * S, 1, 2 + S,), Ka = la(Ka, cb(N + gb((-60 - Ta) / 8, 0, 20) + 13 + 9 * S, 6,), 4, 2,), v = bb(-6, -ab(D - La)), G = X - Ja, Qa = ib(Qa, 90 - hb(Math.atan2(v, G) / Oa), Y + zb(10),), Pa = ib(Pa, 90 - Math.atan2(kb(v, G), Ka - N) / Oa, Y + zb(10),));
          Pa = gb(Pa, -87, 87);
          Y = 0;
          var v = gb(Ha, -1), G = gb(Ia, -1), E = db(kb(v, G) ** 0.5, 0.1), W = Math.atan2(v, G);
          E && (n = 90 - W / Oa);
          t = ib(t, n, zb(8));
          x = Ab(x, E, 10);
          J(Ra, 0.06 * q * x * Math.cos(18.2 * c) + B, Ta,).rotateSelf(0, t);
          for (var ba = 0; 2 > ba; ++ba) {
            const qa = 9.1 * c - Math.PI * ba;
            ob(Ua[53].l, J(0)).translateSelf(0, x * gb(0.45 * Math.sin(qa - Math.PI / 2)),).rotateSelf(x * Math.sin(qa) * 0.25 / Oa, 0);
          }
          ia = A ? 5 : Ab(ia, Z ? 13 : 19 - 2 * bb(0, Sa + 10), 2.2);
          P = A || Z ? 0 : Ab(P, 0, 3);
          y = A || Z ? 0 : Ab(y, 0, 3);
          v = (L = Z ? 0 : Ab(L, A ? 7 * gb(2 * E) * q : 0, A ? 9 : 1,)) * E * ab(v) * Math.sin(W);
          G = L * E * ab(G) * Math.cos(W);
          W = na ? (180 + Qa) * Oa : 0;
          E = Fa * (P + (Math.cos(W) * G - Math.sin(W) * v));
          ba = Fa * -ia;
          v = Fa * (y + (Math.sin(W) * G + Math.cos(W) * v));
          ya().invertSelf();
          tb(E, ba, v, 0);
          K += pb;
          R += ba;
          V += rb;
          aa();
        };
      })();
      requestAnimationFrame(H);
    }
  }, h = new Image();
  h.onerror = h.onload = e;
  h.src = Yb;
  NO_INLINE(Hb)(() => {
    Bb(() => {
      let f = 0;
      const m = [], F = [], Q = [], n = [], t = new Int32Array(8), x = new Map(), S = (DEV_ROOT_FUNCTION(), new Int32Array(t.buffer, 0, 5)), P = new Float32Array(t.buffer);
      Ua.map((q, B) => {
        let A;
        const X = N => {
          let {x:D, y:K, z:R} = A[N], V = (P[0] = D, P[1] = K, P[2] = R, N = "" + (A.A ? S : t), x.get(N));
          return void 0 !== V ? (D = 3 * V, n[D] = (n[D++] + t[5]) / 2, n[D] = (n[D++] + t[6]) / 2, n[D] = (n[D] + t[7]) / 2) : (x.set(N, V = x.size), F.push(D, K, R, P[3]), Q.push(t[4]), n.push(t[5], t[6], t[7])), V;
        };
        for (A of (P[3] = 55 < B ? -28 : B, q.i)) {
          const {x:N, y:D, z:K} = Nb(A);
          t[4] = 0 | A.s;
          t[5] = 32767 * N;
          t[6] = 32767 * D;
          t[7] = 32767 * K;
          for (let R = 2, V = X(0), da = X(1); A.length > R; ++R) {
            m.push(V, da, da = X(R));
          }
        }
        q.i = 0;
        q.B = f;
        q.C = f = m.length;
      });
      [T, Zb,].map(q => {
        q.b11(34962, q.c1b());
        q.b2v(34962, new Float32Array(F), 35044);
        q.v7s(0, 4, 5126, !1, 0, 0);
        q.b11(34962, q.c1b());
        q.b2v(34962, new Int16Array(n), 35044);
        q.v7s(1, 3, 5122, !0, 0, 0);
        q.b11(34962, q.c1b());
        q.b2v(34962, new Uint32Array(Q), 35044);
        q.v7s(2, 4, 5121, !0, 0, 0);
        q.b11(34963, q.c1b());
        q.b2v(34963, new Uint16Array(m), 35044);
        q.e3x(0);
        q.e3x(1);
        q.e3x(2);
      });
      let y = [], L = [];
      DEV_ROOT_FUNCTION();
      try {
        const [q, B, A, X, N] = JSON.parse(localStorage["Dante-22"],);
        y = q;
        L = B;
        Ma = A;
        xa = X;
        c = N;
      } catch {
      }
      d.map((q, B) => q.h = q.g = q.j = 14 !== B && y[B] ? 1 : 0);
      Va.map((q, B) => q.j = L[B] ? 1 : 0);
      Kb();
      wa = ua || 14 !== Ma ? 1 : 0;
      Bb(e);
    });
    var l = [-110, -100, -92, -82, -106, -97, -88,];
    const p = NO_INLINE(() => {
      const f = [];
      a = (m, F = g, Q) => f.push(...w(m, F, Q));
      Ua.push({l:new DOMMatrix(), i:f,});
    }), r = f => {
      const m = () => {
        const n = m.h = Ab(m.h, m.j, 4);
        m.g = Ab(m.g, m.j, 1);
        ob(ob(F).multiplySelf(f), J(0)).rotateSelf(50 * n - 25, 0,).translateSelf(0, 1).m44 = n;
        ha && 3 > (tb(), kb(Ra - pb, Sa - qb, Ta - rb,)) ? m.j ? 0.7 < n && (m.j = 0, Ma = Q, Jb("* click *", 1), Lb()) : 0.3 > n && (m.j = 1, Ma = Q, Jb("* click *", 1), Lb()) : m.j && 0.8 < n && 14 === Q && (m.j = 0, 13 > ua ? Jb("Not leaving now, there are souls to catch!", 3) : va || (Jb("Well done. They will be punished.<br>Thanks for playing", 1 / 0), va = 1));
      }, F = Ua.at(-1).l, Q = d.length;
      m.l = F;
      m.D = f;
      d.push(m);
      a(z(5), f.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), C(0.4, 0.5, 0.5));
      a(z(5), f.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), C(0.4, 0.5, 0.5),);
      a(z().slice(0, -1), f.translate(0, -0.4).scale(0.5, 0.1, 0.5), C(0.5, 0.5, 0.4),);
    }, H = (f, ...m) => {
      let F, Q, n, t, x = 0, S = 0, P = 1, y = -1;
      const L = () => {
        if (L.j) {
          ob(Ua[35].l).translateSelf(K % 4 * 1.2 - 1.7 + Math.sin(c + K) / 7, -2, 1.7 * (K >> 2) - 5.5 + ab(K % 4 - 2) + Math.cos(c / 1.5 + K) / 6,);
        } else {
          let R, V, da, Y, Z, ia = 1, la = 1 / 0;
          for (let ya = 0; m.length > ya; ya++) {
            let aa = m[ya], u = kb(B - aa[0], A - aa[1]);
            ia = bb(ia, u / aa[2]);
            0 > (u -= aa[2]) ? R = 1 : la > u && (la = u, q = aa);
          }
          R || (V = B - q[0], da = A - q[1], Y = kb(V, da), Z = Math.atan2(-da, V), P && (t = gb(t / (1 + Math.random())), S = (Math.random() - 0.5) * Math.PI / 2), Z += S, y = -Math.cos(Z), x = Math.sin(Z), 0.1 < Y && (Y = bb(Y, q[2]) / Y, B = V * Y + q[0], A = da * Y + q[1]));
          P = R;
          t = Ab(t, 3 + 6 * (1 - ia), 3 + ia);
          X = Ab(X, B = Ab(B, B + y, t), t);
          N = Ab(N, A = Ab(A, A + x, t), t);
          F = ib(F, Math.atan2(X - Q, N - n) / Oa - 180, zb(3),);
          ob(D).multiplySelf(f).translateSelf(Q = X, 0, n = N).rotateSelf(0, F, 7 * Math.sin(1.7 * c));
          1.6 > (tb(), kb(Ra - pb, Sa - qb, Ta - rb,)) && (L.j = 1, Jb([, "Mark Zuckemberg<br>made the world worse", "Giorgia Meloni<br>fascist", "Andrzej Mazur<br>for the js13k competition", "Donald Trump<br>lies", "Kim Jong-un<br>Dictator, liked pineapple on pizza", "Maxime Euziere<br>forced me to finish this game", "She traded NFTs apes", , "Vladimir Putin<br>evil war", "He was not a good person", , "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",][ua] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift', 
          6,), Kb(), Lb());
        }
        mb(nb, Wb, 28 + K);
      };
      let q = m[0], [B, A] = q, [X, N] = q;
      const D = Ua.at(-1).l, K = Va.length;
      Va.push(L);
    }, I = (f, m = f, F = (Q, n) => (n *= Math.PI / m, {x:Math.cos(Q *= 2 * Math.PI / f) * Math.sin(n), y:Math.cos(n), z:Math.sin(Q) * Math.sin(n),})) => {
      const Q = [];
      for (let n = 0; f > n; n++) {
        for (let t = 0; m > t; t++) {
          const x = vb([], 0, 1);
          Q.push(x);
          x.push(F(n, t, x));
          t && x.push(F((n + 1) % f, t, x));
          m - 1 > t && x.push(F((n + 1) % f, t + 1 % m, x));
          x.push(F(n, t + 1 % m, x));
        }
      }
      return Q;
    }, U = f => k(Math.sin((f /= 11) * Math.PI), f).rotateSelf(10 * f).scaleSelf(1.002 - f, 1, 1.002 - f), ra = f => O(w(z().slice(0, -1), k(0, -f / 2).scale(6, f - 1, 2.2)), w(z().slice(0, -1), k(0, -f / 2 - 4).scale(4, f - 5, 4)), w(z(28, 1), k(0, f / 2 - 9).rotate(90, 0, 90).scale3d(4)),), Ca = (DEV_ROOT_FUNCTION(), ub(11, f => yb(wb(xb(16), U(f), C(1, 1, 0.8, 0.2)).reverse(), wb(xb(16), U(f + 1), C(1, 1, 0.8, 0.2)), 1,)).flat()), fb = O(w(z(), k(0, -0.5, 1).scale(1.15, 1.2, 6.5), C(0.25, 0.25, 
    0.35, 0.3),), O(w(z(3), k(0, 0, -5.5).scale(3, 2), C(0.6, 0.3, 0.4, 0.3)), w(z(), k(0, 0, -3.65).scale(2.5, 3), C(0.6, 0.3, 0.4, 0.3)),), ...[-1, 1,].map(f => w(z(), k(1.2 * f, -0.5, 1).scale(0.14, 0.3, 6.5), C(0.7, 0.2, 0, 0.3),)),), ka = [w(z(), k(0, -3).scale(11, 1.4, 3), C(0.9, 0.9, 0.9, 0.2)), w(z(), k(0, -2.2).scale(7.7, 0.5, 4), C(0.5, 0.5, 0.5, 0.2)), ub(12, f => w(z(), g.translate(f - 5.5, 4.4).scale(0.1, 0.1, 2), C(0.6, 0.5, 0.3, 0.2),)).flat(), w(O(w(z(6), g.rotate(90).scale(6, 8, 
    6)), w(z(4, 0, 0.01), k(0, 6).scale(12, 2, 0.75).rotate(0, 45)), w(z(6), g.rotate(90).scale(5, 12, 5)), ...[-5, 0, 5,].map(f => w(z(5), k(f, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8))),), g, C(0.3, 0.6, 0.6, 0.3),),].flat();
    p("MODEL_ID_SKY");
    a([Wa.slice(1),], k(-2).scale3d(3).rotate(90, 0));
    p("MODEL_ID_STATIC_WORLD");
    r(k(-5.4, 1.5, -19).rotate(0, -90));
    [-15, 15,].map((f, m) => {
      a(z(), k(0, 0, m ? 22 : -23).scale(3, 1, 8), C(0.9, 0.9, 0.9, 0.2));
      a(z(), k(0, 6.3, f).scale(4, 0.3, 1), C(0.3, 0.3, 0.3, 0.4));
      a(z().slice(0, -1), k(0, 1, f).scale(3, 0.2, 0.35), C(0.5, 0.5, 0.5, 0.3));
    });
    a(z(), k(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), C(0.8, 0.8, 0.8, 0.2));
    a(z(), k(3, 1.5, -20).scale(0.5, 2, 5), C(0.7, 0.7, 0.7, 0.2));
    a(z(5), k(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), C(0.6, 0.3, 0.3, 0.4));
    a(z(), k(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), C(0.75, 0.75, 0.75, 0.2),);
    a(O(Vb(O(w(z(6, 0, 0, 0.3), k(0, -0.92).scale(13, 2, 13), C(0.8, 0.8, 0.8, 0.2),), w(z(), g.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2), C(0.5, 0.5, 0.5, 0.5),),), w(z(), g.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5), C(0.8, 0.2, 0.2, 0.5),), w(z(6), k(0, -8).scale(9, 8, 7), C(0.2, 0.1, 0.4, 0.5)), w(z(6, 0, 0, 0.3), k(8, -4, -4).scale(14, 2, 13), C(0.7, 0.7, 0.7, 0.2),),), w(z(6), k(15.5, -1.5, 3.5).scale(3.5, 1, 3.5), C(0.5, 0.5, 0.5, 
    0.5),), w(z(5, 0, 1.5), k(0, 1).scale(4.5, 0.3, 4.5), C(0.7, 0.5, 0.9, 0.2),), w(z(5), g.scale(5, 30, 5), C(0.4, 0.2, 0.6, 0.5)),),);
    r(k(15, -2, 4));
    a(z(), k(-18.65, -3, 55).scale(2.45, 1.4, 2.7), C(0.9, 0.9, 0.9, 0.2));
    r(k(-55, -1.1, 46).rotate(0, 90));
    a(z(7), k(-57, -2.6, 46).scale(4, 1, 4), C(0.8, 0.8, 0.8, 0.3));
    a(z(6), k(-61.3, -2.4, 49).scale(3, 1, 5), C(0.4, 0.6, 0.6, 0.3));
    a(ka, k(-53, 0, 55));
    a(z(), k(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), C(0.7, 0.7, 0.7, 0.2),);
    a(z(3, 0, -0.5), k(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9), C(0.8, 0.8, 0.8, 0.2),);
    a(O(w(z(), k(-100, 1, 63).scale(7.5, 4), C(0.5, 0.5, 0.5, 0.4)), w(z(), k(-100, 0, 63).scale(2, 2, 4), C(0.5, 0.5, 0.5, 0.4)), w(z(20, 1), k(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), C(0.5, 0.5, 0.5, 0.4),),),);
    a(O(Vb(w(z(), k(-100, -2.6, 70).scale(3, 1.1, 7), C(0.8, 0.8, 0.8, 0.2),), w(z(), k(-100, -2.4, 55).scale(8, 0.9, 8), C(0.8, 0.8, 0.8, 0.2),), w(z(), k(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), C(0.8, 0.8, 0.8, 0.2),), w(z(6), k(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), C(0.6, 0.6, 0.6, 0.3),), w(z(), k(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), C(0.8, 0.8, 0.8, 0.2),), w(z(), k(-100, 0.42, 92).scale(3, 1.1, 4.1), C(0.8, 0.8, 0.8, 0.2),), w(z(), k(-100, -1.1, 82.39).rotate(-15, 
    0).scale(3, 1.1, 6), C(0.8, 0.8, 0.8, 0.2),),), w(z(8), k(-100, -1, 55).scale(7, 0.9, 7), C(0.3, 0.3, 0.3, 0.4)), w(z(8), k(-100, -2, 55).scale(4, 0.3, 4), C(0.4, 0.4, 0.4, 0.5)), w(z(8, 0, -3.1), k(-100, -3, 55).scale(0.4, 1, 0.4), C(0.4, 0.4, 0.4, 0.5),),),);
    Wa.map(({x:f, z:m}) => {
      a(z(6), k(3 * f, 3, 15 * m).scale(0.7, 4, 0.7), C(0.6, 0.3, 0.3, 0.4));
      a(z(6), k(7 * f - 100, -3, 7 * m + 55).scale(1, 8.1), C(0.6, 0.15, 0.15, 0.8),);
      [4, -0.4,].map(F => a(z(6), k(7 * f - 100, F, 7 * m + 55).scale(1.3, 0.5, 1.3), C(0.4, 0.2, 0.2, 0.8),));
      [1.5, 8,].map(F => a(z(15, 1), k(9 * f - 38.9, F - 11.3, 11 * m + 17).scale(1.5, 0.5, 1.5), C(0.6, 0.6, 0.6, 0.3),));
      a(z(14, 1).slice(0, -2), k(9 * f - 38.9, -18, 11 * m + 17).scale(1, 14.2), C(0.25, 0.25, 0.25, 1),);
    });
    ub(7, f => {
      a(z((23 * f + 1) % 5 + 5, 0, 0.5), k(5 * Math.sin(f) - 101 + f, -2.3 - f, 44.9 - 2.8 * f).scaleSelf(5 + f / 2, 1.1 + f / 6, 5 + f / 3,), C(0.5 - f / 17, 0.5 - (1 & f) / 9, 0.6, 0.3),);
    });
    a(z(), k(-87, -9.5, 24).scale(7, 1, 3), C(0.4, 0.5, 0.6, 0.4));
    a(z(4), k(-86, -9.2, 27).scale(5, 1, 5), C(0.5, 0.6, 0.7, 0.3));
    a(z(12, 1), k(-86, -9, 31).scale(1.5, 1, 1.5), C(0.3, 0.3, 0.4, 0.1));
    r(k(-86, -7.5, 31));
    a(z(5), k(-38.9, -11.1, 10).scale(2, 1.2, 2), C(0.2, 0.4, 0.7, 0.3));
    a(O(Vb(w(z(), k(-38.9, -11.3, 17).scale(11, 1, 13), C(0.3, 0.4, 0.6, 0.3),), w(z(5), k(-38.9, -11.1, 17).scale(9, 1, 9), C(0, 0.2, 0.3, 0.5),),), w(z(5), k(-38.9, -11.1, 17).scale3d(5.4), C(0, 0.2, 0.3, 0.5)),),);
    r(k(-38.9, -9.4, 10));
    a(O(Vb(w(z(6), k(0, 0, -18).scale(15, 1.3, 15), C(0.7, 0.7, 0.7, 0.3),), w(z(6), g.scale(4, 1.2, 8), C(0.45, 0.4, 0.6, 0.3)),), ...ub(6, f => ub(6, m => w(z(6), k(4.6 * m - (1 & f ? 10 : 12), 0, 4.6 * f + 2 * Math.sin(4 * m) - 32).scale3d(2), C(0.7, 0.7, 0.7, 0.3),),)).flat(),), k(-38.9, -11.3, -1),);
    a(z(5), k(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), C(0.8, 0.1, 0.25, 0.4));
    r(k(-84, -0.7, 85).rotate(0, 45));
    a(O(w(z(), k(-96.5, -1.4, -2).scale(20, 2.1, 3)), ...l.map(f => w(z(), k(f, 0.05, -3).scale(1.35, 2, 9))),), g, C(0.5, 0.5, 0.6, 0.2),);
    a(z(), k(-96.5, 1, -2).scale(19, 0.3, 0.3), C(0.5, 0.5, 0.6, 0.2));
    r(k(-116, -1.4, -18).rotate(0, 180));
    a(z(6), k(-116, -2.6, -16.5).scale(3.2, 0.8, 3), C(0.6, 0.5, 0.7, 0.2));
    a(z(), k(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), C(0.8, 0.8, 0.8, 0.2));
    a(z().slice(0, -1), k(-115.5, -17, -12).scale(0.5, 15, 2.2), C(0.6, 0.6, 0.6, 0.3),);
    a(z(8).slice(0, -2), k(-114, -17, -2).scale(2, 15, 2), C(0.6, 0.6, 0.6, 0.3));
    a(z(8).slice(0, -2), k(-79, -17, -2).scale(2, 15, 2), C(1, 1, 1, 0.3));
    a(z().slice(0, -1), k(-77, -17, -50.5).scale(2.2, 15, 0.5), C(0.6, 0.6, 0.6, 0.3),);
    a(O(w(z(12).slice(0, -1), k(-77, -14.5, -12).scale(4, 17.5, 4), C(0.7, 0.7, 0.7, 0.2),), w(z(12), k(-77, 3.1, -12).scale(3, 5, 3), C(0.4, 0.5, 0.6, 0.2)), w(z(), k(-79, 0.1, -12).scale(3.5, 2, 1.3), C(0.4, 0.5, 0.6, 0.2),), w(z(), k(-77, 0.1, -14).scale(1.5, 2, 2), C(0.4, 0.5, 0.6, 0.2)),),);
    a(O(w(z(), k(-93, -5.8, -40).scale(9, 1, 5), C(0.8, 0.8, 0.8, 0.1)), w(z(9), k(-98, -5.8, -40).scale(3, 8, 3), C(0.7, 0.7, 0.7, 0.2)),),);
    a(z(), k(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), C(0.6, 0.6, 0.6, 0.3));
    a(z(9).slice(0, -1), k(-98, -18.4, -40).scale(2.5, 13.5, 2.5), C(0.5, 0.5, 0.5, 0.3),);
    r(k(-98, -4.4, -40).rotate(0, 90));
    [-1, 1,].map((f, m) => {
      a(O(w(z(), k(-4 * f, 3.5, -0.5).scale(4, 4, 0.7), C(0.5, 0.5, 0.5, 0.4),), w(z(5), k(-5.3 * f, 7).rotate(90, 0).scale(1.7, 5, 1.7), C(0.6, 0.24, 0.2, 0.5),), w(z(), g.scale(3, 3, 10), C(0.6, 0.24, 0.2, 0.5)), w(z(5), k(-5.3 * f, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), C(0.6, 0.24, 0.2, 0.5),), w(z(32, 1), k(0, 3, -5).scale(3, 4, 10).rotate(90, 0), C(0.6, 0.24, 0.2, 0.5),),), k(f - 100, 0.7, 97),);
      a(z(12, 1), k(-7.5 * f - 100, 3.7, 96).scale(0.8, 4, 0.8), C(0.6, 0.24, 0.2, 0.5),);
      [7.2, 1.5,].map(F => a(z(15, 1), k(-7.5 * f - 100, F + 0.7, 96).scale(1.1, 0.5, 1.1), C(0.5, 0.24, 0.2, 0.4),));
      a(Ca, k(-8 * f, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * f + 90));
      a(Ca, k(-5 * f - 100, 1.7, 110).scale(1.2, 10, 1.2).rotate(0, 90 * f - 90));
      ub(5, F => a(Ca, k(18.5 * (m - 0.5), 0, 4.8 * F - 9.5).rotate(0, 180 - 180 * m).scale(1.2, 10, 1.2),));
    });
    a(O(w(z(), k(-82.07, 0.8, 106).scale(11, 0.9, 2.2), C(0.7, 0.7, 0.7, 0.1),), w(z(45, 1), k(-81, 0.7, 106).scale3d(7.7), C(0.7, 0.7, 0.7, 0.1),),),);
    a(z(), k(-58, 1, 106).scale(2, 0.65, 2), C(0.7, 0.7, 0.7, 0.2));
    a(z(), k(-50.7, 1, 99).scale(2, 0.65, 1), C(0.7, 0.7, 0.7, 0.2));
    a(z(), k(-42, 0.4, 91).scale(5, 1, 2.5), C(0.7, 0.7, 0.7, 0.3));
    a(z(), k(-34.2, 0.4, 91).scale(3, 1, 3), C(0.7, 0.7, 0.7, 0.3));
    a(z(5), k(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), C(0.2, 0.5, 0.5, 0.6));
    r(k(-34, 2.7, 96).rotate(-12, 0));
    a(O(Vb(w(z(), k(-101.5, 0.7, 93.5).scale(10.5, 1, 2), C(0.7, 0.7, 0.7, 0.2),), w(z(6, 0, 0, 0.6), k(-100, 0.7, 105.5).scale(8, 1, 11), C(0.7, 0.7, 0.7, 0.2),),), w(z(5), k(-100, 0.7, 113).scale(4, 3, 4), C(0.7, 0.7, 0.7, 0.2)),),);
    ub(3, f => {
      a(ra(16), k(-77, -9, -12 * f - 20).rotate(0, 90), C(0.6, 0.6, 0.6, 0.3));
      a(ra(16), k(12 * f - 109, -9, -12), C(0.6, 0.6, 0.6, 0.3));
      a(ra(24.7 - 0.7 * (1 & f)), k(6 * f - 6, 4 - (1 & f), 111 - 0.2 * (1 & f)), 1 & f ? C(0.5, 0.5, 0.5, 0.3) : C(0.35, 0.35, 0.35, 0.5),);
    });
    a(O(Vb(w(z(), k(0, 16, 111).scale(3, 1, 3.8), C(0.5, 0.3, 0.3, 0.4)), w(z(6, 0, 0, 0.3), k(0, -0.92, 95).scale(14, 2, 14), C(0.8, 0.8, 0.8, 0.2),), w(z(), k(0, 16, 110.5).scale(12, 1, 3), C(0.5, 0.3, 0.3, 0.4)),), w(z(5), k(0, 0, 95).scale3d(6), C(0.3, 0.3, 0.3, 0.5)), w(z(5), k(0, 16, 103.5).scale(5.5, 5, 5.5), C(0.5, 0.3, 0.3, 0.4),),),);
    r(k(0, 1.7, 82).rotate(0, 180));
    a(z(5).slice(0, -1), k(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), C(0.5, 0.3, 0.3, 0.4),);
    a(z(6), k(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), C(0.5, 0.6, 0.7, 0.3));
    a(z(), k(0, 16, 127.8).scale(1.5, 1, 0.7), C(0.5, 0.6, 0.7, 0.3));
    a(z(7), k(0, 15.1, 133).scale(5, 2, 5), C(0.4, 0.5, 0.6, 0.4));
    H(k(-0.5, 2.8, -20), [0, 0, 2.5,], [0, -3, 2.5,]);
    H(k(0, 2.8), [5, 10, 3,], [-5, 10, 3,], ...xb(18).map(({x:f, z:m}) => [7 * f, 10 * m, 4.5 - 2 * ab(f),]),);
    H(k(0, 3, 95), ...xb(9).map(({x:f, z:m}) => [9 * f, 9 * m, 4,]),);
    H(k(0, 19, 134), [0, 0, 3.5,]);
    H(k(-38.9, -8.3, -21), [-7, -2.5, 6,], [6, -3, 6,], [0, -5, 7,]);
    H(k(-89, 0.2, 80), [0, 0, 6,]);
    H(k(-100, 0.2, 55), [0, 0, 7.5,], [-8, 0, 3.5,], [-12, 0, 3.5,], [-15, 0, 3.5,]);
    H(k(-115, 0.2, -12), [0, 0, 3.5,]);
    H(k(-93, -3, -40).rotate(4), [0, -2, 3.5,], [0, 2, 3.5,]);
    p("MODEL_ID_LEVEL1_CENTRAL_PLATFORM");
    a(z(5), k(0, -0.2).scale(5, 1, 5), C(0.6, 0.65, 0.7, 0.3));
    r(k(0, 1.2));
    ub(2, f => {
      p("MODEL_ID_LEVEL2_BLACK_PLATFORM" + f);
      Wa.map(({x:m, z:F}) => {
        a(z(11, 1).slice(0, -2), k(4 * m, 4, 4 * F).scale(0.8, 3, 0.8), C(0.5, 0.3, 0.7, 0.6),);
        a(z(), k(4 * m, 7, 4 * F).scale(1, 0.3), C(0.5, 0.5, 0.5, 0.3));
      });
      a(O(w(z().slice(0, -1), g.scale(5, 1, 5), C(0.8, 0.8, 0.8, 0.3)), ...[-1, 1,].map(m => w(z(25, 1), k(5 * m, 0.2).rotate(-30 * m).scale(4, 1, 3), C(0.8, 0.8, 0.8, 0.3),)),),);
      a(z(), k(0, -3).scale(8, 2, 8), C(0.4, 0.4, 0.4, 0.3));
    });
    p("MODEL_ID_LEVEL2_CENTRAL_PLATFORM");
    a(O(Vb(w(z(), g.scale(1.5, 1, 5), C(0.9, 0.9, 0.9, 0.2)), w(z(), k(0, -2).scale(2, 3.2, 1.9), C(0.3, 0.8, 0.5, 0.5)), w(z(6), g.scale(4, 1, 5), C(0.9, 0.9, 0.9, 0.2)), w(z(16, 1, 0, 4), g.scale(1, 1, 1.5).rotate(0, 90), C(0.9, 0.9, 0.9, 0.2),),), w(z(), g.scale(1.3, 10, 1.3), C(0.2, 0.7, 0.4, 0.6)),),);
    H(k(0, 2.8), [0, 0, 4.5,]);
    p("MODEL_ID_TRIANGLE_PLATFORM");
    a(z(3), k(-23, -1.7, 55.8).scale(5, 0.7, 8.3), C(0.3, 0.6, 0.6, 0.2));
    a(z(8), k(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), C(0.8, 0.8, 0.8, 0.2));
    a(z(), k(-23, -3, 55).scale(5.2, 1.7, 3), C(0.5, 0.5, 0.5, 0.3));
    a(z(), k(-23, -2.2, 62).scale(3, 1, 4), C(0.5, 0.5, 0.5, 0.3));
    r(k(-23, -0.5, 66.5));
    p("MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL");
    a(z(), k(-22.55, -3, 55).scale(1.45, 1.4, 2.7), C(0.7, 0.7, 0.7, 0.2));
    a(O(w(z(), g.scale(3, 1.4, 2.7)), w(z(), g.scale(1.2, 8, 1.2)),), k(-33, -3, 55), C(0.7, 0.7, 0.7, 0.2),);
    p("MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL");
    a(O(w(z(), g.scale(3, 1.4, 2.7)), w(z(), g.scale(1, 3)),), k(-27, -3, 55), C(0.9, 0.9, 0.9, 0.2),);
    a(z(), k(-39, -3, 55).scale(3, 1.4, 2.7), C(0.9, 0.9, 0.9, 0.2));
    p("MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR");
    a(z(6), k(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), C(0.7, 0.7, 0.7, 0.4),);
    p("MODEL_ID_ELEVATORS0");
    [0, 12, 24,].map(f => a(z(), k(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), C(0.2, 0.5, 0.6, 0.2)));
    p("MODEL_ID_ELEVATORS1");
    [6, 18,].map(f => a(z(), k(f - 76.9, f / -16 - 10, 24).rotate(0, 0, -2).skewX(-2).scale(2.8, 1.4, 3), C(0.1, 0.4, 0.5, 0.2)));
    p("MODEL_ID_MONUMENT");
    a(z(5), k(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), C(0.3, 0.3, 0.5, 0.5),);
    a(z(5).slice(0, -1), k(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25), C(0.6, 0.3, 0.5, 0.5),);
    a(O(w(z(5), k(0, 2).scale(5, 7, 5).skewY(8)), w(z(5), k(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)), w(z(), g.scale(2, 8, 3)),), k(-38.9, -11.3, 17), C(0.2, 0.4, 0.5, 0.5),);
    H(k(-39.1, -0.6, 17).rotate(11), ...xb(15).map(({x:f, z:m}) => [3 * f, 3 * m, 1.2,]),);
    l.map((f, m) => {
      m % 2 || 6 <= m || p("MODEL_ID_PUSHING_ROD" + m / 2);
      a(fb, k(f, 1.9, -12));
    });
    ub(4, f => {
      p("MODEL_ID_OSCILLATING_HEX_PAD" + f);
      a(z(6), k(-14.6 - 4.8 * f - (2 < f ? 2 : 0), -f / 2.5 - 0.1, -21.5).rotate(0, 0, 3.5).skewX(3.5).scale(2.6, 1, 2.5), C(0.5 - f / 8, f / 12 + 0.5, 0.7, 0.3),);
    });
    [C(0.1, 0.55, 0.45, 0.2), C(0.2, 0.5, 0.5, 0.3), C(0.3, 0.45, 0.55, 0.4),].map((f, m) => {
      p("MODEL_ID_JUMPING_PAD" + m);
      a(z(), k(-23.5, 0.5, 91 + 6.8 * m).scale(1 === m ? 2 : 3.3, 1, 3.3), f);
      2 === m && a(z(), k(-29.1, 0.4, 91).scale(2.1, 1, 3), C(0.7, 0.7, 0.7, 0.3));
      1 === m && a(z(), k(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1), C(0.6, 0.6, 0.7, 0.3),);
    });
    p("MODEL_ID_FLOATING_ELEVATOR_PAD");
    a(z(5), g.scale(5, 1.1, 5), C(0.5, 0.3, 0.3, 0.4));
    a(z(5), g.scale(5.5, 0.9, 5.5), C(0.25, 0.25, 0.25, 0.4));
    r(k(0, 1.5, -1).rotate(0, 180));
    ub(4, f => {
      p("MODEL_ID_GATE" + f);
      ub(7, m => a(w(z(8, 1).slice(0, -1), k((2 < f ? 3.5 : 4) * (m / 6 - 0.5), 3).scale(0.2, 2 < f ? 4 : 3, 0.2), C(0.3, 0.3, 0.38),),),);
    });
    p("MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR");
    a(ka);
    p("MODEL_ID_DONUT_PAD");
    a(z(15, 1), k(-7.5).rotate(0, 90).scale(3, 2.3, 3), C(0.4, 0.4, 0.4, 0.3));
    a(z(10).slice(0, -1), k(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2), C(0.3, 0.8, 0.7, 0.3),);
    a(z(5).slice(0, -1), k(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), C(0.5, 0.5, 0.5, 0.5),);
    r(k(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));
    [-1, 1,].map(f => a(Ca, g.rotate(90 * f, 180, 90).translate(0, 5).rotate(40).scale(1.3, 10, 1.3)));
    a(O(w(z(10), g.scale(6, 2, 6), C(0.1, 0.6, 0.5, 0.3)), w(z(10), g.scale(3.3, 6, 3.3), C(0.1, 0.6, 0.5, 0.5)),),);
    H(k(-5, 4), [0, -1.2, 1.7,], [0, 1.2, 1.7,]);
    p("MODEL_ID_PENDULUMS");
    a(z(3), k(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), C(0.5, 0.3, 0.3, 0.4),);
    [22, 30,].map(f => {
      a(z(6), k(0, 16, f + 95).scale(3, 1, 2.3).rotate(0, 90), C(0.7, 0.7, 0.7, 0.4),);
      a(z(), k(0, 6.2, f + 95).scale(0.5, 11, 0.5), C(0.5, 0.3, 0.3, 0.4));
    });
    p("MODEL_ID_ROTATING_PLATFORM0");
    a(O(w(z(28, 1), g.scale(7.5, 1, 7.5), C(0.45, 0.45, 0.45, 0.2)), w(z(), k(0, 0, -5.5).scale(1.5, 3, 2.7), C(0.45, 0.45, 0.45, 0.2),),),);
    a(z(8).slice(0, -1), k(0, 2).scale(3, 1.5, 3).rotate(0, 22), C(0.7, 0.7, 0.7, 0.1),);
    a(z(5).slice(0, -1), k(0, 2).scale(1, 2), C(0.3, 0.3, 0.3, 0.2));
    H(k(0, 3), ...xb(14).map(({x:f, z:m}) => [5.6 * f, 5.6 * m, 2,]),);
    p("MODEL_ID_ROTATING_PLATFORM1");
    [-1, 1,].map(f => a(Ca, g.rotate(0, 90).translate(-5 * f, 3, -0.5).scale(1.2, 9, 1.2).rotate(0, 90 * f + 90),));
    a(O(w(z(28, 1).slice(0, -1), k(0, 2).scale(7.5, 1, 7.5), C(0.35, 0, 0, 0.3),), w(z().slice(0, -1), k(0, 2).scale(9, 1.1, 2), C(0.3, 0, 0, 0.3)),),);
    a(z(28, 1), g.scale(7.5, 1, 7.5), C(0.45, 0.45, 0.45, 0.2));
    a(z(5).slice(0, -1), k(0, 1).scale(1, 0.2), C(0.3, 0.3, 0.3, 0.2));
    p("MODEL_ID_ROTATING_PLATFORM2");
    a(O(w(z(28, 1).slice(0, -1), k(0, 2).scale(7.5, 1, 7.5), C(0.35, 0, 0, 0.3),), w(z().slice(0, -1), k(0, 2, 7).scale(2, 1.1, 9), C(0.3, 0, 0, 0.3),), w(z().slice(0, -1), k(7, 2).scale(9, 1.1, 2), C(0.3, 0, 0, 0.3)),),);
    a(z(28, 1), g.scale(7.5, 1, 7.5), C(0.45, 0.45, 0.45, 0.2));
    a(z(5).slice(0, -1), k(0, 1).scale(1, 0.2), C(0.3, 0.3, 0.3, 0.2));
    p("MODEL_ID_ROTATING_PLATFORM3");
    a(O(w(z(28, 1).slice(0, -1), k(0, 2).scale(7.5, 1, 7.5), C(0.35, 0, 0, 0.3),), w(z().slice(0, -1), k(0, 2, -7).scale(2, 1.1, 9), C(0.3, 0, 0, 0.3),), w(z().slice(0, -1), k(7, 2).scale(9, 1.1, 2), C(0.3, 0, 0, 0.3)),),);
    a(z(28, 1), g.scale(7.5, 1, 7.5), C(0.45, 0.45, 0.45, 0.2));
    a(z(5).slice(0, -1), k(0, 1).scale(1, 0.2), C(0.3, 0.3, 0.3, 0.2));
    ub(2, f => {
      p("MODEL_ID_BOAT" + f);
      a(O(w(z(30, 1, 1.15, 1), k(0, -3).scale(3.5, 1, 3.5), C(0.7, 0.4, 0.25, 0.7),), w(z(), k(4, -1.2).scale3d(2), C(0.7, 0.4, 0.25, 0.3)), w(z(30, 1, 1.3, 1), k(0, -2.5).scale(2.6, 1, 3), C(0.7, 0.4, 0.25, 0.2),),),);
      r(k(0, -3, 4));
    });
    for (l = 0; 16 > l; ++l) {
      p("MODEL_ID_LEVER" + l), a(z(6, 1).slice(0, -1), g.scale(0.12, 1.2, 0.12), C(0.3, 0.3, 0.5, 0.1)), a(z(9, 1), k(0, 0.8).scale(0.2, 0.3, 0.2), C(0.7, 1, 0.2)), a(z(3), k(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), C(0.2, 0.2, 0.2, 0.1));
    }
    p("MODEL_ID_PLAYER_BODY");
    a(I(20), k(0, 1).scale3d(0.5), C(1, 0.3, 0.4));
    a(I(30), g.scale(0.65, 0.8, 0.55), C(1, 0.3, 0.4));
    a(z(), k(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), C(0.3, 0.3, 0.3));
    [-1, 1,].map(f => {
      a(Ca, g.rotate(0, 0 < f ? 180 : 0).translate(0.2, 1.32).rotate(-30).scale(0.2, 0.6, 0.2), C(1, 1, 0.8),);
      a(w(O(z(15, 1), w(z(), k(0, 0, 1).scale(2, 2, 0.5)),), g.rotate(-90, 0).scale(0.1, 0.05, 0.1), C(0.3, 0.3, 0.3),), k(0.2 * f, 1.2, 0.4).rotate(0, 20 * f, 20 * f),);
    });
    [-1, 1,].map((f, m) => {
      p("MODEL_ID_PLAYER_LEG" + m);
      a(z(20, 1), k(0.3 * f, -0.8).scale(0.2, 0.7, 0.24), C(1, 0.3, 0.4));
    });
    p("MODEL_ID_SOUL_COLLISION");
    a(z(6, 1).slice(0, -1), g.scale(0.77, 1, 0.77), C(1, 0.3, 0.5));
    p("MODEL_ID_SOUL");
    a(I(28, 22, (f, m, F) => {
      var Q = m / 22, n = f * Math.PI * 2 / 28, t = Math.sin(Q ** 0.6 * Math.PI / 2);
      f = Q * Q * Math.sin(f * Math.PI * 0.5) / 4;
      return 21 < m ? {x:F.A = 0, y:-0.5, z:0,} : {x:Math.cos(n) * t, y:Math.cos(Q * Math.PI) - Q - f, z:Math.sin(n) * t + Math.sin(f * Math.PI * 2) / 4,};
    }), g.scale(0.7, 0.7, 0.7), C(1, 1, 1),);
    [-1, 1,].map(f => a(I(10), k(0.16 * f, 0.4, -0.36).scale3d(0.09)));
  });
});

