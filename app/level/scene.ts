import type { Polygon } from "../geometry/geometry";
import { gl } from "../gl";
import { identity } from "../math/matrix";
import { plane_fromPolygon } from "../math/vectors";
import { demon, mainScene } from "./level";

export type Renderer = () => void;

export interface Mesh {
  (worldMatrixLoc: WebGLUniformLocation): void;
  $matrix: DOMMatrix;
}

export let meshDemon: Mesh;

export let meshWorld: Mesh;

export let meshAdd: (polygons: Polygon[]) => Polygon[];

export const buildWorld = () => {
  if (DEBUG) {
    console.time("buildWorld");
  }

  const triangleIndices: number[] = [];
  const positions: number[] = [];
  const normals: number[] = [];
  const colors: number[] = [];

  const vertexMap = new Map<string, number>();
  const _i = new Int32Array(7);
  const _iSmooth = new Int32Array(_i.buffer, 0, 4);
  const _f = new Float32Array(_i.buffer);
  let _polygon: Polygon | undefined;
  let _meshFirstIndex: number = 0;

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

  meshAdd = (polygons: Polygon[]) => {
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
    return polygons;
  };

  const endMesh = (fn: () => void) => {
    fn();
    const first = _meshFirstIndex;
    const last = triangleIndices.length;
    const mesh = ((worldMatrixLoc: WebGLUniformLocation) => {
      gl.uniformMatrix4fv(worldMatrixLoc, false, mesh.$matrix.toFloat32Array());
      gl.drawElements(gl.TRIANGLES, (_meshFirstIndex = last) - first, gl.UNSIGNED_INT, first);
    }) as Mesh;
    mesh.$matrix = DOMMatrix.fromMatrix(identity);
    return mesh;
  };

  meshDemon = endMesh(demon);
  meshWorld = endMesh(mainScene);

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
    console.timeEnd("buildWorld");
    console.log(
      "vertices: " + vertexMap.size + " indices:" + triangleIndices.length + " triangles:" + triangleIndices.length / 3,
    );
  }
};
