export let mainMenuVisible: boolean | undefined;

import { loadGame, LOCAL_STORAGE_SAVED_GAME_KEY } from "./game/world-state";
import { songAudioSource } from "./music/audio-context";
import type { KEY_CODE } from "./utils/keycodes";

export const KEY_LEFT = 0;

export const KEY_FRONT = 1;

export const KEY_RIGHT = 2;

export const KEY_BACK = 3;

export const KEY_INTERACT = 5;

export const keyboard_downKeys: (boolean | 0 | undefined)[] = [];

export let mouse_movementX = 0;

export let mouse_movementY = 0;

export let player_first_person: boolean | undefined;

/** Resets the input status after a frame */
export const input_frameReset = () => (keyboard_downKeys[KEY_INTERACT] = mouse_movementX = mouse_movementY = 0);

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

export const setMainMenuVisible = (value: boolean) => {
  if (mainMenuVisible !== value) {
    mainMenuVisible = value;
    if (mainMenuVisible) {
      document.exitPointerLock();
    }
    document.body.className = value ? "l m" : "l";
  }
};

export const initPage = () => {
  const handleResize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    keyboard_downKeys.length = mouse_movementX = mouse_movementY = 0;
  };

  b1.onclick = () => {
    songAudioSource.start();

    setMainMenuVisible(false);
  };

  b2.onclick = () => {
    hC.requestPointerLock();
  };

  b3.onclick = () => {
    // eslint-disable-next-line no-alert
    if (confirm("Delete saved game and restart?")) {
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
      location.reload();
    }
  };

  if (!DEBUG) {
    oncontextmenu = () => false;
  }

  onresize = handleResize;
  onblur = handleResize;

  onkeydown = onkeyup = ({ code, target, type, repeat }) => {
    if (!repeat) {
      if (type[5] && (code === "Escape" || (code === "Enter" && mainMenuVisible))) {
        setMainMenuVisible(!mainMenuVisible);
      } else {
        keyboard_downKeys[keyMap[code as KEY_CODE]!] = type[5] ? target === document.body : 0;
      }
    }
  };

  onmousemove = ({ buttons, movementX, movementY }) => {
    if (document.pointerLockElement || (DEBUG && buttons > 0 && document.activeElement)) {
      mouse_movementX += movementX;
      mouse_movementY += movementY;
    }
  };

  document.onvisibilitychange = () => document.hidden && setMainMenuVisible(true);

  document.onpointerlockchange = () => {
    player_first_person = !!document.pointerLockElement;
    if (player_first_person) {
      setMainMenuVisible(false);
    }
  };

  loadGame();
  handleResize();
  setMainMenuVisible(!DEBUG);
};
