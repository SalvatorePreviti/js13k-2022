import type { Model } from "./scene";
import { rootModel, _triangleIndices, _vertexPositions, _vertexNormals, _vertexColors } from "./scene";
import { gl } from "../gl";

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
    const recursion = ({ $mesh, $children }: Model) => {
      for (const child of $children) {
        recursion(child);
      }
      if ($mesh) {
        ++modelsCount;
      }
    };
    recursion(rootModel);

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
