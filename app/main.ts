import "./dev-tools/dev-main";
import "./index.css";
import vsSource, { uniformName_projectionMatrix } from "./shaders/main-vertex.vert";
import fsSource, {
  uniformName_viewMatrix,
  uniformName_viewPos,
  uniformName_lightDir,
  uniformName_csm_matrices,
  uniformName_depthTextures,
} from "./shaders/main-fragment.frag";

import shadowVsSource, { uniformName_modelViewMatrix } from "./shaders/shadow-vertex.vert";
import shadowFsSource from "./shaders/shadow-fragment.frag";

import { gl } from "./gl";
import { triangles_attributes } from "./geometry/triangles-render";

// import { debug_lines_draw } from "./debug-lines-render";
import { camera_update } from "./camera-update";
import { camera_position, camera_updateView, camera_view } from "./camera";
import { sceneTriangles, loadScene } from "./level/scene";
import { fieldOfView, zFar, zNear } from "./camera-projection";
import { initShaderProgram } from "./shader-utils";
import { csm_buildMatrices, lightDir, CSM_TEXTURE_SIZE, TOTAL_SPLITS } from "./cascaded/csm";
import { canvas } from "./canvas";
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

for (let i = 0; i < TOTAL_SPLITS; ++i) {
  csm_matricesLocs[i] = gl.getUniformLocation(shaderProgram, uniformName_csm_matrices + `[${i}]`)!;
  gl.uniform1i(gl.getUniformLocation(shaderProgram, uniformName_depthTextures + `[${i}]`), i);

  const frameBuffer = gl.createFramebuffer()!;

  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

  gl.activeTexture(gl.TEXTURE0 + i);

  const texture = gl.createTexture()!;
  gl.bindTexture(gl.TEXTURE_2D, texture);

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

  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture, 0);

  csm_framebuffers[i] = frameBuffer;
}

gl.bindFramebuffer(gl.FRAMEBUFFER, null);

gl.clearColor(0, 0, 0, 1); // Clear to black, fully opaque
gl.depthFunc(gl.LEQUAL); // Near things obscure far things
gl.enable(gl.DEPTH_TEST); // Enable depth testing
gl.enable(gl.CULL_FACE); // Don't render triangle backs
gl.clearDepth(1); // Clear everything

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

const renderScene = () => {
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
};

const draw = () => {
  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  camera_update(gameTimeDelta);

  camera_updateView();

  triangles_attributes();

  const lightSpaceMatrices = csm_buildMatrices();

  // *** CASCADED SHADOWMAPS ***

  gl.useProgram(shadowShaderProgram);

  gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);
  for (let splitNumber = 0; splitNumber < TOTAL_SPLITS; splitNumber++) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffers[splitNumber]!);
    gl.uniformMatrix4fv(shadowMatrixLoc, false, lightSpaceMatrices[splitNumber]!);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    renderScene();
  }

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // *** MAIN RENDER ***

  // Clear the canvas before we start drawing on it.

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); // Make the canvas cover the screen
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.cullFace(gl.BACK);

  // *** MAIN RENDERER ***

  gl.useProgram(shaderProgram);

  for (let i = 0; i < TOTAL_SPLITS; i++) {
    gl.uniformMatrix4fv(csm_matricesLocs[i]!, false, lightSpaceMatrices[i]!);
  }

  gl.uniformMatrix4fv(
    projectionMatrixLoc,
    false,
    DOMMatrix_perspective(fieldOfView, canvas.clientWidth / canvas.clientHeight, zNear, zFar).toFloat32Array(),
  );

  gl.uniformMatrix4fv(viewMatrixLoc, false, camera_view.toFloat32Array());

  gl.uniform3f(viewPosLoc, camera_position.x, camera_position.y, camera_position.z);

  gl.uniform3f(lightDirLoc, lightDir.x, lightDir.y, lightDir.z);

  renderScene();

  requestAnimationFrame(draw);
};

requestAnimationFrame(draw);
