if (DEBUG) {
  console.time("boot");
  console.time("LOADED");
}

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
  uniformName_groundTexture,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE0 as CSM_PLANE_DISTANCE0,
  constDef_CSM_PLANE_DISTANCE1 as CSM_PLANE_DISTANCE1,
} from "./shaders/main-fragment.frag";
import collider_fsSource, { uniformName_modelId } from "./shaders/collider-fragment.frag";
import void_fsSource from "./shaders/void-fragment.frag";
import sky_vsSource from "./shaders/sky-vertex.vert";
import sky_fsSource, { uniformName_iResolution } from "./shaders/sky-fragment.frag";

import { angle_lerp, clamp01, DEG_TO_RAD, integers_map, interpolate_with_hysteresis, lerp } from "./math/math";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation, camera_view } from "./camera";
import { renderModels, updateModels, rootModel, initTriangleBuffers, modelsByModelId } from "./level/scene";
import { csm_buildMatrix, lightMatrix } from "./csm";
import {
  initInputHandlers,
  keyboard_downKeys,
  KEY_BACK,
  KEY_DEBUG_FLY_DOWN,
  KEY_DEBUG_FLY_UP,
  KEY_FRONT,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_RUN,
} from "./input";
import { gameTime, gameTimeDelta, gameTimeUpdate } from "./game-time";
import { buildWorld, playerLeftLegModel, playerModel, playerRightLegModel } from "./level/level";
import { identity, mat_perspectiveXY } from "./math/matrix";

import { gl, initGl, initShaderProgram, loadShader } from "./gl";
import { player_position_global, player_position_final } from "./player";

import groundTextureSvg from "./groundTexture.svg";

let texturesLoaded = false;

const _frameBuffersInvalidations = [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT];

initGl();

const image = new Image();
image.onload = () => {
  const texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE3);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, image.width, image.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, image);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  texturesLoaded = true;

  if (DEBUG) {
    console.timeEnd("LOADED");
  }
};
image.onerror = () => (texturesLoaded = true);
image.src = groundTextureSvg;

buildWorld();

initTriangleBuffers();

gl.enable(gl.DEPTH_TEST); // Enable depth testing
gl.enable(gl.CULL_FACE); // Don't render triangle backs

gl.clearDepth(1); // Clear everything. Default value is 1
gl.cullFace(gl.BACK); // Default value is already BACK
gl.depthFunc(gl.LEQUAL); // LEQUAL is required for sky

const skyShader = initShaderProgram(loadShader(sky_vsSource), sky_fsSource);
gl.uniform1i(skyShader(uniformName_groundTexture), 3); // TEXTURE3

const csmShader = initShaderProgram(loadShader(csm_vsSource), void_fsSource);

const main_vertexShader = loadShader(main_vsSource);
const collisionShader = initShaderProgram(main_vertexShader, collider_fsSource);
gl.uniformMatrix4fv(collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1.9, 0.59, 0.001, 1.1));

const mainShader = initShaderProgram(main_vertexShader, main_fsSource);
gl.uniform1i(mainShader(uniformName_groundTexture), 3); // TEXTURE3

const COLLISION_TEXTURE_SIZE = 128;

const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);
const collision_texture = gl.createTexture()!;
const collision_frameBuffer = gl.createFramebuffer()!;
const collision_renderBuffer = gl.createRenderbuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
gl.bindRenderbuffer(gl.RENDERBUFFER, collision_renderBuffer);

gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, collision_renderBuffer);

gl.activeTexture(gl.TEXTURE3);
gl.bindTexture(gl.TEXTURE_2D, collision_texture);
gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, collision_texture, 0);
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

const csm_render = integers_map(3, (csmSplit: number) => {
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

  return (matrix?: Float32Array | 1) => {
    if (matrix) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      if (matrix === 1) {
        gl.invalidateFramebuffer(gl.FRAMEBUFFER, _frameBuffersInvalidations);
      } else {
        gl.clear(gl.DEPTH_BUFFER_BIT);
        gl.uniformMatrix4fv(csmShader(uniformName_viewMatrix), false, (lightSpaceMatrix = matrix));
        renderModels(csmShader(uniformName_worldMatrix));
      }
    } else {
      gl.uniformMatrix4fv(lightSpaceMatrixLoc, false, lightSpaceMatrix);
    }
  };
});

let debug2dctx: CanvasRenderingContext2D | null = null;

const readDist1 = (x: number, y: number): number => {
  const bufIdx = (y * COLLISION_TEXTURE_SIZE + x) * 4;
  return collision_buffer[bufIdx]! / 255;
};

const readDist2 = (x: number, y: number): number => {
  const bufIdx = (y * COLLISION_TEXTURE_SIZE + x) * 4;
  return collision_buffer[bufIdx + 1]! / 255;
};

const player_collision_modelIdCounter = new Int32Array(256);

let oldModelId = 0;

export let currentModelId = 0;

// let player_collision_velocity_x = 0;
// let player_collision_velocity_z = 0;

let player_look_angle_target = 0;
let player_look_angle = 0;
let player_legs_speed = 0;
let player_gravity = 1;
let player_speed = 0;

let camera_player_dir_x = 0;
let camera_player_dir_y = 0;
let camera_player_dir_z = 0;

const draw = (globalTime: number) => {
  requestAnimationFrame(draw);

  if (!texturesLoaded) {
    return;
  }

  gameTimeUpdate(globalTime);

  if (!DEBUG_CAMERA) {
    camera_player_dir_x = interpolate_with_hysteresis(camera_player_dir_x, player_position_final.x, 0.5, gameTimeDelta);
    camera_player_dir_y = interpolate_with_hysteresis(camera_player_dir_y, player_position_final.y, 2, gameTimeDelta);
    camera_player_dir_z = interpolate_with_hysteresis(camera_player_dir_z, player_position_final.z, 0.5, gameTimeDelta);

    camera_position.x = interpolate_with_hysteresis(camera_position.x, camera_player_dir_x, 1, gameTimeDelta * 2);
    camera_position.y = interpolate_with_hysteresis(
      camera_position.y,
      Math.max(10, camera_player_dir_y + 13),
      4,
      gameTimeDelta * 2,
    );

    camera_position.z = interpolate_with_hysteresis(camera_position.z, camera_player_dir_z - 18, 1, gameTimeDelta * 2);

    const viewDirDiffx = camera_position.x - camera_player_dir_x;
    const viewDirDiffy = camera_position.y - camera_player_dir_y;
    const viewDirDiffz = camera_position.z - camera_player_dir_z;

    camera_rotation.y = 270 + Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD;

    camera_rotation.x =
      90 -
      Math.atan2(Math.sqrt(viewDirDiffz * viewDirDiffz + viewDirDiffx * viewDirDiffx) || 0, viewDirDiffy) / DEG_TO_RAD;
  }

  camera_view
    .setMatrixValue("none")
    .rotateSelf(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
    .invertSelf()
    .translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);

  const movStrafe = (keyboard_downKeys[KEY_LEFT] ? 1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? -1 : 0);
  const movForward = (keyboard_downKeys[KEY_FRONT] ? 1 : 0) + (keyboard_downKeys[KEY_BACK] ? -1 : 0);
  const movSelectedVelocity = keyboard_downKeys[KEY_RUN] ? 8 : 4;

  if (movStrafe || movForward) {
    player_look_angle_target = Math.atan2(movStrafe, movForward);
  }
  player_look_angle = angle_lerp(player_look_angle, player_look_angle_target, gameTimeDelta * 8);

  playerModel.$animationMatrix = identity
    .translate(player_position_final.x, player_position_final.y, player_position_final.z)
    .rotate(0, player_look_angle / DEG_TO_RAD);

  player_legs_speed = lerp(player_legs_speed, movStrafe || movForward ? 1 : 0, gameTimeDelta * 10);

  playerRightLegModel.$animationMatrix = identity.rotate(
    player_legs_speed * Math.sin(gameTime * movSelectedVelocity * 1.7) * 15,
    0,
  );
  playerLeftLegModel.$animationMatrix = identity.rotate(
    player_legs_speed * Math.sin(gameTime * movSelectedVelocity * 1.7 + Math.PI) * 15,
    0,
  );

  if (gameTimeDelta > 0) {
    updateModels(rootModel);
  }

  // *** CASCADED SHADOWMAPS ***

  csmShader();

  gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

  csm_render[0]!(csm_buildMatrix(zNear, CSM_PLANE_DISTANCE0, 10));
  csm_render[1]!(csm_buildMatrix(CSM_PLANE_DISTANCE0, CSM_PLANE_DISTANCE1, 11));
  csm_render[2]!(csm_buildMatrix(CSM_PLANE_DISTANCE1, zFar, 15));

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // *** MAIN RENDER ***

  mainShader();

  gl.clearColor(0, 0, 0, 1);

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

  // invalidate csm framebuffers

  csm_render[0]!(1);
  csm_render[1]!(1);
  csm_render[2]!(1);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // *** SKY RENDER ***

  skyShader();

  gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, gameTime);
  gl.uniform3f(skyShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);
  gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, camera_view.inverse().toFloat32Array());

  gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_INT, 0);

  // *** RENDER COLLISIONS ***

  // if (!currentModelId) {
  // player_position_global.x += player_collision_velocity_x * gameTimeDelta;
  // player_position_global.z += player_collision_velocity_z * gameTimeDelta;
  // player_collision_velocity_x /= 1.1;
  // player_collision_velocity_z /= 1.1;
  // }

  if (DEBUG) {
    if (keyboard_downKeys[KEY_DEBUG_FLY_UP]) {
      player_position_global.y += 2 * gameTimeDelta;
    }
    if (keyboard_downKeys[KEY_DEBUG_FLY_DOWN]) {
      player_position_global.y -= 2 * gameTimeDelta;
    }
  }

  if (gameTimeDelta <= 0) {
    return;
  }

  collisionShader();

  const playerPosMatrix1 = identity
    .rotate(0, 180)
    .inverse()
    .translate(-player_position_final.x, -player_position_final.y, 0.3 - player_position_final.z);

  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  gl.colorMask(true, false, true, false);
  gl.clearColor(0, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.uniformMatrix4fv(collisionShader(uniformName_viewMatrix), false, playerPosMatrix1.toFloat32Array());
  renderModels(collisionShader(uniformName_worldMatrix), collisionShader(uniformName_modelId));

  const playerPosMatrix2 = identity.translate(
    -player_position_final.x,
    -player_position_final.y,
    -player_position_final.z - 0.6,
  );

  gl.colorMask(false, true, false, false);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.colorMask(false, true, true, false);
  gl.uniformMatrix4fv(collisionShader(uniformName_viewMatrix), false, playerPosMatrix2.toFloat32Array());
  renderModels(collisionShader(uniformName_worldMatrix), collisionShader(uniformName_modelId));
  gl.colorMask(true, true, true, true);

  // *** COLLISION ***

  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
  gl.invalidateFramebuffer(gl.FRAMEBUFFER, _frameBuffersInvalidations);

  let front = 0;
  let back = 0;
  let left = 0;
  let right = 0;

  // Ground Collision:

  let maxModelIdCount = 0;
  currentModelId = 0;
  player_collision_modelIdCounter.fill(0);

  let lines = 0;
  let grav = 0;
  let hasGround = false;
  for (let y = 0; y < 32; ++y) {
    let up = 0;
    for (let x = 0; x < COLLISION_TEXTURE_SIZE; x++) {
      let i = (y * COLLISION_TEXTURE_SIZE + x) * 4;
      const a = (collision_buffer[i]! + collision_buffer[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1]!) / 255;
      i = collision_buffer[i + 2]!;
      up += a;
      if (i && a) {
        const count = player_collision_modelIdCounter[i]! + 1;
        player_collision_modelIdCounter[i] = count;
        if (count >= maxModelIdCount) {
          maxModelIdCount = count;
          currentModelId = i;
        }
      }
    }
    if (up < 3 && y > 5) {
      grav += y / 32;
    }
    if (up > 3) {
      if (y > 5) {
        lines += y / 15;
      }
      hasGround = true;
    }
  }

  player_gravity = lerp(player_gravity, hasGround ? 3 : 9, gameTimeDelta * 3);

  // push up and gravity

  // console.log(lines, grav);

  // player_position_global.y += lines / 44 - (hasGround ? 1 : player_gravity) * gameTimeDelta;

  player_position_global.y +=
    lines / 41 - (hasGround ? 1 : player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;

  for (let y = 32; y < COLLISION_TEXTURE_SIZE; ++y) {
    for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
      const t = 1.05 - Math.abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);
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

  // console.log(smallPush / (10 * COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE));

  player_position_global.x += right - left;
  player_position_global.z += back - front;

  const playerDesiredSpeed =
    movStrafe || movForward ? (movStrafe && movForward ? Math.SQRT1_2 : 1) * movSelectedVelocity * gameTimeDelta : 0;

  const playerSpeedCollision = 1 - Math.max(left, right, back, front);

  player_speed =
    lerp(player_speed, playerDesiredSpeed * playerSpeedCollision, gameTimeDelta * 5) * playerSpeedCollision;

  // console.log(playerDesiredSpeed, player_speed);

  player_position_global.z += movForward * player_speed;
  player_position_global.x += movStrafe * player_speed;

  const referenceMatrix = modelsByModelId[currentModelId]?.$finalMatrix || identity;

  if (currentModelId !== oldModelId) {
    if (DEBUG) {
      console.log("modelId: " + oldModelId + " -> " + currentModelId);
    }

    oldModelId = currentModelId;
    ({
      x: player_position_global.x,
      y: player_position_global.y,
      z: player_position_global.z,
    } = referenceMatrix.inverse().transformPoint(player_position_final));
  }

  // const oldx = player_position_final.x;
  // const oldz = player_position_final.z;

  ({
    x: player_position_final.x,
    y: player_position_final.y,
    z: player_position_final.z,
  } = referenceMatrix.transformPoint(player_position_global));

  // if (currentModelId) {
  //   player_collision_velocity_x = (player_position_final.x - oldx) / gameTimeDelta;
  //   player_collision_velocity_z = (player_position_final.z - oldz) / gameTimeDelta;
  // }

  if (DEBUG) {
    const debugCanvas = document.getElementById("debug-canvas") as HTMLCanvasElement;

    const buf = new Uint8ClampedArray(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

    if (debugCanvas) {
      for (let y = 0; y < COLLISION_TEXTURE_SIZE; ++y) {
        for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
          const i = ((COLLISION_TEXTURE_SIZE - y) * COLLISION_TEXTURE_SIZE + x) * 4;
          const r = collision_buffer[i]!;
          const g = collision_buffer[i + 1]!;
          const b = collision_buffer[i + 2]!;

          buf[(y * COLLISION_TEXTURE_SIZE + x) * 4] = r * 10;
          buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1] = g * 10;
          buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 2] = b ? 200 : 0;
          buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 3] = 255;
        }
      }

      const imgdata = new ImageData(buf, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

      if (!debug2dctx) {
        debug2dctx = debugCanvas.getContext("2d")!;
      }
      debug2dctx.putImageData(imgdata, 0, 0, 0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
    }
  }
};

if (DEBUG) {
  console.timeEnd("boot");
}
requestAnimationFrame(draw);

initInputHandlers();
