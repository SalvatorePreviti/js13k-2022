/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = Math.PI / 180;

/** Linear interpolation */
export const lerp = (from: number, to: number, t: number) => t * (to - from) + from;

/**
 * Trigonometry - Wrap an angle so it is always between -PI and PI
 * @param radians The angle in radians to wrap between -PI and PI
 * @returns The angle in radians wrapped so it is always between -PI and PI
 */
export const angle_wrap_radians = (radians: number): number => Math.atan2(Math.sin(radians), Math.cos(radians));

export const angle_wrap_degrees = (degrees: number): number => angle_wrap_radians(degrees * DEG_TO_RAD) / DEG_TO_RAD;

export const integers_map = <T>(n: number, fn: (i: number) => T) => Array.from(Array(n), (_, i) => fn(i));

export const integers_array = (n: number) => Array.from(Array(n), (_, i) => i);

export const integers_each = (n: number, fn: (i: number) => void) => {
  for (let i = 0; i < n; ++i) {
    fn(i);
  }
};
