import { devLog } from "@balsamic/dev";
import { ESLint } from "eslint";
import { sizeDifference } from "../lib/logging";

/**
 * Validate, standardise, optimize code and remove some redundant stuff.
 */
export async function jsTransformEslint(source: string, settings: ESLintMinifySettings): Promise<string> {
  const eslintPasses = async (code: string, options: ESLint.Options) => {
    let result = code;
    const eslint = new ESLint(options);
    for (let pass = 0; pass < settings.passes; ++pass) {
      const results = await eslint.lintText(result);
      await ESLint.outputFixes(results);
      for (const msg of results) {
        if (msg.errorCount > 0) {
          const formatter = await eslint.loadFormatter("stylish");
          throw new Error(`ESLint minify errors: ${formatter.format(results)}`);
        }
      }
      const newCode = (results[0] && results[0].output) || result;
      if (result === newCode) {
        break;
      }
      result = newCode;
    }
    return result;
  };

  return devLog.timed(
    async function js_eslint() {
      let code = await eslintPasses(source, getESLintMinifyOptions(settings.sourceType, false));

      code = await eslintPasses(code, getESLintMinifyOptions(settings.sourceType, true));
      this.setSuccessText(sizeDifference(source, code));
      return code;
    },
    { spinner: true },
  );
}

export interface ESLintMinifySettings {
  passes: number;
  sourceType: "script" | "module";
}

/**
 * What? ESLint to minify stuff? Oh well, yes, why not!
 * Validate, standardise, optimize code and remove some redundant stuff.
 */
function getESLintMinifyOptions(sourceType: "script" | "module", oneVar: boolean): ESLint.Options {
  const result: ESLint.Options = {
    cwd: process.cwd(),
    fixTypes: ["problem", "suggestion", "layout"],
    cache: false,
    fix: true,
    errorOnUnmatchedPattern: false,
    ignore: false,
    useEslintrc: false,
    allowInlineConfig: false,
    baseConfig: {
      parserOptions: { ecmaVersion: 2020, sourceType },
      env: { browser: true, es2020: true },
      // globals: knownBrowserGlobalsAsObject,
      plugins: ["eslint-plugin-prefer-arrow"],
      rules: {
        "no-extra-boolean-cast": 1,
        "no-extra-parens": [
          1,
          "all",
          {
            conditionalAssign: true,
            returnAssign: true,
            nestedBinaryExpressions: true,
            enforceForArrowConditionals: true,
            enforceForSequenceExpressions: true,
            enforceForNewInMemberExpressions: true,
            enforceForFunctionPrototypeMethods: true,
          },
        ],
        "no-undef-init": 1,
        "no-useless-return": 1,
        "no-multi-spaces": 1,
        "no-else-return": 1,
        "no-lonely-if": 1,
        "dot-notation": 1,
        "no-const-assign": 2,
        "no-extra-semi": 1,
        "no-extra-bind": 1,
        "no-extra-label": 1,
        "sort-imports": 1,
        "no-floating-decimal": 1,
        "prefer-arrow-callback": [1, { allowNamedFunctions: false }],
        "arrow-parens": [1, "as-needed"],
        "arrow-body-style": [1, "as-needed", { requireReturnForObjectLiteral: false }],
        "prefer-arrow/prefer-arrow-functions": [
          "warn",
          {
            disallowPrototype: false,
            singleReturnOnly: false,
            classPropertiesAllowed: false,
          },
        ],
        "object-shorthand": [
          1,
          "always",
          { avoidQuotes: true, ignoreConstructors: false, avoidExplicitReturnArrows: true },
        ],
        "prefer-numeric-literals": 1,
        "sort-vars": 1,
        "quote-props": [1, "as-needed"],
        "no-var": 1,
        "no-unused-labels": 1,
        "prefer-object-spread": 1,
        "no-trailing-spaces": 1,
        "no-useless-rename": [1, { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }],
        "no-unneeded-ternary": 1,
        "no-useless-computed-key": 1,
        "prefer-exponentiation-operator": 1,
        "prefer-const": 1,
        "one-var": [1, oneVar ? "always" : "never"],
        "operator-assignment": [1, "always"],
        "prefer-destructuring": [1, { array: false, object: true }],
      },
    },
  };
  return result;
}
