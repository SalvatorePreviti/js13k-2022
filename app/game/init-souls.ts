import { polygon_regular } from "../geometry/geometry";
import { identity, abs } from "../math";
import { newSoul } from "./objects";

export const initSouls = () => {
  // SOUL 0 - soul after first boat
  newSoul(identity.translate(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);

  // SOUL 1 - soul after first gate
  newSoul(
    identity.translate(0, 2.8),
    [5, 10, 3],
    [-5, 10, 3],
    ...polygon_regular(18).map(({ x, z }) => [x * 7, z * 10, 4.5 - abs(x) * 2]),
  );

  // SOUL 3 - soul in the central area, after the rotating hex corridor
  newSoul(identity.translate(-100, 0.2, 75 - 20), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);

  // SOUL 4 - soul after the central gate
  newSoul(identity.translate(-89, 0.2, 75 + 5), [0, 0, 6]);

  // SOUL 6 - soul over the grid with hex holes
  newSoul(identity.translate(-38.9, 2.9 - 11.3, 75 - 38 - 58), [0, 0, 12]);

  // SOUL 7 - soul after the second boat
  newSoul(identity.translate(8 - 123, 0.2, -12), [0, 0, 3.5]);

  // SOUL 8 - soul after the pushing rods
  newSoul(identity.translate(30 - 123, -3, -28 - 12).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);

  // SOUL 11 - soul in the last platform
  newSoul(identity.translate(0, 3.9, 95), ...polygon_regular(9).map(({ x, z }) => [x * 9, z * 9, 4]));

  // SOUL 12 - soul after the pendulums
  newSoul(identity.translate(0, 19.9, 115 + 39 - 20), [0, 0, 3.5]);
};
