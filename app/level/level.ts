import { gameTime } from "../game-time";
import { csg_subtract, csg_polygons, csg_union, csg_union_op } from "../geometry/csg";
import {
  material,
  GQuad,
  GBox,
  cylinder,
  polygons_transform,
  sphere,
  horn,
  polygon_transform,
} from "../geometry/geometry";
import { integers_map } from "../math/math";
import { identity } from "../math/matrix";
import { PLAYER_MODEL_ID } from "../player";
import type { Model } from "./scene";
import { meshAdd, meshEnd, withEditMatrix, newModel } from "./scene";

let _modelIdCounter = PLAYER_MODEL_ID + 1;

// ========= Lever mesh ========= //

meshAdd(polygons_transform(cylinder(6, 1), identity.scale(0.12, 1.4, 0.12), material(0.3, 0.3, 0.5)));
meshAdd(polygons_transform(cylinder(6), identity.translate(0, 1, 0).scale(0.18, 0.25, 0.18), material(1, 0.5, 0.2)));
meshAdd(
  polygons_transform(
    cylinder(3),
    identity.translate(0, -1).rotate(90, 90, 0).scale(0.3, 0.4, 0.3),
    material(0.2, 0.2, 0.2),
  ),
);

const leverMesh = meshEnd();

const addLever = () => {
  const lever = {
    value: 0,
  };

  newModel((model) => {
    model._update = () => identity.rotate(Math.sin(gameTime * 2) * 30, 0).translate(0, 1, 0);
    return leverMesh;
  });

  meshAdd(
    polygons_transform(
      cylinder(5),
      identity.translate(-0.2).rotate(90, 90, 0).scale(0.4, 0.1, 0.5),
      material(0.4, 0.5, 0.5),
    ),
  );
  meshAdd(
    polygons_transform(
      cylinder(5),
      identity.translate(0.2).rotate(90, 90, 0).scale(0.4, 0.1, 0.5),
      material(0.4, 0.5, 0.5),
    ),
  );

  meshAdd(polygons_transform(GBox, identity.translate(0, -0.4).scale(0.5, 0.1, 0.5), material(0.5, 0.5, 0.4)));

  return lever;
};

const MATERIAL_DEVIL = material(1, 0.3, 0.4);

// ========= Player ========= //

export let playerRightLegModel: Model;

export let playerLeftLegModel: Model;

export const playerModel = newModel(() => {
  const rhorn = polygons_transform(
    horn(),
    identity.translate(0.2, 1.32, 0).rotate(0, 0, -30).scale(0.2, 0.6, 0.2),
    material(1, 1, 0.8),
  );

  meshAdd(rhorn);

  // left horn
  meshAdd(polygons_transform(rhorn, identity.rotate(0, 180)));

  // head
  meshAdd(polygons_transform(sphere(30), identity.translate(0, 1, 0).scale(0.5, 0.5, 0.5), MATERIAL_DEVIL));

  const eye = polygons_transform(
    csg_polygons(csg_subtract(cylinder(15, 1), polygons_transform(GBox, identity.translate(0, 0, 1).scale(2, 2, 0.5)))),
    identity.rotate(-90, 0, 0).scale(0.1, 0.05, 0.1),
    material(0.3, 0.3, 0.3),
  );

  [-1, 1].map((i) => meshAdd(polygons_transform(eye, identity.translate(i * 0.2, 1.2, 0.4).rotate(0, i * 20, i * 20))));

  // mouth
  meshAdd(polygons_transform(GBox, identity.translate(0, 0.9, 0.45).scale(0.15, 0.02, 0.06), material(0.3, 0.3, 0.3)));

  // body
  meshAdd(polygons_transform(sphere(15), identity.translate(0, 0, 0).scale(0.7, 0.8, 0.55), MATERIAL_DEVIL));

  // Player legs

  playerRightLegModel = newModel(() => {
    meshAdd(polygons_transform(cylinder(10, 1), identity.translate(-0.3, -1, 0).scale(0.2, 0.5, 0.24), MATERIAL_DEVIL));
  });

  playerLeftLegModel = withEditMatrix(identity.translate(0.6), () => newModel(() => playerRightLegModel.$mesh));

  return meshEnd();
}, PLAYER_MODEL_ID);

const lever3 = () => (DEBUG_FLAG0 ? 1 : 0);
const lever5 = () => (DEBUG_FLAG1 ? 1 : 0);

export const level1 = () => {
  // ******** LEVEL 1 ********

  // gate columns

  polygon_transform(GQuad, identity.scale(3, 0, 15)).map(({ x, z }) => {
    meshAdd(
      polygons_transform(cylinder(6), identity.translate(x, 3, z).scale(0.7, 4, 0.7), material(0.6, 0.3, 0.3, 0.4)),
    );
  });

  //  gate top

  meshAdd(polygons_transform(GBox, identity.translate(0, 6.3, -15).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4)));
  meshAdd(polygons_transform(GBox, identity.translate(0, 6.3, 15).scale(4, 0.3, 1), material(0.3, 0.3, 0.3, 0.4)));

  //  gate bottom

  meshAdd(polygons_transform(GBox, identity.translate(0, 1, -15).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3)));
  meshAdd(polygons_transform(GBox, identity.translate(0, 1, 15).scale(3, 0.2, 0.35), material(0.5, 0.5, 0.5, 0.3)));

  // gate bars

  integers_map(7, (i) =>
    meshAdd(
      polygons_transform(
        cylinder(6, 1),
        identity.translate(4 * (i / 6 - 0.5), 3, 15).scale(0.2, 3, 0.2),
        material(0.3, 0.3, 0.38),
      ),
    ),
  );

  // horns

  integers_map(5, (i) =>
    integers_map(2, (j) => {
      meshAdd(
        polygons_transform(
          horn(),
          identity
            .translate((j - 0.5) * 18.5, 0, i * 4.8 - 9.5)
            .rotate(0, 180 - j * 180, 0)
            .scale(1.2, 10, 1.2),
          material(1, 1, 0.8, 0.2),
        ),
      );
    }),
  );

  // in and out
  meshAdd(polygons_transform(GBox, identity.translate(0, 0, -23).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2)));

  meshAdd(polygons_transform(GBox, identity.translate(0, 0, 22).scale(3, 1, 8), material(0.9, 0.9, 0.9, 0.2)));

  // descent

  meshAdd(
    polygons_transform(
      GBox,
      identity.rotate(0, 60, 0).translate(14.8, -1.46, -1).rotate(0, 0, -30).scale(4, 0.6, 4.5),
      material(0.8, 0.2, 0.2, 0.5),
    ),
  );

  // base

  meshAdd(
    csg_polygons(
      csg_subtract(
        csg_union([
          // lower base
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            identity.translate(8, -3, -4).scale(13, 1, 13),
            material(0.7, 0.7, 0.7, 0.2),
          ),

          // hole extension
          polygons_transform(cylinder(4), identity.translate(0, -10).scale(9, 9, 9), material(0.4, 0.2, 0.5, 0.5)),

          // middle base
          polygons_transform(
            cylinder(6, 0, 0, 0.3),
            identity.translate(0, -0.92).scale(13, 2, 13),
            material(0.8, 0.8, 0.8, 0.2),
          ),
        ]),
        csg_union([
          // hole
          polygons_transform(cylinder(5), identity.scale(5, 30, 5), material(0.4, 0.2, 0.6, 0.5)),

          // smooth hole
          polygons_transform(
            cylinder(5, 0, 1.5),
            identity.translate(0, 1, 0).scale(4.5, 0.3, 4.5),
            material(0.7, 0.5, 0.9, 0.2),
          ),

          // descent cut
          polygons_transform(
            GBox,
            identity.rotate(0, 60, 0).translate(14, 0.7, -1).rotate(0, 0, -35).scale(2, 2, 2),
            material(0.5, 0.5, 0.5, 0.5),
          ),

          // lower lever pad
          polygons_transform(
            cylinder(6),
            identity.translate(15, -1.5, 4).scale(3.5, 1, 3.5),
            material(0.5, 0.5, 0.5, 0.5),
          ),
        ]),
      ),
    ),
  );

  // bottom lever

  withEditMatrix(identity.translate(15, -2, 4), addLever);

  // moving central platform

  newModel((model) => {
    model._update = () => identity.translate(0, Math.cos(gameTime * 2) * 5 - 4, 0);
    meshAdd(polygons_transform(cylinder(5), identity.translate(0, -1.4).scale(5, 1, 5), material(0.6, 0.65, 0.7, 0.3)));
    addLever();
  }, ++_modelIdCounter);

  // ******** LEVEL 2 ********

  withEditMatrix(identity.translate(0, 0, 75), () => {
    const blackPlatform = (oscillation: number) =>
      // columns
      newModel((model) => {
        model._update = () => identity.translate(lever3() * Math.sin(oscillation + gameTime / 1.5) * 12);
        GQuad.map(({ x, z }) => {
          // column body
          meshAdd(
            polygons_transform(
              cylinder(11, 1),
              identity.translate(x * 4, 4, z * 4 - 40).scale(0.8, 3, 0.8),
              material(0.5, 0.3, 0.7, 0.6),
            ),
          );
          // column top
          meshAdd(
            polygons_transform(
              GBox,
              identity.translate(x * 4, 7, z * 4 - 40).scale(1, 0.3, 1),
              material(0.5, 0.5, 0.5, 0.3),
            ),
          );
        });

        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(GBox, identity.translate(0, 0, -40).scale(5, 1, 5), material(0.8, 0.8, 0.8, 0.3)),
              csg_union(
                [-1, 1].map((i) =>
                  polygons_transform(
                    GBox,
                    identity
                      .translate(5 * i, 0.2, -40)
                      .rotate(0, 0, i * -30)
                      .scale(4, 1, 2),
                    material(0.8, 0.8, 0.8, 0.3),
                  ),
                ),
              ),
            ),
          ),
        );
        // bottom
        meshAdd(polygons_transform(GBox, identity.translate(0, -3, -40).scale(8, 2, 8), material(0.4, 0.4, 0.4, 0.3)));
      }, ++_modelIdCounter);

    blackPlatform(0);
    withEditMatrix(identity.translate(0, 0, 20), () => blackPlatform(5));

    newModel((model) => {
      model._update = () => identity.translate(lever3() * Math.sin(gameTime / 1.5 + 2) * 12, 0);
      meshAdd(
        csg_polygons(
          csg_subtract(
            csg_union_op(
              polygons_transform(GBox, identity.translate(0, 0, -30).scale(5, 1, 5), material(0.9, 0.9, 0.9, 0.2)),
              polygons_transform(GBox, identity.translate(0, -2, -30).scale(2, 3.2, 2), material(0.3, 0.8, 0.5, 0.5)),
            ),
            polygons_transform(GBox, identity.translate(0, 0, -30).scale(1.5, 10, 1.5), material(0.2, 0.7, 0.4, 0.6)),
          ),
        ),
      );
    }, ++_modelIdCounter);

    // ******** LEVEL 3 ********

    // triangle platform

    newModel((model) => {
      model._update = () => identity.translate(lever3() ? 0 : 12);
      meshAdd(
        polygons_transform(
          cylinder(3),
          identity.translate(-28, -1.5, -20).scale(7, 0.6, 11),
          material(0.3, 0.6, 0.6, 0.2),
        ),
      );

      meshAdd(
        polygons_transform(GBox, identity.translate(-28, -3, -20).scale(8, 1.7, 5), material(0.5, 0.5, 0.5, 0.3)),
      );

      meshAdd(
        polygons_transform(GBox, identity.translate(-28, -3, -20).scale(8, 1.7, 5), material(0.5, 0.5, 0.5, 0.3)),
      );

      withEditMatrix(identity.translate(-28, -0.5, -14), addLever);
    }, ++_modelIdCounter);

    // fixed mini platform with hole

    meshAdd(
      polygons_transform(
        csg_polygons(
          csg_subtract(
            polygons_transform(GBox, identity.scale(3, 1.4, 3)),
            polygons_transform(GBox, identity.scale(1.2, 8, 1.2)),
          ),
        ),
        identity.translate(-33, -3, -20),
        material(0.9, 0.9, 0.9, 0.2),
      ),
    );

    // oscillating mini platforms

    newModel((model) => {
      model._update = () => (lever3() ? identity : identity.translate(0, 0, Math.sin(gameTime) * 11));
      meshAdd(
        polygons_transform(GBox, identity.translate(-27, -3, -20).scale(3, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
      );

      meshAdd(
        polygons_transform(GBox, identity.translate(-39, -3, -20).scale(3, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
      );
    }, ++_modelIdCounter);

    // hex corridor door

    withEditMatrix(identity.translate(-44.5, 0, -20), () =>
      newModel((model) => {
        model._update = () => (lever3() ? identity : identity.translate(0, -6.5));
        meshAdd(
          polygons_transform(
            cylinder(6),
            identity.rotate(90, 90, 0).rotate(0, 90).scale(5.9, 0.5, 5.9),
            material(0.7, 0.7, 0.7, 0.4),
          ),
        );
      }),
    );

    // hex corridor

    const hexCorridorPolygons = [
      ...polygons_transform(
        csg_polygons(
          csg_subtract(
            polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(6, 8, 6)),
            csg_union([
              polygons_transform(
                cylinder(4, 0, 0.01),
                identity.translate(0, 6, 0).scale(12, 2, 0.75).rotate(0, 45, 0),
                material(1, 1, 1),
              ),
              polygons_transform(cylinder(6), identity.rotate(0, 0, 90).scale(5, 12, 5)),
              ...[5, 0, -5].map((x) =>
                polygons_transform(cylinder(5), identity.translate(x, 2.5).rotate(90, 0, 36).scale(1.7, 10, 1.7)),
              ),
            ]),
          ),
        ),
        identity,
        material(0.3, 0.6, 0.6, 0.3),
      ),
      ...polygons_transform(GBox, identity.translate(0, -3, 0).scale(11, 1.4, 3), material(0.9, 0.9, 0.9, 0.2)),
    ];

    meshAdd(polygons_transform(hexCorridorPolygons, identity.translate(-53, 0, -20)));

    // rotating hex corridor

    withEditMatrix(identity.translate(-75, 0, -20), () =>
      newModel((model) => {
        model._update = () => (lever3() ? identity : identity.rotate(gameTime * 60, 0));
        meshAdd(hexCorridorPolygons);
      }),
    );

    // connection from rotating hex corridor to platforms

    meshAdd(
      polygons_transform(
        GBox,
        identity.translate(-88.3, -5.1, -20).rotate(0, 0, -30).scale(5, 1.25, 4.7),
        material(0.7, 0.7, 0.7, 0.2),
      ),
    );

    meshAdd(
      polygons_transform(
        cylinder(3, 0, -0.5),
        identity.translate(-88.4, -3.9, -20).rotate(0, -90, 17).scale(3, 1.45, 5.9),
        material(0.8, 0.8, 0.8, 0.2),
      ),
    );

    // platform after the rotating hex corridor

    meshAdd(
      polygons_transform(
        csg_polygons(
          csg_subtract(
            csg_union([
              // base
              polygons_transform(
                GBox,
                identity.translate(-100, -2.5, -20).scale(8, 1, 8),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              // right path to the boat
              polygons_transform(
                GBox,
                identity.translate(-113, -2.6, -20).scale(6.2, 1.1, 3).skewX(3),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              // straiht line
              polygons_transform(
                GBox,
                identity.translate(-100, -2.6, -5).scale(3, 1.1, 7),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              // 45 degrees detour
              polygons_transform(
                GBox,
                identity.translate(-96, -2.6, -2).rotate(0, 45).scale(3, 1.1, 5),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              // ascension
              polygons_transform(
                GBox,
                identity.translate(-100, -1.1, 7.39).rotate(-15, 0).scale(3, 1.1, 6),
                material(0.8, 0.8, 0.8, 0.2),
              ),
              // ascension continuation
              polygons_transform(
                GBox,
                identity.translate(-100, 0.42, 17).scale(3, 1.1, 4.1),
                material(0.8, 0.8, 0.8, 0.2),
              ),
            ]),

            csg_union([
              // decorative octagon
              polygons_transform(
                cylinder(8),
                identity.translate(-100, -1, -20).scale(7, 0.9, 7),
                material(0.3, 0.3, 0.3, 0.4),
              ),
              polygons_transform(
                cylinder(8),
                identity.translate(-100, -2, -20).scale(4, 0.3, 4),
                material(0.4, 0.4, 0.4, 0.5),
              ),
              polygons_transform(
                cylinder(8),
                identity.translate(-100, -3, -20).scale(0.6, 1, 0.6),
                material(0.4, 0.4, 0.4, 0.5),
              ),
            ]),
          ),
        ),
        identity,
      ),
    );

    // arc door

    meshAdd(
      csg_polygons(
        csg_subtract(
          polygons_transform(GBox, identity.translate(-100, 1, -12).scale(7.5, 4, 1), material(0.5, 0.5, 0.5, 0.4)),
          csg_union([
            polygons_transform(GBox, identity.translate(-100, 0.1, -5).scale(2, 1.7, 10), material(0.5, 0.5, 0.5, 0.4)),
            polygons_transform(
              cylinder(25, 1),
              identity.translate(-100, 2, -5).scale(2, 2, 10).rotate(90, 0, 0),
              material(0.5, 0.5, 0.5, 0.4),
            ),
          ]),
        ),
      ),
    );

    // gate bars

    integers_map(6, (i) =>
      meshAdd(
        polygons_transform(
          cylinder(6, 1),
          identity.translate(-99.7 + 4 * (i / 6 - 0.5), 1, -11.5).scale(0.2, 3, 0.2),
          material(0.3, 0.3, 0.38),
        ),
      ),
    );

    // hex columns

    GQuad.map(({ x, z }) => {
      meshAdd(
        polygons_transform(
          cylinder(6),
          identity.translate(-100 + x * 7, -3, z * 7 - 20).scale(1, 8.1, 1),
          material(0.6, 0.15, 0.15, 0.8),
        ),
      );
      [4, -0.4].map((i) =>
        meshAdd(
          polygons_transform(
            cylinder(6),
            identity.translate(-100 + x * 7, i, z * 7 - 20).scale(1.3, 0.5, 1.3),
            material(0.4, 0.2, 0.2, 0.8),
          ),
        ),
      );
    });

    // crystals

    [
      material(0.5, 0.5, 0.6, 0.25),
      material(0.4, 0.4, 0.6, 0.35),
      material(0.35, 0.5, 0.6, 0.45),
      material(0.3, 0.6, 0.6, 0.25),
      material(0.25, 0.5, 0.6, 0.35),
      material(0.2, 0.4, 0.6, 0.25),
      material(0.15, 0.5, 0.6, 0.35),
    ].map((m, i) => {
      meshAdd(
        polygons_transform(
          cylinder(((i * 23 + 1) % 5) + 5, 0, 0.6),
          identity
            .translate(-101 + Math.sin(i) * 5 + i, -2.3 - i, -30.1 - i * 2.8)
            .scaleSelf(5 + i / 2, 1 + i / 6, 5 + i / 3),
          m,
        ),
      );
    });

    // crystals continuation pad

    meshAdd(polygons_transform(GBox, identity.translate(-87, -9.5, -51).scale(7, 1, 3), material(0.4, 0.5, 0.6, 0.4)));

    // lever pad

    meshAdd(
      polygons_transform(cylinder(4), identity.translate(-86, -9.2, -48).scale(5, 1, 5), material(0.5, 0.6, 0.7, 0.3)),
    );

    meshAdd(
      polygons_transform(
        cylinder(25, 1),
        identity.translate(-86, -9, -44).scale(1.5, 1, 1.5),
        material(0.3, 0.3, 0.4, 0.1),
      ),
    );

    withEditMatrix(identity.translate(-86, -7.5, -44), addLever);

    // elevators

    withEditMatrix(identity.translate(-76.9, -10, -51), () => {
      newModel((model) => {
        model._update = () => identity.translate(0, lever3() * Math.sin(gameTime) * 7);
        [0, 12].map((x) =>
          meshAdd(
            polygons_transform(GBox, identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(0.2, 0.5, 0.6, 0.2)),
          ),
        );
      }, ++_modelIdCounter);
      newModel((model) => {
        model._update = () => identity.translate(0, lever3() * Math.sin(gameTime + 3) * 6);
        [6, 18].map((x) =>
          meshAdd(
            polygons_transform(GBox, identity.translate(x, x / -13).scale(2.8, 1.5, 3), material(0.1, 0.4, 0.5, 0.2)),
          ),
        );
      }, ++_modelIdCounter);
    });

    // pad after elevators

    withEditMatrix(identity.translate(-44.9, -11.3, -51), () => {
      meshAdd(polygons_transform(GBox, identity.scale(11, 1, 8), material(0.3, 0.4, 0.6, 0.3)));

      meshAdd(polygons_transform(cylinder(5), identity.scale(7, 1.2, 7), material(0, 0.2, 0.3, 0.5)));

      // central sculpture

      newModel((model) => {
        model._update = () => identity.translate(0, lever3() * -5.9);

        meshAdd(
          csg_polygons(
            csg_subtract(
              csg_union([
                polygons_transform(
                  cylinder(5),
                  identity.translate(0, 2).scale(4, 6, 4).skewY(8),
                  material(0.2, 0.4, 0.5, 0.5),
                ),
                polygons_transform(
                  cylinder(5),
                  identity.translate(0, 5).scale(2, 6, 2).skewY(-8),
                  material(0.25, 0.35, 0.5, 0.5),
                ),
                polygons_transform(
                  cylinder(5),
                  identity.translate(0, 9).scale(1.2, 5, 1.2).skewY(8),
                  material(0.35, 0.3, 0.5, 0.5),
                ),
              ]),
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
        meshAdd(
          polygons_transform(
            cylinder(20, 1),
            identity.translate(x * 9, 4, z * 6).scale(1, 4, 1),
            material(0.25, 0.25, 0.25, 1),
          ),
        );
        [1.5, 8].map((y) =>
          meshAdd(
            polygons_transform(
              cylinder(20, 1),
              identity.translate(x * 9, y, z * 6).scale(1.5, 0.5, 1.5),
              material(0.6, 0.6, 0.6, 0.3),
            ),
          ),
        );
      });

      // lever pad

      meshAdd(polygons_transform(GBox, identity.translate(0, 0, -9).scale(3, 1.2, 3), material(0.35, 0.3, 0.5, 0.5)));

      withEditMatrix(identity.translate(0, 1.7, -11), addLever);
    });

    // integers_map(4, (i) => {
    //   withEditMatrix(identity.translate(-79 + i * 7, -3, -43), () => {
    //     newModel((model) => {
    //       model._update = () =>
    //         identity.translate(2, lever3() * ((0.5 + 0.5 * Math.sin((gameTime + i) * 1.1)) * 14 + (4 - i)));

    //       withEditMatrix(identity.translate(0, i * -2 - 6), () =>
    //         meshAdd(
    //           polygons_transform(
    //             GBox,
    //             identity
    //               .translate(0, i * 2 - 12.5)
    //               .scale(2.8, 1.5, 3 + (i > 2 ? 2 : 0) + i / 6)
    //               .translate(0, 0, -1),
    //             material(0.2, 0.5, 0.6, 0.2),
    //           ),
    //         ),
    //       );
    //     }, ++_modelIdCounter);
    //   });
    // });
  });

  // ******** BOAT ********

  withEditMatrix(identity.translate(-123, 1.4, 55), () => {
    // meshAdd(polygons_transform(GBox, identity.translate(0, -4, 0).scale(1, 1, 100), material(0.5, 0.4, 0.3)));

    // integers_map(8, (i) =>
    //   meshAdd(
    //     polygons_transform(arc, identity.rotate(0, 90).translate(i * 12 + 10, 4, -12), material(0.6, 0.6, 0.6, 0.3)),
    //   ),
    // );

    // integers_map(4, (i) =>
    //   meshAdd(
    //     polygons_transform(
    //       arc,
    //       identity
    //         .rotate(0, 90)
    //         .translate(i * 12 + 14, 2)
    //         .rotate(0, 90)
    //         .scale(1.5, 1, 0.5),
    //       material(0.6, 0.6, 0.6, 0.3),
    //     ),
    //   ),
    // );

    // integers_map(4, (i) => polygons_transform(arc, identity.translate(i * 12 + 14, 5), material(0.6, 0.6, 0.6, 0.3)));

    newModel((model) => {
      model._update = () =>
        identity
          .translate(Math.sin(gameTime + 2) / 5, Math.sin(gameTime * 0.8) / 3, lever3() ? -60 : +0)
          .rotate(Math.sin(gameTime) * 2, Math.sin(gameTime * 0.7), Math.sin(gameTime * 0.9));
      meshAdd(
        csg_polygons(
          csg_subtract(
            polygons_transform(
              cylinder(20, 1, 1.15, 1),
              identity.translate(0, -3).scale(3.5, 1, 3.5),
              material(0.7, 0.4, 0.25, 0.7),
            ),
            csg_union_op(
              polygons_transform(
                cylinder(20, 1, 1.3, 1),
                identity.translate(0, -2.5).scale(2.6, 1, 3),
                material(0.7, 0.4, 0.25, 0.2),
              ),
              polygons_transform(GBox, identity.translate(4, -1.2, 0).scale3d(2), material(0.7, 0.4, 0.25, 0.3)),
            ),
          ),
        ),
      );

      withEditMatrix(identity.translate(0, -3.6, -4), addLever);
    }, ++_modelIdCounter);
  });

  // ******** LEVEL AFTER BOAT ********

  withEditMatrix(identity.translate(-123, 0, -5), () => {
    // boat attachment

    meshAdd(
      polygons_transform(
        GBox,
        identity.translate(8, -2.6, -0).scale(4.2, 1.1, 3).skewX(3),
        material(0.8, 0.8, 0.8, 0.2),
      ),
    );

    // arcs

    const bigArc = csg_polygons(
      csg_subtract(
        polygons_transform(GBox, identity.translate(0, -8).scale(6, 15, 2.2)),
        csg_union_op(
          polygons_transform(GBox, identity.translate(0, -14.1, 0).scale(4, 13, 4)),
          polygons_transform(cylinder(30, 1), identity.translate(0, -1).rotate(90, 0, 90).scale3d(4)),
        ),
      ),
    );

    integers_map(3, (i) =>
      meshAdd(polygons_transform(bigArc, identity.translate(i * 12 + 14, -9), material(0.6, 0.6, 0.6, 0.3))),
    );

    integers_map(3, (i) =>
      meshAdd(
        polygons_transform(bigArc, identity.translate(46, -9, i * -12 - 8).rotate(0, 90), material(0.6, 0.6, 0.6, 0.3)),
      ),
    );

    meshAdd(
      polygons_transform(cylinder(8), identity.translate(46, -16.9).scale(4, 15.2, 4), material(0.6, 0.6, 0.6, 0.2)),
    );

    meshAdd(polygons_transform(GBox, identity.translate(7.5, -17).scale(0.5, 15, 2.2), material(0.6, 0.6, 0.6, 0.3)));

    meshAdd(
      polygons_transform(GBox, identity.translate(46, -17, -38.5).scale(2.2, 15, 0.5), material(0.6, 0.6, 0.6, 0.3)),
    );

    // internal pad

    // newModel((model) => {
    //   model._update = () =>
    //     identity
    //       .translate(44, -4.1, -24)
    //       .rotate(0, 0, Math.abs(Math.sin(gameTime * 3)) * 90)
    //       .translate(-1, 5);
    //   meshAdd(polygons_transform(GBox, identity.scale(1, 5, 3), material(0.8, 0.8, 0.8, 0.1)));
    // });

    meshAdd(
      polygons_transform(
        GBox,
        identity.translate(38.1, -4.3, -28).rotate(0, 0, 12).scale(6, 1, 3),
        material(0.6, 0.6, 0.6, 0.3),
      ),
    );

    meshAdd(
      csg_polygons(
        csg_subtract(
          polygons_transform(GBox, identity.translate(30, -5.8, -28).scale(9, 1, 5), material(0.8, 0.8, 0.8, 0.1)),
          polygons_transform(
            cylinder(9),
            identity.translate(25, -5.8, -28).scale(3, 8, 3),
            material(0.7, 0.7, 0.7, 0.2),
          ),
        ),
      ),
    );

    meshAdd(
      polygons_transform(
        cylinder(9),
        identity.translate(25, -5.8, -28).scale(2.5, 0.9, 2.5),
        material(0.5, 0.5, 0.5, 0.3),
      ),
    );

    withEditMatrix(identity.translate(25, -4.4, -28).rotate(0, 90), addLever);
  });

  // ******** LEVEL AFTER CENTRAL GATE ********

  withEditMatrix(identity.translate(-100, 0.7, 115), () => {
    // base

    meshAdd(
      csg_polygons(
        csg_subtract(
          csg_union_op(
            polygons_transform(
              cylinder(6, 0, 0, 0.6),
              identity.translate(0, 0, -9.5).scale(8, 1, 11),
              material(0.7, 0.7, 0.7, 0.2),
            ),
            polygons_transform(GBox, identity.translate(-8, 0, -21.5).scale(4, 1, 2), material(0.7, 0.7, 0.7, 0.2)),
          ),
          polygons_transform(cylinder(5), identity.translate(0, 0, -2).scale(4, 3, 4), material(0.7, 0.7, 0.7, 0.2)),
        ),
      ),
    );

    // up and down hex pads

    [
      material(0.5, 0.5, 0.6, 0.25),
      material(0.4, 0.4, 0.6, 0.35),
      material(0.35, 0.5, 0.6, 0.45),
      material(0.3, 0.6, 0.6, 0.25),
    ].map((m, i) => {
      newModel((model) => {
        model._update = () =>
          identity.translate(i > 2 ? (lever5() ? 0 : 2) : 0, lever5() * Math.sin(gameTime + i * 1.7) * (5 + i / 4));
        meshAdd(
          polygons_transform(
            cylinder(6),
            identity.translate(-14.6 - i * 5.2 - (i > 2 ? 2 : 0), -i / 2.3, -21.5).scale(3, 1, 3),
            m,
          ),
        );
      }, ++_modelIdCounter);
    });

    // after the hex pads

    withEditMatrix(identity.translate(-42, -2.5, -21.5), () => {
      // pad with hole
      newModel((model) => {
        model._update = () => identity.translate(lever5() ? 0 : 3.5, lever5() ? -4 : 0);
        meshAdd(
          csg_polygons(
            csg_subtract(
              polygons_transform(cylinder(10), identity.scale(6, 2, 6), material(0.1, 0.6, 0.5, 0.3)),
              polygons_transform(cylinder(10), identity.scale(2.7, 6, 2.7), material(0.1, 0.6, 0.5, 0.5)),
            ),
          ),
        );

        // second pad
        withEditMatrix(identity.translate(-7.5).rotate(0, 90), () => {
          meshAdd(polygons_transform(cylinder(15), identity.scale(3, 2.3, 3), material(0.4, 0.4, 0.4, 0.3)));
          meshAdd(polygons_transform(cylinder(10), identity.scale(2, 2.5, 2), material(0.3, 0.8, 0.7, 0.3)));
          meshAdd(polygons_transform(cylinder(5), identity.scale(1, 3, 1), material(0.5, 0.5, 0.5, 0.5)));

          withEditMatrix(identity.translate(0, 3.4), addLever);
        });

        // horns
        [-1, 1].map((i) => {
          meshAdd(
            polygons_transform(
              horn(),
              identity
                .translate(0, 0, 0)
                .rotate(-i * 90, 180, 90) //
                .translate(0, 5, 0)
                .rotate(0, 0, 40) //
                .scale(1.3, 10, 1.3), //
              material(1, 1, 0.8, 0.2),
            ),
          );
        });
      }, ++_modelIdCounter);
    });

    // "church" door
    [-1, 1].map((x) => {
      meshAdd(
        polygons_transform(
          csg_polygons(
            csg_subtract(
              polygons_transform(
                GBox,
                identity.translate(x * -4, 3.5, -0.5).scale(4, 4, 0.7),
                material(0.5, 0.5, 0.5, 0.4),
              ),
              csg_union([
                polygons_transform(GBox, identity.translate(0, 0).scale(3, 3, 10), material(0.5, 0.5, 0.5, 0.4)),
                polygons_transform(
                  cylinder(25, 1),
                  identity.translate(0, 3, -5).scale(3, 4, 10).rotate(90, 0, 0),
                  material(0.5, 0.5, 0.5, 0.4),
                ),
                polygons_transform(
                  cylinder(5, 1),
                  identity
                    .translate(x * -5.5, 5, 0)
                    .rotate(90, 0)
                    .scale(1, 10, 1),
                  material(0.5, 0.5, 0.5, 0.4),
                ),
              ]),
            ),
          ),
          identity.translate(x, 0, -18),
        ),
      );
    });
  });
};

export const buildWorld = () => {
  newModel(level1);
};
