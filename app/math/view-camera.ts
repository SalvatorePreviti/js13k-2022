import { angle_wrap, clamp, clamp_distance, cos, DEG_PER_RAD, sin } from "./math";
import { mat4_new_zero } from "./matrix";
import { vec3_new, vec3_set } from "./vectors";

export interface ViewCameraInput {
  /**
   * Position input.
   * x: negative=left, positive=right
   * y: negative=down, positive=up
   * z: negative=forward, positive=backward
   */
  $position: Vec3;

  /** Euler angles in radians input */
  $rotation: Vec3;
}

export interface ViewCamera extends ViewCameraInput {
  /** Camera direction (z axis) output */
  $direction: Vec3;

  /** View matrix output */
  $view: Mat4;
}

const CAMERA_ROTATION_MAX_PITCH_RADIANS = 87 * DEG_PER_RAD;

export const ViewCamera_firstPersonRotate = ({ $rotation }: ViewCameraInput, x: number, y: number) => {
  $rotation.y = angle_wrap($rotation.y + x);
  $rotation.x = clamp_distance(angle_wrap($rotation.x + y), CAMERA_ROTATION_MAX_PITCH_RADIANS);
};

export const ViewCamera_firstPersonMove = (
  { $rotation: { y: rotY }, $position }: ViewCameraInput,
  x: number,
  z: number,
) => {
  const c = cos(rotY);
  const s = sin(rotY);
  $position.x += x * c - z * s;
  $position.z += x * s + z * c;
};

export const ViewCamera_new = (): ViewCamera => ({
  $position: vec3_new(),
  $rotation: vec3_new(),
  $direction: vec3_new(),
  $view: mat4_new_zero(),
});

export interface Transformation {}

export interface Mat4TransformationInput {
  $translationX?: number;
  $translationY?: number;
  $translationZ?: number;
  $scaleX?: number;
  $scaleY?: number;
  $scaleZ?: number;
  $rotationX?: number;
  $rotationY?: number;
  $rotationZ?: number;
}

export const ViewCamera_update = ({
  $position: { x: posX, y: posY, z: posZ },
  $rotation: { x: rotX, y: rotY, z: rotZ },
  $direction,
  $view: m,
}: ViewCamera): void => {
  const angleX = -rotX;
  const angleY = -rotY;
  const angleZ = -rotZ;
  const cosX = cos(angleX);
  const sinX = sin(angleX);
  const cosY = cos(angleY);
  const sinY = sin(angleY);
  const cosZ = cos(angleZ);
  const sinZ = sin(angleZ);

  const xaxisX = cosZ * cosY;
  const xaxisY = cosZ * sinY * sinX - sinZ * cosX;
  const xasisZ = sinZ * sinX + cosZ * sinY * cosX;
  const yaxisX = sinZ * cosY;
  const yaxisY = cosZ * cosX + sinZ * sinY * sinX;
  const yaxisZ = sinZ * sinY * cosX - cosZ * sinX;
  const zaxisX = -sinY;
  const zaxisY = cosY * sinX;
  const zaxisZ = cosY * cosX;

  m[0] = xaxisX;
  m[1] = xaxisY;
  m[2] = xasisZ;
  // m[3]=0
  m[4] = yaxisX;
  m[5] = yaxisY;
  m[6] = yaxisZ;
  // m[7]=0
  m[8] = zaxisX;
  m[9] = zaxisY;
  m[10] = zaxisZ;
  // m[11] = 0;
  m[12] = yaxisX * posY - xaxisX * posX - zaxisX * posZ;
  m[13] = yaxisY * posY - xaxisY * posX - zaxisY * posZ;
  m[14] = yaxisZ * posY - xasisZ * posX - zaxisZ * posZ;
  m[15] = 1;

  vec3_set($direction, zaxisX, zaxisY, zaxisZ);
};
