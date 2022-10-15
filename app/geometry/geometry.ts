import { translation } from "../math/matrix-transforms";
import { integers_map } from "../math/integers-map";
import { polygon_color, polygon_transform, type Polygon } from "./polygon";
import type { Vec3 } from "../math/vectors";
import { abs } from "../math/math";

export const GQuad = [
  { x: -1, z: 1 },
  { x: 1, z: 1 },
  { x: 1, z: -1 },
  { x: -1, z: -1 },
];

/**
 * Creates a regular polygon
 * The polygon will face up (normal 0, -1, 0).
 */
export const polygon_regular = (segments: number, elongate: number = 0): Polygon =>
  integers_map(segments, (i) => {
    const z = Math.cos(Math.PI * 2 * (i / segments));
    return {
      x: Math.sin(Math.PI * 2 * (i / segments)),
      y: 0,
      z: abs(z) < 0.01 ? z : z < 0 ? z - elongate : z + elongate,
    };
  });

/**
 * Connects a top and a bottom polygon with side polygons.
 * Top and bottom polygons must have the same length.
 * Top polygon is supposed to be flipped.
 */
export const cylinder_sides = (btm: Polygon, top: Polygon, smooth?: 0 | 1 | undefined): Polygon[] =>
  btm.map((btmi, i, { length }) =>
    polygon_color(
      [btmi, top[length - i - 1]!, top[length - ((i + 1) % length) - 1]!, btm[(i + 1) % length]!],
      btm.$color,
      smooth,
    ),
  );

/** Simplest composition of polygon functions. */
export const cylinder = (segments?: number, smooth?: 0 | 1, topSize: number = 0, elongate?: number): Polygon[] => {
  const points = segments ? polygon_regular(segments, elongate) : GQuad;
  const top = polygon_transform(points, translation(0, 1).scale3d(topSize > 0 ? topSize : 1));
  const bottom = polygon_transform(points, translation(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse();
  return [...cylinder_sides(bottom as Polygon, top, smooth), top, bottom];
};

export const sphere = (
  slices: number,
  stacks = slices,
  vertexFunc: (slice: number, stack: number, polygon: Polygon) => Vec3 = (x: number, y: number) => {
    y *= Math.PI / stacks;
    x *= (Math.PI * 2) / slices;
    return { x: Math.cos(x) * Math.sin(y), y: Math.cos(y), z: Math.sin(x) * Math.sin(y) };
  },
): Polygon[] => {
  const polygons: Polygon[] = [];
  for (let i = 0; i < slices; i++) {
    for (let j = 0; j < stacks; j++) {
      const polygon = polygon_color([], 0, 1);
      const vertex = (x: number, y: number) => polygon.push(vertexFunc(x, y, polygon));
      polygons.push(polygon);
      vertex(i, j);
      if (j) {
        vertex((i + 1) % slices, j);
      }
      if (j < stacks - 1) {
        vertex((i + 1) % slices, j + (1 % stacks));
      }
      vertex(i, j + (1 % stacks));
    }
  }
  return polygons;
};
