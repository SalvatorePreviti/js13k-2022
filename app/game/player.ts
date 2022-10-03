import { constDef_COLLISION_TEXTURE_SIZE as COLLISION_TEXTURE_SIZE } from "../shaders/collider-fragment.frag";
import {
  max,
  clamp,
  DEG_TO_RAD,
  angle_lerp_degrees,
  lerp,
  angle_wrap_degrees,
  min,
  abs,
  threshold,
} from "../math/math";
import { levers, allModels, MODEL_KIND_GAME, MODEL_ID_ROTATING_PLATFORM, MODEL_ID_PLAYER_BODY } from "./models";
import { player_last_pulled_lever, camera_rotation, firstBoatLerp, player_position_final } from "./world-state";
import { input_forward, input_strafe, player_first_person } from "../page";
import { lerpDamp, gameTimeDelta, damp, gameTime } from "./game-time";
import { matrixCopy, tempMatrix } from "../math/matrix";
import { gl } from "../gl";
import { shouldRotatePlatforms } from "./level-update";

export const CAMERA_PLAYER_Y_DIST = 13;

export const CAMERA_PLAYER_Z_DIST = -18;

export const PLAYER_LEGS_VELOCITY = 7 * 1.3;

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

// let debug2dctx: CanvasRenderingContext2D | null | undefined;

export let player_update: (nextModelMatrix: () => DOMMatrix) => void;

export const player_init = () => {
  let currentModelId: number;
  let oldModelId: number | undefined;

  let boot: 0 | 1 = 1;
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
  let player_gravity = 15;

  let camera_pos_lookat_x: number;
  let camera_pos_lookat_y: number;
  let camera_pos_lookat_z: number;

  const player_position_global = { x: 0, y: 0, z: 0 };

  const getReferenceMatrix = () =>
    player_respawned
      ? levers[player_last_pulled_lever]!.$matrix
      : allModels[(oldModelId && allModels[oldModelId]!.$kind === MODEL_KIND_GAME && oldModelId) || 0]!.$matrix;

  const updatePlayerPositionFinal = (updateVelocity?: unknown) => {
    const { x, y, z } =
      player_respawned > 1
        ? matrixCopy(levers[player_last_pulled_lever]!.$matrix)
            .multiplySelf(levers[player_last_pulled_lever]!.$transform)
            .transformPoint({
              x: 0,
              y: player_last_pulled_lever || firstBoatLerp > 0.9 ? 15 : 1,
              z: PLAYER_RESPAWN_Z,
            })
        : getReferenceMatrix().transformPoint(player_position_global);

    if (updateVelocity) {
      player_fly_velocity_x = (x - player_position_final.x) / gameTimeDelta;
      player_fly_velocity_z = (z - player_position_final.z) / gameTimeDelta;
    }

    player_position_final.x = x;
    player_position_final.y = y;
    player_position_final.z = z;
  };

  const movePlayer = (x: number, y: number, z: number) => {
    matrixCopy(getReferenceMatrix()).invertSelf();
    tempMatrix.m41 = tempMatrix.m42 = tempMatrix.m43 = 0;
    const v = tempMatrix.transformPoint({ x, z, w: 0 });
    player_position_global.x += v.x;
    player_position_global.y += y;
    player_position_global.z += v.z;
    updatePlayerPositionFinal();
  };

  const doCollisions = () => {
    let modelACount = 0;
    let modelB = 0;
    let modelBCount = 0;
    let movY = 0;
    let lineToProcess = -1;

    // vertical collisions

    for (let y = 0; y < 36; ++y) {
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);
      for (let x = 24 * 4; x < (COLLISION_TEXTURE_SIZE - 24) * 4; x += 4) {
        for (let k = 0; k < 2; ++k) {
          const v = collision_buffer[yindex + x + k]!;
          const m = collision_buffer[yindex + x + k + 2]!;
          if (v > movY) {
            movY = v;
          }
          if (v + m) {
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
    }

    currentModelId = lineToProcess >= 0 ? (modelBCount > modelACount * 2 ? modelB : currentModelId) : 0;

    // horizontal collisions

    let movX = 0;
    let movZ = 0;
    for (let y = 36; y < COLLISION_TEXTURE_SIZE; y += 1) {
      const yindex = y * (COLLISION_TEXTURE_SIZE * 4);

      let left = 0;
      let right = 0;
      let front = 0;
      let back = 0;
      for (let tx = 0; tx < COLLISION_TEXTURE_SIZE; tx += 1) {
        const index = yindex + tx * 4;

        for (let k = 0; k < 2; ++k) {
          const vx = collision_buffer[index + k]!;
          const vz = collision_buffer[index + k + 2]!;

          if (k ? tx > COLLISION_TEXTURE_SIZE / 2 : tx < COLLISION_TEXTURE_SIZE / 2) {
            left = max(left, vx);
          } else {
            right = max(right, vx);
          }

          if (k) {
            back = max(back, vz);
          } else {
            front = max(front, vz);
          }
        }
      }

      if (abs(right - left) > abs(movX)) {
        movX = right - left;
      }
      if (abs(back - front) > abs(movZ)) {
        movZ = back - front;
      }
    }

    player_speed_collision_limiter = clamp(1 - max(abs(movX), abs(movZ)) * 0.02);

    movePlayer(movX / 255, movY / 255, movZ / 255);
  };

  const interpolate_with_hysteresis = /* @__PURE__ */ (
    previous: number,
    desired: number,
    hysteresis: number,
    speed: number,
  ) =>
    lerp(previous, desired, boot || (clamp(abs(desired - previous) ** 0.5 - hysteresis) + 1 / 7) * damp(speed * 1.5));

  player_update = (nextModelMatrix: () => DOMMatrix) => {
    updatePlayerPositionFinal(currentModelId);

    // ------- read collision renderBuffer -------

    // gl.finish();
    gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
    // gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);
    // gl.invalidateFramebuffer(gl.DRAW_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);

    // ------- process collision renderBuffer -------

    NO_INLINE(doCollisions)();

    if (player_respawned || currentModelId !== oldModelId) {
      if (DEBUG && currentModelId !== oldModelId) {
        console.log("modelId: " + oldModelId + " -> " + currentModelId);
      }

      oldModelId = currentModelId;

      const v = matrixCopy(getReferenceMatrix()).invertSelf().transformPoint(player_position_final);
      player_position_global.x = v.x;
      player_position_global.y = v.y;
      player_position_global.z = v.z;
    }

    if (player_respawned) {
      player_respawned = currentModelId ? 0 : 1;
    }

    const { x, y, z } = player_position_final;

    if (y < (x < -20 || z < 109 ? -25 : -9)) {
      // Player fell in lava
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

    // Special handling for the rotating platforms, better camera for mobile that allows to see more
    player_on_rotating_platforms = lerpDamp(
      player_on_rotating_platforms,
      shouldRotatePlatforms *
        ((currentModelId > MODEL_ID_ROTATING_PLATFORM - 1 && currentModelId < MODEL_ID_ROTATING_PLATFORM + 4) as any),
      2,
    );

    if (!DEBUG_CAMERA) {
      if (player_first_person) {
        const d = player_respawned + damp(18);
        camera_position_x = lerp(camera_position_x, x, d);
        camera_position_y = lerp(camera_position_y, player_model_y + 1.5, d);
        camera_position_z = lerp(camera_position_z, z, d);
        camera_rotation.y = angle_wrap_degrees(camera_rotation.y);
      } else {
        camera_position_z = interpolate_with_hysteresis(
          camera_position_z,
          camera_pos_lookat_z + CAMERA_PLAYER_Z_DIST + player_on_rotating_platforms * 5,
          1,
          2 + player_on_rotating_platforms,
        );

        camera_position_y = interpolate_with_hysteresis(
          camera_position_y,
          max(
            camera_pos_lookat_y + clamp((-60 - z) / 8, 0, 20) + CAMERA_PLAYER_Y_DIST + player_on_rotating_platforms * 9,
            6,
          ),
          4,
          2,
        );

        camera_position_x = interpolate_with_hysteresis(
          camera_position_x,
          camera_pos_lookat_x,
          1,
          2 + player_on_rotating_platforms,
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
          90 - Math.atan2(Math.hypot(viewDirDiffz, viewDirDiffx), camera_position_y - camera_pos_lookat_y) / DEG_TO_RAD,
          boot + damp(10),
        );
      }

      camera_rotation.x = clamp(camera_rotation.x, -87, 87);
    }

    boot = 0;

    // ---- process user input ----

    let forward = clamp(input_forward, -1);
    let strafe = clamp(input_strafe, -1);

    const movAmount = threshold(Math.hypot(forward, strafe) ** 0.5, 0.1);
    let movAngle = Math.atan2(forward, strafe);

    forward = movAmount * abs(forward) * Math.sin(movAngle);
    strafe = movAmount * abs(strafe) * Math.cos(movAngle);

    if (movAmount) {
      player_look_angle_target = 90 - movAngle / DEG_TO_RAD;
    }

    player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, damp(8));
    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);

    // Update player body and legs matrices

    nextModelMatrix().translateSelf(x, player_model_y, z).rotateSelf(0, player_look_angle);

    for (let i = 0; i < 2; ++i) {
      const t = gameTime * PLAYER_LEGS_VELOCITY - Math.PI * i;
      matrixCopy(allModels[MODEL_ID_PLAYER_BODY]!.$matrix, nextModelMatrix())
        .translateSelf(0, player_legs_speed * clamp(Math.sin(t - Math.PI / 2) * 0.45))
        .rotateSelf(player_legs_speed * Math.sin(t) * (0.25 / DEG_TO_RAD), 0);
    }

    // Move player

    player_gravity = currentModelId
      ? 5
      : lerpDamp(player_gravity, player_respawned ? 13 : 19 - min(0, y + 10) * 2, 2.2);

    player_fly_velocity_x = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_x, 0, 3);
    player_fly_velocity_z = currentModelId || player_respawned ? 0 : lerpDamp(player_fly_velocity_z, 0, 3);
    player_speed = player_respawned
      ? 0
      : lerpDamp(
          player_speed,
          currentModelId ? clamp(2 * movAmount) * 7 * player_speed_collision_limiter : 0,
          currentModelId ? 9 : 1,
        );

    // Angle is dependant on where the player is looking in first person. Is 0 in third person
    movAngle = player_first_person ? (180 + camera_rotation.y) * DEG_TO_RAD : 0;

    movePlayer(
      // x
      gameTimeDelta *
        (player_fly_velocity_x + player_speed * (strafe * Math.cos(movAngle) - forward * Math.sin(movAngle))),
      // y
      -player_gravity * gameTimeDelta,
      // z
      gameTimeDelta *
        (player_fly_velocity_z + player_speed * (strafe * Math.sin(movAngle) + forward * Math.cos(movAngle))),
    );
  };
};

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

//         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4] = r * 10;
//         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1] = g * 10;
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
