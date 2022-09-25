export const song_instruments = [
  [
    // instrument 0
    69, // OSC1_VOL
    128, // OSC1_SEMI
    0, // OSC1_XENV
    143, // OSC2_VOL
    128, // OSC2_SEMI
    0, // OSC2_XENV
    0, // NOISE_VOL
    196, // ENV_ATTACK ** 2 * 4
    100, // ENV_SUSTAIN ** 2 * 4
    36, // ENV_RELEASE
    0, // ENV_EXP_DECAY
    0, // LFO_FREQ
    149, // FX_FREQ
    110, // FX_RESONANCE
    31, // FX_DRIVE
    47, // FX_PAN_AMT
    3, // FX_PAN_FREQ
    56, // FX_DELAY_AMT
    2, // FX_DELAY_TIME
    0, // LFO_AMT
    [
      // Columns 0
      "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U",
      "(059<59<A9<AE<AEHAEHMEHMQMQTY(Y",
      "(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y",
      "(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^",
      "Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]",
      "QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
    ],
  ],
  [
    // Instrument 1
    100, // OSC1_VOL
    128, // OSC1_SEMI
    0, // OSC1_XENV
    201, // OSC2_VOL
    128, // OSC2_SEMI
    0, // OSC2_XENV
    0, // NOISE_VOL
    100, // ENV_ATTACK ** 2 * 4
    144, // ENV_SUSTAIN ** 2 * 4
    35, // ENV_RELEASE
    0, // ENV_EXP_DECAY
    6, // LFO_FREQ
    135, // FX_FREQ
    0, // FX_RESONANCE
    32, // FX_DRIVE
    147, // FX_PAN_AMT
    6, // FX_PAN_FREQ
    0, // FX_DELAY_AMT
    6, // FX_DELAY_TIME
    195, // LFO_AMT
    [
      // Columns 1
      ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5",
      "-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5",
      ",(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5",
      "*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6",
      "5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5",
      "5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
    ],
  ],
  [
    // Instrument 2
    255, // OSC1_VOL
    116, // OSC1_SEMI
    85, // OSC1_XENV
    255, // OSC2_VOL
    116, // OSC2_SEMI
    37, // OSC2_XENV
    14, // NOISE_VOL
    64, // ENV_ATTACK ** 2 * 4
    144, // ENV_SUSTAIN ** 2 * 4
    73, // ENV_RELEASE
    99, // ENV_EXP_DECAY
    0, // LFO_FREQ
    136, // FX_FREQ
    15, // FX_RESONANCE
    32, // FX_DRIVE
    0, // FX_PAN_AMT
    0, // FX_PAN_FREQ
    66, // FX_DELAY_AMT
    6, // FX_DELAY_TIME
    0, // LFO_AMT
    [
      // Columns 2
      "9(((9(((9(((9(((9(((9(((9(((9",
      "9(((Q(((Q(((Q",
    ],
  ],
  [
    // Instrument 3
    0, // OSC1_VOL
    140, // OSC1_SEMI
    0, // OSC1_XENV
    0, // OSC2_VOL
    140, // OSC2_SEMI
    0, // OSC2_XENV
    81, // NOISE_VOL
    64, // ENV_ATTACK ** 2 * 4
    400, // ENV_SUSTAIN ** 2 * 4
    47, // ENV_RELEASE
    55, // ENV_EXP_DECAY
    5, // LFO_FREQ
    239, // FX_FREQ
    135, // FX_RESONANCE
    13, // FX_DRIVE
    176, // FX_PAN_AMT
    5, // FX_PAN_FREQ
    16, // FX_DELAY_AMT
    4, // FX_DELAY_TIME
    187, // LFO_AMT
    [
      // Columns 3
      "9(9(9(9(9(9(9(999(9(9(9(999(9(9",
      "9(9(9(9(9(999(9(((((Q",
    ],
  ],
  [
    // Instrument 4
    221, // OSC1_VOL
    128, // OSC1_SEMI
    64, // OSC1_XENV
    210, // OSC2_VOL
    128, // OSC2_SEMI
    64, // OSC2_XENV
    255, // NOISE_VOL
    64, // ENV_ATTACK ** 2 * 4
    144, // ENV_SUSTAIN ** 2 * 4
    73, // ENV_RELEASE
    79, // ENV_EXP_DECAY
    7, // LFO_FREQ
    195, // FX_FREQ
    15, // FX_RESONANCE
    21, // FX_DRIVE
    20, // FX_PAN_AMT
    0, // FX_PAN_FREQ
    9, // FX_DELAY_AMT
    3, // FX_DELAY_TIME
    64, // LFO_AMT
    [
      // Columns 4
      "((((Q(((((((Q(((((((Q(((((((Q",
      "Q((Q((Q((Q((Q((Q((((Q",
    ],
  ],
] as const;

const arrays = {
  OSC1_VOL: [] as number[],
  OSC1_SEMI: [] as number[],
  OSC1_XENV: [] as number[],
  OSC2_VOL: [] as number[],
  OSC2_SEMI: [] as number[],
  OSC2_XENV: [] as number[],
  NOISE_VOL: [] as number[],
  ENV_ATTACK: [] as number[],
  ENV_SUSTAIN: [] as number[],
  ENV_RELEASE: [] as number[],
  ENV_EXP_DECAY: [] as number[],
  LFO_FREQ: [] as number[],
  FX_FREQ: [] as number[],
  FX_RESONANCE: [] as number[],
  FX_DRIVE: [] as number[],
  FX_PAN_AMT: [] as number[],
  FX_PAN_FREQ: [] as number[],
  FX_DELAY_AMT: [] as number[],
  FX_DELAY_TIME: [] as number[],
  LFO_AMT: [] as number[],
  COLUMNS: [] as string[],
};

for (const instrument of song_instruments) {
  const [
    OSC1_VOL,
    OSC1_SEMI,
    OSC1_XENV,
    OSC2_VOL,
    OSC2_SEMI,
    OSC2_XENV,
    NOISE_VOL,
    ENV_ATTACK,
    ENV_SUSTAIN,
    ENV_RELEASE,
    ENV_EXP_DECAY,
    LFO_FREQ,
    FX_FREQ,
    FX_RESONANCE,
    FX_DRIVE,
    FX_PAN_AMT,
    FX_PAN_FREQ,
    FX_DELAY_AMT,
    FX_DELAY_TIME,
    LFO_AMT,
    COLUMNS,
  ] = instrument;

  arrays.OSC1_VOL.push(OSC1_VOL);
  arrays.OSC1_SEMI.push(OSC1_SEMI);
  arrays.OSC1_XENV.push(OSC1_XENV);
  arrays.OSC2_VOL.push(OSC2_VOL);
  arrays.OSC2_SEMI.push(OSC2_SEMI);
  arrays.OSC2_XENV.push(OSC2_XENV);
  arrays.NOISE_VOL.push(NOISE_VOL);
  arrays.ENV_ATTACK.push(ENV_ATTACK);
  arrays.ENV_SUSTAIN.push(ENV_SUSTAIN);
  arrays.ENV_RELEASE.push(ENV_RELEASE);
  arrays.ENV_EXP_DECAY.push(ENV_EXP_DECAY);
  arrays.LFO_FREQ.push(LFO_FREQ);
  arrays.FX_FREQ.push(FX_FREQ);
  arrays.FX_RESONANCE.push(FX_RESONANCE);
  arrays.FX_DRIVE.push(FX_DRIVE);
  arrays.FX_PAN_AMT.push(FX_PAN_AMT);
  arrays.FX_PAN_FREQ.push(FX_PAN_FREQ);
  arrays.FX_DELAY_AMT.push(FX_DELAY_AMT);
  arrays.FX_DELAY_TIME.push(FX_DELAY_TIME);
  arrays.LFO_AMT.push(LFO_AMT);
  arrays.COLUMNS.push(COLUMNS as any);
}

for (const [k, v] of Object.entries(arrays)) {
  console.log(`const ${k} = ${JSON.stringify(v, null, k === "COLUMNS" ? 2 : 0)}[channelIndex]!;`);
}

// for (const key of Object.keys(arrays)) {
//   console.log(`song_${key},`);
// }

// for (const key of Object.keys(arrays)) {
//   console.log(`const ${key} = song_${key}[channelIndex];`);
// }
