export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 extends Vec2 {
  x: number;
  y: number;
  z: number;
}

export interface Vec3Optional {
  x?: number | undefined;
  y?: number | undefined;
  z?: number | undefined;
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

export const vec3_dot = /* @__PURE__ */ ({ x, y, z }: Vec3In, v: Vec3In): number => x * v.x + y * v.y + z * v.z;

export const vec3_plane_distance = /* @__PURE__ */ (p: Readonly<Plane>, v: Vec3In): number => vec3_dot(p, v) - p.w;

export const vec3_distance = /* @__PURE__ */ ({ x, y, z }: Vec3In, b: Vec3In): number => {
  x -= b.x;
  y -= b.y;
  z -= b.z;
  return Math.sqrt(x * x + y + y + z * z);
};

/**
 * Computes a polygon plane using the Newell's method.
 * We are not using plane from 3 points algorithm,
 * because this can handle coplanar points and has precision problems.
 */
export const plane_fromPolygon = /* @__PURE__ */ (polygon: readonly Vec3In[]): Plane => {
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
  b = Math.hypot(x, y, z);
  x /= b;
  y /= b;
  z /= b;
  return { x, y, z, w: x * a.x + y * a.y + z * a.z };
};

export const vec3 = /* @__PURE__ */ (x: number, y: number, z: number): Vec3 => ({ x, y, z });

export const vec4 = /* @__PURE__ */ (x: number, y: number, z: number, w: number): Vec4 => ({ x, y, z, w });

export const vec3_clone = /* @__PURE__ */ ({ x, y, z }: Vec3In) => ({ x, y, z });

export const vec3_negate = /* @__PURE__ */ ({ x, y, z }: Vec3In): Vec3 => ({ x: -x, y: -y, z: -z });

export const vec3_add = /* @__PURE__ */ ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x + bx,
  y: y + by,
  z: z + bz,
});

export const vec3_sub = /* @__PURE__ */ ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x - bx,
  y: y - by,
  z: z - bz,
});

export const vec4_sub = /* @__PURE__ */ ({ x, y, z, w }: Vec4In, { x: bx, y: by, z: bz, w: bw }: Vec4In): Vec4 => ({
  x: x - bx,
  y: y - by,
  z: z - bz,
  w: w - bw,
});

export const vec3_cross = /* @__PURE__ */ ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: y * bz - z * by,
  y: z * bx - x * bz,
  z: x * by - y * bx,
});

export const vec3_scale = /* @__PURE__ */ ({ x, y, z }: Vec3In, m: number): Vec3 => ({ x: x * m, y: y * m, z: z * m });
