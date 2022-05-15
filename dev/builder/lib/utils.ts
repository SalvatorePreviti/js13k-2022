import path from "path";
import fs from "fs";
import { colors, devLog, numberFixedString, prettySize, utf8ByteLength } from "@balsamic/dev";
import { makePathRelative } from "@balsamic/dev/path";

export const JS13K_SIZE_IN_BYTES = 13312;

const _colorFilePath = colors.rgb(200, 255, 240);
const _colorFileType = colors.rgb(100, 170, 245);
const _colorFileSize = colors.rgb(100, 210, 255);
const _colorByteSize = colors.rgb(60, 200, 255);

export function coloredPrettySize(bytes: number | string | Uint8Array | null | undefined): string {
  bytes = utf8ByteLength(bytes);
  const psize = prettySize(bytes).padStart(9);
  const pbytes = ` ${bytes | 0} Bytes`.padStart(14);
  return _colorFileSize(psize) + _colorByteSize(pbytes);
}

function _getFileSizeRow(name: string, value: string | number | Uint8Array | Buffer | string | null | undefined) {
  const bytes = Math.round(utf8ByteLength(value));
  if (path.isAbsolute(name)) {
    name = makePathRelative(name);
  }
  const pname = _colorFileType(name.padEnd(9));
  return `${pname} ${coloredPrettySize(bytes)}`;
}

export function printFileSizes(
  values: Record<string, number | string | Uint8Array | null | undefined>,
  { total, previousTotal }: { total?: boolean | number | undefined; previousTotal?: number | undefined } = {},
) {
  const box = devLog.termBox();

  let count = 0;
  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined) {
      ++count;
      box.writeln(_getFileSizeRow(key, value));
    }
  }

  let tot = 0;
  if (typeof total === "number") {
    tot = total;
  } else {
    for (const value of Object.values(values)) {
      if (typeof value !== "boolean") {
        tot += utf8ByteLength(value);
      }
    }
  }

  const shouldPrintTotal = count > 1 && total;
  if (shouldPrintTotal || previousTotal) {
    box.hr();
    if (shouldPrintTotal) {
      box.writeln(_getFileSizeRow("total", tot));
    }
    if (previousTotal) {
      box.writeln(_colorFileType("difference ") + sizeDifference(previousTotal, tot, { pad: true }));
    }
  }

  box.print();
  devLog.log();
  return tot;
}

export function sizeDifference(
  a: number | string | Uint8Array,
  b: number | string | Uint8Array,
  { pad = true, colors: withColors = true }: { pad?: boolean; colors?: boolean } = {},
) {
  a = utf8ByteLength(a);
  b = utf8ByteLength(b);
  const d = b - a;
  const r = b / a || 0;
  const percent = numberFixedString(r * 100, { decimalDigits: 2, padStart: pad ? 8 : undefined, postix: "%" });
  const size = numberFixedString(d, { decimalDigits: 0, padStart: pad ? 13 : undefined, sign: true, postix: " Bytes" });
  const text = `${percent} ${size}`;
  return withColors ? (d <= 0 ? colors.green(text) : colors.yellow(text)) : text;
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
  const size = utf8ByteLength(content);
  console.log(
    `${colors.greenBright("💾 write")} ${_colorFilePath(
      makePathRelative(outputFilePath).padEnd(26, " "),
    )} ${coloredPrettySize(size)}`,
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
    coloredBytesTotal = colors.redBright;
    coloredBytesLeft = colors.redBright;
    emoji = bytesLeft <= 0 ? "😡" : "😲";
  } else if (bytesLeft < JS13K_SIZE_IN_BYTES / 2.8) {
    coloredBytesTotal = colors.yellow;
    coloredBytesLeft = colors.yellowBright;
    emoji = "😊";
  }

  const clr = devLog.getColor("notice");
  devLog
    .termBox({ boxColor: coloredBytesLeft })
    .writeln(
      clr(
        `${"max".padEnd(5)} ${prettySize(JS13K_SIZE_IN_BYTES, { appendBytes: false }).padStart(
          9,
        )} ${JS13K_SIZE_IN_BYTES.toString().padStart(7)} Bytes`,
      ),
    )
    .writeln(
      clr(
        `${"left".padEnd(5)} ${coloredBytesLeft(
          prettySize(bytesLeft, { appendBytes: false }).padStart(9),
        )} ${coloredBytesLeft(`${bytesLeft.toString().padStart(7)} Bytes ${emoji} `)}`,
      ),
    )
    .hr()
    .writeln(
      clr(
        `${"total".padEnd(5)} ${coloredBytesTotal(
          prettySize(totalBytes, { appendBytes: false }).padStart(9),
        )} ${coloredBytesTotal(`${totalBytes.toString().padStart(7)} Bytes`)}`,
      ),
    )
    .print();

  devLog.log();
  devLog.capacityBar({ value: totalBytes, max: JS13K_SIZE_IN_BYTES, width: 59 });

  return bytesLeft >= 0;
}
