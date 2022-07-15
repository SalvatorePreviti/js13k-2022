export const TOTAL_SPLITS = 4;

import { camera_view } from "../camera";
import { zNear, zFar, camera_projection } from "../camera-projection";
import { gl } from "../gl";
import { lightMatrixLoc, lightShaderProgram } from "../light";
import type { Vec3, Vec4 } from "../math/vectors";
import { vec3, vec3_negate } from "../math/vectors";
import { vec4_round, vec4_scale, vec4_sub } from "../math/vectors";
import { mat4_ortho } from "../math/vectors";
import { vec3_sub } from "../math/vectors";
import { mat4_lookAt, vec3_normalize } from "../math/vectors";
import { vec3_distance } from "../math/vectors";
import { vec3_add, vec3_scale } from "../math/vectors";

export const light_dir: Vec3 = vec3_normalize({ x: -0.1, y: -0.5, z: 0.0 });

export class CSM {
  ShadowMapSize: number;

  mCascadedShadowFBO: WebGLFramebuffer | null = null;

  mCascadedTextureArray: WebGLTexture[] = [];
  shadowSplits: number[] = [];
  cascadedMatrices: DOMMatrix[] = [];

  lambda = 0.5;
  minDist = 0.0;
  maxDist = 1.0;

  init(size: number): void {
    this.ShadowMapSize = size;

    this.mCascadedShadowFBO = gl.createFramebuffer()!;

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.mCascadedShadowFBO)!;

    for (let splitNumber = 0; splitNumber < TOTAL_SPLITS; ++splitNumber) {
      this.mCascadedTextureArray[splitNumber] = gl.createTexture()!;

      // Create depth textures
      gl.bindTexture(gl.TEXTURE_2D, this.mCascadedTextureArray[splitNumber]!);

      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.DEPTH_COMPONENT32F,
        this.ShadowMapSize,
        this.ShadowMapSize,
        0,
        gl.DEPTH_COMPONENT,
        gl.FLOAT,
        null,
      );

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL);

      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.TEXTURE_2D,
        this.mCascadedTextureArray[splitNumber]!,
        0,
      );
    }

    // Not color buffer
    // gl.drawBuffer(gl.NONE);
    // gl.readBuffer(gl.NONE);

    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
  }

  renderCSM(render: () => void): void {
    // Start off by calculating the split distances
    const cascadeSplits: number[] = [];

    this.computeCascadeSplits(cascadeSplits);

    // Move the frustum coordinates to world space
    const invViewProj = DOMMatrix.fromFloat32Array(camera_projection).multiply(camera_view).inverse();

    for (let splitNumber = 0; splitNumber < TOTAL_SPLITS; splitNumber++) {
      let prevSplitDistance: number;
      if (splitNumber === 0) {
        prevSplitDistance = this.minDist;
      } else {
        prevSplitDistance = cascadeSplits[splitNumber - 1]!;
      }

      const actualsplitDistance = cascadeSplits[splitNumber]!;

      const frustumPoints = [
        vec3(-1, 1, -1),
        vec3(1, 1, -1),
        vec3(1, -1, -1),
        vec3(-1, -1, -1),
        vec3(-1, 1, 1),
        vec3(1, 1, 1),
        vec3(1, -1, 1),
        vec3(-1, -1, 1),
      ];

      for (let i = 0; i < 8; i++) {
        // Move to world
        const p = frustumPoints[i]!;
        const inversePoint = invViewProj.transformPoint(p);
        frustumPoints[i] = vec3_scale(inversePoint, 1 / inversePoint.w);
      }

      // Compute the real corners of the AABB
      for (let i = 0; i < 4; i++) {
        const frustumVec = vec3_sub(frustumPoints[i + 4]!, frustumPoints[i]!);
        // move vectors to real coordinates
        const farVec = vec3_scale(frustumVec, actualsplitDistance);
        const nearVec = vec3_scale(frustumVec, prevSplitDistance);
        // Compute real points
        frustumPoints[i + 4] = vec3_add(frustumPoints[i]!, farVec);
        frustumPoints[i] = vec3_add(frustumPoints[i]!, nearVec);
      }

      // Obtain the Center of the frustum
      const frusCenter = this.getFrustumCenter(frustumPoints);

      // Obtain the farthest radius
      const radius = this.getRadiusFrustum(frustumPoints, frusCenter);

      // AABB
      const maxPoint = vec3(radius, radius, radius);
      const minPoint = vec3_negate(maxPoint);

      // Position the viewmatrix looking down the center of the frustum with an arbitrary lighht direction

      const lightViewMatrix = this.getViewMatrix(frusCenter, minPoint.z);

      // Create the orthographic matrix
      const lightOrthoMatrix = this.getOrthoMatrix(minPoint, maxPoint);

      /* if (g_render.round_matrix)
		{
			//The rounding matrix that ensures that shadow edges do not shimmer
			lightOrthoMatrix = getRoundMatrix(lightOrthoMatrix, lightViewMatrix);
		} */

      // Store the matrix
      this.cascadedMatrices[splitNumber] = lightOrthoMatrix.multiply(lightViewMatrix);

      // Store the split distances
      const clipDist = zFar - zNear;
      this.shadowSplits[splitNumber] = (zNear + actualsplitDistance * clipDist) * -1;

      gl.useProgram(lightShaderProgram);

      gl.bindFramebuffer(gl.FRAMEBUFFER, this.mCascadedShadowFBO);
      gl.viewport(0, 0, this.ShadowMapSize, this.ShadowMapSize);

      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.DEPTH_ATTACHMENT,
        gl.TEXTURE_2D,
        this.mCascadedTextureArray[splitNumber]!,
        0,
      );

      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      // gl.enable(gl.DEPTH_CLAMP);
      gl.cullFace(gl.FRONT);

      gl.uniformMatrix4fv(lightMatrixLoc, false, this.cascadedMatrices[splitNumber]!.toFloat32Array());

      // render objects to store shadows
      render();

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      // gl.disable(gl.DEPTH_CLAMP);
    }
  }

  getDepthID() {
    return this.mCascadedTextureArray;
  }

  computeCascadeSplits(planeSplits: number[]): void {
    const distance: number = zFar - zNear;

    const startPos: number = zNear + this.minDist * distance;
    const endPos: number = zNear + this.maxDist * distance;

    const range: number = endPos - startPos;
    const ratio: number = endPos / startPos;

    for (let i = 0; i < TOTAL_SPLITS; i++) {
      const p = (i + 1) / TOTAL_SPLITS;
      const log = startPos * ratio ** p;
      const uniform = startPos + range * p;
      const d = this.lambda * (log - uniform) + uniform;
      planeSplits[i] = (d - zNear) / distance;
    }
  }

  getFrustumCenter(frustumCornersWS: Vec3[]): Vec3 {
    // Obtain the Center of the frustum
    let center: Vec3 = { x: 0, y: 0, z: 0 };
    for (let i = 0; i < 8; i++) {
      center = vec3_add(center, frustumCornersWS[i]!);
    }
    center = vec3_scale(center, 1 / 8);
    return center;
  }

  getRadiusFrustum(frustumCornersWS: Vec3[], center: Vec3): number {
    let radius = 0;
    for (let i = 0; i < 8; ++i) {
      const distance = vec3_distance(frustumCornersWS[i]!, center);
      radius = Math.max(radius, distance);
    }
    radius = Math.ceil(radius * 16.0) / 16.0;
    return radius;
  }

  getViewMatrix(center: Vec3, zPos: number): DOMMatrix {
    const eye = vec3_sub(center, vec3_scale(light_dir, -zPos));
    const mat = mat4_lookAt(eye, center, { x: 0, y: 1, z: 0 });
    return mat;
  }

  getOrthoMatrix(minPoint: Vec3, maxPoint: Vec3): DOMMatrix {
    // Create the orthographic matrix
    const matOrtho = mat4_ortho(minPoint.x, maxPoint.x, minPoint.y, maxPoint.y, 0, maxPoint.z - minPoint.z);
    return matOrtho;
  }

  getRoundMatrix(Ortho: DOMMatrix, View: DOMMatrix): DOMMatrix {
    const shadowMat = Ortho.multiply(View);
    let shadowStartPos: Vec4 = { x: 0, y: 0, z: 0, w: 1 };
    shadowStartPos = shadowMat.transformPoint(shadowStartPos);
    const halfShadowmapSize = this.ShadowMapSize / 2;
    shadowStartPos = vec4_scale(shadowStartPos, halfShadowmapSize);
    const roundStart = vec4_round(shadowStartPos);
    let offset = vec4_sub(roundStart, shadowStartPos);
    offset = { x: offset.x / halfShadowmapSize, y: offset.y / halfShadowmapSize, z: 0, w: 0 };

    Ortho.m31 += offset.x / halfShadowmapSize;
    Ortho.m32 += offset.y / halfShadowmapSize;

    return Ortho;
  }
}
