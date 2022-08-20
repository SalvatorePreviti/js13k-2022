import "./dev-tools/dev-main";

import "./index.css";

import csm_vsSource from "./shaders/csm-vertex.vert";
import main_vsSource, {
  uniformName_projectionMatrix,
  uniformName_viewMatrix,
  uniformName_worldMatrix,
} from "./shaders/main-vertex.vert";
import main_fsSource, {
  uniformName_viewPos,
  uniformName_lightDir,
  uniformName_csm_matrices,
  uniformName_csm_textures,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE0 as CSM_PLANE_DISTANCE0,
  constDef_CSM_PLANE_DISTANCE1 as CSM_PLANE_DISTANCE1,
} from "./shaders/main-fragment.frag";
import collider_fsSource from "./shaders/collider-fragment.frag";

import voidFsSource from "./shaders/void-fragment.frag";

import { gl, initGl, initShaderProgram } from "./gl";

import { integers_map } from "./math/math";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation, camera_view } from "./camera";
import { camera_update } from "./camera-update";
import type { Model } from "./level/scene";
import { rootModel, initTriangleBuffers, modelFinalMatrix } from "./level/scene";
import { csm_buildMatrix, lightMatrix } from "./csm";
import { initInputHandlers } from "./input";
import { gameTimeDelta, gameTimeUpdate } from "./game-time";
import { buildWorld } from "./level/level";
import { identity } from "./math/matrix";

const updateModels = (model: Model | undefined) => {
  if (model) {
    model._update?.(model);
    for (const child of model.$children) {
      updateModels(child);
    }
  }
};

const renderModels = (model: Model | undefined, worldMatrixLoc: WebGLUniformLocation) => {
  if (model) {
    const { $mesh } = model;
    if ($mesh) {
      gl.uniformMatrix4fv(worldMatrixLoc, false, modelFinalMatrix(model).toFloat32Array());
      gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_INT, $mesh.$vertexOffset * 4);
    }
    for (const child of model.$children) {
      renderModels(child, worldMatrixLoc);
    }
  }
};

initGl();

buildWorld();

initTriangleBuffers();

gl.enable(gl.DEPTH_TEST); // Enable depth testing
gl.enable(gl.CULL_FACE); // Don't render triangle backs

gl.clearDepth(1); // Clear everything. Default value is 1
gl.cullFace(gl.BACK); // Default value is already BACK
gl.depthFunc(gl.LEQUAL); // Default is LESS, seems LEQUAL and LESS both are OK

const csmShader = initShaderProgram(csm_vsSource, voidFsSource);

const collisionShader = initShaderProgram(main_vsSource, collider_fsSource);

const COLLISION_TEXTURE_SIZE = 256;

const collision_mx = 1;
const collision_my = 1 / 2.5;
const collision_far = 2;
const collision_near = 0.0001;
gl.uniformMatrix4fv(collisionShader(uniformName_projectionMatrix), false, [
  collision_mx,
  0,
  0,
  0,
  0,
  collision_my,
  0,
  0,
  0,
  0,
  (collision_far + collision_near) / (collision_near - collision_far),
  -1,
  0,
  0,
  (2 * collision_far * collision_near) / (collision_near - collision_far),
  0,
]);

const mainShader = initShaderProgram(main_vsSource, main_fsSource);

const colliderBuffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 3);
const collision_frameBuffer = gl.createFramebuffer()!;

const collision_init = () => {
  const texture = gl.createTexture()!;
  const depthBuffer = gl.createRenderbuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);

  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);

  gl.activeTexture(gl.TEXTURE3);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGB,
    COLLISION_TEXTURE_SIZE,
    COLLISION_TEXTURE_SIZE,
    0,
    gl.RGB,
    gl.UNSIGNED_BYTE,
    null,
  );
};

collision_init();

const csm_buildMagic = (csmSplit: number) => {
  let lightSpaceMatrix: Float32Array;
  const texture = gl.createTexture()!;
  const frameBuffer = gl.createFramebuffer();
  const lightSpaceMatrixLoc = mainShader(uniformName_csm_matrices + `[${csmSplit}]`);
  gl.uniform1i(mainShader(uniformName_csm_textures + `[${csmSplit}]`), csmSplit);

  gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);

  // Disable rendering to the color buffer, we just need the depth buffer
  gl.drawBuffers([gl.NONE]);
  gl.readBuffer(gl.NONE);

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
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL); // Can be LESS or LEQUAL
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);

  return (matrix?: Float32Array) => {
    if (matrix) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(csmShader(uniformName_viewMatrix), false, (lightSpaceMatrix = matrix));
      renderModels(rootModel, csmShader(uniformName_worldMatrix));
    } else {
      gl.uniformMatrix4fv(lightSpaceMatrixLoc, false, lightSpaceMatrix);
    }
  };
};

const csm_render = integers_map(3, csm_buildMagic);

let debug2dctx: CanvasRenderingContext2D | null = null;

const buf = new Uint8ClampedArray(256 * 256 * 4);
const imgdata = new ImageData(buf, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

const draw = (globalTime: number) => {
  gameTimeUpdate(globalTime);

  requestAnimationFrame(draw);

  // POST COLLISION

  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGB, gl.UNSIGNED_BYTE, colliderBuffer);

  for (let y = 0; y < COLLISION_TEXTURE_SIZE; ++y) {
    for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
      const i = ((COLLISION_TEXTURE_SIZE - y) * COLLISION_TEXTURE_SIZE + x) * 3;
      const r = colliderBuffer[i]!;
      const g = colliderBuffer[i + 1]!;
      const b = colliderBuffer[i + 2]!;

      buf[(y * COLLISION_TEXTURE_SIZE + x) * 4] = r > 128 ? 255 : 0;
      buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1] = r / 2;
      buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 2] = r / 2;
      buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 3] = 255;
    }
  }

  const debugCanvas = document.getElementById("debug-canvas") as HTMLCanvasElement;

  if (debugCanvas) {
    if (!debug2dctx) {
      debug2dctx = debugCanvas.getContext("2d")!;
    }
    debug2dctx.putImageData(imgdata, 0, 0, 0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  }

  camera_update(gameTimeDelta);

  camera_view
    .setMatrixValue("none")
    .rotateSelf(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
    .invertSelf()
    .translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);

  updateModels(rootModel);

  // *** CASCADED SHADOWMAPS ***

  csmShader();

  gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

  csm_render[0]!(csm_buildMatrix(zNear, CSM_PLANE_DISTANCE0, 10));
  csm_render[1]!(csm_buildMatrix(CSM_PLANE_DISTANCE0, CSM_PLANE_DISTANCE1, 11));
  csm_render[2]!(csm_buildMatrix(CSM_PLANE_DISTANCE1, zFar, 15));

  // *** COLLISION ***

  collisionShader();

  gl.uniformMatrix4fv(collisionShader(uniformName_viewMatrix), false, camera_view.toFloat32Array());

  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.clearColor(0, 0, 0, 1); // Clear to black, fully opaque
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.viewport(128, 0, 256, 256);

  renderModels(rootModel, collisionShader(uniformName_worldMatrix));

  gl.uniformMatrix4fv(
    collisionShader(uniformName_viewMatrix),
    false,
    identity.rotate(0, -180, 0).multiply(camera_view).toFloat32Array(),
  );

  gl.viewport(0, 0, 128, 256);

  renderModels(rootModel, collisionShader(uniformName_worldMatrix));

  // *** MAIN RENDER ***

  mainShader();

  gl.clearColor(0.2, 0.2, 0.2, 1); // Clear to black, fully opaque

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, mat_perspective(zNear, zFar));
  gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, camera_view.toFloat32Array());
  gl.uniform3f(mainShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);
  gl.uniform3f(mainShader(uniformName_lightDir), lightMatrix.m13, lightMatrix.m23, lightMatrix.m33);

  csm_render[0]!();
  csm_render[1]!();
  csm_render[2]!();

  renderModels(rootModel, mainShader(uniformName_worldMatrix));
};

draw(0);

initInputHandlers();
