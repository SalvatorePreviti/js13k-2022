import { DEG_TO_RAD, mat_perspectiveXY } from "./math";

import { constDef_zNear, constDef_zFar } from "./shaders/main-fragment.frag";

export const zNear = constDef_zNear;

export const zFar = constDef_zFar;

export const fieldOfViewDegrees = 60;

export const fieldOfViewRadians = /* @__PURE__ */ fieldOfViewDegrees * DEG_TO_RAD; // in radians

const fieldOfViewAmount = 1 / Math.tan(fieldOfViewRadians / 2);

if (DEBUG) {
  console.log("fieldOfViewAmount:", fieldOfViewAmount);
}

export const camera_position = {
  x: -11,
  y: 17,
  z: -90,
};

export const camera_rotation = {
  x: 0,
  y: 0,
  z: 0,
};

export const mat_perspective = (near: number, far: number) =>
  mat_perspectiveXY((hC.clientHeight / hC.clientWidth) * fieldOfViewAmount, fieldOfViewAmount, near, far);
