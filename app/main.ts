import "./dev-tools/dev-main";
import "./index.css";
import vsSource, { uniformName_projectionMatrix, uniformName_viewMatrix2 } from "./shaders/main-vertex.vert";
import fsSource, {
  uniformName_viewMatrix,
  uniformName_viewPos,
  uniformName_lightDir,
  uniformName_lightSpaceMatrices,
  uniformName_depthTextures,
} from "./shaders/main-fragment.frag";

import shadowVsSource, { uniformName_modelViewMatrix } from "./shaders/shadow-vertex.vert";
import shadowFsSource from "./shaders/shadow-fragment.frag";

import { gl } from "./gl";
import { triangles_attributes } from "./geometry/triangles-render";

// import { debug_lines_draw } from "./debug-lines-render";
import { camera_update } from "./camera-update";
import { camera_debug_view, camera_position, camera_updateView, camera_view } from "./camera";
import { sceneTriangles, loadScene } from "./level/scene";
import { camera_firstPersonPerspective, camera_projection, fieldOfView, zFar, zNear } from "./camera-projection";
import { initShaderProgram } from "./shader-utils";
import { integers } from "./math/math";
import { getLightSpaceMatrices, lightDir, CSM_TEXTURE_SIZE, TOTAL_SPLITS } from "./cascaded/csm";

loadScene();

// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(vsSource, fsSource);

const shadowShaderProgram = initShaderProgram(shadowVsSource, shadowFsSource);
const shadowMatrixLoc = gl.getUniformLocation(shadowShaderProgram, uniformName_modelViewMatrix);

const projectionMatrixLoc = gl.getUniformLocation(shaderProgram, uniformName_projectionMatrix);
const viewMatrixLoc = gl.getUniformLocation(shaderProgram, uniformName_viewMatrix);
const viewMatrix2Loc = gl.getUniformLocation(shaderProgram, uniformName_viewMatrix2);
const viewPosLoc = gl.getUniformLocation(shaderProgram, uniformName_viewPos);

const lightDirLoc = gl.getUniformLocation(shaderProgram, uniformName_lightDir)!;

// const cascadedSplitsLoc = gl.getUniformLocation(shaderProgram, "cascadedSplits")!;
// const inverseViewMatrixLoc = gl.getUniformLocation(shaderProgram, "inverseViewMatrix")!;

const lightSpaceMatricesLocs = integers(TOTAL_SPLITS).map(
  (i) => gl.getUniformLocation(shaderProgram, uniformName_lightSpaceMatrices + `[${i}]`)!,
);
const depthTexturesLocs = integers(TOTAL_SPLITS).map(
  (i) => gl.getUniformLocation(shaderProgram, uniformName_depthTextures + `[${i}]`)!,
);

// const viewMatrix = mat4_setIdentityValues(mat4_new_zero());

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

camera_firstPersonPerspective(fieldOfView, gl.canvas.clientWidth / gl.canvas.clientHeight, zNear, zFar);
camera_updateView();

const mCascadedShadowFBO = gl.createFramebuffer()!;

gl.bindFramebuffer(gl.FRAMEBUFFER, mCascadedShadowFBO);

const mCascadedTextures = integers(TOTAL_SPLITS).map((i) => {
  const result = gl.createTexture()!;
  gl.activeTexture(gl.TEXTURE0 + i);
  gl.bindTexture(gl.TEXTURE_2D, result);

  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.DEPTH_COMPONENT32F,
    CSM_TEXTURE_SIZE,
    CSM_TEXTURE_SIZE,
    0,
    gl.DEPTH_COMPONENT,
    gl.FLOAT,
    null,
  );

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL);

  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, result, 0);

  return result;
});

gl.bindFramebuffer(gl.FRAMEBUFFER, null);

const draw = () => {
  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  // + Math.cos(gameTime * 3)
  // const t = vec3_normalize(vec3(20.0, 50, -20.0));
  // lightDir.x = t.x;
  // lightDir.y = t.y;
  // lightDir.z = t.z;

  camera_update(gameTimeDelta);

  camera_updateView();

  gl.clearColor(0, 0, 0, 1); // Clear to black, fully opaque
  gl.clearDepth(1); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.enable(gl.CULL_FACE); // Don't render triangle backs
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  camera_firstPersonPerspective(fieldOfView, gl.canvas.clientWidth / gl.canvas.clientHeight, zNear, zFar);

  triangles_attributes();

  const lightSpaceMatrices = getLightSpaceMatrices();

  // *** SHADOWMAP ***

  gl.useProgram(shadowShaderProgram);
  gl.bindFramebuffer(gl.FRAMEBUFFER, mCascadedShadowFBO);
  gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);
  // gl.cullFace(gl.FRONT);

  for (let splitNumber = 0; splitNumber < TOTAL_SPLITS; splitNumber++) {
    gl.uniformMatrix4fv(shadowMatrixLoc, false, lightSpaceMatrices[splitNumber]!);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, mCascadedTextures[splitNumber]!, 0);

    gl.clear(gl.DEPTH_BUFFER_BIT);

    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // *** MAIN RENDER ***

  // Clear the canvas before we start drawing on it.

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); // Make the canvas cover the screen
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.cullFace(gl.BACK);

  // Tell WebGL to use our program when drawing

  gl.useProgram(shaderProgram);

  // Set the shader uniforms

  gl.uniformMatrix4fv(projectionMatrixLoc, false, camera_projection);

  gl.uniformMatrix4fv(viewMatrixLoc, false, camera_debug_view.toFloat32Array());

  gl.uniformMatrix4fv(viewMatrix2Loc, false, camera_view.toFloat32Array());

  gl.uniform3f(viewPosLoc, camera_position.x, camera_position.y, camera_position.z);

  for (let i = 0; i < TOTAL_SPLITS; i++) {
    gl.uniform1i(depthTexturesLocs[i]!, i);
    gl.uniformMatrix4fv(lightSpaceMatricesLocs[i]!, false, lightSpaceMatrices[i]!);
  }

  gl.uniform3f(lightDirLoc, lightDir.x, lightDir.y, lightDir.z);

  {
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  }

  if (DEBUG) {
    // debug_lines_draw();
  }
};

draw();
setInterval(draw, 10);
