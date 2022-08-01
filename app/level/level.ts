import { csg_subtract, csg_union, csg_polygons } from "../geometry/csg";
import { material, solid_box, solid_cylinder, solid_transform, type Polygon } from "../geometry/geometry";
import { integers_map } from "../math/math";
import { identity } from "../math/matrix";

const materialWhite = material(1, 1, 1);
const material0 = material(1, 0.3, 0);
const material1 = material(0, 0.5, 0.7);
const material2 = material(0, 0.2, 0.9);
const material3 = material(0.2, 0, 0.9);
const material4 = material(0.4, 0.9, 0);
const material5 = material(0.4, 0, 0.9);

const corridor = (): Polygon[][] => {
  const p = csg_subtract(
    solid_transform(solid_box(material0), identity.scale(3.5, 3.5, 20)),
    csg_union([
      solid_transform(solid_box(material1), identity.scale(3, 3, 22)),
      ...integers_map(6, (i) =>
        solid_transform(
          solid_cylinder(material1, 6),
          identity
            .translate(0, 0.6, i * 6 - 14)
            .rotate(0, 0, 90)
            .scale(2.5, 4, 1.5),
        ),
      ),
    ]),
  );

  return [csg_polygons(p)];
};

const weirdObject = () => {
  const figure0 = solid_cylinder(material0, 6);

  const figure01 = solid_transform(solid_cylinder(material5, 6), identity.scale(1, 0.6, 1).translate(0, 1, 0));
  // const figure02 = solid_transform(solid_cylinder(material0, 6);

  const figure1 = solid_transform(
    solid_cylinder(material1, 118),
    identity.translate(-0.2).rotate(90, 10, 10).scale(0.5, 2, 0.5),
  );

  const figure2 = solid_transform(
    solid_cylinder(material2, 118),
    identity.translate(-0.2).rotate(90, 10, 10).scale(0.22, 1.5, 0.22).skewY(10),
  );

  const figure3 = solid_transform(
    solid_cylinder(material3, 18),
    identity.translate(-0.2).rotate(0, 10, 10).scale(0.3, 1.4, 0.3),
  );

  const figure4 = solid_transform(
    solid_cylinder(material4, 8),
    identity.translate(-0.2).rotate(0, 0, 90).scale(0.15, 2, 0.15),
  );

  const figure5 = solid_transform(
    solid_cylinder(material5, 5),
    identity.translate(-0.2).rotate(0, 10, 10).scale(0.15, 1.7, 0.15),
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

const pavement = (): Polygon[] => {
  return solid_transform(solid_box(materialWhite), identity.translate(0, -2).scale(1100, 0.5, 1100));
};

export const mainScene = (): Polygon[][] => {
  return [...corridor().map((t) => solid_transform(t, identity.translate(0, 10, 0))), pavement(), weirdObject()];

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
};
