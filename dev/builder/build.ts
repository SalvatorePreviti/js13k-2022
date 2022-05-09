import {
  devBeginOperation,
  devEndOperation,
  devLogBuilding,
  devPrintJS13KFinalBundleSize,
  devWriteOutputFile,
} from "./lib/utils";
import fs from "fs/promises";
import config from "../config";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import { processViteBuildOutput } from "./lib/process-vite-output";
import { colors, devLog } from "@balsamic/dev";
import { viteConfigBuild, viteOutDir } from "./build-config";
import { optimizeViteBuildOutput } from "./lib/optimize-vite-build-output";
import { writeBundle } from "./lib/write-bundle";
import { zipBundle } from "./lib/zip-bundle";
import { bundleHtml } from "./lib/bundle-html";

export async function build() {
  devLog.hr(colors.rgb(110, 100, 255));
  devLog.log(colors.rgb(80, 220, 255).bold("GREETINGS PROFESSOR FALKEN."));
  devLog.hr(colors.rgb(110, 100, 255));
  devLog.log();

  devBeginOperation("build");

  devLogBuilding("src", "dist");

  devBeginOperation("vite build");

  await fs.rm(viteOutDir, { maxRetries: 5, recursive: true, force: true });

  const viteBuilt = await viteBuild(viteMergeConfig(config, viteConfigBuild, true));
  devEndOperation();

  const viteBuildOutput = processViteBuildOutput(viteBuilt);

  const optimized = await optimizeViteBuildOutput(viteBuildOutput);

  const bundled = await bundleHtml(optimized);

  await writeBundle(bundled);

  const zippedBuffer = await zipBundle(bundled);

  console.log();
  await devWriteOutputFile("dist/bundle.zip", zippedBuffer);
  console.log();

  devPrintJS13KFinalBundleSize(zippedBuffer.length);

  devEndOperation();

  devLog.log();
  devLog.hr(colors.rgb(110, 100, 255));
  console.log(colors.rgb(80, 220, 255).bold("SHALL WE PLAY A GAME?"));
  devLog.hr(colors.rgb(110, 100, 255));
}
