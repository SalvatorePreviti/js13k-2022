import { devLog, prettySize } from "@balsamic/dev";
import type { InputAction, InputType } from "roadroller";
import { Packer } from "roadroller";
import { sizeDifference } from "../lib/logging";
import { JSDOM } from "jsdom";
import { htmlMinify } from "./html-minify";
import { jsRemoveEndingSemicolons, stripUtf8BOM } from "../lib/code-utils";

/**
 * LEVEL 1 is quick, LEVEL 2 to squeeze as much bytes as possible, is much slower.
 */
const LEVEL = 1;

export async function jsRoadroller(html: string): Promise<string> {
  return devLog.timed(
    "roadroller",
    async function js_roadroller() {
      const dom = new JSDOM(stripUtf8BOM(html));

      const scriptsTags = Array.from(dom.window.document.querySelectorAll("script"));

      const js = scriptsTags.map((scriptTag) => jsRemoveEndingSemicolons(scriptTag.textContent)).join("\n");

      scriptsTags.forEach((scriptTag) => scriptTag.remove());

      const packer = new Packer(
        [
          {
            data: js,
            type: "js" as InputType,
            action: "eval" as InputAction,
          },
        ],
        {
          allowFreeVars: false,
        },
      );

      await packer.optimize(LEVEL, (info) => {
        process.stdout.clearLine(-1);
        process.stdout.write(`\rroadroller: ${prettySize(info.currentSize)}`);
        return undefined;
      }); // takes less than 10 seconds by default

      const { firstLine, secondLine } = packer.makeDecoder();

      let compressedJs = firstLine + secondLine;

      compressedJs = `${jsRemoveEndingSemicolons(compressedJs).replace("eval", "Function")}()`;

      compressedJs = jsRemoveEndingSemicolons(compressedJs);

      if (compressedJs) {
        const script = dom.window.document.createElement("script");
        // script.type = "module";
        script.textContent = compressedJs;
        dom.window.document.body.appendChild(script);
      }

      let bundled = dom.serialize();

      bundled = await htmlMinify(bundled, { type: "page", prependUtf8BOM: false, timed: false });

      process.stdout.clearLine(-1);
      this.setSuccessText(sizeDifference(html, bundled));
      return bundled;
    },
    { spinner: true },
  );
}
