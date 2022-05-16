import { devLogBuilding, devWriteOutputFile, FilesSizeTermBox } from "./lib/utils";
import fs from "fs/promises";
import config from "../config";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import type { ViteBuildOutput, ViteBundledOutput } from "./lib/vite-output";
import { bundleViteOutput, processViteBuildOutput } from "./lib/vite-output";
import { devLog } from "@balsamic/dev";
import { viteConfigBuild, viteOutDir } from "./build-config";
import { writeBundle } from "./lib/write-bundle";
import { zipBundle } from "./lib/zip-bundle";
import { bundleHtml } from "./lib/bundle-html";
import { optimizeJS } from "./lib/optimize-js";
import { optimizeHtml } from "./lib/optimize-html";
import { optimizeCss } from "./lib/optimize-css";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const viteBuiltOutput = await devLog.timed("vite build", viteBuildOutput, { printStarted: false });

  const viteOutput = bundleViteOutput(viteBuiltOutput);

  const viteOutputSize = FilesSizeTermBox.begin()
    .sizeRow("js", viteOutput.js)
    .sizeRow("html", viteOutput.html)
    .sizeRow("css", viteOutput.css)
    .sizeRowOptional("assets", viteOutput.assetsBytes)
    .hr()
    .totalRow("total")
    .print().totalValue;

  const js = await optimizeJS(viteOutput.js);
  const html = optimizeHtml(viteOutput.html);
  const css = optimizeCss(viteOutput.css);

  const optimized: ViteBundledOutput = { ...viteOutput, js, html, css };

  const bundled = bundleHtml(optimized);

  const optimizedSize = FilesSizeTermBox.begin()
    .sizeRow("js", optimized.js)
    .sizeRow("html", optimized.html)
    .sizeRow("css", optimized.css)
    .sizeRowOptional("assets", viteOutput.assetsBytes)
    .hr()
    .totalRow("total")
    .diffRow("difference", viteOutputSize)
    .print().totalValue;

  FilesSizeTermBox.begin()
    .sizeRow("bundle", bundled.html, viteOutput.assetsBytes)
    .diffRow("difference", optimizedSize)
    .print("");

  await writeBundle(bundled);
  devLog.log();

  const zippedBuffer = await zipBundle(bundled);
  devLog.log();
  await devWriteOutputFile("dist/bundle.zip", zippedBuffer);
  devLog.log();

  if (!FilesSizeTermBox.final(zippedBuffer.length)) {
    process.exitCode = 1;
  }
}

async function viteBuildOutput(): Promise<ViteBuildOutput> {
  await fs.rm(viteOutDir, { maxRetries: 5, recursive: true, force: true });
  const viteBuilt = await viteBuild(viteMergeConfig(config, viteConfigBuild, true));
  return processViteBuildOutput(viteBuilt);
}
