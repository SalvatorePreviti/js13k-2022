import type { JSDOM } from "jsdom";

/** Trims and remove final semicolons in JS files */
export function jsRemoveEndingSemicolons(code: string | null | undefined) {
  return code ? code.trimStart().replace(/[\s;]+$/, "") : "";
}

/** Reduces HTML size by removing </body> and </html> */
export function htmlFinalise(html: string) {
  return html.replace(/(\s*<\s*\/\s*(html|body)\s*>\s*)*$/i, "");
}

/** Removes all external scripts and css from an HTML. */
export function domRemoveExternalCssAndScripts(dom: JSDOM) {
  Array.from(dom.window.document.querySelectorAll("script[src], link[href]")).forEach((el) => el.remove());
}

export function stripUtf8BOM(s: string): string {
  return s.startsWith("\ufeff") ? s.slice(1) : s;
}
