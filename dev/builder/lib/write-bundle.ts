import path from "path";
import type { OutputAsset } from "rollup";
import { devWriteOutputFile } from "./logging";
import fs from "fs/promises";
import { devLog, utf8ByteLength } from "@balsamic/dev";
import { outPath_minify } from "../out-paths";

export interface WriteBundleInput {
  html: string;
  assets: OutputAsset[];
}

export async function writeFinalBundle(input: WriteBundleInput, outputPath: string) {
  await fs.rm(outputPath, { force: true, maxRetries: 5, recursive: true });
  await fs.mkdir(outputPath, { recursive: true });

  const filenames = [];
  let totalSize = 0;

  const indexHtmlPath = path.resolve(outputPath, "index.html");
  filenames.push(indexHtmlPath);

  await devWriteOutputFile(indexHtmlPath, input.html, "utf8");
  totalSize += utf8ByteLength(input.html);

  if (input.assets) {
    const promises = [];
    for (const asset of input.assets) {
      const fname = asset.fileName || asset.name;
      if (fname) {
        filenames.push(fname);
        promises.push(devWriteOutputFile(fname, asset.source, null));
        totalSize += utf8ByteLength(asset.source);
      }
    }
    await Promise.all(promises);
  }

  devLog.log();

  return {
    input,
    html: input.html,
    assets: input.assets,
    filenames,
    totalSize,
  };
}

export async function writeOptimizedBundle(bundle: { css: string; js: string; html: string; assets: OutputAsset[] }) {
  await fs.rm(outPath_minify, { maxRetries: 5, recursive: true, force: true });
  await fs.mkdir(outPath_minify, { recursive: true });

  const promises: Promise<void>[] = [];

  promises.push(fs.writeFile(path.resolve(outPath_minify, "index.html"), bundle.html, "utf8"));

  if (bundle.js.length > 0) {
    promises.push(fs.writeFile(path.resolve(outPath_minify, "index.js"), bundle.js, "utf8"));
  }

  if (bundle.css.length > 0) {
    promises.push(fs.writeFile(path.resolve(outPath_minify, "index.css"), bundle.css, "utf8"));
  }

  if (bundle.assets.length > 0) {
    await fs.mkdir(path.join(outPath_minify, "assets"), { recursive: true });
    for (const asset of bundle.assets) {
      const fname = asset.fileName || asset.name;
      if (fname) {
        promises.push(fs.writeFile(path.resolve(outPath_minify, fname), bundle.html, "utf8"));
      }
    }
  }

  await Promise.all(promises);
}
