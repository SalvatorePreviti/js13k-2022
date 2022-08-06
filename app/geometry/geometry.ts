import { integers_map } from "../math/math";
import { identity } from "../math/matrix";
import { type Vec3 } from "../math/vectors";

export const material = (r: number, g: number, b: number, a: number = 0): number =>
  ((a * 255) << 24) | ((b * 255) << 16) | ((g * 255) << 8) | (r * 255);

export interface Polygon {
  /** Polygon material */
  $color: number;

  /** Polygon points */
  $points: Vec3[];
}

export const polygon_transform = ({ $color, $points }: Polygon, m: DOMMatrix): Polygon => ({
  $color,
  $points: $points.map(({ x, y, z }: Vec3): Vec3 => {
    ({ x, y, z } = m.transformPoint({ x, y, z }));
    return { x, y, z };
  }),
});

// export const polygon_transform = ({ $color, $points }: Polygon, m: DOMMatrix): Polygon => ({
//   $color,
//   $points: $points.map((v: Vec3): Vec3 => {
//     const { x, y, z } = m.transformPoint(v);
//     return { x, y, z };
//   }),
// });

/**
 * Creates a polygon from a list of point.
 * The normal will be automatically calculated from the first 3 points.
 * Remember that you can define only convex and planar polygons - concave polygons are NOT supported.
 * To create a concave solid or holes, look at the csg.ts module
 */
export const polygon_fromPoints = ($color: number, $points: Vec3[]): Polygon => ({
  $color,
  $points,
});

/**
 * Creates a regular polygon
 * The polygon will face up (normal 0, -1, 0).
 */
export const polygon_regular = ($color: number, segments: number, arc = (Math.PI / segments) * 2): Polygon =>
  polygon_fromPoints(
    $color,
    integers_map(segments, (i) => ({
      x: Math.cos(arc * i),
      y: 0,
      z: Math.sin(arc * i),
    })),
  );

export const polygon_quad = (color: number, y: number = 0): Polygon =>
  polygon_fromPoints(color, [
    { x: -1, y, z: -1 },
    { x: 1, y, z: -1 },
    { x: 1, y, z: 1 },
    { x: -1, y, z: 1 },
  ]);

/**
 * Connects a top and a bottom polygon with side polygons.
 * Top and bottom polygons must have the same length.
 * Top polygon is supposed to be flipped.
 */
export const polygon_sides = ($color: number, { $points: btm }: Polygon, { $points: top }: Polygon): Polygon[] =>
  btm.map((btmi, i, { length }) =>
    polygon_fromPoints($color, [
      btmi,
      top[length - i - 1]!,
      top[length - ((i + 1) % length) - 1]!,
      btm[(i + 1) % length]!,
    ]),
  );

/**
 * Returns a new solid with all materials changed.
 * Warning: this function does not clone the polygons points.
 */
export const solid_material = (solid: Polygon[], $color: number): Polygon[] =>
  solid.map((polygon: Polygon): Polygon => ({ ...polygon, $color }));

/**
 * Extrudes a polygon into a solid.
 * To remove bottom and top polygons, use solid_extrude(...).slice(2).
 * The solid will be centered at 0 vertically and its height will be 2 (from -1 to 1)
 */
export const solid_extrude = ($color: number, bottom: Polygon): Polygon[] => {
  const top = polygon_transform(bottom, identity.translate(0, 1));
  top.$points.reverse();
  bottom = polygon_transform(bottom, identity.translate(0, -1));
  const sides = polygon_sides($color, bottom, top);
  return [bottom, top, ...sides];
};

export const solid_box = ($color: number) => solid_extrude($color, polygon_quad($color));

export const solid_regular = ($color: number, sides: number) => solid_extrude($color, polygon_regular($color, sides));

/** Simplest composition of polygon functions. */
export const solid_cylinder = ($color: number, segments: number): Polygon[] =>
  solid_extrude($color, polygon_regular($color, segments));

export const solid_transform = (solid: Polygon[], m: DOMMatrix) =>
  solid.map((polygon) => polygon_transform(polygon, m));
