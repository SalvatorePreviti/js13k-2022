export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 extends Vec2 {
  x: number;
  y: number;
  z: number;
}

export interface Vec4 extends Vec3 {
  x: number;
  y: number;
  z: number;
  w: number;
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

export const vec3_clone = ({ x, y, z }: Vec3In) => ({ x, y, z });

export const vec3_dot = ({ x, y, z }: Vec3In, b: Vec3In) => x * b.x + y * b.y + z * b.z;

export const vec3_triangleNormal = ([{ x, y, z }, { x: bx, y: by, z: bz }, { x: cx, y: cy, z: cz }]: [
  Vec3,
  Vec3,
  Vec3,
]) => {
  // b - a
  const bax = bx - x;
  const bay = by - y;
  const baz = bz - z;

  // c - a
  const cax = cx - x;
  const cay = cy - y;
  const caz = cz - z;

  // Cross product
  const nx = bay * caz - baz * cay;
  const ny = baz * cax - bax * caz;
  const nz = bax * cay - bay * cax;

  const nlength = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  return { x: nx / nlength, y: ny / nlength, z: nz / nlength };
};
