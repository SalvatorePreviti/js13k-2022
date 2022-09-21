import "./index.css";

import "./dev-tools/dev-main";

if (DEBUG) {
  console.time("boot");
}

import groundTextureSvg from "./groundTexture.svg";

import { build_life_the_universe_and_everything } from "./game/level";
import { startMainLoop } from "./main-loop";
import { initTriangleBuffers } from "./game/triangle-buffers";
import { loadStep } from "./load-step";
import { loadSong } from "./music/music-player";
import { initPage } from "./page";

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

      NO_INLINE(initPage)();
    }
  };

  image.onload = image.onerror = end;
  image.src = groundTextureSvg;

  NO_INLINE(loadSong)(() => {
    loadStep(() => {
      initTriangleBuffers();
      loadStep(end);
    });
    build_life_the_universe_and_everything();
  });

  if (DEBUG) {
    console.timeEnd("boot");
  }
});
