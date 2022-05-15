import path from "path";
import type { OutputAsset } from "rollup";
import { devWriteOutputFile } from "./utils";
import fs from "fs/promises";
import { devLog, utf8ByteLength } from "@balsamic/dev";

export interface WriteBundleInput {
  html: string;
  assets?: OutputAsset[];
}

export async function writeBundle(input: WriteBundleInput, outputFolder = "dist/bundle") {
  await fs.rm("dist/bundle", { force: true, maxRetries: 5, recursive: true });
  await fs.mkdir("dist/bundle", { recursive: true });

  const filenames = [];
  let totalSize = 0;

  const indexHtmlPath = path.resolve(outputFolder, "index.html");
  filenames.push(indexHtmlPath);

  await devWriteOutputFile(indexHtmlPath, input.html);
  totalSize += utf8ByteLength(input.html);

  if (input.assets) {
    const promises = [];
    for (const asset of input.assets) {
      let fname = asset.fileName || asset.name;
      if (fname) {
        fname = path.resolve(outputFolder, fname);
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
