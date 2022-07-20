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

export const vec4 = (x: number, y: number, z: number, w: number): Vec4 => ({ x, y, z, w });

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

export const vec3_distance = (a: Vec3In, b: Vec3In): number => vec3_length(vec3_sub(b, a));

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
  let x0;
  let x1;
  let x2;
  let y0;
  let y1;
  let y2;
  let z0;
  let z1;
  let z2;
  let len;
  const eyex = eye.x;
  const eyey = eye.y;
  const eyez = eye.z;
  const upx = up.x;
  const upy = up.y;
  const upz = up.z;
  const centerx = center.x;
  const centery = center.y;
  const centerz = center.z;

  // if (
  //   Math.abs(eyex - centerx) < glMatrix.EPSILON &&
  //   Math.abs(eyey - centery) < glMatrix.EPSILON &&
  //   Math.abs(eyez - centerz) < glMatrix.EPSILON
  // ) {
  //   return identity(out);
  // }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.hypot(y0, y1, y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  return new DOMMatrix([
    x0,
    y0,
    z0,
    0,
    x1,
    y1,
    z1,
    0,
    x2,
    y2,
    z2,
    0,
    -(x0 * eyex + x1 * eyey + x2 * eyez),
    -(y0 * eyex + y1 * eyey + y2 * eyez),
    -(z0 * eyex + z1 * eyey + z2 * eyez),
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

export const mat4_perspective = (fovyRadians: number, aspect: number, near: number, far: number) => {
  const f = 1 / Math.tan(fovyRadians / 2);
  const nf = near - far;
  return new DOMMatrix([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) / nf, -1, 0, 0, (2 * far * near) / nf, 0]);
};
