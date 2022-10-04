import { tempMatrix } from "./matrix";
import type { Vec4 } from "./vectors";

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
