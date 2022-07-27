import type { KEY_CODE } from "./utils/keycodes";

export const KEY_LEFT = 0;

export const KEY_UP = 1;

export const KEY_RIGHT = 2;

export const KEY_DOWN = 3;

export const KEY_RUN = 4;

export const KEY_DEBUG_FLY_UP = 5;

export const KEY_DEBUG_FLY_DOWN = 6;

const keyMap: Partial<Record<KEY_CODE, number>> = {
  KeyA: KEY_LEFT,
  ArrowLeft: KEY_LEFT,

  KeyW: KEY_UP,
  ArrowUp: KEY_UP,

  KeyD: KEY_RIGHT,
  ArrowRight: KEY_RIGHT,

  KeyS: KEY_DOWN,
  ArrowDown: KEY_DOWN,

  ShiftLeft: KEY_RUN,
  ShiftRight: KEY_RUN,

  KeyR: KEY_DEBUG_FLY_UP,
  KeyF: KEY_DEBUG_FLY_DOWN,
};

export const keyboard_downKeys: (0 | 1 | undefined)[] = [];

export let mouse_movementX = 0;

export let mouse_movementY = 0;

export const mouse_movementReset = () => (mouse_movementX = mouse_movementY = 0);

let _mouseDown: boolean | 0 | undefined;

if (!DEBUG) {
  oncontextmenu = () => false;
}

onblur = () => (keyboard_downKeys.length = _mouseDown = mouse_movementX = mouse_movementY = 0);

onkeydown = ({ code, target }) => {
  if (target === document.body) {
    keyboard_downKeys[keyMap[code as KEY_CODE]!] = 1;
  }
};

onkeyup = ({ code }) => (keyboard_downKeys[keyMap[code as KEY_CODE]!] = 0);

onmousedown = ({ target, buttons }: MouseEvent) => {
  _mouseDown = (buttons === 1 && target === document.body) || target === hC;
};

onmouseup = () => (_mouseDown = 0);

onmousemove = ({ buttons, movementX, movementY }) => {
  if (((buttons > 0 && _mouseDown) || document.pointerLockElement) && document.activeElement) {
    mouse_movementX += movementX;
    mouse_movementY += movementY;
  }
};
