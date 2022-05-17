import path from "path";
import type { UserConfig as ViteUserConfig } from "vite";
import { rollupPluginSpglsl } from "spglsl";
import { browserPureFunctions } from "./options/browser-pure-functions";
// import { getTerserMinifyOptions } from "./options/terser-minify-options";

export const viteOutDir = path.resolve("dist/1-vite");

export const swcOutDir = path.resolve("dist/2-swc");

export const htmlBundleOutDir = path.resolve("dist/3-bundle");

export const zipOutputPath = path.resolve("dist/bundle.zip");

export const ESBUILD_TARGETS = ["chrome99", "firefox99", "edge99"];

export const CSS_TARGETS = { chrome: 99 << 16, edge: 99 << 16, firefox: 99 << 16, safari: 15 << 16 };

export const ECMA = 2021;

export const viteConfigBuild: ViteUserConfig = {
  build: {
    write: true,
    sourcemap: true,
    emptyOutDir: true,
    outDir: viteOutDir,
    minify: false,
    cssTarget: ESBUILD_TARGETS,
    cssCodeSplit: false,
    manifest: false,
    ssrManifest: false,
    ssr: false,
    polyfillModulePreload: false,
    reportCompressedSize: false,
    target: "es2022",
    commonjsOptions: { transformMixedEsModules: true, esmExternals: true },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    /* terserOptions: getTerserMinifyOptions({
      mangle: "all",
      preserve_annotations: true,
      sourceType: "module",
    }), */
  },

  esbuild: {
    treeShaking: true,
    sourcemap: "external",
    target: ESBUILD_TARGETS,
    charset: "utf8",
    keepNames: false,
    minify: false,
    pure: browserPureFunctions,
  },

  plugins: [rollupPluginSpglsl({})],
};
