#version 300 es
precision highp float;
precision highp sampler2DShadow;

#define vNormal vN
in highp vec4 vNormal;

#define vColor vC
in lowp vec4 vColor;

in highp vec4 Position;

uniform sampler2DShadow depthTextures[4];

uniform vec4 cascadedSplits;
uniform mat4 viewProjecMatrices[4];
uniform mat4 inverseViewMatrix;
uniform vec3 lightDirection;

const float angleBias = 0.006f;

vec4 CascadeIndicator = vec4(0.1, 0.1, 0.0, 0.0);

uint findCascade(float zDepthValue) {
  uint cascadeIdx = 0u;

  for (uint i = 0u; i < 4u - 1u; ++i) {
    if (zDepthValue < cascadedSplits[i]) {
      cascadeIdx = i + 1u;

      if (i == 0u)
        CascadeIndicator = vec4(0.1, 0.0, 0.0, 0.0);
      else if (i == 1u)
        CascadeIndicator = vec4(0.0, 0.1, 0.0, 0.0);
      else if (i == 2u)
        CascadeIndicator = vec4(0.0, 0.0, 0.1, 0.0);
    }
  }
  return cascadeIdx;
}

float getCascadeTexel(uint cascadeIdx, vec3 coord) {
  switch (cascadeIdx) {
    case 0u: return texture(depthTextures[0], coord);
    case 1u: return texture(depthTextures[1], coord);
    case 2u: return texture(depthTextures[2], coord);
  }
  return texture(depthTextures[3], coord);
}

out vec4 O;

// const vec3 reverseLightDirection = normalize(vec3(10, 2, 4));

/*float CalcShadowFactor() {
  vec3 ProjCoords = LightSpacePos.xyz / LightSpacePos.w;
  vec2 UVCoords = ProjCoords.xy;
  UVCoords.x = 0.5 * ProjCoords.x + 0.5;
  UVCoords.y = 0.5 * ProjCoords.y + 0.5;
  float z = 0.5 * ProjCoords.z + 0.5;

  bool inRange = UVCoords.x >= 0.0 && UVCoords.x <= 1.0 && UVCoords.y >= 0.0 && UVCoords.y <= 1.0;
  if (!inRange) {
    return 1.;
  }

  float Depth = texture(gShadowMap, vec3(UVCoords.xy, 1));

  return UVCoords.y;

  return Depth;
  if (Depth < ProjCoords.z + 0.00001)
    return 0.5;
  else
    return 1.0;
}*/

void main() {
  vec3 normal = normalize(vNormal.xyz);

  // vec2 tt = gl_FragCoord.xy / 1800.;
  // float t = texture(gShadowMap, vec3(tt.xy, 1));

  vec3 ambientColor = vColor.xyz * 0.3f;
  float diffuseCoefficient = max(0.0, dot(vNormal.xyz, -lightDirection));

  vec3 diffuse = vColor.xyz * diffuseCoefficient * 0.2f;

  float depth = Position.z;

  uint cascadeIdx = findCascade(depth);

  // Move the fragment to shadow coordinates
  vec4 fragmentModelPosition = inverseViewMatrix * vec4(Position.xyz, 1);
  vec4 fragmentShadowPosition = viewProjecMatrices[cascadeIdx] * fragmentModelPosition;

  // Perspective division
  fragmentShadowPosition.xyz /= fragmentShadowPosition.w;

  // Move from NDC to 0 - 1 coordinate system
  fragmentShadowPosition = fragmentShadowPosition / 2. + .5f;

  float bias = max(angleBias * (1.0 - dot(vNormal.xyz, -lightDirection)), 0.0008);

  // vec2 texelSize = 1.0 / vec2(textureSize(depthTextures[0], 0).xy);

  float totalShadow = 0.0;

  float shadowValue = getCascadeTexel(cascadeIdx, vec3(fragmentShadowPosition.xy, fragmentShadowPosition.z - bias));

  vec3 inShadow = vec3(1.0) - shadowValue;

  vec4 prev_color = vec4(((ambientColor + inShadow * diffuse) * vColor.xyz), 1.0f);

  // prev_color.xyz * 0.1 +
  O.xyz = fragmentShadowPosition.xyz;  // vec3(fragmentShadowPosition.w == 1. ? 1. : 0.);

  // O.xyz = CascadeIndicator.xyz;
  //  O.xyz = vec3(float(cascadeIdx) / 4.);

  // O.xyz = Position.xyz / 1000.;
  // O.xyz = CascadeIndicator.xyz;
  // O.xyz = fragmentShadowPosition.xyz;
  O.w = 1.;

  // float f = CalcShadowFactor();

  // vec3 ProjCoords = LightSpacePos.xyz / LightSpacePos.w;

  // O = vec4(vec3(1, f, f), 1);
  //   O = vec4(LightSpacePos.xyz, 1);
}
