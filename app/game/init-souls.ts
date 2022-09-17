import { polygon_regular } from "../geometry/geometry";
import { identity, abs } from "../math";
import {
  centralOscillatingPlatformModel,
  centralSculptureMonumentModel,
  donutWithHornsModel,
  firstRotatingPlatformModel,
} from "./level";
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

  // SOUL 2 - soul over the central oscillating platform in the second level
  newSoul(identity.translate(0, 2.8, 45), [0, 0, 4.5]).$parent = centralOscillatingPlatformModel;

  // SOUL 3 - soul in the central area, after the rotating hex corridor
  newSoul(identity.translate(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);

  // SOUL 4 - soul after the central gate
  newSoul(identity.translate(-89, 0.2, 80), [0, 0, 6]);

  // SOUL 5 - soul over the central sculpture/monument
  newSoul(
    identity.translate(0, 11).rotate(0, 0, 10),
    ...polygon_regular(15).map(({ x, z }) => [x * 3, z * 3, 1.5]),
  ).$parent = centralSculptureMonumentModel;

  // SOUL 6 - soul over the grid with hex holes
  newSoul(identity.translate(-38.9, 2.9 - 11.3, 75 - 38 - 58), [0, 0, 12]);

  // SOUL 7 - soul after the second boat
  newSoul(identity.translate(8 - 123, 0.2, -12), [0, 0, 3.5]);

  // SOUL 8 - soul after the pushing rods
  newSoul(identity.translate(30 - 123, -3, -28 - 12).rotate(0, 0, 4), [0, -2, 3.5], [0, 2, 3.5]);

  // SOUL 9 - soul after the hex pads, in the hex donut with horns
  newSoul(identity.translate(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]).$parent = donutWithHornsModel;

  // SOUL 10 - soul over the first rotating platform
  newSoul(identity.translate(0, 3), ...polygon_regular(10).map(({ x, z }) => [x * 5.6, z * 5.6, 2.5])).$parent =
    firstRotatingPlatformModel;

  // SOUL 11 - soul in the last platform
  newSoul(identity.translate(0, 3.9, 95), ...polygon_regular(9).map(({ x, z }) => [x * 9, z * 9, 4]));

  // SOUL 12 - soul after the pendulums
  newSoul(identity.translate(0, 19.9, 115 + 39 - 20), [0, 0, 3.5]);
};
