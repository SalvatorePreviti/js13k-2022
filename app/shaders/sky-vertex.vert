#version 300 es

in vec4 aPosition;

void main() { gl_Position = vec4(aPosition.xy, 1, 1); }
