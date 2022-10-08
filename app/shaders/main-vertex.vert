#version 300 es

layout(location = 0) in vec4 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec4 aColor;

out vec4 VNormal;
out vec4 FragPos;
out vec4 UntransformedFragPos;
out lowp vec4 Color;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 worldMatrices[38];

#define modelId aPosition.w

void main() {
  mat4 worldMatrix = modelId == 1. ? mat4(1) : worldMatrices[abs(int(modelId)) + gl_InstanceID - 2];
  // trick - use worldMatrix[3][3] that normally is 1 as a way to color the handle of pulled levers
  Color = mix(aColor, vec4(0.7, 1, 0.2, 0), aColor.w > 0. ? 0. : 1. - worldMatrix[3][3]);
  worldMatrix[3][3] = 1.;
  UntransformedFragPos = aPosition;
  FragPos = worldMatrix * vec4(aPosition.xyz, 1);
  gl_Position = projectionMatrix * (viewMatrix * FragPos);
  FragPos.w = modelId;
  VNormal = (worldMatrix * vec4(aNormal, 0));
}
