import { devLog } from "@balsamic/dev";
import type { VariableDeclaration } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../out-paths";
import { sizeDifference } from "../lib/logging";
import type { SwcMinifySettings } from "./js-optimize-swc";
import { getSwcMinifyOptions } from "./js-optimize-swc";

class Transformer extends SwcVisitor {
  /* override visitNumericLiteral(n: NumericLiteral): NumericLiteral {
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
    return super.visitNumericLiteral(n);
  } */

  override visitVariableDeclaration(n: VariableDeclaration): VariableDeclaration {
    if (n.kind === "const") {
      n.kind = "let";
    }
    return super.visitVariableDeclaration(n);
  }
}

export async function jsTransformSwc(source: string, settings: SwcMinifySettings): Promise<string> {
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
          minify: getSwcMinifyOptions(settings),
        },
        plugin: (m) => new Transformer().visitProgram(m),
      });
      this.setSuccessText(sizeDifference(source, output.code));
      return output.code;
    },
    { spinner: true },
  );
}
