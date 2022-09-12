import { lerp, min, angle_wrap_degrees, lerpneg, abs, clamp01 } from "../math";
import { mainMenuVisible } from "../page";
import type { Model } from "./scene";

export let absoluteTime = 0;

export let gameTime = 0;

export let souls_collected_count = 0;

/** Minimum 15.3 frames per second */
export const GAME_TIME_MAX_DELTA_TIME = 0.0666;

export let gameTimeDelta: number = GAME_TIME_MAX_DELTA_TIME;

let _globalTime: number | undefined;

let _messageEndTime = 0;

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

export const LOCAL_STORAGE_SAVED_GAME_KEY = "s666$22";

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

export let player_last_pulled_lever = 0;

export let rotatingPlatform1Rotation = 0;

export let rotatingPlatform2Rotation = 0;

export let rotatingHexCorridorRotation = 0;

export let game_completed: 0 | 1 = 0;

export let firstBoatLerp = 0;

export let secondBoatLerp = 0;

export const showMessage = (message: string, duration: number) => {
  if (!game_completed) {
    h4.innerHTML = message;
    _messageEndTime = gameTime + duration;
  }
};

export const worldStateUpdate = () => {
  if (gameTime > _messageEndTime) {
    showMessage("", 0);
    _messageEndTime = 0;
  }

  const shouldRotatePlatforms = lerpneg(levers[12]!.$lerpValue, levers[13]!.$lerpValue);

  rotatingHexCorridorRotation = lerp(
    lerpDamp(rotatingHexCorridorRotation, 0, 1),
    angle_wrap_degrees(rotatingHexCorridorRotation + gameTimeDelta * 60),
    levers[5]!.$lerpValue - levers[6]!.$lerpValue2,
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

  secondBoatLerp = lerpDamp(secondBoatLerp, levers[9]!.$lerpValue2, 0.2 + 0.3 * abs(levers[9]!.$lerpValue2 * 2 - 1));

  firstBoatLerp = lerpDamp(
    firstBoatLerp,
    game_completed ? lerp(firstBoatLerp, -9, gameTimeDelta * 3) : clamp01(gameTime / 3),
    1,
  );

  if (levers[0]!.$value === 1 && levers[0]!.$lerpValue > 0.8) {
    if (souls_collected_count < 13) {
      levers[0]!.$value = 0;
      showMessage("Not leaving now, there are souls to catch!", 3);
    } else if (!game_completed) {
      showMessage("Well done Dante! You completed your task.<br>Thanks for playing.", 0);
      game_completed = 1;
    }
  }
};

const updateCollectedSoulsCounter = () => {
  souls_collected_count = souls.reduce((acc, cur) => acc + cur.$value, 0);
  h3.innerHTML =
    " " +
    ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][souls_collected_count]!;
};

export const saveGame = () => {
  updateCollectedSoulsCounter();
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
    levers.map(getItemValue),
    souls.map(getItemValue),
    player_last_pulled_lever,
    gameTime,
    secondBoatLerp,
  ]);
};

export const loadGame = () => {
  try {
    const [savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedSecondBoatLerp] = JSON.parse(
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY]!,
    );
    levers.map(
      (lever, index) =>
        (lever.$lerpValue = lever.$lerpValue2 = lever.$value = index ? ((savedLevers[index] | 0) as 0 | 1) : 0),
    );
    souls.map((soul, index) => {
      soul.$value = (savedSouls[index] | 0) as 0 | 1;
    });
    player_last_pulled_lever = savedLastPulledLever | 0;
    gameTime = +savedGameTime;
    secondBoatLerp = +savedSecondBoatLerp;
  } catch (e) {
    if (DEBUG) {
      console.log(e);
    }
  }
  firstBoatLerp = clamp01(player_last_pulled_lever);
  updateCollectedSoulsCounter();
  showMessage("", 0);
  h4.innerHTML = "";
  _messageEndTime = 0;
};

export const onPlayerPullLever = (leverIndex: number) => {
  if (DEBUG) {
    console.log("switch lever " + leverIndex + " = " + levers[leverIndex]?.$value);
  }

  if (leverIndex) {
    player_last_pulled_lever = leverIndex;
    showMessage("click", 1);
    saveGame();
  }
};

export const onSoulCollected = () => {
  showMessage(
    [
      ,
      "Mark Zuckemberg<br>made the world worse",
      ,
      "Andrzej Mazur<br>for the js13k competition",
      "Donald Trump<br>lied, lied, and lied",
      "Kim Jong-un<br>Dictator, and liked pineapple on pizza",
      "Maxime Euziere<br>forced me to finish this game",
      "She traded monkeys NFTs.",
      ,
      "Vladimir Putin<br>caused war and death",
      "He was NOT a good person.",
      ,
      "Salvatore Previti<br>made this evil game<br><br>All souls catched, go back to the boat",
    ][souls_collected_count] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift.',
    souls_collected_count && souls_collected_count < 12 ? 5 : 7,
  );

  saveGame();
};
