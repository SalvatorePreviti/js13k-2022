import { initWebglContext } from "./webgl-context-wrapper";

export const canvas = document.getElementById("C")! as HTMLCanvasElement;

canvas.width = 800;
canvas.height = 800;

export const gl = canvas.getContext("webgl2")!;

initWebglContext(gl);
