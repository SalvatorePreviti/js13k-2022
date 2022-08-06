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

  override visitVariableDeclaration(n: VariableDeclaration): VariableDeclaration {
    n = {
      ...n,
      declarations: n.declarations.filter((d) => !d.init).concat(n.declarations.filter((d) => !!d.init)),
    };

    if (this.settings.constToLet && n.kind === "const") {
      n.kind = "let";
    }

    return super.visitVariableDeclaration(n);
  }
}

export async function jsTransformSwc(source: string, settings: SwcTransformSettings): Promise<string> {
  return devLog.timed(
    async function js_swc_transform() {
      let result =
        (
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
