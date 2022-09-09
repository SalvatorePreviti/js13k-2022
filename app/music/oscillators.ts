/** oscillator 0 */
export const osc_sin = (value: number) => Math.sin(value * Math.PI * 2);

/** oscillator 1 */
export const osc_square = (value: number) => (value % 1 < 0.5 ? 1 : -1);

/** oscillator 2 */
export const osc_saw = (value: number) => 2 * (value % 1) - 1;

/** oscillator 3 */
export const osc_tri = (value: number) => {
  const v2 = (value % 1) * 4;
  return v2 < 2 ? v2 - 1 : 3 - v2;
};
