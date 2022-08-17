import type { PluginItem } from "@babel/core";
import { transform } from "@babel/core";
import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../../lib/logging";

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
        sourceType: "module",
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
