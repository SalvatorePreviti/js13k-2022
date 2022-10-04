import { clamp, max, abs, lerpneg, min, angle_wrap_degrees, lerp } from "../math/math";
import { allModels, levers, LEVERS_COUNT, souls, SOULS_COUNT } from "./models";
import { objectsMatricesBuffer, worldMatricesBuffer } from "./models-matrices";
import { matrixCopy, identity, matrixToArray, tempMatrix } from "../math/matrix";
import { gameTime, gameTimeDelta, lerpDamp } from "./game-time";
import { firstBoatLerp, secondBoatLerp } from "./world-state";
import { player_update } from "./player";

export let shouldRotatePlatforms: number;

let rotatingPlatform1Rotation: number;

let rotatingPlatform2Rotation: number;

let rotatingHexCorridorRotation: number;

const boatAnimationMatrix = (matrix: DOMMatrix, x: number, y: number, z: number) =>
  matrix
    .translateSelf(x + Math.sin(gameTime + 2) / 5, y + Math.sin(gameTime * 0.8) / 3, z)
    .rotateSelf(Math.sin(gameTime) * 2, Math.sin(gameTime * 0.7), Math.sin(gameTime * 0.9));

export const eppur_si_muove = () => {
  let counter = 1;

  const next = () => matrixCopy(identity, allModels[++counter]!.$matrix);

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
  boatAnimationMatrix(next(), -12, 4.2, -66 + firstBoatLerp * 40);

  // in and out gate bars

  next()
    .translateSelf(0, 0, -15)
    .scaleSelf(1, clamp(1.22 - levers[1]!.$lerpValue), 1);

  next()
    .translateSelf(0, 0, 15)
    .scaleSelf(1, clamp(1.22 - levers[2]!.$lerpValue), 1);

  // central gate bars

  next()
    .translateSelf(-99.7, -1.9, 63.5)
    .scaleSelf(1, clamp(1.1 - levers[6]!.$lerpValue), 1);

  // far arc gate bars

  next()
    .translateSelf(-100, 0.6, 96.5)
    .scaleSelf(0.88, 1.2 - levers[12]!.$lerpValue);

  // moving central platform in the first level

  next().translateSelf(
    0,
    levers[3]!.$lerpValue < 0.01
      ? -500
      : (1 - levers[2]!.$lerpValue) * levers[3]!.$lerpValue2 * (Math.cos(gameTime * 1.5) * 5 + 2) +
          15 * (levers[3]!.$lerpValue - 1),
    0,
  );

  // central oscillating platform

  let oscillation = min(levers[2]!.$lerpValue2, 1 - levers[4]!.$lerpValue2);

  next().translateSelf(oscillation * Math.sin(gameTime / 1.5 + 2) * 12);

  // blackPlatforms

  next().translateSelf(oscillation * Math.sin(gameTime * 0.7 + 2) * 12);

  next().translateSelf(oscillation * Math.sin(gameTime + 3) * 8.2);

  // triangle platform

  next().translateSelf((1 - oscillation) * 9.8);

  // vertically oscillating mini platforms

  oscillation = clamp(1 - oscillation * 5) * lerpneg(levers[4]!.$lerpValue, levers[5]!.$lerpValue);

  next().translateSelf(0, oscillation * Math.sin(gameTime * 1.35) * 4);

  // horizontaly oscillating mini platforms

  next().translateSelf(0, 0, oscillation * Math.sin(gameTime * 0.9) * 8);

  // hex corridor door

  next().translateSelf(0, levers[4]!.$lerpValue2 * -6.5);

  // rotating hex corridor

  next()
    .translateSelf(-75, (1 - levers[5]!.$lerpValue2) * (1 - levers[6]!.$lerpValue) * 3, 55)
    .rotateSelf(180 * (1 - levers[5]!.$lerpValue2) + rotatingHexCorridorRotation, 0);

  // elevators

  oscillation = lerpneg(levers[7]!.$lerpValue2, levers[6]!.$lerpValue2);

  next().translateSelf(
    0,
    oscillation * Math.sin(gameTime) * 5 + (1 - max(levers[6]!.$lerpValue, levers[7]!.$lerpValue)) * 3.5,
  );

  next().translateSelf(0, oscillation * Math.sin(gameTime + 3) * 6, oscillation * Math.sin(gameTime * 0.6 + 1) * 6);

  // central sculpture/monument

  next().translateSelf(0, levers[7]!.$lerpValue2 * -7.3);

  // second boat

  boatAnimationMatrix(next(), -123, 1.4, 55 + secondBoatLerp * -65);

  // pushing rods

  oscillation = lerpneg(levers[10]!.$lerpValue, levers[11]!.$lerpValue);

  next().translateSelf(0, -2, oscillation * abs(Math.sin(gameTime * 1.1)) * -8.5 + 10);

  next().translateSelf(0, -2, oscillation * abs(Math.sin(gameTime * 2.1)) * -8.5 + 10);

  next().translateSelf(
    0,
    -2,
    max(
      // block rods
      (1 - levers[10]!.$lerpValue) * (1 - oscillation),
      // push rods
      oscillation * abs(Math.sin(gameTime * 1.5)),
    ) *
      -8.5 +
      10,
  );

  // oscillating hex pads

  oscillation = lerpneg(levers[8]!.$lerpValue2, levers[12]!.$lerpValue2);

  for (let i = 0; i < 4; i++) {
    next().translateSelf(
      (i > 2 ? (1 - oscillation) * 2 + oscillation : 0) - 100,
      oscillation * Math.sin(gameTime * 1.3 + i * 1.7) * (3 + i / 3) + 0.7,
      (i & 1 ? -1 : 1) * (1 - levers[8]!.$lerpValue2) * (1 - levers[12]!.$lerpValue2) * -7 +
        max(oscillation, 0.05) * Math.cos(gameTime * 1.3 + i * 7) * (4 - 2 * (1 - i / 3)) +
        115,
    );
  }

  // donut pad

  next()
    .translateSelf(
      (1 - oscillation) * 2.5 - 139.7,
      (1 - levers[8]!.$lerpValue) * -3 + oscillation * Math.sin(gameTime * 0.8) * -1 - 1.8,
      93.5,
    )
    .rotateSelf(Math.cos(gameTime * 1.3) * (oscillation * 3 + 3), 0);

  // First rotating platform (with hole)

  next()
    .translateSelf(-81, 0.6, 106)
    .rotateSelf(0, 40 + rotatingPlatform1Rotation);

  // Second rotating platform

  next().translateSelf(-65.8, 0.8, 106).rotateSelf(0, rotatingPlatform2Rotation);

  // Third rotating platform

  next()
    .translateSelf(-50.7, 0.8, 106)
    .rotateSelf(0, 180 - rotatingPlatform2Rotation);

  // Fourth rotating platform

  next()
    .translateSelf(-50.7, 0.8, 91)
    .rotateSelf(0, 270 + rotatingPlatform2Rotation);

  // jumping pads

  oscillation = lerpneg(levers[13]!.$lerpValue2, levers[14]!.$lerpValue2);

  for (let i = 0; i < 3; ++i) {
    next().translateSelf(
      0,
      oscillation * Math.sin(gameTime * 1.5 + i * 1.5) * 4 +
        (i ? 0 : (1 - levers[13]!.$lerpValue2) * (1 - levers[14]!.$lerpValue2)),
    );
  }

  // pendulums

  next()
    .translateSelf(Math.sin(gameTime) * -2)
    .rotateSelf(Math.sin(gameTime) * 25);

  // floating elevator pad

  const floatingElevatorPad = lerpneg(
    lerpneg((levers[14]!.$lerpValue + levers[14]!.$lerpValue2) / 2, levers[13]!.$lerpValue2),
    (levers[15]!.$lerpValue + levers[15]!.$lerpValue2) / 2,
  );

  next().translateSelf(0, floatingElevatorPad * 16, clamp(floatingElevatorPad * 2 - 1) * 8.5 + 95);

  // Update souls

  for (let i = 0; i < SOULS_COUNT; ++i) {
    souls[i]!._update();
    matrixToArray(tempMatrix, objectsMatricesBuffer, i);
  }

  // Update levers

  for (let i = 0; i < LEVERS_COUNT; ++i) {
    levers[i]!._update();
    matrixToArray(tempMatrix, objectsMatricesBuffer, i + SOULS_COUNT);

    // Encode lerp value in matrix m44 so fragmemt shader can change the lever handle color
    objectsMatricesBuffer[i * 16 + (15 + SOULS_COUNT * 16)] = 1 - levers[i]!.$lerpValue;
  }

  // Player body and legs

  player_update(next);

  // Copy all models matrices to the world uniform buffer

  for (let i = 0; i <= counter; ++i) {
    matrixToArray(allModels[i]!.$matrix, worldMatricesBuffer, i - 1);
  }
};
