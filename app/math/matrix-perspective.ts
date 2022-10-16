import {
  constDef_zNear,
  constDef_CSM_PLANE_DISTANCE as CSM_PLANE_DISTANCE,
  constDef_zFar,
} from "../shaders/main-fragment.frag";

export const zNear = constDef_zNear;

export { CSM_PLANE_DISTANCE };

export const zFar = constDef_zFar;

export const fieldOfViewDegrees = 60;

export const fieldOfViewRadians = (fieldOfViewDegrees * Math.PI) / 180; // in radians

export const fieldOfViewAmount = 1 / Math.tan(fieldOfViewRadians / 2);

export const mat_perspective = (near: number, far: number, mx: number, my: number) =>
  new DOMMatrix([
    mx,
    0,
    0,
    0,
    0,
    my,
    0,
    0,
    0,
    0,
    (far + near) / (near - far),
    -1,
    0,
    0,
    (2 * far * near) / (near - far),
    0,
  ]);
