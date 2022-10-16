// shaders
import main_vsSource, {
  uniformName_projectionMatrix,
  uniformName_viewMatrix,
  uniformName_worldTransforms,
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
import { identity, matrixCopy, matrixToArray, matrixTransformPoint, tempMatrix } from "./math/matrix";
import { eppur_si_muove } from "./game/level-update";
import { max, min } from "./math/math";
import { player_init, camera_position_x, camera_position_y, camera_position_z } from "./game/player";
import {
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  MODEL_ID_SOUL,
  MODEL_ID_SOUL_COLLISION,
} from "./game/models-ids";
import { transformsBuffer } from "./game/transforms-buffer";
import { allModels, MODELS_WITH_SIMPLE_TRANSFORM, souls } from "./game/models";
import { mat_perspective, zFar, zNear } from "./math/matrix-perspective";
import { page_update, csm_projections, player_first_person, projection, resetInteractPressed } from "./page";
import { cgl, gl } from "./gl";

const LIGHT_ROT_X = 298;
const LIGHT_ROT_Y = 139;

export const startMainLoop = (groundTextureImage: HTMLImageElement) => {
  const csm_tempMatrix = new DOMMatrix();
  const camera_view = new DOMMatrix();

  const csm_lightSpaceMatrices = new Float32Array(2 * 16);
  const csm_tempFrustumCorners: number[] = [];
  const csm_framebuffer = gl.createFramebuffer();

  interface WebglProgramAbstraction {
    (name: string): WebGLUniformLocation;
    (): void;
  }

  const renderModels = (
    xgl: WebGL2RenderingContext,
    soulModelId: number,
    doNotRenderPlayer: boolean | 0 | 1 | undefined,
  ) => {
    if (mainMenuVisible) {
      if (hC.width > 1100) {
        // Render player in main menu
        xgl.drawElements(
          xgl.TRIANGLES,
          allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! - allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!,
          xgl.UNSIGNED_SHORT,
          allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin! * 2,
        );
      }
    } else {
      // Render souls
      xgl.drawElementsInstanced(
        xgl.TRIANGLES,
        allModels[soulModelId]!.$vertexEnd! - allModels[soulModelId]!.$vertexBegin!,
        xgl.UNSIGNED_SHORT,
        allModels[soulModelId]!.$vertexBegin! * 2,
        souls.length,
      );

      // Render world
      xgl.drawElements(
        xgl.TRIANGLES,
        allModels[doNotRenderPlayer ? MODEL_ID_PLAYER_BODY : MODEL_ID_PLAYER_LEG1 + 1]!.$vertexBegin! - 3,
        xgl.UNSIGNED_SHORT,
        3 * 2,
      );
    }
  };

  const initShaderProgram = (
    xgl: WebGL2RenderingContext,
    sfsSource: string,
    vfsSource: string = main_vsSource,
  ): WebglProgramAbstraction => {
    const loadShader = (source: string, type: number): WebGLShader => {
      const shader = xgl.createShader(type)!;
      xgl.shaderSource(shader, source);
      xgl.compileShader(shader);

      if (DEBUG && !xgl.getShaderParameter(shader, xgl.COMPILE_STATUS)) {
        throw new Error("An error occurred compiling the shaders: " + xgl.getShaderInfoLog(shader));
      }

      return shader;
    };

    const uniforms: Record<string, WebGLUniformLocation> = {};
    const program = xgl.createProgram()!;
    xgl.attachShader(program, loadShader(vfsSource, xgl.VERTEX_SHADER));
    xgl.attachShader(program, loadShader(sfsSource, xgl.FRAGMENT_SHADER));
    xgl.linkProgram(program);

    if (DEBUG && !xgl.getProgramParameter(program, xgl.LINK_STATUS)) {
      throw new Error("Unable to initialize the shader program: " + xgl.getProgramInfoLog(program));
    }

    return (name?: string): any =>
      name ? uniforms[name] || (uniforms[name] = xgl.getUniformLocation(program, name)!) : xgl.useProgram(program);
  };

  const mainShader = initShaderProgram(gl, main_fsSource);
  const collisionShader = initShaderProgram(cgl, collider_fsSource);
  const skyShader = initShaderProgram(gl, sky_fsSource, sky_vsSource);

  const [csm0, csm1] = integers_map(2, (split: number) => {
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
      let tx = 0;
      let ty = 0;
      let tz = 0;

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, texture, 0);
      gl.clear(gl.DEPTH_BUFFER_BIT);

      matrixCopy()
        .scale3dSelf((roundingRadius *= 1.1))
        .multiplySelf(matrixCopy(csm_projections[split], csm_tempMatrix).multiplySelf(camera_view).invertSelf());

      for (let i = 0, j = 0; i < 8; ++i) {
        matrixTransformPoint(4 & i ? 1 : -1, 2 & i ? 1 : -1, 1 & i ? 1 : -1);
        // Round to reduce shimmering
        tx -= csm_tempFrustumCorners[j++] = (matrixTransformPoint.x | 0) / (roundingRadius * matrixTransformPoint.w);
        ty -= csm_tempFrustumCorners[j++] = (matrixTransformPoint.y | 0) / (roundingRadius * matrixTransformPoint.w);
        tz -= csm_tempFrustumCorners[j++] = (matrixTransformPoint.z | 0) / (roundingRadius * matrixTransformPoint.w);
      }

      matrixCopy()
        .rotateSelf(LIGHT_ROT_X, LIGHT_ROT_Y)
        .translateSelf(tx / 8, ty / 8, tz / 8);

      let right = -Infinity;
      let top = -Infinity;
      let far = -Infinity;
      let left = Infinity;
      let bottom = Infinity;
      let near = Infinity;

      // Compute the frustum bouding box
      for (let i = 0, j = 0; i < 8; ++i) {
        matrixTransformPoint(csm_tempFrustumCorners[j++], csm_tempFrustumCorners[j++], csm_tempFrustumCorners[j++]);
        right = max(right, matrixTransformPoint.x);
        top = max(top, matrixTransformPoint.y);
        far = max(far, matrixTransformPoint.z);
        left = min(left, matrixTransformPoint.x);
        bottom = min(bottom, matrixTransformPoint.y);
        near = min(near, matrixTransformPoint.z);
      }

      tz = 10 + split;
      near *= near < 0 ? tz : 1 / tz;
      far *= far > 0 ? tz : 1 / tz;

      // Build the ortographic matrix, multiply it with the light space view matrix.

      gl.uniformMatrix4fv(
        mainShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          matrixCopy(identity, csm_tempMatrix)
            .scaleSelf(2 / (right - left), 2 / (top - bottom), 2 / (near - far))
            .translateSelf((right + left) / -2, (top + bottom) / -2, (near + far) / 2)
            .multiplySelf(tempMatrix),
          csm_lightSpaceMatrices,
          split,
        ),
        16 * split,
        16,
      );
    };
  });

  const mainLoop = (globalTime: number) => {
    gameTimeUpdate(globalTime);

    requestAnimationFrame(mainLoop);

    if (gameTimeDelta > 0) {
      page_update();

      worldStateUpdate();

      eppur_si_muove();

      // *** COLLISION RENDERER ***

      cgl.uniform4fv(collisionShader(uniformName_worldTransforms), transformsBuffer);

      cgl.colorMask(true, true, true, true);
      cgl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      cgl.colorMask(true, false, true, false);

      // first collision render

      cgl.uniformMatrix4fv(
        collisionShader(uniformName_viewMatrix),
        false,
        matrixToArray(
          matrixCopy()
            .rotateSelf(0, 180)
            .invertSelf()
            .translateSelf(-player_position_final.x, -player_position_final.y, -player_position_final.z + 0.3),
        ),
      );

      renderModels(cgl, MODEL_ID_SOUL_COLLISION, 1);

      // second collision render

      cgl.clear(gl.DEPTH_BUFFER_BIT);
      cgl.colorMask(false, true, false, true);

      cgl.uniformMatrix4fv(
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

      renderModels(cgl, MODEL_ID_SOUL_COLLISION, 1);

      cgl.flush();

      // Reset interact button
      resetInteractPressed();
    }

    mainShader();

    // Send the transformations to the shader

    gl.uniform4fv(mainShader(uniformName_worldTransforms), transformsBuffer);

    // *** CASCADED SHADOWMAPS ***

    gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);
    gl.viewport(0, 0, CSM_TEXTURE_SIZE, CSM_TEXTURE_SIZE);

    gl.uniform1i(mainShader(uniformName_csm_texture0), 4);
    gl.uniform1i(mainShader(uniformName_csm_texture1), 4);
    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, matrixToArray(identity));

    // view camera

    let cameraX = camera_position_x;
    let cameraY = camera_position_y;
    let cameraZ = camera_position_z;

    if (mainMenuVisible) {
      matrixCopy().rotateSelf(0, 40 * Math.sin(absoluteTime) - 80, -8);
      matrixToArray(tempMatrix, transformsBuffer, MODEL_ID_PLAYER_BODY - MODELS_WITH_SIMPLE_TRANSFORM - 2);
      matrixToArray(tempMatrix, transformsBuffer, MODEL_ID_PLAYER_LEG0 - MODELS_WITH_SIMPLE_TRANSFORM - 2);
      matrixToArray(tempMatrix, transformsBuffer, MODEL_ID_PLAYER_LEG1 - MODELS_WITH_SIMPLE_TRANSFORM - 2);

      matrixCopy(projection).invertSelf();
      matrixTransformPoint(3.6, 3.5);
      cameraX = matrixTransformPoint.x;
      cameraY = matrixTransformPoint.y;
      cameraZ = 5;
      matrixCopy(identity, camera_view).rotateSelf(20, 0).translateSelf(-cameraX, -cameraY, -cameraZ).rotateSelf(0, 99);
    } else {
      matrixCopy(identity, camera_view)
        .rotateSelf(-camera_rotation.x, -camera_rotation.y)
        .invertSelf()
        .translateSelf(-cameraX, -cameraY, -cameraZ);
    }

    csm0!(CSM_PLANE_DISTANCE - zNear);
    renderModels(gl, MODEL_ID_SOUL, player_first_person);

    csm1!(zFar - CSM_PLANE_DISTANCE);
    renderModels(gl, MODEL_ID_SOUL, player_first_person);

    // *** MAIN RENDER ***

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniform1i(mainShader(uniformName_csm_texture0), 0);
    gl.uniform1i(mainShader(uniformName_csm_texture1), 1);
    gl.uniform3f(mainShader(uniformName_viewPos), cameraX, cameraY, cameraZ);
    gl.uniformMatrix4fv(mainShader(uniformName_projectionMatrix), false, matrixToArray(projection));
    gl.uniformMatrix4fv(mainShader(uniformName_viewMatrix), false, matrixToArray(camera_view));
    gl.uniformMatrix4fv(mainShader(uniformName_csm_matrices), false, csm_lightSpaceMatrices);

    renderModels(gl, MODEL_ID_SOUL, player_first_person);

    // *** SKY RENDER ***

    skyShader();

    gl.uniformMatrix4fv(skyShader(uniformName_viewMatrix), false, matrixToArray(camera_view.invertSelf()));
    gl.uniform3f(skyShader(uniformName_iResolution), gl.drawingBufferWidth, gl.drawingBufferHeight, absoluteTime);

    gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);
  };

  // Ground texture

  gl.activeTexture(gl.TEXTURE2);

  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1024, 1024, 0, gl.RGBA, gl.UNSIGNED_BYTE, groundTextureImage);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.generateMipmap(gl.TEXTURE_2D);

  // Shadows framebuffer

  gl.bindFramebuffer(gl.FRAMEBUFFER, csm_framebuffer);
  // Disable rendering to the csm color buffer, we just need the depth buffer
  gl.drawBuffers([gl.NONE]);
  gl.readBuffer(gl.NONE);

  mainShader();
  gl.uniform1i(mainShader(uniformName_groundTexture), 2);

  skyShader();
  gl.uniform1i(skyShader(uniformName_groundTexture), 2);

  // Setup rendering context

  gl.clearColor(0, 0, 0, 1);
  gl.depthFunc(gl.LEQUAL); // LEQUAL to make sky works. Default is LESS
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.enable(gl.CULL_FACE); // Don't render triangle backs

  // Setup collision context

  cgl.enable(cgl.DEPTH_TEST); // Enable depth testing
  cgl.enable(cgl.CULL_FACE); // Don't render triangle backs
  cgl.viewport(0, 0, COLLISION_TEXTURE_SIZE, COLLISION_TEXTURE_SIZE);

  collisionShader();
  cgl.uniformMatrix4fv(
    collisionShader(uniformName_projectionMatrix),
    false,
    matrixToArray(mat_perspective(0.0001, 2, 1.2, 0.4)),
  );

  player_init();
  page_update();

  requestAnimationFrame(mainLoop);
};
