import { transform } from "@babel/core";
import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../../lib/logging";
import { babelPluginSplitDeclarations } from "./babel-plugin-split-declarations";

export function jsBabel(source: string) {
  return devLog.timed(
    async function js_babel() {
      const cwd = process.cwd();

      const result =
        transform(source, {
          root: cwd,
          configFile: false,
          babelrc: false,
          envName: "production",
          comments: true,
          cwd,
          compact: true,
          minified: true,
          parserOpts: {
            strictMode: true,
            allowAwaitOutsideFunction: true,
            allowImportExportEverywhere: true,
            allowReturnOutsideFunction: true,
            allowSuperOutsideMethod: true,
            allowUndeclaredExports: true,
            sourceType: "module",
          },
          // babelPluginDeVarify
          plugins: [babelPluginSplitDeclarations],
        })?.code || source;

      this.setSuccessText(sizeDifference(source, result));

      return result;
    },
    { spinner: true },
  );
}
