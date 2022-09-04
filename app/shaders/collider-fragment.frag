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
  float d = z * (gl_FragCoord.y > 31. ? 1. : abs(VNormal.y));
  O = vec4(d, d, z > 0. ? modelId : 0., 1);
}
