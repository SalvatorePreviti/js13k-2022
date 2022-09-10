import { song_songData } from "./app/music/song";

let s = "";

for (const channel of song_songData) {
  const pattern = channel[1];
  for (let i = 0; i < 12; ++i) {
    s += `${pattern[i] || 0}`;
  }
}
console.log(s);

// console.log(song_songData);
