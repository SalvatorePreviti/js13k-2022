import path from "path";
import zlib from "zlib";
import fs from "fs/promises";
import {
  devLogBuilding,
  devPrintOjutputFileWritten,
  devWriteOutputFile,
  FilesSizeTermBox,
  globalReport,
} from "./lib/logging";
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
import { jsTdeMinify } from "./steps/js-tde-minify";
import { jsLebab } from "./steps/js-lebab";
import { htmlMinify } from "./steps/html-minify";
import { jsMinifySwc } from "./steps/js-minify-swc";

devLog.titlePaddingWidth = 18;

export async function build() {
  devLogBuilding("src", "dist");

  const includeDevTools = process.argv.includes("--with-dev-tools");

  const sources = await buildWithVite({ stripDevTools: !includeDevTools });

  try {
    sources.html = await htmlMinify(sources.html, { prependUtf8BOM: true, type: "page" });

    sources.css = await cssOptimize(sources.css);

    // Pre minification

    sources.js = await jsUglify(sources.js, { varify: false, final: false });

    sources.js = await jsOptimizeTerser(sources.js, { mangle: false, final: false });

    // Intermediate, join declarations and statements

    sources.js = await jsTdeMinify(sources.js);

    sources.js = await jsUglify(sources.js, { varify: true, final: false });

    sources.js = await jsLebab(sources.js);

    sources.js = await jsUglify(sources.js, { varify: false, final: true });

    // Mangling and final minification

    sources.js = await jsOptimizeTerser(sources.js, { mangle: true, final: false });

    sources.js = await jsMinifySwc(sources.js, {});

    sources.js = await jsTransformSwc(sources.js, { constToLet: true, letToVar: false });

    sources.js = await jsOptimizeTerser(sources.js, { mangle: true, final: true });
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

  const htmlCssJsBundle = await htmlCssToJs(sources);
  const bundledHtmlBodyAndCss = await jsTdeMinify(htmlCssJsBundle.jsHtml, false);
  htmlCssJsBundle.jsHtml = "";
  if (bundledHtmlBodyAndCss) {
    htmlCssJsBundle.js = `${bundledHtmlBodyAndCss};${htmlCssJsBundle.js}`;
  }

  const compressedBundle: WriteBundleInput = {
    assets: bundled.assets,
    html: (
      await bundleHtml({
        css: "",
        html: htmlCssJsBundle.html,
        js: htmlCssJsBundle.js,
      })
    ).html,
  };

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
