import { gl } from "../gl";

const SIZE_OF_FLOAT = 4;
const SIZE_OF_VEC3 = 3 * SIZE_OF_FLOAT;

const VERTEX_SIZE_IN_BYTES = 3 * SIZE_OF_VEC3;

export const vertexBuffer = gl.createBuffer();

export const indexBuffer = gl.createBuffer();

export const triangles_fill_buffer = (vertices: number[], indices: number[]) => {
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);
  gl.enableVertexAttribArray(2);

  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, VERTEX_SIZE_IN_BYTES, 0);
  gl.vertexAttribPointer(1, 3, gl.FLOAT, false, VERTEX_SIZE_IN_BYTES, SIZE_OF_VEC3);
  gl.vertexAttribPointer(2, 3, gl.FLOAT, false, VERTEX_SIZE_IN_BYTES, SIZE_OF_VEC3 * 2);
};
