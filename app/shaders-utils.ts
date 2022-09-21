import { gl } from "./gl";

export interface WebglProgramAbstraction {
  (name: string): WebGLUniformLocation;
  (): void;
}

export const loadShader = (source: string, type: number = gl.VERTEX_SHADER): WebGLShader => {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (DEBUG && !gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
  }

  return shader;
};

export const initShaderProgram = (vertexShader: WebGLShader, sfsSource: string): WebglProgramAbstraction => {
  const uniforms: Record<string, WebGLUniformLocation> = {};
  const program = gl.createProgram()!;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, loadShader(sfsSource, gl.FRAGMENT_SHADER));
  gl.linkProgram(program);

  if (DEBUG && !gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
  }

  return (name?: string): any =>
    name ? uniforms[name] || (uniforms[name] = gl.getUniformLocation(program, name)!) : gl.useProgram(program);
};
