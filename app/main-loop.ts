// shaders
import main_vsSource, {
  uniformName_projectionMatrix,
  uniformName_viewMatrix,
  uniformName_worldMatrices,
  uniformName_simpleTransforms,
} from "./shaders/main-vertex.vert";
import main_fsSource, {
  uniformName_viewPos,
  uniformName_csm_matrices,
  uniformName_csm_texture0,
  uniformName_csm_texture1,
  uniformName_groundTexture,
  constDef_CSM_TEXTURE_SIZE as CSM_TEXTURE_SIZE,
  constDef_CSM_PLANE_DISTANCE as CSM_PLANE_DISTANCE,
} from "./shaders/main-fragment.frag";
import collider_fsSource, {
  constDef_COLLISION_TEXTURE_SIZE as COLLISION_TEXTURE_SIZE,
} from "./shaders/collider-fragment.frag";
import sky_vsSource from "./shaders/sky-vertex.vert";
import sky_fsSource, { uniformName_iResolution } from "./shaders/sky-fragment.frag";

import { gameTimeUpdate, gameTimeDelta, mainMenuVisible, absoluteTime } from "./game/game-time";
import { camera_rotation, player_position_final, worldStateUpdate } from "./game/world-state";
import { integers_map } from "./math/integers-map";
import {
  float32Array16Temp,
  identity,
  matrixCopy,
  matrixToArray,
  matrixTransformPoint,
  tempMatrix,
} from "./math/matrix";
import { mat_perspective, zFar, zNear } from "./math/matrix-perspective";
import { eppur_si_muove } from "./game/level-update";
import { max, min } from "./math/math";
import type { Vec3 } from "./math/vectors";
import { renderModels } from "./game/models-render";
import { loadShader, initShaderProgram } from "./shaders-utils";
import { initPage, csm_projections, player_first_person, projection, resetInteractPressed, updateInput } from "./page";
import { player_init, camera_position_x, camera_position_y, camera_position_z } from "./game/player";
import { gl } from "./gl";
import {
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  MODEL_ID_SOUL,
  MODEL_ID_SOUL_COLLISION,
} from "./game/models-ids";
import { simpleTransformsBuffer, worldMatricesBuffer } from "./game/models-matrices";

const LIGHT_ROT_X = 298;
const LIGHT_ROT_Y = 139;

export const startMainLoop = (groundTextureImage: HTMLImageElement) => {
  const csm_tempMatrix = new DOMMatrix();
  const camera_view = new DOMMatrix();

  const csm_lightSpaceMatrices = new Float32Array(2 * 16);
  const csm_tempFrustumCorners: Vec3[] = integers_map(8, () => ({} as Vec3));

  const skyShader = initShaderProgram(loadShader(sky_vsSource), sky_fsSource);
  const mainVertexShader = loadShader(main_vsSource);
  const collisionShader = initShaderProgram(mainVertexShader, collider_fsSource);
  const mainShader = initShaderProgram(mainVertexShader, main_fsSource);

  const csm_render = integers_map(2, (split: number) => {
    const texture = gl.createTexture()!;
    gl.activeTexture(gl.TEXTURE0 + split);
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

    return (roundingRadius: number) => {
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture, 0);
      gl.clear(gl.DEPTH_BUFFER_BIT);

      matrixCopy()
        .scale3dSelf(roundingRadius)
        .multiplySelf(matrixCopy(csm_projections[split], csm_tempMatrix).multiplySelf(camera_view).invertSelf());

      let tx = 0;
      let ty = 0;
      let tz = 0;

      for (let i = 0; i < 8; ++i) {
        const p = csm_tempFrustumCorners[i]!;
        matrixTransformPoint(4 & i ? 1 : -1, 2 & i ? 1 : -1, 1 & i ? 1 : -1);
        // Round to reduce shimmering
        tx -= p.x = (matrixTransformPoint.x | 0) / (roundingRadius * matrixTransformPoint.w);
        ty -= p.y = (matrixTransformPoint.y | 0) / (roundingRadius * matrixTransformPoint.w);
        tz -= p.z = (matrixTransformPoint.z | 0) / (roundingRadius * matrixTransformPoint.w);
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
        const { x, y, z } = csm_tempFrustumCorners[i]!;
        matrixTransformPoint(x, y, z);
        left = min(left, matrixTransformPoint.x);
        right = max(right, matrixTransformPoint.x);
        bottom = min(bottom, matrixTransformPoint.y);
        top = max(top, matrixTransformPoint.y);
        near = min(near, matrixTransformPoint.z);
        far = max(far, matrixTransformPoint.z);
      }

      const zMultiplier = 10 + split;
      near *= near < 0 ? zMultiplier : 1 / zMultiplier;
      far *= far > 0 ? zMultiplier : 1 / zMultiplier;

      // Build the ortographic matrix, multiply it with the light space view matrix.

      gl.uniformMatrix4fv(
        mainShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          matrixCopy(identity, csm_tempMatrix)
            .scaleSelf(2 / (right - left), 2 / (top - bottom), 2 / (near - far))
            .translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2)
            .multiplySelf(tempMatrix),
        ),
      );

      renderModels(!player_first_person, MODEL_ID_SOUL);

      csm_lightSpaceMatrices.set(float32Array16Temp, split * 16);
    };
  });

  const csm_framebuffer = gl.createFramebuffer();
  const collision_texture = gl.createTexture()!;
  const collision_renderBuffer = gl.createRenderbuffer();
  const collision_frameBuffer = gl.createFramebuffer()!;

  const mainLoop = (globalTime: number) => {
    // gl.flush();

    requestAnimationFrame(mainLoop);

    gameTimeUpdate(globalTime);

    if (gameTimeDelta > 0) {
      updateInput();

      worldStateUpdate();

      eppur_si_muove();

      // *** COLLISION RENDERER ***

      collisionShader();

      gl.uniform4fv(collisionShader(uniformName_simpleTransforms), simpleTransformsBuffer);
      gl.uniformMatrix4fv(collisionShader(uniformName_worldMatrices), false, worldMatricesBuffer);

      // first collision render

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.colorMask(true, false, true, false);

      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          matrixCopy()
            .rotateSelf(0, 180)
            .invertSelf()
            .translateSelf(-player_position_final.x, -player_position_final.y, 0.3 - player_position_final.z),
        ),
      );
      renderModels(0, MODEL_ID_SOUL_COLLISION);

      // second collision render

      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.colorMask(false, true, false, true);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          matrixCopy().translateSelf(
            -player_position_final.x,
            -player_position_final.y,
            -player_position_final.z - 0.3,
          ),
        ),
      );
      renderModels(0, MODEL_ID_SOUL_COLLISION);

      // Reset interact button
      resetInteractPressed();
    }

    // view camera

    let cameraX = camera_position_x;
    let cameraY = camera_position_y;
    let cameraZ = camera_position_z;

    if (mainMenuVisible) {
      matrixCopy(projection).invertSelf();
      matrixTransformPoint(3.6, 3.5);
      cameraX = matrixTransformPoint.x;
      cameraY = matrixTransformPoint.y;
      cameraZ = 5;
      matrixCopy(identity, camera_view)
        .rotateSelf(-20, 0)
        .invertSelf()
        .translateSelf(-cameraX, -cameraY, -cameraZ)
        .rotateSelf(0, 99);

      matrixCopy().rotateSelf(0, 40 * Math.sin(absoluteTime) - 80, -8);
      matrixToArray(tempMatrix, worldMatricesBuffer, MODEL_ID_PLAYER_BODY - 2);
      matrixToArray(tempMatrix, worldMatricesBuffer, MODEL_ID_PLAYER_LEG0 - 2);
      matrixToArray(tempMatrix, worldMatricesBuffer, MODEL_ID_PLAYER_LEG1 - 2);
    } else {
      matrixCopy(identity, camera_view)
        .rotateSelf(-camera_rotation.x, -camera_rotation.y)
        .invertSelf()
        .translateSelf(-cameraX, -cameraY, -cameraZ);
    }

    mainShader();
    gl.uniform3f(mainShader(uniformName_viewPos), cameraX, cameraY, cameraZ);
    gl.uniform4fv(mainShader(uniformName_simpleTransforms), simpleTransformsBuffer);
    gl.uniformMatrix4fv(mainShader(uniformName_worldMatrices), false, worldMatricesBuffer);

    // *** CASCADED SHADOWMAPS ***

    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, matrixToArray(identity));
    gl.uniform1i(mainShader(uniformName_csm_texture0), 3);
    gl.uniform1i(mainShader(uniformName_csm_texture1), 3);

    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);
    gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

    csm_render[0]!((CSM_PLANE_DISTANCE - zNear) * 1.1);
    csm_render[1]!((zFar - CSM_PLANE_DISTANCE) * 1.1);

    // *** MAIN RENDER ***

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

    gl.colorMask(true, true, true, true);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, matrixToArray(camera_view));
    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, matrixToArray(projection));
    gl.uniformMatrix4fv(mainShader(uniformName_csm_matrices), false, csm_lightSpaceMatrices);
    gl.uniform1i(mainShader(uniformName_csm_texture0), 0);
    gl.uniform1i(mainShader(uniformName_csm_texture1), 1);

    renderModels(!player_first_person, MODEL_ID_SOUL);

    // *** SKY RENDER ***

    skyShader();
    gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, matrixToArray(matrixCopy(camera_view).invertSelf()));
    gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);

    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);

    // Prepare for collision reading on next frame.
    // Flushing here increase the chance of the GPU finishing the rendering before we read the texture.

    gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
    gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
    gl.flush();
  };

  collisionShader();
  gl.uniformMatrix4fv(
    collisionShader(uniformName_projectionMatrix),
    false,
    matrixToArray(mat_perspective(0.0001, 2, 1.2, 0.4)),
  );

  mainShader();
  gl.uniform1i(mainShader(uniformName_groundTexture), 2);

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

  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, collision_renderBuffer);

  gl.activeTexture(gl.TEXTURE2);

  gl.bindTexture(gl.TEXTURE_2D, collision_texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    COLLISION_TEXTURE_SIZE,
    COLLISION_TEXTURE_SIZE,
    0,
    gl.RGBA,
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
  gl.clearColor(0, 0, 0, 0); // Clear to black, alpha 0 as is used for collision, it will be in any case overwritten when rendering triangles with 1.

  NO_INLINE(initPage)();

  NO_INLINE(player_init)();

  requestAnimationFrame(mainLoop);
};
