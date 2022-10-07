import type { Circle } from "./models";
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
import { abs } from "../math/math";
import { GQuad, cylinder, polygon_regular, sphere, cylinder_sides } from "../geometry/geometry";
import { polygon_transform, polygons_transform, type Polygon } from "../geometry/polygon";
import { translation } from "../math/matrix-transforms";
import { integers_map } from "../math/integers-map";
import { checkModelId, meshAdd, newLever, newModel, newSoul } from "./models-factory";
import { material } from "../geometry/material";
import { csg_union, csg_polygons_subtract } from "../geometry/csg";
import { identity } from "../math/matrix";

export const build_life_the_universe_and_everything = (): 42 | void => {
  const HORN_STACKS = 11;

  if (DEBUG) {
    console.time("build_life_the_universe_and_everything");
  }

  const hornMatrix = (i: number) => {
    i /= HORN_STACKS;
    return translation(Math.sin(i * Math.PI), i)
      .rotateSelf(10 * i)
      .scaleSelf(1.001 - i, 1, 1.001 - i);
  };

  const hornPolygons = integers_map(HORN_STACKS, (i) =>
    cylinder_sides(
      polygon_transform(polygon_regular(19), hornMatrix(i), material(1, 1, 0.8, 0.2)).reverse(),
      polygon_transform(polygon_regular(19), hornMatrix(i + 1), material(1, 1, 0.8, 0.2)),
      1,
    ),
  ).flat();

  // Initialize the full screen triangle for the sky. Must be the first model.

  newModel(() => meshAdd([GQuad.slice(1)], translation(-2).scale3d(3).rotate(90, 0)), MODEL_KIND_MESH);

  newModel(() => {
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

    const gateBarsModel = () =>
      newModel(() =>
        integers_map(7, (i) =>
          meshAdd(
            polygons_transform(
              cylinder(9, 1),
              translation(4 * (i / 6 - 0.5), 3).scale(0.2, 3, 0.2),
              material(0.3, 0.3, 0.38),
            ),
          ),
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

    // ========= FIRST BOAT (modelId:2) ========= //

    newModel(() => {
      checkModelId("FIRST_BOAT", MODEL_ID_FIRST_BOAT);
      meshAdd(boatPolygons);

      // LEVER 0 - lever over the first boat
      newLever(translation(0, -3, 4));
    });

    // LEVER 1 - lever for the first gate, after the first boat
    newLever(translation(-5.4, 1.5, -19).rotate(0, -90));

    // SOUL 0 - soul after first boat
    newSoul(translation(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);

    // SOUL 1 - soul after first gate
    newSoul(
      translation(0, 2.8),
      [5, 10, 3],
      [-5, 10, 3],
      ...polygon_regular(18).map(({ x, z }): Circle => [x * 7, z * 10, 4.5 - abs(x) * 2]),
    );

    [-15, 15].map((z, j) => {
      // all 4 gate bars for the whole level
      gateBarsModel();
      gateBarsModel();

      // in and out
      meshAdd(cylinder(), translation(0, 0, j ? 22 : -23).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2));

      //  gate top
      meshAdd(cylinder(), translation(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4));

      //  gate bottom
      meshAdd(cylinder(), translation(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3));

      // horns
      integers_map(5, (i) =>
        meshAdd(
          hornPolygons,
          translation((j - 0.5) * 18.5, 0, i * 4.8 - 9.5)
            .rotate(0, 180 - j * 180)
            .scale(1.2, 10, 1.2),
        ),
      );
    });

    // first boat attachment
    meshAdd(cylinder(), translation(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), material(0.8, 0.8, 0.8, 0.2));

    // small entrance wall
    meshAdd(cylinder(), translation(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2));

    // first lever pad
    meshAdd(cylinder(), translation(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), material(0.75, 0.75, 0.75, 0.2));
    meshAdd(cylinder(5), translation(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), material(0.6, 0.3, 0.3, 0.4));

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

          // middle base
          csg_polygons_subtract(
            polygons_transform(
              cylinder(6, 0, 0, 0.3),
              translation(0, -0.92).scale(13, 2, 13),
              material(0.8, 0.8, 0.8, 0.2),
            ),
            // descent cut
            polygons_transform(
              cylinder(),
              identity.rotate(0, 60).translate(14, 0.5, -1).scale(2.4, 5, 2),
              material(0.5, 0.5, 0.5, 0.5),
            ),
          ),

          // descent
          polygons_transform(
            cylinder(),
            identity.rotate(0, 60).translate(14.8, -1.46, -1).rotate(-30).translate(0, -1).scale(4.03, 1.6, 4.5),
            material(0.8, 0.2, 0.2, 0.5),
          ),

          // hole extension
          polygons_transform(cylinder(6), translation(0, -8).scale(9, 8, 7), material(0.2, 0.1, 0.4, 0.5)),
        ),
        // hole
        polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),

        // smooth hole
        polygons_transform(cylinder(5, 0, 1.5), translation(0, 1).scale(4.5, 0.3, 4.5), material(0.7, 0.5, 0.9, 0.2)),

        // lower lever pad
        polygons_transform(cylinder(6), translation(15, -1.5, 4).scale(3.5, 1, 3.5), material(0.5, 0.5, 0.5, 0.5)),
      ),
    );

    // moving central platform in the first level

    newModel(() => {
      meshAdd(cylinder(5), translation(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3));

      // LEVER 2 - lever over the central moving platform
      newLever(translation(0, 1.2));
    });

    // LEVER 3, lever in the descent of the first level
    newLever(translation(15, -2, 4));

    // ******** LEVEL 2 ********

    // central oscillating platform
    newModel(() => {
      meshAdd(
        csg_polygons_subtract(
          csg_union(
            polygons_transform(cylinder(), identity.scale(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
            polygons_transform(cylinder(6), identity.scale(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
            polygons_transform(cylinder(), translation(0, -2).scale(2, 3.2, 1.9), material(0.3, 0.8, 0.5, 0.5)),
            polygons_transform(
              cylinder(16, 1, 0, 4),
              identity.scale(1, 1, 1.5).rotate(0, 90),
              material(0.9, 0.9, 0.9, 0.2),
            ),
          ),
          polygons_transform(cylinder(), identity.scale(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6)),
        ),
      );

      // SOUL 2 - soul over the central oscillating platform in the second level
      newSoul(translation(0, 2.8), [0, 0, 4.5]);
    });

    // black platforms in the second level

    const blackPlatform = (pz: number) =>
      newModel(() => {
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
                cylinder(25, 1),
                translation(5 * i, 0.2, pz)
                  .rotate(i * -30)
                  .scale(4, 1, 3),
                material(0.8, 0.8, 0.8, 0.3),
              ),
            ),
          ),
        );
        // bottom
        meshAdd(cylinder(), translation(0, -3, pz).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
      });

    blackPlatform(35);
    blackPlatform(55);

    // fixed platform after triangle platform

    meshAdd(cylinder(), translation(-21.1 + 2.45, -3, 55).scale(2.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));

    // triangle platform

    newModel(() => {
      meshAdd(cylinder(3), translation(-23, -1.7, 55.8).scale(5, 0.7, 8.3), material(0.3, 0.6, 0.6, 0.2));
      meshAdd(cylinder(8), translation(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), material(0.8, 0.8, 0.8, 0.2));
      meshAdd(cylinder(), translation(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3));
      meshAdd(cylinder(), translation(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3));

      // LEVER 4 - triangle platform lever
      newLever(translation(-23, -0.5, 66.5));
    });

    // vertically oscillating mini platforms

    newModel(() => {
      meshAdd(cylinder(), translation(-21.1 - 1.45, -3, 55).scale(1.45, 1.4, 2.7), material(0.7, 0.7, 0.7, 0.2));

      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), identity.scale(3, 1.4, 2.7)),
          polygons_transform(cylinder(), identity.scale(1.2, 8, 1.2)),
        ),
        translation(-33, -3, 55),
        material(0.7, 0.7, 0.7, 0.2),
      );
    });

    // horizontaly oscillating mini platforms

    newModel(() => {
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), translation(-27, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2)),
          polygons_transform(cylinder(), translation(-27, -3, 55).scale(1, 3), material(0.9, 0.9, 0.9, 0.2)),
        ),
      );

      meshAdd(cylinder(), translation(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
    });

    // hex corridor door

    newModel(() => {
      meshAdd(
        cylinder(6),
        translation(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9),
        material(0.7, 0.7, 0.7, 0.4),
      );
    });

    // LEVER 5 - rotating corridor lever
    newLever(translation(-55, -1.1, 46).rotate(0, 90));

    meshAdd(cylinder(7), translation(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3));
    meshAdd(cylinder(6), translation(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3));

    // hex corridor

    const hexCorridorPolygons = [
      ...polygons_transform(cylinder(), translation(0, -3).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
      ...polygons_transform(cylinder(), translation(0, -2.2).scale(7.7, 0.5, 4), material(0.5, 0.5, 0.5, 0.2)),
      ...csg_polygons_subtract(
        polygons_transform(cylinder(6), identity.rotate(90).scale(6, 8, 6), material(0.3, 0.6, 0.6, 0.3)),
        polygons_transform(
          cylinder(4, 0, 0.01),
          translation(0, 6).scale(12, 2, 0.75).rotate(0, 45),
          material(0.3, 0.6, 0.6, 0.3),
        ),
        polygons_transform(cylinder(6), identity.rotate(90).scale(5, 12, 5), material(0.3, 0.6, 0.6, 0.3)),
        ...[-5, 0, 5].map((x) =>
          polygons_transform(
            cylinder(5),
            translation(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8),
            material(0.3, 0.6, 0.6, 0.3),
          ),
        ),
      ),
    ];

    // rotating hex corridor

    newModel(() => meshAdd(hexCorridorPolygons), MODEL_KIND_GAME_NO_ATTACH_PLAYER);

    // hex corridor 1

    meshAdd(hexCorridorPolygons, translation(-53, 0, 55));

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

    GQuad.map(({ x, z }) => {
      // First gate columns
      meshAdd(cylinder(6), translation(x * 3, 3, z * 15).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4));

      // hex columns in the central platform
      meshAdd(cylinder(6), translation(-100 + x * 7, -3, z * 7 + 55).scale(1, 8.1), material(0.6, 0.15, 0.15, 0.8));
      [4, -0.4].map((i) =>
        meshAdd(
          cylinder(6),
          translation(-100 + x * 7, i, z * 7 + 55).scale(1.3, 0.5, 1.3),
          material(0.4, 0.2, 0.2, 0.8),
        ),
      );

      // hex columns around the monument/sculpture
      meshAdd(cylinder(14, 1), translation(x * 9 - 38.9, -7.3, z * 11 + 17).scale(1, 4), material(0.25, 0.25, 0.25, 1));
      [1.5, 8].map((y) =>
        meshAdd(
          cylinder(17, 1),
          translation(x * 9 - 38.9, y - 11.3, z * 11 + 17).scale(1.5, 0.5, 1.5),
          material(0.6, 0.6, 0.6, 0.3),
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

    // LEVER 6 - crystals lever
    newLever(translation(-86, -7.5, 31));

    // elevators

    newModel(() => {
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

    newModel(() => {
      [6, 18].map((x) =>
        meshAdd(
          cylinder(),
          translation(x - 76.9, x / -16 - 10, 24)
            .rotate(0, 0, -2)
            .skewX(-2)
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
          polygons_transform(cylinder(5), identity.scale(9, 1.2, 9), material(0, 0.2, 0.3, 0.5)),
          // base
          polygons_transform(cylinder(), identity.scale(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)),
        ),
        polygons_transform(cylinder(5), identity.scale(5.4, 5, 5.4), material(0, 0.2, 0.3, 0.5)),
      ),
      translation(-38.9, -11.3, 17),
    );

    // LEVER 7 - sculpture/monument lever
    newLever(translation(-38.9, -9.6, 10));

    // central sculpture/monument

    newModel(() => {
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
          polygons_transform(cylinder(5), identity.scale(4, 8, 4), material(0.2, 0.4, 0.5, 0.5)),
          polygons_transform(
            cylinder(5),
            translation(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35),
            material(0.2, 0.4, 0.5, 0.5),
          ),
        ),
        translation(-38.9, -11.3, 17),
      );

      // SOUL 5 - soul over the central sculpture/monument
      newSoul(
        translation(-39.1, -0.6, 17).rotate(11),
        ...polygon_regular(15).map(({ x, z }): Circle => [x * 3, z * 3, 1.2]),
      );
    });

    // Grid with holes
    meshAdd(
      csg_polygons_subtract(
        csg_union(
          // holed base
          polygons_transform(cylinder(6), translation(0, 0, -18).scale(15, 1.2, 15), material(0.7, 0.7, 0.7, 0.3)),
          // after monument continuation
          polygons_transform(cylinder(), identity.scale(4, 1.2, 6), material(0.45, 0.4, 0.6, 0.3)),
        ),
        ...integers_map(6, (z) =>
          integers_map(6, (x) =>
            polygons_transform(
              cylinder(6),
              translation(x * 4.6 - 12 + 2 * (z & 1), 0, z * 4.6 + Math.sin(x * 4) * 2 - 32).scale(2, 5, 2),
              material(0.7, 0.7, 0.7, 0.3),
            ),
          ),
        ).flat(),
      ),
      translation(-38.9, -11.3, -1),
    );

    // SOUL 6 - soul over the grid with hex holes
    newSoul(translation(-38.9, -8.4, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);

    // Detour lever pad
    meshAdd(cylinder(5), translation(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), material(0.8, 0.1, 0.25, 0.4));

    // LEVER 8 - sculpture/monument lever
    newLever(translation(-84, -0.5, 85).rotate(0, 45));

    // ******** SECOND BOAT ********

    newModel(() => {
      meshAdd(boatPolygons);
      // LEVER 9 - second boat lever
      newLever(translation(0, -3, -4).rotate(0, 180));
    });

    // ******** LEVEL AFTER SECOND BOAT ********

    // pushing rods

    const pushingRod = csg_polygons_subtract(
      polygons_transform(cylinder(), translation(0, -0.5, 1).scale(1.15, 1.2, 6.5), material(0.25, 0.25, 0.35, 0.3)),
      csg_polygons_subtract(
        polygons_transform(cylinder(3), translation(0, 0, -5.5).scale(3, 2), material(0.6, 0.3, 0.4, 0.3)),
        polygons_transform(cylinder(), translation(0, 0, -3.65).scale(2.5, 3), material(0.6, 0.3, 0.4, 0.3)),
      ),
      ...[-1, 1].map((i) =>
        polygons_transform(cylinder(), translation(i * 1.2, -0.5, 1).scale(0.14, 0.3, 6.5), material(0.7, 0.2, 0, 0.3)),
      ),
    );

    newModel(() => integers_map(2, (x) => meshAdd(pushingRod, translation(-110 + x * 9 + (x & 1), 1.9, -12))));
    newModel(() => integers_map(2, (x) => meshAdd(pushingRod, translation(-110 + (x + 2) * 9 + (x & 1), 1.9, -12))));
    newModel(() => integers_map(3, (x) => meshAdd(pushingRod, translation(-106 + x * 9, 1.9, -12))));

    // arcs

    integers_map(3, (i) => {
      meshAdd(makeBigArcPolygons(16), translation(i * 12 - 109, -9, -12), material(0.6, 0.6, 0.6, 0.3));

      meshAdd(
        makeBigArcPolygons(16),
        translation(-77, -9, i * -12 - 8 - 12).rotate(0, 90),
        material(0.6, 0.6, 0.6, 0.3),
      );
    });

    // pushing rods container

    meshAdd(
      csg_polygons_subtract(
        csg_union(
          polygons_transform(cylinder(), translation(26.5, -1.6, 10).scale(20, 2.08, 3)),
          polygons_transform(cylinder(), translation(26.5, -0.5, 10).scale(19, 2, 0.5)),
        ),
        ...integers_map(4, (x) =>
          polygons_transform(cylinder(), translation(13 + x * 9 + (x & 1), -0.8, 9).scale(1.35, 1.35, 9)),
        ),
        ...integers_map(3, (x) =>
          polygons_transform(cylinder(), translation(17 + x * 9, -0.8, 9).scale(1.35, 1.35, 9)),
        ),
      ),
      translation(-123, 0.2, -12),
      material(0.5, 0.5, 0.6, 0.2),
    );

    // LEVER 10 - after second boat lever, before the pushing rods
    newLever(translation(-116, -1.4, -18).rotate(0, 180));

    meshAdd(cylinder(6), translation(-116, -2.6, -16.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2));
    // boat attachment
    meshAdd(cylinder(), translation(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), material(0.8, 0.8, 0.8, 0.2));

    meshAdd(cylinder(), translation(-115.5, -17, -12).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(cylinder(8), translation(-114, -17, -2).scale(2, 15, 2), material(0.6, 0.6, 0.6, 0.3));

    meshAdd(cylinder(8), translation(-79, -17, -2).scale(2, 15, 2), material(1, 1, 1, 0.3));
    meshAdd(cylinder(), translation(-77, -17, -50.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3));

    // tower

    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(12), translation(-77, -14.5, -12).scale(4, 17.5, 4), material(0.7, 0.7, 0.7, 0.2)),
        polygons_transform(cylinder(12), translation(-77, 3.1, -12).scale(3, 5, 3), material(0.4, 0.5, 0.6, 0.2)),
        polygons_transform(cylinder(), translation(-79, 0.1, -12).scale(3.5, 2, 1.3), material(0.4, 0.5, 0.6, 0.2)),
        polygons_transform(cylinder(), translation(-77, 0.1, -14).scale(1.5, 2, 2), material(0.4, 0.5, 0.6, 0.2)),
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

    // LEVER 11 - internal pad after the pushing blocks lever
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

    integers_map(4, (i) =>
      newModel(() =>
        meshAdd(
          cylinder(6),
          translation(-14.6 - i * 4.8 - (i > 2 ? 2 : 0), -i / 2.5 - 0.1, -21.5)
            .rotate(0, 0, 3.5)
            .skewX(3.5)
            .scale(2.6, 1, 2.5),
          material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3),
        ),
      ),
    );

    // after the hex pads

    // donut pad
    newModel(() => {
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
          polygons_transform(cylinder(10), identity.scale(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5)),
        ),
      );

      // second pad
      meshAdd(cylinder(15, 1), translation(-7.5).rotate(0, 90).scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3));
      meshAdd(cylinder(10), translation(-7.5).rotate(0, 90).scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3));
      meshAdd(cylinder(5), translation(-7.5).rotate(0, 90).scale(1, 3), material(0.5, 0.5, 0.5, 0.5));

      // LEVER 12 - donut pad lever
      newLever(translation(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180));

      // lateral horns
      [-1, 1].map((i) =>
        meshAdd(
          hornPolygons,
          identity
            .rotate(i * 90, 180, 90)
            .translate(0, 5)
            .rotate(40)
            .scale(1.3, 10, 1.3),
        ),
      );

      // SOUL 9 - soul after the hex pads, in the hex donut with horns
      newSoul(translation(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);
    });

    [-1, 1].map((x) => {
      // far arc gate
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
      );

      meshAdd(cylinder(12, 1), translation(-7.5 * x - 100, 3.7, 96).scale(0.8, 4, 0.8), material(0.6, 0.24, 0.2, 0.5));

      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(), translation(x * -4, 3.5, -0.5).scale(4, 4, 0.7), material(0.5, 0.5, 0.5, 0.4)),
          polygons_transform(cylinder(), identity.scale(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)),
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

    // rotating platforms

    // First rotating platform (with hole)
    newModel(() => {
      checkModelId("ROTATING_PLATFORM", MODEL_ID_ROTATING_PLATFORM);
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(45, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
          polygons_transform(cylinder(), translation(0, 0, -5.5).scale(1.5, 3, 2.7), material(0.45, 0.45, 0.45, 0.2)),
        ),
      );
      meshAdd(cylinder(8), translation(0, 2).scale(3, 1.5, 3).rotate(0, 22), material(0.7, 0.7, 0.7, 0.1));
      meshAdd(cylinder(5), translation(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2));

      // SOUL 10 - soul over the first rotating platform
      newSoul(translation(0, 3), ...polygon_regular(14).map(({ x, z }): Circle => [x * 5.6, z * 5.6, 2]));
    });

    // Second rotating platform
    newModel(() => {
      // rotating platform horns
      [-1, 1].map((x) =>
        meshAdd(
          hornPolygons,
          identity
            .rotate(0, 90)
            .translate(x * -5, 1, -0.5)
            .scale(1.2, 10, 1.2)
            .rotate(0, 90 * x + 90),
        ),
      );

      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), identity.scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
        ),
      );

      meshAdd(polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });

    // Third rotating platform
    newModel(() => {
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(0, 0, 7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
        ),
      );
      meshAdd(polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });

    // Fourth rotating platform
    newModel(() => {
      meshAdd(
        csg_polygons_subtract(
          polygons_transform(cylinder(28, 1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
          polygons_transform(cylinder(), translation(0, 0, -7).scale(2, 5, 9), material(0.3, 0, 0, 0.3)),
        ),
      );
      meshAdd(polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)));
      meshAdd(polygons_transform(cylinder(5), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)));
    });

    // left continuation with hole for first rotating platform
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(-82.07, 0.8, 106).scale(11, 0.9, 2.2), material(0.7, 0.7, 0.7, 0.1)),
        polygons_transform(cylinder(45, 1), translation(-81, 0.7, 106).scale3d(7.7), material(0.7, 0.7, 0.7, 0.1)),
      ),
    );

    // rotating platforms connecting pads
    meshAdd(cylinder(), translation(-58, 1, 106).scale(2, 0.65, 2), material(0.7, 0.7, 0.7, 0.2));
    meshAdd(cylinder(), translation(-50.7, 1, 99).scale(2, 0.65, 1), material(0.7, 0.7, 0.7, 0.2));

    // exit from the rotating platforms
    meshAdd(cylinder(), translation(-42, 0.4, 91).scale(5, 1, 2.5), material(0.7, 0.7, 0.7, 0.3));
    meshAdd(cylinder(), translation(-34.2, 0.4, 91).scale(3, 1, 3), material(0.7, 0.7, 0.7, 0.3));

    // lever pad
    meshAdd(cylinder(5), translation(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), material(0.2, 0.5, 0.5, 0.6));

    // LEVER 13 - lever after rotating platforms
    newLever(translation(-34, 2.7, 96).rotate(-12, 0));

    // ******** LEVEL AFTER THE ROTATING PLATFORMS ********

    // jumping pads

    [material(0.1, 0.55, 0.45, 0.2), material(0.2, 0.5, 0.5, 0.3), material(0.3, 0.45, 0.55, 0.4)].map((m, i) =>
      newModel(() => {
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

    [-1, 1].map((x) =>
      // LEVEL AFTER THE ROTATING PLATFORMS horns
      meshAdd(
        hornPolygons,
        translation(x * -8, 1, 85)
          .scale(1.2, 10, 1.2)
          .rotate(0, 90 * x + 90),
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

    // LEVER 14 - lever after jumping pads, before the pendulums
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
    newModel(() => {
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
    newModel(() => {
      meshAdd(cylinder(5), identity.scale(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4));
      meshAdd(cylinder(5), identity.scale(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4));

      // LEVER 15 - lever in the floating elevator before the pendulums
      newLever(translation(0, 1.5, -1).rotate(0, 180));
    });

    // SOUL 11 - soul in the last platform
    newSoul(translation(0, 3, 95), ...polygon_regular(9).map(({ x, z }): Circle => [x * 9, z * 9, 4]));

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
    meshAdd(sphere(30), identity.scale(0.65, 0.8, 0.55), material(1, 0.3, 0.4));

    // mouth
    meshAdd(cylinder(), translation(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));

    [-1, 1].map((i) => {
      // horns
      meshAdd(
        hornPolygons,
        identity
          .rotate(0, i > 0 ? 180 : 0)
          .translate(0.2, 1.32)
          .rotate(-30)
          .scale(0.2, 0.6, 0.2),
        material(1, 1, 0.8),
      );

      // eyes
      meshAdd(
        polygons_transform(
          csg_polygons_subtract(cylinder(15, 1), polygons_transform(cylinder(), translation(0, 0, 1).scale(2, 2, 0.5))),
          identity.rotate(-90, 0).scale(0.1, 0.05, 0.1),
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
    checkModelId("SOUL_COLLISION", MODEL_ID_SOUL_COLLISION);
    meshAdd(cylinder(6).slice(0, -1), identity.scale(0.77, 1, 0.77), material(1, 0.3, 0.5));
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
      identity.scale(0.7, 0.7, 0.7),
      material(1, 1, 1),
    );

    // eyes
    [-1, 1].map((x) => meshAdd(sphere(12), translation(x * 0.16, 0.4, -0.36).scale3d(0.09)));
  }, MODEL_KIND_MESH);

  newModel(() => {
    checkModelId("LEVER", MODEL_ID_LEVER);
    meshAdd(cylinder(6, 1), identity.scale(0.14, 1.4, 0.14), material(0.3, 0.3, 0.5, 0.1));
    meshAdd(cylinder(10), translation(0, 1).scale(0.21, 0.3, 0.21), material(1, 0.5, 0.2));
    meshAdd(cylinder(3), translation(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2, 0.1));
  }, MODEL_KIND_MESH);

  if (DEBUG) {
    console.timeEnd("build_life_the_universe_and_everything");
    console.log(souls.length + " souls, " + levers.length + " levers");
  }
};
