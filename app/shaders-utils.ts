export interface WebglProgramAbstraction {
  (name: string): WebGLUniformLocation;
  (): void;
}

export const initShaderProgram = (
  xgl: WebGL2RenderingContext,
  vfsSource: string,
  sfsSource: string,
): WebglProgramAbstraction => {
  const loadShader = (source: string, type: number = xgl.VERTEX_SHADER): WebGLShader => {
    const shader = xgl.createShader(type)!;
    xgl.shaderSource(shader, source);
    xgl.compileShader(shader);

    if (DEBUG && !xgl.getShaderParameter(shader, xgl.COMPILE_STATUS)) {
      throw new Error("An error occurred compiling the shaders: " + xgl.getShaderInfoLog(shader));
    }

    return shader;
  };

  const uniforms: Record<string, WebGLUniformLocation> = {};
  const program = xgl.createProgram()!;
  xgl.attachShader(program, loadShader(vfsSource, xgl.VERTEX_SHADER));
  xgl.attachShader(program, loadShader(sfsSource, xgl.FRAGMENT_SHADER));
  xgl.linkProgram(program);

  if (DEBUG && !xgl.getProgramParameter(program, xgl.LINK_STATUS)) {
    throw new Error("Unable to initialize the shader program: " + xgl.getProgramInfoLog(program));
  }

  return (name?: string): any =>
    name ? uniforms[name] || (uniforms[name] = xgl.getUniformLocation(program, name)!) : xgl.useProgram(program);
};
