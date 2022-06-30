import type { Vec3 } from "../math/vectors";

export type Material = [number, number, number];

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

export const vertex_lerp = ({ x, y, z, $nx, $ny, $nz }: Vertex, b: Vertex, t: number): Vertex => ({
  x: (b.x - x) * t + x,
  y: (b.y - y) * t + y,
  z: (b.z - z) * t + z,
  $nx: (b.$nx - $nx) * t + $nx,
  $ny: (b.$ny - $ny) * t + $ny,
  $nz: (b.$nz - $nz) * t + $nz,
});
