import "./index.css";

import "./dev-tools/dev-main";

if (DEBUG) {
  console.time("boot");
}

import groundTextureSvg from "./groundTexture.svg";

import { build_life_the_universe_and_everything } from "./game/level";
import { startMainLoop } from "./main-loop";
import { loadGame } from "./game/world-state";
import { initTriangleBuffers } from "./game/triangle-buffers";
import { loadSong } from "./music/music-player";
import { loadStep } from "./load-step";

loadStep(() => {
  let loadStatus = 0;
  const image = new Image();

  if (DEBUG) {
    console.time("load");
  }

  const end = () => {
    if (++loadStatus === 2) {
      if (DEBUG) {
        console.timeEnd("load");
      }

      if (DEBUG) {
        console.time("startMainLoop");
      }

      startMainLoop(image);

      if (DEBUG) {
        console.timeEnd("startMainLoop");
      }
    }
  };

  image.onload = image.onerror = end;
  image.src = groundTextureSvg;

  const songLoaded = () => {
    loadStep(() => {
      initTriangleBuffers();
      loadStep(end);
      loadGame();
    });
    build_life_the_universe_and_everything();
  };

  if (DEBUG_FLAG1) {
    songLoaded();
  } else {
    NO_INLINE(loadSong)(songLoaded);
  }

  if (DEBUG) {
    console.timeEnd("boot");
  }
});
