#version 300 es

layout(location = 0) in vec3 P;

uniform mat4 modelViewMatrix;

void main(void) { gl_Position = modelViewMatrix * vec4(P, 1); }
