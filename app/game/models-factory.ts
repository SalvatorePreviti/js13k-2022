import {
  levers,
  souls,
  allModels,
  type Model,
  type Circle,
  type Lever,
  type Soul,
  MODELS_WITH_FULL_TRANSFORM,
} from "./models";
import { player_position_final, onFirstBoatLeverPulled, onPlayerPullLever, onSoulCollected } from "./world-state";
import type { Vec3Optional } from "../math/vectors";
import { min, angle_lerp_degrees, DEG_TO_RAD, clamp, abs, hypot } from "../math/math";
import { identity, matrixCopy, matrixToArray, matrixTransformPoint, tempMatrix } from "../math/matrix";
import { lerpDamp, damp, gameTime } from "./game-time";
import { polygons_transform, type Polygon } from "../geometry/polygon";
import { cylinder } from "../geometry/geometry";
import { material } from "../geometry/material";
import { interact_pressed } from "../page";
import { MODEL_ID_BOAT0 } from "./models-ids";
import { devLeverAdd, devModelsAdd } from "../dev-tools/dev-models";
import { LEVER_ID_BOAT0 } from "./levers-ids";
import { modelsNextUpdate } from "./models-next-update";
import { transformsBuffer } from "./transforms-buffer";

export let meshAdd: (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform?: DOMMatrixReadOnly,
  color?: number | undefined,
) => void;

export const newModel = NO_INLINE((name: string): void => {
  const $polygon: Polygon[] = [];
  const model: Model = { $matrix: new DOMMatrix(), $polygon };
  meshAdd = (
    polygons: Polygon<Readonly<Vec3Optional>>[],
    transform: DOMMatrixReadOnly = identity,
    color?: number | undefined,
  ) => $polygon.push(...polygons_transform(polygons, transform, color));
  allModels.push(model);
  if (DEBUG) {
    devModelsAdd(allModels.length - 1, name);
  }
});

const LEVER_SENSITIVITY_RADIUS = 3;
const SOUL_SENSITIVITY_RADIUS = 1.6;

const distanceToPlayer = (): number => {
  matrixTransformPoint();
  return hypot(
    player_position_final.x - matrixTransformPoint.x,
    player_position_final.y - matrixTransformPoint.y,
    player_position_final.z - matrixTransformPoint.z,
  );
};

export const newLever = (transform: DOMMatrixReadOnly, name: string): void => {
  const parentModelMatrix = allModels.at(-1)!.$matrix;
  const index = levers.length;
  const lever: Lever = (() => {
    const lerpValue = (lever.$lerpValue = lerpDamp(lever.$lerpValue, lever.$value, 4));
    lever.$lerpValue2 = lerpDamp(lever.$lerpValue2, lever.$value, 1);

    // Prepare the matrix to be written to the uniform buffer for the lever stick.
    // and encode lerp value in matrix m44 so fragmemt shader can change the lever handle color
    matrixCopy(matrixCopy(parentModelMatrix).multiplySelf(transform), modelsNextUpdate(0))
      .rotateSelf(50 * lerpValue - 25, 0)
      .translateSelf(0, 1).m44 = lerpValue;

    if (interact_pressed && distanceToPlayer() < LEVER_SENSITIVITY_RADIUS) {
      if (lever.$value) {
        if (lerpValue > 0.7) {
          lever.$value = 0;
          onPlayerPullLever(index);
        }
      } else if (lerpValue < 0.3) {
        lever.$value = 1;
        onPlayerPullLever(index);
      }
    } else if (lever.$value && lerpValue > 0.8 && index === LEVER_ID_BOAT0) {
      lever.$value = 0;
      onFirstBoatLeverPulled();
    }
  }) as Lever;
  lever.$matrix = parentModelMatrix;
  lever.$transform = transform;

  levers.push(lever);

  if (DEBUG) {
    devLeverAdd(index, name);
  }

  // Lever base

  meshAdd(cylinder(5), transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder().slice(0, -1), transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};

export const newSoul = (transform: DOMMatrixReadOnly, ...walkingPath: Circle[]) => {
  let dirX = -1;
  let dirZ = 0;
  let randAngle = 0;
  let lookAngle: number;
  let prevX: number;
  let prevZ: number;
  let velocity: number;
  let wasInside: 0 | 1 | undefined | 1 = 1;

  let circle = walkingPath[0]!;
  let [targetX, targetZ] = circle;
  let [soulX, soulZ] = circle;

  const parentModelMatrix = allModels.at(-1)!.$matrix;
  const index = souls.length;

  const soul: Soul = (() => {
    if (soul.$value) {
      // Soul was collected.

      matrixCopy(allModels[MODEL_ID_BOAT0]!.$matrix).translateSelf(
        1.2 * (index % 4) - 1.7 + Math.sin(gameTime + index) / 7,
        -2,
        -5.5 + (index >> 2) * 1.7 + abs((index % 4) - 2) + Math.cos(gameTime / 1.5 + index) / 6,
      );
    } else {
      // Soul is free to catch.

      let isInside: 0 | 1 | undefined;
      let contextualVelocity = 1;
      let mindist = Infinity;
      for (let i = 0; i < walkingPath.length; i++) {
        const c = walkingPath[i]!;
        const distance = hypot(targetX - c[0], targetZ - c[1]);
        contextualVelocity = min(contextualVelocity, distance / c[2]);
        const circleSDF = distance - c[2];
        if (circleSDF < 0) {
          isInside = 1;
        } else if (circleSDF < mindist) {
          mindist = circleSDF;
          circle = c;
        }
      }

      if (!isInside) {
        const ax = targetX - circle[0];
        const az = targetZ - circle[1];
        let magnitude = hypot(ax, az);
        let angle = Math.atan2(-az, ax);
        if (wasInside) {
          velocity = clamp(velocity / (1 + Math.random()));
          randAngle = ((Math.random() - 0.5) * Math.PI) / 2;
        }
        angle += randAngle;
        dirX = -Math.cos(angle);
        dirZ = Math.sin(angle);
        if (magnitude > 0.1) {
          // limit the vector length to the circle radius, ghost cannot escape by mistake
          magnitude = min(magnitude, circle[2]) / magnitude;
          targetX = ax * magnitude + circle[0];
          targetZ = az * magnitude + circle[1];
        }
      }

      wasInside = isInside;

      velocity = lerpDamp(velocity, 3 + 6 * (1 - contextualVelocity), 3 + contextualVelocity);
      soulX = lerpDamp(soulX, (targetX = lerpDamp(targetX, targetX + dirX, velocity)), velocity);
      soulZ = lerpDamp(soulZ, (targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity)), velocity);

      lookAngle = angle_lerp_degrees(lookAngle, Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180, damp(3));

      matrixCopy(parentModelMatrix)
        .multiplySelf(transform)
        .translateSelf((prevX = soulX), 0, (prevZ = soulZ))
        .rotateSelf(0, lookAngle, 7 * Math.sin(gameTime * 1.7));

      if (distanceToPlayer() < SOUL_SENSITIVITY_RADIUS) {
        soul.$value = 1;
        onSoulCollected();
      }
    }

    matrixToArray(tempMatrix, transformsBuffer, MODELS_WITH_FULL_TRANSFORM + index);
  }) as Soul;

  souls.push(soul);

  if (DEBUG_FLAG0) {
    for (const c of walkingPath) {
      meshAdd(cylinder(12), transform.translate(c[0], -1.7, c[1]).scale(c[2], 0.01, c[2]), material(0.3, 0.3, 0.38));
    }
  }
};
