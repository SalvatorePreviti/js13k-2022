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
import { cssOptimizeParcel } from "./steps/css-optimize-parcel";
import { bundleWithSwc } from "./steps/bundle-swc";
import { jsOptimizeTde } from "./steps/js-optimize-tde";
import { jsOptimizeSwc } from "./steps/js-optimize-swc";
import { htmlMinify } from "./steps/html-minify";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const bundledVite = await bundleWithVite();

  devLog.log();

  const bundledSwc = await bundleWithSwc(bundledVite);

  bundledSwc.html = htmlMinify(bundledSwc.html, { minifyCss: true });

  bundledSwc.css = cssOptimizeParcel(bundledSwc.css);

  bundledSwc.js = await jsOptimizeTde(bundledSwc.js, { iife: false });

  bundledSwc.js = await jsOptimizeSwc(bundledSwc.js);

  bundledSwc.js = await jsOptimizeTde(bundledSwc.js, { iife: true });

  bundledSwc.js = await jsOptimizeTerser(bundledSwc.js);

  await writeOptimizedBundle(bundledSwc);

  const optimizedTotalSize = logTableOptimized(bundledSwc);

  devLog.log();
  devPrintOjutputFileWritten(outPath_minify, optimizedTotalSize);
  devLog.log();

  const bundled: WriteBundleInput = {
    html: bundleHtml(bundledSwc).html,
    assets: bundledSwc.assets,
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
