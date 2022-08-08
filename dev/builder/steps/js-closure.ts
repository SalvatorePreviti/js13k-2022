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
  beautify: boolean;
  rename_variable_prefix?: string;
}

export class StreamedClosureCompiler {
  private _compilerPromise: Promise<string | null> | null = null;
  private _compilerProcess: ChildProcess | null = null;
  private _closed: boolean = false;
  private _stdin: Readable | null = null;

  public externsDestFilePath = path.resolve(outPath_temp, "closure-externs.js");
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
      const result = (await this._compilerPromise) || source;
      await writeFile(this.inputFilePath, source, "utf8");
      await writeFile(this.outputFilePath, result, "utf8");

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
      readFile(require.resolve("./js-closure-externs.js"), "utf8"),
      readFile(require.resolve("../../../app/_globals.d.ts"), "utf8"),
      mkdir(outPath_temp, { recursive: true }),
    ]);

    externsContent += "\n";
    for (const line of tsGlobals.split("\n")) {
      for (const prefix of ["declare const", "declare var", "declare function"]) {
        if (line.startsWith(prefix)) {
          const name = line.slice(prefix.length).split(":")[0]!.split(";")[0]!.split("=")[0]!.trim();
          externsContent += `var ${name};\n`;
        }
      }
    }

    await writeFile(this.externsDestFilePath, externsContent, "utf8");

    const options: CompileOptions = {
      env: "BROWSER",
      language_in: "ECMASCRIPT_NEXT",
      language_out: "ECMASCRIPT_NEXT",
      compilation_level: "ADVANCED",
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
    compilerProcess.unref();
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

// export class SPClosureCompiler {
//   public sourceFilePath = path.resolve(outPath_temp, "closure-input.js");
//   public sourceFifoPath = path.resolve(outPath_temp, ".closure-output-fifo.js");
//   public destFilePath = path.resolve(outPath_temp, "closure-output.js");
//   public externsDestFilePath = path.resolve(outPath_temp, "closure-externs.js");

//   private _prepared = false;
//   private _runCalled = false;
//   private _preparePromise: Promise<void> | undefined;
//   private _closureFifoPromise: Promise<void> | undefined;

//   public prepare(): void {
//     if (!this._prepared) {
//       this._prepared = true;
//       this._preparePromise = this._prepare();
//     }
//   }

//   public async run(source: string): Promise<string> {
//     const processSource = async () => {
//       try {
//         if (!this._prepared) {
//           this.prepare();
//         }
//         await Promise.all([this._preparePromise, dprintToFile(source, this.sourceFilePath)]);
//         const closureInput = await readFile(this.sourceFilePath);

//         if (this._closureFifoPromise) {
//           await writeFile(this.sourceFifoPath, closureInput, { encoding: "utf8", mode: 0o644, flag: "a" });
//           await Promise.all([this._deleteFifo(), this._closureFifoPromise]);
//         } else {
//           this._runCalled = true;
//           await this._spawnClosureCompiler(this.sourceFilePath);
//         }

//         return await readFile(this.destFilePath, "utf8");
//       } finally {
//         await this._deleteFifo();
//       }
//     };
//     return devLog.timed(
//       "js closure",
//       async function js_closure() {
//         const result = await processSource();
//         this.setSuccessText(sizeDifference(source, result));
//         return result;
//       },
//       { spinner: true },
//     );
//   }

//   public async close() {
//     await this._preparePromise?.catch(() => {});
//     return this._deleteFifo();
//   }

//   private async _deleteFifo() {
//     return rm(this.sourceFifoPath).catch(() => {});
//   }

//   private async _prepare() {
//     this._prepared = true;
//     if (this._closureFifoPromise) {
//       throw new Error("Closure compiler already executed, you need a new instance.");
//     }
//     let [externsContent, tsGlobals] = await Promise.all([
//       readFile(require.resolve("./js-closure-externs.js"), "utf8"),
//       readFile(require.resolve("../../../app/_globals.d.ts"), "utf8"),
//       mkdir(outPath_temp, { recursive: true }),
//       rm(this.sourceFilePath).catch(() => {}),
//       rm(this.destFilePath).catch(() => {}),
//       this._deleteFifo(),
//     ]);

//     externsContent += "\n";
//     for (const line of tsGlobals.split("\n")) {
//       for (const prefix of ["declare const", "declare var", "declare function"]) {
//         if (line.startsWith(prefix)) {
//           const name = line.slice(prefix.length).split(":")[0]!.split(";")[0]!.split("=")[0]!.trim();
//           externsContent += `var ${name};\n`;
//         }
//       }
//     }

//     await Promise.all([
//       writeFile(this.externsDestFilePath, externsContent, "utf8"),
//       devChildTask.spawn("mkfifo", ["-m", "644", this.sourceFifoPath], { timed: false }).catch(() => {}),
//     ]);

//     let isFifo = false;
//     try {
//       isFifo = (await stat(this.sourceFifoPath)).isFIFO();
//     } catch {}

//     if (isFifo) {
//       this._closureFifoPromise = this._spawnClosureCompiler(this.sourceFifoPath);
//     } else {
//       devLog.warn(`Could not create closure fifo file: "${this.sourceFifoPath}", running it synchronously.`);
//     }
//   }

//   private _spawnClosureCompiler(sourceFilePath: string) {
//     const gcc = new ClosureCompiler({
//       js: sourceFilePath,
//       js_output_file: this.destFilePath,
//       env: "BROWSER",
//       language_in: "ECMASCRIPT_NEXT",
//       language_out: "ECMASCRIPT_NEXT",
//       compilation_level: "ADVANCED",
//       use_types_for_optimization: true,
//       assume_function_wrapper: true,
//       rename_variable_prefix: "$$$",
//       externs: this.externsDestFilePath,
//       formatting: "PRETTY_PRINT",
//       property_renaming_report: path.resolve(outPath_temp, "closure-rename.txt"),
//     });

//     return new Promise<void>((resolve, reject) => {
//       gcc.run(async (exitCode, stdout, stderr) => {
//         if (exitCode && this._runCalled) {
//           if (stderr) {
//             devLog.warn(stderr);
//           }
//           if (stdout) {
//             devLog.info(stdout);
//           }
//           reject(new Error(`Closure compiler failed, exitCode:${exitCode}`));
//         } else {
//           resolve();
//         }
//       });
//     });
//   }
// }

// export async function jsClosurePrepare() {}

// async function _prepareClosureFiles() {
//   const sourceFilePath = path.resolve(outPath_temp, "closure-input.js");
//   const destFilePath = path.resolve(outPath_temp, "closure-output.js");
//   const externsDestFilePath = path.resolve(outPath_temp, "closure-externs.js");

//   let [externsContent, tsGlobals] = await Promise.all([
//     readFile(require.resolve("./js-closure-externs.js"), "utf8"),
//     readFile(require.resolve("../../../app/_globals.d.ts"), "utf8"),
//     mkdir(outPath_temp, { recursive: true }),
//   ]);
//   externsContent += "\n";
//   for (const line of tsGlobals.split("\n")) {
//     for (const prefix of ["declare const", "declare var", "declare function"]) {
//       if (line.startsWith(prefix)) {
//         const name = line.slice(prefix.length).split(":")[0]!.split(";")[0]!.split("=")[0]!.trim();
//         externsContent += `var ${name};\n`;
//       }
//     }
//   }
//   await writeFile(externsDestFilePath, externsContent, "utf8");
// }

// export async function jsClosure(source: string): Promise<string> {
//   return devLog.timed(
//     async function js_closure() {
//       const sourceFilePath = path.resolve(outPath_temp, "closure-input.js");
//       const destFilePath = path.resolve(outPath_temp, "closure-output.js");
//       const externsDestFilePath = path.resolve(outPath_temp, "closure-externs.js");

//       let [externsContent, tsGlobals] = await Promise.all([
//         readFile(require.resolve("./js-closure-externs.js"), "utf8"),
//         readFile(require.resolve("../../../app/_globals.d.ts"), "utf8"),
//         mkdir(outPath_temp, { recursive: true }),
//       ]);
//       externsContent += "\n";
//       for (const line of tsGlobals.split("\n")) {
//         for (const prefix of ["declare const", "declare var", "declare function"]) {
//           if (line.startsWith(prefix)) {
//             const name = line.slice(prefix.length).split(":")[0]!.split(";")[0]!.split("=")[0]!.trim();
//             externsContent += `var ${name};\n`;
//           }
//         }
//       }
//       await writeFile(externsDestFilePath, externsContent, "utf8");

//       await dprintToFile(source, sourceFilePath);

//       const gcc = new ClosureCompiler({
//         js: sourceFilePath,
//         js_output_file: destFilePath,
//         env: "BROWSER",
//         language_in: "ECMASCRIPT_NEXT",
//         language_out: "ECMASCRIPT_NEXT",
//         compilation_level: "ADVANCED",
//         use_types_for_optimization: true,
//         assume_function_wrapper: true,
//         rename_variable_prefix: "$$$",
//         externs: externsDestFilePath,
//         formatting: "PRETTY_PRINT",
//         property_renaming_report: path.resolve(outPath_temp, "closure-rename.txt"),
//       });

//       await new Promise<void>((resolve, reject) => {
//         gcc.run(async (exitCode, stdout, stderr) => {
//           if (exitCode) {
//             if (stderr) {
//               devLog.warn(stderr);
//             }
//             if (stdout) {
//               devLog.info(stdout);
//             }
//             reject(new Error(`Closure compiler failed, exitCode:${exitCode}`));
//           } else {
//             resolve();
//           }
//         });
//       });

//       const result = await readFile(destFilePath, "utf-8");
//       this.setSuccessText(sizeDifference(source, result));
//       return result;
//     },
//     { spinner: true },
//   );
// }

/* Available options:

Basic Usage:
 --compilation_level (-O) VAL           : Specifies the compilation level to
                                          use. Options: BUNDLE, WHITESPACE_ONLY,
                                          SIMPLE (default), ADVANCED (default:
                                          SIMPLE)
 --env [BROWSER | CUSTOM]               : Determines the set of builtin externs
                                          to load. Options: BROWSER, CUSTOM.
                                          Defaults to BROWSER. (default:
                                          BROWSER)
 --externs VAL                          : The file containing JavaScript
                                          externs. You may specify multiple
 --js VAL                               : The JavaScript filename. You may
                                          specify multiple. The flag name is
                                          optional, because args are
                                          interpreted as files by default. You
                                          may also use minimatch-style glob
                                          patterns. For example, use
                                          --js='**.js' --js='!**_test.js' to
                                          recursively include all js files that
                                          do not end in _test.js
 --js_output_file VAL                   : Primary output filename. If not
                                          specified, output is written to
                                          stdout (default: )
 --language_in VAL                      : Sets the language spec to which input
                                          sources should conform. Options:
                                          ECMASCRIPT3, ECMASCRIPT5,
                                          ECMASCRIPT5_STRICT, ECMASCRIPT_2015,
                                          ECMASCRIPT_2016, ECMASCRIPT_2017,
                                          ECMASCRIPT_2018, ECMASCRIPT_2019,
                                          ECMASCRIPT_2020,ECMASCRIPT_2021,
                                          STABLE, ECMASCRIPT_NEXT (latest
                                          features supported) (default: STABLE)
 --language_out VAL                     : Sets the language spec to which
                                          output should conform. Options:
                                          ECMASCRIPT3, ECMASCRIPT5,
                                          ECMASCRIPT_2015, ECMASCRIPT_2016,
                                          ECMASCRIPT_2017, ECMASCRIPT_2018,
                                          ECMASCRIPT_2019, ECMASCRIPT_2020,
                                          ECMASCRIPT_2021, STABLE,
                                          ECMASCRIPT_NEXT (latest features
                                          supported) (default: ECMASCRIPT_NEXT)
 --warning_level (-W) [QUIET | DEFAULT  : Specifies the warning level to use.
 | VERBOSE]                               Options: QUIET, DEFAULT, VERBOSE
                                          (default: DEFAULT)


Warning and Error Management:
 --conformance_configs VAL              : A list of JS Conformance
                                          configurations in text protocol
                                          buffer format.
 --error_format [STANDARD | JSON]       : Specifies format for error messages.
                                          (default: STANDARD)
 --extra_annotation_name VAL            : A allowlist of tag names in JSDoc.
                                          You may specify multiple
 --hide_warnings_for VAL                : If specified, files whose path
                                          contains this string will have their
                                          warnings hidden. You may specify
                                          multiple.
 --jscomp_error VAL                     : Make the named class of warnings an
                                          error. Must be one of the error group
                                          items. '*' adds all supported.
 --jscomp_off VAL                       : Turn off the named class of warnings.
                                          Must be one of the error group items.
                                          '*' adds all supported.
 --jscomp_warning VAL                   : Make the named class of warnings a
                                          normal warning. Must be one of the
                                          error group items. '*' adds all
                                          supported.
 --strict_mode_input                    : Assume input sources are to run in
                                          strict mode. (default: true)
 --warnings_allowlist_file              : A file containing warnings to
 (--warnings_whitelist_file) VAL          suppress. Each line should be of the
                                          form
                                          <file-name>:<line-number>?
                                          <warning-description> (default: )

Available Error Groups: accessControls, checkPrototypalTypes,
    checkRegExp, checkTypes, checkVars, conformanceViolations, const,
    constantProperty, deprecated, deprecatedAnnotations, duplicateMessage,
    es5Strict, externsValidation, functionParams, globalThis, invalidCasts,
    misplacedTypeAnnotation, missingOverride, missingPolyfill,
    missingProperties, missingProvide, missingRequire, missingReturn,
    missingSourcesWarnings, moduleLoad, moduleImports, msgDescriptions,
    nonStandardJsDocs, partialAlias, polymer, reportUnknownTypes,
    strictCheckTypes, strictMissingProperties, strictModuleDepCheck,
    strictPrimitiveOperators, suspiciousCode, typeInvalidation, undefinedVars,
    underscore, unknownDefines, unusedLocalVariables, unusedPrivateMembers,
    uselessCode, untranspilableFeatures,visibility

Output:
 --assume_function_wrapper              : Enable additional optimizations based
                                          on the assumption that the output
                                          will be wrapped with a function
                                          wrapper.  This flag is used to
                                          indicate that "global" declarations
                                          will not actually be global but
                                          instead isolated to the compilation
                                          unit. This enables additional
                                          optimizations. (default: false)
 --debug                                : Enable debugging options. Property
                                          renaming uses long mangled names
                                          which can be mapped back to the
                                          original name. (default: false)
 --emit_use_strict                      : Start output with "'use strict';".
                                          (default: false)
 --export_local_property_definitions    : Generates export code for local
                                          properties marked with @export
                                          (default: true)
 --formatting [PRETTY_PRINT |           : Specifies which formatting options,
 PRINT_INPUT_DELIMITER | SINGLE_QUOTES]   if any, should be applied to the
                                          output JS. Options: PRETTY_PRINT,
                                          PRINT_INPUT_DELIMITER, SINGLE_QUOTES
 --generate_exports                     : Generates export code for those
                                          marked with @export (default: true)
 --isolation_mode [NONE | IIFE]         : If set to IIFE the compiler output
                                          will follow the form:
                                            (function(){''utput%}).call(this);
                                          Options: NONE, IIFE (default: NONE)
 --output_wrapper VAL                   : Interpolate output into this string
                                          at the place denoted by the marker
                                          token %output%. Use marker token
                                          %output|jsstring% to do js string
                                          escaping on the output. Consider
                                          using the --isolation_mode flag
                                          instead. (default: )
 --output_wrapper_file VAL              : Loads the specified file and passes
                                          the file contents to the
                                          --output_wrapper flag, replacing the
                                          value if it exists. This is useful if
                                          you want special characters like
                                          newline in the wrapper. (default: )
 --rename_variable_prefix VAL           : Specifies a prefix that will be
                                          prepended to all variables.


Dependency Management:
 --dependency_mode [NONE | SORT_ONLY |  : Specifies how the compiler should
 PRUNE_LEGACY | PRUNE]                    determine the set and order of files
                                          for a compilation. Options: NONE the
                                          compiler will include all src files
                                          in the order listed, SORT_ONLY the
                                          compiler will include all source
                                          files in dependency order, PRUNE
                                          files will only be included if they
                                          are transitive dependencies of files
                                          listed in the --entry_point flag and
                                          then sorted in dependency order,
                                          PRUNE_LEGACY same as PRUNE but files
                                          that do not goog.provide a namespace
                                          and are not modules will be
                                          automatically added as --entry_point
                                          entries. Defaults to PRUNE_LEGACY if
                                          entry points are defined, otherwise
                                          to NONE.
 --entry_point VAL                      : A file or namespace to use as the
                                          starting point for determining which
                                          src files to include in the
                                          compilation. ES6 and CommonJS modules
                                          are specified as file paths (without
                                          the extension). Closure-library
                                          namespaces are specified with a
                                          "goog:" prefix. Example:
                                          --entry_point=goog:goog.Promise


JS Modules:
 --dynamic_import_alias VAL             : Instructs the compiler to replace
                                          dynamic imports expressions with a
                                          function call using the specified
                                          name. Allows dynamic import
                                          expressions to be externally
                                          polyfilled when the output language
                                          level does not natively support them.
                                          An alias of 'import' is allowed.
 --js_module_root VAL                   : Path prefixes to be removed from ES6
                                          & CommonJS modules.
 --module_resolution [BROWSER |         : Specifies how the compiler locates
 BROWSER_WITH_TRANSFORMED_PREFIXES |      modules. BROWSER requires all module
 NODE | WEBPACK]                          imports to begin with a '.' or '/'
                                          and have a file extension. NODE uses
                                          the node module rules. WEBPACK looks
                                          up modules from a special lookup map.
                                          (default: BROWSER)
 --package_json_entry_names VAL         : Ordered list of entries to look for
                                          in package.json files when processing
                                          modules with the NODE module
                                          resolution strategy (i.e.
                                          esnext:main,browser,main). Defaults
                                          to a list with the following entries:
                                          "browser", "module", "main".
 --process_common_js_modules            : Process CommonJS modules to a
                                          concatenable form. (default: false)


Library and Framework Specific:
 --angular_pass                         : Generate $inject properties for
                                          AngularJS for functions annotated
                                          with @ngInject (default: false)
 --force_inject_library VAL             : Force injection of named runtime
                                          libraries. The format is <name> where
                                          <name> is the name of a runtime
                                          library. Possible libraries include:
                                          base, es6_runtime, runtime_type_check
 --inject_libraries                     : Allow injecting runtime libraries.
                                          (default: true)
 --isolate_polyfills                    : Hides injected polyfills from the
                                          global scope and any external code.
                                          See the the "Polyfills" GitHub Wiki
                                          page for details. (default: false)
 --polymer_version N                    : Which version of Polymer is being
                                          used (1 or 2).
 --process_closure_primitives           : Processes built-ins from the Closure
                                          library, such as goog.require(),
                                          goog.provide(), and goog.exportSymbol(
                                          ). True by default. (default: true)
 --rewrite_polyfills                    : Injects polyfills for ES2015+ library
                                          classes and methods used in source.
                                          See also the "Polyfills" GitHub Wiki
                                          page. (default: true)


Code Splitting:
 --chunk VAL                            : A JavaScript chunk specification. The
                                          format is <name>:<num-js-files>[:[<dep
                                          >,...][:]]]. Chunk names must be
                                          unique. Each dep is the name of a
                                          chunk that this chunk depends on.
                                          Chunks must be listed in dependency
                                          order, and JS source files must be
                                          listed in the corresponding order.
                                          Where --chunk flags occur in relation
                                          to --js flags is unimportant.
                                          <num-js-files> may be set to 'auto'
                                          for the first chunk if it has no
                                          dependencies. Provide the value
                                          'auto' to trigger chunk creation from
                                          CommonJSmodules.
 --chunk_output_path_prefix VAL         : Prefix for filenames of compiled JS
                                          chunks. <chunk-name>.js will be
                                          appended to this prefix. Directories
                                          will be created as needed. Use with
                                          --chunk (default: ./)
 --chunk_output_type [GLOBAL_NAMESPACE  : Indicates what format the compiler
 | ES_MODULES]                            should use for output chunks.
                                          GLOBAL_NAMESPACE is typically used in
                                          conjunction with --rename_prefix_names
                                          pace. ES_MODULES outputs chunks as
                                          proper modules with 'import' and
                                          'export' statements. (default:
                                          GLOBAL_NAMESPACE)
 --chunk_wrapper VAL                    : An output wrapper for a JavaScript
                                          chunk (optional). The format is
                                          <name>:<wrapper>. The chunk name must
                                          correspond with a chunk specified
                                          using --chunk. The wrapper must
                                          contain %s as the code placeholder.
                                          Alternately, %output% can be used in
                                          place of %s. %n% can be used to
                                          represent a newline. The %basename%
                                          placeholder can also be used to
                                          substitute the base name of the chunk
                                          output file.
 --rename_prefix_namespace VAL          : Specifies the name of an object that
                                          will be used to store all non-extern
                                          globals


Reports:
 --create_source_map VAL                : If specified, a source map file
                                          mapping the generated source files
                                          back to the original source file will
                                          be output to the specified path. The
                                          %outname% placeholder will expand to
                                          the name of the output file that the
                                          source map corresponds to. (default: )
 --output_chunk_dependencies VAL        : Prints out a JSON file of
                                          dependencies between chunks.
                                          (default: )
 --output_manifest VAL                  : Prints out a list of all the files in
                                          the compilation. If --dependency_mode=
                                          PRUNE or PRUNE_LEGACY is specified,
                                          this will not include files that got
                                          dropped because they were not
                                          required. The %outname% placeholder
                                          expands to the JS output file. If
                                          you're using modularization, using
                                          %outname% will create a manifest for
                                          each module. (default: )
 --property_renaming_report VAL         : File where the serialized version of
                                          the property renaming map produced
                                          should be saved (default: )
 --source_map_include_content           : Includes sources content into source
                                          map. Greatly increases the size of
                                          source maps but offers greater
                                          portability (default: false)
 --source_map_input VAL                 : Source map locations for input files,
                                          separated by a '|', (i.e.
                                          input-file-path|input-source-map)
 --source_map_location_mapping VAL      : Source map location mapping separated
                                          by a '|' (i.e. filesystem-path|webserv
                                          er-path)
 --variable_renaming_report VAL         : File where the serialized version of
                                          the variable renaming map produced
                                          should be saved (default: )


Miscellaneous:
 --browser_featureset_year N            : shortcut for defining goog.FEATURESET_
                                          YEAR=YYYY. The minimum valid value of
                                          the browser year is 2012 (default: 0)
 --charset VAL                          : Input and output charset for all
                                          files. By default, we accept UTF-8 as
                                          input and output US_ASCII (default: )
 --checks_only (--checks-only)          : Don't generate output. Run checks,
                                          but no optimization passes. (default:
                                          false)
 --define (--D, -D) VAL                 : Override the value of a variable
                                          annotated @define. The format is
                                          <name>[=<val>], where <name> is the
                                          name of a @define variable and <val>
                                          is a boolean, number, or a
                                          single-quoted string that contains no
                                          single quotes. If [=<val>] is
                                          omitted, the variable is marked true
 --help                                 : Displays this message on stdout and
                                          exit (default: true)
 --json_streams [NONE | IN | OUT |      : Specifies whether standard input and
 BOTH]                                    output streams will be a JSON array
                                          of sources. Each source will be an
                                          object of the form {path: filename,
                                          src: file_contents, source_map:
                                          srcmap_contents }. Intended for use
                                          by stream-based build systems such as
                                          gulpjs. Options: NONE, IN, OUT, BOTH.
                                          Defaults to NONE. (default: NONE)
 --third_party                          : Check source validity but do not
                                          enforce Closure style rules and
                                          conventions (default: false)
 --use_types_for_optimization           : Enable or disable the optimizations
                                          based on available type information.
                                          Inaccurate type annotations may
                                          result in incorrect results.
                                          (default: true)
 --version                              : Prints the compiler version to stdout
                                          and exit. (default: false)

*/
