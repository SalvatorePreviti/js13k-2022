import { minify as htmlMinify } from "html-minifier";
import { minify as terserMinify } from "terser";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import { getTerserMinifyOptions } from "../options/terser-options";
import type { ViteBundledOutput } from "./process-vite-output";
import { devLog } from "@balsamic/dev";
import { CSS_TARGETS } from "../build-config";
import parcelCss from "@parcel/css";
import { JSDOM } from "jsdom";

export async function optimizeViteOutput(input: ViteBundledOutput): Promise<ViteBundledOutput> {
  const js = await devLog.timed("optimize js", () => optimizeJS(input.js), { spinner: true });

  const css = devLog.timed.sync("optimize css", () => optimizeCss(input.css), { spinner: true });

  const html = devLog.timed.sync("optimize html", () => optimizeHtml(input.html), { spinner: true });

  const result: ViteBundledOutput = { ...input, js, css, html };
  return result;
}

function optimizeHtml(html: string) {
  const dom = new JSDOM(html);

  // Remove all external scripts
  Array.from(dom.window.document.querySelectorAll("script[src]")).forEach((el) => el.remove());

  // Remove all external styles
  Array.from(dom.window.document.querySelectorAll("link[href]")).forEach((el) => el.remove());

  let indexHtml = dom.window.document.querySelector("html")?.innerHTML || "";

  indexHtml = htmlMinify(indexHtml, getHtmlMinifierOptions({ minifyCss: true, minifyJs: true })) || indexHtml;

  return indexHtml;
}

function optimizeCss(css: string) {
  if (css) {
    const result = parcelCss.transform({
      filename: "index.css",
      code: Buffer.from(css),
      analyzeDependencies: false,
      cssModules: false,
      drafts: { customMedia: false, nesting: false },
      minify: true,
      sourceMap: false,
      targets: CSS_TARGETS,
    });

    css = result.code.toString().trim();
  }

  return css;
}

async function optimizeJS(script: string) {
  script =
    (
      await terserMinify(
        script,
        getTerserMinifyOptions({ sourceType: "script", mangle: true, preserve_annotations: false, passes: 9 }),
      )
    ).code || script;

  // Remove final semicolon
  while (script.endsWith(";")) {
    script = script.slice(0, -1);
  }

  return script;
}
