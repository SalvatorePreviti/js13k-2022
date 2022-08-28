#version 300 es
precision highp float;

#define CSM_TEXTURE_SIZE 2048.

#define zNear 0.3
#define CSM_PLANE_DISTANCE0 50.
#define CSM_PLANE_DISTANCE1 110.
#define zFar 180.

in highp vec4 VNormal;
in highp vec4 FragPos;
in highp vec4 UntransformedFragPos;
in lowp vec4 Color;

uniform vec3 viewPos;
uniform vec3 lightDir;
uniform mat4 viewMatrix;

uniform mat4[3] csm_matrices;
uniform highp sampler2DShadow csm_textures[3];
uniform highp sampler2D groundTexture;

out vec4 O;

// Shadow bias
// Could be computed based on normal and light, something like 0.0003 * (1. -
// clamp(dot(normal, lightDir), 0., 1.))
const float shadowBias = 0.00018;

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
  vec4 csmCoords = csm_matrices[depthValue < CSM_PLANE_DISTANCE0 ? 0 : depthValue < CSM_PLANE_DISTANCE1 ? 1 : 2] * FragPos;

  // perform perspective divide and transform to [0,1] range
  csmCoords = (csmCoords / csmCoords.w) * .5 + .5;

  if (csmCoords.z < 1.) { // Only if inside far plane
    shadow = 0.;
    for (float x = -1.; x <= 1.; ++x) {
      for (float y = -1.; y <= 1.; ++y) {
        vec3 c = vec3(csmCoords.xy + vec2(x, y) / CSM_TEXTURE_SIZE, csmCoords.z - shadowBias);
        shadow += depthValue < CSM_PLANE_DISTANCE0 ? texture(csm_textures[0], c)
          : depthValue < CSM_PLANE_DISTANCE1       ? texture(csm_textures[1], c)
                                                   : texture(csm_textures[2], c);
      }
    }
    shadow /= 9.;
  }

  vec3 rgbColor = Color.xyz * (1. - tex.x);

  O = vec4(
    // ambient
    .1 * rgbColor +
      // diffuse
      rgbColor * (max(0., lambert) * .5 + (rgbColor * lambert * lambert * .4)) * (shadow * .7 + .3) +
      // specular
      .7 * pow(max(0., dot(normalize(FragPos.xyz - viewPos), reflect(lightDir, normal))), 35.) * shadow,
    1
  );

  // .5 * diffuse * (diffuse + 1.1)
  // color += 0.125 * (concrete.x - concrete.y + concrete.z - concrete.w);
}
