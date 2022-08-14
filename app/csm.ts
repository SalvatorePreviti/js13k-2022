import { mat_perspective, camera_view } from "./camera";
import { integers_map } from "./math/math";
import { identity } from "./math/matrix";

/**
 * The main directional light rotation matrix.
 * Normalized light direction is { x: m13, y: m23, z: m33 }
 */
export const lightMatrix = /* @__PURE__ */ identity.rotate(292, 216);

export const csm_buildMatrix = /* @__PURE__ */ (
  nearPlane: number,
  farPlane: number,
  zmultiplier: number,
): Float32Array => {
  let x = 0;
  let y = 0;
  let z = 0;
  let left = Infinity;
  let right = -Infinity;
  let bottom = Infinity;
  let top = -Infinity;
  let near = Infinity;
  let far = -Infinity;

  const roundingRadius = (farPlane - nearPlane) / 2;

  const projViewInverse = new DOMMatrix(mat_perspective(nearPlane, farPlane)).multiplySelf(camera_view).invertSelf();

  const frustumCorners = integers_map(8, (i) => {
    const v = projViewInverse.transformPoint({
      x: i & 4 ? 1 : -1,
      y: i & 2 ? 1 : -1,
      z: i & 1 ? 1 : -1,
    });

    // To reduce shimmering, we round the corners of the frustum.
    const r = v.w * roundingRadius;
    x -= v.x = ((v.x * roundingRadius) | 0) / r;
    y -= v.y = ((v.y * roundingRadius) | 0) / r;
    z -= v.z = ((v.z * roundingRadius) | 0) / r;
    v.w = 1;
    return v;
  });

  const lightViewTranslated = lightMatrix.translate(x / 8, y / 8, z / 8);

  // Compute the frustum bouding box
  for (let i = 0; i < 8; ++i) {
    ({ x, y, z } = lightViewTranslated.transformPoint(frustumCorners[i]));
    left = Math.min(left, x);
    right = Math.max(right, x);
    bottom = Math.min(bottom, y);
    top = Math.max(top, y);
    near = Math.min(near, z);
    far = Math.max(far, z);
  }

  near *= near < 0 ? zmultiplier : 1 / zmultiplier;
  far *= far > 0 ? zmultiplier : 1 / zmultiplier;

  // Build the ortographic matrix, multiply it with the light space view matrix.
  return identity
    .scale(2 / (right - left), 2 / (top - bottom), 2 / (near - far))
    .translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2)
    .multiplySelf(lightViewTranslated)
    .toFloat32Array();
};
