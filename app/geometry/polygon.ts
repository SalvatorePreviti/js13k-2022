import { matrixCopy, matrixTransformPoint } from "../math/matrix";
import type { Vec3, Vec3Optional } from "../math/vectors";

export interface Polygon<TVec3 = Vec3> extends Array<TVec3> {
  /** Polygon material */
  $color?: number | undefined;

  /** Smooth normals? */
  $smooth?: 0 | 1 | undefined;
}

export const polygon_color = (polygon: Polygon, color: number | undefined, smooth?: 0 | 1 | undefined): Polygon => {
  polygon.$smooth = smooth;
  polygon.$color = color;
  return polygon;
};

export const polygon_transform = (
  polygon: Polygon<Readonly<Vec3Optional>>,
  m: DOMMatrixReadOnly,
  color: number | undefined = polygon.$color,
): Polygon => {
  matrixCopy(m);

  return polygon_color(
    polygon.map(({ x, y, z }) => {
      matrixTransformPoint(x, y, z);
      return { x: matrixTransformPoint.x, y: matrixTransformPoint.y, z: matrixTransformPoint.z };
    }),
    color,
    polygon.$smooth,
  );
};

export const polygons_transform = (
  polygons: Polygon<Readonly<Vec3Optional>>[],
  m: DOMMatrixReadOnly,
  color?: number | undefined,
) => polygons.map((polygon) => polygon_transform(polygon, m, color));
