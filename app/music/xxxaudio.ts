import { song_numChannels } from "./song";
import { soundbox_createAudioBuffer, soundbox_generate } from "./music-player";
// import { song } from "./song";

export const makePlaye = () => {
  if (DEBUG) {
    console.time("audio");
  }

  const audioCtx = new window.AudioContext();

  for (let i = 0; i < song_numChannels; ++i) {
    soundbox_generate(i);
  }

  // const audioCtx = new AudioContext();

  const audioBuffer = soundbox_createAudioBuffer(audioCtx);
  // Get an AudioBufferSourceNode.
  // This is the AudioNode to use when we want to play an AudioBuffer
  const source = audioCtx.createBufferSource();
  // set the buffer in the AudioBufferSourceNode
  source.buffer = audioBuffer;
  // connect the AudioBufferSourceNode to the
  // destination so we can hear the sound
  source.connect(audioCtx.destination);
  // start the source playing
  source.start();

  if (DEBUG) {
    console.timeEnd("audio");
  }

  // console.log("should play now");
  // const source = audioCtx.createBufferSource();
  // // set the buffer in the AudioBufferSourceNode
  // source.buffer = audioBuffer;
  // // connect the AudioBufferSourceNode to the
  // // destination so we can hear the sound
  // source.connect(audioCtx.destination);
  // // start the source playing
  // // source.start();
  // source.start();
  // // Fill the buffer with white noise;
  // // just random values between -1.0 and 1.0
  // for (let channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  //   // This gives us the actual ArrayBuffer that contains the data
  //   const nowBuffering = myArrayBuffer.getChannelData(channel);
  //   for (let i = 0; i < myArrayBuffer.length; i++) {
  //     // Math.random() is in [0; 1.0]
  //     // audio needs to be in [-1.0; 1.0]
  //     nowBuffering[i] = Math.random() * 2 - 1;
  //   }
  // }
};
