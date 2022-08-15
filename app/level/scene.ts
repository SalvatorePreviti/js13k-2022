import type { Polygon } from "../geometry/geometry";
import { gl } from "../gl";
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
  const _iSmooth = new Int32Array(_i.buffer, 0, 4);
  const _f = new Float32Array(_i.buffer);
  let _polygon: Polygon | undefined;

  const getVertex = (i: number): number => {
    const { x, y, z } = _polygon![i]!;
    _f[0] = x;
    _f[1] = y;
    _f[2] = z;
    const key = "" + (_polygon!.$smooth ? _iSmooth : _i);
    let index = vertexMap.get(key);
    if (index === undefined) {
      vertexMap.set(key, (index = vertexMap.size));
      positions.push(x, y, z);
      colors.push(_i[3]!);
      normals.push(_i[4]!, _i[5]!, _i[6]!);
    } else {
      normals[index * 3] = (normals[index * 3]! + _i[4]!) / 2;
      normals[index * 3 + 1] = (normals[index * 3 + 1]! + _i[5]!) / 2;
      normals[index * 3 + 2] = (normals[index * 3 + 2]! + _i[6]!) / 2;
    }
    return index;
  };

  const makeMesh = (polygons: Polygon[]) => {
    for (_polygon of polygons) {
      const v = plane_fromPolygon(_polygon);
      _i[3] = _polygon.$color! | 0;
      _i[4] = v.x * 32767;
      _i[5] = v.y * 32767;
      _i[6] = v.z * 32767;
      for (let i = 2, a = getVertex(0), b = getVertex(1); i < _polygon.length; ++i) {
        triangleIndices.push(a, b, (b = getVertex(i)));
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
