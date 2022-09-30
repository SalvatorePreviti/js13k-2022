#version 300 es
precision highp float;

in highp vec4 VNormal;
in highp vec4 FragPos;

uniform mat4 viewMatrix;

out vec4 O;

#define modelId FragPos.w

void main() {

  // if (gl_FragCoord.y > 31.) {
  //   vec4 v = viewMatrix * vec4(FragPos.xyz, 1);
  //   float z = 1. - min(abs((v.z) / v.w), 1.);
  //   O = vec4(vec2(z * 1.), vec2(0.));
  //   return;
  // }

  if (gl_FragCoord.y > 31.) {
    return;
  }

  vec4 v = viewMatrix * vec4(FragPos.xyz + vec3(0, 1.3, 0), 1);
  float h = abs(v.z) < 1. && abs(VNormal.y) > 0. ? v.y * 0.7 : 0.; // abs(v.z) > 1. && v.y >= 0. ? 0. : -v.y / 3.;
  O = vec4(vec2(h), vec2(h > 0. ? modelId / 255. : 0.));
}
