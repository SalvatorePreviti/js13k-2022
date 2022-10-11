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
uniform vec4 worldTransforms[22 + (16 + 16 + 13) * 4];

#define modelId aPosition.w

void main() {
  mat4 worldMatrix = mat4(1);
  lowp int idx = int(modelId);
  Color = aColor;
  FragPos = vec4(aPosition.xyz, 1);
  if (modelId > 1. && modelId < 24.) {
    vec4 t = worldTransforms[idx + ((16 + 16 + 13) * 4 - 2)];
    FragPos.xyz += worldMatrix[3].xyz = t.xyz;
  } else if (modelId != 1.) {
    idx = (idx < 1 ? gl_InstanceID - idx : idx - 24) * 4;
    worldMatrix[0] = worldTransforms[idx];
    worldMatrix[1] = worldTransforms[idx + 1];
    worldMatrix[2] = worldTransforms[idx + 2];
    worldMatrix[3] = worldTransforms[idx + 3];

    // trick - m44 is used to store the value of the lever.
    Color = mix(Color, vec4(0.7, 1, 0.2, 0), Color.w == 0. && modelId == -29. ? worldMatrix[3][3] : 0.);
    worldMatrix[3][3] = 1.;

    FragPos = worldMatrix * FragPos;
  }

  gl_Position = projectionMatrix * (viewMatrix * FragPos);
  FragPos.w = modelId;
  VNormal = (worldMatrix * vec4(aNormal, 0));
  UntransformedFragPos = aPosition;
}
