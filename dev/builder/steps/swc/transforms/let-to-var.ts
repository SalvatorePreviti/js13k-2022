// import type { BlockStatement, Expression, ModuleItem, Program, Statement, VariableDeclaration } from "@swc/core";
// import SwcVisitor from "@swc/core/Visitor";
// import type { SwcSimpleTransformSettings } from "./swc-plugin-simple";
// import { swcPluginSimpleTransform } from "./swc-plugin-simple";

// export class SwcLetToVarTransformer extends SwcVisitor {
//   override visitProgram(n: Program): Program {
//     n = super.visitProgram(n);
//     return { ...n, body: this._sortStatements(n.body) as any };
//   }

//   override visitBlockStatement(block: BlockStatement): BlockStatement {
//     block = super.visitBlockStatement(block);
//     return { ...block, stmts: this._sortStatements(block.stmts) as any };
//   }

//   private _sortStatements(statements: readonly Statement[] | readonly ModuleItem[]): ModuleItem[] {
//     const topVariableDeclarations: VariableDeclaration[] = [];

//     const bodyStatements: ModuleItem[] = [];
//     for (const stmt of statements) {
//       if (stmt.type === "VariableDeclaration") {
//         const declarator = stmt.declarations[0]!;
//         if (!declarator.init || isConstantExpr(declarator.init)) {
//           topVariableDeclarations.push(stmt);
//           continue;
//         }
//       }
//       bodyStatements.push(stmt);
//     }

//     topVariableDeclarations.sort(variableDeclarationSortCompare);

//     return [...topVariableDeclarations, ...bodyStatements];
//   }
// }
