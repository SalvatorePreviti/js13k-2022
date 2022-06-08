import {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atanh,
  atan2,
  ceil,
  cbrt,
  expm1,
  cos,
  cosh,
  floor,
  fround,
  hypot,
  log1p,
  log2,
  log10,
  mathMax,
  mathMin,
  mathRandom,
  round,
  sin,
  sinh,
  sqrt,
  tan,
  tanh,
  trunc,
  EULER,
  LN10,
  LN2,
  LOG10E,
  LOG2E,
  PI,
  SQRT1_2,
  SQRT2,
  pow,
  pow2,
  pow3,
  pow4,
  exp,
  log,
  sign,
  MIN_POSITIVE_VALUE,
  min,
  max,
  negate,
  reciprocal,
  add,
  sub,
  mul,
  mod,
  div,
  int32_and,
  int32_xor,
  int32_or,
  int32_not,
  int32_shl,
  int32_shr,
  uint32_shr,
  isPow2,
  int32_isPow2,
  POSITIVE_INFINITY,
  NEGATIVE_INFINITY,
  int32_clz,
  int32_mul,
  ease_cubic_in,
  ease_octic_in,
  ease_quadratic_in,
  ease_quartic_in,
  ease_quintic_in,
  ease_septic_in,
  ease_sextic_in,
  EPSILON,
  MAX_VALUE,
  degToRad,
  radToDeg,
  TWO_PI,
  clamp,
  ANGSTROM_IN_METERS,
  APERY_CONSTANT,
  ASTRONOMICAL_UNIT_IN_METERS,
  ATTO,
  CONWAY_CONSTANT,
  DEFAULT_TOLERANCE,
  DEG_PER_RAD,
  EULER_MASCHERONI,
  EXA,
  FEMTO,
  FLOAT_EPSILON,
  FLOAT_MAX_VALUE,
  FLOAT_MIN_NEGATIVE_VALUE,
  FLOAT_MIN_POSITIVE_VALUE,
  FOOT_IN_METERS,
  GIGA,
  GLAISHER_CONSTANT,
  GOLDEN_RATIO,
  GRAVITATIONAL_CONSTANT,
  INCH_IN_METERS,
  INT16_MAX_VALUE,
  INT16_MIN_NEGATIVE_VALUE,
  INT32_MAX_VALUE,
  INT32_MIN_NEGATIVE_VALUE,
  INT8_MAX_VALUE,
  INT8_MIN_NEGATIVE_VALUE,
  INV_GOLDEN_RATIO,
  INV_PI,
  KHINCHIN_CONSTANT,
  KILO,
  LIFE_THE_UNIVERSE_AND_EVERYTHING,
  LIGHT_YEAR_IN_METERS,
  LOG_GOLDEN_RATIO,
  LOG_SQRT_TWO_PI,
  MAX_SAFE_INTEGER,
  MEGA,
  MICRO,
  MILE_IN_METERS,
  MILLI,
  MIN_NEGATIVE_VALUE,
  NANO,
  NAUTICAL_MILE_IN_METERS,
  PARSEC_IN_METERS,
  PETA,
  PICO,
  PI_OVER_EIGHT,
  PI_OVER_FIVE,
  PI_OVER_FOUR,
  PI_OVER_SEVEN,
  PI_OVER_SIX,
  PI_OVER_THREE,
  PI_OVER_TWO,
  RAD_PER_DEG,
  SOLAR_MASS_IN_KILOGRAMS,
  SPEED_OF_LIGHT,
  SQRT3,
  SQRT5,
  SQRT7,
  SQRT_PI,
  SQRT_TWO_PI,
  TERA,
  TWO_POW_28,
  UINT16_MAX_VALUE,
  UINT32_MAX_VALUE,
  UINT8_MAX_VALUE,
  YARD_IN_METERS,
  YOCTO,
  YOTTA,
  ZEPTO,
  ZETTA,
  Infinity,
  int32_popcnt,
  ceil_pow2,
  floor_pow2,
  eq_zero,
  eq_almost_relative,
  angle_wrap_signed,
  eq_almost,
  angle_wrap,
  angle_delta_signed,
  angle_delta,
  wrap_signed,
  wrap,
  wrap_pingPong,
  GCD,
  LCM,
  acos_safe,
  asin_safe,
  uint32_xor,
  uint32_and,
  uint32_or,
  uint32_mul,
  uint32_shl,
  uint32_not,
  uint32_nextPowerOfTwo,
  uint32_prevPowerOfTwo,
  uint32,
  int32,
  int32_ctz,
  int32_rotl,
  int32_rotr,
  uint32_rotl,
  uint32_rotr,
  eq,
  neq,
  gt,
  gte,
  lt,
  lte,
  uint16,
  int16,
  eq_almost_zero,
  exp2,
  exp10,
  uint8,
} from "app/math/math";
import { expect } from "chai";

describe("math math", () => {
  it("has working GCD, LCM", () => {
    expect(GCD(24, 18)).to.equal(6);
    expect(LCM(24, 18)).to.equal(72);
  });

  it("has working acos_safe", () => {
    expect(acos_safe(-2)).to.equal(Math.acos(-1));
    expect(acos_safe(-1)).to.equal(Math.acos(-1));
    expect(acos_safe(0)).to.equal(Math.acos(0));
    expect(acos_safe(1)).to.equal(Math.acos(1));
    expect(acos_safe(2)).to.equal(Math.acos(1));
  });

  it("has working asin_safe", () => {
    expect(asin_safe(-2)).to.equal(Math.asin(-1));
    expect(asin_safe(-1)).to.equal(Math.asin(-1));
    expect(asin_safe(0)).to.equal(Math.asin(0));
    expect(asin_safe(1)).to.equal(Math.asin(1));
    expect(asin_safe(2)).to.equal(Math.asin(1));
  });

  it("exportes all Math functions", () => {
    expect(Math.acos).to.equal(acos);
    expect(Math.acosh).to.equal(acosh);
    expect(Math.asin).to.equal(asin);
    expect(Math.asinh).to.equal(asinh);
    expect(Math.atan).to.equal(atan);
    expect(Math.atanh).to.equal(atanh);
    expect(Math.atan2).to.equal(atan2);
    expect(Math.ceil).to.equal(ceil);
    expect(Math.cbrt).to.equal(cbrt);
    expect(Math.expm1).to.equal(expm1);
    expect(Math.clz32).to.equal(int32_clz);
    expect(Math.cos).to.equal(cos);
    expect(Math.cosh).to.equal(cosh);
    expect(Math.exp).to.equal(exp);
    expect(Math.floor).to.equal(floor);
    expect(Math.fround).to.equal(fround);
    expect(Math.hypot).to.equal(hypot);
    expect(Math.imul).to.equal(int32_mul);
    expect(Math.log).to.equal(log);
    expect(Math.log1p).to.equal(log1p);
    expect(Math.log2).to.equal(log2);
    expect(Math.log10).to.equal(log10);
    expect(Math.max).to.equal(mathMax);
    expect(Math.min).to.equal(mathMin);
    expect(Math.random).to.equal(mathRandom);
    expect(Math.round).to.equal(round);
    expect(Math.sin).to.equal(sin);
    expect(Math.sinh).to.equal(sinh);
    expect(Math.sqrt).to.equal(sqrt);
    expect(Math.tan).to.equal(tan);
    expect(Math.tanh).to.equal(tanh);
    expect(Math.trunc).to.equal(trunc);
    expect(Math.E).to.equal(EULER);
    expect(Math.LN10).to.equal(LN10);
    expect(Math.LN10).to.equal(LN10);
    expect(Math.LN2).to.equal(LN2);
    expect(Math.LOG10E).to.equal(LOG10E);
    expect(Math.LOG2E).to.equal(LOG2E);
    expect(Math.PI).to.equal(PI);
    expect(Math.SQRT1_2).to.equal(SQRT1_2);
    expect(Math.SQRT2).to.equal(SQRT2);
  });

  describe("constants", () => {
    expect(EPSILON).eq(2.220446049250313e-16);
    expect(MAX_VALUE).eq(1.7976931348623157e308);
    expect(EULER).eq(2.718281828459045);
    expect(LN10).eq(2.302585092994046);
    expect(LN2).eq(0.6931471805599453);
    expect(LOG10E).eq(0.4342944819032518);
    expect(LOG2E).eq(1.4426950408889634);
    expect(PI).eq(3.141592653589793);
    expect(SQRT1_2).eq(0.7071067811865476);
    expect(SQRT2).eq(1.4142135623730951);
    expect(NaN).to.be.NaN;
    expect(Infinity).to.equal(Number.POSITIVE_INFINITY);
    expect(UINT8_MAX_VALUE).eq(255);
    expect(UINT16_MAX_VALUE).eq(65525);
    expect(UINT32_MAX_VALUE).eq(4294967295);
    expect(INT32_MAX_VALUE).eq(2147483647);
    expect(INT32_MIN_NEGATIVE_VALUE).eq(-2147483648);
    expect(INT8_MAX_VALUE).eq(127);
    expect(INT8_MIN_NEGATIVE_VALUE).eq(-128);
    expect(INT16_MAX_VALUE).eq(32767);
    expect(INT16_MIN_NEGATIVE_VALUE).eq(-32768);
    expect(LIFE_THE_UNIVERSE_AND_EVERYTHING).eq(42);
    expect(MAX_SAFE_INTEGER).eq(9007199254740991);
    expect(MIN_POSITIVE_VALUE).eq(5e-324);
    expect(MIN_NEGATIVE_VALUE).eq(-1.7976931348623157e308);
    expect(DEFAULT_TOLERANCE).eq(1e-7);
    expect(FLOAT_EPSILON).eq(1.1920928955078125e-7);
    expect(FLOAT_MAX_VALUE).eq(3.4028234663852886e38);
    expect(FLOAT_MIN_POSITIVE_VALUE).eq(1.1754943508222875e-38);
    expect(FLOAT_MIN_NEGATIVE_VALUE).eq(-3.4028234663852886e38);
    expect(POSITIVE_INFINITY).eq(Infinity);
    expect(NEGATIVE_INFINITY).eq(-Infinity);
    expect(INV_PI).eq(0.3183098861837907);
    expect(TWO_PI).eq(6.283185307179586);
    expect(PI_OVER_TWO).eq(1.5707963267948966);
    expect(PI_OVER_THREE).eq(1.0471975511965976);
    expect(PI_OVER_FOUR).eq(0.7853981633974483);
    expect(PI_OVER_FIVE).eq(0.6283185307179586);
    expect(PI_OVER_SIX).eq(0.5235987755982988);
    expect(PI_OVER_SEVEN).eq(0.4487989505128276);
    expect(PI_OVER_EIGHT).eq(0.39269908169872414);
    expect(SQRT_PI).eq(1.7724538509055159);
    expect(SQRT_TWO_PI).eq(2.5066282746310002);
    expect(SQRT3).eq(1.7320508075688772);
    expect(SQRT5).eq(2.23606797749979);
    expect(SQRT7).eq(2.6457513110645907);
    expect(DEG_PER_RAD).eq(0.017453292519943295);
    expect(RAD_PER_DEG).eq(57.29577951308232);
    expect(GOLDEN_RATIO).eq(1.618033988749895);
    expect(INV_GOLDEN_RATIO).eq(0.6180339887498948);
    expect(LOG_GOLDEN_RATIO).eq(0.48121182505960347);
    expect(LOG_SQRT_TWO_PI).eq(0.9189385332046727);
    expect(EULER_MASCHERONI).eq(0.5772156649015329);
    expect(APERY_CONSTANT).eq(1.2020569031595942);
    expect(CONWAY_CONSTANT).eq(1.3035772690342964);
    expect(KHINCHIN_CONSTANT).eq(2.6854520010653062);
    expect(GLAISHER_CONSTANT).eq(1.2824271291006226);
    expect(YOTTA).eq(1e24);
    expect(ZETTA).eq(1e21);
    expect(EXA).eq(1000000000000000000);
    expect(PETA).eq(1000000000000000);
    expect(TERA).eq(1000000000000);
    expect(GIGA).eq(1000000000);
    expect(MEGA).eq(1000000);
    expect(KILO).eq(1000);
    expect(MILLI).eq(0.001);
    expect(MICRO).eq(0.000001);
    expect(NANO).eq(1e-9);
    expect(PICO).eq(1e-12);
    expect(FEMTO).eq(1e-15);
    expect(ATTO).eq(1e-18);
    expect(ZEPTO).eq(1e-21);
    expect(YOCTO).eq(1e-24);
    expect(INCH_IN_METERS).eq(0.0254);
    expect(FOOT_IN_METERS).eq(0.3048);
    expect(YARD_IN_METERS).eq(0.9144);
    expect(MILE_IN_METERS).eq(1609.344);
    expect(NAUTICAL_MILE_IN_METERS).eq(1852);
    expect(ASTRONOMICAL_UNIT_IN_METERS).eq(149597870691);
    expect(LIGHT_YEAR_IN_METERS).eq(9460536207070000);
    expect(PARSEC_IN_METERS).eq(30856775813500000);
    expect(ANGSTROM_IN_METERS).eq(1e-10);
    expect(SPEED_OF_LIGHT).eq(299792458);
    expect(GRAVITATIONAL_CONSTANT).eq(6.673e-11);
    expect(SOLAR_MASS_IN_KILOGRAMS).eq(1.98892e30);
    expect(TWO_POW_28).eq(268435456);
  });

  describe("sign", () => {
    it("works for positive values", () => {
      expect(sign(0.1)).to.equal(1);
      expect(sign(1)).to.equal(1);
      expect(sign(2)).to.equal(1);
      expect(sign(POSITIVE_INFINITY)).to.equal(1);
    });

    it("works for 0", () => {
      expect(sign(0)).to.equal(0);
    });

    it("works for -0", () => {
      expect(sign(Number.parseFloat("-0")).toString()).to.equal("0");
    });

    it("works for negative values", () => {
      expect(sign(-0.1)).to.equal(-1);
      expect(sign(-1)).to.equal(-1);
      expect(sign(-2)).to.equal(-1);
      expect(sign(NEGATIVE_INFINITY)).to.equal(-1);
    });
  });

  it("int32_popcnt", () => {
    expect(int32_popcnt(0)).eq(0);
    expect(int32_popcnt(1)).eq(1);
    expect(int32_popcnt(0x100000)).eq(1);
    expect(int32_popcnt(0x80000000)).eq(1);
    expect(int32_popcnt(0x10a0a0)).eq(5);
  });

  describe("abs", () => {
    it("works for positive values", () => {
      expect(abs(123)).to.equal(123);
      expect(abs(POSITIVE_INFINITY)).to.equal(POSITIVE_INFINITY);
    });

    it("works for zero", () => {
      expect(abs(0)).to.equal(0);
    });

    it("works for -0", () => {
      expect(abs(-0)).to.equal(0);
    });

    it("works for negative values", () => {
      expect(abs(-4.4)).to.equal(4.4);
      expect(abs(NEGATIVE_INFINITY)).to.equal(POSITIVE_INFINITY);
    });

    it("works for NaN", () => {
      expect(abs(NaN)).to.be.NaN;
    });
  });

  describe("pows", () => {
    it("has working pow", () => {
      expect(pow(1, 1)).to.equal(1);
      expect(pow(4, 12.4)).to.equal(29210829.678681508);
      expect(pow(4, 12.4)).to.equal(29210829.678681508);
      expect(pow(0.5, -3)).to.equal(8);
    });
    it("has working pow2", () => {
      expect(pow2(1)).to.equal(1);
      expect(pow2(2)).to.equal(4);
      expect(pow2(3)).to.equal(9);
    });

    it("has working pow3", () => {
      expect(pow3(1)).to.equal(1);
      expect(pow3(2)).to.equal(8);
      expect(pow3(3)).to.equal(27);
    });

    it("has working pow4", () => {
      expect(pow4(1)).to.equal(1);
      expect(pow4(2)).to.equal(16);
      expect(pow4(3)).to.equal(81);
    });
  });

  describe("int32_isPow2", () => {
    it("returns true for power of two", () => {
      expect(int32_isPow2(1)).to.equal(true);
      expect(int32_isPow2(2)).to.equal(true);
      expect(int32_isPow2(4)).to.equal(true);
      expect(int32_isPow2(8)).to.equal(true);
      expect(int32_isPow2(16)).to.equal(true);
      expect(int32_isPow2(32)).to.equal(true);
      expect(int32_isPow2(64)).to.equal(true);
      expect(int32_isPow2(65536)).to.equal(true);
      expect(int32_isPow2(0x10000000)).to.equal(true);
    });

    it("returns false for 0", () => {
      expect(int32_isPow2(0)).to.equal(false);
    });

    it("returns false for non power of two", () => {
      expect(int32_isPow2(-1)).to.equal(false);
      expect(int32_isPow2(-2)).to.equal(false);
      expect(int32_isPow2(3)).to.equal(false);
      expect(int32_isPow2(5)).to.equal(false);
      expect(int32_isPow2(9)).to.equal(false);
      expect(int32_isPow2(53434)).to.equal(false);
    });

    it("returns false for NaN", () => {
      expect(int32_isPow2(NaN)).to.equal(false);
    });
  });

  describe("isPow2", () => {
    it("returns true for power of two", () => {
      expect(isPow2(1)).to.equal(true);
      expect(isPow2(2)).to.equal(true);
      expect(isPow2(4)).to.equal(true);
      expect(isPow2(8)).to.equal(true);
      expect(isPow2(16)).to.equal(true);
      expect(isPow2(32)).to.equal(true);
      expect(isPow2(64)).to.equal(true);
      expect(isPow2(65536)).to.equal(true);
      expect(isPow2(0x10000000)).to.equal(true);
    });

    it("returns false for 0", () => {
      expect(isPow2(0)).to.equal(false);
    });

    it("returns false for non power of two", () => {
      expect(isPow2(-1)).to.equal(false);
      expect(isPow2(-2)).to.equal(false);
      expect(isPow2(3)).to.equal(false);
      expect(isPow2(5)).to.equal(false);
      expect(isPow2(9)).to.equal(false);
      expect(isPow2(53434)).to.equal(false);
    });

    it("returns false for NaN", () => {
      expect(isPow2(NaN)).to.equal(false);
    });
  });

  describe("ceil_pow2", () => {
    it("returns the next power of two", () => {
      expect(ceil_pow2(0)).to.equal(0);
      expect(ceil_pow2(1)).to.equal(1);
      expect(ceil_pow2(1.5)).to.equal(2);
      expect(ceil_pow2(2)).to.equal(2);
      expect(ceil_pow2(3)).to.equal(4);
      expect(ceil_pow2(3.5)).to.equal(4);
      expect(ceil_pow2(4)).to.equal(4);
      expect(ceil_pow2(12)).to.equal(16);
      expect(ceil_pow2(400.33234)).to.equal(512);
      expect(ceil_pow2(1000000000000)).to.equal(1099511627776);
    });
  });

  describe("floor_pow2", () => {
    it("returns the next power of two", () => {
      expect(floor_pow2(0)).to.equal(0);
      expect(floor_pow2(1)).to.equal(1);
      expect(floor_pow2(1.5)).to.equal(1);
      expect(floor_pow2(2)).to.equal(2);
      expect(floor_pow2(3)).to.equal(2);
      expect(floor_pow2(3.5)).to.equal(2);
      expect(floor_pow2(4)).to.equal(4);
      expect(floor_pow2(12)).to.equal(8);
      expect(floor_pow2(400.33234)).to.equal(256);
      expect(floor_pow2(1000000000000)).to.equal(549755813888);
    });
  });

  it("has working eq_zero", () => {
    expect(eq_zero(NaN)).to.equal(false);
    expect(eq_zero(Infinity)).to.equal(false);
    expect(eq_zero(-1)).to.equal(false);
    expect(eq_zero(0)).to.equal(true);
    expect(eq_zero(1)).to.equal(false);
    expect(eq_zero(5)).to.equal(false);
    expect(eq_zero(MIN_POSITIVE_VALUE)).to.equal(false);
    expect(eq_zero(-MIN_POSITIVE_VALUE)).to.equal(false);
  });

  it("has working min", () => {
    expect(min(0, 1)).to.equal(0);
    expect(min(1, 0)).to.equal(0);
    expect(min(-13, 0)).to.equal(-13);
  });

  it("has working max", () => {
    expect(max(0, 1)).to.equal(1);
    expect(max(1, 0)).to.equal(1);
    expect(max(-13, 30)).to.equal(30);
  });

  it("has working negate", () => {
    expect(negate(123)).to.equal(-123);
  });

  it("has working reciprocal", () => {
    expect(reciprocal(1 / 2)).to.equal(2);
  });

  it("has working add", () => {
    expect(add(3, 5)).to.equal(8);
  });

  it("has working sub", () => {
    expect(sub(3, 5)).to.equal(-2);
  });

  it("has working mul", () => {
    expect(mul(2, 5)).to.equal(10);
  });

  it("has working div", () => {
    expect(div(10, 2)).to.equal(5);
  });

  it("has working mod", () => {
    expect(mod(5, 3)).to.equal(2);
  });

  it("has working int32_ctz", () => {
    expect(int32_ctz(0)).to.eq(32);
    expect(int32_ctz(0b10100000)).to.eq(5);
  });

  it("has working int32 operators", () => {
    expect(int16(1)).to.equal(1);
    expect(int16(0x7fff)).to.equal(0x7fff);
    expect(int16(0xffff)).to.equal(-1);
    expect(int16(0xaffff)).to.equal(-1);
    expect(int32(-1)).to.equal(-1);
    expect(int32(134)).to.equal(134);
    expect(int32_not(0xffffff00)).to.equal(0xff);
    expect(int32_shl(123, 3)).to.equal(123 << 3);
    expect(int32_shr(-1120, 4)).to.equal(-1120 >> 4);
    expect(int32_xor(10, 53)).to.equal(10 ^ 53);
    expect(int32_and(0xaa, 0xa0)).to.equal(0xa0);
    expect(int32_or(0xaa, 0xaf)).to.equal(0xaf);
    expect(int32_mul(0xaa, 0xaf)).to.equal(0xaa * 0xaf);
    expect(int32_shr(1232342352, 3)).to.equal(1232342352 >> 3);
    expect(int32_shr(0xffffffff, 3)).to.equal(0xffffffff >> 3);
    expect(int32_rotl(0xaaa123, 3)).to.equal(89458968);
    expect(int32_rotr(89458968, 3)).to.equal(0xaaa123);
    expect(int32_rotr(0xffffffff, 3)).to.equal(-1);
  });

  it("has working uint32_nextPowerOfTwo", () => {
    expect(uint32_nextPowerOfTwo(1)).to.eq(1);
    expect(uint32_nextPowerOfTwo(2)).to.eq(2);
    expect(uint32_nextPowerOfTwo(100)).to.eq(128);
    expect(uint32_nextPowerOfTwo(0xffffff)).to.eq(0x1000000);
  });

  it("has working uint32_prevPowerOfTwo", () => {
    expect(uint32_prevPowerOfTwo(1)).to.eq(1);
    expect(uint32_prevPowerOfTwo(2)).to.eq(2);
    expect(uint32_prevPowerOfTwo(100)).to.eq(64);
    expect(uint32_prevPowerOfTwo(0xffffff)).to.eq(0x800000);
  });

  it("has working uint32 operators", () => {
    expect(uint8(1)).to.equal(1);
    expect(uint8(0xffff)).to.equal(0xff);
    expect(uint16(1)).to.equal(1);
    expect(uint16(0xffff)).to.equal(0xffff);
    expect(uint16(0xaffff)).to.equal(0xffff);
    expect(uint32(-1)).to.equal(0xffffffff >>> 0);
    expect(uint32(134)).to.equal(134);
    expect(uint32_not(0xffffff00)).to.equal(0xff);
    expect(uint32_xor(10, 53)).to.equal(10 ^ 53);
    expect(uint32_shr(1120, 4)).to.equal(1120 >> 4);
    expect(uint32_shl(1120, 4)).to.equal(1120 << 4);
    expect(uint32_shr(0xffffffff, 8)).to.equal(0xffffff);
    expect(uint32_and(0xaa, 0xa0)).to.equal(0xa0);
    expect(uint32_or(0xaa, 0xaf)).to.equal(0xaf);
    expect(uint32_mul(0xaa, 0xaf)).to.equal(0xaa * 0xaf);
    expect(uint32_rotl(0xaaa123, 3)).to.equal(89458968);
    expect(uint32_rotr(89458968, 3)).to.equal(0xaaa123);
    expect(uint32_rotr(0xffffffff, 3)).to.equal(0xffffffff);
  });

  describe("easeIn powers", () => {
    it("easeIn power function is equivalent to powN", () => {
      expect(ease_quadratic_in).to.equal(pow2);
      expect(ease_cubic_in).to.equal(pow3);
      expect(ease_quartic_in).to.equal(pow4);
      expect(ease_quintic_in(4)).to.equal(4 ** 5);
      expect(ease_sextic_in(4)).to.equal(4 ** 6);
      expect(ease_septic_in(4)).to.equal(4 ** 7);
      expect(ease_octic_in(4)).to.equal(4 ** 8);
    });
  });

  it("has working equality operatos", () => {
    expect(eq(0, 0)).to.equal(true);
    expect(eq(130, 130)).to.equal(true);
    expect(eq(130, 100)).to.equal(false);
    expect(neq(0, 0)).to.equal(false);
    expect(neq(130, 130)).to.equal(false);
    expect(neq(130, 100)).to.equal(true);
    expect(gt(0, 0)).to.equal(false);
    expect(gt(130, 130)).to.equal(false);
    expect(gt(130, 100)).to.equal(true);
    expect(gte(130, 130)).to.equal(true);
    expect(gte(130, 100)).to.equal(true);
    expect(gte(100, 130)).to.equal(false);
    expect(lt(0, 0)).to.equal(false);
    expect(lt(130, 130)).to.equal(false);
    expect(lt(100, 130)).to.equal(true);
    expect(lte(130, 130)).to.equal(true);
    expect(lte(100, 130)).to.equal(true);
    expect(lte(130, 100)).to.equal(false);
  });

  it("has working eq_almost_zero", () => {
    expect(eq_almost_zero(0)).to.equal(true);
    expect(eq_almost_zero(0.00000000001)).to.equal(true);
    expect(eq_almost_zero(0.1)).to.equal(false);
    expect(eq_almost_zero(2, 20)).to.equal(true);
    expect(eq_almost_zero(2, 2)).to.equal(false);
  });

  describe("math eq_almost_relative", () => {
    // Based on https://floating-point-gui.de/errors/comparison/

    it("behaves for medium integers", () => {
      expect(eq_almost_relative(1000000, 1000000, 0.00001)).to.equal(true);
      expect(eq_almost_relative(1000001, 1000000, 0.00001)).to.equal(true);
      expect(eq_almost_relative(1000001, 1000000, 0.00001)).to.equal(true);

      expect(eq_almost_relative(10000, 10001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(10000, 10001, 0.00001)).to.equal(false);
    });

    it("behaves for negative integers", () => {
      expect(eq_almost_relative(-1000000, -1000001, 0.00001)).to.equal(true);
      expect(eq_almost_relative(-1000001, -1000000, 0.00001)).to.equal(true);

      expect(eq_almost_relative(-10000, -10001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(-10001, -10000, 0.00001)).to.equal(false);
    });

    it("behaves for numbers around 1", () => {
      expect(eq_almost_relative(1.0000001, 1.0000002, 0.00001)).to.equal(true);
      expect(eq_almost_relative(1.0000002, 1.0000001, 0.00001)).to.equal(true);

      expect(eq_almost_relative(1.0002, 1.0001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(1.0001, 1.0002, 0.00001)).to.equal(false);
    });

    it("behaves for numbers around -1", () => {
      expect(eq_almost_relative(-1.0000001, -1.0000002, 0.00001)).to.equal(true);
      expect(eq_almost_relative(-1.0000002, -1.0000001, 0.00001)).to.equal(true);

      expect(eq_almost_relative(-1.0002, -1.0001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(-1.0001, -1.0002, 0.00001)).to.equal(false);
    });

    it("behaves for numbers between 0 and 1", () => {
      expect(eq_almost_relative(0.000000001000001, 0.000000001000002, 0.00001)).to.equal(true);
      expect(eq_almost_relative(0.000000001000002, 0.000000001000001, 0.00001)).to.equal(true);

      expect(eq_almost_relative(0.000000000001002, 0.000000000001001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(0.000000000001001, 0.000000000001002, 0.00001)).to.equal(false);
    });

    it("behaves for numbers between -1 and 0", () => {
      expect(eq_almost_relative(-0.000000001000001, -0.000000001000002, 0.00001)).to.equal(true);
      expect(eq_almost_relative(-0.000000001000002, -0.000000001000001, 0.00001)).to.equal(true);

      expect(eq_almost_relative(-0.000000000001002, -0.000000000001001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(-0.000000000001001, -0.000000000001002, 0.00001)).to.equal(false);
    });

    it("returns true for small differences away from zero", () => {
      expect(eq_almost_relative(0.3, 0.30000003, 0.00001)).to.equal(true);
      expect(eq_almost_relative(0.30000003, 0.3, 0.00001)).to.equal(true);
      expect(eq_almost_relative(-0.3, -0.30000003, 0.00001)).to.equal(true);
      expect(eq_almost_relative(-0.30000003, -0.3, 0.00001)).to.equal(true);
    });

    it("behaves with numbers on opposite sides of zero", () => {
      expect(eq_almost_relative(1.000000001, -1.0, 0.00001)).to.equal(false);
      expect(eq_almost_relative(-1.0, 1.000000001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(-1.000000001, 1.0, 0.00001)).to.equal(false);
      expect(eq_almost_relative(1.0, -1.000000001, 0.00001)).to.equal(false);
      expect(eq_almost_relative(10000 * EPSILON, 10000 * -EPSILON, 0.00001)).to.equal(false);

      expect(eq_almost_relative(10 * MIN_POSITIVE_VALUE, 10 * -MIN_POSITIVE_VALUE, 0.00001)).to.equal(true);
      expect(eq_almost_relative(10 * EPSILON, 10 * -EPSILON, 0.00001)).to.equal(false);
    });

    it("behaves with comparisons involving zero", () => {
      expect(eq_almost_relative(0.0, 0.0, 0.000001)).to.equal(true);
      expect(eq_almost_relative(0.0, -0.0, 0.000001)).to.equal(true);
      expect(eq_almost_relative(-0.0, -0.0, 0.000001)).to.equal(true);
      expect(eq_almost_relative(0.00000001, 0.0, 0.000001)).to.equal(false);
      expect(eq_almost_relative(0.0, 0.00000001, 0.000001)).to.equal(false);
      expect(eq_almost_relative(-0.00000001, 0.0, 0.000001)).to.equal(false);
      expect(eq_almost_relative(0.0, -0.00000001, 0.000001)).to.equal(false);

      expect(eq_almost_relative(0.0, 1e-40, 0.01)).to.equal(true);
      expect(eq_almost_relative(1e-40, 0.0, 0.01)).to.equal(true);

      expect(eq_almost_relative(1e-10, 0.0, 0.000001)).to.equal(false);
      expect(eq_almost_relative(0.0, 1e-10, 0.000001)).to.equal(false);

      expect(eq_almost_relative(0.0, -1e-40, 0.1)).to.equal(true);
      expect(eq_almost_relative(-1e-40, 0.0, 0.1)).to.equal(true);

      expect(eq_almost_relative(-1e-23, 0.0, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(0.0, -1e-23, 0.00000001)).to.equal(false);
    });

    it("behaves with comparisons very close to zero", () => {
      expect(eq_almost_relative(MIN_POSITIVE_VALUE, MIN_POSITIVE_VALUE, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(MIN_POSITIVE_VALUE, -MIN_POSITIVE_VALUE, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(-MIN_POSITIVE_VALUE, MIN_POSITIVE_VALUE, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(MIN_POSITIVE_VALUE, 0, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(0, MIN_POSITIVE_VALUE, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(-MIN_POSITIVE_VALUE, 0, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(0, -MIN_POSITIVE_VALUE, 0.00000001)).to.equal(true);

      expect(eq_almost_relative(0.000000001, -MIN_POSITIVE_VALUE, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(0.000000001, MIN_POSITIVE_VALUE, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(MIN_POSITIVE_VALUE, 0.000000001, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(-MIN_POSITIVE_VALUE, 0.000000001, 0.00000001)).to.equal(false);
    });

    it("behaves with extreme values, no overflow issues", () => {
      expect(eq_almost_relative(MAX_VALUE, MAX_VALUE, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(MAX_VALUE, -MAX_VALUE, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(-MAX_VALUE, MAX_VALUE, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(MAX_VALUE, MAX_VALUE / 2, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(MAX_VALUE, -MAX_VALUE / 2, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(-MAX_VALUE, MAX_VALUE / 2, 0.00000001)).to.equal(false);
    });

    it("behaves with infinities", () => {
      expect(eq_almost_relative(POSITIVE_INFINITY, POSITIVE_INFINITY, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(NEGATIVE_INFINITY, NEGATIVE_INFINITY, 0.00000001)).to.equal(true);
      expect(eq_almost_relative(NEGATIVE_INFINITY, POSITIVE_INFINITY, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(POSITIVE_INFINITY, MAX_VALUE, 0.00000001)).to.equal(false);
      expect(eq_almost_relative(NEGATIVE_INFINITY, -MAX_VALUE, 0.00000001)).to.equal(false);
    });

    it("behaves with NaN", () => {
      expect(eq_almost_relative(NaN, NaN));
      expect(eq_almost_relative(NaN, 0.0));
      expect(eq_almost_relative(-0.0, NaN));
      expect(eq_almost_relative(NaN, -0.0));
      expect(eq_almost_relative(0.0, NaN));
      expect(eq_almost_relative(NaN, POSITIVE_INFINITY));
      expect(eq_almost_relative(POSITIVE_INFINITY, NaN));
      expect(eq_almost_relative(NaN, NEGATIVE_INFINITY));
      expect(eq_almost_relative(NEGATIVE_INFINITY, NaN));
      expect(eq_almost_relative(NaN, MAX_VALUE));
      expect(eq_almost_relative(MAX_VALUE, NaN));
      expect(eq_almost_relative(NaN, -MAX_VALUE));
      expect(eq_almost_relative(-MAX_VALUE, NaN));
      expect(eq_almost_relative(NaN, MIN_POSITIVE_VALUE));
      expect(eq_almost_relative(MIN_POSITIVE_VALUE, NaN));
      expect(eq_almost_relative(NaN, -MIN_POSITIVE_VALUE));
      expect(eq_almost_relative(-MIN_POSITIVE_VALUE, NaN));
    });
  });

  describe("@mundus/math trigonometry", () => {
    describe("degToRad", () => {
      it("returns degrees from radians", () => {
        expect(radToDeg(0)).to.equal(0);
        expect(radToDeg(PI / 2)).to.equal(90);
        expect(radToDeg(PI)).to.equal(180);
        expect(radToDeg(PI * 1.5)).to.equal(270);
        expect(radToDeg(PI * 2)).to.equal(360);
      });
    });

    describe("radToDeg", () => {
      it("returns radians from degrees", () => {
        expect(degToRad(0)).to.equal(0);
        expect(degToRad(90)).to.equal(PI / 2);
        expect(degToRad(180)).to.equal(PI);
        expect(degToRad(270)).to.equal(PI * 1.5);
        expect(degToRad(360)).to.equal(PI * 2);
      });
    });

    describe("angle_wrap_signed", () => {
      it("returns 0 for 0", () => {
        expect(angle_wrap_signed(0)).to.equal(0);
        expect(angle_wrap_signed(-0)).to.equal(0);
      });

      it("keep the value as it is if between 0 and PI", () => {
        expect(angle_wrap_signed(PI / 50)).to.equal(PI / 50);
        expect(angle_wrap_signed(PI / 5)).to.equal(PI / 5);
        expect(angle_wrap_signed(PI / 4)).to.equal(PI / 4);
        expect(angle_wrap_signed(PI / 3)).to.equal(PI / 3);
        expect(angle_wrap_signed(PI / 2)).to.equal(PI / 2);
        expect(angle_wrap_signed(PI / 1.1)).to.equal(PI / 1.1);
        expect(angle_wrap_signed(PI / 1.0001)).to.equal(PI / 1.0001);
      });

      it("keep the value as it is if between -PI and 0", () => {
        expect(angle_wrap_signed(-PI / 50)).to.equal(-PI / 50);
        expect(angle_wrap_signed(-PI / 5)).to.equal(-PI / 5);
        expect(angle_wrap_signed(-PI / 4)).to.equal(-PI / 4);
        expect(angle_wrap_signed(-PI / 3)).to.equal(-PI / 3);
        expect(angle_wrap_signed(-PI / 2)).to.equal(-PI / 2);
        expect(angle_wrap_signed(-PI / 1.1)).to.equal(-PI / 1.1);
        expect(angle_wrap_signed(-PI / 1.01)).to.equal(-PI / 1.01);
        expect(angle_wrap_signed(-PI / 1.0001)).to.equal(-PI / 1.0001);
      });

      it("returns 0 for even multiples of PI", () => {
        expect(angle_wrap_signed(2 * PI)).to.equal(0);
        expect(angle_wrap_signed(4 * PI)).to.equal(0);
        expect(angle_wrap_signed(6 * PI)).to.equal(0);
        expect(angle_wrap_signed(8 * PI)).to.equal(0);
        expect(angle_wrap_signed(10 * PI)).to.equal(0);

        expect(angle_wrap_signed(-2 * PI)).to.equal(0);
        expect(angle_wrap_signed(-4 * PI)).to.equal(0);
        expect(angle_wrap_signed(-6 * PI)).to.equal(0);
        expect(angle_wrap_signed(-8 * PI)).to.equal(0);
        expect(angle_wrap_signed(-10 * PI)).to.equal(0);
      });

      it("returns PI for odd multiples of PI", () => {
        expect(angle_wrap_signed(3 * PI)).to.equal(PI);
        expect(angle_wrap_signed(5 * PI)).to.equal(PI);
        expect(angle_wrap_signed(7 * PI)).to.equal(PI);
        expect(angle_wrap_signed(9 * PI)).to.equal(PI);

        expect(angle_wrap_signed(-3 * PI)).to.equal(PI);
        expect(angle_wrap_signed(-5 * PI)).to.equal(PI);
        expect(angle_wrap_signed(-7 * PI)).to.equal(PI);
        expect(angle_wrap_signed(-9 * PI)).to.equal(PI);
      });

      it("wraps some angles", () => {
        expect(eq_almost(angle_wrap_signed(PI + 10), 0.575, 0.001)).to.equal(true);
        expect(eq_almost(angle_wrap_signed(PI - 10), -0.575, 0.001)).to.equal(true);
        expect(eq_almost(angle_wrap_signed(PI + 3), -0.14159, 0.001)).to.equal(true);
        expect(eq_almost(angle_wrap_signed(PI - 3), 0.14159, 0.001)).to.equal(true);
      });
    });

    describe("angle_wrap", () => {
      it("returns 0 for 0", () => {
        expect(angle_wrap(0)).to.equal(0);
        expect(angle_wrap(-0)).to.equal(0);
      });

      it("keep the value as it is if between 0 and 2*PI", () => {
        expect(angle_wrap(PI / 50)).to.equal(PI / 50);
        expect(angle_wrap(PI / 5)).to.equal(PI / 5);
        expect(angle_wrap(PI / 4)).to.equal(PI / 4);
        expect(angle_wrap(PI / 3)).to.equal(PI / 3);
        expect(angle_wrap(PI / 2)).to.equal(PI / 2);
        expect(angle_wrap(PI * 1.5)).to.equal(PI * 1.5);
      });

      it("makes the value positive if between -2*PI and 0", () => {
        expect(angle_wrap(-PI / 50)).to.equal(TWO_PI - PI / 50);
        expect(angle_wrap(-PI / 5)).to.equal(TWO_PI - PI / 5);
        expect(angle_wrap(-PI / 4)).to.equal(TWO_PI - PI / 4);
        expect(angle_wrap(-PI / 3)).to.equal(TWO_PI - PI / 3);
        expect(angle_wrap(-PI / 2)).to.equal(TWO_PI - PI / 2);
        expect(angle_wrap(-PI / 1.1)).to.equal(TWO_PI - PI / 1.1);
        expect(angle_wrap(-PI / 1.01)).to.equal(TWO_PI - PI / 1.01);
        expect(angle_wrap(-PI / 1.0001)).to.equal(TWO_PI - PI / 1.0001);
      });

      it("returns 0 for even multiples of PI", () => {
        expect(angle_wrap(2 * PI)).to.equal(0);
        expect(angle_wrap(4 * PI)).to.equal(0);
        expect(angle_wrap(6 * PI)).to.equal(0);
        expect(angle_wrap(8 * PI)).to.equal(0);
        expect(angle_wrap(10 * PI)).to.equal(0);

        expect(angle_wrap(-2 * PI)).to.equal(0);
        expect(angle_wrap(-4 * PI)).to.equal(0);
        expect(angle_wrap(-6 * PI)).to.equal(0);
        expect(angle_wrap(-8 * PI)).to.equal(0);
        expect(angle_wrap(-10 * PI)).to.equal(0);
      });

      it("returns PI for odd multiples of PI", () => {
        expect(angle_wrap(3 * PI)).to.equal(PI);
        expect(angle_wrap(5 * PI)).to.equal(PI);
        expect(angle_wrap(7 * PI)).to.equal(PI);
        expect(angle_wrap(9 * PI)).to.equal(PI);

        expect(angle_wrap(-3 * PI)).to.equal(PI);
        expect(angle_wrap(-5 * PI)).to.equal(PI);
        expect(angle_wrap(-7 * PI)).to.equal(PI);
        expect(angle_wrap(-9 * PI)).to.equal(PI);
      });

      it("wraps some angles", () => {
        expect(eq_almost(angle_wrap(PI + 10), 0.575, 0.001)).to.equal(true);
        expect(eq_almost(angle_wrap(PI - 10), 5.7079, 0.001)).to.equal(true);
        expect(eq_almost(angle_wrap(PI + 3), 6.14159, 0.001)).to.equal(true);
        expect(eq_almost(angle_wrap(PI - 3), 0.14159, 0.001)).to.equal(true);
      });
    });

    describe("angle_delta_signed", () => {
      it("returns 0 for same angles", () => {
        expect(angle_delta_signed(0, 0)).to.equal(0);
        expect(angle_delta_signed(1, 1)).to.equal(0);
        expect(angle_delta_signed(PI / 2, PI / 2)).to.equal(0);
        expect(angle_delta_signed(PI / 3, PI / 3)).to.equal(0);
        expect(angle_delta_signed(PI, PI)).to.equal(0);
        expect(angle_delta_signed(PI * 1.5, PI * 1.5)).to.equal(0);
        expect(angle_delta_signed(PI * 2, PI * 2)).to.equal(0);
        expect(angle_delta_signed(PI * 3, PI * 3)).to.equal(0);
        expect(angle_delta_signed(PI * 3, PI * 3)).to.equal(0);
      });

      it("computes the difference of few angles", () => {
        expect(angle_delta_signed(-4.5 * PI, -3 * PI).toFixed(5)).to.equal("-1.57080");
        expect(angle_delta_signed(-4.5 * PI, 3 * PI).toFixed(5)).to.equal("-1.57080");
        expect(angle_delta_signed(-4 * PI, 1 * PI).toFixed(5)).to.equal("3.14159");
        expect(angle_delta_signed(-3.5 * PI, -5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(-3.5 * PI, -4 * PI).toFixed(5)).to.equal("-1.57080");
        expect(angle_delta_signed(-3 * PI, 2.5 * PI).toFixed(5)).to.equal("-1.57080");
        expect(angle_delta_signed(-2.5 * PI, 4 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(-2 * PI, 2 * PI).toFixed(5)).to.equal("0.00000");
        expect(angle_delta_signed(-0.5 * PI, 0 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(0.5 * PI, -5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(0.5 * PI, -4 * PI).toFixed(5)).to.equal("-1.57080");
        expect(angle_delta_signed(0.5 * PI, 1 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(1 * PI, -2.5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(1.5 * PI, 0 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(2 * PI, -4 * PI).toFixed(5)).to.equal("0.00000");
        expect(angle_delta_signed(2 * PI, 0 * PI).toFixed(5)).to.equal("0.00000");
        expect(angle_delta_signed(2.5 * PI, -1 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta_signed(3.5 * PI, -5 * PI).toFixed(5)).to.equal("-1.57080");
        expect(angle_delta_signed(3.5 * PI, -2 * PI).toFixed(5)).to.equal("1.57080");
      });
    });

    describe("angle_delta", () => {
      it("returns 0 for same angles", () => {
        expect(angle_delta(0, 0)).to.equal(0);
        expect(angle_delta(1, 1)).to.equal(0);
        expect(angle_delta(PI / 2, PI / 2)).to.equal(0);
        expect(angle_delta(PI / 3, PI / 3)).to.equal(0);
        expect(angle_delta(PI, PI)).to.equal(0);
        expect(angle_delta(PI * 1.5, PI * 1.5)).to.equal(0);
        expect(angle_delta(PI * 2, PI * 2)).to.equal(0);
        expect(angle_delta(PI * 3, PI * 3)).to.equal(0);
        expect(angle_delta(PI * 3, PI * 3)).to.equal(0);
      });

      it("computes the difference of few angles", () => {
        expect(angle_delta(-4 * PI, 0 * PI).toFixed(5)).to.equal("0.00000");
        expect(angle_delta(-4 * PI, 1 * PI).toFixed(5)).to.equal("3.14159");
        expect(angle_delta(-3.5 * PI, -2.5 * PI).toFixed(5)).to.equal("3.14159");
        expect(angle_delta(-3.5 * PI, -0.5 * PI).toFixed(5)).to.equal("3.14159");
        expect(angle_delta(-3 * PI, 1.5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta(-2 * PI, -4.5 * PI).toFixed(5)).to.equal("4.71239");
        expect(angle_delta(-1 * PI, -1.5 * PI).toFixed(5)).to.equal("4.71239");
        expect(angle_delta(-1 * PI, -1 * PI).toFixed(5)).to.equal("0.00000");
        expect(angle_delta(-1 * PI, 0.5 * PI).toFixed(5)).to.equal("4.71239");
        expect(angle_delta(-1 * PI, 1.5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta(-0.5 * PI, -4 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta(-0.5 * PI, 1.5 * PI).toFixed(5)).to.equal("0.00000");
        expect(angle_delta(-0.5 * PI, 2 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta(0 * PI, 2.5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta(0.5 * PI, -0.5 * PI).toFixed(5)).to.equal("3.14159");
        expect(angle_delta(2.5 * PI, -4.5 * PI).toFixed(5)).to.equal("3.14159");
        expect(angle_delta(3 * PI, -0.5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta(3 * PI, 3 * PI).toFixed(5)).to.equal("0.00000");
        expect(angle_delta(3.5 * PI, -5 * PI).toFixed(5)).to.equal("4.71239");
        expect(angle_delta(4 * PI, -3.5 * PI).toFixed(5)).to.equal("1.57080");
        expect(angle_delta(4 * PI, 4 * PI).toFixed(5)).to.equal("0.00000");
      });
    });

    describe("wrap_signed", () => {
      it("returns 0 for 0", () => {
        expect(wrap_signed(0, 2)).to.equal(0);
        expect(wrap_signed(-0, 2)).to.equal(0);
      });

      it("returns length/2 for length/2 or -length/2", () => {
        expect(wrap_signed(1, 2)).to.equal(1);
        expect(wrap_signed(-1, 2)).to.equal(1);
      });

      it("keep the value as it is if between 0 and length/2", () => {
        expect(wrap_signed(2 / 50, 2)).to.equal(2 / 50);
        expect(wrap_signed(2 / 5, 2)).to.equal(2 / 5);
        expect(wrap_signed(2 / 4, 2)).to.equal(2 / 4);
        expect(wrap_signed(2 / 3, 2)).to.equal(2 / 3);
        expect(wrap_signed(2 / 2, 2)).to.equal(2 / 2);
      });

      it("keep the value as it is if between -length/2 and 0", () => {
        expect(wrap_signed(-2 / 50, 2)).to.equal(-2 / 50);
        expect(wrap_signed(-2 / 5, 2)).to.equal(-2 / 5);
        expect(wrap_signed(-2 / 4, 2)).to.equal(-2 / 4);
        expect(wrap_signed(-2 / 3, 2)).to.equal(-2 / 3);
      });

      it("returns 0 for even values", () => {
        expect(wrap_signed(2, 2)).to.equal(0);
        expect(wrap_signed(4, 2)).to.equal(0);
        expect(wrap_signed(6, 2)).to.equal(0);
        expect(wrap_signed(8, 2)).to.equal(0);
        expect(wrap_signed(10, 2)).to.equal(0);

        expect(wrap_signed(-2, 2)).to.equal(0);
        expect(wrap_signed(-4, 2)).to.equal(0);
        expect(wrap_signed(-6, 2)).to.equal(0);
        expect(wrap_signed(-8, 2)).to.equal(0);
        expect(wrap_signed(-10, 2)).to.equal(0);
      });

      it("returns length/2 for odd values", () => {
        expect(wrap_signed(3, 2)).to.equal(1);
        expect(wrap_signed(5, 2)).to.equal(1);
        expect(wrap_signed(7, 2)).to.equal(1);
        expect(wrap_signed(9, 2)).to.equal(1);

        expect(wrap_signed(-3, 2)).to.equal(1);
        expect(wrap_signed(-5, 2)).to.equal(1);
        expect(wrap_signed(-7, 2)).to.equal(1);
        expect(wrap_signed(-9, 2)).to.equal(1);
      });

      it("wraps some values", () => {
        expect(eq_almost(wrap_signed(2 + 10.5, 2.5), 0, 0.001)).to.equal(true);
        expect(eq_almost(wrap_signed(2 - 10.5, 2.5), -1, 0.001)).to.equal(true);
        expect(eq_almost(wrap_signed(2 + 3.5, 2.5), 0.5, 0.001)).to.equal(true);
        expect(eq_almost(wrap_signed(2 - 3.5, 2.5), 1, 0.001)).to.equal(true);
      });
    });

    describe("wrap", () => {
      it("returns 0 for 0", () => {
        expect(wrap(0, 2)).to.equal(0);
        expect(wrap(-0, 2)).to.equal(0);
      });

      it("returns 0 for length or -length", () => {
        expect(wrap(2, 2)).to.equal(0);
        expect(wrap(-2, 2)).to.equal(0);
      });

      it("keep the value as it is if between 0 and length", () => {
        expect(wrap(2 / 50, 2)).to.equal(2 / 50);
        expect(wrap(2 / 5, 2)).to.equal(2 / 5);
        expect(wrap(2 / 4, 2)).to.equal(2 / 4);
        expect(wrap(2 / 3, 2)).to.equal(2 / 3);
        expect(wrap(2 / 2, 2)).to.equal(2 / 2);
      });

      it("makes the value positive if negative and length is negative", () => {
        expect(wrap(2 / 50, -2)).to.equal(2 / 50 - 2);
        expect(wrap(2 / 5, -2)).to.equal(2 / 5 - 2);
        expect(wrap(2 / 4, -2)).to.equal(2 / 4 - 2);
        expect(wrap(2 / 3, -2)).to.equal(2 / 3 - 2);
        expect(wrap(2 / 2, -2)).to.equal(2 / 2 - 2);
      });

      it("make the value positive if negative", () => {
        expect(wrap(-2 / 50, 2)).to.equal(2 - 2 / 50);
        expect(wrap(-2 / 5, 2)).to.equal(2 - 2 / 5);
        expect(wrap(-2 / 4, 2)).to.equal(2 - 2 / 4);
        expect(wrap(-2 / 3, 2)).to.equal(2 - 2 / 3);
      });

      it("keep the value as it is if negative with negative length", () => {
        expect(wrap(-2 / 50, -2)).to.equal(-2 / 50);
        expect(wrap(-2 / 5, -2)).to.equal(-2 / 5);
        expect(wrap(-2 / 4, -2)).to.equal(-2 / 4);
        expect(wrap(-2 / 3, -2)).to.equal(-2 / 3);
      });

      it("returns 0 for even values", () => {
        expect(wrap(2, 2)).to.equal(0);
        expect(wrap(4, 2)).to.equal(0);
        expect(wrap(6, 2)).to.equal(0);
        expect(wrap(8, 2)).to.equal(0);
        expect(wrap(10, 2)).to.equal(0);

        expect(wrap(-2, 2)).to.equal(0);
        expect(wrap(-4, 2)).to.equal(0);
        expect(wrap(-6, 2)).to.equal(0);
        expect(wrap(-8, 2)).to.equal(0);
        expect(wrap(-10, 2)).to.equal(0);
      });

      it("returns 0 for even values with negative length", () => {
        expect(wrap(2, -2)).to.equal(0);
        expect(wrap(4, -2)).to.equal(0);
        expect(wrap(6, -2)).to.equal(0);
        expect(wrap(8, -2)).to.equal(0);
        expect(wrap(10, -2)).to.equal(0);

        expect(wrap(-2, -2)).to.equal(0);
        expect(wrap(-4, -2)).to.equal(0);
        expect(wrap(-6, -2)).to.equal(0);
        expect(wrap(-8, -2)).to.equal(0);
        expect(wrap(-10, -2)).to.equal(0);
      });

      it("returns length/2 for odd values", () => {
        expect(wrap(3, 2)).to.equal(1);
        expect(wrap(5, 2)).to.equal(1);
        expect(wrap(7, 2)).to.equal(1);
        expect(wrap(9, 2)).to.equal(1);

        expect(wrap(-3, 2)).to.equal(1);
        expect(wrap(-5, 2)).to.equal(1);
        expect(wrap(-7, 2)).to.equal(1);
        expect(wrap(-9, 2)).to.equal(1);
      });

      it("returns -length/2 for odd values with negative length", () => {
        expect(wrap(3, -2)).to.equal(-1);
        expect(wrap(5, -2)).to.equal(-1);
        expect(wrap(7, -2)).to.equal(-1);
        expect(wrap(9, -2)).to.equal(-1);

        expect(wrap(-3, -2)).to.equal(-1);
        expect(wrap(-5, -2)).to.equal(-1);
        expect(wrap(-7, -2)).to.equal(-1);
        expect(wrap(-9, -2)).to.equal(-1);
      });

      it("wraps some values", () => {
        expect(eq_almost(wrap(2 + 10.5, 2.5), 0, 0.001)).to.equal(true);
        expect(eq_almost(wrap(2 - 10.5, 2.5), 1.5, 0.001)).to.equal(true);
        expect(eq_almost(wrap(2 + 3.5, 2.5), 0.5, 0.001)).to.equal(true);
        expect(eq_almost(wrap(2 - 3.5, 2.5), 1, 0.001)).to.equal(true);
      });
    });

    describe("wrap_pingPong", () => {
      it("wraps some values following triangle wave", () => {
        expect(wrap_pingPong(-3.8, 3).toFixed(1)).to.equal("2.2");
        expect(wrap_pingPong(-3.4, 3).toFixed(1)).to.equal("2.6");
        expect(wrap_pingPong(-3, 3).toFixed(1)).to.equal("3.0");
        expect(wrap_pingPong(-2.6, 3).toFixed(1)).to.equal("2.6");
        expect(wrap_pingPong(-2.2, 3).toFixed(1)).to.equal("2.2");
        expect(wrap_pingPong(-1.8, 3).toFixed(1)).to.equal("1.8");
        expect(wrap_pingPong(-1.4, 3).toFixed(1)).to.equal("1.4");
        expect(wrap_pingPong(-1, 3).toFixed(1)).to.equal("1.0");
        expect(wrap_pingPong(-0.6, 3).toFixed(1)).to.equal("0.6");
        expect(wrap_pingPong(-0.2, 3).toFixed(1)).to.equal("0.2");
        expect(wrap_pingPong(0.2, 3).toFixed(1)).to.equal("0.2");
        expect(wrap_pingPong(0.6, 3).toFixed(1)).to.equal("0.6");
        expect(wrap_pingPong(1, 3).toFixed(1)).to.equal("1.0");
        expect(wrap_pingPong(1.4, 3).toFixed(1)).to.equal("1.4");
        expect(wrap_pingPong(1.8, 3).toFixed(1)).to.equal("1.8");
        expect(wrap_pingPong(2.2, 3).toFixed(1)).to.equal("2.2");
        expect(wrap_pingPong(2.6, 3).toFixed(1)).to.equal("2.6");
        expect(wrap_pingPong(3, 3).toFixed(1)).to.equal("3.0");
        expect(wrap_pingPong(3.4, 3).toFixed(1)).to.equal("2.6");
        expect(wrap_pingPong(3.8, 3).toFixed(1)).to.equal("2.2");
        expect(wrap_pingPong(4.2, 3).toFixed(1)).to.equal("1.8");
        expect(wrap_pingPong(4.6, 3).toFixed(1)).to.equal("1.4");
        expect(wrap_pingPong(5, 3).toFixed(1)).to.equal("1.0");
        expect(wrap_pingPong(5.4, 3).toFixed(1)).to.equal("0.6");
        expect(wrap_pingPong(5.8, 3).toFixed(1)).to.equal("0.2");
      });
    });

    describe("clamp", () => {
      it("clamps by default between 0 and 1", () => {
        expect(clamp(-3)).to.eq(0);
        expect(clamp(3)).to.eq(1);
      });
      it("clamps a negative value between a minimum and a maximum", () => {
        expect(clamp(-4, -4, 5.5)).to.equal(-4);
        expect(clamp(-5, -4, 5.5)).to.equal(-4);
        expect(clamp(-5131, -4, 5.5)).to.equal(-4);
        expect(clamp(-Infinity, -4, 5.5)).to.equal(-4);
      });

      it("clamps a positive value between a minimum and a maximum", () => {
        expect(clamp(5.9, -4, 5.5)).to.equal(5.5);
        expect(clamp(6, -4, 5.5)).to.equal(5.5);
        expect(clamp(5131, -4, 5.5)).to.equal(5.5);
        expect(clamp(Infinity, -4, 5.5)).to.equal(5.5);
      });

      it("returns the same value if within range", () => {
        expect(clamp(5, 0, 10)).to.equal(5);
        expect(clamp(5, -120, 10)).to.equal(5);
        expect(clamp(-55, -120, 10)).to.equal(-55);
      });
    });
  });

  it("has working exp2,exp10", () => {
    expect(exp2(5)).to.equal(32);
    expect(exp10(6)).to.equal(1000000);
  });
});
