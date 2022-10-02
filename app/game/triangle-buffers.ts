import { allModels, MODEL_ID_LEVER, souls, SOULS_COUNT } from "./models";
import { gl } from "../gl";
import { plane_fromPolygon } from "../math/vectors";
import type { Polygon } from "../geometry/polygon";

export const initTriangleBuffers = () => {
  let polygon: Polygon | undefined;

  const _triangleIndices: number[] = [];
  const _vertexPositions: number[] = [];
  const _vertexColors: number[] = [];
  const _vertexNormals: number[] = [];

  const _vertexInts = new Int32Array(8);
  const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 5);
  const _vertexFloats = new Float32Array(_vertexInts.buffer);
  const _vertexMap = new Map<string, number>();

  const getVertex = (i: number): number => {
    let { x, y, z } = polygon![i]!;
    _vertexFloats[0] = x;
    _vertexFloats[1] = y;
    _vertexFloats[2] = z;
    const key = "" + (polygon!.$smooth ? _vertexIntsSmooth : _vertexInts);
    let index = _vertexMap.get(key);
    if (index !== undefined) {
      x = index * 3;
      _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[5]!) / 2;
      _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[6]!) / 2;
      _vertexNormals[x] = (_vertexNormals[x]! + _vertexInts[7]!) / 2;
    } else {
      _vertexMap.set(key, (index = _vertexMap.size));
      _vertexPositions.push(x, y, z, _vertexFloats[3]!);
      _vertexColors.push(_vertexInts[4]!);
      _vertexNormals.push(_vertexInts[5]!, _vertexInts[6]!, _vertexInts[7]!);
    }
    return index;
  };

  let meshFirstIndex: number = 0;

  if (DEBUG) {
    console.time("initTriangleBuffers");
  }

  allModels.map((model, index) => {
    _vertexFloats[3] = index === MODEL_ID_LEVER ? -SOULS_COUNT - 1 : model.$kind && index;
    for (polygon of model.$polygons!) {
      const { x, y, z } = plane_fromPolygon(polygon);
      _vertexInts[4] = polygon.$color! | 0;
      _vertexInts[5] = x * 32767;
      _vertexInts[6] = y * 32767;
      _vertexInts[7] = z * 32767;
      for (let i = 2, a = getVertex(0), b = getVertex(1); i < polygon.length; ++i) {
        _triangleIndices.push(a, b, (b = getVertex(i)));
      }
    }

    // free memory
    model.$polygons = null;

    // write the indices offset and count
    model.$vertexBegin = meshFirstIndex;
    model.$vertexEnd = meshFirstIndex = _triangleIndices.length;
  });

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(_vertexPositions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(_vertexNormals), gl.STATIC_DRAW);
  gl.vertexAttribPointer(1, 3, gl.SHORT, true, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Uint32Array(_vertexColors), gl.STATIC_DRAW);
  gl.vertexAttribPointer(2, 4, gl.UNSIGNED_BYTE, true, 0, 0);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_triangleIndices), gl.STATIC_DRAW);

  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);
  gl.enableVertexAttribArray(2);

  if (DEBUG) {
    console.timeEnd("initTriangleBuffers");
    console.table({
      "game models": allModels.filter((m) => !!m.$kind).length,
      "all models": allModels.length,
      "vertices": _vertexMap.size,
      "triangles": _triangleIndices.length / 3,
      "indices": _triangleIndices.length,
    });

    if (souls.length !== SOULS_COUNT) {
      throw new Error("Souls must be " + SOULS_COUNT + " but is " + souls.length);
    }
  }
};
