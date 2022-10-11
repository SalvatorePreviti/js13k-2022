import { allModels, levers, souls } from "./models";
import { mainMenuVisible } from "./game-time";
import { gl } from "../gl";
import { MODEL_ID_PLAYER_BODY, MODEL_ID_PLAYER_LEG1, MODEL_ID_LEVER, MODEL_ID_SOUL } from "./models-ids";

export const renderModels = (renderPlayer?: boolean) => {
  if (mainMenuVisible) {
    if (hC.width > 1100) {
      // Render player in main menu
      gl.drawElements(
        gl.TRIANGLES,
        allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! - allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!,
        gl.UNSIGNED_SHORT,
        allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin! * 2,
      );
    }
  } else {
    if (renderPlayer !== undefined) {
      // Render souls
      gl.drawElementsInstanced(
        gl.TRIANGLES,
        allModels[MODEL_ID_SOUL]!.$vertexEnd! - allModels[MODEL_ID_SOUL]!.$vertexBegin!,
        gl.UNSIGNED_SHORT,
        allModels[MODEL_ID_SOUL]!.$vertexBegin! * 2,
        souls.length,
      );
    }

    // Render levers

    gl.drawElementsInstanced(
      gl.TRIANGLES,
      allModels[MODEL_ID_LEVER]!.$vertexEnd! - allModels[MODEL_ID_LEVER]!.$vertexBegin!,
      gl.UNSIGNED_SHORT,
      allModels[MODEL_ID_LEVER]!.$vertexBegin! * 2,
      levers.length,
    );

    // Render world

    gl.drawElements(
      gl.TRIANGLES,
      (renderPlayer ? allModels[MODEL_ID_PLAYER_LEG1]!.$vertexEnd! : allModels[MODEL_ID_PLAYER_BODY]!.$vertexBegin!) -
        3,
      gl.UNSIGNED_SHORT,
      3 * 2,
    );
  }
};
