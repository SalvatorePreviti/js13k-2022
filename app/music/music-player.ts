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
// This player plays only the game song and is modified.
// This makes this version not compatible with default soundbox songs.

import {
  song_endPattern,
  song_patternLen,
  song_patterns,
  song_instruments,
  song_numWords,
  getSegmentNumWords,
  song_rowLen0,
  song_rowLen1,
  song_rowLen2,
} from "./song";

const getnotefreq = (n: number) => 0.003959503758 * 2 ** ((n - 256) / 12);

/** oscillator 0 */
const osc_sin = (value: number) => Math.sin(value * Math.PI * 2);

/** oscillator 1 */
const osc_square = (value: number) => (value % 1 < 0.5 ? 1 : -1);

/** oscillator 2 */
const osc_saw = (value: number) => 2 * (value % 1) - 1;

/** oscillator 3 */
const osc_tri = (value: number) => {
  const v2 = (value % 1) * 4;
  return v2 < 2 ? v2 - 1 : 3 - v2;
};

// Work buffer
export const soundbox_mixbuffer = new Int32Array(song_numWords);

/**
 * Generate audio data for a single track/channel.
 * Have to be repeated from 0 to song_numChannels-1
 * @returns
 */
export const soundbox_generate = (channelIndex: number) => {
  let mixIndex = 0;
  let [
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
  ] = song_instruments[channelIndex]!;

  ENV_RELEASE = (ENV_RELEASE * ENV_RELEASE * 4) as any;

  for (const song_rowLen of [song_rowLen0, song_rowLen1, song_rowLen2]) {
    // Local variables
    let n;
    let t;
    let f;

    const chnBuf = new Int32Array(getSegmentNumWords(song_rowLen));

    // Clear effect state
    let low = 0;
    let band = 0;
    let high;
    let filterActive: boolean | undefined;

    // Clear note cache.
    const noteCache = [];

    // Put performance critical instrument properties in local variables
    const lfoFreq = 2 ** (LFO_FREQ - 9) / song_rowLen;
    const panFreq = (Math.PI * 2 ** (FX_PAN_FREQ - 8)) / song_rowLen;
    const dly = (FX_DELAY_TIME * song_rowLen) & ~1; // Must be an even number

    const createNote = (note: number) => {
      const OSC1_WAVEFORM = channelIndex < 2 ? osc_saw : osc_sin; // mOscillators[0|2]
      const OSC2_WAVEFORM = channelIndex < 2 ? (channelIndex < 1 ? osc_square : osc_tri) : osc_sin;

      const noteBuf = new Int32Array(ENV_ATTACK + ENV_SUSTAIN + ENV_RELEASE);

      // Re-trig oscillators
      let c1 = 0;
      let c2 = 0;

      // Local variables.
      let o1t: number;
      let o2t: number;

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
          o2t = getnotefreq(note + OSC2_SEMI) * (1 + (channelIndex ? 0 : 0.0008 * 9));
        }

        // Add to (mono) channel buffer
        noteBuf[j1] =
          (80 * // Oscillator 1
            (OSC1_WAVEFORM((c1 += o1t! * e ** (OSC1_XENV / 32))) * OSC1_VOL +
              // Oscillator 2
              OSC2_WAVEFORM((c2 += o2t! * e ** (OSC2_XENV / 32))) * OSC2_VOL +
              // Noise oscillator
              (NOISE_VOL ? (Math.random() * 2 - 1) * NOISE_VOL : 0)) *
            e) |
          0;
      }
      return noteBuf;
    };

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

          soundbox_mixbuffer[mixIndex + k] += chnBuf[k] = lsample;
          ++k;
          soundbox_mixbuffer[mixIndex + k] += chnBuf[k] = rsample;
        }
      }
    }

    mixIndex += chnBuf.length;
  }
};
