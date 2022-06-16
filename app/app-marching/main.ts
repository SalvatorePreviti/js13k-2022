import { camera, camera_update } from "../camera";
import { canvas } from "../canvas";
import "../dev-tools/dev-main";
import { ViewCamera_update } from "../math/view-camera";

import { gl } from "./gl/gl";

import { mainShader } from "./gl/main-shader";
import { primitivesTexture_bind } from "./level/primitives-texture";

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

setInterval(updateWorld, 10);

function updateWorld() {
  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  camera_update(gameTimeDelta);

  // camera.$position.x = 2;
  // camera.$position.z = 30;
  // camera.$position.y = 3;

  // camera.$rotation.y = (Math.sin(performance.now() / 1000) * Math.PI) / 7;

  ViewCamera_update(camera);
}

function render() {
  console.time("render");
  // requestAnimationFrame(render);

  primitivesTexture_bind();

  mainShader(canvas.clientWidth, canvas.clientHeight);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  console.timeEnd("render");
}

requestAnimationFrame(render);
