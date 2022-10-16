// A babel transform that replaces all the given identifier names

import type { ConfigAPI, NodePath, PluginItem, PluginObj, types } from "@babel/core";

export function babelPluginReplaceProperties(records: Record<string, string>): PluginItem {
  return [jsBabelPluginReplaceSimpleProperties, {}, "replace-properties"];

  function jsBabelPluginReplaceSimpleProperties(api: ConfigAPI): PluginObj {
    api.assertVersion(7);

    const pluginItem: PluginObj = {
      visitor: {
        Identifier(path: NodePath<types.Identifier>): void {
          if (typeof records[path.node.name] === "string") {
            path.node.name = records[path.node.name]!;
          }
        },
      },
    };

    return pluginItem;
  }
}
