import "./dev-tools/dev-main";
import "./index.css";
import vsSource from "./shaders/vertex.vert";
import fsSource from "./shaders/fragment.frag";

import { gl } from "./gl";
import { triangles_attributes } from "./geometry/triangles-render";

// import { debug_lines_draw } from "./debug-lines-render";
import { camera_update } from "./camera-update";
import { camera_updateView, camera_view } from "./camera";
import { sceneTriangles, loadScene } from "./level/scene";
import { camera_firstPersonPerspective, camera_projection, fieldOfView, zFar, zNear } from "./camera-projection";
import { initShaderProgram } from "./shader-utils";
import { CSM, light_dir, TOTAL_SPLITS } from "./cascaded/cascaded";
import { integers } from "./math/math";

loadScene();

// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(vsSource, fsSource);

const projectionMatrixLoc = gl.getUniformLocation(shaderProgram, "projectionMatrix");
const cascadedSplitsLoc = gl.getUniformLocation(shaderProgram, "cascadedSplits")!;
const inverseViewMatrixLoc = gl.getUniformLocation(shaderProgram, "inverseViewMatrix")!;
const lightDirectionLoc = gl.getUniformLocation(shaderProgram, "lightDirection")!;
const modelViewMatrix2Loc = gl.getUniformLocation(shaderProgram, "modelViewMatrix2");

const viewProjecMatricesLocs = integers(TOTAL_SPLITS).map(
  (i) => gl.getUniformLocation(shaderProgram, `viewProjecMatrices[${i}]`)!,
);

const depthTexturesLocs = integers(TOTAL_SPLITS).map(
  (i) => gl.getUniformLocation(shaderProgram, `depthTextures[${i}]`)!,
);

// const viewMatrix = mat4_setIdentityValues(mat4_new_zero());

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

const cascaded = new CSM();
cascaded.init(4096);

const draw = () => {
  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  camera_update(gameTimeDelta);

  camera_updateView();

  gl.clearColor(0, 0, 0, 1); // Clear to black, fully opaque
  gl.clearDepth(1); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.enable(gl.CULL_FACE); // Don't render triangle backs
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;

  camera_firstPersonPerspective(fieldOfView, aspect, zNear, zFar);

  triangles_attributes();

  // *** SHADOWMAP ***

  cascaded.renderCSM(() => {
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  });

  // *** MAIN RENDER ***
  gl.cullFace(gl.BACK);

  // Clear the canvas before we start drawing on it.

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // Make the canvas cover the screen
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Tell WebGL to use our program when drawing

  gl.useProgram(shaderProgram);

  // Set the shader uniforms

  gl.uniformMatrix4fv(projectionMatrixLoc, false, camera_projection);

  gl.uniformMatrix4fv(modelViewMatrix2Loc, false, camera_view.toFloat32Array());

  gl.uniformMatrix4fv(inverseViewMatrixLoc, false, camera_view.inverse().toFloat32Array());

  gl.uniform4f(
    cascadedSplitsLoc,
    cascaded.shadowSplits[0]!,
    cascaded.shadowSplits[1]!,
    cascaded.shadowSplits[2]!,
    cascaded.shadowSplits[3]!,
  );

  for (let i = 0; i < TOTAL_SPLITS; i++) {
    gl.uniformMatrix4fv(viewProjecMatricesLocs[i]!, false, cascaded.cascadedMatrices[i]!.toFloat32Array());

    gl.activeTexture(gl.TEXTURE0 + i);
    gl.bindTexture(gl.TEXTURE_2D, cascaded.mCascadedTextureArray[i]!);
    gl.uniform1i(depthTexturesLocs[i]!, i);
  }

  gl.uniform3f(lightDirectionLoc, light_dir.x, light_dir.y, light_dir.z);

  {
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  }

  for (let i = 0; i < TOTAL_SPLITS; i++) {
    gl.activeTexture(gl.TEXTURE0 + i);
    gl.bindTexture(gl.TEXTURE_2D, null);
  }

  if (DEBUG) {
    // debug_lines_draw();
  }
};

draw();
setInterval(draw, 10);
