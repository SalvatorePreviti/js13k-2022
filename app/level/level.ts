import { csg_subtract, csg_union, csg_polygons } from "../geometry/csg";
import { solid_box, solid_cylinder, solid_transform, type Polygon } from "../geometry/geometry";
import type { Material } from "../geometry/vertex";
import { integers } from "../math/math";
import { identity } from "../math/vectors";

const material0 = [1, 0.3, 0] as Material;
const material1 = [0, 0.5, 0.7] as Material;
// const material2 = [0, 0.2, 0.9] as Material;
// const material3 = [0.2, 0, 0.9] as Material;
// const material4 = [0.4, 0.9, 0] as Material;
// const material5 = [0.4, 0, 0.9] as Material;

const alienCorridor = (): Polygon[][] => {
  const a = solid_transform(solid_box(material1), identity.translate(0, 0, 0).scale(3, 3, 22));
  const b = integers(6).map((i) =>
    solid_transform(
      solid_cylinder(material1, 6),
      identity
        .translate(0, 0.6, i * 6 - 14)
        .rotate(0, 0, 90)
        .scale(1.5, 4, 1.5),
    ),
  );

  const cutout = csg_union([a, ...b]);

  const p = csg_subtract(
    solid_transform(solid_box(material0), identity.translate(0, 0, 0).scale(3.5, 3.5, 20)),
    cutout,
  );

  return [csg_polygons(p)];
};

export const mainScene = (): Polygon[][] => {
  //   const figure0 = solid_cylinder(material0, 6);

  //   const figure01 = solid_transform(solid_cylinder(material5, 6), identity.scale(1, 0.6, 1).translate(0, 1, 0));
  //   // const figure02 = solid_transform(solid_cylinder(material0, 6);

  //   const figure1 = solid_transform(
  //     solid_cylinder(material1, 118, true),
  //     identity.translate(-0.2).rotate(90, 10, 10).scale(0.5, 2, 0.5),
  //   );

  //   const figure2 = solid_transform(
  //     solid_cylinder(material2, 118, true),
  //     identity.translate(-0.2).rotate(90, 10, 10).scale(0.22, 1.5, 0.22).skewY(10),
  //   );

  //   const figure3 = solid_transform(
  //     solid_cylinder(material3, 18),
  //     identity.translate(-0.2).rotate(0, 10, 10).scale(0.3, 1.4, 0.3),
  //   );

  //   const figure4 = solid_transform(
  //     solid_cylinder(material4, 8),
  //     identity.translate(-0.2).rotate(0, 0, 90).scale(0.15, 2, 0.15),
  //   );

  //   const figure5 = solid_transform(
  //     solid_cylinder(material5, 5),
  //     identity.translate(-0.2).rotate(0, 10, 10).scale(0.15, 1.7, 0.15),
  //   );

  //   /* const figure6 = solid_transform(
  //   solid_cylinder(material6, 12),
  //   identity.translate(-1.2).rotate(0, 10, 10).scale(1, 0.5, 1),
  // ); */

  //   // if (DEBUG) {
  //   console.time("csg");
  //   // }

  //   const scene: Polygon[][] = [];

  //   const csg0 = csg_subtract(csg_union(figure01, figure0), figure1);
  //   const csg1 = csg_union(csg0, figure2);
  //   const csg2 = csg_union(csg1, figure3);
  //   const csg3 = csg_subtract(csg2, figure4);
  //   const csg4 = csg_subtract(csg3, figure5);
  //   // const csg6 = csg_union(csg4, figure6);

  //   scene.push(csg_polygons(csg4));

  //   // const xxa = solid_transform(solid_cylinder(material0, 18), identity.translate(0.9).scale3d(0.7));
  //   // const xxb = solid_transform(solid_cylinder(material0, 18, 1), identity.translate(-0.9).scale3d(0.7));

  //   // scene.push(xxa, xxb);

  //   // if (DEBUG) {
  //   console.timeEnd("csg");

  //   // }

  //   // scene.push(ttt);

  //   // scene.push(figure5);

  //   // const csg = csg_subtract(figure0, figure1);
  //   // const xxx = csg_union(csg, figure2);

  //   // scene.push(figure0);
  //   // scene.push(figure1);
  //   // scene.push(figure2);
  //   // scene.push(figure0);

  //   // scene.push(extractCSGPolygons(makeCSGPolygons(figure0.$polygons)));

  //   return scene;

  return alienCorridor();
};
