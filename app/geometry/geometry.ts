import { abs, integers_map, identity, type Vec3, type Vec3Optional } from "../math";

export const material = /* @__PURE__ */ (r: number, g: number, b: number, a: number = 0): number =>
  ((a * 255) << 24) | ((b * 255) << 16) | ((g * 255) << 8) | (r * 255);

export interface Polygon<TVec3 = Vec3> extends Array<TVec3> {
  /** Polygon material */
  $color?: number | undefined;

  /** Smooth normals? */
  $smooth?: 0 | 1 | undefined;
}

export const polygon_color = /* @__PURE__ */ (
  polygon: Polygon,
  color: number | undefined,
  smooth?: 0 | 1 | undefined,
): Polygon => {
  polygon.$smooth = smooth;
  polygon.$color = color;
  return polygon;
};

export const vec3_transform = /* @__PURE__ */ ({ x, y, z }: Readonly<Vec3Optional>, m: DOMMatrixReadOnly): Vec3 => {
  ({ x, y, z } = m.transformPoint({ x, y, z }));
  return { x, y, z };
};

export const polygon_transform = /* @__PURE__ */ (
  polygon: Polygon<Readonly<Vec3Optional>>,
  m: DOMMatrixReadOnly,
  color: number | undefined = polygon.$color,
): Polygon =>
  polygon_color(
    polygon.map((p) => vec3_transform(p, m)),
    color,
    polygon.$smooth,
  );

export const polygons_transform = /* @__PURE__ */ (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  m: DOMMatrixReadOnly,
  color?: number | undefined,
) => polygons.map((polygon) => polygon_transform(polygon, m, color));

/**
 * Creates a regular polygon
 * The polygon will face up (normal 0, -1, 0).
 */
export const polygon_regular = /* @__PURE__ */ (segments: number, elongate: number = 0): Polygon =>
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
export const cylinder_sides = /* @__PURE__ */ (btm: Polygon, top: Polygon, smooth?: 0 | 1 | undefined): Polygon[] =>
  btm.map((btmi, i, { length }) =>
    polygon_color(
      [btmi, top[length - i - 1]!, top[length - ((i + 1) % length) - 1]!, btm[(i + 1) % length]!],
      btm.$color,
      smooth,
    ),
  );

/** Simplest composition of polygon functions. */
export const cylinder = /* @__PURE__ */ (
  segments: number | Vec3Optional[],
  smooth?: 0 | 1,
  topSize: number = 0,
  elongate?: number,
): Polygon[] => {
  const points = (segments as Vec3Optional[]).length
    ? (segments as Vec3Optional[])
    : polygon_regular(segments as number, elongate);
  const top = polygon_transform(points, identity.translate(0, 1).scale3d(topSize > 0 ? topSize : 1));
  const bottom = polygon_transform(points, identity.translate(0, -1).scale3d(topSize < 0 ? -topSize : 1)).reverse();
  return [...cylinder_sides(bottom as Polygon, top, smooth), bottom, top];
};

export const sphere = /* @__PURE__ */ (
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
      polygons.push(polygon);
      const vertex = (x: number, y: number) => polygon.push(vertexFunc(x, y, polygon));
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
