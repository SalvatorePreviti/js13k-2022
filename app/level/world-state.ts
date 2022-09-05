import { lerpDamp, gameTimeDelta } from "../game-time";
import { lerp, angle_wrap_degrees, lerpneg, abs } from "../math/math";
import { levers } from "./levers";

export let rotatingPlatform1Rotation = 0;

export let rotatingPlatform2Rotation = 0;

export let rotatingHexCorridorRotation = 0;

export let boatLerp = 0;

export const worldStateUpdate = () => {
  const shouldRotatePlatforms = lerpneg(levers[11]!.$lerpValue, levers[12]!.$lerpValue);

  rotatingHexCorridorRotation = lerp(
    lerpDamp(rotatingHexCorridorRotation, 0, 1),
    angle_wrap_degrees(rotatingHexCorridorRotation + gameTimeDelta * 60),
    levers[4]!.$lerpValue - levers[5]!.$lerpValue2,
  );

  rotatingPlatform1Rotation = lerp(
    lerpDamp(rotatingPlatform1Rotation, 0, 5),
    angle_wrap_degrees(rotatingPlatform1Rotation + gameTimeDelta * 23),
    shouldRotatePlatforms,
  );

  rotatingPlatform2Rotation = lerp(
    lerpDamp(rotatingPlatform2Rotation, 0, 4),
    angle_wrap_degrees(rotatingPlatform2Rotation + gameTimeDelta * 39),
    shouldRotatePlatforms,
  );

  boatLerp = lerpDamp(boatLerp, levers[8]!.$lerpValue2, 0.2 + 0.3 * abs(levers[8]!.$lerpValue2 * 2 - 1));
};
