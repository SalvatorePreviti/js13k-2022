import { plane_distance, type Plane } from "../math/plane";
import type { Vec3 } from "../math/vectors";
import type { Material } from "./mesh";
import type { Triangle } from "./triangle";
import { triangle_plane } from "./triangle";
import type { Vertex } from "./vertex";
import { vertex_lerp } from "./vertex";

export interface CSGPolygon extends Plane {
  $points: Vertex[];
  $material: Material;
}

export const CSGPolygon_fromTriangle = (triangle: Triangle) => {
  const result = triangle_plane(triangle) as CSGPolygon;
  result.$points = [{ ...triangle.a }, { ...triangle.b }, { ...triangle.c }];
  result.$material = triangle.m;
  return result;
};

export const PLANE_EPSILON = 1e-5;

type PolygonCategory = typeof COPLANAR | typeof FRONT | typeof BACK | typeof SPANNING;

const COPLANAR = 0;
const FRONT = 1;
const BACK = 2;
const SPANNING = 3;

interface SplitPolygonResult {
  $type: PolygonCategory;
  $back: CSGPolygon | undefined | false;
  $front: CSGPolygon | undefined | false;
}

const classify = (t: number) => (t < -PLANE_EPSILON ? BACK : t > PLANE_EPSILON ? FRONT : COPLANAR);

const planeDet = ({ x, y, z }: Vec3, i: Vec3, j: Vec3) => x * (j.x - i.x) + y * (j.y - i.y) + z * (j.z - i.z);

export const CSGPolygon_split = (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  let $front: CSGPolygon | false | undefined;
  let $back: CSGPolygon | false | undefined;

  const { $points } = polygon;

  let $type = 0 as PolygonCategory;
  for (const p of $points) {
    $type |= classify(plane_distance(plane, p));
  }

  if ($type === FRONT) {
    // FRONT
    $front = polygon;
  } else if ($type === BACK) {
    // BACK
    $back = polygon;
  } else if ($type) {
    // SPANNING
    const f: Vertex[] = [];
    const b: Vertex[] = [];
    const pointsLen = $points.length;
    for (let i = 0; i < pointsLen; ++i) {
      const iv = $points[i]!;
      const jv = $points[(i + 1) % pointsLen]!;

      const tid = plane_distance(plane, iv);
      const ti = classify(tid);

      const tj = classify(plane_distance(plane, jv));

      if (ti !== BACK) {
        f.push(iv);
      }
      if (ti !== FRONT) {
        b.push(ti !== BACK ? { ...iv } : iv);
      }
      if ((ti | tj) === SPANNING) {
        const v = vertex_lerp(iv, jv, -tid / planeDet(plane, iv, jv));
        f.push(v);
        b.push({ ...v });
      }
    }
    $front = f.length > 2 && { ...polygon, $points: f };
    $back = b.length > 2 && { ...polygon, $points: b };
  } else if (plane_distance(plane, polygon) > 0) {
    // COPLANAR front
    $front = polygon;
  } else {
    // COPLANAR back
    $back = polygon;
  }

  return { $front, $back, $type };
};
