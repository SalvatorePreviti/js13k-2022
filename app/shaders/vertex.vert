#version 300 es

#define aVertexPosition kP
layout(location = 0) in vec4 aVertexPosition;

#define aVertexNormal kN
layout(location = 1) in vec4 aVertexNormal;

#define aVertexColor kC
layout(location = 2) in vec4 aVertexColor;

#define uMatrix uM
uniform mat4 uMatrix;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 modelViewMatrix2;

#define vNormal vN
out highp vec4 vNormal;

#define vColor vC
out lowp vec4 vColor;

out highp vec4 Position;

void main(void) {
  gl_Position = projectionMatrix * modelViewMatrix * aVertexPosition;
  vColor = aVertexColor;
  vNormal = aVertexNormal;
  Position = modelViewMatrix2 * aVertexPosition;
}
