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
import { outPath_build, outPath_bundle, outPath_minify, outPath_rolled, outPath_zip } from "./out-paths";
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
import { jsBabel } from "./steps/babel/js-babel";
import resugarBlockScopePlugin from "@resugar/codemod-declarations-block-scope";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import resugarObjectsShorthand from "@resugar/codemod-objects-shorthand";
import resugarConcise from "@resugar/codemod-objects-concise";
import { babelPluginSimple } from "./steps/babel/babel-plugin-simple";
import { jsEsbuildMinify } from "./steps/js-esbuild";
import { jsRemoveEndingSemicolons } from "./lib/code-utils";
import { babelPluginMath } from "./steps/babel/babel-plugin-math";

const resugarBlockScope = [resugarBlockScopePlugin, { "declarations.block-scope": { disableConst: false } }];

devLog.titlePaddingWidth = 18;

const MINIFY_ENABLED = true;

export async function build() {
  const streamedClosureCompiler = new StreamedClosureCompiler({
    beautify: true,
    compilation_level: "ADVANCED",
    // rename_variable_prefix: "$$$",
  });

  try {
    streamedClosureCompiler.start();

    devLogBuilding("src", "dist");

    const includeDevTools = process.argv.includes("--with-dev-tools");

    const sources = await buildWithVite({ stripDevTools: !includeDevTools, minifier: "esbuild" });

    devLog.logGreenBright(`\n📈 Stats: ${devLog.colors.whiteBright(path.join(outPath_build, "stats.html"))}\n`);

    const htmlCssJsBundle = await htmlCssToJs({
      html: await htmlMinify(sources.html, { type: "page" }),
      css: await cssOptimize(sources.css),
      js: sources.js,
    });

    await devLog.timed(async function minify() {
      try {
        devLog.log();

        htmlCssJsBundle.js = await minifyJavascript(htmlCssJsBundle.js);
      } finally {
        await Promise.all([
          writeOptimizedBundle(htmlCssJsBundle),
          (async () => {
            try {
              await fs.writeFile(path.resolve(outPath_minify, "index-beautified.js"), await dprint(htmlCssJsBundle.js));
            } catch {}
          })(),
        ]);
      }
    });

    devLog.log();
    const optimizedTotalSize = FilesSizeTermBox.new("optimized")
      .sizeRow("js", htmlCssJsBundle.js)
      .sizeRow("html", htmlCssJsBundle.html)
      .hr()
      .totalRow("total")
      .print().totalValue;

    devLog.log();
    devPrintOjutputFileWritten(outPath_minify, optimizedTotalSize);
    devLog.log();

    const bundledHtml = await bundleHtml(htmlCssJsBundle);

    const gzippedHtml = zlib.gzipSync(Buffer.from(bundledHtml, "utf8"), { level: 9 });

    logTableBundled(bundledHtml, "bundled", gzippedHtml.length);

    await writeFinalBundle(bundledHtml, outPath_bundle);

    await fs.writeFile(path.resolve(outPath_bundle, "index.gz"), gzippedHtml);

    const [zippedRolledBuffer, zippedPlainBuffer] = await Promise.all([
      zipRoadRoller(bundledHtml),
      zipBundle(bundledHtml, "plain"),
    ]);

    const rolledPlainZipSizeDiff = zippedRolledBuffer.length - zippedPlainBuffer.length;

    if (rolledPlainZipSizeDiff > 0) {
      devLog.logYellow(`\nRolled zip is ${rolledPlainZipSizeDiff} bytes LARGER than plain zip`);
    } else {
      devLog.logCyan(`\nRolled zip is ${-rolledPlainZipSizeDiff} bytes smaller than plain zip`);
    }

    let finalBuffer: Buffer;
    if (-rolledPlainZipSizeDiff < 500 && zippedPlainBuffer.length <= JS13K_SIZE_IN_BYTES) {
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

    js = await jsBabel(js, {
      minify: false,
      plugins: [babelPluginSimple({ unmangleableProperties: "mark" })],
    });

    js = await jsBabel(js, {
      minify: false,
      plugins: [resugarConcise, resugarFunctionsArrow, resugarBlockScope],
    });

    js = await jsTransformSwc(js, false, swcPluginVars());

    if (MINIFY_ENABLED) {
      js = await jsTerser(js, {
        mangle: false,
        final: false,
        join_vars: true,
        sequences: true,
        computed_props: true,
      });

      js = await jsTransformSwc(js, false, swcPluginVars());

      js = await jsUglify(js, {
        varify: false,
        final: false,
        reduce_vars: true,
        join_vars: true,
        sequences: true,
        computed_props: true,
        inline: true,
      });

      js = await jsTerser(js, {
        mangle: false,
        final: false,
        join_vars: true,
        sequences: true,
        computed_props: true,
      });

      js = await jsTransformSwc(
        js,
        {
          computed_props: true,
          final: false,
          evaluate: true,
          mangle: false,
          minify: false,
        },
        swcPluginVars(),
      );

      js = await jsUglify(js, {
        varify: true,
        final: false,
        reduce_vars: true,
        join_vars: true,
        sequences: true,
        computed_props: true,
        inline: true,
      });

      js = await jsBabel(js, {
        minify: false,
        plugins: [resugarBlockScope, resugarConcise, resugarFunctionsArrow],
      });

      js = await jsEsbuildMinify(js, {
        mangle: false,
        minifySyntax: true,
        minifyWhitespace: false,
        computed_props: true,
      });

      js = await jsTerser(js, {
        mangle: "all",
        final: false,
        join_vars: false,
        sequences: false,
        computed_props: false,
        longMangleNames: true,
      });
    }

    js = await jsBabel(js, {
      minify: false,
      plugins: [babelPluginSimple({ unmangleableProperties: "transform", floatRound: 6 })],
    });

    if (MINIFY_ENABLED) {
      // ===== Google closure compiler =====

      js = await streamedClosureCompiler.compileOne(js);

      // ===== Second part =====

      js = await jsBabel(js, {
        minify: false,
        plugins: [
          // "babel-plugin-minify-constant-folding",
          resugarConcise,
          resugarFunctionsArrow,
          resugarObjectsShorthand,
          resugarBlockScope,
          babelPluginMath(),
        ],
      });

      js = await jsUglify(js, {
        mangle: false,
        varify: false,
        final: false,
        reduce_vars: true,
        join_vars: true,
        sequences: true,
        computed_props: true,
        inline: true,
      });

      js = await jsTerser(js, {
        mangle: false,
        final: false,
        join_vars: true,
        sequences: true,
        computed_props: true,
      });

      js = await jsBabel(js, {
        minify: false,
        plugins: [resugarConcise, resugarObjectsShorthand, resugarFunctionsArrow],
      });

      js = await jsEsbuildMinify(js, {
        mangle: false,
        minifySyntax: true,
        minifyWhitespace: false,
        computed_props: true,
      });
    }

    js = await jsBabel(js, {
      minify: false,
      plugins: [babelPluginSimple({ floatRound: 6, removeNoInlineCall: true })],
    });

    if (MINIFY_ENABLED) {
      js = await jsTerser(js, {
        mangle: "variables",
        final: false,
        join_vars: true,
        sequences: true,
        computed_props: true,
      });

      js = await jsUglify(js, {
        varify: false,
        final: true,
        mangle: false,
        reduce_vars: true,
        join_vars: true,
        sequences: true,
        computed_props: true,
        inline: false,
      });

      js = await jsBabel(js, {
        minify: false,
        plugins: [
          "babel-plugin-minify-constant-folding",
          resugarBlockScope,
          resugarConcise,
          resugarObjectsShorthand,
          resugarFunctionsArrow,
        ],
      });

      js = await jsEsbuildMinify(js, {
        mangle: false,
        minifySyntax: true,
        minifyWhitespace: true,
        computed_props: true,
      });

      js = await jsTerser(js, {
        mangle: false,
        final: false,
        join_vars: true,
        sequences: true,
        computed_props: true,
      });

      js = await jsBabel(js, {
        minify: false,
        plugins: [babelPluginSimple({ floatRound: 6, constToLet: true })],
      });

      // js = await jsTransformSwc(js, "no-optimize", swcPluginSimpleTransform({ constToLet: true, floatRound: 6 }));

      js = await jsUglify(js, {
        varify: false,
        final: true,
        mangle: true,
        reduce_vars: true,
        join_vars: true,
        sequences: true,
        computed_props: true,
        inline: false,
      });

      js = await jsTerser(js, {
        mangle: false,
        final: true,
        join_vars: true,
        sequences: true,
        computed_props: true,
      });

      js = jsRemoveEndingSemicolons(js);
    }

    return js;
  }
}

async function zipRoadRoller(htmlBundle: string) {
  htmlBundle = await jsRoadroller(htmlBundle);

  logTableBundled(htmlBundle, "rolled");

  devLog.log();
  await writeFinalBundle(htmlBundle, outPath_rolled);

  return zipBundle(htmlBundle, "rolled");
}

function logTableBundled(htmlBundle: string, name: string, gzippedSize: number = 0) {
  devLog.log();
  const box = FilesSizeTermBox.new(name).sizeRow(name, htmlBundle);
  if (gzippedSize) {
    box.sizeRow("gzipped", gzippedSize);
  }
  box.print();
  devLog.log();
}
