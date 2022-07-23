import { camera_debug_view } from "../camera";
import { fieldOfView, zNear, zFar } from "../camera-projection";
import { gl } from "../gl";
import { max, min } from "../math/math";
import {
  vec3_normalize,
  DOMMatrix_ortho,
  DOMMatrix_perspective,
  type Vec3,
  DOMMatrix_fromDirection,
} from "../math/vectors";

export const lightDir: Vec3 = vec3_normalize({ x: 40.0, y: 50, z: -20.0 });

export const TOTAL_SPLITS = 4;

export const CSM_TEXTURE_SIZE = 2048;

const CSM_PLANE_DISTANCE0 = 25;
const CSM_PLANE_DISTANCE1 = 100;
const CSM_PLANE_DISTANCE2 = 200;

const getLightSpaceMatrix = (nearPlane: number, farPlane: number): Float32Array => {
  const radius = (farPlane - nearPlane) / 2;

  const projViewInverse = DOMMatrix_perspective(
    fieldOfView,
    gl.canvas.clientWidth / gl.canvas.clientHeight,
    nearPlane,
    farPlane,
  )
    .multiplySelf(camera_debug_view)
    .invertSelf();

  let cx = 0;
  let cy = 0;
  let cz = 0;
  const frustumCorners: Vec3[] = [];
  for (let i = 0; i < 8; ++i) {
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
    frustumCorners[i] = { x, y, z };
  }

  const lightView = DOMMatrix_fromDirection(lightDir).translateSelf(cx / 8, cy / 8, cz / 8);

  // Compute the frustum bouding box
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const v of frustumCorners) {
    const trf = lightView.transformPoint(v);
    minX = min(minX, trf.x);
    maxX = max(maxX, trf.x);
    minY = min(minY, trf.y);
    maxY = max(maxY, trf.y);
    minZ = min(minZ, trf.z);
    maxZ = max(maxZ, trf.z);
  }

  // Tune this parameter if needed
  const CSM_Z_MULTIPLIER = 5;

  const shadowMatrix = DOMMatrix_ortho(
    minX,
    maxX,
    minY,
    maxY,
    minZ * (minZ < 0 ? CSM_Z_MULTIPLIER : 1 / CSM_Z_MULTIPLIER),
    maxZ * (maxZ < 0 ? 1 / CSM_Z_MULTIPLIER : CSM_Z_MULTIPLIER),
  ).multiplySelf(lightView);

  return shadowMatrix.toFloat32Array();
};

export const getLightSpaceMatrices = (): Float32Array[] => [
  getLightSpaceMatrix(zNear, CSM_PLANE_DISTANCE0),
  getLightSpaceMatrix(CSM_PLANE_DISTANCE0, CSM_PLANE_DISTANCE1),
  getLightSpaceMatrix(CSM_PLANE_DISTANCE1, CSM_PLANE_DISTANCE2),
  getLightSpaceMatrix(CSM_PLANE_DISTANCE2, zFar),
];
