import { minify as htmlMinify } from "html-minifier";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import { JSDOM } from "jsdom";
import type { ViteBundledOutput } from "./vite-output";
import type { OutputAsset } from "rollup";
import { devLog, utf8ByteLength } from "@balsamic/dev";
import { sizeDifference } from "./utils";

export interface BundledHtmlOutput {
  html: string;
  assets: OutputAsset[];
  assetsBytes: number;
}

export function bundleHtml(input: ViteBundledOutput): BundledHtmlOutput {
  return devLog.timed(
    function bundle_html() {
      const dom = new JSDOM(input.html);

      const initialSize =
        utf8ByteLength(input.js) + utf8ByteLength(input.css) + utf8ByteLength(input.html) + input.assetsBytes;

      // Append styles at the beginning
      if (input.css) {
        const styleTag = dom.window.document.createElement("style");
        styleTag.textContent = input.css;
        dom.window.document.head.appendChild(styleTag);
      }

      // Append the script at the end of body
      if (input.js) {
        const scriptTag = dom.window.document.createElement("script");
        scriptTag.textContent = input.js;
        dom.window.document.body.appendChild(scriptTag);
      }

      let bundled = dom.window.document.querySelector("html")?.outerHTML || "";
      bundled = htmlMinify(bundled, getHtmlMinifierOptions({ minifyCss: true, minifyJs: false })) || bundled;

      const finalSize = utf8ByteLength(bundled) + input.assetsBytes;

      this.setSuccessText(sizeDifference(initialSize, finalSize));

      return {
        html: bundled,
        assets: input.assets,
        assetsBytes: input.assetsBytes,
      };
    },
    { spinner: true },
  );
}
