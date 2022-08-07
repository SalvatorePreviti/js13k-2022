const { transform } = require("lebab");

import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import { dprint } from "./dprint";

export async function jsLebab(source: string): Promise<string> {
  return devLog.timed(
    async function js_lebab() {
      const options = ["let", "arrow"];

      let result = await dprint(source);

      result = transform(result, options).code || result;

      // result = transform(result, ["let"]).code || result;

      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
