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

export type Vec2In = Readonly<Vec2>;

export type Vec3In = Readonly<Vec3>;

export type Vec4In = Readonly<Vec4>;

export const vec3_clone = ({ x, y, z }: Vec3In) => ({ x, y, z });

export const vec3_dot = ({ x, y, z }: Vec3In, b: Vec3In) => x * b.x + y * b.y + z * b.z;
