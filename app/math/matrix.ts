/** The identity matrix */
export const identity: DOMMatrixReadOnly = /* @__PURE__ */ new DOMMatrix();

export const identityTranslateTop = /* @__PURE__ */ identity.translate(0, 1, 0);

export const identityTranslateBtm = /* @__PURE__ */ identity.translate(0, -1, 0);
