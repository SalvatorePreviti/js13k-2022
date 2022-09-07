import { lerp, min } from "./math/math";
import { mainMenuVisible } from "./menu";

export let absoluteTime = 0;

export let gameTime = 0;

export let gameTimeDelta: number = 0.01;

/** Minimum 15.3 frames per second */
export const GAME_TIME_MAX_DELTA_TIME = 0.0666;

let _globalTime: number | undefined;

export const setGameTime = (value: number) => (gameTime = value);

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
