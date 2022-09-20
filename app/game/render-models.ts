import { allModels } from "./scene";
import { identity, matrixToArray } from "../math";
import { mainMenuVisible } from "../page";
import { absoluteTime, levers, souls } from "./world-state";
import { leverModel, playerModels, soulCollisionModel, soulModel } from "./level";
import { gl } from "../gl";

const worldMatricesBuffer = new Float32Array(39 * 16);

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  isCollider: 0 | 1,
) => {
  const soulModelToRender = isCollider ? soulCollisionModel : soulModel;
  if (mainMenuVisible) {
    const matrix = identity.rotate(0, Math.sin(absoluteTime) * 40 - 70);
    for (const { $modelId } of playerModels) {
      matrixToArray(matrix, worldMatricesBuffer, $modelId - 1);
    }
    gl.uniformMatrix4fv(worldMatrixLoc, false, worldMatricesBuffer);
    gl.drawElements(
      gl.TRIANGLES,
      playerModels[2].$vertexEnd! - playerModels[0].$vertexBegin!,
      gl.UNSIGNED_SHORT,
      playerModels[0].$vertexBegin! * 2,
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
    (renderPlayer ? playerModels[2]!.$vertexEnd! : playerModels[0].$vertexBegin!) - 3,
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
    leverModel.$vertexEnd! - leverModel.$vertexBegin!,
    gl.UNSIGNED_SHORT,
    leverModel.$vertexBegin! * 2,
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
