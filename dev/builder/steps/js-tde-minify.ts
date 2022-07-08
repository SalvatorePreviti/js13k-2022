import { devLog } from "@balsamic/dev";
import path from "path";
import { jsRemoveEndingSemicolons } from "../lib/code-utils";
import { sizeDifference } from "../lib/logging";

export async function jsTdeMinify(source: string): Promise<string> {
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

      let result = tdeMinifyString("text/javascript", source) || source;
      result = jsRemoveEndingSemicolons(result);

      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
