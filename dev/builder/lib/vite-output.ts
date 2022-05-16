import { devError, devLog, toUTF8, utf8ByteLength } from "@balsamic/dev";
import type { RollupOutput, OutputChunk, OutputAsset, RollupWatcher } from "rollup";
import { ESBUILD_TARGETS, viteOutDir } from "../build-config";
import { build as esbuildBuild } from "esbuild";
import { browserPureFunctions } from "../options/browser-globals";
import path from "path";
import { sizeDifference } from "./utils";

export interface ViteBuildOutput {
  html: OutputAsset;
  js: OutputChunk[];
  css: OutputAsset[];
  assets: OutputAsset[];
}

export interface ViteBundledOutput {
  js: string;
  css: string;
  html: string;
  assets: OutputAsset[];
  assetsBytes: number;
}

export function processViteBuildOutput(
  viteBuildOutput: RollupOutput | RollupOutput[] | RollupWatcher,
): ViteBuildOutput {
  if (Array.isArray(viteBuildOutput)) {
    if (viteBuildOutput.length !== 1) {
      throw new Error(`ViteBuildOutput: expected 1 output, received ${viteBuildOutput.length}`);
    }
    viteBuildOutput = viteBuildOutput[0]!;
  }

  if (!("output" in viteBuildOutput) || !Array.isArray(viteBuildOutput.output)) {
    throw new Error("ViteBuildOutput: expected a RollupOutput, received something else");
  }

  let html: OutputAsset | undefined;
  const js: OutputChunk[] = [];
  const css: OutputAsset[] = [];
  const assets: OutputAsset[] = [];

  for (const o of viteBuildOutput.output) {
    if (o.type === "asset") {
      if (o.fileName.endsWith(".css")) {
        css.push(o);
      } else if (o.fileName === "index.html") {
        if (html) {
          throw new Error("ViteBuildOutput: multiple index.html found");
        }
        html = o;
      } else if (o.fileName !== "esbuild") {
        assets.push(o);
      }
    } else if (o.type === "chunk") {
      js.push(o);
    }
  }

  if (!html) {
    throw new Error("ViteBuildOutput: index.html not found in vite build outputs");
  }

  return { html, js, css, assets };
}

export async function bundleViteOutput(input: ViteBuildOutput): Promise<ViteBundledOutput> {
  let mainfile = "";

  const inputSize =
    input.css.reduce((c, v) => c + utf8ByteLength(v.source), 0) +
    input.js.reduce((c, v) => c + utf8ByteLength(v.code), 0);

  return devLog.timed(
    async function esbuild() {
      const sourcesByFilename = new Map<string, string>();

      const mergedFilenames = new Set<string>();
      for (const script of input.js) {
        const fname = `/${script.fileName}`;
        sourcesByFilename.set(fname, script.code);
        mainfile += `import ${JSON.stringify(`.${fname}`)};\n`;
        mergedFilenames.add(script.fileName);
      }

      for (const css of input.css) {
        const fname = `/${css.fileName}`;
        sourcesByFilename.set(fname, toUTF8(css.source));
        mainfile += `import ${JSON.stringify(`.${fname}`)};\n`;
        mergedFilenames.add(css.fileName);
      }

      const buildResult = await esbuildBuild({
        stdin: { resolveDir: viteOutDir, contents: mainfile, loader: "js" },

        treeShaking: true,
        sourcemap: "external",
        target: ESBUILD_TARGETS,
        charset: "utf8",
        legalComments: "none",
        minify: true,
        keepNames: false,
        minifySyntax: true,
        minifyIdentifiers: false,
        minifyWhitespace: false,
        ignoreAnnotations: false,
        pure: browserPureFunctions,
        bundle: true,
        format: "esm",
        splitting: false,
        platform: "browser",
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
      });

      if (buildResult.errors.length) {
        throw devError(`Failed compiling bundle.\n ${buildResult.errors.map((e) => e.text).join("\n ")}`);
      }

      let js = "";
      let css = "";
      for (const item of buildResult.outputFiles) {
        if (item.path.endsWith(".js")) {
          js += item.text;
        } else if (item.path.endsWith(".css")) {
          const text = item.text.trim();
          if (text) {
            if (css.length > 0) {
              css += "\n";
            }
            css += text;
          }
        }
      }

      const finalSize = utf8ByteLength(css) + utf8ByteLength(js);

      this.setSuccessText(sizeDifference(inputSize, finalSize));

      return {
        html: toUTF8(input.html.source),
        css,
        js,
        assets: input.assets,
        assetsBytes: input.assets.reduce((r, a) => r + a.source.length, 0),
      };
    },
    { spinner: true },
  );
}
