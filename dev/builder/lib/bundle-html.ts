import type { OutputAsset } from "rollup";
import { minify as htmlMinify } from "html-minifier";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import { devBeginOperation, devEndOperation } from "./utils";
import { prettySize, toUTF8 } from "@balsamic/dev";
import { JSDOM } from "jsdom";

export interface BundleHtmlInput {
  indexHtml: string;
  script?: string;
  stylesheet?: string;
  assets?: OutputAsset[];
}

export async function bundleHtml(input: BundleHtmlInput) {
  console.log();
  devBeginOperation("bundle html");

  const dom = new JSDOM(toUTF8(input.indexHtml));

  // Append styles at the beginning
  if (input.stylesheet) {
    const styleTag = dom.window.document.createElement("style");
    styleTag.textContent = input.stylesheet;
    dom.window.document.head.appendChild(styleTag);
  }

  // Append the script at the end of body
  if (input.script) {
    const scriptTag = dom.window.document.createElement("script");
    scriptTag.textContent = input.script;
    dom.window.document.body.appendChild(scriptTag);
  }

  let bundled = dom.window.document.querySelector("html")?.innerHTML || "";
  bundled = htmlMinify(bundled, getHtmlMinifierOptions({ minifyCss: false, minifyJs: false })) || bundled;

  // Remove tag closures
  for (const endTag of ["</html>", "</body>", "</script>"]) {
    if (bundled.endsWith(endTag)) {
      bundled = bundled.slice(0, -endTag.length).trim();
    }
  }

  devEndOperation(prettySize(bundled));

  return {
    html: bundled,
    assets: input.assets,
  };
}
