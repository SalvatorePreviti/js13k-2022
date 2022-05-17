import { minify as htmlMinify } from "html-minifier";
import { transform as swcTransform, bundle as swcBundle } from "@swc/core";
import { JSDOM } from "jsdom";
import { swcOutDir, viteOutDir } from "../build-config";
import { getSwcMinifyOptions } from "../options/swc-minify-options";
import path from "path";
import { devLog, toUTF8, utf8ByteLength } from "@balsamic/dev";
import fs from "fs/promises";
import { sizeDifference } from "./logging";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import type { ViteBuildOutput, ViteBundledOutput } from "./bundle-vite";
import type { Output } from "@swc/core";
import type { OutputAsset } from "rollup";
import { stripHtmlEndTags } from "./html-strip-end-tag";

export async function bundleWithSwc(input: ViteBuildOutput): Promise<ViteBundledOutput> {
  return devLog.timed(
    async function swc_bundle(): Promise<ViteBundledOutput> {
      const { dom, entries } = getMainEntries(input);

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
        workingDir: viteOutDir,
        externalModules,
        options: {
          cwd: viteOutDir,
          inputSourceMap: true,
          sourceMaps: true,
          configFile: false,
          isModule: true,
          minify: true,
          jsc: {
            keepClassNames: false,
            minify: swcMinifyOptions,
            target: "es2022",
          },
        },
        output: { name: "index.js", path: path.join(viteOutDir, "assets") },
      });

      const { code, map } = mergeSwcBundledOutput(bundled);

      const css = mergeCss(input);

      const minified = await swcTransform(code, {
        cwd: viteOutDir,
        inputSourceMap: map,
        sourceMaps: true,
        configFile: false,
        filename: "index.js",
        isModule: true,
        minify: true,
        jsc: {
          keepClassNames: false,
          minify: swcMinifyOptions,
          target: "es2022",
        },
      });

      removeExternalCssAndScripts(dom);

      const js = minified.code;

      if (css.length > 0) {
        const link = dom.window.document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/assets/index.css";
        dom.window.document.head.appendChild(link);
      }

      if (js.length > 0) {
        const script = dom.window.document.createElement("script");
        script.type = "module";
        script.setAttribute("crossorigin", "");
        script.src = "/assets/index.js";
      }

      let html = dom.window.document.querySelector("html")?.outerHTML || "";
      html = stripHtmlEndTags(htmlMinify(html, getHtmlMinifierOptions({ minifyCss: true })) || html);

      const finalSize = utf8ByteLength(js, html, css, assetsBytes);

      this.setSuccessText(sizeDifference(initialSize, finalSize));

      const result: ViteBundledOutput = {
        js,
        css,
        html,
        assets: input.assets,
      };

      await writeSwcBundle({ ...result, jsmap: minified.map });

      return result;
    },
    { spinner: true },
  );
}

function removeExternalCssAndScripts(dom: JSDOM) {
  Array.from(dom.window.document.querySelectorAll("script[src], link[href]")).forEach((el) => el.remove());
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

function getMainEntries(input: ViteBuildOutput) {
  const dom = new JSDOM(input.html.source);
  const entries = new Set<string>();
  const scripts: HTMLScriptElement[] = Array.from(dom.window.document.querySelectorAll('script[type="module"]'));
  for (const script of scripts) {
    let { src } = script;
    if (src && !script.getAttribute("data-debug")) {
      if (src.startsWith("/")) {
        src = `.${src}`;
      }
      if (src.startsWith(".") || !src.includes(":")) {
        entries.add(path.resolve(viteOutDir, src));
      }
      script.remove();
    }
  }
  return { dom, entries: Array.from(entries) };
}

function mergeSwcBundledOutput(bundled: Record<string, Output>) {
  let merged = "";
  let sourceMap: string | undefined;
  for (const { code, map } of Object.values(bundled)) {
    if (code) {
      if (merged.length > 0) {
        merged += "\n;\n";
      }
      merged += code;
      if (sourceMap === undefined) {
        sourceMap = map;
      }
    }
  }
  return { code: merged, map: sourceMap };
}

async function writeSwcBundle(bundle: {
  css: string;
  js: string;
  jsmap: string | undefined;
  html: string;
  assets: OutputAsset[];
}) {
  await fs.rm(swcOutDir, { maxRetries: 5, recursive: true, force: true });
  await fs.mkdir(swcOutDir, { recursive: true });
  await fs.mkdir(path.join(swcOutDir, "assets"), { recursive: true });

  const promises: Promise<void>[] = [];

  if (bundle.js.length > 0) {
    promises.push(fs.writeFile(path.resolve(swcOutDir, "assets/index.js"), bundle.js, "utf8"));
  }
  if (bundle.jsmap) {
    promises.push(fs.writeFile(path.resolve(swcOutDir, "assets/index.js.map"), bundle.jsmap, "utf8"));
  }
  if (bundle.css.length > 0) {
    promises.push(fs.writeFile(path.resolve(swcOutDir, "assets/index.css"), bundle.css, "utf8"));
  }

  promises.push(fs.writeFile(path.resolve(swcOutDir, "index.html"), bundle.html, "utf8"));

  for (const asset of bundle.assets) {
    const fname = asset.fileName || asset.name;
    if (fname) {
      promises.push(fs.writeFile(path.resolve(swcOutDir, fname), bundle.html, "utf8"));
    }
  }

  await Promise.all(promises);
}
