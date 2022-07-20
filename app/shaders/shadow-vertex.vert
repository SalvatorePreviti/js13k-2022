#version 300 es

layout(location = 0) in vec3 P;

uniform mat4 M;

void main(void) { gl_Position = M * vec4(P, 1); }
