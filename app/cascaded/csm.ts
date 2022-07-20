import { camera_debug_view } from "../camera";
import { fieldOfView, zNear, zFar } from "../camera-projection";
import { gl } from "../gl";
import { max, min } from "../math/math";
import {
  vec3,
  vec4,
  vec3_normalize,
  mat4_lookAt,
  mat4_ortho,
  mat4_perspective,
  vec3_add,
  vec3_scale,
  type Vec3,
  type Vec4,
  vec4_scale,
  vec4_round,
  vec4_sub,
} from "../math/vectors";

export const ShadowMapSize = 2048;

export const lightDir: Vec3 = vec3_normalize(vec3(40.0, 50, -20.0));

console.log("lightDir", lightDir);

export const TOTAL_SPLITS = 4;

const shadowCascadeLevels: number[] = [30, 100, 300];

const getFrustumCornersWorldSpace = (projview: DOMMatrix): Vec4[] => {
  const inv = projview.inverse();
  const frustumCorners: Vec4[] = [];
  for (let x = 0; x < 2; ++x) {
    for (let y = 0; y < 2; ++y) {
      for (let z = 0; z < 2; ++z) {
        const pt = inv.transformPoint(vec3(2 * x - 1, 2 * y - 1, 2 * z - 1));
        frustumCorners.push(vec4(pt.x / pt.w, pt.y / pt.w, pt.z / pt.w, 1));
      }
    }
  }
  return frustumCorners;
};

const getLightSpaceMatrix = (nearPlane: number, farPlane: number): DOMMatrix => {
  const proj = mat4_perspective(fieldOfView, gl.canvas.clientWidth / gl.canvas.clientHeight, nearPlane, farPlane);
  const corners = getFrustumCornersWorldSpace(proj.multiply(camera_debug_view));
  let center = vec3(0, 0, 0);
  for (const v of corners) {
    center = vec3_add(center, v);
  }
  center = vec3_scale(center, 1 / corners.length);

  const lightView = mat4_lookAt(vec3_add(center, lightDir), center, vec3(0, 1, 0));

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const v of corners) {
    const trf = lightView.transformPoint(v);
    minX = min(minX, trf.x);
    maxX = max(maxX, trf.x);
    minY = min(minY, trf.y);
    maxY = max(maxY, trf.y);
    minZ = min(minZ, trf.z);
    maxZ = max(maxZ, trf.z);
  }

  // Tune this parameter according to the scene
  const zMult = 10.0;

  if (minZ < 0) {
    minZ *= zMult;
  } else {
    minZ /= zMult;
  }
  if (maxZ < 0) {
    maxZ /= zMult;
  } else {
    maxZ *= zMult;
  }

  const lightProjection = mat4_ortho(minX, maxX, minY, maxY, minZ, maxZ);

  // Round to texel

  /* const unitsPerTexelX = (maxX - minX) / 1024;
  const unitsPerTexelY = (maxY - minY) / 1024;

  minX = Math.round(minX / unitsPerTexelX) * unitsPerTexelX;
  maxX = Math.round(maxX / unitsPerTexelX) * unitsPerTexelX;

  minY = Math.round(minY / unitsPerTexelY) * unitsPerTexelY;
  maxY = Math.round(maxY / unitsPerTexelY) * unitsPerTexelY; */

  return lightProjection.multiplySelf(lightView);
};

export const getLightSpaceMatrices = (): DOMMatrix[] => {
  const ret: DOMMatrix[] = [];
  ret.push(getLightSpaceMatrix(zNear, shadowCascadeLevels[0]!));
  ret.push(getLightSpaceMatrix(shadowCascadeLevels[0]!, shadowCascadeLevels[1]!));
  ret.push(getLightSpaceMatrix(shadowCascadeLevels[1]!, shadowCascadeLevels[2]!));
  ret.push(getLightSpaceMatrix(shadowCascadeLevels[2]!, zFar));
  return ret;
};
