if (DEBUG) {
  window.NO_INLINE = (fn) => fn;
}

/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = /* @__PURE__ */ Math.PI / 180;

export const abs = /* @__PURE__ */ NO_INLINE((a: number) => (a < 0 ? -a : a));

export const min = /* @__PURE__ */ NO_INLINE((a: number, b: number) => (a < b ? a : b));

export const max = /* @__PURE__ */ NO_INLINE((a: number, b: number) => (a > b ? a : b));

export const threshold = /* @__PURE__ */ (value: number | undefined, amount: number) =>
  abs(value!) > amount ? value! : 0;

export const clamp = /* @__PURE__ */ (value: number, minValue: number = 0, maxValue: number = 1) =>
  value < minValue ? minValue : value > maxValue ? maxValue : value;

export const angle_wrap_degrees = /* @__PURE__ */ (degrees: number): number =>
  Math.atan2(Math.sin(degrees * DEG_TO_RAD), Math.cos(degrees * DEG_TO_RAD)) / DEG_TO_RAD;

export const angle_lerp_degrees = /* @__PURE__ */ (a0: number, a1: number, t: number) => {
  const da = (a1 - a0) % 360;
  return a0 + (((2 * da) % 360) - da) * clamp(t) || 0;
};

/** Linear interpolation */
export const lerp =
  /* @__PURE__ */
  (a: number, b: number, t: number) => (t <= 0 ? a : t >= 1 ? b : a + (b - a) * t) || 0;

export const lerpneg = (v: number, t: number) => /* @__PURE__ */ {
  v = clamp(v);
  return lerp(v, 1 - v, t);
};

export const hypot = /* @__PURE__ */ (a: number, b: number, c: number = 0) => Math.sqrt(a * a + b * b + c * c);
