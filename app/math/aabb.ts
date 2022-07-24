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
  aabb.$minX = Math.min(aabb.$minX, x);
  aabb.$maxX = Math.max(aabb.$maxX, x);
  aabb.$minY = Math.min(aabb.$minY, y);
  aabb.$maxY = Math.max(aabb.$maxY, y);
  aabb.$minZ = Math.min(aabb.$minZ, z);
  aabb.$maxZ = Math.max(aabb.$maxZ, z);
};
