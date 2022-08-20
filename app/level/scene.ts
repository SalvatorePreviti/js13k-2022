import type { Polygon } from "../geometry/geometry";
import { gl } from "../gl";
import { identity } from "../math/matrix";
import type { Vec3 } from "../math/vectors";
import { plane_fromPolygon } from "../math/vectors";

export type Renderer = () => void;

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

export const rootModel: Model = {
  $children: [],
  $matrix: new DOMMatrix(),
};

export let currentModel = rootModel;

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

const triangleIndices: number[] = [];
const positions: number[] = [];
const normals: number[] = [];
const colors: number[] = [];

const vertexMap = new Map<string, number>();
const vertexInts = new Int32Array(7);
const vertexIntsSmooth = new Int32Array(vertexInts.buffer, 0, 4);
const vertexFloats = new Float32Array(vertexInts.buffer);

let _polygon: Polygon | undefined;
let _meshFirstIndex: number = 0;

const getVertex = (i: number): number => {
  let { x, y, z } = _polygon![i]!;
  vertexFloats[0] = x;
  vertexFloats[1] = y;
  vertexFloats[2] = z;
  const key = "" + (_polygon!.$smooth ? vertexIntsSmooth : vertexInts);
  let index = vertexMap.get(key);
  if (index !== undefined) {
    x = index * 3;
    normals[x] = (normals[x++]! + vertexInts[4]!) / 2;
    normals[x] = (normals[x++]! + vertexInts[5]!) / 2;
    normals[x] = (normals[x]! + vertexInts[6]!) / 2;
  } else {
    vertexMap.set(key, (index = vertexMap.size));
    positions.push(x, y, z);
    normals.push(vertexInts[4]!, vertexInts[5]!, vertexInts[6]!);
    colors.push(vertexInts[3]!);
  }
  return index;
};

export const meshAdd = (polygons: Polygon[]) => {
  for (_polygon of polygons) {
    const { x, y, z } = plane_fromPolygon(_polygon);
    vertexInts[3] = _polygon.$color! | 0;
    vertexInts[4] = x * 32767;
    vertexInts[5] = y * 32767;
    vertexInts[6] = z * 32767;
    for (let i = 2, a = getVertex(0), b = getVertex(1); i < _polygon.length; ++i) {
      triangleIndices.push(a, b, (b = getVertex(i)));
    }
  }
  return polygons;
};

export const meshEnd = () => {
  const $vertexOffset = _meshFirstIndex;
  return {
    $vertexOffset,
    $vertexCount: (_meshFirstIndex = triangleIndices.length) - $vertexOffset,
  };
};

export const initTriangleBuffers = () => {
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(triangleIndices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(normals), gl.STATIC_DRAW);
  gl.vertexAttribPointer(1, 3, gl.SHORT, true, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Uint32Array(colors), gl.STATIC_DRAW);
  gl.vertexAttribPointer(2, 4, gl.UNSIGNED_BYTE, true, 0, 0);

  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);
  gl.enableVertexAttribArray(2);

  if (DEBUG) {
    console.timeEnd("buildWorld");
    console.log(
      "vertices: " + vertexMap.size + " indices:" + triangleIndices.length + " triangles:" + triangleIndices.length / 3,
    );
  }
};

export const renderModels = (worldMatrixLoc: WebGLUniformLocation, isCollision?: 0 | 1, model = rootModel) => {
  if (!isCollision || !model.$collisionDisabled) {
    const { $mesh } = model;
    if ($mesh) {
      gl.uniformMatrix4fv(worldMatrixLoc, false, modelFinalMatrix(model).toFloat32Array());
      gl.drawElements(gl.TRIANGLES, $mesh.$vertexCount, gl.UNSIGNED_INT, $mesh.$vertexOffset * 4);
    }
    for (const child of model.$children) {
      renderModels(worldMatrixLoc, isCollision, child);
    }
  }
};

export const updateModels = (model: Model) => {
  model._update?.(model);
  for (const child of model.$children) {
    updateModels(child);
  }
};
