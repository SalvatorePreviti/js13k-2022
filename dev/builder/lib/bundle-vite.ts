import { devLog, toUTF8, utf8ByteLength } from "@balsamic/dev";
import type { RollupOutput, OutputChunk, OutputAsset, RollupWatcher } from "rollup";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import config from "../../config";
import fs from "fs/promises";
import { viteConfigBuild, viteOutDir } from "../build-config";
import { coloredPrettySize } from "./logging";

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

export async function bundleWithVite(): Promise<ViteBuildOutput> {
  return devLog.timed(
    async function vite_build() {
      await fs.rm(viteOutDir, { maxRetries: 5, recursive: true, force: true });
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

export function processViteBuildOutput(
  viteBuildOutput: RollupOutput | RollupOutput[] | RollupWatcher,
): ViteBuildOutput {
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

export async function bundleViteOutputPlain(input: ViteBuildOutput): Promise<ViteBundledOutput> {
  let js = "";
  for (const stylesheet of input.js) {
    js += `${toUTF8(stylesheet.code)}\n`;
  }
  let css = "";
  for (const stylesheet of input.css) {
    css += `${toUTF8(stylesheet.source)}\n`;
  }
  const result: ViteBundledOutput = {
    js,
    css,
    html: toUTF8(input.html.source),
    assets: input.assets,
  };

  return result;
}
