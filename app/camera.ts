import { angle_wrap_degrees, clamp, DEG_TO_RAD } from "./math/math";

export const camera_position = { x: 0, y: 0, z: 5 };

export const camera_rotation = { x: 0, y: 0, z: 0 };

export const camera_view = new DOMMatrix();

export const camera_projection = new Float32Array(16);

export const camera_firstPersonRotate = (x: number, y: number) => {
  camera_rotation.y = angle_wrap_degrees(camera_rotation.y + x);
  camera_rotation.x = clamp(angle_wrap_degrees(camera_rotation.x + y), -87, 87);
};

export const camera_firstPersonMove = (x: number, z: number) => {
  const yradians = camera_rotation.y * DEG_TO_RAD;
  const c = Math.cos(yradians);
  const s = Math.sin(yradians);
  camera_position.x += x * c - z * s;
  camera_position.z += x * s + z * c;
};

export const camera_updateView = () => {
  camera_view
    .setMatrixValue("none")
    .rotateSelf(-camera_rotation.x, -camera_rotation.y, -camera_rotation.z)
    .invertSelf()
    .translateSelf(-camera_position.x, -camera_position.y, -camera_position.z);
};

export const camera_firstPersonPerspective = (fovyRadians: number, aspectRatio: number, near: number, far: number) => {
  const nf = near - far;
  const f = 1 / Math.tan(fovyRadians / 2);
  camera_projection[0] = f / aspectRatio;
  camera_projection[5] = f;
  camera_projection[10] = (far + near) / nf;
  camera_projection[11] = -1;
  camera_projection[14] = (2 * far * near) / nf;
};

// mat4_translate(mat4_from(m, -rotX * DEG_TO_RAD, -rotY * DEG_TO_RAD, -rotZ * DEG_TO_RAD), -posX, -posY, -posZ);
