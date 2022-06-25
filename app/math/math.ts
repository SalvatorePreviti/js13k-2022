/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_TO_RAD = Math.PI / 180;

/** Amount to be multiplied to an angle in radians to obtain an angle in degrees, approximately 57.29577951308232 */
export const RAD_PER_DEG = 1 / DEG_TO_RAD;

/**
 * Returns the sign of the x, indicating whether x is positive, negative or zero.
 * Returs -1 if x is negative. Returns +1 if x is positive. Returns -0 if x is -0. Returns NaN if x is NaN.
 * @param x The numeric expression to test
 */
export const sign = (x: number): 0 | -1 | 1 => x && (x < 0 ? -1 : 1);

/**
 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 * This is faster than Math.abs
 * @param x A numeric expression for which the absolute value is needed.
 * @returns x < 0 ? -x : x
 */
export const abs = (x: number): number => (x < 0 ? -x : x);

/**
 * Gets the minimum value between two numbers. Accepts only two values and is faster than Math.min.
 * Note, this does not behave like Math.max if NaN is passed and does not accept more than two arguments, but is much faster.
 * @param a First number
 * @param b Second number
 * @returns min(a, b)
 */
export const min = (a: number, b: number | undefined | null): number => (b! < a ? b! : a);

/**
 * Gets the maximum value between two numbers. Accepts only two values and is faster than Math.max.
 * Note, this does not behave like Math.max if NaN is passed and does not accept more than two arguments, but is much faster.
 * @param a First number
 * @param b Second number
 * @returns max(a, b)
 */
export const max = (a: number, b: number | undefined | null): number => (a < b! ? b! : a);

/** Linear interpolation */
export const lerp = (from: number, to: number, t: number) => t * (to - from) + from;

/**
 * Clamps a value between a minimum and a maximum
 * @param value The value to clamp
 * @param minimum The minimum value, default to 0
 * @param maximum The maximum value, default to 1
 * @returns value < minimum ? minimum : value > maximum ? maximum : value
 */
export const clamp = (value: number, minimum: number = 0, maximum: number = 1): number =>
  value < minimum ? minimum : value > maximum ? maximum : value;

export const clamp_distance = (value: number, distance: number) => clamp(value, -distance, distance);

/**
 * Trigonometry - Wrap an angle so it is always between -PI and PI
 * @param radians The angle in radians to wrap between -PI and PI
 * @returns The angle in radians wrapped so it is always between -PI and PI
 */
export const angle_wrap_radians = (radians: number): number => Math.atan2(Math.sin(radians), Math.cos(radians));

export const angle_wrap_degrees = (degrees: number): number => angle_wrap_radians(degrees * DEG_TO_RAD) * RAD_PER_DEG;
