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

export const MODEL_ID_STATIC_WORLD = 1;

export const MODEL_ID_FIRST_BOAT = 2;

export const MODEL_ID_ROTATING_PLATFORM = 28;

export const MODEL_ID_PLAYER_BODY = 37;

export const MODEL_ID_PLAYER_LEG0 = 38;

export const MODEL_ID_PLAYER_LEG1 = 39;

export const MODEL_ID_SOUL_COLLISION = 40;

export const MODEL_ID_SOUL = 41;

export const MODEL_ID_LEVER = 42;
