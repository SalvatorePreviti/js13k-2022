import {
  rootModel,
  _triangleIndices,
  _vertexPositions,
  _vertexNormals,
  _vertexColors,
  type Mesh,
  type Model,
} from "./scene";
import { identity } from "../math";
import { mainMenuVisible } from "../page";
import { playerModel, playerRightLegModel, playerLeftLegModel } from "./objects";
import { PLAYER_MODEL_ID } from "./world-state";
import { gl } from "../gl";

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
    const m = identity.rotate(0, -70);
    gl.uniformMatrix4fv(worldMatrixLoc, false, m.toFloat32Array());
    drawMesh(playerModel.$mesh!);
    drawMesh(playerRightLegModel.$mesh!);
    drawMesh(playerLeftLegModel.$mesh!);
  } else {
    recursion(rootModel);
  }
};

export const initTriangleBuffers = () => {
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_triangleIndices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(_vertexPositions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(_vertexNormals), gl.STATIC_DRAW);
  gl.vertexAttribPointer(1, 3, gl.SHORT, true, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Uint32Array(_vertexColors), gl.STATIC_DRAW);
  gl.vertexAttribPointer(2, 4, gl.UNSIGNED_BYTE, true, 0, 0);

  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);
  gl.enableVertexAttribArray(2);

  if (DEBUG) {
    let modelsCount = 0;
    const recursion = (model = rootModel) => {
      const { $mesh, $children } = model;
      for (const child of $children) {
        recursion(child);
      }
      if ($mesh) {
        ++modelsCount;
      }
    };
    recursion();

    console.log(
      "models: " + modelsCount,
      "vertices: " +
        _vertexPositions.length / 3 +
        " indices:" +
        _triangleIndices.length +
        " triangles:" +
        _triangleIndices.length / 3,
    );
  }
};
