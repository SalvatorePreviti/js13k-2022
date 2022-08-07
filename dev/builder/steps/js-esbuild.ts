import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import { transform } from "esbuild";
import { browserPureFunctions } from "../lib/code-utils";
import { ESBUILD_TARGETS } from "./build-vite";

export async function jsEsbuildMinify(source: string): Promise<string> {
  return devLog.timed(
    async function js_esbuild_minify() {
      const result =
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
      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
