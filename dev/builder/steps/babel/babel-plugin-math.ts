import { types, parse } from "@babel/core";
import type { ConfigAPI, NodePath, PluginItem, PluginObj } from "@babel/core";

let _pluginCounter = 0;

export function babelPluginMath(): PluginItem {
  return [jsBabelMathPlugin, {}, `babel-math${++_pluginCounter}`];

  function jsBabelMathPlugin(api: ConfigAPI): PluginObj {
    api.assertVersion(7);

    const usedMathFunctions = new Set<string>();
    const VAR_PREFIX = "$Math_";

    const pluginItem: PluginObj = {
      visitor: {
        MemberExpression(path: NodePath<types.MemberExpression>) {
          const { node } = path;
          if (node.object.type === "Identifier" && node.object.name === "Math") {
            if (node.property.type === "Identifier") {
              usedMathFunctions.add(node.property.name);
              path.replaceWith(types.identifier(`${VAR_PREFIX}${node.property.name}`));
            }
          }
        },

        CallExpression(path: NodePath<types.CallExpression>): void {
          if (
            path.node.callee.type === "Identifier" &&
            path.parent.type === "MemberExpression" &&
            path.parent.object.type === "Identifier" &&
            path.parent.object.name === "Math"
          ) {
            usedMathFunctions.add(path.node.callee.name);
            path.parentPath.replaceWith(
              types.callExpression(types.identifier(VAR_PREFIX + path.node.callee.name), path.node.arguments),
            );
          }
        },

        Program: {
          enter(): void {
            usedMathFunctions.clear();
          },
          exit(path: NodePath<types.Program>): void {
            if (usedMathFunctions.size > 0) {
              path.node.body.unshift(
                parse(
                  `let { ${Array.from(usedMathFunctions)
                    .map((name) => `${name}:${VAR_PREFIX}${name}`)
                    .join(", ")} } = Math;`,
                )!.program.body[0]!,
              );
            }
          },
        },
      },
    };

    return pluginItem;
  }
}
