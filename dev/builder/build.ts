import {
  devLogBuilding,
  devPrintOjutputFileWritten,
  devWriteOutputFile,
  FilesSizeTermBox,
  globalReport,
} from "./lib/logging";
import { devLog } from "@balsamic/dev";
import { writeFinalBundle, writeOptimizedBundle } from "./lib/write-bundle";
import { zipBundle } from "./steps/zip-bundle";
import { outPath_minify, outPath_zip } from "./out-paths";
import type { WriteBundleInput } from "./lib/write-bundle";

import type { ViteBundledOutput } from "./steps/bundle-vite";
import { bundleWithVite } from "./steps/bundle-vite";
import { bundleHtml } from "./steps/bundle-html";
import { jsOptimizeTerser } from "./steps/js-optimize-terser";
import { cssOptimize } from "./steps/css-optimize";
import { jsOptimizeSwc } from "./steps/js-optimize-swc";
import { htmlMinify } from "./steps/html-minify";

import { jsOptimizeEsbuild } from "./steps/js-optimize-esbuild";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const sources = await bundleWithVite();

  try {
    // sources.js = await jsOptimizeSwc(sources.js);
    // sources.js = await jsOptimizeEsbuild(sources.js, { mangle: true });
    // sources.js = await jsOptimizeSwc(sources.js);
    sources.js = await jsOptimizeTerser(sources.js, { mangle: false, hoist: true });
    sources.js = await jsOptimizeEsbuild(sources.js, { mangle: true });
    sources.js = await jsOptimizeTerser(sources.js, { mangle: "all", hoist: true });

    sources.html = await htmlMinify(sources.html);
    sources.css = await cssOptimize(sources.css);
  } finally {
    await writeOptimizedBundle(sources);
  }

  const optimizedTotalSize = logTableOptimized(sources);

  devLog.log();
  devPrintOjutputFileWritten(outPath_minify, optimizedTotalSize);
  devLog.log();

  const bundled: WriteBundleInput = {
    html: (await bundleHtml(sources)).html,
    assets: sources.assets,
  };

  logTableBundled(bundled);

  devLog.log();
  await writeFinalBundle(bundled);
  devLog.log();

  const zippedBuffer = await zipBundle(bundled);

  devLog.log();
  await devWriteOutputFile(outPath_zip, zippedBuffer);
  devLog.log();

  if (!FilesSizeTermBox.final(zippedBuffer.length)) {
    process.exitCode = 1;
  }

  await globalReport.append();
}

function logTableBundled(bundled: WriteBundleInput) {
  devLog.log();
  FilesSizeTermBox.new("bundle")
    .sizeRow(
      "bundle",
      bundled.html,
      bundled.assets.reduce((r, a) => r + a.source.length, 0),
    )
    .print();
}

function logTableOptimized(bundledSwc: ViteBundledOutput) {
  devLog.log();
  const optimizedTotalSize = FilesSizeTermBox.new("optimized")
    .sizeRow("js", bundledSwc.js)
    .sizeRow("html", bundledSwc.html)
    .sizeRow("css", bundledSwc.css)
    .sizeRowOptional(
      "assets",
      bundledSwc.assets.reduce((r, a) => r + a.source.length, 0),
    )
    .hr()
    .totalRow("total")
    .print().totalValue;
  return optimizedTotalSize;
}
