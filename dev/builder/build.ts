import { devLogBuilding, devPrintJS13KFinalBundleSize, devWriteOutputFile, printFileSizes } from "./lib/utils";
import fs from "fs/promises";
import config from "../config";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import { bundleViteOutput, processViteBuildOutput, ViteBuildOutput } from "./lib/vite-output";
import { devLog } from "@balsamic/dev";
import { viteConfigBuild, viteOutDir } from "./build-config";
import { writeBundle } from "./lib/write-bundle";
import { zipBundle } from "./lib/zip-bundle";
import { bundleHtml } from "./lib/bundle-html";
import { optimizeViteOutput } from "./lib/optimize";

devLog.options.titlePaddingWidth = 16;

export async function build() {
  devLog.greetings();

  devLogBuilding("src", "dist");

  const viteBuiltOutput = await devLog.timed("vite build", viteBuildOutput, { printStarted: false });

  const viteOutput = bundleViteOutput(viteBuiltOutput);

  printFileSizes({
    js: viteOutput.js,
    css: viteOutput.css,
    html: viteOutput.html,
    assets: viteOutput.assetsBytes || undefined,
    total: true,
  });

  const optimized = await optimizeViteOutput(viteOutput);

  printFileSizes({
    js: optimized.js,
    css: optimized.css,
    html: optimized.html,
    assets: optimized.assetsBytes || undefined,
    total: true,
  });

  const bundled = await devLog.timed("bundle html", () => bundleHtml(optimized), { spinner: true });

  printFileSizes({
    html: bundled.html,
    assets: bundled.assetsBytes || undefined,
    total: true,
  });

  await devLog.timed("files written", () => writeBundle(bundled), { printStarted: false });

  const zippedBuffer = await zipBundle(bundled);

  console.log();
  await devWriteOutputFile("dist/bundle.zip", zippedBuffer);
  console.log();

  devPrintJS13KFinalBundleSize(zippedBuffer.length);

  devLog.log();
  devLog.greetings("SHALL WE PLAY A GAME?");
}

async function viteBuildOutput(): Promise<ViteBuildOutput> {
  await fs.rm(viteOutDir, { maxRetries: 5, recursive: true, force: true });
  const viteBuilt = await viteBuild(viteMergeConfig(config, viteConfigBuild, true));
  return processViteBuildOutput(viteBuilt);
}
