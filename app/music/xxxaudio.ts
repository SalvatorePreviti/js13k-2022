import { song_numChannels, song_songData } from "./song";
import { soundbox_createAudioBuffer, soundbox_generate } from "./music-player";
// import { song } from "./song";

export const makePlaye = () => {
  if (DEBUG) {
    console.time("audio");
  }

  const audioCtx = new AudioContext();

  for (let i = 0; i < song_numChannels; ++i) {
    soundbox_generate(song_songData[i]!);
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
};
