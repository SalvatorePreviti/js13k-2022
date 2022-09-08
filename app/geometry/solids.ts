import { identity, integers_map } from "../math";
import type { Polygon } from "./geometry";
import { cylinder, cylinder_sides, polygon_regular, polygon_transform } from "./geometry";

const HORN_STACKS = 15;

export const GHorn = /* @__PURE__ */ ((): Polygon[] => {
  const matrices = integers_map(HORN_STACKS + 1, (i: number) =>
    identity
      .translate(Math.sin((i / HORN_STACKS) * Math.PI), i / HORN_STACKS)
      .rotate(10 * (i / HORN_STACKS))
      .scale(1.0001 - i / HORN_STACKS, 0, 1 - i / HORN_STACKS),
  );

  const p = polygon_regular(25);
  return integers_map(HORN_STACKS, (i) =>
    cylinder_sides(polygon_transform(p, matrices[i]!).reverse(), polygon_transform(p, matrices[i + 1]!), 1),
  ).flat();
})();

export const GQuad = /* @__PURE__ */ [
  { x: -1, z: 1 },
  { x: 1, z: 1 },
  { x: 1, z: -1 },
  { x: -1, z: -1 },
];

export const GBox = /* @__PURE__ */ cylinder(GQuad);

export const G5 = /* @__PURE__ */ cylinder(5);

export const G6 = /* @__PURE__ */ cylinder(6);
