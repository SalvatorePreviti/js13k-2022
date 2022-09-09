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

"use strict";

// Some general notes and recommendations:
//  * This code uses modern ECMAScript features, such as ** instead of
//    Math.pow(). You may have to modify the code to make it work on older
//    browsers.
//  * If you're not using all the functionality (e.g. not all oscillator types,
//    or certain effects), you can reduce the size of the player routine even
//    further by deleting the code.

export const CPlayer = function () {
  //--------------------------------------------------------------------------
  // Private methods
  //--------------------------------------------------------------------------

  // Oscillators
  const osc_sin = function (value) {
    return Math.sin(value * 6.283184);
  };

  const osc_saw = function (value) {
    return 2 * (value % 1) - 1;
  };

  const osc_square = function (value) {
    return value % 1 < 0.5 ? 1 : -1;
  };

  const osc_tri = function (value) {
    const v2 = (value % 1) * 4;
    if (v2 < 2) {
      return v2 - 1;
    }
    return 3 - v2;
  };

  const getnotefreq = function (n) {
    // 174.61.. / 44100 = 0.003959503758 (F3)
    return 0.003959503758 * 2 ** ((n - 128) / 12);
  };

  const createNote = function (instr, n, rowLen) {
    const osc1 = mOscillators[instr.i[0]];
    const o1vol = instr.i[1];
    const o1xenv = instr.i[3] / 32;
    const osc2 = mOscillators[instr.i[4]];
    const o2vol = instr.i[5];
    const o2xenv = instr.i[8] / 32;
    const noiseVol = instr.i[9];
    const attack = instr.i[10] * instr.i[10] * 4;
    const sustain = instr.i[11] * instr.i[11] * 4;
    const release = instr.i[12] * instr.i[12] * 4;
    const releaseInv = 1 / release;
    const expDecay = -instr.i[13] / 16;
    let arp = instr.i[14];
    const arpInterval = rowLen * 2 ** (2 - instr.i[15]);

    const noteBuf = new Int32Array(attack + sustain + release);

    // Re-trig oscillators
    let c1 = 0;
    let c2 = 0;

    // Local variables.
    let j;
    let j2;
    let e;
    let t;
    let rsample;
    let o1t;
    let o2t;

    // Generate one note (attack + sustain + release)
    for (j = 0, j2 = 0; j < attack + sustain + release; j++, j2++) {
      if (j2 >= 0) {
        // Switch arpeggio note.
        arp = (arp >> 8) | ((arp & 255) << 4);
        j2 -= arpInterval;

        // Calculate note frequencies for the oscillators
        o1t = getnotefreq(n + (arp & 15) + instr.i[2] - 128);
        o2t = getnotefreq(n + (arp & 15) + instr.i[6] - 128) * (1 + 0.0008 * instr.i[7]);
      }

      // Envelope
      e = 1;
      if (j < attack) {
        e = j / attack;
      } else if (j >= attack + sustain) {
        e = (j - attack - sustain) * releaseInv;
        e = (1 - e) * 3 ** (expDecay * e);
      }

      // Oscillator 1
      c1 += o1t * e ** o1xenv;
      rsample = osc1(c1) * o1vol;

      // Oscillator 2
      c2 += o2t * e ** o2xenv;
      rsample += osc2(c2) * o2vol;

      // Noise oscillator
      if (noiseVol) {
        rsample += (2 * Math.random() - 1) * noiseVol;
      }

      // Add to (mono) channel buffer
      noteBuf[j] = (80 * rsample * e) | 0;
    }

    return noteBuf;
  };

  //--------------------------------------------------------------------------
  // Private members
  //--------------------------------------------------------------------------

  // Array of oscillator functions
  var mOscillators = [osc_sin, osc_square, osc_saw, osc_tri];

  // Private variables set up by init()
  let mSong;
  let mLastRow;
  let mCurrentCol;
  let mNumWords;
  let mMixBuf;

  //--------------------------------------------------------------------------
  // Initialization
  //--------------------------------------------------------------------------

  this.init = function (song) {
    // Define the song
    mSong = song;

    // Init iteration state variables
    mLastRow = song.endPattern;
    mCurrentCol = 0;

    // Prepare song info
    mNumWords = song.rowLen * song.patternLen * (mLastRow + 1) * 2;

    // Create work buffer (initially cleared)
    mMixBuf = new Int32Array(mNumWords);
  };

  //--------------------------------------------------------------------------
  // Public methods
  //--------------------------------------------------------------------------

  // Generate audio data for a single track
  this.generate = function () {
    console.log("GENERATE");
    // Local variables
    let i;
    let j;
    let b;
    let p;
    let row;
    let col;
    let n;
    let cp;
    let k;
    let t;
    let lfor;
    let e;
    let x;
    let rsample;
    let rowStartSample;
    let f;
    let da;

    // Put performance critical items in local variables
    const chnBuf = new Int32Array(mNumWords);
    const instr = mSong.songData[mCurrentCol];
    const rowLen = mSong.rowLen;
    const patternLen = mSong.patternLen;

    // Clear effect state
    let low = 0;
    let band = 0;
    let high;
    let lsample;
    let filterActive = false;

    // Clear note cache.
    let noteCache = [];

    // Patterns
    for (p = 0; p <= mLastRow; ++p) {
      cp = instr.p[p];

      // Pattern rows
      for (row = 0; row < patternLen; ++row) {
        // Execute effect command.
        const cmdNo = cp ? instr.c[cp - 1].f[row] : 0;
        if (cmdNo) {
          instr.i[cmdNo - 1] = instr.c[cp - 1].f[row + patternLen] || 0;

          // Clear the note cache since the instrument has changed.
          if (cmdNo < 17) {
            noteCache = [];
          }
        }

        // Put performance critical instrument properties in local variables
        const oscLFO = mOscillators[instr.i[16]];
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
          n = cp ? instr.c[cp - 1].n[row + col * patternLen] : 0;
          if (n) {
            if (!noteCache[n]) {
              noteCache[n] = createNote(instr, n, rowLen);
            }

            // Copy note from the note cache
            const noteBuf = noteCache[n];
            for (j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2) {
              chnBuf[i] += noteBuf[j];
            }
          }
        }

        // Perform effects for this pattern row
        for (j = 0; j < rowLen; j++) {
          // Dry mono-sample
          k = (rowStartSample + j) * 2;
          rsample = chnBuf[k];

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
            lsample += chnBuf[k - dly + 1] * dlyAmt;

            // Right channel = right + left[-p] * t
            rsample += chnBuf[k - dly] * dlyAmt;
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

    // Next iteration. Return progress (1.0 == done!).
    mCurrentCol++;
    return mCurrentCol / mSong.numChannels;
  };

  // Create a AudioBuffer from the generated audio data
  this.createAudioBuffer = function (context) {
    console.log("CPLAYER createAudioBuffer");
    const buffer = context.createBuffer(2, mNumWords / 2, 44100);
    for (let i = 0; i < 2; i++) {
      const data = buffer.getChannelData(i);
      for (let j = i; j < mNumWords; j += 2) {
        data[j >> 1] = mMixBuf[j] / 65536;
      }
    }
    return buffer;
  };

  // Create a WAVE formatted Uint8Array from the generated audio data
  this.createWave = function () {
    // Create WAVE header
    const headerLen = 44;
    const l1 = headerLen + mNumWords * 2 - 8;
    const l2 = l1 - 36;
    const wave = new Uint8Array(headerLen + mNumWords * 2);
    wave.set([
      82,
      73,
      70,
      70,
      l1 & 255,
      (l1 >> 8) & 255,
      (l1 >> 16) & 255,
      (l1 >> 24) & 255,
      87,
      65,
      86,
      69,
      102,
      109,
      116,
      32,
      16,
      0,
      0,
      0,
      1,
      0,
      2,
      0,
      68,
      172,
      0,
      0,
      16,
      177,
      2,
      0,
      4,
      0,
      16,
      0,
      100,
      97,
      116,
      97,
      l2 & 255,
      (l2 >> 8) & 255,
      (l2 >> 16) & 255,
      (l2 >> 24) & 255,
    ]);

    // Append actual wave data
    for (let i = 0, idx = headerLen; i < mNumWords; ++i) {
      // Note: We clamp here
      let y = mMixBuf[i];
      y = y < -32767 ? -32767 : y > 32767 ? 32767 : y;
      wave[idx++] = y & 255;
      wave[idx++] = (y >> 8) & 255;
    }

    // Return the WAVE formatted typed array
    return wave;
  };

  // Get n samples of wave data at time t [s]. Wave data in range [-2,2].
  this.getData = function (t, n) {
    const i = 2 * Math.floor(t * 44100);
    const d = new Array(n);
    for (let j = 0; j < 2 * n; j += 1) {
      const k = i + j;
      d[j] = t > 0 && k < mMixBuf.length ? mMixBuf[k] / 32768 : 0;
    }
    return d;
  };
};
