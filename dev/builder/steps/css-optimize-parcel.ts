import { devLog } from "@balsamic/dev";
import parcelCss from "@parcel/css";
import { sizeDifference } from "../lib/logging";

export const CSS_TARGETS = { chrome: 99 << 16, edge: 99 << 16, firefox: 99 << 16, safari: 15 << 16 };

export function cssOptimizeParcel(css: string) {
  devLog.timed(
    function css_parcel() {
      const result =
        css &&
        parcelCss
          .transform({
            filename: "index.css",
            code: Buffer.from(css),
            analyzeDependencies: false,
            cssModules: false,
            drafts: { customMedia: false, nesting: false },
            minify: true,
            sourceMap: false,
            targets: CSS_TARGETS,
          })
          .code.toString();

      this.setSuccessText(sizeDifference(css, result));

      if (result.length < css.length) {
        css = result;
      }
    },
    { spinner: true },
  );

  return css;
}
