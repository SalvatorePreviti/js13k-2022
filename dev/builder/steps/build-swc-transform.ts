import type { MemberExpression } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../out-paths";
import type { PluginOption } from "vite";
import { glConstants, glFunctions } from "../lib/gl-context";

class Transformer extends SwcVisitor {
  override visitMemberExpression(n: MemberExpression): MemberExpression {
    if (n.property.type === "Identifier") {
      if (n.object.type === "Identifier" && /ctx|context|gl/i.test(n.object.value)) {
        const glConstant = glConstants.get(n.property.value);
        if (typeof glConstant === "number") {
          return { type: "NumericLiteral", value: glConstant, span: n.span } as unknown as MemberExpression;
        }

        if (
          n.object.type === "Identifier" &&
          glFunctions.has(n.property.value) &&
          /ctx|context|gl/i.test(n.object.value)
        ) {
          return {
            ...n,
            property: {
              type: "Computed",
              span: n.property.span,
              expression: {
                type: "StringLiteral",
                span: n.property.span,
                value: glFunctions.get(n.property.value)!,
              },
            },
          };
        }
      }
    }

    return n;
  }
}

export function rollupPluginSwcTransform(): PluginOption {
  return {
    name: "swc-transform",
    async transform(src, id) {
      if (!id.endsWith(".js") && !id.endsWith(".ts") && !id.endsWith(".tsx")) {
        return undefined;
      }

      const output = await swcTransform(src, {
        cwd: outPath_build,
        inputSourceMap: false,
        sourceMaps: true,
        configFile: false,
        filename: id,
        isModule: true,
        minify: false,
        swcrc: false,
        jsc: {
          keepClassNames: false,
          target: "es2022",
          parser: {
            syntax: "ecmascript",
            dynamicImport: false,
          },
        },
        plugin: (m) => new Transformer().visitProgram(m),
      });

      return {
        code: output.code,
        map: output.map,
      };
    },
  };
}
