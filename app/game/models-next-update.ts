import { allModels } from "./models";
import { matrixCopy, identity } from "../math/matrix";

export let modelsUpdateCounter: number;

export const modelsResetUpdateCounter = () => (modelsUpdateCounter = 1);

export const modelsNextUpdate = () => matrixCopy(identity, allModels[++modelsUpdateCounter]!.$matrix);
