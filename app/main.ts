import "./dev-tools/dev-main";
import "./index.css";
import vsSource, { uniformName_projectionMatrix } from "./shaders/main-vertex.vert";
import fsSource, {
  uniformName_viewMatrix,
  uniformName_viewPos,
  uniformName_lightDir,
  uniformName_csm_matrices,
  uniformName_csm_textures,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE0 as CSM_PLANE_DISTANCE0,
  constDef_CSM_PLANE_DISTANCE1 as CSM_PLANE_DISTANCE1,
  constDef_CSM_PLANE_DISTANCE2 as CSM_PLANE_DISTANCE2,
} from "./shaders/main-fragment.frag";

import shadowVsSource, { uniformName_modelViewMatrix } from "./shaders/shadow-vertex.vert";
import shadowFsSource from "./shaders/shadow-fragment.frag";

import { gl } from "./gl";

import { camera_update } from "./camera-update";
import { camera_position, camera_updateView, camera_view } from "./camera";
import { sceneTriangles, loadScene } from "./level/scene";
import { fieldOfView, zFar, zNear } from "./camera-projection";
import { initShaderProgram } from "./shader-utils";
import { lightDir, csm_buildMatrix } from "./csm";
import { DOMMatrix_perspective } from "./math/matrix";

loadScene();

// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(vsSource, fsSource);

const shadowShaderProgram = initShaderProgram(shadowVsSource, shadowFsSource);

const shadowMatrixLoc = gl.getUniformLocation(shadowShaderProgram, uniformName_modelViewMatrix);

const projectionMatrixLoc = gl.getUniformLocation(shaderProgram, uniformName_projectionMatrix);
const viewMatrixLoc = gl.getUniformLocation(shaderProgram, uniformName_viewMatrix);
const viewPosLoc = gl.getUniformLocation(shaderProgram, uniformName_viewPos);
const lightDirLoc = gl.getUniformLocation(shaderProgram, uniformName_lightDir)!;

gl.useProgram(shaderProgram);

const csm_matricesLocs: WebGLUniformLocation[] = [];
const csm_framebuffers: WebGLFramebuffer[] = [];

for (let csmSplit = 0; csmSplit < 4; ++csmSplit) {
  const texture = gl.createTexture()!;

  gl.bindFramebuffer(gl.FRAMEBUFFER, (csm_framebuffers[csmSplit] = gl.createFramebuffer()!));

  csm_matricesLocs[csmSplit] = gl.getUniformLocation(shaderProgram, uniformName_csm_matrices + `[${csmSplit}]`)!;

  gl.uniform1i(gl.getUniformLocation(shaderProgram, uniformName_csm_textures + `[${csmSplit}]`), csmSplit);

  gl.activeTexture(gl.TEXTURE0 + csmSplit);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture, 0);

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
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LESS); // Can also be LEQUAL
}

gl.enable(gl.DEPTH_TEST); // Enable depth testing
gl.enable(gl.CULL_FACE); // Don't render triangle backs

gl.clearColor(0, 0.7, 1, 1); // Clear to black, fully opaque
// gl.clearDepth(1); // Clear everything. Default value is 1
// gl.cullFace(gl.BACK); // Default value is already BACK
// gl.depthFunc(gl.LEQUAL); // Default is LESS, seems both are OK

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

const renderScene = () => {
  gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, gl.UNSIGNED_SHORT, 0);
};

const draw = () => {
  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  camera_update(gameTimeDelta);

  camera_updateView();

  const lightSpaceMatrices = [
    csm_buildMatrix(zNear, CSM_PLANE_DISTANCE0),
    csm_buildMatrix(CSM_PLANE_DISTANCE0, CSM_PLANE_DISTANCE1),
    csm_buildMatrix(CSM_PLANE_DISTANCE1, CSM_PLANE_DISTANCE2),
    csm_buildMatrix(CSM_PLANE_DISTANCE2, zFar),
  ];

  // *** CASCADED SHADOWMAPS ***

  gl.useProgram(shadowShaderProgram);

  gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);
  for (let csmSplit = 0; csmSplit < 4; ++csmSplit) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffers[csmSplit]!);
    gl.uniformMatrix4fv(shadowMatrixLoc, false, lightSpaceMatrices[csmSplit]!);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    renderScene();
  }

  // *** MAIN RENDER ***

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // Clear the canvas before we start drawing on it.

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); // Make the canvas cover the screen
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // *** MAIN RENDERER ***

  gl.useProgram(shaderProgram);

  for (let csmSplit = 0; csmSplit < 4; ++csmSplit) {
    gl.uniformMatrix4fv(csm_matricesLocs[csmSplit]!, false, lightSpaceMatrices[csmSplit]!);
  }

  gl.uniformMatrix4fv(
    projectionMatrixLoc,
    false,
    DOMMatrix_perspective(fieldOfView, hC.clientWidth / hC.clientHeight, zNear, zFar).toFloat32Array(),
  );

  gl.uniformMatrix4fv(viewMatrixLoc, false, camera_view.toFloat32Array());

  gl.uniform3f(viewPosLoc, camera_position.x, camera_position.y, camera_position.z);

  gl.uniform3f(lightDirLoc, lightDir.x, lightDir.y, lightDir.z);

  renderScene();

  requestAnimationFrame(draw);
};

requestAnimationFrame(draw);
