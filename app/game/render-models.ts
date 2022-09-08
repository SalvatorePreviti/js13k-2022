import { rootModel, type Mesh, type Model } from "./scene";
import { identity } from "../math";
import { mainMenuVisible } from "../page";
import { playerModel, playerLegsModels } from "./objects";
import { PLAYER_MODEL_ID } from "./world-state";
import { gl } from "../gl";

const drawMesh = ($mesh: Mesh) =>
  gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_SHORT, $mesh.$vertexOffset * 2);

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  collisionModelIdUniformLocation?: WebGLUniformLocation,
) => {
  const recursion = (model: Model) => {
    const { $mesh, $children, $visible, $modelId } = model;
    if (!renderPlayer && model.$modelId === PLAYER_MODEL_ID) {
      return;
    }
    if (collisionModelIdUniformLocation && !model.$collisions) {
      return;
    }

    if ($visible) {
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
    }
  };

  if (mainMenuVisible) {
    const m = identity.rotate(0, -70);
    gl.uniformMatrix4fv(worldMatrixLoc, false, m.toFloat32Array());
    drawMesh(playerModel.$mesh!);
    playerLegsModels.map((legModel) => drawMesh(legModel.$mesh!));
  } else {
    recursion(rootModel);
  }
};
