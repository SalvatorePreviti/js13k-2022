import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import csso from "csso";
import cssnano from "cssnano";
import postcss from "postcss";

export const CSS_TARGETS = { chrome: 99 << 16, edge: 99 << 16, firefox: 99 << 16, safari: 15 << 16 };

export function cssOptimize(css: string) {
  css = css.trim();
  if (!css) {
    return "";
  }
  return devLog.timed(
    async function css_optimize() {
      let result = css;

      result = (await postcss([cssnano({ preset: "advanced" })]).process(result)).css;

      result = csso.minify(result, { forceMediaMerge: true, restructure: true, comments: false }).css;

      this.setSuccessText(sizeDifference(css, result));

      return result;
    },
    { spinner: true },
  );
}
