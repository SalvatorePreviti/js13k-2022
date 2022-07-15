#version 300 es

layout(location = 0) in vec3 kP;

uniform mat4 uM;

void main(void) { gl_Position = uM * vec4(kP, 1); }
