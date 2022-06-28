import { vec3_dot, vec3_triangleNormal, type Plane } from "../math/vectors";
import type { CSGPolygon } from "./csg-polygon";
import { CSGPolygon_split } from "./csg-polygon";
import type { Polygon, Vertex } from "./cylinder";

export interface CSGNode extends Plane {
  /** Coplanar polygons */
  p: CSGPolygon[];
  /** Front child */
  f: CSGNode | null;
  /** Back child */
  b: CSGNode | null;
}

export const csg_tree_each = (node: CSGNode | null, fn: (node: CSGNode) => void) => {
  if (node) {
    fn(node);
    csg_tree_each(node.f, fn);
    csg_tree_each(node.b, fn);
  }
};

/** Convert solid space to empty space and empty space to solid space. */
export const csg_tree_flip = (root: CSGNode | null) =>
  csg_tree_each(root, (node) => {
    const { f, b } = node;
    node.b = f;
    node.f = b;
    node.x *= -1;
    node.y *= -1;
    node.z *= -1;
    node.w *= -1;
    for (const polygon of node.p) {
      polygon.$flipped = !polygon.$flipped;
    }
  });

export const PLANE_EPSILON = 1e-5;

export const csg_tree_addPolygon = (node: CSGNode | null | undefined, polygon: CSGPolygon): CSGNode => {
  if (!node) {
    node = vec3_triangleNormal(polygon.$points as [Vertex, Vertex, Vertex]) as CSGNode;
    node.w = vec3_dot(node, polygon.$points[0]!);
    node.p = [polygon];
    node.f = null;
    node.b = null;
    return node;
  }
  const { f, b } = CSGPolygon_split(node, polygon);
  if (!f && !b) {
    // Coplanar
    node.p.push(polygon);
    return node;
  }
  if (f) {
    // Front
    node.f = csg_tree_addPolygon(node.f, f);
  }
  if (b) {
    // Back
    node.b = csg_tree_addPolygon(node.b, b);
  }
  return node;
};

const csg_tree_clipPolygon = (node: CSGNode, polygon: CSGPolygon, result: CSGPolygon[]) => {
  let { f, b } = CSGPolygon_split(node, polygon);
  if (!f && !b) {
    if (
      vec3_dot(node, vec3_triangleNormal(polygon.$points as [Vertex, Vertex, Vertex])) * (polygon.$flipped ? -1 : 1) >
      node.w
    ) {
      f = polygon;
    } else {
      b = polygon;
    }
  }
  if (f) {
    if (node.f) {
      csg_tree_clipPolygon(node.f, f, result);
    } else {
      result.push(f);
    }
  }
  if (b && node.b) {
    csg_tree_clipPolygon(node.b, b, result);
  }
};

export const csg_tree_clipTo = (root: CSGNode | null, bsp: CSGNode) => {
  csg_tree_each(root, (node) => {
    const clipped: CSGPolygon[] = [];
    for (const polygon of node.p) {
      csg_tree_clipPolygon(bsp, polygon, clipped);
    }
    node.p = clipped;
  });
};

export const csg_tree_addTree = (tree: CSGNode | null, source: CSGNode | null) =>
  csg_tree_each(source, (sourceNode) => {
    for (const polygon of sourceNode.p) {
      csg_tree_addPolygon(tree, polygon);
    }
  });

/**
 * If the given argument is a list of polygons, a new BSP tree built from the list of polygons is returned.
 * If the given argument is already a BSP tree, return it as is.
 */
export const csg_tree = (n: CSGNode | readonly Polygon[]): CSGNode => {
  if ((n as Polygon[]).map) {
    // Build a BSP tree from a list of polygons
    let root: CSGNode | undefined;
    for (const polygon of n as CSGPolygon[]) {
      root = csg_tree_addPolygon(root, { ...polygon, $flipped: false });
    }
    return root!;
  }
  return n as CSGNode;
};
