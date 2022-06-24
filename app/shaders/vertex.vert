#version 300 es

#define aVertexPosition kP
layout(location = 0) in vec4 aVertexPosition;

#define aVertexNormal kN
layout(location = 1) in vec4 aVertexNormal;

#define aVertexColor kC
layout(location = 2) in vec4 aVertexColor;

#define uModelViewMatrix uM
uniform mat4 uModelViewMatrix;

#define uProjectionMatrix uP
uniform mat4 uProjectionMatrix;

#define vNormal vN
out highp vec4 vNormal;

#define vColor vC
out lowp vec4 vColor;

void main(void) {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vColor = aVertexColor;
  vNormal = aVertexNormal;
}
