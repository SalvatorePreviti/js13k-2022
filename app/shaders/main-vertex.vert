#version 300 es

/** Fixed number of souls */
#define SOULS_COUNT 13

/** Fixed number of levers */
#define LEVERS_COUNT 16

/** Fixed number of models that have a simple translation transformation */
#define MODELS_WITH_SIMPLE_TRANSFORM 26

/** Fixed number of models that have a full transformation matrix */
#define MODELS_WITH_FULL_TRANSFORM (12 + LEVERS_COUNT)

layout(location = 0) in vec4 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec4 aColor;

out vec4 VNormal;
out vec4 FragPos;
out vec4 UntransformedFragPos;
out lowp vec4 Color;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec4 worldTransforms[4 * (MODELS_WITH_FULL_TRANSFORM + SOULS_COUNT) + MODELS_WITH_SIMPLE_TRANSFORM];

#define modelId aPosition.w

void main() {
  mat4 worldMatrix = mat4(1);
  lowp int idx = int(modelId);
  Color = aColor;
  FragPos = vec4(aPosition.xyz, 1);
  if (modelId > 1. && modelId < float(MODELS_WITH_SIMPLE_TRANSFORM + 2)) {
    FragPos += worldMatrix[3] = worldTransforms[idx + ((MODELS_WITH_FULL_TRANSFORM + SOULS_COUNT) * 4 - 2)];
  } else if (modelId != 1.) {
    idx = (idx < 1 ? gl_InstanceID - idx : idx - (MODELS_WITH_SIMPLE_TRANSFORM + 2)) * 4;
    worldMatrix[0] = worldTransforms[idx];
    worldMatrix[1] = worldTransforms[idx + 1];
    worldMatrix[2] = worldTransforms[idx + 2];
    worldMatrix[3] = worldTransforms[idx + 3];

    // trick - m44 is used to store the value of the lever.
    if (Color.w == 0.) {
      Color = mix(vec4(1, 0.5, 0.2, 0), Color, worldMatrix[3][3]);
    }
    worldMatrix[3][3] = 1.;

    FragPos = worldMatrix * FragPos;
  }

  gl_Position = projectionMatrix * (viewMatrix * FragPos);
  FragPos.w = modelId;
  VNormal = (worldMatrix * vec4(aNormal, 0));
  UntransformedFragPos = aPosition;
}
