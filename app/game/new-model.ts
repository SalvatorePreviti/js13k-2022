import { allModels, MODEL_KIND_GAME, type Model, type MODEL_KIND } from "./models";
import type { Vec3Optional } from "../math/vectors";
import { polygons_transform, type Polygon } from "../geometry/polygon";

export let currentEditModel: Model;

export const newModel = (fn: (model: Model) => void, $kind: MODEL_KIND = MODEL_KIND_GAME) => {
  const previousModel = currentEditModel;
  const model: Model = {
    $matrix: new DOMMatrix(),
    $modelId: allModels.length,
    $kind,
    $polygons: [],
  };
  allModels.push(model);
  currentEditModel = model;
  fn(model);
  currentEditModel = previousModel;
  return model;
};

export const meshAdd = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  transform: DOMMatrixReadOnly = new DOMMatrix(),
  color?: number | undefined,
) => currentEditModel.$polygons!.push(...polygons_transform(polygons, transform, color));
