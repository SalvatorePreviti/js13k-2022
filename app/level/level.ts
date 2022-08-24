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
import { integers_map, minus1plus1_map } from "../math/math";
import { identity } from "../math/matrix";
import { meshAdd, meshEnd, editMatrixStack, withEditMatrix, newModel } from "./scene";

let _modelIdCounter = 1;

const MATERIAL_MAROON = material(0.5, 0.2, 0.2);
const MATERIAL_DARK_GRAY = material(0.3, 0.3, 0.3);
const MATERIAL_PURPLE_DARK = material(0.3, 0.1, 0.4);

// ========= Lever mesh ========= //

meshAdd(polygons_transform(cylinder(6, 1), identity.scale(0.12, 1.4, 0.12), MATERIAL_DARK_GRAY));
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

// ========= Player mesh ========= //

export const playerModel = newModel((model) => {
  model.$collisionDisabled = 1;

  const MATERIAL_DEVIL = material(1, 0.3, 0.4);

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
    MATERIAL_DARK_GRAY,
  );

  minus1plus1_map((i) =>
    meshAdd(polygons_transform(eye, identity.translate(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20))),
  );

  // // right eye
  // meshAdd(polygons_transform(eye, identity.translate(0.2, 1.2, 0.4).rotate(0, 20, 20)));

  // // left eye
  // meshAdd(polygons_transform(eye, identity.translate(-0.2, 1.2, 0.4).rotate(0, -20, -20)));

  // mouth
  meshAdd(polygons_transform(GBox, identity.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), MATERIAL_DARK_GRAY));

  // body
  meshAdd(polygons_transform(sphere(15), identity.translate(0, 0, 0).scale(0.7, 0.8, 0.55), MATERIAL_DEVIL));

  // Right leg
  const rleg = polygons_transform(
    cylinder(10, 1),
    identity.translate(-0.3, -1, 0).scale(0.2, 0.5, 0.2),
    MATERIAL_DEVIL,
  );

  meshAdd(rleg);

  // Left leg
  meshAdd(polygons_transform(rleg, identity.rotate(0, 180)));

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

export const mainScene = () => {
  // ******** LEVEL 1 ********

  // column doors

  polygon_transform(GQuad, identity.scale(3, 0, 15)).map(({ x, z }) => {
    meshAdd(polygons_transform(cylinder(6), identity.translate(x, 3, z).scale(0.7, 4, 0.7), MATERIAL_MAROON));
  });

  //  doors top

  meshAdd(polygons_transform(GBox, identity.translate(0, 6.3, -15).scale(4, 0.3, 1), MATERIAL_DARK_GRAY));
  meshAdd(polygons_transform(GBox, identity.translate(0, 6.3, 15).scale(4, 0.3, 1), MATERIAL_DARK_GRAY));

  //  doors bottom

  meshAdd(polygons_transform(GBox, identity.translate(0, 1, -15).scale(3, 0.3, 0.35), material(0.5, 0.5, 0.5)));
  meshAdd(polygons_transform(GBox, identity.translate(0, 1, 15).scale(3, 0.3, 0.35), material(0.5, 0.5, 0.5)));

  // doors bars

  integers_map(7, (i) =>
    meshAdd(
      polygons_transform(
        cylinder(6, 1),
        identity.translate(4 * (i / 6 - 0.5), 3, 15).scale(0.2, 3, 0.2),
        MATERIAL_DARK_GRAY,
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
          material(1, 1, 0.8),
        ),
      );
    }),
  );

  // in and out
  meshAdd(polygons_transform(GBox, identity.translate(0, 0, -23).scale(3, 1, 8), material(0.9, 0.9, 0.9)));

  meshAdd(polygons_transform(GBox, identity.translate(0, 0, 20).scale(3, 1, 5), material(0.9, 0.9, 0.9)));

  // descent

  meshAdd(
    polygons_transform(
      GBox,
      identity.translate(7, -3.3, -13).rotate(0, 60, 0).rotate(0, 0, -45).scale(3, 3, 3),
      material(0.5, 0.1, 0),
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
            material(0.7, 0.7, 0.7),
          ),

          // hole extension
          polygons_transform(cylinder(4), identity.translate(0, -10).scale(9, 9, 9)),

          // middle base
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            identity.translate(0, -0.92).scale(13, 2, 13),
            material(0.8, 0.8, 0.8),
          ),
        ]),
        csg_union([
          // hole
          polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.5)),

          // smooth hole
          polygons_transform(
            cylinder(5, 0, 1.5),
            identity.translate(0, 1, 0).scale(4.5, 0.3, 4.5),
            material(0.7, 0.5, 0.9),
          ),

          // lower lever pad
          polygons_transform(cylinder(6), identity.translate(15, -1.5, 4).scale(3.5, 1, 3.5), material(0.5, 0.5, 0.5)),
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
    meshAdd(polygons_transform(cylinder(5), identity.translate(0, -1.4).scale(5, 1, 5), material(1, 1, 1)));
  });

  // meshAdd(polygons_transform(cylinder(6, 0, 0, 0.3), identity.translate(15, -2, -5).scale(10, 1, 15)));

  // meshAdd(
  //   csg_polygons(
  //     csg_subtract(
  //       polygons_transform(GBox, identity.translate(12, -2, -5).scale(7, 1, 15), material(1, 1, 1)),
  //       polygons_transform(GBox, identity.translate(15, -2, -21).rotate(0, 60).scale(5, 8, 8), material(1, 1, 1)),
  //     ),
  //   ),
  // );

  // meshAdd(
  //   polygons_transform(GBox, identity.translate(12, -2, -5).scale(7, 1, 12).rotate(0, 71.6), material(0.94, 0.4, 0.4)),
  // );

  // meshAdd(
  //   polygons_transform(cylinder(6, 0, 0, 0.4), identity.translate(20, -5, 0).scale(8, 1, 10), material(0.5, 0.5, 0.5)),
  // );

  // meshAdd(polygons_transform(GBox, identity.translate(3, -0, -21).rotate(0, 60).scale(3, 1, 3), material(1, 0, 0)));
  // meshAdd(
  //   polygons_transform(
  //     GBox,
  //     identity.translate(16, -3, -13).rotate(0, 60).rotate(15, 0).scale(3, 1, 13),
  //     material(1, 1, 1),
  //   ),
  // );

  // meshAdd(polygons_transform(cylinder(6, 0, 0, 0.3), identity.scale(20, 10, 20), material(1, 1, 1)));

  /* meshAdd(
    csg_polygons(
      csg_subtract(
        polygons_transform(cylinder(6), identity.translate(0, -5, 0).scale(23, 1, 23), material(0.6, 0.1, 0.1)),
        baseHole,
      ),
    ),
  ); */

  // polygon_transform(polygon_regular(5), identity.scale(20 * 0.2, 1, 44 * 0.2)).map(({ x, z }) => {
  //   meshAdd(polygons_transform(cylinder(5), identity.translate(x, 3, z).scale(0.3, 3, 0.3), material(0.8, 0, 0.8)));
  // });
  // meshAdd(weirdObject());
  // meshAdd(pavement());
};

export const buildWorld = () => {
  newModel(() => {
    mainScene();

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

/*

  const base1 = polygons_transform(cylinder(6), identity.scale(10, 1, 24).rotate(0, 45, 0), material(1, 1, 1));
  const base2 = polygons_transform(
    cylinder(5),
    identity.translate(18, -4, 0).rotate(0, 20, 0).scale(18, 1, 14),
    material(1, 0, 1),
  );

  meshAdd(base1);
  meshAdd(base2);

const base = polygons_transform(cylinder(5), identity.scale(15, 2, 15), material(1, 1, 1));

  meshAdd(dw
    csg_polygons(
      csg_subtract(
        csg_union([
          base,
          polygons_transform(
            GBox,
            identity.translate(-20, -1, -5).rotate(0, -18, 0).scale(10, 1, 10),
            material(0, 1, 0),
          ),
        ]),
        csg_union([
          polygons_transform(base, identity.translate(0, 1).scale(0.9, 1, 0.9), material(0.8, 0.8, 0.8)),
          polygons_transform(cylinder(5), identity.scale(3, 3, 3), material(1, 1, 1)),
        ]),
      ),
    ),
  );
  const base = polygons_transform(cylinder(6), identity.scale(10, 1, 24), material(1, 1, 1));

  meshAdd(
    csg_polygons(
      csg_subtract(
        base,
        csg_union([
          polygons_transform(base, identity.translate(0, 0.5).scale(0.9, 0.5, 0.9), material(0.8, 0.8, 0.8)),
          polygons_transform(base, identity.scale(0.2, 3, 0.2), material(1, 1, 1)),
        ]),
      ),
    ),
  );

  polygon_transform(polygon_regular(6), identity.scale(20 * 0.2, 1, 44 * 0.2)).map(({ x, z }) => {
    meshAdd(polygons_transform(cylinder(8), identity.translate(x, 3, z).scale(0.3, 3, 0.3), material(0.8, 0, 0.8)));
  }); */

// const arcHole = (transform: DOMMatrixReadOnly, color: number) =>
// csg_union_op(
//   polygons_transform(cylinder(12), transform.scale(3, 3, 20).rotate(90, 0, 0), color),
//   polygons_transform(GBox, transform.translate(0, -3).scale(3, 3, 20).rotate(90, 0, 0), color),
// );

// const huge = csg_polygons(
//   csg_subtract(
//     polygons_transform(cylinder(8), identity.translate(0, 10).scale(15, 15, 15), material(0.8, 0.2, 1)),
//     csg_union([
//       arcHole(identity.translate(0, 2, 0).rotate(0, 20, 0), material(1, 1, 1)),
//       arcHole(identity.translate(0, 2 + 10, 0).rotate(0, 45 + 20, 0), material(1, 1, 1)),
//     ]),
//   ),
// );
// meshAdd(huge);

//  return [...polygons_transform(corridor(), identity.translate(0, 10, 0)), ...pavement(), ...weirdObject()];

// const c = corridor().map((t) => solid_transform(t, identity.translate(0, 10, 0)));

// const merged: Polygon[][] = [];
// for (let z = -8; z < 8; ++z) {
//   for (let x = -8; x < 8; ++x) {
//     for (let y = -2; y < 2; ++y) {
//       for (const solid of c) {
//         merged.push(solid_transform(solid, identity.translate(x * 20, y * 20, z * 20).scale(1, 1, 0.3)));
//       }
//     }
//   }
// }

// return [...merged, pavement(), weirdObject()];

// const materialWhite = material(1, 1, 1);
// const material0 = material(1, 0.3, 0);
// const material1 = material(0, 0.5, 0.7);
// const material2 = material(0, 0.2, 0.9);
// const material3 = material(0.2, 0, 0.9);
// const material4 = material(0.4, 0.9, 0);
// const material5 = material(0.4, 0, 0.9);

// const corridor = (): Polygon[] => {
//   // const p = csg_union([
//   //   csg_union([
//   //     solid_transform(solid_box(material4), identity.rotate(20).scale(1.5, 6.9, 4)),
//   //     solid_transform(solid_box(material5), identity.rotate(20).scale(1.5, 5.9, 10)),
//   //   ]),
//   //   csg_subtract(
//   //     solid_transform(solid_box(material0), identity.scale(3.5, 3.5, 20)),
//   //     csg_union([
//   //       solid_transform(solid_box(material1), identity.scale(3, 3, 22)),
//   //       ...integers_map(6, (i) =>
//   //         solid_transform(
//   //           solid_cylinder(material1, 6),
//   //           identity
//   //             .translate(0, 0.6, i * 6 - 14)
//   //             .rotate(0, 0, 90)
//   //             .scale(2.5, 4, 1.5),
//   //         ),
//   //       ),
//   //     ]),
//   //   ),
//   // ]);

//   // const p = csg_subtract(
//   //   solid_transform(solid_cylinder(material0, 8, 1.1), identity.scale(3.5, 3.5, 20).rotate(90, 0, 20)),
//   //   csg_union([
//   //     solid_transform(solid_cylinder(material1, 8, 1.1), identity.scale(3, 3, 22).rotate(90, 0, 20)),
//   //     ...integers_map(6, (i) =>
//   //       solid_transform(
//   //         solid_cylinder(material1, 6, 0.5),
//   //         identity
//   //           .translate(0, 0, i * 6 - 14)
//   //           .rotate(0, 0, 90)
//   //           .scale(1, 4, 1),
//   //       ),
//   //     ),
//   //   ]),
//   // );

//   const p = csg_subtract(
//     polygons_transform(GBox, identity.scale(3.5, 3.5, 20), material0),
//     csg_union([
//       polygons_transform(GBox, identity.scale(3, 3, 22), material1),
//       ...integers_map(6, (i) =>
//         polygons_transform(
//           cylinder(6),
//           identity
//             .translate(0, 0.6, i * 6 - 14)
//             .rotate(0, 0, 90)
//             .scale(2.5, 4, 1.5),
//           material1,
//         ),
//       ),
//     ]),
//   );

//   return csg_polygons(p);
// };

const weirdObject = () => {
  const material0 = material(1, 0.3, 0);
  const material1 = material(0, 0.5, 0.7);
  const material2 = material(0, 0.2, 0.9);
  const material3 = material(0.2, 0, 0.9);
  const material4 = material(0.4, 0.9, 0);
  const material5 = material(0.4, 0, 0.9);

  const figure0 = polygons_transform(cylinder(6), identity, material0);

  const figure01 = polygons_transform(cylinder(6), identity.scale(1, 0.6, 1).translate(0, 1, 0), material5);
  // const figure02 = solid_transform(solid_cylinder(material0, 6);

  const figure1 = polygons_transform(
    cylinder(118),
    identity.translate(-0.2).rotate(90, 10, 10).scale(0.5, 2, 0.5),
    material1,
  );

  const figure2 = polygons_transform(
    cylinder(118),
    identity.translate(-0.2).rotate(90, 10, 10).scale(0.22, 1.5, 0.22).skewY(10),
    material2,
  );

  const figure3 = polygons_transform(
    cylinder(18),
    identity.translate(-0.2).rotate(0, 10, 10).scale(0.3, 1.4, 0.3),
    material3,
  );

  const figure4 = polygons_transform(
    cylinder(8),
    identity.translate(-0.2).rotate(0, 0, 90).scale(0.15, 2, 0.15),
    material4,
  );

  const figure5 = polygons_transform(
    cylinder(5),
    identity.translate(-0.2).rotate(0, 10, 10).scale(0.15, 1.7, 0.15),
    material5,
  );

  if (DEBUG) {
    console.time("weird");
  }

  const csg0 = csg_subtract(csg_union([figure01, figure0]), figure1);
  const csg1 = csg_union([csg0, figure2]);
  const csg2 = csg_union([csg1, figure3]);
  const csg3 = csg_subtract(csg2, figure4);
  const csg4 = csg_subtract(csg3, figure5);

  const result = csg_polygons(csg4);

  if (DEBUG) {
    console.timeEnd("weird");
  }

  return result;
};
