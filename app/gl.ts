import { canvas } from "./canvas";
import { initWebglContext } from "./utils/webgl-context-wrapper";

export const gl = canvas.getContext("webgl2")!;

initWebglContext(gl);
