if (DEBUG) {
  window.NO_INLINE = (fn) => fn;
}

/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = Math.PI / 180;

export const abs = NO_INLINE((a: number) => (a < 0 ? -a : a));

export const min = NO_INLINE((a: number, b: number) => (a < b ? a : b));

export const max = NO_INLINE((a: number, b: number) => (a > b ? a : b));

export const threshold = (value: number | undefined, amount: number) => (abs(value!) > amount ? value! : 0);

export const clamp = (value: number, minValue: number = 0, maxValue: number = 1) =>
  value < minValue ? minValue : value > maxValue ? maxValue : value;

export const angle_wrap_degrees = (degrees: number): number =>
  Math.atan2(Math.sin(degrees * DEG_TO_RAD), Math.cos(degrees * DEG_TO_RAD)) / DEG_TO_RAD;

export const angle_lerp_degrees = (a0: number, a1: number, t: number) => {
  const da = (a1 - a0) % 360;
  return a0 + (((2 * da) % 360) - da) * clamp(t) || 0;
};

/** Linear interpolation */
export const lerp = (a: number | undefined, b: number | undefined, t: number) =>
  (t <= 0 ? a : t >= 1 ? b : a! + (b! - a!) * t) || 0;

export const hypot = (a: number, b: number, c: number = 0) => (a * a + b * b + c * c) ** 0.5;
