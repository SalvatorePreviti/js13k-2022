import { gl } from "./gl";

export interface WebglProgramAbstraction {
  (name: string): WebGLUniformLocation;
  (): void;
}

export const loadShader = (
  xgl: WebGL2RenderingContext,
  source: string,
  type: number = xgl.VERTEX_SHADER,
): WebGLShader => {
  const shader = xgl.createShader(type)!;
  xgl.shaderSource(shader, source);
  xgl.compileShader(shader);

  if (DEBUG && !xgl.getShaderParameter(shader, xgl.COMPILE_STATUS)) {
    throw new Error("An error occurred compiling the shaders: " + xgl.getShaderInfoLog(shader));
  }

  return shader;
};

export const initShaderProgram = (
  xgl: WebGL2RenderingContext,
  vertexShader: WebGLShader,
  sfsSource: string,
): WebglProgramAbstraction => {
  const uniforms: Record<string, WebGLUniformLocation> = {};
  const program = xgl.createProgram()!;
  xgl.attachShader(program, vertexShader);
  xgl.attachShader(program, loadShader(xgl, sfsSource, xgl.FRAGMENT_SHADER));
  xgl.linkProgram(program);

  if (DEBUG && !xgl.getProgramParameter(program, xgl.LINK_STATUS)) {
    throw new Error("Unable to initialize the shader program: " + xgl.getProgramInfoLog(program));
  }

  return (name?: string): any =>
    name ? uniforms[name] || (uniforms[name] = xgl.getUniformLocation(program, name)!) : xgl.useProgram(program);
};
