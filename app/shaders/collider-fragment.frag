#version 300 es
precision highp float;

in highp vec4 FragPos;
in highp vec3 VNormal;

uniform mat4 viewMatrix;
uniform float modelId;

out vec3 O;

void main() {
  float z = 1. - min(abs((viewMatrix * FragPos).z), 1.);

  if (gl_FragCoord.y < 15.) {
    z *= dot(normalize(VNormal), vec3(0, 1, 0));
  }
  z = max(z, 0.);
  O = vec3(z, z, z > 0. ? modelId : 0.);

  // modelId / 255.
}
