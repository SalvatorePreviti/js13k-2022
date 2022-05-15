import { devLog } from "@balsamic/dev";
import { CSS_TARGETS } from "../build-config";
import parcelCss from "@parcel/css";
import { sizeDifference } from "./utils";

export function optimizeCss(css: string) {
  devLog.timed(
    function optimize_css() {
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
