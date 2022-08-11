import type { ConfigAPI, NodePath, PluginObj, types } from "@babel/core";
import { transform } from "@babel/core";
import type { LVal } from "@babel/types";
import { devLog } from "@balsamic/dev";
import { sizeDifference } from "../lib/logging";
import type { TraverseOptions } from "@babel/traverse";
import traverse from "@babel/traverse";

export async function jsDestructure(code: string) {
  return devLog.timed(
    function js_destructure() {
      const root = process.cwd();
      const transformResult = transform(code, {
        root,
        cwd: root,
        configFile: false,
        babelrc: false,
        envName: "production",
        comments: true,
        compact: true,
        minified: true,
        parserOpts: {
          sourceType: "module",
          allowAwaitOutsideFunction: true,
          allowImportExportEverywhere: true,
          allowReturnOutsideFunction: true,
          allowSuperOutsideMethod: true,
          allowUndeclaredExports: true,
        },
        plugins: [[fixDestructurePlugin, {}, "js_destructure"]],
      });
      const result = transformResult?.code || code;
      this.setSuccessText(sizeDifference(code, result));
      return result;
    },
    { spinner: true },
  );
}

/**
 * This magic plugin optimize destructuring by maximizing shorthand.
 */
function fixDestructurePlugin(api: ConfigAPI): PluginObj {
  api.assertVersion(7);

  const renamedBindings = new Set();

  return {
    visitor: {
      ObjectProperty(path: NodePath<types.ObjectProperty>) {
        const node = path.node;
        if (node.type === "ObjectProperty" && node.key.type === "Identifier" && node.value.type === "Identifier") {
          if (node.key.name === node.value.name) {
            node.shorthand = true;
          } else if (path.parent.type === "ObjectExpression") {
            const scope = path.scope;
            if (node.key.name.length < 20) {
              const valueBinding = scope.getBinding(node.value.name);
              if (valueBinding && !renamedBindings.has(valueBinding)) {
                const keyBinding = valueBinding.scope.getBinding(node.key.name);
                let canRename = true;
                if (keyBinding) {
                  for (let p = keyBinding.scope; p; p = p.parent) {
                    if (p === valueBinding.scope) {
                      canRename = false;
                    }
                  }
                }
                if (canRename && !isIdentifierUsed(valueBinding.path, node.key.name)) {
                  scope.rename(node.value.name, node.key.name);
                  renamedBindings.add(valueBinding);
                  if (node.value.name === node.key.name) {
                    node.shorthand = true;
                  }
                }
              }
            }
          }
        }
      },

      Expression: {
        enter(path) {
          const parent = path.parent;
          if (
            parent.type === "FunctionDeclaration" ||
            parent.type === "FunctionExpression" ||
            parent.type === "ArrowFunctionExpression"
          ) {
            for (const parameter of parent.params) {
              declarationShorthand(parameter, path);
            }
          }
        },
      },

      Block: {
        enter(path) {
          const parent = path.parent;
          if (
            parent.type === "FunctionDeclaration" ||
            parent.type === "FunctionExpression" ||
            parent.type === "ArrowFunctionExpression"
          ) {
            for (const parameter of parent.params) {
              declarationShorthand(parameter, path);
            }
          }

          for (const statement of path.node.body) {
            if (statement.type === "VariableDeclaration") {
              for (const declarator of statement.declarations) {
                declarationShorthand(declarator.id, path);
              }
            }
          }
        },
      },
    },
  };

  function declarationShorthand(lval: LVal, path: NodePath) {
    if (lval.type === "ObjectPattern") {
      for (const prop of lval.properties) {
        if (prop.type === "ObjectProperty" && prop.key.type === "Identifier" && prop.value.type === "Identifier") {
          const key = prop.key.name;
          const value = prop.value.name;
          if (key === value) {
            prop.shorthand = true;
          } else if (key.length < 20) {
            if (!isIdentifierUsed(path, key)) {
              path.scope.rename(value, key);
              if (prop.value.name === prop.key.name) {
                prop.shorthand = true;
              }
            }
          }
        }
      }
    }
  }

  function isIdentifierUsed(parentPath: NodePath, name: string) {
    let referenced = false;
    traverse<{}>(
      parentPath.node,
      {
        ReferencedIdentifier(path: NodePath<types.Identifier>) {
          if (path.node.name === name) {
            referenced = true;
            path.stop();
          }
        },
      } as unknown as TraverseOptions<{}>,
      parentPath.scope,
      {},
      parentPath,
    );
    return referenced;
  }
}
