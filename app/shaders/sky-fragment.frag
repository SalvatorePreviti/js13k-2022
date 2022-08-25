#version 300 es
precision highp float;

uniform vec3 iResolution;
uniform vec3 viewPos;
uniform mat4 viewMatrix;

uniform highp sampler2D groundTexture;

out vec4 O;

#define gameTime iResolution.z

void main() {
  vec2 fragCoord = (gl_FragCoord.xy / iResolution.xy) * 2. - 1.;

  vec3 ray = normalize(
    mat3(viewMatrix) *
    vec3(
      fragCoord.x * -(iResolution.x / iResolution.y),
      -fragCoord.y,
      /* 1 / Math.tan(fieldOfViewRadians / 2) */
      1.7320508075688774));

  float rayTracedLavalDistance = (-100. - viewPos.y) / ray.y;

  vec4 pp = texture(groundTexture, ((gameTime / 20. + ray.z) * 0.5 - ray.xy) / 20.);

  if (rayTracedLavalDistance > 0.) {
    O = vec4(pp.y / 4., pp.y / 122., 0., 1);
  } else {
    vec3 rayTracedLava = viewPos + ray * rayTracedLavalDistance;

    vec4 tt = texture(
      groundTexture,
      rayTracedLava.xz / 300. + vec2(sin(rayTracedLava.z / 30. + gameTime), cos(rayTracedLava.x / 20. + gameTime)) / 80.);

    float h = tt.x * 0.9;

    // h = (sin(h + gameTime * 3.) * 1.) / 2.;

    O = mix(O, vec4(h, h * h * h, 0., 1), 1. - clamp(-rayTracedLavalDistance / 10000., 0., 1.));
  }
}

// cos(rayTracedLava.x / 23. + gameTime * 1.8)
