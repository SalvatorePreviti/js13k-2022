import { minify as terserMinify } from "terser";
import { getTerserMinifyOptions } from "../options/terser-minify-options";
import { devLog } from "@balsamic/dev";
// import { minify as swcMinify } from "@swc/core";
// import { getSwcMinifyOptions } from "../options/swc-minify-options";
import { sizeDifference } from "./utils";

export async function optimizeJS(input: string) {
  // await devLog.timed(
  //   async function js_swc() {
  //     const swcMinifyOptions = getSwcMinifyOptions({
  //       sourceType: "module",
  //       mangle: true,
  //       preserve_annotations: true,
  //     });

  //     const result = removeEndingSemicolons((await swcMinify(input, swcMinifyOptions)).code) || input;
  //     this.setSuccessText(sizeDifference(input, result));
  //     input = result.length < input.length ? result : input;
  //   },
  //   { spinner: true },
  // );

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
