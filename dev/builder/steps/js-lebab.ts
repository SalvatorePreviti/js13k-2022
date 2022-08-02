const { transform } = require("lebab");

import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import { dprint } from "./dprint";
import { jsTdeMinify } from "./js-tde-minify";

export async function jsLebab(source: string): Promise<string> {
  return devLog.timed(
    async function js_lebab() {
      const options = ["no-strict", "exponent", "arrow", "arrow-return", "multi-var", "let"];

      let result = await dprint(source);

      result = transform(result, options).code || result;

      // result = transform(result, ["let"]).code || result;

      result = await jsTdeMinify(result, false);

      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
