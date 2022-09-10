import "./index.css";

import "./dev-tools/dev-main";

if (DEBUG) {
  console.time("boot");
}

import groundTextureSvg from "./groundTexture.svg";

import { buildWorld } from "./game/level";
import { newModel } from "./game/scene";
import { startMainLoop } from "./main-loop";
import { song_numChannels, song_songData } from "./music/song";
import { soundbox_generate } from "./music/music-player";
import { loadSong } from "./music/audio-context";

requestAnimationFrame(() => {
  let songLoad = 0;
  let thingsToLoad = 1 + song_numChannels;
  const image = new Image();

  if (DEBUG) {
    console.time("SVG load");
    console.time("song load");
    console.time("load");
  }

  const onThingLoaded = () => {
    hL.innerHTML += ".";
    if (!--thingsToLoad) {
      console.timeEnd("load");
      startMainLoop(image);
    }
  };

  const asyncLoadSongChannels = () => {
    if (songLoad < song_numChannels) {
      soundbox_generate(song_songData[songLoad++]!);
      setTimeout(asyncLoadSongChannels);
    } else {
      loadSong();
      if (DEBUG) {
        console.timeEnd("song load");
      }
    }
    onThingLoaded();
  };

  image.onload = image.onerror = () => {
    onThingLoaded();
    if (DEBUG) {
      console.timeEnd("SVG load");
    }
  };
  image.src = groundTextureSvg;

  setTimeout(asyncLoadSongChannels, 50);

  newModel(buildWorld);

  if (DEBUG) {
    console.timeEnd("boot");
  }
});
