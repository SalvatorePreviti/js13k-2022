import type { Polygon } from "../geometry/polygon";

export interface Model {
  readonly $matrix: DOMMatrix;
  $polygons: Polygon[] | null;
  $vertexBegin?: number;
  $vertexEnd?: number;
}

export interface Lever {
  readonly $matrix: DOMMatrixReadOnly;
  readonly $transform: DOMMatrixReadOnly;
  readonly _update: () => void;
  $value: 0 | 1;
  $lerpValue: number;
  $lerpValue2: number;
}

export interface Soul {
  readonly _update: () => void;
  $value: 0 | 1;
}

export type Circle = [number, number, number];

/** Fixed number of souls */
export const SOULS_COUNT = 13;

/** Fixed number of levers */
export const LEVERS_COUNT = 16;

export const souls: Soul[] = [];

export const levers: Lever[] = [];

export const allModels: Model[] = [];
