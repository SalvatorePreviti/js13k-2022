import { angle_wrap_degrees, clamp, DEG_TO_RAD } from "./math/math";

export const camera_position = { x: 20, y: 12, z: 38 };

export const camera_rotation = { x: 0, y: -35, z: 0 };

export const camera_view = new DOMMatrix();

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
