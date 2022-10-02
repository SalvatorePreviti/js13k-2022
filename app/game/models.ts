import type { Polygon } from "../geometry/polygon";
import type { Vec3 } from "../math/vectors";

export interface Model {
  readonly $matrix: DOMMatrix;
  $kind: MODEL_KIND;
  $polygons: Polygon[] | null;
  $vertexBegin?: number;
  $vertexEnd?: number;
}

export interface Lever {
  $value: 0 | 1;
  $lerpValue: number;
  $lerpValue2: number;
  $matrix: DOMMatrixReadOnly;
  $transform: DOMMatrixReadOnly;
  _update: () => void;
}

export interface Soul {
  $value: 0 | 1;
  readonly _update: () => void;
}

export type Circle = [number, number, number];

/** Fixed number of souls */
export const SOULS_COUNT = 13;

/** Fixed number of levers */
export const LEVERS_COUNT = 16;

export const souls: Soul[] = [];

export const levers: Lever[] = [];

export const allModels: Model[] = [];

export const player_position_final: Vec3 = {
  x: 0,
  y: 0,
  z: 0,
};

export const MODEL_KIND_MESH = 0;

export const MODEL_KIND_GAME = 1;

export const MODEL_KIND_GAME_NO_ATTACH_PLAYER = 2;

export type MODEL_KIND = typeof MODEL_KIND_MESH | typeof MODEL_KIND_GAME | typeof MODEL_KIND_GAME_NO_ATTACH_PLAYER;

export const MODEL_ID_STATIC_WORLD = 1;

export const MODEL_ID_FIRST_BOAT = 2;

export const MODEL_ID_ROTATING_PLATFORM = 28;

export const MODEL_ID_PLAYER_BODY = 37;

export const MODEL_ID_PLAYER_LEG0 = 38;

export const MODEL_ID_PLAYER_LEG1 = 39;

export const MODEL_ID_LEVER = 40;

export const MODEL_ID_SOUL_COLLISION = 41;

export const MODEL_ID_SOUL = 42;
