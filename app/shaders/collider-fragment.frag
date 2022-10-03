#version 300 es
precision highp float;

in highp vec4 VNormal;
in highp vec4 FragPos;

uniform mat4 viewMatrix;

out vec4 O;

#define modelId FragPos.w

#define orientation viewMatrix[0][0]
#define COLLISION_TEXTURE_SIZE 128.
#define PI 3.1415926

void main() {
  vec4 v = viewMatrix * vec4(vec3(0, 1.49, .3 * orientation) + FragPos.xyz, 1);
  if (gl_FragCoord.y > 36.) {
    // float xattenuation = (1. - sin((gl_FragCoord.x * (PI / COLLISION_TEXTURE_SIZE))));
    //  linear attenuation, 0 at center, 1 at edge
    float xattenuation =
      (1. - abs((gl_FragCoord.x - ((COLLISION_TEXTURE_SIZE - 1.) / 2.)) / ((COLLISION_TEXTURE_SIZE - 1.) / 2.)));
    float z = clamp(v.z + .6, 0., 1.);
    O = vec4(
      vec2(orientation * sign(v.x) * VNormal.x < 0. ? min(z * 10., 1.) * (.9 - abs(v.x)) * xattenuation : 0.),
      vec2(orientation * VNormal.z > 0. ? z * (1. - xattenuation) : 0.)
    );
  } else {
    float h = VNormal.y > 0.45 ? v.y * clamp((v.z + .4) * 50., 0., 1.) : 0.;
    O = vec4(vec2(h), vec2(h > 0. ? modelId / 255. : 0.));
  }
}
