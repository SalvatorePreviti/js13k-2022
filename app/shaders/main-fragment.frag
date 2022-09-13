#version 300 es
precision highp float;

// as printed by the console.log on csm.ts
const vec3 lightDir = vec3(-0.6560590289905073, 0.6663690071652679, -0.3543146860766681);

#define CSM_TEXTURE_SIZE 2048.

#define zNear 0.3
#define CSM_PLANE_DISTANCE 55.
#define zFar 177.

in highp vec4 VNormal;
in highp vec4 FragPos;
in highp vec4 UntransformedFragPos;
in lowp vec4 Color;

uniform vec3 viewPos;
uniform mat4 viewMatrix;
uniform mat4 csm_matrix0;
uniform mat4 csm_matrix1;

uniform highp sampler2DShadow csm_texture0;
uniform highp sampler2DShadow csm_texture1;
uniform highp sampler2D groundTexture;

out vec4 O;

void main() {
  vec3 normal = normalize(VNormal.xyz);

  vec3 tex = Color.w *
    (texture(groundTexture, UntransformedFragPos.yz * .035) * normal.x +
     texture(groundTexture, UntransformedFragPos.xz * .035) * normal.y +
     texture(groundTexture, UntransformedFragPos.xy * .035) * normal.z)
      .xyz;

  // Displacement map
  normal = normalize(normal.xyz + tex * .5);

  float lambert = dot(normal, lightDir);
  float shadow = 1.;
  float depthValue = abs((viewMatrix * FragPos).z);

  // Gets the fragment position in light space
  vec4 csmCoords = (depthValue < CSM_PLANE_DISTANCE ? csm_matrix0 : csm_matrix1) * FragPos;

  // perform perspective divide and transform to [0,1] range
  csmCoords = (csmCoords / csmCoords.w) * .5 + .5;

  if (csmCoords.z < 1.) { // Only if inside far plane
    shadow = 0.;

    // TODO: Shadow bias could be computed based on normal and light, something like 0.0003 * (1. -
    // clamp(dot(normal, lightDir), 0., 1.))

    for (float x = -1.; x <= 1.; ++x) {
      for (float y = -1.; y <= 1.; ++y) {
        vec3 c = vec3(
          csmCoords.xy + vec2(x, y) / CSM_TEXTURE_SIZE,
          csmCoords.z -
            // shadow bias
            (1. / CSM_TEXTURE_SIZE / 2.8)
        );
        shadow += depthValue < CSM_PLANE_DISTANCE ? texture(csm_texture0, c) : texture(csm_texture1, c);
      }
    }
    shadow /= 9.;
  }

  vec3 rgbColor = Color.xyz * (1. - tex.x);

  O = vec4(
    // ambient
    vec3(.09, .05, .1) * rgbColor +
      // diffuse
      rgbColor * (max(0., lambert) * .5 + (rgbColor * lambert * lambert * vec3(.5, .45, .3))) * (shadow * .7 + .3) +
      // lava light
      rgbColor * max(dot(normal, normalize(vec3(.1, -1, -.1))), 0.) * max(0., 2. - FragPos.y) * (vec3(.6, .1, 0) / 14.) +
      // specular
      vec3(.6, .6, .5) * pow(max(0., dot(normalize(FragPos.xyz - viewPos), reflect(lightDir, normal))), 35.) * shadow,
    1
  );
}
