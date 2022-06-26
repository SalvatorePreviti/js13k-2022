export interface Vertex {
  x: number;
  y: number;
  z: number;
  f: number;
  g: number;
  h: number;
}

export const vertex_transform = ({ x, y, z, f, g, h }: Vertex, m: DOMMatrix): Vertex => {
  const { x: px, y: py, z: pz } = m.transformPoint({ x, y, z });
  const { x: nx, y: ny, z: nz } = m.transformPoint({ x: f, y: g, z: h, w: 0 });
  return { x: px, y: py, z: pz, f: nx, g: ny, h: nz };
};

export const vertex_lerp = ({ x, y, z, f, g, h }: Vertex, b: Vertex, t: number): Vertex => ({
  x: t * (b.x - x) + x,
  y: t * (b.y - y) + y,
  z: t * (b.z - z) + z,
  f: t * (b.f - f) + f,
  g: t * (b.g - g) + g,
  h: t * (b.h - h) + h,
});

export const vertex_flipped = ({ x, y, z, f, g, h }: Vertex): Vertex => ({
  x,
  y,
  z,
  f: -f,
  g: -g,
  h: -h,
});

export const vertex_translated = (
  { x, y, z, f, g, h }: Vertex,
  tx: number,
  ty: number = 0,
  tz: number = 0,
): Vertex => ({
  x: x + tx,
  y: y + ty,
  z: z + tz,
  f,
  g,
  h,
});
