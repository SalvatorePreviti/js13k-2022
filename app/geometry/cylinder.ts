import { plane_fromTriangle } from "../math/plane";
import type { Vec3, Vec3In } from "../math/vectors";
import { vec3_clone } from "../math/vectors";

export type Material = [number, number, number];

export interface Polygon {
  /** Polygon material */
  $material: Material;

  /** Polygon points */
  $points: Vec3[];
}

export const vec3_transform = (v: Vec3In, m: DOMMatrix) => m.transformPoint(v);

export const polygon_transform = ({ $material, $points }: Polygon, m: DOMMatrix): Polygon => ({
  $material,
  $points: $points.map(m.transformPoint, m),
});

// polygon_map(polygon, (point) => vec3_transform(point, m));

// export const polygon_map = (polygon: Polygon, fn: (vertex: Vec3, i: number, array: Vec3[]) => Vec3) => ({
//  $material: polygon.$material,
//  $points: polygon.$points.map(fn),
// });

export const polygon_clone = ({ $material, $points }: Polygon): Polygon => ({
  $material,
  $points: $points.map(vec3_clone),
});

export const polygon_flip = (polygon: Polygon) => {
  polygon.$points.reverse();
  return polygon;
};

export const polygon_flipped = (polygon: Polygon): Polygon => polygon_flip(polygon_clone(polygon));

/** Builds the extruded sides of a polygon */
export const polygon_extrudeSides = ({ $points, $material }: Polygon): Polygon[] => {
  const result: Polygon[] = [];
  for (let i = 0, len = $points.length; i <= len; ++i) {
    const { x: ax, z: az } = $points[i % len]!;
    const { x: bx, z: bz } = $points[(i + 1) % len]!;
    result[i] = {
      $material,
      $points: [
        { x: ax, y: -1, z: az },
        { x: ax, y: 1, z: az },
        { x: bx, y: 1, z: bz },
        { x: bx, y: -1, z: bz },
      ],
    };
  }
  return result;
};

export const polygon_extrude = (polygon: Polygon): Polygon[] => {
  const sides = polygon_extrudeSides(polygon);
  const top = polygon_clone(polygon);
  const bottom = polygon_clone(polygon);
  for (const p of top.$points.reverse()) {
    p.y = 1;
  }
  for (const p of bottom.$points) {
    p.y = -1;
  }
  return [bottom, ...sides, top];
};

/** Creates a regular polygon */
export const polygon_regular = (material: Material, segments: number): Polygon => {
  const points: Vec3[] = [];
  for (let i = 0; i <= segments; i++) {
    const a = ((Math.PI * 2) / segments) * (i % segments);
    points[i] = { x: Math.cos(a), y: 0, z: Math.sin(a) };
  }
  return { $material: material, $points: points };
};

export const solid_transform = (solid: Polygon[], m: DOMMatrix) =>
  solid.map((polygon) => polygon_transform(polygon, m));

export const solid_cylinder = (material: Material, segments: number): Polygon[] =>
  polygon_extrude(polygon_regular(material, segments));

export const solids_to_triangles = (solids: Polygon[][]) => {
  const $vertices: number[] = [];
  const $indices: number[] = [];
  const vertexMap = new Map<string, number>();

  const getVertex = ({ x, y, z }: Vec3, { x: nx, y: ny, z: nz }: Vec3, material: Material) => {
    const vertex = [x, y, z, nx, ny, nz, ...material].map(Math.fround);
    const key = "" + vertex;
    let result = vertexMap.get(key);
    if (result === undefined) {
      result = vertexMap.size;
      vertexMap.set(key, result);
      $vertices.push(...vertex);
    }
    return result;
  };

  const makePolygon = ({ $points, $material }: Polygon) => {
    const plane = plane_fromTriangle({}, $points as [Vec3In, Vec3In, Vec3In]);
    for (let i = 2; i < $points.length; i++) {
      $indices.push(
        getVertex($points[0]!, plane, $material),
        getVertex($points[i - 1]!, plane, $material),
        getVertex($points[i]!, plane, $material),
      );
    }
  };

  for (const polygons of solids) {
    for (const polygon of polygons) {
      makePolygon(polygon);
    }
  }

  return {
    $vertices,
    $indices,
  };
};
