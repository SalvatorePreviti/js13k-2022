import { devLog } from "@balsamic/dev";
import type { VariableDeclaration } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../out-paths";
import { sizeDifference } from "../lib/logging";
import { jsRemoveEndingSemicolons } from "../lib/code-utils";

export interface SwcTransformSettings {
  mangle?: boolean;
  constToLet: boolean;
}

class Transformer extends SwcVisitor {
  public constructor(public settings: SwcTransformSettings) {
    super();
  }

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
    if (this.settings.constToLet) {
      if (n.kind === "const") {
        n = {
          ...n,
          kind: "let",
        };
      }
    }
    // if (n.kind === "let") {
    //   n = {
    //     ...n,
    //     kind: "var",
    //   };
    // }
    return super.visitVariableDeclaration(n);
  }
}

export async function jsBeautify(source: string) {
  source = (
    await swcTransform(source, {
      cwd: outPath_build,
      inputSourceMap: false,
      sourceMaps: false,
      configFile: false,
      filename: "index.js",
      isModule: true,
      minify: false,
      swcrc: false,
      jsc: {
        keepClassNames: false,
        target: "es2022",
      },
    })
  ).code;
  return source;
}

export async function jsTransformSwc(source: string, settings: SwcTransformSettings): Promise<string> {
  return devLog.timed(
    async function js_transform_swc() {
      let result =
        (
          await swcTransform(source, {
            cwd: outPath_build,
            inputSourceMap: false,
            sourceMaps: false,
            configFile: false,
            filename: "index.js",
            isModule: true,
            minify: true,
            swcrc: false,
            jsc: {
              keepClassNames: false,
              target: "es2022",
            },
            plugin: (m) => new Transformer(settings).visitProgram(m),
          })
        ).code || source;
      result = jsRemoveEndingSemicolons(result);
      this.setSuccessText(sizeDifference(source, result));
      return result;
    },
    { spinner: true },
  );
}
