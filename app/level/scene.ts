import type { Polygon } from "../geometry/geometry";
import { gl } from "../gl";
import type { Vec3In } from "../math/vectors";
import { plane_fromPolygon } from "../math/vectors";
import { mainScene } from "./level";

export type Renderer = () => void;

export let renderMainScene: Renderer;

const loadScene = (): Polygon[] => {
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
  const triangleIndices: number[] = [];
  const positions: number[] = [];
  const normals: number[] = [];
  const colors: number[] = [];

  const vertexMap = new Map<string, number>();
  const _i = new Int32Array(7);
  const _f = new Float32Array(_i.buffer);

  const getVertex = ({ x, y, z }: Vec3In): number => {
    _f[4] = x;
    _f[5] = y;
    _f[6] = z;
    const key = "" + _i;
    let index = vertexMap.get(key);
    if (index === undefined) {
      vertexMap.set(key, (index = vertexMap.size));
      positions.push(x, y, z);
      normals.push(_i[0]!, _i[1]!, _i[2]!);
      colors.push(_i[3]!);
    }
    return index;
  };

  const makeMesh = (polygons: Polygon[]) => {
    for (const polygon of polygons) {
      const v = plane_fromPolygon(polygon);
      _i[0] = v.x * 32767;
      _i[1] = v.y * 32767;
      _i[2] = v.z * 32767;
      _i[3] = polygon.$color! | 0;
      for (let i = 2, a = getVertex(polygon[0]!), b = getVertex(polygon[1]!); i < polygon.length; ++i) {
        triangleIndices.push(a, b, (b = getVertex(polygon[i]!)));
      }
    }
  };

  const scene = loadScene();

  if (DEBUG) {
    console.time("makeMesh");
  }

  makeMesh(scene);

  const _indicesxxx = triangleIndices.length;

  renderMainScene = () => gl.drawElements(gl.TRIANGLES, _indicesxxx, gl.UNSIGNED_INT, 0);

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
