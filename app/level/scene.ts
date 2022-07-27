import type { Polygon } from "../geometry/geometry";
import type { Vertex } from "../geometry/vertex";
import { gl } from "../gl";
import { mainScene } from "./level";

export type Renderer = () => void;

export let renderMainScene: Renderer;

const loadScene = () => {
  if (DEBUG) {
    console.time("scene");
  }
  const scene = mainScene();

  if (DEBUG) {
    console.timeEnd("scene");
  }

  return scene;
};

/* if (import.meta.hot) {
  import.meta.hot.accept((mod) => {
    mod!.loadScene();
    sceneTriangles = mod!.sceneTriangles;
  });
} */

export const buildWorld = () => {
  const vertexMap = new Map<string, number>();

  const triangleIndices: number[] = [];
  const positions: number[] = [];
  const normals: number[] = [];
  const colors: number[] = [];

  const _u = new Uint32Array(5);
  const _f = new Float32Array(_u.buffer);

  const getVertex = ({ x, y, z, $nx, $ny, $nz }: Vertex): number => {
    // Normalize the normal, and round it to the nearest 8 bit integer
    const m = 32767 / Math.hypot($nx, $ny, $nz);

    $nx = ($nx * m) | 0;
    $ny = ($ny * m) | 0;

    // Encode the vertex to create a key
    _u[1] = $nx ^ ($ny << 16);
    _f[2] = x;
    _f[3] = y;
    _f[4] = z;

    const key = _u + "";

    let index = vertexMap.get(key);
    if (index === undefined) {
      vertexMap.set(key, (index = vertexMap.size));
      positions.push(x, y, z);
      normals.push($nx, $ny, ($nz * m) | 0);
      colors.push(_u[0]!);
    }
    return index;
  };

  const triangulateConvexPolygon = ({ $points, $color }: Polygon) => {
    _u[0] = $color;
    for (let i = 2, a = getVertex($points[0]!), b = getVertex($points[1]!); i < $points.length; ++i) {
      triangleIndices.push(a, b, (b = getVertex($points[i]!)));
    }
  };

  const makeMesh = (_solids: Polygon[][]) => _solids.flat().forEach(triangulateConvexPolygon);

  const scene = loadScene();

  if (DEBUG) {
    console.time("makeMesh");
  }

  makeMesh(scene);

  const _indicesxxx = triangleIndices.length;

  renderMainScene = () => {
    gl.drawElements(gl.TRIANGLES, _indicesxxx, gl.UNSIGNED_INT, 0);
  };

  if (DEBUG) {
    console.timeEnd("makeMesh");
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(triangleIndices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Int16Array(normals), gl.STATIC_DRAW);
  gl.vertexAttribPointer(1, 3, gl.SHORT, true, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Uint32Array(colors), gl.STATIC_DRAW);
  gl.vertexAttribPointer(2, 4, gl.UNSIGNED_BYTE, true, 0, 0);

  gl.enableVertexAttribArray(0);
  gl.enableVertexAttribArray(1);
  gl.enableVertexAttribArray(2);

  if (DEBUG) {
    console.log(
      "vertices: " + vertexMap.size + " indices:" + triangleIndices.length + " triangles:" + triangleIndices.length / 3,
    );
  }
};
