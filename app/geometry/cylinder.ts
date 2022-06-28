import type { Vec3 } from "../math/vectors";

export type Material = [number, number, number];

export interface Vertex extends Vec3 {
  $nx: number;
  $ny: number;
  $nz: number;
}

export const vertex_lerp = ({ x, y, z, $nx, $ny, $nz }: Vertex, b: Vertex, t: number): Vertex => ({
  x: x + (b.x - x) * t,
  y: y + (b.y - y) * t,
  z: z + (b.z - z) * t,
  $nx: $nx + (b.$nx - $nx) * t,
  $ny: $ny + (b.$ny - $ny) * t,
  $nz: $nz + (b.$nz - $nz) * t,
});

export interface Polygon {
  /** Polygon material */
  $material: Material;

  /** Polygon points */
  $points: Vertex[];
}

export const vertex_transform = ({ x, y, z, $nx, $ny, $nz }: Vertex, m: DOMMatrix): Vertex => {
  const { x: px, y: py, z: pz } = m.transformPoint({ x, y, z });
  const { x: nx, y: ny, z: nz } = m.transformPoint({ x: $nx, y: $ny, z: $nz, w: 0 });
  return { x: px, y: py, z: pz, $nx: nx, $ny: ny, $nz: nz };
};

export const polygon_transform = ({ $material, $points }: Polygon, m: DOMMatrix): Polygon => ({
  $material,
  $points: $points.map((v) => vertex_transform(v, m)),
});

export const polygon_clone = ({ $material, $points }: Polygon): Polygon => ({
  $material,
  $points: $points.map((v) => ({ ...v })),
});

export const polygon_flipSelf = (polygon: Polygon) => {
  for (const v of polygon.$points.reverse()) {
    v.$nx *= -1;
    v.$ny *= -1;
    v.$nz *= -1;
  }
  return polygon;
};

export const polygon_flipped = (polygon: Polygon): Polygon => polygon_flipSelf(polygon_clone(polygon));

/** Creates a regular polygon */
export const polygon_regular = (material: Material, segments: number, y = 0): Polygon => {
  const points: Vertex[] = [];
  for (let i = 0; i < segments; i++) {
    const a = ((Math.PI * 2) / segments) * (i % segments);
    points[i] = { x: Math.cos(a), y, z: Math.sin(a), $nx: 0, $ny: -1, $nz: 0 };
  }
  return { $material: material, $points: points };
};

export const solid_cylinder = ($material: Material, segments: number, smoothed?: boolean | 1) => {
  const top = polygon_flipSelf(polygon_regular($material, segments, 1));
  const btm = polygon_regular($material, segments, -1);

  const result: Polygon[] = [top, btm];

  for (let i = 0; i < segments; ++i) {
    const j = (i + 1) % segments;
    const { x: ax, z: az } = btm.$points[i]!;
    const { x: bx, z: bz } = btm.$points[j]!;

    let nax = ax - az;
    let naz = ax + az;

    let nbx = bx - bz;
    let nbz = bx + bz;

    if (!smoothed) {
      nax = nbx = (nax + nbx) / 2;
      naz = nbz = (naz + nbz) / 2;
    }

    result.push({
      $material,
      $points: [
        { x: ax, y: -1, z: az, $nx: nax, $ny: 0, $nz: naz },
        { x: ax, y: 1, z: az, $nx: nax, $ny: 0, $nz: naz },
        { x: bx, y: 1, z: bz, $nx: nbx, $ny: 0, $nz: nbz },
        { x: bx, y: -1, z: bz, $nx: nbx, $ny: 0, $nz: nbz },
      ],
    });
  }

  return result;
};

// export const polygon_extrudeSides = ({ $points, $material }: Polygon): Polygon[] => {
//   const result: Polygon[] = [];
//   for (let i = 0, len = $points.length; i <= len; ++i) {
//     const { x: ax, z: az } = $points[i % len]!;
//     const { x: bx, z: bz } = $points[(i + 1) % len]!;

//     const {
//       x: $nx,
//       y: $ny,
//       z: $nz,
//     } = triangleNormal({ x: ax, y: -1, z: az }, { x: ax, y: 1, z: az }, { x: bx, y: 1, z: bz });

//     result[i] = {
//       $material,
//       $points: [
//         { x: ax, y: -1, z: az, $nx, $ny, $nz },
//         { x: ax, y: 1, z: az, $nx, $ny, $nz },
//         { x: bx, y: 1, z: bz, $nx, $ny, $nz },
//         { x: bx, y: -1, z: bz, $nx, $ny, $nz },
//       ],
//     };
//   }
//   return result;
// };

// export const polygon_extrude = (polygon: Polygon): Polygon[] => {
//   const sides = polygon_extrudeSides(polygon);
//   const top = polygon_clone(polygon);
//   const bottom = polygon_clone(polygon);
//   for (const p of top.$points.reverse()) {
//     p.y = 1;
//   }
//   for (const p of bottom.$points) {
//     p.y = -1;
//   }
//   return [bottom, ...sides, top];
// };

export const solid_transform = (solid: Polygon[], m: DOMMatrix) =>
  solid.map((polygon) => polygon_transform(polygon, m));

type TriangleVertex = [number, number, number, number, number, number, number, number, number] & {
  $index: number;
};

type Triangle = [TriangleVertex, TriangleVertex, TriangleVertex];

export const solids_to_triangles = (solids: Polygon[][]) => {
  const vertexMap = new Map<string, TriangleVertex>();
  const triangles: Triangle[] = [];

  // { x: $nx, y: $ny, z: $nz }

  const getVertex = ({ x, y, z, $nx, $ny, $nz }: Vertex, $material: Material): TriangleVertex => {
    x = Math.fround(x);
    y = Math.fround(y);
    z = Math.fround(z);

    // Normalize the normal, and round it to the nearest integer
    const m = 32767 * Math.sqrt($nx * $nx + $ny * $ny + $nz * $nz);
    $nx = ($nx * m) | 0;
    $ny = ($ny * m) | 0;
    $nz = ($nz * m) | 0;

    const vertex = [x, y, z, $nx, $ny, $nz, ...$material] as TriangleVertex;
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
      // const normal = vec3_triangleNormal($points as [Vertex, Vertex, Vertex]);

      const a = getVertex($points[0]!, $material);
      const b = getVertex($points[i - 1]!, $material);
      const c = getVertex($points[i]!, $material);
      if (a !== b && a !== c && b !== c) {
        triangles.push([a, b, c]);
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

  const getVertexIndex = (vertex: TriangleVertex): number => {
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
