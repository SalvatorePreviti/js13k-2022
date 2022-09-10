import { song_instruments } from "./app/music/song";

// for (const channel of song_instruments) {
//   for (let i = 0; i < channel.length; i++) {
//     if (Array.isArray(channel[i])) {
//       console.log(i);
//     }
//   }
// }
// console.log(s);

let s = "";
for (let i = 0; i < 29; ++i) {
  s += `instrument${i}, `;
}

console.log(s);

// console.log(song_songData);
