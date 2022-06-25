import type { Vec3In } from "./vectors";
import { vec3_dot } from "./vectors";

export interface Plane {
  x: number;
  y: number;
  z: number;
  w: number;
}

/** Signed distance of a point to a plane */
export const plane_distance = (p: Plane, v: Vec3In) => vec3_dot(p, v) - p.w;
