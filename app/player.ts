import type { Vec3 } from "./math/vectors";

export const PLAYER_MODEL_ID = 2;

export const player_position_global: Vec3 = {
  x: 14,
  y: 6,
  z: -1,
};

export const player_position_final: Vec3 = { ...player_position_global };
