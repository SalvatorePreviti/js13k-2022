import {
  levers,
  souls,
  allModels,
  MODEL_ID_FIRST_BOAT,
  MODEL_KIND_GAME,
  type MODEL_KIND,
  type Model,
  type Circle,
  type Lever,
  type Soul,
} from "./models";
import { player_position_final, onLever0Pulled, onPlayerPullLever, onSoulCollected } from "./world-state";
import type { Vec3Optional } from "../math/vectors";
import { min, angle_lerp_degrees, DEG_TO_RAD, clamp, abs, hypot } from "../math/math";
import { matrixCopy, matrixTransformPoint, tempMatrix } from "../math/matrix";
import { lerpDamp, damp, gameTime } from "./game-time";
import { polygons_transform, type Polygon } from "../geometry/polygon";
import { cylinder } from "../geometry/geometry";
import { material } from "../geometry/material";
import { interact_pressed } from "../page";

export let currentEditModel: Model;

export const meshAdd = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform: DOMMatrixReadOnly = new DOMMatrix(),
  color?: number | undefined,
) => currentEditModel.$polygons!.push(...polygons_transform(polygons, transform, color));

export const newModel = (fn: () => void, $kind: MODEL_KIND = MODEL_KIND_GAME): void => {
  const previousModel = currentEditModel;
  allModels.push((currentEditModel = { $matrix: new DOMMatrix(), $kind, $polygons: [] }));
  fn();
  currentEditModel = previousModel;
};

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

export const newLever = ($transform: DOMMatrixReadOnly): void => {
  const parentModel = currentEditModel;
  const index = levers.length;
  const lever: Lever = {
    $value: 0,
    $lerpValue: 0,
    $lerpValue2: 0,
    $matrix: parentModel.$matrix,
    $transform,
    _update: () => {
      lever.$lerpValue = lerpDamp(lever.$lerpValue, lever.$value, 4);
      lever.$lerpValue2 = lerpDamp(lever.$lerpValue2, lever.$value, 1);

      matrixCopy(parentModel.$matrix).multiplySelf($transform);

      if (interact_pressed && distanceToPlayer() < LEVER_SENSITIVITY_RADIUS) {
        if (lever.$lerpValue < 0.3 || lever.$lerpValue > 0.7) {
          lever.$value = lever.$value ? 0 : 1;
          onPlayerPullLever(index);
        }
      }

      if (!index && lever.$value && lever.$lerpValue > 0.8) {
        lever.$value = 0;
        onLever0Pulled();
      }

      tempMatrix.rotateSelf(lever.$lerpValue * 60 - 30, 0).translateSelf(0, 1);
    },
  };
  levers.push(lever);

  meshAdd(cylinder(5), $transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), $transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(), $transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};

export const newSoul = (transform: DOMMatrixReadOnly, ...walkingPath: Circle[]) => {
  let dirX = -1;
  let dirZ = 0;
  let randAngle = 0;
  let lookAngle: number;
  let prevX: number;
  let prevZ: number;
  let velocity = 3;
  let wasInside: boolean | undefined | 1 = 1;

  let circle = walkingPath[0]!;
  let [targetX, targetZ] = circle;
  let soulX = targetX;
  let soulZ = targetZ;

  const parentModelMatrix = currentEditModel.$matrix;
  const index = souls.length;
  const soul: Soul = {
    $value: 0,
    _update: () => {
      if (!soul.$value) {
        let isInside: boolean | undefined;
        let contextualVelocity = 1;
        let mindist = Infinity;

        for (const c of walkingPath) {
          const distance = hypot(targetX - c[0], targetZ - c[1]);
          const circleSDF = distance - c[2];
          isInside ||= circleSDF < 0;
          if (circleSDF > 0 && circleSDF < mindist) {
            mindist = circleSDF;
            circle = c;
          }
          contextualVelocity = min(contextualVelocity, distance / c[2]);
        }

        if (!isInside) {
          const ax = targetX - circle[0];
          const az = targetZ - circle[1];
          let magnitude = hypot(ax, az);
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
            magnitude = min(magnitude, circle[2]) / (magnitude || 1);
            targetX = ax * magnitude + circle[0];
            targetZ = az * magnitude + circle[1];
          }
        }

        wasInside = isInside;

        velocity = lerpDamp(velocity, (1 - contextualVelocity) * 6 + 3, contextualVelocity + 3);
        soulX = lerpDamp(soulX, (targetX = lerpDamp(targetX, targetX + dirX, velocity)), velocity);
        soulZ = lerpDamp(soulZ, (targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity)), velocity);

        lookAngle = angle_lerp_degrees(lookAngle, Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180, damp(3));

        matrixCopy(parentModelMatrix)
          .multiplySelf(transform)
          .translateSelf((prevX = soulX), 0, (prevZ = soulZ))
          .rotateSelf(0, lookAngle, Math.sin(gameTime * 1.7) * 7);

        if (distanceToPlayer() < SOUL_SENSITIVITY_RADIUS) {
          soul.$value = 1;
          onSoulCollected();
        }
      }

      if (soul.$value) {
        matrixCopy(allModels[MODEL_ID_FIRST_BOAT]!.$matrix).translateSelf(
          (index % 4) * 1.2 - 1.7 + Math.sin(gameTime + index) / 7,
          -2,
          -5.5 + ((index / 4) | 0) * 1.7 + abs((index % 4) - 2) + Math.cos(gameTime / 1.5 + index) / 6,
        );
      }
    },
  };
  souls.push(soul);

  if (DEBUG_FLAG0) {
    for (const c of walkingPath) {
      meshAdd(cylinder(12), transform.translate(c[0], -1.7, c[1]).scale(c[2], 0.01, c[2]), material(0.3, 0.3, 0.38));
    }
  }
};

export const checkModelId = DEBUG
  ? (name: string, expectedId: number) => {
      const modelId = allModels.length - 1;
      console.log(`model ${name} id: ${modelId}`);
      if (modelId !== expectedId) {
        throw new Error(`Model ${name} id should be ${expectedId} but is ${modelId}`);
      }
    }
  : () => {};
