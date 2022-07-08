import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import { transform } from "esbuild";
import { browserPureFunctions, jsRemoveEndingSemicolons } from "../lib/code-utils";
import { ESBUILD_TARGETS } from "./build-vite";

export async function jsEsbuildMinify(source: string): Promise<string> {
  return devLog.timed(
    async function js_esbuild_minify() {
      let result =
        (
          await transform(source, {
            format: "esm",
            keepNames: false,
            minifyIdentifiers: false,
            minifySyntax: true,
            minifyWhitespace: true,
            treeShaking: true,
            target: ESBUILD_TARGETS,
            charset: "utf8",
            globalName: "window",
            pure: browserPureFunctions,
          })
        ).code || source;
      result = jsRemoveEndingSemicolons(result);
      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
