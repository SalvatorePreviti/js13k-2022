import type { OutputAsset } from "rollup";
import { build as esbuildBuild, BuildOptions } from "esbuild";
import { minify as htmlMinify } from "html-minifier";
import { minify as terserMinify } from "terser";
import path from "path";
import { getHtmlMinifierOptions } from "../options/html-minify-options";
import { getTerserMinifyOptions } from "../options/terser-options";
import type { ViteBuildOutput } from "./process-vite-output";
import { devBeginOperation, devEndOperation } from "./utils";
import { devError, prettySize, toUTF8 } from "@balsamic/dev";
import { CSS_TARGETS, ESBUILD_TARGETS, viteConfigBuild, viteOutDir } from "../build-config";
import parcelCss from "@parcel/css";
import { JSDOM } from "jsdom";

export interface OptimizedBuildOutput {
  indexHtml: string;
  script: string;
  stylesheet: string;
  mergedFilenames: Set<string>;
  assets: OutputAsset[];
}

export async function optimizeViteBuildOutput(input: ViteBuildOutput): Promise<OptimizedBuildOutput> {
  console.log();
  devBeginOperation("optimize");

  const esbuilt = await bundleWithEsbuild(input);

  const script = await optimizeScript(esbuilt);

  const indexHtml = optimizeHtml(input);
  const stylesheet = optimizeCss(esbuilt);

  devEndOperation();

  return {
    indexHtml,
    script,
    stylesheet,
    assets: input.assets,
    mergedFilenames: esbuilt.mergedFilenames,
  };
}

function optimizeHtml(input: ViteBuildOutput) {
  devBeginOperation("html");

  const dom = new JSDOM(toUTF8(input.indexHtml.source));

  // Remove all external scripts
  Array.from(dom.window.document.querySelectorAll("script[src]")).forEach((el) => el.remove());

  // Remove all external styles
  Array.from(dom.window.document.querySelectorAll("link[href]")).forEach((el) => el.remove());

  let indexHtml = dom.window.document.querySelector("html")?.innerHTML || "";

  indexHtml = htmlMinify(indexHtml, getHtmlMinifierOptions({ minifyCss: true, minifyJs: true })) || indexHtml;

  devEndOperation(`html ${prettySize(indexHtml)}`);
  return indexHtml;
}

function optimizeCss(esbuilt: { stylesheet: string; script: string; mergedFilenames: Set<string> }) {
  devBeginOperation("css");
  const stylesheet = esbuilt.stylesheet;

  if (stylesheet) {
    const result = parcelCss.transform({
      filename: "index.css",
      code: Buffer.from(stylesheet),
      analyzeDependencies: false,
      cssModules: false,
      drafts: { customMedia: false, nesting: false },
      minify: true,
      sourceMap: false,
      targets: CSS_TARGETS,
    });

    const code = result.code.toString().trim();
    if (code.length > 0) {
      devEndOperation(`css ${prettySize(code)}`);
      return code;
    }
  }

  devEndOperation(`css ${prettySize(0)}`);
  return "";
}

async function optimizeScript(esbuilt: { stylesheet: string; script: string; mergedFilenames: Set<string> }) {
  devBeginOperation("js");

  ////////////////////////////////////
  let script = esbuilt.script;

  ////////////////////////////////////
  devBeginOperation("terser");
  script =
    (
      await terserMinify(
        script,
        getTerserMinifyOptions({ sourceType: "script", mangle: true, preserve_annotations: true, passes: 6 }),
      )
    ).code || script;
  devEndOperation(prettySize(script));

  // devBeginOperation("babel");
  // script = babelMinify(script);
  // devEndOperation(prettySize(script, { fileType: "js" }));

  // devBeginOperation('eslint')
  // script = await builderEslintMinify(script, { sourceType: 'script', maxPasses: 4 })
  // devEndOperation(prettySize(script, { fileType: 'js' }))

  devBeginOperation("terser final");
  script =
    (
      await terserMinify(
        script,
        getTerserMinifyOptions({ sourceType: "script", mangle: false, preserve_annotations: false, passes: 6 }),
      )
    ).code || script;

  // Remove final semicolon
  while (script.endsWith(";")) {
    script = script.slice(0, -1);
  }

  devEndOperation(prettySize(script));

  devEndOperation();
  return script;
}

async function bundleWithEsbuild(input: ViteBuildOutput) {
  let mainfile = "";

  const sourcesByFilename = new Map<string, string>();

  devBeginOperation("esbuild");

  const mergedFilenames = new Set<string>();
  for (const script of input.scripts) {
    const fname = `/${script.fileName}`;
    sourcesByFilename.set(fname, script.code);
    mainfile += `import ${JSON.stringify(`.${fname}`)};\n`;
    mergedFilenames.add(script.fileName);
  }

  for (const css of input.stylesheets) {
    const fname = `/${css.fileName}`;
    sourcesByFilename.set(fname, toUTF8(css.source));
    mainfile += `import ${JSON.stringify(`.${fname}`)};\n`;
    mergedFilenames.add(css.fileName);
  }

  const options: BuildOptions = {
    stdin: { resolveDir: viteOutDir, contents: mainfile, loader: "js" },
    ...viteConfigBuild.esbuild,
    loader: undefined,
    banner: undefined,
    footer: undefined,
    charset: "utf8",
    bundle: true,
    format: "iife",
    sourcemap: true,
    minify: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: false,
    splitting: false,
    legalComments: "none",
    treeShaking: true,
    platform: "browser",
    target: ESBUILD_TARGETS,
    outdir: viteOutDir,
    write: false,
    plugins: [
      {
        name: "loader",
        setup(build) {
          build.onResolve({ filter: /\.*/ }, ({ path: p }) => {
            const absolute = p.slice(1);
            return sourcesByFilename.has(absolute) ? { path: absolute } : null;
          });

          build.onLoad({ filter: /\// }, ({ path: p }) => {
            const source = sourcesByFilename.get(p);
            return source !== undefined
              ? { contents: source, loader: path.extname(p) === ".css" ? "css" : "js" }
              : null;
          });
        },
      },
    ],
  };

  const buildResult = await esbuildBuild(options);

  if (buildResult.errors.length) {
    throw devError(`Failed compiling bundle.\n ${buildResult.errors.map((e) => e.text).join("\n ")}`);
  }

  let script = "";
  const stylesheets: string[] = [];
  for (const item of buildResult.outputFiles!) {
    if (item.path.endsWith(".js")) {
      script += item.text;
    } else if (item.path.endsWith(".css")) {
      const text = item.text.trim();
      if (text) {
        stylesheets.push(text);
      }
    }
  }

  devEndOperation();
  return { stylesheet: stylesheets.join("\n"), script, mergedFilenames };
}
