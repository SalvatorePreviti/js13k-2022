let aa = 0,
  ca = 0,
  a = 0,
  ea = 0,
  fa = 0,
  ia = 0,
  ja = 0,
  ka = 0,
  ma = 0,
  na = 0,
  oa = 0,
  pa = 0,
  d = 0.066,
  qa = 1,
  ra,
  ua,
  va,
  wa,
  xa;
const ya = [{ x: -1, z: 1 }, { x: 1, z: 1 }, { x: 1, z: -1 }, { x: -1, z: -1 }],
  f = [],
  l = [],
  za = [],
  Aa = [],
  Ca = [[
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
var Da = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0;
const Ka = Math.PI / 180,
  r = new DOMMatrix(),
  La = new Float32Array(16),
  Ma = new Float32Array(624),
  Na = (c, b) => Array.from(Array(c), (h, k) => b(k)),
  Oa = (c, b) => b < c ? c : b,
  Pa = c => 0 > c ? -c : c,
  Ra = c => 0 > c ? 0 : 1 < c ? 1 : c,
  Sa = (c, b, h) => c + (b - c) * (0 > h ? 0 : 1 < h ? 1 : h),
  Ta = (c, b) => (c = 0 > c ? 0 : 1 < c ? 1 : c, c + (1 - c - c) * (0 > b ? 0 : 1 < b ? 1 : b)),
  Ua = c => Math.atan2(Math.sin(c *= Ka), Math.cos(c)) / Ka,
  Va = (c, b, h) =>
    ((c *= Ka) + (2 * (b = (b * Ka - c) % (2 * Math.PI)) % (2 * Math.PI) - b) * (0 > h ? 0 : 1 < h ? 1 : h)) / Ka,
  Wa = (c, b, h, k) => Sa(c + (0 > b - c ? -1 : 1) * Oa(0, Pa(b - c) ** 0.9 - h) * k * 2, b, k / 7),
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
    b = La,
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
  u = (c, b, h) => c.map(k => cb(k, b, h)),
  db = (c, b = 0) =>
    Na(c, h => {
      const k = Math.cos(2 * Math.PI * h / c);
      return { x: Math.sin(2 * Math.PI * h / c), y: 0, z: 0.01 > (0 > k ? -k : k) ? k : 0 > k ? k - b : k + b };
    }),
  eb = (c, b, h) =>
    c.map((k, m, { length: p }) => bb([k, b[p - m - 1], b[p - (m + 1) % p - 1], c[(m + 1) % p]], c.A, h)),
  H = (
    c,
    b,
    h = 0,
    k,
  ) => (c = c ? db(c, k) : ya,
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
        let z = p.at(-1), t = Ya(c, z) - c.w;
        for (const v of p) {
          h = Ya(c, v) - c.w,
            8e-5 > t && m.push(z),
            -0.00008 < t && k.push(z),
            (8e-5 < t && -0.00008 > h || -0.00008 > t && 8e-5 < h)
            && (t /= h - t,
              z = { x: z.x + (z.x - v.x) * t, y: z.y + (z.y - v.y) * t, z: z.z + (z.z - v.z) * t },
              k.push(z),
              m.push(z)),
            z = v,
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
        let { o: z, m: t } = ib(p, w);
        z || t || (0 < h * Ya(p, b) ? z = w : t = w);
        z && (p.o ? m(p.o, z) : k.push(z));
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
  I = (c, ...b) => pb(qb(pb(ob(c)), ...b)),
  P = c => {
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
        const w = m.map(({ x: z, y: t, z: v }) => ({ x: z, y: t, z: v }));
        return bb(p ? w.reverse() : w, m.A, m.D);
      });
  },
  R = (c, b, h) => c + (b - c) * Ra(1 - Math.exp(-h * d)),
  rb = () => {
    const c = Ta(l[12].g, l[13].g);
    ja = Sa(R(ja, 0, 1), Ua(ja + 60 * d), l[5].g - l[6].i);
    fa = Sa(R(fa, 0, 5), Ua(fa + 56 * d), c);
    ia = Sa(R(ia, 0, 4), Ua(ia + 48 * d), c);
    na = R(na, l[9].i, 0.2 + 0.3 * Pa(2 * l[9].i - 1));
    ma = R(ma, ka ? ma + (-9 - ma) * Ra(1.5 * d) : Ra(a / 3), 1);
    qa && a > qa && (qa = 0, h4.innerHTML = "");
    l[0].l && 0.8 < l[0].g && (13 > aa
      ? (1 / 0 > qa && (qa = a + 3, h4.innerHTML = "Not leaving now, there are souls to catch!"), l[0].l = 0)
      : ka
        || (1 / 0 > qa && (qa = a + 1 / 0, h4.innerHTML = "Well done. They will be punished.<br>Thanks for playing"),
          ka = 1));
    for (const b of f) {
      b.h && (b.j = b.h());
    }
    for (const b of l) {
      b.h();
    }
    for (const b of za) {
      b.h();
    }
  },
  sb = () => {
    h3.innerHTML = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ")[aa = za.reduce((c, { l: b }) => c + b, 0)];
  },
  tb = () => {
    localStorage.DanteSP22 = JSON.stringify([l.map(({ l: c }) => c), za.map(({ l: c }) => c), ea, a, na]);
  },
  S = (c, b = 1) => {
    const h = va;
    b = { j: r, F: f.length, H: b, s: [] };
    return f.push(va = b), c(b), va = h, b;
  },
  T = (c, b = r, h) => va.s.push(...u(c, b, h)),
  ub = c => {
    const b = va,
      h = l.length,
      k = {
        l: 0,
        g: 0,
        i: 0,
        u: b,
        h() {
          const m = k.l, p = k.g, w = k.i, z = b.j.multiply(c);
          k.I = z;
          2.9 > Xa(z.transformPoint()) && Aa[5] && (0.3 > p || 0.7 < p)
            && (k.l = m ? 0 : 1, h && 1 / 0 > qa && (qa = a + 1, h4.innerHTML = "* click *"), ea = h, tb());
          k.g = R(p, m, 4);
          k.i = R(w, m, 1);
          k.j = z.rotate(60 * k.g - 30, 0).translateSelf(0, 1);
        },
      };
    l.push(k);
    T(H(5), c.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
    T(H(5), c.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), V(0.4, 0.5, 0.5));
    T(H(), c.translate(0, -0.4).scale(0.5, 0.1, 0.5), V(0.5, 0.5, 0.4));
  },
  vb = (c, ...b) => {
    let h = -1, k = 0, m = 0, p = 0, w = 0, z = 0, t = 1, v = 3;
    const C = {
        l: 0,
        h() {
          if (!C.l) {
            let sa, M, K, A, N, x, O = 1, Q = 1 / 0, W;
            for (const U of F) {
              var { x: y, z: J, w: L } = U;
              J = (y = Math.hypot(g - y, q - J)) - L;
              W ||= y < L;
              0 < J && Q > J && (Q = J, e = U);
              var ha = y / L;
              O = O < ha ? O : ha;
            }
            W
              || ({ x: sa, z: M, w: K } = e,
                A = g - sa,
                N = q - M,
                x = Math.hypot(A, N),
                ba = Math.atan2(-N, A),
                t && (m = (Math.random() - 0.5) * Math.PI / 2, v = Oa(1, v / (1 + Math.random()))),
                ba += m,
                h = -Math.cos(ba),
                k = Math.sin(ba),
                0.1 < x && (x = (x < K ? x : K) / (x || 1), g = A * x + sa, q = N * x + M));
            t = W;
            v = R(v, 3 + 6 * (1 - O), 3 + O);
            B = R(B, g = R(g, g + h, v), v);
            D = R(D, q = R(q, q + k, v), v);
            p = Va(p, Math.atan2(B - w, D - z) / Ka - 180, 3 * d);
            w = B;
            z = D;
            var ba = (C.j = E.j.multiply(c.translate(B, 0, D).rotateSelf(0, p, 7 * Math.sin(1.7 * a))))
              .transformPoint();
            1.5 > Xa(ba)
              && (C.l = 1,
                ha = [
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
                ][aa] || "Catched a \"crypto bro\".<br>\"Web3\" is all scam, lies and grift",
                1 / 0
                  > qa && (qa = a + (aa && 12 > aa ? 5 : 7), h4.innerHTML = ha),
                sb(),
                tb());
          }
          C.l
            && (C.j = f[2].j.translate(
              G % 4 * 1.2 - 1.7 + Math.sin(a + G) / 7,
              -2,
              1.7 * (G / 4 | 0) - 5.5 + Pa(G % 4 - 2) + Math.cos(a / 1.5 + G) / 6,
            ));
        },
      },
      E = va,
      G = za.length,
      F = b.map(([y, J, L]) => ({ x: y, z: J, w: L }));
    let e = F[0], { x: g, z: q } = e, B = g, D = q;
    za.push(C);
  },
  wb = (c, b, h, k) => {
    let m = 0, p = 0, w = 0, z = 1 / 0, t = -1 / 0, v = 1 / 0, C = -1 / 0, E = 1 / 0, G = -1 / 0;
    const F = 1.1 * (h - b),
      e = (new DOMMatrix(ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, b, h))).multiplySelf(c).invertSelf();
    return b = Na(
      8,
      g => (g = e.transformPoint({ x: 4 & g ? 1 : -1, y: 2 & g ? 1 : -1, z: 1 & g ? 1 : -1 }),
        m -= g.x = (F * g.x | 0) / F / g.w,
        p -= g.y = (F * g.y | 0) / F / g.w,
        w -= g.z = (F * g.z | 0) / F / g.w,
        g),
    ),
      h = r.rotate(298, 139).translateSelf(m / 8, p / 8, w / 8),
      cb(b, h).map(({ x: g, y: q, z: B }) => {
        z = z < g ? z : g;
        t = g < t ? t : g;
        v = v < q ? v : q;
        C = q < C ? C : q;
        E = E < B ? E : B;
        G = B < G ? G : B;
      }),
      E *= 0 > E ? k : 1 / k,
      G *= 0 < G ? k : 1 / k,
      r.scale(2 / (t - z), 2 / (C - v), 2 / (E - G)).translateSelf((t + z) / -2, (C + v) / -2, (E + G) / 2)
        .multiplySelf(h);
  },
  zb = () => {
    let c = !0, b, h, k, m, p, w, z, t, v, C, E, G;
    const F = () => {
        ra || !c ? xb.disconnect() : xb.connect(yb.destination);
        b4.innerHTML = "music: " + c;
      },
      e = (q = !1) => {
        if (ra !== q) {
          setTimeout(g);
          ra = q;
          try {
            q
              ? (document.exitFullscreen().catch(() => {
              }),
                document.exitPointerLock())
              : xb.start();
          } catch {
          }
          wa = 0;
          document.body.className = q ? "l m" : "l";
          F();
          sb();
        }
      },
      g = () => {
        hC.width = innerWidth;
        hC.height = innerHeight;
        Aa.length = oa = pa = 0;
        m = t = void 0;
        document.hidden && e(!0);
      };
    oncontextmenu = () => !1;
    b3.onclick = () => {
      confirm("Restart game?") && (localStorage.DanteSP22 = "", location.reload());
    };
    b1.onclick = () => {
      document.body.requestFullscreen();
      e();
    };
    b2.onclick = () => {
      document.body.requestFullscreen();
      e();
      wa = 1;
    };
    b4.onclick = () => {
      c = !c;
      F();
    };
    b5.onclick = () => e(!0);
    onclick = q => {
      G = 1;
      ra || (q.target === hC && (Aa[5] = !0), wa && hC.requestPointerLock());
    };
    onkeyup = onkeydown = ({ code: q, target: B, type: D, repeat: y }) => {
      y || ((y = !!D[5] && B === document.body) && ("Escape" === q || "Enter" === q && ra)
        ? ra && !G || e(!ra)
        : 5
            === (D = {
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
            }[q])
        ? y && (Aa[D] = 1)
        : Aa[D] = y);
    };
    onmousemove = ({ movementX: q, movementY: B }) => {
      wa && (q || B) && (Ja += 0.1 * q, Ia += 0.1 * B);
    };
    hC.ontouchstart = q => {
      if (!ra) {
        for (let { pageX: B, pageY: D, identifier: y } of q.changedTouches) {
          wa && B > hC.clientWidth / 2
            ? void 0 === t && (t = y, w = B, z = D, v = 0, C = Ja, E = Ia)
            : void 0 === m && (m = y, h = B, k = D, p = 0);
        }
        b = ca;
      }
    };
    hC.ontouchmove = q => {
      if (!ra) {
        for (let { pageX: y, pageY: J, identifier: L } of q.changedTouches) {
          var B, D;
          t === L && (Ja = C + (y - w) / 2.3, Ia = E + (J - z) / 2.3, v = 1);
          m === L
            && (0.4 < (D = (B = 0 > (L = (h - y) / 20) ? -1 : 1) * L)
              && (p = 1, oa = B * D ** 1.5, 1.5 < D && (h = y + 20 * B)),
              0.4 < (D = (B = 0 > (L = (k - J) / 20) ? -1 : 1) * L)
              && (p = 1, pa = B * D ** 1.5, 1.5 < D && (k = J + 20 * B)));
        }
      }
    };
    hC.ontouchend = q => {
      let B;
      q.preventDefault();
      for (const D of q.changedTouches) {
        D.identifier === t
          ? (t = void 0, v || (B = 1), v = 0)
          : D.identifier === m
          ? (m = void 0, pa = oa = 0, p || (B = 1), p = 0)
          : B = 1;
      }
      B && q.target === hC && b && 0.02 < (q = ca - b) && 0.7 > q && (Aa[5] = !0);
    };
    (document.onvisibilitychange = onblur = onresize = g)();
    e(!0);
  },
  Ab = () => {
    let c = 0, b = 0, h = 0, k = 0, m = 0, p = 1, w = !1, z, t, v, C, E, G, F, e, g, q, B, D;
    const y = { x: 0, y: 0, z: 0 },
      J = new Int32Array(256),
      L = new Uint8Array(65536),
      ha = M => {
        var { u: K, I: A } = l[ea], { x: A, y: N, z: x } = A.transformPoint({ x: 0, y: 8, z: -3 });
        n.x = y.x = A;
        n.y = y.y = F = N;
        n.z = y.z = x;
        M && (Da = q = A, Ga = (B = N) + 13, Ha = (D = x) + -18);
        c = b = K.F || 1;
        t =
          G =
          E =
          v =
          C =
            0;
        p = 1;
      },
      ba = () => {
        for (let M = 32; 128 > M; M += 2) {
          let K = 0, A = 0, N = 0, x = 0;
          const O = 512 * M;
          for (let Q = 1 & M; 128 > Q; Q += 2) {
            const W = O + 4 * Q;
            let U = O + 4 * (127 - Q);
            const Z = L[W] / 255, da = L[1 + U] / 255, la = 1 - Pa(Q / 63.5 - 1);
            10 < Q && 118 > Q && (K = Oa(K, Oa(Z * la, Z * L[U] / 255)), A = Oa(A, Oa(da * la, da * L[1 + W] / 255)));
            (54 > Q || 74 < Q) && 1e-3 < (U = (1 - la) * (da < Z ? Z : da) / 3)
              && (64 > Q && U > N ? N = U : 64 < Q && U > x && (x = U));
          }
          Pa(x - N) > (0 > e ? -e : e) && (e = x - N);
          Pa(A - K) > (0 > g ? -g : g) && (g = A - K);
        }
      },
      sa = () => {
        let M = 0, K = 0, A = 0, N = 0;
        J.fill(0);
        for (let O = 0; 31 > O; ++O) {
          let Q = 0;
          const W = 512 * O;
          for (let U = 0; 128 > U; U++) {
            var x = W + 4 * U;
            let Z = (L[x] + L[1 + x]) / 255;
            x = L[2 + x];
            14 < U && 114 > U && (Q += Z);
            x && Z && (Z = J[x] + 1, J[x] = Z, M > Z || (M = Z, K = x));
          }
          3 > Q && 5 < O && (N += O / 32);
          3 < Q && (7 < O && (A += O / 15), t = 1);
        }
        K && (t = 1);
        p ? K && (p = 0, b = K) : b = K || c;
        c = K;
        v = R(v, t ? 6.5 : 8, 4);
        y.y += A / 41 - (t ? 1 : v) * N / 41 * v * d;
      };
    xa = () => {
      let M = oa + (Aa[0] ? 1 : 0) + (Aa[2] ? -1 : 0), K = pa + (Aa[1] ? 1 : 0) + (Aa[3] ? -1 : 0);
      if (N = navigator.getGamepads()[0]) {
        const Z = N.buttons;
        var A = N.axes;
        (N = (x = da => Z[da]?.pressed || 0 < Z[da]?.value)(1) || x(3) || x(2) || x(0)) !== w && (w = N) && (Aa[5] = 1);
        M += (0.2 < Pa(-A[0]) ? -A[0] : 0) + (x(14) ? 1 : 0) + (x(15) ? -1 : 0);
        K += (0.2 < Pa(-A[1]) ? -A[1] : 0) + (x(12) ? 1 : 0) + (x(13) ? -1 : 0);
        wa && (0.3 < Pa(A[2]) && (Ja += 80 * A[2] * d), 0.3 < Pa(A[3]) && (Ia += 80 * A[3] * d));
      }
      0.05 > (0 > K ? -K : K) && (K = 0);
      0.05 > (0 > M ? -M : M) && (M = 0);
      var N = Math.atan2(K, M), x = Ra(Math.hypot(K, M));
      A =
        (M = x * Math.cos(N),
          K = x * Math.sin(N),
          e = 0,
          g = 0,
          t = 0,
          Y.fa7(),
          Y.r9r(0, 0, 128, 128, 6408, 5121, L),
          Y.iay(36008, [36064, 36096]),
          Y.iay(36009, [36064, 36096]),
          NO_INLINE(ba)(),
          NO_INLINE(sa)(),
          Ra(1 - 5 * Oa(0 > e ? -e : e, 0 > g ? -g : g)));
      A =
        (b || (e += E * A * d, g += G * A * d),
          E = R(E, 0, t ? 8 : 4),
          G = R(G, 0, t ? 8 : 4),
          C = R(C, t ? (M || K ? t ? 7 : 4 : 0) * A : 0, t ? 0.1 < A ? 10 : M || K ? 5 : 7 : 1),
          wa ? Ja * Ka : Math.PI);
      var O = Math.sin(A) * C * d;
      A = Math.cos(A) * C * d;
      A =
        (e -= M * A - K * O,
          g -= M * O + K * A,
          (A = (O = 1 === f[b].H && f[b].j || r).inverse()).m41 = 0,
          A.m42 = 0,
          A.m43 = 0,
          { x: e, z: g } = A.transformPoint({ x: e, z: g, w: 0 }),
          y.x += e,
          y.z += g,
          b !== z && (z = b, { x: A, y: Q, z: W } = O.inverse().transformPoint(n), y.x = A, y.y = Q, y.z = W),
          n.x);
      var Q = n.z, { x: W, y: O, z: U } = O.transformPoint(y);
      n.x = W;
      n.y = O;
      n.z = U;
      b && (E = (W - A) / d, G = (U - Q) / d);
      (M || K) && (h = 90 - N / Ka);
      k = Va(k, h, 8 * d);
      m += (x - m) * Ra(10 * d);
      F = Sa(R(F, O, 2), O, 8 * Pa(F - O));
      q = Wa(q, W, 0.5, d);
      B = Wa(B, O, 2, d);
      D = Wa(D, U, 0.5, d);
      wa
        ? (Da = R(Da, W, 666 * p + 18), Ga = R(Ga, F + 1.5, 666 * p + 18), Ha = R(Ha, U, 666 * p + 18))
        : (Da = Wa(Da, q, 1, 2 * d),
          Ga = Wa(Ga, B + 13 + 15 * p, 4, 2 * d),
          Ha = Wa(Ha, D + -18, 1, 2 * d),
          A = Ha - D,
          1 < (0 > A ? -A : A)
          && (Q = Da - q, Ja = 270 + Math.atan2(A, Q) / Ka, Ia = 90 - Math.atan2(Math.hypot(A, Q), Ga - B) / Ka));
      Ia = Oa(87 > Ia ? Ia : 87, -87);
      Ja = Ua(Ja);
      1 === b && (l[9].l = -15 > n.x && 0 > n.z ? 1 : 0);
      (-25 > n.x || 109 > n.z ? -25 : -9) > n.y && ha();
      f[37].j = r.translate(n.x, F, n.z).rotateSelf(0, k);
      [38, 39].map((Z, da) => {
        f[Z].j = f[37].j.translate(0, m * Ra(0.45 * Math.sin(9.1 * a + Math.PI * (da - 1) - Math.PI / 2))).rotateSelf(
          m * Math.sin(9.1 * a + Math.PI * (da - 1)) * 0.25 / Ka,
          0,
        );
      });
    };
    ha(1);
  },
  Bb = (c, b = 35633) => (b = Y.c6x(b), Y.s3c(b, c), Y.c6a(b), b),
  Gb = (c, b) => {
    const h = {}, k = Y.c1h();
    return Y.abz(k, c), Y.abz(k, Bb(b, 35632)), Y.l8l(k), m => m ? h[m] || (h[m] = Y.gan(k, m)) : Y.u7y(k);
  },
  Hb = (c, b, h = 42) => {
    if (ra) {
      h = r.rotate(0, 40 * Math.sin(ca) - 70);
      for (var k of [37, 38, 39]) {
        $a(h, Ma, k - 1);
      }
      Y.uae(c, !1, Ma);
      Y.d97(4, f[39].G - f[37].v, 5123, 2 * f[37].v);
    } else {
      for (k = 0; f.length > k; ++k) {
        const { H: m, F: p, j: w } = f[k];
        m && $a(w, Ma, p - 1);
      }
      Y.uae(c, !1, Ma);
      Y.d97(4, (b ? f[39].G : f[37].v) - 3, 5123, 6);
      for (b = 0; 13 > b; ++b) {
        $a(za[b].j, Ma, b);
      }
      for (b = 0; l.length > b; ++b) {
        const { j: m, g: p } = l[b];
        $a(m, Ma, b + 13);
        Ma[16 * (b + 13) + 15] = 1 - p;
      }
      Y.uae(c, !1, Ma);
      Y.das(4, f[h].G - f[h].v, 5123, 2 * f[h].v, 13);
      Y.das(4, f[40].G - f[40].v, 5123, 2 * f[40].v, l.length);
    }
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
          for (let z = w, t = p.getChannelData(w); 10725888 > z; z += 2) {
            t[z >> 1] = m[z] / 65536;
          }
        }
        xb.buffer = p;
        xb.loop = !0;
        Ib(c);
      },
      k = () => {
        let p, w = 0, [z, t, v, C, E, G, F, e, g, q, B, D, y, J, L, ha, ba, sa, M, K, A] = Ca[b];
        q = q * q * 4;
        for (const W of [5513, 4562, 3891]) {
          const U = [];
          let Z = 0, da = 0, la, Qa, Cb;
          const Ba = new Int32Array(768 * W), Nb = 2 ** (D - 9) / W, Ob = Math.PI * 2 ** (ba - 8) / W, mb = M * W & -2;
          for (let gb = 0; 11 >= gb; ++gb) {
            for (
              let hb = 0, Db = +"000001234556112341234556011111111112011111111112000001111112"[12 * b + gb];
              32 > hb;
              ++hb
            ) {
              const Eb = (32 * gb + hb) * W;
              for (var N = 0; 4 > N; ++N) {
                if (la = 0, Db && (la = A[Db - 1].charCodeAt(hb + 32 * N) - 40, la += 0 < la ? 106 : 0), la) {
                  var x;
                  if (!(x = U[la])) {
                    x = la;
                    let X = void 0, ta = void 0;
                    var O = W, Q = la;
                    let Pb = 0, Qb = 0;
                    const Rb = 2 > b ? Lb : Jb, Sb = 2 > b ? 1 > b ? Kb : Mb : Jb, Fb = new Int32Array(e + g + q);
                    for (let Ea = 0, nb = 0; e + g + q > Ea; ++Ea, ++nb) {
                      let Fa = 1;
                      e > Ea ? Fa = Ea / e : e + g > Ea || (Fa = (1 - (Fa = (Ea - e - g) / q)) * 3 ** (-B / 16 * Fa));
                      0 > nb
                        || (nb -= 4 * O,
                          ta = 396e-5 * 2 ** ((Q + t - 256) / 12),
                          X = 396e-5 * 2 ** ((Q + E - 256) / 12) * (1 + (b ? 0 : 0.007200)));
                      Fb[Ea] = 80
                          * (Rb(Pb += ta * Fa ** (v / 32)) * z + Sb(Qb += X * Fa ** (G / 32)) * C
                            + (F ? (2 * Math.random() - 1) * F : 0))
                          * Fa | 0;
                    }
                    x = U[x] = Fb;
                  }
                  for (let X = 0, ta = 2 * Eb; x.length > X; ++X, ta += 2) {
                    Ba[ta] += x[X];
                  }
                }
              }
              for (let X, ta = 0; W > ta; ++ta) {
                N = 0,
                  x = 2 * (Eb + ta),
                  ((X = Ba[x]) || Cb)
                  && (Qa = 308e-5 * y,
                    1 !== b && 4 !== b || (Qa *= Math.sin(Nb * x * Math.PI * 2) * K / 512 + 0.5),
                    Qa = 1.5 * Math.sin(Qa),
                    Z += Qa * da,
                    p = (1 - J / 255) * (X - da) - Z,
                    da += Qa * p,
                    X = 4 === b ? da : 3 === b ? p : Z,
                    b || (X = 1 > (X *= 22e-5) ? -1 < X ? Math.sin(X / 4 * Math.PI * 2) : -1 : 1, X /= 22e-5),
                    X *= L / 32,
                    Cb = 1e-5 < X * X,
                    p = Math.sin(Ob * x) * ha / 512 + 0.5,
                    N = X * (1 - p),
                    X *= p),
                  x < mb || (N += Ba[1 + x - mb]
                    * sa / 255,
                    X += Ba[x - mb] * sa / 255),
                  m[w + x] += Ba[x] = N,
                  ++x,
                  m[w + x] += Ba[x] = X;
              }
            }
          }
          w += Ba.length;
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
  V = NO_INLINE((c, b, h, k = 0) => 255 * k << 24 | 255 * h << 16 | 255 * b << 8 | 255 * c),
  yb = new AudioContext(),
  xb = yb.createBufferSource(),
  Y = hC.getContext("webgl2", { powerPreference: "high-performance" });
for (const c in Y) {
  Y[c[0] + [...c].reduce((b, h, k) => (b * k + h.charCodeAt(0)) % 434, 0).toString(36)] = Y[c];
}
Ib(() => {
  let c = 0;
  const b = () => {
      if (2 == ++c) {
        const k = g => {
            Y.f1s();
            requestAnimationFrame(k);
            q = (g - (ua || g)) / 1e3;
            ra ? (d = 0, Aa[5] = 0) : d = 0.066 < q ? 0.066 : q;
            a += d;
            ca += q;
            ua = g;
            0 < d && (rb(), xa(), Aa[5] = 0);
            var q = ra
              ? r.rotate(-20, -90).invertSelf().translateSelf(4.5, -2, -3.2 + Ra(hC.clientWidth / 1e3))
              : r.rotate(-Ia, -Ja, -0).invertSelf().translateSelf(-Da, -Ga, -Ha);
            0 < d
              && (G(),
                Y.b6o(36160, w),
                Y.v5y(0, 0, 128, 128),
                Y.c4s(16640),
                Y.cbf(!0, !1, !0, !1),
                Y.uae(G("b"), !1, $a(r.rotate(0, 180).invertSelf().translateSelf(-n.x, -n.y, 0.3 - n.z))),
                Hb(G("c"), 0, 41),
                Y.c4s(256),
                Y.cbf(!1, !0, !0, !1),
                Y.uae(G("b"), !1, $a(r.translate(-n.x, -n.y, -n.z - 0.3))),
                Hb(G("c"), 0, 41),
                Y.f1s());
            C();
            Y.b6o(36160, p);
            Y.v5y(0, 0, 2048, 2048);
            e[0](wb(q, 0.3, 55, 10));
            e[1](wb(q, 55, 177, 11));
            F();
            Y.b6o(36160, null);
            Y.v5y(0, 0, Y.drawingBufferWidth, Y.drawingBufferHeight);
            Y.cbf(!0, !0, !0, !0);
            Y.c4s(16640);
            e[0]();
            e[1]();
            Y.uae(F("a"), !1, ab(hC.clientHeight / hC.clientWidth * 1.732051, 1.732051, 0.3, 177));
            Y.uae(F("b"), !1, $a(q));
            Y.ubu(F("k"), Da, Ga, Ha);
            Hb(F("c"), !wa);
            E();
            Y.ubu(E("j"), Y.drawingBufferWidth, Y.drawingBufferHeight, ca);
            ra ? Y.ubu(E("k"), 0, 0, 0) : Y.ubu(E("k"), Da, Ga, Ha);
            Y.uae(E("b"), !1, $a(q.inverse()));
            Y.d97(4, 3, 5123, 0);
            Y.b6o(36160, w);
            Y.f1s();
          },
          m = h,
          p = Y.c5w(),
          w = Y.c5w(),
          z = Y.c3z(),
          t = Y.c25(),
          v = Bb(
            "#version 300 es\nlayout(location=0)in vec4 f;layout(location=1)in vec3 e;layout(location=2)in vec4 d;out vec4 o,m,n,l;uniform mat4 a,b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];l=mix(d,vec4(.7,1,.2,0),d.w>0.?0.:1.-i[3][3]),i[3][3]=1.,n=f,m=i*vec4(f.xyz,1),gl_Position=a*b*m,m.w=f.w,o=i*vec4(e,0);}",
          ),
          C = Gb(
            Bb(
              "#version 300 es\nin vec4 f;uniform mat4 b,c[39];void main(){mat4 i=c[int(abs(f.w))+gl_InstanceID-1];i[3][3]=1.,gl_Position=b*i*vec4(f.xyz,1);}",
            ),
            "#version 300 es\nvoid main(){}",
          ),
          E = Gb(
            Bb("#version 300 es\nin vec4 f;void main(){gl_Position=vec4(f.xy,1,1);}"),
            "#version 300 es\nprecision highp float;uniform vec3 j,k;uniform mat4 b;uniform highp sampler2D q;out vec4 O;void main(){vec2 t=gl_FragCoord.xy/j.xy*2.-1.;vec3 e=(normalize(b*vec4(t.x*-(j.x/j.y),-t.y,1.73205,0.))).xyz;float i=(-32.-k.y)/e.y,o=1.-clamp(abs(i/9999.),0.,1.);if(O=vec4(0,0,0,1),o>.01){if(i>0.){float o=cos(j.z/30.),i=sin(j.z/30.);e.xz*=mat2(o,i,-i,o);vec3 t=abs(e);O.xyz=vec3(dot(vec2(texture(q,e.xy).z,texture(q,e.yz*2.).z),t.zx)*t.y);}else e=k+e*i,O.x=(o*=.9-texture(q,e.xz/150.+vec2(sin(e.z/35.+j.z),cos(e.x/25.+j.z))/80.).y),O.y=o*o*o;}}",
          ),
          G = Gb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m;uniform mat4 b;out vec4 O;void main(){vec4 a=b*vec4(m.xyz,1);float r=1.-min(abs(a.z/a.w),1.);O=vec4(vec2(r*(gl_FragCoord.y>31.?1.:abs(o.y))),r>0.?m.w/255.:0.,1);}",
          ),
          F = Gb(
            v,
            "#version 300 es\nprecision highp float;in vec4 o,m,n,l;uniform vec3 k;uniform mat4 b,i,j;uniform highp sampler2DShadow g,h;uniform highp sampler2D q;out vec4 O;void main(){vec4 c=vec4(m.xyz,1);vec3 e=normalize(o.xyz),s=l.w*(texture(q,n.yz*.035)*e.x+texture(q,n.xz*.035)*e.y+texture(q,n.xy*.035)*e.z).xyz;e=normalize(e+s*.5);float x=dot(e,vec3(-.656059,.666369,-.35431468)),t=1.,v=abs((b*c).z);vec4 r=(v<55.?i:j)*c;if(r=r/r.w*.5+.5,r.z<1.){t=0.;for(float e=-1.;e<=1.;++e)for(float a=-1.;a<=1.;++a){vec3 x=vec3(r.xy+vec2(e,a)/2048.,r.z-.00017439);t+=v<55.?texture(g,x):texture(h,x);}t/=9.;}vec3 a=l.xyz*(1.-s.x);O=vec4(vec3(.09,.05,.1)*a+a*(max(0.,x)*.5+a*x*x*vec3(.5,.45,.3))*(t*.7+.3)+a*max(dot(e,vec3(.09901475,-.99014753,-.09901475)),0.)*max(0.,2.-m.y)*vec3(.04285714,.00714286,0)+vec3(.6,.6,.5)*pow(max(0.,dot(normalize(m.xyz-k),reflect(vec3(-.656059,.666369,-.35431468),e))),35.)*t,1);}",
          ),
          e =
            (G(),
              Y.uae(G("a"), !1, ab(1.4, 0.59, 1e-4, 1)),
              E(),
              Y.ubh(E("q"), 3),
              F(),
              Y.ubh(F("q"), 3),
              Na(2, g => {
                const q = new Float32Array(16), B = Y.c25(), D = F(g ? "j" : "i");
                return Y.ubh(F(g ? "h" : "g"), g),
                  Y.b6o(36160, p),
                  Y.d45([0]),
                  Y.r9l(0),
                  Y.a4v(33984 + g),
                  Y.b9j(3553, B),
                  Y.t60(3553, 0, 33190, 2048, 2048, 0, 6402, 5125, null),
                  Y.t2z(3553, 10241, 9729),
                  Y.t2z(3553, 10240, 9729),
                  Y.t2z(3553, 34893, 515),
                  Y.t2z(3553, 34892, 34894),
                  Y.t2z(3553, 10243, 33071),
                  Y.t2z(3553, 10242, 33071),
                  y => {
                    y
                      ? ($a(y, q), Y.uae(C("b"), !1, q), Y.fas(36160, 36096, 3553, B, 0), Y.c4s(256), Hb(C("c"), !wa))
                      : Y.uae(D, !1, q);
                  };
              }));
        Y.e8z(2929);
        Y.e8z(2884);
        Y.c70(1);
        Y.c7a(1029);
        Y.d4n(515);
        Y.c5t(0, 0, 0, 1);
        Y.b6o(36160, w);
        Y.bb1(36161, z);
        Y.r4v(36161, 33189, 128, 128);
        Y.f8w(36160, 36096, 36161, z);
        Y.a4v(33987);
        Y.b9j(3553, t);
        Y.fas(36160, 36064, 3553, t, 0);
        Y.t60(3553, 0, 6407, 128, 128, 0, 6407, 5121, null);
        Y.a4v(33987);
        Y.b9j(3553, Y.c25());
        Y.t60(3553, 0, 6408, 1024, 1024, 0, 6408, 5121, m);
        Y.gbn(3553);
        Y.t2z(3553, 10241, 9987);
        Y.t2z(3553, 10240, 9729);
        try {
          const [g, q, B, D, y] = JSON.parse(localStorage.DanteSP22);
          l.map((J, L) => J.g = J.i = J.l = L ? 0 | g[L] : 0);
          za.map((J, L) => J.l = 0 | q[L]);
          ea = B;
          a = D;
          na = y;
        } catch {
        }
        ma = 0 > ea ? 0 : 1 < ea ? 1 : ea;
        rb();
        NO_INLINE(Ab)();
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
        v = y => {
          let { x: J, y: L, z: ha } = E[y], ba = (D[0] = J, D[1] = L, D[2] = ha, y = "" + (E.D ? B : q), g.get(y));
          return void 0 !== ba
            ? (J = 3 * ba, e[J] = (e[J++] + q[5]) / 2, e[J] = (e[J++] + q[6]) / 2, e[J] = (e[J] + q[7]) / 2)
            : (g.set(y, ba = g.size), G.push(J, L, ha, D[3]), F.push(q[4]), e.push(q[5], q[6], q[7])),
            ba;
        };
      let C = 0, E;
      const G = [],
        F = [],
        e = [],
        g = new Map(),
        q = new Int32Array(8),
        B = new Int32Array(q.buffer, 0, 5),
        D = new Float32Array(q.buffer);
      for (const y of f) {
        for (E of (D[3] = 40 === y.F ? -13 : y.H && y.F, y.s)) {
          const { x: J, y: L, z: ha } = Za(E);
          q[4] = 0 | E.A;
          q[5] = 32767 * J;
          q[6] = 32767 * L;
          q[7] = 32767 * ha;
          for (let ba = 2, sa = v(0), M = v(1); E.length > ba; ++ba) {
            t.push(sa, M, M = v(ba));
          }
        }
        y.s = null;
        y.v = C;
        y.G = C = t.length;
      }
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Float32Array(G), 35044);
      Y.v7s(0, 4, 5126, !1, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Int16Array(e), 35044);
      Y.v7s(1, 3, 5122, !0, 0, 0);
      Y.b11(34962, Y.c1b());
      Y.b2v(34962, new Uint32Array(F), 35044);
      Y.v7s(2, 4, 5121, !0, 0, 0);
      Y.b11(34963, Y.c1b());
      Y.b2v(34963, new Uint16Array(t), 35044);
      Y.e3x(0);
      Y.e3x(1);
      Y.e3x(2);
      Ib(b);
    });
    let k;
    const m = (t, v, C) =>
        r.translate(t + Math.sin(a + 2) / 5, v + Math.sin(0.8 * a) / 3, C).rotateSelf(
          2 * Math.sin(a),
          Math.sin(0.7 * a),
          Math.sin(0.9 * a),
        ),
      p = (() => {
        const t = Na(
            11,
            C => r.translate(Math.sin(C / 10 * Math.PI), C / 10).rotate(+C).scale(1.0001 - C / 10, 0, 1 - C / 10),
          ),
          v = db(18);
        return Na(10, C => eb(cb(v, t[C]).reverse(), cb(v, t[C + 1]), 1)).flat();
      })(),
      w = P(
        I(
          u(H(20, 1, 1.15, 1), r.translate(0, -3).scale(3.5, 1, 3.5), V(0.7, 0.4, 0.25, 0.7)),
          u(H(20, 1, 1.3, 1), r.translate(0, -2.5).scale(2.6, 1, 3), V(0.7, 0.4, 0.25, 0.2)),
          u(H(), r.translate(4, -1.2).scale3d(2), V(0.7, 0.4, 0.25, 0.3)),
        ),
      ),
      z = P(
        I(
          u(H(), r.translate(0, -8).scale(6, 15, 2.2)),
          u(H(), r.translate(0, -14.1).scale(4, 13, 4)),
          u(H(20, 1), r.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      );
    S(() => {
      T([ya.slice(1)], r.translate(-2).scale3d(3).rotate(90, 0));
    }, 0);
    S(() => {
      const t = (e, g, q) =>
          S(B => {
            B.h = () => r.translate(v() * Math.sin(3 * e + a * e) * g);
            ya.map(({ x: D, z: y }) => {
              T(H(11, 1), r.translate(4 * D, 4, q + 4 * y).scale(0.8, 3, 0.8), V(0.5, 0.3, 0.7, 0.6));
              T(H(), r.translate(4 * D, 7, q + 4 * y).scale(1, 0.3), V(0.5, 0.5, 0.5, 0.3));
            });
            T(P(I(
              u(H(), r.translate(0, 0, q).scale(5, 1, 5), V(0.8, 0.8, 0.8, 0.3)),
              ...[-1, 1].map(D =>
                u(H(), r.translate(5 * D, 0.2, q).rotate(0, 0, -30 * D).scale(4, 1, 2), V(0.8, 0.8, 0.8, 0.3))
              ),
            )));
            T(H(), r.translate(0, -3, q).scale(8, 2, 8), V(0.4, 0.4, 0.4, 0.3));
          }),
        v = () => {
          var e = l[2].i, g = 1 - l[4].i;
          return e < g ? e : g;
        },
        C = (S(e => {
          e.h = () => m(-12, 4.2, 40 * ma - 66);
          T(w);
          ub(r.translate(0, -3, 4));
        }),
          Na(7, e => u(H(6, 1), r.translate(4 * (e / 6 - 0.5), 3).scale(0.2, 3, 0.2), V(0.3, 0.3, 0.38))).flat()),
        E = (vb(r.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]),
          vb(
            r.translate(0, 2.8),
            [5, 10, 3],
            [-5, 10, 3],
            ...db(18).map(({ x: e, z: g }) => [7 * e, 10 * g, 4.5 - 2 * (0 > e ? -e : e)]),
          ),
          T(H(), r.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), V(0.8, 0.8, 0.8, 0.2)),
          ya.map(({ x: e, z: g }) => T(H(6), r.translate(3 * e, 3, 15 * g).scale(0.7, 4, 0.7), V(0.6, 0.3, 0.3, 0.4))),
          [-23, 22].map(e => T(H(), r.translate(0, 0, e).scale(3, 1, 8), V(0.9, 0.9, 0.9, 0.2))),
          [-15, 15].map((e, g) => {
            T(H(), r.translate(0, 6.3, e).scale(4, 0.3, 1), V(0.3, 0.3, 0.3, 0.4));
            T(H(), r.translate(0, 1, e).scale(3, 0.2, 0.35), V(0.5, 0.5, 0.5, 0.3));
            S(q => {
              q.h = () => r.translate(0, 4.7 * -l[g + 1].g, e);
              T(C);
            });
          }),
          Na(5, e =>
            Na(2, g =>
              T(
                p,
                r.translate(18.5 * (g - 0.5), 0, 4.8 * e - 9.5).rotate(0, 180 - 180 * g).scale(1.2, 10, 1.2),
                V(1, 1, 0.8, 0.2),
              ))),
          T(H(), r.translate(3, 1.5, -20).scale(0.5, 2, 5), V(0.7, 0.7, 0.7, 0.2)),
          T(H(), r.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), V(0.75, 0.75, 0.75, 0.2)),
          T(H(5), r.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), V(0.6, 0.3, 0.3, 0.4)),
          ub(r.translate(-5.4, 1.5, -19).rotate(0, -90)),
          T(
            H(),
            r.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5),
            V(0.8, 0.2, 0.2, 0.5),
          ),
          T(P(
            I(
              qb(
                u(H(6, 0, 0, 0.3), r.translate(8, -3, -4).scale(13, 1, 13), V(0.7, 0.7, 0.7, 0.2)),
                u(H(6), r.translate(0, -8).scale(9, 8, 8), V(0.4, 0.2, 0.5, 0.5)),
                u(H(6, 0, 0, 0.3), r.translate(0, -0.92).scale(13, 2, 13), V(0.8, 0.8, 0.8, 0.2)),
              ),
              u(H(5), r.scale(5, 30, 5), V(0.4, 0.2, 0.6, 0.5)),
              u(H(5, 0, 1.5), r.translate(0, 1).scale(4.5, 0.3, 4.5), V(0.7, 0.5, 0.9, 0.2)),
              u(H(), r.rotate(0, 60).translate(14, 0.7, -1).rotate(0, 0, -35).scale(2, 2, 2), V(0.5, 0.5, 0.5, 0.5)),
              u(H(6), r.translate(15, -1.5, 4).scale(3.5, 1, 3.5), V(0.5, 0.5, 0.5, 0.5)),
            ),
          )),
          S(e => {
            e.h = () =>
              r.translate(
                0,
                0.01 < l[3].g ? (5 * Math.cos(1.5 * a) + 2) * l[3].i * (1 - l[2].g) + -15 * (1 - l[3].g) : -500,
                0,
              );
            ub(r.translate(0, 1.2));
            T(H(5), r.translate(0, -0.2).scale(5, 1, 5), V(0.6, 0.65, 0.7, 0.3));
          }),
          ub(r.translate(15, -2, 4)),
          t(0.7, 12, 35),
          t(1, 8.2, 55),
          S(e => {
            e.h = () => r.translate(v() * Math.sin(a / 1.5 + 2) * 12);
            T(
              P(I(
                qb(
                  u(H(), r.scale(1.5, 1, 5), V(0.9, 0.9, 0.9, 0.2)),
                  u(H(6), r.scale(4, 1, 5), V(0.9, 0.9, 0.9, 0.2)),
                  u(H(), r.translate(0, -2).scale(2, 3.2, 1.9), V(0.3, 0.8, 0.5, 0.5)),
                  u(H(16, 1, 0, 4), r.scale(1, 1, 1.5).rotate(0, 90), V(0.9, 0.9, 0.9, 0.2)),
                ),
                u(H(), r.scale(1.3, 10, 1.3), V(0.2, 0.7, 0.4, 0.6)),
              )),
              r.translate(0, 0, 45),
            );
            vb(r.translate(0, 2.8, 45), [0, 0, 4.5]);
          }),
          S(e => {
            e.h = () => r.translate(9.8 * (1 - v()));
            T(H(3), r.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), V(0.3, 0.6, 0.6, 0.2));
            T(H(8), r.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), V(0.8, 0.8, 0.8, 0.2));
            T(H(), r.translate(-23, -3, 55).scale(5.2, 1.7, 3), V(0.5, 0.5, 0.5, 0.3));
            T(H(), r.translate(-23, -2.2, 62).scale(3, 1, 4), V(0.5, 0.5, 0.5, 0.3));
            ub(r.translate(-23, -0.5, 66.5));
          }),
          T(H(), r.translate(-18.65, -3, 55).scale(2.45, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2)),
          S(e => {
            e.h = () => r.translate(0, Ra(1 - 5 * v()) * Ta(l[4].g, l[5].g) * Math.sin(1.35 * a) * 4);
            T(H(), r.translate(-22.55, -3, 55).scale(1.45, 1.4, 2.7), V(0.7, 0.7, 0.7, 0.2));
            T(
              P(I(u(H(), r.scale(3, 1.4, 2.7)), u(H(), r.scale(1.2, 8, 1.2)))),
              r.translate(-33, -3, 55),
              V(0.7, 0.7, 0.7, 0.2),
            );
          }),
          S(e => {
            e.h = () => r.translate(0, 0, Ra(1 - 5 * v()) * Ta(l[4].g, l[5].g) * Math.sin(0.9 * a) * 8);
            T(P(
              I(
                u(H(), r.translate(-27, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2)),
                u(H(), r.translate(-27, -3, 55).scale(1, 3), V(0.9, 0.9, 0.9, 0.2)),
              ),
            ));
            T(H(), r.translate(-39, -3, 55).scale(3, 1.4, 2.7), V(0.9, 0.9, 0.9, 0.2));
          }),
          S(e => {
            e.h = () => r.translate(0, -6.5 * l[4].i);
            T(
              H(6),
              r.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9),
              V(0.7, 0.7, 0.7, 0.4),
            );
          }),
          [...u(
            P(qb(
              u(H(), r.translate(0, -3).scale(11, 1.4, 3), V(0.9, 0.9, 0.9, 0.2)),
              I(
                u(H(6), r.rotate(0, 0, 90).scale(6, 8, 6), V(0.3, 0.6, 0.6, 0.3)),
                u(H(4, 0, 0.01), r.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45), V(0.3, 0.6, 0.6, 0.3)),
                u(H(6), r.rotate(0, 0, 90).scale(5, 12, 5), V(0.3, 0.6, 0.6, 0.3)),
                ...[5, 0, -5].map(e =>
                  u(H(5), r.translate(e, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8), V(0.3, 0.6, 0.6, 0.3))
                ),
              ),
            )),
            r,
          )]),
        G =
          (T(E, r.translate(-53, 0, 55)),
            T(H(6), r.translate(-61.3, -2.4, 49).scale(3, 1, 5), V(0.4, 0.6, 0.6, 0.3)),
            T(H(7), r.translate(-57, -2.6, 46).scale(4, 1, 4), V(0.8, 0.8, 0.8, 0.3)),
            ub(r.translate(-55, -1.1, 46).rotate(0, 90)),
            S(e => {
              e.h = () => r.translate(-75, (1 - l[5].i) * (1 - l[6].g) * 3, 55).rotate(180 * (1 - l[5].i) + ja, 0);
              T(E);
            }, 2),
            T(H(), r.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5), V(0.7, 0.7, 0.7, 0.2)),
            T(
              H(3, 0, -0.5),
              r.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
              V(0.8, 0.8, 0.8, 0.2),
            ),
            T(
              P(I(
                qb(
                  u(H(), r.translate(-100, -2.5, 55).scale(8, 1, 8), V(0.8, 0.8, 0.8, 0.2)),
                  u(H(), r.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3), V(0.8, 0.8, 0.8, 0.2)),
                  u(H(), r.translate(-100, -2.6, 70).scale(3, 1.1, 7), V(0.8, 0.8, 0.8, 0.2)),
                  u(H(), r.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5), V(0.8, 0.8, 0.8, 0.2)),
                  u(H(6), r.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15), V(0.6, 0.6, 0.6, 0.3)),
                  u(H(), r.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6), V(0.8, 0.8, 0.8, 0.2)),
                  u(H(), r.translate(-100, 0.42, 92).scale(3, 1.1, 4.1), V(0.8, 0.8, 0.8, 0.2)),
                ),
                u(H(8), r.translate(-100, -1, 55).scale(7, 0.9, 7), V(0.3, 0.3, 0.3, 0.4)),
                u(H(8), r.translate(-100, -2, 55).scale(4, 0.3, 4), V(0.4, 0.4, 0.4, 0.5)),
                u(H(8), r.translate(-100, -3, 55).scale(0.6, 1, 0.6), V(0.4, 0.4, 0.4, 0.5)),
              )),
              r,
            ),
            vb(r.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]),
            vb(r.translate(-89, 0.2, 80), [0, 0, 6]),
            T(P(
              I(
                u(H(), r.translate(-100, 1, 63).scale(7.5, 4), V(0.5, 0.5, 0.5, 0.4)),
                u(H(), r.translate(-100, 0, 70).scale(2, 2, 10), V(0.5, 0.5, 0.5, 0.4)),
                u(H(20, 1), r.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0), V(0.5, 0.5, 0.5, 0.4)),
              ),
            )),
            S(e => {
              e.h = () => r.translate(-99.7, 5.3 * -l[6].g - 2, 63.5);
              T(C);
            }),
            ya.map(({ x: e, z: g }) => {
              T(H(6), r.translate(7 * e - 100, -3, 7 * g + 55).scale(1, 8.1), V(0.6, 0.15, 0.15, 0.8));
              [4, -0.4].map(q =>
                T(H(6), r.translate(7 * e - 100, q, 7 * g + 55).scale(1.3, 0.5, 1.3), V(0.4, 0.2, 0.2, 0.8))
              );
            }),
            Na(7, e => {
              T(
                H((23 * e + 1) % 5 + 5, 0, 0.55),
                r.translate(5 * Math.sin(e) - 101 + e, -2.3 - e, 44.9 - 2.8 * e).scaleSelf(
                  5 + e / 2,
                  1 + e / 6,
                  5 + e / 3,
                ),
                V(0.5 - e / 17, 0.5 - (1 & e) / 9, 0.6, 0.3),
              );
            }),
            T(H(), r.translate(-87, -9.5, 24).scale(7, 1, 3), V(0.4, 0.5, 0.6, 0.4)),
            T(H(4), r.translate(-86, -9.2, 27).scale(5, 1, 5), V(0.5, 0.6, 0.7, 0.3)),
            T(H(12, 1), r.translate(-86, -9, 31).scale(1.5, 1, 1.5), V(0.3, 0.3, 0.4, 0.1)),
            ub(r.translate(-86, -7.5, 31)),
            S(e => {
              e.h = () => r.translate(0, 3.5 * (1 - Oa(l[6].g, l[7].g)) + Ta(l[7].i, l[6].i) * Math.sin(a) * 5);
              [0, 12, 24].map(g =>
                T(H(), r.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.2, 0.5, 0.6, 0.2))
              );
            }),
            S(e => {
              e.h = () => {
                const g = Ta(l[7].i, l[6].i);
                return r.translate(0, g * Math.sin(a + 3) * 6, 6 * Math.sin(0.6 * a + g) * g);
              };
              [6, 18].map(g =>
                T(H(), r.translate(g - 76.9, g / -13 - 10, 24).scale(2.8, 1.5, 3), V(0.1, 0.4, 0.5, 0.2))
              );
            }),
            T(
              P(I(
                qb(
                  u(H(), r.scale(11, 1, 13), V(0.3, 0.4, 0.6, 0.3)),
                  u(H(5), r.translate(0, 0, -7).scale(2, 1.2, 2), V(0.2, 0.4, 0.7, 0.3)),
                  u(H(5), r.scale(9, 1.2, 9), V(0, 0.2, 0.3, 0.5)),
                ),
                u(H(5), r.scale(5.4, 5, 5.4), V(0, 0.2, 0.3, 0.5)),
              )),
              r.translate(-38.9, -11.3, 17),
            ),
            ub(r.translate(-38.9, -9.6, 10)),
            S(e => {
              e.h = () => r.translate(0, -7.3 * l[7].i);
              T(
                P(I(
                  qb(
                    u(H(5), r.translate(0, 2).scale(5, 7, 5).skewY(8), V(0.2, 0.4, 0.5, 0.5)),
                    u(H(5), r.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8), V(0.25, 0.35, 0.5, 0.5)),
                    u(H(5), r.translate(0, 9).scale(0.6, 7, 0.6).skewY(8), V(0.35, 0.3, 0.5, 0.5)),
                  ),
                  u(H(5), r.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35), V(0.2, 0.4, 0.5, 0.5)),
                )),
                r.translate(-38.9, -11.3, 17),
              );
              vb(r.translate(-39.1, -0.3, 17).rotate(0, 0, 10), ...db(15).map(({ x: g, z: q }) => [3 * g, 3 * q, 1.2]));
            }),
            ya.map(({ x: e, z: g }) => {
              k = r.translate(9 * e - 38.9, -7.3, 11 * g + 17);
              T(H(14, 1), k.scale(1, 4), V(0.25, 0.25, 0.25, 1));
              [1.5, 8].map(q => T(H(17, 1), k.translate(0, q - 4).scale(1.5, 0.5, 1.5), V(0.6, 0.6, 0.6, 0.3)));
            }),
            T(
              P(I(
                qb(
                  u(H(6), r.translate(0, 0, -36).scale(15, 1.2, 15), V(0.7, 0.7, 0.7, 0.3)),
                  u(H(), r.translate(0, 0, -18).scale(4, 1.2, 6), V(0.45, 0.4, 0.6, 0.3)),
                ),
                ...Na(6, e =>
                  Na(6, g =>
                    u(
                      H(6),
                      r.translate(4.6 * g - 12 + 2 * (1 & e), 0, 4.6 * e - 50 + 2 * Math.sin(4 * g)).scale(2, 5, 2),
                      V(0.7, 0.7, 0.7, 0.3),
                    ))).flat(),
              )),
              r.translate(-38.9, -11.3, 17),
            ),
            vb(r.translate(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]),
            T(H(5), r.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), V(0.8, 0.1, 0.25, 0.4)),
            ub(r.translate(-84, -0.5, 85).rotate(0, 45)),
            S(e => {
              e.h = () => m(-123, 1.4, 55 + -65 * na);
              ub(r.translate(0, -3, -4).rotate(0, 180));
              T(w);
            }),
            vb(r.translate(-115, 0.2, -12), [0, 0, 3.5]),
            P(I(
              u(H(), r.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5), V(0.25, 0.25, 0.35, 0.3)),
              u(H(3), r.translate(0, 0, -5.5).scale(3, 2), V(0.6, 0.3, 0.4, 0.3)),
              ...[-1.2, 1.2].map(e => u(H(), r.translate(e, -0.5, 1).scale(0.14, 0.3, 6.5), V(0.7, 0.2, 0, 0.3))),
            ))),
        F = (S(e => {
          e.h = () => r.translate(0, -2, Ta(l[10].g, l[11].g) * Pa(Math.sin(1.1 * a)) * -8.5 + 10);
          Na(2, g => T(G, r.translate(9 * g - 110 + (1 & g), 1.7, -12)));
        }),
          S(e => {
            e.h = () => r.translate(0, -2, Ta(l[10].g, l[11].g) * Pa(Math.sin(2.1 * a)) * -8.5 + 10);
            Na(2, g => T(G, r.translate(9 * (g + 2) - 110 + (1 & g), 1.7, -12)));
          }),
          S(e => {
            e.h = () =>
              r.translate(
                0,
                -2,
                -8.5 * Oa((1 - l[10].g) * (1 - Ta(l[10].g, l[11].g)), Ta(l[10].g, l[11].g) * Pa(Math.sin(1.5 * a)))
                  + 10,
              );
            Na(3, g => T(G, r.translate(9 * g - 106, 1.7, -12)));
          }),
          T(
            P(I(
              qb(
                u(H(), r.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
                u(H(), r.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),
              ),
              ...Na(4, e => u(H(), r.translate(13 + 9 * e + (1 & e), -0.8, 9).scale(1.35, 1.35, 9))),
              ...Na(3, e => u(H(), r.translate(17 + 9 * e, -0.8, 9).scale(1.35, 1.35, 9))),
            )),
            r.translate(-123, 0, -12),
            V(0.5, 0.5, 0.6, 0.2),
          ),
          T(H(5), r.translate(-113.6, -1.6, -2).rotate(0, 90, 90).scale(1.5, 0.2, 1.5), V(0.25, 0.25, 0.35, 1)),
          T(H(), r.translate(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), V(0.8, 0.8, 0.8, 0.2)),
          T(H(6), r.translate(-116, -2.6, -16.5).scale(3.2, 0.8, 3), V(0.6, 0.5, 0.7, 0.2)),
          ub(r.translate(-116, -1.4, -18).rotate(0, 180)),
          Na(3, e => {
            T(z, r.translate(12 * e - 109, -9, -12), V(0.6, 0.6, 0.6, 0.3));
            T(z, r.translate(-77, -9, -12 * e - 20).rotate(0, 90), V(0.6, 0.6, 0.6, 0.3));
          }),
          T(P(
            I(
              u(H(12), r.translate(-77, -13.9, -12).scale(4, 18.2, 4), V(0.7, 0.7, 0.7, 0.2)),
              u(H(), r.translate(-79, 0, -12).scale(3.5, 2.2, 1.3), V(0.4, 0.5, 0.6, 0.2)),
              u(H(), r.translate(-77, 0, -14).scale(1.5, 2.2, 2), V(0.4, 0.5, 0.6, 0.2)),
              u(H(12), r.translate(-77, 2.8, -12).scale(3, 5, 3), V(0.4, 0.5, 0.6, 0.2)),
            ),
          )),
          T(H(), r.translate(-115.5, -17, -12).scale(0.5, 15, 2.2), V(0.6, 0.6, 0.6, 0.3)),
          T(H(), r.translate(-77, -17, -50.5).scale(2.2, 15, 0.5), V(0.6, 0.6, 0.6, 0.3)),
          T(H(), r.translate(-84.9, -4.3, -40).rotate(0, 0, 12).scale(6, 1, 3), V(0.6, 0.6, 0.6, 0.3)),
          T(P(
            I(
              u(H(), r.translate(-93, -5.8, -40).scale(9, 1, 5), V(0.8, 0.8, 0.8, 0.1)),
              u(H(9), r.translate(-98, -5.8, -40).scale(3, 8, 3), V(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          T(H(9), r.translate(-98, -5.8, -40).scale(2.5, 0.9, 2.5), V(0.5, 0.5, 0.5, 0.3)),
          ub(r.translate(-98, -4.4, -40).rotate(0, 90)),
          vb(r.translate(-93, -3, -40).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]),
          T(P(
            I(
              qb(
                u(H(6, 0, 0, 0.6), r.translate(-100, 0.7, 105.5).scale(8, 1, 11), V(0.7, 0.7, 0.7, 0.2)),
                u(H(), r.translate(-101.5, 0.7, 93.5).scale(10.5, 1, 2), V(0.7, 0.7, 0.7, 0.2)),
                u(H(), r.translate(-91.2, 0.7, 107).scale(3, 1, 3.3), V(0.7, 0.7, 0.7, 0.2)),
              ),
              u(H(5), r.translate(-100, 0.7, 113).scale(4, 3, 4), V(0.7, 0.7, 0.7, 0.2)),
            ),
          )),
          Na(4, e =>
            S(g => {
              g.h = () => {
                const q = Ta(l[8].i, l[12].i);
                return r.translate(
                  (2 < e ? 2 * (1 - q) + q : 0) - 100,
                  q * Math.sin(1.3 * a + 1.7 * e) * (3 + e / 3) + 0.7,
                  115 + (1 & e ? -1 : 1) * (1 - l[8].i) * (1 - l[12].i) * -7
                    + (0.05 > q ? 0.05 : q) * Math.cos(1.3 * a + 7 * e) * (4 - 2 * (1 - e / 3)),
                );
              };
              T(
                H(6),
                r.translate(-14.6 - 4.8 * e - (2 < e ? 2 : 0), -e / 2.3, -21.5).scale(2.6, 1, 2.5),
                V(0.5 - e / 8, e / 12 + 0.5, 0.7, 0.3),
              );
            })),
          S(e => {
            e.h = () => {
              const g = Ta(l[8].i, l[12].i);
              return r.translate(2.5 * (1 - g) - 139.7, -3 * (1 - l[8].g) + g * Math.sin(0.8 * a) * -1 - 1.8, 93.5)
                .rotateSelf(Math.cos(1.3 * a) * (3 * g + 3), 0);
            };
            T(P(
              I(
                u(H(10), r.scale(6, 2, 6), V(0.1, 0.6, 0.5, 0.3)),
                u(H(10), r.scale(3.3, 6, 3.3), V(0.1, 0.6, 0.5, 0.5)),
              ),
            ));
            k = r.translate(-7.5).rotate(0, 90);
            T(H(15, 1), k.scale(3, 2.3, 3), V(0.4, 0.4, 0.4, 0.3));
            T(H(10), k.scale(2, 2.5, 2), V(0.3, 0.8, 0.7, 0.3));
            T(H(5), k.scale(1, 3), V(0.5, 0.5, 0.5, 0.5));
            ub(k.translate(0, 3.4).rotate(0, 180));
            [-1, 1].map(g =>
              T(p, r.rotate(90 * -g, 180, 90).translate(0, 5).rotate(0, 0, 40).scale(1.3, 10, 1.3), V(1, 1, 0.8, 0.2))
            );
            vb(r.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
          }),
          [-1, 1].map(e => {
            T(H(12, 1), r.translate(-7.5 * e - 100, 3.7, 96).scale(0.8, 4, 0.8), V(0.6, 0.24, 0.2, 0.5));
            [7.2, 1.5].map(g =>
              T(H(15, 1), r.translate(-7.5 * e - 100, g + 0.7, 96).scale(1.1, 0.5, 1.1), V(0.5, 0.24, 0.2, 0.4))
            );
            T(p, r.translate(-5 * e - 100, 1.7, 114.5).scale(1.2, 10, 1.2).rotate(0, 90 * e - 90), V(1, 1, 0.8));
            T(
              P(I(
                u(H(), r.translate(-4 * e, 3.5, -0.5).scale(4, 4, 0.7), V(0.5, 0.5, 0.5, 0.4)),
                u(H(), r.scale(3, 3, 10), V(0.6, 0.24, 0.2, 0.5)),
                u(H(28, 1), r.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0), V(0.6, 0.24, 0.2, 0.5)),
                u(H(5), r.translate(-5.3 * e, 7).rotate(90, 0).scale(1.7, 5, 1.7), V(0.6, 0.24, 0.2, 0.5)),
                u(H(5), r.translate(-5.3 * e, 3.8).rotate(90, 0, 35).scale(0.75, 5, 0.75), V(0.6, 0.24, 0.2, 0.5)),
              )),
              r.translate(e - 100, 0.7, 97),
            );
          }),
          S(e => {
            e.h = () => r.translate(-100, 0.6 - 6 * l[12].g, 96.5).scale(0.88, 1.2);
            T(C);
          }),
          [
            ...u(H(25, 1), r.scale(8, 1, 8), V(0.45, 0.45, 0.45, 0.2)),
            ...u(H(5), r.translate(0, 1).scale(1, 0.2), V(0.3, 0.3, 0.3, 0.2)),
          ]);
      S(e => {
        e.h = () => r.translate(-80, 1, 106).rotate(0, 40 + fa);
        T(P(
          I(
            u(H(25, 1), r.scale(8, 1, 8), V(0.45, 0.45, 0.45, 0.2)),
            u(H(), r.translate(0, 0, -5.5).scale(1.5, 3, 2.5), V(0.45, 0.45, 0.45, 0.2)),
          ),
        ));
        T(H(8), r.translate(0, 2).scale(3, 1.5, 3), V(0.7, 0.7, 0.7, 0.1));
        T(H(5), r.translate(0, 2).scale(1, 2), V(0.3, 0.3, 0.3, 0.2));
        vb(r.translate(0, 3), ...db(10).map(({ x: g, z: q }) => [5.6 * g, 5.6 * q, 2.5]));
      });
      S(e => {
        e.h = () => r.translate(-64, 1, 106).rotate(0, ia);
        T(P(
          I(
            u(H(25, 1), r.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3)),
            u(H(), r.scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
          ),
        ));
        T(F);
        [-1, 1].map(g =>
          T(p, r.rotate(0, 90).translate(-5 * g, 1, -0.5).scale(1.2, 10, 1.2).rotate(0, 90 * g + 90), V(1, 1, 0.8))
        );
      });
      S(e => {
        e.h = () => r.translate(-48, 1, 106).rotate(0, 180 - ia);
        T(P(
          I(
            u(H(25, 1), r.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3)),
            u(H(), r.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
            u(H(), r.translate(0, 0, 7).scale(2, 5, 9), V(0.3, 0, 0, 0.3)),
          ),
        ));
        T(F);
      });
      S(e => {
        e.h = () => r.translate(-48, 1, 90).rotate(0, 270 + ia);
        T(P(
          I(
            u(H(25, 1), r.translate(0, 2).scale(8, 1, 8), V(0.35, 0, 0, 0.3)),
            u(H(), r.translate(7).scale(9, 5, 2), V(0.3, 0, 0, 0.3)),
            u(H(), r.translate(0, 0, -7).scale(2, 5, 9), V(0.3, 0, 0, 0.3)),
          ),
        ));
        T(F);
      });
      T(H(), r.translate(-56, 1, 106).scale(0.7, 0.8, 2.5), V(0.7, 0.7, 0.7, 0.2));
      T(H(), r.translate(-48, 1, 98).scale(2.5, 0.8, 0.7), V(0.7, 0.7, 0.7, 0.2));
      T(H(), r.translate(-39, 0.4, 90).scale(2, 1, 2), V(0.7, 0.7, 0.7, 0.3));
      T(H(), r.translate(-34.2, 0.4, 90).scale(3, 1, 3), V(0.7, 0.7, 0.7, 0.3));
      ub(r.translate(-34, 2.7, 96).rotate(-12, 0));
      T(H(5), r.translate(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), V(0.2, 0.5, 0.5, 0.6));
      [V(0.1, 0.55, 0.45, 0.2), V(0.2, 0.5, 0.5, 0.3), V(0.3, 0.45, 0.55, 0.4)].map((e, g) =>
        S(q => {
          q.h = () =>
            r.translate(
              0,
              (1 - l[13].i) * (1 - l[14].i) * (g ? 0 : 3) + Ta(l[13].i, l[14].i) * Math.sin(1.5 * a + 1.5 * g) * 4,
            );
          T(H(), r.translate(-23.5, 0.5, 90 + 6.8 * g).scale(1 === g ? 2 : 3.3, 1, 3.3), e);
          2 === g && T(H(), r.translate(-29.1, 0.4, 90).scale(2.1, 1, 3), V(0.7, 0.7, 0.7, 0.3));
          1 === g
            && T(
              H(),
              r.translate(-16.1, 0.5, 103.5).rotate(0, 0, -3.5).scale(3.9, 0.8, 2).skewX(-1),
              V(0.6, 0.6, 0.7, 0.3),
            );
        })
      );
      T(P(
        I(
          u(H(6, 0, 0, 0.3), r.translate(0, -0.92, 95).scale(14, 2, 14), V(0.8, 0.8, 0.8, 0.2)),
          u(H(5), r.translate(0, 0, 95).scale3d(6), V(0.3, 0.3, 0.3, 0.5)),
        ),
      ));
      [8, -6.1].map((e, g) =>
        Na(
          3,
          q =>
            T(
              z,
              r.translate(6 * q - 6, e - (1 & q), 111 - 0.2 * (1 & q) - g),
              1 & q ? V(0.5, 0.5, 0.5, 0.3) : V(0.35, 0.35, 0.35, 0.5),
            ),
        )
      );
      [-1, 1].map(e => T(p, r.translate(-8 * e, 1, 85).scale(1.2, 10, 1.2).rotate(0, 90 * e + 90), V(1, 1, 0.8)));
      ub(r.translate(0, 1.7, 82).rotate(0, 180));
      T(H(5), r.translate(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), V(0.5, 0.3, 0.3, 0.4));
      T(P(
        I(
          qb(
            u(H(), r.translate(0, 16, 110.5).scale(12, 1, 3), V(0.5, 0.3, 0.3, 0.4)),
            u(H(), r.translate(0, 16, 111).scale(3, 1, 3.8), V(0.5, 0.3, 0.3, 0.4)),
          ),
          u(H(5), r.translate(0, 16, 103.5).scale(5.5, 5, 5.5), V(0.5, 0.3, 0.3, 0.4)),
        ),
      ));
      T(H(6), r.translate(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), V(0.5, 0.6, 0.7, 0.3));
      T(H(), r.translate(0, 16, 129).scale(1.5, 1, 2), V(0.5, 0.6, 0.7, 0.3));
      T(H(7), r.translate(0, 16.2, 133).scale(5, 1, 5), V(0.4, 0.5, 0.6, 0.4));
      S(e => {
        e.h = () => {
          const g = Math.sin(a);
          return r.translate(-2 * g).rotate(0, 0, 25 * g);
        };
        T(H(3), r.translate(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60), V(0.5, 0.3, 0.3, 0.4));
        [22, 30].map(g => {
          T(H(6), r.translate(0, 16, g + 95).scale(3, 1, 2.3).rotate(0, 90), V(0.7, 0.7, 0.7, 0.4));
          T(H(), r.translate(0, 6.2, g + 95).scale(0.5, 11, 0.5), V(0.5, 0.3, 0.3, 0.4));
        });
      });
      S(e => {
        e.h = () => {
          const g = Ta(Ta((l[14].g + l[14].i) / 2, l[13].i), (l[15].g + l[15].i) / 2);
          return r.translate(0, 16 * g, 8.5 * Ra(2 * g - 1) + 95);
        };
        T(H(5), r.scale(5, 1.1, 5), V(0.5, 0.3, 0.3, 0.4));
        T(H(5), r.scale(5.5, 0.9, 5.5), V(0.25, 0.25, 0.25, 0.4));
        ub(r.translate(0, 1.5, -1).rotate(0, 180));
      });
      vb(r.translate(0, 3, 95), ...db(9).map(({ x: e, z: g }) => [9 * e, 9 * g, 4]));
      vb(r.translate(0, 19, 134), [0, 0, 3.5]);
    });
    S(() => {
      [0, 180].map(v => T(p, r.rotate(0, v).translate(0.2, 1.32).rotate(0, 0, -30).scale(0.2, 0.6, 0.2), V(1, 1, 0.8)));
      T(fb(20), r.translate(0, 1).scale(0.5, 0.5, 0.5), V(1, 0.3, 0.4));
      const t = u(
        P(I(H(15, 1), u(H(), r.translate(0, 0, 1).scale(2, 2, 0.5)))),
        r.rotate(-90, 0).scale(0.1, 0.05, 0.1),
        V(0.3, 0.3, 0.3),
      );
      [-1, 1].map(v => T(t, r.translate(0.2 * v, 1.2, 0.4).rotate(0, 20 * v, 20 * v)));
      T(H(), r.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), V(0.3, 0.3, 0.3));
      T(fb(20), r.scale(0.7, 0.8, 0.55), V(1, 0.3, 0.4));
    });
    [-1, 1].map(t =>
      S(() => {
        T(H(10, 1), r.translate(0.3 * t, -0.8).scale(0.2, 0.7, 0.24), V(1, 0.3, 0.4));
      })
    );
    S(() => {
      T(H(6, 1), r.scale(0.13, 1.4, 0.13), V(0.3, 0.3, 0.5, 0.1));
      T(H(8, 1), r.translate(0, 1).scale(0.21, 0.3, 0.21), V(1, 0.5, 0.2));
      T(H(3), r.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), V(0.2, 0.2, 0.2, 0.1));
    }, 0);
    S(() => {
      T(H(6).slice(0, -1), r.scale(0.77, 1, 0.77), V(1, 0.3, 0.5));
    }, 0);
    S(() => {
      T(
        fb(30, 24, (t, v, C) => {
          const E = v / 24, G = t * Math.PI * 2 / 30, F = E ** 0.6 * Math.PI / 2;
          t = E * E * Math.sin(t * Math.PI * 14 / 30) / 4;
          return 23 === v
            ? { x: C.D = 0, y: -0.5, z: 0 }
            : {
              x: Math.cos(G) * Math.sin(F),
              y: Math.cos(E * Math.PI) - E - t,
              z: Math.sin(G) * Math.sin(F) + Math.sin(t * Math.PI * 2) / 4,
            };
        }),
        r.scale3d(0.7),
        V(1, 1, 1),
      );
      [-1, 1].map(t => T(fb(12), r.translate(0.16 * t, 0.4, -0.36).scale3d(0.09)));
    }, 0);
  });
});
NO_INLINE(
  "<!DOCTYPE html><html><head>\n    <title>666</title>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,user-scalable=0\">\n    \n    \n    \n  <link rel=\"stylesheet\" href=\"/index.css\"></head>\n\n  <body>\n    <canvas id=\"hC\"></canvas>\n    <h3>Souls: <b id=\"h3\"></b> / XIII</h3>\n    <h4 id=\"h4\">loading</h4>\n    <main>\n      <nav>\n        <h2>DANTE</h2>\n        Lucifer:\n        <i>\"Damn. Infernal delivery service failed again. A delivery of evil souls fell in an area under construction.\n          Dante, take them where they belong, to the 8th circle.\"</i>\n        <ul>\n          <li id=\"b1\">Play</li>\n          <li id=\"b2\">Play first person</li>\n          <li id=\"b3\">Restart</li>\n          <li id=\"b4\"></li>\n        </ul>\n        <p>move WASD/arrows, levers E/click, menu Esc</p>\n        <p>\n          <a target=\"_blank\" href=\"https://github.com/SalvatorePreviti/js13k-2022\">© 2022 Salvatore Previti</a> -\n          <a target=\"_blank\" href=\"https://twitter.com/ryanmalm\">music Ryan Malm</a>\n        </p>\n      </nav>\n    </main>\n    <b id=\"b5\">☰</b>\n    \n  \n\n<script type=\"module\" src=\"/index.js\" crossorigin=\"\">\x3c/script></body></html> * {\n  font-weight: 100;\n  user-select: none;\n  touch-action: none;\n  overscroll-behavior: contain;\n  -webkit-user-select: none;\n  color: #fda;\n}\nbody > * {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  font-family: \"Times New Roman\", serif;\n  background: #000;\n  font-size: max(min(3.8vw, 3.8vh), 15px);\n  text-shadow: 4px 4px 2px #000, -2px -2px 8px #000;\n}\nh3,\nh4 {\n  pointer-events: none;\n}\n.l h3,\n.l #b5 {\n  display: block;\n  padding: 10px;\n}\n.l h3 {\n  text-align: right;\n  right: 5%;\n  bottom: 0;\n}\nh4 {\n  left: 0;\n  top: 0;\n  right: 0;\n  text-align: center;\n}\n.m main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 70%;\n}\nnav {\n  min-width: 50%;\n  max-width: 800px;\n  background: #00000080;\n  border-radius: 1em;\n  padding: 1em;\n}\np {\n  font-size: 0.7em;\n}\nh2 {\n  color: #f61;\n  margin: 0 0 0.7em;\n}\na,\nli {\n  cursor: pointer;\n  margin-bottom: 0.5em;\n  text-decoration: none;\n  border-bottom: 3px solid #00000000;\n}\nh2,\na:hover,\nli:hover {\n  border-bottom: 3px solid;\n}\nh3,\nmain,\n.m h4 {\n  display: none;\n}\n",
);
