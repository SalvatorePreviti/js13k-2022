import "./index.css";

import "./dev-tools/dev-main";

if (DEBUG) {
  console.time("boot");
}

import groundTextureSvg from "./groundTexture.svg";

import { buildWorld } from "./game/level";
import { startMainLoop } from "./main-loop";
import { song_numChannels } from "./music/song";
import { soundbox_generate } from "./music/music-player";
import { loadSong } from "./music/audio-context";
import { initFirstBoatModel, initPlayerModel } from "./game/objects";

setTimeout(() => {
  let songLoad = 0;
  let thingsToLoad = 1 + song_numChannels;
  const image = new Image();

  if (DEBUG) {
    console.time("SVG load");
    console.time("song load");
    console.time("load");
  }

  const onThingLoaded = () => {
    h4.innerHTML += ".";
    if (!--thingsToLoad) {
      if (DEBUG) {
        console.timeEnd("load");
      }
      startMainLoop(image);
    }
  };

  const asyncLoadSongChannels = () => {
    if (songLoad < song_numChannels) {
      soundbox_generate(songLoad++);
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

  if (DEBUG) {
    for (let i = 0; i < song_numChannels; ++i) {
      onThingLoaded();
    }
  } else {
    setTimeout(asyncLoadSongChannels, 50);
  }

  NO_INLINE(buildWorld)();

  initPlayerModel();

  if (DEBUG) {
    console.timeEnd("boot");
  }
});
