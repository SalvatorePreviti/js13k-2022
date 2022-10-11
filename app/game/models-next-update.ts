import { allModels } from "./models";
import { matrixCopy, identity } from "../math/matrix";
import { devVerifyModelsNextUpdate } from "../dev-tools/dev-models";

export let modelsUpdateCounter: number;

export const modelsResetUpdateCounter = () => (modelsUpdateCounter = 1);

export const verifyModelsNextUpdate = (expectedId: number) => {
  if (DEBUG) {
    devVerifyModelsNextUpdate(modelsUpdateCounter + 1, expectedId);
  }
};

export const modelsNextUpdate = (x: number, y = 0, z = 0) => {
  const m = allModels[++modelsUpdateCounter]!.$matrix;
  matrixCopy(identity, m);
  m.m41 = x;
  m.m42 = y;
  m.m43 = z;
  return m;
};
