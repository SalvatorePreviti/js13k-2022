import { soundbox_mixbuffer } from "./music-player";
import { song_numWords } from "./song";

export const audioContext = new AudioContext();

export const songAudioSource = audioContext.createBufferSource();

export const loadSong = () => {
  // set the buffer in the AudioBufferSourceNode
  // Create a new AudioBuffer
  const buffer = audioContext.createBuffer(2, song_numWords / 2, 44100);

  for (let i = 0; i < 2; i++) {
    for (let j = i, data = buffer.getChannelData(i); j < song_numWords; j += 2) {
      data[j >> 1] = soundbox_mixbuffer[j]! / 65536;
    }
  }

  // Load the buffer into the audio source
  songAudioSource.buffer = buffer;

  // Loop forever
  songAudioSource.loop = true;
};
