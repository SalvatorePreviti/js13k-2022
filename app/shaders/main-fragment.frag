#version 300 es
precision highp float;
precision highp sampler2DShadow;

#define CSM_TEXTURE_SIZE 2048.
#define CSM_PLANE_DISTANCE0 25.
#define CSM_PLANE_DISTANCE1 100.
#define CSM_PLANE_DISTANCE2 200.

in highp vec3 FragPos;
in highp vec3 Normal;
in lowp vec4 Color;

out vec4 O;

uniform vec3 viewPos;
uniform vec3 lightDir;
uniform mat4 viewMatrix;

uniform mat4[4] lightSpaceMatrices;
uniform sampler2DShadow depthTextures[4];

float ShadowCalculation(float shadowBias) {
  vec4 fragPos4 = vec4(FragPos, 1);

  // select cascade layer
  vec4 fragPosViewSpace = viewMatrix * fragPos4;
  float depthValue = abs(fragPosViewSpace.z);

  int cascadeLayer = depthValue < CSM_PLANE_DISTANCE0 ? 0
    : depthValue < CSM_PLANE_DISTANCE1                ? 1
    : depthValue < CSM_PLANE_DISTANCE2                ? 2
                                                      : 3;

  // Gets the fragment position in light space
  vec4 csmCoords = lightSpaceMatrices[cascadeLayer] * fragPos4;

  // perform perspective divide and transform to [0,1] range
  csmCoords = (csmCoords / csmCoords.w) * .5 + .5;

  if (csmCoords.z > 1.) {
    return 1.;  // Outside of far plane, skip.
  }

  float shadow = 0.;
  for (float x = -1.; x <= 1.; ++x) {
    for (float y = -1.; y <= 1.; ++y) {
      vec3 c = vec3(csmCoords.xy + vec2(x, y) / CSM_TEXTURE_SIZE, csmCoords.z - shadowBias);
      switch (cascadeLayer) {
        case 0: shadow += texture(depthTextures[0], c); break;
        case 1: shadow += texture(depthTextures[1], c); break;
        case 2: shadow += texture(depthTextures[2], c); break;
        default: shadow += texture(depthTextures[3], c); break;
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
  vec3 viewDir = normalize(viewPos - FragPos);
  vec3 reflectDir = reflect(-lightDir, normal);
  vec3 halfwayDir = normalize(lightDir + viewDir);
  float spec = pow(max(dot(normal, halfwayDir), 0.0), 64.0);
  vec3 specular = spec * lightColor;

  // calculate shadow
  float shadow = ShadowCalculation(max(0.001 * (1. - dot(normal, lightDir)), 0.0005));

  vec3 lighting = (ambient + shadow * (diffuse + specular)) * Color.xyz;

  O = vec4(lighting, 1.0f);
}
