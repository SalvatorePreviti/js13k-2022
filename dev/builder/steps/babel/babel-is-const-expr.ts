import type { types } from "@babel/core";
import { browserPureFunctionsSet } from "../../lib/js-config";

export function isConstantExpr(
  expression?:
    | types.Expression
    | types.PrivateName
    | types.SpreadElement
    | types.JSXNamespacedName
    | types.ArgumentPlaceholder
    | types.RestElement
    | types.AssignmentPattern
    | types.ArrayPattern
    | types.ObjectPattern,
): boolean {
  if (!expression) {
    return true;
  }
  switch (expression.type) {
    case "SpreadElement":
      return isConstantExpr(expression.argument);

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
      if (expression.callee.type === "Identifier" && expression.callee.name === "NO_INLINE") {
        return isConstantExpr(expression.arguments[0]);
      }
      if (
        (expression.callee.type === "Identifier" && browserPureFunctionsSet.has(expression.callee.name)) ||
        (expression.callee.type === "MemberExpression" && isConstantExpr(expression.callee.object))
      ) {
        for (const arg of expression.arguments) {
          if (arg && !isConstantExpr(arg)) {
            return false;
          }
        }
        return true;
      }
      break;

    case "MemberExpression":
      if (expression.object.type === "Identifier" && browserPureFunctionsSet.has(expression.object.name)) {
        return true;
      }
      break;

    case "ObjectExpression":
      for (const property of expression.properties) {
        if (property.type !== "ObjectProperty") {
          return false;
        }
        if (!isConstantExpr(property.key)) {
          return false;
        }
        if (!isConstantExpr(property.value)) {
          return false;
        }
      }
      return true;

    case "ArrayExpression":
      for (const el of expression.elements) {
        if (el && !isConstantExpr(el)) {
          return false;
        }
      }
      return true;

    case "Identifier":
      switch (expression.name) {
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
          return true;
      }
      break;

    case "NewExpression":
      if (expression.callee.type === "Identifier") {
        switch (expression.callee.name) {
          case "Map":
          case "Set":
          case "Array":
          case "Image":
          case "AudioContext":
          case "DOMMatrix":
          case "DOMMatrixReadonly":
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
                if (!isConstantExpr(arg)) {
                  return false;
                }
              }
            }
            return true;
        }
      }
      return false;

    default:
      return false;
  }
  return false;
}
