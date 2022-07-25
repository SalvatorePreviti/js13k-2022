import type { Vec3In } from "./vectors";

/** The identity matrix */
export const identity: DOMMatrixReadOnly = /* @__PURE__ */ new DOMMatrix();

export const identityTranslateTop = /* @__PURE__ */ identity.translate(0, 1, 0);

export const identityTranslateBtm = /* @__PURE__ */ identity.translate(0, -1, 0);

export const DOMMatrix_perspective = (fovyRadians: number, aspect: number, near: number, far: number) => {
  const f = 1 / Math.tan(fovyRadians / 2);
  return new DOMMatrix([
    f / aspect,
    0,
    0,
    0,
    0,
    f,
    0,
    0,
    0,
    0,
    (far + near) / (near - far),
    -1,
    0,
    0,
    (2 * far * near) / (near - far),
    0,
  ]);
};

/** Similar to lookat, up is [0,1,0] and as input we have a center and a direction. Direction is assumed to be normalised. */
export const DOMMatrix_fromDirection = ({ x: dirX, y: dirY, z: dirZ }: Vec3In) =>
  new DOMMatrix([
    dirZ,
    -dirY * dirX,
    dirX,
    0,
    0,
    dirZ * dirZ + dirX * dirX,
    dirY,
    0,
    -dirX,
    -dirY * dirZ,
    dirZ,
    0,
    0,
    0,
    0,
    1,
  ]);
