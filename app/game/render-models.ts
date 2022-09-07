import { identity } from "../math";
import { gl } from "../gl";
import { PLAYER_MODEL_ID } from "./world-state";
import { playerModel, playerRightLegModel } from "./objects";
import type { Mesh, Model } from "./scene";
import { rootModel } from "./scene";
import { mainMenuVisible } from "../menu";

const drawMesh = ($mesh: Mesh) =>
  gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_SHORT, $mesh.$vertexOffset * 2);

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  collisionModelIdUniformLocation?: WebGLUniformLocation,
) => {
  let currentModelId = 1;
  const recursion = (model: Model) => {
    const modelId = currentModelId;
    if (!renderPlayer && model.$modelId === PLAYER_MODEL_ID) {
      return;
    }
    if (collisionModelIdUniformLocation && !model.$collisions) {
      return;
    }

    if (model.$modelId) {
      currentModelId = model.$modelId;
    } else {
      model.$modelId = currentModelId;
    }
    const { $mesh, $children, $visible } = model;
    if ($visible) {
      for (const child of $children) {
        recursion(child);
      }
      if ($mesh) {
        if (collisionModelIdUniformLocation) {
          gl.uniform1f(collisionModelIdUniformLocation, currentModelId / 255);
        }
        gl.uniformMatrix4fv(worldMatrixLoc, false, model.$finalMatrix.toFloat32Array());
        drawMesh($mesh);
      }
    }

    currentModelId = modelId;
  };

  if (mainMenuVisible) {
    const m = identity.rotate(-5, -70, 0);
    gl.uniformMatrix4fv(worldMatrixLoc, false, m.toFloat32Array());
    drawMesh(playerModel.$mesh!);
    drawMesh(playerRightLegModel.$mesh!);
    gl.uniformMatrix4fv(worldMatrixLoc, false, m.translate(0.6).toFloat32Array());
    drawMesh(playerRightLegModel.$mesh!);
  } else {
    recursion(rootModel);
  }
};
