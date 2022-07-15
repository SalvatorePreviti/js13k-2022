import { DEG_TO_RAD } from "./math/math";

export const fieldOfView = 45 * DEG_TO_RAD; // in radians

export const zNear = 0.1;

export const zFar = 1000.0;

export const camera_projection = new Float32Array(16);

export const camera_firstPersonPerspective = (fovyRadians: number, aspectRatio: number, near: number, far: number) => {
  const f = 1.0 / Math.tan(fovyRadians / 2);
  const nf = 1 / (near - far);
  camera_projection[0] = f / aspectRatio;
  // camera_projection[1] = 0;
  // camera_projection[2] = 0;
  // camera_projection[3] = 0;
  // camera_projection[4] = 0;
  camera_projection[5] = f;
  // camera_projection[6] = 0;
  // camera_projection[7] = 0;
  // camera_projection[8] = 0;
  // camera_projection[9] = 0;
  camera_projection[10] = (far + near) * nf;
  camera_projection[11] = -1;
  // camera_projection[12] = 0;
  // camera_projection[13] = 0;
  camera_projection[14] = 2 * far * near * nf;
  // camera_projection[15] = 0;
  return camera_projection;
};
