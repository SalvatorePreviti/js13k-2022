import { lerp, angle_wrap_degrees, lerpneg, abs } from "../math/math";
import type { Vec3 } from "../math/vectors";
import { lerpDamp, gameTimeDelta, gameTime, setGameTime } from "../game-time";

const LOCAL_STORAGE_SAVED_GAME_KEY = "666SpH3Ll22";

export interface Lever {
  $value: 0 | 1;
  $lerpValue: number;
  $lerpValue2: number;
  $modelId: number;
  $matrix?: DOMMatrixReadOnly;
}

export const levers: Lever[] = [];

export const PLAYER_MODEL_ID = 2;

// export const player_position_initial: Vec3 = {
//   x: 0,
//   y: 10,
//   z: -27,
// };

export const player_position_initial: Vec3 = {
  x: -109,
  y: 16,
  z: 93,
};

export const player_position_global: Vec3 = { ...player_position_initial };

export const player_position_final: Vec3 = { ...player_position_initial };

export let player_last_pulled_lever = 0;

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

export const onPlayerPullLever = (leverIndex: number) => {
  player_last_pulled_lever = leverIndex;
};

export const saveGame = () => {
  localStorage.setItem(
    LOCAL_STORAGE_SAVED_GAME_KEY,
    JSON.stringify([
      666,
      levers.map((lever) => lever.$value),
      player_last_pulled_lever,
      gameTime,
      rotatingPlatform1Rotation,
      rotatingPlatform2Rotation,
      rotatingHexCorridorRotation,
      boatLerp,
    ]),
  );
};

export const newGame = () => {
  levers.map((lever) => (lever.$value = 0));
  player_last_pulled_lever = 0;
  setGameTime(0);
};

export const loadGame = () => {
  try {
    const [
      header,
      savedLevers,
      savedLastPulledLever,
      savedGameTime,
      savedRotatingPlatform1Rotation,
      savedRotatingPlatform2Rotation,
      savedRotatingHexCorridorRotation,
      savedBoatLerp,
    ] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SAVED_GAME_KEY)!);
    if (header === 666) {
      levers.map((lever, index) => (lever.$value = (savedLevers[index] | 0) as 0 | 1));
      player_last_pulled_lever = savedLastPulledLever | 0;
      setGameTime(savedGameTime | 0);
      rotatingPlatform1Rotation = savedRotatingPlatform1Rotation | 0;
      rotatingPlatform2Rotation = savedRotatingPlatform2Rotation | 0;
      rotatingHexCorridorRotation = savedRotatingHexCorridorRotation | 0;
      boatLerp = savedBoatLerp | 0;
      return;
    }
  } catch {}
  newGame();
};
