import { identity, integers_map } from "../math";
import { csg_polygons, csg_subtract } from "./csg";
import {
  cylinder,
  cylinder_sides,
  material,
  polygons_transform,
  polygon_regular,
  polygon_transform,
  type Polygon,
} from "./geometry";

export const GQuad = /* @__PURE__ */ [
  { x: -1, z: 1 },
  { x: 1, z: 1 },
  { x: 1, z: -1 },
  { x: -1, z: -1 },
];

const HORN_STACKS = 10;

export const GHorn = ((): Polygon[] => {
  const matrices = integers_map(HORN_STACKS + 1, (i: number) =>
    identity
      .translate(Math.sin((i / HORN_STACKS) * Math.PI), i / HORN_STACKS)
      .rotate(10 * (i / HORN_STACKS))
      .scale(1.0001 - i / HORN_STACKS, 0, 1 - i / HORN_STACKS),
  );

  const p = polygon_regular(18);
  return integers_map(HORN_STACKS, (i) =>
    cylinder_sides(polygon_transform(p, matrices[i]!).reverse(), polygon_transform(p, matrices[i + 1]!), 1),
  ).flat();
})();

export const boatPolygons = csg_polygons(
  csg_subtract(
    polygons_transform(
      cylinder(20, 1, 1.15, 1),
      identity.translate(0, -3).scale(3.5, 1, 3.5),
      material(0.7, 0.4, 0.25, 0.7),
    ),
    polygons_transform(
      cylinder(20, 1, 1.3, 1),
      identity.translate(0, -2.5).scale(2.6, 1, 3),
      material(0.7, 0.4, 0.25, 0.2),
    ),
    polygons_transform(cylinder(GQuad), identity.translate(4, -1.2).scale3d(2), material(0.7, 0.4, 0.25, 0.3)),
  ),
);

export const bigArc = csg_polygons(
  csg_subtract(
    polygons_transform(cylinder(GQuad), identity.translate(0, -8).scale(6, 15, 2.2)),
    polygons_transform(cylinder(GQuad), identity.translate(0, -14.1).scale(4, 13, 4)),
    polygons_transform(cylinder(20, 1), identity.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
  ),
);
