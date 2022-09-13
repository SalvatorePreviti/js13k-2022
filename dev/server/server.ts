import type { PluginOption, UserConfig } from "vite";
import { createServer, mergeConfig } from "vite";
import { devLog } from "@balsamic/dev";
import vitePluginReact from "@vitejs/plugin-react";
import { rollupPluginSpglsl, SpglslCompileMode } from "spglsl";

import config from "../config";
import { readFile } from "fs/promises";

export async function startServer(argv = process.argv) {
  const parsedCmd = parseCommandLine(argv);
  if (!parsedCmd) {
    process.exitCode = 1;
    return;
  }

  const serverConfig: UserConfig = {
    define: {
      DEBUG: true,
      NO_DEBUG: false,
    },

    esbuild: {
      define: {
        this: "window",
      },
    },

    server: { host: parsedCmd.host, port: parsedCmd.port },

    plugins: [
      ...(config.plugins || []),
      rollupPluginSvgDev(),
      rollupPluginSpglsl({ compileMode: SpglslCompileMode.Validate, throwOnError: true }),
      vitePluginReact(),
    ],
  };

  const server = await createServer(mergeConfig(config, serverConfig, true));

  await server.listen();

  devLog.hr("blueBright");
  server.printUrls();
  devLog.hr("blueBright");
  devLog.log();
}

function rollupPluginSvgDev(): PluginOption {
  return {
    name: "svg-dev",
    async transform(src, id) {
      if (!id.endsWith(".svg")) {
        return undefined;
      }
      const extractedSvg = await readFile(id, "utf8");

      return {
        code: `export default \`data:image/svg+xml;base64,\${btoa(${JSON.stringify(extractedSvg)})}\``,
        map: null,
      };
    },
  };
}

function parseCommandLine(argv: string[]) {
  let host: string | undefined | boolean;
  let port: number | undefined;
  for (let i = 0; i < argv.length; ++i) {
    switch (argv[i]) {
      case "--host":
        host = argv[++i];
        break;

      case "--port":
        port = Number.parseInt(argv[++i]!);
        break;

      case "--help":
        devLog.log("Options:");
        devLog.log("--host [host]  [string|boolean] specify hostname");
        devLog.log("--port <port>  [number] specify port");
        return null;

      default:
        break;
    }
  }
  if (!host) {
    host = config.server?.host;
  } else if (host === "true") {
    host = true;
  } else if (host === "false") {
    host = false;
  }
  if (!port) {
    port = config.server?.port || 3666;
  }

  return { host, port };
}
