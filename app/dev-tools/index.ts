export interface DebugReportInfo {
  context?: string;
  file?: string;
  title?: string;
}

export function debug_checkShaderCompileStatus(
  gl: WebGL2RenderingContext,
  shader: WebGLShader,
  info: DebugReportInfo,
): void {
  if (DEBUG) {
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("error", gl.getShaderInfoLog(shader) || "compilation failed", info);
    } else {
      const infoLog = gl.getShaderInfoLog(shader);
      if (infoLog) {
        if (infoLog.indexOf("WARN") >= 0) {
          console.warn("warn", gl.getShaderInfoLog(shader), info);
        }
      }
    }
  }
}

export function debug_checkShaderProgramLinkStatus(
  gl: WebGL2RenderingContext,
  shaderProgram: WebGLProgram,
  info: DebugReportInfo,
): void {
  if (DEBUG) {
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error("error", gl.getProgramInfoLog(shaderProgram) || "link failed", info);
    } else {
      let infoLog = gl.getProgramInfoLog(shaderProgram);
      if (infoLog) {
        if (infoLog.indexOf("WARN") >= 0) {
          console.warn("warn", infoLog, info);
        }
      }
      gl.validateProgram(shaderProgram);
      if (!gl.getProgramParameter(shaderProgram, gl.VALIDATE_STATUS)) {
        console.error("error", gl.getProgramInfoLog(shaderProgram) || "validation failed", info);
      } else {
        infoLog = gl.getProgramInfoLog(shaderProgram);
        if (infoLog) {
          if (infoLog.indexOf("WARN") >= 0) {
            console.warn("warn", infoLog, info);
          }
        }
      }
    }
  }
}
