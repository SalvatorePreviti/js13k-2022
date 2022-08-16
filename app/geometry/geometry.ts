import { integers_map } from "../math/math";
import { identity } from "../math/matrix";
import { type Vec3, type Vec3Optional } from "../math/vectors";

export const material = /* @__PURE__ */ (r: number, g: number, b: number, a: number = 0): number =>
  ((a * 255) << 24) | ((b * 255) << 16) | ((g * 255) << 8) | (r * 255);

export interface Polygon<TVec3 = Vec3> extends Array<TVec3> {
  /** Polygon material */
  $color?: number | undefined;

  /** Smooth normals? */
  $smooth?: boolean | undefined;
}

export const polygon_color = /* @__PURE__ */ (
  polygon: Polygon,
  color: number | undefined,
  smooth?: boolean | 0 | 1 | undefined,
): Polygon => {
  polygon.$color = color;
  polygon.$smooth = !!smooth;
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
    polygon.$smooth,
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
export const polygon_regular = /* @__PURE__ */ (segments: number): Polygon =>
  integers_map(segments, (i) => ({
    x: Math.sin(((Math.PI * 2) / segments) * i),
    y: 0,
    z: Math.cos(((Math.PI * 2) / segments) * i),
  }));

/**
 * Connects a top and a bottom polygon with side polygons.
 * Top and bottom polygons must have the same length.
 * Top polygon is supposed to be flipped.
 */
export const cylinder_sides = /* @__PURE__ */ (
  btm: Polygon,
  top: Polygon,
  smooth?: boolean | 0 | 1 | undefined,
): Polygon[] =>
  btm.map((btmi, i, { length }) =>
    polygon_color(
      [btmi, top[length - i - 1]!, top[length - ((i + 1) % length) - 1]!, btm[(i + 1) % length]!],
      btm.$color,
      smooth,
    ),
  );

export const cone_sides = /* @__PURE__ */ (btm: Polygon): Polygon[] =>
  btm.map((btmi, i, { length }) => [btmi, { x: 0, y: 0, z: 0 }, btm[(i + 1) % length]!]);

/**
 * Extrudes a polygon into a solid.
 * To remove bottom and top polygons, use solid_extrude(...).slice(2).
 * The solid will be centered at 0 vertically and its height will be 2 (from -1 to 1)
 */
export const polygon_extrude = /* @__PURE__ */ (
  points: Polygon<Vec3Optional>,
  smooth?: boolean | 0 | 1 | undefined,
  topSize = 1,
): Polygon[] => {
  const bottom = polygon_transform(points, identity.translate(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse();
  const top = polygon_transform(points, identity.translate(0, 1).scale3d(topSize > 0 ? topSize : 1));
  const sides = cylinder_sides(bottom as Polygon, top, smooth);
  sides.push(bottom, top);
  return sides;
};

/** Simplest composition of polygon functions. */
export const cylinder = /* @__PURE__ */ (
  segments: number,
  smooth?: boolean | 0 | 1 | undefined,
  topSize = 1,
): Polygon[] => polygon_extrude(polygon_regular(segments), smooth, topSize);

export const cone = /* @__PURE__ */ (segments: number): Polygon[] => {
  const bottom = polygon_transform(polygon_regular(segments), identity.translate(0, -1));
  const sides = cone_sides(bottom);
  sides.push(bottom);
  return sides;
};

export const horn = /* @__PURE__ */ (): Polygon[] => {
  const p = polygon_regular(15);

  const COUNT = 10;

  const getMatrix = (i: number) =>
    identity
      .translate(Math.sin((i / COUNT) * Math.PI), i / COUNT)
      .rotate(10 * (i / COUNT))
      .scale(1 - i / COUNT, 0, 1 - i / COUNT);

  return integers_map(COUNT, (i) =>
    cylinder_sides(polygon_transform(p, getMatrix(i)).reverse(), polygon_transform(p, getMatrix(i + 1)), 1),
  ).flat();
};

export const sphere = /* @__PURE__ */ (slices: number, smooth: boolean | 0 | 1 | undefined = 1): Polygon[] => {
  const stacks = slices;
  const polygons: Polygon[] = [];
  let vertices: Polygon;

  const vertex = (theta: number, phi: number) => {
    phi *= Math.PI;
    theta *= Math.PI * 2;
    vertices.push({ x: Math.cos(theta) * Math.sin(phi), y: Math.cos(phi), z: Math.sin(theta) * Math.sin(phi) });
  };

  for (let i = 0; i < slices; i++) {
    for (let j = 0; j < stacks; j++) {
      vertices = polygon_color([], 0, smooth);
      vertex(i / slices, j / stacks);
      if (j) {
        vertex((i + 1) / slices, j / stacks);
      }
      if (j < stacks - 1) {
        vertex((i + 1) / slices, (j + 1) / stacks);
      }
      vertex(i / slices, (j + 1) / stacks);
      polygons.push(vertices);
    }
  }
  return polygons;
};

export const GBox = /* @__PURE__ */ polygon_extrude([
  { x: -1, z: 1 },
  { x: 1, z: 1 },
  { x: 1, z: -1 },
  { x: -1, z: -1 },
]);

// export const GBox = polygons_transform(cylinder(4), identity.scale(Math.SQRT2, 1, Math.SQRT2).rotate(0, -45, 0));
