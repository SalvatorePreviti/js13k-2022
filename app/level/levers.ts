import { gameTime, lerpDamp } from "../game-time";
import { polygons_transform, cylinder, material, GBox } from "../geometry/geometry";
import { identity } from "../math/matrix";
import { vec3_distance, vec3_dot } from "../math/vectors";
import { player_position_final } from "../player";
import type { Model } from "./scene";
import { meshAdd, meshEnd, newModel } from "./scene";

export interface Lever {
  value: number;
  lerpValue: number;
  model: Model;
}

export const levers: Lever[] = [];

// ========= Lever mesh ========= //

const makeLeverMesh = (handleMaterial: number) => {
  meshAdd(polygons_transform(cylinder(6, 1), identity.scale(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5)));
  meshAdd(polygons_transform(cylinder(8), identity.translate(0, 1, 0).scale(0.21, 0.3, 0.21), handleMaterial));
  meshAdd(
    polygons_transform(
      cylinder(3),
      identity.translate(0, -1).rotate(90, 90, 0).scale(0.3, 0.4, 0.3),
      material(0.2, 0.2, 0.2),
    ),
  );
  return meshEnd();
};

const leverOffMesh = makeLeverMesh(material(1, 0.5, 0.2));

const leverOnMesh = makeLeverMesh(material(0.7, 1, 0.2));

export const newLever = (): Lever => {
  const lever = {
    value: 0,
    lerpValue: 0,
  } as Lever;

  lever.model = newModel((model) => {
    model._update = () => {
      const { value, lerpValue } = lever;
      lever.lerpValue = lerpDamp(lerpValue, value, 5);
      model.$mesh = lerpValue > 0.5 ? leverOnMesh : leverOffMesh;
      return identity.rotate(lever.lerpValue * 60 - 30, 0).translateSelf(0, 1, 0);
    };
    return leverOffMesh;
  });

  meshAdd(
    polygons_transform(
      cylinder(5),
      identity.translate(-0.2).rotate(90, 90, 0).scale(0.4, 0.1, 0.5),
      material(0.4, 0.5, 0.5),
    ),
  );
  meshAdd(
    polygons_transform(
      cylinder(5),
      identity.translate(0.2).rotate(90, 90, 0).scale(0.4, 0.1, 0.5),
      material(0.4, 0.5, 0.5),
    ),
  );

  meshAdd(polygons_transform(GBox, identity.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4)));

  levers.push(lever);
  return lever;
};

const _lever_interact_center = { x: 0, y: 0.5, z: 0 };

export const switchLevers = () => {
  let idx = 0;
  for (const lever of levers) {
    if (vec3_distance(lever.model.$initialMatrix.transformPoint(_lever_interact_center), player_position_final) < 2.7) {
      const { value, lerpValue } = lever;
      if (lerpValue < 0.3 || lerpValue > 0.7) {
        lever.value = value ? 0 : 1;
        if (DEBUG) {
          console.log("switch lever " + idx + " = " + lever.value);
        }
      }
    }
    if (DEBUG) {
      ++idx;
    }
  }
  // const playerPosition = player_position_final
};
