#version 300 es
precision highp float;
precision highp sampler2DShadow;

#define CSM_TEXTURE_SIZE 2048.
#define CSM_PLANE_DISTANCE0 25.
#define CSM_PLANE_DISTANCE1 100.
#define CSM_PLANE_DISTANCE2 200.

in highp vec4 FragPos;
in highp vec3 Normal;
in lowp vec4 Color;

out vec4 O;

uniform vec3 viewPos;
uniform vec3 lightDir;
uniform mat4 viewMatrix;

uniform mat4[4] csm_matrices;
uniform sampler2DShadow csm_textures[4];

float ShadowCalculation(float shadowBias) {
  // Select the right cascade layer.
  float depthValue = abs((viewMatrix * FragPos).z);

  int cascadeLayer = depthValue < CSM_PLANE_DISTANCE0 ? 0
    : depthValue < CSM_PLANE_DISTANCE1                ? 1
    : depthValue < CSM_PLANE_DISTANCE2                ? 2
                                                      : 3;

  // Gets the fragment position in light space
  vec4 csmCoords = csm_matrices[cascadeLayer] * FragPos;

  // perform perspective divide and transform to [0,1] range
  csmCoords = (csmCoords / csmCoords.w) * .5 + .5;

  if (csmCoords.z > 1.) {
    return 1.;  // Outside of far plane, skip.
  }

  // TODO: once we have real dimensions and cascades size,
  // we can try to adjust the shadow interpolation to avoid artifacts.
  // The idea is to adjust the blur size depending on the distance and/or cascade index.

  float shadow = 0.;
  for (float x = -1.; x <= 1.; ++x) {
    for (float y = -1.; y <= 1.; ++y) {
      vec3 c = vec3(csmCoords.xy + vec2(x, y) / CSM_TEXTURE_SIZE, csmCoords.z - shadowBias);
      switch (cascadeLayer) {
        case 0: shadow += texture(csm_textures[0], c); break;
        case 1: shadow += texture(csm_textures[1], c); break;
        case 2: shadow += texture(csm_textures[2], c); break;
        default: shadow += texture(csm_textures[3], c); break;
      }
    }
  }
  return shadow / 9.;
}

void main() {
  vec3 normal = normalize(Normal.xyz);

  vec3 lightColor = vec3(0.6);

  vec3 ambient = 0.3 * Color.xyz;

  float diff = max(dot(lightDir, normal), 0.0);
  vec3 diffuse = diff * lightColor;
  // specular
  vec3 viewDir = normalize(viewPos - FragPos.xyz);
  vec3 halfwayDir = normalize(lightDir + viewDir);
  vec3 specular = pow(max(dot(normal, halfwayDir), 0.0), 64.0) * lightColor;

  // calculate shadow
  float shadow = ShadowCalculation(max(0.001 * (1. - dot(normal, lightDir)), 0.0005));

  vec3 lighting = (ambient + shadow * (diffuse + specular)) * Color.xyz;

  O = vec4(lighting, 1.0f);
}
