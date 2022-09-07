import type { ConfigAPI, NodePath, PluginItem, PluginObj } from "@babel/core";
import { types } from "@babel/core";
import type { LVal } from "@babel/types";
import type { TraverseOptions } from "@babel/traverse";
import traverse from "@babel/traverse";

const annotateAsPure = require("@babel/helper-annotate-as-pure").default;

let _pluginCounter = 0;

/**
 * This magic plugin optimize destructuring by maximizing shorthand.
 */
export function babelPluginVars(settings: { splitVars?: boolean; constToLet?: boolean } = {}): PluginItem {
  return [jsFinalVarsPlugin, {}, `vars${++_pluginCounter}`];

  function jsFinalVarsPlugin(api: ConfigAPI): PluginObj {
    api.assertVersion(7);

    const renamedBindings = new Set();

    const objectPropertiesCollected: NodePath<types.ObjectProperty>[][] = [[]];

    return {
      visitor: {
        ObjectProperty(path: NodePath<types.ObjectProperty>) {
          const node = path.node;
          if (node.type === "ObjectProperty" && node.key.type === "Identifier" && node.value.type === "Identifier") {
            if (node.key.name === node.value.name) {
              node.shorthand = true;
            } else {
              objectPropertiesCollected[objectPropertiesCollected.length - 1]!.push(path);
            }
          }
        },

        VariableDeclaration: {
          enter(path) {
            if (settings.constToLet && path.node.kind === "const") {
              path.node.kind = "let";
            }
            // Sort declarations
            const empty: types.VariableDeclarator[] = [];
            const inits: types.VariableDeclarator[] = [];
            for (const decl of path.node.declarations) {
              if (decl.init && decl.init.type === "ArrowFunctionExpression") {
                annotateAsPure(decl.init);
              }
              (decl.init ? inits : empty).push(decl);
            }
            path.node.declarations = empty.concat(inits);

            if (settings.splitVars && path.node.declarations.length > 1 && path.parent && types.isBlock(path.parent)) {
              path.replaceWithMultiple(
                path.node.declarations.map((decl) => types.variableDeclaration(path.node.kind, [decl])),
              );
            }
          },
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
            objectPropertiesCollected.push([]);

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
          exit(blockPath) {
            const paths = objectPropertiesCollected.pop()!;
            for (const path of paths) {
              const node = path.node;
              const key = node.key as types.Identifier;
              const value = node.value as types.Identifier;
              if (key.name === value.name) {
                node.shorthand = true;
              } else if (path.parent.type === "ObjectExpression") {
                const scope = path.scope;
                if (key.name.length < 20) {
                  const valueBinding = scope.getBinding(value.name);
                  if (valueBinding && !renamedBindings.has(valueBinding)) {
                    const keyBinding = valueBinding.scope.getBinding(key.name);
                    let canRename = false;
                    if (keyBinding && !renamedBindings.has(keyBinding)) {
                      canRename = true;
                      for (let p = keyBinding.scope; p; p = p.parent) {
                        if (p === valueBinding.scope) {
                          canRename = false;
                          break;
                        }
                      }
                    }
                    renamedBindings.add(valueBinding);
                    if (
                      canRename &&
                      !isIdentifierUsed(valueBinding.path, key.name) &&
                      !isIdentifierUsed(blockPath, key.name)
                    ) {
                      scope.rename(value.name, key.name);
                      if ((node.value as types.Identifier).name === (node.key as types.Identifier).name) {
                        node.shorthand = true;
                      }
                    }
                  }
                }
              }
            }
          },
        },
      },
    };

    function declarationShorthand(lval: LVal, path: NodePath) {
      // TODO this seems to be still broken :( - however currently seems to save only few bytes
      // if (lval.type === "ObjectPattern") {
      //   for (const prop of lval.properties) {
      //     if (prop.type === "ObjectProperty" && prop.key.type === "Identifier" && prop.value.type === "Identifier") {
      //       const key = prop.key.name;
      //       const value = prop.value.name;
      //       if (key === value) {
      //         prop.shorthand = true;
      //       } else if (key.length < 20) {
      //         if (!isIdentifierUsed(path, key)) {
      //           path.scope.rename(value, key);
      //           if (prop.value.name === prop.key.name) {
      //             prop.shorthand = true;
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    }
  }

  function isIdentifierUsed(parentPath: NodePath, name: string) {
    let referenced = false;
    if (parentPath.scope.bindings[name]) {
      return true;
    }
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
