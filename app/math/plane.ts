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
  { x: ax, y: ay, z: az }: Vec3In,
  { x: bx, y: by, z: bz }: Vec3In,
  { x: cx, y: cy, z: cz }: Vec3In,
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

export const plane_distance = ({ x, y, z, w }: Plane, { x: vx, y: vy, z: vz }: Vec3In) => vx * x + vy * y + vz * z - w;
