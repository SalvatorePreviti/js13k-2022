#version 300 es
precision highp float;

in highp vec4 VNormal;
in highp vec4 FragPos;

uniform mat4 viewMatrix;
uniform float modelId;

out vec4 O;

void main() {
  vec4 v = viewMatrix * FragPos;
  float z = modelId > 0. ? 1. - min(abs(v.z / v.w), 1.) : 0.;
  O = vec4(vec2(z * (gl_FragCoord.y > 31. ? 1. : abs(VNormal.y))), z > 0. ? modelId : 0., 1);
}
