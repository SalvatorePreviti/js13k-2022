import { devLog, prettySize } from "@balsamic/dev";
import type { InputAction, InputType } from "roadroller";
import { Packer } from "roadroller";
import { sizeDifference } from "../lib/logging";
import { JSDOM } from "jsdom";
import { htmlMinify } from "./html-minify";
import { stripUtf8BOM } from "../lib/code-utils";
import { jsUglify } from "./js-uglify";

/**
 * you can try to set LEVEL to 2 if you want to squeeze as much bytes as possible.
 * Is much slower.
 */
const LEVEL = 1;

export async function jsRoadroller(html: string): Promise<string> {
  return devLog.timed(
    "roadroller",
    async function js_roadroller() {
      const dom = new JSDOM(stripUtf8BOM(html));

      const scriptsTags = Array.from(dom.window.document.querySelectorAll("script"));
      let js = scriptsTags.map((scriptTag) => `(()=>{${scriptTag.textContent}})()`).join("\n");

      js = await jsUglify(js, {
        varify: false,
        final: true,
        computed_props: true,
        inline: true,
        join_vars: true,
        reduce_vars: true,
        sequences: true,
        mangle: true,
      });

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
          allowFreeVars: true,
        },
      );

      await packer.optimize(LEVEL, (info) => {
        process.stdout.clearLine(-1);
        process.stdout.write(`\rroadroller: ${prettySize(info.currentSize)}`);
        return undefined;
      }); // takes less than 10 seconds by default

      const { firstLine, secondLine } = packer.makeDecoder();
      const compressedJs = firstLine + secondLine;

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
