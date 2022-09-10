#version 300 es

in vec4 aPosition;

uniform mat4 viewMatrix;
uniform mat4 worldMatrix;

void main() { gl_Position = viewMatrix * (worldMatrix * aPosition); }
