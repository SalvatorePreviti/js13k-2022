#version 300 es
precision highp float;

// Screen resolution in pixels.
#define iResolution iR
uniform vec2 iResolution;

// Global time
#define iTime iT
uniform float iTime;

// Noise texture
uniform highp sampler2D texPrimitives;

///// I/O /////

// Screen position, in pixels. Bottom left is (0, 0), top right is
// (iResolution.x-1, iResolution.y-1).
#define fragCoord FC
in vec2 fragCoord;

// Output color
#define oColor oC
out vec4 oColor;

ivec2 primitivesIdx(int i, int offset) {
  int j = i * 3 + offset;
  return ivec2(j % 512, j / 512);
}

float sdSphere(vec3 p, float s) { return length(p) - s; }

float map(vec3 p) {
  float m = 100000000.0;
  int i = 0;
  for (int i = 0; i < 150; ++i) {
    vec4 ta = texelFetch(texPrimitives, primitivesIdx(i, 0), 0);
    vec4 tb = texelFetch(texPrimitives, primitivesIdx(i, 1), 0);
    vec4 tc = texelFetch(texPrimitives, primitivesIdx(i, 2), 0);

    float type = ta.x;
    vec3 center = ta.yzw;
    vec3 size = tb.xyz;
    vec2 rot = vec2(tb.w, tc.x);
    vec3 color = tc.yzw;

    m = min(m, sdSphere(p + center, size.z));
  }

  return m;

  /*float d =
      distance(p, vec3(-1, 0, -5)) - 1.; // sphere at (-1,0,5) with radius 1
  d = min(d, distance(p, vec3(2, 0, -3)) - 1.);  // second sphere
  d = min(d, distance(p, vec3(-2, 0, -2)) - 1.); // and another
  d = min(d, p.y + 1.);                          // horizontal plane at y = -1
  return d;*/
}

//
// Calculate the normal by taking the central differences on the distance field.
//
vec3 calcNormal(in vec3 p) {
  vec2 e = vec2(1.0, -1.0) * 0.0005;
  return normalize(e.xyy * map(p + e.xyy) + e.yyx * map(p + e.yyx) + e.yxy * map(p + e.yxy) + e.xxx * map(p + e.xxx));
}

void main() {
  vec3 ro = vec3(0, 0, 1);  // ray origin

  vec2 q = (fragCoord.xy - .5 * iResolution.xy) / iResolution.y;
  vec3 rd = normalize(vec3(q, 0.) - ro);  // ray direction for fragCoord.xy

  vec2 rq = (q + 1.) * .5;

  // March the distance field until a surface is hit.
  float h, t = 1.;
  for (int i = 0; i < 256; i++) {
    h = map(ro + rd * t);
    t += h;
    if (h < 0.01) break;
  }

  if (h < 0.01) {
    vec3 p = ro + rd * t;
    vec3 normal = calcNormal(p);
    vec3 light = vec3(0, 2, 0);

    // Calculate diffuse lighting by taking the dot product of
    // the light direction (light-p) and the normal.
    float dif = clamp(dot(normal, normalize(light - p)), 0., 1.);

    // Multiply by light intensity (5) and divide by the square
    // of the distance to the light.
    dif *= 5. / dot(light - p, light - p);

    oColor = vec4(vec3(pow(dif, 0.4545)), 1);  // Gamma correction
  } else {
    oColor = vec4(0, 0, 0, 1);
  }

  // oColor.xyz = texelFetch(texPrimitives, ivec2(rq.x * 512., 0), 0).xyz;
}
