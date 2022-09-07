/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = Math.PI / 180;

export const TWO_PI = Math.PI * 2;

export const min = /* @__PURE__ */ (a: number, b: number) => (a < b ? a : b);

export const max = /* @__PURE__ */ (a: number, b: number) => (a > b ? a : b);

export const abs = /* @__PURE__ */ (n: number) => (n < 0 ? -n : n);

export const clamp01 = /* @__PURE__ */ (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

/** Linear interpolation */
export const lerp = /* @__PURE__ */ (from: number, to: number, t: number) => from + (to - from) * clamp01(t);

export const lerpneg = /* @__PURE__ */ (v: number, t: number) => {
  v = clamp01(v);
  return lerp(v, 1 - v, t);
};

/**
 * Trigonometry - Wrap an angle so it is always between -PI and PI
 * @param radians The angle in radians to wrap between -PI and PI
 * @returns The angle in radians wrapped so it is always between -PI and PI
 */
export const angle_wrap_radians = /* @__PURE__ */ (radians: number): number =>
  Math.atan2(Math.sin(radians), Math.cos(radians));

export const angle_wrap_degrees = /* @__PURE__ */ (degrees: number): number =>
  angle_wrap_radians(degrees * DEG_TO_RAD) / DEG_TO_RAD;

export const angle_lerp = /* @__PURE__ */ (a0: number, a1: number, t: number) => {
  const da = (a1 - a0) % (Math.PI * 2);
  return a0 + (((2 * da) % (Math.PI * 2)) - da) * clamp01(t);
};

export const angle_lerp_degrees = /* @__PURE__ */ (a0: number, a1: number, t: number) =>
  angle_lerp(a0 * DEG_TO_RAD, a1 * DEG_TO_RAD, t) / DEG_TO_RAD;

export const interpolate_with_hysteresis = /* @__PURE__ */ (
  previous: number,
  desired: number,
  hysteresis: number,
  t: number,
) =>
  lerp(
    previous + Math.sign(desired - previous) * max(0, abs(desired - previous) ** 0.9 - hysteresis) * t * 2,
    desired,
    t / 7,
  );

export const integers_map = <T>(n: number, fn: (i: number) => T) => Array.from(Array(n), (_, i) => fn(i));
