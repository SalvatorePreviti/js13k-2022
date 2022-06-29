import { vec3_dot, type Plane } from "../math/vectors";
import type { Polygon } from "./geometry";
import { vertex_lerp, type Vertex } from "./vertex";

export const PLANE_EPSILON = 1e-5;

export const LERP_EPSILON = PLANE_EPSILON;

export interface CSGPolygon extends Polygon {
  $flipped: boolean;
}

interface SplitPolygonResult {
  f?: CSGPolygon | undefined | false;
  b?: CSGPolygon | undefined | false;
}

export const CSGPolygon_split = (plane: Plane, polygon: CSGPolygon): SplitPolygonResult => {
  const { $points } = polygon;
  let f: CSGPolygon | undefined | false;
  let b: CSGPolygon | undefined | false;

  const w = plane.w;
  for (let i = 0, len = $points.length; i < len && (!f || !b); ) {
    const t = vec3_dot(plane, $points[i++]!) - w;
    if (t < -PLANE_EPSILON) {
      b = polygon;
    } else if (t > PLANE_EPSILON) {
      f = polygon;
    }
  }
  if (b && f) {
    // SPANNING
    const fpoints: Vertex[] = [];
    const bpoints: Vertex[] = [];
    let iv: Vertex = $points[$points.length - 1]!;
    let id: number = vec3_dot(plane, iv) - w;
    let v: Vertex;
    for (const jv of $points) {
      const jd = vec3_dot(plane, jv) - w;
      if (id > -PLANE_EPSILON) {
        fpoints.push(iv);
      }
      if (id < PLANE_EPSILON) {
        bpoints.push(iv);
      }
      if ((id < -PLANE_EPSILON && jd > PLANE_EPSILON) || (id > PLANE_EPSILON && jd < -PLANE_EPSILON)) {
        v = vertex_lerp(iv, jv, -id / (plane.x * (jv.x - iv.x) + plane.y * (jv.y - iv.y) + plane.z * (jv.z - iv.z)));
        fpoints.push(v);
        bpoints.push(v);
      }
      iv = jv;
      id = jd;
    }
    f = fpoints.length > 2 && { ...polygon, $points: fpoints };
    b = bpoints.length > 2 && { ...polygon, $points: bpoints };
  }
  return { f, b };
};
