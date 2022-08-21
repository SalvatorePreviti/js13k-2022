import type { Polygon } from "../geometry/geometry";
import { gl } from "../gl";
import { identity } from "../math/matrix";
import { plane_fromPolygon } from "../math/vectors";

export const rootModel: Model = {
  $children: [],
  $matrix: new DOMMatrix(),
};

export let currentModel = rootModel;

const _triangleIndices: number[] = [];
const _positions: number[] = [];
const _normals: number[] = [];
const _colors: number[] = [];

const _vertexMap = new Map<string, number>();
const _vertexInts = new Int32Array(7);
const _vertexIntsSmooth = new Int32Array(_vertexInts.buffer, 0, 4);
const _vertexFloats = new Float32Array(_vertexInts.buffer);

let _polygon: Polygon | undefined;
let _meshFirstIndex: number = 0;

export interface Mesh {
  $vertexOffset: number;
  $vertexCount: number;
}

export type ModelUpdateCallback = (model: Model) => void;

export interface Model {
  $parent?: Model | undefined;
  $children: Model[];
  $matrix: DOMMatrix;
  $mesh?: Mesh;
  $collisionDisabled?: 0 | 1 | undefined;
  _update?: ModelUpdateCallback | undefined;
}

export const modelBegin = () => {
  const newModel: Model = {
    $parent: currentModel,
    $children: [],
    $matrix: new DOMMatrix(),
  };
  currentModel.$children.push(newModel);
  return (currentModel = newModel);
};

export const modelEnd = ($mesh?: Mesh | undefined) => {
  currentModel.$mesh = $mesh;
  currentModel = currentModel.$parent!;
};

export const modelFinalMatrix = ({ $matrix, $parent }: Model): DOMMatrix =>
  ($parent?.$matrix || identity).multiply($matrix);

if (DEBUG) {
  console.time("buildWorld");
}

const getVertex = (i: number): number => {
  let { x, y, z } = _polygon![i]!;
  _vertexFloats[0] = x;
  _vertexFloats[1] = y;
  _vertexFloats[2] = z;
  const key = "" + (_polygon!.$smooth ? _vertexIntsSmooth : _vertexInts);
  let index = _vertexMap.get(key);
  if (index !== undefined) {
    x = index * 3;
    _normals[x] = (_normals[x++]! + _vertexInts[4]!) / 2;
    _normals[x] = (_normals[x++]! + _vertexInts[5]!) / 2;
    _normals[x] = (_normals[x]! + _vertexInts[6]!) / 2;
  } else {
    _vertexMap.set(key, (index = _vertexMap.size));
    _positions.push(x, y, z);
    _normals.push(_vertexInts[4]!, _vertexInts[5]!, _vertexInts[6]!);
    _colors.push(_vertexInts[3]!);
  }
  return index;
};

export const meshAdd = (polygons: Polygon[]) => {
  for (_polygon of polygons) {
    const { x, y, z } = plane_fromPolygon(_polygon);
    _vertexInts[3] = _polygon.$color! | 0;
    _vertexInts[4] = x * 32767;
    _vertexInts[5] = y * 32767;
    _vertexInts[6] = z * 32767;
    for (let i = 2, a = getVertex(0), b = getVertex(1); i < _polygon.length; ++i) {
      _triangleIndices.push(a, b, (b = getVertex(i)));
    }
  }
  return polygons;
};

export const meshEnd = () => {
  const $vertexOffset = _meshFirstIndex;
  return {
    $vertexOffset,
    $vertexCount: (_meshFirstIndex = _triangleIndices.length) - $vertexOffset,
  };
};

export const initTriangleBuffers = () => {
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(_triangleIndices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(_positions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(_normals), gl.STATIC_DRAW);
  gl.vertexAttribPointer(1, 3, gl.SHORT, true, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Uint32Array(_colors), gl.STATIC_DRAW);
  gl.vertexAttribPointer(2, 4, gl.UNSIGNED_BYTE, true, 0, 0);

  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);
  gl.enableVertexAttribArray(2);

  if (DEBUG) {
    console.timeEnd("buildWorld");
    console.log(
      "vertices: " +
        _vertexMap.size +
        " indices:" +
        _triangleIndices.length +
        " triangles:" +
        _triangleIndices.length / 3,
    );
  }
};

export const renderModels = (worldMatrixLoc: WebGLUniformLocation, isCollision?: 0 | 1) => {
  const recursion = (model = rootModel) => {
    if (!isCollision || !model.$collisionDisabled) {
      const { $mesh, $children } = model;
      for (const child of $children) {
        recursion(child);
      }
      if ($mesh) {
        gl.uniformMatrix4fv(worldMatrixLoc, false, modelFinalMatrix(model).toFloat32Array());
        gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_INT, $mesh.$vertexOffset * 4);
      }
    }
  };
  recursion();
};

export const updateModels = (model: Model) => {
  model._update?.(model);
  for (const child of model.$children) {
    updateModels(child);
  }
};
