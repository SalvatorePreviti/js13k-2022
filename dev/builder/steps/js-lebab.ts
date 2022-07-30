const { transform } = require("lebab");

import { devLog } from "@balsamic/dev";
import { jsRemoveEndingSemicolons } from "../lib/code-utils";
import { sizeDifference } from "../lib/logging";
import { jsTdeMinify } from "./js-tde-minify";

export async function jsLebab(source: string): Promise<string> {
  return devLog.timed(
    async function js_lebab() {
      const options = ["let", "multi-var", "exponent", "no-strict", "obj-shorthand", "arrow-return", "arrow"];

      let result = transform(source, options).code || source;

      result = jsRemoveEndingSemicolons(result);

      result = await jsTdeMinify(result, false);

      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
