export let mainMenuVisible: boolean | undefined;

import { camera_rotation } from "./camera";
import { loadGame, LOCAL_STORAGE_SAVED_GAME_KEY } from "./game/world-state";
import { player_first_person } from "./input";
import { audioContext, songAudioSource } from "./music/audio-context";
import type { KEY_CODE } from "./utils/keycodes";

export const KEY_LEFT = 0;

export const KEY_FRONT = 1;

export const KEY_RIGHT = 2;

export const KEY_BACK = 3;

export const KEY_INTERACT = 5;

export const keyboard_downKeys: (boolean | 0 | undefined)[] = [];

let music_on = !DEBUG;

export let game_play_clicked_once: undefined | 1;

/** Resets the input status after a frame */
export const input_frameReset = () => (keyboard_downKeys[KEY_INTERACT] = 0);

const keyMap: Partial<Record<KEY_CODE, number>> = {
  ["KeyA"]: KEY_LEFT,
  ["ArrowLeft"]: KEY_LEFT,

  ["KeyW"]: KEY_FRONT,
  ["ArrowUp"]: KEY_FRONT,

  ["KeyD"]: KEY_RIGHT,
  ["ArrowRight"]: KEY_RIGHT,

  ["KeyS"]: KEY_BACK,
  ["ArrowDown"]: KEY_BACK,

  ["KeyE"]: KEY_INTERACT,
  ["Space"]: KEY_INTERACT,
  ["Enter"]: KEY_INTERACT,
};

const updateMusicOnState = () => {
  if (mainMenuVisible || !music_on) {
    songAudioSource.disconnect();
  } else {
    // connect the AudioBufferSourceNode to the  destination so we can hear the sound
    songAudioSource.connect(audioContext.destination);
  }
  b4.innerHTML = "Music: " + music_on;
};

export const setMainMenuVisible = (value: boolean = false) => {
  if (mainMenuVisible !== value) {
    mainMenuVisible = value;

    if (value) {
      document.exitPointerLock();
    } else {
      try {
        songAudioSource.start();
      } catch {}
      game_play_clicked_once = 1;
    }

    updateMusicOnState();
    document.body.className = value ? "l m" : "l";
  }
};

export const initPage = () => {
  const handleResize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    keyboard_downKeys.length = 0;
  };

  b1.onclick = () => setMainMenuVisible();

  b2.onclick = () => {
    setMainMenuVisible();
    hC.requestPointerLock();
  };

  b3.onclick = () => {
    // eslint-disable-next-line no-alert
    if (confirm("Delete game progress?")) {
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
      location.reload();
    }
  };

  b4.onclick = () => {
    music_on = !music_on;
    updateMusicOnState();
  };

  if (!DEBUG) {
    oncontextmenu = () => false;
  }

  onresize = handleResize;
  onblur = handleResize;

  onkeydown = onkeyup = ({ code, target, type, repeat }) => {
    if (!repeat) {
      if (type[5] && (code === "Escape" || (code === "Enter" && mainMenuVisible))) {
        if (game_play_clicked_once) {
          setMainMenuVisible(!mainMenuVisible);
        }
      } else {
        keyboard_downKeys[keyMap[code as KEY_CODE]!] = type[5] ? target === document.body : 0;
      }
    }
  };

  onmousemove = ({ movementX, movementY }) => {
    if (player_first_person) {
      camera_rotation.y += movementX * 0.1;
      camera_rotation.x += movementY * 0.1;
    }
  };

  document.onvisibilitychange = () => document.hidden && setMainMenuVisible(true);

  loadGame();
  handleResize();
  setMainMenuVisible(!DEBUG);
};
