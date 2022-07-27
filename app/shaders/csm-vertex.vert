#version 300 es

in vec4 aPosition;

uniform mat4 viewMatrix;

void main() { gl_Position = viewMatrix * aPosition; }
