export let gameTime: number = 0;

export let gameTimeDelta: number = 0.01;

let _globalTime: number | undefined;

export const gameTimeUpdate = (time: number) => {
  // if (!document.hidden) {
  gameTimeDelta = Math.min(0.06, (time - (_globalTime || time)) / 1000);
  gameTime += gameTimeDelta;
  // }
  _globalTime = time;
};
