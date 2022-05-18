import { bundle as swcBundle } from "@swc/core";
import { JSDOM } from "jsdom";
import { outPath_build } from "../out-paths";
import path from "path";
import { devLog, toUTF8, utf8ByteLength } from "@balsamic/dev";
import type { ViteBuildOutput, ViteBundledOutput } from "./bundle-vite";
import type { Output } from "@swc/core";
import { jsRemoveEndingSemicolons, domRemoveExternalCssAndScripts } from "../lib/code-utils";
import { sizeDifference } from "../lib/logging";
import { getSwcMinifyOptions } from "./js-optimize-swc";

export async function bundleWithSwc(input: ViteBuildOutput): Promise<ViteBundledOutput> {
  return devLog.timed(
    async function bundle_swc(): Promise<ViteBundledOutput> {
      const dom = new JSDOM(input.html.source);
      const entries = getMainEntries(input, dom);

      const swcMinifyOptions = getSwcMinifyOptions({
        sourceType: "module",
        mangle: true,
        preserve_annotations: true,
      });

      const externalModules = [...input.assets, ...input.css]
        .map((item) => item.fileName || item.name || "")
        .filter(Boolean);

      const assetsBytes = input.assets.reduce((p, c) => p + utf8ByteLength(c.source), 0);
      const initialSize =
        input.js.reduce((p, c) => p + utf8ByteLength(c.code), 0) +
        input.css.reduce((p, c) => p + utf8ByteLength(c.source), 0) +
        assetsBytes +
        utf8ByteLength(input.html.source);

      const bundled = await swcBundle({
        entry: entries,
        module: {},
        mode: "production",
        target: "browser",
        workingDir: outPath_build,
        externalModules,
        options: {
          cwd: outPath_build,
          inputSourceMap: false,
          sourceMaps: false,
          configFile: false,
          isModule: true,
          minify: true,
          jsc: {
            keepClassNames: false,
            minify: swcMinifyOptions,
            target: "es2022",
          },
        },
        output: { name: "index.js", path: path.join(outPath_build) },
      });

      const js = mergeSwcJSOutput(bundled);

      const css = mergeCss(input);

      domRemoveExternalCssAndScripts(dom);

      if (css.length > 0) {
        const link = dom.window.document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/index.css";
        dom.window.document.head.appendChild(link);
      }

      if (js.length > 0) {
        const script = dom.window.document.createElement("script");
        script.type = "module";
        script.src = "/index.js";
        script.toggleAttribute("crossorigin", true);
        dom.window.document.body.appendChild(script);
      }

      const html = dom.window.document.querySelector("html")?.outerHTML || "";

      const finalSize = utf8ByteLength(js, html, css, assetsBytes);

      this.setSuccessText(sizeDifference(initialSize, finalSize));

      const result: ViteBundledOutput = {
        js,
        css,
        html,
        assets: input.assets,
      };

      return result;
    },
    { spinner: true },
  );
}

function mergeCss(input: ViteBuildOutput) {
  let css = "";
  for (const stylesheet of input.css) {
    if (css.length > 0) {
      css += "\n";
    }
    css += `${toUTF8(stylesheet.source)}\n`;
  }
  return css;
}

function getMainEntries(input: ViteBuildOutput, dom: JSDOM) {
  const entries = new Set<string>();
  const scripts: HTMLScriptElement[] = Array.from(dom.window.document.querySelectorAll('script[type="module"]'));
  for (const script of scripts) {
    let { src } = script;
    if (src && !script.getAttribute("data-debug")) {
      if (src.startsWith("/")) {
        src = `.${src}`;
      }
      if (src.startsWith(".") || !src.includes(":")) {
        entries.add(path.resolve(outPath_build, src));
      }
      script.remove();
    }
  }
  return Array.from(entries);
}

function mergeSwcJSOutput(bundled: Record<string, Output>): string {
  const files: string[] = [];
  for (const { code } of Object.values(bundled)) {
    const js = jsRemoveEndingSemicolons(code);
    if (js.length > 0) {
      files.push(js);
    }
  }
  if (files.length === 0) {
    return "";
  }
  if (files.length === 1) {
    return files[0]!;
  }
  return `(()=>{${files.join("})();(()=>{")}})()`;
}
