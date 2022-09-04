import type { Vec3 } from "./math/vectors";

export const PLAYER_MODEL_ID = 2;

export const player_position_global: Vec3 = {
  x: -1,
  y: 15,
  z: 13,
};

// export const player_position_global: Vec3 = {
//   x: -90,
//   y: 15,
//   z: 105,
// };

export const player_position_final: Vec3 = { ...player_position_global };
