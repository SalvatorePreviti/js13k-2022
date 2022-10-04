window.NO_INLINE = (fn) => fn;
window.DEBUG_CAMERA = false;

const keyboard_downKeys = new Set<KEY_CODE>();
window.dev_keyboard_downKeys = keyboard_downKeys;

import { camera_rotation } from "../game/world-state";
import { angle_wrap_degrees, DEG_TO_RAD } from "../math/math";
import type { Vec3 } from "../math/vectors";
import { camera_position_x, camera_position_y, camera_position_z, set_camera_position } from "../game/player";
import type { KEY_CODE } from "../utils/keycodes";

export const debug_camera_position: Vec3 = { x: 0, y: 0, z: 0 };

export const debug_camera_rotation: Vec3 = { x: 0, y: 0, z: 0 };

const debug_camera_old_position: Vec3 = { ...debug_camera_position };

const debug_camera_old_rotation: Vec3 = { ...debug_camera_rotation };

let debug_camera_old_enabled = !!window.DEBUG_CAMERA;
let debug_old_flag0 = !!window.DEBUG_FLAG0;
let debug_old_flag1 = !!window.DEBUG_FLAG1;
let debug_old_flag2 = !!window.DEBUG_FLAG2;
let debug_old_flag3 = !!window.DEBUG_FLAG3;

export let debug_camera_version = 0;

let _mouseDown = false;
let mouse_movementX = 0;
let mouse_movementY = 0;

export function debug_camera_zero() {
  debug_camera_position.x = 0;
  debug_camera_position.y = 0;
  debug_camera_position.z = 0;

  debug_camera_rotation.x = 0;
  debug_camera_rotation.y = 0;
  debug_camera_rotation.z = 0;
}

export function debug_camera_save() {
  debug_camera_old_enabled = !!window.DEBUG_CAMERA;
  debug_old_flag0 = !!window.DEBUG_FLAG0;
  debug_old_flag1 = !!window.DEBUG_FLAG1;
  debug_old_flag2 = !!window.DEBUG_FLAG2;
  debug_old_flag3 = !!window.DEBUG_FLAG3;

  localStorage.setItem(
    "DEV_CAMERA",
    JSON.stringify({
      pos: debug_camera_position,
      rot: debug_camera_rotation,
      debugCamera: debug_camera_old_enabled,
      DEBUG_FLAG0: debug_old_flag0,
      DEBUG_FLAG1: debug_old_flag1,
      DEBUG_FLAG2: debug_old_flag2,
      DEBUG_FLAG3: debug_old_flag3,
    }),
  );
}

export function debug_camera_load() {
  const debugCameraSaved = localStorage.getItem("DEV_CAMERA") || "";
  let savedDebugCameraContent;
  if (debugCameraSaved) {
    try {
      savedDebugCameraContent = JSON.parse(debugCameraSaved);
    } catch {}
  }
  const { pos, rot, debugCamera, DEBUG_FLAG0, DEBUG_FLAG1, DEBUG_FLAG2, DEBUG_FLAG3 } = savedDebugCameraContent || {};
  if (pos) {
    debug_camera_position.x = pos.x;
    debug_camera_position.y = pos.y;
    debug_camera_position.z = pos.z;
  }
  if (rot) {
    debug_camera_rotation.x = rot.x;
    debug_camera_rotation.y = rot.y;
    debug_camera_rotation.z = rot.z;
  }
  window.DEBUG_CAMERA = !!debugCamera;
  window.DEBUG_FLAG0 = !!DEBUG_FLAG0;
  window.DEBUG_FLAG1 = !!DEBUG_FLAG1;
  window.DEBUG_FLAG2 = !!DEBUG_FLAG2;
  window.DEBUG_FLAG3 = !!DEBUG_FLAG3;
}

export function devInit() {
  debug_camera_load();

  window.addEventListener("blur", () => {
    keyboard_downKeys.clear();
    _mouseDown = false;
    mouse_movementX = 0;
    mouse_movementY = 0;
  });

  console.log("DEV");

  window.addEventListener("keydown", ({ code, target }) => {
    if (target === document.body) {
      keyboard_downKeys.add(code as KEY_CODE);
    } else {
      keyboard_downKeys.delete(code as KEY_CODE);
    }
  });

  window.addEventListener("keyup", ({ code }) => {
    keyboard_downKeys.delete(code as KEY_CODE);
  });

  window.addEventListener("mouseup", () => {
    _mouseDown = false;
  });

  window.addEventListener("mousedown", ({ target, buttons }) => {
    _mouseDown = (buttons === 1 && target === document.body) || target === hC;
  });

  window.addEventListener("mousemove", ({ buttons, movementX, movementY }) => {
    if (buttons > 0 && _mouseDown && document.activeElement) {
      mouse_movementX += movementX;
      mouse_movementY += movementY;
    }
  });

  let lastNow: number = performance.now();
  let deltaTime: number = 0;

  function animationFrame(now: number) {
    window.requestAnimationFrame(animationFrame);
    deltaTime = (lastNow - now) / 1000;
    lastNow = now;

    const movStrafe =
      (keyboard_downKeys.has("Numpad4") || keyboard_downKeys.has("KeyH") ? 1 : 0) +
      (keyboard_downKeys.has("Numpad6") || keyboard_downKeys.has("KeyK") ? -1 : 0);

    const movForward =
      (keyboard_downKeys.has("Numpad8") || keyboard_downKeys.has("KeyU") ? 1 : 0) +
      (keyboard_downKeys.has("Numpad2") || keyboard_downKeys.has("Numpad5") || keyboard_downKeys.has("KeyJ") ? -1 : 0);

    const movVertical =
      (keyboard_downKeys.has("NumpadSubtract") || keyboard_downKeys.has("KeyO") ? -1 : 0) +
      (keyboard_downKeys.has("NumpadAdd") || keyboard_downKeys.has("KeyL") ? 1 : 0);

    if (movStrafe || movForward || movVertical) {
      if (!window.DEBUG_CAMERA) {
        window.DEBUG_CAMERA = true;
      } else {
        const movSpeed =
          (keyboard_downKeys.has("ShiftLeft") || keyboard_downKeys.has("ShiftRight") ? 20 : 5.5) * deltaTime;
        // normalize the forward and strafe movements if both strafe and forward are set
        const playerSpeed = movStrafe && movForward ? movSpeed / Math.SQRT2 : movSpeed;

        const x = movStrafe * playerSpeed;
        const z = movForward * playerSpeed;

        const yradians = debug_camera_rotation.y * DEG_TO_RAD;
        const c = Math.cos(yradians);
        const s = Math.sin(yradians);
        debug_camera_position.x += x * c - z * s;
        debug_camera_position.z += x * s + z * c;
        debug_camera_position.y += movVertical * movSpeed;
      }
    }

    const mx = mouse_movementX * 0.1;
    const my = mouse_movementY * 0.1;
    if (mx || my) {
      if (window.DEBUG_CAMERA) {
        debug_camera_rotation.y = angle_wrap_degrees(debug_camera_rotation.y + mx);
        debug_camera_rotation.x = Math.max(Math.min(debug_camera_rotation.x + my, 87), -87);
      }
      mouse_movementX = 0;
      mouse_movementY = 0;
    }

    if (!window.DEBUG_CAMERA) {
      debug_camera_position.x = camera_position_x;
      debug_camera_position.y = camera_position_y;
      debug_camera_position.z = camera_position_z;
      debug_camera_rotation.x = camera_rotation.x;
      debug_camera_rotation.y = camera_rotation.y;
    } else {
      set_camera_position(debug_camera_position.x, debug_camera_position.y, debug_camera_position.z);
      camera_rotation.x = debug_camera_rotation.x;
      camera_rotation.y = debug_camera_rotation.y;
    }

    if (
      debug_camera_old_position.x !== debug_camera_position.x ||
      debug_camera_old_position.y !== debug_camera_position.y ||
      debug_camera_old_position.z !== debug_camera_position.z ||
      debug_camera_old_rotation.x !== debug_camera_rotation.x ||
      debug_camera_old_rotation.y !== debug_camera_rotation.y ||
      debug_camera_old_rotation.z !== debug_camera_rotation.z ||
      debug_camera_old_enabled !== !!window.DEBUG_CAMERA ||
      debug_old_flag0 !== !!DEBUG_FLAG0 ||
      debug_old_flag1 !== !!DEBUG_FLAG1 ||
      debug_old_flag2 !== !!DEBUG_FLAG2 ||
      debug_old_flag3 !== !!DEBUG_FLAG3
    ) {
      ++debug_camera_version;
      debug_camera_save();
    }
  }

  window.requestAnimationFrame(animationFrame);

  // onkeydown = onkeyup = ({ code, target, type }) => {
  //   keyboard_downKeys[keyMap[code as KEY_CODE]!] = type[5] ? target === document.body : 0;
  // };

  // onmousedown = onmouseup = ({ target, buttons, type }: MouseEvent) => {
  //   _mouseDown = type[5] ? (buttons === 1 && target === document.body) || target === hC : 0;
  // };

  // onmousemove = ({ buttons, movementX, movementY }) => {
  //   if (((buttons > 0 && _mouseDown) || document.pointerLockElement) && document.activeElement) {
  //     mouse_movementX += movementX;
  //     mouse_movementY += movementY;
  //   }
  // };
}
