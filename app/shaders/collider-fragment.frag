#version 300 es
precision highp float;

in highp vec4 VNormal;
in highp vec4 FragPos;

uniform mat4 viewMatrix;

out vec4 O;

void main() {
  vec4 v = viewMatrix * vec4(FragPos.xyz, 1);
  float z = FragPos.w > 0. ? 1. - min(abs(v.z / v.w), 1.) : 0.;
  O = vec4(vec2(z * (gl_FragCoord.y > 31. ? 1. : abs(VNormal.y))), z > 0. ? FragPos.w / 255. : 0., 1);
}
