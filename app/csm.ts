import { mat_perspective, camera_view } from "./camera";
import { polygon_transform } from "./geometry/geometry";
import { integers_map, max, min } from "./math/math";
import { identity } from "./math/matrix";

export const lightRotX = 298;

export const lightRotY = 139;

/**
 * The main directional light rotation matrix.
 * Normalized light direction is { x: m13, y: m23, z: m33 }
 */
export let lightMatrix = /* @__PURE__ */ identity.rotate(lightRotX, lightRotY);

export function setLightRot(x: number, y: number) {
  lightMatrix = identity.rotate(x, y);
}

export const csm_buildMatrix = /* @__PURE__ */ (
  nearPlane: number,
  farPlane: number,
  zMultiplier: number,
): Float32Array => {
  const roundingRadius = (farPlane - nearPlane) * 1.1;

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
    left = min(left, x);
    right = max(right, x);
    bottom = min(bottom, y);
    top = max(top, y);
    near = min(near, z);
    far = max(far, z);
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
