import { identity, plane_fromPolygon, type Vec3Optional } from "../math";
import { polygons_transform, type Polygon } from "../geometry/geometry";

export const rootModel: Model = {
  $children: [],
  $initialMatrix: identity,
  $finalMatrix: identity,
  $modelId: 1,
  $visible: 1,
  $skipShadow: 0,
};

export let currentEditModel = rootModel;

export const modelsByModelId: Model[] = [];

export const editMatrixStack: DOMMatrixReadOnly[] = [identity];

export const withEditMatrix = <T>(matrix: DOMMatrixReadOnly, fn: () => T) => {
  editMatrixStack.push(editMatrixStack.at(-1)!.multiply(matrix));
  const result = fn();
  editMatrixStack.pop();
  return result;
};

export const _triangleIndices: number[] = [];

export const _vertexPositions: number[] = [];

export const _vertexNormals: number[] = [];

export const _vertexColors: number[] = [];

const _pendingPolygonsStack: Polygon[][] = [[]];

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

export type ModelUpdateCallback = (model: Model) => void | DOMMatrixReadOnly;

export interface Model {
  $parent?: Model | undefined;
  $children: Model[];
  $initialMatrix: DOMMatrixReadOnly;
  $finalMatrix: DOMMatrixReadOnly;
  $mesh?: Mesh;
  $modelId: number;
  $visible: boolean | 0 | 1;
  $skipShadow: boolean | 0 | 1;
  _update?: ModelUpdateCallback | undefined;
}

const getVertex = (i: number): number => {
  let { x, y, z } = _polygon![i]! as any;
  _vertexFloats[0] = x;
  _vertexFloats[1] = y;
  _vertexFloats[2] = z;
  const key = "" + (_polygon!.$smooth ? _vertexIntsSmooth : _vertexInts);
  let index = _vertexMap.get(key);
  if (index !== undefined) {
    x = index * 3;
    _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[4]!) / 2;
    _vertexNormals[x] = (_vertexNormals[x++]! + _vertexInts[5]!) / 2;
    _vertexNormals[x] = (_vertexNormals[x]! + _vertexInts[6]!) / 2;
  } else {
    _vertexMap.set(key, (index = _vertexMap.size));
    _vertexPositions.push(x, y, z);
    _vertexNormals.push(_vertexInts[4]!, _vertexInts[5]!, _vertexInts[6]!);
    _vertexColors.push(_vertexInts[3]!);
  }
  return index;
};

export const meshAdd = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform: DOMMatrixReadOnly = identity,
  color?: number | undefined,
) =>
  _pendingPolygonsStack
    .at(-1)!
    .push(...polygons_transform(polygons, editMatrixStack.at(-1)!.multiply(transform), color));

export const meshEnd = (): Mesh => {
  const pendingPolygons = _pendingPolygonsStack.at(-1)!;
  for (_polygon of pendingPolygons) {
    const { x, y, z } = plane_fromPolygon(_polygon);
    _vertexInts[3] = _polygon.$color! | 0;
    _vertexInts[4] = x * 32767;
    _vertexInts[5] = y * 32767;
    _vertexInts[6] = z * 32767;
    for (let i = 2, a = getVertex(0), b = getVertex(1); i < _polygon.length; ++i) {
      _triangleIndices.push(a, b, (b = getVertex(i)));
    }
  }
  pendingPolygons.length = 0;
  const $vertexOffset = _meshFirstIndex;
  return {
    $vertexOffset,
    $vertexCount: (_meshFirstIndex = _triangleIndices.length) - $vertexOffset,
  };
};

export const newModel = (fn: (model: Model) => void | Mesh | undefined, $modelId = 0) => {
  const model: Model = {
    ...rootModel,
    $parent: currentEditModel,
    $children: [],
    $initialMatrix: editMatrixStack.at(-1)!,
    $modelId,
  };
  editMatrixStack.push(identity);
  _pendingPolygonsStack.push([]);
  currentEditModel.$children.push(model);
  currentEditModel = model;

  const modelMesh = fn(model) || meshEnd();
  modelsByModelId[model.$modelId] = model;
  if (modelMesh && modelMesh.$vertexCount) {
    model.$mesh = modelMesh;
  }
  currentEditModel = model.$parent!;
  editMatrixStack.pop();
  _pendingPolygonsStack.pop();
  return model;
};

export const updateModels = (model: Model, parentMatrix = identity) => {
  const update = model._update;
  if (model.$parent && !model.$modelId) {
    model.$modelId = model.$parent.$modelId || 1;
  }
  model.$finalMatrix = parentMatrix.multiply(model.$initialMatrix);
  if (update) {
    const updateResult = update(model);
    if (updateResult) {
      model.$finalMatrix = model.$finalMatrix.multiply(updateResult);
    }
  }
  for (const child of model.$children) {
    updateModels(child, model.$finalMatrix);
  }
};
