#version 300 es

#define iResolution iR
uniform vec2 iResolution;

// Screen position, in pixels. Bottom left is (0, 0), top right is (iResolution.x-1, iResolution.y-1).
#define fragCoord FC
out vec2 fragCoord;

void main() {
  vec2 t = vec2(float((gl_VertexID & 1) << 2), float((gl_VertexID & 2) << 1));
  gl_Position = vec4(t - 1., 0., 1.);
  fragCoord = t * iResolution * .5;
}
