import { vec3_triangleNormal, vec3_dot, type Plane } from "../math/vectors";
import type { Polygon, Vertex } from "./cylinder";
import { vertex_lerp } from "./cylinder";

export const PLANE_EPSILON = 1e-5;

export const LERP_EPSILON = PLANE_EPSILON;

type PolygonCategory = typeof COPLANAR | typeof FRONT | typeof BACK | typeof SPANNING;

const COPLANAR = 0;
const FRONT = 1;
const BACK = 2;
const SPANNING = 3;

interface SplitPolygonResult {
  $type: PolygonCategory;
  $back: Polygon | undefined | false;
  $front: Polygon | undefined | false;
}

export const CSGPolygon_split = (plane: Plane, polygon: Polygon): SplitPolygonResult => {
  const planeW = plane.w;
  const { $points } = polygon;
  const pointsLen = $points.length;

  let $front: Polygon | false | undefined;
  let $back: Polygon | false | undefined;
  let $type: PolygonCategory = 0 as PolygonCategory;
  for (let i = 0; i < pointsLen && $type < 3; ++i) {
    const t = vec3_dot(plane, $points[i]!) - planeW;
    $type |= t < -PLANE_EPSILON ? BACK : t > PLANE_EPSILON ? FRONT : COPLANAR;
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

    let iv: Vertex = $points[pointsLen - 1]!;
    let id: number = vec3_dot(plane, iv) - planeW;
    let v: Vertex;
    for (let i = 0; i < pointsLen; ) {
      // const iv = $points[i]!;
      // const tid = vec3_dot(plane, iv) - planeW;
      const jv = $points[i++]!;
      const jd = vec3_dot(plane, jv) - planeW;

      if (id > -PLANE_EPSILON) {
        f.push(iv);
      }
      if (id < PLANE_EPSILON) {
        b.push(id > -PLANE_EPSILON ? { ...iv } : iv);
      }
      if ((id < -PLANE_EPSILON && jd > PLANE_EPSILON) || (id > PLANE_EPSILON && jd < -PLANE_EPSILON)) {
        // SPANNING
        v = vertex_lerp(iv, jv, -id / (plane.x * (jv.x - iv.x) + plane.y * (jv.y - iv.y) + plane.z * (jv.z - iv.z)));
        f.push(v);
        b.push({ ...v });
      }
      iv = jv;
      id = jd;
    }
    $front = f.length > 2 && { ...polygon, $points: f };
    $back = b.length > 2 && { ...polygon, $points: b };
  } else if (vec3_dot(plane, vec3_triangleNormal($points as [Vertex, Vertex, Vertex])) > planeW) {
    // COPLANAR front
    $front = polygon;
  } else {
    // COPLANAR back
    $back = polygon;
  }

  return { $front, $back, $type };
};
