#version 300 es

in vec4 aPosition;

uniform mat4 viewMatrix;
uniform mat4 worldMatrices[39];

#define modelId aPosition.w

void main() {
  mat4 worldMatrix = worldMatrices[int(abs(modelId)) + gl_InstanceID - 1];
  worldMatrix[3][3] = 1.;
  gl_Position = viewMatrix * (worldMatrix * vec4(aPosition.xyz, 1));
}
