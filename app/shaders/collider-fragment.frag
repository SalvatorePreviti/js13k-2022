#version 300 es
precision highp float;

in highp vec4 FragPos;
in highp vec3 VNormal;

uniform mat4 viewMatrix;

out vec3 O;

void main() {
  // if (gl_FragCoord.y < 12.) {
  //   O = vec3(1);
  // }

  float z = 1. - min(abs((viewMatrix * FragPos).z), 1.);

  //  O = vec3(1. - abs((viewMatrix * FragPos).y));
  // O = vec3(max(0., 1. - t.y) * dot(VNormal, vec3(0, 1, 0)));

  if (gl_FragCoord.y < 14.) {
    z *= dot(normalize(VNormal), vec3(0, 1, 0));
  }
  O = vec3(max(z, 0.));
}
