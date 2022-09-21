import type { Vec3 } from "../math";
import type { Polygon } from "../geometry/geometry";

export interface Model {
  $matrix: DOMMatrixReadOnly;
  $modelId: number;
  $kind: MODEL_KIND;
  $polygons: Polygon[] | null;
  _update?: (model: Model) => DOMMatrixReadOnly;
  $vertexBegin?: number;
  $vertexEnd?: number;
}

export interface Lever {
  $value: 0 | 1;
  $lerpValue: number;
  $lerpValue2: number;
  $parent: Model;
  _update: () => void;
  $matrix?: DOMMatrixReadOnly;
  $locMatrix?: DOMMatrixReadOnly;
}

export interface Soul {
  $value: 0 | 1;
  _update: () => void;
  $matrix?: DOMMatrixReadOnly;
}

export type Circle = [number, number, number];

export const allModels: Model[] = [];

export const levers: Lever[] = [];

export const souls: Soul[] = [];

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

export const MODEL_ID_PLAYER_BODY = 37;

export const MODEL_ID_PLAYER_LEG0 = 38;

export const MODEL_ID_PLAYER_LEG1 = 39;

export const MODEL_ID_LEVER = 40;

export const MODEL_ID_SOUL_COLLISION = 41;

export const MODEL_ID_SOUL = 42;
