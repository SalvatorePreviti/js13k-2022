import { clamp, max, abs, lerpneg, min, angle_wrap_degrees, lerp } from "../math/math";
import { allModels, levers, LEVERS_COUNT, souls, SOULS_COUNT } from "./models";
import { objectsMatricesBuffer, worldMatricesBuffer } from "./models-matrices";
import { matrixToArray, tempMatrix } from "../math/matrix";
import { gameTime, gameTimeDelta, lerpDamp } from "./game-time";
import { firstBoatLerp, secondBoatLerp } from "./world-state";
import { player_update } from "./player";
import { modelsNextUpdate, modelsUpdateCounter, modelsResetUpdateCounter } from "./models-next-update";

export let shouldRotatePlatforms: number;

let rotatingPlatform1Rotation: number;

let rotatingPlatform2Rotation: number;

let rotatingHexCorridorRotation: number;

const boatAnimationMatrix = (matrix: DOMMatrix, x: number, y: number, z: number) =>
  matrix
    .translateSelf(x + Math.sin(gameTime + 2) / 5, y + Math.sin(gameTime * 0.8) / 3, z)
    .rotateSelf(2 * Math.sin(gameTime), Math.sin(gameTime * 0.7), Math.sin(gameTime * 0.9));

export const eppur_si_muove = () => {
  modelsResetUpdateCounter();

  shouldRotatePlatforms = lerpneg(levers[12]!.$lerpValue, levers[13]!.$lerpValue);

  rotatingHexCorridorRotation = lerp(
    lerpDamp(rotatingHexCorridorRotation, 0, 1),
    angle_wrap_degrees(rotatingHexCorridorRotation + gameTimeDelta * 60),
    levers[5]!.$lerpValue - levers[6]!.$lerpValue2,
  );

  rotatingPlatform1Rotation = lerp(
    lerpDamp(rotatingPlatform1Rotation, 0, 5),
    angle_wrap_degrees(rotatingPlatform1Rotation + gameTimeDelta * 56),
    shouldRotatePlatforms,
  );

  rotatingPlatform2Rotation = lerp(
    lerpDamp(rotatingPlatform2Rotation, 0, 4),
    angle_wrap_degrees(rotatingPlatform2Rotation + gameTimeDelta * 48),
    shouldRotatePlatforms,
  );

  // first boad
  boatAnimationMatrix(modelsNextUpdate(), -12, 4.2, -66 + firstBoatLerp * 40);

  // in gate bars in first level
  modelsNextUpdate()
    .translateSelf(0, 0, -15)
    .scaleSelf(1, clamp(1.22 - levers[1]!.$lerpValue), 1);

  // out gate bars in first level
  modelsNextUpdate()
    .translateSelf(0, 0, 15)
    .scaleSelf(1, clamp(1.22 - levers[2]!.$lerpValue), 1);

  // central gate bars

  modelsNextUpdate()
    .translateSelf(-99.7, -1.9, 63.5)
    .scaleSelf(1, clamp(1.1 - levers[6]!.$lerpValue), 1);

  // far arc gate bars

  modelsNextUpdate()
    .translateSelf(-100, 0.6, 96.5)
    .scaleSelf(0.88, 1.2 - levers[12]!.$lerpValue);

  // moving central platform in the first level

  modelsNextUpdate().translateSelf(
    0,
    levers[3]!.$lerpValue < 0.01
      ? -500
      : (2 + 5 * Math.cos(gameTime * 1.5)) * (1 - levers[2]!.$lerpValue) * levers[3]!.$lerpValue2 +
          15 * (levers[3]!.$lerpValue - 1),
  );

  // blackPlatforms in the second level

  let oscillation = min(1 - levers[4]!.$lerpValue2, levers[2]!.$lerpValue2);

  modelsNextUpdate().translateSelf(oscillation * Math.sin(gameTime * 0.6 + 1.5) * 12, 0, 35);

  modelsNextUpdate().translateSelf(oscillation * Math.sin(gameTime * 0.6 + 2) * 8.2, 0, 55);

  // central oscillating platform

  modelsNextUpdate().translateSelf(oscillation * Math.sin(gameTime * 0.6) * 12, 0, 45);

  // triangle platform

  modelsNextUpdate().translateSelf(9.8 * (1 - oscillation));

  // vertically oscillating mini platforms

  oscillation = clamp(1 - 5 * oscillation) * lerpneg(levers[4]!.$lerpValue, levers[5]!.$lerpValue);

  modelsNextUpdate().translateSelf(0, oscillation * Math.sin(gameTime * 1.35) * 4);

  // horizontaly oscillating mini platforms

  modelsNextUpdate().translateSelf(0, 0, oscillation * Math.sin(gameTime * 0.9) * 8);

  // hex corridor door

  modelsNextUpdate().translateSelf(0, -6.5 * levers[4]!.$lerpValue2);

  // rotating hex corridor

  modelsNextUpdate()
    .translateSelf(-75, 3 * (1 - levers[5]!.$lerpValue2) * (1 - levers[6]!.$lerpValue), 55)
    .rotateSelf(180 * (1 - levers[5]!.$lerpValue2) + rotatingHexCorridorRotation, 0);

  // elevators

  oscillation = lerpneg(levers[7]!.$lerpValue2, levers[6]!.$lerpValue2);

  modelsNextUpdate().translateSelf(
    0,
    oscillation * Math.sin(gameTime) * 5 + 3.5 * (1 - max(levers[6]!.$lerpValue, levers[7]!.$lerpValue)),
  );

  modelsNextUpdate().translateSelf(
    0,
    oscillation * Math.sin(gameTime + 3) * 6,
    oscillation * Math.sin(gameTime * 0.6 + 1) * 6,
  );

  // central sculpture/monument

  modelsNextUpdate().translateSelf(0, -7.3 * levers[7]!.$lerpValue2);

  // second boat

  boatAnimationMatrix(modelsNextUpdate(), -123, 1.4, 55 - 65 * secondBoatLerp);

  // pushing rods

  oscillation = lerpneg(levers[10]!.$lerpValue, levers[11]!.$lerpValue);

  modelsNextUpdate().translateSelf(0, -2, 10 - 8.5 * oscillation * abs(Math.sin(gameTime * 1.1)));

  modelsNextUpdate().translateSelf(0, -2, 10 - 8.5 * oscillation * abs(Math.sin(gameTime * 2.1)));

  modelsNextUpdate().translateSelf(
    0,
    -2,
    10 -
      8.5 *
        max(
          // push rods
          oscillation * abs(Math.sin(gameTime * 1.5)),
          // block rods
          (1 - levers[10]!.$lerpValue) * (1 - oscillation),
        ),
  );

  // oscillating hex pads

  oscillation = lerpneg(levers[8]!.$lerpValue2, levers[12]!.$lerpValue2);

  for (let i = 0; i < 4; i++) {
    modelsNextUpdate().translateSelf(
      (i > 2 ? 2 * (1 - oscillation) + oscillation : 0) - 100,
      oscillation * Math.sin(gameTime * 1.3 + i * 1.7) * (3 + i / 3) + 0.7,
      115 -
        7 * (1 - levers[8]!.$lerpValue2) * (1 - levers[12]!.$lerpValue2) * (i & 1 ? -1 : 1) +
        max(0.05, oscillation) * Math.cos(gameTime * 1.3 + i * 7) * (4 - 2 * (1 - i / 3)),
    );
  }

  // donut pad

  modelsNextUpdate()
    .translateSelf(
      2.5 * (1 - oscillation) - 139.7,
      -3 * (1 - levers[8]!.$lerpValue) - oscillation * Math.sin(gameTime * 0.8) - 1.8,
      93.5,
    )
    .rotateSelf(Math.cos(gameTime * 1.3) * (3 + 3 * oscillation), 0);

  // First rotating platform (with hole)

  modelsNextUpdate()
    .translateSelf(-81, 0.6, 106)
    .rotateSelf(0, 40 + rotatingPlatform1Rotation);

  // Second rotating platform

  modelsNextUpdate().translateSelf(-65.8, 0.8, 106).rotateSelf(0, rotatingPlatform2Rotation);

  // Third rotating platform

  modelsNextUpdate()
    .translateSelf(-50.7, 0.8, 106)
    .rotateSelf(0, 180 - rotatingPlatform2Rotation);

  // Fourth rotating platform

  modelsNextUpdate()
    .translateSelf(-50.7, 0.8, 91)
    .rotateSelf(0, 270 + rotatingPlatform2Rotation);

  // jumping pads

  oscillation = lerpneg(levers[13]!.$lerpValue2, levers[14]!.$lerpValue2);

  for (let i = 0; i < 3; ++i) {
    modelsNextUpdate().translateSelf(
      0,
      oscillation * Math.sin(gameTime * 1.5 + i * 1.5) * 4 +
        (i ? 0 : (1 - levers[13]!.$lerpValue2) * (1 - levers[14]!.$lerpValue2)),
    );
  }

  // pendulums

  modelsNextUpdate()
    .translateSelf(-2 * Math.sin(gameTime))
    .rotateSelf(25 * Math.sin(gameTime));

  // floating elevator pad

  const floatingElevatorPad = lerpneg(
    lerpneg((levers[14]!.$lerpValue + levers[14]!.$lerpValue2) / 2, levers[13]!.$lerpValue2),
    (levers[15]!.$lerpValue + levers[15]!.$lerpValue2) / 2,
  );

  modelsNextUpdate().translateSelf(0, 16 * floatingElevatorPad, 95 + 8.5 * clamp(floatingElevatorPad * 2 - 1));

  // Update souls

  for (let i = 0; i < SOULS_COUNT; ++i) {
    souls[i]!._update();
    matrixToArray(tempMatrix, objectsMatricesBuffer, i);
  }

  // Update levers

  for (let i = 0; i < LEVERS_COUNT; ++i) {
    levers[i]!._update();
    matrixToArray(tempMatrix, objectsMatricesBuffer, SOULS_COUNT + i);
  }

  // Player body and legs

  player_update();

  // Copy all models matrices to the world uniform buffer

  for (let i = 0; i <= modelsUpdateCounter; ++i) {
    matrixToArray(allModels[i]!.$matrix, worldMatricesBuffer, i - 1);
  }
};
