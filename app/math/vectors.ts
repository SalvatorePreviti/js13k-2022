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
