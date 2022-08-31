export let gameTime: number = 0;

export let gameTimeDelta: number = 0.01;

/** Minimum 15.3 frames per second */
export const GAME_TIME_MAX_DELTA_TIME = 0.065;

let _globalTime: number | undefined;

export const gameTimeUpdate = (time: number) => {
  gameTimeDelta = Math.min(GAME_TIME_MAX_DELTA_TIME, (time - (_globalTime || time)) / 1000);
  gameTime += gameTimeDelta;
  _globalTime = time;
};

// export const gameTimeUpdate = (time: number) => {
//   const delta = (time - (_globalTime || time)) / 1000;
//   if (delta >= 0.1) {
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
