import { tan } from "./math";

export const mat4_new_zero = () => new Float32Array(16);

/** Sets 0,5,10,15 values to 1 to form an identity matrix */
export const mat4_setIdentityValues = (out: Mat4) => {
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
};

/**
 * Sets 0,5,10,11,14 values to form a perspective projection matrix with the given bounds and a finite far plane.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param out where the output will be written
 * @param fovyRadians Vertical field of view in radians
 * @param aspectRatio Aspect ratio. typically viewport width/height
 * @param near Near bound of the frustum
 * @param far Far bound of the frustum
 */
export const mat4_setPerspectiveValues = <T extends Mat4Out>(
  out: T,
  fovyRadians: number,
  aspectRatio: number,
  near: number,
  far: number,
): T => {
  const nf = near - far;
  const f = 1 / tan(fovyRadians / 2);
  out[0] = f / aspectRatio;
  out[5] = f;
  out[10] = (far + near) / nf;
  out[11] = -1;
  out[14] = (2 * far * near) / nf;
  return out;
};

export type Mat4 = Float32Array;

export type Mat4Out = Float32Array | Float64Array | number[];

export interface Mat4In extends ArrayLike<number>, Iterable<number> {}
