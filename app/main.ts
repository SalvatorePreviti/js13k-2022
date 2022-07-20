import "./dev-tools/dev-main";
import "./index.css";
import vsSource from "./shaders/main-vertex.vert";
import fsSource from "./shaders/main-fragment.frag";

import shadowVsSource from "./shaders/shadow-vertex.vert";
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
import { getLightSpaceMatrices, lightDir, ShadowMapSize, TOTAL_SPLITS } from "./cascaded/csm";

loadScene();

// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(vsSource, fsSource);

const shadowShaderProgram = initShaderProgram(shadowVsSource, shadowFsSource);
const shadowMatrixLoc = gl.getUniformLocation(shadowShaderProgram, "M");

const projectionMatrixLoc = gl.getUniformLocation(shaderProgram, "projectionMatrix");
const viewMatrixLoc = gl.getUniformLocation(shaderProgram, "viewMatrix");
const viewMatrix2Loc = gl.getUniformLocation(shaderProgram, "viewMatrix2");
const viewPosLoc = gl.getUniformLocation(shaderProgram, "viewPos");

const lightDirLoc = gl.getUniformLocation(shaderProgram, "lightDir")!;

// const cascadedSplitsLoc = gl.getUniformLocation(shaderProgram, "cascadedSplits")!;
// const inverseViewMatrixLoc = gl.getUniformLocation(shaderProgram, "inverseViewMatrix")!;

const LightSpaceMatrices = integers(TOTAL_SPLITS).map(
  (i) => gl.getUniformLocation(shaderProgram, `LightSpaceMatrices[${i}]`)!,
);

const depthTexturesLocs = integers(TOTAL_SPLITS).map(
  (i) => gl.getUniformLocation(shaderProgram, `depthTextures[${i}]`)!,
);

// const viewMatrix = mat4_setIdentityValues(mat4_new_zero());

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

camera_firstPersonPerspective(fieldOfView, gl.canvas.clientWidth / gl.canvas.clientHeight, zNear, zFar);
camera_updateView();

const mCascadedShadowFBO = gl.createFramebuffer()!;

gl.bindFramebuffer(gl.FRAMEBUFFER, mCascadedShadowFBO);

const mCascadedTextures = integers(TOTAL_SPLITS).map(() => {
  const result = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, result);

  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.DEPTH_COMPONENT32F,
    ShadowMapSize,
    ShadowMapSize,
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
  gl.viewport(0, 0, ShadowMapSize, ShadowMapSize);
  // gl.cullFace(gl.FRONT);

  for (let splitNumber = 0; splitNumber < lightSpaceMatrices.length; splitNumber++) {
    gl.uniformMatrix4fv(shadowMatrixLoc, false, lightSpaceMatrices[splitNumber]!.toFloat32Array());
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, mCascadedTextures[splitNumber]!, 0);

    gl.clear(gl.DEPTH_BUFFER_BIT);

    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // cascaded.renderCSM(() => {
  //   const type = gl.UNSIGNED_SHORT;
  //   const offset = 0;
  //   gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  // });

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

  // gl.uniformMatrix4fv(inverseViewMatrixLoc, false, camera_debug_view.inverse().toFloat32Array());

  /* gl.uniform4f(
    cascadedSplitsLoc,
    cascaded.shadowSplits[0]!,
    cascaded.shadowSplits[1]!,
    cascaded.shadowSplits[2]!,
    cascaded.shadowSplits[3]!,
  ); */

  for (let i = 0; i < LightSpaceMatrices.length; i++) {
    gl.uniformMatrix4fv(LightSpaceMatrices[i]!, false, lightSpaceMatrices[i]!.toFloat32Array());

    gl.activeTexture(gl.TEXTURE0 + i);
    gl.bindTexture(gl.TEXTURE_2D, mCascadedTextures[i]!);
    gl.uniform1i(depthTexturesLocs[i]!, i);
  }

  gl.uniform3f(lightDirLoc, lightDir.x, lightDir.y, lightDir.z);

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
