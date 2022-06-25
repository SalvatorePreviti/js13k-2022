import { vertex_flip, vertex_transform, vertex_translate, type Vertex } from "./vertex";
import type { Material } from "./mesh";

export interface Triangle {
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
