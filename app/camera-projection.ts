import { DEG_TO_RAD } from "./math/math";

export const fieldOfViewDegrees = 45;

export const fieldOfView = fieldOfViewDegrees * DEG_TO_RAD; // in radians

export const zNear = 0.1;

export const zFar = 500.0;
