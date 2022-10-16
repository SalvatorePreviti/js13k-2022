import type { BlockStatement, Expression, ModuleItem, Program, Statement, VariableDeclaration } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import { browserPureFunctionsSet } from "../../../lib/js-config";
import type { SwcSimpleTransformSettings } from "./swc-plugin-simple";
import { swcPluginSimpleTransform } from "./swc-plugin-simple";

class SwcVarsTransformer extends SwcVisitor {
  override visitProgram(n: Program): Program {
    n = super.visitProgram(n);
    return { ...n, body: this._sortStatements(n.body) as any };
  }

  override visitBlockStatement(block: BlockStatement): BlockStatement {
    block = super.visitBlockStatement(block);
    return { ...block, stmts: this._sortStatements(block.stmts) as any };
  }

  private _sortStatements(statements: readonly Statement[] | readonly ModuleItem[]): ModuleItem[] {
    const topVariableDeclarations: VariableDeclaration[] = [];

    const bodyStatements: ModuleItem[] = [];
    for (const stmt of statements) {
      if (stmt.type === "VariableDeclaration" && stmt.declarations.length === 1) {
        const declarator = stmt.declarations[0]!;
        if (isConstantExpr(declarator.init)) {
          topVariableDeclarations.push(stmt);
          continue;
        }
      }

      bodyStatements.push(stmt);
    }

    topVariableDeclarations.sort(variableDeclarationSortCompare);

    return [...topVariableDeclarations, ...bodyStatements];
  }
}

export interface SwcPluginVarsSettings extends Exclude<SwcSimpleTransformSettings, "splitVars"> {}

export function swcPluginVars(settings: SwcPluginVarsSettings = {}) {
  return (m: Program) => {
    m = swcPluginSimpleTransform({ ...settings, splitVars: true, splitSequences: true })(m);
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
      if (expression.callee.type === "Identifier" && expression.callee.value === "NO_INLINE") {
        return isConstantExpr(expression.arguments[0]?.expression);
      }
      if (
        (expression.callee.type === "Identifier" && browserPureFunctionsSet.has(expression.callee.value)) ||
        (expression.callee.type === "MemberExpression" && isConstantExpr(expression.callee.object))
      ) {
        for (const arg of expression.arguments) {
          if (arg && !isConstantExpr(arg.expression)) {
            return false;
          }
        }
        return true;
      }
      break;

    case "MemberExpression":
      if (expression.object.type === "Identifier" && browserPureFunctionsSet.has(expression.object.value)) {
        return true;
      }
      break;

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
          return true;
      }
      break;

    case "NewExpression":
      if (expression.callee.type === "Identifier") {
        switch (expression.callee.value) {
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
      return false;
  }
  return false;
}

function varKindOrdering(varKind: "var" | "let" | "const") {
  return varKind === "var" ? 0 : varKind === "let" ? 1 : 2;
}

function variableDeclarationSortCompare(da: VariableDeclaration, db: VariableDeclaration) {
  const a = da.declarations[0]!;
  const b = db.declarations[0]!;

  let c = 0;

  if (a.init !== b.init) {
    if (!a.init) {
      return -1;
    }
    if (!b.init) {
      return 1;
    }
  }

  if (a.init && b.init) {
    c = compareExpressions(a.init, b.init);
  }

  // if (!c && a.id.type === "Identifier" && b.id.type === "Identifier") {
  //   c = b.id.value.length - a.id.value.length || a.id.value.localeCompare(b.id.value);
  // }

  if (c) {
    return c;
  }

  c = varKindOrdering(db.kind) - varKindOrdering(da.kind);
  if (c) {
    return c;
  }

  return "span" in a && "span" in b ? a.span.start - b.span.start : 0;
}

function compareExpressions(a: Expression, b: Expression): number {
  if (a === b) {
    return 0;
  }

  if (a.type === "CallExpression" && a.callee.type === "Identifier" && a.callee.value === "NO_INLINE") {
    a = a.arguments[0]!.expression;
  }

  if (b.type === "CallExpression" && b.callee.type === "Identifier" && b.callee.value === "NO_INLINE") {
    b = b.arguments[0]!.expression;
  }

  const ta = exprTypeOrdering(a);
  const tb = exprTypeOrdering(b);
  if (ta && tb && ta !== tb) {
    return ta - tb;
  }

  let c = 0;
  if (a.type === "NumericLiteral" && b.type === "NumericLiteral") {
    const va = a.value;
    const vb = b.value;

    if (va === (va | 0) && vb !== (vb | 0)) {
      return -1;
    }

    if (va !== (va | 0) && vb === (vb | 0)) {
      return 1;
    }

    c = va.toString().length - vb.toString().length;
    if (c) {
      return c;
    }
    c = va < vb ? -1 : va > vb ? 1 : 0;
    if (c) {
      return c;
    }
  }

  if (a.type === "BooleanLiteral" && b.type === "BooleanLiteral") {
    c = a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
    if (c) {
      return c;
    }
  }

  if (a.type === "StringLiteral" && b.type === "StringLiteral") {
    c = a.value.localeCompare(b.value);
    if (c) {
      return c;
    }
  }

  if (a.type === "UnaryExpression" && b.type === "UnaryExpression") {
    c = compareExpressions(a.argument, b.argument);
    if (c) {
      return c;
    }
  }

  if (a.type === "BinaryExpression" && b.type === "BinaryExpression") {
    c =
      a.operator.localeCompare(b.operator) ||
      compareExpressions(a.left, b.left) ||
      compareExpressions(a.right, b.right);
    if (c) {
      return c;
    }
  }

  if (a.type === "NewExpression" && b.type === "NewExpression") {
    if (a.callee.type === "Identifier" && b.callee.type === "Identifier") {
      c = a.callee.value.localeCompare(b.callee.value);
      if (c) {
        return c;
      }
    }
    c = compareExpressions(a.callee, b.callee);
    if (c) {
      return c;
    }
    const aa = a.arguments || [];
    const ba = b.arguments || [];
    for (let i = 0; i < aa.length; i++) {
      const aexpr = aa[i]?.expression;
      const bexpr = ba[i]?.expression;
      if (aexpr && bexpr) {
        c = compareExpressions(aexpr, bexpr);
        if (c) {
          return c;
        }
      }
      if (aexpr) {
        return 1;
      }
      if (bexpr) {
        return -1;
      }
    }
  }

  if (a.type === "ArrayExpression" && b.type === "ArrayExpression") {
    c = a.elements.length - b.elements.length;
    if (c) {
      return c;
    }
    for (let i = 0; i < a.elements.length; i++) {
      const aexpr = a.elements[i]!.expression;
      const bexpr = b.elements[i]!.expression;
      if (aexpr && bexpr) {
        c = compareExpressions(aexpr, bexpr);
        if (c) {
          return c;
        }
      }
      if (aexpr) {
        return 1;
      }
      if (bexpr) {
        return -1;
      }
    }
  }

  if (c) {
    return c;
  }

  if (a.type === "Identifier" && b.type === "Identifier") {
    return a.value.localeCompare(b.value);
  }

  return "span" in a && "span" in b ? a.span.start - b.span.start : 0;
}

const expressionTypeOrdering: Expression["type"][] = [
  "NullLiteral",
  "BooleanLiteral",
  "NumericLiteral",
  "BigIntLiteral",
  "StringLiteral",
  "UnaryExpression",
  "BinaryExpression",
  "ObjectExpression",
  "ArrayExpression",
  "RegExpLiteral",
  "MemberExpression",
  "Identifier",
  "ClassExpression",
  "ArrowFunctionExpression",
  "FunctionExpression",
  "NewExpression",
  "CallExpression",
];

function exprTypeOrdering(expression: Expression): number {
  let idx = expressionTypeOrdering.indexOf(expression.type);
  if (idx >= 0) {
    if (
      expression.type === "CallExpression" &&
      expression.callee.type === "Identifier" &&
      expression.callee.value === "NO_INLINE"
    ) {
      idx = expressionTypeOrdering.indexOf("ArrowFunctionExpression");
    }
    return idx + 1;
  }
  return 0;
}
