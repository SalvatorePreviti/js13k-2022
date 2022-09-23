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

import { clamp, integers_map, identity, mat_perspectiveXY, matrixToArray } from "./math";
import { MODEL_ID_SOUL, MODEL_ID_SOUL_COLLISION, player_position_final } from "./game/models";
import {
  absoluteTime,
  gameTimeDelta,
  gameTimeUpdate,
  keyboard_downKeys,
  KEY_INTERACT,
  mainMenuVisible,
  worldStateUpdate,
} from "./game/world-state";
import { mat_perspective, zFar, zNear, camera_position, camera_rotation } from "./camera";
import { csm_buildMatrix } from "./csm";
import { initPage, player_first_person } from "./page";
import { gl } from "./gl";
import { player_update, COLLISION_TEXTURE_SIZE, player_init } from "./player";
import { loadShader, initShaderProgram } from "./shaders-utils";
import { renderModels } from "./game/models-render";

export const startMainLoop = (groundTextureImage: HTMLImageElement) => {
  const mainVertexShader = loadShader(main_vsSource);
  const csmShader = initShaderProgram(loadShader(csm_vsSource), void_fsSource);
  const skyShader = initShaderProgram(loadShader(sky_vsSource), sky_fsSource);
  const collisionShader = initShaderProgram(mainVertexShader, collider_fsSource);
  const mainShader = initShaderProgram(mainVertexShader, main_fsSource);

  const csm_render = integers_map(2, (csmSplit: number) => {
    const texture = gl.createTexture()!;

    gl.activeTexture(gl.TEXTURE0 + csmSplit);
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

    const lightSpaceMatrix: Float32Array = new Float32Array(16);
    return (matrix?: DOMMatrix) => {
      if (matrix) {
        matrixToArray(matrix, lightSpaceMatrix);
        gl.uniformMatrix4fv(csmShader(uniformName_viewMatrix), false, lightSpaceMatrix);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture, 0);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        renderModels(csmShader(uniformName_worldMatrices), !player_first_person, MODEL_ID_SOUL, 1);
      } else {
        gl.uniformMatrix4fv(
          mainShader(csmSplit ? uniformName_csm_matrix1 : uniformName_csm_matrix0),
          false,
          lightSpaceMatrix,
        );
      }
    };
  });

  const csm_framebuffer = gl.createFramebuffer();
  const collision_renderBuffer = gl.createRenderbuffer();
  const collision_frameBuffer = gl.createFramebuffer()!;
  const collision_texture = gl.createTexture()!;

  const mainLoop = (globalTime: number) => {
    gl.flush();

    requestAnimationFrame(mainLoop);

    gameTimeUpdate(globalTime);

    if (gameTimeDelta > 0) {
      // read collision shader output

      worldStateUpdate();

      player_update();

      keyboard_downKeys[KEY_INTERACT] = 0;
    }

    let { x: cameraX, y: cameraY, z: cameraZ } = camera_position;

    if (mainMenuVisible) {
      cameraX = -4.5;
      cameraY = 2;
      cameraZ = 3.2 - clamp(hC.clientWidth / 1000);
    }

    const camera_view = (
      mainMenuVisible
        ? identity.rotate(-20, -90)
        : identity.rotate(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
    )
      .invertSelf()
      .translateSelf(-cameraX, -cameraY, -cameraZ);

    if (gameTimeDelta > 0) {
      const { x, y, z } = player_position_final;
      // *** COLLISION RENDERER ***

      collisionShader();

      gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
      gl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

      // first collision render

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.colorMask(true, false, true, false);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          identity
            .rotate(0, 180)
            .invertSelf()
            .translateSelf(-x, -y, 0.3 - z),
        ),
      );
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION, 0);

      // second collision render

      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.colorMask(false, true, true, false);
      gl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(identity.translate(-x, -y, -z - 0.3)),
      );
      renderModels(collisionShader(uniformName_worldMatrices), 0, MODEL_ID_SOUL_COLLISION, 0);

      // Flushing collision render
      gl.flush();
    }

    // *** CASCADED SHADOWMAPS ***

    csmShader();

    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);
    gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

    csm_render[0]!(csm_buildMatrix(camera_view, zNear, CSM_PLANE_DISTANCE, 10));
    csm_render[1]!(csm_buildMatrix(camera_view, CSM_PLANE_DISTANCE, zFar, 11));

    // *** MAIN RENDER ***

    mainShader();

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.colorMask(true, true, true, true);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    csm_render[0]!();
    csm_render[1]!();

    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, mat_perspective(zNear, zFar));
    gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, matrixToArray(camera_view));
    gl.uniform3f(mainShader(uniformName_viewPos), cameraX, cameraY, cameraZ);

    renderModels(mainShader(uniformName_worldMatrices), !player_first_person, MODEL_ID_SOUL, 0);

    // *** SKY RENDER ***

    skyShader();

    gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);
    gl.uniform3f(skyShader(uniformName_viewPos), cameraX, cameraY, cameraZ);
    gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, matrixToArray(camera_view.inverse()));

    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);

    // Prepare for collision reading on next frame.
    // Flushing here increase the chance of the GPU finishing the rendering before we read the texture.

    gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
    gl.flush();
  };

  collisionShader();
  gl.uniformMatrix4fv(collisionShader(uniformName_projectionMatrix), false, mat_perspectiveXY(1.4, 0.59, 0.0001, 1));

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
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  // GL Setup

  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.enable(gl.CULL_FACE); // Don't render triangle backs

  gl.clearDepth(1); // Clear everything. Default value is 1
  gl.cullFace(gl.BACK); // Default value is already BACK
  gl.depthFunc(gl.LEQUAL); // LEQUAL to make sky works
  gl.clearColor(0, 0, 0, 1);

  worldStateUpdate();

  NO_INLINE(player_init)();

  NO_INLINE(initPage)();

  // gl.bindFramebuffer(gl.FRAMEBUFFER, collision_frameBuffer);
  requestAnimationFrame(mainLoop);
};
