import {
  acos_safe,
  angle2D,
  angle3D,
  angle4D,
  cos,
  DEG_PER_RAD,
  div_safe,
  dot2D,
  dot3D,
  dot4D,
  eq_almost,
  eq_almost_zero,
  eq_zero,
  isFinite,
  lengthSquared2D,
  lengthSquared3D,
  lengthSquared4D,
  lerp,
  perpDotProduct2D,
  sin,
  sqrt,
} from "./math";

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

/** Returns a new vector */
export const vec2_new = (x: number, y: number) => ({ x, y });

/** Returns a new vector */
export const vec3_new = (x: number, y: number, z: number) => ({ x, y, z });

/** Returns a new vector */
export const vec4_new = (x: number, y: number, z: number, w: number) => ({ x, y, z, w });

/** Returns a new vector */
export const vec2_new_scalar = (v: number) => vec2_new(v, v);

/** Returns a new vector */
export const vec3_new_scalar = (v: number) => vec3_new(v, v, v);

/** Returns a new vector */
export const vec4_new_scalar = (v: number) => vec4_new(v, v, v, v);

/** A vector whose components are all 0 */
export const VEC4_ZERO: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 0, 0);

/** A vector whose components are all 1 */
export const VEC4_ONE: Vec4In = /* @__PURE__ */ vec4_new(1, 1, 1, 1);

/** 1,0,0,0 */
export const VEC4_UNIT_X: Vec4In = /* @__PURE__ */ vec4_new(1, 0, 0, 0);

/** 0,1,0,0 */
export const VEC4_UNIT_Y: Vec4In = /* @__PURE__ */ vec4_new(0, 1, 0, 0);

/** 0,0,1,0 */
export const VEC4_UNIT_Z: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 1, 0);

/** 0,0,0,1 */
export const VEC4_UNIT_W: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 0, 1);

export const VEC_TEMP$0: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 0, 0);

export const VEC_TEMP$1: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 0, 0);

export const VEC_TEMP$2: Vec4In = /* @__PURE__ */ vec4_new(0, 0, 0, 0);

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

/** Sets all component of the given vector to the same value */
export const vec2_set_scalar = <TOut extends Partial<Vec2>>(out: TOut, v: number) => vec2_set<TOut>(out, v, v);

/** Sets all component of the given vector to the same value */
export const vec3_set_scalar = <TOut extends Partial<Vec3>>(out: TOut, v: number) => vec3_set<TOut>(out, v, v, v);

/** Sets all component of the given vector to the same value */
export const vec4_set_scalar = <TOut extends Partial<Vec4>>(out: TOut, v: number) => vec4_set<TOut>(out, v, v, v, v);

/** a+b */
export const vec2_add = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2In, b = out as Vec2In) =>
  vec2_set(out, a.x + b.x, a.y + b.y);

/** a+b */
export const vec3_add = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3In, b = out as Vec3In) =>
  vec3_set(out, a.x + b.x, a.y + b.y, a.z + b.z);

/** a+b */
export const vec4_add = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4, b: Vec4 = out as Vec4In) =>
  vec4_set(out, a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w);

/** a+b */
export const vec2_scalar_add = <TOut extends Partial<Vec2>>(out: TOut, a: number, b: Vec2In = out as Vec2In) =>
  vec2_set(out, a + b.x, a + b.y);

/** a+b */
export const vec3_scalar_add = <TOut extends Partial<Vec3>>(out: TOut, a: number, b: Vec3In = out as Vec3In) =>
  vec3_set(out, a + b.x, a + b.y, a + b.z);

/** a+b */
export const vec4_scalar_add = <TOut extends Partial<Vec4>>(out: TOut, a: number, b: Vec4In = out as Vec4In) =>
  vec4_set(out, a + b.x, a + b.y, a + b.z, a + b.w);

/** a-b */
export const vec2_sub = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2In, b: Vec2In) =>
  vec2_set(out, a.x - b.x, a.y - b.y);

/** a-b */
export const vec3_sub = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.x - b.x, a.y - b.y, a.z - b.z);

/** a-b */
export const vec4_sub = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4In, b: Vec4In) =>
  vec4_set(out, a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);

/** a-b */
export const vec2_sub_scalar = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2In, b: number) =>
  vec2_set(out, a.x - b, a.y - b);

/** a-b */
export const vec3_sub_scalar = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3In, b: number) =>
  vec3_set(out, a.x - b, a.y - b, a.z - b);

/** a-b */
export const vec4_sub_scalar = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4In, b: number) =>
  vec4_set(out, a.x - b, a.y - b, a.z - b, a.w - b);

/** a-b */
export const vec2_scalar_sub = <TOut extends Partial<Vec2>>(out: TOut, a: number, b: Vec2In) =>
  vec2_set(out, a - b.x, a - b.y);

/** a-b */
export const vec3_scalar_sub = <TOut extends Partial<Vec3>>(out: TOut, a: number, b: Vec3In) =>
  vec3_set(out, a - b.x, a - b.y, a - b.z);

/** a-b */
export const vec4_scalar_sub = <TOut extends Partial<Vec4>>(out: TOut, a: number, b: Vec4In) =>
  vec4_set(out, a - b.x, a - b.y, a - b.z, a - b.w);

/** a*b */
export const vec2_mul = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2In, b: Vec2In = out as Vec2In) =>
  vec2_set(out, a.x * b.x, a.y * b.y);

/** a*b */
export const vec3_mul = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3In, b: Vec3In = out as Vec3In) =>
  vec3_set(out, a.x * b.x, a.y * b.y, a.z * b.z);

/** a+b*scale */
export const vec2_add_mul = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2In, b: Vec2In, scale: number) =>
  vec2_set(out, a.x + b.x * scale, a.y + b.y * scale);

/** a+b*scale */
export const vec3_add_mul = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3In, b: Vec3In, scale: number) =>
  vec3_set(out, a.x + b.x * scale, a.y + b.y * scale, a.z + b.z * scale);

/** a+b*scale */
export const vec4_add_mul = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4In, b: Vec4In, scale: number) =>
  vec4_set(out, a.x + b.x * scale, a.y + b.y * scale, a.z + b.z * scale, a.w + b.w * scale);

/** a*b */
export const vec4_mul = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4In, b: Vec4In = out as Vec4In) =>
  vec4_set(out, a.x * b.x, a.y * b.y, a.z * b.z, a.w * b.w);

/** a*b */
export const vec2_scale = <TOut extends Partial<Vec2>>(out: TOut, a: number, b: Vec2In = out as Vec2In) =>
  vec2_set(out, a * b.x, a * b.y);

/** a*b */
export const vec3_scale = <TOut extends Partial<Vec3>>(out: TOut, a: number, b: Vec3In = out as Vec3In) =>
  vec3_set(out, a * b.x, a * b.y, a * b.z);

/** a*b */
export const vec4_scale = <TOut extends Partial<Vec4>>(out: TOut, a: number, b: Vec4In = out as Vec4In) =>
  vec4_set(out, a * b.x, a * b.y, a * b.z, a * b.w);

/** a/b */
export const vec2_div = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2In, b: Vec2In) =>
  vec2_set(out, a.x / b.x, a.y / b.y);

/** a/b */
export const vec3_div = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3In, b: Vec3In) =>
  vec3_set(out, a.x / b.x, a.y / b.y, a.z / b.z);

/** a/b */
export const vec4_div = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4In, b: Vec4In) =>
  vec4_set(out, a.x / b.x, a.y / b.y, a.z / b.z, a.w / b.w);

/** a/b */
export const vec2_div_scalar = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2, b: number) =>
  vec2_set(out, a.x / b, a.y / b);

/** a/b */
export const vec3_div_scalar = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3, b: number) =>
  vec3_set(out, a.x / b, a.y / b, a.z / b);

/** a/b */
export const vec4_div_scalar = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4, b: number) =>
  vec4_set(out, a.x / b, a.y / b, a.z / b, a.w / b);

/** a/b */
export const vec2_scalar_div = <TOut extends Partial<Vec2>>(out: TOut, a: number, b: Vec2) =>
  vec2_set(out, a / b.x, a / b.y);

/** a/b */
export const vec3_scalar_div = <TOut extends Partial<Vec3>>(out: TOut, a: number, b: Vec3) =>
  vec3_set(out, a / b.x, a / b.y, a / b.z);

/** a/b */
export const vec4_scalar_div = <TOut extends Partial<Vec4>>(out: TOut, a: number, b: Vec4) =>
  vec4_set(out, a / b.x, a / b.y, a / b.z, a / b.w);

/** a%b */
export const vec2_mod = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2, b: Vec2) =>
  vec2_set(out, a.x % b.x, a.y % b.y);

/** a%b */
export const vec3_mod = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3, b: Vec3) =>
  vec3_set(out, a.x % b.x, a.y % b.y, a.z % b.z);

/** a%b */
export const vec4_mod = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4, b: Vec4) =>
  vec4_set(out, a.x % b.x, a.y % b.y, a.z % b.z, a.w % b.w);

/** a%b */
export const vec2_mod_scalar = <TOut extends Partial<Vec2>>(out: TOut, a: Vec2, b: number) =>
  vec2_set(out, a.x % b, a.y % b);

/** a%b */
export const vec3_mod_scalar = <TOut extends Partial<Vec3>>(out: TOut, a: Vec3, b: number) =>
  vec3_set(out, a.x % b, a.y % b, a.z % b);

/** a%b */
export const vec4_mod_scalar = <TOut extends Partial<Vec4>>(out: TOut, a: Vec4, b: number) =>
  vec4_set(out, a.x % b, a.y % b, a.z % b, a.w % b);

/** a%b */
export const vec2_scalar_mod = <TOut extends Partial<Vec2>>(out: TOut, a: number, b: Vec2) =>
  vec2_set(out, a % b.x, a % b.y);

/** a%b */
export const vec3_scalar_mod = <TOut extends Partial<Vec3>>(out: TOut, a: number, b: Vec3) =>
  vec3_set(out, a % b.x, a % b.y, a % b.z);

/** a%b */
export const vec4_scalar_mod = <TOut extends Partial<Vec4>>(out: TOut, a: number, b: Vec4) =>
  vec4_set(out, a % b.x, a % b.y, a % b.z, a % b.w);

export const vec2_each = (v: Vec2In, fn: (v: number) => boolean): boolean => fn(v.x) && fn(v.y);

export const vec3_each = (v: Vec3In, fn: (v: number) => boolean): boolean => fn(v.x) && fn(v.y) && fn(v.z);

export const vec4_each = (v: Vec4In, fn: (v: number) => boolean): boolean => fn(v.x) && fn(v.y) && fn(v.z) && fn(v.w);

export const vec2_each2 = (a: Vec2In, b: Vec2In, fn: (a: number, b: number) => boolean): boolean =>
  fn(a.x, b.x) && fn(a.y, b.y);

export const vec3_each2 = (a: Vec3In, b: Vec3In, fn: (a: number, b: number) => boolean): boolean =>
  fn(a.x, b.x) && fn(a.y, b.y) && fn(a.z, b.z);

export const vec4_each2 = (a: Vec4In, b: Vec4In, fn: (a: number, b: number) => boolean): boolean =>
  fn(a.x, b.x) && fn(a.y, b.y) && fn(a.z, b.z) && fn(a.w, b.w);

export const vec2_each3 = (
  a: Vec2In,
  b: Vec2In,
  c: Vec2In,
  fn: (a: number, b: number, c: number) => boolean,
): boolean => fn(a.x, b.x, c.x) && fn(a.y, b.y, c.y);

export const vec3_each3 = (
  a: Vec3In,
  b: Vec3In,
  c: Vec3In,
  fn: (a: number, b: number, c: number) => boolean,
): boolean => fn(a.x, b.x, c.x) && fn(a.y, b.y, c.y) && fn(a.z, b.z, c.z);

export const vec4_each3 = (
  a: Vec4In,
  b: Vec4In,
  c: Vec4In,
  fn: (a: number, b: number, c: number) => boolean,
): boolean => fn(a.x, b.x, c.x) && fn(a.y, b.y, c.y) && fn(a.z, b.z, c.z) && fn(a.w, b.w, c.w);

export const vec2_some = (v: Vec2In, fn: (v: number) => boolean): boolean => fn(v.x) || fn(v.y);

export const vec3_some = (v: Vec3In, fn: (v: number) => boolean): boolean => fn(v.x) || fn(v.y) || fn(v.z);

export const vec4_some = (v: Vec4In, fn: (v: number) => boolean): boolean => fn(v.x) || fn(v.y) || fn(v.z) || fn(v.w);

export const vec2_some2 = (a: Vec2In, b: Vec2In, fn: (a: number, b: number) => boolean): boolean =>
  fn(a.x, b.x) || fn(a.y, b.y);

export const vec3_some2 = (a: Vec3In, b: Vec3In, fn: (a: number, b: number) => boolean): boolean =>
  fn(a.x, b.x) || fn(a.y, b.y) || fn(a.z, b.z);

export const vec4_some2 = (a: Vec4In, b: Vec4In, fn: (a: number, b: number) => boolean): boolean =>
  fn(a.x, b.x) || fn(a.y, b.y) || fn(a.z, b.z) || fn(a.w, b.w);

export const vec2_some3 = (
  a: Vec2In,
  b: Vec2In,
  c: Vec2In,
  fn: (a: number, b: number, c: number) => boolean,
): boolean => fn(a.x, b.x, c.x) || fn(a.y, b.y, c.y);

export const vec3_some3 = (
  a: Vec3In,
  b: Vec3In,
  c: Vec3In,
  fn: (a: number, b: number, c: number) => boolean,
): boolean => fn(a.x, b.x, c.x) || fn(a.y, b.y, c.y) || fn(a.z, b.z, c.z);

export const vec4_some3 = (
  a: Vec4In,
  b: Vec4In,
  c: Vec4In,
  fn: (a: number, b: number, c: number) => boolean,
): boolean => fn(a.x, b.x, c.x) || fn(a.y, b.y, c.y) || fn(a.z, b.z, c.z) || fn(a.w, b.w, c.w);

export const vec2_set_each = <TOut extends Vec2>(out: TOut, fn: (v: number) => number, v: Vec2In = out as Vec2In) =>
  vec2_set(out, fn(v.x), fn(v.y));

export const vec3_set_each = <TOut extends Vec3>(out: TOut, fn: (v: number) => number, v: Vec3In = out as Vec3In) =>
  vec3_set(out, fn(v.x), fn(v.y), fn(v.z));

export const vec4_set_each = <TOut extends Vec4>(out: TOut, fn: (v: number) => number, v: Vec4In = out as Vec4In) =>
  vec4_set(out, fn(v.x), fn(v.y), fn(v.z), fn(v.w));

export const vec2_set_each2 = <TOut extends Vec2>(
  out: TOut,
  fn: (a: number, b: number) => number,
  a: Vec2In,
  b: Vec2In,
) => vec2_set(out, fn(a.x, b.x), fn(a.y, b.y));

export const vec3_set_each2 = <TOut extends Vec3>(
  out: TOut,
  fn: (a: number, b: number) => number,
  a: Vec3In,
  b: Vec3In,
) => vec3_set(out, fn(a.x, b.x), fn(a.y, b.y), fn(a.z, b.z));

export const vec4_set_each2 = <TOut extends Vec4>(
  out: TOut,
  fn: (a: number, b: number) => number,
  a: Vec4In,
  b: Vec4In,
) => vec4_set(out, fn(a.x, b.x), fn(a.y, b.y), fn(a.z, b.z), fn(a.w, b.w));

export const vec2_set_each3 = <TOut extends Vec2>(
  out: TOut,
  fn: (a: number, b: number, c: number) => number,
  a: Vec2In,
  b: Vec2In,
  c: Vec2In,
) => vec2_set(out, fn(a.x, b.x, c.x), fn(a.y, b.y, c.y));

export const vec3_set_each3 = <TOut extends Vec3>(
  out: TOut,
  fn: (a: number, b: number, c: number) => number,
  a: Vec3In,
  b: Vec3In,
  c: Vec3In,
) => vec3_set(out, fn(a.x, b.x, c.x), fn(a.y, b.y, c.y), fn(a.z, b.z, c.z));

export const vec4_set_each3 = <TOut extends Vec4>(
  out: TOut,
  fn: (a: number, b: number, c: number) => number,
  a: Vec4In,
  b: Vec4In,
  c: Vec4In,
) => vec4_set(out, fn(a.x, b.x, c.x), fn(a.y, b.y, c.y), fn(a.z, b.z, c.z), fn(a.w, b.w, c.w));

export const vec2_set_each4 = <TOut extends Vec2>(
  out: TOut,
  fn: (a: number, b: number, c: number, d: number) => number,
  a: Vec2In,
  b: Vec2In,
  c: Vec2In,
  d: Vec2In,
) => vec2_set(out, fn(a.x, b.x, c.x, d.x), fn(a.y, b.y, c.y, d.y));

export const vec3_set_each4 = <TOut extends Vec3>(
  out: TOut,
  fn: (a: number, b: number, c: number, d: number) => number,
  a: Vec3In,
  b: Vec3In,
  c: Vec3In,
  d: Vec3In,
) => vec3_set(out, fn(a.x, b.x, c.x, d.x), fn(a.y, b.y, c.y, d.y), fn(a.z, b.z, c.z, d.z));

export const vec4_set_each4 = <TOut extends Vec4>(
  out: TOut,
  fn: (a: number, b: number, c: number, d: number) => number,
  a: Vec4In,
  b: Vec4In,
  c: Vec4In,
  d: Vec4In,
) => vec4_set(out, fn(a.x, b.x, c.x, d.x), fn(a.y, b.y, c.y, d.y), fn(a.z, b.z, c.z, d.z), fn(a.w, b.w, c.w, d.w));

/** Returns true if all the components of the given vector are not NaN or Infinity */
export const vec2_isFinite = (v: Vec2In): boolean => vec2_each(v, isFinite);

/** Returns true if all the components of the given vector are not NaN or Infinity */
export const vec3_isFinite = (v: Vec3In): boolean => vec3_each(v, isFinite);

/** Returns true if all the components of the given vector are not NaN or Infinity */
export const vec4_isFinite = (v: Vec4In): boolean => vec4_each(v, isFinite);

export const vec2_eq_zero = (v: Vec2In): boolean => vec2_each(v, eq_zero);

export const vec3_eq_zero = (v: Vec3In): boolean => vec3_each(v, eq_zero);

export const vec4_eq_zero = (v: Vec4In): boolean => vec4_each(v, eq_zero);

export const vec2_neq_zero = (v: Vec2In): boolean => !vec2_eq_zero(v);

export const vec3_neq_zero = (v: Vec3In): boolean => !vec3_eq_zero(v);

export const vec4_neq_zero = (v: Vec4In): boolean => !vec4_eq_zero(v);

export const vec2_eq = (a: Vec2In, b: Vec2In): boolean => a.x === b.x && a.y === b.y;

export const vec3_eq = (a: Vec3In, b: Vec3In): boolean => a.x === b.x && a.y === b.y && a.z === b.z;

export const vec4_eq = (a: Vec4In, b: Vec4In): boolean => a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;

export const vec2_neq = (a: Vec2In, b: Vec2In): boolean => !vec2_eq(a, b);

export const vec3_neq = (a: Vec3In, b: Vec3In): boolean => !vec3_eq(a, b);

export const vec4_neq = (a: Vec4In, b: Vec4In): boolean => !vec4_eq(a, b);

export const vec2_eq_almost_zero = (v: Vec2In, epsilon?: number): boolean =>
  eq_almost_zero(v.x, epsilon) && eq_almost_zero(v.y, epsilon);

export const vec3_eq_almost_zero = (v: Vec3In, epsilon?: number): boolean =>
  eq_almost_zero(v.x, epsilon) && eq_almost_zero(v.y, epsilon) && eq_almost_zero(v.z, epsilon);

export const vec4_eq_almost_zero = (v: Vec4In, epsilon?: number): boolean =>
  eq_almost_zero(v.x, epsilon) &&
  eq_almost_zero(v.y, epsilon) &&
  eq_almost_zero(v.z, epsilon) &&
  eq_almost_zero(v.w, epsilon);

export const vec2_eq_almost = (a: Vec2In, b: Vec2In, epsilon?: number): boolean =>
  eq_almost(a.x, b.x, epsilon) && eq_almost(a.y, b.y, epsilon);

export const vec3_eq_almost = (a: Vec3In, b: Vec3In, epsilon?: number): boolean =>
  eq_almost(a.x, b.x, epsilon) && eq_almost(a.y, b.y, epsilon) && eq_almost(a.z, b.z, epsilon);

export const vec4_eq_almost = (a: Vec4In, b: Vec4In, epsilon?: number): boolean =>
  eq_almost(a.x, b.x, epsilon) &&
  eq_almost(a.y, b.y, epsilon) &&
  eq_almost(a.z, b.z, epsilon) &&
  eq_almost(a.w, b.w, epsilon);

export const vec2_degToRad = <TOut extends Partial<Vec2>>(out: TOut, v: Vec2In = out as Vec2In) =>
  vec2_scale(out, DEG_PER_RAD, v);

export const vec3_degToRad = <TOut extends Partial<Vec3>>(out: TOut, v: Vec3In = out as Vec3In) =>
  vec3_scale(out, DEG_PER_RAD, v);

export const vec4_degToRad = <TOut extends Partial<Vec4>>(out: TOut, v: Vec4In = out as Vec4In) =>
  vec4_scale(out, DEG_PER_RAD, v);

export const vec2_radToDeg = <TOut extends Partial<Vec2>>(out: TOut, v: Vec2In = out as Vec2In) =>
  vec2_scale(out, 1 / DEG_PER_RAD, v);

export const vec3_radToDeg = <TOut extends Partial<Vec3>>(out: TOut, v: Vec3In = out as Vec3In) =>
  vec3_scale(out, 1 / DEG_PER_RAD, v);

export const vec4_radToDeg = <TOut extends Partial<Vec4>>(out: TOut, v: Vec4In = out as Vec4In) =>
  vec4_scale(out, 1 / DEG_PER_RAD, v);

/** Computes the 2D cross product */
export const vec2_cross = (a: Vec2In, b: Vec2In): number => perpDotProduct2D(a.x, a.y, b.x, b.y);

/** Computes the cross product of two vectors in a 3D space */
export const vec3_cross = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In): R =>
  vec3_set(out, a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);

/** Computes the cross product of three vectors in a 4D space */
export const vec4_cross = <R extends Vec4Out = Vec4Out>(out: R, { x, y, z, w }: Vec4In, V: Vec4In, W: Vec4In): R => {
  const A = V.x * W.y - V.y * W.x;
  const B = V.x * W.z - V.z * W.x;
  const C = V.x * W.w - V.w * W.x;
  const D = V.y * W.z - V.z * W.y;
  const E = V.y * W.w - V.w * W.y;
  const F = V.z * W.w - V.w * W.z;
  return vec4_set(
    out,
    y * F - z * E + w * D,
    -(x * F) + z * C - w * B,
    x * E - y * C + w * A,
    -(x * D) + y * B - z * A,
  );
};

/** Computes the dot product between two vectors */
export const vec2_dot = (a: Vec2In, b: Vec2In): number => dot2D(a.x, a.y, b.x, b.y);

/** Computes the dot product between two vectors */
export const vec3_dot = (a: Vec3In, b: Vec3In): number => dot3D(a.x, a.y, a.z, b.x, b.y, b.z);

/** Computes the dot product between two vectors */
export const vec4_dot = (a: Vec4In, b: Vec4In): number => dot4D(a.x, a.y, a.z, a.w, b.x, b.y, b.z, b.w);

/** Gets the angle in radians between two vectors */
export const vec2_angle = (a: Vec2In, b: Vec2In): number => angle2D(a.x, a.y, b.x, b.y);

/** Gets the angle in radians between two vectors */
export const vec3_angle = (a: Vec3In, b: Vec3In): number => angle3D(a.x, a.y, a.z, b.x, b.y, b.z);

/** Gets the angle in radians between two vectors */
export const vec4_angle = (a: Vec4In, b: Vec4In): number => angle4D(a.x, a.y, a.z, a.w, b.x, b.y, b.z, b.w);

/** Gets the squared length of a vector */
export const vec2_lengthSquared = (a: Vec2In): number => lengthSquared2D(a.x, a.y);

/** Gets the squared length of a vector */
export const vec3_lengthSquared = (a: Vec3In): number => lengthSquared3D(a.x, a.y, a.z);

/** Gets the squared length of a vector */
export const vec4_lengthSquared = (a: Vec4In): number => lengthSquared4D(a.x, a.y, a.z, a.w);

/** Gets the length (magnitude) of a vector */
export const vec2_length = (a: Vec2In): number => sqrt(vec2_lengthSquared(a));

/** Gets the length (magnitude) of a vector */
export const vec3_length = (a: Vec3In): number => sqrt(vec3_lengthSquared(a));

/** Gets the length (magnitude) of a vector */
export const vec4_length = (a: Vec4In): number => sqrt(vec4_lengthSquared(a));

export const vec2_normalize = <R extends Vec2Out = Vec2Out>(out: R, v: Vec2In = out): R =>
  vec2_div_scalar(out, v, vec2_length(v) || 1);

export const vec3_normalize = <R extends Vec3Out = Vec3Out>(out: R, v: Vec3In = out): R =>
  vec3_div_scalar(out, v, vec3_length(v) || 1);

export const vec4_normalize = <R extends Vec4Out = Vec4Out>(out: R, v: Vec4In = out): R =>
  vec4_div_scalar(out, v, vec4_length(v) || 1);

/** Gets the squared euclidean istance between two vectors */
export const vec2_distanceSquared = (a: Vec2In, b: Vec2In): number => lengthSquared2D(a.x - b.x, a.y - b.y);

/** Gets the squared euclidean istance between two vectors */
export const vec3_distanceSquared = (a: Vec3In, b: Vec3In): number => lengthSquared3D(a.x - b.x, a.y - b.y, a.z - b.z);

/** Gets the squared euclidean istance between two vectors */
export const vec4_distanceSquared = (a: Vec4In, b: Vec4In): number =>
  lengthSquared4D(a.x - b.x, a.y - b.y, a.z - b.z, a.w - b.w);

/** Gets the euclidean istance between two vectors */
export const vec2_distance = (a: Vec2In, b: Vec2In): number => sqrt(vec2_distanceSquared(a, b));

/** Gets the euclidean istance between two vectors */
export const vec3_distance = (a: Vec3In, b: Vec3In): number => sqrt(vec3_distanceSquared(a, b));

/** Gets the euclidean istance between two vectors */
export const vec4_distance = (a: Vec4In, b: Vec4In): number => sqrt(vec4_distanceSquared(a, b));

/** X rotation of a vector */
export const vec3_rotateX = <R extends Vec3Out = Vec3Out>(
  out: R,
  angleInRadians: number,
  { x, y, z }: Vec3 = out,
  { y: originY, z: originZ }: Vec3 = VEC4_ZERO,
): R => {
  const c = cos(angleInRadians);
  const s = sin(angleInRadians);
  const py = y - originY;
  const pz = z - originZ;
  return vec3_set(out, x, py * c - pz * s, py * s + pz * x);
};

/** Y rotation of a vector */
export const vec3_rotateY = <R extends Vec3Out = Vec3Out>(
  out: R,
  angleInRadians: number,
  { x, y, z }: Vec3 = out,
  { x: originX, z: originZ }: Vec3 = VEC4_ZERO,
): R => {
  const c = cos(angleInRadians);
  const s = sin(angleInRadians);
  const p0 = x - originX;
  const p2 = z - originZ;
  return vec3_set(out, p2 * s + p0 * c + originX, y, p2 * c - p0 * s + originZ);
};

/** Z rotation of a vector */
export const vec3_rotateZ = <R extends Vec3Out = Vec3Out>(
  out: R,
  angleInRadians: number,
  { x, y, z }: Vec3 = out,
  { x: originX, y: originY }: Vec3 = VEC4_ZERO,
): R => {
  const s = sin(angleInRadians);
  const c = cos(angleInRadians);
  const p0 = x - originX;
  const p1 = y - originY;
  return vec3_set(out, p0 * c - p1 * s + originX, p0 * s + p1 * c + originY, z);
};

/** The midpoint of a vector */
export const vec2_midpoint = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In = out): R =>
  vec2_add_mul(out, a, b, 0.5);

/** The midpoint of a vector */
export const vec3_midpoint = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In = out): R =>
  vec3_add_mul(out, a, b, 0.5);

/** The midpoint of a vector */
export const vec4_midpoint = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In = out): R =>
  vec4_add_mul(out, a, b, 0.5);

/** Linear interpolation between two vectors */
export const vec2_lerp = <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In, t: number): R =>
  vec2_set(out, lerp(a.x, b.x, t), lerp(a.y, b.y, t));

/** Linear interpolation between two vectors */
export const vec3_lerp = <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In, t: number): R =>
  vec3_set(out, lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t));

/** Linear interpolation between two vectors */
export const vec4_lerp = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In, t: number): R =>
  vec4_set(out, lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.z, b.z, t), lerp(a.w, b.w, t));

/**
 * Performs a spherical linear interpolation between two vectors
 */
export const vec3_slerp = <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In, t: number): R => {
  const angle = acos_safe(vec3_dot(a, b));
  const s = sin(angle);
  const ra = sin((1 - t) * angle) / s;
  const rb = sin(t * angle) / s;
  return vec3_set(out, ra * a.x + rb * b.x, ra * a.y + rb * b.y, ra * a.z + rb * b.z);
};

/** Vector reflection */
export const vec2_reflect = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(
  out: R,
  direction: Vec2In,
  normal: Vec2In,
): R => vec2_add_mul(out, direction, normal, -vec2_dot(direction, normal) * 2);

/** Vector reflection */
export const vec3_reflect = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  direction: Vec3In,
  normal: Vec3In,
): R => vec3_add_mul(out, direction, normal, -vec3_dot(direction, normal) * 2);

/** Vector reflection */
export const vec4_reflect = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(
  out: R,
  direction: Vec4In,
  normal: Vec4In,
): R => vec4_add_mul(out, direction, normal, -vec4_dot(direction, normal) * 2);

/** Amount to scale a vector to project onto another */
export const vec2_projectionLength = /* @__PURE__ */ (a: Vec2In, b: Vec2In): number =>
  div_safe(vec2_dot(a, b), vec2_length(b), 0);

/** Amount to scale a vector to project onto another */
export const vec3_projectionLength = /* @__PURE__ */ (a: Vec3In, b: Vec3In): number =>
  div_safe(vec3_dot(a, b), vec2_length(b), 0);

/** Amount to scale a vector to project onto another */
export const vec4_projectionLength = /* @__PURE__ */ (a: Vec4In, b: Vec4In): number =>
  div_safe(vec4_dot(a, b), vec2_length(b), 0);

/** Vector project */
export const vec2_project = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In): R =>
  vec2_scale(out, vec2_projectionLength(a, b), a);

/** Vector project */
export const vec3_project = /* @__PURE__ */ <R extends Vec3Out = Vec4Out>(out: R, a: Vec3In, b: Vec3In): R =>
  vec3_scale(out, vec3_projectionLength(a, b), a);

/** Vector project */
export const vec4_project = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In): R =>
  vec4_scale(out, vec4_projectionLength(a, b), a);

/** Gets the direction vector from a to b */
export const vec2_direction = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, b: Vec2In): R =>
  vec2_normalize(vec2_sub(out, b, a));

/** Gets the direction vector from a to b */
export const vec3_direction = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, b: Vec3In): R =>
  vec3_normalize(vec3_sub(out, b, a));

/** Gets the direction vector from a to b */
export const vec4_direction = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, b: Vec4In): R =>
  vec4_normalize(vec4_sub(out, b, a));

/** Slides a vector */
export const vec2_slide = /* @__PURE__ */ <R extends Vec2Out = Vec2Out>(out: R, a: Vec2In, normal: Vec2In): R =>
  vec2_add_mul(out, a, normal, -vec2_dot(a, normal));

/** Slides a vector */
export const vec3_slide = /* @__PURE__ */ <R extends Vec3Out = Vec3Out>(out: R, a: Vec3In, normal: Vec3In): R =>
  vec3_add_mul(out, a, normal, -vec3_dot(a, normal));

/** Slides a vector */
export const vec4_slide = /* @__PURE__ */ <R extends Vec4Out = Vec4Out>(out: R, a: Vec4In, normal: Vec4In): R =>
  vec4_add_mul(out, a, normal, -vec4_dot(a, normal));
