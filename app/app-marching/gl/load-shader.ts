import { gl } from "./gl";
import { debug_checkShaderCompileStatus, debug_checkShaderProgramLinkStatus } from "../../dev-tools";

export const loadShader = (vertexShaderCode: string, fragmentShaderCode: string) => {
  // A new program
  const program = gl.createProgram()!;

  const loadShaderCode = (type: number, sourceCode: string) => {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    debug_checkShaderCompileStatus(gl, shader, {
      title: type === gl.VERTEX_SHADER ? "vertex shader" : "fragment shader",
    });

    gl.attachShader(program, shader);
    return shader;
  };

  // Compile vertex and pixel shader

  const vertexShader = loadShaderCode(gl.VERTEX_SHADER, vertexShaderCode);
  const fragmentShader = loadShaderCode(gl.FRAGMENT_SHADER, fragmentShaderCode);

  // Link them together

  gl.linkProgram(program);

  debug_checkShaderProgramLinkStatus(gl, program, { title: "shader program" });

  // Activate the program

  gl.useProgram(program);

  const iResolution = gl.getUniformLocation(program, "iR");
  const iTime = gl.getUniformLocation(program, "iT");

  const useShader = (width: number, height: number) => {
    gl.viewport(0, 0, width, height);
    gl.useProgram(program);

    // Render output resolution
    gl.uniform2f(iResolution, width, height);
    gl.uniform1f(iTime, performance.now() / 1000);
  };

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (DEBUG) {
    useShader._program = program;
  }

  return useShader;
};

export type UseShaderFunction = ReturnType<typeof loadShader>;

/*
  // MDN advertises to use something like this here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#always_enable_vertex_attrib_0_as_an_array
  // However, I did not find any performance improvement.
  gl.enableVertexAttribArray(0);
  const array = new Float32Array([-1, 3, -1, -1, 3, -1]);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2 , gl.FLOAT, false, 0, 0);
  gl.bindAttribLocation(program, 0, "V"); */
