import { devLog } from "@balsamic/dev";
import { browserPureFunctions } from "../lib/code-utils";
import { sizeDifference } from "../lib/logging";
import { transform } from "esbuild";
import { ESBUILD_TARGETS } from "./build-vite";

export interface JsOptimizeEsbuildOptions {
  mangle: boolean;
}

export async function jsOptimizeEsbuild(input: string, options: JsOptimizeEsbuildOptions): Promise<string> {
  return devLog.timed(
    async function js_esbuild() {
      const result = (
        await transform(input, {
          charset: "utf8",
          format: "esm",
          globalName: "window",
          legalComments: "none",
          loader: "js",
          treeShaking: true,
          target: ESBUILD_TARGETS,
          pure: browserPureFunctions,
          keepNames: !options.mangle,
          minify: true,
          minifySyntax: true,
          minifyWhitespace: true,
          minifyIdentifiers: options.mangle,
        })
      ).code;

      this.setSuccessText(sizeDifference(input, result));
      return result;
    },
    { spinner: true },
  );
}
