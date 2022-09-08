import "./index.css";

import "./dev-tools/dev-main";

if (DEBUG) {
  console.time("boot");
}

import groundTextureSvg from "./groundTexture.svg";

import { buildWorld } from "./game/level";
import { newModel } from "./game/scene";
import { startMainLoop } from "./main-loop";

requestAnimationFrame(() => {
  const image = new Image();
  image.onload = image.onerror = () => {
    startMainLoop(image);
  };
  image.src = groundTextureSvg;

  newModel(buildWorld);

  if (DEBUG) {
    console.timeEnd("boot");
  }
});
