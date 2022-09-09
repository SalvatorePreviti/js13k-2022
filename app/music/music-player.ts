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

import { song_endPattern, song_rowLen, song_patternLen, song_songData } from "./song";
import { osc_sin, osc_square, osc_saw, osc_tri } from "./oscillators";

//--------------------------------------------------------------------------
// Private methods
//--------------------------------------------------------------------------

// Array of oscillator functions
const mOscillators = [osc_sin, osc_square, osc_saw, osc_tri];

const getnotefreq = (n: number) => 0.003959503758 * 2 ** ((n - 128) / 12);

const createNote = function (instr: ArrayElement<typeof song_songData>["i"], n: number, rowLen: number) {
  const osc1 = mOscillators[instr[0]]!; // mOscillators[0|2]
  const o1vol = instr[1];
  const o1xenv = instr[3] / 32;
  const osc2 = mOscillators[instr[4]]!; // mOscillators[0|1|3]
  const o2vol = instr[5];
  const o2xenv = instr[8] / 32;
  const noiseVol = instr[9];
  const attack = instr[10] * instr[10] * 4;
  const sustain = instr[11] * instr[11] * 4;
  const release = instr[12] * instr[12] * 4;
  const expDecay = -instr[13] / 16;
  let arp: number = instr[14];
  const arpInterval = rowLen * 2 ** (2 - instr[15]);

  const noteBuf = new Int32Array(attack + sustain + release);

  // Re-trig oscillators
  let c1 = 0;
  let c2 = 0;

  // Local variables.
  let e: number;
  let o1t: number;
  let o2t: number;

  // Generate one note (attack + sustain + release)
  for (let j = 0, j2 = 0; j < attack + sustain + release; j++, j2++) {
    if (j2 >= 0) {
      // Switch arpeggio note.
      arp = (arp >> 8) | ((arp & 255) << 4);
      j2 -= arpInterval;

      // Calculate note frequencies for the oscillators
      o1t = getnotefreq(n + (arp & 15) + instr[2] - 128);
      o2t = getnotefreq(n + (arp & 15) + instr[6] - 128) * (1 + 0.0008 * instr[7]);
    }

    // Envelope
    e = 1;
    if (j < attack) {
      e = j / attack;
    } else if (j >= attack + sustain) {
      e = (j - attack - sustain) / release;
      e = (1 - e) * 3 ** (expDecay * e);
    }

    // Add to (mono) channel buffer
    noteBuf[j] =
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

//--------------------------------------------------------------------------
// Private members
//--------------------------------------------------------------------------

const mNumWords = song_rowLen * song_patternLen * (song_endPattern + 1) * 2;

// Work buffer
const mMixBuf = new Int32Array(mNumWords);

//--------------------------------------------------------------------------
// Public methods
//--------------------------------------------------------------------------

//
/**
 * Generate audio data for a single track/channel.
 * Have to be repeated from 0 to song_numChannels-1
 * @returns
 */
export const soundbox_generate = (channel: number) => {
  // Local variables
  let i;
  let j;
  let p;
  let row;
  let col;
  let n;
  let cp;
  let k;
  let t;
  let rsample;
  let rowStartSample;
  let f;

  // Put performance critical items in local variables
  const chnBuf = new Int32Array(mNumWords);
  const instr = song_songData[channel]!;
  const rowLen = song_rowLen;
  const patternLen = song_patternLen;

  // Clear effect state
  let low = 0;
  let band = 0;
  let high;
  let lsample;
  let filterActive = false;

  // Clear note cache.
  const noteCache = [];

  // Patterns
  for (p = 0; p <= song_endPattern; ++p) {
    cp = instr.p[p]!;

    // Pattern rows
    for (row = 0; row < patternLen; ++row) {
      // Execute effect command.
      // const cmdNo = cp ? instr.c[cp - 1]!.f[row] : 0;
      // if (cmdNo) {
      //   instr.i[cmdNo - 1] = instr.c[cp - 1]!.f[row + patternLen] || 0;

      //   // Clear the note cache since the instrument has changed.
      //   if (cmdNo < 17) {
      //     noteCache = [];
      //   }
      // }

      // Put performance critical instrument properties in local variables
      const oscLFO = mOscillators[instr.i[16]]!;
      const lfoAmt = instr.i[17] / 512;
      const lfoFreq = 2 ** (instr.i[18] - 9) / rowLen;
      const fxLFO = instr.i[19];
      const fxFilter = instr.i[20];
      const fxFreq = (instr.i[21] * 43.23529 * 3.141592) / 44100;
      const q = 1 - instr.i[22] / 255;
      const dist = instr.i[23] * 1e-5;
      const drive = instr.i[24] / 32;
      const panAmt = instr.i[25] / 512;
      const panFreq = (6.283184 * 2 ** (instr.i[26] - 9)) / rowLen;
      const dlyAmt = instr.i[27] / 255;
      const dly = (instr.i[28] * rowLen) & ~1; // Must be an even number

      // Calculate start sample number for this row in the pattern
      rowStartSample = (p * patternLen + row) * rowLen;

      // Generate notes for this pattern row
      for (col = 0; col < 4; ++col) {
        n = cp ? instr.c[cp - 1]![row + col * patternLen] : 0;
        if (n) {
          const noteBuf = noteCache[n] || (noteCache[n] = createNote(instr.i, n, rowLen));
          for (j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2) {
            chnBuf[i] += noteBuf[j]!;
          }
        }
      }

      // Perform effects for this pattern row
      for (j = 0; j < rowLen; j++) {
        // Dry mono-sample
        k = (rowStartSample + j) * 2;
        rsample = chnBuf[k]!;

        // We only do effects if we have some sound input
        if (rsample || filterActive) {
          // State variable filter
          f = fxFreq;
          if (fxLFO) {
            f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;
          }
          f = 1.5 * Math.sin(f);
          low += f * band;
          high = q * (rsample - band) - low;
          band += f * high;
          rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;

          // Distortion
          if (dist) {
            rsample *= dist;
            rsample = rsample < 1 ? (rsample > -1 ? osc_sin(rsample * 0.25) : -1) : 1;
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
        } else {
          lsample = 0;
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
        mMixBuf[k] += lsample | 0;
        mMixBuf[k + 1] += rsample | 0;
      }
    }
  }
};

// Create a AudioBuffer from the generated audio data
export const soundbox_createAudioBuffer = (audioContext: AudioContext) => {
  const buffer = audioContext.createBuffer(2, mNumWords / 2, 44100);
  for (let i = 0; i < 2; i++) {
    const data = buffer.getChannelData(i);
    for (let j = i; j < mNumWords; j += 2) {
      data[j >> 1] = mMixBuf[j]! / 65536;
    }
  }
  return buffer;
};
