import { plane_fromTriangle, type Plane } from "../math/plane";
import type { Polygon, Vertex } from "./cylinder";
import { vertex_lerp } from "./cylinder";

export const PLANE_EPSILON = 1e-5;

type PolygonCategory = typeof COPLANAR | typeof FRONT | typeof BACK | typeof SPANNING;

const COPLANAR = 0;
const FRONT = 1;
const BACK = 2;
const SPANNING = 3;

interface SplitPolygonResult {
  $type: PolygonCategory;
  $back: Polygon | undefined | false;
  $front: Polygon | undefined | false;
}

const classify = (t: number) => (t < -PLANE_EPSILON ? BACK : t > PLANE_EPSILON ? FRONT : COPLANAR);

export const CSGPolygon_split = (
  { x: planeX, y: planeY, z: planeZ, w: planeW }: Plane,
  polygon: Polygon,
): SplitPolygonResult => {
  let $front: Polygon | false | undefined;
  let $back: Polygon | false | undefined;

  const { $points } = polygon;

  let $type = 0 as PolygonCategory;
  for (const { x, y, z } of $points) {
    $type |= classify(x * planeX + y * planeY + z * planeZ - planeW);
  }

  if ($type === FRONT) {
    // FRONT
    $front = polygon;
  } else if ($type === BACK) {
    // BACK
    $back = polygon;
  } else if ($type) {
    // SPANNING
    const f: Vertex[] = [];
    const b: Vertex[] = [];
    const pointsLen = $points.length;
    for (let i = 0; i < pointsLen; ++i) {
      const iv = $points[i]!;
      const jv = $points[(i + 1) % pointsLen]!;
      const { x: ix, y: iy, z: iz } = iv;
      const { x: jx, y: jy, z: jz } = jv;

      const tid = ix * planeX + iy * planeY + iz * planeZ - planeW;
      const ti = classify(tid);

      const tjd = jx * planeX + jy * planeY + jz * planeZ - planeW;
      const tj = classify(tjd);

      if (ti !== BACK) {
        f.push(iv);
      }
      if (ti !== FRONT) {
        b.push(ti !== BACK ? { ...iv } : iv);
      }
      if ((ti | tj) === SPANNING) {
        const v: Vertex = vertex_lerp(iv, jv, -tid / (planeX * (jx - ix) + planeY * (jy - iy) + planeZ * (jz - iz)));

        f.push(v);
        b.push({ ...v });
      }
    }
    $front = f.length > 2 && { ...polygon, $points: f };
    $back = b.length > 2 && { ...polygon, $points: b };
  } else {
    const p = plane_fromTriangle({}, $points[0]!, $points[1]!, $points[2]!);

    if (p.x * planeX + p.y * planeY + p.z * planeZ - planeW > 0) {
      // COPLANAR front
      $front = polygon;
    } else {
      // COPLANAR back
      $back = polygon;
    }
  }

  return { $front, $back, $type };
};
