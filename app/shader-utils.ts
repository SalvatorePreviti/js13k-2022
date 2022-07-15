import { gl } from "./gl";

export const loadShader = (type: number, source: string) => {
  const shader = gl.createShader(type)!;

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (DEBUG && !gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
  }

  return shader;
};

export const initShaderProgram = (svsSource: string, sfsSource: string) => {
  const vertexShader = loadShader(gl.VERTEX_SHADER, svsSource);
  const fragmentShader = loadShader(gl.FRAGMENT_SHADER, sfsSource);

  // Create the shader program

  const program = gl.createProgram()!;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  // If creating the shader program failed, alert

  if (DEBUG && !gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
  }

  return program;
};
