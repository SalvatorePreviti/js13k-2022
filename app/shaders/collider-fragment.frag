#version 300 es
precision highp float;

in highp vec4 FragPos;

uniform mat4 viewMatrix;

out vec4 O;

void main() {
  float z = (viewMatrix * FragPos).z;
  float v = 1. - abs(z);
  O = vec4(v, v, v, 1.);
}
