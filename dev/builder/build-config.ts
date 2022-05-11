import path from "path";
import { UserConfig as ViteUserConfig } from "vite";
import { rollupPluginSpglsl } from "spglsl";

export const viteOutDir = path.resolve("dist/vite");

export const ESBUILD_TARGETS = ["chrome99", "firefox99", "edge99"];

export const CSS_TARGETS = { chrome: 99 << 16, edge: 99 << 16, firefox: 99 << 16, safari: 15 << 16 };

export const ECMA = 2021;

export const viteConfigBuild: ViteUserConfig = {
  build: {
    outDir: path.resolve("dist/vite"),
    polyfillModulePreload: false,
    emptyOutDir: true,
    cssCodeSplit: false,
    ssr: false,
    minify: "esbuild",
    target: `es${ECMA}`,
  },

  esbuild: {
    treeShaking: true,
    sourcemap: false,
    target: ESBUILD_TARGETS,
    charset: "utf8",
    legalComments: "none",
    keepNames: false,
    minify: true,
    minifySyntax: true,
    minifyIdentifiers: true,
    minifyWhitespace: true,
  },

  plugins: [rollupPluginSpglsl({})],
};
