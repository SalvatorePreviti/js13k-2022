import { hypot } from "./math";

export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Vec4 {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface Vec3Optional {
  x?: number | undefined;
  y?: number | undefined;
  z?: number | undefined;
}

export interface Plane {
  x: number;
  y: number;
  z: number;
  w: number;
}

export type Vec2In = Readonly<Vec2>;

export type Vec3In = Readonly<Vec3>;

export type Vec4In = Readonly<Vec4>;

/**
 * Computes a polygon plane using the Newell's method.
 * We are not using plane from 3 points algorithm,
 * because this can handle coplanar points and has precision problems.
 */
export const plane_fromPolygon = (polygon: readonly Vec3In[]): Plane => {
  // Newell's method
  let x = 0;
  let y = 0;
  let z = 0;
  let a = polygon.at(-1)!;
  let b: Vec3In | number;
  for (b of polygon) {
    x += (a.y - b.y) * (a.z + b.z);
    y += (a.z - b.z) * (a.x + b.x);
    z += (a.x - b.x) * (a.y + b.y);
    a = b;
  }
  b = hypot(x, y, z);
  x /= b;
  y /= b;
  z /= b;
  return { x, y, z, w: x * a.x + y * a.y + z * a.z };
};

export const vec3_dot = ({ x, y, z }: Vec3In, b: Vec3In): number => x * b.x + y * b.y + z * b.z;
