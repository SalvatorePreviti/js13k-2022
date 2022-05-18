import { devLog, utf8ByteLength } from "@balsamic/dev";
import type { RollupOutput, OutputChunk, OutputAsset, RollupWatcher } from "rollup";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import config from "../../config";
import fs from "fs/promises";
import { outPath_build } from "../out-paths";
import { coloredPrettySize } from "../lib/logging";
import type { UserConfig as ViteUserConfig } from "vite";
import { rollupPluginSpglsl } from "spglsl";
import { browserPureFunctions } from "../lib/browser-pure-functions";

export interface ViteBuildOutput {
  js: OutputChunk[];
  css: OutputAsset[];
  html: OutputAsset;
  assets: OutputAsset[];
}

export interface ViteBundledOutput {
  js: string;
  css: string;
  html: string;
  assets: OutputAsset[];
}

const ESBUILD_TARGETS = ["chrome99", "firefox99", "edge99"];

export const viteConfigBuild: ViteUserConfig = {
  build: {
    write: true,
    sourcemap: true,
    emptyOutDir: true,
    outDir: outPath_build,
    minify: false,
    cssTarget: ESBUILD_TARGETS,
    cssCodeSplit: false,
    manifest: false,
    ssrManifest: false,
    ssr: false,
    polyfillModulePreload: false,
    reportCompressedSize: false,
    target: "es2022",
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
    minify: false,
    globalName: "window",
    pure: browserPureFunctions,
  },

  plugins: [rollupPluginSpglsl({})],
};

export async function bundleWithVite(): Promise<ViteBuildOutput> {
  return devLog.timed(
    async function vite_build() {
      await fs.rm(outPath_build, { maxRetries: 5, recursive: true, force: true });
      const result = processViteBuildOutput(await viteBuild(viteMergeConfig(config, viteConfigBuild, true)));
      this.setSuccessText(
        coloredPrettySize(
          result.js.reduce((p, c) => p + utf8ByteLength(c.code), 0) +
            result.css.reduce((p, c) => p + utf8ByteLength(c.source), 0) +
            result.assets.reduce((p, c) => p + utf8ByteLength(c.source), 0) +
            utf8ByteLength(result.html.source),
        ),
      );
      return result;
    },
    { printStarted: false },
  );
}

function processViteBuildOutput(viteBuildOutput: RollupOutput | RollupOutput[] | RollupWatcher): ViteBuildOutput {
  if (Array.isArray(viteBuildOutput)) {
    if (viteBuildOutput.length !== 1) {
      throw new Error(`ViteBuildOutput: expected 1 output, received ${viteBuildOutput.length}`);
    }
    viteBuildOutput = viteBuildOutput[0]!;
  }

  if (!("output" in viteBuildOutput) || !Array.isArray(viteBuildOutput.output)) {
    throw new Error("ViteBuildOutput: expected a RollupOutput, received something else");
  }

  let html: OutputAsset | undefined;
  const js: OutputChunk[] = [];
  const css: OutputAsset[] = [];
  const assets: OutputAsset[] = [];

  for (const o of viteBuildOutput.output) {
    if (o.type === "asset") {
      if (o.fileName.endsWith(".css")) {
        css.push(o);
      } else if (o.fileName === "index.html") {
        if (html) {
          throw new Error("ViteBuildOutput: multiple index.html found");
        }
        html = o;
      } else if (o.fileName !== "esbuild") {
        assets.push(o);
      }
    } else if (o.type === "chunk") {
      js.push(o);
    }
  }

  if (!html) {
    throw new Error("ViteBuildOutput: index.html not found in vite build outputs");
  }

  return { html, js, css, assets };
}
