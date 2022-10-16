#version 300 es
precision highp float;

/** The inverted view matrix */
uniform mat4 viewMatrix;
uniform vec3 iResolution;

uniform highp sampler2D groundTexture;

out vec4 O;

#define gameTime iResolution.z
#define viewPos viewMatrix[3]

/* 1 / Math.tan(fieldOfViewRadians / 2) */
const float fieldOfViewAmount = 1.73205;

void main() {
  vec2 fragCoord = (gl_FragCoord.xy / iResolution.xy) * 2. - 1.;
  vec3 ray =
    normalize(viewMatrix * vec4(fragCoord.x * -(iResolution.x / iResolution.y), -fragCoord.y, fieldOfViewAmount, 0.)).xyz;
  float rayTracedLavalDistance = (-32. - viewPos.y) / ray.y;
  float multiplier = (1. - clamp(abs(rayTracedLavalDistance / 9999.), 0., 1.));

  O = vec4(0, 0, 0, 1);

  if (multiplier > 0.01) {
    if (rayTracedLavalDistance > 0.) {
      // Render sky
      float c = cos(gameTime / 30.), s = sin(gameTime / 30.);
      ray.xz *= mat2(c, s, -s, c);
      vec3 absRay = abs(ray);
      O.xyz = vec3(dot(vec2(texture(groundTexture, ray.xy).z, texture(groundTexture, ray.yz * 2.).z), absRay.zx) * absRay.y);

    } else {
      // Render raytraced lava
      ray = viewPos.xyz + ray * rayTracedLavalDistance;
      O.x = multiplier *=
        0.9 - texture(groundTexture, ray.xz / 150. + vec2(sin(ray.z / 35. + gameTime), cos(ray.x / 25. + gameTime)) / 80.).y;
      O.y = multiplier * multiplier * multiplier;
    }
  }
}
