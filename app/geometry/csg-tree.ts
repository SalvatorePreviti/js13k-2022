import { vec3_dot, vec3_triangleNormal, type Plane } from "../math/vectors";
import { CSGPolygon_split } from "./csg-polygon";
import type { Polygon, Vertex } from "./cylinder";
import { polygon_flipSelf } from "./cylinder";

export interface CSGNode extends Plane {
  $front: CSGNode | 0;
  $back: CSGNode | 0;
  $polygons: Polygon[];
}

export const CSGNode_new = (polygon: Polygon): CSGNode => {
  // polygon: Polygon
  const node = vec3_triangleNormal(polygon.$points as [Vertex, Vertex, Vertex]) as CSGNode;
  node.w = vec3_dot(node, polygon.$points[0]!);
  node.$front = 0;
  node.$back = 0;
  node.$polygons = [polygon];
  return node;
};

/** Convert solid space to empty space and empty space to solid space. */
export const csg_tree_invert = (node: CSGNode | 0) => {
  if (node) {
    const { $front, $back } = node;
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    node.$back = $front;
    node.$front = $back;
    for (const polygon of node.$polygons) {
      polygon_flipSelf(polygon);
    }
    csg_tree_invert($front);
    csg_tree_invert($back);
  }
};

export const csg_tree_clipPolygon = (node: CSGNode, polygon: Polygon, result: Polygon[]) => {
  const { $front, $back } = CSGPolygon_split(node, polygon);
  if ($front) {
    if (node.$front) {
      csg_tree_clipPolygon(node.$front, $front, result);
    } else {
      result.push($front);
    }
  }
  if ($back && node.$back) {
    csg_tree_clipPolygon(node.$back, $back, result);
  }
};

export const csg_tree_clipTo = (node: CSGNode | 0, bsp: CSGNode) => {
  if (node) {
    const result: Polygon[] = [];
    for (const polygon of node.$polygons) {
      csg_tree_clipPolygon(bsp, polygon, result);
    }
    node.$polygons = result;
    csg_tree_clipTo(node.$front, bsp);
    csg_tree_clipTo(node.$back, bsp);
  }
};

export const csg_tree_addPolygon = (node: CSGNode, polygon: Polygon) => {
  const { $type, $front, $back } = CSGPolygon_split(node, polygon);
  if ($front) {
    if (!$type) {
      // Coplanar
      node.$polygons.push($front);
    } else if (node.$front) {
      // We need to go down one level
      csg_tree_addPolygon(node.$front, $front);
    } else {
      // A new leaf
      node.$front = CSGNode_new($front);
    }
  }
  if ($back) {
    if (!$type) {
      // Coplanar
      node.$polygons.push($back);
    } else if (node.$back) {
      // We need to go down one level
      csg_tree_addPolygon(node.$back, $back);
    } else {
      // A new leaf
      node.$back = CSGNode_new($back);
    }
  }
};

export const csg_tree_addTree = (node: CSGNode, source: CSGNode | 0) => {
  if (source) {
    for (const polygon of source.$polygons) {
      csg_tree_addPolygon(node, polygon);
    }
    csg_tree_addTree(node, source.$back);
    csg_tree_addTree(node, source.$front);
  }
};

/**
 * If the given argument is a list of polygons, a new BSP tree built from the list of polygons is returned.
 * If the given argument is already a BSP tree, return it as is.
 */
export const csg_tree = (n: CSGNode | readonly Polygon[]): CSGNode => {
  if ((n as any).map) {
    // Build a BSP tree from a list of polygons
    const csgPolygons = n as Polygon[];

    const $back = csgPolygons[0]!;
    n = CSGNode_new($back);
    for (let i = 1; i < csgPolygons.length; i++) {
      csg_tree_addPolygon(n, csgPolygons[i]!);
    }
  }
  return n as CSGNode;
};
