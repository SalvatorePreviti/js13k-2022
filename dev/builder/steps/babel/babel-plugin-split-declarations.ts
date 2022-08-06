import type { ConfigAPI, PluginObj } from "@babel/core";
import { types } from "@babel/core";

/**
 * Applies some basic pre-transformations.
 * Converts `!0` to true and `!1` to false.
 * Adds blocks to loops and if statements.
 * Split variables declarations.
 * @param api
 * @returns
 */
export function babelPluginSplitDeclarations(api: ConfigAPI): PluginObj {
  api.assertVersion(7);

  return {
    visitor: {
      // UnaryExpression(path) {
      //   // Replaces `!0` to true and `!1` to false
      //   const node = path.node;
      //   if (node.operator === "!" && types.isNumericLiteral(node.argument)) {
      //     path.replaceWith(types.booleanLiteral(!node.argument.value));
      //   }
      // },

      VariableDeclaration(path) {
        const node = path.node;
        // Replaces multiple variable declarations `let a,b=2;` into single statements.
        if (node.declarations.length > 1 && types.isBlock(path.parent)) {
          path.replaceWithMultiple(
            node.declarations.map((declarator) => types.variableDeclaration(node.kind, [declarator])),
          );
        }
      },

      // Loop(path) {
      //   // Adds curly braces around loops.
      //   const node = path.node;
      //   if (!types.isBlockStatement(node.body)) {
      //     node.body = types.blockStatement([node.body]);
      //   }
      // },

      // IfStatement(path) {
      //   // Adds curly braces around if statements.
      //   const node = path.node;
      //   if (!types.isBlockStatement(node.consequent)) {
      //     node.consequent = types.blockStatement([node.consequent]);
      //   }
      //   if (node.alternate && !types.isBlockStatement(node.alternate) && !types.isIfStatement(node.alternate)) {
      //     node.alternate = types.blockStatement([node.alternate]);
      //   }
      // },
    },
  };
}
