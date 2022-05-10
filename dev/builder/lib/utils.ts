import path from "path";
import fs from "fs";
import { colors, devLog, prettySize, utf8ByteLength } from "@balsamic/dev";
import { makePathRelative } from "@balsamic/dev/path";

export const JS13K_SIZE_IN_BYTES = 13312;

const _colorFilePath = colors.rgb(200, 255, 240);
const _colorFileType = colors.rgb(100, 170, 245);
const _colorFileSize = colors.rgb(100, 200, 255);
const _boxColor = colors.rgb(50, 100, 200);
const _boxLine = "─".repeat(32);

function _getFileSizeRow(name: string, value: string | number | Uint8Array | Buffer | string | null | undefined) {
  const bytes = Math.round(utf8ByteLength(value));
  if (path.isAbsolute(name)) {
    name = makePathRelative(name);
  }

  const pname = _colorFileType(name.padEnd(7));
  const psize = prettySize(bytes).padStart(9);
  const pbytes = `${bytes} bytes`.padStart(14);

  return `${pname}${_colorFileSize(psize)}${colors.blueBright(pbytes)}`;
}

export function printFileSizes(
  values: Record<string, string | number | Uint8Array | Buffer | string | null | undefined | boolean>,
) {
  devLog.log(_boxColor(`\n┌${_boxLine}┐`));
  let printTotal = false;

  let count = 0;
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined) {
      continue;
    }
    if (typeof value === "boolean") {
      if (key === "total") {
        printTotal = value;
      }
      continue;
    }
    ++count;
    devLog.log(`${_boxColor("│")} ${_getFileSizeRow(key, value)} ${_boxColor("│")}`);
  }

  if (count > 1 && printTotal) {
    devLog.log(_boxColor(`├${_boxLine}┤`));
    let total = 0;
    for (const value of Object.values(values)) {
      if (typeof value !== "boolean") {
        total += utf8ByteLength(value);
      }
    }
    devLog.log(`${_boxColor("│")} ${_getFileSizeRow("total", total)} ${_boxColor("│")}`);
  }

  devLog.log(_boxColor(`└${_boxLine}┘\n`));
}

export function devLogBuilding(sourceFilder: string, targetFolder: string) {
  console.log(
    `🚧 ${colors.cyanBright.italic("building")} ${colors.cyan(makePathRelative(sourceFilder))} ${colors.green(
      "→",
    )} ${colors.cyan(makePathRelative(targetFolder))}\n`,
  );
}

export function devPrintOjutputFileWritten(outputFilePath: string, content: string | Buffer | Uint8Array) {
  outputFilePath = path.resolve(outputFilePath);
  console.log(
    `${colors.greenBright("💾 file")} ${_colorFilePath(makePathRelative(outputFilePath))} ${colors.greenBright(
      "written",
    )}  ${_colorFileSize(prettySize(content))}`,
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

  devLog.logCyan(
    `   ${colors.blueBright("max".padEnd(5))} ${prettySize(JS13K_SIZE_IN_BYTES, { appendBytes: false }).padStart(
      9,
    )} ${JS13K_SIZE_IN_BYTES.toString().padStart(6)} Bytes`,
  );
  devLog.logCyan(
    `   ${colors.blueBright("total".padEnd(5))} ${coloredBytesTotal(
      prettySize(totalBytes, { appendBytes: false }).padStart(9),
    )} ${coloredBytesTotal(`${totalBytes.toString().padStart(6)} Bytes`)}`,
  );
  devLog.logCyan(
    `   ${colors.blueBright("left".padEnd(5))} ${coloredBytesLeft(
      prettySize(bytesLeft, { appendBytes: false }).padStart(9),
    )} ${coloredBytesLeft(`${bytesLeft.toString().padStart(6)} Bytes ${emoji}`)}`,
  );
  devLog.log();
  devLog.capacityBar({ value: totalBytes, max: JS13K_SIZE_IN_BYTES, width: 80 });
}
