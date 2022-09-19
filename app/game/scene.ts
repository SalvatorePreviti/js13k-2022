import { identity, plane_fromPolygon, type Vec3Optional } from "../math";
import { polygons_transform, type Polygon } from "../geometry/geometry";

export interface Model {
  $matrix: DOMMatrixReadOnly;
  $mesh?: Mesh;
  $modelId: number;
  $attachPlayer: 0 | 1;
  _update?: (model: Model) => DOMMatrixReadOnly;
}

export let currentEditModel: Model;

export const allModels: Model[] = [];

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
) => _pendingPolygonsStack.at(-1)!.push(...polygons_transform(polygons, transform, color));

const meshEnd = (): Mesh => {
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

export const newModel = (fn: (model: Model) => void | Mesh | undefined) => {
  const previousModel = currentEditModel;
  const model: Model = {
    $matrix: identity,
    $modelId: allModels.length,
    $attachPlayer: 1,
  };
  currentEditModel = model;
  allModels.push(model);
  _pendingPolygonsStack.push([]);

  const modelMesh = fn(model) || meshEnd();
  model.$mesh = modelMesh;
  _pendingPolygonsStack.pop();
  currentEditModel = previousModel;
  return model;
};
