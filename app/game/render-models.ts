import { identity, matrixToArray } from "../math";
import { absoluteTime, mainMenuVisible } from "./world-state";
import {
  allModels,
  levers,
  MODEL_ID_LEVER,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  MODEL_ID_SOUL,
  MODEL_ID_SOUL_COLLISION,
  souls,
} from "./models";
import { gl } from "../gl";

const worldMatricesBuffer = new Float32Array(39 * 16);

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  isCollider: 0 | 1,
) => {
  const soulModelToRender = allModels[isCollider ? MODEL_ID_SOUL_COLLISION : MODEL_ID_SOUL]!;

  if (mainMenuVisible) {
    const matrix = identity.rotate(0, Math.sin(absoluteTime) * 40 - 70);
    for (const modelId of [MODEL_ID_PLAYER_BODY, MODEL_ID_PLAYER_LEG0, MODEL_ID_PLAYER_LEG1]) {
      matrixToArray(matrix, worldMatricesBuffer, modelId - 1);
    }

    gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
    gl.drawElements(
      gl.TRIANGLES,
      allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! - allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!,
      gl.UNSIGNED_SHORT,
      allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin! * 2,
    );
    return;
  }

  // Render world

  for (let i = 0; i < allModels.length; ++i) {
    const { $kind, $modelId, $matrix } = allModels[i]!;
    if ($kind) {
      matrixToArray($matrix, worldMatricesBuffer, $modelId - 1);
    }
  }
  gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
  gl.drawElements(
    gl.TRIANGLES,
    (renderPlayer ? allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! : allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!) - 3,
    gl.UNSIGNED_SHORT,
    3 * 2,
  );

  // Render souls

  for (let i = 0; i < levers.length; ++i) {
    const { $matrix, $lerpValue } = levers[i]!;
    matrixToArray($matrix!, worldMatricesBuffer, i);
    worldMatricesBuffer[i * 16 + 15] = 1 - $lerpValue;
  }
  gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
  gl.drawElementsInstanced(
    gl.TRIANGLES,
    allModels[MODEL_ID_LEVER]!.$vertexEnd! - allModels[MODEL_ID_LEVER]!.$vertexBegin!,
    gl.UNSIGNED_SHORT,
    allModels[MODEL_ID_LEVER]!.$vertexBegin! * 2,
    levers.length,
  );

  // Render levers

  for (let i = 0; i < 13; ++i) {
    matrixToArray(souls[i]!.$matrix!, worldMatricesBuffer, i);
  }
  gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
  gl.drawElementsInstanced(
    gl.TRIANGLES,
    soulModelToRender.$vertexEnd! - soulModelToRender.$vertexBegin!,
    gl.UNSIGNED_SHORT,
    soulModelToRender.$vertexBegin! * 2,
    13,
  );
};
