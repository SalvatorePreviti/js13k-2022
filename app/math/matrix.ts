import type { Vec4 } from "./vectors";

export const identity: DOMMatrixReadOnly = new DOMMatrix();

export const tempMatrix = new DOMMatrix();

const float32Array16Temp = new Float32Array(16);

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
  // if (source.isIdentity) {
  //   return target.setMatrixValue("none");
  // }
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

export const matrixTransformPoint: Vec4 & ((x?: number, y?: number, z?: number, w?: number) => void) = ((
  x: number = 0,
  y: number = 0,
  z: number = 0,
  w: number = 1,
) => {
  matrixTransformPoint.x = tempMatrix.m11 * x + tempMatrix.m21 * y + tempMatrix.m31 * z + tempMatrix.m41 * w;
  matrixTransformPoint.y = tempMatrix.m12 * x + tempMatrix.m22 * y + tempMatrix.m32 * z + tempMatrix.m42 * w;
  matrixTransformPoint.z = tempMatrix.m13 * x + tempMatrix.m23 * y + tempMatrix.m33 * z + tempMatrix.m43 * w;
  matrixTransformPoint.w = tempMatrix.m14 * x + tempMatrix.m24 * y + tempMatrix.m34 * z + tempMatrix.m44 * w;
}) as any;
