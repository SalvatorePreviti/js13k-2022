import { devLog } from "@balsamic/dev";
import type { JsMinifyOptions } from "@swc/core";
import { transform as swcTransform, type Plugin } from "@swc/core";
import type SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../../out-paths";
import { sizeDifference } from "../../lib/logging";
import { browserPureFunctions, global_defs, mangleConfig } from "../../lib/js-config";
import { jsRemoveEndingSemicolons } from "../../lib/code-utils";

export const DO_NOT_MANGLE_PREFIX = "@#";

export interface SwcMinifySettings {
  mangle?: boolean;
  minify?: boolean;
  final: boolean;
  computed_props: boolean;
  timed?: boolean;
  evaluate?: boolean;
}

export async function jsTransformSwc(
  source: string,
  minify: "no-optimize" | "simple" | SwcMinifySettings | null | undefined | false,
  ...transformers: (Plugin | SwcVisitor | null | false | undefined)[]
): Promise<string> {
  const swcPlugins: Plugin = (m) => {
    for (let transformer of transformers) {
      if (!transformer) {
        continue;
      }

      if (typeof transformer === "object") {
        const t = transformer;
        transformer = (p) => t.visitProgram(p);
      }

      m = transformer(m) || m;
    }
    return m;
  };

  if (minify === "no-optimize") {
    minify = false;
  }

  const minifyWhitespaces = minify === "simple" || !!(minify && (minify.minify ?? minify.final));

  return devLog.timed(
    minify ? "js swc minify" : "js swc transform",
    async function js_swc_transform() {
      let result =
        (
          await swcTransform(source, {
            cwd: outPath_build,
            inputSourceMap: false,
            sourceMaps: false,
            configFile: false,
            filename: "index.js",
            isModule: true,
            minify: minifyWhitespaces,
            swcrc: false,
            jsc: {
              transform: {
                optimizer: {
                  simplify: minify !== "no-optimize",
                },
                useDefineForClassFields: false,
                treatConstEnumAsEnum: false,
                decoratorMetadata: false,
              },
              keepClassNames: false,
              target: "es2022",
              minify:
                minify && minify !== "simple" && minify !== "no-optimize" ? getSwcMinifyOptions(minify) : undefined,
            },
            plugin: transformers && transformers.length > 0 ? swcPlugins : undefined,
          })
        ).code || source;

      if (minifyWhitespaces) {
        result = jsRemoveEndingSemicolons(result);
      }

      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true, timed: typeof minify !== "object" || !minify || minify.timed === undefined || !!minify.timed },
  );
}

const ecma = 2020;

// fixes for incomplete types in @swc/core minify that is still experimental
declare module "@swc/core" {
  export interface TerserMangleOptions {
    keepClassNames?: boolean | undefined;
    keepFnNames?: boolean | undefined;
    toplevel?: boolean | undefined;
  }
  export interface TerserCompressOptions {
    const_to_let?: boolean | undefined;
    pristine_globals?: boolean | undefined;
  }
}

export function getSwcMinifyOptions(settings: SwcMinifySettings): JsMinifyOptions & {
  keepClassnames?: boolean | undefined;
  keepFnames?: boolean | undefined;
} {
  return {
    // Use when minifying an ES6 module.
    // "use strict" is implied and names can be mangled on the top scope.
    // If compress or mangle is enabled then the toplevel option will be enabled.
    module: true,

    // set to true if you wish to enable top level variable and function name mangling
    // and to drop unused variables and functions.
    toplevel: true,

    // Sourcemap support
    sourceMap: false,

    ecma,
    safari10: false,
    keepClassnames: false,
    keepFnames: false,

    inlineSourcesContent: false,

    // Compress options
    compress: {
      ecma,

      defaults: true,

      ie8: false,

      // Global definitions for conditional compilation
      global_defs,

      // Inline single-use functions when possible. Depends on reduce_vars being enabled.
      reduce_funcs: true,

      // Class and object literal methods are converted will also be converted to arrow expressions
      // if the resultant code is shorter: m(){return x} becomes m:()=>x
      arrows: true,

      // this MUST be false, it causes invalid JS to be generated.
      arguments: false,

      // various optimizations for boolean context, for example !!a ? b : c → a ? b : c
      booleans: true,

      // Turn booleans into 0 and 1, also makes comparisons with booleans use == and != instead of === and !==
      booleans_as_integers: true,

      // Collapse single-use non-constant variables, side effects permitting.
      collapse_vars: true,

      // apply certain optimizations to binary nodes,
      //  e.g. !(a <= b) → a > b (only when unsafe_comps), attempts to negate binary nodes,
      //  e.g. a = !b && !c && !d && !e → a=!(b||c||d||e) etc.
      comparisons: true,

      // apply optimizations for if-s and conditional expressions
      conditionals: true,

      // remove unreachable code
      dead_code: true,

      // remove redundant or non-standard directives
      directives: true,

      // discard calls to console.* functions.
      // If you wish to drop a specific function call such as console.info
      drop_console: true,

      // remove debugger; statements
      drop_debugger: true,

      // attempt to evaluate constant expressions
      evaluate: settings.evaluate ?? true,

      // Pass true to preserve completion values from terminal statements without return, e.g. in bookmarklets.
      expression: false,

      // hoist function declarations
      hoist_funs: true,

      // hoist properties from constant object and array literals into regular variables subject to a set of constraints.
      // For example: var o={p:1, q:2}; f(o.p, o.q); is converted to f(1, 2)
      hoist_props: true,

      // hoist var declarations
      // (this is false by default because it seems to increase the size of the output in general)
      hoist_vars: false,

      // optimizations for if/return and if/continue
      if_return: true,

      // inline calls to function with simple/return statement
      inline: 3,

      // join consecutive var statements
      join_vars: settings.final,

      // Pass true to prevent the compressor from discarding class names.
      // Pass a regular expression to only keep class names matching that regex.
      keep_classnames: false,

      // Prevents the compressor from discarding unused function arguments.
      // You need this for code which relies on Function.length
      keep_fargs: false,

      // Pass true to prevent the compressor from discarding function names.
      // Pass a regular expression to only keep function names matching that regex
      keep_fnames: false,

      // Pass true to prevent Infinity from being compressed into 1/0,
      // which may cause performance issues on Chrome.
      keep_infinity: false,

      // optimizations for do, while and for loops when we can statically determine the condition.
      loops: true,

      // Pass true when compressing an ES6 module. Strict mode is implied and the toplevel option as well.
      module: true,

      // negate "Immediately-Called Function Expressions" where the return value is discarded,
      // to avoid the parens that the code generator would insert.
      // This must be true, with false seems to generate invalid code.
      negate_iife: false,

      // The maximum number of times to run compress. 0 means infinite.
      passes: 0,

      // Rewrite property access using the dot notation, for example foo["bar"] → foo.bar
      properties: true,

      // Transforms constant computed properties into regular ones:
      // {["computed"]: 1} is converted to {computed: 1}
      computed_props: settings.computed_props,

      // You can pass an array of names and Terser will assume that those functions do not produce side effects. DANGER: will not check if the name is redefined in scope.
      pure_funcs: browserPureFunctions,

      // If you pass true for this, Terser will assume that object property access
      // (e.g. foo.bar or foo["bar"]) doesn't have any side effects. Specify "strict"
      // to treat foo.bar as side-effect-free only when foo is certain to not throw,
      // i.e. not null or undefined.
      pure_getters: true,

      // Improve optimization on variables assigned with and used as constant values.
      reduce_vars: true,

      // join consecutive simple statements using the comma operator. If set as positive integer
      // specifies the maximum number of consecutive comma sequences that will be generated.
      // If this option is set to true then the default sequences limit is 200
      sequences: settings.final,

      // Remove expressions which have no side effects and whose results aren't used.
      side_effects: true,

      // de-duplicate and remove unreachable switch branches
      switches: true,

      // drop unreferenced functions ("funcs") and/or variables ("vars") in the top level scope.
      // Set to true to drop both unreferenced functions and variables)
      toplevel: true,

      // prevent specific toplevel functions and variables from unused removal. Implies toplevel.
      top_retain: null,

      // Transforms typeof foo == "undefined" into foo === void 0
      typeofs: true,

      // apply "unsafe" transformations. It enables some transformations that might break code
      // logic in certain contrived cases, but should be fine for most code.
      // It assumes that standard built-in ECMAScript functions and classes have not been
      // altered or replaced.
      unsafe: true,

      // Convert ES5 style anonymous function expressions to arrow functions if the function
      // body does not reference this. Note: it is not always safe to perform this conversion
      // if code relies on the the function having a prototype, which arrow functions lack.
      unsafe_arrows: true,

      // Reverse < and <= to > and >= to allow improved compression.
      // This might be unsafe when an at least one of two operands is an object with
      // computed values due the use of methods like get, or valueOf.
      // This could cause change in execution order after operands in the comparison are switching.
      unsafe_comps: true,

      // optimize numerical expressions like 2 * x * 3 into 6 * x, which may give imprecise floating point results.
      unsafe_math: true,

      // removes keys from native Symbol declarations, e.g Symbol("kDog") becomes Symbol().
      unsafe_symbols: true,

      // Converts { m: function(){} } to { m(){} }.
      // If unsafe_methods is a RegExp then key/value pairs with keys matching the
      // RegExp will be converted to concise methods.
      // Note: if enabled there is a risk of getting a "<method name> is not a constructor"
      // TypeError should any code try to new the former function.
      unsafe_methods: true,

      // optimize expressions like Array.prototype.slice.call(a) into [].slice.call(a)
      unsafe_proto: true,

      // enable substitutions of variables with RegExp values the same way as if they are constants.
      unsafe_regexp: true,

      // substitute void 0 if there is a variable named undefined in scope
      // (variable name will be mangled, typically reduced to a single character)
      unsafe_undefined: true,

      // drop unreferenced functions and variables (simple direct variable assignments
      // do not count as references unless set to "keep_assign")
      unused: true,

      const_to_let: false,
      pristine_globals: true,
    },

    // Mangle options
    mangle: settings.mangle
      ? {
          safari10: false,

          toplevel: true,

          // Pass true to not mangle class names.
          // Pass a regular expression to only keep class names matching that regex.
          // See also: the keep_classnames compress option.
          keepClassNames: false,

          // Pass true to not mangle function names.
          // Pass a regular expression to only keep class names matching that regex.
          // Useful for code relying on Function.prototype.name.
          // See also: the keep_fnames compress option.
          keepFnNames: false,

          keep_private_props: true,

          // Pass an array of identifiers that should be excluded from mangling. Example: ["foo", "bar"].
          reserved: [...mangleConfig.reserved],

          // // Mangle properties - optimizes a lot but is very dangerous. Enables only with properties starting with $
          // props: {
          //   // Use true to allow the mangling of builtin DOM properties. Not recommended to override this setting.
          //   builtins: false,

          //   // Mangle names with the original name still present. Pass an empty string "" to enable, or a non-empty string to set the debug suffix.
          //   debug: false,

          //   // Only mangle unquoted property names.
          //   //  true: Quoted property names are automatically reserved and any unquoted property names will not be mangled.
          //   //  'strict': Advanced, all unquoted property names are mangled unless explicitly reserved.
          //   keep_quoted: true,

          //   // Mangle regular expression
          //   regex: "/^[$_]/",
          // },
        }
      : false,

    // Output options
    format: {
      // set desired EcmaScript standard version for output.
      ecma,

      // whether to actually beautify the output
      beautify: !settings.final,

      // always insert braces in if, for, do, while or with statements, even if their body is a single statement.
      braces: false,

      // false to omit comments in the output
      comments: settings.final ? false : "all",

      keepQuotedProps: true,

      preserve_annotations: true,
    },
  };
}
