import { CSGPolygon_fromTriangle } from "./csg-polygon";
import {
  csg_tree,
  csg_tree_addPolygons,
  csg_tree_addTree,
  csg_tree_clipTo,
  csg_tree_invert,
  type CSGNode,
} from "./csg-tree";
import type { Mesh } from "./cylinder";
import { mesh_fromConvexPolygon } from "./cylinder";

/**
 * If is known that there is no intersection between the tree and a list of polygons,
 * just adding them is much faster than union.
 */
export const csg_unionFast = (a: CSGNode | Mesh, polygons: Mesh) => {
  a = csg_tree(a);
  const csgPolygons = polygons.map(CSGPolygon_fromTriangle);
  csg_tree_addPolygons(a, csgPolygons);
  return a;
};

export const csg_union = (a: CSGNode | Mesh, b: CSGNode | Mesh): CSGNode => {
  a = csg_tree(a);
  b = csg_tree(b);
  csg_tree_clipTo(a, b);
  csg_tree_clipTo(b, a);
  csg_tree_invert(b);
  csg_tree_clipTo(b, a);
  csg_tree_invert(b);
  csg_tree_addTree(a, b);
  return a;
};

export const csg_subtract = (a: CSGNode | Mesh, b: CSGNode | Mesh): CSGNode => {
  a = csg_tree(a);
  b = csg_tree(b);
  csg_tree_invert(a);
  csg_tree_clipTo(a, b);
  csg_tree_clipTo(b, a);
  csg_tree_invert(b);
  csg_tree_clipTo(b, a);
  csg_tree_invert(b);
  csg_tree_addTree(a, b);
  csg_tree_invert(a);
  return a;
};

export const csg_intersect = (a: CSGNode | Mesh, b: CSGNode | Mesh): CSGNode => {
  a = csg_tree(a);
  b = csg_tree(b);
  csg_tree_invert(a);
  csg_tree_clipTo(b, a);
  csg_tree_invert(b);
  csg_tree_clipTo(a, b);
  csg_tree_clipTo(b, a);
  csg_tree_addTree(a, b);
  csg_tree_invert(a);
  return a;
};

export const csg_triangles = (tree: CSGNode) => {
  const result: Mesh = [];
  const recursion = (node: CSGNode | 0) => {
    if (node) {
      for (const polygon of node.$polygons) {
        result.push(...mesh_fromConvexPolygon(polygon.$material, polygon.$points));
      }
      recursion(node.$front);
      recursion(node.$back);
    }
  };
  recursion(tree);
  return result;
};
