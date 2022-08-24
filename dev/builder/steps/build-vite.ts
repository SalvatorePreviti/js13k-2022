import { devLog, toUTF8, utf8ByteLength } from "@balsamic/dev";
import type { RollupOutput, RollupWatcher, LoadResult } from "rollup";
import { build as viteBuild, mergeConfig as viteMergeConfig } from "vite";
import config from "../../config";
import fs, { readFile } from "fs/promises";
import { outPath_build } from "../out-paths";
import { coloredPrettySize } from "../lib/logging";
import type { UserConfig as ViteUserConfig, PluginOption } from "vite";
import { rollupPluginSpglsl } from "spglsl";
import { domRemoveExternalCssAndScripts, stripUtf8BOM } from "../lib/code-utils";
import { JSDOM } from "jsdom";
import { rollupPluginSwcTransform } from "./build-transform";
import shadersMangleGlobals from "../../../app/shaders/_mangle_globals";
import { browserPureFunctions, global_defs } from "../lib/js-config";
import type { MinifyOptions } from "terser";
import rollupPluginVisualizer from "rollup-plugin-visualizer";
import { optimize as svgoOptimize, type OptimizedSvg } from "svgo";
import htmlminifier from "html-minifier-terser";
import { getHtmlMinifierOptions } from "./html-minify";

export interface ViteBundledOutput {
  js: string;
  css: string;
  html: string;
}

export const ESBUILD_TARGETS = ["chrome99", "firefox99"];

function rollupPluginStripDevTools(): PluginOption {
  return {
    name: "strip-dev-tools",
    load(id: string): LoadResult {
      if (id.includes("dev-tools/dev-main")) {
        return "";
      }
      return undefined;
    },
  };
}

export const buildWithViteTerserOptions: MinifyOptions = {
  module: true,
  toplevel: true,
  compress: {
    defaults: false,
    unused: true,
    arrows: true,
    booleans: true,
    comparisons: true,
    collapse_vars: false,
    conditionals: true,
    dead_code: true,
    evaluate: true,
    global_defs,
    hoist_funs: true,
    hoist_props: true,
    if_return: true,
    inline: true,
    loops: true,
    keep_infinity: true,
    keep_fargs: false,
    keep_classnames: true,
    keep_fnames: true,
    module: true,
    toplevel: true,
    negate_iife: false,
    typeofs: true,
    computed_props: false,
    booleans_as_integers: false,
    join_vars: false,
    pure_getters: true,
    pure_funcs: browserPureFunctions,
    reduce_funcs: true,
    reduce_vars: true,
    sequences: false,
    switches: true,
    side_effects: true,
    unsafe: true,
    unsafe_arrows: true,
    properties: false,
    unsafe_math: true,
    unsafe_undefined: true,
    hoist_vars: false,
    arguments: true,
    directives: true,
    unsafe_comps: true,
    unsafe_Function: true,
    unsafe_methods: true,
    unsafe_proto: true,
    unsafe_regexp: true,
    unsafe_symbols: true,
  },
  mangle: false,
  format: {
    ascii_only: false,
    beautify: true,
    comments: "all",
    keep_quoted_props: true,
    preserve_annotations: true,
    shorthand: true,
    wrap_iife: false,
  },
};

export async function buildWithVite(options: {
  stripDevTools: boolean;
  minifier: "esbuild" | "terser" | false;
}): Promise<ViteBundledOutput> {
  return devLog.timed(
    async function vite_build() {
      const viteConfigBuild: ViteUserConfig = {
        define: {
          DEBUG: false,
        },

        build: {
          write: true,
          sourcemap: true,
          emptyOutDir: true,
          outDir: outPath_build,
          minify: options.minifier,
          assetsInlineLimit: 100000,
          cssTarget: ESBUILD_TARGETS,
          cssCodeSplit: false,
          manifest: false,
          ssrManifest: false,
          ssr: false,
          polyfillModulePreload: false,
          reportCompressedSize: false,
          target: ESBUILD_TARGETS,
          commonjsOptions: {
            transformMixedEsModules: true,
            esmExternals: true,
          },
          terserOptions: options.minifier === "terser" ? buildWithViteTerserOptions : undefined,
          rollupOptions: {
            treeshake: {
              annotations: true,
              propertyReadSideEffects: false,
              unknownGlobalSideEffects: false,
            },
            plugins: [rollupPluginVisualizer({ emitFile: true, gzipSize: true }) as any],
            output: {
              generatedCode: {
                constBindings: true,
                objectShorthand: true,
                arrowFunctions: true,
              },
              format: "esm",
              preferConst: true,
              hoistTransitiveImports: true,
              inlineDynamicImports: true,
              minifyInternalExports: true,
              compact: false,
              entryFileNames: `[name].js`,
              chunkFileNames: `[name].js`,
              assetFileNames: ({ name }) => (name?.endsWith(".css") ? "[name].[ext]" : `assets/[name].[ext]`),
            },
          },
        },

        esbuild: {
          treeShaking: true,
          sourcemap: "external",
          target: ESBUILD_TARGETS,
          charset: "utf8",
          keepNames: false,
          globalName: "window",
          legalComments: "inline",
          minifyWhitespace: false,
          minifyIdentifiers: false,
          ignoreAnnotations: false,
          minifySyntax: false,
          format: "esm",
          mangleQuoted: false,
          pure: browserPureFunctions,
          define: {
            this: "window",
            DEV: "false",
            DEBUG: "false",
            NO_DEBUG: "true",
          },
        },

        plugins: [
          rollupPluginSvg(),
          options.stripDevTools ? rollupPluginStripDevTools() : undefined,
          rollupPluginSpglsl({
            mangle_global_map: shadersMangleGlobals,
          }),
          rollupPluginSwcTransform(),
        ],
      };

      await fs.rm(outPath_build, { maxRetries: 5, recursive: true, force: true });
      const result = processViteBuildOutput((await viteBuild(viteMergeConfig(config, viteConfigBuild, true))) as any);
      this.setSuccessText(
        coloredPrettySize(utf8ByteLength(result.js) + utf8ByteLength(result.css) + utf8ByteLength(result.html)),
      );
      return result;
    },
    { printStarted: false },
  );
}

function rollupPluginSvg(): PluginOption {
  return {
    name: "svg",
    async transform(src, id) {
      if (!id.endsWith(".svg")) {
        return undefined;
      }
      const extractedSvg = await readFile(id, "utf8");

      const output = svgoOptimize(extractedSvg, {
        floatPrecision: 5,
        full: true,
        multipass: true,
        js2svg: { indent: 0, pretty: false },
        plugins: ["preset-default"],
      });
      if (output.error) {
        throw output.modernError;
      }
      const optimized = (output as OptimizedSvg).data;
      let svg = await htmlminifier.minify(optimized, {
        ...getHtmlMinifierOptions(),
        removeAttributeQuotes: false,
      });
      if (svg.length > optimized.length) {
        console.log("NOPE");
        svg = optimized;
      }
      console.log(svg);
      return `export default ${JSON.stringify(svg)}`;
    },
  };
}

// var path = require('path');
// var rollupPluginutils = require('rollup-pluginutils');

// function toDataUrl (code) {
//   var mime = 'image/svg+xml'
//   var buffer = Buffer.from(code, 'utf-8')
//   var encoded = buffer.toString('base64')
//   return ("'data:" + mime + ";base64," + encoded + "'")
// }

// function svg (options) {
//   if ( options === void 0 ) options = {};

//   var filter = rollupPluginutils.createFilter(options.include, options.exclude)

//   return {
//     name: 'svg',

//     transform: function transform (code, id) {
//       if (!filter(id) || path.extname(id) !== '.svg') {
//         return null
//       }

//       var content = code.trim()
//       var encoded = options.base64 ? toDataUrl(content) : JSON.stringify(content)

//       return { code: ("export default " + encoded), map: { mappings: '' } }
//     }
//   }
// }

// module.exports = svg;
// }

function processViteBuildOutput(viteBuildOutput: RollupOutput | RollupOutput[] | RollupWatcher): ViteBundledOutput {
  if (Array.isArray(viteBuildOutput)) {
    if (viteBuildOutput.length !== 1) {
      throw new Error(`ViteBuildOutput: expected 1 output, received ${viteBuildOutput.length}`);
    }
    viteBuildOutput = viteBuildOutput[0]!;
  }

  if (!("output" in viteBuildOutput) || !Array.isArray(viteBuildOutput.output)) {
    throw new Error("ViteBuildOutput: expected a RollupOutput, received something else");
  }

  let js = "";
  let css = "";
  let html = "";

  for (const o of viteBuildOutput.output) {
    if (o.type === "asset") {
      if (o.fileName.endsWith(".css")) {
        if (css.length > 0) {
          css += "\n";
        }
        css += toUTF8(o.source);
      } else if (o.fileName === "index.html") {
        if (html) {
          throw new Error("ViteBuildOutput: multiple index.html found");
        }
        html = toUTF8(o.source);
      } //  else if (o.fileName !== "esbuild" && o.fileName !== "stats.html") {
      //   throw new Error(`ViteBuildOutput: unexpected asset file "${o.fileName}"`);
      // }
    } else if (o.type === "chunk") {
      if (js.length > 0) {
        js += "\n";
      }
      js += o.code;
    }
  }

  if (html) {
    const dom = new JSDOM(stripUtf8BOM(html));

    domRemoveExternalCssAndScripts(dom);

    if (css.length) {
      const link = dom.window.document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/index.css";
      dom.window.document.head.appendChild(link);
    }

    if (js.length) {
      const script = dom.window.document.createElement("script");
      script.type = "module";
      script.src = "/index.js";
      script.toggleAttribute("crossorigin", true);
      dom.window.document.body.appendChild(script);
    }

    html = dom.serialize();
  }

  return { html, js, css };
}
