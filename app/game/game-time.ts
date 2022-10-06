import { lerp, min } from "../math/math";

let _globalTime: number | undefined;

export let mainMenuVisible: boolean | undefined;

/** Minimum 15.3 frames per second */
export const GAME_TIME_MAX_DELTA_TIME = 0.066;

export let gameTime = 0;

export let absoluteTime = 0;

export let gameTimeDelta = 0;

export const gameTimeUpdate = (time: number) => {
  const dt = (time - (_globalTime || time)) / 1000;
  absoluteTime += dt;
  gameTime += gameTimeDelta = mainMenuVisible ? 0 : min(GAME_TIME_MAX_DELTA_TIME, dt);
  _globalTime = time;
};

export const setGameTime = (value: number) => {
  gameTime = value;
};

export const damp = NO_INLINE((speed: number) => 1 - Math.exp(-gameTimeDelta * speed));

export const lerpDamp = NO_INLINE((from: number, to: number, speed: number) => lerp(from, to, damp(speed)));

export const setMainMenuVisible = (visible: boolean) => {
  mainMenuVisible = visible;
};

// export const gameTimeUpdate = (time: number) => {
//   const dt = (time - (_globalTime || time)) / 1000;
//   absoluteTime += dt;
//   if (dt >= 0.04 + Math.random() * 0.02) {
//     gameTimeDelta = mainMenuVisible ? 0 : Math.min(GAME_TIME_MAX_DELTA_TIME, (time - (_globalTime || time)) / 1000);
//     gameTime += gameTimeDelta;
//     _globalTime = time;
//   } else {
//     gameTimeDelta = 0;
//   }
//   if (!_globalTime) {
//     _globalTime = time;
//   }
// };
