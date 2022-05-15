import { devLogBuilding, devPrintJS13KFinalBundleSize, devWriteOutputFile, printFileSizes } from "./lib/utils";
import fs from "fs/promises";
import config from "../config";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import type { ViteBuildOutput } from "./lib/vite-output";
import { bundleViteOutput, processViteBuildOutput } from "./lib/vite-output";
import { devLog } from "@balsamic/dev";
import { viteConfigBuild, viteOutDir } from "./build-config";
import { writeBundle } from "./lib/write-bundle";
import { zipBundle } from "./lib/zip-bundle";
import { bundleHtml } from "./lib/bundle-html";
import { optimizeViteOutput } from "./lib/optimize";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const viteBuiltOutput = await devLog.timed("vite build", viteBuildOutput, { printStarted: false });

  const viteOutput = bundleViteOutput(viteBuiltOutput);

  const initialSize = printFileSizes(
    {
      js: viteOutput.js,
      css: viteOutput.css,
      html: viteOutput.html,
      assets: viteOutput.assetsBytes || undefined,
    },
    { total: true },
  );

  const optimized = await optimizeViteOutput(viteOutput);
  const bundled = bundleHtml(optimized);

  const optimizedSize = printFileSizes(
    {
      js: optimized.js,
      css: optimized.css,
      html: optimized.html,
      assets: optimized.assetsBytes || undefined,
    },
    { total: true, previousTotal: initialSize },
  );

  await writeBundle(bundled);

  printFileSizes(
    {
      html: bundled.html,
      assets: bundled.assetsBytes || undefined,
    },
    { total: true, previousTotal: optimizedSize },
  );

  const zippedBuffer = await zipBundle(bundled);
  devLog.log();
  await devWriteOutputFile("dist/bundle.zip", zippedBuffer);
  devLog.log();

  if (!devPrintJS13KFinalBundleSize(zippedBuffer.length)) {
    process.exitCode = 1;
  }
}

async function viteBuildOutput(): Promise<ViteBuildOutput> {
  await fs.rm(viteOutDir, { maxRetries: 5, recursive: true, force: true });
  const viteBuilt = await viteBuild(viteMergeConfig(config, viteConfigBuild, true));
  return processViteBuildOutput(viteBuilt);
}
