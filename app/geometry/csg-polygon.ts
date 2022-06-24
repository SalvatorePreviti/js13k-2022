import { plane_fromTriangle, type Plane } from "../math/plane";
import type { Vec3, Vec3In } from "../math/vectors";
import type { Polygon } from "./cylinder";

export interface CSGPolygon extends Polygon, Plane {}

export const CSGPolygon_new = (polygon: Polygon) =>
  plane_fromTriangle(
    { ...polygon, $points: polygon.$points.slice() } as CSGPolygon,
    polygon.$points[0]!,
    polygon.$points[1]!,
    polygon.$points[2]!,
  );

export const PLANE_EPSILON = 1e-5;

type PolygonCategory = typeof COPLANAR | typeof FRONT | typeof BACK | typeof SPANNING;

const COPLANAR = 0;
const FRONT = 1;
const BACK = 2;
const SPANNING = 3;

interface SplitPolygonResult {
  $type: PolygonCategory;
  $back: CSGPolygon | undefined | false;
  $front: CSGPolygon | undefined | false;
}

export const CSGPolygon_split = (
  { x: planeX, y: planeY, z: planeZ, w: planeW }: Plane,
  polygon: CSGPolygon,
): SplitPolygonResult => {
  let $front: CSGPolygon | false | undefined;
  let $back: CSGPolygon | false | undefined;

  const { $points } = polygon;

  let $type = 0 as PolygonCategory;
  for (const { x, y, z } of $points) {
    const t = x * planeX + y * planeY + z * planeZ - planeW;
    $type |= t < -PLANE_EPSILON ? BACK : t > PLANE_EPSILON ? FRONT : COPLANAR;
  }

  if ($type === FRONT) {
    // FRONT
    $front = polygon;
  } else if ($type === BACK) {
    // BACK
    $back = polygon;
  } else if ($type) {
    // SPANNING
    const f: Vec3[] = [];
    const b: Vec3[] = [];
    const pointsLen = $points.length;
    for (let i = 0; i < pointsLen; ++i) {
      const iv = $points[i]!;
      const { x: ix, y: iy, z: iz } = iv;
      const { x: jx, y: jy, z: jz } = $points[(i + 1) % pointsLen]!;

      const tid = ix * planeX + iy * planeY + iz * planeZ - planeW;
      const ti = tid < -PLANE_EPSILON ? BACK : tid > PLANE_EPSILON ? FRONT : COPLANAR;

      const tjd = jx * planeX + jy * planeY + jz * planeZ - planeW;
      const tj = tjd < -PLANE_EPSILON ? BACK : tjd > PLANE_EPSILON ? FRONT : COPLANAR;

      if (ti !== BACK) {
        f.push(iv);
      }
      if (ti !== FRONT) {
        b.push(ti !== BACK ? { x: ix, y: iy, z: iz } : iv);
      }
      if ((ti | tj) === SPANNING) {
        const t = -tid / (planeX * (jx - ix) + planeY * (jy - iy) + planeZ * (jz - iz));
        // Lerp of i and j vertices
        const vx = t * (jx - ix) + ix;
        const vy = t * (jy - iy) + iy;
        const vz = t * (jz - iz) + iz;
        f.push({ x: vx, y: vy, z: vz });
        b.push({ x: vx, y: vy, z: vz });
      }
    }
    $front = f.length > 2 && { ...polygon, $points: f };
    $back = b.length > 2 && { ...polygon, $points: b };
  } else if (polygon.x * planeX + polygon.y * planeY + polygon.z * planeZ - planeW > 0) {
    // COPLANAR front
    $front = polygon;
  } else {
    // COPLANAR back
    $back = polygon;
  }

  return { $front, $back, $type };
};
