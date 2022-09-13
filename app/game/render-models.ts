import { rootModel, type Mesh, type Model } from "./scene";
import { identity } from "../math";
import { mainMenuVisible } from "../page";
import { playerModel, playerLegsModels } from "./objects";
import { absoluteTime, PLAYER_MODEL_ID } from "./world-state";
import { gl } from "../gl";

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  skipFarObjects?: 1 | 0,
  collisionModelIdUniformLocation?: WebGLUniformLocation,
) => {
  const drawMesh = ($mesh: Mesh) =>
    gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_SHORT, $mesh.$vertexOffset * 2);

  const recursion = (model: Model) => {
    const { $modelId, $mesh, $children, $visible, $skipShadow } = model;
    if (!renderPlayer && model.$modelId === PLAYER_MODEL_ID) {
      return;
    }
    if (skipFarObjects && $skipShadow) {
      return;
    }
    if (!$visible) {
      return;
    }
    for (const child of $children) {
      recursion(child);
    }
    if ($mesh) {
      if (collisionModelIdUniformLocation) {
        gl.uniform1f(collisionModelIdUniformLocation, $modelId / 255);
      }
      gl.uniformMatrix4fv(worldMatrixLoc, false, model.$finalMatrix.toFloat32Array());
      drawMesh($mesh);
    }
  };

  if (mainMenuVisible) {
    gl.uniformMatrix4fv(worldMatrixLoc, false, identity.rotate(0, Math.sin(absoluteTime) * 40 - 70).toFloat32Array());
    drawMesh(playerModel.$mesh!);
    playerLegsModels.map((legModel) => legModel.$mesh!).map(drawMesh);
  } else {
    recursion(rootModel);
  }
};
