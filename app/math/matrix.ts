/** The identity matrix */
export const identity: DOMMatrixReadOnly = /* @__PURE__ */ new DOMMatrix();

export const mat_perspectiveXY = /* @__PURE__ */ (mx: number, my: number, near: number, far: number) => [
  mx,
  0,
  0,
  0,
  0,
  my,
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
];
