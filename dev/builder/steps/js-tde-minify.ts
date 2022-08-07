import { devLog } from "@balsamic/dev";
import path from "path";
import { sizeDifference } from "../lib/logging";
import { dprint } from "./dprint";

export async function jsTdeMinify(source: string, timed = true): Promise<string> {
  return devLog.timed(
    async function js_tde_minify() {
      const tdePath = path.dirname(require.resolve("@tdewolff/minify"));
      const { config: tdeMinifyConfig, string: tdeMinifyString } = require(path.resolve(
        tdePath,
        "build/Release/minify.node",
      ));

      tdeMinifyConfig({
        "js-precision": 8,
        "js-keep-var-names": true,
        "js-no-nullish-operator": false,
      });

      let result = await dprint(source);

      result = tdeMinifyString("text/javascript", result) || result;

      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { timed, spinner: true },
  );
}
