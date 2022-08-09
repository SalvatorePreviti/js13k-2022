import { transform } from "@babel/core";
import resugarVarToLetConst from "@resugar/codemod-declarations-block-scope";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import resugarObjectsShorthand from "@resugar/codemod-objects-shorthand";

export function jsBabel(code: string) {
  const root = process.cwd();
  const transformResult = transform(code, {
    root,
    configFile: false,
    babelrc: false,
    envName: "production",
    comments: true,
    compact: false,
    cwd: root,
    minified: false,
    parserOpts: {
      strictMode: true,
      allowAwaitOutsideFunction: false,
      allowImportExportEverywhere: false,
      allowReturnOutsideFunction: false,
      allowSuperOutsideMethod: false,
      allowUndeclaredExports: true,
      sourceType: "script",
    },
    plugins: [resugarFunctionsArrow, resugarObjectsShorthand, resugarVarToLetConst],
  });

  return transformResult?.code || code;
}
