import type { Vec3 } from "../math/vectors";

export type Material = number;

export interface Vertex extends Vec3 {
  /** Vertex normal X */
  $nx: number;
  /** Vertex normal Y */
  $ny: number;
  /** Vertex normal Z */
  $nz: number;
}

export const vertex_clone = ({ x, y, z, $nx, $ny, $nz }: Vertex) => ({ x, y, z, $nx, $ny, $nz });

export const vertex_flipped = ({ x, y, z, $nx, $ny, $nz }: Vertex) => ({ x, y, z, $nx: -$nx, $ny: -$ny, $nz: -$nz });

export const vertex_lerp = (
  { x, y, z, $nx, $ny, $nz }: Vertex,
  b: Vertex,
  posLerp: number,
  normalLerp: number = posLerp,
): Vertex => ({
  x: (b.x - x) * posLerp + x,
  y: (b.y - y) * posLerp + y,
  z: (b.z - z) * posLerp + z,
  $nx: (b.$nx - $nx) * normalLerp + $nx,
  $ny: (b.$ny - $ny) * normalLerp + $ny,
  $nz: (b.$nz - $nz) * normalLerp + $nz,
});
