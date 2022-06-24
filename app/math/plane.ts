import type { Vec3In } from "./vectors";

export interface Plane {
  x: number;
  y: number;
  z: number;
  w: number;
}

/** Computes the normal vector of a triangle */
export const plane_fromTriangle = <TOut extends Partial<Plane>>(
  out: TOut,
  [{ x: ax, y: ay, z: az }, { x: bx, y: by, z: bz }, { x: cx, y: cy, z: cz }]: readonly [Vec3In, Vec3In, Vec3In],
): TOut & Plane => {
  // b - a
  const bax = bx - ax;
  const bay = by - ay;
  const baz = bz - az;

  // c - a
  const cax = cx - ax;
  const cay = cy - ay;
  const caz = cz - az;

  // Cross product
  const nx = bay * caz - baz * cay;
  const ny = baz * cax - bax * caz;
  const nz = bax * cay - bay * cax;

  // Normalize and calculate w as the dot product of a vertex and the normal
  const nlength = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  out.w = (out.x = nx / nlength) * ax + (out.y = ny / nlength) * ay + (out.z = nz / nlength) * az;
  return out as TOut & Plane;
};
