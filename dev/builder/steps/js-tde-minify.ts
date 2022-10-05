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
        // "js-precision": floatRoundAmount + 1,
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

export async function htmlTdeMinify(source: string): Promise<string> {
  const tdePath = path.dirname(require.resolve("@tdewolff/minify"));
  const { config: tdeMinifyConfig, string: tdeMinifyString } = require(path.resolve(
    tdePath,
    "build/Release/minify.node",
  ));

  tdeMinifyConfig({
    "html-keep-comments": false,
    "html-keep-conditional-comments": false,
    "html-keep-default-attr-vals": false,
    "html-keep-document-tags": false,
    "html-keep-end-tags": false,
    "html-keep-whitespace": false,
    "html-keep-quotes": false,
    "svg-keep-comments": false,
    "xml-keep-whitespace": false,
  });

  return tdeMinifyString("text/html", source) || source;
}
