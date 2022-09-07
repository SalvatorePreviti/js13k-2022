import { gl } from "./gl";
import groundTextureSvg from "./groundTexture.svg";

export let texturesLoaded = false;

export const loadGroundTexture = () => {
  const image = new Image();
  image.onload = image.onerror = () => {
    const texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE3);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, image.width, image.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    texturesLoaded = true;
  };
  image.src = groundTextureSvg;
};
