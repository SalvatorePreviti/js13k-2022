import { max, clamp, DEG_TO_RAD, angle_lerp_degrees, lerp, angle_wrap_degrees, min, abs, threshold } from "./math/math";
import {
  levers,
  player_position_final,
  allModels,
  MODEL_KIND_GAME,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_ROTATING_PLATFORM,
  MODEL_ID_PLAYER_LEG1,
} from "./game/models";
import { player_last_pulled_lever, firstBoatLerp, shouldRotatePlatforms, camera_rotation } from "./game/world-state";
import { input_forward, input_strafe, player_first_person } from "./page";
import { matrixCopy, tempMatrix } from "./math/matrix";
import { gl } from "./gl";
import { lerpDamp, gameTimeDelta, damp, gameTime } from "./game/game-time";

export const CAMERA_PLAYER_Y_DIST = 13;

export const CAMERA_PLAYER_Z_DIST = -18;

export const PLAYER_LEGS_VELOCITY = 7 * 1.3;

export const PLAYER_RESPAWN_Z = -2.4;

export const COLLISION_TEXTURE_SIZE = 128;

export const player_position_global = { x: 0, y: 0, z: 0 };

export let camera_position_x: number = 0;

export let camera_position_y: number = 0;

export let camera_position_z: number = 0;

// export let player_update: () => void;

export const set_camera_position = (x: number, y: number, z: number) => {
  camera_position_x = x;
  camera_position_y = y;
  camera_position_z = z;
};

export const player_init = () => {
  let currentModelId: number;
  let oldModelId: number | undefined;

  let boot: 0 | 1 = 1;
  let player_respawned: 0 | 1 | 2 = 2;
  let player_gravity = 2;
  let player_has_ground: 0 | 1;
  let player_look_angle_target: number;
  let player_look_angle: number;
  let player_legs_speed: number;
  let player_on_rotating_platforms: number;
  let player_mov_x: number;
  let player_mov_z: number;
  let player_collision_velocity_x: number;
  let player_collision_velocity_z: number;
  let player_speed: number;
  let player_model_y: number;

  let camera_pos_lookat_x: number;
  let camera_pos_lookat_y: number;
  let camera_pos_lookat_z: number;

  const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

  const doHorizontalCollisions = () => {
    player_mov_x = 0;
    player_mov_z = 0;
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

      if (abs(right - left) > abs(player_mov_x)) {
        player_mov_x = right - left;
      }
      if (abs(back - front) > abs(player_mov_z)) {
        player_mov_z = back - front;
      }
    }
  };

  const doVerticalCollisions = () => {
    let grav = 0;
    let lines = 0;
    player_has_ground = 0;

    let lineToProcess = -1;

    let modelACount = 0;
    let modelB = 0;
    let modelBCount = 0;

    for (let y = 0; y < 31; ++y) {
      let up = 0;
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = 14 * 4; x < (COLLISION_TEXTURE_SIZE - 14) * 4; x += 4) {
        for (let k = 0; k < 2; ++k) {
          const v = collision_buffer[yindex + x + k]!;
          const m = collision_buffer[yindex + x + k + 2]!;
          if (v && m && m < 255) {
            up += v / 255;
            if (lineToProcess < 0 || lineToProcess === y) {
              lineToProcess = y;
              if (m === currentModelId) {
                ++modelACount;
              } else if (!modelB || modelB === m) {
                modelB = m;
                ++modelBCount;
              }
            }
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

    const nextModelId = modelACount + modelBCount > 10 ? (modelBCount > modelACount * 2 ? modelB : currentModelId) : 0;

    currentModelId = nextModelId;

    player_gravity = lerpDamp(player_gravity, player_has_ground ? 6.5 : player_position_global.y < -20 ? 11 : 8, 4);

    // push up and gravity
    player_position_global.y +=
      lines / 41 - (player_has_ground || player_gravity) * (grav / 41) * player_gravity * gameTimeDelta;
  };

  const getReferenceMatrix = () =>
    player_respawned
      ? levers[player_last_pulled_lever]!.$parent.$matrix
      : allModels[(oldModelId && allModels[oldModelId]!.$kind === MODEL_KIND_GAME && oldModelId) || 0]!.$matrix;

  const interpolate_with_hysteresis = /* @__PURE__ */ (
    previous: number,
    desired: number,
    hysteresis: number,
    speed: number,
  ) =>
    lerp(previous, desired, boot || (clamp(abs(desired - previous) ** 0.5 - hysteresis) + 1 / 7) * damp(speed * 1.5));

  const playerMovedGlobalPos = (referenceMatrix: DOMMatrixReadOnly) => {
    matrixCopy(referenceMatrix).invertSelf();
    tempMatrix.m41 = tempMatrix.m42 = tempMatrix.m43 = 0;
    const v = tempMatrix.transformPoint({ x: player_mov_x, z: player_mov_z, w: 0 });
    player_position_global.x += v.x;
    player_position_global.z += v.z;
    return referenceMatrix.transformPoint(player_position_global);
  };

  allModels[MODEL_ID_PLAYER_BODY]!._update = (matrix: DOMMatrix) => {
    let forward = clamp(input_forward, -1);
    let strafe = clamp(input_strafe, -1);

    const movAmount = threshold(Math.hypot(forward, strafe) ** 0.5, 0.1);
    const movAngle = Math.atan2(forward, strafe);

    if (movAmount) {
      player_look_angle_target = 90 - movAngle / DEG_TO_RAD;
    }

    player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, damp(8));
    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);

    forward = movAmount * abs(forward) * Math.sin(movAngle);
    strafe = movAmount * abs(strafe) * Math.cos(movAngle);

    // ------- read collision renderBuffer -------

    // gl.finish();
    gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
    // gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);
    // gl.invalidateFramebuffer(gl.DRAW_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);

    // ------- process collision renderBuffer -------

    NO_INLINE(doVerticalCollisions)();
    NO_INLINE(doHorizontalCollisions)();

    let playerSpeedCollision = clamp(1 - max(abs(player_mov_x), abs(player_mov_z)) * 5);

    player_speed = lerpDamp(
      player_speed,
      player_has_ground * playerSpeedCollision * clamp(2 * movAmount) * 7,
      player_has_ground ? (playerSpeedCollision > 0.1 ? 10 : 5 + 2 * movAmount) : 1,
    );

    player_collision_velocity_x = lerpDamp(player_collision_velocity_x, 0, player_has_ground ? 8 : 4);
    player_collision_velocity_z = lerpDamp(player_collision_velocity_z, 0, player_has_ground ? 8 : 4);

    if (currentModelId) {
      playerSpeedCollision = 0;
    }

    const dirAngle = player_first_person ? (180 - camera_rotation.y) * DEG_TO_RAD : 0;

    player_mov_x +=
      gameTimeDelta *
      (playerSpeedCollision * player_collision_velocity_x +
        player_speed * (strafe * Math.cos(dirAngle) - forward * Math.sin(dirAngle)));

    player_mov_z +=
      gameTimeDelta *
      (playerSpeedCollision * player_collision_velocity_z +
        player_speed * (strafe * Math.sin(dirAngle) + forward * Math.cos(dirAngle))); //* player_speed * abs(input_forward)

    let referenceMatrix = getReferenceMatrix();

    const { x, y, z } =
      player_respawned > 1
        ? matrixCopy(levers[player_last_pulled_lever]!.$parent.$matrix)
            .multiplySelf(levers[player_last_pulled_lever]!.$matrix)
            .transformPoint({
              x: 0,
              y: player_last_pulled_lever || firstBoatLerp > 0.9 ? 15 : 1,
              z: PLAYER_RESPAWN_Z,
            })
        : playerMovedGlobalPos(referenceMatrix);

    if (currentModelId) {
      player_collision_velocity_x = (x - player_position_final.x) / gameTimeDelta;
      player_collision_velocity_z = (z - player_position_final.z) / gameTimeDelta;
    }

    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;

    if (player_respawned) {
      player_respawned = player_has_ground && currentModelId ? 0 : 1;
    }

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

    // Special handling for the rotating platforms, better camera for mobile that allows to see more
    player_on_rotating_platforms = lerpDamp(
      player_on_rotating_platforms,
      shouldRotatePlatforms *
        ((currentModelId > MODEL_ID_ROTATING_PLATFORM - 1 && currentModelId < MODEL_ID_ROTATING_PLATFORM + 4) as any),
      2,
    );

    if (y < (x < -20 || z < 109 ? -25 : -9)) {
      // Player fell in lava
      player_collision_velocity_x = player_collision_velocity_z = player_speed = 0;
      player_respawned = 2;
    }

    // Special handling for the second boat (lever 7) - the boat must be on the side of the map the player is
    if (currentModelId === 1) {
      levers[9]!.$value = x < -15 && z < 0 ? 1 : 0;
    }

    player_model_y = lerp(lerpDamp(player_model_y, y, 2), y, player_respawned || abs(player_model_y - y) * 8);
    camera_pos_lookat_y = interpolate_with_hysteresis(camera_pos_lookat_y, player_model_y, 2, 1);
    camera_pos_lookat_x = interpolate_with_hysteresis(camera_pos_lookat_x, x, 0.5, 1);
    camera_pos_lookat_z = interpolate_with_hysteresis(camera_pos_lookat_z, z, 0.5, 1);

    if (!DEBUG_CAMERA) {
      if (player_first_person) {
        const d = player_respawned + damp(18);
        camera_position_x = lerp(camera_position_x, x, d);
        camera_position_y = lerp(camera_position_y, player_model_y + 1.5, d);
        camera_position_z = lerp(camera_position_z, z, d);
        camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
      } else {
        camera_position_y = interpolate_with_hysteresis(
          camera_position_y,
          max(
            camera_pos_lookat_y + clamp((-60 - z) / 8, 0, 20) + CAMERA_PLAYER_Y_DIST + player_on_rotating_platforms * 9,
            6,
          ),
          4,
          2,
        );

        camera_position_z = interpolate_with_hysteresis(
          camera_position_z,
          camera_pos_lookat_z + CAMERA_PLAYER_Z_DIST + player_on_rotating_platforms * 5,
          1,
          2 + player_on_rotating_platforms,
        );

        camera_position_x = interpolate_with_hysteresis(
          camera_position_x,
          camera_pos_lookat_x,
          1,
          2 + player_on_rotating_platforms,
        );

        const viewDirDiffz = min(CAMERA_PLAYER_Z_DIST / 3, -abs(camera_pos_lookat_z - camera_position_z));
        const viewDirDiffx = camera_pos_lookat_x - camera_position_x;

        // camera_rotation.y = 90 - angle_wrap_degrees(Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD);
        // camera_rotation.x =
        //   90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), camera_position_y - camera_pos_lookat_y) / DEG_TO_RAD;

        camera_rotation.y = angle_lerp_degrees(
          camera_rotation.y,
          90 - angle_wrap_degrees(Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD),
          boot + damp(10),
        );

        camera_rotation.x = angle_lerp_degrees(
          camera_rotation.x,
          90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), camera_position_y - camera_pos_lookat_y) / DEG_TO_RAD,
          boot + damp(10),
        );
      }

      camera_rotation.x = clamp(camera_rotation.x, -87, 87);
    }

    boot = 0;

    matrix.translateSelf(x, player_model_y + 0.124, z).rotateSelf(0, player_look_angle);
  };

  [MODEL_ID_PLAYER_LEG1, MODEL_ID_PLAYER_LEG0].map(
    (modelId, i) =>
      (allModels[modelId]!._update = (matrix: DOMMatrix) =>
        matrixCopy(allModels[MODEL_ID_PLAYER_BODY]!.$matrix, matrix)
          .translateSelf(
            0,
            player_legs_speed * clamp(Math.sin(gameTime * PLAYER_LEGS_VELOCITY - Math.PI * i - Math.PI / 2) * 0.45),
          )
          .rotateSelf(
            player_legs_speed * Math.sin(gameTime * PLAYER_LEGS_VELOCITY - Math.PI * i) * (0.25 / DEG_TO_RAD),
            0,
          )),
  );
};
