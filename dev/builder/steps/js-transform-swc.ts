import { devLog } from "@balsamic/dev";
import type { NumericLiteral } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "dev/builder/out-paths";
import { sizeDifference } from "../lib/logging";

class Transformer extends SwcVisitor {
  override visitNumericLiteral(n: NumericLiteral): NumericLiteral {
    if (!Number.isFinite(n.value)) {
      return n;
    }
    const absValue = Math.abs(n.value);
    // Reduce precision of floating point constants
    if (absValue <= 10) {
      n.value = Number.parseFloat(n.value.toPrecision(8));
    } else if (absValue <= 1000) {
      n.value = Number.parseFloat(n.value.toPrecision(7));
    } else {
      n.value = Number.parseFloat(n.value.toPrecision(6));
    }
    return n;
  }
}

export async function jsTransformSwc(source: string): Promise<string> {
  return devLog.timed(
    async function js_transform_swc() {
      const output = await swcTransform(source, {
        cwd: outPath_build,
        inputSourceMap: false,
        sourceMaps: true,
        configFile: false,
        filename: "index.js",
        isModule: true,
        minify: true,
        swcrc: false,
        jsc: {
          keepClassNames: false,
          target: "es2022",
        },
        plugin: (m) => new Transformer().visitProgram(m),
      });
      this.setSuccessText(sizeDifference(source, output.code));
      return output.code;
    },
    { spinner: true },
  );
}
