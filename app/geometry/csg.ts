import type { Polygon } from "./cylinder";
import { CSGPolygon_new, type CSGPolygon } from "./csg-polygon";
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
export const csg_unionFast = (a: CSGNode | readonly Polygon[], polygons: readonly Polygon[]) => {
  a = csg_tree(a);
  const csgPolygons = polygons.map(CSGPolygon_new);
  csg_tree_addPolygons(a, csgPolygons);
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

export const csg_polygons = (tree: CSGNode | 0, result: CSGPolygon[] = []) => {
  if (tree) {
    result.push(...tree.$polygons);
    csg_polygons(tree.$front, result);
    csg_polygons(tree.$back, result);
  }
  return result;
};
