import { identity } from "../math/matrix";
import { levers, LEVERS_COUNT, type Circle, type Lever } from "./models";
import { GQuad, cylinder, polygon_regular, sphere, cylinder_sides } from "../geometry/geometry";
import { polygon_transform, polygons_transform, type Polygon } from "../geometry/polygon";
import { material } from "../geometry/material";
import { csg_union, csg_polygons_subtract } from "../geometry/csg";
import { integers_map } from "../math/integers-map";
import { meshAdd, newModel, newSoul, currentModelMmatrix } from "./models-factory";
import { devAllModelsPrint, devLeverAdd } from "../dev-tools/dev-models";
import { translation } from "../math/matrix-transforms";
import { abs } from "../math/math";

export const build_life_the_universe_and_everything = (): 42 | void => {
  if (DEBUG) {
    console.time("build_life_the_universe_and_everything");
  }

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

  const hexCorridor = [
    polygons_transform(cylinder(), translation(0, -3).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
    polygons_transform(cylinder(), translation(0, -2.2).scale(7.7, 0.5, 4), material(0.5, 0.5, 0.5, 0.2)),
    integers_map(12, (i) =>
      polygons_transform(cylinder(), translation(i - 5.5, 4.4).scale(0.1, 0.1, 2), material(0.6, 0.5, 0.3, 0.2)),
    ).flat(),
    polygons_transform(
      csg_polygons_subtract(
        polygons_transform(cylinder(6), identity.rotate(90).scale(6, 8, 6)),
        polygons_transform(cylinder(4, 0, 0.01), translation(0, 6).scale(12, 2, 0.75).rotate(0, 45)),
        polygons_transform(cylinder(6), identity.rotate(90).scale(5, 12, 5)),
        ...[-5, 0, 5].map((x) =>
          polygons_transform(cylinder(5), translation(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8)),
        ),
      ),
      identity,
      material(0.3, 0.6, 0.6, 0.3),
    ),
  ].flat();

  const HORN_STACKS = 11;

  const hornMatrix = (i: number) => {
    i /= HORN_STACKS;
    return translation(Math.sin(i * Math.PI), i)
      .rotateSelf(10 * i)
      .scaleSelf(1.002 - i, 1, 1.002 - i);
  };

  const hornPolygons = integers_map(HORN_STACKS, (i) =>
    cylinder_sides(
      polygon_transform(polygon_regular(16), hornMatrix(i), material(1, 1, 0.8, 0.2)).reverse(),
      polygon_transform(polygon_regular(16), hornMatrix(i + 1), material(1, 1, 0.8, 0.2)),
      1,
    ),
  ).flat();

  // Initialize the full screen triangle for the sky. Must be the first model.

  newModel("MODEL_ID_SKY");

  meshAdd([GQuad.slice(1)], translation(-2).scale3d(3).rotate(90, 0));

  newModel("MODEL_ID_STATIC_WORLD");

  const newLever = ($transform: DOMMatrixReadOnly, name: string): void => {
    levers.push({ $matrix: currentModelMmatrix, $transform } as Partial<Lever> as Lever);

    // Lever base
    meshAdd(cylinder(5), $transform.translate(0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
    meshAdd(cylinder(5), $transform.translate(-0.2).rotate(90, 90).scale(0.4, 0.1, 0.5), material(0.4, 0.5, 0.5));
    meshAdd(cylinder().slice(0, -1), $transform.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4));

    if (DEBUG) {
      devLeverAdd(levers.length - 1, name);
    }
  };

  // LEVER for the first gate, after the first boat
  newLever(translation(-5.4, 1.5, -19).rotate(0, -90), "LEVER_ID_GATE0");

  [-15, 15].map((z, j) => {
    // in and out
    meshAdd(cylinder(), translation(0, 0, j ? 22 : -23).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2));

    //  gate top
    meshAdd(cylinder(), translation(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4));

    //  gate bottom
    meshAdd(cylinder().slice(0, -1), translation(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3));
  });

  // first boat attachment
  meshAdd(cylinder(), translation(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3), material(0.8, 0.8, 0.8, 0.2));

  // small entrance wall
  meshAdd(cylinder(), translation(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2));

  // first lever pad
  meshAdd(cylinder(5), translation(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), material(0.6, 0.3, 0.3, 0.4));
  meshAdd(cylinder(), translation(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90), material(0.75, 0.75, 0.75, 0.2));

  // base

  meshAdd(
    csg_polygons_subtract(
      csg_union(
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

        // lower base
        polygons_transform(
          cylinder(6, 0, 0, 0.3),
          translation(8, -4, -4).scale(14, 2, 13),
          material(0.7, 0.7, 0.7, 0.2),
        ),
      ),
      // lower lever pad
      polygons_transform(cylinder(6), translation(15.8, -1.5, 3.8).scale(3.5, 1, 3.5), material(0.5, 0.5, 0.5, 0.5)),

      // smooth hole
      polygons_transform(cylinder(5, 0, 1.5), translation(0, 1).scale(4.5, 0.3, 4.5), material(0.7, 0.5, 0.9, 0.2)),

      // hole
      polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),
    ),
  );

  // LEVER in the descent of the first level
  newLever(translation(15.8, -2, 3.8), "LEVER_ID_LEVEL1_DESCENT");

  // ******** LEVEL 2 ********

  // fixed platform after triangle platform

  meshAdd(cylinder(), translation(-21.1 + 2.45, -3, 55).scale(2.45, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));

  // LEVER before the rotating corridor
  newLever(translation(-55, -1.1, 46).rotate(0, 90), "LEVER_ID_ROTATING_CORRIDOR");

  meshAdd(cylinder(7), translation(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3));
  meshAdd(cylinder(6), translation(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3));

  // hex corridor 1

  meshAdd(hexCorridor, translation(-53, 0, 55));

  // connection from rotating hex corridor to platforms

  meshAdd(cylinder(), translation(-88.3, -5.1, 55).rotate(-30).scale(5, 1.25, 4.5), material(0.7, 0.7, 0.7, 0.2));

  meshAdd(
    cylinder(3, 0, -0.5),
    translation(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
    material(0.8, 0.8, 0.8, 0.2),
  );

  // first arc door

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(), translation(-100, 1, 63).scale(7.5, 4), material(0.5, 0.5, 0.5, 0.4)),
      polygons_transform(cylinder(), translation(-100, 0, 63).scale(2, 2, 4), material(0.5, 0.5, 0.5, 0.4)),
      polygons_transform(
        cylinder(20, 1),
        translation(-100, 2, 70).scale(2, 2, 10).rotate(90, 0),
        material(0.5, 0.5, 0.5, 0.4),
      ),
    ),
  );

  // platform after the rotating hex corridor

  meshAdd(
    csg_polygons_subtract(
      csg_union(
        // straiht line
        polygons_transform(cylinder(), translation(-100, -2.6, 70).scale(3, 1.1, 7), material(0.8, 0.8, 0.8, 0.2)),

        // base
        polygons_transform(cylinder(), translation(-100, -2.4, 55).scale(8, 0.9, 8), material(0.8, 0.8, 0.8, 0.2)),

        // right path to the boat, second boat attachment
        polygons_transform(
          cylinder(),
          translation(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3),
          material(0.8, 0.8, 0.8, 0.2),
        ),

        // 45 degrees detour hexagon
        polygons_transform(
          cylinder(6),
          translation(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15),
          material(0.6, 0.6, 0.6, 0.3),
        ),
        // 45 degrees detour
        polygons_transform(
          cylinder(),
          translation(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5),
          material(0.8, 0.8, 0.8, 0.2),
        ),

        // ascension continuation
        polygons_transform(cylinder(), translation(-100, 0.42, 92).scale(3, 1.1, 4.1), material(0.8, 0.8, 0.8, 0.2)),
        // ascension
        polygons_transform(
          cylinder(),
          translation(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6),
          material(0.8, 0.8, 0.8, 0.2),
        ),
      ),

      // decorative octagons

      polygons_transform(cylinder(8), translation(-100, -1, 55).scale(7, 0.9, 7), material(0.3, 0.3, 0.3, 0.4)),
      polygons_transform(cylinder(8), translation(-100, -2, 55).scale(4, 0.3, 4), material(0.4, 0.4, 0.4, 0.5)),
      polygons_transform(
        cylinder(8, 0, -3.1),
        translation(-100, -3, 55).scale(0.4, 1, 0.4),
        material(0.4, 0.4, 0.4, 0.5),
      ),
    ),
  );

  GQuad.map(({ x, z }) => {
    // First gate columns
    meshAdd(cylinder(6), translation(x * 3, 3, z * 15).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4));

    // hex columns in the central platform
    meshAdd(cylinder(6), translation(-100 + x * 7, -3, z * 7 + 55).scale(1, 8.1), material(0.6, 0.15, 0.15, 0.8));
    [4, -0.4].map((i) =>
      meshAdd(cylinder(6), translation(-100 + x * 7, i, z * 7 + 55).scale(1.3, 0.5, 1.3), material(0.4, 0.2, 0.2, 0.8)),
    );

    // columns around the monument/sculpture
    [1.5, 8].map((y) =>
      meshAdd(
        cylinder(15, 1),
        translation(x * 9 - 38.9, y - 11.3, z * 11 + 17).scale(1.5, 0.5, 1.5),
        material(0.6, 0.6, 0.6, 0.3),
      ),
    );
    meshAdd(
      cylinder(14, 1).slice(0, -2),
      translation(x * 9 - 38.9, -18, z * 11 + 17).scale(1, 14.2),
      material(0.25, 0.25, 0.25, 1),
    );
  });

  // crystals

  integers_map(7, (i) => {
    meshAdd(
      cylinder(((i * 23 + 1) % 5) + 5, 0, 0.5),
      translation(-101 + Math.sin(i) * 5 + i, -2.3 - i, 44.9 - i * 2.8).scaleSelf(5 + i / 2, 1.1 + i / 6, 5 + i / 3),
      material(0.5 - i / 17, 0.5 - (i & 1) / 9, 0.6, 0.3),
    );
  });

  // crystals continuation pad

  meshAdd(cylinder(), translation(-87, -9.5, 24).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4));

  // lever pad

  meshAdd(cylinder(4), translation(-86, -9.2, 27).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3));

  meshAdd(cylinder(12, 1), translation(-86, -9, 31).scale(1.5, 1, 1.5), material(0.3, 0.3, 0.4, 0.1));

  // LEVER crystals lever
  newLever(translation(-86, -7.5, 31), "LEVER_ID_CRYSTALS");

  // pad after elevators, monument base

  // lever pad
  meshAdd(cylinder(5), translation(-38.9, -11.1, 10).scale(2, 1.2, 2), material(0.2, 0.4, 0.7, 0.3));

  meshAdd(
    csg_polygons_subtract(
      csg_union(
        // base
        polygons_transform(cylinder(), translation(-38.9, -11.3, 17).scale(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)),
        // blue pentagon
        polygons_transform(cylinder(5), translation(-38.9, -11.1, 17).scale(9, 1, 9), material(0, 0.2, 0.3, 0.5)),
      ),
      // hole
      polygons_transform(cylinder(5), translation(-38.9, -11.1, 17).scale3d(5.4), material(0, 0.2, 0.3, 0.5)),
    ),
  );

  // LEVER sculpture/monument lever
  newLever(translation(-38.9, -9.4, 10), "LEVER_ID_MONUMENT");

  // Grid with hex holes
  meshAdd(
    csg_polygons_subtract(
      csg_union(
        // holed base
        polygons_transform(cylinder(6), translation(0, 0, -18).scale(15, 1.3, 15), material(0.7, 0.7, 0.7, 0.3)),
        // after monument continuation
        polygons_transform(cylinder(5), identity.scale(4.5, 1.2, 9), material(0.45, 0.4, 0.6, 0.3)),
      ),
      ...integers_map(6, (z) =>
        integers_map(6, (x) =>
          polygons_transform(
            cylinder(6),
            translation(4.6 * x - (z & 1 ? 10 : 12), 0, 4.6 * z + 2 * Math.sin(x * 4) - 32).scale3d(2),
            material(0.7, 0.7, 0.7, 0.3),
          ),
        ),
      ).flat(),
    ),
    translation(-38.9, -11.3, -1),
  );

  // LEVER detour lever
  newLever(translation(-84, -0.7, 85).rotate(0, 45), "LEVER_ID_DETOUR");

  // Detour lever pad
  meshAdd(cylinder(5), translation(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), material(0.8, 0.1, 0.25, 0.4));

  // ******** LEVEL AFTER SECOND BOAT ********

  // pushing rods container

  // LEVER after second boat lever, before the pushing rods
  newLever(translation(-116, -1.4, -18).rotate(0, 180), "LEVER_ID_BEFORE_PUSHING_RODS");

  const pushingRodsPositions = [-110, -100, -92, -82, -106, -97, -88];

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(), translation(-96.5, -1.4, -2).scale(20, 2.1, 3)),
      ...pushingRodsPositions.map((x) => polygons_transform(cylinder(), translation(x, 0.05, -3).scale(1.35, 2, 9))),
    ),
    identity,
    material(0.5, 0.5, 0.6, 0.2),
  );

  meshAdd(cylinder(), translation(-96.5, 1, -2).scale(19, 0.3, 0.3), material(0.5, 0.5, 0.6, 0.2));

  meshAdd(cylinder(6), translation(-116, -2.6, -16.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2));
  // second boat attachment, over the arcs
  meshAdd(cylinder(), translation(-116, -2.6, -12).scale(3.2, 1.1, 4).skewX(3), material(0.8, 0.8, 0.8, 0.2));

  meshAdd(cylinder().slice(0, -1), translation(-115.5, -17, -12).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3));
  meshAdd(cylinder(8).slice(0, -2), translation(-114, -17, -2).scale(2, 15, 2), material(0.6, 0.6, 0.6, 0.3));

  meshAdd(cylinder(8).slice(0, -2), translation(-79, -17, -2).scale(2, 15, 2), material(1, 1, 1, 0.3));
  meshAdd(cylinder().slice(0, -1), translation(-77, -17, -50.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3));

  // tower

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(
        cylinder(12).slice(0, -1),
        translation(-77, -14.5, -12).scale(4, 17.5, 4),
        material(0.7, 0.7, 0.7, 0.2),
      ),
      polygons_transform(cylinder(12), translation(-77, 3.1, -12).scale(3, 5, 3), material(0.4, 0.5, 0.6, 0.2)),
      polygons_transform(cylinder(), translation(-79, 0.1, -12).scale(3.5, 2, 1.3), material(0.4, 0.5, 0.6, 0.2)),
      polygons_transform(cylinder(), translation(-77, 0.1, -14).scale(1.5, 2, 2), material(0.4, 0.5, 0.6, 0.2)),
    ),
  );

  // internal pad

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(), translation(-93, -5.8, -40).scale(9, 1, 5), material(0.8, 0.8, 0.8, 0.1)),
      polygons_transform(cylinder(9), translation(-98, -5.8, -40).scale(3, 8, 3), material(0.7, 0.7, 0.7, 0.2)),
    ),
  );

  meshAdd(cylinder(), translation(-84.9, -4.3, -40).rotate(12).scale(6, 1, 3), material(0.6, 0.6, 0.6, 0.3));
  meshAdd(cylinder(9).slice(0, -1), translation(-98, -18.4, -40).scale(2.5, 13.5, 2.5), material(0.5, 0.5, 0.5, 0.3));

  // LEVER internal pad after the pushing blocks lever
  newLever(translation(-98, -4.4, -40).rotate(0, 90), "LEVER_ID_AFTER_PUSHING_RODS");

  // ******** LEVEL AFTER CENTRAL GATE ********

  // after the hex pads

  [-1, 1].map((x, j) => {
    // far arc level after central gate, after the hex pads
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder(), translation(x * -4, 3.5, -0.5).scale(4, 4, 0.7), material(0.5, 0.5, 0.5, 0.4)),
        polygons_transform(
          cylinder(5),
          translation(x * -5.3, 7)
            .rotate(90, 0)
            .scale(1.7, 5, 1.7),
          material(0.6, 0.24, 0.2, 0.5),
        ),
        polygons_transform(cylinder(), identity.scale(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)),
        polygons_transform(
          cylinder(5),
          translation(x * -5.3, 3.8)
            .rotate(90, 0, 35)
            .scale(0.75, 5, 0.75),
          material(0.6, 0.24, 0.2, 0.5),
        ),
        polygons_transform(
          cylinder(32, 1),
          translation(0, 3, -5).scale(3, 4, 10).rotate(90, 0),
          material(0.6, 0.24, 0.2, 0.5),
        ),
      ),
      translation(x - 100, 0.7, 97),
    );

    meshAdd(cylinder(12, 1), translation(-7.5 * x - 100, 3.7, 96).scale(0.8, 4, 0.8), material(0.6, 0.24, 0.2, 0.5));

    // far arc gate
    [7.2, 1.5].map((y) =>
      meshAdd(
        cylinder(15, 1),
        translation(-7.5 * x - 100, y + 0.7, 96).scale(1.1, 0.5, 1.1),
        material(0.5, 0.24, 0.2, 0.4),
      ),
    );

    // LEVEL AFTER THE ROTATING PLATFORMS horns
    meshAdd(
      hornPolygons,
      translation(x * -8, 1, 85)
        .scale(1.2, 10, 1.2)
        .rotate(0, 90 * x + 90),
    );

    // after the hex pads horns
    meshAdd(
      hornPolygons,
      translation(x * -5 - 100, 1.7, 110)
        .scale(1.2, 10, 1.2)
        .rotate(0, 90 * x - 90),
    );

    // first level horns
    integers_map(5, (i) =>
      meshAdd(
        hornPolygons,
        translation((j - 0.5) * 18.5, 0, i * 4.8 - 9.5)
          .rotate(0, 180 - j * 180)
          .scale(1.2, 10, 1.2),
      ),
    );
  });

  // left continuation with hole for first rotating platform
  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(), translation(-82.07, 0.8, 106).scale(11, 0.9, 2.2), material(0.7, 0.7, 0.7, 0.1)),
      polygons_transform(cylinder(45, 1), translation(-81, 0.7, 106).scale3d(7.7), material(0.7, 0.7, 0.7, 0.1)),
    ),
  );

  // rotating platforms connecting pads
  meshAdd(cylinder(), translation(-50.7, 1, 99).scale(2, 0.65, 1), material(0.7, 0.7, 0.7, 0.2));
  meshAdd(cylinder(), translation(-58, 1, 106).scale(2, 0.65, 2), material(0.7, 0.7, 0.7, 0.2));

  // exit from the rotating platforms
  meshAdd(cylinder(), translation(-34.2, 0.4, 91).scale(3, 1, 3), material(0.7, 0.7, 0.7, 0.3));
  meshAdd(cylinder(), translation(-42, 0.4, 91).scale(5, 1, 2.5), material(0.7, 0.7, 0.7, 0.3));

  // lever pad
  meshAdd(cylinder(5), translation(-34, 0.2, 96).scale(3, 2, 4).rotate(-20, 0), material(0.2, 0.5, 0.5, 0.6));

  // LEVER lever after rotating platforms
  newLever(translation(-34, 2.7, 96).rotate(-12, 0), "LEVER_ID_AFTER_ROTATING_PLATFORMS");

  // base

  meshAdd(
    csg_polygons_subtract(
      csg_union(
        polygons_transform(cylinder(), translation(-101.5, 0.7, 93.5).scale(10.5, 1, 2), material(0.7, 0.7, 0.7, 0.2)),
        polygons_transform(
          cylinder(6, 0, 0, 0.6),
          translation(-100, 0.7, 105.5).scale(8, 1, 11),
          material(0.7, 0.7, 0.7, 0.2),
        ),
      ),
      polygons_transform(cylinder(5), translation(-100, 0.7, 113).scale(4, 3, 4), material(0.7, 0.7, 0.7, 0.2)),
    ),
  );

  // ******** LEVEL AFTER THE ROTATING PLATFORMS ********

  const makeBigArc = (height: number) =>
    csg_polygons_subtract(
      polygons_transform(cylinder().slice(0, -1), translation(0, -height / 2).scale(6, height - 1, 2.2)),
      polygons_transform(cylinder().slice(0, -1), translation(0, -height / 2 - 4).scale(4, height - 5, 4)),
      polygons_transform(
        cylinder(28, 1),
        translation(0, height / 2 - 9)
          .rotate(90, 0, 90)
          .scale3d(4),
      ),
    );

  integers_map(3, (i) => {
    // The big arcs in the level after second boat
    meshAdd(makeBigArc(16), translation(-77, -9, i * -12 - 8 - 12).rotate(0, 90), material(0.6, 0.6, 0.6, 0.3));
    meshAdd(makeBigArc(16), translation(i * 12 - 109, -9, -12), material(0.6, 0.6, 0.6, 0.3));

    // Big arcs in the level after rotating platforms
    meshAdd(
      makeBigArc(24.7 - 0.7 * (i & 1)),
      translation(6 * i - 6, 4 - (i & 1), 111 - 0.2 * (i & 1)),
      i & 1 ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5),
    );
  });

  // middle base
  meshAdd(
    csg_polygons_subtract(
      csg_union(
        // arcs roof, continuation to pendulums
        polygons_transform(cylinder(), translation(0, 16, 111).scale(3, 1, 3.8), material(0.5, 0.3, 0.3, 0.4)),
        // base
        polygons_transform(
          cylinder(6, 0, 0, 0.3),
          translation(0, -0.92, 95).scale(14, 2, 14),
          material(0.8, 0.8, 0.8, 0.2),
        ),
        // arcs roof
        polygons_transform(cylinder(), translation(0, 16, 110.5).scale(12, 1, 3), material(0.5, 0.3, 0.3, 0.4)),
      ),

      // base hole
      polygons_transform(cylinder(5), translation(0, 0, 95).scale3d(6), material(0.3, 0.3, 0.3, 0.5)),
      // arcs roof hole
      polygons_transform(cylinder(5), translation(0, 16, 103.5).scale(5.5, 5, 5.5), material(0.5, 0.3, 0.3, 0.4)),
    ),
  );

  // LEVER lever after jumping pads, before the pendulums
  newLever(translation(0, 1.7, 82).rotate(0, 180), "LEVER_ID_AFTER_JUMPING_PADS");

  // lever pad
  meshAdd(
    cylinder(5).slice(0, -1),
    translation(0, -15.7, 82).scale(2.5, 17, 2.5).rotate(0, 35),
    material(0.5, 0.3, 0.3, 0.4),
  );

  // pendulums supports

  meshAdd(cylinder(6), translation(0, 16, 121).scale(2.5, 1, 2.1).rotate(0, 90), material(0.5, 0.6, 0.7, 0.3));
  meshAdd(cylinder(), translation(0, 16, 127.8).scale(1.5, 1, 0.7), material(0.5, 0.6, 0.7, 0.3));
  meshAdd(cylinder(7), translation(0, 15.1, 133).scale(5, 2, 5), material(0.4, 0.5, 0.6, 0.4));

  // SOUL after first boat
  newSoul(translation(-0.5, 2.8, -20), [0, 0, 2.5], [0, -3, 2.5]);

  // SOUL after first gate
  newSoul(
    translation(0, 2.8),
    [5, 10, 3],
    [-5, 10, 3],
    ...polygon_regular(18).map(({ x, z }): Circle => [x * 7, z * 10, 4.5 - abs(x) * 2]),
  );

  // SOUL in the last platform
  newSoul(translation(0, 3, 95), ...polygon_regular(9).map(({ x, z }): Circle => [x * 9, z * 9, 4]));

  // SOUL after the pendulums
  newSoul(translation(0, 19, 134), [0, 0, 3.5]);

  // SOUL over the grid with hex holes
  newSoul(translation(-38.9, -8.3, -21), [-7, -2.5, 6], [6, -3, 6], [0, -5, 7]);

  // SOUL after the central gate
  newSoul(translation(-89, 0.2, 80), [0, 0, 6]);

  // SOUL in the central area, after the rotating hex corridor
  newSoul(translation(-100, 0.2, 55), [0, 0, 7.5], [-8, 0, 3.5], [-12, 0, 3.5], [-15, 0, 3.5]);

  // SOUL after the second boat
  newSoul(translation(-115, 0.2, -12), [0, 0, 3.5]);

  // SOUL in the internal pad after the pushing rods
  newSoul(translation(-93, -3, -28 - 12).rotate(4), [0, -2, 3.5], [0, 2, 3.5]);

  // =========== end of the world ===========//

  /// ****** TRANSLATIONS ONLY ****** ///

  // moving central platform in the first level

  newModel("MODEL_ID_LEVEL1_CENTRAL_PLATFORM");

  meshAdd(cylinder(5), translation(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3));

  // LEVER over the central moving platform
  newLever(translation(0, 1.2), "LEVER_ID_GATE1");

  integers_map(2, (blackPlatform) => {
    // black platforms in the second level
    newModel("MODEL_ID_LEVEL2_BLACK_PLATFORM" + blackPlatform);
    GQuad.map(({ x, z }) => {
      // column body
      meshAdd(
        cylinder(11, 1).slice(0, -2),
        translation(x * 4, 4, z * 4).scale(0.8, 3, 0.8),
        material(0.5, 0.3, 0.7, 0.6),
      );
      // column top
      meshAdd(cylinder(), translation(x * 4, 7, z * 4).scale(1, 0.3), material(0.5, 0.5, 0.5, 0.3));
    });

    meshAdd(
      csg_polygons_subtract(
        polygons_transform(cylinder().slice(0, -1), identity.scale(5, 1, 5), material(0.8, 0.8, 0.8, 0.3)),
        ...[-1, 1].map((i) =>
          polygons_transform(
            cylinder(25, 1),
            translation(5 * i, 0.2)
              .rotate(i * -30)
              .scale(4, 1, 3),
            material(0.8, 0.8, 0.8, 0.3),
          ),
        ),
      ),
    );
    // bottom
    meshAdd(cylinder(), translation(0, -3).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
  });

  // central oscillating platform
  newModel("MODEL_ID_LEVEL2_CENTRAL_PLATFORM");

  meshAdd(
    csg_polygons_subtract(
      csg_union(
        polygons_transform(cylinder(), identity.scale(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
        polygons_transform(cylinder(), translation(0, -2).scale(2, 3.2, 1.9), material(0.3, 0.8, 0.5, 0.5)),
        polygons_transform(cylinder(6), identity.scale(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
        polygons_transform(
          cylinder(16, 1, 0, 4),
          identity.scale(1, 1, 1.5).rotate(0, 90),
          material(0.9, 0.9, 0.9, 0.2),
        ),
      ),
      polygons_transform(cylinder(), identity.scale(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6)),
    ),
  );

  // SOUL over the central oscillating platform in the second level
  newSoul(translation(0, 2.8), [0, 0, 4.5]);

  // triangle platform

  newModel("MODEL_ID_TRIANGLE_PLATFORM");

  meshAdd(cylinder(3), translation(-23, -1.7, 55.8).scale(5, 0.7, 8.3), material(0.3, 0.6, 0.6, 0.2));
  meshAdd(cylinder(8), translation(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), material(0.8, 0.8, 0.8, 0.2));
  meshAdd(cylinder(), translation(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3));
  meshAdd(cylinder(), translation(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3));

  // LEVER over the triangle platform
  newLever(translation(-23, -0.5, 66.5), "LEVER_ID_TRIANGLE_PLATFORM");

  // vertically oscillating mini platforms

  newModel("MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL");

  meshAdd(cylinder(), translation(-21.1 - 1.45, -3, 55).scale(1.45, 1.4, 2.7), material(0.7, 0.7, 0.7, 0.2));

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(), identity.scale(3, 1.4, 2.7)),
      polygons_transform(cylinder(), identity.scale(1.2, 8, 1.2)),
    ),
    translation(-33, -3, 55),
    material(0.7, 0.7, 0.7, 0.2),
  );

  // horizontaly oscillating mini platforms

  newModel("MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL");

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(), identity.scale(3, 1.4, 2.7)),
      polygons_transform(cylinder(), identity.scale(1, 3)),
    ),
    translation(-27, -3, 55),
    material(0.9, 0.9, 0.9, 0.2),
  );

  meshAdd(cylinder(), translation(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));

  // hex corridor door

  newModel("MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR");

  meshAdd(cylinder(6), translation(-44.5, 0, 55).rotate(0, 0, 90).scale(5.9, 0.5, 5.9), material(0.7, 0.7, 0.7, 0.4));

  // elevators

  newModel("MODEL_ID_ELEVATORS0");

  const elevatorsMatrix = (x: number) =>
    translation(x - 76.9, x / -16 - 10, 24)
      .rotate(0, 0, -2)
      .skewX(-2)
      .scale(2.8, 1.4, 3);

  [0, 12, 24].map((x) => meshAdd(cylinder(), elevatorsMatrix(x), material(0.2, 0.5, 0.6, 0.2)));

  newModel("MODEL_ID_ELEVATORS1");

  [6, 18].map((x) => meshAdd(cylinder(), elevatorsMatrix(x), material(0.1, 0.4, 0.5, 0.2)));

  // central sculpture/monument

  newModel("MODEL_ID_MONUMENT");

  meshAdd(cylinder(5), translation(-38.9, -1.3, 17).scale(1.1, 3, 1.1).skewY(-20), material(0.3, 0.3, 0.5, 0.5));

  meshAdd(
    cylinder(5).slice(0, -1),
    translation(-38.9, 2, 17).scale(0.6, 2.5, 0.6).skewY(25),
    material(0.6, 0.3, 0.5, 0.5),
  );

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(5), translation(0, 2).scale(5, 7, 5).skewY(8)),
      polygons_transform(cylinder(5), translation(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35)),
      polygons_transform(cylinder(), identity.scale(2, 8, 3)),
    ),
    translation(-38.9, -11.3, 17),
    material(0.2, 0.4, 0.5, 0.5),
  );

  // SOUL over the central sculpture/monument
  newSoul(
    translation(-39.1, -0.6, 17).rotate(11),
    ...polygon_regular(15).map(({ x, z }): Circle => [x * 3, z * 3, 1.2]),
  );

  pushingRodsPositions.map((x, i) => {
    if (!(i % 2) && i < 6) {
      newModel("MODEL_ID_PUSHING_ROD" + i / 2);
    }
    meshAdd(pushingRod, translation(x, 1.9, -12));
  });

  // oscillating hex pads

  integers_map(4, (i) => {
    newModel("MODEL_ID_OSCILLATING_HEX_PAD" + i);
    meshAdd(
      cylinder(6),
      translation(-14.6 - i * 4.8 - (i > 2 ? 2 : 0), -i / 2.5 - 0.1, -21.5)
        .rotate(0, 0, 3.5)
        .skewX(3.5)
        .scale(2.6, 1, 2.5),
      material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3),
    );
  });

  // jumping pads after rotating platforms

  [material(0.1, 0.55, 0.45, 0.2), material(0.2, 0.5, 0.5, 0.3), material(0.3, 0.45, 0.55, 0.4)].map((m, i) => {
    newModel("MODEL_ID_JUMPING_PAD" + i);
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
  });

  // floating elevator pad
  newModel("MODEL_ID_FLOATING_ELEVATOR_PAD");
  meshAdd(cylinder(5), identity.scale(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4));
  meshAdd(cylinder(5), identity.scale(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4));

  // LEVER in the floating elevator before the pendulums
  newLever(translation(0, 1.5, -1).rotate(0, 180), "LEVER_ID_FLOATING_ELEVATOR");

  // GATES
  integers_map(4, (gate) => {
    newModel("MODEL_ID_GATE" + gate);
    integers_map(7, (i) =>
      meshAdd(
        polygons_transform(
          cylinder(8, 1).slice(0, -1),
          translation((gate > 2 ? 3.5 : 4) * (i / 6 - 0.5), 3).scale(0.2, gate > 2 ? 4 : 3, 0.2),
          material(0.3, 0.3, 0.38),
        ),
      ),
    );
  });

  /// **** FULL MATRIX TRANSFORMS **** ///

  // rotating hex corridor
  newModel("MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR");
  meshAdd(hexCorridor);

  // donut pad
  newModel("MODEL_ID_DONUT_PAD");

  // second pad
  meshAdd(cylinder(5).slice(0, -1), translation(-7.5, 2.7).rotate(0, 90).scale(1, 0.2), material(0.5, 0.5, 0.5, 0.5));
  meshAdd(
    cylinder(10).slice(0, -1),
    translation(-7.5, 2.4).rotate(0, 90).scale(2, 0.1, 2),
    material(0.3, 0.8, 0.7, 0.3),
  );
  meshAdd(cylinder(15, 1), translation(-7.5).rotate(0, 90).scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3));

  // LEVER over the donut pad
  newLever(translation(-7.5).rotate(0, 90).translate(0, 3.4).rotate(0, 180), "LEVER_ID_DONUT_PAD");

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

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
      polygons_transform(cylinder(10), identity.scale(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5)),
    ),
  );

  // SOUL after the hex pads, in the hex donut with horns
  newSoul(translation(-5, 4), [0, -1.2, 1.7], [0, 1.2, 1.7]);

  // pendulums
  newModel("MODEL_ID_PENDULUMS");
  meshAdd(cylinder(3), translation(0, -3, 118.8).scale(0.8, 0.8, 8).rotate(90, 0, 60), material(0.5, 0.3, 0.3, 0.4));
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

  // First rotating platform (with hole)
  newModel("MODEL_ID_ROTATING_PLATFORM0");
  meshAdd(cylinder(5).slice(0, -1), translation(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(8).slice(0, -1), translation(0, 2).scale(3, 1.5, 3).rotate(0, 22), material(0.7, 0.7, 0.7, 0.1));
  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2)),
      polygons_transform(cylinder(), translation(0, 0, -5.5).scale(1.5, 3, 2.7), material(0.45, 0.45, 0.45, 0.2)),
    ),
  );

  // SOUL over the first rotating platform
  newSoul(translation(0, 3), ...polygon_regular(14).map(({ x, z }): Circle => [x * 5.6, z * 5.6, 2]));

  // Second rotating platform
  newModel("MODEL_ID_ROTATING_PLATFORM1");

  // rotating platform horns
  [-1, 1].map((x) =>
    meshAdd(
      hornPolygons,
      identity
        .rotate(0, 90)
        .translate(x * -5, 3, -0.5)
        .scale(1.2, 9, 1.2)
        .rotate(0, 90 * x + 90),
    ),
  );

  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(28, 1).slice(0, -1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
      polygons_transform(cylinder().slice(0, -1), translation(0, 2).scale(9, 1.1, 2), material(0.3, 0, 0, 0.3)),
    ),
  );
  meshAdd(cylinder(5).slice(0, -1), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2));

  // Third rotating platform
  newModel("MODEL_ID_ROTATING_PLATFORM2");
  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(28, 1).slice(0, -1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
      polygons_transform(cylinder().slice(0, -1), translation(0, 2, 7).scale(2, 1.1, 9), material(0.3, 0, 0, 0.3)),
      polygons_transform(cylinder().slice(0, -1), translation(7, 2).scale(9, 1.1, 2), material(0.3, 0, 0, 0.3)),
    ),
  );
  meshAdd(cylinder(5).slice(0, -1), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2));

  // Fourth rotating platform
  newModel("MODEL_ID_ROTATING_PLATFORM3");
  meshAdd(
    csg_polygons_subtract(
      polygons_transform(cylinder(28, 1).slice(0, -1), translation(0, 2).scale(7.5, 1, 7.5), material(0.35, 0, 0, 0.3)),
      polygons_transform(cylinder().slice(0, -1), translation(0, 2, -7).scale(2, 1.1, 9), material(0.3, 0, 0, 0.3)),
      polygons_transform(cylinder().slice(0, -1), translation(7, 2).scale(9, 1.1, 2), material(0.3, 0, 0, 0.3)),
    ),
  );
  meshAdd(cylinder(5).slice(0, -1), translation(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2));
  meshAdd(cylinder(28, 1), identity.scale(7.5, 1, 7.5), material(0.45, 0.45, 0.45, 0.2));

  // BOATS
  integers_map(2, (i) => {
    newModel("MODEL_ID_BOAT" + i);
    meshAdd(
      csg_polygons_subtract(
        polygons_transform(
          cylinder(30, 1, 1.15, 1),
          translation(0, -3).scale(3.5, 1, 3.5),
          material(0.7, 0.4, 0.25, 0.7),
        ),
        polygons_transform(cylinder(), translation(4, -1.2).scale3d(2), material(0.7, 0.4, 0.25, 0.3)),
        polygons_transform(
          cylinder(30, 1, 1.3, 1),
          translation(0, -2.5).scale(2.6, 1, 3),
          material(0.7, 0.4, 0.25, 0.2),
        ),
      ),
    );
    // LEVER over the boats (two levers)
    newLever(translation(0, -3, 4), "LEVER_ID_BOAT" + i);
  });

  for (let i = 0; i < LEVERS_COUNT; ++i) {
    newModel("MODEL_ID_LEVER" + i);
    meshAdd(cylinder(9, 1), translation(0, 0.8).scale(0.2, 0.3, 0.2), material(0.7, 1, 0.2));
    meshAdd(cylinder(6, 1).slice(0, -1), identity.scale(0.12, 1.2, 0.12), material(0.3, 0.3, 0.5, 0.1));
    meshAdd(cylinder(3), translation(0, -1).rotate(90, 90).scale(0.3, 0.4, 0.3), material(0.2, 0.2, 0.2, 0.1));
  }

  // ------ End of game models ------

  newModel("MODEL_ID_PLAYER_BODY");
  // head
  meshAdd(sphere(20), translation(0, 1).scale3d(0.5), material(1, 0.3, 0.4));

  // body
  meshAdd(sphere(30), identity.scale(0.65, 0.8, 0.55), material(1, 0.3, 0.4));

  // mouth
  meshAdd(cylinder(), translation(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3));

  [-1, 1].map((v) => {
    // horns
    meshAdd(
      hornPolygons,
      identity
        .rotate(0, v > 0 ? 180 : 0)
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
      translation(v * 0.2, 1.2, 0.4).rotate(0, 20 * v, 20 * v),
    );
  });

  [-1, 1].map((v, i) => {
    // legs
    newModel("MODEL_ID_PLAYER_LEG" + i);

    meshAdd(cylinder(20, 1), translation(0.3 * v, -0.8).scale(0.2, 0.7, 0.24), material(1, 0.3, 0.4));
  });

  newModel("MODEL_ID_SOUL_COLLISION");

  meshAdd(cylinder(6, 1).slice(0, -1), identity.scale(0.77, 1, 0.77), material(1, 0.3, 0.5));

  newModel("MODEL_ID_SOUL");

  const GHOST_SLICES = 28;
  const GHOST_STACKS = 22;

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
    identity.scale3d(0.7),
    material(1, 1, 1),
  );

  // eyes
  [-1, 1].map((x) => meshAdd(sphere(10), translation(0.16 * x, 0.4, -0.36).scale3d(0.09)));

  if (DEBUG) {
    console.timeEnd("build_life_the_universe_and_everything");
    devAllModelsPrint();
  }
};
