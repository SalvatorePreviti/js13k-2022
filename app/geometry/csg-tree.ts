import type { Plane } from "../math/plane";
import { CSGPolygon_new, CSGPolygon_split, type CSGPolygon } from "./csg-polygon";
import type { Polygon } from "./cylinder";

export interface CSGNode extends Plane {
  $polygons: CSGPolygon[];
  $front: CSGNode | 0;
  $back: CSGNode | 0;
}

export const CSGNode_new = ({ x, y, z, w }: Plane): CSGNode => ({
  $polygons: [],
  $front: 0,
  $back: 0,
  x,
  y,
  z,
  w,
});

/** Convert solid space to empty space and empty space to solid space. */
export const csg_tree_invert = (node: CSGNode | 0) => {
  if (!node) {
    return;
  }
  const { $front, $back } = node;
  node.x *= -1;
  node.y *= -1;
  node.z *= -1;
  node.w *= -1;
  node.$back = $front;
  node.$front = $back;
  for (const polygon of node.$polygons) {
    polygon.$points.reverse();
    polygon.x *= -1;
    polygon.y *= -1;
    polygon.z *= -1;
    polygon.w *= -1;
  }
  csg_tree_invert($front);
  csg_tree_invert($back);
};

export const csg_tree_clipPolygon = (node: CSGNode, polygon: CSGPolygon, result: CSGPolygon[]) => {
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
    const result: CSGPolygon[] = [];
    for (const polygon of node.$polygons) {
      csg_tree_clipPolygon(bsp, polygon, result);
    }
    node.$polygons = result;
    csg_tree_clipTo(node.$front, bsp);
    csg_tree_clipTo(node.$back, bsp);
  }
};

export const csg_tree_addPolygon = (node: CSGNode, polygon: CSGPolygon) => {
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
      (node.$front = CSGNode_new($front)).$polygons.push($front);
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
      (node.$back = CSGNode_new($back)).$polygons.push($back);
    }
  }
};

export const csg_tree_addPolygons = (node: CSGNode, polygons: CSGPolygon[]) => {
  for (let i = 0, len = polygons.length; i < len; ++i) {
    csg_tree_addPolygon(node, polygons[i]!);
  }
};

export const csg_tree_addTree = (node: CSGNode, source: CSGNode | 0) => {
  if (source) {
    csg_tree_addPolygons(node, source.$polygons);
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
    const csgPolygons = (n as readonly Polygon[]).map(CSGPolygon_new);
    n = CSGNode_new(csgPolygons[0]!);
    csg_tree_addPolygons(n, csgPolygons);
  }
  return n as CSGNode;
};
