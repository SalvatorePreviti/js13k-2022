import type { Model } from "./scene";
import { allModels } from "./scene";
import { identity } from "../math";
import { mainMenuVisible } from "../page";
import { absoluteTime, levers, souls } from "./world-state";
import { gl } from "../gl";
import { leverModels, playerLegsModels, playerModel, soulCollisionModel, soulModel } from "./level";

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  isCollider?: 0 | 1,
) => {
  const drawMesh = (model: Model) =>
    gl.drawElements(gl.TRIANGLES, model.$vertexCount!, gl.UNSIGNED_SHORT, model.$vertexOffset! * 2);

  if (mainMenuVisible) {
    gl.uniformMatrix4fv(worldMatrixLoc, false, identity.rotate(0, Math.sin(absoluteTime) * 40 - 70).toFloat32Array());
    drawMesh(playerModel);
    playerLegsModels.map(drawMesh);
  } else {
    for (const model of allModels) {
      if (!renderPlayer && (model === playerModel || model === playerLegsModels[0] || model === playerLegsModels[1])) {
        continue;
      }
      if (!model.$kind) {
        continue;
      }
      gl.uniformMatrix4fv(worldMatrixLoc, false, model.$matrix.toFloat32Array());
      drawMesh(model);
    }

    for (const lever of levers) {
      gl.uniformMatrix4fv(worldMatrixLoc, false, lever.$matrix!.toFloat32Array());
      drawMesh(leverModels[lever.$lerpValue > 0.5 ? 1 : 0]!);
    }

    // TODO: render simplified soul for collision with a cylinder
    for (const soul of souls) {
      gl.uniformMatrix4fv(worldMatrixLoc, false, soul.$matrix!.toFloat32Array());
      drawMesh(isCollider ? soulCollisionModel : soulModel);
    }
  }
};
