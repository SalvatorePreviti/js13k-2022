import { abs, clamp } from "../math/math";
import type { Vec2, Vec3 } from "../math/vectors";
import { levers, souls, SOULS_COUNT } from "./models";
import { gameTime, lerpDamp, setGameTime } from "./game-time";
import { exit_player_first_person } from "../page";
import { LEVER_ID_BOAT0 } from "./levers-ids";
import { devLeverNames } from "../dev-tools/dev-models";

export const player_position_final: Vec3 = { x: 0, y: 0, z: 0 };

export const camera_rotation: Vec2 = { x: 0, y: 180 } as Vec2;

export let souls_collected_count = 0;

let _messageEndTime = 0.1;

export const LOCAL_STORAGE_SAVED_GAME_KEY = "spdnt22";

export let game_completed: 0 | 1 = 0;

export let player_last_pulled_lever = LEVER_ID_BOAT0;

export let firstBoatLerp: number;

export let secondBoatLerp: number;

export const showMessage = (message: string, duration: number) => {
  if (_messageEndTime < Infinity) {
    _messageEndTime = gameTime + duration;
    h4.innerHTML = message;
  }
};

export const worldStateUpdate = () => {
  if (_messageEndTime && gameTime > _messageEndTime) {
    _messageEndTime = 0;
    h4.innerHTML = "";
  }

  if (game_completed) {
    exit_player_first_person();
  }

  firstBoatLerp = game_completed ? lerpDamp(firstBoatLerp, -9, 0.015) : lerpDamp(firstBoatLerp, clamp(gameTime / 3), 1);
  secondBoatLerp = lerpDamp(
    secondBoatLerp,
    levers[LEVER_ID_BOAT0]!.$lerpValue2,
    0.2 + 0.3 * abs(levers[LEVER_ID_BOAT0]!.$lerpValue2 * 2 - 1),
  );
};

const updateCollectedSoulsCounter = () => {
  h3.innerHTML =
    "Souls: " +
    [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
      (souls_collected_count = souls.reduce((acc, v) => acc + v.$value, 0))
    ]! +
    " / XIII";
};

export const loadGame = () => {
  let _savedLevers: number[] = [];
  let _savedSouls: number[] = [];
  try {
    const [savedLastPulledLever, savedSecondBoatLerp, savedGameTime, savedLevers, savedSouls] = JSON.parse(
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY]!,
    );
    _savedLevers = savedLevers;
    _savedSouls = savedSouls;
    player_last_pulled_lever = savedLastPulledLever;
    secondBoatLerp = savedSecondBoatLerp;
    setGameTime(savedGameTime);
  } catch (e) {
    if (DEBUG) {
      console.log(e);
    }
  }

  levers.map(
    (lever, index) =>
      (lever.$lerpValue = lever.$lerpValue2 = lever.$value = index !== LEVER_ID_BOAT0 && _savedLevers[index]! ? 1 : 0),
  );
  souls.map((soul, index) => (soul.$value = _savedSouls[index]! ? 1 : 0));

  updateCollectedSoulsCounter();
  firstBoatLerp = player_last_pulled_lever !== LEVER_ID_BOAT0 || souls_collected_count ? 1 : 0;
};

export const resetGame = () => {
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
  location.reload();
};

export const saveGame = () => {
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
    levers.map((v) => v.$value),
    souls.map((v) => v.$value),
    player_last_pulled_lever,
    secondBoatLerp,
    gameTime,
  ]);
};

export const onSoulCollected = () => {
  showMessage(
    [
      ,
      "Mark Zuckemberg<br>made the world worse",
      "Giorgia Meloni<br>fascist",
      "Andrzej Mazur<br>for the js13k competition",
      "Donald Trump<br>lies",
      "Kim Jong-un<br>Dictator, liked pineapple on pizza",
      "Maxime Euziere<br>forced me to finish this game",
      "She traded NFTs apes",
      ,
      "Vladimir Putin<br>evil war",
      "He was not a good person",
      ,
      "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
    ][souls_collected_count] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift',
    6,
  );

  updateCollectedSoulsCounter();
  saveGame();
};

export const onPlayerPullLever = (leverIndex: number) => {
  player_last_pulled_lever = leverIndex;
  if (DEBUG) {
    console.log((devLeverNames[leverIndex] || "LEVER") + " " + leverIndex + " = " + levers[leverIndex]?.$value);
  }

  if (leverIndex) {
    showMessage("* click *", 1);
  }
  saveGame();
};

export const onFirstBoatLeverPulled = () => {
  if (souls_collected_count < SOULS_COUNT) {
    showMessage("Not leaving now, there are souls to catch!", 3);
  } else if (!game_completed) {
    showMessage("Well done. They will be punished.<br>Thanks for playing", Infinity);
    game_completed = 1;
  }
};
