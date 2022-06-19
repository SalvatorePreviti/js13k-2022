import "./dev-tools/dev-main";
import "./index.css";
import vsSource from "./shaders/vertex.vert";
import fsSource from "./shaders/fragment.frag";

import { mat4_new_zero, mat4_setPerspectiveValues } from "./math/matrix";
import { DEG_PER_RAD } from "./math/math";
import { camera, camera_update } from "./camera";
import { ViewCamera_update } from "./math/view-camera";
import { gl } from "./gl";
import type { Polygon } from "./geometry-builder/cylinder";
import { cylinder, scale, translate, rotate, polygons_to_triangles } from "./geometry-builder/cylinder";
import { triangles_attributes, triangles_fill_buffer } from "./geometry-builder/triangles-render";

const scene: Polygon[] = [];

scene.push(...cylinder(6));

scene.push(...translate(scale(rotate(cylinder(12), 45, 0, 0), 0.5, 0.5, 0.5), 2.5, 0, 0));

const sceneTriangles = polygons_to_triangles(scene);

triangles_fill_buffer(sceneTriangles.$vertices, sceneTriangles.$indices);

// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(vsSource, fsSource);

const programInfo = {
  program: shaderProgram,
  attribLocations: {
    vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
  },
  uniformLocations: {
    projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
    modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
  },
};

function initShaderProgram(svsSource: string, sfsSource: string) {
  const vertexShader = loadShader(gl.VERTEX_SHADER, svsSource);
  const fragmentShader = loadShader(gl.FRAGMENT_SHADER, sfsSource);

  // Create the shader program

  const program = gl.createProgram()!;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  // If creating the shader program failed, alert

  if (DEBUG && !gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
  }

  return program;
}

function loadShader(type: number, source: string) {
  const shader = gl.createShader(type)!;

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (DEBUG && !gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
  }

  return shader;
}

const projectionMatrix = mat4_new_zero();
// const viewMatrix = mat4_setIdentityValues(mat4_new_zero());

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

draw();
setInterval(draw, 10);

function draw() {
  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  camera_update(gameTimeDelta);

  // camera.$position.x = 2;
  // camera.$position.z = 30;
  // camera.$position.y = 3;

  // camera.$rotation.y = (Math.sin(performance.now() / 1000) * Math.PI) / 7;

  ViewCamera_update(camera);

  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 45 * DEG_PER_RAD; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4_setPerspectiveValues(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  triangles_attributes();

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
  gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, camera.$view);

  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  }

  // Update the rotation for the next draw
}
