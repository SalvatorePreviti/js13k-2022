import type { KEY_CODE } from "./utils/keycodes";

export const KEY_LEFT = 0;

export const KEY_FRONT = 1;

export const KEY_RIGHT = 2;

export const KEY_BACK = 3;

export const KEY_RUN = 4;

export const KEY_DEBUG_FLY_UP = 5;

export const KEY_DEBUG_FLY_DOWN = 6;

export const keyboard_downKeys: (boolean | 0 | undefined)[] = [];

export let mouse_movementX = 0;

export let mouse_movementY = 0;

export const mouse_movementReset = () => (mouse_movementX = mouse_movementY = 0);

let _mouseDown: boolean | 0 | undefined;

const keyMap: Partial<Record<KEY_CODE, number>> = {
  ["KeyA"]: KEY_LEFT,
  ["ArrowLeft"]: KEY_LEFT,

  ["KeyW"]: KEY_FRONT,
  ["ArrowUp"]: KEY_FRONT,

  ["KeyD"]: KEY_RIGHT,
  ["ArrowRight"]: KEY_RIGHT,

  ["KeyS"]: KEY_BACK,
  ["ArrowDown"]: KEY_BACK,

  ["ShiftLeft"]: KEY_RUN,
  ["ShiftRight"]: KEY_RUN,

  ["KeyR"]: KEY_DEBUG_FLY_UP,
  ["KeyF"]: KEY_DEBUG_FLY_DOWN,
};

export const initInputHandlers = () => {
  if (!DEBUG) {
    oncontextmenu = () => false;
  }

  onblur = () => (keyboard_downKeys.length = _mouseDown = mouse_movementX = mouse_movementY = 0);

  onkeydown = onkeyup = ({ code, target, type }) => {
    keyboard_downKeys[keyMap[code as KEY_CODE]!] = type[5] ? target === document.body : 0;
  };

  onmousedown = onmouseup = ({ target, buttons, type }: MouseEvent) => {
    _mouseDown = type[5] ? (buttons === 1 && target === document.body) || target === hC : 0;
  };

  onmousemove = ({ buttons, movementX, movementY }) => {
    if (((buttons > 0 && _mouseDown) || document.pointerLockElement) && document.activeElement) {
      mouse_movementX += movementX;
      mouse_movementY += movementY;
    }
  };
};
