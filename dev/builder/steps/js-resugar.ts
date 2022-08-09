import { transform } from "@babel/core";
import { devLog } from "@balsamic/dev";
import resugarVarToLetConst from "@resugar/codemod-declarations-block-scope";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import resugarObjectsShorthand from "@resugar/codemod-objects-shorthand";
import { sizeDifference } from "../lib/logging";

export async function jsResugar(code: string, settings: { minify: boolean }) {
  return devLog.timed(
    function js_resugar() {
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
        plugins: [resugarFunctionsArrow, resugarObjectsShorthand, resugarVarToLetConst],
      });
      const result = transformResult?.code || code;
      this.setSuccessText(sizeDifference(code, result));
      return result;
    },
    { spinner: true },
  );
}
