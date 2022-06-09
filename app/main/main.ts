import "../dev-tools/dev-main";

import { gl, height, width } from "./gl";

import { mainShader } from "./gl/main-shader";
import { primitivesTexture_bind } from "./level/primitives-texture";

function render() {
  console.time("render");
  // requestAnimationFrame(render);

  primitivesTexture_bind();

  mainShader(width, height);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  console.timeEnd("render");
}

requestAnimationFrame(render);
