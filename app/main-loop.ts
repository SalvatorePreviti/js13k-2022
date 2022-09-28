// shaders
import csm_vsSource from "./shaders/csm-vertex.vert";
import main_vsSource, {
  uniformName_projectionMatrix,
  uniformName_viewMatrix,
  uniformName_worldMatrices,
} from "./shaders/main-vertex.vert";
import main_fsSource, {
  uniformName_viewPos,
  uniformName_csm_matrix0,
  uniformName_csm_matrix1,
  uniformName_csm_texture0,
  uniformName_csm_texture1,
  uniformName_groundTexture,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE as CSM_PLANE_DISTANCE,
} from "./shaders/main-fragment.frag";
import collider_fsSource from "./shaders/collider-fragment.frag";
import void_fsSource from "./shaders/void-fragment.frag";
import sky_vsSource from "./shaders/sky-vertex.vert";
import sky_fsSource, { uniformName_iResolution } from "./shaders/sky-fragment.frag";

import type { Vec3 } from "./math";
import {
  max,
  min,
  integers_map,
  matrixToArray,
  zFar,
  zNear,
  mat_perspective,
  matrixCopy,
  identity,
  tempMatrix,
} from "./math";
import { MODEL_ID_SOUL, MODEL_ID_SOUL_COLLISION, player_position_final } from "./game/models";
import {
  absoluteTime,
  camera_rotation,
  gameTimeDelta,
  gameTimeUpdate,
  mainMenuVisible,
  worldStateUpdate,
} from "./game/world-state";
// import { csm_buildMatrix } from "./csm";
import { initPage, csm_projections, player_first_person, projection, resetInteractPressed, updateInput } from "./page";
import { gl } from "./gl";
import {
  player_update,
  COLLISION_TEXTURE_SIZE,
  player_init,
  camera_position_x,
  camera_position_y,
  camera_position_z,
} from "./player";
import { loadShader, initShaderProgram } from "./shaders-utils";
import { renderModels, updateWorldMatrices } from "./game/models-render";

const LIGHT_ROT_X = 298;
const LIGHT_ROT_Y = 139;

export const startMainLoop = (groundTextureImage: HTMLImageElement) => {
  const camera_view = new DOMMatrix();
  const mainVertexShader = loadShader(main_vsSource);
  const csmShader = initShaderProgram(loadShader(csm_vsSource), void_fsSource);
  const skyShader = initShaderProgram(loadShader(sky_vsSource), sky_fsSource);
  const collisionShader = initShaderProgram(mainVertexShader, collider_fsSource);
  const mainShader = initShaderProgram(mainVertexShader, main_fsSource);

  const csm_lightSpaceMatrices = integers_map(2, () => new Float32Array(16));

  const csm_tempMatrix = new DOMMatrix();
  const csm_tempFrustumPoint: Vec3 = {} as Vec3;
  const csm_tempFrustumCorners: Vec3[] = integers_map(8, () => ({} as Vec3));

  const csm_framebuffer = gl.createFramebuffer();

  const collision_texture = gl.createTexture()!;
  const collision_renderBuffer = gl.createRenderbuffer();
  const collision_frameBuffer = gl.createFramebuffer()!;

  const csm_textures = integers_map(2, (i: number) => {
    const texture = gl.createTexture()!;
    gl.activeTexture(gl.TEXTURE0 + i);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.DEPTH_COMPONENT24,
      CSM_TEXTURE_SIZE,
      CSM_TEXTURE_SIZE,
      0,
      gl.DEPTH_COMPONENT,
      gl.UNSIGNED_INT,
      null,
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LEQUAL); // Can be LESS or LEQUAL
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    return texture;
  });

  const csm_render = (split: 0 | 1, roundingRadius: number, zMultiplier: number) => {
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, csm_textures[split]!, 0);

    matrixCopy()
      .scale3dSelf(roundingRadius)
      .multiplySelf(matrixCopy(csm_projections[split], csm_tempMatrix).multiplySelf(camera_view).invertSelf());

    let tx = 0;
    let ty = 0;
    let tz = 0;

    for (let i = 0; i < 8; ++i) {
      csm_tempFrustumPoint.x = 4 & i ? 1 : -1;
      csm_tempFrustumPoint.y = 2 & i ? 1 : -1;
      csm_tempFrustumPoint.z = 1 & i ? 1 : -1;
      const v = tempMatrix.transformPoint(csm_tempFrustumPoint);
      const w = roundingRadius * v.w;
      // Round to reduce shimmering
      tx -= csm_tempFrustumCorners[i]!.x = (v.x | 0) / w;
      ty -= csm_tempFrustumCorners[i]!.y = (v.y | 0) / w;
      tz -= csm_tempFrustumCorners[i]!.z = (v.z | 0) / w;
    }

    matrixCopy()
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
      const { x, y, z } = tempMatrix.transformPoint(csm_tempFrustumCorners[i]);
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

    gl.uniformMatrix4fv(
      csmShader(uniformName_viewMatrix),
      false,
      matrixToArray(
        matrixCopy(identity, csm_tempMatrix)
          .scaleSelf(2 / (right - left), 2 / (top - bottom), 2 / (near - far))
          .translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2)
          .multiplySelf(tempMatrix),
        csm_lightSpaceMatrices[split],
      ),
    );

    gl.clear(gl.DEPTH_BUFFER_BIT);

    renderModels(csmShader(uniformName_worldMatrices), !player_first_person, MODEL_ID_SOUL);
  };

  const mainLoop = (globalTime: number) => {
    gl.flush();

    requestAnimationFrame(mainLoop);

    gameTimeUpdate(globalTime);

    if (gameTimeDelta > 0) {
      updateInput();

      worldStateUpdate();

      player_update();

      updateWorldMatrices();

      // *** COLLISION RENDERER ***

      collisionShader();

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

      // first collision render

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.colorMask(true, false, true, false);

      const { x, y, z } = player_position_final;

      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          matrixCopy()
            .rotateSelf(0, 180)
            .invertSelf()
            .translateSelf(-x, -y, 0.3 - z),
        ),
      );
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION);

      // second collision render

      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.colorMask(false, true, true, false);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(matrixCopy().translateSelf(-x, -y, -z - 0.3)),
      );
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION);

      // Flushing collision render
      gl.flush();
    }

    // Reset interact button
    resetInteractPressed();

    // view camera

    matrixCopy(identity, camera_view);

    if (mainMenuVisible) {
      camera_view.rotateSelf(-20, -90).invertSelf().translateSelf(5, -2, -3.4);
    } else {
      camera_view
        .rotateSelf(-camera_rotation.x, -camera_rotation.y)
        .invertSelf()
        .translateSelf(-camera_position_x, -camera_position_y, -camera_position_z);
    }

    // *** CASCADED SHADOWMAPS ***

    csmShader();

    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);
    gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

    csm_render(0, (CSM_PLANE_DISTANCE - zNear) * 1.1, 10);
    csm_render(1, (zFar - CSM_PLANE_DISTANCE) * 1.1, 11);

    // *** MAIN RENDER ***

    mainShader();

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    gl.colorMask(true, true, true, true);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, matrixToArray(projection));
    gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, matrixToArray(camera_view));
    gl.uniformMatrix4fv(mainShader(uniformName_csm_matrix0), false, csm_lightSpaceMatrices[0]!);
    gl.uniformMatrix4fv(mainShader(uniformName_csm_matrix1), false, csm_lightSpaceMatrices[1]!);
    gl.uniform3f(mainShader(uniformName_viewPos), camera_position_x, camera_position_y, camera_position_z);

    renderModels(mainShader(uniformName_worldMatrices), !player_first_person, MODEL_ID_SOUL);

    // *** SKY RENDER ***

    skyShader();

    gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);
    gl.uniform3f(skyShader(uniformName_viewPos), camera_position_x, camera_position_y, camera_position_z);
    gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, matrixToArray(matrixCopy(camera_view).invertSelf()));

    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);

    // Prepare for collision reading on next frame.
    // Flushing here increase the chance of the GPU finishing the rendering before we read the texture.

    gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
    gl.flush();
  };

  collisionShader();
  gl.uniformMatrix4fv(
    collisionShader(uniformName_projectionMatrix),
    false,
    matrixToArray(mat_perspective(0.0001, 1, 1.4, 0.59)),
  );

  mainShader();
  gl.uniform1i(mainShader(uniformName_groundTexture), 2);
  gl.uniform1i(mainShader(uniformName_csm_texture1), 1);
  gl.uniform1i(mainShader(uniformName_csm_texture0), 0);

  skyShader();
  gl.uniform1i(skyShader(uniformName_groundTexture), 2);

  // Shadows framebuffer

  gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);
  // Disable rendering to the csm color buffer, we just need the depth buffer
  gl.drawBuffers([gl.NONE]);
  gl.readBuffer(gl.NONE);

  // Collision framebuffer

  gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  gl.bindRenderbuffer(gl.RENDERBUFFER, collision_renderBuffer);

  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, collision_renderBuffer);

  gl.activeTexture(gl.TEXTURE2);

  gl.bindTexture(gl.TEXTURE_2D, collision_texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGB,
    COLLISION_TEXTURE_SIZE,
    COLLISION_TEXTURE_SIZE,
    0,
    gl.RGB,
    gl.UNSIGNED_BYTE,
    null,
  );

  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, collision_texture, 0);

  // Ground texture

  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1024, 1024, 0, gl.RGBA, gl.UNSIGNED_BYTE, groundTextureImage);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.generateMipmap(gl.TEXTURE_2D);

  // GL Setup

  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.enable(gl.CULL_FACE); // Don't render triangle backs

  gl.clearDepth(1); // Clear everything. Default value is 1
  gl.cullFace(gl.BACK); // Default value is already BACK
  gl.depthFunc(gl.LEQUAL); // LEQUAL to make sky works
  gl.clearColor(0, 0, 0, 1);

  worldStateUpdate();

  NO_INLINE(initPage)();

  NO_INLINE(player_init)();

  // gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  requestAnimationFrame(mainLoop);
};
