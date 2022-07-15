import lightVertexShaderSource from "./shaders/light-vertex.vert";
import lightFragmentShaderSource from "./shaders/light-fragment.frag";
import { initShaderProgram } from "./shader-utils";
import { gl } from "./gl";

/*
export const lightProjectionMatrix = new Float32Array(16);

export const light_ortho_update = (
  left: number,
  right: number,
  bottom: number,
  top: number,
  near: number,
  far: number,
) => {
  lightProjectionMatrix[0] = 2 / (right - left);
  lightProjectionMatrix[1] = 0;
  lightProjectionMatrix[2] = 0;
  lightProjectionMatrix[3] = 0;
  lightProjectionMatrix[4] = 0;
  lightProjectionMatrix[5] = 2 / (top - bottom);
  lightProjectionMatrix[6] = 0;
  lightProjectionMatrix[7] = 0;
  lightProjectionMatrix[8] = 0;
  lightProjectionMatrix[9] = 0;
  lightProjectionMatrix[10] = 2 / (near - far);
  lightProjectionMatrix[11] = 0;
  lightProjectionMatrix[12] = (left + right) / (left - right);
  lightProjectionMatrix[13] = (bottom + top) / (bottom - top);
  lightProjectionMatrix[14] = (near + far) / (near - far);
  lightProjectionMatrix[15] = 1;
};

const projWidth = 100;
const projHeight = 100;

light_ortho_update(
  -projWidth / 2, // left
  projWidth / 2, // right
  -projHeight / 2, // bottom
  projHeight / 2, // top
  // near
  -100,
  // far
  100,
); */

export const lightShaderProgram = initShaderProgram(lightVertexShaderSource, lightFragmentShaderSource);

export const lightMatrixLoc = gl.getUniformLocation(lightShaderProgram, "uM");
