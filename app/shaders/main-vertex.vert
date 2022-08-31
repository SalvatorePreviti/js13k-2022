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
uniform mat4 worldMatrix;

void main() {
  Color = aColor;
  UntransformedFragPos = aPosition;
  FragPos = worldMatrix * aPosition;
  gl_Position = projectionMatrix * (viewMatrix * FragPos);
  VNormal = (worldMatrix * vec4(aNormal, 0));
}
