import { toUTF8 } from "@balsamic/dev";
import type { RollupOutput, OutputChunk, OutputAsset, RollupWatcher } from "rollup";

export interface ViteBuildOutput {
  html: OutputAsset;
  js: OutputChunk[];
  css: OutputAsset[];
  assets: OutputAsset[];
}

export interface ViteBundledOutput {
  js: string;
  css: string;
  html: string;
  assets: OutputAsset[];
  assetsBytes: number;
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
      } else {
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

export function bundleViteOutput(input: ViteBuildOutput): ViteBundledOutput {
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
    assetsBytes: input.assets.reduce((r, a) => r + a.source.length, 0),
  };
  return result;
}
