import { hypot } from "../math/math";
import { matrixTransformPoint } from "../math/matrix";
import { player_position_final } from "./world-state";

export const distanceToPlayer = (): number => {
  matrixTransformPoint();
  return hypot(
    player_position_final.x - matrixTransformPoint.x,
    player_position_final.y - matrixTransformPoint.y,
    player_position_final.z - matrixTransformPoint.z,
  );
};
