let ca = 0,
  da = 0,
  a = 0,
  ea = 0,
  fa = 0,
  ha = 0,
  ia = 0,
  ka = 0,
  la = 0,
  ma = 0,
  na = 0,
  pa = 0,
  d = 0.066,
  qa = 1,
  sa,
  ta,
  ua,
  va,
  wa;
const xa = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  f = [],
  l = [],
  ya = [],
  za = [],
  Da = [[
    69,
    128,
    0,
    143,
    128,
    0,
    0,
    196,
    100,
    36,
    0,
    0,
    149,
    110,
    31,
    47,
    3,
    56,
    2,
    0,
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U (059<59<A9<AE<AEHAEHMEHMQMQTY(Y (5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y (:?BFFKNRRWZ^(^((:=@FFILRRUX^(^ Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X] QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]"
      .split(" "),
  ], [
    100,
    128,
    0,
    201,
    128,
    0,
    0,
    100,
    144,
    35,
    0,
    6,
    135,
    0,
    32,
    147,
    6,
    0,
    6,
    195,
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5 -(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5 ,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5 *(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6 5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5 5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5"
      .split(" "),
  ], [255, 116, 85, 255, 116, 37, 14, 64, 144, 73, 99, 0, 136, 15, 32, 0, 0, 66, 6, 0, [
    "9(((9(((9(((9(((9(((9(((9(((9",
    "9(((Q(((Q(((Q",
  ]], [0, 140, 0, 0, 140, 0, 81, 64, 400, 47, 55, 5, 239, 135, 13, 176, 5, 16, 4, 187, [
    "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
    "9(9(9(9(9(999(9(((((Q",
  ]], [221, 128, 64, 210, 128, 64, 255, 64, 144, 73, 79, 7, 195, 15, 21, 20, 0, 9, 3, 64, [
    "((((Q(((((((Q(((((((Q(((((((Q",
    "Q((Q((Q((Q((Q((Q((((Q",
  ]]],
  n = { x: 0, y: 0, z: 0 };
var Ea = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0;
const La = Math.PI / 180,
  r = new DOMMatrix(),
  Ma = new Float32Array(16),
  Na = new Float32Array(624),
  Oa = new Uint8Array(65536),
  u = (c, b) => Array.from(Array(c), (h, k) => b(k)),
  Pa = (c, b) => b < c ? c : b,
  Qa = c => 0 > c ? -c : c,
  Sa = c => 0 > c ? 0 : 1 < c ? 1 : c,
  Ta = (c, b) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > b ? 0 : 1 < b ? 1 : b)),
  Ua = c => Math.atan2(Math.sin(c *= La), Math.cos(c)) / La,
  Va = (c, b, h) =>
    ((c *= La) + (2 * (b = (b * La - c) % (2 * Math.PI))
            % (2 * Math.PI) - b) * (0 > h ? 0 : 1 < h ? 1 : h)) / La,
  Wa = (c, b, h, k) => {
    c += (0 > b - c ? -1 : 1) * Pa(0, Qa(b - c) ** 0.9 - h) * k * 2;
    return c + (b - c) * Sa(k / 7);
  },
  Xa = ({ x: c, y: b, z: h }) => Math.hypot(c - n.x, b - n.y, h - n.z),
  Ya = ({ x: c, y: b, z: h }, k) => c * k.x + b * k.y + h * k.z,
  Za = c => {
    let b = 0, h = 0, k = 0, m, p = c.at(-1);
    for (m of c) {
      b += (p.y - m.y) * (p.z + m.z), h += (p.z - m.z) * (p.x + m.x), k += (p.x - m.x) * (p.y + m.y), p = m;
    }
    return m = Math.hypot(b, h, k), b /= m, h /= m, k /= m, { x: b, y: h, z: k, w: b * p.x + h * p.y + k * p.z };
  },
  $a = (
    c,
    b = Ma,
    h = 0,
  ) => (h *= 16,
    b[h++] = c.m11,
    b[h++] = c.m12,
    b[h++] = c.m13,
    b[h++] = c.m14,
    b[h++] = c.m21,
    b[h++] = c.m22,
    b[h++] = c.m23,
    b[h++] = c.m24,
    b[h++] = c.m31,
    b[h++] = c.m32,
    b[h++] = c.m33,
    b[h++] = c.m34,
    b[h++] = c.m41,
    b[h++] = c.m42,
    b[h++] = c.m43,
    b[h] = c.m44,
    b),
  ab = (c, b, h, k) => [c, 0, 0, 0, 0, b, 0, 0, 0, 0, (k + h) / (h - k), -1, 0, 0, 2 * k * h / (h - k), 0],
  bb = (c, b, h) => (c.D = h, c.A = b, c),
  cb = (c, b, h = c.A) =>
    bb(
      c.map(k => {
        let m, p;
        return { x: k, y: m, z: p } = k,
          { x: k, y: m, z: p } = b.transformPoint({ x: k, y: m, z: p }),
          { x: k, y: m, z: p };
      }),
      h,
      c.D,
    ),
  K = (c, b, h) => c.map(k => cb(k, b, h)),
  db = (c, b = 0) =>
    u(c, h => {
      const k = Math.cos(2 * Math.PI * h / c);
      return { x: Math.sin(2 * Math.PI * h / c), y: 0, z: 0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - b : k + b };
    }),
  eb = (c, b, h) =>
    c.map((k, m, { length: p }) => bb([k, b[p - m - 1], b[p - (m + 1) % p - 1], c[(m + 1) % p]], c.A, h)),
  L = (
    c,
    b,
    h = 0,
    k,
  ) => (c = c ? db(c, k) : xa,
    k = cb(c, r.translate(0, 1).scale3d(0 < h ? h : 1)),
    c = cb(c, r.translate(0, -1).scale3d(0 > h ? -h : 1)).reverse(),
    [...eb(c, k, b), k, c]),
  fb = (
    c,
    b = c,
    h = (
      k,
      m,
    ) => (m *= Math.PI / b,
      { x: Math.cos(k *= 2 * Math.PI / c) * Math.sin(m), y: Math.cos(m), z: Math.sin(k) * Math.sin(m) }),
  ) => {
    const k = [];
    for (let m = 0; c > m; m++) {
      for (let p = 0; b > p; p++) {
        const w = bb([], 0, 1);
        k.push(w);
        w.push(h(m, p, w));
        p && w.push(h((m + 1) % c, p, w));
        b - 1 > p && w.push(h((m + 1) % c, p + 1 % b, w));
        w.push(h(m, p + 1 % b, w));
      }
    }
    return k;
  },
  ib = (c, b) => {
    var h, k, m, p = b.C;
    for (var w = 0; p.length > w; ++w) {
      if (-0.00008 > (h = Ya(c, p[w]) - c.w) ? m = b : 8e-5 < h && (k = b), m && k) {
        k = [];
        m = [];
        p = b.C;
        w = b.B;
        let x = p.at(-1), t = Ya(c, x) - c.w;
        for (const v of p) {
          h = Ya(c, v) - c.w,
            8e-5 > t && m.push(x),
            -0.00008 < t && k.push(x),
            (8e-5 < t && -0.00008 > h || -0.00008 > t && 8e-5 < h)
            && (t /= h - t,
              x = { x: x.x + (x.x - v.x) * t, y: x.y + (x.y - v.y) * t, z: x.z + (x.z - v.z) * t },
              k.push(x),
              m.push(x)),
            x = v,
            t = h;
        }
        return {
          o: 2 < k.length && { C: bb(k, p.A, p.D), B: w, u: b },
          m: 2 < m.length && { C: bb(m, p.A, p.D), B: w, u: b },
        };
      }
    }
    return { o: k, m };
  },
  jb = (c, b, h = Za(b.C)) => {
    let k, m, p;
    return c
      ? ({ o: k, m } = ib(c, b), k || m || c.s.push(b), k && (c.o = jb(c.o, k, h)), m && (c.m = jb(c.m, m, h)))
      : ({ x: k, y: m, z: h, w: p } = h, c = { x: k, y: m, z: h, w: p, s: [b], o: 0, m: 0 }),
      c;
  },
  kb = (c, b, h) => {
    const k = [],
      m = (p, w) => {
        let { o: x, m: t } = ib(p, w);
        x || t || (0 < h * Ya(p, b) ? x = w : t = w);
        x && (p.o ? m(p.o, x) : k.push(x));
        t && p.m && m(p.m, t);
      };
    for (const p of b.s) {
      m(c, p);
    }
    return k;
  },
  lb = (c, b) => c && (b(c), lb(c.o, b), lb(c.m, b)),
  ob = c => c.length ? c.reduce((b, h) => jb(b, { C: h, B: 0, u: 0 }), 0) : c,
  pb = c => (lb(c, b => {
    const h = b.m;
    b.m = b.o;
    b.o = h;
    b.x *= -1;
    b.y *= -1;
    b.z *= -1;
    b.w *= -1;
    for (const k of b.s) {
      k.B = !k.B;
    }
  }),
    c),
  qb = (...c) =>
    c.reduce((b, h) => {
      const k = [];
      if (b = ob(b), h) {
        h = ob(h);
        lb(b, m => m.s = kb(h, m, 1));
        lb(h, m => k.push([m, kb(b, m, -1)]));
        for (let [m, p] of k) {
          for (const w of p) {
            jb(b, w, m);
          }
        }
      }
      return b;
    }),
  P = (c, ...b) => pb(qb(pb(ob(c)), ...b)),
  Q = c => {
    const b = new Map(),
      h = new Map(),
      k = m => {
        let p;
        return m.u && ((p = b.get(m.u)) ? (h.delete(p), m = k(m.u)) : b.set(m.u, m)), m;
      };
    return lb(c, m => {
      for (const p of m.s) {
        h.set(k(p), p.B);
      }
    }),
      Array.from(h, ([{ C: m }, p]) => {
        const w = m.map(({ x, y: t, z: v }) => ({ x, y: t, z: v }));
        return bb(p ? w.reverse() : w, m.A, m.D);
      });
  },
  R = (c, b, h) => c + (b - c) * Sa(1 - Math.exp(-h * d)),
  rb = () => {
    const c = Ta(l[12].h, l[13].h);
    var b = R(ia, 0, 1);
    ia = b + (Ua(ia + 60 * d) - b) * Sa(l[5].h - l[6].i);
    b = R(fa, 0, 5);
    fa = b + (Ua(fa + 56 * d) - b) * (0 > c ? 0 : 1 < c ? 1 : c);
    b = R(ha, 0, 4);
    ha = b + (Ua(ha + 48 * d) - b) * (0 > c ? 0 : 1 < c ? 1 : c);
    ma = R(ma, l[9].i, 0.2 + 0.3 * Qa(2 * l[9].i - 1));
    la = R(la, ka ? la + (-9 - la) * Sa(1.5 * d) : Sa(a / 3), 1);
    qa && a > qa && (qa = 0, h4.innerHTML = "");
    l[0].j && 0.8 < l[0].h && (13 > ca
      ? (1 / 0 > qa && (qa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), l[0].j = 0)
      : ka
        || (1 / 0 > qa && (qa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ka = 1));
    for (const h of f) {
      h.g && (h.l = h.g());
    }
    for (const h of l) {
      h.g();
    }
    for (const h of ya) {
      h.g();
    }
  },
  sb = () => {
    h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[ca = ya.reduce((c, { j: b }) => c + b, 0)];
  },
  tb = () => {
    localStorage.DanteSP22 = JSON.stringify([l.map(({ j: c }) => c), ya.map(({ j: c }) => c), ea, a, ma]);
  },
  T = (c, b = 1) => {
    const h = ua;
    b = { l: r, F: f.length, H: b, s: [] };
    return f.push(ua = b), b.g = c(b), ua = h, b;
  },
  U = (c, b = r, h) => ua.s.push(...K(c, b, h)),
  ub = c => {
    const b = ua,
      h = l.length,
      k = {
        j: 0,
        h: 0,
        i: 0,
        u: b,
        g() {
          const m = k.j, p = k.h, w = k.i, x = b.l.multiply(c);
          k.I = x;
          2.9 > Xa(x.transformPoint()) && za[5] && (0.3 > p || 0.7 < p)
            && (k.j = m ? 0 : 1, h && 1 / 0 > qa && (qa = a + 1, h4.innerHTML = "* click *"), ea = h, tb());
          k.h = R(p, m, 4);
          k.i = R(w, m, 1);
          k.l = x.rotate(60 * k.h - 30, 0).translateSelf(0, 1);
        },
      };
    l.push(k);
    U(L(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
    U(L(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), W(0.4, 0.5, 0.5));
    U(L(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), W(0.5, 0.5, 0.4));
  },
  vb = (c, ...b) => {
    let h = -1, k = 0, m = 0, p = 0, w = 0, x = 0, t = 1, v = 3;
    const A = {
        j: 0,
        g() {
          if (!A.j) {
            let M, I, y, S, G, z, N = 1, ba = 1 / 0, O;
            for (const X of E) {
              var { x: B, z: J, w: Y } = X;
              J = (B = Math.hypot(g - B, q - J)) - Y;
              O ||= B < Y;
              0 < J && ba > J && (ba = J, e = X);
              var ja = B / Y;
              N = N < ja ? N : ja;
            }
            O
              || ({ x: M, z: I, w: y } = e,
                S = g - M,
                G = q - I,
                z = Math.hypot(S, G),
                aa = Math.atan2(-G, S),
                t && (m = (Math.random() - 0.5) * Math.PI / 2, v = Pa(1, v / (1 + Math.random()))),
                aa += m,
                h = -Math.cos(aa),
                k = Math.sin(aa),
                0.1 < z && (z = (z < y ? z : y) / (z || 1), g = S * z + M, q = G * z + I));
            t = O;
            v = R(v, 3 + 6 * (1 - N), 3 + N);
            C = R(C, g = R(g, g + h, v), v);
            H = R(H, q = R(q, q + k, v), v);
            p = Va(p, Math.atan2(C - w, H - x) / La - 180, 3 * d);
            w = C;
            x = H;
            var aa = (A.l = D.l.multiply(c.translate(C, 0, H).rotateSelf(0, p, 7 * Math.sin(1.7 * a))))
              .transformPoint();
            1.5 > Xa(aa)
              && (A.j = 1,
                ja = [
                  ,
                  "Mark Zuckemberg<br>made the world worse",
                  ,
                  "Andrzej Mazur<br>for the js13k competition",
                  "Donald Trump<br>lies",
                  "Kim Jong-un<br>Dictator, liked pineapple on pizza",
                  "Maxime Euziere<br>forced me to finish this game",
                  "She traded NFTs apes",
                  ,
                  "Vladimir Putin<br>evil war",
                  "He was not a good person",
                  ,
                  "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
                ][ca] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > qa && (qa = a + (ca && 12 > ca ? 5 : 7), h4.innerHTML = ja),
                sb(),
                tb());
          }
          A.j
            && (A.l = f[2].l.translate(
              F % 4 * 1.2 - 1.7 + Math.sin(a + F) / 7,
              -2,
              1.7 * (F / 4 | 0) - 5.5 + Qa(F % 4 - 2) + Math.cos(a / 1.5 + F) / 6,
            ));
        },
      },
      D = ua,
      F = ya.length,
      E = b.map(([B, J, Y]) => ({ x: B, z: J, w: Y }));
    let e = E[0], { x: g, z: q } = e, C = g, H = q;
    ya.push(A);
  },
  wb = (c, b, h, k) => {
    let m = 0, p = 0, w = 0, x = 1 / 0, t = -1 / 0, v = 1 / 0, A = -1 / 0, D = 1 / 0, F = -1 / 0;
    const E = 1.1 * (h - b),
      e = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, h))).multiplySelf(c).invertSelf();
    return b = u(
      8,
      g => (g = e.transformPoint({ x: 4 & g ? 1 : -1, y: 2 & g ? 1 : -1, z: 1 & g ? 1 : -1 }),
        m -= g.x = (E * g.x | 0) / E / g.w,
        p -= g.y = (E * g.y | 0) / E / g.w,
        w -= g.z = (E * g.z | 0) / E / g.w,
        g),
    ),
      h = r.rotate(298, 139).translateSelf(m / 8, p / 8, w / 8),
      cb(b, h).map(({ x: g, y: q, z: C }) => {
        x = x < g ? x : g;
        t = g < t ? t : g;
        v = v < q ? v : q;
        A = q < A ? A : q;
        D = D < C ? D : C;
        F = C < F ? F : C;
      }),
      D *= 0 > D ? k : 1 / k,
      F *= 0 < F ? k : 1 / k,
      r.scale(2 / (t - x), 2 / (A - v), 2 / (D - F)).translateSelf((t + x) / -2, (A + v) / -2, (D + F) / 2)
        .multiplySelf(h);
  },
  zb = () => {
    let c = !0, b, h, k, m, p, w, x, t, v, A, D, F;
    const E = () => {
        sa || !c ? xb.disconnect() : xb.connect(yb.destination);
        b4.innerHTML = "Music: " + c;
      },
      e = (g = !1) => {
        if (sa !== g) {
          sa = g;
          try {
            g ? document.exitPointerLock() : xb.start();
          } catch {
          }
          va = 0;
          document.body.className = g ? "l m" : "l";
          E();
          sb();
        }
      };
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b1.onclick = () => e();
    b2.onclick = () => {
      e();
      va = 1;
    };
    b4.onclick = () => {
      c = !c;
      E();
    };
    b5.onclick = () => e(!0);
    onclick = g => {
      F = 1;
      sa || (g.target === hC && (za[5] = !0), va && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: g, target: q, type: C, repeat: H }) => {
      H || ((H = !!C[5] && q === document.body) && ("Escape" === g || "Enter" === g && sa)
        ? sa && !F || e(!sa)
        : 5
            === (C = {
              KeyA: 0,
              ArrowLeft: 0,
              KeyW: 1,
              ArrowUp: 1,
              KeyD: 2,
              ArrowRight: 2,
              KeyS: 3,
              ArrowDown: 3,
              KeyE: 5,
              Space: 5,
              Enter: 5,
            }[g])
        ? H && (za[C] = 1)
        : za[C] = H);
    };
    onmousemove = ({ movementX: g, movementY: q }) => {
      va && (g || q) && (Ka += 0.1 * g, Ja += 0.1 * q);
    };
    oncontextmenu = () => !1;
    hC.ontouchstart = g => {
      if (!sa) {
        for (let { pageX: q, pageY: C, identifier: H } of g.changedTouches) {
          va && q > hC.clientWidth / 2
            ? void 0 === t && (t = H, w = q, x = C, v = 0, A = Ka, D = Ja)
            : void 0 === m && (m = H, h = q, k = C, p = 0);
        }
        b = da;
      }
    };
    hC.ontouchmove = ({ changedTouches: g }) => {
      if (!sa) {
        for (let { pageX: H, pageY: B, identifier: J } of g) {
          var q, C;
          t === J && (Ka = A + (H - w) / 3, Ja = D + (B - x) / 3, v = 1);
          m === J
            && (0.4 < (C = (q = 0 > (J = (h - H) / 20) ? -1 : 1) * J)
              && (p = 1, na = q * C ** 1.5, 1.5 < C && (h = H + 20 * q)),
              0.4 < (C = (q = 0 > (J = (k - B) / 20) ? -1 : 1) * J)
              && (p = 1, pa = q * C ** 1.5, 1.5 < C && (k = B + 20 * q)));
        }
      }
    };
    hC.ontouchend = g => {
      let q;
      g.preventDefault();
      for (const C of g.changedTouches) {
        C.identifier === t
          ? (t = void 0, v || (q = 1), v = 0)
          : C.identifier === m
          ? (m = void 0, pa = na = 0, p || (q = 1), p = 0)
          : q = 1;
      }
      q && g.target === hC && b && 0.06 < (g = da - b) && 0.7 > g && (za[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = () => {
      hC.width = innerWidth;
      hC.height = innerHeight;
      za.length = na = pa = 0;
      m = t = void 0;
      document.hidden && e(!0);
    })();
    e(!0);
  },
  Ab = (c, b = 35633) => (b = Z.c6x(b), Z.s3c(b, c), Z.c6a(b), b),
  Bb = (c, b) => {
    const h = {}, k = Z.c1h();
    return Z.abz(k, c), Z.abz(k, Ab(b, 35632)), Z.l8l(k), m => m ? h[m] || (h[m] = Z.gan(k, m)) : Z.u7y(k);
  },
  Gb = (c, b, h = 42) => {
    if (sa) {
      h = r.rotate(0, 40 * Math.sin(da) - 70);
      for (var k of [37, 38, 39]) {
        $a(h, Na, k - 1);
      }
      Z.uae(c, !1, Na);
      Z.d97(4, f[39].G - f[37].v, 5123, 2 * f[37].v);
    } else {
      for (k = 0; f.length > k; ++k) {
        const { H: m, F: p, l: w } = f[k];
        m && $a(w, Na, p - 1);
      }
      Z.uae(c, !1, Na);
      Z.d97(4, (b ? f[39].G : f[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        $a(ya[b].l, Na, b);
      }
      for (b = 0; l.length > b; ++b) {
        const { l: m, h: p } = l[b];
        $a(m, Na, b + 13);
        Na[16 * (b + 13) + 15] = 1 - p;
      }
      Z.uae(c, !1, Na);
      Z.das(4, f[h].G - f[h].v, 5123, 2 * f[h].v, 13);
      Z.das(4, f[40].G - f[40].v, 5123, 2 * f[40].v, l.length);
    }
  },
  Hb = () => {
    let c = 0, b = 0, h = 0, k = 0, m = 0, p = 1, w = !1, x, t, v, A, D, F, E, e, g, q, C, H;
    const B = { x: 0, y: 0, z: 0 },
      J = new Int32Array(256),
      Y = M => {
        var { u: I, I: y } = l[ea], { x: y, y: S, z: G } = y.transformPoint({ x: 0, y: 8, z: -3 });
        n.x = B.x = y;
        n.y = B.y = E = S;
        n.z = B.z = G;
        M && (Ea = q = y, Ha = (C = S) + 13, Ia = (H = G) + -18);
        c = b = I.F || 1;
        t =
          F =
          D =
          v =
          A =
            0;
        p = 1;
      },
      ja = () => {
        for (let M = 32; 128 > M; M += 2) {
          let I = 0, y = 0, S = 0, G = 0;
          const z = 512 * M;
          for (let N = 1 & M; 128 > N; N += 2) {
            const ba = z + 4 * N;
            let O = z + 4 * (127 - N);
            const X = Oa[ba] / 255, oa = Oa[1 + O] / 255, Aa = 1 - Qa(N / 63.5 - 1);
            10 < N && 118 > N
              && (I = Pa(I, Pa(X * Aa, X * Oa[O] / 255)), y = Pa(y, Pa(oa * Aa, oa * Oa[1 + ba] / 255)));
            (54 > N || 74 < N) && 1e-3 < (O = (1 - Aa) * (oa < X ? X : oa) / 3)
              && (64 > N && O > S ? S = O : 64 < N && O > G && (G = O));
          }
          Qa(G - S) > (0 > e ? -e : e) && (e = G - S);
          Qa(y - I) > (0 > g ? -g : g) && (g = y - I);
        }
      },
      aa = () => {
        let M = 0, I = 0, y = 0, S = 0;
        J.fill(0);
        for (let z = 0; 31 > z; ++z) {
          let N = 0;
          const ba = 512 * z;
          for (let O = 0; 128 > O; O++) {
            var G = ba + 4 * O;
            let X = (Oa[G] + Oa[1 + G]) / 255;
            G = Oa[2 + G];
            14 < O && 114 > O && (N += X);
            G && X && (X = J[G] + 1, J[G] = X, M > X || (M = X, I = G));
          }
          3 > N && 5 < z && (S += z / 32);
          3 < N && (7 < z && (y += z / 15), t = 1);
        }
        I && (t = 1);
        p ? I && (p = 0, b = I) : b = I || c;
        c = I;
        v = R(v, t ? 6.5 : 8, 4);
        B.y += y / 41 - (t ? 1 : v) * S / 41 * v * d;
      };
    wa = () => {
      let M = na + (za[0] ? 1 : 0) + (za[2] ? -1 : 0), I = pa + (za[1] ? 1 : 0) + (za[3] ? -1 : 0);
      if (S = navigator.getGamepads()[0]) {
        const X = S.buttons;
        var y = S.axes;
        (S = (G = oa => X[oa]?.pressed || 0 < X[oa]?.value)(1) || G(3) || G(2) || G(0)) !== w && (w = S) && (za[5] = 1);
        M += (0.2 < Qa(-y[0]) ? -y[0] : 0) + (G(14) ? 1 : 0) + (G(15) ? -1 : 0);
        I += (0.2 < Qa(-y[1]) ? -y[1] : 0) + (G(12) ? 1 : 0) + (G(13) ? -1 : 0);
        va && (0.3 < Qa(y[2]) && (Ka += 80 * y[2] * d), 0.3 < Qa(y[3]) && (Ja += 80 * y[3] * d));
      }
      0.05 > (0 > I ? -I : I) && (I = 0);
      0.05 > (0 > M ? -M : M) && (M = 0);
      var S = Math.atan2(I, M), G = Sa(Math.hypot(I, M));
      y =
        (M = G * Math.cos(S),
          I = G * Math.sin(S),
          e = 0,
          g = 0,
          t = 0,
          NO_INLINE(ja)(),
          NO_INLINE(aa)(),
          Sa(1 - 5 * Pa(0 > e ? -e : e, 0 > g ? -g : g)));
      y =
        (b || (e += D * y * d, g += F * y * d),
          D = R(D, 0, t ? 8 : 4),
          F = R(F, 0, t ? 8 : 4),
          A = R(A, t ? (M || I ? t ? 7 : 4 : 0) * y : 0, t ? 0.1 < y ? 10 : M || I ? 5 : 7 : 1),
          va ? Ka * La : Math.PI);
      var z = Math.sin(y) * A * d;
      y = Math.cos(y) * A * d;
      y =
        (e -= M * y - I * z,
          g -= M * z + I * y,
          (y = (z = 1 === f[b].H && f[b].l || r).inverse()).m41 = 0,
          y.m42 = 0,
          y.m43 = 0,
          { x: e, z: g } = y.transformPoint({ x: e, z: g, w: 0 }),
          B.x += e,
          B.z += g,
          b !== x && (x = b, { x: y, y: N, z: ba } = z.inverse().transformPoint(n), B.x = y, B.y = N, B.z = ba),
          n.x);
      var N = n.z, { x: ba, y: z, z: O } = z.transformPoint(B);
      n.x = ba;
      n.y = z;
      n.z = O;
      b && (D = (ba - y) / d, F = (O - N) / d);
      (M || I) && (h = 90 - S / La);
      k = Va(k, h, 8 * d);
      m += (G - m) * Sa(10 * d);
      E = 0.03 < Qa(E - z) ? z : R(E, z, 2);
      q = Wa(q, ba, 0.5, d);
      C = Wa(C, z, 2, d);
      H = Wa(H, O, 0.5, d);
      va
        ? (Ea = R(Ea, ba, 666 * p + 18), Ha = R(Ha, E + 1.5, 666 * p + 18), Ia = R(Ia, O, 666 * p + 18))
        : (Ea = Wa(Ea, q, 1, 2 * d),
          Ha = Wa(Ha, C + 13 + 15 * p, 4, 2 * d),
          Ia = Wa(Ia, H + -18, 1, 2 * d),
          y = Ia - H,
          1 < (0 > y ? -y : y)
          && (N = Ea - q, Ka = 270 + Math.atan2(y, N) / La, Ja = 90 - Math.atan2(Math.hypot(y, N), Ha - C) / La));
      Ja = Pa(87 > Ja ? Ja : 87, -87);
      Ka = Ua(Ka);
      1 === b && (l[9].j = -15 > n.x && 0 > n.z ? 1 : 0);
      (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && Y();
    };
    f[37].g = () => r.translate(n.x, E, n.z).rotateSelf(0, k);
    [38, 39].map((M, I) => {
      f[M].g = () =>
        f[37].l.translate(0, m * Sa(0.45 * Math.sin(9.1 * a + Math.PI * (I - 1) - Math.PI / 2))).rotateSelf(
          m * Math.sin(9.1 * a + Math.PI * (I - 1)) * 0.25 / La,
          0,
        );
    });
    Y(1);
  },
  Ib = c => {
    h4.innerHTML += ".";
    setTimeout(c);
  },
  Jb = c => Math.sin(c * Math.PI * 2),
  Kb = c => 0.5 > c % 1 ? 1 : -1,
  Lb = c => c % 1 * 2 - 1,
  Mb = c => 2 > (c = c % 1 * 4) ? c - 1 : 3 - c,
  Tb = c => {
    let b = 0;
    const h = () => {
        const p = yb.createBuffer(2, 5362944, 44100);
        for (let w = 0; 2 > w; w++) {
          for (let x = w, t = p.getChannelData(w); 10725888 > x; x += 2) {
            t[x >> 1] = m[x] / 65536;
          }
        }
        xb.buffer = p;
        xb.loop = !0;
        Ib(c);
      },
      k = () => {
        let p, w = 0, [x, t, v, A, D, F, E, e, g, q, C, H, B, J, Y, ja, aa, M, I, y, S] = Da[b];
        q = q * q * 4;
        for (const O of [5513, 4562, 3891]) {
          const X = [];
          let oa = 0, Aa = 0, Ba, Ra, Cb;
          const Ca = new Int32Array(768 * O), Nb = 2 ** (H - 9) / O, Ob = Math.PI * 2 ** (aa - 8) / O, mb = I * O & -2;
          for (let gb = 0; 11 >= gb; ++gb) {
            for (
              let hb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + gb];
              32 > hb;
              ++hb
            ) {
              const Eb = (32 * gb + hb) * O;
              for (var G = 0; 4 > G; ++G) {
                if (Ba = 0, Db && (Ba = S[Db - 1].charCodeAt(hb + 32 * G) - 40, Ba += 0 < Ba ? 106 : 0), Ba) {
                  var z;
                  if (!(z = X[Ba])) {
                    z = Ba;
                    let V = void 0, ra = void 0;
                    var N = O, ba = Ba;
                    let Pb = 0, Qb = 0;
                    const Rb = 2 > b ? Lb : Jb, Sb = 2 > b ? 1 > b ? Kb : Mb : Jb, Fb = new Int32Array(e + g + q);
                    for (let Fa = 0, nb = 0; e + g + q > Fa; ++Fa, ++nb) {
                      let Ga = 1;
                      e > Fa ? Ga = Fa / e : e + g > Fa || (Ga = (1 - (Ga = (Fa - e - g) / q)) * 3 ** (-C / 16 * Ga));
                      0 > nb
                        || (nb -= 4 * N,
                          ra = 396e-5 * 2 ** ((ba + t - 256) / 12),
                          V = 396e-5 * 2 ** ((ba + D - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                      Fb[Fa] = 80
                          * (Rb(Pb += ra * Ga ** (v / 32)) * x + Sb(Qb += V * Ga ** (F / 32)) * A
                            + (E ? (2 * Math.random() - 1) * E : 0))
                          * Ga | 0;
                    }
                    z = X[z] = Fb;
                  }
                  for (let V = 0, ra = 2 * Eb; z.length > V; ++V, ra += 2) {
                    Ca[ra] += z[V];
                  }
                }
              }
              for (let V, ra = 0; O > ra; ++ra) {
                G = 0,
                  z = 2 * (Eb + ra),
                  ((V = Ca[z]) || Cb)
                  && (Ra = 308e-5 * B,
                    1 !== b && 4 !== b || (Ra *= Math.sin(Nb * z * Math.PI * 2) * y / 512 + 0.5),
                    Ra = 1.5 * Math.sin(Ra),
                    oa += Ra * Aa,
                    p = (1 - J / 255) * (V - Aa) - oa,
                    Aa += Ra * p,
                    V = 4 === b ? Aa : 3 === b ? p : oa,
                    b || (V = 1 > (V *= 22e-5) ? -1 < V ? Math.sin(V / 4 * Math.PI * 2) : -1 : 1, V /= 22e-5),
                    V *= Y / 32,
                    Cb = 1e-5 < V * V,
                    p = Math.sin(Ob * z) * ja / 512 + 0.5,
                    G = V * (1 - p),
                    V *= p),
                  z < mb || (G += Ca[1 + z - mb]
                    * M / 255,
                    V += Ca[z - mb] * M / 255),
                  m[w + z] += Ca[z] = G,
                  ++z,
                  m[w + z] += Ca[z] = V;
              }
            }
          }
          w += Ca.length;
        }
        Ib(5 > ++b ? k : h);
      },
      m = new Int32Array(10725888);
    Ib(k);
  },
  Ub = "data:image/svg+xml;base64,"
    + btoa(
      "<svg color-interpolation-filters=\"sRGB\" height=\"1024\" width=\"1024\" xmlns=\"http://www.w3.org/2000/svg\"><filter filterUnits=\"userSpaceOnUse\" height=\"1026\" id=\"a\" width=\"1026\" x=\"0\" y=\"0\"><feTurbulence baseFrequency=\".007\" height=\"1025\" numOctaves=\"6\" stitchTiles=\"stitch\" width=\"1025\" result=\"z\" type=\"fractalNoise\" x=\"1\" y=\"1\"/><feTile height=\"1024\" width=\"1024\" x=\"-1\" y=\"-1\"/><feTile/><feDiffuseLighting diffuseConstant=\"4\" lighting-color=\"red\" surfaceScale=\"5\"><feDistantLight azimuth=\"270\" elevation=\"5\"/></feDiffuseLighting><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"x\"/><feColorMatrix values=\"0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 1\" in=\"z\"/><feTile height=\"1024\" width=\"1024\" x=\"1\" y=\"1\"/><feTile result=\"z\"/><feTurbulence baseFrequency=\".01\" height=\"1024\" numOctaves=\"5\" stitchTiles=\"stitch\" width=\"1024\"/><feColorMatrix values=\"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1\"/><feBlend in2=\"x\" mode=\"screen\"/><feBlend in2=\"z\" mode=\"screen\"/></filter><rect filter=\"url(#a)\" height=\"100%\" width=\"100%\"/></svg>",
    ),
  W = NO_INLINE((c, b, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * b << 8 | 255 * c),
  yb = new AudioContext(),
  xb = yb.createBufferSource(),
  Z = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Z) {
  Z[c[0] + [...c].reduce((b, h, k) => (b * k + h.charCodeAt(0)) % 434, 0).toString(36)] = Z[c];
}
Ib(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const k = g => {
            requestAnimationFrame(k);
            q = (g - (ta || g)) / 1e3;
            sa ? (d = 0, za[5] = 0) : d = 0.066 < q ? 0.066 : q;
            a += d;
            da += q;
            ta = g;
            0 < d
              && (Z.b6o(36160, w),
                Z.fa7(),
                Z.r9r(0, 0, 128, 128, 6408, 5121, Oa),
                Z.iay(36009, [36064, 36096]),
                Z.iay(36008, [36064, 36096]),
                wa(),
                rb(),
                za[5] = 0);
            var q = sa
              ? r.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Sa(hC.clientWidth / 1e3))
              : r.rotate(-Ja, -Ka, -0).invertSelf().translateSelf(-Ea, -Ha, -Ia);
            0 < d
              && (F(),
                Z.b6o(36160, w),
                Z.v5y(0, 0, 128, 128),
                Z.c4s(16640),
                Z.cbf(!0, !1, !0, !1),
                Z.uae(F("b"), !1, $a(r.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, 0.3 - n.z))),
                Gb(F("c"), 0, 41),
                Z.c4s(256),
                Z.cbf(!1, !0, !0, !1),
                Z.uae(F("b"), !1, $a(r.translate(-n.x, -n.y, -n.z - 0.3))),
                Gb(F("c"), 0, 41),
                Z.f1s());
            A();
            Z.b6o(36160, p);
            Z.v5y(0, 0, 2048, 2048);
            e[0](wb(q, 0.3, 55, 10));
            e[1](wb(q, 55, 177, 11));
            E();
            Z.b6o(36160, null);
            Z.v5y(0, 0, Z.drawingBufferWidth, Z.drawingBufferHeight);
            Z.cbf(!0, !0, !0, !0);
            Z.c4s(16640);
            e[0]();
            e[1]();
            Z.uae(E("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
            Z.uae(E("b"), !1, $a(q));
            Z.ubu(E("k"), Ea, Ha, Ia);
            Gb(E("c"), !va);
            D();
            Z.ubu(D("j"), Z.drawingBufferWidth, Z.drawingBufferHeight, da);
            sa ? Z.ubu(D("k"), 0, 0, 0) : Z.ubu(D("k"), Ea, Ha, Ia);
            Z.uae(D("b"), !1, $a(q.inverse()));
            Z.d97(4, 3, 5123, 0);
            Z.b6o(36160, w);
            Z.f1s();
          },
          m = h,
          p = Z.c5w(),
          w = Z.c5w(),
          x = Z.c3z(),
          t = Z.c25(),
          v = Ab(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          A = Bb(
            Ab(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          D = Bb(
            Ab("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          F = Bb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          E = Bb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          e = (F(),
            Z.uae(F("a"), !1, ab(1.4, 0.59, 1e-4, 1)),
            D(),
            Z.ubh(D("q"), 3),
            E(),
            Z.ubh(E("q"), 3),
            u(2, g => {
              const q = new Float32Array(16), C = Z.c25(), H = E(g ? "j" : "i");
              return Z.ubh(E(g ? "h" : "g"), g),
                Z.b6o(36160, p),
                Z.d45([0]),
                Z.r9l(0),
                Z.a4v(33984 + g),
                Z.b9j(3553, C),
                Z.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                Z.t2z(3553, 10241, 9729),
                Z.t2z(3553, 10240, 9729),
                Z.t2z(3553, 34893, 515),
                Z.t2z(3553, 34892, 34894),
                Z.t2z(3553, 10243, 33071),
                Z.t2z(3553, 10242, 33071),
                B => {
                  B
                    ? ($a(B, q), Z.uae(A("b"), !1, q), Z.fas(36160, 36096, 3553, C, 0), Z.c4s(256), Gb(A("c"), !va))
                    : Z.uae(H, !1, q);
                };
            }));
        Z.e8z(2929);
        Z.e8z(2884);
        Z.c70(1);
        Z.c7a(1029);
        Z.d4n(515);
        Z.c5t(0, 0, 0, 1);
        Z.b6o(36160, w);
        Z.bb1(36161, x);
        Z.r4v(36161, 33189, 128, 128);
        Z.f8w(36160, 36096, 36161, x);
        Z.a4v(33987);
        Z.b9j(3553, t);
        Z.fas(36160, 36064, 3553, t, 0);
        Z.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Z.a4v(33987);
        Z.b9j(3553, Z.c25());
        Z.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, m);
        Z.gbn(3553);
        Z.t2z(3553, 10241, 9987);
        Z.t2z(3553, 10240, 9729);
        try {
          const [g, q, C, H, B] = JSON.parse(localStorage.DanteSP22);
          l.map((J, Y) => J.h = J.i = J.j = Y ? 0 | g[Y] : 0);
          ya.map((J, Y) => J.j = 0 | q[Y]);
          ea = C;
          a = H;
          ma = B;
        } catch {
        }
        la = 0 > ea ? 0 : 1 < ea ? 1 : ea;
        rb();
        NO_INLINE(Hb)();
        requestAnimationFrame(k);
        NO_INLINE(zb)();
      }
    },
    h = new Image();
  h.onload = h.onerror = b;
  h.src = Ub;
  NO_INLINE(Tb)(() => {
    Ib(() => {
      const t = [],
        v = B => {
          let { x: J, y: Y, z: ja } = D[B], aa = (H[0] = J, H[1] = Y, H[2] = ja, B = "" + (D.D ? C : q), g.get(B));
          return void 0 !== aa
            ? (J = 3 * aa, e[J] = (e[J++] + q[5]) / 2, e[J] = (e[J++] + q[6]) / 2, e[J] = (e[J] + q[7]) / 2)
            : (g.set(B, aa = g.size), F.push(J, Y, ja, H[3]), E.push(q[4]), e.push(q[5], q[6], q[7])),
            aa;
        };
      let A = 0, D;
      const F = [],
        E = [],
        e = [],
        g = new Map(),
        q = new Int32Array(8),
        C = new Int32Array(q.buffer, 0, 5),
        H = new Float32Array(q.buffer);
      for (const B of f) {
        for (D of (H[3] = 40 === B.F ? -13 : B.H && B.F, B.s)) {
          const { x: J, y: Y, z: ja } = Za(D);
          q[4] = 0 | D.A;
          q[5] = 32767 * J;
          q[6] = 32767 * Y;
          q[7] = 32767 * ja;
          for (let aa = 2, M = v(0), I = v(1); D.length > aa; ++aa) {
            t.push(M, I, I = v(aa));
          }
        }
        B.s = null;
        B.v = A;
        B.G = A = t.length;
      }
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Float32Array(F), 35044);
      Z.v7s(0, 4, 5126, !1, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Int16Array(e), 35044);
      Z.v7s(1, 3, 5122, !0, 0, 0);
      Z.b11(34962, Z.c1b());
      Z.b2v(34962, new Uint32Array(E), 35044);
      Z.v7s(2, 4, 5121, !0, 0, 0);
      Z.b11(34963, Z.c1b());
      Z.b2v(34963, new Uint16Array(t), 35044);
      Z.e3x(0);
      Z.e3x(1);
      Z.e3x(2);
      Ib(b);
    });
    let k;
    const m = (t, v, A) =>
        r.translate(t + Math.sin(a + 2) / 5, v + Math.sin(0.8 * a) / 3, A).rotateSelf(
          2 * Math.sin(a),
          Math.sin(0.7 * a),
          Math.sin(0.9 * a),
        ),
      p = (() => {
        const t = u(
            11,
            A => r.translate(Math.sin(A / 10 * Math.PI), A / 10).rotate(+A).scale(1.0001 - A / 10, 0, 1 - A / 10),
          ),
          v = db(18);
        return u(10, A => eb(cb(v, t[A]).reverse(), cb(v, t[A + 1]), 1)).flat();
      })(),
      w = Q(
        P(
          K(L(20, 1, 1.15, 1), r.translate(0, -3).scale(3.5, 1, 3.5), W(0.7, 0.4, 0.25, 0.7)),
          K(L(20, 1, 1.3, 1), r.translate(0, -2.5).scale(2.6, 1, 3), W(0.7, 0.4, 0.25, 0.2)),
          K(L(), r.translate(4, -1.2).scale3d(2), W(0.7, 0.4, 0.25, 0.3)),
        ),
      ),
      x = Q(
        P(
          K(L(), r.translate(0, -8).scale(6, 15, 2.2)),
          K(L(), r.translate(0, -14.1).scale(4, 13, 4)),
          K(L(20, 1), r.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      );
    T(() => {
      U([xa.slice(1)], r.translate(-2).scale3d(3).rotate(90, 0));
    }, 0);
    T(() => {
      const t = (e, g, q) =>
          T(C => {
            C.g = () => r.translate(v() * Math.sin(3 * e + a * e) * g);
            xa.map(({ x: H, z: B }) => {
              U(L(11, 1), r.translate(4 * H, 4, q + 4 * B).scale(0.8, 3, 0.8), W(0.5, 0.3, 0.7, 0.6));
              U(L(), r.translate(4 * H, 7, q + 4 * B).scale(1, 0.3), W(0.5, 0.5, 0.5, 0.3));
            });
            U(Q(P(
              K(L(), r.translate(0, 0, q).scale(5, 1, 5), W(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(H =>
                K(L(), r.translate(5 * H, 0.2, q).rotate(0, 0, -30 * H).scale(4, 1, 2), W(0.8, 0.8, 0.8, 0.3))
              ),
            )));
            U(L(), r.translate(0, -3, q).scale(8, 2, 8), W(0.4, 0.4, 0.4, 0.3));
          }),
        v = () => {
          var e = l[2].i, g = 1 - l[4].i;
          return e < g ? e : g;
        },
        A = (T(e => {
          e.g = () => m(-12, 4.2, 40 * la - 66);
          U(w);
          ub(r.translate(0, -3, 4));
        }),
          u(7, e => K(L(6, 1), r.translate(4 * (e / 6 - 0.5), 3).scale(0.2, 3, 0.2), W(0.3, 0.3, 0.38))).flat()),
        D = (vb(r.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          vb(
            r.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...db(18).map(({ x: e, z: g }) => [7 * e, 10 * g, 4.5 - 2 * (0 > e ? -e : e)]),
          ),
          U(L(), r.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), W(0.8, 0.8, 0.8, 0.2)),
          xa.map(({ x: e, z: g }) => U(L(6), r.translate(3 * e, 3, 15 * g).scale(0.7, 4, 0.7), W(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(e => U(L(), r.translate(0, 0, e).scale(3, 1, 8), W(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((e, g) => {
            U(L(), r.translate(0, 6.3, e).scale(4, 0.3, 1), W(0.3, 0.3, 0.3, 0.4));
            U(L(), r.translate(0, 1, e).scale(3, 0.2, 0.35), W(0.5, 0.5, 0.5, 0.3));
            T(q => {
              q.g = () => r.translate(0, 4.7 * -l[g + 1].h, e);
              U(A);
            });
          }),
          u(5, e =>
            u(2, g =>
              U(
                p,
                r.translate(18.5 * (g - 0.5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2),
                W(1, 1, 0.8, 0.2),
              ))),
          U(L(), r.translate(3, 1.5, -20).scale(0.5, 2, 5), W(0.7, 0.7, 0.7, 0.2)),
          U(L(), r.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), W(0.75, 0.75, 0.75, 0.2)),
          U(L(5), r.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), W(0.6, 0.3, 0.3, 0.4)),
          ub(r.translate(-5.4, 1.5, -19).rotate(0, -90)),
          U(
            L(),
            r.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5),
            W(0.8, 0.2, 0.2, 0.5),
          ),
          U(Q(
            P(
              qb(
                K(L(6, 0, 0, 0.3), r.translate(8, -3, -4).scale(13, 1, 13), W(0.7, 0.7, 0.7, 0.2)),
                K(L(6), r.translate(0, -8).scale(9, 8, 8), W(0.4, 0.2, 0.5, 0.5)),
                K(L(6, 0, 0, 0.3), r.translate(0, -0.92).scale(13, 2, 13), W(0.8, 0.8, 0.8, 0.2)),
              ),
              K(L(5), r.scale(5, 30, 5), W(0.4, 0.2, 0.6, 0.5)),
              K(L(5, 0, 1.5), r.translate(0, 1).scale(4.5, 0.3, 4.5), W(0.7, 0.5, 0.9, 0.2)),
              K(L(), r.rotate(0, 60).translate(14, 0.7, -1).rotate(0, 0, -35).scale(2, 2, 2), W(0.5, 0.5, 0.5, 0.5)),
              K(L(6), r.translate(15, -1.5, 4).scale(3.5, 1, 3.5), W(0.5, 0.5, 0.5, 0.5)),
            ),
          )),
          T(e => {
            e.g = () =>
              r.translate(
                0,
                0.01 < l[3].h ? (5 * Math.cos(1.5 * a) + 2) * l[3].i * (1 - l[2].h) + -15 * (1 - l[3].h) : -500,
                0,
              );
            ub(r.translate(0, 1.2));
            U(L(5), r.translate(0, -0.2).scale(5, 1, 5), W(0.6, 0.65, 0.7, 0.3));
          }),
          ub(r.translate(15, -2, 4)),
          t(0.7, 12, 35),
          t(1, 8.2, 55),
          T(e => {
            e.g = () => r.translate(v() * Math.sin(a / 1.5 + 2) * 12);
            U(
              Q(P(
                qb(
                  K(L(), r.scale(1.5, 1, 5), W(0.9, 0.9, 0.9, 0.2)),
                  K(L(6), r.scale(4, 1, 5), W(0.9, 0.9, 0.9, 0.2)),
                  K(L(), r.translate(0, -2).scale(2, 3.2, 1.9), W(0.3, 0.8, 0.5, 0.5)),
                  K(L(16, 1, 0, 4), r.scale(1, 1, 1.5).rotate(0, 90), W(0.9, 0.9, 0.9, 0.2)),
                ),
                K(L(), r.scale(1.3, 10, 1.3), W(0.2, 0.7, 0.4, 0.6)),
              )),
              r.translate(0, 0, 45),
            );
            vb(r.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          T(e => {
            e.g = () => r.translate(9.8 * (1 - v()));
            U(L(3), r.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), W(0.3, 0.6, 0.6, 0.2));
            U(L(8), r.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), W(0.8, 0.8, 0.8, 0.2));
            U(L(), r.translate(-23, -3, 55).scale(5.2, 1.7, 3), W(0.5, 0.5, 0.5, 0.3));
            U(L(), r.translate(-23, -2.2, 62).scale(3, 1, 4), W(0.5, 0.5, 0.5, 0.3));
            ub(r.translate(-23, -0.5, 66.5));
          }),
          U(L(), r.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)),
          T(e => {
            e.g = () => r.translate(0, Sa(1 - 5 * v()) * Ta(l[4].h, l[5].h) * Math.sin(1.35 * a) * 4);
            U(L(), r.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), W(0.7, 0.7, 0.7, 0.2));
            U(
              Q(P(K(L(), r.scale(3, 1.4, 2.7)), K(L(), r.scale(1.2, 8, 1.2)))),
              r.translate(-33, -3, 55),
              W(0.7, 0.7, 0.7, 0.2),
            );
          }),
          T(e => {
            e.g = () => r.translate(0, 0, Sa(1 - 5 * v()) * Ta(l[4].h, l[5].h) * Math.sin(0.9 * a) * 8);
            U(Q(
              P(
                K(L(), r.translate(-27, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2)),
                K(L(), r.translate(-27, -3, 55).scale(1, 3), W(0.9, 0.9, 0.9, 0.2)),
              ),
            ));
            U(L(), r.translate(-39, -3, 55).scale(3, 1.4, 2.7), W(0.9, 0.9, 0.9, 0.2));
          }),
          T(e => {
            e.g = () => r.translate(0, -6.5 * l[4].i);
            U(
              L(6),
              r.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9),
              W(0.7, 0.7, 0.7, 0.4),
            );
          }),
          [...K(
            Q(qb(
              K(L(), r.translate(0, -3).scale(11, 1.4, 3), W(0.9, 0.9, 0.9, 0.2)),
              P(
                K(L(6), r.rotate(0, 0, 90).scale(6, 8, 6), W(0.3, 0.6, 0.6, 0.3)),
                K(L(4, 0, 0.01), r.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), W(0.3, 0.6, 0.6, 0.3)),
                K(L(6), r.rotate(0, 0, 90).scale(5, 12, 5), W(0.3, 0.6, 0.6, 0.3)),
                ...[5, 0, -5].map(e =>
                  K(L(5), r.translate(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), W(0.3, 0.6, 0.6, 0.3))
                ),
              ),
            )),
            r,
          )]),
        F =
          (U(D, r.translate(-53, 0, 55)),
            U(L(6), r.translate(-61.3, -2.4, 49).scale(3, 1, 5), W(0.4, 0.6, 0.6, 0.3)),
            U(L(7), r.translate(-57, -2.6, 46).scale(4, 1, 4), W(0.8, 0.8, 0.8, 0.3)),
            ub(r.translate(-55, -1.1, 46).rotate(0, 90)),
            T(e => {
              e.g = () => r.translate(-75, (1 - l[5].i) * (1 - l[6].h) * 3, 55).rotate(180 * (1 - l[5].i) + ia, 0);
              U(D);
            }, 2),
            U(L(), r.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), W(0.7, 0.7, 0.7, 0.2)),
            U(
              L(3, 0, -0.5),
              r.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
              W(0.8, 0.8, 0.8, 0.2),
            ),
            U(
              Q(P(
                qb(
                  K(L(), r.translate(-100, -2.5, 55).scale(8, 1, 8), W(0.8, 0.8, 0.8, 0.2)),
                  K(L(), r.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), W(0.8, 0.8, 0.8, 0.2)),
                  K(L(), r.translate(-100, -2.6, 70).scale(3, 1.1, 7), W(0.8, 0.8, 0.8, 0.2)),
                  K(L(), r.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), W(0.8, 0.8, 0.8, 0.2)),
                  K(L(6), r.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), W(0.6, 0.6, 0.6, 0.3)),
                  K(L(), r.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), W(0.8, 0.8, 0.8, 0.2)),
                  K(L(), r.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), W(0.8, 0.8, 0.8, 0.2)),
                ),
                K(L(8), r.translate(-100, -1, 55).scale(7, 0.9, 7), W(0.3, 0.3, 0.3, 0.4)),
                K(L(8), r.translate(-100, -2, 55).scale(4, 0.3, 4), W(0.4, 0.4, 0.4, 0.5)),
                K(L(8), r.translate(-100, -3, 55).scale(0.6, 1, 0.6), W(0.4, 0.4, 0.4, 0.5)),
              )),
              r,
            ),
            vb(r.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            vb(r.translate(-89, 0.2, 80), [0, 0, 6]),
            U(Q(
              P(
                K(L(), r.translate(-100, 1, 63).scale(7.5, 4), W(0.5, 0.5, 0.5, 0.4)),
                K(L(), r.translate(-100, 0, 70).scale(2, 2, 10), W(0.5, 0.5, 0.5, 0.4)),
                K(L(20, 1), r.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), W(0.5, 0.5, 0.5, 0.4)),
              ),
            )),
            T(e => {
              e.g = () => r.translate(-99.7, 5.3 * -l[6].h - 2, 63.5);
              U(A);
            }),
            xa.map(({ x: e, z: g }) => {
              U(L(6), r.translate(7 * e - 100, -3, 7 * g + 55).scale(1, 8.1), W(0.6, 0.15, 0.15, 0.8));
              [4, -0.4].map(q =>
                U(L(6), r.translate(7 * e - 100, q, 7 * g + 55).scale(1.3, 0.5, 1.3), W(0.4, 0.2, 0.2, 0.8))
              );
            }),
            u(7, e => {
              U(
                L((23 * e + 1) % 5 + 5, 0, 0.55),
                r.translate(5 * Math.sin(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(
                  5 + e / 2,
                  1 + e / 6,
                  5 + e / 3,
                ),
                W(0.5 - e / 17, 0.5 - (1 & e) / 9, 0.6, 0.3),
              );
            }),
            U(L(), r.translate(-87, -9.5, 24).scale(7, 1, 3), W(0.4, 0.5, 0.6, 0.4)),
            U(L(4), r.translate(-86, -9.2, 27).scale(5, 1, 5), W(0.5, 0.6, 0.7, 0.3)),
            U(L(12, 1), r.translate(-86, -9, 31).scale(1.5, 1, 1.5), W(0.3, 0.3, 0.4, 0.1)),
            ub(r.translate(-86, -7.5, 31)),
            T(e => {
              e.g = () => r.translate(0, 3.5 * (1 - Pa(l[6].h, l[7].h)) + Ta(l[7].i, l[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(g =>
                U(L(), r.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), W(0.2, 0.5, 0.6, 0.2))
              );
            }),
            T(e => {
              e.g = () => {
                const g = Ta(l[7].i, l[6].i);
                return r.translate(0, g * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + g) * g);
              };
              [6, 18].map(g =>
                U(L(), r.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), W(0.1, 0.4, 0.5, 0.2))
              );
            }),
            U(
              Q(P(
                qb(
                  K(L(), r.scale(11, 1, 13), W(0.3, 0.4, 0.6, 0.3)),
                  K(L(5), r.translate(0, 0, -7).scale(2, 1.2, 2), W(0.2, 0.4, 0.7, 0.3)),
                  K(L(5), r.scale(9, 1.2, 9), W(0, 0.2, 0.3, 0.5)),
                ),
                K(L(5), r.scale(5.4, 5, 5.4), W(0, 0.2, 0.3, 0.5)),
              )),
              r.translate(-38.9, -11.3, 17),
            ),
            ub(r.translate(-38.9, -9.6, 10)),
            T(e => {
              e.g = () => r.translate(0, -7.3 * l[7].i);
              U(
                Q(P(
                  qb(
                    K(L(5), r.translate(0, 2).scale(5, 7, 5).skewY(8), W(0.2, 0.4, 0.5, 0.5)),
                    K(L(5), r.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), W(0.25, 0.35, 0.5, 0.5)),
                    K(L(5), r.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), W(0.35, 0.3, 0.5, 0.5)),
                  ),
                  K(L(5), r.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), W(0.2, 0.4, 0.5, 0.5)),
                )),
                r.translate(-38.9, -11.3, 17),
              );
              vb(r.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...db(15).map(({ x: g, z: q }) => [3 * g, 3 * q, 1.2]));
            }),
            xa.map(({ x: e, z: g }) => {
              k = r.translate(9 * e - 38.9, -7.3, 11 * g + 17);
              U(L(14, 1), k.scale(1, 4), W(0.25, 0.25, 0.25, 1));
              [1.5, 8].map(q => U(L(17, 1), k.translate(0, q - 4).scale(1.5, 0.5, 1.5), W(0.6, 0.6, 0.6, 0.3)));
            }),
            U(
              Q(P(
                qb(
                  K(L(6), r.translate(0, 0, -36).scale(15, 1.2, 15), W(0.7, 0.7, 0.7, 0.3)),
                  K(L(), r.translate(0, 0, -18).scale(4, 1.2, 6), W(0.45, 0.4, 0.6, 0.3)),
                ),
                ...u(6, e =>
                  u(6, g =>
                    K(
                      L(6),
                      r.translate(4.6 * g - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2),
                      W(0.7, 0.7, 0.7, 0.3),
                    ))).flat(),
              )),
              r.translate(-38.9, -11.3, 17),
            ),
            vb(r.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
            U(L(5), r.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), W(0.8, 0.1, 0.25, 0.4)),
            ub(r.translate(-84, -0.5, 85).rotate(0, 45)),
            T(e => {
              e.g = () => m(-123, 1.4, 55 + -65 * ma);
              ub(r.translate(0, -3, -4).rotate(0, 180));
              U(w);
            }),
            vb(r.translate(-115, 0.2, -12), [0, 0, 3.5]),
            Q(P(
              K(L(), r.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), W(0.25, 0.25, 0.35, 0.3)),
              K(L(3), r.translate(0, 0, -5.5).scale(3, 2), W(0.6, 0.3, 0.4, 0.3)),
              ...[-1.2, 1.2].map(e => K(L(), r.translate(e, -0.5, 1).scale(0.14, 0.3, 6.5), W(0.7, 0.2, 0, 0.3))),
            ))),
        E = (T(e => {
          e.g = () => r.translate(0, -2, Ta(l[10].h, l[11].h) * Qa(Math.sin(1.1 * a)) * -8.5 + 10);
          u(2, g => U(F, r.translate(9 * g - 110 + (1 & g), 1.7, -12)));
        }),
          T(e => {
            e.g = () => r.translate(0, -2, Ta(l[10].h, l[11].h) * Qa(Math.sin(2.1 * a)) * -8.5 + 10);
            u(2, g => U(F, r.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
          }),
          T(e => {
            e.g = () =>
              r.translate(
                0,
                -2,
                -8.5 * Pa((1 - l[10].h) * (1 - Ta(l[10].h, l[11].h)), Ta(l[10].h, l[11].h) * Qa(Math.sin(1.5 * a)))
                  + 10,
              );
            u(3, g => U(F, r.translate(9 * g - 106, 1.7, -12)));
          }),
          U(
            Q(P(
              qb(
                K(L(), r.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                K(L(), r.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),
              ),
              ...u(4, e => K(L(), r.translate(13 + 9 * e + (1 & e), -0.8, 9).scale(1.35, 1.35, 9))),
              ...u(3, e => K(L(), r.translate(17 + 9 * e, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            r.translate(-123, 0, -12),
            W(0.5, 0.5, 0.6, 0.2),
          ),
          U(L(5), r.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), W(0.25, 0.25, 0.35, 1)),
          U(L(), r.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), W(0.8, 0.8, 0.8, 0.2)),
          U(L(6), r.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), W(0.6, 0.5, 0.7, 0.2)),
          ub(r.translate(-116, -1.4, -18).rotate(0, 180)),
          u(3, e => {
            U(x, r.translate(12 * e - 109, -9, -12), W(0.6, 0.6, 0.6, 0.3));
            U(x, r.translate(-77, -9, -12 * e - 20).rotate(0, 90), W(0.6, 0.6, 0.6, 0.3));
          }),
          U(Q(
            P(
              K(L(12), r.translate(-77, -13.9, -12).scale(4, 18.2, 4), W(0.7, 0.7, 0.7, 0.2)),
              K(L(), r.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), W(0.4, 0.5, 0.6, 0.2)),
              K(L(), r.translate(-77, 0, -14).scale(1.5, 2.2, 2), W(0.4, 0.5, 0.6, 0.2)),
              K(L(12), r.translate(-77, 2.8, -12).scale(3, 5, 3), W(0.4, 0.5, 0.6, 0.2)),
            ),
          )),
          U(L(), r.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), W(0.6, 0.6, 0.6, 0.3)),
          U(L(), r.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), W(0.6, 0.6, 0.6, 0.3)),
          U(L(), r.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), W(0.6, 0.6, 0.6, 0.3)),
          U(Q(
            P(
              K(L(), r.translate(-93, -5.8, -40).scale(9, 1, 5), W(0.8, 0.8, 0.8, 0.1)),
              K(L(9), r.translate(-98, -5.8, -40).scale(3, 8, 3), W(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          U(L(9), r.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), W(0.5, 0.5, 0.5, 0.3)),
          ub(r.translate(-98, -4.4, -40).rotate(0, 90)),
          vb(r.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          U(Q(
            P(
              qb(
                K(L(6, 0, 0, 0.6), r.translate(-100, 0.7, 105.5).scale(8, 1, 11), W(0.7, 0.7, 0.7, 0.2)),
                K(L(), r.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), W(0.7, 0.7, 0.7, 0.2)),
                K(L(), r.translate(-91.2, 0.7, 107).scale(3, 1, 3.3), W(0.7, 0.7, 0.7, 0.2)),
              ),
              K(L(5), r.translate(-100, 0.7, 113).scale(4, 3, 4), W(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          u(4, e =>
            T(g => {
              g.g = () => {
                const q = Ta(l[8].i, l[12].i);
                return r.translate(
                  (2 < e ? 2 * (1 - q) + q : 0) - 100,
                  q * Math.sin(1.3 * a + 1.7 * e) * (3 + e / 3) + 0.7,
                  115 + (1 & e ? -1 : 1) * (1 - l[8].i) * (1 - l[12].i) * -7
                    + (0.05 > q ? 0.05 : q) * Math.cos(1.3 * a + 7 * e) * (4 - 2 * (1 - e / 3)),
                );
              };
              U(
                L(6),
                r.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
                W(0.5 - e / 8, e / 12 + 0.5, 0.7, 0.3),
              );
            })),
          T(e => {
            e.g = () => {
              const g = Ta(l[8].i, l[12].i);
              return r.translate(2.5 * (1 - g) - 139.7, -3 * (1 - l[8].h) + g * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
            };
            U(Q(
              P(
                K(L(10), r.scale(6, 2, 6), W(0.1, 0.6, 0.5, 0.3)),
                K(L(10), r.scale(3.3, 6, 3.3), W(0.1, 0.6, 0.5, 0.5)),
              ),
            ));
            k = r.translate(-7.5).rotate(0, 90);
            U(L(15, 1), k.scale(3, 2.3, 3), W(0.4, 0.4, 0.4, 0.3));
            U(L(10), k.scale(2, 2.5, 2), W(0.3, 0.8, 0.7, 0.3));
            U(L(5), k.scale(1, 3), W(0.5, 0.5, 0.5, 0.5));
            ub(k.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(g =>
              U(p, r.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), W(1, 1, 0.8, 0.2))
            );
            vb(r.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(e => {
            U(L(12, 1), r.translate(-7.5 * e - 100, 3.7, 96).scale(0.8, 4, 0.8), W(0.6, 0.24, 0.2, 0.5));
            [7.2, 1.5].map(g =>
              U(L(15, 1), r.translate(-7.5 * e - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), W(0.5, 0.24, 0.2, 0.4))
            );
            U(p, r.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), W(1, 1, 0.8));
            U(
              Q(P(
                K(L(), r.translate(-4 * e, 3.5, -0.5).scale(4, 4, 0.7), W(0.5, 0.5, 0.5, 0.4)),
                K(L(), r.scale(3, 3, 10), W(0.6, 0.24, 0.2, 0.5)),
                K(L(28, 1), r.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), W(0.6, 0.24, 0.2, 0.5)),
                K(L(5), r.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), W(0.6, 0.24, 0.2, 0.5)),
                K(L(5), r.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), W(0.6, 0.24, 0.2, 0.5)),
              )),
              r.translate(e - 100, 0.7, 97),
            );
          }),
          T(e => {
            e.g = () => r.translate(-100, 0.6 - 6 * l[12].h, 96.5).scale(0.88, 1.2);
            U(A);
          }),
          [
            ...K(L(25, 1), r.scale(8, 1, 8), W(0.45, 0.45, 0.45, 0.2)),
            ...K(L(5), r.translate(0, 1).scale(1, 0.2), W(0.3, 0.3, 0.3, 0.2)),
          ]);
      T(e => {
        e.g = () => r.translate(-80, 1, 106).rotate(0, 40 + fa);
        U(Q(
          P(
            K(L(25, 1), r.scale(8, 1, 8), W(0.45, 0.45, 0.45, 0.2)),
            K(L(), r.translate(0, 0, -5.5).scale(1.5, 3, 2.5), W(0.45, 0.45, 0.45, 0.2)),
          ),
        ));
        U(L(8), r.translate(0, 2).scale(3, 1.5, 3), W(0.7, 0.7, 0.7, 0.1));
        U(L(5), r.translate(0, 2).scale(1, 2), W(0.3, 0.3, 0.3, 0.2));
        vb(r.translate(0, 3), ...db(10).map(({ x: g, z: q }) => [5.6 * g, 5.6 * q, 2.5]));
      });
      T(e => {
        e.g = () => r.translate(-64, 1, 106).rotate(0, ha);
        U(Q(
          P(
            K(L(25, 1), r.translate(0, 2).scale(8, 1, 8), W(0.35, 0, 0, 0.3)),
            K(L(), r.scale(9, 5, 2), W(0.3, 0, 0, 0.3)),
          ),
        ));
        U(E);
        [-1, 1].map(g =>
          U(p, r.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), W(1, 1, 0.8))
        );
      });
      T(e => {
        e.g = () => r.translate(-48, 1, 106).rotate(0, 180 - ha);
        U(Q(
          P(
            K(L(25, 1), r.translate(0, 2).scale(8, 1, 8), W(0.35, 0, 0, 0.3)),
            K(L(), r.translate(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)),
            K(L(), r.translate(0, 0, 7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),
          ),
        ));
        U(E);
      });
      T(e => {
        e.g = () => r.translate(-48, 1, 90).rotate(0, 270 + ha);
        U(Q(
          P(
            K(L(25, 1), r.translate(0, 2).scale(8, 1, 8), W(0.35, 0, 0, 0.3)),
            K(L(), r.translate(7).scale(9, 5, 2), W(0.3, 0, 0, 0.3)),
            K(L(), r.translate(0, 0, -7).scale(2, 5, 9), W(0.3, 0, 0, 0.3)),
          ),
        ));
        U(E);
      });
      U(L(), r.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), W(0.7, 0.7, 0.7, 0.2));
      U(L(), r.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), W(0.7, 0.7, 0.7, 0.2));
      U(L(), r.translate(-39, 0.4, 90).scale(2, 1, 2), W(0.7, 0.7, 0.7, 0.3));
      U(L(), r.translate(-34.2, 0.4, 90).scale(3, 1, 3), W(0.7, 0.7, 0.7, 0.3));
      ub(r.translate(-34, 2.7, 96).rotate(-12, 0));
      U(L(5), r.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), W(0.2, 0.5, 0.5, 0.6));
      [W(0.1, 0.55, 0.45, 0.2), W(0.2, 0.5, 0.5, 0.3), W(0.3, 0.45, 0.55, 0.4)].map((e, g) =>
        T(q => {
          q.g = () =>
            r.translate(
              0,
              (1 - l[13].i) * (1 - l[14].i) * (g ? 0 : 3) + Ta(l[13].i, l[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,
            );
          U(L(), r.translate(-23.5, 0.5, 90 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), e);
          2 === g && U(L(), r.translate(-29.1, 0.4, 90).scale(2.1, 1, 3), W(0.7, 0.7, 0.7, 0.3));
          1 === g
            && U(
              L(),
              r.translate(-16.1, 0.5, 103.5).rotate(0, 0, -3.5).scale(3.9, 0.8, 2).skewX(-1),
              W(0.6, 0.6, 0.7, 0.3),
            );
        })
      );
      U(Q(
        P(
          K(L(6, 0, 0, 0.3), r.translate(0, -0.92, 95).scale(14, 2, 14), W(0.8, 0.8, 0.8, 0.2)),
          K(L(5), r.translate(0, 0, 95).scale3d(6), W(0.3, 0.3, 0.3, 0.5)),
        ),
      ));
      [8, -6.1].map((e, g) =>
        u(
          3,
          q =>
            U(
              x,
              r.translate(6 * q - 6, e - (1 & q), 111 - 0.2 * (1 & q) - g),
              1 & q ? W(0.5, 0.5, 0.5, 0.3) : W(0.35, 0.35, 0.35, 0.5),
            ),
        )
      );
      [-1, 1].map(e => U(p, r.translate(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), W(1, 1, 0.8)));
      ub(r.translate(0, 1.7, 82).rotate(0, 180));
      U(L(5), r.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), W(0.5, 0.3, 0.3, 0.4));
      U(Q(
        P(
          qb(
            K(L(), r.translate(0, 16, 110.5).scale(12, 1, 3), W(0.5, 0.3, 0.3, 0.4)),
            K(L(), r.translate(0, 16, 111).scale(3, 1, 3.8), W(0.5, 0.3, 0.3, 0.4)),
          ),
          K(L(5), r.translate(0, 16, 103.5).scale(5.5, 5, 5.5), W(0.5, 0.3, 0.3, 0.4)),
        ),
      ));
      U(L(6), r.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), W(0.5, 0.6, 0.7, 0.3));
      U(L(), r.translate(0, 16, 129).scale(1.5, 1, 2), W(0.5, 0.6, 0.7, 0.3));
      U(L(7), r.translate(0, 16.2, 133).scale(5, 1, 5), W(0.4, 0.5, 0.6, 0.4));
      T(e => {
        e.g = () => {
          const g = Math.sin(a);
          return r.translate(-2 * g).rotate(0, 0, 25 * g);
        };
        U(L(3), r.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), W(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          U(L(6), r.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), W(0.7, 0.7, 0.7, 0.4));
          U(L(), r.translate(0, 6.2, g + 95).scale(0.5, 11, 0.5), W(0.5, 0.3, 0.3, 0.4));
        });
      });
      T(e => {
        e.g = () => {
          const g = Ta(Ta((l[14].h + l[14].i) / 2, l[13].i), (l[15].h + l[15].i) / 2);
          return r.translate(0, 16 * g, 8.5 * Sa(2 * g - 1) + 95);
        };
        U(L(5), r.scale(5, 1.1, 5), W(0.5, 0.3, 0.3, 0.4));
        U(L(5), r.scale(5.5, 0.9, 5.5), W(0.25, 0.25, 0.25, 0.4));
        ub(r.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(r.translate(0, 3, 95), ...db(9).map(({ x: e, z: g }) => [9 * e, 9 * g, 4]));
      vb(r.translate(0, 19, 134), [0, 0, 3.5]);
    });
    T(() => {
      [0, 180].map(v => U(p, r.rotate(0, v).translate(0.2, 1.32).rotate(0, 0, -30).scale(0.2, 0.6, 0.2), W(1, 1, 0.8)));
      U(fb(20), r.translate(0, 1).scale(0.5, 0.5, 0.5), W(1, 0.3, 0.4));
      const t = K(
        Q(P(L(15, 1), K(L(), r.translate(0, 0, 1).scale(2, 2, 0.5)))),
        r.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        W(0.3, 0.3, 0.3),
      );
      [-1, 1].map(v => U(t, r.translate(0.2 * v, 1.2, 0.4).rotate(0, 20 * v, 20 * v)));
      U(L(), r.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), W(0.3, 0.3, 0.3));
      U(fb(20), r.scale(0.7, 0.8, 0.55), W(1, 0.3, 0.4));
    });
    [-1, 1].map(t =>
      T(() => {
        U(L(10, 1), r.translate(0.3 * t, -0.8).scale(0.2, 0.7, 0.24), W(1, 0.3, 0.4));
      })
    );
    T(() => {
      U(L(6, 1), r.scale(0.13, 1.4, 0.13), W(0.3, 0.3, 0.5, 0.1));
      U(L(8, 1), r.translate(0, 1).scale(0.21, 0.3, 0.21), W(1, 0.5, 0.2));
      U(L(3), r.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), W(0.2, 0.2, 0.2, 0.1));
    }, 0);
    T(() => {
      U(L(6).slice(0, -1), r.scale(0.77, 1, 0.77), W(1, 0.3, 0.5));
    }, 0);
    T(() => {
      U(
        fb(30, 24, (t, v, A) => {
          const D = v / 24, F = t * Math.PI * 2 / 30, E = D ** 0.6 * Math.PI / 2;
          t = D * D * Math.sin(t * Math.PI * 14 / 30) / 4;
          return 23 === v
            ? { x: A.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(F) * Math.sin(E),
              y: Math.cos(D * Math.PI) - D - t,
              z: Math.sin(F) * Math.sin(E) + Math.sin(t * Math.PI * 2) / 4,
            };
        }),
        r.scale3d(0.7),
        W(1, 1, 1),
      );
      [-1, 1].map(t => U(fb(12), r.translate(0.16 * t, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls: <b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>Move: WASD/arrows, Levers: E/click, Menu: Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 SalvatorePreviti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n",
);
