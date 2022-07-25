import { camera_view } from "./camera";
import { fieldOfView } from "./camera-projection";
import { integers_map } from "./math/math";
import { DOMMatrix_perspective } from "./math/matrix";
import { vec3_normalize, type Vec3 } from "./math/vectors";

// TODO: this should be a constant, precalculated, and not a vector.
export const lightDir: Vec3 = vec3_normalize({ x: 40.0, y: 50, z: -20.0 });

export const csm_buildMatrix = (nearPlane: number, farPlane: number): Float32Array => {
  let x = 0;
  let y = 0;
  let z = 0;
  let left = Infinity;
  let right = -Infinity;
  let bottom = Infinity;
  let top = -Infinity;
  let near = Infinity;
  let far = -Infinity;

  const roundingRadius = (farPlane - nearPlane) / 1.35;

  const projViewInverse = DOMMatrix_perspective(fieldOfView, hC.clientWidth / hC.clientHeight, nearPlane, farPlane)
    .multiplySelf(camera_view)
    .invertSelf();

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

  // Similar to lookat, up is [0,1,0] and as input we have a center and a direction. Direction must be normalised.
  // TODO: If light direction is fixed, the direction matrix can be precalculated.
  const lightView = new DOMMatrix([
    lightDir.z,
    -lightDir.y * lightDir.x,
    lightDir.x,
    0,
    0,
    lightDir.z * lightDir.z + lightDir.x * lightDir.x,
    lightDir.y,
    0,
    -lightDir.x,
    -lightDir.y * lightDir.z,
    lightDir.z,
    0,
    0,
    0,
    0,
    1,
  ]).translateSelf(x / 8, y / 8, z / 8);

  // Compute the frustum bouding box
  for (const v of frustumCorners) {
    ({ x, y, z } = lightView.transformPoint(v));
    left = Math.min(left, x);
    right = Math.max(right, x);
    bottom = Math.min(bottom, y);
    top = Math.max(top, y);
    near = Math.min(near, z);
    far = Math.max(far, z);
  }

  // Tuneable fix
  const CSM_Z_MULTIPLIER = 5;

  const CSM_Z_MULTIPLIER_INV = 1 / CSM_Z_MULTIPLIER;

  near *= near < 0 ? CSM_Z_MULTIPLIER : CSM_Z_MULTIPLIER_INV;
  far *= far < 0 ? CSM_Z_MULTIPLIER_INV : CSM_Z_MULTIPLIER;

  // Build the ortographic matrix, multiply it with the light space view matrix.
  return new DOMMatrix([
    -2 / (left - right),
    0,
    0,
    0,
    0,
    -2 / (bottom - top),
    0,
    0,
    0,
    0,
    2 / (near - far),
    0,
    (left + right) / (left - right),
    (top + bottom) / (bottom - top),
    (far + near) / (near - far),
    1,
  ])
    .multiplySelf(lightView)
    .toFloat32Array();
};
