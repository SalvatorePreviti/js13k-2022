#version 300 es

in vec4 aPosition;

uniform mat4 viewMatrix;
uniform mat4 worldMatrices[38];

#define modelId aPosition.w

void main() {
  mat4 worldMatrix = modelId == 1. ? mat4(1) : worldMatrices[abs(int(modelId)) + gl_InstanceID - 2];
  worldMatrix[3][3] = 1.;
  gl_Position = viewMatrix * (worldMatrix * vec4(aPosition.xyz, 1));
}
