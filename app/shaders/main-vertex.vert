#version 300 es

layout(location = 0) in vec4 aPosition;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec4 aColor;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 worldMatrix;

out highp vec3 VNormal;
out highp vec4 FragPos;
out lowp vec4 Color;

void main() {
  vec4 position = worldMatrix * aPosition;
  gl_Position = projectionMatrix * viewMatrix * position;
  VNormal = (worldMatrix * vec4(aNormal, 0)).xyz;
  FragPos = position;
  Color = aColor;
}
