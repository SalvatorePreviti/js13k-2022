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

/** Clones a vector */
export const vec3_clone = ({ x, y, z }: Vec3In): Vec3 => ({ x, y, z });

/** Computes the dot product of two vectors */
export const vec3_dot = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): number => x * bx + y * by + z * bz;

/** Computes the squared magnitude of a vector */
export const vec3_lengthSquared = ({ x, y, z }: Vec3In): number => x * x + y * y + z * z;

/** Computes the magnitude of a vector */
export const vec3_length = ({ x, y, z }: Vec3In): number => Math.sqrt(x * x + y * y + z * z);

export const vec3_negate = ({ x, y, z }: Vec3In): Vec3 => ({ x: -x, y: -y, z: -z });

export const vec3_add = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x + bx,
  y: y + by,
  z: z + bz,
});

export const vec3_lerp = ({ x, y, z }: Vec3In, b: Vec3In, t: number): Vec3 => ({
  x: t * (b.x - x) + x,
  y: t * (b.y - y) + y,
  z: t * (b.z - z) + z,
});

export const vec3_addScaled = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In, m: number): Vec3 => ({
  x: x + bx * m,
  y: y + by * m,
  z: z + bz * m,
});

export const vec3_sub = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x - bx,
  y: y - by,
  z: z - bz,
});

export const vec3_mul = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x * bx,
  y: y * by,
  z: z * bz,
});

export const vec3_div = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x / bx,
  y: y / by,
  z: z / bz,
});

export const vec3_scaled = ({ x, y, z }: Vec3In, m: number): Vec3 => ({ x: x * m, y: y * m, z: z * m });

export const vec3_normalized = (v: Vec3In): Vec3 => vec3_scaled(v, vec3_length(v) || 1);

export const vec3_cross = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: y * bz - z * by,
  y: z * bx - x * bz,
  z: x * by - y * bx,
});
