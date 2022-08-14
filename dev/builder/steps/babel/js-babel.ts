import type { PluginItem } from "@babel/core";
import { transform } from "@babel/core";
import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../../lib/logging";
import resugarVarToLetConst from "@resugar/codemod-declarations-block-scope";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import resugarObjectsShorthand from "@resugar/codemod-objects-shorthand";

export const jsBabelResugarPlugins = [
  resugarVarToLetConst,
  resugarFunctionsArrow,
  resugarObjectsShorthand,
  "babel-plugin-pure-calls-annotation",
  "babel-plugin-annotate-pure-calls",
];

export interface JsBabelSettings {
  plugins: PluginItem[];
  minify: boolean;
}

export async function jsBabel(code: string, settings: JsBabelSettings) {
  return devLog.timed(
    function js_babel() {
      const root = process.cwd();
      const transformResult = transform(code, {
        root,
        cwd: root,
        configFile: false,
        babelrc: false,
        envName: "production",
        comments: true,
        compact: !!settings.minify,
        minified: !!settings.minify,
        parserOpts: {
          sourceType: "module",
          allowAwaitOutsideFunction: true,
          allowImportExportEverywhere: true,
          allowReturnOutsideFunction: true,
          allowSuperOutsideMethod: true,
          allowUndeclaredExports: true,
        },
        plugins: settings.plugins,
      });
      const result = transformResult?.code || code;
      this.setSuccessText(sizeDifference(code, result));
      return result;
    },
    { spinner: true },
  );
}
