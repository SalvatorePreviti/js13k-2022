import type { Polygon } from "./cylinder";
import { polygon_clone, polygon_flipped } from "./cylinder";
import {
  csg_tree,
  csg_tree_addPolygon,
  csg_tree_addTree,
  csg_tree_clipTo,
  csg_tree_flip,
  type CSGNode,
} from "./csg-tree";

/**
 * If is known that there is no intersection between the tree and a list of polygons,
 * just adding them is much faster than union.
 */
export const csg_unionFast = (tree: CSGNode | readonly Polygon[], polygons: Polygon[]) => {
  tree = csg_tree(tree);
  for (const polygon of polygons) {
    csg_tree_addPolygon(tree, { ...polygon, $flipped: false });
  }
  return tree;
};

export const csg_union = (a: CSGNode | readonly Polygon[], b: CSGNode | Polygon[]): CSGNode => {
  a = csg_tree(a);
  b = csg_tree(b);
  csg_tree_clipTo(a, b);
  csg_tree_clipTo(b, a);
  csg_tree_flip(b);
  csg_tree_clipTo(b, a);
  csg_tree_flip(b);
  csg_tree_addTree(a, b);
  return a;
};

export const csg_subtract = (a: CSGNode | readonly Polygon[], b: CSGNode | Polygon[]): CSGNode => {
  a = csg_tree(a);
  csg_tree_flip(a);
  b = csg_tree(b);
  csg_tree_clipTo(a, b);
  csg_tree_clipTo(b, a);
  csg_tree_flip(b);
  csg_tree_clipTo(b, a);
  csg_tree_flip(b);
  csg_tree_addTree(a, b);
  csg_tree_flip(a);
  return a;
};

export const csg_intersect = (a: CSGNode | readonly Polygon[], b: CSGNode | Polygon[]): CSGNode => {
  a = csg_tree(a);
  csg_tree_flip(a);
  b = csg_tree(b);
  csg_tree_clipTo(b, a);
  csg_tree_flip(b);
  csg_tree_clipTo(a, b);
  csg_tree_clipTo(b, a);
  csg_tree_addTree(a, b);
  csg_tree_flip(a);
  return a;
};

export const csg_polygons = (tree: CSGNode) => {
  const result: Polygon[] = [];
  const recursion = (node: CSGNode | null) => {
    if (node) {
      for (const polygon of node.p) {
        result.push(polygon.$flipped ? polygon_flipped(polygon) : polygon_clone(polygon));
      }
      recursion(node.f);
      recursion(node.b);
    }
  };
  recursion(tree);
  return result;
};
