import "./index.css";

import "./dev-tools/dev-main";

if (DEBUG) {
  console.time("boot");
}

import groundTextureSvg from "./groundTexture.svg";
import { build_life_the_universe_and_everything } from "./game/level";
import { startMainLoop } from "./main-loop";
import { loadGame } from "./game/world-state";
import { loadStep } from "./load-step";
import { loadSong } from "./music/music-player";
import { initTriangleBuffers } from "./game/triangle-buffers";

loadStep(() => {
  const image = new Image();

  if (DEBUG) {
    console.time("load");
  }

  let loadStatus = 0;

  const end = () => {
    if (++loadStatus === 2) {
      if (DEBUG) {
        console.timeEnd("load");
      }

      if (DEBUG) {
        console.time("startMainLoop");
      }

      NO_INLINE(startMainLoop)(image);

      if (DEBUG) {
        console.timeEnd("startMainLoop");
      }
    }
  };

  image.onerror = image.onload = end;
  image.src = groundTextureSvg;

  const songLoaded = () => {
    loadStep(() => {
      initTriangleBuffers();
      loadGame();
      loadStep(end);
    });
    build_life_the_universe_and_everything();
  };

  if (DEBUG && DEBUG_FLAG1) {
    songLoaded();
  } else {
    NO_INLINE(loadSong)(songLoaded);
  }

  if (DEBUG) {
    console.timeEnd("boot");
  }
});
