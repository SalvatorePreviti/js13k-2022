import path from "path";
import fs from "fs";
import { colors, devLog, numberFixedString, prettySize, TermBox, utf8ByteLength } from "@balsamic/dev";
import { makePathRelative } from "@balsamic/dev/path";

export const JS13K_SIZE_IN_BYTES = 13312;

const _colorFilePath = colors.rgb(200, 255, 240);
const _colorFileType = colors.rgb(100, 170, 245);
const _colorFileSize = colors.rgb(100, 210, 255);
const _colorByteSize = colors.rgb(60, 200, 255);

type SizeType = utf8ByteLength.Input;

export function coloredPrettySize(bytes: SizeType): string {
  bytes = utf8ByteLength(bytes);
  const psize = prettySize(bytes).padStart(9);
  const pbytes = ` ${bytes | 0} Bytes`.padStart(14);
  return _colorFileSize(psize) + _colorByteSize(pbytes);
}

function _getFileSizeRow(name: string, value: SizeType) {
  const bytes = Math.round(utf8ByteLength(value));
  if (path.isAbsolute(name)) {
    name = makePathRelative(name);
  }
  const pname = _colorFileType(name.padEnd(9));
  return `${pname} ${coloredPrettySize(bytes)}`;
}

export class FilesSizeTermBox extends TermBox {
  public totalValue: number = 0;
  private _total: number = 0;

  public row(name: string, value: string): this {
    if (path.isAbsolute(name)) {
      name = makePathRelative(name);
    }
    const pname = _colorFileType(name.padEnd(10));
    return this.writeln(`${pname} ${value}`);
  }

  public sizeRow(name: string, ...values: SizeType[]): this {
    const bytes = Math.round(utf8ByteLength(...values)) || 0;
    this._total += bytes;
    return this.row(name, coloredPrettySize(bytes));
  }

  public sizeRowOptional(name: string, ...values: SizeType[]) {
    const bytes = Math.round(utf8ByteLength(...values));
    return bytes ? this.sizeRow(name, bytes) : this;
  }

  public totalClear(): this {
    this._total = 0;
    this.totalValue = 0;
    return this;
  }

  public totalSum(): this {
    this.totalValue = this._total;
    this._total = 0;
    return this;
  }

  public totalSet(...values: SizeType[]): this {
    this.totalValue = Math.round(utf8ByteLength(...values)) || 0;
    return this;
  }

  public totalAdd(...values: SizeType[]): this {
    this._total += Math.round(utf8ByteLength(...values)) || 0;
    return this;
  }

  public totalRow(name: string, ...values: SizeType[]): this {
    if (values.length === 0) {
      this.totalSum();
    } else {
      this.totalValue = Math.round(utf8ByteLength(...values)) || 0;
    }
    this.row(name, coloredPrettySize(this.totalValue));
    return this;
  }

  public diffRow(name: string, a: SizeType, b?: SizeType): this {
    if (b === undefined) {
      if (!this.totalValue) {
        this.totalSum();
      }
      b = this.totalValue;
    }
    return this.row(name, sizeDifference(a, b, { pad: true, colors: true }));
  }

  public override print(append?: string | undefined): this {
    super.print();
    if (append !== undefined) {
      this.output.log(append);
    }
    return this;
  }

  public static override begin(options?: TermBox.Options): FilesSizeTermBox {
    return new FilesSizeTermBox(options);
  }

  public static final(totalBytes: number): boolean {
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
          `${"max".padEnd(6)} ${prettySize(JS13K_SIZE_IN_BYTES, { appendBytes: false }).padStart(
            9,
          )} ${JS13K_SIZE_IN_BYTES.toString().padStart(7)} Bytes`,
        ),
      )
      .writeln(
        clr(
          `${"left".padEnd(6)} ${coloredBytesLeft(
            prettySize(bytesLeft, { appendBytes: false }).padStart(9),
          )} ${coloredBytesLeft(`${bytesLeft.toString().padStart(7)} Bytes ${emoji} `)}`,
        ),
      )
      .hr()
      .writeln(
        clr(
          `${"total".padEnd(6)} ${coloredBytesTotal(
            prettySize(totalBytes, { appendBytes: false }).padStart(9),
          )} ${coloredBytesTotal(`${totalBytes.toString().padStart(7)} Bytes`)}`,
        ),
      )
      .print();

    devLog.log();
    devLog.capacityBar({ value: totalBytes, max: JS13K_SIZE_IN_BYTES, width: 59 });

    return bytesLeft >= 0;
  }
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
  a: SizeType,
  b: SizeType,
  { pad = true, colors: withColors = true }: { pad?: boolean; colors?: boolean } = {},
) {
  a = utf8ByteLength(a);
  b = utf8ByteLength(b);
  const d = b - a;
  const r = b / a || 0;
  const percent = numberFixedString(r * 100, { decimalDigits: 2, padStart: pad ? 8 : undefined, postix: "%" });
  const size = numberFixedString(d, { decimalDigits: 0, padStart: pad ? 14 : undefined, sign: true, postix: " Bytes" });
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
