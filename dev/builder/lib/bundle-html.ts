import { minify as htmlMinify } from "html-minifier";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import { JSDOM } from "jsdom";
import { ViteBundledOutput } from "./vite-output";
import { OutputAsset } from "rollup";

export interface BundledHtmlOutput {
  html: string;
  assets: OutputAsset[];
  assetsBytes: number;
}

export async function bundleHtml(input: ViteBundledOutput): Promise<BundledHtmlOutput> {
  const dom = new JSDOM(input.html);

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

  return {
    html: bundled,
    assets: input.assets,
    assetsBytes: input.assetsBytes,
  };
}
