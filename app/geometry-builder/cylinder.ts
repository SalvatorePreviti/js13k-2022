import { cos, DEG_PER_RAD, fround, sin, TWO_PI } from "../math/math";
import { vec3_cross, vec3_new, vec3_sub } from "../math/vectors";

/*
  Vertex structure:
    // [x,y,z,u,v]

    // [x,y,z, normalX,normalY,normalZ, u,v]
*/

/* export interface Vertex {
  $x: number;
  $y: number;
  $z: number;
  $nx: number;
  $ny: number;
  $nz: number;
  $u: number;
  $v: number;
} */

export type Material = Vec3;

export let currentMaterial = vec3_new(1, 0, 0);

export const setCurrentMaterial = (r: number, g: number, b: number) => (currentMaterial = vec3_new(r, g, b));

/* export const Polygon_new = (...args: Vec3[]) => {
  (args as Polygon).$material = currentMaterial;
  return args as Polygon;
}; */

export interface Polygon {
  $points: Vec3[];
  $material: Material;
}

export const Polygon_new = (args: Vec3[] = []) => {
  return {
    $points: args,
    $material: currentMaterial,
  };
};

export const cylinder_body = (segments: number) => {
  const polygons: Polygon[] = [];
  let q0 = vec3_new(1, -1, 0);
  let q1 = vec3_new(1, 1, 0);
  let p0: Vec3;
  let p1: Vec3;
  for (let i = 0; i < segments; i++) {
    const theta = (TWO_PI / segments) * ((i + 1) % segments);
    const c = cos(theta);
    const s = sin(theta);
    p0 = vec3_new(c, -1, s);
    p1 = vec3_new(c, 1, s);
    polygons.push(Polygon_new([q0, q1, p1, p0]));
    q0 = p0;
    q1 = p1;
  }
  return polygons;
};

export const cylinder = (segments: number) => {
  const result = cylinder_body(segments);
  const capTopVertices: Vec3[] = [];
  const capBottomVertices: Vec3[] = [];
  for (let i = 0; i < segments; ++i) {
    capTopVertices[i] = result[i]!.$points[0]!;
    capBottomVertices[i] = result[segments - i - 1]!.$points[1]!;
  }
  result.push(Polygon_new(capTopVertices), Polygon_new(capBottomVertices));
  return result;
};

export const polygon_flip = (polygon: Polygon): Polygon => {
  return {
    ...polygon,
    $points: polygon.$points.slice().reverse(),
  };
};

export const flip = (polygons: Polygon[]) => {
  return polygons.map(polygon_flip);
};

export const translate = (polygons: Polygon[], tx: number, ty: number, tz: number) => {
  return polygons.map((polygon) => ({
    ...polygon,
    $points: polygon.$points.map(({ x, y, z }) => vec3_new(tx + x, ty + y, tz + z)),
  }));
};

export const scale = (polygons: Polygon[], sx: number, sy: number, sz: number) => {
  return polygons.map((polygon) => ({
    ...polygon,
    $points: polygon.$points.map(({ x, y, z }) => vec3_new(sx * x, sy * y, sz * z)),
  }));
};

export const rotate = (polygons: Polygon[], rx: number, ry: number, rz: number) => {
  rx *= DEG_PER_RAD;
  ry *= DEG_PER_RAD;
  rz *= DEG_PER_RAD;
  const cosX = cos(rx);
  const sinX = sin(rx);
  const cosY = cos(ry);
  const sinY = sin(ry);
  const cosZ = cos(rz);
  const sinZ = sin(rz);

  const xaxisX = cosZ * cosY;
  const xaxisY = cosZ * sinY * sinX - sinZ * cosX;
  const xasisZ = sinZ * sinX + cosZ * sinY * cosX;
  const yaxisX = sinZ * cosY;
  const yaxisY = cosZ * cosX + sinZ * sinY * sinX;
  const yaxisZ = sinZ * sinY * cosX - cosZ * sinX;
  const zaxisX = -sinY;
  const zaxisY = cosY * sinX;
  const zaxisZ = cosY * cosX;

  return polygons.map((polygon) => ({
    ...polygon,
    $points: polygon.$points.map(({ x, y, z }) =>
      vec3_new(
        xaxisX * x + yaxisX * y + zaxisX * z,
        xaxisY * x + yaxisY * y + zaxisY * z,
        xasisZ * x + yaxisZ * y + zaxisZ * z,
      ),
    ),
  }));
};

export const polygons_to_triangles = (polygons: Polygon[]) => {
  const U = vec3_new();
  const V = vec3_new();

  const $vertices: number[] = [];
  const $indices: number[] = [];
  const vertexMap = new Map<string, number>();

  const getVertex = (xyz: Vec3, normal: Vec3, material: Material) => {
    const vertex = [xyz.x, xyz.y, xyz.z, normal.x, normal.y, normal.z, material.x, material.y, material.z].map(fround);
    const key = "" + vertex;
    let result = vertexMap.get(key);
    if (result === undefined) {
      result = vertexMap.size;
      vertexMap.set(key, result);
      $vertices.push(...vertex);
    }
    return result;
  };

  const makeTriangle = (v0: Vec3, v1: Vec3, v2: Vec3, material: Material) => {
    vec3_sub(U, v1, v0);
    vec3_sub(V, v2, v0);
    vec3_cross(U, U, V);
    $indices.push(getVertex(v0, U, material), getVertex(v1, U, material), getVertex(v2, U, material));
  };

  const makePolygon = ({ $points, $material }: Polygon) => {
    const a = $points[0]!;
    let b = $points[1]!;
    for (let i = 2, c; i < $points.length; ++i, b = c) {
      c = $points[i]!;
      makeTriangle(a, b, c, $material);
    }
  };

  polygons.forEach(makePolygon);

  return {
    $vertices,
    $indices,
  };
};
