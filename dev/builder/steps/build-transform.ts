import type { MemberExpression } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../out-paths";
import type { PluginOption } from "vite";
import { glConstants, glFunctions } from "../lib/gl-context";
import { swcPluginVars } from "./swc/transforms/swc-plugin-vars";
import { transform } from "@babel/core";
import path from "path";
import resugarBlockScopePlugin from "@resugar/codemod-declarations-block-scope";
import resugarConcise from "@resugar/codemod-objects-concise";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import { babelPluginSimple } from "./babel/babel-plugin-simple";
import { jsUglify } from "./js-uglify";

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
              m = swcPluginVars()(m);
              return m;
            },
          })
        ).code || js;

      js =
        transform(js, {
          root: path.dirname(id),
          cwd: path.dirname(id),
          configFile: false,
          babelrc: false,
          envName: "production",
          comments: true,
          compact: false,
          minified: false,
          sourceType: "module",
          parserOpts: {
            sourceType: "module",
            allowAwaitOutsideFunction: true,
            allowImportExportEverywhere: true,
            allowReturnOutsideFunction: true,
            allowSuperOutsideMethod: true,
            allowUndeclaredExports: true,
          },
          plugins: [
            resugarFunctionsArrow,
            // resugarBlockScopePlugin,
            "babel-plugin-minify-constant-folding",
            "babel-plugin-minify-dead-code-elimination",
            babelPluginSimple({ unmangleableProperties: "mark" }),
          ],
        })?.code || js;

      js = await jsUglify(js, {
        varify: false,
        final: false,
        reduce_vars: true,
        join_vars: true,
        sequences: true,
        computed_props: true,
        timed: false,
      });

      js =
        transform(js, {
          root: path.dirname(id),
          cwd: path.dirname(id),
          configFile: false,
          babelrc: false,
          envName: "production",
          comments: true,
          compact: false,
          minified: false,
          sourceType: "module",
          parserOpts: {
            sourceType: "module",
            allowAwaitOutsideFunction: true,
            allowImportExportEverywhere: true,
            allowReturnOutsideFunction: true,
            allowSuperOutsideMethod: true,
            allowUndeclaredExports: true,
          },
          plugins: [
            resugarConcise,
            resugarFunctionsArrow,
            resugarBlockScopePlugin,
            "babel-plugin-minify-constant-folding",
            "babel-plugin-minify-dead-code-elimination",
            babelPluginSimple({ unmangleableProperties: "transform" }),
            // "babel-plugin-pure-calls-annotation",
          ],
        })?.code || js;

      return { code: js, map: null };
    },
  };
}
