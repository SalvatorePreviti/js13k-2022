import type { BlockStatement, Expression, ModuleItem, Program, Statement, VariableDeclaration } from "@swc/core";
import type { types as babelTypes } from "@babel/core";
import SwcVisitor from "@swc/core/Visitor";
import type { SwcSimpleTransformSettings } from "./swc-plugin-simple";
import { swcPluginSimpleTransform } from "./swc-plugin-simple";

class SwcVarsTransformer extends SwcVisitor {
  override visitProgram(n: Program): Program {
    n = super.visitProgram(n);
    return { ...n, body: this._sortStatements(n.body, true) as any };
  }

  override visitBlockStatement(block: BlockStatement): BlockStatement {
    block = super.visitBlockStatement(block);
    return { ...block, stmts: this._sortStatements(block.stmts, false) as any };
  }

  private _sortStatements(
    statements: readonly Statement[] | readonly ModuleItem[],
    moveNoInlineToEnd: boolean,
  ): ModuleItem[] {
    const topVariableDeclarations: VariableDeclaration[] = [];
    const lastStatements: Statement[] = [];

    const bodyStatements: ModuleItem[] = [];
    for (const stmt of statements) {
      if (stmt.type === "VariableDeclaration") {
        const declarator = stmt.declarations[0]!;
        if (!declarator.init || isConstantExpr(declarator.init)) {
          topVariableDeclarations.push(stmt);
          continue;
        }
      }

      if (
        moveNoInlineToEnd &&
        stmt.type === "ExpressionStatement" &&
        stmt.expression.type === "CallExpression" &&
        stmt.expression.callee.type === "Identifier" &&
        stmt.expression.callee.value === "NO_INLINE" &&
        stmt.expression.arguments[0]?.expression.type !== "StringLiteral"
      ) {
        lastStatements.push(stmt);
        continue;
      }

      bodyStatements.push(stmt);
    }

    topVariableDeclarations.sort(variableDeclarationSortCompare);

    return [...topVariableDeclarations, ...bodyStatements, ...lastStatements];
  }
}

export interface SwcPluginVarsSettings extends Exclude<SwcSimpleTransformSettings, "splitVarsAndSequences"> {}

export function swcPluginVars(settings: SwcPluginVarsSettings = {}) {
  return (m: Program) => {
    m = swcPluginSimpleTransform({ ...settings, splitVars: true })(m);
    m = new SwcVarsTransformer().visitProgram(m);
    return m;
  };
}

function isConstantExpr(expression?: Expression): boolean {
  if (!expression) {
    return true;
  }
  switch (expression.type) {
    case "NumericLiteral":
    case "StringLiteral":
    case "BooleanLiteral":
    case "NullLiteral":
    case "RegExpLiteral":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "BigIntLiteral":
    case "ClassExpression":
      return true;

    case "UnaryExpression":
      return isConstantExpr(expression.argument);

    case "BinaryExpression":
      return isConstantExpr(expression.left) && isConstantExpr(expression.right);

    case "CallExpression":
      if (expression.callee.type !== "MemberExpression") {
        return false;
      }
      if (!isConstantExpr(expression.callee.object)) {
        return false;
      }
      for (const arg of expression.arguments) {
        if (arg && !isConstantExpr(arg.expression)) {
          return false;
        }
      }
      break;

    case "MemberExpression":
      if (expression.object.type === "Identifier") {
        switch (expression.object.value) {
          case "Math":
          case "DOMMatrix":
            return true;
        }
      }
      return false;

    case "ObjectExpression":
      for (const property of expression.properties) {
        if (property.type !== "KeyValueProperty") {
          return false;
        }
        if (property.key.type === "Computed" && !isConstantExpr(property.key.expression)) {
          return false;
        }
        if (!isConstantExpr(property.value)) {
          return false;
        }
      }
      return true;

    case "ArrayExpression":
      for (const el of expression.elements) {
        if (el && !isConstantExpr(el.expression)) {
          return false;
        }
      }
      return true;

    case "Identifier":
      switch (expression.value) {
        case "Infinity":
        case "Math":
        case "NaN":
        case "Map":
        case "Set":
        case "Array":
        case "DOMMatrix":
        case "Uint8Array":
        case "Uint16Array":
        case "Uint32Array":
        case "Uint64Array":
        case "Int8Array":
        case "Int16Array":
        case "Int32Array":
        case "Int64Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView":
      }
      break;

    case "NewExpression":
      if (expression.callee.type === "Identifier") {
        switch (expression.callee.value) {
          case "Map":
          case "Set":
          case "Array":
          case "DOMMatrix":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Int64Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
          case "DataView":
            if (expression.arguments) {
              for (const arg of expression.arguments) {
                if (!isConstantExpr(arg.expression)) {
                  return false;
                }
              }
            }
            return true;
        }
      }
      return false;

    default:
      break;
  }
  return false;
}

function compareBoolean(a: boolean, b: boolean) {
  return !a && b ? -1 : a && !b ? 1 : 0;
}

function varKindOrdering(varKind: "var" | "let" | "const") {
  return varKind === "var" ? 0 : varKind === "let" ? 1 : 2;
}

function variableDeclarationSortCompare(
  da: VariableDeclaration | babelTypes.VariableDeclaration,
  db: VariableDeclaration | babelTypes.VariableDeclaration,
) {
  const a = da.declarations[0]!;
  const b = db.declarations[0]!;

  let c = varKindOrdering(da.kind) - varKindOrdering(db.kind);
  if (c) {
    return c;
  }

  c = compareBoolean(!a.init, !b.init);
  if (c) {
    return c;
  }

  // if (a.init && b.init) {
  // if (a.init.type === "NumericLiteral" && b.init.type === "NumericLiteral") {
  //   return a.init.value < b.init.value ? -1 : a.init.value > b.init.value ? 1 : 0;
  // }
  // if (a.init.type === "BooleanLiteral" && b.init.type === "BooleanLiteral") {
  //   return a.init.value < b.init.value ? -1 : a.init.value > b.init.value ? 1 : 0;
  // }
  // if (a.init.type === "StringLiteral" && b.init.type === "StringLiteral") {
  //   return a.init.value.localeCompare(b.init.value);
  // }
  // c = constExpressionOrdering(a.init, false) - constExpressionOrdering(b.init, false);
  // if (c) {
  //   return c;
  // }
  // c = constExpressionOrdering(a.init, true) - constExpressionOrdering(b.init, true);
  // if (c) {
  //   return c;
  // }
  // if (a.init.type === "ArrayExpression" && b.init.type === "ArrayExpression") {
  //   c = a.init.elements.length - b.init.elements.length;
  //   if (c) {
  //     return c;
  //   }
  //   for (let i = 0; i < a.init.elements.length; i++) {
  //     const aexpr = (a.init.elements[i]! as any).expression;
  //     const bexpr = (b.init.elements[i]! as any).expression;
  //     if (aexpr && bexpr) {
  //       c = constExpressionOrdering(aexpr, false) - constExpressionOrdering(bexpr, false);
  //       if (c) {
  //         return c;
  //       }
  //     }
  //     if (aexpr) {
  //       return 1;
  //     }
  //     if (bexpr) {
  //       return -1;
  //     }
  //   }
  // }
  // }

  if ("span" in a && "span" in b) {
    return c || a.span.start - b.span.start;
  }
  if ("range" in a && "range" in b && a.range && b.range) {
    return a.range[0] - b.range[0];
  }
  return 0;
}

// function constExpressionOrdering(
//   expression: Expression | babelTypes.Expression | babelTypes.PrivateName,
//   recursive: boolean,
// ): number {
//   switch (expression.type) {
//     case "NullLiteral":
//       return 1;
//     case "BooleanLiteral":
//       return 2;
//     case "NumericLiteral":
//       return 3;
//     case "BigIntLiteral":
//       return 4;
//     case "StringLiteral":
//       return 5;
//     case "ArrayExpression":
//       return 6;
//     case "ObjectExpression":
//       return 7;
//     case "RegExpLiteral":
//       return 8;
//     case "MemberExpression":
//       return 9;
//     case "CallExpression":
//       return 10;
//     case "Identifier":
//       return 11;
//     case "ClassExpression":
//       return 12;
//     case "FunctionExpression":
//       return 13;
//     case "NewExpression":
//       return 14;
//     case "ArrowFunctionExpression":
//       return 15;
//     case "UnaryExpression":
//       return recursive ? constExpressionOrdering(expression.argument, true) : 16;
//     case "BinaryExpression":
//       return recursive
//         ? Math.max(constExpressionOrdering(expression.left, true), constExpressionOrdering(expression.right, true))
//         : 17;
//     default:
//       return 100;
//   }
// }
