import { minify as htmlMinify } from "html-minifier";
import { minify as terserMinify } from "terser";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import { getTerserMinifyOptions } from "../options/terser-minify-options";
import type { ViteBundledOutput } from "./vite-output";
import { devLog } from "@balsamic/dev";
import { CSS_TARGETS } from "../build-config";
import parcelCss from "@parcel/css";
import { JSDOM } from "jsdom";
import { minify as swcMinify } from "@swc/core";
import { getSwcMinifyOptions } from "../options/swc-minify-options";
import { sizeDifference } from "./utils";

export async function optimizeViteOutput(input: ViteBundledOutput): Promise<ViteBundledOutput> {
  const js = await optimizeJS(input.js);

  const html = optimizeHtml(input.html);

  const css = optimizeCss(input.css);

  const result: ViteBundledOutput = { ...input, js, css, html };
  return result;
}

function optimizeHtml(html: string) {
  devLog.timed(
    function optimize_html() {
      const dom = new JSDOM(html);

      // Remove all external scripts and styles
      Array.from(dom.window.document.querySelectorAll("script[src], link[href]")).forEach((el) => el.remove());

      const indexHtml = dom.window.document.querySelector("html")?.outerHTML || "";
      const result = htmlMinify(indexHtml, getHtmlMinifierOptions({ minifyCss: true, minifyJs: true })) || indexHtml;

      this.setSuccessText(sizeDifference(html, result));

      if (result.length < html.length) {
        html = result;
      }
    },
    { spinner: true },
  );

  return html;
}

function optimizeCss(css: string) {
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

async function optimizeJS(input: string) {
  await devLog.timed(
    async function js_swc() {
      const swcMinifyOptions = getSwcMinifyOptions({
        sourceType: "module",
        mangle: true,
        preserve_annotations: true,
      });

      const result = removeEndingSemicolons((await swcMinify(input, swcMinifyOptions)).code) || input;
      this.setSuccessText(sizeDifference(input, result));
      input = result.length < input.length ? result : input;
    },
    { spinner: true },
  );

  await devLog.timed(
    async function js_terser() {
      const terserOptions = getTerserMinifyOptions({
        sourceType: "module",
        mangle: "all",
        preserve_annotations: false,
      });

      const result = removeEndingSemicolons((await terserMinify(input, terserOptions)).code) || input;
      this.setSuccessText(sizeDifference(input, result));
      input = result.length < input.length ? result : input;
    },
    { spinner: true },
  );

  return input;
}

function removeEndingSemicolons(code: string | null | undefined) {
  return code ? code.replace(/[\n\s;]+$/, "") : "";
}
