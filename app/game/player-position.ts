import type { Vec3 } from "../math";

export const player_position_initial: Vec3 = {
  x: 0,
  y: 10,
  z: -27,
};

export const player_position_global: Vec3 = { ...player_position_initial };

export const player_position_final: Vec3 = { ...player_position_initial };
