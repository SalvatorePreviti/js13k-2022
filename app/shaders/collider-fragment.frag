#version 300 es
precision highp float;

in highp vec4 VNormal;
in highp vec4 FragPos;

uniform mat4 viewMatrix;
uniform float modelId;

out vec4 O;

void main() {
  float z = 1. - min(abs((viewMatrix * FragPos).z), 1.);
  float d = z * (gl_FragCoord.y > 30. ? 1. : dot(normalize(VNormal.xyz), vec3(0, 1, 0)));
  O = vec4(d, d, z > 0. ? modelId : 0., 1);
}
