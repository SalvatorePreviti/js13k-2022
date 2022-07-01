import { integers } from "../math/math";
import { identityTranslateBtm, identityTranslateTop, vec3_triangleNormal, type Vec3 } from "../math/vectors";
import { vertex_clone, vertex_flipped, vertex_lerp, type Material, type Vertex } from "./vertex";

export interface Polygon {
  /** Polygon material */
  $material: Material;

  /** Polygon points */
  $points: Vertex[];
}

export const polygon_transform = ({ $material, $points }: Polygon, m: DOMMatrix): Polygon => ({
  $material,
  $points: $points.map(({ x, y, z, $nx, $ny, $nz }: Vertex): Vertex => {
    ({ x, y, z } = m.transformPoint({ x, y, z }));
    ({ x: $nx, y: $ny, z: $nz } = m.transformPoint({ x: $nx, y: $ny, z: $nz, w: 0 }));
    return { x, y, z, $nx, $ny, $nz };
  }),
});

export const polygon_clone = ({ $material, $points }: Polygon): Polygon => ({
  $material,
  $points: $points.map(vertex_clone),
});

export const polygon_flipped = ({ $material, $points }: Polygon): Polygon => ({
  $material,
  $points: $points.map(vertex_flipped).reverse(),
});

/**
 * Creates a polygon from a list of point.
 * The normal will be automatically calculated from the first 3 points.
 * Remember that you can define only convex and planar polygons - concave polygons are NOT supported.
 * To create a concave solid or holes, look at the csg.ts module
 */
export const polygon_fromPoints = (material: Material, points: Vec3[]): Polygon => {
  const { x: $nx, y: $ny, z: $nz } = vec3_triangleNormal(points as [Vec3, Vec3, Vec3]);
  return {
    $material: material,
    $points: points.map(({ x, y, z }: Vec3): Vertex => ({ x, y, z, $nx, $ny, $nz })),
  };
};

/**
 * Creates a regular polygon
 * The polygon will face up (normal 0, -1, 0).
 */
export const polygon_regular = ($material: Material, segments: number, arc = (Math.PI / segments) * 2): Polygon => ({
  $material,
  $points: integers(segments).map((i) => ({
    x: Math.cos(arc * i),
    y: 0,
    z: Math.sin(arc * i),
    $nx: 0,
    $ny: -1,
    $nz: 0,
  })),
});

export const polygon_quad = (material: Material, y: number = 0): Polygon =>
  polygon_fromPoints(material, [
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
export const polygon_sides = ($material: Material, { $points: btm }: Polygon, { $points: top }: Polygon): Polygon[] =>
  btm.map((btmi, i, { length }) =>
    polygon_fromPoints($material, [
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
export const solid_material = (solid: Polygon[], $material: Material): Polygon[] =>
  solid.map((polygon: Polygon): Polygon => ({ ...polygon, $material }));

/**
 * Smooths the normals of a list of quads
 * @param sides The side polygons returned by polygon_sides
 * @returns
 */
export const solid_smoothSidesQuads = (sides: Polygon[]): Polygon[] => {
  let a = sides[sides.length - 2]!.$points;
  let b = sides[sides.length - 1]!.$points;
  return sides.map(({ $points: c, $material }) => {
    const result = {
      $material,
      $points: [
        vertex_lerp(b[0]!, a[3]!, 0, 0.5),
        vertex_lerp(b[1]!, a[2]!, 0, 0.5),
        vertex_lerp(b[2]!, c[1]!, 0, 0.5),
        vertex_lerp(b[3]!, c[0]!, 0, 0.5),
      ],
    };
    a = b;
    b = c;
    return result;
  });
};

/**
 * Flips a solid. The interior becomes exterior, the exterior becomes interior.
 * It flips the vertices normals and reverses the order of the points.
 */
export const solid_flipped = (solid: Polygon[]): Polygon[] => solid.map(polygon_flipped);

/**
 * Extrudes a polygon into a solid.
 * To remove bottom and top polygons, use solid_extrude(...).slice(2).
 * The solid will be centered at 0 vertically and its height will be 2 (from -1 to 1)
 */
export const solid_extrude = (
  $material: Material,
  bottom: Polygon,
  top: Polygon = polygon_flipped(bottom),
): Polygon[] => {
  bottom = polygon_transform(bottom, identityTranslateBtm);
  top = polygon_transform(top, identityTranslateTop);
  const sides = polygon_sides($material, bottom, top);
  return [bottom, top, ...sides];
};

export const solid_box = ($material: Material) => solid_extrude($material, polygon_quad($material));

export const solid_regular = ($material: Material, sides: number) =>
  solid_extrude($material, polygon_regular($material, sides));

/** Simplest composition of polygon functions. */
export const solid_cylinder = ($material: Material, segments: number, smoothed?: boolean | 0 | 1): Polygon[] => {
  const solid = solid_extrude($material, polygon_regular($material, segments));
  return smoothed ? [solid[0]!, solid[1]!, ...solid_smoothSidesQuads(solid.slice(2))] : solid;
};

export const solid_transform = (solid: Polygon[], m: DOMMatrix) =>
  solid.map((polygon) => polygon_transform(polygon, m));

type TriangleVertex = [number, number, number, number, number, number, number, number, number] & {
  $index: number;
};

type Triangle = [TriangleVertex, TriangleVertex, TriangleVertex];

export interface SceneTriangles {
  $vertices: number[];
  $indices: number[];
}

export interface TriangulatedSolids {
  $vertices: number[];
  $indices: number[];
}

export const solids_to_triangles = (solids: Polygon[][]): TriangulatedSolids => {
  const vertexMap = new Map<string, TriangleVertex>();
  const triangles: Triangle[] = [];

  const getVertex = ({ x, y, z, $nx, $ny, $nz }: Vertex, $material: Material): TriangleVertex => {
    x = Math.fround(x);
    y = Math.fround(y);
    z = Math.fround(z);

    // Normalize the normal, and round it to the nearest 8 bit integer
    const m = 32767 * Math.sqrt($nx * $nx + $ny * $ny + $nz * $nz);
    $nx = ($nx * m) | 0;
    $ny = ($ny * m) | 0;
    $nz = ($nz * m) | 0;

    // Build the vertex

    const vertex = [x, y, z, $nx, $ny, $nz, ...$material] as TriangleVertex;

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
    if ($index === undefined) {
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
