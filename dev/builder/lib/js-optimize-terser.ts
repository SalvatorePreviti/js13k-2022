import { minify as terserMinify } from "terser";
import { getTerserMinifyOptions } from "../options/terser-minify-options";
import { devLog } from "@balsamic/dev";
import { sizeDifference } from "./logging";

export async function jsOptimizeTerser(input: string) {
  await devLog.timed(
    async function js_terser() {
      const terserOptions = getTerserMinifyOptions({
        sourceType: "module",
        mangle: "all",
        preserve_annotations: false,
      });

      const result = removeEndingSemicolons((await terserMinify(input, terserOptions)).code) || input;
      this.setSuccessText(sizeDifference(input, result));
      input = result.length < input.length ? result : input;
    },
    { spinner: true },
  );

  return input;
}

function removeEndingSemicolons(code: string | null | undefined) {
  return code ? code.replace(/[\n\s;]+$/, "") : "";
}
