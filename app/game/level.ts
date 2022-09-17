import { abs, clamp01, integers_map, lerpneg, max, min, identity } from "../math";
import { material, cylinder, polygons_transform } from "../geometry/geometry";
import { csg_subtract, csg_polygons, csg_union } from "../geometry/csg";
import { GQuad, GHorn, boatPolygons, bigArc } from "../geometry/solids";
import type { Model } from "./scene";
import { meshAdd, meshEnd, withEditMatrix, newModel } from "./scene";
import {
  secondBoatLerp,
  gameTime,
  levers,
  rotatingHexCorridorRotation,
  rotatingPlatform1Rotation,
  rotatingPlatform2Rotation,
} from "./world-state";
import { getBoatAnimationMatrix, initFirstBoatModel, newLever } from "./objects";
import { initSouls } from "./init-souls";

export let centralOscillatingPlatformModel: Model;

export let centralSculptureMonumentModel: Model;

export let donutWithHornsModel: Model;

export let firstRotatingPlatformModel: Model;

export const buildWorld = () => {
  newModel(() => {
    initFirstBoatModel();

    // ========= entranceBarsMesh ========= //

    integers_map(7, (i) =>
      meshAdd(cylinder(6, 1), identity.translate(4 * (i / 6 - 0.5), 3).scale(0.2, 3, 0.2), material(0.3, 0.3, 0.38)),
    );
    const entranceBarsMesh = meshEnd();

    // ========= WORLD! ========= //

    // first boat attachment

    meshAdd(
      cylinder(GQuad),
      identity.translate(-5, -0.2, -26).scale(3.2, 1, 2.5).skewX(3),
      material(0.8, 0.8, 0.8, 0.2),
    );

    // gate columns

    GQuad.map(({ x, z }) =>
      meshAdd(cylinder(6), identity.translate(x * 3, 3, z * 15).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4)),
    );

    // in and out
    [-23, 22].map((z) =>
      meshAdd(cylinder(GQuad), identity.translate(0, 0, z).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2)),
    );

    [-15, 15].map((z, i) => {
      //  gate top
      meshAdd(cylinder(GQuad), identity.translate(0, 6.3, z).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4));
      //  gate bottom
      meshAdd(cylinder(GQuad), identity.translate(0, 1, z).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3));
      // in and out gate bars
      newModel((model) => {
        model._update = () => identity.translate(0, -levers[i + 1]!.$lerpValue * 4.7, z);
        return entranceBarsMesh;
      });
    });

    // horns

    integers_map(5, (i) =>
      integers_map(2, (j) =>
        meshAdd(
          GHorn,
          identity
            .translate((j - 0.5) * 18.5, 0, i * 4.8 - 9.5)
            .rotate(0, 180 - j * 180)
            .scale(1.2, 10, 1.2),
          material(1, 1, 0.8, 0.2),
        ),
      ),
    );

    meshAdd(cylinder(GQuad), identity.translate(3, 1.5, -20).scale(0.5, 2, 5), material(0.7, 0.7, 0.7, 0.2));

    // first lever pad
    meshAdd(
      cylinder(GQuad),
      identity.translate(-3.4, -0.2, -19).scale(2, 1, 1.5).rotate(0, -90),
      material(0.75, 0.75, 0.75, 0.2),
    );
    meshAdd(cylinder(5), identity.translate(-5.4, 0, -19).scale(2, 1, 2).rotate(0, -90), material(0.6, 0.3, 0.3, 0.4));

    newLever(identity.translate(-5.4, 1.5, -19).rotate(0, -90));

    // descent

    meshAdd(
      cylinder(GQuad),
      identity.rotate(0, 60).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5),
      material(0.8, 0.2, 0.2, 0.5),
    );

    // base

    meshAdd(
      csg_polygons(
        csg_subtract(
          csg_union(
            // lower base
            polygons_transform(
              cylinder(6, 0, 0, 0.3),
              identity.translate(8, -3, -4).scale(13, 1, 13),
              material(0.7, 0.7, 0.7, 0.2),
            ),

            // hole extension
            polygons_transform(cylinder(6), identity.translate(0, -8).scale(9, 8, 8), material(0.4, 0.2, 0.5, 0.5)),

            // middle base
            polygons_transform(
              cylinder(6, 0, 0, 0.3),
              identity.translate(0, -0.92).scale(13, 2, 13),
              material(0.8, 0.8, 0.8, 0.2),
            ),
          ),
          // hole
          polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),

          // smooth hole
          polygons_transform(
            cylinder(5, 0, 1.5),
            identity.translate(0, 1).scale(4.5, 0.3, 4.5),
            material(0.7, 0.5, 0.9, 0.2),
          ),

          // descent cut
          polygons_transform(
            cylinder(GQuad),
            identity.rotate(0, 60).translate(14, 0.7, -1).rotate(0, 0, -35).scale(2, 2, 2),
            material(0.5, 0.5, 0.5, 0.5),
          ),

          // lower lever pad
          polygons_transform(
            cylinder(6),
            identity.translate(15, -1.5, 4).scale(3.5, 1, 3.5),
            material(0.5, 0.5, 0.5, 0.5),
          ),
        ),
      ),
    );

    // moving central platform

    newModel((model) => {
      model._update = () => {
        return identity.translate(
          0,
          levers[3]!.$lerpValue > 0.01
            ? (Math.cos(gameTime * 1.5) * 5 + 2) * levers[3]!.$lerpValue2 * (1 - levers[2]!.$lerpValue) +
                (1 - levers[3]!.$lerpValue) * -15
            : // invisible
              -500,
          0,
        );
      };

      newLever(identity.translate(0, 1.2));

      meshAdd(cylinder(5), identity.translate(0, -0.2).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3));
    });

    newLever(identity.translate(15, -2, 4));

    // ******** LEVEL 2 ********

    const getOscillationAmount = () => min(levers[2]!.$lerpValue2, 1 - levers[4]!.$lerpValue2);

    const blackPlatform = (freq: number, amplitude: number, pz: number) =>
      newModel((model) => {
        model._update = () =>
          identity.translate(getOscillationAmount() * Math.sin(freq * 3 + gameTime * freq) * amplitude);
        GQuad.map(({ x, z }) => {
          // column body
          meshAdd(
            cylinder(11, 1),
            identity.translate(x * 4, 4, pz + z * 4).scale(0.8, 3, 0.8),
            material(0.5, 0.3, 0.7, 0.6),
          );
          // column top
          meshAdd(
            cylinder(GQuad),
            identity.translate(x * 4, 7, pz + z * 4).scale(1, 0.3),
            material(0.5, 0.5, 0.5, 0.3),
          );
        });

        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(
                cylinder(GQuad),
                identity.translate(0, 0, pz).scale(5, 1, 5),
                material(0.8, 0.8, 0.8, 0.3),
              ),
              ...[-1, 1].map((i) =>
                polygons_transform(
                  cylinder(GQuad),
                  identity
                    .translate(5 * i, 0.2, pz)
                    .rotate(0, 0, i * -30)
                    .scale(4, 1, 2),
                  material(0.8, 0.8, 0.8, 0.3),
                ),
              ),
            ),
          ),
        );
        // bottom
        meshAdd(cylinder(GQuad), identity.translate(0, -3, pz).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3));
      });

    blackPlatform(0.7, 12, 35);
    blackPlatform(1, 8.2, 55);

    // central oscillating platform
    centralOscillatingPlatformModel = newModel((model) => {
      model._update = () => identity.translate(getOscillationAmount() * Math.sin(gameTime / 1.5 + 2) * 12);
      meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union(
              polygons_transform(cylinder(GQuad), identity.scale(1.5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
              polygons_transform(cylinder(6), identity.scale(4, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(0, -2).scale(2, 3.2, 1.9),
                material(0.3, 0.8, 0.5, 0.5),
              ),
              polygons_transform(
                cylinder(16, 1, 0, 4),
                identity.scale(1, 1, 1.5).rotate(0, 90),
                material(0.9, 0.9, 0.9, 0.2),
              ),
            ),
            polygons_transform(cylinder(GQuad), identity.scale(1.3, 10, 1.3), material(0.2, 0.7, 0.4, 0.6)),
          ),
        ),
        identity.translate(0, 0, 45),
      );
    });

    const level3Oscillation = () =>
      clamp01(1 - getOscillationAmount() * 5) * lerpneg(levers[4]!.$lerpValue, levers[5]!.$lerpValue);

    // ******** LEVEL 3 ********

    // triangle platform

    newModel((model) => {
      model._update = () => identity.translate((1 - getOscillationAmount()) * 9.8);

      meshAdd(cylinder(3), identity.translate(-23, -1.7, 55.8).scale(5, 0.7, 8.3), material(0.3, 0.6, 0.6, 0.2));
      meshAdd(cylinder(8), identity.translate(-23, -2.2, 66.5).scale(1.5, 1.2, 1.5), material(0.8, 0.8, 0.8, 0.2));
      meshAdd(cylinder(GQuad), identity.translate(-23, -3, 55).scale(5.2, 1.7, 3), material(0.5, 0.5, 0.5, 0.3));
      meshAdd(cylinder(GQuad), identity.translate(-23, -2.2, 62).scale(3, 1, 4), material(0.5, 0.5, 0.5, 0.3));

      newLever(identity.translate(-23, -0.5, 66.5));
    });

    meshAdd(
      cylinder(GQuad),
      identity.translate(-21.1 + 2.45, -3, 55).scale(2.45, 1.4, 2.7),
      material(0.9, 0.9, 0.9, 0.2),
    );

    // vertically oscillating mini platforms

    newModel((model) => {
      model._update = () => identity.translate(0, level3Oscillation() * Math.sin(gameTime * (1.5 * 0.9)) * 4);

      meshAdd(
        cylinder(GQuad),
        identity.translate(-21.1 - 1.45, -3, 55).scale(1.45, 1.4, 2.7),
        material(0.7, 0.7, 0.7, 0.2),
      );

      meshAdd(
        csg_polygons(
          csg_subtract(
            polygons_transform(cylinder(GQuad), identity.scale(3, 1.4, 2.7)),
            polygons_transform(cylinder(GQuad), identity.scale(1.2, 8, 1.2)),
          ),
        ),
        identity.translate(-33, -3, 55),
        material(0.7, 0.7, 0.7, 0.2),
      );
    });

    // horizontaly oscillating mini platforms

    newModel((model) => {
      model._update = () => identity.translate(0, 0, level3Oscillation() * Math.sin(gameTime * 0.9) * 8);
      meshAdd(
        csg_polygons(
          csg_subtract(
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-27, -3, 55).scale(3, 1.4, 2.7),
              material(0.9, 0.9, 0.9, 0.2),
            ),
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-27, -3, 55).scale(1, 3),
              material(0.9, 0.9, 0.9, 0.2),
            ),
          ),
        ),
      );

      meshAdd(cylinder(GQuad), identity.translate(-39, -3, 55).scale(3, 1.4, 2.7), material(0.9, 0.9, 0.9, 0.2));
    });

    // hex corridor door

    newModel((model) => {
      model._update = () => identity.translate(0, levers[4]!.$lerpValue2 * -6.5);
      meshAdd(
        cylinder(6),
        identity.translate(-44.5, 0, 55).rotate(90, 90).rotate(0, 90).scale(5.9, 0.5, 5.9),
        material(0.7, 0.7, 0.7, 0.4),
      );
    });

    // hex corridor

    const hexCorridorPolygons = [
      ...polygons_transform(
        csg_polygons(
          csg_union(
            polygons_transform(
              cylinder(GQuad),
              identity.translate(0, -3).scale(11, 1.4, 3),
              material(0.9, 0.9, 0.9, 0.2),
            ),
            csg_subtract(
              polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(6, 8, 6), material(0.3, 0.6, 0.6, 0.3)),
              polygons_transform(
                cylinder(4, 0, 0.01),
                identity.translate(0, 6).scale(12, 2, 0.75).rotate(0, 45),
                material(0.3, 0.6, 0.6, 0.3),
              ),
              polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(5, 12, 5), material(0.3, 0.6, 0.6, 0.3)),
              ...[5, 0, -5].map((x) =>
                polygons_transform(
                  cylinder(5),
                  identity.translate(x, 2.5).rotate(90, 0, 36).scale(1.8, 10, 1.8),
                  material(0.3, 0.6, 0.6, 0.3),
                ),
              ),
            ),
          ),
        ),
        identity,
      ),
    ];

    meshAdd(hexCorridorPolygons, identity.translate(-53, 0, 55));

    meshAdd(cylinder(6), identity.translate(-61.3, -2.4, 49).scale(3, 1, 5), material(0.4, 0.6, 0.6, 0.3));

    meshAdd(cylinder(7), identity.translate(-57, -2.6, 46).scale(4, 1, 4), material(0.8, 0.8, 0.8, 0.3));

    newLever(identity.translate(-55, -1.1, 46).rotate(0, 90));

    // rotating hex corridor

    withEditMatrix(identity.translate(-75, 0, 55), () =>
      newModel((model) => {
        if (DEBUG) {
          console.log("rotatingHexCorridor modelId:" + model.$modelId);
        }

        model.$attachPlayer = 0;
        model._update = () => {
          return identity
            .translate(0, (1 - levers[5]!.$lerpValue2) * (1 - levers[6]!.$lerpValue) * 3)
            .rotate(180 * (1 - levers[5]!.$lerpValue2) + rotatingHexCorridorRotation, 0);
        };
        meshAdd(hexCorridorPolygons);
      }),
    );

    // connection from rotating hex corridor to platforms

    meshAdd(
      cylinder(GQuad),
      identity.translate(-88.3, -5.1, 55).rotate(0, 0, -30).scale(5, 1.25, 4.5),
      material(0.7, 0.7, 0.7, 0.2),
    );

    meshAdd(
      cylinder(3, 0, -0.5),
      identity.translate(-88.4, -3.9, 55).rotate(0, -90, 17).scale(3, 1.45, 5.9),
      material(0.8, 0.8, 0.8, 0.2),
    );

    // platform after the rotating hex corridor

    meshAdd(
      csg_polygons(
        csg_subtract(
          csg_union(
            // base
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-100, -2.5, 55).scale(8, 1, 8),
              material(0.8, 0.8, 0.8, 0.2),
            ),
            // right path to the boat
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-113, -2.6, 55).scale(6.2, 1.1, 3).skewX(3),
              material(0.8, 0.8, 0.8, 0.2),
            ),
            // straiht line
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-100, -2.6, 70).scale(3, 1.1, 7),
              material(0.8, 0.8, 0.8, 0.2),
            ),
            // 45 degrees detour
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-96, -2.6, 73).rotate(0, 45).scale(3, 1.1, 5),
              material(0.8, 0.8, 0.8, 0.2),
            ),
            // 45 degrees detour hexagon
            polygons_transform(
              cylinder(6),
              identity.translate(-88.79, -2.6, 80.21).scale(6, 1.1, 6).rotate(0, 15),
              material(0.6, 0.6, 0.6, 0.3),
            ),

            // ascension
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-100, -1.1, 82.39).rotate(-15, 0).scale(3, 1.1, 6),
              material(0.8, 0.8, 0.8, 0.2),
            ),
            // ascension continuation
            polygons_transform(
              cylinder(GQuad),
              identity.translate(-100, 0.42, 92).scale(3, 1.1, 4.1),
              material(0.8, 0.8, 0.8, 0.2),
            ),
          ),

          // decorative octagon
          polygons_transform(
            cylinder(8),
            identity.translate(-100, -1, 55).scale(7, 0.9, 7),
            material(0.3, 0.3, 0.3, 0.4),
          ),
          polygons_transform(
            cylinder(8),
            identity.translate(-100, -2, 55).scale(4, 0.3, 4),
            material(0.4, 0.4, 0.4, 0.5),
          ),
          polygons_transform(
            cylinder(8),
            identity.translate(-100, -3, 55).scale(0.6, 1, 0.6),
            material(0.4, 0.4, 0.4, 0.5),
          ),
        ),
      ),
      identity,
    );

    // first arc door

    meshAdd(
      csg_polygons(
        csg_subtract(
          polygons_transform(
            cylinder(GQuad),
            identity.translate(-100, 1, 63).scale(7.5, 4),
            material(0.5, 0.5, 0.5, 0.4),
          ),
          polygons_transform(
            cylinder(GQuad),
            identity.translate(-100, 0, 70).scale(2, 2, 10),
            material(0.5, 0.5, 0.5, 0.4),
          ),
          polygons_transform(
            cylinder(20, 1),
            identity.translate(-100, 2, 70).scale(2, 2, 10).rotate(90, 0),
            material(0.5, 0.5, 0.5, 0.4),
          ),
        ),
      ),
    );

    // gate bars

    withEditMatrix(identity.translate(-99.7, -2, 63.5), () =>
      newModel((model) => {
        model._update = () => identity.translate(0, -levers[6]!.$lerpValue * 5.3);
        return entranceBarsMesh;
      }),
    );

    // hex columns

    GQuad.map(({ x, z }) => {
      meshAdd(
        cylinder(6),
        identity.translate(-100 + x * 7, -3, z * 7 + 55).scale(1, 8.1),
        material(0.6, 0.15, 0.15, 0.8),
      );
      [4, -0.4].map((i) =>
        meshAdd(
          cylinder(6),
          identity.translate(-100 + x * 7, i, z * 7 + 55).scale(1.3, 0.5, 1.3),
          material(0.4, 0.2, 0.2, 0.8),
        ),
      );
    });

    // crystals

    integers_map(7, (i) => {
      meshAdd(
        cylinder(((i * 23 + 1) % 5) + 5, 0, 0.55),
        identity
          .translate(-101 + Math.sin(i) * 5 + i, -2.3 - i, 44.9 - i * 2.8)
          .scaleSelf(5 + i / 2, 1 + i / 6, 5 + i / 3),
        material(0.5 - i / 17, 0.5 - (i & 1) / 9, 0.6, 0.3),
      );
    });

    // crystals continuation pad

    meshAdd(cylinder(GQuad), identity.translate(-87, -9.5, 24).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4));

    // lever pad

    meshAdd(cylinder(4), identity.translate(-86, -9.2, 27).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3));

    meshAdd(cylinder(18, 1), identity.translate(-86, -9, 31).scale(1.5, 1, 1.5), material(0.3, 0.3, 0.4, 0.1));

    newLever(identity.translate(-86, -7.5, 31));

    // elevators

    withEditMatrix(identity.translate(-76.9, -10, 24), () => {
      const shouldOscillate = () => lerpneg(levers[7]!.$lerpValue2, levers[6]!.$lerpValue2);

      newModel((model) => {
        model._update = () => {
          const osc = shouldOscillate();
          return identity.translate(
            0,
            (1 - max(levers[6]!.$lerpValue, levers[7]!.$lerpValue)) * 3.5 + osc * Math.sin(gameTime) * 5,
          );
        };
        [0, 12, 24].map((x) =>
          meshAdd(cylinder(GQuad), identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(0.2, 0.5, 0.6, 0.2)),
        );
      });

      newModel((model) => {
        model._update = () => {
          const osc = shouldOscillate();
          return identity.translate(0, osc * Math.sin(gameTime + 3) * 6, Math.sin(gameTime * 0.6 + osc) * 6 * osc);
        };
        [6, 18].map((x) =>
          meshAdd(cylinder(GQuad), identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(0.1, 0.4, 0.5, 0.2)),
        );
      });
    });

    // pad after elevators

    withEditMatrix(identity.translate(-38.9, -11.3, 17), () => {
      meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union(
              polygons_transform(cylinder(GQuad), identity.scale(11, 1, 13), material(0.3, 0.4, 0.6, 0.3)),
              // lever pad
              polygons_transform(
                cylinder(5),
                identity.translate(0, 0, -7).scale(2, 1.2, 2),
                material(0.2, 0.4, 0.7, 0.3),
              ),
              // blue pentagon
              polygons_transform(cylinder(5), identity.scale(9, 1.2, 9), material(0, 0.2, 0.3, 0.5)),
            ),
            polygons_transform(cylinder(5), identity.scale(5.4, 5, 5.4), material(0, 0.2, 0.3, 0.5)),
          ),
        ),
      );

      newLever(identity.translate(0, 1.7, -7));

      // central sculpture/monument

      centralSculptureMonumentModel = newModel((model) => {
        model._update = () => identity.translate(0, levers[7]!.$lerpValue2 * -7.3);

        meshAdd(
          csg_polygons(
            csg_subtract(
              csg_union(
                polygons_transform(
                  cylinder(5),
                  identity.translate(0, 2).scale(5, 7, 5).skewY(8),
                  material(0.2, 0.4, 0.5, 0.5),
                ),
                polygons_transform(
                  cylinder(5),
                  identity.translate(0, 6).scale(1.1, 7, 1.1).skewY(-8),
                  material(0.25, 0.35, 0.5, 0.5),
                ),
                polygons_transform(
                  cylinder(5),
                  identity.translate(0, 9).scale(0.6, 7, 0.6).skewY(8),
                  material(0.35, 0.3, 0.5, 0.5),
                ),
              ),
              polygons_transform(
                cylinder(5),
                identity.translate(0, 5).scale(1.5, 1.5, 8).rotate(90, 0, 35),
                material(0.2, 0.4, 0.5, 0.5),
              ),
            ),
          ),
        );
      });

      // columns

      GQuad.map(({ x, z }) => {
        meshAdd(cylinder(18, 1), identity.translate(x * 9, 4, z * 11).scale(1, 4), material(0.25, 0.25, 0.25, 1));
        [1.5, 8].map((y) =>
          meshAdd(
            cylinder(18, 1),
            identity.translate(x * 9, y, z * 11).scale(1.5, 0.5, 1.5),
            material(0.6, 0.6, 0.6, 0.3),
          ),
        );
      });

      meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union(
              // holed base
              polygons_transform(
                cylinder(6),
                identity.translate(0, 0, -36).scale(15, 1.2, 15),
                material(0.7, 0.7, 0.7, 0.3),
              ),
              // after monument continuation
              polygons_transform(
                cylinder(GQuad),
                identity.translate(0, 0, -18).scale(4, 1.2, 6),
                material(0.45, 0.4, 0.6, 0.3),
              ),
            ),
            ...integers_map(6, (z) =>
              integers_map(6, (x) =>
                polygons_transform(
                  cylinder(6),
                  identity.translate(x * 4.6 - 12 + 2 * (z & 1), 0, z * 4.6 - 50 + Math.sin(x * 4) * 2).scale(2, 5, 2),
                  material(0.7, 0.7, 0.7, 0.3),
                ),
              ),
            ).flat(),
          ),
        ),
      );
    });

    // Detour lever pad
    meshAdd(cylinder(5), identity.translate(-84, -2, 85).scale(4, 0.8, 4).rotate(0, 10), material(0.8, 0.1, 0.25, 0.4));

    // Detour lever
    newLever(identity.translate(-84, -0.5, 85).rotate(0, 45));

    // ******** SECOND BOAT ********

    withEditMatrix(identity.translate(-123, 1.4, 55), () => {
      newModel((model) => {
        model._update = () => getBoatAnimationMatrix(secondBoatLerp * -65);
        newLever(identity.translate(0, -3, -4).rotate(0, 180));
        meshAdd(boatPolygons);
      });
    });

    // ******** LEVEL AFTER BOAT ********

    withEditMatrix(identity.translate(-123, 0, -12), () => {
      const pushingRod = csg_polygons(
        csg_subtract(
          polygons_transform(
            cylinder(GQuad),
            identity.translate(0, -0.5, 1).scale(1.15, 1.2, 6.5),
            material(0.25, 0.25, 0.35, 0.3),
          ),
          polygons_transform(cylinder(3), identity.translate(0, 0, -5.5).scale(3, 2), material(0.6, 0.3, 0.4, 0.3)),
          ...[-1.2, 1.2].map((i) =>
            polygons_transform(
              cylinder(GQuad),
              identity.translate(i, -0.5, 1).scale(0.14, 0.3, 6.5),
              material(0.7, 0.2, 0, 0.3),
            ),
          ),
        ),
      );

      // boat attachment

      meshAdd(cylinder(GQuad), identity.translate(7, -2.6).scale(3.2, 1.1, 4).skewX(3), material(0.8, 0.8, 0.8, 0.2));

      meshAdd(cylinder(6), identity.translate(7, -2.6, -4.5).scale(3.2, 0.8, 3), material(0.6, 0.5, 0.7, 0.2));

      newLever(identity.translate(7, -1.4, -6).rotate(0, 180));

      // arcs

      integers_map(3, (i) => {
        meshAdd(bigArc, identity.translate(i * 12 + 14, -9), material(0.6, 0.6, 0.6, 0.3));
        meshAdd(bigArc, identity.translate(46, -9, i * -12 - 8).rotate(0, 90), material(0.6, 0.6, 0.6, 0.3));
      });

      meshAdd(
        csg_polygons(
          csg_subtract(
            polygons_transform(
              cylinder(12),
              identity.translate(46, -13.9).scale(4, 18.2, 4),
              material(0.7, 0.7, 0.7, 0.2),
            ),
            polygons_transform(
              cylinder(GQuad),
              identity.translate(44).scale(3.5, 2.2, 1.3),
              material(0.4, 0.5, 0.6, 0.2),
            ),
            polygons_transform(
              cylinder(GQuad),
              identity.translate(46, 0, -2).scale(1.5, 2.2, 2),
              material(0.4, 0.5, 0.6, 0.2),
            ),
            polygons_transform(cylinder(12), identity.translate(46, 2.8).scale(3, 5, 3), material(0.4, 0.5, 0.6, 0.2)),
          ),
        ),
      );

      meshAdd(cylinder(GQuad), identity.translate(7.5, -17).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3));

      meshAdd(cylinder(GQuad), identity.translate(46, -17, -38.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3));

      // pushing rods container

      meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union(
              polygons_transform(cylinder(GQuad), identity.translate(26.5, -1.6, 10).scale(17, 2.08, 3)),
              polygons_transform(cylinder(GQuad), identity.translate(26.5, -0.6, 10).scale(17, 2, 0.5)),
            ),
            ...integers_map(4, (x) =>
              polygons_transform(
                cylinder(GQuad),
                identity.translate(13 + x * 9 + (x & 1), -0.8, 9).scale(1.35, 1.35, 9),
              ),
            ),
            ...integers_map(3, (x) =>
              polygons_transform(cylinder(GQuad), identity.translate(17 + x * 9, -0.8, 9).scale(1.35, 1.35, 9)),
            ),
          ),
        ),
        identity,
        material(0.5, 0.5, 0.6, 0.2),
      );

      meshAdd(
        cylinder(5),
        identity.translate(9.4, -1.6, 10).rotate(0, 90, 90).scale(1.5, 0.2, 1.5),
        material(0.25, 0.25, 0.35, 1),
      );

      // pushing rods

      const shouldPushRods = () => lerpneg(levers[10]!.$lerpValue, levers[11]!.$lerpValue);
      const shouldBlockRods = () => (1 - levers[10]!.$lerpValue) * (1 - shouldPushRods());

      newModel((model) => {
        model._update = () => identity.translate(0, -2, shouldPushRods() * abs(Math.sin(gameTime * 1.1)) * -8.5 + 10);
        integers_map(2, (x) => meshAdd(pushingRod, identity.translate(13 + x * 9 + (x & 1), 1.7)));
      });

      newModel((model) => {
        model._update = () => identity.translate(0, -2, shouldPushRods() * abs(Math.sin(gameTime * 2.1)) * -8.5 + 10);
        integers_map(2, (x) => meshAdd(pushingRod, identity.translate(13 + (x + 2) * 9 + (x & 1), 1.7)));
      });

      newModel((model) => {
        model._update = () =>
          identity.translate(
            0,
            -2,
            max(shouldBlockRods(), shouldPushRods() * abs(Math.sin(gameTime * 1.5))) * -8.5 + 10,
          );
        integers_map(3, (x) => meshAdd(pushingRod, identity.translate(17 + x * 9, 1.7)));
      });

      // internal pad

      meshAdd(
        cylinder(GQuad),
        identity.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3),
        material(0.6, 0.6, 0.6, 0.3),
      );

      meshAdd(
        csg_polygons(
          csg_subtract(
            polygons_transform(
              cylinder(GQuad),
              identity.translate(30, -5.8, -28).scale(9, 1, 5),
              material(0.8, 0.8, 0.8, 0.1),
            ),
            polygons_transform(
              cylinder(9),
              identity.translate(25, -5.8, -28).scale(3, 8, 3),
              material(0.7, 0.7, 0.7, 0.2),
            ),
          ),
        ),
      );

      meshAdd(cylinder(9), identity.translate(25, -5.8, -28).scale(2.5, 0.9, 2.5), material(0.5, 0.5, 0.5, 0.3));

      newLever(identity.translate(25, -4.4, -28).rotate(0, 90));
    });

    // ******** LEVEL AFTER CENTRAL GATE ********

    withEditMatrix(identity.translate(-100, 0.7, 115), () => {
      // base

      meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union(
              polygons_transform(
                cylinder(6, 0, 0, 0.6),
                identity.translate(0, 0, -9.5).scale(8, 1, 11),
                material(0.7, 0.7, 0.7, 0.2),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(-1.5, 0, -21.5).scale(10.5, 1, 2),
                material(0.7, 0.7, 0.7, 0.2),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(8.8, 0, -8).scale(3, 1, 3.3),
                material(0.7, 0.7, 0.7, 0.2),
              ),
            ),
            polygons_transform(cylinder(5), identity.translate(0, 0, -2).scale(4, 3, 4), material(0.7, 0.7, 0.7, 0.2)),
          ),
        ),
      );

      // oscillating hex pads

      const hexPadShouldOscillate = () => lerpneg(levers[8]!.$lerpValue2, levers[12]!.$lerpValue2);

      integers_map(4, (i) =>
        newModel((model) => {
          model._update = () => {
            const osc = hexPadShouldOscillate();
            return identity.translate(
              i > 2 ? (1 - osc) * 2 + osc : 0,
              osc * Math.sin(gameTime * 1.3 + i * 1.7) * (3 + i / 3),
              (i & 1 ? -1 : 1) * (1 - levers[8]!.$lerpValue2) * (1 - levers[12]!.$lerpValue2) * -7 +
                max(0.05, osc) * Math.cos(gameTime * 1.3 + i * 7) * (4 - 2 * (1 - i / 3)),
            );
          };
          meshAdd(
            cylinder(6),
            identity.translate(-14.6 - i * 4.8 - (i > 2 ? 2 : 0), -i / 2.3, -21.5).scale(2.6, 1, 2.5),
            material(0.5 - i / 8, i / 12 + 0.5, 0.7, 0.3),
          );
        }),
      );

      // after the hex pads

      withEditMatrix(identity.translate(-39.7, -2.5, -21.5), () => {
        // pad with hole
        donutWithHornsModel = newModel((model) => {
          model._update = () => {
            const osc = hexPadShouldOscillate();
            return identity
              .translate((1 - osc) * 2.5, (1 - levers[8]!.$lerpValue) * -3 + osc * Math.sin(gameTime * 0.8) * -1)
              .rotateSelf(Math.cos(gameTime * 1.3) * (osc * 3 + 3), 0);
          };
          meshAdd(
            csg_polygons(
              csg_subtract(
                polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
                polygons_transform(cylinder(10), identity.scale(3.3, 6, 3.3), material(0.1, 0.6, 0.5, 0.5)),
              ),
            ),
          );

          // second pad
          withEditMatrix(identity.translate(-7.5).rotate(0, 90), () => {
            meshAdd(cylinder(15), identity.scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3));
            meshAdd(cylinder(10), identity.scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3));
            meshAdd(cylinder(5), identity.scale(1, 3), material(0.5, 0.5, 0.5, 0.5));

            newLever(identity.translate(0, 3.4).rotate(0, 180));
          });

          // lateral horns
          [-1, 1].map((i) =>
            meshAdd(
              GHorn,
              identity
                .rotate(-i * 90, 180, 90) //
                .translate(0, 5)
                .rotate(0, 0, 40) //
                .scale(1.3, 10, 1.3), //
              material(1, 1, 0.8, 0.2),
            ),
          );
        });
      });

      // far arc gate
      [-1, 1].map((x) => {
        meshAdd(
          cylinder(15, 1),
          identity.translate(-7.5 * x, 3, -19).scale(0.8, 4, 0.8),
          material(0.6, 0.24, 0.2, 0.5),
        );

        [7.2, 1.5].map((y) =>
          meshAdd(
            cylinder(15, 1),
            identity.translate(-7.5 * x, y, -19).scale(1.1, 0.5, 1.1),
            material(0.5, 0.24, 0.2, 0.4),
          ),
        );

        meshAdd(
          GHorn,
          identity
            .translate(x * -5, 1, -0.5)
            .scale(1.2, 10, 1.2)
            .rotate(0, 90 * x - 90),
          material(1, 1, 0.8),
        );

        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(
                cylinder(GQuad),
                identity.translate(x * -4, 3.5, -0.5).scale(4, 4, 0.7),
                material(0.5, 0.5, 0.5, 0.4),
              ),
              polygons_transform(cylinder(GQuad), identity.scale(3, 3, 10), material(0.6, 0.24, 0.2, 0.5)),
              polygons_transform(
                cylinder(30, 1),
                identity.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0),
                material(0.6, 0.24, 0.2, 0.5),
              ),
              polygons_transform(
                cylinder(5),
                identity
                  .translate(x * -5.3, 7)
                  .rotate(90, 0)
                  .scale(1.7, 5, 1.7),
                material(0.6, 0.24, 0.2, 0.5),
              ),
              polygons_transform(
                cylinder(5),
                identity
                  .translate(x * -5.3, 3.8)
                  .rotate(90, 0, 35)
                  .scale(0.75, 5, 0.75),
                material(0.6, 0.24, 0.2, 0.5),
              ),
            ),
          ),
          identity.translate(x, 0, -18),
        );
      });

      // far arc gate door

      newModel((model) => {
        model._update = () => identity.translate(0, -0.1 - levers[12]!.$lerpValue * 6, -18.5).scale(0.88, 1.2);
        return entranceBarsMesh;
      });

      const rotPlatformBase = [
        ...polygons_transform(cylinder(28, 1), identity.scale(8, 1, 8), material(0.45, 0.45, 0.45, 0.2)),
        ...polygons_transform(cylinder(5), identity.translate(0, 1).scale(1, 0.2), material(0.3, 0.3, 0.3, 0.2)),
      ];

      // rotating platforms

      const rotPlatform = () => {
        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(cylinder(28, 1), identity.translate(0, 2).scale(8, 1, 8), material(0.35, 0, 0, 0.3)),
              polygons_transform(cylinder(GQuad), identity.scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
            ),
          ),
        );
        meshAdd(rotPlatformBase);
      };

      withEditMatrix(identity.translate(20, 0.3, -9), () => {
        firstRotatingPlatformModel = newModel((model) => {
          model._update = () => identity.rotate(0, 40 + rotatingPlatform1Rotation);
          meshAdd(
            csg_polygons(
              csg_subtract(
                polygons_transform(cylinder(28, 1), identity.scale(8, 1, 8), material(0.45, 0.45, 0.45, 0.2)),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(0, 0, -5.5).scale(1.5, 3, 2.5),
                  material(0.45, 0.45, 0.45, 0.2),
                ),
              ),
            ),
          );
          meshAdd(cylinder(8), identity.translate(0, 2).scale(3, 1.5, 3), material(0.7, 0.7, 0.7, 0.1));
          meshAdd(cylinder(5), identity.translate(0, 2).scale(1, 2), material(0.3, 0.3, 0.3, 0.2));
        });
      });

      withEditMatrix(identity.translate(36, 0.3, -9), () => {
        meshAdd(cylinder(GQuad), identity.translate(8).scale(0.7, 0.8, 2.5), material(0.7, 0.7, 0.7, 0.2));
        newModel((model) => {
          model._update = () => identity.rotate(0, rotatingPlatform2Rotation);
          rotPlatform();
          [-1, 1].map((x) =>
            meshAdd(
              GHorn,
              identity
                .rotate(0, 90)
                .translate(x * -5, 1, -0.5)
                .scale(1.2, 10, 1.2)
                .rotate(0, 90 * x + 90),
              material(1, 1, 0.8),
            ),
          );
        });
      });

      withEditMatrix(identity.translate(52, 0.3, -9), () => {
        meshAdd(cylinder(GQuad), identity.translate(0, 0, -8).scale(2.5, 0.8, 0.7), material(0.7, 0.7, 0.7, 0.2));
        newModel((model) => {
          model._update = () => identity.rotate(0, 180 - rotatingPlatform2Rotation);
          meshAdd(
            csg_polygons(
              csg_subtract(
                polygons_transform(cylinder(30, 1), identity.translate(0, 2).scale(8, 1, 8), material(0.35, 0, 0, 0.3)),
                polygons_transform(cylinder(GQuad), identity.translate(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(0, 0, 7).scale(2, 5, 9),
                  material(0.3, 0, 0, 0.3),
                ),
              ),
            ),
          );
          meshAdd(rotPlatformBase);
        });
      });

      withEditMatrix(identity.translate(52, 0.3, -25), () => {
        newModel((model) => {
          model._update = () => identity.rotate(0, 270 + rotatingPlatform2Rotation);
          meshAdd(
            csg_polygons(
              csg_subtract(
                polygons_transform(cylinder(30, 1), identity.translate(0, 2).scale(8, 1, 8), material(0.35, 0, 0, 0.3)),
                polygons_transform(cylinder(GQuad), identity.translate(7).scale(9, 5, 2), material(0.3, 0, 0, 0.3)),
                polygons_transform(
                  cylinder(GQuad),
                  identity.translate(0, 0, -7).scale(2, 5, 9),
                  material(0.3, 0, 0, 0.3),
                ),
              ),
            ),
          );
          meshAdd(rotPlatformBase);
        });
      });

      // exit from the rotating platforms
      meshAdd(cylinder(GQuad), identity.translate(61, -0.3, -25).scale(2, 1, 2), material(0.7, 0.7, 0.7, 0.3));
      meshAdd(cylinder(GQuad), identity.translate(68, -0.3, -25).scale(5, 1, 3), material(0.7, 0.7, 0.7, 0.3));

      newLever(identity.translate(66, 2, -19).rotate(-12, 0));

      meshAdd(
        cylinder(5),
        identity.translate(66, -0.5, -19).scale(3, 2, 4).rotate(-20, 0),
        material(0.2, 0.5, 0.5, 0.6),
      );

      // ******** LEVEL AFTER THE ROTATING PLATFORMS ********

      // jumping pads

      [material(0.1, 0.55, 0.45, 0.2), material(0.2, 0.5, 0.5, 0.3), material(0.3, 0.45, 0.55, 0.4)].map((m, i) =>
        newModel((model) => {
          model._update = () =>
            identity.translate(
              0,
              (1 - levers[13]!.$lerpValue2) * (1 - levers[14]!.$lerpValue2) * 3 +
                lerpneg(levers[13]!.$lerpValue2, levers[14]!.$lerpValue2) * Math.sin(gameTime * 1.5 + i * 1.5) * 4,
            );
          meshAdd(
            cylinder(GQuad),
            identity.translate(76.5, -2.1 + i / 2, -25 + 7.5 * (1 - i / 30) * i).scale(3.3, 3 - i / 2, 3.45 - i / 5),
            m,
          );
        }),
      );
    });

    withEditMatrix(identity.translate(0, 0.9, 95), () => {
      // connection
      meshAdd(cylinder(GQuad), identity.translate(-9.7, -0.2, 8.9).scale(10, 1, 2.5), material(0.6, 0.6, 0.6, 0.2));

      // middle base
      meshAdd(
        csg_polygons(
          csg_subtract(
            polygons_transform(
              cylinder(6, 0, 0, 0.3),
              identity.translate(0, -0.92).scale(14, 2, 14),
              material(0.8, 0.8, 0.8, 0.2),
            ),
            polygons_transform(cylinder(5), identity.scale3d(6), material(0.3, 0.3, 0.3, 0.5)),
          ),
        ),
      );

      [8, -6.1].map((y, p) =>
        integers_map(3, (i) =>
          meshAdd(
            bigArc,
            identity.translate(i * 6 - 6, y - (i & 1), 16 - 0.2 * (i & 1) - p),
            i & 1 ? material(0.5, 0.5, 0.5, 0.3) : material(0.35, 0.35, 0.35, 0.5),
          ),
        ),
      );

      // horns
      [-1, 1].map((x) =>
        meshAdd(
          GHorn,
          identity
            .translate(x * -8, 1, -10)
            .scale(1.2, 10, 1.2)
            .rotate(0, 90 * x + 90),
          material(1, 1, 0.8),
        ),
      );

      // lever pad

      meshAdd(
        cylinder(5),
        identity.translate(0, -15.7, -13).scale(2.5, 17, 2.5).rotate(0, 35),
        material(0.5, 0.3, 0.3, 0.4),
      );

      newLever(identity.translate(0, 1.7, -13).rotate(0, 180));

      meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union(
              polygons_transform(
                cylinder(GQuad),
                identity.translate(0, 16, 15.5).scale(12, 1, 3),
                material(0.5, 0.3, 0.3, 0.4),
              ),
              polygons_transform(
                cylinder(GQuad),
                identity.translate(0, 16, 16).scale(3, 1, 3.8),
                material(0.5, 0.3, 0.3, 0.4),
              ),
            ),

            polygons_transform(
              cylinder(5),
              identity.translate(0, 16, 8.5).scale(5.5, 5, 5.5),
              material(0.5, 0.3, 0.3, 0.4),
            ),
          ),
        ),
      );

      newModel((model) => {
        model._update = () => {
          const k = Math.sin(gameTime);
          return identity.translate(k * -2).rotate(0, 0, k * 25);
        };
        meshAdd(
          cylinder(3),
          identity.translate(0, -3, 23.8).scale(0.8, 0.8, 18).rotate(90, 0, 60),
          material(0.5, 0.3, 0.3, 0.4),
        );
        [22, 30].map((z) => {
          meshAdd(
            cylinder(6),
            identity.translate(0, 16, z).scale(3, 1, 2.3).rotate(0, 90),
            material(0.7, 0.7, 0.7, 0.4),
          );
          meshAdd(cylinder(GQuad), identity.translate(0, 6.2, z).scale(0.5, 11, 0.5), material(0.5, 0.3, 0.3, 0.4));
        });
      });

      meshAdd(
        cylinder(6),
        identity.translate(0, 16, 26).scale(2.5, 1, 2.1).rotate(0, 90),
        material(0.5, 0.6, 0.7, 0.3),
      );

      meshAdd(cylinder(GQuad), identity.translate(0, 16, 34).scale(1.5, 1, 2), material(0.5, 0.6, 0.7, 0.3));
      meshAdd(cylinder(7), identity.translate(0, 16.2, 38).scale(5, 1, 5), material(0.4, 0.5, 0.6, 0.4));

      newModel((model) => {
        model._update = () => {
          let v = lerpneg((levers[14]!.$lerpValue + levers[14]!.$lerpValue2) / 2, levers[13]!.$lerpValue2);
          v = lerpneg(v, (levers[15]!.$lerpValue + levers[15]!.$lerpValue2) / 2);
          return identity.translate(0, v * 16, clamp01(v * 2 - 1) * 8.5);
        };
        meshAdd(cylinder(5), identity.scale(5, 1.1, 5), material(0.5, 0.3, 0.3, 0.4));
        meshAdd(cylinder(5), identity.scale(5.5, 0.9, 5.5), material(0.25, 0.25, 0.25, 0.4));

        newLever(identity.translate(0, 1.5, -1).rotate(0, 180));
      });
    });
  });

  initSouls();

  if (DEBUG) {
    console.log(levers.length + " levers");
  }
};
