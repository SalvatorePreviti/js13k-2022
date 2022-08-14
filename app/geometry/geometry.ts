import { integers_map } from "../math/math";
import { identity } from "../math/matrix";
import { type Vec3 } from "../math/vectors";

export const material = (r: number, g: number, b: number, a: number = 0): number =>
  ((a * 255) << 24) | ((b * 255) << 16) | ((g * 255) << 8) | (r * 255);

export interface Polygon extends Array<Vec3> {
  /** Polygon material */
  $color?: number | undefined;
}

export const polygon_color = (polygon: Polygon, color: number | undefined): Polygon => {
  if (!polygon.$color) {
    polygon.$color = color;
  }
  return polygon;
};

export const vec3_transform = ({ x, y, z }: Vec3, m: DOMMatrixReadOnly): Vec3 => {
  ({ x, y, z } = m.transformPoint({ x, y, z }));
  return { x, y, z };
};

export const polygon_transform = (
  polygon: Polygon,
  m: DOMMatrixReadOnly,
  color: number | undefined = polygon.$color,
): Polygon =>
  polygon_color(
    polygon.map((p) => vec3_transform(p, m)),
    color,
  );

export const polygons_transform = (polygons: Polygon[], m: DOMMatrixReadOnly, color?: number | undefined) =>
  polygons.map((polygon) => polygon_transform(polygon, m, color));

/**
 * Creates a regular polygon
 * The polygon will face up (normal 0, -1, 0).
 */
export const polygon_regular = (segments: number, arc = (Math.PI / segments) * 2): Polygon =>
  integers_map(segments, (i) => ({
    x: Math.cos(arc * i),
    y: 0,
    z: Math.sin(arc * i),
  }));

export const polygon_quad = (y: number = 0): Polygon => [
  { x: -1, y, z: -1 },
  { x: 1, y, z: -1 },
  { x: 1, y, z: 1 },
  { x: -1, y, z: 1 },
];

/**
 * Connects a top and a bottom polygon with side polygons.
 * Top and bottom polygons must have the same length.
 * Top polygon is supposed to be flipped.
 */
export const cylinder_sides = (btm: Polygon, top: Polygon): Polygon[] =>
  btm.map((btmi, i, { length }) => [
    btmi,
    top[length - i - 1]!,
    top[length - ((i + 1) % length) - 1]!,
    btm[(i + 1) % length]!,
  ]);

/**
 * Extrudes a polygon into a solid.
 * To remove bottom and top polygons, use solid_extrude(...).slice(2).
 * The solid will be centered at 0 vertically and its height will be 2 (from -1 to 1)
 */
export const polygon_extrude = (bottom: Polygon, topSize = 1): Polygon[] => {
  const top = polygon_transform(bottom, identity.translate(0, 1).scale3d(topSize > 0 ? topSize : 1)).reverse();
  bottom = polygon_transform(bottom, identity.translate(0, -1).scale3d(topSize < 0 ? -topSize : 1));
  return [bottom, top, ...cylinder_sides(bottom, top)];
};

export const solid_box = () => polygon_extrude(polygon_quad());

export const solid_regular = (sides: number) => polygon_extrude(polygon_regular(sides));

/** Simplest composition of polygon functions. */
export const solid_cylinder = (segments: number, topSize = 1): Polygon[] =>
  polygon_extrude(polygon_regular(segments), topSize);
