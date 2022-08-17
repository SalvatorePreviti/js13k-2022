import type { MemberExpression } from "@swc/core";
import { transform as swcTransform } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { outPath_build } from "../out-paths";
import type { PluginOption } from "vite";
import { glConstants, glFunctions } from "../lib/gl-context";
import { swcPluginVars } from "./swc/transforms/swc-plugin-vars";
import { global_defs, browserPureFunctions } from "../lib/js-config";
import { transform } from "@babel/core";
import path from "path";
import resugarBlockScopePlugin from "@resugar/codemod-declarations-block-scope";
import resugarFunctionsArrow from "@resugar/codemod-functions-arrow";
import { babelPluginVars } from "./babel/babel-plugin-vars";

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

      const output1 = await swcTransform(src, {
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
          preserveAllComments: true,
          target: "es2022",
          minify: {
            module: true,
            toplevel: true,
            compress: {
              arrows: true,
              defaults: false,
              booleans: false,
              booleans_as_integers: false,
              collapse_vars: false,
              comparisons: true,
              computed_props: false,
              conditionals: true,
              const_to_let: false,
              dead_code: true,
              evaluate: false,
              global_defs,
              hoist_funs: true,
              hoist_props: true,
              hoist_vars: false,
              inline: 3,
              keep_fargs: false,
              keep_infinity: true,
              keep_fnames: true,
              if_return: true,
              loops: true,
              sequences: false,
              join_vars: false,
              module: true,
              toplevel: true,
              typeofs: true,
              unsafe_comps: true,
              negate_iife: false,
              passes: 10,
              unused: true,
              unsafe: true,
              unsafe_undefined: true,
              unsafe_proto: true,
              unsafe_regexp: true,
              unsafe_methods: true,
              unsafe_math: true,
              unsafe_arrows: true,
              pure_funcs: browserPureFunctions,
              pure_getters: true,
              reduce_funcs: true,
              reduce_vars: true,
              switches: true,
              pristine_globals: true,
              arguments: false,
              side_effects: true,
            },
            format: {
              ascii_only: false,
              beautify: true,
              comments: "all",
              keep_quoted_props: true,
              preserve_annotations: true,
            },
          },
          parser: {
            syntax: "ecmascript",
            dynamicImport: true,
          },
        },
        plugin: (m) => {
          m = new Transformer().visitProgram(m);
          m = swcPluginVars()(m);
          return m;
        },
      });

      const output2 =
        transform(output1.code, {
          sourceMaps: true,
          inputSourceMap: output1.map ? JSON.parse(output1.map) : null,
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
            resugarBlockScopePlugin,
            babelPluginVars(),
            "babel-plugin-pure-calls-annotation",
          ],
        }) || output1;

      if (!output2.code) {
        output2.code = output1.code;
      }

      return {
        code: output2.code,
        map: output2.map,
      };
    },
  };
}
