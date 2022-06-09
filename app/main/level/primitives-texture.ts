import { gl } from "../gl";
import { primitiveWriter } from "./primitives";

// Create a texture.
const primitivesTexture = gl.createTexture();

primitivesTexture_bind();

// fill texture with 3x2 pixels
{
  const level = 0;
  const internalFormat = gl.RGBA32F;
  const width = 512;
  const height = 512;
  const border = 0;
  const format = gl.RGBA;
  const type = gl.FLOAT;
  const data = new Float32Array(width * height * 4);

  console.log("texture size:", data.length);
  for (let i = 0; i < primitiveWriter.values.length; ++i) {
    data[i] = primitiveWriter.values[i]!;
  }

  // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, format, type, data);
}

export function primitivesTexture_bind() {
  // use texture unit 0
  gl.activeTexture(gl.TEXTURE0 + 0);

  // bind to the TEXTURE_2D bind point of texture unit 0
  gl.bindTexture(gl.TEXTURE_2D, primitivesTexture);

  // gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1); // see https://webglfundamentals.org/webgl/lessons/webgl-data-textures.html

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
