import { allModels, type Mesh } from "./scene";
import { identity } from "../math";
import { mainMenuVisible } from "../page";
import { playerModel, playerLegsModels, soulMesh, leverMeshes } from "./objects";
import { absoluteTime, levers, souls } from "./world-state";
import { gl } from "../gl";

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  collisionModelIdUniformLocation?: WebGLUniformLocation,
) => {
  const drawMesh = ($mesh: Mesh) =>
    gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_SHORT, $mesh.$vertexOffset * 2);

  if (mainMenuVisible) {
    gl.uniformMatrix4fv(worldMatrixLoc, false, identity.rotate(0, Math.sin(absoluteTime) * 40 - 70).toFloat32Array());
    drawMesh(playerModel.$mesh!);
    playerLegsModels.map((legModel) => legModel.$mesh!).map(drawMesh);
  } else {
    for (const model of allModels) {
      const { $modelId, $mesh } = model;
      if (!renderPlayer && (model === playerModel || model === playerLegsModels[0] || model === playerLegsModels[1])) {
        continue;
      }
      if ($mesh) {
        if (collisionModelIdUniformLocation) {
          gl.uniform1f(collisionModelIdUniformLocation, $modelId / 255);
        }
        gl.uniformMatrix4fv(worldMatrixLoc, false, model.$matrix.toFloat32Array());
        drawMesh($mesh);
      }
    }

    for (const lever of levers) {
      gl.uniformMatrix4fv(worldMatrixLoc, false, lever.$stickMatrix!.toFloat32Array());
      drawMesh(leverMeshes[lever.$lerpValue > 0.5 ? 1 : 0]!);
    }

    // TODO: render simplified soul for collision with a cylinder
    for (const soul of souls) {
      gl.uniformMatrix4fv(worldMatrixLoc, false, soul.$matrix!.toFloat32Array());
      drawMesh(soulMesh);
    }
  }
};
