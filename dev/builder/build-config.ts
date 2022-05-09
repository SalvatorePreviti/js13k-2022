import path from "path";
import { UserConfig as ViteUserConfig } from "vite";
import { rollupPluginSpglsl } from "spglsl";

export const viteOutDir = path.resolve("dist/vite");

export const ESBUILD_TARGETS = ["chrome99", "firefox99", "edge99"];

export const CSS_TARGETS = { chrome: 99 << 16, edge: 99 << 16, firefox: 99 << 16, safari: 15 << 16 };

export const viteConfigBuild: ViteUserConfig = {
  build: {
    outDir: path.resolve("dist/vite"),
  },

  esbuild: {
    define: {
      this: "window",
    },
    treeShaking: true,
    sourcemap: true,
    target: ESBUILD_TARGETS,
    charset: "utf8",
    format: "esm",
    keepNames: true,
    minify: false,
    minifySyntax: false,
    minifyIdentifiers: false,
    minifyWhitespace: false,
  },

  plugins: [rollupPluginSpglsl({})],
};
