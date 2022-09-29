import { lerp, min } from "../math/math";

let _globalTime: number | undefined;

export let mainMenuVisible: boolean | undefined;

/** Minimum 15.3 frames per second */
export const GAME_TIME_MAX_DELTA_TIME = 0.066;

export let gameTime = 0;

export let absoluteTime = 0;

export let gameTimeDelta: number = GAME_TIME_MAX_DELTA_TIME;

export const gameTimeUpdate = (time: number) => {
  const dt = (time - (_globalTime || time)) / 1000;
  absoluteTime += dt;
  gameTime += gameTimeDelta = mainMenuVisible ? 0 : min(GAME_TIME_MAX_DELTA_TIME, dt);
  _globalTime = time;
};

export const resetGameTime = (value: number) => {
  gameTime = value;
  gameTimeDelta = 0;
};

export const damp = (speed: number) => 1 - Math.exp(-speed * gameTimeDelta);

export const lerpDamp = /* @__PURE__ */ (from: number, to: number, speed: number) => lerp(from, to, damp(speed));

export const setMainMenuVisible = (visible: boolean) => {
  mainMenuVisible = visible;
};
// export const gameTimeUpdate = (time: number) => {
//   if (mainMenuVisible) {
//     keyboard_downKeys[KEY_INTERACT] = 0;
//   }
//   const delta = (time - (_globalTime || time)) / 1000;
//   if (delta >= 0.06) {
//     gameTimeDelta = mainMenuVisible ? 0 : Math.min(GAME_TIME_MAX_DELTA_TIME, (time - (_globalTime || time)) / 1000);
//     gameTime += gameTimeDelta;
//     _globalTime = time;
//   } else {
//     gameTimeDelta = 0;
//   }
//   absoluteTime += delta;
//   if (!_globalTime) {
//     _globalTime = time;
//   }
// };
