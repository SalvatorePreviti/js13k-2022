import { constDef_COLLISION_TEXTURE_SIZE as COLLISION_TEXTURE_SIZE } from "../shaders/collider-fragment.frag";
import {
  max,
  clamp,
  DEG_TO_RAD,
  angle_lerp_degrees,
  lerp,
  angle_wrap_degrees,
  min,
  threshold,
  hypot,
  abs,
} from "../math/math";
import { levers, allModels } from "./models";
import { player_last_pulled_lever, camera_rotation, firstBoatLerp, player_position_final } from "./world-state";
import { input_forward, input_strafe, player_first_person } from "../page";
import { lerpDamp, gameTimeDelta, damp, gameTime } from "./game-time";
import { matrixCopy, matrixTransformPoint } from "../math/matrix";
import { cgl, gl } from "../gl";
import { shouldRotatePlatforms } from "./level-update";
import { modelsNextUpdate, verifyModelsNextUpdate } from "./models-next-update";
import {
  MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_ROTATING_PLATFORM0,
  MODEL_ID_STATIC_WORLD,
} from "./models-ids";
import { LEVER_ID_BOAT1 } from "./levers-ids";

export const CAMERA_PLAYER_Y_DIST = 13;

export const CAMERA_PLAYER_Z_DIST = -18;

export const PLAYER_LEGS_VELOCITY = 9.1;

export const PLAYER_RESPAWN_Z = -2.4;

export let camera_position_x: number = 0;

export let camera_position_y: number = 0;

export let camera_position_z: number = 0;

export const set_camera_position = (x: number, y: number, z: number) => {
  camera_position_x = x;
  camera_position_y = y;
  camera_position_z = z;
};

const collision_buffer = new Uint8Array(COLLISION_TEXTURE_SIZE * COLLISION_TEXTURE_SIZE * 4);

export let player_update: () => void;

export const player_init = NO_INLINE(() => {
  let boot: 0 | 1 = 1;
  let player_gravity = 15;
  let player_respawned: 0 | 1 | 2 = 2;
  let player_look_angle_target: number;
  let player_look_angle: number;
  let player_legs_speed: number;
  let player_on_rotating_platforms: number;
  let player_fly_velocity_x: number;
  let player_fly_velocity_z: number;
  let player_speed: number;
  let player_speed_collision_limiter: number;
  let player_model_y: number;

  let currentModelId: number;
  let oldModelId: number = 0;

  let camera_pos_lookat_x: number;
  let camera_pos_lookat_y: number;
  let camera_pos_lookat_z: number;

  let player_position_global_x: number;
  let player_position_global_y: number;
  let player_position_global_z: number;

  const loadReferenceMatrix = () =>
    matrixCopy(
      (player_respawned
        ? levers[player_last_pulled_lever]!
        : allModels[oldModelId !== MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR ? oldModelId : 0]!
      ).$matrix,
    );

  const updatePlayerPositionFinal = (updateVelocity?: unknown) => {
    if (player_respawned > 1) {
      matrixCopy(levers[player_last_pulled_lever]!.$matrix).multiplySelf(levers[player_last_pulled_lever]!.$transform);
      matrixTransformPoint(0, firstBoatLerp > 0.9 ? 15 : 1, PLAYER_RESPAWN_Z);
    } else {
      loadReferenceMatrix();
      matrixTransformPoint(player_position_global_x, player_position_global_y, player_position_global_z);
    }

    if (updateVelocity) {
      player_fly_velocity_x = (matrixTransformPoint.x - player_position_final.x) / gameTimeDelta;
      player_fly_velocity_z = (matrixTransformPoint.z - player_position_final.z) / gameTimeDelta;
    }

    player_position_final.x = matrixTransformPoint.x;
    player_position_final.y = matrixTransformPoint.y;
    player_position_final.z = matrixTransformPoint.z;
  };

  const movePlayer = NO_INLINE((mx: number, my: number, mz: number) => {
    loadReferenceMatrix().invertSelf();
    matrixTransformPoint(mx, my, mz, 0);
    player_position_global_x += matrixTransformPoint.x;
    player_position_global_y += my;
    player_position_global_z += matrixTransformPoint.z;
    updatePlayerPositionFinal();
  });

  const doCollisions = NO_INLINE(() => {
    const LEGS_ROWS = 36;
    let modelACount = 0;
    let modelB = 0;
    let modelBCount = 0;
    let movY = 0;
    let lineToProcess = -1;

    // vertical collisions

    for (let y = 0; y < LEGS_ROWS; ++y) {
      for (let x = 24 * 4, yindex = y * (COLLISION_TEXTURE_SIZE * 4); x < (COLLISION_TEXTURE_SIZE - 24) * 4; x += 4) {
        for (let k = 0; k < 2; ++k) {
          const v = collision_buffer[yindex + x + k]!;
          const m = collision_buffer[yindex + x + k + 2]!;
          if (v > movY) {
            movY = v;
          }
          if (v + m && (lineToProcess < 0 || lineToProcess === y)) {
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

    currentModelId = lineToProcess >= 0 ? (modelBCount > modelACount * 2 ? modelB : currentModelId) : 0;

    // horizontal collisions

    let movX = 0;
    let movZ = 0;
    for (let y = LEGS_ROWS, index = COLLISION_TEXTURE_SIZE * LEGS_ROWS * 4; y < COLLISION_TEXTURE_SIZE; ++y) {
      let left = 0;
      let right = 0;
      let front = 0;
      let back = 0;
      for (let x = 0; x < COLLISION_TEXTURE_SIZE; ++x) {
        let v = collision_buffer[index++]!;
        if (x < COLLISION_TEXTURE_SIZE / 2) {
          if (v > left) {
            left = v;
          }
        } else if (v > right) {
          right = v;
        }

        v = collision_buffer[index++]!;
        if (x > COLLISION_TEXTURE_SIZE / 2) {
          if (v > left) {
            left = v;
          }
        } else if (v > right) {
          right = v;
        }

        v = collision_buffer[index++]!;
        if (v > front) {
          front = v;
        }

        v = collision_buffer[index++]!;
        if (v > back) {
          back = v;
        }
      }

      right -= left;
      if (right * right > movX * movX) {
        movX = right;
      }

      back -= front;
      if (back * back > movZ * movZ) {
        movZ = back;
      }
    }

    player_speed_collision_limiter = clamp(1 - max(abs((movX *= 0.7)), abs(movZ)) * 0.01, 0.3);

    movePlayer(movX / 255, movY / 255, movZ / 255);
  });

  const interpolate_with_hysteresis = (previous: number, desired: number, hysteresis: number, speed: number) =>
    lerp(previous, desired, boot || (clamp(abs(desired - previous) ** 0.5 - hysteresis) + 1 / 7) * damp(speed * 1.5));

  player_update = () => {
    updatePlayerPositionFinal(currentModelId);

    // ------- read collision renderBuffer -------

    // This is here because we want to read the collision results as late as possible, to give the GPU time to finish
    cgl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);

    // ------- process collision renderBuffer -------

    doCollisions();

    if (player_respawned || currentModelId !== oldModelId) {
      if (DEBUG && currentModelId !== oldModelId) {
        console.log("modelId: " + oldModelId + " -> " + currentModelId);
      }

      oldModelId = currentModelId;

      loadReferenceMatrix().invertSelf();
      matrixTransformPoint(player_position_final.x, player_position_final.y, player_position_final.z);
      player_position_global_x = matrixTransformPoint.x;
      player_position_global_y = matrixTransformPoint.y;
      player_position_global_z = matrixTransformPoint.z;

      player_respawned &&= currentModelId ? 0 : 1;
    } else if (player_position_final.y < (player_position_final.x < -20 || player_position_final.z < 109 ? -25 : -9)) {
      player_respawned = 2; // Player fell in lava
    }

    // Special handling for the second boat LEVER_SECOND_BOAT - the boat must be on the side of the map the player is
    if (currentModelId === MODEL_ID_STATIC_WORLD) {
      levers[LEVER_ID_BOAT1]!.$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0;
    }

    // Special handling for the rotating platforms, better camera for mobile that allows to see more
    player_on_rotating_platforms = lerpDamp(
      player_on_rotating_platforms,
      shouldRotatePlatforms *
        ((currentModelId > MODEL_ID_ROTATING_PLATFORM0 - 1 && currentModelId < MODEL_ID_ROTATING_PLATFORM0 + 4) as any),
      2,
    );

    camera_pos_lookat_x = interpolate_with_hysteresis(camera_pos_lookat_x, player_position_final.x, 0.5, 1);
    camera_pos_lookat_y = interpolate_with_hysteresis(
      camera_pos_lookat_y,
      (player_model_y = lerp(
        lerpDamp(player_model_y, player_position_final.y, 2),
        player_position_final.y,
        player_respawned || abs(player_model_y - player_position_final.y) * 8,
      )),
      2,
      1,
    );
    camera_pos_lookat_z = interpolate_with_hysteresis(camera_pos_lookat_z, player_position_final.z, 0.5, 1);

    if (!DEBUG_CAMERA) {
      if (player_first_person) {
        const d = player_respawned + damp(18);
        camera_position_x = lerp(camera_position_x, player_position_final.x, d);
        camera_position_z = lerp(camera_position_z, player_position_final.z, d);
        camera_position_y = lerp(camera_position_y, 1.6 + player_model_y, d);
        camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
      } else {
        camera_position_x = interpolate_with_hysteresis(
          camera_position_x,
          camera_pos_lookat_x,
          1,
          2 + player_on_rotating_platforms,
        );

        camera_position_z = interpolate_with_hysteresis(
          camera_position_z,
          camera_pos_lookat_z + CAMERA_PLAYER_Z_DIST + player_on_rotating_platforms * 5,
          1,
          2 + player_on_rotating_platforms,
        );

        camera_position_y = interpolate_with_hysteresis(
          camera_position_y,
          max(
            camera_pos_lookat_y +
              clamp((-60 - player_position_final.z) / 8, 0, 20) +
              CAMERA_PLAYER_Y_DIST +
              player_on_rotating_platforms * 9,
            6,
          ),
          4,
          2,
        );

        const viewDirDiffz = min(CAMERA_PLAYER_Z_DIST / 3, -abs(camera_pos_lookat_z - camera_position_z));
        const viewDirDiffx = camera_pos_lookat_x - camera_position_x;

        camera_rotation.y = angle_lerp_degrees(
          camera_rotation.y,
          90 - angle_wrap_degrees(Math.atan2(viewDirDiffz, viewDirDiffx) / DEG_TO_RAD),
          boot + damp(10),
        );

        camera_rotation.x = angle_lerp_degrees(
          camera_rotation.x,
          90 - Math.atan2(hypot(viewDirDiffz, viewDirDiffx), camera_position_y - camera_pos_lookat_y) / DEG_TO_RAD,
          boot + damp(10),
        );
      }

      camera_rotation.x = clamp(camera_rotation.x, -87, 87);
    }

    boot = 0;

    // ---- process user input ----

    let forward = clamp(input_forward, -1);
    let strafe = clamp(input_strafe, -1);

    const movAmount = threshold(hypot(forward, strafe) ** 0.5, 0.1);
    let movAngle = Math.atan2(forward, strafe);

    if (movAmount) {
      player_look_angle_target = 90 - movAngle / DEG_TO_RAD;
    }

    // Update player body and legs matrices

    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);

    verifyModelsNextUpdate(MODEL_ID_PLAYER_BODY);
    modelsNextUpdate(
      player_position_final.x,
      0.06 * player_speed_collision_limiter * player_legs_speed * Math.cos(gameTime * (PLAYER_LEGS_VELOCITY * 2)) +
        player_model_y,
      player_position_final.z,
    ).rotateSelf(0, (player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, damp(8))));

    for (let i = 0; i < 2; ++i) {
      const t = gameTime * PLAYER_LEGS_VELOCITY - Math.PI * i;
      verifyModelsNextUpdate(MODEL_ID_PLAYER_LEG0 + i);
      matrixCopy(allModels[MODEL_ID_PLAYER_BODY]!.$matrix, modelsNextUpdate(0))
        .translateSelf(0, player_legs_speed * clamp(Math.sin(t - Math.PI / 2) * 0.45))
        .rotateSelf(player_legs_speed * Math.sin(t) * (0.25 / DEG_TO_RAD), 0);
    }

    // Move player

    player_gravity = currentModelId
      ? 5
      : lerpDamp(player_gravity, player_respawned ? 13 : 19 - min(0, player_position_final.y + 10) * 2, 2.2);

    player_fly_velocity_x = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_x, 0, 3);
    player_fly_velocity_z = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_z, 0, 3);
    player_speed = player_respawned
      ? 0
      : lerpDamp(
          player_speed,
          currentModelId ? 7 * clamp(2 * movAmount) * player_speed_collision_limiter : 0,
          currentModelId ? 9 : 1,
        );

    forward = player_speed * movAmount * abs(forward) * Math.sin(movAngle);
    strafe = player_speed * movAmount * abs(strafe) * Math.cos(movAngle);

    // Angle is dependant on where the player is looking in first person. Is 0 in third person
    movAngle = player_first_person ? (180 + camera_rotation.y) * DEG_TO_RAD : 0;

    movePlayer(
      gameTimeDelta * (player_fly_velocity_x + (Math.cos(movAngle) * strafe - Math.sin(movAngle) * forward)),
      gameTimeDelta * -player_gravity,
      gameTimeDelta * (player_fly_velocity_z + (Math.sin(movAngle) * strafe + Math.cos(movAngle) * forward)),
    );
  };
});
