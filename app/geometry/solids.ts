import { identity, integers_map } from "../math";
import { cylinder_sides, polygon_regular, polygon_transform, type Polygon } from "./geometry";

export const GQuad = /* @__PURE__ */ [
  { x: -1, z: 1 },
  { x: 1, z: 1 },
  { x: 1, z: -1 },
  { x: -1, z: -1 },
];

const HORN_STACKS = 10;

export const GHorn = /* @__PURE__ */ ((): Polygon[] => {
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
