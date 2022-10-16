import {
  GAMEPAD_BUTTON_A,
  GAMEPAD_BUTTON_B,
  GAMEPAD_BUTTON_DOWN,
  GAMEPAD_BUTTON_LEFT,
  GAMEPAD_BUTTON_RIGHT,
  GAMEPAD_BUTTON_UP,
  GAMEPAD_BUTTON_X,
  GAMEPAD_BUTTON_Y,
  GAMEPAD_BUTTON_START,
  type KEY_CODE,
} from "./utils/keycodes";
import { abs, clamp, max, threshold } from "./math/math";
import { camera_rotation, resetGame } from "./game/world-state";
import { mainMenuVisible, setMainMenuVisible, absoluteTime, gameTimeDelta } from "./game/game-time";
import { audioBuffer } from "./music/music-player";
import { CSM_PLANE_DISTANCE, fieldOfViewAmount, mat_perspective, zFar, zNear } from "./math/matrix-perspective";

export let interact_pressed: 0 | 1;

export const resetInteractPressed = () => (interact_pressed = 0);

export let player_first_person: boolean | 0 | 1 | undefined;

export let input_forward = 0;

export let input_strafe = 0;

export let csm_projections: DOMMatrix[];

export let projection: DOMMatrix;

export const exit_player_first_person = () => (player_first_person = 0);

export let page_update = () => {
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
  let touch_movementX: number;
  let touch_movementY: number;

  let gamepadInteractPressed: 0 | 1 | undefined;

  let music_on = !DEBUG || !DEBUG_FLAG1;

  const keyboard_downKeys: (boolean | 0 | 1 | undefined)[] = [];

  const KEY_INTERACT = 0;
  const KEY_MENU = 1;
  const KEY_LEFT = 2;
  const KEY_RIGHT = 3;
  const KEY_FRONT = 4;
  const KEY_BACK = 5;

  let audioContext: AudioContext | undefined;
  let songAudioSource: AudioBufferSourceNode | undefined;

  const updateMusicOnState = () => {
    b4.innerHTML = "Music: " + music_on;
    if (songAudioSource) {
      if (mainMenuVisible || !music_on) {
        songAudioSource.disconnect();
      } else {
        // connect the AudioBufferSourceNode to the  destination so we can hear the sound
        songAudioSource.connect(audioContext!.destination);
      }
    }
  };

  const handleResize = () => {
    const mx = fieldOfViewAmount * ((hC.height = innerHeight) / (hC.width = innerWidth));
    projection = mat_perspective(zNear, zFar, mx, fieldOfViewAmount);
    csm_projections = [
      mat_perspective(zNear, CSM_PLANE_DISTANCE, mx, fieldOfViewAmount),
      mat_perspective(CSM_PLANE_DISTANCE, zFar, mx, fieldOfViewAmount),
    ];

    touchPosIdentifier = touchRotIdentifier = undefined;
    keyboard_downKeys.length =
      interact_pressed =
      gamepadInteractPressed =
      touch_movementX =
      touch_movementY =
      input_forward =
      input_strafe =
        0;

    if (document.hidden && !DEBUG) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      mainMenu(true);
    }
  };

  const mainMenu = (value: boolean) => {
    if (mainMenuVisible !== value) {
      setMainMenuVisible(value);
      handleResize();
      hB.className = value ? "l m" : "l";
      updateMusicOnState();
      if (value) {
        try {
          document.exitFullscreen().catch(() => false);
          document.exitPointerLock();
        } catch {}
      }
    }
  };

  const start = (firstPerson?: 0 | 1 | undefined) => {
    try {
      if (!audioContext) {
        audioContext = new AudioContext();
        songAudioSource = audioContext.createBufferSource();

        // Load the buffer into the audio source
        songAudioSource.buffer = audioBuffer;

        // Loop forever
        songAudioSource.loop = true;

        // Start
        songAudioSource.start();
      }

      hB.requestFullscreen().catch(() => false);
    } catch {}
    mainMenu(false);
    player_first_person = firstPerson;
  };

  if (!DEBUG) {
    oncontextmenu = () => false;
  }

  onclick = (e) => {
    if (!mainMenuVisible) {
      if (e.target === hC) {
        interact_pressed = 1;
      }
      if (player_first_person) {
        try {
          hC.requestPointerLock();
        } catch {}
      }
    }
  };

  // Menu hamburger button
  b5.onclick = () => mainMenu(true);

  // "Play first person" button
  b2.onclick = () => start(1);

  // "Play" button
  b1.onclick = () => start();

  // "Music" button
  b4.onclick = () => {
    music_on = !music_on;
    updateMusicOnState();
  };

  // "Restart" button
  b3.onclick = () => {
    // eslint-disable-next-line no-alert
    if (confirm("Restart game?")) {
      resetGame();
    }
  };

  onkeyup = onkeydown = (e) => {
    if (!e.repeat) {
      const pressed = !!e.type[5] && (!DEBUG || e.target === hB);

      const mapped = (
        {
          ["KeyE"]: KEY_INTERACT,
          ["Space"]: KEY_INTERACT,
          ["Enter"]: KEY_INTERACT,

          ["Escape"]: KEY_MENU,

          ["KeyA"]: KEY_LEFT,
          ["ArrowLeft"]: KEY_LEFT,

          ["KeyD"]: KEY_RIGHT,
          ["ArrowRight"]: KEY_RIGHT,

          ["KeyW"]: KEY_FRONT,
          ["ArrowUp"]: KEY_FRONT,

          ["KeyS"]: KEY_BACK,
          ["ArrowDown"]: KEY_BACK,
        } as Partial<Record<KEY_CODE, number>>
      )[e.code as KEY_CODE]!;

      keyboard_downKeys[mapped] = pressed;

      if (pressed) {
        if (mapped === KEY_INTERACT) {
          interact_pressed = 1;
        }
        if (mapped === KEY_MENU) {
          mainMenu(true);
        }
      }
    }
  };

  onmousemove = (e) => {
    if (player_first_person) {
      camera_rotation.y += 0.1 * e.movementX || 0;
      camera_rotation.x += 0.1 * e.movementY || 0;
    }
  };

  hC.ontouchstart = (e) => {
    if (!mainMenuVisible) {
      for (const { identifier, pageX, pageY } of e.changedTouches) {
        if (player_first_person && pageX > hC.clientWidth / 2) {
          if (touchRotIdentifier === undefined) {
            touchRotMoved = 0;
            touchRotX = pageX;
            touchRotY = pageY;
            touchRotIdentifier = identifier;
            touchStartCameraRotY = camera_rotation.x;
            touchStartCameraRotX = camera_rotation.y;
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

  const TOUCH_SIZE = 19;
  const TOUCH_MOVE_THRESHOLD = 0.3;
  const TOUCH_MOVE_SNAP = 0.2;

  hC.ontouchmove = (e) => {
    if (!mainMenuVisible) {
      for (const { identifier, pageX, pageY } of e.changedTouches) {
        if (touchRotIdentifier === identifier) {
          touchRotMoved = 1;
          camera_rotation.x = touchStartCameraRotY! + (pageY - touchRotY!) / 2;
          camera_rotation.y = touchStartCameraRotX! + (pageX - touchRotX!) / 2;
        }
        if (touchPosIdentifier === identifier) {
          const deltaX = (touchPosStartX! - pageX) / TOUCH_SIZE;
          const absDeltaX = abs(deltaX);
          const deltaY = (touchPosStartY! - pageY) / TOUCH_SIZE;
          const absDeltaY = abs(deltaY);

          const m = max(absDeltaX, absDeltaY) > TOUCH_MOVE_THRESHOLD;
          if (m) {
            // Moved, disable the click
            touchPosMoved = 1;
          }

          touch_movementX = clamp(deltaX, -1) * ((m && absDeltaX > TOUCH_MOVE_SNAP) as any);
          touch_movementY = clamp(deltaY, -1) * ((m && absDeltaY > TOUCH_MOVE_SNAP) as any);

          // Move the invisible joysticks
          if (absDeltaX > 2) {
            touchPosStartX = TOUCH_SIZE * (deltaX < 0 ? -1 : 1) + pageX;
          }
          if (absDeltaY > 2) {
            touchPosStartY = TOUCH_SIZE * (deltaY < 0 ? -1 : 1) + pageY;
          }
        }
      }
    }
  };

  hC.ontouchend = (e) => {
    if (document.activeElement === hB) {
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

    if (e.target === hC && click && touchStartTime) {
      const diff = absoluteTime - touchStartTime;
      if (diff > 0.02 && diff < 0.7) {
        interact_pressed = 1;
      }
    }
  };

  const getGamepadButtonState = (gamepad: Gamepad, index: number) =>
    gamepad.buttons[index]?.pressed || (gamepad.buttons[index]?.value as any) > 0 ? 1 : 0;

  page_update = () => {
    input_forward = touch_movementY + (keyboard_downKeys[KEY_FRONT] ? 1 : 0) - (keyboard_downKeys[KEY_BACK] ? 1 : 0);
    input_strafe = touch_movementX + (keyboard_downKeys[KEY_LEFT] ? 1 : 0) - (keyboard_downKeys[KEY_RIGHT] ? 1 : 0);

    const gamepad = navigator.getGamepads()[0];
    if (gamepad) {
      if (player_first_person) {
        camera_rotation.x += 80 * gameTimeDelta * threshold(gamepad.axes[3], 0.3);
        camera_rotation.y += 80 * gameTimeDelta * threshold(gamepad.axes[2], 0.3);
      }

      input_forward +=
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_UP) -
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_DOWN) -
        threshold(gamepad.axes[1], 0.2);

      input_strafe +=
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_LEFT) -
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_RIGHT) -
        threshold(gamepad.axes[0], 0.2);

      if (getGamepadButtonState(gamepad, GAMEPAD_BUTTON_START)) {
        mainMenu(true);
      }

      const interactButtonPressed =
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_X) ||
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_Y) ||
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_A) ||
        getGamepadButtonState(gamepad, GAMEPAD_BUTTON_B);

      if (interactButtonPressed && !gamepadInteractPressed) {
        interact_pressed = 1;
      }
      gamepadInteractPressed = interactButtonPressed;
    }
  };

  document.onpointerlockchange = () => {
    player_first_person = !!document.pointerLockElement;
  };
  document.onvisibilitychange = onblur = onresize = handleResize;

  mainMenu(!DEBUG || !!DEBUG_FLAG2);

  if (DEBUG) {
    console.log("fieldOfViewAmount:", fieldOfViewAmount);
  }
};
