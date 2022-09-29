export const float32Array16Temp = new Float32Array(16);

export const identity: DOMMatrixReadOnly = new DOMMatrix();

export const tempMatrix = new DOMMatrix();

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
