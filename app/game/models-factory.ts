import {
  levers,
  souls,
  allModels,
  MODEL_ID_FIRST_BOAT,
  player_position_final,
  MODEL_KIND_GAME,
  type MODEL_KIND,
  type Model,
  type Circle,
  type Lever,
  type Soul,
  SOULS_COUNT,
} from "./models";
import { onPlayerPullLever, onSoulCollected } from "./world-state";
import { interact_pressed } from "../page";
import type { Vec3Optional } from "../math/vectors";
import { min, angle_lerp_degrees, DEG_TO_RAD, clamp, abs } from "../math/math";
import { matrixCopy, matrixToArray } from "../math/matrix";
import { lerpDamp, damp, gameTime } from "./game-time";
import { polygons_transform, type Polygon } from "../geometry/polygon";
import { cylinder } from "../geometry/geometry";
import { material } from "../geometry/material";
import { objectsMatricesBuffer } from "./models-matrices";

export let currentEditModel: Model;

export const meshAdd = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform: DOMMatrixReadOnly = new DOMMatrix(),
  color?: number | undefined,
) => currentEditModel.$polygons!.push(...polygons_transform(polygons, transform, color));

export const newModel = (fn: (model: Model) => void, $kind: MODEL_KIND = MODEL_KIND_GAME) => {
  const previousModel = currentEditModel;
  const model: Model = {
    $matrix: new DOMMatrix(),
    $modelId: allModels.length,
    $kind,
    $polygons: [],
  };
  allModels.push(model);
  currentEditModel = model;
  fn(model);
  currentEditModel = previousModel;
  return model;
};

const LEVER_SENSITIVITY_RADIUS = 3;
const SOUL_SENSITIVITY_RADIUS = 1.6;

const distanceToPlayer = (transform: DOMMatrixReadOnly): number => {
  const p = transform.transformPoint();
  return Math.hypot(player_position_final.x - p.x, player_position_final.y - p.y, player_position_final.z - p.z);
};

export const newLever = (transform: DOMMatrixReadOnly): void => {
  const $locMatrix = new DOMMatrix();
  const $matrix = new DOMMatrix();
  const $parent = currentEditModel;
  const index = levers.length;
  const lever: Lever = {
    $value: 0,
    $lerpValue: 0,
    $lerpValue2: 0,
    $parent,
    $locMatrix,
    _update: () => {
      matrixCopy(matrixCopy($parent.$matrix, $locMatrix).multiplySelf(transform), $matrix)
        .rotateSelf(lever.$lerpValue * 60 - 30, 0)
        .translateSelf(0, 1);

      lever.$lerpValue = lerpDamp(lever.$lerpValue, lever.$value, 4);
      lever.$lerpValue2 = lerpDamp(lever.$lerpValue2, lever.$value, 1);

      if (interact_pressed && distanceToPlayer($locMatrix) < LEVER_SENSITIVITY_RADIUS) {
        if (lever.$lerpValue < 0.3 || lever.$lerpValue > 0.7) {
          lever.$value = lever.$value ? 0 : 1;
          onPlayerPullLever(index);
        }
      }

      matrixToArray($matrix, objectsMatricesBuffer, index + SOULS_COUNT);
      // Encode lerp value in matrix m44 so fragmemt shader can change the lever handle color
      objectsMatricesBuffer[index * 16 + (15 + SOULS_COUNT * 16)] = 1 - lever.$lerpValue;
    },
  };
  levers.push(lever);

  meshAdd(cylinder(5), transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(), transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};

export const newSoul = (transform: DOMMatrixReadOnly, ...walkingPath: number[][]) => {
  const $matrix = new DOMMatrix();
  const parentModel = currentEditModel;
  const index = souls.length;
  const circles = (walkingPath as Circle[]).map(([x, z, w]) => ({ x, z, w }));
  let circle = circles[0]!;
  let { x: targetX, z: targetZ } = circle;
  let soulX = targetX;
  let soulZ = targetZ;
  let dirX = -1;
  let dirZ = 0;
  let randAngle = 0;
  let lookAngle = 0;
  let prevX = 0;
  let prevZ = 0;
  let velocity = 3;
  let wasInside: boolean | undefined | 1 = 1;

  const soul: Soul = {
    $value: 0,
    _update: () => {
      if (!soul.$value) {
        let isInside: boolean | undefined;
        let contextualVelocity = 1;
        let mindist = Infinity;

        for (const c of circles) {
          const { x, z, w } = c;
          const distance = Math.hypot(targetX - x, targetZ - z);
          const circleSDF = distance - w;
          isInside ||= distance < w;
          if (circleSDF > 0 && circleSDF < mindist) {
            mindist = circleSDF;
            circle = c;
          }
          contextualVelocity = min(contextualVelocity, distance / w);
        }

        if (!isInside) {
          const { x, z, w } = circle;
          const ax = targetX - x;
          const az = targetZ - z;
          let magnitude = Math.hypot(ax, az);
          let angle = Math.atan2(-az, ax);
          if (wasInside) {
            randAngle = ((Math.random() - 0.5) * Math.PI) / 2;
            velocity = clamp(velocity / (1 + Math.random()));
          }
          angle += randAngle;
          dirX = -Math.cos(angle);
          dirZ = Math.sin(angle);
          if (magnitude > 0.1) {
            // limit the vector length to the circle radius, as a security measure
            magnitude = min(magnitude, w) / (magnitude || 1);
            targetX = ax * magnitude + x;
            targetZ = az * magnitude + z;
          }
        }

        wasInside = isInside;

        velocity = lerpDamp(velocity, (1 - contextualVelocity) * 6 + 3, contextualVelocity + 3);
        soulX = lerpDamp(soulX, (targetX = lerpDamp(targetX, targetX + dirX, velocity)), velocity);
        soulZ = lerpDamp(soulZ, (targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity)), velocity);

        lookAngle = angle_lerp_degrees(lookAngle, Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180, damp(3));

        if (
          distanceToPlayer(
            matrixCopy(parentModel.$matrix, $matrix)
              .multiplySelf(transform)
              .translateSelf((prevX = soulX), 0, (prevZ = soulZ))
              .rotateSelf(0, lookAngle, Math.sin(gameTime * 1.7) * 7),
          ) < SOUL_SENSITIVITY_RADIUS
        ) {
          soul.$value = 1;
          onSoulCollected();
        }
      }

      if (soul.$value) {
        matrixCopy(allModels[MODEL_ID_FIRST_BOAT]!.$matrix, $matrix).translateSelf(
          (index % 4) * 1.2 - 1.7 + Math.sin(gameTime + index) / 7,
          -2,
          -5.5 + ((index / 4) | 0) * 1.7 + abs((index % 4) - 2) + Math.cos(gameTime / 1.5 + index) / 6,
        );
      }

      matrixToArray($matrix, objectsMatricesBuffer, index);
    },
  };

  if (DEBUG_FLAG0) {
    for (const c of circles) {
      meshAdd(cylinder(12), transform.translate(c.x, -1.7, c.z).scale(c.w, 0.01, c.w), material(0.3, 0.3, 0.38));
    }
  }

  souls.push(soul);
};

export const checkModelId = DEBUG
  ? (name: string, expectedId: number) => {
      console.log(`model ${name} id: ${currentEditModel.$modelId}`);
      if (currentEditModel.$modelId !== expectedId) {
        throw new Error(`Model ${name} id should be ${expectedId} but is ${currentEditModel.$modelId}`);
      }
    }
  : () => {};
