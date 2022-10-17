import { allModels, MODELS_WITH_FULL_TRANSFORM, souls, SOULS_COUNT } from "./models";
import { cgl, gl } from "../gl";
import { plane_fromPolygon } from "../math/vectors";
import type { Polygon } from "../geometry/polygon";
import { MODEL_ID_SOUL_COLLISION } from "./models-ids";

export const initTriangleBuffers = () => {
  const _triangleIndices: number[] = [];
  const _vertexPositions: number[] = [];
  const _vertexColors: number[] = [];
  const _vertexNormals: number[] = [];

  const _vertexMap = new Map<string, number>();
  const _vertexInts = new Int32Array(8);
  const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 5);
  const _vertexFloats = new Float32Array(_vertexInts.buffer);

  let meshFirstIndex: number = 0;

  if (DEBUG) {
    console.time("initTriangleBuffers");
  }

  allModels.map((model, index) => {
    let polygon: Polygon | undefined;

    const getVertex = (i: number): number => {
      let { x, y, z } = polygon![i]!;
      _vertexFloats[0] = x;
      _vertexFloats[1] = y;
      _vertexFloats[2] = z;
      const key = "" + (polygon!.$smooth ? _vertexIntsSmooth : _vertexInts);
      let vertexIndex = _vertexMap.get(key);
      if (vertexIndex !== undefined) {
        x = vertexIndex * 3;
        _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[5]!) / 2;
        _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[6]!) / 2;
        _vertexNormals[x] = (_vertexNormals[x]! + _vertexInts[7]!) / 2;
      } else {
        _vertexMap.set(key, (vertexIndex = _vertexMap.size));
        _vertexPositions.push(x, y, z, _vertexFloats[3]!);
        _vertexColors.push(_vertexInts[4]!);
        _vertexNormals.push(_vertexInts[5]!, _vertexInts[6]!, _vertexInts[7]!);
      }
      return vertexIndex;
    };

    _vertexFloats[3] = index > MODEL_ID_SOUL_COLLISION - 1 ? -MODELS_WITH_FULL_TRANSFORM : index;

    for (const grp of model.$polygon!) {
      for (polygon of grp) {
        const { x, y, z } = plane_fromPolygon(polygon);
        _vertexInts[4] = polygon.$color! | 0;
        _vertexInts[5] = x * 32767;
        _vertexInts[6] = y * 32767;
        _vertexInts[7] = z * 32767;
        for (let i = 2, a = getVertex(0), b = getVertex(1); i < polygon.length; ++i) {
          _triangleIndices.push(a, b, (b = getVertex(i)));
        }
      }
    }

    // free memory
    model.$polygon = 0 as any;

    // write the indices offset and count
    model.$vertexBegin = meshFirstIndex;
    model.$vertexEnd = meshFirstIndex = _triangleIndices.length;
  });

  [gl, cgl].map((xgl) => {
    xgl.bindBuffer(xgl.ELEMENT_ARRAY_BUFFER, xgl.createBuffer());
    xgl.bufferData(xgl.ELEMENT_ARRAY_BUFFER, new Uint16Array(_triangleIndices), xgl.STATIC_DRAW);

    xgl.bindBuffer(xgl.ARRAY_BUFFER, xgl.createBuffer());
    xgl.bufferData(xgl.ARRAY_BUFFER, new Float32Array(_vertexPositions), xgl.STATIC_DRAW);
    xgl.vertexAttribPointer(0, 4, xgl.FLOAT, false, 0, 0);

    xgl.bindBuffer(xgl.ARRAY_BUFFER, xgl.createBuffer());
    xgl.bufferData(xgl.ARRAY_BUFFER, new Int16Array(_vertexNormals), xgl.STATIC_DRAW);
    xgl.vertexAttribPointer(1, 3, xgl.SHORT, true, 0, 0);

    xgl.bindBuffer(xgl.ARRAY_BUFFER, xgl.createBuffer());
    xgl.bufferData(xgl.ARRAY_BUFFER, new Uint32Array(_vertexColors), xgl.STATIC_DRAW);
    xgl.vertexAttribPointer(2, 4, xgl.UNSIGNED_BYTE, true, 0, 0);

    xgl.enableVertexAttribArray(0);
    xgl.enableVertexAttribArray(1);
    xgl.enableVertexAttribArray(2);
  });

  if (DEBUG) {
    console.timeEnd("initTriangleBuffers");
    console.table({
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
