import { allModels, type Mesh } from "./scene";
import { identity } from "../math";
import { mainMenuVisible } from "../page";
import { playerModel, playerLegsModels } from "./objects";
import { absoluteTime } from "./world-state";
import { gl } from "../gl";

export const renderModels = (
  worldMatrixLoc: WebGLUniformLocation,
  renderPlayer: 0 | 1 | boolean,
  skipFarObjects?: 1 | 0,
  collisionModelIdUniformLocation?: WebGLUniformLocation,
) => {
  const drawMesh = ($mesh: Mesh) =>
    gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_SHORT, $mesh.$vertexOffset * 2);

  // const recursion = (model: Model) => {
  //   const { $modelId, $mesh, $children, $visible, $skipShadow } = model;
  //   if (!renderPlayer && (model === playerModel || model === playerLegsModels[0] || model === playerLegsModels[1])) {
  //     return;
  //   }
  //   if (skipFarObjects && $skipShadow) {
  //     return;
  //   }
  //   if (!$visible) {
  //     return;
  //   }
  //   for (const child of $children) {
  //     recursion(child);
  //   }
  //   if ($mesh) {
  //     if (collisionModelIdUniformLocation) {
  //       gl.uniform1f(collisionModelIdUniformLocation, $modelId / 255);
  //     }
  //     gl.uniformMatrix4fv(worldMatrixLoc, false, model.$finalMatrix.toFloat32Array());
  //     drawMesh($mesh);
  //   }
  // };

  if (mainMenuVisible) {
    gl.uniformMatrix4fv(worldMatrixLoc, false, identity.rotate(0, Math.sin(absoluteTime) * 40 - 70).toFloat32Array());
    drawMesh(playerModel.$mesh!);
    playerLegsModels.map((legModel) => legModel.$mesh!).map(drawMesh);
  } else {
    for (const model of allModels) {
      const { $modelId, $mesh, $visible, $skipShadow, $parent } = model;
      if (!renderPlayer && (model === playerModel || model === playerLegsModels[0] || model === playerLegsModels[1])) {
        continue;
      }
      if (skipFarObjects && $skipShadow) {
        continue;
      }
      if (!$visible || ($parent && !$parent.$visible)) {
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
