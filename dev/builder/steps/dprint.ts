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

export async function dprint(source: string) {
  const tempFilePath = path.resolve(outPath_temp, `index${++tempFileCounter}.js`);

  try {
    await fs.writeFile(tempFilePath, source, "utf8");
  } catch (e) {
    await fs.mkdir(path.dirname(tempFilePath), { recursive: true });
    await fs.writeFile(tempFilePath, source, "utf8");
  }

  const result = await ChildProcessWrapper.spawn(exePath, ["fmt", tempFilePath, "--config", dprintConfigPath], {
    captureOutputText: true,
    timed: false,
  }).promise();

  if (result.stderrText) {
    devLog.logYellow(result.stderrText);
  }

  return fs.readFile(tempFilePath, "utf8");
}
