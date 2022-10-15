import type { ConfigAPI, NodePath, PluginItem, PluginObj, PluginPass, Visitor } from "@babel/core";
import { types } from "@babel/core";
import { isConstantExpr } from "./babel-is-const-expr";

const _pluginCounter = 0;

export function babelPluginsMove(): PluginItem {
  return [jsBabelMovePlugin, {}, `babel-move${_pluginCounter}`];

  function jsBabelMovePlugin(api: ConfigAPI): PluginObj {
    api.assertVersion(7);

    interface FunctionState {
      name: string;
      declarator: NodePath<types.VariableDeclarator>;
      functionPath: NodePath<types.ArrowFunctionExpression>;
      variablesToMove: VariableState[];
      isRootFunction: boolean;
      processed: boolean;
    }

    interface VariableState {
      declarationKind: "var" | "let" | "const";
      declaration: NodePath<types.VariableDeclaration>;
      declarator: NodePath<types.VariableDeclarator>;
      usedBuFunction: FunctionState | null | undefined;
      name: string;
    }

    const functions: FunctionState[] = [];
    const functionsMap = new Map<types.ArrowFunctionExpression, FunctionState>();
    const insideFunctionStack: FunctionState[] = [];
    const variablesState = new Map<types.VariableDeclarator, VariableState>();

    const onReferencedIdentifier = (path: NodePath<types.Identifier>) => {
      const rootFunction = insideFunctionStack.at(-1);

      const foundBinding = path.scope.getBinding(path.node.name);
      if (
        foundBinding &&
        foundBinding.path.node.type === "VariableDeclarator" &&
        foundBinding.path.parentPath?.node.type === "VariableDeclaration" &&
        foundBinding.path.parentPath.parentPath?.isProgram() &&
        foundBinding.path.node.id.type === "Identifier"
      ) {
        let variableState = variablesState.get(foundBinding.path.node);
        if (variableState && variableState.usedBuFunction !== rootFunction) {
          variableState.usedBuFunction = null;
        } else if (!variableState) {
          const kind =
            foundBinding.kind === "var" || foundBinding.kind === "let" || foundBinding.kind === "const"
              ? foundBinding.kind
              : null;

          variableState = {
            usedBuFunction: kind ? rootFunction : null,
            declarationKind: kind || "var",
            declaration: foundBinding.path.parentPath as NodePath<types.VariableDeclaration>,
            declarator: foundBinding.path as any,
            name: foundBinding.path.node.id.name,
          };
          if (foundBinding.path.node.init && !isConstantExpr(foundBinding.path.node.init)) {
            // Not a constant expr, cannot be moved.
            variableState.usedBuFunction = null;
          }
          variablesState.set(foundBinding.path.node, variableState);
        }
      } else if (foundBinding) {
        // console.error("what!!", path.node.name, foundBinding.path.node.type);
      } else {
        // console.error("what!!", path.node.name);
      }
    };

    const visitor: Visitor<PluginPass> & { ReferencedIdentifier(path: NodePath<types.Identifier>): void } = {
      ArrowFunctionExpression: {
        enter(path: NodePath<types.ArrowFunctionExpression>) {
          let parentPath = path.parentPath;
          if (
            parentPath.node.type === "CallExpression" &&
            parentPath.node.arguments.length === 1 &&
            parentPath.node.callee.type === "Identifier" &&
            parentPath.node.callee.name === "NO_INLINE"
          ) {
            parentPath = path.parentPath.parentPath!;
          }

          if (parentPath && parentPath.node.type === "VariableDeclarator" && parentPath.node.id.type === "Identifier") {
            if (!functionsMap.has(path.node)) {
              const name = parentPath.node.id.name;

              let isRootFunction = false;

              if (path.node.body.type === "BlockStatement") {
                isRootFunction = path.node.body.body.some(
                  (child) =>
                    child.type === "ExpressionStatement" &&
                    child.expression.type === "CallExpression" &&
                    child.expression.callee.type === "Identifier" &&
                    child.expression.callee.name === "DEV_ROOT_FUNCTION",
                );
              }

              const func: FunctionState = {
                name,
                declarator: parentPath as any,
                functionPath: path,
                variablesToMove: [],
                isRootFunction,
                processed: false,
              };
              insideFunctionStack.push(func);
              functions.push(func);
              functionsMap.set(path.node, func);
            }
          }
        },
        exit(path: NodePath<types.ArrowFunctionExpression>) {
          if (insideFunctionStack.at(-1)?.functionPath === path) {
            insideFunctionStack.pop();
          }
        },
      },

      Program: {
        exit() {
          for (const item of variablesState.values()) {
            if (item.usedBuFunction) {
              item.usedBuFunction.variablesToMove.push(item);
            }
          }
          for (const func of functions) {
            func.variablesToMove = func.variablesToMove.filter((p) => p.usedBuFunction === func);
          }

          for (const func of functions) {
            const variablesToMove = new Set<VariableState>();
            if (!func.processed && func.isRootFunction && func.variablesToMove.length > 0) {
              func.processed = true;
              const declarators: types.VariableDeclaration[] = [];
              const recursion = (p: VariableState) => {
                if (!variablesToMove.has(p)) {
                  variablesToMove.add(p);
                  if (p.declarator.node.init?.type === "ArrowFunctionExpression") {
                    const pfunc = functionsMap.get(p.declarator.node.init);
                    if (pfunc && !pfunc.processed) {
                      pfunc.processed = true;
                      console.log("recursion", pfunc.name);
                      for (const item of pfunc.variablesToMove) {
                        recursion(item);
                      }
                    }
                  }
                  declarators.push(types.variableDeclaration(p.declarationKind, [types.cloneNode(p.declarator.node)]));
                }
              };
              for (const p of func.variablesToMove) {
                recursion(p);
              }
              if (declarators.length > 0) {
                if (func.functionPath.node.body.type === "BlockStatement") {
                  func.functionPath.node.body = types.blockStatement([
                    ...declarators,
                    ...func.functionPath.node.body.body,
                  ]);
                }
                for (const v of variablesToMove) {
                  if (v.declaration.node) {
                    if (
                      v.declaration.node.declarations.length === 1 &&
                      v.declaration.node.declarations[0] === v.declarator.node
                    ) {
                      v.declaration.remove();
                    } else {
                      v.declarator.remove();
                    }
                  }
                }
              }

              console.log(
                func.name,
                Array.from(variablesToMove).map((x) => x.name),
              );
            }
          }
        },
      },

      ReferencedIdentifier(path: NodePath<types.Identifier>): void {
        onReferencedIdentifier(path);
      },

      AssignmentExpression(path: NodePath<types.AssignmentExpression>) {
        if (path.node.left.type === "Identifier") {
          onReferencedIdentifier(path.get("left") as any);
        }
      },
    };

    const pluginItem: PluginObj = {
      visitor,
    } as any;

    return pluginItem;
  }
}
