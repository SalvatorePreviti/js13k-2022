import { abs, angle_lerp_degrees, DEG_TO_RAD, identity, max, min, vec3_distance } from "../math";
import type { Polygon } from "../geometry/geometry";
import { cylinder, material, polygons_transform, sphere } from "../geometry/geometry";
import { csg_polygons, csg_subtract } from "../geometry/csg";
import { GQuad, GHorn } from "../geometry/solids";
import { allModels, currentEditModel, meshAdd, meshEnd, newModel, type Model } from "./scene";
import {
  levers,
  souls,
  onPlayerPullLever,
  onSoulCollected,
  lerpDamp,
  gameTimeDelta,
  gameTime,
  type Lever,
  type Soul,
} from "./world-state";
import { player_position_final } from "./player-position";
import { keyboard_downKeys, KEY_INTERACT } from "../page";

const LEVER_SENSITIVITY_RADIUS = 2.9;
const SOUL_SENSITIVITY_RADIUS = 1.5;

export const MODEL_ID_FIRST_BOAT = 2;

// ========= Sky mesh ========= //

// Initialize the full screen triangle for the sky. Must be the first mesh!

meshAdd([GQuad.slice(1)], identity.translate(-2).scale3d(3).rotate(90, 0));
meshEnd();

// ========= Lever mesh ========= //

export const leverMeshes = [material(1, 0.5, 0.2), material(0.7, 1, 0.2)].map((handleMaterial) => {
  meshAdd(cylinder(6, 1), identity.scale(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5));
  meshAdd(cylinder(8), identity.translate(0, 1).scale(0.21, 0.3, 0.21), handleMaterial);
  meshAdd(cylinder(3), identity.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2));
  return meshEnd();
});

// ========= Player ========= //

export let playerLegsModels: [Model, Model];

export let playerModel: Model;

export const initPlayerModel = () => {
  playerModel = newModel(() => {
    // Player legs

    playerLegsModels = [-1, 1].map((x) =>
      newModel(() => {
        meshAdd(cylinder(10, 1), identity.translate(x * 0.3, -0.8).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
      }),
    ) as [Model, Model];

    // Player body

    // horns
    [0, 180].map((r) =>
      meshAdd(
        GHorn,
        identity.rotate(0, r).translate(0.2, 1.32).rotate(0, 0, -30).scale(0.2, 0.6, 0.2),
        material(1, 1, 0.8),
      ),
    );

    // head
    meshAdd(sphere(20), identity.translate(0, 1).scale(0.5, 0.5, 0.5), material(1, 0.3, 0.4));

    const eye = polygons_transform(
      csg_polygons(
        csg_subtract(
          cylinder(15, 1),
          polygons_transform(cylinder(GQuad), identity.translate(0, 0, 1).scale(2, 2, 0.5)),
        ),
      ),
      identity.rotate(-90, 0).scale(0.1, 0.05, 0.1),
      material(0.3, 0.3, 0.3),
    );

    [-1, 1].map((i) => meshAdd(eye, identity.translate(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20)));

    // mouth
    meshAdd(cylinder(GQuad), identity.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));

    // body
    meshAdd(sphere(20), identity.scale(0.7, 0.8, 0.55), material(1, 0.3, 0.4));
  });
};

// ========= BOAT ========= //

export const getBoatAnimationMatrix = (x: number, y: number, z: number) =>
  identity
    .translate(x + Math.sin(gameTime + 2) / 5, y + Math.sin(gameTime * 0.8) / 3, z)
    .rotateSelf(Math.sin(gameTime) * 2, Math.sin(gameTime * 0.7), Math.sin(gameTime * 0.9));

// ========= Soul mesh ========= //

// meshAdd(cylinder(6), identity, material(1, 0.3, 0.5));

const GHOST_SLICES = 40;
const GHOST_STACKS = 30;

meshAdd(
  sphere(GHOST_SLICES, GHOST_STACKS, (a: number, b: number, polygon: Polygon) => {
    const bm = b / GHOST_STACKS;
    const theta = a * (Math.PI * (2 / GHOST_SLICES));
    const phixz = (bm ** 0.6 * Math.PI) / 2;
    const osc = (bm * bm * Math.sin(a * Math.PI * (14 / GHOST_SLICES))) / 4;
    if (b === GHOST_STACKS - 1) {
      polygon.$smooth = 0;
      return { x: 0, y: -0.5, z: 0 };
    }
    return {
      x: Math.cos(theta) * Math.sin(phixz),
      y: Math.cos(bm * Math.PI) - bm - osc,
      z: Math.sin(theta) * Math.sin(phixz) + Math.sin(osc * Math.PI * 2) / 4,
    };
  }),
  identity.scale3d(0.7),
  material(1, 1, 1),
);

[-1, 1].map((x) => meshAdd(sphere(15), identity.translate(x * 0.16, 0.4, -0.36).scale3d(0.09)));

export const soulMesh = meshEnd();

export type Circle = [number, number, number];

export const newLever = (transform: DOMMatrixReadOnly): void => {
  const $parent = currentEditModel;
  const index = levers.length;
  const lever: Lever = {
    $value: 0,
    $lerpValue: 0,
    $lerpValue2: 0,
    $parent,
    _update: () => {
      const { $value, $lerpValue, $lerpValue2 } = lever;
      const matrix = $parent.$matrix.multiply(transform);
      lever.$matrix = matrix;

      if (
        vec3_distance(matrix.transformPoint(), player_position_final) < LEVER_SENSITIVITY_RADIUS &&
        keyboard_downKeys[KEY_INTERACT]
      ) {
        if ($lerpValue < 0.3 || $lerpValue > 0.7) {
          lever.$value = $value ? 0 : 1;
          onPlayerPullLever(index);
        }
      }

      lever.$lerpValue = lerpDamp($lerpValue, $value, 4);
      lever.$lerpValue2 = lerpDamp($lerpValue2, $value, 1);
      lever.$stickMatrix = matrix.rotate(lever.$lerpValue * 60 - 30, 0).translateSelf(0, 1);
    },
  };
  levers.push(lever);

  meshAdd(cylinder(5), transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(GQuad), transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));
};

export const newSoul = (transform: DOMMatrixReadOnly, ...walkingPath: number[][]) => {
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
            velocity = max(1, velocity / (1 + Math.random()));
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

        velocity = lerpDamp(velocity, 3 + (1 - contextualVelocity) * 6, 3 + contextualVelocity);
        soulX = lerpDamp(soulX, (targetX = lerpDamp(targetX, targetX + dirX, velocity)), velocity);
        soulZ = lerpDamp(soulZ, (targetZ = lerpDamp(targetZ, targetZ + dirZ, velocity)), velocity);

        lookAngle = angle_lerp_degrees(
          lookAngle,
          Math.atan2(soulX - prevX, soulZ - prevZ) / DEG_TO_RAD - 180,
          3 * gameTimeDelta,
        );

        prevX = soulX;
        prevZ = soulZ;

        const soulPos = (soul.$matrix = transform.multiply(
          parentModel.$matrix
            .translate(soulX, 0, soulZ)
            .rotateSelf(0, lookAngle)
            .skewXSelf(Math.sin(gameTime * 2) * 7)
            .skewYSelf(Math.sin(gameTime * 1.4) * 7),
        )).transformPoint();

        if (vec3_distance(soulPos, player_position_final) < SOUL_SENSITIVITY_RADIUS) {
          soul.$value = 1;
          onSoulCollected();
        }
      }

      if (soul.$value) {
        soul.$matrix = allModels[MODEL_ID_FIRST_BOAT - 1]!.$matrix.translate(
          (index % 4) * 1.2 - 1.7 + Math.sin(gameTime + index) / 7,
          -2,
          -5.5 + ((index / 4) | 0) * 1.7 + abs((index % 4) - 2) + Math.cos(gameTime / 1.5 + index) / 6,
        );
      }
    },
  };

  // if (DEBUG_FLAG0) {
  //   for (const c of circles) {
  //     meshAdd(cylinder(12), identity.translate(c.x, -1.7, c.z).scale(c.w, 0.01, c.w), material(0.3, 0.3, 0.38));
  //   }
  // }

  souls.push(soul);
};

export const updateModels = () => {
  for (const model of allModels) {
    if (model._update) {
      model.$matrix = model._update(model);
    }
  }

  for (const lever of levers) {
    lever._update();
  }

  for (const soul of souls) {
    soul._update();
  }
};
