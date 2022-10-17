/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil; -*-
 *
 * Copyright (c) 2011-2013 Marcus Geelnard
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 * 1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 * 2. Altered source versions must be plainly marked as such, and must not be
 *    misrepresented as being the original software.
 *
 * 3. This notice may not be removed or altered from any source
 *    distribution.
 *
 */

// WARNING: Source code of the original player was heavily manually modified to reduce bundle size.
// The song is integrated together with the player itself.
// This player plays only the game song and is modified.
// This makes this version not compatible with default soundbox songs.

// Beethoven's Piano Sonata No. 14, 3rd movement, readapted by Ryan Malm for this game

import { loadStep } from "../load-step";

export let audioBuffer: AudioBuffer;

export const loadSong = NO_INLINE((done: () => void) => {
  if (DEBUG && DEBUG_FLAG1) {
    done();
    return;
  }

  const song_rowLen0 = 5513;

  const song_rowLen1 = 4562;

  const song_rowLen2 = 3891;

  // Rows per pattern
  const song_patternLen = 32;

  // End pattern
  const song_endPattern = 11;

  const SONG_WORDS = song_patternLen * (song_endPattern + 1) * 2;

  const SONG_TOTAL_WORDS = (song_rowLen0 + song_rowLen1 + song_rowLen2) * SONG_WORDS;

  const song_patterns = "000001234556112341234556011111111112011111111112000001111112";

  audioBuffer = new AudioBuffer({
    numberOfChannels: 2,
    sampleRate: 44100,
    length: SONG_TOTAL_WORDS / 2,
  });

  const mixBufferA = audioBuffer.getChannelData(0);

  const mixBufferB = audioBuffer.getChannelData(1);

  let pendingChannels = 0;

  const makeChannel = (
    OSC1_VOL: number,
    OSC1_SEMI: number,
    OSC1_XENV: number,
    OSC2_VOL: number,
    OSC2_SEMI: number,
    OSC2_XENV: number,
    NOISE_VOL: number,
    ENV_ATTACK: number,
    ENV_SUSTAIN: number,
    ENV_RELEASE: number,
    ENV_EXP_DECAY: number,
    LFO_FREQ: number,
    FX_FREQ: number,
    FX_RESONANCE: number,
    FX_DRIVE: number,
    FX_PAN_AMT: number,
    FX_PAN_FREQ: number,
    FX_DELAY_AMT: number,
    FX_DELAY_TIME: number,
    LFO_AMT: number,
    COLUMNS: string[] | string,
    channelIndex = pendingChannels++,
  ) =>
    loadStep(() => {
      // Generate audio data for a single track/channel.
      let mixIndex = 0;

      ENV_RELEASE = ENV_RELEASE ** 2 * 4;
      COLUMNS = (COLUMNS as string).split("+");

      [song_rowLen0, song_rowLen1, song_rowLen2].map((song_rowLen: number) => {
        // Local variables
        let n;
        let t;
        let f;

        // Clear effect state
        let low = 0;
        let band = 0;
        let high;
        let filterActive: boolean | undefined;

        const noteCache: Int32Array[] = [];
        const chnBuf = new Int32Array(song_rowLen * SONG_WORDS);

        const lfoFreq = 2 ** (LFO_FREQ - 9) / song_rowLen;
        const panFreq = (Math.PI * 2 ** (FX_PAN_FREQ - 8)) / song_rowLen;
        const dly = (FX_DELAY_TIME * song_rowLen) & ~1; // Must be an even number

        /** oscillator 0 */
        const osc_sin = (value: number) => Math.sin(value * Math.PI * 2);

        const createNote = NO_INLINE((note: number) => {
          // Re-trig oscillators
          let c1 = 0;
          let c2 = 0;

          // Local variables.
          let o1t: number;
          let o2t: number;

          const noteBuf = new Int32Array(ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE);

          const getnotefreq = (noteFreq: number) => 0.003959503758 * 2 ** ((noteFreq - 256) / 12);

          /** oscillator 1 */
          const osc_square = (value: number) => (value % 1 < 0.5 ? 1 : -1);

          /** oscillator 2 */
          const osc_saw = (value: number) => 2 * (value % 1) - 1;

          /** oscillator 3 */
          const osc_tri = (value: number) => {
            const v2 = (value % 1) * 4;
            return v2 < 2 ? v2 - 1 : 3 - v2;
          };

          const OSC1_WAVEFORM = channelIndex < 2 ? osc_saw : osc_sin;
          const OSC2_WAVEFORM = channelIndex < 2 ? (channelIndex < 1 ? osc_square : osc_tri) : osc_sin;

          // Generate one note (attack + sustain + release)
          for (let j1 = 0, j2 = 0; j1 < ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE; ++j1, ++j2) {
            let e = 1;
            // Envelope
            if (j1 < ENV_ATTACK) {
              e = j1 / ENV_ATTACK;
            } else if (j1 >= ENV_ATTACK + ENV_SUSTAIN) {
              e = (j1 - ENV_ATTACK - ENV_SUSTAIN) / ENV_RELEASE;
              e = (1 - e) * 3 ** ((-ENV_EXP_DECAY / 16) * e);
            }

            if (j2 >= 0) {
              // Switch arpeggio note.
              j2 -= song_rowLen * 4;

              // Calculate note frequencies for the oscillators
              o1t = getnotefreq(note + OSC1_SEMI);
              o2t = getnotefreq(note + OSC2_SEMI) * (channelIndex ? 1 : 1.0072);
            }

            // Add to (mono) channel buffer
            noteBuf[j1] =
              (80 * // Oscillator 1
                (OSC1_WAVEFORM((c1 += o1t! * e ** (OSC1_XENV / 32))) * OSC1_VOL +
                  // Oscillator 2
                  OSC2_WAVEFORM((c2 += o2t! * e ** (OSC2_XENV / 32))) * OSC2_VOL +
                  // Noise oscillator
                  (NOISE_VOL && NOISE_VOL * (2 * Math.random() - 1))) *
                e) |
              0;
          }
          return noteBuf;
        });

        // Patterns
        for (let p = 0; p <= song_endPattern; ++p) {
          // Pattern rows
          for (let row = 0, cp = +song_patterns[channelIndex * 12 + p]!; row < song_patternLen; ++row) {
            // Calculate start sample number for this row in the pattern
            const rowStartSample = (p * song_patternLen + row) * song_rowLen;

            // Generate notes for this pattern row
            for (let col = 0; col < 4; ++col) {
              n = 0;
              if (cp) {
                n = COLUMNS[cp - 1]!.charCodeAt(row + col * song_patternLen) - 40;
                n += n > 0 ? 106 : 0;
              }
              if (n) {
                const noteBuf = noteCache[n] || (noteCache[n] = createNote(n));
                for (let j = 0, i = rowStartSample * 2; j < noteBuf.length; ++j, i += 2) {
                  chnBuf[i] += noteBuf[j]!;
                }
              }
            }

            // Perform effects for this pattern row
            for (let j = 0, rsample; j < song_rowLen; ++j) {
              // Dry mono-sample
              let k = (rowStartSample + j) * 2;
              let lsample = 0;
              rsample = chnBuf[k]!;

              // We only do effects if we have some sound input
              if (rsample || filterActive) {
                // State variable filter
                f = FX_FREQ * ((43.23529 * 3.141592) / 44100);
                if (channelIndex === 1 || channelIndex === 4) {
                  f *= (osc_sin(lfoFreq * k) * LFO_AMT) / 512 + 0.5;
                }
                f = 1.5 * Math.sin(f);
                low += f * band;
                high = (1 - FX_RESONANCE / 255) * (rsample - band) - low;
                band += f * high;
                rsample = channelIndex === 4 ? band : channelIndex === 3 ? high : low;

                // Distortion
                if (!channelIndex) {
                  rsample *= 22 * 1e-5;
                  rsample = rsample < 1 ? (rsample > -1 ? osc_sin(rsample / 4) : -1) : 1;
                  rsample /= 22 * 1e-5;
                }

                // Drive
                rsample *= FX_DRIVE / 32;

                // Is the filter active (i.e. still audiable)?
                filterActive = rsample * rsample > 1e-5;

                // Panning
                t = (Math.sin(panFreq * k) * FX_PAN_AMT) / 512 + 0.5;
                lsample = rsample * (1 - t);
                rsample *= t;
              }

              // Delay is always done, since it does not need sound input
              if (k >= dly) {
                // Left channel = left + right[-p] * t
                lsample += (chnBuf[k - dly + 1]! * FX_DELAY_AMT) / 255;

                // Right channel = right + left[-p] * t
                rsample += (chnBuf[k - dly]! * FX_DELAY_AMT) / 255;
              }

              const mixBufferIndex = (mixIndex + k) >> 1;

              mixBufferA[mixBufferIndex] += (chnBuf[k] = lsample) / 65536;
              mixBufferB[mixBufferIndex] += (chnBuf[++k] = rsample) / 65536;
            }
          }
        }

        mixIndex += song_rowLen * SONG_WORDS;
      });

      if (!--pendingChannels) {
        loadStep(done);
      }
    });

  makeChannel(
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
    "(.15:15:=5:=A:=AF=AFIFIMRMRUY(Y(((((((((((((((((((((((((((((M(M(((((((((((((((((((((((((((((R(R(((((((((((((((((((((((((((((U(U+(059<59<A9<AE<AEHAEHMEHMQMQTY(Y+(5:>A:>AF>AFJAFJMFJMRJMRVMRVY(Y+(:?BFFKNRRWZ^(^((:=@FFILRRUX^(^+Q(M(M(O(Q(R(T(Q(T(R(W(U(T(R(Q(N(W((Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(Y(X]+QN(M(N(M(N(M(N(M((((((((((((((((W(Y(Y(Y(Y(Y(Y(Y(Y(((((((((((((((]",
  );

  makeChannel(
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
    ".(5(.(5(.(5(.(5(.(5(.(5(.(5(.(5+-(5(-(5(-(5(-(5(-(5(-(5(-(5(-(5+,(5(,(5(,(5(,(5(,(5(,(5(,(5(,(5+*(6(*(6(*(6(*(6(*(6(*(6(*(6(*(6+5(E(E(F(H(I(K(H(K(I(N(M(K(I(H(F(A(((((((((((((((((((((((((((((((5(((5(((5(((5(((5(((5(((5(((5+5(6(5(6(5(6(5(6(5((()(((((((((((A(B(A(B(A(B(A(B(A(((5",
  );

  makeChannel(
    255,
    116,
    85,
    255,
    116,
    37,
    14,
    64,
    144,
    73,
    99,
    0,
    136,
    15,
    32,
    0,
    0,
    66,
    6,
    0,
    "9(((9(((9(((9(((9(((9(((9(((9+9(((Q(((Q(((Q",
  );

  makeChannel(
    0,
    140,
    0,
    0,
    140,
    0,
    81,
    64,
    400,
    47,
    55,
    5,
    239,
    135,
    13,
    176,
    5,
    16,
    4,
    187,
    "9(9(9(9(9(9(9(999(9(9(9(999(9(9+9(9(9(9(9(999(9(((((Q",
  );

  makeChannel(
    221,
    128,
    64,
    210,
    128,
    64,
    255,
    64,
    144,
    73,
    79,
    7,
    195,
    15,
    21,
    20,
    0,
    9,
    3,
    64,
    "((((Q(((((((Q(((((((Q(((((((Q+Q((Q((Q((Q((Q((Q((((Q",
  );
});
