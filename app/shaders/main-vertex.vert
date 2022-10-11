#version 300 es

layout(location = 0) in vec4 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec4 aColor;

out vec4 VNormal;
out vec4 FragPos;
out vec4 UntransformedFragPos;
out lowp vec4 Color;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec4 simpleTransforms[22];
uniform mat4 worldMatrices[16 + 16 + 13];

#define modelId aPosition.w

void main() {
  mat4 worldMatrix = mat4(1);
  if (modelId != 1.) {
    if (modelId < 1.) {
      worldMatrix = worldMatrices[gl_InstanceID - int(modelId)];
    } else if (modelId > 1. && modelId < 24.) {
      worldMatrix[3].xyz = simpleTransforms[int(modelId) - 2].xyz;
    } else {
      worldMatrix = worldMatrices[int(modelId) - 24];
    }
  }

  // MODEL_ID_LEVER - get the color for the lever
  Color = mix(aColor, vec4(0.7, 1, 0.2, 0), aColor.w == 0. && modelId == -29. ? worldMatrix[3][3] : 0.);
  worldMatrix[3][3] = 1.;
  UntransformedFragPos = aPosition;
  FragPos = worldMatrix * vec4(aPosition.xyz, 1);
  gl_Position = projectionMatrix * (viewMatrix * FragPos);
  FragPos.w = modelId;
  VNormal = (worldMatrix * vec4(aNormal, 0));
}
