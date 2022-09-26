import type { KEY_CODE } from "./utils/keycodes";
import {
  GAMEPAD_BUTTON_A,
  GAMEPAD_BUTTON_B,
  GAMEPAD_BUTTON_DOWN,
  GAMEPAD_BUTTON_LEFT,
  GAMEPAD_BUTTON_RIGHT,
  GAMEPAD_BUTTON_UP,
  GAMEPAD_BUTTON_X,
  GAMEPAD_BUTTON_Y,
} from "./utils/keycodes";
import {
  absoluteTime,
  gameTimeDelta,
  keyboard_downKeys,
  KEY_BACK,
  KEY_FRONT,
  KEY_INTERACT,
  KEY_LEFT,
  KEY_RIGHT,
  LOCAL_STORAGE_SAVED_GAME_KEY,
  mainMenuVisible,
  setMainMenuVisible,
  updateCollectedSoulsCounter,
} from "./game/world-state";
import { songAudioSource, audioContext } from "./music/audio-context";
import type { Vec2 } from "./math";
import { abs, clamp, threshold } from "./math";

export let player_first_person: 0 | 1 | undefined;

export let movAngle = 0;

export let movAmount = 0;

export let updateInput: () => void;

export const camera_rotation: Vec2 = { x: 0, y: 180 } as Vec2;

export const initPage = () => {
  let touchStartTime: number | undefined;

  let touchPosStartX: number | undefined;
  let touchPosStartY: number | undefined;
  let touchPosIdentifier: number | undefined;
  let touchPosMoved: number | undefined;

  let touchRotX: number | undefined;
  let touchRotY: number | undefined;
  let touchRotIdentifier: number | undefined;
  let touchRotMoved: number | undefined;
  let touchStartCameraRotX: number | undefined;
  let touchStartCameraRotY: number | undefined;

  let gamepadInteractPressed: 0 | 1 | undefined;

  let touch_movementX: number;
  let touch_movementY: number;

  let pageClicked: undefined | 1;

  let music_on = !DEBUG || !DEBUG_FLAG1;

  const updateMusicOnState = () => {
    if (mainMenuVisible || !music_on) {
      songAudioSource.disconnect();
    } else {
      // connect the AudioBufferSourceNode to the  destination so we can hear the sound
      songAudioSource.connect(audioContext.destination);
    }
    b4.innerHTML = "Music: " + music_on;
  };

  const toggleMusic = () => {
    music_on = !music_on;
    updateMusicOnState();
  };

  const mainMenu = (value: boolean = false) => {
    if (mainMenuVisible !== value) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      setMainMenuVisible(value);
      try {
        if (value) {
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          document.exitFullscreen().catch(() => {});
          document.exitPointerLock();
        } else {
          songAudioSource.start();
        }
      } catch {}
      player_first_person = 0;
      document.body.className = value ? "l m" : "l";
      updateMusicOnState();
      updateCollectedSoulsCounter();
    }
  };

  const handleResize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    keyboard_downKeys.length = touch_movementX = touch_movementY = 0;
    touchPosIdentifier = touchRotIdentifier = undefined;
    if (document.hidden) {
      mainMenu(true);
    }
  };

  if (!DEBUG) {
    oncontextmenu = () => false;
  }

  // "Restart" button
  b3.onclick = () => {
    // eslint-disable-next-line no-alert
    if (confirm("Restart game?")) {
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
      location.reload();
    }
  };

  // "Play" button
  b1.onclick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    document.body.requestFullscreen();
    mainMenu();
  };

  // "Play first person" button
  b2.onclick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    document.body.requestFullscreen();
    mainMenu();
    player_first_person = 1;
  };

  // "Music" button
  b4.onclick = toggleMusic;

  // Menu hamburger button
  b5.onclick = () => mainMenu(true);

  onclick = (e) => {
    pageClicked = 1;
    if (!mainMenuVisible) {
      if (e.target === hC) {
        keyboard_downKeys[KEY_INTERACT] = true;
      }
      if (player_first_person) {
        hC.requestPointerLock();
      }
    }
  };

  onkeyup = onkeydown = ({ code, target, type, repeat }) => {
    if (!repeat) {
      const pressed = !!type[5] && target === document.body;

      if (pressed && (code === "Escape" || (code === "Enter" && mainMenuVisible))) {
        if (!mainMenuVisible || pageClicked) {
          mainMenu(!mainMenuVisible);
        }
      } else {
        const mapped = (
          {
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
          } as Partial<Record<KEY_CODE, number>>
        )[code as KEY_CODE]!;
        if (mapped === KEY_INTERACT) {
          if (pressed) {
            keyboard_downKeys[mapped] = 1;
          }
        } else {
          keyboard_downKeys[mapped] = pressed;
        }
      }
    }
  };

  onmousemove = ({ movementX, movementY }) => {
    if (player_first_person && (movementX || movementY)) {
      camera_rotation.y += movementX * 0.1;
      camera_rotation.x += movementY * 0.1;
    }
  };

  hC.ontouchstart = (e) => {
    if (!mainMenuVisible) {
      for (const { pageX, pageY, identifier } of e.changedTouches) {
        if (player_first_person && pageX > hC.clientWidth / 2) {
          if (touchRotIdentifier === undefined) {
            touchRotMoved = 0;
            touchRotX = pageX;
            touchRotY = pageY;
            touchRotIdentifier = identifier;
            touchStartCameraRotX = camera_rotation.y;
            touchStartCameraRotY = camera_rotation.x;
          }
        } else if (touchPosIdentifier === undefined) {
          touchPosMoved = 0;
          touchPosStartX = pageX;
          touchPosStartY = pageY;
          touchPosIdentifier = identifier;
        }
      }
      touchStartTime = absoluteTime;
    }
  };

  const TOUCH_SIZE = 20;
  const TOUCH_MOVE_THRESHOLD = 0.5;
  const TOUCH_MOVE_SNAP = 0.2;

  hC.ontouchmove = (e) => {
    if (!mainMenuVisible) {
      for (const { pageX, pageY, identifier } of e.changedTouches) {
        if (touchRotIdentifier === identifier) {
          camera_rotation.y = touchStartCameraRotX! + (pageX - touchRotX!) / 2.3;
          camera_rotation.x = touchStartCameraRotY! + (pageY - touchRotY!) / 2.3;
          touchRotMoved = 1;
        }
        if (touchPosIdentifier === identifier) {
          const deltaX = (touchPosStartX! - pageX) / TOUCH_SIZE;
          const deltaY = (touchPosStartY! - pageY) / TOUCH_SIZE;
          const absDeltaX = abs(deltaX);
          const absDeltaY = abs(deltaY);

          const angle = Math.atan2(deltaY, deltaX);
          const speed = clamp(Math.hypot(deltaY, deltaX) - TOUCH_MOVE_THRESHOLD);

          touch_movementX = absDeltaX > TOUCH_MOVE_SNAP ? Math.cos(angle) * speed : 0;
          touch_movementY = absDeltaY > TOUCH_MOVE_SNAP ? Math.sin(angle) * speed : 0;

          if (touch_movementX || touch_movementY) {
            // Moved, disable the click
            touchPosMoved = 1;
          }

          // Move the invisible joysticks
          if (absDeltaX > 2) {
            touchPosStartX = pageX + Math.sign(deltaX) * TOUCH_SIZE;
          }
          if (absDeltaY > 2) {
            touchPosStartY = pageY + Math.sign(deltaY) * TOUCH_SIZE;
          }
        }
      }
    }
  };

  hC.ontouchend = (e) => {
    if (document.activeElement === document.body) {
      e.preventDefault();
    }

    let click: 1 | undefined;
    for (const touch of e.changedTouches) {
      if (touch.identifier === touchRotIdentifier) {
        touchRotIdentifier = undefined;
        if (!touchRotMoved) {
          click = 1;
        }
        touchRotMoved = 0;
      } else if (touch.identifier === touchPosIdentifier) {
        touchPosIdentifier = undefined;
        touch_movementY = touch_movementX = 0;
        if (!touchPosMoved) {
          click = 1;
        }
        touchPosMoved = 0;
      } else {
        click = 1;
      }
    }

    if (click && e.target === hC && touchStartTime) {
      const diff = absoluteTime - touchStartTime;
      if (diff > 0.02 && diff < 0.7) {
        keyboard_downKeys[KEY_INTERACT] = true;
      }
    }
  };

  updateInput = () => {
    let input_forward =
      touch_movementY + (keyboard_downKeys[KEY_FRONT] ? 1 : 0) - (keyboard_downKeys[KEY_BACK] ? 1 : 0);
    let input_strafe = touch_movementX + (keyboard_downKeys[KEY_LEFT] ? 1 : 0) - (keyboard_downKeys[KEY_RIGHT] ? 1 : 0);

    const gamepad = navigator.getGamepads()[0];
    if (gamepad) {
      const { buttons, axes } = gamepad;
      const getGamepadButtonState = (index: number) =>
        buttons[index]?.pressed || (buttons[index]?.value as any) > 0 ? 1 : 0;

      const interactButtonPressed =
        getGamepadButtonState(GAMEPAD_BUTTON_X) ||
        getGamepadButtonState(GAMEPAD_BUTTON_Y) ||
        getGamepadButtonState(GAMEPAD_BUTTON_A) ||
        getGamepadButtonState(GAMEPAD_BUTTON_B);

      input_forward +=
        getGamepadButtonState(GAMEPAD_BUTTON_UP) - getGamepadButtonState(GAMEPAD_BUTTON_DOWN) - threshold(axes[1], 0.2);

      input_strafe +=
        getGamepadButtonState(GAMEPAD_BUTTON_LEFT) -
        getGamepadButtonState(GAMEPAD_BUTTON_RIGHT) -
        threshold(axes[0], 0.2);

      if (player_first_person) {
        camera_rotation.x += gameTimeDelta * threshold(axes[3], 0.3) * 80;
        camera_rotation.y += gameTimeDelta * threshold(axes[2], 0.3) * 80;
      }

      if (interactButtonPressed && !gamepadInteractPressed) {
        keyboard_downKeys[KEY_INTERACT] = 1;
      }
      gamepadInteractPressed = interactButtonPressed;
    }

    movAngle = Math.atan2(input_forward, input_strafe);
    movAmount = threshold(clamp(Math.hypot(input_forward, input_strafe)), 0.05);
  };

  document.onvisibilitychange = onblur = onresize = handleResize;

  handleResize();
  mainMenu(!DEBUG || DEBUG_FLAG2);
};
