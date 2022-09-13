import { devLog, prettySize } from "@balsamic/dev";
import type { InputAction, InputType } from "roadroller";
import { Packer } from "roadroller";
import { sizeDifference } from "../lib/logging";
import { JSDOM } from "jsdom";
import { htmlMinify } from "./html-minify";
import { jsRemoveEndingSemicolons, stripUtf8BOM } from "../lib/code-utils";
import { jsUglify } from "./js-uglify";
import { jsTdeMinify } from "./js-tde-minify";

/**
 * you can try to set LEVEL to 2 if you want to squeeze as much bytes as possible.
 * Is much slower.
 */
const LEVEL = 2;

export async function jsRoadroller(html: string): Promise<string> {
  return devLog.timed(
    "roadroller",
    async function js_roadroller() {
      const dom = new JSDOM(stripUtf8BOM(html));

      const scriptsTags = Array.from(dom.window.document.querySelectorAll("script"));
      let js = scriptsTags.map((scriptTag) => `(()=>{${scriptTag.textContent}})()`).join("\n");

      // js = await jsUglify(js, {
      //   varify: false,
      //   final: true,
      //   computed_props: true,
      //   inline: true,
      //   join_vars: true,
      //   reduce_vars: true,
      //   sequences: true,
      //   mangle: true,
      // });

      // js = await jsTerser(js, {
      //   computed_props: true,
      //   final: true,
      //   join_vars: true,
      //   mangle: "variables",
      //   sequences: true,
      // });

      js = await jsTdeMinify(js);
      js = jsRemoveEndingSemicolons(js);

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

      // let compressedJs = firstLine + secondLine;

      // trick, instead of relying on M variable in the generated code, replace it with the string
      let compressedJs = secondLine.replace(
        "M.charCodeAt",
        `${jsRemoveEndingSemicolons(firstLine.slice(2))}.charCodeAt`,
      );

      compressedJs = await jsUglify(compressedJs, {
        varify: false,
        final: true,
        computed_props: true,
        inline: true,
        join_vars: true,
        reduce_vars: true,
        sequences: true,
        mangle: true,
      });

      if (compressedJs) {
        const script = dom.window.document.createElement("script");
        // script.type = "module";
        script.textContent = compressedJs;
        dom.window.document.body.appendChild(script);
      }
      compressedJs = await jsTdeMinify(compressedJs);
      compressedJs = jsRemoveEndingSemicolons(compressedJs);

      let bundled = dom.serialize();

      bundled = await htmlMinify(bundled, { type: "page", prependUtf8BOM: false, timed: false });

      process.stdout.clearLine(-1);
      this.setSuccessText(sizeDifference(html, bundled));
      return bundled;
    },
    { spinner: true },
  );
}
