/** The identity matrix */
export const identity: DOMMatrixReadOnly = /* @__PURE__ */ new DOMMatrix();

export const identityTranslateTop = /* @__PURE__ */ identity.translate(0, 1, 0);

export const identityTranslateBtm = /* @__PURE__ */ identity.translate(0, -1, 0);

export interface Vec2 {
  x: number;
  y: number;
}

export interface Vec3 extends Vec2 {
  x: number;
  y: number;
  z: number;
}

export interface Vec4 extends Vec3 {
  x: number;
  y: number;
  z: number;
  w: number;
}

export interface Plane {
  x: number;
  y: number;
  z: number;
  w: number;
}

export type Vec2In = Readonly<Vec2>;

export type Vec3In = Readonly<Vec3>;

export type Vec4In = Readonly<Vec4>;

export const vec3 = (x: number, y: number, z: number): Vec3 => ({ x, y, z });

export const vec3_clone = ({ x, y, z }: Vec3In) => ({ x, y, z });

export const vec3_length = ({ x, y, z }: Vec3In): number => Math.sqrt(x * x + y * y + z * z);

export const vec3_negate = ({ x, y, z }: Vec3In): Vec3 => ({ x: -x, y: -y, z: -z });

export const vec3_add = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x + bx,
  y: y + by,
  z: z + bz,
});

export const vec3_sub = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: x - bx,
  y: y - by,
  z: z - bz,
});

export const vec4_sub = ({ x, y, z, w }: Vec4In, { x: bx, y: by, z: bz, w: bw }: Vec4In): Vec4 => ({
  x: x - bx,
  y: y - by,
  z: z - bz,
  w: w - bw,
});

export const vec3_distance = (a: Vec3In, b: Vec3In): number => vec3_length(vec3_sub(a, b));

export const vec3_cross = ({ x, y, z }: Vec3In, { x: bx, y: by, z: bz }: Vec3In): Vec3 => ({
  x: y * bz - z * by,
  y: z * bx - x * bz,
  z: x * by - y * bx,
});

export const vec3_scale = ({ x, y, z }: Vec3In, m: number): Vec3 => ({ x: x * m, y: y * m, z: z * m });

export const vec4_scale = ({ x, y, z, w }: Vec4In, m: number): Vec4 => ({ x: x * m, y: y * m, z: z * m, w: w * m });

export const vec4_round = ({ x, y, z, w }: Vec4In): Vec4 => ({
  x: Math.round(x),
  y: Math.round(y),
  z: Math.round(z),
  w: Math.round(w),
});

export const vec3_normalize = (v: Vec3In): Vec3 => vec3_scale(v, 1 / vec3_length(v) || 1);

export const vec3_dot = ({ x, y, z }: Vec3In, b: Vec3In): number => x * b.x + y * b.y + z * b.z;

export const vec3_triangleNormal = ([{ x, y, z }, { x: bx, y: by, z: bz }, { x: cx, y: cy, z: cz }]: readonly [
  Vec3In,
  Vec3In,
  Vec3In,
]) => {
  // b - a
  const bax = bx - x;
  const bay = by - y;
  const baz = bz - z;

  // c - a
  const cax = cx - x;
  const cay = cy - y;
  const caz = cz - z;

  // Cross product
  const nx = bay * caz - baz * cay;
  const ny = baz * cax - bax * caz;
  const nz = bax * cay - bay * cax;

  const nlength = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
  return { x: nx / nlength, y: ny / nlength, z: nz / nlength };
};

export const vec3_trianglePlane = (triangle: readonly [Vec3In, Vec3In, Vec3In]): Vec4 => {
  const result = vec3_triangleNormal(triangle) as Vec4;
  result.w = vec3_dot(result, triangle[0]!);
  return result;
};

// This version would minify better if there was an higher use of other vec3 functions
// export const vec3_triangleNormal = ([a, b, c]: [Vec3, Vec3, Vec3]): Vec3 =>
//  vec3_normalize(vec3_cross(vec3_sub(b, a), vec3_sub(c, a)));

export const mat4_lookAt = (eye: Vec3In, center: Vec3In, up: Vec3In) => {
  const zAxis = vec3_normalize(vec3_sub(center, eye));
  const xAxis = vec3_normalize(vec3_cross(up, zAxis));
  const yAxis = vec3_normalize(vec3_cross(zAxis, xAxis));
  return new DOMMatrix([
    xAxis.x,
    xAxis.y,
    xAxis.z,
    0,
    yAxis.x,
    yAxis.y,
    yAxis.z,
    0,
    zAxis.x,
    zAxis.y,
    zAxis.z,
    0,
    -vec3_dot(xAxis, eye),
    -vec3_dot(yAxis, eye),
    -vec3_dot(zAxis, eye),
    1,
  ]);
};

export const mat4_ortho = (left: number, right: number, bottom: number, top: number, near: number, far: number) => {
  const lr = 1 / (left - right);
  const bt = 1 / (bottom - top);
  const nf = 1 / (near - far);
  return new DOMMatrix([
    -2 * lr,
    0,
    0,
    0,
    0,
    -2 * bt,
    0,
    0,
    0,
    0,
    2 * nf,
    0,
    (left + right) * lr,
    (top + bottom) * bt,
    (far + near) * nf,
    1,
  ]);
};
