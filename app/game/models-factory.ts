import { souls, allModels, type Circle, type Soul, MODELS_WITH_FULL_TRANSFORM } from "./models";
import { onSoulCollected } from "./world-state";
import type { Vec3Optional } from "../math/vectors";
import { min, angle_lerp_degrees, DEG_TO_RAD, clamp, hypot, abs } from "../math/math";
import { identity, matrixCopy, matrixToArray, tempMatrix } from "../math/matrix";
import { lerpDamp, damp, gameTime } from "./game-time";
import type { Polygon } from "../geometry/polygon";
import { polygons_transform } from "../geometry/polygon";
import { cylinder } from "../geometry/geometry";
import { material } from "../geometry/material";
import { MODEL_ID_BOAT0 } from "./models-ids";
import { transformsBuffer } from "./transforms-buffer";
import { distanceToPlayer } from "./distance-to-player";
import { devModelsAdd } from "../dev-tools/dev-models";

export let currentModelMmatrix: DOMMatrix;

let currentModelPolygons: Polygon[][];

export const newModel = (name: string) => {
  if (DEBUG) {
    devModelsAdd(allModels.length, name);
  }
  allModels.push({ $matrix: (currentModelMmatrix = new DOMMatrix()), $polygon: (currentModelPolygons = []) });
};

export const meshAdd = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform: DOMMatrixReadOnly = identity,
  color?: number | undefined,
) => currentModelPolygons.push(polygons_transform(polygons, transform, color));

const SOUL_SENSITIVITY_RADIUS = 1.6;

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

  const parentModelMatrix = currentModelMmatrix;
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
