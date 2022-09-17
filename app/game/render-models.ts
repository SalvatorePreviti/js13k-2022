import { allModels, type Mesh } from "./scene";
import { identity } from "../math";
import { mainMenuVisible } from "../page";
import { playerModel, playerLegsModels } from "./objects";
import { absoluteTime } from "./world-state";
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
        gl.uniformMatrix4fv(worldMatrixLoc, false, model.$finalMatrix.toFloat32Array());
        drawMesh($mesh);
      }
    }
    // recursion(allModels[0]!);
  }
};
