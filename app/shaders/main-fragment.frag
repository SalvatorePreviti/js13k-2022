#version 300 es
precision highp float;
precision highp sampler2DShadow;

in highp vec3 FragPos;
in highp vec3 Normal;
in lowp vec4 Color;

out vec4 O;

uniform vec3 lightDir;

uniform mat4[4] LightSpaceMatrices;
uniform mat4 viewMatrix;
uniform vec3 viewPos;

uniform sampler2DShadow depthTextures[4];

const float SHADOWMAP_SIZE = 2048.;
const float zFar = 500.0;
const int cascadeCount = 3;
const float cascadePlaneDistances[3] = float[3](30., 100., 300.);

float getCascadeTexel(int cascadeIdx, vec3 coord) {
  switch (cascadeIdx) {
    case 0: return texture(depthTextures[0], coord);
    case 1: return texture(depthTextures[1], coord);
    case 2: return texture(depthTextures[2], coord);
  }
  return texture(depthTextures[3], coord);
}

vec3 ShadowCalculation(vec3 fragPosWorldSpace) {
  // select cascade layer
  vec4 fragPosViewSpace = viewMatrix * vec4(fragPosWorldSpace, 1.0);
  float depthValue = abs(fragPosViewSpace.z);

  int layer = -1;
  for (int i = 0; i < cascadeCount; ++i) {
    if (depthValue < cascadePlaneDistances[i]) {
      layer = i;
      break;
    }
  }
  if (layer == -1) {
    layer = cascadeCount;
  }

  vec4 fragPosLightSpace = LightSpaceMatrices[layer] * vec4(fragPosWorldSpace, 1.0);
  // perform perspective divide
  vec3 projCoords = fragPosLightSpace.xyz / fragPosLightSpace.w;
  // transform to [0,1] range
  projCoords = projCoords * 0.5 + 0.5;

  // get depth of current fragment from light's perspective
  float currentDepth = projCoords.z;

  // keep the shadow at 0.0 when outside the far_plane region of the light's
  // frustum.
  if (currentDepth > 1.) {
    return vec3(0.5);  // 0
  }
  // calculate bias (based on depth map resolution and slope)
  vec3 normal = normalize(Normal);
  float bias = max(0.05 * (1.0 - dot(normal, lightDir)), 0.005);
  float biasModifier = 0.5f;
  if (layer == cascadeCount) {
    bias *= 1. / (zFar * biasModifier);
  } else {
    bias *= 1. / (cascadePlaneDistances[layer] * biasModifier);
  }

  float pcfZ = currentDepth - bias;

  float shadow = 0.0;
  for (int x = -1; x <= 1; ++x) {
    for (int y = -1; y <= 1; ++y) {
      shadow += getCascadeTexel(layer, vec3(projCoords.xy + vec2(x, y) / SHADOWMAP_SIZE, pcfZ));
    }
  }
  shadow /= 9.0;

  return vec3(shadow, currentDepth > 1.1, projCoords.y);
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
  vec3 shadow3 = ShadowCalculation(FragPos);
  vec3 lighting = (ambient + (shadow3.x) * (diffuse + specular)) * Color.xyz;

  O = vec4(lighting, 1.0f);

  // O.xy = shadow3.yz;
  // O.z = 0.;
  //  O.z = 0.;

  // O.xyz = shadow.xyz;
}

// uniform sampler2DShadow depthTextures[4];

// vec2 tt = gl_FragCoord.xy / 1800.;
// float t = texture(gShadowMap, vec3(tt.xy, 1));

// uniform vec4 cascadedSplits;
// uniform mat4 viewProjecMatrices[4];
// uniform mat4 inverseViewMatrix;
// uniform vec3 lightDirection;

// const float angleBias = 0.006f;

// vec4 CascadeIndicator = vec4(0.1, 0.1, 0.0, 0.0);

// uint findCascade(float zDepthValue) {
//   uint cascadeIdx = 0u;

//   for (uint i = 0u; i < 4u - 1u; ++i) {
//     if (zDepthValue < cascadedSplits[i]) {
//       cascadeIdx = i + 1u;

//       if (i == 0u)
//         CascadeIndicator = vec4(0.1, 0.0, 0.0, 0.0);
//       else if (i == 1u)
//         CascadeIndicator = vec4(0.0, 0.1, 0.0, 0.0);
//       else if (i == 2u)
//         CascadeIndicator = vec4(0.0, 0.0, 0.1, 0.0);
//     }
//   }
//   return cascadeIdx;
// }

// float getCascadeTexel(uint cascadeIdx, vec3 coord) {
//   switch (cascadeIdx) {
//     case 0u: return texture(depthTextures[0], coord);
//     case 1u: return texture(depthTextures[1], coord);
//     case 2u: return texture(depthTextures[2], coord);
//   }
//   return texture(depthTextures[3], coord);
// }

// out vec4 O;

// // const vec3 reverseLightDirection = normalize(vec3(10, 2, 4));

// /*float CalcShadowFactor() {
//   vec3 ProjCoords = LightSpacePos.xyz / LightSpacePos.w;
//   vec2 UVCoords = ProjCoords.xy;
//   UVCoords.x = 0.5 * ProjCoords.x + 0.5;
//   UVCoords.y = 0.5 * ProjCoords.y + 0.5;
//   float z = 0.5 * ProjCoords.z + 0.5;

//   bool inRange = UVCoords.x >= 0.0 && UVCoords.x <= 1.0 && UVCoords.y >= 0.0 && UVCoords.y <= 1.0;
//   if (!inRange) {
//     return 1.;
//   }

//   float Depth = texture(gShadowMap, vec3(UVCoords.xy, 1));

//   return UVCoords.y;

//   return Depth;
//   if (Depth < ProjCoords.z + 0.00001)
//     return 0.5;
//   else
//     return 1.0;
// }*/

// void main() {
//   vec3 normal = normalize(vNormal.xyz);

//   // vec2 tt = gl_FragCoord.xy / 1800.;
//   // float t = texture(gShadowMap, vec3(tt.xy, 1));

//   vec3 ambientColor = vColor.xyz * 0.3f;
//   float diffuseCoefficient = max(0.0, dot(vNormal.xyz, -lightDirection));

//   vec3 diffuse = vColor.xyz * diffuseCoefficient * 0.2f;

//   float depth = Position.z;

//   uint cascadeIdx = findCascade(depth);

//   // Take the corresponding projection matrix
//   mat4 lightViewProjectionMatrix = viewProjecMatrices[cascadeIdx];

//   // Move the fragment to shadow coordinates
//   vec4 fragmentModelViewPosition = vec4(Position.xyz, 1.0f);
//   vec4 fragmentModelPosition = inverseViewMatrix * fragmentModelViewPosition;
//   vec4 fragmentShadowPosition = lightViewProjectionMatrix * fragmentModelPosition;

//   // Perspective division
//   fragmentShadowPosition.xyz /= fragmentShadowPosition.w;

//   // Move from NDC to 0 - 1 coordinate system
//   fragmentShadowPosition = fragmentShadowPosition * 0.5f + 0.5f;

//   // The depth will be the Z coordinate
//   float currentDepth = fragmentShadowPosition.z;

//   float bias = max(angleBias * (1.0 - dot(vNormal.xyz, -lightDirection)), 0.0008);

//   // vec2 texelSize = 1.0 / vec2(textureSize(depthTextures[0], 0).xy);

//   float totalShadow = 0.0;

//   float shadowValue = getCascadeTexel(cascadeIdx, vec3(fragmentShadowPosition.xy, fragmentShadowPosition.z - bias));

//   vec3 inShadow = vec3(1.0) - shadowValue;

//   vec4 prev_color = vec4(((ambientColor + inShadow * diffuse) * vColor.xyz), 1.0f);

//   // prev_color.xyz * 0.1 +
//   // O.xyz = vec3(fragmentShadowPosition.xy, 1);  // vec3(fragmentShadowPosition.w == 1. ? 1. : 0.);

//   // O.xyz = fragmentShadowPosition.xyz;
//   O.z = fragmentShadowPosition.x > 0. && fragmentShadowPosition.x < 1. && fragmentShadowPosition.y > 0. &&
//       fragmentShadowPosition.y < 1.
//     ? 0.
//     : 1.;

//   // O.z = fragmentShadowPosition.y < 0. ? 1. : 0.;

//   O.xy = fragmentShadowPosition.xy;

//   // O.z = (ambientColor.x + ambientColor.y + ambientColor.z) / 2.;

//   // O.xyz = inverseViewMatrix[2].xyz / 3.0;
//   //    O.xyz = vec3(float(cascadeIdx) / 4.);

//   // O.xyz = Position.xyz / 1000.;
//   // O.xyz = CascadeIndicator.xyz;
//   // O.xyz = fragmentShadowPosition.xyz;
//   O.w = 1.;

//   // float f = CalcShadowFactor();

//   // vec3 ProjCoords = LightSpacePos.xyz / LightSpacePos.w;

//   // O = vec4(vec3(1, f, f), 1);
//   //   O = vec4(LightSpacePos.xyz, 1);
// }
