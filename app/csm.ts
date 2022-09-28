import { integers_map, max, min, scaling, rotation, matrixSetIdentity, tempMatrix, type Vec3 } from "./math";

const LIGHT_ROT_X = 298;
const LIGHT_ROT_Y = 139;

if (DEBUG) {
  const lightMatrix = /* @__PURE__ */ rotation(LIGHT_ROT_X, LIGHT_ROT_Y);
  console.log("light direction: ", lightMatrix.m13, lightMatrix.m23, lightMatrix.m33);
}

const _frustumPoint: Vec3 = {} as Vec3;
const _frustumCorners: Vec3[] = integers_map(8, () => ({} as Vec3));

export const csm_buildMatrix = /* @__PURE__ */ (
  camera_view: DOMMatrixReadOnly,
  projection: DOMMatrixReadOnly,
  roundingRadius: number,
  zMultiplier: number,
) => {
  matrixSetIdentity(tempMatrix).scale3dSelf(roundingRadius).multiplySelf(projection.multiply(camera_view).invertSelf());

  let tx = 0;
  let ty = 0;
  let tz = 0;

  for (let i = 0; i < 8; ++i) {
    _frustumPoint.x = 4 & i ? 1 : -1;
    _frustumPoint.y = 2 & i ? 1 : -1;
    _frustumPoint.z = 1 & i ? 1 : -1;
    const v = tempMatrix.transformPoint(_frustumPoint);
    const w = roundingRadius * v.w;
    // Round to reduce shimmering
    tx -= _frustumCorners[i]!.x = (v.x | 0) / w;
    ty -= _frustumCorners[i]!.y = (v.y | 0) / w;
    tz -= _frustumCorners[i]!.z = (v.z | 0) / w;
  }

  matrixSetIdentity(tempMatrix)
    .rotateSelf(LIGHT_ROT_X, LIGHT_ROT_Y)
    .translateSelf(tx / 8, ty / 8, tz / 8);

  let left = Infinity;
  let right = -Infinity;
  let bottom = Infinity;
  let top = -Infinity;
  let near = Infinity;
  let far = -Infinity;

  // Compute the frustum bouding box
  for (let i = 0; i < 8; ++i) {
    const { x, y, z } = tempMatrix.transformPoint(_frustumCorners[i]);
    left = min(left, x);
    right = max(right, x);
    bottom = min(bottom, y);
    top = max(top, y);
    near = min(near, z);
    far = max(far, z);
  }

  near *= near < 0 ? zMultiplier : 1 / zMultiplier;
  far *= far > 0 ? zMultiplier : 1 / zMultiplier;

  // Build the ortographic matrix, multiply it with the light space view matrix.
  return scaling(2 / (right - left), 2 / (top - bottom), 2 / (near - far))
    .translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2)
    .multiplySelf(tempMatrix);
};
