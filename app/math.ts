export const integers_map = <T>(n: number, fn: (i: number) => T) => Array.from(Array(n), (_, i) => fn(i));

/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = Math.PI / 180;

export const min = /* @__PURE__ */ (a: number, b: number) => (a < b ? a : b);

export const max = /* @__PURE__ */ (a: number, b: number) => (a > b ? a : b);

export const abs = /* @__PURE__ */ (n: number) => (n < 0 ? -n : n);

export const threshold = (value: number | undefined, amount: number) => (abs(value!) > amount ? value! : 0);

export const clamp01 = /* @__PURE__ */ (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

/** Linear interpolation */
export const lerp = /* @__PURE__ */ (a: number, b: number, t: number) => a + (b - a) * clamp01(t);

export const lerpneg = /* @__PURE__ */ (v: number, t: number) => {
  v = clamp01(v);
  return lerp(v, 1 - v, t);
};

/**
 * Trigonometry - Wrap an angle so it is always between -PI and PI
 * @param radians The angle in radians to wrap between -PI and PI
 * @returns The angle in radians wrapped so it is always between -PI and PI
 */
export const angle_wrap_radians = /* @__PURE__ */ (radians: number): number =>
  Math.atan2(Math.sin(radians), Math.cos(radians));

export const angle_wrap_degrees = /* @__PURE__ */ (degrees: number): number =>
  angle_wrap_radians(degrees * DEG_TO_RAD) / DEG_TO_RAD;

export const angle_lerp = /* @__PURE__ */ (a0: number, a1: number, t: number) => {
  const da = (a1 - a0) % (Math.PI * 2);
  return a0 + (((2 * da) % (Math.PI * 2)) - da) * clamp01(t);
};

export const angle_lerp_degrees = /* @__PURE__ */ (a0: number, a1: number, t: number) =>
  angle_lerp(a0 * DEG_TO_RAD, a1 * DEG_TO_RAD, t) / DEG_TO_RAD;

export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Vec4 {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface Vec3Optional {
  x?: number | undefined;
  y?: number | undefined;
  z?: number | undefined;
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

export const vec3_distance = /* @__PURE__ */ ({ x, y, z }: Vec3In, b: Vec3In): number =>
  Math.hypot(x - b.x, y - b.y, z - b.z);

export const vec3_dot = /* @__PURE__ */ ({ x, y, z }: Vec3In, b: Vec3In): number => x * b.x + y * b.y + z * b.z;

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

/** The identity matrix */
export const identity: DOMMatrixReadOnly = /* @__PURE__ */ new DOMMatrix();

export const float32Array16Temp = new Float32Array(16);

export const matrixToArray = (
  $matrix: DOMMatrixReadOnly,
  output: Float32Array | number[] = float32Array16Temp,
  index: number = 0,
) => {
  index *= 16;
  output[index++] = $matrix.m11;
  output[index++] = $matrix.m12;
  output[index++] = $matrix.m13;
  output[index++] = $matrix.m14;
  output[index++] = $matrix.m21;
  output[index++] = $matrix.m22;
  output[index++] = $matrix.m23;
  output[index++] = $matrix.m24;
  output[index++] = $matrix.m31;
  output[index++] = $matrix.m32;
  output[index++] = $matrix.m33;
  output[index++] = $matrix.m34;
  output[index++] = $matrix.m41;
  output[index++] = $matrix.m42;
  output[index++] = $matrix.m43;
  output[index] = $matrix.m44;
  return output;
};

export const mat_perspectiveXY = /* @__PURE__ */ (mx: number, my: number, near: number, far: number) => [
  mx,
  0,
  0,
  0,
  0,
  my,
  0,
  0,
  0,
  0,
  (far + near) / (near - far),
  -1,
  0,
  0,
  (2 * far * near) / (near - far),
  0,
];
