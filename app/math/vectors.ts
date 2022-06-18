import { add, clamp, div, max, mid, min, mul, pow2, sqrt, sub } from "./math";

export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 extends Vec2 {
  z: number;
}

export interface Vec4 extends Vec3 {
  w: number;
}

export type Vec2In = Readonly<Vec2>;

export type Vec3In = Readonly<Vec3>;

export type Vec4In = Readonly<Vec4>;

export const vec2_new = (x = 0, y = 0): Vec2 => ({ x, y });

export const vec3_new = (x = 0, y = 0, z = 0): Vec3 => ({ x, y, z });

export const vec4_new = (x = 0, y = 0, z = 0, w = 0): Vec4 => ({ x, y, z, w });

export const vec2_new_fromScalar = (value: number): Vec2 => vec2_new(value, value);

export const vec3_new_fromScalar = (value: number): Vec3 => vec3_new(value, value, value);

export const vec4_new_fromScalar = (value: number): Vec4 => vec4_new(value, value, value, value);

export const vec3_distanceSquared = ({ x: ax, y: ay, z: az }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): number =>
  pow2(bx - ax) + pow2(by - ay) + pow2(bz - az);

export const vec3_distance = (a: Vec3In, b: Vec3In): number => sqrt(vec3_distanceSquared(a, b));

/** Sets all the component of the given vector */
export const vec2_set = <TOut extends Partial<Vec2>>(out: TOut, x: number, y: number): TOut & Vec2 => (
  (out.x = x), (out.y = y), out as TOut & Vec2
);

/** Sets all the component of the given vector */
export const vec3_set = <TOut extends Partial<Vec3>>(out: TOut, x: number, y: number, z: number): TOut & Vec3 => (
  (out.x = x), (out.y = y), (out.z = z), out as TOut & Vec3
);

/** Sets all the component of the given vector */
export const vec4_set = <TOut extends Partial<Vec4>>(
  out: TOut,
  x: number,
  y: number,
  z: number,
  w: number,
): TOut & Vec4 => ((out.x = x), (out.y = y), (out.z = z), (out.w = w), out as TOut & Vec4);

export const vec3_set_each2 = (
  out: Vec3,
  { x: ax, y: ay, z: az }: Vec3In,
  { x: bx, y: by, z: bz }: Vec3In,
  fn: (a: number, b: number) => number,
) => vec3_set(out, fn(ax, bx), fn(ay, by), fn(az, bz));

export const vec3_min = (out: Vec3, a: Vec3In, b: Vec3In) => vec3_set_each2(out, a, b, min);

export const vec3_max = (out: Vec3, a: Vec3In, b: Vec3In) => vec3_set_each2(out, a, b, max);

export const vec3_clamp = (
  out: Vec3,
  { x, y, z }: Vec3In,
  { x: minX, y: minY, z: minZ }: Vec3In,
  { x: maxX, y: maxY, z: maxZ }: Vec3In,
) => vec3_set(out, clamp(x, minX, maxX), clamp(y, minY, maxY), clamp(z, minZ, maxZ));

export const vec3_add = (out: Vec3, a: Vec3In, b: Vec3In) => vec3_set_each2(out, a, b, add);

export const vec3_sub = (out: Vec3, a: Vec3In, b: Vec3In) => vec3_set_each2(out, a, b, sub);

export const vec3_mul = (out: Vec3, a: Vec3In, b: Vec3In) => vec3_set_each2(out, a, b, mul);

export const vec3_div = (out: Vec3, a: Vec3In, b: Vec3In) => vec3_set_each2(out, a, b, div);

export const vec3_mid = (out: Vec3, a: Vec3In, b: Vec3In) => vec3_set_each2(out, a, b, mid);

export const vec3_add_scalar = (out: Vec3, { x, y, z }: Vec3In, b: number) => vec3_set(out, x + b, x + y, x + z);

export const vec3_sub_scalar = (out: Vec3, a: Vec3In, b: number) => vec3_add_scalar(out, a, -b);
