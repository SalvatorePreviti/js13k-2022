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
  hypot,
} from "../math/math";
import {
  levers,
  allModels,
  MODEL_KIND_GAME,
  MODEL_ID_ROTATING_PLATFORM,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_STATIC_WORLD,
} from "./models";
import { player_last_pulled_lever, camera_rotation, firstBoatLerp, player_position_final } from "./world-state";
import { input_forward, input_strafe, player_first_person } from "../page";
import { lerpDamp, gameTimeDelta, damp, gameTime } from "./game-time";
import { matrixCopy, matrixTransformPoint } from "../math/matrix";
import { gl } from "../gl";
import { shouldRotatePlatforms } from "./level-update";
import { modelsNextUpdate } from "./models-next-update";

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

export const player_init = () => {
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
  let oldModelId: number | undefined;

  let camera_pos_lookat_x: number;
  let camera_pos_lookat_y: number;
  let camera_pos_lookat_z: number;

  let player_position_global_x = 0;
  let player_position_global_y = 0;
  let player_position_global_z = 0;

  const loadReferenceMatrix = () =>
    matrixCopy(
      (player_respawned
        ? levers[player_last_pulled_lever]!
        : allModels[(oldModelId && allModels[oldModelId]!.$kind === MODEL_KIND_GAME && oldModelId) || 0]!
      ).$matrix,
    );

  const updatePlayerPositionFinal = (updateVelocity?: unknown) => {
    if (player_respawned > 1) {
      matrixCopy(levers[player_last_pulled_lever]!.$matrix).multiplySelf(levers[player_last_pulled_lever]!.$transform);
      matrixTransformPoint(0, player_last_pulled_lever + firstBoatLerp > 0.9 ? 15 : 1, PLAYER_RESPAWN_Z);
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

  const movePlayer = (mx: number, my: number, mz: number) => {
    loadReferenceMatrix().invertSelf();
    matrixTransformPoint(mx, my, mz, 0);
    player_position_global_x += matrixTransformPoint.x;
    player_position_global_y += my;
    player_position_global_z += matrixTransformPoint.z;
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
    for (let y = 36; y < COLLISION_TEXTURE_SIZE; ++y) {
      let left = 0;
      let right = 0;
      let front = 0;
      let back = 0;
      const yindex = COLLISION_TEXTURE_SIZE * 4 * y;
      for (let tx = 0; tx < COLLISION_TEXTURE_SIZE; ++tx) {
        const index = yindex + tx * 4;

        let v = collision_buffer[index]!;

        if (tx < COLLISION_TEXTURE_SIZE / 2) {
          if (v > left) {
            left = v;
          }
        } else if (v > right) {
          right = v;
        }

        v = collision_buffer[index + 2]!;
        if (v > front) {
          front = v;
        }

        v = collision_buffer[index + 1]!;

        if (tx > COLLISION_TEXTURE_SIZE / 2) {
          if (v > left) {
            left = v;
          }
        } else if (v > right) {
          right = v;
        }

        v = collision_buffer[index + 3]!;
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

    movX *= 0.7;

    player_speed_collision_limiter = clamp(1 - max(abs(movX), abs(movZ)) * 0.01, 0.3);

    movePlayer(movX / 255, movY / 255, movZ / 255);
  };

  const interpolate_with_hysteresis = /* @__PURE__ */ (
    previous: number,
    desired: number,
    hysteresis: number,
    speed: number,
  ) =>
    lerp(previous, desired, boot || (clamp(abs(desired - previous) ** 0.5 - hysteresis) + 1 / 7) * damp(speed * 1.5));

  player_update = () => {
    updatePlayerPositionFinal(currentModelId);

    // ------- read collision renderBuffer -------

    // gl.finish();
    gl.readPixels(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE, gl.RGBA, gl.UNSIGNED_BYTE, collision_buffer);
    // gl.invalidateFramebuffer(gl.READ_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);
    // gl.invalidateFramebuffer(gl.DRAW_FRAMEBUFFER, [gl.COLOR_ATTACHMENT0, gl.DEPTH_ATTACHMENT]);

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
    //         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 1] = g * 30;
    //         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 2] = b ? 200 : 0;
    //         buf[(y * COLLISION_TEXTURE_SIZE + x) * 4 + 3] = 255;
    //       }
    //     }

    //     const imgdata = new ImageData(buf, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

    //     if (!(window as any).debug2dctx) {
    //       (window as any).debug2dctx = debugCanvas.getContext("2d")!;
    //     }
    //     (window as any).debug2dctx.putImageData(imgdata, 0, 0, 0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
    //   }
    // }

    // ------- process collision renderBuffer -------

    NO_INLINE(doCollisions)();

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

      if (player_respawned) {
        player_respawned = currentModelId ? 0 : 1;
      }
    }

    if (player_position_final.y < (player_position_final.x < -20 || player_position_final.z < 109 ? -25 : -9)) {
      // Player fell in lava
      player_respawned = 2;
    }

    // Special handling for the second boat (lever 7) - the boat must be on the side of the map the player is
    if (currentModelId === MODEL_ID_STATIC_WORLD) {
      levers[9]!.$value = player_position_final.x < -15 && player_position_final.z < 0 ? 1 : 0;
    }

    player_model_y = lerp(
      lerpDamp(player_model_y, player_position_final.y, 2),
      player_position_final.y,
      player_respawned || abs(player_model_y - player_position_final.y) * 8,
    );
    camera_pos_lookat_x = interpolate_with_hysteresis(camera_pos_lookat_x, player_position_final.x, 0.5, 1);
    camera_pos_lookat_y = interpolate_with_hysteresis(camera_pos_lookat_y, player_model_y, 2, 1);
    camera_pos_lookat_z = interpolate_with_hysteresis(camera_pos_lookat_z, player_position_final.z, 0.5, 1);

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

    player_look_angle = angle_lerp_degrees(player_look_angle, player_look_angle_target, damp(8));
    player_legs_speed = lerpDamp(player_legs_speed, movAmount, 10);

    // Update player body and legs matrices

    modelsNextUpdate()
      .translateSelf(
        player_position_final.x,
        0.06 * player_speed_collision_limiter * player_legs_speed * Math.cos(gameTime * (PLAYER_LEGS_VELOCITY * 2)) +
          player_model_y,
        player_position_final.z,
      )
      .rotateSelf(0, player_look_angle);

    for (let i = 0; i < 2; ++i) {
      const t = gameTime * PLAYER_LEGS_VELOCITY - Math.PI * i;
      matrixCopy(allModels[MODEL_ID_PLAYER_BODY]!.$matrix, modelsNextUpdate())
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
      // x
      gameTimeDelta * (player_fly_velocity_x + (strafe * Math.cos(movAngle) - Math.sin(movAngle) * forward)),
      // y
      gameTimeDelta * -player_gravity,
      // z
      gameTimeDelta * (player_fly_velocity_z + (strafe * Math.sin(movAngle) + Math.cos(movAngle) * forward)),
    );
  };
};
