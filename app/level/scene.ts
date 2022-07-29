import type { Polygon } from "../geometry/geometry";
import { gl } from "../gl";
import type { Vec3In } from "../math/vectors";
import { vec3_polygonNormal } from "../math/vectors";
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

  const _u = new Int32Array(7);
  const _f = new Float32Array(_u.buffer);

  const getVertex = ({ x, y, z }: Vec3In): number => {
    _f[4] = x;
    _f[5] = y;
    _f[6] = z;

    const key = _u + "";

    let index = vertexMap.get(key);
    if (index === undefined) {
      vertexMap.set(key, (index = vertexMap.size));
      positions.push(x, y, z);
      normals.push(_u[0]!, _u[1]!, _u[2]!);
      colors.push(_u[3]!);
    }
    return index;
  };

  const triangulateConvexPolygon = ({ $points, $color }: Polygon) => {
    const v = vec3_polygonNormal($points as [Vec3In, Vec3In, Vec3In]);
    _u[0] = v.x * 32767;
    _u[1] = v.y * 32767;
    _u[2] = v.z * 32767;
    _u[3] = $color | 0;
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
