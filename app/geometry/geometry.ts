import { integers_map } from "../math/math";
import { identity } from "../math/matrix";
import { type Vec3, type Vec3Optional } from "../math/vectors";

export const material = /* @__PURE__ */ (r: number, g: number, b: number, a: number = 0): number =>
  ((a * 255) << 24) | ((b * 255) << 16) | ((g * 255) << 8) | (r * 255);

export interface Polygon<TVec3 = Vec3> extends Array<TVec3> {
  /** Polygon material */
  $color?: number | undefined;
}

export const polygon_color = /* @__PURE__ */ (polygon: Polygon, color: number | undefined): Polygon => {
  if (!polygon.$color) {
    polygon.$color = color;
  }
  return polygon;
};

export const vec3_transform = /* @__PURE__ */ ({ x, y, z }: Vec3Optional, m: DOMMatrixReadOnly): Vec3 => {
  ({ x, y, z } = m.transformPoint({ x, y, z }));
  return { x, y, z };
};

export const polygon_transform = /* @__PURE__ */ (
  polygon: Polygon<Vec3Optional>,
  m: DOMMatrixReadOnly,
  color: number | undefined = polygon.$color,
): Polygon =>
  polygon_color(
    polygon.map((p) => vec3_transform(p, m)),
    color,
  );

export const polygons_transform = /* @__PURE__ */ (
  polygons: Polygon<Vec3Optional>[],
  m: DOMMatrixReadOnly,
  color?: number | undefined,
) => polygons.map((polygon) => polygon_transform(polygon, m, color));

/**
 * Creates a regular polygon
 * The polygon will face up (normal 0, -1, 0).
 */
export const polygon_regular = /* @__PURE__ */ (segments: number, arc = (Math.PI * 2) / segments): Polygon =>
  integers_map(segments, (i) => ({
    x: Math.cos(arc * i),
    y: 0,
    z: Math.sin(arc * i),
  }));

/**
 * Connects a top and a bottom polygon with side polygons.
 * Top and bottom polygons must have the same length.
 * Top polygon is supposed to be flipped.
 */
export const cylinder_sides = /* @__PURE__ */ (btm: Polygon, top: Polygon): Polygon[] =>
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
export const polygon_extrude = /* @__PURE__ */ (bottom: Polygon<Vec3Optional>, topSize = 1): Polygon[] => {
  const top = polygon_transform(bottom, identity.translate(0, 1).scale3d(topSize > 0 ? topSize : 1)).reverse();
  bottom = polygon_transform(bottom, identity.translate(0, -1).scale3d(topSize < 0 ? -topSize : 1));
  return [bottom as Polygon, top, ...cylinder_sides(bottom as Polygon, top)];
};

/** Simplest composition of polygon functions. */
export const solid_cylinder = /* @__PURE__ */ (segments: number, topSize = 1): Polygon[] =>
  polygon_extrude(polygon_regular(segments), topSize);

export const GBox = /* @__PURE__ */ polygon_extrude([
  { x: -1, z: -1 },
  { x: 1, z: -1 },
  { x: 1, z: 1 },
  { x: -1, z: 1 },
]);

// export const GBox = polygons_transform(solid_cylinder(4), identity.scale(Math.SQRT2, 1, Math.SQRT2).rotate(0, -45, 0));
