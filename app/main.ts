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
import collider_fsSource, { uniformName_modelId } from "./shaders/collider-fragment.frag";
import voidFsSource from "./shaders/void-fragment.frag";

import { integers_map, lerp } from "./math/math";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation, camera_view } from "./camera";
import { camera_update } from "./camera-update";
import { renderModels, updateModels, rootModel, initTriangleBuffers, modelsByModelId } from "./level/scene";
import { csm_buildMatrix, lightMatrix } from "./csm";
import {
  initInputHandlers,
  keyboard_downKeys,
  KEY_PLAYER_BACK,
  KEY_PLAYER_FLY_DOWN,
  KEY_PLAYER_FLY_UP,
  KEY_PLAYER_FRONT,
  KEY_PLAYER_LEFT,
  KEY_PLAYER_RIGHT,
} from "./input";
import { gameTimeDelta, gameTimeUpdate } from "./game-time";
import { buildWorld, playerModel } from "./level/level";
import { identity, mat_perspectiveXY } from "./math/matrix";

import { gl, initGl, initShaderProgram } from "./gl";
import { player_position_global, player_position_final } from "./player";
import { vec3_transform } from "./geometry/geometry";

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

const COLLISION_TEXTURE_SIZE = 64;

gl.uniformMatrix4fv(collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1, 0.5, 0.0001, 1.5));

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

const csm_renderer = (csmSplit: number) => {
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
      renderModels(csmShader(uniformName_worldMatrix));
    } else {
      gl.uniformMatrix4fv(lightSpaceMatrixLoc, false, lightSpaceMatrix);
    }
  };
};

const csm_render = integers_map(3, csm_renderer);

let debug2dctx: CanvasRenderingContext2D | null = null;

const readDist1 = (x: number, y: number): number => {
  const bufIdx = (y * COLLISION_TEXTURE_SIZE + x) * 3;
  return colliderBuffer[bufIdx]! / 255;
};

const readDist2 = (x: number, y: number): number => {
  const bufIdx = (y * COLLISION_TEXTURE_SIZE + x) * 3;
  return colliderBuffer[bufIdx + 1]! / 255;
};

const player_collision_modelIdCounter = new Int32Array(256);

const oldPlayerPositionx = 0;
const oldPlayerPositiony = 0;
const oldPlayerPositionz = 0;
let oldModelId = 0;
let currentModelId = 0;

const player_collisions = () => {
  let front = 0;
  let back = 0;
  let left = 0;
  let right = 0;
  let bottom = 0;

  const timeMultiplier = gameTimeDelta / 0.008;

  // Ground Collision:

  let maxModelIdCount = 0;
  let bestModelId = oldModelId;
  player_collision_modelIdCounter.fill(0);
  for (let x = 0; x < COLLISION_TEXTURE_SIZE; x++) {
    let maxY = 0;
    for (let y = 0; y < 14; y++) {
      const bufIdx = (y * COLLISION_TEXTURE_SIZE + x) * 3;
      const b = colliderBuffer[bufIdx + 2]!;
      const count = player_collision_modelIdCounter[b]! + 1;
      maxY = Math.max(maxY, colliderBuffer[bufIdx]! / 255, colliderBuffer[bufIdx + 1]! / 255);
      player_collision_modelIdCounter[b] = count;
      if (count >= maxModelIdCount / 10) {
        maxModelIdCount = count;
        bestModelId = b;
      }
    }
    bottom += maxY;
  }
  bottom /= COLLISION_TEXTURE_SIZE * 2;

  if (!DEBUG || (!keyboard_downKeys[KEY_PLAYER_FLY_DOWN] && !keyboard_downKeys[KEY_PLAYER_FLY_UP])) {
    bottom -= 0.11;
  }

  if (bestModelId) {
    currentModelId = bestModelId;
  }

  // Sides collision:

  for (let y = 16; y < COLLISION_TEXTURE_SIZE; ++y) {
    for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
      const t = 1 - Math.abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);
      const dist1 = readDist1(x, y);
      const dist2 = readDist2(COLLISION_TEXTURE_SIZE - 1 - x, y);

      const zdist1 = dist1 * t;
      const zdist2 = dist2 * t;
      if (zdist1 > front) {
        front = zdist1;
      }
      if (zdist2 > back) {
        back = zdist2;
      }

      const xdist = (1 - t) * (dist1 > dist2 ? dist1 : dist2);
      if (x < COLLISION_TEXTURE_SIZE / 2) {
        if (xdist > left) {
          left = xdist;
        }
      } else if (xdist > right) {
        right = xdist;
      }
    }
  }

  player_position_global.x += (timeMultiplier * (right - left)) / 2;
  player_position_global.y += timeMultiplier * bottom;
  player_position_global.z += (timeMultiplier * (back - front)) / 2;
};

let pressing = false;

const draw = (globalTime: number) => {
  requestAnimationFrame(draw);

  gameTimeUpdate(globalTime);

  camera_update(gameTimeDelta);

  camera_view
    .setMatrixValue("none")
    .rotateSelf(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
    .invertSelf()
    .translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);

  if (gameTimeDelta > 0) {
    if (DEBUG) {
      if (keyboard_downKeys[KEY_PLAYER_FRONT]) {
        player_position_global.z += gameTimeDelta * 4;
      }
      if (keyboard_downKeys[KEY_PLAYER_BACK]) {
        player_position_global.z -= gameTimeDelta * 4;
      }
      if (keyboard_downKeys[KEY_PLAYER_LEFT]) {
        player_position_global.x += gameTimeDelta * 4;
      }
      if (keyboard_downKeys[KEY_PLAYER_RIGHT]) {
        player_position_global.x -= gameTimeDelta * 4;
      }
      if (keyboard_downKeys[KEY_PLAYER_FLY_UP]) {
        player_position_global.y += gameTimeDelta * 4;
      }
      if (keyboard_downKeys[KEY_PLAYER_FLY_DOWN]) {
        if (!pressing) {
          pressing = true;
          currentModelId = currentModelId === 6 ? 1 : 6;
        }
        // player_position_global.y -= gameTimeDelta * 4;
      } else {
        pressing = false;
      }
    }

    player_collisions();

    const newMatrix = modelsByModelId[currentModelId]?.$finalMatrix || identity;

    if (currentModelId !== oldModelId) {
      const { x, y, z } = newMatrix.inverse().transformPoint(player_position_final);
      player_position_global.x = x;
      player_position_global.y = y;
      player_position_global.z = z;
      oldModelId = currentModelId;
    }

    const { x, y, z } = newMatrix.transformPoint(player_position_global);
    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;

    updateModels(rootModel);

    // *** COLLISION ***

    gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
    gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGB, gl.UNSIGNED_BYTE, colliderBuffer);

    playerModel.$matrix = identity.translate(player_position_final.x, player_position_final.y, player_position_final.z);

    if (DEBUG) {
      const debugCanvas = document.getElementById("debug-canvas") as HTMLCanvasElement;

      const buf = new Uint8ClampedArray(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

      if (debugCanvas) {
        for (let y = 0; y < COLLISION_TEXTURE_SIZE; ++y) {
          for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
            const i = ((COLLISION_TEXTURE_SIZE - y) * COLLISION_TEXTURE_SIZE + x) * 3;
            const r = colliderBuffer[i]!;
            const g = colliderBuffer[i + 1]!;
            const b = colliderBuffer[i + 2]!;

            // buf[(y * COLLISION_TEXTURE_SIZE + x) * 4] = r * 10;
            // buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1] = g * 10;
            buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 2] = b;
            buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 3] = 255;
          }
        }

        const imgdata = new ImageData(buf, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

        if (!debug2dctx) {
          debug2dctx = debugCanvas.getContext("2d")!;
        }
        debug2dctx.putImageData(imgdata, 0, 0, 0, 0, 1128, 1128);
      }
    }
  }

  // *** CASCADED SHADOWMAPS ***

  csmShader();

  gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

  csm_render[0]!(csm_buildMatrix(zNear, CSM_PLANE_DISTANCE0, 10));
  csm_render[1]!(csm_buildMatrix(CSM_PLANE_DISTANCE0, CSM_PLANE_DISTANCE1, 11));
  csm_render[2]!(csm_buildMatrix(CSM_PLANE_DISTANCE1, zFar, 15));

  // *** COLLISION ***

  collisionShader();

  // .rotate(0, 180, 0)

  const playerPosMatrix1 = identity
    .rotate(0, 180)
    .inverse()
    .translate(-player_position_final.x, -player_position_final.y - 0.05, 0.45 - player_position_final.z);

  const playerPosMatrix2 = identity.translate(
    -player_position_final.x,
    -player_position_final.y - 0.05,
    -player_position_final.z - 0.45,
  );

  gl.uniformMatrix4fv(collisionShader(uniformName_viewMatrix), false, playerPosMatrix1.toFloat32Array());

  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.colorMask(true, false, true, false);
  gl.clearColor(0, 0, 0, 1); // Clear to black, fully opaque
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

  renderModels(collisionShader(uniformName_worldMatrix), collisionShader(uniformName_modelId));

  gl.uniformMatrix4fv(collisionShader(uniformName_viewMatrix), false, playerPosMatrix2.toFloat32Array());

  gl.colorMask(false, true, true, false);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  renderModels(collisionShader(uniformName_worldMatrix), collisionShader(uniformName_modelId));

  gl.colorMask(true, true, true, true);

  // *** MAIN RENDER ***

  mainShader();

  gl.clearColor(0.2, 0.2, 0.2, 1);

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

  renderModels(mainShader(uniformName_worldMatrix));
};

draw(0);

initInputHandlers();
