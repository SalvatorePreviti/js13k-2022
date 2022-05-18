import { devLog } from "@balsamic/dev";
import { jsRemoveEndingSemicolons } from "../lib/code-utils";
import { sizeDifference } from "../lib/logging";
import { Minify } from "../lib/tdemini";

const minifier = new Minify();

export async function jsOptimizeTde(input: string, { iife }: { iife: boolean }): Promise<string> {
  return devLog.timed(
    `js tde${iife ? " iife" : ""}`,
    async function js_tde() {
      if (iife) {
        input = `(()=>{${input}})();`;
      }
      let x = jsRemoveEndingSemicolons(await minifier.content("js", input));

      if (x.startsWith("(()=>{") && x.endsWith("})()")) {
        x = jsRemoveEndingSemicolons(x.slice("(()=>{".length, -4));
      }

      this.setSuccessText(sizeDifference(input, x));
      return x;
    },
    { spinner: true },
  );
}
