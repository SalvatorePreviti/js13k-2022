export let mainMenuVisible: boolean | undefined;

import type { KEY_CODE } from "./utils/keycodes";
import { camera_rotation } from "./camera";
import { absoluteTime, LOCAL_STORAGE_SAVED_GAME_KEY } from "./game/world-state";
import { audioContext, songAudioSource } from "./music/audio-context";

export const KEY_LEFT = 0;

export const KEY_FRONT = 1;

export const KEY_RIGHT = 2;

export const KEY_BACK = 3;

export const KEY_INTERACT = 5;

export const keyboard_downKeys: (boolean | 0 | 1 | undefined)[] = [];

let music_on = !DEBUG;

export let player_first_person: 0 | 1 | undefined;

export let touch_movementX = 0;

export let touch_movementY = 0;

const updateMusicOnState = () => {
  if (mainMenuVisible || !music_on) {
    songAudioSource.disconnect();
  } else {
    // connect the AudioBufferSourceNode to the  destination so we can hear the sound
    songAudioSource.connect(audioContext.destination);
  }
  b4.innerHTML = "Music: " + music_on;
};

export const setMainMenuVisible = (value: boolean = false) => {
  if (mainMenuVisible !== value) {
    mainMenuVisible = value;
    player_first_person = 0;
    try {
      if (value) {
        document.exitPointerLock();
      } else {
        songAudioSource.start();
      }
    } catch {}

    document.body.className = value ? "l m" : "l";
    updateMusicOnState();
  }
};

export const initPage = () => {
  let cameraRotTouch: Touch | undefined;
  let cameraPosTouch: Touch | undefined;
  let pageClicked: undefined | 1;
  let touchStartCameraRotX = 0;
  let touchStartCameraRotY = 0;
  let touchStartTime = 0;

  const handleResize = () => {
    hC.width = innerWidth;
    hC.height = innerHeight;
    cameraRotTouch = cameraPosTouch = undefined;
    keyboard_downKeys.length = touch_movementX = touch_movementY = 0;
    if (document.hidden) {
      setMainMenuVisible(true);
    }
  };

  b1.onclick = () => setMainMenuVisible();

  // b2.ontouchend = () => (touch_first_person = 1);

  b2.onclick = () => {
    setMainMenuVisible();
    player_first_person = 1;
  };

  b3.onclick = () => {
    // eslint-disable-next-line no-alert
    if (confirm("Delete game progress?")) {
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
      location.reload();
    }
  };

  b4.onclick = () => {
    music_on = !music_on;
    updateMusicOnState();
  };

  // touch controls

  b5.onclick = () => setMainMenuVisible(true);

  onclick = () => {
    pageClicked = 1;
    if (!mainMenuVisible) {
      const diff = absoluteTime - touchStartTime;
      console.log(diff);
      if (!touchStartTime || (diff > 0.07 && diff < 0.8)) {
        keyboard_downKeys[KEY_INTERACT] = true;
      }
      if (player_first_person) {
        hC.requestPointerLock();
      }
    }
  };

  document.onvisibilitychange = onresize = onblur = handleResize;

  onkeydown = onkeyup = ({ code, target, type, repeat }) => {
    if (!repeat) {
      const pressed = !!type[5] && target === document.body;

      if (pressed && (code === "Escape" || (code === "Enter" && mainMenuVisible))) {
        if (!mainMenuVisible || pageClicked) {
          setMainMenuVisible(!mainMenuVisible);
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
      for (const touch of e.changedTouches) {
        if (player_first_person && touch.pageX > hC.clientWidth / 2) {
          if (!cameraRotTouch) {
            cameraRotTouch = touch;
            touchStartCameraRotX = camera_rotation.y;
            touchStartCameraRotY = camera_rotation.x;
          }
        } else if (!cameraPosTouch) {
          cameraPosTouch = touch;
        }
      }
      touchStartTime = absoluteTime;
    }
  };

  hC.ontouchmove = ({ changedTouches }) => {
    if (!mainMenuVisible) {
      for (const { pageX, pageY, identifier } of changedTouches) {
        if (cameraRotTouch?.identifier === identifier) {
          camera_rotation.y = touchStartCameraRotX + (pageX - cameraRotTouch.pageX) / 3;
          camera_rotation.x = touchStartCameraRotY + (pageY - cameraRotTouch.pageY) / 3;
        }
        if (cameraPosTouch?.identifier === identifier) {
          touch_movementX = -(pageX - cameraPosTouch.pageX) / 20;
          touch_movementY = -(pageY - cameraPosTouch.pageY) / 20;
        }
      }
    }
  };

  hC.ontouchend = (e) => {
    for (const touch of e.changedTouches) {
      if (touch.identifier === cameraRotTouch?.identifier) {
        cameraRotTouch = undefined;
      }
      if (touch.identifier === cameraPosTouch?.identifier) {
        cameraPosTouch = undefined;
        touch_movementY = touch_movementX = 0;
      }
    }
  };

  if (!DEBUG) {
    oncontextmenu = () => false;
  }

  handleResize();
  setMainMenuVisible(!DEBUG);
};
