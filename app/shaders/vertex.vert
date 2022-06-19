#version 300 es
layout(location = 0) in vec4 aVertexPosition;
layout(location = 1) in vec4 aVertexNormal;
layout(location = 2) in vec4 aVertexColor;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;
out highp vec4 vNormal;
out lowp vec4 vColor;
void main(void) {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vColor = aVertexColor;
  vNormal = aVertexNormal;
}
