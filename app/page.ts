import type { KEY_CODE } from "./utils/keycodes";
import { camera_rotation } from "./camera";
import {
  absoluteTime,
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

export let player_first_person: 0 | 1 | undefined;

export let touch_movementX = 0;

export let touch_movementY = 0;

export const initPage = () => {
  let touchStartTime: number | undefined;

  let touchPosX: number | undefined;
  let touchPosY: number | undefined;
  let touchPosIdentifier: number | undefined;
  let touchPosMoved: number | undefined;

  let touchRotX: number | undefined;
  let touchRotY: number | undefined;
  let touchRotIdentifier: number | undefined;
  let touchRotMoved: number | undefined;
  let touchStartCameraRotX: number | undefined;
  let touchStartCameraRotY: number | undefined;

  let pageClicked: undefined | 1;

  let music_on = !DEBUG;

  const updateMusicOnState = () => {
    if (mainMenuVisible || !music_on) {
      songAudioSource.disconnect();
    } else {
      // connect the AudioBufferSourceNode to the  destination so we can hear the sound
      songAudioSource.connect(audioContext.destination);
    }
    b4.innerHTML = "music: " + music_on;
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
            touchRotIdentifier = identifier;
            touchRotX = pageX;
            touchRotY = pageY;
            touchRotMoved = 0;
            touchStartCameraRotX = camera_rotation.y;
            touchStartCameraRotY = camera_rotation.x;
          }
        } else if (touchPosIdentifier === undefined) {
          touchPosIdentifier = identifier;
          touchPosX = pageX;
          touchPosY = pageY;
          touchPosMoved = 0;
        }
      }
      touchStartTime = absoluteTime;
    }
  };

  const TOUCH_SIZE = 20;
  const TOUCH_MOVE_THRESHOLD = 0.4;

  hC.ontouchmove = (e) => {
    if (!mainMenuVisible) {
      for (const { pageX, pageY, identifier } of e.changedTouches) {
        if (touchRotIdentifier === identifier) {
          camera_rotation.y = touchStartCameraRotX! + (pageX - touchRotX!) / 2.3;
          camera_rotation.x = touchStartCameraRotY! + (pageY - touchRotY!) / 2.3;
          touchRotMoved = 1;
        }
        if (touchPosIdentifier === identifier) {
          let delta = (touchPosX! - pageX) / TOUCH_SIZE;
          let sign = delta < 0 ? -1 : 1;
          let absDelta = sign * delta;

          if (absDelta > TOUCH_MOVE_THRESHOLD) {
            touchPosMoved = 1;
            touch_movementX = sign * absDelta ** 1.5;
            if (absDelta > 1.5) {
              touchPosX = pageX + TOUCH_SIZE * sign;
            }
          }

          delta = (touchPosY! - pageY) / TOUCH_SIZE;
          sign = delta < 0 ? -1 : 1;
          absDelta = sign * delta;
          if (absDelta > TOUCH_MOVE_THRESHOLD) {
            touchPosMoved = 1;
            touch_movementY = sign * absDelta ** 1.5;
            if (absDelta > 1.5) {
              touchPosY = pageY + TOUCH_SIZE * sign;
            }
          }
        }
      }
    }
  };

  hC.ontouchend = (e) => {
    e.preventDefault();

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

  document.onvisibilitychange = onblur = onresize = handleResize;

  handleResize();
  mainMenu(!DEBUG);
};
