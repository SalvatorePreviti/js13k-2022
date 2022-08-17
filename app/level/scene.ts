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
  const vertexInts = new Int32Array(7);
  const vertexIntsSmooth = new Int32Array(vertexInts.buffer, 0, 4);
  const vertexFloats = new Float32Array(vertexInts.buffer);

  let _polygon: Polygon | undefined;
  let _meshFirstIndex: number = 0;

  const getVertex = (i: number): number => {
    const { x, y, z } = _polygon![i]!;
    vertexFloats[0] = x;
    vertexFloats[1] = y;
    vertexFloats[2] = z;
    const key = "" + (_polygon!.$smooth ? vertexIntsSmooth : vertexInts);
    let index = vertexMap.get(key);
    if (index === undefined) {
      vertexMap.set(key, (index = vertexMap.size));
      positions.push(x, y, z);
      colors.push(vertexInts[3]!);
      normals.push(vertexInts[4]!, vertexInts[5]!, vertexInts[6]!);
    } else {
      normals[index * 3] = (normals[index * 3]! + vertexInts[4]!) / 2;
      normals[index * 3 + 1] = (normals[index * 3 + 1]! + vertexInts[5]!) / 2;
      normals[index * 3 + 2] = (normals[index * 3 + 2]! + vertexInts[6]!) / 2;
    }
    return index;
  };

  meshAdd = (polygons: Polygon[]) => {
    for (_polygon of polygons) {
      const { x, y, z } = plane_fromPolygon(_polygon);
      vertexInts[3] = _polygon.$color! | 0;
      vertexInts[4] = x * 32767;
      vertexInts[5] = y * 32767;
      vertexInts[6] = z * 32767;
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
