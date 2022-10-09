import { LEVERS_COUNT } from "../game/models";

export const devModelNames: string[] = [];

export const devLeverNames: string[] = [];

const _failedIds: boolean[] = [];

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
  }
};

export const devVerifyModelsNextUpdate = (currentId: number, expectedId: number) => {
  if (DEBUG && expectedId !== currentId && !_failedIds[currentId]) {
    console.log(
      new Error(
        `modelsNextUpdate(${devModelNames[expectedId]}) model id ${expectedId}, got ${currentId} (${devModelNames[currentId]})`,
      ),
    );
  }
};
