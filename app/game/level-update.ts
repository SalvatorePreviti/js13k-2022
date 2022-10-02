import { clamp, max, abs, lerpneg, min } from "../math/math";
import { matrixCopy, identity, matrixToArray, tempMatrix } from "../math/matrix";
import { player_update } from "../player";
import { gameTime } from "./game-time";
import { allModels, levers, LEVERS_COUNT, souls, SOULS_COUNT } from "./models";
import { objectsMatricesBuffer, worldMatricesBuffer } from "./models-matrices";
import {
  firstBoatLerp,
  rotatingHexCorridorRotation,
  secondBoatLerp,
  rotatingPlatform1Rotation,
  rotatingPlatform2Rotation,
} from "./world-state";

const boatAnimationMatrix = (matrix: DOMMatrix, x: number, y: number, z: number) =>
  matrix
    .translateSelf(x + Math.sin(gameTime + 2) / 5, y + Math.sin(gameTime * 0.8) / 3, z)
    .rotateSelf(Math.sin(gameTime) * 2, Math.sin(gameTime * 0.7), Math.sin(gameTime * 0.9));

export const eppur_si_muove = () => {
  let counter = 1;

  const next = () => matrixCopy(identity, allModels[++counter]!.$matrix);

  // first boad
  boatAnimationMatrix(next(), -12, 4.2, -66 + firstBoatLerp * 40);

  // in and out gate bars

  next()
    .translateSelf(0, 0, -15)
    .scaleSelf(1, clamp(1.22 - levers[1]!.$lerpValue), 1);

  next()
    .translateSelf(0, 0, 15)
    .scaleSelf(1, clamp(1.22 - levers[2]!.$lerpValue), 1);

  // moving central platform in the first level

  next().translateSelf(
    0,
    levers[3]!.$lerpValue > 0.01
      ? (Math.cos(gameTime * 1.5) * 5 + 2) * levers[3]!.$lerpValue2 * (1 - levers[2]!.$lerpValue) +
          (1 - levers[3]!.$lerpValue) * -15
      : -500,
    0,
  );

  // blackPlatforms

  const level2Oscillation = min(levers[2]!.$lerpValue2, 1 - levers[4]!.$lerpValue2);

  next().translateSelf(level2Oscillation * Math.sin(0.7 * 3 + gameTime * 0.7) * 12);

  next().translateSelf(level2Oscillation * Math.sin(3 + gameTime) * 8.2);

  // central oscillating platform

  next().translateSelf(level2Oscillation * Math.sin(gameTime / 1.5 + 2) * 12);

  // triangle platform

  next().translateSelf((1 - level2Oscillation) * 9.8);

  // vertically oscillating mini platforms

  const level3Oscillation = clamp(1 - level2Oscillation * 5) * lerpneg(levers[4]!.$lerpValue, levers[5]!.$lerpValue);

  next().translateSelf(0, level3Oscillation * Math.sin(gameTime * (1.5 * 0.9)) * 4);

  // horizontaly oscillating mini platforms

  next().translateSelf(0, 0, level3Oscillation * Math.sin(gameTime * 0.9) * 8);

  // hex corridor door

  next().translateSelf(0, levers[4]!.$lerpValue2 * -6.5);

  // rotating hex corridor

  next()
    .translateSelf(-75, (1 - levers[5]!.$lerpValue2) * (1 - levers[6]!.$lerpValue) * 3, 55)
    .rotateSelf(180 * (1 - levers[5]!.$lerpValue2) + rotatingHexCorridorRotation, 0);

  // central gate bars

  next()
    .translateSelf(-99.7, -1.9, 63.5)
    .scaleSelf(1, clamp(1.1 - levers[6]!.$lerpValue), 1);

  // elevators

  const shouldOscillateElevators = lerpneg(levers[7]!.$lerpValue2, levers[6]!.$lerpValue2);

  next().translateSelf(
    0,
    (1 - max(levers[6]!.$lerpValue, levers[7]!.$lerpValue)) * 3.5 + shouldOscillateElevators * Math.sin(gameTime) * 5,
  );

  next().translateSelf(
    0,
    shouldOscillateElevators * Math.sin(gameTime + 3) * 6,
    Math.sin(gameTime * 0.6 + 1) * 6 * shouldOscillateElevators,
  );

  // central sculpture/monument

  next().translateSelf(0, levers[7]!.$lerpValue2 * -7.3);

  // second boat

  boatAnimationMatrix(next(), -123, 1.4, 55 + secondBoatLerp * -65);

  // pushing rods

  const shouldPushRods = lerpneg(levers[10]!.$lerpValue, levers[11]!.$lerpValue);

  next().translateSelf(0, -2, shouldPushRods * abs(Math.sin(gameTime * 1.1)) * -8.5 + 10);

  next().translateSelf(0, -2, shouldPushRods * abs(Math.sin(gameTime * 2.1)) * -8.5 + 10);

  const shouldBlockRods = (1 - levers[10]!.$lerpValue) * (1 - shouldPushRods);

  next().translateSelf(0, -2, max(shouldBlockRods, shouldPushRods * abs(Math.sin(gameTime * 1.5))) * -8.5 + 10);

  // oscillating hex pads

  const hexPadShouldOscillate = lerpneg(levers[8]!.$lerpValue2, levers[12]!.$lerpValue2);

  for (let i = 0; i < 4; i++) {
    next().translateSelf(
      (i > 2 ? (1 - hexPadShouldOscillate) * 2 + hexPadShouldOscillate : 0) - 100,
      hexPadShouldOscillate * Math.sin(gameTime * 1.3 + i * 1.7) * (3 + i / 3) + 0.7,
      (i & 1 ? -1 : 1) * (1 - levers[8]!.$lerpValue2) * (1 - levers[12]!.$lerpValue2) * -7 +
        max(hexPadShouldOscillate, 0.05) * Math.cos(gameTime * 1.3 + i * 7) * (4 - 2 * (1 - i / 3)) +
        115,
    );
  }

  // donut pad

  next()
    .translateSelf(
      (1 - hexPadShouldOscillate) * 2.5 - 139.7,
      (1 - levers[8]!.$lerpValue) * -3 + hexPadShouldOscillate * Math.sin(gameTime * 0.8) * -1 - 1.8,
      93.5,
    )
    .rotateSelf(Math.cos(gameTime * 1.3) * (hexPadShouldOscillate * 3 + 3), 0);

  // far arc gate door

  next()
    .translateSelf(-100, 0.6, 96.5)
    .scaleSelf(0.88, 1.2 - levers[12]!.$lerpValue);

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

  const jumpingPadsOscillate = lerpneg(levers[13]!.$lerpValue2, levers[14]!.$lerpValue2);

  for (let i = 0; i < 3; ++i) {
    next().translateSelf(
      0,
      (1 - levers[13]!.$lerpValue2) * (1 - levers[14]!.$lerpValue2) * (i ? 0 : 3) +
        jumpingPadsOscillate * Math.sin(gameTime * 1.5 + i * 1.5) * 4,
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

  // Player body and legs

  player_update(next);

  // Copy all matrices to uniform buffer

  for (let i = 0; i <= counter; ++i) {
    matrixToArray(allModels[i]!.$matrix, worldMatricesBuffer, i - 1);
  }

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
};
