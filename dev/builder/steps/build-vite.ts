import { devLog, toUTF8, utf8ByteLength } from "@balsamic/dev";
import type { RollupOutput, OutputAsset, RollupWatcher } from "rollup";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import config from "../../config";
import fs from "fs/promises";
import { outPath_build } from "../out-paths";
import { coloredPrettySize } from "../lib/logging";
import type { UserConfig as ViteUserConfig } from "vite";
import { rollupPluginSpglsl } from "spglsl";
import { browserPureFunctions, domRemoveExternalCssAndScripts } from "../lib/code-utils";
import { JSDOM } from "jsdom";
import { rollupPluginSwcTransform } from "./build-swc-transform";

export interface ViteBundledOutput {
  js: string;
  css: string;
  html: string;
  assets: OutputAsset[];
}

export const ESBUILD_TARGETS = ["chrome99", "firefox99"];

export const viteConfigBuild: ViteUserConfig = {
  build: {
    write: true,
    sourcemap: true,
    emptyOutDir: true,
    outDir: outPath_build,
    minify: "esbuild",
    cssTarget: ESBUILD_TARGETS,
    cssCodeSplit: false,
    manifest: false,
    ssrManifest: false,
    ssr: false,
    polyfillModulePreload: false,
    reportCompressedSize: false,
    target: ESBUILD_TARGETS,
    commonjsOptions: { transformMixedEsModules: true, esmExternals: true },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: ({ name }) => (name?.endsWith(".css") ? "[name].[ext]" : `assets/[name].[ext]`),
      },
    },
  },

  esbuild: {
    treeShaking: true,
    sourcemap: "external",
    target: ESBUILD_TARGETS,
    charset: "utf8",
    keepNames: false,
    minifyIdentifiers: false,
    minifySyntax: true,
    minifyWhitespace: true,
    minify: false,
    globalName: "window",
    pure: browserPureFunctions,
  },

  plugins: [rollupPluginSpglsl({}), rollupPluginSwcTransform()],
};

export async function buildWithVite(): Promise<ViteBundledOutput> {
  return devLog.timed(
    async function vite_build() {
      await fs.rm(outPath_build, { maxRetries: 5, recursive: true, force: true });
      const result = processViteBuildOutput(await viteBuild(viteMergeConfig(config, viteConfigBuild, true)));
      this.setSuccessText(
        coloredPrettySize(
          utf8ByteLength(result.js) +
            utf8ByteLength(result.css) +
            utf8ByteLength(result.html) +
            result.assets.reduce((p, c) => p + utf8ByteLength(c.source), 0),
        ),
      );
      return result;
    },
    { printStarted: false },
  );
}

function processViteBuildOutput(viteBuildOutput: RollupOutput | RollupOutput[] | RollupWatcher): ViteBundledOutput {
  if (Array.isArray(viteBuildOutput)) {
    if (viteBuildOutput.length !== 1) {
      throw new Error(`ViteBuildOutput: expected 1 output, received ${viteBuildOutput.length}`);
    }
    viteBuildOutput = viteBuildOutput[0]!;
  }

  if (!("output" in viteBuildOutput) || !Array.isArray(viteBuildOutput.output)) {
    throw new Error("ViteBuildOutput: expected a RollupOutput, received something else");
  }

  const assets: OutputAsset[] = [];

  let js = "";
  let css = "";
  let html = "";

  for (const o of viteBuildOutput.output) {
    if (o.type === "asset") {
      if (o.fileName.endsWith(".css")) {
        if (css.length > 0) {
          css += "\n";
        }
        css += toUTF8(o.source);
      } else if (o.fileName === "index.html") {
        if (html) {
          throw new Error("ViteBuildOutput: multiple index.html found");
        }
        html = toUTF8(o.source);
      } else if (o.fileName !== "esbuild") {
        assets.push(o);
      }
    } else if (o.type === "chunk") {
      if (js.length > 0) {
        js += "\n";
      }
      js += o.code;
    }
  }

  if (html) {
    const dom = new JSDOM(html);

    domRemoveExternalCssAndScripts(dom);

    if (css.length) {
      const link = dom.window.document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/index.css";
      dom.window.document.head.appendChild(link);
    }

    if (js.length) {
      const script = dom.window.document.createElement("script");
      script.type = "module";
      script.src = "/index.js";
      script.toggleAttribute("crossorigin", true);
      dom.window.document.body.appendChild(script);
    }

    html = dom.window.document.querySelector("html")?.outerHTML || "";
  }

  return { html, js, css, assets };
}
