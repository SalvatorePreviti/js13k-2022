import { LEVERS_COUNT, SOULS_COUNT } from "./models";

export const worldMatricesBuffer = new Float32Array(38 * 16);

export const objectsMatricesBuffer = new Float32Array((SOULS_COUNT + LEVERS_COUNT) * 16);
