export let gameTime: number = 0;

export let gameTimeDelta: number = 0;

let _globalTime: number | undefined;

export const gameTimeUpdate = (time: number) => {
  gameTime += gameTimeDelta = (time - (_globalTime || time)) / 1000;
  _globalTime = time;
};
