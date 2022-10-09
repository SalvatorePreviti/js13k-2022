import { allModels } from "./models";
import { matrixCopy, identity } from "../math/matrix";
import { devVerifyModelsNextUpdate } from "../dev-tools/dev-models";

export let modelsUpdateCounter: number;

export const modelsResetUpdateCounter = () => (modelsUpdateCounter = 1);

export const modelsNextUpdate = (expectedId: number) => {
  if (DEBUG) {
    devVerifyModelsNextUpdate(modelsUpdateCounter + 1, expectedId);
  }
  return matrixCopy(identity, allModels[++modelsUpdateCounter]!.$matrix);
};
