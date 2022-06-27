import type { Polygon } from "./cylinder";
import { polygon_clone } from "./cylinder";
import {
  csg_tree,
  csg_tree_addPolygons,
  csg_tree_addTree,
  csg_tree_clipTo,
  csg_tree_invert,
  type CSGNode,
} from "./csg-tree";

/**
 * If is known that there is no intersection between the tree and a list of polygons,
 * just adding them is much faster than union.
 */
export const csg_unionFast = (a: CSGNode | readonly Polygon[], polygons: Polygon[]) => {
  a = csg_tree(a);
  csg_tree_addPolygons(a, polygons.map(polygon_clone));
  return a;
};

export const csg_union = (a: CSGNode | readonly Polygon[], b: CSGNode | Polygon[]): CSGNode => {
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

export const csg_subtract = (a: CSGNode | readonly Polygon[], b: CSGNode | Polygon[]): CSGNode => {
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

export const csg_intersect = (a: CSGNode | readonly Polygon[], b: CSGNode | Polygon[]): CSGNode => {
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

export const csg_polygons = (tree: CSGNode) => {
  const result: Polygon[] = [];
  const recursion = (node: CSGNode | 0) => {
    if (node) {
      result.push(...node.$polygons);
      recursion(node.$front);
      recursion(node.$back);
    }
  };
  recursion(tree);
  return result;
};
