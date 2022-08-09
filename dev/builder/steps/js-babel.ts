import { transform } from "@babel/core";
import { devLog } from "@balsamic/dev";
import resugarVarToLetConst from "@resugar/codemod-declarations-block-scope";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import resugarObjectsShorthand from "@resugar/codemod-objects-shorthand";

export async function jsBabel(code: string) {
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
        compact: false,
        minified: false,
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
      return transformResult?.code || code;
    },
    { spinner: true },
  );
}
