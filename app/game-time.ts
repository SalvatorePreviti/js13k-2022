export let gameTime: number = 0;

export let gameTimeDelta: number = 0.01;

let _globalTime: number | undefined;

export const gameTimeUpdate = (time: number) => {
  // if (!document.hidden) {
  // const delta = (time - (_globalTime || time)) / 1000;
  // if (delta >= 0.003) {
  gameTimeDelta = Math.min(0.08, (time - (_globalTime || time)) / 1000);
  gameTime += gameTimeDelta;
  _globalTime = time;
  // }
  // } else {
  // gameTimeDelta = 0;
  // }

  // if (!_globalTime) {
  // _globalTime = time;
  // }
};
