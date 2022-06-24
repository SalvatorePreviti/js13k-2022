import {
  keyboard_downKeys,
  KEY_DEBUG_FLY_DOWN,
  KEY_DEBUG_FLY_UP,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_RUN,
  KEY_UP,
  mouse_movementReset,
  mouse_movementX,
  mouse_movementY,
} from "./input";
import { camera_firstPersonMove, camera_firstPersonRotate, camera_position } from "./camera";

export const PLAYER_SPEED_WALKING = 2.1;

export const PLAYER_SPEED_RUNNING = DEBUG ? 20 : 5.5;

export const camera_update = (deltaTime: number) => {
  const movStrafe = (keyboard_downKeys[KEY_LEFT] ? -1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? 1 : 0);
  const movForward = (keyboard_downKeys[KEY_UP] ? -1 : 0) + (keyboard_downKeys[KEY_DOWN] ? 1 : 0);

  const movSpeed = (keyboard_downKeys[KEY_RUN] ? PLAYER_SPEED_RUNNING : PLAYER_SPEED_WALKING) * deltaTime;

  // normalize the forward and strafe movements if both strafe and forward are set
  const playerSpeed = movStrafe && movForward ? movSpeed / Math.SQRT2 : movSpeed;

  camera_firstPersonMove(movStrafe * playerSpeed, movForward * playerSpeed);

  // if (DEBUG) {
  camera_position.y -=
    ((keyboard_downKeys[KEY_DEBUG_FLY_UP] ? -1 : 0) + (keyboard_downKeys[KEY_DEBUG_FLY_DOWN] ? 1 : 0)) * movSpeed;
  // }

  camera_firstPersonRotate(mouse_movementX * 0.1, mouse_movementY * 0.1);

  mouse_movementReset();
};
