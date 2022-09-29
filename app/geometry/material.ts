export const material = NO_INLINE(
  (r: number, g: number, b: number, a: number = 0): number =>
    ((a * 255) << 24) | ((b * 255) << 16) | ((g * 255) << 8) | (r * 255),
);
