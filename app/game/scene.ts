import { identity, type Vec3Optional } from "../math";
import { polygons_transform, type Polygon } from "../geometry/geometry";

export interface Model {
  $matrix: DOMMatrixReadOnly;
  $modelId: number;
  $attachPlayer: 0 | 1;
  $polygons: Polygon[] | null;
  _update?: (model: Model) => DOMMatrixReadOnly;
  $vertexOffset?: number;
  $vertexCount?: number;
}

export let currentEditModel: Model;

export const allModels: Model[] = [];

export const meshAdd = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform: DOMMatrixReadOnly = identity,
  color?: number | undefined,
) => currentEditModel.$polygons!.push(...polygons_transform(polygons, transform, color));

export const newModel = (fn: (model: Model) => void) => {
  const previousModel = currentEditModel;
  const model: Model = {
    $matrix: identity,
    $modelId: allModels.length,
    $attachPlayer: 1,
    $polygons: [],
  };
  allModels.push((currentEditModel = model));
  fn(model);
  currentEditModel = previousModel;
  return model;
};
