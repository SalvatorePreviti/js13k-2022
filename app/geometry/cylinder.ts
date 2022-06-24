import { normal_snap, pos_snap } from "../math/math";
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

export const vec3_transform = (v: Vec3In, m: DOMMatrix) => {
  const { x, y, z } = m.transformPoint(v);
  return { x, y, z };
};

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

type Vertex = [number, number, number, number, number, number, number, number, number] & {
  $index: number;
};

type Triangle = [Vertex, Vertex, Vertex];

export const solids_to_triangles = (solids: Polygon[][]) => {
  const vertexMap = new Map<string, Vertex>();
  const triangles: Triangle[] = [];

  const getVertex = ({ x, y, z }: Vec3, { x: $nx, y: $ny, z: $nz }: Vec3, $material: Material): Vertex => {
    x = pos_snap(x);
    y = pos_snap(y);
    z = pos_snap(z);

    $nx = normal_snap($nx);
    $ny = normal_snap($ny);
    $nz = normal_snap($nz);

    const vertex = [x, y, z, $nx, $ny, $nz, ...$material] as Vertex;
    vertex.$index = -1;

    const key = "" + vertex;

    const found = vertexMap.get(key);
    if (found) {
      return found;
    }
    vertexMap.set(key, vertex);
    return vertex;
  };

  const makePolygon = ({ $points, $material }: Polygon) => {
    for (let i = 2; i < $points.length; i++) {
      const plane = plane_fromTriangle({}, $points[0]!, $points[i - 1]!, $points[i]!);
      const a = getVertex($points[0]!, plane, $material);
      const b = getVertex($points[i - 1]!, plane, $material);
      const c = getVertex($points[i]!, plane, $material);
      if (a !== b && a !== c && b !== c) {
        const triangle: Triangle = [a, b, c];
        triangles.push(triangle);
      }
    }
  };

  for (const polygons of solids) {
    for (const polygon of polygons) {
      makePolygon(polygon);
    }
  }

  const $vertices: number[] = [];
  const $indices: number[] = [];

  let verticesCount = 0;

  const getVertexIndex = (vertex: Vertex): number => {
    let { $index } = vertex;
    if ($index === -1) {
      $index = verticesCount++;
      vertex.$index = $index;
      $vertices.push(...vertex);
    }
    return $index;
  };

  for (const [a, b, c] of triangles) {
    $indices.push(getVertexIndex(a), getVertexIndex(b), getVertexIndex(c));
  }

  return {
    $vertices,
    $indices,
  };
};
