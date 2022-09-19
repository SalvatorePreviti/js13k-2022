import { identity, type Vec3Optional } from "../math";
import { polygons_transform, type Polygon } from "../geometry/geometry";

export const MODEL_KIND_GAME = 1;

export const MODEL_KIND_GAME_NO_ATTACH_PLAYER = 2;

export const MODEL_KIND_MESH = 0;

export type MODEL_KIND = typeof MODEL_KIND_MESH | typeof MODEL_KIND_GAME | typeof MODEL_KIND_GAME_NO_ATTACH_PLAYER;

export interface Model {
  $matrix: DOMMatrixReadOnly;
  $modelId: number;
  $kind: MODEL_KIND;
  $polygons: Polygon[] | null;
  _update?: (model: Model) => DOMMatrixReadOnly;
  $vertexBegin?: number;
  $vertexEnd?: number;
}

export let currentEditModel: Model;

export const allModels: Model[] = [];

export const meshAdd = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform: DOMMatrixReadOnly = identity,
  color?: number | undefined,
) => currentEditModel.$polygons!.push(...polygons_transform(polygons, transform, color));

export const newModel = (fn: (model: Model) => void, $kind: MODEL_KIND = MODEL_KIND_GAME) => {
  const previousModel = currentEditModel;
  const model: Model = {
    $matrix: identity,
    $modelId: allModels.length,
    $kind,
    $polygons: [],
  };
  allModels.push((currentEditModel = model));
  fn(model);
  currentEditModel = previousModel;
  return model;
};
