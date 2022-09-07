import { LOCAL_STORAGE_SAVED_GAME_KEY } from "./game/world-state";
import { handleResize } from "./input";

export let mainMenuVisible: boolean | undefined;

export const setMainMenuVisible = (value: boolean) => {
  if (mainMenuVisible !== value) {
    handleResize();
    mainMenuVisible = value;
    if (mainMenuVisible) {
      document.exitPointerLock();
    }
    document.body.className = value ? "l m" : "l";
  }
};

export const initHtmlElements = () => {
  // HTML elements

  b1.onclick = () => setMainMenuVisible(false);

  b2.onclick = () => hC.requestPointerLock();

  b3.onclick = () => {
    // eslint-disable-next-line no-alert
    if (confirm("Delete saved game and restart?")) {
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = "";
      location.reload();
    }
  };
};
