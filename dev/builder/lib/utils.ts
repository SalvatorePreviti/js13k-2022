import path from "path";
import fs from "fs";
import { colors, prettySize } from "@balsamic/dev";
import { makePathRelative } from "@balsamic/dev/path";

export const JS13K_SIZE_IN_BYTES = 13312;

interface DevOperation {
  name: string;
  hrTime: [number, number];
  hasChildren: boolean;
  blockBeginInfo?: string;
  level: number;
}

const _operationsStack: DevOperation[] = [];
let _nonstackedOperationsStack: DevOperation[] = [];

export function devGetCurrentOperation(): string | undefined {
  const nonstackLast = _nonstackedOperationsStack[_nonstackedOperationsStack.length - 1];
  if (nonstackLast && nonstackLast.name) {
    return nonstackLast.name;
  }
  const last = _operationsStack[_operationsStack.length - 1];
  return (last && last.name) || undefined;
}

export function devOperation(operation: {
  name: string;
  blockBeginInfo?: string;
  dontStack?: boolean;
  info?: string;
  duration?: number;
}) {
  devBeginOperation(operation.name, operation.blockBeginInfo, operation.dontStack);
  const popped = _operationsStack.pop();
  if (popped) {
    const duration = operation.duration;
    _devEndOperation(popped, operation.info, duration !== undefined ? duration : null);
  }
}

export function devBeginOperation(
  name: string,
  blockBeginInfo?: string,
  dontStack: boolean = false,
): (info?: string) => void {
  name = name || "...";

  const prev = _operationsStack[_operationsStack.length - 1];

  const level = prev ? prev.level + 1 : 0;

  if (prev && !prev.hasChildren) {
    prev.hasChildren = true;
    let s = colors.rgb(80, 130, 180)(`${"▬".repeat(prev.level)}▶`) + colors.rgb(120, 230, 255).italic(prev.name);
    if (prev.blockBeginInfo) {
      s += ` ${colors.rgb(50, 160, 255)(prev.blockBeginInfo)}`;
    }
    console.log(s);
  }

  const operation = {
    name,
    hrTime: process.hrtime(),
    hasChildren: false,
    blockBeginInfo,
    level,
  };
  if (dontStack) {
    _nonstackedOperationsStack.push(operation);
    return (info?: string) => {
      _nonstackedOperationsStack = _nonstackedOperationsStack.filter((x) => x !== operation);
      _devEndOperation(operation, info, undefined);
    };
  }

  _operationsStack.push(operation);
  return devEndOperation;
}

export function devEndOperation(info?: string) {
  const popped = _operationsStack.pop();
  if (popped) {
    _devEndOperation(popped, info, undefined);
  }
}

export function devLogBuilding(sourceFilder: string, targetFolder: string) {
  console.log(
    `🎮 ${colors.cyanBright.italic("building")} ${colors.cyan(makePathRelative(sourceFilder))} ${colors.green(
      "→",
    )} ${colors.cyan(makePathRelative(targetFolder))}\n`,
  );
}

function _devEndOperation(popped: DevOperation, info: string | undefined, duration: number | undefined | null) {
  const timeDiffiff = process.hrtime(popped.hrTime);
  const timeDiffMs = duration === undefined ? (timeDiffiff[0] * 1e9 + timeDiffiff[1]) * 1e-6 : duration;
  let s: string;
  if (popped.hasChildren) {
    s =
      colors.rgb(80, 130, 180)(`${"━".repeat(popped.level)}╸`) +
      colors.rgb(120, 230, 255).italic(popped.name.padEnd(23 - popped.level), " ") +
      (timeDiffMs !== null && !isNaN(timeDiffMs)
        ? colors.rgb(110, 170, 245)(`${timeDiffMs.toFixed(0).padStart(5, " ")} ms`)
        : "");
    if (info) {
      s += ` ${colors.rgb(100, 240, 255)(info)}`;
    }
  } else {
    s =
      colors.rgb(90, 90, 190)(`${"╾".repeat(popped.level)}╸`) +
      colors.rgb(120, 190, 255)(popped.name.padEnd(25 - popped.level, " ")) +
      (timeDiffMs !== null && !isNaN(timeDiffMs)
        ? colors.blueBright(`${timeDiffMs.toFixed(0).padStart(5, " ")} ms`)
        : "");
    if (info) {
      s += ` ${colors.rgb(100, 170, 245)(info)}`;
    }
  }

  console.log(s);
}

export function devPrintOjutputFileWritten(outputFilePath: string, content: string | Buffer | Uint8Array) {
  outputFilePath = path.resolve(outputFilePath);
  console.log(
    `${colors.greenBright("💾 file")} ${colors.rgb(
      200,
      255,
      240,
    )(makePathRelative(outputFilePath))} ${colors.greenBright("written")}  ${colors.rgb(
      80,
      200,
      100,
    )(prettySize(content))}`,
  );
}

export async function devWriteOutputFile(outputFilePath: string, content: string | Buffer | Uint8Array) {
  outputFilePath = path.resolve(outputFilePath);
  await fs.promises.writeFile(outputFilePath, content);
  devPrintOjutputFileWritten(outputFilePath, content);
}

export function devPrintJS13KFinalBundleSize(totalBytes: number) {
  let coloredBytesTotal = colors.green;
  let coloredBytesLeft = colors.greenBright;
  let emoji = "😇";
  const bytesLeft = JS13K_SIZE_IN_BYTES - totalBytes;
  if (bytesLeft < 5) {
    coloredBytesTotal = colors.red;
    coloredBytesLeft = colors.redBright;
    emoji = bytesLeft <= 0 ? "😡" : "😲";
  } else if (bytesLeft < JS13K_SIZE_IN_BYTES / 2.8) {
    coloredBytesTotal = colors.yellow;
    coloredBytesLeft = colors.yellowBright;
    emoji = "😊";
  }

  console.log(
    colors.cyan(
      `   ${colors.blueBright("max".padEnd(5))} ${prettySize(JS13K_SIZE_IN_BYTES, { appendBytes: false }).padStart(
        9,
      )} ${JS13K_SIZE_IN_BYTES.toString().padStart(6)} Bytes`,
    ),
  );
  console.log(
    colors.cyan(
      `   ${colors.blueBright("total".padEnd(5))} ${coloredBytesTotal(
        prettySize(totalBytes, { appendBytes: false }).padStart(9),
      )} ${coloredBytesTotal(`${totalBytes.toString().padStart(6)} Bytes`)}`,
    ),
  );
  console.log(
    colors.cyan(
      `   ${colors.blueBright("left".padEnd(5))} ${coloredBytesLeft(
        prettySize(bytesLeft, { appendBytes: false }).padStart(9),
      )} ${coloredBytesLeft(`${bytesLeft.toString().padStart(6)} Bytes ${emoji}`)}`,
    ),
  );
  console.log();
}
