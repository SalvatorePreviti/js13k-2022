import { lerp, min, angle_wrap_degrees, lerpneg, abs, type Vec3 } from "../math";
import { mainMenuVisible } from "../page";
import type { Model } from "./scene";

export let absoluteTime = 0;

export let gameTime = 0;

export let gameTimeDelta: number = 0.01;

/** Minimum 15.3 frames per second */
export const GAME_TIME_MAX_DELTA_TIME = 0.0666;

let _globalTime: number | undefined;

export const lerpDamp = /* @__PURE__ */ (from: number, to: number, speed: number) =>
  lerp(from, to, 1 - Math.exp(-speed * gameTimeDelta));

export const gameTimeUpdate = (time: number) => {
  const dt = (time - (_globalTime || time)) / 1000;
  gameTimeDelta = mainMenuVisible ? 0 : min(GAME_TIME_MAX_DELTA_TIME, dt);
  gameTime += gameTimeDelta;
  absoluteTime += dt;
  _globalTime = time;
};

// export const gameTimeUpdate = (time: number) => {
//   const delta = (time - (_globalTime || time)) / 1000;
//   if (delta >= GAME_TIME_MAX_DELTA_TIME) {
//     gameTimeDelta = Math.min(GAME_TIME_MAX_DELTA_TIME, (time - (_globalTime || time)) / 1000);
//     gameTime += gameTimeDelta;
//     _globalTime = time;
//   } else {
//     gameTimeDelta = 0;
//   }

//   if (!_globalTime) {
//     _globalTime = time;
//   }
// };

export const LOCAL_STORAGE_SAVED_GAME_KEY = "s66622";

const ROMAN_NUMERALS = "0 I II III IV V VI VII VIII IX X XI XII XIII".split(" ");

export interface Lever {
  $value: 0 | 1;
  $lerpValue: number;
  $lerpValue2: number;
  $model: Model;
  $matrix?: DOMMatrixReadOnly;
}

export interface Soul {
  $value: 0 | 1;
}

const getItemValue = <T>({ $value }: { readonly $value: T }) => $value;

export const levers: Lever[] = [];

export const souls: Soul[] = [];

export const PLAYER_MODEL_ID = 2;

export const player_position_initial: Vec3 = {
  x: 0,
  y: 10,
  z: -27,
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
    angle_wrap_degrees(rotatingPlatform1Rotation + gameTimeDelta * 56),
    shouldRotatePlatforms,
  );

  rotatingPlatform2Rotation = lerp(
    lerpDamp(rotatingPlatform2Rotation, 0, 4),
    angle_wrap_degrees(rotatingPlatform2Rotation + gameTimeDelta * 48),
    shouldRotatePlatforms,
  );

  boatLerp = lerpDamp(boatLerp, levers[8]!.$lerpValue2, 0.2 + 0.3 * abs(levers[8]!.$lerpValue2 * 2 - 1));
};

const updateCollectedSoulsCounter = () => {
  hS.innerText = " " + ROMAN_NUMERALS[souls.reduce((acc, cur) => acc + cur.$value, 0)]!;
};

export const saveGame = () => {
  updateCollectedSoulsCounter();
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
    666,
    levers.map(getItemValue),
    souls.map(getItemValue),
    player_last_pulled_lever,
    gameTime,
    boatLerp,
  ]);
};

export const loadGame = () => {
  try {
    const [header, savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedBoatLerp] = JSON.parse(
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY]!,
    );
    if (header === 666) {
      levers.map(
        (lever, index) => (lever.$lerpValue = lever.$lerpValue2 = lever.$value = (savedLevers[index] | 0) as 0 | 1),
      );
      souls.map((soul, index) => (soul.$value = (savedSouls[index] | 0) as 0 | 1));
      player_last_pulled_lever = savedLastPulledLever | 0;
      gameTime = savedGameTime | 0;
      boatLerp = savedBoatLerp | 0;
    }
  } catch (e) {
    if (DEBUG) {
      console.log(e);
    }
  }
  updateCollectedSoulsCounter();
};

export const onPlayerPullLever = (leverIndex: number) => {
  if (DEBUG) {
    console.log("switch lever " + leverIndex + " = " + levers[leverIndex]?.$value);
  }

  player_last_pulled_lever = leverIndex;
  saveGame();
};

export const onSoulCollected = () => {
  saveGame();
};
