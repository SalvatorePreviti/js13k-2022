import { camera_rotation } from "./camera";
import { gameTimeDelta } from "./game/world-state";
import { abs } from "./math";
import {
  keyboard_downKeys,
  KEY_BACK,
  KEY_FRONT,
  KEY_INTERACT,
  KEY_LEFT,
  KEY_RIGHT,
  mainMenuVisible,
  setMainMenuVisible,
} from "./page";
import {
  GAMEPAD_BUTTON_LEFT,
  GAMEPAD_BUTTON_RIGHT,
  GAMEPAD_BUTTON_UP,
  GAMEPAD_BUTTON_DOWN,
  GAMEPAD_BUTTON_START,
  GAMEPAD_BUTTON_A,
  GAMEPAD_BUTTON_X,
  GAMEPAD_BUTTON_B,
  GAMEPAD_BUTTON_Y,
} from "./utils/keycodes";

export let movement_strafe = 0;

export let movement_forward = 0;

export let player_first_person: boolean | undefined;

let _gamepadStartPressed = false;
let _gamepadInteractPressed = false;

export const input_frameUpdate = () => {
  player_first_person = !!document.pointerLockElement;
  movement_strafe = (keyboard_downKeys[KEY_LEFT] ? 1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? -1 : 0);
  movement_forward = (keyboard_downKeys[KEY_FRONT] ? 1 : 0) + (keyboard_downKeys[KEY_BACK] ? -1 : 0);

  const gamepad = navigator.getGamepads()[0];
  if (gamepad) {
    const { buttons, axes } = gamepad;
    const getGamepadButtonState = (index: number) => buttons[index]?.pressed || (buttons[index]?.value as any) > 0;
    const startPressed = getGamepadButtonState(GAMEPAD_BUTTON_START);

    movement_strafe +=
      (abs(-axes[0]!) > 0.2 ? Math.sign(-axes[0]!) : 0) +
      (getGamepadButtonState(GAMEPAD_BUTTON_LEFT) ? 1 : 0) +
      (getGamepadButtonState(GAMEPAD_BUTTON_RIGHT) ? -1 : 0);
    movement_forward +=
      (abs(-axes[1]!) > 0.2 ? Math.sign(-axes[1]!) : 0) +
      (getGamepadButtonState(GAMEPAD_BUTTON_UP) ? 1 : 0) +
      (getGamepadButtonState(GAMEPAD_BUTTON_DOWN) ? -1 : 0);

    if (player_first_person) {
      if (abs(axes[2]!) > 0.3) {
        camera_rotation.y += axes[2]! * 80 * gameTimeDelta;
      }
      if (abs(axes[3]!) > 0.3) {
        camera_rotation.x += axes[3]! * 80 * gameTimeDelta;
      }
    }

    if (_gamepadStartPressed !== startPressed) {
      _gamepadStartPressed = startPressed;
      if (startPressed) {
        setMainMenuVisible(!mainMenuVisible);
      }
    }

    const interactButtonPressed =
      getGamepadButtonState(GAMEPAD_BUTTON_A) ||
      getGamepadButtonState(GAMEPAD_BUTTON_X) ||
      getGamepadButtonState(GAMEPAD_BUTTON_Y) ||
      getGamepadButtonState(GAMEPAD_BUTTON_B);
    if (interactButtonPressed !== _gamepadInteractPressed) {
      _gamepadInteractPressed = interactButtonPressed;
      keyboard_downKeys[KEY_INTERACT] = interactButtonPressed;
    }
  }

  movement_strafe = Math.sign(movement_strafe);
  movement_forward = Math.sign(movement_forward);
};
