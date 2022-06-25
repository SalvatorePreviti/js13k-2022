import { vertex_flip, vertex_transform, vertex_translate, type Vertex } from "./vertex";
import type { Material } from "./mesh";
import type { Vec3In } from "../math/vectors";
import { vec3_dot, vec3_cross, vec3_sub, type Vec3, type Vec4 } from "../math/vectors";
import { TOLERANCE } from "../math/math";

export interface TrianglePoints {
  a: Vec3;
  b: Vec3;
  c: Vec3;
}

export interface Triangle extends TrianglePoints {
  a: Vertex;
  b: Vertex;
  c: Vertex;
  /** Polygon material */
  m: Material;
}

export const triangle_map = ({ a, b, c, m }: Triangle, fn: (p: Vertex) => Vertex): Triangle => ({
  a: fn(a),
  b: fn(b),
  c: fn(c),
  m,
});

export const triangle_vertices = ({ a, b, c }: Triangle): Vertex[] => [a, b, c];

export const triangle_translate = (triangle: Triangle, tx: number, ty?: number, tz?: number): Triangle =>
  triangle_map(triangle, (v) => vertex_translate(v, tx, ty, tz));

export const triangle_transform = (triangle: Triangle, m: DOMMatrix): Triangle =>
  triangle_map(triangle, (v) => vertex_transform(v, m));

export const triangle_clone = (triangle: Triangle): Triangle => triangle_map(triangle, (v) => ({ ...v }));

export const triangle_flip = ({ a, b, c, m }: Triangle) => ({
  c: vertex_flip(a),
  b: vertex_flip(b),
  a: vertex_flip(c),
  m,
});

/** Computes the normal vector from triangle vertices */
export const triangle_normal = ({ a: { x, y, z }, b, c }: TrianglePoints): Vec3 => {
  // b - a
  const bax = b.x - x;
  const bay = b.y - y;
  const baz = b.z - z;

  // c - a
  const cax = c.x - x;
  const cay = c.y - y;
  const caz = c.z - z;

  // Cross product (b-a) x (c-a)
  const nx = bay * caz - baz * cay;
  const ny = baz * cax - bax * caz;
  const nz = bax * cay - bay * cax;

  // Magnitude, for normalization
  const nlength = Math.sqrt(nx * nx + ny * ny + nz * nz);

  // Normalize
  return { x: nx / nlength, y: ny / nlength, z: nz / nlength };
};

/** Computes the plane passing from the 3 vertices of the triangle */
export const triangle_plane = (triangle: TrianglePoints): Vec4 => {
  const result = triangle_normal(triangle) as Vec4;
  result.w = vec3_dot(result, triangle.a);
  return result;
};

export const triangle_rayIntersection = ({ a, b, c }: TrianglePoints, eye: Vec3In, dir: Vec3In): number | false => {
  const edge1 = vec3_sub(b, a);
  const edge2 = vec3_sub(c, a);
  const pvec = vec3_cross(dir, edge2);
  const det = vec3_dot(edge1, eye);

  if (det < TOLERANCE) {
    return false;
  }

  const tvec = vec3_sub(eye, a);
  const u = vec3_dot(tvec, pvec);
  if (u < 0 || u > det) {
    return false;
  }

  const qvec = vec3_cross(tvec, edge1);
  const v = vec3_dot(dir, qvec);
  if (v < 0 || u + v > det) {
    return false;
  }

  return vec3_dot(edge2, qvec) / det;
};
