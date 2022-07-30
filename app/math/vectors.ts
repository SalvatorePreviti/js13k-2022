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

export const vec3 = (x: number, y: number, z: number): Vec3 => ({ x, y, z });

export const vec4 = (x: number, y: number, z: number, w: number): Vec4 => ({ x, y, z, w });

export const vec3_clone = ({ x, y, z }: Vec3In) => ({ x, y, z });

export const vec3_negate = ({ x, y, z }: Vec3In): Vec3 => ({ x: -x, y: -y, z: -z });

export const vec3_add = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x + bx,
  y: y + by,
  z: z + bz,
});

export const vec3_sub = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x - bx,
  y: y - by,
  z: z - bz,
});

export const vec4_sub = ({ x, y, z, w }: Vec4In, { x: bx, y: by, z: bz, w: bw }: Vec4In): Vec4 => ({
  x: x - bx,
  y: y - by,
  z: z - bz,
  w: w - bw,
});

export const vec3_cross = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: y * bz - z * by,
  y: z * bx - x * bz,
  z: x * by - y * bx,
});

export const vec3_scale = ({ x, y, z }: Vec3In, m: number): Vec3 => ({ x: x * m, y: y * m, z: z * m });

export const vec3_dot = ({ x, y, z }: Vec3In, b: Vec3In): number => x * b.x + y * b.y + z * b.z;

export const vec3_plane_distance = (plane: Readonly<Plane>, v: Vec3In): number => vec3_dot(plane, v) - plane.w;

export const vec3_length = ({ x, y, z }: Vec3In): number => Math.hypot(x, y, z);

export const vec3_distance = (a: Vec3In, b: Vec3In): number => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return Math.hypot(dx, dy, dz);
};

export const vec3_normalize = ({ x, y, z }: Vec3In): Vec3 => {
  const len = Math.hypot(x, y, z);
  return { x: x / len, y: y / len, z: z / len };
};

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
  let b: Vec3In;
  let a = polygon[polygon.length - 1]!;
  for (let i = 0; i < polygon.length; ++i) {
    b = polygon[i]!;
    x += (a.y - b.y) * (a.z + b.z);
    y += (a.z - b.z) * (a.x + b.x);
    z += (a.x - b.x) * (a.y + b.y);
    a = b;
  }
  const i = Math.hypot(x, y, z);
  return { x: (x /= i), y: (y /= i), z: (z /= i), w: x * a.x + y * a.y + z * a.z };
};

// export const vec3_polygonNormal = ([{ x, y, z }, { x: bx, y: by, z: bz }, { x: cx, y: cy, z: cz }]: readonly [
//   Vec3In,
//   Vec3In,
//   Vec3In,
// ]): Plane => {
//   // b - a
//   const bax = bx - x;
//   const bay = by - y;
//   const baz = bz - z;

//   // c - a
//   const cax = cx - x;
//   const cay = cy - y;
//   const caz = cz - z;

//   // Cross product
//   const nx = bay * caz - baz * cay;
//   const ny = baz * cax - bax * caz;
//   const nz = bax * cay - bay * cax;

//   const nlength = Math.hypot(nx, ny, nz) || 1;
//   return { x: nx /= nlength, y: ny /= nlength, z: nz /= nlength, w: (nx * x + ny * y + nz * z) };
// };
