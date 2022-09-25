import { max, clamp, DEG_TO_RAD, identity, angle_lerp_degrees, lerp, angle_wrap_degrees, threshold } from "./math";
import {
  levers,
  player_position_final,
  allModels,
  MODEL_KIND_GAME,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
} from "./game/models";
import {
  player_last_pulled_lever,
  lerpDamp,
  gameTimeDelta,
  keyboard_downKeys,
  gameTime,
  firstBoatLerp,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_FRONT,
  KEY_BACK,
  KEY_INTERACT,
  damp,
} from "./game/world-state";
import { camera_rotation, camera_position } from "./camera";
import {
  GAMEPAD_BUTTON_A,
  GAMEPAD_BUTTON_X,
  GAMEPAD_BUTTON_Y,
  GAMEPAD_BUTTON_B,
  GAMEPAD_BUTTON_LEFT,
  GAMEPAD_BUTTON_RIGHT,
  GAMEPAD_BUTTON_UP,
  GAMEPAD_BUTTON_DOWN,
} from "./utils/keycodes";
import { touch_movementX, touch_movementY, player_first_person } from "./page";
import { gl } from "./gl";

export let player_update: () => void;

export const CAMERA_PLAYER_Y_DIST = 13;

export const CAMERA_PLAYER_Z_DIST = -18;

export const PLAYER_LEGS_VELOCITY = 7 * 1.3;

export const PLAYER_RESPAWN_Z = -2.4;

export const COLLISION_TEXTURE_SIZE = 128;

export const player_position_global = { x: 0, y: 0, z: 0 };

export const player_init = () => {
  let gamepadInteractPressed: 0 | 1 | undefined;

  let currentModelId: number;
  let currentModelIdTMinus1: number;
  let oldModelId: number | undefined;

  let player_gravity = 2;
  let player_respawned: 0 | 1 | 2 = 2;
  let boot: 0 | 1 = 1;
  let player_look_angle_target = 0;
  let player_look_angle = 0;
  let player_has_ground: 0 | 1;

  let player_legs_speed: number;

  let player_speed: number;
  let player_collision_velocity_x: number;
  let player_collision_velocity_z: number;

  let player_model_y: number;

  let player_collision_x: number;
  let player_collision_z: number;

  let camera_lookat_x: number;
  let camera_lookat_y: number;
  let camera_lookat_z: number;

  const player_collision_modelIdCounter = new Int32Array(256);
  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

  // const interpolate_with_hysteresis = /* @__PURE__ */ (previous: number, desired: number, hysteresis: number) => {
  //   return boot ? desired: lerpDamp(previous, desired, 2 + clamp(Math.abs(previous - desired) ** 0.9 - hysteresis, 0, 3.2));
  // };

  const interpolate_with_hysteresis = /* @__PURE__ */ (previous: number, desired: number, hysteresis: number) =>
    boot
      ? desired
      : lerp(
          previous +
            Math.sign(desired - previous) *
              max(0, Math.abs(desired - previous) ** 0.9 - hysteresis) *
              gameTimeDelta *
              2,
          desired,
          gameTimeDelta / 7,
        );

  const doHorizontalCollisions = () => {
    player_collision_x = 0;
    player_collision_z = 0;
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
        const t = 1 - Math.abs(2 * (x / (COLLISION_TEXTURE_SIZE - 1)) - 1);

        if (x > 10 && x < COLLISION_TEXTURE_SIZE - 10) {
          front = max(max(dist1 * t, (dist1 * collision_buffer[i2]!) / 255), front);
          back = max(max(dist2 * t, (dist2 * collision_buffer[i1 + 1]!) / 255), back);
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

      if (Math.abs(right - left) > Math.abs(player_collision_x)) {
        player_collision_x = right - left;
      }
      if (Math.abs(back - front) > Math.abs(player_collision_z)) {
        player_collision_z = back - front;
      }
    }
  };

  const doVerticalCollisions = () => {
    let maxModelIdCount = 0;
    let nextModelId = 0;
    let lines = 0;
    let grav = 0;
    player_has_ground = 0;
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

    player_gravity = lerpDamp(player_gravity, player_has_ground ? 6.5 : 8, 4);

    // push up and gravity
    player_position_global.y +=
      lines / 41 - (player_has_ground || player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;

    currentModelId = nextModelId || currentModelIdTMinus1;
    currentModelIdTMinus1 = nextModelId;
  };

  const getReferenceMatrix = () =>
    player_respawned
      ? levers[player_last_pulled_lever]!.$parent.$matrix
      : (oldModelId && allModels[oldModelId]!.$kind === MODEL_KIND_GAME && allModels[oldModelId]!.$matrix) || identity;

  const playerMovedGlobalPos = (referenceMatrix: DOMMatrixReadOnly) => {
    const inverseReferenceRotationMatrix = referenceMatrix.inverse();
    inverseReferenceRotationMatrix.m41 = 0;
    inverseReferenceRotationMatrix.m42 = 0;
    inverseReferenceRotationMatrix.m43 = 0;
    const v = inverseReferenceRotationMatrix.transformPoint({
      x: player_collision_x,
      z: player_collision_z,
      w: 0,
    });
    player_position_global.x += v.x;
    player_position_global.z += v.z;
    return referenceMatrix.transformPoint(player_position_global);
  };

  const player_move = () => {
    let referenceMatrix = getReferenceMatrix();

    const { x, y, z } =
      player_respawned > 1
        ? levers[player_last_pulled_lever]!.$locMatrix!.transformPoint({
            x: 0,
            y: player_last_pulled_lever || firstBoatLerp > 0.9 ? 15 : 1,
            z: PLAYER_RESPAWN_Z,
          })
        : playerMovedGlobalPos(referenceMatrix);

    const dx = x - player_position_final.x;
    const dz = z - player_position_final.z;

    if (player_respawned) {
      player_respawned = player_has_ground && currentModelId ? 0 : 1;
    }

    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;

    if (player_respawned || currentModelId !== oldModelId) {
      if (DEBUG && currentModelId !== oldModelId) {
        console.log("modelId: " + oldModelId + " -> " + currentModelId);
      }

      oldModelId = currentModelId;
      referenceMatrix = getReferenceMatrix();

      const v = referenceMatrix.inverse().transformPoint(player_position_final);
      player_position_global.x = v.x;
      player_position_global.y = v.y;
      player_position_global.z = v.z;
    }

    if (y < (x < -25 || z < 109 ? -25 : -9)) {
      // Player fell in lava
      player_respawned = 2;
    }

    // if (camera_lookat_x === undefined) {
    //   camera_position.x = camera_lookat_x = x;
    //   camera_position.y = (camera_lookat_y = player_model_y = y) + CAMERA_PLAYER_Y_DIST;
    //   camera_position.z = (camera_lookat_z = z) + CAMERA_PLAYER_Z_DIST;
    // }

    if (currentModelId) {
      player_collision_velocity_x = dx / gameTimeDelta;
      player_collision_velocity_z = dz / gameTimeDelta;
    }

    // Special handling for the second boat (lever 7) - the boat must be on the side of the map the player is
    if (currentModelId === 1) {
      levers[9]!.$value = x < -15 && z < 0 ? 1 : 0;
    }

    player_model_y = lerp(lerpDamp(player_model_y, y, 2), y, player_respawned || Math.abs(player_model_y - y) * 8);
    camera_lookat_y = interpolate_with_hysteresis(camera_lookat_y, player_model_y, 3);
    camera_lookat_x = interpolate_with_hysteresis(camera_lookat_x, x, 2);
    camera_lookat_z = interpolate_with_hysteresis(camera_lookat_z, z, 2);

    if (!DEBUG_CAMERA) {
      if (player_first_person) {
        const d = player_respawned + damp(18);
        camera_position.x = lerp(camera_position.x, x, d);
        camera_position.y = lerp(camera_position.y, player_model_y + 1.5, d);
        camera_position.z = lerp(camera_position.z, z, d);
        camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
      } else {
        let d = boot + damp(2);
        camera_position.x = lerp(camera_position.x, camera_lookat_x, d);
        camera_position.y = lerp(
          camera_position.y,
          max(camera_lookat_y + clamp((-60 - z) / 8, 0, 20) + CAMERA_PLAYER_Y_DIST, 6),
          d,
        );
        camera_position.z = lerp(camera_position.z, camera_lookat_z + CAMERA_PLAYER_Z_DIST, d);

        const viewDirDiffx = camera_lookat_x - camera_position.x;
        const viewDirDiffz = -Math.abs(camera_lookat_z - camera_position.z);

        d = boot + damp(4);
        camera_rotation.x = angle_lerp_degrees(
          camera_rotation.x,
          90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), camera_position.y - camera_lookat_y) / DEG_TO_RAD,
          d,
        );

        camera_rotation.y = angle_lerp_degrees(
          camera_rotation.y,
          90 - angle_wrap_degrees(Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD),
          d,
        );
      }

      camera_rotation.x = clamp(camera_rotation.x, -87, 87);
    }

    boot = 0;

    const playerMatrix = (allModels[MODEL_ID_PLAYER_BODY]!.$matrix = identity
      .translate(x, player_model_y, z)
      .rotateSelf(
        0,
        (player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, gameTimeDelta * 8)),
      ));

    [MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1].map((modelId, i) => {
      allModels[modelId]!.$matrix = playerMatrix
        .translate(
          0,
          player_legs_speed * clamp(Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1) - Math.PI / 2) * 0.45),
        )
        .rotateSelf(
          player_legs_speed * Math.sin(gameTime * PLAYER_LEGS_VELOCITY + Math.PI * (i - 1)) * (0.25 / DEG_TO_RAD),
          0,
        );
    });
  };

  player_update = () => {
    let strafe = touch_movementX + (keyboard_downKeys[KEY_LEFT] ? 1 : 0) - (keyboard_downKeys[KEY_RIGHT] ? 1 : 0);
    let forward = touch_movementY + (keyboard_downKeys[KEY_FRONT] ? 1 : 0) - (keyboard_downKeys[KEY_BACK] ? 1 : 0);

    const gamepad = navigator.getGamepads()[0];
    if (gamepad) {
      const { buttons, axes } = gamepad;
      const getGamepadButtonState = (index: number) =>
        buttons[index]?.pressed || (buttons[index]?.value as any) > 0 ? 1 : 0;

      const interactButtonPressed =
        getGamepadButtonState(GAMEPAD_BUTTON_X) ||
        getGamepadButtonState(GAMEPAD_BUTTON_Y) ||
        getGamepadButtonState(GAMEPAD_BUTTON_A) ||
        getGamepadButtonState(GAMEPAD_BUTTON_B);

      strafe +=
        getGamepadButtonState(GAMEPAD_BUTTON_LEFT) -
        getGamepadButtonState(GAMEPAD_BUTTON_RIGHT) -
        threshold(axes[0], 0.2);

      forward +=
        getGamepadButtonState(GAMEPAD_BUTTON_UP) - getGamepadButtonState(GAMEPAD_BUTTON_DOWN) - threshold(axes[1], 0.2);

      if (player_first_person) {
        camera_rotation.x += threshold(axes[3], 0.3) * 80 * gameTimeDelta;
        camera_rotation.y += threshold(axes[2], 0.3) * 80 * gameTimeDelta;
      }

      if (interactButtonPressed && !gamepadInteractPressed) {
        keyboard_downKeys[KEY_INTERACT] = 1;
      }
      gamepadInteractPressed = interactButtonPressed;
    }

    const movAngle = Math.atan2(forward, strafe);
    const movAmount = threshold(clamp(Math.hypot(forward, strafe)), 0.05);

    // ------- read collision renderBuffer -------

    gl.finish();
    gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
    gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);
    gl.invalidateFramebuffer(gl.DRAW_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);

    // ------- process collision renderBuffer -------

    NO_INLINE(doHorizontalCollisions)();
    NO_INLINE(doVerticalCollisions)();

    const movementRadians = player_first_person ? camera_rotation.y * DEG_TO_RAD : Math.PI;

    const playerSpeedCollision = clamp(1 - max(Math.abs(player_collision_x), Math.abs(player_collision_z)) * 5);

    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);
    if (movAmount) {
      player_look_angle_target = 90 - movAngle / DEG_TO_RAD;
    }

    player_speed = lerpDamp(
      player_speed,
      player_has_ground * playerSpeedCollision * clamp(2 * movAmount) * 7,
      player_has_ground ? (playerSpeedCollision > 0.1 ? 10 : 5 + 2 * movAmount) : 1,
    );

    player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4);
    player_collision_x +=
      gameTimeDelta *
      ((currentModelId ? 0 : playerSpeedCollision * player_collision_velocity_x) -
        Math.cos(movAngle + movementRadians) * movAmount * player_speed);

    player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4);
    player_collision_z +=
      gameTimeDelta *
      ((currentModelId ? 0 : playerSpeedCollision * player_collision_velocity_z) -
        Math.sin(movAngle + movementRadians) * movAmount * player_speed);

    NO_INLINE(player_move)();
  };
};
