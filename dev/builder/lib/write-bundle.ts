import path from "path";
import type { OutputAsset } from "rollup";
import { devWriteOutputFile } from "./logging";
import fs from "fs/promises";
import { utf8ByteLength } from "@balsamic/dev";
import { htmlBundleOutDir } from "../build-config";

export interface WriteBundleInput {
  html: string;
  assets: OutputAsset[];
}

export async function writeBundle(input: WriteBundleInput) {
  await fs.rm(htmlBundleOutDir, { force: true, maxRetries: 5, recursive: true });
  await fs.mkdir(htmlBundleOutDir, { recursive: true });

  const filenames = [];
  let totalSize = 0;

  const indexHtmlPath = path.resolve(htmlBundleOutDir, "index.html");
  filenames.push(indexHtmlPath);

  await devWriteOutputFile(indexHtmlPath, input.html);
  totalSize += utf8ByteLength(input.html);

  if (input.assets) {
    const promises = [];
    for (const asset of input.assets) {
      let fname = asset.fileName || asset.name;
      if (fname) {
        fname = path.resolve(htmlBundleOutDir, fname);
        filenames.push(fname);
        promises.push(devWriteOutputFile(fname, asset.source));
        totalSize += utf8ByteLength(asset.source);
      }
    }
    await Promise.all(promises);
  }

  return {
    input,
    html: input.html,
    assets: input.assets || [],
    filenames,
    totalSize,
  };
}
