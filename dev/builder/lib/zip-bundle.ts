import ADMZip from "adm-zip";
import fs from "fs";
import zlib from "zlib";
import { zipBundleOptions } from "../options/zip-bundle-options";
import { WriteBundleInput } from "./write-bundle";
import { colors, devLog } from "@balsamic/dev";

export type ZipFileEntry = { name?: string; source?: Buffer | Uint8Array | string | undefined; fileName?: string };

export function zipBundle(bundle: WriteBundleInput) {
  return zipEntries([{ name: "index.html", source: bundle.html }, ...(bundle.assets || [])]);
}

export async function zipEntries(input: ZipFileEntry[]) {
  devLog.log();

  devLog.log(
    colors.rgb(
      120,
      190,
      255,
    )(
      `⬢ ${input.length} file${input.length !== 1 ? "s" : ""}, ${
        zipBundleOptions.implementation === "zopfli"
          ? `zopfli, ${zipBundleOptions.zopfli.numiterations} iterations`
          : `zlib, level ${zipBundleOptions.zlib.level}`
      }`,
    ),
  );

  devLog.log();

  const entries: { name: string; data: Buffer }[] = [];

  const zippedBuffer = await devLog.timed(
    "compress",
    async () => {
      const admZip = new ADMZip();
      for (const item of input) {
        const fname = item.name || item.fileName;
        if (!fname) {
          continue;
        }

        let data: Buffer | undefined;

        if (item.source !== undefined) {
          data = Buffer.isBuffer(item.source)
            ? item.source
            : typeof item.source === "string"
            ? Buffer.from(item.source, "utf8")
            : Buffer.from(item.source as Buffer);
          if (!Buffer.isBuffer(data)) {
            throw new Error(`Entry ${item.name} is invalid.`);
          }
        } else if (item.fileName) {
          data = await fs.promises.readFile(item.fileName);
        }

        if (data) {
          entries.push({ name: fname, data });
        }
      }

      entries.sort((a, b) => b.data.length - a.data.length || a.name.localeCompare(b.name));

      for (const entry of entries) {
        admZip.addFile(entry.name, entry.data);
      }

      return new Promise<Buffer>((resolve, reject) => admZip.toBuffer(resolve, reject));
    },
    { spinner: true },
  );

  devLog.timed(
    "zip verify",
    () => {
      const unzip = new ADMZip(zippedBuffer);

      const unzippedEntries: { name: string; data: Buffer }[] = [];
      for (const entry of unzip.getEntries()) {
        unzippedEntries.push({ name: entry.name, data: entry.getData() });
      }
      unzippedEntries.sort((a, b) => b.data.length - a.data.length || a.name.localeCompare(b.name));

      if (entries.length !== unzippedEntries.length) {
        throw new Error(
          `Final zip contains ${unzippedEntries.length} files instead of ${entries.length}. Zip file verification failed.`,
        );
      }
      for (let i = 0; i < entries.length; ++i) {
        const entry = entries[i]!;
        if (!entry.data.equals(unzippedEntries[i]!.data)) {
          throw new Error(
            `Compressed file ${entry.name}, index ${i}, has a different content. Zip file verification failed.`,
          );
        }
      }
    },
    { spinner: true },
  );

  return zippedBuffer;
}

let _zopfli: unknown = null;

// Hack into adm-zip package to replace default zlib based implementation with a custom zlib or zopfli implementation.
Object.defineProperty(require("adm-zip/methods"), "Deflater", {
  get() {
    return zipBundleOptions.implementation === "zopfli" ? ZopliDeflater : ZLibDeflater;
  },
  configurable: true,
  enumerable: true,
});

const { round } = Math;

function ZLibDeflater(input: Buffer) {
  const options = {
    ...zipBundleOptions.zlib,
    chunkSize: (round(input.length / 1024) + 1) * 1024,
  };
  return {
    deflate() {
      return zlib.deflateRawSync(input, options);
    },
    deflateAsync(callback: (input: Buffer | null) => void) {
      const parts: Buffer[] = [];
      zlib
        .createDeflateRaw(options)
        .on("data", (data) => parts.push(data))
        .on("end", () => callback(Buffer.concat(parts)))
        .on("error", (error) => {
          devLog.logException("zlib compression failed", error);
          callback(null);
        })
        .end(input);
    },
  };
}

function ZopliDeflater(input: Buffer) {
  return {
    deflate() {
      return _requireZopfli().deflateSync(input, zipBundleOptions.zopfli);
    },
    deflateAsync(callback: (input: Buffer | null) => void) {
      _requireZopfli().deflate(input, zipBundleOptions.zopfli, (error: Error | null, deflated: Buffer) => {
        if (error) {
          devLog.logException("zopli compression failed", error);
          callback(null);
        } else {
          callback(deflated);
        }
      });
    },
  };
}

function _requireZopfli() {
  return _zopfli || (_zopfli = require("node-zopfli"));
}
