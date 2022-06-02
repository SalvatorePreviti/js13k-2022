import { devLog } from "@balsamic/dev";
import type { NumericLiteral } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "dev/builder/out-paths";

class Transformer extends SwcVisitor {
  override visitNumericLiteral(n: NumericLiteral): NumericLiteral {
    if (Number.isFinite(n.value) && Math.abs(n.value) < 0xffffffff) {
      // Reduce precision of floating point constants
      n.value = Number.parseFloat(n.value.toPrecision(9));
    }
    return n;
  }
}

export async function jsTransformSwc(source: string): Promise<string> {
  return devLog.timed(async function js_transform_swc() {
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

    return output.code;
  });
}
