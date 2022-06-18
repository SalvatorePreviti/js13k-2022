import { clamp, pow2, sqrt } from "../math/math";
import {
  vec3_add,
  vec3_add_scalar,
  vec3_max,
  vec3_mid,
  vec3_min,
  vec3_new,
  vec3_set,
  vec3_clamp,
  vec3_sub,
  vec3_sub_scalar,
} from "../math/vectors";

export interface AABB {
  $min: Vec3;
  $max: Vec3;
}

export const AABB_new = (): AABB => ({ $min: vec3_new(), $max: vec3_new() });

export const AABB_fromCenterSize = (
  { $min, $max }: AABB,
  { x: cx, y: cy, z: cz }: Vec3In,
  { x: sizeX, y: sizeY, z: sizeZ }: Vec3In,
) => {
  sizeX /= 2;
  sizeY /= 2;
  sizeZ /= 2;
  vec3_set($min, cx - sizeX, cy - sizeY, cz - sizeZ);
  vec3_set($max, cx + sizeX, cy + sizeY, cz + sizeZ);
};

export const AABB_getCenter = (out: Vec3Out, { $min, $max }: AABB) => vec3_mid(out, $min, $max);

export const AABB_getSize = (out: Vec3Out, { $min, $max }: AABB) => vec3_sub(out, $max, $min);

export const AABB_getRadius = ({ $min: { x: minX, y: minY, z: minZ }, $max: { x: maxX, y: maxY, z: maxZ } }: AABB) =>
  sqrt(pow2(maxX - minX) + pow2(maxY - minY) + pow2(maxZ - minZ)) / 2;

export const AABB_union = ({ $min, $max }: AABB, { $min: otherMin, $max: otherMax }: AABB) => {
  vec3_min($min, $min, otherMin);
  vec3_max($max, $max, otherMax);
};

export const AABB_addPoint = ({ $min, $max }: AABB, point: Vec3In) => {
  vec3_min($min, $min, point);
  vec3_max($max, $max, point);
};

export const AABB_addVector = ({ $min, $max }: AABB, scalar: number) => {
  vec3_sub_scalar($min, $min, scalar);
  vec3_add_scalar($max, $max, scalar);
};

export const AABB_addScalar = ({ $min, $max }: AABB, vector: Vec3In) => {
  vec3_sub($min, $min, vector);
  vec3_add($max, $max, vector);
};

export const AABB_pointInside = (
  { $min: { x: minX, y: minY, z: minZ }, $max: { x: maxX, y: maxY, z: maxZ } }: AABB,
  x: number,
  y: number,
  z: number,
) => x >= minX && x <= maxX && y >= minY && y <= maxY && z >= minZ && z <= maxZ;

export const AABB_intersectsAABB = (
  { $min: { x: AminX, y: AminY, z: AminZ }, $max: { x: AmaxX, y: AmaxY, z: AmaxZ } }: AABB,
  { $min: { x: BminX, y: BminY, z: BminZ }, $max: { x: BmaxX, y: BmaxY, z: BmaxZ } }: AABB,
) => AminX <= BmaxX && AmaxX >= BminX && AminY <= BmaxY && AmaxY >= BminY && AminZ <= BmaxZ && AmaxZ >= BminZ;

export const AABB_clampPoint = (out: Vec3, { $min, $max }: AABB, point: Vec3In) => vec3_clamp(out, point, $min, $max);

export const AABB_intersectsSphere = (
  { $min: { x: minX, y: minY, z: minZ }, $max: { x: maxX, y: maxY, z: maxZ } }: AABB,
  x: number,
  y: number,
  z: number,
  radius: number,
) =>
  pow2(clamp(x, minX, maxX) - x) + pow2(clamp(y, minY, maxY) - y) + pow2(clamp(z, minZ, maxZ) - z) <= radius * radius;

export const AABB_pointDistance = (
  { $min: { x: minX, y: minY, z: minZ }, $max: { x: maxX, y: maxY, z: maxZ } }: AABB,
  x: number,
  y: number,
  z: number,
): number => sqrt(pow2(clamp(x, minX, maxX) - x) + pow2(clamp(y, minY, maxY) - y) + pow2(clamp(z, minZ, maxZ) - z));
