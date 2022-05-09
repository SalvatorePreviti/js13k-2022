import type { RollupOutput, OutputChunk, OutputAsset, RollupWatcher } from "rollup";

export interface ViteBuildOutput {
  indexHtml: OutputAsset;
  scripts: OutputChunk[];
  stylesheets: OutputAsset[];
  assets: OutputAsset[];
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

  let indexHtml: OutputAsset | undefined;
  const scripts: OutputChunk[] = [];
  const stylesheets: OutputAsset[] = [];
  const assets: OutputAsset[] = [];

  for (const o of viteBuildOutput.output) {
    if (o.type === "asset") {
      if (o.fileName.endsWith(".css")) {
        stylesheets.push(o);
      } else if (o.fileName === "index.html") {
        if (indexHtml) {
          throw new Error("ViteBuildOutput: multiple index.html found");
        }
        indexHtml = o;
      } else {
        assets.push(o);
      }
    } else if (o.type === "chunk") {
      scripts.push(o);
    }
  }

  if (!indexHtml) {
    throw new Error("ViteBuildOutput: index.html not found in vite build outputs");
  }

  return {
    indexHtml,
    scripts,
    stylesheets,
    assets,
  };
}
