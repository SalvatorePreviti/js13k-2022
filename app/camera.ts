import { angle_wrap_degrees, DEG_TO_RAD } from "./math/math";

import { constDef_zNear, constDef_zFar } from "./shaders/main-fragment.frag";

export const zNear = constDef_zNear;

export const zFar = constDef_zFar;

export const fieldOfViewDegrees = 45;

export const fieldOfViewRadians = fieldOfViewDegrees * DEG_TO_RAD; // in radians

const fieldOfViewAmount = 1 / Math.tan(fieldOfViewRadians / 2);

// export const camera_position = { x: 20, y: 12, z: 38 };

export const camera_position = {
  x: -0.24059962942537236,
  y: 1.6759999942779489,
  z: 3.4583939149150837,
};

// export const camera_rotation = { x: 0, y: -35, z: 0 };

export const camera_rotation = {
  x: 24.0999999999999,
  y: 5.300000000000059,
  z: 0,
};

export const camera_view = new DOMMatrix();

export const camera_firstPersonRotate = (x: number, y: number) => {
  camera_rotation.y = angle_wrap_degrees(camera_rotation.y + x);
  camera_rotation.x = Math.max(Math.min(camera_rotation.x + y, 87), -87);
};

export const camera_firstPersonMove = (x: number, z: number) => {
  const yradians = camera_rotation.y * DEG_TO_RAD;
  const c = Math.cos(yradians);
  const s = Math.sin(yradians);
  camera_position.x += x * c - z * s;
  camera_position.z += x * s + z * c;
};

export const mat_perspective = /* @__PURE__ */ (near: number, far: number) => [
  (hC.clientHeight / hC.clientWidth) * fieldOfViewAmount,
  0,
  0,
  0,
  0,
  fieldOfViewAmount,
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
];
