import { debug_lines_prepare } from "../debug-lines-render";
import type { TriangulatedSolids } from "../geometry/geometry";
import { solids_to_triangles } from "../geometry/geometry";
import { triangles_fill_buffer } from "../geometry/triangles-render";
import { mainScene } from "./level";

export let sceneTriangles: TriangulatedSolids;

export const loadScene = () => {
  if (DEBUG) {
    console.time("scene");
  }
  const scene = mainScene();

  if (DEBUG) {
    console.timeEnd("scene");
    console.time("triangles");
  }
  sceneTriangles = solids_to_triangles(scene);
  if (DEBUG) {
    console.timeEnd("triangles");
  }

  if (DEBUG) {
    console.log({ vertices: sceneTriangles.$vertices.length / 9, indices: sceneTriangles.$indices.length });
  }

  triangles_fill_buffer(sceneTriangles.$vertices, sceneTriangles.$indices);
  if (DEBUG) {
    debug_lines_prepare(sceneTriangles.$indices);
  }
};

if (import.meta.hot) {
  import.meta.hot.accept((mod) => {
    mod.loadScene();
    sceneTriangles = mod.sceneTriangles;
  });
}
