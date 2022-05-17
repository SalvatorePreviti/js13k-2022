import { devLogBuilding, devWriteOutputFile, FilesSizeTermBox, globalReport } from "./lib/logging";
import { bundleWithVite } from "./lib/bundle-vite";
import { devLog, path } from "@balsamic/dev";
import type { WriteBundleInput } from "./lib/write-bundle";
import { writeBundle } from "./lib/write-bundle";
import { zipBundle } from "./lib/zip-bundle";
import { bundleHtml } from "./lib/bundle-html";
import { jsOptimizeTerser } from "./lib/js-optimize-terser";
import { cssOptimizeParcel } from "./lib/css-optimize-parcel";
import { bundleWithSwc } from "./lib/bundle-swc";
import { zipOutputPath } from "./build-config";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const bundledVite = await bundleWithVite();

  devLog.log();

  const bundledSwc = await bundleWithSwc(bundledVite);

  bundledSwc.js = await jsOptimizeTerser(bundledSwc.js);

  bundledSwc.css = cssOptimizeParcel(bundledSwc.css);

  devLog.log();
  FilesSizeTermBox.new("optimized")
    .sizeRow("js", bundledSwc.js)
    .sizeRow("html", bundledSwc.html)
    .sizeRow("css", bundledSwc.css)
    .sizeRowOptional(
      "assets",
      bundledSwc.assets.reduce((r, a) => r + a.source.length, 0),
    )
    .hr()
    .totalRow("total")
    .print();
  devLog.log();

  const bundled: WriteBundleInput = {
    html: bundleHtml(bundledSwc).html,
    assets: bundledSwc.assets,
  };

  devLog.log();
  FilesSizeTermBox.new("bundle")
    .sizeRow(
      "bundle",
      bundled.html,
      bundled.assets.reduce((r, a) => r + a.source.length, 0),
    )
    .print();
  devLog.log();

  await writeBundle(bundled);

  devLog.log();

  const zippedBuffer = await zipBundle(bundled);

  devLog.log();
  await devWriteOutputFile(zipOutputPath, zippedBuffer);
  devLog.log();

  if (!FilesSizeTermBox.final(zippedBuffer.length)) {
    process.exitCode = 1;
  }

  await globalReport.append();
}
