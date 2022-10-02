import {
  levers,
  souls,
  MODEL_KIND_MESH,
  MODEL_KIND_GAME_NO_ATTACH_PLAYER,
  MODEL_ID_FIRST_BOAT,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  MODEL_ID_LEVER,
  MODEL_ID_SOUL_COLLISION,
  MODEL_ID_SOUL,
  MODEL_ID_ROTATING_PLATFORM,
} from "./models";
import { clamp, lerpneg, abs, max, min } from "../math/math";
import { GQuad, cylinder, polygon_regular, sphere, cylinder_sides } from "../geometry/geometry";
import { csg_union, csg_polygons_subtract } from "../geometry/csg";
import {
  firstBoatLerp,
  secondBoatLerp,
  rotatingHexCorridorRotation,
  rotatingPlatform1Rotation,
  rotatingPlatform2Rotation,
} from "./world-state";
import { translation, rotation, scaling } from "../math/matrix-transforms";
import { integers_map } from "../math/integers-map";
import { gameTime } from "./game-time";
import { checkModelId, meshAdd, newLever, newModel, newSoul } from "./models-factory";
import { polygon_transform, polygons_transform, type Polygon } from "../geometry/polygon";
import { material } from "../geometry/material";

export const build_life_the_universe_and_everything = (): 42 | void => {
  if (DEBUG) {
    console.time("build_life_the_universe_and_everything");
  }
  const HORN_STACKS = 10;

  const hornsMatrices = integers_map(HORN_STACKS + 1, (i: number) =>
    translation(Math.sin((i / HORN_STACKS) * Math.PI), i / HORN_STACKS)
      .rotate(10 * (i / HORN_STACKS))
      .scale(1.0001 - i / HORN_STACKS, 0, 1 - i / HORN_STACKS),
  );

  const hornPolygons = integers_map(HORN_STACKS, (i) =>
    cylinder_sides(
      polygon_transform(polygon_regular(18), hornsMatrices[i]!).reverse(),
      polygon_transform(polygon_regular(18), hornsMatrices[i + 1]!),
      1,
    ),
  ).flat();

  // Initialize the full screen triangle for the sky. Must be the first model.

  newModel(() => meshAdd([GQuad.slice(1)], translation(-2).scale3d(3).rotate(90, 0)), MODEL_KIND_MESH);

  newModel(() => {
    const boatAnimationMatrix = (matrix: DOMMatrix, x: number, y: number, z: number) =>
      matrix
        .translateSelf(x + Math.sin(gameTime + 2) / 5, y + Math.sin(gameTime * 0.8) / 3, z)
        .rotateSelf(Math.sin(gameTime) * 2, Math.sin(gameTime * 0.7), Math.sin(gameTime * 0.9));

    const makeBigArcPolygons = (height: number) =>
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(0, -height / 2).scale(6, height - 1, 2.2)),
        polygons_transform(cylinder(), translation(0, -height / 2 - 6).scale(4, height - 3, 4)),
        polygons_transform(
          cylinder(32, 1),
          translation(0, height / 2 - 9)
            .rotate(90, 0, 90)
            .scale3d(4),
        ),
      );

    const boatPolygons = csg_polygons_subtract(
      polygons_transform(
        cylinder(30, 1, 1.15, 1),
        translation(0, -3).scale(3.5, 1, 3.5),
        material(0.7, 0.4, 0.25, 0.7),
      ),
      polygons_transform(cylinder(30, 1, 1.3, 1), translation(0, -2.5).scale(2.6, 1, 3), material(0.7, 0.4, 0.25, 0.2)),
      polygons_transform(cylinder(), translation(4, -1.2).scale3d(2), material(0.7, 0.4, 0.25, 0.3)),
    );

    const gateBarsPolygons = integers_map(7, (i) =>
      polygons_transform(
        cylinder(6, 1),
        translation(4 * (i / 6 - 0.5), 3).scale(0.2, 3, 0.2),
        material(0.3, 0.3, 0.38),
      ),
    ).flat();

    // ========= FIRST BOAT (modelId:2) ========= //

    newModel((model) => {
      checkModelId("FIRST_BOAT", MODEL_ID_FIRST_BOAT);
      model._update = (matrix) => boatAnimationMatrix(matrix, -12, 4.2, -66 + firstBoatLerp * 40);
      meshAdd(boatPolygons);

      // LEVER 0 - lever over the first boat
      newLever(translation(0, -3, 4));
    });

    // LEVER 1 - lever for the first gate, after the first boat
    newLever(translation(-5.4, 1.5, -19).rotate(0, -90));

    // ========= WORLD! ========= //

    if (DEBUG) {
      /// XXX TODO DEBUG

      meshAdd(cylinder(), translation(0, 0, 0).scale(1, 5, 1), material(0.3, 0.3, 0.38));
      meshAdd(cylinder(), translation(3, 0, 3).scale(1, 5, 1).rotate(0, 45), material(0.3, 0.3, 0.38));
    }

    // SOUL 0 - soul after first boat
    newSoul(translation(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);

    // SOUL 1 - soul after first gate
    newSoul(
      translation(0, 2.8),
      [5, 10, 3],
      [-5, 10, 3],
      ...polygon_regular(18).map(({ x, z }) => [x * 7, z * 10, 4.5 - abs(x) * 2]),
    );

    // first boat attachment

    meshAdd(cylinder(), translation(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), material(0.8, 0.8, 0.8, 0.2));

    // gate columns
    GQuad.map(({ x, z }) =>
      meshAdd(cylinder(6), translation(x * 3, 3, z * 15).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4)),
    );

    // in and out
    meshAdd(cylinder(), translation(0, 0, -23).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2));
    meshAdd(cylinder(), translation(0, 0, 22).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2));

    [-15, 15].map((z, i) => {
      //  gate top
      meshAdd(cylinder(), translation(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4));
      //  gate bottom
      meshAdd(cylinder(), translation(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3));
      // in and out gate bars
      newModel((model) => {
        model._update = (matrix) =>
          matrix.translateSelf(0, 0, z).scaleSelf(1, clamp(1.22 - levers[i + 1]!.$lerpValue), 1);
        meshAdd(gateBarsPolygons);
      });
    });

    // horns

    integers_map(5, (i) =>
      integers_map(2, (j) =>
        meshAdd(
          hornPolygons,
          translation((j - 0.5) * 18.5, 0, i * 4.8 - 9.5)
            .rotate(0, 180 - j * 180)
            .scale(1.2, 10, 1.2),
          material(1, 1, 0.8, 0.2),
        ),
      ),
    );

    meshAdd(cylinder(), translation(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2));

    // first lever pad
    meshAdd(cylinder(), translation(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), material(0.75, 0.75, 0.75, 0.2));
    meshAdd(cylinder(5), translation(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), material(0.6, 0.3, 0.3, 0.4));

    // descent

    meshAdd(
      cylinder(),
      rotation(0, 60).translate(14.8, -1.46, -1).rotate(-30).scale(4, 0.6, 4.5),
      material(0.8, 0.2, 0.2, 0.5),
    );

    // base

    meshAdd(
      csg_polygons_subtract(
        csg_union(
          // lower base
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            translation(8, -3, -4).scale(13, 1, 13),
            material(0.7, 0.7, 0.7, 0.2),
          ),

          // hole extension
          polygons_transform(cylinder(6), translation(0, -8).scale(9, 8, 8), material(0.4, 0.2, 0.5, 0.5)),

          // middle base
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            translation(0, -0.92).scale(13, 2, 13),
            material(0.8, 0.8, 0.8, 0.2),
          ),
        ),
        // hole
        polygons_transform(cylinder(5), scaling(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),

        // smooth hole
        polygons_transform(cylinder(5, 0, 1.5), translation(0, 1).scale(4.5, 0.3, 4.5), material(0.7, 0.5, 0.9, 0.2)),

        // descent cut
        polygons_transform(
          cylinder(),
          rotation(0, 60).translate(14, 0.7, -1).rotate(-35).scale(2, 2, 2),
          material(0.5, 0.5, 0.5, 0.5),
        ),

        // lower lever pad
        polygons_transform(cylinder(6), translation(15, -1.5, 4).scale(3.5, 1, 3.5), material(0.5, 0.5, 0.5, 0.5)),
      ),
    );

    // moving central platform in the first level

    newModel((model) => {
      model._update = (matrix) =>
        matrix.translateSelf(
          0,
          levers[3]!.$lerpValue > 0.01
            ? (Math.cos(gameTime * 1.5) * 5 + 2) * levers[3]!.$lerpValue2 * (1 - levers[2]!.$lerpValue) +
                (1 - levers[3]!.$lerpValue) * -15
            : // invisible
              -500,
          0,
        );
      meshAdd(cylinder(5), translation(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3));

      // LEVER 2 - lever over the central moving platform
      newLever(translation(0, 1.2));
    });

    // LEVER 3, lever in the descent of the first level
    newLever(translation(15, -2, 4));

    // ******** LEVEL 2 ********

    const level2Oscillation = () => min(levers[2]!.$lerpValue2, 1 - levers[4]!.$lerpValue2);

    const blackPlatform = (freq: number, amplitude: number, pz: number) =>
      newModel((model) => {
        model._update = (matrix) =>
          matrix.translateSelf(level2Oscillation() * Math.sin(freq * 3 + gameTime * freq) * amplitude);
        GQuad.map(({ x, z }) => {
          // column body
          meshAdd(cylinder(11, 1), translation(x * 4, 4, pz + z * 4).scale(0.8, 3, 0.8), material(0.5, 0.3, 0.7, 0.6));
          // column top
          meshAdd(cylinder(), translation(x * 4, 7, pz + z * 4).scale(1, 0.3), material(0.5, 0.5, 0.5, 0.3));
        });

        meshAdd(
          csg_polygons_subtract(
            polygons_transform(cylinder(), translation(0, 0, pz).scale(5, 1, 5), material(0.8, 0.8, 0.8, 0.3)),
            ...[-1, 1].map((i) =>
              polygons_transform(
                cylinder(),
                translation(5 * i, 0.2, pz)
                  .rotate(i * -30)
                  .scale(4, 1, 2),
                material(0.8, 0.8, 0.8, 0.3),
              ),
            ),
          ),
        );
        // bottom
        meshAdd(cylinder(), translation(0, -3, pz).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
      });

    blackPlatform(0.7, 12, 35);
    blackPlatform(1, 8.2, 55);

    // central oscillating platform
    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(level2Oscillation() * Math.sin(gameTime / 1.5 + 2) * 12);
      meshAdd(
        csg_polygons_subtract(
          csg_union(
            polygons_transform(cylinder(), scaling(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
            polygons_transform(cylinder(6), scaling(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
            polygons_transform(cylinder(), translation(0, -2).scale(2, 3.2, 1.9), material(0.3, 0.8, 0.5, 0.5)),
            polygons_transform(cylinder(16, 1, 0, 4), scaling(1, 1, 1.5).rotate(0, 90), material(0.9, 0.9, 0.9, 0.2)),
          ),
          polygons_transform(cylinder(), scaling(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6)),
        ),
        translation(0, 0, 45),
      );

      // SOUL 2 - soul over the central oscillating platform in the second level
      newSoul(translation(0, 2.8, 45), [0, 0, 4.5]);
    });

    const level3Oscillation = () =>
      clamp(1 - level2Oscillation() * 5) * lerpneg(levers[4]!.$lerpValue, levers[5]!.$lerpValue);

    // ******** LEVEL 3 ********

    meshAdd(cylinder(), translation(-21.1 + 2.45, -3, 55).scale(2.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));

    // triangle platform

    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf((1 - level2Oscillation()) * 9.8);

      meshAdd(cylinder(3), translation(-23, -1.7, 55.8).scale(5, 0.7, 8.3), material(0.3, 0.6, 0.6, 0.2));
      meshAdd(cylinder(8), translation(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), material(0.8, 0.8, 0.8, 0.2));
      meshAdd(cylinder(), translation(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3));
      meshAdd(cylinder(), translation(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3));

      newLever(translation(-23, -0.5, 66.5));
    });

    // vertically oscillating mini platforms

    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(0, level3Oscillation() * Math.sin(gameTime * (1.5 * 0.9)) * 4);

      meshAdd(cylinder(), translation(-21.1 - 1.45, -3, 55).scale(1.45, 1.4, 2.7), material(0.7, 0.7, 0.7, 0.2));

      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), scaling(3, 1.4, 2.7)),
          polygons_transform(cylinder(), scaling(1.2, 8, 1.2)),
        ),
        translation(-33, -3, 55),
        material(0.7, 0.7, 0.7, 0.2),
      );
    });

    // horizontaly oscillating mini platforms

    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(0, 0, level3Oscillation() * Math.sin(gameTime * 0.9) * 8);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), translation(-27, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2)),
          polygons_transform(cylinder(), translation(-27, -3, 55).scale(1, 3), material(0.9, 0.9, 0.9, 0.2)),
        ),
      );

      meshAdd(cylinder(), translation(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
    });

    // hex corridor door

    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(0, levers[4]!.$lerpValue2 * -6.5);
      meshAdd(
        cylinder(6),
        translation(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9),
        material(0.7, 0.7, 0.7, 0.4),
      );
    });

    newLever(translation(-55, -1.1, 46).rotate(0, 90));

    meshAdd(cylinder(6), translation(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3));
    meshAdd(cylinder(7), translation(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3));

    // hex corridor

    const hexCorridorPolygons = [
      ...polygons_transform(cylinder(), translation(0, -3).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
      ...csg_polygons_subtract(
        polygons_transform(cylinder(6), rotation(90).scale(6, 8, 6), material(0.3, 0.6, 0.6, 0.3)),
        polygons_transform(
          cylinder(4, 0, 0.01),
          translation(0, 6).scale(12, 2, 0.75).rotate(0, 45),
          material(0.3, 0.6, 0.6, 0.3),
        ),
        polygons_transform(cylinder(6), rotation(90).scale(5, 12, 5), material(0.3, 0.6, 0.6, 0.3)),
        ...[5, 0, -5].map((x) =>
          polygons_transform(
            cylinder(5),
            translation(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8),
            material(0.3, 0.6, 0.6, 0.3),
          ),
        ),
      ),
    ];

    meshAdd(hexCorridorPolygons, translation(-53, 0, 55));

    // rotating hex corridor

    newModel((model) => {
      model._update = (matrix) =>
        matrix
          .translateSelf(-75, (1 - levers[5]!.$lerpValue2) * (1 - levers[6]!.$lerpValue) * 3, 55)
          .rotateSelf(180 * (1 - levers[5]!.$lerpValue2) + rotatingHexCorridorRotation, 0);
      meshAdd(hexCorridorPolygons);
    }, MODEL_KIND_GAME_NO_ATTACH_PLAYER);

    // connection from rotating hex corridor to platforms

    meshAdd(cylinder(), translation(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), material(0.7, 0.7, 0.7, 0.2));

    meshAdd(
      cylinder(3, 0, -0.5),
      translation(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
      material(0.8, 0.8, 0.8, 0.2),
    );

    // platform after the rotating hex corridor

    meshAdd(
      csg_polygons_subtract(
        csg_union(
          // base
          polygons_transform(cylinder(), translation(-100, -2.4, 55).scale(8, 0.9, 8), material(0.8, 0.8, 0.8, 0.2)),
          // right path to the boat
          polygons_transform(
            cylinder(),
            translation(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3),
            material(0.8, 0.8, 0.8, 0.2),
          ),
          // straiht line
          polygons_transform(cylinder(), translation(-100, -2.6, 70).scale(3, 1.1, 7), material(0.8, 0.8, 0.8, 0.2)),
          // 45 degrees detour
          polygons_transform(
            cylinder(),
            translation(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5),
            material(0.8, 0.8, 0.8, 0.2),
          ),
          // 45 degrees detour hexagon
          polygons_transform(
            cylinder(6),
            translation(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15),
            material(0.6, 0.6, 0.6, 0.3),
          ),

          // ascension
          polygons_transform(
            cylinder(),
            translation(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6),
            material(0.8, 0.8, 0.8, 0.2),
          ),
          // ascension continuation
          polygons_transform(cylinder(), translation(-100, 0.42, 92).scale(3, 1.1, 4.1), material(0.8, 0.8, 0.8, 0.2)),
        ),

        // decorative octagon
        polygons_transform(cylinder(8), translation(-100, -1, 55).scale(7, 0.9, 7), material(0.3, 0.3, 0.3, 0.4)),
        polygons_transform(cylinder(8), translation(-100, -2, 55).scale(4, 0.3, 4), material(0.4, 0.4, 0.4, 0.5)),
        polygons_transform(
          cylinder(8, 0, -3.1),
          translation(-100, -3, 55).scale(0.4, 1, 0.4),
          material(0.4, 0.4, 0.4, 0.5),
        ),
      ),
    );

    // SOUL 3 - soul in the central area, after the rotating hex corridor
    newSoul(translation(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);

    // SOUL 4 - soul after the central gate
    newSoul(translation(-89, 0.2, 80), [0, 0, 6]);

    // first arc door

    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(-100, 1, 63).scale(7.5, 4), material(0.5, 0.5, 0.5, 0.4)),
        polygons_transform(cylinder(), translation(-100, 0, 70).scale(2, 2, 10), material(0.5, 0.5, 0.5, 0.4)),
        polygons_transform(
          cylinder(20, 1),
          translation(-100, 2, 70).scale(2, 2, 10).rotate(90, 0),
          material(0.5, 0.5, 0.5, 0.4),
        ),
      ),
    );

    // central gate bars
    newModel((model) => {
      model._update = (matrix) =>
        matrix.translateSelf(-99.7, -1.9, 63.5).scaleSelf(1, clamp(1.1 - levers[6]!.$lerpValue), 1);
      meshAdd(gateBarsPolygons);
    });

    // hex columns

    GQuad.map(({ x, z }) => {
      meshAdd(cylinder(6), translation(-100 + x * 7, -3, z * 7 + 55).scale(1, 8.1), material(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map((i) =>
        meshAdd(
          cylinder(6),
          translation(-100 + x * 7, i, z * 7 + 55).scale(1.3, 0.5, 1.3),
          material(0.4, 0.2, 0.2, 0.8),
        ),
      );
    });

    // crystals

    integers_map(7, (i) => {
      meshAdd(
        cylinder(((i * 23 + 1) % 5) + 5, 0, 0.5),
        translation(-101 + Math.sin(i) * 5 + i, -2.3 - i, 44.9 - i * 2.8).scaleSelf(5 + i / 2, 1 + i / 6, 5 + i / 3),
        material(0.5 - i / 17, 0.5 - (i & 1) / 9, 0.6, 0.3),
      );
    });

    // crystals continuation pad

    meshAdd(cylinder(), translation(-87, -9.5, 24).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4));

    // lever pad

    meshAdd(cylinder(4), translation(-86, -9.2, 27).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3));

    meshAdd(cylinder(12, 1), translation(-86, -9, 31).scale(1.5, 1, 1.5), material(0.3, 0.3, 0.4, 0.1));

    newLever(translation(-86, -7.5, 31));

    // elevators

    const shouldOscillate = () => lerpneg(levers[7]!.$lerpValue2, levers[6]!.$lerpValue2);

    newModel((model) => {
      model._update = (matrix) =>
        matrix.translateSelf(
          0,
          (1 - max(levers[6]!.$lerpValue, levers[7]!.$lerpValue)) * 3.5 + shouldOscillate() * Math.sin(gameTime) * 5,
        );
      [0, 12, 24].map((x) =>
        meshAdd(
          cylinder(),
          translation(x - 76.9, x / -16 - 10, 24)
            .rotate(0, 0, -2)
            .skewX(-2)
            .scale(2.8, 1.4, 3),
          material(0.2, 0.5, 0.6, 0.2),
        ),
      );
    });

    newModel((model) => {
      model._update = (matrix) =>
        matrix.translateSelf(
          0,
          shouldOscillate() * Math.sin(gameTime + 3) * 6,
          Math.sin(gameTime * 0.6 + 1) * 6 * shouldOscillate(),
        );
      [6, 18].map((x) =>
        meshAdd(
          cylinder(),
          translation(x - 76.9, x / -16 - 10, 24)
            .rotate(0, 0, -3)
            .skewX(-3)
            .scale(2.8, 1.4, 3),
          material(0.1, 0.4, 0.5, 0.2),
        ),
      );
    });

    // pad after elevators

    meshAdd(
      csg_polygons_subtract(
        csg_union(
          // lever pad
          polygons_transform(cylinder(5), translation(0, 0, -7).scale(2, 1.2, 2), material(0.2, 0.4, 0.7, 0.3)),
          // blue pentagon
          polygons_transform(cylinder(5), scaling(9, 1.2, 9), material(0, 0.2, 0.3, 0.5)),
          // base
          polygons_transform(cylinder(), scaling(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)),
        ),
        polygons_transform(cylinder(5), scaling(5.4, 5, 5.4), material(0, 0.2, 0.3, 0.5)),
      ),
      translation(-38.9, -11.3, 17),
    );

    newLever(translation(-38.9, -9.6, 10));

    // central sculpture/monument

    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(0, levers[7]!.$lerpValue2 * -7.3);

      meshAdd(
        csg_polygons_subtract(
          csg_union(
            polygons_transform(cylinder(5), translation(0, 2).scale(5, 7, 5).skewY(8), material(0.2, 0.4, 0.5, 0.5)),
            polygons_transform(
              cylinder(5),
              translation(0, 6).scale(1.1, 7, 1.1).skewY(-8),
              material(0.25, 0.35, 0.5, 0.5),
            ),
            polygons_transform(
              cylinder(5),
              translation(0, 9).scale(0.6, 7, 0.6).skewY(8),
              material(0.35, 0.3, 0.5, 0.5),
            ),
          ),
          polygons_transform(cylinder(5), scaling(4, 8, 4), material(0.2, 0.4, 0.5, 0.5)),
          polygons_transform(
            cylinder(5),
            translation(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35),
            material(0.2, 0.4, 0.5, 0.5),
          ),
        ),
        translation(-38.9, -11.3, 17),
      );

      // SOUL 5 - soul over the central sculpture/monument
      newSoul(translation(-39.1, -0.6, 17).rotate(11), ...polygon_regular(15).map(({ x, z }) => [x * 3, z * 3, 1.2]));
    });

    // columns

    GQuad.map(({ x, z }) => {
      meshAdd(cylinder(14, 1), translation(x * 9 - 38.9, -7.3, z * 11 + 17).scale(1, 4), material(0.25, 0.25, 0.25, 1));
      [1.5, 8].map((y) =>
        meshAdd(
          cylinder(17, 1),
          translation(x * 9 - 38.9, y - 11.3, z * 11 + 17).scale(1.5, 0.5, 1.5),
          material(0.6, 0.6, 0.6, 0.3),
        ),
      );
    });

    // Grid with holes
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          // holed base
          polygons_transform(cylinder(6), translation(0, 0, -36).scale(15, 1.2, 15), material(0.7, 0.7, 0.7, 0.3)),
          // after monument continuation
          polygons_transform(cylinder(), translation(0, 0, -18).scale(4, 1.2, 6), material(0.45, 0.4, 0.6, 0.3)),
        ),
        ...integers_map(6, (z) =>
          integers_map(6, (x) =>
            polygons_transform(
              cylinder(6),
              translation(x * 4.6 - 12 + 2 * (z & 1), 0, z * 4.6 - 50 + Math.sin(x * 4) * 2).scale(2, 5, 2),
              material(0.7, 0.7, 0.7, 0.3),
            ),
          ),
        ).flat(),
      ),
      translation(-38.9, -11.3, 17),
    );

    // SOUL 6 - soul over the grid with hex holes
    newSoul(translation(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);

    // Detour lever pad
    meshAdd(cylinder(5), translation(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), material(0.8, 0.1, 0.25, 0.4));

    // Detour lever
    newLever(translation(-84, -0.5, 85).rotate(0, 45));

    // ******** SECOND BOAT ********

    newModel((model) => {
      model._update = (matrix) => boatAnimationMatrix(matrix, -123, 1.4, 55 + secondBoatLerp * -65);
      meshAdd(boatPolygons);
      newLever(translation(0, -3, -4).rotate(0, 180));
    });

    // ******** LEVEL AFTER SECOND BOAT ********

    // pushing rods

    const shouldPushRods = () => lerpneg(levers[10]!.$lerpValue, levers[11]!.$lerpValue);
    const shouldBlockRods = () => (1 - levers[10]!.$lerpValue) * (1 - shouldPushRods());

    const pushingRod = csg_polygons_subtract(
      polygons_transform(cylinder(), translation(0, -0.5, 1).scale(1.15, 1.2, 6.5), material(0.25, 0.25, 0.35, 0.3)),
      polygons_transform(cylinder(3), translation(0, 0, -5.5).scale(3, 2), material(0.6, 0.3, 0.4, 0.3)),
      ...[-1.2, 1.2].map((i) =>
        polygons_transform(cylinder(), translation(i, -0.5, 1).scale(0.14, 0.3, 6.5), material(0.7, 0.2, 0, 0.3)),
      ),
    );

    newModel((model) => {
      model._update = (matrix) =>
        matrix.translateSelf(0, -2, shouldPushRods() * abs(Math.sin(gameTime * 1.1)) * -8.5 + 10);
      integers_map(2, (x) => meshAdd(pushingRod, translation(-110 + x * 9 + (x & 1), 1.7, -12)));
    });

    newModel((model) => {
      model._update = (matrix) =>
        matrix.translateSelf(0, -2, shouldPushRods() * abs(Math.sin(gameTime * 2.1)) * -8.5 + 10);
      integers_map(2, (x) => meshAdd(pushingRod, translation(-110 + (x + 2) * 9 + (x & 1), 1.7, -12)));
    });

    newModel((model) => {
      model._update = (matrix) =>
        matrix.translateSelf(
          0,
          -2,
          max(shouldBlockRods(), shouldPushRods() * abs(Math.sin(gameTime * 1.5))) * -8.5 + 10,
        );
      integers_map(3, (x) => meshAdd(pushingRod, translation(-106 + x * 9, 1.7, -12)));
    });

    // pushing rods container

    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(), translation(26.5, -1.6, 10).scale(20, 2.08, 3)),
          polygons_transform(cylinder(), translation(26.5, -0.6, 10).scale(19, 2, 0.5)),
        ),
        ...integers_map(4, (x) =>
          polygons_transform(cylinder(), translation(13 + x * 9 + (x & 1), -0.8, 9).scale(1.35, 1.35, 9)),
        ),
        ...integers_map(3, (x) =>
          polygons_transform(cylinder(), translation(17 + x * 9, -0.8, 9).scale(1.35, 1.35, 9)),
        ),
      ),
      translation(-123, 0, -12),
      material(0.5, 0.5, 0.6, 0.2),
    );

    // boat attachment

    newLever(translation(-116, -1.4, -18).rotate(0, 180));

    meshAdd(cylinder(), translation(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), material(0.8, 0.8, 0.8, 0.2));
    meshAdd(cylinder(6), translation(-116, -2.6, -16.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2));

    meshAdd(cylinder(), translation(-115.5, -17, -12).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3));

    meshAdd(cylinder(8), translation(-114, -17, -2).scale(2, 15, 2), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(cylinder(8), translation(-79, -17, -2).scale(2, 15, 2), material(1, 1, 1, 0.3));

    meshAdd(cylinder(), translation(-77, -17, -50.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3));

    // arcs

    integers_map(3, (i) => {
      meshAdd(makeBigArcPolygons(16), translation(i * 12 - 109, -9, -12), material(0.6, 0.6, 0.6, 0.3));

      meshAdd(
        makeBigArcPolygons(16),
        translation(-77, -9, i * -12 - 8 - 12).rotate(0, 90),
        material(0.6, 0.6, 0.6, 0.3),
      );
    });

    // tower

    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(12), translation(-77, -14.5, -12).scale(4, 17.5, 4), material(0.7, 0.7, 0.7, 0.2)),
        polygons_transform(cylinder(), translation(-79, 0.1, -12).scale(3.5, 2, 1.3), material(0.4, 0.5, 0.6, 0.2)),
        polygons_transform(cylinder(), translation(-77, 0.1, -14).scale(1.5, 2, 2), material(0.4, 0.5, 0.6, 0.2)),
        polygons_transform(cylinder(12), translation(-77, 3.1, -12).scale(3, 5, 3), material(0.4, 0.5, 0.6, 0.2)),
      ),
    );

    // internal pad

    meshAdd(cylinder(), translation(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(cylinder(9), translation(-98, -18.4, -40).scale(2.5, 13.5, 2.5), material(0.5, 0.5, 0.5, 0.3));

    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(-93, -5.8, -40).scale(9, 1, 5), material(0.8, 0.8, 0.8, 0.1)),
        polygons_transform(cylinder(9), translation(-98, -5.8, -40).scale(3, 8, 3), material(0.7, 0.7, 0.7, 0.2)),
      ),
    );

    newLever(translation(-98, -4.4, -40).rotate(0, 90));

    // SOUL 7 - soul after the second boat
    newSoul(translation(-115, 0.2, -12), [0, 0, 3.5]);

    // SOUL 8 - soul in the internal pad after the pushing rods
    newSoul(translation(-93, -3, -28 - 12).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);

    // ******** LEVEL AFTER CENTRAL GATE ********

    // base

    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(
            cylinder(6, 0, 0, 0.6),
            translation(-100, 0.7, 105.5).scale(8, 1, 11),
            material(0.7, 0.7, 0.7, 0.2),
          ),
          polygons_transform(
            cylinder(),
            translation(-101.5, 0.7, 93.5).scale(10.5, 1, 2),
            material(0.7, 0.7, 0.7, 0.2),
          ),
        ),
        polygons_transform(cylinder(5), translation(-100, 0.7, 113).scale(4, 3, 4), material(0.7, 0.7, 0.7, 0.2)),
      ),
    );

    // oscillating hex pads

    const hexPadShouldOscillate = () => lerpneg(levers[8]!.$lerpValue2, levers[12]!.$lerpValue2);

    integers_map(4, (i) =>
      newModel((model) => {
        model._update = (matrix) => {
          const osc = hexPadShouldOscillate();
          matrix.translateSelf(
            (i > 2 ? (1 - osc) * 2 + osc : 0) - 100,
            osc * Math.sin(gameTime * 1.3 + i * 1.7) * (3 + i / 3) + 0.7,
            (i & 1 ? -1 : 1) * (1 - levers[8]!.$lerpValue2) * (1 - levers[12]!.$lerpValue2) * -7 +
              max(osc, 0.05) * Math.cos(gameTime * 1.3 + i * 7) * (4 - 2 * (1 - i / 3)) +
              115,
          );
        };
        meshAdd(
          cylinder(6),
          translation(-14.6 - i * 4.8 - (i > 2 ? 2 : 0), -i / 2.5 - 0.1, -21.5)
            .rotate(0, 0, 3.5)
            .skewX(3.5)
            .scale(2.6, 1, 2.5),
          material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3),
        );
      }),
    );

    // after the hex pads

    // donut pad
    newModel((model) => {
      model._update = (matrix) => {
        const osc = hexPadShouldOscillate();
        matrix
          .translateSelf(
            (1 - osc) * 2.5 - 139.7,
            (1 - levers[8]!.$lerpValue) * -3 + osc * Math.sin(gameTime * 0.8) * -1 - 1.8,
            93.5,
          )
          .rotateSelf(Math.cos(gameTime * 1.3) * (osc * 3 + 3), 0);
      };
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(10), scaling(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
          polygons_transform(cylinder(10), scaling(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5)),
        ),
      );

      // second pad
      meshAdd(cylinder(15, 1), translation(-7.5).rotate(0, 90).scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3));
      meshAdd(cylinder(10), translation(-7.5).rotate(0, 90).scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3));
      meshAdd(cylinder(5), translation(-7.5).rotate(0, 90).scale(1, 3), material(0.5, 0.5, 0.5, 0.5));
      newLever(translation(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));

      // lateral horns
      [-1, 1].map((i) =>
        meshAdd(
          hornPolygons,
          rotation(i * 90, 180, 90)
            .translate(0, 5)
            .rotate(40)
            .scale(1.3, 10, 1.3),
          material(1, 1, 0.8, 0.2),
        ),
      );

      // SOUL 9 - soul after the hex pads, in the hex donut with horns
      newSoul(translation(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    });

    // far arc gate door

    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(-100, 0.6, 96.5).scaleSelf(0.88, 1.2 - levers[12]!.$lerpValue);
      meshAdd(gateBarsPolygons);
    });

    // far arc gate
    [-1, 1].map((x) => {
      [7.2, 1.5].map((y) =>
        meshAdd(
          cylinder(15, 1),
          translation(-7.5 * x - 100, y + 0.7, 96).scale(1.1, 0.5, 1.1),
          material(0.5, 0.24, 0.2, 0.4),
        ),
      );

      meshAdd(
        hornPolygons,
        translation(x * -5 - 100, 1.7, 114.5)
          .scale(1.2, 10, 1.2)
          .rotate(0, 90 * x - 90),
        material(1, 1, 0.8),
      );

      meshAdd(cylinder(12, 1), translation(-7.5 * x - 100, 3.7, 96).scale(0.8, 4, 0.8), material(0.6, 0.24, 0.2, 0.5));

      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), translation(x * -4, 3.5, -0.5).scale(4, 4, 0.7), material(0.5, 0.5, 0.5, 0.4)),
          polygons_transform(cylinder(), scaling(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)),
          polygons_transform(
            cylinder(28, 1),
            translation(0, 3, -5).scale(3, 4, 10).rotate(90, 0),
            material(0.6, 0.24, 0.2, 0.5),
          ),
          polygons_transform(
            cylinder(5),
            translation(x * -5.3, 7)
              .rotate(90, 0)
              .scale(1.7, 5, 1.7),
            material(0.6, 0.24, 0.2, 0.5),
          ),
          polygons_transform(
            cylinder(5),
            translation(x * -5.3, 3.8)
              .rotate(90, 0, 35)
              .scale(0.75, 5, 0.75),
            material(0.6, 0.24, 0.2, 0.5),
          ),
        ),
        translation(x - 100, 0.7, 97),
      );
    });

    // left continuation with hole for rotating corridor
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(-82.07, 0.8, 106).scale(11, 0.9, 2.2), material(0.7, 0.7, 0.7, 0.1)),
        polygons_transform(cylinder(45, 1), translation(-81, 0.7, 106).scale3d(7.7), material(0.7, 0.7, 0.7, 0.1)),
      ),
    );

    // rotating platforms

    // First rotating platform (with hole)
    newModel((model) => {
      checkModelId("ROTATING_PLATFORM", MODEL_ID_ROTATING_PLATFORM);
      model._update = (matrix) => matrix.translateSelf(-81, 0.6, 106).rotateSelf(0, 40 + rotatingPlatform1Rotation);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(45, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
          polygons_transform(cylinder(), translation(0, 0, -5.5).scale(1.5, 3, 2.7), material(0.45, 0.45, 0.45, 0.2)),
        ),
      );
      meshAdd(cylinder(8), translation(0, 2).scale(3, 1.5, 3).rotate(0, 22), material(0.7, 0.7, 0.7, 0.1));
      meshAdd(cylinder(5), translation(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2));

      // SOUL 10 - soul over the first rotating platform
      newSoul(translation(0, 3), ...polygon_regular(14).map(({ x, z }) => [x * 5.6, z * 5.6, 2]));
    });

    // Second rotating platform
    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(-65.8, 0.8, 106).rotateSelf(0, rotatingPlatform2Rotation);

      // rotating platform horns
      [-1, 1].map((x) =>
        meshAdd(
          hornPolygons,
          rotation(0, 90)
            .translate(x * -5, 1, -0.5)
            .scale(1.2, 10, 1.2)
            .rotate(0, 90 * x + 90),
          material(1, 1, 0.8),
        ),
      );

      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), scaling(9, 5, 2), material(0.3, 0, 0, 0.3)),
        ),
      );

      meshAdd(polygons_transform(cylinder(28, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });

    // Third rotating platform
    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(-50.7, 0.8, 106).rotateSelf(0, 180 - rotatingPlatform2Rotation);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(0, 0, 7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
        ),
      );
      meshAdd(polygons_transform(cylinder(28, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });

    // Fourth rotating platform
    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(-50.7, 0.8, 91).rotateSelf(0, 270 + rotatingPlatform2Rotation);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(0, 0, -7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
        ),
      );
      meshAdd(polygons_transform(cylinder(28, 1), scaling(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });

    // rotating platforms connecting pads
    meshAdd(cylinder(), translation(-58, 1, 106).scale(2, 0.65, 2), material(0.7, 0.7, 0.7, 0.2));
    meshAdd(cylinder(), translation(-50.7, 1, 99).scale(2, 0.65, 1), material(0.7, 0.7, 0.7, 0.2));

    // exit from the rotating platforms
    meshAdd(cylinder(), translation(-42, 0.4, 91).scale(5, 1, 2.5), material(0.7, 0.7, 0.7, 0.3));
    meshAdd(cylinder(), translation(-34.2, 0.4, 91).scale(3, 1, 3), material(0.7, 0.7, 0.7, 0.3));

    newLever(translation(-34, 2.7, 96).rotate(-12, 0));

    // lever pad
    meshAdd(cylinder(5), translation(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), material(0.2, 0.5, 0.5, 0.6));

    // ******** LEVEL AFTER THE ROTATING PLATFORMS ********

    // jumping pads

    [material(0.1, 0.55, 0.45, 0.2), material(0.2, 0.5, 0.5, 0.3), material(0.3, 0.45, 0.55, 0.4)].map((m, i) =>
      newModel((model) => {
        model._update = (matrix) => {
          const v = lerpneg(levers[13]!.$lerpValue2, levers[14]!.$lerpValue2);
          matrix.translateSelf(
            0,
            (1 - levers[13]!.$lerpValue2) * (1 - levers[14]!.$lerpValue2) * (i ? 0 : 3) +
              v * Math.sin(gameTime * 1.5 + i * 1.5) * 4,
          );
        };
        meshAdd(cylinder(), translation(-23.5, 0.5, 91 + 6.8 * i).scale(i === 1 ? 2 : 3.3, 1, 3.3), m);
        if (i === 2) {
          // in connection
          meshAdd(cylinder(), translation(-29.1, 0.4, 91).scale(2.1, 1, 3), material(0.7, 0.7, 0.7, 0.3));
        }
        if (i === 1) {
          // out connections
          meshAdd(
            cylinder(),
            translation(-16.1, 0.5, 103.5).rotate(-3.5).scale(3.9, 0.8, 2).skewX(-1),
            material(0.6, 0.6, 0.7, 0.3),
          );
        }
      }),
    );

    // horns
    [-1, 1].map((x) =>
      meshAdd(
        hornPolygons,
        translation(x * -8, 1, 85)
          .scale(1.2, 10, 1.2)
          .rotate(0, 90 * x + 90),
        material(1, 1, 0.8),
      ),
    );

    integers_map(3, (i) =>
      meshAdd(
        makeBigArcPolygons(16 + 8.7 - (i & 1) * 0.7),
        translation(i * 6 - 6, 4 - (i & 1), 111 - 0.2 * (i & 1)),
        i & 1 ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5),
      ),
    );

    // middle base
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(
          cylinder(6, 0, 0, 0.3),
          translation(0, -0.92, 95).scale(14, 2, 14),
          material(0.8, 0.8, 0.8, 0.2),
        ),
        polygons_transform(cylinder(5), translation(0, 0, 95).scale3d(6), material(0.3, 0.3, 0.3, 0.5)),
      ),
    );

    newLever(translation(0, 1.7, 82).rotate(0, 180));

    // lever pad

    meshAdd(cylinder(5), translation(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35), material(0.5, 0.3, 0.3, 0.4));

    meshAdd(cylinder(6), translation(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), material(0.5, 0.6, 0.7, 0.3));
    meshAdd(cylinder(), translation(0, 16, 129).scale(1.5, 1, 2), material(0.5, 0.6, 0.7, 0.3));
    meshAdd(cylinder(7), translation(0, 16.2, 133).scale(5, 1, 5), material(0.4, 0.5, 0.6, 0.4));

    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(), translation(0, 16, 110.5).scale(12, 1, 3), material(0.5, 0.3, 0.3, 0.4)),
          polygons_transform(cylinder(), translation(0, 16, 111).scale(3, 1, 3.8), material(0.5, 0.3, 0.3, 0.4)),
        ),

        polygons_transform(cylinder(5), translation(0, 16, 103.5).scale(5.5, 5, 5.5), material(0.5, 0.3, 0.3, 0.4)),
      ),
    );

    // pendulums
    newModel((model) => {
      model._update = (matrix) => matrix.translateSelf(Math.sin(gameTime) * -2).rotateSelf(Math.sin(gameTime) * 25);
      meshAdd(
        cylinder(3),
        translation(0, -3, 118.8).scale(0.8, 0.8, 18).rotate(90, 0, 60),
        material(0.5, 0.3, 0.3, 0.4),
      );
      [22, 30].map((z) => {
        meshAdd(
          cylinder(6),
          translation(0, 16, z + 95)
            .scale(3, 1, 2.3)
            .rotate(0, 90),
          material(0.7, 0.7, 0.7, 0.4),
        );
        meshAdd(cylinder(), translation(0, 6.2, z + 95).scale(0.5, 11, 0.5), material(0.5, 0.3, 0.3, 0.4));
      });
    });

    // floating elevator pad
    newModel((model) => {
      model._update = (matrix) => {
        const v = lerpneg(
          lerpneg((levers[14]!.$lerpValue + levers[14]!.$lerpValue2) / 2, levers[13]!.$lerpValue2),
          (levers[15]!.$lerpValue + levers[15]!.$lerpValue2) / 2,
        );
        matrix.translateSelf(0, v * 16, clamp(v * 2 - 1) * 8.5 + 95);
      };
      meshAdd(cylinder(5), scaling(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4));
      meshAdd(cylinder(5), scaling(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4));

      newLever(translation(0, 1.5, -1).rotate(0, 180));
    });

    // SOUL 11 - soul in the last platform
    newSoul(translation(0, 3, 95), ...polygon_regular(9).map(({ x, z }) => [x * 9, z * 9, 4]));

    // SOUL 12 - soul after the pendulums
    newSoul(translation(0, 19, 134), [0, 0, 3.5]);
  });

  // ------ End of game models ------

  // ------ player model and legs, must be declared just after level model ------

  newModel(() => {
    checkModelId("PLAYER_BODY", MODEL_ID_PLAYER_BODY);

    // head
    meshAdd(sphere(20), translation(0, 1).scale3d(0.5), material(1, 0.3, 0.4));

    // body
    meshAdd(sphere(30), scaling(0.65, 0.8, 0.55), material(1, 0.3, 0.4));

    // mouth
    meshAdd(cylinder(), translation(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));

    [-1, 1].map((i) => {
      // horns
      meshAdd(
        hornPolygons,
        rotation(0, i > 0 ? 180 : 0)
          .translate(0.2, 1.32)
          .rotate(-30)
          .scale(0.2, 0.6, 0.2),
        material(1, 1, 0.8),
      );

      // eyes
      meshAdd(
        polygons_transform(
          csg_polygons_subtract(cylinder(15, 1), polygons_transform(cylinder(), translation(0, 0, 1).scale(2, 2, 0.5))),
          rotation(-90, 0).scale(0.1, 0.05, 0.1),
          material(0.3, 0.3, 0.3),
        ),
        translation(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20),
      );

      // legs
      newModel(() => {
        checkModelId("PLAYER_LEG" + (i < 0 ? 0 : 1), i < 0 ? MODEL_ID_PLAYER_LEG0 : MODEL_ID_PLAYER_LEG1);
        meshAdd(cylinder(20, 1), translation(i * 0.3, -0.8).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
      });
    });
  });

  newModel(() => {
    checkModelId("LEVER", MODEL_ID_LEVER);
    meshAdd(cylinder(6, 1), scaling(0.13, 1.4, 0.13), material(0.3, 0.3, 0.5, 0.1));
    meshAdd(cylinder(10), translation(0, 1).scale(0.21, 0.3, 0.21), material(1, 0.5, 0.2));
    meshAdd(cylinder(3), translation(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2, 0.1));
  }, MODEL_KIND_MESH);

  newModel(() => {
    checkModelId("SOUL_COLLISION", MODEL_ID_SOUL_COLLISION);
    meshAdd(cylinder(6).slice(0, -1), scaling(0.77, 1, 0.77), material(1, 0.3, 0.5));
  }, MODEL_KIND_MESH);

  newModel(() => {
    checkModelId("SOUL", MODEL_ID_SOUL);
    const GHOST_SLICES = 30;
    const GHOST_STACKS = 24;

    // body
    meshAdd(
      sphere(GHOST_SLICES, GHOST_STACKS, (a: number, b: number, polygon: Polygon) => {
        const bm = b / GHOST_STACKS;
        const theta = a * (Math.PI * (2 / GHOST_SLICES));
        const phixz = Math.sin((bm ** 0.6 * Math.PI) / 2);
        const osc = (bm * bm * Math.sin(a * Math.PI * (14 / GHOST_SLICES))) / 4;
        return b > GHOST_STACKS - 1
          ? { x: (polygon.$smooth = 0), y: -0.5, z: 0 }
          : {
              x: Math.cos(theta) * phixz,
              y: Math.cos(bm * Math.PI) - bm - osc,
              z: Math.sin(theta) * phixz + Math.sin(osc * Math.PI * 2) / 4,
            };
      }),
      scaling(0.7, 0.7, 0.7),
      material(1, 1, 1),
    );

    // eyes
    [-1, 1].map((x) => meshAdd(sphere(12), translation(x * 0.16, 0.4, -0.36).scale3d(0.09)));
  }, MODEL_KIND_MESH);

  if (DEBUG) {
    console.timeEnd("build_life_the_universe_and_everything");
    console.log(souls.length + " souls, " + levers.length + " levers");
  }
};
