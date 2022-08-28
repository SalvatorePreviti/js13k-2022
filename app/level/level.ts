import { gameTime } from "../game-time";
import { csg_subtract, csg_polygons, csg_union, csg_union_op } from "../geometry/csg";
import {
  material,
  GQuad,
  GBox,
  cylinder,
  polygons_transform,
  type Polygon,
  sphere,
  horn,
  polygon_transform,
} from "../geometry/geometry";
import { integers_map, minus1plus1_each } from "../math/math";
import { identity } from "../math/matrix";
import type { Model } from "./scene";
import { meshAdd, meshEnd, editMatrixStack, withEditMatrix, newModel } from "./scene";

let _modelIdCounter = 1;

const MATERIAL_MAROON = material(0.6, 0.3, 0.3, 0.4);
const MATERIAL_DARK_GRAY = material(0.3, 0.3, 0.3, 0.1);
const MATERIAL_PURPLE_DARK = material(0.3, 0.1, 0.4);

// ========= Lever mesh ========= //

meshAdd(polygons_transform(cylinder(6, 1), identity.scale(0.12, 1.4, 0.12), material(0.3, 0.3, 0.5)));
meshAdd(polygons_transform(cylinder(6), identity.translate(0, 1, 0).scale(0.18, 0.25, 0.18), material(1, 0.5, 0.2)));
meshAdd(
  polygons_transform(
    cylinder(3),
    identity.translate(0, -1).rotate(90, 90, 0).scale(0.3, 0.4, 0.3),
    material(0.2, 0.2, 0.2),
  ),
);

const leverMesh = meshEnd();

const addLever = () => {
  const lever = {
    value: 0,
  };

  newModel((model) => {
    model._update = () => identity.rotate(Math.sin(gameTime * 2) * 30, 0).translate(0, 1, 0);
    return leverMesh;
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

  return lever;
};

const MATERIAL_DEVIL = material(1, 0.3, 0.4);

// ========= Player mesh ========= //

export let playerRightLegModel: Model;

export let playerLeftLegModel: Model;

export const playerModel = newModel((model) => {
  model.$collisionDisabled = 1;

  const rhorn = polygons_transform(
    horn(),
    identity.translate(0.2, 1.32, 0).rotate(0, 0, -30).scale(0.2, 0.6, 0.2),
    material(1, 1, 0.8),
  );

  meshAdd(rhorn);

  // left horn
  meshAdd(polygons_transform(rhorn, identity.rotate(0, 180)));

  // head
  meshAdd(polygons_transform(sphere(30), identity.translate(0, 1, 0).scale(0.5, 0.5, 0.5), MATERIAL_DEVIL));

  const eye = polygons_transform(
    csg_polygons(csg_subtract(cylinder(15, 1), polygons_transform(GBox, identity.translate(0, 0, 1).scale(2, 2, 0.5)))),
    identity.rotate(-90, 0, 0).scale(0.1, 0.05, 0.1),
    material(0.3, 0.3, 0.3),
  );

  minus1plus1_each((i) =>
    meshAdd(polygons_transform(eye, identity.translate(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20))),
  );

  // mouth
  meshAdd(polygons_transform(GBox, identity.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3)));

  // body
  meshAdd(polygons_transform(sphere(15), identity.translate(0, 0, 0).scale(0.7, 0.8, 0.55), MATERIAL_DEVIL));

  // Player legs

  playerRightLegModel = newModel(() => {
    meshAdd(polygons_transform(cylinder(10, 1), identity.translate(-0.3, -1, 0).scale(0.2, 0.5, 0.2), MATERIAL_DEVIL));
  });

  playerLeftLegModel = withEditMatrix(identity.translate(0.6), () => newModel(() => playerRightLegModel.$mesh));

  return meshEnd();
});

// ***** Player model *****

const pavement = (): Polygon[] => {
  return polygons_transform(GBox, identity.translate(0, -2).scale(1100, 0.5, 1100), material(1, 1, 1));
};

// export const arc = (transform: DOMMatrixReadOnly, color?: number) => {
//   return csg_subtract(
//     polygons_transform(GBox, transform.scale(2, 2, 0.5), color),
//     csg_union([
//       polygons_transform(cylinder(10), transform.translate(1.4, 1.3, 0).scale(0.3, 0.3, 1).rotate(90, 0, 0), color),
//       polygons_transform(cylinder(10), transform.translate(-1.4, 1.3, 0).scale(0.3, 0.3, 1).rotate(90, 0, 0), color),
//       polygons_transform(cylinder(20), transform.scale(1, 1, 1).rotate(90, 0, 0), color),
//       polygons_transform(GBox, transform.translate(0, -1.1).scale(1, 1.1, 1).rotate(90, 0, 0), color),
//     ]),
//   );
// };

const arcInner = (transform: DOMMatrixReadOnly, color?: number) => {
  return csg_union_op(
    polygons_transform(cylinder(22, 1), transform.scale(2.01, 2, 2).rotate(90, 0, 0), color),
    polygons_transform(GBox, transform.translate(0, -2.14).scale(2, 2, 2).rotate(90, 0, 0), color),
  );
};

export const arc = (transform: DOMMatrixReadOnly, color?: number) => {
  return csg_subtract(
    csg_union_op(
      polygons_transform(cylinder(30, 1), transform.scale(3.010936, 3, 0.3).rotate(90, 0, 0), color),
      polygons_transform(GBox, transform.translate(0, -1.81).scale(3, 2, 0.3).rotate(90, 0, 0), color),
    ),
    arcInner(transform, color),
  );
};

export const level1 = () => {
  // ******** LEVEL 1 ********

  // column doors

  polygon_transform(GQuad, identity.scale(3, 0, 15)).map(({ x, z }) => {
    meshAdd(
      polygons_transform(cylinder(6), identity.translate(x, 3, z).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4)),
    );
  });

  //  doors top

  meshAdd(polygons_transform(GBox, identity.translate(0, 6.3, -15).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4)));
  meshAdd(polygons_transform(GBox, identity.translate(0, 6.3, 15).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4)));

  //  doors bottom

  meshAdd(polygons_transform(GBox, identity.translate(0, 1, -15).scale(3, 0.3, 0.35), material(0.5, 0.5, 0.5)));
  meshAdd(polygons_transform(GBox, identity.translate(0, 1, 15).scale(3, 0.3, 0.35), material(0.5, 0.5, 0.5)));

  // doors bars

  integers_map(7, (i) =>
    meshAdd(
      polygons_transform(
        cylinder(6, 1),
        identity.translate(4 * (i / 6 - 0.5), 3, 15).scale(0.2, 3, 0.2),
        material(0.3, 0.3, 0.38),
      ),
    ),
  );

  // horns

  integers_map(5, (i) =>
    integers_map(2, (j) => {
      meshAdd(
        polygons_transform(
          horn(),
          identity
            .translate((j - 0.5) * 18.5, 0, i * 4.8 - 9.5)
            .rotate(0, 180 - j * 180, 0)
            .scale(1.2, 10, 1),
          material(1, 1, 0.8, 0.2),
        ),
      );
    }),
  );

  // in and out
  meshAdd(polygons_transform(GBox, identity.translate(0, 0, -23).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2)));

  meshAdd(polygons_transform(GBox, identity.translate(0, 0, 20).scale(3, 1, 5), material(0.9, 0.9, 0.9, 0.2)));

  // descent

  meshAdd(
    polygons_transform(
      GBox,
      identity.rotate(0, 60, 0).translate(14.3, -2.65, -1).rotate(0, 0, -30).scale(4, 2, 4.5),
      material(0.8, 0.2, 0.2, 0.5),
    ),
  );

  // base

  meshAdd(
    csg_polygons(
      csg_subtract(
        csg_union([
          // lower base
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            identity.translate(8, -3, -4).scale(13, 1, 13),
            material(0.7, 0.7, 0.7, 0.2),
          ),

          // hole extension
          polygons_transform(cylinder(4), identity.translate(0, -10).scale(9, 9, 9), material(0.4, 0.2, 0.5, 0.5)),

          // middle base
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            identity.translate(0, -0.92).scale(13, 2, 13),
            material(0.8, 0.8, 0.8, 0.2),
          ),
        ]),
        csg_union([
          // hole
          polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),

          // smooth hole
          polygons_transform(
            cylinder(5, 0, 1.5),
            identity.translate(0, 1, 0).scale(4.5, 0.3, 4.5),
            material(0.7, 0.5, 0.9, 0.2),
          ),

          // descent cut
          polygons_transform(
            GBox,
            identity.rotate(0, 60, 0).translate(14, 0.7, -1).rotate(0, 0, -35).scale(2, 2, 2),
            material(0.5, 0.5, 0.5, 0.5),
          ),

          // lower lever pad
          polygons_transform(
            cylinder(6),
            identity.translate(15, -1.5, 4).scale(3.5, 1, 3.5),
            material(0.5, 0.5, 0.5, 0.5),
          ),
        ]),
      ),
    ),
  );

  // bottom lever

  withEditMatrix(identity.translate(15, -2, 4), addLever);

  // moving central platform

  newModel((model) => {
    addLever();
    model._update = () => identity.translate(0, Math.cos(gameTime * 2) * 5 - 4, 0);
    meshAdd(polygons_transform(cylinder(5), identity.translate(0, -1.4).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3)));
  });
};

export const buildWorld = () => {
  newModel(() => {
    level1();

    newModel((model) => {
      model._update = () => identity.translate(Math.sin(gameTime / 1.5) * 12, 0);
      meshAdd(polygons_transform(GBox, identity.translate(0, 0, 43).scale(5, 1, 7), material(0.5, 1, 1)));
    }, ++_modelIdCounter);

    newModel((model) => {
      model._update = () => identity.translate(Math.sin(gameTime + 2) * 12, 0);
      meshAdd(polygons_transform(GBox, identity.translate(0, 0, 57).scale(5, 1, 7), material(1, 1, 0.5)));
    }, ++_modelIdCounter);

    newModel((model) => {
      model._update = () => identity.rotate(0, Math.sin(gameTime + 2) * 29, 0);
      meshAdd(polygons_transform(GBox, identity.translate(0, 0, 71).scale(5, 1, 7), material(1, 0.5, 1)));
    }, ++_modelIdCounter);
  });
};
