// shaders
import csm_vsSource from "./shaders/csm-vertex.vert";
import main_vsSource, {
  uniformName_projectionMatrix,
  uniformName_viewMatrix,
  uniformName_worldMatrices,
} from "./shaders/main-vertex.vert";
import main_fsSource, {
  uniformName_viewPos,
  uniformName_csm_matrix0,
  uniformName_csm_matrix1,
  uniformName_csm_texture0,
  uniformName_csm_texture1,
  uniformName_groundTexture,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE as CSM_PLANE_DISTANCE,
} from "./shaders/main-fragment.frag";
import collider_fsSource from "./shaders/collider-fragment.frag";
import void_fsSource from "./shaders/void-fragment.frag";
import sky_vsSource from "./shaders/sky-vertex.vert";
import sky_fsSource, { uniformName_iResolution } from "./shaders/sky-fragment.frag";

import {
  GAMEPAD_BUTTON_LEFT,
  GAMEPAD_BUTTON_RIGHT,
  GAMEPAD_BUTTON_UP,
  GAMEPAD_BUTTON_DOWN,
  GAMEPAD_BUTTON_A,
  GAMEPAD_BUTTON_X,
  GAMEPAD_BUTTON_B,
  GAMEPAD_BUTTON_Y,
} from "./utils/keycodes";
import {
  abs,
  angle_wrap_degrees,
  clamp01,
  DEG_TO_RAD,
  integers_map,
  interpolate_with_hysteresis,
  lerp,
  max,
  min,
  identity,
  mat_perspectiveXY,
  angle_lerp_degrees,
  matrixToArray,
} from "./math";
import {
  absoluteTime,
  gameTime,
  gameTimeDelta,
  gameTimeUpdate,
  keyboard_downKeys,
  KEY_BACK,
  KEY_FRONT,
  KEY_INTERACT,
  KEY_LEFT,
  KEY_RIGHT,
  lerpDamp,
  loadGame,
  mainMenuVisible,
  player_last_pulled_lever,
  worldStateUpdate,
} from "./game/world-state";
import {
  allModels,
  levers,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  MODEL_ID_SOUL_COLLISION,
  MODEL_KIND_GAME,
  player_position_final,
} from "./game/models";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation } from "./camera";
import { csm_buildMatrix } from "./csm";
import { touch_movementX, touch_movementY, player_first_person } from "./page";
import { gl } from "./gl";
import { loadShader, initShaderProgram } from "./shaders-utils";
import { renderModels } from "./game/render-models";

const CAMERA_PLAYER_Y_DIST = 13;
const CAMERA_PLAYER_Z_DIST = -18;

const PLAYER_LEGS_VELOCITY = 7 * 1.3;

const COLLISION_TEXTURE_SIZE = 128;

export const startMainLoop = (groundTextureImage: HTMLImageElement) => {
  let oldModelId: number | undefined;
  let currentModelIdTMinus1 = 0;
  let currentModelId = 0;

  let player_has_ground: 0 | 1 | undefined;
  let player_respawned: 0 | 1 = 1;
  let player_look_angle_target = 0;
  let player_look_angle = 0;
  let player_legs_speed = 0;
  let player_gravity: number;
  let player_speed: number;
  let player_collision_velocity_x: number;
  let player_collision_velocity_z: number;
  let player_model_y: number;
  let player_collision_x: number;
  let player_collision_z: number;
  const player_position_global = { x: 0, y: 0, z: 0 };

  // let _gamepadStartPressed = false;
  let _gamepadInteractPressed = false;

  let camera_lookat_x: number;
  let camera_lookat_y: number;
  let camera_lookat_z: number;

  const player_respawn = () => {
    const { $parent, $locMatrix } = levers[player_last_pulled_lever]!;

    const { x, y, z } = $locMatrix!.transformPoint({ x: 0, y: 8, z: -3 });

    player_position_final.x = player_position_global.x = x;
    player_position_final.y = player_position_global.y = player_model_y = y;
    player_position_final.z = player_position_global.z = z;

    currentModelIdTMinus1 = currentModelId = $parent.$modelId || 1;
    player_speed = 0;
    player_gravity = 0;
    player_collision_velocity_x = 0;
    player_collision_velocity_z = 0;
    player_has_ground = 0;
    player_respawned = 1;
  };

  const player_collision_modelIdCounter = new Int32Array(256);
  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

  const csm_framebuffer = gl.createFramebuffer();
  const collision_frameBuffer = gl.createFramebuffer()!;
  const collision_renderBuffer = gl.createRenderbuffer();
  const collision_texture = gl.createTexture()!;

  const mainVertexShader = loadShader(main_vsSource);
  const csmShader = initShaderProgram(loadShader(csm_vsSource), void_fsSource);
  const skyShader = initShaderProgram(loadShader(sky_vsSource), sky_fsSource);
  const collisionShader = initShaderProgram(mainVertexShader, collider_fsSource);
  const mainShader = initShaderProgram(mainVertexShader, main_fsSource);

  collisionShader();
  gl.uniformMatrix4fv(collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1.4, 0.59, 0.0001, 1));

  skyShader();
  gl.uniform1i(skyShader(uniformName_groundTexture), 3); // TEXTURE3

  mainShader();
  gl.uniform1i(mainShader(uniformName_groundTexture), 3); // TEXTURE3

  const csm_render = integers_map(2, (csmSplit: number) => {
    const texture = gl.createTexture()!;
    const lightSpaceMatrix: Float32Array = new Float32Array(16);
    const lightSpaceMatrixLoc = mainShader(csmSplit ? uniformName_csm_matrix1 : uniformName_csm_matrix0);
    gl.uniform1i(mainShader(csmSplit ? uniformName_csm_texture1 : uniformName_csm_texture0), csmSplit);

    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);

    // Disable rendering to the csm color buffer, we just need the depth buffer
    gl.drawBuffers([gl.NONE]);
    gl.readBuffer(gl.NONE);

    gl.activeTexture(gl.TEXTURE0 + csmSplit);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.DEPTH_COMPONENT24,
      CSM_TEXTURE_SIZE,
      CSM_TEXTURE_SIZE,
      0,
      gl.DEPTH_COMPONENT,
      gl.UNSIGNED_INT,
      null,
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL); // Can be LESS or LEQUAL
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);

    return (matrix?: DOMMatrix) => {
      if (matrix) {
        matrixToArray(matrix, lightSpaceMatrix);
        gl.uniformMatrix4fv(csmShader(uniformName_viewMatrix), false, lightSpaceMatrix);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture, 0);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        renderModels(csmShader(uniformName_worldMatrices), !player_first_person);
      } else {
        gl.uniformMatrix4fv(lightSpaceMatrixLoc, false, lightSpaceMatrix);
      }
    };
  });

  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.enable(gl.CULL_FACE); // Don't render triangle backs

  gl.clearDepth(1); // Clear everything. Default value is 1
  gl.cullFace(gl.BACK); // Default value is already BACK
  gl.depthFunc(gl.LEQUAL); // LEQUAL to make sky works
  gl.clearColor(0, 0, 0, 1);

  // Collision framebuffer

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

  // Ground texture

  gl.activeTexture(gl.TEXTURE3);
  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1024, 1024, 0, gl.RGBA, gl.UNSIGNED_BYTE, groundTextureImage);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  const doHorizontalCollisions = () => {
    for (let y = 32; y < COLLISION_TEXTURE_SIZE; y += 2) {
      let front = 0;
      let back = 0;
      let left = 0;
      let right = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = y & 1; x < COLLISION_TEXTURE_SIZE; x += 2) {
        const i1 = yindex + x * 4;
        const i2 = yindex + (COLLISION_TEXTURE_SIZE - 1 - x) * 4;
        const dist1 = collision_buffer[i1]! / 255;
        const dist2 = collision_buffer[i2 + 1]! / 255;
        const t = 1 - abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);

        if (x > 10 && x < COLLISION_TEXTURE_SIZE - 10) {
          front = max(front, max(dist1 * t, (dist1 * collision_buffer[i2]!) / 255));
          back = max(back, max(dist2 * t, (dist2 * collision_buffer[i1 + 1]!) / 255));
        }

        if (x < COLLISION_TEXTURE_SIZE / 2 - 10 || x > COLLISION_TEXTURE_SIZE / 2 + 10) {
          const xdist = ((1 - t) * max(dist1, dist2)) / 3;
          if (xdist > 0.001) {
            if (x < COLLISION_TEXTURE_SIZE / 2 && left < xdist) {
              left = xdist;
            } else if (x > COLLISION_TEXTURE_SIZE / 2 && right < xdist) {
              right = xdist;
            }
          }
        }
      }

      if (abs(right - left) > abs(player_collision_x)) {
        player_collision_x = right - left;
      }
      if (abs(back - front) > abs(player_collision_z)) {
        player_collision_z = back - front;
      }
    }
  };

  const doVerticalCollisions = () => {
    let maxModelIdCount = 0;
    let nextModelId = 0;
    let lines = 0;
    let grav = 0;
    player_collision_modelIdCounter.fill(0);
    for (let y = 0; y < 31; ++y) {
      let up = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = 0; x < COLLISION_TEXTURE_SIZE - 0; x++) {
        let i = yindex + x * 4;
        const a = (collision_buffer[i]! + collision_buffer[i + 1]!) / 255;
        i = collision_buffer[i + 2]!;
        if (x > 14 && x < COLLISION_TEXTURE_SIZE - 14) {
          up += a;
        }
        if (i && a) {
          const count = player_collision_modelIdCounter[i]! + 1;
          player_collision_modelIdCounter[i] = count;
          if (count >= maxModelIdCount) {
            maxModelIdCount = count;
            nextModelId = i;
          }
        }
      }
      if (up < 3 && y > 5) {
        grav += y / 32;
      }
      if (up > 3) {
        if (y > 7) {
          lines += y / 15;
        }
        player_has_ground = 1;
      }
    }

    if (nextModelId) {
      player_has_ground = 1;
    }

    if (player_respawned) {
      // keep the previous modelId until the player touch ground
      if (nextModelId) {
        player_respawned = 0;
        currentModelId = nextModelId;
      }
    } else {
      currentModelId = nextModelId || currentModelIdTMinus1;
    }
    currentModelIdTMinus1 = nextModelId;

    player_gravity = lerpDamp(player_gravity, player_has_ground ? 6.5 : 8, 4);

    // push up and gravity
    player_position_global.y +=
      lines / 41 - (player_has_ground ? 1 : player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;
  };

  const updatePlayer = () => {
    player_collision_x = 0;
    player_collision_z = 0;
    player_has_ground = 0;

    NO_INLINE(doHorizontalCollisions)();
    NO_INLINE(doVerticalCollisions)();

    let strafe = touch_movementX + (keyboard_downKeys[KEY_LEFT] ? 1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? -1 : 0);
    let forward = touch_movementY + (keyboard_downKeys[KEY_FRONT] ? 1 : 0) + (keyboard_downKeys[KEY_BACK] ? -1 : 0);

    const gamepad = navigator.getGamepads()[0];
    if (gamepad) {
      const { buttons, axes } = gamepad;
      const getGamepadButtonState = (index: number) => buttons[index]?.pressed || (buttons[index]?.value as any) > 0;

      const interactButtonPressed =
        getGamepadButtonState(GAMEPAD_BUTTON_A) ||
        getGamepadButtonState(GAMEPAD_BUTTON_X) ||
        getGamepadButtonState(GAMEPAD_BUTTON_Y) ||
        getGamepadButtonState(GAMEPAD_BUTTON_B);
      if (interactButtonPressed !== _gamepadInteractPressed) {
        _gamepadInteractPressed = interactButtonPressed;
        if (_gamepadInteractPressed) {
          keyboard_downKeys[KEY_INTERACT] = 1;
        }
      }

      strafe +=
        (abs(-axes[0]!) > 0.2 ? -axes[0]! : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_LEFT) ? 1 : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_RIGHT) ? -1 : 0);

      forward +=
        (abs(-axes[1]!) > 0.2 ? -axes[1]! : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_UP) ? 1 : 0) +
        (getGamepadButtonState(GAMEPAD_BUTTON_DOWN) ? -1 : 0);

      // const startPressed = getGamepadButtonState(GAMEPAD_BUTTON_START);
      // if (_gamepadStartPressed !== startPressed && startPressed && game_play_clicked_once) {
      //   setMainMenuVisible(!mainMenuVisible);
      // }
      // _gamepadStartPressed = startPressed;

      if (player_first_person) {
        if (abs(axes[2]!) > 0.3) {
          camera_rotation.y += axes[2]! * 80 * gameTimeDelta;
        }
        if (abs(axes[3]!) > 0.3) {
          camera_rotation.x += axes[3]! * 80 * gameTimeDelta;
        }
      }
    }

    if (abs(forward) < 0.05) {
      forward = 0;
    }
    if (abs(strafe) < 0.05) {
      strafe = 0;
    }

    const angle = Math.atan2(forward, strafe);
    const amount = clamp01(Math.hypot(forward, strafe));

    strafe = amount * Math.cos(angle);
    forward = amount * Math.sin(angle);

    const playerSpeedCollision = clamp01(1 - max(abs(player_collision_x), abs(player_collision_z)) * 5);

    if (!currentModelId) {
      player_collision_x += player_collision_velocity_x * playerSpeedCollision * gameTimeDelta;
      player_collision_z += player_collision_velocity_z * playerSpeedCollision * gameTimeDelta;
    }
    player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4);
    player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4);

    player_speed = lerpDamp(
      player_speed,
      player_has_ground ? (strafe || forward ? (player_has_ground ? 7 : 4) : 0) * playerSpeedCollision : 0,
      player_has_ground ? (playerSpeedCollision > 0.1 ? 10 : strafe || forward ? 5 : 7) : 1,
    );

    const movementRadians = player_first_person ? camera_rotation.y * DEG_TO_RAD : Math.PI;
    const s = Math.sin(movementRadians) * player_speed * gameTimeDelta;
    const c = Math.cos(movementRadians) * player_speed * gameTimeDelta;
    player_collision_x -= strafe * c - forward * s;
    player_collision_z -= strafe * s + forward * c;

    const referenceMatrix =
      (allModels[currentModelId]!.$kind === MODEL_KIND_GAME && allModels[currentModelId]!.$matrix) || identity;
    const inverseReferenceRotationMatrix = referenceMatrix.inverse();
    inverseReferenceRotationMatrix.m41 = 0;
    inverseReferenceRotationMatrix.m42 = 0;
    inverseReferenceRotationMatrix.m43 = 0;
    ({ x: player_collision_x, z: player_collision_z } = inverseReferenceRotationMatrix.transformPoint({
      x: player_collision_x,
      z: player_collision_z,
      w: 0,
    }));

    player_position_global.x += player_collision_x;
    player_position_global.z += player_collision_z;

    if (currentModelId !== oldModelId) {
      if (DEBUG) {
        console.log("modelId: " + oldModelId + " -> " + currentModelId);
      }

      oldModelId = currentModelId;

      const { x, y, z } = referenceMatrix.inverse().transformPoint(player_position_final);
      player_position_global.x = x;
      player_position_global.y = y;
      player_position_global.z = z;
    }

    const oldx = player_position_final.x;
    const oldz = player_position_final.z;

    const { x, y, z } = referenceMatrix.transformPoint(player_position_global);
    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;

    if (currentModelId) {
      player_collision_velocity_x = (x - oldx) / gameTimeDelta;
      player_collision_velocity_z = (z - oldz) / gameTimeDelta;
    }

    if (strafe || forward) {
      player_look_angle_target = 90 - angle / DEG_TO_RAD;
    }
    player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, gameTimeDelta * 8);
    player_legs_speed = lerp(player_legs_speed, amount, gameTimeDelta * 10);

    player_model_y = abs(player_model_y - y) > 0.03 ? y : lerpDamp(player_model_y, y, 2);

    if (!DEBUG_CAMERA) {
      camera_lookat_x = interpolate_with_hysteresis(camera_lookat_x, x, 0.5, gameTimeDelta);
      camera_lookat_y = interpolate_with_hysteresis(camera_lookat_y, y, 2, gameTimeDelta);
      camera_lookat_z = interpolate_with_hysteresis(camera_lookat_z, z, 0.5, gameTimeDelta);

      if (player_first_person) {
        camera_position.x = lerpDamp(camera_position.x, x, player_respawned * 666 + 18);
        camera_position.y = lerpDamp(camera_position.y, player_model_y + 1.5, player_respawned * 666 + 18);
        camera_position.z = lerpDamp(camera_position.z, z, player_respawned * 666 + 18);
      } else {
        camera_position.x = interpolate_with_hysteresis(camera_position.x, camera_lookat_x, 1, gameTimeDelta * 2);
        camera_position.y = interpolate_with_hysteresis(
          camera_position.y,
          camera_lookat_y + CAMERA_PLAYER_Y_DIST + player_respawned * 15,
          4,
          gameTimeDelta * 2,
        );
        camera_position.z = interpolate_with_hysteresis(
          camera_position.z,
          camera_lookat_z + CAMERA_PLAYER_Z_DIST,
          1,
          gameTimeDelta * 2,
        );

        const viewDirDiffz = camera_position.z - camera_lookat_z;
        if (abs(viewDirDiffz) > 1) {
          const viewDirDiffx = camera_position.x - camera_lookat_x;
          camera_rotation.y = 270 + Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD;
          camera_rotation.x =
            90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), camera_position.y - camera_lookat_y) / DEG_TO_RAD;
        }
      }

      camera_rotation.x = max(min(camera_rotation.x, 87), -87);
      camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
    }
  };

  const mainLoop = (globalTime: number) => {
    requestAnimationFrame(mainLoop);

    gameTimeUpdate(globalTime);

    if (gameTimeDelta > 0) {
      // read collision shader output

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.finish();
      gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
      gl.invalidateFramebuffer(gl.DRAW_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);
      gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);

      NO_INLINE(updatePlayer)();

      worldStateUpdate();

      if (player_position_final.y < (player_position_final.x < -25 || player_position_final.z < 109 ? -25 : -9)) {
        // Player fell in lava
        player_respawn();
      }

      // Special handling for the second boat (lever 7) - the boat must be on the side of the map the player is
      if (currentModelId === 1) {
        levers[9]!.$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0;
      }

      keyboard_downKeys[KEY_INTERACT] = 0;
    }

    const camera_view = mainMenuVisible
      ? identity
          .rotate(-20, -90)
          .invertSelf()
          .translateSelf(4.5, -2, -3.2 + clamp01(hC.clientWidth / 1000))
      : identity
          .rotate(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
          .invertSelf()
          .translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);

    if (gameTimeDelta > 0) {
      // *** COLLISION RENDERER ***

      collisionShader();

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

      // first collision render

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.colorMask(true, false, true, false);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          identity
            .rotate(0, 180)
            .invertSelf()
            .translateSelf(-player_position_final.x, -player_position_final.y, 0.3 - player_position_final.z),
        ),
      );
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION);

      // second collision render

      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.colorMask(false, true, true, false);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          identity.translate(-player_position_final.x, -player_position_final.y, -player_position_final.z - 0.3),
        ),
      );
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION);

      // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.flush();
    }

    // *** CASCADED SHADOWMAPS ***

    csmShader();

    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);
    gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

    csm_render[0]!(csm_buildMatrix(camera_view, zNear, CSM_PLANE_DISTANCE, 10));
    csm_render[1]!(csm_buildMatrix(camera_view, CSM_PLANE_DISTANCE, zFar, 11));

    // *** MAIN RENDER ***

    mainShader();

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.colorMask(true, true, true, true);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    csm_render[0]!();
    csm_render[1]!();

    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, mat_perspective(zNear, zFar));
    gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, matrixToArray(camera_view));
    gl.uniform3f(mainShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);

    renderModels(mainShader(uniformName_worldMatrices), !player_first_person);

    // *** SKY RENDER ***

    skyShader();

    gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);
    if (mainMenuVisible) {
      gl.uniform3f(skyShader(uniformName_viewPos), 0, 0, 0);
    } else {
      gl.uniform3f(skyShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);
    }
    gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, matrixToArray(camera_view.inverse()));

    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
    gl.flush();
  };

  allModels[MODEL_ID_PLAYER_BODY]!._update = () =>
    identity
      .translate(player_position_final.x, player_model_y, player_position_final.z)
      .rotateSelf(0, player_look_angle);

  [MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1].map((modelId, i) => {
    allModels[modelId]!._update = () =>
      allModels[MODEL_ID_PLAYER_BODY]!.$matrix.translate(
        0,
        player_legs_speed * clamp01(Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1) - Math.PI / 2) * 0.45),
      ).rotateSelf(
        player_legs_speed * Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1)) * (0.25 / DEG_TO_RAD),
        0,
      );
  });

  loadGame();

  worldStateUpdate();

  player_respawn();

  camera_position.x = camera_lookat_x = player_position_final.x;
  camera_position.y = (camera_lookat_y = player_position_final.y) + CAMERA_PLAYER_Y_DIST;
  camera_position.z = (camera_lookat_z = player_position_final.z) + CAMERA_PLAYER_Z_DIST;

  requestAnimationFrame(mainLoop);
};
