import { gl } from "../gl";

export const debugLines_indexBuffer = gl.createBuffer();

let debugLinesIndexBufferSize: number = 0;

export const debug_lines_prepare = (indices: number[]) => {
  const linesIndicesMap = new Map<string, [number, number]>();
  const addLine = (a: number, b: number) => {
    const array: [number, number] = a < b ? [a, b] : [b, a];
    linesIndicesMap.set("" + array, array);
  };
  for (let i = 0; i < indices.length; i += 3) {
    addLine(indices[i]!, indices[i + 1]!);
    addLine(indices[i + 1]!, indices[i + 2]!);
    addLine(indices[i]!, indices[i + 2]!);
  }
  const lineIndices = new Uint16Array(Array.from(linesIndicesMap.values()).flat());
  debugLinesIndexBufferSize = lineIndices.length;

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, debugLines_indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, lineIndices, gl.STATIC_DRAW);
};

export const debug_lines_draw = () => {
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, debugLines_indexBuffer);
  const type = gl.UNSIGNED_SHORT;
  const offset = 0;
  gl.drawElements(gl.LINES, debugLinesIndexBufferSize, type, offset);
};
