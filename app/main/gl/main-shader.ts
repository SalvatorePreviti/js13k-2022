import { loadShader } from "./load-shader";
import vertexShaderCode from "../shaders/vertex.vert";
import fragmentShaderCode from "../shaders/fragment.frag";

export const mainShader = loadShader(vertexShaderCode, fragmentShaderCode);
