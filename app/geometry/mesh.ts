import { triangle_map, triangle_translate, triangle_flip, type Triangle } from "./triangle";
import { vertex_transform, type Vertex } from "./vertex";

export type Material = [number, number, number];

export type Mesh = Triangle[];

export const mesh_map = (triangles: Iterable<Triangle>, fn: (triangle: Triangle, index: number) => Triangle): Mesh =>
  Array.from(triangles, fn);

export const mesh_mapVertices = (triangles: Iterable<Triangle>, fn: (vertex: Vertex) => Vertex): Mesh =>
  Array.from(triangles, (triangle) => triangle_map(triangle, fn));

export const mesh_translate = (
  triangles: Iterable<Triangle>,
  tx: number,
  ty?: number,
  tz?: number,
): Iterable<Triangle> => mesh_map(triangles, (t) => triangle_translate(t, tx, ty, tz));

export const mesh_transform = (triangles: Iterable<Triangle>, m: DOMMatrix): Mesh =>
  mesh_mapVertices(triangles, (v) => vertex_transform(v, m));

export const mesh_clone = (triangles: Iterable<Triangle>): Mesh => mesh_mapVertices(triangles, (v) => ({ ...v }));

export const mesh_flipped = (triangles: Iterable<Triangle>): Mesh => mesh_map(triangles, triangle_flip);

export const mesh_fromConvexPolygon = (material: Material, polygon: Vertex[]): Mesh => {
  const result: Mesh = [];
  for (let i = 2; i < polygon.length; i++) {
    result.push({
      a: polygon[0]!,
      b: polygon[i - 1]!,
      c: polygon[i]!,
      m: material,
    });
  }
  return result;
};

/** Creates a regular polygon */
export const mesh_regularPolygon = (material: Material, segments: number, y = 0): Mesh => {
  const points: Vertex[] = [];
  for (let i = 0; i < segments; i++) {
    const a = ((Math.PI * 2) / segments) * (i % segments);
    points[i] = { x: Math.cos(a), y, z: Math.sin(a), f: 0, g: -1, h: 0 };
  }
  return mesh_fromConvexPolygon(material, points);
};

export const mesh_cylinder = ($material: Material, segments: number, smoothed?: boolean | 1): Mesh => {
  const top = mesh_flipped(mesh_regularPolygon($material, segments, 1));
  const btm = mesh_regularPolygon($material, segments, -1);

  const result: Mesh = [...top, ...btm];

  for (let i = 0; i < segments; ++i) {
    const ra = ((Math.PI * 2) / segments) * (i % segments);
    const rb = ((Math.PI * 2) / segments) * ((i + 1) % segments);

    const ax = Math.cos(ra);
    const az = Math.sin(ra);
    const bx = Math.cos(rb);
    const bz = Math.sin(rb);

    let nax = ax - az;
    let naz = ax + az;

    let nbx = bx - bz;
    let nbz = bx + bz;

    if (!smoothed) {
      nax = nbx = (nax + nbx) / 2;
      naz = nbz = (naz + nbz) / 2;
    }

    const a: Vertex = { x: ax, y: -1, z: az, f: nax, g: 0, h: naz };
    const b: Vertex = { x: ax, y: 1, z: az, f: nax, g: 0, h: naz };
    const c: Vertex = { x: bx, y: 1, z: bz, f: nbx, g: 0, h: nbz };
    const d: Vertex = { x: bx, y: -1, z: bz, f: nbx, g: 0, h: nbz };
    result.push({ a, b, c, m: $material }, { a, b: c, c: d, m: $material });
  }

  return result;
};

type FinalTriangleVertex = [number, number, number, number, number, number, number, number, number] & {
  $index: number;
};

type FinalTriangle = [FinalTriangleVertex, FinalTriangleVertex, FinalTriangleVertex];

export const solids_to_triangles = (solids: Triangle[][]) => {
  const vertexMap = new Map<string, FinalTriangleVertex>();
  const triangles: FinalTriangle[] = [];

  const getVertex = ({ x, y, z, f, g, h }: Vertex, $material: Material): FinalTriangleVertex => {
    x = Math.fround(x);
    y = Math.fround(y);
    z = Math.fround(z);

    f = Math.fround(f);
    g = Math.fround(g);
    h = Math.fround(h);

    const vertex = [x, y, z, f, g, h, ...$material] as FinalTriangleVertex;
    vertex.$index = -1;

    const key = "" + vertex;

    const found = vertexMap.get(key);
    if (found) {
      return found;
    }
    vertexMap.set(key, vertex);
    return vertex;
  };

  const makePolygon = ({ a, b, c, m }: Triangle) => {
    const va = getVertex(a, m);
    const vb = getVertex(b, m);
    const vc = getVertex(c, m);
    if (va !== vb && va !== vc && vb !== vc) {
      triangles.push([va, vb, vc]);
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

  const getVertexIndex = (vertex: FinalTriangleVertex): number => {
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
