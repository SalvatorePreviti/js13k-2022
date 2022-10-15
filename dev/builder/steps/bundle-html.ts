import { JSDOM } from "jsdom";
import { devLog, utf8ByteLength } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import { htmlMinify } from "./html-minify";
import { domRemoveExternalCssAndScripts, stripUtf8BOM } from "../lib/code-utils";

export interface BundleHtmlInput {
  html: string;
  css?: string;
  js: string;
}

export async function bundleHtml(input: BundleHtmlInput): Promise<string> {
  return devLog.timed(
    async function bundle_html() {
      const initialSize = utf8ByteLength(input.js) + utf8ByteLength(input.css) + utf8ByteLength(input.html);

      const dom = new JSDOM(stripUtf8BOM(input.html));

      domRemoveExternalCssAndScripts(dom);

      if (input.css) {
        const styleTag = dom.window.document.createElement("style");
        styleTag.textContent = input.css;
        dom.window.document.head.appendChild(styleTag);
      }

      if (input.js) {
        const scriptTag = dom.window.document.createElement("script");
        scriptTag.type = "module";
        scriptTag.textContent = input.js;
        dom.window.document.body.appendChild(scriptTag);
      }

      let bundled = dom.serialize();

      bundled = await htmlMinify(bundled, { type: "page", prependUtf8BOM: false, timed: false });

      const finalSize = utf8ByteLength(bundled);

      this.setSuccessText(sizeDifference(initialSize, finalSize));

      return bundled;
    },
    { spinner: true },
  );
}
