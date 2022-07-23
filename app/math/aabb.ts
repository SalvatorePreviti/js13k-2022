import { max, min } from "./math";

export interface AABB {
  $minX: number;
  $minY: number;
  $minZ: number;
  $maxX: number;
  $maxY: number;
  $maxZ: number;
}

export const aabb_new = (): AABB => ({
  $minX: Infinity,
  $minY: Infinity,
  $minZ: Infinity,
  $maxX: -Infinity,
  $maxY: -Infinity,
  $maxZ: -Infinity,
});

export const aabb_addPoint = (aabb: AABB, x: number, y: number, z: number): void => {
  aabb.$minX = min(aabb.$minX, x);
  aabb.$maxX = max(aabb.$maxX, x);
  aabb.$minY = min(aabb.$minY, y);
  aabb.$maxY = max(aabb.$maxY, y);
  aabb.$minZ = min(aabb.$minZ, z);
  aabb.$maxZ = max(aabb.$maxZ, z);
};
