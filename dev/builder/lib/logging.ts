import path from "path";
import fsp from "fs/promises";
import {
  colors,
  devChildTask,
  devLog,
  numberFixedRound,
  numberFixedString,
  prettySize,
  TermBox,
  toUTF8,
  utf8ByteLength,
} from "@balsamic/dev";
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
  return `${_colorFileSize(psize)} ${_colorByteSize(pbytes)}`;
}

export interface GlobalReportRow {
  group: string;
  name: string;
  value: number | string | number[];
}

export const globalReport = {
  date: new Date().toISOString(),
  commit: "",
  files: {} as Record<string, number>,
  rows: [] as GlobalReportRow[],

  async append(): Promise<void> {
    const commit = (
      await devChildTask.spawn("git", ["rev-parse", "HEAD"], { shell: true, captureOutputText: true, timed: false })
    ).stdoutText.trim();
    await fsp.appendFile(
      "build-history.log",
      `${JSON.stringify({ ...globalReport, commit, uptime: numberFixedRound(process.uptime(), 2) })}\n`,
      "utf8",
    );
  },
};

export class FilesSizeTermBox extends TermBox {
  public totalValue: number = 0;
  private _total: number = 0;
  public group: string;

  public constructor(group: string, options?: TermBox.Options | undefined) {
    super(options);
    this.group = group;
  }

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
    globalReport.rows.push({ group: this.group, name, value: bytes });
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
    globalReport.rows.push({ group: this.group, name, value: this.totalValue });
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
    a = utf8ByteLength(a);
    b = utf8ByteLength(b);
    globalReport.rows.push({ group: this.group, name, value: [a, b] });
    return this.row(name, sizeDifference(a, b, { pad: true, colors: true }));
  }

  public override print(): this {
    super.print();
    return this;
  }

  public static new(group: string, options?: TermBox.Options | undefined): FilesSizeTermBox {
    return new FilesSizeTermBox(group, options);
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
    FilesSizeTermBox.new("final", { boxColor: coloredBytesLeft })
      .writeln(
        clr(
          `${"max".padEnd(10)} ${prettySize(JS13K_SIZE_IN_BYTES, { appendBytes: false }).padStart(
            9,
          )} ${`${JS13K_SIZE_IN_BYTES.toString()} Bytes`.padStart(14)}`,
        ),
      )
      .writeln(
        clr(
          `${"left".padEnd(10)} ${coloredBytesLeft(
            prettySize(bytesLeft, { appendBytes: false }).padStart(9),
          )} ${coloredBytesLeft(`${bytesLeft.toString()} Bytes`.padStart(14))}`,
        ),
      )
      .hr()
      .writeln(
        clr(
          `${"total".padEnd(10)} ${coloredBytesTotal(
            prettySize(totalBytes, { appendBytes: false }).padStart(9),
          )} ${coloredBytesTotal(`${totalBytes.toString()} Bytes`.padStart(14))}`,
        ),
      )
      .print();

    devLog.log();
    devLog.capacityBar({ label: emoji, value: totalBytes, max: JS13K_SIZE_IN_BYTES, width: 59 });

    return bytesLeft >= 0;
  }
}

export function sizeDifference(
  a: SizeType,
  b: SizeType,
  { pad = true, colors: withColors = true }: { pad?: boolean; colors?: boolean } = {},
) {
  a = utf8ByteLength(a);
  b = utf8ByteLength(b);
  const d = b - a;
  let r = b / a;
  if (!isFinite(r)) {
    r = 1;
  }
  const percent = numberFixedString(r * 100, { decimalDigits: 2, padStart: pad ? 9 : undefined, postix: "%" });
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

export function devPrintOjutputFileWritten(outputFilePath: string, content: SizeType) {
  outputFilePath = path.resolve(outputFilePath);
  const size = utf8ByteLength(content);
  const relativePath = makePathRelative(outputFilePath);
  globalReport.files = { [relativePath]: size, ...globalReport.files, [relativePath]: size };
  console.log(
    `${colors.greenBright("💾 write")} ${_colorFilePath(relativePath.padEnd(27))} ${coloredPrettySize(size)}`,
  );
}

export async function devWriteOutputFile(
  outputFilePath: string,
  content: string | Buffer | Uint8Array,
  encoding: "utf8" | undefined | null,
) {
  outputFilePath = path.resolve(outputFilePath);
  if (encoding === "utf8") {
    content = toUTF8(content);
    if (!content.startsWith("\ufeff")) {
      content = `\ufeff${content}`;
    }
    await fsp.writeFile(outputFilePath, content, "utf8");
  } else {
    await fsp.writeFile(outputFilePath, content);
  }
  devPrintOjutputFileWritten(outputFilePath, content);
}
