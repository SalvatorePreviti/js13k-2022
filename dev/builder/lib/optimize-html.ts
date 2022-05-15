import { minify as htmlMinify } from "html-minifier";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import { devLog } from "@balsamic/dev";
import { JSDOM } from "jsdom";
import { sizeDifference } from "./utils";

export function optimizeHtml(html: string) {
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
