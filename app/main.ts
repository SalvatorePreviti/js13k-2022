import "./dev-tools/dev-main";

import "./index.css";

import csm_vsSource from "./shaders/csm-vertex.vert";
import main_vsSource, { uniformName_projectionMatrix, uniformName_viewMatrix } from "./shaders/main-vertex.vert";
import main_fsSource, {
  uniformName_viewPos,
  uniformName_lightDir,
  uniformName_csm_matrices,
  uniformName_csm_textures,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE0 as CSM_PLANE_DISTANCE0,
  constDef_CSM_PLANE_DISTANCE1 as CSM_PLANE_DISTANCE1,
  constDef_CSM_PLANE_DISTANCE2 as CSM_PLANE_DISTANCE2,
} from "./shaders/main-fragment.frag";

import voidFsSource from "./shaders/void-fragment.frag";

import { gl, initShaderProgram } from "./gl";

import { integers_map } from "./math/math";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation, camera_view } from "./camera";
import { camera_update } from "./camera-update";
import { buildWorld, renderMainScene } from "./level/scene";
import { csm_buildMatrix, lightMatrix } from "./csm";

buildWorld();

const csm_framebuffers: WebGLFramebuffer[] = [];

const csmShader = initShaderProgram(csm_vsSource, voidFsSource);
const csmShader_viewMatrixLoc = gl.getUniformLocation(csmShader, uniformName_viewMatrix);

const mainShader = initShaderProgram(main_vsSource, main_fsSource);
const mainShader_projectionMatrixLoc = gl.getUniformLocation(mainShader, uniformName_projectionMatrix);
const mainShader_viewMatrixLoc = gl.getUniformLocation(mainShader, uniformName_viewMatrix);
const mainShader_viewPosLoc = gl.getUniformLocation(mainShader, uniformName_viewPos);
const mainShader_lightDirLoc = gl.getUniformLocation(mainShader, uniformName_lightDir)!;

const csm_matricesLocs = integers_map(4, (csmSplit) => {
  const texture = gl.createTexture()!;

  gl.bindFramebuffer(gl.FRAMEBUFFER, (csm_framebuffers[csmSplit] = gl.createFramebuffer()!));

  // Disable rendering to the color buffer, we just need the depth buffer
  gl.drawBuffers([gl.NONE]);
  gl.readBuffer(gl.NONE);

  gl.uniform1i(gl.getUniformLocation(mainShader, uniformName_csm_textures + `[${csmSplit}]`), csmSplit);

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
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL); // Can be LESS or LEQUAL

  return gl.getUniformLocation(mainShader, uniformName_csm_matrices + `[${csmSplit}]`)!;
});

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

const draw = () => {
  requestAnimationFrame(draw);

  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  camera_update(gameTimeDelta);

  camera_view
    .setMatrixValue("none")
    .rotateSelf(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
    .invertSelf()
    .translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);

  const lightSpaceMatrices = [
    csm_buildMatrix(zNear, CSM_PLANE_DISTANCE0, 10),
    csm_buildMatrix(CSM_PLANE_DISTANCE0, CSM_PLANE_DISTANCE1, 5),
    csm_buildMatrix(CSM_PLANE_DISTANCE1, CSM_PLANE_DISTANCE2, 4),
    csm_buildMatrix(CSM_PLANE_DISTANCE2, zFar, 3),
  ];

  // *** CASCADED SHADOWMAPS ***

  gl.useProgram(csmShader);

  gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);
  for (let csmSplit = 0; csmSplit < 4; ++csmSplit) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffers[csmSplit]!);
    gl.uniformMatrix4fv(csmShader_viewMatrixLoc, false, lightSpaceMatrices[csmSplit]!);
    gl.clear(gl.DEPTH_BUFFER_BIT);
    renderMainScene();
  }

  // *** MAIN RENDER ***

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // Clear the canvas before we start drawing on it.

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); // Make the canvas cover the screen
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // *** MAIN RENDERER ***

  gl.useProgram(mainShader);

  for (let csmSplit = 0; csmSplit < 4; ++csmSplit) {
    gl.uniformMatrix4fv(csm_matricesLocs[csmSplit]!, false, lightSpaceMatrices[csmSplit]!);
  }

  gl.uniformMatrix4fv(mainShader_projectionMatrixLoc, false, mat_perspective(zNear, zFar));

  gl.uniformMatrix4fv(mainShader_viewMatrixLoc, false, camera_view.toFloat32Array());

  gl.uniform3f(mainShader_viewPosLoc, camera_position.x, camera_position.y, camera_position.z);

  gl.uniform3f(mainShader_lightDirLoc, lightMatrix.m13, lightMatrix.m23, lightMatrix.m33);

  renderMainScene();
};

gl.enable(gl.DEPTH_TEST); // Enable depth testing
gl.enable(gl.CULL_FACE); // Don't render triangle backs

gl.clearColor(0, 0.7, 1, 1); // Clear to black, fully opaque
// gl.clearDepth(1); // Clear everything. Default value is 1
// gl.cullFace(gl.BACK); // Default value is already BACK
// gl.depthFunc(gl.LEQUAL); // Default is LESS, seems LEQUAL and LESS both are OK

requestAnimationFrame(draw);
