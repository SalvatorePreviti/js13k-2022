import path from "path";
import os from "os";
import fs from "fs/promises";
import { outPath_temp } from "../out-paths";
import { ChildProcessWrapper, devLog } from "@balsamic/dev";

let tempFileCounter = 0;

const dprintConfigPath = path.resolve(__dirname, "./js-dprint.json");

const exePath = path.resolve(
  require.resolve("dprint/package.json"),
  "..",
  os.platform() === "win32" ? "dprint.exe" : "dprint",
);

export async function dprintToFile(source: string, targetPath: string): Promise<void> {
  try {
    await fs.writeFile(targetPath, source, "utf8");
  } catch (e) {
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, source, "utf8");
  }

  const result = await ChildProcessWrapper.spawn(exePath, ["fmt", targetPath, "--config", dprintConfigPath], {
    captureOutputText: true,
    timed: false,
  }).promise();

  if (result.stderrText) {
    devLog.logYellow(result.stderrText);
  }
}

export async function dprint(source: string) {
  const tempFilePath = path.resolve(outPath_temp, `index${++tempFileCounter}.js`);
  await dprintToFile(source, tempFilePath);
  return fs.readFile(tempFilePath, "utf8");
}
