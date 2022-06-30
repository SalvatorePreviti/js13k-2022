import "./dev-tools/dev-main";
import "./index.css";
import vsSource from "./shaders/vertex.vert";
import fsSource from "./shaders/fragment.frag";

import { DEG_TO_RAD } from "./math/math";
import { gl } from "./gl";
import { triangles_attributes } from "./geometry/triangles-render";

import { debug_lines_draw } from "./debug-lines-render";
import { camera_update } from "./camera-update";
import { camera_firstPersonPerspective, camera_projection, camera_updateView, camera_view } from "./camera";
import { sceneTriangles, loadScene } from "./level/scene";

loadScene();

// scene.push(...csg_union(figure0, figure1));
// scene.push(...figure0);
// scene.push(...figure1);

// scene.push(...cylinder(6));
// scene.push(...translate(scale(rotate(cylinder(12), 45, 10, 10), 0.5, 0.5, 0.5), 1.5, 0, 0));

// const bspNode = new BspNode();
// BspNode_build(bspNode, scene);
// console.log(bspNode);

const loadShader = (type: number, source: string) => {
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
};

const initShaderProgram = (svsSource: string, sfsSource: string) => {
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
};

// Initialize a shader program; this is where all the lighting
// for the vertices and so forth is established.
const shaderProgram = initShaderProgram(vsSource, fsSource);

const projectionMatrixLoc = gl.getUniformLocation(shaderProgram, "uP");
const modelViewMatrixLoc = gl.getUniformLocation(shaderProgram, "uM");

// const viewMatrix = mat4_setIdentityValues(mat4_new_zero());

let gameTime = performance.now() / 1000;
let lastGameTime = gameTime;

const draw = () => {
  const gameTimeDelta = gameTime - lastGameTime;
  lastGameTime = gameTime;
  gameTime = performance.now() / 1000;

  camera_update(gameTimeDelta);

  camera_updateView();
  // camera.$position.x = 2;
  // camera.$position.z = 30;
  // camera.$position.y = 3;

  // camera.$rotation.y = (Math.sin(performance.now() / 1000) * Math.PI) / 7;

  gl.clearColor(0, 0, 0, 1); // Clear to black, fully opaque
  gl.clearDepth(1); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things

  gl.enable(gl.CULL_FACE); // Don't render triangle backs

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 45 * DEG_TO_RAD; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  camera_firstPersonPerspective(fieldOfView, aspect, zNear, zFar);

  triangles_attributes();

  // Tell WebGL to use our program when drawing

  gl.useProgram(shaderProgram);

  // Set the shader uniforms

  gl.uniformMatrix4fv(projectionMatrixLoc, false, camera_projection);
  gl.uniformMatrix4fv(modelViewMatrixLoc, false, camera_view.toFloat32Array());

  {
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, sceneTriangles.$indices.length, type, offset);
  }

  if (DEBUG) {
    debug_lines_draw();
  }

  // Update the rotation for the next draw
};

draw();
setInterval(draw, 10);
