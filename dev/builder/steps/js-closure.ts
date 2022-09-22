import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import type { CompileOptions } from "google-closure-compiler";
import { compiler as ClosureCompilerClass, type Compiler as ClosureCompilerBase } from "google-closure-compiler";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { outPath_temp } from "../out-paths";
import { dprint } from "./dprint";
import type { ChildProcess } from "child_process";
import { Readable } from "stream";

interface ClosureCompiler extends ClosureCompilerBase {
  commandArguments: string[];
}

export interface StreamedClosureCompilerOptions {
  compilation_level: "ADVANCED" | "SIMPLE" | "WHITESPACE_ONLY";
  beautify: boolean;
  rename_variable_prefix?: string;
}

export class StreamedClosureCompiler {
  private _compilerPromise: Promise<string | null> | null = null;
  private _compilerProcess: ChildProcess | null = null;
  private _closed: boolean = false;
  private _stdin: Readable | null = null;

  public externsDestFilePath = path.resolve(outPath_temp, "closure-globals.js");
  public inputFilePath = path.resolve(outPath_temp, "closure-input.js");
  public outputFilePath = path.resolve(outPath_temp, "closure-output.js");
  public readonly options: StreamedClosureCompilerOptions;

  public constructor(options: StreamedClosureCompilerOptions) {
    this.options = options;
  }

  public start(): void {
    if (!this._compilerPromise) {
      this._compilerPromise = this._startAsync();
      this._compilerPromise.catch(() => {});
    }
  }

  public async compileOne(source: string): Promise<string> {
    const compileFile = async () => {
      if (!this._compilerPromise) {
        this.start();
      }
      source = await dprint(source);
      this._stdin!.push(JSON.stringify([{ src: source, path: this.inputFilePath }]));
      this._stdin!.push(null);
      let result = (await this._compilerPromise) || source;
      [result] = await Promise.all([
        this.options.beautify ? dprint(result) : result,
        writeFile(this.inputFilePath, source, "utf8"),
        writeFile(this.outputFilePath, result, "utf8"),
      ]);

      return result;
    };
    return devLog.timed(
      async function js_closure() {
        const result = await compileFile();
        this.setSuccessText(sizeDifference(source, result));
        return result;
      },
      { spinner: true },
    );
  }

  public kill(): void {
    this._closed = true;
    if (this._compilerProcess) {
      this._compilerProcess.kill();
      this._compilerProcess = null;
    }
  }

  private async _startAsync(): Promise<string | null> {
    let [externsContent, tsGlobals] = await Promise.all([
      readFile(require.resolve("./js-closure-globals.js"), "utf8"),
      readFile(require.resolve("../../../app/_globals.d.ts"), "utf8"),
      mkdir(outPath_temp, { recursive: true }),
    ]);

    externsContent += "\n";
    for (const line of tsGlobals.split("\n")) {
      for (const prefix of ["declare const", "declare var", "declare function"]) {
        if (line.startsWith(prefix)) {
          const name = line
            .slice(prefix.length)
            .split(":")[0]!
            .split(";")[0]!
            .split("(")[0]!
            .split("=")[0]!
            .split("<")[0]!
            .trim();
          externsContent += `var ${name};\n`;
        }
      }
    }

    await writeFile(this.externsDestFilePath, externsContent, "utf8");

    const options: CompileOptions = {
      env: "BROWSER",
      language_in: "ECMASCRIPT_NEXT",
      language_out: "ECMASCRIPT_NEXT",
      compilation_level: this.options.compilation_level,
      charset: "UTF-8",
      use_types_for_optimization: true,
      assume_function_wrapper: true,
      externs: this.externsDestFilePath,
      property_renaming_report: path.resolve(outPath_temp, "closure-rename.txt"),
      jscomp_off: "*",
    };

    if (this.options.beautify) {
      options.formatting = "PRETTY_PRINT";
    }

    if (this.options.rename_variable_prefix) {
      options.rename_variable_prefix = this.options.rename_variable_prefix;
    }

    const compiler = new ClosureCompilerClass(options) as ClosureCompiler;
    compiler.commandArguments.push("--json_streams", "BOTH");

    const compilerProcess = compiler.run();
    this._compilerProcess = compilerProcess;

    // Error events occur when there was a problem spawning the compiler process
    compilerProcess.on("error", (err) => {
      devLog.error("closure:", err);
    });

    compilerProcess.stdin!.on("error", (err) => {
      devLog.warn("closure: Error writing to stdin of the compiler", err);
    });

    let stdOutData: string = "";
    let stdErrData: string = "";

    compilerProcess.stdout!.on("data", (data) => {
      stdOutData += data;
    });

    compilerProcess.stderr!.on("data", (data) => {
      stdErrData += data;
    });

    const stdInStream = new Readable({ read() {} });
    stdInStream.pipe(compilerProcess.stdin!);
    this._stdin = stdInStream;

    const [code] = await Promise.all([
      new Promise((resolve) => compilerProcess.on("close", resolve)),
      new Promise((resolve) => compilerProcess.stdout!.on("end", resolve)),
      new Promise((resolve) => compilerProcess.stderr!.on("end", resolve)),
    ]);

    this._stdin = null;
    this._compilerProcess = null;

    stdOutData = stdOutData.trim();
    stdErrData = stdErrData.trim();

    if (stdErrData && !this._closed) {
      devLog.warn("Closure compiler:\n", stdErrData);
    }

    let outputFiles = [];
    if (stdOutData) {
      if (code !== 0 && !this._closed) {
        devLog.error(`Closure Compiler error.\n${stdOutData}`);
        throw new Error("Closure Compiler error");
      }

      outputFiles = JSON.parse(stdOutData);
    }

    return (outputFiles && outputFiles[0]?.src) || null;
  }
}
