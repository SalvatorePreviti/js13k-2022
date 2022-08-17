import { mat_perspective, camera_view } from "./camera";
import { polygon_transform } from "./geometry/geometry";
import { integers_map } from "./math/math";
import { identity } from "./math/matrix";

/**
 * The main directional light rotation matrix.
 * Normalized light direction is { x: m13, y: m23, z: m33 }
 */
export const lightMatrix = /* @__PURE__ */ identity.rotate(292, -216);

export const csm_buildMatrix = /* @__PURE__ */ (
  nearPlane: number,
  farPlane: number,
  zMultiplier: number,
): Float32Array => {
  const roundingRadius = (farPlane - nearPlane) >> 1;

  const projViewInverse = new DOMMatrix(mat_perspective(nearPlane, farPlane)).multiplySelf(camera_view).invertSelf();

  let tx = 0;
  let ty = 0;
  let tz = 0;

  const frustumCorners = integers_map(8, (i) => {
    const v = projViewInverse.transformPoint({
      x: 4 & i ? 1 : -1,
      y: 2 & i ? 1 : -1,
      z: 1 & i ? 1 : -1,
    });
    // Round to reduce shimmering
    tx -= v.x = ((roundingRadius * v.x) | 0) / (roundingRadius * v.w);
    ty -= v.y = ((roundingRadius * v.y) | 0) / (roundingRadius * v.w);
    tz -= v.z = ((roundingRadius * v.z) | 0) / (roundingRadius * v.w);
    return v;
  });

  const lightViewTranslated = lightMatrix.translate(tx / 8, ty / 8, tz / 8);

  let left = Infinity;
  let right = -Infinity;
  let bottom = Infinity;
  let top = -Infinity;
  let near = Infinity;
  let far = -Infinity;

  // Compute the frustum bouding box
  polygon_transform(frustumCorners, lightViewTranslated).map(({ x, y, z }) => {
    left = Math.min(left, x);
    right = Math.max(right, x);
    bottom = Math.min(bottom, y);
    top = Math.max(top, y);
    near = Math.min(near, z);
    far = Math.max(far, z);
  });

  near *= near < 0 ? zMultiplier : 1 / zMultiplier;
  far *= far > 0 ? zMultiplier : 1 / zMultiplier;

  // Build the ortographic matrix, multiply it with the light space view matrix.
  return identity
    .scale(2 / (right - left), 2 / (top - bottom), 2 / (near - far))
    .translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2)
    .multiplySelf(lightViewTranslated)
    .toFloat32Array();
};
