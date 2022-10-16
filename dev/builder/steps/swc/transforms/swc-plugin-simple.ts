import { numberFixedRound, numberFixedString } from "@balsamic/dev";
import type {
  BlockStatement,
  ComputedPropName,
  KeyValuePatternProperty,
  KeyValueProperty,
  MemberExpression,
  ModuleItem,
  NumericLiteral,
  ObjectPatternProperty,
  Program,
  Property,
  SpreadElement,
  Statement,
  VariableDeclaration,
} from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";

export const DO_NOT_MANGLE_PREFIX = "@#";

export interface SwcSimpleTransformSettings {
  constToLet?: boolean;
  splitVars?: boolean;
  splitSequences?: boolean;
  unmangleableProperties?: "mark" | "transform" | undefined;

  /** Number of digits to round floating point numbers. If 0, means no rounding at all. */
  floatRound?: number;
}

export function swcPluginSimpleTransform(settings: SwcSimpleTransformSettings) {
  return (m: Program) => {
    return new SwcSimpleTransformer(settings).visitProgram(m);
  };
}

class SwcSimpleTransformer extends SwcVisitor {
  public constructor(public settings: SwcSimpleTransformSettings) {
    super();
  }

  override visitKeyValueProperty(n: KeyValueProperty): SpreadElement | Property {
    if (
      n.key.type === "StringLiteral" &&
      n.key.value &&
      this.settings.unmangleableProperties === "mark" &&
      !n.key.value.startsWith(DO_NOT_MANGLE_PREFIX)
    ) {
      n.key.value = `${DO_NOT_MANGLE_PREFIX}${n.key.value}`;
    } else if (
      n.key.type === "StringLiteral" &&
      this.settings.unmangleableProperties === "transform" &&
      n.key.value.startsWith(DO_NOT_MANGLE_PREFIX)
    ) {
      const name = n.key.value.slice(DO_NOT_MANGLE_PREFIX.length);
      n.key = {
        type: "StringLiteral",
        span: n.key.span,
        value: name,
        raw: JSON.stringify(name),
      };
    }

    return super.visitKeyValueProperty(n);
  }

  override visitMemberExpression(n: MemberExpression): MemberExpression {
    if (n.type === "MemberExpression" && n.property.type === "Computed") {
      if (
        n.property.expression.type === "StringLiteral" &&
        n.property.expression.value &&
        this.settings.unmangleableProperties === "mark" &&
        !n.property.expression.value.startsWith(DO_NOT_MANGLE_PREFIX)
      ) {
        n.property.expression.value = `${DO_NOT_MANGLE_PREFIX}${n.property.expression.value}`;
        n.property.expression.raw = JSON.stringify(n.property.expression.value);
      } else if (
        n.property.expression.type === "StringLiteral" &&
        this.settings.unmangleableProperties === "transform" &&
        n.property.expression.value.startsWith(DO_NOT_MANGLE_PREFIX)
      ) {
        const name = n.property.expression.value.slice(DO_NOT_MANGLE_PREFIX.length);
        n.property.expression = {
          type: "StringLiteral",
          span: n.property.expression.span,
          value: name,
          raw: JSON.stringify(name),
        };
      }
    }
    return super.visitMemberExpression(n);
  }

  override visitKeyValuePatternProperty(n: KeyValuePatternProperty): ObjectPatternProperty {
    if (
      n.key.type === "StringLiteral" &&
      this.settings.unmangleableProperties === "mark" &&
      !n.key.value.startsWith(DO_NOT_MANGLE_PREFIX)
    ) {
      n.key.value = `${DO_NOT_MANGLE_PREFIX}${n.key.value}`;
      n.key.raw = JSON.stringify(n.key.value);
    } else if (
      n.key.type === "StringLiteral" &&
      this.settings.unmangleableProperties === "transform" &&
      n.key.value.startsWith(DO_NOT_MANGLE_PREFIX)
    ) {
      const name = n.key.value.slice(DO_NOT_MANGLE_PREFIX.length);
      n.key = {
        type: "StringLiteral",
        span: n.key.span,
        value: name,
        raw: JSON.stringify(name),
      };
    }
    return super.visitKeyValuePatternProperty(n);
  }

  override visitComputedPropertyKey(n: ComputedPropName): ComputedPropName {
    if (
      n.expression.type === "StringLiteral" &&
      this.settings.unmangleableProperties === "mark" &&
      !n.expression.value.startsWith(DO_NOT_MANGLE_PREFIX)
    ) {
      n.expression.value = `${DO_NOT_MANGLE_PREFIX}${n.expression.value}`;
      n.expression.raw = JSON.stringify(n.expression.value);
    } else if (
      this.settings.unmangleableProperties === "transform" &&
      n.expression.type === "StringLiteral" &&
      n.expression.value.startsWith(DO_NOT_MANGLE_PREFIX)
    ) {
      const name = n.expression.value.slice(DO_NOT_MANGLE_PREFIX.length);
      n.expression = {
        type: "StringLiteral",
        span: n.expression.span,
        value: name,
        raw: JSON.stringify(name),
      };
    }
    return super.visitComputedPropertyKey(n);
  }

  override visitNumericLiteral(n: NumericLiteral): NumericLiteral {
    const precision = this.settings.floatRound;
    if (precision) {
      if (n.value.toString().includes(".")) {
        const v = numberFixedRound(n.value, precision);
        if (n.value !== v) {
          n = { ...n, value: v, raw: numberFixedString(v, precision) };
        }
      }
    }
    return super.visitNumericLiteral(n);
  }

  override visitVariableDeclaration(n: VariableDeclaration): VariableDeclaration {
    if (this.settings.constToLet && n.kind === "const") {
      n = { ...n, kind: "let" };
    }
    return super.visitVariableDeclaration(n);
  }

  override visitProgram(n: Program): Program {
    n = super.visitProgram(n);
    return { ...n, body: this._splitVariableDeclarations(n.body) };
  }

  override visitBlockStatement(block: BlockStatement): BlockStatement {
    block = super.visitBlockStatement(block);
    return { ...block, stmts: this._splitVariableDeclarations(block.stmts) };
  }

  private _splitVariableDeclarations(stmts: Statement[] | ModuleItem[]): any[] {
    const resultStatements = [];
    for (const statement of stmts) {
      if (statement.type === "VariableDeclaration" && this.settings.splitVars) {
        // Split variable declarations
        for (const declaration of statement.declarations) {
          resultStatements.push({ ...statement, declarations: [declaration] });
        }
        continue;
      }

      if (
        statement.type === "ExpressionStatement" &&
        this.settings.splitSequences &&
        statement.expression.type === "SequenceExpression"
      ) {
        // Split simple sequences
        for (const expression of statement.expression.expressions) {
          resultStatements.push({ ...statement, expression });
        }
        continue;
      }

      resultStatements.push(statement);
    }
    return resultStatements;
  }
}
