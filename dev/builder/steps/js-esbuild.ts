import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import { transform } from "esbuild";
import { jsRemoveEndingSemicolons } from "../lib/code-utils";
import { ESBUILD_TARGETS } from "./build-vite";
import { browserPureFunctions } from "../lib/js-config";

export async function jsEsbuildMinify(
  source: string,
  { mangle, final }: { mangle: boolean; final: boolean },
): Promise<string> {
  return devLog.timed(
    async function js_esbuild_minify() {
      let result =
        (
          await transform(source, {
            format: "esm",
            keepNames: false,
            minifyIdentifiers: !!mangle,
            minifySyntax: true,
            minifyWhitespace: !!final,
            mangleQuoted: !!final,
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
