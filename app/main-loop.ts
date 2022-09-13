// shaders
import csm_vsSource from "./shaders/csm-vertex.vert";
import main_vsSource, {
  uniformName_projectionMatrix,
  uniformName_viewMatrix,
  uniformName_worldMatrix,
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
import collider_fsSource, { uniformName_modelId } from "./shaders/collider-fragment.frag";
import void_fsSource from "./shaders/void-fragment.frag";
import sky_vsSource from "./shaders/sky-vertex.vert";
import sky_fsSource, { uniformName_iResolution } from "./shaders/sky-fragment.frag";

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
} from "./math";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation } from "./camera";
import { csm_buildMatrix } from "./csm";
import { updateModels, rootModel, modelsByModelId } from "./game/scene";
import { playerModel, playerLegsModels } from "./game/objects";
import { gl, initShaderProgram, loadShader } from "./gl";
import {
  absoluteTime,
  gameTime,
  gameTimeDelta,
  gameTimeUpdate,
  lerpDamp,
  levers,
  loadGame,
  player_last_pulled_lever,
  worldStateUpdate,
} from "./game/world-state";
import {
  mainMenuVisible,
  initPage,
  player_first_person,
  keyboard_downKeys,
  KEY_BACK,
  KEY_FRONT,
  KEY_LEFT,
  KEY_RIGHT,
  touch_movementX,
  touch_movementY,
  KEY_INTERACT,
} from "./page";
import { initTriangleBuffers } from "./game/triangle-buffers";
import { renderModels } from "./game/render-models";
import { player_position_final } from "./game/player-position";
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

const CAMERA_PLAYER_Y_DIST = 13;
const CAMERA_PLAYER_Z_DIST = -18;

const PLAYER_LEGS_VELOCITY = 7 * 1.3;

const COLLISION_TEXTURE_SIZE = 128;

// let debug2dctx: CanvasRenderingContext2D | null | undefined;

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
  const player_position_global = { x: 0, y: 0, z: 0 };

  // let _gamepadStartPressed = false;
  let _gamepadInteractPressed = false;

  let camera_player_dir_x: number;
  let camera_player_dir_y: number;
  let camera_player_dir_z: number;

  const player_collision_modelIdCounter = new Int32Array(256);
  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

  const mainVertexShader = loadShader(main_vsSource);
  const csmShader = initShaderProgram(loadShader(csm_vsSource), void_fsSource);
  const skyShader = initShaderProgram(loadShader(sky_vsSource), sky_fsSource);
  const collisionShader = initShaderProgram(mainVertexShader, collider_fsSource);
  const mainShader = initShaderProgram(mainVertexShader, main_fsSource);

  skyShader();
  gl.uniform1i(skyShader(uniformName_groundTexture), 3); // TEXTURE3

  collisionShader();
  gl.uniformMatrix4fv(collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1.4, 0.59, 0.0001, 1));

  mainShader();
  gl.uniform1i(mainShader(uniformName_groundTexture), 3); // TEXTURE3

  const collision_frameBuffer = gl.createFramebuffer()!;
  const collision_renderBuffer = gl.createRenderbuffer();
  const collision_texture = gl.createTexture()!;

  const csm_render = integers_map(2, (csmSplit: number) => {
    let lightSpaceMatrix: Float32Array;
    const texture = gl.createTexture()!;
    const frameBuffer = gl.createFramebuffer();
    const lightSpaceMatrixLoc = mainShader(csmSplit ? uniformName_csm_matrix1 : uniformName_csm_matrix0);

    mainShader();
    gl.uniform1i(mainShader(csmSplit ? uniformName_csm_texture1 : uniformName_csm_texture0), csmSplit);

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

    return (matrix?: Float32Array) => {
      if (matrix) {
        lightSpaceMatrix = matrix;
        gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
        gl.invalidateFramebuffer(gl.FRAMEBUFFER, [gl.DEPTH_ATTACHMENT]);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        gl.uniformMatrix4fv(csmShader(uniformName_viewMatrix), false, lightSpaceMatrix);
        renderModels(csmShader(uniformName_worldMatrix), !player_first_person, 1);
      } else {
        gl.uniformMatrix4fv(lightSpaceMatrixLoc, false, lightSpaceMatrix);
      }
    };
  });

  initTriangleBuffers();

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

  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1024, 1024, 0, gl.RGBA, gl.UNSIGNED_BYTE, groundTextureImage);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  const player_respawn = () => {
    const { $matrix, $model } = levers[player_last_pulled_lever]!;

    const { x, y, z } = $matrix!.transformPoint({ x: 0, y: 8, z: -3 });

    player_position_final.x = player_position_global.x = x;
    player_position_final.y = player_position_global.y = player_model_y = y;
    player_position_final.z = player_position_global.z = z;

    player_speed = 0;
    player_gravity = 0;
    player_collision_velocity_x = 0;
    player_collision_velocity_z = 0;
    player_has_ground = 0;

    player_respawned = 1;
    currentModelIdTMinus1 = currentModelId = $model.$modelId || 1;
  };

  const updatePlayer = () => {
    let player_collision_x = 0;
    let player_collision_z = 0;

    const doVerticalCollisions = () => {
      let maxModelIdCount = 0;
      let nextModelId = 0;
      player_collision_modelIdCounter.fill(0);

      let lines = 0;
      let grav = 0;
      let hasGround: 0 | 1 = 0;
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
          hasGround = 1;
        }
      }

      if (nextModelId) {
        hasGround = 1;
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

      player_has_ground = hasGround;
      player_gravity = lerpDamp(player_gravity, hasGround ? 6.5 : 8, 4);

      // push up and gravity
      player_position_global.y +=
        lines / 41 - (hasGround ? 1 : player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;
    };

    const doHorizontalCollisions = () => {
      for (let y = 32; y < COLLISION_TEXTURE_SIZE; y += 2) {
        let front = 0;
        let back = 0;
        let left = 0;
        let right = 0;
        const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
        for (let x = (y >> 1) & 1; x < COLLISION_TEXTURE_SIZE; x += 2) {
          const i1 = yindex + x * 4;
          const i2 = yindex + (COLLISION_TEXTURE_SIZE - 1 - x) * 4;
          const dist1 = collision_buffer[i1]! / 255;
          const dist2 = collision_buffer[i2 + 1]! / 255;

          const t = 1 - abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);

          if (x > 10 && x < COLLISION_TEXTURE_SIZE - 10) {
            const dist1Opposite = collision_buffer[i2]! / 255;
            front = max(front, max(dist1 * t, dist1 * dist1Opposite * 2));
            const dist2Opposite = collision_buffer[i1 + 1]! / 255;
            back = max(back, max(dist2 * t, dist2 * dist2Opposite));
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

        const dx = right - left;
        const dz = back - front;

        if (abs(dx) > abs(player_collision_x)) {
          player_collision_x = dx;
        }
        if (abs(dz) > abs(player_collision_z)) {
          player_collision_z = dz;
        }
      }
    };

    NO_INLINE(doVerticalCollisions)();
    NO_INLINE(doHorizontalCollisions)();

    let strafe = (keyboard_downKeys[KEY_LEFT] ? 1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? -1 : 0) + touch_movementX;
    let forward = (keyboard_downKeys[KEY_FRONT] ? 1 : 0) + (keyboard_downKeys[KEY_BACK] ? -1 : 0) + touch_movementY;

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

    const referenceMatrix = modelsByModelId[currentModelId]?.$finalMatrix || identity;
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

    const ydiff = abs(player_model_y - y);
    player_model_y = lerpDamp(player_model_y, y + 0.1, ydiff * 50 + 5);

    if (currentModelId) {
      player_collision_velocity_x = (player_position_final.x - oldx) / gameTimeDelta;
      player_collision_velocity_z = (player_position_final.z - oldz) / gameTimeDelta;
    }

    if (strafe || forward) {
      player_look_angle_target = 90 - angle / DEG_TO_RAD;
    }
    player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, gameTimeDelta * 8);
    player_legs_speed = lerp(player_legs_speed, amount, gameTimeDelta * 10);
  };

  const mainLoop = (globalTime: number) => {
    let camera_view: DOMMatrixReadOnly = identity;

    requestAnimationFrame(mainLoop);

    gameTimeUpdate(globalTime);

    // *** COLLISIONS ***

    if (gameTimeDelta > 0) {
      // *** COLLISION from the previos frame ***

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
      gl.invalidateFramebuffer(gl.FRAMEBUFFER, [gl.COLOR_ATTACHMENT0]);

      NO_INLINE(updatePlayer)();

      updateModels(rootModel);

      // if (DEBUG) {
      //   const debugCanvas = document.getElementById("debug-canvas") as HTMLCanvasElement;

      //   const buf = new Uint8ClampedArray(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

      //   if (debugCanvas) {
      //     for (let y = 0; y < COLLISION_TEXTURE_SIZE; ++y) {
      //       for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
      //         const i = ((COLLISION_TEXTURE_SIZE - y) * COLLISION_TEXTURE_SIZE + x) * 4;
      //         const r = collision_buffer[i]!;
      //         const g = collision_buffer[i + 1]!;
      //         const b = collision_buffer[i + 2]!;

      //         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4] = r;
      //         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1] = g;
      //         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 2] = b ? 200 : 0;
      //         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 3] = 255;
      //       }
      //     }

      //     const imgdata = new ImageData(buf, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

      //     if (!debug2dctx) {
      //       debug2dctx = debugCanvas.getContext("2d")!;
      //     }
      //     debug2dctx.putImageData(imgdata, 0, 0, 0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
      //   }
      // }
    }

    if (gameTimeDelta > 0) {
      if (!DEBUG_CAMERA) {
        camera_player_dir_x = interpolate_with_hysteresis(
          camera_player_dir_x,
          player_position_final.x,
          0.5,
          gameTimeDelta,
        );
        camera_player_dir_y = interpolate_with_hysteresis(
          camera_player_dir_y,
          player_position_final.y,
          2,
          gameTimeDelta,
        );
        camera_player_dir_z = interpolate_with_hysteresis(
          camera_player_dir_z,
          player_position_final.z,
          0.5,
          gameTimeDelta,
        );

        if (player_first_person) {
          const interpolationSpeed = player_respawned * 200;
          camera_position.x = lerpDamp(camera_position.x, player_position_final.x, 18 + interpolationSpeed);
          camera_position.y = lerpDamp(camera_position.y, player_position_final.y + 1.5, 15 + interpolationSpeed);
          camera_position.z = lerpDamp(camera_position.z, player_position_final.z, 18 + interpolationSpeed);
          camera_rotation.x = max(min(camera_rotation.x, 87), -87);
        } else {
          camera_position.x = interpolate_with_hysteresis(camera_position.x, camera_player_dir_x, 1, gameTimeDelta * 2);
          camera_position.y = interpolate_with_hysteresis(
            camera_position.y,
            camera_player_dir_y + CAMERA_PLAYER_Y_DIST + player_respawned * 15,
            4,
            gameTimeDelta * 2,
          );
          camera_position.z = interpolate_with_hysteresis(
            camera_position.z,
            camera_player_dir_z + CAMERA_PLAYER_Z_DIST,
            1,
            gameTimeDelta * 2,
          );

          const viewDirDiffz = camera_position.z - camera_player_dir_z;
          if (abs(viewDirDiffz) > 1) {
            const viewDirDiffx = camera_position.x - camera_player_dir_x;
            const viewDirDiffy = camera_position.y - camera_player_dir_y;
            camera_rotation.y = 270 + Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD;
            camera_rotation.x = 90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), viewDirDiffy) / DEG_TO_RAD;
          }
        }
      }
      camera_rotation.y = angle_wrap_degrees(camera_rotation.y);

      if (gameTimeDelta > 0) {
        worldStateUpdate();
        keyboard_downKeys[KEY_INTERACT] = 0;

        if (player_position_final.y < (player_position_final.x < -25 || player_position_final.z < 109 ? -25 : -9)) {
          // Player fell in lava
          player_respawn();
        }
      }
    }

    camera_view = mainMenuVisible
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

      // first collision render

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
      gl.colorMask(true, false, true, false);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        identity
          .rotate(0, 180)
          .invertSelf()
          .translateSelf(-player_position_final.x, -player_position_final.y, 0.3 - player_position_final.z)
          .toFloat32Array(),
      );
      renderModels(collisionShader(uniformName_worldMatrix), 0, 1, collisionShader(uniformName_modelId));

      // second collision render

      gl.colorMask(false, true, false, false);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.colorMask(false, true, true, false);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        identity
          .translate(-player_position_final.x, -player_position_final.y, -player_position_final.z - 0.3)
          .toFloat32Array(),
      );
      renderModels(collisionShader(uniformName_worldMatrix), 0, 1, collisionShader(uniformName_modelId));
      gl.colorMask(true, true, true, true);

      // Special handling for the second boat (lever 7) - the boat must be on the side of the map the player is
      if (currentModelId === 1) {
        levers[9]!.$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0;
      }
    }

    // *** CASCADED SHADOWMAPS ***

    csmShader();

    gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

    csm_render[0]!(csm_buildMatrix(camera_view, zNear, CSM_PLANE_DISTANCE, 10));
    csm_render[1]!(csm_buildMatrix(camera_view, CSM_PLANE_DISTANCE, zFar, 11));

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // *** MAIN RENDER ***

    mainShader();

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, mat_perspective(zNear, zFar));
    gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, camera_view.toFloat32Array());
    gl.uniform3f(mainShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);

    csm_render[0]!();
    csm_render[1]!();

    renderModels(mainShader(uniformName_worldMatrix), !player_first_person);

    // *** SKY RENDER ***

    skyShader();

    gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);
    if (mainMenuVisible) {
      gl.uniform3f(skyShader(uniformName_viewPos), 0, 0, 0);
    } else {
      gl.uniform3f(skyShader(uniformName_viewPos), camera_position.x, camera_position.y, camera_position.z);
    }
    gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, camera_view.inverse().toFloat32Array());

    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);
  };

  playerModel._update = () =>
    identity
      .translate(player_position_final.x, player_model_y, player_position_final.z)
      .rotateSelf(0, player_look_angle);

  playerLegsModels.map((model, i) => {
    model._update = () =>
      identity
        .translate(
          0,
          player_legs_speed * clamp01(Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * i - Math.PI / 2) * 0.45),
        )
        .rotateSelf(
          player_legs_speed * Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * i) * (0.25 / DEG_TO_RAD),
          0,
        );
  });

  loadGame();

  updateModels(rootModel);

  NO_INLINE(initPage)();

  player_respawn();

  camera_position.x = camera_player_dir_x = player_position_final.x;
  camera_position.y = (camera_player_dir_y = player_position_final.y) + CAMERA_PLAYER_Y_DIST;
  camera_position.z = (camera_player_dir_z = player_position_final.z) + CAMERA_PLAYER_Z_DIST;

  requestAnimationFrame(mainLoop);
};
