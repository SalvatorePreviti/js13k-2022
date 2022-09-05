import { lerp, min } from "./math/math";

export let gameTime: number = 0;

export let gameTimeDelta: number = 0.01;

/** Minimum 15.3 frames per second */
export const GAME_TIME_MAX_DELTA_TIME = 0.07;

let _globalTime: number | undefined;

export const lerpDamp = /* @__PURE__ */ (from: number, to: number, speed: number) =>
  lerp(from, to, 1 - Math.exp(-speed * gameTimeDelta));

export const gameTimeUpdate = (time: number) => {
  gameTimeDelta = min(GAME_TIME_MAX_DELTA_TIME, (time - (_globalTime || time)) / 1000);
  gameTime += gameTimeDelta;
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
