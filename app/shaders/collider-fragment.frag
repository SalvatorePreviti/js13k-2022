#version 300 es
precision highp float;

in highp vec4 VNormal;
in highp vec4 FragPos;

uniform mat4 viewMatrix;

out vec4 O;

#define modelId FragPos.w

#define orientation viewMatrix[0][0]

void main() {

  vec4 v = viewMatrix * vec4(FragPos.xyz + vec3(0, 1.49, orientation * .3), 1);

  if (gl_FragCoord.y > 36.) {
    float xattenuation = (1. - sin((gl_FragCoord.x * (3.1415926 / 128.))));
    float z = clamp(v.z + .6, 0., 1.);
    O = vec4(
      vec2(orientation * sign(v.x) * VNormal.x < 0. ? min(z * 10., 1.) * (.6 - abs(v.x)) : 0.) * xattenuation,
      vec2(orientation * VNormal.z > 0. ? z * (1. - xattenuation) : 0.)
    );

    return;
  }

  float h = VNormal.y > 0.5 ? v.y * clamp((v.z + .4) * 50., 0., 1.) : 0.;
  O = vec4(vec2(h), vec2(h > 0. ? modelId / 255. : 0.));
}
