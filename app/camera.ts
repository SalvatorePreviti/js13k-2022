import { SQRT2 } from "./math/math";
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
import type { ViewCamera } from "./math/view-camera";
import { ViewCamera_new, ViewCamera_firstPersonMove, ViewCamera_firstPersonRotate } from "./math/view-camera";

export const camera: ViewCamera = ViewCamera_new();

export const PLAYER_SPEED_WALKING = 2.1;

export const PLAYER_SPEED_RUNNING = DEBUG ? 20 : 5.5;

export const camera_update = (deltaTime: number) => {
  const movStrafe = (keyboard_downKeys[KEY_LEFT] ? -1 : 0) + (keyboard_downKeys[KEY_RIGHT] ? 1 : 0);
  const movForward = (keyboard_downKeys[KEY_UP] ? -1 : 0) + (keyboard_downKeys[KEY_DOWN] ? 1 : 0);

  const movSpeed = (keyboard_downKeys[KEY_RUN] ? PLAYER_SPEED_RUNNING : PLAYER_SPEED_WALKING) * deltaTime;

  // normalize the forward and strafe movements if both strafe and forward are set
  const playerSpeed = movStrafe && movForward ? movSpeed / SQRT2 : movSpeed;

  ViewCamera_firstPersonRotate(camera, mouse_movementX * 0.002, mouse_movementY * 0.002);

  mouse_movementReset();

  ViewCamera_firstPersonMove(camera, movStrafe * playerSpeed, movForward * playerSpeed);

  if (DEBUG) {
    camera.$position.y +=
      ((keyboard_downKeys[KEY_DEBUG_FLY_UP] ? -1 : 0) + (keyboard_downKeys[KEY_DEBUG_FLY_DOWN] ? 1 : 0)) * movSpeed;
  }
};
