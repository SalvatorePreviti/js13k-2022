import { vec3_distance } from "../math/vectors";
import { identity } from "../math/matrix";
import type { Soul } from "./world-state";
import { levers, player_position_final, onPlayerPullLever, type Lever, lerpDamp } from "./world-state";
import { cylinder, material, GBox } from "../geometry/geometry";
import { meshAdd, meshEnd, newModel } from "./scene";
import { keyboard_downKeys, KEY_INTERACT } from "../input";

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

export const newLever = (): void => {
  const lever: Lever = { $value: 0, $lerpValue: 0, $lerpValue2: 0, $modelId: 0 };
  const index = levers.push(lever) - 1;

  meshAdd(cylinder(5), identity.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(cylinder(5), identity.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
  meshAdd(GBox, identity.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));

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
  const soul: Soul = { $value: 1 };

  newModel((model) => {
    model.$collisions = 0;
    model._update = () => {
      if (vec3_distance(model.$finalMatrix.transformPoint(), player_position_final) < SOUL_SENSITIVITY_RADIUS) {
        console.log("soul in distance");
        soul.$value = 0;
      }
      model.$visible = soul.$value;
    };
    return soulMesh;
  });
};
