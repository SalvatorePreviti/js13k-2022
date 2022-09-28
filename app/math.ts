import {
  constDef_zNear,
  constDef_CSM_PLANE_DISTANCE as CSM_PLANE_DISTANCE,
  constDef_zFar,
} from "./shaders/main-fragment.frag";

if (DEBUG) {
  window.NO_INLINE = (fn) => fn;
}

export const integers_map = <T>(n: number, fn: (i: number) => T) => Array.from(Array(n), (_, i) => fn(i));

/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = Math.PI / 180;

export const min = /* @__PURE__ */ NO_INLINE((a: number, b: number) => (a < b ? a : b));

export const max = /* @__PURE__ */ NO_INLINE((a: number, b: number) => (a > b ? a : b));

export const abs = /* @__PURE__ */ NO_INLINE((a: number) => (a < 0 ? -a : a));

export const clamp = /* @__PURE__ */ (value: number, minValue: number = 0, maxValue: number = 1) =>
  value < minValue ? minValue : value > maxValue ? maxValue : value;

export const threshold = (value: number | undefined, amount: number) => (abs(value!) > amount ? value! : 0);

/** Linear interpolation */
export const lerp =
  /* @__PURE__ */
  (a: number, b: number, t: number) => (t <= 0 ? a : t >= 1 ? b : a + (b - a) * t) || 0;

export const lerpneg = /* @__PURE__ */ (v: number, t: number) => {
  v = clamp(v);
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

export const angle_lerp_degrees = /* @__PURE__ */ (a0: number, a1: number, t: number) => {
  const da = (a1 - a0) % 360;
  return a0 + (((2 * da) % 360) - da) * clamp(t) || 0;
};

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

export const float32Array16Temp = new Float32Array(16);

export const identity: DOMMatrixReadOnly = new DOMMatrix();

export const tempMatrix = new DOMMatrix();

export const zNear = constDef_zNear;

export { CSM_PLANE_DISTANCE };

export const zFar = constDef_zFar;

export const fieldOfViewDegrees = 60;

export const fieldOfViewRadians = /* @__PURE__ */ fieldOfViewDegrees * DEG_TO_RAD; // in radians

export const fieldOfViewAmount = /* @__PURE__ */ 1 / Math.tan(fieldOfViewRadians / 2);

export const mat_perspective = /* @__PURE__ */ (near: number, far: number, mx: number, my: number) =>
  new DOMMatrix([
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
  ]);

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

export const matrixCopy = (source: DOMMatrixReadOnly = identity, target: DOMMatrix = tempMatrix) => {
  target.m11 = source.m11;
  target.m12 = source.m12;
  target.m13 = source.m13;
  target.m14 = source.m14;
  target.m21 = source.m21;
  target.m22 = source.m22;
  target.m23 = source.m23;
  target.m24 = source.m24;
  target.m31 = source.m31;
  target.m32 = source.m32;
  target.m33 = source.m33;
  target.m34 = source.m34;
  target.m41 = source.m41;
  target.m42 = source.m42;
  target.m43 = source.m43;
  target.m44 = source.m44;
  return target;
};

export const translation = NO_INLINE((x: number, y?: number, z?: number) => identity.translate(x, y, z));

export const rotation = NO_INLINE((x: number, y?: number, z?: number) => identity.rotate(x, y, z));

export const scaling = NO_INLINE((x: number, y?: number, z?: number) => identity.scale(x, y, z));
