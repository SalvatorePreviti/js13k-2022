/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = Math.PI / 180;

/** Amount to be multiplied to an angle in radians to obtain an angle in degrees, approximately 57.29577951308232 */
export const RAD_PER_DEG = 1 / DEG_TO_RAD;

/** Linear interpolation */
export const lerp = (from: number, to: number, t: number) => t * (to - from) + from;

/**
 * Trigonometry - Wrap an angle so it is always between -PI and PI
 * @param radians The angle in radians to wrap between -PI and PI
 * @returns The angle in radians wrapped so it is always between -PI and PI
 */
export const angle_wrap_radians = (radians: number): number => Math.atan2(Math.sin(radians), Math.cos(radians));

export const angle_wrap_degrees = (degrees: number): number => angle_wrap_radians(degrees * DEG_TO_RAD) * RAD_PER_DEG;

/** Returns an array of n integers */
export const integers = (n: number) => [...Array(n)].map((_, i) => i);
