import { abs, integers_map, identity, type Vec3, type Vec3Optional, max, clamp01 } from "../math";

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

export const cone_sides = /* @__PURE__ */ (btm: Polygon, smooth?: 0 | 1 | undefined): Polygon[] =>
  btm.map((btmi, i, { length }) => polygon_color([btm[(i + 1) % length]!, { x: 0, y: 1, z: 0 }, btmi], 0, smooth));

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
  const sides = cylinder_sides(bottom as Polygon, top, smooth);
  sides.push(bottom, top);
  return sides;
};

export const cone = /* @__PURE__ */ (segments: number, smooth?: 0 | 1 | undefined): Polygon[] => {
  const bottom = polygon_transform(polygon_regular(segments), identity.translate(0, -1));
  const sides = cone_sides(bottom, smooth);
  sides.push(bottom);
  return sides;
};

// export const sphere = /* @__PURE__ */ (slices: number, stacks = 40): Polygon[] => {
//   const polygons: Polygon[] = [];
//   for (let i = 0; i < slices; i++) {
//     for (let j = 0; j < stacks; j++) {
//       const vertices = polygon_color([], 0, 1);
//       const vertex = (a: number, b: number) => {
//         const am = a / slices;
//         const bm = b / stacks;

//         const phi = bm * Math.PI;
//         const theta = am * Math.PI * 2;

//         const phixz = (bm ** 0.6 * Math.PI) / 2;

//         const osc = (bm * bm * Math.sin(am * 40)) / 3;

//         const x = Math.cos(theta) * Math.sin(phixz);

//         const y = Math.cos(bm * Math.PI) - bm - osc;

//         if (b > stacks - 2) {
//           return vertices.push({ x: 0, y: y / 2, z: 0 });
//         }

//         const z = Math.sin(theta) * Math.sin(phixz) + Math.sin(osc * Math.PI * 2) / 4;

//         // + (clamp01(bm - 0.5) ** 4 * Math.sin(am * 17 * Math.PI)) / 2

//         // if (b > 0.)

//         // if (b >= 0.9) {
//         //   y = -1;
//         // }

//         return vertices.push({ x, y, z });
//       };
//       vertex(i, j);
//       if (j) {
//         vertex(i + 1, j);
//       }
//       if (j < stacks - 1) {
//         vertex(i + 1, j + 1);
//       }
//       vertex(i, j + 1);
//       polygons.push(vertices);
//     }
//   }
//   return polygons;
// };

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
      const vertex = (x: number, y: number) => polygon.push(vertexFunc(x, y, polygon));
      vertex(i, j);
      if (j) {
        vertex((i + 1) % slices, j);
      }
      if (j < stacks - 1) {
        vertex((i + 1) % slices, j + (1 % stacks));
      }
      vertex(i, j + (1 % stacks));
      polygons.push(polygon);
    }
  }
  return polygons;
};

// export const sphere = /* @__PURE__ */ (slices: number): Polygon[] => {
//   const stacks = slices;
//   const polygons: Polygon[] = [];

//   const newVertex = (theta: number, phi: number) => {
//     phi *= Math.PI;
//     theta *= Math.PI * 2;
//     return { x: Math.cos(theta) * Math.sin(phi), y: Math.cos(phi), z: Math.sin(theta) * Math.sin(phi) };
//   };

//   const vmatrix = integers_map(slices, (x) => integers_map(stacks, (y) => newVertex(x / slices, y / stacks)));

//   for (let i = 0; i < slices; i++) {
//     for (let j = 0; j < stacks; j++) {
//       const vertices = polygon_color([], 0, 1);
//       const vertex = (x: number, y: number) => vertices.push(vmatrix[x % slices]![y % stacks]!);
//       vertex(i, j);
//       if (j) {
//         vertex(i + 1, j);
//       }
//       if (j < stacks - 1) {
//         vertex(i + 1, j + 1);
//       }
//       vertex(i, j + 1);
//       polygons.push(vertices);
//     }
//   }
//   return polygons;
// };
