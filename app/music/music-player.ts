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

// Source code of the original player was manually modified to reduce bundle size.
// This makes this version not compatible with default soundbox songs.

import type { song_songData } from "./song";
import { song_endPattern, song_rowLen, song_patternLen } from "./song";

const arpInterval = song_rowLen * 4;

export const song_numWords = song_rowLen * song_patternLen * (song_endPattern + 1) * 2;

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

// Array of oscillator functions
const _oscillators = [osc_sin, osc_square, osc_saw, osc_tri] as const;

// Work buffer
export const soundbox_mixbuffer = new Int32Array(song_numWords);

/**
 * Generate audio data for a single track/channel.
 * Have to be repeated from 0 to song_numChannels-1
 * @returns
 */
export const soundbox_generate = (channel: ArrayElement<typeof song_songData>) => {
  const [instrument, patterns, columns] = channel;

  const createNote = function (note: number) {
    const osc1 = _oscillators[instrument[0]]!; // mOscillators[0|2]
    const o1vol = instrument[1];
    const o1xenv = instrument[3] / 32;
    const osc2 = _oscillators[instrument[4]]!; // mOscillators[0|1|3]
    const o2vol = instrument[5];
    const o2xenv = instrument[8] / 32;
    const noiseVol = instrument[9];
    const attack = instrument[10] ** 2 * 4;
    const sustain = instrument[11] ** 2 * 4;
    const release = instrument[12] ** 2 * 4;
    const expDecay = -instrument[13] / 16;
    let arp: number = instrument[14];

    const noteBuf = new Int32Array(attack + sustain + release);

    // Re-trig oscillators
    let c1 = 0;
    let c2 = 0;

    // Local variables.
    let e: number;
    let o1t: number;
    let o2t: number;

    // Generate one note (attack + sustain + release)
    for (let j1 = 0, j2 = 0; j1 < attack + sustain + release; j1++, j2++) {
      if (j2 >= 0) {
        // Switch arpeggio note.
        arp = (arp >> 8) | ((arp & 255) << 4);
        j2 -= arpInterval;

        // Calculate note frequencies for the oscillators
        o1t = getnotefreq(note + (arp & 15) + instrument[2]);
        o2t = getnotefreq(note + (arp & 15) + instrument[6]) * (1 + 0.0008 * instrument[7]);
      }

      // Envelope
      e = 1;
      if (j1 < attack) {
        e = j1 / attack;
      } else if (j1 >= attack + sustain) {
        e = (j1 - attack - sustain) / release;
        e = (1 - e) * 3 ** (expDecay * e);
      }

      // Add to (mono) channel buffer
      noteBuf[j1] =
        (80 * // Oscillator 1
          (osc1((c1 += o1t! * e ** o1xenv)) * o1vol +
            // Oscillator 2
            osc2((c2 += o2t! * e ** o2xenv)) * o2vol +
            // Noise oscillator
            (noiseVol ? (Math.random() * 2 - 1) * noiseVol : 0)) *
          e) |
        0;
    }
    return noteBuf;
  };

  // Local variables
  let n;
  let t;
  let f;

  // Put performance critical items in local variables
  const chnBuf = new Int32Array(song_numWords);
  const patternLen = song_patternLen;

  // Clear effect state
  let low = 0;
  let band = 0;
  let high;
  let filterActive: boolean | undefined;

  // Clear note cache.
  const noteCache = [];

  // Patterns
  for (let p = 0, cp; p <= song_endPattern; ++p) {
    cp = patterns[p]!;

    // Pattern rows
    for (let row = 0; row < patternLen; ++row) {
      // Put performance critical instrument properties in local variables
      const lfoAmt = instrument[17] / 512;
      const lfoFreq = 2 ** (instrument[18] - 9) / song_rowLen;
      const fxLFO = instrument[19];
      const fxFilter = instrument[20];
      const fxFreq = (instrument[21] * 43.23529 * 3.141592) / 44100;
      const q = 1 - instrument[22] / 255;
      const dist = instrument[23] * 1e-5;
      const drive = instrument[24] / 32;
      const panAmt = instrument[25] / 512;
      const panFreq = (Math.PI * 2 ** (instrument[26] - 8)) / song_rowLen;
      const dlyAmt = instrument[27] / 255;
      const dly = (instrument[28] * song_rowLen) & ~1; // Must be an even number

      // Calculate start sample number for this row in the pattern
      const rowStartSample = (p * patternLen + row) * song_rowLen;

      // Generate notes for this pattern row
      for (let col = 0; col < 4; ++col) {
        n = cp ? columns[cp - 1]![row + col * patternLen] : 0;
        if (n) {
          const noteBuf = noteCache[n] || (noteCache[n] = createNote(n));
          for (let j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2) {
            chnBuf[i] += noteBuf[j]!;
          }
        }
      }

      // Perform effects for this pattern row
      for (let j = 0, rsample; j < song_rowLen; j++) {
        let lsample = 0;
        // Dry mono-sample
        const k = (rowStartSample + j) * 2;
        rsample = chnBuf[k]!;

        // We only do effects if we have some sound input
        if (rsample || filterActive) {
          // State variable filter
          f = fxFreq;
          if (fxLFO) {
            f *= osc_sin(lfoFreq * k) * lfoAmt + 0.5;
          }
          f = 1.5 * Math.sin(f);
          low += f * band;
          high = q * (rsample - band) - low;
          band += f * high;
          rsample = fxFilter === 3 ? band : fxFilter === 1 ? high : low;

          // Distortion
          if (dist) {
            rsample *= dist;
            rsample = rsample < 1 ? (rsample > -1 ? osc_sin(rsample / 4) : -1) : 1;
            rsample /= dist;
          }

          // Drive
          rsample *= drive;

          // Is the filter active (i.e. still audiable)?
          filterActive = rsample * rsample > 1e-5;

          // Panning
          t = Math.sin(panFreq * k) * panAmt + 0.5;
          lsample = rsample * (1 - t);
          rsample *= t;
        }

        // Delay is always done, since it does not need sound input
        if (k >= dly) {
          // Left channel = left + right[-p] * t
          lsample += chnBuf[k - dly + 1]! * dlyAmt;

          // Right channel = right + left[-p] * t
          rsample += chnBuf[k - dly]! * dlyAmt;
        }

        // Store in stereo channel buffer (needed for the delay effect)
        chnBuf[k] = lsample | 0;
        chnBuf[k + 1] = rsample | 0;

        // ...and add to stereo mix buffer
        soundbox_mixbuffer[k] += lsample | 0;
        soundbox_mixbuffer[k + 1] += rsample | 0;
      }
    }
  }
};
