import path from "path";
import zlib from "zlib";
import fs from "fs/promises";
import {
  devLogBuilding,
  devPrintOjutputFileWritten,
  devWriteOutputFile,
  FilesSizeTermBox,
  globalReport,
  JS13K_SIZE_IN_BYTES,
} from "./lib/logging";
import { devLog } from "@balsamic/dev";
import { writeFinalBundle, writeOptimizedBundle } from "./lib/write-bundle";
import { zipBundle } from "./steps/bundle-zip";
import { outPath_bundle, outPath_minify, outPath_rolled, outPath_zip } from "./out-paths";
import type { WriteBundleInput } from "./lib/write-bundle";
import type { ViteBundledOutput } from "./steps/build-vite";
import { buildWithVite } from "./steps/build-vite";
import { bundleHtml } from "./steps/bundle-html";
import { jsTerser } from "./steps/js-terser";
import { cssOptimize } from "./steps/css-optimize";
import { jsTransformSwc } from "./steps/swc/js-transform-swc";
import { jsRoadroller } from "./steps/js-roadroller";
import { htmlCssToJs } from "./steps/html-css-to-js";
import { jsUglify } from "./steps/js-uglify";
import { htmlMinify } from "./steps/html-minify";
import { dprint } from "./steps/dprint";
import { StreamedClosureCompiler } from "./steps/js-closure";
import { swcPluginVars } from "./steps/swc/transforms/swc-plugin-vars";
import { jsEsbuildMinify } from "./steps/js-esbuild";
import { jsBabel } from "./steps/babel/js-babel";
import { babelPluginVars } from "./steps/babel/babel-plugin-vars";
import resugarBlockScope from "@resugar/codemod-declarations-block-scope";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import resugarObjectsShorthand from "@resugar/codemod-objects-shorthand";

devLog.titlePaddingWidth = 18;

export async function build() {
  const streamedClosureCompiler = new StreamedClosureCompiler({
    beautify: true,
    rename_variable_prefix: "$$$",
  });

  try {
    streamedClosureCompiler.start();

    devLogBuilding("src", "dist");

    const includeDevTools = process.argv.includes("--with-dev-tools");

    const sources = await buildWithVite({ stripDevTools: !includeDevTools });

    devLog.log();
    await devLog.timed(async function minify() {
      try {
        devLog.log();
        [sources.html, sources.css, sources.js] = await Promise.all([
          htmlMinify(sources.html, { prependUtf8BOM: true, type: "page" }),
          cssOptimize(sources.css),
          minifyJavascript(sources.js),
        ]);
      } finally {
        await Promise.all([
          writeOptimizedBundle(sources),
          (async () => {
            try {
              await fs.writeFile(path.resolve(outPath_minify, "index-beautified.js"), await dprint(sources.js));
            } catch {}
          })(),
        ]);
      }
    });

    const optimizedTotalSize = logTableOptimized(sources);

    devLog.log();
    devPrintOjutputFileWritten(outPath_minify, optimizedTotalSize);
    devLog.log();

    const bundled: WriteBundleInput = {
      html: (await bundleHtml(sources)).html,
    };

    logTableBundled(bundled, "bundled", true);

    await writeFinalBundle(bundled, outPath_bundle);

    const [zippedRolledBuffer, zippedPlainBuffer] = await Promise.all([
      zipRoadRoller(sources, bundled),
      zipBundle(bundled, "plain"),
    ]);

    const rolledPlainZipSizeDiff = zippedRolledBuffer.length - zippedPlainBuffer.length;

    if (rolledPlainZipSizeDiff > 0) {
      devLog.logYellow(`\nRolled zip is ${rolledPlainZipSizeDiff} bytes LARGER than plain zip`);
    } else {
      devLog.logCyan(`\nRolled zip is ${-rolledPlainZipSizeDiff} bytes smaller than plain zip`);
    }

    let finalBuffer: Buffer;
    if (rolledPlainZipSizeDiff < 100 && zippedPlainBuffer.length < JS13K_SIZE_IN_BYTES) {
      finalBuffer = zippedPlainBuffer;
      devLog.logRedBright("Choosing ZIP over ROLLED");
    } else {
      finalBuffer = zippedRolledBuffer;
    }

    devLog.log();
    await devWriteOutputFile(outPath_zip, finalBuffer, null);
    devLog.log();

    if (!FilesSizeTermBox.final(finalBuffer.length)) {
      process.exitCode = 1;
    }

    await globalReport.append();
  } finally {
    streamedClosureCompiler.kill();
  }

  async function minifyJavascript(js: string): Promise<string> {
    js = await dprint(js);

    js = await jsTransformSwc(js, false, swcPluginVars({ unmangleableProperties: "mark" }));

    js = await jsUglify(js, {
      varify: false,
      final: false,
      reduce_vars: true,
      join_vars: true,
      sequences: true,
      computed_props: true,
    });

    js = await jsTransformSwc(js, false, swcPluginVars());

    js = await jsBabel(js, {
      minify: false,
      plugins: [
        resugarBlockScope,
        resugarFunctionsArrow,
        resugarObjectsShorthand,
        babelPluginVars(),
        "babel-plugin-pure-calls-annotation",
        // "babel-plugin-annotate-pure-calls",
      ],
    });

    js = await jsEsbuildMinify(js, {
      mangle: false,
      minifySyntax: true,
      minifyWhitespace: false,
      computed_props: false,
    });

    js = await jsTransformSwc(js, { final: false, computed_props: true }, swcPluginVars());

    js = await jsTerser(js, {
      mangle: false,
      final: false,
      join_vars: false,
      sequences: true,
      computed_props: true,
    });

    js = await jsBabel(js, {
      minify: false,
      plugins: [
        resugarBlockScope,
        resugarFunctionsArrow,
        resugarObjectsShorthand,
        babelPluginVars(),
        "babel-plugin-pure-calls-annotation",
        // "babel-plugin-annotate-pure-calls",
      ],
    });

    js = await jsUglify(js, {
      varify: true,
      final: false,
      reduce_vars: true,
      join_vars: true,
      sequences: true,
      computed_props: true,
    });

    // js = `(()=>{${js}})()`;

    js = await jsTransformSwc(js, false, swcPluginVars());

    js = await jsBabel(js, {
      minify: false,
      plugins: [
        resugarBlockScope,
        resugarFunctionsArrow,
        resugarObjectsShorthand,
        "babel-plugin-pure-calls-annotation",
        // "babel-plugin-annotate-pure-calls",
      ],
    });

    js = await jsTransformSwc(
      js,
      null,
      swcPluginVars({
        unmangleableProperties: "transform",
        floatRound: 6,
      }),
    );

    // Google closure compiler.

    js = await streamedClosureCompiler.compileOne(js);

    js = await jsBabel(js, {
      minify: false,
      plugins: [
        resugarBlockScope,
        resugarObjectsShorthand,
        resugarFunctionsArrow,
        babelPluginVars({}),
        "babel-plugin-pure-calls-annotation",
        // "babel-plugin-annotate-pure-calls",
      ],
    });

    js = await jsTransformSwc(js, false, swcPluginVars({ constToLet: true }));

    // Mangling

    js = await jsTerser(js, {
      mangle: "variables",
      final: false,
      join_vars: true,
      sequences: true,
      computed_props: true,
    });

    js = await jsBabel(js, {
      minify: false,
      plugins: [
        resugarFunctionsArrow,
        resugarObjectsShorthand,
        babelPluginVars({ splitVars: true }),
        "babel-plugin-pure-calls-annotation",
        // "babel-plugin-annotate-pure-calls",
      ],
    });

    js = await jsTerser(js, {
      mangle: false,
      final: true,
      join_vars: true,
      sequences: true,
      computed_props: true,
    });

    return js;
  }
}

async function zipRoadRoller(sources: ViteBundledOutput, bundled: WriteBundleInput) {
  const htmlCssJsBundle = await htmlCssToJs(sources);
  const bundledHtmlBodyAndCss = await jsEsbuildMinify(htmlCssJsBundle.jsHtml, {
    mangle: false,
    minifySyntax: true,
    minifyWhitespace: true,
    computed_props: true,
  });
  htmlCssJsBundle.jsHtml = "";
  if (bundledHtmlBodyAndCss) {
    htmlCssJsBundle.js = `${bundledHtmlBodyAndCss};${htmlCssJsBundle.js}`;
  }

  const compressedBundle: WriteBundleInput = {
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

  devLog.log();
  await writeFinalBundle(compressedBundle, outPath_rolled);

  return zipBundle(compressedBundle, "rolled");
}

function logTableBundled(bundled: WriteBundleInput, name: string, showGZippedSize: boolean = false) {
  devLog.log();
  const box = FilesSizeTermBox.new(name).sizeRow(name, bundled.html);
  if (showGZippedSize) {
    box.sizeRow("gzipped", zlib.gzipSync(Buffer.from(bundled.html, "utf8"), { level: 9 }));
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
    .hr()
    .totalRow("total")
    .print().totalValue;
  return optimizedTotalSize;
}
