import type { Polygon } from "../geometry/polygon";

export interface Model {
  readonly $matrix: DOMMatrix;
  $polygons: Polygon[] | null;
  $vertexBegin?: number;
  $vertexEnd?: number;
}

export interface Lever {
  (): void;
  $matrix: DOMMatrixReadOnly;
  $transform: DOMMatrixReadOnly;
  $value: 0 | 1;
  $lerpValue: number;
  $lerpValue2: number;
}

export interface Soul {
  (): void;
  $value: 0 | 1;
}

export type Circle = [number, number, number];

/** Fixed number of models that have a simple translation transformation */
export const MODELS_WITH_SIMPLE_TRANSFORM = 26;

/** Fixed number of models that have a full transformation matrix */
export const MODELS_WITH_FULL_TRANSFORM = 12;

/** Fixed number of souls */
export const SOULS_COUNT = 13;

/** Fixed number of levers */
export const LEVERS_COUNT = 16;

export const allModels: Model[] = [];

export const levers: Lever[] = [];

export const souls: Soul[] = [];
