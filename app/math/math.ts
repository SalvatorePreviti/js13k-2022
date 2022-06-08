export const {
  /**
   * Returns true if passed value is finite.
   * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a
   * number. Only finite values of the type number, result in true.
   */
  isFinite,

  /** Returns true if the value passed is an integer, false otherwise. */
  isInteger,

  /**
   * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a
   * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
   * to a number. Only values of the type number, that are also NaN, result in true.
   */
  isNaN,

  /** Returns true if the value passed is a safe integer. A safe integer has 53 bit precision. */
  isSafeInteger,

  /** Converts a string to a floating-point number. */
  parseFloat,

  /** Converts A string to an integer. Radix is optional and is default 10. */
  parseInt,

  /** The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a Number value, approximately 2.2204460492503130808472633361816 x 10‍−‍16. */
  EPSILON,

  /** The largest number that can be represented in JavaScript, approximately 1.79E+308. */
  MAX_VALUE,
} = /* @__PURE__ */ Number;

export const {
  /** The mathematical constant e. This is Euler's number, the base of natural logarithms, approximately 2.718281828459045 */
  E: EULER,

  /** The natural logarithm of 10, approximately 2.302585092994046 */
  LN10,

  /** The natural logarithm of 2, approximately 0.6931471805599453 */
  LN2,

  /** The base-2 logarithm of e, approximately 0.4342944819032518 */
  LOG10E,

  /** The base-10 logarithm of e, approximately 1.4426950408889634 */
  LOG2E,

  /** Pi. This is the ratio of the circumference of a circle to its diameter, approximately 3.141592653589793 */
  PI,

  /** The square root of 0.5, or, equivalently, one divided by the square root of 2, approximately 0.7071067811865476 */
  SQRT1_2,

  /** The square root of 2, approximately 1.4142135623730951 */
  SQRT2,

  /** Returns the arc cosine of a number. Returns NaN if the given number is less than -1 or greater than 1, use acos_safe as a safe alternative. */
  acos,

  /** Returns the inverse hyperbolic cosine of a number. */
  acosh,

  /** Returns the arc sine (or inverse sin) of a number. Returns NaN if the given number is less than -1 or greater than 1, use asin_safe as a safe alternative. */
  asin,

  /** Returns the inverse hyperbolic sine of a number. */
  asinh,

  /** Returns the arctangent of a number. */
  atan,

  /** Returns the inverse hyperbolic tangent of a number. */
  atanh,

  /** Returns the angle (in radians) from the X axis to a point. It gets X and Y coordinates as arguments. */
  atan2,

  /** Returns the smallest integer greater than or equal to its numeric argument. */
  ceil,

  /** Returns an implementation-dependent approximation to the cube root of number. */
  cbrt,

  /**
   * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
   * subtracting 1 from the exponential function of x (e raised to the power of x, where e
   * is the base of the natural logarithms).
   */
  expm1,

  /** Returns the number of leading zero bits in the 32-bit binary representation of a number. */
  clz32: int32_clz,

  /** Returns the cosine of an angle in radians. */
  cos,

  /** Returns the hyperbolic cosine of a number. */
  cosh,

  /** Returns e (the base of natural logarithms) raised to a power. */
  exp,

  /** Returns the greatest integer less than or equal to its numeric argument. */
  floor,

  /** Returns the nearest single precision float representation of a number. */
  fround,

  /** Returns the square root of the sum of squares of its arguments. */
  hypot,

  /** Returns the result of 32-bit multiplication of two numbers. */
  imul: int32_mul,

  /** Returns the larger of a set of supplied numeric expressions. */
  log,

  /** Returns the natural logarithm of 1 + x. */
  log1p,

  /** Returns the base 2 logarithm of a number. */
  log2,

  /** Returns the base 10 logarithm of a number. */
  log10,

  /** Returns the larger of a set of supplied numeric expressions. */
  max: mathMax,

  /** Returns the smaller of a set of supplied numeric expressions. */
  min: mathMin,

  /** Returns a pseudorandom number between 0 and 1. */
  random: mathRandom,

  /** Returns a supplied numeric expression rounded to the nearest integer. */
  round,

  /** Returns the sine of a number. */
  sin,

  /** Returns the hyperbolic sine of a number. */
  sinh,

  /** Returns the square root of a number. */
  sqrt,

  /** Returns the tangent of a number. */
  tan,

  /** Returns the hyperbolic tangent of a number. */
  tanh,

  /** Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x. */
  trunc,
} = /* @__PURE__ */ Math;

/** A value that is not a number. In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function, 0/0 */
// eslint-disable-next-line no-shadow-restricted-names
export const NaN = /* @__PURE__ */ 0 / 0;

// eslint-disable-next-line no-shadow-restricted-names
export const Infinity = /* @__PURE__ */ 1 / 0;

/** Maximum value of an 8 bit unsigned integer, 255 */
export const UINT8_MAX_VALUE = /* @__PURE__ */ 255;

/** Maximum value of an 8 bit unsigned integer, 65525 */
export const UINT16_MAX_VALUE = /* @__PURE__ */ 65525;

/** Maximum value of an 8 bit unsigned integer, 4294967295 */
export const UINT32_MAX_VALUE = /* @__PURE__ */ 4294967295;

/** Maximum value of a 32 bit signed integer, 2147483647 */
export const INT32_MAX_VALUE = /* @__PURE__ */ 2147483647;

/** Minimum value of a 32 bit signed integer, -2147483648 */
export const INT32_MIN_NEGATIVE_VALUE = /* @__PURE__ */ -2147483648;

/** Maximum value of an 8 bit signed integer, 127 */
export const INT8_MAX_VALUE = /* @__PURE__ */ 127;

/** Minimum value of an 8 bit signed integer, -128 */
export const INT8_MIN_NEGATIVE_VALUE = /* @__PURE__ */ -128;

/** Maximum value of a 16 bit signed integer, 32767 */
export const INT16_MAX_VALUE = /* @__PURE__ */ 32767;

/** Minimum value of a 16 bit signed integer, -32768 */
export const INT16_MIN_NEGATIVE_VALUE = /* @__PURE__ */ -32768;

/** The answer to life the universe and everything, 42 */
export const LIFE_THE_UNIVERSE_AND_EVERYTHING = /* @__PURE__ */ 42;

/** The value of the largest integer n such that n and n + 1 are both exactly representable as a Number value. The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1. */
export const MAX_SAFE_INTEGER = /* @__PURE__ */ 2 ** 53 - 1;

/** The closest number to zero that can be represented in JavaScript, approximately 5.00E-324. */
export const MIN_POSITIVE_VALUE = /* @__PURE__ */ 5e-324;

/** The smallest negative number that can be represented in JavaScript, approximately -1.7976931348623157e+308. */
export const MIN_NEGATIVE_VALUE = /* @__PURE__ */ -MAX_VALUE;

/** A tolerance value that is good in most circumstances for numbers. 0.0000001 */
export const DEFAULT_TOLERANCE = /* @__PURE__ */ 1e-7;

/** The value of FLOAT_EPSILON is the difference between 1 and the smallest value greater than 1 that is representable as a 32 bit floatig point value, approximately 1.1920928955078125e-7. */
export const FLOAT_EPSILON = /* @__PURE__ */ 2 ** -23;

/** The maximum positive value that can be represented in a 32 bit float, approximately 3.4028234663852886e+38. */
export const FLOAT_MAX_VALUE = /* @__PURE__ */ (2 - FLOAT_EPSILON) * 2 ** 127;

/** The closest number to zero that can be represented in a 32 bit float, approximately 1.17549435082228750797e-38. */
export const FLOAT_MIN_POSITIVE_VALUE = /* @__PURE__ */ 2 ** -126;

/** The minimum negative number that can be represented as a 32 bit float, approximately -3.4028234663852886e+38. */
export const FLOAT_MIN_NEGATIVE_VALUE = /* @__PURE__ */ -FLOAT_MAX_VALUE;

/** A value greater than the largest number that can be represented in JavaScript. JavaScript displays POSITIVE_INFINITY values as infinity, 1/0 */
export const POSITIVE_INFINITY = /* @__PURE__ */ 1 / 0;

/** A value that is less than the largest negative number that can be represented in JavaScript. JavaScript displays NEGATIVE_INFINITY values as -infinity, -1/0 */
export const NEGATIVE_INFINITY = /* @__PURE__ */ -1 / 0;

/** 1 divided by PI, approximately 0.3183098861837907 */
export const INV_PI = /* @__PURE__ */ 1 / PI;

/** Two times Pi. This is the ratio of the circumference of a circle to its ray, approximately 6.283185307179586 */
export const TWO_PI = /* @__PURE__ */ PI * 2;

/** Pi divided by 2, approximately 1.5707963267948966 */
export const PI_OVER_TWO = /* @__PURE__ */ PI / 2;

/** Pi divided by 3, approximately 1.0471975511965976 */
export const PI_OVER_THREE = /* @__PURE__ */ PI / 3;

/** Pi divided by 4, approximately 0.7853981633974483 */
export const PI_OVER_FOUR = /* @__PURE__ */ PI / 4;

/** Pi divided by 4, approximately 0.6283185307179586 */
export const PI_OVER_FIVE = /* @__PURE__ */ PI / 5;

/** Pi divided by 4, approximately 0.5235987755982988 */
export const PI_OVER_SIX = /* @__PURE__ */ PI / 6;

/** Pi divided by 4, approximately 0.4487989505128276 */
export const PI_OVER_SEVEN = /* @__PURE__ */ PI / 7;

/** Pi divided by 4, approximately 0.39269908169872414 */
export const PI_OVER_EIGHT = /* @__PURE__ */ PI / 8;

/** sqrt(PI), approximately 1.7724538509055159 */
export const SQRT_PI = /* @__PURE__ */ sqrt(PI);

/** sqrt(2 * PI), approximately 2.5066282746310002 */
export const SQRT_TWO_PI = /* @__PURE__ */ sqrt(TWO_PI);

/** sqrt(3), approximately 1.7320508075688772 */
export const SQRT3 = /* @__PURE__ */ sqrt(3);

/** sqrt(5), approximately 2.23606797749979 */
export const SQRT5 = /* @__PURE__ */ sqrt(5);

/** sqrt(7), approximately 2.6457513110645907 */
export const SQRT7 = /* @__PURE__ */ sqrt(7);

/** Amount to be multiplied to an angle in degrees to obtain an angle in radians, approximately 0.017453292519943295 */
export const DEG_PER_RAD = /* @__PURE__ */ PI / 180;

/** Amount to be multiplied to an angle in radians to obtain an angle in degrees, approximately 57.29577951308232 */
export const RAD_PER_DEG = /* @__PURE__ */ 1 / DEG_PER_RAD;

/** The golden ratio (phi), approximately 1.618033988749895 */
export const GOLDEN_RATIO = /* @__PURE__ */ (1 + SQRT5) / 2;

/** One divided by the golden ratio (1/phi), approximately 0.6180339887498948 */
export const INV_GOLDEN_RATIO = /* @__PURE__ */ 1 / GOLDEN_RATIO;

/** The natural logarithm of the golden ratio (phi), approximately 0.48121182505960347  */
export const LOG_GOLDEN_RATIO = /* @__PURE__ */ log(GOLDEN_RATIO);

/** log(sqrt(PI*2)), approximately 0.9189385332046727 */
export const LOG_SQRT_TWO_PI = /* @__PURE__ */ log(SQRT_TWO_PI);

/** The Euler–Mascheroni constant, approximately 0.5772156649015329 */
export const EULER_MASCHERONI = /* @__PURE__ */ 0.5772156649015329;

/** The Apéry's constant, the sum of the reciprocals of the positive cubes, approximately 1.2020569031595942 */
export const APERY_CONSTANT = /* @__PURE__ */ 1.2020569031595942;

/** The Conway's constant, approximately 1.3035772690342964 */
export const CONWAY_CONSTANT = /* @__PURE__ */ 1.3035772690342964;

/** The Khinchin's constant, approximately 2.6854520010653062 */
export const KHINCHIN_CONSTANT = /* @__PURE__ */ 2.6854520010653062;

/** Glaisher–Kinkelin constant, approximately 1.2824271291006226 */
export const GLAISHER_CONSTANT = /* @__PURE__ */ 1.2824271291006226;

/** One Yotta, 1e24 */
export const YOTTA = /* @__PURE__ */ 1e24;

/** One Zetta, 1e21 */
export const ZETTA = /* @__PURE__ */ 1e21;

/** One Exa, 1e18 */
export const EXA = /* @__PURE__ */ 1e18;

/** One Peta, 1e15 */
export const PETA = /* @__PURE__ */ 1e15;

/** One Tera, 1e12 */
export const TERA = /* @__PURE__ */ 1e12;

/** One Giga, 1e9 */
export const GIGA = /* @__PURE__ */ 1e9;

/** One Mega, 1e6 */
export const MEGA = /* @__PURE__ */ 1e6;

/** One Kilo, 1e3 */
export const KILO = /* @__PURE__ */ 1e3;

/** One Milli, 1e-3 */
export const MILLI = /* @__PURE__ */ 1e-3;

/** One Micro, 1e-6 */
export const MICRO = /* @__PURE__ */ 1e-6;

/** One Nano, 1e-9 */
export const NANO = /* @__PURE__ */ 1e-9;

/** One Pico, 1e-12 */
export const PICO = /* @__PURE__ */ 1e-12;

/** One Femto, 1e-15 */
export const FEMTO = /* @__PURE__ */ 1e-15;

/** One Atto, 1e-18 */
export const ATTO = /* @__PURE__ */ 1e-18;

/** One Zepto, 1e-21 */
export const ZEPTO = /* @__PURE__ */ 1e-21;

/** One Yocto, 1e-24 */
export const YOCTO = /* @__PURE__ */ 1e-24;

/** One inch in meters, 0.0254 */
export const INCH_IN_METERS = /* @__PURE__ */ 0.0254;

/** One foot in meters, 0.3048 */
export const FOOT_IN_METERS = /* @__PURE__ */ 0.3048;

/** One yard in meters, 0.9144 */
export const YARD_IN_METERS = /* @__PURE__ */ 0.9144;

/** One mile in meters, 1609.344 */
export const MILE_IN_METERS = /* @__PURE__ */ 1609.344;

/** One nautical mile in meters, 1852 */
export const NAUTICAL_MILE_IN_METERS = /* @__PURE__ */ 1852;

/** One astronomical unit in meters, 149597870691 */
export const ASTRONOMICAL_UNIT_IN_METERS = /* @__PURE__ */ 149597870691;

/** One light year in meters, 9.46053620707e15 */
export const LIGHT_YEAR_IN_METERS = /* @__PURE__ */ 9.46053620707e15;

/** One parsec in meters, 3.08567758135e16 */
export const PARSEC_IN_METERS = /* @__PURE__ */ 3.08567758135e16;

/** One angstrom in meters, 1e-10 */
export const ANGSTROM_IN_METERS = /* @__PURE__ */ 1e-10;

/** The speed of light, in meters per second, 299792458 */
export const SPEED_OF_LIGHT = /* @__PURE__ */ 299792458;

/** The Gravitational Constant in m**3 / (kg * s), 6.673e-11 */
export const GRAVITATIONAL_CONSTANT = /* @__PURE__ */ 6.673e-11;

/** One solar mass in kilograms, 1.98892e30 */
export const SOLAR_MASS_IN_KILOGRAMS = /* @__PURE__ */ 1.98892e30;

/** 2 ** 28, 268435456 */
export const TWO_POW_28 = /* @__PURE__ */ 2 ** 28;

/** Returns the fractional part of a number. 5.212 => 0.212, -3.32 => -0.32. To get the integral part, use trunc instead. */
export const fract = (value: number): number => value - trunc(value);

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

/**
 * Returns the value of a base expression taken to a specified power.
 * @param x The base value of the expression.
 * @param y The exponent value of the expression.
 */
export const pow = (a: number, b: number): number => a ** b;

/**
 * Computes the square of the given value.
 * @param n The value to square
 * @returns n*n
 */
export const pow2 = (n: number): number => n * n;

/**
 * Computes the cube of the given value.
 * @param n The value to cube
 * @returns n*n*n
 */
export const pow3 = (n: number): number => n * n * n;

/**
 * Computes the 4th power of the given value.
 * @param n The value
 * @returns n*n*n*n
 */
export const pow4 = (n: number): number => n * n * n * n;

export const powSelf = (n: number) => n ** n;

/**
 * Returns the inverse of the square root of a number. 1 / sqrt(x)
 * @returns 1 / sqrt(x)
 */
export const invSqrt = (x: number): number => 1 / sqrt(x);

/**
 * Returns the inverse of the cube root of a number. 1 / cbrt(x)
 * @returns 1 / cbrt(x)
 */
export const invCbrt = (x: number): number => 1 / cbrt(x);

/** Polynomial smooth min. */
export const smoothMin = (a: number, b: number, k: number): number =>
  min(a, b) - (pow2(max(k - abs(a - b), 0) / k) * k) / 4;

/**
 * @param value Determines whether a value is inside the specified range, including the extremes.
 * @returns value >= minimum && value <= maximum
 */
export const isInRange = (value: number, minimum: number, maximum: number): boolean =>
  value >= minimum && value <= maximum;

/**
 * @param value Determines whether a value is inside the specified range, excluding the extremes.
 * @returns value > minimum && value < maximum
 */
export const isInsideRange = (value: number, minimum: number, maximum: number): boolean =>
  value > minimum && value < maximum;

/** Returns true if the given number is greater than zero */
export const isPositive = (x: number): boolean => x > 0;

/** Returns true if the given number is less than zero */
export const isNegative = (x: number): boolean => x < 0;

/** Returns true if the given number is divisible by two */
export const isEven = (x: number): boolean => x % 2 === 0;

/** Returns true if the given number is not divisible by two */
export const isOdd = (x: number): boolean => x % 2 !== 0;

/** Checks wether the given number is prime. Not particularly optimized, complexity is O(sqrt(n)). */
export const isPrime = (n: number): boolean => {
  if (n % 1 !== 0 || n < 2 || !isInteger(n)) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  if (n % 3 === 0) {
    return n === 3;
  }
  for (let i = 5, m = sqrt(n); i <= m; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

/**
 * Clamps a value between a minimum and a maximum
 * @param value The value to clamp
 * @param minimum The minimum value, default to 0
 * @param maximum The maximum value, default to 1
 * @returns value < minimum ? minimum : value > maximum ? maximum : value
 */
export const clamp = (value: number, minimum: number = 0, maximum: number = 1): number =>
  value < minimum ? minimum : value > maximum ? maximum : value;

/** Returns -n */
export const negate = (n: number): number => -n;

/** Returns 1/n */
export const reciprocal = (n: number): number => 1 / n;

/** Returns a + b */
export const add = (a: number, b: number): number => a + b;

/** Returns a - b */
export const sub = (a: number, b: number): number => a - b;

/** Returns a * b */
export const mul = (a: number, b: number): number => a * b;

/** Returns a + b * scale */
export const add_mul = (a: number, b: number, scale: number): number => a + b * scale;

/** Returns a / b */
export const div = (numerator: number, denominator: number): number => numerator / denominator;

export const div_safe = (
  numerator: number,
  denominator: number | null | undefined | false,
  defaultValue: number = numerator,
): number => (denominator ? numerator / denominator : defaultValue);

/** Returns a % b */
export const mod = (a: number, b: number): number => a % b;

/**
 * Computes the euclidean modulo ((x % m) + m) % m
 * Wraps a natural number around a maximum value.
 * @param x The value to wrap
 * @param m The maximum value
 * @returns ((x % m) + m) % m
 */
export const mod_euclidean = (x: number, m: number): number => ((x % m) + m) % m;

/** Returns true if a > b */
export const gt = (a: number, b: number): boolean => a > b;

/** Returns true if a >= b */
export const gte = (a: number, b: number): boolean => a >= b;

/** Returns true if a < b */
export const lt = (a: number, b: number): boolean => a < b;

/** Returns true if a <= b */
export const lte = (a: number, b: number): boolean => a <= b;

/** Returns true if a === b */
export const eq = (a: unknown, b: unknown): boolean => a === b;

/** Returns true if a !== b */
export const neq = (a: unknown, b: unknown): boolean => a !== b;

/**
 * Returns true if the given value is strictly equal to 0
 * @param value The value to check
 * @returns True if value === 0, false if not
 */
export const eq_zero = (value: unknown): value is 0 => value === 0;

/** Returns true if the given value is not exactly the number 0. value !== 0 */
export const neq_zero = (value: unknown): boolean => value !== 0;

/**
 * Returns true if the given value is near to zero, abs(value) < tolerance
 * @param value The number to check
 * @param epsilon The optional tolerance to use, by default is Number.EPSILON
 */
export const eq_almost_zero = (value: number, epsilon: number = FLOAT_EPSILON): boolean => abs(value) < epsilon;

/**
 * Returns true if two numbers are equal given an absolute tolerance.
 * To use a relative tolerance use nearlyEquals instead
 * @param a A number
 * @param b A number
 * @param epsilon The optional absolute tolerance to use
 * @returns True if a is almost equal to b
 */
export const eq_almost = (a: number, b: number, epsilon: number = DEFAULT_TOLERANCE): boolean => abs(a - b) < epsilon;

/**
 * Returns true if two numbers are nearly equals.
 * Is uses relative tolerance, the bigger the numbers the higher the tolerance becomes.
 * @param a A number
 * @param b A number
 * @param epsilon Optional relative tolerance to use
 * @returns True if a is almost equal to b
 */
export const eq_almost_relative = (a: number, b: number, epsilon: number = FLOAT_EPSILON): boolean => {
  const diff = abs(a - b);
  return a === b || diff < epsilon * EPSILON || diff < max(abs(a), abs(b)) * epsilon;
};

/** Returns the mid value of two numbers, (a + b) / 2 */
export const mid = (a: number, b: number): number => (a + b) / 2;

/** Returns the sum of the first n natural numbers */
export const sumN = (n: number): number => (n * (n + 1)) / 2;

export type int8 = number;

/** Converts a number to an int8 value, from -128 to 127 */
export const int8 = (n: number): number => (n << 24) >> 24;

export type uint8 = number;

/** Converts the given floating point number to a 8 bit unsigned integer */
export const uint8 = (n: number): uint8 => n & 0xff;

export type int16 = number;

/** Converts a number to an int16 value, from -32768 to 32767 */
export const int16 = (n: number): number => (n << 16) >> 16;

export type uint16 = number;

/** Converts the given floating point number to a 16 bit unsigned integer */
export const uint16 = (n: number): uint16 => n & 0xffff;

export type int32 = number;

/** Converts the given floating point number to a 32 bit integer */
export const int32 = (n: number): int32 => n | 0;

export type uint32 = number;

/** Converts the given floating point number to a 32 bit unsigned integer */
export const uint32 = (n: number): uint32 => n >>> 0;

export type int53 = number;

export type uint53 = number;

export type float = number;

/** Converts a 64 bit floating point number to a 32 bit floating point number */
export const float = fround;

export type double = number;

/** Converts a value to a number */
export const double = (n: unknown): number => +(n as number);

/** Returns ~n */
export const int32_not = (n: int32): number => ~n;

/** Returns ~n >>> 0 */
export const uint32_not = (n: int32): number => ~n >>> 0;

/** Returns a & b, with a 32 bit integer precision */
export const int32_and = (a: int32, b: int32): int32 => a & b;

/** Returns a & b, with a 32 bit integer precision */
export const uint32_and = (a: int32, b: int32): int32 => (a & b) >>> 0;

/** Returns the 32 bit unsigned integer multiplication between two numbers */
export const uint32_mul = (a: int32, b: int32): int32 => int32_mul(a, b) >>> 0;

/** Returns a | b */
export const int32_or = (a: int32, b: int32): int32 => a | b;

/** Returns a | b */
export const uint32_or = (a: int32, b: int32): int32 => (a | b) >>> 0;

/** Returns a ^ b */
export const int32_xor = (a: int32, b: int32): int32 => a ^ b;

/** Returns a ^ b */
export const uint32_xor = (a: int32, b: int32): int32 => (a ^ b) >>> 0;

/** Returns n << amount */
export const int32_shl = (n: int32, amount: int32): int32 => n << amount;

/** Returns n << amount */
export const uint32_shl = (n: int32, amount: int32): int32 => (n << amount) >>> 0;

/** Returns n >> amount */
export const int32_shr = (n: int32, amount: int32): int32 => n >> amount;

/** Returns n >>> amount, right shift of 32 bit unsigned integers */
export const uint32_shr = (n: int32, amount: int32): int32 => n >>> amount;

/** 32 bit binary left rotation */
export const int32_rotl = (n: int32, amount: int32): int32 => (n << amount) | (n >>> (32 - amount));

/** 32 bit binary right rotation */
export const int32_rotr = (n: int32, amount: int32): int32 => (n << (32 - amount)) | (n >>> amount);

/** 32 bit binary left rotation */
export const uint32_rotl = (n: int32, amount: int32): int32 => ((n << amount) | (n >>> (32 - amount))) >>> 0;

/** 32 bit binary right rotation */
export const uint32_rotr = (n: int32, amount: int32): int32 => ((n << (32 - amount)) | (n >>> amount)) >>> 0;

/**
 * Integers - Check wether the given number is a power of two or not (1, 2, 4, 8, 16, 32, 64, 128, 256 ...)
 * Note: this function does not woek for values greater than 0x10000000
 * @param integer The 32bit integer number to verify
 * @returns True if the given number is a power of two, false if not.
 */
export const int32_isPow2 = (i32: int32): boolean => !!i32 && !(i32 & (i32 - 1));

/**
 * Counts the number of ones in the given 32 bit number.
 * https://graphics.stanford.edu/~seander/bithacks.html
 * @param i32 Input value
 * @returns Number of ones, from 0 to 32
 */
export const int32_popcnt = (i32: int32): int32 => {
  i32 -= (i32 >> 1) & 1431655765;
  i32 = (i32 & 858993459) + ((i32 >> 2) & 858993459);
  return (((i32 + (i32 >> 4)) & 252645135) * 16843009) >> 24;
};

/** Counts the number of trailing zero bits */
export const int32_ctz = (i32: int32): int32 => {
  let c = 32;
  i32 &= -i32;
  if (i32) {
    c--;
  }
  if (i32 & 0x0000ffff) {
    c -= 16;
  }
  if (i32 & 0x00ff00ff) {
    c -= 8;
  }
  if (i32 & 0x0f0f0f0f) {
    c -= 4;
  }
  if (i32 & 0x33333333) {
    c -= 2;
  }
  if (i32 & 0x55555555) {
    c -= 1;
  }
  return c;
};

/** Gets the power of two greater or equal the given value. 0=>1. 1=>1, 2=>2, 3=>4, 4=>4, 5=>8 ... */
export const uint32_nextPowerOfTwo = (v: int32): int32 => {
  v = v && v - 1;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  return (v | (v >>> 16)) + 1;
};

/** Gets the power of two smaller or equal the given value.  */
export const uint32_prevPowerOfTwo = (v: int32): int32 => {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v >>> 1);
};

/**
 * Gets the hamming distance, the number of different bits, between two 32 bit integers.
 * @param a First value
 * @param b Second value
 * @returns The number of different bits between two numbers
 */
export const int32_hamming = (a: int32, b: int32): int32 => int32_popcnt(a ^ b);

/** Interleaves the bits two 16 bit values 0bYXYX... This is great to compute the 2D Z-order Morton curve https://en.wikipedia.org/wiki/Z-order_curve */
export const uint32_interleave_xy = (x: uint32, y: uint32): uint32 => {
  x &= 0xffff;
  x = (x | (x << 8)) & 0x00ff00ff;
  x = (x | (x << 4)) & 0x0f0f0f0f;
  x = (x | (x << 2)) & 0x33333333;
  y &= 0xffff;
  y = (y | (y << 8)) & 0x00ff00ff;
  y = (y | (y << 4)) & 0x0f0f0f0f;
  y = (y | (y << 2)) & 0x33333333;
  return ((x | (x << 1)) & 0x55555555) | (((y | (y << 1)) & 0x55555555) << 1);
};

/** Interleaves the bits three 10 bit values 0bZYXZYX... This is great to compute the 3D Z-order Morton curve https://en.wikipedia.org/wiki/Z-order_curve */
export const uint32_interleave_xyz = (x: uint32, y: uint32, z: uint32): uint32 => {
  x &= 0x3ff;
  x = (x | (x << 16)) & 0xff0000ff;
  x = (x | (x << 8)) & 0x0f00f00f;
  x = (x | (x << 4)) & 0xc30c30c3;
  y &= 0x3ff;
  y = (y | (y << 16)) & 0xff0000ff;
  y = (y | (y << 8)) & 0x0f00f00f;
  y = (y | (y << 4)) & 0xc30c30c3;
  z &= 0x3ff;
  z = (z | (z << 16)) & 0xff0000ff;
  z = (z | (z << 8)) & 0xf00f00f;
  z = (z | (z << 4)) & 0xc30c30c3;
  return ((x | (x << 2)) & 0x49249249) | (((y | (y << 2)) & 0x49249249) << 1) | (((z | (z << 2)) & 0x49249249) << 2);
};

/** Returns a & b, with a 53 bit integer precision */
export const int53_and = (a: int53, b: int53): int53 =>
  (floor(a / TWO_POW_28) & floor(b / TWO_POW_28)) * TWO_POW_28 +
  (mod_euclidean(a, TWO_POW_28) & mod_euclidean(b, TWO_POW_28));

/** Returns a | b, with a 53 bit integer precision */
export const int53_or = (a: int53, b: int53): int53 =>
  (floor(a / TWO_POW_28) | floor(b / TWO_POW_28)) * TWO_POW_28 +
  (mod_euclidean(a, TWO_POW_28) | mod_euclidean(b, TWO_POW_28));

/** Returns a ^ b, with a 53 bit integer precision */
export const int53_xor = (a: int53, b: int53): int53 =>
  (floor(a / TWO_POW_28) ^ floor(b / TWO_POW_28)) * TWO_POW_28 +
  (mod_euclidean(a, TWO_POW_28) ^ mod_euclidean(b, TWO_POW_28));

/** Returns ~n, with a 53 bit integer precision */
export const int53_not = (n: int53): int53 => -n - 1;

/** Returns n << amount, with a 53 bit integer precision */
export const int53_shl = (n: int53, amount: int53): int53 => floor(n * 2 ** amount);

/** Returns n >> amount, with a 53 bit integer precision */
export const int53_shr = (n: int53, amount: int53): int53 => floor(n / 2 ** amount);

/**
 * Returns the logarithm of the given value to the given base.
 * @returns log(value) / log(base)
 */
export const logN = (value: number, base: number): number => log(value) / log(base);

/** The natural logarithm of one minus the specified value. log1p(-x) */
export const log1m = (x: number): number => log1p(-x);

/** Computes the logit functio. log(x / (1 - x)). See https://en.wikipedia.org/wiki/Logit */
export const logit = (x: number): number => log(x / (1 - x));

/** Returns the base-2 exponential of x. */
export const exp2 = (x: number): number => 2 ** x;

/** Returns the base-10 exponential of x. */
export const exp10 = (x: number): number => 10 ** x;

/** The natural logarithm of one minus the exponential of the specified value. */
export const log1mexp = (a: number): number => (a > -LN2 ? log(-expm1(a)) : log1p(-exp(a)));

/** The log of 1 plus the exponential of the specified value. */
export const log1pexp = (x: number): number => (x > 0 ? x + log1p(exp(-x)) : log1p(exp(x)));

/** The log sum of exponentials. (a > b ? a + log1pexp(b - a) : b + log1pexp(a - b)) */
export const logsumexp = (a: number, b: number): number => (a > b ? a + log1pexp(b - a) : b + log1pexp(a - b));

/**
 * Snaps a value to the nearest grid multiple
 * @param value The value to sap
 * @param length The length of the grid cell
 * @returns Value snapped to the grid
 */
export const gridSnap = (value: number, length: number): number => floor(0.5 + value / length) * length;

/**
 * Wraps (loops) a value so the returned value will be between 0 and length (excluded)
 * @param value The value to wrap so that is looped between 0 and length (excluded)
 * @param length The grid length, cannot be zero.
 * @returns Value wrapped between 0 and length (excluded)
 */
export const wrap = (value: number, length: number): number => value - floor(value / length) * length;

/**
 * Wraps (loops) a value around a maximum length centered in zero. Returned value will be between -length/2 (excluded) and length/2 (included).
 * @param value The value to wrap so that is looped between -length/2 (excluded) and length/2 (included)
 * @param length The length, the value will be wrapped within -length/2 (excluded) and length/2 (included)
 * @returns Value wrapped between -length/2 (included) and length/2 (excluded)
 */
export const wrap_signed = (value: number, length: number): number => value + floor(0.5 - value / length) * length;

/**
 * Wraps (loops) a value so that the returned value will be between 0 (included) and length (excluded) following a triangle wave shape.
 * Values from 0 to length => 0 to length,
 * Values from length to length*2 => length to 0,
 * Values from length*2 to length*3 => 0 to length, and so on
 * @param value The value to ping pong
 * @param length The maximum length, the result will never reach exceed this value
 * @returns value pingpong length
 */
export const wrap_pingPong = (value: number, length: number): number => length - abs(length - wrap(value, length * 2));

/**
 * Returns the GCD (greatest common divisor) using the euclidean method. Complexity is O(n).
 * Warning, udefined behavior with NaN or infinities
 * @param a A number
 * @param b Another number
 * @returns GCD(a,b)
 */
export const GCD = (a: number, b: number): number => {
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
};

/**
 * Returns the LCM (least common multiplier) using the euclidean method. Complexity is O(n).
 * Warning, udefined behavior with NaN or infinities
 * @param a A number
 * @param b Another number
 * @returns LCM(a, b)
 */
export const LCM = (a: number, b: number): number => b * (a / GCD(a, b)) || 0;

/**
 * Trigonometry - cot - Gets the cotangent of x, 1 / tan(x)
 * @param x The input
 * @returns The cotangent of x
 */
export const cot = (x: number): number => 1 / tan(x);

/**
 * Trigonometry - coth - Gets the hyperbolic tangent of x, 1 / tanh(x)
 * @param x The input
 * @returns The hyperbolic tangent of x
 */
export const coth = (x: number): number => 1 / tanh(x);

/**
 * Trigonometry - acoth - The inverse hyperbolic cotangent of x, atanh(1 / x)
 * @param x The input
 * @returns The inverse hyperbolic cotagent of a number.
 */
export const acoth = (x: number): number => atanh(1 / x);

/**
 * Trigonometry - csc - Gets the cosecant of x, 1 / sin(x)
 * @param x The input
 * @returns The cosecant of x
 */
export const csc = (x: number): number => 1 / sin(x);

/**
 * Trigonometry - csch - Gets the hyperbolic cosecant of x, 1 / sinh(x)
 * @param x
 * @returns The hyperbolic cosecant of x
 */
export const csch = (x: number): number => 1 / sinh(x);

/**
 * Trigonometry - acsch - Gets the inverse hyperbolic cosecant of x, asinh(1 / x)
 * @param x The input
 * @returns The inverse hyperbolic cosecant of x
 */
export const acsch = (x: number): number => asinh(1 / x);

/**
 * Trigonometry - acsc - Gets the inverse cosecant function (arccosecant function) of x, asin(1 / x)
 * @param x The input
 * @returns The arcosecant of a number
 */
export const acsc = (x: number): number => asin(1 / x);

/**
 * Trigonometry - sec - Gets the secant of x, 1 / cos(x)
 * @param x The input
 * @returns The secant of a number
 */
export const sec = (x: number): number => 1 / cos(x);

/**
 * Trigonometry - asec - Gets the Inverse Secant (sec-1) of x in radians, acos(1 / x)
 * @param x The input
 * @returns The inverse secant of x
 */
export const asec = (x: number): number => acos(1 / x);

/**
 * Trigonometry - asech - Gets the inverse hyperbolic secant of x, acosh(1 / x)
 * @param x The input
 * @returns The inverse hyperbolic secant of x
 */
export const asech = (x: number): number => acosh(1 / x);

/**
 * Computes sin(x) / x. If x is zero, returns 1.
 * @returns sin(x) / x. If x is zero, returns 1.
 */
export const sinc = (x: number): number => (x ? sin(x) / x : 1);

/** Returns the arc cosine (or inverse cosine) of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const acos_safe = (x: number): number => acos(clamp(x, -1));

/** Returns the arcsine of a number. The number is clamped between -1 to 1 to avoid NaN. */
export const asin_safe = (x: number): number => asin(clamp(x, -1));

/**
 * Converts an angle in degrees to radians (degrees * PI / 180)
 * @param degrees Agle in degrees
 * @returns Angle in radianss
 */
export const degToRad = (degrees: number): number => degrees * DEG_PER_RAD;

/**
 * Converts an angle in radians to degrees (radians * 180 / PI)
 * @param radians Agle in radians
 * @returns Angle in degrees
 */
export const radToDeg = (radians: number): number => radians / DEG_PER_RAD;

/**
 * Trigonometry - Wrap an angle so it is always between 0 (included) and 2*PI (excluded)
 * @param radians The angle in radians to wrap between 0 (included) and 2*PI (excluded)
 * @returns The angle in radians wrapped so it is always between 0 (included) and 2*PI (excluded)
 */
export const angle_wrap = (radians: number): number => wrap(radians, TWO_PI);

/**
 * Trigonometry - Wrap an angle so it is always between -PI (excluded) and PI (included)
 * @param radians The angle in radians to wrap between -PI (excluded) ad PI (included)
 * @returns The angle in radians wrapped so it is always between -PI (excluded) ad PI (included)
 */
export const angle_wrap_signed = (radians: number): number => wrap_signed(radians, TWO_PI);

/**
 * Wraps an angle so that the returned value will be between 0 (included) and 2*PI (excluded) following a triangle wave shape.
 * @param radians The angle in radians to pingpong
 * @returns radians pingpong PI
 */
export const angle_wrap_pingPong = (radians: number): number => wrap_pingPong(radians, TWO_PI);

/**
 * Gets the shortest difference betwee two angles, in a range between 0 (included) to 2*PI (excluded)
 * @param sourceRadians First angle
 * @param targetRadias Second angle
 * @returns The shortest angle between sourceRadians to targetRadians, in a range between 0 (included) to 2*PI (excluded)
 */
export const angle_delta = (sourceRadians: number, targetRadians: number): number =>
  angle_wrap(targetRadians - sourceRadians);

/**
 * Gets the shortest difference betwee two angles, in a range between -PI (excluded) to PI (included)
 * @param sourceRadians First angle
 * @param targetRadias Second angle
 * @returns The shortest angle between sourceRadians to targetRadians, in a range between -PI (excluded) to PI (included)
 */
export const angle_delta_signed = (sourceRadians: number, targetRadians: number): number =>
  angle_wrap_signed(targetRadians - sourceRadians);

/** Gets the angle in radians between two vectors */
export const angle_between2D = (ax: number, ay: number, bx: number, by: number): number => atan2(by - ay, bx - ax);

/** Gets the angle in radians between two vectors */
export const angle_between3D = (ax: number, ay: number, az: number, bx: number, by: number, bz: number): number =>
  acos_safe((ax * bx + ay * by + az * bz) / sqrt((ax * ax + ay * ay + az * bz) * (bx * bx + by * by + az * bz)));

/** Gets the angle in radians between two vectors */
export const angle_between4D = (
  ax: number,
  ay: number,
  az: number,
  aw: number,
  bx: number,
  by: number,
  bz: number,
  bw: number,
): number =>
  acos_safe(
    (ax * bx + ay * by + az * bz + aw * bw) /
      sqrt((ax * ax + ay * ay + az * bz + aw * bw) * (bx * bx + by * by + az * bz + aw * bw)),
  );

/**
 * Trigonometry - gudermannian - atan(sinh(x))
 * @param x The input
 * @returns atan(sinh(x))
 */
export const gudermannian = (x: number): number => atan(sinh(x));

/**
 * Trigonometry - invGudermannian - atanh(sin(x))
 * @param x The input
 * @returns atanh(sin(x))
 */
export const gudermannian_inv = (x: number): number => atanh(sin(x));

/**
 * Normal distribution, Bell curve, Gaussian curve.
 * https://en.wikipedia.org/wiki/Normal_distribution
 */
export const gaussianDistribution = (x: number, offset: number = 0, scale: number = 1): number =>
  exp(-pow2(x - offset) / (2 * scale * scale)) / (scale * SQRT_TWO_PI);

/**
 * Computes the sigmoid function. https://en.wikipedia.org/wiki/Sigmoid_function
 * @param t Input parameter
 * @returns A value between 0 and 1
 */
export const sigmoid = (t: number): number => 1 / (1 + exp(-t));

/**
 * Computes the inverse sigmoid function, log(a) - log(1 - a)
 * @param a The input value
 * @returns The inverse of the sigmoid function
 */
export const sigmoid_inv = (a: number): number => log(a) - log(1 - a);

/** Gets the Stirling approximation gamma of a number. See https://en.wikipedia.org/wiki/Stirling%27s_approximation */
export const stirlingGamma = (n: number): number => sqrt(TWO_PI / n) * (n / EULER) ** n;

/**
 * Returns true if the given value is a power of two.
 * For 32 bit integers, int32IsPow2 might be faster.
 * @param value A number
 * @returns True if the given number is a power of two
 */
export const isPow2 = (value: number): boolean => log2(value) % 1 === 0;

/**
 * Returns true if the given value is a power of ten.
 * @param value A number
 * @returns True if the given number is a power of ten
 */
export const isPow10 = (value: number): boolean => log10(value) % 1 === 0;

/**
 * Gets the power of two greater or equal to the given value, 2 ** ceil(log2(value))
 * Useful to compute texture sizes.
 * @param value The minimum value
 * @returns The power of two greater of equal to the given value
 */
export const ceil_pow2 = (value: number): number => 2 ** ceil(log2(abs(value))) * sign(value);

/**
 * Gets the power of two less or equal to the given value, 2 ** floor(log2(value)).
 * Useful to compute texture sizes.
 * @param value The maximum value
 * @returns The power of two less of equal to the given value
 */
export const floor_pow2 = (value: number): number => 2 ** floor(log2(abs(value))) * sign(value);

/** Step function. return x < edge ? 0 : 1. Same as glsl step function. */
export const step_edge = (edge: number, x: number): number => (x < edge ? 0 : 1);

/** Heaviside step function. return x < 0 ? 0 : 1. */
export const step_unit = (x: number): number => (x < 0 ? 0 : 1);

/** Returns 1 only if x is inside the specified interval ]minimum, maximum]. See https://en.wikipedia.org/wiki/Boxcar_function */
export const step_boxcar = (x: number, minimum: number, maximum: number): number =>
  step_unit(x - minimum) - step_unit(x - maximum);

/** Returns 1 obly if x is inside the interval ]-1/2, +1/2]. See https://en.wikipedia.org/wiki/Rectangular_function */
export const step_rect = (x: number): number => step_boxcar(x, -0.5, 0.5);

/**
 * Exponential step function.
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const step_exp = (x: number, k: number, n: number): number => exp(-k * x ** n);

/** Linear interpolation */
export const ease_linear = (t: number): number => t;

/** Quadratic easing function. You can use it with lerp(from, to, easeInQuadratic(t)). */
export const ease_quadratic_in = pow2;

/** Quadratic easing function. You can use it with lerp(from, to, easeOutQuadratic(t)). */
export const ease_quadratic_out = (t: number): number => t * (2 - t);

/** Quadratic easing function. You can use it with lerp(from, to, easeInOutQuadratic(t)). */
export const ease_quadratic = (t: number): number => (t < 0.5 ? t * t * 2 : t * (4 - 2 * t) - 1);

/** Cubic easing function. You can use it with lerp(from, to, easeInCubic(t)). */
export const ease_cubic_in = pow3;

/** Cubic easing function. You can use it with lerp(from, to, easeOutCubic(t)). */
export const ease_cubic_out = (t: number): number => 1 + pow3(t - 1);

/** Cubic easing function. You can use it with lerp(from, to, easeInOutCubic(t)). */
export const ease_cubic = (t: number): number => (t < 0.5 ? pow3(t) * 4 : 1 + pow3(t - 1) * 4);

/** Quartic easing function. You can use it with lerp(from, to, easeInQuartic(t)). */
export const ease_quartic_in = pow4;

/** Quartic easing function. You can use it with lerp(from, to, easeOutQuartic(t)). */
export const ease_quartic_out = (t: number): number => 1 - pow4(t - 1);

/** Quartic easing function. You can use it with lerp(from, to, easeInOutQuartic(t)). */
export const ease_quartic = (t: number): number => (t < 0.5 ? t * pow3(t * 2) : 1 - pow4(t - 1) * 8);

/** Quintic easing function. You can use it with lerp(from, to, easeInQuintic(t)). */
export const ease_quintic_in = (x: number) => x ** 5;

/** Quintic easing function. You can use it with lerp(from, to, easeOutQuintic(t)). */
export const ease_quintic_out = (t: number): number => 1 + (t - 1) ** 5;

/** Quintic easing function. You can use it with lerp(from, to, easeInOutQuintic(t)). */
export const ease_quintic = (t: number): number => (t < 0.5 ? t * pow4(t * 2) : 1 + (t - 1) ** 5 * 16);

/** Sextic easing function. You can use it with lerp(from, to, easeInSextic(t)). */
export const ease_sextic_in = (x: number) => x ** 6;

/** Sextic easing function. You can use it with lerp(from, to, easeOutSextic(t)). */
export const ease_sextic_out = (t: number): number => 1 - (t - 1) ** 6;

/** Sextic easing function. You can use it with lerp(from, to, easeInOutSextic(t)). */
export const ease_sextic = (t: number): number => (t < 0.5 ? t * (t * 2) ** 5 : 1 - (t - 1) ** 6 * 32);

/** Septic easing function. You can use it with lerp(from, to, easeInSeptic(t)). */
export const ease_septic_in = (x: number) => x ** 7;

/** Septic easing function. You can use it with lerp(from, to, easeOutSeptic(t)). */
export const ease_septic_out = (t: number): number => 1 + (t - 1) ** 7;

/** Septic easing function. You can use it with lerp(from, to, easeInOutSeptic(t)). */
export const ease_septic = (t: number): number => (t < 0.5 ? t * (t * 2) ** 6 : 1 + (t - 1) ** 7 * 64);

/** Octic easing function. You can use it with lerp(from, to, easeInOctic(t)). */
export const ease_octic_in = (x: number) => x ** 8;

/** Octic easing function. You can use it with lerp(from, to, easeOutOctic(t)). */
export const ease_octic_out = (t: number): number => 1 - (t - 1) ** 8;

/** Octic easing function. You can use it with lerp(from, to, easeInOutOctic(t)). */
export const ease_octic = (t: number): number => (t < 0.5 ? t * (t * 2) ** 7 : 1 - (t - 1) ** 8 * 128);

/** Sine easing function. You can use it with lerp(from, to, easeInSine(t)). */
export const ease_sine_in = (t: number): number => sin((t - 1) * PI_OVER_TWO) + 1;

/** Sine easing function. You can use it with lerp(from, to, easeOutSine(t)). */
export const ease_sine_out = (t: number): number => sin(t * PI_OVER_TWO);

/** Sine easing function. You can use it with lerp(from, to, easeInOutSine(t)). */
export const ease_sine = (t: number): number => (1 - cos(t * PI)) / 2;

/** Circle easing function. You can use it with lerp(from, to, easeInCircle(t)). */
export const ease_circle_in = (t: number): number => 1 - sqrt(1 - t * t);

/** Circle easing function. You can use it with lerp(from, to, easeOutCircle(t)). */
export const ease_circle_out = (t: number): number => sqrt((2 - t) * t);

/** Circle easing function. You can use it with lerp(from, to, easeInOutCircle(t)). */
export const ease_circle = (t: number): number =>
  (t < 0.5 ? 1 - sqrt(1 - 4 * (t * t)) : sqrt(-(2 * t - 3) * (2 * t - 1)) + 1) / 2;

/** Exponential easing function. You can use it with lerp(from, to, easeInExponential(t)). */
export const ease_exp_in = (t: number): number => (t <= 0 ? t : pow2(10 * (t - 1)));

/** Exponential easing function. You can use it with lerp(from, to, easeOutExponential(t)). */
export const ease_exp_out = (t: number): number => (t >= 1 ? t : 1 - pow2(-10 * t));

/** Exponential easing function. You can use it with lerp(from, to, easeInOutExponential(t)). */
export const ease_exp = (t: number): number =>
  t <= 0 || t >= 1 ? t : t < 0.5 ? pow2(20 * t - 10) / 2 : 1 - pow2(-20 * t + 10) / 2;

/** Elastic easing function. You can use it with lerp(from, to, easeInElastic(t)). */
export const ease_elastic_in = (t: number): number => sin(13 * PI_OVER_TWO * t) * pow2(10 * (t - 1));

/** Elastic easing function. You can use it with lerp(from, to, easeOutElastic(t)). */
export const ease_elastic_out = (t: number): number => sin(-13 * PI_OVER_TWO * (t + 1)) * pow2(-10 * t) + 1;

/** Elastic easing function. You can use it with lerp(from, to, easeInOutElastic(t)). */
export const ease_elastic = (t: number): number =>
  (t < 0.5
    ? sin(13 * PI * t) * pow2(10 * (2 * t - 1))
    : sin(-13 * PI_OVER_TWO * (2 * (t - 1) + 1)) * pow2(-10 * (2 * t - 1)) + 2) / 2;

/** Back easing function. You can use it with lerp(from, to, easeInBack(t)). */
export const ease_back_in = (t: number): number => sin(13 * PI * t) * pow2(10 * (t - 1));

/** Back easing function. You can use it with lerp(from, to, easeOutBack(t)). */
export const ease_back_out = (t: number): number => sin(-13 * PI * (t + 1)) * pow2(-10 * t) + 1;

/** Back easing function. You can use it with lerp(from, to, easeInOutBack(t)). */
export const ease_back = (p: number): number => {
  if (p < 0.5) {
    p *= 2;
    return (p * p * p - p * sin(p * PI)) / 2;
  }
  p = 1 - (2 * p - 1);
  return 1 - (p * p * p - p * sin(p * PI)) / 2;
};

/** Smoothstep easing function. You can use it with lerp(from, to, ease_smoothstep(t)). */
export const ease_smoothstep = (t: number): number => (3 - 2 * t) * t * t;

/** Smootherstep easing function. You can use it with lerp(from, to, ease_smootherstep(t)). */
export const ease_smootherstep = (t: number): number => t * t * t * (t * (t * 6 - 15) + 10);

/** Smoothstep interpolation between two values. */
export const smoothstep = (from: number, to: number, t: number): number =>
  ease_smoothstep(clamp(t)) * (to - from) + from;

/** Smootherstep interpolation between two values. */
export const smootherstep = (from: number, to: number, t: number): number =>
  ease_smootherstep(clamp(t)) * (to - from) + from;

/** https://iquilezles.org/www/articles/smoothstepintegral/smoothstepintegral.htm */
export const smoothstep_integral = (t: number, T: number): number =>
  t >= T ? t - 0.5 * T : pow3(t / T) * (T - t * 0.5);

/**
 * Inverse function of smoothstep
 * https://iquilezles.org/www/articles/ismoothstep/ismoothstep.htm
 */
export const smoothstep_inv = (y: number): number => 0.5 - sin(asin(1 - 2 * y) / 3);

/**
 * Linear interpolation
 * @param t The amount to choose between from and to
 * @param from The start value
 * @param to The end value
 * @returns from + t * (to - from)
 */
export const lerp = (from: number, to: number, t: number): number => t * (to - from) + from;

/** Evaluates the shortest path from and to in the range [0, modulus]. */
export const lerp_mod = (from: number, to: number, modulus: number, t: number): number => {
  const a = wrap(from, modulus);
  const b = wrap(to, modulus);
  const diff = b - a;
  return abs(diff) * 2 <= modulus
    ? t * diff + a
    : wrap(a < b ? lerp(a + modulus, b, t) : lerp(a, b + modulus, t), modulus);
};

/**
 * Linear interpolation between two angles in radians
 * @param t The amount to choose between from and to
 * @param fromRadians The start angle, in radias
 * @param toRadians The end angle, in radians
 */
export const angle_lerp_signed = (fromRadians: number, toRadians: number, t: number): number =>
  angle_wrap_signed(fromRadians + angle_wrap_signed(toRadians - fromRadians) * t);

/**
 * Linear interpolation between two angles in radians
 * @param t The amount to choose between from and to
 * @param fromRadians The start angle, in radias
 * @param toRadians The end angle, in radians
 */
export const angle_lerp_unsigned = (fromRadians: number, toRadians: number, t: number): number =>
  angle_wrap(fromRadians + angle_wrap(toRadians - fromRadians) * t);

/** Moves a value toward a target */
export const moveTowards = (current: number, target: number, maxDelta: number): number =>
  abs(target - current) <= maxDelta ? target : current + sign(target - current) * maxDelta;

/** Moves an angle toward a target */
export const angle_moveTowards = (currentRadians: number, targetRadians: number, maxDelta: number): number => {
  const delta = angle_wrap_signed(currentRadians - targetRadians);
  return -maxDelta < delta && delta < maxDelta
    ? targetRadians
    : moveTowards(currentRadians, currentRadians + delta, maxDelta);
};

/**
 * Normalizes a value between 0 and 1, inverse of lerp, the t that has to passed to lerp to get the result, (v - from) / (to - from).
 * From and to cannot be the same value.
 * @param v A linearly interpolated value
 * @param from The start value
 * @param to The end value
 * @returns t to pass to lerp to compute v
 */
export const lerp_inv = (from: number, to: number, v: number): number => (v - from) / (to - from) || from;

/**
 * Frame rate independet interpolation amount calculation.
 * Example usage: lerp(damp(t, deltaTime), 2, 5)
 * @param t The amount to choose between from and to
 * @param deltaTime The time passed from the previous dampLerp to the next
 * @returns Amount to pass to interpolation or easing functions
 */
export const timeDamp = (t: number, deltaTime: number): number => 1 - exp(-t * deltaTime);

/**
 * Grows fast, decay slow. h * exp(1 - h). Multiply h with a constant to obtain different impulse shapes
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulse_exp = (h: number): number => h * exp(1 - h);

/**
 * Sustained exponential impulse
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulse_exp_sustained = (x: number, f: number, k: number): number => {
  const s = max(x - f, 0);
  return min((x * x) / (f * f), 1 + (2 / f) * s * exp(-k * s));
};

/**
 * Grows fast, decay slow. K controls the fallof of the function, peak is sqrt(1/k)
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulse_quad = (x: number, k: number): number => (2 * sqrt(k) * x) / (1 + k * x * x);

/**
 * Grows fast, decay slow. K controls the fallof of the function, n controls the degree of the polynomial
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulse_poly = (x: number, k: number, n: number): number =>
  ((n / (n - 1)) * ((n - 1) * k) ** (1 / n) * x) / (1 + k * x ** n);

/**
 * Equivalent to smoothstep(c-w,c,x)-smoothstep(c,c+w,x)
 * Replaces well a gaussian.
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const impulse_cubic = (x: number, c: number, w: number): number => {
  x = abs(x - c);
  const t = x / w;
  return x > w ? 0 : 1 + (2 * t - 3) * t * t;
};

/**
 * Remap the unit interval into the unit interval by expanding the sides and compressing the center,
 * and keeping 1/2 mapped to 1/2.
 * k=1 is the identity curve, k<1 produces the classic gain() shape, and k>1 produces "s" shaped curves.
 * The curves are symmetric (and inverse) for k=a and k=1/a.
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const remap_gain = (x: number, k: number): number => (x < 0.5 ? (2 * x) ** k / 2 : 1 - (2 * (1 - x)) ** k / 2);

/**
 * remap the 0..1 interval into 0..1, such that the corners are mapped to 0 and the center to 1 using a parabola
 * https://iquilezles.org/www/articles/functions/functions.htm
 */
export const remap_parabola = (x: number, k: number): number => (4 * x * (1 - x)) ** k;

/** Generalization of remap_parabola, remaps the 0..1 interval into 0..1 by keeping the corners mapped to 0.
 * Shape of both sides of the curve is customizable.
 * https://iquilezles.org/www/articles/functions/functions.htm.
 */
export const remap_curve = (x: number, a: number, b: number): number =>
  (powSelf(a + b) / (a ** a * b ** b)) * x ** a * (1 - x) ** b;

/**
 * Bilinear 2D linear interpolation between four values
 * @param p00 Value 1
 * @param p10 Value 2
 * @param p01 Value 3
 * @param p11 Value 4
 * @param tx The X amount
 * @param ty The Y amount
 * @returns The 2d bilinear interpolation
 */
export const bilerp = (p00: number, p10: number, p01: number, p11: number, tx: number, ty: number): number =>
  lerp(lerp(p00, p10, tx), lerp(p01, p11, tx), ty);

/**
 * Interpolation of t over an Hermite spline defined by two values and two tangents.
 * @param t the position on the interpolation spline (between 0 and 1)
 * @param v1 the first control point
 * @param tangent1 the first tangent
 * @param v2 the second control point
 * @param tangent2 the second tangent
 * @returns hermite interpolation
 */
export const hermite = (t: number, v1: number, tangent1: number, v2: number, tangent2: number): number => {
  const tt = t * t;
  const tt3 = tt * 3;
  const ttt = t * tt;
  const ttt2 = ttt * 2;
  return v1 * (ttt2 - tt3 + 1) + v2 * (tt3 - ttt2) + tangent1 * (t + ttt - tt * 2) + tangent2 * (ttt - tt);
};

/**
 * Gets the first derivative at the given position t of an Hermite spline defined by two values and two tangents
 * @param t the position on the interpolation spline (between 0 and 1)
 * @param v1 the first control point
 * @param tangent1 the first tangent
 * @param v2 the second control point
 * @param tangent2 the second tangent
 * @returns first derivative of an hermite iterpolation
 */
export const hermite_derivative = (t: number, v1: number, tangent1: number, v2: number, tangent2: number): number => {
  const tt = t * t;
  const tt3 = tt * 3;
  return ((tt - t) * v1 + (t - tt) * v2) * 6 + (tt3 + 1 - t * 4) * tangent1 + (tt3 - t * 2) * tangent2;
};

/**
 * Gets the second derivative at the given position t of an Hermite spline defined by two values and two tangents
 * @param t the position on the interpolation spline (between 0 and 1)
 * @param v1 the first control point
 * @param tangent1 the first tangent
 * @param v2 the second control point
 * @param tangent2 the second tangent
 * @returns first derivative of an hermite iterpolation
 */
export const hermite_derivative2 = (t: number, v1: number, tangent1: number, v2: number, tangent2: number): number =>
  (12 * v1 + 6 * (tangent1 + tangent2) - 12 * v2) * t + (6 * (v2 - v1) - 4 * tangent1 - 2 * tangent2);

/**
 * Creates a new xoshiro/128** random generator. Returns a function that when invoked returns a new uint32 value.
 * Period is 2**128 − 1
 * See https://prng.di.unimi.it/
 */
export const random_xoshiro128 = (seed0: number, seed1: number, seed2: number, seed3: number) => (): number => {
  const result = int32_rotl(seed1 * 5, 7) * 9;
  const t = seed1 << 9;
  seed2 ^= seed0;
  seed3 ^= seed1;
  seed1 ^= seed2;
  seed0 ^= seed3;
  seed2 ^= t;
  seed3 = int32_rotl(seed3, 11);
  return result;
};

/** Computes the 2D cross product, also known as the perpendicular dot product */
export const perpDotProduct2D = (ax: number, ay: number, bx: number, by: number): number => ax * by - ay * bx;

/** Computes the 2D dot product */
export const dot2D = (ax: number, ay: number, bx: number, by: number): number => ax * bx + ay * by;

/** Computes the 3D dot product */
export const dot3D = (ax: number, ay: number, az: number, bx: number, by: number, bz: number): number =>
  ax * bx + ay * by + az * bz;

/** Computes the 4D dot product */
export const dot4D = (
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  aw: number,
  bw: number,
): number => ax * bx + ay * by + az * bz + aw * bw;

/** Returns x * x + y * y */
export const lengthSquared2D = (x: number, y: number): number => x * x + y * y;

/* Returns  x * x + y * y + z * z */
export const lengthSquared3D = (x: number, y: number, z: number): number => x * x + y * y + z * z;

/* Returns x * x + y * y + z * z + w * w */
export const lengthSquared4D = (x: number, y: number, z: number, w: number): number => x * x + y * y + z * z + w * w;

/** Returns sqrt(x * x + y * y). Same as hypot(x, y) but faster */
export const length2D = (x: number, y: number): number => sqrt(x * x + y * y);

/* Returns sqrt(x * x + y * y + z * z). Same as hypot(x, y, z) but faster */
export const length3D = (x: number, y: number, z: number): number => sqrt(x * x + y * y + z * z);

/* Returns sqrt(x * x + y * y + z * z + w * w). Same as hypot(x, y, z, w) but faster */
export const length4D = (x: number, y: number, z: number, w: number): number => sqrt(x * x + y * y + z * z + w * w);

/** Gets the signed area of a 2D triangle */
export const triangleSignedArea2D = (ax: number, ay: number, bx: number, by: number, cx: number, cy: number): number =>
  (by - ay) * (cx - bx) - (bx - ax) * (cy - by);

/** Gets the angle in radians between two vectors */
export const angle2D = /* @__PURE__ */ (ax: number, ay: number, bx: number, by: number): number =>
  atan2(bx - ax, by - ay);

/** Gets the angle in radians between two vectors */
export const angle3D = /* @__PURE__ */ (
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
): number =>
  acos_safe((ax * bx + ay * by + az * bz) / sqrt((ax * ax + ay * ay + az * bz) * (bx * bx + by * by + az * bz)));

/** Gets the angle in radians between two vectors */
export const angle4D = (
  ax: number,
  ay: number,
  az: number,
  aw: number,
  bx: number,
  by: number,
  bz: number,
  bw: number /* @__PURE__ */,
): number =>
  acos_safe(
    (ax * bx + ay * by + az * bz + aw * bw) /
      sqrt((ax * ax + ay * ay + az * bz + aw * bw) * (bx * bx + by * by + az * bz + aw * bw)),
  );
