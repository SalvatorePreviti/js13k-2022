import { identity, vec3_distance } from "../math";
import { cylinder, material, polygons_transform, sphere } from "../geometry/geometry";
import { csg_polygons, csg_subtract } from "../geometry/csg";
import { GQuad, GHorn } from "../geometry/solids";
import { meshAdd, meshEnd, newModel, type Model } from "./scene";
import {
  PLAYER_MODEL_ID,
  levers,
  player_position_final,
  onPlayerPullLever,
  onSoulCollected,
  lerpDamp,
  type Lever,
  type Soul,
  souls,
} from "./world-state";
import { keyboard_downKeys, KEY_INTERACT } from "../page";

// ========= Sky mesh ========= //

// Initialize the full screen triangle for the sky. Must be the first mesh!

meshAdd([GQuad.slice(1)], identity.translate(-2).scale3d(3).rotate(90, 0));
meshEnd();

// ========= Lever mesh ========= //

const makeLeverMesh = (handleMaterial: number) => {
  meshAdd(cylinder(6, 1), identity.scale(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5));
  meshAdd(cylinder(8), identity.translate(0, 1, 0).scale(0.21, 0.3, 0.21), handleMaterial);
  meshAdd(cylinder(3), identity.translate(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2));
  return meshEnd();
};

const leverOffMesh = makeLeverMesh(material(1, 0.5, 0.2));

const leverOnMesh = makeLeverMesh(material(0.7, 1, 0.2));

const LEVER_SENSITIVITY_RADIUS = 2.7;
const SOUL_SENSITIVITY_RADIUS = 1.5;

// ========= Soul mesh ========= //

meshAdd(cylinder(6), identity, material(1, 0.3, 0.5));
const soulMesh = meshEnd();

// ========= Player ========= //

const legsMeshes = [-0.3, 0.3].map((x) => {
  meshAdd(cylinder(10, 1), identity.translate(x, -1, 0).scale(0.2, 0.5, 0.24), material(1, 0.3, 0.4));
  return meshEnd();
});

export let playerRightLegModel: Model;

export let playerLeftLegModel: Model;

export const playerModel = newModel((model) => {
  model.$collisions = 0;

  // horns
  [0, 180].map((r) =>
    meshAdd(
      GHorn,
      identity.rotate(0, r).translate(0.2, 1.32, 0).rotate(0, 0, -30).scale(0.2, 0.6, 0.2),
      material(1, 1, 0.8),
    ),
  );

  // head
  meshAdd(sphere(30), identity.translate(0, 1, 0).scale(0.5, 0.5, 0.5), material(1, 0.3, 0.4));

  const eye = polygons_transform(
    csg_polygons(
      csg_subtract(cylinder(15, 1), polygons_transform(cylinder(GQuad), identity.translate(0, 0, 1).scale(2, 2, 0.5))),
    ),
    identity.rotate(-90, 0).scale(0.1, 0.05, 0.1),
    material(0.3, 0.3, 0.3),
  );

  [-1, 1].map((i) => meshAdd(eye, identity.translate(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20)));

  // mouth
  meshAdd(cylinder(GQuad), identity.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));

  // body
  meshAdd(sphere(15), identity.scale(0.7, 0.8, 0.55), material(1, 0.3, 0.4));

  // Player legs

  playerRightLegModel = newModel(() => legsMeshes[0]!);
  playerLeftLegModel = newModel(() => legsMeshes[1]!);
}, PLAYER_MODEL_ID);

export const newLever = (): void => {
  const lever: Lever = { $value: 0, $lerpValue: 0, $lerpValue2: 0, $modelId: 0 };
  const index = levers.push(lever) - 1;

  meshAdd(cylinder(5), identity.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), identity.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(GQuad), identity.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));

  newModel((model) => {
    model._update = () => {
      const matrix = model.$finalMatrix;
      lever.$matrix = matrix;
      lever.$modelId = model.$modelId;
      if (
        keyboard_downKeys[KEY_INTERACT] &&
        vec3_distance(matrix.transformPoint(), player_position_final) < LEVER_SENSITIVITY_RADIUS
      ) {
        const { $value: value, $lerpValue: lerpValue } = lever;
        if (lerpValue < 0.3 || lerpValue > 0.7) {
          lever.$value = value ? 0 : 1;
          onPlayerPullLever(index);
        }
      }

      const { $value: value, $lerpValue, $lerpValue2 } = lever;
      lever.$lerpValue = lerpDamp($lerpValue, value, 4);
      lever.$lerpValue2 = lerpDamp($lerpValue2, value, 1);
      model.$mesh = $lerpValue > 0.5 ? leverOnMesh : leverOffMesh;
      return identity.rotate(lever.$lerpValue * 60 - 30, 0).translateSelf(0, 1, 0);
    };
    return leverOffMesh;
  });
};

export const newSoul = (): void => {
  const soul: Soul = { $value: 0 };
  const index = souls.push(soul);

  newModel((model) => {
    model.$collisions = 0;
    model._update = () => {
      if (
        !soul.$value &&
        vec3_distance(model.$finalMatrix.transformPoint(), player_position_final) < SOUL_SENSITIVITY_RADIUS
      ) {
        soul.$value = 1;
        onSoulCollected(index);
      }
      model.$visible = (1 - soul.$value) as 0 | 1;
    };
    return soulMesh;
  });
};
