import {
  LEVER_ID_GATE0,
  LEVER_ID_LEVEL1_DESCENT,
  LEVER_ID_ROTATING_CORRIDOR,
  LEVER_ID_CRYSTALS,
  LEVER_ID_MONUMENT,
  LEVER_ID_DETOUR,
  LEVER_ID_BEFORE_PUSHING_RODS,
  LEVER_ID_AFTER_PUSHING_RODS,
  LEVER_ID_AFTER_ROTATING_PLATFORMS,
  LEVER_ID_AFTER_JUMPING_PADS,
  LEVER_ID_BOAT0,
  LEVER_ID_BOAT1,
  LEVER_ID_GATE1,
  LEVER_ID_TRIANGLE_PLATFORM,
  LEVER_ID_DONUT_PAD,
  LEVER_ID_FLOATING_ELEVATOR,
} from "../game/levers-ids";
import { LEVERS_COUNT } from "../game/models";
import {
  MODEL_ID_STATIC_WORLD,
  MODEL_ID_SKY,
  MODEL_ID_BOAT0,
  MODEL_ID_BOAT1,
  MODEL_ID_DONUT_PAD,
  MODEL_ID_ELEVATORS0,
  MODEL_ID_ELEVATORS1,
  MODEL_ID_FLOATING_ELEVATOR_PAD,
  MODEL_ID_GATE0,
  MODEL_ID_GATE1,
  MODEL_ID_GATE2,
  MODEL_ID_GATE3,
  MODEL_ID_JUMPING_PAD0,
  MODEL_ID_JUMPING_PAD1,
  MODEL_ID_JUMPING_PAD2,
  MODEL_ID_LEVEL1_CENTRAL_PLATFORM,
  MODEL_ID_LEVEL2_BLACK_PLATFORM0,
  MODEL_ID_LEVEL2_BLACK_PLATFORM1,
  MODEL_ID_LEVEL2_CENTRAL_PLATFORM,
  MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR,
  MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL,
  MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL,
  MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR,
  MODEL_ID_MONUMENT,
  MODEL_ID_OSCILLATING_HEX_PAD0,
  MODEL_ID_OSCILLATING_HEX_PAD1,
  MODEL_ID_OSCILLATING_HEX_PAD2,
  MODEL_ID_OSCILLATING_HEX_PAD3,
  MODEL_ID_PENDULUMS,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  MODEL_ID_PUSHING_ROD0,
  MODEL_ID_PUSHING_ROD1,
  MODEL_ID_PUSHING_ROD2,
  MODEL_ID_ROTATING_PLATFORM0,
  MODEL_ID_ROTATING_PLATFORM1,
  MODEL_ID_ROTATING_PLATFORM2,
  MODEL_ID_ROTATING_PLATFORM3,
  MODEL_ID_SOUL,
  MODEL_ID_SOUL_COLLISION,
  MODEL_ID_TRIANGLE_PLATFORM,
  MODEL_ID_LEVER0,
  MODEL_ID_LEVER1,
  MODEL_ID_LEVER2,
  MODEL_ID_LEVER3,
  MODEL_ID_LEVER4,
  MODEL_ID_LEVER5,
  MODEL_ID_LEVER6,
  MODEL_ID_LEVER7,
  MODEL_ID_LEVER8,
  MODEL_ID_LEVER9,
  MODEL_ID_LEVER10,
  MODEL_ID_LEVER11,
  MODEL_ID_LEVER12,
  MODEL_ID_LEVER13,
  MODEL_ID_LEVER14,
  MODEL_ID_LEVER15,
} from "../game/models-ids";

export const devModelNames: string[] = [];

export const devLeverNames: string[] = [];

const _failedIds: boolean[] = [];

const LEVER_IDS = {
  LEVER_ID_GATE0,
  LEVER_ID_LEVEL1_DESCENT,
  LEVER_ID_ROTATING_CORRIDOR,
  LEVER_ID_CRYSTALS,
  LEVER_ID_MONUMENT,
  LEVER_ID_DETOUR,
  LEVER_ID_BEFORE_PUSHING_RODS,
  LEVER_ID_AFTER_PUSHING_RODS,
  LEVER_ID_AFTER_ROTATING_PLATFORMS,
  LEVER_ID_AFTER_JUMPING_PADS,
  LEVER_ID_BOAT0,
  LEVER_ID_BOAT1,
  LEVER_ID_GATE1,
  LEVER_ID_TRIANGLE_PLATFORM,
  LEVER_ID_DONUT_PAD,
  LEVER_ID_FLOATING_ELEVATOR,
};

const MODEL_IDS = {
  MODEL_ID_SKY,
  MODEL_ID_STATIC_WORLD,
  MODEL_ID_BOAT0,
  MODEL_ID_BOAT1,
  MODEL_ID_GATE0,
  MODEL_ID_GATE1,
  MODEL_ID_GATE2,
  MODEL_ID_GATE3,
  MODEL_ID_LEVEL1_CENTRAL_PLATFORM,
  MODEL_ID_LEVEL2_BLACK_PLATFORM0,
  MODEL_ID_LEVEL2_BLACK_PLATFORM1,
  MODEL_ID_LEVEL2_CENTRAL_PLATFORM,
  MODEL_ID_TRIANGLE_PLATFORM,
  MODEL_ID_LEVEL2_MINI_PLATFORM_VERTICAL,
  MODEL_ID_LEVEL2_MINI_PLATFORM_HORIZONTAL,
  MODEL_ID_LEVEL2_HEX_CORRIDOR_DOOR,
  MODEL_ID_LEVEL2_ROTATING_HEX_CORRIDOR,
  MODEL_ID_ELEVATORS0,
  MODEL_ID_ELEVATORS1,
  MODEL_ID_MONUMENT,
  MODEL_ID_PUSHING_ROD0,
  MODEL_ID_PUSHING_ROD1,
  MODEL_ID_PUSHING_ROD2,
  MODEL_ID_OSCILLATING_HEX_PAD0,
  MODEL_ID_OSCILLATING_HEX_PAD1,
  MODEL_ID_OSCILLATING_HEX_PAD2,
  MODEL_ID_OSCILLATING_HEX_PAD3,
  MODEL_ID_DONUT_PAD,
  MODEL_ID_ROTATING_PLATFORM0,
  MODEL_ID_ROTATING_PLATFORM1,
  MODEL_ID_ROTATING_PLATFORM2,
  MODEL_ID_ROTATING_PLATFORM3,
  MODEL_ID_JUMPING_PAD0,
  MODEL_ID_JUMPING_PAD1,
  MODEL_ID_JUMPING_PAD2,
  MODEL_ID_PENDULUMS,
  MODEL_ID_FLOATING_ELEVATOR_PAD,
  MODEL_ID_LEVER0,
  MODEL_ID_LEVER1,
  MODEL_ID_LEVER2,
  MODEL_ID_LEVER3,
  MODEL_ID_LEVER4,
  MODEL_ID_LEVER5,
  MODEL_ID_LEVER6,
  MODEL_ID_LEVER7,
  MODEL_ID_LEVER8,
  MODEL_ID_LEVER9,
  MODEL_ID_LEVER10,
  MODEL_ID_LEVER11,
  MODEL_ID_LEVER12,
  MODEL_ID_LEVER13,
  MODEL_ID_LEVER14,
  MODEL_ID_LEVER15,
  MODEL_ID_PLAYER_BODY,
  MODEL_ID_PLAYER_LEG0,
  MODEL_ID_PLAYER_LEG1,
  MODEL_ID_SOUL,
  MODEL_ID_SOUL_COLLISION,
};

export const devModelsAdd = (index: number, name: string) => {
  if (DEBUG) {
    devModelNames[index] = name;
  }
};

export const devLeverAdd = (index: number, name: string) => {
  if (DEBUG) {
    devLeverNames[index] = name;
  }
};

export const devAllModelsPrint = () => {
  if (DEBUG) {
    const printArray = (blockName: string, array: string[]) => {
      for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
          throw new Error("Missing " + blockName + " " + i);
        }
      }
      return "// " + blockName + "\n\n" + array.map((name, index) => `export const ${name} = ${index}`).join(";\n");
    };

    console.log(printArray("models", devModelNames));
    console.log(printArray("levers", devLeverNames));

    if (devLeverNames.length !== LEVERS_COUNT) {
      throw new Error("Levers are supposed to be " + LEVERS_COUNT + " but are " + devLeverNames.length);
    }

    for (let i = 0; i < devModelNames.length; ++i) {
      if ((MODEL_IDS as any)[devModelNames[i]!] !== i) {
        console.log(
          new Error(
            "Model " +
              devModelNames[i] +
              " is supposed to be " +
              i +
              " but is " +
              (MODEL_IDS as any)[devModelNames[i]!],
          ),
        );
      }
    }

    for (let i = 0; i < devLeverNames.length; ++i) {
      if ((LEVER_IDS as any)[devLeverNames[i]!] !== i) {
        console.error(
          new Error(
            "Lever " +
              devModelNames[i] +
              " is supposed to be " +
              i +
              " but is " +
              (MODEL_IDS as any)[devModelNames[i]!],
          ),
        );
      }
    }
  }
};

export const devVerifyModelsNextUpdate = (currentId: number, expectedId: number) => {
  if (DEBUG && expectedId !== currentId && !_failedIds[currentId]) {
    _failedIds[currentId] = true;
    console.error(
      new Error(
        `modelsNextUpdate(${devModelNames[expectedId]}) model id ${expectedId}, got ${currentId} (${devModelNames[currentId]})`,
      ),
    );
  }
};
