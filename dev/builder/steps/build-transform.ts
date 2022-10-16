import type { MemberExpression } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../out-paths";
import type { PluginOption } from "vite";
import { glConstants, glFunctions } from "../lib/gl-context";
import { swcPluginVars } from "./swc/transforms/swc-plugin-vars";

class Transformer extends SwcVisitor {
  override visitMemberExpression(n: MemberExpression): MemberExpression {
    if (n.property.type === "Identifier") {
      if (n.object.type === "Identifier" && (n.object.value.endsWith("gl") || n.object.value === "glcontext")) {
        const glConstant = glConstants.get(n.property.value);
        if (typeof glConstant === "number") {
          return { type: "NumericLiteral", value: glConstant, span: n.span } as unknown as MemberExpression;
        }

        if (
          n.object.type === "Identifier" &&
          glFunctions.has(n.property.value) &&
          (n.object.value.endsWith("gl") || n.object.value === "glcontext")
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
    name: "build-transform",
    async transform(src, id) {
      if (!id.endsWith(".js") && !id.endsWith(".ts") && !id.endsWith(".tsx")) {
        return undefined;
      }

      let js = src;

      js =
        (
          await swcTransform(js, {
            cwd: outPath_build,
            configFile: false,
            filename: id,
            isModule: true,
            minify: false,
            swcrc: false,
            jsc: {
              transform: {
                optimizer: {
                  simplify: true,
                },
                useDefineForClassFields: false,
                treatConstEnumAsEnum: true,
                decoratorMetadata: false,
              },
              keepClassNames: false,
              preserveAllComments: true,
              target: "es2022",
              parser: { syntax: "ecmascript" },
            },
            plugin: (m) => {
              m = new Transformer().visitProgram(m);
              m = swcPluginVars({})(m);
              return m;
            },
          })
        ).code || js;

      return { code: js, map: null };
    },
  };
}
