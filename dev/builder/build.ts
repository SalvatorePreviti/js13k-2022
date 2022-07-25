import path from "path";
import {
  devLogBuilding,
  devPrintOjutputFileWritten,
  devWriteOutputFile,
  FilesSizeTermBox,
  globalReport,
} from "./lib/logging";
import fs from "fs/promises";
import { devLog } from "@balsamic/dev";
import { writeFinalBundle, writeOptimizedBundle } from "./lib/write-bundle";
import { zipBundle } from "./steps/bundle-zip";
import { outPath_bundle, outPath_minify, outPath_rolled, outPath_zip } from "./out-paths";
import type { WriteBundleInput } from "./lib/write-bundle";

import type { ViteBundledOutput } from "./steps/build-vite";
import { buildWithVite } from "./steps/build-vite";
import { bundleHtml } from "./steps/bundle-html";
import { jsOptimizeTerser } from "./steps/js-optimize-terser";
import { cssOptimize } from "./steps/css-optimize";

import { jsBeautify, jsTransformSwc } from "./steps/js-transform-swc";
import { jsRoadroller } from "./steps/js-roadroller";
import { htmlCssToJs } from "./steps/html-css-to-js";
import { jsUglify } from "./steps/js-uglify";
import zlib from "zlib";
import { jsTdeMinify } from "./steps/js-tde-minify";
// import { jsEsbuildMinify } from "./steps/js-esbuild";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const includeDevTools = process.argv.includes("--with-dev-tools");

  const sources = await buildWithVite({ stripDevTools: !includeDevTools });

  try {
    sources.css = await cssOptimize(sources.css);

    const htmlCssJsBundle = await htmlCssToJs(sources);

    sources.css = "";
    sources.html = htmlCssJsBundle.html;
    sources.js = htmlCssJsBundle.js;

    // sources.js = await jsEsbuildMinify(sources.js);

    sources.js = await jsTransformSwc(sources.js, { mangle: false, constToLet: false, repeat: 1 });

    sources.js = await jsOptimizeTerser(sources.js, { mangle: false });

    sources.js = await jsTransformSwc(sources.js, { mangle: false, constToLet: true, repeat: 1 });

    sources.js = await jsTdeMinify(sources.js);

    sources.js = await jsUglify(sources.js, { mangle: false, varify: true });

    sources.js = await jsOptimizeTerser(sources.js, { mangle: true });

    sources.js = await jsOptimizeTerser(sources.js, { mangle: true });

    // sources.js = await jsOptimizeTerser(sources.js, { mangle: false });

    // sources.js = await jsTdeMinify(sources.js);
  } finally {
    await writeOptimizedBundle(sources);

    try {
      await fs.writeFile(path.resolve(outPath_minify, "index-beautified.js"), await jsBeautify(sources.js));
    } catch {}
  }

  const optimizedTotalSize = logTableOptimized(sources);

  devLog.log();
  devPrintOjutputFileWritten(outPath_minify, optimizedTotalSize);
  devLog.log();

  const bundled: WriteBundleInput = {
    html: (await bundleHtml(sources)).html,
    assets: sources.assets,
  };

  logTableBundled(bundled, "bundled", true);

  await writeFinalBundle(bundled, outPath_bundle);

  const compressedBundle = { ...bundled };
  compressedBundle.html = await jsRoadroller(bundled.html);

  logTableBundled(compressedBundle, "rolled");

  await writeFinalBundle(compressedBundle, outPath_rolled);

  const zippedBuffer = await zipBundle(compressedBundle);

  devLog.log();
  await devWriteOutputFile(outPath_zip, zippedBuffer, null);
  devLog.log();

  if (!FilesSizeTermBox.final(zippedBuffer.length)) {
    process.exitCode = 1;
  }

  await globalReport.append();
}

function logTableBundled(bundled: WriteBundleInput, name: string, showGZippedSize: boolean = false) {
  devLog.log();
  const box = FilesSizeTermBox.new(name).sizeRow(
    name,
    bundled.html,
    bundled.assets.reduce((r, a) => r + a.source.length, 0),
  );
  if (showGZippedSize) {
    const buffer = Buffer.concat([
      Buffer.from(bundled.html),
      ...bundled.assets.map((asset) => Buffer.from(asset.source)),
    ]);
    box.sizeRow("gzipped", zlib.gzipSync(buffer, { level: 9 }));
  }
  box.print();
  devLog.log();
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
