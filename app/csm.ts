import { camera_view } from "./camera";
import { fieldOfView } from "./camera-projection";
import { canvas } from "./canvas";
import { integers_map } from "./math/math";
import { DOMMatrix_fromDirection, DOMMatrix_ortho, DOMMatrix_perspective } from "./math/matrix";
import { vec3_normalize, type Vec3 } from "./math/vectors";

export const lightDir: Vec3 = vec3_normalize({ x: 40.0, y: 50, z: -20.0 });

export const csm_buildMatrix = (nearPlane: number, farPlane: number): Float32Array => {
  const radius = (farPlane - nearPlane) / 2;

  const projViewInverse = DOMMatrix_perspective(
    fieldOfView,
    canvas.clientWidth / canvas.clientHeight,
    nearPlane,
    farPlane,
  )
    .multiplySelf(camera_view)
    .invertSelf();

  let cx = 0;
  let cy = 0;
  let cz = 0;

  const frustumCorners = integers_map(8, (i) => {
    let { x, y, z, w } = projViewInverse.transformPoint({
      x: i & 4 ? 1 : -1,
      y: i & 2 ? 1 : -1,
      z: i & 1 ? 1 : -1,
    });

    // To reduce shimmering, we round the corners of the frustum.
    w *= radius;
    cx -= x = ((x * radius) | 0) / w;
    cy -= y = ((y * radius) | 0) / w;
    cz -= z = ((z * radius) | 0) / w;
    return { x, y, z };
  });

  const lightView = DOMMatrix_fromDirection(lightDir).translateSelf(cx / 8, cy / 8, cz / 8);

  // Compute the frustum bouding box
  let left = Infinity;
  let right = -Infinity;
  let bottom = Infinity;
  let top = -Infinity;
  let near = Infinity;
  let far = -Infinity;
  for (const v of frustumCorners) {
    const { x, y, z } = lightView.transformPoint(v);
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

  return DOMMatrix_ortho(
    left,
    right,
    bottom,
    top,
    near * (near < 0 ? CSM_Z_MULTIPLIER : CSM_Z_MULTIPLIER_INV),
    far * (far < 0 ? CSM_Z_MULTIPLIER_INV : CSM_Z_MULTIPLIER),
  )
    .multiplySelf(lightView)
    .toFloat32Array();
};
