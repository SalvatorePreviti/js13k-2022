import type { ConfigAPI, NodePath, PluginItem, PluginObj, types } from "@babel/core";
import type { LVal } from "@babel/types";
import type { TraverseOptions } from "@babel/traverse";
import traverse from "@babel/traverse";

let _pluginCounter = 0;

/**
 * This magic plugin optimize destructuring by maximizing shorthand.
 */
export function babelPluginVars(settings: { lazyVariablesOptimization?: boolean }): PluginItem {
  return [jsFinalVarsPlugin, {}, `vars${++_pluginCounter}`];

  function jsFinalVarsPlugin(api: ConfigAPI): PluginObj {
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
                  let canRename = false;
                  if (keyBinding && !renamedBindings.has(valueBinding)) {
                    canRename = true;
                    for (let p = keyBinding.scope; p; p = p.parent) {
                      if (p === valueBinding.scope) {
                        canRename = false;
                        break;
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

        VariableDeclaration: {
          enter(path) {
            // Sort declarations
            const empty: types.VariableDeclarator[] = [];
            const inits: types.VariableDeclarator[] = [];
            for (const decl of path.node.declarations) {
              (decl.init ? inits : empty).push(decl);
            }
            path.node.declarations = empty.concat(inits);
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
            if (settings.lazyVariablesOptimization) {
              lazyVariablesOptimization(path);
            }

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

    function lazyVariablesOptimization(block: NodePath<types.Block>) {
      const statementsPaths: NodePath<types.Statement>[] = [];
      traverse<{}>(
        block.node,
        {
          Statement(path: NodePath<types.Statement>) {
            if (path.parent === block.node) {
              statementsPaths.push(path);
            }
            path.skip();
          },
        },
        block.scope,
        {},
        block,
      );

      const newStatements: types.Statement[] = [];
      const pendingEmptyVariables: types.VariableDeclaration[] = [];
      const pendingVariablesSet = new Set<string>();

      const flushPendingVariables = () => {
        newStatements.push(...pendingEmptyVariables);
        pendingEmptyVariables.length = 0;
        pendingVariablesSet.clear();
      };

      for (const statement of statementsPaths) {
        if (statement.node.type === "VariableDeclaration") {
          let hasInit = false;
          for (const declarator of statement.node.declarations) {
            if (declarator.init || declarator.id.type !== "Identifier") {
              hasInit = true;
              break;
            }
          }
          if (!hasInit) {
            for (const declarator of statement.node.declarations) {
              pendingVariablesSet.add((declarator.id as types.Identifier).name);
            }
            pendingEmptyVariables.push(statement.node);
            continue;
          }
        }

        if (pendingEmptyVariables.length > 0) {
          if (isIdentifiersUsed(statement, pendingVariablesSet)) {
            flushPendingVariables();
          }
        }

        newStatements.push(statement.node);
      }
      block.node.body = newStatements;
    }

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

  function isIdentifiersUsed(parentPath: NodePath, names: Set<string>) {
    let referenced = false;
    traverse<{}>(
      parentPath.node,
      {
        ReferencedIdentifier(path: NodePath<types.Identifier>) {
          if (names.has(path.node.name)) {
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
