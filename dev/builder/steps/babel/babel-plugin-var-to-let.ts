import type { ConfigAPI, Node, NodePath, PluginObj } from "@babel/core";
import { types } from "@babel/core";
import type { VariableDeclaration } from "@babel/types";
import type { VariableDeclarator, FunctionDeclaration, FunctionExpression, Identifier } from "@babel/types";
import { flatMap } from "lodash";
import { flow, map, uniq, compact } from "lodash/fp";

class VariableGroup {
  public variables: Variable[] = [];
  constructor(public node: VariableDeclaration, public parentNode: Node) {}

  add(variable: Variable) {
    this.variables.push(variable);
  }

  getVariables() {
    return this.variables;
  }

  getCommonKind() {
    const firstKind = this.variables[0]?.getKind();
    if (this.variables.every((v) => v.getKind() === firstKind)) {
      return firstKind;
    }
    return undefined;
  }

  getMostRestrictiveKind() {
    const kindToVal = { var: 1, let: 2, const: 3 } as const;
    const valToKind = { 1: "var", 2: "let", 3: "const" } as const;
    let minv: 1 | 2 | 3 | undefined;
    for (const v of this.variables) {
      if (minv === undefined || minv < kindToVal[v.getKind()]) {
        minv = kindToVal[v.getKind()];
      }
    }
    return minv !== undefined ? valToKind[minv] : undefined;
  }

  getNode() {
    return this.node;
  }

  getParentNode() {
    return this.parentNode;
  }
}

class VariableMarker {
  constructor(public scopeManager: ScopeManager) {}

  /**
   * Marks set of variables declared in current block scope.
   *
   * Takes an array of variable names to support the case of declaring
   * multiple variables at once with a destructuring operation.
   *
   * - Not valid block var when already declared before.
   *
   * @param  {String[]} varNames
   */
  markDeclared(varNames: string[]) {
    const alreadySeen = new Set<Variable>();

    varNames.forEach((varName) => {
      const blockVar = this.getScope()?.findFunctionScoped(varName);

      if (blockVar !== undefined) {
        if (!alreadySeen.has(blockVar)) {
          alreadySeen.add(blockVar);
          // Ignore repeated var declarations
          if (blockVar.isDeclared()) {
            blockVar.markHoisted();
            return;
          }
        }

        // Remember that it's declared and register in current block scope
        blockVar.markDeclared();
        this.getScope()?.register(varName, blockVar);
      }
    });
  }

  markModified(varName: string) {
    const blockVar = this.getScope()?.findBlockScoped(varName);
    if (blockVar) {
      blockVar.markModified();
      return;
    }
    const funcVar = this.getScope()?.findFunctionScoped(varName);
    if (funcVar) {
      funcVar.markHoisted();
      funcVar.markModified();
    }
  }

  markReferenced(varName: string) {
    const blockVar = this.getScope()?.findBlockScoped(varName);
    if (!blockVar) {
      const funcVar = this.getScope()?.findFunctionScoped(varName);
      if (funcVar) {
        funcVar.markHoisted();
      }
    }
  }

  getScope() {
    return this.scopeManager.getScope();
  }
}

class Variable {
  public declared = false;
  public hoisted = false;
  public modified = false;
  constructor(public node: VariableDeclarator, public group: VariableGroup | undefined) {
    this.node = node;
    this.group = group;
    this.declared = false;
    this.hoisted = false;
    this.modified = false;
  }

  markDeclared() {
    this.declared = true;
  }

  isDeclared() {
    return this.declared;
  }

  /**
   * Marks that the use of the variable is not block-scoped,
   * so it cannot be simply converted to `let` or `const`.
   */
  markHoisted() {
    this.hoisted = true;
  }

  markModified() {
    this.modified = true;
  }

  getKind() {
    return this.hoisted ? "var" : this.modified ? "let" : "const";
  }

  getNode() {
    return this.node;
  }

  getGroup() {
    return this.group;
  }
}

class Scope {
  public vars: Record<string, Variable> = Object.create(null);
  constructor(public parent: Scope | undefined) {}

  getParent() {
    return this.parent;
  }

  findFunctionScoped(name: string): Variable | undefined {
    return this.parent?.findFunctionScoped(name);
  }

  findBlockScoped(name: string): Variable | undefined {
    return this.vars[name] || this.parent?.findBlockScoped(name);
  }

  getVariables() {
    return Object.values(this.vars);
  }

  register(name: string, variable: Variable) {
    this.vars[name] = variable;
  }
}

class BlockScope extends Scope {}

class FunctionScope extends Scope {
  override register(name: string, variable: Variable) {
    if (!this.vars[name]) {
      this.vars[name] = variable;
    }
  }

  override findFunctionScoped(name: string): Variable | undefined {
    if (this.vars[name]) {
      return this.vars[name];
    }
    if (this.parent) {
      return this.parent?.findFunctionScoped(name);
    }
    return undefined;
  }

  override findBlockScoped(name: string): Variable | undefined {
    if (this.vars[name]) {
      return undefined;
    }
    if (this.parent) {
      return this.parent.findBlockScoped(name);
    }
    return undefined;
  }
}

class ScopeManager {
  public scope: Scope | undefined;

  constructor() {
    this.scope = undefined;
  }

  enterFunction() {
    this.scope = new FunctionScope(this.scope);
  }

  enterBlock() {
    this.scope = new BlockScope(this.scope);
  }

  leaveScope() {
    this.scope = this.scope?.getParent();
  }

  getScope() {
    return this.scope;
  }
}

export function babelPluginVarToLet(api: ConfigAPI): PluginObj {
  api.assertVersion(7);

  const scopeManager = new ScopeManager();
  const variableMarker = new VariableMarker(scopeManager);

  // Block scope is usually delimited by { ... }
  // But for-loop heads also constitute a block scope.
  function isBlockScopedStatement(node: Node): boolean {
    return node.type === "BlockStatement" || isAnyForStatement(node);
  }

  // True when dealing with any kind of for-loop
  function isAnyForStatement(node: Node) {
    return node.type === "ForStatement" || node.type === "ForInStatement" || node.type === "ForOfStatement";
  }

  // Program node works almost like a function:
  // it hoists all variables which can be tranformed to block-scoped let/const.
  // It just doesn't have name and parameters.
  // So we create an implied FunctionScope and BlockScope.
  function enterProgram(node: Node) {
    scopeManager.enterFunction();
    hoistFunction({ body: node });
    scopeManager.enterBlock();
  }

  // FunctionDeclaration has it's name visible outside the function,
  // so we first register it in surrounding block-scope and
  // after that enter new FunctionScope.
  function enterFunctionDeclaration(func: FunctionDeclaration) {
    if (func.id) {
      getScope()?.register(func.id.name, getScope()?.findFunctionScoped(func.id.name));
    }

    scopeManager.enterFunction();

    hoistFunction({ params: func.params, body: func.body });
  }

  // FunctionExpression has it's name visible only inside the function,
  // so we first enter new FunctionScope and
  // hoist function name and params variables inside it.
  function enterFunctionExpression(func: FunctionExpression) {
    scopeManager.enterFunction();

    hoistFunction({ id: func.id, params: func.params, body: func.body });
  }

  function hoistFunction(cfg) {
    new FunctionHoister(getScope()).hoist(cfg);
  }

  // Exits the implied BlockScope and FunctionScope of Program node
  function leaveProgram() {
    scopeManager.leaveScope();
    leaveFunction();
  }

  // Exits FunctionScope but first transforms all variables inside it
  function leaveFunction() {
    transformVarsToLetOrConst();
    scopeManager.leaveScope();
  }

  // This is where the actual transform happens
  function transformVarsToLetOrConst() {
    getFunctionVariableGroups().forEach((group) => {
      // Do not modify existing let & const
      if (group.getNode().kind !== "var") {
        return;
      }

      const commonKind = group.getCommonKind();
      if (commonKind) {
        // When all variables in group are of the same kind,
        // just set appropriate `kind` value for the existing
        // VariableDeclaration node.
        group.getNode().kind = commonKind;
        logWarningForVarKind(group.getNode());
      } else if (hasMultiStatementBody(group.getParentNode())) {
        // When some variables are of a different kind,
        // create separate VariableDeclaration nodes for each
        // VariableDeclarator and set their `kind` value appropriately.
        const varNodes = group.getVariables().map((v) => {
          return types.variableDeclaration(v.getKind(), [v.getNode()]);
        });

        multiReplaceStatement({
          parent: group.getParentNode(),
          node: group.getNode(),
          replacements: varNodes,
          preserveComments: true,
        });

        logWarningForVarKind(group.getNode());
      } else {
        // When parent node restricts breaking VariableDeclaration to multiple ones
        // just change the kind of the declaration to the most restrictive possible
        group.getNode().kind = group.getMostRestrictiveKind() || "var";
        logWarningForVarKind(group.getNode());
      }
    });
  }

  function logWarningForVarKind(node: VariableDeclaration) {
    if (node.kind === "var") {
      console.warn(node, "Unable to transform var", "let");
    }
  }

  // Does a node have body that can contain an array of statements
  function hasMultiStatementBody(node: Node) {
    return node.type === "BlockStatement" || node.type === "Program" || node.type === "SwitchCase";
  }

  // Returns all VariableGroups of variables in current function scope,
  // including from all the nested block-scopes (but not the nested
  // functions).
  function getFunctionVariableGroups(): VariableGroup[] {
    const variables = getScope()?.getVariables();
    return variables
      ? flow(
          map((v: Variable) => v.getGroup()),
          uniq,
          compact,
        )(variables)
      : [];
  }

  function getScope() {
    return scopeManager.getScope();
  }

  const blockScopedHandler = {
    enter() {
      scopeManager.enterBlock();
    },
    exit() {
      scopeManager.leaveScope();
    },
  };

  return {
    visitor: {
      Program: {
        enter(path) {
          console.log("ENTER PROGRAM");
          enterProgram(path.node);
        },
      },

      FunctionDeclaration: {
        enter(path) {
          enterFunctionDeclaration(path.node);
        },
        exit() {
          leaveFunction();
        },
      },

      FunctionExpression: {
        enter(path) {
          enterFunctionExpression(path.node);
        },
        exit() {
          leaveFunction();
        },
      },

      BlockStatement: blockScopedHandler,
      ForStatement: blockScopedHandler,
      ForInStatement: blockScopedHandler,
      ForOfStatement: blockScopedHandler,

      VariableDeclaration(path) {
        const node = path.node;
        node.declarations.forEach((decl) => {
          variableMarker.markDeclared(destructuring.extractVariableNames(decl.id));

          // Uninitialized variables can never be const.
          // But variables in for-in/of loop heads are actually initialized (although init === null).
          const inForLoopHead = isAnyForStatement(parent) && parent.left === node;
          if (decl.init === null && !inForLoopHead) {
            variableMarker.markModified(decl.id.name);
          }
        });
      },
    },
  };
}

function extractVariables(node: Node): Identifier[] {
  if (node.type === "Identifier") {
    return [node];
  }

  if (node.type === "ArrayPattern") {
    return flatMap(extractVariables, compact(node.elements));
  }
  if (node.type === "ObjectPattern") {
    return flatMap(extractVariables, node.properties);
  }
  if (node.type === "RestProperty") {
    return extractVariables(node.value);
  }
  if (node.type === "AssignmentPattern") {
    return extractVariables(node.left);
  }

  // Ignore stuff like MemberExpressions,
  // we only care about variables.
  return [];
}
