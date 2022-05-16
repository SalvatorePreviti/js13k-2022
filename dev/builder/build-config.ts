import path from "path";
import type { UserConfig as ViteUserConfig } from "vite";
import { rollupPluginSpglsl } from "spglsl";
import { browserPureFunctions } from "./options/browser-globals";
import { getTerserMinifyOptions } from "./options/terser-minify-options";

export const viteOutDir = path.resolve("dist/vite");

export const ESBUILD_TARGETS = ["chrome99", "firefox99", "edge99"];

export const CSS_TARGETS = { chrome: 99 << 16, edge: 99 << 16, firefox: 99 << 16, safari: 15 << 16 };

export const ECMA = 2021;

export const viteConfigBuild: ViteUserConfig = {
  build: {
    outDir: viteOutDir,
    polyfillModulePreload: false,
    emptyOutDir: true,
    cssCodeSplit: false,
    ssr: false,
    minify: false, // "terser",
    manifest: "esbuild",
    write: true,
    reportCompressedSize: false,
    ssrManifest: false,
    cssTarget: ESBUILD_TARGETS,
    target: `es${ECMA}`,
    sourcemap: true,
    rollupOptions: {
      output: {
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
    legalComments: "none",
    pure: browserPureFunctions,
  },

  plugins: [rollupPluginSpglsl({})],
};
