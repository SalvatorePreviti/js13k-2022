import { JSDOM } from "jsdom";
import { devLog, utf8ByteLength } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import { htmlMinify } from "./html-minify";
import { domRemoveExternalCssAndScripts } from "../lib/code-utils";

export interface BundleHtmlInput {
  html: string;
  css: string;
  js: string;
}

export interface BundleHtmlOutput {
  html: string;
}

export function bundleHtml(input: BundleHtmlInput): BundleHtmlOutput {
  return devLog.timed(
    function bundle_html() {
      const initialSize = utf8ByteLength(input.js) + utf8ByteLength(input.css) + utf8ByteLength(input.html);

      const dom = new JSDOM(input.html);

      domRemoveExternalCssAndScripts(dom);

      // Append styles at the beginning
      if (input.css) {
        const styleTag = dom.window.document.createElement("style");
        styleTag.textContent = input.css;
        dom.window.document.head.appendChild(styleTag);
      }

      // Append the script at the end of body
      if (input.js) {
        const scriptTag = dom.window.document.createElement("script");
        scriptTag.type = "module";
        scriptTag.textContent = input.js;
        dom.window.document.body.appendChild(scriptTag);
      }

      let bundled = dom.window.document.querySelector("html")?.outerHTML || "";

      bundled = htmlMinify(bundled);

      const finalSize = utf8ByteLength(bundled);

      this.setSuccessText(sizeDifference(initialSize, finalSize));

      return {
        html: bundled,
      };
    },
    { spinner: true },
  );
}
